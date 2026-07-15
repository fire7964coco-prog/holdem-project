import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Chart Starting Hands Poker & Kartu Awal Terbaik",
  seoTitle: "Fold 80% Kartu Anda? — Chart Starting Hands Poker Terbaik",
  desc: "Kebanyakan kartu tertutup merugi. Starting hands terbaik di poker, chart lengkap per posisi & 6-max, plus chart GTO vs pemula — dalam 10 menit.",
  tldr: "Dari 169 tipe starting hand, hanya irisan atas kecil — sekitar 15–20% kartu yang Anda terima — yang profit untuk pemula. Pair besar (AA–TT) dan AK raise dari kursi mana pun; makin belakang Anda beraksi, makin lebar Anda open — dari ~13% di under the gun hingga ~43% di button (lebih lebar lagi di 6-max). Mulai dengan chart sederhana, tambahkan chart preflop GTO setelah raise-or-fold jadi otomatis.",
  category: "strategy",
  date: "2026-06-14",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "10 mnt",
  emoji: "🂡",
  tags: [
    "good starting hands in poker",
    "poker starting hands chart",
    "gto preflop charts",
    "starting hands percentages",
    "6-max starting hands",
  ],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Chart starting hands Texas Hold'em menampilkan grup Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) dan Fold per posisi UTG hingga button",
  content: `
Sesi live pertama saya, saya dapat A♣ 4♦ dan berpikir "sebuah ace, seburuk apa sih?"

Saya call sebuah raise, meleset di flop, call lagi, meleset di turn. Sampai river saya sudah kehilangan 40 big blind tanpa apa-apa.

Inilah matematika tak nyaman di balik tangan itu: ==Texas Hold'em punya 169 tipe starting hand berbeda — dan kira-kira 80% kartu yang Anda terima seharusnya di-fold preflop.== Belajar tangan mana yang dimainkan — dan dari kursi mana — adalah peningkatan terbesar yang dibuat pemula dalam bulan pertama mereka. Seleksi tangan adalah yang kedua dari [lima keputusan](/id/blog/holdem-strategy) di balik setiap tangan yang menang: benarkan yang ini dan setiap street berikutnya jadi lebih mudah.

Halaman ini adalah versi satu pintu: 10 starting hand terbaik, apa yang membuat sebuah tangan *bagus* sejak awal, chart starting hands lengkap per posisi (9-max dan 6-max), chart preflop GTO vs chart pemula, PDF cheat sheet yang bisa dicetak, dan kuis singkat untuk menguji diri Anda.

---

### Starting hands, dalam angka

:::stripe
169 | Tipe starting hand berbeda (1.326 kombinasi persis)
~80% | Kartu yang harus di-fold pemula preflop
~13% → ~43% | Range open dari UTG hingga button (9-max)
~85% | Seberapa sering AA mengalahkan satu tangan acak
:::

---

## 10 Starting Hand Terbaik di Poker, Diperingkat

Inilah starting hand terbaik di poker — tangan yang hampir selalu harus Anda raise preflop, dari kursi mana pun di meja:

| Peringkat | Tangan | Kenapa kuat |
|-----:|------|-----------------|
| 1 | AA | Tangan preflop terbaik — favorit ~85% atas satu tangan acak |
| 2 | KK | Hanya kalah dari AA preflop — tetap raise dan re-raise |
| 3 | QQ | Kuat, tapi nilai ulang saat A atau K muncul di flop |
| 4 | JJ | Premium — raise kuat, perlambat vs. aksi berat di flop A/K/Q |
| 5 | TT | Tangan top-5 — raise first in, hati-hati vs. 3-bet besar |
| 6 | AKs | Ace-king suited — mendominasi kartu besar lain, membuat nut flush draw |
| 7 | AKo | AK off-suit — raise dari posisi mana pun |
| 8 | AQs | AQ suited — kuat, tapi fold ke 3-bet besar out of position |
| 9 | KQs | KQ suited — bagus di posisi belakang, lebih tricky dari UTG |
| 10 | AJs | AJ suited — kuat in position, fold ke perlawanan berat |

![Empat starting hand premium Texas Hold'em — pocket aces, pocket kings, pocket queens, dan ace-king suited — bercahaya emas di felt hijau tua](/images/holdem-starting-hands-premium.webp "Tier premium — tangan yang bisa Anda raise dari posisi mana pun")

==g:Dengan tangan 1–5 (pocket pair), selalu raise dan sering re-raise preflop untuk membangun pot.== Dengan AK dan AQ, tujuannya adalah masuk heads-up di mana kartu besar Anda punya equity maksimal. Satu angka yang layak dihafal: AK kira-kira ==coin flip melawan setiap pocket pair yang lebih kecil== (klasik "race") dan sekitar 43–46% melawan QQ — cukup dekat sehingga raise dan re-raise dengan AK tetap benar.

Pocket rockets, cowboys, big slick — jika slang meja ini baru bagi Anda, glosarium poker mencakup setiap julukan tangan. Dan jika Anda masih samar soal apa mengalahkan apa saat board keluar, tinjau dulu [peringkat tangan poker](/id/blog/holdem-hand-rankings).

---

## Apa yang Dihitung sebagai Starting Hand yang Bagus di Poker?

Starting hand yang bagus di poker berbagi satu ciri: ==mereka membuat tangan *lima-kartu* yang kuat lebih sering daripada tangan yang mereka hadapi.== Pair tinggi mulai di depan. Kartu besar suited membuat top pair dengan kicker terbaik, nut flush, dan straight tinggi. Yang lainnya butuh bantuan — dan tangan yang butuh bantuan hanya layak dimainkan saat bantuannya murah.

Diurutkan ke dalam tier, starting hand yang bagus di poker terlihat seperti ini:

| Tier | Contoh | Cara memainkannya |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Raise dari posisi mana pun, re-raise agresif |
| Strong | TT–88, AQ, AJs, ATs, KQs | Raise dari kebanyakan posisi, perlambat vs. 3-bet berat |
| Speculative | Pair kecil (77–22), suited connector (JTs, T9s, 98s), suited ace (A2s–A9s) | Posisi belakang saja — butuh flop murah dan posisi |
| ==r:Trash== | Ace offsuit lemah (A4o), king-rag (K3o), sampah offsuit rendah | ==r:Fold preflop — ini menguras chip setiap sesi== |

:::tip[Tier hanya separuh jawaban. Sebuah tangan speculative "bagus" di button dan buruk di under the gun — itulah kenapa chart sebenarnya diatur berdasarkan posisi, bukan berdasarkan tangan.]:::

---

## Chart Starting Hands Poker per Posisi (Chart 9-Max Lengkap)

==Posisi Anda di meja mengubah tangan mana yang profit.==

Dari posisi awal, banyak pemain masih beraksi setelah Anda — jadi Anda butuh tangan lebih kuat. Dari button, Anda beraksi terakhir di setiap street postflop, yang berarti Anda bisa memainkan range jauh lebih lebar secara profit.

Inilah chart starting hands poker untuk meja 9-max standar:

| Posisi | Range open | Tangan kunci untuk dimainkan |
|----------|-----------|-------------------|
| UTG (Awal) | Top ~13% | TT+, AJs+, AKo, KQs |
| MP (Tengah) | Top ~17% | Tambah 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~27% | Tambah 55–77, A9s+, KTs+, suited connector (T9s, 98s) |
| BTN (Button) | Top ~43% | Tambah 22–44, A2s+, suited broadway, tangan offsuit lebih lemah |

Aturannya: ==makin belakang Anda beraksi, makin banyak tangan yang bisa Anda open secara profit==. Karena button selalu beraksi terakhir postflop, ia adalah kursi paling berharga di poker.

Jelajahi grid berkode-warna lengkap — setiap satu dari 169 tangan per posisi:

:::rangechart:::

Mau versi sebagai alat mandiri dengan range yang diperluas per kursi? Gunakan [alat chart starting hand Texas Hold'em](/hand-chart). Untuk rincian setiap nama kursi (UTG, HJ, CO, BTN, SB, BB), lihat [panduan posisi poker](/id/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Posisi awal (UTG): range paling ketat

UTG adalah kursi tersulit untuk dimainkan. ==r:Delapan pemain masih beraksi di belakang Anda.== Tangan apa pun yang Anda open di sini harus bertahan melawan range yang kuat.

Inti dari range UTG (range penuh ~13% melebar ke pair menengah seperti 77–99, lebih banyak suited broadway, dan beberapa tangan offsuit seperti AQo/AJo seiring Anda meningkat):

- Pocket pair: **TT, JJ, QQ, KK, AA**
- Premium suited: **AKs, AQs, AJs, KQs**
- Premium offsuit: **AKo** (dan kadang AQo)

Tangan yang terlihat kuat tapi harus fold dari UTG:

- **KJo, QJo, KTo** — terlalu banyak skenario terdominasi melawan pemain yang call open UTG
- **77, 88** — bagus dari button, marginal dari UTG
- **Suited ace lemah (A2s–A7s)** — simpan ini untuk posisi belakang

### Posisi belakang (cutoff dan button): range paling lebar

Button adalah kursi terbaik di poker. ==g:Anda beraksi terakhir di flop, turn, dan river setiap tangan.== Keunggulan itu membuat Anda bisa menambahkan secara profit:

- **Pocket pair kecil (22–66)** — berharap flop sebuah set
- **Suited ace apa pun (A2s–A9s)** — potensi nut flush draw
- **Suited connector (T9s, 98s, 87s)** — murah, tangan implied-odds tinggi
- **Broadway offsuit lebih lemah (KTo, QJo)** — hanya di posisi belakang, jangan pernah di awal

Aturan kunci: ==tangan speculative ini butuh posisi agar profit==. Jika pemain UTG raise di depan Anda, kebanyakan langsung masuk muck — keunggulan mereka lenyap tanpa posisi.

---

## Starting Hands 6-Max: Bagaimana Chart Berubah

Kebanyakan cash game online adalah 6-max, dan chart bergeser ke satu arah: ==lebih lebar==. Hapus tiga kursi paling ketat dari meja 9-max dan setiap posisi tersisa efektif "naik". Pemain pertama yang beraksi di 6-max sedang open melawan lima lawan, bukan delapan — jadi ==g:UTG di 6-max bermain kira-kira seperti MP di 9-max== (~15–17% alih-alih ~13%).

:::compare
9-Max (Full Ring) | 6-Max
9 kursi — tiga posisi awal sebelum MP | 6 kursi — UTG di sini sebenarnya lojack
Kursi pertama open ~13% tangan | Kursi pertama open ~15–17% tangan
Blind datang sekali setiap 9 tangan — fold itu murah | Blind datang 1,5x lebih cepat — fold semuanya menguras chip
AJo, KQo = fold dari kursi pertama | AJo, KQo = open standar dari kursi pertama
Tangan speculative kebanyakan CO/BTN saja | Tangan speculative bisa dimainkan satu kursi lebih awal
:::

Kesalahan yang harus dihindari adalah memainkan chart 9-max di game 6-max: Anda akan fold tangan yang jelas profit dan dimakan oleh blind. Kesalahan sebaliknya — range 6-max di meja full-ring — adalah bagaimana ace lemah berakhir terdominasi semalaman. Setelah chart terasa otomatis, [position play](/id/blog/holdem-position-play) adalah keterampilan yang mengubah range yang lebih lebar itu menjadi profit nyata: mencuri, mengisolasi, dan menekan blind dari kursi yang memungkinkannya.

---

## Berapa Persen Starting Hand yang Harus Anda Mainkan?

Sepanjang satu sesi penuh, ==target pemula yang solid adalah memainkan kira-kira 15–20% kartu yang Anda terima== — yang berarti fold 80–85% preflop. Itu bukan satu angka rata, itu *rata-rata* dari chart berbasis posisi di atas: ~13% dari UTG, ~17% dari MP, ~27% dari cutoff, ~43% dari button.

:::stat[15–20%] kartu yang dibagi — range pemula yang sehat di 9-max:::

Jika Anda memainkan 30–40% tangan di meja full-ring, Anda bukan "melihat lebih banyak flop" — Anda membayar rake dan reverse-implied odds pada tangan yang sudah chart suruh Anda fold. Lacak dengan jujur untuk satu sesi; angkanya biasanya lebih tinggi daripada yang terasa.

Satu catatan lingkup: ini soal berapa persen dari *range* Anda yang dimainkan, bukan soal seberapa sering tangan tertentu menang melawan satu sama lain. Untuk win rate tangan-vs-tangan (AK vs QQ, pair vs dua overcard, dan sisanya), lihat [panduan peluang dan probabilitas poker](/id/blog/holdem-probability) — itu tugasnya, bukan tugas chart ini.

---

## Chart Preflop GTO vs Chart Pemula: Yang Mana Dipakai?

Saya membuka output solver saat belajar, dan saya tetap memberi setiap pemula chart sederhana lebih dulu. Ini dua alat berbeda, dan tahu yang mana dipakai lebih berharga daripada salah satu chart sendirian.

**Chart preflop GTO** berasal dari solver (PioSOLVER, GTO Wizard dan kawan-kawan). Secara teoretis tak bisa dieksploitasi — dan juga penuh frekuensi campuran: open tangan ini 25% dari waktu, fold 75%, 3-bet kombo ini tapi hanya dengan suit ini. **Chart pemula** — seperti yang ada di halaman ini — memampatkan semua itu menjadi satu aksi jelas per tangan.

:::compare
Chart Preflop GTO | Chart Pemula Sederhana
Frekuensi campuran — raise 25% / fold 75% dari waktu | Satu aksi jelas per tangan — raise atau fold
Mengasumsikan lawan juga bermain mendekati sempurna | Mengasumsikan lawan membuat kesalahan (memang begitu)
Dibangun untuk kedalaman stack, rake, dan format spesifik | Tahan di game live dan stake rendah pada umumnya
Terbaik untuk: reg online, sesi belajar, review range | Terbaik untuk: tahun pertama Anda, game live, membangun disiplin
Salah terap = keputusan terasa acak yang tak bisa Anda jelaskan | Sedikit "terlalu ketat" — cacat termurah di poker
:::

Inilah kenapa menghafal chart solver secara buta jadi bumerang: frekuensi GTO adalah pertahanan melawan lawan sempurna. Lawan Anda di stake rendah terlalu banyak call, jarang fold, dan tak pernah 3-bet ringan — melawan mereka, bluff yang diseimbangkan hati-hati oleh solver menghasilkan *lebih sedikit* uang daripada sekadar raise tangan bagus dan fold trash. Anda akhirnya membuat langkah frekuensi campuran yang tak bisa Anda jelaskan, di game di mana langkah polos menghasilkan lebih banyak. ==g:Pelajari chart sederhana sampai raise-or-fold jadi otomatis; tambahkan chart preflop GTO saat Anda pindah online atau mulai belajar serius.== Jembatan antara keduanya adalah memahami [equity poker](/id/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — matematika win-share yang menjadi dasar EV solver.

---

## Starting Hand Terburuk (Yang Terlihat Bisa Dimainkan)

Starting hand terburuk di poker bukan sampah acak seperti 7-2 — tak ada yang butuh chart untuk fold itu. Yang mahal adalah tangan yang *terlihat* bisa dimainkan dan secara konsisten kehilangan chip sepanjang sesi:

| Tipe tangan | Kenapa merugi | Apa yang dipikir pemula |
|-----------|-------------|---------------------|
| ==r:Ace lemah (A2o–A8o)== | Membuat pair terbaik-kedua vs. ace lebih baik | "Saya punya ace, pasti bagus" |
| Connector offsuit rendah (74o, 85o) | Jarang nyambung bersih, sulit dimainkan saat nyambung | "Bisa membuat straight" |
| King-rag offsuit (K3o, K4o) | Terdominasi oleh setiap king yang lebih baik | "King itu kartu besar" |
| Dua kartu suited apa pun | Membuat flush di river hanya ~6,5% dari waktu (flop satu ~0,8%) | "Tapi mereka suit yang sama" |

![Jebakan ace lemah di Texas Hold'em — A♣ 4♦ dilingkari merah sebagai tangan yang merugi, terdominasi oleh A♠ K♦ berwarna emas](/images/holdem-starting-hands-weak-ace-trap.webp "Ace lemah terlihat kuat tapi tetap terdominasi — fold preflop")

==r:Kesalahan paling mahal yang dibuat pemula adalah call raise dengan ace lemah== seperti A♣ 4♦ dari intro. Saat akhirnya Anda hit pair ace, Anda sering terbaik-kedua melawan A♠ K♦ atau A♥ Q♦ — dan Anda kehilangan pot besar yakin bahwa Anda punya top pair. Anda memang punya. Begitu pula mereka, dengan kicker lebih baik.

(Dan tangan terburuk sebenarnya di poker? 7-2 offsuit — lebih lanjut soal itu, dan "aturan 7-2" yang terkenal, di FAQ di bawah.)

---

## Chart Starting Hands yang Bisa Dicetak (PDF Cheat Sheet)

Chart hanya berguna jika ada di depan Anda saat penting. Untuk home game dan sesi belajar, kami membuat semuanya bisa dicetak:

**[Unduh chart starting hands poker gratis yang bisa dicetak (PDF)](/downloads/poker-starting-hands-chart.pdf)** — satu halaman, range open 9-max dan 6-max berdampingan, format cheat-sheet. Cetak, atau biarkan terbuka di ponsel Anda di antara tangan.

Lalu gunakan secara harfiah, setiap tangan, untuk 20+ sesi pertama Anda:

:::steps
Cek posisi Anda dulu | Sebelum melihat kartu Anda, catat di mana Anda duduk relatif terhadap button
Cocokkan kartu tertutup Anda dengan chart | Temukan tangan Anda dalam range untuk posisi itu
Raise atau fold | Hindari call ([limping](/id/blog/holdem-limping)) sebagai aksi default
Fold semua yang lain | Bahkan saat terasa terlalu ketat — terutama saat itu
:::

==g:Terasa membosankan. Itulah intinya.== Seleksi preflop tight-aggressive adalah fondasi setiap gaya poker yang menang, dari cash game pemula hingga turnamen stake tinggi.

---

## Uji Diri Anda: Kuis Tangan Preflop

Tiga spot chart. Putuskan sebelum Anda mengintip jawaban:

**1. 9-max, Anda di UTG dengan A♠ J♦ (offsuit).** Raise atau fold?
→ ==r:Fold.== AJo tak lolos batas UTG — terlalu sering terdominasi oleh tangan yang call open UTG. AJ*s* open; AJo menunggu kursi lebih belakang.

**2. Button, semua fold ke Anda, 7♠ 6♠.** Raise atau fold?
→ ==g:Raise.== Suited connector jelas di dalam range button ~43% — ini persis kursi tempat mereka profit.

**3. 6-max, cutoff raise, Anda di button dengan A♦ 4♣.** Call, raise, atau fold?
→ ==r:Fold.== Ace offsuit lemah melawan sebuah raise adalah tangan intro lagi — terdominasi saat hit, tak berharga saat meleset.

:::quiz:::

Dapat ketiganya? Coba [kuis tangan poker 10 soal](/quiz) penuh — lima kartu terbaik dari tujuh, melawan waktu.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-hand-rankings | Peringkat Tangan Poker | /images/holdem-hand-rankings-hero.webp
/id/blog/holdem-probability | Tabel Peluang & Probabilitas Poker | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. Apa starting hand terbaik di poker?**

A. Pocket aces (AA) adalah starting hand terbaik di poker. Preflop, ace menang kira-kira 85% dari waktu melawan satu tangan acak. Selalu raise dan re-raise dengan ace — tujuannya membangun pot besar sebagai favorit statistik.

**Q. Apa saja starting hand yang bagus di poker?**

A. Starting hand yang bagus di poker adalah pair premium (AA–TT), ace besar (AK, AQ), dan suited broadway kuat (KQs, AJs) — kira-kira top 15–20% dari semua tangan. Tangan speculative seperti pair kecil dan suited connector hanya bagus dari posisi belakang.

**Q. Ada berapa starting hand di poker?**

A. Ada 169 tipe starting hand berbeda (13 pair, 78 suited, 78 offsuit) dari 1.326 kombinasi dua-kartu persis. Matematika di balik hitungan itu ada di [panduan probabilitas poker](/id/blog/holdem-probability).

**Q. Apa aturan 7-2 di poker?**

A. Aturan 7-2 adalah game sampingan rumahan, bukan aturan poker resmi: jika seorang pemain memenangkan pot dengan 7-2 offsuit — tangan terburuk — setiap pemain lain membayar mereka bounty kecil. Ia ada murni untuk membumbui home game dan pub game dengan menghadiahi bluff yang keterlaluan.

**Q. Apa starting hand terburuk di poker?**

A. 7-2 offsuit luas dianggap sebagai starting hand terburuk di poker. Kartunya terlalu berjauhan untuk membuat straight bersama, terlalu rendah untuk menang tanpa perbaikan, dan bahkan hit sebuah pair meninggalkan Anda dengan tangan lemah dan kicker buruk.

**Q. Apakah pemula harus memakai chart preflop GTO?**

A. Tidak di awal. Chart preflop GTO memakai frekuensi campuran yang dirancang agar tak bisa dieksploitasi melawan lawan kuat — berlebihan di game pemula, di mana chart raise-or-fold sederhana menghasilkan lebih banyak. Pelajari chart sederhana sampai otomatis, lalu tambahkan chart GTO saat Anda belajar atau naik level online.

**Q. Apakah suited benar-benar penting?**

A. Suited menambah sekitar 2–3% equity atas tangan offsuit yang sama — berarti, tapi bukan alasan memainkan tangan buruk. Dua kartu suited membuat flush di river hanya ~6,5% dari waktu (dan flush draw yang di-flop selesai sekitar 35% dari waktu di river). Trash suited tetap trash.

**Q. Haruskah saya selalu fold pocket pair kecil seperti 22 atau 33?**

A. Tidak selalu — posisi yang memutuskan. Dari cutoff atau button, pair kecil layak dimainkan untuk "set mining": Anda flop sebuah set atau lebih baik sekitar 11,8% dari waktu (kira-kira 1 dari 8,5). Dari posisi awal mereka sulit dimainkan secara profit dan biasanya fold.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Peringkat Tangan Poker — Terbaik ke Terburuk</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Semua 10 tangan dijelaskan dengan odds dan contoh</div>
  </a>
  <a href="/id/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Posisi Poker: UTG hingga Button</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa posisi mengubah tangan mana yang dimainkan</div>
  </a>
  <a href="/id/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Aturan Kicker dan Tie-Breaker Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Pair sama tapi hasil beda — kicker yang memutuskan</div>
  </a>
</div>
`.trim(),
};

export default POST;
