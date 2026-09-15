import type { Post } from "../posts";

// MS GTO ③ · EN master + source contract C04: nut advantage makes the opponent's raise harder.
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Banyak Draw, Mengapa Check 99.9%?",
  seoTitle: "Draw Banyak, Check 99.9% — Poker GTO pada Board QJT",
  desc: "68.4% range BB mempunyai draw pada QJT, tetapi 99.9% check. Fahami nut advantage, saiz bet dan risiko top pair dalam 10 minit.",
  tldr: "Pada Q♠J♦T♠ selepas BTN open dan BB call, BB check 99.9% walaupun 68.4% daripada range mempunyai draw. BTN mempunyai lebih banyak straight, 10.5% berbanding 7.1%, set 2.0% berbanding 0.7% dan overpair 2.6% berbanding 0%. EQR ialah 77.9% berbanding 119.4%, jurang terluas antara tiga flop pertama siri ini.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 minit",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-ms.webp",
  imageAlt: "Hasil solver GTO HoldemMaster pada Q♠J♦T♠ two-tone, grid BB hijau untuk check dengan panel Draw di sebelah kanan",
  keepImagesInBody: true,
  tags: ["board Broadway", "QJT poker", "nut advantage", "range advantage", "draw poker", "solver GTO", "board two-tone"],
  content: `
Flop membuka **Q♠ J♦ T♠**. Anda memegang KQ di big blind: top pair bersama open-ended straight draw. Dengan tangan begini, bukankah lebih baik bet dahulu?

Dua contoh sebelumnya, [A-high](/ms/blog/a-high-board-cbet) dan [K-high](/ms/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-ms.webp"), mempunyai board tenang dengan sedikit draw. Kali ini **68.4% daripada range (julat tangan) BB mempunyai draw**. Namun, solver masih memilih check sebanyak ==99.9%==. Lead menjadi lebih jarang walaupun peluang draw bertambah.

"Banyak draw" dan "boleh bet dahulu" ialah dua perkara berbeza. Semua angka di sini berasal daripada [solver GTO percuma](/ms/solver) HoldemMaster, dibaca daripada hasil contoh pembelajaran pada 2026-08-19.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | Q♠ J♦ T♠ (two-tone — dua spade)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb
Hasil | BB check 99.9% — banyak draw, tetapi hampir tidak lead
:::

> **Jawapan ringkas**
> BB check **99.9%** pada Q♠J♦T♠ walaupun 68.4% daripada range mempunyai draw. Penjelasannya ialah **nut advantage**, kelebihan pada tangan terkuat. BTN mempunyai straight 10.5% berbanding 7.1%, set 2.0% berbanding 0.7% dan overpair 2.6% berbanding 0%. Two pair hampir seimbang pada 6.0% berbanding 5.9%. Lead berisiko menyingkirkan tangan lemah dan membina pot terhadap bahagian range BTN yang lebih kuat.

## Apakah tetapan yang menghasilkan angka ini?

Strukturnya sama seperti dua contoh awal: BTN open ke 2.5 bb, BB call dan pemain lain fold. Dua pemain melihat pot 5.5 bb dengan baki stack efektif 97.5 bb. Range menganggarkan permainan dalam talian standard 100 bb, dan dua saiz bet disediakan: kira-kira satu pertiga serta tiga perempat pot. Yang berubah ialah board (kad komuniti), kini Q♠ J♦ T♠.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | Q♠ J♦ T♠, two-tone (dua spade) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb |
| Saiz bet | Kira-kira 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-19, hasil contoh pembelajaran |

## Mengapa BB check 99.9% pada board yang begitu basah?

**Kekuatan tangan yang sudah terbentuk lebih menentukan tindakan daripada bilangan draw semata-mata.** Banyak peluang meningkat tidak menghapuskan kelebihan lawan pada tangan terkuat.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **99.9%** | 452.5 |
| Bet 1.8 bb (33% pot) | 0.1% | 0.3 |
| Bet 4.1 bb (75% pot) | 0.0% | 0.2 |

Pada flop K-high kering, check ialah 99.8%. **Selepas beralih kepada board yang memberikan draw kepada dua pertiga range, check menjadi lebih hampir kepada seluruh range.** Perbezaan itu menunjukkan mengapa label "basah" sahaja tidak menentukan siapa patut bet dahulu.

## Siapa mempunyai nut advantage pada flop QJT?

**Lihat siapa mempunyai lebih banyak tangan pada bahagian teratas range.** Pada Q-J-T, susunannya ialah straight → set → **two pair** → overpair. BTN mempunyai bahagian lebih besar dalam setiap kategori itu kecuali two pair.

| Kategori kuat | BB (OOP) | BTN (IP) | Punca perbezaan |
|---|---|---|---|
| Straight | 7.1% | **10.5%** | BB **tiada AK** |
| Set/Trips (set pada board ini) | 0.7% | **2.0%** | BB **tiada QQ dan JJ** |
| Two Pair | **6.0%** | 5.9% | Hampir seimbang — satu baris yang bahagiannya lebih besar pada BB |
| Overpair | 0.0% | **2.6%** | BB **tiada AA dan KK** |

Susunannya penting: **two pair ialah kategori ketiga terkuat di sini, mengatasi overpair**. JT pada Q-J-T membentuk ==J-J-T-T-Q==, iaitu two pair, sedangkan AA masih satu pair. Jadi, tidak tepat untuk mengatakan semua kategori kuat dikuasai oleh BTN. Namun, kesimpulan utamanya kekal: BTN mempunyai lebih banyak straight dan set, kedua-duanya mengatasi kategori two pair yang hampir seimbang.

Perbezaan itu terbentuk preflop. BB menggunakan AA, KK, QQ, JJ dan AK untuk 3-bet, maka tangan tersebut tiada dalam range call. BTN pula open semuanya dan masih membawanya ke flop.

Kiraan kombo menjelaskan perbezaan straight. Hanya tiga gabungan rank melengkapkannya: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== dan ==98 (Q-J-T-9-8)==. Ace, king, sembilan dan lapan tiada pada board, jadi setiap gabungan mempunyai 4 × 4 = 16 kombo. BB mempunyai K9 dan 98, berjumlah **32 kombo**. BTN turut mempunyai AK, menjadi **48 kombo**. Angka 7.1% dan 10.5% pada skrin bersamaan kira-kira 32.2 dan 48.1 kombo jika dikira semula daripada peratusan dibundarkan, sepadan dengan kiraan sebenar 32 dan 48.

**Keseluruhan perbezaan straight datang daripada satu tangan: AK.** Keputusan 3-bet preflop mengubah kandungan tangan paling kuat pada flop dengan begitu ketara.

## Apakah beza range advantage dengan nut advantage?

**Range advantage melihat kekuatan purata; nut advantage melihat bahagian tangan paling kuat.** Kedua-duanya sering bergerak seiring. Pada flop ini, perbezaan purata agak kecil tetapi perbezaan bahagian terkuat jauh lebih jelas.

| | Range advantage | Nut advantage |
|---|---|---|
| Soalan yang dijawab | Range siapa mempunyai equity keseluruhan lebih tinggi? | Siapa mempunyai lebih banyak tangan terkuat? |
| Pada Q-J-T | Hampir seimbang — 46.7% berbanding 53.3% | Tidak seimbang — straight, set dan overpair memihak BTN |
| Kesan utama | Sama ada terdapat alasan untuk bet | **Saiz bet dan kemampuan menghadapi raise** |

Equity purata menunjukkan pertandingan yang agak rapat. Bahagian terkuat range pula memberikan BTN lebih banyak tangan untuk menyokong bet besar dan menghadapi raise, sementara BB sukar membina strategi lead besar. Apabila dua petunjuk ini berbeza, **nut advantage sangat mempengaruhi saiz bet**. Pihak yang kurang tangan terkuat perlu lebih berhati-hati untuk bet dahulu.

## Berapa banyak daripada setiap range mempunyai draw?

**Jika hanya mengira draw yang boleh lengkap dengan satu kad: BB 68.4%, BTN 68.7%.** Dengan menambah backdoor flush draw, bahagiannya menjadi 75.2% dan 74.4%, sekitar tiga perempat kedua-dua range.

![Carta komposisi kategori tangan BB dan BTN pada board Q♠J♦T♠ yang bersambung dan mempunyai dua spade](/images/gto-srp-broadway-ranges-ms.webp "Q♠J♦T♠ · empat kategori teratas menjelaskan perbezaan kekuatan kedua-dua range")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | 5.3% | 4.1% |
| Flush draw | 2.4% | 2.0% |
| OESD (open-ended straight draw) | 28.7% | 27.7% |
| Gutshot | 32.0% | 34.9% |
| Backdoor FD | 6.8% | 5.7% |
| Tiada draw | **24.7%** | **25.5%** |

**Pembahagian draw hampir seimbang.** Pada flop K-high, 72.2% daripada range BB tiada draw; di sini hanya sekitar satu perempat. Kategori tangan dan draw ialah dua cara pengelasan berasingan: setiap jadual berjumlah kira-kira 100% sendiri. Panel Draw mengira **peluang yang masih belum lengkap**. Straight yang sudah terbentuk tetapi mempunyai dua spade, seperti K♠9♠, boleh berada dalam baris flush draw. Straight yang tiada draw tambahan pula masuk baris Tiada draw.

Jadi, persoalan utama bukan siapa mempunyai lebih banyak draw. Kedua-duanya hampir seimbang pada ukuran itu; yang tidak seimbang ialah bahagian tangan terkuat. Untuk mengukuhkan asas mengira peluang kad yang melengkapkan draw, baca [asas peluang draw dan pot odds](/ms/blog/texas-holdem-rules-for-beginners).

## Mengapa top pair lebih berbahaya pada QJT?

**21.0% daripada range BTN sudah mengatasi top pair.** Jumlah itu datang daripada straight 10.5%, set 2.0%, two pair 5.9% dan overpair 2.6%.

Pada flop K-high kering, kiraan yang sama hanya **3.6%**: set 1.9%, two pair 0.4% dan overpair 1.3%.

| Bahagian range BTN yang sudah mengatasi top pair | |
|---|---|
| Flop K-high kering (K-8-3) | 3.6% |
| **Flop Broadway (Q-J-T)** | **21.0%** |

**Namanya masih top pair, tetapi bahagian range yang sudah mengatasinya hampir enam kali ganda.** Selain itu, 68.7% daripada range lawan mempunyai draw yang boleh meningkat pada turn atau river. Peratusan draw ialah ukuran berasingan dan boleh bertindih dengan kategori tangan yang sudah kuat. Mengejar tiga pusingan value dengan satu pair pada Q-J-T mudah membina pot terhadap range yang terlalu kuat. Kawalan pot menjadi lebih penting.

## Mengapa EQR 78 lawan 119 sedangkan equity 47 lawan 53?

**Lebih banyak keputusan sukar perlu dibuat, lebih bernilai kelebihan bertindak kemudian.** BTN dapat melihat tindakan BB sebelum memilih tindakannya, sambil disokong oleh bahagian range yang lebih kuat.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.7% | 53.3% |
| EV (bb) | 2.00 | 3.50 |
| **Realisasi equity (EQR)** | **77.9%** | **119.4%** |

Kaedahnya dijelaskan dalam [contoh K-high](/ms/blog/k-high-board-cbet). Di sini, bahagian equity BB ialah ==5.5 × 46.7% = 2.57 bb==, sedangkan EV (nilai jangkaan) ialah 2.00 bb, menghasilkan EQR 77.9%. BTN pula memperoleh EV 3.50 bb daripada bahagian equity 2.93 bb.

Bandingkan tiga flop pertama:

| Flop | EQR BB | EQR BTN | Jurang |
|---|---|---|---|
| A-7-2 (kering) | 84.0% | 113.1% | 29.1 mata peratusan |
| K-8-3 (kering) | 80.7% | 116.7% | 36.0 mata peratusan |
| **Q-J-T (bersambung, two-tone)** | **77.9%** | **119.4%** | **41.5 mata peratusan** |

Tiga contoh ini seolah-olah menunjukkan lebih banyak draw menghasilkan jurang lebih besar. **Contoh berikutnya membatalkan kesimpulan mudah itu.** [9♥8♥7♣](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp") juga tiga kad berturutan dengan dua suit, tetapi jurang EQRnya hanya **13.2 mata peratusan, paling kecil dalam tujuh pot single-raise**. BB merealisasikan 93.2%, paling tinggi antara tujuh contoh tersebut; dalam seluruh siri, 117.8% pada pot 3-bet Q-T-7 masih lebih tinggi.

Yang penting ialah **range siapa lebih sesuai dengan tangan terkuat pada board**, bukan jumlah draw semata-mata. Q-J-T memberikan peranan kuat kepada AK, QQ, JJ, AA dan KK milik BTN. Pada 9-8-7, kad-kad itu tidak membentuk set atau straight yang sama. ⚠ Ia masih relevan: overpair pada 9-8-7 ialah 1.3% berbanding 6.4%, jurang lebih besar daripada 0% berbanding 2.6% pada Q-J-T. Namun, overpair mudah terancam pada board bersambung, jadi kelebihan itu tidak sama dengan menguasai tangan teratas. Asas bertindak kemudian diterangkan dalam [urutan tindakan dan posisi](/ms/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

## Bagaimanakah BTN memilih saiz bet pada board dinamik ini?

**Saiz kecil sahaja tidak mencukupi sebagai panduan; saiz besar juga perlu dipertimbangkan.** Nut advantage memberi BTN lebih banyak tangan kuat untuk menyokong bet besar. Ini menjadikan **raise lebih sukar untuk pihak lawan**, kerana BB mempunyai lebih sedikit tangan teratas untuk membalas tekanan tersebut.

Pada board kering, bet kecil dan kerap boleh menolak banyak tangan kosong. Di sini, **68.4%** daripada range lawan mempunyai draw, jadi membeli fold lebih mahal: bet kecil sahaja tidak semestinya menghasilkan tekanan yang dikehendaki. ⚠ Namun, jangan terus membuat kesimpulan bahawa kekerapan c-bet pasti turun. Contoh ini hanya mengira tindakan pertama BB; pecahan saiz dan kekerapan sebenar c-bet BTN belum diberikan. Anda boleh mengkaji perbezaan board melalui [solver dan latihan c-bet](/ms/solver).

:::note[⚠ Jadual dan angka tadi ialah hasil solver; cadangan saiz BTN dalam bahagian ini ialah tafsiran terhadapnya. Contoh pembelajaran hanya menyediakan tindakan pertama BB pada flop, jadi pecahan saiz BTN tiada pada skrin ini. Pilih "Kira sendiri spot ini" dan jalankan tree untuk memperoleh angka tersebut.]:::

## Apakah yang berubah dalam keputusan anda di meja?

- **Memegang draw bukan alasan tersendiri untuk lead dari BB.** Kedua-dua pemain mempunyai bahagian draw yang hampir sama. Lead masih perlu menghadapi tangan siap yang lebih banyak pada lawan.
- **Jangan menganggap top pair layak untuk tiga pusingan value pada Q-J-T.** Sebanyak 21.0% range lawan sudah mengatasinya, dan banyak tangan lain boleh meningkat. Memilih call secara terkawal lebih munasabah daripada membesarkan pot tanpa menilai tindakan lawan.
- **Ingat kandungan range check itu.** Check BB sebanyak 99.9% masih merangkumi 32 kombo straight, K9 dan 98, serta 27 kombo two pair. Tangan itu tidak lemah. Dengan membenarkan BTN bet, tangan kuat BB boleh memperoleh value sambil melindungi range check daripada hanya berisi tangan kosong. Maka check tidak menolak kemungkinan check-raise. ⚠ Kekerapan check-raise sebenar belum diketahui daripada contoh ini: ia berhenti pada **tindakan pertama flop**. Nod berikutnya memerlukan **Kira sendiri spot ini**.
- **Terhadap lawan yang tidak mahu fold draw, utamakan harga yang dikenakan kepada draw.** Saiz lebih besar boleh lebih berguna daripada sekadar menambah kekerapan bluff; jangan bergantung pada fold yang lawan itu tidak akan buat.

:::readnext[Baca seterusnya]
/ms/blog/k-high-board-cbet | BB Check 99.8% pada Flop K83 | /images/gto-srp-dry-king-oop-ms.webp
/ms/blog/a-high-board-cbet | Top Pair, Mengapa Masih Check? | /images/gto-srp-dry-ace-oop-ms.webp
:::

## Bagaimanakah anda menyemak hasil ini sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian **Spot belajar → Board Broadway bersambung, two-tone → [⚡ Lihat hasil]**. Hasil sedia ada dipaparkan tanpa menunggu pengiraan baharu.

Mulakan dengan panel **Draw** di sebelah kanan. OESD dan gutshot bersama-sama melebihi 60%, kali pertama antara contoh awal siri ini. Kemudian tukar pilihan **Pemain** kepada **IP (BTN)** dan lihat baris **Straight 10.5%**. Bandingkan dengan BB untuk melihat perbezaan yang menjadi teras analisis ini.

Untuk berlatih, buka **Trainer GTO** di bar sisi. Tangan dipilih mengikut wajaran range sebenar, dan tindakan anda dinilai berdasarkan kerugian EV dalam big blind; skor menggunakan kerugian berbanding pot. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Tangan manakah melengkapkan straight pada Q-J-T?**

A. Tiga gabungan rank: AK membentuk A-K-Q-J-T, K9 membentuk K-Q-J-T-9 dan 98 membentuk Q-J-T-9-8. Ace, king, sembilan dan lapan tiada pada board, jadi setiap gabungan mempunyai 4 × 4 = 16 kombo, berjumlah 48. BB menggunakan AK untuk 3-bet preflop, lalu range callnya hanya mempunyai 32 kombo straight.

**Q. Bukankah board basah sesuai untuk lead semi-bluff?**

A. Bilangan draw sahaja tidak cukup. Taburan tangan siap, nut advantage dan blocker perlu dinilai bersama. OESD di sini ialah 28.7% berbanding 27.7%, hampir sama, tetapi straight siap ialah 7.1% berbanding 10.5% memihak BTN. Untuk menyokong lead, anda memerlukan alasan daripada komposisi tangan kuat sendiri. Contoh berlainan ialah [board tengah bersambung 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), apabila BB benar-benar mempunyai bahagian lead yang bermakna.

**Q. Adakah range advantage dan nut advantage perkara yang sama?**

A. Tidak. Range advantage melihat equity purata seluruh range. Nut advantage melihat siapa mempunyai lebih banyak tangan teratas; pada Q-J-T susunannya straight, set, two pair dan overpair. Equity agak rapat pada 46.7% berbanding 53.3%, tetapi straight dan set memihak BTN. Two pair hampir seimbang pada 6.0% berbanding 5.9%. Perbezaan bahagian terkuat itu sangat mempengaruhi saiz bet.

**Q. Bolehkah angka ini digunakan pada semua aras taruhan?**

A. Sebagai garis asas apabila syarat sepadan: heads-up, 100 bb, range open dan call standard, tanpa rake. Kedalaman stack sangat penting pada board ini. Pada 200 bb, jurang straight 3.4 mata peratusan boleh memberi kesan lebih besar kerana lebih banyak cip masih boleh dimasukkan ke dalam pot terhadap tangan yang tiada dalam range anda. Itu implikasi strategi kedalaman, bukan hasil pengiraan 200 bb dalam contoh ini.
`.trim(),
};

export default POST;
