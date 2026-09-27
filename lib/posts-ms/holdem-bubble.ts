import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "Cara Main Bubble dalam Poker — Strategi Big, Medium & Short Stack",
  seoTitle: "Selangkah dari Hadiah — Cara Main Bubble Poker Ikut Stack",
  desc: "Di bubble, bertahan mengatasi cip — langkah yang betul pun terbalik. Cara main big, medium dan short stack, bubble factor, satellite dan hand-for-hand.",
  tldr: "Bubble ialah saat sebelum wang hadiah: satu lagi pemain tersingkir, semua yang tinggal dibayar. Tersingkir bermakna pulang kosong, jadi bertahan lebih bernilai daripada cip — calling range ketat, shoving range kekal luas. Big stack menyerang, medium stack paling terperangkap (bukan short stack), dan di bubble satellite multi-seat anda fold semua, termasuk aces, sebaik tempat duduk terkunci.",
  category: "tournament",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-13",
  keepImagesInBody: true,
  readTime: "13 minit",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "Short stack cip dan big stack yang menjulang tinggi berhadapan di meja tournament ketika money bubble, dengan tangga payout di latar belakang — saat bertahan menjadi lebih bernilai daripada cip",
  tags: ["bubble poker", "poker bubble strategy", "bubble factor", "money bubble", "satellite bubble", "hand for hand poker", "short stack bubble", "cara main bubble poker"],
  content: `
Permainan paling berdisiplin yang pernah saya mainkan ialah ketika tinggal tiga penyingkiran lagi sebelum wang hadiah dalam satu tournament hari Jumaat — semua orang fold seolah-olah kad di tangan mereka sedang terbakar. Saya memegang medium stack (stack sederhana) dan open-fold ace-jack dua kali — tangan yang pasti saya raise setiap kali dalam cash game. Dua pusingan meja (orbit) kemudian, short stack tersingkir, saya terhegeh-hegeh masuk ke min-cash… dan tamat di tempat ke-14 dengan payout yang hampir tidak melebihi buy-in saya. ==Saya "bertahan" sehingga terlepas wang yang sebenar.== Itulah bubble dalam satu cerita: main terlalu takut dan anda cuma mengunci wang kecil; main dengan betul dan di sinilah tournament sebenarnya dimenangi.

==Di bubble, satu lagi penyingkiran membuatkan semua pemain lain dibayar — jadi untuk beberapa tangan yang genting, kekal hidup lebih bernilai daripada cip yang boleh anda menangi.== Satu fakta itu menterbalikkan poker biasa, dan hampir semua orang tersilap dengan dua cara yang sama: big stack tidak cukup menyerang, dan medium stack terlalu banyak call. Panduan ini ialah playbook stack demi stack — apa yang perlu dilakukan dengan big, medium atau short stack, merentasi tiga jenis bubble yang akan anda hadapi.

Jika anda mahu matematik di sebalik *kenapa* cip tidak lagi sama dengan wang di sini, itulah [ICM](/ms/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") — panduan ini pula tempat teori itu bertukar menjadi fold dan shove di meja [tournament](/ms/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp").

---

### Bubble Sekilas Pandang

:::stripe
1 penyingkiran | semua yang lain dibayar — nilai bertahan melonjak
ketatkan call | kekalkan shove yang luas
medium stack | paling terperangkap, bukan short stack
:::

---

## Apakah Itu Bubble dalam Poker? (Dan Maksud "On the Bubble")

**Bubble ialah saat sejurus sebelum wang hadiah — titik di mana satu lagi penyingkiran meletakkan semua yang masih duduk di meja ke dalam kedudukan berbayar (in the money).** Jika sesuatu tournament membayar 27 teratas, bubble dicapai apabila ==tinggal 28 pemain==: tersingkir sekarang dan anda tidak mendapat apa-apa; bertahan satu lagi penyingkiran dan anda dijamin cash.

Beberapa istilah yang akan anda dengar:

- ==**On the bubble**== — tournament tinggal satu (atau beberapa) penyingkiran lagi sebelum wang hadiah. Permainan menjadi sangat perlahan.
- ==**Bubble boy**== — pemain malang yang tersingkir satu tempat sebelum wang hadiah dan tidak mendapat apa-apa. Tiada siapa mahukan gelaran itu.
- ==**Stone bubble** (atau hard bubble)== — penyingkiran tunggal yang memecahkan bubble dan membayar semua yang tinggal. Apabila ia benar-benar stone bubble, semua pemain yang tinggal dijamin wang hadiah sebaik sahaja seorang pemain tersingkir.

Bubble penting kerana payout tournament ==berat di bahagian atas==. Lonjakan daripada *kosong* ke min-cash ialah lonjakan peratusan tunggal yang paling besar dalam seluruh struktur payout, dan itulah sebabnya bertahan tiba-tiba mengatasi pengumpulan cip — tetapi hanya untuk tempoh yang singkat dan sengit.

---

## Kenapa Bubble Mengubah Segalanya? ICM dalam Satu Perenggan

**Kerana cip tournament bukan wang — anda hanya boleh memenangi satu hadiah pertama, jadi cip yang melindungi cash yang sudah dijamin lebih bernilai daripada cip yang mengejar lebih banyak.** Inilah Independent Chip Model, dan berhampiran pay jump ia bermaksud ==risiko tersingkir mengatasi ganjaran memenangi coin flip==. Call yang berada di titik pulang modal dalam cip boleh menjadi langkah yang rugi dalam dolar sebenar.

Anda tidak perlu mengira matematiknya secara langsung di meja — itulah gunanya [kalkulator ICM](/ms/calculator) kami, dan huraian penuhnya ada dalam [panduan ICM](/ms/blog/holdem-icm). Yang penting di meja ialah akibatnya: ==call menjadi jauh lebih ketat, tetapi shove kekal luas==, kerana menang tanpa showdown (fold equity) lebih bernilai berbanding waktu lain apabila semua orang lain bermain dengan takut. Ingat satu baris: **ketatkan call anda sebelum anda ketatkan shove anda.**

---

## 3 Jenis Bubble yang Anda Hadapi: Money vs Final Table vs Satellite

**Bukan semua bubble sama — money bubble, final-table bubble dan satellite bubble memberi ganjaran kepada strategi yang sama sekali berbeza.** Mencampuradukkannya ialah salah satu kesilapan paling mahal dalam poker tournament.

- ==**Money bubble**== — lonjakan daripada kosong ke min-cash. Premium bertahan tinggi, tetapi min-cash kecil, jadi anda masih mahu *mengumpul* cip untuk hadiah teratas. Beri tekanan, jangan sekadar bersembunyi.
- ==**Final-table bubble**== — satu tempat sebelum final table. Tekanan ICM di sini biasanya ==paling ekstrem dalam seluruh tournament== kerana hadiah terbesar kini dipertaruhkan. Short stack paling banyak untung daripada mara jauh; big stack ketika 9-handed boleh dikatakan kerusi terbaik dalam keseluruhan acara.
- ==**Satellite bubble**== — yang lain daripada yang lain. Dalam satellite multi-seat, setiap tempat duduk yang layak bernilai ==sama sahaja==. Sebaik sahaja stack anda cukup besar untuk selamat, cip tambahan bernilai *kosong* — jadi langkah yang betul menjadi hampir bertentangan dengan bubble biasa (lebih lanjut tentang peraturan "fold aces" di bawah).

Ingat perbezaan ini, kerana nasihat stack demi stack yang berikut berubah bergantung pada bubble mana yang sedang anda hadapi.

---

![Infografik tekanan ICM — big stack yang menjulang tinggi membayangi short stack di money bubble](/images/holdem-bubble-pressure.webp "Di bubble, tekanan ICM membolehkan big stack menyerang — bertahan lebih bernilai daripada cip di tengah meja")

## Bagaimana Main BIG Stack di Bubble?

**Serang tanpa henti — anda mempunyai risk premium paling rendah di meja dan semua orang lain terpaksa menghormati cip anda.** Big stack ialah pihak yang paling banyak meraih manfaat daripada bubble. Anda boleh menyingkirkan sesiapa; tiada siapa boleh menyingkirkan anda. Jadi berikan tekanan:

- **Buka luas dan [3-bet](/ms/blog/holdem-3bet) secara ringan**, terutamanya terhadap medium stack di sebelah kanan anda yang tidak boleh call tanpa mempertaruhkan tournament mereka.
- **Sasarkan medium stack, bukan stack yang paling pendek.** Inilah nuansa utamanya: short stack lebih sanggup call anda (tidak banyak yang boleh mereka hilang), dan membiarkan salah seorang daripada mereka menggandakan stack ialah bencana. Buli pemain yang ==paling takut tersingkir== — medium stack.
- **Jangan terbawa-bawa.** Memberi tekanan bermaksud mencuri dan fold apabila ditentang, bukan menghamburkan stack anda ke dalam call. Jika medium stack yang ketat akhirnya shove, hormatinya.

Jika dimainkan dengan betul, big stack boleh mengaut cip di bubble tanpa sekali pun sampai ke showdown.

---

## Bagaimana Main MEDIUM Stack di Bubble?

**Medium stack ialah kerusi paling terperangkap di meja — dan inilah fakta yang disalah faham oleh hampir setiap artikel.** Orang menyangka short stack paling merasai tekanan. Mengikut matematik sebenar (bubble factor), ==medium stack== yang paling terkekang: cukup besar untuk mempunyai prize equity sebenar yang boleh hilang, tetapi tidak cukup pendek untuk mewajarkan berjudi.

Playbook anda:

- **Ketatkan calling range anda lebih daripada sesiapa pun.** Anda paling banyak kehilangan jika call all-in dan tersingkir. Fold tangan yang anda senang hati call dalam cash game — malah tangan sekuat sesetengah pair dan ace besar ketika berdepan shove daripada stack yang lebih besar.
- **Terus mencuri daripada stack di bawah anda.** Terperangkap ketika call tidak bermaksud pasif. Buka dan tekan stack yang lebih pendek; cuma elakkan bertembung dengan big stack di sebelah kiri anda.
- **Sedar tangga payout, bukan takut.** Anda sedang menuju ke wang hadiah, tetapi jangan fold sehingga menjadi short stack dan habis dimakan blind — itu menukar satu perangkap dengan perangkap yang lebih teruk.

Jika anda rasa cengkaman makin ketat di bubble, besar kemungkinan anda medium stack. Mainkan pot sekecil mungkin sambil terus mencuri daripada stack di bawah.

---

## Bagaimana Main SHORT Stack di Bubble?

**Pergi all-in atau fold — jangan sekali-kali limp atau call all-in — dan gunakan hakikat bahawa bubble factor anda sebenarnya lebih rendah daripada medium stack.** Kerana anda memang sudah berkemungkinan tersingkir, menggandakan stack sangat membantu anda, jadi anda lebih bebas berjudi berbanding medium stack yang terperangkap. Tetapi anda berjudi dengan ==menjadi orang yang shove==, bukan orang yang call — [playbook push/fold short stack](/ms/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") yang penuh menerangkan mekaniknya:

- **Shove atau fold.** Agresif sebagai first-in mengekalkan [fold equity](/ms/blog/holdem-when-to-fold) anda, senjata paling berharga yang anda ada. Open-limp atau flat-call dengan short stack membuang kelebihan itu.
- **Tunggu jika ada stack yang lebih pendek daripada anda.** Jika dua pemain lebih pendek, anda boleh fold tangan marginal dan biarkan mereka tersingkir dahulu — naik tangga payout secara percuma. Jika *anda* yang paling pendek, anda tidak mampu menunggu; cari peluang dan shove sebelum habis dimakan blind.
- **Jangan terlalu ketat sehingga lenyap.** Fold sehingga tinggal dua big blind "untuk bertahan" ialah cara anda tetap menjadi bubble boy. Pilih shoving range yang munasabah dan berpegang padanya.

Mantra short stack: fold equity ialah segala-galanya. Shove dahulu, dan pilih peluang anda sebelum blind memilihnya untuk anda.

---

## Bubble Factor & Risk Premium: Nombor yang Memberitahu Bila Perlu Fold

**"Bubble factor" mengukur berapa kali ganda lebih mahal kehilangan stack anda berbanding manfaat memenangi pot yang sama — dan ia terus ditukar kepada equity tambahan yang anda perlukan untuk membuat call.** Bubble factor 1.0 bermaksud cip dan wang bergerak seiring (awal tournament). Bubble factor 1.5 bermaksud ==tersingkir menyakitkan 1.5× sebanyak manfaat kemenangan==, jadi anda memerlukan kelebihan yang jauh lebih besar untuk memasukkan cip anda.

Inilah bahagian yang berguna: equity yang anda perlukan untuk mencapai titik pulang modal ketika call ialah ==c · BF ÷ (P + c · BF)==, di mana **c** ialah kos call anda dan **P** ialah pot yang akan anda menangi — semua yang sudah berada di tengah meja, tidak termasuk call anda sendiri. Apabila anda mempertaruhkan tepat sebanyak yang boleh anda menangi, formula itu menyusut kepada bentuk yang biasa dipetik — ==BF ÷ (1 + BF)== — dan itulah yang digunakan oleh jadual di bawah.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble factor | Kekalahan menyakitkan… | Equity yang diperlukan (tanpa dead money) |
|:--|:--:|:--:|
| 1.0 (tiada tekanan) | sama dengan manfaat kemenangan | 50% |
| 1.3 | 1.3× | ==57%== |
| 1.5 (money bubble) | 1.5× | ==60%== |
| 1.7 (final-table bubble) | 1.7× | ==63%== |
| 2.0 (teruk) | 2× | ==67%== |

</div>

Baca lajur terakhir itu sebagai siling, bukan sebagai situasi anda: pot bubble sebenar mengandungi dead money, dan dead money menolak keperluan itu **ke bawah**. Jika small blind shove 10bb dan anda call 9bb ke dalam pot yang sudah mengandungi 12bb, bubble factor 1.5 memerlukan ==52.9%==, bukan 60% — dan tanpa sebarang tekanan ICM, ia hanyalah pot odds, ==42.9%==.

Separuh lagi ialah bubble factor mengikut **siapa yang berada di hadapan anda**, bukan peringkat tournament. Ketika empat pemain dengan tiga tempat dibayar, medium stack yang berdepan chip leader membawa bubble factor hampir ==3.0==, manakala medium stack yang sama berdepan pemain paling pendek hanya sedikit melebihi ==1.1==; stack yang sama besar berada sekitar ==1.9==, dan di final-table bubble enam pemain, medium stack mencecah ==2.0== ke atas (chip leader, seperti biasa, jauh lebih rendah). Anggap 1.5–1.7 sebagai lantai untuk bubble yang serius, bukan puncak — kemudian turunkan semula sebaik sahaja anda berada dalam wang hadiah. Masukkan stack dan payout anda sendiri ke dalam [kalkulator ICM](/ms/calculator) untuk nombor yang benar-benar terpakai.

---

## Apakah Itu Hand-for-Hand dan Stalling? Mekanik yang Jarang Diterangkan

**Apabila wang hadiah semakin dekat, tournament bertukar kepada "hand-for-hand" — setiap meja memainkan tepat satu tangan pada masa yang sama, kemudian menunggu — khusus untuk menghalang pemain daripada stalling (sengaja melengahkan masa) untuk masuk ke wang hadiah.** Tanpanya, pemain di meja yang perlahan boleh fold tangan demi tangan sementara meja yang lebih pantas menghabiskan bubble. Hand-for-hand menyamakan kedudukan semua meja:

- **Cara ia berjalan:** tournament director menghentikan jam, dan sejak itu setiap tangan memotong tetap ==2 minit== daripada level tidak kira berapa lama tangan itu sebenarnya berlangsung (WSOP Tournament Rule 126.a dan 126.c; TDA RP-8-C dan RP-8-D) — jadi blind terus naik sepanjang bubble, cuma dikira setiap tangan dan bukan setiap minit sebenar. Semua meja mengedarkan satu tangan, dan tiada meja memulakan tangan seterusnya sehingga setiap meja selesai. Jika dua pemain tersingkir dalam tangan hand-for-hand yang sama di meja yang sama, pemain yang memulakan tangan itu dengan cip lebih sedikit mengambil kedudukan tamat yang lebih rendah (bubble); jika mereka tersingkir di meja yang berbeza, mereka seri untuk kedudukan tamat itu (WSOP Tournament Rule 126.b) dan dalam amalan membahagi dua payout yang terlibat. Satu kes ditulis dengan cara yang sama dalam kedua-dua buku peraturan: bagi satu tangan yang masih berjalan ketika hand-for-hand diumumkan, WSOP 126.c dan TDA RP-8-A kedua-duanya menetapkan semua yang tersingkir dalam tangan itu berkongsi tempat atau tempat-tempat yang dibayar. Semak house rule dahulu sebelum anda bergantung pada naik tangga payout.
- **Stalling:** menggunakan penuh time bank pada setiap keputusan dengan harapan melihat lebih sedikit tangan sebelum wang hadiah. Semasa hand-for-hand, harapan itu tersasar: ia tidak mengurangkan bilangan tangan yang perlu dimainkan oleh meja anda — setiap meja memainkan bilangan tangan yang sama dan setiap tangan memotong 2 minit daripada jam (WSOP Tournament Rule 126.a, 126.c) sama ada anda snap-fold atau menghabiskan seluruh time bank. Big stack tiada sebab untuk stalling — mereka mahu lebih banyak tangan untuk menyerang. Short stack dan medium stack masih stalling kerana tabiat, ==tetapi stalling yang berlebihan boleh mengundang clock call atau penalti== — tank dalam had munasabah dan jangan sengaja menghabiskan time bank anda.
- **Eksploitasinya:** kerana semua orang lain memperlahankan permainan, big stack yang terus memberi tekanan semasa hand-for-hand mengaut blind dan ante hampir tanpa tentangan.

---

## Satellite Bubble: Bilakah Anda Patut Fold Aces?

**Dalam satellite multi-seat, setiap tempat duduk bernilai sama — jadi sebaik sahaja stack anda selamat di dalam bubble, anda fold semuanya, termasuk pocket aces.** Inilah situasi paling berlawanan dengan gerak hati dalam poker, dan ia betul. (Satellite winner-take-all yang menganugerahkan satu tempat duduk sahaja berbeza: ia dimainkan untuk tempat pertama berdasarkan chip EV.) Jika memenangi flip memberi anda ==tempat duduk yang sama yang sudah anda kunci== manakala kalah menyingkirkan anda, tiada ganjaran dan risikonya sangat besar:

- **Sebaik sahaja tempat duduk anda selamat secara matematik** (anda cukup jauh di dalam bubble sehingga tidak boleh dikejar), fold setiap tangan — ya, malah AA dan KK — dan biarkan stack yang lebih pendek bertarung sesama sendiri. Semak semula matematik itu setiap kali blind naik: "zon selamat" mengecil apabila ante mula dikenakan.
- **Jangan bergantung pada stalling secara live.** Dalam talian, menggunakan masa penuh anda tidak membawa penalti; secara live, sengaja menghabiskan time bank untuk naik tangga payout jelas boleh dikenakan penalti — WSOP Tournament Rule 80 menyebut "purposely depleting time banks to ladder up in the payout" (sengaja menghabiskan time bank untuk naik tangga payout) dan merujuknya kepada clock yang dikurangkan atau penalti di bawah Rules 40, 113 dan 114 — fold pada kelajuan biasa dan biarkan short stack bertarung.
- **Satu-satunya pengecualian:** call hanya jika anda cover short stack berkenaan dan penyingkirannya mengunci bubble *untuk anda* — dan hanya selagi tempat duduk anda kekal terjamin walaupun anda kalah pot itu.

Jika anda ambil satu perkara daripada bahagian ini: satellite bukan tournament biasa. Cip di atas ambang keselamatan tidak bernilai, jadi mainlah sewajarnya.

---

## Kesilapan Bubble Terbesar: Main untuk Min-Cash

**Fold demi fold sehingga ke min-cash terasa selamat, tetapi ia menukar wang sebenar tournament dengan hadiahnya yang paling kecil.** Kerana payout berat di bahagian atas, min-cash ialah lantai, bukan matlamat — wang sebenar berada di puncak tangga payout, dan anda hanya sampai ke sana dengan memiliki cip ketika bubble pecah.

Pemain yang memenangi tournament melihat bubble sebagai ==peluang untuk mengumpul cip== sementara orang lain bersembunyi. Bertahan penting untuk beberapa tangan di sekitar pay jump; selepas bubble pecah, tekanan ICM reda dan tumpuan kembali kepada membina stack untuk menang. Hormati bubble — kemudian berhenti bermain dengan takut sebaik sahaja ia berakhir.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-icm | Apakah Itu ICM dalam Poker? Independent Chip Model Dijelaskan | /images/holdem-icm-hero.webp
/ms/blog/holdem-when-to-fold | Bila Patut Fold dalam Poker | /images/holdem-when-to-fold-hero.webp
:::

## Soalan Lazim

**Q. Apakah maksud "on the bubble" dalam poker?**

A. Ia bermaksud tournament tinggal satu atau beberapa penyingkiran lagi sebelum wang hadiah. Jika 27 tempat teratas dibayar, bubble berlaku apabila tinggal 28 pemain — pemain seterusnya yang tersingkir tidak mendapat apa-apa, dan semua yang lain dijamin cash. Permainan menjadi jauh lebih ketat kerana buat seketika bertahan lebih bernilai daripada cip.

**Q. Siapakah bubble boy dalam poker?**

A. Bubble boy ialah pemain yang tersingkir di kedudukan terakhir yang tidak dibayar — satu tempat sebelum wang hadiah — dan tidak mendapat apa-apa. Itulah kedudukan tamat paling pahit dalam tournament: berjam-jam bermain, tanpa sebarang payout. Sesetengah acara memberi bubble boy hadiah saguhati kecil, tetapi secara tradisinya ia sifar.

**Q. Apakah beza stone bubble dengan soft bubble?**

A. Stone bubble (atau hard bubble) berlaku apabila satu penyingkiran meletakkan setiap pemain yang tinggal ke dalam wang hadiah serentak. Soft bubble lebih longgar — satu tempoh beberapa penyingkiran berhampiran wang hadiah dan bukannya satu titik yang tepat. Stone bubble mencipta tekanan paling ekstrem kerana satu penyingkiran membayar semua yang tinggal.

**Q. Apakah maksud "pay the bubble" atau burst the bubble?**

A. "The bubble" ialah tempat terakhir sebelum wang hadiah, jadi pemain yang tersingkir di situ — bubble boy — tidak mendapat apa-apa manakala semua yang masih bermain dibayar. "Bursting the bubble" (bubble pecah) ialah penyingkiran terakhir itu: sebaik sahaja ia berlaku, setiap pemain yang tinggal berada dalam wang hadiah dan tekanan bertahan yang sengit mula reda. "Paying the bubble" pula perkara yang berasingan: sesetengah acara — atau pemain yang tinggal, melalui persetujuan — memberi pemain yang tamat di bubble hadiah saguhati yang kecil. Itu pengecualian, bukan kebiasaan; secara tradisinya bubble dibayar sifar.

**Q. Patutkah anda fold di bubble?**

A. Anda patut menolak *call* jauh lebih kerap daripada biasa, tetapi bukan semuanya — dan anda patut terus shove dan mencuri. Bertahan lebih bernilai daripada cip berhampiran pay jump, jadi call all-in dan tersingkir ialah kesilapan yang mahal. Ketatkan calling range anda dengan tegas sambil mengekalkan keagresifan first-in anda yang luas.

**Q. Adakah short stack paling merasai tekanan bubble?**

A. Tidak — itulah salah faham yang biasa. Mengikut bubble factor, medium stack paling terkekang: cukup prize equity untuk hilang, tetapi tidak cukup pendek untuk mewajarkan berjudi. Short stack sebenarnya mempunyai bubble factor yang lebih rendah kerana tersingkir memang sudah berkemungkinan dan menggandakan stack sangat membantu, jadi mereka boleh berjudi dengan lebih bebas (dengan shove, bukan call).

**Q. Apakah itu bubble factor dalam poker?**

A. Bubble factor mengukur berapa kali ganda lebih mahal kekalahan sesuatu pot berbanding manfaat memenangi pot yang sama, dalam nilai wang sebenar (ICM). Bubble factor 1.0 bermaksud cip sama dengan wang; 1.5 bermaksud tersingkir menyakitkan 1.5× sebanyak manfaat kemenangan. Ia ditukar kepada equity yang anda perlukan untuk call: c · BF ÷ (P + c · BF), bagi call sebanyak c ke dalam pot sebanyak P. Jika anda mempertaruhkan tepat sebanyak yang boleh dimenangi, itu menjadi BF ÷ (1 + BF) — 60% pada bubble factor 1.5 — tetapi pot sebenar mengandungi dead money, jadi shove 10bb biasa yang anda call dengan 9bb ke dalam pot 12bb memerlukan kira-kira 53%. Dalam kedua-dua kes, ia tetap melebihi 50% yang diberikan oleh coin flip chip-EV, dan itulah sebabnya flip bertukar menjadi fold di bubble.

**Q. Apakah itu hand-for-hand play?**

A. Berhampiran money bubble, semua meja memainkan tepat satu tangan serentak dan kemudian menunggu setiap meja selesai sebelum tangan seterusnya. Ia wujud untuk menghalang stalling — tanpanya, pemain boleh fold perlahan-lahan di satu meja untuk menyelinap ke wang hadiah sementara meja lain memecahkan bubble dengan lebih pantas.

**Q. Kenapa anda fold aces di satellite bubble?**

A. Kerana dalam satellite multi-seat setiap tempat duduk bernilai sama, jadi sebaik sahaja stack anda selamat di dalam bubble, memenangi tangan tidak memberi anda apa-apa tambahan (anda sudah ada tempat duduk anda) manakala kalah menyingkirkan anda. Dengan semua risiko dan tiada ganjaran, langkah fold — walaupun dengan pocket aces — betul dari segi matematik.

---

## 3 Perkara untuk Diingat

1. **Bertahan mengatasi cip — untuk beberapa tangan.** Berhampiran pay jump, ketatkan call anda dan kekalkan shove anda yang luas. Kemudian kembali mengumpul cip sebaik sahaja bubble pecah.
2. **Medium stack ialah perangkapnya, bukan short stack.** Big stack menyerang medium stack; medium stack main pot kecil; short stack shove dahulu dan menggunakan fold equity.
3. **Kenali jenis bubble anda.** Money, final-table dan satellite bubble memberi ganjaran kepada permainan yang berbeza — dan dalam satellite, stack yang selamat fold semuanya, termasuk aces.

Enjin di sebalik semua ini ialah [ICM](/ms/blog/holdem-icm); disiplin di sebalik setiap fold ialah [tahu bila perlu melepaskan](/ms/blog/holdem-when-to-fold).

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">ICM Dijelaskan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Matematik di sebalik kenapa bubble penting</div>
  </a>
  <a href="/ms/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Panduan Poker Tournament</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Panduan induk tempat topik bubble bernaung</div>
  </a>
  <a href="/ms/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bila Patut Fold dalam Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Disiplin yang dituntut oleh bubble</div>
  </a>
  <a href="/ms/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Alat Percuma</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kalkulator ICM</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Cari nombor bubble factor sebenar anda</div>
  </a>
</div>
`.trim(),
};
