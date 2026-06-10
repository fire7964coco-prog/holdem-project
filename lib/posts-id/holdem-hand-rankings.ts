import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Peringkat tangan poker di Texas Hold'em — dari terkuat ke terlemah, lengkap dengan peluang",
  seoTitle: "Mengira menang tapi kalah pot? — Peringkat tangan poker",
  desc: "Sudah dapat flush tapi tetap kalah pot? Hampir selalu karena satu aturan yang terlewat. Inilah 10 tangan poker dari terkuat ke terlemah, peluang nyata tiap tangan, dan bagaimana kicker serta seri menentukan pemenang.",
  tldr: "Peringkat tangan poker dari terkuat ke terlemah adalah: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, Pair, dan High Card.",
  category: "초보 가이드",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 mnt",
  emoji: "🃏",
  tags: ["tangan poker", "peringkat tangan poker", "urutan kartu poker", "tangan texas holdem", "tangan mana yang menang poker", "kicker poker", "aturan seri poker", "tangan poker terbaik"],
  content: `
Anda head-up di river. Flush Anda jadi, Anda yakin itu yang terbaik — lalu dealer mendorong pot ke sisi lawan. Meja sudah berpasangan, lawan punya full house, dan Anda sama sekali tak menyangka.

Hampir setiap momen "saya kira menang" berujung pada hal yang sama: tidak membaca **peringkat tangan poker** cukup cepat. Urutannya bisa dihafal dalam lima menit. Yang sulit adalah membacanya langsung, di bawah tekanan, dengan meja yang berpasangan atau terhubung — dan itu jarang dijelaskan dengan baik.

Panduan ini menyelesaikan keduanya. Anda akan mendapat urutan lengkap dengan peluang nyata, semua aturan seri, tiga soal meja sungguhan untuk melatih "temukan lima kartu terbaikmu", dan rutinitas 1 detik untuk membaca meja apa pun.

---

## Peringkat tangan poker: urutan lengkap

Mulai dari sini. Inilah seluruh peringkat, dari terkuat ke terlemah, dengan peluang kira-kira menjadikan tiap tangan hingga river di Texas Hold'em.

| # | Tangan | Disebut juga | Apa itu | Peluang (hingga river) |
|------|------|------|------|------|
| **1** | Royal Flush | "Royal" | A-K-Q-J-10 satu jenis | 0,0032% |
| **2** | Straight Flush | "Steel wheel" (A-5) | 5 berurutan, satu jenis | 0,0279% |
| **3** | Four of a Kind | "Quads" | Empat kartu bernilai sama | 0,168% |
| **4** | Full House | "Full" | Three of a kind + pair | 2,60% |
| **5** | Flush | — | 5 kartu satu jenis | 3,03% |
| **6** | Straight | — | 5 berurutan, jenis campuran | 4,62% |
| **7** | Three of a Kind | "Set" / "Trips" | Tiga kartu bernilai sama | 4,83% |
| **8** | Two Pair | — | Dua pasang berbeda | 23,5% |
| **9** | Pair | — | Dua kartu bernilai sama | 43,8% |
| **10** | High Card | "Tanpa apa-apa" | Tidak ada kombinasi | 17,4% |

> **Aturan yang mengakhiri perdebatan**
> Pair dan High Card bersama-sama mencakup sekitar 61% dari semua tangan tujuh-kartu hingga river. Tangan besar terasa umum karena mudah diingat — tapi sebagian besar pot ditentukan oleh sepasang kartu dan sebuah kicker.

:::quiz:::

---

## Kekuatan kartu: dasarnya dalam 30 detik

Sebelum tangan, Anda butuh kekuatan kartu. Hanya dua hal.

### Urutan nilai (tertinggi ke terendah)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

As adalah kartu terkuat sekaligus satu-satunya yang melanggar aturan: bisa main tinggi (A-K-Q-J-10) dan rendah (A-2-3-4-5, "the wheel"). Tapi tidak bisa berputar lewat tengah: Q-K-A-2-3 **bukan** straight.

### Jenis kartu tidak punya nilai

Di Texas Hold'em standar, **tidak ada jenis yang mengalahkan jenis lain**. Sekop tidak mengalahkan hati. Jenis hanya penting untuk *membentuk* flush, tak pernah untuk memecah seri. Jika dua pemain punya lima kartu sama dengan jenis berbeda, pot dibagi — selalu.

---

## 10 tangan poker dijelaskan

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10 sekop:::

**A♠ K♠ Q♠ J♠ 10♠** — straight flush tertinggi dan tangan terbaik di poker.

Tak bisa dikalahkan maupun diseri (dua royal flush hanya mungkin di jenis berbeda, artinya pot dibagi). Muncul kira-kira sekali tiap 31.000 tangan, jadi banyak pemain bertahun-tahun tak pernah mendapatkannya. Saat dapat, satu-satunya tugas Anda adalah memasukkan chip sebanyak mungkin.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — lima hati berurutan:::

**9♥ 8♥ 7♥ 6♥ 5♥** — lima kartu berurutan, semuanya satu jenis.

Hanya kalah dari straight flush lebih tinggi atau royal flush. Versi terendah, A-2-3-4-5 satu jenis, disebut "steel wheel". Jika dua straight flush bertemu, yang kartu tertingginya menang.

### #3 — Four of a Kind

:::hand[8♣,8♦,8♥,8♠,K♥] Four of a Kind — empat angka 8 + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — keempat kartu bernilai sama.

Antara dua four of a kind, nilai lebih tinggi menang. Jika keempatnya ada *di meja*, **kicker** tertinggi yang menentukan — dan As yang berkuasa.

### #4 — Full House

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — tiga Q + dua angka 5:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — three of a kind plus sepasang.

Bandingkan **three of a kind dulu**: QQQ55 menang atas JJJ99 karena Q di atas J, berapa pun besar pasangannya. Pasangan baru dibandingkan kalau three of a kind seri.

> **"Cooler" paling umum**
> Setiap kali meja berpasangan, cari full house sebelum yakin dengan flush atau straight. "Flush tertinggiku kalah dari full house" adalah bad beat paling sering di Hold'em.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — lima diamond:::

**A♦ J♦ 8♦ 6♦ 2♦** — lima kartu satu jenis, tak peduli urutan.

Dua flush dibandingkan kartu demi kartu dari yang tertinggi: A-J-8-6-2 menang atas A-J-8-5-2 karena 6 di atas 5. Empat kartu satu jenis **bukan** flush: butuh lima.

### #6 — Straight

:::hand[7♠,6♥,5♣,4♦,3♠] Straight — lima berurutan, jenis campuran:::

**7♠ 6♥ 5♣ 4♦ 3♠** — lima kartu berurutan, jenis campuran.

- **Tertinggi:** A-K-Q-J-10 ("Broadway") adalah straight tertinggi.
- **The wheel:** A-2-3-4-5 yang terendah (As main rendah).
- **Terlarang:** tidak bisa berputar — K-A-2-3-4 bukan straight.

Antara dua straight, yang kartu tertingginya menang.

### #7 — Three of a Kind (set / trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Three of a Kind — tiga J + kicker:::

**J♣ J♠ J♥ A♦ 4♠** — tiga kartu bernilai sama.

Ada dua cara membentuknya, dan bedanya penting:

- **Set:** sepasang di tangan plus satu kartu meja (mis. Anda pegang J♣ J♠ lalu keluar J♥). Tersembunyi dan berbahaya.
- **Trips:** sepasang di meja plus satu kartu Anda. Lebih mudah dibaca lawan dan lebih sering dibagi.

Set meraup lebih banyak chip karena tak ada yang menyangka.

### #8 — Two Pair

:::hand[10♠,10♥,8♣,8♦,A♠] Two Pair — 10 dan 8 + kicker As:::

**10♠ 10♥ 8♣ 8♦ A♠** — dua pasang berbeda.

Dibandingkan dengan urutan ini: **pasangan tinggi → pasangan rendah → kicker**. KK99-A menang atas QQJJ-A karena K di atas Q sebelum melihat apa pun lagi.

### #9 — Pair

:::hand[K♠,K♦,9♥,6♣,2♠] Pair — sepasang K + tiga kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — dua kartu bernilai sama.

Tangan jadi paling umum di Hold'em. Dua pasangan yang sama ditentukan kicker: **nilai pasangan → kicker 1 → kicker 2 → kicker 3**, dari tinggi ke rendah. Di sinilah sebagian besar kekalahan "tangan yang sama" terjadi: jaga kicker Anda.

### #10 — High Card

:::hand[A♣,Q♠,9♥,5♦,3♣] High Card — tanpa kombinasi:::

**A♣ Q♠ 9♥ 5♦ 3♣** — tak ada yang terhubung.

Saat showdown, kartu tertinggi menang, lalu berikutnya, dan seterusnya untuk kelimanya. Jika kelimanya sama, dibagi. Inilah yang tersisa saat gertakan dibayar dan tak jadi apa-apa.

---

## Cara kerja kicker dan seri yang sebenarnya

![Showdown poker — membandingkan lima kartu terbaik dua pemain](/images/holdem-hand-rankings-showdown.webp "Saat showdown, tangan lima-kartu terbaik mengambil pot")

Inilah bagian yang menentukan pot sungguhan — dan yang sering dilewati banyak tabel. Saat dua pemain punya **jenis tangan yang sama**, ikuti urutan persis ini:

1. **Bandingkan jenis tangan.** Flush selalu menang atas straight, full house selalu menang atas flush, dan seterusnya.
2. **Bandingkan kartu pembentuk tangan.** Sepasang As menang atas sepasang K; flush ber-As menang atas flush ber-J.
3. **Bandingkan kicker.** Jika tangan jadinya seri, kartu sisa yang menentukan, satu per satu dari yang tertinggi.
4. **Masih identik? Pot dibagi.** Jenis kartu tak pernah memecah seri.

Lencana di sebelah kanan menunjukkan apakah **kicker dipakai untuk menentukan tangan**.

:::tiebreak
Royal Flush|Selalu seri (pot dibagi)|-Tanpa kicker
Straight Flush|Hanya kartu tertinggi|-Tanpa kicker
Four of a Kind|Nilai quad → kartu ke-5|+Pakai kicker
Full House|Nilai trio → pasangan|-Tanpa kicker
Flush|Kelimanya, tinggi ke rendah|+Pakai kicker
Straight|Hanya kartu tertinggi|-Tanpa kicker
Three of a Kind|Nilai trio → 2 kicker|+Pakai kicker
Two Pair|Pasangan tinggi → rendah → kicker|+Pakai kicker
Pair|Nilai pasangan → 3 kicker|+Pakai kicker
High Card|Kelimanya, tinggi ke rendah|+Pakai kicker
:::

Sebuah **kicker** hanyalah kartu yang bukan bagian dari tangan jadi tapi memecah seri. Dengan A-A-K lawan A-A-Q, keduanya punya sepasang As — kicker K yang menang. Karena itu pemain bagus peduli pada *kualitas* kartu tingginya, bukan sekadar berpasangan.

---

## Baca meja: 3 soal nyata

Tahu urutan tidak sama dengan membacanya cepat. Berikut tiga situasi nyata. Tutup jawabannya, temukan lima kartu terbaik dari tujuh, lalu cek.

### Soal 1 — Full house tersembunyi

:::hand[A♠,A♦,K♥,K♣,Q♠] Meja (5 kartu):::

Anda pegang **Q♥ Q♦**. Apa tangan terbaik Anda?

→ Meja sudah memperlihatkan two pair (A-A dan K-K). Dua Q Anda plus Q♠ di meja membentuk **three of a kind Q**, dan bersama pasangan As di meja Anda dapat **full house — QQQ + AA**. Itu lima kartu terbaik Anda. Pemula tersangkut di "bukankah AAKK + Q itu cuma two pair?" — bukan. Begitu Anda punya three of a kind, Anda pakai full house-nya. **Full house menang atas two pair.**

### Soal 2 — Flush yang ternyata lebih kuat

:::hand[7♥,8♥,9♥,10♥,J♠] Meja (5 kartu):::

Anda pegang **K♥ 2♣**. Meja punya empat hati.

→ K♥ Anda adalah hati kelima, jadi Anda berpikir "flush". Tapi lihat urutannya: **K♥ 10♥ 9♥ 8♥ 7♥** adalah lima hati *berurutan* — sebuah **straight flush ber-K**, tangan #2. Selalu cek apakah kartu flush Anda juga terhubung sebelum mengira itu cuma flush.

### Soal 3 — Saat harus berbagi

:::hand[K♠,K♦,K♥,A♠,2♠] Meja (5 kartu):::

Anda pegang **A♥ 3♣**. Meja sudah membawa three of a kind K.

→ A♥ Anda berpasangan dengan A♠ di meja dan memberi **full house, KKK + AA**. Tapi kalau lawan juga punya As, ia punya full house yang *sama* dan pot dibagi. Kalau ia tak punya As dan hanya pasangan lebih kecil, full house Anda menang. Pelajarannya: saat meja yang mengerjakan hampir semuanya, tangan Anda sering hanya bernilai satu kartu ekstra.

---

## Jawaban cepat untuk duel yang sering diperdebatkan

| Duel | Menang | Kenapa |
|------|------|------|
| Flush vs Straight | **Flush** | #5 menang atas #6 |
| Full House vs Flush | **Full House** | #4 menang atas #5 |
| Three of a Kind vs Two Pair | **Three of a Kind** | #7 menang atas #8 |
| Straight vs Three of a Kind | **Straight** | #6 menang atas #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (As tinggi)** | The wheel straight terendah |
| Pasangan sama, kicker K vs J | **Kicker K** | Kicker tertinggi menang |
| Four of a Kind vs Full House | **Four of a Kind** | #3 menang atas #4 |

---

## Kenapa urutannya begini

Peringkat ini bukan sembarangan — ini murni peluang. **Makin sulit suatu tangan dibentuk, makin tinggi posisinya.** Dalam satu deck 52 kartu, ada lebih sedikit cara membuat lima kartu satu jenis dibanding lima berurutan jenis apa pun — karena itu flush di atas straight. Satu prinsip ini menjelaskan seluruh peringkat.

Ia juga menjelaskan pengecualian besar yang akan Anda temui: di **Short Deck (6+) Hold'em**, di mana kartu 2 sampai 5 dibuang, flush jadi lebih sulit daripada full house — jadi di format itu **flush menang atas full house**. Matematikanya berubah, urutannya berubah. Lebih lanjut soal perbedaan tiap varian di bawah.

---

## Rutinitas 1 detik membaca meja

Saat waktu mepet, periksa ini berurutan setiap meja lengkap:

**1. Jenis dulu** — apakah ada tiga kartu atau lebih satu jenis di meja? Jika ya, flush mungkin. Lihat jenis Anda.

**2. Lalu koneksi** — apakah ada kartu berdekatan nilainya (seperti 8-9-10)? Jika ya, straight hidup.

**3. Terakhir pasangan** — apakah meja berpasangan? Jika ya, full house dan four of a kind mungkin, dan flush atau straight Anda bisa dalam bahaya.

Pemain terlatih membaca meja dengan urutan ini — bahaya dulu (flush/straight di meja), lalu apakah meja berpasangan (yang mengancam segalanya). Bangun kebiasaan ini dan Anda berhenti membayar sembarangan di river.

---

## Hafalkan dalam 3 langkah

| Langkah | Lakukan | Waktu |
|------|------|------|
| **1** | Pelajari tiga grup: Premium (#1-3), Tengah (#4-6), Umum (#7-10) | 1 hari |
| **2** | Latih hanya duel membingungkan: flush vs straight, full house vs flush | 3 hari |
| **3** | Tonton stream poker dan sebutkan pemenang sebelum dealer | 1-2 minggu |

Mengelompokkan dulu mencegah urutan terasa seperti sepuluh hal acak. Duel membingungkan di langkah 2 menyebabkan 90% kesalahan pemula, jadi perbanyak latihannya.

---

## Peringkat tangan per varian

Urutan ini berlaku di hampir semua varian poker, dengan beberapa perbedaan penting.

| Permainan | Peringkat | Perbedaan utama |
|------|------|------|
| **Texas Hold'em** | Standar (panduan ini) | Pakai 0-2 kartu Anda |
| **Omaha** | Standar | Wajib pakai *tepat* 2 dari 4 kartu Anda |
| **Seven-Card Stud** | Standar | Tanpa kartu komunitas |
| **Short Deck (6+)** | Dimodifikasi | Flush menang atas full house; kadang A-6-7-8-9 dihitung straight |

Intinya: pelajari urutan standar sekali dan ia berlaku di hampir semua permainan. Hanya ingat aturan "tepat dua" Omaha dan naiknya flush di Short Deck.

---

## Pertanyaan yang sering diajukan

**Q. Apakah flush menang atas straight di poker?**

A. Ya. Flush adalah #5 dan straight #6, jadi flush selalu menang. Ia lebih tinggi karena lima kartu satu jenis lebih sulit dibentuk daripada lima berurutan.

**Q. Apakah full house menang atas flush?**

A. Ya. Full house (#4) menang atas flush (#5) dan straight. Ia hanya kalah dari four of a kind, straight flush, dan royal flush.

**Q. Apa itu kicker?**

A. Kicker adalah kartu yang bukan bagian dari tangan jadi tapi memecah seri. Dengan dua pasangan sama, kartu samping (kicker) tertinggi menang. Kicker terbaik adalah As.

**Q. Bisakah dua pemain punya tangan sama?**

A. Bisa. Jika lima kartu terbaik keduanya identik nilainya, pot dibagi. Jenis kartu tak pernah memecah seri di Texas Hold'em.

**Q. Apakah wajib pakai kedua kartu sendiri?**

A. Di Hold'em, tidak — Anda membentuk lima terbaik dari kombinasi mana pun dari dua kartu Anda dan lima kartu komunitas, bahkan tanpa memakai satu pun. (Omaha berbeda: wajib pakai tepat dua.)

**Q. Apa beda set dan trips?**

A. Keduanya three of a kind. *Set* adalah sepasang di tangan plus satu kartu meja (tersembunyi rapi); *trips* adalah sepasang di meja plus satu kartu Anda (lebih mudah dibaca). Set meraup lebih banyak chip.

**Q. Apa tangan terbaik di poker?**

A. Royal Flush (A-K-Q-J-10 satu jenis). Tak bisa dikalahkan dan hanya seri dengan royal flush lain, yang berarti pot dibagi.

**Q. Apakah three of a kind lebih baik dari two pair?**

A. Ya. Three of a kind adalah #7 dan two pair #8, jadi three of a kind menang. Two pair hanya menang atas pair dan high card.

---

## 3 hal yang harus diingat

1. **Urutannya:** Royal Flush > Straight Flush > Four of a Kind > Full House > Flush > Straight > Three of a Kind > Two Pair > Pair > High Card.
2. **Jebakannya:** flush (#5) menang atas straight (#6) — dan meja berpasangan mana pun bisa menyembunyikan full house yang menang atas keduanya.
3. **Kenyataannya:** sebagian besar pot dimenangkan dengan pair atau high card, jadi kicker Anda lebih berharga dari yang Anda kira.

Pelajari urutannya dalam satu sore, latih duel-duel membingungkan, dan jalankan pindaian "jenis → straight → pasangan" di tiap meja. Lakukan itu dan Anda tak akan pernah lagi mendorong pot ke sisi yang salah.
`.trim(),
};
