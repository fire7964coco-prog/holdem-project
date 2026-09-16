import type { Post } from "../posts";

// ID translation of current EN, with the corrections in docs/id-gto-source-contract.md.
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Dua As di Flop, SB Bet 80,1%",
  seoTitle: "Dua As, Bet Meningkat — Strategi Board A-A-6",
  desc: "Board berpasangan tidak selalu menuntut check. Di A-A-6, SB bet 80,1%. Bandingkan trips, range, dan sizing dengan board 6-6-3 serta 7-6-5.",
  tldr: "Setelah small blind open dan big blind call, SB bet dengan 80,1% range-nya di flop A♠A♥6♦: 79,6% memakai sepertiga pot dan 0,5% memakai tiga perempat, sedangkan 19,8% check. Pada board berpasangan 6♣6♦3♥, frekuensi bet hanya 3,0%, tetapi posisi, peran preflop, dan range juga berbeda. Jadi, yang menentukan bukan sekadar adanya pair di board, melainkan range mana yang diuntungkan. Di sini, trips dengan satu As berjumlah 88 combo melawan 66. A-K dan A-Q, sebanyak 16 combo, sama sekali tidak ada dalam range call BB.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-08-21",
  readTime: "10 mnt",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-id.webp",
  imageAlt: "Hasil solver GTO HoldemMaster di flop A♠A♥6♦, dengan sebagian besar range small blind berwarna oranye untuk bet kecil",
  keepImagesInBody: true,
  tags: ["c-bet di A-A-6", "board dua As", "trips poker", "range SB vs BB", "bet di board berpasangan"],
  content: `
Anda mungkin pernah mendengar bahwa board berpasangan sebaiknya dimainkan dengan check. Pada [board 6-6-3](/id/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-id.webp") yang dibahas sebelumnya, pemain yang beraksi lebih dulu hanya bet **3,0%**.

Board ini juga berpasangan: A♠ A♥ 6♦. Namun, small blind bet **80,1%**.

Pot 6bb, stack efektif 97bb, dan small blind sebagai opener: ketiganya sama dengan dua contoh sebelumnya. Pada board sebelumnya, dari posisi dan peran yang sama, [SB hanya bet 9,6%](/id/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-id.webp"). Kali ini hasilnya berbalik. Semua angka di bawah berasal dari [solver GTO HoldemMaster](/id/solver).

:::stripe
Spot | SB open 3bb → BB call (blind vs blind)
Flop | A♠ A♥ 6♦ (berpasangan · flush draw tidak mungkin terbentuk)
Pot · stack | Pot 6bb · stack efektif 97bb · SPR 16,2
Hasil | SB bet **80,1%** — dibandingkan 3,0% di board berpasangan 6-6-3
:::

> **Jawaban singkat**
> Di board A-A-6, aksi pertama small blind adalah **bet 80,1%, check 19,8%**; 79,6% dari seluruh range memakai sepertiga pot. Hasil ini berlawanan dengan 3,0% di 6-6-3. Perbedaannya bukan sekadar pair di board, melainkan **range mana yang diuntungkan oleh pair itu**, dengan posisi dan range yang juga berbeda. Trips dengan satu As berjumlah **88 combo melawan 66**. **A-K dan A-Q — 16 combo — sama sekali tidak ada dalam range call big blind**, karena hand tersebut sudah melakukan 3-bet preflop.

## Kondisi apa yang menghasilkan angka ini?

★**Sama dengan dua contoh sebelumnya, tetapi kali ini tersedia dua bet size.** Contoh ⑪ dan ⑫ hanya menyediakan sepertiga pot; contoh ini juga menyediakan tiga perempat pot.

| Kondisi | Spot ini ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥T♦6♠ |
|---|---|---|---|
| Aksi preflop | SB open 3bb → BB call | sama | sama |
| OOP (beraksi lebih dulu) | SB — opener | sama | sama |
| Pot · stack efektif | 6bb · 97bb | sama | sama |
| SPR | 16,2 | sama | sama |
| **Bet size** | **Dua: sekitar 33% dan 75% pot** | Satu, 33% | Satu, 33% |
| Range SB | 503 combo | 572 combo | 538 combo |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ T♦ 6♠ |
| Rake | Tidak dimasukkan | Tidak dimasukkan | Tidak dimasukkan |
| Tanggal pengamatan | 2026-08-08 (hasil spot belajar) | 2026-08-08 | 2026-08-08 |

Pot 6bb berasal dari ==3bb SB ditambah 3bb BB==, stack efektifnya ==100 − 3 = 97bb==, dan rasio stack terhadap pot (SPR) adalah ==97 ÷ 6 = 16,2==. Ketiga contoh memakai range preflop yang sama; **jumlah combo berkurang sesuai kartu yang sudah muncul di board**. Dua As di flop menghilangkan banyak kombinasi dengan As, sehingga 503 menjadi jumlah terkecil dari ketiganya. Small blind (SB) berada out of position (OOP), beraksi lebih dulu; big blind (BB) berada in position (IP), beraksi terakhir.

Layar memakai satuan **big blind**: taruhan ditulis sebagai "Bet 4,5bb (75% dari pot)", sedangkan expected value (EV), yaitu rata-rata hasil, ditampilkan sebagai "EV (bb)".

## Seberapa sering small blind bet di sini?

**79,6% memakai ukuran kecil, 0,5% memakai ukuran besar, dan 19,8% check.** Total bet mencapai 80,1%, sekitar 403 dari 503 combo. Angka tampilan dibulatkan: jumlah persentasenya tidak tepat menutup total, dan combo bet yang ditampilkan berjumlah 403,1. Selisih kecil ini tidak menunjukkan strategi yang berbeda.

| Aksi pertama SB | Frekuensi | Combo |
|---|---|---|
| Bet 4,5bb (75% dari pot) | 0,5% | 2,7 |
| Bet 2bb (33% dari pot) | **79,6%** | 400,4 |
| Check | 19,8% | 99,8 |

Perbandingan seluruh seri memperlihatkan posisi hasil ini.

| Spot | Pemain out of position | Frekuensi bet OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0,1%–1,9% |
| **6♣6♦3♥ board berpasangan (⑥)** | BB caller | **3,0%** |
| 6♠5♥2♦ rendah (⑦) | BB caller | 3,2% |
| 7♦6♦5♣ blind vs blind (⑫) | SB opener | 9,6% |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11,2% |
| 9♥8♥7♣ terhubung (④) | BB caller | 23,7% |
| K♥T♦6♠ blind vs blind (⑪) | SB opener | 67,4% |
| **A♠A♥6♦ board berpasangan (⑬)** | **SB opener** | **80,1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98%–100% |

**Kedua board berpasangan berada dekat dua ujung yang berlawanan dalam tabel.** Artinya, label "board berpasangan" saja tidak menentukan strategi.

## Sama-sama berpasangan, mengapa bet 3,0% dan 80,1%?

**Perbedaannya ada pada bagian lain dari range, bukan hanya jumlah trips.** Contoh 6-6-3 membuktikannya: **pemain yang beraksi lebih dulu memiliki lebih banyak trips**, tetapi tetap hanya bet 3,0%.

| Perbandingan | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Pemain yang beraksi lebih dulu | BB — caller | **SB — opener** |
| Porsi trips | BB 5,3% vs BTN 4,0% — **pemain yang beraksi lebih dulu memiliki lebih banyak** | SB 17,5% vs BB 13,1% — pemain yang beraksi lebih dulu memiliki lebih banyak |
| Equity OOP | 47,2% | **56,2%** |
| EQR OOP | 83,7% | **104,1%** |
| Frekuensi bet OOP | **3,0%** | **80,1%** |

Di 6-6-3, big blind melakukan defend dengan harga murah memakai hand yang tidak di-open oleh button (BTN): J-6s, T-6s, dan 9-6s. Combo trips dengan satu kartu enam berjumlah 26 (5,3%), dibandingkan 20 (4,0%) milik lawan. **Namun, BB tetap hanya bet 3,0%.** Jika semua hand yang menambah kekuatan di atas pair board dihitung, hasilnya **18,4% untuk big blind dan 20,3% untuk button**: button unggul. Big blind hanya unggul pada baris trips. Dalam 81,6% sisanya, yakni persaingan "pair enam dengan kartu tinggi", BB juga tertinggal: A-high 26,3% melawan 31,9%.

Di sini, bagian range lainnya juga menguntungkan small blind. King-High berjumlah 22,3% melawan 18,2%, sedangkan hand yang belum menambah kekuatan pada board berjumlah 39,8% melawan 51,5%: **lawan memiliki 11,7 poin persentase lebih banyak hand seperti itu**.

:::pull[Frekuensi bet bergantung pada keunggulan seluruh range, bukan hanya jumlah combo dalam kategori terkuatnya.]:::

As lebih banyak terdapat dalam range pemain yang agresif preflop: pada contoh ini, 95 combo melawan 72, **sekitar 1,3 kali lipat**. Ketika As muncul dua kali di flop, bagian terkuat dan bagian lain dari range sama-sama diuntungkan. Dalam kondisi inilah frekuensi bet naik ke 80%.

## Siapa memiliki lebih banyak trips di A-A-6?

**Small blind memiliki 88 combo (17,5%), big blind 66 (13,1%).** Namun, **hand yang tidak ada dalam range** lebih penting daripada jumlahnya saja. Solver memberi label "Set/Trips" pada kategori ini; di board ini, isinya adalah trips yang terbentuk dari pair di board.

![Perbandingan kategori hand dalam range small blind dan big blind di flop A♠A♥6♦](/images/gto-sb-paired-ace-ranges-id.webp "A-A-6 blind vs blind · hand yang belum menambah kekuatan pada board: 39,8% melawan 51,5%")

| Kategori | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Quads | **0,2% (1 combo)** | 0,0% (0 combo) |
| Full House | 1,8% (9 combo) | 1,8% (9 combo) |
| Set/Trips | **17,5% (88 combo)** | 13,1% (66 combo) |
| Two Pair | **18,5% (93 combo)** | 15,4% (78 combo) |
| King-High | **22,3% (112 combo)** | 18,2% (92 combo) |
| Belum jadi | 39,8% (200 combo) | **51,5% (260 combo)** |

Tiga hal berikut menjelaskan inti spot ini.

- **Trips big blind tidak mencakup A-K dan A-Q.** Saat menghadapi open 3bb dari small blind, hand tersebut melakukan 3-bet, bukan call. Trips dengan kicker tinggi yang hanya dimiliki small blind adalah ==8 combo A-K + 8 A-Q + 6 A-J offsuit = 22 combo==. Keduanya bisa memiliki trips As, tetapi hand ini sudah unggul dalam perbandingan kicker.
- **Quads hanya dimiliki small blind.** A♠ dan A♥ ada di board, sehingga As yang tersisa hanya A♦ dan A♣. A-A menjadi **tepat satu combo**. Big blind melakukan 3-bet dengan A-A, sehingga tidak memilikinya dalam range call.
- **Lebih dari separuh range big blind belum menambah kekuatan pada board.** Jumlahnya 260 combo (51,5%). Bagian ini memberi peluang untuk bluff, tetapi **51,5% bukan frekuensi fold yang dihitung solver**; respons terhadap bet tidak tersedia dalam contoh ini.

Hanya full house yang sama banyak: kedua pemain memiliki ==3 combo 6-6 + 6 combo A-6 = 9==. **Di luar baris itu, setiap kategori yang lebih tinggi secara proporsi menguntungkan small blind. Hanya bagian terbawah, hand yang belum jadi, yang lebih banyak 11,7 poin persentase pada big blind.**

Equity memperlihatkan hasilnya.

| Metrik | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56,2%** | 43,8% |
| EV (bb) | 3,51 | 2,49 |
| **EQR (realisasi equity)** | **104,1%** | 94,8% |

Pot berjumlah 6bb, sehingga bagian berdasarkan equity mentah small blind adalah ==6 × 56,2% = 3,372bb==, sedangkan EV-nya mencapai 3,51bb: ==3,51 ÷ 3,372 = 104,1%==. Kedua EV berjumlah ==3,51 + 2,49 = 6,0bb==, tepat sebesar pot.

**Realisasi equity melewati 100% meski beraksi lebih dulu.** Nilainya **tertinggi dari tiga contoh blind vs blind**: ⑪ sebesar 103,1%, ⑫ sebesar 85,3%, dan contoh ini **104,1%**. Dalam urutan seri, ini adalah contoh kedua dari ketiganya yang melampaui 100%. Keunggulan range yang lebih besar membuatnya sedikit melampaui ⑪. Pot 3-bet juga melewati 100% saat out of position, yaitu 106,9%–117,8%, tetapi keunggulan di sana dibentuk oleh 3-bet preflop.

## Mengapa bet besar hampir tidak dipakai?

**Karena keunggulannya tersebar di seluruh range, bukan terkumpul hanya pada hand yang sangat kuat.** Bet tiga perempat pot dipakai 0,5%, hanya 2,7 combo. Secara praktis, hampir semua bet memakai satu ukuran.

Pot 3-bet menunjukkan keadaan sebaliknya. Di [board rendah 8-5-2](/id/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-id.webp"), big blind memakai dua pertiga pot dengan frekuensi 97,8%. Range-nya terbagi menjadi dua bagian yang hampir sama besar: **overpair dan A-high**, bentuk yang terpolarisasi. Range yang terkumpul pada dua tingkat kekuatan berbeda mendukung bet besar.

Distribusi di sini **berkesinambungan**: trips 17,5%, Two Pair 18,5%, King-High 22,3%, dan hand yang belum jadi 39,8%. Dengan bentuk ini, solver memakai bet kecil untuk banyak hand. Sebanyak 51,5% range lawan yang belum jadi menyediakan peluang memenangkan pot lewat fold, **tanpa berarti 51,5% pasti fold**. Ketika lawan call, ukuran kecil menjaga pot tetap lebih kecil dan tidak langsung mempertaruhkan seluruh sisa stack 97bb; risiko raise dan taruhan pada street berikutnya tetap ada.

:::note[⚠ Contoh ini dihitung dengan dua pilihan ukuran: 33% dan 75%. Jika Anda menambahkan ukuran lebih kecil, seperti seperlima atau seperempat pot, frekuensi 79,6% bisa berpindah ke sana. Bacalah sebagai "ukuran terkecil yang tersedia", bukan "33% selalu menjadi jawabannya".]:::

## Hand apa yang membentuk 19,8% check?

**Bukan satu kategori yang seluruhnya check, melainkan sebagian dari setiap kategori.** Pada pengamatan langsung tanggal 2026-08-21, pocket pair memiliki frekuensi check **K-K 72,4%, Q-Q 66,2%, J-J 42,0%, dan T-T 21,6%**. K-K dan Q-Q lebih sering check, tetapi **T-T sudah bet sekitar 78%**. Sebanyak 99,8 combo yang check juga tidak bisa dirangkum sebagai "hand berkekuatan sedang": **hand yang belum jadi justru kelompok terbesar, sekitar 44%**, disusul King-High sekitar 27%, Two Pair sekitar 17%, dan trips sekitar 11%. Sel yang paling banyak berwarna hijau adalah **Broadway offsuit**, seperti Q-9o, Q-Jo, Q-To, dan J-9o. Hand dengan As serta 6-6 sebagian besar berwarna oranye.

Alasannya berkaitan dengan **siapa yang akan call**. K-K membentuk two pair bersama pair As di board, tetapi **sulit memperoleh banyak value dari bet**. ⚠ Jangan menyimpulkannya sebagai "hand yang lebih lemah fold, hanya trips yang lebih kuat melakukan call": **tabel dalam artikel ini sendiri membantahnya**. Sebanyak 78 combo Two Pair milik big blind terdiri dari tujuh rank pocket pair (42 combo) dan hand dengan satu kartu enam (36), **semuanya lebih lemah daripada K-K**. Sebanyak 92 combo King-High juga kalah. Menghadapi bet sepertiga pot, 170 combo ini, atau 33,7% range, tidak harus semuanya fold. Sementara itu, trips dan full house yang mengalahkan K-K berjumlah **75 combo (14,9%), lebih sedikit**.

Value-nya tipis karena **banyak hand yang lebih lemah bisa call sekali, tetapi enggan melanjutkan sampai pot membesar**. Semakin besar bet, range yang bertahan cenderung makin terkonsentrasi pada trips. ⚠ **As tambahan di turn atau river tidak membuat 170 combo tadi menyalip K-K**: pada board A-A-A-6, K-K menjadi full house As dengan King, dan tidak satu pun dari 170 combo itu mengalahkannya. Check memberi kesempatan kepada 260 combo lawan yang belum jadi untuk bluff; kemudian call bisa menghasilkan value, **dengan asumsi lawan memang mencampurkan bluff**. ⚠ Frekuensi bluff big blind setelah check tidak dihitung di sini. Contoh belajar ini berhenti pada aksi pertama di flop; penjelasan respons lawan merupakan interpretasi dari komposisi range.

**Ini sejalan dengan sebagian besar trips masuk ke bet.** Sebanyak 88 combo trips dengan satu As ingin mendapat value dari King-High dan hand lemah lawan, sehingga relatif jarang check. Namun, ⚠ menyebut "semua trips bet" tetap keliru. Pada pengamatan langsung tanggal 2026-08-21, **94 combo dengan tepat satu As** — 88 trips ditambah 6 combo A-6 yang membentuk full house — check antara **0,1% dan 26,0%, rata-rata 12,3%**. **Tidak ada satu combo pun dengan check tepat 0%.** Check lebih sering dicampurkan pada As dengan kicker rendah: A♣8♣ sebesar 19,4%, A♣7♣ sebesar 20,9%, serta A-5 sampai A-2 offsuit dengan rata-rata 20,1%.

## Apa yang bisa Anda terapkan saat bermain?

- **Jangan menjadikan "board berpasangan berarti check" sebagai aturan.** Di 6-6-3 frekuensi bet-nya 3,0%, di A-A-6 80,1%. Penentunya bukan sekadar pair di board, **juga bukan jumlah combo dengan rank tersebut**. Di 6-6-3, big blind memiliki proporsi kartu enam lebih besar, 5,3% melawan 4,0%, tetapi hanya bet 3,0%. Periksa **apakah seluruh range Anda lebih unggul daripada range lawan**. Frekuensi bet mencapai 80% di sini karena bagian terkuat dan bagian lain dari range sama-sama diuntungkan.
- **Dua As di flop tidak membuat As Anda kehilangan value.** Jika lawan melakukan 3-bet dengan A-K dan A-Q, perbandingan kicker bisa menguntungkan Anda. **Namun, syaratnya hand tersebut memang masuk ke 3-bet.** Jika lawan hanya call dengan A-K dan A-Q, dasar penjelasannya berubah. Trips dengan kicker lemah masih bisa bet, tetapi tidak perlu memaksakan adu raise untuk pot besar.
- **Ukuran kecil, frekuensi tinggi.** Dengan distribusi range yang berkesinambungan, hasil pada contoh ini mendukung bet sepertiga pot dengan banyak hand. Ukuran besar berguna untuk [range yang terbagi menjadi hand kuat dan lemah](/id/blog/3bet-pot-low-board). Bahkan di pot 3-bet, alasannya bisa berbeda: di [board yang penuh draw](/id/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-id.webp"), bet besar membuat harga melanjutkan lebih mahal bagi lawan. **Angka 80,1% juga berasal dari perhitungan heads-up**. Jika masih ada lebih dari satu lawan, kurangi bet dengan hand yang belum jadi secara tajam dan arahkan lebih banyak bet ke trips serta two pair.
- **Jangan bet K-K dan Q-Q hanya "karena kuat".** Di board ini, keduanya sulit mendapat banyak value dari hand yang lebih lemah. Check untuk menangkap bluff bisa lebih baik. ⚠ Ini adalah **interpretasi dari komposisi range**, bukan nilai yang diukur pada contoh ini. Hasil prakalkulasi hanya menampilkan frekuensi aksi pertama di flop; tidak ada hasil node setelah check **dalam contoh prakalkulasi ini**. **Penjelasan ini juga mengasumsikan lawan mencampurkan bluff**. Terhadap lawan yang hampir tidak pernah bluff, bet setelah check Anda lebih mungkin menunjukkan As, sehingga fold bisa lebih baik daripada terus bertahan.

:::readnext[Lanjut membaca]
/id/blog/blind-battle-connected-board | Ganti Board, C-Bet Turun ke 9,6% | /images/gto-sb-connected-oop-id.webp
/id/blog/a-high-board-cbet | Top Pair, Masih Check di A-7-2? | /images/gto-srp-dry-ace-oop-id.webp
:::

## Bagaimana mengeceknya di solver poker?

Anda bisa melihat angka-angka ini dengan membuka [solver GTO](/id/solver), lalu memilih **Spot belajar → "Board dengan dua As" → [⚡ Lihat hasil]**. Untuk mencoba spot yang sama sebagai latihan, buka [Trainer GTO](/id/solver) dari sidebar. Anda mendapat hand acak; setelah memilih aksi, Anda melihat frekuensi strategi campuran dan **kerugian EV (bb)** dari pilihan tersebut. Tanpa login, riwayat tersimpan di browser Anda.

**Bandingkan langsung dengan board berpasangan 6-6-3.** Keduanya memiliki pair, tetapi matriksnya didominasi warna yang berlawanan. Perbandingan ini juga mengubah peran preflop dan range. Setelah mempelajari contoh-contohnya, satu kesimpulan menjadi jelas: tanyakan bukan hanya **board apa yang muncul**, tetapi juga **range siapa yang diuntungkan olehnya**. Gratis, tanpa instalasi, dan tanpa keharusan membuat akun.

**Q. Apa itu trips dalam poker, dan apa bedanya dengan set?**

A. Trips terbentuk dari dua kartu ber-rank sama di board dan satu kartu dengan rank itu di hand Anda. Di A-A-6, kebanyakan hand dengan satu As termasuk trips. **A-6 membentuk full house, bukan trips**, karena kartu enamnya juga berpasangan dengan board. Dalam contoh ini, small blind memiliki 88 combo (17,5%) dan big blind 66 (13,1%). Set terbentuk sebaliknya: pocket pair bertemu satu kartu dengan rank yang sama di board. Memang 6-6 membentuk tiga kartu enam di sini, tetapi pair As di board melengkapi lima kartu terbaiknya menjadi **full house**.

**Q. Bukankah bet dengan hand yang belum jadi berarti bluff?**

A. Untuk hand itu sendiri, ya. Namun, dalam GTO, **bluff perlu dipikirkan sebagai bagian dari range, bukan hanya upaya mengecoh dengan satu hand**. Solver menghitung frekuensi aksi setiap hand; rata-rata tertimbangnya menghasilkan frekuensi bet seluruh range. Sebanyak 51,5% range lawan yang belum jadi memberi peluang mendapatkan fold, tetapi bukan berarti frekuensi fold yang diukur adalah 51,5%. Saat lawan melanjutkan, 88 combo trips small blind mencari value. Value dan bluff memakai ukuran yang sama, sehingga lawan tidak bisa membedakannya hanya dari bet size.

**Q. Seberapa mungkin lawan memiliki As di board A-A-6?**

A. Pada contoh ini, **72 dari 505 combo big blind (14,3%)** memiliki As: 66 combo trips ditambah 6 combo A-6 yang membentuk full house. A♠ dan A♥ sudah ada di board, jadi hanya dua As yang tersisa; frekuensinya lebih rendah daripada yang mungkin Anda bayangkan. Small blind memiliki **95 combo (18,9%)**: 88 trips, 6 A-6, dan 1 A-A. Board yang sama menghasilkan jawaban berbeda sesuai aksi preflop.

**Q. Apa kesimpulan yang menghubungkan seluruh seri ini?**

A. Bahwa **"beraksi lebih dulu adalah kerugian" hanya menjelaskan sebagian keadaan**. Big blind sebagai caller pada contoh ① sampai ⑦ bet 0,1%–23,7%. Ketika beraksi lebih dulu sebagai 3-bettor, frekuensinya mencapai 98%–100%. Small blind sebagai opener dalam blind vs blind berkisar dari 9,6% sampai 80,1%, bergantung pada board. **Hubungan antara range dan board**, bersama peran preflop, menentukan frekuensi itu. Anda bisa memeriksa semua contoh ini melalui spot belajar di [solver GTO HoldemMaster](/id/solver).
`.trim(),
};

export default POST;
