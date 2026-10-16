"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 말레이어(ms-MY)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 네 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt·fr·id).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 🔴 id판에서 옮겨 쓰지 않았다 — 인니어 잔재(kartu·bisa·karena·hitung·tinjau·gratis…)가 생긴다(뱅크 ms-posting-reference §3).
 * 문체 = 문중 소문자 «anda», 문두·제목만 «Anda»(뱅크 §2 · 인니어 «항상 Anda»와 일부러 다르다).
 * 용어 출처: docs/keyword-bank/ms-posting-reference.md → app/ms/calculator/dict.ts(족보 영어 «High Card … Straight Flush» ·
 *   «Tangan anda» · «Seri» · «Set semula» · «mata peratusan») → lib/posts-ms 코퍼스 빈도(10-13 grep):
 *   tangan 1.796(hand 92) · kad · fold 797 · call 1.006 · all-in 280 · showdown 149 · seri 146 · split pot 24 ·
 *   preflop 240(pre-flop 28) · flush draw 101 · straight draw 37 · top pair 81 · overpair 97 · overcard 26 ·
 *   pot odds 113 · implied odds 88 · pulang modal 29(break-even 3) · street 133 · kombinasi 38(combo 15) ·
 *   board 893(papan 4) · range 674(julat 42) · posisi 335 · ketik 126 · semak 239 · kongsi 64 · akaun 19 · peranti 15.
 * 숫자 = ms-MY(소수점 «.» · 천단위 «,» · % 앞 공백 없음) — 계산기 dict numberLocale과 같다. 공용 UI의 toFixed 점과도 일치해 dec 변환 없음.
 * 솔버 메뉴명 «Kajian flop» = 솔버 앱 flop-study-labels.ts ms.title 축어.
 * 헤드텀 실측(DFS Malaysia · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §ms.
 */

const n = (x: number) => x.toLocaleString("ms-MY");

const MS_NAMES: HandNames = {
  categories: ["High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Straight draw",
};

const MS_UI: QuizUI = {
  names: MS_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "Anda",
  folded: "Fold",
  raise: "Raise",
  call: "Call",
  bet: "Bet",
  check: "Check",
  allIn: "All-in",
  tableNote: "Meja 6-max atau 9 pemain · pilih berapa pemain yang melihat flop (2–6)",
  playersBtn: (k) => `${k} pemain`,
  playersLabel: "Pemain",
  tableBtn: (k) => `${k}-max`,
  styleLabel: "Gaya lawan",
  styleHint: "Gaya lawan — hanya mengubah peraturan aksi mulai flop; range preflop kekal sama",
  styleNames: { standard: "Biasa", tight: "Tight", loose: "Loose", aggressive: "Agresif" },
  loading: "Mengocok kad dan mengira…",

  myEquity: "Equity anda",
  vsOpponents: (k) => (k === 0 ? "tiada lawan yang tinggal" : `menentang ${k} lawan`),
  basisSeat: "menentang range mengikut posisi",
  basisRange: "menentang tangan yang sepadan dengan aksi mereka",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "Menang",
  tieShort: "Seri",
  loseShort: "Kalah",
  revealedLabel: "👀 Menentang tangan yang didedahkan",
  revealedNote: (gap) =>
    `Angka di atas menganggap anda tidak dapat melihat kad mereka — sebab itu ada beza ${gap} mata peratusan. Angka di ataslah yang sebenarnya anda gunakan untuk membuat keputusan.`,

  potOddsTitle: "Pot odds — equity yang diperlukan supaya call pulang modal",
  potLabel: "Pot",
  potBeforeLabel: "Pot (sebelum bet)",
  toCallLabel: "Untuk call",
  requiredLabel: "Equity yang diperlukan",
  noBet: "Tiada siapa yang bet. Anda melihat kad seterusnya secara percuma.",
  noBetAllIn: (river) =>
    river
      ? "Semua pemain yang masih dalam tangan ini sudah all-in, jadi tiada lagi cip yang boleh di-bet. Tangan terus ke showdown."
      : "Semua pemain yang masih dalam tangan ini sudah all-in, jadi tiada lagi cip yang boleh di-bet. Kad yang tinggal diagihkan, kemudian tangan ke showdown.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "Walaupun begitu, jika anda boleh menang lebih banyak apabila tangan anda menjadi (implied odds), call masih boleh menjadi pilihan yang betul.",

  revealBtn: (next) => `Buka ${next} →`,
  newHandBtn: "Tangan baru 🔄",
  showCards: "👀 Lihat kad mereka",
  hideCards: "🙈 Sembunyikan kad mereka",

  wonByFold: (pot) => `Semua lawan fold — anda memenangi pot ${n(pot)}`,
  splitLabel: (names) => `Split pot — seri antara ${names.length > 1 ? names.slice(0, -1).join(", ") + " dan " + names[names.length - 1] : names[0]}`,
  winLabel: (name, cat) => `${name} menang · ${cat}`,
  winLabelHero: (cat) => `Anda menang · ${cat}`,

  reviewTitle: "📋 Semakan — bilakah anda sepatutnya fold?",
  reviewCols: ["Street", "Equity anda", "Diperlukan", "Keputusan"],
  reviewNoMistake: "✅ Call ialah pilihan yang betul hingga ke akhir.",
  reviewMistake: (street) => `⚠️ Mulai ${street.toLowerCase()}, fold sudah menjadi pilihan yang betul. Itulah masa yang tepat untuk keluar daripada tangan ini.`,
  reviewInvested: (invested, pot) => `Anda memasukkan ${n(invested)} · pot akhir ${n(pot)}`,

  formulaTitle: "📐 Dari mana angka ini datang",
  outsLabel: (k) => `${k} kad melengkapkan atau memperbaik tangan anda`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} untuk flush` : "",
      o.straight > 0 ? `${o.straight} untuk straight` : "",
      o.set > 0 ? `${o.set} untuk set atau trips` : "",
      o.twoPair > 0 ? `${o.twoPair} untuk two pair` : "",
      o.over > 0 ? `${o.over} untuk mendapat pair pada overcard anda` : "",
      both > 0 ? `${both} masuk dua kategori sekali gus (dikira sekali sahaja)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Peluang salah satu kad itu keluar (kiraan cepat di meja · peraturan 2 dan 4)",
  winLabel2: "Equity anda dalam pot (simulasi · seri dikira sebagai bahagian anda daripada split pot)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Dua angka ini mengukur perkara yang berbeza. Yang atas ialah peluang anda KENA; yang bawah ialah bahagian pot yang anda dapat daripada MENANG (seri dikira sebagai bahagian split anda). Anda boleh kena tetapi tetap kalah jika tangan lawan menjadi lebih kuat lagi, dan boleh terlepas tetapi tetap menang. Keputusan menggunakan angka yang bawah.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Ini masih preflop, jadi jalan pintas «outs × 2/4» belum terpakai. Equity di atas datang daripada ${k} simulasi tangan menentang tangan yang munasabah untuk dimainkan oleh setiap lawan dari posisinya.`
      : `Anda tidak mempunyai outs yang dikira oleh alat ini — tiada kad yang melengkapkan flush atau straight, atau menaikkan tangan anda satu kategori (set, two pair, atau pair pada overcard anda) — jadi jalan pintas «outs × 2/4» tidak terpakai di sini. Equity di atas datang daripada ${k} simulasi tangan menentang semua tangan yang sepadan dengan aksi yang anda lihat.`,
  foldWinNote: "Semua lawan fold, jadi pot ini milik anda. Angka 100% di atas bukan hasil simulasi — itu hasil tangan ini.",
  riverNote: "Ini river, tiada lagi kad yang akan keluar, jadi jalan pintas «outs × 2/4» tidak terpakai. Equity di atas membandingkan tangan akhir anda dengan semua tangan yang sepadan dengan aksi yang anda lihat.",
  chartTitle: "📈 Equity street demi street — semua kad terbuka",
  resultTabs: ["📋 Semakan", "📈 Graf", "🃏 Kiraan"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Lihat spot ini dalam solver GTO" : info.kind === "notReady" ? "Lihat spot yang serupa dalam solver GTO" : "Lihat spot heads-up dalam solver GTO",
  solverOpen: "Buka «Kajian flop» dalam solver",
  solverNote: (info) => {
    const gto = "Solver menunjukkan strategi flop apabila kedua-dua pemain bermain GTO (keputusan yang dikira terlebih dahulu · 6-max 100bb · flop sahaja), jadi range, saiz bet dan peraturan lawannya tidak sama dengan simulator ini.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call (single-raised pot dalam solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — pautan ini membuka posisi dan flop yang sama dalam «Kajian flop» solver. ${gto}`
          : `${info.opener} open · ${info.caller} call — tangan ini tamat sebelum flop, jadi yang dibuka hanya pertembungan posisinya. Pilih sendiri tiga kad flop dalam solver. ${gto}`;
      case "notReady":
        return `Pertembungan «${info.opener} open · ${info.caller} call» belum dikira terlebih dahulu dalam «Kajian flop» solver. Pilih pertembungan posisi yang serupa, atau kira sendiri dalam solver.`;
      case "multiway":
        return `${info.players} pemain melihat flop ini. Keputusan yang dikira awal dalam solver hanya merangkumi pot heads-up, jadi tangan ini tidak boleh dibuka begitu sahaja — pilih pertembungan menentang satu lawan dalam «Kajian flop».`;
      case "table9":
        return "Keputusan yang dikira awal dalam solver dibuat untuk meja 6-max, jadi tangan dari meja 9 pemain tidak boleh dibuka begitu sahaja — pilih pertembungan posisi yang paling hampir dalam «Kajian flop».";
    }
  },
  solverLang: "ms",
  fmtNum: n,
  chartRangeLegend: "Yang anda lihat",
  chartNote: "Garis penuh menunjukkan equity setiap kerusi apabila semua tangan terbuka; garis putus-putus ialah equity yang anda lihat di skrin tanpa mengetahui kad mereka. Garis pemain yang fold berhenti pada street sebelum pemain itu fold.",
  quizToggle: "🎯 Kuiz",
  quizGuessTitle: "Berapakah equity anda?",
  quizGuessHint: "Gerakkan gelangsar untuk meneka",
  quizSubmit: "Semak jawapan",
  quizCallSubmit: "Call → semak",
  quizFoldSubmit: "Fold → semak",
  quizResult: (guess, err, points) => `Tekaan anda ${guess}% · tersasar ${err} mata peratusan · ${points} markah`,
  quizChoiceResult: (ok, verdict) => (ok ? `Keputusan tepat (${verdict})` : `Kurang tepat — jawapan yang betul: ${verdict}`),
  quizNotCounted: "Tidak dikira dalam rekod kuiz anda — anda sudah melihat equity atau kad lawan",
  quizStats: (s) => `${s.hands} tangan · purata tersasar ${s.avgErr} mata peratusan · ${s.hits}/${s.decisions} keputusan tepat · ${n(s.points)} markah`,
  quizReset: "Set semula",
  quizResetConfirm: "Padam rekod kuiz yang disimpan dalam pelayar ini? Tindakan ini tidak boleh dibatalkan.",
  quizInvite: "Log masuk untuk menyimpan rekod ini dalam akaun anda dan melihatnya dari mana-mana telefon atau PC.",
  quizInviteLink: "Log masuk",
  quizGuessCol: "Tekaan",
  quizChoiceCol: "Pilihan",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Tangan ini: purata tersasar ${avgErr} mata peratusan${decisions > 0 ? ` · ${hits}/${decisions} keputusan tepat` : ""} · ${points} markah`,
  quizGuessLegend: "Tekaan anda",
  customToggle: "✍️ Bina tangan",
  customTitle: "Bina tangan — main semula tangan yang pernah anda mainkan",
  customHint: "Ketik satu petak, kemudian pilih kad di bawahnya. Petak yang kosong diisi secara rawak, dan lawan sentiasa mendapat tangan daripada range posisinya.",
  customPos: "Posisi anda",
  customRandom: "Rawak",
  customHero: "Tangan anda",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Agihkan tangan ini →",
  customClear: "Kosongkan semua",
  customClose: "Tutup",
  customOff: "Kembali ke tangan rawak",
  customActive: "Tangan yang anda bina · tangan seterusnya tetap menggunakan kad ini",
  customEdit: "Ubah",
  shareBtn: "Salin pautan tangan ini",
  shareCopied: "Sudah disalin. Sesiapa yang membuka pautan ini memainkan tangan ini dari preflop dengan kad dan equity yang sama.",
  shareManual: "Penyalinan automatik disekat. Salin alamat di bawah.",
  sharedActive: "Tangan yang dikongsi · kad dan equity sama dengan milik pengirim (tidak dikira dalam rekod kuiz anda)",
  sharedInvalid: "Pautan yang dikongsi tidak dapat dibaca, jadi ini tangan rawak baru (mungkin pautannya terpotong atau telah diubah)",
  rangeToggle: "Lihat range lawan",
  rangeTitle: "Range lawan — tangan yang sepadan dengan aksinya setakat ini",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} kombinasi → kini ${cur} kombinasi (tinggal ${pct}%)`,
  rangeLegend: ["Masih dalam range (lebih gelap = lebih banyak yang tinggal)", "Tersingkir kerana aksinya", "Tidak pernah dalam range", "Tangan sebenar", "Disekat oleh tangan anda atau board"],
  rangeNote: "Bermula daripada range preflop posisinya, kemudian, street demi street, membuang setiap tangan yang akan mengambil aksi berbeza menurut peraturan lawan. Equity di atas menggunakan range yang sama. Kombinasi yang menggunakan kad dalam tangan anda atau di board tidak dikira.",
  quizKinds: ["Teka equity + buat keputusan", "Buat keputusan sahaja (call atau fold?)"],
  decideTitle: "Call atau fold?",
  decideHint: "Pilih call atau fold tanpa melihat kad mereka. Walaupun anda fold, tangan tetap berjalan hingga ke akhir. Mod ini tidak dikira dalam rekod kuiz anda.",
  decideSummary: (hits, decisions) => `Tangan ini: ${hits}/${decisions} keputusan tepat mengikut pot odds`,
  actualCol: "Kad diketahui",
  actualSummary: (hits, decisions) => `Keputusan tepat seandainya anda tahu kad mereka: ${hits}/${decisions} — sekadar gambaran. Di meja, ukurannya tetap pot odds tanpa melihat kad mereka.`,

  ruleTitle: "Andaian simulator ini",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Lawan hanya mengikut peraturan di bawah, tidak lebih.</b> Tiada pemain sebenar
        yang bermain begini — posisi, lawan, kedalaman stack dan imej di meja mengubah segala-galanya. Anggaplah ia seperti
        «geseran diabaikan» dalam soalan fizik.
      </p>
      <p className="mb-1">
        Gaya lawan sekarang: <b className="text-foreground">{MS_UI.styleNames[style]}</b> (seluruh meja menggunakan gaya yang sama · tukar melalui pilihan di atas)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Two pair atau lebih baik → <b className="text-foreground">{style === "aggressive" ? "raise 150% pot (overbet)" : "raise sebesar pot"}</b></li>
        {style === "standard" && <li>One pair, atau flush/straight draw → <b className="text-foreground">bet separuh pot</b></li>}
        {style === "tight" && <>
          <li>One pair yang merupakan top pair atau lebih baik yang dibuat dengan kad di tangan (termasuk overpair), atau flush/straight draw → <b className="text-foreground">bet separuh pot</b></li>
          <li>Pair yang lebih lemah (termasuk pair yang hanya ada di board) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>One pair, flush/straight draw, atau kad di tangan yang lebih tinggi daripada semua kad board (overcard) → <b className="text-foreground">bet separuh pot</b></li>}
        {style === "aggressive" && <>
          <li>Flush/straight draw → <b className="text-foreground">raise (semi-bluff)</b></li>
          <li>One pair → <b className="text-foreground">bet separuh pot</b></li>
          <li>Tiada pair dan tiada draw, tetapi ada overcard → <b className="text-foreground">raise (bluff)</b></li>
        </>}
        <li>Selain itu → <b className="text-foreground">fold</b> (kad dibuang tanpa didedahkan, seperti dalam permainan live)</li>
      </ul>
      <p className="mb-2">
        Peraturan dibaca dari atas ke bawah: baris pertama yang sepadan menentukan aksinya. Draw bermaksud empat kad ke arah flush atau straight pada flop atau turn, dengan sekurang-kurangnya satu kad dari tangan (di river tiada draw).{" "}
        {style === "aggressive" && "Semua raise gaya Agresif, termasuk semi-bluff dan bluff, bersaiz 150% pot. "}
        Apabila ada yang raise, semua pemain yang masih dalam tangan ini call raise tersebut, dan bet yang lebih besar daripada baki stack
        dikurangkan kepada baki stack itu: pemainnya all-in. Sebaik sahaja ada pemain all-in, tiada lagi yang fold — baki board diagihkan dan tangan ke showdown. Tiada check-raise — setiap lawan beraksi sekali bagi setiap street mengikut peraturan, tanpa check dahulu lalu bertindak balas semula. Label tempat duduk meringkaskan setiap street: tempat duduk yang menetapkan jumlah dipaparkan “Bet”, dan semua pemain lain yang masih dalam tangan dipaparkan “Call”, tidak kira kedudukan mereka dalam giliran. Di sini anda tidak pernah bet; anda hanya call hingga ke river.
        Range preflop (di bawah) sama untuk semua gaya.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Equity anda dikira seolah-olah anda tidak dapat melihat kad mereka.</b> Mulai
        flop, range setiap lawan ialah tangan daripada range preflop posisinya (di bawah) yang akan mengambil aksi yang
        anda lihat menurut peraturan gaya yang dipilih — menentang lawan gaya Biasa, raise hanya meninggalkan two pair
        atau lebih baik; menentang lawan gaya Agresif, draw dan bluff dengan overcard juga kekal. Pemain yang fold di skrin
        juga dikeluarkan daripada kiraan.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Tangan preflop lawan diambil daripada range mengikut posisi.</b> Antara
        pemain dalam pot, yang bertindak dahulu pada preflop dianggap sebagai yang open, dan semua yang lain dianggap
        defend terhadap open itu dengan call atau 3-bet (range open · range defend). Range-nya ialah range
        konsensus cash game 6-max 100bb yang disemak silang dengan beberapa sumber awam, dengan tangan di sempadan range dicampur pada
        25/50/75%. Jika tiada jadualnya (HJ menentang open UTG · SB menentang open UTG, HJ atau CO), serta bagi pemain
        ketiga dan seterusnya, jadual defend yang paling hampir digunakan. Tiada jadual untuk meja 9 pemain: di meja 9 pemain,
        UTG, UTG+1, UTG+2 dan LJ menggunakan jadual UTG 6-max, dan setiap kerusi lain menggunakan jadual 6-max
        dengan nama yang sama (posisi awal yang defend terhadap open dari posisi awal lain, atau HJ yang defend terhadap open dari posisi awal, menggunakan jadual CO menentang UTG) — jadi tiga kerusi pertama di meja 9 pemain mempunyai range yang lebih luas daripada kenyataannya. Hanya tangan anda yang rawak (kecuali anda membinanya sendiri) — alat ini membenarkan anda
        memainkan mana-mana tangan permulaan hingga ke river. Di sini 3-bet tidak mengubah saiz pot (dipermudahkan).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Keputusan hanya berdasarkan pot odds.</b> Implied odds tidak dikira, dan
        kecenderungan serta bluff lawan hanya masuk ke dalam range setakat peraturan gaya yang dipilih. Draw khususnya sering berbaloi di-call walaupun pot odds sahaja
        sedikit kurang.
      </p>
      <p>
        Semua pemain membayar ante {ANTE} dan bermula dengan stack {n(STACK)}. Anda tidak pernah fold — memang itulah tujuannya:
        anda melihat river kemudian menyemak semula tangan itu. Equity ialah anggaran hasil simulasi dengan bilangan sampel tetap:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} simulasi</b> pada preflop dan{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulasi</b> mulai flop (ralat piawai kira-kira 0.25–0.35 mata peratusan).
        Setiap tangan menggunakan seed rawak yang tetap, jadi tangan yang sama menunjukkan angka yang sama pada mana-mana peranti. Jika seri, pot
        dibahagi sama rata antara pemain yang seri (separuh seorang jika berdua).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Apabila anda membuka kad mereka</b>, setiap kerusi mendapat equity-nya dengan semua tangan diketahui. Mulai
        flop, equity dikira dengan tepat daripada semua kemungkinan kad yang tinggal (hanya preflop yang menggunakan {n(SAMPLES.known)} simulasi),
        dan angka itu tidak pernah masuk ke dalam equity mahupun keputusan call/fold yang dipaparkan — di meja sebenar anda tidak akan
        mempunyai maklumat itu.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Apabila Kuiz dihidupkan</b>, equity dan keputusan disembunyikan sehingga anda menjawab. Dalam
        «Teka equity + buat keputusan», anda meneka equity pada setiap street, dan pada street yang ada bet anda juga memilih call
        atau fold. Dalam «Buat keputusan sahaja (call atau fold?)» tiada tekaan: anda hanya memilih call atau fold pada street yang
        ada bet, dan mod ini tidak dikira dalam rekod kuiz anda. Jawapannya ialah «Equity anda» di atas (angka
        tanpa melihat kad mereka), dan setiap tekaan mendapat <b className="text-foreground">100 − 4 × beza (dalam mata peratusan)</b>
        {" "}markah, dibundarkan kepada nombor bulat dan tidak pernah kurang daripada sifar (sifar apabila bezanya mencapai 25 mata peratusan atau lebih). Pilihan call/fold dikira tepat jika sama dengan keputusan pot odds. Jumlah
        anda disimpan dalam pelayar ini dan, jika anda log masuk, juga disimpan dalam akaun anda supaya
        boleh dibuka dari peranti lain (kad dan board tidak disimpan).
      </p>
      <p className="mt-2">
        Dengan <b className="text-foreground">✍️ Bina tangan</b>, anda boleh memilih posisi, kad dan board untuk memainkan semula
        tangan yang benar-benar pernah anda mainkan. Petak yang kosong diisi secara rawak. Kad lawan tidak boleh anda pilih — di
        meja sebenar anda juga tidak akan tahu — jadi kad itu sentiasa diambil daripada range mengikut posisi, dan equity yang dipaparkan
        tetap menggunakan andaian «kad tidak diketahui» yang sama. Walaupun board sudah ditetapkan dari awal, equity setiap street hanya menggunakan
        kad yang sudah diagihkan hingga street itu. Oleh sebab memainkan semula tangan yang sama boleh membuat anda menghafal jawapannya, tangan yang dibina sendiri
        tidak dikira dalam rekod kuiz anda.
      </p>
    </>
  ),
  footer: (
    <>
      Mahu lihat kiraannya?{" "}
      <a href="/ms/blog/holdem-pot-odds" className="text-primary underline">Cara mengira pot odds →</a>
      {" · "}
      <a href="/ms/blog/holdem-position-play" className="text-primary underline">Mengapa posisi penting</a>
      {" · "}
      <a href="/ms/calculator" className="text-primary underline">Kalkulator Poker</a>
    </>
  ),
};

export default function WinRateQuizClientMs() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Simulator Poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Bermain tanpa melihat kad lawan — kemudian semak bila anda sepatutnya fold</p>
      </div>
      <WinRateSimulator ui={MS_UI} />
    </div>
  );
}
