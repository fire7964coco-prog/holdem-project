import type { Post } from "../posts";

// MS GTO ⑥. Sumber EN semasa; pembetulan blocker dan pembundaran mengikut kontrak MS.
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "Lebih Banyak Trips, Masih Check",
  seoTitle: "Trips Lebih Banyak, Check 97% — Poker GTO Board 663",
  desc: "Pada 6-6-3, BB mempunyai 26 kombo trips berbanding BTN 20, tetapi check 97%. Lihat nilai pocket pair, kicker dan had penggunaan MDF.",
  tldr: "Pada flop berpasangan rendah 6♣6♦3♥, BB check 97.0% walaupun mempunyai lebih banyak trips: 26 kombo 6x berbanding BTN 20. Hanya 18.4% range BB mempunyai sesuatu melebihi pair pada board; baki 81.6% banyak bergantung pada kad tinggi, dan BTN lebih kuat pada bahagian itu. Pocket pair melebihi enam pula meningkat nilainya: equity TT ialah 76.0%.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 minit",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-ms.webp",
  imageAlt: "Matriks BB pada flop 6♣6♦3♥ hampir seluruhnya hijau untuk check, dengan kategori Quads dan Full House pada panel solver",
  keepImagesInBody: true,
  tags: ["trips vs set", "strategi board berpasangan", "flop 663", "pocket pair", "solver GTO", "minimum defense frequency"],
  content: `
Flop ialah **6♣ 6♦ 3♥** — kad rendah, dengan satu pair pada board (kad komuniti). Sekilas pandang, tiada siapa nampak mengenainya.

Jika anda memegang TT, equity anda ialah **76.0%**. TT yang sama mempunyai sekitar 54–57% apabila berdepan AK preflop, jadi flop ini *lebih baik* untuknya daripada situasi flip biasa. Dengan A9 pula, anda tidak membentuk pair melalui kad sendiri — tetapi empat perlima range lawan juga tidak mempunyai apa-apa melebihi pair pada board. Terus fold menyerahkan peluang memenangi pot.

**Board yang jarang mengenai sesiapa sebenarnya menguji siapa mempunyai kad tinggi yang lebih baik.** Flop [A-high](/ms/blog/a-high-board-cbet) dan [K-high](/ms/blog/k-high-board-cbet) membandingkan siapa mengenai board; kali ini dua range (julat tangan) yang kebanyakannya tidak mengenai board saling berhadapan. Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster.

:::stripe
Spot | BTN open 2.5 bb → BB call (heads-up)
Flop | 6♣ 6♦ 3♥ (board berpasangan rendah)
Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb
Hasil | BB check 97.0% — walaupun mempunyai lebih banyak trips
:::

> **Jawapan ringkas**
> Check hampir seluruh range dan jangan terlalu cepat membuang tangan yang kelihatan lemah. Memegang enam bukan alasan untuk terus lead: banyak tangan yang anda tewaskan akan fold, jadi kebanyakan 6x kekal dalam range check. BB check **97.0%** di sini. Pocket pair melebihi enam mendapat nilai besar; Ace-high dan King-high yang lebih baik pula tidak patut dibuang secara automatik.

## Apakah tetapan yang menghasilkan angka ini?

BTN open kepada 2.5 bb, BB call dan pemain lain fold: dua pemain, pot 5.5 bb, baki 97.5 bb. Range menganggarkan permainan dalam talian standard 100 bb. Dua saiz bet disediakan, kira-kira satu pertiga dan tiga perempat pot, tanpa rake. Mengubah range atau pilihan saiz turut mengubah kekerapan.

| Tetapan | Nilai |
|---|---|
| Preflop | BTN open 2.5 bb · BB call · pemain lain fold |
| Range | Anggaran permainan dalam talian standard 100 bb |
| Flop | 6♣ 6♦ 3♥ (board berpasangan, tiga suit berbeza) |
| Pot · stack | Pot 5.5 bb · stack efektif 97.5 bb |
| Saiz bet | Kira-kira 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tarikh semakan | 2026-08-20, hasil Spot belajar |

## Apakah beza trips dengan set pada board berpasangan?

**Set menggunakan pocket pair yang sepadan dengan satu kad board; trips menggunakan satu kad tangan yang sepadan dengan pair pada board.** Kedua-duanya mempunyai kedudukan yang sama — three of a kind dalam [ranking tangan](/ms/blog/holdem-hand-rankings) — tetapi keadaan strateginya sangat berbeza.

Flop lain dalam kumpulan single-raised pot siri ini menghasilkan set. (Satu lagi board berpasangan, A♠A♥6♦, muncul kemudian dalam kumpulan blind lawan blind.) Pada A-7-2, BB memerlukan 77 atau 22. Di sini board sendiri sudah mempunyai pair, jadi **satu enam sahaja menghasilkan trips**, manakala pocket 66 menghasilkan quads.

| Tangan anda pada 6♣6♦3♥ | Hasilnya |
|---|---|
| A6, K6s, 96s … mana-mana satu enam | **Trips** — tiga enam |
| 66 | **Quads** |
| 33 | **Full house** — tiga tiga bersama dua enam |
| TT, 99, 88, 77 … | **Two pair** — pocket pair anda bersama pair enam pada board |

Perbezaan itu penting kerana trips lebih mudah terbentuk daripada set, dan **lawan juga boleh memegangnya.** Set jarang berlaku dan lazimnya sangat kuat. Trips pada board berpasangan lebih mudah dikongsi oleh kedua-dua range, sebab itulah solver tidak menganggapnya lesen untuk sentiasa bet.

## Bagaimanakah BB bermain pada flop berpasangan rendah?

**Check 97.0%.** Pada 6♣6♦3♥, BB lead hanya 3.0% secara keseluruhan — 2.0% pada 4.1 bb dan 1.0% pada 1.8 bb — lalu menyerahkan giliran memilih kepada opener. Yang patut diperhatikan ialah saiz yang dipilih apabila BB bet, kerana pada titik ini dalam siri, keutamaan antara dua saiz terbalik buat kali pertama.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Check | **97.0%** | 471.7 |
| Bet 4.1 bb (75% pot) | **2.0%** | 9.6 |
| Bet 1.8 bb (33% pot) | 1.0% | 4.7 |

**Bet besar lebih kerap daripada bet kecil** — kali pertama dalam urutan siri ini. Pada dua board yang lebih banyak lead, saiz kecil mendahului lebih dua kali ganda: 16.8% berbanding 6.9% pada [spot donk bet 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), dan 8.0% berbanding 3.2% pada [flop monotone](/ms/blog/monotone-board-strategy). Di sini susunannya terbalik. Jadual setiap tangan di bawah menunjukkan coraknya.

## Mengapa masih check walaupun mempunyai lebih banyak trips?

**Kerana trips hanya 5.3% daripada range.** Sebahagian besar baki 94.7% sekadar menggunakan pair enam pada board bersama kad tinggi — dan BTN lebih kuat pada ukuran itu.

Mulakan dengan mengira kombo. Dengan 6♣ dan 6♦ pada board, tinggal 6♠ dan 6♥. Setiap tangan 6x *suited* mempunyai dua kombo, manakala A6 offsuit mempunyai enam. Seluruh kategori trips bergantung pada dua kad enam yang tinggal.

| Tangan 6x | BB (range call) | BTN (range open) |
|---|---|---|
| A6 (suited + offsuit) | ✅ 8 kombo | ✅ 8 kombo |
| K6s · Q6s | ✅ 4 kombo | ✅ 4 kombo |
| **J6s · T6s · 96s** | ✅ **6 kombo** | ❌ di luar range open |
| 86s · 76s · 65s · 64s | ✅ 8 kombo | ✅ 8 kombo |
| **Jumlah** | **26 kombo = 5.3%** | **20 kombo = 4.0%** |

**Bezanya ialah J6s, T6s dan 96s — enam kombo.** BB mempertahankannya dengan murah; BTN tidak open tangan tersebut dalam range contoh.

Namun, gambaran berubah apabila seluruh range dibandingkan.

![Carta range BB dan BTN pada board berpasangan rendah, membandingkan quads, full house, trips, two pair dan kad tinggi](/images/gto-srp-paired-ranges-ms.webp "6♣6♦3♥ · trips memihak caller, tetapi Two Pair dan Ace-High memihak opener")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Quads (66) | 0.2% | 0.2% |
| Full House (33) | 0.6% | 0.6% |
| Set/Trips (satu enam: trips) | **5.3%** | 4.0% |
| Two Pair | 12.3% | **15.5%** |
| Ace-High | 26.3% | **31.9%** |
| King-High | **16.5%** | 15.1% |
| Tiada made hand | **38.7%** | 32.7% |

**Tangan yang mempunyai sesuatu melebihi pair pada board membentuk 18.4% range BB dan 20.3% range BTN.** Baki **81.6%** BB sekadar pair enam bersama kad tinggi. BTN mendahului persaingan itu: Ace-high 31.9% berbanding 26.3%.

Lead sukar dari kedua-dua arah: dengan enam, banyak tangan lebih lemah akan fold; tanpa enam, BB memperlihatkan range yang sukar menghadapi raise. Jadi kebanyakan enam disimpan dalam range check.

## Equity 47 lawan 53 — mengapa EQR 84 lawan 115?

**Kerana kedua-dua range mengenai board dengan cara yang hampir sama, tetapi tidak mengutip value dengan cara yang sama.** Pada 6-6-3, hampir semua tangan sekadar berkongsi pair enam pada board. Itu merapatkan equity mentah; EV yang dapat direalisasikan pula tidak serapat itu.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47.2% | 52.8% |
| EV (bb) | 2.17 | 3.33 |
| **EQR (realisasi equity)** | **83.7%** | **114.5%** |

Bahagian equity BB bernilai ==5.5 × 47.2% = 2.60 bb==, tetapi EV (nilai jangkaan) ialah 2.17 bb — ==2.17 ÷ 2.60 ≈ 83.7%==. Bahagian BTN bernilai 2.90 bb berbanding EV 3.33 bb, maka realisasinya **114.5%**, melebihi nilai bahagian equity asal.

Jurang **30.8 mata** hampir sama dengan 29.1 mata pada [board A-high kering](/ms/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-ms.webp"). **Board berpasangan bermain seperti board kering**: sekitar empat perlima range berkongsi pair enam dengan kad tinggi berbeza. Pot sering bergerak perlahan, dan pemain terakhir bertindak boleh melihat tindakan lawan sebelum memilih. Kelebihan maklumat itulah yang memisahkan kutipan kedua-duanya.

:::note[Semua EQR dalam siri ini ialah angka yang dipaparkan oleh solver. Pengiraan semula daripada equity dan EV yang telah dibundarkan boleh berbeza sehingga 0.3 mata peratusan. Kekalkan nilai paparan; perbezaan kecil ini datang daripada pembundaran.]:::

## Sejauh mana pocket pair kuat pada 6-6-3?

**Hampir setiap pocket pair menjadi two pair di sini.** TT membentuk T-T-6-6-3. Dua pengecualiannya sepadan dengan rank board: 66 menjadi quads, dan 33 menjadi full house.

| Tangan | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76.0% | 6.66 | 159.4% | 97.7% |
| 99 | 72.6% | 5.68 | 142.4% | 96.1% |
| 88 | 69.9% | 4.96 | 128.9% | 94.8% |
| 77 | 68.5% | 4.63 | 123.0% | 94.7% |
| 55 | 63.7% | 3.82 | 108.9% | 93.8% |
| 44 | 61.8% | 3.42 | 100.5% | 93.9% |
| 22 | 50.4% | 1.83 | 66.0% | 95.8% |

(Purata enam kombo bagi setiap pocket pair; kombo individu berbeza kira-kira sepersepuluh mata.)

**TT dengan 76.0% berada di bahagian teratas range BB** selepas mengetepikan 6x, 33 dan 66. JJ dan lebih tinggi sudah melakukan 3-bet preflop, jadi tidak sampai melalui range call ini.

**Tetapi hujung bawahnya merosot dengan ketara.** 44 merealisasikan hampir seluruh bahagian equity — EQR 100.5% — dan masih memperoleh EV 3.42 bb berbanding purata range 2.17 bb. Ia bukan tangan yang sekadar cukup baik. Yang merosot ialah 22: equity 50.4%, EQR 66.0%, EV 1.83 bb.

**Garis pemisahnya ialah tiga, bukan enam.** 55 dan 44 kedua-duanya lebih rendah daripada enam tetapi masih merealisasikan bahagian penuh. Dua berada di bawah *kedua-dua* rank board: ia kalah kepada 33 dan setiap tangan yang mempunyai tiga. Jika tiga kedua muncul pada turn atau river, pair dua dicounterfeit sehingga bermain board — pada 6-6-3-3-K, 22 hanya two pair milik board (hanya kad 2 pada street yang satu lagi menyelamatkannya). Prinsipnya bukan "semua pair kecil bagus pada board rendah", tetapi **"pair melebihi tiga masih baik — pair dua yang terjejas."**

Satu lagi kumpulan mudah terlepas pandang: **mana-mana tangan yang mempunyai tiga** juga menjadi two pair. A3 bermain sebagai enam dan tiga dengan kicker Ace — menewaskan 22 tetapi kalah kepada setiap pocket pair melebihi tiga.

## Berapa banyak quads dan full house yang benar-benar ada?

**Satu kombo quads dan tiga kombo full house.** Kedua-duanya boleh dikira terus daripada kad yang tinggal.

- **Quads (66)** — dengan 6♣ dan 6♦ pada board, satu-satunya kombinasi yang tinggal ialah ==6♠6♥==. 0.2% daripada 486 kombo ialah 1.0; jadual individu memang mempunyai satu baris sahaja.
- **Full house (33)** — selepas 3♥ berada pada board, tinggal ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0.6% × 486 = 2.9.

63 juga boleh membentuk full house, tetapi 63 suited mahupun offsuit tiada dalam kedua-dua range. Oleh itu, **33 merangkumi seluruh kategori full house** pada flop ini.

Empat kombo itu menjelaskan mengapa board berpasangan terasa berbahaya. Dalam jadual setiap tangan, EQR 6♠6♥ ialah **359.7%** (EV 19.78 bb). Tiga kombo 33 pula mencatat **309.8%, 309.8% dan 309.5%** — sekitar tiga hingga empat kali nilai bahagian equity. Jarang berlaku, tetapi apabila ia mendapat action, pot boleh melibatkan seluruh stack.

## Mengapa bet besar lebih kerap daripada bet kecil?

**Kerana trips dan quads memilih saiz besar apabila ia bet.** Bandingkan setiap tangan:

| Tangan | Bet 4.1 bb (75% pot) | Bet 1.8 bb (33% pot) | Check |
|---|---|---|---|
| K♠6♠ | **7.8%** | 0.3% | 92.0% |
| Q♥6♥ | **7.9%** | 0.7% | 91.5% |
| J♥6♥ | **9.0%** | 3.3% | 87.7% |
| 6♠6♥ (quads) | **9.6%** | 0.0% | 90.4% |
| T♠T♥ (two pair) | 0.8% | 1.7% | 97.5% |

Trips kadangkala memilih saiz kecil — K♠6♠ 0.3%, Q♥6♥ 0.7%, J♥6♥ 3.3% — tetapi saiz besar digunakan beberapa kali lebih kerap. Satu-satunya baris dengan 0.0% tepat bagi bet kecil ialah 6♠6♥, dan **itu quads, bukan trips.** Two pair seperti TT jarang bet; apabila bet, ia lebih memilih saiz kecil.

Asasnya ialah apa yang boleh digunakan lawan untuk call. Enam berada tinggi dalam ranking tangan board ini, jadi sebahagiannya mahu membesarkan pot. Oleh sebab kebanyakan enam sudah check, **sebahagian kecil yang bet memilih saiz lebih besar.** Two pair pula kalah kepada setiap enam dan ketiga-tiga 33, lalu tidak mahu pot sebesar itu. Kumpulan yang mahu pot besar kurang memilih saiz kecil; kumpulan yang sekadar mahu call kurang memilih saiz besar.

⚠ **Jangan baca ini sebagai "kicker lebih baik, bet lebih besar" — jadual menunjukkan arah sebaliknya.** Kekerapan bet besar ialah K♠6♠ 7.8% < Q♥6♥ 7.9% < **J♥6♥ 9.0%**. Namun, jangan pula menyandarkan perbezaan ini kepada K♠ atau Q♥ yang kononnya menyekat lebih banyak trips lawan. Enam di tangan anda sudah mengeluarkan 6x suited dengan suit itu, dan BTN tidak mempunyai K6o atau Q6o. Kicker tersebut tidak menambah blocker trips. Kekerapan paparan kekal sah, tetapi sebab khusus perbezaannya tidak dapat diasingkan daripada jadual ini sahaja.

Ini juga bukan keseluruhan bet besar. Kumpulan enam hanya 26 daripada 486 kombo, dan sumbangan berwajaran tindakannya hanya kira-kira 1.2 daripada jumlah bet besar sekitar 9.6 kombo — lebih kurang satu perlapan (13.0%). Kebanyakan selebihnya datang daripada tangan yang langsung tidak memegang enam.

BB lead hanya 3.0%, jadi situasi ini jarang muncul dalam permainan. Namun prinsipnya jelas: **saiz dipilih dalam konteks range, bukan kekuatan satu tangan sahaja.**

## Patutkah Ace-high fold kepada [c-bet](/ms/solver)?

**Jangan fold sekerap yang mungkin dicadangkan oleh naluri.** Hanya 18.4% range BB mempunyai sesuatu melebihi pair board. Membuang semua yang lain menyerahkan terlalu banyak pot.

Apabila menghadapi bet 1.8 bb ke dalam pot 5.5 bb, menghalang keuntungan automatik bagi pure bluff memerlukan sambungan kira-kira ==5.5 ÷ (5.5 + 1.8) = 75.3%==. Anggaran ini dipanggil **minimum defense frequency (MDF)**.

Tambah semua Ace-high (26.3%) dan King-high (16.5%) kepada 18.4% tadi: jumlahnya masih **61.2%**, belum mencapai 75.3%.

⚠ **Jangan terus menyimpulkan "maka wajib defend lebih banyak".** MDF menganggap bet lawan sebagai pure bluff dengan equity sifar. Bluff pada flop masih mempunyai dua street untuk meningkat, jadi ia mempunyai equity. Pemain OOP pula mungkin merealisasikan equity dengan lemah. ⚠ Spot ini tidak menunjukkan titik pertahanan optimum sebenar: hasilnya hanya meliputi **tindakan pertama flop**, jadi respons BB kepada bet tiada di dalamnya. Sama ada pertahanan optimum melebihi atau berada di bawah MDF **tidak dapat dibaca daripada bahan ini.**

Maka kegunaan pengiraan ini bukan "capai 75%", tetapi **"jangan fold semata-mata kerana kad tertinggi anda."** Banyak Ace-high dan King-high masih berpotensi menjadi call. Membuang semuanya kepada satu c-bet kecil ialah tabiat yang mudah dieksploitasi.

(Pada board berpasangan, tiada siapa secara literal hanya mempunyai Ace-high: semua orang mempunyai pair enam pada board. "Ace-high" di sini bermaksud pair itu bersama Ace sebagai kad tertinggi tambahan.)

:::note[MDF memudahkan bet lawan kepada pure bluff. Kekerapan yang sesuai juga bergantung pada sejauh mana tangan anda merealisasikan equity pada street seterusnya; gunakannya sebagai titik mula, bukan arahan tetap. Sisi harga call diterangkan dalam [asas pot odds](/ms/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp"). Untuk konteks raise sebelum menggunakan rumus yang sama pada preflop, baca [peraturan raise dan re-raise](/ms/blog/holdem-betting-actions).]:::

## Apakah yang berubah semasa bermain?

- **Jangan merendahkan nilai pocket pair sederhana pada board berpasangan rendah.** 77 hingga TT mempunyai equity 68–76%, di bahagian teratas range call. Tetapi batas bawah itu nyata: 44 dan 55 masih melebihi purata range, manakala 22 hanya merealisasikan dua pertiga nilai equity kerana pairnya lebih rendah daripada kedua-dua rank board.
- **Mendapat trips pada flop bukan alasan untuk lead.** Kumpulan enam lead 6.8% — lebih kerap daripada mana-mana tangan two pair atau kad tinggi, dan hanya kurang daripada full house 33 (8.8%) serta satu-satunya kombo quads 6♠6♥ (9.6%) — dan masih check kira-kira sembilan daripada sepuluh kali. Lead membuat banyak tangan lebih lemah fold; check membolehkan tangan itu memasukkan cip sendiri, serta membuka pilihan check-raise atau call-down. ⚠ Solve ini tidak menunjukkan *berapa banyak* tambahan EV bagi laluan check-raise: ia hanya mengira **tindakan pertama flop**, jadi kekerapan c-bet BTN dan EV check-raise tidak tersedia.
- **Jangan automatik fold Ace-high kepada satu bet kecil.** 79.7% range BTN juga tidak mempunyai sesuatu melebihi pair board: Ace-high 31.9%, King-high 15.1% dan Tiada made hand 32.7%.
- **Kicker menentukan kekuatan trips anda.** Tiga kombo sahaja menewaskan trips tanpa bergantung pada kicker: tiga full house 33. (Quads tidak lagi mungkin bagi lawan selepas anda sendiri memegang satu enam. Empat kombo dalam bahagian terdahulu menjadi tiga dari sudut tangan anda.) Namun, hanya trips dengan kicker Ace selamat daripada trips lebih tinggi. Kicker kedua ditetapkan oleh tiga pada board, jadi kad di sebelah enam anda sangat menentukan. Dengan 76s, A6, K6, Q6 dan 86 BTN semuanya mendominasi anda. Trips dengan kicker lemah ialah bluff-catcher, bukan alasan untuk membesarkan pot tanpa syarat.

:::readnext[Baca seterusnya]
/ms/blog/monotone-board-strategy | Nut Flush Pun Kerap Check | /images/gto-srp-monotone-oop-ms.webp
/ms/blog/donk-bet-strategy | Bila Donk Bet Masuk Akal pada 987? | /images/gto-srp-middle-connected-oop-ms.webp
:::

## Bagaimanakah anda menyemaknya sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian pilih **Spot belajar → Board paired → [⚡ Lihat hasil]**.

Cari **satu baris 6♠6♥** dalam jadual setiap tangan — satu-satunya quads pada board ini. EQR **359.7%** ialah yang tertinggi antara contoh tangan yang dibincangkan dalam siri ini; kedua secara keseluruhan ialah 88 milik BTN dalam [pot 3-bet pada board rendah](/ms/blog/3bet-pot-low-board) dengan **346.0%**, manakala di pihak BB, tempat kedua ialah 6♥6♣ pada [flop rendah rainbow](/ms/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-ms.webp") dengan **318.9%**. Bandingkan dengan tiga baris 33 di bawahnya untuk melihat betapa kecilnya jumlah kombo di bahagian paling atas board berpasangan.

Kemudian buka **Trainer GTO** pada bar sisi. Tangan dipilih mengikut wajaran range sebenar, dan maklum balas menunjukkan kerugian EV dalam big blind. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Mengapa trips lebih terdedah berbanding set pada board berpasangan?**

A. Board memudahkan kedua-dua pemain mendapatnya. Set memerlukan pocket pair yang sepadan dengan satu kad board; trips hanya memerlukan satu kad yang sepadan dengan pair di atas meja. Maka BTN mempunyai 20 kombo trips di sini, berbanding BB 26. Kicker kedua pula tetap daripada board, jadi enam dengan kicker lemah didominasi oleh enam dengan kicker lebih baik. [Kedudukan ranking](/ms/blog/holdem-hand-rankings) sama, tetapi situasinya berbeza.

**Q. Apakah yang terbentuk daripada pocket pair pada board 6-6-3?**

A. Hampir semuanya menjadi two pair: TT bermain sebagai T-T-6-6-3. Pengecualiannya 66 menjadi quads dan 33 menjadi full house. Namun, nilai two pair tidak sama. 22 ialah pair dua di bawah kedua-dua rank board, kalah kepada setiap pocket pair lain, dan equitynya turun kepada 50.4%.

**Q. Mengapa caller mempunyai lebih banyak trips berbanding raiser?**

A. BB sudah membayar blind dan mempertahankan beberapa tangan yang tidak diopen oleh BTN. J6s, T6s dan 96s ialah kumpulan itu: enam kombo tambahan yang menerangkan seluruh jurang 26 lawan 20. BB masih check kerana trips hanya 5.3% daripada seluruh rangenya.

**Q. Apakah minimum defense frequency?**

A. Anggaran kekerapan meneruskan tangan supaya pure bluff dengan equity sifar tidak mendapat untung automatik: pot ÷ (pot + bet). Menghadapi 1.8 bb ke dalam 5.5 bb memberi 75.3%. Andaian pure bluff jarang menggambarkan keseluruhan bet sebenar pada flop, jadi MDF ialah rujukan model, bukan kuota call atau batas pertahanan optimum yang telah dibuktikan untuk spot ini.

**Q. Berapa kerap flop mempunyai pair?**

A. Kira-kira **17.2%**, atau sekitar satu daripada enam flop. Ketiga-tiga rank berbeza hanya jika kad kedua mengelak rank pertama dan kad ketiga mengelak kedua-duanya: ==(48 ÷ 51) × (44 ÷ 50) = 82.8%==. Bakainya mempunyai pair atau lebih baik. Oleh itu, anda memerlukan rancangan untuk board berpasangan. (Namun, ia bukan kejadian yang *lebih* kerap: tangan awal tanpa pair tidak mengenai mana-mana rank flop ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67.6%== daripada masa. Peluang mengenai sekurang-kurangnya satu rank ialah **32.4%**, hampir dua kali kekerapan board berpasangan.)

**Q. Adakah angka ini terpakai pada tahap permainan saya?**

A. Gunakan sebagai asas apabila syaratnya sepadan: heads-up, 100 bb, BTN open 2.5 bb, range pertahanan standard dan tanpa rake. Satu pelarasan berguna: jika lawan jarang c-bet pada board berpasangan, lead lebih kerap daripada 3.0% solver boleh memberi value kerana pot mungkin sekadar melalui check pada kedua-dua pihak.
`.trim(),
};

export default POST;
