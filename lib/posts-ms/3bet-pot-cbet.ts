import type { Post } from "../posts";

// MS GTO ⑧. Sumber EN semasa; output root, tafsiran dan aritmetik street dipisahkan.
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "BB Langsung Tidak Check pada AK2",
  seoTitle: "BB Tidak Check — C-Bet Poker GTO dalam Pot 3-Bet",
  desc: "Pada A♦K♠2♥, semua 63 kombo BB bet. Lihat bagaimana range preflop dan SPR 4 mengubah c-bet, tanpa menyamakan bet dengan komitmen seluruh stack.",
  tldr: "Pada A♦K♠2♥ dalam pot 3-bet, BB bet dengan seluruh range: check dibundarkan kepada 0.0%, dan tiada satu pun daripada 63 kombo check walau 0.1% daripada masa. Dalam tujuh spot sebelumnya, BB check antara 76.2% dengan 99.9%. Perubahan utama ialah BB melakukan 3-bet, jadi ia mengekalkan AA dan KK yang tiada dalam range call BTN. SPR 4.0 pula mengecilkan ruang untuk menangguhkan pembinaan pot; ia tidak bermakna turn dan river tiada.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "12 minit",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-ms.webp",
  imageAlt: "Hasil solver pada pot 3-bet A♦K♠2♥, semua sel aktif dalam matriks BB berwarna bet dengan Check 0.0%",
  keepImagesInBody: true,
  tags: ["c-bet pot 3-bet", "SPR poker", "stack efektif", "SPR 4", "flop AK2", "solver GTO"],
  content: `
Dalam tujuh spot sebelumnya, jawapan BB hampir sentiasa check. Pada [flop 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"), tempat lead paling ketara sekalipun, BB bet hanya 23.7%. Pada spot lain, kekerapan check antara 88.8% dengan 99.9%.

Di sini keadaannya terbalik: **BB bet seluruh range (julat tangan)** — kesemua 63 kombo, setiap satunya sekurang-kurangnya 99.9% daripada masa.

Perubahan utama berlaku pada preflop: BB **melakukan 3-bet**, bukannya call. Pot kini 22.5 bb berbanding 5.5 bb. (⚠ Board, iaitu kad komuniti, turut berubah: spot ① menggunakan A♥7♦2♣, manakala ini A♦K♠2♥. Maka ini bukan perbandingan terkawal yang hanya menukar tindakan preflop.) Gabungan itu mengubah cara seluruh flop dimainkan. Semua angka di bawah datang daripada [solver GTO percuma](/ms/solver) HoldemMaster.

:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22.5 bb · stack efektif 89 bb · **SPR 4.0**
Hasil | BB bet 100% — check 0.0%
:::

> **Jawapan ringkas**
> BB bet seluruh range. Saiz kecil (7.4 bb, 33% pot) digunakan 57.8%, dan saiz besar (14.9 bb, 66%) 42.2%. Bukan setiap tangan kuat: 38.1% range ialah pocket pair di bawah King. Sebab utamanya ialah **AA dan KK BTN sudah mengambil laluan 4-bet preflop**, jadi BB mempunyai set tertinggi. Dengan SPR 4.0, ruang menangguhkan keputusan membesarkan pot juga lebih kecil.

## Apakah tetapan yang menghasilkan angka ini?

★**Tetapannya berbeza daripada tujuh spot pertama.** Pot, stack dan peranan pemain semuanya berubah; baca jadual ini dahulu.

| Tetapan | Spot ini (pot 3-bet) | ①–⑦ (single-raised pot) |
|---|---|---|
| Preflop | BTN open → **BB 3-bet kepada 11 bb** → BTN call | BTN open 2.5 bb → BB call |
| OOP (bertindak dahulu) | **BB — pemain yang 3-bet** | BB — caller |
| IP | BTN — caller | BTN — opener |
| Pot | **22.5 bb** | 5.5 bb |
| Stack efektif | **89 bb** | 97.5 bb |
| **SPR** | **4.0** | 17.7 |
| Saiz bet | Kira-kira 1/3 dan 2/3 pot | Kira-kira 33% dan 75% (⑦ hanya satu saiz) |
| Rake | Tidak dimodelkan | Tidak dimodelkan |
| Tarikh semakan | 2026-08-20 | 2026-08-20 |

Pot 22.5 bb ialah ==11 daripada 3-bet + 11 daripada call + 0.5 small blind yang fold==. Stack efektif ialah ==100 − 11 = 89 bb==.

## Adakah kekerapan check benar-benar 0%?

**0.0% pada paparan.** Output mentah masih menyimpan sisa: 41 daripada 63 kombo membawa sedikit check, paling besar K♥K♦ pada 0.09%, dan jumlahnya kurang daripada satu perseratus kombo. Itu hingar solver, bukan strategi, jadi bacalah sebagai sifar. Sebaliknya, 57.8% memilih 7.4 bb dan 42.2% memilih 14.9 bb. Dalam ketujuh-tujuh single-raised pot sebelum ini, kecenderungan BB adalah sebaliknya.

| Tindakan pertama BB | Kekerapan | Kombo |
|---|---|---|
| Bet 7.4 bb (33% pot) | **57.8%** | 36.6 |
| Bet 14.9 bb (66% pot) | 42.2% | 26.4 |
| Check | **0.0%** | **0.0** |

(Peratusan dan kiraan kombo solver menggunakan pengagregatan berbeza, jadi pembahagiannya tidak tepat sama: ==36.6 ÷ 63 = 58.1%== berbanding paparan 57.8%. **Nilai di atas dikekalkan sebagaimana panel memaparkannya.** Hasil sifar kombo check tidak terjejas.)

0.0% tidak bermakna check dilarang. Ia bermakna **check tidak digunakan dalam strategi output bagi tree dan range ini**. Kekerapan sahaja tidak membuktikan bahawa EV check setiap kombo semestinya lebih rendah daripada EV bet; untuk itu, EV setiap tindakan perlu dibandingkan secara langsung.

Dalam spot terdahulu, tindakan yang jarang dipilih masih muncul pada 0.2% atau 0.1%. Di sini check langsung tidak mendapat bahagian itu.

## Mengapa tiada satu pun kombo check?

**Kerana BB menguasai bahagian paling atas board ini.** Tiga pocket pair boleh membentuk set pada A-K-2, dan BB memegang dua yang tertinggi. Apabila pemain pertama bertindak jauh lebih kerap mempunyai tangan terbaik, rangenya boleh bet dengan sangat luas. Jadual kategori menunjukkan sejauh mana kelebihan itu.

| Kategori | BB (OOP) | Kombo | BTN (IP) | Kombo |
|---|---|---|---|---|
| Set/Trips (set pada board ini) | **9.5%** | 6 | 2.3% | **3** |
| Two Pair | **14.3%** | 9 | 6.9% | 9 |
| Top Pair (satu Ace) | **33.3%** | 21 | 20.8% | 27 |
| Second Pair (satu King) | 4.8% | 3 | **11.5%** | 15 |
| Underpair | 38.1% | 24 | **46.2%** | 60 |
| Tiada made hand | **0.0%** | **0** | 12.3% | 16 |

(Pada skrin, BB tiada baris "Tiada made hand" — kategori dengan 0% tidak dilukis.)

Lihat baris teratas. **AA, KK dan 22 membentuk set pada A-K-2; BTN hanya mempunyai yang terakhir.** Panel solver menggunakan label gabungan *Set/Trips*. Pada board tanpa pair, pocket pair yang sepadan dengan satu kad board ialah **set** — perbezaannya diterangkan dalam [spot board berpasangan](/ms/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-ms.webp"). AA dan KK BTN mengambil laluan 4-bet preflop, jadi BTN mempunyai tiga kombo set berbanding enam BB.

Itulah teras spot ini. Apabila lawan jarang boleh mempunyai tangan paling kuat, anda boleh bet dengan bahagian range yang tidak kuat sekalipun — di sini 38.1% ialah pocket pair *di bawah* King.

**Namun "Tiada made hand: 0.0%" bukan sebab utamanya.** Range 3-bet yang sama pada board rendah menunjukkan perbezaan: pada [flop 8-5-2](/ms/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-ms.webp") kemudian dalam siri ini, 48.2% range BB ialah Ace-high tanpa pair, tetapi check masih hanya **2.0%**. Daripada 0% tangan kosong kepada sekitar 48%, check berubah dua mata sahaja. Yang penting bukan semata-mata jumlah tangan kosong, tetapi bagaimana board mengubah kelebihan pemain yang 3-bet.

:::note[⚠ Ini keadaan terbalik daripada [flop A-high dalam single-raised pot](/ms/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-ms.webp"). Di sana BB yang **capped** — tiada AA, AK atau AQ kerana tangan itu mengambil laluan 3-bet — lalu check 98.2%. Sama-sama A-high, tetapi pemegang bahagian teratas range berubah: pemain yang 3-bet mengekalkan tangan terkuat itu.]:::

## Apakah SPR dalam poker?

**SPR ialah stack-to-pot ratio: stack efektif dibahagi pot pada permulaan flop.** Di sini ==89 ÷ 22.5 = 4.0==, jadi baki stack hanya kira-kira empat kali pot. Angka ini menghubungkan keputusan flop dengan kemungkinan melibatkan seluruh stack, kerana ruang untuk menangguhkan pembesaran pot semakin kecil.

| Situasi | Pot | Stack efektif | SPR |
|---|---|---|---|
| Single-raised pot (①–⑦) | 5.5 bb | 97.5 bb | **17.7** |
| Pot 3-bet (spot ini) | 22.5 bb | 89 bb | **4.0** |

SPR membantu menganggarkan **berapa banyak bet yang masih diperlukan**, bukan sekadar berapa banyak cip tinggal. Gunakan saiz 66% yang ditawarkan pada flop dan kira laluan berikut — ini aritmetik pembinaan pot, bukan hasil strategi turn atau river:

- Flop **14.9 bb** → dicall, pot menjadi 52.3 bb dan baki stack 74.1 bb.
- Turn **34.5 bb** → dicall, baki stack 39.6 bb.
- River **39.6 bb**, all-in dengan baki stack.

**Tiga bet menghabiskan stack: ==14.9 + 34.5 + 39.6 = 89.0==.** Dua yang pertama berjumlah 49.4 bb, iaitu 55.5% stack — belum semuanya. Bet river ialah baki stack, bukan satu lagi bet 66%. Jika ketiga-tiga bet hendak menggunakan pecahan pot yang sama dan tepat mencapai all-in, pecahannya ialah ==kira-kira 54% pot==.

Dalam single-raised pot, tiga bet berturut-turut sekitar dua pertiga pot hanya menggunakan ==3.67 + 8.56 + 19.96 = 32.2 bb==, kira-kira satu pertiga stack. **Itulah perbezaan sebenar SPR 17.7 dan SPR 4.0**: ruang keputusan untuk membina pot. SPR rendah mengurangkan ruang menangguhkan value; ia tidak menghapuskan turn atau river.

## Mengapa saiz kecil lebih kerap digunakan?

**Kerana bentuk range, bukan kedalaman stack sahaja.** Semua 63 kombo di sini ialah pair atau lebih baik. **Bahagian paling lemah range sudah tiada**, jadi range tidak terbahagi kepada "nuts atau kosong". Tanpa banyak tangan kosong untuk digandingkan dengan saiz besar, 57.8% strategi memilih satu pertiga pot. (Istilah "condensed" biasanya menggambarkan range tanpa bahagian bawah *dan* tanpa bahagian teratas. Ia tidak sesuai di sini: BB mempunyai semua enam kombo set AA dan KK yang menjadi puncak board.)

A-K-2 rainbow juga menyediakan sangat sedikit draw segera, jadi tidak banyak draw yang perlu dikenakan harga mahal. Bentuk range dan tekstur board bersama-sama menerangkan pemilihan saiz.

⚠ **"Stack cetek bermakna bet kecil" bukan jawapannya.** Dua spot kemudian mempunyai SPR 4.0 yang sama, tetapi hampir sentiasa menggunakan saiz *besar*: Q-T-7 **98.4%** dan [8-5-2](/ms/blog/3bet-pot-low-board) **97.8%**. Sebabnya berbeza. Q-T-7 menyediakan banyak draw yang boleh dikenakan harga oleh bet besar. 8-5-2 pula kering seperti ini, tetapi range BB terbahagi kepada overpair dan Ace-high dengan sedikit tangan pertengahan — bentuk polarized yang mendorong bet besar. Kedalaman sama, pemilihan saiz berbeza.

**Saiz besar juga bukan "bahagian tangan kuat" semata-mata.** Jika set, two pair dan top pair dihimpunkan sebagai calon yang boleh mempertimbangkan pot sangat besar, jumlahnya ==6 + 9 + 21 = 36 kombo, 57.1%== — lebih daripada 42.2% yang bet besar. Kesesuaian memasukkan seluruh stack masih bergantung pada kicker dan range lawan, seperti diterangkan di bawah.

Petunjuknya ialah **kiraan kombo bukan nombor bulat**: 26.4 besar dan 36.6 kecil. Jika seluruh kategori dihantar ke satu saiz, bilangannya bulat. **Tangan yang sama mencampurkan dua saiz.** Angka 42.2% ialah kekerapan berwajaran seluruh range, bukan satu lapisan ranking tertentu. Campuran itu menyukarkan lawan membaca tangan hanya melalui saiz.

## Apakah yang sebenarnya dimiliki oleh BTN?

**Hampir separuh range call BTN — 46.2% — ialah pocket pair tanpa Ace atau King.** Range itu kini menghadapi kedua-dua kad tinggi tersebut pada board.

![Komposisi range pot 3-bet A♦K♠2♥, BB mempunyai set tertinggi AA dan KK sementara BTN banyak memegang pocket pair pertengahan](/images/gto-3bp-ace-king-ranges-ms.webp "Pot 3-bet A-K-2 · BB mengekalkan tangan teratas, sementara range BTN tertumpu pada pocket pair pertengahan")

Underpair membentuk 46.2%, atau 60 kombo: QQ hingga 33, sepuluh pocket pair dengan enam kombo setiap satu. Kumpulan ini sukar menahan dua barrel pada tekstur tersebut.

Satu had perlu diingat: 130 kombo itu ialah **range call yang diberikan kepada solve ini** — tetapan preflop yang ditulis dalam tree, bukan pertahanan yang dikira oleh solver. Sesetengah lawan sebenar fold pocket pair pertengahan tetapi call dengan A-Q, A-J dan K-Q. Terhadap pemain begitu, bahagian 46.2% itu tidak sama. Kenal pasti apa yang benar-benar dibawa oleh lawan melalui call sebelum menggunakan angka ini dalam permainan.

## Bagaimanakah BTN menghadapi c-bet satu pertiga pot?

**Sukar untuk call hingga ke river tanpa menilai semula tangan.** Underpair BTN berada di bawah Ace dan King pada board. Pada SPR 4.0, pembesaran pot boleh melibatkan stack dengan cepat.

⚠ Bet yang membawa kepada all-in bergantung pada saiz. Dua bet sekitar dua pertiga diikuti baki stack memberi 14.9 → 34.5 → 39.6, tepat tiga bet. Tetapi untuk bet **7.4 bb (satu pertiga)** yang dibincangkan di sini, tiga bet hanya ==7.4 + 12.3 + 20.4 = 40.1 bb==, iaitu 45% stack. Nod turn tidak tersedia dalam solve ini: Spot belajar berhenti pada tindakan pertama flop. Penjelasan seterusnya ialah tafsiran komposisi range, bukan output respons BTN.

Menghadapi 7.4 bb ke dalam 22.5 bb, menghalang keuntungan automatik bagi pure bluff memerlukan rujukan ==22.5 ÷ (22.5 + 7.4) = 75.3%== range — **minimum defense frequency**. Namun tangan BTN yang mengenai A-K-2 hanya berjumlah ==20.8 + 11.5 + 6.9 + 2.3 = 41.5%==. 🪶 Set 2.3% itu ialah **22**, yang mengenai dua, bukannya Ace atau King. Jika mengira hanya tangan yang mengenai Ace atau King, jumlahnya **39.2%**.

⚠ **Andaian MDF berdiri di atas asas yang lemah dalam spot ini.** MDF membuat **pure bluff ber-equity sifar** tidak mendapat keuntungan automatik, tetapi range bet BB mempunyai **0.0% Tiada made hand**, tanpa satu kombo pun. Range tanpa tangan yang belum berpasangan hanya menyisakan sedikit pure bluff seperti yang diandaikan MDF, jadi arah tafsirannya boleh menuju lebih banyak fold, bukan kewajipan defend lebih luas. ⚠ Dua syarat penting: ① "0% Tiada made hand" bukan "0% bluff" — underpair lemah boleh berfungsi sebagai bluff atau protection bet; ② nod respons BTN tiada dalam solve ini, jadi kekerapan pertahanan optimum sebenar belum disahkan. Maka 41.5% tidak bermakna "wajib tambah pocket pair pertengahan untuk call". Sama ada bet kecil benar-benar memberi harga yang cukup kepada 60 kombo itu pun diragui: terhadap seluruh range BB, hanya QQ dan JJ memegang lebih daripada 19.8% yang diminta, manakala 99 hingga 33 berada pada 7.6–9.2%. Walau bagaimanapun, sebab utama saiz kecil ialah **bentuk range** yang diterangkan tadi; harga call itu kesan sampingan.

:::note[⚠ MDF memudahkan bet kepada pure bluff dengan equity sifar. Pada flop, range yang semuanya pair atau lebih baik tidak memenuhi gambaran ringkas itu; namun tangan lemah yang sudah mempunyai pair masih boleh digunakan sebagai bluff. Angka MDF ialah rujukan sahaja. Nilai juga keupayaan tangan bertahan dan merealisasikan equity pada street berikutnya.]:::

## Mengapa EQR BB 109.6% walaupun bermain OOP?

**Kerana kelebihan range yang cukup besar boleh mengatasi kelemahan posisi.** Ini spot pertama dalam siri dengan realisasi equity pemain OOP melebihi 100%. Equity 68.9% berbanding 31.1% sangat berbeza daripada single-raised pot, apabila OOP mempunyai **45.1% hingga 48.5%** dan IP **51.5% hingga 54.9%**.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68.9%** | 31.1% |
| EV (bb) | 16.99 | 5.51 |
| **Realisasi equity** | **109.6%** | 78.7% |

Dalam pot 22.5 bb, equity 68.9% bernilai ==22.5 × 68.9% = 15.50 bb==. EV (nilai jangkaan) BB ialah **16.99 bb**. Nisbah ==16.99 ÷ 15.50== memberikan EQR **109.6%**.

:::pull[Posisi membesarkan kelebihan yang ada. Ia tidak menciptanya daripada tiada.]:::

EQR BTN 78.7% bukan bukti berasingan: ia sisi lain hubungan yang sama. Kedua-dua EV berjumlah pot; apabila satu pihak merealisasikan lebih 100% bahagian equity, pihak lain berada di bawahnya. Yang penting ialah saiz jurang. Dalam ①–⑦, realisasi OOP antara **77.9% dengan 93.2%**. Di sini ia melebihi 100%, dibantu pot yang dimenangi apabila BTN fold. Asas mengapa tindakan terakhir lazimnya bernilai diterangkan melalui [urutan tindakan dan posisi](/ms/blog/holdem-game-order).

## Apakah yang berubah semasa bermain?

- **Pada spot heads-up yang sepadan ini, tumpukan pilihan kepada saiz c-bet.** Pada flop A-high kering dengan tangan teratas di pihak pemain yang 3-bet, seluruh range output bet. Jika seorang cold-caller turut menyertai sehingga tiga pemain melihat flop, "bet semuanya" tidak lagi boleh dipindahkan terus. Underpair ialah antara kumpulan pertama yang perlu dinilai semula apabila pot menjadi multiway.
- **Kira SPR sebelum membuat rancangan flop.** Pot lebih besar bermakna lebih sedikit bet diperlukan untuk menghabiskan stack. **SPR 4 membolehkan dua bet besar diikuti bet baki stack pada river**; contoh ini tidak memerlukan bet keempat. Kira berapa langkah pembesaran pot yang masih ada sebelum memilih saiz.
- **★Bet seluruh range bukan bermakna memasukkan seluruh stack dengan seluruh range.** Sebanyak 38.1% yang bet ialah pocket pair di bawah King. Dalam kumpulan itu pun nilainya berbeza: QQ menewaskan lebih separuh range call BTN dan boleh dipertimbangkan untuk check turn, sementara TT dan 99 antara calon awal untuk dilepaskan apabila menghadapi raise. Ini tafsiran range, bukan nod turn atau respons raise yang telah dikira di sini.
- **★Top pair berbeza mengikut kicker.** Dua puluh satu kombo itu termasuk **A5s dan A4s**, tangan blocker yang digunakan untuk 3-bet dengan kicker lemah. Range lawan yang sanggup call seluruh 89 bb lebih sempit — **22 dan A-K di bahagian teras**, ditambah top pair kuat seperti A-Q bergantung pada lawan. **A-4 tidak menewaskan mana-mana tangan itu.** Set AA dan KK menewaskan semuanya. **A-K berada di tengah**: chop dengan A-K BTN dan kalah kepada 22. Jadi terhadap range tersebut, hujah memasukkan semua cip kukuh untuk **AA dan KK**; A-K bergantung pada keluasan range call lawan.
- **★Raise pada flop boleh menjadikan baki stack isu serta-merta.** Pada SPR 4, bergantung pada saiz raise, anda mungkin perlu membuat keputusan melibatkan seluruh baki stack. Jangan menganggap call sentiasa memberi turn murah: set cenderung meneruskan, sementara underpair rendah dan top pair berkicker lemah perlu lebih berhati-hati. ⚠ Ini dasar tafsiran daripada SPR dan kategori tangan, bukan output solver. Contoh ini tiada nod menghadapi raise, jadi sempadan jam, call dan fold tidak dapat disahkan. A-K bergantung pada keluasan range raise; terhadap set dan A-K sahaja, ia tidak pernah mendahului.
- **Jangan pindahkan "check 0%" kepada setiap pot 3-bet.** Board mengubah hasil walaupun range 3-bet kekal: pada [8-5-2](/ms/blog/3bet-pot-low-board), check ialah 2.0%. Board yang lebih memihak caller boleh memerlukan check yang nyata. **Ace dan King yang muncul bersama menghasilkan sifar ini dalam contoh khusus tersebut — bukan semua pot 3-bet mesti bet 100%.** Untuk asas membina tindakan preflopnya, rujuk [peraturan raise dan re-raise](/ms/blog/holdem-betting-actions).

:::readnext[Baca seterusnya]
/ms/blog/low-board-check-raise | Tiada Straight, Bila Check-Raise? | /images/gto-srp-low-rainbow-oop-ms.webp
/ms/blog/paired-board-strategy | Lebih Banyak Trips, Masih Check | /images/gto-srp-paired-oop-ms.webp
:::

## Bagaimanakah anda menyemaknya sendiri?

Buka [solver GTO percuma](/ms/solver), kemudian pilih **Spot belajar → Board A-high, kelebihan 3-bettor → [⚡ Lihat hasil]**.

Semak kepala panel dahulu: **Pot 22.5 bb · Stack 89 bb**. Perbezaannya daripada 5.5 bb dan 97.5 bb dalam spot terdahulu merangkum perubahan syarat artikel ini. Kemudian cari baris yang tiada: panel Tangan hanya menyenaraikan **lima** kategori BB; yang tidak muncul ialah "Tiada made hand". Jalur tindakan di atas menunjukkan check **0.0% / 0.0 combo**.

Kemudian buka **Trainer GTO** pada bar sisi. Tangan dipilih mengikut wajaran range sebenar, dan maklum balas menunjukkan kerugian EV dalam big blind. Percuma, tanpa pemasangan dan tanpa akaun wajib.

## Soalan lazim

**Q. Apakah maksud SPR dalam poker?**

A. SPR ialah stack-to-pot ratio. Dalam perancangan tangan, ia membantu menganggarkan berapa banyak bet diperlukan, bukan hanya berapa banyak cip tinggal. Buy-in 100 bb yang sama menghasilkan SPR 4.0 di sini dan 17.7 dalam single-raised pot. Kedua-duanya memberi ruang pembinaan pot yang sangat berbeza.

**Q. Berapa kali bet diperlukan pada SPR 4?**

A. Dalam contoh ini, tiga: dua bet sekitar 66% pot, kemudian all-in dengan baki pada river. Urutannya 14.9 → 34.5 → 39.6 bb, tepat 89 bb. Bet ketiga ialah baki, bukan 66% pot. Selepas dua bet, baru 49.4 bb dimasukkan, sedikit melebihi separuh stack. Saiz lebih besar boleh mencapai all-in dalam dua langkah; pilihan saiz menentukan ruang keputusan yang tinggal.

**Q. Patutkah pemain yang 3-bet sentiasa c-bet?**

A. Pada board contoh ini, outputnya ya — check 0.0%. Tetapi syaratnya bukan range sahaja. Range 3-bet yang sama pada 8-5-2 mempunyai 48.2% Ace-high dan masih check 2.0%; board yang memihak caller boleh mengubah keperluan check. Ace dan King yang muncul bersama, dengan AA dan KK tiada dalam range call BTN, menghasilkan sifar khusus ini.

**Q. Mengapa BTN tiada pocket Ace atau King?**

A. Range call contoh ini memang tidak mengandunginya: AA dan KK biasanya mengambil laluan 4-bet. Itu tetapan preflop yang dimasukkan ke dalam tree, bukan keputusan yang dikira oleh solver postflop ini. Model lain boleh mengekalkan sebahagiannya dalam range call untuk melindungi bahagian teratas. Jika tetapan itu berubah, baris set juga berubah.

**Q. Mengapa saiz kecil lebih kerap dipilih daripada saiz besar?**

A. Kerana bentuk range: semua 63 kombo mempunyai pair atau lebih baik, jadi bahagian kosongnya tiada dan range tidak terbahagi kepada "nuts atau kosong". **Bukan kerana stack cetek semata-mata:** [spot Q-T-7](/ms/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-ms.webp") mempunyai SPR 4.0 yang sama tetapi menggunakan saiz besar 98.4%.

**Q. Adakah angka ini terpakai pada tahap permainan saya?**

A. Jadikan angka ini asas apabila syaratnya sepadan. Solve ini hanya menyediakan dua saiz, satu pertiga dan dua pertiga pot. Jika overbet turut dibenarkan, kekerapan boleh terbahagi secara berbeza. Range 3-bet atau stack lain juga boleh mengubahnya, dan pengiraan ini tidak memasukkan rake.
`.trim(),
};

export default POST;
