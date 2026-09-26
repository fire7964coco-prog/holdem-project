import type { Post } from "../posts";

// MS ⑩. Latest EN plus approved source corrections; docs/ms-gto-source-contract.md.
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "Flop Rendah, Bet Besar 97.8%",
  seoTitle: "Bet Besar 97.8% — Poker GTO Pot 3-Bet pada Flop Rendah",
  desc: "Hanya tiga kombo BB mendapat pair daripada flop 852, tetapi bet besar dipilih 97.8%. Lihat peranan overpair, range terpolarisasi dan SPR.",
  tldr: "Selepas BB melakukan 3-bet dan BTN call, flop 8♦5♣2♠ menghasilkan bet dua pertiga pot pada kekerapan 97.8%. Daripada 83 kombo BB, hanya tiga mendapat pair baharu daripada board, iaitu A5s; 88, 55 dan 22 langsung tiada dalam range. Namun BB sudah mempunyai 36 kombo overpair dan 40 kombo A-high, dengan sangat sedikit tangan pertengahan. Bentuk range terpolarisasi inilah yang membantu menjelaskan pilihan saiz besar.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-02",
  readTime: "10 minit",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-ms.webp",
  imageAlt: "Keputusan solver HoldemMaster pada flop 8-5-2 rainbow dalam pot 3-bet, grid BB hampir seluruhnya menunjukkan bet besar",
  keepImagesInBody: true,
  tags: ["range terpolarisasi", "poker GTO", "flop rendah pot 3-bet", "overpair", "board kering", "solver GTO"],
  content: `
Flop ialah **8♦ 5♣ 2♠**. Anda melakukan 3-bet preflop dan memegang AK pada board yang sangat kering. Tiada pair, tiada draw yang boleh dilengkapkan dengan satu kad. **Check terasa seperti pilihan paling jelas.**

Solver menunjukkan sesuatu yang berbeza: **bet 14.9 bb, dua pertiga pot, digunakan 97.8%**. Angka itu merujuk kepada seluruh range BB, bukan AK secara individu. Daripada 83 kombo BB, hanya ==tiga== mendapat pair baharu dengan kad di board.

Untuk memahami mengapa saiz besar masih dipilih, kita perlu melihat semua tangan yang sudah ada dalam range, atau julat tangan. Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster.

:::stripe
Spot | BB melakukan 3-bet → BTN call (heads-up)
Flop | 8♦ 5♣ 2♠ (rainbow, tidak bersambung)
Pot · stack | Pot 22.5 bb · stack efektif 89 bb · **SPR 4.0**
Hasil | Dua pertiga pot 97.8% — tiga kombo mendapat pair daripada board
:::

> **Jawapan ringkas**
> Pada 8-5-2 dalam pot 3-bet, BB memilih **dua pertiga pot 97.8%**. Daripada 83 kombo, hanya **A5s, tiga kombo**, mendapat pair baharu daripada board. 88, 55 dan 22 langsung tiada. Namun range sudah mempunyai **36 kombo overpair (43.4%) dan 40 kombo A-high (48.2%)**, dengan hampir tiada bahagian pertengahan. Apabila range terbahagi kepada tangan sangat kuat dan tangan tanpa pair, saiz besar boleh sesuai walaupun flop kelihatan tidak banyak membantu.

## Apakah syarat yang menghasilkan angka ini?

Tetapan pot 3-bet sama seperti [A-K-2](/ms/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-ms.webp") dan [Q-T-7](/ms/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-ms.webp"). Hanya board, iaitu kad komuniti, berubah.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open → **BB melakukan 3-bet ke 11 bb** → BTN call |
| OOP · IP | OOP = BB (3-bettor) · IP = BTN (caller) |
| Flop | 8♦ 5♣ 2♠ (tiga suit berlainan) |
| Pot · stack | Pot 22.5 bb · stack efektif 89 bb (**SPR 4.0**) |
| Saiz bet | Kira-kira satu pertiga pot (7.4 bb) dan dua pertiga (14.9 bb) |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-08 (hasil spot belajar) |

Pot 22.5 bb ialah ==11 untuk 3-bet + 11 untuk call + 0.5 daripada SB yang fold==. Paparan menggunakan **big blind**: EV ditunjukkan sebagai “EV (bb)” dan setiap bet memaparkan amaun serta pecahan pot.

## Berapa kerap BB memilih bet besar?

**Saiz besar dipilih 97.8%**, hampir sama dengan 98.4% pada board yang banyak draw dalam contoh sebelumnya.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Bet 14.9 bb (66% pot) | **97.8%** | 81.1 |
| Check | 2.0% | 1.7 |
| Bet 7.4 bb (33% pot) | 0.3% | 0.2 |

Inilah perbandingan yang menarik. **[Q-T-7](/ms/blog/3bet-pot-bet-sizing) yang penuh draw dan 8-5-2 yang hampir tiada draw memilih saiz sama pada kekerapan hampir sama.** Sebelum ini, harga untuk draw lawan ialah penjelasan utama. Di sini BTN tiada draw langsung satu kad untuk dikenakan harga itu. **Hasil serupa datang daripada sebab berlainan.**

## Benarkah hanya tiga kombo mendapat pair daripada board?

**Ya, tiga kombo A5s.** Tetapi ini tidak bermakna semua tangan lain tiada pair; pocket pair tinggi sudah berada dalam range sebelum flop. Berikut pecahan penuh 83 kombo.

| Kategori | Bahagian | Kombo | Kandungan |
|---|---|---|---|
| Overpair | 43.4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| Ace-High | 48.2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Second pair (5) | 3.6% | 3 | **A5s** |
| King-High | 4.8% | 4 | KQs |
| **Set/Trips** | **0%** | **0** | 88, 55 dan 22 tiada dalam range 3-bet ini |
| **Top pair (8)** | **0%** | **0** | Tiada tangan dalam range yang mengandungi lapan |

Bilangan ini tepat dalam kombo bulat. Enam pocket pair dari 99 hingga AA masing-masing mempunyai enam kombo, memberikan 36 overpair. **Setiap pocket pair yang lebih tinggi daripada lapan menjadi overpair.** A5s tinggal tiga, bukannya empat, kerana 5♣ di board menyingkirkan A♣5♣. Bakinya ialah A♠5♠, A♥5♥ dan A♦5♦.

Satu jenis gutshot juga wujud: **empat kombo A4s** hanya memerlukan tiga untuk melengkapkan wheel A-2-3-4-5. Panel draw terbahagi kepada tiga baris yang tidak bertindih: **gutshot 4.8% · Backdoor FD 16.9% (14 kombo) · Tiada draw 78.3%**. 78.3% bukan semua baki selepas gutshot; ketiga-tiga baris perlu dijumlahkan untuk mencapai 100%. Backdoor 16.9% memerlukan dua kad suit yang betul berturut-turut, dengan peluang lengkap kira-kira 4.2%.

## Mengapa range yang kurang mengenai board memilih bet besar?

**Range itu terbahagi kepada tangan sangat kuat dan tangan tanpa pair, dengan bahagian tengah yang nipis.** Itulah bentuk terpolarisasi yang menyokong saiz besar.

Sebanyak 36 overpair berada di bahagian atas range BB. **Jika anda memegang AA atau KK, hanya sembilan kombo set BTN sedang mengalahkan anda.** Di hujung lain, 40 kombo A-high mengalahkan sedikit sahaja ketika showdown **berbanding range yang sanggup call bet besar**. Terhadap keseluruhan 144 kombo BTN, keadaannya berbeza: 58.3% range BTN juga belum mendapat pair tambahan pada board ini.

⚠ Overpair sendiri bukan satu kumpulan yang semuanya sama kuat. BTN turut mempunyai 24 kombo QQ, JJ, TT dan 99, iaitu 16.7%. Maka 99 BB kalah kepada 18 kombo overpair tersebut, TT kepada 12, dan JJ kepada 6. **Susunan kekuatan masih wujud dalam baris “Overpair”.**

| Bentuk range | Saiz |
|---|---|
| Tangan kuat, sederhana dan lemah tersebar (range bet) | Kecil — tangan pertengahan masih mahu di-call |
| **Kuat atau tiada pair (terpolarisasi)** | **Besar — bahagian pertengahan yang memerlukan harga kecil sangat sedikit** |

SPR 4 menunjukkan sejauh mana saiz itu boleh membina pot; bentuk range di atas yang menjelaskan pemilihannya. Dengan baki 89 bb, **dua bet dua pertiga pot diikuti baki river menggunakan stack tepat**: 14.9 bb di flop, 34.5 bb di turn dan 39.6 bb di river. Dua bet pertama ialah ==14.9 + 34.5 = 49.4 bb==, atau 55.5% daripada 89 bb.

⚠ **Bermula kecil tetap mempunyai laluan all-in.** Jika bet 7.4 bb di-call, pot menjadi 37.3 dan baki 81.6. Bet turn 24.6, sekitar dua pertiga, meninggalkan pot 86.5 dan baki 57.0; shove river 57.0 ialah 65.9% pot. Jadi kedalaman stack sahaja tidak menentukan saiz. [A-K-2](/ms/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-ms.webp") menggunakan SPR 4.0 yang sama tetapi memilih saiz **kecil 57.8%**. Perbezaan di sini ialah bentuk range terpolarisasi.

Kombo A-high **menang serta-merta apabila lawan fold**. Sebanyak 58.3% range BTN terdiri daripada A-high, K-high atau Tiada made hand. ⚠ “Tidak mengenai board” **bukan kadar fold**. Node respons BTN terhadap bet tiada dalam solve ini, jadi tiada kekerapan fold yang boleh dipetik. A-high BTN pula datang daripada keluarga AK hingga AT dan masih mempunyai nilai showdown tertentu. Untuk mengkaji bila fold equity dan value menyokong bluff, gunakan [analisis range dalam solver](/ms/solver).

## Mengapa semua set berada pada BTN?

**88, 55 dan 22 berada dalam range call contoh ini, tetapi tidak dalam range 3-bet BB.** Ini contoh pertama dalam siri apabila bahagian teratas board dimiliki sepenuhnya oleh pemain IP.

![Perbandingan kelas tangan BB dan BTN pada flop 8-5-2 dalam pot 3-bet](/images/gto-3bp-low-ranges-ms.webp "Pot 3-bet 8-5-2 · set hanya pada BTN, overpair lebih banyak pada BB")

| Kategori | BB (3-bettor) | BTN (caller) |
|---|---|---|
| **Set/Trips** | **0.0%** | **6.3%** (9 kombo) |
| Overpair | **43.4%** | 16.7% |
| Top pair (8) | 0.0% | 2.1% |
| Second pair (5) | 3.6% | — |
| Underpair | — | **16.7%** |
| Ace-High | **48.2%** | 36.1% |
| King-High · Tiada made hand | 4.8% | **22.2%** |

Sembilan kombo BTN ialah 88, 55 dan 22, tiga setiap satu. Satu kad bagi setiap rank berada di board, maka setiap pocket pair tinggal tiga daripada enam kombo. 🪶 Jadual dan skrin solver menggunakan **“Set/Trips”**. Pada 8-5-2 hanya **set** boleh wujud kerana board tiada pair. Trips biasanya menggunakan satu kad tangan bersama pair di board. Label aplikasi dipetik seperti dipaparkan, tetapi maksudnya di sini ialah set.

**Ini mengubah cara overpair dinilai.** Semua set berada pada lawan dan BB tiada tangan lebih tinggi, maka overpair BB bukan nuts.

⚠ Namun itu bukan alasan mengatakan “apabila di-raise, overpair tidak mengalahkan apa-apa”. Pertama, **node respons terhadap raise tiada**; contoh ini berhenti pada tindakan pertama flop. Kedua, range raise yang seimbang menghadapi bet hampir seluruh range perlu mencampurkan bluff dengan sembilan kombo set. **AA dan KK mengalahkan semua tangan lain dalam range raise itu selain sembilan set.** Saiz raise dan komposisinya masih perlu diketahui sebelum menentukan tindakan.

## Mengapa realisasi equity BTN meningkat berbanding dua contoh sebelumnya?

**EQR BTN meningkat kepada 90.3%** dalam struktur pot 3-bet yang sama, berbanding 78.7% dan 75.1% sebelumnya. EQR ialah realisasi equity, sementara EV ialah nilai jangkaan. Kedua-dua EV berjumlah nilai pot; kenaikan bahagian satu pihak datang bersama penurunan pihak lain. EQR BB turun daripada 117.8% kepada 106.9%, jadi angka kedua-dua pihak perlu dibaca bersama.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.6% | 41.4% |
| EV (bb) | 14.09 | 8.41 |
| **EQR** | **106.9%** | **90.3%** |

| Pot 3-bet, tiga board | EQR BB | EQR BTN |
|---|---|---|
| A♦K♠2♥ kering (⑧) | 109.6% | 78.7% |
| Q♥T♥7♠ two-tone (⑨) | 117.8% | 75.1% |
| **8♦5♣2♠ rendah (⑩)** | **106.9%** | **90.3%** |

Sebab utamanya ialah lokasi set. **Hanya BTN boleh memegang set**, dan sembilan kombo tersebut boleh memenangi pot besar. Underpair BTN 16.7% — 77, 66, 44, 33 — juga mengatasi A-high, memberikan sebab untuk mempertimbangkan call.

**Antara tiga contoh ini, board rendah masih memihak kepada 3-bettor tetapi kelebihannya paling kurang direalisasikan.** Equity BB 58.6% sedikit melebihi 58.3% pada QT7, sementara EQR turun 117.8%→106.9%. ⚠ Kenaikan **BTN** sebanyak 15.2 mata, 75.1%→90.3%, bukan kenaikan bahagiannya daripada pot. Bahagian pot sebenar ialah ==8.41 ÷ 22.5 = 37.4%== berbanding ==7.04 ÷ 22.5 = 31.3%== pada ⑨, iaitu jurang **6.1 mata**.

## Apakah pelajaran yang boleh digunakan di meja?

- **Jangan automatik check hanya kerana flop rendah tidak mengenai tangan anda.** Dalam pot 3-bet ini lawan juga banyak terlepas: 58.3% range BTN tidak mendapat pair. Tetapi 58.3% itu bukan kadar fold, kerana node respons tiada. Sebab memilih saiz besar ialah bentuk range anda, bukan andaian semua tangan terlepas akan fold.
- **Overpair bukan nuts apabila raise datang.** Semua sembilan set berada pada BTN, bersama 24 kombo QQ hingga 99. **99 dan TT anda boleh kalah kepada overpair lain.**
- **Kurangkan bluff A-high terhadap pemain yang jarang fold.** Angka 97.8% untuk saiz besar mengandaikan respons yang sepadan dengan model. Jangan menukar 58.3% missed menjadi 58.3% fold. A-high BTN 36.1% pula keluarga AK, AQ, AJ, AT, tanpa ace lemah. 🪶 Menghadapi 14.9 bb ke dalam 22.5 bb, MDF ialah 60.2%, tetapi **rujukan awal, bukan kuota call**. Andaian pure bluff tanpa equity tidak sepadan dengan range BB yang mempunyai 36 overpair. Pertahanan optimum sebenar belum dikira. Terhadap calling station, bluff A-high berulang boleh merugikan; condongkan value kepada overpair yang sesuai.
- **Sebagai BTN, perhatikan nilai pocket pair kecil.** 88, 55 dan 22 menjadi set; 77, 66, 44 dan 33 mendahului A-high. Ini bertentangan dengan [contoh A-K-2](/ms/blog/3bet-pot-cbet), apabila underpair berdepan range jauh lebih kuat. Pembinaan range 3-bet menentukan perbezaan itu; asas tindakan yang membina pot ini boleh dibaca dalam [peraturan raise dan 3-bet](/ms/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp").
- **Kira SPR sebelum bet.** Dua bet dua pertiga (14.9→34.5) diikuti shove river 39.6 menggunakan 89 bb. Ini laluan aritmetik, bukan pengiraan strategi tiga street atau kewajipan meneruskan. Ia menunjukkan bet flop sudah menuntut rancangan tentang baki stack.

:::readnext[Baca seterusnya]
/ms/blog/3bet-pot-bet-sizing | Dua Saiz, Satu Hampir Sentiasa Dipilih | /images/gto-3bp-dynamic-oop-ms.webp
/ms/blog/blind-battle-cbet | SB Bertindak Dahulu, Bet 67.4% | /images/gto-sb-king-mid-oop-ms.webp
:::

## Bagaimanakah anda menyemak sendiri?

Buka [solver GTO](/ms/solver), kemudian **Spot belajar → Board rendah kering → ⚡ Lihat hasil**. Untuk berlatih membuat keputusan, buka [Trainer GTO](/ms/solver) melalui sidebar. Ia memberikan tangan rawak daripada range spot tersebut. Selepas memilih tindakan, anda melihat kekerapan campuran dan **kerugian EV (bb)**. Secara lalai, rekod disimpan pada peranti ini; jika anda log masuk dengan akaun HoldemMaster, rekod latihan Spot belajar dan Cabaran Harian disegerakkan antara peranti. Masalah Trainer daripada pengiraan tersuai dan rekod latihannya tetap disimpan pada peranti walaupun anda log masuk.

Cari **baris “Set/Trips” yang tiada** pada panel BB. Tukar pemain kepada IP (BTN), dan baris itu muncul pada 6.3%. Itulah cara paling ringkas melihat siapa memegang tangan teratas pada board ini. Percuma, tanpa pemasangan atau akaun.

**Q. Patutkah AK melakukan c-bet pada flop rendah dalam pot 3-bet?**

A. AK boleh menyertai strategi bet. Pada 8-5-2, AK tiada pair atau draw yang boleh dilengkapkan dengan satu kad, tetapi saiz besar digunakan 97.8% bagi seluruh range. BB hampir terbahagi dua antara overpair dengan A-high, iaitu bentuk terpolarisasi. Angka itu bukan kekerapan AK secara individu. Sebanyak 58.3% range lawan tidak mendapat pair, tetapi itu bukan kadar fold; respons lawan belum dikira.

**Q. Apakah maksud range terpolarisasi?**

A. Range yang tertumpu pada tangan sangat kuat dan tangan lemah, dengan sedikit tangan pertengahan. BB di sini mempunyai 43.4% overpair dan 48.2% A-high. Keperluan menggunakan harga kecil untuk mendapatkan call daripada tangan sederhana menjadi lebih rendah.

**Q. Mengapa 3-bettor tiada set?**

A. Dalam tetapan contoh ini, pocket pair kecil 88, 55 dan 22 tidak dimasukkan dalam range 3-bet; ia berada pada pihak caller. Maka kesemua sembilan set milik BTN. Itu sebab perasaan “3-bettor menguasai segala-galanya” tidak tepat pada flop rendah. Range sebenar lain boleh memasukkan tangan-tangan tersebut.

**Q. Bolehkah angka ini terus digunakan dalam permainan sebenar?**

A. Gunakan sebagai garis dasar apabila syaratnya sepadan. Jika range 3-bet anda memasukkan pocket pair kecil atau suited connector, komposisi board dan pembahagian saiz berubah. Rake juga tidak dimodelkan dalam pengiraan ini.
`.trim(),
};

export default POST;
