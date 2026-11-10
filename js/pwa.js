/* Installazione come app (PWA): service worker, avviso di aggiornamento, pulsante e istruzioni «Installa». */
(function () {
  "use strict";
  let deferred = null, waiting = null;
  const listeners = [];

  function isStandalone() {
    try {
      return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
    } catch (e) { return false; }
  }
  function canInstall() { return !!deferred; }
  async function promptInstall() {
    if (!deferred) return false;
    const ev = deferred;
    deferred = null;
    try {
      ev.prompt();
      const r = await ev.userChoice;
      return !!r && r.outcome === "accepted";
    } catch (e) { return false; }
  }
  function onChange(fn) { if (typeof fn === "function") listeners.push(fn); }
  function notify() { listeners.forEach(f => { try { f(canInstall()); } catch (e) {} }); }

  // Applica davvero la versione nuova: dice al service worker in attesa di attivarsi; la pagina si ricarica quando ha preso il controllo.
  function applyUpdate() {
    if (waiting) { try { waiting.postMessage("skipWaiting"); } catch (e) {} setTimeout(() => location.reload(), 2500); }
    else location.reload();
  }

  window.DanskPWA = { canInstall, promptInstall, isStandalone, onChange, applyUpdate };

  window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); deferred = e; notify(); });
  window.addEventListener("appinstalled", () => { deferred = null; notify(); });

  function showUpdate(worker) {
    waiting = worker || waiting;
    if (document.getElementById("pwa-update")) return;
    const box = document.createElement("div");
    box.id = "pwa-update"; box.className = "toast"; box.setAttribute("role", "status");
    box.style.cssText = "display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center;z-index:90";
    const t = document.createElement("span"); t.textContent = "È disponibile una versione nuova.";
    const b = document.createElement("button"); b.type = "button"; b.className = "btn sm primary"; b.textContent = "Aggiorna"; b.onclick = applyUpdate;
    const x = document.createElement("button"); x.type = "button"; x.className = "btn sm plain"; x.textContent = "Dopo"; x.onclick = () => box.remove();
    box.append(t, b, x);
    document.body.appendChild(box);
  }

  /* Riga «Installa» nelle impostazioni: pulsante quando il browser lo consente, altrimenti i passi esatti. */
  function installHelp() {
    const row = document.getElementById("pwa-row"), btn = document.getElementById("pwa-install"), help = document.getElementById("pwa-help");
    if (!row || !btn || !help) return;
    const ua = navigator.userAgent;
    let framed = false; try { framed = window.self !== window.top; } catch (e) { framed = true; }
    const ios = /iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
    const safari = /^((?!chrome|crios|fxios|edg|android).)*safari/i.test(ua), edge = /edg\//i.test(ua), firefox = /firefox|fxios/i.test(ua);
    const sync = () => {
      const can = canInstall();
      btn.hidden = !can;
      if (isStandalone()) help.textContent = "L'app è installata: la stai usando adesso.";
      else if (can) help.textContent = "Tocca «Installa»: l'app comparirà tra le tue app e funzionerà anche senza rete.";
      else if (framed) help.textContent = "Da questa pagina non si può installare. Apri l'indirizzo dell'app in Safari o Chrome e installala da lì.";
      else if (location.protocol === "file:") help.textContent = "Per installarla apri l'app dal suo indirizzo https (non dal file index.html).";
      else if (ios && !safari) help.textContent = "Su iPhone e iPad: apri questa pagina in Safari, poi tocca Condividi › Aggiungi alla schermata Home.";
      else if (ios) help.textContent = "Su iPhone e iPad: tocca Condividi (il quadrato con la freccia) › Aggiungi alla schermata Home.";
      else if (safari) help.textContent = "In Safari sul Mac: menu File › Aggiungi al Dock.";
      else if (edge) help.textContent = "In Edge: menu ⋯ › App › Installa Dansk hver dag.";
      else if (firefox) help.textContent = "Firefox non installa le app web: apri questa pagina in Safari, Chrome o Edge.";
      else help.textContent = "In Chrome: icona di installazione a destra nella barra degli indirizzi, oppure menu ⋮ › Trasmetti, salva e condividi › Installa pagina come app.";
    };
    sync(); onChange(sync);
    btn.onclick = () => { promptInstall().then(sync); };
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", installHelp); else installHelp();

  try {
    const host = location.hostname;
    const ok = "serviceWorker" in navigator &&
      (location.protocol === "https:" || (location.protocol === "http:" && (host === "localhost" || host === "127.0.0.1")));
    let framed = false;
    try { framed = window.self !== window.top; } catch (e) { framed = true; }
    if (!ok || framed) return;

    let reloaded = false;
    const hadController = !!navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!hadController || reloaded) return;   // prima installazione: niente ricarica
      reloaded = true; location.reload();
    });
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(reg => {
        const watch = w => {
          if (!w) return;
          w.addEventListener("statechange", () => {
            if (w.state === "installed" && navigator.serviceWorker.controller) showUpdate(w);
          });
        };
        if (reg.waiting && navigator.serviceWorker.controller) showUpdate(reg.waiting);
        reg.addEventListener("updatefound", () => watch(reg.installing));
        // controlla gli aggiornamenti quando l'app torna in primo piano
        document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reg.update().catch(() => {}); });
      }).catch(() => {});
    });
  } catch (e) { /* nessun service worker: l'app funziona comunque */ }
})();
