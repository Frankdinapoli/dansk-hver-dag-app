/* Livello A1 · unità 1–5
   Formato lessico:  n|en/et|singolare|determinativo|plurale|plurale determinativo|italiano
                     v|infinito|presente|passato|participio|italiano[|er]
                     a|base|neutro|plurale|comparativo|superlativo|italiano
                     x|danese|italiano
   Esercizi:         c|frase con ___|risposte;alternative|suggerimento|spiegazione
                     m|domanda|giusta|sbagliata;sbagliata|spiegazione
                     o|frase giusta|traduzione italiana|altri ordini accettati
                     t|italiano|traduzione;alternative|spiegazione
*/
COURSE.push({
id: "a1-01", level: "A1", n: 1,
title: "Hej! Jeg hedder…",
sub: "Salutare, presentarsi, i pronomi personali e il verbo «essere»",
goals: ["Salutare nei vari momenti della giornata", "Dire come ti chiami e chiedere il nome", "Chiedere e dire come stai"],
words: `
x|hej|ciao
x|hej hej|ciao (congedo)
x|godmorgen|buongiorno (di mattina)
x|goddag|buongiorno (formale)
x|godaften|buonasera
x|godnat|buonanotte
x|farvel|arrivederci
x|vi ses|ci vediamo
x|tak|grazie
x|mange tak|grazie mille
x|selv tak|grazie a te
x|undskyld|scusa, mi scusi
x|ja|sì
x|nej|no
x|jo|sì (a una domanda negativa)
x|måske|forse
x|velkommen|benvenuto
x|jeg|io
x|du|tu
x|han|lui
x|hun|lei
x|vi|noi
x|I|voi
x|de|loro
x|og|e
x|men|ma
x|også|anche
x|meget|molto
x|godt|bene
x|lidt|un po'
x|hvad|che cosa
x|hvem|chi
x|hvordan|come
x|Hvordan har du det?|Come stai?
x|Jeg har det godt.|Sto bene.
x|Hvad hedder du?|Come ti chiami?
x|Hyggeligt at møde dig.|Piacere di conoscerti.
x|Hvad med dig?|E tu?
v|være|er|var|været|essere
v|hedde|hedder|hed|heddet|chiamarsi
v|have|har|havde|haft|avere
v|sige|siger|sagde|sagt|dire
n|en|mand|manden|mænd|mændene|uomo
n|en|kvinde|kvinden|kvinder|kvinderne|donna
n|en|ven|vennen|venner|vennerne|amico
n|en|veninde|veninden|veninder|veninderne|amica
n|et|navn|navnet|navne|navnene|nome
n|en|lærer|læreren|lærere|lærerne|insegnante
a|glad|glad|glade|gladere|gladest|contento, felice
a|træt|træt|trætte|trættere|trættest|stanco
`,
grammar: [
{ h: "I pronomi personali", body: `
| danese | italiano |
| *jeg* | io |
| *du* | tu |
| *han* / *hun* | lui / lei |
| *vi* | noi |
| *I* | voi (sempre maiuscolo) |
| *de* | loro |

In danese il soggetto **non si omette mai**. «Sono stanco» è *jeg er træt*, mai solo *er træt*.
! *I* (voi) si scrive sempre con la maiuscola; *i* minuscolo è la preposizione «in».
` },
{ h: "Il verbo «at være» (essere)", body: `
Al presente il verbo è *er* per tutte le persone. Niente coniugazione da imparare.
» Jeg er glad. = Sono contento.
» Du er træt. = Sei stanco.
» Han er lærer. = Lui è insegnante.
» Vi er venner. = Siamo amici.
» I er velkomne. = Siete i benvenuti.
Nota: con le professioni non si usa l'articolo, come in italiano: *han er lærer*.
` },
{ h: "Salutare", body: `
- *Hej* va bene quasi sempre, anche con persone che non conosci.
- *Godmorgen* fino a metà mattina, *goddag* è più formale, *godaften* la sera, *godnat* prima di dormire.
- Per salutare andando via: *hej hej*, *vi ses* o *farvel*.
- In Danimarca si dà del *du* (tu) quasi a tutti, anche al medico o al capo.
` },
{ h: "Sì, no e «jo»", body: `
Il danese ha due parole per «sì»: *ja* e *jo*. *Jo* si usa per rispondere «sì» a una domanda **negativa**.
» Er du træt? – Ja. = Sei stanco? – Sì.
» Er du ikke træt? – Jo! = Non sei stanco? – Sì (invece sì)!
` },
{ h: "Tre lettere nuove: æ, ø, å", body: `
| lettera | suono | esempio |
| *æ* | come la «è» aperta di «bello» | *træt* |
| *ø* | come «eu» nel francese «peu» | *møde* |
| *å* | come la «o» aperta di «porta» | *måske* |
Altre due regole utili fin da subito: *hv-* si legge «v» (*hvad*, *hvem*) e la *d* dopo una vocale è morbida, simile al «th» inglese di «the» (*godt* però si legge «got»).
» Hvad hedder du? = Come ti chiami?
` },
],
text: {
title: "På sprogskolen", kind: "Dialogo",
intro: "Primo giorno alla scuola di lingua. L'insegnante, Mette, saluta i nuovi studenti.",
lines: `
@Mette: Godmorgen! Velkommen. = Buongiorno! Benvenuti.
@Mette: Jeg hedder Mette. Hvad hedder du? = Mi chiamo Mette. Come ti chiami?
@Marco: Hej, jeg hedder Marco. = Ciao, mi chiamo Marco.
@Mette: Hyggeligt at møde dig, Marco. Hvordan har du det? = Piacere di conoscerti, Marco. Come stai?
@Marco: Jeg har det godt, tak. Hvad med dig? = Sto bene, grazie. E tu?
@Mette: Også godt, tak. Og hvem er du? = Bene anch'io, grazie. E tu chi sei?
@Anna: Jeg hedder Anna. Jeg er Marcos veninde. = Mi chiamo Anna. Sono l'amica di Marco.
@Mette: Velkommen, Anna. Er du ikke træt? = Benvenuta, Anna. Non sei stanca?
@Anna: Jo, jeg er lidt træt, men meget glad. = Sì, sono un po' stanca, ma molto contenta.
`,
q: `
Come si chiama l'insegnante?|Mette|Anna;Marco
Come sta Marco?|Bene|Male;È molto stanco
Chi è Anna?|L'amica di Marco|La sorella di Marco;Un'altra insegnante
Perché Anna risponde «jo» e non «ja»?|Perché la domanda era negativa|Perché è stanca;Perché parla con l'insegnante
`},
ex: `
c|Jeg ___ Marco.|hedder|chiamarsi
c|Hvordan har du ___?|det
c|Vi ___ venner.|er|essere
c|Hun er ___ træt.|lidt;meget|un po' / molto
m|Come si dice «noi»?|vi|I;de
m|Come si dice «voi»?|I|vi;de
m|Che saluto usi alle nove di sera?|godaften|godmorgen;goddag
m|___ er glad. (lei)|Hun|Han;Hende
m|Er du ikke træt? – ___, jeg er meget træt.|Jo|Ja;Nej|*Jo* risponde «sì» a una domanda negativa.
o|Jeg hedder Anna.|Mi chiamo Anna.
o|Hvad hedder du?|Come ti chiami?
o|Jeg har det godt.|Sto bene.
o|Jeg er lidt træt.|Sono un po' stanco.
t|Grazie mille!|Mange tak;Tusind tak
t|Sono contento.|Jeg er glad
t|Come stai?|Hvordan har du det?;Hvordan går det?
t|Piacere di conoscerti.|Hyggeligt at møde dig;Rart at møde dig
t|Lui è insegnante.|Han er lærer|Con le professioni niente articolo: *han er lærer*.
`
});

COURSE.push({
id: "a1-02", level: "A1", n: 2,
title: "Hvor kommer du fra?",
sub: "Paesi e lingue, il presente dei verbi, le domande",
goals: ["Dire da dove vieni e dove abiti", "Coniugare qualsiasi verbo al presente", "Fare domande sì/no e con hvad, hvor, hvorfor"],
words: `
x|Danmark|Danimarca
x|Italien|Italia
x|Sverige|Svezia
x|Norge|Norvegia
x|Tyskland|Germania
x|England|Inghilterra
x|Spanien|Spagna
x|Frankrig|Francia
x|København|Copenaghen
a|dansk|dansk|danske|-|-|danese
a|italiensk|italiensk|italienske|-|-|italiano
a|engelsk|engelsk|engelske|-|-|inglese
a|tysk|tysk|tyske|-|-|tedesco
a|svensk|svensk|svenske|-|-|svedese
n|en|dansker|danskeren|danskere|danskerne|danese (persona)
n|en|italiener|italieneren|italienere|italienerne|italiano (persona)
n|et|sprog|sproget|sprog|sprogene|lingua
n|et|land|landet|lande|landene|paese, nazione
n|en|by|byen|byer|byerne|città
n|en|hovedstad|hovedstaden|hovedstæder|hovedstæderne|capitale
n|en|sprogskole|sprogskolen|sprogskoler|sprogskolerne|scuola di lingue
n|et|hotel|hotellet|hoteller|hotellerne|albergo
n|et|universitet|universitetet|universiteter|universiteterne|università
v|komme|kommer|kom|kommet|venire|er
v|bo|bor|boede|boet|abitare
v|tale|taler|talte|talt|parlare
v|forstå|forstår|forstod|forstået|capire
v|lære|lærer|lærte|lært|imparare, insegnare
v|læse|læser|læste|læst|leggere; studiare (all'università)
v|arbejde|arbejder|arbejdede|arbejdet|lavorare
v|kunne|kan|kunne|kunnet|potere, sapere (fare)
x|hvor|dove
x|hvorfor|perché (nelle domande)
x|fordi|perché (nelle risposte)
x|fra|da
x|i|in, a
x|på|su, a
x|nu|adesso
x|her|qui
x|der|lì
x|ikke|non
x|langsomt|lentamente
x|igen|di nuovo
x|selvfølgelig|certo, naturalmente
x|Taler du dansk?|Parli danese?
x|Jeg forstår ikke.|Non capisco.
x|Kan du sige det igen?|Puoi ripeterlo?
x|på dansk|in danese
`,
grammar: [
{ h: "Il presente: infinito + r", body: `
Buone notizie: i verbi danesi **non cambiano con la persona**. Il presente si forma aggiungendo *-r* all'infinito.
| infinito | presente |
| *at tale* (parlare) | *jeg / du / han / vi / de taler* |
| *at bo* (abitare) | *jeg bor, du bor…* |
| *at forstå* (capire) | *jeg forstår…* |
Pochi verbi fanno eccezione. I più importanti: *er* (essere), *har* (avere), *gør* (fare), *ved* (sapere), e i verbi modali *kan*, *vil*, *skal*, *må*, che non prendono la -r.
» Jeg taler italiensk. = Parlo italiano.
» Hun bor i København. = Lei abita a Copenaghen.
» Vi kan tale engelsk. = Sappiamo parlare inglese.
! L'infinito si cita con *at* (come il «to» inglese): *at tale*. Dopo i verbi modali però *at* sparisce: *jeg kan tale*.
` },
{ h: "Domande sì/no: il verbo va per primo", body: `
Per fare una domanda basta mettere il verbo prima del soggetto.
» Du taler dansk. = Parli danese.
» Taler du dansk? = Parli danese?
» Bor I i Danmark? = Abitate in Danimarca?
» Forstår du? = Capisci?
` },
{ h: "Le parole interrogative (hv-ord)", body: `
| danese | italiano |
| *hvad* | che cosa |
| *hvem* | chi |
| *hvor* | dove |
| *hvornår* | quando |
| *hvorfor* | perché |
| *hvordan* | come |
| *hvor mange* | quanti |
Dopo la parola interrogativa viene subito il verbo, poi il soggetto.
» Hvor kommer du fra? = Da dove vieni?
» Hvad laver du? = Che cosa fai?
» Hvorfor lærer du dansk? – Fordi jeg bor her. = Perché impari il danese? – Perché abito qui.
! «Perché» ha due parole: *hvorfor* nella domanda, *fordi* nella risposta.
` },
{ h: "Paesi, lingue, nazionalità", body: `
| paese | lingua / aggettivo | persona |
| *Danmark* | *dansk* | *en dansker* |
| *Italien* | *italiensk* | *en italiener* |
| *Tyskland* | *tysk* | *en tysker* |
| *England* | *engelsk* | *en englænder* |
Solo i paesi hanno la maiuscola; lingue e aggettivi si scrivono in minuscolo.
» Jeg er italiener, men jeg taler dansk. = Sono italiano, ma parlo danese.
` },
],
text: {
title: "Nye elever", kind: "Testo e dialogo",
intro: "Marco e Anna, due studenti italiani, raccontano dove vivono. Poi Marco parla con l'insegnante.",
lines: `
Marco er italiener. = Marco è italiano.
Han kommer fra Italien, fra Rom. = Viene dall'Italia, da Roma.
Nu bor han i København. = Adesso abita a Copenaghen.
Han arbejder på et hotel og lærer dansk på en sprogskole. = Lavora in un albergo e impara il danese in una scuola di lingue.
Anna er også italiener, men hun bor i Aarhus. = Anche Anna è italiana, ma abita ad Aarhus.
Hun læser på universitetet. = Studia all'università.
Hun taler italiensk, engelsk og lidt dansk. = Parla italiano, inglese e un po' di danese.

@Mette: Hvorfor lærer du dansk, Marco? = Perché impari il danese, Marco?
@Marco: Fordi jeg bor i Danmark nu. = Perché adesso abito in Danimarca.
@Mette: Forstår du meget? = Capisci molto?
@Marco: Nej, ikke så meget. Kan du tale langsomt? = No, non molto. Puoi parlare lentamente?
@Mette: Ja, selvfølgelig. = Sì, certo.
`,
q: `
Da quale città viene Marco?|Roma|Milano;Aarhus
Dove abita Anna?|Ad Aarhus|A Copenaghen;A Roma
Dove lavora Marco?|In un albergo|All'università;In una scuola di lingue
Perché Marco impara il danese?|Perché adesso abita in Danimarca|Perché lavora in Italia;Perché Anna è danese
`},
ex: `
c|Hvor ___ du fra?|kommer|komme
c|Jeg ___ i København.|bor|bo
c|Hun ___ dansk og engelsk.|taler|tale
c|Vi ___ ikke.|forstår|forstå
c|Han ___ på et hotel.|arbejder|arbejde
c|Jeg ___ tale lidt dansk.|kan|potere / sapere
m|Come si dice «perché» in una risposta?|fordi|hvorfor;hvordan
m|___ du dansk? (Parli danese?)|Taler|Tale;At tale
m|Una persona che viene dalla Danimarca è…|en dansker|en dansk;en Danmark
m|Come si scrive «italiano» (la lingua)?|italiensk|Italiensk;italiener
m|Jeg kan ___ dansk.|tale|taler;at tale|Dopo un verbo modale come *kan* l'infinito va senza *at*.
o|Hvor kommer du fra?|Da dove vieni?
o|Jeg bor i København nu.|Adesso abito a Copenaghen.|Nu bor jeg i København;Jeg bor nu i København
o|Taler du italiensk?|Parli italiano?
o|Hun lærer dansk på en sprogskole.|Lei impara il danese in una scuola di lingue.
t|Non capisco.|Jeg forstår ikke
t|Parli inglese?|Taler du engelsk?;Kan du tale engelsk?
t|Vengo dall'Italia.|Jeg kommer fra Italien
t|Abiti in Danimarca?|Bor du i Danmark?
t|Puoi ripeterlo?|Kan du sige det igen?
`
});

COURSE.push({
id: "a1-03", level: "A1", n: 3,
title: "Min familie",
sub: "La famiglia, i generi en/et e i possessivi",
goals: ["Presentare la tua famiglia", "Scegliere tra en ed et", "Usare min/mit/mine e il genitivo con -s"],
words: `
n|en|familie|familien|familier|familierne|famiglia
n|en|mor|moren|mødre|mødrene|madre
n|en|far|faren|fædre|fædrene|padre
n|en|forælder|forælderen|forældre|forældrene|genitore
n|et|barn|barnet|børn|børnene|bambino, figlio
n|en|søn|sønnen|sønner|sønnerne|figlio (maschio)
n|en|datter|datteren|døtre|døtrene|figlia
n|en|bror|broren|brødre|brødrene|fratello
n|en|søster|søsteren|søstre|søstrene|sorella
x|søskende|fratelli e sorelle
n|en|bedstemor|bedstemoren|bedstemødre|bedstemødrene|nonna
n|en|bedstefar|bedstefaren|bedstefædre|bedstefædrene|nonno
n|en|onkel|onklen|onkler|onklerne|zio
n|en|tante|tanten|tanter|tanterne|zia
n|en|fætter|fætteren|fætre|fætrene|cugino
n|en|kusine|kusinen|kusiner|kusinerne|cugina
n|en|kæreste|kæresten|kærester|kæresterne|fidanzato, fidanzata
n|en|kone|konen|koner|konerne|moglie
n|en|hund|hunden|hunde|hundene|cane
n|en|kat|katten|katte|kattene|gatto
n|et|år|året|år|årene|anno
v|elske|elsker|elskede|elsket|amare, adorare
v|kende|kender|kendte|kendt|conoscere
v|besøge|besøger|besøgte|besøgt|andare a trovare, visitare
v|blive|bliver|blev|blevet|diventare; restare|er
a|gift|gift|gifte|-|-|sposato
a|skilt|skilt|skilte|-|-|divorziato
a|gammel|gammelt|gamle|ældre|ældst|vecchio
a|ung|ungt|unge|yngre|yngst|giovane
a|stor|stort|store|større|størst|grande
a|lille|lille|små|mindre|mindst|piccolo
x|min / mit / mine|mio, mia / miei, mie
x|din / dit / dine|tuo, tua / tuoi, tue
x|hans|suo (di lui)
x|hendes|suo (di lei)
x|vores|nostro
x|jeres|vostro
x|deres|loro
x|tit|spesso
x|dem|li, le, loro (complemento)
x|end|di, che (nei paragoni)
x|Hvor gammel er du?|Quanti anni hai?
x|Har du børn?|Hai figli?
x|Har du søskende?|Hai fratelli o sorelle?
`,
grammar: [
{ h: "Due generi: en ed et", body: `
Ogni sostantivo danese è di genere **comune** (articolo *en*) oppure **neutro** (articolo *et*). Circa tre parole su quattro sono comuni.
| comune | neutro |
| *en mand* (un uomo) | *et barn* (un bambino) |
| *en søster* | *et år* |
| *en hund* | *et navn* |
Non c'è una regola affidabile: il genere non corrisponde al maschile e femminile italiani. Impara sempre la parola insieme all'articolo, come fanno le schede.
! Le persone sono quasi tutte *en*: *en mor, en far, en kone*. Eccezione importante: *et barn*.
` },
{ h: "I possessivi", body: `
*Min*, *din* (mio, tuo) cambiano secondo il sostantivo che segue: *min* con le parole in *en*, *mit* con quelle in *et*, *mine* al plurale.
| | comune | neutro | plurale |
| mio | *min bror* | *mit barn* | *mine børn* |
| tuo | *din bror* | *dit barn* | *dine børn* |
Gli altri non cambiano mai: *hans* (di lui), *hendes* (di lei), *vores* (nostro), *jeres* (vostro), *deres* (loro).
» Min søster hedder Sofie. = Mia sorella si chiama Sofie.
» Mit navn er Marco. = Il mio nome è Marco.
» Mine forældre bor i Rom. = I miei genitori abitano a Roma.
» Hendes mand er dansker. = Suo marito (di lei) è danese.
! Niente articolo davanti al possessivo: «la mia famiglia» è *min familie*.
` },
{ h: "Il genitivo con -s", body: `
Per dire «di qualcuno» si aggiunge *-s* al nome, senza apostrofo, e lo si mette davanti.
» Marcos bror = il fratello di Marco
» Annas forældre = i genitori di Anna
» min mors hund = il cane di mia madre
Se il nome finisce già in *s*, si scrive solo l'apostrofo: *Jonas' familie*.
` },
{ h: "I nonni in danese", body: `
Oltre a *bedstemor* e *bedstefar*, il danese dice esattamente da che parte vengono i nonni:
| | |
| *mormor* | la madre della madre |
| *morfar* | il padre della madre |
| *farmor* | la madre del padre |
| *farfar* | il padre del padre |
` },
{ h: "L'età", body: `
L'età si dice con *være*: «ho 30 anni» = *jeg er 30 år* (gammel).
» Hvor gammel er du? – Jeg er 28 år. = Quanti anni hai? – Ho 28 anni.
` },
],
text: {
title: "Annas familie", kind: "Testo",
intro: "Anna presenta la sua famiglia e quella del suo ragazzo danese.",
lines: `
Jeg hedder Anna, og jeg er 28 år. = Mi chiamo Anna e ho 28 anni.
Min familie bor i Italien, i Bologna. = La mia famiglia abita in Italia, a Bologna.
Min far hedder Paolo, og min mor hedder Giulia. = Mio padre si chiama Paolo e mia madre si chiama Giulia.
Jeg har en bror og en søster. = Ho un fratello e una sorella.
Min bror er 32 år, og han er gift. = Mio fratello ha 32 anni ed è sposato.
Hans kone hedder Sara, og de har to børn, en søn og en datter. = Sua moglie si chiama Sara e hanno due figli, un maschio e una femmina.
Min søster er yngre end mig. Hun er 22 år og læser i Milano. = Mia sorella è più giovane di me. Ha 22 anni e studia a Milano.

Min kæreste hedder Jonas. Han er dansker. = Il mio ragazzo si chiama Jonas. È danese.
Jonas' forældre bor i Odense. = I genitori di Jonas abitano a Odense.
Vi besøger dem tit. = Andiamo spesso a trovarli.
De har en stor hund og to små katte. = Hanno un cane grande e due gatti piccoli.
Jeg elsker deres hund! = Adoro il loro cane!
`,
q: `
Quanti anni ha Anna?|28|22;32
Quanti figli ha il fratello di Anna?|Due|Uno;Nessuno
Dove abitano i genitori di Jonas?|A Odense|A Bologna;A Copenaghen
Che animali hanno i genitori di Jonas?|Un cane e due gatti|Due cani e un gatto;Solo un gatto
`},
ex: `
m|___ barn|et|en
m|___ søster|en|et
m|___ år|et|en
c|___ bror hedder Luca.|Min|mio
c|___ barn er fem år.|Mit|mio
c|___ forældre bor i Rom.|Mine|miei
c|Min bror er gift. ___ kone hedder Sara.|Hans|suo (di lui)
c|Anna har en hund. ___ hund hedder Bobby.|Hendes|suo (di lei)
m|«Il fratello di Marco» si dice…|Marcos bror|Marco bror;Marco's bror
m|La madre di tua madre è tua…|mormor|farmor;morfar
m|Hun har to ___.|børn|barn;barner
m|Er du gift? – Nej, jeg er ___.|skilt|glad;gammel
o|Min søster bor i Milano.|Mia sorella abita a Milano.
o|Hvor gammel er din far?|Quanti anni ha tuo padre?
o|Vi har en hund og to katte.|Abbiamo un cane e due gatti.
t|Ho un fratello.|Jeg har en bror
t|Mia madre si chiama Giulia.|Min mor hedder Giulia
t|Hai figli?|Har du børn?
t|Il mio nome è Marco.|Mit navn er Marco;Jeg hedder Marco
t|Ho 30 anni.|Jeg er 30 år;Jeg er tredive år;Jeg er 30 år gammel;Jeg er tredive år gammel
`
});

COURSE.push({
id: "a1-04", level: "A1", n: 4,
title: "Tal og tid",
sub: "Numeri, ore, giorni, mesi e date",
goals: ["Contare fino a mille, anche con le «ventine» danesi", "Chiedere e dire l'ora", "Dire giorni, mesi e date"],
words: `
x|nul|zero
x|en / et|uno
x|to|due
x|tre|tre
x|fire|quattro
x|fem|cinque
x|seks|sei
x|syv|sette
x|otte|otto
x|ni|nove
x|ti|dieci
x|elleve|undici
x|tolv|dodici
x|tretten|tredici
x|fjorten|quattordici
x|femten|quindici
x|seksten|sedici
x|sytten|diciassette
x|atten|diciotto
x|nitten|diciannove
x|tyve|venti
x|tredive|trenta
x|fyrre|quaranta
x|halvtreds|cinquanta
x|tres|sessanta
x|halvfjerds|settanta
x|firs|ottanta
x|halvfems|novanta
x|hundrede|cento
x|tusind|mille
x|mandag|lunedì
x|tirsdag|martedì
x|onsdag|mercoledì
x|torsdag|giovedì
x|fredag|venerdì
x|lørdag|sabato
x|søndag|domenica
x|januar|gennaio
x|februar|febbraio
x|marts|marzo
x|april|aprile
x|maj|maggio
x|juni|giugno
x|juli|luglio
x|august|agosto
x|september|settembre
x|oktober|ottobre
x|november|novembre
x|december|dicembre
n|en|time|timen|timer|timerne|ora (60 minuti); lezione
n|et|minut|minuttet|minutter|minutterne|minuto
n|et|kvarter|kvarteret|kvarterer|kvartererne|quarto d'ora; quartiere
n|en|uge|ugen|uger|ugerne|settimana
n|en|måned|måneden|måneder|månederne|mese
n|en|weekend|weekenden|weekender|weekenderne|fine settimana
n|en|eftermiddag|eftermiddagen|eftermiddage|eftermiddagene|pomeriggio
n|en|fødselsdag|fødselsdagen|fødselsdage|fødselsdagene|compleanno
n|en|fest|festen|fester|festerne|festa
n|en|tid|tiden|tider|tiderne|tempo; orario
n|et|tog|toget|tog|togene|treno
v|tage|tager|tog|taget|prendere
x|klokken|l'ora (klokken tre = alle tre)
x|Hvad er klokken?|Che ore sono?
x|halv|mezzo (halv fire = le tre e mezza)
x|kvart over|e un quarto
x|kvart i|meno un quarto
x|før|prima (di)
x|i dag|oggi
x|i morgen|domani
x|i går|ieri
x|første|primo
x|anden|secondo
x|tredje|terzo
x|tillykke|auguri, congratulazioni
x|altså|cioè, dunque
x|cirka|circa
x|Hvor lang tid tager det?|Quanto tempo ci vuole?
`,
grammar: [
{ h: "I numeri fino a 20", body: `
0 *nul*, 1 *en/et*, 2 *to*, 3 *tre*, 4 *fire*, 5 *fem*, 6 *seks*, 7 *syv*, 8 *otte*, 9 *ni*, 10 *ti*, 11 *elleve*, 12 *tolv*, 13 *tretten*, 14 *fjorten*, 15 *femten*, 16 *seksten*, 17 *sytten*, 18 *atten*, 19 *nitten*, 20 *tyve*.
«Uno» si accorda con il sostantivo: *en time*, *et minut*.
` },
{ h: "Le decine: si conta a ventine", body: `
Da 50 a 90 il danese usa un antico sistema a base 20. Non serve capirlo per usarlo, ma aiuta a ricordare.
| | danese | logica |
| 30 | *tredive* | |
| 40 | *fyrre* | |
| 50 | *halvtreds* | 2½ × 20 (letteralmente «mezzo terzo») |
| 60 | *tres* | 3 × 20 |
| 70 | *halvfjerds* | 3½ × 20 |
| 80 | *firs* | 4 × 20 |
| 90 | *halvfems* | 4½ × 20 |
` },
{ h: "I numeri composti: prima l'unità", body: `
Come nella filastrocca «ventiquattro merli», ma al contrario: le unità vengono prima, unite da *og* (e).
» enogtyve = 21 («uno e venti»)
» femogtredive = 35
» otteoghalvfems = 98
» to tusind seksogtyve = 2026
! *Hundrede* e *tusind* spesso prendono l'articolo: *(et) hundrede*, *(et) tusind*. 250 = *to hundrede og halvtreds*.
` },
{ h: "L'ora", body: `
» Hvad er klokken? = Che ore sono?
» Klokken er tre. = Sono le tre.
| | |
| 3:05 | *fem minutter over tre* |
| 3:15 | *kvart over tre* |
| 3:30 | *halv fire* |
| 3:45 | *kvart i fire* |
| 3:50 | *ti minutter i fire* |
! *Halv fire* significa 3:30, non 4:30: si conta la mezz'ora **verso** l'ora successiva.
Negli orari ufficiali (treni, negozi) si usano le 24 ore: *klokken 15.30* = «femten tredive».
` },
{ h: "Giorni, mesi e date", body: `
Giorni e mesi si scrivono **minuscoli**.
- *på mandag* = lunedì (il prossimo)
- *om mandagen* = il lunedì (ogni lunedì)
- *i januar* = a gennaio
Per le date si usano gli ordinali: *første, anden, tredje, fjerde, femte, sjette, syvende, ottende, niende, tiende*. Per iscritto: *den 3. marts*.
» Min fødselsdag er den tredje marts. = Il mio compleanno è il 3 marzo.
» I dag er det fredag den femte maj. = Oggi è venerdì 5 maggio.
` },
],
text: {
title: "Hvornår er festen?", kind: "Dialogo",
intro: "Jonas invita Anna alla festa di compleanno di sua madre a Odense.",
lines: `
@Jonas: Hej Anna! Har du tid på lørdag? = Ciao Anna! Hai tempo sabato?
@Anna: Ja, om eftermiddagen. Hvorfor? = Sì, nel pomeriggio. Perché?
@Jonas: Min mor har fødselsdag. Hun bliver tres år. = Mia madre compie gli anni. Compie sessant'anni.
@Anna: Tillykke til hende! Hvornår er festen? = Auguri a lei! Quando è la festa?
@Jonas: Klokken halv fire. = Alle tre e mezza.
@Anna: Halv fire? Er det 16.30? = Tre e mezza? Cioè le 16:30?
@Jonas: Nej, 15.30. Halv fire er en halv time før fire. = No, le 15:30. «Halv fire» è mezz'ora prima delle quattro.
@Anna: Okay. Og hvor lang tid tager toget til Odense? = Ok. E quanto ci mette il treno per Odense?
@Jonas: Cirka en time og et kvarter. = Circa un'ora e un quarto.
@Anna: Godt. Så tager vi toget klokken tolv. = Bene. Allora prendiamo il treno delle dodici.
`,
q: `
Quando è la festa?|Sabato alle 15:30|Sabato alle 16:30;Domenica alle 15:15
Quanti anni compie la madre di Jonas?|60|70;50
Quanto dura il viaggio in treno per Odense?|Circa un'ora e un quarto|Circa mezz'ora;Circa tre ore
`},
ex: `
m|25 =|femogtyve|tyvefem;fem tyve
m|50 =|halvtreds|femti;fyrre
m|70 =|halvfjerds|syvti;tres
m|«halv fire» =|3:30|4:30;3:15
m|«kvart i fire» =|3:45|4:15;3:15
c|Klokken er ___ over tre. (3:15)|kvart
c|I dag er det mandag, i morgen er det ___.|tirsdag
c|Januar, februar, ___, april.|marts
c|Hvad er ___? (Che ore sono?)|klokken
c|Der er syv dage i en ___.|uge
m|Il 3 maggio si dice…|den tredje maj|den tre maj;tredje den maj
m|Come si scrivono i mesi in danese?|con la minuscola|con la maiuscola
o|Hvad er klokken nu?|Che ore sono adesso?
o|Festen er klokken halv fire.|La festa è alle tre e mezza.|Klokken halv fire er festen
o|Hvornår har du fødselsdag?|Quando compi gli anni?
t|Oggi è venerdì.|I dag er det fredag;Det er fredag i dag
t|Sono le otto.|Klokken er otte;Den er otte
t|Il mio compleanno è a maggio.|Min fødselsdag er i maj;Jeg har fødselsdag i maj
t|Quanto tempo ci vuole?|Hvor lang tid tager det?
`
});

COURSE.push({
id: "a1-05", level: "A1", n: 5,
title: "Mad og drikke",
sub: "Cibo e bevande, il plurale dei sostantivi, ordinare al bar",
goals: ["Ordinare al bar e al ristorante", "Formare il plurale dei sostantivi", "Usare «jeg vil gerne have»"],
words: `
n|et|brød|brødet|brød|brødene|pane
n|et|rugbrød|rugbrødet|rugbrød|rugbrødene|pane di segale
n|et|smørrebrød|smørrebrødet|smørrebrød|smørrebrødene|tartina danese
n|en|ost|osten|oste|ostene|formaggio
n|et|smør|smørret|-|-|burro
n|et|æg|ægget|æg|æggene|uovo
n|et|æble|æblet|æbler|æblerne|mela
n|en|banan|bananen|bananer|bananerne|banana
n|en|appelsin|appelsinen|appelsiner|appelsinerne|arancia
n|en|tomat|tomaten|tomater|tomaterne|pomodoro
n|en|kartoffel|kartoflen|kartofler|kartoflerne|patata
n|en|gulerod|guleroden|gulerødder|gulerødderne|carota
n|en|fisk|fisken|fisk|fiskene|pesce
n|et|kød|kødet|-|-|carne
n|en|kylling|kyllingen|kyllinger|kyllingerne|pollo
n|en|pølse|pølsen|pølser|pølserne|salsiccia, würstel
n|en|kage|kagen|kager|kagerne|torta, dolce
n|et|sukker|sukkeret|-|-|zucchero
n|et|vand|vandet|-|-|acqua
n|en|kaffe|kaffen|-|-|caffè
n|en|te|teen|-|-|tè
n|en|mælk|mælken|-|-|latte
n|en|øl|øllen|øl|øllene|birra
n|en|vin|vinen|vine|vinene|vino
n|et|glas|glasset|glas|glassene|bicchiere
n|en|kop|koppen|kopper|kopperne|tazza
n|en|flaske|flasken|flasker|flaskerne|bottiglia
n|et|stykke|stykket|stykker|stykkerne|pezzo, fetta
n|en|tallerken|tallerkenen|tallerkener|tallerkenerne|piatto
n|en|kniv|kniven|knive|knivene|coltello
n|en|gaffel|gaflen|gafler|gaflerne|forchetta
n|en|ske|skeen|skeer|skeerne|cucchiaio
n|en|morgenmad|morgenmaden|-|-|colazione
n|en|frokost|frokosten|frokoster|frokosterne|pranzo
n|en|aftensmad|aftensmaden|-|-|cena
n|en|mad|maden|-|-|cibo
n|en|café|caféen|caféer|caféerne|bar, caffè (locale)
n|en|tjener|tjeneren|tjenere|tjenerne|cameriere
n|en|regning|regningen|regninger|regningerne|conto
n|en|krone|kronen|kroner|kronerne|corona (moneta)
v|spise|spiser|spiste|spist|mangiare
v|drikke|drikker|drak|drukket|bere
v|ville|vil|ville|villet|volere
v|bestille|bestiller|bestilte|bestilt|ordinare, prenotare
v|betale|betaler|betalte|betalt|pagare
v|smage|smager|smagte|smagt|assaggiare; avere sapore
a|sulten|sultent|sultne|-|-|affamato
a|tørstig|tørstigt|tørstige|-|-|assetato
a|lækker|lækkert|lækre|lækrere|lækrest|delizioso
x|gerne|volentieri
x|Jeg vil gerne have …|Vorrei …
x|Hvad skal det være?|Cosa prende? (al bar)
x|Må jeg bede om regningen?|Posso avere il conto?
x|Skål!|Salute! (brindisi)
x|Velbekomme!|Buon appetito! / Prego (dopo il pasto)
x|Tak for mad.|Grazie per il pasto.
x|med|con
x|uden|senza
x|noget|qualcosa; un po' di
x|for eksempel|per esempio
x|i aften|stasera
`,
grammar: [
{ h: "Il plurale dei sostantivi", body: `
Il plurale ha tre desinenze principali:
| desinenza | singolare | plurale |
| **-er** | *en tomat* | *tomater* |
| **-r** (parole in -e) | *en kage*, *et æble* | *kager*, *æbler* |
| **-e** | *en dag*, *et land* | *dage*, *lande* |
| **nessuna** | *et æg*, *et glas*, *en fisk* | *æg*, *glas*, *fisk* |
Qualche regola orientativa:
- le parole che finiscono in *-e* aggiungono *-r*: *en pølse → pølser*;
- molte parole *et* di una sillaba non cambiano: *et år → år*, *et brød → brød*;
- molte parole *en* di più sillabe prendono *-er*: *en kartoffel → kartofler*.
Alcuni plurali cambiano vocale: *en mand → mænd*, *et barn → børn*, *en bror → brødre*, *en gulerod → gulerødder*.
! Il plurale va imparato con la parola: per questo le schede mostrano sempre tutte le forme.
` },
{ h: "«Vorrei»: jeg vil gerne have", body: `
*Gerne* significa «volentieri». Con *vil* (voglio) diventa il modo cortese di chiedere.
» Jeg vil gerne have en kop kaffe. = Vorrei una tazza di caffè.
» Vi vil gerne have to øl. = Vorremmo due birre.
» Jeg spiser gerne fisk. = Mangio volentieri il pesce.
Più semplicemente, al bar basta anche *En kaffe, tak*.
` },
{ h: "Quantità: senza «di»", body: `
Dopo le parole di quantità il danese non usa preposizioni.
» en kop kaffe = una tazza di caffè
» et glas vand = un bicchiere d'acqua
» en flaske vin = una bottiglia di vino
» et stykke kage = una fetta di torta
` },
{ h: "Parole per la tavola", body: `
- *Skål!* per brindare, guardando negli occhi.
- *Velbekomme!* si dice all'inizio del pasto («buon appetito») e come risposta a *tak for mad*.
- *Tak for mad* si dice alla fine, a chi ha cucinato o offerto. Dimenticarlo è considerato scortese.
` },
],
text: {
title: "På café", kind: "Dialogo",
intro: "Anna e Marco sono in un bar di Copenaghen.",
lines: `
@Tjeneren: Hej! Hvad skal det være? = Ciao! Cosa prendete?
@Anna: Jeg vil gerne have en kop kaffe med mælk. = Vorrei una tazza di caffè con latte.
@Marco: Og jeg vil gerne have en te uden sukker. = E io vorrei un tè senza zucchero.
@Tjeneren: Skal I have noget at spise? = Volete qualcosa da mangiare?
@Marco: Ja, jeg er sulten. Hvad er et smørrebrød? = Sì, ho fame. Che cos'è uno smørrebrød?
@Tjeneren: Det er rugbrød med for eksempel fisk, æg eller ost. = È pane di segale con sopra, per esempio, pesce, uova o formaggio.
@Marco: Lækkert. Så vil jeg gerne have to smørrebrød med fisk. = Buono. Allora vorrei due smørrebrød con il pesce.
@Anna: Og et stykke kage til mig, tak. = E una fetta di torta per me, grazie.

@Marco: Mmm, det smager godt! = Mmm, è buono!
@Anna: Må vi bede om regningen? = Possiamo avere il conto?
@Tjeneren: Selvfølgelig. Det bliver 245 kroner. = Certo. Sono 245 corone.
`,
q: `
Che cosa prende Anna da bere?|Un caffè con latte|Un tè senza zucchero;Una birra
Che cos'è lo smørrebrød?|Pane di segale con qualcosa sopra|Una torta danese;Un tipo di pesce
Quanti smørrebrød ordina Marco?|Due|Uno;Tre
Quanto pagano?|245 corone|145 corone;254 corone
`},
ex: `
c|Jeg vil ___ have en kop kaffe.|gerne
c|en tomat, to ___|tomater
c|et æg, tre ___|æg
c|en kage, mange ___|kager
c|et æble, to ___|æbler
c|en mand, to ___|mænd
m|Qual è il plurale di «et barn»?|børn|barner;barne
m|Qual è il plurale di «en dag»?|dage|dager;dag
m|Che cosa dici a chi ha cucinato, alla fine del pasto?|Tak for mad.|Velbekomme.;Skål!
m|«Un bicchiere d'acqua» si dice…|et glas vand|et glas af vand;en glas vand
c|Hun ___ ikke kød.|spiser|mangiare
c|Vi ___ vin til maden.|drikker|bere
o|Jeg vil gerne have et glas vand.|Vorrei un bicchiere d'acqua.
o|Må jeg bede om regningen?|Posso avere il conto?
o|Vi spiser fisk i aften.|Stasera mangiamo pesce.|I aften spiser vi fisk
t|Vorrei una birra, grazie.|Jeg vil gerne have en øl, tak;Jeg vil gerne bede om en øl, tak;En øl, tak
t|Ho fame.|Jeg er sulten
t|È buonissimo!|Det er lækkert;Det smager godt;Det er meget lækkert
t|Un caffè senza latte.|En kaffe uden mælk;En kop kaffe uden mælk
`
});
