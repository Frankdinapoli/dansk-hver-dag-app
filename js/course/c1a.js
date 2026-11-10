/* Livello C1 · unità 1–5 (formato: vedi a1a.js)
   Campi in più rispetto ai livelli precedenti:
     prod: { task, points[], model, model_it }   compito di produzione scritta
     talk: { title, role, mission, opener, opener_it, useful[] }   conversazione a tema
*/
COURSE.push({
id: "c1-01", level: "C1", n: 1,
title: "Du eller De?",
sub: "Registri formale, neutro e informale: cortesia senza «per favore», mail e attenuazione",
goals: ["Scegliere il registro giusto (mail a un professore, messaggio a un amico, lettera formale)", "Chiedere e rifiutare con cortesia senza tradurre «per favore» o «Lei»", "Attenuare con lige, måske, mon, eventuelt e il condizionale", "Riconoscere quando un italiano suona troppo diretto o troppo cerimonioso"],
words: `
n|en|høflighed|høfligheden|-|-|cortesia, educazione
n|en|tiltaleform|tiltaleformen|tiltaleformer|tiltaleformerne|forma di allocuzione
n|et|register|registret|registre|registrene|registro (linguistico)
n|en|hilsen|hilsenen|hilsner|hilsnerne|saluto
n|en|tilbagemelding|tilbagemeldingen|tilbagemeldinger|tilbagemeldingerne|riscontro, feedback
n|en|forespørgsel|forespørgslen|forespørgsler|forespørgslerne|richiesta di informazioni
n|en|anmodning|anmodningen|anmodninger|anmodningerne|richiesta formale
n|en|vejleder|vejlederen|vejledere|vejlederne|relatore, tutor
n|en|afsender|afsenderen|afsendere|afsenderne|mittente
n|en|modtager|modtageren|modtagere|modtagerne|destinatario
n|et|emnefelt|emnefeltet|emnefelter|emnefelterne|oggetto (della mail)
n|en|tone|tonen|toner|tonerne|tono
n|en|ulejlighed|ulejligheden|ulejligheder|ulejlighederne|disturbo, fastidio
n|en|fornærmelse|fornærmelsen|fornærmelser|fornærmelserne|offesa
n|en|deadline|deadlinen|deadliner|deadlinerne|scadenza
n|en|signatur|signaturen|signaturer|signaturerne|firma in calce
v|tiltale|tiltaler|tiltalte|tiltalt|rivolgersi a, dare del tu o del lei
v|henvende sig|henvender sig|henvendte sig|henvendt sig|rivolgersi
v|forhøre sig|forhører sig|forhørte sig|forhørt sig|informarsi
v|anmode|anmoder|anmodede|anmodet|chiedere formalmente
v|dæmpe|dæmper|dæmpede|dæmpet|attenuare
v|nedtone|nedtoner|nedtonede|nedtonet|minimizzare, smorzare
v|antyde|antyder|antydede|antydet|alludere, lasciar intendere
v|undgå|undgår|undgik|undgået|evitare
v|fornærme|fornærmer|fornærmede|fornærmet|offendere
v|vedhæfte|vedhæfter|vedhæftede|vedhæftet|allegare
v|undre sig|undrer sig|undrede sig|undret sig|domandarsi, stupirsi
v|forstyrre|forstyrrer|forstyrrede|forstyrret|disturbare
v|lyde|lyder|lød|lydt|suonare
a|høflig|høfligt|høflige|høfligere|høfligst|educato
a|formel|formelt|formelle|mere formel|mest formel|formale
a|uformel|uformelt|uformelle|mere uformel|mest uformel|informale
a|afslappet|afslappet|afslappede|mere afslappet|mest afslappet|rilassato
a|direkte|direkte|direkte|mere direkte|mest direkte|diretto
a|brysk|bryskt|bryske|bryskere|bryskest|brusco
a|stiv|stift|stive|stivere|stivest|rigido, impettito
x|med venlig hilsen|distinti saluti
x|mange hilsner|tanti saluti
x|tak på forhånd|grazie in anticipo
x|tak for sidst|grazie per l'altra volta
x|tak for hjælpen|grazie dell'aiuto
x|kunne du eventuelt|potresti eventualmente
x|jeg tænkte på, om du kunne|mi chiedevo se potessi
x|må jeg lige høre|posso solo chiederti
x|undskyld forstyrrelsen|scusa il disturbo
x|at være dus med nogen|darsi del tu con qualcuno
x|mon ikke|non è che… / probabilmente sì
x|hvis det passer dig|se per te va bene
x|vær så venlig|per favore (rigido, quasi un ordine)
x|må jeg bede om|posso chiedere (formale)
`,
grammar: [
{ h: "Du, De e tutto il resto", body: `
In Danimarca il rispetto non passa dal pronome. **De** (sempre con la maiuscola) è praticamente scomparso: si dà del **du** al professore, alla capa, al cliente, al sindaco. Il «Lei» italiano non ha un equivalente d'uso.
Dove trovi ancora *De*:
- la famiglia reale (*Deres Majestæt*) e il cerimoniale;
- qualche lettera molto formale o di stampo burocratico;
- testi vecchi, teatro, ironia («Hvad mener De?» detto scherzando).
Il registro si regola invece con **saluto, chiusura, lessico e attenuatori**.
| registro | dove | saluto | chiusura |
| formale | candidature, lettere alle autorità | *Kære Anna Rossi* · *Til rette vedkommende* | *Med venlig hilsen* |
| neutro | professori, colleghi, capo, servizi | *Hej Nina* · *Kære Nina* | *Venlig hilsen* · *Mvh* · *Vh* |
| informale | amici, famiglia, chat | *Hej Sofie* · *Hej med dig* | *Hilsen* · *Knus* · *kh* |
» Hej Nina, jeg skriver angående mit speciale. = Ciao Nina, ti scrivo a proposito della mia tesi.
» Kære Anna Rossi, tak for din ansøgning. = Gentile Anna Rossi, grazie per la tua candidatura.
» Vi ses i morgen. Hilsen Sofie = Ci vediamo domani. Un saluto, Sofie
! Titoli come *hr.*, *fru*, *professor* davanti al cognome suonano rigidi: nella pratica si usa il nome. Se la persona risponde con «Hej» e firma con il solo nome, fai lo stesso.
! Dare del tu non è maleducato né «amichevole»: è semplicemente la norma. Si dice *at være dus med nogen* quando ci si dà del tu da sempre.
` },
{ h: "Chiedere senza «per favore»", body: `
Il «per favore» italiano non ha un'unica traduzione. Il danese **tak** (grazie) alla fine della richiesta fa quasi sempre il lavoro. *Vær så venlig at…* e *venligst* suonano come un ordine scritto su un cartello.
| situazione | troppo diretto | naturale | molto formale |
| caffè al bar | *Giv mig en kaffe.* | *Jeg vil gerne have en kaffe.* · *Jeg skal have en kaffe, tak.* | *Må jeg bede om en kop kaffe?* |
| un collega | *Send mig filen!* | *Kan du sende mig filen, tak?* | *Kunne du eventuelt sende mig filen?* |
| un amico | *Hjælp mig!* | *Vil du være sød at hjælpe mig?* | – |
» Kan du lige række mig saltet, tak? = Mi passi il sale, per favore?
» Vil du være sød at lukke vinduet? = Sei così gentile da chiudere la finestra?
» Må jeg bede om regningen? = Posso avere il conto?
Per **ringraziare** la lingua è generosa: *tak for hjælpen*, *tak for sidst* (dopo un incontro precedente), *tak på forhånd*, *selv tak*. Per **rifiutare** si ammorbidisce: *Det kan jeg desværre ikke.* / *Det passer mig ikke så godt.* (non: «No, non posso»).
! *Vær så venlig at…* in una mail a un collega sembra una lettera di richiamo.
! Troppi ringraziamenti e giri di parole fanno sospettare ironia: la cortesia danese è breve.
` },
{ h: "Attenuare: lige, måske, mon, eventuelt", body: `
Il danese ammorbidisce con piccole parole e con il condizionale (*kunne*, *ville*, *skulle*).
| strumento | effetto | esempio |
| *lige* | «solo un attimo», riduce il peso | *Kan du lige hjælpe mig?* |
| *måske* | lascia aperta la scelta | *Det er måske en idé at vente.* |
| *mon* | «mi chiedo se…» (dubbio gentile) | *Mon du kunne vente til i morgen?* |
| *eventuelt* | «semmai, se possibile» | *Kunne du eventuelt sende det i dag?* |
| *jeg tænkte på, om…* | «mi chiedevo se…» | *Jeg tænkte på, om vi kunne mødes.* |
| *kunne / ville* | condizionale di cortesia | *Ville det passe dig torsdag?* |
» Må jeg lige høre, om du har tid i næste uge? = Posso solo chiederti se hai tempo la settimana prossima?
» Jeg tænkte på, om du eventuelt kunne læse mit udkast. = Mi chiedevo se potessi eventualmente leggere la mia bozza.
» Mon ikke det er bedst at vente? = Non sarà meglio aspettare?
Il **sottotono** (*understatement*) è parte del registro: *Det er ikke så ringe* = è molto bello; *Det kunne være rart* = ci tengo davvero.
### Dove sbaglia un italiano
- **Troppo diretto**: imperativo senza *lige*/*tak* (*Send mig det!*), *Jeg har brug for…* come apertura, risposte secche. Risulta brusco, non «sincero».
- **Troppo cerimonioso**: *Højtærede*, *Jeg tillader mig at…*, *Jeg beder Dem…*, *Med den største højagtelse*. Risulta rigido, a volte ironico.
- Mail ben fatta: saluto con nome · una riga sul perché scrivi · la richiesta attenuata · scadenza o allegato · *tak* · chiusura breve.
` },
],
text: {
title: "En mail til vejlederen", kind: "Dialogo",
intro: "Anna scrive la sua prima mail alla nuova relatrice e Sofie le spiega il tono giusto.",
lines: `
Anna har fået en ny vejleder på universitetet, og nu skal hun skrive sin første mail til hende. = Anna ha una nuova relatrice all'università e ora deve scriverle la sua prima mail.
Hun viser udkastet til Sofie, som har boet i Danmark hele sit liv. = Mostra la bozza a Sofie, che ha sempre vissuto in Danimarca.

@Anna: Hvad synes du om min mail? = Che ne pensi della mia mail?
@Sofie: Der står: «Højtærede fru professor Holm, jeg tillader mig at rette henvendelse til Dem.» = C'è scritto: «Egregia signora professoressa Holm, mi permetto di rivolgermi a Lei».
@Sofie: Altså, Anna, det lyder, som om du skriver til kongen! = Guarda, Anna, sembra che tu scriva al re!
@Anna: Men hun er professor, og jeg vil ikke være uhøflig. = Ma è professoressa e non voglio essere maleducata.
@Sofie: Det bliver du heller ikke. På universitetet siger alle du, og man bruger fornavn. = Non lo sarai. All'università tutti si danno del tu e si usa il nome.
@Anna: Og hvordan beder jeg om et møde? Jeg skrev: «Jeg beder Dem venligst om at afsætte tid.» = E come chiedo un incontro? Ho scritto: «La prego di riservarmi del tempo».
@Sofie: Det er alt for stift. Skriv i stedet: «Kunne du eventuelt afsætte tyve minutter i næste uge?» = È troppo rigido. Scrivi invece: «Potresti eventualmente dedicarmi venti minuti la settimana prossima?»
@Anna: Er det ikke for uformelt at skrive «lige»? = Non è troppo informale scrivere «lige»?
@Sofie: Nej, «Må jeg lige høre, om du har tid» er helt normalt, og det dæmper tonen. = No, «Må jeg lige høre, om du har tid» è del tutto normale e ammorbidisce il tono.
@Anna: På italiensk er det nemmere at være direkte. Jeg havde lyst til at skrive: «Jeg har brug for et møde.» = In italiano è più facile essere diretti. Avevo voglia di scrivere: «Ho bisogno di un incontro».
@Sofie: Det lyder lidt bryskt på dansk. Skriv hellere: «Jeg tænkte på, om vi kunne mødes.» = In danese suona un po' brusco. Scrivi piuttosto: «Mi chiedevo se potessimo vederci».
@Anna: Og til sidst? «Med den største højagtelse»? = E alla fine? «Con la massima stima»?
@Sofie: Nej, nej. «Venlig hilsen» er rigeligt, eller bare «Hilsen Anna». = No, no. «Venlig hilsen» basta e avanza, o semplicemente «Hilsen Anna».

Anna skriver mailen om og sender den. = Anna riscrive la mail e la invia.
Svaret kommer efter en time. = La risposta arriva dopo un'ora.
«Hej Anna, selvfølgelig. Hvad med torsdag klokken ti? Hilsen Nina» = «Ciao Anna, certo. Che ne dici di giovedì alle dieci? Un saluto, Nina»
Anna smiler: Professoren skrev bare «hilsen» og ikke «med venlig hilsen». = Anna sorride: la professoressa ha scritto solo «hilsen» e non «med venlig hilsen».
`,
q: `
Hvorfor skriver Anna til fru Holm?|Hun vil have et møde med sin nye vejleder|Hun vil klage over en eksamen;Hun skal aflevere en opgave
Hvad synes Sofie om Annas første udkast?|Det er alt for stift, som om hun skrev til kongen|Det er for uformelt;Det er for kort
Hvordan tiltaler man en professor på et dansk universitet?|Man siger du og bruger fornavn|Man siger De;Man bruger altid titel og efternavn
Hvorfor er «Jeg har brug for et møde» ikke en god åbning?|Det lyder lidt bryskt|Det er grammatisk forkert;Det er for høfligt
Hvad gør ordet «lige» i «Må jeg lige høre»?|Det dæmper tonen|Det gør spørgsmålet til en ordre;Det betyder «præcis»
Hvordan slutter professoren sin mail?|Hun skriver bare «Hilsen Nina»|Med venlig hilsen;Med den største højagtelse
`},
ex: `
m|Come inizi di solito una mail alla tua relatrice universitaria?|Hej Nina,|Højtærede fru professor Holm,;Til hvem det måtte vedkomme,|Si usano il du e il nome, anche con i professori.
m|Quando si usa ancora *De*?|quasi solo con la famiglia reale e in testi molto formali o vecchi|con i professori;con i clienti nei negozi|Nell'uso quotidiano è scomparso.
c|Hej Mette, ___ du lige sende mig filen, tak?|kan;kunne|verbo modale|Sia *kan* sia *kunne* vanno bene; *kunne* è un po' più cortese.
c|Jeg tænkte ___, om du kunne hjælpe mig.|på|preposizione|*Jeg tænkte på, om…* = mi chiedevo se…
m|Quale frase suona più naturale al bar?|Jeg vil gerne have en kaffe.|Giv mig en kaffe.;Jeg beder Dem om en kaffe.|*Giv mig* è un ordine; *Dem* è fuori uso.
m|«Vær så venlig at…» in una mail a un collega suona…|rigido, quasi un ordine|molto gentile;molto informale|Meglio *Kan du…, tak?*
c|Tak ___ forhånd.|på|preposizione|*tak på forhånd* = grazie in anticipo.
c|Må jeg ___ høre, om du har tid i morgen?|lige|piccola parola attenuante|*lige* riduce il peso della domanda.
c|Det lyder lidt ___, hvis du skriver: «Jeg har brug for en aftale.»|bryskt;direkte|aggettivo|Un'apertura così diretta suona brusca.
m|Quale chiusura è adatta a una mail di lavoro neutra?|Venlig hilsen|Knus og kram;Med den største højagtelse|*Venlig hilsen* o *Mvh* vanno bene quasi sempre.
m|«Mon han kommer?» significa…|mi chiedo se verrà|verrà sicuramente;vieni anche tu?|*mon* esprime un dubbio gentile.
m|A che serve «Kunne du eventuelt…?»|ad attenuare la richiesta|a dare un ordine;a ringraziare|Condizionale + *eventuelt* = richiesta molto cortese.
m|Quale formula è troppo cerimoniosa per una mail a un professore danese?|Jeg tillader mig at rette henvendelse til Dem|Hej Nina, må jeg lige høre noget?;Jeg tænkte på, om vi kunne mødes|Suona come una lettera del Settecento.
o|Undskyld forstyrrelsen, men må jeg lige høre noget?|Scusa il disturbo, ma posso solo chiederti una cosa?
o|Kunne du eventuelt sende mig bilaget i dag?|Potresti eventualmente mandarmi l'allegato oggi?
o|Tak for hjælpen, og hav en god weekend.|Grazie dell'aiuto e buon fine settimana.
t|Posso chiederti una cosa?|Må jeg lige spørge dig om noget;Må jeg lige høre noget;Må jeg spørge dig om noget;Må jeg spørge om noget;Må jeg lige spørge om noget;Må jeg stille dig et spørgsmål|*lige* ammorbidisce.
t|Grazie in anticipo.|Tak på forhånd;Mange tak på forhånd|
t|Scusa il disturbo.|Undskyld forstyrrelsen;Undskyld, jeg forstyrrer;Undskyld at jeg forstyrrer;Undskyld, at jeg forstyrrer|
t|Potresti mandarmi l'allegato?|Kunne du sende mig bilaget;Kan du sende mig bilaget;Kunne du eventuelt sende mig bilaget;Kan du sende mig bilaget, tak|
t|Vorrei un caffè, per favore.|Jeg vil gerne have en kaffe;Jeg vil gerne have en kop kaffe;Jeg skal have en kaffe, tak;En kaffe, tak;Jeg vil gerne have en kaffe, tak;Jeg skal have en kaffe;Må jeg bede om en kaffe|Niente «vær så venlig».
`,
prod: {
task: "Scrivi una mail al tuo relatore (o a un professore) per chiedere di spostare un colloquio fissato per giovedì. Usa il tu e il nome, un tono neutro e cortese, e attenua la richiesta. Lunghezza: 80–150 parole.",
points: ["Saluto con il nome e breve presentazione di chi sei", "Il motivo per cui devi spostare l'incontro (lavoro o altro impegno)", "Una proposta alternativa formulata con un attenuatore (kunne du eventuelt, jeg tænkte på, om…)", "Ringraziamento e chiusura adatta (Venlig hilsen)"],
model: "Hej Nina,\n\nJeg hedder Marco og går på andet semester. Jeg skriver, fordi jeg gerne vil rykke vores møde fra torsdag til fredag, da jeg desværre skal på arbejde torsdag formiddag. Kunne du eventuelt mødes fredag klokken 10? Hvis det ikke passer dig, kan jeg også i næste uge.\n\nJeg har vedhæftet mit udkast til opgaven, så du kan nå at kigge på det. Må jeg lige høre, om du foretrækker, at jeg sender kapitlerne enkeltvis?\n\nTak på forhånd, og undskyld ulejligheden.\n\nVenlig hilsen\nMarco Bianchi",
model_it: "Ciao Nina,\n\nMi chiamo Marco e sono al secondo semestre. Ti scrivo perché vorrei spostare il nostro incontro da giovedì a venerdì, dato che purtroppo giovedì mattina devo lavorare. Potresti eventualmente vederci venerdì alle 10? Se non ti va bene, posso anche la settimana prossima.\n\nHo allegato la bozza del compito, così fai in tempo a darle un'occhiata. Posso solo chiederti se preferisci che ti mandi i capitoli uno alla volta?\n\nGrazie in anticipo e scusa il disturbo.\n\nUn saluto\nMarco Bianchi"
},
talk: {
title: "Due parole con la professoressa nel corridoio",
role: "la tua relatrice all'università, Nina Holm, che incontri dopo una lezione",
mission: "Chiedi se puoi consegnare il capitolo con due giorni di ritardo, senza suonare né brusco né troppo cerimonioso. Usa il tu, almeno un attenuatore e un ringraziamento.",
opener: "Hej, dig kender jeg vel? Var det ikke dig, der skrev til mig i sidste uge?",
opener_it: "Ciao, ti conosco, vero? Non sei tu che mi hai scritto la settimana scorsa?",
useful: ["Må jeg lige høre noget? = Posso solo chiederti una cosa?", "Jeg tænkte på, om jeg kunne få to dage mere. = Mi chiedevo se potessi avere due giorni in più.", "Kunne du eventuelt forlænge fristen til fredag? = Potresti eventualmente spostare la scadenza a venerdì?", "Det passer mig desværre ikke så godt. = Purtroppo non mi va molto bene.", "Mon ikke vi kan finde en løsning? = Una soluzione la troviamo di sicuro, no?", "Tak for hjælpen. = Grazie dell'aiuto.", "Undskyld forstyrrelsen. = Scusa il disturbo.", "Hvis det passer dig. = Se per te va bene."]
}
});

COURSE.push({
id: "c1-02", level: "C1", n: 2,
title: "Altså, jo, vel, nok",
sub: "Particelle modali e lingua parlata: valore, posizione nella frase, riempitivi e segnali discorsivi",
goals: ["Capire il valore di jo, da, vel, nok, vist, skam, sgu, altså, bare, lige, nu, dog, ellers", "Collocare le particelle nel campo centrale, prima di ikke", "Distinguere frasi quasi uguali che cambiano atteggiamento (coppie minime)", "Usare riempitivi e segnali discorsivi (øh, altså, jamen, ikke også) senza sembrare un libro di testo"],
words: `
n|en|modalpartikel|modalpartiklen|modalpartikler|modalpartiklerne|particella modale
n|et|fyldeord|fyldeordet|fyldeord|fyldeordene|riempitivo
n|en|betoning|betoningen|betoninger|betoningerne|accentuazione
n|en|antagelse|antagelsen|antagelser|antagelserne|supposizione
n|en|indvending|indvendingen|indvendinger|indvendingerne|obiezione
n|en|nuance|nuancen|nuancer|nuancerne|sfumatura
n|en|samtalepartner|samtalepartneren|samtalepartnere|samtalepartnerne|interlocutore
n|en|tvivl|tvivlen|-|-|dubbio
n|en|uenighed|uenigheden|-|-|disaccordo
n|et|talesprog|talesproget|-|-|lingua parlata
v|antage|antager|antog|antaget|supporre
v|formode|formoder|formodede|formodet|presumere
v|bekræfte|bekræfter|bekræftede|bekræftet|confermare
v|understrege|understreger|understregede|understreget|sottolineare
v|betone|betoner|betonede|betonet|accentuare
v|tøve|tøver|tøvede|tøvet|esitare
v|afbryde|afbryder|afbrød|afbrudt|interrompere
v|indvende|indvender|indvendte|indvendt|obiettare
v|tvivle|tvivler|tvivlede|tvivlet|dubitare
v|nøle|nøler|nølede|nølet|esitare, titubare
v|forsikre|forsikrer|forsikrede|forsikret|assicurare
v|protestere|protesterer|protesterede|protesteret|protestare
a|betonet|betonet|betonede|-|-|accentato, tonico
a|ubetonet|ubetonet|ubetonede|-|-|atono
a|mundret|mundret|mundrette|mere mundret|mest mundret|scorrevole, facile da dire
a|vulgær|vulgært|vulgære|mere vulgær|mest vulgær|volgare
x|jo da|ma certo, eccome
x|nå ja|ah già, beh sì
x|det er jo det|appunto, è proprio così
x|det kan du da ikke mene|non dirai sul serio
x|det ved du da godt|lo sai benissimo
x|hold da op|accidenti!
x|jamen|ma dai, ma
x|ej|ma no, dai
x|ikke også|vero? (finale di frase)
x|ik'|vero? (parlato)
x|eller hvad|o no? (finale di frase)
x|øh|ehm
x|du ved|sai
x|sådan lidt|così, un po'
x|han kommer nok|probabilmente verrà
x|hun er vist syg|a quanto pare è malata
x|du kommer vel|vieni, immagino
x|det skal jeg skam nok|ci puoi giurare, lo farò
x|kom bare|vieni pure
x|vent lige lidt|aspetta un attimo
x|det er nu ikke så slemt|in fondo non è così grave
x|det er altså ikke i orden|guarda che non va bene
x|hvordan går det ellers|e per il resto, come va
x|det er sgu for dårligt|è proprio una vergogna (fam.)
`,
grammar: [
{ h: "Che cosa fanno le particelle modali", body: `
Le particelle modali (*jo, da, vel, nok, vist, skam, sgu, altså, bare, lige, nu, dog, ellers*) non cambiano il contenuto della frase: ne cambiano l'**atteggiamento**. Dicono quanto il parlante dà per scontato, quanto è sicuro, se si aspetta conferma, se sta obiettando. L'italiano le rende con intonazione, *mica*, *pure*, *eh*, *dai*, *guarda che*.
Sono quasi sempre **atone** e vanno nel **campo centrale**, cioè dove starebbe *ikke*:
- frase principale: dopo il verbo finito e il soggetto (e i pronomi oggetto), **prima di *ikke*** e degli altri avverbi;
- frase subordinata: dopo il soggetto, prima del verbo.
» Det er jo fredag i dag. = Ma è venerdì oggi.
» I dag er det jo fredag. = Ma oggi è venerdì (lo sai).
» Jeg har jo ikke sagt noget. = Ma io non ho detto niente.
» Du har vel ikke glemt det? = Non l'avrai dimenticato, vero?
» Han sagde, at han jo ikke kunne komme. = Ha detto che, come sai, non poteva venire.
Quando ce ne sono due, si incontrano soprattutto queste combinazioni, in quest'ordine: *jo nok, vel nok, jo også, da også, nu også* (*Det er jo nok bedst. · Det var da også dumt.*). Tre insieme sono rari.
! *Jo* e *da* all'inizio di frase non sono particelle: *Jo, det gør jeg!* = «Sì, lo faccio!» (risposta a una domanda negativa).
! *Altså* e *da* possono essere accentate (e allora esprimono insistenza); *jo, vel, nok, vist* quasi mai.
` },
{ h: "Valori e coppie minime", body: `
| particella | valore | esempio |
| *jo* | lo sai già, lo do per condiviso | *Det er jo dyrt.* (come sai) |
| *da* | ovvio, contro un'obiezione | *Det ved du da godt!* |
| *vel* | cerco conferma, suppongo | *Du kommer vel?* |
| *nok* | probabilmente · rassicurazione · concessione | *Han kommer nok.* |
| *vist* | a quanto pare, mi pare | *Hun er vist syg.* |
| *skam* | eccome, ti assicuro (contro un dubbio) | *Det skal jeg skam nok.* |
| *sgu* | rafforzativo volgare, parlato | *Det er sgu rigtigt.* |
| *altså* | «cioè, guarda che, dunque» | *Det er altså dyrt!* |
| *bare* | «solo» o «pure» | *Kom bare ind.* · *Jeg er bare træt.* |
| *lige* | «solo un momento», riduce il peso | *Kan du lige hjælpe?* |
| *nu* | in fondo, contrariamente all'attesa | *Det er nu ikke så slemt.* |
| *dog* | sorpresa, rimprovero, esclamazione | *Hvor er det dog dejligt!* |
| *ellers* | «per il resto», «altrimenti» | *Hvordan går det ellers?* |
### Una frase, sei atteggiamenti
» Du kommer jo. = Ma tu vieni (lo sappiamo).
» Du kommer vel? = Vieni, immagino/giusto?
» Du kommer nok. = Verrai, probabilmente.
» Du kommer vist. = Pare che tu venga.
» Du kommer da? = Vieni, vero? (lo spero)
» Du kommer altså. = Guarda che devi venire.
### Nok: tre usi
» Han er nok syg. = Sarà malato (probabilmente).
» Det skal jeg nok klare. = Ce la farò, stai tranquillo.
» Han er nok dygtig, men han er ikke let at arbejde med. = Sarà anche bravo, ma non è facile lavorarci insieme.
### Dog, nu, ellers
» Hold dog op! = Smettila, dai!
» Det var dog utroligt! = Ma è incredibile!
» Det er nu ikke så svært. = In fondo non è così difficile.
» Skynd dig, ellers misser vi toget. = Sbrigati, altrimenti perdiamo il treno.
» Hvordan har du det ellers? = E a parte questo, come stai?
! *Sgu* è colloquiale e volgare: va bene tra amici, mai in una mail al professore o in un colloquio di lavoro. *Skam* è più antiquato e si sente soprattutto in frasi come *Det ved jeg skam godt*.
` },
{ h: "Riempitivi e segnali discorsivi", body: `
Nel parlato reale le frasi sono piene di segnali che non vanno tradotti parola per parola.
| segnale | funzione | italiano approssimativo |
| *øh* | tempo per pensare (tenere il turno) | ehm |
| *altså* | ripartire, riformulare, concludere | cioè, dunque |
| *jamen* | iniziare un'obiezione o una spiegazione | ma, beh |
| *nå* | ho capito / cambio di argomento | ah, allora |
| *ja* / *jo* / *mm* | «ti seguo» mentre l'altro parla | sì, ok |
| *ikke?* · *ik'* · *ikke også?* · *eller hvad?* | chiedere conferma a fine frase | vero? no? |
| *ligesom* · *sådan* | «tipo», attenuazione (giovani) | tipo, così |
| *du ved* | richiamare l'attenzione | sai |
» Øh, altså, jeg ved ikke helt, hvad jeg skal sige. = Ehm, cioè, non so bene cosa dire.
» Det er ret dyrt, ikke også? = È piuttosto caro, no?
» Jamen, det kan jo godt være. = Mah, può anche darsi.
» Nå, okay, så gør vi det. = Ah, ok, allora facciamo così.
Per gli italiani: i tuoi *allora*, *cioè*, *praticamente* diventano **altså**, **sådan**, **ligesom**. Un *øh* è normale e fa sembrare più sicuri di un silenzio.
! *Ikke sandt?* è la variante formale di *ikke?* e si sente nei discorsi e nei telegiornali. Il tag *ik'* si scrive spesso con l'apostrofo nelle chat.
! Nel parlato la sequenza *nå ja* o *ja ja* con intonazione calante è un modo educato di dire «sì, vabbè, lasciamo stare».
` },
],
text: {
title: "Hvem tager kagen med?", kind: "Dialogo",
intro: "Jonas e Mads organizzano il regalo di compleanno per Anna: particelle e segnali del parlato.",
lines: `
@Jonas: Hej Mads, du kommer vel til Annas fødselsdag på lørdag? = Ciao Mads, vieni alla festa di compleanno di Anna sabato, no?
@Mads: Øh, altså, jeg ved det ikke helt. Jeg kommer nok til at arbejde. = Ehm, cioè, non lo so bene. Probabilmente dovrò lavorare.
@Jonas: Ej, det kan du da ikke mene! Det er jo hendes tredive års fødselsdag. = Ma dai, non dirai sul serio! Sono i suoi trent'anni.
@Mads: Jo, det ved jeg godt. Men Line har vist sat mig på vagtplanen. = Sì, lo so bene. Ma pare che Line mi abbia messo di turno.
@Jonas: Så spørg hende bare, om du kan bytte vagt. Hun er nok ikke så svær at overtale. = Allora chiedile pure se puoi scambiare. Probabilmente non è difficile convincerla.
@Mads: Hun er altså ikke i godt humør lige nu. Hun har jo travlt med regnskabet, ikke også? = Guarda che non è di buon umore in questo momento. È piena di lavoro con la contabilità, no?
@Jonas: Nå ja. Men kan du ikke lige prøve? Det koster jo ikke noget. = Ah già. Ma non puoi provare un attimo? Tanto non costa niente.
@Mads: Okay, okay. Jeg skriver til hende nu. = Ok, ok. Le scrivo adesso.
@Jonas: Og skriv «tak på forhånd», så siger hun nok ja. = E scrivi «tak på forhånd», così dirà probabilmente di sì.

@Mads: Hun siger, at det er fint. Jeg må bare tage Marcos vagt på søndag i stedet. = Dice che va bene. Devo solo fare il turno di Marco domenica al suo posto.
@Jonas: Se, det var jo ikke så slemt! = Vedi, non era poi così male!
@Mads: Nej, det er nu også dejligt, at jeg ikke skal sige nej til Anna. Hvad skal vi egentlig give hende? = No, in fondo è bello non dover dire di no ad Anna. Che cosa le regaliamo, in realtà?
@Jonas: Jeg ved skam godt, hvad hun vil have. Hun har sgu ønsket sig en ny cykel i hele år. = Lo so benissimo che cosa vuole. Ha desiderato una bici nuova tutto l'anno, ti dico.
@Mads: En cykel! Det er dog lidt dyrt, ikke? = Una bici! Però è un po' cara, no?
@Jonas: Ja, men vi er jo mange. Hvis alle giver lidt, så går det nok. = Sì, ma siamo in tanti. Se tutti mettono qualcosa, ce la facciamo di sicuro.
@Mads: Så er det en aftale. Skal jeg tage kagen med? = Allora è deciso. Porto io la torta?
@Jonas: Det skal du da bare. Marco har vist lovet at lave tiramisu. = Ma certo, portala pure. Pare che Marco abbia promesso di fare il tiramisù.
@Mads: Hold da op, så bliver det en god fest. = Accidenti, allora sarà una bella festa.
`,
q: `
Hvorfor tror Mads, at han ikke kan komme til festen?|Han tror, at han skal arbejde|Han har ikke lyst;Han er syg
Hvad vil Jonas have Mads til at gøre?|Spørge Line, om han kan bytte vagt|Sige nej til Anna;Købe en gave alene
Hvad skal Mads gøre for at kunne komme til festen?|Han skal tage Marcos vagt på søndag|Han skal sige op;Han skal arbejde dobbelt på lørdag
Hvad ønsker Anna sig ifølge Jonas?|En ny cykel|En kage;En tur til Italien
Hvorfor tøver Mads, da Jonas foreslår en cykel?|Han synes, den er lidt dyr|Han kan ikke cykle;Anna har allerede en cykel
Hvad skal Marco lave til festen?|Tiramisu|En pizza;Rugbrød
`},
ex: `
m|«Du kommer jo.» suggerisce che…|è un fatto che entrambi conoscono|chi parla chiede conferma;non è sicuro che venga|*jo* = come sai già.
m|«Du kommer vel?» suggerisce che…|chi parla chiede conferma|è un fatto noto a entrambi;è un ordine|*vel* = «suppongo, giusto?».
m|«Han kommer nok.» significa…|probabilmente verrà|di sicuro non viene;è già arrivato|*nok* = probabilmente.
m|«Hun er vist syg.» significa…|a quanto pare è malata|sa di essere malata;è molto malata|*vist* indica un'impressione.
c|Det er ___ fredag i dag, så vi har fri!|jo|particella|Ricorda un fatto noto a entrambi.
c|Det kan du ___ ikke mene!|da|particella|*da* respinge un'idea con stupore.
c|Du har ___ ikke glemt det? (spero di no)|vel|particella|*vel ikke* = non l'avrai dimenticato.
c|Hvordan går det ___? (a parte questo)|ellers|avverbio|*ellers* = per il resto.
c|Kom ___ ind, døren er åben!|bare|particella|*bare* = pure.
c|Det er ___ ikke i orden, at du ikke ringer!|altså;da|particella|Insistenza: guarda che non va bene (*altså*; anche *da* è possibile).
m|Dove va *jo* in «Jeg har ikke tid»?|Jeg har jo ikke tid.|Jeg har ikke jo tid.;Jeg jo har ikke tid.|Nel campo centrale, prima di *ikke*.
m|In quale situazione puoi dire «Det er sgu for dårligt!»?|con un amico, in modo informale|in una mail al professore;in un colloquio di lavoro|*sgu* è volgare.
m|«Hold dog op!» esprime…|impazienza, «smettila!»|gratitudine;dubbio|*dog* = rimprovero o sorpresa.
m|«Det er nu ikke så slemt.» significa…|in fondo non è così grave|adesso non è grave;non è mai stato grave|*nu* contrasta con l'aspettativa.
o|Det er jo ikke så svært.|Ma non è mica così difficile.
o|Hun har vist ikke fået mailen.|A quanto pare non ha ricevuto la mail.
o|Du kommer vel til festen på lørdag?|Vieni alla festa sabato, vero?
t|Ma è già venerdì.|Det er jo allerede fredag;Det er jo fredag allerede|
t|Vieni anche tu, vero?|Du kommer vel også;Kommer du ikke også;Du kommer vel med;Du kommer vel også med;Du kommer også, ikke;Du kommer også, ikke også|
t|Ce la farò, stai tranquillo.|Det skal jeg nok klare;Jeg skal nok klare det;Det skal jeg nok;Det skal nok gå|*nok* rassicurante.
t|Non dirai sul serio!|Det kan du da ikke mene;Det kan du ikke mene;Det mener du da ikke;Det mener du ikke|
t|Aspetta un attimo.|Vent lige lidt;Vent lige et øjeblik;Vent et øjeblik;Vent lige|
`,
prod: {
task: "Scrivi un messaggio informale a un amico per invitarlo a cena sabato da te. Il tono deve essere quello del parlato: usa almeno cinque particelle o segnali (jo, vel, nok, vist, bare, altså, lige, sgu, ikke også). Lunghezza: 80–150 parole.",
points: ["Invito a cena sabato con orario e cosa cucini", "Una frase con vel o ikke også per cercare conferma", "Una rassicurazione con nok o bare (non serve portare niente)", "Una domanda finale su allergie o preferenze, ammorbidita con lige"],
model: "Hej Jonas!\n\nJeg tænkte på, om du og Anna har lyst til at komme til middag lørdag. Jeg har jo lovet at lave pasta, og det kan du da ikke sige nej til! Mads kommer også, så der bliver nok god stemning. I behøver ikke at tage noget med, jeg har altså styr på det.\n\nHvis I lige vil skrive, om I har nogen allergier, så er det dejligt. Det bliver sgu hyggeligt, det kan jeg love dig. Klokken syv passer jer vel?\n\nI kommer, ikke også?\n\nKnus Marco",
model_it: "Ciao Jonas!\n\nMi chiedevo se tu e Anna avete voglia di venire a cena sabato. Ho promesso di fare la pasta, e non puoi certo dire di no! Viene anche Mads, quindi probabilmente ci sarà un bel clima. Non dovete portare niente, guarda che ho tutto sotto controllo.\n\nSe mi scrivete un attimo se avete allergie, mi fate un piacere. Sarà davvero piacevole, te lo prometto. Le sette vi vanno bene, immagino?\n\nVenite, vero?\n\nUn abbraccio, Marco"
},
talk: {
title: "Cosa facciamo stasera?",
role: "il tuo coinquilino Mads, stanco dopo il lavoro",
mission: "Convinci Mads a uscire o a cucinare insieme. Usa particelle come vel, nok, bare, jo, altså e almeno un segnale (øh, ikke også).",
opener: "Altså, jeg ved ikke, om jeg gider at lave mad i aften. Du har vel ikke lyst til at bestille noget?",
opener_it: "Cioè, non so se ho voglia di cucinare stasera. Tu non hai voglia di ordinare qualcosa, vero?",
useful: ["Det kan du da ikke mene! = Non dirai sul serio!", "Det er jo fredag! = Ma è venerdì!", "Du er vel ikke så træt? = Non sarai così stanco, no?", "Jamen, jeg laver bare noget simpelt. = Ma dai, preparo qualcosa di semplice.", "Det skal nok blive hyggeligt. = Sarà carino, vedrai.", "Hvad ellers? = E che altro?", "Hold da op, hvor er du doven! = Accidenti, quanto sei pigro!", "Nå, okay, så gør vi det. = Ah, ok, allora facciamo così."]
}
});

COURSE.push({
id: "c1-03", level: "C1", n: 3,
title: "At slå to fluer med ét smæk",
sub: "Espressioni idiomatiche frequenti, falsi amici delle immagini e verbi con particella",
goals: ["Capire e usare una trentina di modi di dire reali", "Riconoscere le immagini che sembrano italiane ma significano altro", "Usare i verbi con particella (slå op, finde ud af, holde af, gå i stå, tage sig af)", "Mettere la particella al posto giusto e dare l'accento giusto"],
words: `
n|et|ordsprog|ordsproget|ordsprog|ordsprogene|proverbio
n|en|talemåde|talemåden|talemåder|talemåderne|modo di dire
n|et|sprogbillede|sprogbilledet|sprogbilleder|sprogbillederne|immagine (nel linguaggio)
a|bogstavelig|bogstaveligt|bogstavelige|mere bogstavelig|mest bogstavelig|letterale
a|overført|overført|overførte|-|-|figurato
v|slå op|slår op|slog op|slået op|cercare (in un libro); lasciare (partner)
v|finde ud af|finder ud af|fandt ud af|fundet ud af|scoprire, capire
v|holde af|holder af|holdt af|holdt af|voler bene a
v|gå i stå|går i stå|gik i stå|gået i stå|bloccarsi, incepparsi|er
v|tage sig af|tager sig af|tog sig af|taget sig af|occuparsi di
v|give op|giver op|gav op|givet op|arrendersi
v|se frem til|ser frem til|så frem til|set frem til|attendere con piacere
v|tage imod|tager imod|tog imod|taget imod|accogliere, accettare
x|i overført betydning|in senso figurato
x|at tage benene på nakken|darsela a gambe
x|at have sommerfugle i maven|avere le farfalle nello stomaco
x|at holde tungen lige i munden|stare molto attenti
x|at stikke piben ind|abbassare la cresta, fare marcia indietro
x|at gå på limpinden|cadere nel tranello
x|at sidde i saksen|essere in un guaio
x|at stå på spring|essere pronto a scattare
x|at ramme plet|centrare il punto
x|at gøre en myg til en elefant|fare una montagna da un granello
x|at have to venstrehænder|essere un imbranato
x|at tage den med ro|prenderla con calma
x|at tabe tråden|perdere il filo
x|at være helt ude i skoven|essere completamente fuori strada
x|at få vand på sin mølle|trovare conferma alle proprie idee
x|at sætte tæring efter næring|fare il passo secondo la gamba
x|at se tiden an|stare a vedere
x|at have kniven på struben|avere il coltello alla gola
x|at sluge en kamel|ingoiare il rospo
x|at lægge kortene på bordet|mettere le carte in tavola
x|at føre nogen bag lyset|raggirare qualcuno
x|at slippe katten ud af sækken|svelare il segreto
x|at købe katten i sækken|comprare a scatola chiusa
x|at kaste håndklædet i ringen|gettare la spugna
x|at have en ræv bag øret|essere furbo come una volpe
x|et lyn fra en klar himmel|un fulmine a ciel sereno
x|at gå som smurt|andare liscio come l'olio
x|at male fanden på væggen|vedere tutto nero, evocare sventure
x|at tage bladet fra munden|parlare senza giri di parole
x|at falde mellem to stole|cadere tra due sedie
x|at æde sine ord i sig|rimangiarsi le parole
x|at være oppe på mærkerne|essere in forma, sul pezzo
x|at have ben i næsen|avere carattere
x|at have rent mel i posen|avere la coscienza pulita
x|at have nok at bestille|avere un bel da fare
`,
grammar: [
{ h: "Come funzionano le espressioni fisse", body: `
Un'espressione idiomatica (*en talemåde*, *et fast udtryk*) ha un significato **overført** (figurato) che non si ricava dalle singole parole. Regole pratiche:
- le parole sono **fisse**: non si cambia l'immagine (*tage benene på nakken*, non «prendere le gambe sulle spalle»);
- il **verbo si coniuga** normalmente: *Jeg tog benene på nakken*, *Han har kastet håndklædet i ringen*;
- molte espressioni hanno l'infinito con *at* nelle liste, ma nella frase l'*at* cade: *Hun kastede håndklædet i ringen*;
- spesso il registro è colloquiale: vanno bene tra colleghi e amici, meno in un saggio formale.
| danese | letteralmente | equivalente italiano |
| *tage benene på nakken* | prendere le gambe sul collo | darsela a gambe |
| *have sommerfugle i maven* | avere farfalle nello stomaco | avere le farfalle nello stomaco |
| *sidde i saksen* | stare seduto nelle forbici | essere in un guaio |
| *gå som smurt* | andare come spalmato (di burro) | andare liscio come l'olio |
| *sætte tæring efter næring* | adattare le spese al guadagno | fare il passo secondo la gamba |
| *sluge en kamel* | ingoiare un cammello | ingoiare il rospo |
| *lægge kortene på bordet* | mettere le carte in tavola | mettere le carte in tavola |
| *kaste håndklædet i ringen* | gettare l'asciugamano nel ring | gettare la spugna |
| *gøre en myg til en elefant* | fare di una zanzara un elefante | fare una montagna da un granello |
| *et lyn fra en klar himmel* | un fulmine da cielo chiaro | un fulmine a ciel sereno |
» Da jeg hørte nyheden, tog jeg benene på nakken. = Quando ho sentito la notizia me la sono data a gambe.
» Vi må sætte tæring efter næring, nu hvor huslejen er steget. = Dobbiamo fare il passo secondo la gamba ora che l'affitto è aumentato.
» Det kom som et lyn fra en klar himmel. = È arrivato come un fulmine a ciel sereno.
` },
{ h: "Attenzione alle immagini: falsi amici idiomatici", body: `
Alcune immagini danesi sembrano italiane, ma il significato è diverso o cambia l'oggetto.
| danese | cosa potresti pensare | significato reale |
| *have en ræv bag øret* | avere la pulce nell'orecchio (sospettare) | essere furbo, scaltro |
| *gå på limpinden* | camminare su un bastoncino | cadere nel tranello (*limpind* = bastoncino spalmato di vischio per catturare gli uccelli) |
| *stikke piben ind* | infilare la pipa | abbassare la cresta, smettere di protestare |
| *få vand på sin mølle* | portare acqua al proprio mulino (fare il proprio interesse) | trovare conferma alle proprie idee |
| *male fanden på væggen* | dipingere il diavolo | prevedere sempre il peggio |
| *falde mellem to stole* | stare tra due sedie | non essere preso in carico da nessuno |
| *have ben i næsen* | avere un osso nel naso | avere carattere, farsi rispettare |
| *tage bladet fra munden* | togliersi una foglia dalla bocca | parlare senza giri di parole |
| *købe katten i sækken* | comprare il gatto nel sacco | comprare a scatola chiusa (stessa idea, immagine quasi uguale) |
| *kaste håndklædet i ringen* | gettare l'asciugamano | gettare la spugna (stessa idea, oggetto diverso) |
| *stå på spring* | stare in salto | essere pronto a scattare |
Anche le **espressioni italiane tradotte parola per parola** falliscono. Per «prendere due piccioni con una fava» un italiano potrebbe inventare il calco *to duer med én bønne*: **in danese non esiste** e nessuno lo capirebbe. Si dice *at slå to fluer med ét smæk* («colpire due mosche con un colpo solo»). Allo stesso modo «avere la pulce nell'orecchio» non ha un'immagine corrispondente: si dice semplicemente *at få mistanke* (cominciare a sospettare).
» Han har en ræv bag øret, så pas på med at skrive under. = È furbo come una volpe, quindi attenzione a firmare.
» Hun har ben i næsen og lader sig ikke træde på. = Ha carattere e non si lascia calpestare.
» Jeg tog bladet fra munden og sagde, hvad jeg mente. = Ho parlato senza giri di parole e ho detto cosa pensavo.
! Espressioni come *der er ingen ko på isen* (B2, «non c'è nessun problema») servono a rassicurare; *Du skal ikke male fanden på væggen* è invece un rimprovero leggero a chi vede tutto nero.
` },
{ h: "Verbi con particella e accento", body: `
Molti verbi danesi hanno una **particella** (*op, ud, af, på, i stå, frem til…*) che cambia il significato. La particella è quasi sempre **accentata** e resta in fondo alla frase principale, separata dal verbo.
| verbo | significato | esempio |
| *slå op* | cercare (in un libro, online); lasciare qualcuno | *Jeg slår ordet op.* |
| *finde ud af* | scoprire, capire | *Jeg finder ud af det.* |
| *holde af* | voler bene, amare | *Han holder af sin farmor.* |
| *gå i stå* | bloccarsi (motore, trattativa) | *Computeren gik i stå.* |
| *tage sig af* | occuparsi di | *Hun tager sig af børnene.* |
| *give op* | arrendersi | *Giv ikke op!* |
| *se frem til* | attendere con piacere | *Jeg ser frem til weekenden.* |
### Stessa base, altra particella
| *holde op* | smettere | *Hold op med at råbe!* |
| *holde ud* | sopportare | *Jeg kan ikke holde det ud.* |
| *holde fast i* | aggrapparsi a | *Hold fast i rækværket.* |
| *tage af* | togliere (vestiti); diminuire (vento, interesse); dimagrire | *Han har taget fem kilo af.* (= *Han har tabt sig fem kilo.*) |
| *tage på* | mettere (vestiti); andare in viaggio; ingrassare | *Vi tager på ferie.* |
| *tage imod* | accogliere, accettare | *De tager imod gæsterne.* |
### Posizione
- Pronome oggetto **prima** della particella: *Jeg slår **det** op* (non *slår op det*).
- Anche il nome oggetto va **prima** della particella: *Jeg slår ordet op*, *Han skrev adressen ned* (non *slår op ordet*). Se invece segue un complemento con preposizione, la particella viene prima: *Jeg slår op i ordbogen*.
- Frase subordinata e tempi composti: *…fordi han gav op* · *Hun har slået ordet op*.
- Infinito: *Jeg skal slå det op*.
### Verbi con particella o verbi «latini»
La lingua parlata preferisce il verbo con particella; la lingua scritta formale il verbo con prefisso (senza accento sul prefisso).
| parlato | formale |
| *give op* | *opgive* |
| *tage imod* | *modtage* |
| *finde ud af* | *opdage*, *konstatere* |
| *se frem til* | *imødese* |
» Jeg finder ud af det i morgen. = Lo scopro/capisco domani.
» Hvis motoren går i stå, så ring til mig. = Se il motore si blocca, chiamami.
» Hun tager sig af alt det praktiske. = Si occupa di tutto l'aspetto pratico.
! Il significato non si indovina: impara il verbo **con** la sua particella e un esempio (*at holde af* ≠ *at holde op*).
` },
],
text: {
title: "Madanmelderen", kind: "Dialogo",
intro: "Un venerdì sera movimentato nel ristorante dove lavora Marco: modi di dire a raffica.",
lines: `
Fredag aften er der fuldt hus på restauranten, og Marco har sommerfugle i maven. = Venerdì sera il ristorante è pieno e Marco ha le farfalle nello stomaco.
Line kommer ind i køkkenet med et alvorligt ansigt. = Line entra in cucina con un'aria seria.

@Line: Marco, jeg tager bladet fra munden: I aften kommer der en madanmelder. = Marco, parlo chiaro: stasera viene un critico gastronomico.
@Marco: Hvad?! Og det siger du først nu? Nu sidder jeg i saksen! = Cosa?! E me lo dici solo adesso? Ora sono nei guai!
@Line: Tag den nu med ro. Du er oppe på mærkerne, og køkkenet går som smurt. = Prendila con calma. Sei in forma e la cucina va liscia come l'olio.
@Marco: Sidste gang vi havde en anmelder, gik ovnen i stå midt i servicen. = L'ultima volta che avevamo un critico il forno si è bloccato in mezzo al servizio.
@Line: Så lægger jeg kortene på bordet: Den gamle ovn bliver skiftet i morgen. = Allora metto le carte in tavola: il vecchio forno viene cambiato domani.
@Marco: Hvis den går i stå i aften, kaster jeg håndklædet i ringen. = Se si blocca stasera, getto la spugna.
@Line: Nej, det gør du ikke. Du har aldrig givet op, og du har ben i næsen. = No, non lo farai. Non ti sei mai arreso e hai carattere.

Klokken seks tager Marco sig af forretterne, mens Mads tager imod gæsterne. = Alle sei Marco si occupa degli antipasti, mentre Mads accoglie gli ospiti.
Marco holder tungen lige i munden, for han vil ikke tabe tråden midt i travlheden. = Marco sta molto attento, perché non vuole perdere il filo in mezzo al trambusto.
@Mads: Bord fire vil have pastaen uden gluten, og det har jeg glemt at sige. Jeg er helt ude i skoven i dag. = Il tavolo quattro vuole la pasta senza glutine e mi sono dimenticato di dirlo. Oggi sono proprio fuori strada.
@Marco: Det skal nok gå. Jeg finder ud af det. = Andrà bene. Ci penso io.
Køkkenet har nok at bestille, men alt går godt. = La cucina ha un bel da fare, ma tutto va bene.

Sidst på aftenen kommer anmelderen ud i køkkenet. = A fine serata il critico viene in cucina.
Hun siger, at maden var fremragende, og at hun gerne vil komme igen. = Dice che il cibo era eccellente e che tornerà volentieri.
Line smiler: «Du var nervøs for ingenting. Du gjorde en myg til en elefant.» = Line sorride: «Eri nervoso per niente. Hai fatto una tragedia per niente».
Marco griner: «Næste gang vil jeg have besked i god tid.» = Marco ride: «La prossima volta voglio essere avvisato per tempo».
`,
q: `
Hvorfor har Marco sommerfugle i maven?|Der kommer en madanmelder i aften|Han skal til eksamen;Line vil fyre ham
Hvad skete der sidste gang, der var en anmelder?|Ovnen gik i stå midt i servicen|Maden blev brændt på;Der var ikke nok gæster
Hvad har Line gjort for at løse problemet med ovnen?|Hun har bestilt en ny, der bliver skiftet i morgen|Hun har ringet til anmelderen;Hun har lukket køkkenet
Hvad har Mads glemt?|At sige, at bord fire vil have pasta uden gluten|At købe mel;At tage imod gæsterne
Hvad mener anmelderen om maden?|Den var fremragende|Den var for dyr;Den var kold
Hvad mener Line, da hun siger, at Marco gjorde en myg til en elefant?|At han var for nervøs i forhold til problemet|At han var for høj;At han lavede for meget mad
`},
ex: `
m|«Prendere le gambe sul collo» si dice…|at tage benene på nakken|at tage benene med;at løbe på benene|Equivale a «darsela a gambe».
m|«At sidde i saksen» significa…|essere in un guaio|fare un lavoro di cucito;essere seduto scomodo|Immagine: bloccato tra le lame.
m|«At gå som smurt» significa…|andare liscio come l'olio|andare male;andare di fretta|*smurt* = spalmato (di burro).
m|«At have en ræv bag øret» significa…|essere furbo|avere un sospetto;avere un'infezione all'orecchio|Falso amico di «pulce nell'orecchio».
m|«At tage bladet fra munden» significa…|parlare senza giri di parole|rimangiarsi le parole;parlare piano|Non è «togliersi un sassolino».
m|«At sætte tæring efter næring» significa…|fare il passo secondo la gamba|mangiare di più;lavorare troppo|Proverbio sul budget.
c|Hvis motoren går i ___, ringer jeg til mekanikeren.|stå|particella|*gå i stå* = bloccarsi.
c|Jeg ___ ud af, hvem der havde ringet.|fandt|passato di *finde*|*finde ud af* = scoprire.
c|Hun tager ___ af børnene, mens jeg arbejder.|sig|pronome riflessivo|*tage sig af* = occuparsi di.
c|Han ___ af sin lillebror og hjælper ham altid.|holder|verbo al presente|*holde af* = voler bene.
c|Kan du lige slå det ___ i ordbogen?|op|particella|*slå op* = cercare.
m|Dove va la particella: «Jeg slår ___ ___ ___.» (ordet)|Jeg slår ordet op.|Jeg slår op ordet.;Op jeg slår ordet.|Con un nome come oggetto la particella resta in fondo.
m|Quale frase è corretta con il pronome?|Jeg slår det op.|Jeg slår op det.;Jeg op slår det.|Il pronome precede la particella.
m|«At købe katten i sækken» significa…|comprare a scatola chiusa|comprare un gatto;fare un affare|Immagine quasi uguale all'italiano.
o|Hun tog bladet fra munden og sagde sin mening.|Ha parlato senza giri di parole e ha detto la sua.
o|Jeg ser frem til weekenden.|Non vedo l'ora che arrivi il fine settimana.
o|Han kastede håndklædet i ringen efter tre måneder.|Ha gettato la spugna dopo tre mesi.
t|Me la sono data a gambe.|Jeg tog benene på nakken;Jeg har taget benene på nakken|
t|Ora sono in un guaio.|Nu sidder jeg i saksen;Nu er jeg i knibe;Nu sidder jeg i klemme|
t|Se ne occupa lei.|Hun tager sig af det;Det tager hun sig af;Hun sørger for det|
t|Ho perso il filo.|Jeg tabte tråden;Jeg har tabt tråden|
`,
prod: {
task: "Scrivi un messaggio a una collega o a un amico per raccontare una settimana stressante. Usa almeno cinque espressioni idiomatiche del capitolo e almeno due verbi con particella. Lunghezza: 80–150 parole.",
points: ["Un'espressione per descrivere nervosismo o difficoltà (sommerfugle i maven, sidde i saksen…)", "Una per dire che ti sei calmato o che è andato bene (tage den med ro, gå som smurt)", "Una per parlare chiaro o per non arrenderti (tage bladet fra munden, give op, kaste håndklædet i ringen)", "Almeno due verbi con particella (finde ud af, tage sig af, holde af, give op)"],
model: "Hej Sofie,\n\nSikke en uge! Mandag sad jeg i saksen, fordi jeg havde glemt at forberede min præsentation, og jeg havde sommerfugle i maven hele dagen. Heldigvis tog jeg den med ro, og til sidst gik det som smurt. Min vejleder tog bladet fra munden og sagde, at jeg skal holde tungen lige i munden, når jeg skriver opgaven. Jeg gav ikke op, men jeg må indrømme, at jeg næsten kastede håndklædet i ringen.\n\nNu har jeg nok at bestille hele weekenden. Jeg finder ud af resten på lørdag. Skal vi tage en kop kaffe på fredag?\n\nHilsen Marco",
model_it: "Ciao Sofie,\n\nChe settimana! Lunedì ero nei guai perché avevo dimenticato di preparare la presentazione e ho avuto le farfalle nello stomaco tutto il giorno. Per fortuna l'ho presa con calma e alla fine è andato tutto liscio. La mia relatrice ha parlato senza giri di parole e ha detto che devo stare molto attento quando scrivo il compito. Non mi sono arreso, ma devo ammettere che ho quasi gettato la spugna.\n\nOra ho un bel da fare per tutto il fine settimana. Capirò il resto sabato. Prendiamo un caffè venerdì?\n\nUn saluto, Marco"
},
talk: {
title: "Una giornata disastrosa",
role: "la tua collega Sofie, che ti racconta una giornata andata storta",
mission: "Ascolta il suo racconto e reagisci usando almeno tre espressioni idiomatiche (es. sidde i saksen, tage den med ro, gøre en myg til en elefant) e un verbo con particella.",
opener: "Åh, jeg har haft sådan en dag. Printeren gik i stå, og nu er jeg helt ude i skoven med rapporten.",
opener_it: "Ah, che giornata. La stampante si è bloccata e ora sono completamente fuori strada con il rapporto.",
useful: ["Tag den med ro. = Prendila con calma.", "Du gør en myg til en elefant. = Stai facendo una tragedia per niente.", "Så sidder du i saksen. = Allora sei nei guai.", "Jeg tager mig af printeren. = Mi occupo io della stampante.", "Giv ikke op. = Non arrenderti.", "Det finder vi ud af. = Lo scopriamo/risolviamo.", "Lad os se tiden an. = Stiamo a vedere.", "Jeg tager bladet fra munden: … = Parlo chiaro: …"]
}
});

COURSE.push({
id: "c1-04", level: "C1", n: 4,
title: "Avissprog",
sub: "Leggere i giornali: titoli, stile nominale, passivo, discorso riportato e connettivi formali",
goals: ["Leggere i titoli di giornale (ellissi, presente al posto del passato)", "Capire lo stile nominale e i composti lunghi", "Distinguere il passivo in -s dal passivo con blive", "Riconoscere il discorso riportato (ifølge, angiveligt, efter sigende, skulle) e i connettivi formali"],
words: `
n|en|overskrift|overskriften|overskrifter|overskrifterne|titolo (di articolo)
n|en|leder|lederen|ledere|lederne|editoriale
n|en|kilde|kilden|kilder|kilderne|fonte
n|en|påstand|påstanden|påstande|påstandene|affermazione
n|en|udtalelse|udtalelsen|udtalelser|udtalelserne|dichiarazione
n|et|flertal|flertallet|flertal|flertallene|maggioranza
n|et|pressemøde|pressemødet|pressemøder|pressemøderne|conferenza stampa
n|en|undersøgelse|undersøgelsen|undersøgelser|undersøgelserne|indagine, studio
n|en|stigning|stigningen|stigninger|stigningerne|aumento
n|et|fald|faldet|fald|faldene|calo
n|en|boligmangel|boligmanglen|-|-|carenza di alloggi
n|en|opposition|oppositionen|-|-|opposizione
n|en|entreprenør|entreprenøren|entreprenører|entreprenørerne|imprenditore edile
v|afsløre|afslører|afslørede|afsløret|rivelare
v|påstå|påstår|påstod|påstået|affermare, sostenere
v|hævde|hævder|hævdede|hævdet|sostenere
v|fremlægge|fremlægger|fremlagde|fremlagt|presentare (un piano)
v|vedtage|vedtager|vedtog|vedtaget|approvare
v|afvise|afviser|afviste|afvist|respingere
v|indføre|indfører|indførte|indført|introdurre
v|dementere|dementerer|dementerede|dementeret|smentire
v|udskyde|udskyder|udskød|udskudt|rinviare
v|granske|gransker|granskede|gransket|esaminare a fondo
a|omstridt|omstridt|omstridte|-|-|controverso
a|foreløbig|foreløbigt|foreløbige|-|-|provvisorio
a|omfattende|omfattende|omfattende|mere omfattende|mest omfattende|vasto, esteso
a|formodet|formodet|formodede|-|-|presunto
x|ifølge|secondo
x|angiveligt|presumibilmente, a quanto si afferma
x|efter sigende|a quanto si dice
x|dog|tuttavia
x|imidlertid|tuttavia, nel frattempo
x|derimod|invece
x|således|così, come segue
x|desuden|inoltre
x|eftersom|poiché
x|idet|dato che, nel momento in cui
x|dermed|con ciò, quindi
x|til gengæld|in compenso
x|ikke desto mindre|ciononostante
x|som følge af|a causa di
x|i forbindelse med|in relazione a
x|på trods af|nonostante
x|tilsyneladende|apparentemente
x|formentlig|presumibilmente
x|hvorvidt|se (interrogativa indiretta formale)
`,
grammar: [
{ h: "Il linguaggio dei titoli", body: `
I titoli sono scritti in forma **compressa**: contano le parole di contenuto.
| tecnica | titolo | frase piena |
| niente articolo | *Regeringen indfører ny skat* | *Regeringen indfører en ny skat.* |
| presente per il passato | *Politiet anholder tre* | *Politiet har anholdt tre personer.* |
| verbo «essere» omesso | *Ny cykelbro åbnet* | *En ny cykelbro er blevet åbnet.* |
| passivo in -s | *Ny skole bygges* | *Der bygges en ny skole.* |
| due punti per citare | *Statsministeren: Vi har travlt* | *Statsministeren siger, at de har travlt.* |
| *vil* + infinito (intenzione) | *Kommunen vil droppe gratis parkering* | *Kommunen har i sinde at…* |
» Boligpriserne stiger igen. = I prezzi delle case salgono di nuovo.
» Færre unge flytter hjemmefra. = Meno giovani lasciano la casa dei genitori.
» Politiet: Manden er anholdt. = La polizia: l'uomo è stato arrestato.
Il **presente** dà immediatezza (come il *presente storico*). Per sapere se il fatto è passato o futuro leggi il sottotitolo: *vil*, *skal*, *forventes* indicano il futuro.
! Nelle virgolette dei giornali danesi si trovano spesso *«…»* o *»…«* e il verbo di dichiarazione dopo la citazione: *»Det er alt for dyrt«, siger ministeren.*
` },
{ h: "Stile nominale, composti e passivo", body: `
Nei testi formali le azioni diventano **nomi**: *indførelsen af en ny skat*, *en stigning i priserne*, *behandling af sagen*. Aiuta a distinguere *stigning i* (aumento di), *forslag om* (proposta di), *krav om* (richiesta di), *kritik af* (critica a).
### Composti lunghi
Si leggono **da destra a sinistra**: l'ultimo elemento dà genere e plurale.
| composto | analisi | significato |
| *boligmarkedsanalyse* | bolig + marked + s + analyse | analisi del mercato immobiliare |
| *sagsbehandlingstid* | sag + s + behandling + s + tid | tempo di trattazione della pratica |
| *fødevarestyrelse* | føde + vare + styrelse | agenzia per gli alimenti |
| *studiegæld* | studie + gæld | debito degli studi |
La *-s-* e la *-e-* tra gli elementi sono «legamenti» (*arbejd**s**plads*, *sag**s**behandling*, *jul**e**frokost*), ma molti composti non ne hanno (*boligmangel*): vanno imparati con la parola.
### Passivo: -s o blive
| forma | uso | esempio |
| verbo + *-s* | azione generale, abituale, titoli, regole | *Sagen behandles af kommunen.* |
| *blive* + participio | evento concreto, singolo | *Manden blev anholdt i går.* |
| *være* + participio | risultato, stato | *Manden er anholdt.* |
| *er blevet* + participio | evento concluso nel presente | *Loven er blevet vedtaget.* |
| *der blev* + participio | impersonale | *Der blev anholdt tre personer.* |
» Pengene fordeles ujævnt mellem kommunerne. = I soldi sono distribuiti in modo disomogeneo tra i comuni.
» Sagen blev udskudt til næste år. = Il caso è stato rinviato all'anno prossimo.
» Loven er vedtaget med et snævert flertal. = La legge è stata approvata con una maggioranza risicata.
! Il passivo in -s non ha tempi composti: si dice *er blevet behandlet* (mai *har behandlets*). Il passato in *-edes* (*behandledes*) esiste, ma è solo scritto e formale.
! L'agente si introduce con *af*: *Rapporten blev skrevet af en journalist.*
` },
{ h: "Discorso riportato e connettivi formali", body: `
Il giornalista deve dire **chi** afferma una cosa. Gli strumenti sono:
| espressione | uso | esempio |
| *ifølge* + fonte | attribuisce l'informazione | *Ifølge politiet var han alene.* |
| *angiveligt* | si afferma ma non è provato | *Han blev angiveligt set i byen.* |
| *efter sigende* | circolano voci | *Efter sigende har hun sagt op.* |
| *skulle* (+ *have*) | evidenziale: «si dice che» (passato) | *Han skulle have forladt landet.* |
| *skal* + infinito | «si dice che» (presente) | *Hun skal være gift med en kok.* |
| *hævde, påstå* | sostenere (con distanza) | *Firmaet hævder, at det er uskyldigt.* |
» Ifølge en ny undersøgelse bor hver fjerde ung hos sine forældre. = Secondo uno studio recente, un giovane su quattro vive con i genitori. (dato inventato)
» Ministeren skulle have sagt, at aftalen er død. = A quanto si dice, il ministro avrebbe detto che l'accordo è morto.
» Udlejeren afviser påstanden. = Il proprietario respinge l'affermazione.
Dopo *ifølge* non c'è *at*: la fonte è un complemento (*ifølge kilder*), non una frase.
### Connettivi formali
| connettivo | funzione | esempio |
| *dog* · *imidlertid* | contrasto, «però» | *Det er dog ikke sikkert.* |
| *derimod* | contrasto netto, «invece» | *Oppositionen mener derimod…* |
| *således* | «così», «come segue» | *Han udtalte sig således:* |
| *desuden* | aggiunta, «inoltre» | *Desuden mangler der penge.* |
| *eftersom* | causa (subordinata) | *…eftersom mange har lav indkomst* |
| *idet* | causa o simultaneità (subordinata) | *…idet han ikke svarede* |
| *til gengæld* | compensazione | *Billigere, men til gengæld langsommere.* |
| *dermed* | conseguenza | *Prisen stiger og dermed også presset.* |
**Ordine delle parole**: *dog, imidlertid, derimod, desuden* sono avverbi: all'inizio causano l'inversione (*Dog er det ikke sikkert*), nel campo centrale seguono il verbo (*Det er dog ikke sikkert*). *Eftersom* e *idet* aprono una subordinata: soggetto, avverbio, verbo (*eftersom mange ikke kan få lån*).
! *Idet* è formale e tipico dei giornali: nel parlato si dice *fordi* o *da*.
` },
],
text: {
title: "Færre unge flytter hjemmefra", kind: "Articolo di giornale",
intro: "Un articolo inventato nello stile dei giornali danesi, con fonti, smentite e connettivi. Dati, fonti e persone sono di fantasia: non sono statistiche reali.",
lines: `
Flere unge bliver boende hos deres forældre, viser en ny undersøgelse. = Più giovani restano a vivere con i genitori, mostra una nuova indagine.
Ifølge undersøgelsen, der er udarbejdet af et analyseinstitut, bor næsten hver fjerde 25-årig stadig hjemme. = Secondo l'indagine, redatta da un istituto di analisi, quasi un venticinquenne su quattro vive ancora a casa.
Boligmanglen i de store byer nævnes som hovedårsag. = La carenza di alloggi nelle grandi città è indicata come causa principale.

Priserne på små lejligheder er steget kraftigt de seneste år. = I prezzi dei piccoli appartamenti sono aumentati molto negli ultimi anni.
I København skulle en toværelseslejlighed nu koste over tolv tusind kroner om måneden, ifølge en boligportal. = A Copenaghen un bilocale costerebbe ora più di dodicimila corone al mese, secondo un portale immobiliare.
Regeringen afviser dog, at situationen er alvorlig. = Il governo respinge però che la situazione sia grave.
Boligministeren udtalte sig ved et pressemøde i går. = Il ministro dell'edilizia si è espresso ieri in una conferenza stampa.
»Vi har vedtaget en aftale, der skal give fem tusind nye ungdomsboliger inden 2030«, sagde ministeren. = «Abbiamo approvato un accordo che dovrà fornire cinquemila nuovi alloggi per giovani entro il 2030», ha detto il ministro.

Oppositionen mener derimod, at aftalen er alt for lille. = L'opposizione ritiene invece che l'accordo sia troppo piccolo.
Desuden kritiserer flere kommuner, at pengene fordeles ujævnt. = Inoltre vari comuni criticano il fatto che i fondi siano distribuiti in modo disomogeneo.
Studerende bliver særligt hårdt ramt, eftersom mange kun har en lille SU. = Gli studenti sono colpiti in modo particolare, poiché molti hanno solo una piccola borsa di studio statale (SU).
Anna Rossi, 24, studerer i Aarhus og leder efter en bolig. = Anna Rossi, 24 anni, studia ad Aarhus e cerca casa.
»Jeg har søgt i fire måneder uden held«, siger hun. = «Cerco da quattro mesi senza fortuna», dice.

En udlejer skulle ifølge en kilde have forlangt kontanter for en lejlighed. = Un proprietario avrebbe chiesto contanti per un appartamento, secondo una fonte.
Udlejeren afviser påstanden og siger, at han aldrig har gjort noget ulovligt. = Il proprietario respinge l'accusa e dice di non aver mai fatto nulla di illegale.
Politiet har ikke bekræftet, at sagen er anmeldt. = La polizia non ha confermato che il caso sia stato denunciato.
Efter sigende undersøges flere lignende sager. = A quanto si dice, vengono esaminati diversi casi simili.
Spørgsmålet er nu, hvorvidt aftalen når at gøre en forskel, inden næste semester begynder. = La domanda ora è se l'accordo farà in tempo a fare la differenza prima dell'inizio del prossimo semestre.
`,
q: `
Hvad viser den nye undersøgelse?|At flere unge bliver boende hjemme hos deres forældre|At flere unge flytter til udlandet;At boligpriserne falder
Hvad nævnes som hovedårsag?|Boligmanglen i de store byer|Lave lønninger;Mangel på uddannelser
Hvordan reagerer regeringen på situationen?|Den afviser, at situationen er alvorlig|Den indrømmer, at den er katastrofal;Den har ikke kommenteret den
Hvorfor er oppositionen utilfreds?|Den mener, at aftalen er alt for lille|Den vil have højere skatter;Den er enig med ministeren
Hvorfor bliver studerende særligt hårdt ramt?|Mange har kun en lille SU|De har ikke lov til at leje bolig;De har for mange penge
Hvad siger teksten om udlejeren, der angiveligt forlangte kontanter?|Han afviser påstanden|Han er blevet anholdt;Han har bekræftet det
`},
ex: `
m|Quale titolo è scritto in stile giornalistico?|Boligpriserne stiger igen|De boligpriser, der har været stigende, vil gøre det igen|Titoli: presente, senza articolo e frasi lunghe.
m|«Ifølge politiet…» introduce…|la fonte dell'informazione|una domanda;una conclusione|*ifølge* + fonte.
m|«Manden skulle have forladt landet.» significa…|si dice che l'uomo abbia lasciato il paese|l'uomo deve lasciare il paese;l'uomo ha dovuto lasciare il paese|*skulle have* evidenziale.
m|«Hun skal være gift med en kok.» significa…|si dice che sia sposata con un cuoco|deve sposare un cuoco;vuole sposare un cuoco|*skal* + infinito = si dice.
c|___ undersøgelsen bor hver fjerde ung hjemme.|ifølge|preposizione|*ifølge* = secondo.
c|Regeringen vil spare, men oppositionen vil ___ bruge flere penge.|derimod|avverbio di contrasto|*derimod* = invece.
c|Prisen er lav, men ___ er kvaliteten dårlig.|til gengæld;derimod|locuzione|*til gengæld* = in compenso.
c|Mange er kede af det, ___ regeringen ikke har lyttet.|eftersom;fordi;da;idet|congiunzione|*eftersom* = poiché (formale; vanno bene anche *fordi*, *da*, *idet*).
c|Sagen blev ___ til næste år. (rinviare)|udskudt|participio di *udskyde*|*udskyde, udskød, udskudt*.
m|Qual è il passivo corretto?|Loven er blevet vedtaget.|Loven er vedtages.;Loven blev vedtages.|Il passivo in -s non si usa con *er blevet*.
m|Quale frase usa il passivo in -s correttamente?|Pengene fordeles mellem kommunerne.|Pengene fordeler mellem kommunerne.;Pengene bliver fordeles.|-s si aggiunge al verbo.
m|«Efter sigende» significa…|a quanto si dice|con certezza;dopo la firma|Indica voci non verificate.
m|Qual è il verbo più neutro per riportare una dichiarazione?|sige|påstå;afsløre|*påstå* e *hævde* prendono le distanze.
m|«Dog» in «Det er dog ikke sikkert» significa…|però|dopo;quindi|*dog* = tuttavia.
o|Ifølge ministeren er aftalen vedtaget.|Secondo il ministro l'accordo è stato approvato.
o|Han afviser dog påstanden.|Egli tuttavia respinge l'affermazione.
o|Udlejeren afviser påstanden og siger, at han aldrig har gjort noget forkert.|Il proprietario respinge l'accusa e dice di non aver mai fatto nulla di sbagliato.
t|Secondo la polizia, l'uomo era solo.|Ifølge politiet var manden alene;Ifølge politiet var han alene|
t|Il governo respinge l'accusa.|Regeringen afviser påstanden;Regeringen afviser beskyldningen;Regeringen afviser anklagen|
t|L'accordo è stato approvato.|Aftalen er blevet vedtaget;Aftalen blev vedtaget;Aftalen er vedtaget|
t|A quanto si dice, ha dato le dimissioni.|Efter sigende har hun sagt op;Efter sigende har han sagt op;Hun skulle angiveligt have sagt op;Han skulle angiveligt have sagt op;Hun skulle have sagt op;Han skulle have sagt op;Efter sigende har hun opsagt sin stilling|
`,
prod: {
task: "Scrivi una breve notizia di giornale (titolo + testo di 80–150 parole) su questo fatto inventato: l'apertura di una nuova linea della metropolitana a Copenaghen è rinviata di un anno; il comune dà la colpa al cantiere, l'impresa respinge l'accusa, l'opposizione chiede un'indagine. Usa lo stile giornalistico.",
points: ["Titolo breve in presente, senza articolo", "Una fonte con ifølge e un'informazione non verificata con efter sigende, angiveligt o skulle", "Un contrasto con dog o derimod e una causa con eftersom o idet", "Almeno un passivo (udskydes / blev udskudt) e un verbo di dichiarazione (afvise, hævde)"],
model: "Metrolinje forsinkes et år\n\nÅbningen af den nye metrolinje udskydes til 2031, oplyste kommunen på et pressemøde i går. Forsinkelsen skyldes ifølge borgmesteren, at byggeriet har været mere omfattende end ventet. Entreprenøren afviser dog, at firmaet er skyld i problemet, og hævder, at kommunen flere gange har ændret planerne. Efter sigende skulle flere stationer have været klar allerede næste år, men det er ikke bekræftet. Oppositionen kritiserer derimod aftalen og kræver en uvildig undersøgelse. Desuden frygter flere erhvervsdrivende, at deres butikker bliver ramt, eftersom byggepladsen bliver stående i endnu et år.",
model_it: "Linea della metropolitana in ritardo di un anno\n\nL'apertura della nuova linea della metropolitana viene rinviata al 2031, ha comunicato ieri il comune in una conferenza stampa. Il ritardo dipende, secondo il sindaco, dal fatto che i lavori sono stati più estesi del previsto. L'impresa respinge però di essere responsabile del problema e sostiene che il comune ha cambiato i piani più volte. A quanto si dice, diverse stazioni avrebbero dovuto essere pronte già l'anno prossimo, ma non è confermato. L'opposizione critica invece l'accordo e chiede un'indagine indipendente. Inoltre diversi commercianti temono che i loro negozi siano colpiti, poiché il cantiere resterà ancora un anno."
},
talk: {
title: "Hai letto il giornale?",
role: "il tuo compagno di corso Jonas, che ha letto un articolo sulla politica per gli studenti",
mission: "Riferisci ciò che dice l'articolo senza assumerti la responsabilità (ifølge, angiveligt, efter sigende, skulle) e dai un'opinione con un connettivo formale (dog, derimod, desuden).",
opener: "Har du set avisen i dag? Der står, at regeringen vil ændre reglerne for SU. Hvad tænker du?",
opener_it: "Hai visto il giornale oggi? C'è scritto che il governo vuole cambiare le regole della SU. Che ne pensi?",
useful: ["Ifølge artiklen … = Secondo l'articolo …", "Efter sigende … = A quanto si dice …", "Ministeren skulle have sagt, at … = Il ministro avrebbe detto che …", "Det er dog ikke bekræftet. = Non è però confermato.", "Oppositionen mener derimod, at … = L'opposizione ritiene invece che …", "Desuden bliver studerende ramt. = Inoltre gli studenti ne sono colpiti.", "Det afhænger af, hvorvidt … = Dipende da se …", "Regeringen afviser påstanden. = Il governo respinge l'affermazione."]
}
});

COURSE.push({
id: "c1-05", level: "C1", n: 5,
title: "Sådan taler vi faktisk",
sub: "Pronuncia reale e riduzioni del parlato: ikke, jeg, det er, stød, d molle, r vocalizzata",
goals: ["Riconoscere le riduzioni più frequenti (ikke, jeg, det er, kan ikke…)", "Sentire la differenza di stød e il d molle", "Capire il danese veloce con strategie di ascolto", "Chiedere di ripetere o rallentare in modo naturale"],
words: `
n|en|udtale|udtalen|udtaler|udtalerne|pronuncia
n|et|stød|stødet|stød|stødene|stød (colpo di glottide)
n|en|vokal|vokalen|vokaler|vokalerne|vocale
n|en|konsonant|konsonanten|konsonanter|konsonanterne|consonante
n|en|stavelse|stavelsen|stavelser|stavelserne|sillaba
n|et|tryk|trykket|tryk|trykkene|accento di intensità
n|et|tonefald|tonefaldet|tonefald|tonefaldene|intonazione
n|en|rytme|rytmen|rytmer|rytmerne|ritmo
n|en|forkortelse|forkortelsen|forkortelser|forkortelserne|abbreviazione
n|et|bogstav|bogstavet|bogstaver|bogstaverne|lettera
n|en|lyd|lyden|lyde|lydene|suono
n|en|undertekst|underteksten|undertekster|underteksterne|sottotitolo
n|en|mundart|mundarten|mundarter|mundarterne|parlata locale
n|en|klang|klangen|klange|klangene|timbro, sonorità
n|en|strube|struben|struber|struberne|gola
v|udtale|udtaler|udtalte|udtalt|pronunciare
v|sluge|sluger|slugte|slugt|ingoiare
v|mumle|mumler|mumlede|mumlet|mormorare
v|forkorte|forkorter|forkortede|forkortet|abbreviare
v|trække sammen|trækker sammen|trak sammen|trukket sammen|contrarre, fondere
v|udelade|udelader|udelod|udeladt|omettere
v|genkende|genkender|genkendte|genkendt|riconoscere
v|vænne sig til|vænner sig til|vænnede sig til|vænnet sig til|abituarsi a
v|opfatte|opfatter|opfattede|opfattet|percepire, capire
v|forveksle|forveksler|forvekslede|forvekslet|confondere
v|smelte sammen|smelter sammen|smeltede sammen|smeltet sammen|fondersi|er
a|stum|stumt|stumme|-|-|muto (lettera)
a|blød|blødt|bløde|blødere|blødest|molle
a|hård|hårdt|hårde|hårdere|hårdest|duro
a|utydelig|utydeligt|utydelige|mere utydelig|mest utydelig|indistinto
a|tydelig|tydeligt|tydelige|mere tydelig|mest tydelig|chiaro, distinto
a|reduceret|reduceret|reducerede|-|-|ridotto
x|hvad sagde du?|cosa hai detto?
x|kan du sige det igen?|puoi ripeterlo?
x|kan du tale lidt langsommere?|puoi parlare un po' più piano?
x|jeg fik det ikke helt med|non ho colto tutto
x|kan du stave det?|puoi dirmi come si scrive? (lettera per lettera)
x|jeg hører det, men jeg forstår det ikke|lo sento ma non lo capisco
x|nå, jeg forstår|ah, ho capito
x|hurtigt og utydeligt|veloce e indistinto
x|i daglig tale|nel parlato quotidiano
x|på rigsdansk|in danese standard
x|det lyder som|suona come
x|som skrevet|come è scritto
x|ved ikke|non so (parlato)
`,
grammar: [
{ h: "Il danese scritto non è il danese parlato", body: `
Il danese è una lingua **di sillabe ingoiate**: le consonanti si ammorbidiscono, le vocali si riducono e le parole si legano. Per questo anche chi legge bene fatica ad ascoltare.
! Le pronunce qui sotto sono **approssimazioni per italiani**, non trascrizione fonetica precisa. Leggi le sillabe all'italiana: «è» e «ò» sono aperte, l'apostrofo indica uno stacco leggero (*stød*) o una consonante quasi muta. Per la pronuncia vera ascolta sempre l'audio.
| scritto | pronuncia lenta (approssimata) | parlato veloce (approssimato) |
| *ikke* | «égge» | «eg» (si scrive anche *ik'*) |
| *jeg* | «jai» | «ja» |
| *mig, dig* | «mai, dai» | «mai, dai» (la g diventa una «i») |
| *det er* | «de è-a» | «de» o «dea» |
| *kan ikke* | «kan égge» | «ka'eg», «kaneg» |
| *jeg ved det ikke* | «jai ve' de égge» | «javedeg» |
| *hvad* | «va-d» | «va» |
| *skal vi* | «skal vi» | «ska vi» |
| *sådan* | «sòdan» | «sòn» |
| *meget* | «mài-ed» | «mài» |
| *noget* | «nòed» | «nòe» |
| *og* · *at* (infinito) | «ò» (g e t quasi mute) | «ò» |
| *eller* | «èla» | «èla» |
| *efter* | «èfta» | «èfta» |
| *selvfølgelig* | «sèlføli» | «seføli» |
| *ligesom* | «lìsom» | «lìsom» |
Esempi di frasi:
» Jeg ved det ikke. = Non lo so.
» Skal vi ikke tage en kaffe? = Non prendiamo un caffè?
» Hvad hedder du? = Come ti chiami?
In chat vedrai spesso scritto il parlato: *ik'*, *ka'*, *ska'*, *hva'*, *nåh*, *jaja*.
` },
{ h: "I suoni che ingannano l'orecchio italiano", body: `
### Stød
Lo **stød** è un breve stacco di glottide (come tra le due «uh» di *uh-oh*). Non è accento: **distingue parole**. Si trova nelle sillabe accentate con vocale lunga o consonante sonora; spesso sparisce nel plurale (*hund* → *hunde*).
| con stød | senza stød |
| *mand* «man'» (uomo) | *man* «man» (si impersonale) |
| *hund* «hun'» (cane) | *hun* «hun» (lei) |
| *bønder* «bøn'er» (contadini) | *bønner* «bøner» (fagioli; preghiere) |
| *mord* «mòa'» (omicidio) | *mor* «mòa» (mamma) |
| *læser* «lè'sa» (verbo: legge) | *læser* «lèsa» (nome: lettore) |
» Manden har en hund. = L'uomo ha un cane.
» Man siger, at hun har en hund. = Si dice che lei abbia un cane.
### D molle e g semivocale
- **d molle** (*blødt d*): dopo vocale e in fine sillaba si pronuncia come il *th* inglese di *the*, molto debole, spesso quasi muto: *mad*, *glad*, *rød*, *hedder*, *ud*, *vide*. L'italiano tende al d duro di *dado*: va evitato.
- **g dopo vocale** diventa una semivocale o sparisce: *bog* «bóu», *jeg* «jai», *dag* «dè'» (g muta), *sige* «sì-e». Attenzione: in *ikke* la doppia k si sente come una «g» debole.
### La r
La r iniziale è uvulare (come la r francese, in gola). **Dopo vocale diventa una breve «a»** o allunga la vocale: *mor* «mòa», *fire* «fìa», *spiser* «spìsa», *bare* «bàa», *har* «ha». Il suffisso *-er* è quasi sempre una «a» breve.
### Le sillabe senza accento (schwa)
Le finali atone si riducono a un suono debole: *hedder* «hèda», *spise* «spìse», *-en* → una «n» sillabica (*bilen* «bìln»), *-et* → «-ed». Le consonanti vicine si fondono (assimilazione).
! Una parola «pulita» in lista di lessico può avere tre diverse versioni nel parlato: impara a sentire il ritmo, non lettera per lettera.
` },
{ h: "Capire il danese veloce", body: `
Capire il danese reale non è una questione di vocabolario, ma di **strategia**:
- **Cerca le parole accentate**: nomi, verbi e aggettivi principali. Funzioni come *at, og, det, er, jeg* si riducono a quasi nulla.
- **Aspettati le catene**: *jeg ved det ikke* arriva come un'unica parola.
- **Ascolta il ritmo**: il danese dà forza alla sillaba accentata e riduce molto tutte le altre: *hedder* «HÈda», non «he-DER».
- **Tieni a mente le frasi fatte**: le espressioni più frequenti si riconoscono come un blocco.
- **Usa i sottotitoli danesi** (DR, TV 2) e ripeti ad alta voce (*shadowing*).
- **Non fermarti alla prima parola persa**: dal contesto il resto torna.
| situazione | frase utile |
| non hai sentito | *Hvad sagde du?* |
| vuoi che ripeta | *Kan du sige det igen?* |
| troppo veloce | *Kan du tale lidt langsommere?* |
| hai capito solo in parte | *Jeg fik det ikke helt med.* |
| vuoi la parola esatta | *Kan du stave det?* |
» Undskyld, kan du sige det igen, lidt langsommere? = Scusa, puoi ripeterlo, un po' più piano?
» Jeg hører det, men jeg forstår det ikke. = Lo sento, ma non lo capisco.
» Nå, jeg forstår. = Ah, ho capito.
Anche in Danimarca c'è molta variazione: a Copenaghen si sente il **rigsdansk** con stød marcato; nello Jutland molti parlano con un'intonazione e con articoli e pronomi propri. Chiedere di ripetere non è maleducato: i danesi lo trovano normale.
` },
],
text: {
title: "Det lyder som ét langt ord", kind: "Dialogo",
intro: "Marco si lamenta con Jonas perché al lavoro non capisce quando i colleghi parlano veloce.",
lines: `
Marco har boet i København i et år, men han forstår stadig ikke, når kollegerne taler hurtigt. = Marco vive a Copenaghen da un anno, ma ancora non capisce quando i colleghi parlano veloce.
Han fortæller det til Jonas over en kop kaffe. = Lo racconta a Jonas davanti a un caffè.

@Marco: Jonas, jeg lærer dansk hver dag, men på arbejdet forstår jeg næsten ingenting. = Jonas, studio danese ogni giorno, ma al lavoro non capisco quasi niente.
@Jonas: Hvad er det, der er svært? = Che cosa è difficile?
@Marco: Line sagde i går noget, der lød som «javedeg». Det var ét langt ord for mig. = Ieri Line ha detto qualcosa che suonava come «javedeg». Per me era una sola lunga parola.
@Jonas: Det er «jeg ved det ikke». Vi trækker ordene sammen og sluger lyde. = È «jeg ved det ikke». Contraiamo le parole e ingoiamo i suoni.
@Marco: Men hvorfor siger I ikke bare hele ordene? = Ma perché non dite semplicemente le parole intere?
@Jonas: Fordi det er hurtigere. «Ikke» bliver til noget, der minder om «eg», og «jeg» bliver til «ja». = Perché è più veloce. «Ikke» diventa qualcosa che ricorda «eg», e «jeg» diventa «ja».
@Marco: Og «det er»? Jeg hører bare «de». = E «det er»? Sento solo «de».
@Jonas: Præcis. Og vores r'er forsvinder næsten, når de står efter en vokal. = Esatto. E le nostre r quasi spariscono quando stanno dopo una vocale.
@Marco: Det værste er d'et. Der er et d på skrift, men jeg hører ingenting. = La cosa peggiore è la d. Sulla carta c'è una d, ma non sento niente.
@Jonas: Ja, det er blødt eller stumt. Du behøver ikke høre hver lyd, bare de vigtigste ord. = Sì, è molle o muta. Non devi sentire ogni suono, solo le parole principali.
@Marco: Og hvis jeg stadig ikke forstår? = E se continuo a non capire?
@Jonas: Så siger du: «Undskyld, kan du sige det igen, lidt langsommere?» Ingen bliver sur over det. = Allora dici: «Scusa, puoi ripeterlo, un po' più piano?». Nessuno si arrabbia.

@Marco: Det skal jeg prøve. Og så er der stødet, som jeg slet ikke kan høre. = Lo proverò. E poi c'è lo stød, che proprio non riesco a sentire.
@Jonas: «Mand» og «man» er et godt eksempel. De lyder næsten ens, men stødet er forskellen. = «Mand» e «man» sono un buon esempio. Suonano quasi uguali, ma la differenza è lo stød.
@Marco: Så jeg skal lytte til hver lille pause? = Quindi devo ascoltare ogni piccola pausa?
@Jonas: Nej, det kommer efterhånden. Se danske serier med undertekster, og gentag højt, hvad de siger. = No, verrà col tempo. Guarda serie danesi con i sottotitoli e ripeti ad alta voce quello che dicono.
@Marco: Altså shadowing. Det gør jeg allerede, og det virker faktisk. = Cioè lo shadowing. Lo faccio già e funziona davvero.
@Jonas: Så er du på vej. Om et halvt år forstår du Line uden problemer. = Allora sei sulla buona strada. Tra sei mesi capirai Line senza problemi.
`,
q: `
Hvorfor har Marco svært ved at forstå sine kolleger?|De taler hurtigt og trækker ord sammen|De taler på italiensk;De mumler kun, når de er sure
Hvordan lød «jeg ved det ikke» for Marco?|Som ét langt ord|Som en ny sætning;Som et ord, han aldrig havde hørt
Hvad sker der med r'et ifølge Jonas?|Det forsvinder næsten efter en vokal|Det bliver rullet kraftigt;Det bliver til et s
Hvad skal Marco lytte efter?|De vigtigste ord|Hvert enkelt bogstav;Kun verberne
Hvad kan Marco sige, hvis han ikke forstår?|Undskyld, kan du sige det igen, lidt langsommere?|Hold op med at tale;Jeg forstår ikke dansk
Hvordan kan han øve sig ifølge Jonas?|Se danske serier med undertekster og gentage højt|Lære grammatikken udenad;Rejse til Jylland
`},
ex: `
m|Che cosa distingue «mand» da «man» nel parlato?|lo stød (stacco di glottide) su *mand*|la d finale pronunciata forte;la lunghezza della a|*mand* ha lo stød, *man* no.
m|«Hund» e «hun» si distinguono per…|lo stød in *hund*|la r;la h iniziale|Lo stød cambia il significato.
m|Nel parlato veloce *ikke* suona spesso come…|«eg» (anche scritto *ik'*)|«icche» con doppia c;«ikke» lettera per lettera|La finale si riduce molto.
m|La *d* di *glad* e *mad* è…|molle, simile al *th* inglese di *the*|dura come in «dado»;sempre una t|Il *blødt d* è un tratto del danese.
m|Nel suffisso *-er* di *spiser* la r si sente…|come una breve «a»|come una r rotolata;come una s|*-er* diventa una breve «a».
m|Come suona più o meno *og* nel parlato?|«ò» breve, con la g muta|«og» con g dura;«ó» chiusa|Anche l'infinito *at* si riduce a «ò».
m|Qual è la strategia migliore per capire il danese veloce?|ascoltare le parole accentate e abituarsi alle riduzioni|capire ogni singola lettera;parlare più forte|Le parole funzionali spariscono.
m|«I daglig tale» significa…|nel parlato quotidiano|nella lingua scritta;in televisione|*tale* = parlato.
c|Undskyld, kan du tale lidt ___?|langsommere|comparativo di *langsom*|Per chiedere di rallentare.
c|Jeg fik det ikke helt ___.|med|preposizione|*Jeg fik det ikke helt med* = non ho colto tutto.
c|Kan du ___ det? (dire lettera per lettera)|stave|verbo all'infinito|*stave* = fare lo spelling, dire come si scrive.
c|Kan du sige det ___? (di nuovo)|igen|avverbio|*igen* = di nuovo.
c|Jeg hører det, men jeg ___ det ikke.|forstår|verbo al presente|*forstå, forstår*.
o|Kan du tale lidt langsommere?|Puoi parlare un po' più piano?
o|Jeg hører det, men jeg forstår det ikke.|Lo sento ma non lo capisco.
o|Hun taler hurtigt og utydeligt.|Parla veloce e in modo indistinto.
t|Cosa hai detto?|Hvad sagde du;Hvad sagde du lige;Hvad var det, du sagde|
t|Puoi ripeterlo?|Kan du sige det igen;Kan du gentage det;Kan du sige det en gang til;Vil du sige det igen;Vil du gentage det|
t|Non ho colto tutto.|Jeg fik det ikke helt med;Jeg fik ikke det hele med;Jeg forstod ikke det hele|
t|Puoi parlare più piano?|Kan du tale lidt langsommere;Kan du tale langsommere;Kan du tale lidt mere langsomt|
`,
prod: {
task: "Racconta in 80–150 parole una situazione in cui non hai capito qualcuno che parlava veloce e come hai reagito. Includi almeno due frasi utili per chiedere di ripetere e una spiegazione di cosa hai imparato sulle riduzioni (ikke, jeg, det er) o sullo stød.",
points: ["Dove e quando è successo e chi parlava", "Almeno due frasi per chiedere di ripetere o rallentare", "Una riduzione o un suono che ti ha confuso (ikke, jeg, d molle, r, stød)", "Una strategia di ascolto che userai da ora"],
model: "I går havde jeg et møde på arbejdet, og alle talte meget hurtigt. Jeg hørte bare en masse lyde og forstod næsten ingenting. Først turde jeg ikke sige noget, men så spurgte jeg: «Undskyld, kan du tale lidt langsommere?» Min kollega smilede og gentog det. Hun sagde faktisk bare «Skal vi ikke tage fat på regnskabet?», men det lød som ét langt ord.\n\nBagefter fortalte hun, at danskerne sluger mange endelser og forkorter «ikke» og «jeg». Nu lytter jeg efter de vigtigste ord og ikke efter hvert bogstav. Det hjælper meget, og jeg ser danske serier med undertekster hver aften.",
model_it: "Ieri ho avuto una riunione al lavoro e tutti parlavano molto veloce. Sentivo solo un mucchio di suoni e non capivo quasi niente. All'inizio non osavo dire niente, ma poi ho chiesto: «Scusa, puoi parlare un po' più piano?». La mia collega ha sorriso e l'ha ripetuto. In realtà aveva detto solo «Non iniziamo con la contabilità?», ma sembrava un'unica lunga parola.\n\nDopo mi ha spiegato che i danesi ingoiano molte desinenze e abbreviano «ikke» e «jeg». Ora ascolto le parole principali e non ogni lettera. Aiuta molto e guardo serie danesi con i sottotitoli ogni sera."
},
talk: {
title: "Una riunione veloce",
role: "il tuo collega Mads, che parla molto veloce durante una riunione",
mission: "Non capisci tutto: ferma Mads con educazione, chiedi di ripetere o di rallentare e riassumi con parole tue ciò che hai capito.",
opener: "Hej, skal vi ikke lige tage fat på det projekt, vi talte om i går? Jeg har et par ideer til, hvordan vi kan gøre det hurtigere.",
opener_it: "Ciao, non cominciamo con quel progetto di cui parlavamo ieri? Ho un paio di idee per farlo più in fretta.",
useful: ["Undskyld, hvad sagde du? = Scusa, che cosa hai detto?", "Kan du sige det igen, lidt langsommere? = Puoi ripeterlo un po' più piano?", "Jeg fik det ikke helt med. = Non ho colto tutto.", "Så du mener, at … = Quindi intendi che …", "Kan du stave det? = Puoi dirmi come si scrive?", "Nå, jeg forstår. = Ah, ho capito.", "Jeg hører det, men jeg forstår det ikke. = Lo sento, ma non lo capisco.", "Kan vi tage det én gang til? = Possiamo riprenderlo ancora una volta?"]
}
});
