import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-position-play",
  title: "Strategi Posisi: In Position vs Out of Position",
  seoTitle: "Kad Sama, Hasil Lain? — In Position vs Out of Position Poker",
  desc: "Kad sama, hasil bertentangan — tempat duduk yang menentukan. In position vs out of position, mengapa posisi penting, dan opening range dari UTG ke button.",
  tldr: "In position bermaksud anda bertindak terakhir dan melihat keputusan setiap lawan sebelum membelanjakan cip. Contoh solver menunjukkan posisi biasanya meningkatkan realisasi equity, tetapi range, board dan aksi boleh membalikkan corak itu. Sebab itu UTG open kira-kira 13% tangan dan button kira-kira 43%.",
  category: "strategy",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "16 minit",
  emoji: "🎯",
  image: "/images/holdem-position-play-hero.webp",
  imageAlt: "Pandangan atas meja poker profesional dengan 9 posisi berlabel dan butang pengedar, menonjolkan tempat duduk button dan cutoff sebagai zon keuntungan",
  tags: [
    "in position poker",
    "out of position poker",
    "strategi posisi poker",
    "under the gun poker",
    "mengapa posisi penting dalam poker",
    "limp atau raise UTG",
    "cara main out of position",
    "posisi terbaik dalam poker",
  ],
  content: `
Dalam satu sesi di permainan 1/2 yang biasa saya sertai, saya menerima K♥Q♥ dua kali — sekali dari big blind, sekali dari button — dan dua tangan itu mengajar saya lebih banyak tentang posisi berbanding mana-mana video latihan yang pernah saya tonton.

Dari big blind, saya call raise button dan flop memberi saya top pair pada Q♠8♦4♣. Bertindak dahulu di setiap street, saya check-call flop, check-call turn, dan apabila barrel ketiga datang di river, saya merenung felt lalu fold. Mungkin dia memang ada tangan, mungkin tidak — ==r:out of position, saya bayar dua street tanpa belajar apa-apa.==

Sejam kemudian, K♥Q♥ yang sama, kali ini di button. Saya raise, big blind call dan check pada flop J♠7♦3♣. Saya check di belakang. Turn Q♦ memberi saya top pair; dia check lagi, saya bet, dia call — dan kemudian membayar bet river saya dengan tangan yang lebih lemah. ==g:Kad sama. Tempat duduk bertentangan. Hasil bertentangan.== Itulah posisi — yang pertama daripada [lima keputusan](/ms/blog/holdem-strategy) yang membentuk strategi Texas Hold'em yang menang, dan asas bagi segala yang lain.

---

> **Jawapan ringkas**
> **In position (IP)** bermaksud anda bertindak terakhir; **out of position (OOP)** bermaksud anda bertindak dahulu. Posisi biasanya meningkatkan realisasi equity kerana bertindak terakhir memberi lebih banyak maklumat, tetapi tiada tempat duduk yang terkunci secara mekanikal di atas atau di bawah 100%: range (julat tangan), board dan aksi boleh membalikkan corak biasa. Sebab itu UTG open ~13% tangan, button ~43%, dan setiap keputusan continuation bet (c-bet), bluff dan kawalan pot berubah mengikut tempat duduk anda.

---

## Apakah Maksud "In Position" dalam Poker?

Berada **in position** bermaksud anda bertindak **selepas** lawan di flop, turn dan river — anda dapat melihat mereka check, bet atau fold sebelum anda meletakkan walau sekeping cip. Posisi sentiasa diukur berbanding **butang pengedar**: semakin dekat anda dengan button dalam urutan aksi, semakin lewat anda bertindak, dan button sendiri pasti bertindak terakhir di setiap street postflop.

Posisi ditentukan sebelum flop dan tidak berubah sepanjang tangan. Jika anda di button dan big blind call raise anda, anda IP untuk keseluruhan tangan. Jika anda open dari under the gun dan button call, anda OOP di setiap street hingga showdown.

Sembilan tempat duduk terbahagi kepada empat zon besar:

| Zon | Tempat duduk (9-max) | Postur asas |
|:---|:---|:---|
| Awal | UTG, UTG+1, UTG+2 | Range paling ketat — OOP berbanding kebanyakan meja |
| Tengah | Lojack, Hijack | Semakin luas apabila bilangan pemain di belakang berkurang |
| Lewat | Cutoff, Button | Range paling luas — IP berbanding hampir semua orang |
| Blind | SB, BB | Bet paksa, OOP berbanding setiap tempat duduk bukan blind selepas flop |

Untuk setiap nama tempat duduk, singkatan dan peta meja 6-max vs 9-max, lihat [panduan nama tempat duduk dan peta meja poker](/ms/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") — artikel ini tentang apa yang perlu anda *lakukan* di setiap tempat duduk.

---

## Apakah "Out of Position" (OOP) — dan Mengapa Bertindak Dahulu Merugikan Anda?

**Out of position** bermaksud anda bertindak **sebelum** lawan di street postflop. Setiap keputusan anda memberi mereka maklumat percuma, dan setiap keputusan mereka tiba selepas keputusan anda — terlalu lewat untuk membantu anda. Ringkasnya, anda sentiasa bermain dengan separuh gambaran, manakala lawan melihat gambaran penuh sebelum bertindak.

Inilah kos sebenar bertindak dahulu:

:::compare
Out of position (bertindak dahulu) | In position (bertindak terakhir)
Bet tanpa tahu apa-apa — mereka mungkin raise, call atau fold, dan anda hanya tahu selepas wang anda masuk | Lihat check, bet atau fold mereka sebelum membuat sebarang keputusan
Tak boleh ambil kad percuma — jika anda check, mereka boleh bet untuk memaksa anda melepaskan draw | Check di belakang bila-bila masa anda mahu melihat kad seterusnya secara percuma
Saiz pot terlepas daripada kawalan — anda tak dapat menghalang mereka bet apabila anda mahukan showdown murah | Anda yang menentukan sama ada tangan diteruskan ke street seterusnya
Range anda dibaca — laluan check-call menjadi telus lama-kelamaan | Check dan bet anda kekal kabur kerana mereka bertindak tanpa maklumat
:::

Perhatikan, tiada satu pun melibatkan kad. Dua pemain boleh memegang tangan yang sama sepanjang malam, dan yang bertindak dahulu tetap akan memperoleh wang yang lebih sedikit dengannya. Panduan ini mengajar anda cara mengutip cukai struktur itu — atau mengelakkannya.

---

## Mengapa Posisi Begitu Penting dalam Strategi Poker?

Kerana posisi menukar kad yang sama menjadi lebih banyak wang. Cara paling jelas untuk melihatnya ialah **realisasi equity** (equity realization) — berapa banyak [equity pot](/ms/blog/holdem-equity) teori anda yang benar-benar anda raih menjelang tamat tangan. Pemain yang bertindak terakhir biasanya meraih bahagian yang lebih besar, walaupun memegang kad yang sama.

| Situasi | Equity yang direalisasi (anggaran) | Sebab |
|:---|:---:|:---|
| **In position** | ==g:**Biasanya lebih tinggi — bergantung pada spot**== | Bertindak terakhir → lihat semuanya → value-bet dan bluff pada saat yang tepat |
| **Out of position** | ==r:**Biasanya lebih rendah — boleh melebihi 100%**== | Bertindak dahulu → fold tangan yang menang, bayar tangan yang kalah, lepaskan kad percuma |

Label itu panduan kasar, bukan hukum. Posisi mencipta kelebihan purata, tetapi range, board dan aksi yang menentukan sama ada mana-mana tempat duduk merealisasi lebih atau kurang dalam spot tertentu.

![Perbandingan IP vs OOP — Button (IP) bertindak terakhir, manakala range, board dan aksi menentukan realisasi equity sebenar setiap tempat duduk](/images/holdem-position-play-ip-vs-oop.webp)

Ambil 8♥7♥ pada flop K♥4♠2♥. In position, flush draw anda bermain dengan cantik: call bet dengan murah, ambil kad percuma apabila lawan check, atau bluff apabila mereka menunjukkan kelemahan dua kali. Out of position, draw yang sama bocor: bet dan berdepan raise, atau check dan lihat mereka mengenakan harga maksimum — atau lebih teruk, check lalu fold dan terlepas kad yang sepatutnya menjadikan flush anda. Sembilan out yang sama, harga yang sangat berbeza.

Dalam ribuan tangan, leak itu bertimbun menjadi perbezaan tunggal terbesar antara pemain yang menang dan yang kalah pada tahap kemahiran yang sama. ==g:Pemain yang menang bukan sekadar bermain kad yang bagus — mereka bermain kad yang bagus di posisi yang bagus.==

---

## Apakah Posisi Terbaik dalam Poker — dan Posisi Paling Teruk?

**Posisi terbaik dalam poker ialah button.** Ia satu-satunya tempat duduk yang dijamin bertindak ==**terakhir di setiap street postflop**== — flop, turn dan river, tidak kira siapa yang raise sebelum flop. Jaminan itulah sebabnya button boleh open ~43% tangan secara menguntungkan sedangkan UTG hanya ~13%: posisi, bukan kekuatan kad, yang membiayai perbezaan itu.

Inilah kelebihan button dalam satu tangan konkrit. Anda open A♦9♦ di button, big blind call, dan flop keluar **K♦7♠2♥** — board kering yang hampir tidak mengenai sesiapa. Big blind check — yang hampir tidak memberitahu anda apa-apa di sini, kerana dia check hampir seluruh range-nya pada board ini. Maklumatnya ada di tempat lain: kad K mengenai opening range anda jauh lebih kerap daripada range call-nya. ==g:Bet di sini jauh lebih kerap menang daripada kalah==, dan apabila dia fold, ace-high mengambil pot tanpa showdown. Sekarang terbalikkan tempat duduk: OOP dengan A♦9♦ yang sama, anda check, dia bet, dan anda akan fold tangan terbaik agak kerap. Kad sama; tempat duduk yang melakukan semua kerja.

**Cutoff** ialah yang kedua terbaik atas satu sebab: hanya button bertindak di belakang anda, dan apabila button fold — yang kerap berlaku — anda mewarisi aksi terakhir untuk baki tangan.

**Dan tempat duduk paling teruk?** Sebenarnya ada dua jawapan, dan berbaloi untuk membezakannya dengan jelas:

| Tempat duduk | Hasil jangka panjang biasa (purata pangkalan data) | Sebab |
|:---|:---|:---|
| **Button** | Jelas positif — tempat duduk paling menguntungkan dalam hampir setiap sampel | Aksi terakhir dijamin selepas flop |
| **Cutoff** | Positif — kedua terbaik | Hanya button di belakang anda |
| Hijack / Lojack | Positif kecil hingga sekitar pulang modal | Posisi sederhana, range sederhana |
| UTG | Hampir pulang modal walaupun bagi pemain yang mantap | Range ketat, OOP dalam kebanyakan tangan |
| **Small blind** | Negatif — ==r:**tempat duduk paling teruk secara struktur untuk bermain tangan**== | Bertindak pertama di setiap street postflop, separuh blind sudah hangus |
| **Big blind** | ==r:**Kerugian bb/100 mentah paling besar**== | Membayar blind penuh setiap orbit — permainan sempurna pun hanya mengecilkan kerugian |

Perbezaan ini penting: **big blind kehilangan paling banyak cip mentah setiap 100 tangan** semata-mata kerana ia dipaksa meletakkan blind penuh setiap orbit (satu pusingan penuh meja) — tiada strategi yang boleh menjadikan bet paksa percuma. Tetapi **small blind ialah tempat duduk paling teruk untuk benar-benar dimainkan**, kerana anda bertindak pertama di setiap street postflop tanpa diskaun yang cukup berbaloi untuk menampungnya. Angka bb/100 yang tepat berbeza mengikut stake dan kumpulan pemain, jadi anggap mana-mana angka khusus sebagai hasil pangkalan data biasa, bukan hukum — tetapi *susunannya* sangat konsisten.

> **Tip permainan live:** Di permainan live 1/2, pemain kerap limp dari button kerana "tangan saya tak begitu bagus." Itu membiarkan tempat duduk paling berharga dalam poker tidak digunakan. Di button, open-raise atau fold — premium posisi terlalu berharga untuk dibazirkan dengan limp.

---

## Under the Gun: Apa Maksudnya dan Bagaimana Bermain dari UTG?

**Under the gun (UTG)** ialah tempat duduk betul-betul di sebelah kiri big blind — pemain pertama yang bertindak sebelum flop, tanpa sebarang maklumat tentang lapan tangan di belakangnya. Namanya sendiri menggambarkan strateginya: anda *under the gun*, di bawah tekanan, dipaksa membuat keputusan dahulu. (Selepas flop, urutannya berubah: blind bertindak dahulu dan button terakhir — sumpahan UTG ialah open tanpa maklumat sebelum flop, kemudian biasanya bermain OOP menentang pemain posisi lewat yang call.)

Bermain UTG dengan baik kebanyakannya soal menahan diri:

- **Open ~13% tangan teratas** — terasnya pasangan kuat (TT+), AK/AQ dan suited broadway terbaik (AJs, KQs), ditambah pasangan sederhana dan suited ace teratas yang anda masukkan apabila melonggarkan range. Untuk grid tangan demi tangan yang tepat, gunakan [carta tangan permulaan](/ms/blog/holdem-starting-hands-chart).
- **Fold tangan yang cantik tetapi didominasi.** KJo dan QJo nampak boleh dimainkan tetapi diam-diam menghakis cip dari UTG — apabila ia kena, pemain di belakang sering kena lebih besar.
- **Jangka untuk bermain tangan itu OOP.** Sesiapa yang call open UTG anda mungkin mempunyai posisi ke atas anda untuk tiga street, jadi range anda perlu cukup kuat untuk menanggung cukai itu.

> **Ujian disiplin:** jika fold AJo dari UTG terasa sedikit salah, anda mungkin memainkannya dengan betul. Terasa ketat, untung lebih.

---

## Lebih Baik Limp atau Raise dari UTG?

**Raise atau fold — jangan limp.** Jika sesuatu tangan cukup kuat untuk dimainkan dari tempat duduk preflop paling teruk, ia cukup kuat untuk raise; jika ia tidak cukup kuat untuk raise, memainkannya OOP menentang beberapa lawan untuk baki tangan itulah perangkap yang dipasang oleh tempat duduk ini untuk anda.

Open limp dari UTG gagal atas tiga sebab:

1. **Ia menjemput seluruh meja masuk** pada pot odds yang sempurna, jadi anda melihat flop menentang empat tangan rawak dalam keadaan OOP.
2. **Ia menghadkan range yang dilihat lawan** — pemain yang peka menyerang limper tanpa henti, dan anda akan berdepan raise yang sukar untuk diteruskan dengan selesa.
3. **Ia tidak memenangi apa-apa sebelum flop.** Raise boleh mengambil blind terus; limp tidak pernah.

Ada pengecualian sempit dalam permainan live yang sangat pasif — limp di belakang limper lain dengan pasangan kecil dan suited connector untuk melihat flop multiway yang murah — tetapi *open*-limp dari UTG ialah leak dalam hampir setiap barisan pemain. Hujah penuhnya, termasuk bila limp di belakang sebenarnya tidak mengapa, ada dalam [panduan limp](/ms/blog/holdem-limping).

---

## Strategi Posisi Awal vs Posisi Lewat (Stealing the Blinds)

Posisi awal ialah tempat anda bertahan; posisi lewat ialah tempat anda menyerang. Dari UTG hingga UTG+2, tugasnya mudah — range ketat, kad besar, tiada permainan yang pelik. Dari cutoff dan button, tugasnya berubah sepenuhnya: anda tidak lagi menunggu tangan, ==g:anda sedang menuai dead money.==

**Blind stealing** ialah langkah teras posisi lewat. Apabila semua orang fold kepada anda di CO atau button, raise itu sebenarnya bukan tentang kad anda — ia tentang dua bet paksa yang sudah berada dalam pot dan hakikat bahawa kedua-dua blind mesti bermain OOP jika mereka bertahan:

- **Steal dari cutoff:** raise ~2.2–2.5× dengan range luas apabila semua orang fold kepada anda — tetapi ingat, button masih mengintai di belakang anda.
- **Steal dari button:** lebih luas lagi — tangan seperti K7s, Q9s dan A2o menjadi open yang menguntungkan kerana kedua-dua blind OOP menentang anda sepanjang tangan.
- **Hormati resteal:** blind yang 3-bet secara agresif menghakis keuntungan steal anda; menentang mereka, ketatkan sedikit dan 4-bet calon terbaik anda.

![Pemain posisi lewat di button menolak raise ke hadapan sementara kedua-dua blind fold — blind steal klasik](/images/holdem-position-play-blind-steal.webp "Steal blind dari button apabila semua orang fold")

Asimetri itulah pengajarannya: K7s yang sama yang menjadi steal button yang baik ialah fold serta-merta di posisi awal. Tangannya tidak pernah berubah — yang berubah ialah bilangan pemain yang perlu dikalahkan, dan siapa yang bertindak dahulu selepas itu.

---

## Opening Range Ikut Posisi: Carta Strategi

Setiap tempat duduk mendapat opening range sendiri kerana **bilangan pemain yang masih belum bertindak — dan posisi postflop anda berbanding mereka — mengubah risiko setiap tangan**. Semakin ramai pemain di belakang anda, semakin kuat tangan yang diperlukan untuk open. Berikut ialah garis asas 9-max standard:

| Posisi | Opening range (anggaran) | Rasional |
|:---|:---:|:---|
| UTG | ~13% | Lapan pemain di belakang, OOP dalam kebanyakan tangan |
| UTG+1 | ~14% | Hanya sedikit lebih luas daripada UTG |
| UTG+2 | ~16% | Bilangan pemain di belakang mula berkurang |
| Lojack | ~17% | Posisi tengah sebenar yang pertama |
| Hijack | ~20% | Peluang steal bermula |
| **Cutoff** | **~27%** | Hanya button di belakang — tempat duduk steal utama |
| **Button** | ==g:**~43%**== | Aksi terakhir dijamin selepas flop — open paling luas |
| Small blind | ~40% apabila semua fold kepada anda (vs raise: 3-bet atau fold) | Luas apabila semua fold kepada anda — raise secara lalai, walaupun complete ialah [limp](/ms/blog/holdem-limping) yang wajar dalam pot tanpa raise; berdepan raise, 3-bet atau fold — hampir tidak pernah flat call |
| Big blind | Bertahan luas menentang steal | Menutup aksi + pot odds, bukan open |

![Meja poker 9 pemain menunjukkan opening range melebar dari UTG (~13%, merah ketat) ke Button (~43%, hijau luas)](/images/holdem-position-play-opening-range.webp "Opening range ikut posisi — UTG open ~13%, button ~43%")

Peraturan kerjanya: ==**setiap langkah ke arah button meluaskan range**== — satu atau dua mata setiap tempat duduk di posisi awal, kemudian lonjakan besar di cutoff (+7%) dan button (+16%) di mana posisi hampir pasti. Bergerak ke arah sebaliknya, ==r:buang suited hand paling lemah dan offsuit broadway dahulu.==

Peratusan ini menerangkan *saiz range* — tangan khusus mana yang mengisinya (sama ada T9s open di sini, sama ada K9o layak di sana) ialah tugas [carta tangan permulaan ikut posisi](/ms/blog/holdem-starting-hands-chart), yang memetakan setiap tangan ke setiap tempat duduk.

---

## Bagaimana Bermain Out of Position (Bila Tak Dapat Dielakkan)?

Kebanyakan panduan berhenti pada "elakkan bermain OOP." Baik — tetapi anda berada di blind dua kali setiap orbit, dan kadangkala open UTG anda di-call oleh button. Inilah cara untuk rugi paling sedikit, dan sesekali memusingkan keadaan:

**1. [Check-raise](/ms/blog/low-board-check-raise) ialah penyeimbang anda.** Ia satu-satunya senjata yang dimiliki OOP tetapi tiada pada IP: kerana mereka menjangka untuk bet apabila anda check, ==g:check-raise menjadikan autopilot posisi mereka senjata terhadap mereka sendiri.== Bina range secara jujur — tangan kuat (set, two pair) ditambah draw dengan equity sebenar (open-ender, flush draw) — supaya ia tidak pernah semuanya bluff atau semuanya value.

**2. Beri setiap bet satu tugas — dan pilih saiz ikut spot.** Tiada satu saiz out of position yang tunggal. Dalam single-raised pot yang kami selesaikan dengan solver, pemain OOP yang bet kebanyakannya memilih kira-kira satu pertiga pot (79.6% range small blind mengambil saiz itu pada A♠A♥6♦, board dengan pasangan As yang sangat memihak kepada raiser). Dalam 3-bet pot, 3-bettor OOP masih memilih saiz kecil pada A♦K♠2♥ (57.8%) tetapi beralih ke dua pertiga pot pada Q♥T♥7♠ dan 8♦5♣2♠. Saiz lebih besar berfungsi untuk menafikan kad percuma dan float murah yang posisi akan benarkan lawan anda ambil; saiz kecil membolehkan anda bet dengan range yang luas secara murah. Yang merugikan ialah bet tanpa rancangan — setiap street tambahan yang anda lalui tanpa arah memihak kepada pemain yang bertindak terakhir.

**3. Kawalan pot bermaksud lebih banyak check, lebih banyak call, dan fold lebih awal.** Tangan kekuatan sederhana OOP mahukan showdown murah. Laluan check-call membawa anda ke sana; laluan bet-lalu-di-raise tidak. Dan apabila barrel ketiga tiba dan tangan anda tidak bertambah baik, ingat apa sebenarnya tangan marginal OOP: ==r:bluff-catcher yang kurang merealisasi equity.== Fold di river OOP lebih kerap daripada yang terasa wajar biasanya betul.

**4. Lead (donk-bet) jarang dan khusus.** Bet ke arah raiser preflop paling berkesan pada board yang memihak kepada range anda — flop rendah dan bersambung yang mengenai range bertahan blind dengan kuat dan terlepas range raiser. Sebagai laluan lalai, ia mudah dibaca dan dieksploitasi; sebagai pisau bedah pada board yang betul, ia tidak mengapa.

**5. Paling baik: jangan sampai ke situ.** Flat call raise dari small blind, cold call di posisi tengah dengan tangan yang didominasi, mempertahankan big blind menentang open posisi awal dengan tangan sampah — kebanyakan kesengsaraan OOP berpunca daripada diri sendiri pada keputusan preflop.

---

## Bagaimana Posisi Mempengaruhi Kekerapan C-Bet?

Pengaruhnya sangat besar. Continuation bet pada asasnya ialah permainan maklumat, dan maklumat itulah yang dibekalkan oleh posisi. Pemain in position boleh c-bet dengan jauh lebih kerap, manakala raiser OOP dalam single-raised pot perlu jauh lebih selektif — kecuali apabila dia ialah 3-bettor yang memegang kelebihan range:

| Situasi | Kekerapan c-bet solver biasa (flop) |
|---|---|
| **IP (BTN/CO vs blind yang bertahan)** | **~65–75%** board |
| OOP sebagai 3-bettor (3-bet pot dari blind) | Sangat tinggi — dalam larian solver kami, big blind c-bet lebih 97% masa pada kedua-dua Q♥T♥7♠ dan 8♦5♣2♠ — pada saiz dua pertiga pot; saiz satu pertiga mendapat bawah 1% (pada A♦K♠2♥ saiz satu pertiga pula yang mendahului, 57.8%) |
| Raiser OOP vs caller IP (single-raised pot) | ~30–45% — paling selektif |

In position, anda boleh c-bet dengan range luas — termasuk tangan kosong (air) dan backdoor draw — kerana lawan mesti bertindak balas tanpa mengetahui langkah seterusnya anda, dan apabila di-call anda masih bertindak terakhir di turn. Out of position, bet yang sama lebih berisiko: raise menamatkan bluff anda, dan call membiarkan anda meneka dahulu di setiap street yang tinggal. Sebab itu c-bet 100% secara membuta tuli "kerana anda raise preflop" membakar wang OOP dalam single-raised pot — baris hampir 100% di atas milik 3-bettor, yang kelebihan range-nya membenarkannya.

Rangka kerja saiz dan tekstur board sepenuhnya ada dalam [panduan continuation bet](/ms/blog/holdem-continuation-bet).

---

## Small Blind Strategy: Mengapa 3-Bet atau Fold?

Small blind nampak murah — separuh blind sudah masuk — tetapi mahal untuk dimainkan: anda bertindak pertama di setiap street postflop menentang semua orang. Strategi moden telah bertumpu pada satu penyelesaian tegas: ==**dari SB, berdepan raise, 3-bet atau fold — hampir tidak pernah flat call.**== Sebabnya ialah kelemahan posisi yang tidak dapat ditebus oleh diskaun separuh blind itu.

Flat call dari SB meletakkan anda dalam range yang terhad dan telus, OOP, dengan big blind masih di belakang anda dan mendapat harga yang baik untuk squeeze. Sebaliknya:

- **3-bet** tangan value anda dan satu lapisan blocker bluff (A5s, A4s ialah contoh klasik).
- **Fold** semua yang sepatutnya menjadi call "murah" — diskaun itu tidak menampung cukai posisi.
- **Besarkan saiz hingga ~4× open** (berbanding ~3× apabila 3-bet IP): oleh kerana anda tidak akan mempunyai kelebihan postflop, kenakan harga lebih tinggi sebelum flop dan tamatkan lebih banyak tangan di situ juga.

Untuk mekanik blind itu sendiri — mengapa ia wujud dan bagaimana bet paksa membentuk permainan — lihat [panduan small blind dan big blind](/ms/blog/holdem-blind-meaning).

---

## 6-Max vs Full Ring — dan Tournament vs Cash Game

**6-max memampatkan peta.** Dengan tiga tempat duduk awal dibuang, pemain pertama yang bertindak dalam 6-max hanya berdepan lima lawan — jadi ==**UTG 6-max bermain seperti lojack full ring, open sekitar ~17%**== dan bukannya ~13% UTG full ring. Tempat duduk kemudian mengekalkan bilangan pemain yang sama di belakangnya, jadi range-nya hampir tidak berubah — tetapi anda lebih kerap duduk di situ, steal lebih biasa, dan 3-bet lebih kerap secara keseluruhan. Leak paling biasa apabila bertukar format ialah membawa keketatan 9-max ke 6-max — akhirnya anda terlalu banyak fold sehingga stack habis dimakan blind.

**Tournament mengekalkan mekanik yang sama dengan pertaruhan berbeza pada setiap keputusan.** Dalam cash game, kelebihan posisi bertimbun dengan tenang sepanjang berjam-jam dan rebuy menjadikan leak boleh dipulihkan. Dalam tournament, stack yang mengecil mengubah teksturnya: di bawah ~15 big blind, permainan runtuh ke arah push/fold di mana nuansa posisi kurang penting, manakala pada 20–30 BB steal dari posisi lewat menjadi enjin untuk terus bertahan — sehingga ICM di bubble menjadikan sesetengah steal yang betul secara matematik sebagai bunuh diri dalam tournament. Perbandingan penuhnya ada dalam [panduan tournament vs cash game](/ms/blog/holdem-tournament-vs-cash-game).

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-positions | Nama Tempat Duduk Poker & Peta Meja | /images/holdem-positions-hero.webp
/ms/blog/holdem-starting-hands-chart | Carta Tangan Permulaan Ikut Posisi | /images/holdem-starting-hands-chart-hero.webp
:::

## Soalan Lazim

**Q. Apakah maksud out of position dalam poker?**

A. Out of position (OOP) bermaksud anda mesti bertindak sebelum lawan di street postflop — flop, turn dan river. Anda meletakkan cip tanpa mengetahui apa yang akan mereka lakukan, tidak boleh mengambil kad percuma, dan sukar mengawal saiz pot. Blind OOP berbanding setiap tempat duduk bukan blind (dan small blind juga OOP berbanding big blind); button tidak pernah OOP berbanding sesiapa.

**Q. Siapa bertindak dahulu — small blind atau big blind?**

A. Bergantung pada street. *Preflop*, small blind bertindak sebelum big blind, dan big blind bertindak terakhir — ia "menutup" aksi. *Postflop* (flop, turn dan river), small blind bertindak pertama dan big blind terus selepasnya, jadi selepas kad komuniti dibuka small blind bertindak sebelum big blind (satu-satunya pengecualian ialah heads-up, di mana button membayar small blind dan tetap bertindak terakhir selepas flop, jadi big blind bertindak dahulu). Button sentiasa bertindak terakhir selepas flop, dan itulah sebabnya ia tempat duduk paling menguntungkan.

**Q. Mengapa posisi begitu penting dalam poker?**

A. Kerana bertindak terakhir menukar kad yang sama menjadi lebih banyak wang. Ia biasanya meningkatkan realisasi equity, tetapi ia tidak memaksa tempat duduk in position melebihi 100% atau tempat duduk out of position di bawahnya; range, board dan aksi boleh membalikkan corak itu. Pemain in position tetap melihat setiap keputusan lawan sebelum membuat keputusan sendiri, jadi dia value-bet, bluff dan fold pada saat yang lebih baik dengan tangan yang sama.

**Q. Apakah posisi paling menguntungkan dalam poker?**

A. Button. Ia satu-satunya tempat duduk yang dijamin bertindak terakhir di setiap street postflop, sebab itulah kajian pangkalan data secara konsisten menunjukkannya sebagai pemenang terbesar pada setiap saiz meja — ia boleh open sekitar 43% tangan secara menguntungkan, lebih kurang tiga kali ganda UTG. Cutoff di tempat kedua, kerana hanya button bertindak di belakangnya.

**Q. Apakah posisi paling lemah dalam poker?**

A. Dua jawapan, bergantung pada soalannya. Small blind ialah tempat duduk paling teruk secara struktur untuk bermain tangan — bertindak pertama di setiap street postflop. Big blind kehilangan paling banyak cip mentah setiap 100 tangan, semata-mata kerana ia membayar blind paksa penuh setiap orbit; permainan sempurna pun hanya mengurangkan kerugian itu. Antara tempat duduk bukan blind, UTG paling lemah: pertama sebelum flop, range paling ketat, biasanya OOP selepas flop.

**Q. Adakah small blind posisi awal?**

A. Tidak — small blind ialah blind, bukan tempat duduk "posisi awal". Pemain posisi awal (UTG dan tempat duduk di sebelahnya) open dengan ketat kerana seluruh meja bertindak di belakang mereka — dan selepas flop sekurang-kurangnya mereka bertindak *selepas* blind. Small blind sebenarnya tempat duduk paling teruk untuk bermain: ia membayar separuh blind kemudian bertindak pertama di setiap street postflop. Jangan layan ia seperti posisi awal — berdepan raise, pilihan lalai moden dari small blind ialah 3-bet atau fold, hampir tidak pernah flat call; apabila semua orang fold kepada anda, raise pada kebanyakan masa.

**Q. Lebih baik limp atau raise dari UTG?**

A. Raise atau fold — jangan open-limp. Tangan yang cukup kuat untuk dimainkan dari tempat duduk preflop paling teruk cukup kuat untuk raise; limp menjemput pot multiway yang akan anda mainkan out of position, menghadkan range yang dilihat lawan, dan tidak pernah memenangi blind terus. Di UTG, belum ada limper di hadapan anda untuk diikuti, jadi pengecualian biasa — over-limp di belakang limper sedia ada dalam permainan live pasif dengan pasangan kecil dan suited connector — milik tempat duduk kemudian.

**Q. Berapa luas range yang patut saya open dari UTG berbanding button?**

A. Dari UTG dalam permainan full ring, open sekitar ~13% tangan teratas — pasangan kuat, AK/AQ dan suited broadway terbaik. Dari button, sekitar ~43% menguntungkan kerana aksi terakhir yang dijamin menampung kad yang lebih lemah. Dalam 6-max, UTG melebar kepada kira-kira ~17%, bermain seperti lojack full ring.

**Q. Bagaimana posisi mempengaruhi kekerapan c-bet?**

A. In position (button atau cutoff), solver c-bet kira-kira 65–75% flop — anda bertindak terakhir di setiap street seterusnya, jadi bet luas termasuk tangan kosong selamat. Out of position dalam single-raised pot, angka itu jatuh ke kira-kira 30–45%, kerana raise boleh menamatkan bluff anda dan call membiarkan anda meneka dahulu di turn dan river (sebagai 3-bettor out of position, ceritanya berbeza — kelebihan range membolehkan anda c-bet hampir setiap flop pada board yang kami jalankan). C-bet dengan kekerapan yang sama OOP seperti IP ialah salah satu leak paling biasa dan paling mahal.

**Q. Patutkah anda sentiasa 3-bet dari small blind?**

A. Apabila anda masuk ke pot yang sudah di-raise, kebanyakannya ya — pilihan lalai moden dari SB ialah 3-bet atau fold, bukan flat call. Flat call mencipta range yang terhad dan out of position yang boleh di-squeeze oleh big blind. 3-bet tangan kuat anda serta blocker bluff seperti A5s/A4s, besarkan saiz hingga kira-kira 4× open (berbanding 3× in position), dan fold selebihnya.

---

## Perkara yang Perlu Diingat

1. **Posisi meningkatkan realisasi equity secara purata.** Tiada tempat duduk yang tetap di atas atau di bawah 100%; range, board dan aksi yang menentukan angkanya. Kelebihan biasa datang daripada bertindak terakhir, bukan daripada kad yang lebih baik.
2. **Range bergeser mengikut posisi.** UTG open ~13%, button ==g:~43%== — dan setiap tempat duduk di antaranya mendapat satu anak tangga. ==r:Bermain tangan button dari UTG menghakis cip.==
3. **Button tempat duduk terbaik; blind yang paling teruk.** BB kehilangan paling banyak cip mentah (bet paksa); SB tempat duduk paling teruk untuk benar-benar dimainkan (bertindak pertama setiap street). Lindungi button anda, dan apabila anda di small blind dan berdepan raise, 3-bet atau fold hampir setiap kali.
4. **OOP bukan tiada harapan — ia soal disiplin.** Check-raise sebagai penyeimbang, pilih saiz bet ikut board dan jenis pot, kawal pot dengan tangan sederhana, dan fold di river lebih kerap daripada yang terasa wajar.
5. **Raise atau fold dari under the gun.** Open-limp dari UTG menggabungkan tempat duduk preflop paling teruk dengan laluan paling lemah.
6. **6-max memampatkan peta.** UTG 6-max bermain seperti lojack full ring (~17%) — kalibrasi semula apabila anda bertukar format.

Untuk setiap nama tempat duduk dan peta meja penuh, lihat [panduan nama tempat duduk dan posisi poker](/ms/blog/holdem-positions). Untuk tangan tepat yang mengisi setiap range, gunakan [carta tangan permulaan ikut posisi](/ms/blog/holdem-starting-hands-chart). Dan untuk sebab tempat duduk "berdiskaun" paling merugikan anda, [panduan small blind dan big blind](/ms/blog/holdem-blind-meaning) menghuraikan matematik bet paksa secara terperinci.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Posisi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Nama Tempat Duduk Poker & Peta Meja</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — setiap tempat duduk diterangkan</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tangan Permulaan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Tangan Permulaan Ikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tangan mana untuk dimainkan dari setiap tempat duduk — carta rujukan boleh cetak</div>
  </a>
  <a href="/ms/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Strategi Small Blind & Big Blind</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mengapa tempat duduk berdiskaun paling sukar untuk mendatangkan untung</div>
  </a>
  <a href="/ms/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Strategi Tournament vs Cash Game</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bagaimana keputusan posisi berubah apabila ICM terpakai</div>
  </a>
</div>
`.trim(),
};
