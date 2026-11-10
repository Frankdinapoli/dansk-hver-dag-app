/* Configurazione pubblica dell'app (nessun segreto qui: questo file è pubblico).
   proxy: indirizzo del servizio gratuito che custodisce la chiave dell'IA
          (Google Apps Script «…/exec» oppure Cloudflare Worker). Vuoto = non ancora configurato.
   sync:  indirizzo del servizio di sincronizzazione; vuoto = lo stesso del proxy.
   Vedi docs/setup-una-tantum.md. */
window.DANSK_CONFIG = {
  proxy: "https://script.google.com/macros/s/AKfycbxqILVUC3mammE6-rKvk_xooVYSJKQGMTLhhm8aUgfBSJhZEhz0LE_e6-j6U4gB5Z8/exec",
  sync: "",
};
