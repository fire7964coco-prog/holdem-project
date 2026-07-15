import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Equity poker dijelaskan — persen menang, fold equity, dan realisasi",
  seoTitle: "Persen menang Anda bukan yang Anda simpan — equity poker",
  desc: "Equity adalah bagian Anda dari pot — tapi tak selalu Anda simpan. Kenapa equity 40% bukan 40% kemenangan, plus fold equity, realisasi, dan equity all-in.",
  tldr: "Equity adalah bagian Anda dari pot — persentase tangan Anda menang jika semua kartu dibagikan. Anda call saat equity mengalahkan pot odds, tapi posisi dan taruhan membuat Anda jarang menyimpan seluruh equity — dan fold equity membuat Anda bisa memenangkan pot bahkan saat tangan Anda tertinggal.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Dua pemain all-in dengan kartu terbuka di atas felt hijau, tumpukan chip di tengah — momen ketika equity tiap tangan berubah menjadi bagian nyata dari pot",
  tags: ["equity poker", "apa itu equity di poker", "fold equity", "realisasi equity", "equity vs pot odds", "equity all in", "kalkulator equity poker", "cara menghitung equity poker"],
  content: `
Selama setahun saya kira "equity" hanya kata keren untuk "seberapa besar peluang saya menang". Lalu suatu malam saya kalah tiga pot besar padahal masuk sebagai favorit, dan pemain yang lebih baik mengatakan hal yang mengubah cara saya melihat permainan: ==equity Anda adalah apa yang *terutang* pada Anda, bukan apa yang Anda *kumpulkan*.== Anda bisa 40% untuk menang sebuah tangan dan hampir tak merealisasikannya — atau tertinggal namun tetap mencetak uang. Memahami jurang di antara keduanya adalah sebagian besar yang memisahkan pemain menang dari pemain penuh harapan.

==Equity adalah satu angka yang mengikat setiap bagian matematika poker lainnya — outs, pot odds, posisi, dan agresi semua bermuara pada satu pertanyaan: berapa bagian pot ini yang benar-benar milik saya?== Panduan ini membahas apa itu equity, cara memperkirakannya, dan tiga hal yang tak pernah dikatakan kepada pemula: kenapa Anda tak menyimpan semuanya, bagaimana lawan yang fold memberi Anda tambahan, dan kenapa tangan besar Anda menyusut melawan banyak orang.

Persen menang mentah di balik setiap tangan berasal dari [chart odds dan probabilitas poker](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); panduan ini adalah cara Anda mengubah persentase itu menjadi keputusan di meja.

---

### Equity sekilas

:::stripe
pot × win% | Berapa nilai tangan Anda saat ini
raw × realization% | Berapa yang benar-benar Anda kumpulkan
bet ÷ (pot + bet) | Persen fold yang dibutuhkan bluff murni
:::

---

## Apa Itu Equity di Poker?

**Equity adalah bagian Anda dari pot — persentase tangan Anda menang jika tangan dimainkan sampai showdown.** Jika pot $100 dan Anda 60% untuk menang, tangan Anda bernilai ==$60 saat ini==, meski chip belum didorong ke mana pun.

Bayangkan sebagai potongan kue Anda. Setiap tangan yang masih hidup punya potongan; potongan-potongan itu selalu berjumlah 100%. Saat Anda head-up dan 70% untuk menang pot $200, ==g:$140 di antaranya "milik Anda"== dalam jangka panjang — Anda tak akan menang *pot ini* 70% waktu dan kalah sisanya, tapi di seribu situasi identik, itulah bagian yang Anda kumpulkan.

Itulah alasan equity penting: ia mengubah "apakah saya unggul?" menjadi "berapa bagian pot ini yang saya miliki?" — dan itulah angka yang Anda bandingkan dengan harga sebuah call.

---

## Cara Memperkirakan Equity Anda dengan Cepat

**Pada draw, kalikan outs Anda dengan 4 di flop atau dengan 2 di turn; preflop, hafalkan segelintir matchup yang muncul berulang kali.** Anda hampir tak pernah menghitung equity persis di meja — Anda memperkirakan, dan dua pintasan ini mencakup 90% situasi.

**Draw (Rule of 4 dan 2):** hitung [outs](/id/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") Anda, lalu kalikan. Flush draw adalah 9 outs → ==9 × 4 = 36%== di flop (nilai sebenarnya 35%). Angka persis untuk setiap draw ada di [drawing odds](/id/blog/holdem-drawing-odds); ini referensi cepatnya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Equity (2 kartu) |
|:---|:---:|:---:|
| Flush + open-ender | 15 | 54,1% |
| Flush draw | 9 | 35,0% |
| Open-ended straight | 8 | 31,5% |
| Gutshot straight | 4 | 16,5% |

</div>

**Matchup preflop (hafalkan ini):** all-in sebelum flop, pertarungan yang sama berulang. Pelajari ini dan Anda langsung tahu equity Anda di sebagian besar all-in preflop.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Matchup | Equity | Tipe |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair mendominasi |
| QQ vs AK | ~57% / ~43% | Pair unggul di "race" |
| 22 vs AK | ~52% / ~48% | Coin flip sejati |
| AK vs AQ | ~73% / ~23% | Dominasi (sisanya split) |
| 88 vs A7 | ~70% / ~30% | Pair vs satu overcard |

</div>

Dua hal yang menjebak orang di sini. Pair melawan dua overcard (QQ vs AK) ==r:bukan 50/50== — pair adalah favorit tipis, sekitar 57/43 offsuit (sedikit lebih ketat, ~54/46, saat AK suited). Dan frasa "coin flip" sebenarnya hanya cocok untuk pair rendah melawan dua kartu lebih besar (22 vs AK), di mana benar-benar ketat.

---

## Equity vs Pot Odds: Satu Aturan yang Menentukan Setiap Call

**Call saat equity Anda lebih besar dari pot odds Anda — satu perbandingan itu menentukan hampir setiap call di poker.** [Pot odds](/id/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") memberi tahu equity yang Anda *butuhkan* untuk impas; equity memberi tahu apa yang Anda *miliki*. Jika Anda punya lebih dari yang dibutuhkan, call menghasilkan uang.

Menghadapi taruhan setengah pot, pot odds Anda membutuhkan ==25%== untuk call. Flush draw dengan dua kartu tersisa punya ~35% equity — 35 mengalahkan 25, jadi ini call yang menguntungkan. Itulah keseluruhan keputusannya, tanpa tebak-tebakan.

Tapi inilah jebakan yang hampir setiap panduan lewatkan: **"equity Anda sama dengan bagian pot Anda" hanya benar saat tak ada taruhan lagi.** Begitu lebih banyak uang bisa masuk di street berikutnya, 35% mentah tak otomatis berubah menjadi 35% dari pot akhir — Anda bisa dipaksa lepas draw, atau membayar saat Anda kena tapi jadi terbaik kedua. Jurang itulah tempat [implied odds](/id/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (uang yang akan Anda menangkan nanti) dan realisasi equity (di bawah) berperan. Equity adalah tempat matematika *dimulai*, bukan tempat ia berakhir.

---

## Fold Equity: Cara Memenangkan Pot Saat Tangan Anda Tertinggal

**Fold equity adalah equity tambahan yang Anda dapat dari kemungkinan lawan fold — itulah kenapa sebuah taruhan bisa memenangkan pot yang tangan Anda sendiri akan kalah.** Saat Anda bertaruh, Anda punya dua cara menang: lawan fold sekarang, atau mereka call dan Anda menang di showdown. Cek hanya memberi Anda cara kedua.

:::compare
Bertaruh (agresi) | Cek atau call (pasif)
Mereka fold sekarang → Anda menang pot | Tanpa fold equity — tak ada yang fold pada cek
Mereka call dan Anda kena → Anda menang | Anda kena → Anda menang
==g:Dua cara menang== | ==r:Satu cara menang==
:::

Untuk ==bluff murni== tanpa peluang membaik, titik impasnya sederhana: Anda butuh lawan fold cukup sering untuk menutupi risiko. Bertaruh $50 ke pot $100, tingkat fold impas Anda adalah ==bet ÷ (pot + bet) = 50 ÷ 150 = 33%==. Jika mereka fold lebih dari sepertiga waktu, bertaruh menguntungkan — bahkan dengan tangan terburuk di meja.

Sekarang tambahkan draw, dan jadi jauh lebih baik. Ini gambaran penuhnya sebagai ==g:semi-bluff==: pot $100, Anda bertaruh $50 dengan flush draw, lawan fold 40% waktu, dan saat mereka call Anda masih punya 35% equity untuk kena di river.

:::note
EV = (fold% × pot) + (call% × [equity × (pot + bet) − (miss% × bet)])
EV = (0,40 × $100) + (0,60 × [0,35 × $150 − 0,65 × $50])
EV = $40 + (0,60 × [$52,50 − $32,50]) = $40 + $12 = ==g:+$52==
:::

Bertaruh flush draw itu bernilai ==+$52== dibanding check-fold — dan sebagian besar nilai itu berasal dari saat mereka fold, bukan saat Anda kena. Itulah fold equity: alasan agresi mengalahkan kepasifan, dan kenapa sebuah draw jauh lebih bernilai sebagai taruhan daripada sebagai call.

---

## Realisasi Equity: Kenapa Equity 40% Tak Berarti Anda Menang 40%

**Realisasi equity adalah seberapa banyak equity mentah Anda yang benar-benar Anda kumpulkan — dan biasanya kurang dari 100%, karena posisi dan taruhan menguras Anda.** "40% untuk menang" Anda mengasumsikan Anda selalu mencapai showdown; kenyataannya Anda dipaksa lepas draw, terpaksa fold, dan didorong-dorong saat out of position. Yang Anda simpan adalah:

==b:Realized equity = raw equity × realization%==

Tangan dengan 40% equity mentah yang hanya merealisasi 75%-nya sebenarnya bernilai ==0,75 × 40% = 30%==. Itulah kenapa Anda bisa "unggul atas range lawan" namun tetap kehilangan uang — Anda tak pernah sempat mencairkan potongan penuh.

Yang menggerakkan realisasi Anda naik atau turun:

:::card
🪑 | Posisi | In position Anda merealisasi *lebih* dari equity mentah (Anda dapat kartu gratis, mengontrol pot); out of position Anda merealisasi lebih sedikit. Ini faktor terbesar
🎯 | Playability | Suited connector dan tangan yang mem-flop draw merealisasi dengan baik; clunker offsuit merealisasi buruk bahkan dengan equity mentah lumayan
📚 | Kedalaman stack & skill | Stack lebih dalam dan lawan lebih tangguh membuat equity marjinal lebih sulit direalisasi
:::

Ini adalah ide terpenting yang sebagian besar panduan pemula tinggalkan, dan inilah kenapa [tangan yang sama bermain sangat berbeda menurut posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). Equity mentah adalah plafonnya; realisasi adalah yang Anda bawa pulang.

---

## Equity All-In: Saat Equity Mentah Adalah Segalanya

**Saat Anda all-in, tak ada keputusan lagi — jadi Anda merealisasi 100% equity Anda, dan equity mentah menjadi kata terakhir.** Setiap komplikasi di atas (posisi, fold, dipaksa lepas) lenyap, karena tak ada taruhan lagi yang bisa terjadi. Berapa pun persen menang Anda, itulah persis bagian pot yang akan Anda kumpulkan seiring waktu.

Inilah kenapa equity all-in preflop begitu penting: AA all-in melawan KK menyimpan penuh ==82%==-nya — tanpa pajak realisasi, tanpa fold equity, hanya angka mentah yang terjadi. Ini juga kenapa "coin flip" (22 vs AK di ~52/48) adalah adu untung-untungan yang benar-benar dekat saat all-in, meski dua tangan sama yang dimainkan postflop akan menyimpang liar tergantung board dan siapa yang punya posisi.

All-in adalah satu-satunya titik di poker di mana kue dipotong persis seperti kata matematika — yang menjadi daya tariknya sekaligus bahayanya.

---

## Equity Multiway: Kenapa Tangan Besar Anda Menyusut Melawan Banyak Orang

**Equity Anda turun cepat di pot multiway, karena kue 100% yang sama kini terbagi di antara lebih banyak tangan.** Pocket aces sekitar 85% head-up, tapi melawan tiga lawan itu meluncur ke ==r:~64%==, dan melawan empat ke ~56% — masih tangan terbaik, tapi tak lagi sekejam yang terasa. Bertiga, equity *rata-rata* 33% menurut definisi, karena tiga pemain membagi satu pot.

![Infografik board Q♣ 9♥ 5♦ 3♠ J♦ yang menunjukkan bagaimana setiap pemain tambahan di pot memotong equity setiap tangan](/images/holdem-equity-multiway.webp "Makin banyak pemain yang masih di pot, makin kecil potongan semua orang — bahkan pocket aces")

Dua hal jadi lebih buruk di multiway, bukan hanya bagian mentah Anda:

- **Fold equity runtuh.** Untuk memenangkan pot dengan taruhan, kini *semua orang* harus fold — jauh lebih kecil kemungkinannya dengan tiga lawan daripada satu. Bluff dan semi-bluff tipis kehilangan nilai dengan cepat.
- **Realisasi turun.** Lebih banyak pemain yang masih akan beraksi berarti lebih banyak cara ter-outdraw atau dipaksa lepas tangan, jadi Anda merealisasi bahkan lebih sedikit dari potongan yang sudah lebih kecil.

Kesimpulan praktisnya: tangan yang menginginkan pot multiway adalah yang membuat nuts (set, suited aces untuk nut flush), bukan pair besar yang bermain terbaik head-up. Saat lapangan besar, ketatkan ke arah tangan yang equity-nya bertahan saat kue dipotong lima cara.

---

## Menyatukannya: Bagaimana Pro Sebenarnya Menggunakan Equity di Meja

**Pemain bagus tak menghitung equity persis — mereka menjalankan perkiraan empat langkah cepat yang melapisi realisasi dan fold equity di atas angka mentah.** Ini alur pikirnya, dalam urutan yang benar-benar terjadi:

:::steps
Perkirakan equity mentah | Outs × 4 atau × 2 untuk draw; ingat matchup saat preflop
Diskon untuk realisasi | Out of position atau sulit dimainkan? Pangkas — 40% mentah bisa jadi 30% nyata
Tambahkan fold equity | Jika Anda bertaruh, seberapa sering villain fold? Itu equity tambahan yang tak dimiliki tangan Anda sendiri
Bandingkan dengan harga | Realized equity + fold equity vs pot odds Anda → call, bet, atau fold
:::

Malam yang saya sebut di awal, saya melakukan langkah satu lalu berhenti — menghitung equity mentah saya dan mengabaikan bahwa out of position, melawan pemain bagus, saya tak akan pernah merealisasikannya. Begitu saya mulai mendiskon untuk posisi dan memikirkan fold *mereka* alih-alih hanya kartu saya, kebocorannya tertutup. Equity bukan angka yang Anda cari; ia adalah lensa yang Anda jalankan pada setiap keputusan.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-pot-odds | Cara Menghitung Pot Odds | /images/holdem-pot-odds-hero.webp
/id/blog/holdem-implied-odds | Implied Odds — Saat Harga Buruk Adalah Call yang Baik | /images/holdem-implied-odds-hero.webp
:::

## FAQ

**Q. Apa itu equity di poker?**

A. Equity adalah bagian Anda dari pot — persentase tangan Anda menang jika tangan berlanjut ke showdown. Jika pot $100 dan Anda 60% untuk menang, equity Anda bernilai $60. Ini angka inti yang Anda bandingkan dengan harga sebuah call untuk memutuskan apakah melanjutkan.

**Q. Bagaimana cara menghitung equity di poker?**

A. Untuk draw, gunakan Rule of 4 dan 2: kalikan outs Anda dengan 4 di flop (dua kartu tersisa) atau dengan 2 di turn. Sembilan flush outs ≈ 36% di flop. Preflop, hafalkan matchup umum (AA vs KK adalah 82/18). Untuk angka persis, pemain memakai kalkulator equity di luar meja untuk belajar — Anda memperkirakan saat bermain.

**Q. Apa perbedaan antara equity dan pot odds?**

A. Equity adalah peluang menang Anda (apa yang Anda miliki); pot odds adalah equity yang Anda butuhkan untuk impas pada sebuah call (apa yang harga tuntut). Aturannya sederhana: call saat equity Anda lebih besar dari pot odds Anda. Pot odds berasal dari ukuran taruhan; equity berasal dari tangan Anda dan board.

**Q. Apakah equity 50% bagus di poker?**

A. Tak baik atau buruk dengan sendirinya — 50% adalah coin flip. Apakah ini call tergantung harga: melawan taruhan setengah pot Anda hanya butuh 25%, jadi 50% adalah call besar; tapi mempertaruhkan seluruh stack sebagai underdog 50/50 demi apa-apa adalah judi, bukan keunggulan. Equity hanya bermakna di samping pot odds.

**Q. Berapa fold equity yang saya butuhkan untuk bluff menguntungkan?**

A. Untuk bluff murni, Anda butuh lawan fold setidaknya bet ÷ (pot + bet) dari waktu. Bertaruh $50 ke $100 berarti 50 ÷ 150 = 33%. Jika Anda juga punya draw (semi-bluff), Anda butuh mereka fold bahkan lebih jarang, karena Anda masih bisa menang saat di-call. Itulah kenapa semi-bluffing draw begitu menguntungkan.

**Q. Apa itu realisasi equity?**

A. Realisasi equity adalah seberapa banyak equity mentah Anda yang benar-benar Anda kumpulkan. Realized equity = raw equity × realization%. Tangan dengan 40% equity mentah yang merealisasi 75% sebenarnya bernilai 30%. Posisi adalah pendorong terbesar — in position Anda merealisasi lebih, out of position lebih sedikit — itulah kenapa tangan yang sama lebih bernilai di button daripada di blind.

**Q. Apa itu equity all-in?**

A. Equity all-in hanyalah persen menang mentah Anda saat tak ada taruhan lagi yang bisa terjadi. Karena tak ada keputusan masa depan, Anda merealisasi 100%-nya, jadi equity mentah menjadi bagian pot persis yang Anda kumpulkan seiring waktu. Inilah satu titik di mana "equity sama dengan bagian pot" benar-benar berlaku secara harfiah.

**Q. Kenapa equity saya turun di pot multiway?**

A. Karena pot 100% yang sama kini terbagi di antara lebih banyak tangan — pocket aces di ~85% head-up jatuh ke ~64% melawan tiga pemain dan ~56% melawan empat. Multiway juga memangkas fold equity Anda (semua orang harus fold, bukan hanya satu pemain) dan realisasi Anda (lebih banyak pemain berarti lebih banyak cara ter-outdraw), jadi bagian mentah Anda dan apa yang Anda simpan darinya sama-sama menyusut.

---

## 3 Hal yang Harus Diingat

1. **Equity adalah bagian Anda dari pot** — win% × ukuran pot. Call saat ia mengalahkan pot odds Anda. Perbandingan itu adalah tulang punggung setiap keputusan.
2. **Anda jarang menyimpan semuanya.** Realized equity = raw × realization%, dan posisi adalah faktor terbesar. Equity mentah adalah plafonnya, bukan bayarannya.
3. **Agresi memproduksi equity.** Fold equity membuat sebuah taruhan memenangkan pot yang tangan Anda akan kalah — tapi ia runtuh di multiway, di mana Anda butuh semua orang fold.

Kuasai ini dan sisa matematika poker jatuh pada tempatnya. Dari sini, ubah equity menjadi call yang benar dengan [panduan pot odds](/id/blog/holdem-pot-odds), atau lihat bagaimana stack dalam mengubah gambaran dengan [implied odds](/id/blog/holdem-implied-odds).

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Chart Odds & Probabilitas Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Persen menang mentah di balik setiap tangan</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Harga yang harus dikalahkan equity Anda</div>
  </a>
  <a href="/id/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Implied Odds Dijelaskan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa equity bukan bagian pot final Anda</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Bagaimana Posisi Mengubah Segalanya</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa realisasi hidup dan mati pada posisi</div>
  </a>
</div>
`.trim(),
};

export default POST;
