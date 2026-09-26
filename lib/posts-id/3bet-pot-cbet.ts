import type { Post } from "../posts";

// ID series ⑧: current EN source, with source-contract corrections for zero-frequency EV claims and stack arithmetic.
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "BB Tidak Check di A-K-2: Mengapa?",
  seoTitle: "BB Bet 100% — C-Bet Pot 3-Bet di A-K-2",
  desc: "Di pot 3-bet A-K-2, BB bet 100% range. Lihat peran range preflop, SPR 4,0, dan dua ukuran taruhan tanpa menganggap semua flop harus dibet.",
  tldr: "Pada A♦K♠2♥ dalam pot 3-bet, BB bet seluruh range: check dibulatkan menjadi 0,0%, dan tidak ada satu pun dari 63 combo yang check sampai 0,1%. Pada tujuh contoh sebelumnya BB check 76,2%–99,9%. Peran preflop kini berbalik: BB melakukan 3-bet, sementara BTN call tanpa AA dan KK karena keduanya masuk range 4-bet. BB memiliki set tertinggi, dan SPR 4,0 memperkecil ruang untuk menunda pembangunan pot.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "12 mnt",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-id.webp",
  imageAlt: "Hasil solver pot 3-bet pada A♦K♠2♥, seluruh combo aktif BB memilih bet dan panel Check menunjukkan 0,0%",
  keepImagesInBody: true,
  tags: ["SPR poker", "c-bet pot 3-bet", "stack efektif", "rasio stack terhadap pot", "flop A-K-2", "solver GTO"],
  content: `
Pada tujuh spot sebelumnya, BB hampir selalu memulai dengan check. Bahkan di [flop 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), tempat lead paling sering muncul, BB hanya bet 23,7%. Pada board lainnya, check berkisar antara 88,8% dan 99,9%.

Kali ini kebalikannya: **BB bet seluruh range, yaitu semua 63 combo, masing-masing sedikitnya 99,9% dari waktu**.

Perubahan utama ada pada preflop. BB **melakukan 3-bet**, bukan call, sehingga pot menjadi 22,5bb alih-alih 5,5bb. Board juga berubah: contoh ① menggunakan A♥7♦2♣, sedangkan ini A♦K♠2♥. Jadi, ini bukan eksperimen yang hanya mengubah aksi preflop. Semua angka berikut berasal dari [solver GTO gratis](/id/solver) HoldemMaster.

:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22,5bb · stack efektif 89bb · **SPR 4,0**
Hasil | BB bet 100% — check 0,0%
:::

> **Jawaban singkat**
> BB bet seluruh range: ukuran kecil 7,4bb, sekitar 33% pot, dipakai 57,8%; ukuran besar 14,9bb, sekitar 66%, dipakai 42,2%. Bukan berarti semua hand kuat: 38,1% range merupakan pocket pair di bawah king. BTN tidak membawa AA dan KK dalam range call karena keduanya masuk range 4-bet. Keunggulan pada hand terkuat, bersama SPR 4,0, mendukung pembangunan pot sejak flop.

## Kondisi apa yang menghasilkan angka ini?

**Kondisinya berbeda dari tujuh contoh pertama.** Pot, stack, dan peran preflop berubah. Karena itu, bandingkan input sebelum menafsirkan strategi.

| Kondisi | Spot ini (pot 3-bet) | ①–⑦ (single-raised pot) |
|---|---|---|
| Aksi preflop | Button (BTN) open → **big blind (BB) 3-bet hingga 11bb** → BTN call | BTN open 2,5bb → BB call |
| OOP (beraksi lebih dulu) | **BB — 3-bettor** | BB — caller |
| IP | BTN — caller | BTN — opener |
| Pot awal | **22,5bb** | 5,5bb |
| Stack efektif | **89bb** | 97,5bb |
| **SPR** | **4,0** | 17,7 |
| Bet size | Sekitar 1/3 dan 2/3 pot | Sekitar 33% dan 75% (⑦ hanya satu ukuran) |
| Rake | Tidak diperhitungkan | Tidak diperhitungkan |
| Tanggal pengamatan | 2026-08-20 | 2026-08-20 |

Pot 22,5bb berasal dari ==11 untuk 3-bet + 11 call + 0,5 small blind yang fold==. Stack efektif tersisa ==100 − 11 = 89bb==.

## Benarkah frekuensi check tepat 0%?

**Layar menunjukkan 0,0%, dengan bobot combo juga 0,0.** Output mentah masih menyimpan sisa kecil: 41 dari 63 combo membawa sedikit check, terbesar K♥K♦ sebesar 0,09%, dan jumlah seluruhnya kurang dari seperseratus combo. Itu noise solver, bukan strategi, jadi baca sebagai nol. Bet terbagi antara 57,8% untuk ukuran kecil dan 42,2% untuk ukuran besar. Ini berlawanan dengan semua tujuh single-raised pot sebelumnya, ketika check selalu menjadi pilihan utama BB.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Bet 7,4bb (33% pot) | **57,8%** | 36,6 |
| Bet 14,9bb (66% pot) | 42,2% | 26,4 |
| Check | **0,0%** | **0,0** |

Persentase dan bobot combo memakai penggabungan yang berbeda sehingga pembagian sederhana tidak selalu sama: ==36,6 ÷ 63 = 58,1%==, sedangkan panel menunjukkan 57,8%. **Tabel mengutip nilai tampilan.** Perbedaan tersebut tidak mengubah hasil check dengan bobot nol.

Check 0,0% bukan larangan. Artinya, **strategi hasil perhitungan ini tidak memakai check** pada range dan pohon tersebut. Frekuensi saja tidak membuktikan bahwa EV check setiap combo lebih rendah secara ketat daripada EV bet; untuk itu diperlukan perbandingan EV tindakan.

Pada beberapa contoh sebelumnya, tindakan yang sangat jarang masih muncul dengan frekuensi 0,2% atau 0,1%. Di sini, tidak ada satu combo pun yang check sampai 0,1%.

## Mengapa tidak ada combo yang memilih check?

**BB memegang bagian terkuat board ini.** Ada tiga pocket pair yang dapat menjadi set pada A-K-2, dan BB memiliki dua yang tertinggi. Ketika pemain yang beraksi pertama juga jauh lebih kuat di puncak range, bet dapat menekan lawan dengan range yang luas. Tabel kategori memperlihatkan besarnya keunggulan tersebut.

| Kategori | BB (OOP) | Combo | BTN (IP) | Combo |
|---|---|---|---|---|
| Set/Trips | **9,5%** | 6 | 2,3% | **3** |
| Two Pair | **14,3%** | 9 | 6,9% | 9 |
| Top Pair (As) | **33,3%** | 21 | 20,8% | 27 |
| Second Pair (king) | 4,8% | 3 | **11,5%** | 15 |
| Underpair | 38,1% | 24 | **46,2%** | 60 |
| Belum jadi | **0,0%** | **0** | 12,3% | 16 |

Di layar BB tidak memiliki baris “Belum jadi”, karena kategori bernilai nol tidak ditampilkan.

**AA, KK, dan 22 membuat set, tetapi BTN hanya memiliki 22.** Panel aplikasi menyatukannya dalam kategori Set/Trips. Pada board tanpa pair, pocket pair yang mengenai board adalah **set**; perbedaannya dijelaskan dalam [contoh board berpasangan](/id/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-id.webp"). AA dan KK milik BTN masuk range 4-bet preflop, menyisakan tiga combo set BTN melawan enam combo set tertinggi BB.

Keunggulan inilah yang memungkinkan BB bet bahkan dengan bagian range yang tidak terlalu kuat. Sebanyak **38,1%** range-nya masih berupa pocket pair di bawah king.

**“Belum jadi 0,0%” bukan penyebab tunggal check menghilang.** Range 3-bet yang sama pada [flop 8-5-2](/id/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-id.webp") memiliki 48,2% As-high tanpa pair, tetapi tetap hanya check **2,0%**. Perubahan dari 0% menjadi sekitar 48% hand tanpa pair hanya mengubah check dua poin. Yang perlu dibaca ialah bagaimana board mengubah hubungan kedua range, bukan sekadar berapa banyak hand yang meleset.

:::note[Ini kebalikan dari [flop A-high dalam single-raised pot](/id/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-id.webp"). Di sana BB adalah pihak dengan range **capped**, tanpa AA, AK, dan AQ karena hand tersebut dipakai untuk 3-bet. BB check 98,2%. Di sini BB justru 3-bettor yang mempertahankan bagian teratas. Keduanya A-high, tetapi board serta peran preflopnya berbeda.]:::

## Apa itu SPR dalam poker?

**SPR, atau stack-to-pot ratio, adalah stack efektif dibagi pot pada awal flop.** Pada contoh ini, ==89 ÷ 22,5 = 4,0== setelah pembulatan. Sisa stack hanya sekitar empat kali pot. Karena itu, keputusan flop lebih cepat berkaitan dengan seluruh stack dan ruang untuk menunda pembangunan pot menjadi lebih sempit.

| Situasi | Pot | Stack efektif | SPR |
|---|---|---|---|
| Single-raised pot (①–⑦) | 5,5bb | 97,5bb | **17,7** |
| Pot 3-bet (contoh ini) | 22,5bb | 89bb | **4,0** |

SPR membantu memperkirakan **berapa taruhan yang diperlukan untuk memasukkan stack**, bukan hanya jumlah chip yang tersisa. Mulai dengan ukuran sekitar 66% yang ditawarkan pada flop, lanjutkan ukuran serupa di turn, lalu gunakan sisa stack pada river:

- Flop **14,9bb** → jika call, pot menjadi 52,3bb dan stack tersisa 74,1bb.
- Turn **34,5bb** → jika call, stack tersisa 39,6bb.
- River **39,6bb** all-in.

**Tiga taruhan menghabiskan stack: ==14,9 + 34,5 + 39,6 = 89,0==.** Dua yang pertama baru berjumlah 49,4bb, atau 55,5% stack. Taruhan river adalah sisa stack, bukan 66% pot lagi. Jika ingin memakai persentase pot yang sama pada ketiga street dan tepat mencapai all-in, ukurannya ==sekitar 54% pot==.

Sebagai pembanding, tiga taruhan dua pertiga pot dalam single-raised pot menghasilkan ==3,67 + 8,56 + 19,96 = 32,2bb==, sekitar sepertiga stack. **SPR 17,7 dan SPR 4,0 memberi ruang pembangunan pot yang berbeda.** Pada SPR rendah, menunggu satu street dapat menyulitkan pengumpulan seluruh value yang tersedia. Ini ilustrasi aritmetika, bukan strategi turn dan river hasil solve contoh ini.

## Mengapa ukuran kecil lebih sering digunakan?

**Bentuk range lebih menjelaskan pilihan ini daripada kedalaman stack saja.** Semua 63 combo BB sudah pair atau lebih baik. Bagian terbawah berupa hand tanpa pair hilang, sehingga range tidak terbelah menjadi nuts dan hand kosong. Kondisi itu mendukung bet kecil dengan bagian luas range: **57,8%** memakai sekitar sepertiga pot.

Range ini juga bukan condensed dalam pengertian biasa, yakni range tanpa bagian bawah **dan** tanpa bagian paling atas. BB justru memiliki bagian atas: keenam combo set AA dan KK. Pada A-K-2 rainbow, draw langsung juga sangat sedikit sehingga kebutuhan memberi harga mahal pada draw lebih kecil.

**“Stack dangkal berarti bet kecil” tidak cukup.** Dua spot berikutnya memiliki SPR sama-sama 4,0, tetapi hampir selalu memilih ukuran besar: Q-T-7 **98,4%** dan [8-5-2](/id/blog/3bet-pot-low-board) **97,8%**. Pada Q-T-7, bet besar memberi harga bagi banyak draw. Pada 8-5-2 yang kering, range BB terbelah antara overpair dan As-high dengan sedikit isi di tengah, membentuk range terpolarisasi yang lebih cocok memakai ukuran besar. Kedalaman stack sama, tetapi bentuk range dan kebutuhan terhadap lawan berbeda.

**Ukuran besar juga bukan kategori khusus untuk semua hand kuat.** Kelompok set, two pair, dan top pair berjumlah ==6 + 9 + 21 = 36 combo, 57,1%==. Jumlah itu lebih besar daripada frekuensi bet besar 42,2%. Kelayakan memainkan seluruh stack tetap harus dibedakan berdasarkan hand dan respons lawan.

Petunjuknya ialah bobot combo yang tidak bulat: **26,4 bet besar dan 36,6 bet kecil**. Hand individual mencampur kedua ukuran, bukan setiap kelas ditugaskan ke satu ukuran secara mutlak. Jadi, 42,2% adalah bagian berbobot dari range, bukan nama satu tingkat kekuatan hand. Lawan tidak dapat langsung mengenali kekuatan hanya dari ukuran.

## Apa sebenarnya isi range BTN?

**Hampir separuhnya, 46,2%, berupa pocket pair tanpa As atau king.** Kelompok itu menghadapi flop yang langsung menampilkan kedua overcard tersebut.

![Komposisi range pada pot 3-bet A♦K♠2♥, BB memegang set tertinggi sementara range BTN banyak berisi pocket pair menengah](/images/gto-3bp-ace-king-ranges-id.webp "Pot 3-bet A-K-2 · BB mempertahankan bagian terkuat board, sedangkan banyak hand BTN terkumpul di tengah")

Underpair BTN berjumlah 60 combo: QQ sampai 33, sepuluh pocket pair dengan enam combo masing-masing. Kelompok ini sulit melanjutkan menghadapi beberapa barrel pada tekstur tersebut.

Namun, 130 combo BTN adalah **range call yang diberikan kepada solve ini**: pengaturan preflop yang dimasukkan ke tree, bukan pertahanan yang dihitung solver, apalagi hasil pengamatan semua lawan. Sebagian pemain nyata lebih sering fold pocket pair menengah dan call dengan A-Q, A-J, atau K-Q. Melawan mereka, porsi 46,2% tadi berubah. Kenali range yang benar-benar dipakai lawan sebelum menerapkan angka contoh.

## Bagaimana BTN menghadapi c-bet sepertiga pot?

**Sulit untuk terus call sampai river dengan pocket pair menengah.** As dan king di board sama-sama berada di atas underpair, dan SPR 4,0 membuat beberapa taruhan cukup untuk membawa pot mendekati seluruh stack. Meski demikian, jumlah taruhan yang diperlukan bergantung pada ukuran yang dipakai.

Urutan dua bet besar lalu sisa stack ialah 14,9 → 34,5 → 39,6bb. Untuk **bet kecil 7,4bb** yang dibahas di bagian ini, tiga taruhan justru hanya ==7,4 + 12,3 + 20,4 = 40,1bb==, atau sekitar 45% stack. **Node respons dan turn tidak tersedia dalam hasil awal ini**: Spot belajar berhenti pada keputusan pertama flop. Pembahasan respons berikut merupakan interpretasi komposisi range, bukan frekuensi tindakan yang diukur.

MDF terhadap bet 7,4bb ke pot 22,5bb ialah sekitar ==22,5 ÷ (22,5 + 7,4) = 75,3%==. Namun, bagian BTN yang membentuk hand dengan board hanya ==20,8 + 11,5 + 6,9 + 2,3 = 41,5%==. Set 2,3% tersebut ialah **22**, yang mengenai deuce, bukan As atau king. Bila hanya menghitung hand yang mengenai As atau king, hasilnya **39,2%**.

**Asumsi pure bluff dengan equity nol dalam MDF tidak cocok diterapkan mentah-mentah di sini.** BB memiliki **Belum jadi 0,0%, tanpa satu combo pun**. Tidak ada dasar untuk memperlakukan semua bagian lemah range bet sebagai bluff yang sama sekali tidak memiliki equity. Ini memberi alasan untuk mempertimbangkan pertahanan lebih ketat daripada penerapan MDF secara otomatis.

Dua batas penting tetap berlaku. Pertama, **0% Belum jadi bukan berarti 0% bluff**: underpair lemah dapat dipakai sebagai bluff atau taruhan proteksi. Kedua, respons BTN belum dihitung dalam contoh, sehingga frekuensi bertahan optimalnya tidak dapat dipastikan. Angka 41,5% bukan perintah menambah seluruh pocket pair menengah agar mencapai MDF. Apakah bet kecil pun memberi harga yang cukup bagi 60 combo tersebut juga meragukan: melawan seluruh range BB, hanya QQ dan JJ yang memiliki lebih dari 19,8% yang dituntut, sedangkan 99 sampai 33 berada di 7,6–9,2%. Bagaimanapun, alasan sizing harus tetap dibaca melalui bentuk range.

:::note[MDF menyederhanakan taruhan lawan menjadi pure bluff dengan equity nol. Pada range yang seluruhnya memiliki pair atau lebih baik, asumsi tersebut tidak menggambarkan situasi dengan baik. Angkanya hanya acuan; pertimbangkan juga equity hand lemah, bluff yang mungkin ada, dan kemampuan bertahan pada street berikutnya.]:::

## Mengapa BB tanpa posisi justru memiliki EQR 109,6%?

**Keunggulan range yang cukup besar dapat mengatasi kerugian posisi.** Ini contoh pertama dalam urutan seri ketika pemain OOP merealisasikan lebih dari bagian equity-nya. Selisih equity 68,9% lawan 31,1% jauh lebih besar daripada kelompok single-raised pot, ketika OOP memiliki **45,1% sampai 48,5%** melawan **51,5% sampai 54,9%**.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68,9%** | 31,1% |
| EV (bb) | 16,99 | 5,51 |
| **Realisasi equity** | **109,6%** | 78,7% |

Pada pot 22,5bb, equity 68,9% setara dengan ==22,5 × 68,9% = 15,50bb==. EV BB adalah **16,99bb**; rasio ==16,99 ÷ 15,50== menjelaskan EQR **109,6%**.

:::pull[Posisi membantu memaksimalkan keunggulan. Posisi tidak menciptakan keunggulan range dengan sendirinya.]:::

EQR BTN 78,7% adalah sisi lain dari hasil yang sama, bukan bukti independen. Kedua EV berjumlah sebesar pot; jika satu pemain merealisasikan lebih dari bagian equity, pemain lain memperoleh kurang. Pada contoh ①–⑦, EQR OOP berkisar **77,9% sampai 93,2%**. Kini melampaui 100% karena tekanan range memungkinkan BB mengambil pot lebih efektif. Alasan posisi biasanya menguntungkan dibahas dalam [permainan berdasarkan posisi](/id/blog/holdem-position-play).

## Apa yang dapat Anda terapkan saat bermain?

- **Pada kondisi heads-up ini, keputusan BB terutama beralih ke ukuran c-bet.** Seluruh range bet pada A-K-2 kering ketika 3-bettor memegang bagian atas. Jangan membawa aturan itu ke pot multiway. Cold-caller tambahan mengubah distribusi kekuatan; underpair menjadi kelompok pertama yang perlu diperlakukan lebih hati-hati.
- **Hitung SPR sebelum merencanakan taruhan.** Pot lebih besar berarti lebih sedikit taruhan yang diperlukan untuk memasukkan stack. Pada **SPR 4**, dua taruhan besar dan sisa stack di river dapat menghabiskan semuanya. Ukuran menentukan seberapa cepat Anda sampai di sana.
- **Bet seluruh range bukan berarti siap all-in dengan seluruh range.** Sebanyak 38,1% yang bet masih pocket pair di bawah king. QQ mengalahkan lebih dari separuh range call preflop BTN, tetapi dapat lebih cocok check pada turn. TT dan 99 lebih mudah dilepas menghadapi raise. Ini penilaian berdasarkan kelas hand, bukan output node lanjutan.
- **Top pair harus dibedakan berdasarkan kicker.** Dari 21 combo top pair, ada **A5s dan A4s**, hand yang dipakai sebagai blocker preflop tetapi memiliki kicker lemah. Range lawan yang bersedia memasukkan 89bb dapat berpusat pada **22 dan A-K**, ditambah A-Q jika lawan cukup lebar. **A-4 tidak mengalahkan kelompok itu.** AA dan KK berada di atasnya. **A-K berbagi pot melawan A-K dan kalah dari 22**, sehingga kelayakan all-in dengan two pair bergantung pada seberapa lebar lawan melanjutkan. Dalam perbandingan kelas ini, AA dan KK memiliki dasar paling kuat untuk memasukkan stack.
- **Raise flop dapat membawa keputusan langsung ke seluruh stack.** Dampaknya bergantung pada ukuran raise; tidak setiap raise otomatis meniadakan pilihan call. Pertimbangkan jam, call, atau fold dengan melihat sisa stack dan range raise: set tertinggi dapat melanjutkan agresif, sedangkan underpair rendah dan top pair berkicker lemah perlu lebih berhati-hati. Contoh ini **tidak menghitung node menghadapi raise**, sehingga batas persisnya belum diketahui. A-K juga tidak unggul melawan range raise yang hanya berisi set dan A-K.
- **Jangan menganggap semua pot 3-bet harus check 0%.** Range sama pada [8-5-2](/id/blog/3bet-pot-low-board) masih check 2,0%; board yang lebih cocok bagi caller dapat menambah check. **A dan K yang muncul bersama dalam contoh ini** menjelaskan keunggulan khusus tersebut. Penyusunan range preflop dibahas dalam [strategi 3-bet](/id/blog/holdem-3bet).

:::readnext[Lanjut membaca]
/id/blog/low-board-check-raise | Kapan Check-Raise di Flop 6-5-2? | /images/gto-srp-low-rainbow-oop-id.webp
/id/blog/paired-board-strategy | Lebih Banyak Trips, Masih Check? | /images/gto-srp-paired-oop-id.webp
:::

## Cara memeriksa hasilnya sendiri

Buka [solver GTO gratis](/id/solver), lalu **Spot belajar → Board A-high, keunggulan 3-bettor → ⚡ Lihat hasil**.

Periksa header **Pot 22,5bb · Stack 89bb**, berbeda dari 5,5bb dan 97,5bb pada contoh sebelumnya. Panel Hand BB hanya menampilkan **lima kategori**; kategori yang tidak ada ialah “Belum jadi”. Di atasnya, panel Check menunjukkan **0,0% / 0,0 combo**.

Setelah itu, gunakan **Trainer GTO** di sidebar. Hand dibagikan mengikuti bobot range dan tindakan Anda dinilai berdasarkan kerugian EV. Gratis, tanpa instalasi, serta dapat digunakan tanpa akun.

## Pertanyaan umum

**Q. Apa arti SPR dalam poker?**

A. SPR adalah stack-to-pot ratio, yakni stack efektif dibagi pot awal flop. Secara praktis, angka ini membantu memperkirakan jumlah dan ukuran taruhan untuk memasukkan stack. Buy-in awal 100bb yang sama menghasilkan SPR 4,0 dalam contoh ini dan 17,7 pada single-raised pot; ruang perencanaannya berbeda.

**Q. Berapa taruhan yang diperlukan pada SPR 4?**

A. Dalam ilustrasi ini, tiga: flop 14,9bb, turn 34,5bb, lalu sisa 39,6bb pada river, total 89bb. Dua taruhan pertama sekitar 66% pot; taruhan terakhir disesuaikan dengan sisa stack. Setelah dua bet, baru 49,4bb yang masuk, sedikit lebih dari separuh. Ukuran lebih besar dapat mencapai all-in dalam dua taruhan, sehingga SPR saja tidak menentukan satu urutan wajib.

**Q. Apakah 3-bettor selalu harus c-bet?**

A. Pada board dan range ini, solver memang check 0,0%. Itu bukan aturan universal. Range 3-bet sama pada 8-5-2 memiliki 48,2% As-high tetapi tetap hanya check 2,0%; board yang lebih cocok bagi caller memberi kebutuhan check berbeda. Hasil khusus A-K-2 berkaitan dengan AA dan KK yang tetap berada pada 3-bettor tetapi tidak pada caller.

**Q. Mengapa BTN tidak memiliki AA atau KK?**

A. Kedua hand itu tidak dimasukkan ke range call dalam contoh; keduanya dialokasikan ke 4-bet preflop. Ini input range, bukan kesimpulan yang ditemukan solver postflop. Range lain dapat menyimpan sebagian AA atau KK sebagai call untuk melindungi bagian atas. Jika input diubah, jumlah set dan strategi ikut berubah.

**Q. Mengapa bet kecil lebih sering daripada bet besar?**

A. Semua 63 combo BB sudah pair atau lebih baik, sehingga range tidak terbelah menjadi nuts dan hand kosong. Bentuk ini mendukung ukuran kecil untuk banyak hand. Kedalaman stack saja bukan penyebabnya: [spot Q-T-7](/id/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-id.webp") memiliki SPR sama, 4,0, tetapi menggunakan bet besar 98,4%.

**Q. Apakah angka ini berlaku pada permainan saya?**

A. Jadikan acuan ketika input sebanding. Contoh ini hanya mengizinkan dua ukuran, sekitar sepertiga dan dua pertiga pot. Jika overbet tersedia, range 3-bet berbeda, atau stack berubah, frekuensinya dapat berubah. Rake juga tidak diperhitungkan, sehingga angka ini tidak menjanjikan strategi identik untuk setiap permainan.
`.trim(),
};

export default POST;
