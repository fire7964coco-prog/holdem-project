// `/id/calculator` 사전 — 공용 계산기(`components/calculator/calculator-tool.tsx`)의 인니어 문자열.
//
// ★2026-09-17 신설 → ★2026-09-19 (id 회차) 재조준: EN 재저작(09-17)·ja·zh·zh-hant·es·pt·de·fr와 동형 —
//   Equity 탭 · quickRef 6표 · 아웃츠 3스트리트 · ICM chip chop 열 · 새 ICM 딜 예시 · 가이드 카드 9 · 관련 글 8 ·
//   딜러 렌즈 EN 정정 12항 동반. 근거 = `docs/keyword-bank/id-calculator.md`(자동완성 52시드 · 라쿠 볼륨 35종 · SERP 3쿼리).
// 🔴 quickRef·icmGuide **두 표(bubble·deal)**의 수치는 EN 값 그대로(§13 언어 불변 · 정본 = scripts/calc-reference-tables.ts ·
//   scripts/calc-icm-example.ts). 손으로 고치지 마라 — 구분자만 인니식(`.` 천단위 · `,` 소수)으로 바꾼다.
//
// 용어 출처(우선순위 순): `docs/keyword-bank/id-posting-reference.md` §5·§5-A(코퍼스 실측 판정) →
//   `docs/translation-terms-id.md` → `lib/posts-id/*.ts` 실제 어법(55편).
// 판단:
//   · 영어 차용어 유지 = outs · pot odds · implied odds · equity(324 : ekuitas 9) · ICM · SPR · push/fold ·
//     shove · draw · board(380 : papan 7) · range(215 : rentang 8) · stack · check(액션) · EV ·
//     족보 10종(Royal Flush … High Card) — 코퍼스 다수파. 억지 번역이 결함.
//   · 홀카드 = «kartu tertutup» · 스타팅핸드 = «starting hand» · 승률·확률 = «peluang»(144 : probabilitas 47).
//   · 숫자 = 인니식(천단위 `.` · 소수 `,` · 🔴 **`%` 앞 공백 없음** — §5-A C 「35,4%」. fr 「35 %」와 다르다).
//   · M 존 이름 = short-stack 글의 «Hijau · Kuning · Oranye · Merah · Mati» 승계 · 2인칭 = Anda(코퍼스 3.340:0).
// 🔴 2026-09-19 머리어 교체 — «Kalkulator Odds Poker»(볼륨 null · 자동완성 0 · 09-16 코퍼스 앵커)를
//   **«Kalkulator Poker»**(10 · +41%↑ · 구글이 «poker calculator»를 그렇게 번역한다 — SERP #3 Wikipedia-id 축어)로.
//   영어 머리어 «poker calculator»/«poker odds calculator» 각 90은 **조준하지 않는다**(SERP가 영어 도구 업계 전체).
//   근거·시계열 = 뱅크 §1·§2·§4. 같이 바꾼 자리 = page.tsx(TITLE·OG·JSON-LD name) · CALC_CTA_LABELS.id · side-rail.tsx.
//   (breadcrumb는 09-17부터 「Kalkulator」라 바꿀 필요가 없었다.)
import type { CalcDict } from "@/components/calculator/dict";

export const CALC_DICT_ID: CalcDict = {
  numberLocale: "id-ID",

  seo: {
    title: "Kalkulator Poker — Odds, Equity, ICM & Pot Odds",
    description:
      "Kalkulator poker gratis: equity hand lawan hand (% menang), pot odds, outs, urutan kartu, SPR, nilai M, ICM & chip chop — 9 alat, tanpa perlu daftar.",
    path: "/id/calculator",
  },

  hero: {
    badges: ["Alat gratis", "Tanpa perlu daftar"],
    h1: "Kalkulator Poker",
    h1Sub: "Equity, ICM, dan pot odds di satu halaman",
    lead: "Masukkan dua hand dan lihat siapa yang menang — lalu cek pot odds, outs, deal ICM, SPR, nilai M turnamen, dan range push/fold. Sembilan kalkulator Hold'em gratis, dengan perhitungan persis di setiap street yang masih cepat dihitung.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot Odds", "🃏 Urutan Kartu", "📊 Starting Hand", "📐 SPR", "🏆 Nilai M", "📈 ICM", "⚡ Push/Fold"],
  },

  // ★2026-09-19 Equity 탭 신설. 🔴 «equity»를 «ekuitas»로 번역하지 마라(코퍼스 324 : 9).
  equity: {
    label: "Equity", sub: "Hand lawan hand",
    hero: "Hand Anda",
    opp: "Lawan {n}",
    random: "Hand acak",
    board: "Board",
    pickerHint: "Pilih satu kursi atau board, lalu tentukan kartunya.",
    addPlayer: "+ Tambah lawan", removePlayer: "− Hapus lawan",
    needTwo: "Beri setiap hand 2 kartu (atau tandai lawan sebagai hand acak).",
    boardCount: "Kosongkan board untuk preflop, atau isi 3 (flop), 4 (turn), atau 5 (river) kartu.",
    th: { player: "Pemain", hand: "Hand", win: "Menang", tie: "Seri", equity: "Equity" },
    exactNote: "Persis — seluruh {n} kemungkinan runout dihitung satu per satu.",
    mcNote: "Monte Carlo — {n} runout acak; hasilnya bisa berbeda sekitar ±0,3 poin antarperhitungan.",
    winner: "{p} menang dengan {hand}",
    chop: "Chop — {n} hand sama-sama {hand} dan membagi pot",
    showdownNote: "Showdown — board sudah lengkap, jadi ini hasil akhirnya.",
    presets: [
      { label: "AA vs KK", hands: ["AsAh", "KsKd"] },
      { label: "AKs vs QQ", hands: ["AhKh", "QsQc"] },
      { label: "AKo vs 22", hands: ["AhKd", "2s2c"] },
      { label: "AKo vs AQo", hands: ["AhKd", "AsQc"] },
      { label: "AA vs 87s", hands: ["AsAh", "8d7d"] },
    ],
  },

  tabs: {
    outs: { label: "Outs", sub: "Peluang draw" },
    pot: { label: "Pot Odds", sub: "Call/fold" },
    hand: { label: "Urutan Kartu", sub: "Pilih kartu" },
    starting: { label: "Starting Hand", sub: "Kekuatan open" },
    spr: { label: "SPR", sub: "Rasio stack/pot" },
    m: { label: "M Turnamen", sub: "Nilai M" },
    icm: { label: "ICM", sub: "Equity hadiah" },
    pushfold: { label: "Push/Fold", sub: "Chart Nash" },
  },

  workspace: {
    chooseCalculator: "Pilih kalkulator",
    resetInputs: "Reset input",
    resetAria: "Reset {label}",
    resetMessage: "Input {label} sudah direset.",
  },

  cardPicker: {
    clearAll: "Hapus semua",
  },

  outs: {
    drawType: "Jenis draw",
    presets: [
      { label: "Input manual" },
      // 🔴 딜러 렌즈(EN 09-17): «Nut flush draw»가 아니라 «Flush draw» — 9 outs는 nut이든 아니든 같다.
      { label: "Flush draw", desc: "4 kartu satu jenis → butuh kartu ke-5 (9 outs, nut flush atau bukan)" },
      { label: "Open-ended straight draw (OESD)", desc: "mis. 5-6-7-8, butuh 4 atau 9" },
      { label: "Kombo flush + gutshot", desc: "9 flush + 3 gutshot (tumpang tindih sudah dikurangi)" },
      { label: "Gutshot straight", desc: "mis. 5-6-8-9, hanya butuh 7" },
      // 🔴 pt·de·fr 네이티브 렌즈 정정 승계 — overcard = «board의 어느 카드보다 높은» 카드이지 «board에 없는» 카드가 아니다.
      //    🔴 **EN 정본은 아직 옛 문안이다**(`components/calculator/dict.ts:443` «2 high ranks not on board») · es·ja·zh도 미반영 → EN 전파 필요(§5).
      { label: "Dua overcard", desc: "2 kartu yang lebih tinggi daripada semua kartu di board × 3 outs tiap nilai — potong nilainya habis-habisan melawan hand jadi: memasangkan overcard sering tetap kalah" },
      { label: "Two pair → full house", desc: "mis. A-K di board A-K-x → tersisa dua As + dua King" },
      { label: "One pair → trips", desc: "tersisa 2 kartu dengan nilai itu" },
      { label: "Flush + OESD (monster)", desc: "9 flush + 8 straight (2 tumpang tindih)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    // ★2026-09-19 세 번째 street(flop → 다음 카드 한 장) — 플롭에서 벳 하나를 마주했을 때 쓰는 수치
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Peluang jadi di kartu berikutnya, dari flop",
    outsCount: "Jumlah outs: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Aturan 4",
    ruleOf2: "Aturan 2",
    chanceFlop: "Peluang jadi sampai river dari flop (dua kartu sekaligus — kondisi all-in)",
    chanceTurn: "Peluang jadi di river dari turn",
    exact: " (persis)",
    ruleMental: "Aturan {n} (hitung cepat):",
    exactNote: "Angka besar itu nilai persisnya",
    verdict: { great: "Bagus sekali 🔥", good: "Bagus ✅", fair: "Lumayan ⚠️", poor: "Buruk ❌", veryPoor: "Sangat buruk 💀" },
  },

  pot: {
    // 🔴 딜러 렌즈(EN 09-17): 마주한 벳이 포함된 팟이라는 점을 라벨이 말해야 한다.
    potSize: "Ukuran pot (termasuk bet yang Anda hadapi)",
    callAmount: "Jumlah call Anda",
    potOddsCaption: "Pot odds (equity minimum yang dibutuhkan)",
    orHigher: "di atas angka ini, call jadi menguntungkan",
    equityLabel: "Equity hand Anda: {v}",
    sliderGutshot: "Gutshot 8,7%",
    // 🔴 딜러 렌즈: 턴→리버 플러시 draw는 19,6%(19%가 아니다 · quickRef 아웃츠 표 9 outs 행과 일치).
    sliderFlush: "Flush 19,6%",
    impliedToggle: "Implied odds {toggle}",
    close: "Tutup ▲",
    add: "Tambah ▼",
    extraWinnings: "Perkiraan kemenangan tambahan (jika kena): {v}",
    none: "Tidak ada",
    impliedCaption: "Implied odds (dengan kemenangan tambahan)",
    impliedNote: "Equity minimum yang dibutuhkan, dengan tambahan {n}",
    needImplied: "implied odds {n}%",
    needPot: "pot odds {n}%",
    verdict: {
      call: { title: "Call (menguntungkan)", body: "Equity Anda {eq}% > {need} → untung dalam jangka panjang" },
      even: { title: "Break-even (EV 0)", body: "Equity Anda {eq}% = {need} → call tidak untung dan tidak rugi. Putuskan dari faktor di luar pot odds, seperti posisi dan kecenderungan lawan" },
      fold: { title: "Disarankan fold", body: "Equity Anda {eq}% < {need} → rugi dalam jangka panjang" },
    },
  },

  handEval: {
    pickerLabel: "Pilih kartu (5–7)",
    emptyTitle: "Pilih 5 kartu atau lebih untuk menilai hand",
    emptyHint: "Dengan 7 kartu, kombinasi 5 kartu terbaik dicari otomatis",
    bestFrom: "Hand terbaik dari {n} kartu",
    rankNames: [
      "High Card", "One Pair", "Two Pair", "Three of a Kind", "Straight",
      "Flush", "Full House", "Four of a Kind", "Straight Flush", "Royal Flush",
    ],
    resultNames: [
      "High Card 🃏", "One Pair 1️⃣", "Two Pair ✌️", "Three of a Kind 3️⃣", "Straight ➡️",
      "Flush 🌊", "Full House 🏠", "Four of a Kind 💎", "Straight Flush 🌟", "Royal Flush 👑",
    ],
    axis: ["High Card", "One Pair", "Flush", "Quads", "Royal"],
  },

  starting: {
    pickerLabel: "Pilih 2 kartu tertutup Anda",
    emptyPrompt: "Pilih 2 kartu tertutup Anda",
    // 🔴 EN 09-17 정정 — 옛 문안(«Hand sangat lemah / Biasanya fold»)은 **사실 오류**였다:
    //    K9s·QTs·J9s처럼 쓸 만한 핸드가 전부 이 폴백에 떨어진다.
    // 🔴 09-20 EN 정본으로 교체 — 옛 id 문안의 «dua kartu broadway»는 **공집합**이었고(오프수트 브로드웨이 10개가
    //    전부 HAND_TABLE 안 · 예시 K9o는 broadway가 아니라 라벨 자체가 틀렸다), «suited atau tersambung»에는
    //    바닥이 없어 32s·42s까지 열렸다. EN이 «kartu kecil 3 ke atas» 한 조건으로 다시 썼다.
    //    Tier 5 단서는 뺐다 — 코드가 폴백 티어를 계산하므로(calculator-tool.tsx fallbackTier) 더는 참이 아니다.
    unknownDesc: "Tidak ada di chart open inti",
    unknownAction: "Suited: kalau semua fold ke Anda, open hand suited apa pun dari BTN; dari CO batasi ke king suited, dua kartu 8 ke atas (Q8s, 10-8s), dan connector sampai 54s. Offsuit: hanya dari BTN — ace apa pun (A9o, A5o) atau dua kartu 9 ke atas (K9o, 10-9o). Sisanya (J2o, 93o, 72o): fold",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Kuat", "🥉 Tier 3 — Bisa dimainkan", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — Lemah"],
    recommendedAction: "Aksi yang disarankan:",
    axis: ["Premium", "Kuat", "Bisa dimainkan", "Marginal", "Lemah"],
    summaryTitle: "Ringkasan tier hand",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Selalu raise" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Raise dari hampir semua posisi" },
      { hands: "AJo KQo K10s QJs J10s 10-9s 77 A9s", action: "Raise dari posisi akhir" },
      { hands: "66–55 A8s–A2s KJo QJo suited connector", action: "Selektif di posisi akhir" },
      { hands: "44–22 hand offsuit lemah", action: "Biasanya fold" },
    ],
    // 🔴 오픈 림프 권유 제거 — **fr 09-18 딜러 렌즈 승계**(EN 미반영: `components/calculator/dict.ts`의 88 「consider calling EP」·
    //    77 「call EP」·KQo 「call/fold in EP」가 그대로다 — **EP엔 앞선 레이즈가 없으니 논리상 림프밖에 안 된다** → §5).
    //    id 09-17판 실계수 = 「call di posisi awal」 8곳 + 「call/fold di posisi awal」 1곳 = **9곳**
    //    (브리프 §3-I의 «13항»은 핸드 목록 길이이지 결함 자리 수가 아니다). 「call」은 전부 «raise를 call»로 명시했다(코퍼스 정본 = call raise 12 · call sebuah raise 7 · 🔴 «kenaikan»은 id에서 «증가» 뜻뿐이라 raise 역어로 쓰지 마라 — 2차 교열 렌즈).
    hands: {
      AA: { desc: "Hand terbaik. Raise di setiap spot", action: "Selalu raise/re-raise (3-bet)" },
      KK: { desc: "Hanya waspadai As di flop", action: "Selalu raise/re-raise" },
      QQ: { desc: "Lebih kuat dari JJ, tapi jangan dinilai berlebihan", action: "Selalu raise; hati-hati saat deep" },
      JJ: { desc: "Waspadai overcard di flop", action: "Raise dari posisi mana pun" },
      "1010": { desc: "Nilainya turun saat overcard muncul di flop", action: "Raise dari posisi mana pun — jangan open-limp" },
      AKs: { desc: "Drawing hand terbaik. Bangun pot", action: "Selalu raise/re-raise" },
      AKo: { desc: "Lebih lemah dari AKs tapi tetap premium", action: "Selalu raise; boleh call re-raise" },
      AQs: { desc: "Hand kuat; lebih bernilai saat in position", action: "Raise dari hampir semua posisi" },
      AJs: { desc: "Bagus di BTN/CO, lemah dari UTG", action: "Raise di posisi tengah/akhir; dari UTG raise atau fold — jangan open-limp" },
      A10s: { desc: "Salah satu suited ace teratas", action: "Raise di posisi akhir; dari posisi awal raise atau fold — jangan open-limp, meski mejanya pasif" },
      KQs: { desc: "Potensi flush tinggi + straight draw", action: "Raise dari hampir semua posisi" },
      KJs: { desc: "Drawing hand yang kuat", action: "Raise di posisi akhir; dari posisi awal raise atau fold — jangan open-limp" },
      "99": { desc: "Pair sedang, waspadai flop dengan overcard", action: "Raise dari hampir semua posisi; hati-hati saat deep" },
      "88": { desc: "Pocket pair dengan potensi set yang bagus", action: "Raise di posisi akhir; di posisi awal boleh call raise — jangan open-limp" },
      AQo: { desc: "Versi offsuit lebih lemah; posisi menentukan", action: "Raise di posisi tengah/akhir" },
      AJo: { desc: "Lemah di posisi awal, kuat di posisi akhir", action: "Raise di CO/BTN, hati-hati di posisi awal" },
      KQo: { desc: "Connector offsuit teratas", action: "Raise di posisi akhir; di posisi awal raise atau fold kalau belum ada yang masuk, dan biasanya fold menghadapi raise" },
      K10s: { desc: "Suited king, kuat di posisi akhir", action: "Raise di posisi akhir, fold di posisi awal" },
      QJs: { desc: "Draw dua arah yang kuat", action: "Raise di posisi akhir, lebih bernilai saat deep" },
      J10s: { desc: "Salah satu suited connector terbaik", action: "Raise di posisi akhir; call sebuah raise kalau in position" },
      "109s": { desc: "Suited connector yang kuat", action: "Raise first in dari posisi akhir; call raise kalau in position" },
      "77": { desc: "Hand set mining, waspadai overcard", action: "Raise di posisi akhir; di posisi awal boleh call raise — jangan open-limp" },
      A9s: { desc: "Suited ace dengan potensi flush", action: "Raise di posisi akhir" },
      "66": { desc: "Set mining — butuh implied odds", action: "Call raise kalau tersisa ~15× jumlah call di belakang; raise di posisi akhir" },
      "55": { desc: "Nilainya kecil tanpa set", action: "Call raise kalau tersisa ~15× jumlah call di belakang; raise first in dari posisi akhir" },
      A8s: { desc: "Suited ace menengah", action: "Mainkan di posisi akhir, fold di posisi awal" },
      A7s: { desc: "Suited ace menengah", action: "Hanya di posisi akhir" },
      A6s: { desc: "Suited ace menengah", action: "Hanya di posisi akhir" },
      A5s: { desc: "Nilai wheel + blocker As; 3-bet bluff favorit", action: "Hanya di posisi akhir; implied odds menentukan" },
      A4s: { desc: "Suited ace dengan wheel draw", action: "Hanya di posisi akhir" },
      A3s: { desc: "Suited ace paling bawah", action: "Hanya BTN/SB" },
      A2s: { desc: "Wheel + nut flush, tapi lemah", action: "Hanya BTN" },
      KJo: { desc: "Risiko domination; hanya posisi akhir", action: "Raise di CO/BTN, fold ke re-raise" },
      QJo: { desc: "Konektivitas sedang; butuh posisi", action: "Hanya di posisi akhir" },
      "98s": { desc: "Suited connector yang solid", action: "Raise first in dari posisi akhir; call raise kalau in position — jangan open-limp" },
      "87s": { desc: "Suited connector yang bagus", action: "Raise first in dari posisi akhir; call raise kalau in position" },
      "76s": { desc: "Suited connector", action: "Raise first in dari posisi akhir; call raise hanya kalau in position dan stack deep" },
      "44": { desc: "Hampir tanpa nilai tanpa set", action: "Call raise hanya kalau tersisa ~15× jumlah call di belakang" },
      "33": { desc: "Harus set mining; spekulatif", action: "Hanya pot multiway dengan stack deep" },
      "22": { desc: "Pocket pair terendah", action: "Hanya pot multiway dengan stack deep" },
      K10o: { desc: "K-10 offsuit, lemah", action: "Sesekali dari BTN" },
      Q10o: { desc: "Offsuit dengan konektivitas rendah", action: "Hanya BTN" },
      J10o: { desc: "Offsuit yang lumayan tapi rentan", action: "Sesekali dari BTN" },
      Q10s: { desc: "Suited broadway yang kuat, enak dimainkan in position", action: "Raise di posisi akhir; fold dari posisi awal" },
      A10o: { desc: "Ace offsuit marginal, rawan domination", action: "Hanya di posisi akhir" },
      "65s": { desc: "Suited connector; butuh multiway/implied odds", action: "Call raise di posisi akhir kalau stack deep" },
      "54s": { desc: "Suited connector rendah; spekulatif", action: "Call raise di posisi akhir, pot multiway yang murah" },
    },
  },

  spr: {
    // 🔴 딜러 렌즈(EN 09-17): effective stack = «둘 중 더 짧은 쪽»이지 «내 스택»이 아니다.
    effectiveStack: "Stack efektif (yang lebih pendek dari dua stack)",
    potSize: "Ukuran pot saat ini",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pot",
    zones: {
      low: {
        label: "SPR rendah (committed)",
        // 🔴 EN 끝문장이 09-17판에서 통째로 빠져 있었다 → 젖은 보드에서도 TPTK 스택오프 조언이 됐다.
        desc: "Sebagian besar pot sudah masuk. Dengan top pair top kicker atau lebih baik di flop kering, rencanakan memasukkan sisanya — di kedalaman ini justru fold yang sering jadi kesalahan lebih besar. Di board yang berpasangan, tiga kartu sejenis, atau tiga kartu berurutan, atau saat menghadapi aksi yang hanya masuk akal dari set atau straight, one pair tetaplah one pair.",
        actions: [["TPTK+", "Pertimbangkan all-in di flop kering"], ["Draw", "Pot odds wajib dihitung"], ["Hand lemah", "Fold dengan hati-hati"]],
      },
      mid: {
        label: "SPR sedang (fleksibel)",
        desc: "Ini zona untuk memainkan hand kuat seperti two pair atau lebih baik. Melindungi stack Anda mulai penting.",
        // 🔴 EN 09-17 정정 — 옛 문안(«Mainkan sesuai feel» · «Timbang risiko vs imbalan»)은 D유형이었다:
        //    계산기가 줄 수 있는 최악의 조언(«감으로 하라»)이다. EN은 구체적 플랜으로 바꿨다.
        actions: [["Two pair+", "Value bet"], ["One pair", "Satu-dua street, lalu pot control"], ["Draw", "Semi-bluff kalau ada fold equity; tanpa itu, lepaskan"]],
      },
      high: {
        label: "SPR tinggi (mulai deep)",
        desc: "Stack mulai deep. Draw dan hand jadi yang kuat naik nilai relatifnya.",
        actions: [["Set+", "Mainkan kuat"], ["Draw", "Implied odds naik"], ["One pair/TPTK", "Lanjutkan dengan hati-hati"]],
      },
      deep: {
        label: "SPR sangat tinggi (deep)",
        desc: "Ini permainan deep stack. Posisi, potensi draw, dan membaca range lawan sangat menentukan.",
        actions: [["Hand nut", "Bisa bet besar"], ["Draw", "Implied odds sangat tinggi"], ["Hand jadi yang lemah", "Hati-hati, rentan terhadap bluff"]],
      },
    },
    legend: ["Committed", "Fleksibel", "Mulai deep", "Deep"],
  },

  m: {
    inputs: { stack: "Stack Anda", bb: "Big blind", sb: "Small blind", ante: "Ante" },
    players: "Pemain di meja: {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Biaya orbit (blind per putaran)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "Nilai M (M Harrington)",
    zones: {
      // 🔴 딜러 렌즈(EN 09-17): «최고의 핸드를 기다려라»가 아니라 «받는 패 중 쓸 만한 것» + «팟이 열리지 않은 자리».
      dead: { name: "💀 Zona mati", desc: "Fold equity sudah habis — all-in jadi satu-satunya langkah, jadi ambil hand terbaik yang sempat Anda dapat sebelum blind sampai ke Anda, dan pilih spot saat pot belum dibuka siapa pun.", action: "All-in sekarang" },
      red: { name: "🔴 Zona merah", desc: "Anda harus segera double up. Pakai strategi push/fold — shove hand bagus Anda, fold sisanya.", action: "Push/fold" },
      orange: { name: "🟠 Zona oranye", desc: "Stack Anda menyusut. Ketatkan range ke hand kuat saja dan cari peluang open-shove.", action: "Range ketat" },
      yellow: { name: "🟡 Zona kuning", desc: "Tekanan mulai terasa. Anda harus aktif mengumpulkan chip — main agresif saat spot bagus muncul.", action: "Main agresif" },
      green: { name: "🟢 Zona hijau", desc: "Stack Anda nyaman. Pakai seluruh strategi — besarkan stack lewat permainan posisi dan bluff.", action: "Strategi penuh" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " adalah cara menghitung nilai uang hadiah yang sebenarnya dari chip turnamen Anda. Saat lebih dari satu posisi dibayar, nilai ICM chip leader pun lebih rendah daripada persentase chipnya, sedangkan short stack bernilai lebih dari persentase chipnya. Untuk keputusan call/fold, bandingkan nilai ICM Anda setelah menang dan setelah bust dengan nilai Anda kalau fold.",
    numPlayers: "Jumlah pemain",
    paidPlaces: "Posisi yang dibayar",
    stacksTitle: "Stack chip pemain",
    total: "total {n}",
    decStack: "Kurangi stack pemain {n}",
    stackInput: "Stack chip pemain {n}",
    incStack: "Tambah stack pemain {n}",
    prizesTitle: "Hadiah",
    decPrize: "Kurangi hadiah posisi {n}",
    prizeInput: "Hadiah posisi {n}",
    incPrize: "Tambah hadiah posisi {n}",
    currencyNote: "Masukkan jumlah hadiah dalam satuan mata uang apa pun.",
    resultTitle: "Hasil ICM",
    th: { player: "Pemain", chips: "Chip", chipPct: "Chip %", icmValue: "Nilai ICM", icmPct: "ICM %", diff: "Selisih", chop: "Chip chop" },
    playerCell: "{medal} P{n}",
    diffPlus: "+selisih",
    // 🔴 딜러 렌즈(EN 09-17): «short stack 보호 구역»이 아니라 «risk premium이 높다 + 블라인드에 먹힐 만큼 짧으면 예외».
    diffPlusNote: "Nilai ICM di atas persentase chip → risk premium Anda tinggi; stack menengahlah yang harus paling ketat. Pengecualiannya stack yang sudah pendek sampai bisa dihabisi blind — yang dilindungi lebih sedikit",
    diffMinus: "−selisih",
    diffMinusNote: "Nilai ICM di bawah persentase chip → agresi chip leader lebih menguntungkan",
    empty: "Isi stack dan hadiah di atas nol untuk melihat hasil ICM.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Tanpa ante",
    bbAnteOn: "BB ante ON",
    table: "Meja",
    headsUp: "Heads-Up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Skenario",
    sbShove: "SB: shove atau fold",
    bbCall: "BB: call shove",
    position: "Posisi {hint}",
    firstInHint: "(first-in — semua fold ke Anda)",
    effectiveStack: "Stack efektif: {v}",
    captionHuPush: "Hand yang di-shove SB pada {stack}bb",
    captionHuCall: "Hand yang dipakai BB untuk call shove pada {stack}bb",
    captionMw: "Shove first-in dari {pos} di meja {table}-max, {stack}bb",
    withAnte: " (dengan ante)",
    combosSuffix: " / {total} combo",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Diagonal = pair · kanan atas = suited · kiri bawah = offsuit",
      p1: "Grid diurutkan berdasarkan ",
      strong2: "nilai kartu, bukan kekuatan",
      p2: ", jadi sel yang disorot dan tidak disorot berselang-seling dalam satu baris itu wajar — AQo, KQo, dan QQ bersebelahan tetapi tidak berurutan menurut kekuatan. A5s masuk sementara A6s tidak juga benar: A5s membentuk",
      strong3: "wheel straight (A-2-3-4-5)",
      p3: ", yang lebih berharga daripada kicker yang sedikit lebih tinggi.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Keseimbangan Nash, heads-up (SB vs BB)",
      p1: ": SB diasumsikan hanya shove atau fold. Pengaturan ante menambah 0,125bb per pemain (setara big blind ante, ≈12,5%). Range melebar saat stack makin pendek — dan di bawah ~3-4bb BB justru benar call ",
      em: "lebih lebar",
      p2: " daripada range shove SB, karena pot odds.",
    },
    mwNote: {
      strong: "Chart shove first-in {table}-max",
      p1: ": semua pemain di depan sudah fold dan Anda hanya shove atau fold. Ini keseimbangan ala Nash ",
      strong2: "murni chip-EV",
      p2: " — range call para pemain di belakang dihitung serentak — dengan pendekatan standar bahwa pot yang di-call diselesaikan heads-up melawan caller pertama (pot dengan lebih dari satu caller diabaikan). Range melebar saat pemain di belakang Anda makin sedikit (UTG → BTN → SB), saat stack makin pendek, dan saat ante ON (0,125bb per pemain). Karena murni chip-EV, range 10bb dari posisi awal (UTG/MP) keluar lebih ketat daripada patokan umum (pair kecil fold) — sesuaikan dengan ICM dan lawan dalam praktik.",
    },
    readMore: "Untuk dasar-dasar short stack, baca",
    shortStackLink: { slug: "holdem-short-stack", text: "panduan strategi short stack" },
    readMoreEnd: " kami.",
  },

  icmGuide: {
    bubble: {
      badge: "Panduan ICM",
      h2: "Cara memakai kalkulator ICM — contoh bubble 3 menit",
      intro: "Misalkan tersisa empat pemain dan tiga yang dibayar (bubble). Stack-nya 60.000 / 40.000 / 30.000 / 20.000 dan hadiahnya $500 / $300 / $200. Masukkan ke kalkulator, dan Anda mendapat persentase chip tiap pemain dibandingkan nilai hadiah sebenarnya (ICM):",
      th: { player: "Pemain", chipPct: "Chip %", icmPct: "ICM %", diff: "Selisih" },
      rows: [
        { player: "🥇 Chip leader", chip: "40,0%", icm: "33,3%", diff: "-6,7 poin", up: false },
        { player: "🥈 Ke-2", chip: "26,7%", icm: "27,2%", diff: "+0,6 poin", up: true },
        { player: "🥉 Ke-3", chip: "20,0%", icm: "22,9%", diff: "+2,9 poin", up: true },
        { player: "Ke-4 (short stack)", chip: "13,3%", icm: "16,6%", diff: "+3,3 poin", up: true },
      ],
      keyPoint: {
        text: "Intinya: {b1} sebesar 6,7 poin. Karena menang hanya membayar hadiah juara 1, nilai hadiah yang didapat leader dari sebuah coin flip lebih kecil daripada yang ditunjukkan jumlah chipnya. Jadi di bubble, leader sebaiknya {b2}, sedangkan short stack (13,3% chip → 16,6% ICM) bernilai lebih dari chipnya dan sebaiknya {b3} untuk melindungi nilai bertahan itu.",
        b1: "nilai ICM chip leader (33,3%) lebih rendah daripada persentase chipnya (40%)",
        b2: "menekan short stack",
        // 🔴 EN 09-17 + zh 2차 교열: 조건절(«블라인드에 먹히기 직전이면 예외»)을 목적절 앞에 둔다.
        b3: "memilih spot ketimbang asal call all-in — kecuali blind sudah hampir menghabisinya",
      },
    },
    deal: {
      // ★2026-09-19 예시 교체 — 옛 예시(50/30/20 · $1.500 · 618/485/397)는 `lib/posts-id/holdem-icm.ts`의
      //   «ICM deal vs chip chop» 표와 동일해 카니발이었다(EN 09-17 SEO 렌즈 선례).
      //   새 예시 = 4명 · 45/25/18/12 · $2.300(1.000/600/400/300) · 정본 scripts/calc-icm-example.ts.
      badge: "Kalkulator chop ICM",
      h2: "Kalkulator chop ICM — berapa sebenarnya nilai deal meja final",
      intro: "Tersisa empat pemain dan mereka membahas deal. Stack-nya 450.000 / 250.000 / 180.000 / 120.000 (45% / 25% / 18% / 12%) dan sisa hadiahnya $2.300, dibayar $1.000 / $600 / $400 / $300. Masukkan ke kalkulator ICM di atas, dan kolom Chip chop-nya menaruh kedua angka bersebelahan:",
      th: { player: "Pemain", chop: "Chip chop", icm: "ICM deal", diff: "Selisih" },
      rows: [
        { player: "🥇 Chip leader (45%)", chop: "$1.035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 Ke-2 (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 Ke-3 (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "Ke-4 (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "Chip chop mentah membagi berdasarkan persentase chip dan {b1}; ICM deal mencerminkan peluang tiap pemain finis di tiap posisi dan {b2}. Di atas, stack terpendek mendapat $276 menurut chip tetapi $458 menurut ICM — {b3}. Hitung kedua angka sebelum Anda mulai berunding. Yang disebut chip chop di ruangan sering kali sebenarnya save-and-chop — semua orang lebih dulu dibayar sebesar hadiah berikutnya yang akan keluar (di sini $300 untuk posisi ke-4), dan hanya sisanya yang dibagi menurut chip — dan hasilnya mendekati ICM, bukan pembagian mentah di kolom ini. ICM juga mengasumsikan skill yang setara dan mengabaikan siapa yang memasang blind berikutnya, jadi wajar kalau stack besar menawar di atas angka ICM-nya.",
        b1: "menguntungkan chip leader",
        b2: "lebih adil bagi short stack",
        b3: "$182 lebih banyak",
      },
      linkLead: "Model di balik angka-angka ini, lengkap dengan bubble factor dan etika deal, ada di",
      link: { slug: "holdem-icm", text: "Apa Itu ICM di Poker?" },
    },
  },

  // ★2026-09-19 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(09-17) · EN과 동일.
  //   손으로 고치지 마라. 구분자만 인니식(소수 `,` · 천단위 `.`).
  quickRef: [
    {
      badge: "Referensi cepat",
      h2: "Referensi kalkulator equity — matchup all-in preflop",
      intro: "Equity saat dua hand all-in preflop, dirata-ratakan dari semua kombinasi jenis kartu pada matchup itu (dihitung offline: seluruh 1.712.304 board untuk masing-masing). Kombinasi tertentu bisa meleset sekitar satu poin — masukkan kartu persisnya di kalkulator equity di atas.",
      th: ["Matchup", "Hand A", "Hand B", "Seri"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81,9%", "18,1%", "0,5%"],
        ["AA vs AKs", "87,9%", "12,1%", "1,3%"],
        ["AA vs 87s", "77,5%", "22,5%", "0,3%"],
        ["AA vs 72o", "88,2%", "11,8%", "0,4%"],
        ["KK vs AKs", "65,9%", "34,1%", "0,8%"],
        ["QQ vs AKo", "56,8%", "43,2%", "0,4%"],
        ["QQ vs AKs", "54,0%", "46,0%", "0,4%"],
        ["JJ vs TT", "82,0%", "18,0%", "0,4%"],
        ["TT vs A9o", "72,2%", "27,8%", "0,4%"],
        ["TT vs 87s", "80,3%", "19,7%", "0,5%"],
        ["22 vs AKo", "52,6%", "47,4%", "0,6%"],
        ["AKo vs AQo", "74,4%", "25,6%", "4,7%"],
        ["AKs vs QJs", "63,5%", "36,5%", "0,5%"],
        ["AKo vs JTs", "59,5%", "40,5%", "0,5%"],
      ],
      note: "Equity adalah bagian rata-rata Anda dari pot, sudah termasuk seri (chop). Pair melawan dua overcard adalah race klasik; pair melawan pair yang lebih tinggi kira-kira underdog 4,5 banding 1. Bagan odds lengkapnya, street demi street, ada di",
      link: { slug: "holdem-probability", text: "Bagan Peluang & Probabilitas Poker" },
      linkTail: ".",
    },
    {
      badge: "Referensi cepat",
      h2: "Pocket ace melawan hand acak — menurut jumlah lawan",
      intro: "Seberapa sering AA menang saat semua all-in preflop melawan N hand acak (Monte Carlo, 8.000.000 runout per baris). Dua caller pertama masing-masing memotong sekitar 10 poin dari As; setelah itu tiap tambahan memotong lebih sedikit.",
      th: ["Lawan", "Equity AA"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85,2%"], ["2", "73,4%"], ["3", "63,8%"], ["4", "55,9%"],
        ["5", "49,2%"], ["6", "43,6%"], ["7", "38,7%"], ["8", "34,6%"],
      ],
      note: "Itu sebabnya As ingin pot heads-up: melawan lima hand acak, starting hand terbaik di Hold'em bukan lagi favorit untuk memenangkan pot (49,2%, sisanya dibagi lima pemain lain). Atur satu lawan ke “Hand acak” di kalkulator equity untuk menguji hand mana pun dengan cara yang sama (bisa sampai tiga lawan). Kenapa hand besar menyusut di pot multiway dibahas di",
      link: { slug: "holdem-equity", text: "Equity Poker Dijelaskan" },
      linkTail: ".",
    },
    {
      badge: "Referensi cepat",
      h2: "Referensi kalkulator outs — peluang draw menurut jumlah outs",
      intro: "Peluang draw Anda jadi: flop → river (dua kartu menyusul), flop → turn (hanya kartu berikutnya), dan turn → river (satu kartu) — nilai persisnya, bersebelahan dengan perkiraan Aturan 4 dan 2. Hitung outs dulu, lalu baca ke samping.",
      th: ["Outs", "Draw umum", "Flop → river", "Flop → turn", "Turn → river", "Aturan 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4,3%", "2,1%", "2,2%", "4% · 2%"],
        ["2", "Pocket pair → set", "8,4%", "4,3%", "4,3%", "8% · 4%"],
        ["3", "Satu overcard", "12,5%", "6,4%", "6,5%", "12% · 6%"],
        ["4", "Gutshot straight", "16,5%", "8,5%", "8,7%", "16% · 8%"],
        ["5", "Pair → two pair atau trips", "20,4%", "10,6%", "10,9%", "20% · 10%"],
        ["6", "Dua overcard", "24,1%", "12,8%", "13,0%", "24% · 12%"],
        ["7", "Set → full house atau quads", "27,8%", "14,9%", "15,2%", "28% · 14%"],
        ["8", "Open-ended straight", "31,5%", "17,0%", "17,4%", "32% · 16%"],
        ["9", "Flush draw", "35,0%", "19,1%", "19,6%", "36% · 18%"],
        ["10", "Gutshot + dua overcard", "38,4%", "21,3%", "21,7%", "40% · 20%"],
        ["11", "Open-ended + satu overcard", "41,7%", "23,4%", "23,9%", "44% · 22%"],
        ["12", "Flush draw + gutshot", "45,0%", "25,5%", "26,1%", "48% · 24%"],
        ["13", "–", "48,1%", "27,7%", "28,3%", "52% · 26%"],
        ["14", "Open-ended + dua overcard", "51,2%", "29,8%", "30,4%", "56% · 28%"],
        ["15", "Flush draw + open-ended", "54,1%", "31,9%", "32,6%", "60% · 30%"],
        ["16", "–", "57,0%", "34,0%", "34,8%", "64% · 32%"],
        ["17", "–", "59,8%", "36,2%", "37,0%", "68% · 34%"],
        ["18", "–", "62,4%", "38,3%", "39,1%", "72% · 36%"],
        ["19", "–", "65,0%", "40,4%", "41,3%", "76% · 38%"],
        ["20", "–", "67,5%", "42,6%", "43,5%", "80% · 40%"],
      ],
      note: "Angka dua kartu hanya berlaku kalau Anda akan melihat kedua kartu tanpa membayar lagi (kondisi all-in). Saat menghadapi satu bet di flop, pakai kolom flop → turn: 9 outs = 19,1%. Overcard adalah outs yang paling tidak bisa diandalkan — melawan hand jadi, memasangkannya sering tetap kalah, jadi potong nilainya. Cara menghitung outs tanpa menghitung ganda ada di",
      link: { slug: "holdem-outs", text: "Cara Menghitung Outs" },
      linkTail: ".",
    },
    {
      badge: "Referensi cepat",
      h2: "Referensi kalkulator pot odds — equity yang Anda butuhkan untuk call",
      intro: "Saat menghadapi bet sebesar ini relatif terhadap pot, inilah equity minimum agar call-nya break-even: call ÷ (pot setelah bet + call). Ditampilkan dua cara — sebagai odds dan sebagai equity yang dituntutnya; kalkulator menampilkan bentuk equity. Bandingkan dengan odds persis draw Anda di tabel outs di atas.",
      th: ["Ukuran bet", "Odds (X : 1)", "Equity dibutuhkan"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ pot", "5 : 1", "16,7%"],
        ["⅓ pot", "4 : 1", "20,0%"],
        ["½ pot", "3 : 1", "25,0%"],
        ["⅔ pot", "2,5 : 1", "28,6%"],
        ["¾ pot", "2,33 : 1", "30,0%"],
        ["Sebesar pot", "2 : 1", "33,3%"],
        ["1,5× pot", "1,67 : 1", "37,5%"],
        ["2× pot", "1,5 : 1", "40,0%"],
        ["3× pot", "1,33 : 1", "42,9%"],
      ],
      note: "Flush draw (35,0% dengan dua kartu menyusul, 19,1% di kartu berikutnya) baru bisa call bet sebesar pot di flop kalau kondisinya all-in. Selain itu, kalkulator implied odds — tombol di tab Pot Odds — menambahkan uang yang Anda harapkan menang belakangan, asalkan lawan masih punya chip di belakang dan hand yang mau membayar; potong nilainya habis-habisan kalau draw Anda bukan ke nut. Cara 10 detik untuk spot mana pun ada di",
      link: { slug: "holdem-pot-odds", text: "Cara Menghitung Pot Odds" },
      linkTail: ".",
    },
    {
      badge: "Referensi cepat",
      h2: "Referensi kalkulator SPR — seberapa kuat hand yang Anda butuhkan",
      intro: "SPR adalah stack efektif ÷ pot saat ini, dan stack efektif adalah yang lebih pendek dari dua stack — batas maksimal chip yang bisa dimenangkan maupun hilang di antara keduanya. Makin rendah SPR, makin besar bagian stack yang sudah terikat dan makin lemah hand yang sudah layak Anda pakai untuk stack off; makin tinggi SPR, makin dekat ke nut hand yang Anda butuhkan untuk pot besar. Baca zonanya sebagai rencana di flop: di board yang basah atau berpasangan, one pair tetaplah one pair.",
      th: ["SPR", "Zona", "Kekuatan hand · aksi"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Committed", "Top pair top kicker atau lebih baik di flop kering: rencanakan memasukkan semuanya — di kedalaman ini justru fold yang sering jadi kesalahan lebih besar"],
        ["4 ≤ SPR < 8", "Fleksibel", "Two pair atau lebih baik untuk value; one pair ambil satu-dua street, lalu pot control"],
        ["8 ≤ SPR < 15", "Mulai deep", "Set ke atas yang main untuk stack; draw dapat tambahan implied odds"],
        ["SPR ≥ 15", "Deep", "Pot besar hanya dengan hand kelas nut — hand jadi yang lemah justru sasaran bluff"],
      ],
      note: "Kalkulator SPR di atas mengubah stack dan pot mana pun menjadi salah satu dari empat zona ini. Untuk range menurut kedalaman stack, lihat",
      link: { slug: "holdem-short-stack", text: "Strategi Short Stack & Push/Fold" },
      linkTail: ".",
    },
    {
      badge: "Referensi cepat",
      h2: "Kalkulator nilai M — lima zona turnamen",
      // 🔴 EN 「the calculator above」는 도구가 9개라 모호했다(§5) → 탭 이름으로 지목한다(zh 선례).
      intro: "M adalah stack Anda ÷ biaya satu orbit (small blind + big blind + semua ante): berapa putaran Anda bisa bertahan tanpa memainkan satu hand pun. Zona ini mengasumsikan meja penuh sembilan atau sepuluh orang; saat meja mengecil, kalikan dulu M dengan (jumlah pemain ÷ 10) — inilah Effective M dari Harrington — sehingga M 10 di meja final enam orang sebenarnya main seperti 6 (tab “M Turnamen” menampilkan M mentah; konversi itu Anda lakukan sendiri).",
      th: ["Zona", "M", "Strategi"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Zona mati", "< 1", "Fold equity sudah habis — shove hand terbaik yang sempat Anda dapat sebelum blind sampai ke Anda, sebisa mungkin saat pot belum dibuka"],
        ["🔴 Zona merah", "1–5", "Push/fold: shove hand bagus Anda, fold sisanya, dan segera double up"],
        ["🟠 Zona oranye", "6–9", "Ketatkan ke hand kuat saja dan cari peluang open-shove"],
        ["🟡 Zona kuning", "10–19", "Tekanan mulai terasa — kumpulkan chip secara agresif di spot yang bagus"],
        ["🟢 Zona hijau", "20+", "Stack nyaman — strategi penuh, permainan posisi, dan bluff"],
      ],
      note: "Kenapa stack turnamen diukur dalam orbit dan blind, bukan dalam chip, dibahas di",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Cash Game vs Turnamen Poker" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Alat",
    h2: "Cara memakai 9 kalkulator Hold'em",
    cards: [
      { icon: "🎲", title: "Kalkulator equity (hand lawan hand)", body: "Masukkan 2–4 hand dan board mana pun untuk mendapat % menang, % seri, dan equity tiap hand. Kalau semua hand diketahui, flop dan turn dihitung satu per satu secara persis; di preflop, atau saat ada lawan dengan hand acak, alat ini mengambil sampel 60.000 runout dan menyebutkannya." },
      { icon: "🎯", title: "Kalkulator outs", body: "Menghitung persis peluang draw Anda jadi di flop atau turn. Lihat jalan pintas Aturan 4 dan 2 serta angka persisnya sekaligus." },
      { icon: "💰", title: "Pot odds & implied odds", body: "Putuskan call atau fold dengan matematika; tombol implied odds menambahkan uang yang Anda harapkan menang di street berikutnya." },
      { icon: "🃏", title: "Penilai hand", body: "Pilih kartu untuk mengecek urutan kartunya. Masukkan hingga 7 kartu dan kombinasi 5 kartu terbaik ditemukan otomatis." },
      { icon: "📊", title: "Kekuatan starting hand", body: "Pilih dua kartu tertutup Anda untuk melihat termasuk yang mana dari 169 hand dan aksi yang disarankan per posisi." },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "Rasio stack terhadap pot memberi tahu seberapa kuat hand yang Anda butuhkan. Makin rendah SPR, makin masuk akal untuk memasukkan seluruh stack dengan hand kuat." },
      { icon: "🏆", title: "Nilai M turnamen", body: "M Harrington mengukur tekanan pada stack turnamen Anda. Strategi Anda berubah total di zona hijau/kuning/oranye/merah/mati." },
      { icon: "📈", title: "Kalkulator ICM", body: "Independent Chip Model mengubah chip turnamen menjadi nilai hadiah sebenarnya, dengan kolom chip chop di sebelahnya — angka di balik keputusan bubble dan perundingan deal meja final." },
      { icon: "⚡", title: "Chart push/fold Nash", body: "Chart Nash 13×13 untuk heads-up, 6-max, dan 9-max: hand mana yang di-open-shove dan hand mana yang dipakai untuk call pada 1–25bb. Perlengkapan wajib untuk fase akhir turnamen." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "FAQ kalkulator ICM & kalkulator Hold'em",
    q: "Q. {q}",
  },

  related: {
    badge: "Lebih dalam",
    h2: "Panduan untuk dibaca setelah angkanya mulai masuk akal",
    // ★2026-09-19 6 → 8 (ICM · short stack 추가). EN과 «개수» 동일이 규율(translation-link-structure-equals-en).
    links: [
      { slug: "holdem-icm", title: "Apa Itu ICM di Poker?", desc: "Chip EV vs EV hadiah, bubble factor, deal" },
      { slug: "holdem-equity", title: "Equity Poker Dijelaskan", desc: "Persen menang, fold equity, dan realisasi" },
      { slug: "holdem-pot-odds", title: "Cara Menghitung Pot Odds", desc: "Ubah spot call/fold menjadi matematika" },
      { slug: "holdem-outs", title: "Cara Menghitung Outs", desc: "Outs per jenis draw dan aturan 4 dan 2" },
      { slug: "holdem-probability", title: "Bagan Peluang & Probabilitas Poker", desc: "Bagan odds lengkap di balik setiap hand" },
      { slug: "holdem-starting-hands-chart", title: "Chart Starting Hands", desc: "Hand mana yang dimainkan per posisi" },
      { slug: "holdem-short-stack", title: "Short Stack & Push/Fold", desc: "Cara memakai chart push/fold dan batasnya" },
      { slug: "holdem-implied-odds", title: "Implied Odds Dijelaskan", desc: "Saat harga buruk pun call-nya tetap benar" },
    ],
  },
};
