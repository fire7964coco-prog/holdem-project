// `/fr/hand-chart` dictionnaire UI — ★2026-10-05 회차 1 신설(docs/tools-locale-rollout-plan.md).
// 타입·필드 주석 = components/hand-chart/dict.ts · EN 정본 = HAND_CHART_DICT_EN · 뜻 정본(기준 라벨·각주) = ko app/hand-chart.
// 용어 출처: docs/translation-terms-fr.md(«petite blinde (SB)» · «bouton (BTN)» · 포지션 약어 영어 · «se coucher») →
//   app/fr/calculator/dict.ts(«assortie / dépareillée» · «paire servie» · «main de départ» — 같은 사이트 도구 어휘에 맞춤) →
//   fr 코퍼스 grep(«Cutoff (CO)» · «Petite blinde (SB)»). 2인칭 «tu» = fr 코퍼스 관례.
// 🔴 차트 = 공개 자료 합의 레인지. «tableau GTO»·«calculé par le solver» 금지(외부 기준 인용만 허용 — FAQ 4).
// 🔴 % 앞·« » 안쪽은 NBSP(U+00A0) — percentGap도 calculator와 같은 문자.
//
// 헤드텀 근거 — DataForSEO google_ads/search_volume/live · France(2250)·fr · 2026-10-05 실측:
//   «tableau range poker» 210 · «range poker» 1 600 · «main(s) de départ poker» 30 · «poker starting hand chart» 20 ·
//   «tableau main de départ poker»·«range préflop»·«tableau des mains de départ» null.
//   → title 앞머리 = 「Tableau range poker」(docs/keyword-bank/fr-gto-solver.md가 «프리플랍 표 의도 — 후속 chart 몫»으로 남겨 둔 자리).
//   fr에는 holdem-starting-hands-chart 글이 없다 → 각주 ①은 링크 없이 · related는 실재 fr 글(Règles 필라)로.
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_FR: HandChartDict = {
  numberLocale: "fr-FR",
  percentGap: " ",
  seo: {
    title: "Tableau range poker — mains de départ par position",
    description:
      "Les 169 mains de départ du Texas Hold'em, coloriées par position de UTG à la petite blinde. Touche une place et vois tout de suite sa range d'ouverture.",
    path: "/fr/hand-chart",
    keywords: [
      "tableau range poker",
      "range poker",
      "mains de départ poker",
      "main de départ poker",
      "range d'ouverture par position",
      "poker starting hand chart",
    ],
  },
  hero: {
    badge: "♠ Outil interactif des mains de départ",
    h1: "Tableau range poker par position",
    lead: "Les 169 mains coloriées selon la position (UTG → SB). Touche une position pour ne faire ressortir que les mains que tu peux ouvrir depuis cette place.",
    handsUnit: "mains",
    positionsUnit: "positions",
    tapHint: "Touche · survole pour voir tout de suite",
  },
  filter: {
    caption: "Choisis une position → les mains jouables s'allument",
    basisNote: [
      "Le % affiché sur chaque position est la ",
      { b: "part des 169 types de mains" },
      " (la base en combos figure aussi dans le tableau plus bas)",
    ],
    showAll: "Tout afficher",
    selected: "Range d'ouverture en {pos} · {count} / 169 ({pct} %)",
    handsCount: "{n} mains",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Bouton (BTN)", "Petite blinde (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Fais glisser pour voir tout le tableau →",
    pocketPair: "Paire servie",
    suited: "Assortie",
    offsuit: "Dépareillée",
    openFrom: "Ouvrir dès {pos}",
    legendNote: "Triangle en haut à droite = assorties (s) · diagonale = paires servies · triangle en bas à gauche = dépareillées (o)",
  },
  legend: {
    heading: "Légende des couleurs",
    seatLine: "{pct} sur 169",
    fold: "Se coucher",
    foldSub: "Toutes les positions",
  },
  table: {
    heading: "Range d'ouverture par position",
    swipe: "← Fais glisser pour voir « Range · Mains types »",
    position: "Position",
    hands: "Mains",
    handsSub: "(sur 169)",
    range: "Range",
    rangeSub: "type / combo",
    examples: "Mains types",
    comboCell: "/ combos {pct}",
    notes: [
      [
        "* ",
        { b: "Il y a deux bases de calcul." },
        " « 12 % sur 169 » compte des ",
        { b: "types" },
        " de mains (combien des 169 types), alors que la base ",
        { b: "combos" },
        " compte combien des 1 326 combinaisons sont dans la range. Une même range donne donc deux valeurs différentes : AA est un seul type mais 6 combos, AKo un seul type mais 12 combos. Les solvers et les articles de stratégie raisonnent en général en combos.",
      ],
      [
        "* Valeurs approchées d'une range d'ouverture standard. Les vraies valeurs de solver dépendent de la taille d'ouverture, des tapis et de la range adverse : dans l'exemple blinde contre blinde du ",
        { href: "/fr/solver", text: "solver GTO HoldemMaster" },
        ", la SB ouvre à 3bb avec 46,6 % (92 types, 618 combos). À la table, adapte-toi aussi aux tendances de tes adversaires.",
      ],
    ],
  },
  why: {
    heading: "Pourquoi la position décide des mains à jouer",
    items: [
      {
        title: "Position = information",
        desc: "Le bouton (BTN) parle toujours en dernier après le flop. Voir d'abord les mises et les checks de tout le monde rend la même main bien plus rentable.",
      },
      {
        title: "UTG a 8 joueurs derrière lui",
        desc: "Quand tu ouvres depuis UTG à une table de 9, tu ne sais pas comment vont réagir les 8 joueurs derrière toi. Le risque de 3-bet est élevé, et les mains spéculatives comme les connecteurs assortis n'arrivent pas à réaliser leur valeur : resserre-toi sur les mains premium.",
      },
      {
        title: "La valeur d'une main assortie",
        desc: "Une main assortie a environ 3 à 5 % d'équité de plus que la même main dépareillée. C'est pour ça que tu peux ouvrir A8s dès le hijack, mais attendre le bouton avec A8o.",
      },
      {
        title: "Le dilemme de la petite blinde",
        desc: "La petite blinde parle toujours en premier après le flop. Même avec une range plus large que celle du bouton, elle réalise moins son équité, et les mains moyennes deviennent moins rentables.",
      },
    ],
  },
  faqHeading: "Questions fréquentes",
  related: {
    heading: "Pour aller plus loin — guides liés",
    items: [
      { href: "/fr/blog/holdem-game-order", tag: "Ordre du jeu", title: "Comment jouer au Texas Hold'em : l'ordre du jeu", desc: "Qui parle quand, du préflop à l'abattage" },
      { href: "/fr/blog/holdem-blind-meaning", tag: "Blindes", title: "Les blindes au poker : petite blinde et grosse blinde", desc: "Pourquoi la SB et la BB paient avant de voir leurs cartes" },
      { href: "/fr/blog/holdem-betting-actions", tag: "Actions", title: "Les actions au Texas Hold'em : checker, suivre, relancer, se coucher", desc: "Check, relance, min-raise et quand se coucher" },
      { href: "/fr/blog/texas-holdem-rules-for-beginners", tag: "Débutant", title: "Comment jouer au Texas Hold'em quand on débute", desc: "Règles, jetons, mains et première stratégie" },
      { href: "/fr/calculator", tag: "Outil", title: "Calculateur poker", desc: "Équité exacte et cotes du pot pour n'importe quelle main" },
    ],
  },
};
