import type { Post } from "../posts";

// ID adaptation of the current EN study; precision corrections follow the ID source contract.
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Dua Ukuran, Bet Besar 98,4% di Q-T-7",
  seoTitle: "Bet Besar 98,4% — Bet Sizing Pot 3-Bet di Q-T-7",
  desc: "Dua ukuran tersedia, tetapi bet besar dipilih 98,4% di Q-T-7. Pelajari harga draw, bentuk range, dan geometric bet sizing dalam pot 3-bet.",
  tldr: "Pada Q♥T♥7♠ dalam pot 3-bet, big blind memilih bet dua pertiga pot (14,9bb) sebanyak 98,4%. Bet kecil mendapat 0,7% dan check 0,8% — bersama-sama hanya sekitar satu combo dari 73. Pada A♦K♠2♥, range preflop yang sama membagi sizing 57,8/42,2. Di sini pembagian itu hampir hilang: draw lawan harus membayar harga lebih tinggi untuk melanjutkan. Angka 98,4% adalah frekuensi bet besar, bukan seluruh bet.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "12 mnt",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-id.webp",
  imageAlt: "Solver GTO HoldemMaster pada pot 3-bet Q-T-7 two-tone, dengan grid big blind hampir seluruhnya satu warna dan bet dua pertiga pot sebesar 98,4%",
  keepImagesInBody: true,
  tags: ["poker bet sizing", "wet board poker", "geometric bet sizing", "overbet poker", "ukuran taruhan poker", "gto solver"],
  content: `
Pada contoh sebelumnya, big blind melakukan bet dengan seluruh range di [A♦K♠2♥](/id/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-id.webp"), tetapi ukurannya hampir terbagi dua: 57,8% kecil dan 42,2% besar.

Sekarang flop-nya Q♥ T♥ 7♠. Ada dua hati, dan hanya J yang memisahkan Q dengan T. **Draw jauh lebih banyak, lalu pembagian ukuran hampir lenyap:** bet dua pertiga pot mengambil ==98,4%==, sedangkan bet kecil hanya 0,7%.

Anjuran bet besar pada board dengan banyak draw terdengar sederhana. Contoh ini menunjukkan seberapa jauh pola tersebut bisa berlaku. Semua angka berikut berasal dari [solver GTO gratis](/id/solver) HoldemMaster.

:::stripe
Spot | BB 3-bet → BTN call (heads-up)
Flop | Q♥ T♥ 7♠ (two-tone, terhubung)
Pot · stack | Pot 22,5bb · stack efektif 89bb · SPR 4,0
Hasil | Dua pertiga pot 98,4% — hampir satu ukuran
:::

> **Jawaban singkat**
> Big blind bet **14,9bb, dua pertiga pot, sebanyak 98,4%**. Bet kecil 0,7% dan check 0,8% nyaris tidak digunakan. Perbedaan harga membantu menjelaskannya: sepertiga pot menuntut sekitar ==19,8%== equity, yang dilampaui empat combo flush draw BTN. Dua pertiga pot menuntut sekitar ==28,5%==; dari **40 combo draw BTN, hanya dua yang melampauinya untuk satu kartu berikutnya**. Combo draw 12 outs tidak lagi cukup. Pada A-K-2, sizing terbagi karena seluruh 63 combo sudah pair atau lebih baik, tanpa draw langsung yang perlu dikenai harga.

## Kondisi apa yang menghasilkan angka ini?

**Pot 3-bet-nya sama dengan contoh sebelumnya; hanya flop yang berubah.** Big blind 3-bet menjadi 11bb, button call, lalu keduanya melihat Q♥T♥7♠ dengan pot 22,5bb dan sisa stack 89bb. Pot serta stack inilah yang membedakan kelompok ini dari contoh single-raised pot dalam seri.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | BTN open → **BB 3-bet menjadi 11bb** → BTN call |
| OOP · IP | OOP = BB (3-bettor) · IP = BTN (caller) |
| Flop | Q♥ T♥ 7♠ — dua hati, berarti **two-tone** |
| Pot · stack | Pot 22,5bb · stack efektif 89bb (**SPR 4,0**) |
| Bet size | Sekitar sepertiga (7,4bb) dan dua pertiga (14,9bb) pot |
| Rake | Tidak dimodelkan |
| Tanggal pengamatan | 2026-08-20 |

Pot 22,5bb berasal dari ==11 untuk 3-bet + 11 untuk call + 0,5 small blind yang fold==, sedangkan stack efektifnya ==100 − 11 = 89bb==. Semua nilai solver memakai big blind; bet ditampilkan sebagai jumlah bb sekaligus persentase pot.

## Benarkah range hampir hanya memakai satu ukuran?

**Ya, praktis hampir satu ukuran.** Sebanyak 71,9 dari 73 combo masuk ke bet dua pertiga pot. Bet kecil dan check berbagi 1,1 combo sisanya. Kedua ukuran tersedia dalam tree, jadi dominasi bet besar merupakan hasil pemilihan solver, bukan pembatasan opsi.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Bet 14,9bb (66% pot) | **98,4%** | 71,9 |
| Check | 0,8% | 0,6 |
| Bet 7,4bb (33% pot) | 0,7% | 0,5 |

Jumlah combo tidak bulat karena **dibobot menurut frekuensi**, bukan dibagi menjadi kelompok mutlak. Beberapa hand mencampur sedikit check dan bet kecil ke dalam strategi yang hampir selalu bet besar. Pada frekuensi di bawah satu persen, sulit memisahkan campuran yang berarti dari sisa ketidakpresisian perhitungan; jangan menjadikannya instruksi praktis yang terpisah. Total kedua ukuran bet adalah 99,1%, sedangkan 98,4% khusus ukuran besar. Frekuensi check tetap mengikuti tampilan 0,8%; selisih 0,1 poin persentase pada jumlah seluruh aksi berasal dari pembulatan.

Letakkan dua contoh pot 3-bet berdampingan. Hasilnya sangat berbeda, padahal keduanya memakai SPR 4,0 dan range 3-bet yang sama, terdiri dari 14 jenis hand.

| Flop | Sepertiga | Dua pertiga | Check |
|---|---|---|---|
| A♦K♠2♥ kering rainbow | **57,8%** | 42,2% | 0,0% |
| **Q♥T♥7♠ two-tone, terhubung** | 0,7% | **98,4%** | 0,8% |

## Mengapa board dengan banyak draw mengarah ke bet besar?

**Bet sizing poker perlu memperhitungkan harga yang dapat dibayar range lawan.** Hitung draw yang dimiliki BTN, lalu bandingkan peluangnya dengan kedua ukuran yang tersedia. Pada board kering seperti contoh sebelumnya, draw langsung jauh lebih sedikit; bet kecil masih punya peran yang besar.

| Draw | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Combo draw | 2,7% | 3,0% |
| Flush draw | 2,7% | — |
| OESD | — | **4,5%** |
| Gutshot | **24,7%** | 22,6% |
| Backdoor FD | 26,0% | 27,1% |
| Tanpa draw | 43,8% | 42,9% |

**Jika hanya draw langsung yang dihitung, kedua pihak sama-sama 30,1%.** BB memiliki 2,7% combo draw, 2,7% flush draw, dan 24,7% gutshot. BTN memiliki 3,0% combo draw, 4,5% OESD, dan 22,6% gutshot.

🪶 Backdoor flush sengaja dipisahkan. Hand itu memerlukan dua kartu berturut-turut dengan suit yang dibutuhkan, dengan peluang hanya ==(10 ÷ 47) × (9 ÷ 46) = sekitar 4,2%==. Kebutuhan dua kartu ini berbeda dari draw yang bisa lengkap pada turn. Tabel draw juga memakai **pengelompokan berbeda dari tabel hand yang sudah jadi**: overpair dengan satu hati, misalnya, bisa masuk baris backdoor. Pada [flop K-high kering](/id/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-id.webp"), kategori Tanpa draw mencapai 72,2% untuk BB dan 77,7% untuk BTN.

Menghadapi bet sepertiga pot sebesar 7,4bb, caller memerlukan ==7,4 ÷ (22,5 + 7,4 + 7,4) = sekitar 19,8%==. Berikut perbandingan harganya dengan peluang **satu kartu berikutnya**.

| Draw yang dimiliki BTN | Combo | Outs | Kartu berikutnya | vs 1/3 (19,8%) | vs 2/3 (28,5%) |
|---|---|---|---|---|---|
| Flush + OESD — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31,9%== | ✅ | ✅ |
| Flush + gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25,5%== | ✅ | ❌ |
| OESD — K-J dan 9-8 dengan suit lain | 6 | 8 | ==8 ÷ 47 = 17,0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8,5%== | ❌ | ❌ |

**Dari 40 combo draw BTN, 38 tidak memenuhi harga dua pertiga pot berdasarkan peluang langsung tersebut.** K♥J♥ dan 9♥8♥ menggabungkan flush draw dengan OESD. Lima belas outs cukup untuk melampaui harga **kedua ukuran dalam tree pada perhitungan satu kartu**, tetapi hanya ==2 dari 40== combo — dan ⚠ **outs itu belum tentu bersih**.

BB memiliki tepat empat hand dengan dua hati: A♥K♥, A♥J♥, A♥5♥, A♥4♥. **Semuanya memegang A♥.** Q♥ sudah di board, sehingga A♥Q♥ dan K♥Q♥ tidak mungkin ada. Flush draw K-high dan 9-high BTN bisa kalah terhadap nut flush BB. Pada SPR 4, hati di turn dapat membuat keputusan melibatkan seluruh stack: inilah bahaya reverse implied odds. Jika ukuran turun ke sepertiga pot, combo yang melewati ambang harga menjadi **empat**, sementara 30 gutshot mendapat harga jauh lebih murah. Hand yang sudah jadi dinilai secara terpisah; kelanjutannya tidak hanya bergantung pada peluang menyelesaikan draw.

⚠ **Tabel tadi menghitung satu kartu. Peluang sampai river berbeda, dan kartu berikutnya bisa menuntut pembayaran lagi.** Dengan melihat dua kartu, draw 15 outs mencapai ==sekitar 54,1%==, draw 12 outs ==sekitar 45,0%==, OESD 8 outs ==31,5%==, dan gutshot ==16,5%==. Caller juga mempunyai posisi, sisa stack 74,1bb setelah call, serta opsi raise. Harga flop perlu dibaca bersama kemungkinan aksi berikutnya.

Namun, **caller juga tidak bisa begitu saja fold semua hand**. Menghadapi 14,9bb ke pot 22,5bb, frekuensi bertahan yang membuat pure bluff tanpa equity tidak otomatis untung adalah ==22,5 ÷ (22,5 + 14,9) = 60,2%==, atau minimum defense frequency. Hand BTN yang sudah kuat dalam pengelompokan ini hanya **33,9%**: 6,8 set, 20,3 top pair, dan 6,8 second pair.

🪶 Untuk melewati 60,2%, draw sebenarnya tidak harus dipakai: **33,9% tadi ditambah 36,1% underpair sudah 70,0%.** Bahkan jika 38 combo draw yang tidak memenuhi harga langsung semuanya fold, masih tersisa 71,4% range. Jadi fungsi bet besar lebih luas daripada sekadar mengusir draw: **bagian tengah range BTN harus membayar mahal untuk bertahan**. Pocket pair itu menghadapi Q sebagai overcard, sebagian juga T, serta kemungkinan draw yang lengkap pada kartu berikutnya.

:::note[⚠ MDF mengasumsikan bet berupa pure bluff yang tidak memiliki equity. Banyak hand yang bet di sini tidak memenuhi asumsi itu: 24,7% range BB berupa gutshot, yang tetap memiliki equity saat melakukan bet. Gunakan 60,2% sebagai acuan untuk memahami pertahanan, bukan kuota yang wajib dipenuhi.]:::

🪶 Jangan menyederhanakannya menjadi “flush draw pasti call”. Flush draw tanpa straight draw memiliki sembilan outs: ==9 ÷ 47 = 19,1%==, bahkan di bawah tuntutan bet kecil 19,8%. **Range BTN ini tidak memiliki flush draw tanpa straight draw sama sekali**, seperti tanda kosong pada tabel. Empat hand dua hati semuanya sekaligus punya straight draw: dua gutshot dan dua OESD. Karena itu keempatnya masuk kategori Combo draw. Peluang flush draw sembilan outs sampai river memang ==sekitar 35,0%==, tetapi itu bukan peluang satu kartu yang sedang dibandingkan.

Untuk dasar perhitungannya, baca [peluang menyelesaikan draw](/id/blog/holdem-drawing-odds) dan [pot odds](/id/blog/holdem-pot-odds).

:::pull[Ukuran bet perlu mempertimbangkan hand lawan yang akan membayar, bukan hanya kekuatan hand Anda.]:::

:::note[⚠ Tekstur serupa bisa menghasilkan aksi berlawanan karena peran pemain berbeda. Dalam **single-raised pot**, bagian terkuat range pada flop Broadway two-tone lebih banyak dimiliki raiser. BB yang hanya call hampir selalu check: pada [Q♠J♦T♠](/id/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-id.webp") frekuensinya 99,9%. Anjuran bet besar dengan range terpolarisasi dalam [panduan c-bet](/id/blog/holdem-continuation-bet) membahas posisi raiser, bukan caller. **3-bet mengubah siapa yang memegang peran itu.** Di sini BB adalah raiser dengan range yang sesuai board dan bet hampir seluruh range. Baca aksi preflop sebelum menarik kesimpulan dari tekstur.]:::

## Apa itu geometric bet sizing?

**Geometric sizing berarti memakai fraksi pot yang sama pada setiap street agar bet terakhir tepat menjadi all-in.** Dengan pot 22,5bb dan sisa stack 89bb, pot akhir setelah tiga bet dan tiga call harus mencapai ==22,5 + 2 × 89 = 200,5bb==. Pot perlu tumbuh ==200,5 ÷ 22,5 = 8,91 kali== sepanjang tiga street. Hasilnya sekitar **54% pot, tiga kali**.

Ukuran yang tersedia dalam contoh ini lebih besar, tetapi stack masih bisa dimasukkan sebagai berikut:

- Flop **14,9bb** → setelah call, pot 52,3bb dan sisa stack 74,1bb.
- Turn **34,5bb** → setelah call, sisa stack 39,6bb.
- River **39,6bb** all-in.

**==14,9 + 34,5 + 39,6 = 89,0==.** Tiga bet menghabiskan stack. Bet terakhir adalah 39,6 ke pot 121,3, hanya ==sekitar 33%==. Jadi ini dua bet besar lalu sisa stack, bukan tiga bet besar dengan persentase yang sama.

**Hand yang mampu menjalani seluruh rencana itu jauh lebih sedikit daripada hand yang bet di flop.** Frekuensi bet besar flop mencapai 98,4%. Berdasarkan kekuatan saja, kandidat tiga street adalah set dan overpair, ==6 + 12 = 18 combo==. As-high di bagian bawah range perlu menilai ulang setelah flop. ⚠ Ini pembacaan kategori, bukan hasil solve lanjutan: tanpa node turn atau river, layar tidak memastikan bahwa 18 combo tersebut selalu memasukkan stack, maupun menentukan nasib 15 combo top pair. **Top pair justru membutuhkan keputusan tersendiri**, sehingga rencananya perlu Anda pikirkan sebelum bet.

Itulah kegunaan **SPR 4,0**: bukan hanya menunjukkan jumlah chip di belakang, tetapi membantu memperkirakan berapa kali bet masih bisa dilakukan. Setelah bet 14,9bb dibayar, SPR turn menjadi ==74,1 ÷ 52,3 = 1,4==. Bet berikutnya sudah berpotensi melibatkan sebagian besar stack.

Karena itu, harga draw tidak berhenti di flop. Semua peluang sampai river tadi mengasumsikan kedua kartu dapat dilihat. Pada jalur dua pertiga pot, caller mungkin harus membayar dua street lagi. Memulai dengan bet kecil menurunkan harga langsung, **tetapi tidak menjamin kartu berikutnya gratis**.

## Mengapa hand tanpa pair tetap bet?

**Sebanyak 38,4% range BB berupa As-high, dan sebagian besar memiliki straight draw.** Dari 73 combo, ada 28 As-high; seluruh 18 gutshot berada dalam kelompok ini. Tanpa pair bukan berarti tanpa equity: ada outs menuju Broadway, kemungkinan membentuk pair, dan fold equity yang langsung memenangkan pot.

| 28 combo As-high | Combo | Susunannya |
|---|---|---|
| AK | 16 | **Satu J** melengkapi A-K-Q-J-T. Ada 15 gutshot; A♥K♥ juga punya flush draw sehingga menjadi Combo draw |
| AJs | 4 | Menuju A-K-Q-J-T juga, tetapi memerlukan **K**. Ada 3 gutshot; A♥J♥ menjadi Combo draw |
| A5s · A4s | 8 | A♥5♥ dan A♥4♥ adalah dua flush draw tanpa straight draw |

Dengan Q dan T di board, **A-K dan A-J mengejar straight A-K-Q-J-T yang sama, tetapi belum memiliki pair**. AK mempunyai dua overcard terhadap Q; AJ hanya memiliki A sebagai overcard, sedangkan J melengkapi bagian lain dari gutshot-nya. Jika lawan fold, pot langsung dimenangkan. Jika dibayar, masih ada peluang membaik.

JJ dan 99 berbeda. **Keduanya tidak memiliki straight draw satu kartu.** JJ bersama Q dan T masih membutuhkan dua kartu, misalnya K dan 9, atau A dan K, untuk membentuk straight. Pair tampak lebih kuat saat ini, tetapi A-K bisa langsung menjadi straight dengan satu kartu berikutnya.

## Apa sebenarnya isi range button?

**Lebih dari sepertiga range BTN, yaitu 36,1%, adalah underpair terhadap Q.** Itu tidak berarti semua pair berada di bawah kedua kartu Broadway: JJ lebih tinggi daripada T. Bagian lain terdiri dari hand yang mengenai Q, pair T, draw, serta hand yang belum membentuk kombinasi. Salah satu baris berikut mudah disalahartikan jika Anda hanya membandingkan persentase.

![Komposisi range pot 3-bet Q-T-7 two-tone; overpair hanya ada pada BB dan second pair hanya ada pada BTN](/images/gto-3bp-dynamic-ranges-id.webp "Pot 3-bet Q-T-7 · overpair milik BB, second pair milik BTN")

| Kategori | BB (3-bettor) | BTN (caller) |
|---|---|---|
| Set/Trips (di sini set) | **8,2%** | 6,8% |
| Overpair | **16,4%** | — |
| Top Pair (Q) | 20,5% | 20,3% |
| Second Pair (T) | — | **6,8%** |
| Underpair | 16,4% | **36,1%** |
| Ace-High | **38,4%** | 24,1% |
| King-High atau Belum jadi | — | 6,0% |

Dua baris menjelaskan perbedaannya, tetapi salah satunya mengandung jebakan.

**Overpair benar-benar hanya dimiliki BB:** 16,4% berbanding nol, sebab range caller dalam contoh ini tidak memasukkan **pocket** As atau K. Kartu As dan K sendiri tetap banyak: 32 combo A-K dan A-J berada dalam kategori Ace-High. Ketiadaan pocket As/K adalah **asumsi range preflop yang dimasukkan ke tree**, bukan temuan solver. Range lain dapat menyimpan sebagian hand itu untuk melindungi bagian terkuat range call.

**Set tidak dimonopoli BB meski persentasenya lebih tinggi.** Sebanyak 8,2% dari 73 combo adalah 6; 6,8% dari 133 combo adalah 9. **BTN justru mempunyai lebih banyak set.** Persentase lebih kecil pada range yang lebih lebar dapat menghasilkan jumlah lebih besar. Panel ID menggabungkannya sebagai *Set/Trips*. Karena flop ini tidak berpasangan, pocket pair yang mengenai satu kartu board membentuk **set**; perbedaannya dibahas pada [contoh board berpasangan](/id/blog/paired-board-strategy).

Second pair hanya ada pada BTN karena **range 3-bet BB tidak mempunyai hand dengan tepat satu T**. TT memang ada, tetapi membentuk set dan masuk kategori yang lebih tinggi.

Top pair sendiri hampir seimbang, 20,5% melawan 20,3%. **Perbedaan penting range ini berada di atas dan di bawah top pair.**

## Mengapa EQR 117,8% saat equity hanya 58,3%?

**BB merealisasikan sekitar 1,18 kali bagian pot yang diwakili equity-nya meski bertindak lebih dulu.** Angka itu melebihi 109,6% pada A-K-2, tetapi **tidak berarti spot ini lebih menguntungkan**. EV BB justru turun dari 16,99bb menjadi **15,46bb**.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58,3% | 41,7% |
| EV (bb) | 15,46 | 7,04 |
| **Realisasi equity** | **117,8%** | 75,1% |

Dalam pot 22,5bb, equity 58,3% setara ==22,5 × 58,3% = 13,12bb==. EV 15,46bb menghasilkan ==15,46 ÷ 13,12 = 117,8%==.

Selisih equity lebih kecil daripada A-K-2, yang mempunyai 68,9% melawan 31,1%, tetapi EQR lebih tinggi. **Sebagian penyebabnya adalah penyebut yang mengecil.** EQR membandingkan EV dengan bagian pot Anda sendiri; ketika equity mendekati 50%, kelebihan EV yang sama menjadi kelipatan lebih besar.

⚠ Namun, kelebihan EV-nya juga benar-benar bertambah. Pada A-K-2, nilainya ==16,99 − 22,5 × 68,9% = sekitar 1,49bb==. Di sini ==15,46 − 22,5 × 58,3% = sekitar 2,34bb==. Yang mengecil adalah bagian pot menurut EV: dari ==16,99 ÷ 22,5 = 75,5%== menjadi ==15,46 ÷ 22,5 = 68,7%==. EQR lebih tinggi dan memperoleh bagian pot lebih besar adalah dua pernyataan berbeda.

EQR BTN sebesar 75,1% juga bukan bukti yang berdiri sendiri. Kedua EV berjumlah sama dengan pot; ketika satu pihak melebihi bagian equity-nya, pihak lain berada di bawahnya. Keunggulan BB bertumpu pada overpair yang tidak dimiliki BTN dan kemampuan memberi harga mahal kepada hand menengah lawan. Alasan posisi biasanya bernilai dibahas dalam [strategi posisi](/id/blog/holdem-position-play).

:::note[Semua EQR dalam seri ini dikutip sesuai tampilan solver. Membagi equity dan EV yang sudah dibulatkan dapat menghasilkan selisih pada angka desimal; itu akibat pembulatan, bukan pertentangan hasil.]:::

## Apa yang bisa Anda terapkan di meja?

Bagian ini mengasumsikan **heads-up, pot 3-bet, SPR 4**. Tambahkan cold-caller, ubah range, atau pendekkan stack, dan kebijakan bet hampir seluruh range harus dinilai ulang.

- **Tentukan ukuran dari board dan range sebelum melihat hand Anda sendiri.** Selalu bet besar saat kuat dan kecil saat lemah membuat pola mudah dibaca. Dalam contoh ini, satu ukuran menampung 98,4% range.
- **Pada pot 3-bet dengan dua jenis draw, pertimbangkan ukuran besar terlebih dahulu.** Sepertiga pot memberi harga 19,8%, yang dilampaui empat combo flush draw BTN dalam contoh ini. ⚠ Namun, draw bukan syarat wajib untuk bet besar. [Board 8-5-2](/id/blog/3bet-pot-low-board), dengan 78,3% range Tanpa draw, juga memakai ukuran besar 97,8%; penyebabnya adalah **range terpolarisasi**. Baca kepadatan draw bersama bentuk range. Untuk single-raised pot, peran pemainnya berbeda seperti dijelaskan sebelumnya.
- **Jangan otomatis check A-K hanya karena tidak pair.** Pada Q-T-7, AK memiliki gutshot menuju Broadway. Pada board lain AK bisa lebih sering check, tetapi itu bukan aturan mutlak: pada 8-5-2, AK tetap berada dalam range yang memakai bet besar 97,8%. Kedua hasil agregat ini tidak memberi frekuensi setiap combo AK. Periksa bentuk seluruh range, bukan hanya ada atau tidaknya draw pada hand Anda.
- **★Hasil flop belum merupakan rencana sampai river.** Bet 14,9bb yang dibayar menurunkan SPR turn ke 1,4. Tentukan lebih dulu hand mana yang siap melibatkan stack. **Hati di turn punya dua sisi:** empat combo draw hati BTN membaik, tetapi empat hand dua hati BB juga demikian, dan semuanya memiliki A♥. Saat Anda memegang A♥, dua dari empat combo hati BTN tidak mungkin ada. Untuk As-high tanpa hati, J sebagai out tidak hilang seluruhnya, tetapi J♥ bisa sekaligus melengkapi flush lawan. Satu ukuran flop tidak menjawab semua situasi itu.
- **★Siapkan respons terhadap raise.** Jika hampir seluruh range bet, hand lemah pun bisa menghadapi raise. Pada SPR 4, raise besar dapat menuntut keputusan mengenai stack. Set dan overpair merupakan kandidat untuk melanjutkan. **As-high tanpa dua hati — 24 dari 28 combo — paling rentan harus fold**, karena gutshot saja hanya punya empat outs. Empat hand dua hati lebih layak dipertimbangkan untuk lanjut; A♥K♥ dan A♥J♥ paling kuat di antaranya karena juga mempunyai gutshot. Top pair memerlukan penilaian tersendiri. Ini panduan membaca range, bukan respons raise yang dihitung oleh contoh flop ini.
- **★Dari kursi BTN, rencanakan batas kelanjutan pocket pair.** Underpair mengisi 36,1% range call. Jangan memperlakukan **MDF 60,2% sebagai kuota call atau batas atas**: itu acuan berdasarkan pure bluff tanpa equity. Sementara itu, **45,1% range BB sudah set, overpair, atau top pair**: 8,2 + 16,4 + 20,5. Berapa pertahanan optimal yang sebenarnya tidak dijawab oleh solve ini. Bet besar berikutnya pada turn dapat membuat banyak pocket pair harus fold; call flop tanpa rencana itulah yang berisiko membuang chip. Node turn tidak tersedia, sehingga ini pertimbangan praktis, bukan frekuensi terukur.

:::readnext[Lanjut membaca]
/id/blog/3bet-pot-cbet | BB Tidak Check di A-K-2: Mengapa? | /images/gto-3bp-ace-king-oop-id.webp
/id/blog/3bet-pot-low-board | Jarang Kena Flop, Bet Besar 97,8%? | /images/gto-3bp-low-oop-id.webp
:::

## Cara memeriksa hasilnya di solver poker

Buka [solver GTO gratis](/id/solver), lalu pilih **Spot belajar → Board dinamis two-tone → ⚡ Lihat hasil**.

Perhatikan ringkasan aksi: **Bet 14,9bb (66% pot) · 98,4% · 71,9 combo**. Dua opsi lainnya sama-sama di bawah satu persen. Lalu ganti **Pemain** ke **IP (BTN)** dan lihat kategori yang tidak muncul: **tidak ada baris Overpair maupun Flush draw**. Kategori bernilai nol tidak digambar; dua ketiadaan itu menjelaskan banyak hal dalam artikel ini.

Selanjutnya buka **Trainer GTO** di sidebar. Hand dipilih sesuai bobot range, lalu hasil menampilkan frekuensi campuran dan **kerugian EV dalam bb**. Gratis, tanpa instal dan tanpa akun.

Bandingkan dengan A♦K♠2♥ pada contoh sebelumnya. Flop rainbow itu **tidak memungkinkan flush draw langsung bagi siapa pun**, dan seluruh range BB sudah pair atau lebih baik. Pada Q-T-7, kategori Tanpa draw hanya 43,8%. ⚠ Sisa 56,2% bukan semuanya draw langsung: 26,0 poin persentase adalah **backdoor**, yang memerlukan dua kartu dengan suit yang dibutuhkan dan hanya lengkap sekitar 4,2%. Draw langsung berjumlah 30,1%.

Kepadatan draw tetap bukan seluruh penjelasan: [flop 8-5-2](/id/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-id.webp") memiliki 78,3% Tanpa draw, tetapi ukuran besarnya tetap dipilih 97,8%. Bentuk range ikut menentukan.

## Pertanyaan umum

**Q. Bagaimana menentukan ukuran bet dalam poker?**

A. Periksa apa yang bisa dimiliki dan dibayar lawan pada board itu. Di Q-T-7 dengan dua hati, solver memilih dua pertiga pot 98,4%. Pada A-K-2 kering, range preflop yang sama lebih sering memakai sepertiga pot, 57,8%. Bandingkan harga yang diberikan kepada hand yang masih bisa membaik, serta bentuk range kedua pihak.

**Q. Mengapa bet besar berguna pada board dengan banyak draw?**

A. Harga satu kartu berikutnya menjadi lebih mahal. Dua pertiga pot membutuhkan sekitar 28,5% equity. Hanya dua dari 40 combo draw BTN yang melewatinya: K♥J♥ dan 9♥8♥, dengan 15 outs dan peluang 31,9%. Combo draw 12 outs hanya 25,5%. Sepertiga pot menurunkan ambang ke 19,8%, sehingga empat combo melewatinya. Namun, range terpolarisasi pada [board kering 8-5-2](/id/blog/3bet-pot-low-board) juga dapat memakai bet besar 97,8%.

**Q. Apa maksud geometric bet sizing?**

A. Memakai fraksi pot yang sama pada setiap street agar bet terakhir tepat menjadi all-in. Ini membantu pada SPR rendah, ketika pemilihan ukuran sekaligus menentukan berapa keputusan masih tersisa. Perhitungan di atas menunjukkan bahwa ukuran yang dipakai solver dalam contoh ini lebih besar daripada ukuran geometrisnya.

**Q. Apakah overbet akan lebih baik di sini?**

A. Tree ini hanya menyediakan sepertiga dan dua pertiga pot, sehingga overbet tidak diuji. Jika opsi itu ditambahkan, frekuensi 98,4% dapat terbagi dengan ukuran baru. Harga bagi draw lawan tetap menjadi pertimbangan, tetapi hasilnya perlu dihitung ulang. Angka sekarang hanya berlaku untuk opsi dalam tree ini.

**Q. Apakah A-K tanpa pair boleh bet di Q-T-7?**

A. Ya. Satu J melengkapi A-K-Q-J-T, sehingga AK memiliki gutshot. Sebanyak 15 dari 18 combo gutshot BB adalah AK. Fold lawan langsung memenangkan pot; jika dibayar, outs masih ada. Hubungan hand dengan board dan bentuk range lebih berguna daripada sekadar melihat dua kartu tinggi.

**Q. Bagaimana jika lawan selalu call draw tanpa memikirkan harga?**

A. Fold equity berkurang dan hasil ini tidak lagi menggambarkan respons lawan Anda, sebab perhitungan mengasumsikan pertahanan optimal. Terhadap calling station, kurangi bluff dan prioritaskan value sambil tetap mempertimbangkan ukuran besar. Keuntungan value datang dari lawan yang membayar terlalu mahal untuk peluangnya.

**Q. Apakah frekuensi ini bisa langsung dipakai dalam permainan saya?**

A. Gunakan sebagai titik awal jika kondisinya sesuai. Range 3-bet, kedalaman stack, opsi sizing, dan rake dapat mengubah hasil; rake tidak dimodelkan di sini. Pelajarannya adalah hubungan antara tekstur, range, dan harga dalam pot 3-bet SPR 4. **Peringkat kartu board juga penting:** Q-T-7 masih cukup tinggi untuk mengenai range 3-bet ini. Tidak semua flop dengan banyak draw memiliki sifat yang sama.
`.trim(),
};

export default POST;
