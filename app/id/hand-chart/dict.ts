// `/id/hand-chart` 사전 — 공용 차트(`components/hand-chart/hand-chart-tool.tsx`)의 인니어 문자열.
// ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md). EN 정본 = HAND_CHART_DICT_EN,
//   뜻 정본(타입 vs 콤보 기준 표기·각주) = ko `app/hand-chart/hand-chart-client.tsx`.
// 🔴 차트 값은 공개 자료 합의 레인지 — «GTO 차트/솔버가 계산한» 금지(EN의 «GTO»는 상속 문구라 따르지 않는다).
//
// 헤드텀 근거(DataForSEO google_ads search_volume · Indonesia 2360 / id · 2026-10-05 실측 · 연평균):
//   poker hand chart 40 · range poker 20 · poker starting hand chart 10 · starting hand poker 10 · preflop chart 10 ·
//   poker range chart 10 · chart starting hands poker / kartu awal poker = 데이터 없음(null).
//   → 축 전체가 작다(id-core-volumes.md §전략 «id 전략 질문축은 검색으로 실재하지 않는다»와 정합). 최대값 «poker hand chart»를
//   title 머리에, 코퍼스 앵커 «chart starting hand»는 H1로. 글 seoTitle(«Fold 80% Kartu Anda? — Chart Starting Hands Poker Terbaik»)과 다른 제목.
// 용어: docs/translation-terms-id.md(포지션 영어 그대로) · id 코퍼스 «Hijack (HJ)»·«Button (BTN)»·«Small Blind (SB)» ·
//   combo(343 : kombo 3) · range(215 : rentang 8) · suited/offsuit/pocket pair(app/id/calculator/dict.ts) ·
//   숫자 = id-ID(소수 쉼표 · % 앞 공백 없음 — calculator dict와 같음 · percentGap 없음).
import type { HandChartDict } from "@/components/hand-chart/dict";

export const HAND_CHART_DICT_ID: HandChartDict = {
  numberLocale: "id-ID",
  seo: {
    title: "Poker Hand Chart Preflop — Open Range per Posisi",
    description:
      "Chart starting hand poker interaktif: 169 hand diberi warna per posisi — UTG, HJ, CO, Button, SB. Ketuk satu posisi untuk melihat hand yang layak di-open.",
    path: "/id/hand-chart",
    keywords: [
      "poker hand chart",
      "chart starting hand poker",
      "poker starting hand chart",
      "range poker",
      "preflop chart",
      "open range per posisi",
    ],
  },
  hero: {
    badge: "♠ Alat starting hand interaktif",
    h1: "Chart Starting Hand Poker per Posisi",
    lead: "Ke-169 hand diberi warna menurut posisi (UTG → SB). Ketuk satu posisi untuk menyorot hanya hand yang bisa Anda open dari kursi itu.",
    handsUnit: "hand",
    positionsUnit: "posisi",
    tapHint: "Ketuk · arahkan kursor untuk lihat langsung",
  },
  filter: {
    caption: "Pilih posisi → hand yang bisa dimainkan tersorot",
    basisNote: [
      "Angka % pada setiap posisi dihitung ",
      { b: "dari 169 jenis hand" },
      " (basis combo ikut dicantumkan di tabel bawah)",
    ],
    showAll: "Tampilkan semua",
    selected: "Open range {pos} · {count} / 169 ({pct}%)",
    handsCount: "{n} hand",
  },
  positions: ["Under the Gun (UTG)", "Hijack (HJ)", "Cutoff (CO)", "Button (BTN)", "Small Blind (SB)"],
  typePct: "~{n}",
  grid: {
    swipe: "← Geser untuk melihat chart lengkap →",
    pocketPair: "Pocket pair",
    suited: "Suited",
    offsuit: "Offsuit",
    openFrom: "Open dari {pos}+",
    legendNote: "Segitiga kanan atas = suited (s) · diagonal = pocket pair · segitiga kiri bawah = offsuit (o)",
  },
  legend: {
    heading: "Arti warna",
    seatLine: "{pct} dari 169 jenis",
    fold: "Fold",
    foldSub: "Semua posisi",
  },
  table: {
    heading: "Open range per posisi",
    swipe: "← Geser untuk melihat «Range · Contoh hand»",
    position: "Posisi",
    hands: "Jumlah hand",
    handsSub: "(dari 169 jenis)",
    range: "Range",
    rangeSub: "jenis / combo",
    examples: "Contoh hand",
    comboCell: "/ combo {pct}",
    notes: [
      [
        "* ",
        { b: "Ada dua basis hitungan." },
        " «12% dari 169 jenis» memakai basis ",
        { b: "jenis" },
        " hand (berapa jenis dari 169), sedangkan basis ",
        { b: "combo" },
        " menghitung berapa kombinasi dari total 1.326. Range yang sama memberi angka berbeda — AA hanya 1 jenis tetapi 6 combo, AKo 1 jenis tetapi 12 combo. Solver dan artikel strategi biasanya memakai basis combo (lihat ",
        { href: "/id/blog/holdem-starting-hands-chart", text: "panduan chart starting hands" },
        ").",
      ],
      [
        "* Ini perkiraan open range standar. Angka hitungan solver yang sebenarnya berubah menurut ukuran open, stack, dan range lawan — misalnya, pada contoh pertarungan blind di ",
        { href: "/id/solver", text: "Solver GTO HoldemMaster" },
        ", open SB adalah 46,6% dengan basis 3bb (92 jenis, 618 combo). Di meja sungguhan, sesuaikan juga dengan kecenderungan meja dan kedalaman stack.",
      ],
    ],
  },
  why: {
    heading: "Kenapa posisi menentukan pilihan hand",
    items: [
      {
        title: "Posisi = informasi",
        desc: "Button (BTN) selalu bertindak paling akhir setelah flop. Karena Anda melihat bet dan check semua pemain lebih dulu, hand yang sama jauh lebih menguntungkan.",
      },
      {
        title: "Di belakang UTG ada 8 pemain",
        desc: "Saat open-raise dari UTG di meja 9 pemain, Anda tidak tahu bagaimana 8 pemain di belakang akan bereaksi. Peluang kena re-raise tinggi, jadi hand spekulatif seperti suited connector sulit merealisasikan nilainya — persempit ke hand premium.",
      },
      {
        title: "Nilai suited",
        desc: "Hand suited punya keunggulan equity sekitar 3–5% dibanding hand offsuit yang sama. Itu sebabnya A8s bisa di-open dari hijack, sedangkan A8o menunggu sampai button.",
      },
      {
        title: "Dilema SB",
        desc: "Small blind selalu bertindak pertama setelah flop. Meski range-nya lebih lebar dari button, equity yang terealisasi lebih sedikit, sehingga hand berkekuatan menengah jadi kurang menguntungkan.",
      },
    ],
  },
  faqHeading: "Pertanyaan yang sering diajukan",
  related: {
    heading: "Langkah berikutnya — panduan terkait",
    items: [
      { href: "/id/blog/holdem-starting-hands-chart", tag: "Panduan lengkap", title: "Chart Starting Hands Poker & Kartu Awal Terbaik", desc: "Hand mana yang di-open dari tiap kursi, dan alasannya" },
      { href: "/id/blog/holdem-when-to-fold", tag: "Fold", title: "Kapan Harus Fold di Poker: Skill yang Diam-diam Paling Banyak Menang", desc: "Disiplin yang diam-diam paling banyak menang" },
      { href: "/id/blog/holdem-position-play", tag: "Posisi", title: "Strategi Posisi: In vs Out of Position", desc: "Kenapa button adalah kursi paling menguntungkan" },
      { href: "/id/blog/holdem-hand-rankings", tag: "Urutan kartu", title: "Urutan kartu poker dari tertinggi sampai terendah", desc: "10 kombinasi dari royal flush sampai high card" },
      { href: "/id/calculator", tag: "Alat", title: "Kalkulator Poker", desc: "Equity dan pot odds yang tepat untuk hand apa pun" },
    ],
  },
};
