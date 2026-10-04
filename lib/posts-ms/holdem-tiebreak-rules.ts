import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Bagaimana Seri Dipecahkan dalam Poker — Tangan Sama, Siapa Menang?",
  seoTitle: "Pair Sama, Siapa Menang Pot? — Peraturan Tie Breaker Poker",
  desc: "Pair sama di showdown, tetapi kalah? Peraturan tie breaker poker: siapa menang apabila pair atau two pair sama, bila kad ke-5 dikira dan bila pot dibahagi.",
  tldr: "Seri dipecahkan mengikut urutan tetap: kedudukan tangan dahulu, kemudian kad yang membentuk tangan itu, kemudian kicker dari tertinggi ke terendah. Pair sama — kicker pertama yang lebih tinggi menang; lima kad yang serupa — pot dibahagi. Suit tidak pernah menentukan seri.",
  category: "hand-rankings",
  date: "2026-09-27",
  updated: "2026-10-04",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 minit",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Showdown poker: A♠ K♦ lawan A♥ 9♣ dengan board A♦ Q♠ 7♥ 3♣ 2♦ — sepasang As yang sama, kicker menentukan pemenang",
  tags: ["poker tie breaker", "poker tie rules", "poker tie", "do suits matter in poker", "highest straight in poker", "two pair tie breaker", "flush tie breaker", "pemecah seri poker"],
  content: `
Anda membuka sepasang As. Lawan anda juga. Pengedar mengira kad sampingan sejenak — kemudian menolak keseluruhan pot kepada *mereka*. ==r:Pair yang sama. Bagaimana anda boleh kalah?==

Saya sudah melihat detik yang sama itu menghentikan permainan lebih kerap daripada peraturan lain: seseorang separuh berdiri, pengedar mengetuk felt, dan seluruh meja menunggu penjelasan. Inilah penjelasannya. Setiap seri dalam Texas Hold'em diselesaikan dengan satu prosedur tetap yang berada satu tahap di bawah [susunan kad poker](/ms/blog/holdem-hand-rankings) — susunan itu memberitahu anda *tangan mana* yang menang; peraturan pemecah seri memberitahu anda *pemain mana* yang menang apabila kedua-dua tangan sama kedudukannya.

Kebanyakan kerja dilakukan oleh satu kad: ==**kicker**==. Definisi penuhnya — tangan mana yang ada kicker dan berapa banyak — ada dalam [apa itu kicker dalam poker](/ms/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). Panduan ini ialah *prosedurnya*: bagaimana tepatnya seri dipecahkan bagi pair yang sama, two pair, trips, straight dan flush — dan kad kelima yang dilupakan semua orang.

---

### Ringkasan pantas

:::stripe
3 | Langkah yang menyelesaikan setiap seri dalam Hold'em
1 | Tempat kicker dalam tangan two pair
0 | Seri yang pernah dipecahkan oleh suit
:::

---

## Bagaimana Seri Dipecahkan dalam Poker? Urutan 3 Langkah

**Seri dipecahkan mengikut urutan tetap: bandingkan kedudukan tangan dahulu, kemudian kad yang membentuk tangan itu, kemudian kicker dari tertinggi ke terendah — dan jika kelima-lima kad masih sama, pot dibahagi.** Setiap showdown menjalankan tiga semakan yang sama:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Langkah | Bandingkan | Butiran |
|:---:|---|---|
| **1** | Kedudukan tangan | Kategori lebih tinggi sentiasa menang (flush menang ke atas straight, dan seterusnya) |
| **2** | Kad yang membentuk tangan | Kedudukan sama? Pair / trips / kad teratas yang lebih tinggi menang |
| **3** | Kicker, tertinggi dahulu | Perbezaan pertama memenangi pot |

</div>

Jika langkah 1 sudah menyelesaikannya, anda tidak akan sampai ke langkah 2. Jika langkah 3 kehabisan kad, tangan itu serupa dan ==g:pot dibahagi== — bagaimana cip kemudiannya dibahagikan (odd chip, chop tiga hala, side pot) dibincangkan dalam [peraturan split pot](/ms/blog/holdem-split-pot-rules). Langkah 2 dan 3 ialah tempat pertikaian berlaku, jadi ke situlah kita pergi.

---

## Siapa Menang Jika Dua Pemain Ada Pair yang Sama?

**Kicker pertama yang lebih tinggi menang. One pair menggunakan tiga kicker, dibandingkan satu demi satu dari atas — perbezaan pertama menentukan pot.**

Ambil tangan dalam gambar di atas:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Pemain A:** A♠ K♦  ·  **Pemain B:** A♥ 9♣
**Board:** A♦ Q♠ 7♥ 3♣ 2♦

| Pemain | Lima Kad Terbaik | Kicker | Keputusan |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Menang** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Kalah |

</div>

Sepasang As yang sama, jadi kicker bersemuka mengikut urutan: ==g:K mengalahkan Q — selesai.== Kad 9 milik B masih *berada* dalam tangan sebagai kicker kedua, tetapi perbandingan tidak pernah sampai sejauh itu.

Perhatikan kicker teratas B ialah Q **di board**, bukan 9 yang dipegangnya. ==r:Kicker hanya dikira jika ia benar-benar masuk ke dalam lima kad terbaik anda== — kad board yang lebih tinggi menolak hole card (dua kad peribadi) anda ke bawah senarai. Itulah juga sebabnya kad kedua yang anda mulakan sama penting dengan As itu sendiri: A-K dan A-9 kedua-duanya "sepasang As" di sini, dan hanya satu yang menang ([carta tangan permulaan](/ms/blog/holdem-starting-hands-chart)).

---

## Peraturan Tie Breaker Poker untuk Setiap Tangan

**Setiap kedudukan tangan ada urutan perbandingannya sendiri — sesetengahnya pergi ke kicker, yang lain diselesaikan sepenuhnya oleh kad yang membentuknya.** Lencana menunjukkan sama ada kicker terlibat:

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

Tiga baris yang paling kerap mencetuskan pertikaian di meja:

- **Trips menggunakan dua kicker, yang teratas dahulu.** Di board A♣ A♥ 7♦ 5♣ 2♠, pemain dengan A♠ J♠ membentuk A-A-A-==g:J==-7 dan mengalahkan A-A-A-==r:10==-7 milik A♦ 10♦ — J mengatasi 10, dan 7 yang dikongsi langsung tidak disemak.
- **Full house tiada kicker.** Nilai trips dahulu, kemudian pasangannya: K-K-K-A-A mengalahkan K-K-K-Q-Q pada pasangan.
- **Flush membandingkan kelima-lima kad — ==r:tidak pernah suit==.** Flush ber-As tinggi mengalahkan flush ber-K tinggi; nilai yang serupa dibahagi. Pertembungan penuhnya (dan board yang mengelirukan orang) ada dalam [adakah flush menang ke atas straight](/ms/blog/holdem-flush-vs-straight).

---

## Siapa Menang Jika Kedua-dua Pemain Ada Two Pair?

**Bandingkan pasangan yang lebih tinggi, kemudian pasangan yang lebih rendah, kemudian satu-satunya kicker — mengikut urutan itu.** Two pair membawa tepat satu kicker, jadi selepas pasangan itu sendiri, hanya tinggal satu kad untuk dipertikaikan.

Di board **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ membentuk K♠ K♦ 9♣ 9♠ ==g:Q♦== dan K♥ J♥ membentuk K♥ K♦ 9♣ 9♠ ==r:J♥==. K-dan-9 yang sama, jadi satu-satunya kicker menyelesaikannya: ==g:Q mengatasi J.==

Kemudian ada perangkap yang menentukan wang sebenar — ==r:**counterfeit**== (nilai pasangan anda dipadamkan oleh board):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Anda:** 5♠ 4♠  ·  **Lawan:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — two pair anda (5 dan 4) mendahului sepasang K mereka
**Turn 9♠, river 9♥** — board akhir 5♦ 4♥ K♣ 9♠ 9♥

| Pemain | Lima Kad Terbaik | Tangan |
|--------|-----------|------|
| Anda | ==r:9♠ 9♥== 5♠ 5♦ K♣ | 9 dan 5 — pasangan 4 anda hilang |
| Lawan | K♦ K♣ 9♠ 9♥ A♣ | **K dan 9 — menang** |

</div>

Board yang berpasangan 9 memberikan pasangan kedua yang lebih baik kepada *kedua-dua* pemain — pasangan 4 anda telah ==r:di-counterfeit==, dan satu-satunya perbandingan yang tinggal ialah pasangan teratas: K mengatasi 9. Tangan yang mendahului di flop kalah pot tanpa mana-mana pemain memperbaiki kad mereka sendiri.

---

## Straight Mana Paling Tinggi? (Dan di Mana Kedudukan Wheel)

**Straight paling tinggi ialah Broadway (A-K-Q-J-10), dan wheel dengan As rendah ialah straight paling rendah dalam permainan — straight disusun semata-mata mengikut kad teratasnya.**

Di board 4♦ 3♣ 2♠ K♦ Q♥, pemain dengan A♠ 5♠ membentuk wheel: 5-4-3-2-A. Pemain dengan 6♥ 5♥ membentuk 6-5-4-3-2. ==r:As dimainkan *rendah* dalam wheel==, jadi A-2-3-4-5 berada di anak tangga paling bawah straight — ==g:straight 6 tinggi yang menang.== Dua straight dengan kad teratas yang sama adalah serupa, dan tangan yang serupa dibahagi.

Di hujung tangga yang satu lagi, ==**straight paling tinggi dalam poker ialah Broadway — A-K-Q-J-10**==. Tiada straight yang mengalahkannya (walaupun flush atau apa-apa di atasnya masih boleh), dan wheel berada di bawah sekali, jadi setiap straight dalam permainan berada di antara kedua-duanya berdasarkan kad teratasnya sahaja.

Dua perkara yang *tidak* dilakukan oleh wheel: As tidak boleh berpusing melalui tengah (Q-K-A-2-3 bukan apa-apa), dan ia tidak boleh tinggi dan rendah serentak. Flush mengikut peraturan selari — kelima-lima kad dibandingkan dari atas, suit tidak relevan — dengan butirannya dalam [flush lawan straight](/ms/blog/holdem-flush-vs-straight).

---

## Adakah Kad Ke-5 Penting dalam Poker?

**Ya — setiap kali empat kad pertama dua tangan adalah serupa, kad kelima ialah keseluruhan pot.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, dan A♠ 8♠ menentang A♦ 7♦. Kedua-duanya ada sepasang As. Kicker pertama: K di board — seri. Kicker kedua: Q di board — seri. Kicker ketiga: ==g:8 mengalahkan 7.== Kad kelima tangan itu secara harfiah telah menentukan segala-galanya di atasnya.

Logik yang sama berlaku dalam pot quads di board: semua orang berkongsi empat kad, jadi kad kelima ialah keseluruhan showdown. Ia juga berlaku dalam seri high card dan flush, di mana setiap kad hingga yang terakhir dibandingkan. Kad kelima hanya berhenti penting apabila board mengatasinya — dan itulah kepingan terakhir teka-teki ini.

---

## Adakah Suit Penting dalam Poker?

**Tidak — bukan untuk menentukan siapa menang. Suit hanya ada satu tugas dalam Texas Hold'em: lima kad suit yang sama membentuk flush. Selain itu suit tiada kedudukan, jadi dua tangan yang sepadan nilai demi nilai sentiasa membahagi pot, dan tiada kad yang mengatasi kad lain kerana suitnya.**

Soalan ini terus timbul kerana susunan suit memang wujud dalam poker — cuma tidak pernah untuk menyusun tangan dalam permainan ini. Stud dan razz menggunakannya untuk menentukan siapa yang membuat bring-in dan siapa yang mengambil cip yang tidak boleh dibahagi. Hold'em tidak menggunakannya untuk mana-mana satu pun.

Bukti paling jelas ialah satu cip yang *tidak boleh* dibahagi. Peraturan kejohanan WSOP 2026 menyatakan ==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*== (Peraturan 73) — maksudnya, dalam permainan berbutang dengan 2 atau lebih tangan high atau low, odd chip diberikan kepada tempat duduk pertama di sebelah kiri butang. Walaupun pot secara fizikal tidak boleh dibahagi sama rata, peraturan itu merujuk kepada **tempat duduk**, bukan suit — dan kaedah berasaskan suit di separuh belakang peraturan yang sama ditulis untuk stud dan razz sahaja.

Satu lagi perkara yang patut diketahui: dalam Hold'em dua flush sentiasa daripada suit yang *sama*, kerana kelima-lima kad komuniti dikongsi dan board tidak boleh memegang tiga heart dan tiga spade serentak. Jadi "spade saya mengalahkan heart anda" bukan peraturan yang menyebabkan anda kalah — ia tangan yang mustahil diagihkan.

---

## Bilakah Kicker Tidak Dikira — dan Pot Dibahagi?

![Infografik: board A-K-Q-J-10 ialah lima kad terbaik bagi semua orang, jadi tangan 9-7 tidak dapat mengalahkannya dan pot dibahagi](/images/holdem-tiebreak-best5.webp "Lima terbaik daripada tujuh: apabila board sudah menjadi tangan terbaik, hole card anda tercicir daripadanya")

**Jika hole card anda tidak dapat mengatasi lima kad terbaik board itu sendiri, ia tidak dimainkan — dan apabila itu benar bagi semua orang, pot dibahagi.**

Ambil board di atas: A♠ K♥ Q♣ J♦ 10♠, Broadway sudah lengkap. 9♥ 7♠ anda *memang* membentuk straight — K-Q-J-10-9 — tetapi ia **lebih rendah** daripada straight ber-As tinggi yang terletak di atas felt, jadi lima kad terbaik anda ialah board itu sendiri. Begitu juga bagi semua orang lain.

Versi yang lebih halus ialah apabila tangan anda dimainkan tetapi kicker anda tidak. Board A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ menentang A♦ 2♦. Kedua-duanya berpasangan As, dan ketiga-tiga tempat kicker diisi dari board — A-A-K-Q-J bagi setiap pemain. Kad 3 dan 2 sekadar beban mati; lima kad terbaik yang serupa, ==g:chop.==

![Infografik: di board A-K-Q-J-9, A-3 dan A-2 kedua-duanya memainkan A-A-K-Q-J, jadi tangan yang serupa membahagi pot](/images/holdem-tiebreak-split.webp "Apabila lima kad terbaik sepadan nilai demi nilai, pot dibahagi — suit tidak pernah memecahkan seri")

Mengesan runout begini sebelum bet di river ialah kemahiran tersendiri — itulah [cara membaca board](/ms/blog/holdem-reading-the-board). Dan apa yang berlaku kepada cip apabila tangan seri — bahagian sama rata, odd chip, chop tiga hala, side pot all-in — semuanya ada dalam [panduan peraturan split pot](/ms/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-kicker | Apa Itu Kicker dalam Poker? | /images/holdem-kicker-hero.webp
/ms/blog/holdem-split-pot-rules | Bilakah Pot Dibahagi? | /images/holdem-split-pot-hero.webp
:::

## Soalan Lazim

**Q. Bagaimana seri dipecahkan dalam poker?**

A. Tiga semakan mengikut urutan — kedudukan tangan, kemudian kad yang membentuk tangan, kemudian kicker dari atas ke bawah — dan perbezaan pertama menamatkannya. Sama penting ialah apa yang tidak pernah masuk ke dalam perbandingan: suit, siapa yang bet terakhir, siapa yang duduk lebih dekat dengan butang, dan berapa banyak cip yang dimasukkan oleh setiap pemain. Jika lima kad sepadan nilai demi nilai, pengedar membahagi pot tidak kira apa yang berlaku semasa pertaruhan.

**Q. Siapa menang jika dua pemain ada pair yang sama?**

A. Kicker yang lebih tinggi — tetapi semak dahulu kad mana yang benar-benar masuk ke dalam lima kad terbaik. Di A-Q-7-3-2 dengan sepasang As, pemain yang memegang A-9 memainkan A-A-Q-9-7: Q di board melompat ke depan 9 miliknya, jadi 9 itu hanya kicker *kedua*. Menentang A-K, pot sudah ditentukan pada tempat pertama, dan 9 itu tidak pernah dibandingkan langsung. Ada tiga tempat kicker; kebanyakan pot tamat pada yang pertama.

**Q. Siapa menang jika kedua-dua pemain ada two pair?**

A. Pasangan lebih tinggi dahulu, kemudian pasangan lebih rendah, kemudian satu kicker — jadi As-dan-3 mengalahkan K-dan-Q walaupun pasangan keduanya jauh lebih kecil. Kes yang memerangkap orang ialah board berpasangan dua seperti K-K-9-9-5 tanpa tiga kad satu suit, jadi tiada sesiapa boleh membentuk flush: melainkan seseorang memegang K, 9, pocket 5, atau pocket pair di atas 9, setiap pemain ada two pair yang sama, jadi tangan itu menyusut kepada satu kicker dan hole card terbaik di meja yang mengambilnya — dan jika tiada hole card sesiapa pun yang mengatasi kad 5 di board, semua orang playing the board dan pot dibahagi. Two pair membawa tepat satu kicker, tidak pernah dua.

**Q. Siapa menang jika dua pemain ada three of a kind yang sama?**

A. Three of a kind membawa dua kicker, dibandingkan dari yang tertinggi — jadi jika kedua-dua pemain membentuk trips yang sama, kad sampingan yang lebih tinggi menang. Dengan trip 9, 9-9-9-A-K mengalahkan 9-9-9-A-Q kerana kicker kedua (K) mengatasi Q. Trips dan kedua-dua kicker yang sepadan bermakna pot dibahagi. (Set daripada pocket pair hampir tidak pernah seri, kerana hanya seorang pemain boleh memegang pasangan tepat itu.)

**Q. Adakah kad ke-5 penting dalam poker?**

A. Ya — dan itulah cara paling biasa pemain kalah pot yang disangkanya sudah dimenangi. Situasi klasik yang meletakkan seluruh pot pada kad terakhir: kicker ketiga bagi pair, satu-satunya kicker bagi two pair, kad terendah dalam flush, dan kad sampingan di sebelah quads yang berada di board. Ia hanya berhenti penting apabila kad board itu sendiri mengatasi kad sampingan yang anda pegang — kadangkala kerana seluruh board dimainkan dan hole card anda tercicir sepenuhnya, kadangkala kerana satu hole card dimainkan dan yang satu lagi tidak pernah dikira: A♠ 3♠ menentang A♦ 2♦ di A♥ K♣ Q♦ J♠ 9♥ ialah chop, kedua-duanya memainkan A-A-K-Q-J.

**Q. Bolehkah As digunakan sebagai 1 dalam poker?**

A. Boleh, tetapi hanya dalam straight A-2-3-4-5 ("wheel"), di mana ia dimainkan sebagai kad paling rendah — yang menjadikan wheel straight paling rendah dalam permainan. As tidak boleh berpusing melalui tengah: Q-K-A-2-3 bukan straight.

**Q. Bolehkah anda ada straight yang lebih tinggi daripada pemain lain?**

A. Boleh, dan secara praktikal ia berlaku apabila sebahagian besar straight sudah berada di board. Ambil board 5♦ 6♣ 7♠ 8♥ 2♦: pemain dengan 9♣ 4♠ membentuk 9-8-7-6-5, manakala pemain dengan 4♥ 3♦ membentuk 8-7-6-5-4 daripada empat kad yang sama. Kedua-duanya "dapat straight"; hanya kad teratas yang pernah dikira, jadi 9 yang mengambilnya. Kad teratas yang sama bermakna straight yang sama dan chop.

**Q. Siapa menang jika dua pemain ada straight yang sama?**

A. Straight dengan kad teratas lebih tinggi menang — Q-J-10-9-8 mengalahkan J-10-9-8-7, kerana straight disusun hanya mengikut kad tertingginya dan tiada kicker. Jika kedua-dua straight ada kad teratas yang sama, ia serupa, jadi pot dibahagi. Ini paling kerap berlaku apabila straight kebanyakannya berada di board dan kedua-dua pemain mengisi hujung yang sama.

**Q. Siapa menang jika kedua-dua pemain ada flush?**

A. Bandingkan flush kad demi kad dari atas ke bawah: flush ber-As tinggi mengalahkan flush ber-K tinggi, dan jika kad teratas sama anda beralih ke kad seterusnya, dan begitulah hingga kelima-lima kad. Suit tidak pernah memecahkan seri, jadi jika kelima-lima nilai serupa, pot dibahagi. (Dalam Hold'em dua flush sentiasa daripada suit yang sama, kerana pemain berkongsi board.)

**Q. Siapa menang jika dua pemain ada full house yang sama?**

A. Bandingkan three of a kind dahulu — trips yang lebih tinggi menang, jadi K-K-K-2-2 mengalahkan Q-Q-Q-A-A walaupun As nampak lebih besar. Pasangannya hanya dibandingkan jika trips itu serupa. Full house tiada kicker, jadi trips dan pasangan yang sepadan bermakna split pot.

**Q. Apa berlaku jika kedua-dua pemain ada straight flush?**

A. Straight flush yang lebih tinggi menang, ditentukan oleh kad teratasnya — straight flush Q tinggi mengalahkan straight flush 9 tinggi. Royal flush sebenarnya straight flush ber-As tinggi, jadi ia mengalahkan setiap straight flush lain. Kad teratas yang serupa bermakna tangan yang serupa dan split pot.

**Q. Adakah suit pernah memecahkan seri dalam Texas Hold'em?**

A. Tidak — suit tidak pernah menentukan pot. Di meja Hold'em, suit hanya muncul dalam cabutan kad untuk menentukan tempat duduk. Yang paling dikenali ialah cabutan butang: dalam cash game, dan di bawah kebanyakan peraturan rumah bilik kad, setiap pemain mencabut satu kad untuk menentukan di mana butang pengedar bermula, dan jika dua cabutan seri pada nilai, susunan suit yang menyelesaikannya. (Kejohanan WSOP tidak membuat cabutan pembukaan: ==Peraturan Kejohanan 85== memulakan butang pada stack pertama di sebelah kanan pengedar dan hanya mengadakan cabutan untuk butang apabila tinggal tiga, dua dan satu meja.) Pengarah kejohanan juga menempatkan semula pemain dari meja yang dibubarkan dengan mengedarkan satu kad kepada setiap pemain, dan contoh TDA memberikan tempat duduk pertama kepada ==kad tertinggi mengikut suit==. Walau apa pun, itu memilih *tempat duduk*, bukan tangan. Antara peraturan tangan dalam buku peraturan WSOP, satu-satunya susunan suit milik stud dan razz. Jika dua lima kad terbaik sepadan nilai demi nilai, pot dibahagi tanpa mengira suit.

**Q. Apa berlaku jika kedua-dua pemain ada tangan yang betul-betul sama?**

A. Pot dibahagi sama rata — "chop". Bagaimana cip dibahagikan secara fizikal, siapa mendapat odd chip, dan bagaimana side pot diselesaikan diterangkan dalam [peraturan split pot](/ms/blog/holdem-split-pot-rules).

**Q. Adakah seri (split pot) mungkin berlaku dalam poker?**

A. Ya, tetapi ia tidak biasa. Seri sebenar hanya berlaku apabila lima kad terbaik dua atau lebih pemain sepadan nilainya dengan tepat — paling kerap apabila board itu sendiri ialah tangan terbaik ("playing the board"), atau straight atau flush yang dikongsi yang tidak dapat diperbaiki oleh hole card sesiapa. Kemudian pot dibahagi sama rata. Kicker wujud tepat untuk memecahkan kebanyakan bakal seri sebelum ia menjadi split.

---

## 3 Perkara untuk Diingati

1. Setiap seri menjalankan prosedur yang sama: ==**kedudukan tangan → kad yang membentuk tangan → kicker → dibahagi**== — tiada pengecualian, tiada suit.
2. Kicker hanya dikira jika ia ==g:masuk ke dalam lima kad terbaik anda== — kad board boleh menggantikannya, dan board berpasangan dua boleh meng-counterfeit two pair anda sepenuhnya.
3. Straight disusun mengikut kad teratasnya (wheel yang paling rendah), flush membandingkan kelima-lima kad — dan apabila tiada apa yang memisahkan tangan, pot di-chop.

Kukuhkan urutannya dengan [susunan penuh kad poker](/ms/blog/holdem-hand-rankings), fahami kad sampingan itu sendiri dalam [apa itu kicker](/ms/blog/holdem-kicker), dan lihat bagaimana tepatnya pot yang seri dibahagikan dalam [panduan split pot](/ms/blog/holdem-split-pot-rules).

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Apa Itu Kicker dalam Poker?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kad sampingan itu sendiri — tangan mana yang ada dan berapa banyak</div>
  </a>
  <a href="/ms/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Susunan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Susunan Kad Poker — Tertinggi hingga Terendah</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kesemua 10 tangan dengan kebarangkalian, contoh dan teka-teki board</div>
  </a>
  <a href="/ms/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pertembungan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Adakah Flush Menang ke atas Straight?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Matematik, situasi board dan kes seri bagi kekeliruan #1</div>
  </a>
  <a href="/ms/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bilakah Pot Dibahagi?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 situasi chop dan 3 perkara yang disangka pemain menang</div>
  </a>
</div>
`.trim(),
};
