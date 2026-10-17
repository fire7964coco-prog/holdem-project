"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

// Italian copy on the current French template, including the 2026-10-16 shared-copy updates.
// Terms: docs/translation-terms-it.md. The solver currently opens its English UI.
const n = (x: number) => x.toLocaleString("it-IT", { useGrouping: true });
const dec = (x: string) => x.replace(".", ",");
const theStreet = (st: string) => `il ${st.toLowerCase()}`;

const IT_NAMES: HandNames = {
  categories: ["Carta Alta", "Coppia", "Doppia Coppia", "Tris", "Scala", "Colore", "Full", "Poker", "Scala a Colore"],
  drawingDead: "Drawing dead",
  flushDraw: "Progetto di colore",
  straightDraw: "Progetto di scala",
};

const IT_UI: QuizUI = {
  names: IT_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Tu",
  folded: "Fold",
  raise: "Rilancio",
  call: "Call",
  bet: "Puntata",
  check: "Check",
  allIn: "All-in",
  tableNote: "Tavolo 6-max o da 9 · scegli quanti giocatori vedono il flop (2–6)",
  playersBtn: (k) => `${k} giocatori`,
  playersLabel: "Giocatori",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Stile degli avversari",
  styleHint: "Stile degli avversari: cambia solo le regole delle azioni dal flop in poi; i range preflop restano gli stessi",
  styleNames: { standard: "Standard", tight: "Tight", loose: "Loose", aggressive: "Aggressivo" },
  loading: "Mescoliamo e calcoliamo…",

  myEquity: "La tua equity",
  vsOpponents: (k) => (k === 0 ? "nessun avversario rimasto" : `contro ${k} ${k === 1 ? "avversario" : "avversari"}`),
  basisSeat: "contro i range per posizione",
  basisRange: "contro le mani compatibili con le loro azioni",
  roleOpen: "Apertura",
  roleDefend: "Difesa",
  winShort: "Vittoria",
  tieShort: "Pareggio",
  // ★2026-10-16 헤드 — EN 임시 «Lose»가 Vittoria·Pareggio 사이에 섞여 읽혔다 → 같은 짝의 일반어 Sconfitta.
  loseShort: "Sconfitta",
  revealedLabel: "👀 Contro le mani scoperte",
  revealedNote: (gap) =>
    `Il valore in alto presuppone che tu non veda le loro carte: da qui la differenza di ${dec(gap)} percentage points. Al tavolo decideresti in base al valore in alto.`,

  potOddsTitle: "Pot odds: l'equity minima per un call in break-even",
  potLabel: "Piatto",
  potBeforeLabel: "Piatto (prima della puntata)",
  toCallLabel: "Da chiamare",
  requiredLabel: "Equity minima",
  noBet: "Nessuno ha puntato. Vedi la prossima carta gratis.",
  noBetAllIn: (river) =>
    river
      ? "Tutti i giocatori ancora in gioco sono già all-in: non restano fiches da puntare. Si passa direttamente allo showdown."
      : "Tutti i giocatori ancora in gioco sono già all-in: non restano fiches da puntare. Si distribuiscono le carte rimaste e si passa allo showdown.",
  verdictCall: "Chiama",
  verdictFold: "Fold",
  impliedNote: "Se però puoi vincere di più quando chiudi il progetto (implied odds), il call può comunque essere corretto.",

  revealBtn: (next) => `Distribuisci ${theStreet(next)} →`,
  newHandBtn: "Nuova mano 🔄",
  showCards: "👀 Mostra le loro carte",
  hideCards: "🙈 Nascondi le loro carte",

  wonByFold: (pot) => `Tutti foldano: vinci il piatto di ${n(pot)}`,
  splitLabel: (names) => `Split pot: pareggio tra ${names.length > 1 ? names.slice(0, -1).join(", ") + " e " + names[names.length - 1] : names[0]}`,
  winLabel: (name, cat) => `${name} vince · ${cat}`,
  winLabelHero: (cat) => `Vinci tu · ${cat}`,

  reviewTitle: "📋 Analisi: quando avresti dovuto foldare?",
  reviewCols: ["Street", "La tua equity", "Minima", "Verdetto"],
  reviewNoMistake: "✅ Il call era corretto fino alla fine.",
  reviewMistake: (street) => `⚠️ Già al ${street.toLowerCase()} il fold era la scelta corretta. Era il momento di uscire dalla mano.`,
  reviewInvested: (invested, pot) => `Hai investito ${n(invested)} · piatto finale ${n(pot)}`,

  formulaTitle: "📐 Da dove viene questo valore",
  outsLabel: (k) => (k === 1 ? `${k} carta completa o migliora la tua mano` : `${k} carte completano o migliorano la tua mano`),
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} per il colore` : "",
      o.straight > 0 ? `${o.straight} per la scala` : "",
      o.set > 0 ? `${o.set} per set o trips` : "",
      o.twoPair > 0 ? `${o.twoPair} per la doppia coppia` : "",
      o.over > 0 ? `${o.over} per formare una coppia con un'overcard` : "",
      both > 0 ? `${both} ${both > 1 ? "rientrano" : "rientra"} in due categorie (si ${both > 1 ? "contano" : "conta"} una volta sola)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Probabilità che esca una di queste carte (regola del 2 e del 4)",
  winLabel2: "La tua equity nel piatto (simulata: il pareggio conta per la tua quota di split pot)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "I due valori misurano cose diverse. Quello in alto è la probabilità di CENTRARE una di queste carte; quello in basso è la tua quota di piatto quando VINCI (il pareggio conta per la tua quota). Puoi migliorare e perdere comunque se un avversario migliora di più, oppure non migliorare e vincere lo stesso. Il verdetto si basa sul valore in basso.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Siamo ancora al preflop, quindi la scorciatoia «outs × 2/4» non si applica. L'equity in alto deriva da ${k} mani simulate contro le mani con cui ogni avversario potrebbe entrare nel piatto dalla sua posizione.`
      : `Non hai nessuno degli outs conteggiati da questo strumento: nessuna carta completa un colore o una scala, né migliora la categoria della tua mano (set o trips, doppia coppia o coppia con un'overcard). La scorciatoia «outs × 2/4» quindi non si applica. L'equity in alto deriva da ${k} mani simulate contro tutte le mani compatibili con le azioni che hai visto.`,
  foldWinNote: "Tutti gli avversari hanno foldato: il piatto è tuo. Il 100% in alto è il risultato della mano, non una stima simulata.",
  riverNote: "Siamo al river: non ci sono altre carte da distribuire e la scorciatoia «outs × 2/4» non si applica. L'equity in alto confronta la tua mano finale con tutte le mani compatibili con le azioni che hai visto.",
  chartTitle: "📈 Equity per street: tutte le carte scoperte",
  resultTabs: ["📋 Analisi", "📈 Grafico", "🃏 Calcolo"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Vedi questo spot nel solver GTO" : info.kind === "notReady" ? "Vedi uno spot simile nel solver GTO" : "Vedi uno spot heads-up nel solver GTO",
  solverOpen: "Apri Flop study nel solver (in inglese)",
  solverNote: (info) => {
    const gto = "Mostra la strategia al flop quando entrambi i giocatori giocano GTO (risultati precalcolati · 6-max 100bb · solo flop): range, dimensioni di puntata e regole degli avversari sono quindi diversi da quelli di questo strumento.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} apre · ${info.caller} chiama (piatto con un solo rilancio nel solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — il link apre le stesse posizioni e lo stesso flop in Flop study nel solver. ${gto}`
          : `${info.opener} apre · ${info.caller} chiama — la mano è finita prima del flop, quindi si apre solo il confronto tra posizioni. Scegli le tre carte del flop nel solver. ${gto}`;
      case "notReady":
        return `Il confronto «${info.opener} apre · ${info.caller} chiama» non è ancora precalcolato in Flop study nel solver. Scegli un confronto tra posizioni simile oppure calcolalo nel solver.`;
      case "multiway":
        return `${info.players} giocatori hanno visto questo flop. I risultati precalcolati del solver coprono solo piatti heads-up, quindi non puoi aprire questa mano così com'è: scegli in Flop study un confronto contro un solo avversario.`;
      case "table9":
        return "I risultati precalcolati del solver si riferiscono a tavoli 6-max, quindi non puoi aprire direttamente una mano giocata a 9: scegli in Flop study il confronto tra posizioni più vicino.";
    }
  },
  solverLang: "en",
  fmtNum: n,
  decimalComma: true,
  chartRangeLegend: "Quello che vedevi",
  chartNote: "Le linee continue mostrano l'equity di ogni posto con tutte le carte scoperte; la linea tratteggiata è l'equity che vedevi senza conoscere le carte avversarie. La linea di chi folda si ferma alla street precedente al fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "Qual è la tua equity?",
  quizGuessHint: "Sposta il cursore per indicare la tua stima",
  quizSubmit: "Verifica",
  quizCallSubmit: "Chiama → verifica",
  quizFoldSubmit: "Fold → verifica",
  quizResult: (guess, err, points) => `La tua stima ${guess}% · errore ${dec(err)} percentage points · ${points} punti`,
  quizChoiceResult: (ok, verdict) => (ok ? `Scelta corretta (${verdict})` : `Errata: la risposta corretta era ${verdict}`),
  quizNotCounted: "Esclusa dalla cronologia del quiz: avevi già visto l'equity o le carte degli avversari",
  quizStats: (s) => `${s.hands} ${s.hands === 1 ? "mano" : "mani"} · errore medio ${dec(s.avgErr)} percentage points · ${s.hits}/${s.decisions} scelte corrette · ${n(s.points)} punti`,
  quizReset: "Azzera",
  quizResetConfirm: "Vuoi cancellare la cronologia del quiz salvata in questo browser? L'operazione è irreversibile.",
  quizInvite: "Accedi per salvare questa cronologia sul tuo account e ritrovarla su qualsiasi telefono o PC.",
  quizInviteLink: "Accedi",
  quizGuessCol: "Stima",
  quizChoiceCol: "Scelta",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Questa mano: errore medio ${dec(avgErr)} percentage points${decisions > 0 ? ` · ${hits}/${decisions} scelte corrette` : ""} · ${points} punti`,
  quizGuessLegend: "La tua stima",
  customToggle: "✍️ Crea una mano",
  customTitle: "Crea una mano: riprova uno spot che hai giocato",
  customHint: "Tocca una casella, poi scegli una carta qui sotto. Le caselle vuote vengono riempite a caso; gli avversari ricevono sempre mani dai range della loro posizione.",
  customPos: "La tua posizione",
  customRandom: "Casuale",
  customHero: "La tua mano",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Distribuisci questa mano →",
  customClear: "Cancella tutto",
  customClose: "Chiudi",
  customOff: "Torna alle mani casuali",
  customActive: "Mano personalizzata: le prossime mani mantengono queste carte",
  customEdit: "Modifica",
  shareBtn: "Copia il link di questa mano",
  shareCopied: "Copiato. Chi apre il link gioca questa mano dal preflop, con le stesse carte e la stessa equity.",
  shareManual: "La copia automatica è bloccata. Copia l'indirizzo qui sotto.",
  sharedActive: "Mano condivisa: stesse carte e stessa equity del mittente (esclusa dalla cronologia del quiz)",
  sharedInvalid: "Il link condiviso non è leggibile: ecco una nuova mano casuale (il link potrebbe essere incompleto o modificato)",
  rangeToggle: "Mostra il range dell'avversario",
  rangeTitle: "Range dell'avversario: le mani compatibili con le azioni viste",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} combo → ora ${cur} combo (${pct}% rimanente)`,
  rangeLegend: ["Ancora nel range (più scuro = quota rimasta maggiore)", "Esclusa dalle azioni", "Mai nel range", "Mano reale", "Bloccata dalla tua mano o dal board"],
  rangeNote: "Si parte dal range preflop della sua posizione e si elimina, street dopo street, ogni mano che avrebbe agito diversamente secondo le regole dell'avversario. L'equity in alto usa lo stesso range. Le combo che contengono una carta della tua mano o del board sono escluse.",
  quizKinds: ["Stima l'equity e decidi", "Solo decisioni (call o fold?)"],
  decideTitle: "Call o fold?",
  decideHint: "Scegli tra call e fold senza vedere le loro carte. Anche se scegli fold, la mano prosegue fino alla fine. Questa modalità è esclusa dalla cronologia del quiz.",
  decideSummary: (hits, decisions) => `Questa mano: ${hits}/${decisions} scelte corrette secondo le pot odds`,
  actualCol: "Carte note",
  actualSummary: (hits, decisions) => `Scelte corrette conoscendo le loro carte: ${hits}/${decisions}. È solo un riferimento: al tavolo contano le pot odds senza vedere le carte avversarie.`,

  ruleTitle: "Le ipotesi di questo strumento",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Gli avversari seguono solo le regole qui sotto.</b> Nessun giocatore reale
        gioca così: posizione, avversario, profondità degli stack e immagine al tavolo cambiano tutto. È come
        trascurare l&rsquo;attrito in un esercizio di fisica.
      </p>
      <p className="mb-1">
        Stile attuale degli avversari: <b className="text-foreground">{IT_UI.styleNames[style]}</b> (tutto il tavolo usa lo stesso stile: cambialo nel selettore in alto)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Doppia coppia o meglio → <b className="text-foreground">{style === "aggressive" ? "punta o rilancia il 150% del piatto (overbet)" : "punta o rilancia quanto il piatto"}</b></li>
        {style === "standard" && <li>Una coppia o un progetto di colore/scala → <b className="text-foreground">punta metà piatto</b></li>}
        {style === "tight" && <>
          <li>Top pair o meglio, formata con almeno una carta coperta (overpair comprese), o un progetto di colore/scala → <b className="text-foreground">punta metà piatto</b></li>
          <li>Qualsiasi coppia più bassa (anche una coppia presente solo sul board) → <b className="text-foreground">folda</b></li>
        </>}
        {style === "loose" && <li>Una coppia, un progetto di colore/scala o una carta coperta più alta di tutte quelle del board (overcard) → <b className="text-foreground">punta metà piatto</b></li>}
        {style === "aggressive" && <>
          <li>Progetto di colore/scala → <b className="text-foreground">punta o rilancia (semi-bluff)</b></li>
          <li>Una coppia → <b className="text-foreground">punta metà piatto</b></li>
          <li>Né coppia né progetto, ma un&rsquo;overcard → <b className="text-foreground">punta o rilancia (bluff)</b></li>
        </>}
        <li>Tutto il resto → <b className="text-foreground">folda</b> (senza mostrare le carte, come al tavolo live)</li>
      </ul>
      <p className="mb-2">
        Le regole si leggono dall&rsquo;alto: decide la prima riga applicabile. Un progetto richiede quattro carte per il colore o la scala al flop o al turn, con almeno una carta coperta (al river non ci sono progetti).{" "}
        {style === "aggressive" && "Tutti i rilanci dello stile Aggressivo, inclusi semi-bluff e bluff, sono del 150% del piatto. "}
        Quando qualcuno rilancia, tutti i giocatori ancora in gioco chiamano il rilancio. Se la puntata supera le fiches
        rimaste, si limita allo stack residuo e il giocatore va all-in. Appena un giocatore è all-in, nessuno folda più:
        si distribuisce il resto del board e si arriva allo showdown. Non ci sono check-raise: ogni avversario agisce una volta per street,
        senza una fase in cui fa check e poi risponde di nuovo. Su una street postflop con una puntata, le etichette dei posti riassumono
        la street: il posto che determina l&rsquo;importo mostra «Puntata» e tutti gli altri posti avversari ancora in gioco mostrano «Call»,
        indipendentemente dall&rsquo;ordine (al preflop le etichette indicano come ciascuno è entrato nel piatto; un posto già all-in da una street precedente mostra All-in).
        Qui non punti mai: continui a chiamare fino al river. I range preflop qui sotto restano uguali per tutti gli stili.
      </p>
      <p className="mb-2">
        <b className="text-foreground">La tua equity viene calcolata come se non vedessi le loro carte.</b> Dal flop in poi,
        il range di ogni avversario comprende le mani del suo range preflop per posizione che, con lo stile scelto, avrebbero compiuto
        le azioni che hai visto. Contro avversari Standard, un rilancio lascia solo doppia coppia o meglio; contro avversari Aggressivi
        restano anche progetti e bluff con overcard. Se l&rsquo;azione propria di un posto era un rilancio, il calcolo continua a trattarla come tale
        anche quando l&rsquo;etichetta mostra «Call»: in quel caso l&rsquo;etichetta è rossa. I giocatori che foldano sullo schermo
        escono anche dal calcolo.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Le mani preflop degli avversari provengono da range per posizione.</b> Tra chi entra
        nel piatto, il primo a parlare al preflop è considerato l&rsquo;autore dell&rsquo;apertura; gli altri difendono con un call o un 3-bet
        (range di apertura e di difesa). Sono range di consenso per cash game 6-max 100bb, ricavati dal confronto di più fonti pubbliche,
        con le mani marginali giocate al 25/50/75%. Dove manca una tabella (HJ contro apertura UTG; SB contro apertura UTG, HJ o CO),
        e dal terzo giocatore in poi, si usa la tabella di difesa più vicina. Non ci sono tabelle per tavoli da 9: UTG, UTG+1, UTG+2 e LJ
        usano la tabella UTG 6-max; gli altri posti usano la tabella 6-max con lo stesso nome (una posizione iniziale che difende contro
        un&rsquo;altra posizione iniziale, o HJ che difende contro di essa, usa la tabella CO contro UTG). I primi tre posti di un tavolo da 9
        hanno quindi range più ampi di quelli reali. Solo la tua mano è casuale, salvo scelta personalizzata: puoi giocare qualsiasi mano
        iniziale fino al river. Qui un 3-bet non cambia la dimensione del piatto: è una semplificazione.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Il verdetto si basa solo sulle pot odds.</b> Non include le implied odds;
        le tendenze e i bluff degli avversari entrano nei range solo nei limiti delle regole dello stile scelto. Soprattutto con un progetto,
        un call può essere giustificato anche quando le sole pot odds sono un po&rsquo; insufficienti.
      </p>
      <p>
        Tutti pagano un ante di {ANTE} e partono con uno stack di {n(STACK)}. Non foldi mai: è il principio dell&rsquo;esercizio,
        arrivi al river e poi analizzi la mano. L&rsquo;equity è una stima simulata con un campione fisso:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} simulazioni</b> al preflop e{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulazioni</b> dal flop in poi (errore standard al massimo di circa 0,25–0,35 percentage points — tanto più piccolo quanto più il valore è lontano dal 50%).
        Ogni mano usa un seme casuale fisso: mostra quindi gli stessi valori su qualsiasi dispositivo. In caso di pareggio,
        il piatto si divide in parti uguali tra i giocatori coinvolti (metà a testa in due).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Quando mostri le loro carte</b>, ogni posto riceve la propria equity con tutte le mani note. Dal flop
        si contano esattamente tutte le carte rimaste; solo al preflop si usano {n(SAMPLES.known)} simulazioni. Questi valori non entrano mai
        nell&rsquo;equity o nel verdetto call/fold mostrati: a un tavolo reale non avresti questa informazione.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Con il Quiz attivo</b>, equity e verdetto restano nascosti finché non rispondi. In
        «Stima l&rsquo;equity e decidi» stimi l&rsquo;equity a ogni street e, quando qualcuno punta, scegli anche tra call e fold.
        In «Solo decisioni (call o fold?)» scegli solo tra call e fold sulle street con una puntata, senza stimare l&rsquo;equity;
        questa modalità è esclusa dalla cronologia del quiz. La risposta è «La tua equity» in alto, calcolata senza vedere le carte avversarie.
        Ogni stima vale <b className="text-foreground">100 − 4 × errore (in percentage points)</b>
        {" "}punti, arrotondati all&rsquo;intero e mai sotto zero (zero da 25 percentage points di errore). Una scelta call/fold è corretta se coincide
        con il verdetto delle pot odds. I totali restano in questo browser; se hai effettuato l&rsquo;accesso, vengono salvati anche sul tuo account
        e li ritrovi sugli altri dispositivi (carte e board non vengono salvati).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Crea una mano</b> ti permette di scegliere posizione, carte e board per riprovare una mano
        che hai giocato. Le caselle vuote vengono riempite a caso. Non puoi scegliere le carte degli avversari: non le conosceresti nemmeno
        a un tavolo reale. Provengono sempre dai range per posizione e l&rsquo;equity conserva l&rsquo;ipotesi delle carte sconosciute.
        Anche se imposti tutto il board in anticipo, l&rsquo;equity di ogni street usa solo le carte distribuite fino a quel momento.
        Le mani personalizzate sono escluse dalla cronologia del quiz, perché ripetere la stessa mano permetterebbe di ricordare le risposte.
      </p>
    </>
  ),
  footer: (
    <>
      Vuoi approfondire?{" "}
      <a href="/it/calculator" className="text-primary underline">Calcolatore poker →</a>
    </>
  ),
};

export default function WinRateQuizClientIt() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Quiz poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Allenati senza vedere le loro carte e scopri quando avresti dovuto foldare</p>
      </div>
      <WinRateSimulator ui={IT_UI} />
    </div>
  );
}
