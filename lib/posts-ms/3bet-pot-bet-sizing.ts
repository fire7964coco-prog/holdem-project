import type { Post } from "../posts";

// MS ⑨. EN master + approved N13–N15/C07–C09 corrections; see docs/ms-gto-source-contract.md.
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Dua Saiz, Satu Hampir Sentiasa Dipilih",
  seoTitle: "Bet Besar 98.4% — Saiz Bet Poker GTO dalam Pot 3-Bet",
  desc: "Dua saiz tersedia pada QT7, tetapi bet besar dipilih 98.4%. Bandingkan harga call, 40 kombo draw dan kesan SPR dalam pot 3-bet.",
  tldr: "Pada Q♥T♥7♠ dalam pot 3-bet, BB memilih bet dua pertiga pot, 14.9 bb, pada kekerapan 98.4%. Bet kecil mendapat 0.7% dan check 0.8%: kedua-duanya bersama hampir satu kombo daripada 73. Pada A♦K♠2♥, range yang sama membahagikan saiz 57.8/42.2. Perubahan ini berkait dengan harga yang dibayar caller untuk meneruskan draw. Bet kecil memberi harga yang lebih murah pada board yang mempunyai banyak draw.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "12 minit",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-ms.webp",
  imageAlt: "Keputusan solver HoldemMaster pada flop Q-T-7 two-tone dalam pot 3-bet, grid BB hampir seluruhnya berwarna untuk bet dua pertiga pot 98.4%",
  keepImagesInBody: true,
  tags: ["saiz bet poker", "pot 3-bet", "board two-tone", "geometric bet sizing", "harga call draw", "solver GTO"],
  content: `
Dalam contoh sebelumnya, big blind melakukan bet dengan seluruh range pada [A♦K♠2♥](/ms/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-ms.webp"), dengan pembahagian saiz yang hampir seimbang: 57.8% kecil dan 42.2% besar.

Flop kali ini ialah Q♥ T♥ 7♠. Dua kad heart, dan hanya jack yang memisahkan queen dengan ten. **Draw bertambah banyak, lalu pembahagian itu hampir hilang:** dua pertiga pot mendapat ==98.4%==, manakala saiz kecil mendapat 0.7%.

Nasihat “bet besar pada board yang banyak draw” memang biasa didengar. Yang menarik ialah sejauh mana pilihan itu menguasai strategi. Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster. Range bermaksud julat tangan; board ialah kad komuniti yang dikongsi kedua-dua pemain.

:::stripe
Spot | BB melakukan 3-bet → BTN call (heads-up)
Flop | Q♥ T♥ 7♠ (two-tone, bersambung)
Pot · stack | Pot 22.5 bb · stack efektif 89 bb · SPR 4.0
Hasil | Dua pertiga pot 98.4% — pembahagian saiz hampir hilang
:::

> **Jawapan ringkas**
> BB melakukan **bet 14.9 bb, dua pertiga pot, pada kekerapan 98.4%**. Saiz kecil 0.7% dan check 0.8% terlalu kecil untuk dijadikan arahan praktikal yang berasingan. Sebab utamanya ialah harga: satu pertiga pot memerlukan kira-kira ==19.8%== equity, yang dilepasi empat kombo BTN dengan flush draw. Dua pertiga memerlukan kira-kira ==28.5%==, dan hanya dua daripada **40 kombo draw BTN** melepasi ambang itu berdasarkan satu kad seterusnya. Combo draw 12 outs yang melepasi harga kecil kini tidak cukup jika dikira dengan kad seterusnya sahaja. Pada A-K-2, BB mempunyai 63 kombo yang semuanya pair atau lebih baik; bahagian bawah range sudah terpotong dan tiada flush draw untuk dikenakan harga.

## Apakah syarat yang menghasilkan angka ini?

**Pot 3-bet sama seperti contoh sebelumnya; hanya flop berubah.** BB melakukan 3-bet ke 11 bb, BTN call, dan kedua-duanya melihat Q♥T♥7♠ dengan pot 22.5 bb serta baki stack 89 bb. Pot dan stack inilah yang membezakan kumpulan pot 3-bet daripada pot single-raised dalam siri ini.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open → **BB melakukan 3-bet ke 11 bb** → BTN call |
| OOP · IP | OOP = BB (3-bettor) · IP = BTN (caller) |
| Flop | Q♥ T♥ 7♠ — dua heart, maka **two-tone** |
| Pot · stack | Pot 22.5 bb · stack efektif 89 bb (**SPR 4.0**) |
| Saiz bet tersedia | Kira-kira satu pertiga (7.4 bb) dan dua pertiga (14.9 bb) pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-20 |

Pot 22.5 bb datang daripada ==11 untuk 3-bet + 11 untuk call + 0.5 daripada SB yang fold==, dan stack efektif ialah ==100 − 11 = 89 bb==. Paparan solver menggunakan big blind; setiap bet menunjukkan amaun bersama bahagiannya daripada pot.

## Adakah range ini benar-benar menggunakan satu saiz sahaja?

**Ya, secara praktikal hampir satu saiz sahaja.** Daripada 73 kombo, 71.9 memilih dua pertiga pot, sementara bet kecil dan check berkongsi 1.1 kombo. Kedua-dua saiz tersedia dalam tree, tetapi salah satunya hampir tidak digunakan. Ini hasil pemilihan antara pilihan yang tersedia, bukan sekatan kepada satu saiz.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Bet 14.9 bb (66% pot) | **98.4%** | 71.9 |
| Check | 0.8% | 0.6 |
| Bet 7.4 bb (33% pot) | 0.7% | 0.5 |

Bilangan kombo berpecahan kerana **diwajarkan mengikut kekerapan tindakan**. Beberapa tangan mencampurkan sedikit check dan bet kecil dengan bet besar. Pada bahagian kurang daripada satu peratus, sukar memisahkan campuran yang bermakna daripada kesan penumpuan solver. Untuk pembelajaran, anggap ia hampir sifar tanpa mengubah angka paparan. Kekurangan 0.1 mata peratus dalam jumlah tindakan pula ialah pembundaran.

Apabila diletakkan sebelah menyebelah, dua pot 3-bet ini kelihatan amat berbeza. Kedua-duanya menggunakan SPR 4.0 dan range 3-bet 14 jenis tangan yang sama.

| Flop | Satu pertiga | Dua pertiga | Check |
|---|---|---|---|
| A♦K♠2♥ kering, rainbow | **57.8%** | 42.2% | 0.0% |
| **Q♥T♥7♠ two-tone, bersambung** | 0.7% | **98.4%** | 0.8% |

## Mengapa board yang banyak draw memilih satu bet besar?

**Saiz bet poker dipengaruhi oleh harga yang mampu dibayar oleh range lawan untuk call.** Kira draw BTN, kemudian bandingkan peluang melengkapkannya dengan dua harga dalam tree. Pada board kering, draw langsung jauh lebih sedikit; itu antara sebab saiz kecil masih berguna. Namun bentuk keseluruhan range juga penting, seperti perbandingan 8-5-2 di bawah.

| Draw | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Combo draw | 2.7% | 3.0% |
| Flush draw | 2.7% | — |
| OESD | — | **4.5%** |
| Gutshot | **24.7%** | 22.6% |
| Backdoor FD | 26.0% | 27.1% |
| Tiada draw | 43.8% | 42.9% |

**Jika hanya draw langsung dikira, kedua-duanya mencapai 30.1%**: BB daripada combo 2.7%, flush 2.7% dan gutshot 24.7%; BTN daripada combo 3.0%, OESD 4.5% dan gutshot 22.6%.

🪶 Backdoor flush sengaja diasingkan. Ia memerlukan dua kad berturut-turut daripada suit yang diperlukan, dengan peluang ==(10 ÷ 47) × (9 ÷ 46) = kira-kira 4.2%==. Ia bukan flush draw satu kad. Jadual draw juga **paksi berasingan daripada jadual tangan siap**: overpair dengan satu heart turut boleh masuk baris backdoor. Pada [flop K-high kering](/ms/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-ms.webp"), baris “Tiada draw” ialah 72.2% bagi BB dan 77.7% bagi BTN. Keadaannya jauh berbeza.

Bet satu pertiga pot, 7.4 bb, memberikan harga call ==7.4 ÷ (22.5 + 7.4 + 7.4) = kira-kira 19.8%==. Jadual berikut menilai peluang melengkapkan draw dengan **satu kad seterusnya**.

| Draw yang boleh dipegang BTN | Kombo | Outs | Kad seterusnya | vs 1/3 (19.8%) | vs 2/3 (28.5%) |
|---|---|---|---|---|---|
| Flush + OESD — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31.9%== | ✅ | ✅ |
| Flush + gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25.5%== | ✅ | ❌ |
| OESD — K-J dan 9-8 daripada suit lain | 6 | 8 | ==8 ÷ 47 = 17.0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8.5%== | ❌ | ❌ |

**Daripada 40 kombo draw BTN, 38 tidak mencapai harga dua pertiga berdasarkan peluang satu kad.** K♥J♥ dan 9♥8♥ mempunyai flush draw serta OESD; 15 outs melepasi **kedua-dua saiz dalam tree berdasarkan odds segera**. Tetapi itu hanya ==2 daripada 40==, dan ⚠ **outs tersebut belum tentu bersih**. BB mempunyai tepat empat kombo dua heart — A♥K♥, A♥J♥, A♥5♥, A♥4♥ — dan semuanya mengandungi A♥. Q♥ sudah di board, maka A♥Q♥ dan K♥Q♥ tidak mungkin wujud.

Flush draw K-high dan 9-high BTN mengejar heart terhadap range yang semua flush lengkapnya akan menjadi nut flush. Pada SPR 4, heart di turn boleh membawa keputusan tentang baki stack: inilah risiko reverse implied odds. Jika harga turun kepada satu pertiga, kombo yang melepasi ambang menjadi **empat**, sementara 30 gutshot lain mendapat harga lebih murah untuk melihat turn. Tangan yang sudah siap perlu dinilai berasingan berdasarkan kekuatan semasanya.

⚠ "Tidak mencapai harga" di sini hanya merujuk kepada kiraan kad seterusnya. Terhadap seluruh range BB dengan turn dan river masih akan dibuka, 30 daripada 38 kombo itu masih memegang equity melebihi 28.5% — gutshot A-K berada pada 37.6–42.9% kerana overcard turut dikira. Kesan bet besar kepada kebanyakan draw ialah mengenakan harga, bukan membuat mereka fold.

⚠ **Jadual tadi menilai satu kad. Peluang melihat kedua-dua kad ialah soalan lain, dengan kemungkinan kos tambahan.** Dengan turn dan river, draw 15 outs mencapai ==kira-kira 54.1%==, draw 12 outs ==kira-kira 45.0%==, OESD lapan outs ==31.5%== dan gutshot ==16.5%==. Caller juga mempunyai posisi, baki stack 74.1 bb dan pilihan raise. Bet besar mempengaruhi harga untuk menggunakan semua kelebihan ini; odds satu kad sahaja tidak menentukan EV call.

Caller juga tidak boleh dianggap akan fold segala-galanya. Menghadapi 14.9 bb ke dalam 22.5 bb, kekerapan bertahan untuk menafikan keuntungan **pure bluff tanpa equity** ialah ==22.5 ÷ (22.5 + 14.9) = 60.2%==, iaitu minimum defense frequency atau MDF. Tangan BTN daripada set hingga second pair berjumlah **33.9%**: set 6.8, top pair 20.3 dan second pair 6.8.

🪶 Namun 60.2% itu boleh dicapai tanpa draw: **33.9% tadi + underpair 36.1% = 70.0%**. Walaupun semua 38 kombo draw yang tidak mencapai harga satu kad fold, masih tinggal 71.4% range. Bet besar menjadikan bahagian pertengahan range BTN membayar harga yang sukar, bukannya membuktikan semua draw mesti terus bermain. Dalam jadual ini, underpair ialah pocket pair di bawah queen; JJ masih lebih tinggi daripada ten. Pasangan tersebut tetap menghadapi ancaman kad tinggi dan draw pada board.

:::note[⚠ MDF mengandaikan bet itu pure bluff tanpa equity sendiri. Kebanyakan range di sini tidak memenuhi andaian itu: 24.7% range BB ialah gutshot, yang masih mempunyai equity ketika bet walaupun mungkin menyerah kemudian. Gunakan 60.2% sebagai rujukan memahami pertahanan, bukan kuota call.]:::

🪶 Jangan ringkaskan kepada “flush draw tetap call”. Flush draw sahaja mempunyai sembilan outs, ==9 ÷ 47 = 19.1%==, belum pun melepasi harga kecil 19.8%. **Range BTN ini tiada flush draw sahaja**, seperti tanda sengkang dalam jadual. Tepat empat tangan dua heart semuanya turut mempunyai straight draw: dua gutshot dan dua OESD. Oleh itu, semuanya masuk baris combo draw. Peluang flush draw sahaja mencapai ==kira-kira 35.0%== menjelang river memang benar, tetapi itu bukan kategori yang ada pada BTN di sini.

Untuk asas mengira outs dan harga call, rujuk [peluang draw untuk pemula](/ms/blog/texas-holdem-rules-for-beginners) dan [asas pot odds](/ms/blog/texas-holdem-rules-for-beginners).

:::pull[Saiz bet perlu mengambil kira harga yang mampu dibayar oleh range lawan untuk call.]:::

:::note[⚠ Tekstur serupa boleh menghasilkan tindakan bertentangan apabila peranan preflop berubah. Dalam **pot single-raised**, raiser memegang bahagian atas range pada flop Broadway two-tone, sementara BB yang hanya call hampir sentiasa check: pada [Q♠J♦T♠](/ms/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-ms.webp"), kekerapan check ialah 99.9%. Semasa mengkaji prinsip c-bet dalam [solver](/ms/solver), pastikan anda melihat pihak raiser. **3-bet menukar siapa yang memegang range itu.** Di sini BB ialah 3-bettor dan range itulah yang sesuai dengan board, maka BB bet hampir seluruhnya. Baca tindakan preflop sebelum membuat keputusan daripada tekstur sahaja.]:::

## Apakah geometric bet sizing?

**Geometric sizing memilih pecahan pot yang sama pada setiap street supaya bet terakhir menggunakan seluruh stack.** Dengan pot 22.5 bb dan baki 89 bb, pot akhir selepas tiga bet yang semuanya di-call ialah ==22.5 + 2 × 89 = 200.5 bb==. Pot perlu berkembang ==200.5 ÷ 22.5 = 8.91 kali== dalam tiga street. Penyelesaiannya kira-kira **54% pot sebanyak tiga kali**.

Saiz flop yang ditawarkan oleh solver di sini lebih besar, tetapi laluan berikut masih muat:

- Flop **14.9 bb** → selepas call, pot 52.3 bb dan baki 74.1 bb.
- Turn **34.5 bb** → selepas call, baki 39.6 bb.
- River **39.6 bb** all-in.

**==14.9 + 34.5 + 39.6 = 89.0==.** Bet terakhir ialah 39.6 ke dalam pot 121.3, hanya ==kira-kira 33%==. Jadi ini dua bet besar diikuti baki stack, bukan tiga bet besar.

**Jauh lebih sedikit tangan boleh merancang ketiga-tiga street berbanding bet pertama.** Bet besar digunakan 98.4% pada flop. Berdasarkan kelas tangan sahaja, calon value untuk meneruskan ialah set dan overpair, ==6 + 12 = 18 kombo==, sementara A-high membeli satu street sebelum menilai semula. ⚠ Ini tafsiran kategori, bukan hasil solve turn/river. Paparan ini tidak mengesahkan semua 18 kombo mesti meneruskan, dan tidak menentukan nasib 15 kombo top pair. **Top pair ialah keputusan yang paling memerlukan rancangan** sebelum bet.

Itulah makna praktikal **SPR 4.0**: bukan sekadar amaun baki, tetapi ruang keputusan yang tinggal. Selepas bet 14.9 bb di-call, SPR turn menjadi ==74.1 ÷ 52.3 = 1.4==. Bet berikutnya boleh melibatkan sebahagian besar stack.

Oleh itu, harga flop berkait dengan street seterusnya. Peluang draw menjelang river mengandaikan kedua-dua kad dapat dilihat; caller mungkin perlu membayar lagi. Bermula kecil mengurangkan harga serta-merta, tetapi **tidak menjamin turn atau river percuma**.

## Mengapa tangan tanpa pair turut bet?

**Sebanyak 38.4% range BB ialah A-high, dan kebanyakannya mempunyai straight draw.** Daripada 73 kombo, 28 ialah A-high; kesemua 18 gutshot berada dalam kumpulan itu. Tiada pair tidak bermakna tiada equity. Ada empat outs ke Broadway, peluang mendapat pair melalui kad tangan, serta fold yang memenangi pot serta-merta. AK mempunyai dua overcard; AJ tidak, kerana jack berada di bawah queen.

| Pecahan 28 kombo A-high | Kombo | Sifat tangan |
|---|---|---|
| AK | 16 | **Satu jack** melengkapkan A-K-Q-J-T. 15 ialah gutshot; A♥K♥ menambah flush draw lalu menjadi combo draw |
| AJs | 4 | Mengejar A-K-Q-J-T juga, tetapi memerlukan **king**. 3 ialah gutshot; A♥J♥ ialah combo draw |
| A5s · A4s | 8 | A♥5♥ dan A♥4♥ ialah dua flush draw sahaja |

Dengan queen dan ten di board, **AK dan AJ mengejar straight A-K-Q-J-T yang sama tanpa pair ketika ini**. Apabila lawan fold, pot dimenangi terus; apabila di-call, masih ada outs untuk memperbaiki tangan. Inilah sebahagian sebab tangan tersebut boleh menyertai bet.

JJ dan 99 berlainan. **Kedua-duanya tiada draw yang siap dengan satu kad.** JJ bersama queen dan ten masih memerlukan dua kad lagi — king dan sembilan, ace dan king, atau sembilan dan lapan — untuk straight. Pair memang mempunyai nilai semasa, tetapi AK boleh melengkapkan straight dengan satu kad sahaja.

## Apakah sebenarnya kandungan range BTN?

**Lebih satu pertiga, 36.1%, ialah underpair dalam pengelasan ini: pocket pair di bawah queen.** Ia tidak semestinya di bawah kedua-dua kad Broadway, kerana JJ masih mengatasi ten. Selebihnya merangkumi tangan yang mengenai queen, draw heart dan bahagian bawah yang belum siap. Satu baris dalam jadual ini mudah disalah baca.

![Perbandingan kelas tangan BB dan BTN pada flop Q-T-7 two-tone dalam pot 3-bet; overpair hanya pada BB dan second pair hanya pada BTN](/images/gto-3bp-dynamic-ranges-ms.webp "Pot 3-bet Q-T-7 · overpair milik BB, second pair milik BTN")

| Kategori | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Set/Trips (set di sini) | **8.2%** | 6.8% |
| Overpair | **16.4%** | — |
| Top pair (queen) | 20.5% | 20.3% |
| Second pair (ten) | — | **6.8%** |
| Underpair | 16.4% | **36.1%** |
| Ace-High | **38.4%** | 24.1% |
| King-High + Tiada made hand | — | 6.0% |

Dua baris menerangkan perbezaan utama, tetapi salah satunya memerlukan perhatian pada penyebut.

**Overpair memang hanya ada pada BB:** 16.4% berbanding sifar, kerana range caller contoh ini tidak mempunyai pocket AA atau KK. Kad ace dan king tetap banyak — 32 kombo AK dan AJ berada dalam baris A-high. Ini **tetapan preflop dalam tree**, bukan range yang dipilih oleh solver selepas melihat flop. Dalam pengiraan lain, sebahagian premium boleh dikekalkan dalam range call untuk melindungi bahagian atasnya.

**Set bukan milik BB sahaja walaupun peratusannya lebih tinggi.** 8.2% daripada 73 kombo ialah 6; 6.8% daripada 133 ialah 9. BTN sebenarnya mempunyai lebih banyak set. Bahagian kecil daripada range lebih besar boleh mewakili lebih banyak kombo. Panel menggunakan label *Set/Trips*. Pada flop tanpa pair, pocket pair yang sepadan dengan satu kad board menghasilkan **set**; perbezaannya dihuraikan dalam [contoh board berpasangan](/ms/blog/paired-board-strategy).

Second pair hanya ada pada BTN kerana **range 3-bet BB tiada tangan dengan satu ten**. Pocket TT memang ada, tetapi ia menjadi set dan masuk baris lebih tinggi.

Top pair pula 20.5% berbanding 20.3%. Perbezaan besar antara range berada di atas dan di bawah top pair, bukannya dalam baris itu.

## Mengapa EQR 117.8% sedangkan equity 58.3%?

**BB merealisasikan kira-kira 1.18 kali bahagian pot berdasarkan equity mentahnya walaupun OOP.** EQR, atau realisasi equity, lebih tinggi daripada 109.6% pada A-K-2. Namun EV sebenar BB **turun**, daripada 16.99 bb kepada **15.46 bb**. EQR yang lebih tinggi tidak bermakna pot ini lebih menguntungkan secara mutlak.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.3% | 41.7% |
| EV (bb) | 15.46 | 7.04 |
| **Realisasi equity** | **117.8%** | 75.1% |

Dalam pot 22.5 bb, equity 58.3% bersamaan ==22.5 × 58.3% = 13.12 bb==. EV 15.46 bb memberikan ==15.46 ÷ 13.12 = 117.8%==.

Jurang equity lebih kecil daripada A-K-2, yang mempunyai 68.9% berbanding 31.1%, tetapi nisbah realisasi meningkat. **Sebahagiannya kerana penyebut mengecil.** EQR dibandingkan dengan bahagian equity sendiri. ⚠ Namun lebihan EV di atas bahagian mentah turut benar-benar meningkat: A-K-2 memberikan ==16.99 − 22.5 × 68.9% = kira-kira 1.49 bb==, manakala board ini ==15.46 − 22.5 × 58.3% = kira-kira 2.34 bb==. Bahagian pot yang diambil BB tetap mengecil: ==16.99 ÷ 22.5 = 75.5%== pada A-K-2 berbanding ==15.46 ÷ 22.5 = 68.7%== di sini. EQR dan bahagian pot mengukur perkara berbeza.

EQR BTN 75.1% juga bukan bukti bebas yang berasingan. Kedua-dua EV berjumlah nilai pot; satu pihak melebihi bahagian equity mentahnya bermakna pihak lain berada di bawahnya. Di sini BB memegang semua overpair dan boleh mengenakan harga sukar kepada tangan pertengahan BTN. Untuk asas siapa bertindak dahulu dan kelebihan maklumat, baca [urutan tindakan dan posisi](/ms/blog/holdem-game-order).

:::note[Semua EQR dalam siri ini dikekalkan seperti paparan solver. Membahagikan equity dan EV yang sudah dibundarkan boleh menghasilkan perbezaan pada tempat perpuluhan; itu kesan pembundaran.]:::

## Apakah pelajaran yang boleh digunakan di meja?

Semua yang berikut mengandaikan **heads-up, pot 3-bet, SPR 4**. Tambah cold-caller atau ubah stack dan kekerapan hampir seluruh range tidak boleh dipindahkan terus.

- **Baca board dan range sebelum memilih saiz daripada tangan sendiri.** Bet besar hanya ketika kuat dan kecil ketika lemah menjadikan strategi mudah dibaca. Di sini satu saiz besar menampung 98.4%.
- **Periksa saiz besar apabila pot 3-bet menawarkan kedua-dua straight dan flush draw.** Harga kecil sekitar 19.8% dilepasi semua empat kombo BTN yang mempunyai flush draw dalam range ini. Namun draw bukan satu-satunya sebab: [board 8-5-2](/ms/blog/3bet-pot-low-board), dengan 78.3% “Tiada draw”, juga memilih saiz besar 97.8% kerana **range terpolarisasi**. Baca kepadatan draw dan bentuk range bersama. Pot single-raised dengan tekstur serupa pula mempunyai peranan berbeza, seperti nota terdahulu.
- **AK tanpa pair tidak semestinya check.** Pada QT7 ia gutshot ke Broadway, tetapi itu bukan sebab ia bet: pada board 8-5-2 tadi, yang tiada kad bersambung dengan AK, AK masih memilih saiz besar 95.9–97.9% (97.8–99.9% di sini). Jadi ada atau tiada draw sahaja tidak menentukan tindakan AK. Baca bentuk seluruh range pada board tersebut.
- **★ Keputusan flop belum menjadi rancangan lengkap.** Selepas 14.9 bb di-call, SPR turn 1.4 bermakna bet seterusnya boleh melibatkan stack. Heart di turn mempunyai dua sisi: empat combo draw BTN lengkap, tetapi empat kombo heart BB juga lengkap dan semuanya mengandungi A♥. Jika anda memegang A♥, dua daripada empat kombo BTN itu tidak boleh wujud. Bagi A-high tanpa heart, jack yang dikejar masih ada, tetapi J♥ kini boleh melengkapkan flush lawan. Satu saiz flop tidak menjawab semua keadaan ini.
- **★ Rancang tindak balas terhadap raise.** Bet hampir seluruh range bererti tangan lemah juga akan berdepan raise. Pada SPR 4, set dan overpair ialah calon untuk meneruskan; **A-high tanpa dua heart, 24 daripada 28 kombo**, ialah calon fold paling jelas. Empat tangan heart ialah calon meneruskan, khususnya A♥K♥ dan A♥J♥ dengan gutshot tambahan. Top pair memerlukan keputusan tersendiri. Ini tafsiran range dan SPR, bukan sempadan jam/call/fold yang dikira oleh contoh flop sahaja.
- **★ Sebagai BTN, tentukan had middle pair lebih awal.** Underpair meliputi 36.1% range call. MDF 60.2% ialah rujukan berasaskan pure bluff tanpa equity, **bukan siling pertahanan atau kuota call**. Range BB sudah mempunyai 45.1% set, overpair dan top pair (8.2, 16.4, 20.5). Pertahanan optimum sebenar tidak dikira pada node ini. Bet besar kedua di turn boleh menyingkirkan banyak pair tersebut; rancangkan kemungkinan itu sebelum call flop. Node turn tiada, jadi ini pertimbangan strategi, bukan kekerapan terukur.

:::readnext[Baca seterusnya]
/ms/blog/3bet-pot-cbet | BB Langsung Tidak Check pada AK2 | /images/gto-3bp-ace-king-oop-ms.webp
/ms/blog/3bet-pot-low-board | Flop Rendah, Bet Besar 97.8% | /images/gto-3bp-low-oop-ms.webp
:::

## Bagaimanakah anda menyemak sendiri dalam solver poker?

Buka [solver GTO percuma](/ms/solver), kemudian pilih **Spot belajar → Board dinamik two-tone → ⚡ Lihat hasil**.

Lihat jalur tindakan dahulu: **Bet 14.9bb (66% pot) · 98.4% · 71.9 kombo**, sementara dua pilihan lain kurang daripada satu peratus. Tukar pilihan **Pemain:** kepada **IP (BTN)** dan perhatikan kategori yang tiada: BTN tidak mempunyai baris **Overpair** atau **Flush draw**. Kategori sifar tidak dilukis; dua ketiadaan ini menerangkan banyak perkara.

Kemudian buka **Trainer GTO** pada sidebar. Ia memilih tangan mengikut wajaran range dan menilai keputusan berdasarkan kerugian EV. Percuma, tanpa pemasangan atau akaun.

Bandingkan dengan A♦K♠2♥ daripada contoh sebelumnya. Board itu rainbow, maka **tiada flush draw bagi mana-mana pemain**, dan seluruh range BB ialah pair atau lebih baik. Di sini baris “Tiada draw” hanya 43.8%. ⚠ Baki 56.2% bukan semuanya draw langsung: 26.0 mata ialah **backdoor**, yang memerlukan dua kad suit yang betul berturut-turut dan lengkap kira-kira 4.2%. Draw langsung berjumlah 30.1%. Namun [flop 8-5-2](/ms/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-ms.webp") mempunyai 78.3% “Tiada draw” dan masih memilih saiz besar 97.8%. Kedua-dua kepadatan draw dan bentuk range perlu dibaca.

## Soalan lazim

**Q. Berapakah saiz bet yang sesuai dalam poker?**

A. Mulakan dengan apa yang board berikan kepada range lawan. Pada QT7 dua heart, straight dan flush draw sama-sama wujud, lalu solver memilih dua pertiga pot 98.4%. Pada AK2 kering, range yang sama memilih satu pertiga 57.8%. Bandingkan harga yang ditawarkan kepada tangan yang masih boleh bertambah baik.

**Q. Mengapa bet besar pada board yang banyak draw?**

A. Ia menaikkan harga untuk meneruskan. Dua pertiga memerlukan kira-kira 28.5%; berdasarkan satu kad, hanya dua daripada 40 kombo draw melepasi harga itu: K♥J♥ dan 9♥8♥, dengan 15 outs dan 31.9%. Combo draw 12 outs hanya 25.5% untuk satu kad — walaupun dengan turn dan river, kebanyakan draw itu masih memegang lebih 28.5%, jadi harga ini mengenakan bayaran kepada mereka, bukan membuat mereka fold. Satu pertiga menurunkan ambang kepada 19.8%, yang dilepasi empat kombo. Ini perbandingan odds satu kad, bukan keputusan EV call lengkap. Range terpolarisasi juga boleh memilih besar tanpa banyak draw; [board kering 8-5-2](/ms/blog/3bet-pot-low-board) mencapai 97.8% untuk saiz besar.

**Q. Apakah geometric bet sizing?**

A. Ia menggunakan pecahan pot yang sama pada setiap street supaya bet terakhir tepat all-in. Pada SPR rendah, ia membantu merancang berapa keputusan berbaki. Pengiraan di atas menunjukkan saiz geometric contoh ini dan mengapa saiz flop yang benar-benar ditawarkan lebih besar daripadanya.

**Q. Patutkah anda menggunakan overbet?**

A. Tree ini hanya menawarkan satu pertiga dan dua pertiga, jadi overbet tidak pernah dibandingkan. Menambah overbet boleh mengubah pembahagian 98.4%, kerana prinsip mengenakan harga kepada draw masih relevan. Arah dan saiz perubahan memerlukan solve baharu; kekerapan ini hanya milik tree ini.

**Q. Bolehkah AK tanpa pair melakukan bet di sini?**

A. Ya. Satu jack melengkapkan A-K-Q-J-T, jadi AK ialah gutshot. Daripada 18 kombo gutshot BB, 15 ialah AK. Fold memenangi pot serta-merta dan call masih meninggalkan outs. Hubungan dengan board, bersama bentuk range, menjelaskan mengapa AK boleh menyertai bet.

**Q. Bagaimana jika lawan call draw tanpa mempedulikan harga?**

A. Fold equity berkurang dan angka keseimbangan ini tidak lagi menggambarkan lawan tersebut. Condongkan strategi kepada value dan kurangkan bluff, sambil mengekalkan harga yang sukar untuk draw. Lawan yang terus membayar harga buruk memberi nilai kepada tangan kuat anda.

**Q. Bolehkah angka ini dipindahkan kepada permainan anda?**

A. Jadikan garis dasar apabila syaratnya sepadan. Range 3-bet, stack, saiz dalam tree dan rake mengubah keputusan; rake tidak dimodelkan di sini. Pengajarannya ialah satu bet besar boleh menguasai board two-tone dalam pot 3-bet pada SPR 4. **Rank board turut penting:** QT7 masih sesuai dengan banyak tangan dalam range 3-bet, dan tidak semua flop yang banyak draw mempunyai sifat itu.
`.trim(),
};

export default POST;
