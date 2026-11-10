/* Dansk hver dag — motore dell'app. I contenuti del corso sono in js/course/*.js */
(() => {
"use strict";

/* =========================================================
   Utilità
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const hlEsc = s => s.replace(/[æøåÆØÅ]/g, m => `<span class="sp">${m}</span>`);
const hl = s => hlEsc(esc(s));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const DAY = 864e5;
const dkey = (d = new Date()) => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
const norm = s => String(s).toLowerCase().replace(/[’`]/g, "'").replace(/[.,!?;:"«»“”()¿¡–—]/g, " ").replace(/\s+/g, " ").trim();
const fold = s => s.replace(/æ/g, "ae").replace(/ø/g, "oe").replace(/å/g, "aa").replace(/ae/g, "a").replace(/oe/g, "o").replace(/aa/g, "a");
function lev(a, b) {
  const m = a.length, n = b.length; if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
const SPEAKER = '<svg class="ico" aria-hidden="true"><use href="#i-speaker"/></svg>';
const sayBtn = (text, cls = "") => `<button class="say ${cls}" type="button" data-say="${esc(text)}" aria-label="Ascolta: ${esc(String(text).slice(0, 80))}">${SPEAKER}</button>`;

let toastT;
function toast(msg) {
  const t = $("#toast"); t.textContent = msg; t.hidden = false;
  clearTimeout(toastT); toastT = setTimeout(() => t.hidden = true, 3600);
}

/* =========================================================
   Corso: lettura dei dati
   ========================================================= */
const LEVELS = ["A1", "A2", "B1", "B2", "C1"];
const LEVEL_INFO = {
  A1: { name: "Principiante", can: "Ti presenti, fai domande semplici e capisci espressioni di tutti i giorni." },
  A2: { name: "Elementare", can: "Racconti al passato e te la cavi con casa, lavoro, salute e acquisti." },
  B1: { name: "Intermedio", can: "Esprimi opinioni, racconti esperienze e segui discorsi chiari su temi familiari." },
  B2: { name: "Intermedio superiore", can: "Discuti temi astratti, capisci notizie e testi complessi, scrivi in registro formale." },
  C1: { name: "Avanzato", can: "Capisci il danese vero: registri, ironia, giornali, lingua parlata veloce, e ti esprimi con scioltezza." },
};
const TYPE_LABEL = { n: "sost.", v: "verbo", a: "agg.", x: "" };

const UNITS = (window.COURSE || []).slice().sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) || a.n - b.n);
const UMAP = new Map(UNITS.map(u => [u.id, u]));
const WORDS = [];
const WMAP = new Map();
const lines = s => String(s || "").split("\n").map(l => l.trim()).filter(l => l && !l.startsWith("//"));

function parseWord(line) {
  const f = line.split("|").map(s => s.trim());
  const t = f[0];
  if (t === "n" && f.length === 7) {
    const [, art, sg, def, pl, pld, it] = f;
    return { t, art, sg, def, pl, pld, it, da: pl === "-" ? sg : `${art} ${sg}` };
  }
  if (t === "v" && (f.length === 6 || f.length === 7)) {
    const [, inf, pres, past, pp, it, aux] = f;
    return { t, inf, pres, past, pp, it, aux: aux || "har", da: `at ${inf}` };
  }
  if (t === "a" && f.length === 7) {
    const [, base, neu, pl, comp, sup, it] = f;
    return { t, base, neu, pl, comp, sup, it, da: base };
  }
  if (t === "x" && f.length === 3) return { t, da: f[1], it: f[2] };
  console.warn("Riga di lessico non valida:", line);
  return null;
}
function formsOf(w) {
  if (w.t === "n") return w.pl === "-" ? `(${w.art}) ${w.def}` : `${w.def} · ${w.pl} · ${w.pld}`;
  if (w.t === "v") return `${w.pres} · ${w.past} · ${w.aux} ${w.pp}`;
  if (w.t === "a") return [w.neu, w.pl, w.comp !== "-" ? w.comp : "", w.sup !== "-" ? w.sup : ""].filter(Boolean).join(" · ");
  return "";
}

UNITS.forEach((u, idx) => {
  u.idx = idx;
  u.wordIds = [];
  lines(u.words).forEach(l => {
    const w = parseWord(l); if (!w) return;
    w.id = w.t + ":" + w.da;
    if (!WMAP.has(w.id)) { w.unit = u.id; w.level = u.level; WORDS.push(w); WMAP.set(w.id, w); }
    if (!u.wordIds.includes(w.id)) u.wordIds.push(w.id);
  });
  u.exercises = lines(u.ex).map(parseEx).filter(Boolean);
  u.textLines = [];
  u.paras = [];
  if (u.text) {
    String(u.text.lines).split(/\n\s*\n/).forEach(p => {
      const para = lines(p).map(l => {
        let who = "", rest = l;
        const m = l.match(/^@([^:]+):\s*(.*)$/); if (m) { who = m[1]; rest = m[2]; }
        const k = rest.indexOf(" = ");
        const ln = { who, da: k >= 0 ? rest.slice(0, k).trim() : rest, it: k >= 0 ? rest.slice(k + 3).trim() : "" };
        u.textLines.push(ln); return ln;
      });
      if (para.length) u.paras.push(para);
    });
    u.textQs = lines(u.text.q).map(l => { const [q, r, w, e] = l.split("|"); return { k: "m", q, right: r, wrong: (w || "").split(";").filter(Boolean), expl: e || "" }; });
  }
});

function parseEx(line) {
  const f = line.split("|");
  const k = f[0];
  if (k === "c" && f.length >= 3) return { k, text: f[1], ans: f[2].split(";"), hint: f[3] || "", expl: f[4] || "" };
  if (k === "m" && f.length >= 4) return { k, q: f[1], right: f[2], wrong: f[3].split(";"), expl: f[4] || "" };
  if (k === "o" && f.length >= 3) return { k, text: f[1], it: f[2], alts: (f[3] || "").split(";").filter(Boolean), expl: f[4] || "" };
  if (k === "t" && f.length >= 3) return { k, it: f[1], ans: f[2].split(";"), expl: f[3] || "" };
  console.warn("Esercizio non valido:", line);
  return null;
}

// Parole che nel corso compaiono con la maiuscola a metà frase (nomi propri, «I» = voi)
const NAMES = new Set(["I"]);
(function collectNames() {
  const texts = [];
  UNITS.forEach(u => {
    u.textLines.forEach(l => texts.push(l.da));
    u.exercises.forEach(e => { if (e.text) texts.push(e.text); if (e.ans) texts.push(...e.ans); });
  });
  const lower = new Set();
  const caps = new Set();
  texts.forEach(s => {
    const toks = s.split(/\s+/);
    toks.forEach((t, i) => {
      const clean = t.replace(/[.,!?;:"«»()–]/g, "");
      if (!clean) return;
      if (/^[a-zæøå]/.test(clean)) lower.add(clean);
      else if (i > 0 && /^[A-ZÆØÅ]/.test(clean) && !/[.!?:–]$/.test(toks[i - 1])) caps.add(clean);
    });
  });
  // Una parola che compare anche in minuscolo non è un nome proprio
  caps.forEach(c => { if (!lower.has(c.toLowerCase())) NAMES.add(c); });
})();

/* =========================================================
   Stato
   ========================================================= */
/* Lettura, migrazioni e unione sono in js/store.js (chiave "dansk-hver-dag.v3"; la v2 resta intatta come copia). */
const Store = window.DanskStore;
const KEY = Store.KEY;
const DEFAULTS = Store.DEFAULTS;
let S = Store.load(localStorage).state;
let saveWarned = false;
const saveHooks = [];
function save(opts) {
  if (!(opts && opts.silent)) S.updatedAt = Date.now();
  const ok = Store.save(localStorage, S);
  if (!ok && !saveWarned) { saveWarned = true; toast("Non riesco a salvare i progressi: lo spazio del browser è pieno o bloccato. Fai una copia dal backup nelle impostazioni."); }
  if (!(opts && opts.silent)) saveHooks.forEach(f => { try { f(S); } catch (e) {} });
}
const touchSettings = () => { S.settingsAt = Date.now(); };
// Sostituisce tutto lo stato (importazione di un backup, sincronizzazione) e ridisegna la scheda aperta
function replaceState(next, opts) {
  S = Store.migrate(next); loadCustom(); save(opts);
  try { go((S.route && S.route.tab) || "oggi", S.route || {}); } catch (e) {}
}
const US = id => (S.units[id] ||= {});

function logActivity() {
  const t = dkey();
  S.hist[t] = (S.hist[t] || 0) + 1;
  if (S.streak.last !== t) {
    const y = dkey(new Date(Date.now() - DAY));
    S.streak.count = S.streak.last === y ? S.streak.count + 1 : 1;
    S.streak.last = t;
  }
}
function streakNow() {
  const t = dkey(), y = dkey(new Date(Date.now() - DAY));
  return (S.streak.last === t || S.streak.last === y) ? S.streak.count : 0;
}
const newToday = () => S.newDay.date === dkey() ? S.newDay.n : 0;

/* Ripetizione dilazionata: livelli 0–8 */
const INTERVALS = [0, 1, 2, 4, 8, 16, 32, 64, 120];
const MAXBOX = INTERVALS.length - 1;
const boxOf = id => S.cards[id]?.box || 0;
const learned = id => boxOf(id) >= 3;
const seen = id => !!S.cards[id];
const dots = box => `<span class="dots" title="Livello ${box} di ${MAXBOX}">${[1, 2, 3, 4, 5].map(i => `<i class="${box >= i * 1.6 - .6 ? "on" : ""}"></i>`).join("")}</span>`;
function penalize(id) { const c = S.cards[id]; if (c) { c.box = Math.max(0, c.box - 2); c.due = Date.now(); c.ko = (c.ko || 0) + 1; } }

/* Stato delle unità */
const TH = { words: .8, text: .67, ex: .8 };
function unitProgress(u) {
  const us = S.units[u.id] || {};
  const w = u.wordIds.length ? u.wordIds.filter(seen).length / u.wordIds.length : 1;
  const t = u.textQs?.length ? (us.text ?? -1) : 1;
  const e = u.exercises.length ? (us.ex ?? -1) : 1;
  const done = w >= TH.words && t >= TH.text && e >= TH.ex;
  return { w, t, e, done, started: !!us.started };
}
const startedUnits = () => UNITS.filter(u => S.units[u.id]?.started);
function nextUnit() { return UNITS.find(u => !unitProgress(u).done) || null; }
function markStarted(u) { const us = US(u.id); if (!us.started) { us.started = Date.now(); save(); } }

/* =========================================================
   Sintesi vocale
   ========================================================= */
let daVoice = null, warned = false, seqToken = 0;
function daVoices() {
  if (!("speechSynthesis" in window)) return [];
  return speechSynthesis.getVoices().filter(v => /^da(-|_|$)/i.test(v.lang));
}
function voiceScore(v) {
  const n = v.name || "";
  let s = 10;
  if (/natural|neural/i.test(n)) s = 100;
  else if (/premium/i.test(n)) s = 80;
  else if (/enhanced|forbedret/i.test(n)) s = 60;
  else if (/online|google/i.test(n)) s = 50;
  if (v.localService === false) s += 5;
  return s;
}
function voiceTag(v) {
  const sc = voiceScore(v);
  return sc >= 100 ? "naturale" : sc >= 80 ? "alta qualità" : sc >= 60 ? "migliorata" : "standard";
}
function pickVoice() {
  if (!("speechSynthesis" in window)) return;
  const ds = daVoices();
  let v = S && S.voice ? ds.find(x => x.name === S.voice) : null;
  if (!v) v = ds.slice().sort((x, y) => voiceScore(y) - voiceScore(x))[0] || null;
  daVoice = v;
  renderVoicePicker();
}
function renderVoicePicker() {
  const sel = $("#set-voice"), none = $("#voice-none");
  if (!sel) return;
  const ds = daVoices();
  sel.hidden = !ds.length; if (none) none.hidden = !!ds.length;
  const ls = $("#voice-listen"); if (ls) ls.hidden = !ds.length;
  sel.innerHTML = `<option value="">Automatica (la più naturale disponibile)</option>` +
    ds.slice().sort((x, y) => voiceScore(y) - voiceScore(x)).map(v => `<option value="${esc(v.name)}">${esc(v.name)} (${voiceTag(v)})</option>`).join("");
  sel.value = S.voice && ds.some(v => v.name === S.voice) ? S.voice : "";
}
if ("speechSynthesis" in window) {
  speechSynthesis.onvoiceschanged = pickVoice;
  setTimeout(pickVoice, 500); setTimeout(pickVoice, 2000);
}
function utter(text, rate) {
  const u = new SpeechSynthesisUtterance(String(text).replace(/ \/ /g, ", ").replace(/_{2,}/g, "…"));
  u.lang = "da-DK"; u.rate = rate || S.rate;
  if (!daVoice) pickVoice();
  if (daVoice) u.voice = daVoice;
  else if (!warned) { warned = true; toast("Nessuna voce danese trovata: vedi Impostazioni › Voce danese nella scheda Oggi."); }
  return u;
}
function speak(text, rate) {
  if (!("speechSynthesis" in window)) { toast("Questo browser non ha la sintesi vocale."); return; }
  seqToken++; speechSynthesis.cancel(); speechSynthesis.speak(utter(text, rate));
}
function speakSeq(items, onLine, onDone) {
  if (!("speechSynthesis" in window)) { toast("Questo browser non ha la sintesi vocale."); return; }
  speechSynthesis.cancel();
  const my = ++seqToken; let i = 0;
  const step = () => {
    if (my !== seqToken) return;
    if (i >= items.length) { onDone && onDone(); return; }
    onLine && onLine(i);
    const u = utter(items[i]);
    u.onend = () => { i++; setTimeout(step, 250); };
    u.onerror = () => { onDone && onDone(); };
    speechSynthesis.speak(u);
  };
  step();
}
function stopSpeech() { seqToken++; if ("speechSynthesis" in window) speechSynthesis.cancel(); }
document.addEventListener("click", e => {
  const b = e.target.closest("[data-say]");
  if (b) { e.stopPropagation(); e.preventDefault(); speak(b.dataset.say); }
}, true);

/* =========================================================
   Mini-markup per la grammatica
   ========================================================= */
function inline(s) {
  return hlEsc(esc(s))
    .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
    .replace(/\*(.+?)\*/g, '<span class="da">$1</span>');
}
function renderMarkup(src) {
  const out = []; const ls = String(src).split("\n");
  let para = [], table = [], list = [];
  const flush = () => {
    if (para.length) { out.push(`<p>${inline(para.join(" "))}</p>`); para = []; }
    if (table.length) {
      const rows = table.map(r => r.replace(/^\||\|$/g, "").split("|").map(c => c.trim()));
      out.push(`<div class="tscroll"><table><thead><tr>${rows[0].map(c => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows.slice(1).map(r => `<tr>${r.map(c => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      table = [];
    }
    if (list.length) { out.push(`<ul>${list.map(i => `<li>${inline(i)}</li>`).join("")}</ul>`); list = []; }
  };
  ls.forEach(raw => {
    const l = raw.trim();
    if (!l) { flush(); return; }
    if (l.startsWith("|")) { if (para.length || list.length) { const t = table; table = []; flush(); table = t; } table.push(l); return; }
    if (table.length) flush();
    if (l.startsWith("- ")) { if (para.length) { const li = list; list = []; flush(); list = li; } list.push(l.slice(2)); return; }
    if (list.length) flush();
    if (l.startsWith("### ")) { flush(); out.push(`<h4>${inline(l.slice(4))}</h4>`); return; }
    if (l.startsWith("## ")) { flush(); out.push(`<h3>${inline(l.slice(3))}</h3>`); return; }
    if (l.startsWith("! ")) { flush(); out.push(`<div class="tip">${inline(l.slice(2))}</div>`); return; }
    if (l.startsWith("» ")) {
      flush();
      const body = l.slice(2); const k = body.indexOf(" = ");
      const da = k >= 0 ? body.slice(0, k) : body, it = k >= 0 ? body.slice(k + 3) : "";
      out.push(`<div class="ex">${sayBtn(da, "sm")}<span class="da">${hl(da)}</span>${it ? `<span class="it">${inline(it)}</span>` : ""}</div>`);
      return;
    }
    para.push(l);
  });
  flush();
  return out.join("");
}

/* =========================================================
   Motore delle domande
   ========================================================= */
function checkAnswer(user, answers, opts = {}) {
  const u = norm(user);
  if (!u) return { kind: "empty" };
  const core = s => norm(s).replace(/^(en|et|at) /, "");
  let near = null;
  for (const a of answers) {
    const na = norm(a);
    if (u === na) return { kind: "ok" };
    if (opts.article && core(user) === core(a) && core(a) !== na) {
      const art = na.split(" ")[0];
      if (u === core(a)) return { kind: "ok", note: `Ricorda l'articolo: <span class="da">${hl(na)}</span>.` };
      return { kind: "near", note: `Articolo sbagliato: si dice <span class="da">${hl(na)}</span> (${art === "en" ? "genere comune" : "genere neutro"}).` };
    }
    if (fold(u) === fold(na)) near = near || { kind: "near", note: "Quasi: attenzione alle lettere æ, ø, å." };
    else {
      const d = lev(u, na);
      const tol = na.length > 24 ? 3 : na.length > 10 ? 2 : na.length > 4 ? 1 : 0;
      if (d && d <= tol) near = near || { kind: "near", note: "Quasi: controlla l'ortografia." };
    }
  }
  return near || { kind: "ko" };
}

function tokensOf(sentence) {
  const toks = sentence.replace(/[.,!?;:"«»()]/g, " ").split(/\s+/).filter(Boolean);
  if (toks.length && !NAMES.has(toks[0])) toks[0] = toks[0][0].toLowerCase() + toks[0].slice(1);
  return toks;
}

// Converte un esercizio del corso in domanda per il motore
function exToQ(e, unit) {
  const ref = unit ? `${unit.level} · ${unit.title}` : "";
  if (e.k === "c") {
    const full = e.text.replace(/_{2,}/, e.ans[0]);
    return { kind: "type", label: "Completa la frase", prompt: hl(e.text).replace(/_{2,}/, '<span class="blank">&nbsp;</span>'), long: e.text.length > 40,
      hint: e.hint ? `(${esc(e.hint)})` : "", answers: e.ans, solution: e.ans[0], expl: e.expl, after: full, ref };
  }
  if (e.k === "m") {
    const filled = /_{2,}/.test(e.q) && /[a-zæøå]/i.test(e.right) ? e.q.replace(/_{2,}/, e.right) : null;
    return { kind: "mc", label: "Scegli la risposta giusta", prompt: hl(e.q).replace(/_{2,}/, '<span class="blank">&nbsp;</span>'), long: e.q.length > 40,
      options: shuffle([e.right, ...e.wrong]), answer: e.right, expl: e.expl, after: filled && isDanish(filled) ? filled : null, ref };
  }
  if (e.k === "o") {
    return { kind: "order", label: "Metti le parole in ordine", prompt: esc(e.it), long: true, tokens: tokensOf(e.text), answers: [e.text, ...e.alts], solution: e.text, expl: e.expl, after: e.text, ref };
  }
  if (e.k === "t") {
    return { kind: "trans", label: "Traduci in danese", prompt: esc(e.it), long: e.it.length > 30, answers: e.ans, solution: e.ans[0], expl: e.expl, after: e.ans[0], ref };
  }
}
const isDanish = s => /[æøå]|\b(jeg|du|han|hun|vi|de|er|har|ikke|det|den|en|et|på|til|med|som|at|og)\b/i.test(s);

/*
  runQuestions(el, qs, opts)
  opts: { title, onEnd(score, total, wrong), endHtml(score,total), again(), back: {label, fn} }
*/
function runQuestions(el, qs, opts = {}) {
  let i = 0, score = 0; const wrong = [];
  const total = qs.length;
  stopSpeech();

  function header() {
    return `<div class="toolbar"><span class="progress">${esc(opts.title || "")} ${opts.title ? "· " : ""}${i + 1} / ${total}</span><span class="progress">Punti ${score}</span></div>
      <div class="pbar"><b style="width:${i / total * 100}%"></b></div>`;
  }
  function render() {
    if (i >= total) return end();
    const q = qs[i]; q.answered = false;
    let body = "";
    if (q.kind === "mc") {
      body = `<div class="opts">${q.options.map((o, k) => `<button class="btn opt" type="button" data-k="${k}">${hl(o)}</button>`).join("")}</div>`;
    } else if (q.kind === "order") {
      const toks = scramble(q.tokens);
      q._pool = toks;
      body = `<div class="order-line" id="q-line" aria-label="La tua frase"></div>
        <div class="order-pool" id="q-pool">${toks.map((t, k) => `<button class="tok" type="button" data-k="${k}">${hl(t)}</button>`).join("")}</div>
        <div class="cta-row"><button class="btn" type="button" id="q-clear">Ricomincia</button><button class="btn primary" type="button" id="q-check">Verifica</button></div>`;
    } else {
      body = `<form class="typebox" id="q-form" autocomplete="off">
        <input type="text" id="q-in" autocapitalize="off" autocomplete="off" spellcheck="false" aria-label="Risposta" placeholder="${q.kind === "dict" ? "Scrivi quello che senti…" : "Scrivi in danese…"}">
        <div class="keys">${["æ", "ø", "å"].map(k => `<button type="button" class="btn" data-key="${k}">${k}</button>`).join("")}
          <span class="spacer"></span>
          <button type="button" class="btn ghost" id="q-skip">Non lo so</button>
          <button class="btn primary" type="submit">Verifica</button></div>
      </form>`;
    }
    el.innerHTML = `<div class="stack">${header()}
      <div class="panel qpanel">
        <div class="q-label label">${esc(q.label)}</div>
        ${q.kind === "dict" ? `<div class="cta-row" style="justify-content:center"><button class="btn primary" type="button" id="q-play">${SPEAKER} Ascolta</button><button class="btn" type="button" id="q-slow">Più lento</button></div>`
          : `<div class="q-prompt ${q.long ? "long" : ""}">${q.prompt}${q.sayPrompt ? " " + sayBtn(q.sayPrompt) : ""}</div>`}
        ${q.hint ? `<div class="q-hint">${q.hint}</div>` : ""}
        ${body}
        <div id="q-fb" hidden></div>
      </div>
      ${q.ref ? `<div class="hint" style="text-align:center">${esc(q.ref)}</div>` : ""}
    </div>`;
    wire(q);
  }
  function scramble(toks) {
    if (toks.length < 2) return toks.slice();
    let s; let tries = 0;
    do { s = shuffle(toks); tries++; } while (s.join(" ") === toks.join(" ") && tries < 10);
    return s;
  }
  function wire(q) {
    if (q.kind === "mc") {
      $$(".opt", el).forEach(b => b.onclick = () => {
        if (q.answered) return;
        const chosen = q.options[+b.dataset.k];
        const ok = chosen === q.answer;
        $$(".opt", el).forEach(x => { x.disabled = true; if (q.options[+x.dataset.k] === q.answer) x.classList.add("right"); });
        if (!ok) b.classList.add("wrong");
        finish(q, ok ? "ok" : "ko", "", chosen);
      });
    } else if (q.kind === "order") {
      const line = $("#q-line", el), pool = $("#q-pool", el); const picked = [];
      const redraw = () => {
        line.innerHTML = picked.map((k, j) => `<button class="tok" type="button" data-j="${j}">${hl(q._pool[k])}</button>`).join("");
        $$(".tok", pool).forEach(b => b.classList.toggle("used", picked.includes(+b.dataset.k)));
      };
      pool.onclick = ev => { const b = ev.target.closest(".tok"); if (!b || q.answered || picked.includes(+b.dataset.k)) return; picked.push(+b.dataset.k); redraw(); };
      line.onclick = ev => { const b = ev.target.closest(".tok"); if (!b || q.answered) return; picked.splice(+b.dataset.j, 1); redraw(); };
      $("#q-clear", el).onclick = () => { if (q.answered) return; picked.length = 0; redraw(); };
      $("#q-check", el).onclick = () => {
        if (q.answered) return;
        if (picked.length < q._pool.length) { toast("Usa tutte le parole."); return; }
        const user = picked.map(k => q._pool[k]).join(" ");
        const ok = q.answers.some(a => norm(a) === norm(user));
        finish(q, ok ? "ok" : "ko", "", user);
      };
    } else {
      const inp = $("#q-in", el); setTimeout(() => inp.focus({ preventScroll: true }), 30);
      $$("[data-key]", el).forEach(b => b.onclick = () => {
        const s = inp.selectionStart ?? inp.value.length, e = inp.selectionEnd ?? s;
        inp.value = inp.value.slice(0, s) + b.dataset.key + inp.value.slice(e);
        inp.focus(); inp.setSelectionRange(s + 1, s + 1);
      });
      if (q.kind === "dict") {
        $("#q-play", el).onclick = () => speak(q.solution);
        $("#q-slow", el).onclick = () => speak(q.solution, 0.6);
        setTimeout(() => speak(q.solution), 200);
      }
      $("#q-skip", el).onclick = () => { if (!q.answered) { inp.readOnly = true; finish(q, "ko", "", ""); } };
      $("#q-form", el).onsubmit = ev => {
        ev.preventDefault();
        if (q.answered) { next(); return; }
        const r = checkAnswer(inp.value, q.answers, { article: q.article });
        if (r.kind === "empty") { toast("Scrivi una risposta oppure premi «Non lo so»."); return; }
        inp.readOnly = true;
        finish(q, r.kind, r.note || "", inp.value);
      };
    }
  }
  function finish(q, kind, note, user) {
    q.answered = true;
    const ok = kind === "ok";
    if (ok) score++; else wrong.push(Object.assign(q, { user }));
    q.onResult && q.onResult(ok);
    logActivity(); save();
    if (S.autoplay && q.after) speak(q.after);
    const fb = $("#q-fb", el); fb.hidden = false; fb.className = "feedback " + kind;
    const head = ok ? "<b>Rigtigt!</b> Giusto." : kind === "near" ? "<b>Næsten!</b> Quasi." : "<b>Forkert.</b> Non è giusto.";
    const sol = q.kind === "mc" ? "" : `<div>Soluzione: <span class="da">${hl(q.solution)}</span>${q.answers.length > 1 && q.kind !== "order" ? ` <span class="muted small">(accettato anche: ${q.answers.slice(1).map(hl).join(" · ")})</span>` : ""}</div>`;
    const canOverride = !ok && (q.kind === "trans" || q.kind === "dict" || kind === "near") && user;
    fb.innerHTML = `<div>${head}${note ? " " + note : ""}</div>${ok && q.kind !== "trans" ? "" : sol}
      ${q.expl ? `<div class="expl">${inline(q.expl)}</div>` : ""}
      <div class="cta-row">
        <button class="btn primary sm" type="button" id="q-next">${i + 1 < total ? "Avanti" : "Vedi il risultato"}</button>
        ${q.after ? sayBtn(q.after, "sm") : ""}
        ${canOverride ? `<button class="btn ghost sm" type="button" id="q-ovr">La mia risposta era giusta</button>` : ""}
      </div>`;
    $("#q-next", el).onclick = next;
    const ovr = $("#q-ovr", el);
    if (ovr) ovr.onclick = () => {
      score++; wrong.pop(); q.onResult && q.onResult(true); save();
      fb.className = "feedback ok"; ovr.remove(); $("#q-next", el).focus();
      const hd = fb.firstElementChild; hd.innerHTML = "<b>Segnata come giusta.</b> Confrontala comunque con la soluzione.";
      if (q.kind === "trans" || q.kind === "dict") q.accept = (q.accept || []).concat(user);
    };
    if (q.kind === "mc" || q.kind === "order") $("#q-next", el).focus({ preventScroll: true });
  }
  function next() { i++; render(); }
  function end() {
    const pct = total ? score / total : 0;
    opts.onEnd && opts.onEnd(score, total, wrong);
    const verdict = pct === 1 ? ["Perfekt!", "Perfetto!"] : pct >= .8 ? ["Flot klaret!", "Ben fatto!"] : pct >= .5 ? ["Godt på vej.", "Sei sulla buona strada."] : ["Øvelse gør mester.", "La pratica rende perfetti."];
    el.innerHTML = `<div class="panel stack">
      <div class="label">${esc(opts.title || "Risultato")}</div>
      <div class="score">${score}<span class="muted" style="font-size:1.4rem">/${total}</span></div>
      <div><h2 class="da">${hl(verdict[0])}</h2><p class="muted">${verdict[1]}</p></div>
      ${opts.endHtml ? opts.endHtml(score, total) : ""}
      ${wrong.length ? `<div><div class="label" style="margin-bottom:8px">Da rivedere</div><ul class="mistakes">${wrong.map(q => `
        <li><span class="small muted">${q.kind === "dict" ? "Dettato" : q.prompt}</span>
        <span>${q.kind === "mc" ? `<span class="da">${hl(q.answer)}</span>` : `<span class="da">${hl(q.solution)}</span>`}${q.user ? ` <span class="muted small">— hai scritto: ${hl(q.user)}</span>` : ""}</span></li>`).join("")}</ul></div>` : ""}
      <div class="cta-row">
        ${wrong.length ? `<button class="btn primary" type="button" id="r-wrong">Ripeti gli errori</button>` : ""}
        ${opts.again ? `<button class="btn ${wrong.length ? "" : "primary"}" type="button" id="r-again">${esc(opts.againLabel || "Ricomincia")}</button>` : ""}
        ${opts.back ? `<button class="btn" type="button" id="r-back">${esc(opts.back.label)}</button>` : ""}
      </div></div>`;
    const rw = $("#r-wrong", el);
    if (rw) rw.onclick = () => runQuestions(el, wrong.map(q => Object.assign({}, q, { options: q.options ? shuffle(q.options) : q.options })), { title: "Ripasso errori", back: opts.back, again: null });
    const ra = $("#r-again", el); if (ra) ra.onclick = opts.again;
    const rb = $("#r-back", el); if (rb) rb.onclick = opts.back.fn;
    el.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  render();
}

/* =========================================================
   Generatori di esercizi automatici
   ========================================================= */
const penalizeOn = id => ok => { if (!ok) penalize(id); };

function vocabQ(w) {
  const toIt = Math.random() < .45;
  if (toIt) {
    const others = shuffle(WORDS.filter(x => x.id !== w.id && x.t === w.t && x.it !== w.it)).slice(0, 3).map(x => x.it);
    return { kind: "mc", label: "Che cosa significa?", prompt: `<span class="da">${hl(w.da)}</span>`, sayPrompt: w.da, options: shuffle([w.it, ...others]), answer: w.it, after: w.da, onResult: penalizeOn(w.id) };
  }
  const ans = [w.da];
  if (w.t === "n" && w.pl === "-") ans.push(`${w.art} ${w.sg}`);
  if (w.t === "v") ans.push(w.inf);
  return { kind: "type", label: "Come si dice in danese?", prompt: `<b>${esc(w.it)}</b>${TYPE_LABEL[w.t] ? ` <span class="tag">${TYPE_LABEL[w.t]}</span>` : ""}`,
    answers: ans, solution: w.da, article: w.t === "n", after: w.da, onResult: penalizeOn(w.id) };
}
function nounQ(w) {
  const r = Math.random();
  if (r < .25) return { kind: "mc", label: "Genere del sostantivo", prompt: `<span class="da">${hl(w.sg)}</span> <span class="muted small">(${esc(w.it)})</span>`, options: ["en", "et"], answer: w.art, after: `${w.art} ${w.sg}`, expl: `*${w.art} ${w.sg}* → *${w.def}*`, onResult: penalizeOn(w.id) };
  const forms = [["def", "forma determinativa singolare", `il/la ${w.it}`], ["pl", "plurale indeterminativo", ""], ["pld", "plurale determinativo", ""]];
  const [k, lab] = pick(forms);
  return { kind: "type", label: lab, prompt: `<span class="da">${hl(w.da)}</span> → ?`, hint: esc(w.it), answers: [w[k]], solution: w[k], after: w[k], expl: `*${w.da}* · *${w.def}* · *${w.pl}* · *${w.pld}*`, onResult: penalizeOn(w.id) };
}
function verbQ(w) {
  const opts = [["pres", "presente (nutid)", w.pres], ["past", "passato (datid)", w.past], ["perf", "passato prossimo (førnutid)", `${w.aux} ${w.pp}`]];
  const [k, lab, sol] = pick(opts);
  const answers = k === "perf" ? (w.aux === "er" ? [`er ${w.pp}`, `har ${w.pp}`] : [`har ${w.pp}`]) : [sol];
  const subj = pick(["jeg", "du", "han", "hun", "vi", "de"]);
  return { kind: "type", label: lab, prompt: `<span class="da">${hl(w.da)}</span>`, hint: `${esc(w.it)} · <span class="da">${subj} ___</span>`,
    answers, solution: sol, after: `${subj} ${sol}`, expl: `*at ${w.inf}* · *${w.pres}* · *${w.past}* · *${w.aux} ${w.pp}*`, onResult: penalizeOn(w.id) };
}
function adjQ(w, nouns) {
  const cands = nouns.filter(n => n.pl !== "-");
  const n = pick(cands.length ? cands : WORDS.filter(x => x.t === "n" && x.pl !== "-"));
  const defSg = w.base === "lille" ? "lille" : w.pl;
  const variants = [
    [`${n.art} ___ ${n.sg}`, n.art === "en" ? w.base : w.neu, "indeterminativo singolare"],
    [`${n.art} ___ ${n.sg}`, n.art === "en" ? w.base : w.neu, "indeterminativo singolare"],
    [`___ ${n.pl}`, w.pl, "plurale"],
    [`${n.art === "en" ? "den" : "det"} ___ ${n.sg}`, defSg, "determinativo"],
  ];
  if (w.comp !== "-") variants.push([`${n.art === "en" ? "Den" : "Det"} er ___ end ${n.art === "en" ? "den" : "det"} anden.`, w.comp, "comparativo"]);
  const [frame, sol, lab] = pick(variants);
  return { kind: "type", label: `Accordo dell'aggettivo · ${lab}`, prompt: hl(frame).replace("___", '<span class="blank">&nbsp;</span>'), hint: `<span class="da">${hl(w.base)}</span> = ${esc(w.it)} · <span class="da">${hl(n.da)}</span> = ${esc(n.it)}`,
    answers: [sol], solution: sol, after: frame.replace("___", sol), expl: `*${w.base}* · *${w.neu}* · *${w.pl}*${w.comp !== "-" ? ` · *${w.comp}* · *${w.sup}*` : ""}`, onResult: penalizeOn(w.id) };
}
function dictQ(line) {
  return { kind: "dict", label: "Dettato · scrivi la frase che senti", answers: [line.da], solution: line.da, expl: line.it ? `Traduzione: ${line.it}` : "", after: null };
}
const dictLines = units => units.flatMap(u => u.textLines.filter(l => { const n = l.da.split(/\s+/).length; return n >= 3 && n <= 12; }).map(l => Object.assign({ unit: u }, l)));

/* =========================================================
   Navigazione: schede, barra laterale, barra in basso, cronologia, fogli e avvisi
   ========================================================= */
const TABS = ["oggi", "percorso", "ripasso", "allenamento", "grammatica", "lessico", "impostazioni"];
const HIDDEN_TABS = new Set(["impostazioni"]);   // viste senza voce nel menu: addTab(..., { hidden: true })
const TAB_LABEL = { oggi: "Oggi", percorso: "Percorso", ripasso: "Ripasso", allenamento: "Allenamento", grammatica: "Grammatica", lessico: "Lessico", impostazioni: "Impostazioni", tutor: "Conversa" };
const RENDER = {};
// Icone dello sprite in index.html: icon("mic"), icon("chevron.right", "chev")
const icon = (name, cls = "") => `<svg class="ico${cls ? " " + cls : ""}" aria-hidden="true"><use href="#i-${esc(name)}"/></svg>`;
const hasIcon = n => !!document.getElementById("i-" + n);
const tabIcon = id => icon(hasIcon(id) ? id : "star");
const CHEV = icon("chevron.right", "chev");
const PRIMARY_TABS = ["oggi", "percorso", "ripasso", "tutor"];
const SIDE_SECTIONS = [["Studio", ["oggi", "percorso", "ripasso"]], ["Pratica", ["tutor", "diario", "allenamento", "laboratorio", "pronuncia"]], ["Consultazione", ["grammatica", "lessico"]]];
const navTabs = () => TABS.filter(t => !HIDDEN_TABS.has(t));
const restTabs = () => navTabs().filter(t => !PRIMARY_TABS.includes(t));
function buildNav() {
  const NAV = navTabs();
  const known = new Set(SIDE_SECTIONS.flatMap(s => s[1]));
  const item = t => `<button type="button" class="nav-item" data-tab="${t}">${tabIcon(t)}<span>${esc(TAB_LABEL[t] || t)}</span></button>`;
  $("#side-nav").innerHTML = SIDE_SECTIONS.map(([name, ids]) => {
    const list = ids.filter(t => NAV.includes(t)).concat(name === "Pratica" ? NAV.filter(t => !known.has(t)) : []);
    return list.length ? `<div class="side-sec" role="presentation">${name}</div>${list.map(item).join("")}` : "";
  }).join("");
  const prim = PRIMARY_TABS.filter(t => NAV.includes(t));
  $("#tabbar").innerHTML = prim.map(t => `<button type="button" class="tb-item" data-tab="${t}">${tabIcon(t)}<span>${esc(TAB_LABEL[t] || t)}</span></button>`).join("")
    + (restTabs().length ? `<button type="button" class="tb-item" id="more-btn" aria-haspopup="dialog" aria-expanded="false">${icon("altro")}<span>Altro</span></button>` : "");
  markNav((S.route && S.route.tab) || "oggi");
}
function markNav(tab) {
  $$("[data-tab]").forEach(b => { if (b.dataset.tab === tab) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
  const m = $("#more-btn");
  if (m) { if (!PRIMARY_TABS.includes(tab)) m.setAttribute("aria-current", "page"); else m.removeAttribute("aria-current"); }
}

/* Foglio modale (maniglia, trascinamento verso il basso, Esc, focus intrappolato).
   openSheet({ title, html, render(body), onClose }) → chiude con closeSheet() */
let sheetOpts = null, sheetFocus = null;
function openSheet(opts) {
  const s = $("#sheet"), panel = $(".sheet-panel", s), body = $("#sheet-body");
  if (!s.hidden) closeSheet(true);
  sheetOpts = opts || {}; sheetFocus = document.activeElement;
  $("#sheet-title").textContent = sheetOpts.title || "";
  body.innerHTML = sheetOpts.html || "";
  panel.classList.remove("closing", "dragging"); panel.style.transform = "";
  s.hidden = false;
  if (sheetOpts.render) sheetOpts.render(body);
  const m = $("#more-btn"); if (m && sheetOpts.more) m.setAttribute("aria-expanded", "true");
  const first = $(".on, button, a, input, select, textarea", body) || panel;
  setTimeout(() => { try { first.focus({ preventScroll: true }); } catch (e) {} }, 30);
  return body;
}
function closeSheet(instant) {
  const s = $("#sheet"); if (!s || s.hidden) return;
  const panel = $(".sheet-panel", s), o = sheetOpts; sheetOpts = null;
  const m = $("#more-btn"); if (m) m.setAttribute("aria-expanded", "false");
  const done = () => { s.hidden = true; panel.classList.remove("closing"); panel.style.transform = ""; };
  if (instant === true || matchMedia("(prefers-reduced-motion: reduce)").matches) done();
  else { panel.classList.add("closing"); setTimeout(done, 260); }
  if (sheetFocus && sheetFocus.isConnected && instant !== true) { try { sheetFocus.focus({ preventScroll: true }); } catch (e) {} }
  if (o && o.onClose) o.onClose();
}
function openMore() {
  const cur = (S.route && S.route.tab) || "oggi";
  openSheet({ title: "Altro", more: true, html: `<div class="sheet-list">${restTabs().map(t => `<button type="button" class="sheet-item${t === cur ? " on" : ""}" data-tab="${t}"><span class="tile">${tabIcon(t)}</span><span>${esc(TAB_LABEL[t] || t)}</span>${CHEV}</button>`).join("")}</div>
    <div class="sheet-list"><button type="button" class="sheet-item" data-tab="impostazioni"><span class="tile c-gray">${icon("gear")}</span><span>Impostazioni</span>${CHEV}</button></div>` });
}
(function sheetDrag() {
  const panel = $("#sheet .sheet-panel"); let y0 = null, dy = 0;
  panel.addEventListener("pointerdown", e => {
    if (!e.target.closest(".sheet-grip, .sheet-head") || e.target.closest("button")) return;
    y0 = e.clientY; dy = 0; panel.classList.add("dragging"); try { panel.setPointerCapture(e.pointerId); } catch (x) {}
  });
  panel.addEventListener("pointermove", e => { if (y0 == null) return; dy = Math.max(0, e.clientY - y0); panel.style.transform = `translateY(${dy}px)`; });
  const end = () => { if (y0 == null) return; y0 = null; panel.classList.remove("dragging"); if (dy > 90) closeSheet(); else panel.style.transform = ""; };
  panel.addEventListener("pointerup", end); panel.addEventListener("pointercancel", end);
})();
// Avviso di conferma in stile sistema: confirmDialog({ title, text, ok, cancel, danger }) → Promise<boolean>
function confirmDialog({ title, text = "", ok = "OK", cancel = "Annulla", danger = false, okId = "" }) {
  return new Promise(res => {
    const a = $("#alert"), bOk = $("#alert-ok"), bNo = $("#alert-cancel"), prev = document.activeElement;
    $("#alert-title").textContent = title; $("#alert-text").textContent = text; $("#alert-text").hidden = !text;
    bOk.textContent = ok; bNo.textContent = cancel; bOk.className = danger ? "bad" : ""; if (okId) bOk.dataset.id = okId; else delete bOk.dataset.id;
    a.hidden = false; try { bNo.focus(); } catch (e) {}
    const onKey = e => {
      if (e.key === "Escape") { e.stopPropagation(); e.preventDefault(); close(false); }
      if (e.key === "Tab") { e.preventDefault(); (document.activeElement === bOk ? bNo : bOk).focus(); }
    };
    const close = v => { a.hidden = true; document.removeEventListener("keydown", onKey, true); if (prev && prev.isConnected) { try { prev.focus(); } catch (e) {} } res(v); };
    bOk.onclick = () => close(true); bNo.onclick = () => close(false); $(".alert-back", a).onclick = () => close(false);
    document.addEventListener("keydown", onKey, true);
  });
}
document.addEventListener("keydown", e => {
  const s = $("#sheet"); if (!s || s.hidden || !$("#alert").hidden) return;
  if (e.key === "Escape") { closeSheet(); return; }
  if (e.key !== "Tab") return;
  const f = $$("button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])", $(".sheet-panel", s)).filter(x => !x.disabled && x.offsetParent !== null);
  if (!f.length) return;
  const i = f.indexOf(document.activeElement);
  if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
  else if (!e.shiftKey && (i === f.length - 1 || i < 0)) { e.preventDefault(); f[0].focus(); }
});

/* Titolo grande, barra di navigazione e pulsante indietro */
let navBackFn = null;
function setNav({ title, kicker = "", back = null } = {}) {
  $("#page-title").innerHTML = hl(title || ""); $("#nav-title").textContent = title || ""; $("#page-kicker").textContent = kicker;
  const b = $("#nav-back"); navBackFn = back ? back.fn : null; b.hidden = !back;
  if (back) { $("#nav-back-label").textContent = back.label || "Indietro"; b.setAttribute("aria-label", "Indietro: " + (back.label || "")); }
  try { document.title = (title ? title + " · " : "") + "Dansk hver dag"; } catch (e) {}
}
$("#nav-back").onclick = () => { if (navBackFn) navBackFn(); };
(function navbarScroll() {
  const bar = $("#navbar"), head = $("#page-head"); let tick = false;
  const upd = () => { tick = false; bar.classList.toggle("scrolled", window.scrollY > Math.max(8, head.offsetHeight - 14)); };
  window.addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();
function refreshShell() {
  const lv = currentLevel();
  const nl = WORDS.filter(w => !w.custom && learned(w.id)).length, tot = WORDS.filter(w => !w.custom).length || 1;
  const st = streakNow();
  $$(".shell-lvl").forEach(e => { e.textContent = lv; e.className = "lvl shell-lvl lvl-" + lv; });
  $("#side-streak").textContent = st === 1 ? "1 giorno di fila" : st + " giorni di fila";
  $("#side-words").textContent = `${nl} di ${tot} parole imparate`;
  $("#side-bar").style.width = Math.min(100, nl / tot * 100) + "%";
}

/* Cronologia: ogni cambio di schermata entra nella cronologia del browser, così il gesto «indietro»
   di iOS e il tasto indietro tornano alla schermata precedente dentro l'app. */
let navDepth = 0, histOK = true;
const scrollPos = {};
try { history.scrollRestoration = "manual"; } catch (e) {}
function writeHist(route, replace) {
  if (!histOK) return;
  try { history[replace ? "replaceState" : "pushState"]({ dansk: route, d: navDepth }, ""); } catch (e) { histOK = false; }
}
const syncHist = () => writeHist(S.route, true);
function goBack(fallback) { if (histOK && navDepth > 0) history.back(); else fallback(); }
window.addEventListener("popstate", e => {
  const st = e.state && e.state.dansk; if (!st) return;
  if (!$("#alert").hidden) $("#alert-cancel").click();
  closeSheet(true);
  const d = e.state.d || 0, back = d < navDepth; scrollPos[navDepth] = window.scrollY; navDepth = d;
  show(st.tab, st, back ? "back" : "fwd", scrollPos[d] || 0);
});
function go(tab, extra = {}, opts = {}) {
  if (!TABS.includes(tab)) tab = "oggi";
  const route = Object.assign({}, extra, { tab });
  const same = S.route && S.route.tab === tab && (S.route.unit || null) === (route.unit || null) && (S.route.scope || null) === (route.scope || null);
  if (opts.replace || same) writeHist(route, true);
  else { scrollPos[navDepth] = window.scrollY; navDepth++; writeHist(route, false); }
  show(tab, route, opts.replace || same ? "" : "fwd", 0);
}
function show(tab, route, dir, scrollTo) {
  if (!TABS.includes(tab)) tab = "oggi";
  stopSpeech();
  S.route = route; save({ silent: true });
  TABS.forEach(t => { const v = $("#v-" + t); if (v) v.hidden = t !== tab; });
  markNav(tab);
  closeSheet(true);
  $("#nav-gear").hidden = tab === "impostazioni";
  setNav({ title: TAB_LABEL[tab] || tab, back: tab === "impostazioni" ? { label: "Indietro", fn: () => goBack(() => go("oggi")) } : null });
  RENDER[tab]();
  refreshShell();
  const v = $("#v-" + tab);
  if (dir) { v.classList.remove("enter", "back"); void v.offsetWidth; v.classList.add("enter"); if (dir === "back") v.classList.add("back"); }
  window.scrollTo(0, scrollTo || 0);
  $("#navbar").classList.toggle("scrolled", (scrollTo || 0) > 30);
}
// Aggiunge una scheda (usato dai moduli in js/ext/*.js)
function addTab(id, label, render, after, opts) {
  if (TABS.includes(id)) return;
  if (opts && opts.hidden) HIDDEN_TABS.add(id);
  const sec = document.createElement("section");
  sec.className = "view"; sec.id = "v-" + id; sec.hidden = true;
  $("main").append(sec);
  const i = after ? TABS.indexOf(after) : -1;
  if (i >= 0) TABS.splice(i + 1, 0, id); else TABS.push(id);
  if (!(id in TAB_LABEL) || id !== "tutor") TAB_LABEL[id] = id === "tutor" ? "Conversa" : label;
  RENDER[id] = () => render(sec);
  buildNav();
}
document.addEventListener("click", e => {
  if (e.target.closest("#more-btn")) { $("#sheet").hidden ? openMore() : closeSheet(); return; }
  const t = e.target.closest("[data-tab]");
  if (t) { go(t.dataset.tab); return; }
  if (e.target.closest("[data-sheet-close]")) { closeSheet(); return; }
  const u = e.target.closest("[data-unit]");
  if (u) { go("percorso", { unit: u.dataset.unit, sub: u.dataset.sub || null }); return; }
  const g = e.target.closest("[data-goto]");
  if (g) go(g.dataset.goto);
});
buildNav();

/* =========================================================
   Oggi: piano giornaliero con tre anelli
   ========================================================= */
function dueIds() { const now = Date.now(); return Object.keys(S.cards).filter(id => WMAP.has(id) && S.cards[id].due <= now); }
const revToday = () => (S.revDay && S.revDay.date === dkey() ? S.revDay.n : 0);
const talkToday = () => (S.talkDay && S.talkDay.date === dkey() ? S.talkDay.sec || 0 : 0);
function nextStep(nu) {
  const p = unitProgress(nu);
  return !p.started ? ["Inizia dalle parole", "parole"] : p.w < TH.words ? ["Studia le parole", "parole"] : p.t < TH.text ? ["Leggi e ascolta il testo", "testo"] : ["Fai gli esercizi", "esercizi"];
}
function renderToday() {
  const now = new Date(), h = now.getHours();
  const [gda, git] = h < 10 ? ["Godmorgen", "buongiorno"] : h < 18 ? ["Goddag", "buon pomeriggio"] : ["Godaften", "buonasera"];
  $("#greet").innerHTML = hl(gda) + "."; $("#greet-it").textContent = git[0].toUpperCase() + git.slice(1) + ".";
  $("#page-kicker").textContent = now.toLocaleDateString("it-IT", { weekday: "long", day: "numeric", month: "long" });

  const due = dueIds().length, revDone = revToday(), revTot = revDone + due;
  const goalA = S.goal.answers, ans = S.hist[dkey()] || 0;
  const goalT = (S.goal.talkMin || 0) * 60, talk = talkToday(), hasTalk = TABS.includes("tutor") && goalT > 0;
  const pRev = revTot ? revDone / revTot : (Object.keys(S.cards).length ? 1 : 0), pNew = Math.min(1, ans / goalA), pTalk = hasTalk ? Math.min(1, talk / goalT) : 0;
  const ring = (r, p, cls) => { const C = 2 * Math.PI * r; return `<circle class="bg ${cls}" cx="66" cy="66" r="${r}"/><circle class="fg ${cls}" cx="66" cy="66" r="${r}" stroke-dasharray="${C.toFixed(1)}" stroke-dashoffset="${(C * (1 - Math.min(1, p))).toFixed(1)}" transform="rotate(-90 66 66)"${p <= 0 ? ' opacity="0"' : ""}/>`; };
  const tm = Math.floor(talk / 60);
  $("#plan").innerHTML = `<svg class="rings" viewBox="0 0 132 132" role="img" aria-label="Piano di oggi: ripasso ${Math.round(pRev * 100)}%, risposte ${Math.round(pNew * 100)}%${hasTalk ? `, conversazione ${Math.round(pTalk * 100)}%` : ""}">${ring(58, pRev, "r-rev")}${ring(45, pNew, "r-new")}${hasTalk ? ring(32, pTalk, "r-talk") : ""}</svg>
    <div class="plan-legend">
      <div><span class="k k-rev">Ripasso</span><span class="v v-rev">${revDone}<small>/${revTot} schede</small></span></div>
      <div><span class="k k-new">Studio</span><span class="v v-new">${ans}<small>/${goalA} risposte</small></span></div>
      ${hasTalk ? `<div><span class="k k-talk">Conversazione</span><span class="v v-talk">${tm}<small>/${S.goal.talkMin} min</small></span></div>` : ""}
    </div>`;

  const nu = nextUnit(), rows = [];
  rows.push(`<button type="button" class="row has-tile" data-goto="ripasso"><span class="tile c-red">${icon("ripasso")}</span><span class="row-main"><b>${due ? `Ripassa ${due} ${due === 1 ? "scheda" : "schede"}` : "Ripasso"}</b><span>${due ? `Circa ${Math.max(1, Math.round(due / 6))} min` : revDone ? "Fatto per oggi" : "Nessuna scheda in scadenza"}</span></span>${CHEV}</button>`);
  if (nu) { const st = nextStep(nu); rows.push(`<button type="button" class="row has-tile" data-unit="${nu.id}" data-sub="${st[1]}"><span class="tile c-green">${icon("percorso")}</span><span class="row-main"><b>${unitProgress(nu).started ? "Continua" : "Inizia"}: ${hl(nu.title)}</b><span>${nu.level} · unità ${nu.n} · ${st[0].toLowerCase()}</span></span>${CHEV}</button>`); }
  else rows.push(`<div class="row has-tile"><span class="tile c-green">${icon("checkmark")}</span><span class="row-main"><b>Hai completato tutte le unità</b><span>Continua con ripasso e conversazione</span></span></div>`);
  if (TABS.includes("tutor")) rows.push(`<button type="button" class="row has-tile" data-goto="tutor"><span class="tile c-teal">${icon("mic")}</span><span class="row-main"><b>${S.goal.talkMin ? `${S.goal.talkMin} minuti di conversazione` : "Conversazione"}</b><span>${tm ? `Oggi: ${tm} min` : "Parla o scrivi con un interlocutore"}</span></span>${CHEV}</button>`);
  $("#plan-actions").innerHTML = rows.join("");

  const pc = $("#placement-card"), needTest = TABS.includes("livello") && !S.placement && !startedUnits().length;
  pc.hidden = !needTest;
  pc.innerHTML = needTest ? `<div class="panel promo">${icon("livello", "lg")}<div><h3>Trova il tuo livello</h3><p>Un test di 5–10 minuti che si adatta alle tue risposte e ti dice da dove partire.</p><button class="btn sm" type="button" data-goto="livello">Fai il test</button></div></div>` : "";

  const doneUnits = UNITS.filter(u => unitProgress(u).done).length, nLearned = WORDS.filter(w => learned(w.id)).length;
  $("#stats").innerHTML = [
    ["Da ripassare", due, "", "ripasso", "c-red"],
    ["Parole imparate", nLearned, "/" + WORDS.filter(w => !w.custom).length, "check", "c-green"],
    ["Unità completate", doneUnits, "/" + UNITS.length, "flag", "c-tint"],
    ["Giorni di fila", streakNow(), "", "flame", "c-orange"],
  ].map(([l, n, s, ic, c]) => `<div class="stat"><span class="card-kicker ${c}">${icon(ic)}${l}</span><div class="n">${n}<small>${s}</small></div></div>`).join("");

  // Parola del giorno: tra le parole delle unità iniziate, altrimenti della prossima unità
  const pool = (startedUnits().length ? startedUnits() : [nu || UNITS[0]]).flatMap(u => u.wordIds).map(id => WMAP.get(id)).filter(Boolean);
  if (pool.length) {
    const doy = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / DAY);
    const w = pool[(doy * 37) % pool.length];
    $("#wotd").innerHTML = `<div class="card-head" style="margin-bottom:0"><span class="card-kicker c-indigo">${icon("star")}Dagens ord</span><span class="t-footnote muted">parola del giorno</span></div>
      <div class="word"><span class="da">${hl(w.da)}</span>${sayBtn(w.da)}</div>
      <div>${esc(w.it)}${formsOf(w) ? ` <span class="hint">· ${hl(formsOf(w))}</span>` : ""}</div>`;
  }

  const days = [];
  for (let i = 13; i >= 0; i--) days.push(S.hist[dkey(new Date(Date.now() - i * DAY))] || 0);
  const max = Math.max(1, ...days), sum = days.reduce((a, b) => a + b, 0);
  $("#strip").innerHTML = days.map((n, i) => `<i class="${n ? "" : "zero"}${i === 13 && n ? " today" : ""}" style="height:${n ? Math.max(8, n / max * 100) : 4}%" title="${n} risposte"></i>`).join("");
  $("#strip-avg").textContent = sum ? `media ${Math.round(sum / 14)} al giorno` : "ultimi 14 giorni";
  $("#strip-from").textContent = new Date(Date.now() - 13 * DAY).toLocaleDateString("it-IT", { day: "numeric", month: "short" });

  $("#levels").innerHTML = LEVELS.map(L => {
    const us = UNITS.filter(u => u.level === L); if (!us.length) return "";
    const d = us.filter(u => unitProgress(u).done).length;
    const st = us.filter(u => !unitProgress(u).done && unitProgress(u).started).length;
    const ex = S.exams[L];
    return `<div class="lvl-row lv-${L}"><span class="code">${L}</span>
      <span class="bar"><b style="width:${d / us.length * 100}%"></b><b class="seen" style="width:${st / us.length * 100}%"></b></span>
      <span class="num">${d}/${us.length}${ex >= .8 ? " · esame ✓" : ""}</span></div>`;
  }).join("");
  refreshShell();
}

/* =========================================================
   Impostazioni
   ========================================================= */
// Trasforma un <select data-seg> in un controllo segmentato; il select resta (nascosto) come fonte del valore
function segFromSelect(sel) {
  const lab = sel.id ? $(`label[for="${sel.id}"]`) : null;
  const seg = document.createElement("div");
  seg.className = "seg"; seg.setAttribute("role", "group"); if (lab) seg.setAttribute("aria-label", lab.textContent);
  seg.innerHTML = [...sel.options].map(o => `<button type="button" data-v="${esc(o.value)}" aria-pressed="false">${esc(o.textContent)}</button>`).join("");
  sel.classList.add("vh"); sel.tabIndex = -1; sel.setAttribute("aria-hidden", "true");
  sel.after(seg);
  const sync = () => $$("button", seg).forEach(b => b.setAttribute("aria-pressed", b.dataset.v === sel.value));
  seg.onclick = e => { const b = e.target.closest("button"); if (!b) return; sel.value = b.dataset.v; sync(); sel.dispatchEvent(new Event("change", { bubbles: true })); };
  sel._segSync = sync; sync();
}
$$("select[data-seg]").forEach(segFromSelect);
function renderSettings() {
  const setSel = (id, v) => { const s = $(id); if (![...s.options].some(o => o.value === String(v))) s.add(new Option(String(v), String(v))); s.value = String(v); if (s._segSync) s._segSync(); };
  setSel("#set-new", S.dailyNew); setSel("#set-dir", S.dir); setSel("#set-rate", S.rate); setSel("#set-goal", S.goal.answers); setSel("#set-talk", S.goal.talkMin);
  $("#set-auto").checked = !!S.autoplay;
  renderVoicePicker();
}
$("#set-new").onchange = e => { S.dailyNew = +e.target.value; touchSettings(); save(); };
$("#set-goal").onchange = e => { S.goal.answers = +e.target.value; touchSettings(); save(); };
$("#set-talk").onchange = e => { S.goal.talkMin = +e.target.value; touchSettings(); save(); };
$("#set-dir").onchange = e => { S.dir = e.target.value; touchSettings(); save(); };
$("#set-rate").onchange = e => { S.rate = +e.target.value; touchSettings(); save(); speak("Hej, hvordan har du det?"); };
$("#set-voice").onchange = e => { S.voice = e.target.value; save(); pickVoice(); };
$("#voice-listen").onclick = () => { pickVoice(); speak("Hej! Jeg hedder Mette, og jeg er din dansklærer. Hvordan har du det i dag?"); };
$("#set-auto").onchange = e => { S.autoplay = e.target.checked; touchSettings(); save(); };
$("#reset").onclick = async () => {
  const yes = await confirmDialog({ title: "Azzerare tutti i progressi?", text: "Schede, unità, esami e conversazioni verranno cancellati da questo dispositivo. Non si può annullare.", ok: "Azzera", danger: true, okId: "reset-yes" });
  if (!yes) return;
  const keep = { rate: S.rate, autoplay: S.autoplay, voice: S.voice, resetAt: Date.now() }; S = Store.normalize(keep); save(); renderSettings(); refreshShell(); toast("Progressi azzerati.");
};
$("#bk-export").onclick = () => {
  const data = JSON.stringify(Object.assign({}, S, { route: { tab: "oggi" } }));
  const ta = $("#bk-text"); ta.value = data; $("#bk-row").hidden = false;
  const done = () => toast("Backup copiato. Incollalo in un posto sicuro (una nota, una mail a te stesso).");
  try { navigator.clipboard.writeText(data).then(done, () => { ta.select(); toast("Seleziona il testo qui sotto e copialo."); }); } catch (e) { ta.select(); }
};
$("#bk-import").onclick = () => {
  const ta = $("#bk-text"), row = $("#bk-row");
  if (row.hidden || !ta.value.trim()) { row.hidden = false; ta.value = ""; ta.placeholder = "Incolla qui il backup e premi di nuovo «Importa»"; ta.focus(); return; }
  try {
    S = Store.fromBackup(ta.value); loadCustom(); save(); row.hidden = true; renderSettings(); refreshShell(); toast("Backup importato.");
  } catch (e) { toast("Il testo incollato non è un backup valido di Dansk hver dag."); }
};

/* =========================================================
   Percorso e unità
   ========================================================= */
function unitState(u) {
  const p = unitProgress(u);
  if (p.done) return `<span class="state done">${icon("checkmark", "sm")}<span class="vh">Completata</span></span>`;
  if (p.started) return `<span class="state going">In corso</span>`;
  return `<span class="state"><span class="vh">Da iniziare</span></span>`;
}
function renderPath() {
  const r = S.route;
  if (r.unit && UMAP.has(r.unit)) return renderUnit(UMAP.get(r.unit), r.sub);
  setNav({ title: "Percorso" });
  $("#v-percorso").innerHTML = `
    <p class="muted t-subhead" style="padding:0 4px;margin-top:-10px">${UNITS.length} unità dal livello A1 al C1. Un'unità è completata con l'80% delle parole viste, 2 domande su 3 sul testo e l'80% negli esercizi.</p>
    ${LEVELS.map(L => {
      const us = UNITS.filter(u => u.level === L); if (!us.length) return "";
      const ex = S.exams[L];
      const dn = us.filter(u => unitProgress(u).done).length;
      return `<div class="level-block lv-${L}">
        <div class="level-head"><h2 class="t-title2"><span class="lvl lvl-${L} big">${L}</span><span class="lname">${LEVEL_INFO[L].name}</span></h2><span class="num t-footnote muted">${dn}/${us.length} unità</span></div>
        <p class="muted t-footnote">${LEVEL_INFO[L].can}</p>
        <div class="units">${us.map(u => `<button class="unit-row" type="button" data-unit="${u.id}">
          <span class="no">${String(u.n).padStart(2, "0")}</span>
          <span><span class="t">${hl(u.title)}</span><span class="s">${esc(u.sub)}</span></span>
          <span class="state-wrap" style="display:inline-flex;align-items:center;gap:6px">${unitState(u)}${CHEV}</span></button>`).join("")}</div>
        <div class="exam-row"><span><b>Esame ${L}</b> <span class="muted small">· 30 domande su tutto il livello, si supera con l'80%</span>${ex != null ? `<br><span class="small ${ex >= .8 ? "" : "muted"}">Miglior risultato: ${Math.round(ex * 100)}%${ex >= .8 ? " · superato" : ""}</span>` : ""}</span>
          <button class="btn sm" type="button" data-exam="${L}">Fai l'esame</button></div>
      </div>`;
    }).join("")}`;
  $$("[data-exam]", $("#v-percorso")).forEach(b => b.onclick = () => startExam(b.dataset.exam));
}

const SUBS_BASE = [["parole", "Parole"], ["grammatica", "Grammatica"], ["testo", "Testo"], ["esercizi", "Esercizi"]];
function renderUnit(u, sub) {
  markStarted(u);
  const SUBS = SUBS_BASE.concat(u.prod ? [["scrivi", "Scrivi"]] : [], u.talk ? [["conversa", "Conversa"]] : []);
  sub = SUBS.some(s => s[0] === sub) ? sub : "parole";
  S.route.sub = sub; save({ silent: true }); syncHist();
  setNav({ title: u.title, kicker: `${u.level} · unità ${u.n} di ${UNITS.filter(x => x.level === u.level).length}`, back: { label: "Percorso", fn: () => go("percorso", {}) } });
  const p = unitProgress(u);
  const us = S.units[u.id] || {};
  const pct = v => v < 0 ? "—" : Math.round(v * 100) + "%";
  const okW = p.w >= TH.words, okT = p.t >= TH.text, okE = p.e >= TH.ex;
  const idx = u.idx, prev = UNITS[idx - 1], next = UNITS[idx + 1];
  const v = $("#v-percorso");
  v.innerHTML = `
    <div class="unit-head lv-${u.level}">
      <p class="muted">${esc(u.sub)}</p>
      ${u.goals ? `<ul class="goals">${u.goals.map(g => `<li>${esc(g)}</li>`).join("")}</ul>` : ""}
    </div>
    <div class="checks">
      <div class="check ${okW ? "ok" : ""}"><span class="label">Parole viste</span><b>${pct(p.w)}</b></div>
      <div class="check ${okT ? "ok" : ""}"><span class="label">Testo</span><b>${u.textQs?.length ? pct(p.t) : "—"}</b></div>
      <div class="check ${okE ? "ok" : ""}"><span class="label">Esercizi</span><b>${pct(p.e)}</b></div>
    </div>
    <div class="subtabs seg scroll" role="group" aria-label="Parti dell'unità">${SUBS.map(([k, l]) => {
      const ok = { parole: okW, testo: okT, esercizi: okE, grammatica: us.gram, scrivi: us.prod }[k];
      return `<button type="button" data-sub="${k}" aria-pressed="${k === sub}">${l}${ok ? ' <span class="ok" aria-label="fatto">✓</span>' : ""}</button>`;
    }).join("")}</div>
    <div id="u-body"></div>
    <div class="cta-row" style="justify-content:space-between">
      ${prev ? `<button class="btn plain sm" type="button" data-unit="${prev.id}">${icon("chevron.left", "sm")}${hl(prev.title)}</button>` : "<span></span>"}
      ${next ? `<button class="btn plain sm" type="button" data-unit="${next.id}">${hl(next.title)}${icon("chevron.right", "sm")}</button>` : ""}
    </div>`;
  $$(".subtabs [data-sub]", v).forEach(b => b.onclick = () => { stopSpeech(); renderUnit(u, b.dataset.sub); });
  const body = $("#u-body");
  ({ parole: unitWords, grammatica: unitGrammar, testo: unitText, esercizi: unitExercises, scrivi: unitWrite, conversa: unitTalk })[sub](u, body);
}

function wordRow(w) {
  return `<div class="wrow">
    <span class="da">${hl(w.da)}${TYPE_LABEL[w.t] ? `<span class="tag">${TYPE_LABEL[w.t]}</span>` : ""}${formsOf(w) ? `<span class="forms">${hl(formsOf(w))}</span>` : ""}</span>
    <span class="it">${esc(w.it)}</span>
    ${dots(boxOf(w.id))}
    ${sayBtn(w.da)}
  </div>`;
}
function unitWords(u, el) {
  const ws = u.wordIds.map(id => WMAP.get(id));
  const unseen = ws.filter(w => !seen(w.id)).length;
  el.innerHTML = `<div class="stack">
    <div class="toolbar"><p class="muted">${ws.length} parole ed espressioni · ${unseen ? `${unseen} ancora da studiare` : "tutte già studiate"}</p>
    <div class="cta-row">
      <button class="btn primary" type="button" id="w-study">${unseen ? "Studia con le schede" : "Ripassa queste parole"}</button>
      <button class="btn" type="button" id="w-quiz">Quiz sulle parole</button>
    </div></div>
    <p class="small muted">Sotto ogni parola trovi le forme: per i sostantivi determinativo · plurale · plurale determinativo; per i verbi presente · passato · passato prossimo; per gli aggettivi neutro · plurale · comparativo · superlativo.</p>
    <div class="list">${ws.map(wordRow).join("")}</div></div>`;
  $("#w-study").onclick = () => go("ripasso", { scope: u.id });
  const quiz = () => {
    const qs = shuffle(ws).slice(0, 15).map(w => w.t === "n" && w.pl !== "-" && Math.random() < .35 ? nounQ(w) : w.t === "v" && Math.random() < .35 ? verbQ(w) : vocabQ(w));
    runQuestions(el, qs, { title: `Parole · ${u.title}`, again: quiz, back: { label: "Torna alle parole", fn: () => renderUnit(u, "parole") } });
  };
  $("#w-quiz").onclick = quiz;
}
function unitGrammar(u, el) {
  US(u.id).gram = true; save();
  el.innerHTML = `<div class="gram">${(u.grammar || []).map(g => `<h3>${hl(g.h)}</h3>${renderMarkup(g.body)}`).join("")}
    <div class="cta-row" style="margin-top:8px"><button class="btn primary" type="button" data-unit="${u.id}" data-sub="esercizi">Mettiti alla prova con gli esercizi</button></div></div>`;
}
function unitText(u, el) {
  if (!u.text) { el.innerHTML = `<p class="muted">Questa unità non ha un testo.</p>`; return; }
  const hideIt = S.hideIt;
  el.innerHTML = `<div class="stack">
    <div><span class="label">${esc(u.text.kind || "Testo")}</span><h3 style="margin-top:4px">${hl(u.text.title)}</h3>${u.text.intro ? `<p class="muted small" style="margin-top:6px">${esc(u.text.intro)}</p>` : ""}</div>
    <div class="reader-tools">
      <div class="cta-row"><button class="btn primary sm" type="button" id="t-play">${SPEAKER} Ascolta tutto</button><button class="btn sm" type="button" id="t-stop">Ferma</button></div>
      <label class="small"><input type="checkbox" id="t-hide" ${hideIt ? "checked" : ""}> Nascondi la traduzione</label>
    </div>
    <div class="reader panel ${hideIt ? "hide-it" : ""}" id="t-reader">${u.paras.map(p => `<div class="para">${p.map(l => {
      const k = u.textLines.indexOf(l);
      return `<div class="line" data-line="${k}">${sayBtn(l.da, "sm")}<span class="da">${l.who ? `<span class="who">${esc(l.who)}</span>` : ""}${hl(l.da)}</span>${l.it ? `<span class="it">${esc(l.it)}</span>` : ""}</div>`;
    }).join("")}</div>`).join("")}</div>
    ${u.textQs?.length ? `<div class="cta-row"><button class="btn primary" type="button" id="t-q">Rispondi alle domande (${u.textQs.length})</button>
      ${S.units[u.id]?.text != null ? `<span class="muted small">Miglior risultato: ${Math.round(S.units[u.id].text * 100)}%</span>` : ""}</div>` : ""}
    <div id="t-quiz"></div></div>`;
  $("#t-hide").onchange = e => { S.hideIt = e.target.checked; save(); $("#t-reader").classList.toggle("hide-it", S.hideIt); };
  const mark = k => $$(".line", el).forEach(x => x.classList.toggle("playing", +x.dataset.line === k));
  $("#t-play").onclick = () => speakSeq(u.textLines.map(l => l.da), mark, () => mark(-1));
  $("#t-stop").onclick = () => { stopSpeech(); mark(-1); };
  const tq = $("#t-q", el);
  const textQuiz = () => {
    const qs = u.textQs.map(e => ({ kind: "mc", label: "Domanda sul testo", prompt: hl(e.q), long: true, options: shuffle([e.right, ...e.wrong]), answer: e.right, expl: e.expl }));
    const box = $("#t-quiz"); if (tq) tq.parentElement.hidden = true;
    runQuestions(box, qs, {
      title: "Domande sul testo",
      onEnd: (s, t) => { const us = US(u.id); us.text = Math.max(us.text ?? 0, s / t); save(); },
      again: textQuiz,
      back: { label: "Torna all'unità", fn: () => renderUnit(u, "testo") },
    });
  };
  if (tq) tq.onclick = textQuiz;
}
function unitExercises(u, el) {
  const us = S.units[u.id] || {};
  el.innerHTML = `<div class="stack">
    <p class="muted">${u.exercises.length} esercizi: completamento, scelta multipla, ordine delle parole e traduzione. Nelle traduzioni sono accettate le formulazioni più comuni; se la tua è diversa ma giusta, puoi segnarla come corretta.</p>
    ${us.ex != null ? `<p class="small">Miglior risultato finora: <b>${Math.round(us.ex * 100)}%</b>${us.ex >= TH.ex ? " · obiettivo raggiunto" : " · obiettivo 80%"}</p>` : ""}
    <div><button class="btn primary" type="button" id="e-start">Comincia</button></div></div>`;
  const startEx = () => {
    const qs = u.exercises.map(e => exToQ(e, null));
    runQuestions(el, qs, {
      title: `Esercizi · ${u.title}`,
      onEnd: (s, t) => { const x = US(u.id); x.ex = Math.max(x.ex ?? 0, s / t); save(); },
      endHtml: (s, t) => {
        const p = unitProgress(u);
        if (p.done) return `<div class="tip">Unità completata.${UNITS[u.idx + 1] ? ` Prossima: <b>${hl(UNITS[u.idx + 1].title)}</b>.` : ""}</div>`;
        const miss = [p.w < TH.words && "studiare le parole", p.t < TH.text && "rispondere alle domande sul testo", s / t < TH.ex && "arrivare all'80% negli esercizi"].filter(Boolean);
        return miss.length ? `<div class="tip">Per completare l'unità ti manca: ${miss.join(", ")}.</div>` : "";
      },
      again: startEx,
      back: { label: "Torna all'unità", fn: () => renderUnit(u, "esercizi") },
    });
  };
  $("#e-start").onclick = startEx;
}

/* Produzione scritta (unità con il campo prod): consegna, testo dell'allievo, modello, correzione dall'IA */
let writeCtl = null;
function unitWrite(u, el) {
  const pr = u.prod, us = US(u.id);
  el.innerHTML = `<div class="stack">
    <div class="panel stack"><span class="card-kicker c-indigo">${icon("pencil")}Compito di scrittura</span>
      <p>${esc(pr.task)}</p>
      ${pr.points && pr.points.length ? `<ul class="goals muted t-callout">${pr.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</div>
    <textarea id="w-text" rows="8" placeholder="Scrivi qui in danese…" aria-label="Il tuo testo" spellcheck="false" autocapitalize="sentences">${esc(us.prodText || "")}</textarea>
    <div class="keys">${["æ", "ø", "å"].map(k => `<button type="button" class="btn" data-key="${k}">${k}</button>`).join("")}<span class="spacer"></span><span class="progress" id="w-count"></span></div>
    <div class="cta-row"><button class="btn primary" type="button" id="w-ai" hidden>Chiedi una correzione</button><button class="btn" type="button" id="w-stop" hidden>Ferma</button><button class="btn" type="button" id="w-model">Confronta con il modello</button></div>
    <p class="t-footnote muted" id="w-note"></p>
    <div id="w-out" class="stack" aria-live="polite"></div>
    <div id="w-modelbox" class="stack" hidden></div></div>`;
  const ta = $("#w-text", el), out = $("#w-out", el);
  const count = () => { const n = ta.value.trim().split(/\s+/).filter(Boolean).length; $("#w-count", el).textContent = n + (n === 1 ? " parola" : " parole"); };
  count();
  ta.oninput = () => { us.prodText = ta.value; save({ silent: true }); count(); };
  $$("[data-key]", el).forEach(b => b.onclick = () => { const a = ta.selectionStart ?? ta.value.length, z = ta.selectionEnd ?? a; ta.value = ta.value.slice(0, a) + b.dataset.key + ta.value.slice(z); ta.focus(); ta.setSelectionRange(a + 1, a + 1); ta.oninput(); });
  $("#w-model", el).onclick = () => {
    const box = $("#w-modelbox", el); box.hidden = !box.hidden;
    if (box.hidden) return;
    us.prod = true; save();
    box.innerHTML = `<div class="panel stack"><div class="card-head" style="margin-bottom:0"><span class="card-kicker c-green">${icon("checkmark")}Una risposta possibile</span>${sayBtn(pr.model)}</div>
      <p class="da" style="font-weight:500;line-height:1.5">${hl(pr.model)}</p>${pr.model_it ? `<p class="muted t-callout">${esc(pr.model_it)}</p>` : ""}
      <p class="t-footnote muted">È un esempio, non l'unica soluzione: confronta lunghezza, connettivi e registro con il tuo testo.</p></div>`;
  };
  getSample().then(sample => {
    if (!el.isConnected) return;
    const b = $("#w-ai", el), stop = $("#w-stop", el);
    if (!sample) { $("#w-note", el).textContent = "La correzione automatica richiede un motore IA; senza, usa il confronto con il modello."; return; }
    b.hidden = false;
    stop.onclick = () => writeCtl && writeCtl.abort();
    b.onclick = async () => {
      const text = ta.value.trim();
      if (text.split(/\s+/).length < 15) { toast("Scrivi almeno qualche frase prima di chiedere la correzione."); return; }
      writeCtl = new AbortController(); b.disabled = true; stop.hidden = false; out.innerHTML = `<p class="muted">Sto leggendo il tuo testo…</p>`;
      const prompt = `You are a careful Danish teacher. An Italian-speaking learner (level ${u.level}) wrote a short Danish text for this task (given in Italian): "${pr.task}". Required points: ${(pr.points || []).join("; ")}.\n\nLearner's text:\n"""${text.slice(0, 2500)}"""\n\nCorrect only real errors (grammar, word order, gender, verb forms, prepositions, spelling, clearly unnatural wording). If you are not sure something is wrong, do not correct it. Max 8 corrections, most important first. Explanations in Italian, one short sentence each.\nReply with ONLY this JSON: {"score_it": "one honest sentence in Italian on how well the task is done", "corrections": [{"wrong": "exact fragment", "right": "corrected Danish", "why_it": "short reason"}], "better": "the whole text rewritten in correct natural Danish, keeping the learner's ideas"}`;
      try {
        const r = await sample.json(prompt, { modelTier: "default", cache: false, signal: writeCtl.signal });
        const str = v => typeof v === "string" ? v.trim() : "";
        const corr = (Array.isArray(r && r.corrections) ? r.corrections : []).map(x => ({ w: str(x && x.wrong), r: str(x && x.right), y: str(x && x.why_it) })).filter(x => x.r).slice(0, 8);
        const better = str(r && r.better), sc = str(r && r.score_it);
        if (!sc && !corr.length && !better) throw { code: "invalid_json" };
        us.prod = true; logActivity(); save();
        out.innerHTML = `<div class="panel stack">${sc ? `<p><b>${esc(sc)}</b></p>` : ""}
          ${corr.length ? `<ul class="mistakes">${corr.map(x => `<li><span>${x.w ? `<s class="da muted">${hl(x.w)}</s> → ` : ""}<b class="da c-green">${hl(x.r)}</b></span>${x.y ? `<span class="t-subhead muted">${esc(x.y)}</span>` : ""}</li>`).join("")}</ul>` : `<p class="c-green">Nessun errore trovato.</p>`}
          ${better ? `<div class="card-head" style="margin:6px 0 0"><span class="card-kicker c-tint">${icon("sparkles")}Versione corretta</span>${sayBtn(better)}</div><p class="da" style="font-weight:500;line-height:1.5">${hl(better)}</p>` : ""}
          <p class="t-footnote muted">Le correzioni dell'IA possono contenere errori: nel dubbio controlla su ordnet.dk.</p></div>`;
      } catch (e) { out.innerHTML = e && e.code === "cancelled" ? "" : `<p class="c-red">${esc(sampleError(e))}</p>`; }
      finally { b.disabled = false; stop.hidden = true; writeCtl = null; }
    };
  });
}
/* Conversazione a tema (unità con il campo talk) */
function unitTalk(u, el) {
  const t = u.talk;
  const useful = (t.useful || []).map(x => { const k = String(x).indexOf(" = "); return k >= 0 ? [x.slice(0, k), x.slice(k + 3)] : [x, ""]; });
  el.innerHTML = `<div class="stack">
    <div class="panel stack"><span class="card-kicker c-teal">${icon("chat")}${esc(t.title || "Conversazione a tema")}</span>
      <p><span class="muted">Interlocutore:</span> ${esc(t.role || "")}</p>
      <p><span class="muted">La tua missione:</span> ${esc(t.mission || "")}</p>
      ${t.opener ? `<div class="gram" style="box-shadow:none;padding:0"><div class="ex">${sayBtn(t.opener, "sm")}<span class="da">${hl(t.opener)}</span>${t.opener_it ? `<span class="it">${esc(t.opener_it)}</span>` : ""}</div></div>` : ""}
      <button class="btn primary wide" type="button" id="k-start">${icon("mic")}Inizia la conversazione</button></div>
    ${useful.length ? `<div><h3 class="group-title">Frasi utili</h3><div class="list">${useful.map(([da, it]) => `<div class="wrow" style="grid-template-columns:minmax(0,1fr) auto"><span><span class="da">${hl(da)}</span>${it ? `<span class="forms">${esc(it)}</span>` : ""}</span>${sayBtn(da)}</div>`).join("")}</div></div>` : ""}</div>`;
  $("#k-start", el).onclick = () => { if (typeof window.DanskApp.startTalk === "function") window.DanskApp.startTalk(t, u); else go("tutor"); };
}

/* Esame di livello */
function startExam(L) {
  const us = UNITS.filter(u => u.level === L);
  const exs = shuffle(us.flatMap(u => u.exercises.map(e => [e, u]))).slice(0, 18).map(([e, u]) => exToQ(e, u));
  const ws = us.flatMap(u => u.wordIds).map(id => WMAP.get(id)).filter(w => w.level === L);
  const nouns = shuffle(ws.filter(w => w.t === "n" && w.pl !== "-")).slice(0, 3).map(nounQ);
  const verbs = shuffle(ws.filter(w => w.t === "v")).slice(0, 3).map(verbQ);
  const adjs = shuffle(ws.filter(w => w.t === "a")).slice(0, 2).map(a => adjQ(a, ws.filter(w => w.t === "n")));
  const dict = shuffle(dictLines(us)).slice(0, 2).map(dictQ);
  const tqs = shuffle(us.filter(u => u.textQs?.length).flatMap(u => u.textQs.map(e => [e, u]))).slice(0, 2)
    .map(([e, u]) => ({ kind: "mc", label: `Testo «${u.text.title}»`, prompt: hl(e.q), long: true, options: shuffle([e.right, ...e.wrong]), answer: e.right, expl: e.expl, ref: `${u.level} · ${u.title}` }));
  const qs = shuffle([...exs, ...nouns, ...verbs, ...adjs, ...dict, ...tqs]).slice(0, 30);
  go("percorso", { unit: null });
  const v = $("#v-percorso");
  setNav({ title: `Esame ${L}`, kicker: "Esame di livello", back: { label: "Percorso", fn: () => renderPath() } });
  v.innerHTML = `<div id="x-body"></div>`;
  runQuestions($("#x-body"), qs.map(q => Object.assign(q, { onResult: undefined })), {
    title: `Esame ${L}`,
    onEnd: (s, t) => { S.exams[L] = Math.max(S.exams[L] ?? 0, s / t); save(); },
    endHtml: (s, t) => s / t >= .8
      ? `<div class="tip"><b>Esame ${L} superato.</b> ${LEVELS[LEVELS.indexOf(L) + 1] && UNITS.some(u => u.level === LEVELS[LEVELS.indexOf(L) + 1]) ? `Puoi passare al livello ${LEVELS[LEVELS.indexOf(L) + 1]}.` : "Hai completato il percorso dell'app. Ora serve tanta esposizione al danese vero: guarda «Oltre l'app» nelle Impostazioni."}</div>`
      : `<div class="tip">Serve l'80% (${Math.ceil(t * .8)} risposte giuste). Ripassa le unità con i risultati più bassi e riprova: le domande cambiano ogni volta.</div>`,
    again: () => startExam(L),
    back: { label: "Torna al percorso", fn: () => renderPath() },
  });
}

/* =========================================================
   Ripasso con schede
   ========================================================= */
const fc = { queue: [], total: 0, done: 0, flipped: false, front: "da", scope: "all", extra: 0 };
function renderReview() {
  const scope = S.route.scope || "all";
  fc.scope = scope; fc.extra = 0;
  const v = $("#v-ripasso");
  const st = startedUnits();
  v.innerHTML = `<div class="toolbar">
      <select id="fc-scope" aria-label="Quali parole">
        <option value="all">Tutte le unità iniziate</option>
        <option value="mine" ${scope === "mine" ? "selected" : ""}>Il mio mazzo (${Object.keys(S.custom || {}).length})</option>
        ${st.map(u => `<option value="${u.id}" ${u.id === scope ? "selected" : ""}>${u.level} · ${esc(u.title)}</option>`).join("")}
      </select>
      <span class="progress" id="fc-prog"></span></div>
    <div class="pbar"><b id="fc-bar" style="width:0"></b></div>
    <div id="fc-area"></div>`;
  $("#fc-scope").onchange = e => { S.route.scope = e.target.value; save(); renderReview(); };
  if (!st.length && scope === "all" && !Object.keys(S.custom || {}).length) {
    $("#fc-area").innerHTML = `<div class="panel empty"><h3>Ancora nessuna parola da ripassare</h3><p class="muted">Le parole entrano nel ripasso quando inizi un'unità.</p><button class="btn primary" type="button" data-unit="${UNITS[0].id}">Apri la prima unità</button></div>`;
    return;
  }
  startSession();
}
function startSession() {
  const now = Date.now();
  const u = UMAP.get(fc.scope);
  if (u) markStarted(u);
  const mine = Object.keys(S.custom || {});
  const ids = u ? u.wordIds : fc.scope === "mine" ? mine : startedUnits().flatMap(x => x.wordIds).concat(mine);
  const pool = [...new Set(ids)].map(id => WMAP.get(id)).filter(Boolean);
  const due = pool.filter(w => S.cards[w.id] && S.cards[w.id].due <= now).sort((a, b) => S.cards[a.id].due - S.cards[b.id].due);
  const room = u ? 12 + fc.extra : Math.max(0, S.dailyNew - newToday()) + fc.extra;
  const fresh = pool.filter(w => !S.cards[w.id]).slice(0, room);
  fc.queue = [...due, ...fresh]; fc.done = 0; fc.total = fc.queue.length;
  nextCard();
}
function nextCard() {
  fc.flipped = false;
  fc.front = S.dir === "mix" ? (Math.random() < .5 ? "da" : "it") : S.dir;
  renderCard();
}
const nextBox = (c, g) => Math.min(MAXBOX, (c?.box || 0) + g);
const fmtDays = box => { const d = INTERVALS[box]; return d === 1 ? "domani" : d < 30 ? `tra ${d} giorni` : `tra ${Math.round(d / 30)} mesi`; };
function renderCard() {
  const area = $("#fc-area"); if (!area) return;
  $("#fc-prog").textContent = fc.total ? `${fc.done} / ${fc.total}` : "";
  $("#fc-bar").style.width = fc.total ? (fc.done / fc.total * 100) + "%" : "0";
  if (!fc.queue.length) {
    const u = UMAP.get(fc.scope);
    const ids = u ? u.wordIds : fc.scope === "mine" ? [] : startedUnits().flatMap(x => x.wordIds);
    const left = ids.filter(id => !seen(id)).length;
    area.innerHTML = `<div class="panel empty">
      <h2>Færdig! <span class="muted" style="font-weight:500">Finito.</span></h2>
      <p class="muted">${fc.total ? `Hai ripassato ${fc.total} schede. ` : "Niente da ripassare adesso. "}Le parole tornano quando è il momento giusto per non dimenticarle.</p>
      <div class="cta-row" style="justify-content:center">
        ${left ? `<button class="btn primary" type="button" id="fc-more">Altre parole nuove (${left} rimaste)</button>` : ""}
        ${u ? `<button class="btn" type="button" data-unit="${u.id}" data-sub="grammatica">Vai alla grammatica dell'unità</button>` : `<button class="btn" type="button" data-goto="allenamento">Allenati</button>`}
      </div></div>`;
    const m = $("#fc-more"); if (m) m.onclick = () => { fc.extra += u ? 12 : 5; startSession(); };
    return;
  }
  const w = fc.queue[0], c = S.cards[w.id];
  const frontDa = fc.front === "da";
  const u = UMAP.get(w.unit);
  const tagLabel = w.custom ? "Il mio mazzo" : `${u.level} · ${esc(u.title)}`;
  area.innerHTML = `
    <div class="card" id="card" role="button" tabindex="0" aria-live="polite" aria-label="Scheda: ${fc.flipped ? "risposta mostrata" : "tocca per girare"}">
      <span class="ctag label">${c ? tagLabel : "Nuova"}</span>
      <span class="cbox">${dots(c?.box || 0)}</span>
      <div class="front ${frontDa ? "da" : "it"}">${frontDa ? hl(w.da) : esc(w.it)}${!frontDa && TYPE_LABEL[w.t] ? ` <span class="tag">${TYPE_LABEL[w.t]}</span>` : ""}</div>
      ${frontDa ? sayBtn(w.da) : ""}
      ${fc.flipped ? `<div class="back">
          <div class="ans ${frontDa ? "" : "da"}">${frontDa ? `<b>${esc(w.it)}</b>` : hl(w.da)}</div>
          ${formsOf(w) ? `<div class="hint">${hl(formsOf(w))}</div>` : ""}
          ${frontDa ? "" : sayBtn(w.da)}
        </div>` : `<div class="tap">Tocca per girare la scheda</div>`}
    </div>
    <div class="rate" style="margin-top:14px">
      <button class="btn bad" type="button" data-g="0" ${fc.flipped ? "" : "disabled"}>Ancora<span>tra poco</span></button>
      <button class="btn" type="button" data-g="1" ${fc.flipped ? "" : "disabled"}>Bene<span>${fmtDays(nextBox(c, 1))}</span></button>
      <button class="btn good" type="button" data-g="2" ${fc.flipped ? "" : "disabled"}>Facile<span>${fmtDays(nextBox(c, 2))}</span></button>
    </div>
    <p class="kbd" style="margin-top:10px">Tastiera: spazio per girare · 1 2 3 per rispondere · A per ascoltare</p>`;
  $("#card").onclick = flip;
  $$("[data-g]", area).forEach(b => b.onclick = () => rate(+b.dataset.g));
  if (fc.flipped && !frontDa && S.autoplay) speak(w.da);
}
function flip() { if (!fc.flipped) { fc.flipped = true; renderCard(); } }
function rate(g) {
  if (!fc.flipped || !fc.queue.length) return;
  const w = fc.queue.shift();
  let c = S.cards[w.id];
  if (!c) {
    c = S.cards[w.id] = { box: 0, due: 0, ok: 0, ko: 0 };
    if (S.newDay.date !== dkey()) S.newDay = { date: dkey(), n: 0 };
    S.newDay.n++;
  }
  if (g === 0) { c.box = 0; c.due = Date.now(); c.ko++; fc.queue.splice(Math.min(3, fc.queue.length), 0, w); }
  else { if (!S.revDay || S.revDay.date !== dkey()) S.revDay = { date: dkey(), n: 0 }; S.revDay.n++; c.box = nextBox(c, g); c.due = Date.now() + INTERVALS[c.box] * DAY - 36e5; c.ok++; fc.done++; }
  logActivity(); save(); nextCard();
}
document.addEventListener("keydown", e => {
  if ($("#v-ripasso").hidden || !fc.queue.length || !$("#card") || e.target.matches("input, select, textarea")) return;
  if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
  else if (["1", "2", "3"].includes(e.key)) rate(+e.key - 1);
  else if (e.key.toLowerCase() === "a") speak(fc.queue[0].da);
});

/* =========================================================
   Allenamento
   ========================================================= */
const DRILLS = [
  ["vocab", "Vocabolario", "Traduci le parole nei due sensi."],
  ["nouns", "Sostantivi", "Genere, forma determinativa e plurale."],
  ["verbs", "Verbi", "Presente, passato e passato prossimo."],
  ["adjs", "Aggettivi", "Accordo con il sostantivo e comparativo."],
  ["dict", "Dettato", "Ascolta frasi dei testi e scrivile."],
  ["mixed", "Esercizi misti", "Esercizi delle unità, mescolati: il miglior ripasso della grammatica."],
];
function trainUnits(scope) {
  if (LEVELS.includes(scope)) return UNITS.filter(u => u.level === scope);
  // Tutte le unità fino all'ultima iniziata: più materiale e sempre ripasso di quelle precedenti
  const st = startedUnits();
  const last = st.length ? Math.max(...st.map(u => u.idx)) : 0;
  return UNITS.slice(0, last + 1);
}
function renderTrain() {
  const v = $("#v-allenamento");
  const scope = S.trainScope || "started";
  setNav({ title: "Allenamento" });
  v.innerHTML = `<div class="stack">
    <p class="muted t-subhead" style="padding:0 4px;margin-top:-10px">Esercizi generati ogni volta in modo diverso a partire dalle parole e dai testi del corso. 15 domande per sessione.</p>
    <div class="field"><label for="tr-scope">Materiale</label>
      <select id="tr-scope"><option value="started">Le unità fatte finora (${trainUnits("started").length})</option>${LEVELS.map(L => `<option value="${L}" ${scope === L ? "selected" : ""}>Tutto il livello ${L}</option>`).join("")}</select></div></div>
    <div class="drills">${DRILLS.map(([k, t, d]) => `<button class="drill" type="button" data-drill="${k}"><b>${t}</b><span>${d}</span></button>`).join("")}</div>
    <div id="tr-run"></div>`;
  $("#tr-scope").value = scope;
  $("#tr-scope").onchange = e => { S.trainScope = e.target.value; save(); };
  $$("[data-drill]", v).forEach(b => b.onclick = () => runDrill(b.dataset.drill));
}
function runDrill(kind) {
  const us = trainUnits(S.trainScope || "started");
  const ws = [...new Set(us.flatMap(u => u.wordIds))].map(id => WMAP.get(id)).filter(Boolean);
  const nouns = ws.filter(w => w.t === "n");
  let qs = [];
  const N = 15;
  // Le parole più deboli hanno più probabilità di uscire
  const weighted = arr => shuffle(arr).sort((a, b) => boxOf(a.id) - boxOf(b.id) + (Math.random() - .5) * 3);
  if (kind === "vocab") qs = weighted(ws).slice(0, N).map(vocabQ);
  if (kind === "nouns") qs = weighted(nouns.filter(w => w.pl !== "-")).slice(0, N).map(nounQ);
  if (kind === "verbs") qs = weighted(ws.filter(w => w.t === "v")).slice(0, N).map(verbQ);
  if (kind === "adjs") qs = weighted(ws.filter(w => w.t === "a")).slice(0, N).map(a => adjQ(a, nouns));
  if (kind === "dict") qs = shuffle(dictLines(us)).slice(0, 10).map(dictQ);
  if (kind === "mixed") qs = shuffle(us.flatMap(u => u.exercises.map(e => [e, u]))).slice(0, N).map(([e, u]) => exToQ(e, u));
  if (qs.length < 3) { toast("Non c'è ancora abbastanza materiale: inizia qualche unità in più o scegli un livello intero."); return; }
  const title = DRILLS.find(d => d[0] === kind)[1];
  const v = $("#v-allenamento");
  setNav({ title, back: { label: "Allenamento", fn: renderTrain } });
  v.innerHTML = `<div id="tr-run"></div>`;
  runQuestions($("#tr-run"), qs, { title, again: () => runDrill(kind), back: { label: "Altri allenamenti", fn: renderTrain } });
}

/* =========================================================
   Grammatica (indice)
   ========================================================= */
function renderGrammarIndex() {
  $("#v-grammatica").innerHTML = `<p class="muted t-subhead" style="padding:0 4px;margin-top:-10px">Tutte le lezioni del corso, in ordine. Ognuna si apre nella sua unità, con gli esercizi collegati.</p>
    ${LEVELS.filter(L => UNITS.some(u => u.level === L)).map(L => `<div class="level-block lv-${L}"><div class="level-head"><h2 class="t-title2"><span class="lvl lvl-${L} big">${L}</span>${LEVEL_INFO[L].name}</h2></div>
      <div class="gram-index">${UNITS.filter(u => u.level === L).map(u => (u.grammar || []).map(g => `
        <button class="gi" type="button" data-unit="${u.id}" data-sub="grammatica"><span class="num">${u.level}.${u.n}</span><span><span class="t">${hl(g.h)}</span><span class="u">${hl(u.title)}</span></span>${CHEV}</button>`).join("")).join("")}</div></div>`).join("")}`;
}

/* =========================================================
   Lessico
   ========================================================= */
let lx = { level: "all", type: "all", q: "" };
function renderLex() {
  const v = $("#v-lessico");
  if (!$("#lx-q", v)) {
    v.innerHTML = `<div class="stack">
      <input type="search" id="lx-q" placeholder="Cerca in danese o in italiano" aria-label="Cerca">
      <div class="chips" id="lx-lv">${[["all", "Tutti i livelli"], ...LEVELS.map(L => [L, L])].map(([k, l]) => `<button class="chip" type="button" data-lv="${k}" aria-pressed="${k === lx.level}">${l}</button>`).join("")}</div>
      <div class="chips" id="lx-ty">${[["all", "Tutto"], ["n", "Sostantivi"], ["v", "Verbi"], ["a", "Aggettivi"], ["x", "Altro"]].map(([k, l]) => `<button class="chip" type="button" data-ty="${k}" aria-pressed="${k === lx.type}">${l}</button>`).join("")}</div>
      <p class="muted small" id="lx-count"></p></div>
      <div class="list" id="lx-list"></div>`;
    $("#lx-q").oninput = e => { lx.q = e.target.value; drawLex(); };
    $("#lx-lv").onclick = e => { const b = e.target.closest("[data-lv]"); if (!b) return; lx.level = b.dataset.lv; $$("[data-lv]").forEach(x => x.setAttribute("aria-pressed", x === b)); drawLex(); };
    $("#lx-ty").onclick = e => { const b = e.target.closest("[data-ty]"); if (!b) return; lx.type = b.dataset.ty; $$("[data-ty]").forEach(x => x.setAttribute("aria-pressed", x === b)); drawLex(); };
  }
  drawLex();
}
function drawLex() {
  const q = fold(norm(lx.q));
  const ws = WORDS.filter(w => (lx.level === "all" || w.level === lx.level) && (lx.type === "all" || w.t === lx.type) &&
    (!q || fold(norm(w.da)).includes(q) || norm(w.it).includes(norm(lx.q)) || fold(norm(formsOf(w))).includes(q)));
  $("#lx-count").textContent = `${ws.length} ${ws.length === 1 ? "voce" : "voci"} · i pallini mostrano quanto la conosci`;
  const shown = ws.slice(0, 300);
  $("#lx-list").innerHTML = shown.map(wordRow).join("") + (ws.length > shown.length ? `<p class="muted small" style="padding:12px 0">Mostro le prime 300: usa la ricerca o i filtri per trovare le altre.</p>` : "") || `<p class="muted">Nessuna parola trovata.</p>`;
}

/* =========================================================
   Avvio
   ========================================================= */
Object.assign(RENDER, { oggi: renderToday, percorso: renderPath, ripasso: renderReview, allenamento: renderTrain, grammatica: renderGrammarIndex, lessico: renderLex, impostazioni: renderSettings });
$("#course-size").textContent = `${UNITS.length} unità · ${WORDS.length} parole · ${UNITS.reduce((n, u) => n + u.exercises.length, 0)} esercizi`;

/* Mazzo personale: frasi salvate da tutor, diario e laboratorio */
function customWord(id, c) { return { id, t: "x", da: c.da, it: c.it, note: c.note || "", src: c.src || "", custom: true, level: "", unit: null }; }
function loadCustom() {
  Object.entries(S.custom || {}).forEach(([id, c]) => { if (!WMAP.has(id)) { const w = customWord(id, c); WORDS.push(w); WMAP.set(id, w); } });
}
function addCard({ da, it, note = "", src = "" }) {
  da = String(da || "").trim(); it = String(it || "").trim();
  if (!da || !it) return false;
  const id = "p:" + norm(da);
  S.custom ||= {};
  if (S.custom[id]) { toast("È già nel tuo mazzo."); return false; }
  S.custom[id] = { da, it, note, src, added: Date.now() };
  const w = customWord(id, S.custom[id]); WORDS.push(w); WMAP.set(id, w);
  S.cards[id] = { box: 0, due: Date.now(), ok: 0, ko: 0 };
  save(); toast("Aggiunta al mazzo: la trovi nel Ripasso.");
  return true;
}
loadCustom();

/* Accesso a Claude dalla pagina pubblicata (capability "sample"). null in locale. */
let samplePromise = null, claudePromise = null, sampleKind = null;
function claudeSample() {
  if (!claudePromise) claudePromise = (window.claude && typeof window.claude.use === "function") ? window.claude.use("sample").catch(() => null) : Promise.resolve(null);
  return claudePromise;
}
/* Claude se disponibile; altrimenti Gemini o Ollama secondo le impostazioni; altrimenti null.
   aiMode(): "claude" | "gemini" | "local" (Ollama) | null */
function getSample() {
  if (window.DanskAI) return window.DanskAI.sample();   // catena di motori con riserva automatica: js/ai.js
  if (!samplePromise) samplePromise = (async () => {
    const L = window.DanskLocalAI;
    const st = L ? L.settings() : { engine: "auto" };
    const cs = st.engine === "ollama" || st.engine === "gemini" ? null : await claudeSample();
    sampleKind = null;
    if (typeof cs === "function") { sampleKind = "claude"; return cs; }
    if (!L || st.engine === "off") return null;
    if (st.engine === "gemini" || (st.engine === "auto" && st.geminiKey && st.geminiOk)) { sampleKind = "gemini"; return L.geminiAdapter(); }
    if (st.engine === "ollama" || st.configured) { sampleKind = "local"; return L.adapter(); }
    return null;
  })();
  return samplePromise;
}
function resetSample() { samplePromise = null; sampleKind = null; if (window.DanskAI) window.DanskAI.reset(); }
function aiMode() { return window.DanskAI ? window.DanskAI.mode() : getSample().then(() => sampleKind); }
const SAMPLE_ERRORS = {
  not_granted: "Non hai autorizzato la pagina a usare Claude. Ricarica la pagina per riprovare.",
  sampling_disabled: "Claude non è disponibile per questo account.",
  rate_limited: "Troppe richieste o limite di utilizzo raggiunto (con Gemini gratuito: limite per minuto o per giorno). Riprova tra un po'.",
  session_expired: "La sessione è scaduta: accedi di nuovo a claude.ai.",
  refused: "Claude non ha risposto a questa richiesta. Prova a riformularla.",
  invalid_json: "La risposta non era nel formato previsto. Riprova.",
  prompt_too_large: "Il testo è troppo lungo. Accorcialo e riprova.",
  empty_completion: "Nessuna risposta. Riprova con un testo diverso.",
  local_unreachable: "Ollama non risponde. Controlla che sia aperto e segui i passi in Impostazioni › Motore IA.",
  local_no_model: "Il modello non è installato. Nel Terminale esegui: ollama pull gemma3:4b",
  gemini_bad_key: "Google non accetta la chiave di Gemini. Controllala in Impostazioni › Motore IA.",
  gemini_no_model: "Il modello Gemini indicato non esiste. Controllalo in Impostazioni › Motore IA.",
  gemini_region: "Gemini non è disponibile nel tuo paese con questo account.",
  gemini_unreachable: "Non riesco a raggiungere Gemini. Controlla la connessione a internet.",
};
const sampleError = e => (window.DanskAI && typeof window.DanskAI.explain === "function" && window.DanskAI.explain(e)) || SAMPLE_ERRORS[e && e.code] || "Qualcosa è andato storto nella connessione. Riprova.";

// Livello attuale dello studente e parole che conosce, per adattare le richieste a Claude
// Livello dell'allievo: il più alto tra il test di livello e l'unità su cui sta lavorando davvero.
// Aprire per curiosità un'unità avanzata non cambia il livello: conta la prima unità non completata.
function currentLevel() {
  const nu = nextUnit();
  const byCourse = nu ? nu.level : LEVELS[LEVELS.length - 1];
  const byTest = S.placement && LEVELS.includes(S.placement.level) ? S.placement.level : LEVELS[0];
  return LEVELS[Math.max(LEVELS.indexOf(byCourse), LEVELS.indexOf(byTest))];
}
/* Impostazioni dei moduli: addSettings(id, titolo, render(el), { advanced }) aggiunge un gruppo
   in #settings-ext oppure, se advanced, in #settings-adv (dentro «Avanzate»). */
function addSettings(id, title, render, opts) {
  const host = $(opts && opts.advanced ? "#settings-adv" : "#settings-ext") || $("#v-oggi");
  if (!host || $("#set-" + id)) return null;
  const sec = document.createElement("section");
  sec.className = "set-sec set-group"; sec.id = "set-" + id;
  sec.innerHTML = `<h2 class="group-title">${esc(title)}</h2><div class="panel settings set-body"></div>`;
  host.append(sec);
  try { render(sec.querySelector(".set-body"), sec); } catch (e) { console.error("Impostazioni non caricate:", id, e); }
  return sec;
}
function knownWords(max = 150) {
  const ids = Object.keys(S.cards).filter(id => WMAP.has(id)).sort((a, b) => boxOf(b) - boxOf(a));
  return ids.slice(0, max).map(id => WMAP.get(id).da);
}
function weakWords(max = 20) {
  return Object.entries(S.cards).filter(([id]) => WMAP.has(id)).sort((a, b) => (b[1].ko || 0) - (a[1].ko || 0) || a[1].box - b[1].box)
    .slice(0, max).map(([id]) => WMAP.get(id));
}

window.DanskApp = {
  $, $$, esc, hl, inline, shuffle, pick, norm, fold, lev, dkey, toast,
  speak, speakSeq, stopSpeech, sayBtn, SPEAKER,
  runQuestions, checkAnswer, tokensOf, exToQ, nounQ, verbQ, adjQ, vocabQ, dictQ, dictLines, formsOf,
  UNITS, UMAP, WORDS, WMAP, LEVELS, TYPE_LABEL,
  state: () => S, save, onSave: f => saveHooks.push(f), replaceState, touchSettings, Store, logActivity, boxOf, seen, penalize, startedUnits, trainUnits, nextUnit,
  addCard, addTab, addSettings, go, goBack, icon, setNav, openSheet, closeSheet, confirm: confirmDialog, CHEV, daVoice: () => { if (!daVoice) pickVoice(); return daVoice; }, voiceScore, renderMarkup, LEVEL_INFO, unitProgress,
  /* agganci riempiti dai moduli: startTalk(talk) apre una conversazione a tema (js/ext/samtale.js) */
  startTalk: null, getSample, resetSample, aiMode, sampleError, currentLevel, knownWords, weakWords,
};
(window.DANSK_EXT || []).forEach(ext => { try { ext(window.DanskApp); } catch (e) { console.error("Modulo non caricato:", e); } });

let start = S.route && TABS.includes(S.route.tab) ? S.route.tab : "oggi";
const h = location.hash.slice(1); if (TABS.includes(h) && !HIDDEN_TABS.has(h)) { start = h; S.route = { tab: h }; }
go(start, S.route || {}, { replace: true });
window.__dansk = { UNITS, WORDS, NAMES, checkAnswer, tokensOf, exToQ, nounQ, verbQ, adjQ, vocabQ, norm };
})();
