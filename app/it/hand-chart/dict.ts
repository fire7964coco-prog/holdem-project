import type { HandChartDict } from "@/components/hand-chart/dict";

// 2026-10-16 Italian rollout. EN copy and de/fr structure; public-source consensus ranges.
// Terms and head terms: docs/translation-terms-it.md, docs/keyword-bank/it-tools.md.
export const HAND_CHART_DICT_IT: HandChartDict = {
  numberLocale: "it-IT",
  seo: {
    title: "Tabella delle mani iniziali — range preflop per posizione",
    description: "Esplora le 169 mani iniziali del Texas Hold'em per posizione, da UTG a SB. Tocca una posizione per evidenziare il suo range di apertura.",
    path: "/it/hand-chart",
    keywords: ["tabella delle mani iniziali", "poker hand chart", "range preflop", "preflop chart", "range poker", "mani da giocare a poker"],
  },
  hero: {
    badge: "♠ Tabella interattiva delle mani iniziali",
    h1: "Tabella delle mani iniziali",
    lead: "Tutte le 169 mani, colorate per posizione (UTG → SB). Tocca una posizione per evidenziare solo le mani con cui puoi aprire da quel posto.",
    handsUnit: "mani",
    positionsUnit: "posizioni",
    tapHint: "Tocca o passa il puntatore per vedere subito",
  },
  filter: {
    caption: "Scegli una posizione → si evidenziano le mani giocabili",
    basisNote: ["La percentuale di ogni posizione indica la ", { b: "quota dei 169 tipi di mano" }, " (la percentuale sulle combo è riportata anche nella tabella sotto)"],
    showAll: "Mostra tutto",
    selected: "Range di apertura da {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} mani",
  },
  positions: ["Under the gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Bottone (BTN)", "Piccolo buio (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Scorri per vedere tutta la tabella →",
    pocketPair: "Coppia servita",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Apri da {pos} in poi",
    legendNote: "Triangolo in alto a destra = suited (s) · diagonale = coppie servite · triangolo in basso a sinistra = offsuit (o)",
  },
  legend: {
    heading: "Legenda dei colori",
    seatLine: "{pct} su 169",
    fold: "Fold",
    foldSub: "Tutte le posizioni",
  },
  table: {
    heading: "Range di apertura per posizione",
    swipe: "← Scorri per vedere range e mani di esempio",
    position: "Posizione",
    hands: "Mani",
    handsSub: "(su 169)",
    range: "Range",
    rangeSub: "tipi / combo",
    examples: "Mani di esempio",
    comboCell: "/ combo {pct}",
    notes: [
      ["* ", { b: "Ci sono due basi di calcolo." }, " «12% su 169» conta i ", { b: "tipi" }, " di mano (quanti dei 169 tipi), mentre la base ", { b: "combo" }, " conta quante delle 1.326 combinazioni rientrano nel range. Lo stesso range produce quindi valori diversi: AA è un tipo ma 6 combo, AKo è un tipo ma 12 combo. I solver e gli articoli di strategia ragionano di solito in combo."],
      ["* Valori indicativi di un range di apertura standard, basato sul consenso tra fonti pubbliche. I risultati di un solver dipendono da dimensione dell'apertura, stack e range avversario: nell'esempio buio contro buio del solver GTO HoldemMaster, SB apre a 3bb con il 46,6% (92 tipi, 618 combo). Al tavolo adatta il range anche alle tendenze degli avversari."],
    ],
  },
  why: {
    heading: "Perché la posizione determina le mani da giocare",
    items: [
      {
        title: "Posizione = informazioni",
        desc: "Il bottone (BTN) agisce sempre per ultimo dopo il flop. Vedere prima le puntate e i check degli altri rende la stessa mano molto più profittevole.",
      },
      {
        title: "UTG ha 8 giocatori dietro",
        desc: "Quando apri da UTG a un tavolo da 9, non sai come reagiranno gli 8 giocatori dopo di te. Il rischio di un controrilancio è alto, quindi mani speculative come i suited connectors faticano a realizzare il proprio valore: restringi il range alle mani premium.",
      },
      {
        title: "Il valore delle mani suited",
        desc: "Una mano suited ha circa il 3–5% di equity in più rispetto alla stessa mano offsuit. Ecco perché puoi aprire A8s da hijack, mentre con A8o aspetti il bottone.",
      },
      {
        title: "Il dilemma del piccolo buio",
        desc: "Il piccolo buio agisce sempre per primo dopo il flop. Anche con un range più largo di quello del bottone, realizza meno equity: le mani di forza media diventano quindi meno profittevoli.",
      },
    ],
  },
  faqHeading: "Domande frequenti sulla tabella delle mani iniziali",
  related: {
    heading: "Il prossimo passo: guide e strumenti",
    items: [
      { href: "/it/blog/texas-holdem-rules-for-beginners", tag: "Per iniziare", title: "Come si gioca a Texas Hold'em", desc: "Dai bui allo showdown, passo dopo passo" },
      { href: "/it/blog/holdem-betting-actions", tag: "Azioni", title: "Check, call, raise e fold", desc: "Le azioni di puntata al tavolo" },
      { href: "/it/blog/holdem-game-order", tag: "Ordine di gioco", title: "Chi agisce per primo?", desc: "L'ordine delle azioni preflop e postflop" },
      { href: "/it/blog/holdem-blind-meaning", tag: "Bui", title: "Piccolo e grande buio", desc: "SB, BB e il loro ruolo nella mano" },
      { href: "/it/calculator", tag: "Strumento", title: "Calcolatore poker", desc: "Equity e pot odds per la tua mano" },
    ],
  },
};
