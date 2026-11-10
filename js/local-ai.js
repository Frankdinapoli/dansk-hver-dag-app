/* Motori IA fuori da claude.ai, usati come riserve dalla catena di js/ai.js:
   - Google Gemini con una chiave personale (piano gratuito);
   - Ollama sullo stesso computer (modello gemma3:4b).
   Qui ci sono gli adattatori (gemini, ollama) e il gruppo «Motore IA» dentro Impostazioni › Avanzate. */
(function () {
  const KEY = "dansk-hver-dag.ai";
  const GEMINI_API = "https://generativelanguage.googleapis.com/v1beta";
  // Modello Gemini predefinito: un Flash-Lite (piano gratuito più ampio). NON «gemini-flash-latest»: può puntare
  // a un modello Flash con ~20 richieste al giorno (vedi docs/limiti-gratuiti.md).
  const DEFAULT_GEMINI = "gemini-3.5-flash-lite";
  const DEFAULTS = { engine: "auto", url: "http://localhost:11434", model: "gemma3:4b", configured: false,
    geminiKey: "", geminiModel: DEFAULT_GEMINI, geminiOk: false, proxy: "" };
  const BANNER = "Stai usando il modello locale: le correzioni possono contenere errori. Per le correzioni più affidabili usa Gemini o la versione su claude.ai.";

  function settings() {
    let s = {};
    try { s = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { s = {}; }
    const out = Object.assign({}, DEFAULTS, s);
    if (!["auto", "gemini", "ollama", "off"].includes(out.engine)) out.engine = "auto";
    out.url = String(out.url || DEFAULTS.url).trim().replace(/\/+$/, "") || DEFAULTS.url;
    out.model = String(out.model || DEFAULTS.model).trim() || DEFAULTS.model;
    out.configured = !!out.configured;
    out.geminiKey = String(out.geminiKey || "").trim();
    out.geminiModel = String(out.geminiModel || DEFAULTS.geminiModel).trim().replace(/^models\//, "") || DEFAULTS.geminiModel;
    if (out.geminiModel === "gemini-flash-latest") out.geminiModel = DEFAULT_GEMINI; // vecchio valore predefinito: migrazione
    out.proxy = String(out.proxy || "").trim();
    out.geminiOk = !!out.geminiOk;
    return out;
  }
  function save(patch) {
    const s = Object.assign(settings(), patch);
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
    return s;
  }

  function toMessages(input) {
    if (typeof input === "string") return [{ role: "user", content: input }];
    if (Array.isArray(input)) return input.map(t => ({ role: t && t.role === "assistant" ? "assistant" : "user", content: String((t && t.content) ?? "") }));
    return [{ role: "user", content: String(input ?? "") }];
  }

  function parseJson(text) {
    const t = String(text || "").trim();
    try { return JSON.parse(t); } catch (e) {}
    const a = t.indexOf("{"), b = t.lastIndexOf("}");
    if (a >= 0 && b > a) { try { return JSON.parse(t.slice(a, b + 1)); } catch (e) {} }
    throw { code: "invalid_json", message: "Risposta non in formato JSON", text: t };
  }

  async function chat(input, opts, json) {
    const s = settings();
    const body = { model: s.model, messages: toMessages(input), stream: false, options: { temperature: 0.4, num_ctx: 8192 } };
    if (json) body.format = "json";
    let res;
    try {
      res = await fetch(s.url + "/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: opts && opts.signal });
    } catch (e) {
      if (e && e.name === "AbortError") throw { code: "cancelled" };
      throw { code: "local_unreachable", message: String(e && e.message || e) };
    }
    if (!res.ok) {
      let txt = ""; try { txt = await res.text(); } catch (e) {}
      if (res.status === 404 && /model/i.test(txt)) throw { code: "local_no_model", message: txt };
      throw { code: "upstream_error", message: "HTTP " + res.status + " " + txt.slice(0, 200) };
    }
    let data;
    try { data = await res.json(); } catch (e) {
      if (e && e.name === "AbortError") throw { code: "cancelled" };
      throw { code: "upstream_error", message: "Risposta non valida" };
    }
    const text = String(data && data.message && data.message.content || "");
    if (!text.trim()) throw { code: "empty_completion" };
    return text;
  }

  function adapter() {
    const sample = async (input, opts) => ({ text: await chat(input, opts, false), truncated: false, modelTierApplied: "local" });
    sample.json = async (input, opts) => {
      const text = await chat(input, opts, true);
      return parseJson(text);
    };
    return sample;
  }

  /* ---------- Google Gemini ---------- */
  // Gemini vuole ruoli user/model alternati e che il primo sia user: unisce i turni consecutivi dello stesso ruolo
  function toContents(input) {
    const out = [];
    for (const m of toMessages(input)) {
      const role = m.role === "assistant" ? "model" : "user";
      const last = out[out.length - 1];
      if (last && last.role === role) last.parts[0].text += "\n\n" + m.content;
      else out.push({ role, parts: [{ text: m.content }] });
    }
    if (out.length && out[0].role !== "user") out.unshift({ role: "user", parts: [{ text: "Start." }] });
    return out;
  }

  async function geminiCall(s, input, opts, json) {
    const body = { contents: toContents(input), generationConfig: { temperature: 0.4 } };
    if (json) body.generationConfig.responseMimeType = "application/json";
    let res;
    try {
      res = await fetch(`${GEMINI_API}/models/${encodeURIComponent(s.geminiModel)}:generateContent`, {
        method: "POST", headers: { "Content-Type": "application/json", "x-goog-api-key": s.geminiKey },
        body: JSON.stringify(body), signal: opts && opts.signal });
    } catch (e) {
      if (e && e.name === "AbortError") throw { code: "cancelled" };
      throw { code: "gemini_unreachable", message: String(e && e.message || e) };
    }
    let data = null, raw = "";
    try { raw = await res.text(); data = JSON.parse(raw); } catch (e) {
      if (e && e.name === "AbortError") throw { code: "cancelled" };
    }
    if (!res.ok) {
      const msg = String(data && data.error && data.error.message || raw).slice(0, 300);
      const status = String(data && data.error && data.error.status || "");
      if (res.status === 429) throw { code: "rate_limited", message: msg };
      if (/location is not supported|not available in your country/i.test(msg)) throw { code: "gemini_region", message: msg };
      if (res.status === 401 || res.status === 403 || /api key/i.test(msg) || status === "PERMISSION_DENIED") throw { code: "gemini_bad_key", message: msg };
      if (res.status === 404) throw { code: "gemini_no_model", message: msg };
      throw { code: "upstream_error", message: "HTTP " + res.status + " " + msg };
    }
    if (data && data.promptFeedback && data.promptFeedback.blockReason) throw { code: "refused" };
    const cand = data && data.candidates && data.candidates[0];
    if (cand && /SAFETY|PROHIBITED|BLOCKLIST|RECITATION/.test(cand.finishReason || "")) throw { code: "refused" };
    const text = ((cand && cand.content && cand.content.parts) || []).filter(p => !p.thought).map(p => p.text || "").join("");
    if (!text.trim()) throw { code: "empty_completion" };
    return { text, truncated: !!(cand && cand.finishReason === "MAX_TOKENS") };
  }

  function geminiAdapter() {
    const sample = async (input, opts) => {
      const r = await geminiCall(settings(), input, opts, false);
      return { text: r.text, truncated: r.truncated, modelTierApplied: "gemini" };
    };
    sample.json = async (input, opts) => parseJson((await geminiCall(settings(), input, opts, true)).text);
    return sample;
  }

  // Prova la chiave con una richiesta minima (verifica insieme chiave, modello e paese)
  async function testGemini() {
    const s = settings();
    if (!s.geminiKey) return { ok: false, code: "gemini_no_key" };
    try {
      const r = await geminiCall(s, 'Reply with ONLY this JSON: {"ok": true}', null, true);
      parseJson(r.text);
      return { ok: true };
    } catch (e) { return { ok: false, code: e && e.code, error: String(e && (e.message || e.code) || e) }; }
  }

  async function test() {
    const s = settings();
    try {
      const res = await fetch(s.url + "/api/tags");
      if (!res.ok) return { ok: false, models: [], error: "Risposta HTTP " + res.status };
      const d = await res.json();
      return { ok: true, models: (d.models || []).map(m => m.name || m.model).filter(Boolean), error: "" };
    } catch (e) {
      return { ok: false, models: [], error: String(e && e.message || e) };
    }
  }

  function isLocal() {
    const has = !!(window.claude && typeof window.claude.use === "function");
    return !has;
  }

  const NOAI_TEXT = "Questa funzione ha bisogno di un servizio di IA. Se non è ancora collegato, puoi continuare con i dialoghi senza IA; per collegarlo vedi Impostazioni › Avanzate › Motore IA.";
  function noAiHtml(extra) {
    return `<div class="tip small" data-noai>${NOAI_TEXT}${extra ? " " + extra : ""}<div class="cta-row" style="margin-top:8px"><button class="btn sm" type="button" data-open-ai>Apri Motore IA</button></div></div>`;
  }
  function openPanel() {
    const A = window.DanskApp; if (!A) return;
    A.go("oggi");
    setTimeout(() => {
      const wrap = document.getElementById("settings-adv-wrap"); if (wrap) wrap.open = true;
      const p = document.getElementById("set-ai"); if (p) p.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 30);
  }
  function wireNoAi(el) {
    (el || document).querySelectorAll("[data-open-ai]").forEach(b => { b.onclick = openPanel; });
  }
  function bannerHtml() { return `<div class="tip small" data-local-banner>${BANNER}</div>`; }

  // Adattatori usati dalla catena (js/ai.js): restituiscono il testo; il timeout lo gestisce la catena
  const gemini = (input, opts, json) => geminiCall(settings(), input, opts, json);
  const ollama = (input, opts, json) => chat(input, opts, json);

  window.DanskLocalAI = { settings, save, adapter, geminiAdapter, gemini, ollama, test, testGemini, isLocal, bannerHtml, noAiHtml, wireNoAi, openPanel, BANNER, DEFAULT_GEMINI };

  /* ---------- Gruppo «Motore IA» in Impostazioni › Avanzate ---------- */
  (window.DANSK_EXT ||= []).push(A => {
    const { esc } = A;
    const cmd = c => `<span class="ai-cmd"><code>${esc(c)}</code> <button class="btn ghost sm" type="button" data-copy="${esc(c)}">Copia</button></span>`;
    A.addSettings("ai", "Motore IA", body => {
      body.innerHTML = `
      <div class="tip small" id="ai-status" role="status" aria-live="polite"></div>
      <p class="small muted">Ordine di prova: Claude (solo su claude.ai) › IA gratuita (il servizio dell'app) › Gemini con la tua chiave › modello locale. Se uno non risponde, l'app passa al successivo da sola.</p>
      <div class="field"><label for="ai-engine">Motori da usare</label>
        <select id="ai-engine"><option value="auto">Automatico (consigliato)</option><option value="gemini">Solo Gemini con la mia chiave</option><option value="ollama">Solo Ollama sul mio computer</option><option value="off">Nessuno (solo dialoghi senza IA)</option></select></div>

      <div class="label grp">Servizio IA gratuito (proxy)</div>
      <div class="field"><label for="ai-proxy">Indirizzo del servizio IA (proxy)</label><input type="url" id="ai-proxy" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="https://script.google.com/macros/s/…/exec"></div>
      <div class="field"><span>Connessione</span><span class="cta-row"><button class="btn sm primary" type="button" id="ai-ptest">Prova</button></span></div>
      <div class="small" id="ai-presult" role="status" aria-live="polite"></div>
      <p class="small muted">Di solito non serve: l'indirizzo è già in js/config.js. Scrivilo qui solo per fare delle prove; se lo lasci vuoto vale quello di config.js. Guida: docs/setup-una-tantum.md.</p>

      <div class="label grp">Google Gemini con la tua chiave (riserva)</div>
      <div class="field"><label for="ai-gkey">Chiave API</label><input type="password" id="ai-gkey" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="incolla la chiave"></div>
      <div class="field"><label for="ai-gmodel">Modello</label><input type="text" id="ai-gmodel" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <div class="field"><span>Connessione</span><span class="cta-row"><button class="btn sm primary" type="button" id="ai-gtest">Prova Gemini</button><button class="btn sm ghost" type="button" id="ai-gdel">Cancella la chiave</button></span></div>
      <div class="small" id="ai-gresult" role="status" aria-live="polite"></div>
      <details id="ai-ghelp"><summary>Come ottenere la chiave gratuita</summary>
        <ol class="small">
          <li>Apri <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> e accedi con il tuo account Google.</li>
          <li>Accetta le condizioni, poi premi «Create API key» (Crea chiave API). Se ti chiede un progetto, lascia quello proposto.</li>
          <li>Copia la chiave (una lunga sequenza che di solito comincia con «AIza»), incollala qui sopra e premi «Prova Gemini».</li>
          <li>Non inserire dati di pagamento: senza fatturazione attiva resti nel piano gratuito e non ti viene mai addebitato niente. Se superi il limite giornaliero, l'app ti avvisa e basta aspettare il giorno dopo.</li>
        </ol>
        <p class="small muted">La chiave resta solo in questo browser e viene inviata solo a Google. Non condividerla e non scriverla in chat o nel codice. Nel piano gratuito Google può usare i testi inviati per migliorare i suoi servizi: vedi docs/privacy.md.</p>
        <p class="small muted">Il modello predefinito è un Flash-Lite (${esc(DEFAULT_GEMINI)}), che nel piano gratuito ha più richieste al giorno dei modelli Flash. Evita «gemini-flash-latest»: può puntare a un modello con pochissime richieste al giorno.</p>
      </details>

      <div class="label grp">Ollama (sul computer, senza internet)</div>
      <div class="field"><label for="ai-url">Indirizzo di Ollama</label><input type="text" id="ai-url" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <div class="field"><label for="ai-model">Modello</label><input type="text" id="ai-model" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
      <div class="field"><span>Connessione</span><span class="cta-row"><button class="btn sm" type="button" id="ai-test">Prova Ollama</button></span></div>
      <div class="small" id="ai-result" role="status" aria-live="polite"></div>
      <details id="ai-help"><summary>Come installare il motore locale (Mac)</summary>
        <ol class="small">
          <li>Avvia l'app con il file avvia.command (doppio clic; la prima volta: clic destro › Apri, per il permesso di macOS). Così il microfono chiede il permesso una volta sola e non serve il comando OLLAMA_ORIGINS.</li>
          <li>Scarica e installa Ollama da <a href="https://ollama.com" target="_blank" rel="noopener">https://ollama.com</a>.</li>
          <li>Apri il Terminale ed esegui ${cmd("ollama pull gemma3:4b")} (circa 3,3 GB).</li>
          <li>Solo se apri index.html direttamente come file: per permettere alla pagina di parlare con Ollama esegui ${cmd('launchctl setenv OLLAMA_ORIGINS "*"')} poi chiudi e riapri Ollama. Questa impostazione si azzera al riavvio del Mac: ripetila dopo ogni riavvio.</li>
          <li>Premi «Prova Ollama».</li>
        </ol>
        <p class="small muted">Con 8 GB di RAM chiudi le altre app pesanti; il modello locale è più lento e meno preciso sul danese: controlla le correzioni importanti.</p>
      </details>`;
      const L = window.DanskLocalAI, st = () => L.settings();
      const $e = id => body.querySelector("#" + id);

      // Stato attuale della catena
      const showStatus = () => {
        const d = window.DanskAI && window.DanskAI.status();
        const out = $e("ai-status"); if (!out) return;
        if (!d) { out.textContent = "Il gestore dei motori IA non è caricato."; return; }
        let t = d.engine ? "Ora risponde: " + d.label_it + "." : "Nessun motore IA collegato: restano i dialoghi senza IA.";
        if (d.quota) t += " Richieste rimaste oggi: " + d.quota.left + (d.quota.limit ? " su " + d.quota.limit : "") + (d.low ? " (stanno finendo)." : ".");
        out.textContent = t;
      };
      showStatus();
      if (window.DanskAI) window.DanskAI.onStatus(showStatus);

      const s0 = st();
      $e("ai-engine").value = s0.engine; $e("ai-url").value = s0.url; $e("ai-model").value = s0.model;
      $e("ai-gkey").value = s0.geminiKey; $e("ai-gmodel").value = s0.geminiModel; $e("ai-proxy").value = s0.proxy;
      const gState = () => { const s = st(), out = $e("ai-gresult"); if (!out.textContent) { out.className = "small muted"; out.textContent = !s.geminiKey ? "Nessuna chiave inserita." : s.geminiOk ? "Chiave provata: Gemini è pronto come riserva." : "Chiave non ancora provata."; } };
      gState();
      const persist = () => {
        const old = st(), key = $e("ai-gkey").value.trim(), gm = $e("ai-gmodel").value.trim() || DEFAULTS.geminiModel;
        const patch = { engine: $e("ai-engine").value, url: $e("ai-url").value.trim() || DEFAULTS.url, model: $e("ai-model").value.trim() || DEFAULTS.model,
          geminiKey: key, geminiModel: gm, proxy: $e("ai-proxy").value.trim() };
        if (key !== old.geminiKey || gm !== old.geminiModel) { patch.geminiOk = false; $e("ai-gresult").textContent = ""; }
        L.save(patch); A.resetSample(); gState(); showStatus();
      };
      ["ai-engine", "ai-url", "ai-model", "ai-gkey", "ai-gmodel", "ai-proxy"].forEach(id => { $e(id).onchange = persist; });

      const PMSG = {
        bad_url: "L'indirizzo deve cominciare con https:// (è quello che finisce con /exec).",
        not_proxy: "L'indirizzo risponde, ma non è il servizio dell'app. Controlla di aver copiato l'URL giusto.",
        network: "Non riesco a raggiungere l'indirizzo. Controlla la connessione e che il servizio sia pubblicato con accesso «Chiunque».",
        timeout: "Il servizio non risponde in tempo. Riprova tra poco.",
      };
      $e("ai-ptest").onclick = async () => {
        persist();
        const out = $e("ai-presult"); out.className = "small";
        const url = st().proxy || (window.DANSK_CONFIG && window.DANSK_CONFIG.proxy) || "";
        if (!url) { out.className = "small ai-err"; out.textContent = "Nessun indirizzo: scrivilo qui sopra."; return; }
        out.textContent = "Provo a collegarmi…";
        const r = await window.DanskAI.pingProxy(url);
        if (r.ok) {
          const i = r.info, eng = (i.engines || []).join(", ");
          out.textContent = "Il servizio risponde" + (eng ? " (motori: " + eng + ")" : "") + ". Streaming: " + (i.stream ? "sì" : "no") + ". Sincronizzazione: " + (i.sync ? "sì" : "no") + ".";
        } else { out.className = "small ai-err"; out.textContent = PMSG[r.code] || ("Il servizio non risponde come previsto (" + r.error + ")."); }
        A.resetSample(); showStatus();
      };

      const GMSG = {
        gemini_no_key: "Incolla prima la chiave (vedi «Come ottenere la chiave gratuita»).",
        gemini_bad_key: "Google non accetta questa chiave. Controlla di averla copiata tutta, senza spazi, oppure creane una nuova.",
        gemini_no_model: "Il modello indicato non esiste. Scrivi " + DEFAULT_GEMINI + " nel campo Modello e riprova.",
        gemini_region: "Google dice che il servizio non è disponibile nel tuo paese con questo account.",
        gemini_unreachable: "Non riesco a raggiungere Google. Controlla la connessione a internet.",
        rate_limited: "La chiave funziona, ma hai raggiunto il limite gratuito per ora. Riprova tra un po'.",
      };
      $e("ai-gtest").onclick = async () => {
        persist();
        const out = $e("ai-gresult"); out.className = "small"; out.textContent = "Provo a collegarmi a Gemini…";
        const r = await L.testGemini();
        if (r.ok || r.code === "rate_limited") {
          L.save({ geminiOk: true }); A.resetSample();
          out.textContent = r.ok ? "Connessione riuscita: Gemini è pronto come riserva." : GMSG.rate_limited;
        } else {
          L.save({ geminiOk: false }); A.resetSample();
          out.className = "small ai-err";
          out.textContent = GMSG[r.code] || ("Gemini non risponde come previsto (" + r.error + ").");
        }
        showStatus();
      };
      $e("ai-gdel").onclick = () => { $e("ai-gkey").value = ""; L.save({ geminiKey: "", geminiOk: false }); A.resetSample(); $e("ai-gresult").textContent = ""; gState(); showStatus(); A.toast("Chiave cancellata da questo browser."); };
      $e("ai-test").onclick = async () => {
        persist();
        const out = $e("ai-result"); out.className = "small"; out.textContent = "Provo a collegarmi…";
        const r = await test();
        if (r.ok) {
          const want = st().model, has = r.models.some(m => m === want || m.split(":")[0] === want);
          L.save({ configured: true }); A.resetSample(); showStatus();
          out.textContent = "Connessione riuscita. Modelli installati: " + (r.models.length ? r.models.join(", ") : "nessuno") + "." + (has ? "" : ` Il modello «${want}» non è installato: nel Terminale esegui ollama pull ${want}`);
        } else {
          out.className = "small ai-err";
          out.textContent = "Ollama non risponde (" + r.error + "). Controlla che sia aperto e segui i passi qui sotto.";
        }
      };
      body.querySelectorAll("[data-copy]").forEach(b => b.onclick = () => {
        const code = b.previousElementSibling || b.parentNode.querySelector("code");
        const sel = () => { const rg = document.createRange(); rg.selectNodeContents(code); const g = getSelection(); g.removeAllRanges(); g.addRange(rg); A.toast("Seleziona e copia il comando."); };
        try { navigator.clipboard.writeText(b.dataset.copy).then(() => A.toast("Comando copiato."), sel); } catch (e) { sel(); }
      });
    }, { advanced: true });
  });
})();
