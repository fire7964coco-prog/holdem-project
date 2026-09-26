import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Susunan Kad Poker dalam Texas Hold'em — Dari Tertinggi hingga Terendah, dengan Kebarangkalian",
  seoTitle: "Ingat menang tetapi kalah pot? — Susunan Kad Poker Tertinggi",
  desc: "Dah dapat flush tapi masih kalah pot? Susunan kad poker dari tertinggi hingga terendah — 10 tangan, kebarangkalian sebenar dan cara kicker menentukan pemenang.",
  tldr: "Susunan kad poker dari tertinggi hingga terendah ialah Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, Pair dan High Card. Semakin sukar sesuatu tangan dibentuk daripada lima kad, semakin tinggi kedudukannya.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "14 minit",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Royal Flush — 10 J Q K A spade di atas meja poker dengan timbunan cip dan butang pengedar",
  tags: ["susunan kad poker", "ranking poker", "susunan poker", "kedudukan tangan poker", "kad poker tertinggi", "poker hand ranking", "royal flush", "kicker"],
  content: `
Anda sedang heads-up di river. Flush anda menjadi, anda yakin ia yang terbaik — kemudian ==r:pengedar menolak pot ke arah lawan==. Board sudah berpasangan, lawan memegang full house, dan anda langsung tidak menjangkanya.

Hampir setiap saat "saya ingat saya menang" berpunca daripada satu perkara: ==tidak membaca **susunan kad poker** dengan cukup pantas==. Susunannya sendiri boleh dihafal dalam lima minit. Membacanya secara langsung, dalam tekanan, dengan board yang berpasangan atau bersambung — ==itulah bahagian yang jarang diterangkan dengan baik==.

Entah berapa malam saya memerhati wajah "saya ingat saya menang" itu di seberang meja, dan hampir setiap kali puncanya ialah satu butiran di board yang terlepas pandang. Panduan ini menyelesaikan kedua-dua masalah. Anda akan mendapat susunan penuh berserta kebarangkalian sebenar, setiap peraturan pemecah seri, tiga teka-teki board sebenar untuk melatih "cari lima kad terbaik anda", dan satu rutin 1 saat untuk membaca mana-mana board di meja.

---

## Apakah Susunan Kad Poker dari Tertinggi hingga Terendah?

Dari tertinggi hingga terendah, sepuluh tangan Texas Hold'em disusun begini: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, Pair dan High Card. Peraturan terasnya mudah — semakin jarang sesuatu tangan dapat dibentuk daripada lima kad, semakin tinggi kedudukannya. (Susunan ini ditetapkan mengikut kebarangkalian lima kad; dengan tujuh kad, dua kekerapan bertukar tempat — menjelang river, high card semata-mata sebenarnya lebih jarang daripada two pair — tetapi kedudukannya tidak berubah.) Di bawah ialah keseluruhan hierarki berserta kebarangkalian jangka panjang memegang setiap tangan menjelang river.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Tangan | Dikenali juga | Apa dia | Kebarangkalian (menjelang river) |
|:---|:---|:---|:---|:---:|
| **1** | Royal Flush | "Royal" (straight flush ber-As tinggi) | A-K-Q-J-10, satu jenis | 0.0032% |
| **2** | Straight Flush | A-5 sahaja: "steel wheel" | 5 berturutan, satu jenis | 0.0279% |
| **3** | Four of a Kind | "Quads" | Empat kad satu nilai | 0.168% |
| **4** | Full House | "Boat" / "Full boat" | Three of a kind + sepasang | 2.60% |
| **5** | Flush | — | Mana-mana 5 kad satu jenis | 3.03% |
| **6** | Straight | — | 5 berturutan, jenis bercampur | 4.62% |
| **7** | Three of a Kind | "Trips" / "Set" | Tiga kad satu nilai | 4.83% |
| **8** | Two Pair | — | Dua pasangan berbeza | 23.5% |
| **9** | Pair | — | Dua kad satu nilai | 43.8% |
| **10** | High Card | "No pair" | Tiada kombinasi langsung | 17.4% |

</div>

*Ini ialah kekerapan tangan tujuh kad standard untuk dek penuh 52 kad — kebarangkalian yang sama digunakan oleh setiap solver poker dan laman latihan.*

> **Peraturan yang menamatkan pertikaian**
> Pair dan High Card jika digabung meliputi kira-kira 61% daripada semua tangan tujuh kad menjelang river. Tangan besar terasa lazim kerana ia mudah diingati — tetapi kebanyakan pot ditentukan oleh sepasang kad atau high card berserta kicker yang mengiringinya.

:::quiz:::

---

## Kekuatan Kad: Asas dalam 30 Saat

Sebelum tangan, anda perlu tahu kekuatan kad. Cuma dua perkara.

### Susunan nilai (tinggi ke rendah)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

As ialah kad terkuat dan satu-satunya yang menjadi pengecualian kepada peraturan: ia boleh main tinggi (A-K-Q-J-10) *dan* rendah (A-2-3-4-5, "the wheel"). Ia tidak boleh melingkar melalui tengah — Q-K-A-2-3 **bukan** straight.

### Jenis kad tidak ada kedudukan

Dalam Texas Hold'em standard, **tiada jenis kad yang lebih kuat daripada jenis lain**. Spade tidak menewaskan heart. Jenis kad hanya penting untuk *membentuk* flush, tidak pernah untuk memecahkan seri. Jika dua pemain memegang lima kad yang sama dalam jenis berbeza, pot dibahagi — setiap kali.

---

## Apakah 10 Tangan Poker? (Setiap Satu Dijelaskan)

Inilah setiap tangan dari terkuat ke terlemah, dengan contoh dan satu peraturan yang menentukan setiap pertarungan. Lima yang paling mengelirukan — full house, flush, straight, dan dua jenis three of a kind — diberi perhatian tambahan.

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10, semuanya spade:::

**A♠ K♠ Q♠ J♠ 10♠** — straight flush tertinggi, dan tangan terbaik dalam poker.

Ia tidak boleh dikalahkan; satu-satunya seri yang mungkin ialah royal flush yang keseluruhannya terletak di board untuk dikongsi semua pemain, lalu pot dibahagi. Anda akan melihatnya lebih kurang sekali dalam 31,000 tangan, jadi kebanyakan pemain boleh bermain bertahun-tahun tanpa pernah mendapatnya. Apabila anda dapat, satu-satunya tugas anda ialah memasukkan sebanyak mungkin cip.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — lima heart berturutan:::

**9♥ 8♥ 7♥ 6♥ 5♥** — lima kad berturutan, semuanya satu jenis.

Hanya straight flush yang lebih tinggi atau royal flush boleh menewaskannya. Versi terendah, A-2-3-4-5 satu jenis, dipanggil **"steel wheel"**. Apabila dua straight flush bertembung, yang kad teratasnya lebih tinggi menang.

### #3 — Four of a Kind (Quads)

:::hand[8♣,8♦,8♥,8♠,K♥] Four of a Kind — empat 8 + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — keempat-empat kad satu nilai.

Antara dua quads, four of a kind yang lebih tinggi menang. Jika quads itu *di board* (keempat-empatnya kad komuniti), **kicker** tertinggi yang memutuskan — dan As dikira sebagai kicker walaupun ia datang dari board.

### #4 — Full House (Boat)

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — tiga Q + dua 5:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — full house: trio Q berserta sepasang 5.

Bandingkan **three of a kind dahulu**: QQQ55 menang ke atas JJJ99 kerana Q mengatasi J, tidak kira sebesar mana pasangannya. Pasangan hanya dibandingkan jika trio itu seri.

> **Cooler paling lazim**
> Dalam dua belas tahun di meja poker, "nut flush saya kalah kepada boat" ialah bad beat yang paling kerap saya dengar dirungutkan pemain. Setiap kali board berpasangan, semak full house *sebelum* anda komited dengan flush atau straight.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — lima diamond:::

**A♦ J♦ 8♦ 6♦ 2♦** — mana-mana lima kad satu jenis, jujukan tidak penting.

Dua flush dibandingkan kad demi kad dari atas: A-J-8-6-2 menang ke atas A-J-8-5-2 kerana 6 mengatasi 5. Empat kad satu jenis **bukan** flush — anda perlukan lima.

### #6 — Straight

:::hand[7♠,6♥,5♣,4♦,3♠] Straight — lima berturutan, jenis bercampur:::

**7♠ 6♥ 5♣ 4♦ 3♠** — lima kad berturutan, jenis bercampur.

- **Nuts:** A-K-Q-J-10 ("Broadway") ialah straight tertinggi.
- **The wheel:** A-2-3-4-5 ialah straight terendah (As main rendah).
- **Tidak sah:** anda tidak boleh melingkar — K-A-2-3-4 bukan straight.

Antara dua straight, kad teratas yang lebih tinggi menang.

### #7 — Three of a Kind (Trips / Set)

:::hand[J♣,J♠,J♥,A♦,4♠] Three of a Kind — tiga J + kicker:::

**J♣ J♠ J♥ A♦ 4♠** — tiga kad satu nilai.

Ada tiga cara membentuknya, dan perbezaannya penting:

- **Set:** pocket pair ditambah satu kad board yang sepadan (cth. anda pegang J♣ J♠, board ada J♥). Tersembunyi dan berbahaya.
- **Trips:** sepasang di board ditambah satu kad di tangan anda. Lebih mudah dibaca lawan dan lebih mudah dikongsi.
- **Trips di board:** ketiga-tiga kad berada di board (cth. J♣ J♠ J♥ di tengah meja). Semua pemain berkongsinya, jadi melainkan seseorang membentuk straight atau yang lebih kuat, hanya kicker yang membezakan anda.

Set memenangi lebih banyak cip kerana tiada siapa menyangkanya.

### #8 — Two Pair

:::hand[10♠,10♥,8♣,8♦,A♠] Two Pair — 10 dan 8 + kicker As:::

**10♠ 10♥ 8♣ 8♦ A♠** — dua pasangan berbeza.

Bandingkan mengikut urutan: **pasangan tinggi → pasangan rendah → kicker**. KK99-A menang ke atas QQJJ-A kerana K mengatasi Q sebelum apa-apa lagi disemak.

### #9 — Pair

:::hand[K♠,K♦,9♥,6♣,2♠] Pair — sepasang K + tiga kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — dua kad satu nilai.

Tangan siap paling lazim dalam Hold'em. Jika dua pemain memegang pair yang sama, kicker yang menentukan: **nilai pasangan → kicker 1 → kicker 2 → kicker 3**, tertinggi dahulu. Di sinilah kebanyakan kekalahan "tangan sama" berlaku — jaga kicker anda.

### #10 — High Card

:::hand[A♣,Q♠,9♥,5♦,3♣] High Card — tiada kombinasi:::

**A♣ Q♠ 9♥ 5♦ 3♣** — tiada yang bersambung.

Ketika showdown, kad tertinggi menang, kemudian yang seterusnya, dan begitulah hingga kelima-limanya. Jika kelima-limanya sepadan, pot dibahagi. Inilah yang tinggal apabila bluff anda di-call dan tidak menjadi.

---

## Bagaimana Kicker dan Seri Berfungsi dalam Poker?

![Showdown poker — membandingkan lima kad terbaik dua pemain](/images/holdem-kicker-showdown-neutral.webp "Ketika showdown, tangan lima kad terbaik mengambil pot")

Apabila dua pemain memegang jenis tangan yang sama, pemenang ditentukan dengan membandingkan kad di dalam tangan itu dahulu, kemudian **kicker** memecahkan seri apabila semuanya sepadan. Inilah bahagian yang menentukan pot sebenar, dan bahagian yang dilangkau oleh kebanyakan carta. Ikut urutan tepat ini:

1. **Bandingkan kedudukan tangan.** Flush sentiasa menang ke atas straight, full house sentiasa menang ke atas flush, dan seterusnya.
2. **Bandingkan kad pembentuk tangan.** Sepasang As menang ke atas sepasang K; flush ber-Q tinggi menang ke atas flush ber-J tinggi.
3. **Bandingkan kicker.** Jika tangan siap seri, kad selebihnya memutuskannya, satu demi satu dari atas.
4. **Masih sama? Pot dibahagi.** Jenis kad tidak pernah memecahkan seri.

Lencana di sebelah kanan menunjukkan sama ada **kicker digunakan untuk menentukan tangan**.

:::tiebreak
Royal Flush|Seri hanya jika board itu sendiri royal flush — semua berkongsi pot|-Tiada kicker
Straight Flush|Hanya kad tertinggi|-Tiada kicker
Four of a Kind|Nilai quad → kad ke-5|+Guna kicker
Full House|Nilai trio → pasangan|-Tiada kicker
Flush|Kelima-limanya, tinggi ke rendah|-Tiada kicker
Straight|Hanya kad tertinggi|-Tiada kicker
Three of a Kind|Nilai trio → 2 kicker|+Guna kicker
Two Pair|Pasangan tinggi → rendah → kicker|+Guna kicker
Pair|Nilai pasangan → 3 kicker|+Guna kicker
High Card|Kelima-limanya, tinggi ke rendah|+Guna kicker
:::

**Kicker** ialah sekadar kad yang bukan sebahagian daripada tangan siap anda tetapi masih digunakan untuk memecahkan seri. Dengan A-A-K lawan A-A-Q, kedua-duanya ada sepasang As — kicker K yang menang. Itulah sebabnya pemain pro begitu mengambil berat tentang *kualiti* kad tinggi mereka, bukan sekadar sama ada ia berpasangan. Apabila lima kad terbaik sepadan sepenuhnya, pot dibahagi — urutan membuka kad dan prinsip "cards speak" yang menyelesaikannya ada dalam [peraturan showdown Texas Hold'em](/ms/blog/holdem-showdown-rules "thumb:/images/holdem-showdown-rules-hero.webp").

---

## Baca Board: 3 Teka-teki Board Sebenar

![Board K-K-K-A-2 di atas meja poker — bolehkah anda nampak full house sebelum pengedar mengumumkannya?](/images/holdem-hand-rankings-board-puzzle.webp "Teka-teki membaca board poker — cari tangan lima kad terbaik anda")

Tahu susunannya tidak sama dengan membacanya dengan pantas. Berikut tiga situasi sebenar. Tutup jawapan, cari lima kad terbaik anda daripada tujuh, kemudian semak.

### Teka-teki 1 — Full house tersembunyi

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 kad):::

Anda pegang **Q♥ Q♦**. Apakah tangan terbaik anda?

→ Board sudah menunjukkan two pair (A-A dan K-K). Dua Q anda bersama Q♠ di board membentuk **trip Q**, dan digabungkan dengan sepasang As di board anda mendapat **full house — QQQ + AA**. Itulah lima kad terbaik anda. Di home game pertama yang saya kendalikan sebagai pengedar, saya melihat dua pemain berbeza muck tangan yang sama ini kerana berfikir "AAKK + Q cuma two pair" — bukan begitu. Sebaik sahaja anda ada trips dan board menambah sepasang sendiri, anda ambil full house-nya. **Full house menang ke atas two pair.**

### Teka-teki 2 — Flush yang sebenarnya lebih kuat

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 kad):::

Anda pegang **6♥ 2♣**. Board ada empat heart.

→ 6♥ anda ialah heart kelima, jadi anda fikir "flush". Tetapi lihat jujukannya: **10♥ 9♥ 8♥ 7♥ 6♥** ialah lima heart *berturutan* — **straight flush 10 tinggi**, tangan #2. (Tukar 6♥ itu kepada K♥ dan heart-nya menjadi 7-8-9-10-K — tidak lagi bersambung, jadi ia jatuh kepada flush K tinggi biasa.) Sentiasa semak sama ada kad flush anda turut *berturutan* sebelum anda menganggapnya straight flush.

### Teka-teki 3 — Apabila anda terpaksa berkongsi

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 kad):::

Anda pegang **A♥ 3♣**. Board sudah ada trip K.

→ A♥ anda berpasangan dengan A♠ di board, memberi anda **KKK + AA, full house**. Tetapi jika lawan juga memegang satu As — dan bukan K terakhir — dia mempunyai full house yang *sama* dan anda berkongsi pot. Hanya dua perkara yang masih mengalahkan anda: pocket A-A membentuk boat yang lebih besar (aces full), dan K terakhir (K♣) membentuk quad K walau apa pun kad satu lagi — A♠ di board sudah menjadi kickernya. Jika dia tiada As mahupun K terakhir itu, boat anda menang. Pengajarannya: apabila board melakukan hampir keseluruhan kerja, nilai tangan anda selalunya bergantung pada satu kad tambahan sahaja.

---

## Tangan Mana yang Menang? Pertarungan yang Sering Dibahaskan

Jawapan pendek untuk pertikaian yang meletus di setiap meja: flush menang ke atas straight, full house menang ke atas flush, four of a kind menang ke atas full house, dan the wheel (A-2-3-4-5) ialah straight *terendah*, bukan tertinggi. Berikut pertarungan yang paling kerap disalah faham.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pertarungan | Pemenang | Sebabnya |
|------|------|------|
| Flush vs Straight | **Flush** | #5 menang ke atas #6 |
| Full House vs Flush | **Full House** | #4 menang ke atas #5 |
| Three of a Kind vs Two Pair | **Three of a Kind** | #7 menang ke atas #8 |
| Straight vs Three of a Kind | **Straight** | #6 menang ke atas #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (As tinggi)** | The wheel ialah straight terendah |
| Pasangan sama, kicker K vs J | **Kicker K** | Kicker lebih tinggi menang |
| Four of a Kind vs Full House | **Four of a Kind** | #3 menang ke atas #4 |

</div>

---

## Mengapa Flush Menang ke atas Straight?

Flush menang ke atas straight kerana ia lebih sukar dibentuk: dalam dek 52 kad, terdapat lebih sedikit cara mendapat lima kad satu jenis (3.03% daripada tangan tujuh kad menjelang river) berbanding lima berturutan dalam mana-mana jenis (4.62%). Susunan ini bukan sewenang-wenangnya — ia ==kebarangkalian semata-mata==. ==g:**Semakin sukar sesuatu tangan dibentuk daripada lima kad, semakin tinggi kedudukannya.**== Satu prinsip itu menjelaskan keseluruhan hierarki — angka tepat setiap tangan ada dalam jadual kebarangkalian di atas.

Ia juga menjelaskan satu pengecualian besar yang akan anda temui: dalam **Short Deck (6+) Hold'em**, di mana kad 2 hingga 5 dikeluarkan, flush menjadi lebih sukar daripada full house — jadi dalam format itu ==r:**flush menang ke atas full house**==. Matematiknya berubah, maka susunannya berubah. Lebih lanjut tentang perbezaan setiap permainan di bawah.

---

## Rutin 1 Saat Membaca Tangan

![Infografik board komuniti berpasangan 9♥ Q♥ 9♠ 8♣ 7♠ — membaca pasangan dan kemungkinan straight untuk mencari lima kad terbaik anda](/images/holdem-hand-rankings-board-read.webp "Cara membaca board poker dengan pantas — jenis kad, straight, pasangan mengikut urutan")

Apabila masa mendesak, jalankan imbasan ini mengikut urutan setiap kali board lengkap:

**1. Jenis kad dahulu** — adakah tiga atau lebih kad satu jenis di board? Jika ya, ==flush mungkin wujud==. Semak jenis kad anda.

**2. Sambungan seterusnya** — adakah kad yang berdekatan nilai (seperti 8-9-10)? Jika ya, ==straight masih hidup==.

**3. Pasangan akhir sekali** — adakah board berpasangan? ==r:Jika ya, full house dan quads menjadi mungkin, dan flush atau straight anda mungkin dalam bahaya.==

Saya masih menjalankan imbasan yang sama ini — flush, kemudian straight, kemudian pasangan — pada setiap board, tidak kira berapa jam saya sudah duduk di situ. Bahaya dahulu (flush/straight di board), kemudian sama ada board berpasangan (yang mengancam segalanya). Bina tabiat ini dan anda akan berhenti membuat call terburu-buru di river.

---

## Bagaimana Menghafal Tangan Poker dengan Pantas?

Cara terpantas menghafal tangan poker ialah berhenti melihatnya sebagai sepuluh item rawak: pelajari dalam tiga kumpulan (Premium, Tengah, Biasa), latih hanya pasangan yang mengelirukan, kemudian sebut pemenang semasa menonton siaran poker sebelum pengedar mengumumkannya. Inilah rancangan tiga langkahnya.

| Langkah | Apa yang dibuat | Masa |
|------|------|------|
| **1** | Pelajari tiga kumpulan: Premium (#1–3), Tengah (#4–6), Biasa (#7–10) | 1 hari |
| **2** | Latih hanya pasangan yang mengelirukan: flush vs straight, full house vs flush | 3 hari |
| **3** | Tonton siaran poker dan sebut pemenang sebelum pengedar mengumumkannya | 1–2 minggu |

Mengumpulkan dahulu menghalang susunan daripada terasa seperti sepuluh item rawak. Pasangan mengelirukan di langkah 2 menyebabkan 90% kesilapan pemula, jadi perbanyakkan latihannya.

---

## Adakah Susunan Kad Poker Sama dalam Setiap Permainan?

Sebahagian besarnya ya — susunan sepuluh tangan yang sama terpakai merentasi Texas Hold'em, Omaha dan Seven-Card Stud. Pengecualian utamanya ialah Short Deck (6+), di mana flush menang ke atas full house, dan peraturan Omaha yang mewajibkan anda menggunakan tepat dua hole card anda. Begini perbandingan varian yang biasa.

| Permainan | Susunan tangan | Perbezaan utama |
|------|------|------|
| **Texas Hold'em** | Standard (panduan ini) | Guna mana-mana 0–2 hole card anda |
| **Omaha** | Standard | Wajib guna *tepat* 2 daripada 4 hole card anda |
| **Seven-Card Stud** | Standard | Tiada kad komuniti |
| **Short Deck (6+)** | Diubah suai | Flush menang ke atas full house; A-6-7-8-9 ialah straight terendah (As masih main rendah, dan tanpa kad 2–5 ia terus bersambung ke 6) |

Intinya: pelajari susunan standard sekali dan ia terpakai dalam hampir setiap permainan. Cuma ingat peraturan "tepat dua" Omaha dan kenaikan flush dalam Short Deck.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-showdown-rules | Peraturan Showdown | /images/holdem-showdown-rules-hero.webp
/ms/blog/texas-holdem-rules-for-beginners | Peraturan Texas Hold'em untuk Pemula | /images/rules-texas-holdem.webp
:::

## Soalan Lazim

**Q. Apakah itu flush dalam poker?**

A. Flush ialah mana-mana lima kad daripada jenis yang sama — contohnya A♦ J♦ 8♦ 6♦ 2♦ — tidak kira susunannya. Ia berada di #5, di atas straight dan di bawah full house. Apabila dua pemain sama-sama memegang flush, kad tertinggi menang; jenis kad tidak pernah memecahkan seri.

**Q. Apakah itu full house dalam poker?**

A. Full house ("boat") ialah three of a kind ditambah sepasang, seperti Q-Q-Q-5-5. Ia berada di #4, menang ke atas flush dan straight. Antara dua full house, three of a kind yang lebih tinggi menentukan dahulu — jadi QQQ-55 menang ke atas JJJ-99 tidak kira sebesar mana pasangannya.

**Q. Apakah itu straight dalam poker?**

A. Straight ialah lima kad berturutan mengikut nilai dengan jenis bercampur, seperti 7-6-5-4-3. Ia berada di #6. As boleh main tinggi (10-J-Q-K-A, "Broadway") atau rendah (A-2-3-4-5, "the wheel"), tetapi straight tidak boleh melingkar — Q-K-A-2-3 bukan straight.

**Q. Adakah flush menang ke atas straight dalam poker?**

A. Ya. Flush ialah #5 dan straight #6, jadi flush sentiasa menang. Ia lebih tinggi kerana lima kad satu jenis secara statistik lebih sukar dibentuk berbanding lima berturutan.

**Q. Adakah full house menang ke atas flush?**

A. Ya. Full house (#4) menang ke atas flush (#5) dan straight. Ia hanya kalah kepada four of a kind, straight flush, atau royal flush.

**Q. Apa yang menang ke atas straight dalam poker?**

A. Flush, full house, four of a kind, straight flush, atau royal flush semuanya menang ke atas straight — begitu juga straight yang lebih tinggi. Straight (#6) masih menang ke atas three of a kind, two pair, pair, dan high card.

**Q. Apa yang menang ke atas flush dalam poker?**

A. Full house, four of a kind, straight flush, atau royal flush menang ke atas flush. Melawan flush lain, kad teratas yang lebih tinggi menang. Flush (#5) masih menang ke atas straight dan semua yang di bawahnya.

**Q. Apa yang menang ke atas full house dalam poker?**

A. Hanya tiga tangan menang ke atas full house: four of a kind, straight flush, dan royal flush. Full house yang lebih tinggi juga menang — dan three of a kind dibandingkan sebelum pasangan, jadi KKK-22 menang ke atas QQQ-AA.

**Q. Apa yang menang ke atas royal flush dalam poker?**

A. Tiada. Royal flush (A-K-Q-J-10 satu jenis) ialah tangan terbaik yang mungkin dalam poker. Ia tidak boleh dikalahkan — satu-satunya "seri" ialah royal flush yang keseluruhannya terletak di board untuk dikongsi semua pemain, lalu pot dibahagi.

**Q. Apa yang menang ke atas straight flush dalam poker?**

A. Hanya straight flush yang lebih tinggi atau royal flush (yang sebenarnya straight flush ber-As tinggi). Straight flush (#2) menang ke atas four of a kind dan setiap tangan di bawahnya.

**Q. Apakah itu kicker?**

A. Kicker ialah kad yang bukan sebahagian daripada tangan siap anda tetapi memecahkan seri. Jika dua pemain memegang pair yang sama, kad sampingan (kicker) tertinggi yang menang. As ialah kicker terbaik yang mungkin.

**Q. Bolehkah dua pemain memegang tangan yang sama?**

A. Boleh. Jika lima kad terbaik kedua-dua pemain sama nilainya, pot dibahagi ("chop"). Jenis kad tidak pernah memecahkan seri dalam Texas Hold'em.

**Q. Adakah wajib menggunakan kedua-dua hole card anda?**

A. Dalam Hold'em, tidak — anda membentuk lima terbaik daripada mana-mana gabungan dua hole card anda dan lima kad komuniti, malah tanpa menggunakan satu pun. (Omaha berbeza: anda wajib guna tepat dua.)

**Q. Apakah beza set dan trips?**

A. Kedua-duanya three of a kind. *Set* ialah pocket pair ditambah satu kad board (tersembunyi rapi); *trips* ialah sepasang di board ditambah satu kad di tangan anda (lebih mudah dibaca). Set memenangi lebih banyak cip.

**Q. Apakah tangan tertinggi dalam poker?**

A. Royal Flush (A-K-Q-J-10 satu jenis). Ia tidak boleh dikalahkan — satu-satunya seri ialah royal flush yang keseluruhannya terletak di board, lalu semua pemain berkongsi pot.

**Q. Adakah three of a kind lebih baik daripada two pair?**

A. Ya. Three of a kind ialah #7 dan two pair #8, jadi trips menang. Two pair hanya menang ke atas pair dan high card.

**Q. Adakah straight flush menang ke atas four of a kind?**

A. Ya. Straight flush (#2) menang ke atas four of a kind (#3) — lima kad berturutan satu jenis mengatasi quads. Yang berada di atas straight flush hanyalah straight flush yang lebih tinggi dan royal flush, yang sekadar versi ber-As tinggi bagi tangan yang sama.

**Q. Apakah tangan terendah (paling teruk) dalam poker?**

A. Tangan paling teruk yang mungkin ialah 7-5-4-3-2 dalam jenis bercampur ("seven-high"). Ia high card terendah yang bukan pair, straight, mahupun flush — tangan klasik "anda tiada apa-apa".

**Q. Bolehkah anda ada tiga pasangan dalam poker?**

A. Tidak. Tangan poker sentiasa lima kad, jadi ia paling banyak mengandungi dua pasangan. Jika hole card dan board memberi anda tiga pasangan daripada tujuh kad, hanya dua pasangan terbaik anda dikira untuk tangan itu — satu kad daripada pasangan ketiga masih boleh mengisi slot kicker jika ia kad selebihnya yang tertinggi, tetapi ia tidak pernah menjadi tangan "three pair".

**Q. Bolehkah As digunakan sebagai 1 dalam poker?**

A. Boleh. As main tinggi dan rendah, jadi A-2-3-4-5 ("the wheel") ialah straight yang sah — yang terendah mungkin. Namun anda tidak boleh melingkar: K-A-2-3-4 bukan straight.

---

## 3 Perkara untuk Diingati

1. **Susunannya:** Royal Flush > Straight Flush > Four of a Kind > Full House > Flush > Straight > Three of a Kind > Two Pair > Pair > High Card.
2. **Perangkapnya:** flush (#5) menang ke atas straight (#6) — dan mana-mana board berpasangan boleh menyembunyikan full house yang menang ke atas kedua-duanya.
3. **Realitinya:** kebanyakan pot dimenangi dengan pair atau high card, jadi kicker anda lebih bernilai daripada yang anda sangka.

Pelajari susunannya dalam satu petang, latih pasangan yang mengelirukan, dan jalankan imbasan flush → straight → pasangan pada setiap board. Buat begitu dan anda tidak akan lagi menolak pot ke arah yang salah.

Sebaik sahaja anda tahu susunannya, langkah seterusnya yang wajar ialah memahami keseluruhan aliran permainan — dari cip dan posisi hingga strategi pertama anda — dalam [panduan Texas Hold'em untuk pemula](/ms/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp").

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Panduan Pemula</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peraturan Texas Hold'em untuk Pemula</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Peraturan lengkap — dari blind hingga showdown</div>
  </a>
  <a href="/ms/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peraturan Showdown Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Siapa buka kad dulu, muck dan slow roll</div>
  </a>
  <a href="/ms/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Urutan Permainan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Urutan Permainan Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Dari blind hingga showdown, langkah demi langkah</div>
  </a>
  <a href="/ms/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Aksi Pertaruhan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cek, Call, Raise, Fold</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Setiap aksi pertaruhan Texas Hold'em dijelaskan</div>
  </a>
  <a href="/ms/blog/holdem-all-in-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">All-In</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peraturan All-In & Side Pot</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Side pot, re-raise dan showdown all-in</div>
  </a>
</div>
`.trim(),
};
