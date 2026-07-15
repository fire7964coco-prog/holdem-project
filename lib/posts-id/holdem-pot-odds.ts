import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Cara menghitung pot odds di poker — metode 10 detik",
  seoTitle: "Apakah call ini benar-benar profit? — Cara hitung pot odds",
  desc: "Berhenti call karena harapan. Cara menghitung pot odds dalam sepuluh detik — jalan pintas rasio ke persen, tabel ukuran taruhan, dan letak implied odds.",
  tldr: "Untuk menghitung pot odds, bagi jumlah yang harus Anda call dengan total pot setelah call Anda. Call $50 ke pot $150 = 50 ÷ 200 = 25% — jadi Anda butuh minimal 25% equity agar call ini profit.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "Tangan pemain mendorong chip ke pot di tengah meja felt hijau — saat sebuah keputusan pot odds diambil",
  tags: ["pot odds", "cara menghitung pot odds", "pot odds poker", "tabel pot odds", "implied odds", "pot odds vs equity", "rule of 4 and 2", "equity untuk call"],
  content: `
Kata paling mahal di poker adalah "harapan." Tahun pertama saya habiskan dengan call taruhan river karena flush draw saya *mungkin* jadi, dan saya kehilangan chip karenanya. Malam saat semuanya akhirnya klik adalah call $50 ke pot $150 — untuk sekali ini saya menghitung, sadar bahwa saya hanya butuh 25% untuk impas, dan sejak itu saya tak pernah lagi memandang sebuah call dengan cara yang sama.

==Pot odds adalah satu-satunya perhitungan yang memisahkan call karena perasaan dari call karena alasan.== Butuh lima menit untuk memahaminya dan beberapa sesi untuk menjadikannya otomatis. Panduan ini memberi Anda ==g:metode 10 detik==, tabel ukuran taruhan yang bisa Anda bayangkan di meja, dan satu hal yang paling sering salah dipahami pemain: bagaimana pot odds, equity, dan implied odds sebenarnya saling berhubungan.

Angka di balik draw Anda berasal dari [tabel peluang dan probabilitas poker](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") — panduan ini adalah cara Anda mengubah angka itu menjadi call atau fold yang benar.

---

### Pot odds sekilas

:::stripe
25% | Equity yang dibutuhkan vs taruhan setengah pot
33% | Equity yang dibutuhkan vs taruhan sebesar pot
call ÷ (pot + call) | Seluruh rumusnya
:::

---

## Apa Itu Pot Odds di Poker?

**Pot odds adalah harga yang ditawarkan kepada Anda untuk terus bermain.** Ia membandingkan ukuran pot dengan ukuran taruhan yang harus Anda call — imbalan versus risiko.

Misalkan pot-nya $150 dan Anda harus call $50. Anda ditawari ==$150 untuk dimenangkan dengan risiko $50== — Anda "mendapat 3:1." Makin besar pot relatif terhadap call, makin bagus harga Anda, dan makin jarang Anda perlu menang agar call itu sepadan.

Angka "seberapa sering Anda perlu menang" itulah intinya. Mendapat 3:1 berarti call itu membayar dirinya sendiri jika Anda menang setidaknya **25% dari waktu** atau lebih. Pot odds mengubah "haruskah saya call?" yang samar menjadi target pasti: *apakah saya menang cukup sering untuk mengalahkan harga ini?*

---

## Cara Menghitung Pot Odds (Langkah demi Langkah)

Lupakan rasio sejenak — bentuk tercepat yang bisa dipakai adalah **persentase**, karena Anda membandingkannya langsung dengan peluang menang Anda.

:::steps
Jumlahkan pot akhir | Pot saat ini + taruhan + call Anda. Contoh: pot $100 + taruhan $50 + call $50 Anda = $200
Bagi call Anda dengan pot akhir itu | $50 ÷ $200 = 0,25
Itulah equity yang Anda butuhkan | Anda perlu menang setidaknya 25% dari waktu agar call ini profit
Bandingkan dengan equity Anda yang sebenarnya | Flush draw ≈ 35% untuk jadi → 35% mengalahkan 25% → ==g:call==
:::

Itu saja. **Equity yang dibutuhkan = call Anda ÷ pot akhir.** Jika peluang menang Anda yang sebenarnya lebih besar dari angka itu, call menghasilkan uang dalam jangka panjang — bahkan saat Anda lebih sering kalah di tangan itu daripada menang.

> **Satu aturan yang menghapus semua kebingungan**
> Selalu sertakan call Anda sendiri dalam pot akhir. "Mendapat 3:1" dan "butuh 25%" menggambarkan spot yang *sama* — rasio adalah harganya, persentase adalah targetnya. Sebagian besar kesalahan pemula datang dari mencampur kedua konvensi ini; pilih persentase dan jangan menoleh lagi.

---

## Pot Odds sebagai Rasio vs. Persentase

Pemain aliran lama bicara dalam rasio ("saya dapat 4:1"); pemain modern berpikir dalam persentase ("saya butuh 20%"). Anda harus bisa berpindah di antara keduanya secara instan, karena rasio adalah yang Anda *lihat* (pot vs. taruhan) dan persentase adalah yang Anda *pakai* (vs. equity Anda).

Konversinya satu langkah: rasio **X:1** berarti Anda butuh **1 ÷ (X + 1)** sebagai persentase.

| Anda mendapat… | Equity yang dibutuhkan |
|:---|:---:|
| 1:1 | 50% |
| 2:1 | 33% |
| 2,5:1 | 28,6% |
| 3:1 | 25% |
| 4:1 | 20% |
| 5:1 | 16,7% |
| 6:1 | 14,3% |

Polanya intuitif: makin pot mengerdilkan call, makin kecil bagian kue yang Anda butuhkan untuk membenarkan call.

---

## Berapa Banyak Equity yang Anda Butuhkan untuk Call?

![Kartu tertutup premium di meja felt hijau — memutuskan apakah harganya pas untuk lanjut](/images/holdem-starting-hands-premium.webp "Equity yang dibutuhkan sepenuhnya tergantung pada ukuran taruhan yang Anda hadapi")

Inilah jalan pintas yang tinggal di kepala Anda di meja. Equity yang Anda butuhkan tergantung **hanya pada ukuran taruhan relatif terhadap pot** — jadi hafalkan tujuh patokan ini dan Anda tak akan pernah butuh kalkulator.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Lawan bertaruh | Anda mendapat | Equity yang dibutuhkan |
|:---|:---:|:---:|
| ¼ pot | 5:1 | 16,7% |
| ⅓ pot | 4:1 | 20% |
| ½ pot | 3:1 | 25% |
| ⅔ pot | 2,5:1 | 28,6% |
| ¾ pot | 2,3:1 | 30% |
| Sebesar pot | 2:1 | 33% |
| 2× pot | 1,5:1 | 40% |

</div>

Perhatikan batas atasnya: bahkan **overbet 2× pot yang masif hanya meminta 40% equity**. Anda hampir tak pernah harus menjadi favorit untuk call secara profit — kesalahan baca umum yang membuat orang fold call yang benar. Makin besar taruhan, makin banyak equity yang Anda butuhkan, tapi ia naik lebih lambat dari yang dikira banyak pemain.

---

## Tabel Pot Odds: Draw Mana Mengalahkan Taruhan Mana

Sekarang hubungkan harga dengan tangan Anda. [Hitung **outs** Anda](/id/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") (kartu yang menjadikan tangan Anda), ubah menjadi equity, dan cek terhadap taruhan. Inilah draw yang paling sering Anda hadapi:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw Anda | Outs | Equity, 1 kartu | Equity, 2 kartu |
|:---|:---:|:---:|:---:|
| Flush + open-ender | 15 | 32,6% | 54,1% |
| Flush draw | 9 | 19,6% | 35,0% |
| Open-ended straight | 8 | 17,4% | 31,5% |
| Dua overcard | 6 | 13,0% | 24,1% |
| Gutshot straight | 4 | 8,7% | 16,5% |

</div>

Bacalah terhadap tabel ukuran taruhan di atas. Menghadapi ==taruhan setengah pot (butuh 25%)==: dengan dua kartu tersisa, flush draw (35%) adalah call jelas — tapi pada *satu* kartu, draw yang sama itu hanya 19,6%, yang **tidak** memenuhi harganya sendiri. Celah itulah tepat di mana implied odds berperan.

---

## Pot Odds vs. Equity vs. Implied Odds

Ketiga ini terus-menerus dicampuradukkan, dan kebingungannya makan uang. Inilah pemisahan yang bersih:

:::compare
Istilah | Apa artinya
Pot odds | Harganya: call ÷ pot akhir = equity yang Anda *butuhkan*
Equity | Peluang Anda yang sebenarnya untuk memenangkan tangan saat ini
Implied odds | Chip *tambahan* yang Anda harapkan menang di street berikutnya jika draw Anda jadi
:::

**Pot odds vs. [equity](/id/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")** adalah keputusan inti: call saat equity Anda mengalahkan pot odds Anda. [**Implied odds**](/id/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") adalah penentu untuk draw yang meleset tipis dari harganya. Jika flush draw Anda butuh 25% tapi hanya punya 19,6% di kartu river, Anda tetap bisa call *jika* Anda akan menarik cukup taruhan tambahan saat jadi untuk menutup selisihnya. Itulah kenapa Anda bisa call taruhan flop secara profit dengan sebuah draw, dan kenapa stack dalam membuat draw lebih berharga.

Cermin gelapnya adalah **reverse implied odds** — chip yang akan Anda *kehilangan* saat draw Anda jadi tapi tetap kalah di tangan itu (flush Anda lengkap, tapi meja berpasangan dan seseorang punya full house). Draw peringkat kedua diam-diam menguras uang, itulah kenapa nut flush draw jauh lebih berharga daripada draw kecil.

---

## Rule of 4 and 2: Mengubah Outs Menjadi Odds dengan Cepat

Anda tak bisa berhenti untuk menghitung equity persis di tengah tangan, jadi gunakan **Rule of 4 and 2**:

- **Di flop, dengan dua kartu masih tersisa:** kalikan outs Anda dengan **4**.
- **Di turn, dengan satu kartu tersisa:** kalikan outs Anda dengan **2**.

Flush draw itu 9 outs. Di flop: 9 × 4 = **36%** (nilai sebenarnya 35,0% — tepat sasaran). Di turn: 9 × 2 = **18%** (nilai sebenarnya 19,6% — cukup dekat untuk memutuskan).

:::tip[Versi ×4 diam-diam mengasumsikan Anda akan melihat *kedua* kartu tersisa tanpa taruhan lagi — yang hanya terjamin saat Anda sudah all-in. Jika masih ada taruhan, andalkan angka ×2 (satu kartu) untuk street di depan Anda, dan biarkan implied odds membenarkan sisanya.]:::

Penurunan lengkap untuk setiap draw dan tangan jadi ada di [tabel probabilitas](/id/blog/holdem-probability). Di sini, jalan pintas ini sudah cukup.

---

## Kesalahan Pot Odds Umum yang Dibuat Pemula

Saya membuat setiap kesalahan ini sebelum mereka membuat saya bangkrut. Waspadai:

:::card
🧮 | Lupa menyertakan call | Equity yang dibutuhkan adalah call ÷ pot *akhir* — hitung chip Anda sendiri yang masuk, atau Anda akan menilai setiap harga terlalu tinggi
🃏 | Menghitung outs yang tercemar | Sebuah flush out yang juga membuat meja berpasangan bisa memberi seseorang full house. Kurangi outs "kotor" sebelum memercayai angkanya
🚀 | Salah pakai Rule of 4 | ×4 hanya berlaku saat Anda akan melihat kedua kartu gratis (all-in). Menghadapi taruhan turn, itu ×2 — pakai ×4 membujuk Anda ke call yang merugi
💸 | Mengabaikan implied & reverse implied odds | Stack dalam menguntungkan tangan draw; draw non-nut yang jadi melawan tangan lebih besar adalah jebakan, bukan hari gajian
🎯 | Call karena harapan | "Mungkin jadi" bukan alasan. Jika equity Anda tak mengalahkan pot odds Anda (plus implied odds), itu fold

:::

### Sebuah tangan nyata, dari awal sampai akhir

Saya pegang ==b:A♥ K♥== di flop ==Q♥ 7♥ 2♣== — nut flush draw, 9 outs. Pot-nya $100, villain bertaruh $50. Pot odds saya: saya dapat 3:1, jadi saya butuh **25%**. Dengan dua kartu tersisa saya di ~35%, dan bahkan menghitung hanya kartu berikutnya (19,6%) implied odds saya sangat besar — jika hati keluar, saya mengambil seluruh stack tangan top-pair. ==g:Call mudah.==

Turn adalah 3♠ — kartu mati. Pot-nya $200 dan villain jam $200 — taruhan sebesar pot, jadi sekarang saya hanya dapat 2:1 dan butuh **33%**. Tapi dengan **satu kartu tersisa flush saya hanya 19,6%**. Harga langsung berkata fold; implied odds saya sekarang nol karena villain all-in dan tak bisa membayar saya lebih. ==r:Fold yang benar== — dan tepat spot di mana "harapan" dulu menghabiskan seluruh stack saya.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-probability | Tabel Peluang & Probabilitas Poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Bagaimana cara menghitung pot odds dengan cepat?**

A. Bagi jumlah yang harus Anda call dengan total pot *setelah* call Anda. Call $50 ke pot $150 adalah 50 ÷ 200 = 25% — itulah equity yang Anda butuhkan. Jika peluang menang Anda mengalahkannya, call.

**Q. Apakah call Anda dihitung dalam pot odds?**

A. Ya. Rumus equity yang dibutuhkan memakai pot *akhir*, yang menyertakan call Anda sendiri. Call $50 ke pot $150 berarti pot akhir $200, jadi 50 ÷ 200 = 25%. Meninggalkan call Anda adalah kesalahan pemula paling umum.

**Q. Berapa rasio pot odds yang bagus?**

A. Makin tinggi makin bagus — Anda pasti ingin "mendapat 5:1" (butuh hanya 16,7%). Tapi "bagus" itu relatif terhadap tangan Anda: mendapat 2:1 (butuh 33%) hebat dengan flush draw dan buruk dengan gutshot. Selalu bandingkan harga dengan equity Anda.

**Q. Bagaimana mengubah pot odds dari rasio ke persentase?**

A. Rasio X:1 menjadi 1 ÷ (X + 1) sebagai persentase. Jadi 3:1 = 1 ÷ 4 = 25%; 4:1 = 1 ÷ 5 = 20%. Persentase itulah yang Anda bandingkan dengan peluang menang Anda.

**Q. Apa beda pot odds dan implied odds?**

A. Pot odds hanya menghitung chip yang ada di pot saat ini. Implied odds menambahkan chip *tambahan* yang Anda harapkan menang di street berikutnya jika tangan Anda lengkap. Implied odds membiarkan Anda call secara profit sebagian draw yang menurut pot odds saja harus di-fold — selama stack cukup dalam untuk membayar Anda.

**Q. Berapa pot odds yang diberikan taruhan sebesar pot?**

A. Taruhan sebesar pot memberi Anda 2:1, jadi Anda butuh 33% equity untuk call. Taruhan setengah pot memberi 3:1 (butuh 25%); overbet 2× pot memberi 1,5:1 (butuh 40%). Taruhan lebih besar menuntut lebih banyak equity, tapi bahkan overbet raksasa hanya meminta 40%.

**Q. Apa itu Rule of 4 and 2?**

A. Jalan pintas untuk mengubah outs menjadi equity: kalikan outs dengan 4 di flop (dua kartu tersisa) atau dengan 2 di turn (satu kartu tersisa). Sembilan flush outs ≈ 36% di flop, 18% di turn. Pakai ×4 hanya saat Anda akan melihat kedua kartu tanpa taruhan lagi.

**Q. Berapa banyak equity yang saya butuhkan untuk call sebuah taruhan?**

A. Tepat pot odds Anda sebagai persentase: call ÷ pot akhir. Melawan taruhan setengah pot Anda butuh 25%; melawan taruhan sebesar pot, 33%. Hitung outs Anda, ubah dengan Rule of 4 and 2, dan call saat equity Anda melewati batasnya.

---

## 3 Hal yang Harus Diingat

1. **Rumusnya:** equity yang dibutuhkan = call Anda ÷ pot akhir (dengan call Anda disertakan). Setengah pot = 25%, sebesar pot = 33%.
2. **Perbandingannya:** call saat equity Anda (outs × 4 atau × 2) mengalahkan pot odds Anda. Itulah seluruh keputusannya.
3. **Penentunya:** implied odds menyelamatkan draw yang meleset tipis dari harganya — tapi hanya saat stack dalam dan draw Anda menuju nut.

Lakukan ini beberapa ratus kali dan ia berhenti menjadi matematika dan menjadi insting. Anda akan fold call tanpa harapan, membuat yang profit, dan berhenti membayar pajak "harapan." Dari sini, pertajam angka mentah di balik setiap draw di [tabel peluang dan probabilitas poker](/id/blog/holdem-probability).

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Peluang & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabel Peluang & Probabilitas Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Setiap tangan, flop, dan draw — angka di balik harga</div>
  </a>
  <a href="/id/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Membaca Meja</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Membaca Meja di Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Hitung outs Anda dengan mengenali setiap draw</div>
  </a>
  <a href="/id/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Cash vs Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnamen vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa implied odds lebih dalam di cash game</div>
  </a>
</div>
`.trim(),
};

export default POST;
