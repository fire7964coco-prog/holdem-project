import type { Post } from "../posts";

// Current EN source, with the adjudicated corrections in id-gto-source-contract.md.
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "BB Check 99,8% di K-8-3: Mengapa?",
  seoTitle: "Hampir Selalu Check — C-Bet di Flop K-8-3",
  desc: "Flop K-high tampak aman, tetapi BB check 99,8%. Bandingkan K-8-3 dengan A-7-2 lewat overpair, range, dan realisasi equity.",
  tldr: "Di K♠8♦3♣ setelah button open dan big blind call, BB check 99,8% dari range-nya, bahkan lebih menyeluruh daripada 98,2% di flop A-high. BB tidak memiliki overpair karena AA masuk range 3-bet preflop, sementara realisasi equity BB sebesar 80,7%, sedangkan BTN 116,7%.",
  category: "strategy",
  tags: ["c-bet", "flop K-high", "range check", "check-back range", "delayed c-bet", "realisasi equity", "solver GTO"],
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "9 mnt",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-id.webp",
  imageAlt: "Hasil solver GTO HoldemMaster di flop kering K-high; grid 13 × 13 big blind hampir seluruhnya hijau untuk check",
  keepImagesInBody: true,
  content: `
Flop terbuka **K♠ 8♦ 3♣**, rainbow. Anda memegang K9 di big blind: top pair. Di flop A-high, Anda sudah melihat alasan untuk check. Apakah kartu tertinggi K mengubah keputusan itu?

Ya: **check justru makin sering**. Big blind check ==99,8%== di sini, lebih menyeluruh daripada 98,2% di [flop A-high](/id/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-id.webp"). Total bet dari kedua ukuran hanya 0,2%, setara satu combo dari 474.

Semua angka di bawah berasal dari [solver GTO gratis](/id/solver) HoldemMaster, diamati pada hasil Spot belajar tanggal 2026-08-19.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb
Hasil | BB check 99,8% — lebih menyeluruh daripada di flop A-high
:::

> **Jawaban singkat**
> Gunakan check untuk seluruh range, lalu bersiap bertahan dengan range luas. Hanya satu combo dari 474 yang lead, sehingga Anda dapat mengabaikan lead untuk penerapan sederhana. Dua hal membuat check lebih menyeluruh daripada di flop A-high: big blind **tidak memiliki overpair**, karena AA masuk range 3-bet preflop, dan realisasi equity BB sebesar **80,7%**, sedangkan BTN **116,7%**, meski equity relatif berdekatan.

## Dalam kondisi apa angka ini dihasilkan?

Button (BTN) open ke 2,5bb, big blind (BB) call, dan pemain lain fold. Dua pemain melihat flop dengan pot 5,5bb dan sisa stack 97,5bb. Range mendekati range standar permainan online 100bb. Flop-nya K♠ 8♦ 3♣ dengan tiga suit berbeda, dan solver dapat memilih dua ukuran taruhan: sekitar sepertiga dan tiga perempat pot. Rake tidak dimodelkan.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | BTN open 2,5bb · BB call · pemain lain fold |
| Range | Pendekatan range standar permainan online 100bb |
| Flop | K♠ 8♦ 3♣, rainbow (ketiga suit berbeda) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb |
| Bet size | Sekitar 33% dan 75% pot |
| Rake | Tidak dimodelkan |
| Tanggal pengamatan | 2026-08-19, hasil Spot belajar |

Pot berasal dari ==2,5 open + 2,5 call + 0,5 small blind yang fold = 5,5bb==. Stack efektif tersisa 100bb dikurangi 2,5bb yang masuk preflop.

## Seberapa sering big blind check di K-8-3?

**99,8%.** Sisa 0,2% terbagi antara kedua ukuran taruhan.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **99,8%** | 473,0 |
| Bet 1,8bb (33% pot) | 0,1% | 0,6 |
| Bet 4,1bb (75% pot) | 0,1% | 0,4 |

Satu combo dari 474 sangat kecil untuk dijadikan cabang strategi tersendiri. **Di flop kering K-high ini, big blind praktis tidak memiliki lead.** Untuk penerapan di meja, menyederhanakannya menjadi selalu check sangat masuk akal.

## Mengapa check lebih menyeluruh daripada di flop A-high?

**Big blind tidak memiliki overpair di sini, sementara di flop A-high memang tidak mungkin ada overpair.** Di K-8-3, satu-satunya pocket pair di atas kartu tertinggi board adalah AA. Big blind melakukan 3-bet dengan AA preflop, sehingga hand itu tidak sampai ke spot ini. Frekuensi overpair: **0,0% untuk big blind, 1,3% untuk button**.

Di A-7-2, kategori tersebut kosong untuk kedua pihak: tidak ada kartu di atas As. Keduanya kehilangan kategori yang sama. Di board K-high, satu pihak masih memilikinya.

Set menunjukkan pola serupa. Pocket pair yang menjadi set di sini adalah KK, 88, dan 33. **Big blind hanya memiliki 88 dan 33.**

| Pocket pair yang menjadi set | BB | BTN |
|---|---|---|
| KK | ❌ (3-bet preflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Bagian dari range** | **1,3%** | **1,9%** |

Hitungan hand sesuai dengan solver. Big blind memiliki 88 dan 33, masing-masing tiga combo: enam dari 474, atau 1,27%. Button menambahkan KK, sehingga memiliki sembilan dari 480 combo, atau 1,88%.

## Bagaimana komposisi kedua range berbeda?

**Button unggul di sebagian besar kategori kuat, sedangkan big blind memiliki lebih banyak hand lemah.** Perbedaannya terlihat saat keduanya dibandingkan berdampingan.

![Grafik komposisi range big blind dan button di flop kering K-high, dengan batang hijau dan emas untuk setiap kategori hand](/images/gto-srp-dry-king-ranges-id.webp "K♠8♦3♣ · komposisi kategori — button lebih kuat di bagian atas range")

| Hand | BB (OOP) | BTN (IP) |
|---|---|---|
| Set/Trips — di sini semuanya set | 1,3% | **1,9%** |
| Two Pair | **0,8%** | 0,4% |
| Overpair | 0,0% | **1,3%** |
| Top Pair (K) | 12,7% | **14,4%** |
| Second Pair (8) | **10,8%** | 10,0% |
| Pair lemah | **3,2%** | 2,5% |
| Underpair | 8,9% | **11,3%** |
| Ace-High | 27,0% | **30,0%** |
| Belum jadi | **35,4%** | 28,3% |

Baca dari atas ke bawah. **Set, overpair, dan top pair lebih sering dimiliki button. Kategori terlemah, Belum jadi, lebih besar 7,1 poin persentase di pihak big blind.** Big blind unggul pada two pair, second pair, dan pair lemah. **Two pair adalah kategori terkuat kedua di board ini**, di atas overpair. Big blind memilikinya dua kali lebih sering, tetapi 0,8% dari 474 combo hanya **empat hand**. Two pair tidak cukup menopang keseluruhan range karena jumlahnya sedikit, bukan karena peringkatnya rendah. Dua kategori lainnya memang berada di tengah. Lead dengan komposisi seperti ini berisiko membangun pot tempat bagian lemah range Anda membayar bagian kuat range lawan.

## Mengapa hampir sepertiga kedua range berupa ace-high?

**Karena board tidak memiliki As.** Ace-high mencakup 27,0% range big blind dan 30,0% range button, mendekati sepertiga masing-masing. Di A-7-2, kategori itu tidak ada karena As langsung berpasangan dengan board. Jadi, pembeda utamanya adalah **board dengan As dan board tanpa As**, bukan K-high melawan semua tekstur lain. Di flop 8-5-2 yang dibahas kemudian dalam seri ini, dengan range 3-bet, ace-high bahkan mencapai **48,2%**.

Kategori ini membuat flop K-8-3 menarik. AQ dan AJ belum memiliki pair, tetapi mengalahkan semua hand dalam kategori Belum jadi milik lawan, sehingga masih bernilai saat showdown. Di button, keduanya tidak otomatis c-bet: sebagian waktu dipakai untuk check back dan menjaga kesempatan mencapai showdown tanpa biaya tambahan.

AJ juga ada dalam range big blind, tetapi mencapai showdown tanpa posisi lebih sulit. **Hand yang sama dapat memiliki nilai berbeda menurut posisi.** Tabel berikut memperlihatkan dampak posisi pada keseluruhan range, bukan pengukuran EV AJ secara terpisah.

## Mengapa EQR sekitar 81 lawan 117, padahal equity 46 lawan 54?

**Equity adalah bagian pot yang diharapkan berdasarkan kekuatan hand, termasuk hasil split pot. Realisasi equity mengukur seberapa besar nilai itu benar-benar dapat diperoleh.** Keduanya mengukur hal berbeda.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46,3% | 53,7% |
| EV (bb) | 2,06 | 3,44 |
| **Realisasi equity (EQR)** | **80,7%** | **116,7%** |

Hitungannya begini: dari pot 5,5bb, bagian big blind berdasarkan equity adalah ==5,5 × 46,3% = 2,55bb==. Namun, expected value (EV), atau rata-rata hasilnya, hanya 2,06bb. Perbandingan itulah yang menghasilkan EQR 80,7%. Bagian button berdasarkan equity adalah 2,95bb, sedangkan EV-nya 3,44bb, sehingga EQR-nya melampaui 100%.

:::note[Angka EQR dalam seri ini mengikuti tampilan solver. Jika dihitung ulang memakai equity dan EV yang sudah dibulatkan di layar, hasilnya bisa berbeda sekitar sepersepuluh poin persentase. Itu akibat pembulatan.]:::

Di flop A-high, angkanya 84,0% berbanding 113,1%. **Teksturnya sama-sama kering, tetapi selisih di board K-high lebih besar.** Penyebabnya bukan semata-mata board yang lebih sulit berubah. Dua selisih EQR terbesar dalam seri ini justru muncul di board dengan banyak draw: [flop Q-J-T two-tone](/id/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-id.webp") sebesar 41,5 poin persentase, dan pot 3-bet Q-T-7 sebesar 42,7. Di sini, perbedaannya terletak pada **satu kategori kuat**: di A-7-2 tidak ada overpair, sedangkan di K-8-3 button memilikinya 1,3% dan big blind sama sekali tidak. Nilai posisi sendiri dibahas dalam [strategi bermain berdasarkan posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). Big blind berada out of position (OOP), beraksi lebih dulu; button in position (IP), beraksi terakhir.

## Benarkah tidak ada draw di sini?

**Tidak ada draw yang dapat selesai dengan satu kartu.** K, 8, dan 3 memiliki suit berbeda dan jaraknya terlalu jauh untuk terhubung. Kedua pemain tidak memiliki flush draw ataupun open-ended straight draw (OESD), **bahkan gutshot pun tidak**. Straight draw di flop membutuhkan dua kartu board dalam satu urutan lima kartu, karena pemain hanya memegang dua kartu. Jarak K ke 8 maupun 8 ke 3 adalah lima peringkat; tidak ada satu urutan lima kartu yang memuat dua di antaranya.

| Draw | BB | BTN |
|---|---|---|
| Backdoor FD (perlu dua kartu lagi dengan suit sama) | 27,8% | 22,3% |
| Tanpa draw | **72,2%** | **77,7%** |

Yang tersisa adalah backdoor. **Backdoor flush draw** dalam tabel membutuhkan turn dan river dengan suit yang sesuai, sehingga peluangnya selesai hanya ==10/47 × 9/46 = sekitar 4,2%==. Tabel tidak menghitung backdoor straight, tetapi hand itu tetap ada: QJ, JT, dan T9 dapat membentuk urutan melalui K di board; 67 dan 65 melalui 8; serta 54 melalui 3. Ini berpengaruh saat memilih bluff. **Hand dengan backdoor lebih berguna daripada hand tanpa peluang lanjutan**: jika turn memberi suit yang cocok, Anda memperoleh draw nyata dan alasan untuk bet. Potensi tersebut juga membantu memilih delayed c-bet di turn setelah flop check.

## Haruskah Anda selalu c-bet di flop K-high?

**Sering dengan ukuran kecil, tetapi ada satu kelompok hand yang perlu dipertimbangkan.** Sebanyak 35,4% range big blind termasuk Belum jadi, sehingga bagian sekitar sepertiga range itu rentan fold. Selain itu, **72,2% seluruh range tidak memiliki draw**. Perhatikan penyebutnya: angka ini mencakup seluruh range, termasuk top pair 12,7%, second pair 10,8%, dan set. Angka tersebut bukan bagian dari kategori Belum jadi. Artinya, komposisi kekuatan hand cenderung tidak banyak berubah pada street berikutnya. Bet sekitar sepertiga pot dengan sebagian besar range menjadi patokan umum.

Saran umum untuk check back dengan ace-high yang memiliki nilai showdown hanya **sebagian benar** di sini. AQ dan AJ juga dapat mencampurkan bet kecil untuk membuat hand seperti QJ, JT, dan T9 fold sebelum sempat membaik. Tidak semua kartu lawan merupakan out yang bersih: QJ melawan AQ, misalnya, tidak otomatis menang jika Q muncul. As pada street berikutnya juga memberi AQ atau AJ pair tertinggi di board. Di sisi lain, check tidak banyak mengorbankan nilai, sehingga ace-high membentuk sebagian besar **check-back range**. Pilihannya berupa campuran frekuensi, bukan kewajiban untuk selalu mengambil satu aksi.

:::note[⚠ Bagian ini menafsirkan komposisi range, bukan melaporkan frekuensi aksi button yang dihitung. Hasil prahitung Spot belajar hanya mencakup aksi pertama di flop, yaitu aksi big blind. Frekuensi c-bet button yang tepat tidak tersedia di layar ini. Gunakan “Hitung sendiri spot ini” untuk menghitung rangkaian aksinya.]:::

## Apa yang berubah saat Anda bermain?

- **Setelah call raise heads-up di flop kering K-high ini, singkirkan lead dari strategi dasar Anda.** Termasuk saat memegang K. Alasan range check dari flop A-high berlaku lebih kuat di sini. Syaratnya tetap **komposisi range**, bukan tekstur board semata. Jika bagian kuat range Anda lebih banyak daripada lawan, big blind bisa lead. Contohnya [flop 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), tempat big blind lead **23,7%**.
- **Check tidak berarti check-fold.** Melawan c-bet kecil, big blind dapat bertahan dengan range luas: semua K, pair delapan, underpair, serta ace-high dengan backdoor. Top pair dapat call, sedangkan kandidat check-raise terutama 88, 33, dan two pair.
- **Di button, jangan tetapkan satu aksi untuk AQ dan AJ.** Bet kecil dan check back sama-sama dapat dipertimbangkan. Sesuaikan campurannya dengan kecenderungan lawan untuk fold overcard.
- **Melawan pemain seimbang, jangan menganggap check sebagai kelemahan.** Range check masih memuat set 88 dan 33 serta top pair 12,7%. Di taruhan rendah, banyak pemain justru lead dengan hand kuat, sehingga check mereka lebih lemah. Terus lakukan value bet terhadap pola tersebut dan terima check-raise sesekali sebagai bagian dari risiko.

:::readnext[Lanjut membaca]
/id/blog/a-high-board-cbet | Top Pair, Masih Check di A-7-2? | /images/gto-srp-dry-ace-oop-id.webp
/id/blog/holdem-continuation-bet | Continuation Bet (C-Bet): Kapan Tembak Flop, Berapa Besar, dan Kapan Check | /images/holdem-continuation-bet-hero.webp
:::

## Periksa sendiri hasilnya

Buka [solver GTO gratis](/id/solver), lalu pilih **Spot belajar → Board kering K-high → ⚡ Lihat hasil**. Hasil langsung terbuka. Ganti pilihan pemain ke **IP (BTN (opener))**. Komposisi range di atas berasal dari panel tersebut; membandingkan kedua pihak membantu menjelaskan mengapa salah satunya hampir tidak mengambil lead.

Untuk berlatih, buka **Trainer GTO** di sidebar. Anda mendapat hand sesuai bobot range sebenarnya, memilih aksi, lalu melihat berapa big blind yang hilang karena keputusan itu. Gratis, tanpa instalasi dan tanpa akun.

## Pertanyaan umum

**Q. Mengapa big blind hampir tidak pernah bet di K-8-3?**

A. Karena hand terkuat yang tersedia di board ini tidak ada dalam range call-nya: top set KK dan satu-satunya overpair, AA. Sementara itu, kategori Belum jadi mencapai 35,4%. Big blind masih memiliki set 88 dan 33 serta sedikit two pair, tetapi jumlahnya tidak cukup untuk menopang lead. Membesarkan pot dengan komposisi seperti ini lebih menguntungkan lawan. Solver memilih check 99,8%.

**Q. Mana yang lebih sulit bagi big blind, flop A-high atau K-high?**

A. K-high. Equity big blind sebenarnya lebih tinggi, 46,3% dibandingkan 45,1% di A-7-2, tetapi realisasi equity-nya lebih rendah: 80,7% dibandingkan 84,0%. Bagian pot berdasarkan equity lebih besar di sini, tetapi lebih sedikit nilai bagian itu yang dapat direalisasikan.

**Q. Apa itu check-back range?**

A. Kumpulan hand yang dipilih pemain in position untuk check setelah lawan check, demi menjaga kesempatan showdown tanpa biaya tambahan atau menjaga range check agar tetap memiliki kekuatan. Di flop ini, sebagian besar berasal dari ace-high seperti AQ dan AJ: hand tersebut mengalahkan hand kosong lawan, tetapi tambahan nilai dari bet terbatas.

**Q. Seberapa berharga backdoor flush draw?**

A. Peluangnya selesai dari flop sekitar 4,2%, sehingga tidak cukup menjadi satu-satunya alasan untuk call. Nilainya terutama dalam pemilihan bluff. Hand yang memperoleh draw nyata di turn memberi alasan untuk bet atau melanjutkan tekanan, termasuk dalam strategi delayed c-bet.

**Q. Apakah angka ini berlaku di semua tingkat taruhan?**

A. Gunakan sebagai patokan jika kondisinya sesuai: heads-up, 100bb, range open dan call standar, tanpa rake. Di board ini, perhatikan posisi opener. Jika raise berasal dari under the gun, bukan button, range itu memuat lebih banyak K dan As kuat, sehingga situasi big blind lebih sulit daripada yang ditampilkan di sini.
`.trim(),
};

export default POST;
