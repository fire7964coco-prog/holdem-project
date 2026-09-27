import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Equity dalam Poker — Win %, Fold Equity dan Realisasi Equity",
  seoTitle: "Win % Bukan Apa yang Anda Bawa Balik — Equity dalam Poker",
  desc: "Equity ialah bahagian pot hak anda — tapi tak selalu anda simpan. Kenapa 40% equity bukan 40% menang, plus fold equity, realisasi equity dan all-in equity.",
  tldr: "Equity ialah bahagian pot anda — hirisan yang tangan anda layak dapat secara purata selepas semua kad dibuka, dengan split pot dikira secara pro rata. Anda call apabila equity anda mengatasi pot odds, tetapi posisi dan pertaruhan menyebabkan anda jarang dapat menyimpan equity penuh — dan fold equity membolehkan anda menang pot walaupun tangan anda di belakang.",
  category: "odds",
  date: "2026-09-26",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "12 minit",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Dua pemain all-in dengan kad terbuka di atas kain hijau dan timbunan cip di tengah — saat equity setiap tangan bertukar menjadi bahagian pot yang sebenar",
  tags: ["equity poker", "equity dalam poker", "what is equity in poker", "fold equity", "equity realization", "realisasi equity", "equity vs pot odds", "all in equity"],
  content: `
Selama setahun saya sangka "equity" cuma perkataan canggih untuk "sejauh mana saya berkemungkinan menang". Kemudian saya kalah tiga pot besar dalam satu malam walaupun saya favourite (lebih berpeluang menang) setiap kali masuk, dan seorang pemain yang lebih baik memberitahu saya sesuatu yang mengubah cara saya melihat seluruh permainan: ==equity anda ialah apa yang anda *layak dapat*, bukan apa yang anda *kutip*.== Anda boleh ada peluang 40% untuk menang sesuatu tangan tetapi hampir tidak merealisasikan apa-apa daripadanya — atau berada di belakang dan tetap mencetak wang. Memahami jurang antara kedua-duanya ialah sebahagian besar perkara yang membezakan pemain yang menang dengan pemain yang sekadar berharap.

==Equity ialah satu-satunya nombor yang mengikat setiap kepingan matematik poker yang lain — outs, pot odds, posisi dan keagresifan semuanya berakhir pada satu soalan: berapa bahagian pot ini yang benar-benar milik saya?== Panduan ini menerangkan apa itu equity, cara menganggarnya, dan tiga perkara yang tiada siapa beritahu pemula: kenapa anda tidak menyimpan semuanya, bagaimana lawan yang fold memberi anda tambahan, dan kenapa tangan besar anda mengecil menentang ramai pemain.

Peratus kemenangan mentah di sebalik setiap tangan datang daripada [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); panduan ini pula cara anda menukar peratus itu menjadi keputusan di meja.

---

### Equity sepintas lalu

:::stripe
pot × equity% | Nilai tangan anda sekarang
mentah × realization% | Apa yang anda benar-benar kutip
bet ÷ (pot + bet) | % fold yang diperlukan oleh bluff tulen
:::

---

## Apakah Equity dalam Poker?

**Equity ialah bahagian pot anda — hirisan yang tangan anda layak dapat secara purata apabila tangan itu dimainkan hingga showdown, dengan split pot dikira secara pro rata.** Jika pot ialah $100 dan 60% daripadanya hak anda, tangan anda bernilai ==$60 sekarang==, walaupun cip belum ditolak kepada sesiapa.

Anggap ia hirisan pai anda. Setiap tangan yang masih hidup ada hirisannya; jumlah semua hirisan sentiasa 100%. Apabila anda heads-up dengan 70% equity dalam pot $200, ==g:$140 daripadanya "milik anda"== dalam jangka panjang — anda tidak akan memenangi pot *ini* 70% daripada masa lalu kalah selebihnya, tetapi merentas seribu situasi yang serupa, itulah bahagian yang anda kutip.

Itulah sebab utama equity penting: ia menukar soalan "adakah saya di depan?" menjadi "berapa banyak pot ini yang saya miliki?" — dan itulah nombor yang anda bandingkan dengan harga sesuatu call.

---

## Bagaimana Cara Anggar Equity Anda dengan Cepat?

**Pada draw, darab outs bersih anda dengan 4 di flop (jika anda akan melihat kedua-dua kad) atau dengan 2 di turn — itulah peluang anda kena, pengganti yang adil untuk equity apabila kena bermakna menang dan terlepas bermakna kalah; untuk preflop, hafal beberapa pertembungan yang berulang-ulang.** Anda hampir tidak pernah mengira equity tepat di meja — anda menganggar, dan dua jalan pintas ini meliputi 90% situasi.

**Draw (Rule of 4 and 2):** kira [outs](/ms/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") anda, kemudian darab. Flush draw ialah 9 outs → ==9 × 4 = 36%== di flop (nilai sebenar 35%). Nombor tepat untuk setiap draw ada dalam [drawing odds](/ms/blog/holdem-drawing-odds); inilah rujukan pantasnya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Peluang kena (2 kad) |
|:---|:---:|:---:|
| Flush + open-ender | 15 | 54.1% |
| Flush draw | 9 | 35.0% |
| Open-ended straight | 8 | 31.5% |
| Gutshot straight | 4 | 16.5% |

</div>

**Pertembungan preflop (hafal ini):** all-in sebelum flop, pertarungan yang sama berulang. Pelajarinya dan anda akan terus tahu equity anda dalam kebanyakan all-in preflop. Setiap angka di bawah mengira split pot secara pro rata.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pertembungan | Equity | Jenis |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair mendominasi |
| QQ vs AK | ~57% / ~43% | Pair sedikit di depan dalam "race" |
| 22 vs AK | ~52% / ~48% | Coin flip sebenar |
| AK vs AQ | ~74% / ~26% | Dominasi |
| 88 vs A7 | ~70% / ~30% | Pair vs satu overcard |

</div>

Dua perkara yang selalu mengelirukan orang di sini. Pair menentang dua overcard (QQ vs AK) ==r:bukan 50/50== — pair itu favourite yang sederhana, lebih kurang 57/43 offsuit (sedikit lebih rapat, ~54/46, apabila AK satu jenis). Dan istilah "coin flip" sebenarnya hanya sesuai untuk pair rendah menentang dua kad lebih besar (22 vs AK), di mana ia benar-benar rapat.

---

## Equity vs Pot Odds: Satu Peraturan yang Tentukan Setiap Call

**Call apabila equity anda lebih besar daripada pot odds anda — satu perbandingan itu menentukan hampir setiap call dalam poker.** [Pot odds](/ms/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") memberitahu equity yang anda *perlukan* untuk pulang modal; equity memberitahu apa yang anda *ada*. Jika anda ada lebih daripada yang diperlukan, call menghasilkan wang.

Menghadapi bet separuh pot, pot odds anda memerlukan ==25%== untuk call. Jika call ini meletakkan anda all-in di flop atau membolehkan anda melihat kedua-dua kad yang tinggal tanpa bayaran lagi, ~35% flush draw yang bersih melepasi harga itu. Jika satu lagi bet boleh menyusul di turn, call itu hanya membeli satu kad: 9 ÷ 47 = 19.1%, di bawah 25% untuk draw itu semata-mata.

Tetapi inilah syarat yang hampir setiap panduan langkau: **"equity anda sama dengan bahagian pot anda" hanya benar apabila tiada lagi pertaruhan.** Sebaik lebih banyak wang boleh masuk di street seterusnya, 35% mentah tidak semestinya bertukar menjadi 35% daripada pot akhir — anda mungkin dipaksa melepaskan draw, atau membayar apabila anda kena tangan kedua terbaik. Jurang itulah tempat [implied odds](/ms/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (wang yang anda akan menang kemudian) dan realisasi equity ("equity realization", di bawah) masuk. Equity ialah tempat matematik *bermula*, bukan tempat ia berakhir.

---

## Apakah Fold Equity? Cara Menang Pot Walaupun Tangan Anda di Belakang

**Fold equity ialah equity tambahan yang anda peroleh daripada peluang lawan anda fold — itulah sebab sesuatu bet boleh memenangi pot yang tangan anda sendiri akan kalah.** Apabila anda bet, anda ada dua cara untuk menang: lawan fold sekarang, atau mereka call dan anda menang di showdown. Check hanya memberi anda cara kedua.

:::compare
Bet (agresif) | Check atau call (pasif)
Mereka fold sekarang → anda menang pot | Tiada fold equity — tiada siapa fold kepada check
Mereka call dan anda kena → anda menang | Anda kena → anda menang
==g:Dua cara untuk menang== | ==r:Satu cara untuk menang==
:::

Secara heads-up, untuk ==bluff tulen== tanpa peluang menang apabila di-call dan tanpa pertaruhan seterusnya, titik pulang modalnya mudah: anda perlukan lawan fold cukup kerap untuk menampung risiko. Bet $50 ke dalam pot $100, kadar fold pulang modal anda ialah ==bet ÷ (pot + bet) = 50 ÷ 150 = 33%==. Jika mereka fold lebih daripada satu pertiga masa, bet itu menguntungkan — walaupun dengan tangan paling teruk di meja.

Sekarang tambah draw. Dalam contoh ==g:semi-bluff== heads-up ini, pot ialah $100 dan anda shove $50 terakhir anda di flop. Lawan anda fold 40% daripada masa; apabila di-call, anggap flush draw bersih anda ada 35% equity. Kedua-dua kad akan diagihkan tanpa pertaruhan lagi, jadi angka dua kad itu sesuai untuk kiraan ini. EV (nilai jangkaan) shove itu dikira begini:

:::note
EV = (fold% × pot) + (call% × [equity × (pot + bet) − (miss% × bet)])
EV = (0.40 × $100) + (0.60 × [0.35 × $150 − 0.65 × $50])
EV = $40 + (0.60 × [$52.50 − $32.50]) = $40 + $12 = ==g:+$52==
:::

Shove itu bernilai ==+$52== berbanding melepaskan pot, dengan $40 daripada jangkaan itu datang daripada fold. Ini mengasingkan sumbangan fold equity; ia tidak membandingkan shove dengan setiap laluan check atau call yang mungkin. Ubah kekerapan fold lawan atau calling range-nya, dan EV juga berubah.

---

## Realisasi Equity: Mengapa 40% Equity Bukan 40% Menang?

**Realisasi equity ialah berapa banyak equity mentah yang anda benar-benar kutip — dan ia biasanya kurang daripada 100%, kerana posisi dan pertaruhan merugikan anda.** "40% untuk menang" anda menganggap anda sentiasa sampai ke showdown; hakikatnya anda dipaksa melepaskan draw, terpaksa fold, dan ditolak ke sana sini ketika out of position. Apa yang anda simpan ialah:

==b:Equity direalisasi = equity mentah × realization%==

Tangan dengan 40% equity mentah yang hanya merealisasikan 75% daripadanya sebenarnya bernilai ==0.75 × 40% = 30%==. Sebab itulah anda boleh "di depan range lawan" tetapi tetap kalah wang — ketika out of position, anda jarang dapat menunaikan hirisan penuh.

Apa yang menaikkan atau menurunkan realisasi anda:

:::card
🪑 | Posisi | Bertindak terakhir selalunya membantu anda merealisasikan equity melalui maklumat dan kawalan pot, tetapi tiada posisi yang menjamin keputusan di atas atau di bawah 100%. Range dan board juga penting
🎯 | Kebolehmainan | Suited connector dan tangan yang flop draw merealisasikan dengan baik; tangan offsuit yang kekok merealisasikan dengan teruk walaupun equity mentahnya boleh tahan
📚 | Kedalaman stack & kemahiran | Stack yang lebih dalam dan lawan yang lebih kuat menjadikan equity marginal lebih sukar direalisasikan
:::

Inilah idea paling penting yang ditinggalkan kebanyakan panduan pemula, dan sebab itulah [tangan yang sama dimainkan dengan sangat berbeza ikut posisi](/ms/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). Equity mentah ialah titik permulaan — apa yang anda simpan jika cip masuk sekarang; realisasi pula apa yang anda benar-benar bawa balik. Posisi mempengaruhi jurang itu bersama range, tekstur board, kedalaman stack dan cara tangan itu dimainkan.

---

## Bilakah Equity Mentah Saja yang Penting? All-In Equity

**Sebaik tiada lagi pertaruhan boleh berlaku — anda all-in atau sudah call all-in secara heads-up, atau semua pemain lain yang masih dalam tangan sudah all-in — anda merealisasikan 100% equity anda, dan equity mentah menjadi kata putus.** Setiap komplikasi di atas (posisi, fold, dipaksa melepaskan draw) hilang, kerana tiada lagi pertaruhan boleh berlaku. Apa pun equity mentah anda — bahagian pot anda, split dikira pro rata — itulah tepat yang anda akan kutip dari masa ke masa.

Sebab itulah equity all-in preflop sangat penting: AA all-in menentang KK menyimpan ==82%== penuhnya — tiada cukai realisasi, tiada fold equity, hanya nombor mentah yang dimainkan. Itu juga sebab "coin flip" (22 vs AK pada ~52/48) benar-benar hampir seimbang ketika all-in, walaupun dua tangan yang sama jika dimainkan postflop akan berbeza jauh bergantung pada board dan siapa ada posisi.

All-in tanpa pertaruhan yang tinggal ialah satu-satunya situasi dalam poker di mana, dengan kad masih akan keluar, pai dihiris tepat seperti kata matematik — dan itulah daya tarikan serta bahayanya.

---

## Mengapa Tangan Besar Anda Mengecil dalam Pot Multiway?

**Equity anda jatuh dengan cepat dalam pot multiway, kerana pai 100% yang sama kini dibahagi kepada lebih banyak tangan.** Pocket aces lebih kurang 85% secara heads-up, tetapi menentang tiga lawan ia merosot ke ==r:~64%==, dan menentang empat kepada ~56% — masih tangan terbaik, tetapi bukan lagi kelebihan besar seperti yang dirasakan. Dalam pot tiga pemain, equity secara *purata* 33% mengikut takrifan, kerana tiga pemain membahagi satu pot.

![Infografik board Q♣ 9♥ 5♦ 3♠ J♦ yang menunjukkan bagaimana setiap pemain tambahan dalam pot memotong equity setiap tangan](/images/holdem-equity-multiway.webp "Semakin ramai pemain masih dalam pot, semakin kecil hirisan setiap orang — malah pocket aces")

Dua perkara menjadi lebih teruk dalam pot multiway, bukan hanya bahagian mentah anda:

- **Fold equity runtuh.** Untuk memenangi pot dengan bet, kini *semua orang* perlu fold — jauh kurang berkemungkinan dengan tiga lawan berbanding seorang. Bluff dan semi-bluff nipis cepat hilang nilai.
- **Realisasi jatuh.** Lebih ramai pemain yang belum bertindak bermakna lebih banyak cara untuk dipintas atau dipaksa melepaskan tangan, jadi anda merealisasikan lebih sedikit daripada hirisan yang sudah pun lebih kecil.

Pengajaran praktikalnya: tangan yang mahukan pot multiway ialah tangan yang membentuk nuts (set, suited ace untuk nut flush), bukan pair besar yang paling baik dimainkan heads-up. Apabila ramai pemain masuk, ketatkan pilihan ke arah tangan yang equity-nya bertahan apabila pai dipotong lima.

---

## Bagaimana Pro Sebenarnya Guna Equity di Meja?

**Pemain yang bagus tidak mengira equity tepat — mereka menjalankan anggaran pantas empat langkah yang melapisi realisasi dan fold equity di atas nombor mentah.** Inilah proses fikirnya, mengikut urutan ia sebenarnya berlaku:

:::steps
Anggar equity mentah | Outs × 4 atau × 2 untuk draw; ingat pertembungan preflop
Potong untuk realisasi | Out of position atau sukar dimainkan? Kurangkan — 40% mentah mungkin 30% sebenar
Tambah fold equity | Jika anda bet, sekerap mana lawan fold? Itu equity tambahan yang tangan anda sendiri tiada
Bandingkan dengan harga | Call? Equity direalisasi vs pot odds anda. Bet? Sekerap mana lawan fold vs kadar fold pulang modal — bet ÷ (pot + bet) untuk bluff tulen, lebih rendah apabila tangan anda masih ada equity jika di-call → call, bet atau fold
:::

Malam yang saya sebut di awal tadi, saya membuat langkah pertama lalu berhenti — mengira equity mentah dan mengabaikan hakikat bahawa ketika out of position, menentang pemain yang bagus, saya tidak akan merealisasikannya. Sebaik saya mula memotong nilai untuk posisi dan memikirkan fold *mereka* dan bukan hanya kad saya, leak (kelemahan berulang) itu tertutup. Equity bukan nombor yang anda cari dalam jadual; ia kanta yang anda gunakan untuk melihat setiap keputusan.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-pot-odds | Cara Kira Pot Odds | /images/holdem-pot-odds-hero.webp
/ms/blog/holdem-implied-odds | Implied Odds — Bila Harga Buruk Jadi Call yang Betul | /images/holdem-implied-odds-hero.webp
:::

## Soalan Lazim

**Q. Apakah equity dalam poker?**

A. Equity poker ialah bahagian pot anda — peratus bayaran showdown yang layak untuk tangan anda, termasuk bahagian anda daripada seri dan bukan kemenangan sahaja. Equity menjawab berapa nilai kad anda menentang tangan atau range lain jika baki board diagihkan. Keputusan pertaruhan masih perlukan harga dan, apabila permainan berterusan, anggaran berapa banyak yang boleh anda realisasikan.

**Q. Bagaimana cara kira equity dalam poker?**

A. Untuk draw, guna Rule of 4 and 2: darab outs bersih anda dengan 4 di flop (apabila anda akan melihat kedua-dua kad) atau dengan 2 di turn untuk menganggar peluang anda kena. Sembilan outs flush ≈ 36% di flop — hampir dengan equity anda apabila kena bermakna menang dan terlepas bermakna kalah. Untuk preflop, hafal pertembungan biasa (AA vs KK ialah 82/18). Untuk nombor tepat, pemain menggunakan kalkulator equity di luar meja untuk belajar — anda menganggar semasa bermain.

**Q. Apa beza equity dengan pot odds?**

A. Equity ialah bahagian pot anda (apa yang anda ada); pot odds ialah equity yang anda perlukan untuk pulang modal pada sesuatu call (apa yang dituntut oleh harga). Peraturannya mudah: call apabila equity anda lebih besar daripada pot odds. Pot odds datang daripada saiz bet; equity datang daripada tangan anda dan board.

**Q. Adakah 50% equity dikira bagus dalam poker?**

A. Ia bukan bagus atau buruk dengan sendirinya — 50% ialah coin flip. Sama ada ia call bergantung pada harga: menentang bet separuh pot anda hanya perlu 25%, jadi 50% ialah call yang sangat jelas; tetapi mempertaruhkan seluruh stack sebagai underdog 50/50 untuk tiada apa-apa ialah perjudian, bukan kelebihan. Equity hanya bermakna apabila diletakkan di sebelah pot odds.

**Q. Apa maksud 20% equity?**

A. Ia bermakna satu perlima pot milik tangan anda dalam jangka panjang — jadi dalam pot $100 bahagian anda bernilai lebih kurang $20. Sama ada 20% ialah call bergantung pada harga: menentang bet suku pot anda perlu lebih kurang 17%, jadi 20% memadai; menentang bet separuh pot (perlu 25%) ia fold. Mana-mana angka equity hanya bermakna apabila diletakkan di sebelah pot odds.

**Q. Berapa banyak fold equity anda perlu untuk bluff dengan untung?**

A. Untuk bluff tulen heads-up tanpa peluang menang apabila di-call dan tanpa pertaruhan seterusnya, lawan anda mesti fold sekurang-kurangnya bet ÷ (pot + bet) daripada masa: $50 ke dalam $100 perlukan 33% fold. Ambang itu ialah **kekerapan fold**, bukan peratus equity; equity showdown dalam semi-bluff menurunkannya.

**Q. Apa maksud realisasi equity dalam poker?**

A. Realisasi equity ialah berapa banyak equity mentah yang anda benar-benar kutip: equity direalisasi = equity mentah × realization%. Terpaksa fold menurunkannya; mengambil bet atau memenangi fold boleh menaikkannya. Bertindak terakhir selalunya membantu, tetapi range dan tekstur board yang menentukan sama ada tangan in position atau out of position berakhir di atas atau di bawah 100%.

**Q. Apakah all-in equity?**

A. All-in equity hanyalah equity mentah anda — bahagian pot anda, split dikira pro rata — apabila tiada lagi pertaruhan boleh berlaku. Kerana tiada keputusan masa depan, anda merealisasikan 100% daripadanya, jadi equity mentah menjadi bahagian pot tepat yang anda kutip dari masa ke masa. Inilah satu-satunya situasi di mana, dengan kad masih akan keluar, "equity sama dengan bahagian pot" benar secara harfiah.

**Q. Mengapa equity anda jatuh dalam pot multiway?**

A. Kerana pot 100% yang sama kini dibahagi kepada lebih banyak tangan — pocket aces pada ~85% secara heads-up jatuh ke ~64% menentang tiga lawan dan ~56% menentang empat lawan. Pot multiway juga memotong fold equity anda (semua orang perlu fold, bukan seorang sahaja) dan realisasi anda (lebih ramai pemain bermakna lebih banyak cara untuk dipintas), jadi kedua-dua bahagian mentah anda dan apa yang anda simpan daripadanya mengecil.

**Q. Apakah EV (expected value) dalam poker?**

A. Expected value (nilai jangkaan) ialah purata jumlah yang dimenangi atau dikalahkan oleh sesuatu keputusan dalam jangka panjang. Permainan yang secara purata menghasilkan lebih daripada sifar ialah +EV (menguntungkan); kurang daripada sifar ialah −EV (merugikan); sifar ialah pulang modal. Poker yang menang hanyalah memilih tindakan +EV dan fold yang −EV — setiap bet, call dan fold ada EV, walaupun anda tidak nampak nombor tepatnya.

**Q. Apa beza equity dengan EV?**

A. Equity ialah bahagian anda daripada pot *ini* jika tangan itu dimainkan hingga habis (satu peratus); EV ialah sama ada *bertindak* atas equity itu benar-benar menghasilkan wang (satu jumlah, dalam cip). Anda boleh memegang equity tinggi tetapi masih membuat call −EV jika harganya salah, atau equity rendah tetapi bluff +EV jika lawan anda fold cukup kerap. Equity memberitahu kedudukan anda; EV memberitahu sama ada keputusan itu menguntungkan.

---

## 3 Perkara yang Wajib Anda Ingat

1. **Equity ialah bahagian pot anda** — equity% × saiz pot. Call apabila ia mengatasi pot odds anda. Perbandingan itulah tulang belakang setiap keputusan.
2. **Anda jarang menyimpan semuanya.** Equity direalisasi = mentah × realization%, dan posisi, range serta tekstur board semuanya menggerakkannya. Equity mentah ialah titik permulaan, bukan bayaran akhir.
3. **Keagresifan mencipta equity.** Fold equity membolehkan bet memenangi pot yang tangan anda akan kalah — tetapi ia runtuh dalam pot multiway, di mana anda perlukan semua orang fold.

Kuasai ini dan selebihnya matematik poker akan jatuh ke tempatnya. Dari sini, tukar equity menjadi call yang betul dengan [panduan pot odds](/ms/blog/holdem-pot-odds), atau lihat bagaimana stack yang dalam mengubah gambaran dengan [implied odds](/ms/blog/holdem-implied-odds).

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Odds & Kebarangkalian Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Peratus kemenangan mentah di sebalik setiap tangan</div>
  </a>
  <a href="/ms/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Kira Pot Odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Harga yang mesti diatasi oleh equity anda</div>
  </a>
  <a href="/ms/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Implied Odds Diterangkan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa equity bukan bahagian pot akhir anda</div>
  </a>
  <a href="/ms/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagaimana Posisi Mengubah Segalanya</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa realisasi hidup dan mati pada posisi</div>
  </a>
</div>
`.trim(),
};
