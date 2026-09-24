import type { Post } from "../posts";

// ID series ⑥: current EN source; preserve measured frequencies without the rejected suited-six blocker explanation.
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "Lebih Banyak Trips, Masih Check?",
  seoTitle: "Trips Lebih Banyak, Check 97% — Board 6-6-3",
  desc: "BB memiliki lebih banyak trips, tetapi tetap check 97% di 6-6-3. Bandingkan trips, pocket pair, dan bagian range yang hanya memakai pair board.",
  tldr: "Pada 6♣6♦3♥, big blind check 97,0% meski memiliki 26 combo trips, lebih banyak daripada 20 milik button. Trips hanya sebagian kecil range: 18,4% range BB memiliki hand di atas pair bawaan board, sementara 81,6% sisanya mengandalkan high card. Pocket pair yang lebih tinggi dari enam menjadi kuat; TT memiliki equity 76,0% dalam contoh ini.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-24",
  masterUpdated: "2026-09-24",
  readTime: "10 mnt",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-id.webp",
  imageAlt: "Hasil solver pada 6♣6♦3♥, matriks BB hampir seluruhnya hijau untuk check dengan kategori Quads dan Full House di panel",
  keepImagesInBody: true,
  tags: ["trips vs set", "strategi board berpasangan", "flop paired", "pocket pair", "solver GTO", "minimum defense frequency"],
  content: `
Flop **6♣ 6♦ 3♥** terlihat tidak mengenai siapa pun: semuanya kartu rendah, dan dua di antaranya berpasangan.

Namun, TT memiliki **equity 76,0%** melawan range lawan pada contoh ini. Sebagai pembanding, TT melawan AK preflop biasanya berada di sekitar 54–57%, tergantung suit. Perbandingan itu memakai lawan berbeda, tetapi menunjukkan betapa nyamannya TT menghadapi range di flop ini. A9 belum membuat pair dari kartu sendiri, tetapi sekitar empat perlima range lawan juga hanya memakai pair di board. Jangan langsung menganggap A9 harus dibuang.

**Ketika sebagian besar range tidak mengenai flop, kualitas high card tetap berperan.** Pada flop [A-high](/id/blog/a-high-board-cbet) dan [K-high](/id/blog/k-high-board-cbet), pertanyaannya siapa yang terhubung dengan board. Di sini, sebagian besar kedua range sama-sama meleset. Semua angka berikut berasal dari [solver GTO gratis](/id/solver) HoldemMaster.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 6♣ 6♦ 3♥ (board rendah berpasangan)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb
Hasil | BB check 97,0% meski memiliki lebih banyak trips
:::

> **Jawaban singkat**
> BB check hampir seluruh range: **97,0%**. Memegang angka enam bukan alasan otomatis untuk lead, karena banyak hand yang kalah dari trips akan fold, padahal sebagian dapat memasukkan uang sendiri setelah Anda check. Pocket pair di atas enam mendapat nilai besar pada flop ini. As-high dan K-high yang baik juga tidak boleh otomatis dibuang ketika menghadapi taruhan kecil; respons tepat tetap bergantung pada range lawan.

## Kondisi apa yang menghasilkan angka ini?

BTN open 2,5bb, BB call, dan pemain lain fold. Hasilnya heads-up dengan pot 5,5bb serta sisa stack efektif 97,5bb. Contoh memakai perkiraan range online 100bb, dua ukuran bet sekitar sepertiga dan tiga perempat pot, tanpa rake. Mengubah range atau pilihan ukuran akan mengubah frekuensi strategi.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | Button (BTN) open 2,5bb · big blind (BB) call · pemain lain fold |
| Range | Perkiraan permainan online standar 100bb |
| Flop | 6♣ 6♦ 3♥ (board berpasangan, tiga suit berbeda) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb |
| Bet size | Sekitar 33% dan 75% pot |
| Rake | Tidak diperhitungkan |
| Tanggal pengamatan | 2026-08-20, hasil Spot belajar |

## Trips atau set: apa yang terbentuk pada board berpasangan?

**Set terbentuk ketika pocket pair mengenai satu kartu board; trips terbentuk ketika satu kartu di tangan cocok dengan pair di board.** Keduanya termasuk three of a kind dalam [urutan hand poker](/id/blog/holdem-hand-rankings), tetapi konteks strateginya berbeda.

Flop single-raised pot lain dalam seri ini menghasilkan set. Board berpasangan A♠A♥6♦ muncul belakangan, dalam kelompok blind vs blind. Pada A-7-2, BB memerlukan 77 atau 22 untuk membuat set. Pada 6-6-3, **satu kartu enam sudah membentuk trips**; justru pocket 66 menjadi quads.

| Hand Anda pada 6♣6♦3♥ | Hasilnya |
|---|---|
| A6, K6s, 96s … satu kartu enam | **Trips** — tiga kartu enam |
| 66 | **Quads** |
| 33 | **Full House** — tiga kartu tiga dan sepasang enam |
| TT, 99, 88, 77 … | **Two Pair** — pocket pair ditambah pair enam di board |

Trips lebih mudah dimiliki bersama oleh kedua pemain daripada set. **Lawan juga bisa memegang satu kartu enam**, dan kekuatan kicker menentukan siapa yang unggul. Karena itu, solver tidak memperlakukan setiap trips sebagai izin untuk langsung membesarkan pot.

## Seberapa sering BB bet pada flop rendah berpasangan?

**BB check 97,0%.** Total lead hanya 3,0%: bet 4,1bb sebesar 2,0% dan bet 1,8bb sebesar 1,0%. BB hampir selalu memberikan giliran kepada opener. Yang menarik ialah pilihan ukuran ketika BB bet: untuk pertama kalinya dalam urutan seri ini, ukuran besar lebih sering dipakai daripada ukuran kecil.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **97,0%** | 471,7 |
| Bet 4,1bb (75% pot) | **2,0%** | 9,6 |
| Bet 1,8bb (33% pot) | 1,0% | 4,7 |

Pada dua board dengan lead yang cukup sering, bet kecil mengungguli bet besar lebih dari dua banding satu: 16,8% lawan 6,9% pada [spot donk bet 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), serta 8,0% lawan 3,2% pada [flop monotone](/id/blog/monotone-board-strategy). Di sini perbandingannya berbalik. Tabel per-hand nanti memperlihatkan kelompok yang menyumbang kecenderungan tersebut.

## Mengapa check meski memiliki lebih banyak trips?

**Trips hanya mencakup 5,3% range BB.** Sebagian besar dari 94,7% sisanya memakai pair enam di board bersama high card. Pada bagian range tersebut, distribusi kartu tinggi BTN lebih baik.

Mulai dari jumlah combo. Karena 6♣ dan 6♦ berada di board, hanya 6♠ dan 6♥ yang tersisa. Setiap kelas 6x **suited** menyisakan dua combo, sedangkan A6 offsuit menyisakan enam.

| Hand 6x | BB (range call) | BTN (range open) |
|---|---|---|
| A6 (suited + offsuit) | ✅ 8 combo | ✅ 8 combo |
| K6s · Q6s | ✅ 4 combo | ✅ 4 combo |
| **J6s · T6s · 96s** | ✅ **6 combo** | ❌ tidak masuk range open |
| 86s · 76s · 65s · 64s | ✅ 8 combo | ✅ 8 combo |
| **Total** | **26 combo = 5,3%** | **20 combo = 4,0%** |

**Selisihnya tepat enam combo: J6s, T6s, dan 96s.** BB mempertahankannya dengan biaya call lebih murah; BTN tidak open ketiganya dalam range contoh ini.

Namun, gambarnya berubah ketika seluruh range diperhitungkan.

![Perbandingan kategori hand BB dan BTN pada flop 6♣6♦3♥ yang berpasangan](/images/gto-srp-paired-ranges-id.webp "6♣6♦3♥ · caller memiliki lebih banyak trips, tetapi opener lebih banyak memiliki Two Pair dan Ace-High")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Quads (66) | 0,2% | 0,2% |
| Full House (33) | 0,6% | 0,6% |
| Set/Trips (satu kartu enam) | **5,3%** | 4,0% |
| Two Pair | 12,3% | **15,5%** |
| Ace-High | 26,3% | **31,9%** |
| King-High | **16,5%** | 15,1% |
| Belum jadi | **38,7%** | 32,7% |

Hand yang lebih kuat daripada pair bawaan board berjumlah **18,4% untuk BB dan 20,3% untuk BTN**. Sisa **81,6%** range BB hanya memiliki pair enam beserta high card. BTN memiliki lebih banyak Ace-High: 31,9% dibandingkan 26,3%.

Lead menghadapi dua masalah. Dengan trips, BB dapat membuat hand lebih lemah fold; tanpa trips, ia sulit membesarkan pot menghadapi range yang kuat di bagian atas. Check mempertahankan trips dalam range yang terlindungi sekaligus memberi hand lawan kesempatan bet. Ini menjelaskan kecenderungan hampir selalu check, bukan berarti semua hand lemah pasti fold atau setiap trips selalu check.

## Mengapa equity 47 lawan 53 menjadi EQR 84 lawan 115?

**Kedua range mengenai board dengan cara serupa, tetapi kemampuan mengumpulkan hasilnya berbeda.** Banyak hand hanya memakai pair enam, sehingga equity relatif berdekatan. EV dan realisasi equity menunjukkan pengaruh posisi yang jauh lebih besar.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,2% | 52,8% |
| EV (bb) | 2,17 | 3,33 |
| **EQR (realisasi equity)** | **83,7%** | **114,5%** |

Bagian pot BB menurut equity ialah ==5,5 × 47,2% = 2,60bb==, sedangkan EV-nya 2,17bb: ==2,17 ÷ 2,60 ≈ 83,7%==. BTN mempunyai bagian equity sekitar 2,90bb tetapi EV 3,33bb, sehingga merealisasikan **114,5%** dari bagian tersebut. Equity memperhitungkan pot yang dibagi; ini bukan sekadar frekuensi menang mutlak.

Selisih **30,8 poin persentase** hampir sama dengan 29,1 poin pada [board A-high kering](/id/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-id.webp"). **Board berpasangan ini menyerupai board kering dalam cara range bermain.** Sekitar empat perlima kedua range mengandalkan pair enam dengan high card berbeda. Pemain terakhir dapat melihat tindakan lawan sebelum mengambil keputusan, sehingga lebih mudah menentukan kapan mengambil value atau menahan ukuran pot.

:::note[EQR dalam seri ini mengikuti tampilan solver. Menghitung ulang dari equity dan EV yang sudah dibulatkan dapat menghasilkan selisih beberapa persepuluh poin. Itu akibat pembulatan tampilan, bukan alasan mengubah angka sumber.]:::

## Seberapa kuat pocket pair pada 6-6-3?

**Hampir setiap pocket pair menjadi two pair.** TT membentuk T-T-6-6-3. Pengecualiannya ialah pocket pair yang cocok dengan board: 66 menjadi quads dan 33 menjadi full house.

| Hand | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76,0% | 6,66 | 159,4% | 97,7% |
| 99 | 72,6% | 5,68 | 142,4% | 96,1% |
| 88 | 69,9% | 4,96 | 128,9% | 94,8% |
| 77 | 68,5% | 4,63 | 123,0% | 94,7% |
| 55 | 63,7% | 3,82 | 108,9% | 93,8% |
| 44 | 61,8% | 3,42 | 100,5% | 93,9% |
| 22 | 50,4% | 1,83 | 66,0% | 95,8% |

Angka merupakan rata-rata enam combo setiap pocket pair; combo individual dapat berbeda sekitar sepersepuluh poin.

**TT dengan equity 76,0% berada di bagian teratas range BB setelah 6x, 33, dan 66 dikecualikan.** JJ dan pocket pair lebih tinggi masuk range 3-bet preflop sehingga tidak tiba sebagai caller.

Perbedaan besar muncul di bagian bawah. **44 masih merealisasikan hampir seluruh bagian equity-nya**, dengan EQR 100,5% dan EV 3,42bb, di atas rata-rata range 2,17bb. EQR 100% bukan tanda impas. Yang tertinggal adalah 22: equity 50,4%, EQR 66,0%, dan EV 1,83bb.

**Batas pentingnya angka tiga, bukan enam.** 55 dan 44 sama-sama di bawah enam, tetapi tetap merealisasikan seluruh bagian equity. Pocket 22 berada di bawah kedua rank board, kalah dari 33 serta setiap hand yang memegang angka tiga. Jika angka tiga kedua muncul di turn atau river, board meng-counterfeit 22 sehingga pocket pair itu tak lagi digunakan — di 6-6-3-3-K, 22 hanya memainkan two pair milik board (hanya kartu 2 di street lainnya yang menyelamatkannya). Jadi, kesimpulannya bukan “semua pair kecil bagus di board rendah”, melainkan **pair di atas tiga masih bekerja baik pada contoh ini, sementara 22 tertinggal**.

Ada satu kelompok two pair yang mudah terlewat: **hand yang memiliki angka tiga**. A3 memainkan pair enam dan pair tiga dengan kicker As. Hand itu mengalahkan 22, tetapi kalah dari pocket pair di atas tiga.

## Berapa combo quads dan full house yang benar-benar ada?

**Satu combo quads dan tiga combo full house.** Keduanya dapat dihitung langsung.

- **Quads (66):** karena 6♣ dan 6♦ terbuka, hanya ==6♠6♥== yang tersisa. Sekitar 0,2% dari 486 combo adalah 1,0; tabel per-hand memang hanya memiliki satu baris quads.
- **Full House (33):** setelah 3♥ dikeluarkan, tersisa ==3♠3♦ · 3♠3♣ · 3♦3♣==. Dengan angka tampilan yang dibulatkan, 0,6% × 486 = 2,9 combo.

63 juga akan membentuk full house, tetapi 63s maupun 63o tidak ada dalam kedua range. Karena itu, **33 mengisi seluruh kategori full house** pada contoh ini.

Empat combo tersebut menjelaskan mengapa bagian teratas board berpasangan tetap berbahaya. EQR 6♠6♥ mencapai **359,7%**, dengan EV 19,78bb. Tiga combo 33 memiliki EQR **309,8%, 309,8%, dan 309,5%**, sekitar tiga sampai empat kali bagian pot berdasarkan equity. Jarang muncul, tetapi mampu menghasilkan pot sangat besar.

## Mengapa bet besar lebih sering daripada bet kecil?

**Trips dan quads lebih sering memilih ukuran besar ketika mereka bet.** Perhatikan beberapa combo berikut:

| Hand | Bet 4,1bb (75% pot) | Bet 1,8bb (33% pot) | Check |
|---|---|---|---|
| K♠6♠ | **7,8%** | 0,3% | 92,0% |
| Q♥6♥ | **7,9%** | 0,7% | 91,5% |
| J♥6♥ | **9,0%** | 3,3% | 87,7% |
| 6♠6♥ (quads) | **9,6%** | 0,0% | 90,4% |
| T♠T♥ (two pair) | 0,8% | 1,7% | 97,5% |

Trips masih sesekali bet kecil: K♠6♠ 0,3%, Q♥6♥ 0,7%, dan J♥6♥ 3,3%. Namun, frekuensi bet besarnya beberapa kali lipat. Satu-satunya baris dengan bet kecil tepat 0,0% ialah **6♠6♥, yaitu quads, bukan trips**. TT hampir tidak bet dan lebih sering memilih ukuran kecil ketika melakukannya.

Penjelasannya terkait hand yang bisa membayar. Trips yang kuat dan quads dapat membangun pot lebih besar. Two pair kalah dari setiap trips serta tiga combo 33, sehingga lebih berhati-hati. Meski begitu, jangan menganggap semua trips sama kuat: kicker yang lemah masih dapat didominasi trips lawan.

**Tabel ini juga bukan aturan “kicker lebih tinggi berarti bet lebih besar”.** Frekuensinya justru K♠6♠ 7,8% < Q♥6♥ 7,9% < **J♥6♥ 9,0%**. Perbedaan itu tidak boleh dijelaskan dengan klaim bahwa K atau Q suited memblokir trips lawan lebih banyak. Pada board ini, kartu enam yang Anda pegang sudah menghilangkan kombinasi 6x suited dengan suit tersebut. K6o dan Q6o tidak berada dalam range lawan, sehingga K/Q pendamping tidak menambah blocker trips melalui jalur itu. Nilai output tetap benar; penyebab khusus selisih kecilnya tidak dapat ditetapkan dari tabel ini saja.

6x juga bukan mayoritas seluruh bet besar. Ada 26 combo dari total 486; kontribusi berbobotnya hanya sekitar seperempat dari total kira-kira 9,7 combo yang bet besar. Kategori lain menyumbang sisanya.

Karena total lead hanya 3,0%, situasi ini jarang muncul. Pelajarannya tetap berguna: **ukuran taruhan mengikuti interaksi seluruh range, bukan sekadar nama hand**.

## Haruskah As-high fold menghadapi [c-bet](/id/blog/holdem-continuation-bet)?

**Jangan otomatis fold hanya karena belum membuat pair dari kartu sendiri.** Hanya 18,4% range BB memiliki sesuatu di atas pair bawaan board. Melepas semua hand lain terhadap taruhan kecil akan membuang terlalu banyak bagian range.

Ketika menghadapi bet 1,8bb ke pot 5,5bb, frekuensi bertahan yang membuat pure bluff tidak otomatis untung ialah sekitar ==5,5 ÷ (5,5 + 1,8) = 75,3%==. Acuan ini disebut **minimum defense frequency (MDF)**.

Tambahkan seluruh Ace-High 26,3% dan King-High 16,5% ke kelompok kuat 18,4%: hasilnya baru **61,2%**, masih di bawah 75,3%.

Namun, **jangan menyimpulkan bahwa BB wajib mempertahankan lebih banyak hand sampai angka MDF tercapai**. MDF menyederhanakan taruhan lawan sebagai pure bluff dengan equity nol. Bluff flop masih memiliki turn dan river, sementara BB yang bertindak lebih dulu juga tidak selalu merealisasikan equity dengan baik. Contoh ini hanya menampilkan **aksi pertama flop**; respons BB setelah BTN bet belum ada. Posisi frekuensi pertahanan optimal di atas atau di bawah MDF **tidak dapat ditentukan dari hasil ini**.

Kegunaan hitungan tersebut adalah mengingatkan bahwa high card tidak otomatis tidak berharga. Banyak As-high dan K-high dapat layak melanjutkan berdasarkan range serta ukuran taruhan. Melepas semuanya terhadap satu c-bet kecil merupakan kebiasaan yang mudah dimanfaatkan.

Pada board berpasangan, tidak ada hand yang secara literal hanya As-high: semua memiliki pair enam. “Ace-High” di sini adalah label aplikasi untuk pair board dengan As sebagai kartu tertinggi dari tangan.

:::note[MDF mengasumsikan taruhan lawan sebagai pure bluff. Frekuensi yang tepat juga bergantung pada realisasi equity di street berikutnya, sehingga MDF merupakan titik awal, bukan kewajiban. Sisi harga call dari hitungan yang sama dibahas pada [pot odds](/id/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), sedangkan [pertahanan menghadapi 3-bet](/id/blog/holdem-3bet) memakai rumus tersebut pada preflop.]:::

## Apa yang dapat Anda terapkan saat bermain?

- **Jangan meremehkan pocket pair menengah pada board rendah berpasangan.** 77 hingga TT memiliki equity sekitar 68–76% di sini. 44 dan 55 juga melampaui rata-rata range. Pocket 22 berbeda: ia merealisasikan sekitar dua pertiga bagian equity karena berada di bawah kedua rank board.
- **Trips di flop bukan alasan otomatis untuk lead.** Combo enam lebih sering lead daripada rata-rata range, tetapi masih check kira-kira sembilan dari sepuluh kali. Check memberi hand lebih lemah kesempatan memasukkan uang dan mempertahankan pilihan check-raise atau call-down. Namun, **nilai tambahan check-raise belum diukur**: hasil ini tidak menyediakan frekuensi c-bet BTN ataupun EV check-raise.
- **Evaluasi As-high terhadap taruhan kecil, jangan fold otomatis.** Sebanyak 79,7% range BTN juga hanya memakai pair board: Ace-High 31,9%, King-High 15,1%, dan Belum jadi 32,7%.
- **Kicker menentukan trips mana yang unggul.** Setelah Anda memegang satu kartu enam, quads 6♠6♥ tidak mungkin ada di tangan lawan. Tinggal tiga combo 33 yang merupakan kategori lebih tinggi. Akan tetapi, hanya trips dengan kicker As yang tidak kalah dari trips lain. Kicker kedua di flop ini adalah tiga dari board; kartu di samping enam menjadi pembeda. Dengan 76s, Anda masih kalah dari A6, K6, Q6, dan 86 milik BTN. Trips berkicker lemah lebih cocok dinilai sebagai bluff-catcher daripada alasan otomatis membesarkan pot.

:::readnext[Lanjut membaca]
/id/blog/monotone-board-strategy | Nut Flush Masih Check di Q-9-2? | /images/gto-srp-monotone-oop-id.webp
/id/blog/donk-bet-strategy | Donk Bet di 9-8-7 Bisa Masuk Akal | /images/gto-srp-middle-connected-oop-id.webp
:::

## Cara memeriksa hasilnya sendiri

Buka [solver GTO gratis](/id/solver), lalu **Spot belajar → Board paired → ⚡ Lihat hasil**.

Cari **satu baris 6♠6♥** di tabel per-hand. Itulah satu-satunya quads yang mungkin. EQR-nya **359,7%**, tertinggi dalam seri ini; pembanding berikutnya ialah 6♥6♣ pada [flop rendah rainbow](/id/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-id.webp") dengan **318,9%**. Bandingkan dengan tiga baris 33 untuk melihat betapa sedikit combo yang mengisi puncak range.

Buka **Trainer GTO** di sidebar untuk berlatih dengan bobot range yang sebenarnya dan membaca kerugian EV dari keputusan Anda. Gratis, tanpa instalasi, serta dapat digunakan tanpa akun.

## Pertanyaan umum

**Q. Mengapa trips lebih rentan daripada set pada board berpasangan?**

A. Trips hanya memerlukan satu kartu yang cocok dengan pair board. BTN memiliki 20 combo dan BB 26 combo pada contoh ini, sehingga trips lawan perlu diperhitungkan. Kicker kedua juga ditentukan oleh board, membuat trips dengan kicker lemah kalah dari trips berkicker tinggi. [Peringkat hand](/id/blog/holdem-hand-rankings) set dan trips sama; distribusi serta situasinya berbeda.

**Q. Pocket pair menjadi hand apa pada 6-6-3?**

A. Hampir semuanya two pair: TT memainkan T-T-6-6-3. Pengecualian ialah 66 menjadi quads dan 33 menjadi full house. Two pair tersebut tidak sama nilainya. Pocket 22 berada di bawah kedua rank board, kalah dari pocket pair lain, dan hanya memiliki equity 50,4% dalam hasil ini.

**Q. Mengapa caller memiliki lebih banyak trips daripada raiser?**

A. BB dapat mempertahankan beberapa hand suited yang tidak dibuka BTN. J6s, T6s, dan 96s menambah tepat enam combo, menjelaskan seluruh selisih 26 lawan 20. BB tetap hampir selalu check karena trips hanya 5,3% dari keseluruhan range-nya.

**Q. Apa itu minimum defense frequency?**

A. MDF adalah acuan frekuensi bertahan agar pure bluff dengan equity nol tidak otomatis menghasilkan keuntungan: pot ÷ (pot + bet). Bet 1,8bb ke pot 5,5bb menghasilkan 75,3%. Bertahan mencakup call dan raise; angka itu bukan perintah call sebanyak persentase tertentu. Equity bluff dan permainan street berikutnya dapat mengubah pertahanan optimal.

**Q. Seberapa sering flop memiliki pair?**

A. Sekitar **17,2%**, atau kurang lebih satu dari enam flop, jika menghitung pair atau three of a kind pada board. Agar ketiganya berbeda rank, kartu kedua harus menghindari rank pertama dan kartu ketiga menghindari keduanya: ==(48 ÷ 51) × (44 ÷ 50) = 82,8%==. Sisanya berpasangan atau lebih baik. Sebagai pembanding, dua hole card yang tidak berpasangan sama-sama tidak mengenai flop dengan peluang ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67,6%==. Artinya, setidaknya salah satunya mengenai rank flop sekitar **32,4%**, hampir dua kali frekuensi board berpasangan.

**Q. Apakah angka ini berlaku pada permainan saya?**

A. Gunakan sebagai acuan ketika kondisinya serupa: heads-up, 100bb, BTN open 2,5bb, range pertahanan standar, tanpa rake. Penyesuaian yang layak dipertimbangkan ialah lead lebih sering daripada 3,0% terhadap lawan yang sangat jarang c-bet board berpasangan. Jika Anda terus check, lawan tersebut juga lebih sering memberi kartu gratis; penyesuaian ini merupakan pembacaan perilaku lawan, bukan hasil node respons dalam contoh.
`.trim(),
};

export default POST;
