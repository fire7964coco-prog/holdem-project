import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "Apa Itu ICM di Poker? Independent Chip Model, Dijelaskan",
  seoTitle: "Chip Anda Tak Bernilai Nominalnya — ICM di Poker",
  desc: "Di turnamen chip Anda bukan uang tunai — hanya juara pertama yang dibayar penuh. ICM mengubah stack Anda jadi uang hadiah nyata. Begini cara kerjanya.",
  tldr: "ICM (Independent Chip Model) mengubah stack chip turnamen Anda menjadi nilai uang hadiah nyata, memakai payout dan stack setiap pemain. Karena Anda hanya memenangkan satu hadiah pertama, menggandakan chip tidak pernah menggandakan uang Anda — jadi stack chip leader bernilai lebih kecil dari porsi chipnya, dan short stack bernilai lebih besar. Celah itulah alasan Anda fold tangan di bubble yang akan jadi call mudah di cash game.",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 mnt",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Chip poker final table ditumpuk di depan tangga payout, menunjukkan bahwa stack chip lebih besar tidak berubah 1:1 menjadi porsi uang hadiah yang lebih besar",
  tags: ["poker icm", "apa itu icm di poker", "arti icm poker", "icm vs chip ev", "icm deal", "chip chop vs icm", "cara menghitung icm", "strategi icm poker"],
  content: `
Pertama kali ICM merugikan saya, saya bahkan tak tahu ia ada. Tersisa empat orang, tiga dibayar, dan saya melihat pocket jacks dengan stack menengah. Saya shove, chip leader call dengan ace-ten, dan saya bust di bubble tanpa apa-apa. ==Di cash game shove itu benar. Di bubble itu, ia bencana== — dan alasannya adalah gagasan paling penting dalam poker turnamen.

==Chip di turnamen bukan uang. Anda hanya pernah memenangkan *satu* hadiah pertama, jadi menggandakan stack tak pernah menggandakan nilai Anda sebenarnya.== ICM — Independent Chip Model — adalah matematika yang mengubah tumpukan chip Anda menjadi dolar nyata yang diwakilinya, dan begitu Anda melihatnya, call dan fold yang tadinya terasa salah tiba-tiba masuk akal. Panduan ini membawa Anda dari "apa singkatan ICM" sampai membagi deal final table, dengan setiap angka dihitung agar Anda bisa memeriksanya sendiri.

ICM hidup di dalam [permainan turnamen](/id/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") secara khusus — itulah alasan permainan MTT tahap akhir sama sekali tak mirip cash game.

---

### ICM sekilas

:::stripe
chip ≠ uang | Anda hanya memenangkan satu hadiah pertama
chip leader | bernilai LEBIH KECIL dari porsi chipnya
short stack | bernilai LEBIH BESAR dari porsi chipnya
:::

---

## Apa Itu ICM di Poker?

**ICM (Independent Chip Model) mengubah stack chip menjadi nilai uang hadiah nyatanya, memakai payout tersisa dan ukuran stack setiap pemain.** Ia menjawab satu pertanyaan: ==jika turnamen berakhir sekarang juga dengan stack ini, berapa nilai irisan saya dari prize pool sebenarnya dalam dolar?==

Ia bekerja dengan memperkirakan seberapa sering setiap pemain finis di tiap posisi berbayar — pertama, kedua, ketiga, dan seterusnya — dari porsi chip mereka, lalu mengalikan probabilitas itu dengan payout. Makin besar stack Anda, makin sering Anda finis tinggi; tapi karena ==hadiah teratas dibatasi, chip ekstra membeli uang yang makin sedikit.==

Pergeseran mental kuncinya: di cash game satu chip adalah satu dolar, titik. Di turnamen satu chip adalah *tiket lotre* atas seperangkat hadiah tetap. ICM memberi harga tiket itu. Ia hanya berlaku untuk turnamen dan sit-and-go — [tidak pernah untuk cash game](/id/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), tempat chip Anda sudah setara nilai nominalnya.

---

## Kenapa Chip Anda Tak Bernilai Nominalnya dalam Uang

**Karena uang hadiah "berat di atas" dan terkunci di bawah Anda.** Misalkan tiga hadiah membayar $50 / $30 / $20. Begitu Anda masuk uang, Anda dijamin setidaknya $20 — jadi chip yang melindungi $20 itu berharga, sementara chip yang meraih juara pertama mengejar hadiah yang hanya bisa Anda menangkan sekali.

Itu membuat kurva chip-ke-uang ==melengkung==: chip pertama (bertahan hidup) bernilai banyak, chip terakhir (mengejar kemenangan) bernilai lebih sedikit. Pemain dengan separuh chip tidak memiliki separuh prize pool — mereka memiliki jauh lebih sedikit, karena mereka tak bisa finis lebih baik dari juara pertama tapi *bisa* tetap bust.

Balik keadaannya dan short stack adalah pemenang matematika ini. Mereka sudah punya klaim nyata atas pay jump di bawah mereka, jadi ==setiap chip mereka bernilai lebih dari nominalnya==. Asimetri tunggal ini — big stack dinilai berlebih dalam chip, short stack dinilai kurang — menggerakkan setiap keputusan ICM yang akan pernah Anda buat.

---

## Bagaimana ICM Dihitung? (Model Malmuth–Harville)

**ICM memberi setiap pemain probabilitas finis di tiap posisi murni berdasarkan ukuran stack, lalu mengalikannya dengan payout.** Metode ini sering disebut model Malmuth–Harville — matematika probabilitas finis berasal dari karya David Harville pada 1970-an tentang odds pacuan kuda, yang diterapkan Mason Malmuth ke poker.

Aturannya sederhana dan rekursif:

- Peluang Anda finis **1st** = stack Anda ÷ total chip.
- Peluang Anda finis **2nd** = jumlah, atas setiap pemain lain yang bisa finis 1st, dari (peluang mereka menang) × (stack Anda ÷ chip tersisa tanpa mereka).
- Lanjutkan untuk tiap posisi lebih rendah.

Mari kita hitung sungguhan. Tersisa tiga pemain, hadiah ==$50 / $30 / $20== (pool $100), dan stack-nya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Finis | Leader (5.000 · 50%) | Middle (3.000 · 30%) | Short (2.000 · 20%) |
|:--|:--:|:--:|:--:|
| 1st | 50,0% | 30,0% | 20,0% |
| 2nd | 33,9% | 37,5% | 28,6% |
| 3rd | 16,1% | 32,5% | 51,4% |

</div>

Ambil angka 2nd-place leader agar Anda melihat rekursinya: jika Middle menang pertama (30% dari waktu), leader lalu mengambil 5.000 dari 7.000 chip tersisa = 71,4%, dan 0,30 × 0,714 = 21,4%; jika Short menang pertama (20%), leader mengambil 5.000 dari 8.000 = 62,5%, dan 0,20 × 0,625 = 12,5%. Jumlahkan: ==33,9%== dari waktu leader finis 2nd.

Sekarang kalikan tiap baris dengan payout dan Anda dapat nilai dolar tiap stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pemain | Chip % | Nilai ICM | ICM % | vs chip |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50,0% | ==$38,39== | 38,4% | ==r:−11,6== |
| Middle | 30,0% | $32,75 | 32,8% | ==g:+2,8== |
| Short | 20,0% | $28,86 | 28,9% | ==g:+8,9== |

</div>

Itu dia dalam angka: leader punya ==separuh chip tapi hanya 38,4% dari uang==, sementara 20% chip short stack bernilai 28,9%. Anda tak perlu menghitung ini dengan tangan di meja — [kalkulator ICM](/calculator) melakukannya seketika — tapi melihat mesinnya sekali itulah yang membuat strateginya melekat.

---

## ICM vs Chip EV — Apa Bedanya?

**Chip EV mengukur keputusan dalam chip yang dimenangkan atau hilang; ICM (atau "$EV") mengukurnya dalam uang hadiah nyata. Keduanya sepakat di awal dan berpisah tajam di akhir.** Di awal turnamen, dengan pay jump kecil yang masih jauh, satu chip pada dasarnya adalah satu chip — Anda main [chip EV](/id/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), mengumpulkan tanpa henti. Menjelang uang dan final table, ICM mengambil alih.

Benturan klasiknya adalah all-in marginal. Dalam chip EV, coin flip untuk pot besar bisa oke atau bahkan bagus — Anda memperoleh sebanyak chip yang Anda pertaruhkan. Dalam ICM itu bisa jadi ==fold== jelas, karena bust membebani Anda uang hadiah terkunci yang tak bisa Anda ambil kembali, sementara chip yang akan Anda menangkan bernilai lebih kecil dari nominalnya.

Itu persis kesalahan yang saya buat dengan jacks itu: shove chip-EV yang oke, shove ICM yang kalah. ==Chip EV bertanya "apakah ini akan membangun stack saya?" ICM bertanya "apakah ini akan membangun bankroll saya?"== — dan hanya yang kedua yang membayar.

---

## "Pajak ICM": Kenapa Kehilangan Chip Lebih Menyakitkan daripada Menang Membantu

**"Pajak ICM" adalah celah antara persentase chip Anda dan persentase uang nyata Anda — nilai yang lenyap begitu stack jadi berat di atas.** Dalam contoh terhitung, chip leader berkata 50% tapi uang berkata 38,4%: ==pajak ICM 11,6 poin== atas menjadi big stack.

Pajak itu muncul di setiap all-in sebagai **risk premium** — equity ekstra yang Anda butuhkan *di atas* titik impas chip-EV sebelum sebuah call benar-benar profit dalam dolar. Jika matematika chip berkata Anda butuh 40% untuk call, ICM mungkin menuntut 48-50%, karena sisi buruknya (bust, kehilangan equity pay-jump) melebihi sisi baiknya (chip bernilai lebih kecil dari nominal).

Pemain yang paling merasakan ini adalah **medium stack di bubble** — cukup besar untuk punya equity nyata yang bisa hilang, tak cukup pendek untuk dipaksa masuk. Mereka membawa risk premium tertinggi dan sebaiknya main paling ketat. Big stack membawa risk premium *terendah*, yang merupakan seluruh mesin di balik tekanan ICM.

---

![Medium stack turnamen fold ke shove big stack di money bubble, chip dan tangga payout terlihat — momen tekanan ICM mengubah call normal menjadi fold](/images/holdem-icm-pressure.webp "Tekanan ICM: medium stack fold karena bust membebani uang hadiah terkunci yang tak bisa dibeli kembali oleh chip")

## Bubble Factor & Risk Premium: Bagaimana ICM Mengubah Shove dan Call Anda

**"Bubble factor" mengukur seberapa jauh lebih besar biaya kehilangan chip dibanding bantuan memenangkan chip yang sama — dan ia melonjak tepat sebelum tiap pay jump.** Bubble factor 1,0 berarti chip dan uang bergerak bersama (early game). Bubble factor 1,5 berarti pot yang hilang menyakitkan 1,5× lebih besar dari bantuan pot identik yang dimenangkan — jadi Anda butuh edge jauh lebih besar untuk ikut terlibat.

Dua aturan praktis lahir darinya:

- **Big stack: menyerang.** Risk premium rendah Anda membiarkan Anda [open dan 3-bet](/id/blog/holdem-3bet) tanpa henti melawan pemain yang tak bisa call tanpa mempertaruhkan nyawa turnamen mereka. Ini "menerapkan tekanan ICM," dan cara paling andal memenangkan chip di final table.
- **Medium dan short stack: perketat calling range Anda, tapi tetap shove duluan.** Menjadi yang bergerak all-in (dengan fold equity) jauh lebih baik daripada menjadi yang harus call off. Di bawah tekanan, calling range Anda harus menyusut keras sementara open-shoving range Anda tetap agresif.

Kursi mimpi buruknya adalah medium stack yang di-shove — memfold tangan sekuat sebagian yang akan Anda snap-call di cash game. Itu bukan kelemahan; itu ICM.

---

## ICM Deal vs Chip Chop: Cara Membagi Prize Pool Final Table

**Chip chop membagi sisa uang berdasarkan persentase chip mentah; ICM deal membaginya berdasarkan nilai dolar ICM tiap pemain. Chip chop menguntungkan big stack, ICM deal lebih adil bagi short stack.** Saat pemain sepakat mengakhiri turnamen lebih awal dan membagi hadiah, ini dua metode yang tersedia — dan mengetahui bedanya bernilai uang nyata.

Misalkan tiga pemain dengan 50% / 30% / 20% chip membagi sisa pool ==$1.500== (membayar $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pemain | Chip chop | ICM deal | Selisih |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

Short stack mendapat ==$97 lebih banyak== dari ICM deal daripada chip chop, karena ICM memperhitungkan pay jump yang sudah mereka peroleh. Jadi aturannya mudah: ==jika Anda short, minta ICM deal; jika Anda chip leader, usulkan chip chop.== Dalam praktik chip leader sering menegosiasikan sedikit *di atas* angka ICM mereka (dan short stack menerima sedikit di bawah) demi kepastian mengunci uang — itu tak apa, selama Anda tahu angka ICM Anda dulu. Jalankan stack dan payout Anda sendiri lewat [kalkulator ICM deal](/calculator) sebelum menyetujui apa pun.

---

## Kapan ICM Paling Penting — dan Kapan Harus Mengabaikannya?

**ICM paling penting menjelang pay jump dan paling tak penting saat pay jump masih jauh.** Andalkan ia di spot ini:

- **[Money bubble](/id/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — lompatan terbesar dari semua adalah dari $0 ke uang, jadi risk premium memuncak.
- **Bubble final table dan setiap pay jump di final table** — tiap anak tangga adalah uang nyata.
- **Satelit** — kasus ekstrem: tiap kursi kualifikasi bernilai sama, jadi begitu Anda punya cukup chip untuk memenangkan kursi, chip ekstra bernilai hampir *nol* dan Anda fold hampir semuanya.

Abaikan ia (main chip EV) saat:

- **Tahap awal dan tengah**, tempat pay jump berikutnya adalah abstraksi yang jauh dan mengumpulkan chip adalah yang memenangkan turnamen.
- **Permainan deep-stack dengan blind kecil**, tempat Anda punya ruang untuk mengalahkan lawan lewat permainan alih-alih memasukkan chip.
- **Heads-up untuk gelar**, tempat hanya dua hadiah tersisa dan ICM berhenti mengubah strategi Anda — praktis kembali chip EV lagi.

Kebocoran umum adalah menerapkan ICM secara berlebihan: memfold diri sampai jadi short stack "untuk naik tangga" alih-alih mengumpulkan saat tekanan belum benar-benar ada. ICM adalah alat late-game, bukan alasan untuk main takut sepanjang turnamen.

---

## Seberapa Akurat ICM? Keterbatasannya

**ICM adalah model sederhana terbaik yang kita punya, tapi ia aproksimasi — ia mengasumsikan setiap pemain sama terampil dan mengabaikan hampir segalanya kecuali ukuran stack.** Jujurlah tentang apa yang ia tinggalkan:

- **Skill.** ICM memperlakukan juara dunia dan pemula dengan stack sama sebagai setara. Chip pemain lebih baik bernilai lebih dari yang dikatakan model.
- **Posisi.** Stack 3-big-blind di button (yang akan segera melihat flop murah) bernilai lebih dari stack sama di big blind (yang akan segera dipaksa masuk). ICM tak bisa melihat kursi.
- **Blind dan permainan mendatang.** ICM membekukan turnamen pada saat ini juga; ia mengabaikan blind yang naik, ante, dan bagaimana beberapa orbit berikutnya akan benar-benar berjalan.

Bahkan ada dukungan empiris untuk titik butanya: sebuah studi besar 2025 yang menguji-mundur ICM terhadap hasil turnamen nyata menemukan ia cenderung ==meremehkan big stack dan melebihkan short stack==, sebagian karena chip leader terampil bisa memanfaatkan tekanan ICM untuk menang *lebih* dari yang diprediksi model mentah. Solver canggih menambahkan koreksi "future game" persis karena alasan ini. Tak satu pun dari itu membuat ICM salah — ia membuatnya aproksimasi awal yang kuat yang Anda sesuaikan untuk skill dan posisi, bukan hukum fisika.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-tournament | Strategi Turnamen Texas Hold'em | /images/holdem-tournament-hero.webp
/id/blog/holdem-equity | Equity Poker Dijelaskan | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. Apa itu ICM di poker?**

A. ICM (Independent Chip Model) adalah rumus yang mengubah stack chip turnamen Anda menjadi nilai uang hadiah nyatanya, memakai payout tersisa dan stack setiap pemain. Ia bekerja karena Anda hanya memenangkan satu hadiah pertama, jadi chip dan dolar bukan hal yang sama — ICM memberi harga selisihnya.

**Q. Bagaimana ICM dihitung?**

A. Ia memberi setiap pemain probabilitas finis di tiap posisi berbayar berdasarkan porsi chip mereka (peluang Anda finis pertama = stack Anda ÷ total chip, lalu rekursif untuk spot lebih rendah), lalu mengalikan probabilitas itu dengan payout. Jumlahnya adalah nilai dolar stack Anda. Dalam praktik Anda memakai kalkulator ICM; intinya adalah memahami apa yang ia lakukan.

**Q. Apa beda ICM dan chip EV?**

A. Chip EV mengukur keputusan dalam chip yang dimenangkan atau hilang; ICM mengukurnya dalam uang nyata. Keduanya sepakat di awal turnamen dan menyimpang menjelang uang, tempat bust membebani equity hadiah terkunci. All-in coin-flip yang oke dalam chip EV bisa jadi fold jelas di bawah ICM.

**Q. Apa itu ICM deal, dan apa bedanya dari chip chop?**

A. Keduanya membagi prize pool saat pemain sepakat mengakhiri lebih awal. Chip chop membagi uang berdasarkan persentase chip mentah (menguntungkan big stack); ICM deal membaginya berdasarkan nilai dolar ICM tiap pemain (lebih adil bagi short stack). Jika Anda short, minta ICM deal; jika Anda chip leader, chip chop membayar Anda lebih banyak.

**Q. Apakah ICM berlaku untuk cash game?**

A. Tidak. Di cash game setiap chip sudah setara nilai nominalnya dalam dolar dan Anda bisa rebuy atau pergi kapan saja, jadi tak ada yang perlu diubah. ICM hanya ada karena chip turnamen tak bisa diuangkan sesuai nilai nominalnya.

**Q. Kapan saya harus mengabaikan ICM?**

A. Tahap awal dan tengah, permainan deep-stack dengan blind kecil, dan heads-up untuk gelar — semua spot tempat pay jump masih jauh atau hanya dua hadiah tersisa. Dalam kasus itu Anda main chip EV dan fokus mengumpulkan chip.

**Q. Siapa yang menemukan ICM?**

A. Matematika probabilitas finis biasanya dikreditkan kepada David Harville (dari riset pacuan kuda 1970-an), yang diterapkan Mason Malmuth ke turnamen poker — karenanya model "Malmuth–Harville". Ia menjadi cara standar menilai stack turnamen dan membagi deal final table.

---

## 3 Hal yang Harus Diingat

1. **Chip bukan uang.** Anda hanya memenangkan satu hadiah pertama, jadi chip leader bernilai lebih kecil dari porsi chipnya dan short stack bernilai lebih besar. Celah tunggal itu adalah seluruh ICM.
2. **Late game, beralih dari chip EV ke $EV.** Menjelang pay jump, sebuah call butuh equity ekstra (risk premium) agar profit. Medium stack memfold tangan yang akan di-snap-call cash game.
3. **Ketahui angka Anda sebelum deal.** Short stack ingin ICM deal, big stack ingin chip chop — jalankan [kalkulator](/calculator) dulu.

Dari sini, lihat bagaimana tekanan ICM cocok dengan [strategi turnamen](/id/blog/holdem-tournament) yang lebih luas, atau kembali ke fondasi dengan [equity poker](/id/blog/holdem-equity) dan [pot odds](/id/blog/holdem-pot-odds).

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Strategi Turnamen Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Pilar tempat ICM berada</div>
  </a>
  <a href="/id/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Turnamen vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa ICM tak pernah berlaku di cash</div>
  </a>
  <a href="/id/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Equity Poker Dijelaskan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip EV hanyalah equity dalam chip</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Alat Gratis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kalkulator ICM</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Jalankan stack dan deal Anda sendiri</div>
  </a>
</div>
`.trim(),
};

export default POST;
