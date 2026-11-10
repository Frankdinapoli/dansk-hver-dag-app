/* Catena dei motori IA → window.DanskAI (contratto: docs/piano-v3.md §3.2 e §3.3).
   Ordine: Claude (solo dentro claude.ai) → proxy gratuito → Gemini con chiave personale → Ollama → nessuno.
   sample() restituisce UNA funzione che, a ogni chiamata, prova i motori in ordine e passa al successivo
   se uno è in difficoltà (limite, quota, rete, timeout, errore del servizio, JSON rovinato).
   Un motore che fallisce va «in pausa» per un po', così la conversazione non si ferma. */
(function () {
  const KEY = "dansk-hver-dag.ai";            // impostazioni (condivise con local-ai.js)
  const DEVICE_KEY = "dansk-hver-dag.device"; // identificativo casuale di questo dispositivo
  const CACHE_KEY = "dansk-hver-dag.aicache"; // risposte salvate (solo se opts.cache === true)
  const CACHE_MAX = 60;
  const PROXY_FIRST = 9000;    // primo tentativo verso il proxy: oltre questo tempo si riprova una volta
  const TIMEOUT = 25000;       // timeout client per chiamata al proxy o a Gemini
  const TIMEOUT_LOCAL = 90000; // il modello locale è lento: più tempo
  const TIMEOUT_CLAUDE = 90000;

  const LABELS = { claude: "Claude", proxy: "IA gratuita", gemini: "Gemini (tua chiave)", local: "Modello locale" };

  // Errori che NON devono far passare al motore successivo (la richiesta in sé è il problema, o l'utente ha fermato)
  const STOP = new Set(["cancelled", "refused", "too_large", "prompt_too_large"]);

  const ERRORS_IT = {
    all_failed: "Nessun servizio di IA risponde in questo momento. Puoi continuare con i dialoghi senza IA.",
    quota_day: "Per oggi la quota gratuita dell'IA è finita. Torna domani oppure continua con i dialoghi senza IA.",
    too_large: "Il testo è troppo lungo per l'IA. Accorcialo e riprova.",
    timeout: "L'IA ci mette troppo a rispondere. Riprova tra poco.",
    network: "Non riesco a raggiungere il servizio di IA. Controlla la connessione a internet.",
  };

  /* ---------- impostazioni e identificativo ---------- */
  function cfg() {
    let s = {};
    try { s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { s = {}; }
    const conf = window.DANSK_CONFIG || {};
    // indirizzo salvato in «Avanzate» (per prove) ha la precedenza su quello di js/config.js
    const proxy = String(s.proxy || conf.proxy || "").trim();
    const engine = ["auto", "gemini", "ollama", "off"].includes(s.engine) ? s.engine : "auto";
    return { engine, proxy, geminiKey: String(s.geminiKey || "").trim(), geminiOk: !!s.geminiOk, configured: !!s.configured };
  }
  function deviceId() {
    let id = "";
    try { id = localStorage.getItem(DEVICE_KEY) || ""; } catch (e) {}
    if (!/^[0-9a-f]{16,64}$/.test(id)) {
      const a = new Uint8Array(16);
      try { crypto.getRandomValues(a); } catch (e) { for (let i = 0; i < 16; i++) a[i] = Math.floor(Math.random() * 256); }
      id = Array.from(a, b => b.toString(16).padStart(2, "0")).join("");
      try { localStorage.setItem(DEVICE_KEY, id); } catch (e) {}
    }
    return id;
  }

  /* ---------- utilità ---------- */
  function toMessages(input) {
    if (typeof input === "string") return [{ role: "user", content: input }];
    if (Array.isArray(input)) return input.map(t => ({ role: t && t.role === "assistant" ? "assistant" : "user", content: String((t && t.content) ?? "") }));
    return [{ role: "user", content: String(input ?? "") }];
  }

  // Parser tollerante: toglie i ``` e prende il primo oggetto (o elenco) completo
  function parseJson(text) {
    let t = String(text || "").trim();
    try { return JSON.parse(t); } catch (e) {}
    t = t.replace(/```[a-zA-Z]*\s*/g, "").trim();
    try { return JSON.parse(t); } catch (e) {}
    const start = t.search(/[{[]/);
    if (start >= 0) {
      let depth = 0, inStr = false, esc = false;
      for (let i = start; i < t.length; i++) {
        const c = t[i];
        if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
        if (c === '"') inStr = true;
        else if (c === "{" || c === "[") depth++;
        else if (c === "}" || c === "]") { depth--; if (depth === 0) { try { return JSON.parse(t.slice(start, i + 1)); } catch (e) { break; } } }
      }
    }
    throw { code: "invalid_json", message: "Risposta non in formato JSON" };
  }

  // Esegue fn con un timeout e con l'annullamento dell'utente; fn riceve (signal, arm) e può riarmare il timer.
  // Va in gara con l'annullamento, così funziona anche se il motore ignora il segnale.
  function withTimeout(ms, userSignal, fn) {
    const ctl = new AbortController();
    let timedOut = false, timer, onAbort, rejectAbort;
    const aborted = new Promise((_, rej) => { rejectAbort = rej; });
    aborted.catch(() => {});
    const arm = () => { clearTimeout(timer); timer = setTimeout(() => { timedOut = true; ctl.abort(); rejectAbort({ code: "timeout" }); }, ms); };
    if (userSignal) {
      if (userSignal.aborted) return Promise.reject({ code: "cancelled" });
      onAbort = () => { ctl.abort(); rejectAbort({ code: "cancelled" }); };
      userSignal.addEventListener("abort", onAbort, { once: true });
    }
    arm();
    const work = Promise.resolve().then(() => fn(ctl.signal, arm));
    work.catch(() => {});
    return Promise.race([work, aborted]).catch(e => {
      if (timedOut) throw { code: "timeout" };
      if (userSignal && userSignal.aborted) throw { code: "cancelled" };
      throw e;
    }).finally(() => { clearTimeout(timer); if (userSignal && onAbort) userSignal.removeEventListener("abort", onAbort); });
  }

  // Millisecondi fino alla prossima mezzanotte nel fuso del Pacifico (quando Google azzera la quota giornaliera)
  function msToPacificMidnight() {
    try {
      const p = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", minute: "numeric", second: "numeric", hourCycle: "h23" }).formatToParts(new Date());
      const g = t => +p.find(x => x.type === t).value;
      return Math.max(60000, ((24 - g("hour")) * 3600 - g("minute") * 60 - g("second")) * 1000);
    } catch (e) { return 3600000; }
  }

  /* ---------- stato condiviso ---------- */
  const st = { last: null, via: "", quota: null, pauses: {}, ping: null, pingPromise: null };
  const listeners = new Set();
  function emit() { const s = status(); listeners.forEach(f => { try { f(s); } catch (e) {} }); }
  function paused(id) { const u = st.pauses[id]; if (!u) return false; if (Date.now() >= u) { delete st.pauses[id]; return false; } return true; }
  function pause(id, ms) { st.pauses[id] = Date.now() + ms; emit(); }
  function pauseFor(id, e) {
    const c = e && e.code;
    if (c === "rate_limited") pause(id, (+e.retry_after > 0 ? Math.min(+e.retry_after, 3600) : 60) * 1000);
    else if (c === "quota_day") pause(id, msToPacificMidnight());
    else if (c === "network" || c === "timeout" || c === "gemini_unreachable" || c === "local_unreachable") pause(id, 30000);
    else if (/^(gemini_(bad_key|no_model|region)|local_no_model|not_granted|sampling_disabled|session_expired)$/.test(c || "")) pause(id, 600000);
    else if (c !== "invalid_json" && c !== "empty_completion") pause(id, 30000);
  }

  /* ---------- Claude (dentro claude.ai) ---------- */
  let claudeP = null;
  function claudeFn() {
    if (!claudeP) claudeP = (window.claude && typeof window.claude.use === "function") ? Promise.resolve().then(() => window.claude.use("sample")).catch(() => null) : Promise.resolve(null);
    return claudeP;
  }
  function noText(opts) { const o = Object.assign({}, opts); delete o.onText; return o; }
  async function claudeCall(input, opts, json) {
    const fn = await claudeFn();
    if (typeof fn !== "function") throw { code: "not_granted" };
    return withTimeout(TIMEOUT_CLAUDE, opts.signal, async () => {
      if (json) return { obj: await fn.json(input, noText(opts)) };
      const r = await fn(input, noText(opts));
      return { text: String((r && r.text) ?? r ?? "") };
    });
  }

  /* ---------- proxy gratuito ---------- */
  async function post(url, body, signal) {
    let res;
    try { res = await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body), redirect: "follow", signal }); }
    catch (e) { if (e && e.name === "AbortError") throw { code: "cancelled" }; throw { code: "network", message: String(e && e.message || e) }; }
    return res;
  }
  // Prova un indirizzo: op ping (non consuma quota del modello)
  async function pingProxy(url) {
    url = String(url || "").trim();
    if (!/^https:\/\/|^http:\/\/localhost|^http:\/\/127\./.test(url)) return { ok: false, code: "bad_url", error: "L'indirizzo deve cominciare con https://" };
    try {
      const data = await withTimeout(12000, null, async signal => {
        const res = await post(url, { v: 1, op: "ping" }, signal);
        try { return await res.json(); } catch (e) { throw { code: "upstream", message: "La risposta non è nel formato atteso" }; }
      });
      if (data && data.ok && data.service === "dansk-proxy") return { ok: true, info: data };
      return { ok: false, code: "not_proxy", error: "L'indirizzo risponde, ma non è il servizio dell'app." };
    } catch (e) { return { ok: false, code: e && e.code || "network", error: e && (e.message || e.code) || "errore" }; }
  }
  // Un solo ping per sessione (serve a sapere se c'è lo streaming e se il servizio è raggiungibile)
  function ensurePing() {
    const url = cfg().proxy;
    if (!url) return Promise.resolve(null);
    if (st.ping && st.ping.url === url) return Promise.resolve(st.ping);
    if (!st.pingPromise || st.pingPromise.url !== url) {
      const p = pingProxy(url).then(r => {
        st.ping = { url, ok: r.ok, stream: !!(r.ok && r.info.stream), info: r.ok ? r.info : null };
        if (!r.ok) pause("proxy", 30000); else emit();
        return st.ping;
      });
      p.url = url; st.pingPromise = p;
    }
    return st.pingPromise;
  }
  function proxyReply(data) {
    if (!data || typeof data !== "object") throw { code: "upstream", message: "Risposta non valida" };
    if (data.quota && typeof data.quota.left === "number") { st.quota = { left: data.quota.left, limit: +data.quota.limit || 0 }; }
    if (!data.ok) throw { code: data.code || "upstream", retry_after: data.retry_after };
    const text = String(data.text ?? "");
    if (!text.trim()) throw { code: "empty_completion" };
    st.via = String(data.engine || "");
    return { text };
  }
  async function readStream(res, onText, arm) {
    const reader = res.body.getReader(), dec = new TextDecoder();
    let buf = "", text = "", meta = null;
    const handle = line => {
      if (!line.startsWith("data:")) return;
      let d; try { d = JSON.parse(line.slice(5).trim()); } catch (e) { return; }
      if (d.ok === false) throw { code: d.code || "upstream", retry_after: d.retry_after };
      if (typeof d.d === "string") { text += d.d; try { onText(text); } catch (e) {} }
      if (d.done) meta = d;
    };
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      arm();
      buf += dec.decode(value, { stream: true });
      let i;
      while ((i = buf.indexOf("\n")) >= 0) { handle(buf.slice(0, i).replace(/\r$/, "")); buf = buf.slice(i + 1); }
    }
    if (buf.trim()) handle(buf.trim());
    return proxyReply({ ok: true, text, engine: meta && meta.engine, quota: meta && meta.quota });
  }
  async function proxyCall(input, opts, json) {
    const url = cfg().proxy;
    if (!url) throw { code: "network" };
    const wantStream = typeof opts.onText === "function";
    const info = wantStream ? await ensurePing() : st.ping;
    const body = { v: 1, op: "chat", device: deviceId(), messages: toMessages(input), json: !!json, tier: opts.modelTier === "quick" ? "quick" : "default" };
    const stream = wantStream && !!(info && info.ok && info.stream);
    if (stream) body.stream = true;
    const once = ms => withTimeout(ms, opts.signal, async (signal, arm) => {
      const res = await post(url, body, signal);
      if (res.status >= 500) throw { code: "upstream", message: "HTTP " + res.status };
      if (stream && /event-stream/.test(res.headers.get("content-type") || "") && res.body) return readStream(res, opts.onText, arm);
      let data; try { data = await res.json(); } catch (e) { if (e && e.name === "AbortError") throw { code: "cancelled" }; throw { code: "upstream", message: "Risposta non valida" }; }
      return proxyReply(data);
    });
    if (stream) return once(TIMEOUT);
    // Misurato sul servizio vero: di norma risponde in 2–3 s, ma ogni tanto il modello gratuito si blocca per decine
    // di secondi o fallisce una volta. Primo tentativo breve, poi UN secondo tentativo prima di passare alla riserva.
    try { return await once(PROXY_FIRST); }
    catch (e) { if (e && (e.code === "timeout" || e.code === "upstream")) return once(TIMEOUT); throw e; }
  }

  /* ---------- Gemini con chiave personale e Ollama (adattatori in local-ai.js) ---------- */
  async function geminiCall(input, opts, json) {
    const L = window.DanskLocalAI;
    if (!L || !L.gemini) throw { code: "gemini_unreachable" };
    return withTimeout(TIMEOUT, opts.signal, async signal => ({ text: (await L.gemini(input, Object.assign({}, opts, { signal }), json)).text }));
  }
  async function localCall(input, opts, json) {
    const L = window.DanskLocalAI;
    if (!L || !L.ollama) throw { code: "local_unreachable" };
    return withTimeout(TIMEOUT_LOCAL, opts.signal, async signal => ({ text: await L.ollama(input, Object.assign({}, opts, { signal }), json) }));
  }

  const ENGINES = [
    { id: "claude", call: claudeCall },
    { id: "proxy", call: proxyCall },
    { id: "gemini", call: geminiCall },
    { id: "local", call: localCall },
  ];

  // Motori utilizzabili adesso (secondo le impostazioni), anche quelli in pausa, nell'ordine della catena
  async function configured() {
    const c = cfg(), out = [];
    if (c.engine === "off") return out;
    if (c.engine === "auto") {
      if (typeof await claudeFn() === "function") out.push("claude");
      if (c.proxy) out.push("proxy");
    }
    if ((c.engine === "auto" || c.engine === "gemini") && c.geminiKey && (c.geminiOk || c.engine === "gemini")) out.push("gemini");
    if ((c.engine === "auto" && c.configured) || c.engine === "ollama") out.push("local");
    return out;
  }
  async function candidates() {
    const all = await configured();
    const ok = all.filter(id => !paused(id));
    return ok.length ? ok : all; // se sono tutti in pausa, li riprova comunque (nell'ordine)
  }

  /* ---------- cache (solo se opts.cache === true) ---------- */
  let cache = null;
  function cacheList() {
    if (!cache) { try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || "[]"); if (!Array.isArray(cache)) cache = []; } catch (e) { cache = []; } }
    return cache;
  }
  function hash(s) {
    let a = 5381, b = 52711;
    for (let i = 0; i < s.length; i++) { const c = s.charCodeAt(i); a = ((a << 5) + a) ^ c; b = ((b << 5) + b + c) | 0; }
    return (a >>> 0).toString(16) + (b >>> 0).toString(16) + s.length.toString(16);
  }
  function cacheKey(input, json, opts) { return hash(JSON.stringify([toMessages(input), !!json, opts.modelTier === "quick" ? "q" : "d"])); }
  function cacheGet(k) {
    const l = cacheList(), i = l.findIndex(x => x.k === k);
    if (i < 0) return undefined;
    const [e] = l.splice(i, 1); l.push(e); // il più usato di recente va in fondo
    return e.v;
  }
  function cachePut(k, v) {
    const l = cacheList(), i = l.findIndex(x => x.k === k);
    if (i >= 0) l.splice(i, 1);
    l.push({ k, v });
    while (l.length > CACHE_MAX) l.shift();
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(l)); } catch (e) { l.splice(0, Math.ceil(l.length / 2)); }
  }

  /* ---------- la funzione restituita da sample() ---------- */
  async function run(input, opts, json) {
    opts = opts || {};
    const useCache = opts.cache === true;
    const ck = useCache ? cacheKey(input, json, opts) : "";
    if (useCache) { const hit = cacheGet(ck); if (hit !== undefined) return hit; }
    const list = await candidates();
    if (!list.length) throw { code: "all_failed", causes: [] };
    const causes = [];
    let emitted = false;
    const o = Object.assign({}, opts);
    if (typeof opts.onText === "function") o.onText = t => { emitted = true; opts.onText(t); };
    for (const id of list) {
      const eng = ENGINES.find(x => x.id === id);
      let result = null, lastErr = null;
      for (let attempt = 0; attempt < 2 && !result; attempt++) {
        try {
          const r = await eng.call(input, o, json);
          if (!json) result = { text: r.text };
          else if ("obj" in r) result = { obj: r.obj };
          else result = { obj: parseJson(r.text) };
        } catch (e) {
          lastErr = e && e.code ? e : { code: "upstream", message: String(e && e.message || e) };
          if (lastErr.code !== "invalid_json") break; // un solo tentativo in più, e solo per il JSON rovinato
        }
      }
      if (result) {
        st.last = id; if (id !== "proxy") st.via = ""; emit();
        const v = json ? result.obj : { text: result.text, truncated: false, modelTierApplied: id };
        if (useCache) cachePut(ck, v);
        return v;
      }
      if (STOP.has(lastErr.code)) throw lastErr;
      causes.push({ engine: id, code: lastErr.code });
      pauseFor(id, lastErr);
      if (emitted && opts.onText) { emitted = false; try { opts.onText(""); } catch (e) {} } // il testo parziale non vale più
    }
    st.last = null; emit();
    throw { code: "all_failed", causes };
  }
  const fn = (input, opts) => run(input, opts, false);
  fn.json = (input, opts) => run(input, opts, true);

  /* ---------- API pubblica ---------- */
  async function sample() { return (await configured()).length ? fn : null; }
  async function mode() {
    if ((await configured()).includes("proxy")) await ensurePing(); // un solo ping per sessione, non consuma quota del modello
    const list = await candidates();
    return list.length ? list[0] : null;
  }
  // Stato sincrono, per mostrare l'etichetta senza aspettare la rete
  function status() {
    const c = cfg();
    let engine = st.last;
    if (!engine || paused(engine)) {
      // previsione senza rete: primo motore configurato non in pausa
      const guess = [];
      if (c.engine !== "off") {
        if (c.engine === "auto") { if (window.claude && typeof window.claude.use === "function") guess.push("claude"); if (c.proxy) guess.push("proxy"); }
        if ((c.engine === "auto" || c.engine === "gemini") && c.geminiKey && (c.geminiOk || c.engine === "gemini")) guess.push("gemini");
        if ((c.engine === "auto" && c.configured) || c.engine === "ollama") guess.push("local");
      }
      engine = guess.find(id => !paused(id)) || guess[0] || null;
    }
    const q = engine === "proxy" ? st.quota : null;
    return {
      engine, label_it: engine ? LABELS[engine] : "Senza IA", quota: q,
      low: !!(q && q.limit > 0 && q.left <= 0.15 * q.limit),
      offline: !engine, via: engine === "proxy" ? st.via : "",
    };
  }
  function onStatus(f) { listeners.add(f); return () => listeners.delete(f); }
  function reset() { st.pauses = {}; st.ping = null; st.pingPromise = null; st.last = null; st.via = ""; emit(); }

  window.DanskAI = { sample, mode, status, onStatus, reset, pingProxy, parseJson, deviceId, ERRORS_IT, LABELS,
    /* messaggio italiano per un errore (usa ERRORS_IT; null se il codice non è tra quelli nuovi) */
    explain: e => (e && ERRORS_IT[e.code]) || null,
    clearCache: () => { cache = []; try { localStorage.removeItem(CACHE_KEY); } catch (e) {} } };
})();
