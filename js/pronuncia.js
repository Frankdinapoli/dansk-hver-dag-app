/* Dansk hver dag — stima della pronuncia (window.DanskPronuncia).
   Confronta la frase attesa con ciò che il riconoscimento vocale ha capito.
   Le funzioni sono pure: funzionano anche in Node (module.exports). */
(function (root) {
"use strict";

const DISCLAIMER = "È una stima: confronta ciò che il riconoscimento ha capito con la frase attesa. Non è un giudizio sulla tua pronuncia.";

/* ---------------------------------------------------------
   Schede sui suoni difficili (per un italiano)
   --------------------------------------------------------- */
const TIPS = [
  { id: "stod", title_it: "Lo stød (il «colpetto» in gola)",
    text_it: "In danese molte parole hanno lo stød: una piccola interruzione della voce, come un colpetto leggero in gola, dentro la vocale. Può cambiare il significato: hun (lei) senza stød, hund (cane) con lo stød; man (si) e mand (uomo); ven (amico) e vend! (gira!). Non si scrive: si impara ascoltando. In alcune zone (per esempio nel sud dello Jutland) lo stød manca o si realizza diversamente. Per un italiano è normale non sentirlo all'inizio. Ascolta le coppie e prova a imitare quella «piccola stretta» sulla vocale.",
    examples: ["hun", "hund", "man", "mand", "ven", "vend"] },
  { id: "d-molle", title_it: "La d molle",
    text_it: "La d alla fine di una sillaba, o tra due vocali, non si pronuncia come la d italiana. Si fa con la punta della lingua rilassata dietro i denti di sotto, senza toccare: un suono che ricorda vagamente il «th» inglese di «the», ma molto più debole (alcuni lo sentono quasi come una l leggera). Dopo l, n, r di solito non si sente affatto: hund suona come hun, ma con lo stød. La rappresentazione che usiamo qui è un'approssimazione: l'ascolto conta più di qualunque scrittura.",
    examples: ["mad", "gade", "hedder", "rød", "bad"] },
  { id: "vocali-oy", title_it: "Le vocali ø e y",
    text_it: "La y si dice come la u francese o la ü tedesca: metti la bocca a «u» e prova a dire «i». La ø come la eu francese in «feu» o la ö tedesca: bocca a «o» e dici «e». Sono suoni che in italiano non esistono: sbagliarli è normale, ma sono importanti perché distinguono parole (ni / ny, se / sø).",
    examples: ["ny", "dyr", "søn", "øl", "bøger", "fødselsdag"] },
  { id: "a-o", title_it: "La å e la o",
    text_it: "La å si dice con la bocca tonda, come una «o» aperta italiana, simile alla o di «cosa». La o danese invece spesso è più chiusa e vicina alla «u» (bog, god). Attenzione: a volte la o si scrive ma suona come «å» e viceversa: ascolta sempre la parola intera.",
    examples: ["år", "gået", "på", "god", "bog", "sove"] },
  { id: "ae-e-a", title_it: "Le vocali æ, e, a",
    text_it: "La æ è una «e» aperta, come la «è» italiana (æble, være), a volte ancora più aperta. La e può essere chiusa o aperta secondo la parola, e in alcune parole suona quasi come una «a» (nej, ret). La a, invece, in molte parole è più anteriore e si avvicina a una «e» molto aperta (have), mentre davanti alla r è scura, verso il fondo della bocca. Prova a ripetere le parole senza trasformare ogni vocale in una vocale italiana: il danese ha più vocali dell'italiano.",
    examples: ["æble", "være", "læse", "nej", "have", "ret"] },
  { id: "r", title_it: "La r in gola e la r che si perde",
    text_it: "La r danese si fa in fondo alla gola, senza far vibrare la lingua come in italiano. Dopo una vocale, alla fine di una sillaba, diventa quasi una vocale (una «a» corta): mor, lærer, bor. All'inizio di parola e dopo una consonante (rød, tre) si sente come una r leggera in gola, senza vibrazione. Non rotolare la r italiana: è la cosa che ti fa riconoscere subito come straniero.",
    examples: ["rød", "mor", "lærer", "bor", "tre", "arbejde"] },
  { id: "mute", title_it: "Consonanti ingoiate e lettere mute",
    text_it: "Molte lettere scritte non si dicono, o si dicono appena. Per esempio hv- inizia con v (hvad si dice più o meno «va»), la d dopo l, n, r spesso sparisce, e la g dopo una vocale, a fine parola o davanti a -e, diventa un suono debole (una i o una u appena accennata) o sparisce (dag, sig, pige). In halv e selv è la v che non si sente: suonano più o meno «hal» e «sel». Fidati di ciò che senti, non di come si scrive.",
    examples: ["hvad", "selv", "dag", "halv", "bord", "hvem"] },
  { id: "schwa", title_it: "Le terminazioni -e e -er",
    text_it: "La -e finale e la terminazione -er non hanno una vocale piena: suonano come un «e» debolissima, quasi un mormorio (schwa), simile alla e debole di «the» in inglese. Non pronunciare «bage» come «bagè» italiano con la e chiara. Per -er la r non si pronuncia come consonante: la terminazione diventa una specie di «a» breve e scura, quindi lærer suona all'incirca «lè-a-a» (è solo un'approssimazione: ascolta l'audio).",
    examples: ["bage", "lærer", "kage", "pige", "studerer", "huse"] },
  { id: "scritte-dette", title_it: "Parole scritte in un modo e dette in un altro",
    text_it: "Alcune parole molto frequenti non si leggono come sembrano. Det suona come «de», jeg come «jai», og come «å», ikke come «ik» o «igge», meget come «maiet» o «mait», sige come «si», nogle come «nole» (spesso solo «non»). Sono approssimazioni: ascolta bene e ripeti, ma non fidarti ciecamente delle scritture in italiano.",
    examples: ["det", "jeg", "og", "meget", "sige", "ikke", "nogle"] },
  { id: "ritmo", title_it: "Ritmo e accento di frase",
    text_it: "Il danese è una lingua «ritmata sull'accento»: le sillabe forti si sentono, quelle deboli si schiacciano e si perdono. Per questo la frase sembra un flusso senza pause tra le parole. Prova a ripetere frasi intere, non parola per parola: tieni il ritmo, accorcia le parole piccole (er, at, det, en) e mantieni forti i verbi e i nomi.",
    examples: ["Jeg hedder Marco.", "Hvad hedder du?", "Jeg kommer fra Italien.", "Det er ikke så svært."] },
];
const TIP_MAP = {}; TIPS.forEach(t => { TIP_MAP[t.id] = t; });

/* ---------------------------------------------------------
   Normalizzazione
   --------------------------------------------------------- */
const NUMS = ["nul", "en", "to", "tre", "fire", "fem", "seks", "syv", "otte", "ni", "ti", "elleve", "tolv", "tretten", "fjorten", "femten", "seksten", "sytten", "atten", "nitten", "tyve"];

function cleanToken(t) { return t.toLowerCase().replace(/[^a-z0-9æøåéèëüöäï]/g, ""); }
function normWord(t) {
  const c = cleanToken(t);
  if (/^\d+$/.test(c) && +c <= 20) return NUMS[+c];
  return c;
}
function tokenize(s) {
  return String(s == null ? "" : s).replace(/[’']/g, "").split(/\s+/).map(t => ({ raw: t.replace(/^[^\wæøåÆØÅ]+|[^\wæøåÆØÅ]+$/g, ""), n: normWord(t) })).filter(t => t.n);
}

/* ---------------------------------------------------------
   Chiave fonetica approssimata del danese
   --------------------------------------------------------- */
const V = "aeiouyæøåéəɐ";
const EXC = { det: "de", jeg: "jaj", og: "å", ikke: "ik", meget: "majet", nogle: "nåle", sige: "si", mig: "maj", dig: "daj", sig: "saj", ud: "u", hvad: "va", hvem: "vem", hvor: "vɐ" };
function phon(word) {
  let w = word.toLowerCase();
  if (EXC[w]) return EXC[w];
  w = w.replace(/[éèë]/g, "e").replace(/[üï]/g, "y").replace(/[öä]/g, "ø");
  w = w.replace(/^hv/, "v").replace(/^hj/, "j").replace(/^h(?=[aeiouyæøå])/, "h");
  w = w.replace(/aa/g, "å").replace(/ph/g, "f").replace(/ck/g, "k").replace(/ch/g, "sj").replace(/th/g, "t").replace(/qu/g, "kv").replace(/[cq]/g, "k").replace(/w/g, "v").replace(/z/g, "s").replace(/x/g, "ks");
  // -ig, -lig, -ge, g muta
  w = w.replace(/lig(?=$|e|t|s)/g, "li").replace(/ig(?=$|e|t|s)/g, "i").replace(/([aeiouyæøå])g(?=$)/g, "$1").replace(/([aeiouyæøå])g(?=e)/g, "$1");
  w = w.replace(/(.)\1+/g, "$1");               // doppie
  w = w.replace(/([lnr])d(?=$|[aeiouyæøå]|s|t)/g, "$1");  // d muta dopo l, n, r
  w = w.replace(/([aeiouyæøå])d(?=$|[aeiouyæøå]|s|t)/g, "$1"); // d molle
  w = w.replace(/rd$/, "r").replace(/nd$/, "n").replace(/ld$/, "l");
  w = w.replace(/er$/, "ɐ").replace(/e$/, "ə");  // schwa finali
  w = w.replace(/([aeiouyæøå])r(?=$|[^aeiouyæøåɐə])/g, "$1ɐ"); // r vocalizzata
  w = w.replace(/([^aeiouyæøåɐə])ə(?=[^aeiouyæøåɐə]|$)/g, "$1ə");
  return w;
}
// chiave grossolana: vocali in classi, schwa/r vocalizzata cadono
function coarse(k) {
  return k.replace(/[əɐ]/g, "").replace(/[yø]/g, "Y").replace(/[aæ]/g, "A").replace(/[oåu]/g, "O").replace(/[ei]/g, "I").replace(/[bp]/g, "P").replace(/[dt]/g, "T").replace(/[gk]/g, "K").replace(/[fv]/g, "F").replace(/(.)\1+/g, "$1");
}
function lev(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[n];
}
// "ok" | "near" | "miss" per due parole normalizzate non uguali
function similarity(a, b) {
  if (a === b) return "ok";
  const ka = phon(a), kb = phon(b);
  if (ka === kb) return "ok";
  const ca = coarse(ka), cb = coarse(kb);
  if (ca && ca === cb) return "near";
  const ml = Math.max(ka.length, kb.length);
  if (ml >= 3 && lev(ka, kb) / ml <= 0.34) return "near";
  if (ca && cb && Math.max(ca.length, cb.length) >= 3 && lev(ca, cb) / Math.max(ca.length, cb.length) <= 0.34) return "near";
  return "miss";
}
const SUBCOST = { ok: 0.1, near: 0.5, miss: 1 };

/* ---------------------------------------------------------
   Suggerimenti sui suoni difficili contenuti in una parola
   --------------------------------------------------------- */
function hintFor(w) {
  const x = w.toLowerCase();
  if (/^(det|jeg|og|meget|ikke|nogle|sige)$/.test(x)) return { tip: "scritte-dette", hint: "Questa parola si scrive in un modo ma si dice in un altro: ascoltala e ripetila come la senti." };
  if (/^hv|^hj/.test(x)) return { tip: "mute", hint: "La h iniziale non si sente: hv- suona come v, hj- come j." };
  if (/[øy]/.test(x)) return { tip: "vocali-oy", hint: "Attenzione alle vocali ø e y: non esistono in italiano." };
  if (/[lnr]d|[aeiouyæøå]d(?=$|[aeiouyæøå])/.test(x)) return { tip: "d-molle", hint: "La d è molle o muta: non pronunciarla come la d italiana." };
  if (/r/.test(x)) return { tip: "r", hint: "La r va in gola e dopo una vocale quasi sparisce." };
  if (/å|aa/.test(x)) return { tip: "a-o", hint: "La å si dice con la bocca tonda, come una o aperta." };
  if (/æ/.test(x)) return { tip: "ae-e-a", hint: "La æ è una e molto aperta." };
  if (/(ig|lig|g)$/.test(x) || /([aeiouyæøå])g(?=e)/.test(x)) return { tip: "mute", hint: "La g finale o davanti a -e è debole o muta." };
  if (/(er|e)$/.test(x)) return { tip: "schwa", hint: "La -e o -er finale è una vocale debolissima." };
  if (/^[a-zæøå]{2,4}$/.test(x)) return { tip: "stod", hint: "Nelle parole corte può esserci lo stød: ascolta bene la vocale." };
  return { tip: "ritmo", hint: "Ascolta la parola nella frase e ripetila senza fermarti troppo." };
}

/* ---------------------------------------------------------
   Confronto
   --------------------------------------------------------- */
function compare(atteso, riconosciuto) {
  const A = tokenize(atteso), B = tokenize(riconosciuto);
  const n = A.length, m = B.length, GAP = 0.9;
  const sim = Array.from({ length: n }, () => new Array(m));
  const D = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  const T = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0)); // 0 diag, 1 su (atteso senza controparte), 2 sinistra (extra)
  for (let i = 1; i <= n; i++) { D[i][0] = i * GAP; T[i][0] = 1; }
  for (let j = 1; j <= m; j++) { D[0][j] = j * GAP; T[0][j] = 2; }
  for (let i = 1; i <= n; i++) for (let j = 1; j <= m; j++) {
    const s = sim[i - 1][j - 1] = A[i - 1].n === B[j - 1].n ? "ok" : similarity(A[i - 1].n, B[j - 1].n);
    const c = A[i - 1].n === B[j - 1].n ? 0 : SUBCOST[s];
    const d = D[i - 1][j - 1] + c, u = D[i - 1][j] + GAP, l = D[i][j - 1] + GAP;
    if (d <= u && d <= l) { D[i][j] = d; T[i][j] = 0; } else if (u <= l) { D[i][j] = u; T[i][j] = 1; } else { D[i][j] = l; T[i][j] = 2; }
  }
  const out = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    const t = T[i][j];
    if (i > 0 && j > 0 && t === 0) { out.push({ w: A[i - 1].raw, status: sim[i - 1][j - 1], heard: B[j - 1].raw }); i--; j--; }
    else if (i > 0 && (j === 0 || t === 1)) { out.push({ w: A[i - 1].raw, status: "miss", heard: "" }); i--; }
    else { out.push({ w: B[j - 1].raw, status: "extra", heard: B[j - 1].raw }); j--; }
  }
  out.reverse();
  let pts = 0; const tipIds = [];
  out.forEach(o => {
    if (o.status === "ok") pts += 1; else if (o.status === "near") pts += 0.5;
    if (o.status === "near" || o.status === "miss") {
      const h = hintFor(o.w);
      o.hint_it = o.heard ? `${h.hint} Il riconoscimento ha capito «${o.heard}».` : `${h.hint} Questa parola non è stata riconosciuta.`;
      if (!tipIds.includes(h.tip)) tipIds.push(h.tip);
    }
  });
  const score = n ? Math.min(1, pts / n) : 0;
  const hasProblem = out.some(o => o.status !== "ok");
  if (hasProblem && !tipIds.length) tipIds.push("ritmo");
  if (hasProblem && tipIds.length === 0) tipIds.push("ritmo");
  const tips = tipIds.slice(0, 3).map(id => TIP_MAP[id]).filter(Boolean);
  return { score, words: out, tips, disclaimer_it: DISCLAIMER };
}

const api = { compare, TIPS, phon, normalize: s => tokenize(s).map(t => t.n).join(" "), DISCLAIMER };
if (typeof module !== "undefined" && module.exports) module.exports = api;
if (root) root.DanskPronuncia = api;
})(typeof window !== "undefined" ? window : null);
