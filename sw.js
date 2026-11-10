/* Service worker di «Dansk hver dag»: l'app funziona anche senza rete.
   ELENCO FILE: quando aggiungi o rinomini file (css, js, contenuti, icone) aggiorna APP_SHELL e cambia VERSION.
   tools/smoke.js controlla che ogni file caricato da index.html sia in questo elenco.
   Strategia: i file dell'app vengono serviti subito dalla copia salvata e intanto riscaricati (stale-while-revalidate),
   così anche se VERSION viene dimenticata gli aggiornamenti arrivano all'apertura successiva. */
const VERSION = "dansk-v3-3";
const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./css/style.css",
  "./css/ext.css",
  "./css/lab.css",
  "./css/samtale.css",
  "./css/pronuncia.css",
  "./js/config.js",
  "./js/store.js",
  "./js/course/a1a.js",
  "./js/course/a1b.js",
  "./js/course/a2a.js",
  "./js/course/a2b.js",
  "./js/course/b1a.js",
  "./js/course/b1b.js",
  "./js/course/b2a.js",
  "./js/course/b2b.js",
  "./js/course/c1a.js",
  "./js/course/c1b.js",
  "./js/data/scenari.js",
  "./js/data/dialoghi.js",
  "./js/ai.js",
  "./js/local-ai.js",
  "./js/voce.js",
  "./js/pronuncia.js",
  "./js/ext/tutor.js",
  "./js/ext/diario.js",
  "./js/ext/lab.js",
  "./js/ext/pronuncia.js",
  "./js/ext/livello.js",
  "./js/sync.js",
  "./js/app.js",
  "./js/pwa.js",
  "./icons/icon.svg",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon-maskable-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", e => {
  // Nessun skipWaiting automatico: la pagina mostra «Aggiorna» e lo chiede lei (js/pwa.js).
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(APP_SHELL.map(u => new Request(u, { cache: "reload" })))));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("message", e => {
  if (e.data === "skipWaiting") self.skipWaiting();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Altre origini (proxy dell'IA, sincronizzazione, Gemini, Ollama): mai in cache, non toccare
  if (url.origin !== self.location.origin) return;

  // Navigazione: rete prima (con un limite di tempo), poi la copia salvata
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      try {
        const r = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(() => no(new Error("lento")), 4000))]);
        if (r && r.ok) cache.put("./index.html", r.clone());
        return r;
      } catch (err) {
        return (await cache.match("./index.html")) || (await cache.match("./")) || Response.error();
      }
    })());
    return;
  }

  // File dell'app: copia salvata subito, aggiornamento in sottofondo
  e.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const hit = await cache.match(req, { ignoreSearch: true });
    const net = fetch(req).then(r => { if (r && r.ok) cache.put(req, r.clone()); return r; }).catch(() => null);
    if (hit) { e.waitUntil(net); return hit; }
    return (await net) || Response.error();
  })());
});
