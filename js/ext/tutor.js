/* Conversa: conversazione scritta e a voce con un interlocutore virtuale.
   Scenari con missione, tre modalità (guidata, libera, esame), una correzione per turno, memoria dell'allievo,
   report calcolato in locale, dialoghi a copione quando non c'è nessun motore IA.
   Contratti: docs/piano-v3.md §3.2 (DanskAI), §3.4 (DanskVoce), §3.5–3.6 (dati). */
(window.DANSK_EXT ||= []).push(function (A) {
  "use strict";
  const { $, $$, esc, hl, toast } = A;
  const V = () => window.DanskVoce || null;
  const LEVELS = A.LEVELS || ["A1", "A2", "B1", "B2", "C1"];
  const MAX_REPORTS = 30, KEEP_TURNS = 8, AUTO_SEND_MS = 2500;
  const str = v => typeof v === "string" ? v.trim() : "";
  const arr = v => Array.isArray(v) ? v : [];
  const words = s => String(s || "").trim().split(/\s+/).filter(Boolean);
  const reduced = () => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };

  /* ---------- Icone (SVG originali, tratto uniforme) ---------- */
  const IC = {
    bubble: '<path d="M21 11.5a8 8 0 0 1-11.7 7.1L4 20l1.3-4.6A8 8 0 1 1 21 11.5z"/>',
    cup: '<path d="M5 8h11v5a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5z"/><path d="M16 9.5h1.5a2.5 2.5 0 0 1 0 5H16M8 3.5v2M12 3.5v2"/>',
    cart: '<path d="M3 4h2.5l2.2 10.5h9.6L19.5 7H7"/><circle cx="9" cy="19" r="1.4"/><circle cx="16.5" cy="19" r="1.4"/>',
    train: '<rect x="6" y="3.5" width="12" height="13" rx="3"/><path d="M6 11h12M9 20l1.5-3.5M15 20l-1.5-3.5"/><circle cx="9.5" cy="14" r=".6"/><circle cx="14.5" cy="14" r=".6"/>',
    cross: '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8.5v7M8.5 12h7"/>',
    house: '<path d="M4 11 12 4.5 20 11"/><path d="M6 10v9.5h12V10"/>',
    bank: '<path d="M4 9.5 12 4.5l8 5M5.5 9.5v8M10 9.5v8M14 9.5v8M18.5 9.5v8M4 19.5h16"/>',
    cap: '<path d="M2.5 9.5 12 5l9.5 4.5L12 14z"/><path d="M6.5 11.8v4c1.5 1.4 3.4 2.2 5.5 2.2s4-.8 5.5-2.2v-4"/>',
    case: '<rect x="3.5" y="7.5" width="17" height="12" rx="2.5"/><path d="M9 7.5V6a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 6v1.5M3.5 13h17"/>',
    phone: '<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"/>',
    people: '<circle cx="9" cy="8.5" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="16.5" cy="9.5" r="2.3"/><path d="M16 14.2a4.5 4.5 0 0 1 4.5 4.5"/>',
    map: '<path d="M12 21s6.5-5.6 6.5-10.5a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.3"/>',
    seal: '<circle cx="12" cy="10" r="5.5"/><path d="m9 14.5-1.5 6 4.5-2.5 4.5 2.5-1.5-6"/>',
    mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11.500a6.5 6.5 0 0 0 13 0M12 18v3"/>',
    send: '<path d="M12 19V6M6.5 11.5 12 6l5.5 5.5"/>',
    keyboard: '<rect x="2.5" y="6" width="19" height="12" rx="2.5"/><path d="M6.5 10h.01M10 10h.01M13.5 10h.01M17 10h.01M7.5 14h9"/>',
    cc: '<rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="M7 12h4M13.5 12H17M7 15h7"/>',
    end: '<path d="M4 14.500c0-5 16-5 16 0v1.300a1 1 0 0 1-1.2 1l-3-.600a1 1 0 0 1-.800-1v-1.500a11 11 0 0 0-6 0v1.500a1 1 0 0 1-.800 1l-3 .600a1 1 0 0 1-1.2-1z"/>',
    back: '<path d="M14.5 5.5 8 12l6.5 6.5"/>',
    chev: '<path d="m9.5 6 6 6-6 6"/>',
    bulb: '<path d="M9 17.500h6M10 20.500h4M8 14a6 6 0 1 1 8 0c-.700.7-1 1.3-1 2H9c0-.700-.300-1.3-1-2z"/>',
    speaker: '<path d="M11 5.5 6.5 9H3v6h3.500L11 18.500z"/><path d="M15 9a4.5 4.5 0 0 1 0 6M18 6.500a8.5 8.5 0 0 1 0 11"/>',
    check: '<path d="m5.5 12.5 4.5 4.5 8.5-10"/>',
    plus: '<path d="M12 5.500v13M5.5 12h13"/>',
    stop: '<rect x="7" y="7" width="10" height="10" rx="2.5"/>',
    flag: '<path d="M6 21V4M6 4.500h11l-2 4 2 4H6"/>',
    book: '<path d="M5 4.500h11a3 3 0 0 1 3 3v12H8a3 3 0 0 1-3-3z"/><path d="M9 9h6"/>',
  };
  const ICON_ALIAS = { coffee: "cup", cafe: "cup", shop: "cart", bag: "cart", supermarket: "cart", bus: "train", metro: "train", transport: "train", doctor: "cross", health: "cross",
    home: "house", rent: "house", university: "cap", school: "cap", work: "case", job: "case", briefcase: "case", call: "phone", friends: "people", person: "people", meeting: "people", debate: "people",
    pin: "map", directions: "map", exam: "seal", star: "seal", building: "bank", graduation: "cap", globe: "map", letter: "book", news: "book", chat: "bubble" };
  const ic = (name, cls = "") => `<svg class="sm-ic ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[name] || IC[ICON_ALIAS[name]] || IC.bubble}</svg>`;

  /* ---------- Categorie di errore ---------- */
  const CATS = {
    ordine: { label: "Ordine delle parole", w: 5, units: ["a1-07", "a1-10", "a2-08", "b2-10"] },
    verbo: { label: "Forma del verbo", w: 5, units: ["a1-02", "a2-01", "a2-02", "b1-02"] },
    lessico: { label: "Parola sbagliata", w: 4, units: [] },
    "forma-nome": { label: "Forma del sostantivo", w: 3, units: ["a1-05", "a1-06", "a2-05"] },
    genere: { label: "Genere en/et", w: 3, units: ["a1-03", "a1-09"] },
    preposizione: { label: "Preposizione", w: 3, units: ["a1-08", "a2-10", "b1-06"] },
    pronuncia: { label: "Pronuncia", w: 2, units: [] },
    naturalezza: { label: "Naturalezza", w: 2, units: ["b1-04", "b2-08"] },
    ortografia: { label: "Ortografia", w: 1, units: ["a1-01"] },
    altro: { label: "Altro", w: 2, units: [] },
  };
  const CAT_ALIAS = { "ordine delle parole": "ordine", "word order": "ordine", grammatica: "verbo", grammar: "verbo", gender: "genere", "forma nome": "forma-nome", nome: "forma-nome", sostantivo: "forma-nome",
    verb: "verbo", preposizioni: "preposizione", preposition: "preposizione", vocabolario: "lessico", vocabulary: "lessico", spelling: "ortografia", pronunciation: "pronuncia", stile: "naturalezza", style: "naturalezza" };
  const catOf = s => { const k = str(s).toLowerCase(); return CATS[k] ? k : CAT_ALIAS[k] || "naturalezza"; };
  function unitFor(cat, level) {
    const us = (CATS[cat]?.units || []).filter(id => A.UMAP && A.UMAP.has(id)).map(id => A.UMAP.get(id));
    if (!us.length) return null;
    const li = LEVELS.indexOf(level);
    const ok = us.filter(u => LEVELS.indexOf(u.level) <= li);
    return (ok.length ? ok[ok.length - 1] : us[0]);
  }

  /* ---------- Dati: scenari, esami, copioni ---------- */
  const BUILTIN_SCENARI = [
    { id: "x-a1-cafe", level: "A1", title: "Al caffè", icon: "cup", npc: { name: "Freja", role: "barista in un caffè di Nørrebro" }, setting: "Sei al banco di un caffè a Copenaghen.",
      mission: "Ordina qualcosa da bere e chiedi quanto costa.", checks: ["saluta", "ordina da bere", "chiede il prezzo"], functions: ["ordinare", "chiedere il prezzo"],
      vocab: ["en kaffe = un caffè", "en te = un tè", "en kage = un dolce", "hvad koster … ? = quanto costa … ?", "tak = grazie"], phrases: ["Jeg vil gerne have en kaffe. = Vorrei un caffè.", "Hvad koster det? = Quanto costa?", "Tak for det. = Grazie."],
      opener: "Hej! Hvad kunne du tænke dig?", opener_it: "Ciao! Cosa desideri?" },
    { id: "x-a2-laege", level: "A2", title: "Dal medico", icon: "cross", npc: { name: "Henrik", role: "medico di base" }, setting: "Sei dal tuo medico perché non stai bene.",
      mission: "Spiega cosa ti senti e da quanto tempo.", checks: ["dice il sintomo", "dice da quanto tempo", "chiede cosa fare"], functions: ["descrivere sintomi", "chiedere consiglio"],
      vocab: ["ondt i halsen = mal di gola", "feber = febbre", "hoste = tosse", "siden i går = da ieri"], phrases: ["Jeg har ondt i halsen. = Ho mal di gola.", "Jeg har haft det i tre dage. = Ce l'ho da tre giorni.", "Hvad skal jeg gøre? = Cosa devo fare?"],
      opener: "Goddag. Hvad kan jeg hjælpe dig med?", opener_it: "Buongiorno. In cosa posso aiutarti?" },
    { id: "x-b1-bolig", level: "B1", title: "Visita a una stanza in affitto", icon: "house", npc: { name: "Karen", role: "proprietaria di un appartamento a Vesterbro" }, setting: "Visiti una stanza in affitto e parli con la proprietaria.",
      mission: "Chiedi dell'affitto, del deposito e quando puoi entrare.", checks: ["chiede l'affitto", "chiede il deposito", "chiede la data di ingresso"], functions: ["chiedere informazioni", "trattare"],
      vocab: ["husleje = affitto", "depositum = deposito", "at flytte ind = trasferirsi", "forbrug = consumi"], phrases: ["Hvad er huslejen om måneden? = Quant'è l'affitto al mese?", "Er forbrug inkluderet? = I consumi sono inclusi?", "Hvornår kan jeg flytte ind? = Quando posso entrare?"],
      opener: "Hej og velkommen! Kom indenfor. Skal jeg vise dig værelset?", opener_it: "Ciao e benvenuto! Entra pure. Ti mostro la stanza?" },
  ];
  const FREE = { id: "libera", level: null, title: "Conversazione libera", icon: "bubble", npc: { name: "Mette", role: "un'amica danese paziente" }, setting: "Chiacchierata libera: l'argomento lo scegli tu.",
    mission: "Parla di quello che vuoi: la tua giornata, lo studio, il lavoro, il fine settimana.", checks: [], functions: [], vocab: [], phrases: ["Jeg vil gerne snakke om … = Vorrei parlare di …", "Hvordan siger man … på dansk? = Come si dice … in danese?", "Kan du sige det igen? = Puoi ripeterlo?"],
    opener: "Hej! Hvad vil du gerne snakke om i dag?", opener_it: "Ciao! Di cosa ti va di parlare oggi?" };
  // Simulazioni d'esame orale: struttura da docs/esami-danesi.md, temi originali. Non sono prove ufficiali.
  const EXAMS = [
    { id: "exam-pd2", level: "B1", title: "Prøve i Dansk 2 · orale", icon: "seal", exam: { name: "Prøve i Dansk 2", minutes: 10, phases: "Phase 1: ask the candidate to talk for about 1.5 minutes about the prepared everyday topic, then 3-4 follow-up questions. Phase 2: describe an everyday picture situation in words (invent one: e.g. a family shopping at the supermarket) and ask the candidate to comment and discuss it." },
      npc: { name: "Birgit", role: "esaminatrice" }, setting: "Simulazione dell'orale di Prøve i Dansk 2: un tema quotidiano preparato da te, poi una situazione da commentare.",
      mission: "Presenta il tuo tema (circa un minuto e mezzo), rispondi alle domande e commenta la situazione proposta.", checks: ["presenta il tema", "risponde alle domande", "commenta la situazione"], functions: ["raccontare", "descrivere", "dare un'opinione"],
      topics: ["Min bolig", "Min fritid", "Mit arbejde eller mit studie", "Mad og indkøb"], vocab: [], phrases: [], opener: "Goddag og velkommen til prøven. Hvilket emne har du forberedt?", opener_it: "Buongiorno e benvenuto all'esame. Quale tema hai preparato?" },
    { id: "exam-pd3", level: "B2", title: "Prøve i Dansk 3 · orale", icon: "seal", exam: { name: "Prøve i Dansk 3", minutes: 10, phases: "Delprøve 1 (about 5 min): the candidate presents a prepared social topic for about 2 minutes; then ask follow-up questions that require elaborating, justifying and taking a position. Delprøve 2 (about 5 min): announce one NEW unknown topic; ask first about a concrete personal aspect, then a more general societal one, asking the candidate to be precise." },
      npc: { name: "Birgit", role: "esaminatrice" }, setting: "Simulazione dell'orale di Prøve i Dansk 3: due parti da circa cinque minuti, davanti a esaminatrice e censore.",
      mission: "Presenta il tema preparato (circa due minuti), motiva le tue opinioni, poi affronta un tema nuovo.", checks: ["presenta il tema", "motiva e prende posizione", "affronta il tema nuovo"], functions: ["presentare", "argomentare", "precisare"],
      topics: ["Balancen mellem arbejde og fritid", "Unge og sociale medier", "Boligmangel i de store byer", "Frivilligt arbejde"], vocab: [], phrases: [], opener: "Goddag og velkommen. Vi begynder med delprøve 1. Hvilket emne skal du fortælle om?", opener_it: "Buongiorno e benvenuto. Cominciamo con la prima parte. Di quale tema ci parli?" },
    { id: "exam-sp", level: "C1", title: "Studieprøven · orale", icon: "seal", exam: { name: "Studieprøven", minutes: 20, phases: "First a short self-introduction (not assessed). Then the candidate gives a coherent presentation of about 5 minutes on one complex social topic. Then about 15 minutes of conversation: ask to elaborate, give examples, causes, predictions, pros and cons and a personal position. Academic, precise register." },
      npc: { name: "Birgit", role: "esaminatrice" }, setting: "Simulazione dell'orale di Studieprøven: presentazione di circa cinque minuti su un tema complesso, poi conversazione.",
      mission: "Presentati, esponi il tema in modo coerente, poi discuti cause, conseguenze e la tua posizione.", checks: ["si presenta", "espone il tema", "discute cause e conseguenze", "prende posizione"], functions: ["esporre", "argomentare", "discutere"],
      topics: ["Kunstig intelligens i uddannelse", "Klimaforandringer og personligt ansvar", "Ulighed i sundhed", "Internationale studerende i Danmark"], vocab: [], phrases: [], opener: "Goddag og velkommen til Studieprøven. Vil du begynde med kort at præsentere dig selv?", opener_it: "Buongiorno e benvenuto allo Studieprøven. Vuoi cominciare presentandoti brevemente?" },
  ];
  const BUILTIN_DIALOGHI = [{ id: "x-off-a1-cafe", scenario: "x-a1-cafe", level: "A1", title: "Al caffè", start: "n1", nodes: {
    n1: { npc: "Hej! Hvad kunne du tænke dig?", it: "Ciao! Cosa desideri?", hint: "Ordina un caffè.", replies: [{ say: ["Jeg vil gerne have en kaffe.", "En kaffe, tak."], it: "Vorrei un caffè.", next: "n2" }, { say: ["Jeg vil gerne have en te.", "En te, tak."], it: "Vorrei un tè.", next: "n2" }],
      wrong: [{ say: "Jeg vil have gerne en kaffe.", why: "«gerne» va subito dopo il verbo coniugato: vil gerne have." }], fallback: "n1b" },
    n1b: { npc: "Undskyld, hvad vil du gerne have? Kaffe eller te?", it: "Scusa, cosa desideri? Caffè o tè?", hint: "Rispondi: En kaffe, tak.", replies: [{ say: ["En kaffe, tak.", "Kaffe, tak.", "Jeg vil gerne have en kaffe."], it: "Un caffè, grazie.", next: "n2" }, { say: ["En te, tak.", "Te, tak."], it: "Un tè, grazie.", next: "n2" }] },
    n2: { npc: "Selvfølgelig. Ellers andet?", it: "Certo. Altro?", hint: "Chiedi quanto costa.", replies: [{ say: ["Nej tak. Hvad koster det?", "Hvad koster det?"], it: "No grazie. Quanto costa?", next: "n3" }],
      wrong: [{ say: "Nej tak. Hvad det koster?", why: "Nelle domande il verbo viene prima del soggetto: Hvad koster det?" }] },
    n3: { npc: "Det bliver 35 kroner.", it: "Fanno 35 corone.", hint: "Ringrazia e saluta.", replies: [{ say: ["Tak for det. Hav en god dag!", "Tak. Hej hej!", "Mange tak."], it: "Grazie. Buona giornata!", next: "fine" }] },
    fine: { npc: "Tak i lige måde. Hej hej!", it: "Grazie, altrettanto. Ciao ciao!", end: true, recap: ["Jeg vil gerne have … = Vorrei …", "Hvad koster det? = Quanto costa?", "Tak i lige måde. = Grazie, altrettanto."] },
  } }];
  const validSc = s => s && typeof s === "object" && str(s.id) && str(s.title) && str(s.opener) && s.npc && str(s.npc.name);
  function scenarios() {
    const ext = arr(window.DANSK_SCENARI).filter(validSc);
    return (ext.length ? ext : BUILTIN_SCENARI).filter(s => !s.exam);
  }
  // Negli scenari d'esame `exam` può essere un oggetto { name, minutes, phases } oppure solo la sigla (es. "PD3")
  const EXAM_NAME = { PD1: "Prøve i Dansk 1", PD2: "Prøve i Dansk 2", PD3: "Prøve i Dansk 3", SP: "Studieprøven", STUDIEPROEVEN: "Studieprøven" };
  function normExam(s) {
    if (!s.exam || typeof s.exam === "object") return s;
    const key = String(s.exam).toUpperCase();
    return Object.assign({}, s, { exam: { name: EXAM_NAME[key] || String(s.exam), minutes: key === "SP" || /STUDIE/.test(key) ? 20 : 10, phases: "Follow exactly these phases, one at a time, announcing each briefly in Danish: " + (s.mission || "") } });
  }
  const exams = () => { const ext = arr(window.DANSK_SCENARI).filter(s => validSc(s) && s.exam).map(normExam); return ext.length ? ext : EXAMS; };
  const errText = e => { let t = null; try { t = window.DanskAI && window.DanskAI.explain ? window.DanskAI.explain(e) : null; } catch (x) {} return t || A.sampleError(e); };
  function dialogs() {
    const ext = arr(window.DANSK_DIALOGHI).filter(d => d && d.nodes && d.start && d.nodes[d.start]);
    return ext.length ? ext : BUILTIN_DIALOGHI;
  }
  const pair = s => { const k = String(s).indexOf(" = "); return k >= 0 ? { da: s.slice(0, k).trim(), it: s.slice(k + 3).trim() } : { da: String(s).trim(), it: "" }; };

  /* ---------- Stato ---------- */
  function T() {
    const S = A.state();
    if (!S.tutor || typeof S.tutor !== "object") S.tutor = {};
    const t = S.tutor;
    if (!Array.isArray(t.reports)) t.reports = [];
    if (t.current && t.current.v !== 3) t.current = null;
    if (t.mode == null) t.mode = "guided";
    if (t.subs == null) t.subs = true;
    return t;
  }
  function P() {
    const S = A.state();
    if (!S.profile || typeof S.profile !== "object") S.profile = { v: 1, updated: 0, errors: {}, pat: {}, words: [], scenarios: {}, minutes: 0, sessions: 0, level: {} };
    const p = S.profile;
    for (const k of ["errors", "pat", "scenarios", "level"]) if (!p[k] || typeof p[k] !== "object") p[k] = {};
    if (!Array.isArray(p.words)) p.words = [];
    return p;
  }
  const topCats = (p, n = 3) => Object.entries(p.errors).filter(([, e]) => e.n >= 2).sort((a, b) => b[1].n * (CATS[b[0]]?.w || 1) - a[1].n * (CATS[a[0]]?.w || 1)).slice(0, n);
  // Riassunto del profilo per l'IA: al massimo 500 caratteri
  function profileSummary() {
    const p = P(), parts = [];
    const est = p.level.write?.est || p.level.speak?.est;
    if (est) parts.push(`estimated level ${est}`);
    if (p.sessions) parts.push(`${p.sessions} past sessions`);
    const top = topCats(p);
    if (top.length) parts.push("recurring errors: " + top.map(([c, e]) => { const x = e.ex && e.ex[0]; return `${c}${x ? ` (e.g. "${x.w}" → "${x.r}")` : ""}`; }).join("; "));
    if (p.words.length) parts.push("recently learned: " + p.words.slice(0, 8).map(w => w.da).join(", "));
    return (parts.join(". ") || "new learner, no history yet").slice(0, 500);
  }
  // Registra una correzione nel profilo; se la stessa forma giusta torna in turni diversi diventa una scheda di ripasso
  function recordError(c, x, turn) {
    const p = P(), cat = x.cat;
    const e = p.errors[cat] ||= { n: 0, last: 0, ex: [] };
    e.n++; e.last = Date.now();
    e.ex.unshift({ w: x.wrong.slice(0, 80), r: x.right.slice(0, 80), why: (x.why || "").slice(0, 140), t: Date.now() }); e.ex = e.ex.slice(0, 5);
    const key = A.norm(x.right).slice(0, 60);
    if (key) {
      const pt = p.pat[key] ||= { n: 0, cat, turns: [] };
      const mark = c.id + ":" + turn;
      if (!pt.turns.includes(mark)) { pt.turns.push(mark); pt.turns = pt.turns.slice(-4); pt.n++; }
      if (pt.n >= 2 && !pt.carded) {
        pt.carded = true;
        const S = A.state(), id = "p:" + A.norm(x.right);
        if (!(S.custom && S.custom[id])) {
          const ok = addCardQuiet({ da: x.right, it: x.right_it || x.why || CATS[cat].label, note: `${CATS[cat].label}: ${x.why || ""}`.trim(), src: "conversa" });
          if (ok) { c.carded = (c.carded || 0) + 1; x.carded = true; }
        }
      }
      const keys = Object.keys(p.pat);
      if (keys.length > 80) keys.sort((a, b) => p.pat[a].n - p.pat[b].n).slice(0, keys.length - 80).forEach(k => delete p.pat[k]);
    }
    p.updated = Date.now();
  }
  function addCardQuiet(card) {
    const S = A.state(), id = "p:" + A.norm(card.da);
    if (!card.da || !card.it || (S.custom && S.custom[id])) return false;
    return !!A.addCard(card);
  }

  /* ---------- Motore ---------- */
  const ENGINE_LABEL = { claude: "Claude", proxy: "IA online", gemini: "Gemini", local: "Modello locale" };
  async function engineInfo() {
    let st = null;
    try { if (window.DanskAI && window.DanskAI.status) st = window.DanskAI.status(); } catch (e) {}
    let mode = null;
    try { mode = await A.aiMode(); } catch (e) {}
    return { mode, label: (st && st.label_it) || ENGINE_LABEL[mode] || "", low: !!(st && st.low), offline: !mode };
  }
  async function getEngine() { try { return await A.getSample(); } catch (e) { return null; } }

  const LEVEL_STYLE = {
    A1: "A1: max 10 words per sentence, present tense, only the most frequent words, one idea at a time.",
    A2: "A2: short sentences, present and past, everyday words.",
    B1: "B1: natural everyday Danish, some subordinate clauses.",
    B2: "B2: natural idiomatic Danish, opinions and abstract topics.",
    C1: "C1: fully natural Danish with idioms, modal particles and register shifts.",
  };
  function systemPrompt(c) {
    const sc = c.scenario, p = P();
    const steps = arr(sc.checks).map((s, i) => `${i}) ${s}`).join("; ");
    const rec = topCats(p, 1)[0];
    const exam = c.mode === "exam" && sc.exam;
    return `You play ${sc.npc.name} (${sc.npc.role}) in a Danish role-play with an Italian learner of Danish, CEFR ${c.level}. Stay in character; "reply" is only what ${sc.npc.name} says.
SCENE: ${sc.setting || ""} LEARNER'S MISSION: ${sc.mission || "free conversation"}${steps ? `\nMISSION STEPS: ${steps}` : ""}${c.topic ? `\nTOPIC CHOSEN BY THE LEARNER: ${c.topic}` : ""}
${exam ? `EXAM SIMULATION (${sc.exam.name}): you are the examiner. ${sc.exam.phases} Give no help, hints or praise; neutral and polite. Still fill "fix" and "notes": they are shown only after the exam.\n` : ""}REPLY: Danish only (modern rigsdansk), ${c.voice ? "1 short sentence or 2 very short ones (it is spoken aloud)" : "1-2 short sentences"}, normally ending with a question or prompt that moves the scene forward. Style ${LEVEL_STYLE[c.level] || LEVEL_STYLE.B1} Never speak above the learner's level; if they struggle, simplify and slow down. "level_hint": "up" only if the learner is clearly at ease, "down" if clearly struggling, else "same".
FEEDBACK (in Italian, very short):
- Recast: if the learner's last message had an error, naturally reuse the correct form inside your reply.
- "fix": at most ONE explicit correction: the error that most hurts comprehension; if tied, one matching the learner's recurring errors. "wrong" = the learner's exact fragment. null if no clear error.
- "notes": other real errors of that message (max 3); they are saved for the final report.
- If you are not sure something is an error, do NOT correct it. At A1-A2 never correct style.
- If the learner writes in Italian, they are asking how to say it: fix = {"wrong": the Italian, "right": the Danish, "cat": "lessico"} and continue the scene.
- Messages starting with [VOICE] come from speech recognition: never correct spelling, capitals or punctuation there; an odd out-of-context word is probably a pronunciation problem: use cat "pronuncia", say which word you think was meant and give a tip an Italian can follow.
- "cat" is exactly one of: ordine (word order, V2, position of ikke), genere (en/et), forma-nome (definite or plural forms), verbo (verb form or tense), preposizione, lessico (wrong word), ortografia, pronuncia, naturalezza.
LEARNER: ${profileSummary()}${rec && !exam ? `\nOnce in this conversation create a natural occasion for the learner to use the structure they often get wrong (${rec[0]}).` : ""}
Return ONLY this JSON: {"reply":"…","reply_it":"Italian translation of reply","fix":null,"notes":[],"new_words":[{"da":"…","it":"…"}],"mission_done":[numbers of ALL mission steps completed so far],"level_hint":"same"}
where fix and each note are {"wrong":"…","right":"…","cat":"…","why_it":"one short sentence in Italian"} and new_words has at most 2 useful words from your reply that are probably new at this level.`;
  }
  // Riassunto locale dei turni più vecchi (non costa quota)
  function olderSummary(c, older) {
    const mine = older.filter(m => m.from === "me" && !m.failed).map(m => m.text.slice(0, 50));
    if (!mine.length) return "";
    return `\nEARLIER IN THIS CONVERSATION (summary): the learner said: ${mine.slice(-6).map(s => `"${s}"`).join(" / ")}.`.slice(0, 420);
  }
  function buildTurns(c) {
    const ms = c.messages.filter(m => (m.from === "npc" || m.from === "me") && !m.failed);
    let start = Math.max(0, ms.length - KEEP_TURNS);
    while (start > 0 && ms[start].from !== "npc") start--;
    const recent = ms.slice(start), older = ms.slice(0, start);
    const turns = [{ role: "user", content: systemPrompt(c) + olderSummary(c, older) + "\n\nBegin the scene." }];
    for (const m of recent) {
      if (m.from === "npc") turns.push({ role: "assistant", content: JSON.stringify({ reply: m.text }) });
      else turns.push({ role: "user", content: (m.dictated ? "[VOICE] " : "") + m.text });
    }
    return turns;
  }
  function cleanCorr(x, dictated) {
    if (!x || typeof x !== "object") return null;
    const wrong = str(x.wrong), right = str(x.right);
    if (!right || A.norm(wrong) === A.norm(right) && wrong) return null;
    const cat = catOf(x.cat || x.type);
    if (dictated && cat === "ortografia") return null;
    return { wrong, right, cat, why: str(x.why_it) || str(x.explanation_it), right_it: str(x.right_it) };
  }
  function cleanReply(d, c, dictated) {
    if (!d || typeof d !== "object" || Array.isArray(d)) throw { code: "invalid_json" };
    const reply = str(d.reply) || str(d.response) || str(d.message);
    if (!reply || reply.length > 900) throw { code: "invalid_json" };
    const all = [cleanCorr(d.fix, dictated), ...arr(d.notes).map(x => cleanCorr(x, dictated))].filter(Boolean);
    const seen = new Set(), uniq = all.filter(x => { const k = A.norm(x.wrong) + "|" + A.norm(x.right); if (seen.has(k)) return false; seen.add(k); return true; });
    const nChecks = arr(c.scenario.checks).length;
    return {
      reply, reply_it: str(d.reply_it) || str(d.translation), fix: uniq[0] || null, notes: uniq.slice(1, 4),
      words: arr(d.new_words).map(x => ({ da: str(x?.da), it: str(x?.it) })).filter(x => x.da && x.it).slice(0, 2),
      done: [...new Set(arr(d.mission_done).map(Number).filter(n => Number.isInteger(n) && n >= 0 && n < nChecks))],
      hint: ["up", "down"].includes(str(d.level_hint)) ? str(d.level_hint) : "same",
    };
  }

  /* ---------- Sessione ---------- */
  let root = null, busy = false, ctl = null, timer = null, unsaved = 0, hintStep = 0, lastErr = null;
  let call = null;   // stato della modalità voce a tutto schermo

  function newSession(sc, opts) {
    const t = T();
    const level = sc.level || opts.level || A.currentLevel();
    t.current = { v: 3, id: Date.now(), started: Date.now(), scenario: sc, level, mode: opts.mode || "guided", kind: opts.kind || "ai", voice: !!opts.voice, topic: opts.topic || "",
      messages: [], done: [], sec: 0, hints: 0, up: 0, down: 0, carded: 0, script: null, usedVoice: !!opts.voice };
    return t.current;
  }
  function pickDialog(sc, level) {
    const ds = dialogs();
    return ds.find(d => d.scenario === sc.id) || ds.find(d => d.level === level) || ds.slice().sort((a, b) => Math.abs(LEVELS.indexOf(a.level) - LEVELS.indexOf(level)) - Math.abs(LEVELS.indexOf(b.level) - LEVELS.indexOf(level)))[0];
  }
  function attachScript(c, d) {
    c.kind = "script"; c.script = { id: d.id, node: d.start, tries: 0, write: false };
    if (d.scenario !== c.scenario.id) {
      const sc = scenarios().find(s => s.id === d.scenario);
      c.scenario = sc || Object.assign({}, FREE, { id: "copione-" + d.id, title: d.title, mission: "Segui il dialogo guidato fino alla fine.", level: d.level, npc: { name: "Sofie", role: "la tua interlocutrice" } });
      c.level = d.level || c.level;
    }
    const n = d.nodes[d.start];
    c.messages.push({ from: "npc", text: n.npc, it: n.it || "" });
  }
  const curDialog = c => dialogs().find(d => d.id === c.script?.id) || null;
  const curNode = c => { const d = curDialog(c); return d ? d.nodes[c.script.node] : null; };

  async function begin(sc, opts) {
    const V_ = V(); try { V_ && V_.unlock && V_.unlock(); } catch (e) {}
    const eng = opts.forceScript ? null : await getEngine();
    const c = newSession(sc, opts);
    if (!eng) {
      const d = pickDialog(sc, c.level);
      c.mode = "guided";
      c.messages.push({ from: "sys", text: opts.forceScript ? "Dialogo guidato: funziona anche senza connessione. Scegli una risposta oppure scrivila." : "L'insegnante virtuale non è raggiungibile adesso. Nessun problema: continuiamo con un dialogo guidato, che funziona anche senza connessione." + (d.scenario !== sc.id ? ` Lo scenario «${sc.title}» richiede la connessione: per ora ti propongo «${d.title}».` : "") });
      attachScript(c, d);
    } else {
      c.messages.push({ from: "npc", text: sc.opener, it: sc.opener_it || "" });
    }
    A.save(); hintStep = 0;
    drawSession();
    if (c.voice) openCall(); else speakReply(c.messages[c.messages.length - 1].text);
  }

  function speakReply(text) {
    if (!A.state().autoplay) return;
    const v = V();
    try { if (v && v.say) { v.say(text, {}).catch(() => {}); return; } } catch (e) {}
    A.speak(text);
  }
  function stopSpeaking() { try { V() && V().stopSaying && V().stopSaying(); } catch (e) {} try { A.stopSpeech && A.stopSpeech(); } catch (e) {} }

  async function askAI(c) {
    const eng = await getEngine();
    if (!eng) throw { code: "all_failed" };
    ctl = new AbortController();
    const last = c.messages.filter(m => m.from === "me").pop();
    const raw = await eng.json(buildTurns(c), { modelTier: "default", cache: false, signal: ctl.signal });
    return cleanReply(raw, c, !!(last && last.dictated));
  }

  // Invio di un messaggio dell'allievo (scritto o dettato). Restituisce la risposta dell'interlocutore oppure null.
  async function submit(text, dictated) {
    const t = T(), c = t.current;
    text = String(text || "").trim();
    if (!c || busy || !text) return null;
    if (c.kind === "script") return scriptAnswer(c, text, dictated, false);
    lastErr = null;
    const me = { from: "me", text, dictated: !!dictated };
    c.messages.push(me); A.logActivity(); A.save();
    return aiTurn(c, me);
  }
  async function aiTurn(c, me) {
    busy = true; me.failed = false; drawChat(); syncBusy();
    let d = null;
    try { d = await askAI(c); }
    catch (e) { if (!e || e.code !== "cancelled") lastErr = e || { code: "unknown" }; }
    finally { busy = false; ctl = null; }
    if (!d) {
      me.failed = true; A.save(); drawChat(); syncBusy();
      return null;
    }
    const turn = c.messages.filter(m => m.from === "me").length;
    if (d.fix) { me.fix = d.fix; recordError(c, d.fix, turn); }
    if (d.notes.length) { me.notes = d.notes; d.notes.forEach(x => recordError(c, x, turn)); }
    me.checked = true;
    c.done = [...new Set([...c.done, ...d.done])].sort((a, b) => a - b);
    if (d.hint === "up") c.up++; if (d.hint === "down") c.down++;
    const npc = { from: "npc", text: d.reply, it: d.reply_it, words: d.words };
    c.messages.push(npc);
    hintStep = 0; A.save(); drawChat(); syncBusy();
    const hb = $("#sm-hintbox"); if (hb) hb.hidden = true;
    if (!call) speakReply(d.reply);
    return npc;
  }
  function retryFailed() {
    const c = T().current; if (!c || busy) return;
    const me = c.messages.filter(m => m.from === "me" && m.failed).pop(); if (!me) return;
    aiTurn(c, me);
  }
  // Il motore è caduto a metà: i messaggi restano, si prosegue con un copione dello stesso livello
  function continueWithScript() {
    const c = T().current; if (!c) return;
    const d = pickDialog(c.scenario, c.level);
    c.messages.forEach(m => { if (m.failed) { m.failed = false; m.kept = true; } });
    c.messages.push({ from: "sys", text: `Continuiamo con il dialogo guidato «${d.title}»: la conversazione fatta finora resta nel report.` });
    const prevDone = c.done.slice();
    attachScript(c, d); c.done = prevDone.filter(i => i < arr(c.scenario.checks).length);
    lastErr = null; A.save(); drawSession();
  }

  /* ---------- Dialoghi a copione ---------- */
  function matchReply(node, text) {
    const u = A.norm(text); let best = null;
    for (const r of arr(node.replies)) for (const s of arr(r.say)) {
      const n = A.norm(s);
      if (u === n) return { r, exact: true, said: s };
      const tol = n.length > 24 ? 3 : n.length > 10 ? 2 : n.length > 4 ? 1 : 0;
      const d = A.fold(u) === A.fold(n) ? 0.5 : A.lev(u, n);
      if (d <= tol && (!best || d < best.d)) best = { r, exact: false, said: s, d };
    }
    return best;
  }
  function scriptAnswer(c, text, dictated, chosen) {
    const d = curDialog(c), node = curNode(c);
    if (!d || !node || node.end) return null;
    A.logActivity();
    const turn = c.messages.filter(m => m.from === "me").length + 1;
    const w = arr(node.wrong).find(x => A.norm(x.say) === A.norm(text));
    if (w) {
      const right = node.replies?.[0]?.say?.[0] || "";
      const fix = { wrong: w.say, right, cat: w.cat ? catOf(w.cat) : "altro", why: w.why || "", right_it: node.replies?.[0]?.it || "" };
      const me = { from: "me", text, dictated: !!dictated, fix, checked: true, retry: true };
      c.messages.push(me); recordError(c, fix, turn);
      c.messages.push({ from: "sys", text: "Riprova: scegli o scrivi un'altra risposta." });
      A.save(); drawSession(); return null;
    }
    const m = matchReply(node, text);
    if (!m) {
      c.script.tries++;
      const me = { from: "me", text, dictated: !!dictated, checked: true, retry: true };
      c.messages.push(me);
      if (c.script.tries >= 2) {
        c.script.write = false;
        c.messages.push({ from: "sys", text: "Non corrisponde a nessuna delle risposte previste. Ecco quelle possibili: scegline una." });
      } else if (node.fallback && d.nodes[node.fallback]) {
        c.script.node = node.fallback; const fb = d.nodes[node.fallback];
        c.messages.push({ from: "npc", text: fb.npc, it: fb.it || "" });
        if (!call) speakReply(fb.npc);
      } else c.messages.push({ from: "sys", text: node.hint ? `Riprova. Suggerimento: ${node.hint}` : "Riprova con una frase più semplice." });
      A.save(); drawSession(); return c.messages[c.messages.length - 1];
    }
    const me = { from: "me", text: m.exact || chosen ? text : text, dictated: !!dictated, checked: true };
    if (!m.exact && !dictated) me.spell = m.said;
    c.messages.push(me);
    c.script.tries = 0; c.script.node = m.r.next; c.script.steps = (c.script.steps || 0) + 1;
    const next = d.nodes[m.r.next];
    if (!next) { c.script.node = null; c.script.ended = true; A.save(); drawSession(); return null; }
    const npc = { from: "npc", text: next.npc, it: next.it || "" };
    c.messages.push(npc);
    if (next.end) {
      c.script.ended = true; c.done = arr(c.scenario.checks).map((_, i) => i);
      if (arr(next.recap).length) c.messages.push({ from: "recap", items: next.recap.map(pair) });
    }
    hintStep = 0; A.save(); drawSession();
    if (!call) speakReply(next.npc);
    return npc;
  }

  /* ---------- Tempo di conversazione ---------- */
  function tick() {
    const c = T().current;
    if (!c || !root || !root.isConnected || root.hidden || document.visibilityState !== "visible" || !document.getElementById("sm-thread")) return;
    const S = A.state(), today = A.dkey();
    if (!S.talkDay || S.talkDay.date !== today) S.talkDay = { date: today, sec: 0 };
    S.talkDay.sec++; c.sec++;
    if (++unsaved >= 15) { unsaved = 0; A.save(); }
    const el = $("#sm-time"); if (el) el.textContent = fmtTime(c.sec);
  }
  const fmtTime = s => Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  function ensureTimer() { if (!timer) timer = setInterval(tick, 1000); }

  /* ---------- Schermata iniziale ---------- */
  let filter = "per-te";
  function render(sec) {
    root = sec; ensureTimer();
    const t = T();
    if (t.current && sec.dataset.smHome !== "1") return drawSession();
    delete sec.dataset.smHome;
    closeCall(true); clearLayer();
    const cur = A.currentLevel(), li = LEVELS.indexOf(cur);
    const near = [LEVELS[li - 1], cur, LEVELS[li + 1]].filter(Boolean);
    const all = scenarios();
    const list = all.filter(s => filter === "per-te" ? near.includes(s.level) : s.level === filter)
      .sort((a, b) => filter === "per-te" ? (a.level === cur ? -1 : 0) - (b.level === cur ? -1 : 0) || LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) : 0);
    const p = P(), c = t.current;
    const row = (s, extra = "") => {
      const done = p.scenarios[s.id];
      return `<button class="sm-row" type="button" data-sc="${esc(s.id)}">
        <span class="sm-row-ic lv-${esc(s.level || cur)}">${ic(s.icon)}</span>
        <span class="sm-row-main"><span class="sm-row-t">${esc(s.title)}</span><span class="sm-row-s">${esc(s.mission || "")}</span></span>
        <span class="sm-row-meta">${done && done.total && done.done >= done.total ? `<span class="sm-done" title="Missione completata">${ic("check")}</span>` : ""}${s.level ? `<span class="sm-lv lv-${esc(s.level)}">${esc(s.level)}</span>` : ""}${extra}${ic("chev", "sm-chev")}</span></button>`;
    };
    sec.innerHTML = `<div class="sm-home">
      <header class="sm-head"><h2 class="t-large">Conversa</h2><p class="sm-engine" id="sm-engine" role="status"></p></header>
      ${c ? `<button class="sm-continue" type="button" id="sm-continue"><span class="sm-row-ic">${ic(c.scenario.icon)}</span><span class="sm-row-main"><span class="sm-row-s">Continua la conversazione</span><span class="sm-row-t">${esc(c.scenario.title)} · ${fmtTime(c.sec)}</span></span>${ic("chev", "sm-chev")}</button>` : ""}
      <div class="sm-seg" role="group" aria-label="Livello degli scenari">${[["per-te", "Per te"], ...LEVELS.map(L => [L, L])].map(([k, l]) => `<button type="button" data-f="${k}" aria-pressed="${filter === k}">${l}</button>`).join("")}</div>
      <section class="sm-group" aria-label="Scenari">${list.map(s => row(s)).join("") || `<p class="sm-empty">Nessuno scenario per questo livello.</p>`}</section>
      <h3 class="sm-sec">Senza copione</h3>
      <section class="sm-group">${row(Object.assign({}, FREE, { level: null }))}</section>
      <h3 class="sm-sec">Esame orale simulato</h3>
      <section class="sm-group">${exams().map(s => row(s)).join("")}</section>
      <p class="sm-foot">Le simulazioni seguono la struttura delle prove ufficiali, ma non sono prove ufficiali.</p>
      ${t.reports.length ? `<h3 class="sm-sec">I tuoi report</h3><section class="sm-group">${t.reports.map((r, i) => `<button class="sm-row" type="button" data-rep="${i}">
        <span class="sm-row-main"><span class="sm-row-t">${esc(r.topic || "Conversazione")}</span><span class="sm-row-s">${new Date(r.date).toLocaleDateString("it-IT", { day: "numeric", month: "short" })} · ${esc(r.level || "")} · ${r.messages || 0} messaggi · ${arr(r.corrections).length} correzioni</span></span>
        <span class="sm-row-meta">${r.score != null ? `<span class="sm-score">${r.score}</span>` : r.estimate ? `<span class="sm-lv">${esc(r.estimate)}</span>` : ""}${ic("chev", "sm-chev")}</span></button>`).join("")}</section>` : ""}
    </div>`;
    $$("[data-f]", sec).forEach(b => b.onclick = () => { filter = b.dataset.f; sec.dataset.smHome = "1"; render(sec); });
    $$("[data-sc]", sec).forEach(b => b.onclick = () => { const id = b.dataset.sc; const s = id === "libera" ? FREE : all.concat(exams()).find(x => x.id === id); if (s) openStart(s); });
    $$("[data-rep]", sec).forEach(b => b.onclick = () => showReport(t.reports[+b.dataset.rep]));
    const co = $("#sm-continue", sec); if (co) co.onclick = () => drawSession();
    engineInfo().then(e => {
      const el = $("#sm-engine", sec); if (!el) return;
      el.innerHTML = e.offline ? `<span class="sm-dot off"></span>Senza connessione all'IA: dialoghi guidati` : `<span class="sm-dot${e.low ? " low" : ""}"></span>${esc(e.label)}${e.low ? " · quota di oggi quasi finita" : ""}`;
    });
  }

  /* ---------- Foglio di avvio ---------- */
  function openStart(sc) {
    closeSheet();
    const t = T(), v = V();
    let caps = null; try { caps = v && v.caps ? v.caps() : null; } catch (e) {}
    const canVoice = !!caps && caps.strategy && caps.strategy !== "text" && caps.strategy !== "keyboard";
    let advice = null; try { advice = !t.adviceShown && v && v.voiceAdvice ? v.voiceAdvice() : null; } catch (e) {}
    const isExam = !!sc.exam, isFree = sc.id === "libera";
    let mode = isExam ? "exam" : t.mode === "exam" ? "guided" : t.mode, voice = canVoice && !!t.voicePref;
    const el = document.createElement("div");
    el.className = "sm-sheet"; el.id = "sm-sheet";
    el.innerHTML = `<div class="sm-sheet-back" data-close></div>
      <div class="sm-sheet-panel" role="dialog" aria-modal="true" aria-labelledby="sm-sh-t">
        <div class="sm-grip" aria-hidden="true"></div>
        <div class="sm-sheet-top"><button class="sm-plain" type="button" data-close>Annulla</button><span class="sm-lv lv-${esc(sc.level || A.currentLevel())}">${esc(sc.level || A.currentLevel())}</span></div>
        <div class="sm-sheet-body">
          <div class="sm-hero"><span class="sm-avatar lv-${esc(sc.level || A.currentLevel())}">${ic(sc.icon)}</span><h2 id="sm-sh-t" class="t-title2">${esc(sc.title)}</h2>
            <p class="sm-who"><b>${esc(sc.npc.name)}</b> · ${esc(sc.npc.role)}</p>${sc.setting ? `<p class="sm-set">${esc(sc.setting)}</p>` : ""}</div>
          <div class="sm-card"><div class="sm-cap">${ic("flag")} La tua missione</div><p>${esc(sc.mission || "")}</p>
            ${arr(sc.checks).length ? `<ul class="sm-steps">${sc.checks.map(s => `<li>${esc(s)}</li>`).join("")}</ul>` : ""}</div>
          ${isFree ? `<label class="sm-card sm-topic"><span class="sm-cap">Di cosa vuoi parlare? (facoltativo)</span><input type="text" id="sm-topic" placeholder="Es. il mio lavoro, la cena di ieri" autocomplete="off"></label>` : ""}
          ${isExam && arr(sc.topics).length ? `<label class="sm-card sm-topic"><span class="sm-cap">Tema preparato</span><select id="sm-topic">${sc.topics.map(x => `<option>${esc(x)}</option>`).join("")}</select></label>` : ""}
          ${arr(sc.vocab).length ? `<div class="sm-card"><div class="sm-cap">Parole chiave</div><div class="sm-vocab">${sc.vocab.map(pair).map(w => `<button class="sm-word" type="button" data-say="${esc(w.da)}" aria-label="Ascolta ${esc(w.da)}"><b class="da">${hl(w.da)}</b><span>${esc(w.it)}</span></button>`).join("")}</div></div>` : ""}
          ${arr(sc.phrases).length ? `<div class="sm-card"><div class="sm-cap">Frasi utili</div>${sc.phrases.map(pair).map(w => `<button class="sm-phrase" type="button" data-say="${esc(w.da)}" aria-label="Ascolta">${ic("speaker")}<span><b class="da">${hl(w.da)}</b><span>${esc(w.it)}</span></span></button>`).join("")}</div>` : ""}
          ${isExam ? `<p class="sm-foot">Simulazione ${esc(sc.exam.name)}: circa ${sc.exam.minutes} minuti, nessun aiuto e nessuna correzione fino alla fine. Non è una prova ufficiale.</p>` : `
          <div class="sm-cap sm-cap-out">Quanto aiuto vuoi</div>
          <div class="sm-seg" id="sm-mode" role="group" aria-label="Modalità"><button type="button" data-m="guided">Guidata</button><button type="button" data-m="free">Libera</button></div>
          <p class="sm-foot" id="sm-mode-note"></p>`}
          ${canVoice ? `<div class="sm-cap sm-cap-out">Come vuoi conversare</div>
          <div class="sm-seg" id="sm-chan" role="group" aria-label="Canale"><button type="button" data-v="0">Testo</button><button type="button" data-v="1">Voce</button></div>` : ""}
          ${caps && caps.note_it ? `<p class="sm-foot">${esc(caps.note_it)}</p>` : ""}
          ${advice && advice.needed && advice.text_it ? `<p class="sm-foot sm-advice">${esc(advice.text_it)}</p>` : ""}
        </div>
        <div class="sm-sheet-cta"><button class="sm-btn" type="button" id="sm-go">Inizia</button>
          <button class="sm-plain" type="button" id="sm-go-script">Dialogo guidato senza IA</button></div>
      </div>`;
    document.body.append(el);
    if (advice && advice.needed) { t.adviceShown = true; A.save(); }
    const sync = () => {
      $$("#sm-mode [data-m]", el).forEach(b => b.setAttribute("aria-pressed", b.dataset.m === mode));
      $$("#sm-chan [data-v]", el).forEach(b => b.setAttribute("aria-pressed", (b.dataset.v === "1") === voice));
      const n = $("#sm-mode-note", el); if (n) n.textContent = mode === "guided" ? "Suggerimenti, traduzioni a richiesta e una correzione per volta." : "Nessun suggerimento: una sola correzione per turno, il resto nel report finale.";
    };
    sync();
    $$("#sm-mode [data-m]", el).forEach(b => b.onclick = () => { mode = b.dataset.m; sync(); });
    $$("#sm-chan [data-v]", el).forEach(b => b.onclick = () => { voice = b.dataset.v === "1"; sync(); });
    $$("[data-close]", el).forEach(b => b.onclick = closeSheet);
    el.addEventListener("keydown", e => { if (e.key === "Escape") closeSheet(); });
    const go = forceScript => {
      const topic = str($("#sm-topic", el)?.value);
      if (!isExam) { t.mode = mode; } t.voicePref = voice; A.save();
      closeSheet(); begin(sc, { mode, voice, topic, forceScript });
    };
    $("#sm-go", el).onclick = () => go(false);
    const gs = $("#sm-go-script", el);
    if (isExam || isFree) gs.hidden = true; else gs.onclick = () => go(true);
    requestAnimationFrame(() => { el.classList.add("open"); $("#sm-go", el).focus({ preventScroll: true }); });
  }
  function closeSheet() { const s = document.getElementById("sm-sheet"); if (s) s.remove(); }

  /* ---------- Chat ---------- */
  // Su telefono la conversazione è uno strato a tutto schermo sopra l'app (come aprire una chat in Messaggi);
  // su schermi larghi resta dentro la scheda. Lo strato sparisce da solo quando si cambia scheda.
  let layerWatch = null;
  function clearLayer() { const l = document.getElementById("sm-layer"); if (l) l.remove(); }
  function host(thread) {
    clearLayer();
    if (!thread || !root) return root;
    let phone = false; try { phone = matchMedia("(max-width: 899px)").matches; } catch (e) {}
    if (!phone) return root;
    root.innerHTML = `<p class="sm-foot">Conversazione in corso.</p>`;
    const l = document.createElement("div"); l.id = "sm-layer"; l.className = "sm-layer";
    document.body.append(l);
    if (!layerWatch && window.MutationObserver) { layerWatch = new MutationObserver(() => { if (root.hidden) { stopSpeaking(); clearLayer(); A.save(); } }); layerWatch.observe(root, { attributes: true, attributeFilter: ["hidden"] }); }
    return l;
  }
  function drawSession() {
    const t = T(), c = t.current; if (!c || !root) return;
    ensureTimer();
    const sc = c.scenario, script = c.kind === "script";
    host(true).innerHTML = `<div class="sm-thread" id="sm-thread">
      <header class="sm-bar">
        <button class="sm-plain sm-backbtn" type="button" id="sm-back" aria-label="Torna all'elenco">${ic("back")}<span>Conversa</span></button>
        <div class="sm-bar-mid"><span class="sm-avatar sm lv-${esc(c.level)}">${ic(sc.icon)}</span><span class="sm-bar-name">${esc(sc.npc.name)}</span><span class="sm-bar-sub"><span id="sm-time">${fmtTime(c.sec)}</span> · ${esc(c.level)}${c.mode === "exam" ? " · esame" : script ? " · dialogo guidato" : ""}</span></div>
        <button class="sm-plain sm-endbtn" type="button" id="sm-end">Fine</button>
      </header>
      <div class="sm-mission" id="sm-mission"></div>
      <div class="sm-scroll" id="sm-scroll"><div class="sm-msgs" id="sm-msgs" role="log" aria-live="polite" aria-relevant="additions"></div></div>
      <div class="sm-compose" id="sm-compose"></div>
    </div>`;
    $("#sm-back").onclick = () => { stopSpeaking(); if (ctl) ctl.abort(); A.save(); root.dataset.smHome = "1"; render(root); };
    $("#sm-end").onclick = endPrompt;
    // su schermi larghi la conversazione occupa lo spazio sotto la barra dell'app, senza far scorrere la pagina
    const th = document.getElementById("sm-thread");
    if (th && !document.getElementById("sm-layer")) { window.scrollTo({ top: 0 }); th.style.setProperty("--sm-offset", Math.round(th.getBoundingClientRect().top + 24) + "px"); }
    drawCompose(); drawChat(); watchViewport();
  }
  function drawMission() {
    const c = T().current, el = $("#sm-mission"); if (!c || !el) return;
    const ch = arr(c.scenario.checks);
    el.hidden = !ch.length;
    el.innerHTML = ch.map((s, i) => `<span class="sm-tick${c.done.includes(i) ? " on" : ""}">${ic("check")}<span>${esc(s)}</span></span>`).join("");
    el.setAttribute("aria-label", `Missione: ${c.done.length} tappe su ${ch.length}`);
  }
  function corrHtml(x, k) {
    const u = unitFor(x.cat, T().current?.level || A.currentLevel());
    return `<div class="sm-fix"><div class="sm-fix-cat">${esc(CATS[x.cat]?.label || "Correzione")}</div>
      <div class="sm-fix-line">${x.wrong ? `<s class="da">${hl(x.wrong)}</s> ` : ""}<b class="da">${hl(x.right)}</b><button class="sm-mini" type="button" data-say="${esc(x.right)}" aria-label="Ascolta la forma giusta">${ic("speaker")}</button></div>
      ${x.why ? `<div class="sm-fix-why">${esc(x.why)}</div>` : ""}
      <div class="sm-fix-act">${x.carded ? `<span class="sm-note">Errore ricorrente: aggiunto al ripasso</span>` : `<button class="sm-link" type="button" data-add="${k}">Aggiungi al ripasso</button>`}${u ? `<button class="sm-link" type="button" data-unit="${esc(u.id)}" data-sub="grammatica">Ripassa la regola</button>` : ""}</div></div>`;
  }
  function drawChat() {
    const box = $("#sm-msgs"); if (!box) return;
    const c = T().current; if (!c) return;
    const exam = c.mode === "exam", adds = [];
    box.innerHTML = c.messages.map((m, i) => {
      if (m.from === "sys") return `<div class="sm-sys">${esc(m.text)}</div>`;
      if (m.from === "recap") return `<div class="sm-recap"><div class="sm-cap">Da ricordare</div>${m.items.map(w => `<button class="sm-phrase" type="button" data-say="${esc(w.da)}">${ic("speaker")}<span><b class="da">${hl(w.da)}</b><span>${esc(w.it)}</span></span></button>`).join("")}</div>`;
      if (m.from === "me") {
        const extra = arr(m.notes).length;
        if (m.fix) adds.push({ da: m.fix.right, it: m.fix.right_it || m.fix.why || CATS[m.fix.cat].label, note: m.fix.why || "", src: "conversa" });
        return `<div class="sm-msg me${m.failed ? " failed" : ""}"><div class="sm-bubble da">${hl(m.text)}</div>
          ${m.dictated ? `<div class="sm-meta">a voce</div>` : ""}
          ${m.failed ? `<div class="sm-meta err">Non consegnato</div>` : ""}
          ${m.spell ? `<div class="sm-meta">Quasi: si scrive <b class="da">${hl(m.spell)}</b></div>` : ""}
          ${!exam && m.fix ? corrHtml(m.fix, adds.length - 1) : ""}
          ${!exam && extra ? `<div class="sm-meta">+${extra} ${extra === 1 ? "nota" : "note"} nel report finale</div>` : ""}</div>`;
      }
      const open = m.open;
      return `<div class="sm-msg npc"><button class="sm-bubble da" type="button" data-bubble="${i}" aria-expanded="${!!open}" aria-label="${esc(m.text)}. Tocca per ascolto e traduzione">${hl(m.text)}</button>
        ${open ? `<div class="sm-bubble-act">${!exam && m.it ? `<div class="sm-trans">${esc(m.it)}</div>` : ""}<div class="sm-act-row"><button class="sm-link" type="button" data-say="${esc(m.text)}">${ic("speaker")} Ascolta</button><button class="sm-link" type="button" data-slow="${esc(m.text)}">Lento</button></div></div>` : ""}
        ${!exam && arr(m.words).length ? `<div class="sm-words">${m.words.map(w => { adds.push({ da: w.da, it: w.it, src: "conversa" }); return `<button class="sm-chip" type="button" data-add="${adds.length - 1}">${ic("plus")}<span class="da">${hl(w.da)}</span> ${esc(w.it)}</button>`; }).join("")}</div>` : ""}</div>`;
    }).join("") + (busy ? `<div class="sm-msg npc"><div class="sm-bubble sm-typing" role="status" aria-label="${esc(c.scenario.npc.name)} sta scrivendo"><i></i><i></i><i></i></div></div>` : "")
      + (lastErr && !busy ? errorHtml(lastErr) : "");
    $$("[data-bubble]", box).forEach(b => b.onclick = () => { const m = c.messages[+b.dataset.bubble]; m.open = !m.open; drawChat(); });
    $$("[data-slow]", box).forEach(b => b.onclick = () => A.speak(b.dataset.slow, 0.65));
    $$("[data-add]", box).forEach(b => b.onclick = () => { if (A.addCard(adds[+b.dataset.add])) b.disabled = true; });
    const rt = $("#sm-retry", box); if (rt) rt.onclick = retryFailed;
    const cs = $("#sm-toscript", box); if (cs) cs.onclick = continueWithScript;
    drawMission();
    const sc = $("#sm-scroll"); if (sc) sc.scrollTop = sc.scrollHeight;
    if (call) drawCallText();
  }
  function errorHtml(e) {
    const gone = !e || ["all_failed", "local_unreachable", "gemini_unreachable", "unknown"].includes(e.code) || !navigator.onLine;
    const msg = e && e.code === "all_failed" || gone ? "L'insegnante virtuale non risponde in questo momento. Il tuo messaggio è salvo." : errText(e) + " Il tuo messaggio è salvo.";
    return `<div class="sm-sys sm-err" role="alert">${esc(msg)}<div class="sm-act-row"><button class="sm-link" type="button" id="sm-retry">Riprova</button><button class="sm-link" type="button" id="sm-toscript">Continua con un dialogo guidato</button></div></div>`;
  }
  function syncBusy() {
    const s = $("#sm-send"), st = $("#sm-stop");
    if (s) s.hidden = busy; if (st) st.hidden = !busy;
    if (call) setCall(busy ? "thinking" : call.state === "thinking" ? "idle" : call.state);
  }

  /* ---------- Barra di composizione ---------- */
  function drawCompose() {
    const c = T().current, el = $("#sm-compose"); if (!c || !el) return;
    const node = c.kind === "script" ? curNode(c) : null;
    const v = V(); let caps = null; try { caps = v && v.caps ? v.caps() : null; } catch (e) {}
    const strat = caps ? caps.strategy : "text";
    if (c.kind === "script" && (!node || node.end || c.script.ended)) {
      el.innerHTML = `<div class="sm-done-bar"><button class="sm-btn" type="button" id="sm-finish">Vedi il report</button></div>`;
      $("#sm-finish").onclick = finish; return;
    }
    const choice = c.kind === "script" && !c.script.write;
    let opts = [];
    if (choice) {
      opts = A.shuffle([...arr(node.replies).map(r => ({ t: r.say[0], it: r.it })), ...arr(node.wrong).map(w => ({ t: w.say }))]);
      c.script.shown = opts.map(o => o.t);
    }
    el.innerHTML = `
      ${c.kind === "script" ? `<div class="sm-seg sm-seg-sm" role="group" aria-label="Come rispondere"><button type="button" data-w="0" aria-pressed="${choice}">Scegli</button><button type="button" data-w="1" aria-pressed="${!choice}">Scrivi</button></div>` : ""}
      ${choice ? `<div class="sm-opts">${opts.map((o, i) => `<button class="sm-opt da" type="button" data-opt="${i}">${hl(o.t)}</button>`).join("")}</div>` : `
      <div class="sm-keys">${["æ", "ø", "å"].map(k => `<button type="button" class="sm-key" data-key="${k}" aria-label="Lettera ${k}">${k}</button>`).join("")}
        ${c.mode === "guided" ? `<button type="button" class="sm-key sm-hintbtn" id="sm-hint">${ic("bulb")}<span>Suggerimento</span></button>` : ""}
        ${caps && strat !== "text" && strat !== "keyboard" && c.kind !== "script" ? `<button type="button" class="sm-key sm-hintbtn" id="sm-tocall">${ic("phone")}<span>A voce</span></button>` : ""}</div>
      <form class="sm-inputrow" id="sm-form" autocomplete="off">
        ${strat !== "text" ? `<button type="button" class="sm-round sm-micbtn" id="sm-mic" aria-label="Detta il messaggio" aria-pressed="false">${ic("mic")}</button>` : ""}
        <textarea id="sm-in" rows="1" placeholder="Scrivi in danese" aria-label="Il tuo messaggio" autocapitalize="sentences" spellcheck="false"></textarea>
        <button type="button" class="sm-round sm-stopbtn" id="sm-stop" aria-label="Ferma" hidden>${ic("stop")}</button>
        <button type="submit" class="sm-round sm-sendbtn" id="sm-send" aria-label="Invia">${ic("send")}</button>
      </form>`}
      <div class="sm-hint" id="sm-hintbox" hidden></div>`;
    $$("[data-w]", el).forEach(b => b.onclick = () => { c.script.write = b.dataset.w === "1"; A.save(); drawCompose(); });
    $$("[data-opt]", el).forEach(b => b.onclick = () => scriptAnswer(c, opts[+b.dataset.opt].t, false, true));
    const inp = $("#sm-in", el);
    if (inp) {
      let dictated = false;
      const grow = () => { inp.style.height = "auto"; inp.style.height = Math.min(inp.scrollHeight, 132) + "px"; };
      inp.oninput = () => { grow(); if (!inp.value.trim()) dictated = false; };
      inp.onkeydown = e => { if (e.key === "Enter" && !e.shiftKey && !e.isComposing) { e.preventDefault(); $("#sm-form").requestSubmit(); } };
      $$("[data-key]", el).forEach(b => b.onclick = () => { const s = inp.selectionStart ?? inp.value.length, e2 = inp.selectionEnd ?? s; inp.value = inp.value.slice(0, s) + b.dataset.key + inp.value.slice(e2); inp.focus(); inp.setSelectionRange(s + 1, s + 1); grow(); });
      $("#sm-form").onsubmit = e => { e.preventDefault(); if (busy) return; const val = inp.value; if (!val.trim()) return; stopDictation(); inp.value = ""; grow(); const d = dictated; dictated = false; submit(val, d); };
      $("#sm-stop").onclick = () => ctl && ctl.abort();
      const mic = $("#sm-mic", el);
      if (mic) mic.onclick = () => {
        if (strat === "keyboard") { showHint("Per dettare usa il microfono della tastiera: aggiungi la tastiera danese (Impostazioni › Generali › Tastiera › Tastiere), poi tocca il microfono in basso a destra e parla."); return; }
        if (dictating) { stopDictation(); return; }
        startDictation(inp, mic, () => { dictated = true; grow(); });
      };
    }
    const hb = $("#sm-hint", el); if (hb) hb.onclick = giveHint;
    const tc = $("#sm-tocall", el); if (tc) tc.onclick = () => { c.voice = true; c.usedVoice = true; A.save(); openCall(); };
    syncBusy();
  }
  function showHint(html, raw) { const b = $("#sm-hintbox"); if (!b) return; b.hidden = false; b.innerHTML = raw ? html : esc(html); }
  function giveHint() {
    const c = T().current; if (!c) return;
    c.hints++;
    const node = c.kind === "script" ? curNode(c) : null;
    if (node) {
      if (hintStep++ === 0 && node.hint) return showHint(node.hint);
      const r = node.replies?.[0]; if (r) return showHint(`<button class="sm-phrase" type="button" data-say="${esc(r.say[0])}">${ic("speaker")}<span><b class="da">${hl(r.say[0])}</b><span>${esc(r.it || "")}</span></span></button>`, true);
      return;
    }
    const ch = arr(c.scenario.checks), todo = ch.findIndex((_, i) => !c.done.includes(i));
    const last = c.messages.filter(m => m.from === "npc").pop();
    if (hintStep === 0) { hintStep = 1; return showHint(todo >= 0 ? `Prossima tappa: ${ch[todo]}.${last && last.it ? ` Ti ha detto: «${last.it}»` : ""}` : last && last.it ? `Ti ha detto: «${last.it}». Rispondi con una frase semplice.` : "Rispondi con una frase semplice, anche in italiano se non sai come dirlo."); }
    const ph = arr(c.scenario.phrases).map(pair);
    if (!ph.length) return showHint("Scrivi in italiano quello che vuoi dire: riceverai la frase danese.");
    const w = ph[(hintStep++ - 1) % ph.length];
    showHint(`<button class="sm-phrase" type="button" data-say="${esc(w.da)}">${ic("speaker")}<span><b class="da">${hl(w.da)}</b><span>${esc(w.it)}</span></span></button>`, true);
  }

  /* Dettatura nel campo di testo (il testo resta modificabile prima dell'invio) */
  let dictating = false;
  function stopDictation() { if (!dictating) return; dictating = false; try { V().stopListening(true); } catch (e) {} const m = $("#sm-mic"); if (m) { m.classList.remove("on"); m.setAttribute("aria-pressed", "false"); } }
  async function startDictation(inp, mic, onText) {
    const v = V(); if (!v || !v.listen) return;
    try { v.unlock && v.unlock(); } catch (e) {}
    stopSpeaking();
    dictating = true; mic.classList.add("on"); mic.setAttribute("aria-pressed", "true");
    const base = inp.value ? inp.value.replace(/\s*$/, " ") : "";
    try {
      const r = await v.listen({ interim: tx => { if (dictating) { inp.value = base + tx; onText(); } }, silenceMs: 2200, maxMs: 45000 });
      if (r && r.text) { inp.value = base + r.text; onText(); }
      else if (r && r.reason === "error") toast(r.error === "not-allowed" ? "Il microfono non è consentito: controlla il permesso del sito." : "Non ho sentito bene: riprova oppure scrivi.");
    } catch (e) {}
    dictating = false; mic.classList.remove("on"); mic.setAttribute("aria-pressed", "false"); inp.focus();
  }

  // Tastiera dell'iPhone: l'area visibile cambia altezza, la conversazione la segue senza salti
  let vvBound = false;
  function watchViewport() {
    const vv = window.visualViewport; if (!vv || vvBound) return; vvBound = true;
    const upd = () => { const th = document.getElementById("sm-thread"); if (!th) return; th.style.setProperty("--sm-vh", vv.height + "px"); th.style.setProperty("--sm-vt", vv.offsetTop + "px"); const sc = $("#sm-scroll"); if (sc) sc.scrollTop = sc.scrollHeight; };
    vv.addEventListener("resize", upd); vv.addEventListener("scroll", upd);
  }

  /* ---------- Modalità voce a tutto schermo ---------- */
  const CALL_LABEL = { speaking: "Parla…", listening: "Ti ascolto…", thinking: "Sto pensando…", review: "Ho capito bene?", paused: "In pausa", idle: "Tocca il microfono per parlare" };
  function openCall() {
    const c = T().current, v = V(); if (!c || !v) return;
    closeCall(true);
    let caps = {}; try { caps = v.caps() || {}; } catch (e) {}
    const el = document.createElement("div");
    el.className = "sm-call"; el.id = "sm-call"; el.setAttribute("role", "dialog"); el.setAttribute("aria-modal", "true"); el.setAttribute("aria-label", "Conversazione a voce");
    const hold = caps.strategy === "hold";
    el.innerHTML = `<div class="sm-call-top"><span class="sm-avatar lg lv-${esc(c.level)}">${ic(c.scenario.icon)}</span><div class="sm-call-name">${esc(c.scenario.npc.name)}</div><div class="sm-call-role">${esc(c.scenario.npc.role)}</div><div class="sm-call-state" id="sm-call-state" role="status" aria-live="polite"></div></div>
      <button class="sm-wave" type="button" id="sm-wave" aria-label="Interrompi e parla"><canvas id="sm-canvas" width="600" height="200"></canvas></button>
      <div class="sm-call-text" id="sm-call-text"></div>
      <div class="sm-review" id="sm-review" hidden><label class="sm-cap" for="sm-rev-in">Ho capito questo: correggilo se serve</label><textarea id="sm-rev-in" rows="2" spellcheck="false"></textarea>
        <div class="sm-count"><b id="sm-count-bar"></b></div>
        <div class="sm-act-row"><button class="sm-link" type="button" id="sm-rev-again">Ripeti</button><button class="sm-link" type="button" id="sm-rev-edit">Modifica</button><button class="sm-btn sm" type="button" id="sm-rev-send">Invia</button></div></div>
      <div class="sm-call-ctl">
        <button class="sm-cbtn" type="button" id="sm-c-key" aria-label="Passa alla tastiera">${ic("keyboard")}<span>Tastiera</span></button>
        <button class="sm-cmic" type="button" id="sm-c-mic" aria-label="${hold ? "Tieni premuto per parlare" : "Microfono"}">${ic("mic")}</button>
        <button class="sm-cbtn" type="button" id="sm-c-cc" aria-pressed="${!!T().subs}" aria-label="Sottotitoli">${ic("cc")}<span>Sottotitoli</span></button>
      </div>
      <div class="sm-call-foot"><span id="sm-c-tip">${hold ? "Tieni premuto il microfono mentre parli" : caps.bargeIn === "auto" ? "Puoi interrompere parlando" : "Tocca l'onda per interrompere"}</span><button class="sm-cend" type="button" id="sm-c-end" aria-label="Termina la conversazione">${ic("end")}</button></div>`;
    document.body.append(el);
    call = { el, caps, hold, state: "idle", level: 0, raf: 0, token: 0, empty: 0, stopLevel: null, stopBarge: null, countT: null, t0: performance.now() };
    try { call.stopLevel = v.level ? v.level(x => { if (call) call.level = Math.max(0, Math.min(1, +x || 0)); }) : null; } catch (e) {}
    $("#sm-c-key", el).onclick = () => { const cc = T().current; if (cc) { cc.voice = false; A.save(); } closeCall(); drawSession(); };
    $("#sm-c-cc", el).onclick = e => { const t = T(); t.subs = !t.subs; A.save(); e.currentTarget.setAttribute("aria-pressed", t.subs); drawCallText(); };
    $("#sm-c-end", el).onclick = () => { closeCall(); endPrompt(); };
    $("#sm-wave", el).onclick = () => { if (call.state === "speaking") { stopSpeaking(); callListen(); } };
    const mic = $("#sm-c-mic", el);
    if (hold) {
      const down = e => { e.preventDefault(); if (busy) return; stopSpeaking(); callListen(true); };
      const up = e => { e.preventDefault(); if (call && call.state === "listening") { try { v.stopListening(true); } catch (x) {} } };
      mic.addEventListener("pointerdown", down); mic.addEventListener("pointerup", up); mic.addEventListener("pointercancel", up); mic.addEventListener("pointerleave", up);
      mic.addEventListener("keydown", e => { if ((e.key === " " || e.key === "Enter") && !e.repeat) down(e); }); mic.addEventListener("keyup", e => { if (e.key === " " || e.key === "Enter") up(e); });
    } else mic.onclick = () => {
      if (busy) return;
      if (call.state === "listening") { call.token++; try { v.stopListening(false); } catch (e) {} setCall("paused"); }
      else { stopSpeaking(); callListen(); }
    };
    $("#sm-rev-send", el).onclick = () => callSend();
    $("#sm-rev-edit", el).onclick = () => { stopCount(); $("#sm-rev-in", el).focus(); };
    $("#sm-rev-again", el).onclick = () => { stopCount(); $("#sm-review", el).hidden = true; callListen(); };
    $("#sm-rev-in", el).addEventListener("input", stopCount); $("#sm-rev-in", el).addEventListener("focus", stopCount);
    el.addEventListener("keydown", e => { if (e.key === "Escape") $("#sm-c-key", el).click(); });
    drawWave(); drawCallText();
    requestAnimationFrame(() => { el.classList.add("open"); mic.focus({ preventScroll: true }); });
    const last = c.messages.filter(m => m.from === "npc").pop();
    if (last) callSay(last.text); else setCall("idle");
  }
  function closeCall(silent) {
    if (!call) return;
    const k = call; call = null;
    stopCountOf(k); cancelAnimationFrame(k.raf);
    try { k.stopLevel && k.stopLevel(); } catch (e) {} try { k.stopBarge && k.stopBarge(); } catch (e) {}
    try { V().stopListening(false); } catch (e) {} stopSpeaking();
    k.el.remove();
    if (!silent && root && T().current) drawSession();
  }
  function setCall(state) {
    if (!call) return; call.state = state;
    call.el.dataset.state = state;
    const s = $("#sm-call-state", call.el); if (s) s.textContent = CALL_LABEL[state] || "";
    const m = $("#sm-c-mic", call.el); if (m) m.classList.toggle("on", state === "listening");
  }
  function drawCallText() {
    if (!call) return; const c = T().current; if (!c) return;
    const el = $("#sm-call-text", call.el); if (!el) return;
    const last = c.messages.filter(m => m.from === "npc").pop(), me = c.messages.filter(m => m.from === "me").pop();
    const t = T(), exam = c.mode === "exam";
    el.innerHTML = (t.subs && last ? `<p class="sm-sub da">${hl(last.text)}</p>${c.mode === "guided" && last.it ? `<p class="sm-sub-it">${esc(last.it)}</p>` : ""}` : "")
      + (!exam && me && me.fix && c.messages[c.messages.length - 1].from === "npc" ? `<p class="sm-sub-fix">${esc(CATS[me.fix.cat].label)}: ${me.fix.wrong ? `<s>${hl(me.fix.wrong)}</s> ` : ""}<b class="da">${hl(me.fix.right)}</b></p>` : "")
      + (lastErr && !busy ? `<p class="sm-sub-fix">L'insegnante virtuale non risponde. <button class="sm-link" type="button" id="sm-c-retry">Riprova</button></p>` : "");
    const r = $("#sm-c-retry", el); if (r) r.onclick = async () => { retryFailed(); };
  }
  async function callSay(text) {
    if (!call) return; const v = V(), my = ++call.token;
    setCall("speaking");
    try { call.stopBarge && call.stopBarge(); } catch (e) {} call.stopBarge = null;
    if (call.caps.bargeIn === "auto" && v.watchBargeIn) { try { call.stopBarge = v.watchBargeIn(() => { if (call && call.state === "speaking") { stopSpeaking(); callListen(); } }); } catch (e) {} }
    let r = null;
    try { r = await v.say(text, { rate: A.state().rate }); } catch (e) {}
    if (!call || my !== call.token) return;
    try { call.stopBarge && call.stopBarge(); } catch (e) {} call.stopBarge = null;
    if (r && r.interrupted) return;
    if (call.hold) setCall("idle"); else callListen();
  }
  async function callListen(hold) {
    if (!call) return; const v = V(), my = ++call.token;
    $("#sm-review", call.el).hidden = true; stopCount();
    setCall("listening");
    let r = null;
    try { r = await v.listen({ interim: tx => { if (call && my === call.token) { const el = $("#sm-call-text", call.el); if (el) el.innerHTML = `<p class="sm-sub sm-heard da">${hl(tx)}</p>`; } }, silenceMs: 1800, maxMs: 30000, hold: !!hold }); } catch (e) { r = { text: "", reason: "error" }; }
    if (!call || my !== call.token) return;
    const text = str(r && r.text);
    if (!text) {
      if (r && r.reason === "error" && r.error === "not-allowed") { setCall("paused"); $("#sm-c-tip", call.el).textContent = "Il microfono non è consentito: controlla il permesso del sito, oppure passa alla tastiera."; return; }
      call.empty++;
      if (call.hold || call.empty >= 2 || (r && r.reason === "stopped")) { setCall("paused"); drawCallText(); return; }
      return callListen();
    }
    call.empty = 0;
    showReview(text);
  }
  function showReview(text) {
    if (!call) return;
    setCall("review");
    const box = $("#sm-review", call.el), inp = $("#sm-rev-in", call.el), bar = $("#sm-count-bar", call.el);
    box.hidden = false; inp.value = text; $("#sm-call-text", call.el).innerHTML = "";
    bar.style.transition = "none"; bar.style.width = "100%"; void bar.offsetWidth;
    bar.style.transition = `width ${AUTO_SEND_MS}ms linear`; bar.style.width = "0%";
    call.countT = setTimeout(() => callSend(), AUTO_SEND_MS);
  }
  function stopCountOf(k) { if (k && k.countT) { clearTimeout(k.countT); k.countT = null; const bar = $("#sm-count-bar", k.el); if (bar) { bar.style.transition = "none"; bar.style.width = "0%"; } } }
  function stopCount() { stopCountOf(call); }
  async function callSend() {
    if (!call) return; stopCount();
    const inp = $("#sm-rev-in", call.el), text = inp.value.trim();
    $("#sm-review", call.el).hidden = true;
    if (!text) { setCall("paused"); return; }
    const c = T().current; c.usedVoice = true;
    setCall("thinking");
    const reply = await submit(text, true);
    if (!call) return;
    if (reply && reply.from === "npc") { drawCallText(); callSay(reply.text); }
    else { setCall("paused"); drawCallText(); const cc = T().current; if (cc && cc.kind === "script" && cc.script.ended) { closeCall(); } }
  }
  function drawWave() {
    if (!call) return;
    const cv = $("#sm-canvas", call.el), g = cv.getContext("2d"), W = cv.width, H = cv.height, still = reduced();
    const col = () => getComputedStyle(call.el).getPropertyValue("--sm-wave").trim() || "#0a84ff";
    let amp = 0.1;
    const frame = now => {
      if (!call) return;
      const st = call.state, t = (now - call.t0) / 1000;
      const live = call.level > 0.02 ? call.level : (st === "speaking" ? 0.45 + 0.25 * Math.sin(t * 5.3) * Math.sin(t * 2.1) : st === "listening" ? 0.18 + 0.08 * Math.sin(t * 3) : st === "thinking" ? 0.1 + 0.05 * Math.sin(t * 6) : 0.04);
      amp += (live - amp) * 0.15;
      g.clearRect(0, 0, W, H);
      const c = col();
      for (let k = 0; k < 3; k++) {
        g.beginPath(); g.lineWidth = 3 - k * 0.8; g.strokeStyle = c; g.globalAlpha = [0.95, 0.5, 0.25][k];
        for (let x = 0; x <= W; x += 6) {
          const env = Math.pow(Math.sin(Math.PI * x / W), 2);
          const y = H / 2 + Math.sin(x * (0.018 + k * 0.006) + (still ? 0 : t * (2.2 + k * 0.9)) + k) * env * amp * (H * 0.42) * (1 - k * 0.22);
          x ? g.lineTo(x, y) : g.moveTo(x, y);
        }
        g.stroke();
      }
      g.globalAlpha = 1;
      if (!still || st !== call.drawn) { call.drawn = st; }
      call.raf = requestAnimationFrame(frame);
    };
    call.raf = requestAnimationFrame(frame);
  }

  /* ---------- Fine sessione e report ---------- */
  function endPrompt() {
    const c = T().current; if (!c) return;
    const mine = c.messages.filter(m => m.from === "me" && !m.retry).length;
    if (!mine) { T().current = null; A.save(); closeCall(true); root.dataset.smHome = "1"; render(root); return; }
    finish();
  }
  function estimate(c, mine, errs) {
    const li = Math.max(0, LEVELS.indexOf(c.level)), n = mine.length || 1;
    const rate = errs.reduce((s, x) => s + (CATS[x.cat].w >= 3 ? 1 : 0.5), 0) / n;
    const avg = mine.reduce((s, m) => s + words(m.text).length, 0) / n;
    const need = [3, 5, 7, 9, 11][li] || 5;
    let est, text;
    if (n < 4) { est = ""; text = "Conversazione troppo breve per stimare il livello: servono almeno quattro tuoi messaggi."; }
    else if (rate <= 0.35 && avg >= need && c.up > c.down && LEVELS[li + 1]) { est = c.level; text = `Hai retto bene il livello ${c.level}, con frasi abbastanza lunghe e pochi errori. Puoi provare qualche scenario ${LEVELS[li + 1]}.`; }
    else if (rate <= 0.8 && c.down <= n / 2) { est = c.level; text = `In linea con il livello ${c.level}: ti fai capire, con errori che non bloccano la conversazione.`; }
    else { est = LEVELS[li - 1] || c.level; text = li > 0 ? `In questa conversazione il livello ${c.level} è stato faticoso: consolida il livello ${LEVELS[li - 1]} e riprova.` : "Stai muovendo i primi passi: molti errori sono normali a questo punto."; }
    return { est, text, rate, avg };
  }
  function examGrid(c, mine, errs, e) {
    const n = mine.length || 1, sc = (x, lo, hi) => Math.max(1, Math.min(5, Math.round(1 + 4 * (x - lo) / (hi - lo))));
    const heavy = errs.filter(x => CATS[x.cat].w >= 4).length / n, light = errs.length / n;
    const voc = new Set(mine.flatMap(m => words(A.norm(m.text)))).size / Math.max(1, mine.reduce((s, m) => s + words(m.text).length, 0));
    return [["Comprensibilità", sc(1 - heavy, 0.2, 1)], ["Correttezza", sc(1 - light / 2, 0.3, 1)], ["Ricchezza del lessico", sc(voc, 0.35, 0.8)], ["Ampiezza delle risposte", sc(e.avg, 3, [6, 8, 11, 14, 17][Math.max(0, LEVELS.indexOf(c.level))])], ["Tappe della prova", sc(c.done.length / Math.max(1, arr(c.scenario.checks).length), 0, 1)]];
  }
  function buildReport(c) {
    const mine = c.messages.filter(m => m.from === "me" && !m.failed);
    const real = mine.filter(m => !m.retry);
    const errs = mine.flatMap(m => [m.fix, ...arr(m.notes)].filter(Boolean));
    const seen = new Set(), corrections = errs.filter(x => { const k = A.norm(x.wrong) + "|" + A.norm(x.right); if (seen.has(k)) return false; seen.add(k); return true; })
      .map(x => ({ wrong: x.wrong, right: x.right, right_it: x.right_it || "", cat: x.cat, type: CATS[x.cat].label, why: x.why || "" }));
    const p = P();
    const byCat = {}; errs.forEach(x => { byCat[x.cat] = (byCat[x.cat] || 0) + 1; });
    const cats = Object.entries(byCat).map(([cat, n]) => ({ cat, n, total: p.errors[cat]?.n || n, weight: n * CATS[cat].w })).sort((a, b) => b.weight - a.weight || b.total - a.total);
    const clean = real.filter(m => m.checked && !m.fix && !arr(m.notes).length).length;
    const e = estimate(c, real, errs);
    const strengths = [];
    if (real.length && clean / real.length >= 0.5) strengths.push(`${clean} ${clean === 1 ? "messaggio" : "messaggi"} su ${real.length} senza errori.`);
    if (e.avg >= 6) strengths.push(`Frasi articolate: in media ${Math.round(e.avg)} parole per messaggio.`);
    const ch = arr(c.scenario.checks);
    if (ch.length && c.done.length === ch.length) strengths.push("Missione completata in tutte le sue tappe.");
    if (c.mode !== "guided" || !c.hints) strengths.push(c.mode === "guided" ? "Nessun suggerimento usato." : "Conversazione sostenuta senza aiuti.");
    if (c.usedVoice) strengths.push("Hai parlato a voce: è l'allenamento che serve di più.");
    const top = cats[0], u = top ? unitFor(top.cat, c.level) : null;
    let nextStep;
    if (u) nextStep = { kind: "unit", unit: u.id, text: `Ripassa «${(u.grammar && u.grammar[0] && u.grammar[0].h) || u.title}» (unità ${u.level}.${u.n}): riguarda l'errore che pesa di più, ${CATS[top.cat].label.toLowerCase()}.` };
    else if (ch.length && c.done.length < ch.length) nextStep = { kind: "scenario", scenario: c.scenario.id, text: `Rifai lo scenario «${c.scenario.title}» e completa le tappe mancanti.` };
    else { const nx = scenarios().find(s => s.level === c.level && s.id !== c.scenario.id && !p.scenarios[s.id]); nextStep = nx ? { kind: "scenario", scenario: nx.id, text: `Prova lo scenario «${nx.title}».` } : { kind: "none", text: "Continua con una conversazione libera sugli stessi argomenti." }; }
    const wordsNew = []; const ws = new Set();
    c.messages.forEach(m => arr(m.words).forEach(w => { const k = A.norm(w.da); if (!ws.has(k)) { ws.add(k); wordsNew.push(w); } }));
    return {
      v: 3, id: c.id, date: Date.now(), level: c.level, topic: c.scenario.title + (c.topic ? ` · ${c.topic}` : ""), scenario: c.scenario.id, mode: c.mode, kind: c.kind, voice: !!c.usedVoice,
      messages: real.length, sec: c.sec, score: null, clean, avgWords: Math.round(e.avg * 10) / 10, done: c.done.slice(), checks: ch, hints: c.hints, carded: c.carded || 0,
      estimate: e.est, estimateText: e.text, summary: "", strengths, patterns: [], pronunciation: corrections.filter(x => x.cat === "pronuncia").map(x => `${x.right}: ${x.why}`), next: [nextStep.text],
      corrections, words: wordsNew, cats, nextStep, exam: c.mode === "exam" ? { name: c.scenario.exam?.name || "Esame", grid: examGrid(c, real, errs, e) } : null,
      mine: real.map(m => m.text.slice(0, 300)).slice(0, 40),
    };
  }
  function finish() {
    const t = T(), c = t.current; if (!c) return;
    if (ctl) ctl.abort(); stopSpeaking(); closeCall(true);
    const r = buildReport(c), p = P();
    p.sessions++; p.minutes = Math.round(((p.minutes || 0) * 60 + c.sec) / 60);
    const ps = p.scenarios[c.scenario.id] ||= { n: 0, done: 0, total: 0 };
    ps.n++; ps.last = Date.now(); ps.total = r.checks.length; ps.done = Math.max(ps.done || 0, r.done.length);
    r.words.forEach(w => { if (!p.words.some(x => A.norm(x.da) === A.norm(w.da))) p.words.unshift(w); }); p.words = p.words.slice(0, 40);
    if (r.estimate && c.kind === "ai") {   // stima prudente: mediana delle ultime cinque sessioni
      const sk = c.usedVoice ? "speak" : "write", L = p.level[sk] ||= { est: "", hist: [] };
      L.hist = arr(L.hist).concat(r.estimate).slice(-5);
      const sorted = L.hist.map(x => LEVELS.indexOf(x)).sort((a, b) => a - b); L.est = LEVELS[sorted[Math.floor((sorted.length - 1) / 2)]] || r.estimate;
    }
    const keys = Object.keys(p.scenarios); if (keys.length > 80) keys.sort((a, b) => (p.scenarios[a].last || 0) - (p.scenarios[b].last || 0)).slice(0, keys.length - 80).forEach(k => delete p.scenarios[k]);
    p.updated = Date.now();
    t.reports.unshift(r); t.reports = t.reports.slice(0, MAX_REPORTS);
    t.current = null; A.save();
    showReport(r);
  }
  async function askComment(r, btn) {
    const eng = await getEngine();
    if (!eng) { toast("L'insegnante virtuale non è raggiungibile adesso."); return; }
    btn.disabled = true; btn.textContent = "Sto chiedendo…";
    const prompt = `You are an experienced Danish teacher. An Italian learner (target level ${r.level}) just finished a ${r.voice ? "spoken (speech-recognised)" : "written"} conversation practice${r.exam ? ` simulating the oral exam ${r.exam.name}` : ""}: "${r.topic}".
Learner's messages:\n${arr(r.mine).map((m, i) => `${i + 1}. ${m}`).join("\n")}
Corrections already noted:\n${r.corrections.map(x => `- "${x.wrong}" → "${x.right}" (${x.cat})`).join("\n") || "- none"}
Be honest and encouraging, in Italian, concrete. Do not invent errors. Return ONLY JSON: {"summary_it":"2-3 sentences","strengths_it":["max 3"],"advice_it":["2-3 concrete things to practise"],"level_estimate":"A1|A2|B1|B2|C1"}`;
    try {
      const d = await eng.json(prompt, { modelTier: "default", cache: false });
      const sum = str(d?.summary_it); if (!sum) throw { code: "invalid_json" };
      r.ai = { summary: sum, strengths: arr(d.strengths_it).map(str).filter(Boolean).slice(0, 3), advice: arr(d.advice_it).map(str).filter(Boolean).slice(0, 3), estimate: LEVELS.includes(str(d.level_estimate)) ? str(d.level_estimate) : "" };
      A.save(); showReport(r);
    } catch (e) { btn.disabled = false; btn.textContent = "Chiedi un commento all'insegnante"; toast(errText(e)); }
  }
  function showReport(r) {
    if (!root || !r) return;
    clearLayer();
    const corr = arr(r.corrections), isNew = r.v === 3;
    const adds = corr.map(x => ({ da: x.right, it: x.right_it || x.why || x.type || "", note: x.why || "", src: "conversa" }));
    const stat = (n, l) => `<div class="sm-stat"><b>${n}</b><span>${l}</span></div>`;
    const u = r.nextStep && r.nextStep.unit;
    root.innerHTML = `<div class="sm-report">
      <header class="sm-bar sm-bar-flat"><button class="sm-plain sm-backbtn" type="button" id="sm-r-back">${ic("back")}<span>Conversa</span></button><div class="sm-bar-mid"><span class="sm-bar-name">Report</span></div><span></span></header>
      <div class="sm-rep-head"><h2 class="t-title1">${esc(r.topic || "Conversazione")}</h2>
        <p class="sm-rep-date">${new Date(r.date).toLocaleString("it-IT", { day: "numeric", month: "long", hour: "2-digit", minute: "2-digit" })} · livello ${esc(r.level || "")}${r.voice ? " · a voce" : ""}${r.kind === "script" ? " · dialogo guidato" : ""}</p></div>
      <div class="sm-stats">${isNew ? stat(fmtTime(r.sec || 0), "durata") + stat(r.messages, "tuoi messaggi") + stat(corr.length, "correzioni") + (arr(r.checks).length ? stat(`${arr(r.done).length}/${r.checks.length}`, "tappe") : stat(r.clean, "senza errori"))
        : stat(r.score != null ? r.score : "–", "punteggio") + stat(r.messages || 0, "messaggi") + stat(corr.length, "correzioni")}</div>
      ${r.exam ? `<h3 class="sm-sec">Griglia della simulazione · ${esc(r.exam.name)}</h3><section class="sm-group sm-pad">${r.exam.grid.map(([l, v]) => `<div class="sm-grid-row"><span>${esc(l)}</span><span class="sm-pips" aria-label="${v} su 5">${[1, 2, 3, 4, 5].map(i => `<i class="${i <= v ? "on" : ""}"></i>`).join("")}</span></div>`).join("")}</section><p class="sm-foot">Simulazione non ufficiale: la griglia è calcolata in modo automatico e semplificato sui tuoi messaggi. I criteri veri e i voti li applicano esaminatore e censore.</p>` : ""}
      ${r.estimateText || r.estimate ? `<h3 class="sm-sec">Livello stimato</h3><section class="sm-group sm-pad"><p>${r.estimate ? `<span class="sm-lv lv-${esc(r.estimate)}">${esc(r.estimate)}</span> ` : ""}${esc(r.estimateText || "")}</p><p class="sm-foot in">Stima basata su questa conversazione, non una certificazione.${r.voice ? " A voce il riconoscimento può sbagliare: non conta come giudizio sulla pronuncia." : ""}</p></section>` : ""}
      ${r.ai ? `<h3 class="sm-sec">Il commento dell'insegnante</h3><section class="sm-group sm-pad"><p>${esc(r.ai.summary)}</p>${r.ai.advice.length ? `<ul class="sm-steps">${r.ai.advice.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}</section>` : r.summary ? `<section class="sm-group sm-pad"><p>${esc(r.summary)}</p></section>` : ""}
      ${arr(r.strengths).length ? `<h3 class="sm-sec">Punti forti</h3><section class="sm-group sm-pad"><ul class="sm-steps ok">${r.strengths.concat(r.ai ? r.ai.strengths : []).map(s => `<li>${esc(s)}</li>`).join("")}</ul></section>` : ""}
      ${arr(r.cats).length ? `<h3 class="sm-sec">Errori per tipo, dal più importante</h3><section class="sm-group">${r.cats.map(x => { const un = unitFor(x.cat, r.level); return `<div class="sm-row static"><span class="sm-row-main"><span class="sm-row-t">${esc(CATS[x.cat]?.label || x.cat)}</span><span class="sm-row-s">${x.n} in questa conversazione${x.total > x.n ? ` · ${x.total} in tutto` : ""}</span></span>${un ? `<button class="sm-link" type="button" data-unit="${esc(un.id)}" data-sub="grammatica">Ripassa la regola</button>` : ""}</div>`; }).join("")}</section>` : ""}
      ${arr(r.patterns).length ? `<h3 class="sm-sec">Errori ricorrenti</h3><section class="sm-group sm-pad">${r.patterns.map(p => `<div class="sm-fix flat"><div class="sm-fix-cat">${esc(p.p)}</div><div class="sm-fix-line">${p.w ? `<s class="da">${hl(p.w)}</s> ` : ""}<b class="da">${hl(p.r || "")}</b></div><div class="sm-fix-why">${esc(p.a || "")}</div></div>`).join("")}</section>` : ""}
      <h3 class="sm-sec">Correzioni (${corr.length})</h3>
      <section class="sm-group sm-pad">${corr.length ? corr.map((x, k) => `<div class="sm-fix flat"><div class="sm-fix-cat">${esc(x.type || CATS[x.cat]?.label || "Correzione")}</div><div class="sm-fix-line">${x.wrong ? `<s class="da">${hl(x.wrong)}</s> ` : ""}<b class="da">${hl(x.right)}</b><button class="sm-mini" type="button" data-say="${esc(x.right)}" aria-label="Ascolta">${ic("speaker")}</button></div>${x.why ? `<div class="sm-fix-why">${esc(x.why)}</div>` : ""}<div class="sm-fix-act"><button class="sm-link" type="button" data-add="${k}">Aggiungi al ripasso</button></div></div>`).join("") + `<button class="sm-link" type="button" id="sm-addall">Aggiungi tutte al ripasso</button>` : `<p>Nessuna correzione in questa conversazione.</p>`}</section>
      ${r.carded ? `<p class="sm-foot">${r.carded} ${r.carded === 1 ? "errore ricorrente è già diventato una scheda" : "errori ricorrenti sono già diventati schede"} di ripasso.</p>` : ""}
      ${arr(r.pronunciation).length ? `<h3 class="sm-sec">Pronuncia</h3><section class="sm-group sm-pad"><ul class="sm-steps">${r.pronunciation.map(p => `<li>${esc(p)}</li>`).join("")}</ul></section>` : ""}
      ${arr(r.words).length ? `<h3 class="sm-sec">Parole nuove</h3><div class="sm-words wrap">${r.words.map((w, i) => `<button class="sm-chip" type="button" data-w="${i}">${ic("plus")}<span class="da">${hl(w.da)}</span> ${esc(w.it)}</button>`).join("")}</div>` : ""}
      ${arr(r.next).length ? `<h3 class="sm-sec">Prossimo passo</h3><section class="sm-group sm-pad">${r.next.map(s => `<p>${esc(s)}</p>`).join("")}${u ? `<button class="sm-btn tinted" type="button" data-unit="${esc(u)}" data-sub="grammatica">Apri la regola</button>` : r.nextStep && r.nextStep.scenario ? `<button class="sm-btn tinted" type="button" id="sm-r-sc">Apri lo scenario</button>` : ""}</section>` : ""}
      <div class="sm-rep-cta">${isNew && !r.ai && arr(r.mine).length >= 3 ? `<button class="sm-btn tinted" type="button" id="sm-r-ai">Chiedi un commento all'insegnante</button>` : ""}<button class="sm-btn" type="button" id="sm-r-new">Nuova conversazione</button></div>
    </div>`;
    const home = () => { root.dataset.smHome = "1"; render(root); };
    $("#sm-r-back").onclick = home; $("#sm-r-new").onclick = home;
    $$("[data-add]", root).forEach(b => b.onclick = () => { if (A.addCard(adds[+b.dataset.add])) b.disabled = true; });
    $$("[data-w]", root).forEach(b => b.onclick = () => { const w = r.words[+b.dataset.w]; if (A.addCard({ da: w.da, it: w.it, src: "conversa" })) b.disabled = true; });
    const all = $("#sm-addall"); if (all) all.onclick = () => { let n = 0; adds.forEach(a => { if (addCardQuiet(a)) n++; }); all.disabled = true; toast(n ? `${n} ${n === 1 ? "frase aggiunta" : "frasi aggiunte"} al ripasso.` : "Erano già tutte nel ripasso."); };
    const ai = $("#sm-r-ai"); if (ai) { ai.onclick = () => askComment(r, ai); engineInfo().then(e => { if (e.offline && ai.isConnected) ai.hidden = true; }); }
    const rs = $("#sm-r-sc"); if (rs) rs.onclick = () => { const s = scenarios().find(x => x.id === r.nextStep.scenario); home(); if (s) openStart(s); };
    window.scrollTo({ top: 0 });
  }

  /* ---------- Agganci ---------- */
  // Conversazione a tema dalle unità C1 (campo talk)
  A.startTalk = (talk, unit) => {
    if (!talk || !str(talk.opener)) return false;
    const sc = { id: "talk-" + (unit ? unit.id : A.norm(talk.title || "tema").replace(/\s+/g, "-")), level: unit ? unit.level : A.currentLevel(), title: str(talk.title) || (unit ? unit.title : "Conversazione a tema"), icon: "bubble",
      npc: { name: "Mette", role: str(talk.role) || "la tua interlocutrice" }, setting: unit ? `Conversazione a tema dell'unità «${unit.title}».` : "", mission: str(talk.mission), checks: [], functions: [], vocab: [], phrases: arr(talk.useful), opener: str(talk.opener), opener_it: str(talk.opener_it) };
    A.go("tutor"); if (root) { root.dataset.smHome = "1"; render(root); }
    openStart(sc); return true;
  };
  document.addEventListener("visibilitychange", () => { if (document.visibilityState !== "visible") { A.save(); if (call && call.state === "listening") { call.token++; try { V().stopListening(false); } catch (e) {} setCall("paused"); } } });

  A.addTab("tutor", "Conversa", render, "ripasso");
});
