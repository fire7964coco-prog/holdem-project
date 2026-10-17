import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): Bila Bet Flop, Berapa Saiznya dan Bila Check",
  seoTitle: "'C-Bet Setiap Flop' Buat Cip Bocor? — Continuation Bet Poker",
  desc: "C-bet setiap flop? Apa itu continuation bet, flop mana patut c-bet atau check, saiz kecil di board kering, besar di board basah, dan kekerapan in position.",
  tldr: "Continuation bet (c-bet) ialah bet pada flop oleh pemain yang raise preflop. Jangan c-bet setiap flop: bet board tinggi dan kering (K-7-2) dengan saiz kecil dan kerap, check board rendah yang bersambung (7-6-5). Saiz kira-kira satu pertiga pot di board kering, dua pertiga atau lebih di board basah; jauh kurang dalam pot multiway.",
  category: "strategy",
  date: "2026-09-27",
  updated: "2026-10-17",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "18 minit",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Seorang pemain poker meletakkan cip bet ke atas flop yang baru dibuka selepas raise preflop, detik continuation bet klasik di atas meja hijau",
  tags: ["continuation bet poker", "apa itu c-bet", "saiz c-bet", "kekerapan c-bet", "bila perlu c-bet", "bila tidak perlu c-bet", "c-bet out of position", "c-bet multiway"],
  content: `
Pada dua tahun pertama saya bermain, "c-bet" ialah satu-satunya rancangan flop yang saya ada. Saya raise preflop, jadi saya bet flop. Setiap kali. Board ace-high, saya bet. Board penuh dengan kemungkinan straight dan flush yang jelas-jelas mengenai tangan lawan yang call saya? Saya tetap bet — lalu kena raise, kena call dan kena check-raise, pot demi pot. Saya sangka c-bet *itulah* strategi. Rupa-rupanya c-bet ialah pisau bedah, dan saya menghayunnya seperti tukul.

**Continuation bet (c-bet)** ialah bet pada flop oleh pemain yang raise sebelum flop. Ia bet yang paling biasa dalam poker — dan juga yang paling teruk disalahgunakan. Nasihat lama berbunyi "c-bet hampir setiap flop." Strategi moden yang disemak dengan solver memberi sesuatu yang lebih berguna dan lebih menguntungkan: ==bet flop yang memihak kepada range *anda*, dan check flop yang memihak kepada range lawan.== Inilah playbook c-bet dari hujung ke hujung — flop mana, berapa kerap, berapa saiz, in position dan out of position, multiway, dan bila check ialah langkah yang menang. Ia separuh bahagian flop dalam [strategi Texas Hold'em](/ms/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") yang menang.

---

### C-bet, dalam angka

:::stripe
~2 daripada 3 | Kekerapan tangan terlepas di flop
⅓ pot | Saiz "range bet" kecil di board kering
55–70% | Kadar c-bet flop keseluruhan yang sihat
Check | Selalunya langkah terbaik, bukan tanda lemah
:::

---

## Apakah Continuation Bet (C-Bet) dalam Poker?

**Continuation bet ialah bet yang dibuat pada flop oleh pemain yang menjadi aggressor sebelum flop** — orang terakhir yang raise. Anda "meneruskan" cerita kekuatan yang anda mulakan preflop. Yang penting, ==tangan anda tidak perlu mengena pada flop untuk c-bet==; sebahagian besar c-bet yang baik dibuat dengan tangan yang langsung terlepas.

Sebab ia berkesan ialah satu statistik mudah: **dua kad tangan yang tidak berpasangan gagal berpasangan di flop kira-kira dua pertiga masa (67.6%).** Jadi apabila anda bet, lawan anda juga selalunya terlepas — dan banyak tangan itu akan fold. Anda bukan bet kerana anda kuat; anda bet kerana *dia berkemungkinan lemah* dan andalah yang mengambil inisiatif.

Sebaik sahaja anda faham c-bet di flop, anak tangga "barreling" yang seterusnya mudah diikuti:

- **Delayed c-bet** — anda *check* flop, kemudian bet di turn. Sangat baik untuk pot yang flopnya memihak kepada lawan tetapi turn mengubah keadaan.
- **Double barrel** — anda c-bet flop dan bet *sekali lagi* di turn.
- **Triple barrel** — anda bet ketiga-tiga street: flop, turn dan river. Laluan paling agresif, untuk value yang kuat atau bluff yang dipilih rapi dengan blocker.

Jika [aksi pertaruhan](/ms/blog/holdem-betting-actions) asas seperti check, bet dan raise masih kabur, mulakan di sana. Jika tidak, mari betulkan kesilapan yang dibuat hampir semua orang.

---

## Mengapa Nasihat Lama "C-Bet Setiap Flop" Salah — Apa yang Berubah?

Jika anda belajar poker sebelum era solver, anda diajar untuk c-bet kira-kira dua pertiga pot pada *kebanyakan* flop. Cara itu berkesan buat seketika kerana lawan terlalu kerap fold. Kemudian semua orang belajar melawan balik — float, check-raise dan call hingga ke river — lalu c-bet membuta tuli menjadi leak.

Inilah perkara penting yang sebenarnya dikatakan strategi moden, kerana ia mudah disalah faham: **ia BUKAN "kurangkan c-bet di semua tempat."** Ia satu *pembahagian*:

- Pada board yang memihak kepada anda, bet **kecil dan lebih kerap lagi** berbanding nasihat lama — kadang-kadang seluruh range anda.
- Pada board yang memihak kepada lawan, **check jauh lebih banyak** — dan bet lebih besar serta lebih selektif apabila anda bet.

Konsep di bawahnya ialah ==kelebihan range==: range keseluruhan siapa yang lebih kuat pada flop tertentu ini. Sebagai pemain yang raise preflop, anda memegang lebih banyak kad besar dan overpair, jadi **board tinggi dan kering milik anda** — manakala board penuh kad sederhana yang bersambung milik pemain yang call. Kuasai satu idea ini dan anda sudah mendahului setiap pemain "c-bet sahaja" di meja.

Dan kelebihan range bukan keseluruhan cerita — tambahkan posisi di atasnya dan kesannya menjadi ekstrem. Pada A-7-2 rainbow, solver membuat pemain yang call check 98.2% daripada range-nya, termasuk top pair — equity range-nya hanya ketinggalan 45.1% berbanding 54.9%, namun bertindak dahulu (out of position) mengubah jurang kecil itu menjadi check yang hampir menyeluruh. Pecahan penuhnya ada dalam [top pair, tetapi masih check](/ms/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-ms.webp").

> **Semak hand anda sendiri dari spot ini** — Contoh A-7-2 di atas ialah pot BTN open dan BB call. Jika anda pernah bermain hand dalam situasi yang sama, buka [Semak hand](https://solver.holdemmaster.com/?view=hand-review&lang=ms) dalam solver, tetapkan situasi (**Open · Call**, BTN dan BB) serta **Kedudukan anda**, pilih **2 kad anda** dan **3 kad flop**, kemudian tekan tindakan mengikut urutan sebenar, termasuk tindakan lawan. Hasilnya menunjukkan sama ada pilihan itu dinilai sebagai **Pilihan terbaik**, **Boleh diterima** atau **Perlu disemak**. Semakan ini menggunakan chart preflop aplikasi (cash dalam talian 6-max, 100bb), jadi angkanya mungkin sedikit berbeza daripada contoh di atas, dan semakan ini mungkin tidak sesuai untuk permainan di pub atau kejohanan.

---

## Flop Mana Patut Di-C-Bet? Semuanya Tentang Tekstur Board

![Flop J-7-2 rainbow yang kering dan tidak bersambung di atas meja hijau dengan timbunan kecil cip bet di hadapan, jenis board kad tinggi yang milik pemain yang raise preflop](/images/holdem-cbet-dry-board.webp "Flop tinggi, kering dan tidak bersambung seperti J-7-2 ini memihak kepada pemain yang raise preflop — board klasik untuk c-bet kecil dengan kekerapan tinggi")

Inilah teras c-bet. Sebelum anda fikir tentang saiz atau kekerapan, tanya satu soalan: **adakah flop ini mengenai range saya, atau range lawan?** Inilah petanya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jenis flop | Contoh | Memihak kepada | In position | Sebab |
|:---|:---|:---|:---|:---|
| **Tinggi, kering, tidak bersambung** | K‑7‑2, A‑8‑3 | **Anda (yang raise)** | Bet **kerap & kecil** (⅓) | Anda ada lebih banyak top pair & overpair; mereka terlepas |
| **Rendah, bersambung** | 7‑6‑5, 9‑8‑6 | **Pemain yang call** | **Lebih banyak check**; bet besar & selektif apabila bet | Mengenai suited connector dan pair kecil mereka |
| **Berpasangan rendah** | 8‑8‑3, 5‑5‑2 | **Anda (sedikit)** | Bet **kerap & kecil** | Kedua-dua jarang ada trips; overcard/overpair anda mendahului |
| **Monotone** | K♠9♠4♠ | Bercampur — berhati-hati | Bet **kurang, lebih kecil** | Flush yang sudah jadi mengehadkan kedua-dua range; main murah |
| **Two-tone & basah** | Q♥J♥7♣ | Condong kepada pemain yang call | **Jadikan range terpolarisasi:** besar dengan value/draw, check tangan kosong (air) | Terlalu banyak draw — buat mereka bayar mahal atau keluar |

</div>

Dua idea berkaitan melakukan semua kerja di sini:
- **Kelebihan range menentukan berapa *kerap* anda bet.** Lebih banyak range anda kuat pada board ini → bet lebih kerap.
- **Kelebihan nut menentukan berapa *besar* anda bet.** Anda memegang lebih banyak tangan terbaik mutlak (set, straight) → bet lebih besar.

Bahagian halusnya: anda boleh ada satu tanpa yang satu lagi. Pada A‑8‑3 anda ada jauh lebih banyak top pair (kelebihan range) tetapi hampir tiada siapa ada set, jadi anda **bet kerap tetapi kecil**. Pada board di mana anda memegang jauh lebih banyak set dan overpair, anda **bet besar**. Fahami dua tuil ini dengan betul dan saiz c-bet tidak lagi menjadi tekaan.

---

## Berapa Kerap Solver C-Bet pada Setiap Jenis Board?

**Dalam single-raised pot apabila BTN open dan BB call, solver membuat BTN c-bet dengan 54.7% daripada keseluruhan range selepas BB check.** Purata itu menyembunyikan sebaran yang luas: daripada 43.5% pada flop A-high hingga 67.8% pada flop berpasangan, dan saiz utamanya juga berbeza. Flop berpasangan dan K-high bergantung pada bet satu pertiga pot; flop A-high, T-high dan 9-high serta flop rendah sebenarnya lebih kerap menggunakan bet 75%. Jadual di bawah mengumpulkan kesemua 1,755 flop yang dikira awal mengikut jenis board.

> **Cara angka ini dikira** — Hasil daripada [solver GTO percuma](/ms/solver) HoldemMaster untuk open BTN vs call BB merentas 1,755 flop (dikumpulkan mengikut suit yang setara) — stack 100bb · bet flop 33%/75% · bet turn dan river 60% · raise 60% · tanpa rake · ralat sasaran 0.3%. Range input = carta preflop solver (range konsensus yang disusun daripada sumber awam). Ini pengiraan heads-up, jadi ia tidak boleh dipindahkan terus kepada pot multiway.

### Mengikut kad tertinggi — c-bet BTN selepas BB check

Daripada kesemua 22,100 flop yang mungkin, jenis yang paling kerap muncul ialah Q-high atau J-high (23.5%), dan jenis yang paling jarang di-c-bet oleh BTN ialah A-high (43.5%).

| Jenis board | Bahagian flop | Jumlah c-bet | 33% | 75% |
|:---|:---:|:---:|:---:|:---:|
| **Berpasangan** | 17.2% | **67.8%** | 60.6% | 7.2% |
| **A-high** | 19.1% | **43.5%** | 16.3% | 27.2% |
| **K-high** | 15.9% | **57.2%** | 40.8% | 16.4% |
| **Q-high / J-high** | 23.5% | **52.1%** | 27.5% | 24.7% |
| **T-high / 9-high** | 14.2% | **53.2%** | 19.8% | 33.4% |
| **Rendah (8-high ke bawah)** | 10.1% | **57.7%** | 23.8% | 33.8% |
| **Semua flop** | 100% | **54.7%** | 31.7% | 23.0% |

Malah dalam satu jenis yang sama, jumlah c-bet berubah dengan ketara dari satu flop ke flop lain. Inilah flop dalam setiap jenis yang paling jarang dan paling kerap di-bet oleh BTN:

| Jenis board | Paling jarang bet | Paling kerap bet |
|:---|:---|:---|
| **Berpasangan** | A♣Q♦Q♣ 37.7% | 7♥7♦7♣ 97.1% |
| **A-high** | A♣9♣2♣ 28.5% | A♥7♦2♣ 59.0% |
| **K-high** | K♣Q♣2♣ 32.5% | K♥7♦2♣ 90.2% |
| **Q-high / J-high** | Q♥J♦8♣ 35.5% | Q♥7♦2♣ 84.7% |
| **T-high / 9-high** | T♣9♦7♣ 38.5% | T♥6♦2♣ 73.5% |
| **Rendah (8-high ke bawah)** | 8♦7♦4♣ 46.4% | 7♥6♦2♣ 76.3% |
| **Semua flop** | A♣9♣2♣ 28.5% | 7♥7♦7♣ 97.1% |

Sebaran dalam setiap jenis inilah pengajaran sebenar jadual ini. Board K-high kering seperti K♥7♦2♣ di-bet 90.2% daripada masa, tetapi K♣Q♣2♣ yang monotone jatuh kepada 32.5%. "Ini K-high, jadi saya bet" tidak memadai; anda perlu membaca **ketinggian kad, suit dan kesambungan serentak**. Pada board berpasangan, hampir semua c-bet menggunakan saiz kecil (60.6% daripada 67.8%), selari dengan peraturan "kecil pada board kering" dalam bahagian sizing di bawah. Satu-satunya tempat data menyanggah peraturan umum itu ialah A-high: bagi jenis ini secara keseluruhan, bet 75% lebih kerap daripada bet 33% (27.2% berbanding 16.3%). Puncanya juga bukan flop monotone yang menarik purata itu ke atas — jika dikira flop A-high rainbow sahaja, bet besar tetap lebih kerap digunakan (25.9% berbanding 18.8%). Satu board tertentu seperti A-7-2 masih boleh mempunyai saiz yang berbeza daripada purata jenisnya.

### Mengikut suit dan kesambungan — pengiraan yang sama pada paksi lain

| Jenis board | Bahagian flop | Jumlah c-bet | 33% · 75% |
|:---|:---:|:---:|:---:|
| **Rainbow** (tiga suit berlainan) | 39.8% | **58.8%** | 36.1% · 22.7% |
| **Two-tone** (dua kad satu suit) | 55.1% | **52.6%** | 28.7% · 23.9% |
| **Monotone** (tiga kad satu suit) | 5.2% | **44.2%** | 29.2% · 15.1% |
| **Bersambung** (tidak berpasangan · ketiga-tiganya dalam lingkungan lima rank) | 18.5% | **49.1%** | 18.8% · 30.3% |
| **Tidak bersambung** (tidak berpasangan · selebihnya) | 64.3% | **52.8%** | 27.7% · 25.1% |

Semakin berkumpul suitnya, semakin jarang BTN c-bet (58.8% → 52.6% → 44.2%), dan board bersambung lebih jarang di-bet tetapi dengan saiz 75% sebagai bet utama. "Bersambung" di sini bermaksud tiga rank berbeza yang muat dalam lima rank berturutan (rank tertinggi tolak rank terendah ialah 4 atau kurang, dan ace juga boleh dikira sebagai kad rendah: A-2-4 bersambung, A-7-2 tidak). Board berpasangan (17.2%) tidak dimasukkan dalam pembahagian bersambung/tidak bersambung; angkanya sama seperti jadual pertama.

### Kad tertinggi × suit — jumlah c-bet

| Ketinggian board | Rainbow | Two-tone | Monotone |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 70.3% | 65.3% | — |
| **A-high** | 44.6% | 43.6% | 35.4% |
| **K-high** | 63.3% | 54.9% | 40.8% |
| **Q-high / J-high** | 55.7% | 50.6% | 44.2% |
| **T-high / 9-high** | 57.9% | 50.4% | 49.7% |
| **Rendah (8-high ke bawah)** | 60.6% | 55.5% | 59.1% |

Dalam keenam-enam baris, **rainbow lebih tinggi daripada two-tone.** Contoh paling jelas ialah K-high: rainbow 63.3% berbanding two-tone 54.9%, jurang 8.4 mata — jadi K♥9♠6♣ dan K♥9♥6♣ sudah menjadi board yang berbeza sebaik sahaja dua heart muncul. Flop berpasangan yang monotone tidak mungkin wujud, kerana dua kad yang sama rank tidak pernah berkongsi suit. Monotone rendah (59.1%) ialah satu-satunya sel monotone yang lebih tinggi daripada sel two-tone di sebelahnya, dan hampir semua c-bet itu menggunakan saiz 33% (57.6%).

### Bagaimana BB bertindak balas terhadap c-bet?

**Berdepan c-bet 33%**

| Jenis board | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 34.0% | 48.5% | 17.6% |
| **A-high** | 36.4% | 54.5% | 9.1% |
| **K-high** | 32.3% | 55.2% | 12.5% |
| **Q-high / J-high** | 29.5% | 57.0% | 13.5% |
| **T-high / 9-high** | 28.0% | 57.4% | 14.6% |
| **Rendah (8-high ke bawah)** | 29.4% | 52.6% | 18.0% |
| **Semua flop** | 32.1% | 53.3% | 14.6% |

**Berdepan c-bet 75%**

| Jenis board | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 48.9% | 38.1% | 13.0% |
| **A-high** | 50.4% | 46.0% | 3.6% |
| **K-high** | 49.7% | 45.1% | 5.1% |
| **Q-high / J-high** | 47.7% | 45.6% | 6.7% |
| **T-high / 9-high** | 46.3% | 44.7% | 9.0% |
| **Rendah (8-high ke bawah)** | 46.2% | 40.8% | 13.0% |
| **Semua flop** | 48.1% | 44.4% | 7.5% |

Bet 33% sudah pulang modal sebagai pure bluff jika lawan fold ==0.33 ÷ 1.33 = kira-kira 24.8%== daripada masa, sedangkan BB fold purata 32.1%; menentang bet 75% (==0.75 ÷ 1.75 = kira-kira 42.9%==) ia fold 48.1%. Pada flop, BB tidak bertahan sebanyak yang dicadangkan oleh minimum defense frequency (MDF). Menentang c-bet 33%, check-raise paling kerap berlaku pada board rendah (18.0%) dan board berpasangan (17.6%), dan paling jarang pada A-high (9.1%) — untuk satu contoh check-raise pada board rendah yang dihuraikan tangan demi tangan, lihat [bila BB check-raise pada flop rendah](/ms/blog/low-board-check-raise).

Bet terlebih dahulu ke arah pemain yang raise (donk bet) hanya 2.4% bagi BB secara keseluruhan (1.7% pada 33% ditambah 0.7% pada 75%). Jika dipecahkan mengikut suit, yang tertinggi ialah monotone pada 7.2% (92.8% check); jika dipecahkan mengikut ketinggian kad dan suit serentak, flop monotone rendah mencecah 9.2%. Board pengecualian di mana BB patut bet terlebih dahulu dihuraikan dalam [panduan donk bet](/ms/blog/donk-bet-strategy).

> **Cara membaca jadual ini** — Setiap sel ialah purata flop-flopnya, diberi pemberat mengikut kekerapan flop itu benar-benar muncul (semua varian suit bagi satu flop dikira bersama). Bagi spot yang bukan tindakan pertama, seperti BTN selepas BB check, setiap flop juga diberi pemberat mengikut kekerapan spot itu dicapai pada flop tersebut, dan dalam satu flop setiap tangan diberi pemberat mengikut kebarangkalian memegangnya dan tiba di spot itu. Flop yang disenaraikan di bawah "paling jarang bet" dan "paling kerap bet" masing-masing mewakili seluruh kumpulan suitnya (A♣9♣2♣ = semua flop A-9-2 monotone). Disebabkan pembundaran, satu baris boleh berjumlah 99.9–100.1.

---

## Berapa Kerap Patut Anda C-Bet? (Kekerapan)

Jawapannya berubah mengikut spot: in position dan heads-up pada board kering, anda boleh bet hampir semua dengan saiz kecil; out of position sebagai pemain yang raise dalam single-raised pot, kira-kira 30–45% (lebih tinggi sebagai pemain 3-bet); menentang tiga lawan atau lebih, hanya tangan kuat dan draw yang baik.

Tiada satu peratusan c-bet yang "betul" — sesiapa yang memberi anda satu angka sebenarnya mengajar anda satu leak. Kekerapan berubah mengikut posisi, board dan bilangan pemain dalam pot. Inilah rujukan pantasnya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situasi | Anggaran kekerapan c-bet | Nota |
|:---|:---:|:---|
| **In position, heads-up, board kering K-high atau Q-high** | **70%+** (kecil) | "Range bet" klasik — bet kebanyakan range anda, saiz kecil. Board kering **A-high** jauh kurang di-bet (A♥7♦2♣ 59.0% dalam jadual solver di atas) |
| **In position, heads-up, board basah** | **~50–60%** | Lebih terpolarisasi — value dan draw bet, tangan kosong check |
| **Out of position, heads-up (single-raised pot, anda yang raise)** | **~30–45%** | Check jauh lebih banyak untuk melindungi range check anda. Sebagai *pemain 3-bet* OOP ia terbalik: melebihi 97% pada ketiga-tiga board yang kami solve, hampir semuanya pada dua pertiga pot di Q♥T♥7♠ dan 8♦5♣2♠ tetapi kebanyakannya pada satu pertiga pot di A♦K♠2♥ (57.8%); lihat [panduan posisi](/ms/blog/holdem-position-play) |
| **Multiway (2 lawan)** | **~50% atau kurang** | Seseorang berkemungkinan besar sudah mengena — ketatkan |
| **Multiway (3+ lawan)** | **Tangan kuat & draw yang baik sahaja** | Fold equity hampir hilang |

</div>

Sebagai semakan kesihatan, kadar c-bet flop keseluruhan pemain yang mantap jatuh sekitar **55–70%** merentas semua board. Jika anda c-bet lebih daripada ~85% flop, anda bermain secara autopilot dan pemain yang baik akan menghukumnya; bawah ~40% pula anda terlalu jujur, hanya bet apabila mengena. Tetapi ingat — angka itu ialah *agregat*, bukan sasaran. Anda sampai ke situ dengan bet pada board yang betul, bukan dengan mengejar kuota.

Sebagai satu titik rujukan konkrit: dalam spot heads-up BTN vs BB daripada solver di atas, purata c-bet BTN selepas BB check ialah **54.7%**, dan flop secara individu berjulat daripada 28.5% (A-9-2 monotone) hingga 97.1% (7-7-7). Pelajari kekerapan mengikut jenis board, bukan sebagai satu angka yang perlu dikejar.

---

## Berapa Saiz C-Bet yang Patut? (Sizing)

Saiz c-bet ikut tekstur board. Pada board tinggi, kering dan statik seperti K-7-2, bet kecil, sekitar satu pertiga pot, dengan kerap. Pada board basah dan bersambung, naikkan ke dua pertiga pot atau lebih untuk mengenakan bayaran kepada draw dan membina pot dengan tangan kuat. Dalam tournament, saiz besar itu lebih kerap turun ke separuh pot.

Dua gear sudah meliputi hampir semua situasi:

- **Kecil — kira-kira satu pertiga pot** — pada board kering, statik dan ada kelebihan range, terutamanya in position. Range lawan lemah dan tidak banyak bertambah baik, jadi anda tidak perlu mengenakan bayaran kepada draw; bet kecil sudah meletakkan semua tangan kosong mereka dalam situasi sukar sambil mengekalkan tangan yang lebih lemah untuk membayar anda. Bet lebih besar di sini hanya membuat tangan yang anda *mahu* call itu fold.
- **Besar — dua pertiga pot atau lebih** — pada board basah dan dinamik, dan setiap kali range anda terpolarisasi. Sekarang anda perlu mengenakan bayaran kepada flush draw dan straight draw (menafikan equity mereka) serta membina pot dengan tangan kuat anda. Bet kecil membiarkan draw call terlalu murah.

Letakkan angka sebenar. Katakan pot ialah ==$30== di flop:

- C-bet **satu pertiga pot** ialah ==$10== — range bet anda di board kering.
- C-bet **dua pertiga pot** ialah ==$20== — saiz board basah anda, untuk mengenakan bayaran kepada draw.

Dalam **tournament**, condong sedikit lebih kecil: saiz kecil kekal satu pertiga, tetapi saiz besar lebih kerap **separuh pot** berbanding dua pertiga, kerana stack anda berharga — dalam freezeout anda tidak boleh reload, malah re-entry pun memerlukan buy-in baharu. Apa pun pilihan anda, ikat saiz kepada board, bukan kepada tabiat.

Mahu lihat sejauh mana gear "besar di board basah" sebenarnya pergi? Solver yang diberi dua saiz pada Q♥T♥7♠ dalam pot 3-bet meletakkan [98.4% daripada range-nya ke dalam bet dua pertiga](/ms/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-ms.webp") — dan sebabnya ialah harga yang boleh anda kira, bukan rasa.

---

## Bagaimana C-Bet Bila Out of Position?

![Seorang pemain poker bertindak dahulu dalam posisi out of position, jari di atas kain meja di sebelah cipnya dengan lawan menunggu dalam bayang-bayang di belakang](/images/holdem-cbet-oop.webp "Out of position anda bertindak dahulu tanpa maklumat, jadi anda check jauh lebih banyak dan c-bet dengan range yang lebih ketat dan kuat")

C-bet jauh lebih sukar **out of position (OOP, bertindak dahulu)** dalam single-raised pot — apabila anda perlu bertindak dahulu setiap street tanpa bacaan tentang apa yang akan dilakukan lawan (sebagai pemain 3-bet, kelebihan range mengubah perkara ini, lihat [panduan posisi](/ms/blog/holdem-position-play)). Dua pelarasan:

1. **Kurangkan kekerapan c-bet.** Tanpa posisi anda tidak dapat mengawal pot sebaik itu atau merealisasikan equity anda, jadi anda check jauh lebih banyak — termasuk tangan yang pasti di-bet jika in position. Pada sesetengah board, solver hanya c-bet out of position dalam single-raised pot satu perempat masa.
2. **Bina range check yang sebenar.** Jika anda hanya bet apabila kuat dan check apabila lemah, lawan yang peka akan membaca anda seperti buku dan menyerang setiap check. Jadi anda sengaja check *sebahagian* tangan kuat juga, supaya check anda kekal berbahaya dan permainan anda secara keseluruhan lebih sukar dilawan. Inilah sebabnya [posisi](/ms/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") ialah kelebihan struktur — c-bet memang lebih berkesan apabila anda bertindak terakhir.

---

## C-Bet dalam Pot Multiway

Perangkap c-bet terbesar ialah **menembak ke arah beberapa lawan seolah-olah heads-up.** Setiap pemain tambahan dalam pot memotong peluang bahawa semua orang terlepas — jadi fold equity anda, enjin utama c-bet bluff, runtuh.

Peraturan multiway mudah: **bet tangan siap yang kuat dan draw terbaik anda untuk value dan perlindungan, dan check hampir semua yang lain.** Menentang dua pemain, anda sudah mengetatkan jauh melepasi range heads-up anda; menentang tiga atau lebih, c-bet bluff kosong hanyalah membakar cip, kerana hampir selalu ada seseorang yang mengenai sesuatu. Range betting — bet seluruh range dengan saiz kecil — ialah idea *heads-up* dan tidak terpakai dalam pot multiway. Jika ragu dengan tangan marginal dan dua lawan atau lebih, check.

---

## Apakah Delayed C-Bet?

Check di flop bukan penamat tangan. **Delayed c-bet** — check flop sebagai pemain yang raise preflop, kemudian bet di turn — ialah salah satu langkah yang paling kurang digunakan dalam poker. Ia paling berkesan apabila:

- **Flop memihak kepada lawan** (board rendah yang bersambung), jadi bet tidak baik — tetapi **turn mengubah gambaran** (overcard, atau kad yang meningkatkan equity anda).
- Anda **check back tangan yang agak baik** in position dan mahu bet satu street untuk value sekarang apabila board lebih selamat.
- Anda mahu **menafikan peluang raise di flop**: pemain yang merancang bluff-raise terhadap c-bet flop anda tidak mendapat bet untuk diserang, lalu terpaksa berdepan bet turn anda.

Menangguhkan bet mengubah situasi di mana c-bet automatik akan membocorkan cip menjadi bet yang terkawal dan bermaklumat, satu street kemudian.

---

## Bila TIDAK Patut C-Bet? (Check Itu Senjata, Bukan Bendera Putih)

Mari jelaskan "jangan" itu secara terang, kerana di situlah wang diselamatkan:

- **Board menghentam range lawan.** Flop 7‑6‑5 atau 9‑8‑7 mengenai tangan yang call raise jauh lebih kuat berbanding tangan anda. C-bet di sini secara autopilot hanya menderma cip — check bahagian range anda yang jauh lebih besar berbanding pada K‑7‑2, dan apabila anda bet, pilih saiz besar dan selektif.
- **Anda out of position pada board dinamik** dengan tangan marginal. Bertindak dahulu tanpa maklumat, kekalkan pot kecil dan check.
- **Anda dalam pot multiway dengan tangan kosong.** Sudah diterangkan di atas — hampir tiada fold equity, jadi jangan bet.
- **Tangan anda sesuai untuk melindungi range check.** Kadang-kadang anda sengaja check tangan kuat supaya check anda tidak automatik lemah.

Perubahan cara berfikir yang menjadikan anda pemenang: **check bukan menyerah kalah.** Pemain yang baik check *banyak*, dengan sengaja, dan itu membuat bet mereka jauh lebih menakutkan apabila bet itu datang. Jika anda rasa wajib bet semata-mata kerana anda raise preflop, refleks itulah yang merugikan wang anda.

---

## Contoh Tangan C-Bet Sebenar, dari Mula hingga Akhir

Dua spot daripada sesi yang sama menunjukkan kedua-dua belah keputusan ini.

**Spot 1 — c-bet ikut buku teks.** Saya raise ==A♣K♦== dan big blind call. Flop: ==K♠ 7♦ 2♣.== Itu board tinggi, kering dan tidak bersambung yang milik range saya — dan saya dapat **top pair, top kicker**: K♦ saya berpasangan dengan K♠, dan As menjadi kicker terbaik yang mungkin (lima kad terbaik = K♦ K♠ A♣ 7♦ 2♣). Saya bet **satu pertiga pot** sebagai range bet: ia memberi tekanan kepada tangan dia yang terlepas dan mengekalkan king serta pair yang lebih lemah dalam permainan. C-bet yang mudah dan menguntungkan.

**Spot 2 — check ikut buku teks.** Sesi yang sama, saya raise ==A♥Q♥== dan big blind call. Flop: ==7♠ 6♠ 5♦.== Board ini menghancurkan tepat tangan yang dia gunakan untuk call — suited connector, pair kecil dan straight — sedangkan saya hanya ada ace-high tanpa pair dan tanpa draw (tiada heart di board, jadi backdoor flush pun tidak ada). Dua tahun sebelumnya, saya akan "meneruskan" kerana tabiat dan kena raise. Kali ini saya **check dan lepaskan.** Jika turn yang selamat datang dan saya dapat equity tambahan, delayed c-bet masih ada; jika tidak, saya hanya rugi sedikit.

Raise preflop yang sama, flop bertentangan, langkah betul yang bertentangan. Itulah keseluruhan pelajarannya: **board yang menentukan, bukan hakikat bahawa anda raise.**

---

## Apakah 7 Kesilapan C-Bet Paling Biasa?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kesilapan | Mengapa ia merugikan anda | Pembetulan |
|:---|:---|:---|
| **C-bet setiap flop secara autopilot** | Mengabaikan bahawa banyak board memihak kepada pemain yang call | Baca tekstur dahulu |
| **Bet besar dengan range yang luas** | Range luas mahukan saiz kecil, bukan besar | Kecil di board kering, besar hanya apabila terpolarisasi |
| **C-bet ringan dalam pot multiway** | Fold equity runtuh apabila pemain bertambah | Value & draw sahaja menentang 2+ |
| **C-bet OOP terlalu kerap** | Anda tidak dapat merealisasikan equity sebanyak itu apabila bertindak dahulu | Lebih banyak check, bina range check |
| **Bet ke board yang mengenai mereka** | 7‑6‑5 menghentam range mereka, bukan range anda | Lebih banyak check; bet besar dan selektif apabila bet |
| **Barreling "sekali terus berhenti"** | C-bet flop, sentiasa lepaskan turn = mudah di-float | Ada rancangan turn sebelum menembak |
| **Triple barrel tanpa equity** | Bluff habis satu stack tanpa outs atau blocker | Bluff dengan equity sandaran atau blocker yang baik |

</div>

Setiap satu daripadanya berpunca daripada akar yang sama: **c-bet secara autopilot dan bukannya membaca board.** Betulkan itu dan permainan flop anda naik satu tahap.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-strategy | 5 Keputusan di Sebalik Poker yang Menang | /images/holdem-strategy-hero.webp
/ms/blog/holdem-3bet | Cara 3-Bet (dan Menghadapinya) | /images/holdem-3bet-hero.webp
:::

## Soalan Lazim

**Q. Apakah continuation bet dalam poker?**

A. Continuation bet, atau c-bet, ialah bet yang dibuat pada flop oleh pemain terakhir yang raise sebelum flop — aggressor preflop, termasuk pemain yang membuat 3-bet. Anda "meneruskan" gambaran kekuatan yang anda tunjukkan preflop. Tangan anda tidak perlu mengena pada flop untuk c-bet — kerana tangan terlepas di flop kira-kira dua pertiga masa, c-bet yang dipilih dengan baik selalunya memenangi pot apabila lawan tidak memegang apa-apa.

**Q. Mengapa ia dinamakan continuation bet?**

A. Kerana anda meneruskan keagresifan yang anda mulakan sebelum flop. Anda raise preflop untuk mengambil inisiatif, dan bet di flop menyambung cerita itu ke street seterusnya. Jika orang lain yang raise preflop, bet flop anda bukan c-bet — istilah ini khusus bermaksud pemain yang raise preflop membuat bet di flop.

**Q. Patutkah anda c-bet setiap flop?**

A. Tidak — inilah kesilapan c-bet yang paling biasa. Bet flop yang memihak kepada range anda (board tinggi dan kering seperti K-7-2, di mana anda memegang lebih banyak top pair dan overpair) dan check flop yang memihak kepada lawan (board rendah yang bersambung seperti 7-6-5 yang mengenai tangan yang mereka gunakan untuk call). C-bet setiap flop secara autopilot akan dihukum oleh pemain yang baik.

**Q. Berapa kerap patut anda c-bet?**

A. Ia bergantung pada posisi, board dan bilangan lawan, jadi anggap angka ini sebagai julat, bukan peraturan: kira-kira 70% atau lebih (dengan saiz kecil) in position heads-up di board kering K-high atau Q-high (board kering A-high di-bet dengan ketara kurang kerap), sekitar 30–45% out of position sebagai pemain yang raise dalam single-raised pot (lebih tinggi sebagai pemain 3-bet), dan 50% atau kurang dalam pot multiway. Kadar c-bet flop keseluruhan yang sihat ialah kira-kira 55–70% — lebih daripada 85% bermakna anda bermain secara autopilot.

**Q. Berapa saiz c-bet yang patut?**

A. Ikut board. Pada board kering dan statik, bet kecil — kira-kira satu pertiga pot — kerana range lawan lemah dan anda tidak perlu mengenakan bayaran kepada draw. Pada board basah dan dinamik, bet besar — dua pertiga pot atau lebih — untuk mengenakan bayaran kepada flush draw dan straight draw serta membina pot dengan tangan kuat anda. Dalam tournament saiz besar mengecil — lebih kerap separuh pot berbanding dua pertiga — manakala saiz kecil kekal satu pertiga.

**Q. Patutkah anda c-bet out of position?**

A. Kurang kerap berbanding in position apabila anda pemain yang raise preflop dalam single-raised pot. Bertindak dahulu setiap street tanpa maklumat, anda tidak dapat merealisasikan equity sebaik itu, jadi anda check jauh lebih banyak — termasuk sesetengah tangan yang pasti anda bet jika in position — dan anda sengaja menyimpan beberapa tangan kuat dalam range check supaya check anda tidak automatik lemah. Posisi membuat c-bet lebih berkesan, itu muktamad.

**Q. Patutkah anda c-bet dalam pot multiway?**

A. Jauh kurang berbanding heads-up. Setiap lawan tambahan menjadikannya lebih mungkin ada seseorang yang mengena, jadi fold equity anda runtuh. Menentang dua pemain atau lebih, bet tangan siap yang kuat dan draw terbaik anda untuk value dan perlindungan, dan check hampir semua yang lain. Bluff ke arah tiga pemain atau lebih ialah cara klasik untuk kehilangan wang.

**Q. Apakah delayed c-bet?**

A. Delayed c-bet ialah apabila pemain yang raise preflop check di flop dan kemudian bet di turn. Ia berguna apabila flop memihak kepada lawan (jadi bet tidak baik) tetapi turn memperbaiki equity anda, apabila anda check back tangan yang agak baik in position, atau untuk memerangkap lawan yang merancang bluff-raise terhadap bet flop anda. Ia salah satu langkah menguntungkan yang paling kurang digunakan dalam poker.

**Q. Bila anda TIDAK patut c-bet?**

A. Jangan c-bet secara lalai apabila board menghentam range lawan (board rendah yang bersambung — lebih banyak check, dan bet besar serta selektif apabila anda bet), apabila anda out of position dengan tangan marginal di board dinamik, apabila anda dalam pot multiway dengan tangan kosong, atau apabila tangan anda lebih sesuai melindungi range check. Check dalam spot ini bukan tanda lemah — ia menyelamatkan cip dan menjadikan bet anda pada masa depan lebih meyakinkan.

**Q. Adakah c-bet itu bluff?**

A. Kadang-kadang ya, kadang-kadang tidak — itulah intinya. Banyak c-bet ialah semi-bluff atau bluff tulen dengan tangan yang terlepas, bet kerana lawan juga berkemungkinan terlepas. Yang lain ialah value bet dengan tangan kuat. Strategi c-bet yang seimbang mencampurkan kedua-duanya pada board yang sama, supaya lawan tidak dapat meneka sama ada bet flop anda bermaksud kekuatan atau tangan kosong.

**Q. Apakah value bet dalam poker?**

A. Value bet ialah bet yang dibuat dengan tangan kuat dengan harapan di-*call* oleh tangan yang lebih lemah — bertentangan dengan bluff, yang berharap tangan yang lebih baik fold. Kebanyakan c-bet anda pada board yang mengenai tangan anda ialah value bet: anda bet top pair atau set untuk mengenakan bayaran kepada pair dan draw yang lebih lemah. Kemahirannya ialah memilih saiz supaya tangan lemah masih call — bet jumlah yang lawan boleh pujuk dirinya sendiri untuk bayar.

**Q. Berapakah peratusan c-bet yang baik pada HUD poker?**

A. Sekitar 55–70% untuk c-bet flop ialah julat yang sihat dan seimbang. Lebih daripada kira-kira 85% menandakan pemain yang terlalu kerap c-bet dan boleh dieksploitasi dengan float dan raise; bawah kira-kira 40% menandakan pemain yang hanya bet apabila kuat, jadi anda boleh fold dengan yakin kepada c-bet mereka dan mencuri pot apabila mereka check. Anggap ia sebagai semakan kesihatan, bukan sasaran.

---

## Playbook C-Bet, Secara Ringkas

1. **C-bet ialah bet flop oleh pemain yang raise preflop** — dan ia berkesan kerana tangan terlepas di flop kira-kira dua pertiga masa.
2. **Board yang menentukan.** Bet board tinggi dan kering yang memihak kepada range anda; check board rendah yang bersambung yang memihak kepada range lawan.
3. **Kelebihan range menetapkan kekerapan; kelebihan nut menetapkan saiz.** Bet dengan kerap pada board yang anda kuasai; bet besar apabila anda memegang lebih banyak nut atau perlu mengenakan bayaran kepada draw di board basah.
4. **Kecil (⅓) di board kering, besar (⅔+) di board basah.** Kurangkan c-bet out of position sebagai satu-satunya pemain yang raise (sebagai pemain 3-bet OOP ia terbalik kepada melebihi 97% pada ketiga-tiga board yang kami solve), dan jauh kurang dalam pot multiway.
5. **Check ialah senjata.** Pemain terbaik kerap check dan dengan sengaja — c-bet ialah pisau bedah, bukan tukul.

Buat perkara ini dengan betul dan anda berhenti membakar pot pada board yang memang bukan milik anda untuk di-bet. Gandingkan c-bet yang tajam dengan [permainan 3-bet](/ms/blog/holdem-3bet) yang mantap, kesedaran [posisi](/ms/blog/holdem-position-play) yang sebenar dan [rangka kerja strategi](/ms/blog/holdem-strategy) penuh, dan permainan flop anda akan meninggalkan golongan "bet setiap flop" di belakang tanpa disedari.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Rangka Kerja 5 Keputusan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Di mana c-bet berada dalam permainan yang menang</div>
  </a>
  <a href="/ms/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Bet Diterangkan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-bet juga bermula dalam pot 3-bet</div>
  </a>
  <a href="/ms/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bermain Mengikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mengapa c-bet lebih berkesan in position</div>
  </a>
  <a href="/ms/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Mengira Pot Odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mengapa c-bet besar mengenakan bayaran kepada draw</div>
  </a>
</div>
`.trim(),
};

export default POST;
