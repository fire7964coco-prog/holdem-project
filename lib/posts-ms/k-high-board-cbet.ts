import type { Post } from "../posts";

// MS GTO ② · EN master + source contract N02/C02/C03: shared AJ, equity definition, live-card claim.
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "BB Check 99.8% pada Flop K83",
  seoTitle: "Mengapa BB Check 99.8%? — C-Bet Poker GTO pada K83",
  desc: "K9 sudah top pair, tetapi 99.8% range BB check pada K83. Lihat kesan overpair yang tiada, EQR dan pilihan check-back dalam 9 minit.",
  tldr: "Pada K♠8♦3♣ selepas BTN open dan BB call, BB check 99.8% daripada range — lebih hampir kepada range check penuh berbanding 98.2% pada flop A-high. BB tidak mempunyai overpair kerana AA digunakan untuk 3-bet preflop. Walaupun equity 46.3% berbanding 53.7%, EQR terpisah kepada 80.7% berbanding 116.7%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 minit",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-ms.webp",
  imageAlt: "Hasil solver GTO HoldemMaster pada flop K♠8♦3♣, grid 13×13 big blind hampir seluruhnya hijau untuk check",
  keepImagesInBody: true,
  tags: ["c-bet poker", "flop K-high", "K83", "check-back range", "delayed c-bet", "solver GTO", "realisasi equity"],
  content: `
Flop membuka **K♠ 8♦ 3♣**, rainbow. Anda memegang K9 di big blind — top pair. Selepas belajar mengapa BB check pada flop A-high, anda mungkin menjangka kad king mengubah keputusan itu.

Memang ada perubahan: **check menjadi lebih kerap.** BB check ==99.8%== di sini, berbanding 98.2% pada [flop A-high](/ms/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-ms.webp"). Kedua-dua saiz bet bersama-sama hanya mengambil 0.2%, kira-kira satu kombo daripada 474.

Semua angka dalam analisis ini berasal daripada [solver GTO percuma](/ms/solver) HoldemMaster, dibaca daripada hasil contoh pembelajaran pada 2026-08-19.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb
Hasil | BB check 99.8% — lebih hampir kepada check penuh berbanding flop A-high
:::

> **Jawapan ringkas**
> Jadikan check pilihan untuk seluruh range (julat tangan), dengan rancangan mempertahankan banyak tangan selepas itu. Hanya kira-kira satu daripada 474 kombo lead. BB **tiada overpair** pada board ini kerana AA digunakan untuk 3-bet preflop. Pada masa yang sama, EQR terpisah kepada **80.7% berbanding 116.7%**, walaupun equity kedua-dua pihak tidak terlalu jauh.

## Apakah tetapan yang menghasilkan angka ini?

BTN open ke 2.5 bb, BB call dan semua pemain lain fold. Dua pemain memasuki flop dengan pot 5.5 bb serta baki stack efektif 97.5 bb. Range menganggarkan permainan dalam talian standard 100 bb. Board (kad komuniti) K♠ 8♦ 3♣ mempunyai tiga suit berlainan. Solver diberikan dua saiz bet, kira-kira satu pertiga dan tiga perempat pot, tanpa memodelkan rake.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | K♠ 8♦ 3♣, rainbow (ketiga-tiga suit berlainan) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb |
| Saiz bet | Kira-kira 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-19, hasil contoh pembelajaran |

Pot ialah ==2.5 open + 2.5 call + 0.5 small blind yang ditinggalkan = 5.5 bb==. Stack efektif pula ialah 100 bb ditolak 2.5 bb yang sudah dimasukkan preflop.

## Berapa kerap BB check pada flop K-8-3?

**99.8%.** Baki 0.2% dibahagikan antara dua saiz bet.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **99.8%** | 473.0 |
| Bet 1.8 bb (33% pot) | 0.1% | 0.6 |
| Bet 4.1 bb (75% pot) | 0.1% | 0.4 |

Kira-kira satu kombo daripada 474: terlalu kecil untuk dijadikan strategi lead utama. **Pada flop K-high kering ini, anda boleh memudahkan permainan BB kepada check seluruh range.** Jangan mentafsir 0.2% itu sebagai alasan untuk kerap bet dahulu.

## Mengapa BB check lebih kerap berbanding pada flop A-high?

**BB tidak mempunyai overpair di sini, sedangkan pada flop A-high tiada pemain boleh mempunyai overpair.** Pada K-8-3, hanya AA ialah pocket pair yang lebih tinggi daripada board. BB menggunakan AA untuk 3-bet preflop, jadi ia tiada dalam range call. Bahagian overpair ialah **0.0% untuk BB dan 1.3% untuk BTN**.

Pada A-7-2, kategori itu tidak wujud bagi sesiapa kerana tiada rank yang mengatasi ace. Kedua-dua pihak sama-sama tiada overpair. Pada board K-high, satu pihak masih mempunyai kategori kuat tambahan itu.

Set menunjukkan perbezaan yang serupa. Pocket pair yang menjadi set pada flop ini ialah KK, 88 dan 33, tetapi **BB hanya mempunyai 88 dan 33**.

| Pocket pair yang menjadi set | BB | BTN |
|---|---|---|
| KK | ❌ (3-bet preflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Bahagian range** | **1.3%** | **1.9%** |

Kiraan kombo sepadan dengan solver. BB mempunyai tiga kombo 88 dan tiga kombo 33: enam daripada 474, atau 1.27%. BTN turut mempunyai KK, menjadi sembilan daripada 480, atau 1.88%.

## Apakah perbezaan komposisi kedua-dua range?

**BTN mempunyai lebih banyak set, overpair dan top pair; BB mempunyai lebih banyak tangan dalam kategori paling lemah.** Perbandingan setiap kategori memperlihatkan sebabnya dengan lebih jelas.

![Carta komposisi range BB dan BTN pada flop K♠8♦3♣, dengan bar hijau dan emas bagi setiap kategori tangan](/images/gto-srp-dry-king-ranges-ms.webp "K♠8♦3♣ · BTN mempunyai lebih banyak set, overpair dan top pair")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trips — di sini semuanya set | 1.3% | **1.9%** |
| Two Pair | **0.8%** | 0.4% |
| Overpair | 0.0% | **1.3%** |
| Top Pair (K) | 12.7% | **14.4%** |
| Second Pair (8) | **10.8%** | 10.0% |
| Pair lemah | **3.2%** | 2.5% |
| Underpair | 8.9% | **11.3%** |
| Ace-High | 27.0% | **30.0%** |
| Tiada made hand | **35.4%** | 28.3% |

**Set, overpair dan top pair lebih banyak di pihak BTN. Kategori Tiada made hand pula 7.1 mata peratusan lebih besar di pihak BB.** BB mendahului dalam two pair, second pair dan pair lemah. Jangan tersalah susun kekuatannya: **two pair ialah kategori kedua terkuat pada board ini**, mengatasi overpair. BB mempunyai dua kali ganda bahagiannya, tetapi 0.8% daripada 474 kombo hanya sekitar **empat kombo**. Bahagian itu terlalu kecil untuk menyokong lead bagi seluruh range. Dua kategori lain yang lebih banyak pada BB pula mempunyai kekuatan sederhana atau lemah.

## Mengapa hampir satu pertiga range hanya ace-high?

**Tanpa ace pada board, tangan Ax yang tidak membentuk pair boleh kekal sebagai ace-high.** Di sini bahagiannya ialah 27.0% untuk BB dan 30.0% untuk BTN, hampir satu pertiga setiap range. Pada A-7-2, setiap Ax sudah berpasangan dengan ace, jadi kumpulan ace-high itu tiada. Perbezaan asasnya ialah **board dengan ace berbanding board tanpa ace**. Dalam contoh 8-5-2 kemudian, yang menggunakan range 3-bet, ace-high mencapai **48.2%**.

Kumpulan ini memberikan pilihan menarik kepada BTN. AQ dan AJ belum mempunyai pair tetapi masih mengatasi tangan lawan dalam kategori Tiada made hand, jadi ada nilai showdown. Tangan-tangan itu bukan c-bet automatik: sebahagiannya boleh check back untuk mengawal pot dan memudahkan perjalanan ke showdown.

Untuk perbandingan tangan yang memang ada pada kedua-dua pihak, gunakan **AJ**. Merealisasikan nilainya lebih sukar dari BB kerana BB bertindak dahulu. Kad yang sama boleh mempunyai nilai strategi berbeza mengikut posisi. Jadual selepas ini mengukur kesan tersebut pada **seluruh range**, bukan EV individu AJ.

## Mengapa EQR 81 lawan 117 sedangkan equity 46 lawan 54?

**Equity ialah bahagian jangkaan pot jika baki kad dibuka hingga showdown, termasuk seri. EQR mengukur berapa banyak nilai itu direalisasikan melalui strategi.** Equity bukan kekerapan memenangi pot dalam permainan sebenar; fold, bet dan raise mengubah hasil yang akhirnya diperoleh.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.3% | 53.7% |
| EV (bb) | 2.06 | 3.44 |
| **Realisasi equity (EQR)** | **80.7%** | **116.7%** |

Pot 5.5 bb memberikan bahagian equity BB sebanyak ==5.5 × 46.3% = 2.55 bb==, tetapi EV (nilai jangkaan) ialah 2.06 bb. Nisbah antara kedua-duanya menghasilkan EQR sekitar 80.7%. Bahagian BTN ialah 2.95 bb, sedangkan EVnya 3.44 bb; sebab itu EQRnya melebihi 100%.

:::note[Angka EQR dalam siri ini mengikut paparan solver. Jika anda mengiranya semula menggunakan equity dan EV yang sudah dibundarkan pada skrin, hasil boleh berbeza sedikit, sekitar beberapa persepuluh mata peratusan. Itu kesan pembundaran, bukan percanggahan.]:::

Pada flop A-high, EQR ialah 84.0% berbanding 113.1%. **Kedua-duanya board kering, tetapi jurang lebih besar pada board king.** Ini bukan hukum bahawa board yang lebih tenang semestinya menghasilkan jurang lebih besar. Dua jurang terluas dalam siri ini terdapat pada board yang banyak draw: [flop Q-J-T two-tone](/ms/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-ms.webp") sebanyak 41.5 mata peratusan dan pot 3-bet Q-T-7 sebanyak 42.7. Pada K-8-3, antara perbezaan penting ialah overpair: BTN mempunyai 1.3%, BB tiada; pada A-7-2 kedua-duanya tiada. Asas kepentingan giliran terakhir boleh dibaca dalam [urutan tindakan dan posisi](/ms/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

## Adakah flop K83 benar-benar tiada draw?

**Tiada draw yang boleh lengkap dengan satu kad.** K, 8 dan 3 berlainan suit serta terlalu jauh untuk menghasilkan flush draw, open-ended straight draw atau gutshot. Dengan hanya dua kad sendiri, draw straight pada flop memerlukan sekurang-kurangnya dua kad board berada dalam satu urutan lima rank. Jarak K ke 8 dan 8 ke 3 masing-masing lima rank; tiada urutan lima kad yang memuatkan dua daripadanya.

| Draw | BB | BTN |
|---|---|---|
| Backdoor FD (memerlukan dua lagi kad suit yang sama) | 27.8% | 22.3% |
| Tiada draw | **72.2%** | **77.7%** |

Yang masih ada ialah backdoor. **Backdoor flush** dalam jadual memerlukan turn dan river daripada suit yang diperlukan, dengan peluang lengkap ==10/47 × 9/46 = kira-kira 4.2%==. Jadual ini tidak mengira backdoor straight, tetapi ia juga wujud: QJ, JT dan T9 boleh bersambung melalui king; 67 dan 65 melalui lapan; 54 melalui tiga.

Backdoor tetap berguna ketika memilih bluff. **Tangan dengan backdoor mempunyai lebih banyak cara untuk meningkat daripada tangan yang kosong sepenuhnya.** Jika turn membawa suit yang diperlukan, tangan itu kini mempunyai flush draw sebenar dan alasan lebih kukuh untuk bet. Selepas check back pada flop, keadaan seperti ini boleh menyokong delayed c-bet pada turn.

## Patutkah BTN sentiasa c-bet pada flop K-high?

**Bet kecil dengan kerap ialah panduan berguna, tetapi bukan arahan untuk semua tangan.** BB mempunyai 35.4% dalam kategori Tiada made hand, yang menyediakan banyak calon fold — bukan kadar fold yang sudah dikira. **72.2% daripada seluruh range BB tiada draw**. Penyebutnya penting: angka itu turut merangkumi top pair 12.7%, second pair 10.8% dan set, bukan hanya tangan tanpa made hand. Komposisi ini menyokong bet sekitar satu pertiga pot dengan range yang luas.

Nasihat bahawa semua ace-high bernilai showdown mesti check back juga terlalu mutlak. AQ dan AJ boleh mencampurkan bet kecil untuk menolak tangan seperti QJ, JT dan T9 yang masih mempunyai peluang meningkat. Ace pada kad berikutnya pula boleh memberi AQ atau AJ top pair. Namun, check juga tidak mengorbankan banyak nilai bagi tangan-tangan ini. Sebab itulah sebahagian besar **check-back range** datang daripada kumpulan ace-high. Pilih campuran tindakan, bukan satu jawapan tetap.

:::note[⚠ Bahagian ini mentafsir komposisi range, bukan melaporkan hasil pengiraan tindakan BTN. Contoh pembelajaran hanya menyediakan tindakan pertama pada flop, iaitu tindakan BB. Kekerapan tepat c-bet BTN tiada pada skrin ini. Pilih "Kira sendiri spot ini" dan jalankan tree untuk mendapatkannya.]:::

## Apakah yang berubah dalam keputusan anda di meja?

- **Selepas call raise heads-up pada flop K-high kering ini, jadikan check strategi asas, walaupun anda memegang king.** Logik range check daripada contoh A-high lebih kuat di sini. Yang menentukan pilihan ialah **komposisi range**, bukan nama tekstur semata-mata. Jika bahagian tangan kuat BB lebih sesuai dengan board, lead boleh muncul. Contohnya [flop 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), apabila BB lead **23.7%**.
- **Check bukan check-fold.** Terhadap c-bet kecil, BB biasanya meneruskan dengan luas: king, pair lapan, underpair dan ace-high dengan backdoor. Top pair ialah calon call; 88, 33 dan two pair ialah calon check-raise. Kekerapan nod lanjutan itu memerlukan pengiraan berasingan.
- **Di BTN, jangan tetapkan satu tindakan sahaja untuk AQ dan AJ.** Bet kecil dan check back kedua-duanya mempunyai alasan. Laraskan campurannya mengikut kecenderungan lawan untuk fold tangan overcard.
- **Terhadap pemain seimbang, jangan anggap check itu lemah.** Range check masih mengandungi set 88 dan 33 serta top pair sebanyak 12.7%. Pada taruhan rendah, pemain yang terus lead dengan tangan kuat boleh mempunyai range check lebih lemah. Teruskan value bet apabila sesuai dan terima bahawa sesekali anda akan menghadapi check-raise.

:::readnext[Baca seterusnya]
/ms/blog/a-high-board-cbet | Top Pair, Mengapa Masih Check? | /images/gto-srp-dry-ace-oop-ms.webp
/ms/blog/broadway-board-strategy | Banyak Draw, Mengapa Check 99.9%? | /images/gto-srp-broadway-oop-ms.webp
:::

## Bagaimanakah anda menyemak hasil ini sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian **Spot belajar → Board kering K-high → [⚡ Lihat hasil]**. Skrin hasil muncul tanpa menunggu pengiraan baharu. Tukar pilihan **Pemain** kepada **IP (BTN)**. Jadual komposisi tadi dibaca daripada panel itu; membandingkan kedua-dua pihak membantu menjelaskan mengapa BB hampir tidak bet.

Untuk latihan, buka **Trainer GTO** di bar sisi. Tangan diberikan mengikut wajaran range sebenar, kemudian pilihan anda dinilai melalui kerugian EV dalam big blind; skor menggunakan kerugian berbanding pot. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Mengapa BB hampir tidak pernah bet pada K-8-3?**

A. Top set KK dan satu-satunya overpair, AA, tiada dalam range call BB. Pada masa yang sama, 35.4% range BB berada dalam kategori Tiada made hand. BB masih mempunyai set 88 dan 33 serta sedikit two pair, tetapi jumlah itu tidak cukup untuk menyokong lead yang luas. Solver memilih check sebanyak 99.8%.

**Q. Mana lebih sukar untuk BB, flop A-high atau K-high?**

A. Dalam dua contoh ini, BB merealisasikan equity dengan lebih buruk pada K-high. Equity mentahnya lebih tinggi, 46.3% berbanding 45.1% pada A-7-2, tetapi EQR lebih rendah: 80.7% berbanding 84.0%. Itu bermaksud bahagian equity yang lebih besar tidak semestinya menghasilkan EV lebih tinggi; ia bukan bukti BB memenangi pot lebih kerap dalam permainan sebenar.

**Q. Apakah check-back range?**

A. Kumpulan tangan yang dipilih oleh pemain IP untuk check selepas lawan check. Ia boleh mengawal pot, memudahkan perjalanan ke showdown dan melindungi range check daripada hanya mengandungi tangan lemah. Pada flop ini, ace-high seperti AQ dan AJ ialah sebahagian penting kerana mengatasi tangan kosong lawan tanpa semestinya mendapat banyak value daripada bet.

**Q. Berapa bernilainya backdoor flush draw?**

A. Peluang lengkap dari flop kira-kira 4.2%, jadi backdoor sahaja bukan alasan cukup untuk call. Kegunaannya ialah memilih bluff: jika turn menghasilkan draw sebenar, tangan itu mempunyai lebih banyak alasan untuk meneruskan bet. Selepas flop check back, ini boleh menjadi asas delayed c-bet.

**Q. Bolehkah angka ini digunakan pada semua aras taruhan?**

A. Gunakan sebagai garis asas apabila syarat sepadan: heads-up, 100 bb, range open dan call standard, tanpa rake. Posisi opener sangat penting. Jika raise datang dari under the gun dan bukannya BTN, range pembukaan lazimnya lebih ketat serta lebih tertumpu pada king dan ace kuat. Itu boleh menjadikan keadaan BB lebih sukar daripada contoh ini; range yang berubah perlu dinilai semula.
`.trim(),
};

export default POST;
