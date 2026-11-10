/* Dansk hver dag — sincronizzazione dei progressi tra dispositivi, cifrata sul dispositivo (piano v3 §3.3 e §3.7).
   Il codice di collegamento non lascia mai il dispositivo: da lui si derivano (PBKDF2) la chiave AES-GCM e l'identificativo
   della «stanza». Il servizio vede solo un blocco cifrato. Impostazioni di sync in localStorage "dansk-hver-dag.sync".
   API: window.DanskSync = { status(), syncNow(), link(code), unlink(), onChange(fn), generate(), shareLink(), _test }.
   Test: tools/test-sync.js */
(function () {
  "use strict";
  const CFG_KEY = "dansk-hver-dag.sync";
  const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";   // 32 simboli, senza I O 0 1
  const CODE_LEN = 20;
  const SALT = "dansk-hver-dag/sync/v1";
  const ITER = 200000;
  const MIN_GAP = 60000, SAVE_WAIT = 20000, START_WAIT = 2000, BACKOFF = [30000, 60000, 120000, 300000];

  let A = null;
  const listeners = [];
  let busy = false, timer = null, timerAt = 0, lastStart = 0, failures = 0, pendingApply = false, keyCache = null, applying = false;
  let mem = { last: null };   // ultimo esito: { ok, kind, at, text }

  /* ---------- impostazioni locali ---------- */
  const loadCfg = () => { try { const c = JSON.parse(localStorage.getItem(CFG_KEY) || "{}"); return c && typeof c === "object" ? c : {}; } catch (e) { return {}; } };
  const saveCfg = c => { try { localStorage.setItem(CFG_KEY, JSON.stringify(c)); } catch (e) {} };
  const serviceUrl = () => { const c = window.DANSK_CONFIG || {}; return String(c.sync || c.proxy || "").trim(); };

  /* ---------- codice e cifratura ---------- */
  function generateCode() {
    const b = new Uint8Array(CODE_LEN); crypto.getRandomValues(b);
    let s = ""; for (const x of b) s += ALPHABET[x & 31];   // 256 è multiplo di 32: nessuna distorsione
    return s;
  }
  const normCode = c => String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
  const validCode = c => c.length === CODE_LEN && [...c].every(ch => ALPHABET.includes(ch));
  const groups = c => c.match(/.{1,5}/g).join("-");
  const enc = s => new TextEncoder().encode(s);
  const hex = buf => [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, "0")).join("");
  const b64 = bytes => { let s = ""; for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000)); return btoa(s); };
  const unb64 = t => Uint8Array.from(atob(t), ch => ch.charCodeAt(0));

  async function derive(code) {
    if (keyCache && keyCache.code === code) return keyCache;
    const base = await crypto.subtle.importKey("raw", enc(code), "PBKDF2", false, ["deriveBits"]);
    const bits = new Uint8Array(await crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-256", salt: enc(SALT), iterations: ITER }, base, 512));
    const key = await crypto.subtle.importKey("raw", bits.slice(0, 32), "AES-GCM", false, ["encrypt", "decrypt"]);
    const room = hex(await crypto.subtle.digest("SHA-256", bits.slice(32)));
    keyCache = { code, key, room };
    return keyCache;
  }
  async function pipe(bytes, stream) { return new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer()); }
  async function seal(obj, key) {
    const raw = enc(JSON.stringify(obj));
    let flag = 0, data = raw;
    if (typeof CompressionStream === "function") { try { data = await pipe(raw, new CompressionStream("gzip")); flag = 1; } catch (e) { flag = 0; data = raw; } }
    const plain = new Uint8Array(data.length + 1); plain[0] = flag; plain.set(data, 1);
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const ct = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plain));
    const out = new Uint8Array(12 + ct.length); out.set(iv); out.set(ct, 12);
    return b64(out);
  }
  async function open(blob, key) {
    try {
      const all = unb64(blob);
      const plain = new Uint8Array(await crypto.subtle.decrypt({ name: "AES-GCM", iv: all.slice(0, 12) }, key, all.slice(12)));
      let data = plain.slice(1);
      if (plain[0] === 1) data = await pipe(data, new DecompressionStream("gzip"));
      const obj = JSON.parse(new TextDecoder().decode(data));
      if (!obj || obj.v !== 1 || !obj.state || typeof obj.state !== "object") throw new Error("formato");
      return obj;
    } catch (e) { const err = new Error("blob non leggibile"); err.code = "bad_code"; throw err; }
  }

  /* ---------- stato sincronizzato ---------- */
  const clone = o => JSON.parse(JSON.stringify(o));
  // Senza campi locali: percorso, voce, ora dell'ultimo salvataggio e conversazione in corso
  function strip(s) {
    const o = clone(s || {});
    delete o.route; delete o.voice; delete o.updatedAt;
    if (o.tutor && typeof o.tutor === "object") delete o.tutor.current;
    return o;
  }
  function canon(v) {
    if (Array.isArray(v)) return "[" + v.map(canon).join(",") + "]";
    if (v && typeof v === "object") return "{" + Object.keys(v).sort().map(k => JSON.stringify(k) + ":" + canon(v[k])).join(",") + "}";
    return JSON.stringify(v === undefined ? null : v);
  }
  const differs = (a, b) => canon(strip(a)) !== canon(strip(b));

  /* ---------- rete ---------- */
  async function call(body) {
    const url = serviceUrl();
    const ctl = new AbortController(); const to = setTimeout(() => ctl.abort(), 25000);
    let res;
    try { res = await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=UTF-8" }, body: JSON.stringify(Object.assign({ v: 1 }, body)), signal: ctl.signal, redirect: "follow" }); }
    catch (e) { const err = new Error("rete"); err.code = "net"; throw err; }
    finally { clearTimeout(to); }
    let data; try { data = await res.json(); } catch (e) { const err = new Error("risposta"); err.code = "net"; throw err; }
    if (!data || typeof data !== "object") { const err = new Error("risposta"); err.code = "net"; throw err; }
    return data;
  }

  /* ---------- esito e avvisi ---------- */
  function setLast(kind, ok) {
    mem.last = { ok: !!ok, kind, at: Date.now() };
    const c = loadCfg(); c.last = mem.last; if (ok) c.lastOk = mem.last.at; saveCfg(c);
    emit();
  }
  const emit = () => { const s = status(); listeners.forEach(f => { try { f(s); } catch (e) {} }); };
  const LAST_TEXT = {
    ok: "Tutto aggiornato.",
    net: "Servizio non raggiungibile: riprovo tra poco.",
    bad_code: "Codice sbagliato o dati di un'altra versione. Non ho cambiato nulla.",
    service: "Il servizio ha risposto con un errore: riprovo tra poco.",
    wait: "Nuovi dati dall'altro dispositivo: li applico appena finisci quello che stai facendo.",
  };
  function status() {
    const c = loadCfg(), url = serviceUrl();
    const last = mem.last || c.last || null;
    return { available: !!url, linked: !!(url && c.code), busy, lastOk: c.lastOk || 0, last: last ? Object.assign({ text: LAST_TEXT[last.kind] || "" }, last) : null, nextTry: timer ? timerAt : 0 };
  }

  // L'utente sta facendo qualcosa che un ridisegno della scheda interromperebbe?
  function userBusy() {
    if (!A) return false;
    if (document.querySelector(".qpanel")) return true;
    const ae = document.activeElement;
    if (ae && /^(INPUT|TEXTAREA)$/.test(ae.tagName) && ae.value && !ae.closest("#set-sync")) return true;
    const s = A.state(), tab = s.route && s.route.tab;
    if (tab === "livello") return true;
    if (tab === "tutor" && s.tutor && s.tutor.current) return true;
    return false;
  }

  /* ---------- ciclo ---------- */
  async function cycle() {
    const c = loadCfg();
    if (!A || !serviceUrl() || !c.code) return;
    if (busy) return;
    busy = true; lastStart = Date.now(); emit();
    let outcome = "ok";
    try {
      const k = await derive(c.code);
      let remote = await call({ op: "sync.get", room: k.room });
      if (!remote.ok) { const e = new Error("servizio"); e.code = "service"; throw e; }
      for (let attempt = 0; attempt < 4; attempt++) {
        const remoteObj = remote.blob ? await open(remote.blob, k.key) : null;   // se non si decifra: errore bad_code, nulla viene scritto
        const local = A.state();
        const merged = remoteObj ? A.Store.merge(local, remoteObj.state) : A.Store.migrate(local);
        // 1. applico in locale prima di scrivere, così non si perde ciò che l'utente fa durante la rete
        if (differs(merged, local)) {
          if (userBusy()) { pendingApply = true; outcome = "wait"; }
          else { applying = true; try { A.replaceState(merged, { silent: true }); } finally { applying = false; } pendingApply = false; }
        }
        // 2. se il servizio non ha già questo contenuto lo scrivo
        if (remoteObj && !differs(merged, remoteObj.state)) break;
        const blob = await seal({ v: 1, state: strip(merged) }, k.key);
        const put = await call({ op: "sync.put", room: k.room, rev: remote.rev | 0, blob });
        if (put.ok) { const cc = loadCfg(); cc.rev = put.rev; saveCfg(cc); break; }
        if (put.code === "conflict" && attempt < 3) { remote = put; continue; }
        const e = new Error("servizio"); e.code = put.code === "conflict" ? "net" : "service"; throw e;
      }
      failures = 0;
      setLast(outcome, outcome === "ok");
      if (outcome === "wait") schedule(30000, true);
    } catch (e) {
      const kind = e && e.code === "bad_code" ? "bad_code" : e && e.code === "service" ? "service" : "net";
      setLast(kind, false);
      if (kind !== "bad_code") { const wait = BACKOFF[Math.min(failures, BACKOFF.length - 1)]; failures++; schedule(wait, true); }
    } finally { busy = false; emit(); }
  }

  // Programma un ciclo fra `delay` ms, ma mai prima di 60 s dall'ultimo (tranne `force`)
  function schedule(delay, force) {
    const c = loadCfg();
    if (!A || !serviceUrl() || !c.code) return;
    let at = Date.now() + delay;
    if (!force) at = Math.max(at, lastStart + MIN_GAP);
    else at = Math.max(at, lastStart + 5000);
    if (timer && timerAt <= at) return;   // c'è già un ciclo programmato prima di questo
    clearTimeout(timer); timerAt = at;
    timer = setTimeout(() => { timer = null; timerAt = 0; cycle(); }, Math.max(0, at - Date.now()));
  }

  async function syncNow() {
    if (!serviceUrl() || !loadCfg().code) return status();
    clearTimeout(timer); timer = null; timerAt = 0;
    if (busy) { await new Promise(r => { const f = () => { off(f); r(); }; listeners.push(f); }); return status(); }
    failures = 0;
    await cycle();
    return status();
  }
  const off = f => { const i = listeners.indexOf(f); if (i >= 0) listeners.splice(i, 1); };

  function link(code) {
    if (!serviceUrl()) throw new Error("La sincronizzazione non è ancora attiva.");
    const n = code ? normCode(code) : generateCode();
    if (!validCode(n)) throw new Error("Il codice non è valido: sono 20 caratteri, lettere e cifre.");
    const c = loadCfg(); if (c.code !== n) { c.code = n; delete c.rev; delete c.last; delete c.lastOk; mem.last = null; keyCache = null; }
    saveCfg(c); failures = 0;
    emit(); schedule(300, true);
    return n;
  }
  function unlink() {   // i dati locali restano
    clearTimeout(timer); timer = null; timerAt = 0; keyCache = null; mem.last = null; failures = 0; pendingApply = false;
    try { localStorage.removeItem(CFG_KEY); } catch (e) {}
    emit();
  }
  function shareLink() {
    const c = loadCfg(); if (!c.code) return "";
    return location.origin + location.pathname + "#collega=" + groups(c.code);
  }

  window.DanskSync = {
    status, syncNow, link, unlink, onChange: f => { if (typeof f === "function") listeners.push(f); return () => off(f); },
    generate: generateCode, shareLink, code: () => loadCfg().code || "",
    _test: { derive, seal, open, strip, differs, normCode, validCode, groups, ITER },
  };

  /* ---------- interfaccia ---------- */
  function fmtDate(t) {
    if (!t) return "mai";
    try { return new Date(t).toLocaleString("it-IT", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" }); } catch (e) { return new Date(t).toISOString(); }
  }
  function renderSettings(el) {
    const S = () => window.DanskSync.status();
    const esc = A.esc;
    let showCode = false, joining = false, msg = "";
    function draw() {
      const st = S(), code = loadCfg().code || "";
      if (!st.available) {
        el.innerHTML = `<p class="muted small">La sincronizzazione non è ancora attiva: manca l'indirizzo del servizio. Intanto il backup manuale resta disponibile nelle impostazioni.</p>`;
        return;
      }
      const info = `<p class="muted small">I progressi vengono cifrati sul tuo dispositivo prima di partire: il servizio vede solo dati illeggibili. Il backup manuale resta sempre disponibile.</p>`;
      let h = `<div class="stack">`;
      h += `<div class="small"><b>${st.linked ? "Attiva su questo dispositivo" : "Non attiva"}</b>${st.linked ? `<span class="muted"> · ultima sincronizzazione: ${esc(fmtDate(st.lastOk))}</span>` : ""}</div>`;
      if (st.linked && st.last && st.last.text && !(st.last.ok && st.last.kind === "ok")) h += `<div class="tip" role="status">${esc(st.last.text)}</div>`;
      if (st.busy) h += `<div class="muted small" role="status">Sincronizzazione in corso…</div>`;
      if (msg) h += `<div class="tip" role="status">${esc(msg)}</div>`;
      if (!st.linked) {
        h += `<div class="cta-row"><button class="btn primary" type="button" data-s="on">Attiva su questo dispositivo</button><button class="btn" type="button" data-s="have">Ho già un codice</button></div>`;
        if (joining) h += `<form class="stack" data-s="form"><label class="label" for="sync-code">Codice di collegamento</label>
          <input class="field" id="sync-code" type="text" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="XXXXX-XXXXX-XXXXX-XXXXX" style="width:100%;box-sizing:border-box">
          <div class="cta-row"><button class="btn primary" type="submit">Collega</button></div></form>`;
      } else {
        h += `<div class="cta-row"><button class="btn primary" type="button" data-s="now"${st.busy ? " disabled" : ""}>Sincronizza ora</button>
          <button class="btn" type="button" data-s="show">${showCode ? "Nascondi il codice" : "Mostra codice e link"}</button>
          <button class="btn ghost" type="button" data-s="off">Scollega questo dispositivo</button></div>`;
        if (showCode) h += `<div class="tip stack"><div class="label">Il tuo codice</div>
          <div style="font-size:1.15rem;letter-spacing:.06em;font-weight:600;word-break:break-all">${esc(groups(code))}</div>
          <div class="small muted">Sull'altro dispositivo scegli «Ho già un codice», oppure apri questo link. Il codice resta nel frammento dopo il # e non viene inviato a nessun server. Conservalo: chi lo conosce può leggere i tuoi progressi.</div>
          <div class="small" style="word-break:break-all">${esc(shareLink())}</div>
          <div class="cta-row"><button class="btn sm" type="button" data-s="copy-code">Copia il codice</button><button class="btn sm" type="button" data-s="copy-link">Copia il link</button></div></div>`;
      }
      h += info + `</div>`;
      el.innerHTML = h;
      const f = el.querySelector("[data-s=form]");
      if (f) { f.onsubmit = ev => { ev.preventDefault(); const v = el.querySelector("#sync-code").value; try { link(v); joining = false; showCode = false; msg = "Collegato. Sincronizzo i progressi…"; } catch (e) { msg = e.message; } draw(); }; setTimeout(() => { const i = el.querySelector("#sync-code"); if (i) i.focus(); }, 30); }
    }
    el.addEventListener("click", async ev => {
      const b = ev.target.closest("[data-s]"); if (!b || b.tagName === "FORM") return;
      const a = b.dataset.s; msg = "";
      if (a === "on") { try { link(); showCode = true; msg = "Fatto. Copia il codice o il link e usalo sull'altro dispositivo."; } catch (e) { msg = e.message; } }
      else if (a === "have") joining = !joining;
      else if (a === "show") showCode = !showCode;
      else if (a === "now") { draw(); await syncNow(); }
      else if (a === "off") { if (confirm("Scollegare questo dispositivo? I progressi restano qui, ma non verranno più sincronizzati.")) { unlink(); showCode = false; } }
      else if (a === "copy-code" || a === "copy-link") {
        const t = a === "copy-code" ? groups(loadCfg().code || "") : shareLink();
        try { await navigator.clipboard.writeText(t); A.toast("Copiato."); } catch (e) { A.toast("Non riesco a copiare: selezionalo a mano."); }
      }
      draw();
    });
    listeners.push(() => { if (el.isConnected) draw(); });
    draw();
  }

  /* ---------- avvio ---------- */
  (window.DANSK_EXT ||= []).push(a => {
    A = a;
    a.addSettings("sync", "Sincronizzazione tra dispositivi", renderSettings);
    a.onSave(() => { if (!applying) schedule(SAVE_WAIT); });
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") schedule(1000); });
    window.addEventListener("online", () => schedule(2000));
    // collegamento da un indirizzo con #collega=CODICE (il frammento non va al server; lo tolgo subito dalla barra)
    const m = /(?:^|[#&])collega=([^&]*)/.exec(location.hash);
    if (m) {
      const code = normCode(decodeURIComponent(m[1]));
      try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
      setTimeout(() => {
        if (!serviceUrl()) { A.toast("La sincronizzazione non è ancora attiva su questa versione dell'app."); return; }
        if (!validCode(code)) { A.toast("Il link di collegamento non è valido."); return; }
        const cur = loadCfg().code;
        if (cur === code) return;
        const ask = "Collegare questo dispositivo agli altri con il codice ricevuto? I progressi di questo dispositivo verranno uniti a quelli degli altri, senza cancellare nulla." + (cur ? " Il collegamento attuale sarà sostituito." : "");
        if (confirm(ask)) { try { link(code); A.toast("Collegato. Sincronizzo i progressi…"); } catch (e) { A.toast(e.message); } }
      }, 700);
    }
    if (serviceUrl() && loadCfg().code) schedule(START_WAIT, true);
  });
})();
