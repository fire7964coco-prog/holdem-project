// `/id/calculator` FAQ — page.tsx(FAQPage JSON-LD)와 공용 계산기(화면 렌더)가 **같은 배열**을 쓴다.
//
// ★2026-09-17 신설(8문항) → ★2026-09-19 (id 회차) **8 → 18**: EN 17문항의 «명제»를 옮기고 id 고유 1문항 추가.
//   정본 = `app/en/calculator/faq.ts`(순서 동일). 근거 = `docs/keyword-bank/id-calculator.md`.
//   ① 질문 표기는 id 실측 어형 — 「Bagaimana cara …?」·「Berapa …?」·「Seberapa …?」·「Apakah …?」(가부 의문은
//      `Apakah`로 표시 — 코퍼스 173 : `Bolehkah` 0). 🔴 PAA가 준 「X itu apa?」·「Apa itu X?」(「Poker player itu apa?」·
//      「Flush itu apa poker?」)는 **한 문항도 쓰지 않았다** — ②의 정의형 금지가 그 어형을 통째로 배제하기 때문이다.
//      🔴 라쿠 question-search는 ja 전용이고 id PAA는 ICM 축에서 **일반 포커 질문으로 폴백**한다 →
//      질문 DB가 없는 로케일의 세 번째 방법(경쟁 FAQ 축 + 1차 출처 + 코퍼스)으로 짰다(zh-hant §3-E · es §3-F).
//   ② **정의형 금지** — 「Apa itu ICM?」·「pot odds vs implied odds」는 `lib/posts-id/{holdem-icm,holdem-pot-odds}.ts` 소유다.
//      09-17판 정의형 2문항 처리: 「Apa itu ICM di poker?」는 **삭제**했고, 「Apa bedanya chip chop dan ICM deal?」은
//      09-19에 **질문까지 계산기형으로 교체**했다(형제 글 `holdem-icm` H2 「ICM Deal vs Chip Chop…」가 그 구를 소유 — SEO 렌즈).
//   ③ id 고유 1문항 = **TDA 2024 Rule 5**(「Apakah boleh memakai kalkulator poker di meja?」) — es·zh-hant·pt·de·fr 선례와 같은 축이고
//      id SERP 경쟁 FAQ(pokerlistings·splitsuit·gtogecko)의 «can I use it while playing» 축과도 일치.
//      1차 출처 = `docs/sources/tda-2024-rules-v1.txt` Rule 5-A·5-C·5-D(2024판).
//      🔴 2022판은 «live hand 중»만 금지했지만 2024판 5-D는 «at the table» 전체다 — 되돌리지 마라(zh-hant 회차 교훈).
//      🔴 합법성 축은 열지 않는다(정보 제공만 · 메모리 `legality-ban-scope-topic-vs-tangent`).
//
// 🔴 §13: 수치는 EN과 동일(id 고유 Q18의 «2024 · Rule 5»와 4·2 재서술의 «1,6 · 2,6»만 EN에 없다) — 82% · 81,9% · 0,5% · 88/12 · 66/34 · 46~47% · 45% · 43% · 2,5~3 ·
//   30% · 7% · 50/50 · 36% · 18% · 54,1% · 60% · 1,6 · 2,6 · 35,0% · 19,1% · 19,6% · 990 · 44 · 1,7 juta ·
//   60.000 · 0,3 · 3.000 ÷ (10.000) 13.000 ≈ 23,1% · 33,3% · 25% · 4,2 : 1 · 40% · $276 · $458 · (TDA) 2024 · Rule 5.
//   구분자만 인니식(`.` 천단위 · `,` 소수 · **% 앞 공백 없음** — §5-A C).
// 🪶 4·2 규칙 답변은 **es 교열 렌즈의 EN 정정**을 반영했다 — «×2가 1~2점 모자란다»는 6~11 outs에서만 참이다
//   (1~5 outs 0,2~0,9 · 9 outs 1,6 · 15 outs 2,6 · 20 outs 3,5) → «outs가 늘수록 더 모자란다»로 적는다.
// 🪶 Q11 끝절(«그래서 chip leader의 ICM이 칩 점유율보다 낮다»)은 Q14 명제 전부와 겹쳐 뺐다(fr SEO·교열 렌즈 09-18).
// 🪶 Q17에 **스택 구분**을 넣었다 — 중간 스택이 리슈브를 넓히면 ICM상 손해다(fr 딜러 렌즈 09-18 · EN 미반영분).
// 용어 = dict.ts 머리말과 동일 출처(id-posting-reference §5·§5-A · 코퍼스 55편 어법). Anda체.
export const CALCULATOR_FAQ_ID: { q: string; a: string }[] = [
  {
    q: "Bagaimana cara kerja kalkulator poker?",
    a: "Kalkulator membagikan setiap kartu yang masih akan keluar lalu menghitung seberapa sering tiap hand menang. Kalau semua hand diketahui, kalkulator ini menghitung persis setiap kemungkinan runout di flop dan turn (990 di flop saat heads-up, 44 di turn; lebih sedikit kalau pemainnya lebih banyak, dan di river board-nya memang sudah lengkap). Di preflop ada 1,7 juta board per matchup, dan lawan dengan hand acak melipatgandakannya lagi, jadi di spot seperti itu kalkulator mengambil sampel 60.000 runout acak dan menyebutkannya di bawah hasil — angkanya bergeser sekitar 0,3 poin antarperhitungan.",
  },
  {
    q: "Berapa peluang AA lawan KK?",
    a: "Pocket ace menang sekitar 82% melawan pocket king di preflop (81,9% kalau dirata-ratakan dari semua kombinasi jenis kartu, dengan peluang seri 0,5%). AA melawan AK suited sekitar 88% berbanding 12%, dan KK melawan AK suited sekitar 66% berbanding 34%.",
  },
  {
    q: "Apakah AK lawan pocket pair benar-benar coin flip?",
    a: "Mendekati coin flip melawan semua pair di bawah As dan King, meskipun tidak pernah persis 50/50. AK offsuit punya equity sekitar 46–47% melawan 22–44, sekitar 45% melawan 55–99, dan sekitar 43% melawan TT–QQ; AK suited menambah kira-kira 2,5–3 poin. Melawan KK equity-nya turun ke sekitar 30% dan melawan AA ke sekitar 7%, jadi sebutan coin flip hanya pas untuk pair yang berada di bawah kedua kartu Anda.",
  },
  {
    q: "Seberapa akurat aturan 4 dan 2?",
    a: "Cukup akurat untuk keputusan di meja, tapi melesetnya tumbuh seiring bertambahnya outs. Aturannya sendiri jalan pintas hitung cepat: kalau masih ada dua kartu menyusul (flop ke river), kalikan outs Anda dengan 4; kalau tinggal satu kartu (turn ke river), kalikan dengan 2 — untuk 9 outs hasilnya 36% dan 18%. Sisi kali-4 melesetnya masih dalam kisaran satu poin sampai 9 outs, lalu melenceng kira-kira satu poin per tambahan out (15 outs sebenarnya 54,1%, bukan 60%). Sisi kali-2 selalu sedikit di bawah nilai persisnya, dan selisihnya membesar seiring bertambahnya outs (9 outs 1,6 poin · 15 outs 2,6 poin). Dan kali-4 hanya berlaku kalau Anda akan melihat kedua kartu tanpa membayar lagi.",
  },
  {
    q: "Seberapa sering flush draw jadi?",
    a: "Dengan 9 outs, flush draw jadi 35,0% dari flop sampai river (dua kartu menyusul), 19,1% di kartu berikutnya dari flop, dan 19,6% dari turn ke river.",
  },
  {
    q: "Bagaimana cara menghitung pot odds?",
    a: "Jumlah call ÷ (pot setelah bet + jumlah call) = equity minimum yang Anda butuhkan. Misalnya, call 3.000 saat pot sudah berisi 10.000 termasuk bet-nya adalah 3.000 ÷ 13.000 ≈ 23,1%, jadi call menguntungkan begitu equity Anda di atas 23,1%. Bet sebesar pot selalu menuntut 33,3%; bet setengah pot menuntut 25%.",
  },
  {
    q: "Berapa pot odds yang dibutuhkan untuk call dengan flush draw?",
    a: "Saat menghadapi satu bet di flop, hitung hanya kartu berikutnya: 9 outs jadi 19,1%, jadi Anda butuh pot odds lebih baik daripada sekitar 4,2 banding 1 — atau implied odds yang menutup selisihnya, dan itu menuntut lawan masih punya chip di belakang serta hand yang mau membayar. Potong nilainya habis-habisan kalau draw Anda bukan ke nut: kerugian saat flush terbaik kedua Anda dibayar jauh lebih besar daripada keuntungan saat flush itu menang. Kalau Anda dijamin melihat kedua kartu (kondisi all-in), yang berlaku justru angka dua kartu 35,0%.",
  },
  {
    q: "Bagaimana cara memakai kalkulator implied odds?",
    a: "Buka tab Pot Odds lalu nyalakan “Implied odds”, dan masukkan perkiraan uang tambahan yang Anda harapkan menang di street berikutnya saat draw Anda jadi. Kalkulator menambahkannya ke pot dan menurunkan equity yang dituntut call Anda sekarang. Jaga angka tambahan itu tetap jujur: nilainya hanya berlaku kalau lawan memang punya sebanyak itu di belakang dan benar-benar mau membayar saat draw Anda masuk.",
  },
  {
    q: "Bagaimana cara mengecek hand poker mana yang menang?",
    a: "Di kalkulator equity, masukkan kedua kartu tertutup tiap pemain dan kelima kartu board: dengan board lengkap, kalkulator menyebut pemenangnya sekaligus hand yang memenangkannya, atau melaporkan chop. Untuk menilai satu hand saja, masukkan 5–7 kartu ke tab Urutan Kartu dan kombinasi lima kartu terbaiknya ditemukan otomatis.",
  },
  {
    q: "Input apa saja yang dibutuhkan kalkulator ICM?",
    a: "Masukkan jumlah pemain, stack chip tiap pemain, dan struktur pembayaran (posisi 1–6). Kalkulator langsung menunjukkan berapa nilai tiap stack dalam uang hadiah yang sebenarnya, bersebelahan dengan jumlah yang akan dibayar chip chop. Untuk keputusan call/fold, jalankan dua kali — sekali dengan stack Anda seandainya menang, sekali seandainya bust — lalu bandingkan rata-rata keduanya, ditimbang dengan peluang menang Anda, terhadap nilai Anda kalau fold saja.",
  },
  {
    q: "“Nilai ICM” di kalkulator ini maksudnya apa?",
    a: "Nilai uang hadiah Anda yang sebenarnya: bagian dari sisa prize pool yang diperkirakan akan dikumpulkan stack Anda, dihitung dari peluang tiap pemain finis di tiap posisi. Itu bukan persentase chip Anda — saat lebih dari satu posisi dibayar, menggandakan chip tidak pernah menggandakan nilai ICM Anda.",
  },
  {
    q: "Kapan sebaiknya memakai kalkulator ICM?",
    a: "Setiap kali hadiahnya ditentukan oleh posisi finis dan uangnya sudah dekat: di bubble, di meja final, saat ada usulan deal, dan di satelit yang tiap kursinya dibayar sama. Ini tidak berlaku di cash game, tempat satu chip selalu bernilai sama dengan nominalnya.",
  },
  {
    q: "Apakah ICM sama saja dengan chip EV?",
    a: "Tidak. Chip EV menghitung chip; ICM menghitung uang hadiah. Sebuah call bisa menguntungkan dalam chip tetapi merugikan equity hadiah, karena bust membuat Anda kehilangan seluruh pembayaran yang tadinya masih Anda antre. Menjelang bubble dan di meja final keduanya paling jauh menyimpang — itu sebabnya range ICM lebih ketat daripada range chip EV.",
  },
  {
    q: "Saya chip leader — kenapa nilai ICM saya lebih rendah daripada persentase chip saya?",
    a: "Karena menang tetap hanya membayar hadiah juara 1, bukan seluruh prize pool, sementara bust membuat Anda kehilangan semua pembayaran di bawahnya. Dalam contoh bubble di atas, leader memegang 40% chip tetapi hanya 33,3% uang hadiah, dan stack terpendek justru bernilai lebih dari persentase chipnya.",
  },
  {
    q: "Bagaimana cara menghitung ICM deal (deal meja final)?",
    a: "Masukkan stack saat ini dan sisa hadiahnya; kolom “nilai ICM” tiap pemain adalah angka dasar deal-nya. Dalam praktik, meja biasanya menyisakan sejumlah uang yang disepakati — sering kali selisih hadiah juara 1 dan 2 — untuk tetap diperebutkan, dan floor menghentikan jam serta memastikan semua pemain yang tersisa setuju sebelum apa pun dibayarkan.",
  },
  {
    q: "Saat deal, angka mana yang saya pakai — kolom Chip chop atau ICM?",
    a: "Kalau stack Anda pendek, pakai kolom ICM; kalau Anda chip leader, chip chop-lah yang menguntungkan Anda. Chip chop membayar menurut persentase chip, ICM deal menurut peluang tiap pemain finis di tiap posisi — contoh di atas memperlihatkan selisihnya ($276 berbanding $458 untuk stack terpendek). Yang dimaksud tiap ruangan dengan “chip chop” pun berbeda-beda, dan varian yang umum justru mendarat dekat ICM — rinciannya ada di ringkasan tabel di atas. Jadi tanyakan dulu apa persisnya yang dimaksud sebelum Anda menyetujui salah satunya.",
  },
  {
    q: "Kenapa saya harus lebih sering fold di bubble?",
    a: "Di bubble, uang hadiah yang hilang saat Anda bust lebih besar daripada yang Anda dapat saat menang — seperti yang diperlihatkan contoh bubble di atas — jadi call yang menguntungkan dalam chip bisa merugi dalam EV hadiah. Stack menengah, dan short stack yang belum akan dihabisi blind, sebaiknya menghindari coin flip saat harus call all-in. Sisi sebaliknya: semua orang juga sedang lebih sering fold, jadi sebagai pihak yang agresif Anda boleh open dan re-shove lebih lebar — tapi itu terutama untuk chip leader dan stack terpendek; stack menengah justru yang paling banyak rugi kalau melebarkan re-shove-nya.",
  },
  {
    // ★id 고유 1문항(EN 17 + 1) — 근거는 뱅크 §3·§4. 게이트 C항이 «EN 17 + 고유 1»까지만 허용한다.
    q: "Apakah boleh memakai kalkulator poker di meja?",
    a: "Di turnamen dengan aturan TDA, tidak boleh. Aturan Poker Tournament Directors Association versi 2024 (Rule 5) menetapkan bahwa aplikasi taruhan, chart, dan alat strategi poker lain tidak boleh dipakai di meja, dan seorang pemain tidak boleh menerima maupun memakai data strategi dari orang atau sumber lain; selama Anda masih memegang hand yang hidup, Anda juga tidak boleh mengoperasikan atau berinteraksi dengan perangkat elektronik maupun alat komunikasi — dan semua itu tetap tunduk pada aturan rumah serta ketentuan regulator setempat. Jadi kalkulator ini untuk persiapan sebelum main, menghitung ulang sesudahnya, dan belajar: di meja, yang berlaku adalah aturan 4 dan 2 di kepala Anda serta tabel di atas yang sudah Anda hafal.",
  },
];
