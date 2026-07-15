import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Bagaimana seri dipecahkan di poker — tangan sama, siapa yang menang?",
  seoTitle: "Tangan sama, pair sama — siapa menang? Aturan pemecah seri",
  desc: "Pair sama saat showdown tapi tetap kalah? Inilah aturan seri poker: siapa menang saat pair sama, kapan kartu kelima menentukan, dan kapan pot dibagi.",
  tldr: "Seri dipecahkan dalam urutan tetap: jenis tangan dulu, lalu kartu pembentuk tangan, lalu kicker dari tertinggi ke terendah. Pair sama → first kicker tertinggi menang; lima kartu identik → pot dibagi. Jenis kartu tak pernah menentukan seri.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Showdown poker: A♠ K♦ vs A♥ 9♣ dengan meja A♦ Q♠ 7♥ 3♣ 2♦ — sepasang As yang sama, kicker menentukan pemenang",
  tags: ["aturan pemecah seri poker", "bagaimana seri dipecahkan di poker", "siapa menang pair sama poker", "seri two pair poker", "apakah kartu kelima penting di poker", "kicker poker", "straight lebih tinggi", "seri texas holdem"],
  content: `
Anda membuka sepasang As. Lawan juga. Dealer menghitung kartu samping sejenak — lalu mendorong seluruh pot ke *arahnya*. ==r:Pair sama. Bagaimana Anda bisa kalah?==

Saya sudah menyaksikan momen persis itu menghentikan lebih banyak permainan daripada aturan mana pun: seseorang setengah berdiri, dealer mengetuk felt, dan seluruh meja menunggu penjelasan. Inilah penjelasannya. Setiap seri di Texas Hold'em diselesaikan oleh satu prosedur tetap yang berada satu tingkat di bawah [peringkat tangan poker](/id/blog/holdem-hand-rankings) — peringkat memberi tahu *tangan mana* yang menang; aturan pemecah seri memberi tahu *pemain mana* yang menang saat kedua tangan berjenis sama.

Sebagian besar pekerjaan dilakukan oleh satu kartu: ==**kicker**==. Definisi lengkapnya — tangan mana saja yang punya kicker dan berapa banyak — ada di [apa itu kicker di poker](/id/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Panduan ini adalah *prosedurnya*: persis bagaimana seri dipecahkan untuk pair yang sama, two pair, trips, straight, dan flush — plus kartu kelima yang selalu terlupakan.

---

### Sekilas tentang pemecah seri

:::stripe
3 | Langkah yang menyelesaikan setiap seri di Hold'em
1 | Slot kicker dalam tangan two pair
0 | Seri yang pernah dipecahkan oleh jenis kartu
:::

---

## Bagaimana seri dipecahkan di poker? Urutan 3 langkah

**Seri dipecahkan dalam urutan tetap: bandingkan jenis tangan dulu, lalu kartu pembentuk tangan, lalu kicker dari tertinggi ke terendah — dan jika kelima kartu masih sama, pot dibagi.** Setiap showdown menjalankan tiga pemeriksaan yang sama:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Langkah | Bandingkan | Detail |
|:---:|---|---|
| **1** | Jenis tangan | Kategori lebih tinggi selalu menang (flush mengalahkan straight, dst.) |
| **2** | Kartu pembentuk tangan | Jenis sama? Pair / trips / kartu teratas yang lebih tinggi menang |
| **3** | Kicker, tertinggi dulu | Perbedaan pertama memenangkan pot |

</div>

Jika langkah 1 sudah menyelesaikannya, Anda tak pernah sampai ke langkah 2. Jika langkah 3 kehabisan kartu, kedua tangan identik dan ==g:pot dibagi== — bagaimana chip lalu dibagi (chip ganjil, chop tiga arah, side pot) adalah wilayah [aturan split pot](/id/blog/holdem-split-pot-rules). Langkah 2 dan 3 adalah tempat perdebatan terjadi, jadi ke sanalah kita menuju.

---

## Siapa yang menang jika dua pemain punya pair sama?

**First kicker tertinggi yang menang. One pair memakai tiga kicker, dibandingkan satu per satu dari atas — perbedaan pertama menentukan pot.**

Ambil tangan di foto atas:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Pemain A:** A♠ K♦  ·  **Pemain B:** A♥ 9♣
**Meja:** A♦ Q♠ 7♥ 3♣ 2♦

| Pemain | Lima Terbaik | Kicker | Hasil |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Menang** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Kalah |

</div>

Sepasang As yang sama, jadi kicker bertarung berurutan: ==g:K mengalahkan Q — selesai.== Angka 9 milik B masih *ada* di tangan sebagai kicker kedua, tapi perbandingan tak pernah sejauh itu.

Perhatikan kicker teratas B adalah Q **milik meja**, bukan angka 9 yang ia pegang. ==r:Sebuah kicker hanya dihitung jika benar-benar masuk ke lima kartu terbaik Anda== — kartu meja yang lebih tinggi menggeser kartu tertutup Anda ke bawah daftar. Itu juga alasan kartu kedua yang Anda mulai sama pentingnya dengan As itu sendiri: A-K dan A-9 sama-sama "sepasang As" di sini, dan hanya satu yang menang ([chart starting hands](/id/blog/holdem-starting-hands-chart)).

---

## Aturan pemecah seri poker untuk setiap tangan

**Setiap jenis tangan punya urutan perbandingannya sendiri — sebagian sampai ke kicker, sebagian lagi ditentukan sepenuhnya oleh kartu pembentuknya.** Lencana menunjukkan apakah kicker ikut menentukan:

:::tiebreak
Royal Flush|Selalu seri (pot dibagi)|-Tanpa kicker
Straight Flush|Hanya kartu tertinggi|-Tanpa kicker
Four of a Kind|Nilai quad → kartu ke-5|+Pakai kicker
Full House|Nilai trio → nilai pasangan|-Tanpa kicker
Flush|Bandingkan kelimanya, tinggi ke rendah|+Pakai kicker
Straight|Hanya kartu tertinggi|-Tanpa kicker
Three of a Kind|Nilai trio → 2 kicker|+Pakai kicker
Two Pair|Pasangan tinggi → pasangan rendah → kicker|+Pakai kicker
One Pair|Nilai pasangan → 3 kicker|+Pakai kicker
High Card|Bandingkan kelimanya, tinggi ke rendah|+Pakai kicker
:::

Tiga baris yang paling memicu perdebatan di meja:

- **Trips memakai dua kicker, yang teratas dulu.** Di meja A♣ A♥ 7♦ 5♣ 2♠, pemain dengan A♠ J♠ membentuk A-A-A-==g:J==-7 dan mengalahkan A-A-A-==r:10==-7 milik A♦ 10♦ — jack di atas ten, dan angka 7 bersama tak pernah dicek.
- **Full house tak punya kicker.** Nilai trio dibandingkan dulu, lalu pasangannya: K-K-K-A-A mengalahkan K-K-K-Q-Q pada pasangannya.
- **Flush membandingkan kelima kartu — ==r:tak pernah jenis kartu==.** Flush ber-As mengalahkan flush ber-K; nilai identik dibagi. Pertarungan lengkapnya (dan meja yang mengecoh orang) ada di [apakah flush mengalahkan straight](/id/blog/holdem-flush-vs-straight).

---

## Siapa yang menang jika kedua pemain punya two pair?

**Bandingkan pasangan lebih tinggi, lalu pasangan lebih rendah, lalu kicker tunggal — dalam urutan itu.** Two pair membawa tepat satu kicker, jadi setelah pasangannya sendiri hanya tersisa satu kartu untuk diperdebatkan.

Di meja **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ membentuk K♠ K♦ 9♣ 9♠ ==g:Q♦== dan K♥ J♥ membentuk K♥ K♦ 9♣ 9♠ ==r:J♥==. Sama-sama kings-and-nines, jadi kicker tunggal yang menentukan: ==g:queen di atas jack.==

Lalu ada jebakan yang menentukan uang sungguhan — ==r:**counterfeiting**==:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Anda:** 5♠ 4♠  ·  **Lawan:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — two pair Anda (fives dan fours) unggul atas sepasang king lawan
**Turn 9♠, river 9♥** — meja akhir 5♦ 4♥ K♣ 9♠ 9♥

| Pemain | Lima Terbaik | Tangan |
|--------|-----------|------|
| Anda | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Nines dan fives — fours Anda lenyap |
| Lawan | K♦ K♣ 9♠ 9♥ A♣ | **Kings dan nines — menang** |

</div>

Meja yang memasangkan angka 9 memberi *kedua* pemain pasangan kedua yang lebih baik — fours Anda ter-==r:counterfeit==, dan satu-satunya perbandingan tersisa adalah top pair: kings di atas nines. Tangan yang unggul di flop kalah pot tanpa satu pun pemain memperbaiki kartunya sendiri.

---

## Bisakah Anda punya straight yang lebih tinggi? (Di mana wheel berada)

**Bisa — straight diperingkat murni oleh kartu teratasnya, dan wheel ace-low adalah straight terendah dalam permainan.**

Di meja 4♦ 3♣ 2♠ K♦ Q♥, pemain dengan A♠ 5♠ membentuk wheel: 5-4-3-2-A. Pemain dengan 6♥ 5♥ membentuk 6-5-4-3-2. ==r:As main *rendah* dalam wheel==, jadi A-2-3-4-5 duduk di dasar tangga straight — ==g:straight six-high yang menang.== Dua straight dengan kartu teratas sama adalah identik, dan tangan identik dibagi.

Dua hal yang *tidak* bisa dilakukan wheel: As tak bisa berputar lewat tengah (Q-K-A-2-3 bukan apa-apa), dan tak bisa jadi tinggi dan rendah sekaligus. Flush mengikuti aturan paralel — kelima kartu dibandingkan dari atas, jenis kartu tak relevan — dengan detailnya di [flush vs straight](/id/blog/holdem-flush-vs-straight).

---

## Apakah kartu kelima penting di poker?

**Ya — kapan pun empat kartu pertama dua tangan identik, kartu kelima adalah seluruh pot.**

Meja **A♥ K♣ Q♦ 4♣ 2♥**, dan pertarungannya A♠ 8♠ melawan A♦ 7♦. Keduanya punya sepasang As. First kicker: K milik meja — seri. Second kicker: Q milik meja — seri. Third kicker: ==g:8 mengalahkan 7.== Kartu kelima tangan itu secara harfiah baru saja menentukan segala hal di atasnya.

Logika yang sama berlaku pada pot dengan quads di meja: semua orang berbagi empat kartu, jadi yang kelima adalah seluruh showdown. Dan berlaku pada seri high-card dan flush, di mana setiap kartu hingga yang terakhir dibandingkan. Kartu kelima baru berhenti penting saat meja mengungguli nilainya — yang merupakan kepingan puzzle terakhir.

---

## Saat kicker Anda tak main — dan pot dibagi

![Infografik: meja A-K-Q-J-10 adalah lima terbaik untuk semua orang, jadi tangan 9-7 tak bisa mengalahkannya dan pot dibagi](/images/holdem-tiebreak-best5.webp "Lima terbaik dari tujuh: saat meja sudah jadi tangan terbaik, kartu tertutup Anda gugur darinya")

**Jika kartu tertutup Anda tak bisa menembus lima terbaik milik meja itu sendiri, kartu itu tak main — dan saat itu berlaku untuk semua orang, pot dibagi.**

Ambil meja di atas: A♠ K♥ Q♣ J♦ 10♠, Broadway sudah lengkap. Kartu 9♥ 7♠ Anda *memang* membentuk straight — K-Q-J-10-9 — tapi **lebih rendah** dari straight ace-high yang tergeletak di felt, jadi lima terbaik Anda adalah meja itu sendiri. Begitu pula milik semua orang.

Versi yang lebih halus adalah saat tangan Anda main tapi kicker Anda tidak. Meja A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ melawan A♦ 2♦. Keduanya memasangkan As, dan kedua slot kicker terisi dari meja — A-A-K-Q-J untuk masing-masing pemain. Angka 3 dan 2 adalah beban mati; lima terbaik identik, ==g:chop.==

![Infografik: di meja A-K-Q-J-9, A-3 dan A-2 sama-sama main A-A-K-Q-J, jadi tangan identik membagi pot](/images/holdem-tiebreak-split.webp "Saat lima terbaik cocok nilai per nilai, pot dibagi — jenis kartu tak pernah memecah seri")

Mengenali runout ini sebelum taruhan river adalah keahlian tersendiri — itulah [membaca meja](/id/blog/holdem-reading-the-board). Dan apa yang terjadi pada chip begitu tangan seri — bagian sama rata, chip ganjil, chop tiga arah, side pot all-in — semuanya ada di [panduan aturan split pot](/id/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Lanjut baca]
/id/blog/holdem-kicker | Apa itu kicker di poker? | /images/holdem-kicker-hero.webp
/id/blog/holdem-split-pot-rules | Kapan pot dibagi? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Bagaimana seri dipecahkan di poker?**

A. Dalam urutan tetap: jenis tangan dulu, lalu kartu pembentuk tangan (pasangan, trips, atau kartu teratas yang lebih tinggi), lalu kicker dari tertinggi ke terendah. Jika kelima kartu sama nilainya, pot dibagi — jenis kartu tak pernah dipakai.

**Q. Siapa yang menang jika dua pemain punya pair sama?**

A. Pemain yang lima terbaiknya punya kicker lebih tinggi. One pair membawa tiga kicker, dibandingkan dari atas ke bawah — perbedaan pertama memenangkan pot. Jika ketiganya sama, hasilnya split.

**Q. Siapa yang menang jika kedua pemain punya two pair?**

A. Bandingkan pasangan lebih tinggi dulu, lalu pasangan lebih rendah, lalu kicker tunggal. Aces-and-threes mengalahkan kings-and-queens, karena pasangan teratas dicek sebelum yang lain.

**Q. Apakah kartu kelima penting di poker?**

A. Ya. Saat empat kartu pertama kedua tangan identik, kartu kelima menentukan seluruh pot — kicker ketiga sebuah pair, kartu terendah sebuah flush, kartu samping quads di meja. Baru berhenti penting saat kartu meja mengungguli nilai kartu tertutup Anda.

**Q. Bisakah As dipakai sebagai angka 1 di poker?**

A. Bisa, tapi hanya dalam straight A-2-3-4-5 (the "wheel"), di mana ia main sebagai kartu terendah — yang menjadikan wheel straight terendah dalam permainan. As tak bisa berputar lewat tengah: Q-K-A-2-3 bukan straight.

**Q. Bisakah Anda punya straight yang lebih tinggi dari pemain lain?**

A. Bisa — straight diperingkat murni oleh kartu teratasnya, jadi 6-5-4-3-2 mengalahkan wheel A-5, dan Broadway (A-K-Q-J-10) mengalahkan semuanya. Kartu teratas sama berarti straight identik dan pot dibagi.

**Q. Apakah jenis kartu pernah memecah seri di Texas Hold'em?**

A. Tidak. Tak ada peringkat jenis di Hold'em — jika dua tangan lima-kartu terbaik cocok nilai per nilai, pot dibagi tanpa memandang jenis.

**Q. Apa yang terjadi jika kedua pemain punya tangan persis sama?**

A. Pot dibagi rata — sebuah "chop". Bagaimana chip dibagi secara fisik, siapa yang dapat chip ganjil, dan bagaimana side pot diselesaikan dibahas di [aturan split pot](/id/blog/holdem-split-pot-rules).

---

## Poin-poin penting

1. Setiap seri menjalankan prosedur yang sama: ==**jenis tangan → kartu pembentuk → kicker → dibagi**== — tanpa pengecualian, tanpa jenis kartu.
2. Sebuah kicker hanya dihitung jika ia ==g:masuk lima terbaik Anda== — kartu meja bisa menggantikannya, dan meja dengan dua pasang bisa meng-counterfeit two pair Anda sepenuhnya.
3. Straight diperingkat oleh kartu teratasnya (wheel yang terendah), flush membandingkan kelimanya — dan saat tak ada yang memisahkan kedua tangan, pot di-chop.

Kunci urutan lengkapnya dengan [peringkat tangan lengkap](/id/blog/holdem-hand-rankings), pahami kartu samping itu sendiri di [apa itu kicker](/id/blog/holdem-kicker), dan lihat persis bagaimana pot seri dibagi di [panduan split pot](/id/blog/holdem-split-pot-rules).

---

## Artikel terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Apa itu kicker di poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kartu samping itu sendiri — tangan mana yang punya dan berapa banyak</div>
  </a>
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Peringkat Tangan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Peringkat tangan poker — terkuat ke terlemah</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Semua 10 tangan dengan peluang, contoh, dan teka-teki meja</div>
  </a>
  <a href="/id/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Duel Tangan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Apakah flush mengalahkan straight?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Matematika, spot meja, dan kasus seri untuk kebingungan #1</div>
  </a>
  <a href="/id/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kapan pot dibagi?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 situasi chop dan 3 hal yang keliru dikira menang pemain</div>
  </a>
</div>
`.trim(),
};
