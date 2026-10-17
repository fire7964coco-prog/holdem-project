// Italian translation of all 17 EN questions, in the same order.
// One array supplies both the visible FAQ and FAQPage JSON-LD.
export const CALCULATOR_FAQ_IT: { q: string; a: string }[] = [
  {
    q: "Come funziona un poker odds calculator?",
    a: "Esamina le carte ancora da scoprire e conta quanto spesso vince ogni mano. Con tutte le mani note, questo calcolatore usa exact enumeration per ogni runout possibile al flop e al turn (990 al flop in heads-up, 44 al turn; meno con più giocatori, mentre al river il board è già completo). Preflop ci sono 1,7 milioni di board per confronto e un avversario con mano casuale moltiplica ancora le possibilità: in questi casi campiona 60.000 runout casuali e lo indica sotto il risultato. Il dato varia di circa 0,3 pp tra un calcolo e il successivo.",
  },
  {
    q: "Quali sono le probabilità di AA contro KK?",
    a: "Una coppia di assi è favorita circa all'82% contro una coppia di re preflop: in media su tutte le combinazioni di semi vince da sola l'81,7% delle volte e pareggia circa lo 0,5%, per un'equity dell'81,9%. AA contro AK suited è circa 88% contro 12%, mentre KK contro AK suited è circa 66% contro 34%.",
  },
  {
    q: "AK contro una coppia servita è un coin flip?",
    a: "È quasi alla pari contro tutte le coppie inferiori ad assi e re, ma mai esattamente 50/50. AK offsuit ha circa il 46–47% di equity contro 22–44, circa il 45% contro 55–99 e circa il 43% contro TT–QQ; AK suited aggiunge circa 2,5–3 pp. Contro KK scende a circa il 30% e contro AA a circa il 7%: il termine si adatta quindi solo alle coppie più basse sia dell'asso sia del re.",
  },
  {
    q: "Cos'è la regola del 2 e del 4 nel poker?",
    a: "È una scorciatoia mentale per le probabilità dei progetti: con due carte da scoprire (dal flop al river) moltiplica gli outs per 4; con una carta da scoprire (dal turn al river) moltiplica per 2. Con 9 outs ottieni 36% e 18%; trovi i valori esatti nella risposta successiva. Il calcolo per 4 resta entro circa un pp fino a 9 outs, poi si allontana di circa un pp per ogni out aggiuntivo (15 outs valgono in realtà 54,1%, non 60%). Il calcolo per 2 sottostima, sempre di più all'aumentare degli outs (1,6 pp con 9 outs, 2,6 con 15). Moltiplicare per 4 vale solo se vedrai entrambe le carte senza pagare ancora.",
  },
  {
    q: "Quanto spesso si chiude un progetto di colore?",
    a: "Con 9 outs un progetto di colore si chiude nel 35,0% dei casi dal flop al river (due carte da scoprire), nel 19,1% alla prossima carta dal flop e nel 19,6% dal turn al river.",
  },
  {
    q: "Come si calcolano le pot odds?",
    a: "Importo del call ÷ (piatto dopo la puntata + importo del call) = equity minima richiesta. Per esempio, chiamare 3.000 quando nel piatto ci sono già 10.000, inclusa la puntata, richiede 3.000 ÷ 13.000 ≈ 23,1%. Se non possono seguire altre puntate (per esempio con un all-in), il call è profittevole se la tua equity supera il 23,1%. Una puntata pari al piatto richiede sempre il 33,3%; una di metà piatto il 25%.",
  },
  {
    q: "Quali pot odds servono per chiamare con un progetto di colore?",
    a: "Contro una singola puntata al flop considera solo la prossima carta: 9 outs centrano il progetto nel 19,1% dei casi, quindi servono pot odds migliori di circa 4,2 a 1 oppure implied odds che compensino la differenza. L'avversario deve avere ancora fiches e una mano disposta a pagare. Riduci molto la stima se non punti al nuts: un colore secondo migliore che riceve azione perde molto più di quanto vinca. Se hai la certezza di vedere entrambe le carte (all-in), si applica invece il 35,0% su due carte.",
  },
  {
    q: "Come uso il calcolatore di implied odds?",
    a: "Apri la scheda Pot odds, attiva «Implied odds» e inserisci l'importo extra che prevedi di vincere nelle street successive quando chiudi il progetto. Il calcolatore lo aggiunge al piatto e riduce l'equity richiesta al call attuale. Mantieni realistica la stima: conta solo se l'avversario ha ancora quelle fiches e pagherà davvero quando il progetto si completa.",
  },
  {
    q: "Come verifico quale mano di poker vince?",
    a: "Nel calcolatore di equity inserisci le due carte coperte di ciascun giocatore e tutte e cinque le carte del board: con il board completo indica il vincitore e la mano vincente oppure uno split pot. Per valutare una singola mano, inserisci 5–7 carte nella scheda Valore mano: trova automaticamente la combinazione migliore di cinque carte.",
  },
  {
    q: "Come uso il calcolatore ICM?",
    a: "Inserisci i giocatori rimasti, stack positivi e premi dal più alto al più basso (sono ammessi premi uguali). Per decidere tra call e fold, calcola il tuo valore dopo ogni esito possibile — vittoria, pareggio o sconfitta — moltiplicalo per la sua probabilità effettiva e somma i risultati. Confronta questo valore ponderato con quello dopo il fold, usando in ogni scenario gli stack e i premi rimanenti risultanti. Se vieni eliminato, usa il premio che ricevi davvero: in bolla può essere zero. Questo calcolatore di stack non fornisce le probabilità dei singoli esiti della mano.",
  },
  {
    q: "Che cosa significa «ICM value» in questo calcolatore?",
    a: "È il premio in denaro che il tuo stack può raccogliere in media secondo ICM, dati stack e premi. È un valore del modello, non un pagamento garantito. Con più posti a premio, il valore marginale delle fiches generalmente diminuisce: raddoppiare le fiches non significa necessariamente raddoppiare l'ICM value. Il rapporto esatto dipende dalla struttura dei premi e da tutti gli stack rimasti.",
  },
  {
    q: "Quando conviene usare il calcolatore ICM?",
    a: "Quando i premi sono stabiliti dalla posizione finale e ci si avvicina ai premi: in bolla, al tavolo finale, quando viene proposto un accordo e nei satelliti in cui ogni posto assegnato vale lo stesso premio. Non si applica ai cash game, dove una fiche vale sempre il suo valore nominale.",
  },
  {
    q: "ICM e chip EV sono la stessa cosa?",
    a: "No. Il chip EV conta le fiches; ICM conta il valore atteso dei premi. Un call può guadagnare fiches in media e perdere valore in premi, perché perdere elimina la possibilità di ottenere premi più alti, mentre raddoppiare di solito non raddoppia quel valore. Se vieni eliminato ricevi comunque l'eventuale premio già assicurato. ICM spesso restringe i range di call contro all-in, ma l'effetto dipende da stack e premi e non è uguale per ogni azione.",
  },
  {
    q: "Sono chip leader: perché il mio ICM value è più basso della mia quota di fiches?",
    a: "Il primo posto paga solo il premio previsto, non l'intero montepremi, e gli stack più piccoli possono ancora vincere gli altri premi. Nell'esempio in bolla qui sopra, il leader ha il 40% delle fiches ma il 33,3% del valore dei premi; lo stack più corto ha invece una quota dei premi superiore alla propria quota di fiches. La differenza descrive questa distribuzione dei premi: da sola non misura il risk premium di uno specifico call.",
  },
  {
    q: "Come calcolo un accordo ICM al tavolo finale?",
    a: "Inserisci gli stack attuali e i premi rimasti: l'ICM value di ogni giocatore è l'importo di partenza per l'accordo. Nella pratica si lascia di solito una somma concordata da giocare — spesso la differenza tra primo e secondo premio — e il responsabile di sala ferma il cronometro e conferma il consenso di tutti i giocatori rimasti prima di effettuare i pagamenti.",
  },
  {
    q: "Qual è la differenza tra Chip Count (chip chop) e accordo ICM?",
    a: "Il Chip Count divide in proporzione alle fiches; un accordo ICM considera la probabilità di ogni giocatore di finire in ciascuna posizione. L'esempio qui sopra mostra la differenza: $276 contro $458 per lo stack più corto. Il significato di chip chop varia da sala a sala: molte assegnano prima a tutti il premio successivo e dividono solo il resto, ottenendo importi vicini a ICM. Chiedi quale metodo viene usato prima di accettare.",
  },
  {
    q: "Perché dovrei foldare di più in bolla?",
    a: "Un call profittevole in fiches può perdere valore in premi quando l'eliminazione costa più di quanto faccia guadagnare un raddoppio. Gli stack medi affrontano spesso il risk premium maggiore, soprattutto se sono coperti e gli stack più piccoli possono uscire prima. Uno stack estremamente corto che sta per essere consumato dai bui ha meno valore di sopravvivenza da proteggere. Non scegliere fold o all-in solo in base all'etichetta dello stack: confronta range effettivi, chi copre chi, premi e probabilità. Uno stack che copre gli altri può talvolta approfittare di range di call più stretti, ma non deve automaticamente aggredire con più mani.",
  },
];
