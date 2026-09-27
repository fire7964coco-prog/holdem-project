import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Drawing Odds dalam Poker — Odds Flop dan Hit Setiap Tangan",
  seoTitle: "Betul Ke Anda Akan Flop Set? — Poker Drawing Odds & Flush Draw",
  desc: "Berbaloi ke chase draw itu? Odds sebenar flop set, flush draw, quads, gutshot dan open-ended — dengan matematik set mining yang laman odds lain tak sebut.",
  tldr: "Anda flop set dengan pocket pair dalam 11.8% tangan (odds 7.5:1 menentang anda), flop flush dengan dua kad satu jenis hanya 0.84%, dan melengkapkan flush draw dari flop menjelang river dalam 35% kes. Setiap nombor di bawah dikira terus daripada dek, bukan diagak.",
  category: "odds",
  date: "2026-09-26",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 minit",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Pocket pair kecil di sebelah timbunan cip di atas kain hijau ketika flop diagihkan, saat call set mining membuahkan hasil atau terlepas",
  tags: ["drawing odds", "odds of flopping a set", "set mining poker", "flush draw odds", "gutshot", "open ended straight draw", "odds of pocket aces", "poker flop odds"],
  content: `
Tangan yang membuat saya menghafal semua ini: saya call satu raise dengan pocket fives, flop set, mengambil seluruh stack seorang pemain yang memegang aces, dan kawan saya bertanya bagaimana saya "tahu" untuk call. Saya tidak *tahu* — saya tahu nombornya. ==Anda flop set lebih kurang 1 dalam 8.5 cubaan==, dan stack cukup dalam untuk membayar saya apabila ia berlaku. Satu pecahan itulah yang menukar call "rasa bertuah" menjadi call yang menguntungkan.

Itulah sebenarnya drawing odds: bukan nasib, tetapi ==matematik tetap dek 52 kad==. Sekerap mana anda flop set, flop flush, melengkapkan draw menjelang river — setiap satu ialah nombor yang boleh anda terbitkan, dan pemain yang menang sudah menghafalnya. Panduan ini ialah ==g:kebarangkalian di sebalik flop dan draw==, setiap satu dengan kombinatorik sebenar supaya anda nampak *kenapa* nombornya begitu. Ia teman kepada [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") yang penuh; sebaik anda tahu odds di sini, [mengira outs](/ms/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") dan [pot odds](/ms/blog/holdem-pot-odds) menukarnya menjadi keputusan.

---

### Nombor yang wajib diingat

:::stripe
11.8% | Flop set dengan pocket pair
0.84% | Flop flush yang sudah jadi dengan dua kad satu jenis
35% | Lengkapkan flush draw dari flop menjelang river
407:1 | Flop quads dengan pocket pair
:::

---

## Kitaran Flop: Semua Odds dalam Satu Jadual

> **Jawapan ringkas**
> Flop sesuatu tangan dan melengkapkan draw ialah dua peristiwa berbeza. Dua hole card satu jenis membentuk flush serta-merta hanya 0.84% daripada masa; sebaik anda flop flush draw, peluang dua kad untuk melengkapkannya ialah 35%. Baca setiap lajur daripada titik permulaan yang dinyatakan, dan jangan anggap setiap peratus itu peluang preflop.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Memegang | Flop terus jadi | Flop draw | Lengkapkan draw menjelang river |
|:---|:---:|:---|:---|
| Pocket pair → set | 11.8% (7.5:1) | — | set→full house atau quads 33.4% menjelang river |
| Dua satu jenis → flush | 0.84% (118:1) | 10.9% flush draw | 35% (9 outs) |
| Connector 54–JT → straight | 1.3% (76:1) | ~10% OESD | 31.5% (8 outs) |
| Dua tidak berpasangan → pair | ~32% | — | — |
| Pocket pair → quads | 0.245% (407:1) | — | — |

</div>

Baca satu baris dari kiri ke kanan dan anda nampak seluruh kitaran hidup sesuatu tangan. Dua kad satu jenis hampir tidak pernah flop flush yang *sudah jadi* (0.84%) — tetapi ia flop **flush draw** tiga belas kali lebih kerap (10.9%), dan draw itu menjadi menjelang river 35% daripada masa. Mencampuradukkan tiga nombor itu ialah kesilapan odds paling biasa, jadi kita akan pisahkan setiap satu di bawah dengan kiraannya ditunjukkan.

---

## Odds Flop Set: Berapa Kerap Pocket Pair Kena? (dan Matematik Set Mining)

> **Jawapan ringkas**
> Pocket pair flop set atau lebih baik 11.8% daripada masa — lebih kurang 1 dalam 8.5, atau 7.5:1 menentang — tetapi kadar kena itu sahaja tidak mewajarkan call. Untuk set mining (call raise dengan pair kecil terutamanya untuk flop three of a kind), garis panduan praktikalnya lebih kurang 15–20 kali call dalam effective stack. Anda tetap perlukan lawan yang berkemungkinan membayar, kerana sesetengah set menang sedikit atau kalah.

![Infografik dua outs pocket pair yang diserlahkan emas di dalam dek, anak panah ke tiga kad flop tertutup, dan bar yang dibahagi dua belas peratus emas berbanding lapan puluh lapan peratus kelabu](/images/holdem-drawing-odds-set-mining.webp "Tiga kad dari atas dek menentukan call set mining — dan kebanyakan masa, ia menentukannya menentang anda")

11.8% itu bermula dengan dua kad sepadan yang tinggal selepas anda menerima pocket pair. Flop ialah tiga kad yang dibuka daripada 50 kad yang anda tidak nampak, jadi kira peristiwa sebaliknya dahulu — peluang anda **terlepas** kedua-dua kad sepadan:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Langkah | Kiraan |
|------|------|
| Flop yang terlepas pair anda | C(48,3) = 17,296 |
| Jumlah flop yang mungkin | C(50,3) = 19,600 |
| Peluang anda terlepas | 17,296 ÷ 19,600 = 88.2% |
| **Peluang anda flop set** | **1 − 0.882 = 11.8%** |

</div>

### Bilakah set mining betul-betul berbaloi?

Flop set 11.8% daripada masa bermakna anda **terlepas 88% daripada masa** dan fold. Untuk untung, 12% yang kena mesti membayar semua kali anda terlepas. Pulang modal ialah 7.5:1 — jadi jika anda call untuk set mining, anda mahu pot ditambah apa yang boleh anda menang di street seterusnya bernilai **sekurang-kurangnya 7.5×** call anda, dan dalam praktik ==g:15:1 atau lebih baik== untuk menampung kali set anda tidak dibayar atau dipintas.

:::tip[Peraturan mudahnya: hanya call raise untuk set mining jika effective stack lebih kurang 15-20× harga call itu. Stack yang dalam menjadikan pair kecil emas; stack yang pendek menjadikannya sampah. Pair itu tidak berubah — implied odds yang berubah.]:::

Set mining ialah permainan [implied odds](/ms/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") yang paling tulen — peluang kecil untuk memenangi pot besar kemudian. Kerangka penuhnya — formula, gandaan stack ikut draw, dan reverse implied odds — ada dalam panduan itu.

Dua nombor berkaitan yang sering ditanya:

- **Kena set menjelang river** (dari preflop, melihat kelima-lima kad board) ialah ==**19.2%**== — 1 − C(48,5)/C(50,5). Lebih tinggi daripada angka flop kerana anda dapat dua kad lagi, tetapi anda tidak boleh bergantung untuk sampai ke river dengan murah, dan sebab itulah nombor flop yang menentukan set mining.
- **Set over set** — dua pemain dengan pocket pair flop set dalam tangan yang sama, dan yang lebih kecil kalah kepada yang lebih besar — tiada satu angka tetap kerana ia bergantung pada berapa ramai lawan memegang pair, tetapi dengan dua pemain yang sama-sama memegang pair, peluang *kedua-duanya* flop set lebih kurang 1%. Ia cooler klasik — dan kekalahan itu sahaja tidak memberitahu sama ada call set mining itu betul; harga dan stack yang memberitahu.

---

## Berapakah Odds Flush: Flop Terus, Flush Draw atau Lengkap di River?

> **Jawapan ringkas**
> Dua kad satu jenis boleh flop flush yang sudah jadi, flop draw, atau terlepas kedua-duanya. Dua peluang pertama ialah 0.84% dan 10.9%; hanya selepas draw itu wujud barulah angka 35% lengkap menjelang river terpakai. Nombor terakhir itu merangkumi kedua-dua kad yang tinggal, jadi ia tidak boleh menilai harga call yang hanya membeli turn.

![As-king heart dengan flop queen-seven heart di atas kain hijau, flush draw sembilan outs yang terbentuk di flop di sebelah timbunan cip yang pendek](/images/holdem-drawing-odds-flush-draw.webp "Dua heart di tangan, dua di flop — flush draw, bukan flush yang sudah jadi: 10.9% untuk flop, 35% untuk lengkap menjelang river")

Tiga kiraan ini menggunakan kad yang diketahui dan bilangan kad yang tinggal yang berbeza:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Soalan | Odds | Kiraannya |
|:---|:---:|:---|
| Flop **flush yang sudah jadi** (3 jenis anda) | 0.84% · 118:1 | C(11,3) ÷ C(50,3) = 165 ÷ 19,600 |
| Flop **flush draw** (2 lagi jenis anda) | 10.9% · 8:1 | C(11,2)×39 ÷ C(50,3) = 2,145 ÷ 19,600 |
| **Lengkapkan** flush draw dari flop menjelang river | 35.0% · 1.9:1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Jadi ayat yang jujur ialah: dua kad satu jenis flop **draw** jauh lebih kerap daripada flush yang sudah jadi, dan draw itu 35% untuk menjadi — 1.9:1 menentang, jadi lebih dekat kepada satu dalam tiga berbanding lambungan syiling. Mengejar setiap tangan satu jenis "demi flush" mengabaikan hakikat bahawa anda akan flop flush yang sudah jadi kurang daripada sekali setiap 100 tangan.

Angka lengkap itu terbahagi ikut street, dan itu penting apabila masih ada pertaruhan:

- **Flop → river (kedua-dua kad):** 35.0% — guna ini hanya apabila anda akan melihat kedua-dua kad tanpa bet lagi (anda all-in, atau anda sudah call all-in).
- **Flop → turn (satu kad):** 9 ÷ 47 = 19.1%.
- **Turn → river (satu kad):** 9 ÷ 46 = 19.6%.

Flush **backdoor** (runner-runner) — anda flop hanya *satu* kad tambahan jenis anda dan perlukan kedua-dua turn dan river jenis anda — lebih kurang 4.2%, bernilai kira-kira satu out tambahan dari segi equity. Bukan alasan untuk call, tetapi pemutus sebenar dalam situasi yang hampir. Untuk menukar mana-mana nombor ini menjadi call atau fold, masukkan ia ke dalam [cara kira pot odds](/ms/blog/holdem-pot-odds).

---

## Berapakah Odds Straight: Flop Terus vs Gutshot dan Open-Ended Draw?

> **Jawapan ringkas**
> Dengan connector bernilai tengah, anda flop straight yang sudah jadi lebih kurang 1.3% daripada masa; tangan di hujung susunan nilai ada lebih sedikit susunan yang mungkin. Selepas draw terbentuk, open-ender ada lapan kad pelengkap dan gutshot ada empat. Peluang menjelang river mereka mengira dua kad, manakala peluang kad seterusnya di bawah hanya mengira flop ke turn.

![Dua panel straight draw bersebelahan — susunan terbuka di kedua-dua hujung dengan angka 8 hijau dalam bulatan, dan susunan dengan satu lompang di tengah dan angka 4 emas](/images/holdem-drawing-odds-oesd-vs-gutshot.webp "Open-ender bernilai dua kali ganda gutshot — dua hujung terbuka berbanding satu lompang di tengah")

Connector seperti 8♠7♠ ada kitaran hidupnya sendiri. Anda akan **flop straight yang sudah jadi hanya 1.3%** daripada masa (76:1) — lebih jarang daripada sangkaan kebanyakan pemain. Angka itu terpakai untuk 54s hingga JTs, iaitu connector yang boleh mengisi straight dari kedua-dua hujung; tangan di pinggir dek ada lebih sedikit susunan, turun hingga 0.33% untuk A-K. Jauh lebih kerap anda flop **draw**:

- **Open-ended straight draw (OESD):** ~10% daripada flop dengan connector. Lapan outs, lengkap **31.5%** menjelang river — 1 − C(39,2)/C(47,2) — atau 17% dari flop ke turn.
- **Gutshot (inside) straight draw:** empat outs, lengkap **16.5%** menjelang river, 8.5% dari flop ke turn. Separuh equity open-ender, dan sebab itulah connector yang sama dimainkan begitu berbeza bergantung pada flop.

Perhatikan OESD (31.5%) dan flush draw (35%) hampir sama — kedua-duanya "satu draw besar", kedua-duanya lebih kurang satu pertiga untuk kena menjelang river. Itulah jalan pintas yang patut dihadam: draw besar biasa lebih kurang ==**satu dalam tiga**== untuk lengkap menjelang river, dan jatuh kepada lebih kurang satu dalam lima hingga enam pada satu street.

---

## Berapa Jarangnya Flop Quads, Trips, Full House dan Straight Flush?

> **Jawapan ringkas**
> Dengan pocket pair, flop quads ialah 0.245% dan flop full house ialah 0.98%. Dengan dua kad tidak berpasangan, flop trips ialah 1.35%, laluan yang berbeza daripada set. Setiap baris di bawah menyatakan tangan yang dipegang dahulu, kemudian mengira flop yang layak daripada 19,600 kemungkinan yang sama.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop ini | Memegang | Odds | Kiraannya |
|:---|:---|:---:|:---:|
| **Quads** | Pocket pair | 0.245% · 407:1 | 48 ÷ 19,600 |
| **Full house** | Pocket pair | 0.98% · 101:1 | 192 ÷ 19,600 |
| **Trips** | Dua kad tidak berpasangan | 1.35% · 73:1 | 264 ÷ 19,600 |
| **Straight flush** | Suited connector 54s–JTs | 0.02% · ~4,900:1 | 4 ÷ 19,600 |

</div>

Satu perbezaan penting yang sering disalah faham oleh laman teratas: **set** ialah pocket pair ditambah satu kad board yang sepadan (11.8%), manakala **trips** ialah satu hole card yang *tidak berpasangan* yang dipadankan dua kali oleh board (1.35%). Sama-sama three of a kind di atas kertas, tetapi odds dan cara bermainnya sangat berbeza — set tersembunyi, trips jelas kelihatan. Jangan biar sesiapa kata kedua-duanya sama bentuk.

Nombor straight flush itulah yang patut diberi konteks: dengan suited connector dari 54s hingga JTs ada tepat **empat** flop yang membentuknya (satu susunan tiga kad dalam jenis anda bagi setiap straight yang boleh dibentuk tangan itu; tangan di pinggir ada lebih sedikit — QJs tiga, KQs dua, A2s satu), jadi 4 ÷ 19,600 ≈ 1 dalam 4,900. Sebab itulah straight flush di flop menjadi cerita yang orang ulang selama sedekad.

Angka full house mengira setiap cara flop memberi anda full house dengan pocket pair — termasuk flop yang datang sebagai trips nilai lain di atas pair anda — dan sebab itulah ia 0.98% dan bukan ~0.73% yang lebih sempit yang dipetik sesetengah jadual untuk "set ditambah pair di board" sahaja.

---

## Berapakah Odds Anda Dapat Tangan Itu Preflop?

> **Jawapan ringkas**
> Satu pocket pair tertentu ada enam kombinasi daripada 1,326 agihan yang mungkin, manakala mana-mana pocket pair ada 78. A-K satu jenis hanya ada empat. Ini peluang sebelum melihat kad anda; sebaik anda memegang sesuatu tangan, soalan tentang lawan menerima nilai yang sama mesti mengambil kira kad yang sudah anda keluarkan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Diagihkan ini | Odds | Sekerap mana |
|:---|:---:|:---:|
| Pocket aces (pair tertentu) | 220:1 · 0.45% | 6 ÷ 1,326 |
| Mana-mana pocket pair | 16:1 · 5.9% | 78 ÷ 1,326 |
| A-K satu jenis | 331:1 · 0.3% | 4 ÷ 1,326 |
| Dua kad satu jenis | 3.25:1 · 23.5% | hampir sekali dalam setiap 4 tangan |

</div>

Yang mengejutkan ramai: jika **anda** memegang aces di meja 10 pemain, peluang pemain *kedua* juga memegang aces lebih kurang **1 dalam 136** (sembilan lawan, masing-masing 1 ÷ C(50,2) = 1/1,225). Jarang, tetapi itulah cooler aces-lawan-aces yang mengosongkan stack dan dipersalahkan kepada perisian "dimanipulasi". Itu cuma dek. Untuk tangan mana daripada 1,326 itu yang berbaloi dimainkan dari setiap kerusi, lihat [carta starting hand ikut posisi](/ms/blog/holdem-starting-hands-chart).

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-outs | Cara Kira Outs dalam Poker | /images/holdem-outs-hero.webp
/ms/blog/holdem-pot-odds | Cara Kira Pot Odds | /images/holdem-pot-odds-hero.webp
:::

## Soalan Lazim

**Q. Berapakah odds untuk flop set?**

A. Lebih kurang 11.8%, atau 1 dalam 8.5, apabila anda memegang pocket pair — biasanya disebut "7.5:1 menentang". Ia datang daripada 1 − C(48,3)/C(50,3): daripada 19,600 flop yang mungkin, 17,296 terlepas pair anda. Nombor itu titik permulaan untuk set mining dengan pair kecil — sama ada call itu menguntungkan juga bergantung pada berapa banyak yang boleh anda menang apabila kena.

**Q. Mengapa orang kata 7.5:1 tetapi juga 1 dalam 8?**

A. Kedua-duanya odds yang sama dinyatakan dengan dua cara. "7.5:1 menentang" mengira terlepas berbanding kena (7.5 terlepas bagi setiap satu kena), yang bersamaan 1 kena setiap 8.5 cubaan — iaitu lebih kurang 1 dalam 8.5, atau 11.8%. "Odds menentang" dan "1 dalam N" sentiasa menggambarkan kebarangkalian yang sama; jangan tambah kedua-duanya.

**Q. Apa beza set dengan trips?**

A. Set ialah pocket pair ditambah satu kad sepadan di board — anda flop set 11.8% daripada masa dan ia tersembunyi dengan baik. Trips ialah satu hole card tidak berpasangan yang dipadankan oleh board (dua kad board yang sepadan) — hanya 1.35% di flop, dan jauh lebih jelas kepada lawan. Kedudukan three of a kind yang sama, tetapi odds dan nilainya sangat berbeza.

**Q. Apakah flush draw?**

A. Flush draw ialah apabila anda memegang empat kad ke arah flush dan perlukan satu lagi kad jenis itu — contohnya A♥ K♥ pada flop 9♥ 5♥ 2♠; mana-mana daripada sembilan kad heart yang tinggal melengkapkannya. Flush draw yang terbentuk di flop ada sembilan outs dan menjadi lebih kurang 35% daripada masa menjelang river, atau kira-kira 19% pada satu kad.

**Q. Berapakah odds untuk flop flush?**

A. Hanya 0.84% (lebih kurang 118:1) dengan dua kad satu jenis — itulah C(11,3)/C(50,3). Jangan keliru dengan flop flush *draw*, iaitu 10.9%, atau *melengkapkan* draw itu menjelang river, iaitu 35%. Dua kad satu jenis flop draw tiga belas kali lebih kerap daripada flush yang sudah jadi.

**Q. Kalau anda flop flush draw, berapakah odds untuk melengkapkannya?**

A. Lebih kurang 35% menjelang river dengan sembilan outs (1 − C(38,2)/C(47,2)) — sedikit lebih baik daripada satu dalam tiga. Pada satu kad ia kira-kira 19%: 9/47 flop ke turn, 9/46 turn ke river. Guna nombor satu kad setiap kali masih ada pertaruhan akan datang.

**Q. Berapakah odds hit flush dengan empat kad satu jenis berbanding tiga?**

A. Dengan empat kad ke arah flush selepas flop — flush draw sebenar dengan sembilan outs — anda akan melengkapkannya lebih kurang 35% daripada masa menjelang river. Dengan hanya tiga kad ke arah flush, anda perlukan *kedua-dua* turn dan river jenis anda (flush backdoor, atau runner-runner), yang hanya ~4.2%. Sebab itulah empat kad ke arah flush ialah draw yang berbaloi dimainkan dan tiga hampir-hampir tidak layak jadi pemutus.

**Q. Apakah straight draw, dan berapakah odds untuk hit?**

A. Straight draw ialah empat kad ke arah straight. Open-ended straight draw (seperti 8-7 pada board 9-6-2, perlukan 5 atau 10) ada lapan outs dan lengkap lebih kurang 31.5% daripada masa menjelang river. Gutshot (inside) draw hanya ada empat outs — satu nilai mengisi lompang — jadi ia kena lebih kurang 16.5%, kira-kira separuh kerap.

**Q. Berapakah odds untuk flop quads?**

A. 0.245%, atau 407:1, dengan pocket pair — ada tepat 48 flop (dua kad sepadan terakhir anda ditambah mana-mana kad ketiga, C(48,1)) daripada 19,600. Flop straight flush dengan suited connector dari 54s hingga JTs lebih jarang lagi, lebih kurang 1 dalam 4,900.

**Q. Berapakah odds dapat pocket aces?**

A. 220:1 (0.45%) untuk aces secara khusus — 6 daripada 1,326 kombinasi permulaan. Mana-mana pocket pair jauh lebih biasa pada 16:1 (5.9%). Dan jika anda memegang aces di meja 10 pemain, pemain lain yang juga memegang aces lebih kurang 1 dalam 136 (lebih kurang 1 dalam 153 di meja sembilan pemain).

**Q. Berapakah odds set over set?**

A. Tiada satu nombor tetap — ia bergantung pada berapa ramai lawan memegang pocket pair — tetapi apabila dua pemain sama-sama ada pair dan sama-sama flop set, ia kira-kira 1%. Ia cooler paling kejam: anda flop set hanya 11.8% daripada masa pada mulanya, jadi dua orang melakukannya pada board yang sama sangat jarang — dan keputusan itu sahaja tidak menunjukkan sama ada mana-mana call itu satu kesilapan.

---

## 3 Perkara yang Wajib Anda Ingat

1. **Flop set: 11.8% (7.5:1).** Titik permulaan setiap call set mining — kedalaman stack dan lawan yang berkemungkinan membayar menentukan sama ada ia menguntungkan, jadi sasarkan menang 15× atau lebih apabila anda kena.
2. **Flop terus, draw dan lengkap ialah nombor berbeza.** Dua kad satu jenis flop flush yang sudah jadi 0.84%, flush draw 10.9%, dan melengkapkan draw itu 35%. Jangan sekali-kali petik nombor yang salah.
3. **Draw besar lebih kurang satu dalam tiga menjelang river.** Flush draw 35%, open-ender 31.5% — dan kira-kira satu dalam lima hingga enam pada satu street.

Setiap angka di sini datang terus daripada dek, bukan gerak hati. Bawa ia ke [cara kira outs](/ms/blog/holdem-outs) untuk membina nombor secara langsung, kemudian ke [pot odds](/ms/blog/holdem-pot-odds) untuk menukarnya menjadi call atau fold — atau kembali ke [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability) yang penuh untuk setiap nombor made hand dan long-shot di satu tempat.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Odds &amp; Kebarangkalian Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Setiap nombor made hand dan long-shot di satu tempat</div>
  </a>
  <a href="/ms/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Kira Outs dalam Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tukar odds ini menjadi kiraan outs secara langsung</div>
  </a>
  <a href="/ms/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Kira Pot Odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Adakah harganya betul untuk draw anda?</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hand</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Starting Hand Ikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pair dan tangan satu jenis mana untuk draw</div>
  </a>
</div>
`.trim(),
};
