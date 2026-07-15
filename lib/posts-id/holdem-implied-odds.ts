import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Implied Odds di Poker — Saat Harga Buruk Justru Call yang Benar",
  seoTitle: "Call yang Dilarang Pot Odds — Implied Odds Dijelaskan",
  desc: "Pot odds bilang fold, tapi call-nya tetap untung. Cara kerja implied odds — rumusnya, set-mining, reverse implied odds, dan kapan uangnya tak ada.",
  tldr: "Implied odds adalah chip tambahan yang Anda harapkan menang di street berikutnya saat draw Anda jadi. Ia membuat Anda bisa call sebuah draw yang menurut pot odds saja harus di-fold — tapi hanya jika stack dalam dan lawan benar-benar akan membayar Anda.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "11 mnt",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "Tumpukan chip yang dalam di belakang seorang pemain yang meng-call taruhan dengan flush draw di turn — momen implied odds membenarkan sebuah call yang tak dibayar oleh pot saja",
  tags: ["implied odds", "implied odds poker", "reverse implied odds", "cara menghitung implied odds", "implied odds vs pot odds", "set mining", "rumus implied odds", "implied odds flush draw"],
  content: `
Pot terbesar yang pernah saya menangkan berawal dari sebuah call yang "seharusnya" fold. Saya pegang ==b:6♠ 5♠== di button, flop open-ended draw, dan pot odds di flop bilang harganya tak ada. Saya call tetap — karena orang di seberang meja punya 200 big blind dan tak bisa fold top pair kalaupun nyawanya taruhannya. Straight-nya jadi di river, seluruh stack-nya ikut, dan akhirnya saya paham angka yang tak pernah dijelaskan orang dengan baik: ==implied odds.==

==Implied odds adalah alasan Anda bisa call sebuah draw yang "seharusnya" fold — dan alasan stack dalam membuat tangan spekulatif begitu menguntungkan di spot yang tepat dan begitu berbahaya di spot yang salah.== Masalahnya, sebagian besar pemain memperlakukannya sebagai kata sakti yang membenarkan call apa pun. Tidak begitu. Ini angka yang bisa Anda perkirakan, dan panduan ini menunjukkan caranya.

Peluang mentah di balik setiap draw datang dari [tabel peluang dan probabilitas poker](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); panduan ini adalah cara Anda memutuskan kapan peluang itu — plus uang yang masih akan datang — benar-benar membuat sebuah call menguntungkan. Ia melanjutkan tepat di titik [pot odds](/id/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") berhenti.

---

### Implied odds sekilas

:::stripe
call ÷ hit% − (pot + call) | Rumus implied odds
7,5:1 | Peluang sesungguhnya mem-flop set
0 | Implied odds Anda saat villain all-in
:::

---

## Apa Itu Implied Odds di Poker?

**Implied odds adalah chip tambahan yang Anda harapkan menang di street berikutnya saat draw Anda jadi — ditambahkan di atas pot yang sudah ada di meja sekarang.** Pot odds hanya bertanya "apakah harga saat ini sepadan?" Implied odds menanyakan pertanyaan yang lebih lengkap: "apakah harga saat ini *plus semua yang akan saya menangkan nanti* sepadan?"

Perbedaan itulah yang membuat Anda bisa call taruhan flop dengan flush draw yang tak mendapat harga langsung. Pot di depan Anda tak membayar cukup — tapi jika sebuah hati mendarat dan lawan membayar taruhan river besar, *total* yang Anda menangkan menutup call itu berkali-kali lipat.

Inilah jebakan yang menentukan seluruh konsep ini: uang masa depan itu adalah ==r:perkiraan==, bukan fakta. Ia sepenuhnya bergantung pada seberapa dalam stack-nya dan seberapa besar kemungkinan lawan membayar Anda saat Anda jadi. Berasumsi terlalu banyak, dan "implied odds" menjadi cerita yang Anda karang sendiri sambil membakar chip.

---

## Implied Odds vs Pot Odds: Perbedaan Kuncinya

**Pot odds hanya menghitung uang yang ada di pot sekarang; implied odds menambahkan uang yang Anda harapkan menang nanti jika Anda jadi.** Keduanya bukan lawan — implied odds adalah pot odds *yang diperluas ke masa depan*.

:::compare
Pot odds | Implied odds
Hanya chip yang ada di pot sekarang | Pot sekarang + chip yang Anda menangkan di street berikutnya
Fakta yang bisa dihitung persis | Perkiraan berdasarkan stack dan lawan
Memberi tahu apakah call membayar dirinya sendiri hari ini | Memberi tahu apakah call terbayar sepanjang seluruh tangan
Berlaku bahkan melawan all-in | Bernilai nol melawan all-in (tak ada taruhan lagi)
:::

Aturan praktisnya: **mulai dari pot odds.** Jika ekuitas Anda sudah mengalahkan harganya, call — tak perlu cerita. Jika draw Anda *nyaris meleset* dari harganya, di situlah implied odds menjadi penentu seri. Dan jika draw Anda meleset jauh dari harganya, implied odds biasanya juga tak bisa menyelamatkannya.

---

## Cara Menghitung Implied Odds

**Untuk menghitung implied odds, cari tahu berapa banyak ekstra yang Anda butuhkan saat jadi, dengan: ekstra dibutuhkan = (call Anda ÷ peluang jadi Anda) − (pot saat ini + call Anda).** Jika Anda realistis bisa menang sebanyak itu di street berikutnya, call-nya menguntungkan.

Ditulis rapi, dengan ==g:x== sebagai uang ekstra yang harus Anda menangkan saat jadi:

:::steps
Cari peluang jadi Anda | Hitung outs, ubah ke persentase ([Aturan 4 dan 2](/id/blog/holdem-pot-odds) mendekatkan Anda)
Bagi call Anda dengan peluang jadi itu | Ini total yang Anda butuhkan untuk menang agar impas
Kurangi pot yang sudah ada di sana | Sisanya adalah ekstra yang harus Anda menangkan nanti — itulah ==g:x==
Nilai apakah realistis | Stack dalam + lawan yang senang membayar = ya. Stack pendek atau board menakutkan = tidak
:::

Rumus dalam satu baris: ==b:x = (call ÷ hit%) − (pot saat ini + call).== Jika uang ekstra yang realistis bisa Anda tarik di street berikutnya *lebih besar* dari x, call-nya menguntungkan bahkan saat pot odds langsung bilang fold.

---

## Contoh Terhitung: Flush Draw di Turn

Mari jalankan angkanya agar rumus ini berhenti menjadi abstrak.

Anda pegang ==b:A♥ K♥== di board ==Q♥ 7♥ 2♣ 3♠== — nut flush draw, 9 outs, dengan satu kartu lagi. Pot-nya $100 dan lawan bertaruh $50 di turn, jadi ada ==$150 di tengah== dan $50 untuk Anda.

- **Pot odds dulu:** Anda mendapat 150:50, atau 3:1, jadi Anda butuh ekuitas **25%**. Flush Anda jadi di river hanya ==r:19,6%== dari waktu (9 outs ÷ 46 kartu tak terlihat). 19,6% kurang dari 25%, jadi harga langsung bilang ==r:fold.==
- **Sekarang implied odds:** x = (call ÷ hit%) − (pot + call) = (50 ÷ 0,196) − (150 + 50) = 255 − 200 = ==g:sekitar $55.== Itulah ekstra yang harus Anda menangkan di river saat flush Anda mendarat.

Jadi pertanyaannya bukan "haruskah saya call $50?" Melainkan "**saat sebuah hati jadi, bisakah saya menang setidaknya $55 lebih?**" Melawan lawan berstack dalam yang akan membayar taruhan river dengan top pair atau set, itu mudah — Anda call. Melawan seseorang yang hanya punya sisa $40, atau di board di mana hati keempat mematikan aksinya, Anda tak bisa — jadi Anda fold.

:::note
Call $50 yang sama, keputusan berlawanan — dan kartunya tak pernah berubah. Yang berubah adalah berapa banyak uang yang tersisa untuk dimenangkan. Itulah implied odds dalam satu kalimat.
:::

---

## Berapa Banyak yang Anda Butuhkan? Implied Odds per Jenis Draw

**Sebagai patokan, makin sulit draw Anda jadi — dan makin jelas terlihat saat ia mendarat — makin dalam stack yang dibutuhkan sebelum sebuah call menguntungkan.** Berikut panduan lapangan praktis. Perlakukan kelipatan stack sebagai ==r:heuristik, bukan hukum== — mereka sudah memperhitungkan kenyataan bahwa Anda tak selalu dibayar dan tak selalu menang saat Anda jadi.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Jadi % (1 kartu) | Stack di belakang dibutuhkan |
|:---|:---:|:---:|:---:|
| Flush draw | 9 | 19,6% | ~8–10× call |
| Open-ended straight | 8 | 17,4% | ~8–10× call |
| Set (pocket pair) | 2→set | ~11,8% flop | ~15–20× call |
| Gutshot straight | 4 | 8,7% | ~20×+ (jarang sepadan) |

</div>

Dua kekuatan menentukan angkanya. **Frekuensi:** gutshot jadi setengah sesering flush draw, jadi ia butuh payoff yang kira-kira dua kali lebih besar agar impas. **Penyamaran:** set yang tersembunyi dibayar jauh lebih banyak daripada four-flush yang jelas, karena lawan tak bisa menebak Anda memegangnya — itulah kenapa set mentoleransi hit rate rendahnya. [Nut flush draw bernilai jauh lebih besar daripada baby flush draw](/id/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") karena alasan yang sama: ia dibayar *dan* ia tak kalah saat jadi.

---

## Set Mining: Pocket Pair Kecil dan Implied Odds

**Anda mem-flop set (atau lebih baik) dengan pocket pair hanya 11,8% dari waktu — sekitar 7,5:1, atau 1 dari 8,5 — jadi set-mining hanya untung saat stack di belakang menutup semua kali Anda meleset.** Ini permainan implied-odds paling murni di poker: Anda call sebuah raise dengan pair kecil hanya untuk satu alasan — mem-flop three of a kind dan menguras stack seseorang.

![Pocket pair kecil berupa dua angka 5 di samping tumpukan chip yang dalam di atas felt hijau — persiapan untuk sebuah call set-mining yang hanya terbayar saat stack dalam](/images/holdem-implied-odds-setmine.webp "Pair kecil adalah emas dengan stack dalam di belakang — membayar sedikit sekarang untuk menang banyak saat Anda mem-flop set")

Karena Anda meleset ==r:tujuh dari delapan kali==, matematikanya kejam kecuali payoff-nya besar. Pedoman umumnya adalah **"aturan 5%": hanya call untuk set-mine jika effective stack setidaknya 20× call Anda** (call Anda ≤5% dari stack).

Inilah rincian jujur yang dilewati sebagian besar artikel:

- **Impas murninya adalah 7,5:1.** Dalam fantasi di mana Anda memenangkan *seluruh* stack lawan setiap kali Anda mem-flop set, Anda hanya butuh sekitar 7,5× di belakang.
- **Kenyataan menuntut 15–20×.** Anda tak selalu mendapat seluruh stack, Anda kadang mem-flop set dan *tetap kalah* (set-over-set, atau mereka mengisi tangan lebih besar), dan posisi penting. Bantalan ekstra menutup kebocoran itu.
- Jadi ==b:7,5:1 adalah lantai teoretis; 15–20× adalah aturan praktis.== Jangan mencampuradukkan keduanya — memakai angka 7,5 sebagai panduan meja nyata adalah kebocoran pelan.

Matematika mem-flop-set persisnya dan setiap angka "peluang mem-flop X" lainnya ada di [drawing odds](/id/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp"); intinya di sini adalah pair kecil adalah emas saat stack dalam dan sampah saat stack pendek — pair-nya tak berubah, implied odds-nya yang berubah.

---

## Reverse Implied Odds: Saat Draw Anda Jadi tapi Tetap Kalah

**Reverse implied odds adalah chip yang Anda *kalah* saat Anda menyelesaikan tangan tapi ia tetap kartu terbaik kedua.** Implied odds adalah uang yang Anda menangkan saat Anda jadi; reverse implied odds adalah uang yang Anda tumpahkan saat Anda jadi *dan tetap kalah*. Abaikan ia dan Anda akan jatuh cinta pada draw yang diam-diam adalah jebakan.

:::compare
Implied odds | Reverse implied odds
Uang yang Anda ==g:menangkan== di street berikutnya saat Anda jadi | Uang yang Anda ==r:kalah== di street berikutnya saat Anda jadi tapi ia terbaik kedua
Memberi imbalan draw ke nuts | Menghukum draw lemah yang terdominasi
Menaikkan nilai sebuah draw | Menurunkan nilai sebuah draw
:::

Tiga spot reverse-implied klasik:

- **Baby flush.** Anda pegang ==b:7♦ 6♦== dan board membawa diamond ketiga. Anda mendapat flush Anda — dan membayar sebuah stack ke orang yang memegang ==b:A♦== untuk nut flush. Kartu "kemenangan" Anda justru merugikan Anda.
- **Ujung buntu sebuah straight.** Anda pegang ==b:6♦ 5♦== di ==b:9♥ 8♣ 2♠==, dan 7 di turn membuat 5-6-7-8-9 Anda. Tapi itu ujung *rendah* — siapa pun yang memegang J-10 kini punya 7-8-9-10-==g:J==, straight lebih tinggi, dan kartu yang Anda butuhkan justru membayarnya.
- **Top pair yang terdominasi.** Anda memasangkan king Anda dengan kicker lemah dan terus call — lurus ke A-K seseorang.

Pelajarannya: sebuah draw ke ==g:nuts== bernilai jauh lebih besar daripada draw yang sama ke tangan terbaik kedua, walaupun keduanya punya outs identik. Saat draw Anda bukan ke nuts, turunkan implied odds Anda — sebagian "outs" Anda sebenarnya justru membayar lawan Anda.

---

## Kapan JANGAN Mengandalkan Implied Odds (Kesalahan Umum)

**Begitu lawan Anda all-in, implied odds Anda tepat nol — tak ada lagi uang untuk dimenangkan, jadi Anda kembali ke pot odds murni.** Ini konsep yang paling disalahgunakan di poker: "saya punya implied odds" adalah alasan yang diraih pemain setelah sebuah call yang tak pernah dibenarkan.

Waspadai kebocoran ini:

:::card
🚫 | Villain all-in | Tak ada street berikutnya berarti tak ada uang berikutnya. Implied odds = 0. Pakai pot odds saja
📉 | Stack pendek di belakang | Jika hanya ada setengah pot tersisa untuk dimenangkan, "saya akan dibayar di river" adalah fantasi
🙅 | Lawan yang "tak membayar" | Nit yang hanya bertaruh dengan nuts tak akan membayar flush Anda. Implied odds Anda hidup dan mati pada kesediaannya call
🃏 | Board menakutkan | Jika kartu yang menyelesaikan draw Anda juga membekukan aksi (empat ke flush, board berpasangan), tak ada yang membayar Anda
🎣 | Berasumsi stack habis | "Mungkin jadi dan mereka mungkin stack off" adalah dua tebakan yang ditumpuk di atas sebuah fold. Perkirakan secara konservatif
:::

Saya kehilangan lebih banyak chip pada implied odds khayalan daripada pada bad beat mana pun. Perbaikannya adalah satu pertanyaan jujur sebelum Anda call sebuah draw yang meleset dari harganya: ==b:"Saat saya jadi, siapa yang benar-benar membayar saya, dan berapa banyak?"== Jika Anda tak bisa menyebut uangnya, uangnya tak ada.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-pot-odds | Cara Menghitung Pot Odds | /images/holdem-pot-odds-hero.webp
/id/blog/holdem-drawing-odds | Peluang Mem-flop Set, Flush & Lainnya | /images/holdem-drawing-odds-hero.webp
:::

## FAQ

**Q. Apa itu implied odds di poker?**

A. Implied odds adalah chip tambahan yang Anda harapkan menang di street berikutnya jika draw Anda jadi, ditambahkan ke chip yang sudah ada di pot. Ia membuat Anda bisa call dengan untung sebagian draw yang menurut pot odds saja harus di-fold — selama stack cukup dalam untuk membayar Anda saat Anda jadi.

**Q. Bagaimana cara menghitung implied odds?**

A. Pakai: ekstra dibutuhkan = (call Anda ÷ peluang jadi Anda) − pot saat ini. Meng-call $50 dengan flush draw yang jadi 19,6% dari waktu berarti 50 ÷ 0,196 = $255, dikurangi $200 yang sudah bermain (pot $150 plus call $50 Anda) = sekitar $55. Jika Anda realistis bisa menang $55 lebih saat Anda jadi, call-nya menguntungkan. Perhatikan bahwa ini selalu perkiraan, karena taruhan masa depan tak terjamin.

**Q. Apa perbedaan antara pot odds dan implied odds?**

A. Pot odds hanya menghitung uang yang ada di pot sekarang dan bisa dihitung persis. Implied odds menambahkan uang yang Anda harapkan menang di street berikutnya, yang merupakan perkiraan. Pot odds memberi tahu apakah sebuah call membayar dirinya sendiri hari ini; implied odds memberi tahu apakah ia terbayar sepanjang seluruh tangan.

**Q. Apa itu reverse implied odds?**

A. Reverse implied odds adalah chip yang Anda kalah saat Anda menyelesaikan draw tapi ia tetap terbaik kedua — seperti membuat flush rendah melawan yang lebih tinggi, atau ujung rendah sebuah straight melawan yang lebih besar. Mereka membuat draw non-nut bernilai kurang dari yang disiratkan outs-nya, jadi Anda butuh harga langsung yang lebih baik untuk call.

**Q. Apa itu implied odds yang bagus — berapa banyak yang Anda butuhkan?**

A. Tergantung draw Anda. Flush dan open-ended straight draw butuh kira-kira 8–10× call di belakang dalam stack; set mining butuh sekitar 15–20× (aturan "5%"). Makin sulit draw jadi, makin dalam stack yang harus ada untuk membenarkan call.

**Q. Apakah implied odds berlaku saat lawan Anda all-in?**

A. Tidak. Saat lawan Anda all-in tak ada lagi ronde taruhan, jadi tak ada uang tambahan untuk dimenangkan — implied odds Anda nol. Di spot itu Anda harus mengandalkan pot odds saja. Berasumsi punya implied odds melawan all-in adalah kesalahan yang umum dan mahal.

**Q. Bagaimana implied odds bekerja dalam set mining?**

A. Anda mem-flop set dengan pocket pair hanya 11,8% dari waktu (sekitar 7,5:1), jadi Anda butuh payoff besar saat Anda jadi. Impas teoretisnya kira-kira 7,5× call Anda dalam stack, tapi pedoman praktisnya 15–20× — bantalan ekstra menutup kali Anda meleset, tak mendapat aksi, atau kalah dengan set.

**Q. Apakah Anda punya implied odds dengan flush draw?**

A. Biasanya ya, karena flush yang jadi sering dibayar — tapi hanya jika ia flush kuat dan stack dalam. Nut flush draw punya implied odds luar biasa; baby flush draw membawa reverse implied odds, karena Anda bisa menyelesaikannya dan tetap kalah dari flush lebih tinggi.

**Q. Kenapa implied odds lebih baik di cash game berstack dalam?**

A. Implied odds semuanya tentang uang yang tersisa untuk dimenangkan, dan stack dalam berarti lebih banyak. Di cash game dalam sebuah pair kecil atau suited connector bisa menang satu stack penuh saat ia jadi, jadi tangan spekulatif naik nilainya. Di spot berstack pendek atau turnamen ada lebih sedikit untuk dimenangkan, jadi tangan yang sama itu kehilangan nilai.

---

## 3 Hal yang Harus Diingat

1. **Rumusnya:** ekstra dibutuhkan = (call ÷ hit%) − (pot saat ini + call). Jika Anda realistis bisa menang lebih dari itu nanti, call-nya bagus bahkan saat pot odds bilang fold.
2. **Cek kenyataannya:** implied odds adalah perkiraan yang hidup di atas stack dalam dan lawan yang membayar. Melawan all-in atau stack pendek, ia nol — kembali ke pot odds.
3. **Cermin gelapnya:** reverse implied odds menghukum draw non-nut. Sebuah draw ke nuts bernilai jauh lebih besar daripada draw yang sama ke terbaik kedua.

Kuasai ini dan Anda berhenti membakar chip pada call penuh harapan sambil tetap membuat call menguntungkan yang tak berani dilakukan orang lain. Dari sini, kunci angka mentahnya dengan [tabel peluang dan probabilitas poker](/id/blog/holdem-probability), atau lihat persis seberapa sering tiap draw mendarat di [drawing odds](/id/blog/holdem-drawing-odds).

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabel Peluang & Probabilitas Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Setiap tangan, flop, dan draw — angka di balik call</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Menghitung Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Harga langsung — tempat implied odds bermula</div>
  </a>
  <a href="/id/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Drawing Odds & Peluang Mem-flop X</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Seberapa sering set, flush, atau straight benar-benar mendarat</div>
  </a>
  <a href="/id/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tangan Awal</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Bagan Tangan Awal per Posisi</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tangan spekulatif mana yang layak di-draw</div>
  </a>
</div>
`.trim(),
};

export default POST;
