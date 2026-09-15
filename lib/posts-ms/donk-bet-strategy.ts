import type { Post } from "../posts";

// MS GTO ④ · EN master + source contract N03: more completed straights, not exclusive JT nuts; sets and two pair tie.
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "Bila Donk Bet Masuk Akal pada 987?",
  seoTitle: "Donk Bet Boleh Betul — Strategi Poker GTO Board 987",
  desc: "Donk bet bukan semestinya silap. Pada 987, 23.7% range BB lead. Fahami straight, saiz kecil dan risiko overpair dalam 9 minit.",
  tldr: "Pada 9♥8♥7♣ selepas BTN open dan BB call, BB check 76.2% serta lead 23.7%. Inilah contoh pertama siri ini yang mempunyai lead sebagai bahagian strategi yang ketara. Kelebihan range belum berpindah: equity masih 48.5% berbanding 51.5% memihak BTN. Yang berubah ialah jurang equity dan taburan tangan kuat, dengan lebih banyak straight siap pada BB.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 minit",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-ms.webp",
  imageAlt: "Hasil solver GTO HoldemMaster pada 9♥8♥7♣, grid big blind mencampurkan check hijau dengan bet jingga dan merah jambu",
  keepImagesInBody: true,
  tags: ["donk bet poker", "board bersambung", "987 poker", "lead bet", "saiz bet", "solver GTO", "strategi c-bet"],
  content: `
Antara nasihat awal yang sering didengar dalam poker ialah **check kepada raiser**. Pemain yang raise preflop biasanya diberi peluang untuk membuat bet pertama pada flop.

Tiga contoh sebelumnya sangat hampir dengan panduan itu. Pada flop [A-high](/ms/blog/a-high-board-cbet), [K-high](/ms/blog/k-high-board-cbet) dan [Broadway](/ms/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-ms.webp"), BB lead kurang daripada 2% setiap kali. Pada K-8-3 dan Q-J-T, bahagiannya 0.2% atau kurang, hampir sifar.

Pada **9♥ 8♥ 7♣**, angka itu menjadi **23.7%**. Di sinilah panduan check kepada raiser memerlukan pengecualian.

Bet flop yang dibuat oleh pemain yang hanya call preflop, sebelum raiser bertindak, dipanggil **donk bet** atau **lead**. Namanya berasal daripada "donkey", mencerminkan tanggapan lama bahawa ia permainan lemah. Namun, solver menggunakan lead pada board tertentu, dan ini contoh paling jelas dalam kumpulan pembelajaran tersebut.

Semua angka di sini berasal daripada [solver GTO percuma](/ms/solver) HoldemMaster, dibaca daripada hasil contoh pembelajaran pada 2026-08-19.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | 9♥ 8♥ 7♣ (two-tone — dua heart)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb
Hasil | BB lead 23.7% — contoh pertama siri ini dengan bahagian lead yang ketara
:::

> **Jawapan ringkas**
> Pada 9♥8♥7♣, BB check **76.2%** dan lead **23.7%** merentas dua saiz, berdasarkan nilai dibundarkan. Namun, **kelebihan range belum berpindah kepada BB**: equity masih 48.5% berbanding 51.5% memihak BTN. Jurangnya kini lebih kecil. BB mempunyai lebih banyak straight siap, sedangkan kelebihan BTN tertumpu pada overpair yang mudah terancam pada board ini.

## Apakah tetapan yang menghasilkan angka ini?

BTN open ke 2.5 bb, BB call dan pemain lain fold. Dua pemain memasuki flop dengan pot 5.5 bb serta baki stack efektif 97.5 bb. Range (julat tangan) menganggarkan permainan dalam talian standard 100 bb. Board (kad komuniti) ialah 9♥ 8♥ 7♣, dengan dua heart. Dua saiz bet disediakan, kira-kira satu pertiga dan tiga perempat pot. Rake tidak dimodelkan; angka asal dibaca pada 2026-08-19.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | 9♥ 8♥ 7♣, two-tone (dua heart) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb |
| Saiz bet | Kira-kira 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-19, hasil contoh pembelajaran |

## Berapa kerap BB membuat donk bet pada 9-8-7?

**23.7% daripada seluruh range BB**, dengan lebih daripada dua pertiga bahagian lead itu menggunakan saiz kecil.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **76.2%** | 352.0 |
| Bet 1.8 bb (33% pot) | **16.8%** | 77.8 |
| Bet 4.1 bb (75% pot) | 6.9% | 32.2 |

Perubahannya jelas apabila empat flop dibandingkan:

| Flop | BB lead |
|---|---|
| A-7-2 (kering) | 1.9% |
| K-8-3 (kering) | 0.2% |
| Q-J-T (bersambung, two-tone) | 0.1% |
| **9-8-7 (tengah bersambung, two-tone)** | **23.7%** |

**Daripada kurang 2% kepada 23.7%, peningkatan lebih sepuluh kali ganda.** Lead kini bahagian penting dalam strategi, bukan tindakan kecil yang boleh diabaikan dalam pemudahan praktikal.

## Apakah yang berubah berbanding tiga flop sebelumnya?

**Kali ini BB mempunyai lebih banyak tangan dalam kategori terkuat pada board, iaitu straight siap.** Bahagiannya 5.2% berbanding 4.2%.

Tiga gabungan rank melengkapkan straight: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)== dan ==65 (9-8-7-6-5)==. Namun, range preflop menentukan kombo mana yang benar-benar sampai ke flop.

| Tangan straight | BB (range call) | BTN (range open) |
|---|---|---|
| JT | ✅ suited dan offsuit (16 kombo) | ✅ suited dan offsuit (16 kombo) |
| T6 | ✅ **T6s (4 kombo)** | ❌ di luar range open |
| 65 | ✅ 65s (4 kombo) | ✅ 65s (4 kombo) |
| **Jumlah** | **24 kombo = 5.2%** | **20 kombo = 4.2%** |

**Seluruh perbezaan datang daripada T6s, empat kombo.** Range BTN dalam contoh ini bermula pada T7s, jadi T6 suited tiada. BB pula mempertahankannya dengan harga lebih murah kerana 1 bb daripada jumlah 2.5 bb sudah dibayar sebagai blind. Satu petak range itu menentukan siapa mempunyai lebih banyak **straight siap**. Ia tidak menentukan siapa memonopoli nuts: tangan terbaik ialah JT, dan kedua-dua pemain mempunyai semua 16 kombonya.

Sebaliknya, overpair jauh lebih banyak pada BTN.

| Overpair (pocket pair lebih tinggi daripada 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 kombo | ✅ 6 kombo |
| JJ · QQ · KK · AA | ❌ semuanya 3-bet preflop | ✅ 24 kombo |
| **Jumlah** | **6 kombo = 1.3%** | **30 kombo = 6.4%** |

## Adakah board 987 kini memihak BB secara keseluruhan?

**Tidak. Equity masih 48.5% berbanding 51.5% memihak BTN.** Kehadiran lead tidak membuktikan kelebihan range keseluruhan sudah berpindah. Yang berubah ialah taburan kekuatan dalam range dan cara nilai itu dapat dimainkan.

![Carta komposisi kategori tangan BB dan BTN pada board 9♥8♥7♣, membandingkan straight BB dengan overpair BTN](/images/gto-srp-middle-connected-ranges-ms.webp "9♥8♥7♣ · BB mempunyai lebih banyak straight, BTN lebih banyak overpair dan ace-high")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Straight | **5.2%** | 4.2% |
| Set/Trips (set pada board ini) | 1.9% | 1.9% |
| Two Pair | 2.8% | 2.8% |
| Overpair | 1.3% | **6.4%** |
| Top Pair (9) | **13.6%** | 12.7% |
| Second Pair (8) | **8.4%** | 7.6% |
| Pair lemah (pair ketiga atau lebih rendah) | **6.5%** | 6.4% |
| Underpair | **6.5%** | 6.4% |
| Ace-High | 24.2% | **30.5%** |
| King-High | **13.9%** | 11.9% |
| Tiada made hand | **15.6%** | 9.3% |

Jumlah lajur ialah 99.9 dan 100.1 kerana pembundaran.

**Hanya dua baris mempunyai bahagian lebih besar pada BTN**: overpair, 6.4% berbanding 1.3%, dan ace-high, 30.5% berbanding 24.2%. **Set sama pada 1.9%, dan two pair sama pada 2.8%.** Baris lain mempunyai bahagian lebih besar pada BB. Bahagian kategori lebih besar tidak semestinya bermakna tangan lebih kuat; contohnya Tiada made hand juga lebih banyak pada BB.

Komposisi draw perlu dibaca bersama-sama:

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | **4.5%** | 3.6% |
| Flush draw | **3.2%** | 2.3% |
| OESD (open-ended straight draw) | **26.2%** | 23.7% |
| Gutshot | **21.6%** | 20.6% |
| Backdoor FD | 14.1% | **17.6%** |
| Tiada draw | 30.3% | **32.2%** |

**Jika mengira draw yang boleh lengkap dengan satu kad sahaja, tanpa backdoor, BB mempunyai 55.5% berbanding 50.2% pada BTN.** Jadi BB bukan hanya mempunyai kelebihan jumlah straight siap, tetapi juga bahagian draw yang lebih besar.

Realisasi equity masih memihak BTN, cuma jurangnya lebih kecil berbanding semua contoh sebelumnya.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.5% | 51.5% |
| EV (bb) | 2.48 | 3.02 |
| **Realisasi equity (EQR)** | **93.2%** | **106.4%** |

Selepas 84.0%, 80.7% dan 77.9% pada tiga flop awal, EQR BB **meningkat semula kepada 93.2%**. Antara tujuh contoh single-raised pot, inilah nilai BB yang paling hampir kepada merealisasikan seluruh bahagian equitynya. Lead muncul dalam keadaan BB lebih mampu mempertahankan nilai tangan ketika bertindak dahulu. EQR membandingkan EV (nilai jangkaan) dengan nilai pot berdasarkan equity; ia bukan bahagian pot yang dimenangi secara langsung.

Dua perubahan membantu menjelaskannya.

**Pertama, jurang equity mengecil.** Perbezaan 3.0 mata peratusan ialah paling kecil antara empat flop ini. Pada A-7-2 jurangnya 9.8 mata peratusan, pada Q-J-T 6.6.

**Kedua, kelebihan BTN berada pada tangan yang lebih mudah terancam.** Dua kategori yang lebih banyak pada BTN ialah overpair 6.4% dan ace-high 30.5%. Ace-high belum mempunyai pair, walaupun sebahagiannya mempunyai draw. BB juga mempunyai banyak draw, jadi BTN tidak memperoleh kelebihan unik daripada kumpulan itu. Overpair pula terdedah kepada banyak kad turn, seperti yang dijelaskan selepas ini. Kelebihan penting BB datang daripada lebih banyak tangan yang **sudah menjadi straight**.

Lead menjadi munasabah apabila **taburan tangan kuat menyokongnya dan lawan tidak boleh c-bet dengan selesa**. Kedua-dua keadaan itu relevan di sini: BB mempunyai lebih banyak straight siap, sementara banyak ace-high serta overpair yang rentan menyukarkan BTN menekan seluruh range. Ini bukan dakwaan BB mempunyai lebih banyak JT nuts; jumlah JT tetap sama pada kedua-dua pihak.

## Mengapa overpair BTN mudah terancam pada 987?

**Hampir separuh kad turn yang belum dilihat boleh membuat overpair lebih sukar dimainkan.** Itu ukuran kad yang mengubah tekstur, bukan kebarangkalian bahawa overpair pasti kalah.

Anggap anda memegang QQ. Tangan itu masih kuat sekarang. Daripada 47 kad yang belum dilihat:

- **T, J, 6 dan 5: 16 kad.** Setiap rank itu membolehkan satu kad tertentu dalam tangan lawan melengkapkan straight. Contohnya, jack menghasilkan board J-9-8-7; **pemain yang memegang ten sudah mempunyai J-T-9-8-7**.
- **Heart lain yang belum dikira: 7 kad.** Kad ini melengkapkan flush untuk lawan yang memegang dua heart.

Jumlahnya **23 daripada 47 kad, kira-kira 49%**. ⚠ Ini untuk QQ tanpa heart. Jika anda memegang Q♥, satu daripada tujuh heart itu berada dalam tangan sendiri, maka jumlahnya 22 daripada 47, kira-kira 47%. Hampir setiap dua turn, satu daripadanya membawa ancaman baharu. Untuk memahami asas mengira peluang dari pihak pemegang draw, baca [asas peluang draw dan pot odds](/ms/blog/texas-holdem-rules-for-beginners).

Overpair masih boleh **mengenakan harga kepada draw sekarang**, tetapi perlu menilai semula apabila menghadapi raise atau turn buruk. Ia bukan lesen untuk membina pot besar tanpa had. Pot yang perlu dielakkan ialah pot yang terus dibesarkan selepas keadaan menjadi buruk, bukan setiap pot yang dibina pada flop.

## Mengapa lebih dua pertiga lead menggunakan saiz kecil?

**Lead itu mewakili strategi range, bukan satu tangan sahaja.** Daripada jumlah 23.7%, sebanyak 16.8 mata peratusan menggunakan satu pertiga pot dan 6.9 menggunakan tiga perempat pot.

Saiz kecil boleh menempatkan straight, top pair dan draw dalam kumpulan tindakan yang sama. Jika hanya tangan terbaik bet, lawan mudah membaca pembahagiannya: bet bermaksud kuat, check bermaksud lemah. Campuran kategori mengelakkan satu saiz bet daripada mendedahkan tangan anda dengan terlalu jelas.

Saiz besar masih mempunyai peranan. Jika semua straight hanya menggunakan bet kecil, BTN boleh meneruskan lebih banyak tangan tanpa pernah menghadapi pembinaan pot besar daripada kumpulan itu. **Kewujudan dua saiz memaksa BTN menilai call dan raise dengan lebih teliti**, bukan sekadar menggunakan satu tindak balas mudah.

## Bilakah BTN patut mengurangkan c-bet pada 9-8-7?

**Apabila range sendiri tidak menyokong bet luas pada tekstur ini.** Selepas BB check, BTN mempunyai alasan untuk check back lebih banyak tangan. Jika BB lead, BTN pula sedang menghadapi bet, jadi pilihannya ialah call, raise atau fold, bukannya membuat c-bet. Untuk mengkaji perbezaan tindakan mengikut board, gunakan [solver dan latihan c-bet](/ms/solver).

Komposisi BTN ialah ace-high 30.5%, king-high 11.9% dan Tiada made hand 9.3%, berjumlah **51.7% tanpa pair**. ⚠ **Tiada pair bukan alasan tunggal untuk check.** Kiraan sama bagi BB ialah **53.7%**, lebih banyak sebanyak 2.0 mata peratusan, tetapi BB yang lead 23.7%.

Yang mengehadkan c-bet BTN ialah **kekuatan yang masih tinggal dalam range check BB**. BB check 76.2%; range itu masih membawa straight dan sebahagian daripada kategori top pair 13.6%, maka bet terlalu luas boleh menghadapi check-raise. ⚠ Sebahagian daripada 24 kombo straight memilih lead, jadi **bukan semua 24 kombo itu berada dalam range check**. Kekerapan check-raise sebenar juga tidak tersedia dalam hasil contoh ini.

Kad tinggi **offsuit** yang tidak mengenai board, seperti AKo dan AQo, ialah calon check back kerana masih bernilai showdown tetapi sukar meneruskan terhadap raise. Versi suited boleh berbeza sama sekali: A♥K♥ dan A♥Q♥ ialah nut flush draw di sini, lalu mempunyai alasan untuk bet.

:::note[Contoh pembelajaran hanya menyediakan tindakan pertama BB pada flop. Perubahan tepat kekerapan c-bet BTN selepas check tidak dipaparkan pada skrin ini. Pilih "Kira sendiri spot ini" dan jalankan tree untuk menyemaknya.]:::

## Apakah yang berubah dalam keputusan anda di meja?

- **Lead boleh muncul pada board tengah bersambung selepas open luas dari posisi lewat.** Contoh monotone berikutnya juga mempunyai lead sekitar 11%, sedangkan flop A-high dan K-high kering hampir sifar. ⚠ Board tengah bersambung yang dikira di sini ialah 9-8-7; namanya sahaja tidak menjamin lead. Yang penting ialah **kandungan tangan kuat dalam kedua-dua range**. [Flop 6-5-2](/ms/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-ms.webp") juga pot single-raise BTN lawan BB, tetapi BB lead hanya **3.2%**. Hanya 4-3 melengkapkan straight pada flop itu, dan kedua-dua range tiada tangan tersebut. Board rendah sahaja tidak cukup.
- **BB masih check kira-kira tiga perempat masa.** Ketika lead, saiz kecil boleh mencampurkan straight, top pair dan draw supaya tindakan itu tidak hanya mendedahkan tangan terbaik. Namun, **jumlah lead ialah 23.7%, dengan 16.8 mata peratusan menggunakan saiz kecil**. Jika nasihat itu bertukar menjadi "lead setiap draw", bahagiannya boleh menjadi separuh range dan membalikkan strategi asal. Baki 76.2% memilih check.
- **Di BTN, elakkan c-bet automatik pada tekstur ini.** Lebih separuh range tiada pair dan banyak overpair memerlukan kawalan saiz pot. Tetap nilai tangan, draw serta tindakan BB secara berasingan.
- **Jika lawan terlalu kerap c-bet, check boleh lebih bernilai daripada lead.** Straight dan top pair yang sesuai boleh dipertimbangkan untuk check-raise, bukan sekadar check-call. Membiarkan lawan membina pot dahulu memberi peluang memperoleh value, asalkan tangan anda sesuai untuk tindakan susulan itu.
- **Sebaliknya, jika lawan kerap check back board basah, lead boleh lebih bernilai daripada angka model.** Dengan tangan yang patut memperoleh value, check mungkin melepaskan peluang mengenakan bet pada flop.

:::readnext[Baca seterusnya]
/ms/blog/broadway-board-strategy | Banyak Draw, Mengapa Check 99.9%? | /images/gto-srp-broadway-oop-ms.webp
/ms/blog/k-high-board-cbet | BB Check 99.8% pada Flop K83 | /images/gto-srp-dry-king-oop-ms.webp
:::

## Bagaimanakah anda menyemak hasil ini sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian **Spot belajar → Board tengah bersambung, two-tone → [⚡ Lihat hasil]**.

Cara paling berguna ialah **membandingkannya dengan board kering**. Buka **Board kering K-high** dahulu dan lihat grid yang hampir seluruhnya hijau. Kemudian kembali ke 9-8-7 dan perhatikan bet jingga serta merah jambu. Pemain dan range preflop sama; perubahan tiga kad mengubah strategi.

Selepas itu, buka **Trainer GTO** di bar sisi. Tangan diberikan mengikut wajaran range sebenar untuk menguji keputusan yang baru dipelajari. Aplikasi menunjukkan kerugian EV pilihan anda dalam big blind, dengan skor berdasarkan kerugian berbanding pot. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Apakah donk bet dalam poker?**

A. Bet flop oleh pemain yang tidak raise preflop, dibuat sebelum preflop aggressor bertindak. Nama itu berasal daripada "donkey", kerana tindakan tersebut lama dianggap lemah. Solver menunjukkan lead boleh sesuai pada tekstur tertentu; dalam contoh ini, bahagiannya 23.7% daripada seluruh strategi BB.

**Q. Mengapa donk bet sering dianggap buruk?**

A. Lead tanpa melihat komposisi range mudah menjadi kesilapan. Dalam tiga contoh awal siri ini, BB lead kurang daripada 2% kerana range raiser lebih sesuai dengan board A-high, K-high dan Broadway tersebut. Pada 9-8-7, BB mempunyai lebih banyak straight siap dan alasan lebih kukuh untuk bet dahulu. Ini pengecualian berdasarkan range, bukan kebenaran untuk lead pada semua board.

**Q. Adakah BB mempunyai kelebihan keseluruhan pada 9-8-7?**

A. Tidak. Equity 48.5% berbanding 51.5% dan EQR 93.2% berbanding 106.4% masih memihak BTN. Lead muncul kerana BB mempunyai lebih banyak straight siap, sementara sebahagian kekuatan BTN tertumpu pada overpair yang mudah terancam. BB tidak menguasai seluruh range, dan JT nuts tetap 16 kombo pada setiap pihak.

**Q. Bilakah lebih baik check daripada lead?**

A. Walaupun pada board ini, BB check 76.2%, sekitar tiga perempat range. Check menjadi asas apabila taburan tangan kuat tidak menyokong lead, seperti dalam contoh A-high dan K-high kering. Check juga boleh memperoleh lebih banyak value apabila lawan terlalu kerap bet. Lead ialah pilihan bersyarat, bukan peningkatan automatik daripada check.

**Q. Apakah rancangan jika lead saya dibalas raise?**

A. Fikirkannya sebelum bet kerana lead satu pertiga pot boleh mengundang raise. Straight dan open-ended draw ialah calon meneruskan, tertakluk pada saiz raise serta kekuatan draw. Top pair sembilan boleh menjadi calon satu call terhadap raise yang sesuai, kemudian dinilai semula pada turn buruk. Tangan tanpa pair atau draw lazimnya tidak patut membayar hanya untuk melihat jawapannya. Ini panduan tafsiran; sempadan call, raise dan fold belum dikira dalam contoh root ini.

**Q. Berapakah saiz lead yang patut digunakan?**

A. Kebanyakannya kecil. Solver meletakkan 16.8 daripada 23.7 mata peratusan lead pada saiz satu pertiga pot, dan 6.9 pada tiga perempat pot. Saiz kecil membolehkan beberapa kategori tangan berkongsi tindakan; saiz besar menambah tekanan supaya lawan tidak boleh meneruskan semuanya dengan murah.

**Q. Adakah kekerapan lead ini kekal pada aras taruhan saya?**

A. Prinsip menilai board dan range masih berguna, tetapi 23.7% tidak boleh dipindahkan tanpa perubahan. Model ini mengandaikan heads-up, 100 bb, BTN open 2.5 bb, range pertahanan standard dan tanpa rake. Open live yang lebih besar mengubah pot serta nisbah stack kepada pot. BB yang mempertahankan lebih luas mungkin membawa lebih banyak straight, tetapi kesan akhirnya terhadap lead perlu dinilai daripada keseluruhan range yang baharu.
`.trim(),
};

export default POST;
