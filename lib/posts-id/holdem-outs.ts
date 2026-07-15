import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Cara menghitung outs di poker — keterampilan di balik setiap keputusan odds",
  seoTitle: "Berapa kartu yang benar-benar menyelamatkan Anda? — Menghitung outs",
  desc: "Pelajari cara menghitung outs poker dengan cepat — chart outs per draw, tabel outs ke odds, dan outs kotor yang diam-diam menguras chip Anda.",
  tldr: "Sebuah out adalah kartu mana pun yang tersisa di deck yang mengubah tangan Anda menjadi kemungkinan pemenang. Hitung, lalu konversi: kalikan outs dengan 4 di flop atau dengan 2 di turn untuk mendapat persen kasar Anda. Flush draw adalah 9 outs ≈ 36% hingga river.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infografik menghitung outs — A♥ K♥ melawan flop Q♠ J♦ 9♥ di mana kartu sepuluh mana pun melengkapi nut straight",
  tags: ["outs", "cara menghitung outs di poker", "chart outs poker", "outs flush draw", "outs straight draw", "outs ke odds", "outs kotor", "aturan 4 dan 2"],
  content: `
Di tahun pertama saya di meja, saya "memainkan draw" tanpa pernah benar-benar menghitungnya. Flush draw dan gutshot terasa mirip saja — keduanya "kartu yang mungkin datang" — jadi saya call sama saja pada keduanya dan bingung kenapa terus kalah. Solusinya bukan kursus strategi. Solusinya adalah kebiasaan lima menit: ==berhenti, dan benar-benar hitung kartu yang menyelamatkan saya.==

Kebiasaan itu disebut menghitung **outs** — jawaban nyata poker untuk "menghitung kartu" — dan itulah satu-satunya keterampilan yang mendasari setiap keputusan odds di poker. Sebelum Anda bisa bertanya "apakah call ini menguntungkan?", Anda harus menjawab "berapa kartu yang memenangkan tangan untuk saya?" Panduan ini adalah bagian menghitungnya — [chart odds dan probabilitas poker](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") adalah referensi di baliknya, dan [pot odds](/id/blog/holdem-pot-odds) adalah apa yang Anda lakukan dengan angka itu setelah Anda memilikinya.

---

### Outs sekilas

:::stripe
9 | Outs dalam flush draw
8 | Outs dalam open-ended straight draw
×4 / ×2 | Kalikan outs di flop / turn untuk persen Anda
:::

---

## Apa Itu Outs di Poker?

**Sebuah out adalah kartu mana pun yang masih ada di deck yang mengubah tangan Anda menjadi kemungkinan pemenang.** Jika Anda memegang flush draw, setiap kartu tersisa dengan jenis Anda adalah out — dapatkan satu dan Anda punya flush.

Kata "kemungkinan" di situ bekerja diam-diam. Sebuah out sejati harus benar-benar *memenangkan* tangan, bukan sekadar memperbaiki kartu Anda. Memasangkan angka sepuluh Anda saat flush sudah ada di meja bukanlah out — Anda memperbaiki, tapi tetap kalah. Belajar menghitung outs sebenarnya adalah belajar menghitung kartu yang menang, dan mengabaikan yang hanya *terlihat* membantu.

Semua yang mengalir setelahnya — equity Anda, [pot odds](/id/blog/holdem-pot-odds) Anda, keputusan call-atau-fold — bermula dari satu angka ini. Salah menghitung jumlah out dan setiap kalkulasi setelahnya juga salah. Dan setelah Anda tahu jumlahnya, [drawing odds](/id/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") memberi tahu Anda persis seberapa sering tiap draw benar-benar tercapai.

---

## Cara Menghitung Outs Anda (Langkah demi Langkah)

![Seorang pemain memegang ace dan king sekop dan mempelajari flop tiga kartu rendah di atas kain hijau, menghitung outs overcard sebelum beraksi](/images/holdem-outs-counting.webp "A-K di flop rendah adalah spot menghitung klasik — enam overcard outs, plus backdoor")

Menghitung outs adalah rutinitas tiga langkah yang Anda jalankan pada setiap draw sampai jadi otomatis:

:::steps
Sebutkan draw Anda | Tangan apa yang Anda kejar? Flush, straight, pair lebih besar, set — spesifik soal targetnya
Hitung kartu yang melengkapinya | Ada 13 kartu tiap jenis dan 4 kartu tiap nilai. Kurangi yang sudah bisa Anda lihat (kartu Anda + meja)
Buang yang palsu | Coret setiap "out" yang melengkapi tangan Anda tapi tetap kalah — kartu flush yang memasangkan meja, straight yang memberi orang lain straight lebih tinggi
:::

Ambil flush draw: ada 13 kartu dengan jenis Anda, Anda bisa melihat **empat** di antaranya (dua di tangan, dua di meja), jadi ==g:13 − 4 = 9 outs==. Pengurangan itu — menghitung kartu yang *tidak bisa* Anda dapatkan karena sudah Anda pegang — di situlah pemula tergelincir.

Perhitungan hanya memakai kartu yang bisa Anda lihat. Anda tidak mengurangi kartu lawan yang tak terlihat; Anda menganggap setiap kartu yang tak terlihat masih hidup. Itu sebabnya jumlah out standar di bawah ini tetap berlaku terlepas dari apa yang dipegang orang lain.

---

## Chart Outs Poker: Setiap Draw Umum

![Straight eight-high tersusun berurutan di atas kain hijau, menunjukkan rangkaian kartu yang dikejar open-ended draw](/images/holdem-reading-straight-example.webp "Open-ended straight draw terisi dari kedua ujung — delapan outs, draw umum terbesar kedua")

Hafalkan ini dan Anda akan mengenali jumlah out Anda sekilas. Inilah chart yang tertanam di ingatan setiap pemain menang:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw Anda | Outs | Kenapa |
|:---|:---:|:---|
| Flush + open-ended straight | 15 | Sang monster — dua draw sekaligus |
| Flush draw | 9 | 13 satu jenis − 4 yang bisa Anda lihat |
| Open-ended straight draw | 8 | Empat kartu di tiap ujung |
| Flush + gutshot | 12 | 9 flush + 4 gutshot − 1 kartu bersama |
| Dua overcard | 6 | Tiga kartu tiap nilai untuk berpasangan |
| One pair → two pair atau trips | 5 | 3 untuk memasangkan kicker + 2 untuk trips |
| Gutshot (inside straight) | 4 | Hanya satu nilai mengisi lubangnya |
| Satu overcard | 3 | Tiga kartu untuk membuat top pair |
| Pocket pair → set | 2 | Dua kartu terakhir dari nilai Anda |

</div>

Dua combo draw di atas adalah tempat pemain gagal berhitung, jadi keduanya mendapat bagiannya sendiri di bawah. Selebihnya adalah pengurangan lurus: hitung nilai atau jenis yang menyelesaikan tangan Anda, kurangi yang bisa Anda lihat.

---

## Outs ke Odds: Chart Konversi

Menghitung outs baru berguna setelah Anda mengubahnya menjadi persentase yang bisa dibandingkan dengan harga yang ditawarkan. Inilah tabel utamanya — odds untuk hit hingga river, plus odds satu-kartu untuk saat Anda sudah di turn:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Turn saja (1 kartu) | Hingga river (2 kartu) | Odds river |
|:---|:---:|:---:|:---:|
| 2 | 4,3% | 8,4% | 11:1 |
| 4 | 8,5% | 16,5% | 5:1 |
| 6 | 12,8% | 24,1% | 3,1:1 |
| 8 | 17,0% | 31,5% | 2,2:1 |
| 9 | 19,1% | 35,0% | 1,9:1 |
| 12 | 25,5% | 45,0% | 1,2:1 |
| 15 | 31,9% | 54,1% | 0,85:1 |

</div>

Dua angka penting untuk setiap draw. **"Hingga river"** menghitung kedua kartu tersisa dan berlaku saat Anda all-in di flop tanpa taruhan lagi. **"Turn saja"** menghitung hanya kartu berikutnya — pakai ini begitu masih ada taruhan yang akan datang, karena Anda hanya dijamin melihat satu kartu setiap kali. Pemula mengutip angka "hingga river" yang gendut sambil menghadapi taruhan turn, membujuk diri untuk call, dan membayarnya.

Perhatikan monster 15-out: dengan dua kartu yang akan datang ia sebenarnya **favorit** (54,1%), draw langka yang bisa Anda all-in-kan dengan senang hati di flop.

---

## Aturan 4 dan 2: Outs → Odds di Kepala Anda

Anda tak bisa membawa tabel itu ke meja, jadi pakai jalan pintas yang diandalkan setiap pemain:

- **Di flop (dua kartu akan datang):** outs ×4 ≈ persen Anda untuk hit hingga river.
- **Di turn (satu kartu akan datang):** outs ×2 ≈ persen Anda untuk hit di river.

Flush draw adalah 9 outs. Di flop: 9 × 4 = **36%** (nilai sebenarnya 35,0% — pas). Di turn: 9 × 2 = **18%** (sebenarnya 19,6% — cukup dekat untuk beraksi).

:::tip[Jalan pintas ×4 diam-diam mengasumsikan Anda akan melihat *kedua* kartu tanpa taruhan lagi — hanya benar saat Anda sudah all-in. Jika ada taruhan di depan Anda, pakai angka ×2 (satu-kartu) untuk street yang benar-benar sedang Anda jalani.]:::

Ada satu tempat di mana aturan itu berbohong: **jumlah out tinggi di flop.** Karena ×4 menghitung ganda peluang kecil untuk hit di *kedua* street, ia melebih-lebihkan begitu Anda melewati ~8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Kata aturan (×4) | Sebenarnya hingga river | Meleset |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31,5% | +0,5% |
| 9 | 36% | 35,0% | +1% |
| 12 | 48% | 45,0% | +3% |
| 15 | 60% | 54,1% | +6% |

</div>

Perbaikan rapi untuk draw besar: untuk **lebih dari 8 outs di flop**, kalikan dengan 4 lalu kurangi *(outs − 8)*. Untuk 15 outs: (15 × 4) − 7 = **53%**, hampir persis benar. Untuk draw sehari-hari sebanyak 8 outs atau kurang, ×4 dan ×2 biasa sudah cukup. Penurunan rumus lengkapnya ada di [chart probabilitas](/id/blog/holdem-probability).

---

## Combo Draw: Kenapa 9 + 8 Bukan 17

Draw besar membingungkan orang karena Anda tak bisa sekadar menjumlahkan kedua jumlah out — beberapa kartu bekerja ganda, dan menghitungnya dua kali menggelembungkan equity Anda.

Katakanlah Anda memegang ==b:J♠ 10♠== di flop ==9♠ 8♣ 2♠==. Anda punya dua draw bertumpuk: flush draw (sekop) dan open-ended straight draw (Q atau 7 mana pun membuat straight). Jumlahkan mentah-mentah dan Anda dapat 9 + 8 = 17. Tapi **Q♠ dan 7♠** masing-masing melengkapi *kedua* flush dan straight — keduanya sudah termasuk dalam 9 flush outs. Hitung sekali:

- Flush outs: **9** (setiap sekop)
- Straight outs yang bukan sekop: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total: **15 outs**, bukan 17

Logika sama pada **flush + gutshot**: 9 flush outs + 4 kartu gutshot, tapi satu dari empat itu adalah jenis Anda → 9 + 3 = **12**. Setiap kali dua draw berbagi kartu, kurangi tumpang tindihnya. Inilah cara pemain paling sering menghitung berlebih, dan itu sebabnya baris combo di chart terlihat "kurang satu" dari jumlahnya.

---

## Outs Kotor: Kartu yang Hanya Terlihat Seperti Kemenangan

![Infografik meja berpasangan 10♠ 8♥ 4♠ 4♣ 6♦ yang memisahkan outs bersih dari outs kotor](/images/holdem-outs-dirty-outs.webp "Di meja berpasangan, sebagian outs Anda kotor — hit flush bisa tetap membayari full house")

Inilah bagian yang dilewati kebanyakan panduan, dan justru inilah yang benar-benar menghemat uang. Sebuah **out kotor** (atau out "tercemar") adalah kartu yang melengkapi tangan Anda tapi masih bisa kalah — jadi menghitungnya dengan nilai penuh melebih-lebihkan equity Anda. Pemain menang menghitung outs mentah, lalu *mendiskon* yang kotor sebelum meraih Aturan 4 dan 2.

Tiga situasi untuk melatih mata Anda:

:::card
♠ | Flush bukan-nut | Memegang 8♠7♠ di K♠9♠2♣, Anda punya 9 "outs" sekop — tapi jika sekop datang dan lawan memegang sekop lebih besar, Anda membuat flush tapi tetap kalah. Diskon outs Anda saat Anda tidak drawing ke nut flush
🂮 | Meja berpasangan | Flush draw di meja seperti J♥8♥8♣ terlihat seperti 9 outs bersih, tapi meja sudah berpasangan — full house jadi mungkin menunggu, jadi sebagian flush Anda mati sejak awal
🃁 | Overcard melawan kekuatan | Dua overcard (A-K di Q-8-3) terhitung 6 outs di atas kertas, tapi jika raise besar meneriakkan set atau two pair, memasangkan ace Anda sering tidak cukup baik — hitung 3, mungkin 4, bukan 6
:::

Anda jarang tahu diskon persisnya, dan itu tak apa. Langkahnya bersifat arah: saat meja atau aksi memberi tahu bahwa suatu out mungkin tak menang, pangkas hitungannya *ke bawah* sebelum Anda mengonversi. Pemain yang menghitung 9 outs di meja berpasangan lalu call pot membayar harga penuh untuk draw yang diam-diam bernilai enam. Membaca out mana yang bersih adalah keterampilan tekstur meja — bangun dengan [cara membaca meja](/id/blog/holdem-reading-the-board).

---

:::readnext[Lanjut baca]
/id/blog/holdem-pot-odds | Cara Menghitung Pot Odds | /images/holdem-pot-odds-hero.webp
/id/blog/holdem-probability | Chart Odds & Probabilitas Poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Apa itu outs di poker?**

A. Outs adalah kartu yang tersisa di deck yang memperbaiki tangan Anda menjadi kemungkinan pemenang. Flush draw punya 9 outs (9 kartu tak terlihat dengan jenis Anda); open-ended straight draw punya 8. Anda menghitungnya untuk mencari tahu peluang hit dan apakah call menguntungkan.

**Q. Bagaimana cara menghitung outs di poker?**

A. Sebutkan tangan yang Anda kejar, hitung berapa kartu yang melengkapinya (13 tiap jenis, 4 tiap nilai), kurangi yang sudah bisa Anda lihat di tangan dan di meja, lalu coret setiap out "kotor" yang tetap akan kalah. Flush draw adalah 13 − 4 = 9.

**Q. Berapa outs yang dimiliki flush draw?**

A. Sembilan. Ada 13 kartu tiap jenis; dengan dua di tangan dan dua di meja Anda bisa melihat empat, menyisakan 9 kartu tak terlihat yang melengkapi flush Anda. Itu kira-kira 35% untuk hit hingga river dari flop.

**Q. Berapa outs yang dimiliki open-ended straight draw?**

A. Delapan — empat kartu di tiap ujung mengisi straight. Gutshot (inside) straight draw hanya punya 4 outs karena hanya satu nilai yang mengisi celahnya. Double gutshot juga punya 8, sama dengan open-ender.

**Q. Apa itu aturan 4 dan 2?**

A. Jalan pintas untuk mengubah outs menjadi persentase: di flop kalikan outs dengan 4 untuk peluang hit hingga river; di turn kalikan dengan 2 untuk kartu river. Sembilan flush outs ≈ 36% di flop, 18% di turn. Pakai ×4 hanya saat Anda akan melihat kedua kartu tanpa taruhan lagi.

**Q. Apa itu outs kotor atau tercemar?**

A. Kartu yang melengkapi tangan Anda tapi masih bisa kalah — kartu flush saat flush lebih besar mungkin, kartu straight yang juga membuat orang lain straight lebih tinggi, atau overcard melawan set yang mungkin. Diskon (atau jangan hitung) outs kotor sebelum mengonversi ke odds, atau Anda akan menilai equity terlalu tinggi.

**Q. Berapa outs untuk flush draw plus straight draw?**

A. 15, bukan 17. Flush draw adalah 9 outs dan open-ended straight adalah 8, tapi dua kartu straight juga jenis Anda dan sudah terhitung dalam flush — jadi Anda kurangi tumpang tindihnya. Lima belas outs adalah favorit untuk hit hingga river (sekitar 54%).

**Q. Apakah Anda menghitung kartu lawan saat menghitung outs?**

A. Tidak. Anda hanya mengurangi kartu yang benar-benar bisa Anda lihat — kartu tertutup Anda dan meja komunitas. Setiap kartu lain yang tak terlihat dianggap hidup, itu sebabnya jumlah out standar (9 untuk flush, 8 untuk open-ender) tetap berlaku apa pun yang dipegang lawan.

---

## 3 Hal yang Harus Diingat

1. **Hitung yang menang, bukan yang memperbaiki.** Sebuah out harus membuat tangan *terbaik*, bukan sekadar lebih baik. Kurangi hanya kartu yang bisa Anda lihat.
2. **Konversi dengan 4 dan 2.** Outs × 4 di flop, × 2 di turn. Pangkas perkiraan untuk draw besar (lebih dari 8 outs) dengan mengurangi *(outs − 8)*.
3. **Diskon yang kotor.** Flush bukan-nut, meja berpasangan, dan overcard melawan kekuatan semuanya menyusutkan jumlah out nyata Anda. Kalau ragu, hitung lebih sedikit.

Kuasai hitungannya dan sisa matematika poker jatuh pada tempatnya. Bawa jumlah out Anda langsung ke [cara menghitung pot odds](/id/blog/holdem-pot-odds) untuk melihat apakah harganya tepat, atau kembali ke [chart odds dan probabilitas poker](/id/blog/holdem-probability) lengkap untuk angka persis di balik setiap draw.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ubah jumlah out Anda menjadi keputusan call-atau-fold</div>
  </a>
  <a href="/id/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Chart Odds &amp; Probabilitas Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Referensi lengkap di balik setiap draw</div>
  </a>
  <a href="/id/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Membaca Meja</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Membaca Meja</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenali setiap draw agar Anda menghitung outs bersih</div>
  </a>
</div>
`.trim(),
};

export default POST;
