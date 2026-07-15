import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "Kapan Pot Dibagi? Aturan Split Pot Hold'em",
  seoTitle: "Menang tangan tapi cuma dapat separuh? — Aturan split pot poker",
  desc: "Bisakah seri di poker? Bisa — inilah kapan tepatnya pot dibagi: lima kartu identik, board yang main untuk semua orang, aturan odd chip, dan pembagian side pot.",
  tldr: "Ya — tangan poker bisa seri. Pot dibagi (split pot) ketika dua pemain atau lebih menunjukkan lima kartu terbaik yang identik saat showdown. Jenis kartu tak pernah memecah seri, dan sisa odd chip diberikan kepada pemain seri pertama di kiri tombol dealer.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Split pot poker — board 8♠ 8♥ 8♦ A♣ K♠ dengan J♠ 10♥ vs 5♣ 2♦, chip dibagi oleh garis emas karena tak ada tangan yang mengalahkan board",
  tags: ["split pot poker", "bisakah seri di poker", "chopped pot", "kapan pot dibagi", "aturan odd chip poker", "board plays", "chop texas holdem"],
  content: `
Di masa awal main poker, saya memimpin di setiap street — raise preflop, bet di flop dan turn, dibayar di river. Saya buka J-10. Lawan membalik **5-2**. "Saya menang, kan?" Dealer diam saja dan menunjuk board: ==**8-8-8-A-K**==. ==r:Tak satu pun kartu tertutup kami mengalahkan trip delapan dengan kicker ace-king==, jadi dealer diam-diam memotong pot jadi dua.

Mendapat separuh pot yang Anda yakin sudah menang itu terasa mengejutkan. Tapi ==g:split pot mengikuti aturan yang jelas== — dan itu menjawab pertanyaan yang paling sering ditanyakan pemain baru: **bisakah seri di poker?** Bisa. Inilah setiap cara hal itu terjadi.

---

> **Jawaban singkat**
> Sebuah pot **dibagi** (juga disebut **chop**) ketika dua pemain atau lebih punya **lima kartu terbaik yang identik** saat showdown. Chip dibagi rata. Jenis kartu tak pernah memecah seri, dan sisa odd chip diberikan kepada pemain seri pertama di kiri tombol dealer.

---

### Angka intinya

:::stripe
5 | situasi di mana pot Hold'em dibagi
0 | seri yang pernah dipecah oleh jenis kartu di Texas Hold'em
1 | odd chip — masuk ke kursi seri pertama di kiri tombol
:::

---

## Apa Itu Split Pot di Poker? (Dan Apakah "Chop" Hal yang Sama?)

Sebuah **split pot** terjadi ketika dua pemain atau lebih punya lima kartu terbaik yang identik saat showdown, sehingga dealer membagi chip rata di antara mereka. Sebuah **chop** — atau "chopped pot" — persis sama dalam bahasa meja ("we're chopping"). Buku aturan menyebutnya split; pemain menyebutnya chop. Orang mencari keduanya, jadi Anda akan melihat kedua istilah dipakai bergantian.

Dasarnya: tangan Anda selalu ==**lima kartu terbaik**== dari tujuh — dua kartu tertutup Anda plus lima kartu di board. Di mana setiap tangan lima-kartu berperingkat dibahas di [peringkat tangan poker lengkap](/id/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:Ketika lima kartu terbaik dua pemain identik peringkatnya, tak ada yang "lebih" menang== — pot dibagi, titik.

---

## Bisakah Seri di Poker? 5 Situasi yang Membagi Pot

Ya — seri adalah hasil yang normal dan sah di Texas Hold'em, dan lebih sering terjadi daripada dugaan pemula. Karena semua orang berbagi lima kartu komunitas yang sama, dua pemain sering tiba di lima kartu terbaik yang sama. Inilah lima cara hal itu terjadi.

### 1. Lima kartu terbaik yang identik
Dua pemain membentuk tangan lima-kartu yang persis sama — nilai yang sama, bahkan jika kartu tertutup mereka berbeda jenis.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Pemain A | Pemain B |
|---|---|---|
| **Tertutup** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (sama) |
| **Lima terbaik** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → dibagi== |

</div>

Keduanya membentuk full house KKK-QQ dari board plus satu king. ==r:Jenis dari king itu tidak penting.==

### 2. Board yang main
Lima kartu komunitas sudah menjadi tangan terkuat bagi semua yang tersisa — itulah pot 8-8-8-A-K dari cerita saya. Ini split yang paling umum, jadi ada bagian tersendiri di bawah.

### 3. Straight yang sama
Dua straight dengan kartu tertinggi sama akan seri, tak peduli jenisnya. Di board 7♣ 6♦ 5♥ K♠ 2♣, baik A dengan 9♠ 8♠ maupun B dengan 9♥ 8♦ membentuk 9-8-7-6-5 — sama tingginya, jadi **dibagi**.

### 4. Flush yang sama
Tidak ada peringkat jenis, jadi dua flush dengan lima nilai yang sama akan seri. Dalam praktik ini hampir selalu berarti **board itu sendiri** adalah flush lima-kartu. Di K♠ J♠ 8♠ 4♠ 2♠, jika A pegang A♥ Q♦ dan B pegang 10♥ 9♦, tak satu pun punya sekop — keduanya main flush board K-J-8-4-2 dan **chop**.

==r:Tapi cek dulu sebelum berasumsi:== sekop apa pun di tangan Anda yang lebih tinggi dari sekop terendah di board akan memperbaiki flush. Di sini bahkan 3♠ yang biasa saja membentuk K-J-8-4-3 dan ==g:memenangkan seluruh pot== — dan A♠ membentuk nut flush.

### 5. Identik hingga kicker terakhir
Pair dan two pair biasanya ditentukan oleh kicker — tapi jika kicker juga sama, itu split. Board A♦ Q♠ 9♣ 6♥ 2♠ dengan A♠ K♦ vs A♥ K♣ memberi kedua pemain ==g:A-A-K-Q-9== → **dibagi**. Ketika kicker *berbeda*, yang lebih tinggi menang mutlak — persisnya bagaimana perbandingan itu bekerja, tangan demi tangan, ada di [aturan tie-breaker dan kicker](/id/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Bisakah Dua Pemain Memenangkan Pot yang Sama? Saat Board yang Main

Ya — dan bahkan tak butuh dua tangan monster. Ketika lima kartu komunitas sudah membentuk lima kartu terbaik yang mungkin bagi semua yang masih bertahan, ==**board yang main**== dan setiap pemain tersisa berbagi pot, entah itu dua pemain atau lima.

Itulah tangan 8-8-8-A-K saya: J-10 saya dan 5-2 lawan sama-sama main trip delapan board dengan kicker ace-king — lima kartu identik, chop otomatis. Kasus ekstremnya adalah board seperti A♠ K♠ Q♠ J♠ 10♠ (royal flush): tak ada kartu tertutup yang bisa memperbaikinya, jadi ==g:semua yang tersisa chop==.

> **Ceknya:** apakah lima kartu terbaik *Anda* — memakai setidaknya satu kartu tertutup — mengalahkan lima kartu board itu sendiri? Jika ya, Anda main tangan Anda. Jika tidak, board yang main dan Anda kemungkinan akan chop. Metode lengkap untuk memindai board dengan cara ini ada di [cara membaca board dan menemukan 5 kartu terbaik](/id/blog/holdem-reading-the-board).

:::tip[Jika board yang main dan seseorang bet di river, pikirkan sebelum call: ketika yang terbaik yang bisa Anda capai hanyalah seri, sebuah call biasanya cuma membeli kembali sebagian chip Anda sendiri. Call hanya jika kartu tertutup Anda realistis bisa mengalahkan pegangan persis lawan.]:::

---

## 3 Hal yang Tak Pernah Memecah Seri di Poker

![Royal flush sekop = royal flush hati dengan tanda sama dengan emas di antaranya — jenis kartu tak pernah menentukan pemenang di Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Nilai yang identik selalu dibagi — tidak ada peringkat jenis di Texas Hold'em")

Inilah miskonsepsi di balik sebagian besar perdebatan "tunggu, kenapa ini dibagi?!".

### ❌ "Jenis saya lebih tinggi, jadi saya menang"
==r:Flush sekop **tidak** mengalahkan flush hati.== Texas Hold'em tidak punya peringkat jenis — ==nilai yang identik dibagi, titik==. (Ini menjebak pemain yang datang dari permainan yang *memang* memeringkat jenis.)

### ❌ "Kartu tertutup saya lebih tinggi, jadi saya menang"
Board 9♠ 8♦ 7♣ 6♥ 5♠ — sebuah straight jadi. Anda pegang A♠ K♦; lawan pegang 2♣ 3♥. ==r:**Dibagi.**== Kalian berdua main 9-8-7-6-5 board, karena ==r:kartu tertutup besar Anda tak pernah masuk ke lima kartu terbaik==. Kartu tertutup tinggi hanya penting kalau benar-benar main sebagai kicker — [apa itu kicker dan kapan ia main](/id/blog/holdem-kicker) menarik garis itu dengan tepat.

### ❌ "Saya pakai kedua kartu saya dan mereka cuma satu"
==r:Berapa banyak kartu tertutup yang Anda pakai tidak relevan.== Satu-satunya yang dihitung adalah lima kartu terkuat dari tujuh. ==g:Jika kedua pemain mendarat di lima kartu terbaik yang sama, itu chop tak peduli bagaimana Anda sampai ke sana.==

---

## Siapa yang Dapat Chip Ekstra? Aturan Odd Chip

Kadang sebuah pot tak bisa dibagi rata — pot 101 chip antara dua pemain adalah 50 masing-masing dengan satu chip tersisa, dan tak ada setengah-chip. Aturan standarnya:

> ==Sisa odd chip diberikan kepada pemain seri pertama **di kiri tombol dealer**== (kursi menang paling awal searah jarum jam dari dealer).

Dalam split tiga arah dengan dua odd chip, dua kursi paling awal searah jarum jam masing-masing dapat satu. ==r:Aturan rumah bisa berbeda== — beberapa card room memberikan odd chip berdasarkan kartu tinggi atau jenis — jadi jika uang sungguhan dipertaruhkan, tanyakan ke floor. ==g:Online, software menugaskannya otomatis berdasarkan posisi.==

---

## Apakah Side Pot Juga Dibagi? Seri Saat Seseorang All-In

Ketika seseorang all-in, chip membentuk ==**main pot**== (semua orang berhak) plus satu atau lebih ==**side pot**== (hanya stack lebih dalam yang terus bertaruh). Setiap pot diberikan — atau di-chop — ==**secara terpisah**==, berdasarkan tangan terbaik di antara pemain yang berhak atas pot itu.

Sebuah contoh nyata: A all-in dengan 100; B dan C masing-masing memasukkan 300. Itu **main pot 300** (100 × 3) dan **side pot 400** (200 + 200, hanya B dan C). Board berjalan A♦ J♥ 7♠ 4♣ 2♥:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Pemain | Tertutup | Lima terbaik | Hasil |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | chop main pot → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | chop main (150) + menang side (400) |
| C | K♦ K♠ | K-K-A-J-7 | kalah keduanya → 0 |

</div>

A dan B seri dengan pasangan As dan kicker identik, jadi mereka ==g:membagi main pot==; side pot hanya diperebutkan B dan C, dan pasangan As B mengalahkan pasangan K C secara mutlak. ==r:Pemain all-in hanya bisa memenangkan atau chop pot yang benar-benar ia sumbangkan.== Bagaimana pot itu terbentuk sejak awal — capping, kelayakan re-raise, urutan showdown — dibahas di [panduan aturan all-in dan side pot](/id/blog/holdem-all-in-rules).

---

## Apakah Pot Pernah Dibagi Separuh High, Separuh Low?

Tidak di Texas Hold'em. Anda mungkin pernah dengar "split-pot games" seperti Omaha Hi-Lo atau Stud Hi-Lo, di mana **setiap** pot dirancang untuk dibagi antara tangan high terbaik dan tangan low terbaik yang memenuhi syarat (eight-or-better). Itu keluarga permainan yang berbeda. ==Hold'em standar hanya high== — pot dibagi *hanya* ketika lima kartu terbaik benar-benar seri.

---

:::readnext[Lanjutkan membaca]
/id/blog/holdem-reading-the-board | Cara Membaca Board & Menemukan 5 Kartu Terbaik | /images/holdem-reading-the-board-hero.webp
/id/blog/holdem-all-in-rules | Aturan All-In & Side Pot Dijelaskan | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. Kapan pot dibagi di poker?**

A. Sebuah pot dibagi ketika dua pemain atau lebih punya lima kartu terbaik yang identik saat showdown; chip dibagi rata di antara mereka.

**Q. Apakah pot dibagi jika kedua pemain punya tangan yang sama?**

A. Hanya jika seluruh lima kartu terbaik seri — pasangan sama dengan kicker sama, atau straight, flush, atau full house yang sama. Jika ada kicker yang berbeda, kicker lebih tinggi memenangkan seluruh pot alih-alih membaginya.

**Q. Apa arti "chopped pot" di poker?**

A. Chopped pot sekadar split pot dalam bahasa meja. "Chop" adalah yang diucapkan pemain; "split pot" adalah istilah buku aturan — keduanya berarti membagi pot rata di antara tangan yang seri.

**Q. Apakah jenis kartu pernah menentukan siapa yang menang di split?**

A. Tidak. Texas Hold'em tidak punya peringkat jenis, jadi tangan lima-kartu yang identik selalu dibagi tak peduli jenisnya.

**Q. Siapa yang dapat odd chip ketika pot tak bisa dibagi rata?**

A. Aturan standar: pemain seri pertama di kiri tombol dealer. Beberapa room menugaskannya berdasarkan kartu tinggi atau jenis, jadi aturan rumah bisa berbeda — software online menanganinya otomatis.

**Q. Bisakah lebih dari dua pemain membagi satu pot?**

A. Bisa. Jika tiga pemain atau lebih semuanya memegang lima kartu terbaik yang identik, pot dibagi rata di antara mereka — paling sering saat board yang main untuk semua orang.

**Q. Bagaimana split pot ditangani ketika seseorang all-in?**

A. Pot pecah menjadi main pot dan side pot; masing-masing diberikan atau di-chop secara terpisah berdasarkan tangan terbaik di antara pemain yang berhak atas pot spesifik itu.

**Q. Apakah chop turnamen sama dengan split pot?**

A. Tidak — kata sama, dua hal berbeda. Split pot saat showdown itu otomatis: ketika tangan seri, dealer membagi chip. "Chop" turnamen adalah kesepakatan sukarela di antara pemain tersisa untuk membagi prize pool, biasanya berdasarkan jumlah chip atau [ICM](/id/blog/holdem-icm), dan hanya terjadi jika semua setuju. Lihat [turnamen vs cash game](/id/blog/holdem-tournament-vs-cash-game) untuk perbedaan pembayaran turnamen.

---

## Poin-poin Penting

1. Ya, ==**Anda bisa seri di poker**== — pot dibagi (chop) kapan pun dua pemain atau lebih berbagi ==**lima kartu terbaik yang identik dari tujuh**==.
2. ==r:**Jenis kartu, kartu tertutup lebih tinggi, dan berapa banyak kartu yang Anda pakai**== tak pernah memecah seri.
3. ==**Odd chip**== masuk ke pemain seri pertama di kiri tombol, dan ==**side pot**== diselesaikan terpisah dari main pot.

Segarkan lagi urutannya di [peringkat tangan lengkap](/id/blog/holdem-hand-rankings), kuasai tangan ketat di [panduan kicker dan tie-breaker](/id/blog/holdem-tiebreak-rules), dan selesaikan perdebatan klasik di [apakah flush menang atas straight](/id/blog/holdem-flush-vs-straight).

---

## Artikel Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Peringkat Tangan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Peringkat Tangan Poker — Terbaik ke Terburuk</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Semua 10 tangan dengan peluang, contoh, dan teka-teki board</div>
  </a>
  <a href="/id/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Aturan Kicker & Tie-Breaker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Bagaimana kicker menentukan showdown tangan sama</div>
  </a>
  <a href="/id/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Duel Tangan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Apakah Flush Menang atas Straight?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Matematika dan situasi board untuk kebingungan #1</div>
  </a>
</div>
`.trim(),
};
