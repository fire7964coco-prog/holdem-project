import type { HandChartDict } from "@/components/hand-chart/dict";

// `/ms/hand-chart` 사전 — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
// 키워드 실측(2026-10-05 · DFS google_ads/search_volume · location 2458 Malaysia · language 미지정):
//   poker chart 140 · poker hand chart 110 · poker starting hand chart 20 · preflop chart 20 · preflop range chart 10 ·
//   starting hands chart null · carta tangan permulaan poker null. 뱅크 docs/keyword-bank/ms-strat.md(09-26)와 일치:
//   말레이어 전략 어휘는 전멸, 검색 술어는 영어 토큰. 🔴 poker hand chart SERP는 족보 7 : 프리플랍 2(의도 분열) →
//   제목 머리어 = «Poker Starting Hand Chart»(프리플랍 의도 명시) + 말레이어 본문. 글(holdem-starting-hands-chart)의
//   seoTitle «Fold 80% Tangan? — Poker Hand Chart Preflop & Starting Hands»와 겹치지 않게 «Open Range Ikut Posisi».
// 용어: 포지션명 = lib/posts-ms/holdem-positions.ts 표(영어 이름 그대로) · tangan(핸드) · kombo(274 : kombinasi 43) ·
//   suited/offsuit/pocket pair 영어 · equity 영어(ekuiti 0) · numberLocale = app/ms/calculator/dict.ts(percentGap 없음).

export const HAND_CHART_DICT_MS: HandChartDict = {
  numberLocale: "ms-MY",
  seo: {
    title: "Poker Starting Hand Chart — Open Range Ikut Posisi",
    description:
      "Carta tangan permulaan poker interaktif: semua 169 tangan Hold'em ikut posisi UTG, HJ, CO, BTN dan SB. Ketik posisi untuk lihat tangan yang boleh di-open.",
    path: "/ms/hand-chart",
    keywords: [
      "poker starting hand chart",
      "poker hand chart",
      "preflop chart",
      "preflop range chart",
      "carta tangan permulaan poker",
      "opening range ikut posisi",
    ],
  },
  hero: {
    badge: "♠ Alat interaktif tangan permulaan",
    h1: "Poker Starting Hand Chart",
    lead: "Kesemua 169 tangan diwarnakan ikut posisi (UTG → SB). Ketik satu posisi untuk menyerlahkan hanya tangan yang boleh anda open dari tempat duduk itu.",
    handsUnit: "tangan",
    positionsUnit: "posisi",
    tapHint: "Ketik · hover untuk lihat terus",
  },
  filter: {
    caption: "Pilih posisi → tangan yang boleh dimainkan akan diserlahkan",
    basisNote: [
      "Peratus bagi setiap posisi ialah ",
      { b: "bahagian daripada 169 jenis tangan" },
      " (asas kombo turut ditulis dalam jadual di bawah)",
    ],
    showAll: "Tunjuk semua",
    selected: "Open range {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} tangan",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Leret untuk lihat carta penuh →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Open dari {pos}+",
    legendNote: "Segi tiga kanan atas = suited (s) · pepenjuru = pocket pair · segi tiga kiri bawah = offsuit (o)",
  },
  legend: {
    heading: "Petunjuk warna",
    seatLine: "{pct} daripada 169 jenis",
    fold: "Fold",
    foldSub: "Semua posisi",
  },
  table: {
    heading: "Open range ikut posisi",
    swipe: "← Leret untuk lihat “Range · Contoh tangan”",
    position: "Posisi",
    hands: "Bilangan tangan",
    handsSub: "(daripada 169 jenis)",
    range: "Range",
    rangeSub: "jenis / kombo",
    examples: "Contoh tangan",
    comboCell: "/ kombo {pct}",
    notes: [
      [
        "* ",
        { b: "Ada dua asas pengiraan." },
        " “12% daripada 169 jenis” dikira ikut ",
        { b: "jenis" },
        " tangan (berapa jenis daripada 169), manakala asas ",
        { b: "kombo" },
        " mengira berapa daripada 1,326 kombinasi kad. Range yang sama memberi nilai berbeza — AA ialah 1 jenis tetapi 6 kombo, AKo ialah 1 jenis tetapi 12 kombo. Solver dan artikel strategi biasanya guna asas kombo (lihat ",
        { href: "/ms/blog/holdem-starting-hands-chart", text: "panduan carta tangan permulaan" },
        ").",
      ],
      [
        "* Ini anggaran opening range standard. Nilai sebenar solver berubah ikut saiz open, stack dan range lawan — contohnya, dalam contoh blind battle ",
        { href: "/ms/solver", text: "solver GTO HoldemMaster" },
        ", SB open pada saiz 3bb ialah 46.6% (92 jenis, 618 kombo). Di meja sebenar, laraskan lagi ikut gaya meja dan kedalaman stack.",
      ],
    ],
  },
  why: {
    heading: "Mengapa posisi menentukan pilihan tangan",
    items: [
      {
        title: "Posisi = maklumat",
        desc: "Button (BTN) sentiasa bertindak terakhir selepas flop. Melihat bet dan check semua pemain lebih dahulu menjadikan tangan yang sama jauh lebih menguntungkan.",
      },
      {
        title: "UTG ada 8 pemain di belakang",
        desc: "Bila open-raise dari UTG di meja 9 pemain, anda tidak tahu reaksi 8 pemain di belakang. Peluang kena re-raise tinggi, jadi tangan spekulatif seperti suited connector sukar merealisasikan nilainya — ketatkan kepada tangan premium.",
      },
      {
        title: "Nilai suited",
        desc: "Tangan suited ada kelebihan equity kira-kira 3–5% berbanding tangan offsuit yang sama. Sebab itu A8s boleh di-open dari hijack, tetapi A8o perlu tunggu sehingga button.",
      },
      {
        title: "Dilema SB",
        desc: "Small blind sentiasa bertindak pertama selepas flop. Walaupun range-nya lebih luas daripada button, equity yang dapat direalisasikan lebih sedikit, jadi tangan sederhana kurang menguntungkan.",
      },
    ],
  },
  faqHeading: "Soalan lazim",
  related: {
    heading: "Langkah seterusnya — panduan berkaitan",
    items: [
      { href: "/ms/blog/holdem-starting-hands-chart", tag: "Panduan mendalam", title: "Carta Tangan Permulaan Poker & Tangan Terbaik", desc: "Tangan mana patut di-open dari setiap posisi, dan mengapa" },
      { href: "/ms/blog/holdem-position-play", tag: "Posisi", title: "Strategi Posisi: In Position vs Out of Position", desc: "Mengapa button tempat duduk paling menguntungkan" },
      { href: "/ms/blog/holdem-when-to-fold", tag: "Fold", title: "Bila Patut Fold dalam Poker", desc: "Disiplin yang diam-diam paling banyak menang" },
      { href: "/ms/blog/holdem-hand-rankings", tag: "Susunan kad", title: "Susunan Kad Poker dalam Texas Hold'em", desc: "Kesemua 10 tangan dari royal flush hingga high card" },
      { href: "/ms/calculator", tag: "Alat", title: "Kalkulator Poker", desc: "Equity dan pot odds tepat untuk mana-mana tangan" },
    ],
  },
};
