/* Livello A2 · unità 1–5 (formato: vedi a1a.js) */
COURSE.push({
id: "a2-01", level: "A2", n: 1,
title: "Hvad lavede du i weekenden?",
sub: "Raccontare al passato: il passato semplice (datid)",
goals: ["Raccontare cosa hai fatto ieri o nel fine settimana", "Formare il passato dei verbi regolari e irregolari", "Usare le espressioni di tempo passato"],
words: `
v|rejse|rejser|rejste|rejst|viaggiare; partire
v|invitere|inviterer|inviterede|inviteret|invitare
v|fejre|fejrer|fejrede|fejret|festeggiare
v|grine|griner|grinede|grinet|ridere
v|snakke|snakker|snakkede|snakket|chiacchierare
v|fortælle|fortæller|fortalte|fortalt|raccontare
v|skrive|skriver|skrev|skrevet|scrivere
v|glemme|glemmer|glemte|glemt|dimenticare
v|huske|husker|huskede|husket|ricordare
v|tænke|tænker|tænkte|tænkt|pensare
v|tro|tror|troede|troet|credere
v|bruge|bruger|brugte|brugt|usare; spendere
v|koge|koger|kogte|kogt|bollire, cuocere
v|bage|bager|bagte|bagt|cuocere al forno
v|ringe|ringer|ringede|ringet|telefonare (ringe til)
v|sende|sender|sendte|sendt|mandare, inviare
v|møde|møder|mødte|mødt|incontrare
v|leve|lever|levede|levet|vivere
v|drømme|drømmer|drømte|drømt|sognare
v|nå|når|nåede|nået|raggiungere; fare in tempo
v|miste|mister|mistede|mistet|perdere (smarrire)
v|tabe|taber|tabte|tabt|perdere (una partita); far cadere
v|vinde|vinder|vandt|vundet|vincere
v|falde|falder|faldt|faldet|cadere|er
v|lyde|lyder|lød|lydt|suonare, sembrare
x|vaske op|lavare i piatti
x|rydde op|mettere in ordine
x|i forgårs|l'altro ieri
x|i morges|stamattina (già passata)
x|i aftes|ieri sera
x|i lørdags|sabato scorso
x|i weekenden|nel fine settimana
x|sidste uge|la settimana scorsa
x|sidste år|l'anno scorso
x|for … siden|… fa
x|forleden|l'altro giorno
x|længe|a lungo
x|hos|da, presso (qualcuno)
x|næste gang|la prossima volta
x|selv|stesso; da solo
x|nogle|alcuni, qualche
n|en|middag|middagen|middage|middagene|cena (con ospiti); mezzogiorno
n|en|gæst|gæsten|gæster|gæsterne|ospite
n|en|gave|gaven|gaver|gaverne|regalo
n|et|brev|brevet|breve|brevene|lettera
n|en|besked|beskeden|beskeder|beskederne|messaggio
n|et|måltid|måltidet|måltider|måltiderne|pasto
n|en|oplevelse|oplevelsen|oplevelser|oplevelserne|esperienza
n|en|kamp|kampen|kampe|kampene|partita; lotta
n|en|bolle|bollen|boller|bollerne|panino (anche dolce)
a|dejlig|dejligt|dejlige|dejligere|dejligst|bello, piacevole
a|fantastisk|fantastisk|fantastiske|-|-|fantastico
`,
grammar: [
{ h: "Il passato semplice (datid)", body: `
Il passato danese ha **una sola forma per tutte le persone**, come il presente. I verbi regolari si dividono in due gruppi.
| gruppo | infinito | passato | participio |
| 1: -ede | *arbejde* | *arbejdede* | *arbejdet* |
| | *lave* | *lavede* | *lavet* |
| | *spille* | *spillede* | *spillet* |
| 2: -te | *købe* | *købte* | *købt* |
| | *spise* | *spiste* | *spist* |
| | *rejse* | *rejste* | *rejst* |
Non c'è una regola sicura per sapere il gruppo: indicativamente, se la radice finisce con due consonanti (*arbejd-*, *spill-*) il verbo è spesso del gruppo 1; molti verbi con una sola consonante dopo una vocale lunga sono del gruppo 2 (*køb-*, *spis-*). Nelle schede trovi sempre tutte le forme.
` },
{ h: "I verbi irregolari più importanti", body: `
| infinito | passato | | infinito | passato |
| *være* | *var* | | *gå* | *gik* |
| *have* | *havde* | | *komme* | *kom* |
| *gøre* | *gjorde* | | *se* | *så* |
| *sige* | *sagde* | | *tage* | *tog* |
| *få* | *fik* | | *drikke* | *drak* |
| *sove* | *sov* | | *skrive* | *skrev* |
| *vide* | *vidste* | | *finde* | *fandt* |
| *stå* | *stod* | | *ligge* | *lå* |
» I går var jeg meget træt. = Ieri ero molto stanco.
» Vi gik en tur og drak kaffe. = Abbiamo fatto una passeggiata e bevuto un caffè.
` },
{ h: "Passato semplice dove l'italiano usa il passato prossimo", body: `
Quando si parla di un momento **preciso e concluso** nel passato (ieri, sabato scorso, nel 2019), il danese usa il passato semplice, anche dove l'italiano preferisce il passato prossimo.
» I går spiste jeg pizza. = Ieri ho mangiato la pizza.
» Hvad lavede du i weekenden? = Che cosa hai fatto nel fine settimana?
Il passato prossimo danese (*har spist*) ha un uso diverso: lo vediamo nella prossima unità.
` },
{ h: "Espressioni di tempo passato", body: `
| | |
| *i går* / *i forgårs* | ieri / l'altro ieri |
| *i morges* | stamattina (ormai passata) |
| *i aftes* | ieri sera |
| *i lørdags, i søndags…* | sabato scorso, domenica scorsa… |
| *sidste uge / sidste år* | la settimana scorsa / l'anno scorso |
| *for tre dage siden* | tre giorni fa |
! Attenzione ai giorni: *på lørdag* = sabato prossimo, *om lørdagen* = il sabato (ogni sabato), *i lørdags* = sabato scorso.
Ricorda il verbo al secondo posto: *I går aftes så jeg en film.*
` },
],
text: {
title: "Mandag morgen på arbejdet", kind: "Dialogo",
intro: "Lunedì mattina Mads chiede a Marco com'è andato il fine settimana.",
lines: `
@Mads: Godmorgen, Marco! Havde du en god weekend? = Buongiorno, Marco! Hai passato un bel fine settimana?
@Marco: Ja, den var rigtig dejlig. I lørdags var jeg til koncert i parken. = Sì, davvero bello. Sabato sono stato a un concerto nel parco.
@Marco: Bagefter spiste vi pizza og snakkede til sent. = Dopo abbiamo mangiato la pizza e chiacchierato fino a tardi.
@Mads: Det lyder hyggeligt. Og i søndags? = Sembra carino. E domenica?
@Marco: I søndags sov jeg længe. Så ringede min mor fra Rom, og vi snakkede i en time. = Domenica ho dormito fino a tardi. Poi mi ha chiamato mia madre da Roma e abbiamo parlato per un'ora.
@Marco: Om aftenen inviterede jeg nogle venner til middag. Jeg lavede lasagne. = La sera ho invitato degli amici a cena. Ho fatto le lasagne.
@Mads: Lasagne! Hvorfor inviterede du ikke mig? = Le lasagne! Perché non hai invitato me?
@Marco: Undskyld! Næste gang. Hvad lavede du selv? = Scusa! La prossima volta. E tu cosa hai fatto?
@Mads: Ikke så meget. Jeg var hos mine forældre i Roskilde. = Non molto. Ero dai miei genitori a Roskilde.
@Mads: Vi gik en lang tur i skoven, og min far bagte boller. = Abbiamo fatto una lunga passeggiata nel bosco e mio padre ha fatto i panini.
@Mads: Men i aftes så jeg fodbold, og Danmark vandt to–et! = Ma ieri sera ho visto la partita e la Danimarca ha vinto due a uno!
`,
q: `
Che cosa ha fatto Marco sabato?|È andato a un concerto e poi ha mangiato la pizza|È andato al cinema;È rimasto a casa
Chi ha telefonato a Marco domenica?|Sua madre|Mads;Un amico di Roma
Che cosa ha cucinato Marco per gli amici?|Le lasagne|La pizza;Dei panini
Dov'era Mads nel fine settimana?|Dai suoi genitori a Roskilde|A un concerto;A Roma
Com'è finita la partita?|La Danimarca ha vinto 2–1|La Danimarca ha perso 2–1;Pareggio
`},
ex: `
c|I går ___ jeg fisk.|spiste|spise
c|Vi ___ i parken i søndags.|gik|gå
c|Hun ___ hele dagen.|arbejdede|arbejde
c|Hvad ___ du i weekenden?|lavede|lave
c|Jeg ___ en film i aftes.|så|se
c|De ___ vin til middagen.|drak|drikke
c|Han ___ toget til Odense.|tog|tage
c|Jeg ___ træt i går.|var|være
m|Qual è il passato di «købe»?|købte|købede;kobte
m|Qual è il passato di «komme»?|kom|kommede;komte
m|«Sabato scorso» si dice…|i lørdags|om lørdagen;på lørdag|*På lørdag* = sabato prossimo, *om lørdagen* = ogni sabato, *i lørdags* = sabato scorso.
m|«Tre giorni fa» si dice…|for tre dage siden|tre dage siden;før tre dage
o|I aftes så jeg en god film.|Ieri sera ho visto un bel film.|Jeg så en god film i aftes
o|For to år siden boede jeg i Rom.|Due anni fa abitavo a Roma.|Jeg boede i Rom for to år siden
o|Hvad lavede du i weekenden?|Che cosa hai fatto nel fine settimana?
t|Ieri ho lavorato molto.|I går arbejdede jeg meget;Jeg arbejdede meget i går
t|Abbiamo mangiato la pizza.|Vi spiste pizza;Vi har spist pizza
t|Domenica scorsa ho dormito a lungo.|I søndags sov jeg længe;Jeg sov længe i søndags
t|Mia madre mi ha telefonato.|Min mor ringede til mig;Min mor ringede;Min mor har ringet til mig;Min mor har ringet
`
});

COURSE.push({
id: "a2-02", level: "A2", n: 2,
title: "På rejse",
sub: "Viaggi e vacanze, il passato prossimo (førnutid)",
goals: ["Parlare di viaggi ed esperienze", "Usare har/er + participio", "Scegliere tra passato semplice e passato prossimo"],
words: `
n|en|rejse|rejsen|rejser|rejserne|viaggio
n|en|ferie|ferien|ferier|ferierne|vacanza, ferie
n|en|lufthavn|lufthavnen|lufthavne|lufthavnene|aeroporto
n|et|fly|flyet|fly|flyene|aereo
n|en|billet|billetten|billetter|billetterne|biglietto
n|et|pas|passet|pas|passene|passaporto
n|en|kuffert|kufferten|kufferter|kufferterne|valigia
n|en|rygsæk|rygsækken|rygsække|rygsækkene|zaino
n|en|bagage|bagagen|-|-|bagaglio
n|en|turist|turisten|turister|turisterne|turista
n|en|seværdighed|seværdigheden|seværdigheder|seværdighederne|attrazione turistica
n|et|slot|slottet|slotte|slottene|castello
n|en|udsigt|udsigten|udsigter|udsigterne|vista, panorama
n|en|ø|øen|øer|øerne|isola
n|et|hav|havet|have|havene|mare
n|et|bjerg|bjerget|bjerge|bjergene|montagna
n|en|kyst|kysten|kyster|kysterne|costa
n|en|færge|færgen|færger|færgerne|traghetto
n|et|sommerhus|sommerhuset|sommerhuse|sommerhusene|casa per le vacanze
n|et|telt|teltet|telte|teltene|tenda
n|en|forsinkelse|forsinkelsen|forsinkelser|forsinkelserne|ritardo
n|en|perron|perronen|perroner|perronerne|binario
n|en|grad|graden|grader|graderne|grado
n|en|sild|silden|sild|sildene|aringa
v|flyve|flyver|fløj|fløjet|volare, andare in aereo
v|ankomme|ankommer|ankom|ankommet|arrivare|er
v|pakke|pakker|pakkede|pakket|fare le valigie; impacchettare
v|booke|booker|bookede|booket|prenotare
v|overnatte|overnatter|overnattede|overnattet|pernottare
v|opleve|oplever|oplevede|oplevet|vivere (un'esperienza), provare
v|tjekke|tjekker|tjekkede|tjekket|controllare (tjekke ind = check-in)
v|vise|viser|viste|vist|mostrare
v|bade|bader|badede|badet|fare il bagno
v|behøve|behøver|behøvede|behøvet|avere bisogno di
a|forsinket|forsinket|forsinkede|-|-|in ritardo
a|udsolgt|udsolgt|udsolgte|-|-|esaurito
a|ledig|ledigt|ledige|-|-|libero, disponibile; disoccupato
a|berømt|berømt|berømte|mere berømt|mest berømt|famoso
a|røget|røget|røgede|-|-|affumicato
x|udlandet|l'estero
x|nogensinde|mai (nelle domande: hai mai…?)
x|allerede|già
x|endnu|ancora
x|endnu ikke|non ancora
x|lige|appena; proprio
x|tur-retur|andata e ritorno
x|God rejse!|Buon viaggio!
x|Har du nogensinde været i …?|Sei mai stato a …?
x|glæde sig til|non vedere l'ora di
x|kære|caro (nelle lettere)
x|selvom|anche se
x|for første gang|per la prima volta
x|faktisk|in realtà, a dire il vero
x|virkelig|davvero
x|Mange hilsner|Tanti saluti
`,
grammar: [
{ h: "Il passato prossimo: har + participio", body: `
Il passato prossimo danese (*førnutid*) si forma con *har* + participio, come in italiano con «avere».
| infinito | participio | esempio |
| *arbejde* | *arbejdet* | *Jeg har arbejdet.* |
| *købe* | *købt* | *Vi har købt billetter.* |
| *se* | *set* | *Har du set filmen?* |
| *drikke* | *drukket* | *Han har drukket for meget.* |
| *skrive* | *skrevet* | *Hun har skrevet et brev.* |
| *være* | *været* | *Jeg har været i Rom.* |
Con alcuni verbi di **movimento o cambiamento** si usa *er*, come in italiano con «essere»: *er gået, er kommet, er rejst, er ankommet, er blevet, er faldet, er død*.
» Toget er kørt. = Il treno è partito.
» Hun er blevet mor. = È diventata mamma.
` },
{ h: "Passato semplice o passato prossimo?", body: `
- **Passato semplice** (*var, spiste*): un momento preciso e concluso. *I går*, *sidste år*, *i 2019*.
- **Passato prossimo** (*har været, har spist*): nessun momento preciso; conta il risultato adesso, o l'esperienza.
» Jeg var i Paris sidste år. = Sono stato a Parigi l'anno scorso.
» Jeg har været i Paris tre gange. = Sono stato a Parigi tre volte.
» Har du spist? = Hai mangiato? (adesso sei sazio?)
» Jeg har mistet mine nøgler. = Ho perso le chiavi (e non le ho).
` },
{ h: "«Da quanto tempo»: passato prossimo + i", body: `
Per un'azione che è cominciata nel passato e **continua ancora**, l'italiano usa il presente con «da». Il danese usa il passato prossimo con *i*.
» Jeg har boet i Danmark i tre år. = Vivo in Danimarca da tre anni.
» Hun har læst dansk i seks måneder. = Studia danese da sei mesi.
» Hvor længe har du været her? = Da quanto tempo sei qui?
! «Vivo qui da due anni» non è *Jeg bor her i to år*: in danese serve *Jeg har boet her i to år*.
` },
{ h: "Mai, già, non ancora", body: `
» Har du nogensinde været i Grønland? = Sei mai stato in Groenlandia?
» Jeg har aldrig smagt sild. = Non ho mai assaggiato l'aringa.
» Vi har allerede pakket. = Abbiamo già fatto le valigie.
» Toget er ikke kommet endnu. = Il treno non è ancora arrivato.
Come *ikke*, anche *aldrig* e *allerede* vanno subito dopo il verbo coniugato (*har*, *er*).
` },
],
text: {
title: "Hilsen fra Bornholm", kind: "Mail",
intro: "Anna scrive a Mette, la sua ex insegnante, dalle vacanze sull'isola di Bornholm.",
lines: `
Kære Mette! = Cara Mette!
Nu har Jonas og jeg været på Bornholm i fire dage. = Jonas e io siamo a Bornholm da quattro giorni.
Vi tog færgen fra Ystad, og rejsen tog kun en time og tyve minutter. = Abbiamo preso il traghetto da Ystad e il viaggio è durato solo un'ora e venti.
Vi har lejet et lille sommerhus tæt på stranden. = Abbiamo affittato una piccola casa vicino alla spiaggia.
Vejret har været fantastisk, og vi har badet i havet hver dag, selvom vandet kun er atten grader! = Il tempo è stato fantastico e abbiamo fatto il bagno in mare ogni giorno, anche se l'acqua è solo diciotto gradi!
I går cyklede vi til Hammershus. Det er en gammel slotsruin med en smuk udsigt over havet. = Ieri siamo andati in bici a Hammershus. Sono le rovine di un vecchio castello con una bella vista sul mare.
Jeg har også smagt røget sild for første gang. Det var faktisk rigtig godt! = Ho anche assaggiato l'aringa affumicata per la prima volta. Era davvero buona!

Har du nogensinde været på Bornholm? Du må virkelig tage herover en dag. = Sei mai stata a Bornholm? Devi proprio venirci un giorno.
Vi rejser hjem på søndag. Jeg glæder mig ikke! = Torniamo a casa domenica. Non ne ho nessuna voglia!
Mange hilsner fra Anna = Tanti saluti, Anna
`,
q: `
Da quanto tempo Anna e Jonas sono a Bornholm?|Da quattro giorni|Da una settimana;Da due giorni
Come sono arrivati sull'isola?|In traghetto da Ystad|In aereo da Copenaghen;In treno
Che cos'è Hammershus?|Le rovine di un vecchio castello|Una spiaggia;Un ristorante di pesce
Che cosa ha assaggiato Anna per la prima volta?|L'aringa affumicata|Lo smørrebrød;Una torta locale
Che cosa vuol dire «jeg glæder mig ikke» nella mail?|Che non ha voglia di tornare a casa|Che il viaggio è stato brutto;Che ha freddo
`},
ex: `
c|Jeg har ___ i Rom tre gange.|været|være
c|Har du ___?|spist|spise
c|Vi har ___ billetterne.|købt|købe
c|Toget ___ kommet.|er|è arrivato
c|Hun har ___ et brev.|skrevet|skrive
c|Har I ___ filmen?|set|se
c|Han har ___ for meget.|drukket|drikke
m|«Abito in Danimarca da tre anni» si dice…|Jeg har boet i Danmark i tre år.|Jeg bor i Danmark i tre år.;Jeg boede i Danmark for tre år.
m|Jeg ___ i Paris sidste år.|var|har været;er været|Con un momento preciso nel passato (*sidste år*) si usa il passato semplice.
m|Har du ___ været i Island? (mai)|nogensinde|aldrig;endnu
m|Qual è il participio di «tage»?|taget|tagt;tog
o|Jeg har aldrig været i Grønland.|Non sono mai stato in Groenlandia.
o|Har du allerede pakket kufferten?|Hai già fatto la valigia?
o|Toget er ikke kommet endnu.|Il treno non è ancora arrivato.
t|Hai mai mangiato l'aringa?|Har du nogensinde spist sild?
t|Ho già prenotato l'albergo.|Jeg har allerede booket hotellet;Jeg har allerede bestilt hotellet
t|Vivo qui da due anni.|Jeg har boet her i to år
t|Buon viaggio!|God rejse;God tur
`
});

COURSE.push({
id: "a2-03", level: "A2", n: 3,
title: "Kroppen og helbredet",
sub: "Il corpo, dal medico, i pronomi complemento e i verbi riflessivi",
goals: ["Descrivere sintomi e dolori", "Usare mig, dig, ham, hende…", "Usare i verbi riflessivi con sig"],
words: `
n|en|krop|kroppen|kroppe|kroppene|corpo
n|et|hoved|hovedet|hoveder|hovederne|testa
n|et|hår|håret|hår|hårene|capelli
n|et|ansigt|ansigtet|ansigter|ansigterne|viso
n|et|øje|øjet|øjne|øjnene|occhio
n|et|øre|øret|ører|ørerne|orecchio
n|en|næse|næsen|næser|næserne|naso
n|en|mund|munden|munde|mundene|bocca
n|en|tand|tanden|tænder|tænderne|dente
n|en|hals|halsen|halse|halsene|gola; collo
n|en|skulder|skulderen|skuldre|skuldrene|spalla
n|en|arm|armen|arme|armene|braccio
n|en|hånd|hånden|hænder|hænderne|mano
n|en|finger|fingeren|fingre|fingrene|dito
n|en|mave|maven|maver|maverne|pancia, stomaco
n|en|ryg|ryggen|rygge|ryggene|schiena
n|et|ben|benet|ben|benene|gamba; osso
n|et|knæ|knæet|knæ|knæene|ginocchio
n|en|fod|foden|fødder|fødderne|piede
n|et|hjerte|hjertet|hjerter|hjerterne|cuore
n|en|læge|lægen|læger|lægerne|medico
n|en|sygeplejerske|sygeplejersken|sygeplejersker|sygeplejerskerne|infermiere, infermiera
n|en|tandlæge|tandlægen|tandlæger|tandlægerne|dentista
n|en|patient|patienten|patienter|patienterne|paziente
n|en|feber|feberen|-|-|febbre
n|en|forkølelse|forkølelsen|forkølelser|forkølelserne|raffreddore
n|en|hovedpine|hovedpinen|-|-|mal di testa
n|en|smerte|smerten|smerter|smerterne|dolore
n|en|pille|pillen|piller|pillerne|pillola
n|en|medicin|medicinen|-|-|medicina
n|en|recept|recepten|recepter|recepterne|ricetta (medica)
n|et|sundhedskort|sundhedskortet|sundhedskort|sundhedskortene|tessera sanitaria
v|føle|føler|følte|følt|sentire (sensazioni)
v|hoste|hoster|hostede|hostet|tossire
v|nyse|nyser|nøs|nyst|starnutire
v|brække|brækker|brækkede|brækket|rompere (un osso)
v|undersøge|undersøger|undersøgte|undersøgt|visitare, esaminare
v|ryge|ryger|røg|røget|fumare
v|hvile|hviler|hvilede|hvilet|riposare (hvile sig)
x|gøre ondt|fare male
x|have ondt i|avere male a
x|føle sig|sentirsi
x|skynde sig|sbrigarsi
x|vaske sig|lavarsi
x|klæde sig på|vestirsi
x|komme sig|riprendersi, guarire
x|melde sig syg|darsi malato (al lavoro)
x|bestille tid|prendere appuntamento
a|syg|sygt|syge|sygere|sygest|malato
a|rask|rask|raske|raskere|raskest|sano, guarito
a|sund|sundt|sunde|sundere|sundest|sano, salutare
a|svimmel|svimmelt|svimle|-|-|che ha le vertigini
a|dårlig|dårligt|dårlige|dårligere|dårligst|cattivo; (have det dårligt) stare male
a|alvorlig|alvorligt|alvorlige|alvorligere|alvorligst|grave, serio
x|mig|me, mi
x|dig|te, ti
x|ham|lui, lo (complemento)
x|hende|lei, la (complemento)
x|os|noi, ci
x|jer|voi, vi
x|sig|si (riflessivo, 3ª persona)
x|God bedring!|Guarisci presto!
x|især|soprattutto
x|mod|contro; verso
x|et par|un paio
`,
grammar: [
{ h: "I pronomi complemento", body: `
| soggetto | complemento |
| *jeg* | *mig* |
| *du* | *dig* |
| *han* | *ham* |
| *hun* | *hende* |
| *den / det* | *den / det* |
| *vi* | *os* |
| *I* | *jer* |
| *de* | *dem* |
Il pronome complemento va **dopo il verbo**, non prima come in italiano.
» Kan du hjælpe mig? = Puoi aiutarmi?
» Jeg ringer til dig i morgen. = Ti chiamo domani.
» Jeg kender ham ikke. = Non lo conosco.
! Un pronome complemento non accentato va **prima** di *ikke*, se il verbo è uno solo: *Jeg kender ham ikke*. Con un ausiliare invece: *Jeg har ikke set ham*.
` },
{ h: "I verbi riflessivi", body: `
| | |
| *jeg vasker mig* | mi lavo |
| *du vasker dig* | ti lavi |
| *han / hun vasker sig* | si lava |
| *vi vasker os* | ci laviamo |
| *I vasker jer* | vi lavate |
| *de vasker sig* | si lavano |
Alcuni verbi riflessivi in danese non lo sono in italiano, e viceversa. I più usati: *føle sig* (sentirsi), *skynde sig* (sbrigarsi), *sætte sig* (sedersi), *glæde sig til* (non vedere l'ora), *hvile sig* (riposarsi), *komme sig* (guarire).
» Hun føler sig træt. = Si sente stanca.
» Skynd dig! = Sbrigati!
» Vi glæder os til ferien. = Non vediamo l'ora delle vacanze.
` },
{ h: "Dal medico: have ondt i", body: `
«Mi fa male…» si dice *jeg har ondt i* + parte del corpo.
» Jeg har ondt i hovedet. = Ho mal di testa.
» Jeg har ondt i ryggen. = Mi fa male la schiena.
» Hvor gør det ondt? = Dove fa male?
» Jeg har det dårligt. = Sto male.
In Danimarca si va prima dal proprio medico di base (*egen læge*): si prenota (*bestille tid*) per telefono o online e si mostra la tessera sanitaria gialla (*det gule sundhedskort*).
` },
{ h: "Plurali irregolari del corpo", body: `
| singolare | plurale |
| *et øje* | *øjne* |
| *en hånd* | *hænder* |
| *en fod* | *fødder* |
| *en tand* | *tænder* |
| *en finger* | *fingre* |
| *et knæ* | *knæ* |
` },
],
text: {
title: "Hos lægen", kind: "Dialogo",
intro: "Marco ha mal di gola e va dal medico di base.",
lines: `
@Lægen: Goddag. Hvad kan jeg gøre for dig? = Buongiorno. Cosa posso fare per lei?
@Marco: Jeg har det ikke så godt. Jeg har haft ondt i halsen i tre dage. = Non sto molto bene. Ho mal di gola da tre giorni.
@Lægen: Har du også feber? = Ha anche la febbre?
@Marco: Ja, lidt. I går havde jeg 38,5, og jeg føler mig meget træt. = Sì, un po'. Ieri avevo 38,5 e mi sento molto stanco.
@Lægen: Hoster du? = Ha la tosse?
@Marco: Ja, især om natten. = Sì, soprattutto di notte.
@Lægen: Lad mig lige se. Åbn munden og sig «a». = Mi faccia vedere. Apra la bocca e dica «a».
@Lægen: Din hals er meget rød, men det er ikke alvorligt. Det er en virus. = La gola è molto rossa, ma non è grave. È un virus.
@Marco: Skal jeg have medicin? = Devo prendere delle medicine?
@Lægen: Nej, du behøver ikke antibiotika. Du skal hvile dig og drikke meget vand. = No, non servono antibiotici. Deve riposarsi e bere molta acqua.
@Lægen: Bliv hjemme fra arbejde et par dage. = Resti a casa dal lavoro per un paio di giorni.
@Marco: Tak. Så melder jeg mig syg i morgen. = Grazie. Allora domani mi do malato.
@Lægen: God bedring! = Guarisca presto!
`,
q: `
Da quanti giorni Marco ha mal di gola?|Da tre giorni|Da ieri;Da una settimana
Quando tossisce di più?|Di notte|Di mattina;Dopo mangiato
Che cosa ha Marco secondo il medico?|Un virus, niente di grave|Un'infezione grave;Un'allergia
Che cosa deve fare Marco?|Riposarsi, bere e restare a casa qualche giorno|Prendere antibiotici;Andare in ospedale
`},
ex: `
c|Kan du hjælpe ___?|mig|me
c|Jeg ringer til ___ i morgen.|dig|te
c|Kender du Mads? – Ja, jeg kender ___ godt.|ham
c|Hvor er Anna? Jeg kan ikke se ___.|hende
c|Vi ses! Ring til ___!|os|noi
m|Han vasker ___.|sig|ham;mig
m|Vi skynder ___.|os|sig;vi
m|Jeg føler ___ syg.|mig|sig;jeg
c|Jeg har ondt ___ hovedet.|i
m|Qual è il plurale di «en fod»?|fødder|fods;føder
m|Qual è il plurale di «et øje»?|øjne|øjer;øjene
m|Kender du Mads? – Nej, jeg kender ___.|ham ikke|ikke ham;han ikke|Il pronome non accentato va prima di *ikke*.
o|Jeg har haft ondt i ryggen i en uge.|Ho mal di schiena da una settimana.
o|Du skal hvile dig og drikke meget vand.|Devi riposarti e bere molta acqua.
o|Hun har det ikke godt i dag.|Oggi non sta bene.|I dag har hun det ikke godt
t|Ho mal di testa.|Jeg har ondt i hovedet;Jeg har hovedpine
t|Guarisci presto!|God bedring
t|Mi sento stanco.|Jeg føler mig træt;Jeg er træt
t|Sbrigati!|Skynd dig
`
});

COURSE.push({
id: "a2-04", level: "A2", n: 4,
title: "Vejret og årstiderne",
sub: "Il tempo, le stagioni, comparativo e superlativo",
goals: ["Parlare del tempo e delle stagioni", "Fare paragoni con -ere/-est e mere/mest", "Conoscere i comparativi irregolari"],
words: `
n|en|årstid|årstiden|årstider|årstiderne|stagione
n|et|forår|foråret|forår|forårene|primavera
n|en|sommer|sommeren|somre|somrene|estate
n|et|efterår|efteråret|efterår|efterårene|autunno
n|en|vinter|vinteren|vintre|vintrene|inverno
n|en|sol|solen|sole|solene|sole
n|en|regn|regnen|-|-|pioggia
n|en|sne|sneen|-|-|neve
n|en|vind|vinden|vinde|vindene|vento
n|en|sky|skyen|skyer|skyerne|nuvola
n|en|storm|stormen|storme|stormene|tempesta
n|en|tåge|tågen|-|-|nebbia
n|en|is|isen|is|isene|gelato; ghiaccio
n|en|temperatur|temperaturen|temperaturer|temperaturerne|temperatura
n|en|vejrudsigt|vejrudsigten|vejrudsigter|vejrudsigterne|previsioni del tempo
n|en|paraply|paraplyen|paraplyer|paraplyerne|ombrello
n|en|regnjakke|regnjakken|regnjakker|regnjakkerne|giacca impermeabile
n|et|lys|lyset|lys|lysene|luce; candela
n|et|mørke|mørket|-|-|buio, oscurità
n|en|udlænding|udlændingen|udlændinge|udlændingene|straniero
n|et|råd|rådet|råd|rådene|consiglio
v|sne|sner|sneede|sneet|nevicare
v|skinne|skinner|skinnede|skinnet|splendere
v|blæse|blæser|blæste|blæst|soffiare; tirare vento
v|fryse|fryser|frøs|frosset|avere freddo; gelare
v|svede|sveder|svedte|svedt|sudare
v|skifte|skifter|skiftede|skiftet|cambiare
a|kølig|køligt|kølige|køligere|køligst|fresco
a|lun|lunt|lune|lunere|lunest|tiepido
a|våd|vådt|våde|vådere|vådest|bagnato
a|tør|tørt|tørre|tørrere|tørrest|asciutto, secco
a|solrig|solrigt|solrige|solrigere|solrigst|soleggiato
a|overskyet|overskyet|overskyede|-|-|nuvoloso
a|høj|højt|høje|højere|højest|alto
a|lav|lavt|lave|lavere|lavest|basso
a|mild|mildt|milde|mildere|mildest|mite
a|frisk|frisk|friske|friskere|friskest|fresco (aria, cibo)
a|let|let|lette|lettere|lettest|facile; leggero
a|svær|svært|svære|sværere|sværest|difficile
a|rigtig|rigtigt|rigtige|-|-|giusto, vero
x|lige så … som|tanto … quanto
x|mere|più
x|mest|il più
x|mindre|meno
x|flere|più (numerabili)
x|færre|meno (numerabili)
x|næsten|quasi
x|hele|tutto, intero (hele dagen)
x|Hvordan er vejret?|Che tempo fa?
x|Det regner.|Piove.
x|Det blæser.|Tira vento.
x|Det er koldt.|Fa freddo.
x|om sommeren|d'estate (in generale)
x|i sommer|quest'estate
x|minus|meno (sotto zero)
x|solen går ned|il sole tramonta
x|solen står op|il sole sorge
`,
grammar: [
{ h: "Comparativo e superlativo: -ere, -est", body: `
La maggior parte degli aggettivi aggiunge *-ere* (più…) e *-est* (il più…). Gli aggettivi in *-ig* e *-som* prendono solo *-st*.
| base | comparativo | superlativo |
| *varm* | *varmere* | *varmest* |
| *kold* | *koldere* | *koldest* |
| *billig* | *billigere* | *billigst* |
| *hurtig* | *hurtigere* | *hurtigst* |
Il secondo termine di paragone si introduce con *end* (di, che).
» København er større end Aarhus. = Copenaghen è più grande di Aarhus.
» Toget er hurtigere end bussen. = Il treno è più veloce dell'autobus.
» Min bror er ældre end mig. = Mio fratello è più vecchio di me.
` },
{ h: "I comparativi irregolari", body: `
| base | comparativo | superlativo |
| *god* (buono) | *bedre* | *bedst* |
| *dårlig* (cattivo) | *dårligere* / *værre* | *dårligst* / *værst* |
| *gammel* (vecchio) | *ældre* | *ældst* |
| *ung* (giovane) | *yngre* | *yngst* |
| *stor* (grande) | *større* | *størst* |
| *lille* (piccolo) | *mindre* | *mindst* |
| *lang* (lungo) | *længere* | *længst* |
| *mange* (molti) | *flere* | *flest* |
| *meget* (molto) | *mere* | *mest* |
| *få* (pochi) | *færre* | *færrest* |
` },
{ h: "Mere e mest con le parole lunghe", body: `
Gli aggettivi lunghi, quelli stranieri e i participi usano *mere* e *mest*, come «più» in italiano.
» Filmen var mere spændende end bogen. = Il film era più avvincente del libro.
» Det er den mest interessante bog. = È il libro più interessante.
` },
{ h: "Il superlativo con l'articolo", body: `
Davanti a un sostantivo il superlativo prende l'articolo *den/det/de* e la *-e* finale (vedi l'unità sul lavoro).
» Juli er den varmeste måned. = Luglio è il mese più caldo.
» Det er det bedste råd. = È il consiglio migliore.
Dopo il verbo si usa spesso senza *-e*: *Juli er varmest.*
` },
{ h: "Uguaglianza e il tempo", body: `
» I dag er det lige så koldt som i går. = Oggi fa freddo come ieri.
Il tempo si descrive con *det* come soggetto, come «it» in inglese: *det regner, det sner, det blæser, det er koldt*.
Stagioni: *om sommeren* (d'estate, in generale), *i sommer* (quest'estate), *sidste vinter* (l'inverno scorso).
` },
],
text: {
title: "Fire årstider i Danmark", kind: "Articolo",
intro: "Un breve testo informativo sul clima danese.",
lines: `
Mange udlændinge siger, at vejret i Danmark er dårligt. = Molti stranieri dicono che il tempo in Danimarca è brutto.
Det er rigtigt, at det regner meget, og det blæser næsten altid. = È vero che piove molto e tira quasi sempre vento.
Men vejret skifter hurtigt, og en grå morgen kan blive til en solrig eftermiddag. = Ma il tempo cambia in fretta, e una mattina grigia può diventare un pomeriggio di sole.

Om vinteren er det koldt og mørkt. = D'inverno fa freddo ed è buio.
I december går solen ned allerede ved halv fire. = A dicembre il sole tramonta già verso le tre e mezza.
Temperaturen er tit omkring nul grader, men det sner ikke så meget som i Sverige og Norge. = La temperatura è spesso intorno a zero gradi, ma non nevica quanto in Svezia e in Norvegia.
Om sommeren er det lyst næsten hele natten, og det er den bedste tid på året. = D'estate c'è luce quasi tutta la notte, ed è il periodo migliore dell'anno.
Juli er den varmeste måned, men der er sjældent mere end 25 grader. = Luglio è il mese più caldo, ma raramente si superano i 25 gradi.

Foråret og efteråret er kortere og mere blæsende. = La primavera e l'autunno sono più brevi e più ventosi.
Danskerne har et godt råd: Der er ikke noget, der hedder dårligt vejr, kun dårligt tøj. = I danesi hanno un buon consiglio: non esiste il brutto tempo, solo l'abbigliamento sbagliato.
Så husk en regnjakke og en paraply! = Quindi ricordati la giacca impermeabile e l'ombrello!
`,
q: `
Com'è il tempo danese secondo il testo?|Cambia in fretta|È sempre soleggiato;Nevica moltissimo
A che ora tramonta il sole a dicembre?|Verso le 15:30|Verso le 17:30;Verso le 16:30
Qual è il mese più caldo?|Luglio|Giugno;Agosto
Che cosa consiglia il proverbio danese?|Vestirsi in modo adatto al tempo|Restare a casa quando piove;Andare in vacanza al sud
`},
ex: `
c|varm, ___, varmest|varmere
c|god, bedre, ___|bedst
c|gammel, ___, ældst|ældre
c|stor, ___, størst|større
m|Qual è il comparativo di «lille»?|mindre|lillere;mindst
m|Qual è il comparativo di «mange»?|flere|mere;manger
c|København er større ___ Odense.|end
c|I dag er det ___ koldt som i går.|lige så|tanto
m|Juli er den ___ måned.|varmeste|varmest;varmere
m|Qual è il superlativo di «interessant»?|mest interessant|interessantest;mere interessant
c|Om vinteren ___ det tit.|sner|nevicare
m|«Tira vento» si dice…|Det blæser.|Det er vind.;Den blæser.
o|Om sommeren er det lyst om aftenen.|D'estate c'è luce la sera.|Det er lyst om aftenen om sommeren
o|Min søster er to år yngre end mig.|Mia sorella è di due anni più giovane di me.
o|Hvordan bliver vejret i morgen?|Che tempo farà domani?
t|Oggi fa freddo.|Det er koldt i dag;I dag er det koldt
t|Piove.|Det regner
t|Il treno è più veloce dell'autobus.|Toget er hurtigere end bussen
t|È la città più bella della Danimarca.|Det er den smukkeste by i Danmark
`
});

COURSE.push({
id: "a2-05", level: "A2", n: 5,
title: "Arbejde",
sub: "Il lavoro, l'aggettivo nella forma determinativa",
goals: ["Presentare il tuo lavoro", "Dire «la macchina nuova»: den nye bil", "Capire la cultura del lavoro danese"],
words: `
n|et|job|jobbet|job|jobbene|lavoro, impiego
n|en|arbejdsplads|arbejdspladsen|arbejdspladser|arbejdspladserne|posto di lavoro
n|et|firma|firmaet|firmaer|firmaerne|ditta, azienda
n|en|virksomhed|virksomheden|virksomheder|virksomhederne|impresa
n|et|kontor|kontoret|kontorer|kontorerne|ufficio
n|en|chef|chefen|chefer|cheferne|capo
n|en|kollega|kollegaen|kolleger|kollegerne|collega
n|en|kunde|kunden|kunder|kunderne|cliente
n|et|møde|mødet|møder|møderne|riunione; incontro
n|en|løn|lønnen|lønninger|lønningerne|stipendio
n|en|opgave|opgaven|opgaver|opgaverne|compito, incarico
n|en|ingeniør|ingeniøren|ingeniører|ingeniørerne|ingegnere
n|en|kok|kokken|kokke|kokkene|cuoco
n|en|pædagog|pædagogen|pædagoger|pædagogerne|educatore
n|en|sælger|sælgeren|sælgere|sælgerne|venditore
n|en|håndværker|håndværkeren|håndværkere|håndværkerne|artigiano (idraulico, elettricista…)
n|en|arkitekt|arkitekten|arkitekter|arkitekterne|architetto
n|en|advokat|advokaten|advokater|advokaterne|avvocato
n|en|arbejdstid|arbejdstiden|arbejdstider|arbejdstiderne|orario di lavoro
n|en|frokostpause|frokostpausen|frokostpauser|frokostpauserne|pausa pranzo
n|en|madpakke|madpakken|madpakker|madpakkerne|pranzo al sacco
n|en|forskel|forskellen|forskelle|forskellene|differenza
n|en|struktur|strukturen|strukturer|strukturerne|struttura
v|tjene|tjener|tjente|tjent|guadagnare
v|søge|søger|søgte|søgt|cercare; fare domanda (søge et job)
v|ansætte|ansætter|ansatte|ansat|assumere
v|fyre|fyrer|fyrede|fyret|licenziare
v|planlægge|planlægger|planlagde|planlagt|pianificare
v|beslutte|beslutter|besluttede|besluttet|decidere
v|forklare|forklarer|forklarede|forklaret|spiegare
v|svare|svarer|svarede|svaret|rispondere
v|samarbejde|samarbejder|samarbejdede|samarbejdet|collaborare
v|holde|holder|holdt|holdt|tenere; (holde møde) fare una riunione
v|mene|mener|mente|ment|pensare, ritenere
a|ansat|ansat|ansatte|-|-|assunto
a|arbejdsløs|arbejdsløs|arbejdsløse|-|-|disoccupato
a|selvstændig|selvstændigt|selvstændige|-|-|autonomo, indipendente
a|flink|flinkt|flinke|flinkere|flinkest|gentile
a|dygtig|dygtigt|dygtige|dygtigere|dygtigst|bravo, capace
a|flad|fladt|flade|fladere|fladest|piatto
a|hel|helt|hele|-|-|intero
x|Hvad laver du?|Che lavoro fai?
x|Jeg arbejder som …|Lavoro come …
x|på fuld tid|a tempo pieno
x|på deltid|part-time
x|uddannet|formato, diplomato (come)
x|en ansat|un dipendente
x|de fleste|la maggior parte
x|hinanden|l'un l'altro, a vicenda
x|næste|prossimo
x|denne / dette / disse|questo / questa / questi
`,
grammar: [
{ h: "L'aggettivo nella forma determinativa", body: `
Quando un sostantivo determinato («la macchina») ha un aggettivo davanti, il danese usa **den / det / de + aggettivo in -e + sostantivo senza desinenza**.
| | indeterminativo | determinativo |
| comune | *en ny kollega* | *den nye kollega* |
| neutro | *et stort firma* | *det store firma* |
| plurale | *nye kolleger* | *de nye kolleger* |
» Den nye chef er dygtig. = Il nuovo capo è bravo.
» Det store kontor ligger på første sal. = L'ufficio grande è al primo piano.
» De danske kolleger er flinke. = I colleghi danesi sono gentili.
! Con l'aggettivo davanti la desinenza in coda sparisce: *bilen*, ma *den røde bil* (non *den røde bilen*).
` },
{ h: "La stessa forma in -e dopo i possessivi", body: `
Anche dopo un possessivo, un genitivo o *denne/dette/disse* l'aggettivo prende la *-e*.
» min nye chef = il mio nuovo capo
» mit gamle job = il mio vecchio lavoro
» Annas røde cykel = la bicicletta rossa di Anna
» dette gode råd = questo buon consiglio
Eccezioni: *lille* resta *lille* al singolare (*den lille by*) e diventa *små* al plurale (*de små byer*); gli aggettivi invariabili (*blå*, *moderne*) non cambiano.
` },
{ h: "Parlare del proprio lavoro", body: `
» Hvad laver du? – Jeg er ingeniør. = Che lavoro fai? – Sono ingegnere.
» Jeg arbejder som sygeplejerske på et hospital. = Lavoro come infermiera in un ospedale.
» Jeg er uddannet kok. = Ho studiato da cuoco.
» Hun arbejder på deltid. = Lavora part-time.
» Han er selvstændig. = È un lavoratore autonomo.
` },
{ h: "Il lavoro in Danimarca", body: `
- La settimana lavorativa standard è di 37 ore; molti vanno a casa alle 16.
- La gerarchia è piatta: si dà del *du* al capo e ci si aspetta che tutti dicano la loro.
- La pausa pranzo è breve, spesso con la *madpakke* (il pranzo portato da casa).
- Il venerdì in molti uffici c'è la *fredagsbar*: una birra tra colleghi dopo il lavoro.
` },
],
text: {
title: "Et nyt job", kind: "Testo",
intro: "Marco ha cambiato lavoro e racconta le differenze con l'Italia.",
lines: `
Marco er uddannet kok, og i sidste måned fik han et nyt job på en restaurant i København. = Marco ha studiato da cuoco e il mese scorso ha trovato un nuovo lavoro in un ristorante di Copenaghen.
Den nye restaurant er større end det gamle hotel, og der er femten ansatte. = Il nuovo ristorante è più grande del vecchio albergo, e ha quindici dipendenti.
Hans nye chef hedder Line. Hun er ung, men meget dygtig. = La sua nuova capa si chiama Line. È giovane, ma molto brava.
Marco arbejder 37 timer om ugen, ligesom de fleste danskere på fuld tid. = Marco lavora 37 ore alla settimana, come la maggior parte dei danesi a tempo pieno.

Der er mange forskelle fra Italien. = Ci sono molte differenze rispetto all'Italia.
Alle siger du til hinanden, også til chefen. = Tutti si danno del tu, anche con la capa.
Den danske arbejdsdag er kort, og de fleste går hjem klokken fire eller fem. = La giornata lavorativa danese è breve, e la maggior parte va a casa alle quattro o alle cinque.
Frokostpausen er kun en halv time, og mange spiser en hurtig madpakke. = La pausa pranzo dura solo mezz'ora, e molti mangiano velocemente il pranzo portato da casa.
Om fredagen er der fredagsbar, hvor kollegerne drikker en øl sammen efter arbejde. = Il venerdì c'è la «fredagsbar», dove i colleghi bevono una birra insieme dopo il lavoro.

Marco kan godt lide den flade struktur. = A Marco piace la struttura orizzontale.
Her spørger chefen, hvad jeg mener, siger han. Det er nyt for mig. = «Qui la capa mi chiede che cosa ne penso», dice. «Per me è una novità.»
`,
q: `
Che lavoro fa Marco?|Il cuoco|Il cameriere;Il receptionist
Quante ore lavora a settimana?|37|40;35
Come si rivolgono i dipendenti alla capa?|Con il «du», come a tutti|Con il «De» formale;Con il titolo
Che cos'è la «fredagsbar»?|Una birra tra colleghi il venerdì dopo il lavoro|Un bar dove si pranza il venerdì;Il giorno libero del venerdì
Che cosa sorprende Marco?|Che la capa gli chieda la sua opinione|Che la pausa pranzo sia lunga;Che si lavori il sabato
`},
ex: `
c|en ny kollega → ___ nye kollega|den
c|et stort firma → det ___ firma|store
c|nye kolleger → ___ nye kolleger|de
m|«La macchina rossa» si dice…|den røde bil|den røde bilen;det røde bil
m|«Il piccolo ufficio» si dice…|det lille kontor|det små kontor;det lillee kontor
m|«I bambini piccoli» si dice…|de små børn|de lille børn;de lilles børn
c|Min ___ chef hedder Line.|nye|nuovo
c|Hun bor i det ___ hus på hjørnet.|gamle|vecchio
c|Vi har et ___ kontor.|stort|grande
m|Hvad ___ du? – Jeg er kok.|laver|arbejder;gør
c|Jeg arbejder ___ ingeniør.|som|come
o|Den nye chef er meget dygtig.|Il nuovo capo è molto bravo.
o|Hun arbejder på deltid i et lille firma.|Lavora part-time in una piccola ditta.
o|Vi holder møde klokken ti.|Facciamo una riunione alle dieci.|Klokken ti holder vi møde
t|Che lavoro fai?|Hvad laver du?;Hvad arbejder du med?
t|Sono infermiera.|Jeg er sygeplejerske
t|Il nuovo collega è simpatico.|Den nye kollega er sød;Den nye kollega er flink;Den nye kollega er rar
t|Lavoro come cuoco.|Jeg arbejder som kok
`
});
