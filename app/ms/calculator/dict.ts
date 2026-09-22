// MS (Bahasa Melayu · Malaysia) calculator dictionary — every user-visible string of the shared tool.
//
// ★2026-09-19 재조준 — 근거 docs/keyword-bank/ms-calculator.md.
// 🔴 머리어는 말레이어 «Kalkulator Poker»이고 차별화어는 영어 토큰(Odds · Equity · ICM · Pot Odds)이다.
//    말레이어 도구 어휘는 볼륨 null · 자동완성 0건(22구 전멸)이지만 영어 축(90)은 SERP 20/20이 글로벌 업계라 승산이 없고,
//    말레이어 SERP는 비어 있다(#1이 개인 GitHub Pages · 8개 중 3개가 의도 불일치). 뱅크 §5에 판정 경위.
// 🔴 인도네시아어와 섞지 마라 — 코퍼스 실측: kad 459 : kartu 0 · boleh 409 : bisa 0 · kejohanan 33 : turnamen 0 ·
//    peratus(an) 28 : persen 0 · pusingan 51 : putaran 0 · percuma 52 : gratis 0 (뱅크 §4-A).
//    🔴 세는 기준이 섞여 있다 — kad·boleh는 «단어경계»(raw는 500·430), peratus(an) 28은 «-nya 파생 제외»(포함하면 29),
//    나머지는 부분문자열 raw다. 다음 세션이 다시 셀 때 기준을 맞춰라.
//    구글의 hl=ms 자동완성 DB 자체가 인니어로 오염돼 있다(gimana · remi · kartu) — 그쪽을 근거로 쓰지 마라.
// 도구 용어는 영어 차용이 코퍼스 정본: board 463 : papan 2 · equity 184 : ekuiti 0 · cip 153 : chip 4 ·
//    raise 353 · call 381 · fold 170 · check 336 · draw 244 · stack 177 (뱅크 §4-B).
// 숫자: 소수점 «.» · 천단위 «,» — ms-MY ICU와 일치(코퍼스 용례: 소수점 2,171 · 천단위 쉼표 131 · 진짜 소수 콤마 0.
//    🔴 두 수는 «대비»가 아니라 서로 다른 두 지표다). % 앞 공백 없음(1,599 : 0) → percentGap 미사용.
import type { CalcDict } from "@/components/calculator/dict";

export const CALC_DICT_MS: CalcDict = {
  numberLocale: "ms-MY",

  seo: {
    title: "Kalkulator Poker — Odds, Equity, ICM & Pot Odds",
    description:
      "Kalkulator Texas Hold'em percuma: equity tangan lawan tangan, pot odds, implied odds, outs, kedudukan tangan, SPR, nilai M, deal ICM & chip chop — 9 alat.",
    path: "/ms/calculator",
  },

  hero: {
    badges: ["Alat percuma", "Tanpa daftar"],
    h1: "Kalkulator Poker",
    h1Sub: "Equity, ICM dan pot odds di satu tempat",
    lead: "Masukkan dua tangan dan lihat siapa menang — kemudian semak pot odds, outs, deal ICM, SPR, nilai M kejohanan dan range push/fold. Sembilan kalkulator Hold'em percuma, dengan pengiraan tepat pada setiap street yang cukup pantas untuk dikira satu per satu.",
    chips: ["🎲 Equity", "🎯 Outs", "💰 Pot Odds", "🃏 Kedudukan Tangan", "📊 Tangan Permulaan", "📐 SPR", "🏆 Nilai M", "📈 ICM", "⚡ Push/Fold"],
  },

  equity: {
    label: "Equity", sub: "Tangan lawan tangan",
    hero: "Tangan anda",
    opp: "Lawan {n}",
    random: "Tangan rawak",
    board: "Board",
    pickerHint: "Pilih satu pemain atau board, kemudian pilih kadnya.",
    addPlayer: "+ Tambah lawan", removePlayer: "− Buang lawan",
    needTwo: "Beri setiap tangan 2 kad (atau tandakan seorang lawan sebagai tangan rawak).",
    boardCount: "Biarkan board kosong untuk preflop, atau beri 3 (flop), 4 (turn) atau 5 (river) kad.",
    th: { player: "Pemain", hand: "Tangan", win: "Menang", tie: "Seri", equity: "Equity" },
    exactNote: "Tepat — kesemua {n} runout yang mungkin dikira satu per satu.",
    mcNote: "Monte Carlo — {n} runout rawak; keputusan berbeza kira-kira ±0.3 mata peratusan antara larian.",
    winner: "{p} menang dengan {hand}",
    chop: "Seri — {n} tangan berkongsi pot dengan {hand}",
    showdownNote: "Showdown — board sudah lengkap, jadi ini keputusan muktamad.",
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
    hand: { label: "Kedudukan Tangan", sub: "Pilih kad" },
    starting: { label: "Tangan Permulaan", sub: "Kekuatan open" },
    spr: { label: "SPR", sub: "Nisbah stack/pot" },
    m: { label: "M Kejohanan", sub: "Nilai M" },
    icm: { label: "ICM", sub: "Equity hadiah" },
    pushfold: { label: "Push/Fold", sub: "Carta Nash" },
  },

  workspace: {
    chooseCalculator: "Pilih kalkulator",
    resetInputs: "Set semula input",
    resetAria: "Set semula {label}",
    resetMessage: "Input {label} telah diset semula.",
  },

  cardPicker: {
    clearAll: "Kosongkan semua",
  },

  outs: {
    drawType: "Jenis draw",
    presets: [
      { label: "Input tersuai" },
      { label: "Flush draw", desc: "4 kad satu suit → perlukan kad ke-5 (9 outs sama ada ia nut flush atau tidak)" },
      { label: "Open-ended straight draw (OESD)", desc: "cth. 5-6-7-8, perlukan 4 atau 9" },
      { label: "Kombo flush + gutshot", desc: "9 flush + 3 gutshot (pertindihan dibuang)" },
      { label: "Gutshot straight", desc: "cth. 5-6-8-9, perlukan 7 sahaja" },
      { label: "Dua overcard", desc: "2 rank yang lebih tinggi daripada mana-mana kad di board × 3 setiap satu — potong banyak apabila menghadapi made hand: memasangkan satu overcard pun selalunya masih kalah" },
      { label: "Two pair → full house", desc: "cth. A-K pada board A-K-x → tinggal 2 ace + 2 king" },
      { label: "Pair → trips", desc: "tinggal 2 kad rank itu" },
      { label: "Flush + OESD (monster)", desc: "9 flush + 8 straight (2 bertindih)" },
    ],
    outsSuffix: " ({n} outs)",
    street: "Street",
    afterFlopBtn: "🃏 Flop → river",
    afterTurnBtn: "🔄 Turn → river",
    flopOneBtn: "🎯 Flop → turn",
    afterFlopOne: "Flop → turn",
    chanceFlopOne: "Peluang mengena pada kad seterusnya daripada flop",
    outsCount: "Bilangan outs: {v}",
    afterFlop: "Flop → river",
    afterTurn: "Turn → river",
    ruleOf4: "Peraturan 4",
    ruleOf2: "Peraturan 2",
    chanceFlop: "Peluang draw lengkap menjelang river daripada flop (kedua-dua kad — satu all-in)",
    chanceTurn: "Peluang draw lengkap pada river daripada turn",
    exact: " (tepat)",
    ruleMental: "Peraturan {n} (kira dalam kepala):",
    exactNote: "Nombor yang dipaparkan dalam saiz besar itu ialah angka yang tepat",
    verdict: { great: "Hebat 🔥", good: "Bagus ✅", fair: "Sederhana ⚠️", poor: "Lemah ❌", veryPoor: "Sangat lemah 💀" },
  },

  pot: {
    potSize: "Saiz pot (termasuk bet yang anda hadapi)",
    callAmount: "Jumlah call anda",
    potOddsCaption: "Pot odds (equity minimum yang diperlukan)",
    orHigher: "— dengan equity lebih daripada ini, call itu menguntungkan",
    equityLabel: "Equity tangan anda: {v}",
    sliderGutshot: "Gutshot 8.7%",
    sliderFlush: "Flush 19.6%",
    impliedToggle: "Implied odds {toggle}",
    close: "Tutup ▲",
    add: "Tambah ▼",
    extraWinnings: "Jangkaan kemenangan tambahan (jika draw lengkap): {v}",
    none: "Tiada",
    impliedCaption: "Implied odds (dengan kemenangan tambahan)",
    impliedNote: "Equity minimum yang diperlukan, dikira dengan {n} tambahan",
    needImplied: "implied odds {n}%",
    needPot: "pot odds {n}%",
    verdict: {
      call: { title: "Call (menguntungkan)", body: "Equity anda {eq}% > {need} → untung dalam jangka panjang" },
      even: { title: "Pulang modal (EV 0)", body: "Equity anda {eq}% = {need} → call tidak untung dan tidak rugi. Putuskan berdasarkan faktor di luar pot odds, seperti posisi dan gaya lawan" },
      fold: { title: "Fold disyorkan", body: "Equity anda {eq}% < {need} → rugi dalam jangka panjang" },
    },
  },

  handEval: {
    pickerLabel: "Pilih kad (5–7)",
    emptyTitle: "Pilih 5 kad atau lebih untuk menilai tangan",
    emptyHint: "Dengan 7 kad, gabungan 5 kad terbaik dicari secara automatik",
    bestFrom: "Tangan terbaik daripada {n} kad",
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
    pickerLabel: "Pilih 2 kad tangan anda",
    emptyPrompt: "Pilih 2 kad tangan anda",
    // ★2026-09-19 — 폴백은 표 밖 122핸드 «전부»를 받는다(calculator-tool.tsx HAND_TABLE 47 + 폴백). EN 한 줄은
    //   72o·J2o까지 오픈으로 읽히고, «전부 폴드»는 A9o·K9o를 죽인다 → id가 쓴 3분기가 전파안(브리프 §5 id ⓑ).
    //   🔴 id 문안을 그대로 옮기면 안 된다(2차 교열 09-19): ① id의 «두 장의 브로드웨이» 절은 **공집합**이다 —
    //      오프수트 브로드웨이 10개가 전부 HAND_TABLE 안이다 ② 그래서 ace-offsuit만 남기면 **K9o·Q9o가 무조건 fold**가 되는데
    //      A2o는 «BTN 허가»라 **분기 간 서열이 역전**된다 → 2분기를 «ace offsuit 또는 두 장의 높은 카드»로 넓혔다
    //      ③ 1분기의 «suited»·«connected»·«아주 낮은»은 **수치 경계**로 못박았다(안 그러면 97s·86s·75s가 미분류로 남는다).
    // 🔴 09-20 EN 정본으로 교체 — ms·hi의 «둘째 카드 6 이상 + connector/one-gapper 3 이상» 이중 조건은 43s·53s·64s·75s를
    //    «3 이상 오픈»과 «2–5 폴드» **두 절에 동시에** 걸리게 했다(hi 회차가 못 잡은 자기모순). EN이 «kad kecil 3 ke atas»
    //    한 조건으로 다시 썼고, CO는 «6 ke atas»로 좁혀 10-3s·93s의 CO 오픈 누수를 닫았다.
    //    Tier 5 단서는 뺐다 — 코드가 폴백 티어를 계산하므로(calculator-tool.tsx fallbackTier) 더는 참이 아니다.
    unknownDesc: "Tiada dalam carta open teras",
    unknownAction: "Suited: apabila semua fold kepada anda, open mana-mana tangan suited dari BTN; dari CO hadkan kepada king suited, dua kad 8 ke atas (Q8s, 10-8s), dan connector sehingga 54s. Offsuit: BTN sahaja — mana-mana ace (A9o, A5o) atau dua kad 9 ke atas (K9o, 10-9o). Selainnya (J2o, 93o, 72o): fold",
    tierNames: ["🥇 Tier 1 — Premium", "🥈 Tier 2 — Kuat", "🥉 Tier 3 — Boleh dimainkan", "⚠️ Tier 4 — Marginal", "🚫 Tier 5 — Lemah"],
    recommendedAction: "Tindakan disyorkan:",
    axis: ["Premium", "Kuat", "Boleh dimainkan", "Marginal", "Lemah"],
    summaryTitle: "Ringkasan tier tangan",
    summary: [
      { hands: "AA KK QQ JJ 10-10 AKs AKo", action: "Sentiasa raise" },
      { hands: "AQs AJs A10s KQs KJs 99 88 AQo", action: "Raise dari kebanyakan posisi" },
      { hands: "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s", action: "Raise dari posisi lewat" },
      { hands: "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s", action: "Pilih-pilih di posisi lewat" },
      { hands: "tangan offsuit yang lemah (J2o, 93o, 72o)", action: "Biasanya fold" },
    ],
    // ★2026-09-19 «오픈 림프로 읽히는 자리»를 전수 정리했다. ✅ EN KQo는 2026-09-20에, EN 88·77은 2026-09-21(회차 Q10)에 정정됐다.
    // 🔴 단 브리프 §5 id ⓐ의 근거 「EP에는 앞선 레이즈가 있을 수 없다」는 **UTG에만 참이다** — MP·EP+1은 UTG 레이즈를
    //    마주할 수 있다. 그래서 처방은 «call을 없애는 것»이 아니라 **«무엇에 대한 call인지 명시 + 오픈 림프 금지»**다.
    //    선례 7로케일(ja·zh·zh-hant·es·pt·fr·id)이 전부 그렇게 풀었고 ms도 같은 형을 쓴다(de도 09-20에 합류).
    //    EN이 이미 림프를 배제한 자리는 EN 그대로 따른다 — 축어는 셋으로 갈린다:
  //    1010 «do not open-limp» · AJs·KJs «raise or fold» · A10s·Q10s «fold from EP».
    hands: {
      AA: { desc: "Tangan terbaik. Raise dalam setiap spot", action: "Sentiasa raise/re-raise (3-bet)" },
      KK: { desc: "Hanya perlu berjaga-jaga dengan ace di flop", action: "Sentiasa raise/re-raise" },
      QQ: { desc: "Lebih kuat daripada JJ, tetapi jangan terlebih nilai", action: "Sentiasa raise; berhati-hati apabila deep" },
      JJ: { desc: "Berjaga-jaga dengan overcard di flop", action: "Raise dari mana-mana posisi" },
      "1010": { desc: "Hilang nilai apabila overcard muncul di flop", action: "Raise dari mana-mana posisi — jangan open-limp" },
      AKs: { desc: "Tangan drawing terbaik. Besarkan pot", action: "Sentiasa raise/re-raise" },
      AKo: { desc: "Lebih lemah daripada AKs tetapi masih premium", action: "Sentiasa raise; boleh call re-raise" },
      AQs: { desc: "Tangan kuat; lebih bernilai dalam posisi", action: "Raise dari kebanyakan posisi" },
      AJs: { desc: "Hebat di BTN/CO, lemah dari UTG", action: "Raise di posisi tengah/lewat; dari UTG raise atau fold — jangan limp" },
      A10s: { desc: "Antara suited ace teratas", action: "Raise di posisi lewat; fold dari posisi awal melainkan mejanya pasif" },
      KQs: { desc: "Potensi flush tinggi + straight draw", action: "Raise dari kebanyakan posisi" },
      KJs: { desc: "Tangan drawing yang kuat", action: "Raise di posisi lewat; dari posisi awal raise atau fold — jangan limp" },
      "99": { desc: "Pair sederhana, berjaga-jaga dengan flop overcard", action: "Raise dari kebanyakan posisi; berhati-hati apabila deep" },
      "88": { desc: "Pocket pair dengan potensi set yang baik", action: "Raise di posisi lewat; di posisi awal call raise, dan jika anda first in, raise atau fold — jangan open-limp" },
      AQo: { desc: "Offsuit lebih lemah; posisi penting", action: "Raise di posisi tengah/lewat" },
      AJo: { desc: "Lemah di posisi awal, kuat di posisi lewat", action: "Raise di CO/BTN, berhati-hati di posisi awal" },
      KQo: { desc: "Connector offsuit teratas", action: "Raise di posisi lewat; di posisi awal, jika belum ada yang masuk raise atau fold, dan biasanya fold apabila menghadapi raise" },
      K10s: { desc: "Suited king, kuat di posisi lewat", action: "Raise di posisi lewat, fold di posisi awal" },
      QJs: { desc: "Draw dua hala yang kuat", action: "Raise di posisi lewat, lebih bernilai apabila deep" },
      J10s: { desc: "Antara suited connector terbaik", action: "Raise di posisi lewat; call satu raise apabila anda ada posisi" },
      "109s": { desc: "Suited connector yang kuat", action: "Raise first in dari posisi lewat; call satu raise dengan posisi" },
      "77": { desc: "Tangan untuk cari set, berjaga-jaga dengan overcard", action: "Raise di posisi lewat; di posisi awal call raise, dan jika anda first in, raise atau fold — jangan open-limp" },
      A9s: { desc: "Suited ace dengan potensi flush", action: "Raise di posisi lewat" },
      "66": { desc: "Cari set; perlukan implied odds", action: "Raise first in dari posisi lewat; call raise apabila anda dan pemain yang raise itu masing-masing ada sekurang-kurangnya ~15× saiz call di belakang" },
      "55": { desc: "Kurang nilai tanpa set", action: "Raise first in dari posisi lewat; call satu raise di posisi lewat apabila anda dan pemain yang raise itu masing-masing ada sekurang-kurangnya ~15× saiz call di belakang" },
      A8s: { desc: "Suited ace sederhana", action: "Main di posisi lewat, fold di posisi awal" },
      A7s: { desc: "Suited ace sederhana", action: "Main di posisi lewat sahaja" },
      A6s: { desc: "Suited ace sederhana", action: "Main di posisi lewat sahaja" },
      A5s: { desc: "Nilai wheel + ace-blocker; bluff 3-bet kegemaran", action: "Posisi lewat sahaja; implied odds penting" },
      A4s: { desc: "Suited ace dengan wheel draw", action: "Posisi lewat sahaja" },
      A3s: { desc: "Kad wheel + nut flush draw, setingkat di atas A2s", action: "BTN/SB sahaja" },
      A2s: { desc: "Wheel + nut flush, tetapi lemah", action: "BTN sahaja" },
      KJo: { desc: "Risiko didominasi; posisi lewat sahaja", action: "Raise di CO/BTN, fold jika di-re-raise" },
      QJo: { desc: "Sambungan sederhana; perlukan posisi", action: "Posisi lewat sahaja" },
      "98s": { desc: "Suited connector yang kuat", action: "Raise first in dari posisi lewat; call raise dengan posisi" },
      "87s": { desc: "Suited connector yang baik", action: "Raise first in dari posisi lewat; call raise dengan posisi" },
      "76s": { desc: "Suited connector", action: "Raise first in dari posisi lewat; call raise hanya dengan posisi dan stack deep" },
      "44": { desc: "Hampir tiada nilai tanpa set", action: "Raise first in dari posisi lewat; call satu raise di posisi lewat apabila anda dan pemain yang raise itu masing-masing ada sekurang-kurangnya ~15× saiz call di belakang" },
      "33": { desc: "Perlu cari set; spekulatif", action: "Raise first in dari posisi lewat; selain itu pot multiway dengan stack deep sahaja" },
      "22": { desc: "Pocket pair paling rendah", action: "Raise first in dari posisi lewat; selain itu pot multiway dengan stack deep sahaja" },
      K10o: { desc: "K-10 offsuit, lemah", action: "Sekali-sekala dari BTN" },
      Q10o: { desc: "Offsuit dengan sambungan rendah", action: "BTN sahaja" },
      J10o: { desc: "Offsuit yang boleh tahan tetapi mudah diserang", action: "Sekali-sekala dari BTN" },
      Q10s: { desc: "Suited broadway yang kuat, bagus dimainkan dalam posisi", action: "Raise di posisi lewat; fold dari posisi awal" },
      A10o: { desc: "Ace offsuit marginal, mudah didominasi", action: "Posisi lewat sahaja" },
      "65s": { desc: "Suited connector; mahukan multiway/implied odds", action: "Raise first in dari posisi lewat; call raise hanya dengan posisi dan stack deep" },
      "54s": { desc: "Suited connector rendah; spekulatif", action: "Raise first in dari posisi lewat; call raise hanya dengan posisi dan di pot multiway yang murah" },
    },
  },

  spr: {
    effectiveStack: "Stack efektif (yang lebih pendek antara dua stack)",
    potSize: "Saiz pot semasa",
    caption: "SPR (Stack-to-Pot Ratio)",
    stackDivPot: "stack ÷ pot",
    zones: {
      low: {
        label: "SPR rendah (komited)",
        desc: "Sebahagian besar pot sudah masuk. Dengan top pair top kicker atau lebih baik pada flop yang kering, rancang untuk memasukkan bakinya — pada kedalaman ini fold selalunya kesilapan yang lebih besar. Pada board berpasangan, tiga-flush atau tiga-straight, atau apabila menghadapi aksi yang hanya set atau straight boleh buat, satu pair tetap satu pair.",
        actions: [["TPTK+", "Pertimbangkan all-in"], ["Draw", "Pot odds wajib dikira"], ["Tangan lemah", "Fold dengan berhati-hati"]],
      },
      mid: {
        label: "SPR sederhana (fleksibel)",
        desc: "Ini zon untuk bermain tangan kuat seperti two pair atau lebih baik. Melindungi stack anda menjadi penting.",
        actions: [["Two pair+", "Value bet"], ["Satu pair", "Satu atau dua street, kemudian kawal saiz pot"], ["Draw", "Semi-bluff apabila ada fold equity; lepaskan apabila tiada"]],
      },
      high: {
        label: "SPR tinggi (semakin deep)",
        desc: "Stack semakin deep. Draw dan made hand yang kuat naik nilai relatifnya.",
        actions: [["Set+", "Main dengan kuat"], ["Draw", "Implied odds meningkat"], ["Satu pair/TPTK", "Teruskan dengan berhati-hati"]],
      },
      deep: {
        label: "SPR sangat tinggi (deep)",
        desc: "Ini permainan deep stack. Posisi, potensi draw dan pembacaan range lawan sangat penting.",
        actions: [["Tangan nut", "Boleh bet besar"], ["Draw", "Implied odds sangat tinggi"], ["Made hand lemah", "Hati-hati, mudah di-bluff"]],
      },
    },
    legend: ["Komited", "Fleksibel", "Semakin deep", "Deep"],
  },

  m: {
    inputs: { stack: "Stack anda", bb: "Big blind", sb: "Small blind", ante: "Ante" },
    players: "Pemain di meja: {v}",
    headsUp: "2 (heads-up)",
    orbitCaption: "Kos satu pusingan (blind setiap pusingan meja)",
    orbitFormula: "BB {bb} + SB {sb} + ante {ante}×{players}",
    mCaption: "Nilai M (M Harrington)",
    zones: {
      // ★2026-09-19 «tangan terbaik yang sampai ke tangan anda» — EN "the best live hand you see"는 «받는 패 중 쓸 만한 것»이지
      //   «프리미엄을 기다려라»가 아니다(브리프 §3-E 4번). 「아직 아무도 열지 않은 자리(first in)를 택하라」 절도 EN 정본에 있다.
      dead: { name: "💀 Zon mati", desc: "Fold equity sudah habis — all-in ialah satu-satunya langkah, jadi shove tangan terbaik yang sampai kepada anda sebelum blind menghampiri, dan utamakan spot yang potnya belum dibuka sesiapa.", action: "All-in sekarang" },
      red: { name: "🔴 Zon merah", desc: "Anda perlu double up segera. Gunakan strategi push/fold — shove tangan yang bagus, fold selebihnya.", action: "Push/fold" },
      orange: { name: "🟠 Zon oren", desc: "Stack anda semakin susut. Ketatkan range kepada tangan kuat sahaja dan cari peluang untuk open-shove.", action: "Range ketat" },
      yellow: { name: "🟡 Zon kuning", desc: "Tekanan sudah terasa. Anda perlu aktif mengumpul cip — main agresif apabila spot yang baik muncul.", action: "Main agresif" },
      green: { name: "🟢 Zon hijau", desc: "Stack anda selesa. Gunakan strategi sepenuhnya — besarkan stack dengan permainan posisi dan bluff.", action: "Strategi penuh" },
    },
  },

  icm: {
    introStrong: "ICM (Independent Chip Model)",
    introRest: " menukar stack kejohanan kepada jangkaan wang hadiah mengikut ICM. Untuk memilih call atau fold, darab nilai anda selepas setiap hasil yang mungkin (menang, seri atau kalah) dengan kebarangkalian sebenarnya, kemudian bandingkan jumlahnya dengan nilai selepas fold. Apabila bust, kira hadiah yang benar-benar diterima, bukan secara automatik sifar.",
    numPlayers: "Bilangan pemain",
    paidPlaces: "Kedudukan yang dibayar",
    stacksTitle: "Stack cip pemain",
    total: "jumlah {n}",
    decStack: "Kurangkan stack pemain {n}",
    stackInput: "Stack cip pemain {n}",
    incStack: "Tambah stack pemain {n}",
    prizesTitle: "Hadiah",
    decPrize: "Kurangkan hadiah tempat ke-{n}",
    prizeInput: "Hadiah tempat ke-{n}",
    incPrize: "Tambah hadiah tempat ke-{n}",
    currencyNote: "Masukkan jumlah hadiah dalam mana-mana unit mata wang.",
    resultTitle: "Hasil ICM",
    th: { player: "Pemain", chips: "Cip", chipPct: "Cip %", icmValue: "Nilai ICM", icmPct: "ICM %", diff: "Beza", chop: "Chip chop" },
    playerCell: "{medal} P{n}",
    diffPlus: "+beza",
    diffPlusNote: "Bahagian prize pool anda mengikut ICM lebih tinggi daripada bahagian cip anda. Tanda perbezaan sahaja tidak menentukan sama ada anda patut call atau fold.",
    diffMinus: "−beza",
    diffMinusNote: "Bahagian prize pool anda mengikut ICM lebih rendah daripada bahagian cip anda. Tanda perbezaan sahaja tidak menentukan sama ada agresi menguntungkan.",
    diffUnit: "pp",
    empty: "Gunakan stack dan hadiah positif, dengan hadiah disusun daripada tertinggi ke terendah; hadiah sama dibenarkan.",
  },

  pushfold: {
    ante: "Ante",
    noAnte: "Tiada ante",
    bbAnteOn: "BB ante ON",
    table: "Meja",
    headsUp: "Heads-Up",
    sixMax: "6-max",
    nineMax: "9-max",
    scenario: "Senario",
    sbShove: "SB: shove atau fold",
    bbCall: "BB: call shove",
    position: "Posisi {hint}",
    firstInHint: "(first-in — semua fold kepada anda)",
    effectiveStack: "Stack efektif: {v}",
    captionHuPush: "Tangan yang SB shove pada {stack}bb",
    captionHuCall: "Tangan yang BB call shove pada {stack}bb",
    captionMw: "Shove first-in dari {pos} di meja {table}-max, {stack}bb",
    withAnte: " (dengan ante)",
    combosSuffix: " / {total} kombo",
    legendPush: "Push (all-in)",
    legendCall: "Call",
    legendFold: "Fold",
    note: {
      strong1: "Pepenjuru = pair · kanan atas = suited · kiri bawah = offsuit",
      p1: "Grid disusun mengikut ",
      strong2: "rank, bukan kekuatan",
      p2: ", jadi sel yang diserlahkan dan tidak diserlahkan berselang-seli dalam satu baris memang dijangka — AQo, KQo dan QQ bersebelahan tetapi bukan dalam susunan kekuatan. A5s masuk sedangkan A6s tidak juga betul: A5s membentuk",
      strong3: "wheel straight (A-2-3-4-5)",
      p3: ", yang mengatasi kicker yang lebih rendah.",
    },
    cellTitle: "{hand} — {action}",
    cell: { push: "push", call: "call", fold: "fold" },
    huNote: {
      strong: "Keseimbangan Nash, heads-up (SB lawan BB)",
      p1: ": SB diandaikan sama ada shove atau fold. Tetapan ante menambah 0.125bb setiap pemain (bersamaan big blind ante, ≈12.5%). Range melebar apabila stack semakin pendek — dan di bawah ~3-4bb, BB betul untuk call ",
      em: "lebih luas",
      p2: " daripada range shove SB, kerana pot odds.",
    },
    mwNote: {
      strong: "Carta shove first-in {table}-max",
      p1: ": semua pemain di hadapan sudah fold dan anda sama ada shove atau fold. Ia keseimbangan gaya Nash ",
      strong2: "chip-EV tulen",
      p2: " — range call pemain di belakang diselesaikan serentak — dengan anggaran standard bahawa pot yang di-call diselesaikan secara heads-up lawan caller pertama (pot dengan lebih daripada seorang caller diabaikan). Range melebar apabila makin sedikit pemain tinggal di belakang anda (UTG → BTN → SB), apabila stack semakin pendek, dan apabila ante ON (0.125bb setiap pemain). Kerana ia chip-EV tulen, range 10bb dari posisi awal (UTG/MP) keluar lebih ketat daripada peraturan umum yang popular (pair kecil fold) — sesuaikan dengan ICM dan lawan dalam permainan sebenar.",
    },
    readMore: "Untuk asas tekanan stack dan ICM dalam kejohanan, baca",
    shortStackLink: { slug: "holdem-tournament-vs-cash-game", text: "perbandingan tournament dan cash game kami" },
    readMoreEnd: ".",
  },

  icmGuide: {
    bubble: {
      badge: "Panduan ICM",
      h2: "Cara menggunakan kalkulator ICM — contoh bubble 3 minit",
      intro: "Katakan empat pemain tinggal dan tiga dibayar (bubble). Stack ialah 60,000 / 40,000 / 30,000 / 20,000 dan hadiahnya $500 / $300 / $200. Masukkan angka itu ke dalam kalkulator dan anda dapat bahagian cip setiap pemain berbanding nilai hadiah sebenar (ICM):",
      th: { player: "Pemain", chipPct: "Cip %", icmPct: "ICM %", diff: "Beza" },
      rows: [
        { player: "🥇 Chip leader", chip: "40.0%", icm: "33.3%", diff: "-6.7 mata", up: false },
        { player: "🥈 Ke-2", chip: "26.7%", icm: "27.2%", diff: "+0.6 mata", up: true },
        { player: "🥉 Ke-3", chip: "20.0%", icm: "22.9%", diff: "+2.9 mata", up: true },
        { player: "Ke-4 (short stack)", chip: "13.3%", icm: "16.6%", diff: "+3.3 mata", up: true },
      ],
      // ★2026-09-19 조건절을 text로 앞당겼다 — EN은 b3 끝에 「unless the blinds…」가 붙어 뒤의 목적절과 어긋난다(브리프 §5).
      keyPoint: {
        text: "Jadual menunjukkan {b1}, dengan perbezaan 6.7 mata peratusan; ini bukan ambang call/fold. Stack sederhana sering menanggung risk premium tertinggi, jadi leader yang meliputi stack mereka boleh {b2} jika range membenarkannya. Short stack patut {b3}. Keputusan bergantung pada stack, hadiah dan lawan, bukan tanda perbezaan sahaja.",
        b1: "nilai ICM chip leader (33.3%) lebih rendah daripada bahagian cipnya (40%)",
        b2: "menekan stack sederhana",
        b3: "memilih call dengan teliti, kecuali stack yang hampir dihabiskan blind",
      },
    },
    deal: {
      // ★2026-09-19 EN 09-17 예시로 교체(4명 · 45/25/18/12 · $2,300) — 옛 예시(3명 · 50/30/20 · $1,500)는 EN이 카니발 때문에 폐기했다.
      //   수치는 scripts/calc-icm-example.ts 출력 = EN 그대로(§13).
      badge: "Kalkulator deal ICM",
      h2: "Kalkulator deal ICM — berapa sebenarnya nilai satu deal di final table",
      intro: "Empat pemain tinggal dan sedang berbincang tentang deal. Stack ialah 450,000 / 250,000 / 180,000 / 120,000 (45% / 25% / 18% / 12%) dan baki hadiah $2,300, dibayar $1,000 / $600 / $400 / $300. Masukkan angka itu ke dalam kalkulator ICM di atas dan lajur Chip chopnya meletakkan kedua-dua nombor bersebelahan:",
      th: { player: "Pemain", chop: "Chip chop", icm: "Deal ICM", diff: "Beza" },
      rows: [
        { player: "🥇 Chip leader (45%)", chop: "$1,035", icm: "$726", diff: "-$309", up: false },
        { player: "🥈 Ke-2 (25%)", chop: "$575", icm: "$591", diff: "+$16", up: true },
        { player: "🥉 Ke-3 (18%)", chop: "$414", icm: "$526", diff: "+$112", up: true },
        { player: "Ke-4 (12%)", chop: "$276", icm: "$458", diff: "+$182", up: true },
      ],
      summary: {
        text: "Chip chop mentah membahagi mengikut bahagian cip dan {b1}; deal ICM mencerminkan peluang setiap pemain menamatkan permainan di setiap kedudukan dan {b2}. Di atas, stack terpendek mendapat $276 mengikut cip tetapi $458 mengikut ICM — {b3}. Kira kedua-dua nombor sebelum anda berbincang. Apa yang orang panggil chip chop selalunya sebenarnya save-and-chop — semua orang dibayar dahulu hadiah seterusnya yang akan dikeluarkan (di sini $300 untuk tempat ke-4), dan hanya bakinya dibahagi mengikut cip — dan itu mendarat dekat dengan ICM, bukan pembahagian mentah yang ditunjukkan lajur ini. ICM juga mengandaikan kemahiran yang sama dan tidak mengira siapa yang membayar blind seterusnya, jadi jangkakan stack besar akan berunding melebihi angka ICMnya.",
        b1: "memihak kepada chip leader",
        b2: "lebih adil kepada short stack",
        b3: "$182 lebih",
      },
      // 🔴 ms 코퍼스에 holdem-icm이 없다(EN 고유 9슬러그 중 ms 실재는 tournament-vs-cash-game 1개 · 나머지 8개는 0) →
      //    실제로 ICM을 다루는 그 글로 보낸다(icm 언급 24회).
      linkLead: "Model di sebalik nombor ini, bersama tekanan bubble dan nilai cip kejohanan, ada dalam",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Poker tournament atau cash game" },
    },
  },

  // ★2026-09-19 빠른 참조 6표 — 🔴 모든 값 = scripts/calc-reference-tables.ts 출력(EN 그대로 · §13 언어 불변).
  //   🔴 link는 lib/posts-ms/에 «실재하는» 슬러그만(EN 고유 9슬러그 중 ms 실재는 tournament-vs-cash-game 1개뿐 ·
  //   브리프 §3-J · 게이트 F항). 🔴 그 1개가 한 페이지에서 4자리(pushfold·deal.link·quickRef⑥·related[0])에 쓰인다 —
  //   EN은 그 네 자리에 서로 다른 4슬러그를 쓴다. ms에 대체 글이 생기면 우선 분산 대상이다.
  quickRef: [
    {
      badge: "Rujukan pantas",
      h2: "Rujukan kalkulator equity — matchup all-in preflop",
      intro: "Equity apabila dua tangan all-in preflop, dipuratakan merentasi setiap gabungan suit bagi matchup itu (dikira awal di luar talian: kesemua 1,712,304 board bagi setiap satu). Satu gabungan tertentu boleh berbeza kira-kira satu mata peratusan — masukkan kad yang tepat ke dalam kalkulator equity di atas.",
      th: ["Matchup", "Tangan A", "Tangan B", "Seri"],
      align: ["left", "right", "right", "right"],
      emphasis: 1,
      nowrap: [1, 2, 3],
      rows: [
        ["AA vs KK", "81.9%", "18.1%", "0.5%"],
        ["AA vs AKs", "87.9%", "12.1%", "1.3%"],
        ["AA vs 87s", "77.5%", "22.5%", "0.3%"],
        ["AA vs 72o", "88.2%", "11.8%", "0.4%"],
        ["KK vs AKs", "65.9%", "34.1%", "0.8%"],
        ["QQ vs AKo", "56.8%", "43.2%", "0.4%"],
        ["QQ vs AKs", "54.0%", "46.0%", "0.4%"],
        ["JJ vs TT", "82.0%", "18.0%", "0.4%"],
        ["TT vs A9o", "72.2%", "27.8%", "0.4%"],
        ["TT vs 87s", "80.3%", "19.7%", "0.5%"],
        ["22 vs AKo", "52.6%", "47.4%", "0.6%"],
        ["AKo vs AQo", "74.4%", "25.6%", "4.7%"],
        ["AKs vs QJs", "63.5%", "36.5%", "0.5%"],
        ["AKo vs JTs", "59.5%", "40.5%", "0.5%"],
      ],
      note: "Equity ialah purata bahagian pot anda, termasuk seri (chop). Satu pair lawan dua overcard ialah race klasik; satu pair lawan pair yang lebih tinggi kira-kira 4.5 berbanding 1 sebagai underdog.",
    },
    {
      badge: "Rujukan pantas",
      h2: "Pocket ace menghadapi tangan rawak — mengikut bilangan lawan",
      intro: "Kekerapan AA menang apabila semua orang all-in preflop lawan N tangan rawak (Monte Carlo, 8,000,000 runout setiap baris). Dua caller pertama masing-masing mengurangkan ace kira-kira 10 mata peratusan; selepas itu setiap seorang mengurangkan lebih sedikit.",
      th: ["Lawan", "Equity AA"],
      align: ["left", "right"],
      emphasis: 1,
      nowrap: [1],
      rows: [
        ["1", "85.2%"], ["2", "73.4%"], ["3", "63.8%"], ["4", "55.9%"],
        ["5", "49.2%"], ["6", "43.6%"], ["7", "38.7%"], ["8", "34.6%"],
      ],
      note: "Itulah sebabnya ace mahukan pot heads-up: apabila menghadapi lima tangan rawak, equity tangan permulaan terbaik dalam Hold'em jatuh di bawah 50% (49.2%, dengan lima yang lain berkongsi bakinya). Tetapkan seorang lawan kepada “Tangan rawak” dalam kalkulator equity untuk menguji mana-mana tangan dengan cara yang sama (ia menerima sehingga tiga lawan).",
    },
    {
      badge: "Rujukan pantas",
      h2: "Rujukan kalkulator outs — peluang draw mengikut bilangan outs",
      intro: "Peluang draw anda lengkap: flop → river (dua kad akan datang), flop → turn (kad seterusnya sahaja) dan turn → river (satu kad) — angka tepat, bersebelahan anggaran Peraturan 4 dan 2. Kira outs dahulu, kemudian baca melintang.",
      th: ["Outs", "Draw biasa", "Flop → river", "Flop → turn", "Turn → river", "Peraturan 4 · 2"],
      align: ["left", "left", "right", "right", "right", "right"],
      emphasis: 2,
      nowrap: [2, 3, 4, 5],
      rows: [
        ["1", "–", "4.3%", "2.1%", "2.2%", "4% · 2%"],
        ["2", "Pocket pair → set", "8.4%", "4.3%", "4.3%", "8% · 4%"],
        ["3", "Satu overcard", "12.5%", "6.4%", "6.5%", "12% · 6%"],
        ["4", "Gutshot straight", "16.5%", "8.5%", "8.7%", "16% · 8%"],
        ["5", "Pair → two pair atau trips", "20.4%", "10.6%", "10.9%", "20% · 10%"],
        ["6", "Dua overcard", "24.1%", "12.8%", "13.0%", "24% · 12%"],
        ["7", "–", "27.8%", "14.9%", "15.2%", "28% · 14%"],
        ["8", "Open-ended straight", "31.5%", "17.0%", "17.4%", "32% · 16%"],
        ["9", "Flush draw", "35.0%", "19.1%", "19.6%", "36% · 18%"],
        ["10", "Gutshot + dua overcard", "38.4%", "21.3%", "21.7%", "40% · 20%"],
        ["11", "Open-ended + satu overcard", "41.7%", "23.4%", "23.9%", "44% · 22%"],
        ["12", "Flush draw + gutshot", "45.0%", "25.5%", "26.1%", "48% · 24%"],
        ["13", "–", "48.1%", "27.7%", "28.3%", "52% · 26%"],
        ["14", "Open-ended + dua overcard", "51.2%", "29.8%", "30.4%", "56% · 28%"],
        ["15", "Flush draw + open-ended", "54.1%", "31.9%", "32.6%", "60% · 30%"],
        ["16", "–", "57.0%", "34.0%", "34.8%", "64% · 32%"],
        ["17", "–", "59.8%", "36.2%", "37.0%", "68% · 34%"],
        ["18", "–", "62.4%", "38.3%", "39.1%", "72% · 36%"],
        ["19", "–", "65.0%", "40.4%", "41.3%", "76% · 38%"],
        ["20", "–", "67.5%", "42.6%", "43.5%", "80% · 40%"],
      ],
      note: "Angka dua kad hanya terpakai apabila anda akan melihat kedua-dua kad tanpa membayar lagi (satu all-in). Apabila menghadapi satu bet pada flop, gunakan lajur flop → turn: 9 outs = 19.1%. Overcard ialah outs yang paling tidak boleh dipercayai — menghadapi made hand, memasangkan satu daripadanya selalunya masih kalah, jadi potong nilainya. Bagaimana 40 kombo draw dinilai berbanding harga call ada dalam",
      link: { slug: "3bet-pot-bet-sizing", text: "Outs dan harga draw dalam pot 3-bet" },
      linkTail: ".",
    },
    {
      badge: "Rujukan pantas",
      h2: "Rujukan kalkulator pot odds — equity yang anda perlukan untuk call",
      intro: "Apabila menghadapi bet sebesar ini ke dalam pot, inilah equity minimum yang diperlukan oleh satu call untuk pulang modal: call ÷ (pot selepas bet + call). Ia ditunjukkan dalam dua bentuk — sebagai odds dan sebagai equity yang diperlukannya; kalkulator melaporkan bentuk equity. Bandingkan dengan odds tepat draw anda dalam jadual outs di atas.",
      th: ["Saiz bet", "Odds (X : 1)", "Equity diperlukan"],
      align: ["left", "right", "right"],
      emphasis: 2,
      nowrap: [1, 2],
      rows: [
        ["¼ pot", "5 : 1", "16.7%"],
        ["⅓ pot", "4 : 1", "20.0%"],
        ["½ pot", "3 : 1", "25.0%"],
        ["⅔ pot", "2.5 : 1", "28.6%"],
        ["¾ pot", "2.33 : 1", "30.0%"],
        ["Pot", "2 : 1", "33.3%"],
        ["1.5× pot", "1.67 : 1", "37.5%"],
        ["2× pot", "1.5 : 1", "40.0%"],
        ["3× pot", "1.33 : 1", "42.9%"],
      ],
      note: "Satu flush draw (35.0% dengan dua kad akan datang, 19.1% pada kad seterusnya) hanya call bet sebesar pot pada flop apabila ia all-in. Jika tidak, kalkulator implied odds — togol dalam tab pot odds — menambah wang yang anda jangka menang kemudian, dengan syarat lawan ada cip di belakang dan tangan yang akan membayar; potong banyak apabila anda bukan draw kepada nut. Asas pot odds untuk pemula ada dalam",
      link: { slug: "texas-holdem-rules-for-beginners", text: "Cara main Texas Hold'em untuk pemula" },
      linkTail: ".",
    },
    {
      badge: "Rujukan pantas",
      h2: "Rujukan kalkulator SPR — sekuat mana tangan yang anda perlukan",
      intro: "SPR ialah stack efektif ÷ saiz pot semasa, dengan stack efektif ialah yang lebih pendek antara dua stack — semua yang boleh dimenangi atau dihilangkan oleh mana-mana pemain. Semakin rendah nilainya, semakin banyak stack itu sudah komited dan semakin lemah tangan yang boleh anda stack off; semakin tinggi, semakin hampir kepada nut yang anda perlukan untuk pot besar. Baca zon ini sebagai perancangan flop: pada board yang basah atau berpasangan, satu pair tetap satu pair.",
      th: ["SPR", "Zon", "Kekuatan tangan · tindakan"],
      align: ["left", "left", "left"],
      emphasis: 1,
      rows: [
        ["SPR < 4", "Komited", "Top pair top kicker atau lebih baik pada flop kering: rancang untuk memasukkannya — pada kedalaman ini fold selalunya kesilapan yang lebih besar"],
        ["4 ≤ SPR < 8", "Fleksibel", "Two pair atau lebih baik untuk value; satu pair ambil satu atau dua street, kemudian kawal saiz pot"],
        ["8 ≤ SPR < 15", "Semakin deep", "Set dan yang lebih baik bermain untuk stack; draw mendapat implied odds"],
        ["SPR ≥ 15", "Deep", "Pot besar hanya dengan tangan kelas nut — made hand yang lemah menjadi sasaran bluff"],
      ],
      note: "Tab “SPR” di atas menukar mana-mana stack dan pot kepada salah satu daripada empat zon ini. Untuk cara SPR terbentuk dalam pot 3-bet, lihat",
      link: { slug: "3bet-pot-cbet", text: "SPR dan stack dalam pot 3-bet" },
      linkTail: ".",
    },
    {
      badge: "Rujukan pantas",
      h2: "Kalkulator nilai M — lima zon kejohanan",
      intro: "M ialah stack anda ÷ kos satu pusingan (small blind + big blind + semua ante): berapa pusingan anda boleh bertahan tanpa bermain satu tangan pun. Zon ini mengandaikan meja penuh sembilan atau sepuluh orang; apabila meja pendek, darabkan M dengan (bilangan pemain ÷ 10) dahulu — M Berkesan Harrington — jadi M 10 di final table enam orang bermain seperti 6 (tab “M Kejohanan” di atas menunjukkan M mentah; buat penukaran itu sendiri).",
      th: ["Zon", "M", "Strategi"],
      align: ["left", "right", "left"],
      emphasis: 1,
      rows: [
        ["💀 Zon mati", "< 1", "Fold equity sudah habis — shove tangan terbaik yang sampai kepada anda sebelum blind menghampiri, sebaiknya first in"],
        ["🔴 Zon merah", "1–5", "Push/fold: shove tangan yang bagus, fold selebihnya, double up segera"],
        ["🟠 Zon oren", "6–9", "Ketatkan kepada tangan kuat dan cari peluang open-shove"],
        ["🟡 Zon kuning", "10–19", "Tekanan sudah terasa — kumpul cip secara agresif di spot yang baik"],
        ["🟢 Zon hijau", "20+", "Stack selesa — strategi penuh, permainan posisi dan bluff"],
      ],
      note: "Sebab stack kejohanan diukur dalam pusingan dan blind, bukan dalam cip, ada dalam",
      link: { slug: "holdem-tournament-vs-cash-game", text: "Poker tournament atau cash game" },
      linkTail: ".",
    },
  ],

  guide: {
    badge: "Alat",
    h2: "Cara menggunakan 9 kalkulator Hold'em",
    cards: [
      { icon: "🎲", title: "Kalkulator equity (tangan lawan tangan)", body: "Masukkan 2–4 tangan dan mana-mana board untuk mendapat % menang, % seri dan equity setiap tangan. Apabila semua tangan diketahui, flop dan turn dikira satu per satu dengan tepat; pada preflop, atau dengan lawan bertangan rawak, ia mengambil sampel 60,000 runout dan menyatakannya." },
      { icon: "🎯", title: "Kalkulator outs", body: "Mengira dengan tepat peluang draw anda lengkap pada flop atau turn. Lihat pintasan Peraturan 4 dan 2 serta angka yang tepat serentak." },
      { icon: "💰", title: "Pot odds & implied odds", body: "Putuskan call atau fold dengan pengiraan; togol implied odds menambah wang yang anda jangka menang pada street kemudian." },
      { icon: "🃏", title: "Penilai tangan", body: "Pilih kad untuk menyemak kedudukan tangan. Masukkan sehingga 7 kad dan ia mencari gabungan 5 kad terbaik secara automatik." },
      { icon: "📊", title: "Kekuatan tangan permulaan", body: "Pilih dua kad tangan anda untuk melihat yang mana antara 169 tangan permulaan dan tindakan yang disyorkan mengikut posisi." },
      { icon: "📐", title: "SPR (Stack-to-Pot Ratio)", body: "Nisbah stack kepada pot memberitahu sekuat mana tangan yang anda perlukan. Semakin rendah SPR, semakin wajar komited dengan tangan yang kuat." },
      { icon: "🏆", title: "Nilai M kejohanan", body: "M Harrington mengukur tekanan pada stack kejohanan anda. Strategi anda berubah sepenuhnya merentasi zon hijau/kuning/oren/merah/mati." },
      { icon: "📈", title: "Kalkulator ICM", body: "Independent Chip Model menukar cip kejohanan kepada nilai wang hadiah yang sebenar, dengan lajur chip chop di sebelahnya — nombor di sebalik keputusan bubble dan perbincangan deal di final table." },
      { icon: "⚡", title: "Carta push/fold Nash", body: "Carta Nash 13×13 untuk heads-up, 6-max dan 9-max: tangan mana untuk open-shove dan tangan mana untuk call pada 1–25bb. Wajib ada untuk peringkat akhir kejohanan." },
    ],
  },

  faq: {
    badge: "FAQ",
    h2: "FAQ — kalkulator ICM & kalkulator Hold'em",
    q: "Q. {q}",
  },

  related: {
    badge: "Baca seterusnya",
    h2: "Panduan untuk dibaca selepas pengiraannya sudah masuk akal",
    // 🔴 EN 8슬러그(holdem-icm·equity·pot-odds·outs·probability·starting-hands-chart·short-stack·implied-odds)는
    //    ms에 «0개» 실재한다 → 전부 ms 코퍼스(21편)에서 고른다. 개수만 EN과 동일(8).
    links: [
      { slug: "holdem-tournament-vs-cash-game", title: "Tournament atau Cash Game", desc: "Nilai cip, ICM dan tekanan bubble" },
      { slug: "a-high-board-cbet", title: "Equity dan EQR dalam Solver", desc: "Range check, equity dan realisasi equity pada A72" },
      { slug: "texas-holdem-rules-for-beginners", title: "Cara Main Texas Hold'em", desc: "Asas pot odds dan tangan permulaan untuk pemula" },
      { slug: "3bet-pot-bet-sizing", title: "Outs dan Harga Draw", desc: "40 kombo draw berbanding harga call dalam pot 3-bet" },
      { slug: "3bet-pot-cbet", title: "SPR dan Stack dalam Pot 3-bet", desc: "Kenapa SPR rendah mengubah rancangan flop anda" },
      { slug: "holdem-hand-rankings", title: "Susunan Tangan Poker", desc: "10 tangan dengan kebarangkalian dan kicker" },
      { slug: "holdem-all-in-rules", title: "Peraturan All-In dan Side Pot", desc: "Apa yang berlaku apabila stack tidak sama besar" },
      { slug: "holdem-game-order", title: "Urutan Permainan Hold'em", desc: "Preflop hingga showdown dan posisi di meja" },
    ],
  },
};
