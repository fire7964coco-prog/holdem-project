import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Carta Odds & Kebarangkalian Poker — Odds Sebenar Setiap Tangan Hold'em",
  seoTitle: "Sekerap Mana Anda Hit? — Odds & Kebarangkalian Poker Hold'em",
  desc: "Rasa tak pernah hit? Odds sebenar setiap tangan, flop dan draw Texas Hold'em — royal flush odds, Rule of 2 and 4 dan pot odds dalam satu carta kebarangkalian.",
  tldr: "Menjelang river, anda membentuk one pair dalam 43.8% tangan, two pair 23.5%, flush 3.0% dan full house 2.6%. Royal flush pula muncul hanya sekali dalam kira-kira 31,000 tangan — itu asas 7 kad Texas Hold'em, bukan 5 kad.",
  category: "odds",
  date: "2026-09-26",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "13 minit",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Pandangan atas meja Texas Hold'em yang sedang aktif dengan lima kad komuniti, timbunan cip bertaburan dan pemain di tengah-tengah tangan",
  tags: ["poker odds", "kebarangkalian poker", "poker probability", "royal flush odds", "odds of flopping a set", "rule of 2 and 4", "pot odds", "poker outs chart"],
  content: `
Kali pertama saya buat set mining dengan sepasang lima dalam permainan live dan dapat set di flop, lelaki di sebelah saya merungut, "apa *odds*-nya tu?" — dan saya memang tahu jawapannya: lebih kurang ==1 dalam 8.5==. Satu nombor itulah sebab saya call dari mula.

Poker bukan permainan meneka. Setiap call, fold dan shove sebenarnya ==soalan kebarangkalian yang menyamar==, dan pemain yang menang ialah mereka yang sudah menjadikan "apa odds-nya?" satu refleks. Inilah ==**carta odds dan kebarangkalian poker** yang menyeluruh== untuk Texas Hold'em — setiap tangan, setiap flop, setiap draw — berserta ==g:satu jalan pintas mental== yang membolehkan anda membuat kiraan di meja dalam dua saat.

---

### Nombor yang paling penting

:::stripe
43.8% | One pair menjelang river
23.5% | Two pair
3.0% | Membentuk flush
2.6% | Membentuk full house
1 dalam 30,940 | Royal flush
:::

---

## Carta Odds Tangan Poker: Kebarangkalian Setiap Tangan

> **Jawapan ringkas**
> Kebarangkalian sesuatu tangan poker bergantung pada berapa banyak kad yang anda boleh guna. Dalam Hold'em, lima kad terbaik daripada tujuh menghasilkan one pair dalam 43.8% tangan dan two pair 23.5%. Kekerapan menjelang river ini berbeza daripada agihan lima kad rawak; pilih lajur yang betul sebelum membandingkan betapa jarangnya dua tangan.

- **Odds 5 kad** = peluang satu tangan lima kad rawak *ialah* tangan itu (nombor klasik buku teks).
- **Hold'em (menjelang river)** = peluang anda *akhirnya* memegang tangan itu selepas melihat ketujuh-tujuh kad (dua hole card anda + lima kad komuniti). Inilah nombor yang benar-benar penting di meja.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan | Odds 5 kad (diagihkan) | Odds Hold'em (menjelang river) |
|:---|:---:|:---:|
| Royal Flush | 1 dalam 649,740 (0.000154%) | 1 dalam 30,940 (0.0032%) |
| Straight Flush | 1 dalam 72,193 (0.00139%) | 1 dalam 3,590 (0.0279%) |
| Four of a Kind | 1 dalam 4,165 (0.0240%) | 1 dalam 595 (0.168%) |
| Full House | 1 dalam 694 (0.144%) | 1 dalam 39 (2.60%) |
| Flush | 1 dalam 509 (0.197%) | 1 dalam 33 (3.03%) |
| Straight | 1 dalam 255 (0.392%) | 1 dalam 22 (4.62%) |
| Three of a Kind | 1 dalam 47 (2.11%) | 1 dalam 21 (4.83%) |
| Two Pair | 1 dalam 21 (4.75%) | 1 dalam 4.3 (23.5%) |
| One Pair | 1 dalam 2.4 (42.3%) | 1 dalam 2.3 (43.8%) |
| High Card | 1 dalam 2.0 (50.1%) | 1 dalam 5.7 (17.4%) |

</div>

> **Statistik yang mengejutkan semua orang**
> High card ialah tangan lima kad yang *paling* biasa (50.1%), tetapi dalam Hold'em ia jatuh ke **17.4%** — ketiga paling biasa, di belakang one pair (43.8%) dan two pair (23.5%). Kenapa? Tujuh kad memberi begitu banyak peluang untuk berpasangan sehingga "tiada pair menjelang river" menjadi pengecualian. Lebih banyak kad, lebih banyak sambungan.

Susunan tangan mengikut **lajur lima kad**: semakin jarang sesuatu tangan dalam lima kad rawak, semakin tinggi kedudukannya — tanpa sebarang lompang, dari high card hingga royal flush. Dengan tujuh kad, logik itu kekal di semua tempat kecuali high card, yang lebih jarang daripada one pair (43.8%) tetapi masih di tempat terakhir. Itulah logik di sebalik [susunan kad poker](/ms/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): kebarangkalian *itulah* susunannya — diukur atas lima kad.

:::quiz:::

---

## Berapakah Odds Anda Dapat Setiap Starting Hand?

> **Jawapan ringkas**
> Pocket aces datang lebih kurang sekali setiap 221 agihan, tetapi mana-mana pocket pair muncul lebih kurang sekali setiap 17. Bezanya ialah bilangan kombinasi: ada 1,326 kemungkinan agihan dua kad, dan satu pair tertentu hanya enam daripadanya. Mana-mana dua kad satu jenis datang dalam 23.5% tangan, manakala A-K satu jenis secara khusus hanya 0.30%.

![Pocket aces — as spade dan as heart sejurus selepas diagihkan di atas kain hijau di sebelah cip poker](/images/holdem-probability-starting-hands.webp "Pocket aces: starting hand terbaik, diagihkan hanya sekali dalam 221 tangan")

Sebelum flop, ada tepat **1,326 kemungkinan starting hand dua kad**. Beginilah kekerapan tangan yang paling kerap ditanya.

| Starting hand | Odds | Sekerap mana |
|:---|:---:|:---|
| Satu pocket pair tertentu (cth. A-A) | 1 dalam 221 (0.45%) | Sekali setiap ~221 tangan |
| **Mana-mana** pocket pair | 1 dalam 17 (5.9%) | Lebih kurang dua kali sejam dalam permainan live |
| A-K satu jenis (khusus) | 1 dalam 332 (0.30%) | Jarang |
| A-K (satu jenis *atau* offsuit) | 1 dalam 83 (1.2%) | — |
| Mana-mana dua kad satu jenis | 1 dalam 4.3 (23.5%) | Hampir sekali dalam setiap empat tangan |

Jadi lain kali ada orang kata "saya tak pernah dapat aces", mereka lebih kurang betul — anda akan diagihkan pair *tertentu* seperti aces hanya lebih kurang ==sekali setiap 221 tangan==. Tetapi **mana-mana** pocket pair datang setiap 17 tangan, dan sebab itulah set mining ialah strategi sebenar, bukan angan-angan. Pair dan tangan satu jenis mana yang berbaloi dimainkan dari setiap posisi diterangkan dalam [carta starting hand ikut posisi](/ms/blog/holdem-starting-hands-chart).

---

## Berapakah Odds untuk Flop Setiap Tangan?

> **Jawapan ringkas**
> Dengan pocket pair, anda flop set atau lebih baik dalam 11.8% tangan. Dengan dua kad satu jenis, flush yang sudah jadi hanya 0.84%, manakala flush draw 10.9%. Ini odds bersyarat: mulakan dengan hole card yang ditunjukkan dalam jadual, bukan kekerapan tangan itu merentas semua agihan rawak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Anda flop… | Memegang | Odds | Menentang |
|:---|:---|:---:|:---:|
| Set (atau lebih baik) | Pocket pair | 11.8% | ~7.5:1 |
| Flush | Dua kad satu jenis | 0.84% | ~118:1 |
| Flush draw | Dua kad satu jenis | 10.9% | ~8:1 |
| Straight | Suited connector (cth. 8-7) | 1.3% | ~76:1 |
| Two pair | Dua kad tidak berpasangan | 2.0% | ~49:1 |
| Full house | Pocket pair | 0.98% | ~101:1 |
| Quads | Pocket pair | 0.245% | ~407:1 |

</div>

Jadi dengan dua kad yang tidak berpasangan, anda flop two pair hanya 2.0% daripada masa — lebih kurang 49:1 menentang anda.

Untuk set mining, ==7.5:1 ialah bayaran pulang modal secara teori, bukan peraturan stack yang mencukupi==: ia menganggap setiap kali kena anda menang dan dibayar. Dalam praktik, garis panduan biasa effective stack 15–20× memberi ruang untuk value yang terlepas dan set yang kalah; itu pun heuristik, bukan call automatik. Itulah jambatan ke [pot odds](#pot-odds) di bawah. Untuk terbitan penuh setiap baris di sini — termasuk peraturan stack set mining dan pecahan flush flop terus vs draw vs lengkap — lihat kupasan mendalam tentang [drawing odds dan odds flop setiap tangan](/ms/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Berapa Kerap Flush Draw atau Straight Draw Anda Hit Menjelang River?

> **Jawapan ringkas**
> Flush draw sembilan outs lengkap lebih kurang 35% daripada masa merentas turn dan river, berbanding 19.6% di river sahaja selepas turn terlepas. Straight draw lapan outs sedikit kurang kemungkinannya. Ini kebarangkalian untuk melengkapkan draw, bukan jaminan menang: potong dahulu kad yang menaikkan tangan anda tetapi masih meninggalkan lawan di depan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Flop → river (2 kad) | Turn → river (1 kad) |
|:---|:---:|:---:|:---:|
| Flush + open-ended (combo) | 15 | 54.1% | 32.6% |
| Flush + gutshot | 12 | 45.0% | 26.1% |
| Flush draw | 9 | 35.0% | 19.6% |
| Open-ended straight | 8 | 31.5% | 17.4% |
| Dua overcard | 6 | 24.1% | 13.0% |
| Gutshot (inside) straight | 4 | 16.5% | 8.7% |
| Pair → set | 2 | 8.4% | 4.3% |
| Set → full house atau quads | 7 (flop) / 10 (turn) | 33.4% | 21.7% |

</div>

Baris enam outs overcard menganggap berpasangan dengan mana-mana nilai itu akan menang. Menentang two pair, set atau draw yang lebih kuat, sebahagian atau semua kad pembentuk pair itu mungkin outs kotor ("dirty outs") — potong nilainya dan jangan anggap enam itu outs menang yang terjamin. Baris set turut mengira kad keempat nilai anda: full house sahaja lebih kurang 29.1% dari flop dan 19.6% di turn.

Situasi klasik: anda flop **flush draw** (sembilan outs). Anda akan lengkapkannya ==35% daripada masa menjelang river== — lebih baik daripada satu dalam tiga. **Open-ended straight draw** (lapan outs) kena 31.5%. Perhatikan dua lajur itu: sebaik sahaja turn tidak membantu, tinggal satu kad lagi dan bukan dua, jadi odds anda lebih kurang separuh — 35% menjadi 19.6% untuk flush draw — dan itulah sebabnya mengejar draw jadi makin mahal dari street ke street.

---

## Bagaimana Cara Kira Poker Odds? Kira Outs dan Rule of 2 and 4

> **Jawapan ringkas**
> Rule of 2 and 4 menganggar peratus sesuatu draw lengkap: guna dua kali ganda outs untuk satu kad yang tinggal dan empat kali ganda outs untuk turn dan river bersama. Anggaran dua kad hanya boleh menilai call di flop jika anda tidak perlu bayar lagi untuk melihat kedua-dua kad. Ia jalan pintas, bukan equity yang tepat.

:::steps
Kira outs anda | Kad yang belum kelihatan yang melengkapkan tangan anda (flush draw = 9)
Di flop, jika anda akan melihat kedua-dua kad tanpa bayar lagi | Darab outs × 4 → anggaran % anda kena menjelang river
Di turn (1 kad lagi) | Darab outs × 2 → anggaran % anda kena di river
:::

**Contoh kiraan.** Selepas flop anda ada empat kad ke arah flush. Itu ==9 outs== (13 kad jenis anda − 4 yang anda nampak). Di flop: 9 × 4 = **36%** — angka sebenar 35.0%, jadi anda tepat. Di turn jika terlepas: 9 × 2 = **18%** (sebenar: 19.6%).

:::tip[Anggaran ×4 sudah sedikit tinggi pada 7 outs; jurangnya makin penting dengan draw yang lebih besar. Dengan draw raksasa 15 outs, "×4" kata 60% tetapi nombor sebenar 54% — turunkan beberapa mata untuk draw besar.]:::

Itulah jalan pintasnya: outs bersih → pendarab untuk kad yang anda akan lihat → anggaran draw untuk digunakan bersama [equity](/ms/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") anda. Selebihnya cuma tahu apa nak buat dengan nombor itu. Satu kemahiran yang dianggap oleh peraturan ini sudah anda kuasai ialah kiraan itu sendiri — untuk combo draw, outs yang bertindih dan outs "kotor" yang tidak patut dikira, lihat panduan penuh [cara kira outs dalam poker](/ms/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Bilakah Pot Odds Suruh Anda Call atau Fold?

> **Jawapan ringkas**
> Pot odds menukar sesuatu call menjadi sasaran pulang modal: bahagikan call dengan pot selepas call itu ditambah. Bandingkan harga itu dengan peluang anda menang atas kad yang benar-benar dibeli oleh call tersebut. Angka flush dua kad tidak boleh mewajarkan bayaran untuk turn sahaja apabila satu lagi bet mungkin menyusul; bayaran masa depan perlukan anggaran berasingan.

![Infografik pot odds — pot $100 dan call $25, jadi 25 ÷ 125 bermakna anda perlu 20% equity](/images/holdem-probability-pot-odds.webp "Call $25 ke dalam pot $100: 25 ÷ 125 = 20% equity diperlukan untuk pulang modal")

**Contoh kiraan.** Pot ialah $100. Lawan anda bet $50, menjadikannya $150. Anda perlu call $50 untuk memenangi $150 itu.

:::steps
Pot selepas bet | $100 + $50 = $150
Call anda | $50 untuk menang $150 (pot akhir $200)
Pot odds | 50 ÷ 200 = 25% — anda perlu sekurang-kurangnya 25% equity
Equity anda | Flush draw ≈ 35% menjelang river — nombor Rule of 4, yang menganggap anda melihat ==kedua-dua== kad
Keputusan | Dengan dua kad lagi: 35% > 25% → ==g:call== yang jelas menguntungkan
:::

Di sinilah semua nombor itu membuahkan hasil — tetapi **padankan nombor dengan street yang anda bayar**. Apabila kedua-dua kad akan keluar (anda all-in, atau turn di-check), **35%** anda mengatasi harga **25%** dan call itu menang wang dalam jangka panjang walaupun anda akan kalah tangan itu lebih kerap daripada menang. Apabila lawan akan bet lagi di turn, call ini hanya membeli kad turn — dari flop itu ==9 ÷ 47 = 19.1%==, *di bawah* harga — dan draw itu kemudian perlukan [implied odds](/ms/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp"), iaitu wang yang anda menang di street selepas anda kena, untuk menampung jurang itu. Menggunakan nombor ×4 untuk keputusan satu kad ialah cara paling biasa pemula menilai terlalu tinggi sesuatu draw. Untuk kaedah penuh dan helaian rujukan saiz bet, lihat [cara kira pot odds](/ms/blog/holdem-pot-odds).

---

## Berapa Jarangnya Royal Flush? (Dan Straight Flush)

> **Jawapan ringkas**
> Royal flush muncul lebih kurang sekali dalam 30,940 tangan Hold'em tujuh kad rawak, jauh lebih kerap berbanding agihan lima kad. Straight flush yang bukan royal lebih kurang 1 dalam 3,590 menjelang river — kurang jarang, tetapi tetap luar biasa. Kedua-dua angka ini tidak menggambarkan peluang anda daripada sesuatu draw tertentu: sebaik hole card dan flop diketahui, kiraannya bersyarat pada kad-kad itu.

![Infografik royal flush heart — A♥ K♥ di tangan melengkapkan A-K-Q-J-10 heart di board 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Royal flush heart: tangan paling jarang dalam poker, lebih kurang 1 dalam 30,940 menjelang river")

- **Royal flush:** sebagai tangan lima kad yang diagihkan, ==1 dalam 649,740==. Bermain Hold'em hingga river, ia bertambah baik kepada lebih kurang 1 dalam 30,940 kerana anda memilih lima kad terbaik daripada tujuh. Walau apa pun, kebanyakan pemain menunggu *bertahun-tahun* antara satu royal dengan yang lain.
- **Straight flush:** lebih kurang 1 dalam 72,193 sebagai tangan lima kad (lebih kurang 1 dalam 3,590 menjelang river dalam Hold'em). Bagi kebanyakan pemain, masih pemandangan setahun sekali.

Kenapa begitu jarang? Royal flush ialah tepat **satu susunan kad tertentu dalam satu jenis tertentu** — empat cara untuk membentuknya dalam seluruh dek berbanding 1,302,540 cara untuk membentuk high card biasa. Kejarangan itulah sebab ia berada di puncak susunan tangan.

:::note
Mitos biasa: "royal flush mengalahkan semua, jadi ia boleh *seri*." Pot memang boleh dibahagi, tetapi bukan seperti yang biasa diterangkan. Dua royal dalam jenis *berbeza* memerlukan sepuluh kad tertentu, sedangkan dua pemain hanya ada sembilan untuk digunakan — dua hole card setiap seorang ditambah lima di board — jadi ia mustahil. Satu-satunya cara kedua-dua pemain memegang royal ialah apabila board itu sendiri royal: semua orang bermain board, dan pot dibahagi. Dalam praktik, anda hampir pasti tidak akan melihatnya.
:::

---

## Berapa Kerap Cooler, Quads dan Bad Beat Berlaku?

> **Jawapan ringkas**
> Odds long-shot poker memerlukan syarat permulaan. Flop quads dengan pocket pair lebih kurang satu dalam 408; diagihkan aces ialah satu dalam 221 sebelum anda melihat sebarang kad. Peristiwa ini menjelaskan keputusan yang jarang berlaku, tetapi satu kekalahan yang jarang sahaja tidak menunjukkan sama ada keputusan sebelumnya betul.

| Long shot | Odds |
|:---|:---:|
| Diagihkan pocket aces | 1 dalam 221 |
| Flop quads dengan pocket pair | 1 dalam 408 |
| Flop straight flush (suited connector 54s–JTs) | ~1 dalam 4,900 |
| Membentuk royal flush menjelang river | 1 dalam 30,940 |

**Set over set** — anda flop set dan kalah kepada set yang lebih besar — ialah cooler paling kejam. Tiada satu nombor yang bersih kerana ia bergantung pada berapa ramai pemain memegang pair, tetapi titik rujukannya begini: *anda* flop set hanya 11.8% daripada masa, dan lawan yang melakukan perkara sama pada board yang sama cukup jarang sehingga kebanyakan pemain ingat setiap satunya. Apabila ia berlaku, kekalahan itu sahaja tidak membuktikan call itu satu kesilapan — atau bahawa ia betul; nilailah berdasarkan harga dan kedalaman stack yang anda ada ketika itu, bukan keputusan showdown. Jika anda mahu lihat dengan tepat bagaimana showdown seperti itu diadili, [peraturan kicker dan tie-breaker](/ms/blog/holdem-tiebreak-rules) merangkumi setiap kes pinggir.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-hand-rankings | Susunan Kad Poker, Tertinggi hingga Terendah | /images/holdem-hand-rankings-hero.webp
/ms/blog/holdem-starting-hands-chart | Starting Hand Mana yang Patut Anda Main | /images/holdem-starting-hands-chart-hero.webp
:::

## Soalan Lazim

**Q. Berapakah odds mendapat royal flush dalam Texas Hold'em?**

A. Lebih kurang 1 dalam 30,940 menjelang river apabila anda bermain satu tangan Hold'em hingga habis (menggunakan lima kad terbaik daripada tujuh). Sebagai tangan lima kad yang terus diagihkan, ia 1 dalam 649,740. Tiada tangan yang mengalahkannya — dan walau apa pun, kebanyakan pemain melalui bertahun-tahun tanpa satu pun.

**Q. Berapakah odds mendapat straight flush?**

A. Kira-kira 1 dalam 72,193 sebagai tangan lima kad, atau lebih kurang 1 dalam 3,590 menjelang river dalam Hold'em. Ia tangan kedua paling jarang, hanya dikalahkan oleh royal flush.

**Q. Berapakah odds four of a kind (atau quad aces)?**

A. Four of a kind terbentuk lebih kurang 1 dalam 595 kali menjelang river dalam Hold'em (0.168%), atau 1 dalam 4,165 sebagai tangan lima kad yang diagihkan. Quads *tertentu* seperti quad aces jauh lebih panjang odds-nya — kira-kira 1 dalam 7,700 menjelang river. Laluan paling biasa (lebih kurang 57% daripada masa) ialah satu as di tangan anda dan tiga lagi di board; memegang pocket pair dan mendapat kedua-dua as yang tinggal lebih jarang, dan keempat-empatnya jatuh di board lebih jarang lagi.

**Q. Berapa jarangnya flush, straight atau full house?**

A. Menjelang river dalam Hold'em, anda akan membentuk flush lebih kurang 3.0% daripada masa (1 dalam 33), straight 4.6% (1 dalam 22) dan full house 2.6% (1 dalam 39). Jadi full house sebenarnya lebih jarang daripada flush, dan flush lebih jarang daripada straight — tepat mengikut susunan tangan.

**Q. Berapakah odds hit flush menjelang river?**

A. Jika anda flop flush draw (sembilan outs), anda akan melengkapkannya lebih kurang 35% daripada masa menjelang river — lebih baik daripada satu dalam tiga. Dengan satu kad sahaja (turn ke river), ia jatuh kepada kira-kira 19.6%.

**Q. Berapakah odds untuk flop set?**

A. Lebih kurang 11.8%, atau kira-kira 1 dalam 8.5, apabila anda memegang pocket pair. Odds setara 7.5:1 menggambarkan terlepas berbanding kena, bukan kedalaman stack yang disyorkan. Call set mining juga perlukan bayaran masa depan yang realistik; garis panduan praktikal 15–20× memberi ruang untuk set yang tidak mendapat aksi atau yang kalah.

**Q. Berapakah odds untuk flop royal flush?**

A. Terlalu kecil. Walaupun anda sudah memegang dua daripada lima kadnya satu jenis — katakan A♥ K♥ — flop membawa tepat Q♥ J♥ 10♥ hanya lebih kurang sekali dalam 19,600 flop. Daripada starting hand rawak ia jauh lebih jarang lagi, dan sebab itulah hampir setiap royal flush yang terbentuk dilengkapkan di turn atau river, bukan di flop.

**Q. Berapakah odds dapat pocket aces?**

A. 1 dalam 221 (0.45%) untuk aces secara khusus. Namun mana-mana pocket pair datang jauh lebih kerap — lebih kurang 1 dalam 17 tangan (5.9%).

**Q. Apakah Rule of 2 and 4 dalam poker?**

A. Rule of 2 and 4 (juga dipanggil "4-2 rule") menganggar odds draw: darab outs anda dengan 4 di flop untuk turn dan river bersama, atau dengan 2 di turn untuk river sahaja. Sembilan outs memberi 36% atas dua kad dengan ×4, berbanding 35.0% yang tepat; ×2 memberi 18% untuk kad river, berbanding 19.6%. Semak jadual tepat apabila harganya hampir, dan simpan angka dua kad untuk situasi melihat kedua-dua kad tanpa bet lagi.

**Q. Bagaimana cara kira pot odds?**

A. Bahagikan jumlah yang anda perlu call dengan jumlah pot selepas call anda: call $50 ke dalam pot $150 ialah 50 ÷ 200 = 25%, iaitu equity yang anda perlukan. Halaman ini membekalkan separuh lagi perbandingan itu — sekerap mana draw anda benar-benar menjadi. Bahagian harga diterangkan dalam [panduan pot odds — nisbah, jalan pintas saiz bet dan kesilapan yang mahal](/ms/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. Berapakah odds set over set?**

A. Tiada satu nombor tetap — ia bergantung pada berapa ramai lawan memegang pocket pair — tetapi ia jarang. Anda flop set hanya 11.8% daripada masa pada mulanya, jadi dua pemain sama-sama flop set pada board yang sama ialah "cooler" klasik yang menghabiskan stack.

**Q. Apakah tangan menang yang paling biasa dalam poker?**

A. One pair, diikuti two pair. Kerana setiap pemain berkongsi lima kad komuniti, kebanyakan pot Texas Hold'em ditentukan oleh satu pair dan kicker-nya — flush, straight dan full house menang jauh kurang kerap daripada jangkaan pemula. Kekerapan penuh setiap keputusan ada dalam carta di atas.

**Q. Berapa kerap tangan terbaik menang dalam poker?**

A. Kurang kerap daripada yang anda sangka sebelum river. Malah pocket aces — starting hand terbaik — hanya menang lebih kurang 85% daripada masa secara heads-up, dan jauh kurang menentang meja penuh. Menjelang river, lima kad terbaik menang secara takrifan; kejutan berlaku lebih awal, apabila made hand dipintas oleh draw yang masih hidup.

**Q. Berapa kerap anda hit flop dalam poker?**

A. Dengan dua hole card yang tidak berpasangan, anda akan mendapat pair dengan sekurang-kurangnya satu daripadanya di flop lebih kurang 32% daripada masa — jadi anda langsung terlepas kira-kira dua daripada tiga flop. Sebab itulah posisi dan keagresifan sangat penting: mana-mana seorang lawan terlepas flop lebih kurang dua kali dalam tiga, dan pemain yang sanggup bet kerap mengambil pot itu.

**Q. Berapakah odds anda pegang the nuts?**

A. Tiada satu nombor — the nuts (tangan terbaik yang mungkin pada board tertentu) berubah dengan setiap board. Pada board kering yang tidak berpasangan, the nuts mungkin top set; pada board yang bersambung ia mungkin straight atau flush. Kemahirannya bukan menghafal angka odds, tetapi membaca tangan mana *yang* menjadi the nuts dan menilai sejauh mana lawan berkemungkinan memegangnya.

---

## 3 Nombor yang Wajib Anda Ingat

1. **Flop set: ~12% (1 dalam 8.5).** Kadar kena ini memulakan kiraan set mining; kedalaman stack dan bayaran yang berkemungkinan menentukan sama ada call itu berbaloi.
2. **Flush draw menjelang river: 35%.** Sembilan outs, Rule of 4 → 9 × 4 = 36%.
3. **Pot odds mengatasi gerak hati.** Padankan kebarangkalian dengan kad yang dibeli oleh call ini, kemudian bandingkan harga dengan peluang anda menang — melengkapkan draw tidak selalu memadai.

Poker memberi ganjaran kepada pemain yang sudah menjadikan nombor-nombor ini automatik. Hafal carta ini, latih Rule of 2 and 4, dan mula bertanya "apa odds-nya?" *sebelum* anda bertindak, bukan selepas. Seterusnya, gunakan matematik ini dengan mempelajari [starting hand mana yang patut dimainkan dari setiap posisi](/ms/blog/holdem-starting-hands-chart), atau ulang kaji [kenapa flush mengalahkan straight](/ms/blog/holdem-flush-vs-straight) supaya anda sentiasa tahu nilai outs anda.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Susunan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Susunan Kad Poker, Tertinggi hingga Terendah</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Susunan yang terhasil daripada odds ini — setiap tangan disusun</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hand</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Starting Hand Ikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Yang mana daripada 1,326 tangan itu patut dimainkan</div>
  </a>
  <a href="/ms/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pertembungan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Adakah Flush Mengalahkan Straight?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa tangan yang lebih jarang sentiasa menang</div>
  </a>
  <a href="/ms/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Membaca Board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Membaca Board dalam Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kira outs anda dengan melihat setiap draw</div>
  </a>
  <a href="/ms/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagaimana Posisi Mengubah Segalanya</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bila odds mewajarkan call — dan bila posisi yang mewajarkannya</div>
  </a>
</div>
`.trim(),
};
