import type { Post } from "../posts";

// Current EN source, with the adjudicated corrections in id-gto-source-contract.md.
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "Donk Bet di 9-8-7 Bisa Masuk Akal",
  seoTitle: "Bet Duluan Bisa Tepat — Strategi Donk Bet di 9-8-7",
  desc: "Donk bet bukan selalu kesalahan. Di 9-8-7, BB bet lebih dulu 23,7% meski equity masih di bawah BTN. Lihat penyebab dan batas penerapannya.",
  tldr: "Di 9♥8♥7♣ setelah button open dan big blind call, BB check 76,2% dan lead 23,7% dari dua ukuran, setelah pembulatan. Range advantage tetap pada button: equity BB 48,5% berbanding 51,5%. Lead muncul karena selisihnya menyempit dan BB memiliki lebih banyak straight jadi, sementara kekuatan button terkonsentrasi pada overpair yang rentan.",
  category: "strategy",
  tags: ["donk bet", "flop 9-8-7", "range advantage", "straight", "ukuran taruhan", "realisasi equity", "solver GTO"],
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "9 mnt",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-id.webp",
  imageAlt: "Hasil solver GTO HoldemMaster di flop 9♥8♥7♣; grid big blind menampilkan check serta lead kecil dan besar",
  keepImagesInBody: true,
  content: `
Salah satu patokan awal dalam poker adalah **check kepada raiser**. Pemain yang mengambil inisiatif preflop diberi kesempatan memasang taruhan pertama di flop.

Tiga spot sebelumnya hampir sepenuhnya mengikuti pola itu. Di flop [A-high](/id/blog/a-high-board-cbet), [K-high](/id/blog/k-high-board-cbet), dan [Broadway](/id/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-id.webp"), big blind selalu lead kurang dari 2%. Di K-8-3 dan Q-J-T, frekuensinya bahkan 0,2% atau lebih rendah, praktis nol.

Di **9♥ 8♥ 7♣**, angkanya menjadi **23,7%**. Di sinilah patokan tersebut memiliki pengecualian yang jelas.

Taruhan pertama dari pemain yang hanya call preflop disebut **donk bet**, atau **lead**. Nama donk berasal dari “donkey”, sebutan merendahkan yang mencerminkan reputasi lama aksi ini. Solver memakai donk bet pada board tertentu, dan spot ini memberikan contoh paling jelas dalam rangkaian contoh yang kita bahas.

Semua angka di bawah berasal dari [solver GTO gratis](/id/solver) HoldemMaster, diamati pada hasil Spot belajar tanggal 2026-08-19.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 9♥ 8♥ 7♣ (two-tone — dua kartu hati)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb
Hasil | BB lead 23,7% — lead dengan porsi berarti untuk pertama kalinya dalam seri ini
:::

> **Jawaban singkat**
> Di 9♥8♥7♣, big blind check **76,2%** dan lead **23,7%** dari kedua ukuran, setelah pembulatan. Namun, **range advantage belum berpindah pihak**: equity tetap 48,5% berbanding 51,5% untuk keunggulan button. Yang berubah adalah besar selisih serta letak hand kuat. Big blind memiliki lebih banyak straight jadi, sedangkan kekuatan button banyak berasal dari overpair yang rentan di board ini.

## Dalam kondisi apa angka ini dihasilkan?

Button (BTN) open ke 2,5bb, big blind (BB) call, dan pemain lain fold. Dua pemain melihat flop dengan pot 5,5bb dan sisa stack 97,5bb. Range mendekati range standar permainan online 100bb. Flop-nya 9♥ 8♥ 7♣ dengan dua kartu hati, dan solver dapat memilih dua ukuran taruhan: sekitar sepertiga dan tiga perempat pot. Rake tidak dimodelkan. Angka diamati pada 2026-08-19.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | BTN open 2,5bb · BB call · pemain lain fold |
| Range | Pendekatan range standar permainan online 100bb |
| Flop | 9♥ 8♥ 7♣, two-tone (dua kartu hati) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb |
| Bet size | Sekitar 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tanggal pengamatan | 2026-08-19, hasil Spot belajar |

## Seberapa sering big blind donk bet di 9-8-7?

**23,7%**, dan lebih dari dua pertiga frekuensi bet itu memakai ukuran kecil.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **76,2%** | 352,0 |
| Bet 1,8bb (33% pot) | **16,8%** | 77,8 |
| Bet 4,1bb (75% pot) | 6,9% | 32,2 |

Bandingkan keempat flop untuk melihat perubahan besarnya.

| Flop | Frekuensi lead BB |
|---|---|
| A-7-2 (kering) | 1,9% |
| K-8-3 (kering) | 0,2% |
| Q-J-T (terhubung, two-tone) | 0,1% |
| **9-8-7 (kartu tengah terhubung, two-tone)** | **23,7%** |

**Dari kurang dari 2% menjadi 23,7%, meningkat lebih dari sepuluh kali lipat.** Lead kini merupakan bagian berarti dari strategi.

## Apa yang berubah dari tiga flop sebelumnya?

**Untuk pertama kalinya, big blind unggul dalam kategori hand teratas.** Straight yang sudah jadi mencakup 5,2% range-nya, berbanding 4,2% pada button.

Hitungan combo menjelaskan penyebabnya. Tiga hand membuat straight di sini: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)==, dan ==65 (9-8-7-6-5)==.

| Hand straight | BB (range call) | BTN (range open) |
|---|---|---|
| JT | ✅ suited dan offsuit (16 combo) | ✅ suited dan offsuit (16 combo) |
| T6 | ✅ **T6s (4 combo)** | ❌ di luar range open |
| 65 | ✅ 65s (4 combo) | ✅ 65s (4 combo) |
| **Total** | **24 combo = 5,2%** | **20 combo = 4,2%** |

**Seluruh selisih berasal dari T6s, sebanyak empat combo.** Range button dalam model ini dimulai dari T7s, sehingga T6 suited tidak sampai ke flop. Big blind mempertahankannya dengan harga lebih murah karena 1bb dari total 2,5bb sudah terpasang. Satu sel range itu menentukan siapa yang memiliki lebih banyak **straight jadi**. Nuts, yaitu hand tertinggi yang mungkin, adalah persoalan berbeda: di sini nuts berupa JT, dan kedua pemain memiliki seluruh 16 combo-nya.

Di kategori overpair, keunggulannya berada pada button.

| Overpair (pocket pair di atas 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combo | ✅ 6 combo |
| JJ · QQ · KK · AA | ❌ semuanya 3-bet preflop | ✅ 24 combo |
| **Total** | **6 combo = 1,3%** | **30 combo = 6,4%** |

## Apakah flop ini secara keseluruhan menguntungkan big blind?

**Belum. Equity tetap 48,5% berbanding 51,5%.** Munculnya lead tidak berarti range advantage, atau keunggulan seluruh range, berpindah ke big blind.

![Grafik komposisi range big blind dan button di board kartu tengah terhubung two-tone](/images/gto-srp-middle-connected-ranges-id.webp "9♥8♥7♣ · komposisi kategori — big blind lebih banyak Straight, button lebih banyak Overpair dan Ace-High")

| Hand | BB (OOP) | BTN (IP) |
|---|---|---|
| Straight | **5,2%** | 4,2% |
| Set/Trips — di sini set | 1,9% | 1,9% |
| Two Pair | 2,8% | 2,8% |
| Overpair | 1,3% | **6,4%** |
| Top Pair (9) | **13,6%** | 12,7% |
| Second Pair (8) | **8,4%** | 7,6% |
| Pair lemah | **6,5%** | 6,4% |
| Underpair | **6,5%** | 6,4% |
| Ace-High | 24,2% | **30,5%** |
| King-High | **13,9%** | 11,9% |
| Belum jadi | **15,6%** | 9,3% |

Jumlah kolomnya 99,9 dan 100,1 akibat pembulatan. Big blind berada out of position (OOP) dan beraksi lebih dulu, sedangkan button in position (IP) dan beraksi terakhir.

**Hanya dua baris yang lebih besar untuk button**: overpair 6,4% berbanding 1,3%, serta ace-high 30,5% berbanding 24,2%. **Set sama-sama 1,9% dan two pair sama-sama 2,8%.** Semua kategori lainnya sedikit lebih besar di pihak big blind.

Distribusi draw perlu dibaca bersamaan dengan kategori hand.

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | **4,5%** | 3,6% |
| Flush draw | **3,2%** | 2,3% |
| OESD | **26,2%** | 23,7% |
| Gutshot | **21,6%** | 20,6% |
| Backdoor FD | 14,1% | **17,6%** |
| Tanpa draw | 30,3% | **32,2%** |

**Jika hanya draw yang bisa selesai dengan satu kartu dihitung, tanpa backdoor, big blind memiliki 55,5% berbanding 50,2% pada button.** Di board ini, big blind memiliki lebih banyak straight yang sudah jadi sekaligus lebih banyak draw.

Realisasi equity tetap lebih baik untuk button, tetapi selisihnya lebih kecil daripada semua spot sebelumnya.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,5% | 51,5% |
| EV (bb) | 2,48 | 3,02 |
| **Realisasi equity (EQR)** | **93,2%** | **106,4%** |

Setelah 84,0%, 80,7%, dan 77,9% di tiga flop pertama, realisasi equity big blind **meningkat di sini**. Angka 93,2% adalah yang paling mendekati seluruh bagian equity-nya sejauh ini. Expected value (EV), atau rata-rata hasil big blind, sebesar 2,48bb. Lead muncul bersama kemampuan yang lebih baik untuk mempertahankan nilai equity meski harus beraksi lebih dulu.

Ada dua perubahan yang mendukungnya.

**Pertama, selisih equity menyempit.** Selisih 3,0 poin persentase merupakan yang terkecil dari empat flop sejauh ini. Di A-7-2 selisihnya 9,8 poin, sedangkan di Q-J-T 6,6 poin.

**Kedua, keunggulan button berada pada kategori yang rentan.** Button hanya lebih banyak memiliki overpair 6,4% dan ace-high 30,5%. Ace-high belum memiliki pair; jika hand itu memiliki draw, big blind juga memiliki banyak draw, sehingga keberadaan draw tidak memberi button keunggulan khusus. Overpair pun rentan karena alasan yang dibahas berikutnya. Sementara itu, keunggulan big blind terletak pada **straight yang sudah jadi**.

Lead didukung oleh lebih dari kekuatan rata-rata: **distribusi hand kuat yang mendukung Anda serta lawan yang sulit bet dengan leluasa**. Kedua kondisi tampak terpenuhi di sini. Big blind memiliki lebih banyak straight jadi (24 combo berbanding 20, sementara nuts JT sama-sama 16 combo), sedangkan button dengan ace-high sebanyak 30,5% akan kesulitan bet dengan range luas. Bagian terakhir ini adalah bacaan dari komposisi range, karena node bet button sendiri tidak dihitung dalam contoh ini. Lead mengambil sebagian kesempatan bet yang mungkin dilewatkan button. Ini tidak berarti big blind memiliki lebih banyak combo nuts JT.

## Mengapa overpair button rentan?

**Hampir separuh kartu yang belum terlihat dapat membuat turn lebih sulit baginya.**

Misalkan Anda memegang QQ, sebuah overpair yang kuat saat ini. Dari 47 kartu yang belum terlihat:

- **T, J, 6, dan 5, sebanyak 16 kartu.** Masing-masing **memungkinkan straight dengan satu kartu hole lawan**. Jika J muncul, board menjadi J-9-8-7; pemain yang memegang T sudah memiliki J-T-9-8-7.
- **Kartu hati yang belum dihitung, sebanyak 7 kartu.** Kartu ini memungkinkan flush selesai.

Totalnya **23 dari 47 kartu, sekitar 49%**, untuk QQ tanpa kartu hati. Jika Anda memegang Q♥, satu dari tujuh kartu hati itu sudah ada di tangan Anda, sehingga totalnya 22 dari 47, sekitar 47%. Hampir setiap dua turn, satu dapat membuat hand lebih sulit dimainkan. Untuk mempelajari hitungan out dari sisi pemain yang mengejar draw, baca [peluang drawing](/id/blog/holdem-drawing-odds).

Karena itu, overpair di sini lebih cocok **memungut value dari draw sekarang lalu berhati-hati saat menghadapi raise**, daripada mengejar pot sangat besar. Pot yang perlu dihindari adalah pot yang membesar setelah turn buruk; mengambil value di flop tetap memiliki alasan.

## Mengapa ukuran kecil mengambil lebih dari dua pertiga lead?

**Lead mencerminkan susunan range, bukan hanya kekuatan satu hand.** Dari total 23,7 poin persentase lead, 16,8 memakai ukuran sepertiga pot dan 6,9 memakai tiga perempat pot.

Bet kecil dapat mewakili banyak hand yang cocok dengan flop. Jika hanya hand terkuat yang bet, lawan mudah membaca “bet berarti kuat, check berarti lemah”. Mencampurkan straight, top pair, dan draw ke dalam ukuran kecil membuat range bet lebih sulit dibaca.

Ukuran besar juga memiliki fungsi. Jika setiap straight hanya bet kecil, button dapat terus call tanpa menghadapi ancaman pot besar. **Dua ukuran taruhan membuat keputusan call maupun raise lawan lebih sulit.**

## Kapan sebaiknya tidak c-bet? Pengecualian 9-8-7

**Sebagai raiser preflop di flop ini, Anda perlu lebih menahan diri**, baik big blind lead maupun check. Spot ini memberi contoh paling jelas untuk meninjau ulang kebiasaan c-bet. Alasannya terletak pada bentuk range Anda di board tersebut. Cara mempertimbangkannya pada board lain dibahas dalam [strategi continuation bet](/id/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

Ace-high mencakup 30,5% range button, king-high 11,9%, dan Belum jadi 9,3%: total 51,7% tanpa pair. Namun, **ketiadaan pair bukan penyebab tunggal**. Jika tiga kategori big blind dijumlahkan dengan cara yang sama, hasilnya **53,7%**. Big blind justru memiliki 2,0 poin persentase lebih banyak hand tanpa pair, tetapi lead 23,7%.

Yang perlu diperhatikan button adalah **hand yang tetap berada dalam range check**. Sebanyak 76,2% range big blind masih check, dan aksi itu tetap bisa mencakup straight serta sebagian top pair, yang jumlah totalnya 13,6% dari range awal. Bet dengan range terlalu luas dapat menghadapi **check-raise**. Namun, sebagian dari 24 combo straight mengambil lead, sehingga tidak semuanya tetap berada dalam range check. Frekuensi check-raise juga tidak tersedia dalam hasil perhitungan ini.

Kartu tinggi **offsuit** yang belum memiliki pair, seperti AKo dan AQo, merupakan kandidat check back: masih ada nilai showdown, tetapi sulit melanjutkan saat menghadapi raise. Versi suited perlu dibedakan. A♥K♥ dan A♥Q♥ memiliki nut flush draw di sini, sehingga lebih cocok masuk ke bagian range yang bet.

:::note[Hasil prahitung Spot belajar hanya mencakup aksi pertama flop, yaitu aksi big blind. Seberapa jauh frekuensi c-bet button turun setelah check belum dihitung di layar ini. Penjelasan aksi lanjutan merupakan interpretasi range. Gunakan “Hitung sendiri spot ini” untuk menghitung rangkaian aksinya.]:::

## Apa yang berubah saat Anda bermain?

- **Board kartu tengah yang terhubung dapat mendukung lead setelah open luas dari posisi akhir.** Board monotone pada spot berikutnya juga memiliki lead sekitar 11%, sedangkan flop kering A-high dan K-high hampir nol. Namun, satu-satunya board kartu tengah terhubung yang benar-benar dihitung dalam seri ini adalah 9-8-7. Syaratnya tidak hanya tekstur, tetapi juga **distribusi hand jadi kuat dalam kedua range**. Contohnya ada dalam seri ini sendiri: di [flop 6-5-2](/id/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-id.webp"), dengan pot single-raised button melawan big blind yang sama, BB hanya lead **3,2%**. Satu-satunya hand yang membuat straight adalah 4-3, dan kedua range tidak memilikinya. Board rendah yang terhubung tidak otomatis menghasilkan lead.
- **Anda tetap check sekitar tiga perempat waktu.** Saat lead, gunakan ukuran kecil dengan lebih dari hand terkuat saja. Range yang hanya lead straight mudah dibaca, sehingga top pair dan draw juga dapat memakai ukuran tersebut. Namun, ingat penyebutnya: **seluruh lead hanya 23,7%, dengan 16,8 poin persentase pada ukuran kecil**. Jika diterapkan menjadi “lead setiap draw”, Anda justru bet sekitar separuh range dan membalik strategi. Sisa 76,2% melakukan check.
- **Di button, tahan kebiasaan c-bet otomatis pada tekstur ini.** Lebih dari separuh range Anda tidak memiliki pair, dan overpair lebih membutuhkan pot terkendali.
- **Melawan pemain yang terlalu sering c-bet, check bisa lebih berharga daripada lead.** Straight dan top pair dapat menjadi kandidat check-raise, bukan hanya check-call. Membiarkan lawan bet terlebih dahulu memberi nilai tambahan jika Anda kemudian menarik pembayaran dari agresinya.
- **Perhatikan juga pola sebaliknya.** Melawan pemain yang selalu check back di wet board, lead bisa lebih bernilai daripada frekuensi dasar solver. Check berisiko melewatkan kesempatan mengambil value pada street itu.

:::readnext[Lanjut membaca]
/id/blog/broadway-board-strategy | Banyak Draw, Tetap Check di Q-J-T? | /images/gto-srp-broadway-oop-id.webp
/id/blog/k-high-board-cbet | BB Check 99,8% di K-8-3: Mengapa? | /images/gto-srp-dry-king-oop-id.webp
:::

## Periksa sendiri hasilnya

Buka [solver GTO gratis](/id/solver), lalu pilih **Spot belajar → Board tengah terhubung, two-tone → ⚡ Lihat hasil**.

Cara terbaik mempelajarinya adalah **membandingkan dengan board kering**. Buka “Board kering K-high” terlebih dahulu dan perhatikan grid yang hampir seluruhnya hijau. Lalu kembali ke spot ini: warna oranye dan merah muda mulai muncul. Pemain serta range sama; perubahan tiga kartu mengubah strategi.

Lalu buka **Trainer GTO** di sidebar untuk melatih keputusan lead yang baru Anda pelajari. Trainer membagikan hand acak sesuai bobot range sebenarnya dan menunjukkan biaya keputusan yang keliru dalam big blind. Gratis, tanpa instalasi dan tanpa akun.

## Pertanyaan umum

**Q. Apa itu donk bet dalam poker?**

A. Bet di flop oleh pemain yang tidak melakukan raise preflop, langsung menghadap raiser alih-alih check terlebih dahulu. Nama itu berasal dari “donkey”, yang mencerminkan penilaian buruk terhadap aksi tersebut pada masa lalu. Solver menunjukkan bahwa donk bet dapat tepat pada tekstur tertentu. Di flop ini, totalnya 23,7% dari strategi big blind.

**Q. Mengapa donk bet sering dianggap buruk?**

A. Karena pada banyak board, lead tidak didukung komposisi range caller. Dalam seri ini, big blind lead kurang dari 2% di flop A-high, K-high, dan Broadway; range raiser preflop lebih cocok dengan kartu-kartu itu. Pengecualian muncul saat **distribusi hand kuat caller lebih mendukung lead**, seperti lebih banyak straight jadi di 9-8-7.

**Q. Apakah big blind memiliki keunggulan di 9-8-7?**

A. Secara keseluruhan belum. Equity 48,5% berbanding 51,5% dan realisasi equity 93,2% berbanding 106,4% sama-sama mengunggulkan button. Lead muncul karena big blind memiliki lebih banyak straight jadi, sementara kekuatan button banyak terkumpul pada overpair yang rentan di board ini.

**Q. Kapan sebaiknya check daripada lead?**

A. Bahkan di flop ini, sekitar tiga perempat range big blind tetap check: tepatnya 76,2%. Check menjadi patokan saat range Anda tidak memiliki distribusi hand jadi kuat yang mendukung lead, seperti pada flop kering A-high dan K-high yang dibahas sebelumnya. Check juga menarik jika lawan sudah terlalu sering bet; memberinya kesempatan menambah uang ke pot dapat lebih bernilai daripada mengambil inisiatif.

**Q. Apa yang harus dilakukan jika lead saya di-raise?**

A. Rencanakan respons sebelum bet, karena lead sepertiga pot membuka ruang untuk raise. Sebagai panduan membaca range, straight dan OESD memiliki equity untuk melanjutkan, sedangkan top pair sembilan dapat mempertimbangkan satu call lalu berhati-hati di turn buruk. Hand tanpa pair maupun draw lebih layak fold daripada membayar hanya untuk mencari tahu. Respons pastinya bergantung pada raise dan hand; node lanjutan ini belum dihitung dalam hasil prahitung di atas.

**Q. Berapa ukuran lead yang sebaiknya digunakan?**

A. Sebagian besar kecil. Dari total 23,7 poin persentase lead, solver menempatkan 16,8 pada bet sepertiga pot dan 6,9 pada tiga perempat pot. Ukuran kecil menekan dengan range yang lebih beragam, sedangkan ukuran besar membuat lawan tidak bisa selalu call tanpa menghadapi pot lebih besar.

**Q. Apakah frekuensi lead ini berlaku di tingkat taruhan saya?**

A. Prinsip membaca board dan range tetap berguna, tetapi angka 23,7% tidak otomatis sama. Kondisinya heads-up, 100bb, open button 2,5bb, range bertahan standar, serta tanpa rake. Open yang lebih besar dalam permainan live mengubah pot dan rasio stack terhadap pot. Jika big blind bertahan lebih luas daripada model dan tambahan hand itu mencakup lebih banyak straight, lead mendapat dukungan lebih besar.
`.trim(),
};

export default POST;
