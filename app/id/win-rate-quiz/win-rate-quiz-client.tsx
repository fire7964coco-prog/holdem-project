"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import type { HandNames } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 인도네시아어(id-ID)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 세 번째 언어).
 *
 * 정본 = `app/en/win-rate-quiz/win-rate-quiz-client.tsx` — 구조·분기·숫자 그대로, 문자열만 재저작(형제 = pt·fr).
 * 테이블 UI·엔진은 전 언어 공용(`_simulator.tsx`·`_engine`) — 숫자는 전 언어 동일(§13).
 * 독자 = 인도네시아(Anda체 — 코퍼스 Anda 3.962 : kamu 2 · 계산기 사전과 같은 register).
 * 용어 출처: docs/keyword-bank/id-posting-reference.md §5·§5-A(정본) → app/id/calculator/dict.ts(족보 영어 «High Card … Straight Flush» ·
 *   «pot odds» · «equity» · «seri» · «break-even») → lib/posts-id 코퍼스 빈도(10-13 grep):
 *   fold 905 · call 1.075 · all-in 327 · showdown 177 · seri 508(imbang 80) · split pot 35 · chop 53 · preflop 340(pre-flop 2) ·
 *   flush draw 132 · straight draw 45 · top pair 112 · overpair 120 · overcard 32 · pot odds 170 · implied odds 115 ·
 *   street 167 · combo 343(kombinasi 71) · board 380(papan 7) · check(액션) 146.
 *   🔴 id 고유 리스크 = 도박 홍보로 읽히는 서술(translation-terms-id ★2) — «taruhan/judi»로 도구를 설명하지 않는다.
 * 숫자 = 인니식(`fmtNum` id-ID «1.000» · 산문 소수 쉼표 «0,25» · 🔴 «%» 앞 공백 없음 — 뱅크 §5-A C «35,4%»).
 *   ⚠ 공용 UI의 % 소수(toFixed)는 전 언어 점(de·pt·fr와 같음 · 공용 회차 몫). 오차·격차 문자열만 `dec`로 쉼표.
 * 솔버 메뉴명 «Studi flop» = 솔버 앱 flop-study-labels.ts id.title 축어.
 * 헤드텀 실측(DFS Indonesia · 2026-10-13) → page.tsx 머리 주석 · docs/keyword-bank/win-rate-quiz-ltr.md §id.
 */

const n = (x: number) => x.toLocaleString("id-ID");
/** 공용 UI가 toFixed(1)로 넘기는 오차·격차(«3.5»)를 인니식 소수 쉼표로(fr 선례). «—»는 그대로. */
const dec = (x: string) => x.replace(".", ",");

const ID_NAMES: HandNames = {
  categories: ["High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush"],
  drawingDead: "Drawing dead",
  flushDraw: "Flush draw",
  straightDraw: "Straight draw",
};

const ID_UI: QuizUI = {
  names: ID_NAMES,
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
  styleHint: "Gaya lawan — hanya mengubah aturan aksi mulai flop; range preflop tetap sama",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Agresif" },
  loading: "Mengocok kartu dan menghitung…",

  myEquity: "Equity Anda",
  vsOpponents: (k) => (k === 0 ? "tidak ada lawan tersisa" : `melawan ${k} lawan`),
  basisSeat: "melawan range per posisi",
  basisRange: "melawan hand yang cocok dengan aksi mereka",
  roleOpen: "Open",
  roleDefend: "Defend",
  winShort: "Menang",
  tieShort: "Seri",
  loseShort: "Kalah",
  revealedLabel: "👀 Melawan hand yang dibuka",
  revealedNote: (gap) =>
    `Angka di atas menganggap Anda tidak bisa melihat kartu mereka — karena itu ada selisih ${dec(gap)} poin persentase. Angka di ataslah yang benar-benar Anda pakai untuk memutuskan.`,

  potOddsTitle: "Pot odds — equity yang dibutuhkan agar call tidak rugi dalam jangka panjang (break-even)",
  potLabel: "Pot",
  potBeforeLabel: "Pot (sebelum bet)",
  toCallLabel: "Untuk call",
  requiredLabel: "Equity yang dibutuhkan",
  noBet: "Tidak ada yang bet. Anda melihat kartu berikutnya gratis.",
  noBetAllIn: (river) =>
    river
      ? "Semua pemain yang masih di hand ini sudah all-in, jadi tidak ada lagi chip yang bisa di-bet. Hand langsung masuk ke showdown."
      : "Semua pemain yang masih di hand ini sudah all-in, jadi tidak ada lagi chip yang bisa di-bet. Kartu yang tersisa dibagikan, lalu hand masuk ke showdown.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "Meski begitu, kalau Anda bisa menang lebih banyak saat kartu Anda jadi (implied odds), call masih bisa jadi pilihan yang benar.",

  revealBtn: (next) => `Buka ${next} →`,
  newHandBtn: "Hand baru 🔄",
  showCards: "👀 Lihat kartu mereka",
  hideCards: "🙈 Sembunyikan kartu mereka",

  wonByFold: (pot) => `Semua lawan fold — Anda memenangkan pot ${n(pot)}`,
  splitLabel: (names) => `Split pot — seri antara ${names.length > 1 ? names.slice(0, -1).join(", ") + " dan " + names[names.length - 1] : names[0]}`,
  winLabel: (name, cat) => `${name} menang · ${cat}`,
  winLabelHero: (cat) => `Anda menang · ${cat}`,

  reviewTitle: "📋 Tinjauan — kapan seharusnya Anda fold?",
  reviewCols: ["Street", "Equity Anda", "Dibutuhkan", "Keputusan"],
  reviewNoMistake: "✅ Call adalah pilihan yang benar sampai akhir.",
  reviewMistake: (street) => `⚠️ Mulai di ${street.toLowerCase()}, fold sudah menjadi pilihan yang benar. Itulah saat yang tepat untuk keluar dari hand ini.`,
  reviewInvested: (invested, pot) => `Anda memasukkan ${n(invested)} · pot akhir ${n(pot)}`,

  formulaTitle: "📐 Dari mana angka ini",
  outsLabel: (k) => `${k} kartu melengkapi atau memperbaiki hand Anda`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} untuk flush` : "",
      o.straight > 0 ? `${o.straight} untuk straight` : "",
      o.set > 0 ? `${o.set} untuk set atau trips` : "",
      o.twoPair > 0 ? `${o.twoPair} untuk two pair` : "",
      o.over > 0 ? `${o.over} untuk memasangkan overcard` : "",
      both > 0 ? `${both} masuk dua kategori sekaligus (dihitung sekali saja)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Peluang salah satu kartu itu keluar (hitungan cepat di meja · aturan 2 dan 4)",
  winLabel2: "Equity Anda di pot (simulasi · seri dihitung sebagai bagian Anda dari split pot)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "Kedua angka ini mengukur hal yang berbeda. Yang atas adalah peluang Anda KENA; yang bawah adalah bagian pot yang Anda dapat dari MENANG (seri dihitung sebagai bagian split Anda). Anda bisa kena tapi tetap kalah kalau hand lawan menjadi lebih kuat lagi, dan bisa meleset tapi tetap menang. Keputusan memakai angka yang bawah.",
  noDrawNote: (basis, k) =>
    basis === "seat"
      ? `Ini masih preflop, jadi jalan pintas «outs × 2/4» belum berlaku. Equity di atas berasal dari ${k} simulasi hand melawan hand yang masuk akal dimainkan tiap lawan dari posisinya.`
      : `Anda tidak punya outs yang dihitung alat ini — tidak ada kartu yang melengkapi flush atau straight, atau menaikkan hand Anda satu kategori (set, two pair, atau pair dengan memasangkan overcard) — jadi jalan pintas «outs × 2/4» tidak berlaku di sini. Equity di atas berasal dari ${k} simulasi hand melawan semua hand yang cocok dengan aksi yang Anda lihat.`,
  foldWinNote: "Semua lawan fold, jadi pot ini milik Anda. Angka 100% di atas bukan hasil simulasi — itu hasil hand ini.",
  riverNote: "Ini river, tidak ada kartu lagi yang akan keluar, jadi jalan pintas «outs × 2/4» tidak berlaku. Equity di atas membandingkan hand akhir Anda dengan semua hand yang cocok dengan aksi yang Anda lihat.",
  chartTitle: "📈 Equity street demi street — semua kartu terbuka",
  resultTabs: ["📋 Tinjauan", "📈 Grafik", "🃏 Hitungan"],
  solverTitle: (info) =>
    info.kind === "spot" ? "Lihat spot ini di solver GTO" : info.kind === "notReady" ? "Lihat spot yang mirip di solver GTO" : "Lihat spot heads-up di solver GTO",
  solverOpen: "Buka «Studi flop» di solver",
  solverNote: (info) => {
    const gto = "Solver menunjukkan strategi flop saat kedua pemain bermain GTO (hasil perhitungan sebelumnya · 6-max 100bb · flop saja), jadi range, bet size, dan aturan lawannya tidak sama dengan simulator ini.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call (single-raised pot di solver) · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — tautan ini membuka posisi dan flop yang sama di «Studi flop» solver. ${gto}`
          : `${info.opener} open · ${info.caller} call — hand ini selesai sebelum flop, jadi yang terbuka hanya matchup posisinya. Pilih sendiri tiga kartu flop di solver. ${gto}`;
      case "notReady":
        return `Matchup «${info.opener} open · ${info.caller} call» belum dihitung sebelumnya di «Studi flop» solver. Pilih matchup posisi yang mirip, atau hitung sendiri di solver.`;
      case "multiway":
        return `${info.players} pemain melihat flop ini. Hasil perhitungan sebelumnya di solver hanya mencakup pot heads-up, jadi hand ini tidak bisa dibuka apa adanya — pilih matchup melawan satu lawan di «Studi flop».`;
      case "table9":
        return "Hasil perhitungan sebelumnya di solver dibuat untuk meja 6-max, jadi hand dari meja 9 pemain tidak bisa dibuka apa adanya — pilih matchup posisi yang paling mirip di «Studi flop».";
    }
  },
  solverLang: "id",
  fmtNum: n,
  decimalComma: true,
  chartRangeLegend: "Yang Anda lihat",
  chartNote: "Garis utuh menunjukkan equity tiap kursi saat semua hand terbuka; garis putus-putus adalah equity yang Anda lihat di layar tanpa mengetahui kartu mereka. Garis pemain yang fold berhenti di street sebelum pemain itu fold.",
  quizToggle: "🎯 Kuis",
  quizGuessTitle: "Berapa equity Anda?",
  quizGuessHint: "Geser slider untuk menebak",
  quizSubmit: "Cek jawaban",
  quizCallSubmit: "Call → cek",
  quizFoldSubmit: "Fold → cek",
  quizResult: (guess, err, points) => `Tebakan Anda ${guess}% · meleset ${dec(err)} poin persentase · ${points} poin`,
  quizChoiceResult: (ok, verdict) => (ok ? `Keputusan tepat (${verdict})` : `Kurang tepat — jawaban yang benar: ${verdict}`),
  quizNotCounted: "Tidak dihitung dalam catatan kuis Anda — Anda sudah melihat equity atau kartu lawan",
  quizStats: (s) => `${s.hands} hand · rata-rata meleset ${dec(s.avgErr)} poin persentase · ${s.hits}/${s.decisions} keputusan tepat · ${n(s.points)} poin`,
  quizReset: "Reset",
  quizResetConfirm: "Hapus catatan kuis yang tersimpan di browser ini? Tindakan ini tidak bisa dibatalkan.",
  quizInvite: "Masuk untuk menyimpan catatan ini di akun Anda dan melihatnya dari ponsel atau PC mana pun.",
  quizInviteLink: "Masuk",
  quizGuessCol: "Tebakan",
  quizChoiceCol: "Pilihan",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `Hand ini: rata-rata meleset ${dec(avgErr)} poin persentase${decisions > 0 ? ` · ${hits}/${decisions} keputusan tepat` : ""} · ${points} poin`,
  quizGuessLegend: "Tebakan Anda",
  customToggle: "✍️ Buat hand",
  customTitle: "Buat hand — mainkan ulang hand yang pernah Anda mainkan",
  customHint: "Ketuk satu kotak, lalu pilih kartu di bawahnya. Kotak yang kosong diisi acak, dan lawan selalu mendapat hand dari range posisinya.",
  customPos: "Posisi Anda",
  customRandom: "Acak",
  customHero: "Hand Anda",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Bagikan hand ini →",
  customClear: "Hapus semua",
  customClose: "Tutup",
  customOff: "Kembali ke hand acak",
  customActive: "Hand buatan Anda · hand berikutnya tetap memakai kartu ini",
  customEdit: "Ubah",
  shareBtn: "Salin tautan hand ini",
  shareCopied: "Tersalin. Siapa pun yang membuka tautan ini memainkan hand ini dari preflop dengan kartu dan equity yang sama.",
  shareManual: "Penyalinan otomatis diblokir. Salin alamat di bawah ini.",
  sharedActive: "Hand yang dibagikan · kartu dan equity sama dengan milik pengirim (tidak dihitung dalam catatan kuis Anda)",
  sharedInvalid: "Tautan yang dibagikan tidak bisa dibaca, jadi ini hand acak baru (mungkin tautannya terpotong atau diubah)",
  rangeToggle: "Lihat range lawan",
  rangeTitle: "Range lawan — hand yang cocok dengan aksinya sejauh ini",
  rangeCombos: (pre, cur, pct) => `Preflop ${pre} combo → sekarang ${cur} combo (tersisa ${pct}%)`,
  rangeLegend: ["Masih dalam range (makin gelap = makin besar porsi yang tersisa)", "Tersingkir karena aksinya", "Tidak pernah dalam range", "Hand sebenarnya", "Terblokir oleh hand Anda atau board"],
  rangeNote: "Dimulai dari range preflop posisinya, lalu street demi street setiap hand yang menurut aturan lawan akan mengambil aksi berbeda dibuang. Equity di atas memakai range yang sama. Combo yang memakai kartu di hand Anda atau di board tidak dihitung.",
  quizKinds: ["Tebak equity + putuskan", "Putuskan saja (call atau fold?)"],
  decideTitle: "Call atau fold?",
  decideHint: "Pilih call atau fold tanpa melihat kartu mereka. Meski Anda fold, hand tetap berjalan sampai akhir. Mode ini tidak dihitung dalam catatan kuis Anda.",
  decideSummary: (hits, decisions) => `Hand ini: ${hits}/${decisions} keputusan tepat menurut pot odds`,
  actualCol: "Kartu diketahui",
  actualSummary: (hits, decisions) => `Keputusan tepat seandainya Anda tahu kartu mereka: ${hits}/${decisions} — hanya sebagai gambaran. Di meja, patokannya tetap pot odds tanpa melihat kartu mereka.`,

  ruleTitle: "Asumsi simulator ini",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Lawan hanya mengikuti aturan di bawah ini, tidak lebih.</b> Tidak ada pemain sungguhan
        yang bermain seperti ini — posisi, lawan, kedalaman stack, dan image di meja mengubah segalanya. Anggap saja seperti
        «gesekan diabaikan» dalam soal fisika.
      </p>
      <p className="mb-1">
        Gaya lawan saat ini: <b className="text-foreground">{ID_UI.styleNames[style]}</b> (seluruh meja memakai gaya yang sama · ganti lewat pilihan di atas)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Two pair atau lebih baik → <b className="text-foreground">{style === "aggressive" ? "raise 150% pot (overbet)" : "raise seukuran pot"}</b></li>
        {style === "standard" && <li>One pair, atau flush/straight draw → <b className="text-foreground">bet setengah pot</b></li>}
        {style === "tight" && <>
          <li>One pair berupa top pair atau lebih baik yang dibuat dengan kartu di tangan (termasuk overpair), atau flush/straight draw → <b className="text-foreground">bet setengah pot</b></li>
          <li>Pair yang lebih lemah (termasuk pair yang hanya ada di board) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>One pair, flush/straight draw, atau kartu di tangan yang lebih tinggi dari semua kartu board (overcard) → <b className="text-foreground">bet setengah pot</b></li>}
        {style === "aggressive" && <>
          <li>Flush/straight draw → <b className="text-foreground">raise (semi-bluff)</b></li>
          <li>One pair → <b className="text-foreground">bet setengah pot</b></li>
          <li>Tanpa pair dan tanpa draw, tapi punya overcard → <b className="text-foreground">raise (bluff)</b></li>
        </>}
        <li>Selain itu → <b className="text-foreground">fold</b> (kartu dibuang tanpa dibuka, seperti di permainan live)</li>
      </ul>
      <p className="mb-2">
        Aturan dibaca dari atas ke bawah: baris pertama yang cocok menentukan aksinya. Draw berarti empat kartu menuju flush atau straight di flop atau turn, dengan minimal satu kartu dari tangan (di river tidak ada draw).{" "}
        {style === "aggressive" && "Semua raise gaya Agresif, termasuk semi-bluff dan bluff, berukuran 150% pot. "}
        Saat ada yang raise, semua pemain yang masih di hand ini call raise tersebut, dan bet yang lebih besar dari sisa stack
        diturunkan menjadi sisa stack itu: pemainnya all-in. Begitu ada pemain all-in, tidak ada lagi yang fold — sisa board dibagikan dan hand masuk ke showdown. Tidak ada check-raise — tiap lawan beraksi sekali per street sesuai aturan, tanpa tahap check lalu merespons lagi. Label kursi merangkum tiap street: kursi yang menentukan jumlahnya tampil “Bet”, dan semua pemain lain yang masih di hand tampil “Call”, apa pun urutannya. Di sini Anda tidak pernah bet; Anda cukup call sampai river.
        Range preflop (di bawah) sama untuk semua gaya.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Equity Anda dihitung seolah Anda tidak bisa melihat kartu mereka.</b> Mulai
        flop, range tiap lawan adalah hand dari range preflop posisinya (di bawah) yang akan melakukan aksi yang
        Anda lihat menurut aturan gaya yang dipilih — melawan lawan gaya Normal, raise hanya menyisakan two pair
        atau lebih baik; melawan lawan gaya Agresif, draw dan bluff dengan overcard juga tetap tersisa. Pemain yang fold di layar
        juga keluar dari hitungan.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Hand preflop lawan diambil dari range per posisi.</b> Di antara
        pemain di pot, yang bertindak pertama di preflop dianggap sebagai yang open, dan semua yang lain dianggap
        defend terhadap open itu dengan call atau 3-bet (range open · range defend). Range-nya adalah range
        konsensus cash game 6-max 100bb yang dicocokkan dari beberapa sumber publik, dengan hand di batas range dicampur pada
        25/50/75%. Jika tidak ada tabelnya (HJ melawan open UTG · SB melawan open UTG, HJ, atau CO), serta untuk pemain
        ketiga dan seterusnya, dipakai tabel defend yang paling dekat. Tidak ada tabel untuk meja 9 pemain: di meja 9 pemain,
        UTG, UTG+1, UTG+2, dan LJ memakai tabel UTG 6-max, dan setiap kursi lainnya memakai tabel 6-max
        dengan nama yang sama (posisi awal yang defend terhadap open dari posisi awal lain, atau HJ yang defend terhadapnya, memakai tabel CO melawan UTG) — jadi tiga kursi pertama di meja 9 pemain punya range yang lebih lebar daripada kenyataannya. Hanya hand Anda yang acak (kecuali Anda membuatnya sendiri) — alat ini membiarkan Anda
        memainkan starting hand apa pun sampai river. Di sini 3-bet tidak mengubah ukuran pot (disederhanakan).
      </p>
      <p className="mb-2">
        <b className="text-foreground">Keputusan hanya berdasarkan pot odds.</b> Implied odds tidak dihitung, dan
        kecenderungan serta bluff lawan hanya masuk ke range sebatas aturan gaya yang dipilih. Draw khususnya sering layak di-call meski pot odds saja
        sedikit kurang.
      </p>
      <p>
        Semua pemain membayar ante {ANTE} dan mulai dengan stack {n(STACK)}. Anda tidak pernah fold — memang itu intinya:
        Anda melihat river lalu meninjau ulang hand-nya. Equity adalah perkiraan hasil simulasi dengan jumlah sampel tetap:{" "}
        <b className="text-foreground">{n(SAMPLES.preflop)} simulasi</b> di preflop dan{" "}
        <b className="text-foreground">{n(SAMPLES.postflop)} simulasi</b> mulai flop (galat baku sekitar 0,25–0,35 poin persentase).
        Setiap hand memakai seed acak yang tetap, jadi hand yang sama menampilkan angka yang sama di perangkat mana pun. Jika seri, pot
        dibagi rata di antara pemain yang seri (setengah-setengah bila berdua).
      </p>
      <p className="mt-2">
        <b className="text-foreground">Saat Anda membuka kartu mereka</b>, tiap kursi mendapat equity-nya dengan semua hand diketahui. Mulai
        flop, equity dihitung secara persis dari semua kemungkinan kartu yang tersisa (hanya preflop yang memakai {n(SAMPLES.known)} simulasi),
        dan angka itu tidak pernah masuk ke equity maupun keputusan call/fold yang ditampilkan — di meja sungguhan Anda tidak akan
        punya informasi itu.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 Saat Kuis aktif</b>, equity dan keputusan disembunyikan sampai Anda menjawab. Di
        «Tebak equity + putuskan», Anda menebak equity di setiap street, dan di street yang ada bet-nya Anda juga memilih call
        atau fold. Di «Putuskan saja (call atau fold?)» tidak ada tebakan: Anda hanya memilih call atau fold di street yang ada
        bet-nya, dan mode ini tidak dihitung dalam catatan kuis Anda. Jawabannya adalah «Equity Anda» di atas (angka
        tanpa melihat kartu mereka), dan setiap tebakan mendapat <b className="text-foreground">100 − 4 × selisih (dalam poin persentase)</b>
        {" "}poin, dibulatkan ke bilangan bulat dan tidak pernah di bawah nol (nol begitu selisihnya mencapai 25 poin persentase atau lebih). Pilihan call/fold dihitung tepat jika sama dengan keputusan pot odds. Total
        Anda tersimpan di browser ini dan, jika Anda masuk, juga disimpan di akun Anda agar
        bisa dibuka dari perangkat lain (kartu dan board tidak disimpan).
      </p>
      <p className="mt-2">
        Dengan <b className="text-foreground">✍️ Buat hand</b>, Anda bisa memilih posisi, kartu, dan board untuk memainkan ulang
        hand yang benar-benar pernah Anda mainkan. Kotak yang kosong diisi acak. Kartu lawan tidak bisa Anda pilih — di
        meja sungguhan Anda juga tidak akan tahu — jadi kartu itu selalu diambil dari range per posisi, dan equity yang ditampilkan
        tetap memakai asumsi «kartu tidak diketahui» yang sama. Meski board sudah ditentukan dari awal, equity tiap street hanya memakai
        kartu yang sudah dibagikan sampai street itu. Karena memainkan ulang hand yang sama bisa membuat Anda hafal jawabannya, hand buatan
        tidak dihitung dalam catatan kuis Anda.
      </p>
    </>
  ),
  footer: (
    <>
      Ingin melihat hitungannya?{" "}
      <a href="/id/blog/holdem-pot-odds" className="text-primary underline">Cara menghitung pot odds →</a>
      {" · "}
      <a href="/id/blog/holdem-position-play" className="text-primary underline">Kenapa posisi itu penting</a>
      {" · "}
      <a href="/id/calculator" className="text-primary underline">Kalkulator Poker</a>
    </>
  ),
};

export default function WinRateQuizClientId() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Simulator Poker 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Bermain tanpa melihat kartu lawan — lalu cek kapan seharusnya Anda fold</p>
      </div>
      <WinRateSimulator ui={ID_UI} />
    </div>
  );
}
