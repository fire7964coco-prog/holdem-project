import type { Post } from "../posts";

// MS GTO ⑤. Sumber EN semasa; pembetulan terhad mengikut kontrak sumber MS.
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "Nut Flush Pun Kerap Check",
  seoTitle: "Nut Flush Kerap Check — Poker GTO Board Monotone",
  desc: "Sudah mendapat nut flush, masih check? Pada Q♠9♠2♠, puratanya 69.9%. Lihat bagaimana blocker dan range lawan mengecilkan saiz bet.",
  tldr: "Pada Q♠9♠2♠, BB check 88.8%, bet kecil 8.0% dan bet besar hanya 3.2%. Apabila tiga kad flop sama suit, bet besar tanpa flush semakin menumpukan tangan yang call kepada flush. Nut flush pun check 69.9% secara purata; flush bukan nuts lebih kerap check, iaitu 81.4%. Angka tindakan ini ialah keputusan pertama BB, bukan strategi tindakan susulan BTN.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 minit",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-ms.webp",
  imageAlt: "Hasil solver GTO HoldemMaster pada flop tiga spade, matriks BB hampir semuanya hijau untuk check dengan sedikit bet kecil",
  keepImagesInBody: true,
  tags: ["board monotone", "flop monotone poker", "strategi nut flush", "blocker poker", "saiz bet", "solver GTO", "reverse implied odds"],
  content: `
Flop ialah **Q♠ 9♠ 2♠** — tiga kad, satu suit. Board (kad komuniti) ini memberi anda **nut flush** serta-merta jika dua kad anda ialah A♠J♠.

Jadi, berapa banyak hendak bet? Naluri pertama ialah membesarkan pot. Solver memilih check dengan tangan ini **83.4% daripada masa.**

Flop monotone mudah mengelirukan kerana tangan yang sudah terbentuk dan tangan kosong sama-sama dimainkan berbeza daripada kebiasaan. Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster, menggunakan range (julat tangan) yang ditetapkan untuk spot ini.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone — ketiga-tiganya sama suit)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb
Hasil | Bet besar 3.2% — penggunaan saiz besar mengecil
:::

> **Jawapan ringkas**
> Bet kecil atau check; jarang sekali bet besar. Pada Q♠9♠2♠, BB check **88.8%**, bet satu pertiga pot **8.0%**, dan bet tiga perempat pot hanya **3.2%**. Tangan terkuat sudah ditentukan oleh jenis flush. Bet kecil pun boleh mendapat call, sedangkan bet besar tanpa flush semakin menumpukan range yang call kepada flush. Angka ini mengukur tindakan pertama BB; penjelasan tentang kedua-dua range ialah tafsiran strategi.

## Apakah board monotone dalam poker?

**Flop yang ketiga-tiga kadnya sama suit** — dalam contoh ini Q♠ 9♠ 2♠. Maka, mana-mana dua spade dalam tangan pemain sudah membentuk flush. Antara tekstur flop yang lazim dibincangkan, ini yang paling jarang dan paling banyak mengubah nilai tangan: satu kad dengan suit yang sesuai boleh lebih bernilai daripada satu pair.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | Q♠ 9♠ 2♠, monotone (tiga spade) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb |
| Saiz bet | Kira-kira 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-20, hasil Spot belajar |

## Bagaimanakah BB bermain pada flop monotone?

**Check 88.8%, lead 11.2%.** Kekerapan lead ini lebih rendah daripada **23.7%** pada [board bersambung 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), tetapi jauh melebihi flop kering: 1.9% pada A-7-2 dan 0.2% pada K-8-3.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **88.8%** | 415.7 |
| Bet 1.8 bb (33% pot) | 8.0% | 37.4 |
| Bet 4.1 bb (75% pot) | **3.2%** | 14.9 |

Perkara yang menarik bukan pembahagian saiz dalam lead, tetapi **keseluruhan serangan yang mengecil.** Bet besar membentuk kira-kira 29% daripada range yang lead, hampir sama dengan 9-8-7 (6.9 daripada 23.7). Yang berubah ialah jumlahnya: lead turun daripada 23.7% kepada 11.2%, dan bet besar daripada 6.9% kepada 3.2% — kedua-duanya berkurang kira-kira separuh.

Penjelasannya ialah bet besar sukar memberi manfaat kepada kedua-dua jenis tangan, manakala bet kecil masih membantu tangan yang boleh mendapat value. Sebab itulah strategi menghampiri "kecil atau check". Bet besar bukan dibuang daripada pilihan: **BB kurang bet secara keseluruhan**, dan tingkah laku flush yang sudah terbentuk menunjukkan sebabnya dengan paling jelas.

## Mengapa bet besar jarang digunakan pada flop monotone?

**Kerana nuts sudah tetap.** Q, 9 dan 2 tidak bersambung, jadi straight flush mustahil pada flop ini. Tangan terbaik ialah flush dengan **A♠ bersama satu lagi spade dalam tangan**. A♠ menentukan bahagian teratas kedua-dua range, tetapi A♠ sahaja belum menjadi flush.

Apabila keadaan begitu, bet besar menjadi kurang menarik untuk mendapatkan value.

:::compare
Jika anda mempunyai flush | Jika anda tidak mempunyai flush
Bet besar membuat kebanyakan tangan tanpa flush fold | Bet besar menumpukan tangan yang call kepada flush
Bet kecil mengekalkan satu pair dalam pot | Bet kecil murah, tetapi satu pair tidak mudah fold kepadanya
:::

**Bet kecil masih membantu flush mendapat call; tangan tanpa flush pula sukar mendapat manfaat daripada kedua-dua saiz.** Itulah tafsiran yang menjelaskan kecenderungan "kecil atau check" dalam output BB ini. Prinsipnya paling jelas pada board ini: saiz bet ditentukan oleh **apa yang boleh digunakan lawan untuk call**, bukan semata-mata kekuatan tangan anda.

## Mengapa nut flush masih check?

**Kerana sangat sedikit tangan boleh membayar bet.** Tatal jadual setiap tangan dalam solver hingga ke bawah dan kumpulkan kesemua lapan kombo nut flush — semua kombinasi A♠ dengan satu lagi spade yang benar-benar terdapat dalam range BB:

| Tangan | Equity | Check | Bet 1.8 bb | Bet 4.1 bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97.7% | **83.4%** | 14.3% | 2.2% | 229.9% |
| A♠T♠ | 97.7% | **84.2%** | 14.5% | 1.2% | 232.3% |
| A♠8♠ | 97.7% | **79.1%** | 17.4% | 3.5% | 232.6% |
| A♠7♠ | 97.6% | **56.0%** | 20.6% | 23.4% | 231.3% |
| A♠6♠ | 97.6% | **60.2%** | 22.0% | 17.9% | 232.6% |
| A♠5♠ | 97.6% | **64.1%** | 20.2% | 15.7% | 233.6% |
| A♠4♠ | 97.6% | **52.7%** | 24.1% | 23.2% | 237.3% |
| A♠3♠ | 97.6% | **79.7%** | 0.0% | 20.3% | 240.6% |

**Purata check ialah 69.9%.** Tangan dengan equity 97.6% — sangat sukar ditewaskan — tetap check kira-kira tujuh daripada sepuluh kali.

Mengapa hanya lapan kombo? Tiga kombinasi Ace suited mustahil kerana **Q♠, 9♠ dan 2♠ sudah berada pada board.** Daripada sembilan yang masih mungkin, A♠K♠ melakukan 3-bet preflop dan tidak sampai melalui laluan call ini. Tinggal lapan.

Sebab check bukan jumlah yang boleh dimenangi sekarang, tetapi jumlah keseluruhan. Bet besar membuat kebanyakan satu pair dan kad tinggi fold. Tangan dengan satu spade mungkin call, tetapi tidak boleh melengkapkan flush yang lebih tinggi daripada nut flush anda. Ini tidak bermakna semua kemungkinan peningkatan lain terhapus. Check memberi ruang kepada lawan untuk bet dengan pair sendiri atau melakukan bluff — value yang boleh terus dikutip pada turn dan river.

Angka itu memperlihatkan kesannya: **EQR sekitar 230%**, lebih dua kali nilai bahagian equity. Pot ialah 5.5 bb, tetapi A♠J♠ mempunyai EV (nilai jangkaan) ==12.36 bb==. Peluang kutipan pada street seterusnya bernilai lebih daripada pot yang sudah tersedia.

Blocker juga kelihatan dalam jadual yang sama. **A♠J♠ dan A♠T♠ check lebih 80%, manakala A♠7♠ hingga A♠4♠ turun kepada 52–64% dan jauh lebih kerap bet.** Memegang J♠ atau T♠ mengurangkan **flush bukan nuts yang mengandungi kad tersebut**. ⚠ Tiada "flush J-high" pada board ini — Q♠ sudah berada di atas meja, jadi setiap flush sekurang-kurangnya Q-high, dan flush kedua terbaik ialah K-high. J♠ atau T♠ mengisi **kedudukan kicker** dalam flush seperti K♠J♠ atau J♠T♠. Tangan itulah yang boleh *call* bet anda. Mengeluarkannya daripada dek mengecilkan range yang boleh membayar, lalu mengurangkan nilai bet dan mendorong check. Kicker rendah tidak menyekat kombinasi tinggi tersebut, jadi lebih banyak tangan masih boleh membayar bet terus. (A♠3♠ yang kembali kepada 79.7% mengingatkan bahawa ini kecenderungan, bukannya peraturan mutlak.)

## Adakah flush bukan nuts dimainkan secara berbeza?

**Ia lebih kerap check.** Terdapat 33 kombo flush BB pada board ini. Bagi 25 kombo tanpa A♠, purata check ialah **81.4%**, berbanding 69.9% bagi nut flush.

| Tangan | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | 97.7% | 83.4% | 229.9% |
| K♠J♠ | 94.0% | **91.8%** | 197.0% |
| K♠8♠ | 93.6% | **76.3%** | 193.0% |
| K♠6♠ | 93.6% | **61.0%** | 193.7% |

Equity berubah sedikit sahaja — 94% berbanding 97.7% — tetapi EQR jatuh kepada 197%. **Apabila menang, kutipannya lebih kecil.** Flush K-high kini hanya kalah kepada flush A-high, dan tangan itulah yang sanggup memasukkan banyak cip. Menang kecil tetapi kalah besar ialah **reverse implied odds**, sisi terbalik peluang kutipan masa depan yang boleh anda teliti melalui [analisis range dalam solver](/ms/solver).

## Siapa mempunyai lebih banyak flush di sini?

**BB — 7.1% berbanding 5.7%.** Namun, arah kelebihan bagi flush *draw* terbalik.

![Carta komposisi range BB dan BTN pada board tiga spade, dengan perbandingan flush, pair dan kad tinggi](/images/gto-srp-monotone-ranges-ms.webp "Q♠9♠2♠ · flush yang sudah terbentuk memihak BB; flush draw dan Ace-High memihak BTN")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Flush yang sudah terbentuk | **7.1%** | 5.7% |
| Flush draw (satu spade, termasuk combo draw) | 25.6% | **29.2%** |
| Top Pair (Q) | 10.9% | **12.0%** |
| Overpair (KK, AA) | 0.0% | **2.5%** |
| Ace-High | 25.6% | **28.5%** |

⚠ Baris flush draw ialah **hasil penjumlahan**: solver menyenaraikan "Flush draw" dan "Combo draw" secara berasingan. Tangan dengan satu spade boleh masuk salah satu kategori itu. Jumlahnya ialah ==20.5 + 5.1 = 25.6%== bagi BB dan ==24.1 + 5.1 = 29.2%== bagi BTN. Perbezaan ini penting apabila anda menyemak jadual dengan skrin.

Pembahagian itu bermula pada preflop. **BB mempertahankan tangan suited lemah dengan kos rendah** — J5s, 85s dan 74s termasuk dalam range call BB; kombinasi spadenya menjadi flush. BTN tidak open tangan tersebut dalam range ini.

Sebaliknya, BTN mempunyai jauh lebih banyak **Ace-x dan King-x offsuit dengan satu spade.** Ia belum menjadi flush, tetapi mempunyai draw. Di sinilah A♠ menjadi istimewa: kad itu boleh membentuk nut flush sambil memberitahu anda bahawa lawan **tidak mungkin** mempunyai nut flush sekarang.

## Bagaimanakah satu spade mengubah nilai tangan?

**Top pair yang sama menjadi tangan yang berbeza bergantung pada kewujudan spade.**

Ambil Q♥J♦ — top pair tanpa spade. Ia sudah ketinggalan kepada **12.0%** range BTN (flush 5.7 + overpair 2.5, ditambah set dan two pair), serta kalah kicker kepada **AQ dan KQ**. Q♠ berada pada board dan Q♥ di tangan anda, jadi tinggal dua Queen: 8 kombo AQ dan 8 kombo KQ, atau **kira-kira 3.4%** daripada 474. Jumlah tangan yang sudah mendahului menjadi kira-kira **15.4%**. Selain itu, **29.2%** mempunyai draw yang boleh memintas dengan satu kad. (⚠ Empat daripada 16 kombo kicker tadi mempunyai spade dan sudah dikira dalam 29.2%; jangan terus menjumlahkan kedua-dua angka.) Ini bukan tangan untuk tiga street value; lebih sesuai menangkap bluff sekali.

Sekarang ambil 9♥8♠ — middle pair dengan satu spade. Ia boleh menang sekarang atau meningkat kemudian, memberikan kelonggaran untuk bet atau call.

**Satu suit mengubah susunan nilai tangan pada seluruh board ini.**

## Mengapa EQR sekitar 90 lawan 109 sedangkan equity 48 lawan 52?

**Kerana board yang mengecilkan pot turut mengecilkan nilai posisi.**

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47.7% | 52.3% |
| EV (bb) | 2.37 | 3.13 |
| **EQR (realisasi equity)** | **90.4%** | **108.8%** |

Nilai bahagian equity BB ialah ==5.5 × 47.7% = 2.62 bb==, berbanding EV sebenar 2.37 bb. Nisbah itulah EQR 90.4%.

Jurang 18.4 mata itu kedua terkecil **antara tujuh single-raised pot**, selepas 9-8-7 pada 13.2. ⚠ Dalam keseluruhan siri, ia hanya kelima: blind lawan blind K-T-6 (7.0) dan A-A-6 (9.3), serta pot 3-bet 8-5-2 (16.6), semuanya lebih rapat dan melibatkan peranan pemain yang berbeza. Apabila bet besar berkurang, keputusan sukar juga berkurang — **nilai posisi bergantung pada keputusan yang masih perlu dibuat.**

## Apakah yang berubah semasa bermain?

- **Bet besar memang jarang dalam output BB pada board monotone ini.** Saiz besarnya digunakan hanya **3.2%**. ⚠ Jangan terus menyimpulkan "maka satu pair mesti fold kepada bet besar". Angka 3.2% ialah kekerapan BB **lead**; apabila BB *menghadapi* bet, kekerapan saiz BTN tidak tersedia dalam solve ini. Lihat range BTN juga: flush hanya 5.7%, tetapi draw satu spade **29.2%**, lebih lima kali ganda. Menganggap setiap bet besar sebagai flush membuat anda fold kepada semi-bluff. Apabila bet besar datang, semak dahulu sama ada **tangan anda sendiri memegang A♠.**
- **Jangan paksa flush kecil bermain tiga street dengan bet besar.** Solver check flush bukan nuts 81.4% (nuts: 69.9%). Cari value melalui bet kecil, dan beri raise besar hormat sewajarnya terhadap kemungkinan A♠ sehingga corak lawan menunjukkan sebaliknya.
- **A♠ menjadikan tangan calon bluff.** Bluff dengan pengetahuan bahawa lawan tidak boleh memegang nut flush berbeza daripada bluff tanpa maklumat blocker itu.
- **Jika lawan tidak pernah fold satu pair, kurangkan perangkap.** Purata check 69.9% mengandaikan lawan juga bet apabila diberikan check. Jika lawan hanya call, bet flush anda untuk mendapatkan value.

:::readnext[Baca seterusnya]
/ms/blog/donk-bet-strategy | Bila Donk Bet Masuk Akal pada 987? | /images/gto-srp-middle-connected-oop-ms.webp
/ms/blog/broadway-board-strategy | Banyak Draw, Mengapa Check 99.9%? | /images/gto-srp-broadway-oop-ms.webp
:::

## Bagaimanakah anda menyemaknya sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian pilih **Spot belajar → Board monotone (satu suit) → [⚡ Lihat hasil]**.

Untuk spot ini, jadual setiap tangan di bahagian bawah menyimpan pelajaran utamanya — **tatal hingga ke penghujung.** Bandingkan mengapa kekerapan check A♠J♠ dan A♠4♠ berbeza sekitar 30 mata, serta bagaimana Queen yang sama berubah nilainya apabila disertai spade.

Kemudian buka **Trainer GTO** pada bar sisi dan cuba keputusan dengan flush pada board ini. Memilih tindakan lalu melihat kos EV membantu menghubungkan angka dengan keputusan. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Apakah flop monotone?**

A. Flop dengan ketiga-tiga kad sama suit, seperti Q♠ 9♠ 2♠. Dua kad suit itu dalam tangan sudah membentuk flush; satu kad sahaja memberi draw. Nilai tangan banyak berubah kerana suit buat sementara waktu lebih menentukan daripada rank.

**Q. Perlukah sentiasa bet apabila sudah mempunyai flush pada board monotone?**

A. Tidak. Dalam solve ini, lapan kombo nut flush check antara 52.7% dengan 84.2%, dengan purata 69.9%. Flush bukan nuts pula check 81.4%. Bet besar membuat kebanyakan satu pair dan kad tinggi fold. Tangan satu spade yang call tidak boleh melengkapkan flush lebih tinggi daripada nut flush, walaupun itu bukan bermakna semua peningkatan lain mustahil. Check untuk menggalakkan bet lawan boleh memberi kutipan keseluruhan yang lebih besar pada turn dan river.

**Q. Mengapa BB mempunyai lebih banyak flush berbanding BTN?**

A. BB sudah membayar sebahagian kos melalui blind dan mempertahankan tangan suited murah seperti J5s, 85s dan 74s. Kombinasi spadenya menjadi flush pada board ini. BTN tidak open tangan tersebut dalam range contoh, sebab itulah flush BTN 5.7% berbanding BB 7.1%.

**Q. Berapa kerap flush terbentuk terus pada flop?**

A. Ia jarang: anda memerlukan dua kad suited serta ketiga-tiga kad flop daripada suit yang sama. Untuk asas membaca peluang draw dan harga menyambung, rujuk [panduan asas Texas Hold'em](/ms/blog/texas-holdem-rules-for-beginners). Fokus di sini ialah keputusan selepas board itu muncul.

**Q. Mengapa A♠ sangat penting walaupun saya belum mempunyai flush?**

A. A♠ ialah blocker: selagi anda memegangnya, lawan tidak boleh mempunyai nut flush. Bahagian paling atas range lawan terhalang, menjadikan tangan dengan A♠ calon bluff yang penting. Arah sebaliknya juga terpakai — apabila anda memegang flush kecil, raise besar wajar diberi lebih perhatian daripada biasa.
`.trim(),
};

export default POST;
