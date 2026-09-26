import type { Post } from "../posts";

export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "Tanpa Posisi, SB Bet 67,4% di K-T-6",
  seoTitle: "Tanpa Posisi, Tetap Bet — C-Bet SB vs BB di K-T-6",
  desc: "SB bertindak lebih dulu tetapi bet 67,4% di K-T-6. Lihat bagaimana peran sebagai raiser dan tekstur board mengubah strategi blind vs blind.",
  tldr: "Setelah small blind open dan big blind call, flop K♥T♦6♠ menghasilkan bet 67,4% dan check 32,6% untuk SB. Pada tujuh single-raised pot sebelumnya, pemain tanpa posisi hanya bet 0,1%–23,7%. Ada dua perubahan: pemain OOP kini adalah raiser, dan board mendukung range-nya. Keduanya membuat realisasi equity SB mencapai 103,1%, meskipun ia bertindak lebih dulu.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-02",
  readTime: "10 mnt",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-id.webp",
  imageAlt: "Solver GTO HoldemMaster menampilkan range small blind pada flop K-T-6 rainbow, dengan sebagian besar grid berwarna oranye untuk bet",
  keepImagesInBody: true,
  tags: ["blind vs blind poker", "small blind open", "king high flop", "equity realization", "gto solver"],
  content: `
Dalam tujuh single-raised pot sebelumnya, satu pola terus berulang: **pemain yang bertindak lebih dulu memilih check pada sebagian besar range**. Frekuensi bet OOP tertinggi muncul pada [board terhubung 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), yaitu 23,7%. Enam contoh lainnya tidak melebihi 11,2%. Bet yang mendominasi range baru muncul dalam kelompok pot 3-bet.

Kali ini pot hanya mengalami satu raise: small blind open menjadi 3bb, lalu big blind call. Namun, **pemain yang bertindak lebih dulu bet 67,4%**.

Potnya masih kecil, 6bb, dengan sisa stack 97bb. Yang berubah adalah **peran pemain yang bertindak lebih dulu dan kecocokan board dengan range-nya**. Semua angka berikut berasal dari [solver GTO HoldemMaster](/id/solver).

:::stripe
Spot | SB open 3bb → BB call (blind vs blind)
Flop | K♥ T♦ 6♠ (rainbow)
Pot · stack | Pot 6bb · stack efektif 97bb · **SPR 16,2**
Hasil | SB bet **67,4%** — single-raised pot pertama dalam seri dengan mayoritas aksi OOP berupa bet
:::

> **Jawaban singkat**
> Pada K-T-6 dalam blind vs blind, aksi pertama SB adalah **bet 67,4% dan check 32,6%**. Frekuensinya jauh di atas 0,1%–23,7% pada contoh ①–⑦. Pemain tanpa posisi kini adalah **raiser preflop**, dan board K-high dengan satu kartu broadway lain cocok untuk range-nya. Posisi duduk saja belum menjelaskan hasilnya: SB yang sama hanya bet **9,6%** pada [board 7-6-5](/id/blog/blind-battle-connected-board). Pada K-T-6, keunggulan range berada pada pemain yang sekaligus bertindak lebih dulu. **EQR OOP mencapai 103,1%**, pertama kalinya melewati 100% dalam kelompok single-raised pot seri ini.

## Kondisi apa yang menghasilkan angka ini?

★ **Konfigurasinya kembali berubah.** Pot, stack, dan peran pemain berbeda dari contoh sebelumnya. Karena itu, cek tabel berikut sebelum membandingkan angka.

| Kondisi | Contoh ini (blind vs blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (pot 3-bet) |
|---|---|---|---|
| Aksi preflop | **SB open 3bb → BB call** | BTN open 2,5bb → BB call | BB 3-bet menjadi 11bb → BTN call |
| OOP (bertindak lebih dulu) | **SB — opener** | BB — caller | BB — 3-bettor |
| IP | BB — caller | BTN — opener | BTN — caller |
| Pot awal | **6bb** | 5,5bb | 22,5bb |
| Stack efektif | **97bb** | 97,5bb | 89bb |
| SPR | **16,2** | 17,7 | 4,0 |
| Bet size | Sekitar sepertiga pot, **hanya satu ukuran** | Sekitar sepertiga dan tiga perempat (⑦ satu ukuran) | Sekitar sepertiga dan dua pertiga |
| Rake | Tidak dimodelkan | Tidak dimodelkan | Tidak dimodelkan |
| Tanggal pengamatan | 2026-08-08 (hasil spot belajar) | 2026-08-08 | 2026-08-08 |

Pot 6bb berasal dari ==3 milik SB ditambah 3 milik BB==. Kedua blind ikut bermain, sehingga tidak ada blind dari pemain yang fold di luar hitungan tersebut. Stack efektifnya ==100 − 3 = 97bb==.

Tampilan memakai **big blind**: "Bet 2bb (33% pot)" menunjukkan jumlah bet beserta persentase pot, dan EV memakai label "EV (bb)".

## Seberapa sering small blind melakukan bet?

**Bet 67,4%, check 32,6%.** Dari 538 combo, sebanyak 362,1 combo berbobot masuk ke aksi bet.

| Aksi pertama SB | Frekuensi | Combo |
|---|---|---|
| Bet 2bb (33% pot) | **67,4%** | 362,1 |
| Check | 32,6% | 175,9 |

Perbedaannya terlihat jelas jika disejajarkan dengan contoh lain dalam seri.

| Spot | Pemain tanpa posisi | Frekuensi bet OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0,1%–1,9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3,0%–3,2% |
| **7♦6♦5♣ blind vs blind (⑫)** | **SB opener** | **9,6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11,2% |
| 9♥8♥7♣ terhubung (④) | BB caller | 23,7% |
| **K♥T♦6♠ blind vs blind (⑪)** | **SB opener** | **67,4%** |
| **A♠A♥6♦ blind vs blind (⑬)** | **SB opener** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98–100% |

**Peran preflop tidak menentukan semuanya.** SB opener yang sama menghasilkan bet 9,6% pada ⑫, 67,4% di sini, dan 80,1% pada ⑬: **rentang selisih 70,5 poin persentase**. Bahkan 9,6% pada ⑫ lebih rendah daripada caller pada ⑤ (11,2%) dan ④ (23,7%). Menghilangkan dua contoh SB lainnya akan memberi kesan keliru bahwa selalu ada jurang antara caller dan agresor. Kelompok **pot 3-bet memang berdiri terpisah pada 98–100%**, tetapi variasi lainnya bergantung pada **peran dan board secara bersama-sama**.

## Mengapa pemain tanpa posisi lebih sering bet?

**Di sini, agresor preflop juga mendapat giliran pertama pada flop.** ⚠ Struktur ini membantu menjelaskan hasil, tetapi belum cukup untuk menentukan frekuensinya. Konfigurasi yang sama menghasilkan **9,6%** [pada ⑫](/id/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-id.webp") dan **80,1%** [pada ⑬](/id/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-id.webp"). Kecocokan board tetap menentukan seberapa banyak hand yang bet.

Ketika BTN open dan BB call, kedua peran tersebut terpisah: **BTN adalah agresor, tetapi BB bertindak lebih dulu**. Itulah susunan yang sering menghasilkan check dari BB sebelum keputusan c-bet BTN, seperti pada contoh ①–⑦.

Dalam blind vs blind, kedua peran itu berada pada satu pemain. SB melakukan raise, lalu SB bertindak pertama pada flop. Pada K-T-6 ini, **keunggulan range juga berada di pihak SB**.

| Konfigurasi | Agresor preflop | Bertindak pertama pada flop | Bet OOP |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | Peran terpisah → 0,1%–23,7% |
| SB vs BB (⑪ K-T-6) | **SB** | **SB** | Peran menyatu → **67,4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | Peran menyatu, tetapi → **9,6%** |

⚠ **Baris ketiga harus ikut dibaca.** [Contoh ⑫](/id/blog/blind-battle-connected-board) memiliki susunan posisi dan peran persis sama, tetapi bet hanya 9,6%. Pada kelompok caller baris pertama, lead memang jarang. Ketika agresor mendapat giliran pertama, ia tetap perlu **board yang cocok untuk range-nya** agar dapat bet dengan banyak hand.

Equity memberi ukuran untuk kecocokan tersebut: **SB 55,3% versus BB 44,7%**. Pada ①–⑦, pemain tanpa posisi selalu berada di bawah separuh, yaitu 45,1%–48,5%.

:::pull[Keputusan bet lebih dulu perlu mempertimbangkan kekuatan range pada board yang sedang dihadapi, bersama dengan posisi dan peran preflop.]:::

BB pada ①–⑦ dan SB di sini sama-sama tanpa posisi. Pembeda utamanya adalah **hubungan range dengan board**. ⚠ Range preflop pun belum cukup jika dilihat sendirian: pada [board 7-6-5](/id/blog/blind-battle-connected-board), input range sama persis, tetapi frekuensi check mencapai 90,4%.

## Mengapa bet 67%, sementara pot 3-bet bisa 100%?

**Range pertahanan BB jauh lebih lebar.** Itulah salah satu perbedaan penting dari contoh pot 3-bet yang bet dengan seluruh range.

Kedua range hampir sama besar: **538 combo SB dan 525 combo BB**. SB hanya open menjadi 3bb. BB sudah memasang 1bb, sehingga cukup menambah 2bb untuk call; harga ini memungkinkan pertahanan yang lebar.

Menghadapi range selebar itu, **bet seluruh range dengan harapan lawan fold tidak otomatis menguntungkan**. Sebanyak 32,6% range tetap memilih check.

Bagian check mempunyai beberapa fungsi. Ada **hand terlalu lemah untuk bet**, dan ada **hand yang dapat mengundang bet lawan**. Strategi check yang terlindungi juga dapat menyediakan hand untuk [check-raise](/id/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-id.webp"). Frekuensi check-raise khusus spot ini tidak ditampilkan oleh hasil root yang sedang dibahas.

:::note[⚠ Contoh ini hanya menyediakan satu ukuran bet, yaitu sepertiga pot. Jika ukuran lebih besar ditambahkan ke tree, frekuensi 67,4% dapat berubah. Hasil yang tersedia menunjukkan bet kecil dengan banyak hand dalam kondisi tersebut.]:::

## Apa perbedaan komposisi kedua range?

**SB memiliki lebih banyak hand pada beberapa kategori kuat, sementara BB memiliki lebih banyak hand dalam kategori Belum jadi.**

![Grafik komposisi range small blind dan big blind berdasarkan kategori hand pada board K-T-6](/images/gto-sb-king-mid-ranges-id.webp "K-T-6 blind vs blind · Porsi Belum jadi BB hampir 10 poin persentase lebih besar")

| Kategori | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Set/Trips | **1,7%** | 0,6% |
| Two Pair | 2,4% | **2,5%** |
| Overpair (AA) | **1,1%** | 0,0% |
| Top Pair (K) | **15,6%** | 10,9% |
| Second Pair (T) | 11,7% | **13,7%** |
| Pair lemah | 6,1% | **8,0%** |
| Underpair | **10,0%** | 8,0% |
| Ace-High | **26,8%** | 22,1% |
| Belum jadi | 24,5% | **34,3%** |

Dua perbandingan paling menonjol: **Top Pair 15,6% versus 10,9% menguntungkan SB**, sedangkan **Belum jadi 24,5% versus 34,3% berarti porsi BB hampir 10 poin lebih besar**.

⚠ Namun, "Belum jadi" bukan berarti tidak mempunyai potensi. Solver mengelompokkan draw pada panel terpisah. **Keempat kategori di bawah saling terpisah, dan setiap kolom berjumlah 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| OESD | 3,0% | 2,3% |
| Gutshot | **16,4%** | **16,0%** |
| Backdoor FD | 17,8% | **21,1%** |
| Tanpa draw | **62,8%** | 60,6% |

**Tidak ada baris Flush draw**, karena board rainbow tidak memungkinkan pemain sudah memiliki empat kartu satu suit pada flop. Yang ada adalah backdoor flush dalam jumlah cukup besar. Draw tersebut membutuhkan dua kartu berurutan dengan suit yang sesuai, sehingga peluang menyelesaikannya kecil.

OESD sebanyak 3,0% setara dengan ==0,030 × 538 = sekitar 16 combo==. Hanya **Q-J** yang membentuk OESD pada board ini: K-Q-J-T menunggu As atau sembilan, sehingga mempunyai **delapan outs**. Jumlah itu tepat cocok dengan 16 combo Q-J. Gutshot lebih banyak karena mencakup A-Q, A-J, Q-9, J-9, 9-8, dan 8-7.

Dengan sekitar sepertiga range lawan belum pair, sementara beberapa bagian kuat lebih banyak di pihak Anda, bet kecil dengan banyak hand menjadi strategi yang masuk akal dalam tree ini. Sebagian hand yang belum pair tetap memiliki draw dan dapat melanjutkan.

Set menunjukkan arah yang sama. K-K, T-T, dan 6-6 masing-masing membentuk set. **SB memiliki ketiganya, total sembilan combo (1,7%); BB hanya memiliki 6-6, tiga combo (0,6%)**. Dalam range contoh ini, BB melakukan 3-bet dengan K-K dan T-T terhadap open SB, sehingga keduanya tidak tersisa dalam range call. A-A, satu-satunya overpair pada K-high flop, juga hanya dimiliki SB: enam combo.

## Mengapa EQR bisa 103,1% meski tanpa posisi?

**Keunggulan range SB cukup untuk sedikit mengimbangi kerugian posisi.** Angka lengkapnya menunjukkan seberapa tipis selisih tersebut.

| Metrik | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55,3% | 44,7% |
| EV (bb) | 3,42 | 2,58 |
| **EQR (realisasi equity)** | **103,1%** | 96,1% |

Pot berjumlah 6bb. Bagian berdasarkan equity SB adalah ==6 × 55,3% = 3,32bb==, sementara EV-nya 3,42bb. Perbandingannya ==3,42 ÷ 3,32 ≈ 103,1%==.

Berikut tujuh contoh dari seri, diurutkan menurut EQR OOP.

| Spot | Pemain tanpa posisi | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ kering (①) | Caller | 45,1% | 84,0% |
| 6♠5♥2♦ rendah (⑦) | Caller | 48,3% | 84,3% |
| 9♥8♥7♣ terhubung (④) | Caller | 48,5% | 93,2% |
| **K♥T♦6♠ blind vs blind (⑪)** | **Opener** | **55,3%** | **103,1%** |
| 8♦5♣2♠ pot 3-bet (⑩) | 3-bettor | 58,6% | 106,9% |
| A♦K♠2♥ pot 3-bet (⑧) | 3-bettor | 68,9% | 109,6% |
| Q♥T♥7♠ pot 3-bet (⑨) | 3-bettor | 58,3% | 117,8% |

**Semua baris di atas 100% dalam tabel ini dimiliki pemain yang bukan caller.** ⚠ Hubungan itu tidak boleh dibalik menjadi aturan bahwa setiap agresor pasti melewati 100%. **[Board 7-6-5](/id/blog/blind-battle-connected-board), yang tidak masuk tabel tujuh contoh ini, menghasilkan EQR hanya 85,3% untuk SB opener yang sama.** Angka tersebut berada di sekitar kelompok caller. Bahkan pada K-T-6 ini, 103,1% hanya sedikit melewati batasnya.

⚠ **EQR lebih tinggi juga tidak otomatis berarti keunggulan lebih besar.** Pada ⑧, equity **68,9%** menghasilkan EQR **109,6%**, lebih rendah daripada EQR **117,8%** pada ⑨ yang equity-nya hanya **58,3%**, sekitar sepuluh poin lebih rendah. Rumusnya adalah ==EV ÷ (equity × pot)==. **Equity berada di penyebut**, sehingga dengan EV sama, equity lebih rendah menghasilkan rasio lebih tinggi. Angka 103,1% pada contoh ini perlu dibaca berdasarkan pot, equity, dan perannya sendiri.

EQR BB sebesar 96,1% melengkapi gambaran tersebut: **meski memiliki posisi, hasilnya masih di bawah bagian pot berdasarkan equity awal**. Mengapa posisi biasanya membantu dan kapan keunggulan itu belum cukup dibahas dalam [pentingnya posisi dalam poker](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Apa yang dapat diterapkan saat bermain?

- **Dalam blind vs blind, jangan otomatis check hanya karena tanpa posisi.** Setelah open SB, Anda memiliki keunggulan range **preflop** dalam konfigurasi ini, dan solver bet 67,4% pada K-T-6. **Tetap periksa board:** K-high dengan kartu broadway lain mendukung opener. Pada [7♦6♦5♣ yang terhubung](/id/blog/blind-battle-connected-board), SB yang sama hanya bet 9,6%.
- **Ukuran yang dipakai adalah sepertiga pot.** Terhadap 525 combo pertahanan BB, hasil ini memakai bet kecil dengan banyak hand. ⚠ Perhitungan ini belum membuktikan ukuran besar lebih buruk: **tree hanya menyediakan 33% pot**. [Contoh A-A-6](/id/blog/ace-paired-board-strategy) menyediakan ukuran 75% bersama ukuran kecil, sehingga memberi perbandingan pilihan yang berbeda.
- **★ Pada SPR 16,2, siapkan rencana menghadapi raise.** Bet dengan 67,4% range membuka lebih banyak kesempatan menghadapi raise. Dengan sisa stack sekitar **enam belas kali pot**, top pair tidak otomatis siap bermain untuk seluruh stack. Pada pot 3-bet dengan SPR 4,0, raise membawa stack jauh lebih dekat ke tengah. Di sini, call lalu mengevaluasi turn dapat mencakup lebih banyak hand. Di luar sembilan combo set dan **Two Pair (K-T, K-6, T-6)**, alasan untuk berkomitmen penuh perlu dipertimbangkan dengan ketat. 🪶 **A-A berada di bawah Two Pair** karena overpair tetap hanya satu pair. Urutan kategori dalam tabel adalah Set → Two Pair → Overpair; angka 1,7% · 2,4% · 1,1% di sampingnya adalah porsi range. ⚠ Node setelah raise tidak tersedia dalam hasil ini. Penjelasan ini merupakan pertimbangan berdasarkan SPR, bukan batas call atau shove yang dihitung solver.
- **Saat bertahan dari BB, ingat dampak 3-bet dengan K-K dan T-T.** Keduanya keluar dari range call, sehingga hanya 6-6 yang menjadi set pada board ini. Puncak range call Anda menjadi lebih tipis.
- **Check 32,6% tidak selalu berarti lemah.** Range check perlu terlindungi, termasuk melalui hand yang dapat check-raise. Cocokkan kembali panduan [strategi c-bet](/id/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") dengan peran dan board yang sedang Anda hadapi.

:::readnext[Lanjut membaca]
/id/blog/3bet-pot-low-board | Jarang Kena Flop, Bet Besar 97,8%? | /images/gto-3bp-low-oop-id.webp
/id/blog/blind-battle-connected-board | Ganti Board, C-Bet Turun ke 9,6% | /images/gto-sb-connected-oop-id.webp
:::

## Cara mengecek hasilnya sendiri

Buka [solver GTO](/id/solver), lalu pilih **Spot belajar → "Board K-high dengan T" → ⚡ Lihat hasil**. Untuk berlatih pada spot yang sama, buka [Trainer GTO](/id/solver) dari menu samping. Anda mendapat hand acak, kemudian melihat frekuensi campuran dan **kerugian EV dalam bb** setelah memilih aksi. Secara default, riwayat latihan tersimpan di perangkat ini; dengan login ke akun HoldemMaster, riwayat latihan Spot belajar dan Tantangan Harian bisa disimpan di akun dan dilanjutkan di perangkat lain.

Periksa label pemain di bagian atas: **"OOP (SB (opener))"**. Bandingkan dengan "OOP (BB (caller))" pada kelompok sebelumnya. Perubahan label itu menjelaskan perubahan peran yang dibahas dalam artikel ini. Gratis, tanpa instalasi, dan tanpa akun.

**Q. Apakah SB harus selalu c-bet dalam blind vs blind?**

A. Tidak. Pada board ini, solver bet 67,4% dan check 32,6%. Frekuensinya jauh lebih tinggi daripada 0,1%–23,7% pada kelompok BTN versus BB sebelumnya, tetapi K-T-6 juga cocok untuk opener. Perubahan peran memengaruhi titik awal strategi; board yang lebih mendukung caller tetap dapat menurunkan frekuensi bet SB.

**Q. Apakah bermain tanpa posisi selalu merugikan?**

A. Bertindak lebih dulu membatasi informasi Anda, tetapi hasil akhirnya juga bergantung pada range dan board. Pada contoh ini, EQR SB mencapai 103,1% tanpa posisi, sedangkan BB yang memiliki posisi hanya 96,1%. Keunggulan range dapat mengimbangi kerugian posisi; sebaliknya, range yang lemah masih dapat kesulitan merealisasikan equity meski memiliki posisi.

**Q. Mengapa bet hanya sepertiga pot?**

A. Range pertahanan lawan lebar: 525 combo BB berhadapan dengan 538 combo SB. Bet kecil memungkinkan SB menekan dengan banyak hand dalam konfigurasi tersebut. Namun, contoh ini hanya menyediakan ukuran 33% pot. Hasilnya tidak membandingkan EV ukuran kecil dengan ukuran lebih besar.

**Q. Mengapa set BB pada board ini hanya 6-6?**

A. Dalam range contoh ini, K-K dan T-T dipakai untuk 3-bet terhadap open SB, sehingga tidak masuk range call. BB tersisa tiga combo 6-6 (0,6%), sementara SB memiliki K-K, T-T, dan 6-6, total sembilan combo (1,7%). A-A juga tidak berada dalam range call BB karena alasan yang sama.
`.trim(),
};

export default POST;
