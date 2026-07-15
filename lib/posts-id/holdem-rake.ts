import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "Apa Itu Rake di Poker? Bagaimana House Dibayar — dan Berapa yang Sebenarnya Anda Bayar",
  seoTitle: "Biaya yang Diam-diam Menggerogoti Kemenangan Anda — Apa Itu Rake?",
  desc: "Rake adalah biaya yang diambil house dari tiap pot cash game. Cara kerja pot rake, time charge, biaya turnamen, berapa yang Anda bayar per sesi, plus rakeback.",
  tldr: "Rake adalah potongan kecil yang diambil cardroom dari setiap pot untuk menyelenggarakan permainan — biasanya 2,5–10% hingga cap beberapa dolar. Sebagian besar room tidak mengambil apa pun jika semua fold sebelum flop ('no flop, no drop'). Ia paling memukul pemain stake rendah dan short-handed, dan rakeback mengembalikan sebagian kepada regular.",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "11 mnt",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "Seorang dealer menarik tumpukan kecil chip dari pot tengah ke slot drop rake di meja felt hijau",
  tags: ["rake", "apa itu rake di poker", "rake poker dijelaskan", "rakeback", "cap rake poker", "time rake", "rake turnamen", "cara kerja rake di poker"],
  content: `
Butuh sebulan menyedihkan penuh sesi "impas" bagi saya untuk menyadari ke mana uang saya sebenarnya pergi. Saya tidak kalah dari pemain lain — saya mengalahkan mereka, sedikit. Saya kalah dari ==potongan house pada setiap pot yang saya menangkan.== Biaya yang diam-diam itu disebut **rake**, dan sampai Anda memahaminya, Anda bisa menjadi pemain menang di atas kertas tapi kalah di kasir.

Rake adalah cara cardroom menghasilkan uang dari permainan yang ia sendiri tidak memainkan satu tangan pun. Di bawah ini persis apa itu rake, setiap cara ia dikumpulkan, matematika jujur soal ==g:berapa yang sebenarnya Anda bayar per sesi==, dan bagaimana rakeback menarik kembali sebagian. Ini adalah biaya yang menentukan apakah mengalahkan poker stake kecil bahkan mungkin.

---

### Rake sekilas

:::stripe
2,5–10% | Kisaran pot rake umum
$3–$6 | Cap rake live yang lazim
No flop, no drop | Biasanya tanpa rake jika semua fold preflop
20–40% | Deal rakeback umum
:::

---

## Apa Itu Rake di Poker?

**Rake adalah komisi yang diambil cardroom dari sebuah cash game karena menyelenggarakannya.** Karena poker dimainkan pemain-lawan-pemain — house tak pernah bertaruh — rake adalah cara room, kasino, atau app benar-benar menghasilkan uang. Ia adalah biaya layanan untuk dealer, meja, chip, dan keamanan, disaring sedikit demi sedikit dari pot.

Dalam cash game biasanya diambil langsung dari pot: persentase kecil dari uang di tengah, dijatuhkan ke slot di meja sebelum pemenang dibayar. Dalam turnamen ia bekerja berbeda — biayanya dibaurkan ke dalam buy-in Anda di depan (lebih lanjut di bawah). Bagaimanapun, rake terpisah dari apa pun yang Anda menangkan atau kalahkan ke pemain lain, yang justru membuatnya begitu mudah terlewat. Inilah salah satu perbedaan praktis terbesar antara [cash game dan turnamen](/id/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## Bagaimana Rake Diambil? Pot Rake, Time Charge & Dead Drop

![Seorang dealer menyapu beberapa chip dari tengah pot ke slot rake meja sebelum mendorong sisanya ke pemenang](/images/holdem-rake-drop.webp "Pot rake: persentase kecil disaring dari pot dan dijatuhkan sebelum pemenang dibayar")

Rake bukan hanya satu jenis. Bagaimana house mengumpulkan uangnya tergantung pada stake dan room, dan perbedaannya penting — inilah perbandingan yang tak satu halaman kompetitor pun paparkan:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jenis | Cara diambil | Jumlah umum | Di mana Anda melihatnya |
|:---|:---|:---:|:---|
| **Pot rake (berskala)** | % dari tiap pot, hingga cap | 2,5–10%, cap $1–$6 | Sebagian besar cash game low/mid, online |
| **Time charge** | Biaya rata per pemain, tiap 30 mnt | ~$10–$15 per jam | Live stake tinggi ($10/$20+) |
| **Dead drop** | Button membayar rake tetap tiap tangan | Tetap per tangan | Beberapa room live |
| **Biaya turnamen** | Ditambahkan ke buy-in di depan | ~5–20% dari buy-in | Setiap turnamen |

</div>

Beberapa aturan mengatur bagaimana pot rake sebenarnya disaring:

- **No flop, no drop.** Di sebagian besar room, jika tangan berakhir sebelum flop — semua fold ke sebuah raise preflop — house **tidak mengambil rake** sama sekali. (Tidak universal: beberapa situs, terutama GGPoker, memang me-rake sebagian pot preflop, jadi periksa room Anda.)
- **Cap rake.** House tak pernah mengambil persentase penuh pada pot besar — ia berhenti pada maksimum, umumnya **$3–$6 live** dan **$1–$3 online**. Cap biasanya berskala dengan stake dan sering menyusut saat lebih sedikit pemain yang dibagikan kartu (pot heads-up mungkin di-cap pada $1).
- **Time charge alih-alih pot rake.** Pada stake lebih tinggi, room sering berhenti me-rake pot dan malah menarik biaya rata — katakanlah $10–$15 per jam per pemain, diambil tiap setengah jam. Ini menguntungkan pemain yang memenangkan pot besar, karena pot $2.000 tak lagi disaring.
- **Dead drop.** Metode yang lebih jarang di mana hanya pemain di button yang membayar rake tetap tiap tangan, dikumpulkan sebelum kartu dibagikan — dirancang agar pemenang pot besar tidak dipajaki lebih dari siapa pun.

---

## Berapa Rake yang Sebenarnya Anda Bayar?

![Pot chip yang sederhana di felt dengan beberapa dolar sudah disisihkan sebagai rake, menunjukkan berapa biaya diam-diam satu tangan](/images/holdem-rake-lowstakes.webp "Dalam permainan stake rendah cap nyaris tak bergerak saat pot membesar, jadi pot kecil paling berat di-rake secara proporsional")

Inilah bagian yang mengubah cara saya memandang permainan. Persentasenya terdengar mungil — 5%, cap beberapa dolar — tapi Anda membayarnya pada nyaris setiap pot yang Anda menangkan, selama berjam-jam.

**Sebuah live game $1/$2.** Dengan rake 10% cap $5 dan kira-kira 30 tangan dibagikan per jam, sebagian besar pot yang diperebutkan mengenai atau mendekati cap. Satu meja sibuk saja bisa membayar **$100+ per jam** ke dalam drop di antara semua pemain. Uang itu keluar langsung dari kemenangan kolektif — itulah alasan sebuah meja penuh pemain yang kurang lebih setara perlahan menguras chip ke house.

**"Jebakan rake" stake rendah.** Inilah intinya yang harus didengar setiap pemula. Karena cap nyaris tak naik saat Anda turun stake, makin *rendah* Anda bermain, makin *besar* gigitan yang diambil rake secara proporsional. Contoh terhitung di NL50 online (ilustratif, dan berayun tergantung berapa banyak tangan Anda mainkan):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pemain sama, game sama | Rake dibayar | Hasil |
|:---|:---:|:---|
| Room dengan **cap $2** | ~5 bb/100 | Win rate +8 bb/100 tetap **menang (+3)** |
| Room dengan **cap $4** | ~8–9 bb/100 | +8 bb/100 berubah jadi **kalah (−1)** |

</div>

Skill sama, edge sama atas lapangan — dan rake saja adalah selisih antara menang dan kalah. Itulah kenapa grinder stake rendah yang serius terobsesi pada struktur rake dan kenapa [pot odds](/id/blog/holdem-pot-odds) serta win rate selalu harus dibaca *setelah* house mengambil potongannya.

---

## Apa Itu Rakeback?

Karena house untung dari volume yang Anda hasilkan, sebagian besar room mengembalikan sebagiannya untuk membuat Anda terus bermain. **Rakeback adalah persentase dari rake yang Anda bayar secara pribadi, dikembalikan kepada Anda** — biasanya lewat poin, cashback, atau program loyalitas, dibayar mingguan atau bulanan. Deal rakeback 30% cuma berarti Anda mendapat kembali 30 sen dari setiap dolar yang Anda rake.

Ada dua cara ia dihitung:

:::compare
Contributed | Dealt
Berdasarkan rake dari pot **yang Anda masukkan uang** — metode modern standar | Dibagi rata di antara **semua yang dibagikan kartu** ke pot ter-rake, entah mereka berkontribusi atau tidak — kini langka
:::

Bagi pemain kasual, rakeback adalah perk kecil. Bagi regular bervolume tinggi ia sangat besar: selisih antara deal 20% dan 40% bisa bernilai **puluhan ribu setahun**, dan bagi banyak grinder impas, rakeback *adalah* profit mereka. Ia secara efektif menurunkan rake sejati Anda, jadi layak dicek sebelum Anda memilih tempat bermain. Sadari saja bahwa banyak saran rakeback online digerakkan afiliasi — perlakukan halaman "daftar di sini" dengan skeptisisme yang Anda berikan pada pitch penjualan mana pun.

---

## Apakah Turnamen Punya Rake?

Bukan jenis pot — tapi Anda tetap membayar biaya, dan ia bersembunyi di depan mata. Buy-in turnamen dibagi menjadi dua bagian, ditampilkan dengan **tanda "+"**:

:::pull
Turnamen **$100 + $9** berarti $100 masuk prize pool dan **$9 adalah biaya house.**
:::

Biaya itu — juga disebut **juice** atau **vig** — adalah padanan rake untuk turnamen. Ia biasanya **5–20% dari buy-in**, dan bersifat rata: Anda membayarnya entah bust pertama atau memenangkan seluruhnya. Buy-in lebih rendah membawa biaya proporsional lebih tinggi (sit-and-go $3 + $0,30 adalah 10%), dan aturan praktis yang lazim adalah format **turbo cepat sebaiknya di bawah ~13% biaya** agar tetap bisa dikalahkan jangka panjang. Karena struktur turnamen sepenuhnya berbeda dari cash game, cara Anda membayar untuk bermain pun berbeda — sebuah pembedaan yang layak dipahami bersama fundamental [turnamen vs cash game](/id/blog/holdem-tournament-vs-cash-game).

---

## Rake Online vs Live: Mana Lebih Tinggi?

Ini benar-benar trade-off, dan jawabannya mengejutkan orang:

- **Rake live** cenderung **persentase lebih tinggi (sering 10%) dengan cap lebih tinggi ($4–$6)** — tapi Anda hanya memainkan ~30 tangan per jam, jadi Anda membayarnya lebih jarang.
- **Rake online** biasanya **persentase lebih rendah (3–5%) dengan cap lebih kecil ($1–$3)** — tapi Anda mungkin melihat 250+ tangan per jam di berbagai meja, jadi grinder bervolume bisa membayar rake *lebih banyak* per jam dibanding pemain live meski tarifnya lebih rendah.

Pelajarannya: jangan pernah menilai rake dari persentase saja. Yang penting adalah persentase **dikali seberapa sering Anda membayarnya.** Game online 5% "murah" yang Anda mainkan empat meja bisa memakan biaya lebih besar daripada game live 10% "mahal" — yang justru alasan rakeback dan pemilihan meja lebih penting secara online.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-straddle | Apa Itu Straddle di Poker? | /images/holdem-straddle-hero.webp
/id/blog/holdem-tournament-vs-cash-game | Turnamen vs Cash Game | /images/tournament-table-action.webp
:::

## FAQ

**Q. Apa itu rake di poker?**

A. Rake adalah biaya yang diambil cardroom dari sebuah cash game karena menyelenggarakannya — normalnya persentase kecil dari tiap pot (2,5–10%) hingga maksimum ter-cap. Karena house tak bermain, rake adalah sumber pendapatan utamanya. Turnamen mengenakan biaya setara yang dibangun ke dalam buy-in.

**Q. Bagaimana rake dihitung?**

A. Di sebagian besar cash game ia adalah persentase dari pot, dijatuhkan sebelum pemenang dibayar, hingga cap beberapa dolar. Persentase dan cap bervariasi menurut room dan stake, dan cap sering menyusut saat lebih sedikit pemain dibagikan kartu. Pada stake lebih tinggi, room bisa mengenakan time fee rata per pemain sebagai gantinya.

**Q. Apakah Anda membayar rake jika semua fold sebelum flop?**

A. Biasanya tidak. Sebagian besar room mengikuti "no flop, no drop" — jika tangan berakhir preflop, tak ada rake diambil. Namun tidak universal: beberapa situs (terutama GGPoker) me-rake sebagian pot preflop, jadi layak memastikan aturan room Anda.

**Q. Berapa rake yang diambil di live game $1/$2?**

A. Lazimnya 10% dari pot cap sekitar $5. Sebagian besar pot yang diperebutkan mencapai cap, jadi satu meja sibuk saja bisa men-drop $100 atau lebih per jam secara kolektif. Biaya itulah kenapa sebuah meja berisi pemain yang setara perlahan kehilangan chip ke house dari waktu ke waktu.

**Q. Apa itu rakeback?**

A. Rakeback mengembalikan persentase dari rake yang Anda bayar secara pribadi — sering 20–40% — lewat poin, cashback, atau program loyalitas. Ia secara efektif menurunkan rake sejati Anda. Bagi pemain kasual ia perk kecil; bagi regular bervolume tinggi ia bisa jadi selisih antara tahun yang kalah dan yang menang.

**Q. Apakah turnamen poker punya rake?**

A. Ya, tapi bukan dari pot. Biayanya ditambahkan ke buy-in Anda dan ditampilkan dengan "+" — turnamen $100 + $9 mengirim $100 ke prize pool dan $9 ke house. Biaya itu (si "juice" atau "vig") biasanya 5–20% dari buy-in dan dibayar terlepas dari bagaimana Anda finis.

**Q. Bagaimana rake memengaruhi win rate Anda?**

A. Signifikan — terutama pada stake rendah dan short-handed, di mana cap tak berskala turun bersama stake. Rake bisa mengubah pemenang kecil menjadi pecundang: pemain +8 bb/100 yang sama bisa berakhir sedikit negatif hanya dengan pindah ke room dengan cap rake lebih tinggi. Selalu ukur win rate Anda setelah rake.

**Q. Rake poker online atau live lebih tinggi?**

A. Rake live persentase lebih tinggi dengan cap lebih tinggi, tapi Anda memainkan jauh lebih sedikit tangan per jam. Rake online persentase lebih rendah dengan cap lebih kecil, tapi multi-tabling berarti Anda membayarnya pada jauh lebih banyak tangan — jadi grinder bervolume bisa membayar rake lebih banyak per jam secara online. Nilai rake dari tarif dikali frekuensi, bukan tarif saja.

---

## 3 Hal yang Harus Diingat

1. **Rake adalah potongan house untuk menyelenggarakan permainan** — biasanya 2,5–10% dari tiap pot hingga cap kecil, dan terpisah dari apa yang Anda menangkan atau kalahkan ke lawan.
2. **Ia paling memukul stake rendah.** Cap nyaris tak bergerak saat Anda turun, jadi secara proporsional Anda membayar rake paling banyak di dasar — "jebakan rake" yang membuat mikro-stake begitu sulit dikalahkan.
3. **Rakeback dan struktur penting.** Mendapat 20–40% rake Anda kembali, dan memilih room dengan cap yang ramah pemain, bisa membalik hasil jangka panjang Anda — ukur segalanya *setelah* rake.

Kini setelah Anda bisa melihat potongan house, angka yang Anda baca di tempat lain jadi lebih masuk akal: [pot odds](/id/blog/holdem-pot-odds) Anda, win rate Anda, dan kenapa sebuah [straddle](/id/blog/holdem-straddle) yang menggelembungkan pot juga diam-diam memberi makan rake. Poker bisa dikalahkan — tapi hanya begitu Anda mengalahkan pemain lain *lebih* dari yang diambil house.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnamen vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa keduanya membebani Anda dengan cara yang sama sekali berbeda</div>
  </a>
  <a href="/id/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glosarium</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Apa Itu Straddle?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Blind ekstra yang menggelembungkan pot — dan rake</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Peluang &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Baca pot Anda setelah house mengambil potongannya</div>
  </a>
  <a href="/id/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Kerja Turnamen Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ke mana biaya buy-in sebenarnya pergi</div>
  </a>
</div>
`.trim(),
};

export default POST;
