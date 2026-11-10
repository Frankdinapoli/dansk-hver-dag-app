/* Scenari di conversazione (A1–C1 + esami). Formato: docs/piano-v3.md §3.6 */
window.DANSK_SCENARI = [
  /* ---------------- A1 ---------------- */
  {
    id: "a1-cafe", level: "A1", title: "Al caffè", icon: "cup",
    npc: { name: "Freja", role: "barista in un caffè di Nørrebro" },
    setting: "Sei in un caffè vicino all'università. Hai fretta e hai un po' di fame.",
    mission: "Ordina un caffè e qualcosa da mangiare, scegli se prendere qui o da portare via e chiedi quanto costa.",
    checks: ["saluta la barista", "ordina da bere", "ordina qualcosa da mangiare", "chiede il prezzo e paga"],
    functions: ["ordinare", "chiedere il prezzo", "ringraziare", "pagare"],
    vocab: ["en kaffe = un caffè", "en cappuccino = un cappuccino", "en te = un tè", "en kanelsnegl = una girella alla cannella", "en kage = una torta, un dolce", "et glas vand = un bicchiere d'acqua", "mælk = latte", "her = qui", "med = con", "uden sukker = senza zucchero", "at tage med = portare via"],
    phrases: ["Jeg vil gerne have en kaffe. = Vorrei un caffè.", "En kaffe, tak. = Un caffè, grazie.", "Jeg tager en kanelsnegl. = Prendo una girella alla cannella.", "Her eller to go? = Qui o da portare via? (frase del barista, rispondi: «Her.» / «To go.»)", "Hvad koster det? = Quanto costa?", "Kan jeg betale med kort? = Posso pagare con la carta?"],
    opener: "Hej! Hvad kunne du tænke dig?", opener_it: "Ciao! Cosa desideri?"
  },
  {
    id: "a1-nabo", level: "A1", title: "Presentarsi a un vicino", icon: "person",
    npc: { name: "Henrik", role: "vicino di casa, vive sul tuo stesso pianerottolo" },
    setting: "Ti sei appena trasferito. Incontri il vicino sulle scale con la spazzatura in mano.",
    mission: "Presentati, di' da dove vieni e cosa fai a Copenaghen, e chiedi al vicino come si chiama.",
    checks: ["saluta e dice il proprio nome", "dice di essere italiano", "dice che studia o lavora", "chiede il nome del vicino"],
    functions: ["presentarsi", "dire la nazionalità", "parlare di sé", "fare una domanda semplice"],
    vocab: ["en nabo = un vicino", "en lejlighed = un appartamento", "en trappe = una scala", "en etage = un piano", "en studerende = uno studente (universitario; «en student» è chi ha il diploma di maturità)", "et job = un lavoro", "at bo = abitare", "at flytte = traslocare", "velkommen = benvenuto", "italiensk = italiano", "ny = nuovo"],
    phrases: ["Hej, jeg hedder Francesco. = Ciao, mi chiamo Francesco.", "Jeg er italiener. = Sono italiano.", "Jeg er flyttet ind i dag. = Mi sono trasferito oggi.", "Jeg læser på universitetet. = Studio all'università.", "Hvad hedder du? = Come ti chiami?", "Hyggeligt at møde dig. = Piacere di conoscerti."],
    opener: "Hej! Er du den nye nabo?", opener_it: "Ciao! Sei il nuovo vicino?"
  },
  {
    id: "a1-bager", level: "A1", title: "In panetteria", icon: "cart",
    npc: { name: "Maja", role: "commessa in una panetteria (bager) di quartiere" },
    setting: "È sabato mattina. C'è un po' di fila nella panetteria vicino a casa tua.",
    mission: "Compra due panini e un pane, di' quanti ne vuoi e paga.",
    checks: ["saluta", "chiede panini e pane con le quantità giuste", "risponde a «Er det alt?»", "paga"],
    functions: ["comprare", "dire le quantità", "contare", "pagare"],
    vocab: ["et rundstykke = un panino", "et brød = un pane", "et rugbrød = un pane di segale", "en croissant = un croissant", "en kage = un dolce", "to = due", "fire = quattro", "alt = tutto", "ellers = altrimenti, per il resto", "næste = prossimo", "en pose = un sacchetto"],
    phrases: ["Jeg vil gerne have to rundstykker. = Vorrei due panini.", "Og et rugbrød, tak. = E un pane di segale, grazie.", "Nej tak, det er alt. = No grazie, è tutto.", "Hvad koster det i alt? = Quanto costa in tutto?", "Jeg betaler med MobilePay. = Pago con MobilePay.", "Tak, hav en god weekend! = Grazie, buon weekend!"],
    opener: "Hej! Hvem er den næste?", opener_it: "Ciao! Chi è il prossimo?"
  },
  {
    id: "a1-vej", level: "A1", title: "Chiedere indicazioni", icon: "chat",
    npc: { name: "Ole", role: "passante per strada, vicino a Nørreport" },
    setting: "Sei vicino alla stazione di Nørreport e cerchi la biblioteca universitaria. Fermi un passante.",
    mission: "Chiedi dove si trova la biblioteca, capisci la direzione e verifica se è lontano.",
    checks: ["attira l'attenzione con gentilezza", "chiede dove si trova il posto", "capisce destra/sinistra/dritto", "chiede se è lontano e ringrazia"],
    functions: ["chiedere la strada", "capire le direzioni", "chiedere se è lontano", "ringraziare"],
    vocab: ["et bibliotek = una biblioteca", "en station = una stazione", "en gade = una strada", "et hjørne = un angolo", "til højre = a destra", "til venstre = a sinistra", "ligeud = dritto", "langt = lontano", "tæt på = vicino", "et lyskryds = un incrocio con semaforo", "at gå = andare a piedi"],
    phrases: ["Undskyld, hvor ligger biblioteket? = Scusi, dov'è la biblioteca?", "Er det langt herfra? = È lontano da qui?", "Skal jeg gå til højre eller til venstre? = Devo andare a destra o a sinistra?", "Kan du sige det igen? = Puoi ripeterlo?", "Kan du tale lidt langsommere? = Puoi parlare un po' più piano?", "Mange tak for hjælpen! = Grazie mille per l'aiuto!"],
    opener: "Hej. Kan jeg hjælpe dig?", opener_it: "Ciao. Posso aiutarti?"
  },
  {
    id: "a1-kasse", level: "A1", title: "Alla cassa del supermercato", icon: "cart",
    npc: { name: "Lone", role: "cassiera in un supermercato (Netto)" },
    setting: "Hai riempito il carrello e sei alla cassa. Hai con te una borsa e il telefono.",
    mission: "Rispondi alle domande della cassiera su sacchetto, scontrino e pagamento, e paga.",
    checks: ["saluta", "risponde sul sacchetto (pose)", "risponde sullo scontrino (bon)", "sceglie come pagare (kort/MobilePay)"],
    functions: ["rispondere a domande di routine", "dire sì/no con gentilezza", "pagare", "salutare"],
    vocab: ["en pose = un sacchetto", "en bon = uno scontrino", "et kort = una carta", "kontant = in contanti", "MobilePay = MobilePay", "en taske = una borsa", "gratis = gratis", "en pris = un prezzo", "en kasse = una cassa", "en kurv = un cesto", "at betale = pagare"],
    phrases: ["Ja tak, en pose. = Sì grazie, un sacchetto.", "Nej tak, jeg har en taske med. = No grazie, ho una borsa con me.", "Ja tak, jeg vil gerne have bon. = Sì grazie, vorrei lo scontrino.", "Nej tak, ingen bon. = No grazie, niente scontrino.", "Jeg betaler med MobilePay. = Pago con MobilePay.", "Tak, i lige måde! = Grazie, altrettanto!"],
    opener: "Hej. Skal du have en pose?", opener_it: "Ciao. Ti serve un sacchetto?"
  },
  {
    id: "a1-fest", level: "A1", title: "Fare conoscenza a una festa", icon: "star",
    npc: { name: "Emil", role: "studente danese, amico di un tuo compagno di corso" },
    setting: "Sei a una festa in un appartamento di Vesterbro. Non conosci quasi nessuno e ti siedi vicino a un ragazzo.",
    mission: "Fai conversazione con Emil: di' come ti chiami, da dove vieni, cosa studi e fagli due domande.",
    checks: ["si presenta", "dice da dove viene", "dice cosa studia o fa", "fa almeno una domanda a Emil"],
    functions: ["presentarsi", "parlare di sé", "fare domande", "esprimere un'opinione semplice"],
    vocab: ["en fest = una festa", "en ven = un amico", "en veninde = un'amica", "at studere = studiare", "at komme fra = venire da", "at bo = abitare", "ret = abbastanza, piuttosto", "meget = molto", "sjov = divertente", "hyggelig = piacevole", "en øl = una birra"],
    phrases: ["Jeg hedder Francesco, og du? = Mi chiamo Francesco, e tu?", "Jeg kommer fra Italien. = Vengo dall'Italia.", "Jeg læser økonomi. = Studio economia.", "Hvad læser du? = Cosa studi?", "Hvor bor du? = Dove abiti?", "Det er en rigtig god fest. = È proprio una bella festa."],
    opener: "Hej! Jeg hedder Emil. Hvem er du?", opener_it: "Ciao! Mi chiamo Emil. Tu chi sei?"
  },

  /* ---------------- A2 ---------------- */
  {
    id: "a2-supermarked", level: "A2", title: "Al supermercato: cercare un prodotto", icon: "cart",
    npc: { name: "Nikolaj", role: "addetto agli scaffali in un supermercato (Føtex)" },
    setting: "Stai preparando la cena per degli amici e non trovi la pasta né il parmigiano. Vedi un addetto.",
    mission: "Chiedi dove trovare pasta e parmigiano, informati sulle offerte e su cosa si può usare al posto del parmigiano.",
    checks: ["chiede dove si trova un prodotto", "capisce la corsia indicata", "chiede delle offerte (tilbud)", "chiede un'alternativa o la quantità giusta"],
    functions: ["chiedere dove si trova qualcosa", "capire le indicazioni nel negozio", "chiedere consiglio", "confrontare prezzi"],
    vocab: ["en hylde = uno scaffale", "en gang = una corsia", "et tilbud = un'offerta", "pasta = pasta", "en ost = un formaggio", "en pakke = una confezione", "frisk = fresco", "frossen = surgelato", "billig = economico", "dyr = caro", "udsolgt = esaurito", "at lede efter = cercare"],
    phrases: ["Undskyld, jeg leder efter pasta. = Scusi, cerco la pasta.", "Hvor finder jeg parmesan? = Dove trovo il parmigiano?", "Har I noget på tilbud i dag? = Avete qualcosa in offerta oggi?", "Er den her billigere end den der? = Questa costa meno di quella?", "Hvad kan jeg bruge i stedet for? = Cosa posso usare al posto?", "Ved du, hvornår den kommer ind igen? = Sai quando ne arrivano di nuovi?"],
    opener: "Hej, kan jeg hjælpe dig med at finde noget?", opener_it: "Ciao, posso aiutarti a trovare qualcosa?"
  },
  {
    id: "a2-tog", level: "A2", title: "Treno: Rejsekort, binario e ritardo", icon: "bus",
    npc: { name: "Camilla", role: "addetta all'assistenza clienti DSB alla stazione centrale (København H)" },
    setting: "Sei a København H, vuoi andare a Odense nel weekend. Il tuo treno è in ritardo e non sai quale binario.",
    mission: "Chiedi che biglietto o Rejsekort ti serve per Odense, da quale binario parte il treno e cosa fare con il ritardo.",
    checks: ["chiede come comprare il biglietto per Odense", "chiede da quale binario parte", "chiede del ritardo (forsinket)", "chiede se deve cambiare treno"],
    functions: ["comprare un biglietto", "chiedere informazioni sul viaggio", "capire annunci di ritardo", "chiedere di ripetere"],
    vocab: ["en billet = un biglietto", "et Rejsekort = una tessera Rejsekort", "et spor = un binario", "en afgang = una partenza", "en forsinkelse = un ritardo", "forsinket = in ritardo", "en returbillet = un biglietto di andata e ritorno", "at skifte = cambiare (treno)", "at tjekke ind = fare il check-in", "aflyst = cancellato", "en plads = un posto"],
    phrases: ["Jeg skal til Odense. = Devo andare a Odense.", "Hvor meget koster en billet til Odense? = Quanto costa un biglietto per Odense?", "Fra hvilket spor går toget? = Da quale binario parte il treno?", "Hvor længe er toget forsinket? = Quanto è in ritardo il treno?", "Skal jeg skifte tog? = Devo cambiare treno?", "Kan jeg bruge mit Rejsekort? = Posso usare il mio Rejsekort?"],
    opener: "Goddag. Hvad kan jeg hjælpe dig med?", opener_it: "Buongiorno. Come posso aiutarti?"
  },
  {
    id: "a2-laege", level: "A2", title: "Prenotare dal medico e descrivere i sintomi", icon: "cross",
    npc: { name: "Pia", role: "receptionist in uno studio medico (lægehus)" },
    setting: "Hai mal di gola e un po' di febbre da due giorni. Telefoni al tuo medico di base.",
    mission: "Prenota una visita, descrivi i sintomi e concorda un orario. Hai il sundhedskort (tessera sanitaria).",
    checks: ["dice perché chiama", "descrive i sintomi e da quando", "concorda giorno e ora", "dà il proprio nome e il CPR-nummer se richiesto"],
    functions: ["prenotare un appuntamento", "descrivere sintomi", "dire da quanto tempo", "dare dati personali"],
    vocab: ["en læge = un medico", "en tid = un appuntamento, un orario", "ondt i halsen = mal di gola", "feber = febbre", "hoste = tosse", "hovedpine = mal di testa", "at være syg = essere malato", "siden i forgårs = da avantieri", "et sundhedskort = una tessera sanitaria", "et CPR-nummer = un codice fiscale (CPR)", "i dag = oggi", "i morgen = domani"],
    phrases: ["Jeg vil gerne bestille en tid hos lægen. = Vorrei prenotare una visita dal medico.", "Jeg har ondt i halsen og feber. = Ho mal di gola e febbre.", "Det har jeg haft siden i forgårs. = Ce l'ho da avantieri.", "Har I en tid i dag eller i morgen? = Avete un posto oggi o domani?", "Kl. 10.30 passer fint. = Alle 10.30 va bene.", "Mit navn er Francesco Rossi. = Mi chiamo Francesco Rossi."],
    opener: "Lægehuset, det er Pia. Hvad kan jeg hjælpe med?", opener_it: "Studio medico, sono Pia. Come posso aiutarla?"
  },
  {
    id: "a2-aftale", level: "A2", title: "Spostare un appuntamento", icon: "chat",
    npc: { name: "Camilla", role: "receptionist di un parrucchiere (frisør) a Frederiksberg" },
    setting: "Hai un appuntamento dal parrucchiere domani alle 15, ma ti è uscito un esame all'università.",
    mission: "Telefona, di' che devi spostare l'appuntamento, spiega il motivo e concorda una nuova data.",
    checks: ["si presenta e dice quale appuntamento", "spiega che non può venire", "propone o sceglie un nuovo giorno e orario", "conferma e ringrazia"],
    functions: ["spostare un appuntamento", "scusarsi", "proporre un orario", "confermare"],
    vocab: ["en aftale = un appuntamento", "at flytte = spostare", "at aflyse = annullare", "desværre = purtroppo", "en eksamen = un esame", "ledig = libero", "en tid = un orario", "næste uge = la settimana prossima", "om eftermiddagen = al pomeriggio", "passer = va bene (orario)", "i stedet = invece"],
    phrases: ["Jeg har en tid i morgen kl. 15. = Ho un appuntamento domani alle 15.", "Kan jeg flytte den til en anden dag? = Posso spostarlo a un altro giorno?", "Desværre har jeg en eksamen. = Purtroppo ho un esame.", "Har I en ledig tid på torsdag? = Avete un posto libero giovedì?", "Det passer mig fint. = Mi va benissimo.", "Undskyld ulejligheden. = Scusi il disturbo."],
    opener: "Frisør Hansen, det er Camilla.", opener_it: "Parrucchiere Hansen, sono Camilla."
  },
  {
    id: "a2-apotek", level: "A2", title: "In farmacia", icon: "cross",
    npc: { name: "Søren", role: "farmacista in un apotek" },
    setting: "Hai il raffreddore, un po' di mal di testa e una ricetta elettronica dal medico.",
    mission: "Ritira il medicinale con ricetta, chiedi qualcosa per il raffreddore e capisci come prenderli.",
    checks: ["dice che ha una ricetta (en recept)", "descrive il problema", "capisce la dose (quante volte al giorno)", "chiede il prezzo"],
    functions: ["descrivere un problema di salute", "chiedere un medicinale", "capire le istruzioni", "chiedere il prezzo"],
    vocab: ["et apotek = una farmacia", "en recept = una ricetta", "en tablet = una compressa", "smertestillende = antidolorifico", "forkølet = raffreddato", "næsespray = spray nasale", "en gang om dagen = una volta al giorno", "to gange om dagen = due volte al giorno", "bivirkninger = effetti collaterali", "med mad = durante i pasti", "gratis = gratis"],
    phrases: ["Jeg har en recept fra min læge. = Ho una ricetta del mio medico.", "Jeg er forkølet og har hovedpine. = Sono raffreddato e ho mal di testa.", "Har du noget mod hovedpine? = Ha qualcosa per il mal di testa?", "Hvor mange tabletter skal jeg tage? = Quante compresse devo prendere?", "Kan jeg tage dem med mad? = Posso prenderle a stomaco pieno?", "Hvad koster det? = Quanto costa?"],
    opener: "Hej, hvad kan jeg hjælpe dig med?", opener_it: "Ciao, come posso aiutarti?"
  },
  {
    id: "a2-restaurant", level: "A2", title: "Ordinare al ristorante e pagare", icon: "cup",
    npc: { name: "Mikkel", role: "cameriere in un ristorante a Vesterbro" },
    setting: "Sei a cena con due amici. Uno di voi non mangia carne e tu sei allergico alle noci.",
    mission: "Chiedi un tavolo, ordina da bere e da mangiare (con la tua allergia), e alla fine chiedi il conto e dividi.",
    checks: ["chiede un tavolo per tre", "ordina da bere", "ordina un piatto e dice dell'allergia", "chiede il conto e dice come paga"],
    functions: ["prenotare/chiedere un tavolo", "ordinare", "dire un'allergia", "chiedere il conto"],
    vocab: ["et bord = un tavolo", "en menu = un menu", "en ret = un piatto", "en forret = un antipasto", "en hovedret = un piatto principale", "vegetar = vegetariano", "allergisk over for = allergico a", "nødder = noci", "regningen = il conto", "drikkepenge = mancia", "hver for sig = separatamente"],
    phrases: ["Vi er tre personer. = Siamo in tre.", "Har I et bord til tre? = Avete un tavolo per tre?", "Jeg vil gerne have burgeren. = Prendo l'hamburger.", "Jeg er allergisk over for nødder. = Sono allergico alle noci.", "Må vi få regningen, tak? = Possiamo avere il conto, per favore?", "Kan vi betale hver for sig? = Possiamo pagare separatamente?"],
    opener: "Goddag! Har I bestilt bord?", opener_it: "Buongiorno! Avete prenotato un tavolo?"
  },

  /* ---------------- B1 ---------------- */
  {
    id: "b1-bank", level: "B1", title: "In banca: aprire un conto", icon: "building",
    npc: { name: "Louise", role: "consulente bancaria in una filiale di Copenaghen" },
    setting: "Hai appena ricevuto il CPR-nummer e vuoi aprire un conto per lo stipendio del tuo studiejob.",
    mission: "Spiega che vuoi aprire un conto, capisci quali documenti servono, chiedi del NemKonto e di MitID, e informati sui costi.",
    checks: ["spiega perché è venuto", "capisce i documenti richiesti", "chiede del NemKonto", "chiede di MitID/carta e dei costi mensili"],
    functions: ["spiegare una richiesta", "chiedere informazioni su procedure", "capire requisiti", "chiedere costi"],
    vocab: ["en konto = un conto", "en NemKonto = conto per pagamenti statali (NemKonto)", "MitID = identità digitale (MitID)", "et dankort = carta di debito danese (Dankort)", "et gebyr = una commissione", "en løn = uno stipendio", "en lønkonto = un conto per lo stipendio", "et pas = un passaporto", "en netbank = un home banking", "at oprette = aprire, creare", "SU = borsa di studio statale (viene pagata sul NemKonto)"],
    phrases: ["Jeg vil gerne oprette en konto. = Vorrei aprire un conto.", "Jeg har fået et CPR-nummer for nylig. = Ho ricevuto da poco il CPR.", "Hvad skal jeg medbringe? = Cosa devo portare?", "Hvordan registrerer jeg min NemKonto? = Come registro il mio NemKonto?", "Er der et månedligt gebyr? = C'è una commissione mensile?", "Kan jeg få MitID, når kontoen er oprettet? = Posso avere MitID quando il conto è aperto?"],
    opener: "Goddag, velkommen. Hvad kan jeg hjælpe dig med i dag?", opener_it: "Buongiorno, benvenuto. Cosa posso fare per lei oggi?"
  },
  {
    id: "b1-lejebolig", level: "B1", title: "Affitto: visita a una stanza", icon: "house",
    npc: { name: "Rasmus", role: "coinquilino che affitta una stanza in un bofællesskab a Nørrebro" },
    setting: "Visiti una stanza in un appartamento condiviso: 4 persone, 5.200 kr. al mese, tre mesi di deposito.",
    mission: "Fai le domande importanti: affitto, spese, depositum, husorden, contratto; presentati come possibile coinquilino.",
    checks: ["chiede cosa comprende l'affitto (forbrug, internet)", "chiede del depositum", "chiede delle regole di casa (husorden)", "dice se è interessato e quando saprà"],
    functions: ["fare domande su condizioni", "parlare di sé come coinquilino", "negoziare dettagli", "dire di essere interessato"],
    vocab: ["et depositum = un deposito cauzionale", "forbrug = consumi (luce, acqua, riscaldamento)", "en husleje = un affitto", "et lejemål = un immobile in affitto, una locazione", "husorden = regole di casa", "et værelse = una stanza", "et fælles køkken = una cucina in comune", "indflytning = trasferimento", "en opsigelse = una disdetta", "en måned = un mese", "at dele = condividere"],
    phrases: ["Hvad er huslejen, og er forbrug med? = Quanto è l'affitto, e i consumi sono inclusi?", "Hvor meget er depositum? = A quanto ammonta il deposito?", "Hvordan fungerer det med rengøring? = Come funzionano le pulizie?", "Er der en husorden, I følger? = Avete delle regole di casa?", "Hvad er opsigelsesvarslet? = Qual è il preavviso di disdetta?", "Jeg er rigtig interesseret i værelset. = Sono molto interessato alla stanza."],
    opener: "Hej, kom indenfor. Det er her, du kommer til at bo, hvis det bliver dig.", opener_it: "Ciao, entra. Qui vivresti, se sceglieremo te."
  },
  {
    id: "b1-uni", level: "B1", title: "Studievejleder: iscrizione a un esame", icon: "graduation",
    npc: { name: "Anne-Mette", role: "studievejleder (consulente di orientamento) all'università" },
    setting: "Non sei riuscito a iscriverti a un esame entro la scadenza e vuoi capire cosa fare.",
    mission: "Spiega il problema, chiedi se puoi ancora iscriverti, capisci cosa succede con il tentativo e concorda un passo successivo.",
    checks: ["spiega il problema", "chiede se può ancora iscriversi", "capisce le conseguenze (forsøg, omprøve)", "chiede cosa fare ora e conferma"],
    functions: ["spiegare un problema", "chiedere alternative", "capire regole", "concordare i passi successivi"],
    vocab: ["en tilmelding = un'iscrizione", "en frist = una scadenza", "en eksamen = un esame", "en omprøve = una sessione di recupero", "et forsøg = un tentativo", "et studienævn = commissione didattica", "en dispensation = una deroga", "et semester = un semestre", "pensum = programma d'esame", "en vejledning = un orientamento", "at overskride = superare, oltrepassare"],
    phrases: ["Jeg nåede ikke at tilmelde mig i tide. = Non ho fatto in tempo a iscrivermi.", "Er det muligt at få en dispensation? = È possibile ottenere una deroga?", "Hvad sker der, hvis jeg tilmelder mig til omprøven? = Cosa succede se mi iscrivo alla sessione di recupero?", "Tæller det som et forsøg? = Conta come tentativo?", "Hvem skal jeg kontakte? = Chi devo contattare?", "Det vil jeg gøre med det samme. = Lo faccio subito."],
    opener: "Hej, kom ind og sæt dig. Hvad drejer det sig om?", opener_it: "Ciao, entra e siediti. Di cosa si tratta?"
  },
  {
    id: "b1-kundeservice", level: "B1", title: "Servizio clienti: problema con internet", icon: "chat",
    npc: { name: "Thomas", role: "operatore del servizio clienti di un fornitore di internet e telefono" },
    setting: "Il wifi di casa cade da tre giorni e hai già riavviato il router. Chiami l'assistenza.",
    mission: "Spiega il problema, rispondi alle domande tecniche semplici, ottieni una soluzione o un appuntamento del tecnico, e chiedi cosa fare per l'abbonamento.",
    checks: ["spiega il problema e da quando", "dice cosa ha già provato", "concorda una soluzione (tecnico o sostituzione)", "chiede della fattura o di un rimborso"],
    functions: ["descrivere un guasto", "dire cosa si è provato", "chiedere una soluzione", "chiedere un rimborso"],
    vocab: ["en router = un router", "et abonnement = un abbonamento", "et signal = un segnale", "en tekniker = un tecnico", "en fejl = un guasto, un errore", "en faktura = una fattura", "et kundenummer = un numero cliente", "at genstarte = riavviare", "at ringe tilbage = richiamare", "en kompensation = un risarcimento", "ustabil = instabile"],
    phrases: ["Mit internet falder ud flere gange om dagen. = La mia connessione cade più volte al giorno.", "Det har det gjort i tre dage. = Va avanti da tre giorni.", "Jeg har allerede genstartet routeren. = Ho già riavviato il router.", "Kan en tekniker komme forbi? = Può passare un tecnico?", "Kan jeg få penge tilbage for de dage? = Posso avere un rimborso per quei giorni?", "Mit kundenummer er … = Il mio numero cliente è…"],
    opener: "Goddag, du taler med Thomas. Må jeg bede om dit kundenummer?", opener_it: "Buongiorno, parla con Thomas. Posso avere il suo numero cliente?"
  },
  {
    id: "b1-borger", level: "B1", title: "Borgerservice: CPR, sundhedskort, indirizzo", icon: "building",
    npc: { name: "Karen", role: "impiegata allo sportello del Borgerservice" },
    setting: "Sei al Borgerservice con il numero d'attesa. Ti sei trasferito in un nuovo appartamento e devi sistemare l'indirizzo.",
    mission: "Spiega che hai cambiato indirizzo, chiedi di aggiornare il CPR-registro, informati sul sundhedskort e sul medico di base.",
    checks: ["spiega che ha cambiato indirizzo", "porta i documenti richiesti (lejekontrakt, pas)", "chiede del sundhedskort", "chiede come scegliere il medico di base"],
    functions: ["spiegare una pratica", "capire i documenti necessari", "chiedere cosa succede dopo", "chiedere tempi"],
    vocab: ["en flytning = un trasloco", "en adresseændring = un cambio di indirizzo", "et CPR-nummer = un codice fiscale danese", "et sundhedskort = una tessera sanitaria", "en praktiserende læge = un medico di base", "en lejekontrakt = un contratto d'affitto", "et pas = un passaporto", "et ID = un documento", "et nummer = un numero (d'attesa)", "at tilmelde = registrare", "at modtage = ricevere"],
    phrases: ["Jeg er flyttet, og jeg skal have ændret min adresse. = Mi sono trasferito e devo cambiare l'indirizzo.", "Her er min lejekontrakt og mit pas. = Ecco il contratto d'affitto e il passaporto.", "Hvornår får jeg mit nye sundhedskort? = Quando ricevo la nuova tessera sanitaria?", "Hvordan vælger jeg en læge? = Come scelgo un medico?", "Skal jeg gøre noget mere selv? = Devo fare altro da solo?", "Hvor lang tid tager det? = Quanto tempo ci vuole?"],
    opener: "Hej, nummer 47? Hvad kan jeg hjælpe med?", opener_it: "Ciao, numero 47? Come posso aiutarla?"
  },
  {
    id: "b1-studiejob", level: "B1", title: "Colloquio per uno studiejob in un bar", icon: "briefcase",
    npc: { name: "Sara", role: "responsabile di un caffè-bar in centro" },
    setting: "Hai mandato la candidatura per un lavoro part-time nel weekend. Sara ti riceve per un breve colloquio.",
    mission: "Presentati, parla della tua esperienza e della tua disponibilità, e chiedi informazioni su orari, paga e formazione.",
    checks: ["si presenta e dice cosa studia", "racconta un'esperienza di lavoro", "dice quando è disponibile", "chiede di orari, paga o formazione"],
    functions: ["presentarsi in un colloquio", "parlare di esperienza", "dire la disponibilità", "chiedere condizioni"],
    vocab: ["et studiejob = un lavoro per studenti", "erfaring = esperienza", "tilgængelig = disponibile", "en weekendvagt = un turno nel weekend", "en timeløn = una paga oraria", "en prøvetid = un periodo di prova", "en kollega = un collega", "at betjene = servire (clienti)", "fleksibel = flessibile", "en introduktion = un periodo di inserimento", "ansøgning = candidatura"],
    phrases: ["Jeg læser økonomi på andet år. = Studio economia al secondo anno.", "Jeg har arbejdet som tjener i Italien. = Ho lavorato come cameriere in Italia.", "Jeg kan arbejde både fredag og lørdag. = Posso lavorare sia venerdì sia sabato.", "Hvor mange timer om ugen er der tale om? = Di quante ore a settimana si tratta?", "Hvad er timelønnen? = Quanto è la paga oraria?", "Får jeg en introduktion? = Ci sarà un periodo di inserimento?"],
    opener: "Hej og tak, fordi du kom. Fortæl lidt om dig selv.", opener_it: "Ciao e grazie di essere venuto. Parlami un po' di te."
  },
  {
    id: "b1-reklamation", level: "B1", title: "Reclamo in un negozio", icon: "cart",
    npc: { name: "Jesper", role: "commesso in un negozio di elettronica" },
    setting: "Hai comprato 10 giorni fa delle cuffie e il suono è disturbato. Hai lo scontrino sul telefono.",
    mission: "Spiega il difetto, mostra lo scontrino, chiedi di cambiarle o di riavere i soldi e concorda cosa succede.",
    checks: ["spiega il difetto", "mostra lo scontrino", "chiede di cambiare o rimborso", "capisce e accetta la soluzione"],
    functions: ["fare un reclamo educato", "descrivere un difetto", "chiedere un cambio o un rimborso", "accettare una soluzione"],
    vocab: ["en reklamation = un reclamo", "en kvittering = una ricevuta", "en fejl = un difetto", "at bytte = cambiare", "penge tilbage = rimborso", "en garanti = una garanzia", "høretelefoner = cuffie (si usa quasi sempre al plurale)", "i stykker = rotto", "et købsbevis = una prova d'acquisto", "et tilgodebevis = un buono", "at undersøge = verificare"],
    phrases: ["Jeg vil gerne reklamere over de her høretelefoner. = Vorrei fare un reclamo per queste cuffie.", "Der er hele tiden støj i venstre øre. = C'è sempre un fruscio nell'orecchio sinistro.", "Jeg har kvitteringen på min telefon. = Ho lo scontrino sul telefono.", "Kan jeg bytte dem til et nyt par? = Posso cambiarle con un paio nuovo?", "Jeg vil helst have pengene tilbage. = Preferirei riavere i soldi.", "Det er fint, tak for hjælpen. = Va bene, grazie dell'aiuto."],
    opener: "Hej, kan jeg hjælpe dig?", opener_it: "Ciao, posso aiutarti?"
  },

  /* ---------------- B2 ---------------- */
  {
    id: "b2-jobsamtale", level: "B2", title: "Colloquio di lavoro (jobsamtale)", icon: "briefcase",
    npc: { name: "Camilla Winther", role: "HR-konsulent di un'azienda di Copenaghen" },
    setting: "Colloquio per un lavoro part-time come assistente di progetto in un'azienda tecnologica. Hai portato il CV.",
    mission: "Presentati, motiva l'interesse per il posto, racconta un esempio concreto di un risultato, parla di punti deboli e fai domande sull'azienda.",
    checks: ["si presenta e motiva l'interesse", "racconta un esempio concreto", "risponde sui propri punti deboli", "fa domande sul posto e sulla cultura di lavoro"],
    functions: ["motivare", "raccontare esempi", "parlare di punti forti e deboli", "fare domande sul posto"],
    vocab: ["en stilling = una posizione", "en kvalifikation = una qualifica", "en styrke = un punto di forza", "en svaghed = un punto debole", "ansvar = responsabilità", "en arbejdsgang = un processo di lavoro", "samarbejde = collaborazione", "en udfordring = una sfida", "selvstændig = autonomo", "arbejdsmiljø = ambiente di lavoro", "at bidrage = contribuire", "en ansættelse = un'assunzione"],
    phrases: ["Jeg søger stillingen, fordi … = Mi candido perché…", "Jeg har erfaring med at arbejde selvstændigt. = Ho esperienza nel lavorare in autonomia.", "Et eksempel på det er, da jeg … = Un esempio è quando io…", "Min største svaghed er, at jeg nogle gange tager for meget på mig. = Il mio punto debole è che a volte mi prendo troppi impegni.", "Hvordan er arbejdsmiljøet hos jer? = Com'è l'ambiente di lavoro da voi?", "Hvornår kan I vende tilbage til mig? = Quando potete farmi sapere?"],
    opener: "Velkommen og tak, fordi du ville komme. Hvorfor har du søgt netop den her stilling?", opener_it: "Benvenuto e grazie di essere venuto. Perché ti sei candidato proprio per questo posto?"
  },
  {
    id: "b2-gruppe", level: "B2", title: "Riunione del gruppo di studio", icon: "graduation",
    npc: { name: "Freja", role: "compagna di gruppo di studio (gruppearbejde)" },
    setting: "Il gruppo deve consegnare un progetto tra due settimane. Ci sono quattro parti da dividere e voi due siete in disaccordo.",
    mission: "Proponi come dividere i compiti, esprimi disaccordo in modo educato, proponi un compromesso e fissa la prossima riunione.",
    checks: ["propone una divisione dei compiti", "dissente con educazione", "propone un compromesso", "fissa scadenze e prossima riunione"],
    functions: ["proporre", "dissentire con tatto", "negoziare un compromesso", "pianificare"],
    vocab: ["et gruppearbejde = un lavoro di gruppo", "en opgave = un compito", "en deadline = una scadenza", "en arbejdsfordeling = divisione del lavoro", "et kompromis = un compromesso", "at tage ansvar for = occuparsi di", "en problemformulering = formulazione del problema", "at nå = riuscire a, fare in tempo", "en rolle = un ruolo", "at afsætte tid = riservare tempo", "enig = d'accordo"],
    phrases: ["Hvad med, at jeg tager metodeafsnittet? = Che ne dici se mi occupo della parte sul metodo?", "Jeg er ikke helt enig. = Non sono del tutto d'accordo.", "Jeg er bange for, at vi ikke når det. = Temo che non ce la faremo.", "Kunne vi finde et kompromis? = Potremmo trovare un compromesso?", "Lad os sige, at vi mødes igen på torsdag. = Diciamo che ci rivediamo giovedì.", "Er alle med på det? = Sono tutti d'accordo?"],
    opener: "Okay, så vi har fire dele og to uger. Hvordan skal vi fordele dem?", opener_it: "Allora, abbiamo quattro parti e due settimane. Come le dividiamo?"
  },
  {
    id: "b2-aktuelt", level: "B2", title: "Discutere di attualità con un amico", icon: "globe",
    npc: { name: "Mads", role: "amico danese, studente di scienze politiche" },
    setting: "Siete in una cucina dopo cena. Mads parla di quanto sia difficile trovare un appartamento a Copenaghen.",
    mission: "Partecipa alla discussione su boligmangel (carenza di alloggi), SU e clima: dai la tua opinione con argomenti e rispondi a una controargomentazione.",
    checks: ["esprime un'opinione con una motivazione", "porta un esempio personale", "risponde a un'obiezione", "trova un punto d'accordo o conclude"],
    functions: ["esprimere opinione", "argomentare", "controbattere", "concludere"],
    vocab: ["boligmangel = carenza di alloggi", "SU = borsa di studio statale (SU)", "klimaforandringer = cambiamenti climatici", "en løsning = una soluzione", "en holdning = un'opinione, posizione", "et argument = un argomento", "at hænge sammen med = essere collegato a", "overhovedet = affatto", "til gengæld = in compenso", "en konsekvens = una conseguenza", "bæredygtig = sostenibile", "ansvar = responsabilità"],
    phrases: ["Jeg synes, at problemet er, at … = Penso che il problema sia che…", "Det hænger sammen med, at … = È collegato al fatto che…", "Jeg ser det lidt anderledes. = Io la vedo un po' diversamente.", "Til gengæld kan man sige, at … = D'altra parte si può dire che…", "Jeg er enig med dig i, at … = Sono d'accordo con te sul fatto che…", "Det afhænger af, hvordan man ser på det. = Dipende da come la si guarda."],
    opener: "Har du set, hvor mange der står i kø for at se en lejlighed? Det er helt vildt.", opener_it: "Hai visto quanta gente fa la fila per vedere un appartamento? È assurdo."
  },
  {
    id: "b2-udlejer", level: "B2", title: "Controversia con l'udlejer", icon: "house",
    npc: { name: "Bent Rasmussen", role: "udlejer (proprietario) del tuo appartamento" },
    setting: "Al termine del contratto il proprietario vuole trattenere 6.000 kr. dal depositum per presunti danni al pavimento. Tu sostieni che sono usura normale.",
    mission: "Contesta la trattenuta con calma, chiedi la documentazione, cita il fatto che il pavimento era già usurato all'ingresso e trova un accordo o dì come procederai (huslejenævnet).",
    checks: ["contesta la trattenuta con argomenti", "chiede la documentazione (rapporto di ingresso)", "propone un accordo", "dice cosa farà se non si accordano"],
    functions: ["contestare", "chiedere prove", "proporre un accordo", "indicare le vie formali"],
    vocab: ["et depositum = un deposito cauzionale", "en indflytningsrapport = un verbale di ingresso", "en fraflytning = uno sgombero, la riconsegna", "slid = usura", "en skade = un danno", "et krav = una richiesta, una pretesa", "huslejenævnet = commissione per le controversie sull'affitto", "dokumentation = documentazione", "en afregning = un conteggio", "en betaling = un pagamento", "uenig = in disaccordo"],
    phrases: ["Jeg er uenig i den afregning. = Non sono d'accordo con questo conteggio.", "Gulvet var allerede slidt, da jeg flyttede ind. = Il pavimento era già usurato quando mi sono trasferito.", "Kan jeg få se dokumentationen for skaden? = Posso vedere la documentazione del danno?", "Det står i indflytningsrapporten. = È scritto nel verbale di ingresso.", "Kunne vi mødes på midten? = Potremmo incontrarci a metà strada?", "Ellers må jeg indbringe sagen for huslejenævnet. = Altrimenti dovrò portare il caso alla commissione."],
    opener: "Jeg har gennemgået lejligheden, og jeg må desværre trække 6.000 kr. fra dit depositum.", opener_it: "Ho controllato l'appartamento e purtroppo devo trattenere 6.000 corone dal tuo deposito."
  },
  {
    id: "b2-skat", level: "B2", title: "Telefonata formale a SKAT/kommune", icon: "building",
    npc: { name: "Ulla Poulsen", role: "sagsbehandler (funzionaria) in un ufficio pubblico (Skattestyrelsen)" },
    setting: "Hai ricevuto un avviso con un importo da pagare che non capisci: lo studiejob e la SU sembrano calcolati male. Telefoni.",
    mission: "Presentati in modo formale, spiega il problema in modo preciso, chiedi chiarimenti e come presentare una rettifica nella forskudsopgørelse; concorda come ricevere conferma scritta.",
    checks: ["si presenta formalmente e identifica la pratica", "spiega il dubbio in modo preciso", "chiede come correggere (forskudsopgørelse)", "chiede conferma scritta e tempi"],
    functions: ["registro formale", "descrivere una questione amministrativa", "chiedere chiarimenti", "chiedere conferma scritta"],
    vocab: ["en skattemappe = una scheda fiscale", "en forskudsopgørelse = una dichiarazione preventiva", "en årsopgørelse = un conguaglio annuale", "et fradrag = una detrazione", "restskat = tasse da pagare a saldo", "et tilgodehavende = un credito", "en indkomst = un reddito", "en klage = un ricorso, un reclamo", "Digital Post = posta digitale pubblica (app mit.dk o e-Boks)", "et sagsnummer = numero di pratica", "en frist = una scadenza"],
    phrases: ["Jeg ringer angående min årsopgørelse. = Telefono riguardo al mio conguaglio.", "Jeg forstår ikke, hvordan beløbet er beregnet. = Non capisco come sia stato calcolato l'importo.", "Kan jeg rette min forskudsopgørelse online? = Posso correggere la mia dichiarazione preventiva online?", "Kunne jeg få det på skrift? = Potrei averlo per iscritto?", "Hvad er fristen for at klage? = Qual è il termine per fare ricorso?", "Mit CPR-nummer er … = Il mio CPR è…"],
    opener: "Skattestyrelsen, Ulla Poulsen. Hvad drejer din henvendelse sig om?", opener_it: "Agenzia delle entrate, Ulla Poulsen. Di cosa si tratta?"
  },
  {
    id: "b2-mus", level: "B2", title: "Feedback dal capo (MUS-samtale)", icon: "briefcase",
    npc: { name: "Line", role: "tua capa nel lavoro da studente (ristorante)" },
    setting: "Sei in un lavoro da studente da un anno. Line ti ha convocato per la samtale annuale (MUS): bilancio, feedback e prospettive.",
    mission: "Rispondi su come ti trovi, accetta una critica costruttiva, esprimi cosa vorresti migliorare o imparare e chiedi di più responsabilità o di un aumento di ore.",
    checks: ["risponde su come si trova al lavoro", "reagisce a una critica", "dice cosa vuole imparare o cambiare", "chiede più responsabilità o ore"],
    functions: ["parlare del proprio lavoro", "accogliere una critica", "esprimere desideri professionali", "chiedere"],
    vocab: ["en medarbejdersamtale = un colloquio annuale", "feedback = feedback", "en kritik = una critica", "konstruktiv = costruttivo", "udvikling = crescita, sviluppo", "ansvarsområde = area di responsabilità", "arbejdsbyrde = carico di lavoro", "en målsætning = un obiettivo", "tilfreds = soddisfatto", "at forbedre = migliorare", "et lønforhold = condizioni retributive"],
    phrases: ["Jeg trives rigtig godt her. = Mi trovo molto bene qui.", "Tak for den ærlige feedback. = Grazie per il feedback sincero.", "Jeg vil gerne blive bedre til at prioritere. = Vorrei migliorare nel dare priorità.", "Jeg kunne godt tænke mig mere ansvar. = Mi piacerebbe avere più responsabilità.", "Er der mulighed for flere timer? = C'è la possibilità di avere più ore?", "Hvad kan jeg gøre for at komme videre? = Cosa posso fare per crescere?"],
    opener: "Tak, fordi du kunne komme. Hvordan har du det med dit arbejde hos os?", opener_it: "Grazie di essere venuto. Come ti trovi con il tuo lavoro da noi?"
  },

  /* ---------------- C1 ---------------- */
  {
    id: "c1-debat", level: "C1", title: "Dibattito con chi la pensa diversamente", icon: "chat",
    npc: { name: "Emil Kjær", role: "compagno di corso con idee opposte alle tue sul tema" },
    setting: "In un dibattito informale: Emil sostiene che l'università dovrebbe essere finanziata anche con tasse per gli studenti. Tu non sei d'accordo.",
    mission: "Difendi la tua posizione con argomenti, riconosci i punti validi dell'altro, smonta una sua premessa e arriva a una conclusione senza litigare.",
    checks: ["espone la propria posizione con chiarezza", "riconosce un punto valido dell'altro", "contesta una premessa con un controesempio", "chiude il dibattito in modo cortese"],
    functions: ["argomentare", "concedere un punto", "contestare una premessa", "concludere con tatto"],
    vocab: ["en pointe = un punto, una battuta chiave", "en forudsætning = una premessa", "at modargumentere = controbattere", "at tilbagevise = confutare", "nuanceret = sfumato", "en generalisering = una generalizzazione", "ideologisk = ideologico", "at bestride = contestare", "i princippet = in linea di principio", "en undtagelse = un'eccezione", "at afvige = discostarsi", "reelt = in realtà, di fatto"],
    phrases: ["Der er noget om snakken, men … = C'è del vero, ma…", "Jeg vil gerne udfordre den forudsætning. = Vorrei mettere in discussione questa premessa.", "Det er en generalisering, som ikke holder helt. = È una generalizzazione che non regge del tutto.", "Lad os se på, hvad der reelt sker i Sverige. = Vediamo cosa succede davvero in Svezia.", "Jeg kan følge dit synspunkt, men jeg ender et andet sted. = Capisco il tuo punto di vista, ma arrivo a un'altra conclusione.", "Vi bliver nok ikke enige, men det var en god snak. = Probabilmente non ci troveremo d'accordo, ma è stata una bella chiacchierata."],
    opener: "Jeg synes, det er mærkeligt, at vi som studerende forventer, at alt er gratis. Hvem skal egentlig betale?", opener_it: "Trovo strano che noi studenti ci aspettiamo che tutto sia gratis. Chi dovrebbe pagare, in realtà?"
  },
  {
    id: "c1-middag", level: "C1", title: "Cena con amici danesi: ironia e understatement", icon: "star",
    npc: { name: "Sofie", role: "amica danese che ti ha invitato a cena con altri amici" },
    setting: "Cena a casa di Sofie. Gli amici scherzano con ironia secca. Un commento ironico sull'Italia e sul tuo danese ti punge un po'.",
    mission: "Rispondi con humor al commento, cogli un'ironia nascosta («det var ikke så ringe»), racconta un aneddoto e sdrammatizza una gaffe.",
    checks: ["risponde con una battuta o autoironia", "capisce un understatement senza prenderlo alla lettera", "racconta un aneddoto breve", "gestisce con leggerezza un momento imbarazzante"],
    functions: ["umorismo e ironia", "interpretare l'understatement", "raccontare un aneddoto", "sdrammatizzare"],
    vocab: ["tør humor = umorismo secco", "en spydig bemærkning = una battuta pungente", "selvironi = autoironia", "at tage pis på = prendere in giro (molto colloquiale, un po' volgare)", "en kliché = un cliché", "ikke så ringe = niente male (understatement)", "skønt = splendido (anche ironico)", "en gaffe = una gaffe", "at grine af = ridere di", "ironisk = ironico", "at overdrive = esagerare", "pinligt = imbarazzante"],
    phrases: ["Du må gerne drille mig. = Puoi prendermi in giro.", "Det var ikke så ringe, må jeg indrømme. = Niente male, devo ammetterlo.", "Jeg er italiener – jeg skal nok overleve. = Sono italiano, sopravviverò.", "Der var engang, hvor jeg … = Una volta mi è capitato di…", "Det var ellers en lidt pinlig situation. = Che situazione imbarazzante, eh.", "Du må ikke tage det alvorligt. = Non devi prenderlo sul serio."],
    opener: "Jamen, så kommer italieneren endelig. Har du husket pasta, eller skal vi bestille pizza?", opener_it: "Ah, finalmente arriva l'italiano. Hai portato la pasta o ordiniamo la pizza?"
  },
  {
    id: "c1-vejleder", level: "C1", title: "Discussione con il relatore sulla tesi", icon: "book",
    npc: { name: "Professor Lars Holm", role: "vejleder (relatore) della tua tesi triennale" },
    setting: "Incontro di supervisione. Hai mandato un primo capitolo. Il professore ha delle critiche sulla problemformulering e sul metodo.",
    mission: "Presenta lo stato del lavoro, rispondi alle critiche, giustifica le tue scelte di metodo e concorda la revisione con scadenze.",
    checks: ["riassume lo stato del lavoro", "reagisce a una critica metodologica", "giustifica una scelta o ammette un limite", "concorda tempi e prossimi passi"],
    functions: ["registro accademico", "giustificare scelte", "accogliere critiche", "pianificare"],
    vocab: ["en problemformulering = formulazione del problema di ricerca", "en metode = un metodo", "en afgrænsning = una delimitazione", "en teoretisk ramme = un quadro teorico", "empiri = dati empirici", "en hypotese = un'ipotesi", "validitet = validità", "en analyse = un'analisi", "en kildekritik = critica delle fonti", "at underbygge = sostenere con prove", "en konklusion = una conclusione", "en revision = una revisione"],
    phrases: ["Jeg har valgt en kvalitativ tilgang, fordi … = Ho scelto un approccio qualitativo perché…", "Det er en berettiget pointe, som jeg vil tage med. = È un'osservazione giusta, ne terrò conto.", "Jeg har afgrænset mig til … = Mi sono limitato a…", "Min empiri har den begrænsning, at … = I miei dati hanno il limite che…", "Må jeg få lov at uddybe mit argument? = Posso approfondire il mio argomento?", "Jeg sender en revideret version inden fredag. = Invierò una versione rivista entro venerdì."],
    opener: "Tak for kapitlet. Jeg synes, der er gode takter, men din problemformulering er stadig ret bred. Hvad er egentlig dit spørgsmål?", opener_it: "Grazie per il capitolo. Ci sono buone idee, ma la tua domanda di ricerca è ancora troppo ampia. Qual è esattamente la tua domanda?"
  },
  {
    id: "c1-loen", level: "C1", title: "Negoziare stipendio e condizioni", icon: "briefcase",
    npc: { name: "Henrik Dahl", role: "direttore di reparto che ti ha appena offerto un lavoro" },
    setting: "Dopo la laurea ti offrono un posto a tempo pieno. L'offerta è 34.000 kr. al mese; tu sai che il livello è di circa 37.000 per quel ruolo.",
    mission: "Ringrazia, dì che valuti l'offerta, motiva una richiesta di stipendio più alto, chiedi anche altre condizioni (ferie, hjemmearbejde, formazione) e chiudi senza irrigidire il rapporto.",
    checks: ["apprezza l'offerta e chiede una pausa per riflettere", "chiede uno stipendio più alto con motivazioni", "chiede altre condizioni (hjemmearbejde, uddannelse, pension)", "chiude con un accordo o un termine di risposta"],
    functions: ["negoziare", "argomentare una richiesta", "mantenere un tono cooperativo", "concludere"],
    vocab: ["en løn = uno stipendio", "et lønniveau = un livello retributivo", "en pensionsordning = un piano pensionistico", "hjemmearbejde = lavoro da casa", "en bonus = un bonus", "en overenskomst = un contratto collettivo", "et tilbud = un'offerta", "at forhandle = negoziare", "efteruddannelse = formazione continua", "ferie = ferie", "en prøvetid = periodo di prova", "markedsvilkår = condizioni di mercato"],
    phrases: ["Tak for tilbuddet, jeg er rigtig glad for det. = Grazie dell'offerta, sono molto contento.", "Må jeg få et par dage til at tænke over det? = Posso avere un paio di giorni per rifletterci?", "Jeg havde forestillet mig en løn på omkring 37.000. = Avevo in mente uno stipendio intorno ai 37.000.", "Det ligger på niveau med markedet for den slags stilling. = È in linea con il mercato per questo tipo di ruolo.", "Er der mulighed for hjemmearbejde to dage om ugen? = C'è la possibilità di lavorare da casa due giorni a settimana?", "Jeg tror, vi kan finde en løsning, der passer os begge. = Penso che possiamo trovare una soluzione che vada bene a entrambi."],
    opener: "Vi vil rigtig gerne have dig med på holdet. Vi kan tilbyde dig 34.000 kroner om måneden. Hvad siger du til det?", opener_it: "Ci farebbe molto piacere averti nel team. Possiamo offrirti 34.000 corone al mese. Che ne pensi?"
  },
  {
    id: "c1-radio", level: "C1", title: "Intervista radiofonica come ospite", icon: "globe",
    npc: { name: "Marie Bang", role: "conduttrice di un programma radiofonico di una radio locale" },
    setting: "Sei ospite di un programma sulla vita degli stranieri in Danimarca. È in diretta: poco tempo, domande aperte.",
    mission: "Racconta la tua esperienza come italiano a Copenaghen, rispondi a una domanda scomoda sui danesi, esprimi un consiglio per i nuovi arrivati e chiudi bene.",
    checks: ["racconta la propria storia in modo coinvolgente", "risponde a una domanda delicata con tatto", "dà un consiglio concreto", "chiude con una frase finale efficace"],
    functions: ["narrare con ritmo", "rispondere con tatto", "dare consigli", "chiudere un intervento"],
    vocab: ["en lytter = un ascoltatore", "integration = integrazione", "en kulturforskel = una differenza culturale", "at føle sig hjemme = sentirsi a casa", "et fællesskab = una comunità", "en fordom = un pregiudizio", "ærligt talt = a dire il vero", "at vænne sig til = abituarsi a", "en udfordring = una sfida", "at åbne sig = aprirsi", "indtryk = impressione", "at tage fejl = sbagliarsi"],
    phrases: ["Det, der overraskede mig mest, var … = Ciò che mi ha sorpreso di più è stato…", "Ærligt talt tog det mig lang tid at føle mig hjemme. = A dire il vero mi ci è voluto molto per sentirmi a casa.", "Det er en generalisering, men jeg oplevede … = È una generalizzazione, ma io ho notato…", "Mit råd til nytilkomne er at … = Il mio consiglio ai nuovi arrivati è di…", "Det kommer an på, hvem man spørger. = Dipende da chi lo chiedi.", "Til sidst vil jeg gerne sige tak for … = Per finire vorrei ringraziare per…"],
    opener: "Velkommen i studiet. Du er italiener og har boet i København i to år. Hvad var dit første indtryk af danskerne?", opener_it: "Benvenuto in studio. Sei italiano e vivi a Copenaghen da due anni. Qual è stata la tua prima impressione dei danesi?"
  },

  /* ---------------- Esami ---------------- */
  {
    id: "exam-pd2", level: "B1", exam: "PD2", title: "Esame orale PD2 (Prøve i Dansk 2)", icon: "star",
    npc: { name: "Hanne Lund", role: "esaminatrice (eksaminator) di una prova di danese" },
    setting: "Simulazione dell'orale di Prøve i Dansk 2, livello B1+. Con un altro candidato simulato (Jonas). Delprøve 1: presentazione su un tema preparato di vita quotidiana, poi domande. Delprøve 2: descrizione di un'immagine, domande, poi discussione con l'altro candidato.",
    mission: "Fase 1: presenta in circa 1,5 minuti il tema che hai preparato e rispondi a 3–4 domande. Fase 2: descrivi l'immagine (tre persone in fila davanti a una panetteria), rispondi alle domande e poi discuti con Jonas su una situazione quotidiana collegata.",
    checks: ["presentazione del tema preparato (circa 1,5 minuti)", "risposte alle domande di approfondimento", "descrizione dell'immagine", "discussione con l'altro candidato (opinioni, domande reciproche)"],
    functions: ["presentare un tema", "rispondere a domande personali", "descrivere un'immagine", "discutere con un altro candidato"],
    vocab: ["et tema = un tema", "en hverdag = la vita di tutti i giorni, un giorno feriale", "fritid = tempo libero", "et billede = un'immagine", "i forgrunden = in primo piano", "i baggrunden = sullo sfondo", "ser ud til = sembra che", "en kø = una fila", "synes = pensare, trovare", "en oplevelse = un'esperienza", "en mening = un'opinione", "vigtig = importante"],
    phrases: ["Mit tema er min hverdag med studier og arbejde. = Il mio tema è la mia quotidianità tra studio e lavoro.", "Jeg vil gerne fortælle om … = Vorrei raccontare di…", "På billedet kan jeg se tre personer, som står i kø. = Nell'immagine vedo tre persone in fila.", "Jeg tror, at de venter på at købe brød. = Credo che stiano aspettando per comprare del pane.", "Hvad synes du, Jonas? = Tu cosa ne pensi, Jonas?", "Kan du gentage spørgsmålet, tak? = Può ripetere la domanda, per favore?"],
    topics: ["Min hverdag med studier og arbejde = La mia quotidianità tra studio e lavoro", "En rejse, jeg husker godt = Un viaggio che ricordo bene", "Min bolig og mit kvarter = La mia casa e il mio quartiere", "Mad og traditioner i Italien = Cibo e tradizioni in Italia", "Min fritid og mine venner = Il mio tempo libero e i miei amici"],
    opener: "Goddag og velkommen. Du skal først fortælle om det tema, du har forberedt. Værsgo.", opener_it: "Buongiorno e benvenuto. Per prima cosa racconterai il tema che hai preparato. Prego."
  },
  {
    id: "exam-pd3-1", level: "B2", exam: "PD3", title: "Esame orale PD3: delprøve 1 (tema preparato)", icon: "star",
    npc: { name: "Anders Krogh", role: "esaminatore (eksaminator) di Prøve i Dansk 3; accanto a lui un censore silenzioso" },
    setting: "Simulazione della delprøve 1 dell'orale PD3, livello B2. Una settimana prima hai ricevuto un tema di problema sociale. Presentazione di circa 2 minuti, poi domande per approfondire, motivare e prendere posizione. In tutto circa 5 minuti.",
    mission: "Presenta in circa 2 minuti il tema («Skal man have mere fleksibel arbejdstid?»), poi rispondi alle domande di approfondimento («Kan du uddybe?», «Hvorfor mener du det?», «Hvad er din holdning?»).",
    checks: ["presentazione strutturata del tema (circa 2 minuti)", "approfondisce quando richiesto", "motiva le proprie opinioni", "prende una posizione chiara"],
    functions: ["presentare un problema sociale", "approfondire", "motivare", "prendere posizione"],
    vocab: ["arbejdstid = orario di lavoro", "fleksibel = flessibile", "en fordel = un vantaggio", "en ulempe = uno svantaggio", "balance mellem arbejde og fritid = equilibrio tra lavoro e tempo libero", "stress = stress", "produktivitet = produttività", "en arbejdsplads = un posto di lavoro", "en tendens = una tendenza", "at påvirke = influenzare", "en konsekvens = una conseguenza", "efter min mening = secondo me"],
    phrases: ["Jeg vil gerne tale om arbejdstid. = Vorrei parlare dell'orario di lavoro.", "Først vil jeg komme ind på fordelene. = Prima vorrei parlare dei vantaggi.", "Det er vigtigt, fordi … = È importante perché…", "Efter min mening er … = Secondo me…", "Jeg vil gerne uddybe det. = Vorrei approfondirlo.", "Både fordele og ulemper må overvejes. = Bisogna considerare sia i vantaggi sia gli svantaggi."],
    topics: ["Skal man have mere fleksibel arbejdstid? = Si dovrebbe avere un orario di lavoro più flessibile?", "Hvordan påvirker sociale medier unges liv? = Come influiscono i social sulla vita dei giovani?", "Er det en god idé at betale for kollektiv trafik efter indkomst? = È una buona idea pagare i trasporti pubblici in base al reddito?", "Bør unge arbejde ved siden af studiet? = I giovani dovrebbero lavorare durante gli studi?"],
    opener: "Goddag. Du har forberedt et tema om fleksibel arbejdstid. Du har cirka to minutter. Værsgo at begynde.", opener_it: "Buongiorno. Hai preparato un tema sull'orario di lavoro flessibile. Hai circa due minuti. Prego, inizia."
  },
  {
    id: "exam-pd3-2", level: "B2", exam: "PD3", title: "Esame orale PD3: delprøve 2 (tema estratto)", icon: "star",
    npc: { name: "Anders Krogh", role: "esaminatore (eksaminator) di Prøve i Dansk 3" },
    setting: "Simulazione della delprøve 2 dell'orale PD3, livello B2. Estrai a sorte uno di tre temi sconosciuti. Le domande vanno prima su un aspetto concreto, poi più generale, con richieste di precisare. Circa 5 minuti.",
    mission: "Hai estratto il tema «Madspild i supermarkeder». Rispondi a una domanda su un aspetto concreto, poi a una più generale; quando ti viene chiesto («Kan du præcisere?»), precisa.",
    checks: ["risponde a una domanda concreta sul tema", "risponde a una domanda più generale", "precisa quando richiesto", "esprime un'opinione motivata"],
    functions: ["parlare di un tema sconosciuto", "passare dal concreto al generale", "precisare", "motivare"],
    vocab: ["madspild = spreco alimentare", "en udløbsdato = una data di scadenza", "et supermarked = un supermercato", "at smide ud = buttare via", "en forbruger = un consumatore", "bæredygtighed = sostenibilità", "en løsning = una soluzione", "at donere = donare", "overskudsmad = cibo in eccedenza", "en kampagne = una campagna", "et ansvar = una responsabilità", "for eksempel = per esempio"],
    phrases: ["Det handler om, at … = Si tratta del fatto che…", "Et konkret eksempel er … = Un esempio concreto è…", "Jeg vil gerne præcisere, at … = Vorrei precisare che…", "På den ene side … på den anden side … = Da un lato… dall'altro…", "Jeg har ikke tænkt over det før, men … = Non ci avevo mai pensato, ma…", "Det er svært at sige, men jeg tror, at … = È difficile dirlo, ma credo che…"],
    topics: ["Madspild i supermarkeder = Lo spreco alimentare nei supermercati", "Boligpriser i storbyerne = I prezzi delle case nelle grandi città", "Digitale løsninger i sundhedsvæsenet = Soluzioni digitali nella sanità", "Cykler og biler i byen = Biciclette e auto in città"],
    opener: "Du har trukket temaet madspild i supermarkeder. Hvad ved du om det?", opener_it: "Hai estratto il tema dello spreco alimentare nei supermercati. Cosa sai a riguardo?"
  },
  {
    id: "exam-sp", level: "C1", exam: "SP", title: "Studieprøven orale (circa 30 minuti)", icon: "graduation",
    npc: { name: "Marianne Thorsen", role: "esaminatrice (eksaminator) della Studieprøven; accanto a lei un censor" },
    setting: "Simulazione dell'orale della Studieprøven, livello C1. Una settimana prima hai ricevuto tre temi sociali complessi con parole chiave. Breve presentazione di te (non valutata), sorteggio, presentazione di circa 5 minuti, poi circa 15 minuti di conversazione.",
    mission: "Presentati in 1 minuto, presenta per circa 5 minuti il tema estratto («Ulighed i uddannelse»: adgang, social baggrund, økonomi) con una struttura chiara, poi sostieni la conversazione: cause, esempi, previsioni, soluzioni, pro e contro, opinione.",
    checks: ["breve presentazione di sé", "presentazione del tema (circa 5 minuti) con struttura chiara", "conversazione: cause ed esempi", "conversazione: soluzioni, pro e contro, opinione"],
    functions: ["presentare un tema complesso", "strutturare un discorso", "argomentare e sfumare", "rispondere con precisione"],
    vocab: ["ulighed i uddannelse = disuguaglianza nell'istruzione", "social baggrund = origine sociale", "adgang = accesso", "økonomisk formåen = disponibilità economica", "en årsag = una causa", "en konsekvens = una conseguenza", "at forudse = prevedere", "en indsats = un intervento, uno sforzo", "en reform = una riforma", "en tendens = una tendenza", "nuanceret = sfumato", "med udgangspunkt i = prendendo spunto da"],
    phrases: ["Med udgangspunkt i mit tema vil jeg først redegøre for … = Partendo dal mio tema, vorrei prima illustrare…", "En væsentlig årsag er … = Una causa importante è…", "Det kan underbygges med … = Si può sostenere con…", "På den ene side … men på den anden side … = Da un lato… ma dall'altro…", "Jeg tror, at udviklingen vil gå i retning af … = Credo che l'evoluzione andrà verso…", "Må jeg bede dig gentage spørgsmålet? = Posso chiederle di ripetere la domanda?"],
    topics: ["Ulighed i uddannelse (adgang, social baggrund, økonomi) = Disuguaglianza nell'istruzione (accesso, origine sociale, economia)", "Klimaomstilling og landbrug (afgifter, teknologi, ansvar) = Transizione climatica e agricoltura (tasse, tecnologia, responsabilità)", "Kunstig intelligens og arbejdsmarkedet (automatisering, efteruddannelse, regulering) = Intelligenza artificiale e mercato del lavoro (automazione, formazione continua, regolamentazione)"],
    opener: "Goddag og velkommen. Vi starter med, at du kort præsenterer dig selv. Så trækker du et tema.", opener_it: "Buongiorno e benvenuto. Cominciamo con una breve presentazione di te. Poi estrai un tema."
  }
];
