/**
 * `/id/solver` FAQ — 화면(`solver-client.tsx`)과 서버 `page.tsx`의 FAQPage 스키마가
 * **같은 배열**을 쓴다. 정본 구조 = `app/fr/solver/faq.ts`(직전 신설분).
 *
 * ★2026-09-05 신설(10번째 랜딩 · 저작 회차 Fable). 대상 = 인도네시아(Bahasa Indonesia).
 *   본체(solver.holdemmaster.com)는 noindex — 인니어 검색 진입로가 0개였다.
 *   유일한 입력 = `docs/id-solver-landing-brief.md`(준비 회차 Opus · 2026-09-04).
 *
 * 🔴 **번역이 아니다 — 경량판(브리프 §0)이다.** B층(롱테일 클러스터링 · «현지 방어 문항» 창작 ·
 *   키워드 뱅크 신설)은 사장님 판정으로 버렸다. 골격은 EN/fr 랜딩, **표기만 A층 실측값**:
 *   ① 조준축 = `gto poker`(50 · `poker gto`와 시계열 동일 → 어순 판정 불필요).
 *   ② `solver` 계열은 전부 10 = 검색축이 아니라 **정체성 표기** — 항상 `GTO`·`poker`와 붙인다.
 *   ③ 관련검색 1번 `gto poker free` → 훅(gratis·browser·tanpa instal·tanpa akun)이 의도와 일치.
 *      이어지는 `calculator` · `app` · `chart` · `practice`는 **이 FAQ가 문항으로 흡수**(새 롱테일
 *      «발굴»은 하지 않는다 = B층 제외).
 *   ④ ⚠ `poker gratis`(50)는 **조준 금지**(게임 의도 의심) — 마지막 문항이 «게임이 아니라 계산
 *      도구»로 가른다. 조준이 아니라 «구분»이다.
 *   ⑤ 오염어: id에서는 확인되지 않았다(SERP top 24 전부 포커). 공통 규율만 지킨다.
 *
 * 🔴 **문체·용어(브리프 §3 — 협상 대상 아님)**: 2인칭 **`Anda`**(kamu 금지 · 코퍼스 3,340:0) ·
 *   무료 = **`gratis`** · 브라우저 = **`browser`**(⚠ `percuma`·`pelayar`는 말레이어 — 섞지 마라) ·
 *   solver·trainer·range·board·bet size·equity·postflop = **영어 그대로** · 소수 구분자 = **쉼표**(`0,0%`).
 *
 * 🔴 **답의 사실은 앱 축어(`docs/solver-app-verbatim-id-2026-09-04.md`)의 «라벨»과 형제 랜딩
 *   9종이 공유하는 §4-B 정정본 수치에서만 왔다.** 앱의 «설명 문장»은 해설로 옮기지 않았다
 *   (브리프 §7-9 · ja에서 3건 사고). 트레이너 채점 = **«팟 대비»**(앱 축어 «relatif terhadap pot»
 *   🟢 정정본) — «bb로 채점»으로 쓰지 마라.
 * 🔴 언어 열거는 앱 셀렉터 **11개**(`solver/src/i18n.ts:18` — 브리프 실측)와 1:1이다.
 *
 * 🔴 카니발 — 이 FAQ가 답하지 않는 것: **프리플랍 레인지표 축**(→ `id/blog/holdem-starting-hands-chart`
 *   소유 — chart 문항이 핸드오프한다) · 입문 룰(→ `texas-holdem-rules-for-beginners`).
 *   id 코퍼스 42편 중 title·seoTitle에 GTO가 든 글 0편 = GTO·solver 축은 랜딩이 가져간다.
 */
export interface FaqItem { q: string; a: string; }

export const SOLVER_FAQ_ID: FaqItem[] = [
  {
    // 정의형 의도(SERP: 정의형 + 도구형 혼합)를 첫 문항이 받는다. `GTO`를 «di poker»로 못박는다.
    q: "Apa itu GTO di poker?",
    a: "GTO adalah singkatan dari Game Theory Optimal — strategi keseimbangan dari teori permainan: cara bermain yang tidak menyisakan celah sistematis untuk dieksploitasi lawan. Dalam praktiknya, GTO bukan satu jawaban tunggal seperti «bet» atau «fold», melainkan frekuensi — hand yang sama kadang bet, kadang check, dengan proporsi tertentu. Solver adalah alat yang menghitung frekuensi itu untuk satu situasi yang Anda tentukan.",
  },
  {
    // 🔴 `solver` 단독 금지 — 문항·답에서 GTO/poker와 붙인다.
    q: "Apa itu solver GTO poker?",
    a: "Solver GTO poker adalah program yang membawa satu situasi permainan ke titik keseimbangannya: Anda memasukkan range kedua pemain, board, dan bet size, lalu solver menghitung seberapa sering masing-masing dari 169 hand awal harus bet, check, atau fold. Hasilnya ditampilkan dalam grid 13×13 — bukan «bet» atau «fold», melainkan campuran frekuensi yang membuat strategi itu tidak bisa diserang secara sistematis.",
  },
  {
    // 🟢 훅 = 관련검색 1번 `gto poker free`와 일치. 앱 축어 «Semua fitur, tanpa batas pemakaian».
    q: "Apakah solver GTO ini benar-benar gratis?",
    a: "Benar-benar gratis. Semua fitur, tanpa batas pemakaian: menghitung spot Anda sendiri, membuka spot belajar yang sudah dihitung, berlatih dengan Trainer GTO, menyimpan dan mengekspor — semuanya gratis. Tidak ada paket berbayar, tidak ada kredit, tidak ada kuota harian.",
  },
  {
    q: "Apakah saya harus membuat akun?",
    a: "Tidak. Anda membuka halamannya dan langsung menghitung. Login hanya berguna untuk satu hal: menyinkronkan riwayat Trainer Anda antar perangkat. Tanpa akun, tidak ada fitur yang hilang.",
  },
  {
    // 관련검색 `gto poker app` 흡수 — «앱»의 정체를 정직하게 가른다(설치 불필요 · PWA는 바로가기).
    q: "Apakah harus mengunduh atau menginstal aplikasi?",
    a: "Tidak. Solver ini berjalan langsung di browser Anda lewat WebAssembly — Windows, macOS, Linux, dan ponsel, tanpa file instalasi. Kalau mau, Anda bisa memasangnya ke layar utama supaya selalu gampang dijangkau: tidak ada yang benar-benar terinstal — hanya ikon yang membuka kembali browser, tanpa meminta izin sistem apa pun.",
  },
  {
    q: "Apa itu range di poker?",
    a: "Range adalah kumpulan semua hand yang mungkin dipegang seorang pemain dalam satu situasi. Pemula bertanya «dia pegang apa?»; pemain yang sudah belajar bertanya «sampai di sini, apa saja yang tersisa di range-nya?». Solver bekerja sepenuhnya di level itu: Anda memasukkan dua range, dan solver memberi tahu cara memainkan masing-masing dari 169 hand awal — bukan menebak satu hand tertentu.",
  },
  {
    // 관련검색 `gto poker chart` 흡수 — 🔴 프리플랍 표 축은 `holdem-starting-hands-chart`가 소유한다.
    //    이 문항은 «chart와 solver의 차이»만 답하고 프리플랍은 핸드오프한다(카니발 가드).
    q: "Apa bedanya solver GTO dengan chart GTO poker?",
    a: "Chart adalah jawaban beku yang dicetak sekali untuk selamanya; solver menghitung ulang untuk situasi persis yang Anda berikan. Ganti satu kartu di board: chart tetap sama, solver mengeluarkan strategi yang berbeda. Keduanya tidak bersaing — chart memberi tahu hand mana yang masuk ke pot sebelum flop, solver memberi tahu cara memainkannya setelah flop jatuh. Untuk chart preflop, ada tab Chart preflop di dalam app dan panduan chart starting hands di blog.",
  },
  {
    q: "Seberapa akurat solver yang berjalan di browser?",
    a: "Algoritmanya sama dengan yang dipakai solver desktop: iterasi menuju keseimbangan sampai exploitability turun di bawah target yang Anda tetapkan. Semakin rendah targetnya, semakin presisi hasilnya dan semakin lama perhitungannya; untuk belajar sehari-hari, nilai bawaannya sudah cukup. Yang membatasi bukan kebenaran hasilnya, melainkan memori dan kecepatan — satu tab browser hanya bisa memakai sekitar 4 GB, jadi pohon keputusan yang sangat besar memang lebih cocok dijalankan di solver desktop.",
  },
  {
    // 🔴 RTA 방어(브리프 §7-4 금지 축). 플랫폼 «규정» 사실만 — 법 판정 아님(§7-5 합법성 축 닫힘).
    q: "Bolehkah dipakai saat bermain poker online?",
    a: "Tidak — bantuan waktu nyata (RTA) dilarang secara tegas oleh syarat layanan hampir semua ruang poker, dan yang ketahuan akan diblokir akunnya. Solver ini adalah alat belajar di luar meja: meninjau hand yang sudah Anda mainkan, membedah satu spot, berlatih dengan Trainer. Untuk itulah alat ini dibuat.",
  },
  {
    q: "Apakah bisa dipakai di iPhone atau Safari?",
    a: "Bisa, tetapi lebih lambat. iOS hanya mengizinkan satu thread perhitungan di browser, sedangkan di tempat lain solver membagi pekerjaan ke beberapa inti prosesor. Pohon keputusan yang besar lebih nyaman dihitung di komputer; di macOS, Chrome disarankan.",
  },
  {
    // 🔴 「오프라인으로 계산까지 된다」로 쓰지 마라 — 오프라인은 스팟 열람·트레이너뿐(형제 랜딩 공통 경고).
    q: "Bisa berlatih offline?",
    a: "Bisa, dengan satu syarat: mesin perhitungan harus pernah dimuat sekali saat online, kalau Anda ingin menghitung spot sendiri. Selebihnya, setelah app dipasang ke layar utama, spot belajar dan Trainer hidup di perangkat Anda — di kereta, di pesawat, apa pun kondisi koneksinya.",
  },
  {
    q: "Apakah solver ini juga menghitung preflop?",
    a: "Tidak. Alat ini mencakup situasi heads-up (dua pemain) setelah flop: flop, turn, river. Tidak menghitung preflop adalah pilihan: dari sesi ke sesi, range open Anda nyaris tidak berubah, sedangkan postflop berubah di setiap flop. Untuk preflop, app menyediakan tab Chart preflop — range open dan pertahanan yang bisa dilihat sambil Anda menyusun spot.",
  },
  {
    // ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B). «방식의 차이»만.
    q: "Apa bedanya dengan GTO Wizard atau PioSolver?",
    a: "Semuanya keluarga solver; yang membedakan adalah di mana dan kapan perhitungannya terjadi. Di sini, jawaban dihitung saat Anda mengeklik, dengan range dan pohon keputusan Anda sendiri, di perangkat Anda sendiri. Pustaka solusi seperti GTO Wizard menampilkan jawaban yang sudah dihitung sebelumnya dan disimpan dalam katalog. PioSolver adalah program desktop yang diinstal, terutama di Windows, dan menghitung di komputer Anda. Tidak ada yang «lebih baik» secara mutlak — kebutuhannya berbeda.",
  },
  {
    q: "Berapa lama satu perhitungan?",
    a: "Tergantung ukuran pohon keputusan dan prosesor Anda: dari beberapa detik sampai beberapa menit. Kalau hanya ingin langsung melihat hasil, buka spot belajar mana pun — semuanya sudah dihitung, strateginya tampil begitu diklik.",
  },
  {
    q: "Apakah range saya dikirim ke server?",
    a: "Tidak. Perhitungan berjalan di prosesor perangkat Anda sendiri, tanpa lewat server kami. Range yang disimpan tetap ada di browser Anda; range itu hanya keluar kalau Anda membuat tautan Bagikan Spot atau mengekspor file. Satu-satunya pengecualian: riwayat Trainer — kalau login, riwayat disimpan di akun Anda supaya bisa dilanjutkan di perangkat lain.",
  },
  {
    q: "Apakah rake ikut dihitung?",
    a: "Ya. Persentase rake dan cap rake diatur sebelum perhitungan, supaya strateginya sesuai kondisi meja Anda yang sebenarnya. Bedanya paling terasa di pot kecil — persis di tempat rake menentukan hand mana yang masih menguntungkan.",
  },
  {
    // 관련검색 `gto poker practice` 흡수. 🔴 팟 대비 비율이다 — 절대 bb가 아니다(앱 축어 «relatif
    //    terhadap pot»). 수치 나열의 정본은 본문 불릿 · 이 답은 요약형.
    q: "Apa itu Trainer GTO, dan bagaimana ia menilai keputusan Anda?",
    a: "Mode latihan: Trainer menempatkan Anda di satu spot yang sudah dihitung, Anda memilih satu aksi, dan Trainer memberi tahu berapa EV yang hilang dibandingkan aksi optimal. Karena GTO memang mencampur aksinya, memilih opsi yang jarang bukan otomatis kesalahan — yang menentukan adalah dua ambang relatif terhadap pot (0,35% dan 1%) yang memisahkan pilihan terbaik, masih bisa diterima, dan spot yang perlu ditinjau ulang, ditambah dua batas bawah (0,02bb dan 0,05bb) yang di bawahnya selisih tidak lagi bisa dibedakan dari noise perhitungan solver.",
  },
  {
    q: "Bisakah menyimpan dan membagikan spot?",
    a: "Bisa. Range dan pengaturan bisa disimpan, diimpor, dan diekspor dalam JSON; ringkasan hasil bisa diekspor ke CSV; dan tautan Bagikan Spot membuka spot yang persis sama di perangkat orang lain. Untuk membahas satu hand dengan teman belajar, ini jalan terpendek.",
  },
  {
    q: "Cocok untuk cash game atau turnamen?",
    a: "Solver ini menghitung dalam EV chip (chip EV): langsung berlaku di cash game, dan di fase turnamen ketika ICM belum banyak berpengaruh. Menjelang bubble dan lompatan hadiah, keputusan yang benar bisa menyimpang dari jawaban EV chip — itu perhitungan lain, yang tidak dilakukan alat ini.",
  },
  {
    // 🟢 언어 열거가 앱 셀렉터(11개)와 1:1이다 — 브리프 실측 `solver/src/i18n.ts:18`.
    q: "Apakah tampilannya berbahasa Indonesia?",
    a: "Ya, seluruhnya — menu, spot belajar, Trainer: semuanya sudah disesuaikan sepenuhnya untuk bahasa Indonesia, bukan terjemahan setengah jadi. Pemilih bahasa juga menyediakan bahasa Inggris, Korea, Jepang, Spanyol, Portugis, Jerman, Mandarin aksara sederhana, Mandarin aksara tradisional, Prancis, dan Melayu.",
  },
  {
    // 관련검색 `gto poker calculator` 흡수 — 앱 내장 Equity 탭(네비 축어 «Equity % menang»)이 받는다.
    q: "Apakah ada kalkulator equity poker gratis di dalamnya?",
    a: "Ada — tab Equity (% menang), gratis dan tanpa akun: Anda memilih dua kartu Anda, lawan bisa berupa satu hand tertentu atau satu range utuh, dan board kosong memberikan equity preflop — dengan 3, 4, atau 5 kartu, Anda mendapat equity flop, turn, atau river. Tab ini menghitung equity all-in antara dua pemain; begitu ada bet dan fold di tengah jalan, itu pekerjaan solver itu sendiri.",
  },
  {
    q: "Apakah ini solver GTO poker open source?",
    a: "Ya. Solver ini adalah fork dari WASM Postflop (AGPL-3.0), dengan kode sumber hasil modifikasi yang dipublikasikan di bawah lisensi yang sama — ditambah antarmuka berbahasa Indonesia, spot belajar yang sudah dihitung, dan Trainer GTO. Tautan ke GitHub ada di dalam app.",
  },
  {
    // 🔴 게임 의도 방어 — `poker gratis`(50)는 조준 금지(브리프 §2-1). 조준이 아니라 «구분»이다.
    q: "Apakah ini permainan poker online gratis?",
    a: "Bukan — di sini tidak ada lawan virtual atau meja untuk dimainkan: yang dihitung adalah strategi. Untuk bermain poker, Anda butuh ruang poker; untuk tahu seberapa sering satu hand harus bet, check, atau fold di board tertentu — dan mengapa — solver inilah yang Anda butuhkan. Meski begitu, Trainer terasa seperti permainan: Anda dihadapkan pada keputusan nyata, lalu dinilai.",
  },
];

export default SOLVER_FAQ_ID;
