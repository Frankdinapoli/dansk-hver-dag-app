/* Dansk hver dag — estensione «Laboratorio»: esercizi con seed, esercizi creati dall'IA, shadowing, ascolto rapido, punti deboli. */
(window.DANSK_EXT ||= []).push(function (A) {
"use strict";
const { $, $$, esc, hl, inline, norm, fold, lev, toast, speak, stopSpeech, sayBtn, SPEAKER, runQuestions, tokensOf,
  nounQ, verbQ, adjQ, vocabQ, UNITS, WORDS, WMAP, LEVELS, TYPE_LABEL } = A;

/* =========================================================
   Utilità: seed, PRNG, stato
   ========================================================= */
const SEED_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const newSeed = () => Array.from({ length: 6 }, () => SEED_CHARS[Math.floor(Math.random() * SEED_CHARS.length)]).join("");
const cleanSeed = s => String(s || "").toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 12);

function hashStr(str) { // xmur3
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909);
  return (h ^ (h >>> 16)) >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function makeRng(seed) {
  const r = mulberry32(hashStr("dansk|" + seed));
  return {
    next: r,
    pick: a => a[Math.floor(r() * a.length)],
    shuffle: a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; },
  };
}

const S = () => { const s = A.state(); s.lab ||= {}; return s.lab; };
const save = () => A.save();
const scopeVal = () => { const v = S().scope; return v === "started" || LEVELS.includes(v) ? v : "started"; };
const scopeUnits = () => A.trainUnits(scopeVal());
const scopeWords = us => [...new Set(us.flatMap(u => u.wordIds))].map(id => WMAP.get(id)).filter(Boolean);
const penal = id => ok => { if (!ok) A.penalize(id); };
const wc = s => String(s).trim().split(/\s+/).filter(Boolean).length;
const NOSAMPLE = "Gli esercizi creati dall'IA hanno bisogno di Claude (pagina su claude.ai) o di un motore IA (Gemini o Ollama).";

/* Navigazione interna: ogni schermata ha un «token»; timer e richieste asincrone si fermano se il token cambia */
let sec = null, nav = 0, aborter = null, shadowStop = null;
function leave() {
  nav++;
  if (aborter) { try { aborter.abort(); } catch (e) {} aborter = null; }
  if (shadowStop) { shadowStop(); shadowStop = null; }
}
const alive = tok => tok === nav && sec && sec.isConnected && !sec.hidden;
const backBtn = () => `<div class="crumb"><button class="btn ghost sm" type="button" id="lab-back">← Laboratorio</button></div>`;
function subView(html) {
  leave();
  sec.innerHTML = `<div class="lab-view">${backBtn()}${html}</div>`;
  $("#lab-back", sec).onclick = () => render(sec);
  return nav;
}

function scopeField() {
  const sc = scopeVal();
  return `<div class="field"><label for="lab-scope">Materiale</label>
    <select id="lab-scope"><option value="started">Le unità fatte finora (${A.trainUnits("started").length})</option>${LEVELS.map(L => `<option value="${L}" ${sc === L ? "selected" : ""}>Tutto il livello ${L}</option>`).join("")}</select></div>`;
}
function seedField(seed) {
  return `<div class="field"><label for="lab-seed">Seed</label>
    <div class="lab-seedrow"><input type="text" class="lab-seed" id="lab-seed" value="${esc(seed)}" maxlength="12" autocomplete="off" spellcheck="false" aria-label="Seed">
    <button class="btn sm" type="button" id="lab-newseed">Nuovo seed</button></div></div>`;
}
function wireSeed() {
  const inp = $("#lab-seed", sec);
  $("#lab-newseed", sec).onclick = () => { inp.value = newSeed(); };
  inp.oninput = () => { const p = inp.selectionStart; inp.value = cleanSeed(inp.value); try { inp.setSelectionRange(p, p); } catch (e) {} };
}
const readSeed = () => { const inp = $("#lab-seed", sec); const s = cleanSeed(inp && inp.value) || newSeed(); S().seed = s; save(); return s; };
function wireScope(rerender) {
  const sel = $("#lab-scope", sec);
  if (sel) sel.onchange = e => { S().scope = e.target.value; save(); rerender(); };
}

/* =========================================================
   Schermata principale
   ========================================================= */
const CARDS = [
  ["seed", "Esercizi con seed", "15 domande varie, sempre uguali per lo stesso codice: puoi ripeterle o condividerle."],
  ["ai", "Esercizi creati dall'IA", "Claude prepara un set su misura per il tuo livello e per un argomento a tua scelta."],
  ["shadow", "Shadowing", "Ascolta una riga del testo e ripetila ad alta voce, a tempo."],
  ["listen", "Ascolto rapido", "Senti una parola e scegli come si scrive."],
  ["weak", "Punti deboli", "15 domande sulle parole in cui sbagli di più."],
];
const OPEN = { seed: openSeed, ai: openAI, shadow: openShadow, listen: openListen, weak: openWeak };

function render(el) {
  sec = el; leave();
  el.innerHTML = `<div class="lab-view"><div class="stack"><h2>Laboratorio</h2>
    <p class="muted">Esercizi extra per andare oltre il ripasso: sessioni ripetibili, esercizi su misura, pronuncia e ascolto.</p>
    ${scopeField()}</div>
    <div class="drills">${CARDS.map(([k, t, d]) => `<button class="drill" type="button" data-lab="${k}"><b>${t}</b><span>${d}</span></button>`).join("")}</div></div>`;
  wireScope(() => {});
  $$("[data-lab]", el).forEach(b => b.onclick = () => OPEN[b.dataset.lab]());
}

/* =========================================================
   1. Esercizi con seed
   ========================================================= */
function seededNoun(w, R) {
  if (R.next() < .25) return { kind: "mc", label: "Genere del sostantivo", prompt: `<span class="da">${hl(w.sg)}</span> <span class="muted small">(${esc(w.it)})</span>`, options: ["en", "et"], answer: w.art, after: `${w.art} ${w.sg}`, expl: `*${w.art} ${w.sg}* → *${w.def}*`, onResult: penal(w.id) };
  const [k, lab] = R.pick([["def", "forma determinativa singolare"], ["pl", "plurale indeterminativo"], ["pld", "plurale determinativo"]]);
  return { kind: "type", label: lab, prompt: `<span class="da">${hl(w.da)}</span> → ?`, hint: esc(w.it), answers: [w[k]], solution: w[k], after: w[k], expl: `*${w.da}* · *${w.def}* · *${w.pl}* · *${w.pld}*`, onResult: penal(w.id) };
}
function seededVerb(w, R) {
  const [k, lab, sol] = R.pick([["pres", "presente (nutid)", w.pres], ["past", "passato (datid)", w.past], ["perf", "passato prossimo (førnutid)", `${w.aux} ${w.pp}`]]);
  const answers = k === "perf" ? (w.aux === "er" ? [`er ${w.pp}`, `har ${w.pp}`] : [`har ${w.pp}`]) : [sol];
  const subj = R.pick(["jeg", "du", "han", "hun", "vi", "de"]);
  return { kind: "type", label: lab, prompt: `<span class="da">${hl(w.da)}</span>`, hint: `${esc(w.it)} · <span class="da">${subj} ___</span>`,
    answers, solution: sol, after: `${subj} ${sol}`, expl: `*at ${w.inf}* · *${w.pres}* · *${w.past}* · *${w.aux} ${w.pp}*`, onResult: penal(w.id) };
}
function seededAdj(w, nouns, R) {
  const n = R.pick(nouns);
  const defSg = w.base === "lille" ? "lille" : w.pl;
  const variants = [
    [`${n.art} ___ ${n.sg}`, n.art === "en" ? w.base : w.neu, "indeterminativo singolare"],
    [`___ ${n.pl}`, w.pl, "plurale"],
    [`${n.art === "en" ? "den" : "det"} ___ ${n.sg}`, defSg, "determinativo"],
  ];
  if (w.comp !== "-") variants.push([`${n.art === "en" ? "Den" : "Det"} er ___ end ${n.art === "en" ? "den" : "det"} anden.`, w.comp, "comparativo"]);
  const [frame, sol, lab] = R.pick(variants);
  return { kind: "type", label: `Accordo dell'aggettivo · ${lab}`, prompt: hl(frame).replace("___", '<span class="blank">&nbsp;</span>'),
    hint: `<span class="da">${hl(w.base)}</span> = ${esc(w.it)} · <span class="da">${hl(n.da)}</span> = ${esc(n.it)}`,
    answers: [sol], solution: sol, after: frame.replace("___", sol), expl: `*${w.base}* · *${w.neu}* · *${w.pl}*${w.comp !== "-" ? ` · *${w.comp}* · *${w.sup}*` : ""}`, onResult: penal(w.id) };
}
function seededVocab(w, ws, R) {
  if (R.next() < .45) {
    let pool = ws.filter(x => x.id !== w.id && x.t === w.t && x.it !== w.it);
    if (pool.length < 3) pool = pool.concat(WORDS.filter(x => !x.custom && x.id !== w.id && x.it !== w.it && x.t === w.t && !pool.includes(x)));
    const others = [...new Set(R.shuffle(pool).map(x => x.it))].filter(x => x !== w.it).slice(0, 3);
    return { kind: "mc", label: "Che cosa significa?", prompt: `<span class="da">${hl(w.da)}</span>`, sayPrompt: w.da, options: R.shuffle([w.it, ...others]), answer: w.it, after: w.da, onResult: penal(w.id) };
  }
  const ans = [w.da];
  if (w.t === "n" && w.pl === "-") ans.push(`${w.art} ${w.sg}`);
  if (w.t === "v") ans.push(w.inf);
  return { kind: "type", label: "Come si dice in danese?", prompt: `<b>${esc(w.it)}</b>${TYPE_LABEL[w.t] ? ` <span class="tag">${TYPE_LABEL[w.t]}</span>` : ""}`,
    answers: ans, solution: w.da, article: w.t === "n", after: w.da, onResult: penal(w.id) };
}
function seededOrder(l) {
  const toks = tokensOf(l.da);
  return { kind: "order", label: "Metti le parole in ordine", prompt: esc(l.it), long: true, tokens: toks, answers: [l.da], solution: l.da, after: l.da };
}
function seededCloze(l, R) {
  const parts = l.da.split(/\s+/);
  const cands = [];
  parts.forEach((p, i) => {
    const m = p.match(/^([^\p{L}]*)([\p{L}]+)([^\p{L}]*)$/u);
    if (m && m[2].length >= 3) cands.push({ i, lead: m[1], core: m[2], trail: m[3] });
  });
  if (!cands.length) return null;
  const c = R.pick(cands);
  const html = parts.map((p, i) => i === c.i ? `${esc(c.lead)}<span class="blank">&nbsp;</span>${esc(c.trail)}` : hl(p)).join(" ");
  return { kind: "type", label: "Completa la frase", prompt: html, long: true, hint: esc(l.it), answers: [c.core], solution: c.core, after: l.da };
}
function seededListen(l, lines, R) {
  const others = [...new Set(R.shuffle(lines.filter(x => x.it !== l.it)).map(x => x.it))].slice(0, 3);
  if (others.length < 3) return null;
  return { kind: "mc", label: "Ascolta e scegli la traduzione", prompt: '<span class="muted">Che cosa hai sentito?</span>', sayPrompt: l.da,
    options: R.shuffle([l.it, ...others]), answer: l.it, after: l.da, expl: `*${l.da}*` };
}

// Costruisce le domande in modo deterministico: stesso seed + stesso materiale = stesse domande
function buildSeeded(seed, us, N = 15) {
  const R = makeRng(seed);
  const ws = scopeWords(us);
  const nouns = ws.filter(w => w.t === "n");
  const lines = us.flatMap(u => u.textLines.filter(l => l.da && l.it));
  const pools = {
    noun: R.shuffle(nouns.filter(w => w.pl !== "-")),
    verb: R.shuffle(ws.filter(w => w.t === "v")),
    adj: nouns.some(n => n.pl !== "-") ? R.shuffle(ws.filter(w => w.t === "a")) : [],
    vocab: R.shuffle(ws),
    order: R.shuffle(lines.filter(l => { const n = wc(l.da); return n >= 4 && n <= 12 && tokensOf(l.da).length >= 4; })),
    cloze: R.shuffle(lines.filter(l => wc(l.da) >= 3)),
    listen: lines.length >= 6 ? R.shuffle(lines.filter(l => { const n = wc(l.da); return n >= 2 && n <= 12; })) : [],
  };
  const weight = { noun: 2, verb: 2, adj: 1.5, vocab: 2, order: 2, cloze: 2, listen: 1.5 };
  const nounsPl = nouns.filter(n => n.pl !== "-");
  const qs = [];
  let guard = 0;
  while (qs.length < N && guard++ < 400) {
    const kinds = Object.keys(pools).filter(k => pools[k].length);
    if (!kinds.length) break;
    const tot = kinds.reduce((s, k) => s + weight[k], 0);
    let r = R.next() * tot, kind = kinds[kinds.length - 1];
    for (const k of kinds) { r -= weight[k]; if (r < 0) { kind = k; break; } }
    const it = pools[kind].pop();
    let q = null;
    if (kind === "noun") q = seededNoun(it, R);
    else if (kind === "verb") q = seededVerb(it, R);
    else if (kind === "adj") q = seededAdj(it, nounsPl, R);
    else if (kind === "vocab") q = seededVocab(it, ws, R);
    else if (kind === "order") q = seededOrder(it);
    else if (kind === "cloze") q = seededCloze(it, R);
    else if (kind === "listen") q = seededListen(it, lines, R);
    if (q) qs.push(q);
  }
  return qs;
}

function openSeed(seedIn) {
  const seed = cleanSeed(seedIn) || S().seed || newSeed();
  const tok = subView(`<div class="stack"><h2>Esercizi con seed</h2>
    <p class="muted">Ogni codice genera sempre le stesse 15 domande, nello stesso ordine, dallo stesso materiale. Annota il codice per rifare la sessione domani, o passalo a un amico.</p>
    ${scopeField()}${seedField(seed)}
    <div class="cta-row"><button class="btn primary" type="button" id="lab-go">Inizia</button></div></div>
    <div id="lab-run"></div>`);
  wireScope(() => openSeed($("#lab-seed", sec).value)); wireSeed();
  $("#lab-go", sec).onclick = () => startSeeded(readSeed());
}
function startSeeded(seed) {
  const us = scopeUnits();
  const qs = buildSeeded(seed, us);
  const run = $("#lab-run", sec);
  if (qs.length < 3) { run.innerHTML = `<div class="lab-note">Non c'è ancora abbastanza materiale: inizia qualche unità in più o scegli un livello intero.</div>`; return; }
  runQuestions(run, qs, {
    title: `Seed ${seed}`,
    endHtml: () => `<div class="tip">Seed di questa sessione: <b class="hint">${esc(seed)}</b></div>`,
    again: () => startSeeded(seed),
    againLabel: "Ripeti questo seed",
    back: { label: "Nuovo seed", fn: () => { S().seed = newSeed(); save(); openSeed(S().seed); } },
  });
}

/* =========================================================
   2. Esercizi creati dall'IA
   ========================================================= */
function buildPrompt(level, topic, n, seed) {
  const known = A.knownWords(120), weak = A.weakWords(15).map(w => w.da);
  return `You are a Danish teacher creating practice exercises for an Italian-speaking learner.
Learner level (CEFR): ${level}.
Return ONLY valid JSON (no markdown, no commentary) with this exact shape:
{"title": string, "items": [{"type": "mc" | "type" | "order" | "trans", "prompt_it": string, "question_da"?: string, "options"?: [string], "answer": string, "accept"?: [string], "explanation_it": string}]}
Create exactly ${n} items, mixing the four types.
Rules:
- "prompt_it" and "explanation_it" are in ITALIAN (short, clear). All Danish must be correct and natural.
- mc: "options" has 3-4 Danish or Italian strings and must include "answer"; "question_da" is optional context.
- type: "question_da" is a Danish sentence with ___ where the missing word goes; "answer" is the missing Danish word or phrase; "accept" lists other correct variants.
- order: "answer" is a full Danish sentence (4-10 words) the learner rebuilds from scrambled words; "prompt_it" is its Italian meaning.
- trans: "prompt_it" is an Italian sentence; "answer" is the Danish translation; "accept" lists other correct translations.
- Keep grammar and vocabulary suited to level ${level}; use mostly words from this list of words the learner already studied: ${known.length ? known.join(", ") : "(none yet: use very basic words)"}.
- Prioritise practising these weak words: ${weak.length ? weak.join(", ") : "(none)"}.
${topic ? `- Topic or grammar focus requested by the learner: ${topic}` : "- No specific topic: vary the situations."}
- variation seed: ${seed} (a different seed must give a different set of items).`;
}

function convertAI(raw, n) {
  const items = raw && Array.isArray(raw.items) ? raw.items : [];
  const str = v => typeof v === "string" ? v.trim() : "";
  const out = [];
  for (const it of items) {
    if (out.length >= n) break;
    if (!it || typeof it !== "object") continue;
    const type = str(it.type), pit = str(it.prompt_it), ans = str(it.answer), qda = str(it.question_da), ex = str(it.explanation_it);
    if (!["mc", "type", "order", "trans"].includes(type) || !pit || !ans) continue;
    const accept = Array.isArray(it.accept) ? it.accept.map(str).filter(x => x && x !== ans) : [];
    const meta = { _lab: { da: ans, it: pit } };
    if (type === "mc") {
      let opts = Array.isArray(it.options) ? it.options.map(str).filter(Boolean) : [];
      opts = [...new Set(opts)];
      if (opts.length < 2) continue;
      if (!opts.includes(ans)) opts.push(ans);
      if (opts.length > 4) { const others = opts.filter(o => o !== ans).slice(0, 3); opts = [...others, ans]; }
      out.push(Object.assign({ kind: "mc", label: "Scegli la risposta giusta", long: true,
        prompt: (qda ? `<span class="da">${hl(qda)}</span><br>` : "") + `<span class="${qda ? "muted small" : ""}">${esc(pit)}</span>`,
        options: A.shuffle(opts), answer: ans, expl: ex, after: null }, meta));
    } else if (type === "type") {
      const html = qda ? hl(qda).replace(/_{2,}/, '<span class="blank">&nbsp;</span>') : esc(pit);
      out.push(Object.assign({ kind: "type", label: qda ? "Completa la frase" : "Scrivi in danese", long: true, prompt: html,
        hint: qda ? esc(pit) : "", answers: [ans, ...accept], solution: ans, expl: ex, after: qda && /_{2,}/.test(qda) ? qda.replace(/_{2,}/, ans) : ans }, meta));
    } else if (type === "order") {
      const toks = tokensOf(ans);
      if (toks.length < 2 || toks.length > 14) continue;
      out.push(Object.assign({ kind: "order", label: "Metti le parole in ordine", long: true, prompt: esc(pit), tokens: toks, answers: [ans, ...accept], solution: ans, expl: ex, after: ans }, meta));
    } else {
      out.push(Object.assign({ kind: "trans", label: "Traduci in danese", long: true, prompt: esc(pit), answers: [ans, ...accept], solution: ans, expl: ex, after: ans }, meta));
    }
  }
  return out;
}

function openAI() {
  const tok = subView(`<div class="stack"><h2>Esercizi creati dall'IA</h2>
    <p class="muted">Claude prepara un set nuovo sul tuo livello (${esc(A.currentLevel())}), con le parole che conosci e quelle in cui sbagli di più. Usa il tuo abbonamento: parte solo quando premi il pulsante.</p></div>
    <div id="lab-ai-form" class="lab-ctl"></div><div id="lab-run"></div>`);
  const form = $("#lab-ai-form", sec);
  const seed = S().seed || newSeed();
  form.innerHTML = `<div class="lab-note" id="lab-ai-wait">Controllo la disponibilità di Claude…</div>`;
  A.getSample().then(sample => {
    if (!alive(tok)) return;
    if (!sample) {
      form.innerHTML = window.DanskLocalAI ? window.DanskLocalAI.noAiHtml() : `<div class="lab-note">${NOSAMPLE}</div>`;
      if (window.DanskLocalAI) window.DanskLocalAI.wireNoAi(form);
      return;
    }
    A.aiMode().then(m => { if (m === "local" && alive(tok) && window.DanskLocalAI) form.insertAdjacentHTML("afterbegin", window.DanskLocalAI.bannerHtml()); });
    form.innerHTML = `<div class="stack"><div class="field" style="display:grid"><label for="lab-topic">Argomento o grammatica su cui esercitarti (facoltativo)</label>
      <textarea id="lab-topic" rows="2" maxlength="200" placeholder="Ad esempio: preposizioni di tempo, al ristorante"></textarea></div>
      <div class="field"><label for="lab-n">Numero di domande</label><input type="number" class="lab-num" id="lab-n" min="4" max="15" value="${+S().aiN || 8}" inputmode="numeric" style="min-height:44px;background:var(--surface);border:1px solid var(--line);border-radius:8px;padding:9px 12px"></div>
      ${seedField(seed)}
      <div class="cta-row"><button class="btn primary" type="button" id="lab-ai-go">Crea gli esercizi</button></div></div>`;
    wireSeed();
    $("#lab-ai-go", sec).onclick = () => runAI(sample, tok);
  });
}
function runAI(sample, tok) {
  const topic = ($("#lab-topic", sec).value || "").trim().slice(0, 200);
  let n = parseInt($("#lab-n", sec).value, 10); if (!(n >= 4)) n = 8; n = Math.min(15, n);
  S().aiN = n;
  const seed = readSeed();
  const form = $("#lab-ai-form", sec), run = $("#lab-run", sec);
  if (aborter) { try { aborter.abort(); } catch (e) {} }
  const ctl = aborter = new AbortController();
  form.hidden = true;
  run.innerHTML = `<div class="panel lab-wait"><span class="lab-spin" aria-hidden="true"></span><span role="status">Sto preparando gli esercizi…</span><button class="btn sm" type="button" id="lab-stop">Stop</button></div>`;
  $("#lab-stop", sec).onclick = () => { ctl.abort(); };
  const fail = msg => {
    form.hidden = false;
    run.innerHTML = msg ? `<div class="lab-note">${esc(msg)}</div>` : "";
  };
  sample.json(buildPrompt(A.currentLevel(), topic, n, seed), { modelTier: "default", cache: false, signal: ctl.signal }).then(res => {
    if (aborter === ctl) aborter = null;
    if (!alive(tok)) return;
    const qs = convertAI(res, n);
    if (qs.length < 2) { fail("Claude non ha prodotto esercizi utilizzabili. Riprova, magari con un argomento diverso."); return; }
    startAISession(qs, res && typeof res.title === "string" && res.title.trim() ? res.title.trim().slice(0, 60) : "Esercizi IA", tok);
  }, e => {
    if (aborter === ctl) aborter = null;
    if (!alive(tok)) return;
    if (e && e.code === "cancelled") { fail(""); return; }
    fail(A.sampleError(e));
  });
}
function startAISession(qs, title, tok) {
  const run = $("#lab-run", sec);
  $("#lab-ai-form", sec).hidden = false;
  let wrongList = [];
  if (!run._labAdd) {
    run._labAdd = true;
    run.addEventListener("click", ev => {
      const b = ev.target.closest("[data-lab-add]"); if (!b || b.disabled) return;
      const q = run._labWrong && run._labWrong[+b.dataset.labAdd];
      if (!q || !q._lab) return;
      A.addCard({ da: q._lab.da, it: q._lab.it, src: "lab" });
      b.disabled = true; b.textContent = "Aggiunta";
    });
  }
  // Nascondo il modulo mentre si svolge la sessione
  $("#lab-ai-form", sec).hidden = true;
  A.aiMode().then(m => {
    if (m !== "local" || !window.DanskLocalAI || !alive(tok) || !run.isConnected) return;
    const old = run.previousElementSibling; if (old && old.hasAttribute("data-local-banner")) old.remove();
    run.insertAdjacentHTML("beforebegin", window.DanskLocalAI.bannerHtml());
  });
  runQuestions(run, qs, {
    title,
    onEnd: (sc, tot, wrong) => { wrongList = wrong.slice(); run._labWrong = wrongList; },
    endHtml: () => wrongList.length ? `<div><div class="label" style="margin-bottom:6px">Aggiungi al mazzo di ripasso</div>${wrongList.map((q, i) => q._lab ? `<div class="lab-add"><span><span class="da">${hl(q._lab.da)}</span> <span class="muted small">— ${esc(q._lab.it)}</span></span><button class="btn sm" type="button" data-lab-add="${i}">Aggiungi al mazzo</button></div>` : "").join("")}</div>` : "",
    again: () => { if (alive(tok)) { S().seed = newSeed(); save(); openAI(); } },
    back: { label: "Laboratorio", fn: () => render(sec) },
  });
}

/* =========================================================
   3. Shadowing
   ========================================================= */
function openShadow() {
  const us = scopeUnits().filter(u => u.textLines.length);
  const tok = subView(`<div class="stack"><h2>Shadowing</h2>
    <p class="muted">Lo shadowing consiste nel ripetere ad alta voce, subito dopo l'ascolto, quello che senti, imitando ritmo e intonazione. Allena la pronuncia, la fluidità e l'orecchio ai suoni danesi, e fissa intere frasi nella memoria.</p>
    ${scopeField()}<div id="lab-sh-body"></div></div>`);
  wireScope(openShadow);
  const body = $("#lab-sh-body", sec);
  if (!us.length) { body.innerHTML = `<div class="lab-note">Non ci sono ancora testi in questo materiale: inizia qualche unità o scegli un livello intero.</div>`; return; }
  const st = A.startedUnits();
  const last = st.length ? st.reduce((a, b) => b.idx > a.idx ? b : a) : null;
  let def = last && us.includes(last) ? last : us[us.length - 1];
  const savedU = S().shUnit && us.find(u => u.id === S().shUnit);
  if (savedU) def = savedU;
  body.innerHTML = `<div class="stack">
    <div class="field"><label for="lab-unit">Unità</label><select id="lab-unit">${us.map(u => `<option value="${esc(u.id)}" ${u === def ? "selected" : ""}>${u.level} · ${String(u.n).padStart(2, "0")} ${esc(u.title)}</option>`).join("")}</select></div>
    <div class="field"><label for="lab-rate">Velocità</label><select id="lab-rate"><option value="0.7">Lenta</option><option value="0.9" selected>Normale</option></select></div>
    <div class="chips"><button class="chip" type="button" id="lab-hidetxt" aria-pressed="false">Nascondi il testo</button><button class="chip" type="button" id="lab-showit" aria-pressed="false">Mostra traduzione</button></div>
    <div class="cta-row"><button class="btn primary" type="button" id="lab-sh-go">Avvia</button>
      <button class="btn" type="button" id="lab-sh-pause" disabled>Pausa</button>
      <button class="btn" type="button" id="lab-sh-rep" disabled>Ripeti riga</button>
      <button class="btn" type="button" id="lab-sh-next" disabled>Avanti</button></div>
    <div class="lab-status" id="lab-sh-status" role="status" aria-live="polite"></div>
    <div class="panel"><div class="reader lab-shadow hide-it" id="lab-sh-text"></div></div></div>`;
  const $u = $("#lab-unit", sec), $r = $("#lab-rate", sec), box = $("#lab-sh-text", sec), status = $("#lab-sh-status", sec);
  const bGo = $("#lab-sh-go", sec), bPause = $("#lab-sh-pause", sec), bRep = $("#lab-sh-rep", sec), bNext = $("#lab-sh-next", sec);
  const hideBtn = $("#lab-hidetxt", sec), itBtn = $("#lab-showit", sec);
  let unit = def, idx = 0, running = false, paused = false, runTok = 0, timers = [];

  const clearTimers = () => { timers.forEach(t => { clearTimeout(t); clearInterval(t); }); timers = []; };
  const drawText = () => {
    box.innerHTML = unit.textLines.map((l, k) => `<div class="line" data-line="${k}">${sayBtn(l.da, "sm")}<span class="da">${l.who ? `<span class="who">${esc(l.who)}</span>` : ""}${hl(l.da)}</span>${l.it ? `<span class="it">${esc(l.it)}</span>` : ""}</div>`).join("");
  };
  const mark = (k, revealed) => {
    $$(".line", box).forEach((el, j) => { el.classList.toggle("playing", j === k); el.classList.toggle("revealed", j === k && revealed); });
  };
  const lineEl = k => $$(".line", box)[k];
  const stopAll = () => { runTok++; clearTimers(); stopSpeech(); };
  shadowStop = () => { stopAll(); running = false; };
  const ok = () => alive(tok) && box.isConnected;

  const finish = () => {
    stopAll(); running = false; paused = false; mark(-1);
    status.textContent = "Fatto. Puoi ripetere da capo con «Avvia».";
    bGo.textContent = "Avvia"; bGo.disabled = false; [bPause, bRep, bNext].forEach(b => b.disabled = true);
    bPause.textContent = "Pausa";
  };
  const play = k => {
    stopAll();
    const my = runTok;
    if (k >= unit.textLines.length) { finish(); return; }
    idx = k; running = true; paused = false;
    const l = unit.textLines[k];
    const rate = +$r.value || .9;
    mark(k, false);
    const el = lineEl(k); if (el && el.scrollIntoView) el.scrollIntoView({ block: "nearest", behavior: "smooth" });
    status.textContent = `Riga ${k + 1} di ${unit.textLines.length}: ascolta`;
    [bPause, bRep, bNext].forEach(b => b.disabled = false); bPause.textContent = "Pausa"; bGo.disabled = true;
    speak(l.da, rate);
    // Il motore vocale non dà un evento di fine: controllo io quando ha finito di parlare
    const t0 = Date.now(); let started = false;
    const poll = setInterval(() => {
      if (my !== runTok || !ok()) { clearInterval(poll); if (!ok()) shadowStop && shadowStop(); return; }
      const sp = "speechSynthesis" in window && speechSynthesis.speaking;
      if (sp) started = true;
      if ((started && !sp) || (!started && Date.now() - t0 > 2500)) { clearInterval(poll); repeatPhase(k, my); }
    }, 120);
    timers.push(poll);
  };
  const repeatPhase = (k, my) => {
    if (my !== runTok || !ok()) return;
    const l = unit.textLines[k];
    const slow = (+$r.value || .9) < .8;
    const wait = (600 + 90 * l.da.length) * (slow ? 1.3 : 1);
    mark(k, true);
    status.textContent = `Riga ${k + 1} di ${unit.textLines.length}: ora ripeti ad alta voce`;
    timers.push(setTimeout(() => { if (my === runTok && ok()) play(k + 1); }, wait));
  };

  $u.onchange = () => { stopAll(); running = false; unit = us.find(u => u.id === $u.value) || unit; S().shUnit = unit.id; save(); idx = 0; drawText(); mark(-1); finish(); status.textContent = ""; };
  bGo.onclick = () => { idx = 0; play(0); };
  bPause.onclick = () => {
    if (!running) return;
    if (!paused) { paused = true; stopAll(); status.textContent = "In pausa"; bPause.textContent = "Riprendi"; }
    else { paused = false; play(idx); }
  };
  bRep.onclick = () => play(idx);
  bNext.onclick = () => play(idx + 1);
  hideBtn.onclick = () => { const on = hideBtn.getAttribute("aria-pressed") !== "true"; hideBtn.setAttribute("aria-pressed", on); box.classList.toggle("hide-text", on); };
  itBtn.onclick = () => { const on = itBtn.getAttribute("aria-pressed") !== "true"; itBtn.setAttribute("aria-pressed", on); box.classList.toggle("hide-it", !on); };
  drawText();
}

/* =========================================================
   4. Ascolto rapido
   ========================================================= */
function listenQ(item, pool, isWord) {
  const key = s => fold(norm(s)).replace(/^(at|en|et) /, "");
  const k0 = key(item.da);
  const cands = pool.filter(x => x.da !== item.da).map(x => {
    const kx = key(x.da);
    return { x, d: lev(k0, kx) + (kx[0] === k0[0] ? 0 : 1.5) + Math.random() * .8 };
  }).sort((a, b) => a.d - b.d);
  const seen = new Set([item.da]), dis = [];
  for (const c of cands.slice(0, 14)) { if (!seen.has(c.x.da)) { seen.add(c.x.da); dis.push(c.x.da); } if (dis.length >= 8) break; }
  const opts = [item.da, ...A.shuffle(dis.slice(0, 6)).slice(0, 3)];
  if (opts.length < 3) return null;
  return { kind: "mc", label: "Ascolto rapido · come si scrive?",
    prompt: `<div class="lab-listen"><span class="muted small">Ascolta e scegli la forma scritta</span><button class="btn sm" type="button" data-lab-slow="${esc(item.da)}">Riascolta lentamente</button></div>`,
    sayPrompt: item.da, options: A.shuffle(opts), answer: item.da, after: item.da, expl: `*${item.da}* = ${item.it}`, onResult: isWord ? penal(item.id) : null };
}
function openListen() {
  const tok = subView(`<div class="stack"><h2>Ascolto rapido</h2>
    <p class="muted">15 giri: senti una parola o una frase breve e scegli come si scrive tra quattro forme simili. Poi vedi il significato.</p>
    ${scopeField()}<div class="cta-row"><button class="btn primary" type="button" id="lab-go">Inizia</button></div></div><div id="lab-run"></div>`);
  wireScope(openListen);
  const run = $("#lab-run", sec);
  if (!run._labSlow) {
    run._labSlow = true;
    run.addEventListener("click", ev => { const b = ev.target.closest("[data-lab-slow]"); if (b) speak(b.dataset.labSlow, 0.6); });
  }
  const start = () => {
    const us = scopeUnits(), ws = scopeWords(us);
    const words = ws.filter(w => w.t !== "x" || !w.custom).filter(w => w.da && w.it);
    const short = us.flatMap(u => u.textLines.filter(l => l.da && l.it && wc(l.da) >= 2 && wc(l.da) <= 4).map(l => ({ da: l.da, it: l.it })));
    const dedup = a => { const s = new Set(); return a.filter(x => !s.has(x.da) && s.add(x.da)); };
    const shortU = dedup(short);
    const qs = [];
    const wq = A.shuffle(words), sq = A.shuffle(shortU);
    let guard = 0;
    while (qs.length < 15 && guard++ < 200 && (wq.length || sq.length)) {
      const usePhrase = sq.length >= 4 && (Math.random() < .3 || !wq.length);
      let q = null;
      if (usePhrase) { const it = sq.pop(); q = listenQ(it, shortU, false); }
      else if (wq.length) { const it = wq.pop(); q = listenQ(it, words.filter(x => x.t === it.t).length >= 5 ? words.filter(x => x.t === it.t) : words, true); }
      else break;
      if (q) qs.push(q);
    }
    if (qs.length < 3) { run.innerHTML = `<div class="lab-note">Non c'è ancora abbastanza materiale: inizia qualche unità in più o scegli un livello intero.</div>`; return; }
    runQuestions(run, qs, { title: "Ascolto rapido", again: start, back: { label: "Laboratorio", fn: () => render(sec) } });
  };
  $("#lab-go", sec).onclick = start;
}

/* =========================================================
   5. Punti deboli
   ========================================================= */
function openWeak() {
  subView(`<div class="stack"><h2>Punti deboli</h2><p class="muted">Domande costruite sulle parole in cui hai sbagliato di più.</p></div><div id="lab-run"></div>`);
  const run = $("#lab-run", sec);
  const start = () => {
    const pool = A.weakWords(30);
    if (pool.length < 5) {
      run.innerHTML = `<div class="lab-note">Non ci sono ancora abbastanza errori registrati (servono almeno 5 parole con errori): continua con ripasso e allenamento, poi torna qui.</div>`;
      return;
    }
    const nouns = WORDS.filter(w => w.t === "n" && w.pl !== "-");
    const qs = A.shuffle(pool).slice(0, 15).map(w => {
      if (w.t === "n" && w.pl !== "-") return Math.random() < .5 ? nounQ(w) : vocabQ(w);
      if (w.t === "v") return Math.random() < .6 ? verbQ(w) : vocabQ(w);
      if (w.t === "a" && nouns.length) return Math.random() < .6 ? adjQ(w, nouns) : vocabQ(w);
      return vocabQ(w);
    });
    runQuestions(run, qs, { title: "Punti deboli", again: start, back: { label: "Laboratorio", fn: () => render(sec) } });
  };
  start();
}

A.addTab("laboratorio", "Laboratorio", render, "allenamento");
});
