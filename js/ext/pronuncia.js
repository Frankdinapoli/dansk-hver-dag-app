/* Dansk hver dag — scheda «Pronuncia»: ripeti la frase con il microfono, suoni difficili. */
(window.DANSK_EXT ||= []).push(function (A) {
"use strict";
const { $, esc, hl, shuffle, toast, sayBtn } = A;
const V = window.DanskVoce, P = window.DanskPronuncia;
if (!V || !P) { console.warn("Pronuncia: moduli voce non caricati."); return; }

let sec = null, tab = "ripeti", queue = [], idx = 0, phase = "idle", last = null, listening = false, typed = "";
const ADV_KEY = "dansk-hver-dag.voiceAdvice";

function pool() {
  let us = [];
  try { us = A.trainUnits("started"); } catch (e) { us = []; }
  let lines = A.dictLines(us);
  if (!lines.length) lines = A.dictLines(A.UNITS.slice(0, 1));
  return lines;
}
function nextLine() {
  if (!queue.length || idx >= queue.length) { queue = shuffle(pool().slice()); idx = 0; }
  return queue[idx] || null;
}
const advanceLine = () => { idx++; phase = "idle"; last = null; typed = ""; };

function adviceOnce() {
  let seen = false; try { seen = localStorage.getItem(ADV_KEY); } catch (e) {}
  if (seen) return "";
  const a = V.voiceAdvice();
  if (!a.needed) return "";
  try { localStorage.setItem(ADV_KEY, "1"); } catch (e) {}
  return `<div class="tip pr-advice"><b>Voce danese</b><br>${esc(a.text_it)}</div>`;
}

function render(el) {
  sec = el;
  stopAll();
  el.innerHTML = `<div class="stack pr">
    <div><h2 class="t-title2">Pronuncia</h2>
    <p class="muted">Ripeti frasi ad alta voce e allena i suoni più difficili del danese.</p></div>
    <div class="pr-seg" role="group" aria-label="Sezioni">
      <button type="button" class="chip pr-tab" data-t="ripeti" aria-pressed="${tab === "ripeti"}">Ripeti la frase</button>
      <button type="button" class="chip pr-tab" data-t="suoni" aria-pressed="${tab === "suoni"}">Suoni difficili</button>
    </div>
    <div id="pr-body"></div></div>`;
  el.querySelectorAll(".pr-tab").forEach(b => b.onclick = () => { stopAll(); tab = b.dataset.t; render(el); });
  tab === "suoni" ? renderTips($("#pr-body", el)) : renderRepeat($("#pr-body", el));
}

function stopAll() {
  V.stopListening(false); V.stopSaying(); listening = false;
}

/* ---------- Ripeti la frase ---------- */
function renderRepeat(body) {
  const line = nextLine();
  if (!line) { body.innerHTML = `<div class="panel"><p class="muted">Non ci sono ancora frasi. Apri un'unità del Percorso e torna qui.</p></div>`; return; }
  const c = V.caps();
  const canRec = c.stt;
  const hold = c.strategy === "hold";
  body.innerHTML = `${adviceOnce()}
    <div class="panel pr-card">
      <div class="label">Frase da ripetere</div>
      <div class="pr-phrase da" lang="da">${hl(line.da)}</div>
      ${line.it ? `<div class="muted pr-it">${esc(line.it)}</div>` : ""}
      <div class="cta-row pr-listen">
        <button type="button" class="btn" id="pr-hear">Ascolta</button>
        <button type="button" class="btn" id="pr-slow">Ascolta piano</button>
      </div>
      ${canRec ? `
        <div class="pr-micwrap">
          <button type="button" class="pr-mic" id="pr-mic" aria-pressed="false" aria-label="${hold ? "Tieni premuto per parlare" : "Tocca per parlare"}">
            <span class="pr-mic-dot" aria-hidden="true"></span><span class="pr-mic-t">${hold ? "Tieni premuto e parla" : "Tocca e parla"}</span>
          </button>
          <div class="pr-heard small muted" id="pr-live" aria-live="polite"></div>
        </div>
        <p class="small muted pr-note">${esc(c.note_it)}</p>`
      : `
        <div class="tip pr-note"><b>Ascolta e ripeti</b><br>${esc(c.note_it)} Per ora ripeti ad alta voce dopo l'ascolto: non posso valutare la voce.
        Se vuoi un confronto, usa il microfono della tastiera con la lingua danese nel campo qui sotto, poi tocca «Confronta».</div>
        <label class="label" for="pr-type">Scrivi o detta la frase</label>
        <textarea id="pr-type" class="pr-type" rows="2" lang="da" autocapitalize="off" autocomplete="off" spellcheck="false" placeholder="Scrivi in danese">${esc(typed)}</textarea>
        <div class="cta-row"><button type="button" class="btn primary" id="pr-cmp">Confronta</button></div>`}
      <div id="pr-res" aria-live="polite"></div>
      <div class="cta-row pr-nav">
        <button type="button" class="btn" id="pr-again" hidden>Riprova</button>
        <button type="button" class="btn ${canRec ? "" : "primary"}" id="pr-next">Prossima</button>
      </div>
    </div>`;
  const res = $("#pr-res", body);
  $("#pr-hear", body).onclick = () => { V.unlock(); V.say(line.da); };
  $("#pr-slow", body).onclick = () => { V.unlock(); V.say(line.da, { rate: 0.6 }); };
  $("#pr-next", body).onclick = () => { stopAll(); advanceLine(); render(sec); };
  $("#pr-again", body).onclick = () => { res.innerHTML = ""; $("#pr-again", body).hidden = true; };
  if (!canRec) {
    $("#pr-type", body).oninput = e => { typed = e.target.value; };
    $("#pr-cmp", body).onclick = () => { const t = $("#pr-type", body).value.trim(); if (!t) { toast("Scrivi o detta la frase."); return; } showResult(res, body, line, t, ""); };
    return;
  }
  const mic = $("#pr-mic", body), live = $("#pr-live", body);
  const setOn = on => { listening = on; mic.setAttribute("aria-pressed", String(on)); mic.classList.toggle("on", on); $(".pr-mic-t", mic).textContent = on ? (hold ? "Ti ascolto… lascia quando hai finito" : "Ti ascolto… tocca per fermare") : (hold ? "Tieni premuto e parla" : "Tocca e parla"); };
  const begin = () => {
    if (listening) return;
    V.unlock(); res.innerHTML = ""; live.textContent = ""; setOn(true);
    V.listen({ hold, interim: t => { live.textContent = t; }, silenceMs: 1800 }).then(r => {
      if (!sec || !sec.contains(mic)) return;
      setOn(false); live.textContent = "";
      if (r.reason === "stopped" && !r.text && !hold && !listening) { return; }
      if (r.reason === "error" || !r.text) { res.innerHTML = `<div class="tip pr-err">${esc(r.error || "Non ho sentito nulla. Riprova.")}</div>`; $("#pr-again", body).hidden = false; return; }
      showResult(res, body, line, r.text, r.alternatives);
    });
  };
  if (hold) {
    let down = false;
    const up = () => { if (!down) return; down = false; V.stopListening(true); };
    mic.addEventListener("pointerdown", e => { e.preventDefault(); down = true; try { mic.setPointerCapture(e.pointerId); } catch (x) {} begin(); });
    mic.addEventListener("pointerup", up); mic.addEventListener("pointercancel", up);
    mic.addEventListener("contextmenu", e => e.preventDefault());
    mic.addEventListener("keydown", e => { if ((e.key === " " || e.key === "Enter") && !e.repeat) { e.preventDefault(); down = true; begin(); } });
    mic.addEventListener("keyup", e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); up(); } });
  } else {
    mic.addEventListener("click", () => { if (listening) V.stopListening(true); else begin(); });
  }
}

function showResult(res, body, line, text, alts) {
  const r = P.compare(line.da, text);
  last = r;
  const pct = Math.round(r.score * 100);
  const verdict = pct >= 90 ? "Molto bene: il riconoscimento ha capito quasi tutto." : pct >= 60 ? "Abbastanza bene: qualche parola da riascoltare." : "Da riprovare: ascolta di nuovo e ripeti piano.";
  const words = r.words.map(w => {
    const cls = "pr-w pr-" + w.status;
    const mark = w.status === "ok" ? "" : w.status === "near" ? " (quasi)" : w.status === "miss" ? " (non capita)" : " (in più)";
    return `<span class="${cls}" ${w.hint_it ? `title="${esc(w.hint_it)}"` : ""}>${hl(w.w)}<span class="pr-sr">${mark}</span></span>`;
  }).join(" ");
  const hints = r.words.filter(w => w.hint_it).map(w => `<li><span class="da">${hl(w.w)}</span>: ${esc(w.hint_it)}</li>`).join("");
  const tips = r.tips.map(t => `<div class="pr-tip"><b>${esc(t.title_it)}</b><p class="small">${esc(t.text_it)}</p>
    <div class="pr-ex">${t.examples.slice(0, 4).map(e => `<span class="pr-exi"><span class="da">${hl(e)}</span>${sayBtn(e, "sm")}</span>`).join("")}</div></div>`).join("");
  res.innerHTML = `<div class="pr-result">
    <div class="pr-score"><span class="pr-pct">${pct}%</span><span>${esc(verdict)}</span></div>
    <div class="label">Ho capito</div>
    <div class="pr-heard-box da" lang="da">${text ? hl(text) : "<span class='muted'>niente</span>"}</div>
    <div class="label">Parola per parola</div>
    <div class="pr-words">${words}</div>
    <p class="small muted">Verde: capita. Giallo: quasi. Rosso: non capita o mancante. Blu: parola in più.</p>
    ${hints ? `<ul class="pr-hints small">${hints}</ul>` : ""}
    ${tips}
    <p class="small muted pr-disc">${esc(r.disclaimer_it)}</p>
    ${pct < 70 ? `<div class="cta-row"><button type="button" class="btn" id="pr-save">Salva nel mazzo</button></div>` : ""}
  </div>`;
  const sv = $("#pr-save", res);
  if (sv) sv.onclick = () => { if (A.addCard({ da: line.da, it: line.it || "", note: "Frase da ripetere", src: "Pronuncia" })) sv.disabled = true; };
  const again = $("#pr-again", body); if (again) again.hidden = false;
}

/* ---------- Suoni difficili ---------- */
function renderTips(body) {
  body.innerHTML = `<div class="tip">Le scritture in italiano qui sotto sono solo approssimazioni: i suoni del danese non esistono tutti in italiano. Ascolta sempre gli esempi e imita la voce.</div>
    ${P.TIPS.map(t => `<div class="panel pr-tipcard"><div class="t-headline"><b>${esc(t.title_it)}</b></div>
      <p>${esc(t.text_it)}</p>
      <div class="pr-ex">${t.examples.map(e => `<span class="pr-exi"><span class="da">${hl(e)}</span>${sayBtn(e)}</span>`).join("")}</div></div>`).join("")}`;
}

A.addTab("pronuncia", "Pronuncia", render, "laboratorio");
});
