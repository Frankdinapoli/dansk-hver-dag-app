/* Livello A2 · unità 6–10 (formato: vedi a1a.js) */
COURSE.push({
id: "a2-06", level: "A2", n: 6,
title: "Bolig",
sub: "Cercare casa, leggere un annuncio, il possessivo sin/sit/sine",
goals: ["Capire un annuncio immobiliare", "Telefonare per un appartamento", "Scegliere tra sin e hans/hendes"],
words: `
n|en|bolig|boligen|boliger|boligerne|abitazione
n|en|andelsbolig|andelsboligen|andelsboliger|andelsboligerne|appartamento in cooperativa
n|en|ejerlejlighed|ejerlejligheden|ejerlejligheder|ejerlejlighederne|appartamento di proprietà
n|et|rækkehus|rækkehuset|rækkehuse|rækkehusene|villetta a schiera
n|et|parcelhus|parcelhuset|parcelhuse|parcelhusene|villetta unifamiliare
n|et|kollegium|kollegiet|kollegier|kollegierne|studentato
n|en|udlejer|udlejeren|udlejere|udlejerne|padrone di casa
n|en|lejer|lejeren|lejere|lejerne|inquilino
n|et|depositum|depositummet|depositummer|depositummerne|deposito cauzionale
n|en|lejekontrakt|lejekontrakten|lejekontrakter|lejekontrakterne|contratto d'affitto
n|en|annonce|annoncen|annoncer|annoncerne|annuncio
n|en|kvadratmeter|kvadratmeteren|kvadratmeter|kvadratmeterne|metro quadrato
n|en|varme|varmen|-|-|riscaldamento; calore
n|et|forbrug|forbruget|-|-|consumi (luce, acqua)
n|et|område|området|områder|områderne|zona
n|en|beliggenhed|beliggenheden|beliggenheder|beliggenhederne|posizione
n|en|elevator|elevatoren|elevatorer|elevatorerne|ascensore
n|en|kælder|kælderen|kældre|kældrene|cantina
n|et|vaskeri|vaskeriet|vaskerier|vaskerierne|lavanderia
n|en|opvaskemaskine|opvaskemaskinen|opvaskemaskiner|opvaskemaskinerne|lavastoviglie
n|en|vaskemaskine|vaskemaskinen|vaskemaskiner|vaskemaskinerne|lavatrice
n|et|møbel|møblet|møbler|møblerne|mobile
n|en|fremvisning|fremvisningen|fremvisninger|fremvisningerne|visita (di un immobile)
n|en|flytning|flytningen|flytninger|flytningerne|trasloco
n|en|venteliste|ventelisten|ventelister|ventelisterne|lista d'attesa
n|et|husdyr|husdyret|husdyr|husdyrene|animale domestico
v|flytte|flytter|flyttede|flyttet|trasferirsi, traslocare|er
v|udleje|udlejer|udlejede|udlejet|dare in affitto
v|eje|ejer|ejede|ejet|possedere
v|dele|deler|delte|delt|condividere
v|underskrive|underskriver|underskrev|underskrevet|firmare
v|reparere|reparerer|reparerede|repareret|riparare
v|indrette|indretter|indrettede|indrettet|arredare
v|klage|klager|klagede|klaget|lamentarsi
v|låne|låner|lånte|lånt|prendere o dare in prestito
a|møbleret|møbleret|møblerede|-|-|arredato
a|central|centralt|centrale|mere central|mest central|centrale
a|rolig|roligt|rolige|roligere|roligst|tranquillo
a|støjende|støjende|støjende|mere støjende|mest støjende|rumoroso
a|praktisk|praktisk|praktiske|mere praktisk|mest praktisk|pratico
a|rummelig|rummeligt|rummelige|rummeligere|rummeligst|spazioso
a|interesseret|interesseret|interesserede|-|-|interessato
x|sin / sit / sine|suo, sua / suoi (del soggetto)
x|inklusive|incluso
x|stadig|ancora (continua a essere)
x|angående|riguardo a
x|i orden|va bene, in regola
x|tage … med|portare (con sé)
x|flytte ind|trasferirsi (in una casa)
x|flytte ud|lasciare (una casa)
x|stå på venteliste|essere in lista d'attesa
x|Er lejligheden stadig ledig?|L'appartamento è ancora libero?
`,
grammar: [
{ h: "Sin, sit, sine: il possessivo del soggetto", body: `
Alla terza persona singolare il danese distingue due casi che l'italiano confonde con «suo»:
- **sin / sit / sine** se il possessore è il **soggetto della stessa frase**;
- **hans / hendes** se il possessore è un'altra persona.
» Jonas bor med sin kæreste. = Jonas vive con la sua ragazza (la ragazza di Jonas).
» Jonas bor med hans kæreste. = Jonas vive con la ragazza di lui (di un altro uomo!).
| | comune | neutro | plurale |
| suo (del soggetto) | *sin* | *sit* | *sine* |
» Anna maler sit værelse. = Anna dipinge la sua stanza.
» Hun ringer til sine forældre. = Telefona ai suoi genitori.
! *Sin* non può mai far parte del soggetto: *Hans kone er dansk* (non *Sin kone er dansk*).
Con un soggetto plurale si usa *deres*: *De sælger deres hus* (vendono la loro casa).
` },
{ h: "Tipi di abitazione in Danimarca", body: `
| | |
| *lejebolig* | casa in affitto (spesso dopo anni di lista d'attesa) |
| *andelsbolig* | quota di una cooperativa: compri il diritto d'uso |
| *ejerlejlighed* | appartamento di proprietà |
| *rækkehus* / *parcelhus* | villetta a schiera / villetta singola |
| *kollegium* | studentato |
Negli annunci: *2 vær.* (due locali, cioè soggiorno + camera), *m²*, *husleje* (affitto), *forbrug* (consumi), *depositum* (di solito 3 mensilità).
` },
{ h: "Verbi con particella per il trasloco", body: `
» Vi flytter ind den første marts. = Entriamo nella casa il primo marzo.
» Lejeren flytter ud i næste måned. = L'inquilino lascia la casa il mese prossimo.
» Tag gerne en ven med. = Porta pure un amico.
La particella (*ind*, *ud*, *med*) è accentata e va in fondo, dopo il complemento.
` },
],
text: {
title: "Lejlighed til leje", kind: "Annuncio e telefonata",
intro: "Sofie, un'amica danese di Anna, cerca un appartamento a Copenaghen e chiama il padrone di casa.",
lines: `
@Annoncen: Lys toværelses lejlighed på Nørrebro, 58 kvadratmeter, tredje sal med altan. = Luminoso bilocale a Nørrebro, 58 metri quadrati, terzo piano con balcone.
@Annoncen: Husleje 8.900 kroner om måneden inklusive varme. Depositum: tre måneders husleje. Ledig fra første marts. = Affitto 8.900 corone al mese, riscaldamento incluso. Deposito: tre mensilità. Libero dal primo marzo.

@Sofie: Hej, jeg ringer angående lejligheden på Nørrebro. Er den stadig ledig? = Salve, chiamo per l'appartamento a Nørrebro. È ancora libero?
@Udlejeren: Ja, det er den. Men der er mange, der er interesserede. = Sì. Ma ci sono molte persone interessate.
@Sofie: Jeg forstår. Er lejligheden møbleret? = Capisco. L'appartamento è arredato?
@Udlejeren: Nej. Men der er en ny opvaskemaskine i køkkenet og et vaskeri i kælderen. = No. Ma c'è una lavastoviglie nuova in cucina e una lavanderia in cantina.
@Sofie: Må man have husdyr? Jeg har en kat. = Si possono tenere animali? Ho un gatto.
@Udlejeren: En kat er i orden, men ikke hunde. = Un gatto va bene, i cani no.
@Sofie: Og hvad med forbruget? = E i consumi?
@Udlejeren: Vand og el betaler lejeren selv. = Acqua e luce le paga l'inquilino.
@Sofie: Kan jeg se lejligheden? = Posso vedere l'appartamento?
@Udlejeren: Der er fremvisning på torsdag klokken 17. Tag gerne en ven med. = C'è una visita giovedì alle 17. Porti pure qualcuno.
@Sofie: Tak. Så tager jeg min veninde med. Hun hjælper sin bror med at finde en lejlighed, så hun er ekspert! = Grazie. Allora porto la mia amica. Sta aiutando suo fratello a trovare un appartamento, quindi è un'esperta!
`,
q: `
Quanto costa l'affitto?|8.900 corone al mese, riscaldamento incluso|8.900 corone al mese più riscaldamento;9.800 corone al mese
Com'è l'appartamento?|Non arredato, con una lavastoviglie nuova|Arredato, con lavatrice;Non arredato e senza cucina
Sofie può tenere il suo gatto?|Sì, i gatti sono permessi|No, niente animali;Sì, ma pagando di più
Perché l'amica di Sofie è «un'esperta»?|Sta aiutando suo fratello a cercare casa|Lavora in un'agenzia;Ha appena comprato casa
`},
ex: `
m|Anna ringer til ___ mor. (la madre di Anna)|sin|hendes;sit
m|Mads maler ___ værelse. (la stanza di Mads)|sit|sin;hans
m|Jonas besøger ___ forældre. (i genitori di Jonas)|sine|hans;sin
m|Anna er glad. ___ kæreste er dansker.|Hendes|Sin;Sit|*Sin* non può far parte del soggetto.
m|Mads kender Anna. Han kender også ___ kæreste. (di Anna)|hendes|sin;hans
m|Mine naboer sælger ___ hus.|deres|sit;sin|Con un soggetto plurale si usa *deres*.
c|Vi flytter ___ den første marts.|ind|dentro
c|Er lejligheden ___ ledig?|stadig|ancora
c|Huslejen er 8.000 kroner ___ varme.|inklusive|incluso
o|Er lejligheden stadig ledig?|L'appartamento è ancora libero?
o|Hun deler lejlighed med sin veninde.|Divide l'appartamento con la sua amica.
o|Vi har stået på venteliste i to år.|Siamo in lista d'attesa da due anni.
t|Mi trasferisco ad Aarhus.|Jeg flytter til Aarhus
t|Il mio vicino è molto rumoroso.|Min nabo er meget støjende;Min nabo larmer meget
t|Lui vive con sua moglie.|Han bor med sin kone;Han bor sammen med sin kone
t|L'appartamento è arredato?|Er lejligheden møbleret?
`
});

COURSE.push({
id: "a2-07", level: "A2", n: 7,
title: "I køkkenet",
sub: "Cucinare e seguire una ricetta, l'imperativo, il futuro",
goals: ["Capire e dare istruzioni in cucina", "Formare l'imperativo", "Parlare del futuro con skal, vil, kommer til at, bliver"],
words: `
n|en|opskrift|opskriften|opskrifter|opskrifterne|ricetta
n|en|ingrediens|ingrediensen|ingredienser|ingredienserne|ingrediente
n|et|mel|melet|-|-|farina
n|en|olie|olien|olier|olierne|olio
n|et|salt|saltet|-|-|sale
n|en|peber|peberen|-|-|pepe
n|et|løg|løget|løg|løgene|cipolla
n|et|hvidløg|hvidløget|hvidløg|hvidløgene|aglio
n|en|citron|citronen|citroner|citronerne|limone
n|en|fløde|fløden|-|-|panna
n|en|sovs|sovsen|sovse|sovsene|salsa, sugo
n|en|suppe|suppen|supper|supperne|minestra, zuppa
n|en|salat|salaten|salater|salaterne|insalata
n|en|ris|risen|-|-|riso
n|en|pasta|pastaen|-|-|pasta
n|et|svinekød|svinekødet|-|-|carne di maiale
n|en|fars|farsen|-|-|impasto di carne macinata
n|en|frikadelle|frikadellen|frikadeller|frikadellerne|polpetta danese
n|en|rødkål|rødkålen|-|-|cavolo rosso
n|en|gryde|gryden|gryder|gryderne|pentola
n|en|pande|panden|pander|panderne|padella
n|en|skål|skålen|skåle|skålene|ciotola
n|et|skærebræt|skærebrættet|skærebrætter|skærebrætterne|tagliere
n|en|ovn|ovnen|ovne|ovnene|forno
n|et|komfur|komfuret|komfurer|komfurerne|piano cottura
n|en|spiseske|spiseskeen|spiseskeer|spiseskeerne|cucchiaio (misura)
n|en|teske|teskeen|teskeer|teskeerne|cucchiaino
x|gram|grammi
x|en deciliter|un decilitro
x|en liter|un litro
v|skære|skærer|skar|skåret|tagliare
v|hakke|hakker|hakkede|hakket|tritare
v|røre|rører|rørte|rørt|mescolare; toccare
v|blande|blander|blandede|blandet|mescolare, unire
v|stege|steger|stegte|stegt|friggere, rosolare, arrostire
v|varme|varmer|varmede|varmet|scaldare
v|tilsætte|tilsætter|tilsatte|tilsat|aggiungere
v|servere|serverer|serverede|serveret|servire
v|dække|dækker|dækkede|dækket|coprire; (dække bord) apparecchiare
v|skrælle|skræller|skrællede|skrællet|sbucciare
v|hælde|hælder|hældte|hældt|versare
v|lade|lader|lod|ladet|lasciare
v|forme|former|formede|formet|formare, dare forma
a|sur|surt|sure|surere|surest|acido; di cattivo umore
a|bitter|bittert|bitre|-|-|amaro
a|stærk|stærkt|stærke|stærkere|stærkest|forte; piccante
a|færdig|færdigt|færdige|-|-|pronto, finito
a|klar|klart|klare|klarere|klarest|pronto; chiaro
a|vegetarisk|vegetarisk|vegetariske|-|-|vegetariano
x|imens|nel frattempo
x|sådan her|così
x|lidt ad gangen|un po' alla volta
x|på hver side|per lato
x|komme … i|mettere dentro (in cucina)
x|spise … til|mangiare … con (come contorno)
x|kommer til at|(futuro) succederà che
x|Pas på!|Attenzione!
x|Kom og spis!|A tavola!
`,
grammar: [
{ h: "L'imperativo", body: `
L'imperativo è **la radice del verbo**: l'infinito senza la *-e* finale. Se l'infinito finisce con un'altra vocale, resta uguale.
| infinito | imperativo |
| *spise* | *Spis!* |
| *skrive* | *Skriv!* |
| *vente* | *Vent!* |
| *gå*, *se*, *bo* | *Gå! Se! Bo!* |
Le consonanti doppie diventano semplici: *komme → Kom!*, *lukke → Luk!*, *hakke → Hak!*, *sidde → Sid!*
» Skær løget i små stykker. = Taglia la cipolla a pezzetti.
» Rør godt rundt. = Mescola bene.
» Kom ind! = Entra!
Una sola forma vale per tu, voi e lei.
! Per addolcire un ordine si usano *lige* (un attimo) e *gerne* (pure): *Luk lige døren* = chiudi un attimo la porta; *Tag gerne en kage* = prendi pure un dolce.
` },
{ h: "Il futuro senza un tempo futuro", body: `
Il danese non ha un tempo futuro vero e proprio. Si usano:
| forma | uso | esempio |
| presente + tempo | piani certi | *I morgen laver jeg frikadeller.* |
| *skal* | programmi, appuntamenti | *Vi skal have gæster i aften.* |
| *vil* | intenzione; tono formale | *Det vil tage en time.* |
| *kommer til at* | previsione | *Det kommer til at regne.* |
| *bliver* | futuro di «essere» | *Det bliver lækkert!* |
» Du kommer til at elske det! = Ti piacerà da morire!
» Hvad skal du i weekenden? = Che cosa fai nel fine settimana?
` },
{ h: "Misure nelle ricette", body: `
| | |
| *g* | *gram* |
| *dl* | *deciliter* (100 ml) |
| *spsk.* | *spiseske* (cucchiaio) |
| *tsk.* | *teske* (cucchiaino) |
| *stk.* | *stykker* (pezzi) |
Le ricette danesi usano spesso l'imperativo: *Pil løget. Steg kødet.*
` },
],
text: {
title: "Mormors frikadeller", kind: "Dialogo",
intro: "Jonas insegna ad Anna a fare le frikadeller, le polpette danesi, con la ricetta di sua nonna.",
lines: `
@Jonas: I aften skal vi have frikadeller. Det er min mormors opskrift. = Stasera mangiamo le frikadeller. È la ricetta di mia nonna.
@Anna: Hvad skal vi bruge? = Che cosa ci serve?
@Jonas: 500 gram hakket svinekød, et løg, et æg, tre spiseskeer mel, en deciliter mælk, salt og peber. = 500 grammi di carne di maiale macinata, una cipolla, un uovo, tre cucchiai di farina, un decilitro di latte, sale e pepe.
@Jonas: Først skal du hakke løget helt fint. = Prima devi tritare la cipolla molto fine.
@Anna: Sådan her? = Così?
@Jonas: Perfekt. Kom nu kødet, løget, ægget og melet i en skål. = Perfetto. Adesso metti la carne, la cipolla, l'uovo e la farina in una ciotola.
@Jonas: Hæld mælken i lidt ad gangen, og rør godt rundt. = Versa il latte un po' alla volta e mescola bene.
@Jonas: Lad farsen hvile i en halv time i køleskabet. = Lascia riposare l'impasto per mezz'ora in frigorifero.
@Anna: Og så? = E poi?
@Jonas: Så former vi frikadellerne med en ske og steger dem i smør på panden, cirka fem minutter på hver side. = Poi formiamo le polpette con un cucchiaio e le cuociamo nel burro in padella, circa cinque minuti per lato.
@Anna: Hvad spiser man til? = Che cosa ci si mangia insieme?
@Jonas: Kartofler og rødkål. Du kommer til at elske det! = Patate e cavolo rosso. Ti piacerà da morire!
@Anna: Mmm, det bliver lækkert. Skal jeg dække bord imens? = Mmm, sarà buonissimo. Intanto apparecchio?
`,
q: `
Di chi è la ricetta?|Della nonna di Jonas|Della madre di Anna;Di un libro di cucina
Che cosa bisogna fare con la cipolla?|Tritarla molto fine|Friggerla nel burro;Tagliarla a fette
Quanto deve riposare l'impasto?|Mezz'ora in frigorifero|Un'ora fuori dal frigo;Cinque minuti
Con che cosa si mangiano le frikadeller?|Patate e cavolo rosso|Riso e insalata;Pane di segale
Che cosa propone di fare Anna nel frattempo?|Apparecchiare la tavola|Lavare i piatti;Preparare il dolce
`},
ex: `
c|___ løget i små stykker!|Skær|skære
c|___ godt rundt!|Rør|røre
c|___ ind!|Kom|komme
c|___ lige døren!|Luk|lukke
c|___ mælken i skålen!|Hæld|hælde
m|Qual è l'imperativo di «gå»?|Gå!|Gåe!;Går!
m|Qual è l'imperativo di «vente»?|Vent!|Vente!;Venter!
m|Det ___ at regne i morgen. (previsione)|kommer til|bliver til;skal til
m|I aften ___ vi have gæster. (è in programma)|skal|kommer til at;bliver
c|Det ___ lækkert!|bliver|sarà
c|Hvad ___ vi have at spise i aften?|skal
m|«Apparecchiare» si dice…|dække bord|lave bord;sætte bordet
o|Skær løget i små stykker.|Taglia la cipolla a pezzetti.
o|I morgen laver jeg frikadeller.|Domani faccio le polpette.|Jeg laver frikadeller i morgen
o|Kan du lige hjælpe mig?|Puoi aiutarmi un attimo?
t|Mescola bene!|Rør godt rundt;Rør godt
t|Aspetta un attimo!|Vent lige;Vent et øjeblik;Vent lige lidt
t|Domani pioverà.|Det regner i morgen;Det kommer til at regne i morgen;Det vil regne i morgen;I morgen regner det
t|Sarà bello.|Det bliver godt;Det bliver dejligt;Det bliver hyggeligt
`
});

COURSE.push({
id: "a2-08", level: "A2", n: 8,
title: "Venner og følelser",
sub: "Emozioni e amicizia, le frasi secondarie e la posizione di ikke",
goals: ["Esprimere emozioni e scusarsi", "Costruire frasi con at, fordi, når, da, hvis", "Mettere ikke al posto giusto nelle secondarie"],
words: `
n|en|følelse|følelsen|følelser|følelserne|sentimento, emozione
n|et|venskab|venskabet|venskaber|venskaberne|amicizia
n|en|glæde|glæden|glæder|glæderne|gioia
n|en|sorg|sorgen|sorger|sorgerne|dolore, lutto
n|en|angst|angsten|-|-|ansia, paura
n|en|vrede|vreden|-|-|rabbia
n|en|kærlighed|kærligheden|-|-|amore
n|et|smil|smilet|smil|smilene|sorriso
n|et|kram|krammet|kram|krammene|abbraccio
n|en|misforståelse|misforståelsen|misforståelser|misforståelserne|malinteso
n|et|problem|problemet|problemer|problemerne|problema
n|en|jul|julen|jule|julene|Natale
v|smile|smiler|smilede|smilet|sorridere
v|kramme|krammer|krammede|krammet|abbracciare
v|savne|savner|savnede|savnet|sentire la mancanza di
v|håbe|håber|håbede|håbet|sperare
v|hade|hader|hadede|hadet|odiare
v|irritere|irriterer|irriterede|irriteret|irritare
v|skændes|skændes|skændtes|skændtes|litigare
v|undskylde|undskylder|undskyldte|undskyldt|scusare; scusarsi
v|tilgive|tilgiver|tilgav|tilgivet|perdonare
v|stole|stoler|stolede|stolet|fidarsi (stole på)
v|græde|græder|græd|grædt|piangere
v|vide|ved|vidste|vidst|sapere
v|ske|sker|skete|sket|succedere|er
x|bekymre sig om|preoccuparsi di
x|forelske sig i|innamorarsi di
x|ked af det|triste, dispiaciuto
x|bange|spaventato (bange for = paura di)
x|se … ud|sembrare (all'aspetto)
x|have ret|avere ragione
x|holde jul|passare il Natale
x|sikkert|sicuramente, probabilmente
a|vred|vredt|vrede|vredere|vredest|arrabbiato
a|nervøs|nervøst|nervøse|mere nervøs|mest nervøs|nervoso, agitato
a|skuffet|skuffet|skuffede|mere skuffet|mest skuffet|deluso
a|stolt|stolt|stolte|stoltere|stoltest|orgoglioso
a|jaloux|jaloux|jalouxe|mere jaloux|mest jaloux|geloso
a|ensom|ensomt|ensomme|ensommere|ensomst|solo, solitario
a|lykkelig|lykkeligt|lykkelige|lykkeligere|lykkeligst|felice
a|overrasket|overrasket|overraskede|-|-|sorpreso
a|forelsket|forelsket|forelskede|-|-|innamorato
a|venlig|venligt|venlige|venligere|venligst|gentile
a|ærlig|ærligt|ærlige|ærligere|ærligst|onesto, sincero
a|genert|genert|generte|mere genert|mest genert|timido
a|nem|nemt|nemme|nemmere|nemmest|facile
x|at|che (congiunzione)
x|hvis|se (condizione)
x|da|quando (una volta, nel passato)
x|om|se (nelle domande indirette)
x|mens|mentre
x|Det gør mig ondt.|Mi dispiace.
x|Jeg er ked af det.|Mi dispiace. / Sono triste.
x|Det er i orden.|Va bene. Non fa niente.
`,
grammar: [
{ h: "Le frasi secondarie", body: `
Una frase secondaria dipende dalla principale e comincia con una congiunzione:
| | |
| *at* | che |
| *fordi* | perché |
| *når* | quando (ogni volta; nel futuro) |
| *da* | quando (una volta, nel passato) |
| *hvis* | se (condizione) |
| *om* | se (domanda indiretta) |
| *selvom* | anche se |
| *mens* | mentre |
Nella secondaria l'ordine è sempre **congiunzione – soggetto – verbo**, senza inversione.
» Jeg tror, at han kommer. = Credo che venga.
» Hun er glad, fordi hun har fået et nyt job. = È contenta perché ha trovato un lavoro nuovo.
` },
{ h: "«Ikke» prima del verbo nelle secondarie", body: `
Nella principale *ikke* va dopo il verbo; nella secondaria va **prima** del verbo. Lo stesso vale per *altid, aldrig, også, gerne, tit*.
| principale | secondaria |
| *Han kommer ikke.* | *…, at han ikke kommer.* |
| *Hun spiser aldrig kød.* | *…, fordi hun aldrig spiser kød.* |
| *Jeg har ikke tid.* | *…, hvis jeg ikke har tid.* |
» Hun siger, at hun ikke spiser kød. = Dice che non mangia carne.
» Jeg er glad, fordi du altid hjælper mig. = Sono contento perché mi aiuti sempre.
! Gli studenti danesi ricordano la regola con la sigla **BIFF**: *i Bisætninger står Ikke Foran det Finitte verbum* (nelle secondarie *ikke* sta prima del verbo coniugato).
` },
{ h: "Secondaria all'inizio: inversione nella principale", body: `
Se la frase comincia con la secondaria, questa occupa il primo posto: nella principale viene subito il **verbo**, poi il soggetto.
» Når det regner, tager jeg bussen. = Quando piove, prendo l'autobus.
» Hvis du har tid, kan vi ses i morgen. = Se hai tempo, possiamo vederci domani.
» Da jeg var barn, boede jeg i Rom. = Quando ero bambino, abitavo a Roma.
` },
{ h: "Da o når?", body: `
- *når*: ogni volta che, o nel futuro.
- *da*: un solo momento nel passato.
» Når jeg er træt, går jeg tidligt i seng. = Quando sono stanco vado a letto presto.
» Da jeg kom til Danmark, talte jeg ikke dansk. = Quando sono arrivato in Danimarca non parlavo danese.
` },
{ h: "Emozioni e preposizioni", body: `
| | |
| *glad for* | contento di |
| *ked af* | dispiaciuto per |
| *bange for* | spaventato da |
| *vred på* | arrabbiato con |
| *stolt af* | orgoglioso di |
| *skuffet over* | deluso da |
| *forelsket i* | innamorato di |
» Hun er vred på ham. = È arrabbiata con lui.
» Vi er stolte af dig. = Siamo orgogliosi di te.
` },
],
text: {
title: "En misforståelse", kind: "Dialogo",
intro: "Anna ha litigato con Jonas e ne parla con l'amica Sofie.",
lines: `
@Sofie: Hej Anna. Du ser ked ud af det. Er der sket noget? = Ciao Anna. Sembri triste. È successo qualcosa?
@Anna: Jonas og jeg skændtes i går. = Jonas e io abbiamo litigato ieri.
@Sofie: Åh nej. Hvad skete der? = Oh no. Cos'è successo?
@Anna: Han sagde, at han ikke vil holde jul i Italien i år. = Ha detto che quest'anno non vuole passare il Natale in Italia.
@Anna: Jeg blev vred, fordi vi var hos hans familie sidste år. = Mi sono arrabbiata perché l'anno scorso siamo stati dalla sua famiglia.
@Sofie: Det forstår jeg godt. Savner du din familie? = Ti capisco. Ti manca la tua famiglia?
@Anna: Ja, meget. Når jeg tænker på jul, tænker jeg på min mormors mad og hele familien omkring bordet. = Sì, molto. Quando penso al Natale, penso al cibo di mia nonna e a tutta la famiglia intorno al tavolo.
@Sofie: Har du fortalt ham, hvordan du har det? = Gli hai detto come ti senti?
@Anna: Nej, ikke rigtigt. Jeg var for sur. = No, non davvero. Ero troppo arrabbiata.
@Sofie: Måske er det en misforståelse. Hvis du forklarer ham det roligt, forstår han det sikkert. = Forse è un malinteso. Se glielo spieghi con calma, di sicuro capirà.
@Anna: Du har ret. Jeg ringer til ham, når jeg kommer hjem. = Hai ragione. Lo chiamo quando torno a casa.

@Anna: Jonas undskyldte. Han sagde, at han var nervøs, fordi han ikke taler italiensk så godt. = Jonas si è scusato. Ha detto che era agitato perché non parla molto bene l'italiano.
@Anna: Nu skal vi holde jul i Bologna, og han øver sig allerede! = Adesso passeremo il Natale a Bologna, e lui si sta già esercitando!
`,
q: `
Per che cosa hanno litigato Anna e Jonas?|Per dove passare il Natale|Per l'affitto;Per un regalo
Perché Anna si è arrabbiata?|L'anno scorso erano stati dalla famiglia di Jonas|A Jonas non piace il cibo italiano;Jonas ha dimenticato il suo compleanno
Che cosa consiglia Sofie?|Spiegare con calma a Jonas come si sente|Aspettare che chiami lui;Andare in Italia da sola
Perché Jonas era agitato?|Non parla bene l'italiano|Ha paura dell'aereo;Non ha soldi
`},
ex: `
m|Hun siger, at hun ___ kød.|ikke spiser|spiser ikke;ikke spise|In una frase secondaria *ikke* va prima del verbo.
m|Jeg er glad, fordi du ___ mig.|altid hjælper|hjælper altid;altid hjælpe
m|Når det regner, ___ bussen.|tager jeg|jeg tager;tage jeg|Se la frase comincia con una secondaria, nella principale viene prima il verbo.
m|___ jeg var barn, boede jeg i Rom.|Da|Når;Hvis
m|___ jeg er træt, går jeg tidligt i seng. (ogni volta che)|Når|Da;Om
m|Jeg ved ikke, ___ han kommer.|om|hvis;at
c|___ du har tid, kan vi ses i morgen.|Hvis|se
c|Hun er vred ___ ham.|på
c|Jeg er bange ___ hunde.|for
c|Vi er stolte ___ dig.|af
o|Han siger, at han ikke har tid.|Dice che non ha tempo.
o|Hvis det regner, bliver vi hjemme.|Se piove, restiamo a casa.|Vi bliver hjemme, hvis det regner
o|Jeg ringer til dig, når jeg kommer hjem.|Ti chiamo quando torno a casa.|Når jeg kommer hjem, ringer jeg til dig
t|Mi manchi.|Jeg savner dig
t|Mi dispiace.|Jeg er ked af det;Det gør mig ondt;Undskyld
t|So che non è facile.|Jeg ved, at det ikke er nemt;Jeg ved godt, at det ikke er let;Jeg ved, at det ikke er let;Jeg ved godt, at det ikke er nemt
t|Hai ragione.|Du har ret
`
});

COURSE.push({
id: "a2-09", level: "A2", n: 9,
title: "På Borgerservice",
sub: "Uffici, banca e servizi digitali, le domande indirette e «man»",
goals: ["Sbrigare pratiche in ufficio e in banca", "Fare domande indirette e cortesi", "Usare man per il «si» impersonale"],
words: `
n|en|kommune|kommunen|kommuner|kommunerne|comune
x|Borgerservice|sportello comunale per i cittadini
n|et|CPR-nummer|CPR-nummeret|CPR-numre|CPR-numrene|codice personale danese
n|et|nummer|nummeret|numre|numrene|numero
n|en|adresse|adressen|adresser|adresserne|indirizzo
n|en|blanket|blanketten|blanketter|blanketterne|modulo
n|en|ansøgning|ansøgningen|ansøgninger|ansøgningerne|domanda (scritta), candidatura
n|en|konto|kontoen|konti|kontiene|conto (bancario)
n|en|hæveautomat|hæveautomaten|hæveautomater|hæveautomaterne|bancomat (sportello)
x|kontanter|contanti
n|en|pakke|pakken|pakker|pakkerne|pacco
n|et|frimærke|frimærket|frimærker|frimærkerne|francobollo
n|en|kø|køen|køer|køerne|coda, fila
n|en|aftale|aftalen|aftaler|aftalerne|appuntamento; accordo
n|en|mail|mailen|mails|mailsene|e-mail
n|en|hjemmeside|hjemmesiden|hjemmesider|hjemmesiderne|sito web
n|en|adgangskode|adgangskoden|adgangskoder|adgangskoderne|password
n|en|skat|skatten|skatter|skatterne|tassa; (Skat) il fisco
n|et|gebyr|gebyret|gebyrer|gebyrerne|commissione
n|et|spørgsmål|spørgsmålet|spørgsmål|spørgsmålene|domanda
n|et|svar|svaret|svar|svarene|risposta
n|en|oplysning|oplysningen|oplysninger|oplysningerne|informazione
n|en|kvittering|kvitteringen|kvitteringer|kvitteringerne|ricevuta
n|en|medarbejder|medarbejderen|medarbejdere|medarbejderne|impiegato, collaboratore
n|en|post|posten|-|-|posta
v|udfylde|udfylder|udfyldte|udfyldt|compilare
v|hæve|hæver|hævede|hævet|prelevare; alzare
v|overføre|overfører|overførte|overført|trasferire (denaro)
v|skylde|skylder|skyldte|skyldt|dovere (soldi)
v|registrere|registrerer|registrerede|registreret|registrare
v|melde|melder|meldte|meldt|comunicare, notificare
v|aflyse|aflyser|aflyste|aflyst|annullare, disdire
v|ændre|ændrer|ændrede|ændret|cambiare, modificare
v|kontakte|kontakter|kontaktede|kontaktet|contattare
v|trække|trækker|trak|trukket|tirare; (trække et nummer) prendere il numero
v|vælge|vælger|valgte|valgt|scegliere
a|gyldig|gyldigt|gyldige|-|-|valido
a|nødvendig|nødvendigt|nødvendige|-|-|necessario
a|mulig|muligt|mulige|-|-|possibile
a|umulig|umuligt|umulige|-|-|impossibile
a|digital|digitalt|digitale|mere digital|mest digital|digitale
a|personlig|personligt|personlige|-|-|personale
a|offentlig|offentligt|offentlige|-|-|pubblico
x|man|si (impersonale)
x|logge ind|accedere (a un sito)
x|melde flytning|comunicare il cambio di indirizzo
x|MitID|l'identità digitale danese
x|Digital Post|la posta digitale della pubblica amministrazione
x|Ved du, hvor …?|Sai dove …?
x|Jeg vil gerne vide, om …|Vorrei sapere se …
x|Kan du sige mig, hvornår …?|Mi sai dire quando …?
x|med posten|per posta
x|tusind tak|grazie mille
`,
grammar: [
{ h: "Le domande indirette", body: `
Una domanda diventa indiretta quando dipende da un'altra frase («non so dove…», «mi chiedo se…»). In danese diventa una **frase secondaria**: niente inversione, e *ikke* prima del verbo.
| diretta | indiretta |
| *Hvor bor du?* | *Jeg ved ikke, hvor du bor.* |
| *Hvornår kører toget?* | *Kan du sige mig, hvornår toget kører?* |
| *Kommer han?* | *Jeg ved ikke, om han kommer.* |
Le domande sì/no diventano indirette con **om** (se).
» Jeg vil gerne vide, om I har åbent på lørdag. = Vorrei sapere se siete aperti sabato.
! Nella domanda indiretta niente inversione: *hvor stationen ligger*, non *hvor ligger stationen*.
` },
{ h: "Quando la parola interrogativa è il soggetto: der", body: `
Se *hvem*, *hvad* o *hvilken* fanno da soggetto, nella domanda indiretta si aggiunge **der**.
» Hvem kommer? → Jeg ved ikke, hvem der kommer. = Non so chi viene.
» Hvad sker der? → Hun spørger, hvad der sker. = Chiede che cosa succede.
» Du kan se, hvilke læger der har plads. = Puoi vedere quali medici hanno posto.
` },
{ h: "Man: il «si» impersonale", body: `
*Man* corrisponde al «si» impersonale italiano (e al «one» inglese). Il verbo resta normale.
» Man skal have et CPR-nummer. = Bisogna avere un codice CPR.
» Hvordan siger man «coda» på dansk? = Come si dice «coda» in danese?
» Her må man ikke ryge. = Qui non si può fumare.
` },
{ h: "Chiedere con cortesia", body: `
- *Kan du…? / Kunne du…?* = Puoi…? / Potresti…?
- *Må jeg…?* = Posso…? (permesso)
- *Jeg vil gerne…* = Vorrei…
- *Er det muligt at…?* = È possibile…?
In Danimarca il tono resta informale anche in ufficio: si usa il *du* e non servono formule complicate.
` },
{ h: "La Danimarca digitale", body: `
- **CPR-nummer**: il codice personale, serve per quasi tutto.
- **MitID**: l'identità digitale per banca e uffici pubblici.
- **Digital Post**: la posta ufficiale arriva online, non per lettera.
- **Borgerservice**: lo sportello del comune; spesso si prende un numero (*trække et nummer*) e si aspetta.
` },
],
text: {
title: "Jeg er flyttet", kind: "Dialogo",
intro: "Marco va allo sportello del comune per comunicare il nuovo indirizzo.",
lines: `
@Medarbejderen: Nummer 47? = Numero 47?
@Marco: Ja, det er mig. Goddag. = Sì, sono io. Buongiorno.
@Medarbejderen: Goddag. Hvad kan jeg hjælpe med? = Buongiorno. Come posso aiutarla?
@Marco: Jeg er flyttet, og jeg vil gerne vide, hvordan man melder flytning. = Mi sono trasferito e vorrei sapere come si comunica il cambio di indirizzo.
@Medarbejderen: Det gør man normalt online på borger.dk med MitID. Har du MitID? = Di solito si fa online su borger.dk con MitID. Ha MitID?
@Marco: Ja, men jeg kan ikke huske min adgangskode. = Sì, ma non ricordo la password.
@Medarbejderen: Så kan jeg godt hjælpe dig her. Må jeg se dit pas og din lejekontrakt? = Allora posso aiutarla qui. Posso vedere il passaporto e il contratto d'affitto?
@Marco: Værsgo. Ved du, om jeg også skal skifte læge? = Ecco. Sa se devo anche cambiare medico?
@Medarbejderen: Ja, hvis du er flyttet til en anden kommune. Hvilken kommune bor du i nu? = Sì, se si è trasferito in un altro comune. In che comune abita adesso?
@Marco: Frederiksberg. = Frederiksberg.
@Medarbejderen: Så skal du vælge en ny læge. Du kan se, hvilke læger der har plads, på listen her. = Allora deve scegliere un nuovo medico. Su questo elenco può vedere quali medici hanno posto.
@Medarbejderen: Dit nye sundhedskort kommer med posten om cirka to uger. = La nuova tessera sanitaria arriva per posta tra circa due settimane.
@Marco: Tusind tak. Det var nemmere, end jeg troede! = Grazie mille. È stato più facile di quanto pensassi!
`,
q: `
Perché Marco va allo sportello?|Per comunicare il nuovo indirizzo|Per aprire un conto in banca;Per rinnovare il passaporto
Perché non lo fa online?|Non ricorda la password di MitID|Non ha un computer;Il sito non funziona
Perché deve scegliere un nuovo medico?|Si è trasferito in un altro comune|Il suo medico è andato in pensione;Il medico non parla italiano
Quando arriva la nuova tessera sanitaria?|Tra circa due settimane|Subito;Tra due mesi
`},
ex: `
m|Jeg ved ikke, hvor ___.|han bor|bor han;han bo
m|Kan du sige mig, hvornår ___?|toget kører|kører toget;toget køre
m|Jeg vil gerne vide, ___ I har åbent på lørdag.|om|hvis;at
m|Ved du, hvem ___ kommer i aften?|der|som;at|Quando la parola interrogativa è il soggetto, nella domanda indiretta si aggiunge *der*.
c|Hvordan siger ___ «grazie» på dansk?|man|si impersonale
c|___ skal have et CPR-nummer for at arbejde.|Man
c|Du skal ___ en blanket.|udfylde|compilare
m|«Prelevare soldi» si dice…|hæve penge|tage penge ud;løfte penge
c|Du skal trække et ___ og vente i køen.|nummer
o|Jeg ved ikke, om han kommer i morgen.|Non so se viene domani.
o|Kan du fortælle mig, hvor biblioteket ligger?|Puoi dirmi dove si trova la biblioteca?
o|Hun spurgte, hvad klokken var.|Ha chiesto che ore erano.
t|Non so dove abita.|Jeg ved ikke, hvor han bor;Jeg ved ikke, hvor hun bor
t|Posso pagare con la carta?|Kan jeg betale med kort?;Må jeg betale med kort?
t|Vorrei sapere se è possibile.|Jeg vil gerne vide, om det er muligt;Jeg vil gerne høre, om det er muligt
t|Come si dice «coda» in danese?|Hvordan siger man «coda» på dansk?;Hvad hedder «coda» på dansk?
`
});

COURSE.push({
id: "a2-10", level: "A2", n: 10,
title: "Planer og aftaler",
sub: "Inviti e appuntamenti, le preposizioni di tempo",
goals: ["Invitare, accettare e rifiutare", "Usare om, for … siden, i, på, siden", "Distinguere om mandagen, på mandag, i mandags"],
words: `
n|en|plan|planen|planer|planerne|piano, progetto
n|en|kalender|kalenderen|kalendere|kalenderne|calendario, agenda
n|en|invitation|invitationen|invitationer|invitationerne|invito
n|et|bryllup|brylluppet|bryllupper|bryllupperne|matrimonio
n|et|selskab|selskabet|selskaber|selskaberne|festa; compagnia; società
n|en|anledning|anledningen|anledninger|anledningerne|occasione
n|et|tidspunkt|tidspunktet|tidspunkter|tidspunkterne|momento, orario
n|en|periode|perioden|perioder|perioderne|periodo
n|et|døgn|døgnet|døgn|døgnene|giorno di 24 ore
n|et|århundrede|århundredet|århundreder|århundrederne|secolo
v|foreslå|foreslår|foreslog|foreslået|proporre
v|aftale|aftaler|aftalte|aftalt|fissare, concordare
v|takke|takker|takkede|takket|ringraziare
v|udsætte|udsætter|udsatte|udsat|rimandare
v|love|lover|lovede|lovet|promettere
v|vare|varer|varede|varet|durare
v|fylde|fylder|fyldte|fyldt|riempire; (fylde år) compiere gli anni
v|ønske|ønsker|ønskede|ønsket|desiderare, augurare
x|gifte sig|sposarsi
x|komme forbi|passare (da qualcuno)
x|blive færdig|finire (un lavoro)
x|siden|da (quando), da allora
x|indtil|fino a
x|inden|prima di, entro
x|senest|al più tardi
x|tidligst|al più presto
x|om lidt|tra poco
x|lige nu|proprio adesso
x|snart|presto, fra poco
x|i løbet af|nel corso di
x|hver anden uge|ogni due settimane
x|i overmorgen|dopodomani
x|i morgen tidlig|domattina
x|i stedet|invece
x|i øjeblikket|al momento
x|tilbage|indietro, di ritorno
x|alle sammen|tutti quanti
x|ingenting|niente
x|bare|solo, soltanto
x|ved tretiden|verso le tre
x|Passer det dig?|Ti va bene?
x|Det passer mig fint.|Mi va benissimo.
x|Hvad med …?|Che ne dici di …?
x|Desværre kan jeg ikke.|Purtroppo non posso.
x|Tak for invitationen.|Grazie dell'invito.
a|optaget|optaget|optagne|-|-|occupato, impegnato
a|punktlig|punktligt|punktlige|-|-|puntuale
a|vigtig|vigtigt|vigtige|vigtigere|vigtigst|importante
`,
grammar: [
{ h: "Le preposizioni di tempo", body: `
| preposizione | significato | esempio |
| *om* + durata | tra (futuro) | *om en uge* = tra una settimana |
| *for … siden* | fa | *for en uge siden* = una settimana fa |
| *i* + durata | per (quanto dura) | *Jeg boede der i to år.* |
| *på* + durata | in (tempo impiegato) | *Jeg læste bogen på to dage.* |
| *siden* | da (inizio) | *siden 2020* = dal 2020 |
| *fra … til* | da … a | *fra mandag til fredag* |
| *indtil* | fino a | *indtil klokken fem* |
| *inden* | prima di, entro | *inden fredag* |
» Toget kører om ti minutter. = Il treno parte tra dieci minuti.
» Vi mødtes for fem år siden. = Ci siamo conosciuti cinque anni fa.
» Hun har boet i Danmark siden 2019. = Vive in Danimarca dal 2019.
» Jeg kan lære det på en uge. = Posso impararlo in una settimana.
! *Om* con il tempo guarda **avanti** (tra), *for … siden* guarda **indietro** (fa).
` },
{ h: "Abitudine, prossimo, scorso", body: `
| ogni volta | prossimo | scorso |
| *om mandagen* | *på mandag* | *i mandags* |
| *om sommeren* | *til sommer* | *sidste sommer* |
| *om morgenen* | *i morgen tidlig* | *i morges* |
| *om aftenen* | *i aften* | *i aftes* |
*I sommer* può significare questa estate (in corso o appena passata), a seconda del contesto.
` },
{ h: "Proporre, accettare, rifiutare", body: `
- Proporre: *Skal vi…? Hvad med…? Har du lyst til at…?*
- Accettare: *Ja, gerne! Det lyder godt. Det passer mig fint.*
- Rifiutare: *Desværre kan jeg ikke. Jeg er optaget. Kan vi tage det en anden dag?*
» Tak for invitationen, jeg kommer gerne. = Grazie dell'invito, vengo volentieri.
! In Danimarca la puntualità conta: *klokken syv* vuol dire alle sette, non alle sette e un quarto.
` },
],
text: {
title: "Fødselsdagsmiddag", kind: "Messaggi",
intro: "Anna organizza la cena per il suo compleanno nella chat con gli amici.",
lines: `
@Anna: Hej alle sammen! Jeg fylder 29 om to uger og vil gerne invitere jer til middag lørdag den 14. = Ciao a tutti! Tra due settimane compio 29 anni e vorrei invitarvi a cena sabato 14.
@Anna: Kan I komme klokken halv syv? = Potete venire alle sei e mezza?
@Sofie: Tak for invitationen! Jeg kommer gerne, men jeg kan først være der klokken syv, fordi jeg arbejder indtil halv seks. = Grazie dell'invito! Vengo volentieri, ma riesco ad arrivare solo alle sette, perché lavoro fino alle cinque e mezza.
@Mads: Desværre kan jeg ikke den 14. Min bror skal giftes den dag. Kan vi ses en anden dag i stedet? = Purtroppo il 14 non posso. Mio fratello si sposa quel giorno. Possiamo vederci un altro giorno?
@Anna: Tillykke til din bror! Hvad med søndag den 15. om eftermiddagen? Vi kan drikke kaffe og spise kage. = Auguri a tuo fratello! Che ne dici di domenica 15 pomeriggio? Possiamo prendere un caffè e mangiare una torta.
@Mads: Det passer mig fint. Jeg kommer forbi ved tretiden. = Mi va benissimo. Passo verso le tre.
@Marco: Jeg er i Italien i øjeblikket, men jeg er tilbage om en uge. Selvfølgelig kommer jeg! Skal jeg tage noget med? = Al momento sono in Italia, ma torno tra una settimana. Certo che vengo! Devo portare qualcosa?
@Anna: Bare dig selv! Men hvis du har tid, må du gerne tage en flaske italiensk vin med. = Solo te stesso! Ma se hai tempo, porta pure una bottiglia di vino italiano.
@Sofie: Jeg glæder mig! Hvad ønsker du dig i fødselsdagsgave? = Non vedo l'ora! Che cosa vorresti come regalo di compleanno?
@Anna: Ingenting. Det vigtigste er, at I kommer. = Niente. La cosa più importante è che veniate.
`,
q: `
Quanti anni compie Anna?|29|28;30
Perché Sofie arriva alle sette?|Lavora fino alle 17:30|Ha un altro invito;Viene in treno da lontano
Perché Mads non può venire il 14?|Si sposa suo fratello|È in Italia;Deve lavorare
Che cosa chiede Anna a Marco?|Una bottiglia di vino italiano, se ha tempo|Una torta;Di arrivare prima per aiutarla
`},
ex: `
m|Toget kører ___ ti minutter. (tra)|om|i;på
m|«Cinque anni fa» si dice…|for fem år siden|fem år siden;om fem år
m|Jeg boede i Rom ___ to år. (per quanto tempo)|i|på;om
m|Hun læste bogen ___ to dage. (tempo impiegato)|på|i;om
c|Jeg har boet her ___ 2020.|siden|dal
c|Butikken har åbent ___ klokken 18.|indtil;til|fino alle
c|Du skal svare ___ fredag.|inden;senest|entro
m|«Stamattina» (ormai passata) si dice…|i morges|om morgenen;i morgen
m|«Domattina» si dice…|i morgen tidlig|i morges;om morgenen
m|Quale risposta rifiuta con cortesia?|Desværre kan jeg ikke.|Nej, jeg vil ikke.;Det gider jeg ikke.
c|Tak for ___! Jeg kommer gerne.|invitationen
o|Hvad med søndag om eftermiddagen?|Che ne dici di domenica pomeriggio?
o|Jeg er tilbage om en uge.|Torno tra una settimana.|Om en uge er jeg tilbage
o|Kan vi ses en anden dag i stedet?|Possiamo vederci un altro giorno invece?
t|Tra due settimane compio trent'anni.|Om to uger fylder jeg 30;Om to uger fylder jeg tredive;Jeg fylder 30 om to uger;Jeg fylder tredive om to uger
t|Grazie dell'invito!|Tak for invitationen
t|Mi va benissimo.|Det passer mig fint;Det passer fint
t|Lavoro fino alle cinque.|Jeg arbejder indtil klokken fem;Jeg arbejder til klokken fem;Jeg arbejder indtil fem;Jeg arbejder til fem
`
});
