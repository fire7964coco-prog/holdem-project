import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "Cara Main Short Stack dalam Poker — Strategi Push/Fold Ikut Saiz Stack",
  seoTitle: "Cip Makin Susut? Cara Main Short Stack Poker (Push/Fold)",
  desc: "Short stack dalam tournament? Belajar push/fold ikut saiz stack — bila perlu shove pada 15, 10 dan 5 big blind, zon M-ratio, dan kesan ICM di bubble.",
  tldr: "Short stack (kira-kira bawah 20–25 big blind) tidak boleh main postflop biasa, dan dari sekitar 15 big blind ke bawah ia bertukar ke push/fold: all-in first-in untuk jaga fold equity, jangan open-limp atau min-raise lalu fold. Shove lebih luas dari posisi lewat, calling range lebih ketat daripada shoving range, dan jangan tunggu tangan sehingga blind habiskan stack — fold equity ialah senjata anda, dan ia pudar teruk bawah kira-kira 8 big blind.",
  category: "tournament",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-24",
  keepImagesInBody: true,
  readTime: "13 minit",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "Short stack cip tournament di sebelah stack besar di atas felt hijau dengan jam tournament di belakang — saat pemain short stack perlu all-in atau fold",
  tags: ["short stack poker", "short stack strategy", "push fold strategy", "push fold chart", "M ratio poker", "fold equity", "jam poker", "cara main short stack poker"],
  content: `
Kali paling pantas saya pernah beralih daripada "masih hidup" kepada "tersingkir" ialah pada satu malam saya asyik min-raise dengan stack 12 big blind, fold setiap kali di-re-raise, dan kehilangan satu setengah blind setiap pusingan meja sehingga stack saya terlalu kecil untuk menakutkan sesiapa. Apabila saya akhirnya shove, saya tinggal empat big blind dan di-call oleh dua pemain. ==Saya bukan bernasib malang — saya main short stack seolah-olah ia stack yang dalam.== Sebaik sahaja stack anda mengecil, seluruh permainan berubah, dan pemain yang tahu peraturan baharunya itulah yang menguasai meja.

==Short stack cuma ada satu tugas: all-in dahulu, jaga fold equity anda, dan pilih saat yang tepat sebelum blind memilihnya untuk anda.== Inilah poker push/fold, dan ia kelebihan paling mudah dipelajari dalam tournament — satu set peraturan yang jelas yang boleh anda guna sebaik sahaja stack anda jatuh. Panduan ini bab tindakan dalam trilogi matematik tournament: [ICM](/ms/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") ialah teorinya, [bubble](/ms/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") ialah situasinya, dan permainan short stack ialah langkah yang benar-benar anda buat dalam [tournament](/ms/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### Peraturan Short Stack Sekilas Pandang

:::stripe
shove first-in | jaga fold equity anda
call lebih ketat | daripada anda shove
~8bb | fold equity pudar di bawah paras ini — bertindak lebih awal
:::

---

## Apakah Itu Short Stack dalam Poker? (Berapa Big Blind?)

**Short stack ialah mana-mana stack yang terlalu kecil untuk main postflop biasa — secara umum bawah kira-kira 20–25 big blind, dengan push/fold mengambil alih dari sekitar 15 big blind ke bawah.** Ini bukan had yang tegar; ia zon di mana pilihan anda runtuh. Dengan 60 big blind anda boleh raise, call, float dan mengatasi lawan selepas flop. Dengan 12, kebanyakannya hilang — keputusan anda hampir semuanya dibuat sebelum flop: sama ada mahu all-in atau fold.

Berikut peta praktikal ikut saiz stack (anggaran tanpa ante, meja penuh — ante menolak setiap jalur sedikit lebih rendah):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack | Mod permainan | Senjata utama anda |
|:--|:--|:--|
| 25bb+ | Masih permainan postflop sebenar — raise/fold, sesekali call | Kebolehmainan |
| 20bb | Raise atau fold; re-shove all-in atas open dan limper | Leverage re-shove |
| 15bb | Push/fold mengambil alih — shove first-in, kebanyakannya dari posisi lewat | Fold equity |
| 10bb | Push/fold tulen; shove range yang luas dan munasabah secara first-in | Fold equity (masih kuat) |
| ≤5bb | Shove atau fold sekarang — fold equity sedang pudar, masukkan cip | Mana-mana tangan yang boleh dimainkan, cepat |

</div>

Kesilapan paling besar ialah tidak tahu anda berada di baris mana. Stack 12 big blind yang asyik open dan fold sebenarnya sedang main permainan 40 big blind dan rugi sedikit setiap pusingan meja sehingga ia sampai ke baris ≤5bb tanpa sebarang leverage lagi.

---

## Kenapa Short Stack Main Push/Fold? Fold Equity Dijelaskan

**All-in secara first-in berkesan kerana ia memaksa lawan membuat keputusan semua-atau-tiada, jadi mereka fold tangan yang mereka sanggup main menentang raise kecil — dan fold itu memenangkan blind dan ante untuk anda secara percuma.** Itulah ==fold equity==: keuntungan yang anda buat setiap kali semua orang fold, sebelum sebarang kad ditunjukkan.

Fikirkan apa yang dilakukan min-raise apabila anda short: ia mengikat cip, mengundang re-raise yang tidak mampu anda call, dan membiarkan lawan merealisasikan equity mereka dengan murah. ==Shove== melakukan sebaliknya. Ia berkata "call untuk tournament anda atau fold," dan kebanyakan tangan akan fold. Apabila anda cukup kerap mengutip blind dan ante tanpa lawan, ==anda tetap untung walaupun pada kali anda di-call dan kalah==, kerana pot percuma itu lebih daripada menampungnya.

Masalahnya, fold equity ==susut apabila stack anda mengecil==. Pada 12–15 big blind, lawan banyak fold — shove anda menakutkan. Ia mula pudar sekitar 8–10 big blind, dan pada 4–5 mereka mendapat [harga yang begitu baik](/ms/blog/holdem-pot-odds) sehingga mereka call dengan hampir apa sahaja — fold equity anda hampir lenyap. Itulah sebab utama untuk tidak menunggu: ==shove semasa all-in anda masih menakutkan orang==, bukan selepasnya.

---

![Stack cip yang kecil ditolak all-in merentasi felt sementara stack yang lebih besar menimbang sama ada mahu call, dengan jam tournament menyala di belakang](/images/holdem-short-stack-shove.webp "Push/fold short stack: all-in memaksa keputusan ya-atau-tidak dan memenangi blind apabila semua orang fold")

## M-Ratio Poker (Nilai M Harrington): Zon Hijau, Kuning, Oren, Merah, Mati

**M-ratio mengukur berapa pusingan meja anda boleh bertahan dengan hanya fold — stack anda dibahagi dengan kos satu pusingan penuh blind dan ante — dan ia menyusun stack anda kepada lima zon.** Dipopularkan oleh Dan Harrington, ==M = your stack ÷ (small blind + big blind + all antes per orbit)== (M = stack anda ÷ kos blind dan semua ante bagi satu pusingan meja). Ia menjawab "berapa lama saya boleh duduk di sini tanpa berbuat apa-apa?" — dan semakin kecil nilainya, semakin anda perlu bertindak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Zon | M-ratio | Anggaran (tanpa ante) | Cara main |
|:--|:--:|:--:|:--|
| 🟢 Zon hijau | 20+ | ~30bb+ | Semua senjata, main poker biasa |
| 🟡 Zon kuning | 10 hingga bawah 20 | ~15–30bb | Ketatkan permainan, mula cari peluang shove |
| 🟠 Zon oren | 6 hingga bawah 10 | ~9–15bb | Push/fold; agresif secara first-in, curi blind |
| ⚠ Zon merah | 1 hingga bawah 6 | ~1.5–9bb | Shove atau fold dengan mana-mana tangan yang munasabah |
| ⚫ Zon mati | bawah 1 | bawah ~1.5bb | Shove mana-mana dua kad, pada peluang seterusnya yang boleh dimainkan |

</div>

**Cara M dipetakan kepada big blind:** tanpa ante, kos satu pusingan meja ialah small blind campur big blind — kira-kira 1.5 big blind — jadi ==M ≈ stack anda dalam big blind ÷ 1.5==. M 10 lebih kurang 15 big blind; M 5 lebih kurang 7–8. Tambah ante dan kos setiap pusingan meja meningkat, jadi stack big blind yang sama mempunyai M yang *lebih rendah* — itulah sebabnya level ber-ante memaksa tindakan lebih awal. Pemain moden biasanya cuma mengira big blind, tetapi M idea yang sama dalam unit berbeza, dan ia mengambil kira ante secara automatik. Harrington kemudian menambah "effective M" (diselaraskan ikut bilangan pemain di meja), kerana meja short-handed menghabiskan stack anda dengan blind lebih cepat.

---

## Bilakah Perlu All-In? Shove First-In Ikut Saiz Stack dan Posisi

**Apabila anda pemain pertama masuk pot dan stack anda short, keputusan anda cuma shove atau fold — dan seluas mana anda shove bergantung pada saiz stack dan, sama pentingnya, posisi anda.** Semakin lewat posisi anda, semakin sedikit pemain di belakang yang mungkin mendapat tangan besar — jadi peluang semua orang fold meningkat, dan bersamanya ==fold equity== yang membuatkan shove itu berbaloi. Sebab itulah ==shoving range anda melebar secara mendadak ke arah button==.

- **Posisi awal, 12–15bb:** paling ketat. Seluruh meja berada di belakang anda, jadi shove range yang kuat dan kebanyakannya linear, dan fold selebihnya.
- **Cutoff dan button, 10–15bb:** jauh lebih luas. Dengan dua atau tiga pemain lagi untuk bertindak, anda shove untuk mencuri blind dan ante, dan anda boleh shove banyak tangan yang sepatutnya fold mudah di UTG.
- **Small blind, mana-mana short stack:** paling luas antara semua first-in — hanya big blind boleh call, dan anda sudah ada wang dalam pot. Dengan short stack di small blind, fold selalunya itulah kesilapannya.
- **Bawah ~6bb:** posisi kurang penting. Anda perlu masukkan cip menentang hampir sesiapa sebelum fold equity anda lenyap; ambil peluang munasabah seterusnya dan bukannya menunggu peluang yang sempurna.

Perhatikan perangkap yang dielakkan di sini: ==short stack yang hanya shove tangan premium dari setiap posisi akan habis dimakan blind==. Blind dan ante itulah hadiahnya, dan mencurinya ialah sebahagian besar keuntungan short stack.

---

## Shove vs Call Shove: Kenapa Dua Range Berbeza?

**Shoving range first-in anda dan range untuk call all-in orang lain tidak sama — dan calling range jauh lebih ketat.** Inilah perbezaan yang paling kerap terlepas pandang oleh pemula, dan ia menyebabkan banyak tournament hilang.

Apabila anda ==shove first-in==, anda menang dengan dua cara: semua orang fold (fold equity), atau anda di-call dan tangan anda bertahan. Apabila anda ==call== shove, anda hanya menang dengan satu cara — tangan anda mesti cukup baik, kerana tiada lagi fold equity untuk dikutip. Jadi:

- **Shove first-in:** luas, terutamanya di posisi lewat — sebahagiannya anda main untuk fold.
- **Call shove:** ketat — anda perlukan tangan yang mengalahkan *range* pemain yang shove, bukan sekadar tangan rawak.

"Ketat" bermaksud lebih ketat daripada shoving range anda, bukan "hanya apabila saya pasti saya di depan." Call ialah soal harga: di big blind menentang shove 10bb, anda mempertaruhkan 9bb untuk memenangi pot 20.5bb, jadi palangnya ==43.9%== equity menentang range itu. Pair kecil dan ace lemah ialah *teras* calling range big blind atas sebab itulah — malah menentang AKo, hampir di puncak shoving range sesiapa pun, 22 mencatat ==52.65%==. Kebocorannya bukan pada kelas tangan; ia pada andaian "mungkin coin flip" dan bukannya menyemak angkanya (lihat [bila patut fold](/ms/blog/holdem-when-to-fold)).

Satu ayat untuk diingat: ==jadilah orang yang shove, bukan orang yang call.== Keagresifan first-in ialah sumber keuntungan short stack; hero-call all-in ialah tempat short stack mati.

---

## Bagaimana Menggunakan Push/Fold Chart? (dan Batasannya)

**Push/fold chart menunjukkan tangan mana untuk shove atau call pada saiz stack tertentu, berdasarkan Nash equilibrium — tetapi ia garis asas, bukan kitab suci, dan ia berubah ikut ante, saiz meja dan ICM.** Chart biasanya datang dalam dua bahagian: chart **pusher** (apa yang di-shove first-in) dan chart **caller** (apa yang digunakan untuk call shove), sepadan dengan pembahagian shove-vs-call di atas.

Gunakannya untuk membina gerak hati, bukan sebagai hukum alam:

- **Ia mengandaikan syarat tertentu.** Nash chart standard mengabaikan ante dan ICM; tambah ante dan shove anda melebar, tambah [tekanan bubble/ICM](/ms/blog/holdem-bubble) dan call anda menjadi jauh lebih ketat.
- **Ia model heads-up / blind sahaja.** Situasi sebenar ada beberapa pemain lagi untuk bertindak, bacaan terhadap lawan, dan pay jump yang tidak dapat dilihat oleh chart.
- **Pengajaran yang boleh dipercayai ialah bentuknya**, bukan tangan yang tepat: shove lebih luas di posisi lewat, call lebih ketat daripada anda shove, dan shove lebih banyak apabila stack anda jatuh. Untuk angka sebenar dalam situasi ICM atau bubble yang nyata, masukkan stack dan payout anda ke dalam [kalkulator ICM](/ms/calculator) dan bukannya bergantung pada range yang dicetak.

*(Satu nuansa bagi yang ingin tahu: pada 10–15 big blind, pemain kuat kadangkala mencampurkan min-raise kecil dengan tangan premium untuk memancing shove daripada tangan yang didominasi. Ia boleh menghasilkan lebih daripada shove tulen — tetapi ia tambahan lanjutan. Push/fold ialah rangka kerja yang boleh dipercayai; kuasainya dahulu.)*

---

## Short Stack di Bubble: Bagaimana ICM Mengubahnya?

**Inilah bahagian yang berlawanan dengan gerak hati: di bubble, short stack yang jelas selalunya ada bubble factor lebih rendah daripada medium stack (stack sederhana) — jadi anda boleh berjudi lebih, tetapi hanya dengan shove, bukan dengan call.** Semua orang menyangka short stack paling tertekan. Ikut matematiknya, tidak: anda memang sudah berkemungkinan tersingkir, dan menggandakan stack sangat membantu anda, jadi risk premium anda lebih rendah daripada medium stack yang terperangkap ([panduan bubble](/ms/blog/holdem-bubble) menghuraikan kenapa medium stack itulah tahanan sebenar).

Maksudnya dalam praktik:

- **Terus shove first-in** untuk mencuri daripada medium stack yang fold semuanya demi bertahan — merekalah sasaran yang sempurna.
- **Anda boleh menunggu jika ada yang lebih short.** Jika dua pemain ada cip lebih sedikit daripada anda di money bubble, anda boleh fold spot marginal dan biarkan mereka tersingkir dahulu, naik tangga payout secara percuma — tetapi hanya jika anda benar-benar ada cip untuk menunggu, bukan jika andalah yang paling short.
- **Jangan jadikan ICM alasan untuk fold semuanya.** Fold sehingga tiada fold equity semata-mata untuk "menyelinap ke min-cash" menukar tournament itu dengan hadiah paling kecilnya. Hormati pay jump, kemudian kembali mengumpul cip.

Matematik sebenar di sebalik "berapa rendah bubble factor saya" ada dalam [panduan ICM](/ms/blog/holdem-icm) — jalankan situasi tepat anda melalui [kalkulator](/ms/calculator) apabila ia penting.

---

## 5 Kesilapan Short Stack yang Membunuh Tournament Anda

1. **Open-limp.** Ia melepaskan fold equity anda dan membesarkan pot yang tidak mampu anda main postflop. Short stack raise atau fold — dan biasanya raise itu ialah shove.
2. **Min-raise lalu fold dengan tangan sampah.** Raise suku daripada stack anda kemudian fold kepada shove ialah gabungan paling buruk daripada kedua-duanya. Jika sesuatu tangan tidak cukup baik untuk all-in, ia tidak cukup baik untuk raise.
3. **Call all-in ikut gerak hati.** Calling range anda mesti kekal lebih ketat daripada shoving range — tetapi "mungkin flip" ialah tekaan, bukan alasan. Kira harganya: di big blind, small blind yang mati bermakna flip sebenar sudah melepasi palang chip EV, dan tekanan pay jump, bukan flip itu sendiri, yang boleh menukarnya menjadi fold. Meneka membocorkan cip ke kedua-dua arah.
4. **Membiarkan blind menghabiskan stack.** Menunggu ace sehingga anda tinggal tiga big blind membuang fold equity yang menjadikan shove menguntungkan. Bertindak semasa all-in anda masih menakutkan orang (lazimnya, sebelum anda jatuh bawah ~8–10bb).
5. **Mengabaikan posisi.** Shove premium sahaja dari button, atau shove terlalu luas di UTG, kedua-duanya membocorkan cip. Luaskan di posisi lewat, ketatkan di posisi awal.

Elakkan lima perkara ini dan anda sudah mengatasi kebanyakan pemain lain, yang melayan short stack seperti stack yang dalam sehinggalah mereka tersingkir.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-bubble | Cara Main Bubble dalam Poker — Strategi Big, Medium & Short Stack | /images/holdem-bubble-hero.webp
/ms/blog/holdem-icm | Apakah Itu ICM dalam Poker? Independent Chip Model Dijelaskan | /images/holdem-icm-hero.webp
:::

## Soalan Lazim

**Q. Berapa big blind dikira short stack?**

A. Secara umum, bawah kira-kira 20–25 big blind dikira "short," dan permainan push/fold mengambil alih dari lebih kurang 15 big blind ke bawah, menjadi hampir shove atau fold tulen menjelang 10. Ini zon, bukan peraturan tegar — ante, saiz meja dan ICM semuanya mengalihkannya. Perkara utamanya: bawah ~15 big blind anda kebanyakannya memutuskan sama ada mahu all-in sebelum flop, bukan bermain poker postflop.

**Q. Apakah itu strategi push/fold?**

A. Push/fold ialah strategi short stack di mana, apabila anda pemain pertama masuk pot, pilihan anda hanya all-in atau fold — tiada limp, tiada raise kecil. Shove menjaga fold equity anda (lawan fold dan anda memenangi blind) dan mengelakkan anda dikalahkan selepas flop dengan stack yang terlalu kecil untuk bergerak.

**Q. Apakah maksud "all-in or fold" dalam poker?**

A. "All-in or fold" ialah idea yang sama dengan push/fold: apabila stack anda short dan anda pemain pertama masuk pot, dua pilihan anda hanyalah all-in atau fold — tiada limp atau raise kecil. Ia juga nama satu format dalam talian yang pantas (GGPoker's All-in or Fold) di mana setiap keputusan preflop benar-benar shove (atau "jam") atau fold. Apa pun, logik short stack tetap sama: jaga fold equity anda dengan shove, dan jangan sekali-kali membocorkan cip pada raise yang tidak mampu anda pertahankan.

**Q. Bagaimana anda patut bertindak balas terhadap all-in shove?**

A. Fold jauh lebih kerap daripada anda shove — calling range anda jauh lebih ketat daripada shoving range. Sebaik sahaja anda call all-in, fold equity anda hilang, jadi tangan anda mesti benar-benar mengalahkan *range* pemain yang shove, bukan sekadar nampak boleh dimainkan. Letakkan angka padanya: di big blind menentang shove 10bb, anda mempertaruhkan 9bb untuk memenangi pot 20.5bb, jadi anda perlukan ==43.9%== equity — palang yang selalunya dilepasi oleh pair kecil dan ace lemah (22 mencatat ==52.65%== walaupun menentang AKo). Call apabila equity anda melepasi palang itu, bukan hanya apabila anda pasti anda di depan.

**Q. Patutkah anda limp dengan short stack?**

A. Hampir tidak pernah apabila anda pemain pertama masuk. Open-limp melepaskan fold equity dan membina pot yang tidak dapat anda kendalikan postflop. Dengan short stack, permainan standard ialah raise atau fold, dan dengan 15 big blind atau kurang, raise itu biasanya all-in. (Complete dari small blind di belakang limper lain dengan stack yang sangat kecil ialah pengecualian yang jarang.)

**Q. Adakah min-raise pernah betul ketika short stack?**

A. Sebagai pilihan asas pemula, tidak — min-raise lalu fold ialah kebocoran klasik. Sebagai langkah lanjutan pada 10–15 big blind, pemain kuat kadangkala min-raise tangan premium untuk memancing shove daripada tangan yang lebih lemah. Kuasai push/fold yang boleh dipercayai dahulu; tambah variasi min-raise hanya selepas ia menjadi automatik.

**Q. Apakah itu M-ratio dalam poker?**

A. M-ratio ialah stack anda dibahagi dengan kos satu pusingan meja (small blind + big blind + ante) — berapa pusingan anda boleh bertahan dengan hanya fold. Zon Harrington ialah Zon hijau (20+), Zon kuning (10 hingga bawah 20), Zon oren (6 hingga bawah 10), Zon merah (1 hingga bawah 6) dan Zon mati (bawah 1). Semakin rendah M anda, semakin anda perlu mengambil spot shove atau fold. Tanpa ante, M lebih kurang sama dengan big blind anda ÷ 1.5.

**Q. Apakah itu fold equity dan kenapa ia mengecil?**

A. Fold equity ialah keuntungan yang anda buat apabila lawan fold kepada bet atau shove anda. Apabila stack anda short dan anda all-in, fold equity ialah senjata utama anda — blind dan ante percuma yang anda kutip. Ia mengecil apabila stack anda jatuh kerana lawan mendapat harga yang lebih baik untuk call; bawah kira-kira 5 big blind mereka call begitu luas sehingga all-in anda hampir tidak membuatkan sesiapa fold.

**Q. Adakah strategi short stack berbeza dalam cash game?**

A. Ya. Dalam cash game anda boleh rebuy atau top up kepada stack penuh pada bila-bila masa, dan biasanya tiada ante atau pay jump, jadi menjadi short hanyalah keadaan sementara yang anda betulkan dengan menambah cip — bukan satu mod permainan. Push/fold short stack dalam tournament wujud kerana anda tidak boleh rebuy di peringkat lewat dan ICM menjadikan kelangsungan berharga. Panduan ini tentang tournament.

---

## 3 Perkara untuk Diingat

1. **Shove first-in, dan jaga fold equity anda.** Jangan sekali-kali open-limp atau min-raise lalu fold. Blind dan ante percuma ialah sebahagian besar keuntungan short stack.
2. **Call lebih ketat daripada anda shove.** Dua range berbeza — shove first-in luas (anda juga menang apabila mereka fold); call ketat (anda hanya menang di showdown).
3. **Bertindak sebelum fold equity anda mati.** Jangan biarkan blind menghabiskan stack sementara menunggu tangan. Luaskan shove di posisi lewat, ketatkan di posisi awal, dan masukkan cip semasa all-in anda masih menakutkan orang.

Permainan short stack ialah tempat matematik tournament menjadi refleks — gandingkannya dengan [ICM](/ms/blog/holdem-icm) dan [strategi bubble](/ms/blog/holdem-bubble) untuk tahu bukan sahaja *cara* untuk shove, tetapi *bila* ia paling penting.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Main Bubble</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tempat shove short stack anda paling bermakna</div>
  </a>
  <a href="/ms/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">ICM Dijelaskan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa bertahan boleh mengatasi cip</div>
  </a>
  <a href="/ms/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bila Patut Fold dalam Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Apabila harga menyuruh anda fold</div>
  </a>
  <a href="/ms/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Alat Percuma</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kalkulator ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kira spot shove/call sebenar anda</div>
  </a>
</div>
`.trim(),
};
