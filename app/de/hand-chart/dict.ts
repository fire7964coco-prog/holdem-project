// `/de/hand-chart` UI-Wörterbuch — ★2026-10-05 회차 1 신설(docs/tools-locale-rollout-plan.md).
// 타입·필드 주석 = components/hand-chart/dict.ts · EN 정본 = HAND_CHART_DICT_EN · 뜻 정본(기준 라벨·각주) = ko app/hand-chart.
// 용어 출처: docs/translation-terms-de.md(Range·Combo·Small Blind·Button 대문자 명사) → lib/posts-de/holdem-position-play.ts
//   («Under the Gun (UTG)» · «Der Hijack (HJ)» · «Der Cutoff (CO)» · «Der Button (BTN)» · «Small Blind (SB)») →
//   app/de/calculator/dict.ts(Suited · Offsuit · Pocket Pair · Hände 표기).
// 🔴 차트 = 공개 자료 합의 레인지. «GTO-Chart»·«vom Solver berechnet» 금지(외부 기준 인용만 허용 — FAQ 4).
//
// 헤드텀 근거 — DataForSEO google_ads/search_volume/live · DE(2276)·de · 2026-10-05 실측:
//   «poker starthände tabelle» 90 · «poker starthände» 110 · «preflop chart» 110 · «poker range chart» 50 ·
//   «poker starthände chart» null · «open range poker» 10. («poker hand chart» 260은 족보표 의도 혼재라 미채택.)
//   → title 앞머리 = 「Poker Starthände Tabelle」(형제 글 seoTitle «80% deiner Hände folden? …»과 겹치지 않음).
//   «Starthände»(110)·«Tabelle» 단독 의도는 글(holdem-starting-hands-chart)이 소유하던 자리 — 도구 = 표를 지금 본다.
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_DE: HandChartDict = {
  numberLocale: "de-DE",
  seo: {
    title: "Poker Starthände Tabelle – Open-Ranges nach Position",
    description:
      "Interaktive Starthände-Tabelle: alle 169 Preflop-Hände nach Position von UTG bis Small Blind farbig markiert. Ein Tipp auf den Sitz zeigt seine Open-Range.",
    path: "/de/hand-chart",
    keywords: [
      "poker starthände tabelle",
      "poker starthände",
      "preflop chart",
      "poker range chart",
      "starthände nach position",
      "open range poker",
    ],
  },
  hero: {
    badge: "♠ Interaktives Starthände-Tool",
    h1: "Poker Starthände Tabelle",
    lead: "Alle 169 Hände nach Position (UTG → SB) farbig markiert. Tippe auf eine Position, um nur die Hände hervorzuheben, die du von diesem Sitz öffnen kannst.",
    handsUnit: "Hände",
    positionsUnit: "Positionen",
    tapHint: "Antippen oder Hover für Sofortansicht",
  },
  filter: {
    caption: "Position wählen → spielbare Hände leuchten auf",
    basisNote: [
      "Die %-Werte bei den Positionen geben den ",
      { b: "Anteil an den 169 Handtypen" },
      " an (die Combo-Basis steht zusätzlich in der Tabelle unten)",
    ],
    showAll: "Alle zeigen",
    selected: "{pos} Open-Range · {count} / 169 ({pct}%)",
    handsCount: "{n} Hände",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Wischen, um das ganze Chart zu sehen →",
    pocketPair: "Pocket Pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Open ab {pos}",
    legendNote: "Dreieck oben rechts = suited (s) · Diagonale = Pocket Pairs · Dreieck unten links = offsuit (o)",
  },
  legend: {
    heading: "Farblegende",
    seatLine: "{pct} von 169",
    fold: "Fold",
    foldSub: "Alle Positionen",
  },
  table: {
    heading: "Open-Range nach Position",
    swipe: "← Wischen, um „Range · Beispielhände“ zu sehen",
    position: "Position",
    hands: "Hände",
    handsSub: "(von 169)",
    range: "Range",
    rangeSub: "Typ / Combo",
    examples: "Beispielhände",
    comboCell: "/ Combos {pct}",
    notes: [
      [
        "* ",
        { b: "Es gibt zwei Bezugsgrößen." },
        " „12% von 169“ zählt ",
        { b: "Handtypen" },
        " (wie viele der 169 Typen), die ",
        { b: "Combo" },
        "-Basis zählt, wie viele der 1.326 Kombinationen in der Range liegen. Dieselbe Range ergibt deshalb unterschiedliche Werte – AA ist ein Typ, aber 6 Combos, AKo ist ein Typ, aber 12 Combos. Solver und Strategie-Artikel rechnen meist mit Combos (so auch der ",
        { href: "/de/blog/holdem-starting-hands-chart", text: "Starthände-Chart-Guide" },
        ").",
      ],
      [
        "* Näherungswerte einer Standard-Open-Range. Echte Solver-Werte hängen von Open-Size, Stacks und der gegnerischen Range ab – im Blind-vs-Blind-Beispiel des ",
        { href: "/de/solver", text: "HoldemMaster GTO Solvers" },
        " öffnet der SB bei 3bb 46,6% (92 Typen, 618 Combos). Am Tisch passt du dich zusätzlich an die Tendenzen deiner Gegner an.",
      ],
    ],
  },
  why: {
    heading: "Warum die Position die Handauswahl bestimmt",
    items: [
      {
        title: "Position = Information",
        desc: "Der Button (BTN) handelt nach dem Flop immer zuletzt. Wer zuerst alle Bets und Checks sieht, macht mit derselben Hand deutlich mehr Gewinn.",
      },
      {
        title: "UTG hat 8 Spieler hinter sich",
        desc: "Eröffnest du an einem 9er-Tisch aus UTG, weißt du nicht, wie die 8 Spieler hinter dir reagieren. Eine 3-Bet ist wahrscheinlich, spekulative Hände wie Suited Connectors können ihren Wert kaum realisieren – also eng bleiben und auf Premium-Hände setzen.",
      },
      {
        title: "Der Wert von Suited-Händen",
        desc: "Eine suited Hand hat gegenüber derselben Offsuit-Hand rund 3–5% mehr Equity. Deshalb kannst du A8s schon vom Hijack öffnen, A8o aber erst vom Button.",
      },
      {
        title: "Das Small-Blind-Dilemma",
        desc: "Der Small Blind handelt nach dem Flop immer zuerst. Selbst mit einer weiteren Range als der Button realisiert er weniger Equity – mittelstarke Hände werden dadurch weniger profitabel.",
      },
    ],
  },
  faqHeading: "Häufige Fragen",
  related: {
    heading: "Nächste Schritte – passende Guides",
    items: [
      { href: "/de/blog/holdem-starting-hands-chart", tag: "Guide", title: "Poker Starthände Chart & die besten Hände", desc: "Welche Hände du von jedem Sitz öffnest – und warum" },
      { href: "/de/blog/holdem-when-to-fold", tag: "Folden", title: "Wann folden im Poker", desc: "Die Fähigkeit, die im Stillen am meisten gewinnt" },
      { href: "/de/blog/holdem-position-play", tag: "Position", title: "Positions-Strategie: In Position vs Out of Position", desc: "Warum der Button der profitabelste Sitz ist" },
      { href: "/de/blog/holdem-hand-rankings", tag: "Reihenfolge", title: "Pokerhände-Reihenfolge im Texas Hold'em", desc: "Alle 10 Hände vom Royal Flush bis zur High Card" },
      { href: "/de/calculator", tag: "Tool", title: "Poker-Odds-Rechner", desc: "Exakte Equity und Pot Odds für jede Hand" },
    ],
  },
};
