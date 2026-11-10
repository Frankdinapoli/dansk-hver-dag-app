/* Livello B1 · unità 1–5 (formato: vedi a1a.js). Da qui le domande sui testi sono in danese. */
COURSE.push({
id: "b1-01", level: "B1", n: 1,
title: "Uddannelse",
sub: "Scuola e università in Danimarca, le frasi relative, synes/tror/tænker",
goals: ["Descrivere il tuo percorso di studi", "Costruire frasi relative con som, der, hvor, hvis", "Esprimere opinioni con synes, tror, mener"],
words: `
n|en|uddannelse|uddannelsen|uddannelser|uddannelserne|formazione, percorso di studi
n|en|folkeskole|folkeskolen|folkeskoler|folkeskolerne|scuola dell'obbligo (6–16 anni)
n|et|gymnasium|gymnasiet|gymnasier|gymnasierne|liceo
n|en|erhvervsuddannelse|erhvervsuddannelsen|erhvervsuddannelser|erhvervsuddannelserne|formazione professionale
n|en|efterskole|efterskolen|efterskoler|efterskolerne|collegio per ragazzi (14–18 anni)
n|en|højskole|højskolen|højskoler|højskolerne|scuola popolare per adulti
n|en|elev|eleven|elever|eleverne|alunno, studente
x|en studerende|uno studente universitario
n|et|studie|studiet|studier|studierne|corso di laurea
n|et|fag|faget|fag|fagene|materia; mestiere
n|en|eksamen|eksamenen|eksamener|eksamenerne|esame
n|en|karakter|karakteren|karakterer|karaktererne|voto; carattere
n|en|prøve|prøven|prøver|prøverne|prova, test
n|et|kursus|kurset|kurser|kurserne|corso
n|en|forelæsning|forelæsningen|forelæsninger|forelæsningerne|lezione universitaria
n|en|underviser|underviseren|undervisere|underviserne|docente
n|en|undervisning|undervisningen|-|-|insegnamento, lezioni
n|en|professor|professoren|professorer|professorerne|professore
n|et|projekt|projektet|projekter|projekterne|progetto
n|en|gruppe|gruppen|grupper|grupperne|gruppo
n|et|semester|semestret|semestre|semestrene|semestre
n|en|bachelor|bacheloren|bachelorer|bachelorerne|laurea triennale
n|en|kandidat|kandidaten|kandidater|kandidaterne|laurea magistrale; candidato
x|SU|contributo statale per gli studenti
n|en|støtte|støtten|-|-|sostegno, contributo
n|en|stat|staten|stater|staterne|Stato
n|en|viden|viden|-|-|conoscenza, sapere
n|en|erfaring|erfaringen|erfaringer|erfaringerne|esperienza (pratica)
n|en|evne|evnen|evner|evnerne|capacità
n|et|mål|målet|mål|målene|obiettivo; traguardo
n|en|mulighed|muligheden|muligheder|mulighederne|possibilità
n|et|krav|kravet|krav|kravene|requisito
n|en|økonomi|økonomien|-|-|economia
n|et|fornavn|fornavnet|fornavne|fornavnene|nome di battesimo
v|undervise|underviser|underviste|undervist|insegnare
v|studere|studerer|studerede|studeret|studiare (all'università)
v|bestå|består|bestod|bestået|superare (un esame); (bestå af) consistere in
v|dumpe|dumper|dumpede|dumpet|essere bocciato
v|forberede|forbereder|forberedte|forberedt|preparare (forberede sig = prepararsi)
v|diskutere|diskuterer|diskuterede|diskuteret|discutere
v|aflevere|afleverer|afleverede|afleveret|consegnare
v|gentage|gentager|gentog|gentaget|ripetere
v|udvikle|udvikler|udviklede|udviklet|sviluppare
v|opnå|opnår|opnåede|opnået|ottenere, raggiungere
v|kræve|kræver|krævede|krævet|richiedere, esigere
v|forvente|forventer|forventede|forventet|aspettarsi
v|synes|synes|syntes|syntes|trovare, pensare (opinione)
v|kalde|kalder|kaldte|kaldt|chiamare
a|faglig|fagligt|faglige|-|-|disciplinare, professionale
a|gratis|gratis|gratis|-|-|gratuito
a|obligatorisk|obligatorisk|obligatoriske|-|-|obbligatorio
a|frivillig|frivilligt|frivillige|-|-|volontario, facoltativo
a|kritisk|kritisk|kritiske|mere kritisk|mest kritisk|critico
a|mundtlig|mundtligt|mundtlige|-|-|orale
a|skriftlig|skriftligt|skriftlige|-|-|scritto
a|anderledes|anderledes|anderledes|-|-|diverso
a|mærkelig|mærkeligt|mærkelige|mærkeligere|mærkeligst|strano
x|som|che (pronome relativo)
x|hvilket|il che
x|desuden|inoltre
x|betale tilbage|restituire (soldi)
x|i starten|all'inizio
x|søge ind på|fare domanda di ammissione a
`,
grammar: [
{ h: "Le frasi relative: som e der", body: `
Il pronome relativo «che» ha due forme:
- **som**: sia soggetto sia oggetto;
- **der**: solo soggetto.
| funzione | esempio |
| soggetto | *Læreren, som / der underviser os, er dansk.* |
| oggetto | *Bogen, som jeg læser, er svær.* |
| oggetto, senza pronome | *Bogen, jeg læser, er svær.* |
Quando il relativo è oggetto si può omettere, come in inglese («the book I read»). Quando è soggetto no.
» Filmen, vi så i går, var god. = Il film che abbiamo visto ieri era bello.
» Jeg har en ven, der bor i Aarhus. = Ho un amico che abita ad Aarhus.
La relativa segue l'ordine delle secondarie: *ikke* prima del verbo.
» Det er en elev, som ikke laver lektier. = È un alunno che non fa i compiti.
` },
{ h: "La preposizione va in fondo", body: `
Dove l'italiano dice «in cui», «con cui», il danese mette la preposizione **alla fine** della relativa.
» Byen, som jeg bor i, er lille. = La città in cui abito è piccola.
» Det er den pige, jeg talte med. = È la ragazza con cui ho parlato.
» Det er den skole, min søn går på. = È la scuola che frequenta mio figlio.
` },
{ h: "Hvor, hvis, hvilket", body: `
- **hvor** = dove, in cui (luoghi e momenti): *Byen, hvor jeg er født…*; *Den dag, hvor vi mødtes…*
- **hvis** = il cui, la cui (registro scritto): *Studenten, hvis opgave var bedst, fik en pris.*
- **hvilket** = il che, riferito a tutta la frase: *Han bestod eksamen, hvilket overraskede alle.*
` },
{ h: "Synes, tror, tænker, mener", body: `
L'italiano dice «penso» in tutti questi casi; il danese distingue:
| verbo | uso | esempio |
| *synes* | gusto, opinione personale | *Jeg synes, filmen er god.* |
| *tro* | credere, supporre (non sei sicuro) | *Jeg tror, det regner i morgen.* |
| *tænke* | l'attività del pensare | *Jeg tænker på dig.* |
| *mene* | opinione argomentata | *Jeg mener, at skatten er for høj.* |
! *Jeg tænker, at…* per dare un'opinione è diffuso nel parlato, ma *synes* e *tror* restano le scelte più sicure.
` },
{ h: "Il sistema scolastico e i voti", body: `
*Folkeskole* (dalla classe 0 alla 9 o 10) → *gymnasium* (3 anni) o *erhvervsuddannelse* → università: *bachelor* (3 anni) e *kandidat* (2 anni). L'università è gratuita e gli studenti ricevono la *SU*.
I voti usano la scala a sette gradini:
| voto | significato |
| *12* | eccellente |
| *10* | molto buono |
| *7* | buono |
| *4* | discreto |
| *02* | sufficiente (il minimo per passare) |
| *00* | insufficiente |
| *-3* | del tutto inaccettabile |
` },
],
text: {
title: "At studere i Danmark", kind: "Articolo con intervista",
intro: "Come funziona l'istruzione in Danimarca, e cosa ne pensa Anna, che studia ad Aarhus.",
lines: `
I Danmark er uddannelse gratis, også på universitetet. = In Danimarca l'istruzione è gratuita, anche all'università.
Studerende, som er over 18 år, kan desuden få SU, en støtte fra staten, som de ikke skal betale tilbage. = Gli studenti che hanno più di 18 anni possono inoltre ricevere la SU, un contributo dello Stato che non devono restituire.
De fleste børn går i folkeskole, fra de er seks år, til de er femten eller seksten. = La maggior parte dei bambini frequenta la folkeskole dai sei ai quindici o sedici anni.
Mange unge tager et år på efterskole, hvor de bor sammen med andre elever. = Molti ragazzi passano un anno in una efterskole, dove vivono insieme ad altri studenti.
Efter folkeskolen kan man vælge mellem gymnasiet og en erhvervsuddannelse, hvor man lærer et fag, for eksempel som elektriker eller kok. = Dopo la folkeskole si può scegliere tra il liceo e una formazione professionale, in cui si impara un mestiere, per esempio da elettricista o da cuoco.

Anna, som læser økonomi på Aarhus Universitet, synes, at undervisningen er meget anderledes end i Italien. = Anna, che studia economia all'Università di Aarhus, trova che l'insegnamento sia molto diverso da quello italiano.
Her arbejder vi meget i grupper, og underviserne forventer, at vi diskuterer og er kritiske, siger hun. = «Qui lavoriamo molto in gruppo, e i docenti si aspettano che discutiamo e siamo critici», dice.
Den første eksamen, jeg tog, var et projekt, som vi skrev i en gruppe på fire. = «Il primo esame che ho dato era un progetto che abbiamo scritto in un gruppo di quattro.»
Man siger du til professorerne og kalder dem ved fornavn. Det var mærkeligt i starten. = «Si dà del tu ai professori e li si chiama per nome. All'inizio era strano.»
Hun fik 10 til sin sidste eksamen, hvilket hun er meget stolt af. = All'ultimo esame ha preso 10, cosa di cui è molto orgogliosa.
I Danmark er 12 den bedste karakter, så 10 er rigtig godt, forklarer hun. = «In Danimarca 12 è il voto più alto, quindi 10 è davvero buono», spiega.
`,
q: `
Hvad koster det at læse på universitetet i Danmark?|Det er gratis.|Det koster 1.000 kroner om måneden.;Det er gratis, men kun for danskere.
Hvad er SU?|Økonomisk støtte fra staten til studerende|Et lån, som man skal betale tilbage;En eksamen på universitetet
Hvad er en efterskole?|En skole, hvor unge bor sammen i et år|En skole for voksne;En skole efter arbejdstid
Hvad synes Anna var mærkeligt i starten?|At man kalder professorerne ved fornavn|At undervisningen er gratis;At eksamenerne er mundtlige
Hvorfor er Anna stolt?|Hun fik 10 til sin sidste eksamen|Hun fik 12 til alle eksamener;Hun bestod sin første eksamen
`},
ex: `
c|Læreren, ___ underviser os, er meget dygtig.|som;der
m|Bogen, ___ jeg læser, er svær.|som|der;hvem|Quando il relativo è oggetto si usa *som* (o niente), mai *der*.
m|Byen, ___ jeg er født, er lille.|hvor|som;hvis
m|Han bestod eksamen, ___ overraskede alle.|hvilket|som;der
m|Studenten, ___ opgave var bedst, fik en pris.|hvis|som;hvilken
m|Jeg har en ven, som ___ dansk.|ikke taler|taler ikke;ikke tale
c|Det er den skole, som min søn går ___.|på
c|Det er pigen, jeg talte ___ i går.|med
m|Qual è il voto minimo per superare un esame danese?|02|4;00
c|Hun ___ sin eksamen med 12.|bestod|superare
c|Han ___ til eksamen og skal prøve igen.|dumpede|essere bocciato
m|Jeg ___, at filmen er kedelig. (opinione personale)|synes|tror;tænker
m|Jeg ___, at det regner i morgen. (non ne sono sicuro)|tror|synes;tænker på
o|Filmen, vi så i går, var rigtig god.|Il film che abbiamo visto ieri era molto bello.
o|Det er den by, jeg bor i.|È la città in cui abito.
o|Kvinden, der bor ved siden af, er lærer.|La donna che abita accanto è insegnante.
t|Il libro che leggo è in danese.|Bogen, som jeg læser, er på dansk;Bogen, jeg læser, er på dansk
t|Ho un'amica che studia medicina.|Jeg har en veninde, som læser medicin;Jeg har en veninde, der læser medicin;Jeg har en veninde, som studerer medicin;Jeg har en veninde, der studerer medicin
t|Ha superato l'esame.|Han bestod eksamen;Hun bestod eksamen;Han har bestået eksamen;Hun har bestået eksamen;Han bestod eksamenen;Hun bestod eksamenen
t|Penso che tu abbia ragione.|Jeg tror, at du har ret;Jeg tror, du har ret;Jeg synes, at du har ret;Jeg synes, du har ret
`
});

COURSE.push({
id: "b1-02", level: "B1", n: 2,
title: "Jobsøgning",
sub: "Cercare lavoro, la lettera di candidatura, il trapassato",
goals: ["Scrivere una lettera di candidatura in danese", "Usare il trapassato: havde + participio", "Mettere in sequenza gli eventi con før, efter at, inden"],
words: `
n|en|jobannonce|jobannoncen|jobannoncer|jobannoncerne|annuncio di lavoro
n|en|stilling|stillingen|stillinger|stillingerne|posizione, posto di lavoro
x|et CV|un curriculum
n|en|jobsamtale|jobsamtalen|jobsamtaler|jobsamtalerne|colloquio di lavoro
n|en|arbejdsgiver|arbejdsgiveren|arbejdsgivere|arbejdsgiverne|datore di lavoro
n|en|kvalifikation|kvalifikationen|kvalifikationer|kvalifikationerne|qualifica
n|en|kompetence|kompetencen|kompetencer|kompetencerne|competenza
n|en|reference|referencen|referencer|referencerne|referenza
n|en|praktik|praktikken|-|-|tirocinio
n|en|prøvetid|prøvetiden|-|-|periodo di prova
n|en|opsigelse|opsigelsen|opsigelser|opsigelserne|licenziamento; dimissioni
n|en|fagforening|fagforeningen|fagforeninger|fagforeningerne|sindacato
n|en|a-kasse|a-kassen|a-kasser|a-kasserne|cassa di disoccupazione
n|en|ledighed|ledigheden|-|-|disoccupazione
n|en|branche|branchen|brancher|brancherne|settore
n|en|styrke|styrken|styrker|styrkerne|punto di forza; forza
n|en|svaghed|svagheden|svagheder|svaghederne|debolezza
n|en|udfordring|udfordringen|udfordringer|udfordringerne|sfida
n|et|ansvar|ansvaret|-|-|responsabilità
n|en|leder|lederen|ledere|lederne|dirigente, responsabile
n|en|afdeling|afdelingen|afdelinger|afdelingerne|reparto
n|en|souschef|souschefen|souschefer|souscheferne|sous-chef, vice
n|en|menu|menuen|menuer|menuerne|menù
n|et|humør|humøret|-|-|umore
n|et|fokus|fokusset|-|-|attenzione, focus
n|en|råvare|råvaren|råvarer|råvarerne|materia prima
v|ansøge|ansøger|ansøgte|ansøgt|fare domanda
v|afslutte|afslutter|afsluttede|afsluttet|concludere, terminare
v|beskrive|beskriver|beskrev|beskrevet|descrivere
v|motivere|motiverer|motiverede|motiveret|motivare
v|bidrage|bidrager|bidrog|bidraget|contribuire
v|forhandle|forhandler|forhandlede|forhandlet|negoziare
v|tilbyde|tilbyder|tilbød|tilbudt|offrire
v|indkalde|indkalder|indkaldte|indkaldt|convocare
v|nævne|nævner|nævnte|nævnt|menzionare
v|oplære|oplærer|oplærte|oplært|formare, addestrare
x|sige op|licenziarsi, dare le dimissioni
x|blive fyret|essere licenziato
x|god til at|bravo a
x|se frem til|attendere con piacere
x|der er travlt|c'è molto da fare
a|relevant|relevant|relevante|mere relevant|mest relevant|pertinente
a|erfaren|erfarent|erfarne|mere erfaren|mest erfaren|esperto
a|fleksibel|fleksibelt|fleksible|mere fleksibel|mest fleksibel|flessibile
a|ansvarlig|ansvarligt|ansvarlige|mere ansvarlig|mest ansvarlig|responsabile
a|engageret|engageret|engagerede|mere engageret|mest engageret|motivato, impegnato
a|struktureret|struktureret|strukturerede|mere struktureret|mest struktureret|organizzato
a|tidligere|tidligere|tidligere|-|-|precedente, ex
a|fast|fast|faste|-|-|fisso, stabile
a|midlertidig|midlertidigt|midlertidige|-|-|temporaneo
a|lokal|lokalt|lokale|-|-|locale
a|økologisk|økologisk|økologiske|-|-|biologico
x|Med venlig hilsen|Cordiali saluti
x|hermed|con la presente
x|på forhånd|in anticipo
x|efter at|dopo che
x|i forvejen|già, in precedenza
`,
grammar: [
{ h: "Il trapassato: havde + participio", body: `
Il trapassato (*førdatid*) indica un'azione avvenuta **prima** di un altro momento passato. Si forma come in italiano: *havde* (o *var* per i verbi che usano *er*) + participio.
» Da jeg kom til Danmark, havde jeg allerede lært lidt dansk. = Quando sono arrivato in Danimarca avevo già imparato un po' di danese.
» Hun var træt, fordi hun havde arbejdet hele natten. = Era stanca perché aveva lavorato tutta la notte.
» Toget var kørt, da vi kom. = Il treno era partito quando siamo arrivati.
` },
{ h: "I quattro tempi a confronto", body: `
| | *spise* | *gå* |
| presente (*nutid*) | *spiser* | *går* |
| passato (*datid*) | *spiste* | *gik* |
| passato prossimo (*førnutid*) | *har spist* | *er gået* |
| trapassato (*førdatid*) | *havde spist* | *var gået* |
Nelle lettere e nel CV:
» Jeg har arbejdet som kok siden 2018. = Lavoro come cuoco dal 2018 (e continuo).
» Fra 2015 til 2018 arbejdede jeg i Rom. = Dal 2015 al 2018 ho lavorato a Roma (concluso).
` },
{ h: "Prima e dopo: før, inden, efter at", body: `
» Før jeg søgte jobbet, talte jeg med en tidligere medarbejder. = Prima di candidarmi, ho parlato con un ex dipendente.
» Efter at han havde afsluttet sin uddannelse, fik han et job. = Dopo aver finito gli studi, ha trovato lavoro.
» Ring, inden du kommer. = Chiama prima di venire.
L'italiano usa spesso l'infinito («prima di candidarmi»); il danese preferisce una frase completa con soggetto e verbo.
` },
{ h: "La lettera di candidatura (ansøgning)", body: `
Una lettera danese è **breve** (una pagina), diretta e personale.
- Apertura: *Kære Line Hansen* (con il nome, se lo conosci).
- Prima frase: *Hermed søger jeg stillingen som…* e dove hai visto l'annuncio.
- Esperienza: *Jeg har fem års erfaring med…*, con esempi concreti.
- Qualità personali, sempre con un esempio: *Jeg er struktureret – for eksempel…*
- Perché proprio quest'azienda.
- Chiusura: *Jeg ser frem til at høre fra jer.* / *Med venlig hilsen*.
! Nei colloqui danesi contano molto la collaborazione e la personalità: preparati a parlare di come lavori in gruppo.
` },
],
text: {
title: "Ansøgning", kind: "Lettera",
intro: "Marco si candida come sous-chef in un ristorante di Copenaghen.",
lines: `
Kære Line Hansen = Gentile Line Hansen
Hermed søger jeg stillingen som souschef på Restaurant Havnen, som jeg så på jeres hjemmeside. = Con la presente mi candido al posto di sous-chef al Restaurant Havnen, che ho visto sul vostro sito.
Jeg er uddannet kok fra en hotelskole i Rom og har otte års erfaring fra restauranter i Italien og Danmark. = Ho studiato da cuoco in una scuola alberghiera di Roma e ho otto anni di esperienza in ristoranti in Italia e in Danimarca.
Før jeg flyttede til København for tre år siden, havde jeg arbejdet fem år på en restaurant i Trastevere, hvor jeg var ansvarlig for pastaen. = Prima di trasferirmi a Copenaghen tre anni fa, avevo lavorato cinque anni in un ristorante di Trastevere, dove ero responsabile della pasta.
Siden 2023 har jeg arbejdet på en restaurant i det indre København, hvor jeg også planlægger menuen og oplærer nye kolleger. = Dal 2023 lavoro in un ristorante nel centro di Copenaghen, dove pianifico anche il menù e formo i nuovi colleghi.

Jeg er struktureret og rolig, også når der er travlt. = Sono organizzato e calmo, anche quando c'è molto lavoro.
Mine kolleger siger, at jeg er god til at samarbejde, og at jeg altid er i godt humør. = I miei colleghi dicono che sono bravo a collaborare e che sono sempre di buon umore.
Jeg har læst om jeres fokus på lokale og økologiske råvarer, og det passer perfekt til min måde at lave mad på. = Ho letto della vostra attenzione per le materie prime locali e biologiche, e si adatta perfettamente al mio modo di cucinare.
Jeg taler dansk, italiensk og engelsk. = Parlo danese, italiano e inglese.

Jeg ser frem til at høre fra jer og fortæller gerne mere til en samtale. = Resto in attesa di una vostra risposta e sarò felice di raccontarvi di più in un colloquio.
Med venlig hilsen Marco Rossi = Cordiali saluti, Marco Rossi
`,
q: `
Hvilken stilling søger Marco?|Souschef|Køkkenchef;Tjener
Hvor mange års erfaring har Marco?|Otte år|Fem år;Tre år
Hvad lavede Marco, før han flyttede til Danmark?|Han arbejdede på en restaurant i Rom|Han studerede økonomi;Han var arbejdsløs
Hvad siger kollegerne om Marco?|At han er god til at samarbejde|At han er meget stille;At han helst arbejder alene
Hvorfor passer restauranten til Marco?|Den bruger lokale og økologiske råvarer|Den ligger tæt på hans lejlighed;Den laver kun italiensk mad
`},
ex: `
c|Da jeg kom hjem, ___ de allerede spist.|havde
c|Toget ___ kørt, da vi kom til stationen.|var
m|Hun var træt, fordi hun ___ hele natten.|havde arbejdet|har arbejdet;arbejder
c|Efter at han ___ sin uddannelse, fik han et job.|havde afsluttet|afslutte, trapassato
m|Qual è il trapassato di «gå»?|var gået|havde gået;er gået
c|Hun har ___ som lærer i ti år.|arbejdet|arbejde
m|Come si chiude una lettera formale?|Med venlig hilsen|Mange kys;Vi ses
c|___ søger jeg stillingen som souschef.|Hermed|con la presente
c|Jeg ser frem ___ at høre fra jer.|til
m|«Sono bravo a cucinare» si dice…|Jeg er god til at lave mad.|Jeg er god på at lave mad.;Jeg er god med at lave mad.
o|Jeg har fem års erfaring med salg.|Ho cinque anni di esperienza nelle vendite.
o|Før jeg flyttede hertil, havde jeg aldrig set sne.|Prima di trasferirmi qui non avevo mai visto la neve.|Jeg havde aldrig set sne, før jeg flyttede hertil
o|Hun sagde op, fordi hun havde fået et nyt job.|Si è licenziata perché aveva trovato un nuovo lavoro.
t|Mi candido per il posto di cuoco.|Jeg søger stillingen som kok;Hermed søger jeg stillingen som kok
t|Avevo già mangiato.|Jeg havde allerede spist
t|Lavoro qui dal 2022.|Jeg har arbejdet her siden 2022;Jeg har arbejdet her siden to tusind toogtyve
t|Cordiali saluti|Med venlig hilsen
`
});

COURSE.push({
id: "b1-03", level: "B1", n: 3,
title: "Sundhed og livsstil",
sub: "Salute e stile di vita, il passivo in -s e con blive",
goals: ["Leggere un articolo sulla salute", "Usare il passivo in -s e con blive", "Esprimere proporzioni con jo … jo"],
words: `
n|en|sundhed|sundheden|-|-|salute
n|en|livsstil|livsstilen|livsstile|livsstilene|stile di vita
n|en|motion|motionen|-|-|attività fisica
n|en|kost|kosten|-|-|alimentazione, dieta
n|en|vægt|vægten|vægte|vægtene|peso
n|en|søvn|søvnen|-|-|sonno
n|en|stress|stressen|-|-|stress
n|en|sygdom|sygdommen|sygdomme|sygdommene|malattia
n|en|kræft|kræften|-|-|cancro
n|en|rygning|rygningen|-|-|il fumo
n|en|behandling|behandlingen|behandlinger|behandlingerne|cura, trattamento
n|en|undersøgelse|undersøgelsen|undersøgelser|undersøgelserne|studio, indagine; visita
n|en|forsker|forskeren|forskere|forskerne|ricercatore
n|en|risiko|risikoen|risici|risiciene|rischio
n|en|vane|vanen|vaner|vanerne|abitudine
n|en|grøntsag|grøntsagen|grøntsager|grøntsagerne|verdura
n|en|frugt|frugten|frugter|frugterne|frutto, frutta
n|en|alkohol|alkoholen|-|-|alcol
n|en|operation|operationen|operationer|operationerne|operazione
n|en|skade|skaden|skader|skaderne|danno, infortunio
n|en|ulykke|ulykken|ulykker|ulykkerne|incidente
n|en|ventetid|ventetiden|ventetider|ventetiderne|tempo d'attesa
n|et|sundhedsvæsen|sundhedsvæsenet|-|-|sistema sanitario
n|en|borger|borgeren|borgere|borgerne|cittadino
n|en|kilometer|kilometeren|kilometer|kilometerne|chilometro
n|en|hverdag|hverdagen|hverdage|hverdagene|giorno feriale; vita quotidiana
v|anbefale|anbefaler|anbefalede|anbefalet|raccomandare
v|forebygge|forebygger|forebyggede|forebygget|prevenire
v|behandle|behandler|behandlede|behandlet|curare, trattare
v|finansiere|finansierer|finansierede|finansieret|finanziare
v|stige|stiger|steg|steget|salire, aumentare|er
v|øge|øger|øgede|øget|aumentare (qualcosa)
v|reducere|reducerer|reducerede|reduceret|ridurre
v|undgå|undgår|undgik|undgået|evitare
v|påvirke|påvirker|påvirkede|påvirket|influenzare
v|måle|måler|målte|målt|misurare
v|operere|opererer|opererede|opereret|operare
v|indlægge|indlægger|indlagde|indlagt|ricoverare
v|udskrive|udskriver|udskrev|udskrevet|dimettere (dall'ospedale); prescrivere
v|dø|dør|døde|død|morire|er
v|overleve|overlever|overlevede|overlevet|sopravvivere
v|skyldes|skyldes|skyldtes|skyldtes|essere dovuto a
v|findes|findes|fandtes|fandtes|esistere, trovarsi
v|lykkes|lykkes|lykkedes|lykkedes|riuscire (det lykkedes mig = ci sono riuscito)
x|bevæge sig|muoversi, fare movimento
x|vise sig|risultare, rivelarsi
a|fysisk|fysisk|fysiske|-|-|fisico
a|psykisk|psykisk|psykiske|-|-|psichico, mentale
a|usund|usundt|usunde|usundere|usundest|malsano
a|aktiv|aktivt|aktive|mere aktiv|mest aktiv|attivo
a|overvægtig|overvægtigt|overvægtige|-|-|sovrappeso
a|stresset|stresset|stressede|mere stresset|mest stresset|stressato
a|gennemsnitlig|gennemsnitligt|gennemsnitlige|-|-|medio
a|kronisk|kronisk|kroniske|-|-|cronico
a|enkel|enkelt|enkle|enklere|enklest|semplice
x|ifølge|secondo (una fonte)
x|i gennemsnit|in media
x|jo … jo|più … più
x|mindst|almeno
x|højst|al massimo
x|blandt andet|tra l'altro
x|dog|tuttavia, però
x|delvist|in parte
x|derfor|perciò, quindi
x|både … og|sia … sia
`,
grammar: [
{ h: "Il passivo in -s", body: `
Il danese forma il passivo aggiungendo **-s** al verbo. È molto usato nel presente, all'infinito e dopo i verbi modali, soprattutto per regole, istruzioni e fatti generali.
| attivo | passivo |
| *man bygger* | *der bygges* / *huset bygges* |
| *man skal betale* | *billetten skal betales* |
| *man kan behandle* | *sygdommen kan behandles* |
Al presente si toglie la *-r* e si aggiunge *-s*: *behandler → behandles*.
» Billetten skal betales på forhånd. = Il biglietto va pagato in anticipo.
» Patienter behandles gratis. = I pazienti vengono curati gratuitamente.
» Her må der ikke ryges. = Qui non si può fumare.
` },
{ h: "Il passivo con blive", body: `
*Blive* + participio si usa soprattutto per **eventi singoli**, al passato e al passato prossimo.
| | passivo in -s | passivo con blive |
| presente | *behandles* | *bliver behandlet* |
| passato | (*behandledes*, raro) | *blev behandlet* |
| passato prossimo | — | *er blevet behandlet* |
| con modale | *kan behandles* | *kan blive behandlet* |
» Min farfar blev opereret sidste år. = Mio nonno è stato operato l'anno scorso.
» Huset er blevet solgt. = La casa è stata venduta.
Chi compie l'azione si introduce con **af**: *Undersøgelsen er lavet af forskere fra Aarhus.*
` },
{ h: "Verbi in -s senza significato passivo", body: `
Alcuni verbi finiscono sempre in *-s* ma hanno significato attivo (verbi deponenti):
| | |
| *synes* | trovare, pensare |
| *findes* | esistere |
| *lykkes* | riuscire |
| *mødes* | incontrarsi |
| *skændes* | litigare |
| *skyldes* | essere dovuto a |
» Findes der en bedre løsning? = Esiste una soluzione migliore?
» Det lykkedes mig at bestå. = Sono riuscito a passare.
` },
{ h: "Più … più: jo … jo / desto", body: `
» Jo mere du bevæger dig, jo bedre sover du. = Più ti muovi, meglio dormi.
Nella prima parte l'ordine è quello delle secondarie (*du bevæger*); nella seconda c'è inversione (*sover du*). Al posto del secondo *jo* si può usare *desto*.
` },
],
text: {
title: "Danskerne lever længere", kind: "Articolo",
intro: "Un articolo su salute e sistema sanitario, con la storia del nonno di Mads.",
lines: `
Danskerne lever længere end nogensinde før. = I danesi vivono più a lungo che mai.
Det skyldes blandt andet, at færre ryger, og at mange sygdomme i dag kan behandles bedre end tidligere. = Questo è dovuto tra l'altro al fatto che meno persone fumano e che oggi molte malattie si possono curare meglio di prima.
I Danmark finansieres sundhedsvæsenet af skatten. = In Danimarca il sistema sanitario è finanziato dalle tasse.
Det betyder, at borgerne ikke skal betale, når de går til lægen eller bliver indlagt på hospitalet. = Questo significa che i cittadini non pagano quando vanno dal medico o vengono ricoverati in ospedale.
Tandlægen og medicinen skal dog delvist betales af patienten selv. = Il dentista e le medicine però vanno pagati in parte dal paziente.

Men ikke alle har det lige godt. = Ma non tutti stanno ugualmente bene.
Ifølge en ny undersøgelse føler mange unge sig stressede, og mange voksne bevæger sig for lidt. = Secondo un nuovo studio molti giovani si sentono stressati e molti adulti si muovono troppo poco.
Forskerne anbefaler derfor nogle enkle vaner. = I ricercatori raccomandano quindi alcune abitudini semplici.
Gå eller cykl på arbejde, spis flere grøntsager, og sov mindst syv timer om natten. = Andate al lavoro a piedi o in bici, mangiate più verdura e dormite almeno sette ore per notte.
Jo mere man bevæger sig, jo bedre har man det, både fysisk og psykisk. = Più ci si muove, meglio si sta, sia fisicamente sia mentalmente.

Min farfar blev opereret i hjertet sidste år, fortæller Mads. = Mio nonno è stato operato al cuore l'anno scorso, racconta Mads.
Han blev udskrevet efter fem dage, og nu cykler han ti kilometer hver dag. Han er 82! = È stato dimesso dopo cinque giorni e ora fa dieci chilometri in bici ogni giorno. Ha 82 anni!
`,
q: `
Hvorfor lever danskerne længere?|Færre ryger, og sygdomme kan behandles bedre|De spiser mere fisk;De arbejder mindre
Hvordan finansieres det danske sundhedsvæsen?|Af skatten|Af private forsikringer;Af patienterne selv
Hvad skal patienterne selv betale en del af?|Tandlægen og medicinen|Lægen og hospitalet;Operationer
Hvad anbefaler forskerne?|At bevæge sig, spise flere grøntsager og sove nok|At drikke mere kaffe;At gå til lægen hver måned
Hvad gør Mads' farfar i dag?|Han cykler ti kilometer hver dag|Han er stadig på hospitalet;Han løber maraton
`},
ex: `
c|Billetten skal ___ på forhånd.|betales|betale, passivo
c|Her må der ikke ___.|ryges|ryge, passivo
c|Huset ___ i 1920.|blev bygget|bygge, passivo con blive al passato
c|Min far er ___ opereret.|blevet|è stato
m|Sygdommen kan ___ med medicin.|behandles|behandler;behandlet
m|Undersøgelsen er lavet ___ forskere fra Aarhus.|af|fra;med
m|Patienter ___ gratis i Danmark. (in generale)|behandles|bliver behandlede;behandler
m|___ der en bedre løsning? (esiste)|Findes|Finder;Fandt
c|Jo mere du sover, ___ bedre har du det.|jo;desto
m|«Il sistema sanitario è finanziato dalle tasse» si dice…|Sundhedsvæsenet finansieres af skatten.|Sundhedsvæsenet finansierer skatten.;Skatten finansieres af sundhedsvæsenet.
c|Rygning ___ risikoen for kræft.|øger|aumenta
o|Han blev opereret i knæet i går.|Ieri è stato operato al ginocchio.|I går blev han opereret i knæet
o|Jo mere man bevæger sig, jo bedre sover man.|Più ci si muove, meglio si dorme.
o|Døren lukkes klokken ti om aftenen.|La porta viene chiusa alle dieci di sera.|Klokken ti om aftenen lukkes døren
t|La casa è stata venduta.|Huset er blevet solgt;Huset blev solgt
t|Il biglietto va pagato in contanti.|Billetten skal betales kontant;Billetten skal betales med kontanter
t|Più leggo, più imparo.|Jo mere jeg læser, jo mere lærer jeg;Jo mere jeg læser, desto mere lærer jeg
t|Secondo i ricercatori è salutare.|Ifølge forskerne er det sundt;Det er sundt ifølge forskerne
`
});

COURSE.push({
id: "b1-04", level: "B1", n: 4,
title: "Medier og nyheder",
sub: "Media, notizie e tecnologia, le particelle modali",
goals: ["Parlare di notizie, social e fonti", "Capire e usare jo, vel, nok, da, altså, bare, lige, skam", "Suonare più naturale nel parlato"],
words: `
n|et|medie|mediet|medier|medierne|mezzo di comunicazione (medierne = i media)
n|en|nyhed|nyheden|nyheder|nyhederne|notizia
n|en|artikel|artiklen|artikler|artiklerne|articolo
n|en|overskrift|overskriften|overskrifter|overskrifterne|titolo (di giornale)
n|en|journalist|journalisten|journalister|journalisterne|giornalista
n|et|program|programmet|programmer|programmerne|programma
n|en|serie|serien|serier|serierne|serie (TV)
n|en|podcast|podcasten|podcasts|podcastene|podcast
n|en|skærm|skærmen|skærme|skærmene|schermo
n|en|mobil|mobilen|mobiler|mobilerne|cellulare
n|en|app|appen|apps|appsene|app
x|sociale medier|social media
n|et|opslag|opslaget|opslag|opslagene|post (sui social)
n|en|kommentar|kommentaren|kommentarer|kommentarerne|commento
n|en|kilde|kilden|kilder|kilderne|fonte
n|et|internet|internettet|-|-|internet
n|en|algoritme|algoritmen|algoritmer|algoritmerne|algoritmo
n|et|privatliv|privatlivet|-|-|vita privata, privacy
n|en|skærmtid|skærmtiden|-|-|tempo davanti allo schermo
n|en|reklame|reklamen|reklamer|reklamerne|pubblicità
n|en|ytringsfrihed|ytringsfriheden|-|-|libertà di espressione
n|en|video|videoen|videoer|videoerne|video
n|en|følger|følgeren|følgere|følgerne|follower, seguace
v|downloade|downloader|downloadede|downloadet|scaricare
v|følge|følger|fulgte|fulgt|seguire
v|streame|streamer|streamede|streamet|guardare in streaming
v|opdatere|opdaterer|opdaterede|opdateret|aggiornare
v|slette|sletter|slettede|slettet|cancellare
v|gemme|gemmer|gemte|gemt|salvare; nascondere
v|påstå|påstår|påstod|påstået|sostenere, affermare
v|kontrollere|kontrollerer|kontrollerede|kontrolleret|controllare, verificare
v|kritisere|kritiserer|kritiserede|kritiseret|criticare
v|informere|informerer|informerede|informeret|informare
x|handle om|trattare di, parlare di
x|stå bag|esserci dietro
x|være afhængig af|dipendere da
x|falske nyheder|notizie false
x|Det passer ikke.|Non è vero.
x|Der kan du se.|Ecco, vedi.
x|nå|beh, allora
x|i stedet for|invece di
a|pålidelig|pålideligt|pålidelige|mere pålidelig|mest pålidelig|affidabile
a|falsk|falsk|falske|-|-|falso
a|sand|sandt|sande|-|-|vero
a|aktuel|aktuelt|aktuelle|mere aktuel|mest aktuel|attuale
a|afhængig|afhængigt|afhængige|mere afhængig|mest afhængig|dipendente
a|irriterende|irriterende|irriterende|mere irriterende|mest irriterende|irritante
x|jo|(particella) come sai, no?
x|vel|(particella) immagino, vero?
x|nok|probabilmente
x|da|(particella) ma sì, pure, eppure
x|altså|insomma, dunque
x|bare|(particella) pure, semplicemente
x|lige|(particella) un attimo
x|skam|(particella) eccome, sai
x|egentlig|in realtà, a dire il vero
`,
grammar: [
{ h: "Le particelle modali", body: `
Piccole parole non accentate che danno colore alla frase: senza di loro il danese suona rigido e scortese. Non si traducono parola per parola.
| particella | sfumatura | esempio |
| *jo* | cosa che sappiamo entrambi | *Det er jo søndag.* (Ma è domenica, no?) |
| *vel* | supposizione, cerco conferma | *Du kommer vel?* (Vieni, vero?) |
| *nok* | probabilmente | *Han kommer nok.* (Probabilmente viene.) |
| *da* | enfasi, sorpresa, protesta | *Det er da klart!* (Ma è ovvio!) |
| *altså* | enfasi, «insomma» | *Det er altså for meget.* |
| *bare* | invito, «pure» | *Kom bare ind.* (Entra pure.) |
| *lige* | attenua, «un attimo» | *Vent lige.* (Aspetta un attimo.) |
| *godt* | concessione, «bene» | *Jeg ved godt, at…* (So bene che…) |
| *skam* | rassicurare, contraddire | *Det er skam rigtigt.* (È vero, sai.) |
Le particelle vanno **nello stesso posto di *ikke***: dopo il verbo nella principale, prima del verbo nella secondaria.
» Du har vel ikke set min telefon? = Non hai mica visto il mio telefono?
» Det er da ikke så svært! = Ma non è poi così difficile!
! *Nok* ha due significati: *Han kommer nok* = probabilmente viene; *Vi har nok penge* = abbiamo abbastanza soldi.
` },
{ h: "Più particelle insieme", body: `
Si possono combinare, di solito in questo ordine: *jo – da – nok – vel – også – ikke*.
» Det er jo nok rigtigt. = Probabilmente è vero, del resto.
» Han kommer vel ikke i dag? = Non verrà mica oggi?
` },
{ h: "Fonti e notizie: espressioni utili", body: `
- *Ifølge DR…* = secondo DR (la radiotelevisione pubblica)
- *Hvor har du det fra?* = dove l'hai sentito/letto?
- *Det passer ikke.* = non è vero.
- *Hvem står bag?* = chi c'è dietro?
- *Filmen handler om…* = il film parla di…
` },
],
text: {
title: "Skærmtid ved middagsbordet", kind: "Dialogo",
intro: "A cena Mette, l'insegnante di Marco, parla con suo figlio Oliver, 15 anni, di una notizia vista sui social.",
lines: `
@Mette: Oliver, læg lige telefonen væk. Vi spiser jo. = Oliver, metti via un attimo il telefono. Stiamo mangiando, no?
@Oliver: Ja ja, jeg skal bare lige svare på en besked. = Sì sì, devo solo rispondere un attimo a un messaggio.
@Mette: Det sagde du altså også for ti minutter siden. = L'hai detto anche dieci minuti fa, eh.
@Oliver: Men det er vigtigt! Der er en video, som alle i klassen har delt. = Ma è importante! C'è un video che hanno condiviso tutti in classe.
@Mette: Hvad handler den om? = Di che cosa parla?
@Oliver: At skolerne skal have fire ugers sommerferie i stedet for seks. = Che le scuole avranno quattro settimane di vacanze estive invece di sei.
@Mette: Det passer da ikke! Hvor har du det fra? = Ma non è vero! Dove l'hai visto?
@Oliver: Fra en konto på TikTok. Den har vel en million følgere. = Da un account su TikTok. Avrà un milione di follower.
@Mette: Det betyder jo ikke, at det er sandt. Har du tjekket en pålidelig kilde, for eksempel DR eller en avis? = Questo non vuol dire che sia vero. Hai controllato una fonte affidabile, per esempio DR o un giornale?
@Oliver: Nej. Okay, jeg søger lige. Du har ret, det er falsk. Den er egentlig fra en satireside. = No. Ok, cerco un attimo. Hai ragione, è falso. In realtà viene da un sito satirico.
@Mette: Der kan du se. Man skal altid kontrollere, hvem der står bag en nyhed. = Ecco, vedi. Bisogna sempre controllare chi c'è dietro una notizia.
@Oliver: Jeg ved det godt, mor. Men du bruger nok også for meget tid på Facebook. = Lo so bene, mamma. Ma anche tu probabilmente passi troppo tempo su Facebook.
@Mette: Det gør jeg skam ikke! Nå, spis nu bare. = Ma per niente! Beh, adesso mangia.
`,
q: `
Hvorfor skal Oliver lægge telefonen væk?|Fordi familien spiser|Fordi han skal lave lektier;Fordi den skal lades op
Hvad handler videoen om?|At sommerferien bliver kortere|At skolerne lukker;At mobiler bliver forbudt
Hvordan finder Oliver ud af, at nyheden er falsk?|Han tjekker en pålidelig kilde|Hans mor ringer til skolen;Hans venner fortæller det
Hvor kommer videoen egentlig fra?|Fra en satireside|Fra DR;Fra en avis
Hvad mener Mette med «Det gør jeg skam ikke!»?|Hun afviser kraftigt, at hun bruger for meget tid på Facebook|Hun giver Oliver ret;Hun er i tvivl
`},
ex: `
m|Vent ___, jeg kommer! (un attimo)|lige|jo;vel
m|Du kommer ___ i morgen? (vero?)|vel|jo;bare
m|Han er ___ syg. Han ser meget træt ud. (probabilmente)|nok|jo;skam
m|Kom ___ ind! (pure)|bare|nok;vel
m|Det er ___ søndag i dag, så butikken er lukket. (come sai)|jo|vel;lige
c|Det er ___ ikke så svært!|da|ma dai
c|Jeg ved ___, at det er sent.|godt|bene
m|Jeg ___ tit på min familie i Italien.|tænker|synes;tror
c|Man skal altid tjekke ___.|kilden|la fonte
c|Hvad ___ filmen om?|handler|tratta
m|«Nok» in «Vi har nok mad» significa…|abbastanza|probabilmente;troppo
o|Du har vel ikke set min telefon?|Non hai mica visto il mio telefono?
o|Det betyder jo ikke, at det er sandt.|Questo non vuol dire che sia vero.
o|Han bruger nok for meget tid på sin mobil.|Probabilmente passa troppo tempo al cellulare.
t|Probabilmente arriva tardi.|Han kommer nok sent;Hun kommer nok sent;Han kommer nok for sent;Hun kommer nok for sent
t|Siediti pure!|Sæt dig bare;Sæt dig bare ned
t|Non è vero!|Det passer ikke;Det er ikke sandt;Det passer da ikke
t|Di che cosa parla il libro?|Hvad handler bogen om?
`
});

COURSE.push({
id: "b1-05", level: "B1", n: 5,
title: "Natur og miljø",
sub: "Ambiente e clima, il condizionale, burde, lo scopo con for at",
goals: ["Discutere di ambiente e sostenibilità", "Fare ipotesi: hvis jeg havde…, ville jeg…", "Dare consigli con burde e bør"],
words: `
n|en|natur|naturen|-|-|natura
n|et|miljø|miljøet|miljøer|miljøerne|ambiente
n|et|klima|klimaet|klimaer|klimaerne|clima
n|en|klimaforandring|klimaforandringen|klimaforandringer|klimaforandringerne|cambiamento climatico
n|en|forurening|forureningen|-|-|inquinamento
n|et|affald|affaldet|-|-|rifiuti
n|en|plastik|plastikken|-|-|plastica
n|en|energi|energien|-|-|energia
n|en|vindmølle|vindmøllen|vindmøller|vindmøllerne|pala eolica
n|en|solcelle|solcellen|solceller|solcellerne|pannello solare
n|en|strøm|strømmen|-|-|corrente elettrica
n|en|udledning|udledningen|udledninger|udledningerne|emissione
n|en|art|arten|arter|arterne|specie
n|et|dyr|dyret|dyr|dyrene|animale
n|en|fugl|fuglen|fugle|fuglene|uccello
n|et|træ|træet|træer|træerne|albero; legno
n|en|blomst|blomsten|blomster|blomsterne|fiore
n|en|mark|marken|marker|markerne|campo
n|en|landmand|landmanden|landmænd|landmændene|agricoltore
n|et|landbrug|landbruget|landbrug|landbrugene|agricoltura; azienda agricola
n|en|fremtid|fremtiden|-|-|futuro
n|en|løsning|løsningen|løsninger|løsningerne|soluzione
n|en|politiker|politikeren|politikere|politikerne|politico
n|et|genbrug|genbruget|-|-|riciclo, riuso
n|en|pant|panten|-|-|deposito (vuoto a rendere)
n|en|dåse|dåsen|dåser|dåserne|lattina
n|en|pose|posen|poser|poserne|sacchetto
n|et|areal|arealet|arealer|arealerne|superficie
n|en|minister|ministeren|ministre|ministrene|ministro
x|penge|soldi (plurale)
x|CO2|anidride carbonica
v|sortere|sorterer|sorterede|sorteret|separare, differenziare
v|genbruge|genbruger|genbrugte|genbrugt|riciclare, riutilizzare
v|spare|sparer|sparede|sparet|risparmiare
v|spilde|spilder|spildte|spildt|sprecare
v|beskytte|beskytter|beskyttede|beskyttet|proteggere
v|ødelægge|ødelægger|ødelagde|ødelagt|distruggere, rovinare
v|forurene|forurener|forurenede|forurenet|inquinare
v|producere|producerer|producerede|produceret|produrre
v|forbruge|forbruger|forbrugte|forbrugt|consumare
v|smide|smider|smed|smidt|buttare (smide ud)
v|burde|bør|burde|burdet|dovere (morale): dovrei, dovresti
v|forsvinde|forsvinder|forsvandt|forsvundet|scomparire|er
v|redde|redder|reddede|reddet|salvare
v|udlede|udleder|udledte|udledt|emettere
v|forbyde|forbyder|forbød|forbudt|vietare
a|bæredygtig|bæredygtigt|bæredygtige|mere bæredygtig|mest bæredygtig|sostenibile
a|vedvarende|vedvarende|vedvarende|-|-|rinnovabile
a|skadelig|skadeligt|skadelige|mere skadelig|mest skadelig|dannoso
a|global|globalt|globale|-|-|globale
a|beskidt|beskidt|beskidte|mere beskidt|mest beskidt|sporco
a|kendt|kendt|kendte|mere kendt|mest kendt|noto, famoso
a|tom|tomt|tomme|-|-|vuoto
a|bekymret|bekymret|bekymrede|mere bekymret|mest bekymret|preoccupato
x|hvis jeg var dig|se fossi in te
x|for at|per (scopo)
x|på grund af|a causa di
x|takket være|grazie a
x|til gengæld|in compenso
x|uden at|senza (+ infinito)
x|gå konkurs|fallire
x|på en … måde|in modo …
`,
grammar: [
{ h: "Il condizionale: ville + infinito", body: `
Per le ipotesi il danese usa **hvis + passato** nella condizione e **ville + infinito** nella conseguenza.
» Hvis jeg havde mere tid, ville jeg læse flere bøger. = Se avessi più tempo, leggerei più libri.
» Hvis jeg var dig, ville jeg tage toget. = Se fossi in te, prenderei il treno.
» Det ville være dejligt. = Sarebbe bello.
! Dove l'italiano usa il congiuntivo («se avessi», «se fossi»), il danese usa il semplice passato: *hvis jeg havde*, *hvis jeg var*.
Anche i modali al passato fanno da condizionale: *kunne* (potrei), *skulle* (dovrei), *måtte* (potrei, avrei il permesso).
» Kunne du hjælpe mig? = Potresti aiutarmi?
` },
{ h: "Reale o ipotetico?", body: `
| tipo | condizione | conseguenza |
| reale | *Hvis det regner,* | *tager jeg bussen.* |
| ipotetico | *Hvis det regnede,* | *ville jeg tage bussen.* |
La prima è una possibilità concreta; la seconda è immaginata.
` },
{ h: "Burde: dovrei, dovresti", body: `
*Burde* esprime un consiglio o un dovere morale. Il presente *bør* è più generale e deciso; il passato *burde* è più morbido, come il condizionale italiano.
» Vi bør spise mindre kød. = Dovremmo mangiare meno carne.
» Du burde ringe til din mor. = Dovresti chiamare tua madre.
» Det burde være forbudt. = Dovrebbe essere vietato.
` },
{ h: "Scopo e causa", body: `
- **for at** + infinito = per (scopo): *Hun cykler for at spare penge.*
- **fordi** + frase = perché: *Toget er forsinket, fordi det stormer.*
- **på grund af** + sostantivo = a causa di: *Toget er forsinket på grund af stormen.*
- **takket være** + sostantivo = grazie a: *takket være vindmøllerne*
- **uden at** + infinito = senza: *uden at gå konkurs*
` },
],
text: {
title: "Den grønne omstilling", kind: "Articolo con interviste",
intro: "La Danimarca e l'ambiente, e tre persone che rispondono alla domanda: che cosa faresti se fossi ministro del clima?",
lines: `
Danmark er kendt for sine vindmøller. = La Danimarca è famosa per le sue pale eoliche.
I dag kommer en stor del af landets strøm fra vind og sol, og målet er, at energien skal være helt grøn i fremtiden. = Oggi gran parte dell'elettricità del paese viene da vento e sole, e l'obiettivo è che in futuro l'energia sia completamente verde.
Mange danskere prøver også at leve mere bæredygtigt i hverdagen. = Molti danesi cercano anche di vivere in modo più sostenibile ogni giorno.
De cykler på arbejde, sorterer deres affald i flere typer, og de afleverer tomme flasker og dåser i supermarkedet for at få pant tilbage. = Vanno al lavoro in bici, dividono i rifiuti in più tipi e riportano bottiglie e lattine vuote al supermercato per riavere il deposito.

Men der er også problemer. = Ma ci sono anche problemi.
Landbruget bruger en meget stor del af Danmarks areal, og det udleder meget CO2. = L'agricoltura occupa una parte molto grande del territorio danese ed emette molta CO₂.
Nogle politikere mener, at danskerne burde spise mindre kød, mens mange landmænd er bekymrede for deres fremtid. = Alcuni politici ritengono che i danesi dovrebbero mangiare meno carne, mentre molti agricoltori sono preoccupati per il loro futuro.

Vi spurgte tre personer: Hvad ville du gøre, hvis du var klimaminister? = Abbiamo chiesto a tre persone: che cosa faresti se fossi ministro del clima?
@Sofie, 29: Hvis jeg var minister, ville jeg gøre det billigere at tage toget end at flyve. = Se fossi ministro, renderei più economico prendere il treno che volare.
@Lars, 54, landmand: Jeg ville hjælpe landmændene, så de kunne producere på en grønnere måde uden at gå konkurs. = Aiuterei gli agricoltori a produrre in modo più verde senza fallire.
@Oliver, 15: Jeg ville forbyde plastikposer. Det ville være nemt, og det ville hjælpe havet. = Vieterei i sacchetti di plastica. Sarebbe facile e aiuterebbe il mare.
`,
q: `
Hvor kommer en stor del af Danmarks strøm fra?|Fra vind og sol|Fra kul;Fra atomkraft
Hvorfor afleverer danskerne tomme flasker i supermarkedet?|For at få pant tilbage|Fordi det er forbudt at smide dem ud;For at få rabat på mad
Hvad er problemet med landbruget ifølge teksten?|Det bruger meget areal og udleder meget CO2|Det producerer for lidt mad;Det bruger for mange vindmøller
Hvad ville Sofie gøre som minister?|Gøre toget billigere end flyet|Forbyde plastikposer;Hjælpe landmændene
Hvad ville Oliver forbyde?|Plastikposer|Biler;Kød
`},
ex: `
c|Hvis jeg havde tid, ___ jeg hjælpe dig.|ville
c|Hvis jeg ___ dig, ville jeg tage toget.|var|være
m|Hvis det ___, ville vi blive hjemme. (ipotetico)|regnede|regner;har regnet
m|Hvis det ___, tager jeg bussen. (reale)|regner|regnede;ville regne
m|Det ___ dejligt! (sarebbe)|ville være|er være;ville var
c|Vi ___ spise mindre kød.|bør;burde|dovremmo
c|Hun cykler ___ at spare penge.|for|per
m|Toget er forsinket ___ stormen.|på grund af|fordi;for at
m|___ du hjælpe mig? (potresti)|Kunne|Kan ikke;Ville kan
c|Man skal ___ affaldet.|sortere|differenziare
o|Hvis jeg var minister, ville jeg forbyde plastikposer.|Se fossi ministro, vieterei i sacchetti di plastica.|Jeg ville forbyde plastikposer, hvis jeg var minister
o|Du burde ringe til din mor.|Dovresti telefonare a tua madre.
o|Vi sorterer affaldet for at beskytte miljøet.|Differenziamo i rifiuti per proteggere l'ambiente.
t|Se avessi più soldi, comprerei una casa.|Hvis jeg havde flere penge, ville jeg købe et hus;Hvis jeg havde mere penge, ville jeg købe et hus
t|Sarebbe bello.|Det ville være dejligt;Det ville være godt;Det ville være skønt
t|Dovremmo risparmiare energia.|Vi bør spare på energien;Vi burde spare på energien;Vi bør spare energi;Vi burde spare energi
t|Se fossi in te, non lo farei.|Hvis jeg var dig, ville jeg ikke gøre det
`
});
