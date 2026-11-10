/* Livello C1 · unità 6–10 (formato: vedi a1a.js; in più i campi prod e talk) */
COURSE.push({
id: "c1-06", level: "C1", n: 6,
title: "Jysk, københavnsk og bornholmsk",
sub: "Dialetti e varianti del danese, cosa capire senza imitare, danese–norvegese–svedese",
goals: ["Riconoscere le principali varianti regionali del danese (jysk, fynsk, bornholmsk, københavnsk)", "Capire alcune parole e tratti tipici senza imitarli", "Evitare le parole trappola tra danese, norvegese e svedese", "Parlare delle varianti linguistiche con vocabolario preciso"],
words: `
n|en|dialekt|dialekten|dialekter|dialekterne|dialetto
n|en|accent|accenten|accenter|accenterne|accento
n|en|udtale|udtalen|udtaler|udtalerne|pronuncia
n|et|stød|stødet|stød|stødene|stød (colpo di glottide)
n|en|egn|egnen|egne|egnene|zona, regione
n|en|landsdel|landsdelen|landsdele|landsdelene|parte del paese
n|en|sprogforsker|sprogforskeren|sprogforskere|sprogforskerne|linguista
n|et|nabosprog|nabosproget|nabosprog|nabosprogene|lingua vicina
n|et|slægtskab|slægtskabet|slægtskaber|slægtskaberne|parentela
n|et|ordforråd|ordforrådet|-|-|lessico, vocabolario
n|en|forståelse|forståelsen|-|-|comprensione
n|en|variant|varianten|varianter|varianterne|variante
n|et|ungdomssprog|ungdomssproget|-|-|linguaggio giovanile
n|en|slang|slangen|-|-|gergo
n|en|parodi|parodien|parodier|parodierne|parodia
n|en|hån|hånen|-|-|derisione
n|en|identitet|identiteten|identiteter|identiteterne|identità
n|et|mindretal|mindretallet|mindretal|mindretallene|minoranza
n|en|grænse|grænsen|grænser|grænserne|confine
n|en|sprogbrug|sprogbrugen|-|-|uso della lingua
v|efterligne|efterligner|efterlignede|efterlignet|imitare
v|misforstå|misforstår|misforstod|misforstået|fraintendere
v|genkende|genkender|genkendte|genkendt|riconoscere
v|udtale|udtaler|udtalte|udtalt|pronunciare
v|mumle|mumler|mumlede|mumlet|borbottare
v|sluge|sluger|slugte|slugt|inghiottire
v|afvige|afviger|afveg|afveget|discostarsi
v|bevare|bevarer|bevarede|bevaret|conservare
v|udvikle|udvikler|udviklede|udviklet|sviluppare
v|opfatte|opfatter|opfattede|opfattet|percepire, intendere
a|lokal|lokalt|lokale|mere lokal|mest lokal|locale
a|bred|bredt|brede|bredere|bredest|largo; marcato (di accento)
a|blød|blødt|bløde|blødere|blødest|morbido
a|ægte|ægte|ægte|-|-|autentico
a|forståelig|forståeligt|forståelige|mere forståelig|mest forståelig|comprensibile
a|jysk|jysk|jyske|-|-|jutlandese
a|sønderjysk|sønderjysk|sønderjyske|-|-|dello Jutland meridionale
a|fynsk|fynsk|fynske|-|-|della Fionia
a|københavnsk|københavnsk|københavnske|-|-|di Copenaghen
a|bornholmsk|bornholmsk|bornholmske|-|-|di Bornholm
x|rigsdansk|danese standard
x|vestjysk|jutlandese occidentale
x|æ|il, la (articolo anteposto del vestjysk)
x|mojn|ciao (saluto del sønderjysk)
x|træls|fastidioso, noioso
x|rolig|tranquillo (in svedese: divertente)
x|frokost|pranzo (in norvegese: colazione)
x|halvtreds|cinquanta (norv. femti, sved. femtio)
x|i dagligdagen|nella vita di tutti i giorni
x|på bredt jysk|con forte accento jutlandese
x|tale pænt|parlare in modo educato (senza parolacce)
`,
grammar: [
{ h: "Rigsdansk e varianti regionali", body: `
Il **rigsdansk** («danese del regno») è la varietà standard: quella dei telegiornali, della scuola e dei libri. Si è sviluppata soprattutto a partire dal parlato della regione di Copenaghen. Nella vita reale, però, quasi nessuno parla uno standard «puro»: quasi tutti hanno una **coloritura regionale**.
- I linguisti osservano che i dialetti tradizionali sono in forte regresso: i giovani parlano soprattutto varianti regionali del rigsdansk, con poche parole e un'intonazione locale.
- Oggi tra i danesi la comprensione reciproca è raramente un problema (fanno eccezione alcuni anziani che parlano ancora un dialetto tradizionale): per uno straniero la difficoltà è soprattutto la **velocità**, le vocali ridotte e lo *stød* che sparisce o cambia.
- In Danimarca l'accento non è di per sé un marchio sociale forte come in altri paesi, ma esistono stereotipi (il «contadino» jutlandese, il «cittadino» di Copenaghen): meglio non rinforzarli scherzando con gente che non si conosce.
» Hun taler rigsdansk med en let jysk accent. = Parla danese standard con un leggero accento jutlandese.
» Jeg forstår ham ikke altid, når han taler hurtigt. = Non sempre lo capisco quando parla veloce.
» Dialekterne forsvinder langsomt, men accenterne lever. = I dialetti scompaiono lentamente, ma gli accenti restano.
! Per te: **capire** le varianti è un obiettivo da C1; **imitarle** no. Un italiano che parla «jysk» di proposito suona facilmente come una parodia.
` },
{ h: "Jysk, fynsk, bornholmsk, københavnsk", body: `
## Jysk (Jutland)
Lo Jutland è grande e le varietà sono molte. Tre cose utili da riconoscere:
- **Vestjysk**: nella parte occidentale (e anche nel sønderjysk) si usa un articolo determinativo **anteposto**: *æ hus* (= *huset*), *æ bil* (= *bilen*). *Æ* sta davanti al nome e non dopo come il normale *-en/-et*. Attenzione: in gran parte dello Jutland *æ* (o *a*) è anche il pronome «io» (= *jeg*); il contesto chiarisce.
- **Sønderjysk** (Jutland meridionale): la regione è stata tedesca dal 1864 al 1920 (il ritorno alla Danimarca si chiama *Genforeningen*), e il dialetto ha tratti influenzati dal tedesco. Il saluto *mojn* (come *moin* della Germania del nord) ne è un esempio. Nel sønderjysk, come in altri dialetti meridionali e nel bornholmsk, lo *stød* spesso manca.
- **Træls** (= fastidioso, noioso) è di origine jutlandese, ma oggi lo si sente in tutto il paese: *Det er så træls!*
» Kom ind, æ kaffe er klar. = Entra, il caffè è pronto. (vestjysk)
» Mojn! Hvordan går det? = Ciao! Come va? (sønderjysk)
» Hvor er det træls, at toget er forsinket. = Che noia che il treno sia in ritardo.
## Fynsk e bornholmsk
- Il **fynsk** (Fionia) è di solito descritto come più «morbido» e melodico nel parlato.
- Il **bornholmsk** (isola di Bornholm, nel Baltico) fa parte dei dialetti orientali, vicini storicamente a quelli della Scania, e ha una melodia diversa dal resto della Danimarca. Per chi arriva da fuori può essere difficile da seguire, soprattutto tra le persone anziane.
## Københavnsk
Nella capitale si parla spesso veloce e con vocali ridotte. Nei quartieri multiculturali i linguisti descrivono un parlato giovanile detto *multietnolekt*, che influenza il gergo (*slang*) dei giovani di tutta la città.
» På Bornholm taler nogle ældre stadig bornholmsk. = A Bornholm alcuni anziani parlano ancora il bornholmsk.
» Mange unge i København bruger slang, som deres forældre ikke forstår. = Molti giovani a Copenaghen usano un gergo che i genitori non capiscono.
` },
{ h: "Danese, norvegese, svedese: parole trappola", body: `
Danesi, norvegesi e svedesi si capiscono spesso, ognuno parlando la propria lingua: lo scritto danese e norvegese (bokmål) è molto vicino, mentre il parlato danese è il più difficile da capire per gli altri due. Sul lavoro e nel tempo libero a Copenaghen incontrerai presto colleghi scandinavi: ecco le trappole più comuni.
| parola | danese | norvegese | svedese |
| *rolig* | tranquillo | tranquillo | **divertente** (*roligt*) |
| *frokost* | **pranzo** | **colazione** (*frokost*) | *frukost* = colazione, *lunch* = pranzo |
| 50 | *halvtreds* | *femti* | *femtio* |
| 60 | *tres* | *seksti* | *sextio* |
| «scusa» | *undskyld* | *unnskyld* | *ursäkta* |
- I numeri danesi da 50 in poi sono il caso più famoso: *halvtreds* (50) è l'abbreviazione di *halvtredsindstyve*: *halvtredje* («mezzo il terzo», cioè 2½) *sinde tyve* («volte venti»), quindi 2,5 × 20. Allo stesso modo *tres* (60) viene da *tresindstyve* (3 × 20). Per questo i vicini ci prendono in giro volentieri.
- In svedese si sente spesso la forma neutra: *Det var roligt!* = È stato divertente. In danese *Det var roligt* vuol dire invece «È stato tranquillo».
» Vi spiser frokost klokken tolv. = Pranziamo alle dodici.
» Han er meget rolig. = È molto tranquillo.
» Den norske frokost er det, vi kalder morgenmad. = La «frokost» norvegese è quella che noi chiamiamo colazione.
! Quando parli con uno svedese o un norvegese, parla più lentamente e usa parole semplici: si capisce meglio se eviti i modi di dire danesi e i numeri grandi.
` },
],
text: {
title: "Hos Jonas' bedstemor", kind: "Racconto",
intro: "Marco visita per la prima volta la nonna di Jonas nello Jutland e scopre che «dansk» non è una sola cosa.",
lines: `
Marco skulle for første gang besøge Jonas' bedstemor ved Ringkøbing i Vestjylland. = Per la prima volta Marco andava a trovare la nonna di Jonas vicino a Ringkøbing, nello Jutland occidentale.
Han havde lært dansk i flere år, men ved døren forstod han næsten ikke et ord. = Studiava danese da anni, ma alla porta non capì quasi una parola.
"Kom ind, æ kaffe er klar," sagde bedstemoren. = «Vieni dentro, il caffè è pronto», disse la nonna.
Marco kiggede forvirret på Jonas. = Marco guardò Jonas confuso.
"Æ er bare en bestemt artikel, som står foran ordet," forklarede Jonas. = «Æ è solo un articolo determinativo, che sta davanti alla parola», spiegò Jonas.
"Det er vestjysk. På rigsdansk siger man kaffen." = «È vestjysk. In rigsdansk si dice *kaffen*.»
"Og hvorfor taler du ikke sådan?" spurgte Marco. = «E tu perché non parli così?» chiese Marco.
"Jeg har boet i København i mange år, så min dialekt er næsten væk." = «Vivo a Copenaghen da molti anni, quindi il mio dialetto è quasi sparito.»
"Min bedstemor har til gengæld aldrig boet andre steder." = «Mia nonna, invece, non ha mai vissuto altrove.»
Over kaffen sagde bedstemoren, at vejret var træls, og at høsten var forsinket. = Durante il caffè la nonna disse che il tempo era «træls» e che il raccolto era in ritardo.
"Træls betyder irriterende," hviskede Jonas. "Det bruger folk i hele landet nu." = «*Træls* vuol dire fastidioso», sussurrò Jonas. «Ormai lo usa gente in tutto il paese.»
Senere ringede Jonas' onkel fra Sønderjylland og sagde "Mojn!" i telefonen. = Più tardi lo zio di Jonas telefonò dallo Jutland meridionale e disse «Mojn!».
"Det er deres måde at sige hej på," sagde Jonas. = «È il loro modo di dire ciao», disse Jonas.
Marco grinede og spurgte, om han skulle prøve at tale jysk. = Marco rise e chiese se doveva provare a parlare jysk.
"Nej, lad være," sagde Jonas. "Det lyder som en parodi, og nogle vil opfatte det som hån." = «No, lascia stare», disse Jonas. «Suona come una parodia e qualcuno lo prenderebbe per una presa in giro.»
"Lyt og forstå, men tal dit eget dansk. Ingen forventer andet." = «Ascolta e capisci, ma parla il tuo danese. Nessuno si aspetta altro.»
På vejen hjem fortalte Jonas, at bornholmsk er så anderledes, at tilrejsende ofte har svært ved at forstå det. = Sulla via del ritorno Jonas raccontò che il bornholmsk è così diverso che chi viene da fuori spesso fatica a capirlo.
"Sprogforskere siger, at dialekterne bliver mere ens," sagde han. = «I linguisti dicono che i dialetti stanno diventando più simili tra loro», disse.
"Men accenterne og nogle få ord holder længe." = «Ma gli accenti e qualche parola resistono a lungo.»
Marco tænkte på sin norske kollega, der engang havde bestilt frokost klokken otte om morgenen. = Marco pensò al suo collega norvegese, che una volta aveva ordinato la «frokost» alle otto del mattino.
"Hos dem er frokost morgenmad," grinede Jonas. "Og i Sverige betyder rolig sjov." = «Da loro frokost è la colazione», rise Jonas. «E in Svezia "rolig" vuol dire divertente.»
"Så er jeg glad for, at jeg kun skal lære ét sprog," sagde Marco. = «Allora sono contento di dover imparare una sola lingua», disse Marco.
"Ét sprog og mange accenter," svarede Jonas. = «Una lingua e molti accenti», rispose Jonas.
`,
q: `
Hvad betyder æ i bedstemorens sætning?|Det er en bestemt artikel foran ordet|Det betyder jeg;Det betyder nej
Hvorfor er Jonas' dialekt næsten væk?|Han har boet i København i mange år|Han kommer fra Fyn;Han taler kun norsk
Hvad betyder ordet træls?|Irriterende eller kedeligt|Dejligt;Hurtigt
Hvorfor skal Marco ikke prøve at tale jysk?|Det kan lyde som en parodi eller hån|Han kan ikke udtale det;Det er forbudt
Hvad sker der med dialekterne ifølge sprogforskerne?|De bliver mere ens|De bliver flere;De er helt uændrede
Hvad var galt med Marcos norske kollega?|Han bestilte frokost om morgenen, fordi frokost betyder morgenmad på norsk|Han forstod ikke svensk;Han ville ikke spise
`},
ex: `
m|Dove si usa l'articolo anteposto *æ* (*æ hus*)?|in vestjysk|nel fynsk;nel københavnsk
m|Il saluto *mojn* è tipico di…|Sønderjylland|Bornholm;Fyn
m|*Træls* significa…|fastidioso, noioso|tranquillo;veloce
m|In svedese *rolig* significa di solito…|divertente|tranquillo;silenzioso
m|In danese *frokost* è…|il pranzo|la colazione;la cena
m|Il numero 50 in danese è…|halvtreds|femti;femtio
m|Il rigsdansk è…|la varietà standard di scuola e media|un dialetto della Fionia;una lingua faroese
m|Il parere di Jonas sull'imitare un dialetto è…|capirlo ma non imitarlo|imitarlo sempre;evitare di ascoltarlo
c|På vestjysk siger man «æ hus» i stedet for «___».|huset|forma determinata del rigsdansk
c|Hun har en tydelig ___ fra Jylland.|accent;dialekt|suggerimento: parlata
c|Jeg forstår ham ikke, når han taler så ___ jysk.|bredt|molto marcato (neutro)
c|Mange danskere forstår norsk, fordi de to sprog har et tæt ___.|slægtskab|parentela
c|Han taler så hurtigt, at han ___ halvdelen af ordene.|sluger|inghiotte
c|Dialekterne ___ sig langsomt rigsdansk.|nærmer|si avvicinano (nærme sig + oggetto)
o|Jeg forstår godt sønderjysk, men jeg ville aldrig efterligne det.|Capisco bene il sønderjysk, ma non lo imiterei mai.
o|Bornholmsk er en gammel østdansk dialekt.|Il bornholmsk è un antico dialetto orientale del danese.
o|Mange unge i København bruger meget slang.|Molti giovani a Copenaghen usano molto gergo.
t|Il mio coinquilino viene dallo Jutland.|Min bofælle kommer fra Jylland;Min bofælle er fra Jylland;Min roommate kommer fra Jylland;Min roommate er fra Jylland
t|Non ho capito niente: parlava con un forte accento.|Jeg forstod ingenting, han talte med en kraftig accent;Jeg forstod ikke noget, han talte med en tydelig accent;Jeg forstod ingenting, han talte bredt jysk;Jeg forstod ingenting, hun talte med en kraftig accent;Jeg forstod ikke noget, han talte med en kraftig accent
t|Parlo danese standard, ma capisco anche un po' di jysk.|Jeg taler rigsdansk, men jeg forstår også lidt jysk;Jeg taler almindeligt dansk, men jeg forstår også lidt jysk
t|Il pranzo è alle dodici.|Frokosten er klokken tolv;Frokosten er klokken 12;Frokost er klokken tolv
`,
prod: {
task: "Scrivi un messaggio a un amico italiano (80–150 parole, in danese) che sta per trasferirsi in Danimarca. Spiega che il danese ha molte varianti, che cosa conviene capire e che cosa no, e avvisalo di una parola trappola con norvegese o svedese. Usa un tono amichevole.",
points: ["Dire che esistono varianti regionali (rigsdansk, jysk, bornholmsk) e citare almeno un esempio", "Spiegare che è meglio capire le varianti che imitarle, e perché", "Citare una parola trappola con il norvegese o lo svedese (rolig, frokost, numeri)", "Chiudere con un consiglio pratico per capire meglio"],
model: "Kære Giulia, nu har jeg boet i København i to år, og jeg har lært, at dansk ikke er ét sprog, men mange. I skolen og i fjernsynet taler man rigsdansk, men en kollega fra Vestjylland siger for eksempel æ foran ordene, og på Bornholm har de ældre deres egen dialekt. Jeg forstår meget, men jeg prøver ikke at efterligne dem, for det kan lyde som en parodi. Pas også på norsk og svensk: på svensk betyder rolig sjov, og på norsk er frokost morgenmad! Mit råd er, at du beder folk om at tale langsommere. Det er aldrig pinligt. Mange hilsner, Marco",
model_it: "Cara Giulia, ormai vivo a Copenaghen da due anni e ho imparato che il danese non è una lingua sola, ma molte. A scuola e in televisione si parla rigsdansk, ma una collega del Vestjylland dice per esempio «æ» davanti alle parole, e a Bornholm gli anziani hanno il loro dialetto. Capisco molto, ma non cerco di imitarli, perché può suonare come una parodia. Attenzione anche a norvegese e svedese: in svedese «rolig» significa divertente e in norvegese «frokost» è la colazione! Il mio consiglio è di chiedere alle persone di parlare più piano. Non è mai imbarazzante. Tanti saluti, Marco"
},
talk: {
title: "Un'insegnante dello Jutland",
role: "Mette, insegnante originaria del Vestjylland, che parla con un leggero accento jutlandese",
mission: "Chiedi a Mette di spiegarti due parole o tratti del suo dialetto, di' che cosa capisci e che cosa no, e racconta una parola trappola con il norvegese o lo svedese.",
opener: "Hej! Jeg kommer fra Vestjylland, så jeg taler nok lidt anderledes. Siger du bare til, hvis du ikke forstår mig.",
opener_it: "Ciao! Vengo dal Vestjylland, quindi parlo probabilmente un po' diversamente. Dimmi pure se non mi capisci.",
useful: ["Kan du sige det lidt langsommere? = Puoi dirlo un po' più piano?", "Hvad hedder det på rigsdansk? = Come si dice in rigsdansk?", "Er det et jysk ord? = È una parola jutlandese?", "Jeg forstår det godt, men jeg tør ikke selv tale dialekt. = Lo capisco bene, ma non oso parlare in dialetto.", "Det lyder rigtig hyggeligt. = Suona davvero piacevole.", "Hvor kommer du fra? = Da dove vieni?", "På norsk betyder frokost morgenmad. = In norvegese frokost significa colazione.", "Det var træls at misforstå det. = Che noia aver frainteso."]
}
});
COURSE.push({
id: "c1-07", level: "C1", n: 7,
title: "Akademisk dansk",
sub: "Lingua accademica e Studieprøven: struttura dell'opgave, nominalizzazioni, passivo, citare, cautela",
goals: ["Costruire una opgave con introduzione, problemformulering, analisi e conclusione", "Usare nominalizzazioni, passivo e frasi lunghe con subordinate", "Citare e riferire con ifølge, jf., hævder, påpeger, konkluderer", "Prendere posizione con cautela e usare connettivi argomentativi"],
words: `
n|en|opgave|opgaven|opgaver|opgaverne|compito scritto, elaborato
n|en|problemformulering|problemformuleringen|problemformuleringer|problemformuleringerne|formulazione del problema
n|en|problemstilling|problemstillingen|problemstillinger|problemstillingerne|questione da studiare
n|en|indledning|indledningen|indledninger|indledningerne|introduzione
n|en|konklusion|konklusionen|konklusioner|konklusionerne|conclusione
n|et|afsnit|afsnittet|afsnit|afsnittene|paragrafo
n|en|kilde|kilden|kilder|kilderne|fonte
n|en|litteraturliste|litteraturlisten|litteraturlister|litteraturlisterne|bibliografia
n|en|henvisning|henvisningen|henvisninger|henvisningerne|rimando, riferimento
n|en|analyse|analysen|analyser|analyserne|analisi
n|et|argument|argumentet|argumenter|argumenterne|argomento
n|en|hypotese|hypotesen|hypoteser|hypoteserne|ipotesi
n|en|teori|teorien|teorier|teorierne|teoria
n|en|metode|metoden|metoder|metoderne|metodo
n|en|undersøgelse|undersøgelsen|undersøgelser|undersøgelserne|indagine, studio
n|et|resultat|resultatet|resultater|resultaterne|risultato
n|en|forskning|forskningen|-|-|ricerca (scientifica)
n|en|forsker|forskeren|forskere|forskerne|ricercatore
n|en|tendens|tendensen|tendenser|tendenserne|tendenza
n|en|sammenhæng|sammenhængen|sammenhænge|sammenhængene|nesso, contesto
n|en|årsag|årsagen|årsager|årsagerne|causa
n|en|nominalisering|nominaliseringen|nominaliseringer|nominaliseringerne|nominalizzazione
n|en|bisætning|bisætningen|bisætninger|bisætningerne|proposizione subordinata
n|et|forbehold|forbeholdet|forbehold|forbeholdene|riserva, cautela
n|en|begrundelse|begrundelsen|begrundelser|begrundelserne|motivazione
v|påpege|påpeger|påpegede|påpeget|far notare
v|hævde|hævder|hævdede|hævdet|sostenere, affermare
v|konkludere|konkluderer|konkluderede|konkluderet|concludere
v|henvise|henviser|henviste|henvist|rimandare
v|citere|citerer|citerede|citeret|citare
v|referere|refererer|refererede|refereret|riferire
v|underbygge|underbygger|underbyggede|underbygget|sostenere con prove
v|belyse|belyser|belyste|belyst|illustrare, mettere in luce
v|undersøge|undersøger|undersøgte|undersøgt|indagare
v|tyde|tyder|tydede|tydet|indicare (tyde på)
v|bero|beror|beroede|beroet|dipendere (bero på)
v|fremhæve|fremhæver|fremhævede|fremhævet|mettere in evidenza
v|afgrænse|afgrænser|afgrænsede|afgrænset|delimitare
a|relevant|relevant|relevante|mere relevant|mest relevant|rilevante
a|nuanceret|nuanceret|nuancerede|mere nuanceret|mest nuanceret|sfumato
a|entydig|entydigt|entydige|mere entydig|mest entydig|univoco
a|tvivlsom|tvivlsomt|tvivlsomme|mere tvivlsom|mest tvivlsom|dubbio
a|saglig|sagligt|saglige|mere saglig|mest saglig|obiettivo, pertinente
x|ifølge|secondo (una fonte)
x|jf.|cfr. (jævnfør)
x|på baggrund af|sulla base di
x|med henblik på|al fine di
x|det tyder på|ciò indica che
x|man kan argumentere for|si può sostenere che
x|dermed|con ciò
x|således|così, in tal modo
`,
grammar: [
{ h: "La struttura di un'opgave e lo Studieprøven", body: `
La **Studieprøven** è l'esame ufficiale di danese di livello **C1**, pensato per chi non ha il danese come lingua madre e vuole studiare in danese all'università o in altre formazioni superiori. Ha tre parti: **comprensione scritta** (lettura, 25 + 65 minuti), **produzione scritta** (3 ore: un testo di almeno 400 parole a partire da un grafico o una tabella) e **prova orale** (circa 30 minuti: presentazione di un tema e conversazione). Per superarla serve almeno 02 in ciascuna delle tre parti. Formato, date e requisiti cambiano: controlla sempre su *danskogproever.dk*.
Quanto segue serve anche per le **opgaver** all'università (*opgave*, *projekt*, *rapport*).
| parte | funzione | formule utili |
| *indledning* | presenta tema e interesse | *I denne opgave undersøger jeg …* |
| *problemformulering* | domanda chiara e delimitata | *Hvordan påvirker … …?* |
| *afgrænsning* | dice che cosa si lascia fuori | *Opgaven afgrænses til …* |
| *analyse* | argomenti, dati, fonti | *Ifølge … / Det fremgår af …* |
| *diskussion* | mette in prospettiva | *På den ene side … På den anden side …* |
| *konklusion* | risponde alla domanda | *Det kan konkluderes, at …* |
- La **problemformulering** è il cuore: una sola domanda, aperta, con parole chiave (non «sì/no»).
- Ogni paragrafo ha una frase guida e un esempio; chiudi con un rimando al problema.
- Alla fine c'è la **litteraturliste** con tutte le fonti citate.
» Formålet med opgaven er at belyse, hvordan studiejob påvirker frafald. = Lo scopo dell'elaborato è mettere in luce come i lavori da studente influiscano sull'abbandono degli studi.
» Opgaven afgrænses til studerende på de store universiteter. = L'elaborato si limita agli studenti delle grandi università.
` },
{ h: "Nominalizzazioni, passivo e frasi lunghe", body: `
## Stile nominale
Nello scritto accademico i verbi diventano sostantivi: si ottiene un testo più denso e impersonale.
| verbale | nominale |
| *Man undersøgte, hvordan folk bruger tiden.* | *Undersøgelsen af tidsforbruget …* |
| *Antallet stiger hurtigt.* | *Den hurtige stigning i antallet …* |
| *Fordi priserne steg …* | *På grund af prisstigningerne …* |
## Passivo
- Con **blive + participio**: azione e agente (anche implicito): *Resultaterne blev offentliggjort i maj.*
- Con **-s**: più formale e spesso generale: *Problemet kan løses.*, *Der forskes meget i emnet.*
- Il passivo evita *man* e il tono personale: *Interviewene blev gennemført i marts.*
» Der er blevet foretaget en række undersøgelser af emnet. = Sono state svolte diverse indagini sul tema.
» Det diskuteres, om reformen har virket. = Si discute se la riforma abbia funzionato.
## Frasi lunghe con subordinate
In una **bisætning** *ikke* e gli altri avverbi di frase stanno **prima** del verbo coniugato: *fordi man ikke altid har råd*, *at resultaterne ofte er tvetydige*. Se riempi la frase di subordinate, tieni il filo con virgole e connettivi.
» Selv om undersøgelsen omfatter få deltagere, tyder resultaterne på, at der er en sammenhæng, som bør undersøges nærmere. = Anche se lo studio comprende pochi partecipanti, i risultati indicano che esiste un nesso da approfondire.
! Frasi troppo lunghe stancano. Regola pratica: al massimo due subordinate per frase, poi un punto.
` },
{ h: "Citare, riferire e prendere posizione con cautela", body: `
## Riferire una fonte
| verbo / formula | uso |
| *ifølge X* | secondo X (senza impegno tuo) |
| *X hævder, at …* | sostiene, spesso con distanza |
| *X påpeger, at …* | fa notare (neutro/positivo) |
| *X konkluderer, at …* | arriva alla conclusione |
| *jf. X (2020)* | cfr. (nelle note e tra parentesi) |
| *som X fremhæver …* | come X mette in evidenza |
- Scegli il verbo con attenzione: *hævde* lascia un dubbio, *påpege* no.
- Nei verbi di opinione il tempo è spesso il **presente**: *Hansen påpeger, at …*
## Cautela (forbehold)
Danese scientifico: poche affermazioni assolute.
» Det tyder på, at flere studerende dropper ud på grund af økonomi. = Ciò indica che più studenti abbandonano per ragioni economiche.
» Man kan argumentere for, at reformen har haft en positiv effekt. = Si può sostenere che la riforma abbia avuto un effetto positivo.
» Resultaterne bør dog tolkes med forsigtighed. = I risultati vanno comunque interpretati con prudenza.
## Connettivi argomentativi
| funzione | connettivi |
| aggiungere | *desuden*, *endvidere*, *ydermere* |
| contrasto | *derimod*, *imidlertid*, *dog* |
| causa | *fordi*, *da*, *idet* |
| conseguenza | *derfor*, *således*, *dermed* |
| esempio | *for eksempel*, *eksempelvis* |
! *Fordi* e *da* introducono una subordinata (verbo dopo il soggetto e gli avverbi); *derfor* apre una principale e il verbo viene subito dopo: *Derfor ændrede de metoden.*
` },
],
text: {
title: "Studiejob og frafald", kind: "Estratto di opgave",
intro: "Un estratto dell'elaborato di Anna per l'università di Aarhus. I dati sono inventati a scopo didattico.",
lines: `
Indledning = Introduzione
I denne opgave undersøger jeg, hvordan studiejob påvirker risikoen for frafald på universitetet. = In questo elaborato indago come i lavori da studente influiscano sul rischio di abbandono universitario.
Emnet er relevant, fordi mange studerende arbejder ved siden af studiet for at klare sig økonomisk. = Il tema è rilevante perché molti studenti lavorano accanto agli studi per cavarsela economicamente.
Problemformulering = Formulazione del problema
Hvordan hænger antallet af arbejdstimer sammen med frafaldet blandt studerende? = In che modo il numero di ore lavorate è collegato all'abbandono degli studi tra gli studenti?
Opgaven afgrænses til bacheloruddannelser på universiteter i Danmark. = L'elaborato si limita ai corsi di laurea triennale nelle università danesi.
Analyse = Analisi
Ifølge en (opdigtet) undersøgelse af 800 studerende arbejder halvdelen mere end ti timer om ugen. = Secondo uno studio (inventato) su 800 studenti la metà lavora più di dieci ore a settimana.
Forskerne påpeger, at de, der arbejder mellem fem og ti timer, ofte klarer sig lige så godt som andre. = I ricercatori fanno notare che chi lavora tra cinque e dieci ore se la cava spesso bene quanto gli altri.
Derimod hævder de, at mere end femten ugentlige timer øger risikoen for at falde fra. = Sostengono invece che più di quindici ore settimanali aumentino il rischio di abbandonare.
Det tyder således på, at det ikke er arbejdet i sig selv, men antallet af timer, der er afgørende. = Ciò indica dunque che non è il lavoro in sé, ma il numero di ore, a essere decisivo.
Diskussion = Discussione
Man kan argumentere for, at studiejob også kan styrke studerendes kompetencer og netværk. = Si può sostenere che i lavori da studente possano anche rafforzare le competenze e le reti di contatti.
Undersøgelsen har imidlertid begrænsninger, fordi den kun omfatter få uddannelser. = Lo studio ha tuttavia dei limiti, perché comprende pochi corsi.
Resultaterne bør derfor tolkes med forbehold. = I risultati vanno quindi interpretati con cautela.
Desuden kan årsagerne til frafald være mange, og de er ikke altid økonomiske. = Inoltre le cause dell'abbandono possono essere molte e non sempre economiche.
Konklusion = Conclusione
Samlet set konkluderer opgaven, at der er en sammenhæng mellem mange arbejdstimer og frafald. = Nel complesso l'elaborato conclude che esiste un nesso tra molte ore di lavoro e abbandono.
Sammenhængen er dog ikke entydig og beror blandt andet på uddannelsens struktur. = Il nesso non è però univoco e dipende, tra l'altro, dalla struttura del corso.
Det kunne være relevant at undersøge, om fleksible uddannelser mindsker problemet. = Sarebbe rilevante indagare se corsi flessibili riducano il problema.
`,
q: `
Hvad er opgavens emne?|Hvordan studiejob påvirker risikoen for frafald|Hvordan man vælger uddannelse;Hvor meget studerende tjener
Hvilke uddannelser omfatter opgaven?|Bacheloruddannelser på danske universiteter|Alle uddannelser i Europa;Kun efteruddannelser
Hvad påpeger forskerne om dem, der arbejder fem til ti timer?|De klarer sig ofte lige så godt som andre|De falder altid fra;De tjener mest
Hvorfor bør resultaterne tolkes med forbehold?|Undersøgelsen omfatter kun få uddannelser|Forskerne har løjet;Der er ingen data
Hvad kan studiejob ifølge diskussionen også gøre?|Styrke kompetencer og netværk|Ødelægge økonomien;Give færre timer
Hvordan er sammenhængen mellem timer og frafald ifølge konklusionen?|Den er ikke entydig|Den findes slet ikke;Den er altid den samme
`},
ex: `
m|Quale verbo introduce una fonte con un po' di distanza?|X hævder, at …|X påpeger, at …;X konkluderer, at …
m|«Det tyder på, at …» serve per…|indicare una conclusione prudente|esprimere una certezza assoluta;dare un ordine
m|«Jf.» sta per…|jævnfør (cfr.)|ifølge;jeg forstår
m|Dove va l'avverbio *ikke* in una bisætning?|prima del verbo|dopo il verbo;a fine frase
m|La problemformulering deve essere…|una domanda aperta e delimitata|una risposta già pronta;un titolo vago
m|«Resultaterne bør tolkes med forbehold» significa…|vanno letti con cautela|sono sicuramente giusti;sono falsi
c|___ en undersøgelse fra 2022 er tallet steget.|Ifølge|secondo
c|Forskeren ___, at tallene er usikre.|påpeger|fa notare (påpege senza «på»)
c|Opgaven ___ til bacheloruddannelser.|afgrænses|si limita (passivo in -s)
c|Resultaterne ___ offentliggjort i maj.|blev;bliver|passivo con blive
c|Det tyder ___, at der er en sammenhæng.|på|tyde på
c|Undersøgelsen omfatter kun få uddannelser, og ___ bør resultaterne tolkes med forsigtighed.|derfor;dermed;således|connettivo di conseguenza (poi verbo e soggetto)
o|Man kan argumentere for, at reformen har virket.|Si può sostenere che la riforma abbia funzionato.
o|Resultaterne bør tolkes med forsigtighed.|I risultati vanno interpretati con prudenza.
o|Sammenhængen beror på flere faktorer.|Il nesso dipende da più fattori.
o|Selv om undersøgelsen er lille, tyder den på en tendens.|Anche se lo studio è piccolo, indica una tendenza.
t|Secondo lo studio, la tendenza è chiara.|Ifølge undersøgelsen er tendensen tydelig;Ifølge undersøgelsen er tendensen klar|forma con ifølge
t|L'autore sostiene che il metodo non è affidabile.|Forfatteren hævder, at metoden ikke er pålidelig;Forfatteren hævder, at metoden ikke er til at stole på;Forfatteren påstår, at metoden ikke er pålidelig;Forfatteren hævder, at metoden ikke er troværdig
t|La questione è stata studiata a lungo.|Spørgsmålet er blevet undersøgt længe;Emnet er blevet undersøgt længe;Spørgsmålet har været undersøgt længe;Spørgsmålet er blevet undersøgt i lang tid
t|In questo elaborato indago il rapporto tra lavoro e studio.|I denne opgave undersøger jeg sammenhængen mellem arbejde og studie;I denne opgave undersøger jeg forholdet mellem arbejde og studie
`,
prod: {
task: "Scrivi in danese (80–150 parole) l'introduzione di una opgave su un tema a scelta legato alla tua vita a Copenaghen (per esempio i lavori da studente, gli affitti, la bicicletta). Presenta tema, problemformulering e limiti dell'elaborato e cita almeno una fonte (anche inventata) con un verbo adatto.",
points: ["Presentare il tema e perché è rilevante", "Formulare la problemformulering come domanda aperta", "Dire che cosa si lascia fuori (afgrænsning)", "Citare una fonte con ifølge/påpeger/hævder e usare almeno un'espressione di cautela"],
model: "Denne opgave handler om cykeltrafik i København. Emnet er relevant, fordi byen vil være mere klimavenlig, men samtidig bliver det mere og mere trangt på cykelstierne. Problemformuleringen er: Hvordan kan kommunen få flere til at cykle uden at forværre trafikken på de mest befærdede stier? Opgaven afgrænses til indre by og omfatter ikke trafikken i forstæderne. Ifølge en rapport fra kommunen er antallet af cyklister steget markant, og forskerne påpeger, at kapaciteten er under pres. Det tyder således på, at der er behov for nye løsninger, men resultaterne bør tolkes med forbehold, fordi tallene ikke dækker hele året.",
model_it: "Questo elaborato tratta del traffico ciclistico a Copenaghen. Il tema è rilevante perché la città vuole essere più rispettosa del clima, ma allo stesso tempo le piste ciclabili diventano sempre più affollate. La formulazione del problema è: come può il comune far pedalare più persone senza peggiorare il traffico sulle piste più frequentate? L'elaborato si limita al centro città e non comprende il traffico nei sobborghi. Secondo un rapporto del comune il numero di ciclisti è aumentato in modo marcato, e i ricercatori fanno notare che la capacità è sotto pressione. Ciò indica dunque che servono nuove soluzioni, ma i risultati vanno interpretati con cautela, perché i dati non coprono tutto l'anno."
},
talk: {
title: "Colloquio con il relatore",
role: "Mette, relatrice (vejleder) dell'università, che discute con te la tua bozza di opgave",
mission: "Presenta la tua problemformulering, spiega come l'hai delimitata e rispondi a una critica sulle fonti con una formula prudente.",
opener: "Hej, jeg har læst dit udkast. Kan du forklare, hvad din problemformulering egentlig er?",
opener_it: "Ciao, ho letto la tua bozza. Puoi spiegare qual è esattamente la tua problemformulering?",
useful: ["Min problemformulering er, hvordan … = La mia problemformulering è come…", "Jeg har afgrænset opgaven til … = Ho delimitato l'elaborato a…", "Ifølge … er det sådan, at … = Secondo… è così che…", "Man kan argumentere for, at … = Si può sostenere che…", "Det tyder på, at … = Ciò indica che…", "Det er et godt spørgsmål; jeg tager forbehold for … = È una buona domanda; faccio riserva su…", "Jeg henviser til afsnit to. = Rimando al secondo paragrafo.", "Kunne du anbefale en relevant kilde? = Potresti consigliarmi una fonte rilevante?"]
}
});
COURSE.push({
id: "c1-08", level: "C1", n: 8,
title: "Mødesprog",
sub: "Riunioni, prendere la parola, dissentire con garbo, feedback, trattative, janteloven, mail di lavoro",
goals: ["Partecipare a una riunione: prendere la parola, interrompere con garbo, chiedere chiarimenti", "Dissentire in modo danese: indiretto ma chiaro", "Dare e ricevere feedback e trattare stipendio e orari", "Capire la cultura del lavoro danese (gerarchie piatte, janteloven) e scrivere mail professionali"],
words: `
n|et|møde|mødet|møder|møderne|riunione
n|en|dagsorden|dagsordenen|dagsordener|dagsordenerne|ordine del giorno
n|et|referat|referatet|referater|referaterne|verbale
n|et|punkt|punktet|punkter|punkterne|punto
n|en|ordstyrer|ordstyreren|ordstyrere|ordstyrerne|moderatore (della discussione)
n|en|medarbejder|medarbejderen|medarbejdere|medarbejderne|dipendente
n|en|leder|lederen|ledere|lederne|responsabile, capo
n|en|tillidsrepræsentant|tillidsrepræsentanten|tillidsrepræsentanter|tillidsrepræsentanterne|rappresentante sindacale
n|en|overenskomst|overenskomsten|overenskomster|overenskomsterne|contratto collettivo
n|en|løn|lønnen|lønninger|lønningerne|stipendio
n|en|lønforhandling|lønforhandlingen|lønforhandlinger|lønforhandlingerne|trattativa salariale
n|et|tillæg|tillægget|tillæg|tillæggene|maggiorazione, supplemento
n|en|arbejdstid|arbejdstiden|arbejdstider|arbejdstiderne|orario di lavoro
n|en|fleksibilitet|fleksibiliteten|-|-|flessibilità
n|en|deadline|deadlinen|deadliner|deadlinerne|scadenza
n|et|ansvar|ansvaret|-|-|responsabilità
n|et|samarbejde|samarbejdet|samarbejder|samarbejderne|collaborazione
n|et|hierarki|hierarkiet|hierarkier|hierarkierne|gerarchia
n|en|holdning|holdningen|holdninger|holdningerne|posizione, opinione
n|en|uenighed|uenigheden|uenigheder|uenighederne|disaccordo
n|en|enighed|enigheden|-|-|accordo
n|en|indvending|indvendingen|indvendinger|indvendingerne|obiezione
n|et|forslag|forslaget|forslag|forslagene|proposta
n|en|beslutning|beslutningen|beslutninger|beslutningerne|decisione
n|en|tilbagemelding|tilbagemeldingen|tilbagemeldinger|tilbagemeldingerne|riscontro, feedback
v|afbryde|afbryder|afbrød|afbrudt|interrompere
v|forhandle|forhandler|forhandlede|forhandlet|trattare, negoziare
v|aftale|aftaler|aftalte|aftalt|concordare
v|prioritere|prioriterer|prioriterede|prioriteret|dare priorità
v|uddelegere|uddelegerer|uddelegerede|uddelegeret|delegare
v|understrege|understreger|understregede|understreget|sottolineare
v|indvende|indvender|indvendte|indvendt|obiettare
v|tilslutte|tilslutter|tilsluttede|tilsluttet|aderire (tilslutte sig)
v|melde|melder|meldte|meldt|comunicare (melde tilbage)
v|følge|følger|fulgte|fulgt|seguire (følge op på)
a|flad|fladt|flade|fladere|fladest|piatto (hierarki)
a|uformel|uformelt|uformelle|mere uformel|mest uformel|informale
a|konstruktiv|konstruktivt|konstruktive|mere konstruktiv|mest konstruktiv|costruttivo
a|høflig|høfligt|høflige|mere høflig|mest høflig|educato
a|tydelig|tydeligt|tydelige|mere tydelig|mest tydelig|chiaro
x|janteloven|la «legge di Jante» (non crederti da più degli altri)
x|tage ordet|prendere la parola
x|give ordet til|dare la parola a
x|lige til sidst|giusto un'ultima cosa
x|jeg er ikke helt enig|non sono del tutto d'accordo
x|det er jeg ikke sikker på|non ne sono sicuro
x|lige en bemærkning|giusto un'osservazione
x|med venlig hilsen|distinti saluti
x|mvh|cordiali saluti (abbreviato)
`,
grammar: [
{ h: "Prendere la parola, interrompere, dissentire", body: `
Nelle riunioni danesi si parla in modo diretto, ma con un tono **sobrio e cortese**. Si può interrompere, ma di solito con una breve formula.
## Prendere la parola e interrompere
- *Må jeg lige tage ordet?* = Posso prendere la parola un attimo?
- *Må jeg lige komme med en bemærkning?* = Posso fare un'osservazione?
- *Undskyld, jeg afbryder, men …* = Scusa se interrompo, ma…
- *Må jeg lige nå at sige noget, inden vi går videre?* = Posso dire una cosa prima di andare avanti?
- Per ridare la parola: *Undskyld, jeg tog ordet fra dig. Fortsæt endelig.*
## Dissentire in modo danese
La regola: **indiretto ma chiaro**. Si ammorbidisce con *lidt*, *ikke helt*, *måske*, ma poi si dice la propria posizione.
| diretto, quasi brusco | formula tipica |
| *Nej, det er forkert.* | *Jeg er ikke helt enig.* |
| *Det går ikke.* | *Jeg er ikke sikker på, at det kan lade sig gøre.* |
| *Din idé er dårlig.* | *Jeg har lidt svært ved at se, hvordan det skal fungere.* |
| *Du tager fejl.* | *Jeg ser det lidt anderledes.* |
» Jeg hører, hvad du siger, men jeg er ikke helt overbevist. = Capisco quello che dici, ma non sono del tutto convinto.
» Det kunne man godt, men jeg tror, at vi får problemer med tiden. = Si potrebbe, ma credo che avremo problemi di tempo.
» Jeg tænkte på, om vi kunne prøve det på en anden måde. = Pensavo se potessimo provare in un altro modo.
! «Det er interessant» o «Det kunne man godt» possono voler dire «non sono d'accordo»: ascolta cosa viene dopo il *men*.
` },
{ h: "Janteloven, gerarchie piatte e cultura del lavoro", body: `
La **janteloven** è un'immagine culturale formulata dallo scrittore danese-norvegese **Aksel Sandemose** nel romanzo *En flygtning krydser sit spor* (1933), ambientato nell'immaginaria cittadina di Jante: dieci «regole», la prima delle quali è *Du skal ikke tro, at du er noget.* Descrive in modo ironico un atteggiamento di piccola comunità: nessuno si deve credere migliore degli altri. Oggi si usa in senso critico o scherzoso e non è una legge vera.
Sul lavoro, però, si vede una cultura generalmente:
- **gerarchie piatte**: ci si dà del *du* con tutti, anche con il capo; si può chiamare il direttore per nome;
- **fiducia e responsabilità** (*tillid og ansvar*): ti viene dato un compito e ti si lascia lavorare;
- **consenso**: le decisioni si preparano discutendo, e a volte la riunione sembra lunga proprio per questo;
- **poco rumore sui titoli**: non c'è bisogno di dire *Dottore* o *Ingegnere*.
- **Fleksibilitet** e **work-life balance**: orari flessibili, ma rispetto per il tempo libero. Si va a casa verso le 16–17 e si risponde meno alle mail la sera.
Molte condizioni di lavoro (salari minimi di settore, orario, maggiorazioni) sono regolate da **overenskomster**, contratti collettivi negoziati tra sindacati e datori di lavoro, più che da leggi: in Danimarca non esiste un salario minimo fissato per legge.
» Her kalder vi alle hinanden ved fornavn, også direktøren. = Qui ci chiamiamo tutti per nome, anche il direttore.
» Chefen stoler på, at vi løser opgaven uden at blive kontrolleret. = Il capo si fida che risolviamo il compito senza essere controllati.
» Det kan godt føles lidt janteagtigt, hvis man roser sig selv for meget. = Può sembrare un po' «jantiano» lodarsi troppo.
` },
{ h: "Feedback, trattative e mail di lavoro", body: `
## Feedback
Il feedback danese è di solito **concreto e sobrio**: si dice cosa è andato bene e cosa si può migliorare, senza enfasi.
» Det fungerede godt, at du forberedte dig så grundigt. = Ha funzionato bene che ti sia preparato così a fondo.
» Næste gang kunne du måske sende dagsordenen en dag før. = La prossima volta potresti magari mandare l'ordine del giorno un giorno prima.
» Jeg vil gerne bede om en tilbagemelding på min præsentation. = Vorrei un riscontro sulla mia presentazione.
## Trattare stipendio e orari
- *Jeg vil gerne tale om min løn.* = Vorrei parlare del mio stipendio.
- *Jeg har fået flere ansvarsområder, og derfor vil jeg gerne forhandle om en lønstigning.* = Ho ricevuto più responsabilità e perciò vorrei negoziare un aumento.
- *Er der mulighed for mere fleksible arbejdstider?* = C'è la possibilità di orari più flessibili?
- Si parla spesso di **lønforhandling** una volta l'anno, e la persona che rappresenta i colleghi è la **tillidsrepræsentant**.
## Mail di lavoro
| parte | formula |
| apertura | *Hej Line,* (informale) / *Kære Line Hansen,* (formale) |
| ringraziamento | *Tak for mødet i går.* |
| scopo | *Jeg skriver for at følge op på …* |
| richiesta | *Kunne du sende mig …?* |
| chiusura | *Mvh Marco* / *Med venlig hilsen Marco* |
» Tak for mødet. Jeg følger op på de aftalte punkter i morgen. = Grazie per la riunione. Domani faccio seguito ai punti concordati.
! Tra colleghi si usa spesso *Hej* e *Mvh*; con clienti o autorità, *Kære …* e *Med venlig hilsen*.
` },
],
text: {
title: "Referat fra personalemøde", kind: "Verbale di riunione",
intro: "Un breve verbale di una riunione del ristorante dove lavora Marco, con Line come responsabile.",
lines: `
Referat af personalemøde, restaurant Nyhavn Bistro = Verbale della riunione del personale, ristorante Nyhavn Bistro
Til stede: Line (leder), Marco, Sofie, Mads (ordstyrer) = Presenti: Line (responsabile), Marco, Sofie, Mads (moderatore)
Mads bød velkommen og gennemgik dagsordenen. = Mads diede il benvenuto e passò in rassegna l'ordine del giorno.
Punkt 1: Nye åbningstider = Punto 1: nuovi orari di apertura
Line foreslog at åbne en time tidligere i weekenden. = Line propose di aprire un'ora prima nel fine settimana.
Marco sagde, at han var enig i princippet, men at han var lidt bekymret for bemandingen om morgenen. = Marco disse di essere d'accordo in linea di principio, ma di essere un po' preoccupato per il personale al mattino.
Sofie tilføjede, at hun gerne ville vide, om der kommer et tillæg for de tidlige vagter. = Sofie aggiunse che avrebbe voluto sapere se è previsto un supplemento per i turni del mattino presto.
Line svarede, at det vil indgå i den kommende lønforhandling. = Line rispose che rientrerà nella prossima trattativa salariale.
Punkt 2: Feedback fra gæsterne = Punto 2: riscontri degli ospiti
Mads fremhævede, at flere gæster roser maden, men klager over ventetiden. = Mads mise in evidenza che molti ospiti lodano il cibo ma si lamentano dell'attesa.
Marco indvendte, at køkkenet allerede er presset, og at man bør prioritere de travleste timer. = Marco obiettò che la cucina è già sotto pressione e che si dovrebbe dare priorità alle ore più affollate.
Line afbrød og spurgte, om nogen havde et konkret forslag. = Line interruppe e chiese se qualcuno avesse una proposta concreta.
Sofie foreslog en ekstra person i køkkenet fredag og lørdag aften. = Sofie propose una persona in più in cucina il venerdì e il sabato sera.
Gruppen tilsluttede sig forslaget, dog med forbehold for budgettet. = Il gruppo aderì alla proposta, con riserva per il budget.
Punkt 3: Arbejdstider og ferie = Punto 3: orari e ferie
Line understregede, at alle skal sende ønsker til sommerferien inden den første marts. = Line sottolineò che tutti devono mandare le richieste per le ferie estive entro il primo marzo.
Marco spurgte, om det var muligt at samle to uger i juli. = Marco chiese se fosse possibile unire due settimane a luglio.
Line sagde, at det godt kunne lade sig gøre, men at hun ikke kunne love noget endnu. = Line disse che si poteva fare, ma che non poteva ancora promettere niente.
Aftalte opgaver: Line følger op på bemandingen, Sofie sender et udkast til vagtplan. = Compiti concordati: Line fa seguito sul personale, Sofie manda una bozza del piano dei turni.
Næste møde er den tolvte december. = La prossima riunione è il dodici dicembre.
Referent: Mads = Verbalizzante: Mads
`,
q: `
Hvem er ordstyrer på mødet?|Mads|Line;Marco
Hvad foreslog Line om åbningstiderne?|At åbne en time tidligere i weekenden|At lukke tidligere;At holde lukket om søndagen
Hvad var Marco bekymret for?|Bemandingen om morgenen|Lønnen;Maden
Hvad klager nogle gæster over ifølge Mads?|Ventetiden|Maden;Priserne
Hvad foreslog Sofie?|En ekstra person i køkkenet fredag og lørdag aften|Flere gæster;Lavere priser
Hvornår skal ferieønskerne sendes?|Inden den første marts|Inden den tolvte december;I næste uge
`},
ex: `
m|Quale formula serve per interrompere con garbo?|Undskyld, jeg afbryder, men …|Hold kæft;Lad mig tale
m|«Jeg er ikke helt enig» è…|un dissenso educato ma chiaro|un'approvazione;una scusa
m|La janteloven è…|un'immagine culturale (Sandemose, 1933), non una legge|una legge danese vera;un contratto di lavoro
m|Che cos'è un'overenskomst?|un contratto collettivo di lavoro|un tipo di stipendio;una riunione
m|In una mail a un collega di solito si chiude con…|Mvh|Højagtelsesfuldt;Kærlig hilsen
m|Quale frase è più indiretta ma chiara?|Jeg ser det lidt anderledes.|Du tager fejl.;Det er dumt.
c|Må jeg lige ___ ordet?|tage|prendere la parola
c|Jeg følger ___ på vores aftale i morgen.|op|følge op på
c|Jeg vil gerne ___ om min løn.|forhandle;tale;snakke|trattare
c|Marco ___, at køkkenet er presset.|indvendte;påpegede|obiettò
c|Hos os er der ikke langt til chefen: vi har et ___ hierarki.|fladt|piatto (neutro)
c|Jeg har brug for en ___ på min præsentation.|tilbagemelding|feedback
o|Jeg tænkte på, om vi kunne prøve det på en anden måde.|Pensavo se potessimo provare in un altro modo.
o|Tak for mødet i går, jeg følger op i morgen.|Grazie per la riunione di ieri, faccio seguito domani.
o|Her kalder vi alle hinanden ved fornavn.|Qui ci chiamiamo tutti per nome.
o|Er der mulighed for mere fleksible arbejdstider?|C'è la possibilità di orari più flessibili?
t|Non sono del tutto d'accordo.|Jeg er ikke helt enig;Jeg er ikke helt enig med dig
t|Posso fare un'osservazione?|Må jeg lige komme med en bemærkning;Må jeg komme med en bemærkning
t|Vorrei parlare del mio stipendio.|Jeg vil gerne tale om min løn;Jeg vil gerne snakke om min løn
t|Il capo si fida di noi.|Chefen stoler på os;Lederen stoler på os;Chefen har tillid til os
`,
prod: {
task: "Scrivi in danese una mail (80–150 parole) a Line, la tua responsabile, per chiedere un incontro e proporre di cambiare i tuoi orari in modo più flessibile (per esempio per frequentare un corso all'università). Sii cortese, concreto e rispetta il tono informale tra colleghi.",
points: ["Salutare e ringraziare per la riunione precedente", "Spiegare il motivo della richiesta in modo concreto", "Proporre una soluzione e mostrarti flessibile", "Chiudere con una formula adatta e proporre un incontro"],
model: "Hej Line, tak for mødet i går. Jeg skriver, fordi jeg gerne vil spørge, om der er mulighed for mere fleksible arbejdstider i næste semester. Jeg har fået et fag på universitetet tirsdag formiddag, og derfor kan jeg ikke komme før klokken 14 den dag. Til gengæld kan jeg gerne tage ekstra vagter i weekenden eller arbejde lidt længere om aftenen. Jeg tænkte på, om vi kunne tage en kort snak i denne uge. Skriv gerne, hvornår det passer dig. Jeg kan tilpasse mig. Mvh Marco",
model_it: "Ciao Line, grazie per la riunione di ieri. Ti scrivo perché vorrei chiedere se c'è la possibilità di orari più flessibili il prossimo semestre. Ho un corso all'università il martedì mattina, e perciò quel giorno non posso arrivare prima delle 14. In cambio posso fare turni in più nel fine settimana o lavorare un po' di più la sera. Pensavo se potessimo fare due chiacchiere questa settimana. Scrivimi pure quando ti va bene. Posso adattarmi. Cordiali saluti, Marco"
},
talk: {
title: "Riunione e dissenso",
role: "Line, la tua responsabile, che guida una riunione in cui presenta un nuovo piano",
mission: "Prendi la parola con garbo, esprimi un dissenso in modo indiretto ma chiaro e proponi un'alternativa concreta.",
opener: "Okay, så er alle her. Jeg vil gerne foreslå, at vi flytter vores ugentlige møde til mandag klokken otte. Hvad synes I?",
opener_it: "Bene, ci siamo tutti. Vorrei proporre di spostare la riunione settimanale al lunedì alle otto. Che ne pensate?",
useful: ["Må jeg lige tage ordet? = Posso prendere la parola?", "Jeg er ikke helt enig. = Non sono del tutto d'accordo.", "Jeg tænkte på, om vi kunne prøve … = Pensavo se potessimo provare…", "Jeg er ikke sikker på, at det kan lade sig gøre. = Non sono sicuro che sia fattibile.", "Det kunne man godt, men … = Si potrebbe, ma…", "Jeg ser det lidt anderledes. = Io la vedo un po' diversamente.", "Skal vi lige høre, hvad de andre tænker? = Sentiamo cosa pensano gli altri?", "Lige til sidst … = Giusto un'ultima cosa…"]
}
});
COURSE.push({
id: "c1-09", level: "C1", n: 9,
title: "Ironi og underdrivelse",
sub: "Umorismo danese, understatement, litote, sarcasmo, i vari «nå», interiezioni e risposte brevi",
goals: ["Riconoscere l'understatement danese (ikke så ringe endda, det er da meget godt)", "Distinguere ironia, sarcasmo e litote", "Capire i diversi significati di nå, nåh, nå ja, nå nå", "Usare interiezioni e risposte brevi (nemlig, præcis, tja, pyt, hold da op)"],
words: `
n|en|ironi|ironien|-|-|ironia
n|en|underdrivelse|underdrivelsen|underdrivelser|underdrivelserne|understatement
n|en|overdrivelse|overdrivelsen|overdrivelser|overdrivelserne|esagerazione
n|en|litote|litoten|litoter|litoterne|litote
n|en|sarkasme|sarkasmen|-|-|sarcasmo
n|en|humor|humoren|-|-|umorismo
n|en|selvironi|selvironien|-|-|autoironia
n|en|satire|satiren|satirer|satirerne|satira
n|en|vittighed|vittigheden|vittigheder|vittighederne|battuta
n|en|pointe|pointen|pointer|pointerne|punch line
n|en|replik|replikken|replikker|replikkerne|battuta (nel dialogo)
n|et|tonefald|tonefaldet|tonefald|tonefaldene|tono di voce
n|et|mundhuggeri|mundhuggeriet|-|-|battibecco
n|en|spøg|spøgen|spøge|spøgene|scherzo
n|et|drilleri|drilleriet|drillerier|drillerierne|presa in giro
n|en|bagtanke|bagtanken|bagtanker|bagtankerne|secondo fine
n|en|tvetydighed|tvetydigheden|tvetydigheder|tvetydighederne|ambiguità
n|en|skuffelse|skuffelsen|skuffelser|skuffelserne|delusione
n|en|tørhed|tørheden|-|-|secchezza (di umorismo)
n|en|serie|serien|serier|serierne|serie (tv)
n|et|publikum|publikummet|-|-|pubblico
v|spøge|spøger|spøgte|spøgt|scherzare
v|overdrive|overdriver|overdrev|overdrevet|esagerare
v|underdrive|underdriver|underdrev|underdrevet|minimizzare
v|antyde|antyder|antydede|antydet|alludere
v|håne|håner|hånede|hånet|schernire
v|latterliggøre|latterliggør|latterliggjorde|latterliggjort|mettere in ridicolo
v|afdramatisere|afdramatiserer|afdramatiserede|afdramatiseret|sdrammatizzare
v|le|ler|lo|leet|ridere
v|grine|griner|grinede|grinet|ridere, sghignazzare
v|læse|læser|læste|læst|leggere (læse mellem linjerne)
a|sarkastisk|sarkastisk|sarkastiske|mere sarkastisk|mest sarkastisk|sarcastico
a|tør|tørt|tørre|tørrere|tørrest|asciutto, secco
a|underspillet|underspillet|underspillede|mere underspillet|mest underspillet|sobrio, sottotono
a|pinlig|pinligt|pinlige|mere pinlig|mest pinlig|imbarazzante
a|fræk|frækt|frække|frækkere|frækkest|sfacciato
a|bidende|bidende|bidende|-|-|mordace
a|skæv|skævt|skæve|skævere|skævest|strampalato, storto
a|vittig|vittigt|vittige|vittigere|vittigst|spiritoso
x|ikke så ringe endda|niente male (lett. non così misero)
x|det er da meget godt|ma va benissimo (positivo; con un tono piatto può suonare tiepido)
x|det kunne have været værre|poteva andare peggio
x|nå|ah, bene (secondo il tono)
x|nåh|ah, ho capito
x|nå ja|ah già, certo
x|nå nå|su, su (rimprovero ironico)
x|nemlig|esatto
x|præcis|proprio così
x|tja|mah, boh
x|pyt|pazienza, non importa
x|hold da op|accidenti!, wow
`,
grammar: [
{ h: "Understatement, litote e sarcasmo", body: `
L'umorismo danese è spesso **tørt** (asciutto), **underspillet** e basato sul non dire troppo. Chi viene da una cultura più espressiva (come l'italiana) può non accorgersi dell'elogio o dello scherzo.
## Understatement: l'elogio al contrario
| frase | che cosa significa davvero |
| *Det er ikke så ringe endda.* | È bello / molto buono (un grande elogio) |
| *Det er da meget godt.* | Ma va benissimo! (positivo; con un tono piatto può però suonare tiepido) |
| *Det var ikke så dårligt.* | Mi è piaciuto molto |
| *Det kunne have været værre.* | Va bene / ci è andata bene |
| *Ikke helt skidt.* | Piuttosto bene |
- **Litote**: affermare qualcosa negando il contrario (*ikke dårligt* = bene). È una forma di understatement.
- **Overdrivelse**: l'opposto: *Det er den bedste kage i hele verden!* è meno tipico, ma si usa con amici.
» Hvordan var filmen? – Ikke så ringe endda. = Com'era il film? – Niente male (era molto bello).
» Du har lavet en kage? Det er da meget godt! = Hai fatto una torta? Ma che bello!
## Ironia e sarcasmo
L'ironia dice il contrario di ciò che si pensa, spesso con un **tonefald** particolare. Il sarcasmo è più duro e punta a ferire o a criticare.
» Nå, det gik jo godt. = Beh, è andata proprio bene. (detto dopo un disastro)
» Det var da en fantastisk idé. = Che idea fantastica. (sarcastico)
! Tra amici si fa *drilleri*: prese in giro affettuose. Con qualcuno che non conosci, meglio non iniziare tu: l'ironia è un segno di confidenza.
## Satira
La satira (*satire*) prende in giro politici e potere, in programmi televisivi, giornali e vignette. Tra le serie comiche più note c'è *Klovn* (dal 2005), basata sull'umorismo dell'imbarazzo (*pinlighedshumor*).
` },
{ h: "Il tuttofare «nå»", body: `
*Nå* è una delle parole più usate nel danese parlato, e cambia significato con il tono e il contesto.
| forma | uso | traduzione approssimativa |
| *Nå?* (tono ascendente) | invito a continuare | E allora? Dai, racconta. |
| *Nå.* (tono discendente) | rassegnazione, chiusura | Vabbè. |
| *Nåh!* (lungo, scende) | ho capito | Ah, ecco! |
| *Nåh…* (deluso) | delusione | Ah… |
| *Nå ja* | concessione, ricordo | Ah già / beh, sì. |
| *Nå nå!* | rimprovero ironico | Eh, su! / Piano! |
| *Nå, men …* | cambio di argomento | Allora, comunque… |
» Nå, hvordan gik det? = Allora, com'è andata?
» Nåh, det var derfor, du var så træt. = Ah, ecco perché eri così stanco.
» Nå ja, jeg glemte helt at ringe. = Ah già, mi sono dimenticato di chiamare.
» Nå nå, nu skal vi ikke overdrive. = Su, su, non esageriamo.
! Impara ad ascoltare l'intonazione: la parola è sempre la stessa, ma la melodia dice il significato. Se hai dubbi, rispondi con un *ja* neutro e continua.
` },
{ h: "Interiezioni e risposte brevi", body: `
Il danese parlato è pieno di parole brevi che servono a reagire senza spendere parole.
| parola | uso | esempio |
| *nemlig* | conferma enfatica | *– Det var en god film. – Nemlig!* |
| *præcis* | esatto | *– Så det handler om tid? – Præcis.* |
| *tja* | dubbio, mezza risposta | *– Skal vi tage derhen? – Tja …* |
| *pyt* | non fa niente | *Pyt, vi tager bare en anden bus.* |
| *hold da op* | stupore | *Hold da op, hvor er det dyrt!* |
| *jamen* | ma dai / ma sì | *Jamen, det var jo meningen.* |
| *øv* | delusione | *Øv, jeg missede toget.* |
| *av* | dolore | *Av, jeg slog mig!* |
| *uha* | brivido, disagio | *Uha, det lyder ikke godt.* |
- **Pyt** è molto danese: serve a lasciar correre. Esiste perfino il *pytknap* (un «pulsante pyt»), usato per esempio in alcune scuole per imparare a lasciar perdere le piccole frustrazioni.
- **Hold da op** può esprimere sorpresa positiva o negativa.
- Quando qualcuno ti dice *Tja…*, di solito vuole dire «non ne sono sicuro» o «hmm».
» Pyt med det. Vi finder en løsning. = Non importa. Troviamo una soluzione.
» Hold da op, har du allerede lavet det hele? = Accidenti, hai già fatto tutto?
» Tja, det kommer an på vejret. = Mah, dipende dal tempo.
! Alcune parole come *sgu* (un'imprecazione leggera, in origine *så Gud*) sono molto colloquiali: capiscile, ma evita di usarle finché non senti bene il registro.
` },
],
text: {
title: "Ikke så ringe endda", kind: "Dialogo",
intro: "Marco ha cucinato per gli amici e scopre cosa vuol dire davvero il commento di Jonas.",
lines: `
@Marco: Nå, hvad synes I? = Allora, che ne pensate?
@Jonas: Tja, det er ikke så ringe endda. = Mah, non è così male.
@Marco: Okay. Så var det ikke godt? = Okay. Quindi non era buono?
@Jonas: Jo, det var faktisk rigtig godt. = Sì, era anzi davvero buono.
@Marco: Men du sagde jo "ikke så ringe". = Ma hai detto «non così male».
@Mads: Det er Jonas' måde at sige, at det var fantastisk. = È il modo di Jonas di dire che era fantastico.
@Marco: Hold da op, I danskere er virkelig svære at læse. = Accidenti, voi danesi siete davvero difficili da leggere.
@Jonas: Nemlig. Vi roser kun, hvis vi bliver tvunget. = Esatto. Lodiamo solo se siamo costretti.
@Mads: Eller hvis det er rigtig, rigtig godt. = O se è davvero davvero buono.
@Marco: Og hvad betyder det, når I siger "nå"? = E cosa significa quando dite «nå»?
@Jonas: Det kommer an på tonen. = Dipende dal tono.
@Mads: "Nå?" betyder, at du skal fortsætte. "Nåh" betyder, at jeg har forstået det. = «Nå?» vuol dire che devi continuare. «Nåh» vuol dire che ho capito.
@Marco: Og "nå nå"? = E «nå nå»?
@Jonas: Det er, når nogen overdriver. Så siger vi nå nå, med et smil. = È quando qualcuno esagera. Allora diciamo «nå nå», con un sorriso.
@Marco: Jeg tror, jeg begynder at forstå det. = Credo di cominciare a capirlo.
@Mads: Nå ja, du skal også lære at sige "pyt". = Ah già, devi anche imparare a dire «pyt».
@Marco: Hvad betyder det? = Cosa significa?
@Jonas: At man ikke skal tage sig det nær. At man bare lader det ligge. = Che non te la devi prendere. Che lasci semplicemente perdere.
@Marco: Pyt med det, så. Jeg har brændt desserten. = Pazienza, allora. Ho bruciato il dolce.
@Mads: Det var da ærgerligt. Men det kunne have været værre. = Che peccato. Ma poteva andare peggio.
@Jonas: Ja, den er ikke så ringe endda. = Sì, non è così male.
@Marco: Nå nå! = Eh, su!
`,
q: `
Hvad mener Jonas egentlig med ikke så ringe endda?|At maden var rigtig god|At maden var dårlig;At han ikke var sulten
Hvorfor er Marco forvirret?|Danskere roser ofte meget indirekte|Maden smagte ikke af noget;Jonas talte italiensk
Hvad betyder nå? ifølge Mads?|At man skal fortsætte|At man skal gå;At man er vred
Hvornår siger man nå nå ifølge Jonas?|Når nogen overdriver, med et smil|Når nogen er syg;Når nogen går
Hvad betyder pyt?|At man ikke skal tage sig det nær|At man skal være sur;At man skal løbe
Hvad sker der med desserten til sidst?|Marco har brændt den|Mads har spist den;Jonas har glemt den
`},
ex: `
m|«Ikke så ringe endda» di solito significa…|molto buono|pessimo;così così
m|«Det kunne have været værre» è…|un commento rassegnato ma positivo|un rimprovero;una domanda
m|*Nåh!* (con tono che scende) significa di solito…|ah, ho capito|continua;vattene
m|*Nå nå!* con un sorriso significa…|su, non esageriamo|congratulazioni;grazie
m|*Pyt* si usa per…|lasciar correre|chiedere aiuto;ringraziare
m|*Hold da op* esprime…|stupore|noia;addio
c|Hvordan var filmen? – ___ så ringe endda.|Ikke|non
c|Det gik ikke så godt, men ___ med det.|pyt|pazienza
c|– Det var en god idé. – ___!|Nemlig;Præcis|esatto
c|___, hvor er det dyrt!|Hold da op|accidenti
c|– Skal vi tage derhen? – ___ … det er langt.|Tja|mah
c|Han ___ kun, når der er en god pointe.|ler;griner|ridere
o|Nå, det gik jo godt.|Beh, è andata proprio bene.
o|Det er da meget godt.|Ma è davvero molto buono.
o|Tja, det kommer an på vejret.|Mah, dipende dal tempo.
o|Pyt, vi tager bare en anden bus.|Pazienza, prendiamo un altro autobus.
t|Il film non era niente male.|Filmen var ikke så ringe endda;Filmen var ikke så dårlig;Filmen var ikke helt dårlig
t|Accidenti, quanto è caro!|Hold da op, hvor er det dyrt;Hold da op, det er dyrt
t|Non importa, ci riproviamo domani.|Pyt, vi prøver igen i morgen;Pyt med det, vi prøver igen i morgen
t|Ah, ecco perché sei così stanco.|Nåh, det var derfor, du er så træt;Nåh, det er derfor, du er så træt;Nåh, det var derfor, du var så træt
`,
prod: {
task: "Scrivi in danese (80–150 parole) un breve messaggio a un amico che ha appena fatto un colloquio o un esame, usando in modo adatto almeno due espressioni di understatement e due interiezioni (nå, pyt, hold da op, tja). Il tono è affettuoso e ironico.",
points: ["Reagire con un'interiezione alla notizia", "Usare almeno un'espressione di understatement (ikke så ringe endda, det er da meget godt)", "Usare almeno un nå con significato chiaro", "Chiudere con un consiglio rilassato (pyt, det kunne have været værre)"],
model: "Hold da op, du har bestået! Det er da ikke så ringe endda. Jeg havde ærligt talt været glad for et 02. Nå, hvad sagde censor? Tja, hvis hun sagde »ikke så ringe«, så var du jo tæt på et 12-tal, ha ha. Nå nå, nu skal du ikke blive alt for høj i hatten, men jeg er altså stolt af dig. Pyt med de to fejl i starten, det kunne have været meget værre. Vi skal have en øl i aften. Du giver, selvfølgelig. Hilsen Jonas",
model_it: "Accidenti, sei passato! Mica male, eh. Io, sinceramente, sarei stato contento di un 02. Allora, cosa ha detto il commissario esterno? Mah, se ha detto «niente male», eri quasi al 12, ah ah. Su, su, adesso non montarti la testa, ma sono proprio fiero di te. Pazienza per i due errori all'inizio: poteva andare molto peggio. Stasera ci beviamo una birra. Offri tu, naturalmente. Un saluto, Jonas"
},
talk: {
title: "Capirsi tra amici",
role: "Jonas, amico danese che scherza sempre con un tono asciutto e underspillet",
mission: "Racconta una tua esperienza (una cena, un esame, una giornata di lavoro) e reagisci ai commenti di Jonas con interiezioni giuste, poi chiedi che cosa vuole dire davvero.",
opener: "Nå, hvordan gik din dag? Er der noget, du vil fortælle? Eller var den bare... ikke så ringe endda?",
opener_it: "Allora, com'è andata la tua giornata? C'è qualcosa che vuoi raccontare? O è stata semplicemente... niente male?",
useful: ["Hold da op, det var uventet. = Accidenti, era inatteso.", "Tja, det kommer an på. = Mah, dipende.", "Pyt, det er ikke så vigtigt. = Pazienza, non è così importante.", "Nemlig, det er præcis det, jeg tænkte. = Esatto, è proprio quello che pensavo.", "Mener du det seriøst, eller er det ironi? = Dici sul serio o è ironia?", "Det var da meget godt. = Ma è molto buono.", "Nå nå, nu skal vi ikke overdrive. = Su, su, non esageriamo.", "Det kunne have været værre. = Poteva andare peggio."]
}
});
COURSE.push({
id: "c1-10", level: "C1", n: 10,
title: "Debat og samfund",
sub: "Politica, Folketinget e dibattito pubblico: kronik, concessioni e repliche, fallacie, frasi scisse",
goals: ["Capire come funzionano Folketinget, i partiti e i blocchi (senza giudizi)", "Leggere una kronik e un debatindlæg riconoscendone la struttura", "Concedere e ribattere con ganske vist … men, på den ene side, ikke desto mindre, tværtimod", "Riconoscere fallacie e toni, e usare frasi scisse per l'enfasi"],
words: `
n|et|folketing|folketinget|-|-|parlamento danese (Folketinget)
n|et|folketingsvalg|folketingsvalget|folketingsvalg|folketingsvalgene|elezioni parlamentari
n|et|kommunalvalg|kommunalvalget|kommunalvalg|kommunalvalgene|elezioni comunali
n|en|regering|regeringen|regeringer|regeringerne|governo
n|en|opposition|oppositionen|-|-|opposizione
n|et|parti|partiet|partier|partierne|partito
n|en|blok|blokken|blokke|blokkene|blocco (politico)
n|et|mandat|mandatet|mandater|mandaterne|seggio, mandato
n|et|flertal|flertallet|flertal|flertallene|maggioranza
n|en|koalition|koalitionen|koalitioner|koalitionerne|coalizione
n|et|forlig|forliget|forlig|forligene|accordo politico
n|et|lovforslag|lovforslaget|lovforslag|lovforslagene|disegno di legge
n|en|minister|ministeren|ministre|ministrene|ministro
n|en|statsminister|statsministeren|statsministre|statsministrene|primo ministro
n|en|vælger|vælgeren|vælgere|vælgerne|elettore
n|en|valgkamp|valgkampen|valgkampe|valgkampene|campagna elettorale
n|en|kronik|kronikken|kronikker|kronikkerne|articolo d'opinione lungo
n|et|debatindlæg|debatindlægget|debatindlæg|debatindlæggene|intervento di dibattito
n|et|læserbrev|læserbrevet|læserbreve|læserbrevene|lettera al giornale
n|et|standpunkt|standpunktet|standpunkter|standpunkterne|posizione
n|en|påstand|påstanden|påstande|påstandene|affermazione
n|en|fordom|fordommen|fordomme|fordommene|pregiudizio
n|en|generalisering|generaliseringen|generaliseringer|generaliseringerne|generalizzazione
n|en|stråmand|stråmanden|stråmænd|stråmændene|uomo di paglia
n|et|personangreb|personangrebet|personangreb|personangrebene|attacco personale
n|en|glidebane|glidebanen|glidebaner|glidebanerne|piano inclinato (fallacia)
n|en|ytringsfrihed|ytringsfriheden|-|-|libertà di espressione
n|et|demokrati|demokratiet|demokratier|demokratierne|democrazia
n|et|samfund|samfundet|samfund|samfundene|società
v|stemme|stemmer|stemte|stemt|votare
v|debattere|debatterer|debatterede|debatteret|dibattere
v|argumentere|argumenterer|argumenterede|argumenteret|argomentare
v|indrømme|indrømmer|indrømmede|indrømmet|ammettere
v|afvise|afviser|afviste|afvist|respingere
v|modsige|modsiger|modsagde|modsagt|contraddire
v|vedtage|vedtager|vedtog|vedtaget|approvare
v|forkaste|forkaster|forkastede|forkastet|bocciare
v|polarisere|polariserer|polariserede|polariseret|polarizzare
a|politisk|politisk|politiske|mere politisk|mest politisk|politico
a|kontroversiel|kontroversielt|kontroversielle|mere kontroversiel|mest kontroversiel|controverso
a|uholdbar|uholdbart|uholdbare|mere uholdbar|mest uholdbar|insostenibile
a|åbenlys|åbenlyst|åbenlyse|mere åbenlys|mest åbenlys|palese
x|ganske vist … men|è vero che … ma
x|på den ene side … på den anden side|da un lato … dall'altro
x|ikke desto mindre|ciononostante
x|tværtimod|al contrario
x|hvad angår|per quanto riguarda
x|rød blok|blocco rosso (centro-sinistra)
x|blå blok|blocco blu (centro-destra)
`,
grammar: [
{ h: "Folketinget, partiti e blocchi", body: `
Il **Folketing** è il parlamento danese. Ha **179 membri**: 175 dalla Danimarca propriamente detta, 2 dalle Isole Fær Øer e 2 dalla Groenlandia. Dal 1953 è un parlamento a una camera (il *Landsting* è stato abolito). Le elezioni (*folketingsvalg*) si tengono al massimo ogni quattro anni, ma il primo ministro può indirle prima. Il sistema elettorale è **proporzionale**: molti partiti, quindi in genere **governi di coalizione** o **di minoranza**.
- *regeringen* = governo; *oppositionen* = opposizione; il capo del governo è lo *statsminister*.
- **Blocchi**: tradizionalmente si parlava di *rød blok* (centro-sinistra) e *blå blok* (centro-destra). Dopo le elezioni del 2022 si è formato un governo con partiti di entrambi i blocchi (Socialdemokratiet, Venstre e Moderaterne): una scelta rara nella storia recente.
- *Forlig*: accordo tra più partiti, anche di blocchi diversi, su una legge o un tema importante.
- **Kommunalvalg** e *regionsrådsvalg*: elezioni locali. Chi non ha cittadinanza danese ma risiede in Danimarca può votare alle comunali e regionali a certe condizioni (subito i cittadini UE e nordici; gli altri dopo alcuni anni di residenza, con regole che cambiano). Verifica sempre sul sito ufficiale (*valg.dk*).
» Regeringen har ikke flertal alene og må forhandle med andre partier. = Il governo da solo non ha la maggioranza e deve negoziare con altri partiti.
» Lovforslaget blev vedtaget med et bredt forlig. = Il disegno di legge è stato approvato con un ampio accordo.
» Jeg må ikke stemme til folketingsvalget, men jeg må stemme til kommunalvalget. = Non posso votare alle politiche, ma posso votare alle comunali.
! Queste pagine descrivono il sistema, non sostengono nessun partito. Per le posizioni dei partiti consulta le fonti ufficiali e diversi giornali.
` },
{ h: "Kronik, debatindlæg e come argomentare", body: `
- La **kronik** è un articolo di opinione lungo (spesso 800–1500 parole) scritto da un esperto o da una persona con un punto di vista argomentato.
- Il **debatindlæg** è più breve (spesso 300–500 parole); il **læserbrev** è la lettera al giornale.
Una buona struttura:
| parte | contenuto |
| titolo | una tesi chiara o una domanda provocatoria |
| apertura | un fatto o un'esperienza che attira l'attenzione |
| tesi | *Jeg mener, at …* |
| argomenti | 2–3, con esempi o dati |
| controargomento | si concede e si risponde |
| chiusura | richiamo alla tesi e invito ad agire |
## Concedere e ribattere
| formula | funzione | esempio |
| *ganske vist … men* | concedere un punto | *Ganske vist er det dyrt, men det er det værd.* |
| *på den ene side … på den anden side* | bilanciare | *På den ene side sparer vi penge, på den anden side mister vi kvalitet.* |
| *ikke desto mindre* | ciononostante | *Ikke desto mindre må vi handle.* |
| *tværtimod* | al contrario | *Det er ikke et problem, tværtimod.* |
| *hvad angår …* | per quanto riguarda | *Hvad angår prisen, er jeg enig.* |
» Ganske vist har forslaget gode sider, men det løser ikke det egentlige problem. = È vero che la proposta ha lati buoni, ma non risolve il vero problema.
» Er det et problem? Tværtimod, det er en mulighed. = È un problema? Al contrario, è un'opportunità.
## Fallacie e toni
- **Stråmand**: si attribuisce all'avversario una tesi più debole e la si attacca.
- **Personangreb** (ad hominem): si attacca la persona, non l'argomento.
- **Glidebane**: «se facciamo questo, poi succederà anche quest'altro» senza prove.
- **Generalisering**: da un caso a tutti. *Alle unge er …* è quasi sempre scorretto.
- **Tonen**: nel dibattito danese si apprezza il tono saglig (pertinente, sobrio); l'aggressività viene facilmente notata e disapprovata.
! Riconoscere una fallacia non significa avere ragione: spesso basta chiedere *Hvad er dit argument for det?*
` },
{ h: "Frasi scisse e enfasi", body: `
In danese si mette in rilievo una parte della frase con la **frase scissa** (*udhævet sætning*): *det er … der/som …*. La parte importante sta tra *det er* e *der*.
| normale | enfatica |
| *Politikerne taler om det.* | *Det er politikerne, der taler om det.* |
| *Jeg er uenig i den sidste del.* | *Det er den sidste del, jeg er uenig i.* |
| *Det handler om tillid.* | *Det er tillid, det handler om.* |
| *Folk stemmer ikke af den grund.* | *Det er ikke af den grund, at folk stemmer.* |
- **der** sostituisce il soggetto: *Det er netop det, der er problemet.*
- Se la parte enfatizzata non è il soggetto, si usa **som** oppure niente: *Det er den sidste del, (som) jeg er uenig i.* Con un complemento di luogo, tempo o causa si usa **at** oppure niente: *Det er her, (at) vi er uenige.*
- *netop* e *præcis* rafforzano l'enfasi: *Det er netop her, vi er uenige.*
» Det er ikke prisen, der er problemet, men måden, den bliver indført på. = Non è il prezzo il problema, ma il modo in cui viene introdotto.
» Det er netop det, jeg mener. = È proprio questo che intendo.
» Det er især de unge, der mangler tillid til politikerne. = Sono soprattutto i giovani a non avere fiducia nei politici.
! Nel dibattito, la frase scissa serve a correggere o precisare l'avversario: *Det er ikke det, jeg siger.* (Non è questo che dico.)
` },
],
text: {
title: "Jeg må ikke stemme – men jeg har en mening", kind: "Kronik",
intro: "Una kronik di Anna sul diritto di voto delle persone che vivono in Danimarca senza cittadinanza.",
lines: `
Jeg har boet i Danmark i fire år, jeg betaler skat, og jeg følger med i debatten. = Vivo in Danimarca da quattro anni, pago le tasse e seguo il dibattito.
Alligevel må jeg ikke stemme til folketingsvalget. = Eppure non posso votare alle politiche.
Ganske vist har jeg stemmeret til kommunalvalget, men det er ikke her, de store beslutninger bliver truffet. = È vero che ho diritto di voto alle comunali, ma non è lì che si prendono le grandi decisioni.
Det er et paradoks, som mange i min situation lever med. = È un paradosso con cui vivono in molti nella mia situazione.
På den ene side er det forståeligt, at man kun vil give stemmeret til dem, der har en lang tilknytning til landet. = Da un lato è comprensibile che si dia il diritto di voto solo a chi ha un legame lungo con il paese.
På den anden side bliver mange af os i årevis uden indflydelse på de love, vi skal leve efter. = Dall'altro molti di noi restano per anni senza influenza sulle leggi con cui dobbiamo vivere.
Nogle vil sige, at det kun er danske statsborgere, der skal bestemme over Danmarks fremtid. = Alcuni diranno che solo i cittadini danesi devono decidere sul futuro della Danimarca.
Det er en legitim holdning, men den overser, at vi allerede er en del af samfundet. = È una posizione legittima, ma non tiene conto che facciamo già parte della società.
Det er ikke et spørgsmål om nationalitet, men om tilknytning og bidrag. = Non è una questione di nazionalità, ma di legame e contributo.
Andre frygter en glidebane, hvor stemmeretten bliver udvandet. = Altri temono un piano inclinato in cui il diritto di voto venga svuotato.
Den frygt er forståelig, men den har ikke nødvendigvis hold i virkeligheden. = Il timore è comprensibile, ma non è detto che abbia fondamento nella realtà.
Tværtimod kan et bredere demokrati styrke tilliden til systemet. = Al contrario, una democrazia più ampia può rafforzare la fiducia nel sistema.
Det er netop os, der bor her, som mærker konsekvenserne af lovene. = Siamo proprio noi che viviamo qui a sentire le conseguenze delle leggi.
Hvad angår kravene, kan man godt diskutere dem uden at nedgøre hinanden. = Per quanto riguarda i requisiti, se ne può discutere senza sminuirsi a vicenda.
Det er ikke personerne, der er problemet, men det system, vi har bygget. = Non sono le persone il problema, ma il sistema che abbiamo costruito.
Jeg ved, at forslaget er kontroversielt. = So che la proposta è controversa.
Ikke desto mindre mener jeg, at debatten er nødvendig. = Ciononostante ritengo che il dibattito sia necessario.
Vi behøver ikke at være enige, men vi bør tale pænt til hinanden. = Non dobbiamo essere d'accordo, ma dovremmo parlarci con rispetto.
Anna, studerende i Aarhus = Anna, studentessa ad Aarhus
`,
q: `
Hvad må Anna ikke gøre?|Stemme til folketingsvalget|Stemme til kommunalvalget;Betale skat
Hvad er paradokset ifølge Anna?|Hun bidrager til samfundet, men har ikke indflydelse på de store beslutninger|Hun vil ikke stemme;Hun bor i et andet land
Hvilket argument fremfører nogle modstandere?|At kun danske statsborgere skal bestemme over landets fremtid|At alle skal stemme;At valget er for dyrt
Hvordan svarer Anna på frygten for en glidebane?|Hun siger, at et bredere demokrati tværtimod kan styrke tilliden|Hun er enig i frygten;Hun ignorerer den
Hvad mener Anna med det er ikke personerne, der er problemet?|At problemet er systemet, ikke menneskene|At politikerne er dumme;At folk er uenige
Hvilken tone ønsker Anna i debatten?|En sober tone, hvor man taler pænt til hinanden|En hård tone;Ingen debat
`},
ex: `
m|Quanti membri ha il Folketing?|179|100;200
m|«Rød blok» e «blå blok» indicano…|blocchi politici (centro-sinistra e centro-destra)|i colori della bandiera;due partiti specifici
m|Una kronik è…|un articolo di opinione lungo|una notizia breve;un comunicato
m|Una fallacia «stråmand» consiste in…|attribuire all'avversario una tesi più debole|attaccare la persona;generalizzare
m|«Ikke desto mindre» significa…|ciononostante|per esempio;in primo luogo
m|«Tværtimod» significa…|al contrario|insieme;in questo modo
c|___ vist er det dyrt, men det er det værd.|Ganske|è vero che
c|På den ene side er det dyrt, på den ___ side giver det kvalitet.|anden|dall'altro lato
c|Det er ikke prisen, ___ er problemet.|der;som|frase scissa (soggetto)
c|Det er netop ___, jeg mener.|det|proprio questo
c|Han kom med et personangreb i stedet for et ___.|argument|argomento
c|Det er ___ at generalisere om alle unge.|uholdbart|insostenibile (neutro)
o|Det er netop det, der er problemet.|È proprio questo il problema.
o|Ganske vist er forslaget dyrt, men det løser problemet.|È vero che la proposta è costosa, ma risolve il problema.
o|Regeringen har ikke flertal alene.|Il governo da solo non ha la maggioranza.
o|Hvad angår prisen, er jeg enig.|Per quanto riguarda il prezzo, sono d'accordo.
t|Non sono i politici il problema, è il sistema.|Det er ikke politikerne, der er problemet, men systemet;Det er ikke politikerne, der er problemet, det er systemet
t|Al contrario, è un'opportunità.|Tværtimod er det en mulighed;Tværtimod, det er en mulighed
t|Ciononostante dobbiamo agire.|Ikke desto mindre må vi handle;Ikke desto mindre bliver vi nødt til at handle
t|Il disegno di legge è stato approvato.|Lovforslaget blev vedtaget;Lovforslaget er blevet vedtaget;Lovforslaget er vedtaget
`,
prod: {
task: "Scrivi in danese (80–150 parole) un breve debatindlæg per il giornale dell'università sul tema «Skal der være flere cykelstier i København?» (o un altro tema a scelta). Esprimi una tesi, concedi un punto agli avversari e rispondi con un connettivo adatto.",
points: ["Formulare una tesi chiara nella prima frase", "Concedere un punto con ganske vist … men o på den ene side", "Usare almeno una frase scissa con det er … der", "Chiudere con ikke desto mindre o tværtimod e un invito"],
model: "Jeg mener, at København skal have flere cykelstier. Ganske vist koster det penge, men det er en investering i sundhed og i en renere by. Nogle siger, at biler bliver spærret ude, og det er forståeligt, men det er ikke biltrafikken, der er det største problem, det er manglen på sikre ruter for børn og ældre. På den ene side vil flere cykelstier give mindre plads til parkering, på den anden side giver de en mere levende by. Ikke desto mindre må kommunen lytte til dem, som er afhængige af deres bil. Det er netop dialogen, der gør forskellen.",
model_it: "Penso che Copenaghen debba avere più piste ciclabili. È vero che costa, ma è un investimento in salute e in una città più pulita. Alcuni dicono che le auto verrebbero escluse, ed è comprensibile, ma non è il traffico automobilistico il problema maggiore, è la mancanza di percorsi sicuri per bambini e anziani. Da un lato più piste ciclabili lasceranno meno spazio ai parcheggi, dall'altro rendono la città più viva. Ciononostante il comune deve ascoltare chi dipende dall'auto. È proprio il dialogo a fare la differenza."
},
talk: {
title: "Un dibattito in università",
role: "Mads, studente di scienze politiche, che difende una posizione opposta alla tua in un dibattito di gruppo",
mission: "Prendi posizione sul tema del voto per i non cittadini (o un altro tema di attualità), concedi un punto a Mads e rispondi con una frase scissa e un connettivo di replica.",
opener: "Jeg synes, at kun danske statsborgere skal kunne stemme til folketingsvalget. Hvad mener du?",
opener_it: "Penso che solo i cittadini danesi debbano poter votare alle elezioni politiche. Tu che ne pensi?",
useful: ["Ganske vist har du ret i, at …, men … = È vero che hai ragione sul fatto che…, ma…", "På den ene side …, på den anden side … = Da un lato…, dall'altro…", "Det er netop det, der er problemet. = È proprio questo il problema.", "Ikke desto mindre mener jeg, at … = Ciononostante penso che…", "Tværtimod! = Al contrario!", "Hvad er dit argument for det? = Qual è il tuo argomento?", "Det er en generalisering. = È una generalizzazione.", "Jeg er ikke enig, men jeg forstår dit synspunkt. = Non sono d'accordo, ma capisco il tuo punto di vista."]
}
});
