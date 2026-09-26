import type { Post } from "../posts";

// MS GTO ⑦. Output pratetap dan pengiraan semula 2026-08-20 mempunyai sumber berasingan.
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Tiada Straight, Bila Check-Raise?",
  seoTitle: "Tiada Straight — Bila Check-Raise dalam Poker GTO?",
  desc: "Pada 6♠5♥2♦, BB check 96.8%. Pengiraan berasingan menunjukkan check-raise 14.9%: lihat tangan yang dipilih dan cara membaca raise ke 7.3 bb.",
  tldr: "Pada 6♠5♥2♦, BB check 96.8% dan lead 3.2%, walaupun equity 48.3% ialah kedua tertinggi antara tujuh spot BB sebagai caller. Hanya 43 membentuk straight, tetapi kedua-dua range tidak memilikinya. Kedua-duanya mempunyai set tanpa kelebihan di bahagian paling atas. Dalam pengiraan semula berasingan, BB check-raise bet 1.8 bb sebanyak 14.9%, dengan sebahagian besar range raise terdiri daripada draw.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-26",
  readTime: "11 minit",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-ms.webp",
  imageAlt: "Hasil solver pada flop 6♠5♥2♦, matriks 13 kali 13 BB hampir seluruhnya hijau dengan sedikit jalur jingga untuk lead",
  keepImagesInBody: true,
  tags: ["check-raise poker", "bila check-raise", "board wet poker", "flop rendah rainbow", "solver GTO", "gutshot"],
  content: `
Flop ialah **6♠ 5♥ 2♦**. Tiga kad rendah dengan tiga suit berbeza — tiada flush draw yang boleh lengkap dengan satu kad. Flush memerlukan kad yang sesuai pada kedua-dua street seterusnya.

Board (kad komuniti) ini kelihatan sesuai untuk diserang oleh BB. Equity BB ialah **48.3%**, kedua tertinggi antara tujuh spot BB mempertahankan blind dalam siri ini. Ia melebihi 45.1% pada [flop A-high](/ms/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-ms.webp") dan 46.3% pada flop K-high.

Namun BB lead hanya **3.2%**.

Sebabnya tertumpu pada satu kombinasi rank. **Hanya satu jenis tangan membentuk straight pada 6-5-2, dan kedua-dua pemain tidak mempunyainya.** Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster, berdasarkan range (julat tangan) contoh yang ditetapkan.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | 6♠ 5♥ 2♦ (rendah, rainbow)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb (SPR kira-kira 17.7)
Hasil | BB check 96.8% — equity tinggi, tiada kelebihan di bahagian teratas
:::

> **Jawapan ringkas**
> Check dahulu, kemudian cari peluang raise selepas BTN bet. Equity semata-mata tidak menentukan siapa patut bet dahulu; kelebihan pada tangan terkuat juga penting, dan board ini tidak memberikannya kepada mana-mana pihak. Dalam pengiraan susulan berasingan, BB check-raise semua setnya dan mengisi banyak bahagian lain dengan straight draw — kumpulan yang lebih banyak terdapat dalam range BB.

## Apakah tetapan yang menghasilkan angka ini?

BTN open kepada 2.5 bb, BB call dan pemain lain fold. Dua pemain, pot 5.5 bb, baki 97.5 bb. **Satu perbezaan daripada spot terdahulu: hanya satu saiz bet disediakan.**

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — tiga suit berbeza) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb (SPR kira-kira 17.7) |
| Saiz bet | Kira-kira 33% pot — **satu saiz sahaja** |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-20 |

Pot 5.5 bb terdiri daripada ==2.5 open + 2.5 call + 0.5 small blind yang fold==. Stack efektif pula ==100 − 2.5 = 97.5 bb==.

**Satu saiz bet itu penting semasa membaca skrin.** Spot sebelumnya menyediakan 33% dan 75%. Spot ini dikira dengan 33% sahaja, jadi **tiada baris "Bet 4.1bb" dalam output.** Data tidak hilang — pilihan itu memang tidak dimasukkan ke dalam tree.

## Berapa kerap BB check pada 6-5-2?

**96.8%.** Daripada 487 kombo, wajaran 15.3 digunakan untuk bet dan 471.7 untuk check.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **96.8%** | 471.7 |
| Bet 1.8 bb (33% pot) | **3.2%** | 15.3 |

Angka 3.2% bukan satu tangan khusus yang sentiasa mencuba lead. Ia tersebar nipis dalam range, selaras dengan tindakan yang hampir setara nilainya: perbezaan EV antara pilihan itu sangat kecil.

## Mengapa BB lead 3.2% di sini tetapi 23.7% pada 9-8-7?

**Kerana equity dan sebab untuk bet dahulu ialah dua perkara berbeza.** Susun tujuh spot ini bersebelahan: kedudukan equity tidak menghasilkan urutan lead yang sama.

| Flop | Artikel | Equity BB | Lead BB |
|---|---|---|---|
| Q♠J♦T♠ Broadway (two-tone) | ③ | 46.7% | 0.1% |
| K♠8♦3♣ kering | ② | 46.3% | 0.2% |
| A♥7♦2♣ kering | ① | 45.1% | 1.9% |
| 6♣6♦3♥ berpasangan | ⑥ | 47.2% | 3.0% |
| **6♠5♥2♦ rendah rainbow** | **⑦** | **48.3%** | **3.2%** |
| Q♠9♠2♠ monotone | ⑤ | 47.7% | 11.2% |
| 9♥8♥7♣ bersambung | ④ | 48.5% | 23.7% |

Board dengan equity terendah (45.1%) lebih kerap lead daripada board Broadway (46.7%). [Flop monotone](/ms/blog/monotone-board-strategy) pula mempunyai equity **lebih rendah** daripada contoh ini — 47.7% berbanding 48.3% — tetapi lead lebih tiga kali ganda.

Sekarang bandingkan ⑦ dengan ④. Jurang equity hanya **0.2 mata peratusan**, tetapi lead ialah **3.2% berbanding 23.7%.**

**Perbezaannya ialah straight.** Pada [9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), BB mempunyai 24 kombo straight: J-T, T-6 suited dan 6-5 suited. Pada 6-5-2, satu-satunya tangan yang melengkapkan straight ialah **4-3**, membentuk ==2-3-4-5-6==. Untuk straight di hujung atas, anda memerlukan 7, 8 dan 9 — **tiga kad, sedangkan tangan anda hanya dua kad.**

Dan 4-3 tiada dalam kedua-dua range. **Panel kategori solver langsung tidak mempunyai baris "Straight"**. Sel 43s dan 43o berwarna kelabu dalam kedua-dua matriks: bentuk suited mahupun offsuit tidak sampai ke spot ini.

:::pull[Hanya satu jenis tangan boleh membentuk straight pada board ini, dan kedua-dua range tidak mengandunginya.]:::

## Bagaimanakah kedua-dua range berbeza pada 6-5-2?

**BB mempunyai lebih banyak pair yang mengenai board, tetapi tidak mendapat kelebihan pada tangan teratas.** Top pair, second pair dan pair lemah BB lebih banyak; set dan two pair sama; overpair BB hampir separuh BTN. Hampir tiga perempat kedua-dua range tidak mempunyai pair langsung. Sebab itulah spot ini banyak melibatkan overcard dan draw, bukannya perlumbaan value dengan tangan yang sudah kuat.

![Komposisi range pada flop rendah rainbow, BB mempunyai lebih banyak pair yang mengenai board dan BTN lebih banyak overpair](/images/gto-srp-low-rainbow-ranges-ms.webp "6♠5♥2♦ · komposisi range yang menjadi latar kepada pengiraan check-raise berasingan")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trips (set pada board ini) | 1.8% | 1.8% |
| Two Pair | 0.4% | 0.4% |
| Overpair | 4.9% | **9.5%** |
| Top Pair (satu enam) | **7.4%** | 5.4% |
| Second Pair (satu lima) | **6.2%** | 4.2% |
| Pair lemah | **3.7%** | 2.4% |
| Underpair | **2.5%** | 2.4% |
| Ace-High | 23.0% | **28.6%** |
| King-High | **15.6%** | 14.3% |
| Tiada made hand | **34.5%** | 31.0% |

Jumlah top pair, second pair dan pair lemah memihak BB **17.3% berbanding 12.0%**. Kelebihan itu nyata, tetapi bukan jenis kelebihan untuk terus *lead*: tangan tersebut tidak mahu membesarkan pot dari OOP pada tindakan pertama. Ia lebih sesuai dibincangkan dalam laluan check-call dan check-raise.

Dua baris menjelaskan teras spot ini:

- **Baris "Set/Trips" ialah 1.8% bagi kedua-dua pemain.** 🪶 Itulah label gabungan aplikasi semasa. Board 6-5-2 tidak mempunyai pair, jadi tangan dalam baris ini sebenarnya **set**, bukan trips yang menggunakan pair pada board. Hanya 66, 55 dan 22 membentuknya. Setiap satu mempunyai ==3 kombo== kerana satu kad daripada setiap rank sudah berada pada board. Sembilan kombo bagi setiap pemain: **tangan terbaik dalam range dibahagi sama rata.**
- **Overpair ialah 4.9% berbanding 9.5%**, hampir dua kali ganda di pihak BTN. Overpair di sini bermaksud pocket pair melebihi enam, iaitu 77 hingga AA. BB sudah melakukan 3-bet dengan JJ dan lebih tinggi sebelum flop, jadi hanya **77 hingga TT** tinggal dalam range callnya. BTN mengekalkan seluruh hujung atas senarai itu.

## Mengapa equity 48.3% tetapi EQR hanya 84.3%?

**Equity mengukur bahagian nilai pot sebelum kesan tindakan; EQR mengukur sejauh mana nilai itu direalisasikan.**

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.3% | 51.7% |
| EV (bb) | 2.24 | 3.26 |
| **Realisasi equity** | **84.3%** | **114.7%** |

Dalam pot 5.5 bb, equity 48.3% bernilai ==5.5 × 48.3% = 2.66 bb==. EV (nilai jangkaan) BB ialah **2.24 bb**; ==2.24 ÷ 2.66== menghampiri EQR **84.3%**. Bahagian 51.7% BTN bernilai 2.84 bb, sedangkan EVnya 3.26 bb — **114.7%**. (Membahagi angka yang sudah dibundarkan boleh memberi perbezaan kecil; solver menggunakan nilai sebelum pembundaran.)

Bandingkan dengan [flop A-high](/ms/blog/a-high-board-cbet): BB mempunyai equity **45.1%** dan merealisasikan **84.0%**. Di sini equity lebih tinggi sekitar tiga mata, tetapi pecahan yang direalisasikan hampir sama. Pada 9-8-7 pula, BB merealisasikan **93.2%** kerana straight dalam rangenya membolehkan bet walaupun OOP.

**Posisi boleh bernilai lebih daripada tiga mata equity apabila range tidak mempunyai kelebihan di bahagian teratas.** Itulah pelajaran daripada jurang ini.

## Bilakah BB patut check-raise pada flop ini?

**Selepas BTN bet, dengan kekerapan yang bermakna dalam pengiraan susulan ini.** Menghadapi bet 1.8 bb, BB raise **14.9%**.

:::note[⚠ **Bahagian ini datang daripada pengiraan berasingan pada 2026-08-20.** Spot belajar dalam aplikasi hanya menunjukkan tindakan pertama flop; cip tindakan tidak boleh diklik untuk membuka respons kepada bet. Untuk mendapatkannya, tree yang sama dibina semula: bet 33%, raise 60%, pot 5.5 bb, stack 97.5 bb. Pengiraan itu menggunakan **190 iterasi, exploitability dalaman 0.16 = 0.016 bb, iaitu kira-kira 0.29% pot**, integer 16-bit dan 12 thread. Unit dalaman ketika itu ialah 0.1 bb, jadi pot 55 dan stack 975. Semua angka dalam dua jadual selepas ini datang daripada pengiraan tersebut, bukan output pratetap dan bukan pengiraan baharu untuk artikel MS.]:::

Pertama, tindakan BTN selepas menerima check:

| BTN selepas check BB | Kekerapan | Kombo |
|---|---|---|
| Bet 1.8 bb (33% pot) | **63.0%** | 316.5 |
| Check back | 37.0% | 186.5 |

Kemudian respons BB:

| BB menghadapi 1.8 bb | Kekerapan | Kombo |
|---|---|---|
| **Raise kepada 7.3 bb** | **14.9%** | 69.7 |
| Call | **65.6%** | 314.6 |
| Fold | 19.5% | 93.2 |

(Satu perbezaan paparan perlu dijelaskan: peratusan aplikasi dan kiraan kombonya tidak sepadan tepat pada nod ini. Daripada 477.5 kombo yang sampai, ==69.7 ÷ 477.5 = 14.6%==, bukan 14.9%. Pada nod BTN, 316.5 ÷ 503 menghasilkan kira-kira 62.9%, berbanding paparan 63.0%. Peratusan di atas dikekalkan sebagaimana panel memaparkannya. Jurang sekitar sepertiga mata tidak mengubah pengajaran strategi, tetapi menerangkan mengapa pembahagian anda boleh memberi 14.6%.)

Ada dua perkara yang patut diperhatikan.

**Raise itu bersamaan kira-kira 60% pot selepas call, bukan raise sebesar pot.** Raise kepada 7.3 bb kebetulan sama dengan cip di tengah sebelum call — ==5.5 + 1.8 = 7.3==. Tetapi raise sebesar pot dikira **selepas** call anda: ==5.5 + 1.8 + 1.8 = 9.1==, lalu jumlah raise-to menjadi **10.9 bb**. Jumlah 7.3 sebenarnya ialah ==(7.3 − 1.8) ÷ 9.1 ≈ 60%== pot, sepadan dengan tetapan raise 60%, dan sedikit melebihi empat kali bet asal (==7.3 ÷ 1.8 = 4.06==). "Kepada 7.3 bb" ialah jumlah keseluruhan, bukan tambahan 7.3 bb.

**BB fold hanya 19.5%**, maka ia meneruskan tangan **80.5%**. Menghadapi 1.8 bb ke dalam 5.5 bb, angka pertahanan yang menghalang untung automatik pure bluff ialah ==5.5 ÷ (5.5 + 1.8) = 75.3%==. Solver melebihi rujukan itu di nod ini kerana board rendah dan rainbow masih memberi banyak tangan kemungkinan untuk terus bersaing.

:::note[Satu lagi had pengiraan itu: lead pada **root** ialah **2.0%**, bukannya 3.2% dalam Spot belajar — 9.5 kombo, bukan 15.3. Root pengiraan semula mempunyai check 98.0% pada 477.5 kombo. Kategori, draw, equity, EV dan EQR sepadan hingga perpuluhan yang dipaparkan. Perbezaan EV bagi lead di sini hampir sifar, jadi campurannya boleh berubah antara pengiraan. Kedua-dua hasil menyokong "hampir tidak pernah lead", tetapi nilai 3.2% dan 2.0% kekal milik sumber berbeza; hasil pengiraan anda sendiri tidak dijamin berada dalam julat tertentu.]:::

## Tangan manakah membentuk range check-raise?

**Semua set, kedua-dua kombo two pair, kemudian kebanyakannya straight draw.**

Dalam analisis asal, kesemua 487 baris jadual tangan dibaca, bukan sekadar baris pada skrin pertama. Apabila disusun mengikut kekerapan raise, bahagian teratasnya memperlihatkan corak yang jelas.

| Tangan | Jenis tangan | Raise |
|---|---|---|
| 66 · 55 · 22 | Three of a kind — **kesemua sembilan kombo** | **100%** |
| 65s | Two pair — hanya 6♦5♦ dan 6♣5♣, kerana 6♠ dan 5♥ berada pada board | **100%** |
| 64s | Top pair **bersama** gutshot | **100%** — dua daripada tiga kombonya |
| 98s | Gutshot yang memerlukan tujuh — equity **35.8%** | 99%+ |
| 87s | Open-ended, memerlukan empat atau sembilan — equity **46.2%** | 80–83% |
| J4s · Q4s | Gutshot yang memerlukan tiga, tanpa pair | 67–90% |
| 54s | Second pair bersama gutshot | 74–75% |

Baca lajur kedua: **di bawah two pair, semua tangan dalam senarai ini mempunyai straight draw**. Dua yang turut mempunyai pair, 64s dan 54s, raise bersama kemungkinan peningkatannya — bukan kerana pair itu sahaja:

- **98s** mempunyai 5-6-8-9 dan memerlukan ==7==.
- **87s** mempunyai 5-6-7-8 dan menerima ==4 atau 9== — satu-satunya open-ender **dalam range ini**. ⚠ Bukan satu-satunya yang dibenarkan oleh board: **74 membentuk 4-5-6-7**, menunggu 3 atau 8; 84 pula double gutshot dengan lapan outs yang sama bilangannya. Angka 0.8% dalam jadual draw mencerminkan range solver yang tidak mengandungi 74 suited, bukannya board yang hanya membenarkan satu open-ender.
- **J4s, Q4s, 54s dan 64s** semuanya mempunyai 2-4-5-6 dan memerlukan ==3==.

**Tiada tangan di bahagian teratas senarai itu dipilih semata-mata kerana kad tingginya.**

Tujuh baris itu ialah bahagian teratas senarai tersusun, menyumbang kira-kira 30 daripada 69.7 kombo raise. Bakinya datang daripada tangan lain dalam range yang raise pada kekerapan lebih rendah. Jangan menyimpulkan bahawa *tiada* tangan lain pernah raise.

Perhatikan juga betapa kecil bahagian value. Set dan two pair bersama-sama ialah **2.2%** range — ==2.2% × 487 ≈ 11 kombo== — daripada 69.7 kombo raise. Walaupun dua kumpulan yang mempunyai pair bersama draw turut dikira, **kurang satu daripada empat kombo raise ialah tangan yang sudah terbentuk.** Sebab itulah range raise masih mempunyai peluang apabila dicall: sebahagian besarnya boleh meningkat.

Straight draw ialah kumpulan yang digunakan oleh solver untuk menyalurkan kelebihan BB itu.

| Draw | BB | BTN |
|---|---|---|
| OESD | 0.8% | 0.8% |
| **Gutshot** | **18.5%** | 13.9% |
| Backdoor FD | **20.5%** | 18.5% |
| Tiada draw | 60.2% | **66.8%** |

**Gutshot: 18.5% berbanding 13.9%.** Set sama pada 1.8%, manakala overpair 4.9% berbanding 9.5%. Maka baris gutshot menerangkan sumber penting bluff dalam range raise: solver menggunakan kumpulan yang lebih banyak dimiliki oleh BB, pada kekerapan berbeza mengikut tangan.

## Adakah 6-5-2 board wet atau dry?

**Dry di bahagian teratas, wet pada tangan pertengahan.** **Board wet** menyediakan banyak draw — sambungan untuk straight atau flush yang memberi tangan ketinggalan peluang menang. Board dry menyediakan sedikit kemungkinan sebegitu. Pada 6-5-2, kedua-dua sifat muncul serentak, jadi label sahaja tidak mencukupi untuk memilih tindakan.

Tiada flush draw satu kad, dan seperti diterangkan tadi, kedua-dua range tiada straight yang sudah lengkap. Dari sudut itu, board ini sangat dry: tangan terkuat ialah set, dan kedua-dua pemain mempunyai jumlah yang sama.

Namun **19.3% range BB mempunyai straight draw** (0.8% open-ended ditambah 18.5% gutshot), dan 20.5% lagi mempunyai backdoor flush. Hanya 60.2% tiada kedua-duanya. Banyak tangan masih mempunyai sebab untuk meneruskan walaupun belum membentuk pair.

Gabungan tangan teratas yang sama kuat dan banyak peluang peningkatan menghasilkan angka di atas. Tiada pihak mempunyai kelebihan eksklusif pada tangan terkuat untuk kerap lead, sementara banyak tangan masih boleh mempertahankan pot. Board [Q♠9♠2♠](/ms/blog/monotone-board-strategy) berbeza: tangan teratas ialah flush, dan kedua-dua pihak perlu mengambil kira lawan mungkin sudah memilikinya. Keupayaan bet dipengaruhi bahagian teratas range, bukan sekadar berapa banyak tangan lemah boleh meningkat. Prinsip itu juga boleh diperhatikan merentas tekstur melalui [spot c-bet dalam solver](/ms/solver).

## Apakah yang berubah semasa bermain?

- **Jangan lead board rendah rainbow hanya kerana "sudah mengenai sesuatu".** Equity 48.3% bukan alasan mencukupi. Pada 6-5-2, seluruh range lead 3.2%, dan campuran itu tersebar nipis. Satu-satunya saiz ialah satu pertiga pot, memberi BTN harga call **19.8%**. Ace-high dan King-high BTN, bersama-sama **42.9%** range, mempunyai equity melebihi harga itu. Lead kecil tidak mudah membuatnya fold, sementara tangan yang call turut mengandungi tangan yang menewaskan anda.
- **Check-raise set anda dalam nod contoh ini.** Kesemua sembilan kombo set raise 100%. Slow-play set apabila BTN juga mempunyai jumlah set yang sama melepaskan peluang membesarkan pot bernilai tinggi.
- **Pilih bluff melalui draw, bukan kad tinggi.** Banyak bluff dalam range raise ialah gutshot. Ace-high tanpa draw seperti A-J dan A-9 berada dalam bahagian call, iaitu 65.6%, bukannya dipilih sebagai raise kerana Ace sahaja. (A-K tidak sampai ke spot ini: range pertahanan BB berakhir pada A-J.)
- **Jangan terlalu banyak fold kepada bet kecil.** Menghadapi 1.8 bb ke dalam 5.5 bb, solver meneruskan **80.5%** range, melebihi rujukan pure-bluff 75.3%. Membuang semua King-high dan pair lemah kepada satu bet kecil mudah dieksploitasi pada board ini.

:::readnext[Baca seterusnya]
/ms/blog/paired-board-strategy | Lebih Banyak Trips, Masih Check | /images/gto-srp-paired-oop-ms.webp
/ms/blog/monotone-board-strategy | Nut Flush Pun Kerap Check | /images/gto-srp-monotone-oop-ms.webp
:::

## Bagaimanakah anda menyemaknya sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian pilih **Spot belajar → Board rendah rainbow → [⚡ Lihat hasil]**.

Perkara utamanya ialah apa yang *tiada*: **semak panel kategori dan ketiadaan baris "Straight".** Kemudian lihat sel 43s dan 43o dalam matriks — kelabu bagi kedua-dua pemain. Ketiadaan itulah asas artikel ini.

Untuk meneroka check-raise, anda perlu mengira sendiri kerana Spot belajar hanya memaparkan root flop. Tekan **Kira sendiri spot ini**, kekalkan tree yang dimuatkan, kemudian **Bina Tree → Jalankan Solver**. Selepas selesai, pilih **Check** kemudian **Bet** pada jalur tindakan di atas. Angka sejarah di atas datang daripada pengiraan berasingan yang telah dinyatakan.

Kemudian buka **Trainer GTO** pada bar sisi. Tangan dipilih mengikut wajaran range sebenar dan maklum balas menunjukkan kerugian EV dalam big blind. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Bilakah patut check-raise dalam poker?**

A. Apabila range mempunyai tangan yang mendapat manfaat daripada pot lebih besar dan cukup draw untuk mengimbangi agresi itu. Pada 6♠5♥2♦, pengiraan susulan menunjukkan BB raise 14.9% apabila menghadapi 1.8 bb: semua set, kedua-dua kombo two pair dan banyak gutshot. Soalannya bukan sekadar "adakah tangan saya bagus", tetapi "adakah tangan ini mahu pot membesar, dan adakah saya mempunyai bluff yang boleh meningkat apabila dicall?"

**Q. Mengapa BB jarang bet dahulu pada board rendah ini?**

A. Equity sahaja tidak memberikan kelebihan untuk bet dahulu; bahagian tangan terkuat juga penting. Set sama pada 1.8% bagi kedua-dua pihak, dan 4-3 yang boleh menewaskannya tiada dalam kedua-dua range. Tanpa kelebihan di bahagian teratas itu, BB kurang mendapat manfaat daripada membesarkan pot melalui lead, lalu lead hanya 3.2%.

**Q. Mengapa strateginya jauh berbeza daripada 9-8-7 walaupun equity hampir sama?**

A. Bahagian teratas range mempengaruhi siapa patut bet dahulu, bukan purata equity sahaja. Pada 9-8-7, BB mempunyai 24 kombo straight. Pada 6-5-2, kedua-dua range tiada straight. Equity berbeza hanya dua persepuluh mata, tetapi lead 23.7% berbanding 3.2%.

**Q. Tangan manakah patut check-raise pada 6-5-2?**

A. Dalam nod yang dikira: sembilan kombo set (66, 55, 22), kedua-dua kombo 65 suited, kemudian straight draw. Antaranya 98s dengan gutshot kepada tujuh, 87s dengan open-ender, serta J4s, Q4s, 54s dan 64s dengan gutshot kepada tiga. Kumpulan ini dipilih kerana value atau peluang meningkat, bukan kad tinggi semata-mata. Ia ialah contoh teratas senarai, bukan keseluruhan tangan yang pernah raise.

**Q. Adakah check-raise dibenarkan dan dianggap kurang sopan?**

A. Check-raise ialah tindakan biasa dalam peraturan poker standard; urutannya diterangkan dalam [panduan tindakan pertaruhan](/ms/blog/holdem-betting-actions). Kebimbangan tentang adab datang daripada sesetengah home game lama yang pernah melarangnya melalui house rule. Dalam permainan standard, check-raise ialah alat strategi: mengeluarkannya daripada nod BB ini membuang pilihan yang digunakan 14.9% daripada masa.

**Q. Adakah angka ini terpakai pada tahap permainan saya?**

A. Gunakan sebagai asas untuk syarat yang sepadan: heads-up, 100 bb, BTN open 2.5 bb, range pertahanan standard dan tanpa rake. Butiran khusus contoh ini ialah satu saiz bet 33% sahaja. Solver tidak diberi pilihan saiz lebih besar. Menambah saiz boleh mengubah kekerapan; sebab range di sini banyak check tetap perlu dinilai bersama tetapan tersebut.
`.trim(),
};

export default POST;
