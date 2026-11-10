/* Diario: racconti la tua giornata e ricevi le frasi utili per quelle situazioni, con pronuncia.
   Usa Claude tramite la capability "sample" della pagina pubblicata su claude.ai. */
(window.DANSK_EXT ||= []).push(function (A) {
  const { $, $$, esc, hl, toast, speak, speakSeq, stopSpeech, sayBtn, SPEAKER } = A;
  const MAX_ENTRIES = 30;
  const D = () => { const S = A.state(); S.diary ||= []; return S.diary; };
  let root = null, ctl = null, busy = false;

  const str = v => typeof v === "string" ? v.trim() : "";
  const arr = v => Array.isArray(v) ? v : [];

  function prompt(text, level) {
    return `You help an Italian-speaking learner of Danish (CEFR level ${level}) who lives in Denmark. They describe their day below, in Italian and/or Danish.

Learner's text:
"""${text.slice(0, 3000)}"""

Tasks:
1. Identify the 3-5 concrete everyday situations in the text (e.g. grocery shopping, university lecture, doctor, train, café with a friend).
2. For each situation give 5-7 useful, natural phrases as actually spoken in Denmark today, adapted to level ${level} (shorter and simpler for A1-A2). Include both phrases the learner can SAY and typical phrases they will HEAR from Danes in that situation (e.g. at the supermarket checkout "Vil du have bonen?"). Mark those with "heard": true.
3. For every phrase give an approximate pronunciation written for Italian speakers (use ð for the soft d, mark stress with an accent) and, only when useful, a short usage note in Italian.
4. If the learner wrote any Danish, return a corrected version of their Danish text and short notes in Italian on each fix; otherwise "corrected" is null.

Reply with ONLY this JSON:
{"situations": [{"title_it": "Al supermercato", "title_da": "I supermarkedet", "phrases": [{"da": "Danish phrase", "it": "Italian meaning", "pron_it": "approximate pronunciation", "note_it": "optional note or empty string", "heard": false}]}], "corrected": null or {"da": "corrected Danish text", "notes_it": ["..."]}}`;
  }

  function clean(d) {
    const situations = arr(d?.situations).map(s => ({
      title: str(s?.title_it) || "Situazione", title_da: str(s?.title_da),
      phrases: arr(s?.phrases).map(p => ({ da: str(p?.da), it: str(p?.it), pron: str(p?.pron_it), note: str(p?.note_it), heard: !!p?.heard })).filter(p => p.da && p.it),
    })).filter(s => s.phrases.length);
    if (!situations.length) throw { code: "invalid_json" };
    const c = d?.corrected && typeof d.corrected === "object" && str(d.corrected.da) ? { da: str(d.corrected.da), notes: arr(d.corrected.notes_it).map(str).filter(Boolean) } : null;
    return { situations, corrected: c };
  }

  async function generate(text) {
    const sample = await A.getSample();
    if (!sample) { toast("Il diario ha bisogno di Claude (pagina su claude.ai) o di un motore IA (Gemini o Ollama): vedi Oggi › Motore IA."); return; }
    const level = A.currentLevel();
    busy = true; ctl = new AbortController(); status("Sto cercando le frasi più utili per la tua giornata…"); sync();
    try {
      const raw = await sample.json(prompt(text, level), { modelTier: "default", cache: false, signal: ctl.signal });
      const res = clean(raw);
      const entry = { id: Date.now(), date: Date.now(), level, text, res };
      const list = D(); list.unshift(entry); list.splice(MAX_ENTRIES); A.logActivity(); A.save();
      showEntry(entry);
    } catch (e) {
      status(e && e.code === "cancelled" ? "" : A.sampleError(e), e && e.code !== "cancelled");
    } finally { busy = false; ctl = null; sync(); }
  }

  function status(msg, err) { const s = $("#di-status"); if (!s) return; s.hidden = !msg; s.textContent = msg; s.classList.toggle("err", !!err); }
  function sync() { const g = $("#di-go"), st = $("#di-stop"); if (g) g.disabled = busy; if (st) st.hidden = !busy; }

  function render(sec) {
    root = sec;
    const list = D();
    sec.innerHTML = `
      <div class="stack">
        <h2>Il mio diario</h2>
        <p class="muted">Racconta che cosa hai fatto oggi, o che cosa farai domani: la spesa, l'università, il medico, una cena. Puoi scrivere in italiano, in danese o mescolando. Ricevi le frasi che servono in quelle situazioni, con la pronuncia, e puoi salvarle nel tuo mazzo di ripasso.</p>
      </div>
      <form class="panel stack" id="di-form">
        <label for="di-text" class="label">La tua giornata</label>
        <textarea id="di-text" rows="5" placeholder="Es. Stamattina sono andato al Netto a fare la spesa, poi lezione all'università e alle 18 caffè con Sofie."></textarea>
        <div class="cta-row"><button class="btn primary" type="submit" id="di-go">Trova le frasi utili</button><button class="btn ghost" type="button" id="di-stop" hidden>Ferma</button>
          <span class="small muted">Livello: ${A.currentLevel()}</span></div>
        <div class="chat-status" id="di-status" hidden></div>
        <p class="small muted" id="di-avail"></p>
      </form>
      ${list.length ? `<div class="stack"><h3>Giornate precedenti</h3><div class="list">${list.map((e, i) => `
        <button class="gi" type="button" data-entry="${i}"><span class="num">${new Date(e.date).toLocaleDateString("it-IT", { day: "2-digit", month: "2-digit" })}</span>
        <span><span class="t">${esc(e.res.situations.map(s => s.title).join(" · "))}</span><span class="u">${esc(e.text.slice(0, 90))}${e.text.length > 90 ? "…" : ""}</span></span></button>`).join("")}</div></div>` : ""}`;
    const ta = $("#di-text");
    try { ta.value = sessionStorage.getItem("dansk.diary.draft") || ""; } catch (e) {}
    ta.oninput = () => { try { sessionStorage.setItem("dansk.diary.draft", ta.value); } catch (e) {} };
    $("#di-form").onsubmit = e => { e.preventDefault(); if (busy) return; const v = ta.value.trim(); if (v.length < 5) { toast("Scrivi almeno qualche parola sulla tua giornata."); return; } generate(v); };
    $("#di-stop").onclick = () => ctl && ctl.abort();
    $$("[data-entry]", sec).forEach(b => b.onclick = () => showEntry(list[+b.dataset.entry]));
    A.getSample().then(s => {
      if (s || !sec.isConnected) return;
      $("#di-go").disabled = true;
      const av = $("#di-avail");
      if (window.DanskLocalAI) { av.innerHTML = window.DanskLocalAI.noAiHtml(); window.DanskLocalAI.wireNoAi(av); }
      else av.textContent = "Questa funzione ha bisogno di Claude (pagina su claude.ai).";
    });
    sync();
  }

  function showEntry(e) {
    if (!root) return;
    stopSpeech();
    const { situations, corrected } = e.res;
    const all = situations.flatMap(s => s.phrases);
    root.innerHTML = `
      <div class="crumb"><button class="btn ghost sm" type="button" id="di-back">← Diario</button><span class="label">${new Date(e.date).toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" })}</span></div>
      <div id="di-banner"></div>
      <div class="panel small muted">${esc(e.text)}</div>
      ${corrected ? `<div class="panel stack"><div class="label">Il tuo danese, corretto</div><div class="da">${hl(corrected.da)} ${sayBtn(corrected.da, "sm")}</div>
        ${corrected.notes.length ? `<ul class="goals small" style="color:inherit">${corrected.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}</div>` : ""}
      <div class="cta-row"><button class="btn primary" type="button" id="di-quiz">Mettiti alla prova (${Math.min(12, all.length)} domande)</button>
        <button class="btn" type="button" id="di-addall">Aggiungi tutte al mazzo</button></div>
      ${situations.map((s, si) => `
        <div class="stack">
          <div class="toolbar"><h3>${esc(s.title)}${s.title_da ? ` <span class="muted da" style="font-weight:500">· ${hl(s.title_da)}</span>` : ""}</h3>
            <button class="btn sm" type="button" data-play="${si}">${SPEAKER} Ascolta tutte</button></div>
          <div class="list">${s.phrases.map((p, pi) => `
            <div class="phrase-row" data-row="${si}-${pi}">
              <div class="pr-main">
                <div class="da pr-da">${hl(p.da)}${p.heard ? ` <span class="tag">la sentirai</span>` : ""}</div>
                ${p.pron ? `<div class="hint">[${esc(p.pron)}]</div>` : ""}
                <div>${esc(p.it)}</div>
                ${p.note ? `<div class="small muted">${esc(p.note)}</div>` : ""}
              </div>
              <div class="pr-actions">${sayBtn(p.da, "sm")}<button class="btn ghost sm" type="button" data-slow="${si}-${pi}">Lento</button><button class="btn ghost sm" type="button" data-add="${si}-${pi}">+ mazzo</button></div>
            </div>`).join("")}</div>
        </div>`).join("")}
      <div id="di-run"></div>`;
    const get = k => { const [a, b] = k.split("-").map(Number); return situations[a].phrases[b]; };
    $("#di-back").onclick = () => { stopSpeech(); render(root); };
    A.aiMode().then(m => { const b = $("#di-banner"); if (b && m === "local" && window.DanskLocalAI) b.innerHTML = window.DanskLocalAI.bannerHtml(); });
    $$("[data-slow]", root).forEach(b => b.onclick = () => speak(get(b.dataset.slow).da, 0.6));
    $$("[data-add]", root).forEach(b => b.onclick = () => { const p = get(b.dataset.add); if (A.addCard({ da: p.da, it: p.it, note: p.pron, src: "diario" })) b.disabled = true; });
    $$("[data-play]", root).forEach(b => b.onclick = () => {
      const si = +b.dataset.play, rows = $$(`[data-row^="${si}-"]`, root);
      speakSeq(situations[si].phrases.map(p => p.da), i => rows.forEach((r, k) => r.classList.toggle("playing", k === i)), () => rows.forEach(r => r.classList.remove("playing")));
    });
    $("#di-addall").onclick = ev => {
      const S = A.state(); let n = 0;
      all.forEach(p => { if (!S.custom?.["p:" + A.norm(p.da)]) { A.addCard({ da: p.da, it: p.it, note: p.pron, src: "diario" }); n++; } });
      ev.target.disabled = true; toast(n ? `${n} frasi aggiunte al mazzo.` : "Erano già tutte nel mazzo.");
    };
    $("#di-quiz").onclick = () => {
      const pool = A.shuffle(all).slice(0, 12);
      const qs = pool.map((p, i) => i % 2
        ? { kind: "trans", label: "Come si dice in danese?", prompt: esc(p.it), long: p.it.length > 30, answers: [p.da], solution: p.da, expl: p.note, after: p.da }
        : { kind: "mc", label: "Che cosa significa?", prompt: `<span class="da">${hl(p.da)}</span>`, sayPrompt: p.da, long: p.da.length > 30,
            options: A.shuffle([p.it, ...A.shuffle(all.filter(x => x !== p && x.it !== p.it)).slice(0, 3).map(x => x.it)]), answer: p.it, after: p.da });
      const box = $("#di-run");
      A.runQuestions(box, qs, { title: "Frasi della giornata", again: () => $("#di-quiz").click(), back: { label: "Torna alle frasi", fn: () => showEntry(e) } });
      box.scrollIntoView({ behavior: "smooth" });
    };
    window.scrollTo({ top: 0 });
  }

  A.addTab("diario", "Diario", render, "tutor");
});
