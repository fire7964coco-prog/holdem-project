import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-Bet di Poker: Kapan 3-Bet, Seberapa Besar, dan Cara Menghadapinya",
  seoTitle: "Panduan 3-Bet dengan Matematikanya — Kapan, Berapa, vs Apa",
  desc: "Apa itu 3-bet dan kenapa disebut begitu, kapan 3-bet untuk value atau sebagai bluff ringan, matematika sizing persis, dan cara merespons saat Anda di-3-bet.",
  tldr: "3-bet adalah re-raise pertama sebelum flop — disebut 3-bet karena big blind adalah taruhan pertama, open-raise yang kedua, dan re-raise Anda yang ketiga. Value-3-bet inti yang ketat (QQ+, AK) plus beberapa bluff blocker suited seperti A5s, ukur sekitar 3x dari open in position dan 4x out of position, dan jaga frekuensi 3-bet keseluruhan Anda dekat 6–10%. Saat Andalah yang menghadapi 3-bet, 4-bet tangan premium Anda, call tangan yang bermain baik, dan fold sisanya — fold lebih banyak daripada 'balanced' melawan pemain stake rendah yang tak pernah bluff.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 mnt",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Seorang pemain poker mendorong tumpukan chip untuk re-raise sementara raiser awal memperhatikan, sebuah konfrontasi 3-bet preflop di atas felt hijau",
  tags: ["3 bet poker", "apa itu 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "kapan 3-bet", "squeeze play", "menghadapi 3-bet", "range linear vs polarized"],
  content: `
Tangan yang mengajari saya untuk apa sebenarnya sebuah 3-bet berlangsung begini: seorang pemain longgar membuka, saya melihat A-K, dan — seperti setiap pemula — saya hanya call. Flop datang ace-high, saya tak memasukkan uang sama sekali, dan ia fold ke satu taruhan. Saya telah mengubah tangan terbaik menjadi pot mungil. Seminggu kemudian, spot yang sama, saya *re-raise* saja. Ia call dengan ace yang lebih buruk, memasukkan seluruh stack-nya di flop ace-high, dan saya menang lima kali lebih banyak. Kartu yang sama. Satu keputusan — 3-bet — adalah seluruh perbedaannya.

Sebuah **3-bet** adalah salah satu senjata paling ampuh di No-Limit Hold'em, dan juga salah satu yang paling disalahpahami. Kebanyakan panduan memberi Anda separuh gambaran: cara *membuat* 3-bet, tapi tidak seberapa besar, tidak tangan mana yang bluff dan kenapa, tidak apa yang harus dilakukan saat seseorang meng-3-bet *Anda*. Ini adalah ==**playbook 3-bet** lengkap== — definisi, sizing dengan matematika yang benar-benar ditampilkan, range value dan ringan, squeeze, menghadapi 3-bet, dan kesalahan yang diam-diam menguras stack Anda. Ini adalah bagian inti dari [strategi Texas Hold'em](/id/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") yang menang — prinsip [raise-or-fold](/id/blog/holdem-limping), dinaikkan satu tingkat.

---

### 3-bet, dalam angka

:::stripe
Taruhan ke-3 | Kenapa disebut "3-bet" (blind = taruhan 1)
~3x / ~4x | Sizing: in position vs out of position
6–10% | Frekuensi 3-bet keseluruhan yang sehat
QQ+, AK | Inti value yang hampir semua orang setuju
:::

---

## Apa Itu 3-Bet di Poker?

**3-bet adalah re-raise pertama sebelum flop** — Anda me-re-raise pemain yang sudah open-raise. Jika seseorang membuka ke 3 big blind dan Anda menjadikannya 9, itu adalah 3-bet.

Jadi kenapa disebut *tiga*-bet padahal itu baru raise kedua? Karena namanya menghitung **taruhan dalam urutan, bukan raise.** Big blind adalah taruhan paksa — itu ==taruhan satu==. Open-raise adalah ==taruhan dua==. Re-raise Anda adalah ==taruhan tiga== — 3-bet. Ikuti rantainya ke atas dan sisa kosakatanya jatuh pada tempatnya:

- **4-bet** — re-raise *di atas* 3-bet (taruhan keempat). Sangat kuat atau polarized.
- **5-bet** — re-raise di atas 4-bet. Pada 100 big blind ini biasanya all-in.
- **Cold 4-bet** — 4-bet dari seseorang yang belum raise sebelumnya (mis. UTG membuka, Anda 3-bet, button meng-4-bet "cold"). Ia meneriakkan kekuatan.

Itulah seluruh tangganya. Segala hal lain di panduan ini adalah tentang anak tangga pertama — kapan memanjatinya, seberapa jauh, dan apa yang harus dilakukan saat seseorang memanjatnya pada Anda. Jika [aksi taruhan](/id/blog/holdem-betting-actions) dasar cek, call, dan raise masih kabur, mulai dari sana dan kembali lagi.

---

## Kenapa 3-Bet Sama Sekali? Apa yang Sebenarnya Dilakukan Sebuah 3-Bet

Meng-call open-raise (disebut **flatting**) menjaga Anda tetap di pot, tapi 3-bet melakukan empat hal yang tak bisa dilakukan flat:

1. **Ia sering langsung memenangkan pot.** Cukup sering, raiser fold dan Anda menyapu pot sebelum flop tanpa showdown. Flat tak pernah melakukan ini.
2. **Ia membangun pot besar dengan tangan terbaik Anda.** Saat Anda memegang aces atau kings, flatting membiarkan tiga pemain lain masuk dengan murah. 3-betting mengisolasi raiser dan memasukkan uang selagi Anda favorit besar.
3. **Ia merebut inisiatif dan leverage posisi.** Anda menjadi agresor dengan pimpinan taruhan di setiap street — dan melawan opener yang lebar, tekanan itu mencetak uang.
4. **Ia menyangkal equity dan informasi.** Sebuah raise menagih lawan untuk lanjut alih-alih membiarkan mereka melihat flop murah dengan tangan yang mungkin menghancurkan Anda.

Jebakannya: karena 3-bet itu ampuh, melakukannya *salah* itu mahal. Terlalu banyak pemain yang hanya pernah meng-3-bet monster mereka, yang membuat mereka sepenuhnya terbaca. Sisa panduan ini adalah tentang melakukannya dengan benar.

---

## Kapan Anda Harus 3-Bet? Tangan Value vs. Bluff Ringan

![Infografik grid gelap on-brand yang membagi tangan 3-bet menjadi dua kolom — VALUE 3-BET seperti pocket aces, kings, queens dan ace-king, dan LIGHT 3-BET seperti suited wheel aces dan suited connector](/images/holdem-3bet-range-grid.webp "Range 3-bet yang sehat punya dua bagian: inti value yang Anda ingin di-call, dan beberapa bluff blocker suited yang Anda senang fold ke sebuah 4-bet")

Range 3-bet yang menang punya **dua bagian berbeda**, dan memahami pembagian ini adalah lompatan terbesar dalam topik ini.

**Value 3-bet** — tangan yang Anda *ingin* di-call karena Anda unggul atas apa yang lanjut:
- **Intinya, hampir selalu:** ==g:QQ+ dan AK.==
- **Perluas ke** JJ, TT, AQs, dan KQs saat Anda melawan open posisi-akhir yang lebih lebar — dan pangkas kembali menuju inti melawan raiser posisi-awal yang ketat.

**Light 3-bet (3-bet bluff)** — tangan yang Anda 3-bet *dengan harapan* melipatnya keluar, tapi yang masih punya equity cadangan saat di-call. Kandidat terbaik bukanlah sampah acak; mereka dipilih karena **blocker** dan **playability**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan light 3-bet | Kenapa ia bluff hebat |
|:---|:---|
| **A5s–A2s** (suited wheel aces) | Ace Anda **memblokir** premium mereka — ia menurunkan kombo AA mereka dari 6 ke 3 dan AK dari 16 ke 12 — jadi mereka lebih kecil kemungkinan punya tangan yang lanjut. Plus ia mem-flop flush, straight, dan wheel draw. |
| **Suited connector** (76s, 65s) | Playability luar biasa — mereka mem-flop straight, flush, dan draw, jadi mereka menang banyak bahkan saat bluff-nya di-call. |
| **Suited one-gapper** (T8s, 97s) | Ide sama, sedikit lebih lemah: tersamar, fleksibel, dan murah untuk fold jika di-4-bet. |

</div>

Inilah logika blocker dalam satu kalimat: **memegang sebuah ace membuatnya secara matematis lebih kecil kemungkinan lawan Anda memegang aces atau ace-king**, jadi A5s adalah bluff yang jauh lebih baik daripada, katakanlah, A9o — yang memblokir premium yang sama tapi bermain buruk saat di-call dan hanya membuat pasangan lemah. Equity cadangan penting karena lawan Anda tak akan fold setiap kali; Anda ingin bluff yang masih bisa memenangkan pot. Itu sebabnya A5s ≈ 30% equity melawan range call QQ+/AK, sementara sampah offsuit duduk jauh di bawahnya. Ini adalah disiplin [starting-hand](/id/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") yang sama seperti biasa — hanya diterapkan pada re-raising.

---

## Range 3-Bet Linear vs. Polarized

Anda akan melihat dua kata ini di mana-mana dalam strategi 3-bet. Mereka menggambarkan *bentuk* range Anda, dan memilih yang tepat itulah yang memisahkan pemain yang berpikir dari robot hand-chart.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linear (merged) | Polarized |
|:---|:---|:---|
| **Bentuk** | Satu blok solid dari tangan terbaik Anda | Barbel: value terkuat **+** bluff, tak ada di tengah |
| **Contoh** | QQ+, AK, AQs, JJ, TT, KQs | AA-KK + bluff tipe A5s; flat bagian tengah QQ/AQ/TT |
| **Pakai saat** | Open-nya **lebar dan lemah** (posisi akhir), atau Anda **in position** | Open-nya **kuat/ketat** (posisi awal), atau Anda **di blinds** |

</div>

Alasannya sederhana: melawan open yang **lebar, lemah**, tangan seperti AQ dan TT benar-benar unggul, jadi Anda 3-bet mereka untuk value dalam satu blok merged (**linear**). Melawan open yang **ketat**, tangan tengah yang sama itu terdominasi dan "ditiup keluar" oleh 4-bet, jadi Anda hanya 3-bet value sejati plus bluff yang bersih dan *flat* bagian tengah (**polarized**).

Satu nuansa jujur yang dilewatkan kelompok hand-chart: **posisi bukan satu-satunya faktor.** Pertanyaan sebenarnya adalah *seberapa besar kemungkinan Anda ditiup keluar dari tangan Anda* — yang juga bergantung pada agresi lawan, rake, dan sizing Anda. Menghadapi seseorang yang banyak call dan jarang 4-bet, dengan size kecil dan rake rendah, condong **linear**. Menghadapi lawan yang gemar 4-bet dengan size besar dan rake tinggi, condong **polarized**. Baca spot-nya, jangan hafal aturan.

---

## Seberapa Besar Anda Harus 3-Bet? (Sizing, dengan Matematikanya)

Kebanyakan panduan memberi tahu Anda "3x in position, 4x out of position" lalu berlalu. Inilah *kenapa*-nya dan aritmetika sesungguhnya, memakai open standar **3 big blind** (sebut saja open $6 di $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situasi | Size | Open 3bb menjadi… | Kenapa |
|:---|:---:|:---:|:---|
| **In position** (Anda beraksi terakhir) | ~3x dari open | **9bb** ($18) | Posisi membiarkan Anda menang dengan size lebih kecil, jadi Anda mempertaruhkan lebih sedikit. |
| **Out of position** (Anda beraksi lebih dulu) | ~4–4,5x | **12–13,5bb** ($24–27) | Lebih besar menagih mereka lebih banyak untuk melihat flop dan menyangkal tumpangan murah bagi kelemahan posisi Anda. |
| **Squeeze** (open + seorang caller) | Size OOP **+ ~1x per caller** | **~14–15bb** ($30) | Dead money ekstra dan pemain ekstra untuk didorong keluar. |
| **Mengisolasi limper** | 3bb **+ 1bb per limper** (tambah 1 lagi live) | ~4–5bb | Hukum limp, cegah overcall, tetap di-call lebar. |

</div>

Matematikanya sengaja ditampilkan karena di situlah pemula bocor: **3 × 3bb = 9bb** in position, **4 × 3bb = 12bb** out of position. Dua aturan yang mengesampingkan pengali:

- **Jangan pernah 3-bet kecil out of position.** 3-bet OOP yang kecil memberi lawan Anda harga bagus untuk call dan mengalahkan Anda dengan posisi — persis hal yang coba Anda hindari. Pakai 4x+ penuh.
- **Sizing bukan hukum.** Kecilkan size melawan pemain yang terlalu sering fold (Anda bluff lebih murah) dan besarkan size serta jadikan pure-value melawan calling station yang tak pernah fold. Rake dan kedalaman stack menggesernya juga.

Di turnamen dengan stack dangkal, seluruh kalkulasinya berubah: pada kira-kira **10–25 big blind**, banyak tangan menjadi **3-bet all-in ("shove")** alih-alih re-raise kecil, karena tak ada ruang untuk raise-dan-fold. Berhenti min-3-bet dan mulai jamming saat Anda makin pendek.

---

## 3-Bet, Flat, atau Fold? Sebuah Tabel Keputusan

Menghadapi sebuah open, Anda punya tiga pilihan, bukan dua. Inilah peta yang tak pernah digambar kebanyakan artikel — kapan sebuah tangan lebih memilih 3-bet, flat (call), atau di-muck:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan Anda | In position (mis. button vs steal) | Out of position (mis. di blinds) |
|:---|:---|:---|
| **Premium** (QQ+, AK) | 3-bet untuk value | 3-bet untuk value |
| **Kuat** (JJ-TT, AQ, KQs) | 3-bet vs open lebar; flat vs ketat | Kebanyakan 3-bet atau fold — flatting OOP itu lemah |
| **Spekulatif** (pair kecil, suited connector) | Flat untuk set-mine / melihat flop murah | 3-bet sebagai bluff, atau fold |
| **Bluff blocker** (A5s-A2s) | 3-bet sebagai raise ringan | 3-bet sebagai raise ringan |
| **Selain itu** | Fold | Fold |

</div>

Poin besarnya: **flatting itu sah in position** — solver modern menjaga range flatting yang sehat di button karena Anda bisa melihat flop secara profit dengan taruhan tertutup di belakang Anda. Out of position ia lebih lemah, tapi dengan satu pembagian penting: dari **small blind**, lebih memilih *3-bet atau fold* yang polarized, karena meng-call lebar OOP merealisasikan equity Anda dengan buruk dan membangun range lemah yang mudah di-cap. **Big blind** adalah pengecualian — karena Anda menutup aksi dan sudah mendapat harga, Anda bertahan dengan *call* jauh lebih lebar di sana, terutama melawan steal posisi-akhir. Posisi, sekali lagi, mengubah segalanya — pelajaran yang sama seperti [playbook posisi](/id/blog/holdem-position-play).

---

## Squeeze Play: Meng-3-Bet Seorang Raiser *dan* Seorang Caller

![Chip stack tiga pemain didorong ke tengah felt hijau saat satu pemain menggeser re-raise yang lebih besar ke depan, memeras open-raiser dan seorang caller](/images/holdem-3bet-squeeze.webp "Sebuah squeeze menghukum open-raiser dan flat-caller sekaligus — dead money ekstra membuat bahkan 3-bet ringan pun profit")

**Squeeze play** adalah 3-bet yang dibuat setelah sudah ada open-raise *dan* setidaknya satu caller. Ia disebut squeeze karena Anda menaruh kedua lawan dalam jepitan: raiser awal kini harus khawatir tentang caller di belakang, dan caller — yang baru saja menunjukkan tangan yang tak cukup kuat untuk re-raise — jarang ingin lanjut melawan agresi Anda.

Dua hal membuat squeeze istimewa:
- **Ada lebih banyak dead money.** Pot sudah memuat raise dan call, jadi squeeze yang berhasil menang lebih banyak, artinya bluff Anda perlu berhasil *lebih jarang* untuk profit.
- **Ukur lebih besar.** Tambah kira-kira satu open-raise ekstra untuk tiap caller. Melawan open 3bb plus satu caller, squeeze ke sekitar **14–15bb** itu standar — size ekstra itulah yang mendorong kedua pemain keluar.

Bluff squeeze yang bagus adalah tangan blocker suited yang sama (A5s dan kawan-kawan) yang membuat bluff 3-bet yang bagus, karena Anda tetap ingin melipat keluar tangan medium raiser dan punya equity saat di-call.

---

## Menghadapi 3-Bet: Anda Call, 4-Bet, atau Fold?

![Seorang pemain poker menatap re-raise preflop dengan tangan bertumpu di chip-nya, menimbang apakah call, 4-bet, atau fold ke sebuah 3-bet](/images/holdem-3bet-facing.webp "Separuh dari 3-betting yang tak diajarkan siapa pun: saat seseorang me-re-raise Anda, sebagian besar range Anda cukup fold — terutama melawan pemain yang tak pernah bluff")

Inilah separuh dari 3-betting yang hampir setiap artikel lewati: **Anda akan berada di pihak penerima jauh lebih sering daripada Anda 3-bet sendiri.** Saat Anda membuka dan di-re-raise, Anda punya tiga respons:

- **4-bet** — untuk value dengan premium Anda (QQ+, AK), plus bluff blocker sesekali (tangan tipe A5s). Sebuah 4-bet berkata "Saya tak akan ke mana-mana."
- **Call** — dengan tangan yang mem-flop baik dan punya equity atau posisi untuk lanjut: pocket pair yang ingin set-mine, suited broadway, dan tangan kuat yang tak ingin menggembungkan pot menjadi perang 4-bet.
- **Fold** — selain itu. Sebagian besar range open Anda harus cukup menyerah ke sebuah 3-bet; itu normal, bukan kelemahan.

Seberapa banyak Anda harus lanjut? Baseline teoretisnya adalah **Minimum Defense Frequency (MDF)** — porsi range Anda yang harus Anda lanjutkan agar si 3-bettor tak bisa profit dengan bluff dua kartu apa pun. Ia adalah ==pot ÷ (pot + bet)== — di mana *pot* adalah yang ada di tengah sebelum 3-bet dan *bet* adalah ukuran 3-bet — yang melawan ukuran 3-bet tipikal mendarat di sekitar **sepertiga dari range Anda** dalam vakum (3-bet 3x: pot 4,5bb ÷ (4,5bb + 9bb) ≈ 33%). Tapi inilah eksploitasi yang memenangkan uang di meja nyata:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Stat fold-to-3-bet villain | Apa artinya | Penyesuaian Anda |
|:---:|:---|:---|
| **~35% (jarang fold)** | Calling station — 3-bet dan call mereka value-heavy | 3-bet mereka **hanya untuk value**, berhenti bluff, dan value-bet tanpa henti |
| **~55% (balanced)** | Regular yang berpikir | Main dekat GTO — campur value dan bluff blocker |
| **~70%+ (terlalu banyak fold)** | Nit yang bisa dieksploitasi | 3-bet mereka **ringan jauh lebih sering** — mereka menyerahkan pot pada Anda |

</div>

MDF mengasumsikan lawan yang *balanced*. Di stake rendah dan game live, pemain sangat **under-bluff** 3-bet mereka — jadi saat pemain pasif tiba-tiba re-raise, percayai mereka dan **fold lebih banyak daripada yang dikatakan MDF.** Anda tak berutang pertahanan "balanced" pada seorang nit.

---

## Sebuah Tangan 3-Bet Nyata, dari Awal sampai Akhir

Cukup teori — inilah tangan penuh dengan angka-angkanya, agar Anda bisa melihat seluruh alurnya. Cash $1/$2, 100bb deep.

- **Preflop:** Cutoff longgar membuka ke ==$6== (3bb). Saya di button dengan ==A♠Q♠==. Ini jelas **value 3-bet** melawan open posisi-akhir yang lebar, dan saya in position, jadi saya jadikan ==$18== (3x). Blinds fold; cutoff call. Pot-nya $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Saya mem-flop **top pair, top kicker** — A♠Q♠ saya membuat pair of queens dengan kicker terbaik yang mungkin (ace). Lima kartu terbaik: Q♠ Q♦ A♠ 8♣ 4♥ = one pair (queens) dengan kicker ace. Melawan range-nya berupa queens lebih buruk, delapan-delapan, dan float, saya jauh unggul.
- **Poinnya:** karena saya 3-bet preflop, pot-nya sudah besar dan saya punya pimpinan taruhan, jadi saya bet lagi untuk value dan dibayar oleh queens lebih buruk dan draw. Seandainya saya hanya *flat* preflop, tiga pemain lain mungkin melihat flop itu, tangan saya akan jauh lebih sulit dimainkan, dan pot-nya akan sepersekian ukurannya. 3-bet itulah yang mengubah top pair menjadi sebuah stack.

Sekarang balik: seandainya saya meng-3-bet tangan **ringan** seperti A5s di sana dan cutoff **4-bet** ke $55, saya cukup fold — bluff blocker itu menjalankan tugasnya dengan memberi saya laydown murah dan bersih. Itulah disiplin yang membuat light 3-betting profit alih-alih spewy.

---

## 6 Kesalahan 3-Betting Paling Umum

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kesalahannya | Kenapa ia merugikan Anda | Perbaikannya |
|:---|:---|:---|
| **3-betting terlalu kecil OOP** | Memberi harga bagus untuk call — mereka merealisasikan equity in position melawan Anda | Pakai 4x+ penuh out of position |
| **Hanya pernah 3-betting value** | Anda menjadi face-up; pemain bagus fold segalanya kecuali cooler | Tambahkan bluff blocker suited (A5s) |
| **Tak pernah bluff-3-bet sama sekali** | Meninggalkan uang di meja vs steal lebar; flat Anda jadi terlalu lemah | Seimbangkan value dengan beberapa light 3-bet |
| **3-betting merged vs nit** | "Value" Anda terdominasi oleh range mereka yang hanya premium | Jadikan polarized atau cukup fold vs nit sejati |
| **Bluff-3-bet sampah (Q7o)** | Tak ada blocker, tak ada equity — Anda harus fold ke tiap 4-bet | Pilih hanya tangan blocker/playability |
| **Flatting terlalu banyak di blinds** | Realisasi equity buruk OOP; range lemah yang mudah di-cap | Lebih memilih 3-bet-atau-fold yang polarized |

</div>

Perhatikan benang yang mengalir melalui keenamnya: 3-bet yang bagus punya *alasan* — value yang Anda ingin di-call, atau bluff dengan blocker dan equity cadangan. Re-raising acak tanpa rencana adalah cara stack menghilang.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-strategy | 5 Keputusan di Balik Poker yang Menang | /images/holdem-strategy-hero.webp
/id/blog/holdem-position-play | Kenapa Posisi Memenangkan Pot untuk Anda | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. Apa itu 3-bet di poker?**

A. 3-bet adalah re-raise pertama sebelum flop — Anda me-re-raise pemain yang sudah open-raise. Contohnya, jika seseorang membuka ke 3 big blind dan Anda menjadikannya 9, Anda telah 3-bet. Ini adalah alat utama untuk membangun pot dengan tangan kuat dan untuk memberi tekanan pada lawan yang membuka terlalu lebar.

**Q. Kenapa disebut 3-bet?**

A. Karena namanya menghitung taruhan dalam urutan, bukan raise. Big blind adalah taruhan paksa pertama, open-raise adalah taruhan kedua, dan re-raise Anda adalah yang ketiga — si "3-bet." Itu sebabnya disebut three-bet meski secara teknis itu baru raise kedua di tangan tersebut.

**Q. Apa beda antara 3-bet dan 4-bet?**

A. 3-bet adalah re-raise pertama (di atas open-raise); 4-bet adalah re-raise berikutnya, dibuat di atas 3-bet. Jadi tangganya begini: open-raise (taruhan ke-2) → 3-bet (taruhan ke-3) → 4-bet (taruhan ke-4) → 5-bet (biasanya all-in). Sebuah 4-bet mewakili range yang sangat kuat dan polarized.

**Q. Tangan apa yang harus Anda 3-bet?**

A. Bagi 3-bet Anda menjadi value dan bluff. Inti value adalah QQ+ dan AK, meluas ke JJ, TT, AQs, dan KQs melawan open yang lebih lebar. Untuk bluff, pakai tangan suited dengan blocker dan playability — A5s hingga A2s dan suited connector seperti 76s dan 65s — bukan sampah offsuit acak.

**Q. Kapan Anda harus 3-bet vs. cukup call (flat)?**

A. 3-bet saat Anda punya premium, saat opener lebar dan lemah, atau saat Anda out of position dan ingin menghindari flat yang buruk. Flatting baik-baik saja in position dengan tangan spekulatif (pair kecil, suited connector) di mana Anda bisa melihat flop murah dengan button. Out of position, lebih memilih 3-bet atau fold daripada call.

**Q. Apa itu light 3-bet?**

A. Light 3-bet (atau 3-bet bluff) adalah re-raising dengan tangan yang tak Anda harapkan menjadi terbaik, berharap melipat opener keluar. Light 3-bet terbaik punya blocker dan equity cadangan — suited wheel aces seperti A5s memblokir aces dan ace-king lawan Anda sambil tetap mem-flop flush dan straight, jadi mereka menang bahkan saat di-call.

**Q. Apa beda antara range 3-bet linear dan polarized?**

A. Range linear (merged) adalah satu blok solid dari tangan terbaik Anda — dipakai melawan open lebar dan lemah atau saat in position. Range polarized adalah tangan terkuat Anda plus bluff, dengan tangan medium dihapus dan di-flat saja — dipakai melawan open ketat atau dari blinds, di mana tangan medium ditiup keluar oleh 4-bet.

**Q. Seberapa besar Anda harus 3-bet?**

A. Sekitar 3x dari open in position dan 4–4,5x out of position. Jadi melawan open 3 big blind, jadikan sekitar 9bb in position atau 12bb out of position. Tambah kira-kira satu open-raise ekstra per caller saat squeezing. Jangan 3-bet kecil out of position — ia memberi lawan Anda call yang murah dan mudah in position.

**Q. Berapa persentase 3-bet yang bagus?**

A. Untuk pemain solid, frekuensi 3-bet keseluruhan sekitar 6–10% itu sehat, dengan sekitar 8% tipikal untuk pemain cash 6-max yang bagus. Di bawah ~4% terlalu ketat dan face-up; di atas ~10% biasanya terlalu agresif dan membuat Anda di-4-bet dan di-call terlalu ringan. Ia secara alami lebih tinggi dari blinds dan button daripada melawan open posisi-awal.

**Q. Apa itu squeeze play?**

A. Squeeze adalah 3-bet yang dibuat setelah sebuah open-raise dan setidaknya satu caller. Dead money ekstra di pot membuatnya profit, dan ia menekan kedua lawan sekaligus — si raiser dan si flat-caller yang sudah ter-cap. Ukur squeeze lebih besar daripada 3-bet biasa, menambahkan sekitar satu open-raise ekstra untuk tiap caller.

**Q. Bagaimana cara merespons sebuah 3-bet?**

A. Anda punya tiga pilihan: 4-bet premium Anda (QQ+, AK) plus bluff blocker sesekali, call dengan tangan yang mem-flop baik dan punya equity atau posisi (pair, suited broadway), dan fold selain itu. Sebagian besar range open Anda harus fold ke sebuah 3-bet — itu normal. Melawan pemain yang jarang bluff, fold lebih banyak lagi.

**Q. Berapa persentase fold-to-3-bet yang bagus?**

A. Sekitar 55% adalah baseline yang wajar dan kira-kira balanced — Anda lanjut dengan bagian atas range Anda dan biarkan sisanya pergi. Fold jauh lebih dari itu membuat Anda bisa dieksploitasi oleh light 3-bet; fold jauh lebih sedikit berarti Anda call atau 4-bet terlalu lebar. Sesuaikan ke lawan: fold lebih banyak melawan pemain yang tak pernah bluff-3-bet.

**Q. Haruskah Anda 3-bet atau 4-bet all-in dengan stack pendek di turnamen?**

A. Saat stack makin pendek — kira-kira 10–25 big blind — banyak tangan bermain paling baik sebagai 3-bet all-in (shove) alih-alih re-raise kecil, karena tak ada ruang untuk raise lalu fold ke sebuah 4-bet. Shoving merealisasikan semua fold equity Anda sekaligus. Field yang lebih kuat melawan pure jamming dengan 3-bet mungil, jadi campurkan 3-bet kecil non-all-in saat Anda bisa.

---

## Playbook 3-Bet, Ringkasnya

1. **3-bet adalah re-raise pre-flop pertama** — taruhan ketiga dalam urutan, karena blind dihitung sebagai taruhan satu.
2. **Bangun dua range:** inti value (QQ+, AK) yang Anda ingin di-call, dan bluff blocker suited (A5s dan kawan-kawan) yang dipilih karena blocker dan playability.
3. **Ukur ~3x in position, ~4x out** — dan jangan pernah kecil out of position.
4. **Cocokkan bentuk dengan spot:** linear vs open lebar/lemah, polarized vs open ketat dan dari blinds.
5. **Menghadapi 3-bet, sebagian besar tangan fold** — 4-bet premium, call yang bisa dimainkan, dan fold lebih banyak daripada "balanced" melawan lawan yang tak pernah bluff.

Kuasai 3-betting dengan benar dan Anda berhenti menjadi pemain yang hanya call dengan aces dan menang pot mungil. Padukan dengan [range starting-hand](/id/blog/holdem-starting-hands-chart) yang disiplin, kesadaran [posisi](/id/blog/holdem-position-play) yang tajam, dan [kerangka strategi](/id/blog/holdem-strategy) lengkap, dan permainan preflop Anda diam-diam bergerak melampaui field.

---

## Baca Juga

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kerangka 5 Keputusan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Di mana 3-betting cocok dalam permainan yang menang</div>
  </a>
  <a href="/id/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kenapa Limping Merugikan Anda</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Raise atau fold — jangan hanya call</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Memainkan Posisi Anda</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa 3-bet bekerja lebih baik in position</div>
  </a>
  <a href="/id/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Chart Starting Hands</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tangan mana yang layak di-raise sama sekali</div>
  </a>
</div>
`.trim(),
};

export default POST;
