/* Dansk hver dag — test di livello iniziale ADATTIVO (5–10 minuti).
   Vista nascosta "livello" (non ha voce nel menu): si apre con DanskLivello.start().
   Algoritmo: parte da A2; blocchi di 6 domande (5 esercizi del corso + 1 di lessico) dello stesso livello.
   ≥ 4 giuste su 6 → livello acquisito, si sale; ≤ 2 → non acquisito, si scende; 3 → un secondo blocco sullo stesso livello
   e poi si decide (≥ 60% complessivo = acquisito). Si ferma quando c'è un livello acquisito seguito da uno non acquisito,
   dopo 5 blocchi, o quando il livello più alto è acquisito. Il livello consigliato è il primo non acquisito.
   La funzione di decisione è pura: DanskLivello._decide(history, levels, maxBlocks). Test: tools/test-livello.js */
(function () {
  "use strict";
  const ALL = ["A1", "A2", "B1", "B2", "C1"];
  const START = "A2", BLOCK_EX = 5, MAX_BLOCKS = 5;

  /* Stato di un livello dato lo storico dei blocchi: true = acquisito, false = non acquisito, null = da decidere, undefined = mai provato */
  function levelStatus(history, L) {
    const bs = history.filter(b => b.level === L);
    if (!bs.length) return undefined;
    const ok = bs.reduce((s, b) => s + b.ok, 0), n = bs.reduce((s, b) => s + b.n, 0);
    if (!n) return false;
    if (bs.length === 1) return ok * 3 >= n * 2 ? true : ok * 3 <= n ? false : null;
    return ok / n >= 0.6;
  }

  /* history: [{level, ok, n}] in ordine. Ritorna { done:false, level } (prossimo blocco) oppure
     { done:true, level (da cui iniziare), acquired:{L:true|false}, reason } */
  function decide(history, levels, maxBlocks) {
    levels = (levels && levels.length ? levels : ALL).slice();
    maxBlocks = maxBlocks || MAX_BLOCKS;
    const top = levels.length - 1;
    const st = L => levelStatus(history, L);
    const finish = reason => {
      const acquired = {}; let hi = -1;
      levels.forEach((L, i) => { const s = st(L); if (s !== undefined) acquired[L] = s === true; if (s === true) hi = i; });
      return { done: true, level: levels[hi < 0 ? 0 : Math.min(hi + 1, top)], acquired, reason };
    };
    if (!history.length) return { done: false, level: levels.includes(START) ? START : levels[0] };
    const cur = levels.indexOf(history[history.length - 1].level);
    const s = st(levels[cur]);
    if (s === null) return history.length >= maxBlocks ? finish("limite") : { done: false, level: levels[cur] };
    if (history.length >= maxBlocks) return finish("limite");
    if (s === true) {
      let c = cur + 1;
      while (c <= top && st(levels[c]) === true) c++;
      if (c > top) return finish("massimo");
      const sc = st(levels[c]);
      if (sc === false) return finish("trovato");
      return { done: false, level: levels[c] };
    }
    let c = cur - 1;
    while (c >= 0 && st(levels[c]) === false) c--;
    if (c < 0) return finish("minimo");
    if (st(levels[c]) === true) return finish("trovato");
    return { done: false, level: levels[c] };
  }

  const api = { start() {}, _decide: decide, _levelStatus: levelStatus };
  window.DanskLivello = api;

  (window.DANSK_EXT ||= []).push(A => {
    const { esc, hl } = A;
    const S = () => A.state();
    let host = null, run = null;

    const unitsOf = L => A.UNITS.filter(u => u.level === L && u.exercises && u.exercises.length);
    const availableLevels = () => A.LEVELS.filter(L => unitsOf(L).length);

    /* Un blocco: 5 esercizi del corso bilanciati tra le unità del livello (al massimo 1 traduzione) + 1 domanda di lessico */
    function buildBlock(L, used) {
      const units = A.shuffle(unitsOf(L));
      const pools = units.map(u => A.shuffle(u.exercises.filter(e => !used.has(e))).map(e => ({ u, e })));
      const picked = [], cnt = {};
      const tryTake = cap => {
        let progress = true;
        while (picked.length < BLOCK_EX && progress) {
          progress = false;
          for (const pool of pools) {
            if (picked.length >= BLOCK_EX) break;
            const i = pool.findIndex(x => (x.e.k !== "t" || (cnt.t || 0) < 1) && (cnt[x.e.k] || 0) < cap);
            if (i < 0) continue;
            const x = pool.splice(i, 1)[0]; picked.push(x); cnt[x.e.k] = (cnt[x.e.k] || 0) + 1; progress = true;
          }
        }
      };
      tryTake(2); tryTake(3); tryTake(BLOCK_EX);
      const qs = picked.map(x => { used.add(x.e); return A.exToQ(x.e, null); }).filter(Boolean);
      // lessico: da un'unità del livello, preferendo una poco usata nel blocco
      const usedU = new Set(picked.map(x => x.u.id));
      const vu = units.find(u => !usedU.has(u.id) && u.wordIds.length) || units.find(u => u.wordIds.length);
      if (vu) {
        const w = A.WMAP.get(A.pick(vu.wordIds));
        if (w) qs.push(A.vocabQ(w));
      }
      qs.forEach(q => { delete q.onResult; });   // il test non deve toccare le schede di ripasso
      return A.shuffle(qs);
    }

    function intro() {
      const last = S().placement;
      const lastHtml = last && last.level ? `<div class="tip"><b>Ultimo risultato:</b> livello di partenza ${esc(last.level)}${last.date ? ` (${esc(new Date(last.date).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" }))})` : ""}.</div>` : "";
      host.innerHTML = `<div class="stack"><div class="panel stack">
        <div class="label">Test di livello</div>
        <h2>Scopri da dove iniziare</h2>
        <p>Rispondi a una trentina di domande di grammatica e lessico scritti. Il test parte da un livello medio e si adatta: se vai bene sale, se hai difficoltà scende. Dura da 5 a 10 minuti.</p>
        <p class="muted">Serve solo a consigliarti il punto di partenza: non cambia i tuoi progressi e non segna nulla come completato. Puoi rifarlo quando vuoi.</p>
        ${lastHtml}
        <div class="cta-row"><button class="btn primary" type="button" id="lv-go">Inizia</button><button class="btn" type="button" id="lv-back">Torna a Oggi</button></div>
      </div></div>`;
      host.querySelector("#lv-go").onclick = begin;
      host.querySelector("#lv-back").onclick = () => A.go("oggi");
    }

    function begin() {
      run = { history: [], used: new Set(), levels: availableLevels() };
      if (!run.levels.length) { A.toast("Non ci sono esercizi per il test."); return; }
      nextBlock();
    }

    function nextBlock() {
      const d = decide(run.history, run.levels, MAX_BLOCKS);
      if (d.done) return result(d);
      const n = run.history.length + 1;
      const qs = buildBlock(d.level, run.used);
      if (!qs.length) { run.history.push({ level: d.level, ok: 0, n: 1 }); return nextBlock(); }
      let recorded = false;
      const back = { label: "Continua", fn: () => nextBlock() };
      A.runQuestions(host, qs, {
        title: `Test di livello · blocco ${n}`,
        back,
        endHtml: () => `<p class="muted small">Le risposte giuste servono solo a scegliere il blocco successivo.</p>`,
        onEnd: (score, total) => {
          if (recorded) return; recorded = true;
          run.history.push({ level: d.level, ok: score, n: total });
          const nd = decide(run.history, run.levels, MAX_BLOCKS);
          if (nd.done) back.label = "Vedi il risultato";
        },
      });
    }

    function result(d) {
      const detail = {};
      for (const b of run.history) { const x = detail[b.level] || (detail[b.level] = { ok: 0, n: 0 }); x.ok += b.ok; x.n += b.n; }
      const total = run.history.reduce((s, b) => s + b.n, 0);
      const s = S();
      s.placement = { level: d.level, date: Date.now(), detail };
      A.save();
      const first = unitsOf(d.level)[0] || A.UNITS.find(u => u.level === d.level);
      const info = A.LEVEL_INFO[d.level] || {};
      const rows = Object.keys(detail).sort((a, b) => ALL.indexOf(a) - ALL.indexOf(b)).map(L =>
        `<li><span class="lvl lvl-${esc(L)}">${esc(L)}</span> <span class="muted small">${detail[L].ok} giuste su ${detail[L].n}</span></li>`).join("");
      host.innerHTML = `<div class="stack"><div class="panel stack">
        <div class="label">Risultato del test</div>
        <div><span class="lvl lvl-${esc(d.level)}" style="font-size:1.4rem">${esc(d.level)}</span> <b>${esc(info.name || "")}</b></div>
        <p>${d.reason === "massimo" ? `Hai risposto bene a tutti i livelli del corso. Ti consiglio di iniziare dal <b>${esc(d.level)}</b>.` : d.level === "A1" && !(d.acquired && d.acquired.A1) ? "Conviene partire dall'inizio, dal livello <b>A1</b>: costruirai le basi con calma." : `Ti consiglio di iniziare dal livello <b>${esc(d.level)}</b>.`}</p>
        ${info.can ? `<p class="muted">${esc(info.can)}</p>` : ""}
        ${rows ? `<ul class="stack" style="list-style:none;padding:0;margin:0">${rows}</ul>` : ""}
        <div class="tip">È una stima su circa ${total} domande di grammatica e lessico scritti: non misura l'ascolto né la conversazione. Se ti sembra troppo alta o troppo bassa, apri pure un'altra unità: nulla è bloccato e le unità precedenti restano aperte.</div>
        <div class="cta-row">
          ${first ? `<button class="btn primary" type="button" id="lv-unit">Inizia da «${hl(first.title)}»</button>` : ""}
          <button class="btn" type="button" id="lv-again">Rifai il test</button>
          <button class="btn" type="button" id="lv-home">Torna a Oggi</button>
        </div></div></div>`;
      const u = host.querySelector("#lv-unit"); if (u) u.onclick = () => A.go("percorso", { unit: first.id });
      host.querySelector("#lv-again").onclick = begin;
      host.querySelector("#lv-home").onclick = () => A.go("oggi");
      window.scrollTo({ top: 0 });
    }

    A.addTab("livello", "Test di livello", el => { host = el; intro(); }, null, { hidden: true });
    api.start = () => A.go("livello");
  });
})();
