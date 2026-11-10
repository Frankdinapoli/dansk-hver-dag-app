/* Dansk hver dag — voce: riconoscimento, sintesi, interruzione (window.DanskVoce).
   Tutto degrada senza errori se le API del browser non esistono. Vedi docs/voce-compatibilita.md. */
(function () {
"use strict";
const W = window, N = navigator;
const safe = f => { try { return f(); } catch (e) { return undefined; } };

/* ---------------------------------------------------------
   Piattaforma e capacità
   --------------------------------------------------------- */
const getSR = () => W.SpeechRecognition || W.webkitSpeechRecognition || null;
const inIframe = () => { try { return W.self !== W.top; } catch (e) { return true; } };

function detect() {
  const ua = N.userAgent || "";
  const ios = /iPad|iPhone|iPod/.test(ua) || (N.platform === "MacIntel" && N.maxTouchPoints > 1);
  const android = /Android/.test(ua);
  let platform = "altro";
  if (ios) platform = "ios";
  else if (/Edg(e|A)?\//.test(ua)) platform = "edge";
  else if (/Firefox\//.test(ua)) platform = "firefox";
  else if (/Chrome\/|Chromium\//.test(ua)) platform = "chromium";
  else if (/Macintosh/.test(ua) && /Safari\//.test(ua)) platform = "mac-safari";
  const touch = ios || android || /Mobile/.test(ua) || (N.maxTouchPoints || 0) > 1;
  const standalone = !!(N.standalone || safe(() => W.matchMedia("(display-mode: standalone)").matches));
  return { platform, ios, touch, standalone, mobile: ios || android || /Mobile/.test(ua) };
}

function voiceScore(v) {
  if (W.DanskApp && W.DanskApp.voiceScore) return W.DanskApp.voiceScore(v);
  const n = v.name || ""; let s = 10;
  if (/natural|neural/i.test(n)) s = 100; else if (/premium/i.test(n)) s = 80;
  else if (/enhanced|forbedret/i.test(n)) s = 60; else if (/online|google/i.test(n)) s = 50;
  if (v.localService === false) s += 5;
  return s;
}
const qualityOf = v => { const s = voiceScore(v); return s >= 100 ? "naturale" : s >= 80 ? "alta qualità" : s >= 60 ? "migliorata" : "standard"; };
function bestVoice() {
  const app = safe(() => W.DanskApp && W.DanskApp.daVoice && W.DanskApp.daVoice());
  if (app) return app;
  const list = safe(() => W.speechSynthesis.getVoices()) || [];
  return list.filter(v => /^da(-|_|$)/i.test(v.lang)).sort((a, b) => voiceScore(b) - voiceScore(a))[0] || null;
}

function caps() {
  const d = detect();
  const SR = getSR();
  const iframe = inIframe();
  const iosApp = d.ios && d.standalone;
  const stt = !!SR && !iframe && !iosApp;
  const sttContinuous = stt && (d.platform === "chromium" || d.platform === "edge");
  const tts = !!(W.speechSynthesis && W.SpeechSynthesisUtterance);
  const v = tts ? bestVoice() : null;
  const desktopChrom = (d.platform === "chromium" || d.platform === "edge") && !d.mobile;
  let strategy, note_it;
  if (!stt) {
    strategy = d.touch ? "keyboard" : "text";
    if (iframe) note_it = "In questa pagina il microfono è bloccato. Scrivi la risposta o usa la dettatura della tastiera.";
    else if (iosApp) note_it = "Nell'app installata su iPhone il riconoscimento vocale non funziona. Usa il microfono della tastiera, con la lingua danese, oppure scrivi.";
    else if (d.platform === "firefox") note_it = "Firefox non ha il riconoscimento vocale. Scrivi la risposta o usa la dettatura del sistema.";
    else note_it = d.touch ? "Questo browser non ha il riconoscimento vocale. Usa il microfono della tastiera o scrivi." : "Questo browser non ha il riconoscimento vocale. Scrivi la risposta.";
  } else if (desktopChrom) {
    strategy = "handsfree";
    note_it = "Parla quando vuoi: l'app ti ascolta e si ferma quando fai silenzio.";
  } else {
    strategy = "hold";
    note_it = d.platform === "mac-safari" ? "Su Safari tieni premuto il pulsante mentre parli, poi lascia. Servono Dettatura e Siri attivi."
      : d.ios ? "Su iPhone tieni premuto il pulsante mentre parli, poi lascia. Servono Dettatura e Siri attivi."
      : "Tieni premuto il pulsante mentre parli, poi lascia.";
  }
  const bargeIn = desktopChrom && !!safe(() => N.mediaDevices && N.mediaDevices.getUserMedia) && !iframe ? "auto" : (stt || tts ? "tap" : "none");
  return { stt, sttContinuous, tts, voice: v ? { name: v.name, quality: qualityOf(v) } : null, platform: d.platform, standalone: d.standalone, iframe, touch: d.touch, bargeIn, strategy, note_it };
}

/* ---------------------------------------------------------
   Sblocco (da chiamare dentro un tocco)
   --------------------------------------------------------- */
let unlocked = false, actx = null;
function unlock() {
  if (unlocked) return;
  unlocked = true;
  safe(() => {
    if (W.speechSynthesis && W.SpeechSynthesisUtterance) {
      const u = new W.SpeechSynthesisUtterance(" "); u.volume = 0; u.lang = "da-DK";
      W.speechSynthesis.speak(u);
    }
  });
  safe(() => {
    const AC = W.AudioContext || W.webkitAudioContext;
    if (AC) { actx = actx || new AC(); if (actx.state === "suspended") actx.resume(); }
  });
}

/* ---------------------------------------------------------
   Riconoscimento
   --------------------------------------------------------- */
let cur = null;   // sessione attiva { stop(commit) }
const ERR = {
  "not-allowed": "Il microfono non è permesso. Consenti l'accesso nelle impostazioni del browser, oppure usa la tastiera.",
  "service-not-allowed": "Il riconoscimento vocale non è attivo su questo dispositivo. Controlla che la Dettatura sia attiva, oppure usa la tastiera.",
  "network": "Serve la connessione a internet per il riconoscimento vocale.",
  "no-speech": "Non ho sentito nulla. Riprova avvicinandoti al microfono.",
  "audio-capture": "Non trovo il microfono.",
  "aborted": "Il riconoscimento si è interrotto. Riprova.",
  "language-not-supported": "Il danese non è disponibile per il riconoscimento su questo dispositivo.",
};

function listen(o) {
  o = o || {};
  const c = caps();
  if (!c.stt) return Promise.resolve({ text: "", alternatives: [], reason: "error", error: c.note_it });
  stopSaying();
  if (cur) cur.stop(false);
  const SR = getSR();
  const hold = !!o.hold, silenceMs = o.silenceMs || 1800, maxMs = o.maxMs || (hold ? 60000 : 20000);
  return new Promise(resolve => {
    let rec = null, prev = "", curText = "", alts = [], gotAny = false, finished = false, stopping = false;
    let restarts = 0, holdRestarts = 0, silenceT = null, maxT = null, commitT = null, lastErr = null;
    const t0 = Date.now();
    const total = () => (prev + " " + curText).replace(/\s+/g, " ").trim();
    const clearT = () => { clearTimeout(silenceT); clearTimeout(maxT); clearTimeout(commitT); };
    function finish(reason, error, discard) {
      if (finished) return; finished = true; clearT();
      const r = rec; rec = null;
      if (r) { r.onresult = r.onerror = r.onend = r.onstart = null; safe(() => r.abort()); }
      if (cur === sess) cur = null;
      resolve({ text: discard ? "" : total(), alternatives: discard ? [] : alts, reason, error: error || undefined });
    }
    const sess = { stop(commit) {
      if (finished) return;
      if (!commit) { finish("stopped", undefined, true); return; }
      stopping = true; clearTimeout(silenceT);
      if (rec) { safe(() => rec.stop()); commitT = setTimeout(() => finish("stopped"), 1500); } else finish("stopped");
    } };
    cur = sess;
    function armSilence() {
      if (hold || !gotAny) return;
      clearTimeout(silenceT); silenceT = setTimeout(() => finish("silence"), silenceMs);
    }
    function begin() {
      rec = new SR();
      rec.lang = "da-DK"; rec.interimResults = true; rec.maxAlternatives = 3;
      rec.continuous = !!c.sttContinuous;
      curText = ""; lastErr = null;
      rec.onresult = ev => {
        if (finished) return;
        let txt = "";
        for (let i = 0; i < ev.results.length; i++) txt += (txt ? " " : "") + ev.results[i][0].transcript.trim();
        curText = txt; gotAny = !!txt.trim() || gotAny;
        const last = ev.results[ev.results.length - 1];
        if (last && last.isFinal) { alts = Array.from(last).map(a => (prev ? prev + " " : "") + a.transcript.trim()).filter(Boolean).slice(0, 3); }
        if (o.interim) safe(() => o.interim(total()));
        armSilence();
      };
      rec.onerror = ev => {
        const code = ev && ev.error; lastErr = code;
        if (code === "aborted" && (stopping || finished)) return;
        if (code === "not-allowed" || code === "service-not-allowed" || code === "network" || code === "audio-capture" || code === "language-not-supported") finish("error", ERR[code] || String(code));
      };
      rec.onend = () => {
        if (finished) return;
        if (stopping) { finish("stopped"); return; }
        const elapsed = Date.now() - t0;
        if (elapsed < maxMs) {
          if (!gotAny && restarts < 2) { restarts++; safe(restart); if (rec) return; }
          else if (hold && gotAny && holdRestarts < 10) { holdRestarts++; prev = total(); safe(restart); if (rec) return; }
        }
        if (gotAny) finish("final");
        else finish("error", ERR[lastErr] || ERR["no-speech"]);
      };
      rec.start();
    }
    function restart() { prev = total(); curText = ""; const old = rec; rec = null; if (old) { old.onresult = old.onerror = old.onend = null; } begin(); }
    maxT = setTimeout(() => { if (hold) sess.stop(true); else finish("silence"); }, maxMs);
    try { begin(); } catch (e) { finish("error", ERR["aborted"]); }
  });
}
function stopListening(commit) { if (cur) cur.stop(!!commit); }

/* ---------------------------------------------------------
   Sintesi
   --------------------------------------------------------- */
let sayToken = 0, curSay = null;
function splitText(t) {
  t = String(t == null ? "" : t).replace(/ \/ /g, ", ").replace(/_{2,}/g, "…").replace(/\s+/g, " ").trim();
  if (!t) return [];
  const parts = t.split(/(?<=[.!?…;:])\s+/);
  const out = [];
  parts.forEach(p => {
    while (p.length > 160) {
      let k = p.lastIndexOf(",", 160); if (k < 40) k = p.lastIndexOf(" ", 160); if (k < 40) k = 160;
      out.push(p.slice(0, k + 1).trim()); p = p.slice(k + 1).trim();
    }
    if (p) out.push(p);
  });
  return out;
}
function say(text, o) {
  o = o || {};
  if (!W.speechSynthesis || !W.SpeechSynthesisUtterance) return Promise.resolve({ ended: false, interrupted: false });
  if (cur) cur.stop(false);                // non parlare mentre si ascolta
  stopSaying();
  const parts = splitText(text);
  if (!parts.length) return Promise.resolve({ ended: true, interrupted: false });
  const my = ++sayToken;
  const voice = bestVoice();
  const rate = o.rate || safe(() => W.DanskApp.state().rate) || 1;
  return new Promise(resolve => {
    let i = 0, timer = null, done = false;
    const end = r => { if (done) return; done = true; clearTimeout(timer); if (curSay && curSay.my === my) curSay = null; resolve(r); };
    curSay = { my, cancel: () => end({ ended: false, interrupted: true }) };
    const step = () => {
      if (done || my !== sayToken) return;
      if (i >= parts.length) { safe(() => o.onEnd && o.onEnd()); end({ ended: true, interrupted: false }); return; }
      const txt = parts[i++];
      const u = new W.SpeechSynthesisUtterance(txt);
      u.lang = "da-DK"; u.rate = rate; if (voice) u.voice = voice;
      let adv = false;
      const next = () => { if (adv) return; adv = true; clearTimeout(timer); setTimeout(step, 0); };
      u.onstart = () => { if (i === 1) safe(() => o.onStart && o.onStart()); };
      u.onend = next;
      u.onerror = ev => { if (my !== sayToken) return; if (ev && /interrupted|canceled/.test(ev.error || "")) return; next(); };
      timer = setTimeout(next, 4000 + txt.length * 150 / Math.max(.5, rate));   // rete di sicurezza se onend non arriva
      safe(() => W.speechSynthesis.speak(u));
    };
    step();
  });
}
function stopSaying() {
  sayToken++;
  const s = curSay; curSay = null;
  safe(() => W.speechSynthesis && W.speechSynthesis.cancel());
  if (s) s.cancel();
}

/* ---------------------------------------------------------
   Microfono condiviso: livello e interruzione parlando
   --------------------------------------------------------- */
let mic = null;   // { stream, ctx, an, buf, refs }
function rms(m) {
  m.an.getByteTimeDomainData(m.buf);
  let s = 0; for (let i = 0; i < m.buf.length; i++) { const x = (m.buf[i] - 128) / 128; s += x * x; }
  return Math.sqrt(s / m.buf.length);
}
function acquireMic() {
  if (mic) { mic.refs++; return Promise.resolve(mic); }
  const gum = safe(() => N.mediaDevices.getUserMedia.bind(N.mediaDevices));
  const AC = W.AudioContext || W.webkitAudioContext;
  if (!gum || !AC) return Promise.reject(new Error("no-mic"));
  return gum({ audio: { echoCancellation: true, noiseSuppression: true } }).then(stream => {
    const ctx = new AC(); const an = ctx.createAnalyser(); an.fftSize = 1024;
    ctx.createMediaStreamSource(stream).connect(an);
    safe(() => ctx.state === "suspended" && ctx.resume());
    mic = { stream, ctx, an, buf: new Uint8Array(an.fftSize), refs: 1 };
    return mic;
  });
}
function releaseMic() {
  if (!mic) return;
  if (--mic.refs > 0) return;
  const m = mic; mic = null;
  safe(() => m.stream.getTracks().forEach(t => t.stop()));
  safe(() => m.ctx.close());
}

function watchBargeIn(onVoice) {
  if (caps().bargeIn !== "auto") return () => {};
  let stopped = false, timer = null, got = false;
  acquireMic().then(m => {
    if (stopped) { releaseMic(); return; }
    got = true;
    const t0 = Date.now(); let noise = 0, nN = 0, above = 0, thr = 0.05;
    timer = setInterval(() => {
      const l = rms(m), now = Date.now();
      if (now - t0 < 400) { noise += l; nN++; thr = Math.max(0.05, (noise / nN) * 2.5 + 0.015); return; }
      if (l > thr) { if (!above) above = now; if (now - above >= 350) { clearInterval(timer); timer = null; safe(() => onVoice()); } }
      else { above = 0; noise = noise * 0.98 + l * 0.02 * 1; }
    }, 50);
  }).catch(() => {});
  return function stop() {
    if (stopped) return; stopped = true;
    if (timer) clearInterval(timer);
    if (got) releaseMic();
  };
}

function level(cb) {
  let stopped = false, timer = null, got = false, ph = 0;
  const c = caps();
  const synth = () => { ph += 0.35; timer = setInterval(() => cb(Math.max(0, Math.min(1, 0.3 + 0.2 * Math.sin(ph += 0.35) + 0.15 * Math.random()))), 33); };
  if (c.platform === "ios" || c.platform === "mac-safari" || c.iframe) synth();   // non aprire un secondo flusso accanto al riconoscimento
  else acquireMic().then(m => {
    if (stopped) { releaseMic(); return; }
    got = true;
    timer = setInterval(() => cb(Math.max(0, Math.min(1, rms(m) * 4))), 33);
  }).catch(() => { if (!stopped) synth(); });
  return function stop() {
    if (stopped) return; stopped = true;
    if (timer) clearInterval(timer);
    if (got) releaseMic();
  };
}

/* ---------------------------------------------------------
   Consiglio sulla voce
   --------------------------------------------------------- */
function voiceAdvice() {
  const c = caps();
  if (!c.tts) return { needed: true, text_it: "Questo browser non ha la sintesi vocale: non potrai ascoltare il danese. Prova con Safari, Chrome o Edge." };
  if (c.voice && c.voice.quality !== "standard") return { needed: false, text_it: "" };
  const lack = c.voice ? "La voce danese di questo dispositivo è di qualità base." : "Non ho trovato nessuna voce danese.";
  let how;
  if (c.platform === "edge") how = "Su Microsoft Edge ci sono voci danesi naturali (per esempio Christel e Jeppe). Se non le vedi, aggiorna Edge e scegli la voce in Impostazioni › Voce danese.";
  else if (c.platform === "ios") how = "Su iPhone o iPad apri Impostazioni › Accessibilità › Contenuto vocale › Voci › Danese, scegli una voce e scarica la versione migliorata (Enhanced o Premium).";
  else if (c.platform === "mac-safari") how = "Sul Mac apri Impostazioni di Sistema › Accessibilità › Contenuto vocale › Voce di sistema › Gestisci voci, scegli Danese e scarica una voce migliorata. Poi riapri la pagina.";
  else if (c.platform === "chromium") how = "Per una voce più naturale usa Microsoft Edge, che ha voci danesi naturali (Christel e Jeppe). Su Mac puoi anche scaricare una voce migliorata da Impostazioni di Sistema › Accessibilità › Contenuto vocale.";
  else how = "Controlla nelle impostazioni del dispositivo se puoi scaricare una voce danese migliore. Su Microsoft Edge ci sono voci naturali.";
  return { needed: true, text_it: `${lack} ${how} I nomi dei menu possono cambiare un po' secondo la versione.` };
}

W.DanskVoce = { caps, unlock, listen, stopListening, say, stopSaying, watchBargeIn, level, voiceAdvice };
})();
