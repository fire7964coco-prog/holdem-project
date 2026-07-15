import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Apakah Flush Mengalahkan Straight? Matematika dan Salah Bacanya",
  seoTitle: "Apakah Flush Mengalahkan Straight? Ya — dan Apa yang Mengalahkan Flush",
  desc: "Menyodorkan straight lalu flush yang ambil pot? Flush selalu mengalahkan straight. Inilah matematikanya, apa yang mengalahkan flush, dan 3 meja pengecoh.",
  tldr: "Flush (lima kartu satu jenis — sekitar 0,197% dari pembagian lima kartu) selalu mengalahkan straight (lima kartu berurutan, sekitar 0,392%) di Texas Hold'em — karena flush kira-kira dua kali lebih sulit dibentuk.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infografik: flush ber-As A♠ J♠ 9♠ 6♠ 2♠ di samping straight nine-high dengan lencana emas FLUSH WINS yang menjelaskan kenapa flush berperingkat lebih tinggi",
  tags: ["apakah flush mengalahkan straight", "flush vs straight", "apa yang mengalahkan flush", "apa itu straight flush", "kenapa flush mengalahkan straight", "flush vs full house", "flush lebih tinggi", "beda flush dan straight"],
  content: `
Pot besar pertama yang pernah saya kalahkan di cash game live berjalan persis begini: saya membentuk ten-high straight di river, menyodorkannya seolah itu emas — lalu seorang regular yang pendiam membuka dua hati. ==r:Dealer mendorong pot ke arah sebaliknya==, dan saya memutar ulang tangan itu sepanjang perjalanan pulang.

Kalau itu baru saja terjadi pada Anda, jawaban singkatnya adalah ==g:ya — flush mengalahkan straight, setiap kali tanpa terkecuali==. Bagian yang menariknya adalah *kenapa*, apa lagi yang mengalahkan flush, dan tiga situasi meja di mana pemain masih sering salah baca secara live di meja.

---

### Jawaban Singkat

:::stripe
Flush > Straight | Tanpa pengecualian di Texas Hold'em standar
5.108 vs 10.200 | Kombinasi flush lima-kartu vs kombinasi straight — flush kira-kira 2× lebih langka
#5 vs #6 | Posisi flush dan straight dalam peringkat 10 tangan
:::

> **Jawaban cepat**
> **Flush selalu mengalahkan straight** di Texas Hold'em — tanpa pengecualian dalam permainan standar. Flush (lima kartu satu jenis) secara statistik lebih sulit dibentuk daripada straight (lima kartu berurutan): sekitar **5.108** kombinasi lima-kartu berbanding **10.200**.

---

## Apakah Flush Mengalahkan Straight? Di Mana Kedua Tangan Ini Berada

Ya — dan ini sama sekali bukan soal penilaian subjektif. ==Flush berada satu tingkat di atas straight, dan itu tak pernah berubah di Hold'em standar.== Inilah lingkungan di sekitar dua tangan yang paling sering dibingungkan orang:

| Peringkat | Tangan | Contoh |
|------|------|------|
| #2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Straight** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Three of a Kind | Q♠ Q♥ Q♦ 7♠ 3♣ |

Ingin melihat seluruh sepuluh tangan lengkap dengan peluang, contoh, dan soal meja? Semua itu ada di [panduan peringkat tangan poker lengkap](/id/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — artikel ini fokus pada duel flush-versus-straight dan tetangga terdekatnya.

---

## Kenapa Flush Mengalahkan Straight? Matematikanya

Kekuatan tangan di poker ditentukan oleh satu hal: **seberapa sulit tangan itu dibentuk**. Makin langka, makin tinggi peringkatnya. Tak ada yang acak dalam urutannya — ini murni frekuensi.

Hitung 2.598.960 kemungkinan tangan lima-kartu dari satu deck 52 kartu, dan urutannya muncul dengan sendirinya:

| Tangan | Kombinasi | Probabilitas | Vonis |
|:---|:---:|:---:|:---|
| Four of a Kind | 624 | 0,024% | Mengalahkan flush |
| Full House | 3.744 | 0,144% | Mengalahkan flush |
| **Flush** | **5.108** | **0,197%** | **Mengalahkan straight ✅** |
| **Straight** | **10.200** | **0,392%** | **Kalah dari flush ❌** |
| Three of a Kind | 54.912 | 2,11% | Kalah dari straight |

Straight punya kira-kira ==r:**dua kali** lebih banyak cara terbentuk dibanding flush==, jadi ia muncul dua kali lebih sering — dan itulah yang membuatnya jadi tangan lebih lemah. Aturan frekuensi yang sama menjelaskan seluruh tangganya; angka pasti untuk tiap tangan ada di [grafik peluang dan probabilitas poker](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Kenapa ini terasa terbalik

Straight hanya butuh lima rank berurutan, dan ==**jenisnya tidak penting**==. Kebebasan itu menciptakan sejumlah besar kombinasi. Flush justru kebalikannya: setiap dari kelima kartu harus punya ==**jenis yang sama**==, dan hanya satu dari empat jenis yang bisa melakukannya dalam satu waktu. ==g:Jauh lebih sedikit cara untuk sampai ke sana berarti flush lebih langka — dan yang lebih langka selalu menang.==

:::tip[Kalau Anda pegang flush draw dan lawan Anda sedang menarik ke straight, posisi Anda sangat bagus — bahkan ketika **kedua** draw jadi, flush Anda mengalahkan straight mereka di showdown.]:::

---

## 3 Situasi Meja yang Masih Mengecoh Pemain

![Meja menunjukkan 8♥ 7♥ 6♥ 5♠ A♣ — tiga hati di meja berarti flush hidup meski Anda pegang straight](/images/holdem-flush-vs-straight-board.webp "Tiga kartu satu jenis di meja — flush draw hidup melawan straight Anda")

Tahu aturannya tidak sama dengan membacanya secara live — keterampilan itulah yang dilatih oleh [membaca meja](/id/blog/holdem-reading-the-board). Inilah tiga situasi di mana kesalahan itu benar-benar terjadi.

### Situasi 1 — Anda membentuk straight, tapi meja punya tiga kartu sejenis

:::hand[8♥,7♥,6♥,5♠,A♣] Meja (5 kartu):::

Anda pegang **9♠ 10♠** untuk **straight 6-7-8-9-10** yang bersih. Terasa kuat — tapi meja menunjukkan **tiga hati**. Kalau lawan Anda pegang dua hati, mereka punya flush, dan **flush mengalahkan straight**. Setiap kali ada tiga kartu atau lebih satu jenis di meja, flush itu hidup; sesuaikan taruhan dan call Anda dengan itu.

### Situasi 2 — Menarik ke straight sekaligus flush

:::hand[8♥,7♥,6♠,2♣] Meja (4 kartu, turn):::

Anda pegang **9♥ 5♥**. Anda sudah punya **straight 5-6-7-8-9** — jadi kenapa masih mengincar hati? Karena Anda juga pegang **empat kartu menuju flush** (9♥ 8♥ 7♥ 5♥): hati apa pun di river meng-upgrade straight Anda jadi flush, dan **6♥ secara spesifik** menyempurnakan **straight flush 5-6-7-8-9 (#2)** yang menghancurkan segalanya. Ketika Anda bisa menarik ke tangan lebih besar secara gratis, mainkan dengan upgrade itu dalam pikiran.

### Situasi 3 — Anda punya flush, mereka membuka straight

:::hand[J♠,9♠,7♠,4♣,2♦] Meja (5 kartu):::

Anda pegang **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, sebuah flush ber-As. Lawan Anda menunjukkan **10♥ 8♦** untuk straight 7-8-9-10-J dan mengumumkannya dengan percaya diri. Jangan berkedip: flush Anda lebih tinggi. Flush di atas straight, selalu.

---

## Apa yang Mengalahkan Flush di Poker?

Flush Anda adalah favorit melawan sebagian besar deck — tapi tepat **empat jenis tangan** (plus flush yang lebih besar) mengalahkannya:

:::compare
Mengalahkan flush Anda | Kalah dari flush Anda
Full house (#4) | Straight (#6)
Four of a kind (#3) | Three of a kind (#7)
Straight flush (#2) | Two pair (#8)
Royal flush (#1) | One pair & high card (#9–#10)
Flush yang lebih tinggi | Flush mana pun yang lebih rendah
:::

Duel yang paling sering diperdebatkan orang setelah flush vs straight adalah **flush vs full house** — dan full house-nya yang menang. Tanda bahayanya adalah **meja yang berpasangan**. Perhatikan yang ini:

:::hand[K♠,9♠,9♥,4♠,2♦] Meja (5 kartu):::

Anda pegang **A♠ 5♠** untuk nut flush: **A♠ K♠ 9♠ 5♠ 4♠**. Lawan Anda pegang **K♦ 9♦** dan membuka **9♦ 9♠ 9♥ K♦ K♠** — nines full of kings. ==r:Full house mengalahkan flush==, dan tak ada flush yang selamat dari itu. Di meja yang tidak berpasangan, flush ber-As Anda hanya kalah dari straight flush; begitu meja berpasangan, full house dan four of a kind masuk ke gambaran.

Ketika dua pemain punya *jenis tangan yang sama*, pemenangnya ditentukan lewat perbandingan kartu demi kartu — sistem lengkapnya ada di [aturan seri dan kicker poker](/id/blog/holdem-tiebreak-rules).

---

## Flush vs Flush, Straight vs Straight — Siapa yang Menang Serinya?

Ya, satu flush benar-benar bisa lebih tinggi dari flush lain. **Jenis kartu tidak relevan** — bandingkan kelima kartu dari atas ke bawah, tertinggi dulu:

| Pemain | Flush | Hasil |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Menang** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Kalah |

As Pemain A mengalahkan king Pemain B di kartu pertama, jadi A menang. Flush sekop **tidak** mengalahkan flush hati — hanya rank yang menentukan.

Straight bahkan lebih sederhana: bandingkan **kartu tertinggi** saja — tak ada kicker.

- **A-K-Q-J-10** (As tinggi, "Broadway") adalah straight terkuat.
- **A-2-3-4-5** ("the wheel", As main rendah) adalah yang terlemah.

| Pemain | Straight | Hasil |
|--------|------|------|
| A | Q-J-10-9-8 | **Menang** |
| B | J-10-9-8-7 | Kalah |

Queen mengalahkan jack, jadi A menang. Kalau lima kartu terbaik kedua pemain identik rank-nya, itu jadi [split pot](/id/blog/holdem-split-pot-rules).

---

## Apa Itu Straight Flush? Ketika Keduanya Terjadi Sekaligus

![9♥ 8♥ 7♥ 6♥ 5♥ — straight flush dalam hati, tangan #2 di poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — lima hati berurutan, hanya bisa dikalahkan royal flush")

Sebuah **straight flush** adalah lima kartu *berurutan* dari *satu jenis* — seperti 9♥ 8♥ 7♥ 6♥ 5♥. Ini adalah **tangan #2 di poker**, hanya bisa dikalahkan oleh royal flush (yang sebenarnya hanyalah straight flush ber-As, A-K-Q-J-10 satu jenis). Dengan hanya **36 kombinasi (~0,00139%)**, ia lebih langka dari segalanya kecuali royal itu sendiri.

Jebakannya: ==*lima kartu yang sama* harus sekaligus satu jenis dan berurutan==. Perhatikan bedanya di meja **8♥ 7♥ 6♥ Q♠ 3♦**:

- Pegang **K♥ 2♥** → lima hati Anda adalah K-8-7-6-2. Tidak berurutan — itu ==flush biasa, bukan straight flush==.
- Pegang **10♥ 9♥** → lima hati Anda adalah 10-9-8-7-6. Berurutan *dan* satu jenis — ==g:straight flush 10-high==.

Kalau straight Anda memakai sebagian kartu dan flush Anda memakai kartu lain, Anda tidak menjumlahkannya — Anda cukup memainkan yang lebih tinggi dari keduanya, yaitu flush.

---

## Satu Pengecualian Nyata: Short Deck

Di **Short Deck (6+) Hold'em**, kartu 2 sampai 5 dibuang dari deck. Dengan lebih sedikit kartu, flush jadi *lebih sulit* dibentuk daripada full house — jadi di format itu peringkatnya bergeser dan ==r:**flush mengalahkan full house**==. Prinsipnya tak pernah berubah: ==tangan yang lebih langka menang==. Hanya deck-nya yang berubah. Di Texas Hold'em standar dengan deck penuh 52 kartu, ==g:flush mengalahkan straight dan kalah dari full house, setiap kali==.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-tiebreak-rules | Aturan Kicker & Seri | /images/holdem-tiebreak-hero.webp
/id/blog/holdem-split-pot-rules | Kapan Pot Dibagi? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Apakah flush mengalahkan straight di poker?**

A. Ya. Flush adalah tangan #5 dan straight #6, jadi flush selalu menang di Texas Hold'em standar. Lima kartu satu jenis secara statistik lebih sulit dibentuk daripada lima kartu berurutan, dan tangan yang lebih langka selalu berperingkat lebih tinggi.

**Q. Apakah straight mengalahkan flush?**

A. Tidak. Straight (#6) tak pernah mengalahkan flush (#5) di Texas Hold'em standar. Ini kesalahpahaman umum karena straight bisa terasa lebih sulit dijadikan, tapi flush kira-kira dua kali lebih langka — jadi flush selalu mengambil pot.

**Q. Kenapa flush mengalahkan straight?**

A. Murni matematika. Straight mengabaikan jenis, jadi ada sekitar 10.200 cara membentuknya, berbanding hanya 5.108 cara membentuk flush. Flush kira-kira dua kali lebih langka, dan di poker tangan yang lebih langka selalu berperingkat lebih tinggi.

**Q. Apa yang mengalahkan flush di poker?**

A. Full house, four of a kind, straight flush, dan royal flush semuanya mengalahkan flush — begitu juga flush yang lebih tinggi (kartu teratas lebih baik). Segala yang di bawahnya (straight, three of a kind, two pair, one pair, high card) kalah darinya.

**Q. Apa yang mengalahkan straight di poker?**

A. Flush, full house, four of a kind, straight flush, dan royal flush semuanya mengalahkan straight — plus straight mana pun yang lebih tinggi. Straight masih mengalahkan three of a kind dan segala yang di bawahnya. Urutan lengkap dari terbaik ke terburuk ada di [peringkat tangan lengkap](/id/blog/holdem-hand-rankings).

**Q. Bisakah flush Anda lebih tinggi dari pemain lain?**

A. Ya. Dua flush dibandingkan kartu demi kartu dari atas ke bawah, jadi flush ber-As ("nut") mengalahkan flush ber-king. Kalau kartu teratas sama, kartu tertinggi kedua yang menentukan, dan seterusnya melalui kelima kartu.

**Q. Apakah jenis flush penting?**

A. Tidak. Texas Hold'em tidak punya peringkat jenis. Jenis hanya penting untuk *membentuk* flush, tak pernah untuk membandingkan tangan — ketika dua flush bertabrakan (selalu jenis yang sama di Hold'em, karena berbagi kartu meja), hanya rank yang menentukan, dan rank yang identik membagi pot.

**Q. Bisakah flush dan straight seri atau membagi pot?**

A. Tidak. Salah satu tangan selalu berperingkat di atas yang lain, jadi flush cukup menang. Split hanya terjadi antara dua tangan dengan peringkat yang persis sama dan nilai lima-kartu yang persis sama.

---

## Poin Penting

1. **Flush (#5) mengalahkan straight (#6)** — tanpa pengecualian di Hold'em standar.
2. Ia menang karena kira-kira **dua kali lebih langka**: 5.108 kombinasi flush vs 10.200 kombinasi straight.
3. Perhatikan meja: **tiga kartu satu jenis** berarti flush hidup, **meja yang berpasangan** berarti full house bisa mengalahkan flush Anda, dan satu jenis *plus* berurutan adalah straight flush.

Kunci urutan lengkapnya dengan [peringkat tangan lengkap](/id/blog/holdem-hand-rankings), pelajari bagaimana tangan-tangan berdekatan diputuskan di [panduan seri dan kicker](/id/blog/holdem-tiebreak-rules), dan kalau Anda benar-benar baru, [panduan pemula aturan Texas Hold'em](/id/blog/texas-holdem-rules-for-beginners) merangkai semuanya jadi satu.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Peringkat Tangan Poker — Terbaik ke Terburuk</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kesepuluh tangan dengan peluang, contoh, dan soal meja</div>
  </a>
  <a href="/id/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Aturan Kicker & Seri</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Flush atau straight sama — siapa yang menang pot?</div>
  </a>
  <a href="/id/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kapan Pot Dibagi?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 situasi chop termasuk flush identik</div>
  </a>
</div>
`.trim(),
};

export default POST;
