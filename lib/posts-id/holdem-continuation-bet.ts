import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation Bet (C-Bet): Kapan Tembak Flop, Berapa Besar, dan Kapan Check",
  seoTitle: "Kenapa 'C-Bet Tiap Flop' Menguras Chip — Strategi Continuation Bet",
  desc: "Apa itu continuation bet, flop mana yang di-c-bet dan mana yang di-check, sizing tepat — kecil di board kering, besar di board basah — dan seberapa sering.",
  tldr: "Continuation bet (c-bet) adalah taruhan di flop oleh pemain yang raise preflop. Aturan modern bukan 'c-bet tiap flop' — melainkan taruh kecil dan sering di flop yang menguntungkan range Anda (board tinggi dan kering seperti K-7-2) dan check yang menguntungkan lawan (board rendah dan nyambung seperti 7-6-5). Beri sizing kecil — sekitar sepertiga pot — di board kering, besar — dua pertiga pot atau lebih — di board basah, c-bet lebih jarang saat out of position, dan jauh lebih jarang di pot multiway.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "15 mnt",
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

Alasannya berhasil adalah satu statistik sederhana: **sebuah tangan meleset di flop — tak membentuk pair atau lebih baik — sekitar dua pertiga dari waktu.** Jadi saat Anda bertaruh, lawan Anda biasanya juga tak punya apa-apa, dan fold. Anda bertaruh bukan karena kuat; Anda bertaruh karena *mereka mungkin lemah* dan Andalah yang mengklaim pimpinan.

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
| **Monotone** | K♠9♠4♠ | Campur — hati-hati | Taruh **lebih jarang, lebih kecil** | Flush jadi membatasi kedua range; jalan murah saja |
| **Two-tone & basah** | Q♥J♥7♣ | Condong caller | **Polarisasi:** besar dengan value/draw, check air | Banyak draw — bebani mereka atau keluar |

</div>

Dua ide terkait melakukan semua kerja di sini:
- **Range advantage menentukan seberapa *sering* Anda bertaruh.** Lebih banyak range Anda kuat di board ini → bertaruh lebih sering.
- **Nut advantage menentukan seberapa *besar* Anda bertaruh.** Anda memegang lebih banyak tangan terbaik mutlak (set, straight) → bertaruh lebih besar.

Bagian halusnya: Anda bisa punya satu tanpa yang lain. Di A‑8‑3 Anda punya jauh lebih banyak top pair (range advantage) tapi hampir tak ada yang punya set, jadi Anda **bertaruh sering tapi kecil**. Di board yang Anda pegang jauh lebih banyak set dan overpair, Anda **bertaruh besar**. Luruskan kedua tuas ini dan c-bet sizing berhenti menjadi tebakan.

---

## Seberapa Sering Anda Harus C-Bet? (Frekuensi)

Tak ada satu persentase c-bet yang "benar" — siapa pun yang memberi Anda satu angka sedang menjual leak. Frekuensi berayun mengikuti posisi, board, dan berapa pemain dalam pot. Inilah rujukan cepatnya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situasi | Frekuensi c-bet kasar | Catatan |
|:---|:---:|:---|
| **In position, heads-up, board kering** | **70–100%** (kecil) | "Range bet" klasik — taruh nyaris semuanya, mungil |
| **In position, heads-up, board basah** | **~50–60%** | Lebih terpolarisasi — value dan draw bertaruh, air check |
| **Out of position, heads-up** | **~40–50%** | Check jauh lebih banyak untuk melindungi checking range |
| **Multiway (2 lawan)** | **~50% atau kurang** | Ada yang mungkin nyambung — perketat |
| **Multiway (3+ lawan)** | **Hanya tangan kuat & draw bagus** | Fold equity praktis lenyap |

</div>

Sebagai pemeriksaan kesehatan, tingkat c-bet flop keseluruhan pemain solid berada di sekitar **55–70%** di semua board. Kalau Anda c-bet lebih dari ~85% flop, Anda main autopilot dan pemain bagus akan menghukumnya; di bawah ~40% Anda terlalu jujur, hanya bertaruh saat mengenai. Tapi ingat — angka itu *agregat*, bukan target. Anda sampai ke sana dengan bertaruh di board yang tepat, bukan dengan memenuhi kuota.

---

## Berapa Besar Anda Harus C-Bet? (Sizing)

Sizing mengikuti langsung dari board texture. Dua gigi mencakup nyaris semuanya:

- **Kecil — sekitar sepertiga pot** — di board kering, statis, ber-range-advantage, terutama in position. Range lawan lemah dan tak akan banyak membaik, jadi Anda tak perlu membebani draw; taruhan kecil sudah menempatkan semua air mereka di posisi sulit sambil menahan tangan lebih lemah untuk membayar Anda. Taruhan lebih besar di sini justru mem-fold tangan yang Anda *ingin* meng-call.
- **Besar — dua pertiga pot atau lebih** — di board basah, dinamis, dan kapan pun range Anda terpolarisasi. Kini Anda perlu membebani flush dan straight draw (menyangkal equity mereka) dan membangun pot dengan tangan kuat Anda. Taruhan kecil membuat draw meng-call terlalu murah.

Beri angka nyata. Misalkan pot-nya ==$30== di flop:

- C-bet **sepertiga pot** adalah ==$10== — range bet board kering Anda.
- C-bet **dua pertiga pot** adalah ==$20== — sizing board basah Anda untuk membebani draw.

Di **turnamen**, condong sedikit lebih kecil — sering **setengah pot atau kurang** — karena stack Anda berharga dan tak bisa reload. Apa pun yang Anda pilih, ikat ukurannya pada board, bukan pada kebiasaan.

---

## C-Betting Out of Position

![Seorang pemain poker beraksi lebih dulu saat out of position, jari di felt di samping chip-nya dengan lawan menunggu dalam bayang di belakang](/images/holdem-cbet-oop.webp "Out of position Anda beraksi lebih dulu tanpa informasi, jadi Anda check jauh lebih banyak dan c-bet range yang lebih ketat dan lebih kuat")

C-betting jauh lebih sulit **out of position** — saat Anda harus beraksi lebih dulu di setiap street tanpa bacaan atas apa yang akan dilakukan lawan. Dua penyesuaian:

1. **C-bet lebih jarang.** Tanpa posisi Anda tak bisa mengontrol pot sebaik itu atau merealisasikan equity Anda, jadi Anda check jauh lebih banyak — bahkan tangan yang akan otomatis di-bet in position. Di beberapa board bagus, solver c-bet out of position hanya seperempat waktu.
2. **Bangun checking range yang nyata.** Kalau Anda hanya bertaruh saat kuat dan check saat lemah, lawan yang jeli membaca Anda seperti buku dan menyerang setiap check. Jadi Anda sengaja meng-check *sebagian* tangan kuat juga, yang menjaga check Anda tetap berbahaya dan seluruh permainan Anda lebih sulit dilawan. Inilah tepat kenapa [posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp") merupakan keunggulan struktural — c-bet cukup bekerja lebih baik saat Anda beraksi terakhir.

---

## C-Betting di Pot Multiway

Jebakan c-bet terbesar tunggal adalah **menembak ke banyak lawan seolah heads-up.** Setiap pemain tambahan dalam pot memangkas peluang bahwa semua orang meleset — jadi fold equity Anda, seluruh mesin dari bluff c-bet, runtuh.

Aturan multiway sederhana: **taruh made hand kuat Anda dan draw terbaik Anda untuk value dan proteksi, dan check nyaris semua yang lain.** Melawan dua pemain Anda sudah memperketat jauh di luar range heads-up Anda; melawan tiga atau lebih, bluff c-bet telanjang sama saja membakar chip, karena hampir selalu ada yang mengenai sepotong. Range betting — bertaruh seluruh range Anda kecil — adalah ide *heads-up* dan tak berlaku untuk pot multiway. Saat ragu dengan tangan marginal dan dua atau lebih lawan, check.

---

## Delayed C-Bet

Meng-check flop bukan akhir tangan. **Delayed c-bet** — meng-check flop sebagai raiser preflop, lalu bertaruh di turn — adalah salah satu langkah paling kurang dimanfaatkan di poker. Ia bersinar saat:

- **Flop menguntungkan lawan** (board rendah, nyambung), jadi bertaruh buruk — tapi **turn mengubah gambar** (overcard, atau kartu yang menaikkan equity Anda).
- Anda **meng-check-back tangan lumayan** in position dan ingin bertaruh satu street value kini setelah board lebih aman.
- Anda ingin **menangkap float**: pemain yang berencana bluff-raise c-bet flop Anda tak mendapat taruhan untuk diserang, lalu menghadapi taruhan turn Anda malah.

Menunda mengubah spot di mana c-bet otomatis akan menguras chip menjadi taruhan terkendali dan terinformasi satu street kemudian.

---

## Kapan TIDAK C-Bet (Check Itu Senjata, Bukan Bendera Putih)

Mari buat "jangan"-nya eksplisit, karena di sinilah uang diselamatkan:

- **Board menghantam range lawan.** Flop 7‑6‑5 atau 9‑8‑7 mengenai tangan yang meng-call raise jauh lebih keras daripada mengenai tangan Anda. Bertaruh di sini cuma menyumbang chip — check.
- **Anda out of position di board dinamis** dengan tangan marginal. Beraksi lebih dulu tanpa informasi, jaga pot tetap kecil dan check.
- **Anda multiway dengan air.** Dibahas di atas — tak ada fold equity, tak ada taruhan.
- **Tangan Anda ingin melindungi checking range.** Kadang Anda meng-check tangan kuat dengan sengaja supaya check Anda tak otomatis lemah.

Pergeseran pola pikir yang membuat Anda menang: **check bukan menyerah.** Pemain bagus meng-check *banyak*, dengan sengaja, dan itu membuat taruhan mereka jauh lebih menakutkan saat memang muncul. Kalau Anda merasa wajib bertaruh cuma karena raise preflop, refleks itu menghabiskan uang Anda.

---

## Sebuah Tangan C-Bet Nyata, dari Awal sampai Akhir

Dua spot dari sesi yang sama menunjukkan kedua sisi keputusan.

**Spot 1 — c-bet buku teks.** Saya raise ==A♣K♦== dan big blind meng-call. Flop: ==K♠ 7♦ 2♣.== Itu board tinggi, kering, tak nyambung yang milik range saya — dan saya mem-flop **top pair, top kicker**: K♦ saya berpasangan dengan K♠, dengan ace sebagai kicker terbaik yang mungkin (best five = K♦ K♠ A♣ 7♦ 2♣). Saya bertaruh **sepertiga pot** sebagai range bet: itu membebani semua tangan mesetnya dan menahan king dan pair lebih lemah. C-bet mudah dan menguntungkan.

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
| **C-bet OOP terlalu sering** | Anda tak bisa merealisasikan equity saat beraksi lebih dulu | Check lebih banyak, bangun checking range |
| **Bertaruh ke board yang mengenai mereka** | 7‑6‑5 menghantam range mereka, bukan Anda | Check dan menyerah |
| **Barreling "sekali-lalu-berhenti"** | C-bet flop, selalu menyerah di turn = mudah di-float | Punya rencana turn sebelum menembak |
| **Triple-barrel tanpa equity** | Bluff habis-habisan tanpa out atau blocker | Bluff dengan equity cadangan atau blocker bagus |

</div>

Setiap satu dari ini berpangkal pada akar yang sama: **c-bet autopilot alih-alih membaca board.** Perbaiki itu dan permainan flop Anda naik satu level.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-strategy | 5 Keputusan di Balik Poker yang Menang | /images/holdem-strategy-hero.webp
/id/blog/holdem-3bet | Cara 3-Bet (dan Menghadapinya) | /images/holdem-3bet-hero.webp
:::

## FAQ

**Q. Apa itu continuation bet di poker?**

A. Continuation bet, atau c-bet, adalah taruhan yang dibuat di flop oleh pemain yang raise sebelum flop. Anda "melanjutkan" merepresentasikan kekuatan yang Anda tunjukkan preflop. Anda tak perlu mengenai flop untuk c-bet — karena sebuah tangan meleset di flop sekitar dua pertiga dari waktu, c-bet yang dipilih baik sering memenangkan pot saat lawan Anda tak punya apa-apa.

**Q. Kenapa disebut continuation bet?**

A. Karena Anda melanjutkan agresi yang Anda mulai sebelum flop. Anda raise preflop untuk mengambil pimpinan, dan taruhan flop melanjutkan cerita itu ke street berikutnya. Kalau orang lain yang raise preflop, taruhan flop Anda bukan c-bet — istilah ini khusus berarti raiser preflop yang bertaruh di flop.

**Q. Haruskah Anda c-bet tiap flop?**

A. Tidak — ini kesalahan c-bet paling umum. Taruh flop yang menguntungkan range Anda (board tinggi dan kering seperti K-7-2, di mana Anda memegang lebih banyak top pair dan overpair) dan check yang menguntungkan lawan (board rendah dan nyambung seperti 7-6-5 yang mengenai tangan yang mereka call). C-bet tiap flop dengan autopilot dihukum pemain bagus.

**Q. Seberapa sering Anda harus c-bet?**

A. Tergantung posisi, board, dan jumlah lawan, jadi perlakukan ini sebagai rentang, bukan aturan: kira-kira 70–100% (dengan sizing kecil) in position heads-up di board kering, sekitar 40–50% out of position, dan 50% atau kurang di multiway. Tingkat c-bet flop keseluruhan yang sehat sekitar 55–70% — di atas 85% berarti Anda main autopilot.

**Q. Berapa besar Anda harus c-bet?**

A. Ukur sesuai board. Di board kering dan statis taruh kecil — sekitar sepertiga pot — karena range lawan lemah dan Anda tak perlu membebani draw. Di board basah dan dinamis taruh besar — dua pertiga pot atau lebih — untuk membebani flush dan straight draw serta membangun pot dengan tangan kuat Anda. Di turnamen, condong lebih kecil, sering setengah pot atau kurang.

**Q. Haruskah Anda c-bet out of position?**

A. Lebih jarang daripada in position. Beraksi lebih dulu di setiap street tanpa informasi, Anda tak bisa merealisasikan equity sebaik itu, jadi Anda check jauh lebih banyak — bahkan sebagian tangan yang akan Anda auto-bet in position — dan Anda sengaja menyimpan sebagian tangan kuat dalam checking range Anda supaya check Anda tak otomatis lemah. Posisi membuat c-bet bekerja lebih baik, titik.

**Q. Haruskah Anda c-bet di pot multiway?**

A. Jauh lebih jarang daripada heads-up. Setiap lawan tambahan membuat lebih mungkin seseorang nyambung, jadi fold equity Anda runtuh. Melawan dua pemain atau lebih, taruh made hand kuat Anda dan draw terbaik untuk value dan proteksi, dan check nyaris semua yang lain. Bertaruh bluff ke tiga pemain atau lebih adalah perugi uang klasik.

**Q. Apa itu delayed c-bet?**

A. Delayed c-bet adalah saat raiser preflop meng-check flop lalu bertaruh di turn. Berguna saat flop menguntungkan lawan (jadi bertaruh buruk) tapi turn meningkatkan equity Anda, saat Anda check-back tangan lumayan in position, atau untuk menangkap lawan yang berencana bluff-raise taruhan flop Anda. Ini salah satu langkah menguntungkan yang paling kurang dimanfaatkan di poker.

**Q. Kapan Anda TIDAK boleh c-bet?**

A. Jangan c-bet saat board menghantam range lawan (board rendah dan nyambung), saat Anda out of position dengan tangan marginal di board dinamis, saat Anda multiway dengan air, atau saat tangan Anda lebih baik melindungi checking range. Meng-check di spot-spot ini bukan kelemahan — itu menyelamatkan chip dan membuat taruhan Anda di masa depan lebih kredibel.

**Q. Apakah c-bet itu bluff?**

A. Kadang ya, kadang tidak — itulah intinya. Banyak c-bet adalah semi-bluff atau pure bluff dengan tangan yang meleset, bertaruh karena lawan Anda mungkin juga meleset. Yang lain adalah value bet dengan tangan kuat. Strategi c-betting yang seimbang mencampur keduanya di board yang sama, jadi lawan tak bisa menebak apakah taruhan flop Anda berarti kekuatan atau air.

**Q. Berapa persentase c-bet yang bagus di HUD poker?**

A. Sekitar 55–70% untuk c-bet flop adalah band yang sehat dan seimbang. Di atas sekitar 85% menandakan orang yang c-bet terlalu banyak dan bisa dieksploitasi dengan float dan raise; di bawah sekitar 40% menandakan pemain yang hanya bertaruh saat kuat, jadi Anda bisa fold dengan percaya diri terhadap c-bet mereka dan menusuk saat mereka check. Perlakukan sebagai pemeriksaan kesehatan, bukan target.

---

## Playbook C-Bet, Singkatnya

1. **C-bet adalah taruhan flop oleh raiser preflop** — dan ia berhasil karena tangan meleset di flop sekitar dua pertiga dari waktu.
2. **Board yang memutuskan.** Taruh board tinggi dan kering yang menguntungkan range Anda; check board rendah dan nyambung yang menguntungkan lawan.
3. **Range advantage menetapkan frekuensi; nut advantage menetapkan ukuran.** Bertaruh sering di board yang Anda dominasi; bertaruh besar hanya saat Anda memegang lebih banyak nut.
4. **Kecil (⅓) di kering, besar (⅔+) di basah.** C-bet lebih jarang out of position, dan jauh lebih jarang di multiway.
5. **Check itu senjata.** Pemain terbaik meng-check sering dan dengan sengaja — c-bet itu pisau bedah, bukan palu.

Kuasai ini dan Anda berhenti membakar pot di board yang memang bukan milik Anda untuk di-bet. Padukan c-betting tajam dengan [permainan 3-bet](/id/blog/holdem-3bet) yang solid, kesadaran [posisi](/id/blog/holdem-position-play) yang nyata, dan [kerangka strategi](/id/blog/holdem-strategy) penuh, dan permainan flop Anda diam-diam meninggalkan kerumunan "bet tiap flop" di belakang.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kerangka 5 Keputusan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Di mana c-bet cocok dalam permainan yang menang</div>
  </a>
  <a href="/id/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-Betting Dijelaskan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">C-betting juga mulai di pot 3-bet</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Memainkan Posisi Anda</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa c-bet bekerja lebih baik in position</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa c-bet besar membebani draw</div>
  </a>
</div>
`.trim(),
};

export default POST;
