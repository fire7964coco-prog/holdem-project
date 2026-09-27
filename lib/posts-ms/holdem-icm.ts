import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "Apakah Itu ICM dalam Poker? Independent Chip Model Dijelaskan",
  seoTitle: "Cip Anda Tak Bernilai Seperti Angkanya — ICM dalam Poker",
  desc: "Cip tournament bukan wang tunai — hadiah pertama hanya satu. ICM (Independent Chip Model) menukar stack anda kepada nilai hadiah sebenar. Ini caranya.",
  tldr: "ICM (Independent Chip Model) menukar stack cip tournament anda kepada nilai wang hadiah sebenar, berdasarkan payout dan stack semua pemain. Kerana hadiah pertama hanya satu, menggandakan cip tidak pernah menggandakan wang — stack chip leader bernilai kurang daripada bahagian cipnya, short stack pula lebih. Jurang itulah sebabnya anda fold di bubble tangan yang mudah di-call dalam cash game.",
  category: "tournament",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-09",
  keepImagesInBody: true,
  readTime: "13 minit",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Cip poker final table bertimbun di hadapan tangga payout, menunjukkan bahawa stack cip yang lebih besar tidak bertukar satu lawan satu kepada bahagian wang hadiah yang lebih besar",
  tags: ["icm poker", "what is icm in poker", "icm poker meaning", "icm vs chip ev", "icm deal", "chip chop vs icm", "how is icm calculated", "ICM dalam poker"],
  content: `
Kali pertama ICM membuatkan saya rugi wang, saya langsung tidak tahu ia wujud. Tinggal empat orang, tiga dibayar, dan saya melihat pocket jacks di tangan dengan stack yang sederhana. Saya shove, chip leader call dengan ace-ten, dan saya tersingkir di bubble tanpa membawa pulang apa-apa. ==Bertahun-tahun saya simpan kejadian itu sebagai bukti shove itu salah. Ia tidak salah== — saya cuma tidak tahu *di mana* bubble sebenarnya mengenakan bayarannya, dan rupa-rupanya itulah idea paling penting dalam poker tournament.

==Cip dalam tournament bukan wang. Anda hanya boleh memenangi *satu* hadiah pertama, jadi menggandakan stack tidak pernah menggandakan nilai sebenar anda.== ICM — Independent Chip Model — ialah matematik yang menukar cip anda kepada dolar sebenar yang diwakilinya, dan sebaik sahaja anda memahaminya, call dan fold yang dahulu terasa salah tiba-tiba masuk akal. Panduan ini membawa anda daripada "apakah maksud ICM" hingga membahagikan deal di final table, dengan setiap angka dikira supaya anda boleh menyemaknya sendiri.

ICM wujud khusus di dalam [permainan tournament](/ms/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") — itulah sebabnya permainan MTT peringkat akhir langsung tidak menyerupai cash game.

---

### ICM Sekilas Pandang

:::stripe
cip ≠ wang | Anda hanya menang satu hadiah pertama
chip leader | bernilai KURANG daripada bahagian cipnya
short stack | bernilai LEBIH daripada bahagian cipnya
:::

---

## Apakah Itu ICM dalam Poker?

**ICM (Independent Chip Model) menukar sesuatu stack cip kepada nilai wang hadiah sebenar, berdasarkan payout yang tinggal dan saiz stack setiap pemain.** Ia menjawab satu soalan: ==jika tournament tamat sekarang dengan stack begini, berapakah nilai sebenar bahagian prize pool saya dalam dolar?==

Caranya ialah menganggar kekerapan setiap pemain tamat di setiap kedudukan berbayar — pertama, kedua, ketiga dan seterusnya — berdasarkan bahagian cip masing-masing, kemudian mendarab kebarangkalian itu dengan payout. Semakin besar stack anda, semakin kerap anda tamat di tempat tinggi; tetapi kerana ==hadiah teratas ada hadnya, cip tambahan membeli semakin sedikit wang.==

Anjakan pemikiran yang utama: dalam cash game, satu cip ialah satu dolar, noktah. Dalam tournament, satu cip ialah *tiket loteri* untuk satu set hadiah yang tetap. ICM meletakkan harga pada tiket itu. Ia terpakai untuk tournament dan sit-and-go sahaja — [tidak sekali-kali untuk cash game](/ms/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), kerana di sana cip anda sudah pun sama dengan nilai mukanya.

---

## Kenapa Cip Anda Tidak Bernilai Seperti Angkanya dalam Wang?

**Kerana wang hadiah diagihkan kepada beberapa tempat dan sebahagiannya sudah terkunci di bawah anda — menggandakan cip tidak menggandakan equity hadiah anda.** Katakan tiga hadiah membayar $50 / $30 / $20. Sebaik sahaja anda berada di kedudukan berbayar (in the money), anda dijamin sekurang-kurangnya $20 — jadi cip yang melindungi $20 itu sangat berharga, manakala cip yang mengejar tempat pertama sedang memburu hadiah yang hanya boleh dimenangi sekali.

Itulah yang membuatkan hubungan cip-kepada-wang ==membengkok==: cip pertama (untuk bertahan) sangat bernilai, cip terakhir (untuk mengejar kemenangan) kurang bernilai. Pemain yang memegang separuh cip tidak memiliki separuh prize pool — mereka memiliki jauh lebih sedikit daripada itu, kerana mereka tidak boleh tamat lebih baik daripada tempat pertama tetapi masih *boleh* tersingkir.

Terbalikkan pula, dan short stack menjadi pemenang matematik ini. Mereka sudah ada tuntutan sebenar ke atas pay jump di bawah mereka, jadi ==setiap cip mereka bernilai lebih daripada nilai mukanya==. Satu ketidakseimbangan ini — big stack dinilai terlalu tinggi dalam cip, short stack dinilai terlalu rendah — menggerakkan setiap keputusan ICM yang akan anda buat.

---

## Bagaimana ICM Dikira? (Model Malmuth–Harville)

**ICM memberikan setiap pemain kebarangkalian tamat di setiap kedudukan berdasarkan saiz stack semata-mata, kemudian mendarabnya dengan payout.** Kaedah ini sering dipanggil model Malmuth–Harville — matematik kebarangkalian tamat itu berasal daripada kajian David Harville pada tahun 1970-an tentang peluang lumba kuda, yang kemudian diaplikasikan oleh Mason Malmuth kepada poker.

Peraturannya mudah dan rekursif:

- Peluang anda tamat di tempat **ke-1** = stack anda ÷ jumlah cip.
- Peluang anda tamat di tempat **ke-2** = jumlah, bagi setiap pemain lain yang mungkin tamat di tempat ke-1, (peluang dia menang) × (stack anda ÷ cip yang tinggal tanpa dia).
- Teruskan cara yang sama bagi setiap kedudukan yang lebih rendah.

Mari kira betul-betul. Tinggal tiga pemain, hadiahnya ==$50 / $30 / $20== (pool $100), dan stack mereka:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tempat | Leader (5,000 · 50%) | Middle (3,000 · 30%) | Short (2,000 · 20%) |
|:--|:--:|:--:|:--:|
| Ke-1 | 50.0% | 30.0% | 20.0% |
| Ke-2 | 33.9% | 37.5% | 28.6% |
| Ke-3 | 16.1% | 32.5% | 51.4% |

</div>

Ambil angka tempat ke-2 bagi Leader supaya anda nampak rekursinya: jika Middle menang tempat pertama (30% daripada masa), Leader kemudian mengambil 5,000 daripada 7,000 cip yang tinggal = 71.4%, dan 0.30 × 0.714 = 21.4%; jika Short menang tempat pertama (20%), Leader mengambil 5,000 daripada 8,000 = 62.5%, dan 0.20 × 0.625 = 12.5%. Jumlahkan: ==33.9%== daripada masa, Leader tamat di tempat ke-2.

Sekarang darabkan setiap baris dengan payout dan anda akan dapat nilai dolar setiap stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pemain | % cip | Nilai ICM | % ICM | vs cip |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50.0% | ==$38.39== | 38.4% | ==r:−11.6== |
| Middle | 30.0% | $32.75 | 32.8% | ==g:+2.8== |
| Short | 20.0% | $28.86 | 28.9% | ==g:+8.9== |

</div>

Itulah dia dalam angka: Leader memegang ==separuh cip tetapi hanya 38.4% wang==, manakala 20% cip milik short stack bernilai 28.9%. Anda tidak perlu mengira semua ini dengan tangan di meja — [kalkulator ICM](/ms/calculator) melakukannya serta-merta — tetapi melihat jentera ini sekali itulah yang membuatkan strateginya melekat.

---

## ICM vs Chip EV — Apakah Bezanya?

**Chip EV mengukur sesuatu keputusan dalam cip yang dimenangi atau hilang; ICM (atau "$EV") mengukurnya dalam wang hadiah sebenar. Kedua-duanya seiring pada awal tournament dan berpisah jauh pada peringkat akhir.** Pada awal tournament, dengan pay jump yang kecil dan masih jauh, satu cip lebih kurang hanyalah satu cip — anda bermain [chip EV](/ms/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), mengumpul cip tanpa henti. Berhampiran kedudukan berbayar dan final table, ICM mengambil alih.

Pertembungan klasik ialah *call* all-in yang marginal. Dalam chip EV, coin flip untuk pot besar boleh jadi okey malah bagus — anda menang cip sebanyak yang anda hilang. Dalam ICM ia boleh menjadi ==fold== yang jelas, kerana tersingkir menyebabkan anda kehilangan equity dalam setiap hadiah di atas hadiah yang sudah anda kunci (hadiah minimum yang dijamin itu sendiri kekal milik anda; di bubble, ketika belum ada apa-apa yang terkunci, anda kehilangan segala-galanya), manakala cip yang anda menangi bernilai kurang daripada nilai mukanya.

Di situlah selama ini saya salah faham tentang jacks itu. Cukai itu dikenakan pada *call*, dan sisi sebaliknya itulah yang membuatkan bubble boleh dimainkan: kerana calling range semua orang mengetat, fold equity anda bernilai **lebih** daripada nilainya dalam cip. Shove first-in ialah senjata medium stack (stack sederhana) di bubble, bukan satu leak (kelemahan berulang) — saya cuma bertembung dengan satu-satunya pemain yang boleh call paling luas, dan itu varians, bukan kesilapan strategi. ==Chip EV bertanya "adakah ini membina stack saya?" ICM bertanya "adakah ini membina bankroll saya?"== — dan hanya yang kedua itu yang membayar.

---

## "ICM Tax": Kenapa Kalah Cip Lebih Sakit daripada Menang Cip?

**"ICM tax" (cukai ICM) ialah jurang antara peratusan cip anda dengan peratusan wang sebenar anda — nilai yang lenyap sebaik sahaja agihan stack menjadi berat di bahagian atas.** Dalam contoh tadi, cip Leader menunjukkan 50% tetapi wangnya menunjukkan 38.4%: ==ICM tax sebanyak 11.6 mata peratusan== kerana menjadi big stack.

Cukai ini muncul dalam setiap all-in sebagai **risk premium** — equity tambahan yang anda perlukan *di atas* titik pulang modal chip-EV sebelum sesuatu call benar-benar menguntungkan dalam dolar. Jika matematik cip mengatakan anda perlukan 40% untuk call, ICM mungkin menuntut 48-50%, kerana risikonya (tersingkir, kehilangan equity pay jump) mengatasi ganjarannya (cip yang bernilai kurang daripada nilai muka).

Pemain yang paling merasainya ialah **medium stack di bubble** — cukup besar untuk ada equity sebenar yang boleh hilang, tetapi tidak cukup kecil untuk terpaksa masuk. Merekalah yang menanggung risk premium tertinggi dan patut bermain paling ketat. Big stack pula menanggung risk premium *terendah*, dan itulah enjin di sebalik tekanan ICM.

---

![Medium stack tournament fold kepada shove big stack di money bubble, dengan cip dan tangga payout kelihatan — saat tekanan ICM menukar call biasa menjadi fold](/images/holdem-icm-pressure.webp "Tekanan ICM: medium stack fold kerana tersingkir di bubble bermakna kehilangan seluruh min-cash dan setiap hadiah di atasnya")

## Bubble Factor & Risk Premium: Cara ICM Mengubah Shove dan Call Anda

**"Bubble factor" mengukur sejauh mana kehilangan cip lebih memudaratkan anda berbanding manfaat memenangi jumlah cip yang sama — dan ia melonjak tepat sebelum setiap pay jump.** Bubble factor 1.0 bermaksud cip dan wang bergerak seiring (peringkat awal). Bubble factor 1.5 bermaksud pot yang kalah menyakitkan 1.5× sebanyak manfaat pot yang sama jika menang — jadi anda perlukan kelebihan yang jauh lebih besar sebelum melibatkan diri dalam pot.

Dua peraturan praktikal lahir daripadanya:

- **Big stack: serang.** Risk premium anda yang rendah membolehkan anda [open dan 3-bet](/ms/blog/holdem-3bet) tanpa henti terhadap pemain yang tidak boleh call tanpa mempertaruhkan nyawa tournament mereka. Inilah "menekan dengan ICM" (applying ICM pressure), dan ia cara paling boleh diharap untuk memenangi cip di final table.
- **Medium stack dan short stack: ketatkan calling range, tetapi terus shove dahulu.** Menjadi orang yang all-in dahulu (dengan fold equity) jauh lebih baik daripada menjadi orang yang terpaksa call. Di bawah tekanan, calling range anda patut mengecil dengan ketara manakala open-shove range anda kekal agresif.

Kerusi paling ngeri ialah medium stack yang berdepan shove — terpaksa fold tangan yang sekuat sesetengah tangan yang anda akan snap-call dalam cash game. Itu bukan kelemahan; itulah ICM.

---

## ICM Deal vs Chip Chop: Bagaimana Membahagikan Prize Pool Final Table?

**Dalam bentuk paling ringkas, chip chop membahagikan baki wang mengikut peratusan cip mentah; ICM deal membahagikannya mengikut nilai dolar ICM setiap pemain. Chip chop memihak kepada big stack, ICM deal lebih adil kepada short stack.** Apabila pemain bersetuju menamatkan tournament lebih awal dan membahagikan hadiah, inilah dua kaedah yang dibincangkan — dan mengetahui bezanya bernilai wang sebenar.

Katakan tiga pemain dengan 50% / 30% / 20% cip sedang membahagikan baki pool ==$1,500== (membayar $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pemain | Chip chop | ICM deal | Beza |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

Short stack mendapat ==$97 lebih== daripada ICM deal berbanding chip chop, kerana ICM mengambil kira pay jump yang sudah mereka peroleh. Jadi peraturannya mudah: ==jika anda short, minta ICM deal; jika anda chip leader, cadangkan chip chop.== Dalam praktik, chip leader selalunya berunding sedikit *di atas* angka ICM mereka (dan short stack menerima sedikit di bawah) sebagai pertukaran untuk kepastian mengunci wang — itu tidak mengapa, asalkan anda tahu angka ICM anda dahulu. Masukkan stack dan payout anda sendiri ke dalam [kalkulator deal ICM](/ms/calculator) sebelum anda bersetuju dengan apa-apa.

---

## Bilakah ICM Paling Penting — dan Bilakah Boleh Diabaikan?

**ICM paling penting berhampiran pay jump dan paling kurang penting apabila pay jump masih jauh.** Bergantunglah padanya dalam situasi ini:

- **[Money bubble](/ms/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** — lonjakan terbesar ialah daripada $0 kepada cash, jadi risk premium memuncak.
- **Bubble final table dan setiap pay jump di final table** — setiap anak tangga payout ialah wang sebenar.
- **Satellite** — kes paling ekstrem: dalam satellite multi-seat, setiap tempat duduk bernilai sama, jadi sebaik sahaja anda ada cukup cip untuk memenangi satu tempat, cip tambahan hampir *tidak bernilai* dan anda fold hampir semuanya (satellite winner-take-all pula dimainkan untuk tempat pertama berdasarkan chip EV).

Gunakan chip EV sebagai anggaran yang memadai apabila:

- **Peringkat awal dan pertengahan**, ketika pay jump seterusnya masih abstrak dan jauh, dan mengumpul cip ialah cara memenangi tournament.
- **Permainan deep-stack dengan blind yang kecil**, ketika anda ada ruang untuk mengatasi lawan dengan permainan, bukan sekadar all-in.
- **Heads-up untuk gelaran juara**, ketika hanya dua hadiah tinggal, jadi wang yang masih dipertaruhkan boleh dinilai berdasarkan chip EV.

Leak yang biasa ialah menggunakan ICM secara berlebihan: fold terus-menerus sehingga menjadi short stack "untuk naik tangga payout" dan bukannya mengumpul cip ketika tekanan belum benar-benar wujud. ICM ialah alat peringkat akhir, bukan alasan untuk bermain takut sepanjang tournament.

---

## Sejauh Mana ICM Tepat? Batasannya

**ICM ialah model ringkas terbaik yang kita ada, tetapi ia hanya anggaran — ia menganggap setiap pemain sama mahir dan mengabaikan hampir semua perkara kecuali saiz stack.** Jujurlah tentang apa yang ditinggalkannya:

- **Kemahiran.** ICM menganggap juara dunia dan pemain kali pertama dengan stack yang sama sebagai setara. Cip pemain yang lebih mahir bernilai lebih daripada yang dikatakan model.
- **Posisi.** Stack 3-big-blind di button (masih bebas memilih saatnya dan open-shove dengan fold equity penuh dari kerusi terbaik) bernilai lebih daripada stack yang sama di big blind (satu pertiga daripadanya sudah dipasang, terpaksa all-in dalam satu dua tangan). ICM tidak nampak kerusi.
- **Blind dan permainan akan datang.** ICM membekukan tournament pada saat ini; ia mengabaikan blind dan ante yang meningkat, serta bagaimana beberapa pusingan meja (orbit) seterusnya akan berlangsung.

Malah ada sokongan empirikal untuk kelemahan ini: satu kajian besar pada 2025 yang menguji semula ICM terhadap keputusan tournament sebenar mendapati ia cenderung ==menilai terlalu rendah big stack dan terlalu tinggi short stack==, sebahagiannya kerana chip leader yang mahir boleh memanfaatkan tekanan ICM untuk menang *lebih* daripada ramalan model mentah. Solver lanjutan menambah pembetulan "future game" atas sebab inilah. Semua itu tidak menjadikan ICM salah — ia menjadikannya anggaran pertama yang kukuh yang anda laraskan mengikut kemahiran dan posisi, bukan hukum fizik.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-tournament | Bagaimana Poker Tournament Berjalan — Buy-in, Format & Hari Pertama | /images/holdem-tournament-hero.webp
/ms/blog/holdem-equity | Equity dalam Poker — Win %, Fold Equity dan Realisasi Equity | /images/holdem-equity-hero.webp
:::

## Soalan Lazim

**Q. Apakah itu ICM dalam poker?**

A. ICM (Independent Chip Model) ialah formula yang menukar stack cip tournament anda kepada nilai wang hadiah sebenar, berdasarkan payout yang tinggal dan stack setiap pemain. Ia berfungsi kerana anda hanya memenangi satu hadiah pertama, jadi cip dan dolar bukan perkara yang sama — ICM meletakkan harga pada perbezaan itu.

**Q. Bagaimana ICM dikira?**

A. Ia memberikan setiap pemain kebarangkalian tamat di setiap kedudukan berbayar berdasarkan bahagian cip mereka (peluang anda tamat pertama = stack anda ÷ jumlah cip, kemudian secara rekursif bagi tempat yang lebih rendah), lalu mendarab kebarangkalian itu dengan payout. Jumlahnya ialah nilai dolar stack anda. Dalam praktik anda menggunakan kalkulator ICM; yang penting ialah memahami apa yang dilakukannya.

**Q. Apakah beza ICM dengan chip EV?**

A. Chip EV mengukur keputusan dalam cip yang dimenangi atau hilang; ICM mengukurnya dalam wang sebenar. Kedua-duanya seiring pada awal tournament dan menyimpang berhampiran kedudukan berbayar. Di bubble, tersingkir bermakna anda kehilangan seluruh peluang untuk cash; sebaik sahaja anda ITM, anda kehilangan segala-galanya di atas payout yang sudah anda kunci. All-in coin flip yang okey dalam chip EV boleh menjadi fold yang jelas di bawah ICM.

**Q. Apakah itu ICM deal, dan apa bezanya dengan chip chop?**

A. Kedua-duanya membahagikan prize pool apabila pemain bersetuju menamatkan permainan lebih awal. Dalam bentuk paling ringkas, chip chop membahagikan wang mengikut peratusan cip mentah (memihak kepada big stack); ICM deal membahagikannya mengikut nilai dolar ICM setiap pemain (lebih adil kepada short stack). Ada juga versi pertengahan yang terlebih dahulu mengetepikan payout yang sudah dikunci oleh setiap pemain dan hanya membahagikan wang di atasnya. Jika anda short, minta ICM deal; jika anda chip leader, chip chop membayar anda lebih.

**Q. Adakah ICM terpakai dalam cash game?**

A. Tidak. Dalam cash game setiap cip sudah sama dengan nilai mukanya dalam dolar dan anda boleh rebuy atau pergi bila-bila masa, jadi tiada apa yang perlu ditukar. ICM wujud hanya kerana cip tournament tidak boleh ditunaikan mengikut nilai mukanya.

**Q. Bilakah saya patut abaikan ICM?**

A. Anda tidak pernah mengabaikannya sepenuhnya, tetapi kesannya cukup kecil sehingga chip EV boleh digunakan sebagai anggaran pada peringkat awal dan pertengahan serta dalam permainan deep-stack dengan blind yang kecil — situasi ketika pay jump masih jauh. Dalam heads-up untuk gelaran juara hanya dua hadiah tinggal, jadi jurang antara tempat pertama dan kedua boleh dinilai berdasarkan chip EV. Walaupun begitu, semak struktur payout dan agihan stack.

**Q. Apakah kesilapan ICM yang paling biasa?**

A. Tiga yang besar. Pertama, menggunakan ICM secara *berlebihan* — fold terus-menerus "untuk naik tangga payout" ketika pay jump masih jauh, dan bukannya mengumpul cip. Kedua, call terlalu luas sebagai medium stack berhampiran bubble, tepat di tempat risk premium anda paling tinggi — belum ada apa-apa yang terkunci, jadi tersingkir di situ menelan seluruh equity anda, termasuk min-cash. Ketiga, bersetuju dengan chip chop ketika anda short stack (atau ICM deal ketika anda leader) tanpa mengira angkanya dahulu. ICM ialah alat peringkat akhir: menggunakannya terlalu awal, atau mengabaikannya di final table, kedua-duanya membocorkan wang.

**Q. Siapakah yang mencipta ICM?**

A. Matematik kebarangkalian tamat biasanya dikreditkan kepada David Harville (daripada kajian lumba kuda pada tahun 1970-an), yang kemudian diaplikasikan oleh Mason Malmuth kepada tournament poker — sebab itulah ia dipanggil model "Malmuth–Harville". Ia menjadi cara standard untuk menilai stack tournament dan membahagikan deal final table.

---

## 3 Perkara untuk Diingat

1. **Cip bukan wang.** Anda hanya menang satu hadiah pertama, jadi chip leader bernilai kurang daripada bahagian cipnya dan short stack bernilai lebih. Satu jurang itulah keseluruhan ICM.
2. **Pada peringkat akhir, beralih daripada chip EV kepada $EV.** Berhampiran pay jump, sesuatu call perlukan equity tambahan (risk premium) untuk menguntungkan. Medium stack fold tangan yang akan di-snap-call dalam cash game.
3. **Ketahui angka anda sebelum berunding deal.** Short stack mahu ICM deal, big stack mahu chip chop — jalankan [kalkulator](/ms/calculator) dahulu.

Dari sini, lihat bagaimana tekanan ICM sesuai dengan [strategi tournament](/ms/blog/holdem-tournament) yang lebih luas, atau kembali ke asas dengan [equity poker](/ms/blog/holdem-equity) dan [pot odds](/ms/blog/holdem-pot-odds).

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagaimana Poker Tournament Berjalan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pilar tempat ICM bernaung</div>
  </a>
  <a href="/ms/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cash Game vs Tournament</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa ICM tidak terpakai dalam cash game</div>
  </a>
  <a href="/ms/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Equity dalam Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Chip EV hanyalah equity dalam bentuk cip</div>
  </a>
  <a href="/ms/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Alat Percuma</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kalkulator ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kira stack dan deal anda sendiri</div>
  </a>
</div>
`.trim(),
};
