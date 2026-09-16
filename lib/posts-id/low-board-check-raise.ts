import type { Post } from "../posts";

// ID series ⑦: current EN source; precomputed root and the historical follow-up solve remain separate.
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Kapan Check-Raise di Flop 6-5-2?",
  seoTitle: "Check Dulu, Raise Kapan? — Poker di Flop 6-5-2",
  desc: "BB check 96,8% pada 6-5-2. Pelajari mengapa lead jarang dipilih, lalu bedakan hasil awal dengan perhitungan lanjutan untuk check-raise.",
  tldr: "Pada 6♠5♥2♦, BB check 96,8% dan lead 3,2%, meski equity 48,3% adalah yang tertinggi kedua dari tujuh contoh BTN vs BB. Hanya 4-3 yang membentuk straight, dan hand itu tidak ada dalam kedua range. Kedua pemain sama-sama memiliki set, sehingga BB tidak unggul di puncak range. Dalam perhitungan lanjutan yang terpisah, BB check-raise 14,9% saat menghadapi bet 1,8bb, menggunakan set, two pair, dan banyak straight draw.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "11 mnt",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-id.webp",
  imageAlt: "Hasil solver pada flop 6♠5♥2♦, matriks 13×13 BB hampir seluruhnya hijau untuk check dengan sedikit garis oranye untuk lead",
  keepImagesInBody: true,
  tags: ["check raise poker", "kapan check-raise", "wet board", "flop rendah rainbow", "solver GTO", "gutshot"],
  content: `
Flop **6♠ 5♥ 2♦** terdiri atas tiga kartu rendah dengan tiga suit berbeda. Tidak ada flush draw langsung; flush memerlukan kartu yang tepat pada turn sekaligus river.

Sekilas, ini board yang seharusnya menguntungkan serangan BB. Equity BB mencapai **48,3%**, tertinggi kedua dari tujuh contoh dalam seri ini saat BB mempertahankan blind sebagai caller. Angkanya lebih tinggi daripada 45,1% pada [flop A-high](/id/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-id.webp") dan 46,3% pada flop K-high.

Tetapi BB hanya lead **3,2%**.

Penjelasannya dimulai dari satu hand: **hanya 4-3 yang dapat membentuk straight pada 6-5-2, dan kedua range tidak memilikinya**. Angka berikut berasal dari [solver GTO gratis](/id/solver) HoldemMaster, dengan hasil awal dan perhitungan lanjutan dibedakan secara jelas.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | 6♠ 5♥ 2♦ (rendah, rainbow)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb (SPR sekitar 17,7)
Hasil | BB check 96,8% — equity tinggi tanpa keunggulan di puncak range
:::

> **Jawaban singkat**
> Mulai dengan check, lalu pilih hand yang tepat untuk check-raise setelah BTN bet. Equity cukup tinggi tidak otomatis membenarkan lead; pada board ini BB tidak memiliki keunggulan pada hand terkuat. Perhitungan lanjutan yang terpisah menunjukkan semua set BB melakukan raise, didampingi two pair dan straight draw. Draw tersebut memungkinkan bluff tetap membaik ketika lawan call.

## Kondisi apa yang menghasilkan angka ini?

BTN open 2,5bb, BB call, dan pemain lain fold. Pot heads-up berisi 5,5bb dengan sisa stack efektif 97,5bb. **Ada satu perbedaan dari contoh sebelumnya: hanya satu ukuran bet yang tersedia.**

| Kondisi | Nilai |
|---|---|
| Aksi preflop | Button (BTN) open 2,5bb · big blind (BB) call · pemain lain fold |
| Range | Perkiraan permainan online standar 100bb |
| Flop | 6♠ 5♥ 2♦ (rainbow — tiga suit berbeda) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb (SPR sekitar 17,7) |
| Bet size | Sekitar 33% pot — **hanya satu ukuran** |
| Rake | Tidak diperhitungkan |
| Tanggal pengamatan | 2026-08-20 |

Pot 5,5bb berasal dari ==2,5 open + 2,5 call + 0,5 small blind yang fold==, sedangkan stack efektif ialah ==100 − 2,5 = 97,5bb==.

Pilihan tunggal ini penting saat membaca layar. Contoh sebelumnya menawarkan 33% dan 75%; contoh ini hanya dihitung dengan 33%. Karena itu, **baris “Bet 4,1bb” memang tidak tersedia**. Bukan hasil yang hilang atau ukuran yang dinilai buruk: opsi tersebut tidak dimasukkan ke pohon keputusan.

## Seberapa sering BB check pada 6-5-2?

**96,8%.** Dari total bobot 487 combo, 15,3 dialokasikan untuk bet dan 471,7 untuk check.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **96,8%** | 471,7 |
| Bet 1,8bb (33% pot) | **3,2%** | 15,3 |

Frekuensi lead 3,2% bukan satu hand tertentu yang selalu mencoba mencuri pot. Ia tersebar tipis di berbagai hand. Dalam analisis sumber, lead ini merupakan pilihan yang hampir tidak berbeda EV-nya dari alternatifnya; karena itu frekuensinya dapat sedikit bergeser antarperhitungan.

## Mengapa lead 3,2% di sini, tetapi 23,7% pada 9-8-7?

**Rata-rata equity dan kelayakan bet lebih dulu bukan ukuran yang sama.** Urutan frekuensi lead tujuh spot berikut tidak mengikuti urutan equity.

| Flop | Artikel | Equity BB | Lead BB |
|---|---|---|---|
| Q♠J♦T♠ Broadway (two-tone) | ③ | 46,7% | 0,1% |
| K♠8♦3♣ kering | ② | 46,3% | 0,2% |
| A♥7♦2♣ kering | ① | 45,1% | 1,9% |
| 6♣6♦3♥ berpasangan | ⑥ | 47,2% | 3,0% |
| **6♠5♥2♦ rendah rainbow** | **⑦** | **48,3%** | **3,2%** |
| Q♠9♠2♠ monotone | ⑤ | 47,7% | 11,2% |
| 9♥8♥7♣ terhubung | ④ | 48,5% | 23,7% |

Board dengan equity paling rendah, 45,1%, justru memiliki lead lebih sering daripada Broadway dengan 46,7%. [Flop monotone](/id/blog/monotone-board-strategy) memiliki equity **lebih rendah** daripada 6-5-2, yaitu 47,7% lawan 48,3%, tetapi lead lebih dari tiga kali lebih sering.

Bandingkan ⑦ dan ④: equity hanya berbeda **0,2 poin persentase**, tetapi lead-nya **3,2% lawan 23,7%**.

**Pembeda besarnya ialah straight yang sudah jadi.** Pada [9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), BB memiliki 24 combo straight: J-T, T-6 suited, dan 6-5 suited. Pada 6-5-2, hanya **4-3** yang melengkapi ==2-3-4-5-6==. Untuk membentuk straight 5-6-7-8-9, Anda memerlukan 7, 8, dan 9: **tiga kartu, padahal hole card hanya dua**.

4-3 tidak ada dalam kedua range. Panel kategori solver **tidak menampilkan baris “Straight”**, dan sel 43s serta 43o berwarna abu-abu pada kedua matriks. Baik versi suited maupun offsuit tidak tiba pada flop ini dalam range yang digunakan.

:::pull[Hanya satu kombinasi rank yang membentuk straight pada board ini, dan kedua range tidak memilikinya.]:::

## Apa perbedaan kedua range pada 6-5-2?

**BB memiliki lebih banyak pair yang terbentuk dengan board, tetapi BTN memiliki lebih banyak overpair.** Set dan two pair seimbang. Hampir tiga perempat kedua range belum memiliki pair, sehingga overcard dan peluang membaik masih sangat penting. Menghitung siapa yang sekadar mengenai flop belum cukup untuk menentukan siapa yang harus bet.

![Perbandingan range pada 6♠5♥2♦, BB lebih banyak memiliki pair board sementara BTN lebih banyak memiliki overpair](/images/gto-srp-low-rainbow-ranges-id.webp "6♠5♥2♦ · komposisi hand yang menjadi dasar pembahasan check-raise")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trips | 1,8% | 1,8% |
| Two Pair | 0,4% | 0,4% |
| Overpair | 4,9% | **9,5%** |
| Top Pair (satu kartu enam) | **7,4%** | 5,4% |
| Second Pair (satu kartu lima) | **6,2%** | 4,2% |
| Pair lemah | **3,7%** | 2,4% |
| Underpair | **2,5%** | 2,4% |
| Ace-High | 23,0% | **28,6%** |
| King-High | **15,6%** | 14,3% |
| Belum jadi | **34,5%** | 31,0% |

Top Pair, Second Pair, dan Pair lemah berjumlah **17,3% untuk BB dan 12,0% untuk BTN**. Keunggulan itu nyata, tetapi bukan keunggulan yang otomatis ingin membangun pot tanpa posisi. Hand tersebut dapat mengisi pilihan check-call dan, untuk combo yang sesuai, check-raise.

Dua baris berikut menjelaskan batas kekuatan BB:

- **Set/Trips sama-sama 1,8%.** Itu nama gabungan kategori pada aplikasi. Karena 6-5-2 tidak berpasangan, isinya di sini adalah **set**, bukan trips. Hanya 66, 55, dan 22 yang membentuknya, masing-masing ==3 combo== karena satu kartu dari setiap rank berada di board. Kedua pemain memiliki sembilan combo set; keduanya mencapai hand terbaik yang tersedia dalam range masing-masing.
- **Overpair 4,9% lawan 9,5%, hampir dua kali lipat.** Overpair pada flop ini ialah pocket pair di atas enam, dari 77 sampai AA. BB sudah memakai JJ ke atas untuk 3-bet preflop, sehingga hanya menyisakan **77 sampai TT** sebagai caller. BTN mempertahankan seluruh bagian atas tersebut.

## Mengapa equity 48,3% hanya terealisasi sebesar 84,3%?

**Equity adalah bagian pot berdasarkan kekuatan kartu; EQR membandingkannya dengan EV yang dapat dihasilkan strategi.** Keduanya tidak harus sama, terutama ketika BB harus beraksi lebih dulu.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48,3% | 51,7% |
| EV (bb) | 2,24 | 3,26 |
| **Realisasi equity** | **84,3%** | **114,7%** |

Dalam pot 5,5bb, equity 48,3% setara dengan ==5,5 × 48,3% = 2,66bb==. EV BB hanya **2,24bb**. Rasio ==2,24 ÷ 2,66== menjelaskan EQR **84,3%**. BTN memiliki bagian equity sekitar 2,84bb tetapi EV 3,26bb, sehingga EQR **114,7%**. Perhitungan ulang dari angka yang dibulatkan dapat berbeda sekitar sepersepuluh poin; solver memakai nilai yang belum dibulatkan.

Pada [flop A-high](/id/blog/a-high-board-cbet), BB memiliki equity **45,1%** dan EQR **84,0%**. Equity bertambah sekitar tiga poin di sini, tetapi proporsi yang terealisasi hampir sama. Sebaliknya, pada 9-8-7 BB mencapai EQR **93,2%**: straight yang dimilikinya mendukung sebagian lead meski tanpa posisi.

**Tambahan equity saja belum mengatasi kerugian posisi ketika BB tidak unggul di puncak range.**

## Kapan BB melakukan check-raise pada flop ini?

**Setelah BTN bet, dengan bagian range yang memperoleh manfaat dari raise.** Dalam perhitungan lanjutan terpisah, BB raise **14,9%** saat menghadapi bet 1,8bb.

:::note[**Bagian ini memakai perhitungan yang berbeda.** Hasil Spot belajar di aplikasi berhenti pada keputusan pertama flop, sehingga panel aksinya tidak membuka respons terhadap bet. Data lanjutan berasal dari perhitungan ulang pada **2026-08-20** dengan pohon yang sama: bet 33%, raise 60%, pot 5,5bb, stack 97,5bb. Perhitungan memakai **190 iterasi**, 16-bit integer, dan 12 thread. Exploitability tercatat **0,16 dalam satuan internal saat itu, setara 0,016bb atau sekitar 0,29% pot**. Saat itu input pot 55 dan stack 975 memakai satuan 0,1bb. Semua angka pada dua tabel berikut berasal dari perhitungan tersebut, bukan hasil awal Spot belajar dan bukan perhitungan baru untuk artikel ID ini.]:::

Pertama, tindakan BTN setelah BB check:

| BTN setelah BB check | Frekuensi | Combo |
|---|---|---|
| Bet 1,8bb (33% pot) | **63,0%** | 316,5 |
| Check back | 37,0% | 186,5 |

Lalu respons BB:

| BB menghadapi bet 1,8bb | Frekuensi | Combo |
|---|---|---|
| **Raise hingga total 7,3bb** | **14,9%** | 69,7 |
| Call | **65,6%** | 314,6 |
| Fold | 19,5% | 93,2 |

Persentase tampilan tidak selalu sama dengan hasil pembagian bobot combo pada node ini. Sebanyak 69,7 combo dari 477,5 yang mencapai node menghasilkan ==69,7 ÷ 477,5 = 14,6%==, sementara panel menunjukkan 14,9%. Pembagian 316,5 dengan 503 pada sisi BTN juga tidak menghasilkan tepat 63,0% seperti di layar. Tabel mempertahankan nilai yang ditampilkan aplikasi; jangan mengganti persentasenya dengan pembagian sederhana.

Ada dua hal penting dalam respons BB.

**Raise ini sekitar 60% pot, bukan pot-sized raise.** Total raise 7,3bb memang sama dengan ==5,5 + 1,8 = 7,3==, tetapi ukuran pot-sized dihitung dari pot **setelah** menyamai taruhan: ==5,5 + 1,8 + 1,8 = 9,1==. Pot-sized raise akan menjadi total **10,9bb**. Ukuran aktualnya ialah ==(7,3 − 1,8) ÷ 9,1 = 60%== setelah pembulatan, sesuai input raise 60%. Totalnya sedikit lebih dari empat kali bet: ==7,3 ÷ 1,8 = 4,06==, bukan tambahan empat kali di atas call.

**BB hanya fold 19,5%**, sehingga bertahan **80,5%** melalui call dan raise. Acuan MDF terhadap bet 1,8bb ke pot 5,5bb ialah ==5,5 ÷ (5,5 + 1,8) = 75,3%==. Angka tersebut membuat pure bluff dengan equity nol tidak otomatis untung. Hasil lanjutan ini melampauinya: banyak hand rendah masih punya alasan melanjutkan melalui pair, high card, atau draw.

:::note[Root pada perhitungan ulang menghasilkan lead **2,0% / 9,5 combo**, berbeda dari hasil awal **3,2% / 15,3 combo**. Sisa bobot **477,5 combo** memilih check; itulah induk node respons BB dalam tabel. Kategori hand, draw, equity, EV, dan EQR sama pada presisi tampilan. Lead merupakan pilihan yang hampir tidak berbeda EV, sehingga frekuensinya dapat bergeser selama proses konvergensi. Kedua hasil mendukung kesimpulan “hampir tidak pernah lead”, tetapi tetap merupakan dua sumber angka berbeda. Perhitungan Anda tidak harus berhenti pada frekuensi persis yang sama.]:::

## Hand apa yang membentuk range check-raise?

**Semua set, kedua combo two pair, lalu banyak straight draw.** Pemeriksaan sumber mencakup seluruh 487 baris tabel per-hand, bukan hanya layar pertama. Ketika diurutkan berdasarkan frekuensi raise, bagian atasnya menunjukkan pola berikut.

| Hand | Jenis hand | Frekuensi raise |
|---|---|---|
| 66 · 55 · 22 | Three of a kind — **seluruh sembilan combo** | **100%** |
| 65s | Two Pair — hanya 6♦5♦ dan 6♣5♣, karena 6♠ dan 5♥ berada di board | **100%** |
| 64s | Top Pair **dan** Gutshot | **100%** — dua dari tiga combo |
| 98s | Gutshot ke tujuh — equity **35,8%** | 99%+ |
| 87s | OESD, membutuhkan empat atau sembilan — equity **46,2%** | 80–83% |
| J4s · Q4s | Gutshot ke tiga tanpa pair | 67–90% |
| 54s | Second Pair dan Gutshot | 74–75% |

Di bawah two pair, **semua contoh dalam daftar ini memiliki straight draw**. 64s dan 54s memang juga mengenai board, tetapi draw-nya memberi alasan tambahan untuk raise:

- **98s** memiliki 5-6-8-9 dan memerlukan ==7==.
- **87s** memiliki 5-6-7-8 dan memerlukan ==4 atau 9==. Ini satu-satunya OESD **di dalam range contoh ini**, bukan satu-satunya yang mungkin pada board. **74 membentuk 4-5-6-7**, menunggu 3 atau 8; 84 juga memiliki double gutshot dengan delapan outs. Nilai OESD 0,8% menunjukkan bahwa 74 suited tidak masuk range, bukan bahwa board hanya mengizinkan satu kelas OESD.
- **J4s, Q4s, 54s, dan 64s** memiliki 2-4-5-6 dan memerlukan ==3==.

**High card bukan alasan pemilihan hand di bagian atas daftar tersebut.**

Tujuh baris ini hanya mencakup sekitar 30 dari 69,7 combo yang raise. Sisa kontribusi berasal dari hand lain dalam range dengan frekuensi lebih rendah. Jangan membacanya sebagai daftar lengkap seluruh hand yang pernah check-raise.

Porsi value juga relatif kecil. Set dan two pair berjumlah **2,2%** range: ==2,2% × 487 ≈ 11 combo== dari 69,7 combo raise. Bahkan dengan menambahkan dua kelas yang juga mengenai pair board, **kurang dari satu dari empat combo raise merupakan hand jadi** dalam pengelompokan ini. Banyak combo yang memasukkan uang masih memiliki peluang membaik ketika lawan call.

Distribusi draw menjelaskan bahan yang tersedia bagi BB:

| Draw | BB | BTN |
|---|---|---|
| OESD | 0,8% | 0,8% |
| **Gutshot** | **18,5%** | 13,9% |
| Backdoor FD | **20,5%** | 18,5% |
| Tanpa draw | 60,2% | **66,8%** |

**Gutshot 18,5% lawan 13,9%** adalah kelebihan BB yang relevan untuk menyusun raise. Set seimbang 1,8%, sementara overpair tertinggal 4,9% lawan 9,5%. Solver menggunakan sebagian kelebihan draw itu untuk agresi; angka tersebut tidak berarti setiap gutshot selalu raise.

## Apakah 6-5-2 termasuk wet board atau dry board?

**Kering di bagian hand terkuat, tetapi masih memberi banyak draw di bawahnya.** Wet board menyediakan banyak kemungkinan straight atau flush, sedangkan dry board lebih sedikit. Pada 6-5-2, label tunggal tidak cukup menjelaskan keputusan.

Tidak ada flush draw langsung dan tidak ada straight jadi dalam kedua range. Puncak kekuatan yang tersedia adalah set, dengan jumlah sama pada kedua pemain. Dalam pengertian itu board ini kering.

Namun, **19,3% range BB memiliki straight draw**: 0,8% OESD dan 18,5% gutshot. Sebanyak 20,5% lagi masuk kategori backdoor flush, sedangkan 60,2% tidak memiliki draw. Jadi, banyak hand yang belum jadi masih dapat melanjutkan.

Kombinasi tersebut menjelaskan strategi di atas: **BB tidak memiliki keunggulan pada hand terkuat untuk mendukung banyak lead**, tetapi cukup banyak hand untuk melawan taruhan kecil. [Q♠9♠2♠](/id/blog/monotone-board-strategy) memberi kontras: nut flush sudah mungkin terbentuk dan kedua pemain harus mempertimbangkannya. Keputusan bet mengikuti distribusi hand kuat dan cara range saling menghadapi, bukan sekadar jumlah hand yang sedikit mengenai flop. Prinsip ini juga dibahas dalam panduan [c-bet](/id/blog/holdem-continuation-bet).

## Apa yang dapat Anda terapkan saat bermain?

- **Jangan lead hanya karena “sudah mengenai flop”.** Equity 48,3% belum cukup menjadi alasan. Seluruh range BB lead 3,2%, tersebar dengan frekuensi rendah. Bet tunggal sepertiga pot memberi BTN harga call sekitar **19,8%**. Ace-High dan King-High-nya berjumlah **42,9%** range dan memiliki equity di atas harga itu. Lead tidak otomatis membuat semuanya fold, sementara range yang call juga memuat hand yang mengalahkan Anda.
- **Dalam node lanjutan ini, semua set memilih check-raise.** Sembilan combo set raise 100%. Setelah BTN bet, hanya call dengan semuanya akan melewatkan kesempatan membesarkan pot. Ini hasil untuk kondisi dan node yang ditampilkan, bukan aturan bagi setiap board rendah.
- **Pilih bluff berdasarkan draw.** Gutshot mengisi banyak agresi. As-high tanpa draw, seperti A-J dan A-9, lebih cocok mengisi bagian call **65,6%** daripada dijadikan bluff otomatis. A-K tidak ada di sini: range call BB dibatasi hingga A-J.
- **Hindari fold berlebihan terhadap taruhan kecil.** Pada perhitungan lanjutan ini BB bertahan **80,5%**, melampaui acuan pure-bluff 75,3%. Melepas setiap K-high dan pair lemah terhadap satu taruhan kecil akan terlalu mudah dimanfaatkan lawan yang agresif.

:::readnext[Lanjut membaca]
/id/blog/paired-board-strategy | Lebih Banyak Trips, Masih Check? | /images/gto-srp-paired-oop-id.webp
/id/blog/monotone-board-strategy | Nut Flush Masih Check di Q-9-2? | /images/gto-srp-monotone-oop-id.webp
:::

## Cara memeriksa hasilnya sendiri

Buka [solver GTO gratis](/id/solver), lalu **Spot belajar → Board rendah rainbow → ⚡ Lihat hasil**.

Perhatikan hal yang tidak ditampilkan: **baris “Straight” tidak ada dalam panel kategori**. Sel 43s dan 43o berwarna abu-abu untuk kedua pemain. Ketidakhadiran hand tersebut membantu menjelaskan keputusan root.

Untuk melihat check-raise, Anda perlu perhitungan lanjutan. Tekan **Hitung sendiri spot ini**, pertahankan pengaturan pohon yang dimuat, lalu jalankan perhitungan. Setelah selesai, pilih **Check**, kemudian **Bet** pada urutan aksi atas. Hasil awal Spot belajar saja tidak membuka node ini.

Gunakan **Trainer GTO** di sidebar untuk berlatih dengan bobot range sebenarnya dan menilai kerugian EV setiap keputusan. Gratis, tanpa instalasi, dan dapat digunakan tanpa akun.

## Pertanyaan umum

**Q. Kapan check-raise masuk akal dalam poker?**

A. Ketika ada hand yang memperoleh value dari pot lebih besar serta cukup draw untuk mendampingi agresi. Pada perhitungan lanjutan 6♠5♥2♦, BB raise 14,9% saat menghadapi bet 1,8bb: semua set, kedua combo two pair, dan banyak gutshot. Pertanyaannya bukan hanya apakah hand kuat, tetapi apakah ia ingin membesarkan pot dan masih dapat membaik ketika call terjadi.

**Q. Mengapa BB jarang bet lebih dulu pada board rendah ini?**

A. BB tidak memiliki keunggulan pada hand terkuat. Kedua range sama-sama memiliki set 1,8%, sedangkan 4-3 yang dapat mengalahkannya tidak berada dalam kedua range. Equity yang cukup tinggi tidak menghapus kerugian beraksi lebih dulu, sehingga frekuensi lead hanya 3,2%.

**Q. Mengapa strateginya berbeda jauh dari 9-8-7 meski equity hampir sama?**

A. Distribusi hand kuatnya berbeda. Pada 9-8-7, BB memiliki 24 combo straight jadi; pada 6-5-2, kedua range tidak memiliki straight. Selisih equity hanya dua persepuluh poin, tetapi frekuensi lead menjadi 23,7% lawan 3,2%. Rata-rata equity saja tidak menjelaskan siapa yang dapat membangun pot lebih dulu.

**Q. Hand apa yang digunakan untuk check-raise pada 6-5-2?**

A. Bagian atas daftar meliputi sembilan combo set 66, 55, dan 22; kedua combo 65 suited; serta straight draw. Contohnya 98s dengan gutshot ke tujuh, 87s dengan OESD, dan J4s, Q4s, 54s, serta 64s dengan gutshot ke tiga. Hand lain juga dapat raise dengan frekuensi lebih rendah; daftar ini bukan seluruh range raise.

**Q. Apakah check-raise diperbolehkan dan dianggap tidak sopan?**

A. Check-raise merupakan tindakan normal dalam aturan poker; mekanismenya dijelaskan pada panduan [aksi taruhan](/id/blog/holdem-betting-actions). Sebagian home game lama pernah membatasinya lewat aturan rumah, yang menjelaskan asal stigma tersebut. Dalam strategi standar yang dibahas di sini, check-raise adalah bagian penting dari respons BB: frekuensinya 14,9% pada node ini, bukan tindakan yang harus dihindari karena etiket.

**Q. Apakah frekuensi ini cocok untuk permainan saya?**

A. Jadikan acuan untuk kondisi yang sebanding: heads-up, 100bb, open BTN 2,5bb, range pertahanan standar, tanpa rake. Contoh ini hanya menawarkan bet 33%, sehingga solver tidak dapat memilih ukuran lebih besar. Menambah ukuran akan mengubah frekuensi. Prinsip membaca posisi, puncak range, dan draw tetap berguna, tetapi hasil persisnya perlu dihitung dengan input baru.
`.trim(),
};

export default POST;
