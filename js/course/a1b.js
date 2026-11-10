/* Livello A1 · unità 6–10 (formato: vedi a1a.js) */
COURSE.push({
id: "a1-06", level: "A1", n: 6,
title: "I byen",
sub: "La città, chiedere la strada, la forma determinativa",
goals: ["Chiedere e dare indicazioni", "Formare «il/la» con la desinenza in coda", "Distinguere der er (c'è) e det er (è)"],
words: `
n|en|gade|gaden|gader|gaderne|strada, via (in città)
n|en|vej|vejen|veje|vejene|strada, via
n|et|torv|torvet|torve|torvene|piazza (del mercato)
n|en|plads|pladsen|pladser|pladserne|piazza; posto
n|en|butik|butikken|butikker|butikkerne|negozio
n|et|supermarked|supermarkedet|supermarkeder|supermarkederne|supermercato
n|en|bager|bageren|bagere|bagerne|panetteria, fornaio
n|et|apotek|apoteket|apoteker|apotekerne|farmacia
n|en|bank|banken|banker|bankerne|banca
n|en|station|stationen|stationer|stationerne|stazione
n|en|hovedbanegård|hovedbanegården|hovedbanegårde|hovedbanegårdene|stazione centrale
n|et|bibliotek|biblioteket|biblioteker|bibliotekerne|biblioteca
n|et|museum|museet|museer|museerne|museo
n|en|kirke|kirken|kirker|kirkerne|chiesa
n|en|park|parken|parker|parkerne|parco
n|et|hospital|hospitalet|hospitaler|hospitalerne|ospedale
n|en|skole|skolen|skoler|skolerne|scuola
n|et|toilet|toilettet|toiletter|toiletterne|bagno, WC
n|en|bus|bussen|busser|busserne|autobus
n|en|metro|metroen|metroer|metroerne|metropolitana
n|en|cykel|cyklen|cykler|cyklerne|bicicletta
n|en|bil|bilen|biler|bilerne|automobile
n|et|kort|kortet|kort|kortene|mappa; carta, tessera
n|et|hjørne|hjørnet|hjørner|hjørnerne|angolo
n|et|lyskryds|lyskrydset|lyskryds|lyskrydsene|incrocio con semaforo
n|en|bro|broen|broer|broerne|ponte
n|en|havn|havnen|havne|havnene|porto
n|en|hjælp|hjælpen|-|-|aiuto
v|gå|går|gik|gået|andare (a piedi), camminare|er
v|køre|kører|kørte|kørt|andare (con un veicolo), guidare
v|cykle|cykler|cyklede|cyklet|andare in bicicletta
v|ligge|ligger|lå|ligget|trovarsi; essere disteso
v|finde|finder|fandt|fundet|trovare
v|lede|leder|ledte|ledt|cercare (lede efter)
v|dreje|drejer|drejede|drejet|girare, svoltare
v|spørge|spørger|spurgte|spurgt|chiedere, domandare
a|lang|langt|lange|længere|længst|lungo
a|kort|kort|korte|kortere|kortest|corto
a|ny|nyt|nye|nyere|nyest|nuovo
a|hurtig|hurtigt|hurtige|hurtigere|hurtigst|veloce
x|til venstre|a sinistra
x|til højre|a destra
x|ligeud|dritto
x|over for|di fronte a
x|ved siden af|accanto a
x|tæt på|vicino a
x|langt fra|lontano da
x|i nærheden|nelle vicinanze, qui vicino
x|der er|c'è, ci sono
x|det er|è, questo è
x|kun|solo, soltanto
x|Undskyld, hvor ligger …?|Scusi, dove si trova …?
x|Hvordan kommer jeg til …?|Come arrivo a …?
x|Det var så lidt.|Di niente. Prego.
`,
grammar: [
{ h: "La forma determinativa: l'articolo in coda", body: `
In danese «il/la» non va davanti, ma **si attacca alla fine** del sostantivo: *-en* per le parole comuni, *-et* per le neutre.
| indeterminativo | determinativo |
| *en bil* (una macchina) | *bilen* (la macchina) |
| *et hus* (una casa) | *huset* (la casa) |
| *en skole* | *skolen* (solo -n: la parola finisce già in -e) |
| *et æble* | *æblet* |
| *en kat* | *katten* (consonante doppia dopo vocale breve) |
| *en bus* | *bussen* |
Al plurale si aggiunge *-ne* (o *-ene* se il plurale non finisce in -e/-er):
| plurale | plurale determinativo |
| *biler* | *bilerne* |
| *huse* | *husene* |
| *æg* | *æggene* |
» Bilen er ny. = La macchina è nuova.
» Hvor er toilettet? = Dov'è il bagno?
» Bussene kører hvert tiende minut. = Gli autobus passano ogni dieci minuti.
! Irregolari da ricordare: *et museum → museet*, *en cykel → cyklen*, *et toilet → toilettet*.
` },
{ h: "Quando si usa la forma determinativa", body: `
Più o meno come l'articolo determinativo italiano: per cose già note o uniche.
» Jeg tager bussen. = Prendo l'autobus.
» Parken er stor. = Il parco è grande.
Con i nomi di città e paesi non si usa: *København er smuk*.
` },
{ h: "Der er e det er", body: `
- *Der er* = c'è, ci sono (esistenza, qualcosa si trova in un posto).
- *Det er* = è, sono (identificare o descrivere).
» Der er en bager på hjørnet. = C'è una panetteria all'angolo.
» Det er en god bager. = È una buona panetteria.
» Er der et apotek i nærheden? = C'è una farmacia qui vicino?
» Der er mange cykler i København. = Ci sono molte biciclette a Copenaghen.
` },
{ h: "Dare indicazioni", body: `
| | |
| *Gå ligeud.* | Vai dritto. |
| *Drej til venstre / højre.* | Gira a sinistra / destra. |
| *ved lyskrydset* | al semaforo |
| *over broen* | oltre il ponte |
| *over for parken* | di fronte al parco |
| *ved siden af stationen* | accanto alla stazione |
*Gå* si usa per andare a piedi, *køre* con un mezzo, *cykle* in bici. Per città e luoghi si usa il verbo *ligge*: *Hvor ligger museet?* (Dove si trova il museo?)
` },
],
text: {
title: "Hvor ligger stationen?", kind: "Dialogo",
intro: "Marco cerca la stazione centrale e chiede a una passante.",
lines: `
@Marco: Undskyld, hvor ligger stationen? = Scusi, dove si trova la stazione?
@Kvinden: Hovedbanegården? Det er ikke langt. = La stazione centrale? Non è lontano.
@Kvinden: Gå ligeud, og drej til venstre ved lyskrydset. = Vada dritto e giri a sinistra al semaforo.
@Kvinden: Så går du over broen. Stationen ligger over for en stor park. = Poi attraversa il ponte. La stazione è di fronte a un grande parco.
@Marco: Tak. Er der også et apotek i nærheden? = Grazie. C'è anche una farmacia qui vicino?
@Kvinden: Ja, der er et apotek ved siden af stationen. = Sì, c'è una farmacia accanto alla stazione.
@Marco: Og kan jeg tage bussen? = E posso prendere l'autobus?
@Kvinden: Ja, men det er hurtigere at gå. Det tager kun fem minutter. = Sì, ma a piedi si fa prima. Ci vogliono solo cinque minuti.
@Marco: Mange tak for hjælpen! = Grazie mille per l'aiuto!
@Kvinden: Det var så lidt. = Di niente.
`,
q: `
Che cosa cerca Marco?|La stazione|Il porto;Una banca
Dove deve girare?|A sinistra al semaforo|A destra al semaforo;A sinistra dopo il ponte
Dov'è la farmacia?|Accanto alla stazione|Di fronte al parco;Vicino al ponte
Perché conviene andare a piedi?|Si fa prima: ci vogliono cinque minuti|L'autobus non passa;Costa meno
`},
ex: `
c|en bil → ___|bilen
c|et hus → ___|huset
c|en skole → ___|skolen
c|en kat → ___|katten
c|et æble → ___|æblet
c|biler → ___|bilerne
m|Hvor er ___? (il bagno)|toilettet|toilet;et toilet
c|___ er en bager på hjørnet.|Der|c'è
c|Det er en god bager. ___ er ikke dyr.|Den|la panetteria (en bager)
m|«A destra» si dice…|til højre|til venstre;ligeud
m|Stationen ligger ___ parken. (di fronte al)|over for|ved siden af;langt fra
c|Undskyld, hvor ___ museet?|ligger|trovarsi
m|Jeg ___ til arbejde i bil.|kører|går;cykler
o|Drej til venstre ved lyskrydset.|Giri a sinistra al semaforo.
o|Er der et apotek i nærheden?|C'è una farmacia qui vicino?
o|Stationen ligger ved siden af parken.|La stazione è accanto al parco.
t|Dov'è la stazione?|Hvor er stationen?;Hvor ligger stationen?
t|Vada dritto.|Gå ligeud;Du skal gå ligeud
t|C'è un supermercato qui vicino?|Er der et supermarked i nærheden?;Er der et supermarked her i nærheden?
t|Il parco è grande.|Parken er stor
`
});

COURSE.push({
id: "a1-07", level: "A1", n: 7,
title: "Min dag",
sub: "La giornata, il verbo al secondo posto, gli avverbi di frequenza",
goals: ["Raccontare la tua giornata tipo", "Applicare la regola del verbo al secondo posto", "Dire quanto spesso fai qualcosa"],
words: `
v|vågne|vågner|vågnede|vågnet|svegliarsi|er
v|stå|står|stod|stået|stare in piedi; (stå op) alzarsi
v|vaske|vasker|vaskede|vasket|lavare
v|lave|laver|lavede|lavet|fare, preparare
v|gøre|gør|gjorde|gjort|fare
v|begynde|begynder|begyndte|begyndt|cominciare
v|slutte|slutter|sluttede|sluttet|finire
v|sove|sover|sov|sovet|dormire
v|se|ser|så|set|vedere, guardare
v|høre|hører|hørte|hørt|sentire
v|lytte|lytter|lyttede|lyttet|ascoltare (lytte til)
v|handle|handler|handlede|handlet|fare la spesa, fare acquisti
v|hente|henter|hentede|hentet|andare a prendere
v|vente|venter|ventede|ventet|aspettare (vente på)
v|regne|regner|regnede|regnet|piovere; calcolare
x|stå op|alzarsi
x|tage et bad|fare la doccia
x|børste tænder|lavarsi i denti
x|tage tøj på|vestirsi
x|komme hjem|tornare a casa
x|gå i seng|andare a letto
x|slappe af|rilassarsi
x|holde fri|finire di lavorare; essere in ferie
x|gå på arbejde|andare al lavoro
n|en|morgen|morgenen|morgener|morgenerne|mattina
n|en|formiddag|formiddagen|formiddage|formiddagene|mattinata
n|en|aften|aftenen|aftener|aftenerne|sera
n|en|nat|natten|nætter|nætterne|notte
n|et|arbejde|arbejdet|-|-|lavoro
n|et|bad|badet|bade|badene|bagno, doccia
n|en|seng|sengen|senge|sengene|letto
n|et|fjernsyn|fjernsynet|fjernsyn|fjernsynene|televisione
n|en|avis|avisen|aviser|aviserne|giornale
n|en|telefon|telefonen|telefoner|telefonerne|telefono
n|en|computer|computeren|computere|computerne|computer
n|en|bog|bogen|bøger|bøgerne|libro
a|travl|travlt|travle|travlere|travlest|indaffarato, impegnato
a|almindelig|almindeligt|almindelige|-|-|normale, comune
x|altid|sempre
x|aldrig|mai
x|ofte|spesso
x|nogle gange|a volte
x|sjældent|raramente
x|hver dag|ogni giorno
x|om morgenen|di mattina
x|om aftenen|di sera
x|tidligt|presto
x|sent|tardi
x|først|prima, per prima cosa
x|så|poi, allora
x|bagefter|dopo, in seguito
x|til sidst|alla fine
x|normalt|di solito
x|efter|dopo (efter arbejde = dopo il lavoro)
x|ligesom|come, così come
x|når|quando (ogni volta che)
`,
grammar: [
{ h: "La regola d'oro: il verbo al secondo posto", body: `
Nella frase principale danese il verbo coniugato sta **sempre in seconda posizione**. Se la frase comincia con qualcosa che non è il soggetto (un'espressione di tempo, di luogo, un complemento), il soggetto si sposta **dopo** il verbo.
| 1° posto | verbo | soggetto | resto |
| *Jeg* | *spiser* | — | *morgenmad klokken syv.* |
| *Klokken syv* | *spiser* | *jeg* | *morgenmad.* |
| *I dag* | *arbejder* | *jeg* | *ikke.* |
| *Om aftenen* | *ser* | *vi* | *fjernsyn.* |
» Om morgenen drikker jeg kaffe. = Di mattina bevo il caffè.
» Bagefter går jeg på arbejde. = Dopo vado al lavoro.
» Klokken otte begynder hun. = Alle otto lei comincia.
! L'errore più comune degli italiani è *I dag jeg arbejder*. Dopo *i dag* deve venire subito il verbo: *I dag arbejder jeg*.
` },
{ h: "Gli avverbi di frequenza", body: `
*altid* (sempre), *ofte / tit* (spesso), *nogle gange* (a volte), *sjældent* (raramente), *aldrig* (mai).
*Altid*, *ofte*, *sjældent* e *aldrig* vanno subito dopo il verbo, nello stesso posto di *ikke*. *Nogle gange* sta di solito all'inizio o alla fine della frase.
» Jeg drikker altid kaffe om morgenen. = Bevo sempre il caffè la mattina.
» Hun ser aldrig fjernsyn. = Non guarda mai la televisione.
» Om aftenen læser han ofte. = La sera legge spesso.
» Nogle gange cykler jeg på arbejde. = A volte vado al lavoro in bici.
` },
{ h: "Verbi con particella", body: `
Molti verbi danesi hanno una piccola particella che cambia il significato, come in inglese: *stå* (stare in piedi) → *stå op* (alzarsi). La particella è accentata e va dopo gli avverbi.
» Jeg står op klokken syv. = Mi alzo alle sette.
» Jeg står altid tidligt op. = Mi alzo sempre presto.
» Om aftenen slapper jeg af. = La sera mi rilasso.
» Hvornår kommer du hjem? = Quando torni a casa?
` },
{ h: "Mettere in fila le azioni", body: `
*først* (prima), *så* (poi), *bagefter* (dopo), *til sidst* (alla fine). Ricorda: dopo di loro, verbo e poi soggetto.
» Først tager jeg et bad. Så spiser jeg morgenmad. Til sidst tager jeg bussen. = Prima faccio la doccia. Poi faccio colazione. Alla fine prendo l'autobus.
` },
],
text: {
title: "En almindelig dag", kind: "Testo",
intro: "Una giornata normale di Marco a Copenaghen.",
lines: `
Marco vågner klokken halv syv. = Marco si sveglia alle sei e mezza.
Han står op, tager et bad og børster tænder. = Si alza, fa la doccia e si lava i denti.
Til morgenmad spiser han rugbrød med ost og drikker en kop kaffe. = A colazione mangia pane di segale con formaggio e beve una tazza di caffè.
Klokken halv otte cykler han på arbejde. = Alle sette e mezza va al lavoro in bicicletta.
Ligesom mange danskere cykler han hver dag, også når det regner. = Come molti danesi va in bici ogni giorno, anche quando piove.
Han begynder klokken otte og holder fri klokken fire. = Comincia alle otto e stacca alle quattro.

Efter arbejde handler han i supermarkedet. = Dopo il lavoro fa la spesa al supermercato.
Så kommer han hjem og laver aftensmad. = Poi torna a casa e prepara la cena.
Danskere spiser tidligt, cirka klokken seks. = I danesi cenano presto, verso le sei.
Om aftenen slapper Marco af. = La sera Marco si rilassa.
Nogle gange ser han fjernsyn, og nogle gange læser han en bog på dansk. = A volte guarda la TV, a volte legge un libro in danese.
Han går i seng klokken elleve. = Va a letto alle undici.
`,
q: `
A che ora si sveglia Marco?|Alle 6:30|Alle 7:30;Alle 5:30
Come va al lavoro?|In bicicletta|In autobus;A piedi
A che ora cenano di solito i danesi?|Verso le sei|Verso le otto;Verso le nove
Che cosa fa Marco la sera?|Si rilassa: guarda la TV o legge|Va in palestra;Lavora al computer
`},
ex: `
m|I dag ___ ikke.|arbejder jeg|jeg arbejder;arbejde jeg|Verbo al secondo posto: dopo *i dag* viene subito il verbo.
m|Om morgenen ___ kaffe.|drikker hun|hun drikker;drikke hun
m|Klokken syv ___ op.|står vi|vi står;står op vi
o|Klokken syv står jeg op.|Alle sette mi alzo.|Jeg står op klokken syv
o|Om aftenen ser vi fjernsyn.|La sera guardiamo la televisione.|Vi ser fjernsyn om aftenen
o|Bagefter cykler han på arbejde.|Dopo va al lavoro in bici.|Han cykler på arbejde bagefter
o|Hun drikker altid te om morgenen.|Beve sempre il tè la mattina.|Om morgenen drikker hun altid te
c|Jeg ___ op klokken syv.|står|alzarsi
c|Vi ___ i seng klokken elleve.|går
c|Han ___ aftensmad.|laver|preparare
m|«Mai» si dice…|aldrig|altid;ofte
m|«A volte» si dice…|nogle gange|hver dag;sjældent
c|Jeg ser ___ fjernsyn.|aldrig|mai
t|Di sera leggo.|Om aftenen læser jeg;Jeg læser om aftenen
t|Mi sveglio alle sette.|Jeg vågner klokken syv;Klokken syv vågner jeg
t|Oggi non lavoro.|I dag arbejder jeg ikke;Jeg arbejder ikke i dag
t|Vado a letto tardi.|Jeg går sent i seng;Jeg går i seng sent
`
});

COURSE.push({
id: "a1-08", level: "A1", n: 8,
title: "Hjemme",
sub: "La casa, le preposizioni di luogo, stå/ligge/sidde/hænge",
goals: ["Descrivere la tua casa", "Dire dove si trovano le cose", "Distinguere stato e moto: hjemme / hjem"],
words: `
n|en|lejlighed|lejligheden|lejligheder|lejlighederne|appartamento
n|et|hus|huset|huse|husene|casa
n|et|værelse|værelset|værelser|værelserne|stanza, camera
n|en|stue|stuen|stuer|stuerne|soggiorno
n|et|køkken|køkkenet|køkkener|køkkenerne|cucina
n|et|soveværelse|soveværelset|soveværelser|soveværelserne|camera da letto
n|et|badeværelse|badeværelset|badeværelser|badeværelserne|bagno
n|en|altan|altanen|altaner|altanerne|balcone
n|en|have|haven|haver|haverne|giardino
n|en|dør|døren|døre|dørene|porta
n|et|vindue|vinduet|vinduer|vinduerne|finestra
n|en|væg|væggen|vægge|væggene|parete
n|et|gulv|gulvet|gulve|gulvene|pavimento
n|en|trappe|trappen|trapper|trapperne|scala
n|en|sal|salen|sale|salene|piano (di un edificio)
n|et|bord|bordet|borde|bordene|tavolo
n|en|stol|stolen|stole|stolene|sedia
n|en|sofa|sofaen|sofaer|sofaerne|divano
n|en|lampe|lampen|lamper|lamperne|lampada
n|et|skab|skabet|skabe|skabene|armadio, mobile
n|en|reol|reolen|reoler|reolerne|scaffale, libreria
n|et|billede|billedet|billeder|billederne|quadro, immagine
n|et|tæppe|tæppet|tæpper|tæpperne|tappeto; coperta
n|et|køleskab|køleskabet|køleskabe|køleskabene|frigorifero
n|en|nøgle|nøglen|nøgler|nøglerne|chiave
n|en|nabo|naboen|naboer|naboerne|vicino di casa
n|en|husleje|huslejen|huslejer|huslejerne|affitto
n|et|vejr|vejret|-|-|tempo (atmosferico)
v|stå|står|stod|stået|stare in piedi; (stå op) alzarsi
v|ligge|ligger|lå|ligget|trovarsi; essere disteso
v|sidde|sidder|sad|siddet|essere seduto
v|hænge|hænger|hang|hængt|essere appeso
v|stille|stiller|stillede|stillet|mettere (in piedi)
v|lægge|lægger|lagde|lagt|mettere (disteso), posare
v|sætte|sætter|satte|sat|mettere; (sætte sig) sedersi
v|åbne|åbner|åbnede|åbnet|aprire
v|lukke|lukker|lukkede|lukket|chiudere
v|leje|lejer|lejede|lejet|affittare, prendere in affitto
x|gøre rent|pulire
x|under|sotto
x|over|sopra (senza contatto)
x|foran|davanti a
x|bag|dietro
x|mellem|tra, fra
x|ved|presso, vicino a
x|hjemme|a casa (stato)
x|hjem|a casa (moto)
x|inde|dentro (stato)
x|ind|dentro (moto)
x|ude|fuori (stato)
x|ud|fuori (moto)
x|centrum|centro (della città)
x|alle|tutti
x|om måneden|al mese
x|være glad for|essere contento di
a|lys|lyst|lyse|lysere|lysest|luminoso, chiaro
a|mørk|mørkt|mørke|mørkere|mørkest|buio, scuro
a|hyggelig|hyggeligt|hyggelige|hyggeligere|hyggeligst|accogliente, piacevole
a|pæn|pænt|pæne|pænere|pænest|carino, ordinato
a|ren|rent|rene|renere|renest|pulito
a|dyr|dyrt|dyre|dyrere|dyrest|caro, costoso
a|billig|billigt|billige|billigere|billigst|economico
a|sød|sødt|søde|sødere|sødest|dolce; gentile, carino
`,
grammar: [
{ h: "Le preposizioni di luogo", body: `
| danese | italiano | esempio |
| *i* | in, dentro | *i køkkenet* |
| *på* | su, sopra (con contatto) | *på bordet* |
| *under* | sotto | *under sengen* |
| *over* | sopra (senza contatto) | *over sofaen* |
| *foran* | davanti a | *foran huset* |
| *bag* | dietro | *bag døren* |
| *mellem* | tra | *mellem vinduerne* |
| *ved siden af* | accanto a | *ved siden af stolen* |
» Nøglerne ligger på bordet. = Le chiavi sono sul tavolo.
» Katten sover under sengen. = Il gatto dorme sotto il letto.
» Lampen hænger over bordet. = La lampada è appesa sopra il tavolo.
` },
{ h: "«i» o «på»?", body: `
*I* si usa per spazi chiusi e per città e paesi; *på* per superfici e per molti luoghi pubblici, da imparare a memoria.
| *i* | *på* |
| *i køkkenet, i stuen* | *på altanen, på gulvet* |
| *i byen, i Danmark* | *på arbejde, på biblioteket* |
| *i haven* | *på hospitalet, på stationen* |
| *i supermarkedet* | *på tredje sal* |
! Non c'è una regola perfetta: impara ogni luogo con la sua preposizione, come fai con en/et.
` },
{ h: "Stare: står, ligger, sidder, hænger", body: `
Dove l'italiano dice «è» o «c'è», il danese descrive la **posizione** delle cose:
- *står* per ciò che sta in verticale: bottiglie, mobili, lampade, persone in piedi;
- *ligger* per ciò che è disteso: libri, chiavi, tappeti, e anche città ed edifici;
- *sidder* per le persone sedute (e cose «infilate»: *nøglen sidder i døren*);
- *hænger* per ciò che è appeso.
» Flasken står på bordet. = La bottiglia è sul tavolo.
» Bogen ligger på bordet. = Il libro è sul tavolo.
» Billedet hænger på væggen. = Il quadro è appeso alla parete.
» København ligger på Sjælland. = Copenaghen si trova in Selandia.
Per «mettere» vale la stessa logica: *stille* (in piedi), *lægge* (disteso), *sætte* (in generale). *Sætte sig* = sedersi.
» Læg nøglerne på bordet. = Metti le chiavi sul tavolo.
` },
{ h: "Stato e moto: hjemme / hjem", body: `
Alcuni avverbi hanno due forme: una per dove **sei** (stato), una per dove **vai** (moto).
| stato | moto |
| *hjemme* (a casa) | *hjem* (verso casa) |
| *inde* (dentro) | *ind* |
| *ude* (fuori) | *ud* |
| *oppe* (su) | *op* |
| *nede* (giù) | *ned* |
» Jeg er hjemme i aften. = Stasera sono a casa.
» Hvornår kommer du hjem? = Quando torni a casa?
» Børnene leger ude. = I bambini giocano fuori.
» Kom ind! = Entra!
` },
],
text: {
title: "Vores nye lejlighed", kind: "Testo",
intro: "Anna descrive l'appartamento dove si è trasferita con Jonas.",
lines: `
Jonas og jeg har en ny lejlighed i Aarhus. = Jonas e io abbiamo un nuovo appartamento ad Aarhus.
Den ligger på tredje sal i et gammelt hus tæt på centrum. = Si trova al terzo piano di una vecchia casa vicino al centro.
Lejligheden har tre værelser, et køkken og et lille badeværelse. = L'appartamento ha tre stanze, una cucina e un piccolo bagno.
Stuen er stor og lys med to store vinduer. = Il soggiorno è grande e luminoso, con due grandi finestre.
I stuen står en blå sofa, og over sofaen hænger et billede af Bologna. = In soggiorno c'è un divano blu, e sopra il divano è appeso un quadro di Bologna.
Mellem vinduerne står en reol med alle vores bøger. = Tra le finestre c'è una libreria con tutti i nostri libri.

Køkkenet er lille, men hyggeligt. = La cucina è piccola ma accogliente.
Når vejret er godt, spiser vi på altanen. = Quando il tempo è bello, mangiamo sul balcone.
Huslejen er ikke billig: 9.500 kroner om måneden. = L'affitto non è economico: 9.500 corone al mese.
Men vi er glade for lejligheden, og naboerne er søde. = Ma siamo contenti dell'appartamento e i vicini sono gentili.
`,
q: `
A che piano è l'appartamento?|Al terzo|Al primo;Al quinto
Che cosa c'è appeso sopra il divano?|Un quadro di Bologna|Una lampada;Uno specchio
Dove mangiano quando il tempo è bello?|Sul balcone|In giardino;In cucina
Quanto costa l'affitto?|9.500 corone al mese|5.900 corone al mese;9.500 corone a settimana
`},
ex: `
m|Bogen ___ på bordet.|ligger|står;hænger|I libri sono «distesi»: *ligger*.
m|Flasken ___ på bordet.|står|ligger;sidder
m|Billedet ___ på væggen.|hænger|står;ligger
m|Hun ___ på en stol og læser.|sidder|hænger;står
c|Katten sover ___ sengen.|under|sotto
c|Lampen hænger ___ bordet.|over|sopra
c|Reolen står ___ vinduerne.|mellem|tra
m|Vi spiser ___ køkkenet.|i|på;under
m|Han arbejder ___ biblioteket.|på|i;ved
m|Jeg er ___ i aften.|hjemme|hjem;inde hjem
m|Hvornår kommer du ___?|hjem|hjemme;ude
c|Kan du ___ døren?|lukke|chiudere
o|Nøglerne ligger på bordet i køkkenet.|Le chiavi sono sul tavolo in cucina.
o|Over sofaen hænger et billede.|Sopra il divano è appeso un quadro.|Et billede hænger over sofaen
o|Lejligheden ligger på tredje sal.|L'appartamento è al terzo piano.
t|Il gatto è sotto il tavolo.|Katten er under bordet;Katten ligger under bordet;Katten sidder under bordet
t|Stasera sono a casa.|Jeg er hjemme i aften;I aften er jeg hjemme
t|Abitiamo al secondo piano.|Vi bor på anden sal;Vi bor på 2. sal
`
});

COURSE.push({
id: "a1-09", level: "A1", n: 9,
title: "Tøj og farver",
sub: "Vestiti e colori, l'accordo dell'aggettivo, fare acquisti",
goals: ["Comprare vestiti e chiedere taglie e prezzi", "Accordare l'aggettivo con en, et e plurale", "Usare den, det, de per le cose"],
words: `
n|et|tøj|tøjet|-|-|vestiti, abbigliamento
n|en|bluse|blusen|bluser|bluserne|camicetta, maglia
n|en|skjorte|skjorten|skjorter|skjorterne|camicia
n|en|trøje|trøjen|trøjer|trøjerne|maglione, felpa
x|bukser|pantaloni
x|et par bukser|un paio di pantaloni
n|et|par|parret|par|parrene|paio; coppia
n|en|nederdel|nederdelen|nederdele|nederdelene|gonna
n|en|kjole|kjolen|kjoler|kjolerne|vestito (da donna)
n|en|jakke|jakken|jakker|jakkerne|giacca
n|en|frakke|frakken|frakker|frakkerne|cappotto
n|en|sko|skoen|sko|skoene|scarpa
n|en|støvle|støvlen|støvler|støvlerne|stivale
n|en|strømpe|strømpen|strømper|strømperne|calza
n|en|hat|hatten|hatte|hattene|cappello
n|et|halstørklæde|halstørklædet|halstørklæder|halstørklæderne|sciarpa
n|en|taske|tasken|tasker|taskerne|borsa
n|en|størrelse|størrelsen|størrelser|størrelserne|taglia, misura
n|en|farve|farven|farver|farverne|colore
n|en|pris|prisen|priser|priserne|prezzo
n|et|prøverum|prøverummet|prøverum|prøverummene|camerino
n|en|ekspedient|ekspedienten|ekspedienter|ekspedienterne|commesso
n|et|udsalg|udsalget|udsalg|udsalgene|saldi
n|en|rabat|rabatten|rabatter|rabatterne|sconto
a|rød|rødt|røde|-|-|rosso
a|blå|blåt|blå|-|-|blu, azzurro
a|grøn|grønt|grønne|-|-|verde
a|gul|gult|gule|-|-|giallo
a|hvid|hvidt|hvide|-|-|bianco
a|sort|sort|sorte|-|-|nero
a|grå|gråt|grå|-|-|grigio
a|brun|brunt|brune|-|-|marrone
a|lyserød|lyserødt|lyserøde|-|-|rosa
x|orange|arancione (invariabile)
x|lilla|viola (invariabile)
a|smuk|smukt|smukke|smukkere|smukkest|bello
a|grim|grimt|grimme|grimmere|grimmest|brutto
a|flot|flot|flotte|flottere|flottest|bello, elegante
a|moderne|moderne|moderne|mere moderne|mest moderne|moderno
a|varm|varmt|varme|varmere|varmest|caldo
a|kold|koldt|kolde|koldere|koldest|freddo
a|stram|stramt|stramme|strammere|strammest|stretto, attillato
a|perfekt|perfekt|perfekte|-|-|perfetto
v|prøve|prøver|prøvede|prøvet|provare
v|passe|passer|passede|passet|andare bene (di misura)
v|koste|koster|kostede|kostet|costare
v|købe|køber|købte|købt|comprare
v|sælge|sælger|solgte|solgt|vendere
v|kigge|kigger|kiggede|kigget|guardare, dare un'occhiata
v|hjælpe|hjælper|hjalp|hjulpet|aiutare
v|få|får|fik|fået|ricevere, ottenere, avere
x|have … på|indossare, portare
x|Hvad koster den?|Quanto costa?
x|Kan jeg prøve den?|Posso provarlo?
x|for|troppo (davanti a un aggettivo)
x|Jeg kigger bare.|Sto solo guardando.
x|værsgo|ecco a lei, prego (porgendo qualcosa)
x|derovre|laggiù
x|den her / det her|questo, questa
x|procent|per cento
`,
grammar: [
{ h: "L'aggettivo si accorda: base, -t, -e", body: `
Dopo *en*, *et* o al plurale, l'aggettivo ha tre forme:
| | comune (*en*) | neutro (*et*) | plurale |
| grande | *en stor jakke* | *et stort tæppe* | *store sko* |
| rosso | *en rød kjole* | *et rødt halstørklæde* | *røde sko* |
| caldo | *en varm trøje* | *et varmt tæppe* | *varme strømper* |
Le stesse forme valgono quando l'aggettivo segue il verbo *være*:
» Jakken er stor. = La giacca è grande.
» Tæppet er stort. = Il tappeto è grande.
» Skoene er store. = Le scarpe sono grandi.
» Det er et hvidt hus. = È una casa bianca.
` },
{ h: "Le eccezioni principali", body: `
- Aggettivi che finiscono già in *-t*: niente -t in più: *sort*, *flot*, *perfekt*.
- Aggettivi in *-sk*: neutro senza -t: *et dansk ord*.
- Aggettivi in *-e* e alcuni colori non cambiano mai: *moderne*, *orange*, *lilla*.
- *blå* e *grå*: *blåt*, *gråt* al neutro, ma *blå*, *grå* al plurale.
- *lille* → plurale **små**: *en lille kat, små katte*.
- Aggettivi in *-el, -en, -er* perdono la *e* al plurale: *gammel → gamle*, *sulten → sultne*, *lækker → lækre*.
- Consonante doppia al plurale dopo vocale breve: *grøn → grønne*, *smuk → smukke*.
` },
{ h: "Den, det, de per le cose", body: `
Per dire «lo, la, li» riferito a oggetti si usa *den* (parole *en*), *det* (parole *et*), *de/dem* (plurale).
» Jakken er flot. Hvad koster den? = La giacca è bella. Quanto costa?
» Tæppet er fint. Jeg tager det. = Il tappeto è bello. Lo prendo.
» Skoene er for små. Har I dem i 42? = Le scarpe sono troppo piccole. Le avete nel 42?
` },
{ h: "«For» = troppo", body: `
Davanti a un aggettivo, *for* significa «troppo».
» Kjolen er for stram. = Il vestito è troppo stretto.
» Den er lidt for dyr. = È un po' troppo cara.
` },
],
text: {
title: "I tøjbutikken", kind: "Dialogo",
intro: "Anna compra un vestito in un negozio durante i saldi.",
lines: `
@Ekspedienten: Hej, kan jeg hjælpe? = Ciao, posso aiutarti?
@Anna: Nej tak, jeg kigger bare. = No grazie, sto solo guardando.
@Anna: Undskyld, har I den her kjole i en anden farve? = Scusi, avete questo vestito in un altro colore?
@Ekspedienten: Ja, vi har den i blå, sort og grøn. = Sì, lo abbiamo in blu, nero e verde.
@Anna: Den i grøn er flot. Kan jeg prøve den i størrelse 38? = Quello verde è bello. Posso provarlo nella 38?
@Ekspedienten: Selvfølgelig. Prøverummet er derovre. = Certo. Il camerino è laggiù.

@Anna: Den er lidt for stram. Har I den i 40? = È un po' stretto. Ce l'avete nella 40?
@Ekspedienten: Ja, værsgo. = Sì, ecco.
@Anna: Perfekt, den passer. Hvad koster den? = Perfetto, mi sta bene. Quanto costa?
@Ekspedienten: Den koster 699 kroner, men der er udsalg i dag, så du får 20 procent rabat. = Costa 699 corone, ma oggi ci sono i saldi, quindi hai il 20 per cento di sconto.
@Anna: Super, så tager jeg den. Kan jeg betale med kort? = Ottimo, allora lo prendo. Posso pagare con la carta?
@Ekspedienten: Ja, selvfølgelig. = Sì, certo.
`,
q: `
In quali colori c'è il vestito?|Blu, nero e verde|Rosso, nero e verde;Blu, bianco e grigio
Perché Anna chiede un'altra taglia?|La 38 è un po' stretta|La 38 è troppo grande;Non le piace il colore
Quanto sconto c'è oggi?|Il 20 per cento|Il 10 per cento;Il 50 per cento
Come paga Anna?|Con la carta|In contanti;Con il telefono
`},
ex: `
c|en ___ jakke|rød|rosso
c|et ___ halstørklæde|rødt|rosso
c|to ___ skjorter|røde|rosso
c|et ___ hus|stort|grande
c|Tæppet er ___.|hvidt|bianco
c|Skoene er ___.|sorte|nero
m|et ___ barn (piccolo)|lille|lilt;små
m|mange ___ børn (piccolo)|små|lille;lilles
m|Frakken er flot. Hvad koster ___?|den|det;de
m|Tæppet er billigt. Jeg tager ___.|det|den;dem
c|Bukserne er ___ lange.|for|troppo
m|et ___ tæppe (blu)|blåt|blå;blåe
o|Har I den i en anden størrelse?|Ce l'avete in un'altra taglia?
o|Skoene er for små.|Le scarpe sono troppo piccole.
o|Kan jeg betale med kort?|Posso pagare con la carta?
t|Quanto costa?|Hvad koster den?;Hvad koster det?;Hvad koster de?
t|Sto solo guardando.|Jeg kigger bare
t|Ha una giacca nera.|Hun har en sort jakke;Han har en sort jakke
t|È una casa bianca.|Det er et hvidt hus
`
});

COURSE.push({
id: "a1-10", level: "A1", n: 10,
title: "Fritid",
sub: "Il tempo libero, i verbi modali, «piacere», la posizione di ikke",
goals: ["Parlare di hobby e fare proposte", "Usare kan, vil, skal, må", "Dire cosa ti piace e non ti piace"],
words: `
n|en|fritid|fritiden|-|-|tempo libero
n|en|hobby|hobbyen|hobbyer|hobbyerne|hobby
n|en|sport|sporten|-|-|sport
n|en|fodbold|fodbolden|fodbolde|fodboldene|calcio; pallone
n|et|motionscenter|motionscentret|motionscentre|motionscentrene|palestra
n|en|svømmehal|svømmehallen|svømmehaller|svømmehallerne|piscina (coperta)
n|en|film|filmen|film|filmene|film
n|en|biograf|biografen|biografer|biograferne|cinema
n|en|koncert|koncerten|koncerter|koncerterne|concerto
n|en|musik|musikken|-|-|musica
n|en|sang|sangen|sange|sangene|canzone
n|et|spil|spillet|spil|spillene|gioco, partita
n|en|tur|turen|ture|turene|giro, gita, passeggiata
n|en|skov|skoven|skove|skovene|bosco
n|en|strand|stranden|strande|strandene|spiaggia
n|en|sø|søen|søer|søerne|lago
n|et|hold|holdet|hold|holdene|squadra; corso
n|en|klub|klubben|klubber|klubberne|club, associazione
n|en|gang|gangen|gange|gangene|volta; corridoio
v|spille|spiller|spillede|spillet|giocare; suonare
v|svømme|svømmer|svømmede|svømmet|nuotare
v|løbe|løber|løb|løbet|correre
v|danse|danser|dansede|danset|ballare
v|synge|synger|sang|sunget|cantare
v|male|maler|malede|malet|dipingere
v|træne|træner|trænede|trænet|allenarsi
v|øve|øver|øvede|øvet|esercitarsi (øve sig)
v|mødes|mødes|mødtes|mødtes|incontrarsi
v|skulle|skal|skulle|skullet|dovere; avere in programma
v|måtte|må|måtte|måttet|potere (permesso); dovere
x|kan lide|piacere (jeg kan lide = mi piace)
x|har lyst til|avere voglia di
x|gå en tur|fare una passeggiata
x|Hvad laver du i din fritid?|Che cosa fai nel tempo libero?
x|Skal vi …?|Che ne dici di …?, facciamo …?
x|Vil du med?|Vuoi venire?
x|sammen|insieme
x|alene|da solo
x|helst|preferibilmente (jeg vil helst = preferisco)
x|heller ikke|neanche, nemmeno
x|slet ikke|per niente
x|desværre|purtroppo
x|to gange om ugen|due volte a settimana
x|Fedt!|Forte! Che bello!
a|sjov|sjovt|sjove|sjovere|sjovest|divertente
a|kedelig|kedeligt|kedelige|kedeligere|kedeligst|noioso
a|spændende|spændende|spændende|mere spændende|mest spændende|emozionante, avvincente
`,
grammar: [
{ h: "I verbi modali", body: `
| verbo | significato | esempio |
| *kan* | potere, sapere fare | *Jeg kan svømme.* |
| *vil* | volere | *Vil du have kaffe?* |
| *skal* | dovere; avere in programma | *Vi skal i biografen.* |
| *må* | avere il permesso; (negativo) non si deve | *Må jeg sidde her?* |
Dopo un modale l'infinito va **senza** *at*.
» Jeg kan spille guitar. = So suonare la chitarra.
» Vil du med i biografen? = Vuoi venire al cinema?
» Vi skal spille fodbold i morgen. = Domani giochiamo a calcio (è in programma).
» Man må ikke ryge her. = Qui non si può fumare.
! *Må ikke* significa «non si deve, è vietato», non «non devo per forza». Per «non c'è bisogno» si dice *behøver ikke*.
Con i modali spesso si omette il verbo di movimento: *Jeg skal hjem* = devo andare a casa. *Vil du med?* = vuoi venire (con noi)?
` },
{ h: "«Piacere»: kan lide", body: `
In danese chi prova piacere è il soggetto, come nell'inglese «I like».
» Jeg kan lide musik. = Mi piace la musica.
» Jeg kan godt lide at danse. = Mi piace ballare.
» Hun kan ikke lide fisk. = Non le piace il pesce.
» Kan du lide at læse? = Ti piace leggere?
*Godt* nella frase affermativa è molto comune e rende l'espressione più naturale.
` },
{ h: "Avere voglia e preferire", body: `
» Jeg har lyst til at gå en tur. = Ho voglia di fare una passeggiata.
» Jeg vil helst blive hjemme. = Preferisco restare a casa.
` },
{ h: "Dove va «ikke»", body: `
Nella frase principale *ikke* va **subito dopo il verbo coniugato**. Se il soggetto viene dopo il verbo (inversione), *ikke* va dopo il soggetto.
» Jeg spiller ikke fodbold. = Non gioco a calcio.
» I dag spiller jeg ikke fodbold. = Oggi non gioco a calcio.
» Jeg kan ikke svømme. = Non so nuotare.
» Kan du ikke komme? = Non puoi venire?
Nella stessa posizione vanno *altid, aldrig, også, gerne, godt, tit, heller ikke, slet ikke*.
` },
{ h: "Anche / neanche", body: `
» Jeg kan lide jazz. – Det kan jeg også. = Mi piace il jazz. – Anche a me.
» Jeg kan ikke lide jazz. – Det kan jeg heller ikke. = Non mi piace il jazz. – Neanche a me.
Nella risposta si ripete il verbo della domanda (*kan*, *er*, *har*), oppure si usa *gør* per gli altri verbi: *Jeg løber tit. – Det gør jeg også.*
` },
],
text: {
title: "Skal vi ses i weekenden?", kind: "Dialogo",
intro: "Marco chiacchiera con Mads, un collega danese.",
lines: `
@Mads: Hej Marco! Hvad laver du i din fritid? = Ciao Marco! Che cosa fai nel tempo libero?
@Marco: Jeg løber tit, og om torsdagen spiller jeg fodbold i en klub. = Corro spesso, e il giovedì gioco a calcio in un club.
@Mads: Fedt! Jeg kan ikke lide at løbe, men jeg svømmer to gange om ugen. = Forte! A me non piace correre, ma nuoto due volte a settimana.
@Marco: Jeg kan desværre ikke svømme så godt. = Purtroppo non so nuotare molto bene.
@Mads: Kan du lide musik? Der er en koncert i parken på lørdag. = Ti piace la musica? Sabato c'è un concerto nel parco.
@Marco: Ja, meget! Hvem spiller? = Sì, molto! Chi suona?
@Mads: Et dansk band. De synger på dansk, så du kan øve dig. = Una band danese. Cantano in danese, così ti eserciti.
@Marco: Godt. Skal vi mødes før koncerten? = Bene. Ci vediamo prima del concerto?
@Mads: Ja, vi kan mødes ved søen klokken syv. = Sì, possiamo incontrarci al lago alle sette.
@Marco: Super. Vi ses! = Ottimo. Ci vediamo!
`,
q: `
Che cosa fa Marco il giovedì?|Gioca a calcio in un club|Nuota;Corre nel parco
Che cosa non piace a Mads?|Correre|Nuotare;La musica
Dove e quando si incontrano?|Al lago alle sette|Al parco alle otto;Al cinema alle sette
Perché il concerto è utile a Marco?|La band canta in danese|È gratis;Suona la sua band preferita
`},
ex: `
m|Jeg kan ___ svømme.|ikke|ikke at;at ikke
o|I dag spiller jeg ikke fodbold.|Oggi non gioco a calcio.|Jeg spiller ikke fodbold i dag
o|Hun kan ikke lide fisk.|Non le piace il pesce.
o|Vil du med i biografen i aften?|Vuoi venire al cinema stasera?
o|Jeg har lyst til at gå en tur.|Ho voglia di fare una passeggiata.
c|Jeg ___ godt lide musik.|kan
c|Vi ___ spille fodbold i morgen.|skal|è in programma
c|Man ___ ikke ryge her.|må|è vietato
c|Jeg har lyst ___ at danse.|til
m|Jeg kan ikke lide jazz. – Det kan jeg ___.|heller ikke|også ikke;ikke også
m|Jeg kan godt lide at ___.|danse|danser;dansede
m|«Non mi piace per niente» si dice…|Jeg kan slet ikke lide det.|Jeg kan ikke slet lide det.;Jeg slet kan ikke lide det.
m|Jeg løber tit. – Det ___ jeg også.|gør|er;kan
t|Mi piace ballare.|Jeg kan lide at danse;Jeg kan godt lide at danse
t|Non so nuotare.|Jeg kan ikke svømme
t|Ci vediamo sabato?|Skal vi ses på lørdag?;Ses vi på lørdag?;Skal vi mødes på lørdag?
t|Neanche io.|Heller ikke mig;Det gør jeg heller ikke;Det kan jeg heller ikke;Det er jeg heller ikke
`
});
