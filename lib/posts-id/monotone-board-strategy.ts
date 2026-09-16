import type { Post } from "../posts";

// ID series ⑤: current EN source, with the adjudicated corrections in the ID source contract.
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "Nut Flush Masih Check di Q-9-2?",
  seoTitle: "Nut Flush Pun Check — Strategi Flop Monotone Q-9-2",
  desc: "Tiga sekop mengubah nilai setiap hand. Lihat mengapa nut flush rata-rata check 69,9% pada Q-9-2 dan bagaimana satu sekop memengaruhi keputusan.",
  tldr: "Pada Q♠9♠2♠, big blind check 88,8%, bet kecil 8,0%, dan bet besar hanya 3,2%. Flush sudah terbentuk dengan dua sekop, sehingga bet besar cenderung menyaring lawan ke hand yang lebih kuat. Delapan combo nut flush rata-rata check 69,9%; flush selain nuts bahkan check 81,4%. Angka ini menggambarkan keputusan pertama BB, bukan frekuensi bet BTN.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-15",
  masterUpdated: "2026-09-02",
  readTime: "10 mnt",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-id.webp",
  imageAlt: "Hasil solver GTO HoldemMaster pada Q♠9♠2♠, dengan sebagian besar matriks big blind berwarna hijau untuk check dan sedikit campuran bet",
  keepImagesInBody: true,
  tags: ["flop monotone", "board monotone", "strategi flop", "nut flush", "bet sizing", "solver GTO", "reverse implied odds"],
  content: `
Flop menunjukkan **Q♠ 9♠ 2♠**: tiga kartu dengan suit yang sama. Anda memegang A♠J♠. **Nut flush** sudah terbentuk sejak flop.

Berapa besar Anda akan bet? Keinginan pertama biasanya membesarkan pot. Namun, solver justru memilih check dengan hand ini **83,4%** dari waktu.

Flop monotone mudah menimbulkan salah penilaian karena hand jadi maupun hand tanpa pair berperilaku berbeda dari biasanya. Seluruh angka berikut berasal dari [solver GTO gratis](/id/solver) HoldemMaster.

:::stripe
Spot | BTN open 2,5bb → BB call (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone — ketiga kartu memiliki suit yang sama)
Pot · stack | Pot 5,5bb · stack efektif 97,5bb
Hasil | Bet besar 3,2% — ukuran besar jarang dipakai
:::

> **Jawaban singkat**
> BB terutama check atau bet kecil. Pada Q♠9♠2♠, frekuensi check mencapai **88,8%**, bet sepertiga pot **8,0%**, dan bet tiga perempat pot **3,2%**. Nut flush adalah hand terkuat pada flop ini. Flush bisa memperoleh call dengan taruhan kecil, sedangkan taruhan besar cenderung menyisakan lebih banyak flush dalam range lawan yang melanjutkan. Ini menjelaskan keputusan pertama BB; strategi bet BTN belum dihitung dalam hasil tersebut.

## Apa itu board monotone dalam poker?

**Flop monotone memiliki tiga kartu dengan suit yang sama.** Pada Q♠ 9♠ 2♠, dua sekop di tangan sudah membentuk flush. Ini tekstur yang paling jarang di antara kategori flop umum, sekaligus sangat mengubah nilai hand: satu kartu dengan suit yang tepat bisa lebih berguna daripada sebuah pair.

| Kondisi | Nilai |
|---|---|
| Aksi preflop | Button (BTN) open 2,5bb · big blind (BB) call · pemain lain fold |
| Range | Perkiraan permainan online standar 100bb |
| Flop | Q♠ 9♠ 2♠, monotone (tiga sekop) |
| Pot · stack | Pot 5,5bb · stack efektif 97,5bb |
| Bet size | Sekitar 33% dan 75% pot |
| Rake | Tidak diperhitungkan |
| Tanggal pengamatan | 2026-08-20, hasil Spot belajar |

## Bagaimana BB memainkan flop monotone?

**Check 88,8%, lead 11,2%.** Lead berarti BB bet lebih dulu sebagai caller preflop. Angkanya lebih rendah daripada **23,7%** pada [board terhubung 9-8-7](/id/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-id.webp"), tetapi jauh di atas flop kering: 1,9% pada A-7-2 dan 0,2% pada K-8-3.

| Aksi pertama BB | Frekuensi | Combo |
|---|---|---|
| Check | **88,8%** | 415,7 |
| Bet 1,8bb (33% pot) | 8,0% | 37,4 |
| Bet 4,1bb (75% pot) | **3,2%** | 14,9 |

Perubahan utamanya adalah **keseluruhan frekuensi lead turun**, bukan sekadar perbandingan ukuran di dalamnya. Bet besar mengambil sekitar 29% dari seluruh lead, hampir sama dengan 9-8-7: 6,9 dari 23,7. Yang berubah ialah totalnya. Lead turun dari 23,7% menjadi 11,2%, sementara bet besar turun dari 6,9% menjadi 3,2%. Keduanya kurang lebih menjadi separuh.

Mengapa kedua ukuran menyusut? Hand yang kuat perlu mempertahankan lawan yang bisa membayar; hand yang lemah sulit membenarkan pot besar. Hasilnya, **BB lebih jarang bet secara keseluruhan**. Perilaku flush yang sudah jadi memperlihatkan alasannya paling jelas.

## Mengapa bet besar begitu jarang pada flop monotone?

**Puncak kekuatan hand pada flop ini sudah jelas.** Q, 9, dan 2 tidak terhubung sehingga straight flush belum mungkin terbentuk. Hand terbaik ialah **A♠ bersama satu sekop lain**: nut flush. A♠ tanpa sekop kedua baru merupakan draw, bukan flush yang sudah jadi.

Kejelasan itu membatasi keuntungan dari taruhan besar.

:::compare
Jika Anda memiliki flush | Jika Anda tidak memiliki flush
Bet besar membuat banyak hand tanpa flush fold | Semakin besar bet, semakin terkonsentrasi call pada flush
Bet kecil dapat mempertahankan one pair | Bet kecil murah, tetapi one pair juga belum tentu fold
:::

**Bet kecil masih dapat mengumpulkan value tanpa terlalu mempersempit range yang membayar.** Sementara itu, hand tanpa flush harus mempertimbangkan siapa yang masih bertahan setelah bet besar. Ini contoh jelas bahwa ukuran taruhan bergantung pada **hand yang bisa dipakai lawan untuk call**, bukan hanya kekuatan hand Anda sendiri. Penjelasan tersebut menafsirkan hasil BB; angka strategi BTN tidak tersedia di node ini.

## Mengapa nut flush masih memilih check?

**Karena hand yang dapat membayar jumlah besar sangat terbatas.** Gulir tabel per-hand solver sampai akhir dan kumpulkan delapan combo nut flush yang benar-benar berada dalam range BB:

| Hand | Equity | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97,7% | **83,4%** | 14,3% | 2,2% | 229,9% |
| A♠T♠ | 97,7% | **84,2%** | 14,5% | 1,2% | 232,3% |
| A♠8♠ | 97,7% | **79,1%** | 17,4% | 3,5% | 232,6% |
| A♠7♠ | 97,6% | **56,0%** | 20,6% | 23,4% | 231,3% |
| A♠6♠ | 97,6% | **60,2%** | 22,0% | 17,9% | 232,6% |
| A♠5♠ | 97,6% | **64,1%** | 20,2% | 15,7% | 233,6% |
| A♠4♠ | 97,6% | **52,7%** | 24,1% | 23,2% | 237,3% |
| A♠3♠ | 97,6% | **79,7%** | 0,0% | 20,3% | 240,6% |

**Rata-rata check delapan combo itu adalah 69,9%.** Hand dengan equity sekitar 97,6% tetap check kira-kira tujuh dari sepuluh kali. Equity yang sangat tinggi tidak berarti hand mustahil kalah pada kartu berikutnya.

Mengapa hanya delapan combo? Tiga kombinasi As suited tidak mungkin ada karena **Q♠, 9♠, dan 2♠ sudah berada di board**. Dari sembilan yang tersisa, A♠K♠ masuk range 3-bet preflop sehingga tidak tiba sebagai caller. Tersisa delapan.

Pertimbangannya adalah hasil sepanjang hand, bukan hanya uang yang masuk sekarang. Bet besar membuat banyak one pair dan high card fold. Hand dengan satu sekop mungkin call, tetapi tidak dapat menyelesaikan flush yang mengalahkan nut flush Anda; kemungkinan perbaikan lain tetap bergantung pada kartu berikutnya. Dengan check, Anda memberi lawan kesempatan bet dengan pair atau bluff, lalu mengumpulkan value di turn dan river. Ini penjelasan strategis atas hasil, bukan tabel frekuensi bet lanjutan BTN.

Angkanya memperlihatkan potensi itu: **EQR sekitar 230%**, lebih dari dua kali bagian pot berdasarkan equity. Pot awal 5,5bb, sedangkan expected value A♠J♠ mencapai ==12,36bb==. Potensi taruhan berikutnya membuat EV hand ini melampaui isi pot awal.

Blocker juga terlihat dalam tabel. **A♠J♠ dan A♠T♠ check lebih dari 80%, sementara A♠7♠ sampai A♠4♠ berada di kisaran 52–64% dan lebih sering bet.** J♠ atau T♠ mengurangi kombinasi flush non-nut yang memakai kartu tersebut. Tidak ada flush J-high pada board ini: Q♠ sudah terbuka, sehingga setiap flush setidaknya Q-high; flush terbaik kedua adalah K-high. J♠ dan T♠ memblokir **kartu pembeda berikutnya** dalam flush seperti K♠J♠ atau J♠T♠, yakni hand yang dapat membayar bet Anda.

Ketika sebagian calon caller itu hilang, value bet berkurang dan check menjadi lebih menarik. Kicker rendah tidak memblokir kombinasi J♠/T♠ tersebut, sehingga lebih banyak hand yang dapat membayar. Ini kecenderungan, bukan rumus mutlak: A♠3♠ kembali check 79,7%.

## Apakah flush selain nuts dimainkan berbeda?

**Ya, justru lebih sering check.** BB memiliki 33 combo flush yang sudah jadi. Sebanyak 25 combo tanpa A♠ rata-rata check **81,4%**, dibandingkan 69,9% untuk nut flush.

| Hand | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | 97,7% | 83,4% | 229,9% |
| K♠J♠ | 94,0% | **91,8%** | 197,0% |
| K♠8♠ | 93,6% | **76,3%** | 193,0% |
| K♠6♠ | 93,6% | **61,0%** | 193,7% |

Equity hanya turun dari 97,7% menjadi 94,0%, tetapi EQR turun ke 197,0%. **Besarnya hasil ketika menang ikut berkurang.** Pada flop ini, flush K-high hanya kalah dari flush A-high, justru hand yang nyaman memasukkan banyak uang. Risiko menang kecil tetapi kalah besar disebut **reverse implied odds**, kebalikan dari [implied odds](/id/blog/holdem-implied-odds).

## Siapa yang memiliki lebih banyak flush?

**BB: 7,1% dibandingkan 5,7% milik BTN.** Namun, perbandingan flush draw berbalik.

![Perbandingan kategori hand big blind dan button pada flop tiga sekop](/images/gto-srp-monotone-ranges-id.webp "Q♠9♠2♠ · BB lebih banyak memiliki flush jadi; BTN lebih banyak memiliki flush draw dan Ace-High")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Flush | **7,1%** | 5,7% |
| Flush draw (satu sekop, termasuk Combo draw) | 25,6% | **29,2%** |
| Top Pair (Q) | 10,9% | **12,0%** |
| Overpair (KK, AA) | 0,0% | **2,5%** |
| Ace-High | 25,6% | **28,5%** |

Baris flush draw merupakan **hasil penjumlahan**. Solver memisahkan “Flush draw” dan “Combo draw”; hand dengan satu sekop dapat masuk salah satu kategori itu. Untuk BB, ==20,5 + 5,1 = 25,6%==, sedangkan untuk BTN, ==24,1 + 5,1 = 29,2%==. Gunakan pemisahan ini ketika mencocokkan tabel dengan layar.

Perbedaannya berawal dari preflop. **BB mempertahankan sejumlah hand suited lemah dengan biaya call lebih murah**, termasuk J5s, 85s, dan 74s. Versi sekopnya menjadi flush. Hand tersebut tidak berada dalam range open BTN pada contoh ini.

Sebaliknya, BTN memiliki lebih banyak **Ax dan Kx offsuit dengan satu sekop**. Hand itu belum menjadi flush, tetapi memiliki draw. A♠ sangat berharga karena dapat membentuk nut flush sekaligus memastikan lawan **tidak** memegang nut flush sekarang.

## Bagaimana satu sekop mengubah nilai hand?

**Top pair yang sama dapat memiliki prospek sangat berbeda, tergantung apakah ada sekop di tangan.**

Ambil Q♥J♦: top pair tanpa sekop. Hand ini sudah tertinggal dari **12,0%** range BTN: flush 5,7%, overpair 2,5%, serta set dan two pair. Ia juga kalah kicker dari **AQ dan KQ**. Q♠ ada di board dan Q♥ di tangan Anda, menyisakan dua queen: 8 combo AQ dan 8 combo KQ, atau **sekitar 3,4%** dari 474. Jadi, kategori yang sudah unggul berjumlah kira-kira **15,4%** menurut perhitungan tersebut.

Selain itu, **29,2%** range BTN memiliki draw satu sekop yang dapat menyalip pada kartu berikutnya. Jangan langsung menjumlahkan kedua angka: empat dari 16 combo AQ/KQ tadi juga memegang sekop dan ikut tercakup dalam 29,2%. Q♥J♦ bukan hand yang nyaman mengambil value selama tiga street; perannya lebih dekat ke bluff-catcher untuk satu taruhan.

Bandingkan dengan 9♥8♠: middle pair dengan satu sekop. Hand ini dapat menang sekarang atau membaik nanti, sehingga lebih fleksibel untuk bet maupun call.

**Pada board ini, suit sangat mengubah penilaian kekuatan hand.**

## Mengapa equity 48 lawan 52 menjadi EQR 90 lawan 109?

**Ketika pot cenderung tumbuh lebih lambat, keuntungan posisi juga dapat menyusut.**

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47,7% | 52,3% |
| EV (bb) | 2,37 | 3,13 |
| **Realisasi equity (EQR)** | **90,4%** | **108,8%** |

Bagian pot BB berdasarkan equity ialah ==5,5 × 47,7% = 2,62bb==. EV aktualnya 2,37bb, sehingga layar menampilkan EQR 90,4%.

Selisih 18,4 poin persentase adalah yang terkecil kedua **di antara tujuh single-raised pot BTN vs BB**, setelah 9-8-7 dengan 13,2. Dalam seluruh seri, posisi selisih itu hanya kelima: blind vs blind K-T-6 memiliki selisih 7,0, A-A-6 9,3, dan pot 3-bet 8-5-2 16,6. Ketiganya memakai susunan peran berbeda. Berkurangnya taruhan besar mengurangi keputusan sulit; **nilai posisi bergantung pada keputusan yang masih harus dihadapi**.

## Apa yang dapat Anda terapkan saat bermain?

- **Bet besar memang jarang sebagai lead BB pada flop ini.** Frekuensinya **3,2%**, tetapi itu bukan alasan otomatis fold one pair ketika menghadapi bet besar BTN. Frekuensi sizing BTN tidak dihitung di node ini. BTN memiliki flush jadi 5,7%, sedangkan draw satu sekop **29,2%**, lebih dari lima kali lipat. Menyamakan setiap bet besar dengan flush membuat Anda terlalu sering kalah oleh semi-bluff. Periksa dulu apakah hand Anda memiliki **A♠**.
- **Jangan memaksakan flush kecil untuk tiga taruhan besar.** Flush non-nut check 81,4%, dibandingkan 69,9% untuk nuts. Cari value melalui taruhan kecil dan beri bobot besar pada kemungkinan nut flush ketika menghadapi raise besar, sambil tetap mempertimbangkan kecenderungan bluff lawan.
- **A♠ dapat menjadikan sebuah hand kandidat bluff.** Anda mengetahui bahwa lawan tidak memiliki nut flush. Informasi blocker itu membedakannya dari bluff tanpa dasar; bukan berarti setiap hand A♠ harus bet.
- **Melawan pemain yang terus call pair tetapi jarang bet sendiri, kurangi jebakan.** Manfaat check pada hasil ini bergantung pada lawan yang juga memasukkan uang saat diberi kesempatan. Bila lawan hanya call, value bet flush Anda menjadi penyesuaian yang masuk akal.

:::readnext[Lanjut membaca]
/id/blog/donk-bet-strategy | Donk Bet di 9-8-7 Bisa Masuk Akal | /images/gto-srp-middle-connected-oop-id.webp
/id/blog/broadway-board-strategy | Banyak Draw, Tetap Check di Q-J-T? | /images/gto-srp-broadway-oop-id.webp
:::

## Cara memeriksa hasilnya sendiri

Buka [solver GTO gratis](/id/solver), lalu pilih **Spot belajar → Board monotone (satu suit) → ⚡ Lihat hasil**.

Bagian terpenting ada di tabel per-hand bawah: **gulir sampai akhir**. Bandingkan A♠J♠ dan A♠4♠ yang frekuensi check-nya berbeda sekitar 30 poin persentase. Lihat juga bagaimana pair queen berubah ketika salah satu kartu di tangan adalah sekop.

Setelah itu, buka **Trainer GTO** di sidebar. Berlatih mengambil keputusan dan membaca selisih EV membantu Anda menguji pemahaman dari tabel. Gratis, tanpa instalasi, dan dapat digunakan tanpa akun.

## Pertanyaan umum

**Q. Apa arti flop monotone?**

A. Flop dengan tiga kartu bersuit sama, misalnya Q♠ 9♠ 2♠. Dua kartu dengan suit itu di tangan sudah membuat flush, sedangkan satu kartu memberi flush draw. Nilai hand berubah tajam karena suit menjadi sangat menentukan, bahkan ketika Anda sudah memiliki pair.

**Q. Apakah flush yang sudah jadi selalu harus bet?**

A. Tidak. Delapan combo nut flush dalam hasil ini check antara 52,7% dan 84,2%, dengan rata-rata 69,9%. Flush non-nut check 81,4%. Bet besar membuat banyak one pair dan high card fold; satu sekop yang tetap call pun tidak dapat membuat flush lebih tinggi daripada nut flush. Check dapat mengundang bet lawan dan mempertahankan peluang value pada turn serta river.

**Q. Mengapa BB memiliki lebih banyak flush daripada BTN?**

A. BB sudah memasang sebagian taruhan wajib dan dapat mempertahankan hand suited seperti J5s, 85s, serta 74s dengan biaya tambahan lebih murah. Dalam range contoh ini, BTN tidak open hand tersebut. Versi sekopnya menambah flush BB menjadi 7,1%, dibandingkan 5,7% milik BTN.

**Q. Seberapa besar peluang langsung mendapat flush di flop?**

A. Peluangnya kecil: dua kartu suited di tangan harus disertai tiga kartu flop dengan suit yang sama. Perhitungan peluang membuat dan menyelesaikan flush dibahas di [peluang draw](/id/blog/holdem-drawing-odds). Fokus contoh ini adalah keputusan setelah flop monotone benar-benar muncul.

**Q. Mengapa A♠ penting meski saya belum memiliki flush?**

A. A♠ adalah blocker nut flush: selama kartu itu berada di tangan Anda, lawan tidak dapat memiliki flush As. Itu mengurangi bagian terkuat range lawan dan memberi dasar untuk mempertimbangkan bluff. Sebaliknya, ketika Anda memiliki flush kecil tanpa A♠, raise besar perlu dinilai dengan memperhitungkan kemungkinan nut flush lawan.
`.trim(),
};

export default POST;
