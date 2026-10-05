// `/es/hand-chart` 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
// 공용 컴포넌트 components/hand-chart/hand-chart-tool.tsx가 이 객체 하나로 화면 전체를 그린다.
// 독자 = 멕시코·US 히스패닉·남미 → LATAM 중립 tú, voseo 없음. 숫자 형식 = calculator와 같은 en-US(1,326 · 46.6%).
// 용어: docs/translation-terms-es.md(UTG·Hijack·Cutoff 원어 · el botón · ciega pequeña · del mismo palo / de distinto palo · par servido)
//   → lib/posts-es/holdem-starting-hands-chart.ts·holdem-positions.ts 코퍼스 표기와 맞췄다.
// 헤드텀 근거(DataForSEO google_ads search_volume · MX 2484 · es · 2026-10-05 실측):
//   rangos poker 170 · tabla preflop poker 40 · tabla de rangos poker 20 · tabla de manos iniciales poker 10 ·
//   rangos de apertura poker 10 · manos iniciales poker 10. 글(holdem-starting-hands-chart)은 «tabla manos iniciales» 축 →
//   도구는 «tabla de rangos de poker» + «apertura por posición»으로 갈라 제목 중복을 피했다.
// 🔴 차트는 공개 자료 합의 레인지 — «GTO 차트/솔버가 계산한»이라 쓰지 않는다(FAQ 4의 외부 기준 인용만 허용).
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_ES: HandChartDict = {
  numberLocale: "en-US",
  seo: {
    title: "Tabla de rangos de poker — apertura por posición",
    description:
      "Tabla preflop interactiva: las 169 manos iniciales con el rango de apertura de UTG, HJ, CO, botón y ciega pequeña. Toca una posición y ve qué abrir.",
    path: "/es/hand-chart",
    keywords: [
      "tabla de rangos poker",
      "rangos poker",
      "tabla preflop poker",
      "tabla de manos iniciales poker",
      "rangos de apertura poker",
      "manos iniciales poker",
    ],
  },
  hero: {
    badge: "♠ Herramienta interactiva de manos iniciales",
    h1: "Tabla de rangos de poker por posición",
    lead: "Las 169 manos con colores según la posición (de UTG a SB). Toca una posición para resaltar solo las manos que puedes abrir desde ese asiento.",
    handsUnit: "manos",
    positionsUnit: "posiciones",
    tapHint: "Toca · pasa el cursor para verlo al instante",
  },
  filter: {
    caption: "Elige una posición → se resaltan las manos jugables",
    basisNote: [
      "El % de cada posición se calcula ",
      { b: "sobre los 169 tipos de mano" },
      " (el criterio de combos aparece en la tabla de abajo)",
    ],
    showAll: "Ver todo",
    selected: "Rango de apertura de {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} manos",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Botón (BTN)", "Ciega pequeña (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Desliza para ver la tabla completa →",
    pocketPair: "Par servido",
    suited: "Del mismo palo",
    offsuit: "De distinto palo",
    openFrom: "Abrir desde {pos}+",
    legendNote:
      "Triángulo superior derecho = del mismo palo (s) · diagonal = pares servidos · triángulo inferior izquierdo = de distinto palo (o)",
  },
  legend: {
    heading: "Colores",
    seatLine: "{pct} de 169",
    fold: "Fold",
    foldSub: "Todas las posiciones",
  },
  table: {
    heading: "Rango de apertura por posición",
    swipe: "← Desliza para ver «Rango · Manos de ejemplo»",
    position: "Posición",
    hands: "Manos",
    handsSub: "(de 169)",
    range: "Rango",
    rangeSub: "tipos / combos",
    examples: "Manos de ejemplo",
    comboCell: "/ combos {pct}",
    notes: [
      [
        "* ",
        { b: "Hay dos criterios." },
        " «12% de 169» cuenta ",
        { b: "tipos" },
        " de mano (cuántos de los 169 tipos entran en el rango); el criterio de ",
        { b: "combos" },
        " cuenta cuántas de las 1,326 combinaciones entran. El mismo rango da valores distintos: AA es 1 tipo pero 6 combos, y AKo es 1 tipo pero 12 combos. Los solvers y las guías de estrategia suelen usar combos (más detalle en la ",
        { href: "/es/blog/holdem-starting-hands-chart", text: "tabla de manos iniciales" },
        ").",
      ],
      [
        "* Son aproximaciones a los rangos de apertura estándar. Los valores reales de un solver cambian según el tamaño de apertura, los stacks y el rango del rival: por ejemplo, en el caso ciega contra ciega del ",
        { href: "/es/solver", text: "solver GTO de HoldemMaster" },
        ", la ciega pequeña abre el 46.6% con 3bb (92 tipos, 618 combos). En la mesa, ajusta según las tendencias de tus rivales.",
      ],
    ],
  },
  why: {
    heading: "Por qué la posición decide qué manos jugar",
    items: [
      {
        title: "Posición = información",
        desc: "El botón (BTN) siempre actúa último después del flop. Ver primero las apuestas y los checks de todos hace que la misma mano gane mucho más.",
      },
      {
        title: "En UTG tienes 8 jugadores detrás",
        desc: "Si abres desde UTG en una mesa de 9, no sabes cómo van a reaccionar los 8 jugadores que quedan detrás. La probabilidad de una resubida es alta, así que las manos especulativas como los conectores del mismo palo no rinden lo que valen: cierra tu rango a manos premium.",
      },
      {
        title: "El valor de las manos del mismo palo",
        desc: "Una mano del mismo palo tiene cerca de un 3–5% más de equity que la misma mano de distinto palo. Por eso puedes abrir A8s desde el hijack, pero con A8o esperas al botón.",
      },
      {
        title: "El dilema de la ciega pequeña",
        desc: "La ciega pequeña siempre actúa primero después del flop. Aunque abre un rango más amplio que el botón, realiza menos equity, así que las manos de fuerza media rinden menos.",
      },
    ],
  },
  faqHeading: "Preguntas frecuentes",
  related: {
    heading: "Siguiente paso — guías relacionadas",
    items: [
      { href: "/es/blog/holdem-starting-hands-chart", tag: "Guía completa", title: "Tabla de manos iniciales de póker y las mejores manos", desc: "Qué manos abrir desde cada asiento, y por qué" },
      { href: "/es/blog/holdem-when-to-fold", tag: "Foldear", title: "Cuándo foldear en el póker: la habilidad que gana más en silencio", desc: "La disciplina que más gana sin hacer ruido" },
      { href: "/es/blog/holdem-position-play", tag: "Posición", title: "Estrategia de posición: en posición vs fuera de posición", desc: "Por qué el botón es el asiento más rentable" },
      { href: "/es/blog/holdem-hand-rankings", tag: "Jerarquía", title: "Jerarquía de manos de póker en Texas Hold'em — de la mejor a la peor, con probabilidades", desc: "Las 10 manos, de la escalera real a la carta alta" },
      { href: "/es/calculator", tag: "Herramienta", title: "Calculadora de poker", desc: "Equity exacta y pot odds para cualquier mano" },
    ],
  },
};
