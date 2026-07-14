import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Turnamen vs cash game poker: mana yang cocok untuk pemula?",
  seoTitle: "Chip tidak selalu berarti uang — turnamen vs cash game",
  desc: "Cash game dan turnamen terlihat seperti Texas Hold'em yang sama, tetapi nilai chip, blind, bankroll, varians, dan ICM sangat berbeda. Ini perbandingan untuk pemula.",
  tldr: "Di cash game, chip mewakili uang nyata dan blind biasanya tetap. Di turnamen, chip adalah nyawa turnamen, blind naik, dan hadiah bergantung pada posisi akhir.",
  category: "tournament",
  date: "2026-06-11",
  updated: "2026-06-11",
  hideSummaryImageSlot: true,
  readTime: "16 mnt",
  emoji: "🏆",
  tags: [
    "turnamen poker vs cash game",
    "cash game vs turnamen poker",
    "poker turnamen untuk pemula",
    "permainan tunai poker",
    "strategi turnamen poker",
    "manajemen bankroll poker",
    "ICM poker",
    "cash game atau turnamen",
  ],
  content: `
Hampir semua pemain Hold'em baru akhirnya bertanya hal yang sama:

*"Saya sebaiknya main ==cash game== atau ==turnamen==?"*

Sekilas keduanya terlihat seperti permainan yang sama. Anda tetap mendapat dua kartu hole, lima kartu komunitas, dan empat ronde taruhan dari preflop sampai river. Tapi secara strategi, keduanya hampir seperti dua dunia berbeda. Di cash game, chip Anda adalah uang. Di turnamen, chip Anda adalah nyawa turnamen.

Panduan ini membandingkan ==turnamen poker vs cash game== dengan cara yang dibutuhkan pemula: nilai chip, struktur blind, komitmen waktu, varians, bankroll, ICM, kedalaman stack, dan format mana yang sebaiknya dicoba dulu.

![Meja Texas Hold'em tempat pilihan turnamen dan cash game mengubah nilai chip serta strategi](/images/tournament-table-action.webp "Perbandingan turnamen poker dan cash game")

### Jawaban 15 detik

- **Cash game:** chip bernilai uang nyata, blind tetap, dan Anda bisa keluar kapan saja.
- **Turnamen:** Anda membayar buy-in, menerima chip turnamen, lalu bermain sampai bust atau menang.
- **Cash game lebih cepat mengajarkan dasar** karena stack lebih dalam dan feedback keputusan lebih jelas.
- **Turnamen punya potensi hadiah lebih besar**, tapi varians, durasi sesi, dan tekanan ICM juga jauh lebih tinggi.
- **Untuk kebanyakan pemula, cash game adalah titik awal yang lebih bersih.** Tambahkan turnamen setelah dasar permainan terasa otomatis.

---

## Cash game vs turnamen: perbedaan inti

Cara paling sederhana untuk menjelaskannya adalah ini:

**Cash game adalah soal membuat keputusan menguntungkan dengan uang di meja. Turnamen adalah soal bertahan cukup lama untuk masuk hadiah dan naik peringkat.**

Di cash game, jika Anda buy-in $200, chip Anda mewakili $200. Jika naik menjadi $450, Anda bisa keluar membawa $450. Jika turun menjadi $120, itulah sisa Anda. Setiap chip punya nilai uang langsung.

Di turnamen, Anda mungkin membayar buy-in $100 dan menerima 20.000 chip. Chip itu bukan $20.000 dan tidak bisa diuangkan di tengah event. Chip hanya berguna karena membantu Anda bertahan, memberi tekanan, dan finis lebih tinggi dalam struktur pembayaran.

Rasanya seperti ini di meja. Dalam cash game $1/$2, call taruhan river $60 dengan satu pair berarti Anda mempertaruhkan $60 sekarang. Jika call itu buruk, Anda masih bisa berdiri, reload, atau main lagi lain hari. Dalam turnamen $50 dekat bubble, call all-in 18 big blind bisa mengakhiri seluruh event Anda. Kartunya bisa terlihat mirip, tapi biaya ketika salah tidak sama.

| Kategori | Cash game | Turnamen |
|------|------|------|
| Nilai chip | Uang nyata | Ekuitas turnamen |
| Masuk permainan | Buy-in sesuai jumlah meja | Bayar buy-in tetap |
| Keluar | Bisa keluar kapan saja | Main sampai bust atau selesai |
| Blind | Biasanya tetap | Naik seiring waktu |
| Tujuan utama | Maksimalkan EV jangka panjang | Bertahan dan naik hadiah |
| Strategi kunci | Deep stack postflop | Tekanan stack, ICM, bubble |

Kalau Anda memahami tabel ini, Anda sudah memahami fondasi seluruh perbandingan.

---

## Chip turnamen bukan uang tunai

Ini perbedaan paling penting dalam artikel ini.

Di cash game, menggandakan stack berarti menggandakan uang. Jika mulai dengan $200 dan menang $200, sekarang Anda punya $400. Karena itu keputusan cash game bisa fokus pada chip EV: *Apakah call ini menguntungkan? Apakah bet ini menghasilkan uang dalam jangka panjang?*

Di turnamen, menggandakan chip **tidak** menggandakan ekuitas uang nyata Anda. Hadiah ditentukan oleh posisi akhir, bukan oleh jumlah chip persis yang Anda punya pada satu momen.

Bayangkan turnamen 10 pemain, semua membayar $100.

| Posisi | Hadiah |
|------|------|
| 1 | $500 |
| 2 | $300 |
| 3 | $200 |
| 4-10 | $0 |

Jika chip Anda naik dari 10% menjadi 20% total chip, peluang mendapat uang memang membaik, tapi ekuitas hadiah tidak otomatis dua kali lipat. Jika Anda kehilangan semua chip di bubble, ekuitas turnamen Anda langsung menjadi nol.

Asimetri inilah yang membuat turnamen kadang menghargai fold pada tangan yang di cash game sebenarnya bisa menjadi call menguntungkan.

![Stack chip turnamen tidak berubah menjadi uang hadiah secara satu banding satu di bawah ICM](/images/icm-chips-not-money-real.webp "Nilai chip turnamen dan ICM dalam poker")

---

## Blind tetap vs blind yang naik

Cash game dan turnamen juga terasa berbeda karena blind bergerak dengan cara berbeda.

Dalam cash game $1/$2, blind tetap $1/$2. Satu jam kemudian tetap $1/$2. Tiga jam kemudian juga tetap. Anda bisa menunggu spot lebih baik, reload jika perlu, dan terus bermain dengan stack dalam.

Dalam turnamen, blind naik sesuai level. Stack yang awalnya 100BB bisa menjadi 25BB tanpa kalah satu tangan pun. Lalu bisa menjadi 12BB. Pada titik tertentu, menunggu menjadi mahal.

| Tahap | Cash game | Turnamen |
|------|------|------|
| Awal | Stack dalam tetap umum | Banyak pemain mulai deep |
| Tengah | Tekanan blind stabil | Stack rata-rata makin pendek |
| Akhir | Bisa reload atau keluar | All-in stack pendek makin sering |
| Tekanan | Lebih rendah dan stabil | Naik di setiap level |

Itulah mengapa "tunggu kartu premium saja" tidak selalu cukup di turnamen. Blind yang naik memaksa Anda mencuri blind, bertahan, reshove, dan mengambil risiko terkontrol.

---

## Cash game fleksibel, turnamen butuh komitmen waktu

Cash game fleksibel. Anda bisa duduk 30 menit, bermain dua jam, atau keluar ketika meja buruk. Jika lelah, tilt, atau waktu terbatas, Anda bisa melindungi diri dengan berdiri.

Turnamen berbeda. Setelah mendaftar, waktu selesai tidak pasti. Anda bermain sampai tereliminasi, masuk hadiah, mencapai meja final, atau menang. Event lokal kecil pun bisa berlangsung beberapa jam. MTT besar bisa memakan satu hari penuh atau lebih.

| Situasi pemain | Lebih cocok |
|------|------|
| Waktu kosong tidak menentu | Cash game |
| Ingin sesi pendek | Cash game |
| Bisa fokus berjam-jam | Turnamen |
| Suka ranking, tekanan, dan trofi | Turnamen |
| Mungkin harus pergi mendadak | Cash game |

Ini poin praktis yang sering dilewatkan pemula. Buy-in turnamen bisa terlihat lebih kecil dari buy-in cash game, tapi biaya waktunya jauh lebih besar.

---

## Struktur profit: win rate stabil vs skor besar

Hasil cash game biasanya diukur dengan **bb/100** atau win rate per jam. Jika pemain menang 5 big blind per 100 tangan dalam sampel besar, itu berarti ia punya edge stabil.

Hasil turnamen biasanya diukur dengan **ROI**, frekuensi cashing, meja final, dan skor besar. Pemain turnamen yang menang bisa tidak cashing 20 atau 30 event berturut-turut, lalu satu deep run membayar semuanya.

| Metrik | Cash game | Turnamen |
|------|------|------|
| Satuan hasil | bb/100 atau per jam | ROI dan posisi akhir |
| Varians | Sedang | Sangat tinggi |
| Potensi hadiah besar | Lebih rendah | Lebih tinggi |
| Feedback skill | Lebih cepat | Lebih lambat |
| Tantangan mental | Sesi menang/kalah | Periode panjang tanpa cashing |

Jebakannya adalah salah membaca varians. Satu skor turnamen besar tidak membuktikan Anda crusher. Satu sesi cash buruk tidak berarti Anda tidak bisa bermain. Keduanya butuh sampel.

---

## Manajemen bankroll: turnamen butuh bantalan lebih besar

Manajemen bankroll penting di kedua format, tapi turnamen biasanya butuh bantalan lebih dalam karena swing lebih besar.

Panduan sederhana untuk pemula di cash game adalah sekitar **20-40 buy-in** untuk level yang dimainkan. Jika buy-in normal Anda $200, berarti sekitar $4.000-$8.000 sebagai bankroll poker konservatif.

Untuk turnamen, banyak pemain memakai **50-100+ buy-in**, dan MTT field besar bisa membutuhkan lebih banyak. Turnamen $50 terlihat lebih murah dari buy-in cash game $200, tapi variansnya bisa jauh lebih keras.

| Format | Panduan bankroll pemula | Alasan |
|------|------|------|
| Cash game | 20-40 buy-in | Varians lebih rendah, reload tersedia |
| Sit & Go kecil | 40-60 buy-in | Varians hadiah lebih besar |
| MTT besar | 100+ buy-in | Periode tanpa cashing itu normal |

Bankroll bukan hanya soal uang. Ia melindungi kualitas keputusan. Saat under-rolled, setiap all-in terasa personal, dan strategi bagus mudah diganti rasa takut.

---

## ICM: konsep turnamen yang tidak ada di cash game

Pemisah strategi terbesar antara cash game dan turnamen adalah ==ICM==.

ICM berarti **Independent Chip Model**. Model ini memperkirakan nilai uang nyata dari stack turnamen Anda berdasarkan ukuran stack, jumlah pemain tersisa, dan struktur pembayaran. Cash game tidak membutuhkan ICM karena chip sudah bernilai uang.

ICM paling penting dekat bubble dan di meja final.

Misalnya Anda berada di bubble dengan stack sedang, lalu pemain lain all-in. Anda memegang AKo. Di cash game, jika call menguntungkan berdasarkan pot odds dan equity, Anda bisa call. Di turnamen, kalah bisa berarti finis dengan $0, sementara menang tidak menggandakan ekuitas hadiah Anda.

Di spot seperti ini banyak pemula bingung. Mereka berpikir, *"AK itu premium. Bagaimana mungkin fold benar?"* Tapi jika tersisa 27 pemain, 24 dibayar, dan tiga stack lebih pendek segera melewati blind, stack sedang Anda sudah punya nilai hadiah yang berarti. Call dan kalah menghancurkan semuanya. Call dan menang membantu, tapi tidak selalu cukup untuk membenarkan risiko eliminasi.

| Faktor keputusan | Cash game | Turnamen |
|------|------|------|
| Logika call | Pot odds + equity | Pot odds + equity + ICM |
| Kehilangan stack | Kehilangan satu buy-in | Eliminasi |
| Nilai tangan kuat | Lebih stabil | Berubah oleh tekanan hadiah |
| Tekanan bubble | Tidak ada | Sangat besar |

Saat Anda melihat pemain turnamen kuat fold tangan yang tampak terlalu bagus untuk fold, ICM sering menjadi alasannya.

![Meja bubble turnamen ketika tekanan ICM membuat call all-in jauh lebih sulit dibanding cash game](/images/holdem-bubble-table.webp "Tekanan bubble turnamen dan keputusan ICM")

---

## Deep stack vs short stack push/fold

Cash game biasanya memberi hadiah pada skill deep stack. Anda sering bermain sekitar 100BB, sehingga keputusan flop, turn, dan river sangat penting. Anda perlu memahami value bet, bluff, tekstur board, posisi, dan range lawan.

Turnamen mulai deep, tapi sering berubah menjadi permainan short stack. Pada 25BB, 15BB, atau 10BB, keputusan preflop menjadi jauh lebih penting. Alih-alih merencanakan tiga street, Anda mungkin memutuskan apakah open, reshove, call off, atau fold.

| Kedalaman stack | Lebih umum di | Skill utama |
|------|------|------|
| 100BB+ | Cash game | Postflop dan value bet |
| 40-60BB | Turnamen awal/tengah | Range open dan respons 3-bet |
| 15-25BB | Turnamen tengah/akhir | Resteal dan tekanan shove |
| 10BB atau kurang | Turnamen akhir | Disiplin push/fold |

Pemain cash game sering bagus di tahap awal turnamen karena nyaman bermain deep. Spesialis turnamen biasanya lebih kuat di spot short stack dan ICM. Pemain terbaik belajar keduanya.

---

## Mana yang sebaiknya dimainkan pemula dulu?

Untuk kebanyakan pemula, **cash game adalah kelas pertama yang lebih baik**.

Bukan karena cash game mudah. Tidak. Tapi ia memberi repetisi yang lebih bersih. Blind tetap, stack sering lebih dalam, dan Anda bisa meninjau apakah call, raise, atau value bet masuk akal tanpa sekaligus memikirkan ICM, pay jump, dan tekanan blind.

Turnamen tetap bisa bagus jika Anda menikmati kompetisi dan sanggup menahan varians. Turnamen seru, terstruktur, dan memberi tujuan jelas: bertahan dan finis lebih tinggi. Hanya saja, jangan anggap satu deep run sebagai bukti bahwa seluruh strategi Anda sudah benar.

| Tujuan | Titik awal lebih baik |
|------|------|
| Belajar dasar dengan cepat | Cash game |
| Meningkatkan keputusan postflop | Cash game |
| Main event terjadwal | Turnamen |
| Mengejar hadiah besar | Turnamen |
| Main sesi pendek | Cash game |
| Belajar ICM dan tekanan bubble | Turnamen |

Jika Anda benar-benar baru, pelajari dulu [cara kerja satu tangan Texas Hold'em](/id/blog/holdem-game-order) dan [peringkat tangan poker](/id/blog/holdem-hand-rankings). Memilih format jauh lebih mudah setelah aturan dasar terasa otomatis.

---

## Kerangka cepat untuk memilih

Jika masih bingung, gunakan filter ini.

| Situasi Anda | Mulai dari |
|------|------|
| Punya 1-2 jam dan mungkin harus pergi | Cash game |
| Bankroll kecil dan tidak suka downswing besar | Cash game |
| Ingin memahami alasan bet di flop, turn, river | Cash game |
| Punya waktu malam penuh dan ingin target jelas | Turnamen |
| Suka tekanan, ranking, dan meja final | Turnamen |
| Mau belajar tabel push/fold dan ICM | Turnamen |

Saran default saya untuk pemula serius sederhana: main cash game taruhan rendah untuk repetisi, lalu tambah turnamen kecil untuk pengalaman. Cash game lebih cepat menunjukkan leak. Turnamen mengajarkan tekanan, kesabaran, dan kontrol emosi. Keduanya membentuk pemain yang lebih lengkap.

---

## Di poker room live: apa yang harus ditanyakan dulu?

Sebelum duduk di poker room live atau event lokal, tanyakan format yang sedang berjalan. Meja, chip, dan kartu bisa sama, tapi struktur yang berbeda menghasilkan keputusan berbeda.

Pertanyaan berguna:

| Pertanyaan | Mengapa penting |
|------|------|
| Ini cash game atau turnamen? | Nilai chip dan strategi berubah |
| Berapa blind atau level blind? | Menentukan tekanan stack |
| Ada re-entry, rebuy, atau add-on? | Mengubah total biaya dan risiko |
| Bagaimana struktur hadiah? | Mempengaruhi bubble dan ICM |
| Biasanya berlangsung berapa lama? | Mencegah kesalahan karena waktu |

Jika Anda belum bisa menjelaskan strukturnya, jangan buy-in dulu. Tanya dulu, baru main.

---

## Panduan keputusan cepat

### Cash game mungkin lebih cocok jika:

- Anda ingin sesi fleksibel.
- Anda suka perkembangan skill yang stabil.
- Anda ingin belajar deep-stack postflop.
- Anda ingin feedback keputusan lebih jelas.
- Bankroll Anda lebih kecil dan tidak suka downswing panjang.

### Turnamen mungkin lebih cocok jika:

- Anda menikmati kompetisi, tekanan, dan ranking.
- Anda bisa fokus beberapa jam tanpa gangguan.
- Anda suka peluang hadiah besar dari satu buy-in.
- Anda mau belajar ICM, bubble, dan range short stack.
- Anda bisa menahan periode panjang tanpa cashing.

Tidak ada format yang "lebih baik". Keduanya menguji bagian berbeda dari permainan yang sama. Banyak pemain kuat memakai cash game untuk membangun dasar dan turnamen untuk mengejar skor besar.

---

## FAQ

**Q. Apakah turnamen poker lebih sulit daripada cash game?**

A. Sulitnya berbeda. Cash game menuntut skill postflop lebih dalam karena Anda sering bermain 100BB. Turnamen menambah blind yang naik, short stack, ICM, dan tekanan bubble. Pemula biasanya lebih mudah belajar dari cash game karena strukturnya lebih stabil.

**Q. Apakah turnamen lebih menguntungkan daripada cash game?**

A. Turnamen bisa memberi skor besar dari satu event, tapi variansnya juga jauh lebih tinggi. Cash game biasanya memberi hasil yang lebih stabil dari waktu ke waktu. Pilihan terbaik bergantung pada skill, bankroll, volume, dan toleransi downswing Anda.

**Q. Pemula sebaiknya mulai dari cash game atau turnamen?**

A. Kebanyakan pemula sebaiknya mulai dari cash game taruhan rendah atau turnamen sangat kecil. Jika tujuan Anda belajar dasar dengan cepat, cash game lebih bersih. Jika tujuan Anda hiburan dan kompetisi terstruktur, turnamen kecil boleh selama Anda memahami varians.

**Q. Apakah ICM penting di cash game?**

A. Tidak. ICM berlaku di turnamen karena chip turnamen tidak setara uang tunai dan hadiah bergantung pada posisi akhir. Di cash game, chip sudah uang, jadi keputusan lebih langsung berdasarkan pot odds, equity, posisi, dan range lawan.

**Q. Apakah turnamen re-entry pada dasarnya sama seperti cash game?**

A. Tidak. Re-entry hanya memungkinkan Anda masuk lagi setelah bust dalam periode tertentu, tapi chip tetap bukan uang tunai. Blind tetap naik, hadiah tetap bergantung pada posisi akhir, dan ICM tetap penting nanti.

**Q. Berapa buy-in yang dibutuhkan untuk cash game vs turnamen?**

A. Panduan sederhana untuk pemula adalah 20-40 buy-in untuk cash game dan 50-100+ buy-in untuk turnamen. MTT field besar bisa membutuhkan lebih banyak karena periode panjang tanpa cashing itu normal.

---

## 3 hal yang perlu diingat

1. **Chip cash adalah uang; chip turnamen adalah nyawa turnamen.** Ide ini menjelaskan sebagian besar perbedaan strategi.
2. **Cash game mengajarkan dasar lebih cepat; turnamen menguji tekanan lebih keras.** Pilih berdasarkan tujuan, bukan mana yang terdengar lebih menarik.
3. **Bankroll dan waktu penting.** Jika Anda tidak nyaman dengan sesi panjang atau downswing panjang, cash game biasanya titik awal lebih baik.

Kuasai dasar cash game dulu, lalu tambahkan turnamen saat Anda siap menghadapi blind yang naik, tekanan ICM, dan swing emosi saat mengejar deep run.
`.trim(),
};
