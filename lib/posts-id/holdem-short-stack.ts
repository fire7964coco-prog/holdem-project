import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "Cara memainkan short stack di poker — strategi push/fold berdasarkan kedalaman stack",
  seoTitle: "Cara main short stack di poker (push/fold)",
  desc: "Short stack di turnamen? Pelajari push/fold berdasarkan kedalaman stack — kapan jam di 15, 10, dan 5 big blind, zona M-ratio, plus twist ICM di bubble.",
  tldr: "Short stack (kira-kira di bawah 15–20 big blind) tak bisa main poker postflop normal, jadi ia beralih ke push/fold: masuk all-in first-in untuk menjaga fold equity Anda, dan jangan pernah open-limp atau min-raise-lalu-fold. Shove lebih lebar dari posisi akhir, jaga calling range lebih ketat daripada shoving range Anda, dan jangan blind down sampai habis 'menunggu tangan bagus' — fold equity adalah senjata Anda, dan ia lenyap di bawah sekitar 8 big blind.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 mnt",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "Setumpuk kecil chip turnamen di samping tumpukan besar di atas felt hijau dengan jam turnamen di belakang — momen seorang pemain short stack harus masuk all-in atau fold",
  tags: ["short stack strategy", "how to play a short stack", "push fold strategy", "push fold chart", "M ratio poker", "short stack poker", "poker all in strategy", "fold equity"],
  content: `
Paling cepat saya pernah beralih dari "masih hidup" ke "keluar" adalah malam saat saya terus min-raise stack 12 big blind, fold ke re-raise setiap kali, dan bocor satu setengah blind tiap orbit sampai saya terlalu pendek untuk menakuti siapa pun. Ketika akhirnya saya shove, saya punya empat big blind dan di-call oleh dua pemain. ==Saya tidak sedang sial — saya memainkan short stack seolah itu stack dalam.== Begitu stack Anda mengecil, seluruh permainan berubah, dan pemain yang tahu aturan barunya menguasai meja.

==Short stack punya satu tugas: masuk all-in lebih dulu, jaga fold equity Anda, dan pilih momen yang tepat sebelum blind mengambilnya lebih dulu.== Inilah poker push/fold, dan ia adalah edge paling mudah dipelajari di turnamen — seperangkat aturan bersih yang bisa Anda terapkan begitu stack Anda turun. Panduan ini adalah bab aksi dari trilogi matematika turnamen: [ICM](/id/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") adalah teorinya, [bubble](/id/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") adalah spot-nya, dan permainan short stack adalah gerakan yang benar-benar Anda lakukan di [turnamen](/id/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### Aturan short stack sekilas

:::stripe
shove first-in | jaga fold equity Anda
call lebih ketat | daripada Anda shove
~8bb | fold equity memudar di bawah sini — bertindak lebih awal
:::

---

## Apa Itu Short Stack di Poker? (Dan Berapa Big Blind)

**Short stack adalah stack apa pun yang terlalu kecil untuk main poker postflop normal — secara luas di bawah sekitar 20–25 big blind, dengan push/fold mengambil alih dari sekitar 15 big blind ke bawah.** Ini bukan batas kaku; ini adalah zona di mana pilihan Anda runtuh. Dengan 60 big blind Anda bisa raise, call, float, dan mengakali orang setelah flop. Dengan 12, sebagian besar itu hilang — Anda memutuskan, kebanyakan sebelum flop, apakah masuk all-in atau fold.

Inilah peta praktis berdasarkan kedalaman stack (perkiraan no-ante, full-ring — ante menggeser setiap band sedikit lebih rendah):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stack | Mode bermain | Senjata utama Anda |
|:--|:--|:--|
| 25bb+ | Masih permainan postflop sungguhan — raise/fold, kadang call | Playability |
| 20bb | Raise-atau-fold; re-shove all-in atas open dan limper | Leverage re-jam |
| 15bb | Push/fold mengambil alih — jam first-in, kebanyakan dari posisi akhir | Fold equity |
| 10bb | Push/fold murni; shove range yang lebar dan masuk akal first-in | Fold equity (masih kuat) |
| ≤5bb | Shove-atau-fold sekarang — fold equity memudar, masukkan chip Anda | Tangan playable apa pun, cepat |

</div>

Kesalahan terbesar adalah tidak tahu Anda ada di baris yang mana. Stack 12 big blind yang terus open dan fold sedang memainkan permainan 40 big blind dan kalah sedikit tiap orbit sampai ia jadi baris ≤5bb tanpa leverage tersisa.

---

## Mengapa Short Stack Main Push/Fold: Fold Equity Dijelaskan

**Masuk all-in first-in berhasil karena ia memaksa lawan ke keputusan semua-atau-tidak-sama-sekali, sehingga mereka fold tangan yang akan dengan senang mereka mainkan melawan raise kecil — dan fold itu memenangkan blind dan ante untuk Anda secara gratis.** Itulah ==fold equity==: keuntungan yang Anda dapat tiap kali semua orang fold, sebelum kartu apa pun ditunjukkan.

Pikirkan apa yang dilakukan min-raise saat Anda pendek: ia mengikat chip, mengundang re-raise yang tak bisa Anda call, dan membiarkan lawan merealisasikan equity mereka dengan murah. Sebuah ==shove== melakukan kebalikannya. Ia berkata "call demi turnamen Anda atau fold," dan sebagian besar tangan fold. Saat Anda mengambil blind dan ante tanpa lawan cukup sering, ==Anda profit bahkan di saat Anda di-call dan kalah==, karena pot gratis itu lebih dari sekadar menutupinya.

Jebakannya adalah fold equity ==meluruh saat stack Anda menyusut==. Di 12–15 big blind, lawan banyak fold — shove Anda menakutkan. Ia mulai memudar sekitar 8–10 big blind, dan pada 4–5 mereka mendapat harga yang begitu bagus sehingga mereka call dengan hampir apa saja — fold equity Anda nyaris habis. Itulah seluruh alasan untuk tidak menunggu: ==shove selagi all-in Anda masih menakuti orang==, bukan setelahnya.

---

![Setumpuk chip pendek didorong all-in melintasi felt sementara tumpukan lebih besar memutuskan apakah akan call, jam turnamen menyala di belakang](/images/holdem-short-stack-shove.webp "Push/fold short stack: all-in memaksa keputusan ya-atau-tidak dan memenangkan blind saat semua orang fold")

## M-Ratio (Zona Harrington): Hijau, Kuning, Oranye, Merah, Mati

**M-ratio mengukur berapa banyak orbit yang bisa Anda bertahan dengan fold — stack Anda dibagi biaya satu putaran penuh blind dan ante — dan ia mengurutkan stack Anda ke dalam lima zona.** Dipopulerkan oleh Dan Harrington, ==M = stack Anda ÷ (small blind + big blind + semua ante per orbit)==. Ia menjawab "berapa lama saya bisa duduk di sini tanpa melakukan apa-apa?" — dan makin kecil ia menjadi, makin Anda harus bertindak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Zona | M-ratio | Kira-kira (tanpa ante) | Cara bermain |
|:--|:--:|:--:|:--|
| 🟢 Hijau | 20+ | ~30bb+ | Persenjataan penuh, main poker normal |
| 🟡 Kuning | 10–20 | ~15–30bb | Ketatkan, mulai cari peluang shove |
| 🟠 Oranye | 6–10 | ~9–15bb | Push/fold; agresi first-in, curi blind |
| 🔴 Merah | 1–5 | ~1,5–8bb | Shove-atau-fold tangan yang masuk akal apa pun |
| ⚫ Mati | di bawah 1 | di bawah ~1,5bb | Shove dua kartu apa pun, spot playable berikutnya |

</div>

**Bagaimana M dipetakan ke big blind:** tanpa ante, satu orbit berbiaya small blind ditambah big blind — sekitar 1,5 big blind — jadi ==M ≈ stack Anda dalam big blind ÷ 1,5==. M sebesar 10 kira-kira 15 big blind; M sebesar 5 kira-kira 7–8. Tambahkan ante dan tiap orbit berbiaya lebih, jadi stack big blind yang sama punya M yang *lebih rendah* — yang persis kenapa level ante memaksa aksi lebih cepat. Pemain modern biasanya cukup menghitung big blind, tapi M adalah ide yang sama dalam unit berbeda, dan ia menangkap ante secara otomatis. Harrington kemudian menambahkan "effective M" (disesuaikan dengan berapa banyak pemain di meja), karena meja short-handed membuat blind menggerus Anda lebih cepat.

---

## Kapan Masuk All-In: Shoving First-In Berdasarkan Kedalaman Stack dan Posisi

**Saat Anda pemain pertama di pot dan pendek, keputusan Anda adalah shove atau fold — dan seberapa lebar Anda shove tergantung pada ukuran stack dan, sama pentingnya, posisi Anda.** Makin akhir posisi Anda, makin sedikit pemain tersisa di belakang untuk bangun dengan tangan besar, dan makin berharga blind relatif terhadap stack Anda — jadi ==shoving range Anda melebar drastis menuju button==.

- **Posisi awal, 12–15bb:** paling ketat. Anda punya seluruh meja di belakang, jadi jam range yang kuat, sebagian besar linear, dan fold sisanya.
- **Cutoff dan button, 10–15bb:** jauh lebih lebar. Dengan satu atau dua pemain tersisa untuk bertindak, Anda shove untuk mencuri blind dan ante, dan Anda bisa jam banyak tangan yang akan jadi fold mudah dari under the gun.
- **Small blind, short stack apa pun:** paling lebar dari semua first-in — hanya big blind yang bisa call, dan Anda sudah punya uang di pot. Short stack di small blind, fold sering jadi kesalahannya.
- **Di bawah ~6bb:** posisi kurang penting. Anda perlu memasukkan chip melawan hampir siapa pun sebelum fold equity Anda lenyap; ambil spot yang masuk akal berikutnya daripada menunggu yang sempurna.

Perhatikan jebakan yang ini hindari: ==short stack yang hanya shove tangan premium dari setiap posisi akan blind out==. Blind dan ante adalah hadiahnya, dan mencurinya adalah sebagian besar profit sebuah short stack.

---

## Shoving vs. Call Sebuah Shove: Dua Range Berbeda

**Shoving range first-in Anda dan range untuk call all-in orang lain tidaklah sama — dan calling range jauh lebih ketat.** Inilah pembedaan yang paling sering dilewatkan pemula, dan ia merugikan banyak turnamen.

Saat Anda ==shove first-in==, Anda menang dua cara: semua orang fold (fold equity), atau Anda di-call dan tangan Anda bertahan. Saat Anda ==call== sebuah shove, Anda hanya menang satu cara — tangan Anda harus cukup bagus, karena tak ada fold equity tersisa untuk dikumpulkan. Jadi:

- **Shoving first-in:** lebar, terutama di posisi akhir — Anda sebagian bermain demi fold.
- **Call sebuah shove:** ketat — Anda butuh tangan yang mengalahkan *range* si penyhove, bukan sekadar tangan acak. Call dengan tangan seperti ace lemah atau pair kecil "karena mungkin coin flip" adalah leak klasik, sebab coin flip untuk bangkrut adalah kesepakatan buruk di turnamen (lihat [kapan harus fold](/id/blog/holdem-when-to-fold)).

Satu kalimat untuk diingat: ==jadilah yang shove, bukan yang call.== Agresi first-in adalah tempat profit short stack hidup; hero-call all-in adalah tempat short stack mati.

---

## Cara Memakai Push/Fold Chart (dan Batasnya)

**Push/fold chart menunjukkan tangan mana yang di-jam atau di-call pada kedalaman stack tertentu, berdasarkan keseimbangan Nash — tapi ia adalah patokan, bukan kitab suci, dan ia bergeser dengan ante, ukuran meja, dan ICM.** Sebuah chart biasanya datang dalam dua bagian: chart **pusher** (apa yang di-shove first-in) dan chart **caller** (apa yang di-pakai untuk call sebuah shove), cocok dengan pembagian shove-vs-call di atas.

Pakai untuk membangun intuisi, bukan sebagai hukum alam:

- **Ia mengasumsikan kondisi spesifik.** Chart Nash standar mengabaikan ante dan ICM; tambahkan ante dan shove Anda jadi lebih lebar, tambahkan [tekanan bubble/ICM](/id/blog/holdem-bubble) dan call Anda jadi jauh lebih ketat.
- **Ia adalah model heads-up / hanya-blind.** Spot nyata punya banyak pemain tersisa untuk bertindak, read, dan lonjakan bayaran yang tak bisa dilihat sebuah chart.
- **Kesimpulan yang andal adalah bentuknya**, bukan tangan persisnya: shove lebih lebar di posisi akhir, call lebih ketat daripada Anda shove, dan jam lebih banyak saat stack Anda turun. Untuk angka sebenarnya di spot ICM atau bubble nyata, masukkan stack dan payout Anda ke [kalkulator ICM](/calculator) daripada memercayai range yang tercetak.

*(Satu nuansa untuk yang penasaran: di 10–15 big blind, pemain kuat kadang mencampurkan min-raise kecil dengan tangan premium untuk memancing shove dari tangan yang terdominasi. Ia bisa menghasilkan lebih dari sekadar jamming murni — tapi itu tambahan tingkat lanjut. Push/fold adalah kerangka yang andal; kuasai dulu.)*

---

## Short Stack di Bubble: Twist ICM

**Inilah bagian yang berlawanan intuisi: di bubble, short stack yang jelas sering punya bubble factor lebih rendah daripada medium stack — jadi Anda bisa berjudi lebih banyak, tapi hanya dengan shove, bukan dengan call.** Semua orang berasumsi short stack paling tertekan. Menurut matematikanya, bukan: Anda memang sudah kemungkinan besar bangkrut, dan double up membantu Anda luar biasa, jadi risk premium Anda lebih rendah daripada medium stack yang terjebak ([panduan bubble](/id/blog/holdem-bubble) menguraikan kenapa medium stack adalah tahanan sesungguhnya).

Apa artinya dalam praktik:

- **Terus shove first-in** untuk mencuri dari medium stack yang fold semuanya demi bertahan — mereka target sempurna.
- **Anda bisa menunggu jika yang lain lebih pendek.** Jika dua pemain punya chip lebih sedikit dari Anda di money bubble, Anda bisa fold spot marginal dan biarkan mereka bangkrut lebih dulu, naik tangga secara gratis — tapi hanya jika Anda benar-benar punya chip untuk menunggu, bukan jika Anda yang paling pendek.
- **Jangan jadikan ICM alasan untuk fold semuanya.** Fold turun sampai tak ada fold equity untuk "menyelinap ke min-cash" menukar turnamen dengan hadiah terkecilnya. Hormati lonjakan bayaran, lalu kembali menumpuk chip.

Matematika sebenarnya di balik "seberapa lebih rendah bubble factor saya" ada di [panduan ICM](/id/blog/holdem-icm) — jalankan spot persis Anda melalui [kalkulator](/calculator) saat itu penting.

---

## 5 Kesalahan Short Stack yang Membunuh Turnamen Anda

1. **Open-limping.** Ia menyerahkan fold equity Anda dan menggembungkan pot yang tak bisa Anda mainkan postflop. Short stack raise atau fold — dan biasanya raise itu adalah shove.
2. **Min-raise-lalu-fold dengan tangan sampah.** Raise seperempat stack Anda dan fold ke shove adalah yang terburuk dari kedua dunia. Jika sebuah tangan tak cukup bagus untuk masuk all-in, ia tak cukup bagus untuk di-raise.
3. **Call all-in terlalu lebar.** Calling range Anda harus lebih ketat daripada shoving range Anda. "Mungkin ini flip" adalah cara short stack bangkrut — flip menuju eliminasi adalah kesepakatan yang merugi.
4. **Blind down sampai habis.** Menunggu ace sampai Anda punya tiga big blind membuang fold equity yang membuat shove profit. Bertindak selagi all-in Anda masih menakuti orang (umumnya, sebelum Anda turun di bawah ~8–10bb).
5. **Mengabaikan posisi.** Jam hanya premium dari button, atau shove terlalu lebar dari under the gun, keduanya membocorkan chip. Lebarkan di posisi akhir, ketatkan di posisi awal.

Hindari lima ini dan Anda sudah akan mengalahkan sebagian besar peserta, yang memperlakukan short stack seperti stack dalam sampai persis ketika mereka bangkrut.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-bubble | Cara Bermain di Bubble | /images/holdem-bubble-hero.webp
/id/blog/holdem-icm | ICM Dijelaskan — Kenapa Chip Bukan Uang | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. Berapa big blind sebuah short stack?**

A. Secara luas, di bawah sekitar 20–25 big blind adalah "pendek," dan permainan push/fold mengambil alih dari sekitar 15 big blind ke bawah, menjadi nyaris murni shove-atau-fold pada 10. Ini adalah zona, bukan aturan kaku — ante, ukuran meja, dan ICM semua menggesernya. Poin kuncinya adalah di bawah ~15 big blind Anda kebanyakan memutuskan apakah masuk all-in sebelum flop, bukan main poker postflop.

**Q. Apa itu strategi push/fold?**

A. Push/fold adalah strategi short stack di mana, saat Anda pertama masuk pot, satu-satunya pilihan Anda adalah masuk all-in atau fold — tanpa limping, tanpa raise kecil. Shoving menjaga fold equity Anda (lawan fold dan Anda memenangkan blind) dan menghindari diakali setelah flop dengan stack yang terlalu kecil untuk bermanuver.

**Q. Haruskah Anda pernah limp dengan short stack?**

A. Hampir tak pernah saat Anda pertama masuk. Open-limping menyerahkan fold equity dan membangun pot yang tak bisa Anda navigasi postflop. Short stack, permainan standarnya adalah raise-atau-fold, dan dengan 15 big blind atau kurang raise itu biasanya all-in. (Complete dari small blind di belakang limper lain dengan stack mungil adalah pengecualian langka.)

**Q. Apakah min-raise pernah benar saat short stack?**

A. Sebagai default pemula, tidak — min-raise-lalu-fold adalah leak klasik. Sebagai gerakan tingkat lanjut di 10–15 big blind, pemain kuat kadang min-raise tangan premium untuk memancing shove dari tangan lebih buruk. Pelajari dulu push/fold yang andal; tambahkan kerutan min-raise hanya setelah itu jadi otomatis.

**Q. Apa itu M-ratio di poker?**

A. M-ratio adalah stack Anda dibagi biaya satu orbit (small blind + big blind + ante) — berapa banyak putaran yang bisa Anda bertahan dengan fold. Zona Harrington adalah Hijau (20+), Kuning (10–20), Oranye (6–10), Merah (1–5), dan Mati (di bawah 1). Makin rendah M Anda, makin banyak spot shove-atau-fold yang harus Anda ambil. Tanpa ante, M kira-kira big blind Anda ÷ 1,5.

**Q. Apa itu fold equity dan mengapa ia menyusut?**

A. Fold equity adalah keuntungan yang Anda dapat saat lawan fold ke taruhan atau shove Anda. Saat Anda pendek dan masuk all-in, fold equity adalah senjata utama Anda — blind dan ante gratis yang Anda ambil. Ia menyusut saat stack Anda turun karena lawan mendapat harga lebih baik untuk call; di bawah sekitar 5 big blind mereka call begitu lebar sehingga all-in Anda nyaris tak membuat siapa pun fold.

**Q. Apakah strategi short stack berbeda di cash game?**

A. Ya. Di cash game Anda bisa rebuy atau top up ke stack penuh kapan saja, dan biasanya tak ada ante atau lonjakan bayaran, jadi menjadi pendek adalah keadaan sementara yang Anda perbaiki dengan reload — bukan mode bermain. Push/fold short stack turnamen ada karena Anda tak bisa rebuy di akhir dan ICM membuat bertahan hidup berharga. Panduan ini tentang turnamen.

---

## 3 Hal yang Harus Diingat

1. **Shove first-in, dan jaga fold equity Anda.** Jangan pernah open-limp atau min-raise-lalu-fold. Blind dan ante gratis adalah sebagian besar profit sebuah short stack.
2. **Call lebih ketat daripada Anda shove.** Dua range berbeda — shove first-in lebar (Anda juga menang saat mereka fold); call ketat (Anda hanya menang di showdown).
3. **Bertindak sebelum fold equity Anda mati.** Jangan blind down sampai habis menunggu tangan bagus. Lebarkan shove Anda di posisi akhir, ketatkan di posisi awal, dan masukkan chip selagi all-in Anda masih menakuti orang.

Permainan short stack adalah tempat matematika turnamen menjadi memori otot — pasangkan dengan [ICM](/id/blog/holdem-icm) dan [strategi bubble](/id/blog/holdem-bubble) untuk tahu bukan sekadar *bagaimana* shove, tapi *kapan* ia paling penting.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Bermain di Bubble</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Di mana shove short-stack Anda paling penting</div>
  </a>
  <a href="/id/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM Dijelaskan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa bertahan bisa mengalahkan chip</div>
  </a>
  <a href="/id/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kapan Harus Fold di Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa call habis-habisan saat pendek adalah leak</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Alat Gratis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kalkulator ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Hitung spot shove/call Anda yang sebenarnya</div>
  </a>
</div>
`.trim(),
};

export default POST;
