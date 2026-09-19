// MS calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the CalculatorTool (visible render).
//
// ★2026-09-19 8 → 18 (EN 17 명제 + ms 고유 1). 근거 = docs/keyword-bank/ms-calculator.md.
// 🔴 정의형 금지 — 옛 Q2 「Apakah itu ICM dalam poker?」는 계산기형으로 교체했다(EN이 09-17에 같은 이유로 뺀 자리).
// 🔴 질문 어형은 ms 코퍼스 실측(뱅크 §4-E): Mengapa 59 · Apakah 56 · Berapa 30 · Bagaimana 28 · Adakah 31 ·
//    **Bolehkah 9** — id는 Bolehkah가 0이라 가부 의문을 Apakah로 썼지만 ms는 Bolehkah가 산다.
// §13: 모든 수치는 scripts/calc-reference-tables.ts 출력 = EN 그대로. AA vs KK 81.9%는 전 수트 평균(81.95) ·
//    19.1% = 9/47(flop → 다음 카드) · 19.6% = 9/46(turn → river).
// 렌더 순서 = 도구 → ICM 예시 → 가이드 카드 → 빠른 참조 표 → FAQ. 그래서 「di atas」가 맞다.
export const CALCULATOR_FAQ_MS: { q: string; a: string }[] = [
  {
    q: "Bagaimanakah kalkulator odds poker berfungsi?",
    a: "Ia membuka setiap kad yang masih akan datang dan mengira berapa kerap setiap tangan menang. Apabila semua tangan diketahui, kalkulator ini mengira setiap runout yang mungkin pada flop dan turn dengan tepat (990 pada flop secara heads-up, 44 pada turn; lebih sedikit apabila pemain lebih ramai, dan river sudah pun lengkap). Pada preflop ada 1.7 juta board bagi setiap matchup, dan lawan bertangan rawak menggandakannya lagi, jadi di spot itu ia mengambil sampel 60,000 runout rawak dan menyatakannya di bawah keputusan — angkanya bergerak kira-kira 0.3 mata peratusan antara larian.",
  },
  {
    q: "Berapakah peluang AA lawan KK?",
    a: "Pocket ace menang kira-kira 82% masa menghadapi pocket king pada preflop (81.9% dipuratakan merentasi setiap gabungan suit, dengan peluang seri 0.5%). AA lawan AK suited kira-kira 88% berbanding 12%, dan KK lawan AK suited kira-kira 66% berbanding 34%.",
  },
  {
    q: "Adakah AK lawan pocket pair itu benar-benar coin flip?",
    a: "Hampir, apabila menghadapi setiap pair di bawah ace dan king, tetapi tidak pernah betul-betul 50/50. AK offsuit ada kira-kira 46–47% equity menghadapi 22–44, kira-kira 45% menghadapi 55–99 dan kira-kira 43% menghadapi 10-10 hingga QQ; AK suited menambah lebih kurang 2.5–3 mata peratusan. Menghadapi KK ia jatuh kepada kira-kira 30% dan menghadapi AA kepada kira-kira 7%, jadi label itu hanya sesuai untuk pair yang kedua-dua ace dan king mengatasinya.",
  },
  {
    q: "Apakah peraturan 4 dan 2 dalam poker?",
    a: "Satu pintasan kira dalam kepala untuk odds draw: dengan dua kad akan datang (flop ke river) darabkan outs anda dengan 4; dengan satu kad akan datang (turn ke river) darabkan dengan 2. Untuk 9 outs itu memberi 36% dan 18%; angka tepatnya ada dalam jawapan seterusnya. Bahagian darab-4 kekal dalam lingkungan kira-kira satu mata peratusan sehingga 9 outs, kemudian menyimpang lebih kurang satu mata bagi setiap out selepas itu (15 outs sebenarnya 54.1%, bukan 60%). Bahagian darab-2 pula sentiasa jatuh sedikit di bawah angka tepatnya, dan jurangnya melebar apabila outs bertambah — pada 9 outs ia kurang 1.6 mata, pada 15 outs kurang 2.6 mata. Dan darab 4 hanya terpakai apabila anda akan melihat kedua-dua kad tanpa membayar lagi.",
  },
  {
    q: "Berapa kerap flush draw mengena?",
    a: "Dengan 9 outs, flush draw lengkap 35.0% masa dari flop ke river (dua kad akan datang), 19.1% pada kad seterusnya daripada flop, dan 19.6% dari turn ke river.",
  },
  {
    q: "Bagaimanakah cara mengira pot odds?",
    a: "Jumlah call ÷ (pot selepas bet + jumlah call) = equity minimum yang anda perlukan. Contohnya, call 3,000 apabila pot sudah mengandungi 10,000 termasuk bet itu ialah 3,000 ÷ 13,000 ≈ 23.1%, jadi call itu menguntungkan apabila equity anda melebihi 23.1%. Bet sebesar pot sentiasa memerlukan 33.3%; bet separuh pot 25%.",
  },
  {
    q: "Pot odds apakah yang saya perlukan untuk call dengan flush draw?",
    a: "Apabila menghadapi satu bet pada flop, kira kad seterusnya sahaja: 9 outs mengena 19.1% masa, jadi anda perlukan pot odds lebih baik daripada kira-kira 4.2 berbanding 1 — atau implied odds yang menampung bezanya, dan itu memerlukan lawan anda ada cip di belakang serta tangan yang akan membayar. Potong banyak nilainya apabila anda bukan draw kepada nut: flush kedua terbaik yang dibayar kalah jauh lebih banyak daripada yang dimenanginya. Jika anda pasti akan melihat kedua-dua kad (satu all-in), angka dua kad 35.0% yang terpakai.",
  },
  {
    q: "Bagaimanakah cara menggunakan kalkulator implied odds?",
    a: "Buka tab “Pot Odds” dan hidupkan “Implied odds”, kemudian masukkan jumlah tambahan yang anda jangka menang pada street kemudian apabila draw anda mengena. Kalkulator menambahnya kepada pot dan merendahkan equity yang diperlukan oleh call anda sekarang. Kekalkan jumlah tambahan itu jujur: ia hanya dikira jika lawan anda memang ada sebanyak itu di belakang dan akan benar-benar membayar apabila draw anda lengkap.",
  },
  {
    q: "Bagaimanakah saya menyemak tangan poker mana yang menang?",
    a: "Dalam tab “Equity”, masukkan kedua-dua kad tangan dan kesemua lima kad board: dengan board yang lengkap ia menamakan pemenang dan tangan yang menang, atau melaporkan chop. Untuk menilai satu tangan sahaja, letakkan 5–7 kad ke dalam tab “Kedudukan Tangan” dan ia mencari gabungan lima kad terbaik secara automatik.",
  },
  {
    // ★끝문장 「Purata mentah…50%」는 EN·id·fr에 없는 ms 추가다 — EN의 «compare the average»는 승/버스트 단순 평균이라
    //   승률 50%를 가정한다(es 네이티브 렌즈 09-17 · 브리프 §5). 가중 서술 + 그 이유를 같이 적었다.
    q: "Bagaimanakah cara menggunakan kalkulator ICM?",
    a: "Masukkan bilangan pemain, stack cip setiap pemain, dan struktur pembayaran (tempat 1–6). Kalkulator terus menunjukkan berapa nilai sebenar setiap stack dalam wang hadiah, bersebelahan dengan apa yang akan dibayar oleh chip chop. Untuk keputusan call/fold, jalankannya dua kali — sekali dengan stack anda selepas menang, sekali selepas bust — kemudian timbang kedua-dua nilai itu mengikut peluang anda menang dan kalah, dan bandingkan hasilnya dengan nilai anda jika anda sekadar fold. Purata mentah kedua-duanya mengandaikan peluang menang 50%.",
  },
  {
    q: "Apakah maksud “Nilai ICM” dalam kalkulator ini?",
    a: "Nilai wang hadiah anda yang sebenar: bahagian baki prize pool yang dijangka dikutip oleh stack anda, mengambil kira peluang setiap pemain menamatkan permainan di setiap kedudukan. Ia bukan bahagian cip anda: apabila lebih daripada satu kedudukan dibayar, menggandakan cip anda tidak pernah menggandakan nilai ICM anda.",
  },
  {
    q: "Bilakah saya patut menggunakan kalkulator ICM?",
    a: "Setiap kali pembayaran ditetapkan mengikut kedudukan akhir dan wang itu sudah dekat: di bubble, di final table, apabila deal dicadangkan, dan dalam satelit yang setiap kerusinya dibayar sama. Ia tidak terpakai pada cash game, kerana di situ satu cip sentiasa bernilai nilai mukanya.",
  },
  {
    q: "Adakah ICM sama dengan chip EV?",
    a: "Tidak. Chip EV mengira cip; ICM mengira wang hadiah. Satu call boleh menguntungkan dari segi cip tetapi merugikan equity hadiah, kerana bust menghilangkan setiap pembayaran yang masih dalam barisan anda. Berhampiran bubble dan di final table kedua-duanya paling jauh menyimpang, dan itulah sebabnya range ICM lebih ketat daripada range chip-EV.",
  },
  {
    q: "Saya chip leader — mengapa nilai ICM saya lebih rendah daripada bahagian cip saya?",
    a: "Kerana menang tetap hanya membayar wang tempat pertama, bukan keseluruhan prize pool, sementara bust menghilangkan setiap pembayaran di bawahnya. Dalam contoh bubble di atas, chip leader memegang 40% cip tetapi hanya 33.3% wang hadiah, dan stack terpendek pula bernilai lebih daripada bahagian cipnya.",
  },
  {
    q: "Bagaimanakah cara mengira deal ICM (final table)?",
    a: "Masukkan stack semasa dan baki hadiah; lajur “Nilai ICM” setiap pemain ialah angka asas dealnya. Dalam amalan, meja biasanya meninggalkan satu jumlah yang dipersetujui di tengah — selalunya jurang antara hadiah pertama dan kedua — untuk terus diperebutkan, dan floor menghentikan jam serta memastikan setiap pemain yang tinggal bersetuju sebelum apa-apa dibayar.",
  },
  {
    q: "Semasa deal, nombor mana yang saya guna — lajur Chip chop atau ICM?",
    a: "Jika stack anda pendek, guna lajur ICM; jika anda chip leader, chip choplah yang memihak kepada anda. Chip chop membayar mengikut bahagian cip, deal ICM mengikut peluang setiap pemain menamatkan permainan di setiap kedudukan — contoh di atas menunjukkan jurangnya ($276 berbanding $458 untuk stack terpendek). Apa yang dimaksudkan setiap bilik dengan “chip chop” pun berbeza-beza, dan varian yang biasa justeru mendarat dekat dengan ICM — perinciannya ada dalam ringkasan jadual di atas. Jadi tanya dahulu apa yang dimaksudkan sebelum anda bersetuju dengan mana-mana satu.",
  },
  {
    // ★re-shove를 open과 분리한 것은 ms 추가다 — EN 「open and re-shove wider as the aggressor」는 스택 구분이 없어
    //   중간 스택의 리슈브 확장을 권하게 된다(fr 딜러 렌즈 09-18 · 브리프 §5 fr ⓑ). id는 둘을 묶었다.
    q: "Mengapakah saya patut lebih banyak fold di bubble?",
    a: "Di bubble, wang hadiah yang anda hilang apabila bust lebih besar daripada yang anda perolehi apabila menang, seperti yang ditunjukkan contoh bubble di atas, jadi call yang menguntungkan dari segi cip boleh merugikan dari segi EV hadiah. Stack sederhana — dan short stack yang belum hampir dihabiskan blind — patut mengelakkan coin flip apabila call all-in. Sebaliknya pula, semua orang lain pun sedang fold, jadi sebagai pihak yang menyerang anda boleh open lebih luas. Untuk re-shove, ini bergantung pada stack: chip leader dan stack yang sangat pendek boleh melebarkannya, tetapi stack sederhana yang melebar re-shove justeru rugi dari segi ICM, kerana ia yang paling banyak kehilangan apabila kalah.",
  },
  {
    // ★ms 고유 1문항(EN 17 + 고유 1) — 근거 = TDA 2024 원문 `docs/sources/tda-2024-rules-v1.txt` Rule 5-D(도구·차트·타인의
    //   전략 데이터) + 5-C(라이브 핸드 중 전자기기) + 뱅크 §6.
    //   🔴 본문 표기는 **상위 «Rule 5»**다 — 한 문장이 5-D와 5-C를 «함께» 서술하기 때문이고, 선례 6로케일
    //   (zh-hant·es·pt·de·fr·id)도 본문은 전부 상위 조항이다(세부 5-A·5-C·5-D는 주석에만).
    //   🪶 1차 렌즈가 «6로케일이 5-D»라고 보고했으나 2차 교열이 원문·선례 실측으로 반증했다.
    //   게이트 C항이 «17 + 1»까지만 허용한다.
    // 🔴 합법성 축이 아니라 «대회 규칙» 축이다(메모리 legality-ban-scope-topic-vs-tangent).
    q: "Bolehkah saya guna kalkulator poker di meja?",
    a: "Dalam kejohanan yang mengikut peraturan TDA, tidak boleh. Peraturan Poker Tournament Directors Association versi 2024 (Rule 5) menetapkan bahawa aplikasi pertaruhan, carta dan alat strategi poker yang lain tidak boleh digunakan di meja, dan seorang pemain tidak boleh menerima atau menggunakan data strategi daripada orang atau sumber lain; selagi anda masih memegang tangan yang hidup, anda juga tidak boleh mengendalikan atau berinteraksi dengan peranti elektronik mahupun alat komunikasi — dan kesemuanya masih tertakluk kepada peraturan rumah serta ketetapan pengawal selia tempatan. Jadi kalkulator ini untuk persediaan sebelum bermain, mengira semula selepasnya, dan belajar: di meja, yang berlaku ialah peraturan 4 dan 2 di dalam kepala anda serta jadual di atas yang sudah anda hafal.",
  },
];

export default CALCULATOR_FAQ_MS;
