import type { Post } from "../posts";

// MS ⑫. EN master + approved N16/N17/C12; docs/ms-gto-source-contract.md.
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "Board Berubah, Bet Turun ke 9.6%",
  seoTitle: "Bet Turun ke 9.6% — Poker GTO Board Bersambung 765",
  desc: "Pot, stack dan range sama, tetapi tiga kad berubah. Lihat mengapa c-bet SB jatuh daripada 67.4% kepada 9.6% pada flop 765 two-tone.",
  tldr: "Selepas SB open dan BB call, flop 7♦6♦5♣ menghasilkan bet 9.6% dan check 90.4%. Pot, stack, SPR, saiz bet serta kedua-dua range sama seperti KT6; hanya board berubah. Kelebihan kad tinggi opener hilang pada flop rendah bersambung. Equity SB beralih kepada 49.6% berbanding 50.4%, dan EQR OOP turun kepada 85.3%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 minit",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-ms.webp",
  imageAlt: "Keputusan solver HoldemMaster pada flop 7-6-5 two-tone, grid SB hampir seluruhnya hijau untuk check",
  keepImagesInBody: true,
  tags: ["tekstur board poker", "board bersambung", "flop rendah", "overpair", "blind lawan blind", "solver GTO"],
  content: `
Dalam contoh sebelumnya, SB melakukan **bet 67.4% walaupun OOP**. Aggressor preflop juga bertindak dahulu, dan board sesuai dengan range yang dibukanya.

Adakah itu bermakna SB patut sentiasa bet ketika blind lawan blind? Contoh ini menunjukkan batasnya.

**Pot masih 6 bb, stack efektif masih 97 bb, dan satu-satunya saiz bet tetap satu pertiga pot.** Kedua-dua range, atau julat tangan, juga sama. Hanya **tiga kad board** berubah, tetapi bet SB jatuh kepada **9.6%**. Semua angka datang daripada [solver GTO HoldemMaster](/ms/solver).

:::stripe
Spot | SB open 3 bb → BB call (blind lawan blind)
Flop | 7♦ 6♦ 5♣ (bersambung · two-tone)
Pot · stack | Pot 6 bb · stack efektif 97 bb · SPR 16.2
Hasil | SB bet **9.6%** — peranan sama yang bet 67.4% pada board sebelumnya
:::

> **Jawapan ringkas**
> Pada board bersambung 765, tindakan pertama SB ialah **bet 9.6%, check 90.4%**. Pot, stack, SPR, saiz bet dan kedua-dua range **sama** dengan K♥T♦6♠; hanya board berubah, lalu bet jatuh daripada 67.4% kepada 9.6%. Kelebihan opener tertumpu pada kad tinggi. Board 5, 6 dan 7 menghapuskan kelebihan itu: equity SB **beralih kepada 49.6% berbanding 50.4%**, dan realisasi equity turun daripada 103.1% kepada **85.3%**.

## Apakah tetapan yang sama dengan contoh sebelumnya?

**Syarat pengiraan sama; board sahaja berbeza.** Oleh sebab perbandingan itulah tujuan utama contoh ini, kita perlu memastikan apa yang kekal dan apa yang berubah.

| Tetapan | Contoh ini ⑫ | Contoh sebelumnya ⑪ | Sama? |
|---|---|---|---|
| Preflop | SB open 3 bb → BB call | SB open 3 bb → BB call | **sama** |
| OOP (bertindak dahulu) | SB — opener | SB — opener | **sama** |
| Pot | 6 bb | 6 bb | **sama** |
| Stack efektif | 97 bb | 97 bb | **sama** |
| SPR | 16.2 | 16.2 | **sama** |
| Saiz bet | Satu saiz, kira-kira satu pertiga pot | Satu saiz, kira-kira satu pertiga pot | **sama** |
| Range SB | 572 kombo | 538 kombo | range sama (hanya blocker board berbeza) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ T♦ 6♠** | **berbeza** |
| Rake | Tidak dimodelkan | Tidak dimodelkan | — |
| Tarikh semakan | 2026-08-08 (hasil spot belajar) | 2026-08-08 | — |

Pot 6 bb ialah ==3 daripada SB + 3 daripada BB==. Stack efektif ialah ==100 − 3 = 97 bb==, maka SPR ialah ==97 ÷ 6 = 16.2==.

Bilangan kombo 572 berbanding 538 berbeza kerana **kad board menyingkirkan kombo yang menggunakan kad tersebut**. Range preflop tidak diubah. Board K, T dan 6 menyingkirkan lebih banyak kombo daripada range yang kaya dengan kad Broadway.

Paparan menggunakan **big blind**: “Bet 2bb (33% pot)” serta “EV (bb)”.

## Berapa kerap SB melakukan bet pada 765?

**Bet 9.6%, check 90.4%.** Hanya 55 daripada 572 kombo berwajaran menyertai bet; 517 selebihnya check.

| Tindakan pertama SB | Kekerapan | Kombo |
|---|---|---|
| Bet 2 bb (33% pot) | **9.6%** | 55.0 |
| Check | **90.4%** | 517.0 |

Kedudukannya dalam siri dapat dilihat melalui jadual berikut.

| Spot | Siapa OOP | Kekerapan bet OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3.0%–3.2% |
| **7♦6♦5♣ blind lawan blind (⑫)** | **SB opener** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ bersambung (④) | BB caller | 23.7% |
| K♥T♦6♠ blind lawan blind (⑪) | SB opener | 67.4% |
| A♠A♥6♦ blind lawan blind (⑬) | SB opener | 80.1% |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98–100% |

**Peranan sahaja tidak menerangkan keputusan.** Opener yang sama muncul pada 67.4% dan 9.6%. Jika contoh sebelumnya menunjukkan perubahan peranan boleh mengubah tindakan lazim, contoh ini menambah syarat penting: **board boleh menarik balik kelebihan tersebut**.

## Mengapa 67.4% menjadi 9.6% apabila hanya board berubah?

**Kelebihan opener tertumpu pada kad tinggi.** Range open SB kaya dengan ace, king, queen dan kombinasi Broadway. Kad tinggi itu sendiri tidak mendapat pair daripada 5, 6 atau 7, walaupun sesetengah kombinasi kad tinggi bersama kad rendah masih mempunyai draw.

Pada board sebelumnya, **kad tertinggi ialah king**, rank yang lebih banyak berada dalam range opener. Apabila range sama diletakkan pada flop rendah bersambung, kelebihan tersebut beralih.

| | K♥T♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Kad board tertinggi | **K** — memihak kepada opener | **7** — memihak kepada caller |
| Equity SB | **55.3%** | **49.6%** |
| EQR SB | **103.1%** | **85.3%** |
| Kekerapan bet SB | **67.4%** | **9.6%** |

:::pull[Kelebihan range diperoleh sebelum flop, tetapi tiga kad komuniti menentukan bagaimana kelebihan itu dapat digunakan.]:::

Artikel sebelumnya menyebut bahawa check kembali menjadi pilihan apabila board sesuai dengan caller, walaupun SB ialah opener. Inilah contoh tersebut, dengan bet hanya **9.6%**.

## Mengapa board ini memihak kepada BB?

**BB menyimpan beberapa kombinasi tambahan yang bersambung dengan 567 dan tiada pada SB.** Bukan semua tangan yang mengenai board hanya milik BB; kedua-duanya mempunyai straight, set dan two pair. Namun daripada lima kelas teratas berikut, SB hanya mempunyai lebih banyak overpair.

![Perbandingan kelas tangan SB dan BB pada flop 7-6-5 two-tone](/images/gto-sb-connected-ranges-ms.webp "765 blind lawan blind · top pair 6.8% berbanding 11.2% memihak kepada BB")

| Kategori | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Straight | 2.8% (16 kombo) | **3.7% (20 kombo)** |
| Set/Trips | 1.6% (9 kombo) | 1.7% (9 kombo) |
| Two Pair | 1.2% (7 kombo) | **2.4% (13 kombo)** |
| Overpair | **7.3% (42 kombo)** | 2.2% (12 kombo) |
| Top pair (7) | 6.8% (39 kombo) | **11.2% (60 kombo)** |
| Second pair (6) | 5.8% | **6.2%** |
| Pair lemah | 4.2% | **6.2%** |
| Underpair | 3.1% | **3.4%** |
| Ace-High | **25.2%** | 18.7% |
| King-High | **16.1%** | 15.7% |
| Tiada made hand | 25.9% | **28.5%** |

Tiga baris menerangkan perbezaan utama:

- **Top pair: 39 kombo berbanding 60.** BB mempunyai kira-kira satu setengah kali ganda kombo tujuh berbanding SB. Range open SB tidak memasukkan offsuit T7, 97 dan 87, sementara BB yang hanya perlu menambah 2 bb selepas blind 1 bb masih menyimpannya.
- **Straight: 16 kombo berbanding 20.** Kedua-duanya mempunyai 98 yang membentuk 9-8-7-6-5. BB turut mempunyai 43s untuk 7-6-5-4-3; 43s tiada dalam range open SB ini.
- **Two pair: 7 kombo berbanding 13.** Enam kombo 76o tambahan hanya berada pada BB.

Set ialah pengecualian. Kedua-dua pemain memegang 77, 66 dan 55, memberikan **tepat sembilan kombo setiap seorang**. Paparan 1.6% dan 1.7% berbeza kerana range BB lebih kecil, 534 kombo, maka sembilan mengambil bahagian lebih besar.

SB mendahului dalam **overpair: 42 kombo (7.3%)** berbanding 12 (2.2%). Dalam range ini, TT ke atas dipindahkan kepada 3-bet apabila BB menghadapi open SB; range call hanya menyimpan 88 dan 99.

Masalahnya, **overpair tidak menguasai bahagian atas board ini**. Tangan BB yang sudah mengalahkannya berjumlah ==9 set + 13 two pair + 20 straight = 42 kombo==. Sebanyak 60 kombo top pair yang masih kalah boleh meningkat kepada two pair atau trips, dan range BB turut mempunyai lebih banyak draw langsung.

| Draw | SB | BB |
|---|---|---|
| Combo draw | 3.0% | **3.7%** |
| Flush draw | **2.8%** | 2.6% |
| OESD | 21.2% | **24.9%** |
| Gutshot | 19.4% | **23.8%** |
| Backdoor FD | **21.0%** | 15.5% |
| Tiada draw | **32.7%** | 29.4% |

**OESD ialah 21.2% berbanding 24.9%, gutshot 19.4% berbanding 23.8%.** Jika hanya combo, flush, OESD dan gutshot dikira, jumlah draw langsung ialah **46.4% SB dan 55.0% BB**. Jadi bahagian belum siap BB juga lebih kerap mempunyai jalan untuk meningkat.

🪶 Antara kelas draw, **SB mendahului dua baris**: flush draw 2.8% berbanding 2.6%, dan backdoor flush 21.0% berbanding 15.5%. Jurang pertama hanya 0.2 mata, hampir seimbang. Backdoor pula memerlukan dua kad suit sama berturut-turut dan lengkap kira-kira 4.2%. Keenam-enam baris diperlukan untuk jumlah sekitar 100% selepas pembundaran; jangan berhenti pada “Tiada draw” atau membuang baris backdoor.

## Bagaimanakah opener boleh ketinggalan dari segi equity?

**Banyak A-high dan K-high kehilangan nilai relatif apabila lawan mempunyai lebih banyak pair serta draw kuat.** Kedua-duanya membentuk 41.3% range SB, daripada 25.2 + 16.1. Namun kelas high-card tidak bermakna semua kombo tiada draw; contohnya A4 dan A8 mempunyai OESD pada 765.

| Metrik | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49.6% | **50.4%** |
| EV (bb) | 2.54 | **3.46** |
| **EQR (realisasi equity)** | **85.3%** | **114.4%** |

Pot 6 bb memberikan bahagian equity mentah SB ==6 × 49.6% = 2.976 bb==, tetapi EV sebenar hanya 2.54 bb: ==2.54 ÷ 2.976 = 85.3%==. Kedua-dua EV berjumlah ==2.54 + 3.46 = 6.0 bb==, tepat nilai pot.

**Equity hampir seimbang, 49.6 berbanding 50.4, tetapi EQR berjauhan pada 85.3% dan 114.4%.** Kelebihan posisi membantu BB merealisasikan lebih banyak nilai. Pada contoh sebelumnya, kelebihan range SB cukup untuk membawanya kepada 103.1%; di sini kelebihan itu tidak lagi menampung kelemahan OOP.

Susun **enam contoh terpilih** mengikut EQR OOP dan contoh ini berada bersama kelompok caller. Ini petikan, bukan senarai penuh dari bawah: nilai terendah seluruh siri ialah ③ 77.9%, ② 80.7% dan ⑥ 83.7%, semuanya caller.

| Spot | Siapa OOP | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ kering (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ rendah (⑦) | caller | 48.3% | 84.3% |
| **7♦6♦5♣ blind lawan blind (⑫)** | **opener** | **49.6%** | **85.3%** |
| 9♥8♥7♣ bersambung (④) | caller | 48.5% | 93.2% |
| K♥T♦6♠ blind lawan blind (⑪) | opener | 55.3% | 103.1% |
| 8♦5♣2♠ pot 3-bet (⑩) | 3-bettor | 58.6% | 106.9% |

**Opener boleh berada bersama caller dalam susunan ini.** Terdapat **lima** caller dengan EQR lebih rendah: ③ 77.9, ② 80.7, ⑥ 83.7, ① 84.0 dan ⑦ 84.3. Jadi contoh ini bukan hampir paling bawah. Pengajarannya ialah **SB opener yang sama mencapai 103.1% pada ⑪ tetapi 85.3% di sini**. Board mengubah nilai peranan tersebut.

## Tangan manakah yang membentuk bet 9.6%?

**Bet tersebar sebagai campuran nipis merentasi range.** Tiada sel matriks yang sepenuhnya oren; kebanyakannya hanya mempunyai jalur kecil. AA dan KK pun kebanyakannya hijau.

Tiga jenis tangan mempunyai jalur bet yang lebih jelas. Angka berikut ialah purata kombo setiap kelas tangan, berdasarkan pemeriksaan penuh jadual per-tangan pada **2026-08-21**, bukan pengiraan baharu pada tarikh penerbitan ini.

- **88 — bet 39.5%, purata kelas tertinggi dalam range.** Pada 765, 88 ialah **overpair dan OESD serentak**: 8-7-6-5 lengkap dengan empat atau sembilan. Nilai semasa dan draw memberi dua sebab untuk bet. Equity yang dipaparkan ialah 73.4%–75.2%, EQR 133%–138%.
- **A7s dan K7s** — top pair tujuh. Tangan ini menawarkan **value nipis bersama blocker ace atau king**, yang mengurangkan sebahagian high-card lawan. Ia bukan bukti SB mendominasi top pair; bilangannya masih 39 berbanding 60.
- **K4s dan Q4s** — suited four menghasilkan ==4-5-6-7==, OESD yang lengkap dengan tiga atau lapan. Purata kelas Q4s ialah 30.9%, K4s 27.1%. Namun **kombo individu Q♠4♠ dan Q♥4♥ mencapai 54.7%**, tertinggi dalam contoh ini.

Bet 9.6% mencampurkan sedikit value dengan draw terpilih. 88 mendahului purata kelas kerana satu tangan melakukan dua tugas. ⚠ Namun itu bukan kriteria tunggal. **Tiga contoh kombo individu** menunjukkan sebab berbeza: Q♠4♠ pada 54.7% ialah draw, A♣7♣ pada 54.4% ialah value nipis dengan blocker, dan T♣9♣ pada 52.2% ialah gutshot. Ini bukan tiga kombo teratas yang eksklusif, kerana Q♥4♥ turut terikat pada 54.7%. Kombo 88 dengan bet tertinggi, 8♦8♣, lebih rendah pada 47.1%.

**Check 90.4% tidak bermakna menyerah.** Banyak value nipis sukar mendapat keuntungan daripada lead apabila terdedah kepada raise. ⚠ Pot 6 bb, stack 97 bb dan SPR 16.2 tidak menerangkan perubahan kekerapan, kerana ketiga-tiganya **sama** pada [⑪ KT6](/ms/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-ms.webp") dan [AA6](/ms/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-ms.webp"), tempat SB bet 67.4% dan 80.1%. Tiga kad board yang mengubah keputusan.

:::note[⚠ Contoh ini hanya menawarkan satu saiz, satu pertiga pot. Menambah saiz besar boleh mengubah 9.6% itu. Bacalah hasilnya sebagai “dalam syarat ini, sedikit sahaja range yang mahu lead, walaupun kecil”.]:::

## Apakah pelajaran yang boleh digunakan di meja?

- **Jangan jadikan “blind lawan blind, maka bet” sebagai peraturan.** Perbezaan 67.4% dan 9.6% datang daripada board. Walaupun anda opener SB, flop rendah bersambung yang melibatkan 5, 6, 7 atau 8 boleh memindahkan kelebihan kepada caller.
- **Overpair bukan alasan automatik membina pot besar.** SB mempunyai 42 kombo overpair, tiga setengah kali BB, tetapi BB juga mempunyai 42 kombo yang sudah mengalahkan overpair. Itu menuntut berhati-hati sebelum dua atau tiga barrel. Ia tidak melarang satu bet kecil; maksudnya jangan terus menganggap overpair sesuai untuk seluruh stack. ⚠ Jangan pula automatik fold kepada raise. Range BB mempunyai OESD 24.9%, gutshot 23.8% dan combo draw 3.7%; range raise seimbang boleh mengandungi bluff. Kebiasaan fold setiap overpair terhadap raise daripada range yang kaya dengan draw boleh dieksploitasi lawan. **Mengelakkan commitment penuh dan fold ialah keputusan berbeza.** Node bet-lalu-raise tiada dalam solve ini, jadi tiada kekerapan respons. Prinsip yang sama muncul apabila [board bersambung mengurangkan kelebihan aggressor preflop](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp").
- **Jangan menyamakan A-high dengan kekuatan.** Kira-kira satu perempat range SB ialah A-high. Bagi **A-high tanpa draw langsung**, mendapat pair sering menjadi jalan peningkatan terdekat, sementara draw lawan boleh menjadi straight. Bezanya bukan sekadar peluang meningkat, tetapi nilai hasil peningkatan. Namun A4 dan A8 mempunyai OESD di sini; jangan meletakkan semua A-high dalam kumpulan tanpa draw. Equity 49.6% merangkumi keseluruhan campuran itu.
- **Rancang apa yang dilakukan selepas check.** Apabila 90.4% range check, memilih tangan untuk call atau [check-raise](/ms/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-ms.webp") menjadi soalan seterusnya. ⚠ **Jawapannya tiada dalam pengiraan ini.** Spot belajar hanya menyediakan tindakan pertama flop; kekerapan bet BB selepas check dan check-raise SB belum dikira. Contoh low-rainbow dalam pautan mempunyai check-raise daripada solve berasingan, tetapi **peranannya berbeza**: BB caller menghadapi BTN, bukan SB opener menghadapi BB.

:::readnext[Baca seterusnya]
/ms/blog/blind-battle-cbet | SB Bertindak Dahulu, Bet 67.4% | /images/gto-sb-king-mid-oop-ms.webp
/ms/blog/ace-paired-board-strategy | Dua Ace, Bet Meningkat ke 80.1% | /images/gto-sb-paired-ace-oop-ms.webp
:::

## Bagaimanakah anda menyemak sendiri?

Buka [solver GTO](/ms/solver), kemudian **Spot belajar → Board rendah bersambung, two-tone → ⚡ Lihat hasil**. Untuk latihan keputusan, buka [Trainer GTO](/ms/solver) daripada sidebar. Ia memberikan tangan rawak daripada range spot tersebut. Selepas tindakan dipilih, ia menunjukkan kekerapan campuran serta **kerugian EV (bb)**. Tanpa log masuk, rekod berada dalam pelayar; penyegerakan akaun bagi spot belajar adalah pilihan. Masalah daripada solve tersuai dan rekod latihannya tetap pada peranti walaupun log masuk.

**Bandingkan terus dengan “Board K-high dengan T”.** Label pemain kedua-duanya **OOP (SB (opener))**, pot dan stack sama, tetapi warna matriks berubah. Itulah demonstrasi ringkas kesan board. Percuma, tanpa pemasangan atau akaun.

**Q. Mengapa nilai range yang sama berubah mengikut board?**

A. Range tertumpu pada jenis kad tertentu. SB mempunyai banyak ace, king, queen dan Broadway, sementara BB menyimpan lebih banyak connector serta tangan rendah suited. Pada K♥T♦6♠, equity SB 55.3%; pada 7♦6♦5♣, ia turun kepada 49.6%. Range preflop sama, hanya board berubah.

**Q. Anda open dari SB dan flop rendah bersambung. Apa seterusnya?**

A. Dalam contoh 7♦6♦5♣ ini, check ialah pilihan utama pada 90.4%. Bet 9.6% tersebar pada 88 yang juga OESD (purata kelas 39.5%, tertinggi), A7s/K7s dan suited four K4s/Q4s. Check bukan menyerah; range masih perlu mempertimbangkan call dan check-raise terhadap bet lawan. Namun respons tersebut belum dikira dalam contoh ini.

**Q. SB mempunyai lebih daripada tiga kali ganda kombo overpair berbanding BB. Mengapa bet hanya 9.6%?**

A. BB sudah mempunyai 42 kombo set, two pair dan straight yang mengalahkan overpair, ditambah OESD 24.9% serta gutshot 23.8%. Enam puluh kombo top pair juga boleh meningkat. Overpair boleh mendahului sekarang tetapi sukar mendapat value berulang. ⚠ SPR 16.2 bukan sebab perbezaan itu: pot 6 bb dan stack 97 bb sama pada [KT6](/ms/blog/blind-battle-cbet) dan [AA6](/ms/blog/ace-paired-board-strategy), tempat SB bet 67.4% dan 80.1%. Board yang mengubah hasilnya.

**Q. Antara dua contoh ini, yang manakah tindakan lalai blind lawan blind?**

A. Tiada satu kekerapan yang boleh digunakan pada semua board. Kedua-duanya menunjukkan SB yang sama boleh bet 9.6% atau 67.4%. Tanya range siapa yang lebih sesuai dengan kad tertinggi serta sambungan board. King, queen dan ace sering membantu opener dalam tetapan ini; deretan kad rendah lebih membantu caller.
`.trim(),
};

export default POST;
