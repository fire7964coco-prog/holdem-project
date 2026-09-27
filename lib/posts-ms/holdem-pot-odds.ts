import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Cara Kira Pot Odds dalam Poker — Kaedah 10 Saat",
  seoTitle: "Call Ini Betul-betul Untung? — Cara Kira Pot Odds & Formula",
  desc: "Berhenti call atas harapan. Cara kira pot odds dalam 10 saat — formula nisbah ke peratus, carta pot odds ikut saiz bet, pot odds vs equity dan implied odds.",
  tldr: "Untuk kira pot odds, bahagikan jumlah yang anda perlu call dengan jumlah pot selepas call anda. Call $50 ke dalam pot $150 = 50 ÷ 200 = 25% — jadi anda perlu sekurang-kurangnya 25% equity supaya call itu menguntungkan.",
  category: "odds",
  date: "2026-09-26",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 minit",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "Tangan seorang pemain menolak cip ke arah pot di tengah meja berkain hijau — saat keputusan pot odds dibuat",
  tags: ["pot odds", "cara kira pot odds", "how to calculate pot odds", "pot odds formula", "pot odds chart", "pot odds vs equity", "implied odds", "rule of 4 and 2"],
  content: `
Perkataan paling mahal dalam poker ialah "harapan". Sepanjang tahun pertama saya, saya call bet di turn hanya kerana flush draw saya *mungkin* menjadi di river, dan cip saya terus berdarah. Malam semuanya akhirnya masuk akal ialah satu call $50 ke dalam pot $150 — buat pertama kalinya saya membuat kiraan, sedar saya cuma perlu 25% untuk pulang modal, dan sejak itu saya tidak pernah melihat sesuatu call dengan cara yang sama lagi.

==Pot odds ialah satu-satunya kiraan yang membezakan call ikut perasaan dengan call bersebab.== Ia ambil lima minit untuk dipelajari dan beberapa sesi untuk menjadi automatik. Panduan ini memberi anda ==g:kaedah 10 saat==, helaian rujukan saiz bet yang boleh anda bayangkan di meja, dan satu perkara yang kebanyakan pemain salah faham: bagaimana pot odds, equity dan implied odds sebenarnya saling berkait.

Nombor di sebalik draw anda datang daripada [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — panduan ini pula cara anda menukar nombor-nombor itu menjadi call atau fold yang betul.

---

### Pot odds sepintas lalu

:::stripe
25% | Equity diperlukan menentang bet separuh pot
33% | Equity diperlukan menentang bet saiz pot
call ÷ (pot + call) | Seluruh formula
:::

---

## Apakah Pot Odds dalam Poker?

**Pot odds ialah harga yang ditawarkan kepada anda untuk terus bermain.** Ia membandingkan saiz pot dengan saiz bet yang anda perlu call — ganjaran berbanding risiko.

Katakan pot ialah $150 dan anda perlu call $50. Anda ditawarkan ==$150 untuk dimenangi dengan risiko $50== — anda "mendapat 3:1". Semakin besar pot berbanding call, semakin baik harga anda, dan semakin jarang anda perlu menang supaya call itu berbaloi.

Nombor "sekerap mana anda perlu menang" itulah intinya. Mendapat 3:1 bermakna call itu membayar dirinya sendiri jika anda menang hanya **25% daripada masa** atau lebih. Pot odds menukar soalan kabur "patutkah saya call?" menjadi sasaran yang jelas: *adakah saya menang cukup kerap untuk mengatasi harga ini?*

---

## Bagaimana Cara Kira Pot Odds? (Langkah demi Langkah)

> **Jawapan ringkas**
> Kira pot akhir dahulu, termasuk bet yang anda hadapi dan call anda sendiri, kemudian bahagikan call dengan jumlah itu. Hasilnya ialah peratus equity pulang modal. Pastikan masa pot itu konsisten: wang yang sudah termasuk dalam pot semasa tidak boleh ditambah kali kedua. Itulah seluruh formula pot odds.

:::steps
Jumlahkan pot akhir | Pot semasa + bet + call anda. Contoh: pot $100 + bet $50 + call $50 anda = $200
Bahagikan call anda dengan pot akhir itu | $50 ÷ $200 = 0.25
Itulah equity yang anda perlukan | Anda perlu menang sekurang-kurangnya 25% daripada masa untuk call dengan untung
Bandingkan dengan equity sebenar anda | Flush draw ≈ 35% untuk kena dengan dua kad lagi dan tiada bet lagi → 35% mengatasi 25% → ==g:call==
:::

Itu sahaja. **Equity diperlukan = call anda ÷ pot akhir.** Jika peluang sebenar anda menang lebih besar daripada nombor itu, call menghasilkan wang dalam jangka panjang — walaupun anda akan kalah tangan itu lebih kerap daripada menang.

> **Satu peraturan yang menghapuskan semua kekeliruan**
> Sentiasa masukkan call anda sendiri dalam pot akhir. "Mendapat 3:1" dan "perlu 25%" menggambarkan situasi yang *sama* — nisbah ialah harga, peratus ialah sasaran. Kebanyakan kesilapan pemula datang daripada mencampurkan dua cara itu; pilih peratus dan jangan toleh ke belakang lagi.

---

## Nisbah vs Peratus: Bagaimana Pot Odds Ditukar?

> **Jawapan ringkas**
> Nisbah pot odds membandingkan wang yang anda boleh menang dengan call yang anda pertaruhkan; peratus pula menyatakan sekerap mana risiko itu mesti berjaya. Pada 4:1, anda mempertaruhkan satu unit untuk menang empat, jadi anda mesti menang sekali dalam lima: 20%. Ganjaran lebih besar untuk call yang sama merendahkan peratus pulang modal.

Penukarannya satu langkah sahaja: nisbah **X:1** bermakna anda perlukan **1 ÷ (X + 1)** sebagai peratus.

| Anda mendapat… | Equity yang anda perlukan |
|:---|:---:|
| 1:1 | 50% |
| 2:1 | 33% |
| 2.5:1 | 28.6% |
| 3:1 | 25% |
| 4:1 | 20% |
| 5:1 | 16.7% |
| 6:1 | 14.3% |

Coraknya mudah difahami: semakin pot mengatasi call, semakin kecil hirisan pai yang anda perlukan untuk mewajarkan call itu.

---

## Berapa Banyak Equity Anda Perlu untuk Call?

> **Jawapan ringkas**
> Bet separuh pot memerlukan 25% equity untuk call; bet saiz pot memerlukan 33%, dan bet dua kali pot memerlukan 40%. Sasaran itu bergantung pada saiz bet berbanding pot, bukan jumlah wangnya. Kira sasaran itu dahulu, kemudian nilai tangan anda menentang range yang menawarkan harga tersebut.

![Tiga bar yang membahagikan pot akhir kepada pot, bet dan call anda — bet separuh pot perlukan 25% equity, bet saiz pot 33%, bet 2× pot 40%](/images/holdem-pot-odds-required-equity.webp "Equity yang diperlukan bergantung sepenuhnya pada saiz bet yang anda hadapi")

Hafal tujuh titik rujukan ini supaya anda boleh menilai harga call sebelum memutuskan sama ada tangan anda cukup kuat:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Lawan bet | Anda mendapat | Equity yang anda perlukan |
|:---|:---:|:---:|
| ¼ pot | 5:1 | 16.7% |
| ⅓ pot | 4:1 | 20% |
| ½ pot | 3:1 | 25% |
| ⅔ pot | 2.5:1 | 28.6% |
| ¾ pot | 2.3:1 | 30% |
| Saiz pot | 2:1 | 33% |
| 2× pot | 1.5:1 | 40% |

</div>

Malah **overbet 2× pot yang besar hanya meminta 40% equity**. Anda hampir tidak pernah perlu menjadi favourite (lebih berpeluang menang) untuk call dengan untung — salah baca yang biasa dan membuatkan orang fold call yang sepatutnya betul. Semakin besar bet, semakin banyak equity yang anda perlukan, tetapi ia naik lebih perlahan daripada sangkaan kebanyakan pemain.

---

## Carta Pot Odds: Draw Mana Menang Lawan Bet Mana

> **Jawapan ringkas**
> Sama ada sesuatu draw memenuhi harga bergantung pada outs bersihnya dan juga bilangan kad yang dibeli oleh call ini. Peluang dua kad flush draw jauh lebih tinggi daripada peluang satu kadnya. Gunakan lajur untuk keputusan sebenar, dan jangan anggap sekadar membentuk pair atau flush itu kemenangan yang terjamin.

[Kira **outs** anda](/ms/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") sebelum menggunakan carta ini. Baris enam outs overcard menganggap mana-mana pair menang; potong nilai kad pembentuk pair yang masih kalah kepada tangan yang berkemungkinan dipegang lawan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw anda | Outs | Peluang kena, 1 kad (turn → river) | Peluang kena, 2 kad (flop → river) |
|:---|:---:|:---:|:---:|
| Flush + open-ender | 15 | 32.6% | 54.1% |
| Flush draw | 9 | 19.6% | 35.0% |
| Open-ended straight | 8 | 17.4% | 31.5% |
| Dua overcard | 6 | 13.0% | 24.1% |
| Gutshot straight | 4 | 8.7% | 16.5% |

</div>

Bacalah bersama jadual saiz bet di atas. Menghadapi ==bet separuh pot (perlu 25%)==: dengan dua kad lagi, flush draw (35%) ialah call yang jelas — tetapi dengan *satu* kad sahaja dari flop (9 ÷ 47), draw yang sama hanya 19.1%, dan itu **tidak** memenuhi harga dengan sendirinya. Jurang itulah tempat implied odds masuk.

---

## Apa Beza Pot Odds, Equity dan Implied Odds?

> **Jawapan ringkas**
> Pot odds menetapkan harga, equity mengukur bahagian yang anda jangka dapat, dan implied odds menganggar wang tambahan yang dimenangi kemudian. Mulakan dengan dua yang pertama. Kira bayaran masa depan hanya jika masih ada cip untuk dimenangi dan lawan yang berkemungkinan membayar; melengkapkan tangan kedua terbaik pula boleh merugikan lebih banyak.

:::compare
Istilah | Maksudnya
Pot odds | Harga: call ÷ pot akhir = equity yang anda *perlukan*
Equity | Bahagian pot yang anda jangka miliki sekarang — tangan yang anda menang ditambah bahagian anda daripada seri
Implied odds | Cip *tambahan* yang anda jangka menang di street seterusnya jika anda kena
:::

**Pot odds vs [equity](/ms/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")** ialah keputusan teras: call apabila equity anda mengatasi pot odds. [**Implied odds**](/ms/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") ialah pemutus untuk draw yang hampir-hampir memenuhi harga. Jika flush draw anda perlukan 25% tetapi hanya ada 19.6% pada kad river, anda masih boleh call *jika* anda akan mendapat cukup bet tambahan apabila kena untuk menampung bezanya. Itulah sebab anda boleh call bet di flop dengan draw secara menguntungkan, dan sebab stack yang dalam menjadikan draw lebih bernilai.

Cermin gelapnya ialah **reverse implied odds** — cip yang anda akan *hilang* apabila anda kena tetapi masih kalah tangan itu (flush anda lengkap, tetapi board berpasangan dan seseorang ada full house). Draw kedua terbaik diam-diam menghakis wang anda, dan sebab itulah [nut flush draw jauh lebih bernilai daripada flush draw kecil](/ms/blog/holdem-starting-hands-chart).

---

## Cukupkah Draw Anda untuk Harga Ini? Rule of 4 and 2 Semasa Call

> **Jawapan ringkas**
> Gunakan Rule of 4 and 2 untuk menganggar sama ada sesuatu draw hampir dengan harga call. Empat kali outs anda menganggar dua kad, manakala dua kali outs menganggar satu. Sebelum memilih pendarab, tanya sama ada call sekarang membawa anda ke river tanpa bayaran lagi; keputusan yang hampir wajar disemak dengan jadual tepat.

- **Di flop, dengan dua kad lagi:** darab outs anda dengan **4**.
- **Di turn, dengan satu kad lagi:** darab outs anda dengan **2**.

Flush draw ialah 9 outs. Di flop: 9 × 4 = **36%** (nilai sebenar 35.0% — tepat). Di turn: 9 × 2 = **18%** (nilai sebenar 19.6% — cukup dekat untuk membuat keputusan).

:::tip[Versi ×4 secara senyap menganggap anda akan melihat *kedua-dua* kad yang tinggal tanpa bet lagi — dan itu hanya terjamin apabila tiada lagi pertaruhan boleh berlaku (anda all-in, atau anda sudah call all-in). Jika masih ada pertaruhan yang akan datang, bersandarlah pada nombor ×2 (satu kad) untuk street di depan anda, dan biarkan implied odds mewajarkan selebihnya.]:::

Terbitan penuh untuk setiap draw dan made hand ada dalam [carta kebarangkalian](/ms/blog/holdem-probability). Di sini, jalan pintas itu sudah memadai.

---

## Apakah Kesilapan Pot Odds yang Selalu Dibuat Pemain Baharu?

> **Jawapan ringkas**
> Kesilapan pot odds yang mahal ialah menggunakan pot akhir yang salah, mengira kad yang masih kalah, dan membeli satu kad dengan anggaran dua kad. Wang masa depan juga boleh jadi khayalan: stack yang dalam tidak menjamin bayaran. Semak harga, outs bersih dan pertaruhan yang masih tinggal secara berasingan sebelum call sesuatu draw.

Saya pernah buat setiap satu kesilapan ini sebelum semuanya membuat saya muflis. Berhati-hatilah:

:::card
🧮 | Lupa memasukkan call | Equity diperlukan ialah call ÷ pot *akhir* — kira cip anda sendiri yang masuk, atau anda akan terlebih anggar equity yang diperlukan dan fold call yang sepatutnya anda buat
🃏 | Mengira outs yang tercemar | Out flush yang juga membuat board berpasangan boleh memberi seseorang full house. Potong nilai outs "kotor" sebelum anda percaya nombor itu
🚀 | Salah guna Rule of 4 | ×4 hanya terpakai apabila anda akan melihat kedua-dua kad secara percuma (all-in). Menghadapi bet di turn, gunakan ×2 — guna ×4 akan memujuk anda membuat call yang rugi
💸 | Abaikan implied & reverse implied odds | Stack yang dalam memberi ganjaran kepada tangan draw; draw bukan nut yang kena lalu bertembung dengan tangan yang lebih besar ialah perangkap, bukan rezeki
🎯 | Call atas harapan | "Mungkin menjadi" bukan alasan. Jika equity anda tidak mengatasi pot odds (ditambah implied odds), itu fold

:::

### Satu tangan sebenar, dari awal hingga akhir

Saya memegang ==b:A♥ K♥== pada flop ==Q♥ 7♥ 2♣== — nut flush draw, 9 outs. Pot $100, lawan bet $50. Pot odds saya: saya mendapat 3:1, jadi saya perlu **25%**. Dengan dua kad lagi saya pada ~35%, dan walaupun hanya mengira kad seterusnya (19.1%) implied odds saya sangat besar — jika heart jatuh, saya ambil seluruh stack tangan top pair. ==g:Call yang mudah.==

Turn ialah 3♠ — kad kosong. Pot kini $200 dan lawan jam $200 — bet saiz pot, jadi sekarang saya hanya mendapat 2:1 dan perlu **33%**. Tetapi dengan **satu kad lagi, flush saya hanya 19.6%** (saya kira 9 kad heart sahaja — menentang jam saiz pot, berpasangan dengan as atau king saya selalunya masih kalah, jadi overcard itu bukan outs bersih). Harga langsung kata fold; implied odds saya kini sifar kerana lawan sudah all-in dan tidak boleh bayar saya lagi. ==r:Fold yang betul== — dan tepat situasi di mana "harapan" dahulunya menghabiskan satu stack saya.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-probability | Carta Odds & Kebarangkalian Poker | /images/holdem-probability-hero.webp
/ms/blog/holdem-starting-hands-chart | Starting Hand Mana yang Patut Anda Main | /images/holdem-starting-hands-chart-hero.webp
:::

## Soalan Lazim

**Q. Bagaimana cara kira pot odds dengan cepat?**

A. Bahagikan jumlah yang anda perlu call dengan jumlah pot *selepas* call anda. Call $50 ke dalam pot $150 ialah 50 ÷ 200 = 25% — itulah equity yang anda perlukan. Jika peluang anda menang mengatasinya, call.

**Q. Adakah call anda sendiri dikira dalam pot odds?**

A. Ya. Formula equity diperlukan menggunakan pot *akhir*, yang termasuk call anda sendiri. Call $50 ke dalam pot $150 bermakna pot akhir $200, jadi 50 ÷ 200 = 25%. Tertinggal call anda ialah kesilapan pemula yang paling biasa.

**Q. Bagaimana kira saiz pot dalam poker?**

A. Pot ialah setiap cip yang sudah berada di tengah ditambah sebarang bet yang dibuat di street semasa. Sebelum mengira pot odds, tambah pot permulaan dan bet lawan anda — kemudian masukkan call anda sendiri dalam pot *akhir*. Contoh: pot $100, bet $50 dan call $50 anda menjadikan pot akhir $200.

**Q. Apakah pot odds yang bagus dalam poker?**

A. Semakin tinggi semakin baik — anda tentu suka "mendapat 5:1" (hanya perlu 16.7%). Tetapi "bagus" bergantung pada tangan anda: mendapat 2:1 (perlu 33%) sesuai dengan flush draw hanya apabila anda memang akan melihat kedua-dua kad (all-in, atau tiada bet lagi — 35%); ia tidak memenuhi harga jika call itu membeli satu kad sahaja (19.1% dari flop, 19.6% dari turn); dan ia sangat teruk dengan gutshot. Sentiasa bandingkan harga dengan equity anda.

**Q. Bagaimana tukar pot odds daripada nisbah ke peratus?**

A. Nisbah X:1 menjadi 1 ÷ (X + 1) sebagai peratus. Jadi 3:1 = 1 ÷ 4 = 25%; 4:1 = 1 ÷ 5 = 20%. Peratus itulah yang anda bandingkan dengan peluang anda menang.

**Q. Apa beza pot odds dengan implied odds?**

A. Pot odds hanya mengira cip dalam pot sekarang. Implied odds menambah cip *tambahan* yang anda jangka menang di street seterusnya jika tangan anda lengkap. Implied odds membolehkan anda call sesetengah draw dengan untung walaupun pot odds semata-mata kata fold — selagi stack cukup dalam untuk membayar anda.

**Q. Berapakah pot odds yang diberi oleh pot-sized bet?**

A. Bet saiz pot memberi anda 2:1, jadi anda perlu 33% equity untuk call. Bet separuh pot memberi 3:1 (perlu 25%); overbet 2× pot memberi 1.5:1 (perlu 40%). Bet lebih besar menuntut lebih banyak equity, tetapi kenaikannya kecil: overbet 2× pot meminta 40%, overbet 3× lebih kurang 43%, overbet 5× lebih kurang 45% — dan tiada bet, sebesar mana pun, pernah meminta lebih daripada 50%.

**Q. Berapa banyak daripada pot patut anda bet?**

A. Saiz bet ialah sisi lain pot odds — bet anda menetapkan harga yang lawan dapat. Bet separuh pot memberi mereka 3:1 (mereka perlu 25%), bet saiz pot memberi 2:1 (mereka perlu 33%), dan overbet menuntut lebih lagi. Bet lebih besar pada board yang banyak draw untuk menafikan call yang menguntungkan kepada tangan draw; kecilkan saiz apabila anda mahu tangan yang lebih lemah call untuk value. Saiz biasa antara ⅓ pot hingga satu pot penuh bergantung pada board dan matlamat anda.

**Q. Apakah Rule of 4 and 2?**

A. Jalan pintas untuk menukar outs bersih menjadi peluang anda melengkapkan draw: darab outs dengan 4 di flop (dua kad lagi) atau dengan 2 di turn (satu kad lagi). Sembilan outs flush ≈ 36% di flop, 18% di turn. Guna ×4 hanya apabila anda akan melihat kedua-dua kad tanpa bet lagi.

**Q. Berapa banyak equity anda perlu untuk call satu bet?**

A. Tepat pot odds anda dalam bentuk peratus: call ÷ pot akhir. Menentang bet separuh pot anda perlu 25%; menentang bet saiz pot, 33%. Untuk draw, kira outs bersih anda, tukar dengan Rule of 4 and 2 untuk kad yang benar-benar dibeli oleh call ini, dan call apabila peluang itu melepasi sasaran — atau apabila implied odds menampung jurangnya.

**Q. Adakah equity anda patut lebih tinggi atau lebih rendah daripada pot odds?**

A. Lebih tinggi. Pot odds anda memberi equity yang anda *perlukan* untuk call (call ÷ pot akhir); equity anda pula bahagian pot yang anda jangka miliki. Anda call apabila equity anda *lebih tinggi* daripada nombor yang diperlukan itu dan fold apabila ia lebih rendah. Jika bet separuh pot perlukan 25% dan flush draw anda ada 35% (dengan dua kad lagi — anda akan melihat turn dan river tanpa bet lagi), maka 35% > 25% → call yang menguntungkan.

---

## 3 Perkara yang Wajib Anda Ingat

1. **Formula:** equity diperlukan = call anda ÷ pot akhir (dengan call anda dimasukkan). Separuh pot = 25%, saiz pot = 33%.
2. **Perbandingan:** call apabila equity anda mengatasi pot odds. Untuk draw, outs × 4 atau × 2 menganggarnya — kira outs bersih sahaja, dan guna ×2 apabila masih ada bet yang akan datang.
3. **Pemutus:** implied odds menyelamatkan draw yang hampir-hampir memenuhi harga — tetapi hanya apabila masih ada cip di belakang untuk dimenangi dan lawan yang berkemungkinan membayarnya; draw ke nuts menjadikan bayaran itu lebih selamat.

Buat ini beberapa ratus kali dan ia berhenti menjadi matematik lalu bertukar menjadi naluri. Anda akan fold call yang tiada harapan, membuat call yang menguntungkan, dan berhenti membayar "cukai harapan". Dari sini, asah nombor mentah di sebalik setiap draw dalam [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability), atau pastikan anda masuk pot dengan tangan yang berbaloi untuk dikejar menggunakan [carta starting hand ikut posisi](/ms/blog/holdem-starting-hands-chart).

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Odds & Kebarangkalian Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Setiap tangan, flop dan draw — nombor di sebalik harga</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hand</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Starting Hand Ikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Masuk pot dengan tangan yang berbaloi dikejar</div>
  </a>
  <a href="/ms/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Membaca Board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Membaca Board dalam Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kira outs anda dengan mengesan setiap draw</div>
  </a>
  <a href="/ms/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cash vs Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tournament vs Cash Game</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa implied odds lebih besar dalam cash game</div>
  </a>
</div>
`.trim(),
};
