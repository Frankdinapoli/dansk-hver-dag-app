/* Dansk hver dag — archivio dei progressi: lettura, migrazioni versionate, unione per la sincronizzazione.
   Funziona nel browser (window.DanskStore) e in Node (require) per i test: tools/test-store.js

   Regola: la chiave vecchia "dansk-hver-dag.v2" non viene MAI modificata né cancellata.
   Alla prima apertura della v3 il suo contenuto viene copiato, migrato e salvato in "dansk-hver-dag.v3".
   Per aggiungere una versione: aumenta CURRENT e aggiungi MIGRATIONS[n] (da n a n+1), con un test. */
(function (root) {
  "use strict";
  const KEY_V2 = "dansk-hver-dag.v2";
  const KEY = "dansk-hver-dag.v3";
  const CURRENT = 3;

  const DEFAULTS = {
    v: CURRENT, cards: {}, units: {}, exams: {}, streak: { last: null, count: 0 }, hist: {}, newDay: { date: null, n: 0 },
    dailyNew: 10, dir: "da", rate: 0.9, voice: "", autoplay: true, route: { tab: "oggi" },
    goal: { answers: 30, talkMin: 10 },   // obiettivi del piano giornaliero
    talkDay: { date: null, sec: 0 },      // secondi di conversazione di oggi
    placement: null,                      // { level, date } dal test di livello
    profile: null,                        // memoria dell'allievo (la gestisce js/ext/samtale.js)
    custom: {}, updatedAt: 0, settingsAt: 0, resetAt: 0,
  };
  const clone = o => JSON.parse(JSON.stringify(o));
  const isObj = o => !!o && typeof o === "object" && !Array.isArray(o);

  /* Migrazioni: MIGRATIONS[n] porta lo stato dalla versione n alla n+1. Non devono mai perdere dati. */
  const MIGRATIONS = {
    2(s) {
      s.v = 3;
      s.goal = isObj(s.goal) ? s.goal : { answers: 30, talkMin: 10 };
      s.talkDay = isObj(s.talkDay) ? s.talkDay : { date: null, sec: 0 };
      if (s.placement === undefined) s.placement = null;
      if (s.profile === undefined) s.profile = null;
      // La conversazione in corso della v2 ha un formato diverso: si chiude, ma le sue correzioni restano in un report minimo.
      if (isObj(s.tutor)) {
        const c = s.tutor.current;
        if (isObj(c) && Array.isArray(c.corrections) && c.corrections.length) {
          s.tutor.reports = Array.isArray(s.tutor.reports) ? s.tutor.reports : [];
          s.tutor.reports.unshift({
            id: c.id || Date.now(), date: c.started || Date.now(), level: c.level || "A1", topic: c.topic_now || c.topic || "Conversazione (versione precedente)",
            messages: Array.isArray(c.messages) ? c.messages.filter(m => m && m.from === "me").length : 0, score: null, estimate: "", summary: "",
            strengths: [], patterns: [], pronunciation: [], next: [], corrections: c.corrections, words: Array.isArray(c.words) ? c.words : [],
          });
        }
        s.tutor.current = null;
      }
      s.route = { tab: "oggi" };
      return s;
    },
  };

  // Rende lo stato sicuro da usare: tipi giusti, campi mancanti aggiunti. Non toglie mai campi sconosciuti.
  function normalize(s) {
    const out = Object.assign(clone(DEFAULTS), isObj(s) ? s : {});
    for (const k of ["cards", "units", "exams", "hist", "custom"]) if (!isObj(out[k])) out[k] = {};
    if (!isObj(out.streak)) out.streak = { last: null, count: 0 };
    if (!isObj(out.newDay)) out.newDay = { date: null, n: 0 };
    if (!isObj(out.goal)) out.goal = clone(DEFAULTS.goal);
    out.goal.answers = Math.max(5, Math.min(300, +out.goal.answers || 30));
    out.goal.talkMin = Math.max(0, Math.min(120, out.goal.talkMin == null ? 10 : +out.goal.talkMin || 0));
    if (!isObj(out.talkDay)) out.talkDay = { date: null, sec: 0 };
    if (!isObj(out.route)) out.route = { tab: "oggi" };
    for (const id of Object.keys(out.cards)) {
      const c = out.cards[id];
      if (!isObj(c)) { delete out.cards[id]; continue; }
      c.box = Math.max(0, Math.min(8, +c.box || 0)); c.due = +c.due || 0; c.ok = +c.ok || 0; c.ko = +c.ko || 0;
    }
    return out;
  }

  function migrate(s) {
    s = isObj(s) ? clone(s) : {};
    let v = +s.v || 2;                    // gli stati senza versione sono della v2
    if (v > CURRENT) return normalize(s); // stato di una versione più nuova: si usa così com'è, senza toccarlo
    let guard = 0;
    while (v < CURRENT && guard++ < 20) {
      const step = MIGRATIONS[v];
      if (!step) break;
      s = step(s) || s; v = +s.v || v + 1;
    }
    s.v = Math.max(v, +s.v || 0);
    return normalize(s);
  }

  /* load(storage): legge la v3; se manca, copia e migra la v2 (che resta intatta). */
  function load(storage) {
    let raw = null, from = "new";
    try { raw = storage.getItem(KEY); } catch (e) {}
    if (raw) {
      try { return { state: migrate(JSON.parse(raw)), from: "v3" }; } catch (e) { /* v3 illeggibile: provo la v2 qui sotto */ from = "v3-corrupt"; try { storage.setItem(KEY + ".rotto." + Date.now(), raw); } catch (e2) {} }
    }
    let old = null;
    try { old = storage.getItem(KEY_V2); } catch (e) {}
    if (old) {
      try {
        const state = migrate(JSON.parse(old));
        try { storage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
        return { state, from: from === "v3-corrupt" ? "v2-after-corrupt" : "v2" };
      } catch (e) {}
    }
    return { state: normalize({}), from };
  }

  function save(storage, state) {
    try { storage.setItem(KEY, JSON.stringify(state)); return true; } catch (e) { return false; }
  }

  // Backup incollato dall'utente (di qualsiasi versione): lo valida e lo migra. Lancia un errore se non è un backup.
  function fromBackup(text) {
    const d = typeof text === "string" ? JSON.parse(text) : text;
    if (!isObj(d) || !isObj(d.cards)) throw new Error("backup non valido");
    return migrate(d);
  }

  /* Unione di due stati (questo dispositivo + copia sincronizzata). Non perde progressi:
     per ogni dato tiene il valore più avanzato. Se uno dei due è stato azzerato dopo, vince quello. */
  const maxNum = (a, b) => (a == null ? b : b == null ? a : Math.max(a, b));
  function mergeMaps(a, b, pick) {
    const out = {};
    for (const k of new Set([...Object.keys(a || {}), ...Object.keys(b || {})])) {
      const x = a ? a[k] : undefined, y = b ? b[k] : undefined;
      out[k] = x === undefined ? clone(y) : y === undefined ? clone(x) : pick(x, y);
    }
    return out;
  }
  function mergeLists(a, b, key, sort, cap) {
    const seen = new Map();
    for (const x of [...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])]) { if (x == null) continue; const k = key(x); if (!seen.has(k)) seen.set(k, x); }
    let out = [...seen.values()];
    if (sort) out.sort(sort);
    return cap ? out.slice(0, cap) : out;
  }
  // Preferenze senza data: se i due dispositivi hanno valori diversi sceglie sempre lo stesso (ordine fisso),
  // così unire A con B e B con A dà lo stesso risultato e i dispositivi non si rimandano i dati all'infinito.
  const stable = (x, y) => { const jx = JSON.stringify(x), jy = JSON.stringify(y); return clone(jx >= jy ? x : y); };
  function merge(local, remote) {
    const a = migrate(local), b = migrate(remote);
    if ((a.resetAt || 0) !== (b.resetAt || 0)) {
      // uno dei due è stato azzerato più di recente: i dati precedenti all'azzeramento non tornano
      const newer = (a.resetAt || 0) > (b.resetAt || 0) ? a : b, older = newer === a ? b : a;
      if ((older.updatedAt || 0) <= (newer.resetAt || 0)) return Object.assign(clone(newer), { voice: a.voice, route: a.route });
    }
    const out = clone(a);
    out.cards = mergeMaps(a.cards, b.cards, (x, y) => {
      const nx = (x.ok || 0) + (x.ko || 0), ny = (y.ok || 0) + (y.ko || 0);
      return clone(nx !== ny ? (nx > ny ? x : y) : ((x.due || 0) >= (y.due || 0) ? x : y));
    });
    out.units = mergeMaps(a.units, b.units, (x, y) => {
      const u = Object.assign({}, y, x);
      const st = [x.started, y.started].filter(Boolean); if (st.length) u.started = Math.min(...st);
      for (const k of ["text", "ex"]) { const m = maxNum(x[k], y[k]); if (m != null) u[k] = m; }
      if (x.gram || y.gram) u.gram = true;
      return u;
    });
    out.exams = mergeMaps(a.exams, b.exams, (x, y) => Math.max(+x || 0, +y || 0));
    out.hist = mergeMaps(a.hist, b.hist, (x, y) => Math.max(+x || 0, +y || 0));
    out.custom = mergeMaps(a.custom, b.custom, (x, y) => clone((x.added || 0) <= (y.added || 0) ? x : y));
    const sa = a.streak || {}, sb = b.streak || {};
    out.streak = clone(String(sa.last || "") === String(sb.last || "") ? ((sa.count || 0) >= (sb.count || 0) ? sa : sb) : (String(sa.last || "") > String(sb.last || "") ? sa : sb));
    const da = a.newDay || {}, db = b.newDay || {};
    out.newDay = clone(da.date === db.date ? ((da.n || 0) >= (db.n || 0) ? da : db) : (String(da.date || "") > String(db.date || "") ? da : db));
    const ta = a.talkDay || {}, tb = b.talkDay || {};
    out.talkDay = clone(ta.date === tb.date ? ((ta.sec || 0) >= (tb.sec || 0) ? ta : tb) : (String(ta.date || "") > String(tb.date || "") ? ta : tb));
    // impostazioni di studio: le più recenti; la voce resta quella del dispositivo
    if ((b.settingsAt || 0) > (a.settingsAt || 0)) for (const k of ["dailyNew", "dir", "rate", "autoplay", "goal", "settingsAt", "hideIt", "trainScope"]) if (b[k] !== undefined) out[k] = clone(b[k]);
    const pa = a.placement, pb = b.placement;
    out.placement = clone(!pa ? pb : !pb ? pa : ((pa.date || 0) >= (pb.date || 0) ? pa : pb)) || null;
    const fa = a.profile, fb = b.profile;
    out.profile = clone(!fa ? fb : !fb ? fa : ((fa.updated || 0) >= (fb.updated || 0) ? fa : fb)) || null;
    if (isObj(a.tutor) || isObj(b.tutor)) {
      const xa = a.tutor || {}, xb = b.tutor || {};
      out.tutor = mergeMaps(xa, xb, stable);
      out.tutor.reports = mergeLists(xa.reports, xb.reports, r => String(r.id), (x, y) => (y.date || 0) - (x.date || 0), 30);
      out.tutor.current = xa.current || null;   // la conversazione in corso resta sul dispositivo
    }
    if (Array.isArray(a.diary) || Array.isArray(b.diary)) out.diary = mergeLists(a.diary, b.diary, e => String(e.id || e.date || JSON.stringify(e).slice(0, 80)), (x, y) => (y.date || y.id || 0) - (x.date || x.id || 0));
    if (isObj(b.lab) || isObj(a.lab)) out.lab = mergeMaps(a.lab || {}, b.lab || {}, stable);
    out.resetAt = Math.max(a.resetAt || 0, b.resetAt || 0);
    out.updatedAt = Math.max(a.updatedAt || 0, b.updatedAt || 0);
    out.voice = a.voice; out.route = a.route;
    return normalize(out);
  }

  const api = { KEY, KEY_V2, CURRENT, DEFAULTS, MIGRATIONS, migrate, normalize, load, save, fromBackup, merge };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  else root.DanskStore = api;
})(typeof window !== "undefined" ? window : globalThis);
