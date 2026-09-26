import type { Post } from "../posts";

// Current EN source, with the adjudicated corrections in id-gto-source-contract.md.
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Banyak Draw, Tetap Check di Q-J-T?",
  seoTitle: "Banyak Draw, Tetap Check — Nut Advantage di Q-J-T",
  desc: "BB punya draw pada 68,4% range, tetapi check 99,9% di Q-J-T. Pelajari nut advantage, top pair yang rentan, dan selisih realisasi equity.",
  tldr: "Di Q♠J♦T♠ setelah button open dan big blind call, BB check 99,9% meski 68,4% range-nya memiliki draw. Button unggul pada straight 10,5% berbanding 7,1%, set 2,0% berbanding 0,7%, dan overpair 2,6% berbanding 0%. Realisasi equity BB sebesar 77,9%, sedangkan BTN 119,4%; selisihnya terbesar dari tiga flop yang dibahas sejauh ini.",
  category: "strategy",
  tags: ["nut advantage", "range advantage", "flop Broadway", "two-tone board", "draw", "realisasi equity", "solver GTO"],
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 mnt",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-id.webp",
  imageAlt: "Hasil solver GTO HoldemMaster di flop Broadway terhubung two-tone; grid big blind hijau untuk check, dengan panel Draw di kanan",
  keepImagesInBody: true,
  content: `
Flop terbuka **Q♠ J♦ T♠**. Anda memegang KQ di big blind: top pair sekaligus open-ended straight draw. Dengan hand sekuat ini, apakah check masih masuk akal?

Dua spot sebelumnya, [A-high](/id/blog/a-high-board-cbet) dan [K-high](/id/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-id.webp"), sangat kering dan hampir tidak menyediakan draw. Di sini situasinya berbeda: **68,4% range big blind memiliki draw**. Namun, solver tetap check ==99,9%==. Frekuensi lead malah lebih kecil.

Jumlah draw yang banyak tidak dengan sendirinya menjadi alasan untuk bet lebih dulu. Semua angka di bawah berasal dari [solver GTO gratis](/id/solver) HoldemMaster, diamati pada hasil Spot belajar tanggal 2026-08-19.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | Q♠ J♦ T♠ (two-tone — dua kartu sekop)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb
Hasil | BB check 99,9% — banyak draw, tetap hampir tanpa lead
:::

> **Jawaban singkat**
> Big blind check **99,9%** di Q♠J♦T♠, meski 68,4% range-nya memiliki draw. Penyebabnya adalah **nut advantage**, yaitu keunggulan pada hand terkuat. Button unggul pada straight 10,5% berbanding 7,1%, set 2,0% berbanding 0,7%, dan overpair 2,6% berbanding 0%. Hanya two pair yang hampir sama, 6,0% untuk big blind dan 5,9% untuk button. Lead berisiko membuat hand lebih lemah fold, sementara hand lebih kuat tetap bertahan.

## Dalam kondisi apa angka ini dihasilkan?

Strukturnya sama dengan spot sebelumnya: button (BTN) open ke 2,5bb, big blind (BB) call, dan pemain lain fold. Dua pemain, pot 5,5bb, sisa stack 97,5bb, pendekatan range standar permainan online 100bb, serta dua ukuran taruhan sekitar sepertiga dan tiga perempat pot. Yang berubah hanya flop.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | BTN open 2,5bb · BB call · pemain lain fold |
| Range | Pendekatan range standar permainan online 100bb |
| Flop | Q♠ J♦ T♠, two-tone (dua kartu sekop) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb |
| Bet size | Sekitar 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tanggal pengamatan | 2026-08-19, hasil Spot belajar |

## Mengapa check 99,9% di board sebasah ini?

**Kekuatan hand yang sudah jadi lebih menentukan aksi daripada jumlah draw.**

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **99,9%** | 452,5 |
| Bet 1,8bb (33% pot) | 0,1% | 0,3 |
| Bet 4,1bb (75% pot) | 0,0% | 0,2 |

Di flop kering K-high, frekuensi check adalah 99,8%. **Saat dua pertiga range memiliki draw, check justru makin menyeluruh.** Perubahan yang berlawanan dengan dugaan inilah alasan spot ini menarik untuk dipelajari.

## Apa arti nut advantage di flop ini?

**Nut advantage menyangkut siapa yang lebih kuat di bagian teratas range.** Di Q-J-T, urutan kategorinya adalah straight → set → **two pair** → overpair. Button unggul di semuanya kecuali two pair. Big blind berada out of position (OOP), beraksi lebih dulu; button in position (IP), beraksi terakhir.

| Kategori teratas | BB (OOP) | BTN (IP) | Penyebab selisih |
|---|---|---|---|
| Straight | 7,1% | **10,5%** | Big blind **tidak memiliki AK** |
| Set/Trips — di sini set | 0,7% | **2,0%** | Big blind **tidak memiliki QQ atau JJ** |
| Two Pair | **6,0%** | 5,9% | Praktis sama — satu-satunya baris yang lebih besar untuk big blind |
| Overpair | 0,0% | **2,6%** | Big blind **tidak memiliki AA atau KK** |

Urutannya perlu tepat: **two pair adalah kategori terkuat ketiga di sini, di atas overpair**. Di Q-J-T, JT membentuk ==J-J-T-T-Q==, yaitu two pair, sedangkan AA hanya satu pair. Karena itu, menyebut seluruh bagian teratas sebagai milik button terlalu jauh. Kesimpulan utamanya tetap berlaku: straight dan set lebih banyak dimiliki button, dan two pair kalah dari kedua kategori tersebut. Di antara straight pun ada tingkatan: AK adalah yang tertinggi, sedangkan K9 dan 98 lebih rendah.

Semua selisih itu terbentuk preflop. Big blind melakukan 3-bet dengan AA, KK, QQ, JJ, dan AK, sehingga hand tersebut tidak sampai ke flop sebagai caller. Button open semuanya dan tetap memilikinya di sini.

Hitungan combo mendukungnya. Hanya tiga hand yang membuat straight: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)==, dan ==98 (Q-J-T-9-8)==. Kartu yang dibutuhkan, yaitu As, K, 9, dan 8, tidak ada di board, sehingga masing-masing memiliki 4 × 4 = 16 combo. Big blind memiliki K9 dan 98, total **32 combo**. Button juga memiliki AK, sehingga totalnya **48**. Angka solver 7,1% dan 10,5% setara sekitar 32,2 dan 48,1 combo; hitungannya cocok setelah pembulatan.

**Seluruh selisih straight berasal dari satu hand: AK.** Keputusan memasukkan AK ke range 3-bet preflop mengubah bagian terkuat range saat flop terbuka.

## Apa perbedaan range advantage dan nut advantage?

**Range advantage berarti keunggulan rata-rata seluruh range; nut advantage berarti keunggulan pada hand terkuat.** Biasanya keduanya searah. Di flop ini, besar keunggulannya berbeda jauh.

| | Range advantage | Nut advantage |
|---|---|---|
| Pertanyaan utama | Range siapa yang memiliki equity lebih tinggi secara keseluruhan? | Siapa yang memiliki hand terkuat? |
| Di Q-J-T | Relatif dekat — 46,7% berbanding 53,3% | Timpang — straight, set, dan overpair lebih banyak pada button |
| Pengaruh | Apakah range mendukung bet | **Seberapa besar bet dan siapa yang dapat raise** |

Equity rata-rata memberi kesan kedua pihak hampir seimbang. Namun, bagian teratas range membuat button lebih mampu memasang bet besar yang sulit di-raise oleh lawan, sementara big blind lebih sulit mengambil lead. Jika kedua ukuran keunggulan ini berbeda, **nut advantage menentukan sizing** dan membatasi kemampuan pihak yang tidak memilikinya untuk bet lebih dulu.

## Berapa banyak draw dalam masing-masing range?

**Tanpa menghitung backdoor: 68,4% untuk big blind dan 68,7% untuk button.** Jika backdoor flush draw ikut dihitung, angkanya menjadi 75,2% dan 74,4%, sekitar tiga perempat kedua range.

![Grafik komposisi range big blind dan button di flop Broadway terhubung two-tone](/images/gto-srp-broadway-ranges-id.webp "Q♠J♦T♠ · komposisi kategori — empat baris teratas menjelaskan perbedaan kekuatan kedua range")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | 5,3% | 4,1% |
| Flush draw | 2,4% | 2,0% |
| OESD | 28,7% | 27,7% |
| Gutshot | 32,0% | 34,9% |
| Backdoor FD | 6,8% | 5,7% |
| Tanpa draw | **24,7%** | **25,5%** |

**Distribusi draw hampir sama.** Di flop K-high, 72,2% range big blind tidak memiliki draw; di sini hanya sekitar seperempat. Kategori draw merupakan pengelompokan terpisah dari kategori hand. Masing-masing berjumlah sekitar 100%, dan panel Draw hanya menunjukkan **apa yang masih bisa diselesaikan**. Straight yang sudah jadi dengan dua sekop, seperti K♠9♠, masuk kategori flush draw. Straight tanpa draw tambahan masuk Tanpa draw.

Jadi, perbedaan di board ini bukan jumlah draw. Jumlahnya hampir saling mengimbangi, sedangkan perbedaan hand terkuat tetap besar. Jika Anda ingin memperkuat dasar menghitung out, baca [peluang drawing](/id/blog/holdem-drawing-odds).

## Mengapa top pair rentan di sini?

**Sebanyak 21,0% range button sudah mengalahkannya.** Angka itu berasal dari straight 10,5%, set 2,0%, two pair 5,9%, dan overpair 2,6%.

Di flop kering K-high, perhitungan yang sama hanya menghasilkan **3,6%**: set 1,9%, two pair 0,4%, dan overpair 1,3%.

| Bagian range button yang sudah mengalahkan top pair | |
|---|---|
| Flop kering K-high (K-8-3) | 3,6% |
| **Flop Broadway (Q-J-T)** | **21,0%** |

**Sama-sama disebut top pair, tetapi bagian range lawan yang sudah unggul hampir enam kali lebih besar.** Secara terpisah, 68,7% range lawan memiliki suatu draw. Ini sumbu yang berbeda dan tumpang tindih dengan hand jadi yang sudah unggul tadi, bukan tambahan 68,7% di atasnya; artinya, hand yang saat ini Anda kalahkan pun bisa menyalip di turn dan river. Jika Anda memaksakan tiga street value dengan satu pair di Q-J-T, respons besar lawan sering berasal dari hand yang mengalahkan Anda. Top pair lebih membutuhkan kontrol pot di sini.

## Mengapa EQR sekitar 78 lawan 119, padahal equity 47 lawan 53?

**Semakin banyak keputusan sulit yang ditimbulkan board, semakin berharga kesempatan beraksi terakhir.**

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,7% | 53,3% |
| EV (bb) | 2,00 | 3,50 |
| **Realisasi equity (EQR)** | **77,9%** | **119,4%** |

Cara menghitungnya dijelaskan dalam [spot K-high](/id/blog/k-high-board-cbet). Di sini, bagian big blind berdasarkan equity adalah ==5,5 × 46,7% = 2,57bb==, sedangkan expected value (EV), atau rata-rata hasilnya, hanya 2,00bb. Perbandingan itulah EQR 77,9%. Button mengubah bagian equity senilai 2,93bb menjadi EV 3,50bb.

Perbandingan tiga flop memperlihatkan pola berikut.

| Flop | EQR BB | EQR BTN | Selisih |
|---|---|---|---|
| A-7-2 (kering) | 84,0% | 113,1% | 29,1 poin persentase |
| K-8-3 (kering) | 80,7% | 116,7% | 36,0 poin persentase |
| **Q-J-T (terhubung, two-tone)** | **77,9%** | **119,4%** | **41,5 poin persentase** |

Tiga spot ini seolah menunjukkan bahwa makin banyak draw, makin besar selisihnya. **Spot berikutnya langsung membantah generalisasi itu.** [9♥8♥7♣](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp") juga terdiri dari tiga kartu berurutan dalam board two-tone, tetapi selisihnya hanya **13,2 poin persentase, terkecil di antara tujuh pot single-raised**. Big blind merealisasikan 93,2%, tertinggi di ketujuh spot itu. Dalam keseluruhan seri, EQR 117,8% pada pot 3-bet Q-T-7 masih lebih tinggi.

Yang memperbesar selisih adalah **range siapa yang memiliki bagian terkuat di board tersebut**. Q-J-T memberi button AK, QQ, JJ, AA, dan KK sebagai hand kuat; di 9-8-7, kartu yang sama tidak langsung berpasangan dengan board. Namun, hand tersebut tetap relevan: overpair di 9-8-7 adalah **1,3% berbanding 6,4%**, selisih lebih besar daripada 0% berbanding 2,6% di Q-J-T. Keunggulan overpair itu rentan di board terhubung, sehingga tidak memberikan kendali yang sama atas hand terkuat. Nilai beraksi terakhir dibahas dalam [strategi bermain berdasarkan posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Bagaimana button sebaiknya bet di board yang dinamis ini?

**Ukuran besar ikut berperan; strategi tidak hanya memakai ukuran kecil.** Nut advantage membuat bet besar button sulit di-raise oleh lawan. Button unggul pada straight, set, dan overpair, sehingga big blind memiliki lebih sedikit hand kuat untuk melawan tekanan tersebut.

Di board kering, bet kecil dan sering berguna untuk membuat hand kosong fold. Di sini, **68,4%** range lawan memiliki draw, sehingga **mendapatkan fold memerlukan biaya lebih besar**. Ukuran kecil saja tidak cukup untuk menjalankan semua fungsi taruhan; ukuran besar juga dibutuhkan. Namun, jangan langsung menyimpulkan bahwa frekuensi c-bet pasti turun. Hasil Spot belajar hanya menghitung aksi pertama flop, sehingga campuran sizing dan frekuensi c-bet button tidak tersedia di sini. Perbandingan antarjenis board ada dalam [strategi continuation bet](/id/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Angka di atas berasal dari hasil solver; penjelasan strategi pada bagian ini merupakan interpretasi. Hasil prahitung Spot belajar hanya mencakup aksi pertama big blind, sehingga pembagian sizing button tidak ada di layar ini. Pilih “Hitung sendiri spot ini” dan jalankan perhitungannya untuk memperoleh angka tersebut.]:::

## Apa yang berubah saat Anda bermain?

- **Memiliki draw belum cukup menjadi alasan untuk lead dari big blind.** Kedua pihak memiliki jumlah draw yang hampir sama. Draw Anda tidak memberi keunggulan tersendiri, sementara lead dapat menghadapi hand jadi kuat yang hanya dimiliki lawan.
- **Jangan memaksakan tiga street value dengan top pair di Q-J-T.** Sebanyak 21,0% range lawan sudah unggul dan banyak hand lainnya masih memiliki draw. Mengontrol pot melalui check dan call lebih masuk akal daripada terus membesarkannya dengan satu pair.
- **Ingat isi range check itu.** Frekuensi check big blind sebesar 99,9% mencakup 32 combo straight K9 dan 98 serta 27 combo two pair. Hand ini check bukan karena lemah. Ketika button sering c-bet, **memberinya kesempatan bet dapat menghasilkan lebih banyak nilai daripada lead**, sekaligus menjaga range check tetap kuat. Karena itu, check tidak meniadakan kemungkinan check-raise. Frekuensi check-raise belum dihitung dalam hasil ini: Spot belajar berhenti pada **aksi pertama flop**, dan lanjutan aksinya memerlukan **Hitung sendiri spot ini**.
- **Melawan pemain yang tidak pernah fold draw, perbesar sizing alih-alih sekadar menambah frekuensi bet.** Sulit mendapat fold dari mereka, tetapi Anda dapat menarik pembayaran lebih besar dari draw.

:::readnext[Lanjut membaca]
/id/blog/k-high-board-cbet | BB Check 99,8% di K-8-3: Mengapa? | /images/gto-srp-dry-king-oop-id.webp
/id/blog/a-high-board-cbet | Top Pair, Masih Check di A-7-2? | /images/gto-srp-dry-ace-oop-id.webp
:::

## Periksa sendiri hasilnya

Buka [solver GTO gratis](/id/solver), lalu pilih **Spot belajar → Board Broadway terhubung, two-tone → ⚡ Lihat hasil**. Hasil langsung tersedia.

Di spot ini, perhatikan **panel Draw di kanan**. OESD dan gutshot bersama-sama melewati 60%, pertama kali dalam seri ini. Lalu ganti pemain menjadi **IP (BTN (opener))** dan lihat Straight 10,5%. Baris itu menjadi dasar pembahasan perbedaan hand terkuat dalam artikel ini.

Untuk berlatih, buka **Trainer GTO** di sidebar. Hand dibagikan sesuai bobot range sebenarnya, dan keputusan Anda dinilai dalam big blind yang hilang. Gratis, tanpa instalasi dan tanpa akun.

## Pertanyaan umum

**Q. Hand apa saja yang menjadi straight di Q-J-T?**

A. Ada tiga: AK membentuk A-K-Q-J-T, K9 membentuk K-Q-J-T-9, dan 98 membentuk Q-J-T-9-8. Kartu yang diperlukan, yaitu As, K, 9, dan 8, tidak ada di board. Masing-masing memiliki 4 × 4 = 16 combo, total 48. Big blind melakukan 3-bet dengan AK preflop, sehingga hanya memiliki 32 combo straight di range call-nya.

**Q. Bukankah wet board cocok untuk lead sebagai semi-bluff?**

A. Jumlah draw saja tidak menentukan keputusan itu. Distribusi hand jadi, nut advantage, dan blocker harus dipertimbangkan bersama. Di sini, OESD hampir sama, 28,7% berbanding 27,7%, sedangkan straight yang sudah jadi lebih banyak pada button, 10,5% dibandingkan 7,1% pada big blind. Dukungan dari bagian teratas range lebih penting daripada sekadar banyak draw. Ada contoh lain dalam Spot belajar yang lebih mendukung lead: [board tengah terhubung 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), tempat big blind lead 23,7%, bukan hampir tidak pernah.

**Q. Apa perbedaan range advantage dan nut advantage?**

A. Range advantage membandingkan equity rata-rata seluruh hand. Nut advantage membandingkan kekuatan bagian teratas range, dengan urutan kategori di Q-J-T berupa straight, set, two pair, lalu overpair. Equity relatif dekat, 46,7% berbanding 53,3%, tetapi straight dan set lebih banyak dimiliki button. Two pair saja yang hampir seimbang, 6,0% berbanding 5,9%. Ketika perbedaannya seperti ini, nut advantage sangat menentukan ukuran taruhan.

**Q. Apakah angka ini berlaku di semua tingkat taruhan?**

A. Gunakan sebagai patokan jika kondisinya sesuai: heads-up, 100bb, range open dan call standar, tanpa rake. Di board ini, dampak ketimpangan hand kuat membesar ketika stack makin dalam. Pada 200bb, selisih straight 3,4 poin persentase menjadi lebih berarti karena ada lebih banyak chip yang bisa hilang melawan hand yang tidak ada dalam range Anda.
`.trim(),
};

export default POST;
