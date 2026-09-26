import type { Post } from "../posts";

// MS ⑬. EN master + approved N18–N24; docs/ms-gto-source-contract.md.
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Dua Ace, Bet Meningkat ke 80.1%",
  seoTitle: "Dua Ace, Bet 80.1% — Poker GTO Board Berpasangan AA6",
  desc: "Board 663 menghasilkan bet 3.0%, tetapi AA6 mencapai 80.1%. Bandingkan trips, kicker dan seluruh range untuk memahami c-bet SB.",
  tldr: "Selepas SB open dan BB call, flop A♠A♥6♦ menghasilkan bet 80.1%: 79.6% pada satu pertiga pot dan 0.5% pada tiga perempat, dengan check 19.8%. Pada 6♣6♦3♥, bet hanya 3.0%. Perbezaannya ialah rank yang berpasangan dan hubungan seluruh range dengan board. Trips ace berjumlah 88 kombo pada SB berbanding 66 pada BB; AK dan AQ, 16 kombo, langsung tiada dalam range call BB.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-08-21",
  readTime: "10 minit",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-ms.webp",
  imageAlt: "Keputusan solver HoldemMaster pada flop A-A-6, grid SB kebanyakannya oren untuk bet kecil",
  keepImagesInBody: true,
  tags: ["trips poker", "board Ace berpasangan", "strategi AA6", "kekerapan bluff", "c-bet SB", "poker GTO"],
  content: `
Ada nasihat yang mengaitkan board berpasangan dengan check. Pada [board 6-6-3](/ms/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-ms.webp") terdahulu, pemain yang bertindak dahulu memang hanya bet **3.0%**.

Board kali ini juga berpasangan: A♠ A♥ 6♦. Namun SB melakukan bet **80.1%**.

Pot 6 bb, stack efektif 97 bb dan peranan SB opener sama seperti dua contoh sebelumnya. Pada board sebelumnya, [SB yang sama hanya bet 9.6%](/ms/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-ms.webp"). Ini hujung yang bertentangan. Semua angka datang daripada [solver GTO HoldemMaster](/ms/solver); range ialah julat tangan, dan board ialah kad komuniti.

:::stripe
Spot | SB open 3 bb → BB call (blind lawan blind)
Flop | A♠ A♥ 6♦ (berpasangan · flush draw tidak mungkin)
Pot · stack | Pot 6 bb · stack efektif 97 bb · SPR 16.2
Hasil | SB bet **80.1%** — berbanding 3.0% pada board berpasangan 663
:::

> **Jawapan ringkas**
> Pada AA6, tindakan pertama SB ialah **bet 80.1%, check 19.8%**, dengan 79.6% pada satu pertiga pot. Ia jauh berbeza daripada bet 3.0% pada 663. Yang penting ialah **rank siapa yang berpasangan dan bagaimana seluruh range terjejas**. Trips ace berjumlah **88 kombo berbanding 66**. **AK dan AQ, 16 kombo**, langsung tiada dalam range call BB kerana tangan itu melakukan 3-bet sebelum flop dalam tetapan ini.

## Apakah syarat yang menghasilkan angka ini?

★ **Sama seperti dua contoh sebelumnya, kecuali dua saiz bet tersedia.** ⑪ dan ⑫ hanya mempunyai satu pertiga pot; contoh ini turut menawarkan tiga perempat.

| Tetapan | Contoh ini ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥T♦6♠ |
|---|---|---|---|
| Preflop | SB open 3 bb → BB call | sama | sama |
| OOP (bertindak dahulu) | SB — opener | sama | sama |
| Pot · stack efektif | 6 bb · 97 bb | sama | sama |
| SPR | 16.2 | sama | sama |
| **Saiz bet** | **Dua: kira-kira 33% dan 75% pot** | Satu, 33% | Satu, 33% |
| Range SB | 503 kombo | 572 kombo | 538 kombo |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ T♦ 6♠ |
| Rake | Tidak dimodelkan | Tidak dimodelkan | Tidak dimodelkan |
| Tarikh semakan | 2026-08-08 (hasil spot belajar) | 2026-08-08 | 2026-08-08 |

Pot 6 bb ialah ==3 daripada SB + 3 daripada BB==, stack efektif ==100 − 3 = 97 bb==, dan SPR ==97 ÷ 6 = 16.2==. Ketiga-tiga contoh menggunakan range preflop sama. **Bilangan kombo sahaja berubah akibat kad board**: dua ace menyingkirkan banyak kombo yang menggunakan ace, maka 503 ialah bilangan terkecil antara tiga contoh ini.

Paparan menggunakan **big blind**, seperti “Bet 4.5bb (75% pot)” dan “EV (bb)”.

## Berapa kerap SB melakukan bet pada AA6?

**Saiz kecil 79.6%, saiz besar 0.5%, check 19.8%.** Jumlah bet ialah 80.1%, kira-kira 403 daripada 503 kombo.

| Tindakan pertama SB | Kekerapan | Kombo |
|---|---|---|
| Bet 4.5 bb (75% pot) | 0.5% | 2.7 |
| Bet 2 bb (33% pot) | **79.6%** | 400.4 |
| Check | 19.8% | 99.8 |

Angka paparan dibundarkan secara berasingan, jadi jumlah sel tindakan boleh berbeza sedikit daripada jumlah keseluruhan. Jangan mengubah satu sel untuk memaksa jumlahnya tepat.

Berikut kedudukannya dalam siri:

| Spot | Siapa OOP | Kekerapan bet OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1%–1.9% |
| **6♣6♦3♥ berpasangan (⑥)** | BB caller | **3.0%** |
| 6♠5♥2♦ rendah (⑦) | BB caller | 3.2% |
| 7♦6♦5♣ blind lawan blind (⑫) | SB opener | 9.6% |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ bersambung (④) | BB caller | 23.7% |
| K♥T♦6♠ blind lawan blind (⑪) | SB opener | 67.4% |
| **A♠A♥6♦ berpasangan (⑬)** | **SB opener** | **80.1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98–100% |

**Dua board berpasangan berada hampir di hujung bertentangan.** Label “board berpasangan” sahaja tidak menentukan strategi.

## Mengapa dua board berpasangan menghasilkan 3.0% dan 80.1%?

**Bahagian lain dalam range sama penting dengan bilangan trips.** Pada 663, pemain OOP mempunyai lebih banyak trips tetapi tetap bet hanya 3.0%. Itu contoh lawan yang perlu dikekalkan ketika menerangkan AA6.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Bertindak dahulu | BB — caller | **SB — opener** |
| Bahagian trips | BB 5.3% vs BTN 4.0% — **OOP mempunyai lebih banyak** | SB 17.5% vs BB 13.1% — OOP mempunyai lebih banyak |
| Equity OOP | 47.2% | **56.2%** |
| EQR OOP | 83.7% | **104.1%** |
| Kekerapan bet OOP | **3.0%** | **80.1%** |

Pada 663, BB mempertahankan tangan seperti J6s, T6s dan 96s yang tidak dibuka oleh BTN dalam range contoh itu. Maka kombo dengan enam berjumlah 26 (5.3%) berbanding 20 (4.0%). **Namun bet tetap hanya 3.0%.** Semua tangan yang menambah kekuatan melebihi pair board berjumlah **18.4% BB berbanding 20.3% BTN**. BTN masih mendahului keseluruhan kumpulan itu; BB hanya mendahului baris trips. Baki 81.6%, persaingan pair enam bersama high card, juga memihak kepada BTN: A-high 26.3% berbanding 31.9%.

Pada AA6, bahagian range lain turut memihak kepada SB. K-high ialah 22.3% berbanding 18.2%; tangan yang terlepas board ialah 39.8% berbanding 51.5%, **11.7 mata lebih banyak pada lawan**.

:::pull[Bilangan trips sahaja belum menentukan kekerapan bet. Bandingkan kekuatan seluruh range dengan range lawan.]:::

Ace lebih banyak pada aggressor preflop: 95 kombo berbanding 72, **kira-kira 1.3 kali**. Apabila ace muncul dua kali, bahagian teratas dan bahagian lain dalam range condong ke arah sama. Itulah keadaan yang membawa kekerapan bet kepada sekitar 80%.

## Siapakah yang mempunyai lebih banyak trips?

**SB mempunyai 88 kombo (17.5%), BB 66 (13.1%).** Tetapi tangan yang tiada pada BB lebih penting daripada beza bilangan sahaja. Aplikasi menggunakan label “Set/Trips”; pada board ini baris itu merujuk kepada trips.

![Perbandingan kelas tangan SB dan BB pada flop A-A-6](/images/gto-sb-paired-ace-ranges-ms.webp "AA6 blind lawan blind · Tiada made hand ialah 39.8% berbanding 51.5%")

| Kategori | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Quads | **0.2% (1 kombo)** | 0.0% (0 kombo) |
| Full House | 1.8% (9 kombo) | 1.8% (9 kombo) |
| Set/Trips | **17.5% (88 kombo)** | 13.1% (66 kombo) |
| Two Pair | **18.5% (93 kombo)** | 15.4% (78 kombo) |
| King-High | **22.3% (112 kombo)** | 18.2% (92 kombo) |
| Tiada made hand | 39.8% (200 kombo) | **51.5% (260 kombo)** |

Tiga butiran utama:

- **Trips BB tidak mempunyai AK atau AQ.** Tangan itu melakukan 3-bet terhadap open SB 3 bb, bukannya call. Trips tinggi yang hanya dimiliki oleh SB ialah ==8 kombo AK + 8 AQ + 6 AJo = 22 kombo==. Apabila kedua-duanya mempunyai trips, kicker tinggi ini memberi kelebihan kepada SB.
- **Quads hanya berada pada SB.** A♠ dan A♥ di board meninggalkan A♦ dan A♣; AA ialah **tepat satu kombo**. BB memindahkan AA kepada 3-bet lalu mempunyai sifar kombo.
- **Lebih separuh range BB berada dalam “Tiada made hand”.** 260 kombo, atau 51.5%, terlepas board. Ini bahagian yang boleh menjadi sasaran bluff, **bukan kadar fold yang dikira**. Respons selepas bet tidak tersedia dalam contoh ini.

Full house sahaja benar-benar seimbang: kedua-duanya mempunyai ==3 kombo 66 + 6 kombo A6 = 9==. Selain baris itu, kelas lebih tinggi dan K-high lebih banyak pada SB, sementara hanya bahagian bawah yang terlepas board lebih besar sebanyak 11.7 mata di pihak BB.

Equity menunjukkan hasil keseluruhan.

| Metrik | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56.2%** | 43.8% |
| EV (bb) | 3.51 | 2.49 |
| **EQR (realisasi equity)** | **104.1%** | 94.8% |

Pot 6 bb memberikan bahagian equity mentah SB ==6 × 56.2% = 3.372 bb==, berbanding EV 3.51 bb: ==3.51 ÷ 3.372 = 104.1%==. Jumlah EV ialah ==3.51 + 2.49 = 6.0 bb==, tepat nilai pot.

**EQR melepasi 100% walaupun OOP.** Ia **tertinggi antara tiga contoh blind lawan blind**: ⑪ 103.1%, ⑫ 85.3%, dan contoh ini **104.1%**. Mengikut urutan siri, ini contoh blind lawan blind kedua yang melepasi 100%, bukan tempat kedua dalam ranking EQR. Pot 3-bet juga melepasi 100% ketika OOP, pada 106.9%–117.8%, dengan kelebihan yang dibentuk melalui 3-bet.

## Mengapa saiz besar hampir tidak digunakan?

**Kelebihan SB tersebar merentasi banyak kelas, bukannya tertumpu pada dua hujung range.** Bet tiga perempat pot hanya mendapat 0.5%, atau 2.7 kombo. Secara praktikal saiz kecil menguasai strategi bet.

Bandingkan dengan [board rendah 852 dalam pot 3-bet](/ms/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-ms.webp"). BB memilih dua pertiga pot 97.8% kerana rangenya hampir terbahagi kepada **overpair atau A-high**, bentuk terpolarisasi yang menyokong saiz besar.

Di sini range SB lebih **berterusan**: trips 17.5%, two pair 18.5%, K-high 22.3% dan tangan terlepas 39.8%. Dengan bentuk ini, saiz kecil boleh digunakan oleh banyak tangan. Bahagian terlepas BB sebanyak 51.5% menyediakan calon sasaran bluff, tetapi bukan janji bahawa semuanya fold. Apabila di-call, bet flop kecil **tidak serta-merta mempertaruhkan keseluruhan baki 97 bb**. Raise serta street kemudian tetap boleh membesarkan risiko.

:::note[⚠ Dua saiz yang dibandingkan ialah 33% dan 75%. Jika satu perlima atau satu perempat pot ditambah, sebahagian 79.6% boleh berpindah ke sana. Kesimpulannya ialah “saiz kecil antara pilihan yang ditawarkan”, bukan “33% sentiasa tepat”.]:::

## Tangan manakah yang membentuk check 19.8%?

**Check ialah campuran daripada pelbagai kelas, bukan satu kelas penuh.** Pemeriksaan langsung pada **2026-08-21** menunjukkan pocket pair check pada **KK 72.4%, QQ 66.2%, JJ 42.0% dan TT 21.6%**. KK dan QQ condong kepada check, tetapi **TT sudah bet sekitar 78%**. Ini pemerhatian sejarah, bukan solve baharu ketika penerbitan MS.

Komposisi 99.8 kombo check juga bukan sekadar “tangan sederhana”: **tangan terlepas ialah kumpulan terbesar, kira-kira 44%**, diikuti K-high sekitar 27%, two pair sekitar 17% dan trips sekitar 11%. Hijau paling tebal berada pada **Broadway offsuit** seperti Q9o, QJo, QTo dan J9o. Sel dengan ace serta 66 kebanyakannya oren.

Sebabnya berkait dengan **siapa yang sanggup call**. KK membentuk two pair bersama ace di board, tetapi sukar mendapatkan value besar. ⚠ Jangan menukarnya kepada “tangan lemah semuanya fold, hanya trips lebih baik call”. **Jadual artikel ini sendiri menafikan kesimpulan itu.** BB mempunyai 78 kombo two pair: tujuh rank pocket pair (42) dan 6x (36), semuanya di bawah KK. Tambah 92 kombo K-high, terdapat **170 kombo (33.7%)** lebih lemah, dan tidak semuanya semestinya fold terhadap satu pertiga pot. Trips serta full house yang mengalahkan KK hanya **75 kombo (14.9%)**, lebih sedikit.

Value menjadi nipis kerana bahagian luas yang masih boleh call itu tidak semestinya mengikuti KK ke dalam pot besar. Semakin besar bet, semakin tertumpu range yang meneruskan pada trips. ⚠ **Ace tambahan pada turn atau river tidak membolehkan 170 kombo itu mengatasi KK.** Pada board AAA6, KK menjadi *aces full of kings*, iaitu A-A-A-K-K. Tangan Ax lawan pula boleh menjadi quads, tetapi Ax bukan sebahagian daripada 170 kombo yang dibandingkan tadi.

Check memberi ruang kepada 260 kombo terlepas BB untuk melakukan bluff, lalu call boleh mendapat nilai — **dengan andaian lawan benar-benar mencampurkan bluff**. ⚠ Kekerapan bluff BB selepas check tidak dikira di sini. Contoh berhenti pada tindakan pertama flop, maka penjelasan bluff-catch ialah tafsiran komposisi range.

**Sebahagian besar trips menyertai bet untuk mendapatkan value.** Namun jangan mengatakan semuanya bet setiap kali. Pemeriksaan 2026-08-21 terhadap **94 kombo dengan satu ace** — 88 trips serta 6 A6 yang menjadi full house — menunjukkan check **0.1% hingga 26.0%, purata 12.3%**, dan **tiada satu kombo pun check tepat 0%**. Campuran lebih jelas pada ace dengan kad rendah: A♣8♣ 19.4%, A♣7♣ 20.9%, serta A5o hingga A2o dengan purata 20.1%.

## Apakah pelajaran yang boleh digunakan di meja?

- **Jangan jadikan “board berpasangan bermakna check” sebagai peraturan.** Bet ialah 3.0% pada 663 dan 80.1% pada AA6. Bilangan trips juga bukan jawapan tunggal: BB memegang lebih banyak enam pada 663 (5.3% berbanding 4.0%) tetapi tetap bet 3.0%. Bandingkan **seluruh range**. Di sini bahagian teratas dan bahagian lain sehaluan, lalu bet mencapai sekitar 80%.
- **Dua ace di board tidak menjadikan ace anda tidak bernilai.** Jika lawan melakukan 3-bet dengan AK dan AQ, pertarungan kicker memihak kepada range opener. Namun andaian itu penting: jika lawan hanya call AK/AQ, kelebihan tersebut berubah. Trips dengan kicker lemah masih boleh bet untuk value, tetapi jangan automatik menyertai perang raise besar.
- **Range berterusan boleh menggunakan saiz kecil pada kekerapan tinggi.** Saiz besar berguna untuk [range yang terbahagi kepada kuat dan lemah](/ms/blog/3bet-pot-low-board). Pada [board yang kaya dengan draw](/ms/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-ms.webp"), alasan memilih besar pula banyak berkait dengan harga call. **80.1% di sini ialah pengiraan heads-up**. Jika lebih daripada seorang lawan masih bermain, kurangkan bet daripada tangan terlepas dan condongkan kepada value seperti trips serta two pair yang sesuai.
- **Jangan bet KK dan QQ semata-mata kerana ia kelihatan kuat.** Kedua-duanya sukar mendapatkan **value besar** daripada tangan lebih lemah, bukannya mustahil mendapatkan sebarang call. Check untuk menangkap bluff boleh berguna. ⚠ Ini **tafsiran komposisi range**, bukan hasil node selepas check dalam contoh ini. ⑦ mempunyai solve berasingan, tetapi contoh AA6 ini hanya tindakan pertama flop. Tafsiran bluff-catch juga mengandaikan lawan mempunyai bluff; terhadap pemain yang hampir tidak pernah bluff, jangan berkeras call hanya kerana memegang pocket pair tinggi.

:::readnext[Baca seterusnya]
/ms/blog/blind-battle-connected-board | Board Berubah, Bet Turun ke 9.6% | /images/gto-sb-connected-oop-ms.webp
/ms/blog/a-high-board-cbet | Top Pair, Mengapa Masih Check? | /images/gto-srp-dry-ace-oop-ms.webp
:::

## Bagaimanakah anda menyemak sendiri?

Buka [solver GTO](/ms/solver), kemudian **Spot belajar → Board dengan dua Ace → ⚡ Lihat hasil**. Untuk berlatih memilih tindakan, buka [Trainer GTO](/ms/solver) daripada sidebar. Ia memberikan tangan rawak daripada range spot tersebut. Selepas memilih tindakan, ia menunjukkan kekerapan campuran dan **kerugian EV (bb)**. Secara lalai, rekod disimpan pada peranti ini; jika anda log masuk dengan akaun HoldemMaster, rekod latihan Spot belajar dan Cabaran Harian disegerakkan antara peranti. Namun, masalah daripada solve tersuai serta rekod latihannya tetap pada peranti walaupun log masuk.

**Bandingkan dengan board berpasangan 663.** Kedua-duanya berpasangan, tetapi matriks mempunyai warna hampir bertentangan. Selepas meneliti contoh-contoh ini, soalan yang paling berguna ialah **range siapa yang paling sesuai dengan board**, bukan label board sahaja. Percuma, tanpa pemasangan atau akaun.

**Q. Apakah trips dalam poker, dan apakah bezanya dengan set?**

A. Trips menggunakan satu kad tangan bersama dua kad rank sama di board. Pada AA6, kebanyakan tangan dengan satu ace menjadi trips, **kecuali A6 yang menjadi full house**. SB mempunyai 88 kombo (17.5%), BB 66 (13.1%). Set pula menggunakan pocket pair dengan satu kad rank sama di board. Walaupun 66 membentuk tiga enam di sini, pair ace di board menjadikan tangan terbaik akhirnya **full house**.

**Q. Jika tangan yang terlepas board turut bet, bukankah itu bluff?**

A. Ya, tetapi dalam GTO ia perlu dibaca sebagai sebahagian campuran value dan bluff. Solver mengira **kekerapan tindakan setiap tangan**, kemudian menggunakan purata berwajaran untuk menghasilkan kekerapan seluruh range. Sebanyak 51.5% range lawan terlepas board, tetapi itu bukan kadar fold yang diukur. Bet boleh mendapat keuntungan daripada fold, sementara 88 kombo trips SB mendapatkan value apabila di-call. Menggunakan saiz sama untuk value dan bluff menyukarkan lawan membezakannya.

**Q. Pada AA6, berapa besar bahagian range lawan yang memegang ace?**

A. Dalam contoh ini, **72 daripada 505 kombo BB (14.3%)**: 66 trips dan 6 A6 yang menjadi full house. A♠ dan A♥ sudah di board, hanya dua ace tinggal. SB pula mempunyai **95 kombo (18.9%)**: 88 trips, 6 A6 dan 1 AA. Jawapan berbeza kerana range preflop kedua-dua pihak berbeza.

**Q. Apakah kesimpulan yang merentasi siri ini?**

A. Bertindak dahulu memang kelemahan, tetapi tidak menentukan tindakan sendirian. BB caller pada ①–⑦ bet 0.1%–23.7%; BB 3-bettor dalam pot 3-bet sekitar 98%–100%; SB opener pula berubah antara 9.6% hingga 80.1% mengikut board. **Hubungan antara range dengan board** menentukan cara posisi itu dimainkan. Anda boleh menyemak setiap contoh melalui spot belajar dalam [solver GTO HoldemMaster](/ms/solver).
`.trim(),
};

export default POST;
