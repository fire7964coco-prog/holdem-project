// `/pt/hand-chart` 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
// 공용 컴포넌트 components/hand-chart/hand-chart-tool.tsx가 이 객체 하나로 화면 전체를 그린다.
// 독자 = 브라질(você). 숫자 형식 = calculator와 같은 pt-BR(1.326 · 46,6%).
// 용어: docs/translation-terms-pt.md(range는 영어 그대로 · blinds·fold 원어) → lib/posts-pt/holdem-starting-hands-chart.ts·holdem-positions.ts
//   코퍼스 표기(Under the Gun · hijack · cutoff · button · small blind · suited · offsuit · pocket pair)와 맞췄다.
// 헤드텀 근거(DataForSEO google_ads search_volume · BR 2076 · pt · 2026-10-05 실측):
//   range poker 590 · tabela de mãos poker 320(🔴 족보표 의도와 섞임 → 제목에 안 씀) · range de maos poker 210 ·
//   tabela de range poker 90 · tabela de mãos iniciais poker / range por posição poker / mãos iniciais poker = 데이터 없음.
//   글(holdem-starting-hands-chart)의 seoTitle은 «Tabela de mãos iniciais» → 도구는 «tabela de range» + «range de mãos por posição»으로 갈랐다.
// 🔴 차트는 공개 자료 합의 레인지 — «GTO 차트/솔버가 계산한»이라 쓰지 않는다(FAQ 4의 외부 기준 인용만 허용).
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_PT: HandChartDict = {
  numberLocale: "pt-BR",
  seo: {
    title: "Tabela de range poker — range de mãos por posição",
    description:
      "Tabela interativa de mãos iniciais: as 169 mãos com o range de abertura do UTG, HJ, CO, button e small blind. Toque numa posição e veja o que abrir.",
    path: "/pt/hand-chart",
    keywords: [
      "tabela de range poker",
      "range de maos poker",
      "range poker",
      "range de mãos por posição poker",
      "tabela de mãos iniciais poker",
      "mãos iniciais poker",
    ],
  },
  hero: {
    badge: "♠ Ferramenta interativa de mãos iniciais",
    h1: "Tabela de range de mãos no poker",
    lead: "As 169 mãos com cores por posição (do UTG ao SB). Toque numa posição para destacar só as mãos que você pode abrir daquele assento.",
    handsUnit: "mãos",
    positionsUnit: "posições",
    tapHint: "Toque · passe o mouse para ver na hora",
  },
  filter: {
    caption: "Escolha uma posição → as mãos jogáveis se destacam",
    basisNote: [
      "O % de cada posição é calculado ",
      { b: "sobre os 169 tipos de mão" },
      " (o critério de combos aparece na tabela abaixo)",
    ],
    showAll: "Ver tudo",
    selected: "Range de abertura do {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} mãos",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Deslize para ver a tabela completa →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Abrir do {pos}+",
    legendNote: "Triângulo superior direito = suited (s) · diagonal = pocket pairs · triângulo inferior esquerdo = offsuit (o)",
  },
  legend: {
    heading: "Legenda de cores",
    seatLine: "{pct} de 169",
    fold: "Fold",
    foldSub: "Todas as posições",
  },
  table: {
    heading: "Range de abertura por posição",
    swipe: "← Deslize para ver «Range · Mãos de exemplo»",
    position: "Posição",
    hands: "Mãos",
    handsSub: "(de 169)",
    range: "Range",
    rangeSub: "tipos / combos",
    examples: "Mãos de exemplo",
    comboCell: "/ combos {pct}",
    notes: [
      [
        "* ",
        { b: "Existem dois critérios." },
        " «12% de 169» conta ",
        { b: "tipos" },
        " de mão (quantos dos 169 tipos entram no range); o critério de ",
        { b: "combos" },
        " conta quantas das 1.326 combinações entram. O mesmo range dá valores diferentes: AA é 1 tipo mas 6 combos, e AKo é 1 tipo mas 12 combos. Solvers e guias de estratégia costumam usar combos (mais detalhes na ",
        { href: "/pt/blog/holdem-starting-hands-chart", text: "tabela de mãos iniciais" },
        ").",
      ],
      [
        "* São aproximações dos ranges de abertura padrão. Os valores reais de um solver mudam conforme o tamanho da abertura, os stacks e o range do adversário — por exemplo, no caso blind vs blind do ",
        { href: "/pt/solver", text: "solver GTO do HoldemMaster" },
        ", o small blind abre 46,6% com 3bb (92 tipos, 618 combos). Na mesa, ajuste conforme as tendências dos adversários.",
      ],
    ],
  },
  why: {
    heading: "Por que a posição define quais mãos jogar",
    items: [
      {
        title: "Posição = informação",
        desc: "O button (BTN) sempre age por último depois do flop. Ver antes as apostas e os checks de todo mundo faz a mesma mão render muito mais.",
      },
      {
        title: "No UTG há 8 jogadores atrás de você",
        desc: "Abrindo do UTG numa mesa de 9, você não sabe como os 8 jogadores atrás vão reagir. A chance de um re-raise é alta, então mãos especulativas como suited connectors não conseguem render o que valem — feche o range nas mãos premium.",
      },
      {
        title: "O valor de ser suited",
        desc: "Uma mão suited tem cerca de 3–5% a mais de equity do que a mesma mão offsuit. Por isso dá para abrir A8s do hijack, mas com A8o você espera o button.",
      },
      {
        title: "O dilema do small blind",
        desc: "O small blind sempre age primeiro depois do flop. Mesmo abrindo um range mais amplo que o button, ele realiza menos equity, então as mãos médias rendem menos.",
      },
    ],
  },
  faqHeading: "Perguntas frequentes",
  related: {
    heading: "Próximo passo — guias relacionados",
    items: [
      { href: "/pt/blog/holdem-starting-hands-chart", tag: "Guia completo", title: "Tabela de mãos iniciais e as melhores mãos do poker", desc: "Quais mãos abrir de cada assento, e por quê" },
      { href: "/pt/blog/holdem-when-to-fold", tag: "Fold", title: "Quando foldar no poker: a habilidade que mais vence em silêncio", desc: "A disciplina que mais ganha sem fazer barulho" },
      { href: "/pt/blog/holdem-position-play", tag: "Posição", title: "Estratégia de posição: in position vs out of position", desc: "Por que o button é o assento mais lucrativo" },
      { href: "/pt/blog/holdem-hand-rankings", tag: "Ranking", title: "Mãos do poker em ordem — ranking da melhor à pior, com probabilidades", desc: "As 10 mãos, do royal flush à carta alta" },
      { href: "/pt/calculator", tag: "Ferramenta", title: "Calculadora de poker", desc: "Equity exata e pot odds para qualquer mão" },
    ],
  },
};
