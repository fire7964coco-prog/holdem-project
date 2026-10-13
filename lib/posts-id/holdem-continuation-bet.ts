import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): Kapan Tembak Flop, Berapa Besar, dan Kapan Check",
  seoTitle: "Kenapa 'C-Bet Tiap Flop' Menguras Chip — Strategi Continuation Bet",
  desc: "Apa itu continuation bet, flop mana yang di-c-bet dan mana yang di-check, sizing tepat — kecil di board kering, besar di board basah — dan seberapa sering.",
  tldr: "Continuation bet (c-bet) adalah taruhan di flop oleh pemain yang raise preflop. Aturan modern bukan 'c-bet tiap flop' — melainkan taruh kecil dan sering di flop yang menguntungkan range Anda (board tinggi dan kering seperti K-7-2) dan check yang menguntungkan lawan (board rendah dan nyambung seperti 7-6-5). Beri sizing kecil — sekitar sepertiga pot — di board kering, besar — dua pertiga pot atau lebih — di board basah, c-bet lebih jarang saat out of position kalau Anda raiser tunggalnya (sebagai 3-bettor out of position keadaannya justru berbalik — di atas 97% pada ketiga board yang kami solve), dan jauh lebih jarang di pot multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-10-13",
  // 2026-09-15: ID GTO ①·⑨ 발행에 맞춰 해당 해설과 ID 이미지 역링크 반영.
  // EN 09-11 본문 대응 상태는 유지한다. 세부 이력: docs/locale-intentional-diffs.md.
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "18 mnt",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Seorang pemain poker bertaruh chip ke flop yang baru dibagikan setelah raise preflop — momen continuation bet klasik di meja felt hijau",
  tags: ["continuation bet", "c-bet poker", "apa itu c-bet", "c-bet sizing", "c-bet frequency", "kapan c-bet", "kapan tidak c-bet", "c-bet out of position", "c-bet multiway", "delayed c-bet"],
  content: `
Selama dua tahun pertama saya, "c-bet" adalah satu-satunya rencana flop yang saya punya. Saya raise preflop, jadi saya bertaruh di flop. Setiap kali. Board ace-high, saya bertaruh. Board penuh straight dan flush yang jelas menghantam orang yang meng-call saya? Saya tetap bertaruh — dan di-raise, di-call, dan di-check-raise sampai kehilangan pot demi pot. Saya kira c-betting *adalah* strateginya. Ternyata c-bet itu pisau bedah, dan saya mengayunkannya seperti palu.

**Continuation bet (c-bet)** adalah taruhan di flop oleh pemain yang raise sebelumnya. Ini taruhan paling umum di poker — sekaligus yang paling parah disalahgunakan. Nasihat lama adalah "c-bet hampir tiap flop." Strategi modern yang sudah dicek solver mengatakan sesuatu yang lebih berguna dan lebih menguntungkan: ==taruh flop yang menguntungkan range *Anda*, dan check yang menguntungkan range lawan.== Ini playbook c-bet lengkap — flop mana, seberapa sering, seberapa besar, in dan out of position, multiway, dan kapan check justru langkah pemenang. Ini bagian flop dari [strategi Texas Hold'em](/id/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") yang menang.

---

### C-bet, dalam angka

:::stripe
~2 dari 3 | Seberapa sering sebuah tangan meleset di flop
⅓ pot | Ukuran "range bet" kecil di board kering
55–70% | Tingkat c-bet flop keseluruhan yang sehat
Check | Sering langkah terbaik, bukan kelemahan
:::

---

## Apa Itu Continuation Bet (C-Bet)?

**Continuation bet adalah taruhan yang dibuat di flop oleh pemain yang menjadi agresor sebelum flop** — orang terakhir yang raise. Anda "melanjutkan" cerita kekuatan yang Anda mulai preflop. Yang penting, ==Anda tak perlu mengenai flop untuk c-bet==; sebagian besar c-bet bagus dibuat dengan tangan yang benar-benar meleset.

Alasannya berhasil adalah satu statistik sederhana: **dua kartu hole yang tidak berpasangan gagal membentuk pair di flop sekitar dua pertiga dari waktu (67,6%).** Jadi saat Anda bertaruh, lawan Anda sering juga meleset — dan banyak dari tangan itu fold. Anda bertaruh bukan karena kuat; Anda bertaruh karena *mereka mungkin lemah* dan Andalah yang mengklaim pimpinan.

Begitu Anda paham c-bet flop, sisa tangga "barreling" mengikuti:

- **Delayed c-bet** — Anda *check* flop, lalu bertaruh di turn. Bagus untuk pot yang flop-nya menguntungkan lawan tapi turn-nya mengubah keadaan.
- **Double barrel** — Anda c-bet flop dan bertaruh *lagi* di turn.
- **Triple barrel** — Anda bertaruh di ketiga street: flop, turn, dan river. Line paling agresif, untuk value kuat atau bluff yang dipilih baik dengan blocker.

Jika [aksi taruhan](/id/blog/holdem-betting-actions) dasar berupa check, bet, dan raise masih terasa kabur, mulailah dari sana. Kalau tidak, mari perbaiki kesalahan yang hampir semua orang lakukan.

---

## Nasihat Lama "C-Bet Tiap Flop" Itu Salah — Inilah yang Berubah

Kalau Anda belajar poker sebelum era solver, Anda diberitahu untuk c-bet sekitar dua pertiga pot di *sebagian besar* flop. Itu berhasil sejenak karena lawan terlalu sering fold. Lalu semua orang belajar melawan — float, check-raise, dan call sampai showdown — dan c-bet membabi buta menjadi leak.

Inilah hal krusial yang sebenarnya dikatakan strategi modern, karena mudah disalahpahami: **ini BUKAN "c-bet lebih jarang di mana-mana."** Ini sebuah *pemisahan*:

- Di board yang menguntungkan Anda, taruh **kecil dan bahkan lebih sering** daripada nasihat lama — kadang seluruh range Anda.
- Di board yang menguntungkan lawan, **check jauh lebih banyak** — dan bertaruh lebih besar serta lebih selektif saat Anda melakukannya.

Konsep yang mendasarinya adalah ==range advantage==: range keseluruhan siapa yang lebih kuat di flop tertentu ini. Sebagai raiser preflop, Anda memegang lebih banyak kartu besar dan overpair, jadi **board tinggi dan kering milik Anda** — dan board penuh kartu sedang yang nyambung milik pemain yang meng-call. Kuasai satu ide itu dan Anda unggul dari setiap pemain "asal c-bet" di meja.

Angka untuk opener tidak bisa langsung diterapkan kepada caller. Pada contoh A♥7♦2♣ setelah BTN open dan BB call, BB check dengan 98,2% range-nya, termasuk top pair. Analisis [A-7-2: mengapa top pair juga check](/id/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-id.webp") memperlihatkan bagaimana posisi dan realisasi equity memengaruhi keputusan itu.

> **Tinjau hand Anda sendiri dari spot ini** — Contoh A-7-2 di atas adalah pot BTN open dan BB call. Jika Anda pernah memainkan hand dalam situasi yang sama, buka [Tinjau hand](https://solver.holdemmaster.com/?view=hand-review&lang=id) di solver, atur situasi (**Open · Call**, BTN dan BB) serta **Posisi Anda**, pilih **2 kartu Anda** dan **3 kartu flop**, lalu tekan aksi sesuai urutan yang benar-benar terjadi, termasuk aksi lawan. Hasilnya menunjukkan apakah pilihan itu termasuk **Pilihan terbaik**, **Dapat diterima**, atau **Perlu ditinjau**. Peninjauan memakai chart preflop aplikasi (cash online 6-max, 100bb), jadi angkanya bisa sedikit berbeda dari contoh di atas, dan peninjauan ini mungkin tidak cocok untuk permainan di bar atau turnamen.

---

## Flop Mana yang Di-C-Bet: Semua Soal Board Texture

![Flop rainbow J-7-2 yang kering dan tak nyambung di meja felt hijau dengan tumpukan chip kecil bertaruh di depan — jenis board kartu tinggi milik raiser preflop](/images/holdem-cbet-dry-board.webp "Flop tinggi, kering, tak nyambung seperti J-7-2 ini menguntungkan raiser preflop — board c-bet klasik yang kecil dan berfrekuensi tinggi")

Ini inti dari c-betting. Sebelum Anda memikirkan sizing atau frekuensi, ajukan satu pertanyaan: **apakah flop ini mengenai range saya, atau range lawan?** Inilah petanya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tipe flop | Contoh | Menguntungkan siapa | In position | Kenapa |
|:---|:---|:---|:---|:---|
| **Tinggi, kering, tak nyambung** | K‑7‑2, A‑8‑3 | **Anda (raiser)** | Taruh **sering & kecil** (⅓) | Anda punya lebih banyak top pair & overpair; mereka meleset |
| **Rendah, nyambung** | 7‑6‑5, 9‑8‑6 | **Caller** | **Check lebih banyak**; taruh besar & selektif saat melakukannya | Mengenai suited connector dan small pair mereka |
| **Paired rendah** | 8‑8‑3, 5‑5‑2 | **Anda (sedikit)** | Taruh **sering & kecil** | Nyaris tak ada yang punya trips; overcard/overpair Anda memimpin |
| **Monotone** | K♠9♠4♠ | Campur — hati-hati | Taruh **lebih jarang, lebih kecil** | Flush jadi membatasi kedua range; jaga pot tetap murah |
| **Two-tone & basah** | Q♥J♥7♣ | Condong caller | **Polarisasi:** besar dengan value/draw, check tangan kosong | Banyak draw — bebani mereka atau keluar |

</div>

Dua ide terkait melakukan semua kerja di sini:
- **Range advantage menentukan seberapa *sering* Anda bertaruh.** Lebih banyak range Anda kuat di board ini → bertaruh lebih sering.
- **Nut advantage menentukan seberapa *besar* Anda bertaruh.** Anda memegang lebih banyak tangan terbaik mutlak (set, straight) → bertaruh lebih besar.

Bagian halusnya: Anda bisa punya satu tanpa yang lain. Di A‑8‑3 Anda punya jauh lebih banyak top pair (range advantage) tapi hampir tak ada yang punya set, jadi Anda **bertaruh sering tapi kecil**. Di board yang Anda pegang jauh lebih banyak set dan overpair, Anda **bertaruh besar**. Kendalikan dua tuas ini dengan benar dan c-bet sizing berhenti menjadi tebakan.

---

## Seberapa Sering Solver C-Bet di Tiap Jenis Board?

**Di pot single-raised saat button open dan big blind call, solver membuat button c-bet dengan 54,7% dari seluruh range-nya setelah big blind check.** Rata-rata itu menyembunyikan sebaran yang lebar: dari 43,5% di flop A-high sampai 67,8% di flop berpasangan, dengan sizing utama yang juga berbeda. Flop berpasangan dan K-high bertumpu pada bet sepertiga pot; flop A-high, T-high dan 9-high, serta flop rendah justru lebih sering memakai bet 75%. Tabel di bawah mengelompokkan seluruh 1.755 flop yang sudah dihitung sebelumnya menurut jenis board.

> **Cara angka ini dihitung** — Hasil dari [solver GTO gratis](/id/solver) HoldemMaster untuk open BTN vs call BB di 1.755 flop (dikelompokkan berdasarkan suit kartu yang setara) — stack 100bb · bet flop 33%/75% · bet turn dan river 60% · raise 60% · tanpa rake · target galat 0,3%. Range input = chart preflop milik solver (range konsensus yang disusun dari sumber publik). Ini perhitungan heads-up, jadi tidak bisa dipindahkan begitu saja ke pot multiway.

### Menurut kartu tertinggi — c-bet button setelah BB check

Dari seluruh 22.100 kemungkinan flop, jenis yang paling sering muncul adalah Q-high atau J-high (23,5%), dan jenis yang paling jarang di-c-bet oleh button adalah A-high (43,5%).

| Jenis board | Porsi flop | Total c-bet | 33% | 75% |
|:---|:---:|:---:|:---:|:---:|
| **Berpasangan** | 17,2% | **67,8%** | 60,6% | 7,2% |
| **A-high** | 19,1% | **43,5%** | 16,3% | 27,2% |
| **K-high** | 15,9% | **57,2%** | 40,8% | 16,4% |
| **Q-high / J-high** | 23,5% | **52,1%** | 27,5% | 24,7% |
| **T-high / 9-high** | 14,2% | **53,2%** | 19,8% | 33,4% |
| **Rendah (8-high ke bawah)** | 10,1% | **57,7%** | 23,8% | 33,8% |
| **Semua flop** | 100% | **54,7%** | 31,7% | 23,0% |

Bahkan di dalam satu jenis, total c-bet berayun jauh dari satu flop ke flop lain. Inilah flop di tiap jenis tempat button paling jarang dan paling sering bet:

| Jenis board | Paling jarang bet | Paling sering bet |
|:---|:---|:---|
| **Berpasangan** | A♣Q♦Q♣ 37,7% | 7♥7♦7♣ 97,1% |
| **A-high** | A♣9♣2♣ 28,5% | A♥7♦2♣ 59,0% |
| **K-high** | K♣Q♣2♣ 32,5% | K♥7♦2♣ 90,2% |
| **Q-high / J-high** | Q♥J♦8♣ 35,5% | Q♥7♦2♣ 84,7% |
| **T-high / 9-high** | T♣9♦7♣ 38,5% | T♥6♦2♣ 73,5% |
| **Rendah (8-high ke bawah)** | 8♦7♦4♣ 46,4% | 7♥6♦2♣ 76,3% |
| **Semua flop** | A♣9♣2♣ 28,5% | 7♥7♦7♣ 97,1% |

Sebaran di dalam tiap jenis inilah pelajaran sebenarnya dari tabel tersebut. Board K-high kering seperti K♥7♦2♣ di-bet 90,2% dari waktu, tetapi K♣Q♣2♣ yang monotone turun ke 32,5%. "Ini K-high, jadi saya bet" tidak cukup; Anda harus membaca **tinggi kartu, suit, dan keterhubungan sekaligus**. Di board berpasangan, hampir seluruh c-bet memakai sizing kecil (60,6% dari 67,8%), cocok dengan aturan "kecil di board kering" pada bagian sizing di bawah. Satu-satunya tempat data membantah aturan praktis itu adalah A-high: untuk jenis ini secara keseluruhan, bet 75% lebih sering daripada bet 33% (27,2% berbanding 16,3%). Penyebabnya juga bukan flop monotone yang mengerek rata-rata — kalau hanya flop A-high rainbow yang dihitung, bet besar tetap lebih sering dipakai (25,9% berbanding 18,8%). Satu board tertentu seperti A-7-2 tetap bisa punya sizing yang berbeda dari rata-rata jenisnya.

### Menurut suit dan keterhubungan — perhitungan yang sama dari sumbu lain

| Jenis board | Porsi flop | Total c-bet | 33% · 75% |
|:---|:---:|:---:|:---:|
| **Rainbow** (tiga suit berbeda) | 39,8% | **58,8%** | 36,1% · 22,7% |
| **Two-tone** (dua kartu satu suit) | 55,1% | **52,6%** | 28,7% · 23,9% |
| **Monotone** (tiga kartu satu suit) | 5,2% | **44,2%** | 29,2% · 15,1% |
| **Terhubung** (tidak berpasangan · ketiganya dalam rentang lima rank) | 18,5% | **49,1%** | 18,8% · 30,3% |
| **Tidak terhubung** (tidak berpasangan · sisanya) | 64,3% | **52,8%** | 27,7% · 25,1% |

Makin terkumpul suit-nya, makin jarang button c-bet (58,8% → 52,6% → 44,2%), dan board terhubung lebih jarang di-bet tetapi dengan sizing 75% sebagai bet utama. "Terhubung" di sini berarti tiga rank berbeda yang muat dalam lima rank berurutan (rank tertinggi dikurangi terendah 4 atau kurang, dan as juga boleh dihitung sebagai kartu rendah: A-2-4 terhubung, A-7-2 tidak). Board berpasangan (17,2%) tidak dimasukkan ke pembagian terhubung/tidak terhubung; angkanya sama dengan tabel pertama.

### Kartu tertinggi × suit — total c-bet

| Tinggi board | Rainbow | Two-tone | Monotone |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 70,3% | 65,3% | — |
| **A-high** | 44,6% | 43,6% | 35,4% |
| **K-high** | 63,3% | 54,9% | 40,8% |
| **Q-high / J-high** | 55,7% | 50,6% | 44,2% |
| **T-high / 9-high** | 57,9% | 50,4% | 49,7% |
| **Rendah (8-high ke bawah)** | 60,6% | 55,5% | 59,1% |

Di keenam baris, **rainbow lebih tinggi daripada two-tone.** Contoh paling jelas adalah K-high: rainbow 63,3% berbanding two-tone 54,9%, selisih 8,4 poin — jadi K♥9♠6♣ dan K♥9♥6♣ sudah menjadi board yang berbeda begitu muncul dua kartu hati. Flop berpasangan yang monotone tidak mungkin ada, karena dua kartu dengan rank sama tidak pernah punya suit yang sama. Monotone rendah (59,1%) adalah satu-satunya sel monotone yang lebih tinggi daripada sel two-tone di sebelahnya, dan hampir seluruh c-bet itu memakai sizing 33% (57,6%).

### Bagaimana big blind merespons c-bet?

**Menghadapi c-bet 33%**

| Jenis board | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 34,0% | 48,5% | 17,6% |
| **A-high** | 36,4% | 54,5% | 9,1% |
| **K-high** | 32,3% | 55,2% | 12,5% |
| **Q-high / J-high** | 29,5% | 57,0% | 13,5% |
| **T-high / 9-high** | 28,0% | 57,4% | 14,6% |
| **Rendah (8-high ke bawah)** | 29,4% | 52,6% | 18,0% |
| **Semua flop** | 32,1% | 53,3% | 14,6% |

**Menghadapi c-bet 75%**

| Jenis board | Fold | Call | Raise |
|:---|:---:|:---:|:---:|
| **Berpasangan** | 48,9% | 38,1% | 13,0% |
| **A-high** | 50,4% | 46,0% | 3,6% |
| **K-high** | 49,7% | 45,1% | 5,1% |
| **Q-high / J-high** | 47,7% | 45,6% | 6,7% |
| **T-high / 9-high** | 46,3% | 44,7% | 9,0% |
| **Rendah (8-high ke bawah)** | 46,2% | 40,8% | 13,0% |
| **Semua flop** | 48,1% | 44,4% | 7,5% |

Bet 33% sudah impas sebagai pure bluff kalau lawan fold ==0,33 ÷ 1,33 = sekitar 24,8%== dari waktu, padahal big blind fold rata-rata 32,1%; melawan bet 75% (==0,75 ÷ 1,75 = sekitar 42,9%==) ia fold 48,1%. Di flop, big blind tidak bertahan sebanyak yang disarankan minimum defense frequency (MDF). Melawan c-bet 33%, check-raise paling sering muncul di board rendah (18,0%) dan board berpasangan (17,6%), dan paling jarang di A-high (9,1%) — untuk satu contoh check-raise di board rendah yang diurai hand demi hand, lihat [kapan big blind check-raise di flop rendah](/id/blog/low-board-check-raise).

Bet duluan ke arah raiser (donk bet) hanya 2,4% bagi big blind secara keseluruhan (1,7% dengan 33% ditambah 0,7% dengan 75%). Dibagi menurut suit, yang tertinggi adalah monotone dengan 7,2% (92,8% check); dibagi menurut tinggi kartu dan suit sekaligus, flop monotone rendah mencapai 9,2%. Board pengecualian tempat big blind sebaiknya bet duluan dibahas di [panduan donk bet](/id/blog/donk-bet-strategy).

> **Cara membaca tabel ini** — Setiap sel adalah rata-rata flop-flopnya, dibobot menurut seberapa sering flop itu benar-benar muncul (semua varian suit dari satu flop dihitung bersama). Untuk spot yang bukan aksi pertama, seperti button setelah big blind check, setiap flop juga dibobot menurut seberapa sering spot itu tercapai di flop tersebut, dan di dalam satu flop setiap hand dibobot menurut peluang memegangnya dan sampai di spot itu. Flop yang tercantum di "paling jarang bet" dan "paling sering bet" masing-masing mewakili seluruh kelompok suit-nya (A♣9♣2♣ = semua flop A-9-2 monotone). Karena pembulatan, satu baris bisa berjumlah 99,9–100,1.

---

## Seberapa Sering Anda Harus C-Bet? (Frekuensi)

Tak ada satu persentase c-bet yang "benar" — siapa pun yang memberi Anda satu angka sedang menjual leak. Frekuensi berayun mengikuti posisi, board, dan berapa pemain dalam pot. Inilah rujukan cepatnya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situasi | Frekuensi c-bet kasar | Catatan |
|:---|:---:|:---|
| **In position, heads-up, board kering** | **70–100%** (kecil) | "Range bet" klasik — taruh nyaris semuanya, mungil |
| **In position, heads-up, board basah** | **~50–60%** | Lebih terpolarisasi — value dan draw bertaruh, tangan kosong check |
| **Out of position, heads-up (pot single-raised, Anda yang raise)** | **~30–45%** | Check jauh lebih banyak untuk melindungi checking range. Sebagai *3-bettor* out of position keadaannya berbalik: di atas 97% pada ketiga board yang kami solve, hampir semuanya dengan dua pertiga pot di Q♥T♥7♠ dan 8♦5♣2♠, tapi sebagian besar dengan sepertiga pot di A♦K♠2♥ (57,8%); lihat [panduan posisi](/id/blog/holdem-position-play) |
| **Multiway (2 lawan)** | **~50% atau kurang** | Ada yang mungkin nyambung — perketat |
| **Multiway (3+ lawan)** | **Hanya tangan kuat & draw bagus** | Fold equity praktis lenyap |

</div>

Sebagai patokan kewajaran, tingkat c-bet flop keseluruhan pemain solid berada di sekitar **55–70%** di semua board. Kalau Anda c-bet lebih dari ~85% flop, Anda main autopilot dan pemain bagus akan menghukumnya; di bawah ~40% Anda terlalu jujur, hanya bertaruh saat mengenai. Tapi ingat — angka itu *agregat*, bukan target. Anda sampai ke sana dengan bertaruh di board yang tepat, bukan dengan memenuhi kuota.

Sebagai satu titik acuan konkret: di spot heads-up BTN vs BB dari solver di atas, rata-rata c-bet button setelah big blind check adalah **54,7%**, dan flop satu per satu berkisar dari 28,5% (A-9-2 monotone) sampai 97,1% (7-7-7). Pelajari frekuensi menurut jenis board, bukan sebagai satu angka yang harus dikejar.

---

## Berapa Besar Anda Harus C-Bet? (Sizing)

Sizing mengikuti langsung dari board texture. Dua gigi mencakup nyaris semuanya:

- **Kecil — sekitar sepertiga pot** — di board kering, statis, ber-range-advantage, terutama in position. Range lawan lemah dan tak akan banyak membaik, jadi Anda tak perlu membebani draw; taruhan kecil sudah menempatkan semua tangan kosong mereka di posisi sulit sambil menahan tangan yang lebih lemah untuk membayar Anda. Taruhan lebih besar di sini justru mem-fold tangan yang Anda *ingin* meng-call.
- **Besar — dua pertiga pot atau lebih** — di board basah, dinamis, dan kapan pun range Anda terpolarisasi. Kini Anda perlu membebani flush dan straight draw (memangkas equity mereka) dan membangun pot dengan tangan kuat Anda. Taruhan kecil membuat draw meng-call terlalu murah.

Beri angka nyata. Misalkan pot-nya ==$30== di flop:

- C-bet **sepertiga pot** adalah ==$10== — range bet board kering Anda.
- C-bet **dua pertiga pot** adalah ==$20== — sizing board basah Anda untuk membebani draw.

Di **turnamen**, condong sedikit lebih kecil: ukuran kecilnya tetap sepertiga, tapi ukuran besarnya lebih sering **setengah pot** ketimbang dua pertiga, karena stack Anda berharga — di freezeout Anda tak bisa reload, dan re-entry pun butuh buy-in baru. Apa pun yang Anda pilih, ikat ukurannya pada board, bukan pada kebiasaan.

Untuk melihat alasan memilih ukuran tertentu, buka contoh Q♥T♥7♠ dalam pot 3-bet. Pada konfigurasi itu, BB sebagai 3-bettor memakai [bet dua pertiga pot dengan 98,4% range-nya](/id/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-id.webp"). Pembahasannya membandingkan harga call untuk draw dan menjelaskan mengapa bet kecil memberi lawan kesempatan lebih murah.

---

## C-Betting Out of Position

![Seorang pemain poker beraksi lebih dulu saat out of position, jari di felt di samping chip-nya dengan lawan menunggu dalam bayang di belakang](/images/holdem-cbet-oop.webp "Out of position Anda beraksi lebih dulu tanpa informasi, jadi Anda check jauh lebih banyak dan c-bet range yang lebih ketat dan lebih kuat")

C-betting jauh lebih sulit **out of position** di pot single-raised — saat Anda harus beraksi lebih dulu di setiap street tanpa bacaan atas apa yang akan dilakukan lawan (sebagai 3-bettor keunggulan range mengubah ini, lihat [panduan posisi](/id/blog/holdem-position-play)). Dua penyesuaian:

1. **C-bet lebih jarang.** Tanpa posisi Anda tak bisa mengontrol pot sebaik itu atau merealisasikan equity Anda, jadi Anda check jauh lebih banyak — bahkan tangan yang akan otomatis di-bet in position. Di beberapa board, solver c-bet out of position di pot single-raised hanya seperempat waktu.
2. **Bangun checking range yang nyata.** Kalau Anda hanya bertaruh saat kuat dan check saat lemah, lawan yang jeli membaca Anda seperti buku dan menyerang setiap check. Jadi Anda sengaja meng-check *sebagian* tangan kuat juga, yang menjaga check Anda tetap berbahaya dan seluruh permainan Anda lebih sulit dilawan. Inilah tepat kenapa [posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") merupakan keunggulan struktural — c-bet cukup bekerja lebih baik saat Anda beraksi terakhir.

---

## C-Betting di Pot Multiway

Jebakan c-bet terbesar tunggal adalah **menembak ke banyak lawan seolah heads-up.** Setiap pemain tambahan dalam pot memangkas peluang bahwa semua orang meleset — jadi fold equity Anda, seluruh mesin dari bluff c-bet, runtuh.

Aturan multiway sederhana: **taruh made hand kuat Anda dan draw terbaik Anda untuk value dan proteksi, dan check nyaris semua yang lain.** Melawan dua pemain Anda sudah memperketat jauh di luar range heads-up Anda; melawan tiga atau lebih, bluff c-bet polos sama saja membakar chip, karena hampir selalu ada yang mengenai sepotong. Range betting — bertaruh seluruh range Anda kecil — adalah ide *heads-up* dan tak berlaku untuk pot multiway. Saat ragu dengan tangan marginal dan dua atau lebih lawan, check.

---

## Delayed C-Bet

Meng-check flop bukan akhir tangan. **Delayed c-bet** — meng-check flop sebagai raiser preflop, lalu bertaruh di turn — adalah salah satu langkah paling kurang dimanfaatkan di poker. Langkah ini paling ampuh saat:

- **Flop menguntungkan lawan** (board rendah, nyambung), jadi bertaruh buruk — tapi **turn mengubah gambar** (overcard, atau kartu yang menaikkan equity Anda).
- Anda **meng-check-back tangan lumayan** in position dan ingin bertaruh satu street value kini setelah board lebih aman.
- Anda ingin **meniadakan raise di flop**: pemain yang berencana bluff-raise c-bet flop Anda tak mendapat taruhan untuk diserang, dan malah menghadapi taruhan turn Anda.

Menunda mengubah spot di mana c-bet otomatis akan menguras chip menjadi taruhan terkendali dan terinformasi satu street kemudian.

---

## Kapan TIDAK C-Bet (Check Itu Senjata, Bukan Bendera Putih)

Mari buat "jangan"-nya eksplisit, karena di sinilah uang diselamatkan:

- **Board menghantam range lawan.** Flop 7‑6‑5 atau 9‑8‑7 mengenai tangan yang meng-call raise jauh lebih keras daripada mengenai tangan Anda. Bertaruh di sini dengan sebagian besar range Anda cuma menyumbang chip — check jauh lebih sering, dan saat Anda bertaruh, pilih ukuran besar dan selektif.
- **Anda out of position di board dinamis** dengan tangan marginal. Beraksi lebih dulu tanpa informasi, jaga pot tetap kecil dan check.
- **Anda multiway dengan tangan kosong.** Dibahas di atas — fold equity nyaris tak ada, jadi jangan bertaruh.
- **Tangan Anda ingin melindungi checking range.** Kadang Anda meng-check tangan kuat dengan sengaja supaya check Anda tak otomatis lemah.

Pergeseran pola pikir yang membuat Anda menang: **check bukan menyerah.** Pemain bagus meng-check *banyak*, dengan sengaja, dan itu membuat taruhan mereka jauh lebih menakutkan saat memang muncul. Kalau Anda merasa wajib bertaruh cuma karena raise preflop, refleks itu menghabiskan uang Anda.

---

## Sebuah Tangan C-Bet Nyata, dari Awal sampai Akhir

Dua spot dari sesi yang sama menunjukkan kedua sisi keputusan.

**Spot 1 — c-bet buku teks.** Saya raise ==A♣K♦== dan big blind meng-call. Flop: ==K♠ 7♦ 2♣.== Itu board tinggi, kering, tak nyambung yang milik range saya — dan saya mem-flop **top pair, top kicker**: K♦ saya berpasangan dengan K♠, dengan ace sebagai kicker terbaik yang mungkin (best five = K♦ K♠ A♣ 7♦ 2♣). Saya bertaruh **sepertiga pot** sebagai range bet: itu menekan tangan mereka yang meleset dan menahan king dan pair yang lebih lemah. C-bet mudah dan menguntungkan.

**Spot 2 — check buku teks.** Sesi yang sama, saya raise ==A♥Q♥== dan big blind meng-call. Flop: ==7♠ 6♠ 5♦.== Board ini menghancurkan tepat tangan yang dia call — suited connector, small pair, dan straight — sementara saya cuma ace-high tanpa pair dan tanpa draw (tak ada heart di board, jadi bahkan bukan backdoor flush). Dua tahun sebelumnya saya akan "melanjutkan" karena kebiasaan dan kena raise. Kini saya **check dan menyerah.** Kalau turn aman datang dan saya mendapat equity, delayed c-bet tersedia; kalau tidak, saya kehilangan seminimal mungkin.

Raise preflop sama, flop berlawanan, langkah tepat berlawanan. Itu seluruh pelajarannya: **board yang memutuskan, bukan fakta bahwa Anda raise.**

---

## 7 Kesalahan C-Bet Paling Umum

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kesalahannya | Kenapa merugikan Anda | Perbaikannya |
|:---|:---|:---|
| **C-bet tiap flop dengan autopilot** | Mengabaikan bahwa banyak board menguntungkan caller | Baca texture-nya dulu |
| **Bertaruh besar dengan range lebar** | Range lebar ingin sizing kecil, bukan besar | Kecil di kering, besar hanya saat terpolarisasi |
| **C-bet ringan di multiway** | Fold equity runtuh dengan lebih banyak pemain | Hanya value & draw vs 2+ |
| **C-bet OOP terlalu sering** | Anda tak bisa merealisasikan equity sebanyak itu saat beraksi lebih dulu | Check lebih banyak, bangun checking range |
| **Bertaruh ke board yang mengenai mereka** | 7‑6‑5 menghantam range mereka, bukan Anda | Check lebih banyak; saat bertaruh, besar dan selektif |
| **Barreling "sekali-lalu-berhenti"** | C-bet flop, selalu menyerah di turn = mudah di-float | Punya rencana turn sebelum menembak |
| **Triple-barrel tanpa equity** | Bluff habis-habisan tanpa out atau blocker | Bluff dengan equity cadangan atau blocker bagus |

</div>

Semuanya berpangkal pada akar yang sama: **c-bet autopilot alih-alih membaca board.** Perbaiki itu dan permainan flop Anda naik satu level.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-strategy | 5 Keputusan di Balik Poker yang Menang | /images/holdem-strategy-hero.webp
/id/blog/holdem-3bet | Cara 3-Bet (dan Menghadapinya) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. Apa itu continuation bet di poker?**

A. Continuation bet, atau c-bet, adalah taruhan yang dibuat di flop oleh pemain terakhir yang raise sebelum flop — agresor preflop, termasuk pemain yang melakukan 3-bet. Anda "melanjutkan" merepresentasikan kekuatan yang Anda tunjukkan preflop. Anda tak perlu mengenai flop untuk c-bet — karena sebuah tangan meleset di flop sekitar dua pertiga dari waktu, c-bet yang dipilih baik sering memenangkan pot saat lawan Anda tak punya apa-apa.

**Q. Kenapa disebut continuation bet?**

A. Karena Anda melanjutkan agresi yang Anda mulai sebelum flop. Anda raise preflop untuk mengambil pimpinan, dan taruhan flop melanjutkan cerita itu ke street berikutnya. Kalau orang lain yang raise preflop, taruhan flop Anda bukan c-bet — istilah ini khusus berarti raiser preflop yang bertaruh di flop.

**Q. Haruskah Anda c-bet tiap flop?**

A. Tidak — ini kesalahan c-bet paling umum. Taruh flop yang menguntungkan range Anda (board tinggi dan kering seperti K-7-2, di mana Anda memegang lebih banyak top pair dan overpair) dan check yang menguntungkan lawan (board rendah dan nyambung seperti 7-6-5 yang mengenai tangan yang mereka call). C-bet tiap flop dengan autopilot dihukum pemain bagus.

**Q. Seberapa sering Anda harus c-bet?**

A. Tergantung posisi, board, dan jumlah lawan, jadi perlakukan ini sebagai rentang, bukan aturan: kira-kira 70–100% (dengan sizing kecil) in position heads-up di board kering, sekitar 30–45% out of position sebagai raiser di pot single-raised (lebih tinggi saat Anda yang 3-bet), dan 50% atau kurang di multiway. Tingkat c-bet flop keseluruhan yang sehat sekitar 55–70% — di atas 85% berarti Anda main autopilot.

**Q. Berapa besar Anda harus c-bet?**

A. Ukur sesuai board. Di board kering dan statis taruh kecil — sekitar sepertiga pot — karena range lawan lemah dan Anda tak perlu membebani draw. Di board basah dan dinamis taruh besar — dua pertiga pot atau lebih — untuk membebani flush dan straight draw serta membangun pot dengan tangan kuat Anda. Di turnamen ukuran besarnya mengecil — lebih sering setengah pot ketimbang dua pertiga — sementara ukuran kecilnya tetap sepertiga.

**Q. Haruskah Anda c-bet out of position?**

A. Lebih jarang daripada in position saat Anda adalah raiser preflop di pot single-raised. Beraksi lebih dulu di setiap street tanpa informasi, Anda tak bisa merealisasikan equity sebaik itu, jadi Anda check jauh lebih banyak — bahkan sebagian tangan yang akan Anda auto-bet in position — dan Anda sengaja menyimpan sebagian tangan kuat dalam checking range Anda supaya check Anda tak otomatis lemah. Posisi membuat c-bet bekerja lebih baik, titik.

**Q. Haruskah Anda c-bet di pot multiway?**

A. Jauh lebih jarang daripada heads-up. Setiap lawan tambahan membuat lebih mungkin seseorang nyambung, jadi fold equity Anda runtuh. Melawan dua pemain atau lebih, taruh made hand kuat Anda dan draw terbaik untuk value dan proteksi, dan check nyaris semua yang lain. Bertaruh bluff ke tiga pemain atau lebih adalah cara klasik membuang uang.

**Q. Apa itu delayed c-bet?**

A. Delayed c-bet adalah saat raiser preflop meng-check flop lalu bertaruh di turn. Berguna saat flop menguntungkan lawan (jadi bertaruh buruk) tapi turn meningkatkan equity Anda, saat Anda check-back tangan lumayan in position, atau untuk menangkap lawan yang berencana bluff-raise taruhan flop Anda. Ini salah satu langkah menguntungkan yang paling kurang dimanfaatkan di poker.

**Q. Kapan Anda TIDAK boleh c-bet?**

A. Jangan c-bet secara default saat board menghantam range lawan (board rendah dan nyambung — check lebih banyak, dan saat bertaruh, besar dan selektif), saat Anda out of position dengan tangan marginal di board dinamis, saat Anda multiway dengan tangan kosong, atau saat tangan Anda lebih baik melindungi checking range. Meng-check di spot-spot ini bukan kelemahan — itu menyelamatkan chip dan membuat taruhan Anda di masa depan lebih kredibel.

**Q. Apakah c-bet itu bluff?**

A. Kadang ya, kadang tidak — itulah intinya. Banyak c-bet adalah semi-bluff atau pure bluff dengan tangan yang meleset, bertaruh karena lawan Anda mungkin juga meleset. Yang lain adalah value bet dengan tangan kuat. Strategi c-betting yang seimbang mencampur keduanya di board yang sama, jadi lawan tak bisa menebak apakah taruhan flop Anda berarti kekuatan atau tangan kosong.

**Q. Apa itu value bet di poker?**

A. Value bet adalah taruhan yang Anda buat dengan tangan kuat, berharap *di-call* oleh tangan yang lebih buruk — kebalikan dari bluff, yang berharap membuat tangan yang lebih baik fold. Sebagian besar c-bet Anda di board yang Anda kenai adalah value bet: Anda bertaruh top pair atau set untuk membebani pair yang lebih lemah dan draw. Keterampilannya ada di sizing supaya tangan yang lebih lemah tetap mau call — pasang jumlah yang masih terasa layak dibayar oleh lawan.

**Q. Berapa persentase c-bet yang bagus di HUD poker?**

A. Sekitar 55–70% untuk c-bet flop adalah band yang sehat dan seimbang. Di atas sekitar 85% menandakan orang yang c-bet terlalu banyak dan bisa dieksploitasi dengan float dan raise; di bawah sekitar 40% menandakan pemain yang hanya bertaruh saat kuat, jadi Anda bisa fold dengan percaya diri terhadap c-bet mereka dan menyerang saat mereka check. Perlakukan sebagai uji kewajaran, bukan target.

---

## Playbook C-Bet, Singkatnya

1. **C-bet adalah taruhan flop oleh raiser preflop** — dan ia berhasil karena tangan meleset di flop sekitar dua pertiga dari waktu.
2. **Board yang memutuskan.** Taruh board tinggi dan kering yang menguntungkan range Anda; check board rendah dan nyambung yang menguntungkan lawan.
3. **Range advantage menetapkan frekuensi; nut advantage menetapkan ukuran.** Bertaruh sering di board yang Anda dominasi; bertaruh besar saat Anda memegang lebih banyak nut atau perlu membebani draw di board basah.
4. **Kecil (⅓) di kering, besar (⅔+) di basah.** C-bet lebih jarang out of position kalau Anda raiser tunggalnya (sebagai 3-bettor out of position keadaannya justru berbalik — di atas 97% pada ketiga board yang kami solve), dan jauh lebih jarang di multiway.
5. **Check itu senjata.** Pemain terbaik meng-check sering dan dengan sengaja — c-bet itu pisau bedah, bukan palu.

Kuasai ini dan Anda berhenti membakar pot di board yang memang bukan milik Anda untuk di-bet. Padukan c-betting tajam dengan [permainan 3-bet](/id/blog/holdem-3bet) yang solid, kesadaran [posisi](/id/blog/holdem-position-play) yang nyata, dan [kerangka strategi](/id/blog/holdem-strategy) penuh, dan permainan flop Anda diam-diam meninggalkan kerumunan "bet tiap flop" di belakang.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kerangka 5 Keputusan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Di mana c-bet cocok dalam permainan yang menang</div>
  </a>
  <a href="/id/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting Dijelaskan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-betting juga mulai di pot 3-bet</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Memainkan Posisi Anda</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa c-bet bekerja lebih baik in position</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa c-bet besar membebani draw</div>
  </a>
</div>
`.trim(),
};

export default POST;
