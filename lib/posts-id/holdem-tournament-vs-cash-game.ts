import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Cash Game vs Turnamen Poker",
  seoTitle: "Chip Anda bukan uang — cash game vs turnamen poker",
  desc: "Cash game vs turnamen poker — mana yang cocok? Nilai chip, blind naik, ICM, bankroll, mana yang lebih sulit dan lebih untung, serta di mana pemula mulai.",
  tldr: "Di cash game, chip adalah uang nyata dan blind tetap. Di turnamen, chip adalah ekuitas bertahan, blind naik, dan hadiah bergantung pada posisi finis Anda.",
  category: "tournament",
  date: "2026-06-11",
  updated: "2026-07-11",
  hideSummaryImageSlot: true,
  readTime: "16 mnt",
  emoji: "🏆",
  image: "/images/holdem-tournament-vs-cash-hero.webp",
  imageAlt: "Infografik berdampingan membandingkan cash game dan turnamen poker — nilai chip, struktur blind, dan kapan Anda bisa pergi",
  tags: [
    "cash game vs turnamen poker",
    "apa itu cash game di poker",
    "aturan cash game poker",
    "apakah cash game menguntungkan",
    "apakah cash game lebih sulit dari turnamen",
    "kapan meninggalkan cash game",
    "manajemen bankroll poker",
    "ICM poker",
  ],
  content: `
Saya masih ingat saat merapikan chip setelah sesi cash live pertama saya — chip itu adalah uang yang benar-benar bisa saya bawa ke kasir dan masukkan ke kantong. Turnamen pertama saya berakhir sangat berbeda: empat jam bermain hati-hati, satu flip yang kalah, dan setumpuk chip yang berubah menjadi persis tidak ada apa-apa saat saya keluar. Jarak itulah yang menjadi inti seluruh artikel ini.

Hampir semua pemain Hold'em baru akhirnya bertanya hal yang sama:

*"Saya sebaiknya main ==cash game== atau ==turnamen==?"*

Sekilas keduanya terlihat seperti permainan yang sama. Anda tetap mendapat dua kartu tertutup, lima kartu bersama, dan empat ronde taruhan dari preflop sampai river. Tapi secara strategi, keduanya hampir seperti dua dunia berbeda. Di cash game, chip Anda adalah uang. Di turnamen, chip Anda adalah nyawa turnamen Anda.

Panduan ini membedah ==cash game vs turnamen poker== dengan cara yang benar-benar dibutuhkan pemula: apa itu cash game dan cara kerjanya, nilai chip, struktur blind, bagaimana strategi berubah, format mana yang lebih sulit, mana yang lebih menguntungkan, bankroll, ICM, dan mana yang sebaiknya Anda mulai duluan. Jika turnamen sendiri masih menjadi misteri, baca dulu [cara kerja turnamen poker — buy-in, level blind, dan alur Day-1](/id/blog/holdem-tournament) terlebih dahulu; artikel ini membandingkan kedua format, bukan mengulang panduan struktur itu.

### Jawaban 15 detik

- **Cash game:** chip setara uang nyata, blind tetap, dan Anda bisa keluar kapan saja.
- **Turnamen:** Anda membayar satu biaya masuk, menerima chip turnamen, lalu bermain sampai bust atau menang.
- **Cash game lebih cepat mengajarkan dasar** karena stack lebih dalam dan lingkar feedback lebih pendek.
- **Turnamen menawarkan potensi lebih besar** tapi dengan varians jauh lebih tinggi, sesi lebih panjang, dan [tekanan ICM](/id/blog/holdem-icm).
- **Untuk kebanyakan pemula, cash game adalah titik awal yang lebih bersih.** Tambahkan turnamen setelah dasar terasa otomatis.

---

## Cash game vs turnamen poker: perbedaan inti

Cara paling bersih untuk mengatakannya adalah ini:

==**Cash game adalah soal membuat keputusan menguntungkan dengan uang di meja. Turnamen adalah soal bertahan cukup lama untuk memenangkan hadiah.**==

Di cash game, jika Anda buy-in $200, chip Anda mewakili $200. Jika Anda menaikkannya menjadi $450, ==g:Anda bisa keluar membawa $450==. Setiap chip punya nilai uang langsung.

Di turnamen, Anda mungkin membayar buy-in $100 dan menerima 20.000 chip. ==r:Chip itu tidak bernilai $20.000==, dan Anda tidak bisa menguangkannya di tengah event. Chip hanya berarti karena membantu Anda bertahan, memberi tekanan, dan finis lebih tinggi dalam struktur pembayaran.

Beginilah rasanya di meja. Dalam cash game $1/$2, call taruhan river $60 dengan satu pair berarti Anda mempertaruhkan $60 sekarang. Jika call itu buruk, Anda masih bisa berdiri, reload, atau main lagi lain hari. Dalam turnamen $50 dekat masuk hadiah, call all-in 18 big blind bisa mengakhiri seluruh event Anda. Kartunya mungkin terlihat mirip, tapi biaya ketika salah tidak sama.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kategori | Cash game | Turnamen |
|------|------|------|
| Nilai chip | Uang nyata | Ekuitas turnamen |
| Masuk permainan | Buy-in sesuai jumlah pilihan | Bayar biaya masuk tetap |
| Keluar | Keluar kapan saja | Main sampai bust atau selesai |
| Blind | Biasanya tetap | Naik seiring waktu |
| Tujuan utama | Maksimalkan EV jangka panjang | Bertahan dan naik hadiah |
| Strategi kunci | Postflop deep stack | Tekanan stack, ICM, permainan bubble |

</div>

Kalau Anda memahami tabel ini, ==g:Anda sudah memahami fondasi seluruh perbandingan ini==.

---

## Apa itu cash game di poker? (Aturan & cara kerja)

==Cash game== (juga disebut ring game) adalah cara asli poker dimainkan: Anda duduk, menukar uang Anda sendiri dengan chip, dan setiap chip di meja bernilai persis sesuai nilai nominalnya. Tanpa jadwal, tanpa prize pool, tanpa posisi finis — hanya poker, tangan demi tangan.

**Bagaimana cara kerja cash game?** Anda memilih sendiri buy-in Anda dalam batas yang tertera di meja. Permainan live $1/$2 khas mungkin mengizinkan mulai sekitar $40 sampai $300, dan di mana Anda buy-in itu penting: stack lebih dalam menciptakan lebih banyak permainan postflop, sementara stack lebih pendek menyederhanakan keputusan.

**Chip adalah uang setiap saat.** Menangi sebuah pot dan uang itu langsung milik Anda — tidak ada "masuk hadiah" seperti di turnamen. Ini juga sebabnya keputusan cash game dinilai murni dari apakah ia menghasilkan uang dalam jangka panjang.

**Blind tetap.** Permainan $1/$2 tetap $1/$2 lima jam kemudian. Dua taruhan paksa hanya berputar mengelilingi meja setiap tangan. Jika small blind, big blind, atau "option" masih membingungkan Anda — atau Anda ingin aturan missed blind dan straddle — [apa sebenarnya blind di poker](/id/blog/holdem-blind-meaning) membahas semua itu di satu tempat.

**Anda bisa reload dan keluar dengan bebas.** Kehilangan stack dan Anda bisa membeli chip lagi di tempat (sampai batas maksimum meja). Perlu pergi? Rapikan chip Anda dan uangkan — tanpa perlu izin.

**Rumah mengenakan rake.** Di kebanyakan cash game, rumah mengambil potongan kecil dari setiap pot (atau mengenakan biaya kursi berbasis waktu). Ia diam-diam membentuk level mana yang bisa dikalahkan, jadi ada gunanya memahami [cara kerja rake poker](/id/blog/holdem-rake) sebelum Anda memilih permainan.

:::note[Bagian ini membahas hal-hal esensial cash game. Kami sedang mengembangkannya menjadi panduan cash game tersendiri yang lengkap — anggap ini benihnya.]:::

---

## Chip turnamen bukan uang

Ini perbedaan paling penting dalam seluruh artikel ini.

Di cash game, menggandakan stack berarti menggandakan uang. Karena itu keputusan cash game bisa sangat fokus pada chip EV: *Apakah call ini menguntungkan? Apakah bet ini menghasilkan uang seiring waktu?*

Di turnamen, ==r:menggandakan stack chip Anda **tidak** menggandakan ekuitas uang nyata Anda==. Hadiah ditentukan oleh posisi finis, bukan oleh jumlah chip persis yang Anda punya pada satu momen.

Bayangkan turnamen 10 pemain di mana semua membayar $100 (mengabaikan biaya rumah demi kesederhanaan — seluruh $1.000 masuk ke prize pool).

| Finis | Hadiah |
|:---|:---:|
| 1 | $500 |
| 2 | $300 |
| 3 | $200 |
| 4-10 | $0 |

Jika Anda naik dari 10% chip menjadi 20% chip, peluang Anda memenangkan uang membaik, tapi ekuitas hadiah Anda tidak begitu saja dua kali lipat. Namun jika Anda kehilangan semua chip di bubble, ekuitas turnamen Anda menjadi nol.

==r:Asimetri itulah yang membuat turnamen poker kadang menghargai fold pada tangan yang di cash game akan menjadi call menguntungkan.==

![Infografik: chip cash langsung dikonversi menjadi uang sementara chip turnamen tidak punya nilai uang sampai Anda mencapai finis berbayar](/images/holdem-tournament-chips-not-money.webp "Nilai chip turnamen dan ICM dalam poker")

---

## Blind tetap vs blind yang naik

Cash game dan turnamen juga terasa berbeda karena blind bergerak dengan cara berbeda.

Dalam cash game $1/$2, blind tetap $1/$2. Satu jam kemudian, masih $1/$2. Tiga jam kemudian, masih $1/$2. Anda bisa menunggu spot lebih baik, reload jika perlu, dan terus bermain dengan stack dalam.

Dalam turnamen, blind naik sesuai jadwal. Stack yang di awal 100 big blind bisa menjadi 25 big blind kemudian tanpa kalah satu tangan pun. Lalu bisa menjadi 12 big blind. Pada akhirnya, menunggu menjadi mahal.

| Tahap | Cash game | Turnamen |
|------|------|------|
| Awal | Stack dalam tetap umum | Kebanyakan pemain mulai deep |
| Tengah | Tekanan blind tetap stabil | Stack rata-rata makin dangkal |
| Akhir | Anda masih bisa reload atau keluar | All-in short stack makin umum |
| Tekanan | Lebih rendah dan lebih stabil | Naik di setiap level |

==r:Itulah mengapa "tunggu kartu premium saja" tidak selalu cukup di turnamen.== Blind yang naik memaksa Anda ==mencuri, bertahan, reshove, dan mengambil risiko terkontrol==.

---

## Strategi cash game vs turnamen — apa yang sebenarnya berubah

Jika chip berarti hal berbeda dan blind bergerak berbeda, strategi pun harus berubah. Inilah pergeseran yang benar-benar akan Anda rasakan di meja.

**Cash game adalah satu permainan panjang; turnamen adalah banyak permainan pendek.** Di cash game, setiap keputusan dinilai dari satu pertanyaan: apakah ia menghasilkan uang selama ribuan repetisi? Di turnamen, keputusan yang sama juga harus menjawab pertanyaan kedua: apa dampaknya terhadap peluang saya bertahan sampai masuk hadiah?

**Baseline preflop Anda mulai sama, lalu memisah.** [Bagan starting hand](/id/blog/holdem-starting-hands-chart) yang solid adalah fondasi di kedua format — tapi turnamen memaksa Anda keluar dari baseline itu saat stack makin dangkal, ante mulai berlaku, dan lompatan hadiah mendekat, sementara cash game membiarkan Anda memainkan range disiplin yang sama sepanjang malam.

**Reload mengubah cara agresi bekerja.** Di cash game, kehilangan stack berarti merogoh kantong, jadi bluff besar dan call tipis "hanya" soal uang. Di turnamen, kesalahan yang sama adalah eliminasi, itulah mengapa pemain turnamen yang bagus memilih spot mereka berdasarkan ukuran stack dan kelangsungan hidup, bukan hanya kartu.

### Poker deep stack vs short stack push/fold

Cash game biasanya memberi hadiah pada skill deep stack. Anda sering bermain sekitar 100 big blind, sehingga keputusan flop, turn, dan river sangat penting. Anda perlu memahami value bet, bluff, tekstur board, posisi, dan range lawan.

Turnamen mulai deep tapi sering menjadi short stack. Pada 25 big blind, 15 big blind, atau 10 big blind, keputusan preflop menjadi jauh lebih penting. Alih-alih merencanakan tiga street, Anda mungkin memutuskan apakah open, reshove, call off, atau fold — range persisnya ada di [strategi short stack: kapan push atau fold](/id/blog/holdem-short-stack).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kedalaman stack | Lebih umum di | Skill utama |
|------|------|------|
| 100BB+ | Cash game | Permainan postflop dan value bet |
| 40-60BB | Turnamen menengah | Range open dan respons 3-bet |
| 15-25BB | Turnamen menengah/akhir | Resteal dan tekanan shove |
| ==r:10BB atau kurang== | Turnamen akhir | ==r:Disiplin push/fold== |

</div>

Pemain cash game sering bagus di tahap awal turnamen karena mereka nyaman bermain deep. ==g:Pemain terbaik belajar keduanya.==

---

## ICM: konsep turnamen yang tidak dimiliki cash game

Pemisah strategi terbesar antara cash game dan turnamen adalah ==ICM==.

ICM adalah singkatan dari **Independent Chip Model**. Model ini memperkirakan nilai uang nyata dari stack turnamen Anda berdasarkan ukuran stack, jumlah pemain tersisa, dan struktur pembayaran. Cash game tidak membutuhkan ICM karena chip sudah setara uang.

Di mana ia menggigit? Kebanyakan [di bubble](/id/blog/holdem-bubble) dan di meja final. Misalkan Anda memegang AKo di bubble dengan stack sedang lalu pemain lain shove. Di cash game, jika call menguntungkan berdasarkan pot odds dan equity, Anda call. Di turnamen, kalah berarti finis dengan $0, sementara menang tidak menggandakan ekuitas hadiah Anda — jadi call yang mencetak uang di cash game bisa menjadi fold yang jelas di bawah ICM.

| Faktor keputusan | Cash game | Turnamen |
|------|------|------|
| Logika call | Pot odds + equity | Pot odds + equity + ICM |
| Kehilangan stack | Kehilangan satu buy-in | Eliminasi |
| Nilai tangan kuat | Lebih stabil | Berubah oleh tekanan hadiah |
| Tekanan bubble | Tidak ada | Sangat besar |

==g:Saat Anda melihat pemain turnamen kuat fold tangan yang tampak terlalu bagus untuk fold, ICM sering menjadi alasannya.== Satu paragraf tidak bisa menjelaskan matematikanya secara adil — contoh lengkap yang dikerjakan ada di [ICM dijelaskan: mengapa chip turnamen bukan uang](/id/blog/holdem-icm).

![Infografik yang menunjukkan bahwa menggandakan stack turnamen Anda menumbuhkan ekuitas hadiah kurang dari dua kali lipat — inti dari tekanan ICM](/images/holdem-tournament-icm-bubble.webp "Tekanan bubble turnamen dan pengambilan keputusan ICM")

---

## Apakah cash game lebih sulit dari turnamen?

Pertanyaan persis ini terus-menerus ditanyakan, dan jawaban jujurnya adalah: ==keduanya sulit dengan cara berbeda==, dan "lebih sulit" bergantung pada skill mana yang Anda kurang.

Cash game memusatkan kesulitan pada **permainan postflop deep stack**. Anda menghadapi level yang sama — dan sering regular yang sama — hari demi hari, tanpa blind naik yang memaksa siapa pun ke dalam kesalahan. Menang cenderung membutuhkan edge sejati dalam membaca tangan, value bet, dan disiplin, dan banyak pemain merasa menggerus edge itu adalah ujian jangka panjang yang lebih berat.

Turnamen menyebarkan kesulitan ke seluruh **fase**. Anda perlu skill deep stack di awal, presisi push/fold di akhir, dan penilaian ICM di bubble — plus stamina untuk membuat keputusan bagus di jam kedelapan dan ketahanan emosi untuk melewati periode panjang tanpa masuk hadiah. Tidak ada satu fase pun sedalam permainan postflop cash game, tapi rentang situasinya lebih luas.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Jenis kesulitan | Cash game | Turnamen |
|------|------|------|
| Kedalaman satu skill | ==r:Sangat dalam== (postflop, stack dalam) | Sedang per fase |
| Keluasan skill | Lebih sempit | ==r:Sangat luas== (deep, short, ICM) |
| Tekanan lawan | Stabil, sering regular berpengalaman | Field campuran, berubah per tahap |
| Tantangan mental | Disiplin di sesi panjang yang datar | Ketahanan dan ayunan varians |

</div>

Aturan praktis yang berguna: ==g:cash game biasanya lebih sulit untuk *dikalahkan*, turnamen biasanya lebih sulit untuk *dijalani*==. Jika Anda kesulitan dengan keputusan postflop, cash game akan terasa lebih sulit. Jika Anda kesulitan dengan kesabaran, tekanan, dan ayunan, turnamen yang akan terasa lebih sulit.

---

## Apakah cash game lebih menguntungkan? bb/100 vs ROI turnamen

Hasil cash game biasanya diukur dengan **bb/100** atau win rate per jam. Jika seorang pemain menang 5 big blind per 100 tangan dalam sampel besar, itu adalah edge yang stabil. Feedback-nya tidak instan, tapi lebih cepat dan lebih bersih daripada hasil turnamen.

Hasil turnamen biasanya diukur dengan **ROI**, tingkat cashing, frekuensi meja final, dan skor besar. Pemain turnamen yang menang bisa gagal cashing 20 atau 30 event berturut-turut, lalu membuat satu deep run yang membayar semuanya.

Jadi mana yang lebih menguntungkan? ==Untuk kebanyakan pemain, cash game menghasilkan win rate per jam yang lebih dapat diprediksi, sementara pendapatan turnamen datang dalam lonjakan besar yang jarang.== Pemain turnamen terampil jelas bisa menghasilkan lebih banyak selama setahun — tapi uangnya datang tidak merata, dan Anda butuh bankroll dan temperamen untuk bertahan di celah antar skor.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Metrik | Cash game | Turnamen |
|------|------|------|
| Satuan hasil utama | bb/100 atau win rate per jam | ROI dan posisi finis |
| Varians | Sedang | ==r:Sangat tinggi== |
| Potensi bayaran besar | Lebih rendah | ==g:Lebih tinggi== |
| Feedback skill | ==g:Lebih cepat== | Lebih lambat |
| Tantangan mental | Menang/kalah per sesi | Periode panjang tanpa cashing |

</div>

==r:Jebakannya adalah salah membaca varians.== Satu skor turnamen tidak membuktikan Anda crusher. Satu sesi cash yang buruk tidak berarti Anda tidak bisa bermain. ==g:Anda butuh ukuran sampel di kedua format.==

---

## Manajemen bankroll: turnamen butuh bantalan lebih besar

Manajemen bankroll penting di kedua format, tapi turnamen biasanya membutuhkan bantalan lebih dalam karena ayunannya lebih besar.

Panduan pemula yang umum untuk cash game adalah sekitar **20-40 buy-in** untuk level yang Anda mainkan. Jika buy-in cash game normal Anda $200, itu berarti sekitar $4.000-$8.000 sebagai bankroll poker konservatif.

Untuk turnamen, panduan standarnya lebih curam: **100+ buy-in untuk MTT field besar**, dengan format lebih kecil atau lebih lunak membutuhkan agak lebih sedikit. Turnamen $50 mungkin terlihat lebih murah dari buy-in cash game $200, tapi variansnya bisa jauh lebih keras.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Format | Panduan bankroll pemula | Alasan |
|:---|:---:|:---|
| Cash game | ==g:20-40 buy-in== | Varians lebih rendah, reload tersedia |
| Sit-and-go kecil | 40-60 buy-in | Varians hadiah lebih besar |
| MTT field besar | ==r:100+ buy-in== | Periode panjang tanpa cashing itu normal |

</div>

Bankroll bukan hanya soal uang. ==Ia melindungi pengambilan keputusan Anda.== ==r:Saat Anda under-rolled, setiap all-in terasa personal, dan strategi bagus digantikan oleh rasa takut.==

---

## Kapan meninggalkan cash game (dan mengapa Anda tidak bisa meninggalkan turnamen)

Cash game itu fleksibel. Anda bisa duduk 30 menit, bermain dua jam, atau keluar ketika meja buruk. Turnamen kebalikannya: begitu Anda mendaftar, Anda bermain sampai bust, cashing, atau menang — pergi di tengah event dan chip Anda tetap di meja, membayar blind sampai habis.

Jadi kapan Anda *sebaiknya* meninggalkan cash game? Aturannya bilang "kapan saja Anda mau," tapi jawaban yang menguntungkan lebih spesifik:

- **Pergi ketika permainan tidak lagi bagus.** Pemain terlemah berhenti, komposisi meja mengetat, atau kursi yang membuat meja menguntungkan sudah hilang.
- **Pergi ketika *Anda* tidak lagi bagus.** Tilt, lelah, dan gangguan menghancurkan win rate lebih cepat daripada kartu buruk. Jika Anda memergoki diri call karena frustrasi, rapikan chip.
- **Jangan pergi hanya karena mencapai angka tertentu.** Naik atau turun satu buy-in tidak mengatakan apa pun tentang apakah jam berikutnya akan menguntungkan. Berhenti saat menang di permainan bagus dan menggerus kekalahan di permainan buruk sama-sama kebocoran.
- **Pergi tepat setelah pot besar itu boleh.** Tidak ada aturan yang memaksa Anda "memberi action" — meski soal etika, satu putaran pendingin singkat lebih mulus daripada hit-and-run instan.

| Situasi pemain | Lebih cocok |
|------|------|
| Anda punya waktu luang tak terduga | Cash game |
| Anda ingin sesi pendek | Cash game |
| Anda bisa fokus berjam-jam | Turnamen |
| Anda suka ranking, tekanan, dan trofi | Turnamen |
| Anda mungkin harus pergi mendadak | Cash game |

Ini poin praktis yang sering dilewatkan pemula. Buy-in turnamen bisa terlihat lebih kecil dari buy-in cash game, tapi biaya waktunya jauh lebih besar.

---

## Mana yang sebaiknya dimainkan pemula dulu?

Untuk kebanyakan pemula, ==g:**cash game adalah kelas pertama yang lebih baik**==.

Alasannya bukan karena cash game mudah. Tidak. Tapi ==ia memberi Anda repetisi yang lebih bersih==. Blind tetap sama, stack sering lebih dalam, dan Anda bisa meninjau apakah call, raise, atau value bet Anda masuk akal ==r:tanpa sekaligus mengurai ICM, lompatan hadiah, dan tekanan blind==.

Turnamen tetap bisa bagus untuk pemula jika Anda menikmati kompetisi dan sanggup menahan varians. Turnamen seru, terstruktur, dan memberi Anda tujuan jelas: bertahan dan finis lebih tinggi. Hanya saja, jangan salah anggap satu deep run sebagai bukti bahwa seluruh strategi Anda sudah benar.

| Tujuan | Titik awal lebih baik |
|------|------|
| Belajar dasar dengan cepat | Cash game |
| Meningkatkan keputusan postflop | Cash game |
| Main event terjadwal pendek | Turnamen |
| Mengejar potensi skor besar | Turnamen |
| Main sesi pendek | Cash game |
| Belajar ICM dan tekanan bubble | Turnamen |

Jika Anda benar-benar baru, pelajari dulu [cara kerja satu tangan Texas Hold'em](/id/blog/holdem-game-order) dan [peringkat tangan poker](/id/blog/holdem-hand-rankings). Memilih format jauh lebih mudah setelah aturan dasar menjadi otomatis — dan jika Anda condong ke turnamen, lihat [cara kerja turnamen poker](/id/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") untuk buy-in, level blind, dan alur Day-1.

### Kerangka keputusan pemula

Jika Anda masih tidak bisa memilih, gunakan filter cepat ini.

| Situasi Anda | Mulai dari |
|------|------|
| Anda punya 1-2 jam dan mungkin harus pergi | Cash game |
| Anda punya bankroll kecil dan benci downswing besar | Cash game |
| Anda ingin belajar kenapa bet bekerja di flop, turn, dan river | Cash game |
| Anda punya malam luang dan ingin tujuan terstruktur | Turnamen |
| Anda menikmati tekanan, ranking, dan bermain untuk meja final | Turnamen |
| Anda bersedia mempelajari bagan push/fold dan spot ICM | Turnamen |

Saran default saya untuk pemula serius sederhana: main cash game taruhan rendah untuk repetisi, lalu tambahkan turnamen kecil untuk pengalaman. Cash game mengungkap kebocoran lebih cepat. Turnamen mengajarkan tekanan, kesabaran, dan kontrol emosi. Bersama-sama, keduanya membangun pemain yang lebih lengkap.

### Cash game mungkin lebih cocok untuk Anda jika:

- Anda ingin sesi yang fleksibel.
- Anda lebih suka perkembangan skill yang stabil.
- Anda ingin mempelajari poker postflop deep stack.
- Anda ingin feedback yang lebih jelas atas keputusan Anda.
- Anda punya bankroll lebih kecil dan tidak suka downswing panjang.

### Turnamen mungkin lebih cocok untuk Anda jika:

- Anda menikmati kompetisi, tekanan, dan ranking.
- Anda bisa berkomitmen beberapa jam tanpa gangguan.
- Anda suka peluang hadiah lebih besar dari satu buy-in.
- Anda bersedia mempelajari ICM, permainan bubble, dan range short stack.
- Anda bisa menahan periode panjang tanpa cashing.

Tidak ada format yang "lebih baik". Keduanya menguji bagian berbeda dari permainan yang sama. Banyak pemain kuat memakai cash game untuk membangun dasar dan turnamen untuk peluang berpotensi besar.

---

## Poker room live: apa yang harus Anda tanyakan dulu?

Sebelum duduk di poker room live atau event lokal mana pun, tanyakan format apa yang sebenarnya berjalan. Meja, chip, dan kartu yang sama bisa menciptakan keputusan yang sangat berbeda tergantung strukturnya.

Pertanyaan berguna:

| Pertanyaan | Mengapa penting |
|------|------|
| Ini cash game atau turnamen? | Nilai chip dan strategi berubah total |
| Berapa blind atau level blind-nya? | Menentukan tekanan stack |
| Apakah re-entry atau add-on diizinkan? | Mengubah total biaya dan risiko |
| Bagaimana struktur pembayarannya? | Mempengaruhi keputusan bubble dan ICM |
| Biasanya event berlangsung berapa lama? | Membantu Anda menghindari kesalahan karena tekanan waktu |

Jika Anda belum bisa menjelaskan strukturnya, jangan buy-in dulu. Tanya dulu, baru main.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-pot-odds | Cara Menghitung Pot Odds | /images/holdem-pot-odds-hero.webp
/id/blog/holdem-probability | Tabel Peluang & Probabilitas Poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Apakah turnamen poker lebih sulit daripada cash game?**

A. Keduanya sulit dengan cara berbeda. Turnamen menuntut set skill yang lebih luas — stack dalam di awal, push/fold di akhir, ICM di bubble — plus jam panjang dan varians brutal. Cash game memusatkan kesulitan pada permainan postflop deep stack melawan komposisi yang lebih stabil. Kebanyakan pemain merasa turnamen lebih sulit untuk dijalani dan cash game lebih sulit untuk dikalahkan.

**Q. Apakah cash game menguntungkan untuk pemula?**

A. Bisa, tapi harapkan bayar biaya belajar dulu. Cash game taruhan rendah punya banyak pemain lemah, dan pemula disiplin dengan range preflop ketat dan kebiasaan bankroll bagus bisa menjadi pemenang kecil. Ingat bahwa rake paling keras memukul permainan taruhan kecil, dan kebanyakan pemula rugi selama bulan-bulan pertama sambil menambal kebocoran.

**Q. Pemula sebaiknya mulai dari cash game atau turnamen?**

A. Kebanyakan pemula sebaiknya mulai dari cash game taruhan rendah atau turnamen sangat kecil. Jika tujuan Anda belajar dasar dengan cepat, cash game lebih bersih. Jika tujuan Anda keseruan dan kompetisi terstruktur, turnamen kecil boleh selama Anda memahami variansnya.

**Q. Apakah ICM penting di cash game?**

A. Tidak. ICM berlaku di turnamen karena chip turnamen tidak setara uang tunai dan hadiah bergantung pada posisi finis. Di cash game, chip sudah uang, jadi keputusan lebih langsung berdasarkan pot odds, equity, posisi, dan range lawan.

**Q. Berapa buy-in yang saya butuhkan untuk cash game vs turnamen?**

A. Panduan umum adalah 20-40 buy-in untuk cash game dan 100+ buy-in untuk turnamen field besar, dengan format lebih kecil seperti sit-and-go di antaranya sekitar 40-60. Turnamen butuh bantalan lebih besar karena periode panjang tanpa cashing itu normal bahkan untuk pemain yang menang.

**Q. Berapa chip yang Anda butuhkan untuk cash game di rumah?**

A. Satu set 300 chip standar dengan nyaman mencukupi sampai sekitar 6-8 pemain. Beri semua orang stack awal yang sama dalam 3-4 denominasi, dengan mayoritas chip di nilai terkecil agar pemain bisa bertaruh dan menukar dengan mudah. Jumlah persisnya tidak sepenting semua orang menyepakati nilai uang nyata setiap warna sebelum tangan pertama.

**Q. Apakah pemain profesional main cash game atau turnamen?**

A. Keduanya — tapi banyak profesional berspesialisasi. Spesialis cash game menghargai win rate per jam yang lebih stabil dan jam fleksibel, sementara profesional turnamen mengejar skor besar dan gelar meski variansnya lebih tinggi. Banyak pemain top melakukan keduanya: cash game untuk penghasilan andal, turnamen untuk potensi dan prestise.

**Q. Apakah turnamen re-entry pada dasarnya sama seperti cash game?**

A. Tidak. Re-entry memungkinkan Anda membeli masuk kembali ke turnamen setelah bust dalam periode tertentu, tapi chip tetap bukan uang tunai. Blind tetap naik, hadiah tetap bergantung pada posisi finis, dan ICM tetap penting nanti.

---

## 3 hal yang perlu diingat

1. ==**Chip cash adalah uang; chip turnamen adalah ekuitas bertahan.**== Satu ide itu menjelaskan sebagian besar perbedaan strategi.
2. ==g:**Cash game mengajarkan dasar lebih cepat; turnamen menguji tekanan lebih baik.**== Pilih berdasarkan tujuan Anda, bukan berdasarkan format mana yang terdengar lebih glamor.
3. ==**Bankroll dan waktu penting.**== Jika Anda tidak sanggup menahan sesi panjang atau downswing panjang, ==g:cash game biasanya titik awal yang lebih baik==.

Kuasai dasar cash dulu, lalu tambahkan turnamen saat Anda siap menghadapi ==blind yang naik, tekanan ICM, dan ayunan emosi saat mengejar deep run==.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Turnamen</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara Kerja Turnamen Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Buy-in, level blind, format, dan checklist Day-1</div>
  </a>
  <a href="/id/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Alur Permainan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Urutan Permainan Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Preflop sampai showdown — alur tangan lengkap langkah demi langkah</div>
  </a>
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Peringkat Tangan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Peringkat Tangan Poker — Terbaik ke Terburuk</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Semua 10 tangan dengan peluang, contoh, dan teka-teki board</div>
  </a>
  <a href="/id/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Apa Itu Blind di Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">SB, BB, blind steal, dan option — semua dijelaskan</div>
  </a>
</div>
`.trim(),
};

export default POST;
