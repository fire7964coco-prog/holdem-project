import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Bagan Peluang & Probabilitas Poker — Odds Nyata Tiap Tangan di Hold'em",
  seoTitle: "Seberapa Sering Anda Benar-benar Hit? — Bagan Peluang Poker",
  desc: "Odds nyata tiap tangan, flop, dan draw di Texas Hold'em — plus Aturan 2 dan 4 serta pot odds yang dibuat sederhana, dalam satu bagan probabilitas lengkap.",
  tldr: "Hingga river Anda akan membuat one pair 43,8% dari waktu, two pair 23,5%, flush 3,0%, dan full house 2,6% — sementara royal flush hanya muncul sekali dalam sekitar 31.000 tangan.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-09-26",
  masterUpdated: "2026-09-24",
  keepImagesInBody: true,
  readTime: "13 mnt",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Pandangan dari atas meja Texas Hold'em yang aktif dengan lima kartu bersama, tumpukan chip berserakan, dan para pemain di tengah tangan",
  tags: ["peluang poker", "bagan probabilitas poker", "odds tangan poker", "rumus poker", "aturan 2 dan 4", "pot odds", "bagan outs poker", "odds texas holdem"],
  content: `
Pertama kali saya set-mine sepasang lima di permainan live lalu hit set saya di flop, orang di sebelah saya mengerang "berapa sih *odds*-nya?" — dan saya benar-benar tahu: sekitar ==1 dari 8,5==. Angka itulah alasan saya call sejak awal.

Poker bukan permainan tebak-tebakan. Setiap call, fold, dan shove adalah ==pertanyaan probabilitas yang menyamar==, dan pemain yang menang adalah mereka yang sudah mengubah "berapa odds-nya?" menjadi refleks. Inilah ==**bagan peluang dan probabilitas poker** lengkap== untuk Texas Hold'em — tiap tangan jadi, tiap flop, tiap draw — dengan ==g:satu jalan pintas mental== yang memungkinkan Anda menghitung di meja dalam dua detik.

---

### Angka-angka yang paling penting

:::stripe
43,8% | One pair hingga river
23,5% | Two pair
3,0% | Membuat flush
2,6% | Membuat full house
1 dari 30.940 | Royal flush
:::

---

## Bagan Odds Tangan Poker: Probabilitas Setiap Tangan

> **Jawaban singkat**
> Peluang sebuah tangan poker bergantung pada berapa kartu yang boleh Anda pakai. Di Hold'em, lima terbaik dari tujuh kartu menghasilkan one pair 43,8% dari waktu dan two pair 23,5%. Frekuensi hingga river itu berbeda dari pembagian lima kartu acak; pilih kolom yang sesuai sebelum membandingkan seberapa langka dua tangan.

- **Odds 5-kartu** = kemungkinan satu tangan lima-kartu acak *adalah* tangan itu (angka klasik dari buku teks).
- **Hold'em (hingga river)** = kemungkinan Anda *berakhir* dengan tangan itu setelah melihat ketujuh kartu (dua kartu tertutup Anda + lima kartu bersama). Inilah angka yang benar-benar penting di meja.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan | Odds 5-kartu (dibagi) | Odds Hold'em (hingga river) |
|:---|:---:|:---:|
| Royal Flush | 1 dari 649.740 (0,000154%) | 1 dari 30.940 (0,0032%) |
| Straight Flush | 1 dari 72.193 (0,00139%) | 1 dari 3.590 (0,0279%) |
| Four of a Kind | 1 dari 4.165 (0,0240%) | 1 dari 595 (0,168%) |
| Full House | 1 dari 694 (0,144%) | 1 dari 39 (2,60%) |
| Flush | 1 dari 509 (0,197%) | 1 dari 33 (3,03%) |
| Straight | 1 dari 255 (0,392%) | 1 dari 22 (4,62%) |
| Three of a Kind | 1 dari 47 (2,11%) | 1 dari 21 (4,83%) |
| Two Pair | 1 dari 21 (4,75%) | 1 dari 4,3 (23,5%) |
| One Pair | 1 dari 2,4 (42,3%) | 1 dari 2,3 (43,8%) |
| High Card | 1 dari 2,0 (50,1%) | 1 dari 5,7 (17,4%) |

</div>

> **Statistik yang mengejutkan semua orang**
> High card adalah tangan lima-kartu *paling* umum (50,1%), tapi di Hold'em turun ke **17,4%** — hasil terbanyak ketiga, di bawah one pair (43,8%) dan two pair (23,5%). Kenapa? Tujuh kartu memberi Anda begitu banyak kesempatan untuk berpasangan sehingga "tanpa pair hingga river" justru menjadi pengecualian. Lebih banyak kartu, lebih banyak koneksi.

Urutan peringkat mengikuti **kolom lima kartu**: makin langka suatu tangan di antara lima kartu acak, makin tinggi ia menang — tanpa kecuali, dari high card sampai royal flush. Dengan tujuh kartu, itu berlaku di mana-mana kecuali pada high card: ia lebih langka daripada one pair (43,8%) tapi tetap menjadi tangan terlemah. Itulah logika di balik [peringkat tangan poker](/id/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): probabilitas *adalah* peringkatnya — diukur berdasarkan lima kartu.

:::quiz:::

---

## Odds Dibagikan Tiap Tangan Awal

> **Jawaban singkat**
> Pocket aces datang sekitar sekali tiap 221 pembagian, tetapi sembarang pocket pair muncul kira-kira sekali tiap 17. Bedanya ada di jumlah kombinasi: dari 1.326 kemungkinan pembagian dua kartu, satu pasangan tertentu hanya mengisi enam. Dua kartu suited apa pun datang 23,5% dari waktu, sedangkan A-K suited secara spesifik hanya 0,30%.

![Pocket aces — as sekop dan as hati yang baru dibagikan di atas felt hijau di samping chip poker](/images/holdem-probability-starting-hands.webp "Pocket aces: tangan awal terbaik, dibagikan hanya sekali dalam 221 tangan")

Sebelum flop apa pun, ada tepat **1.326 kemungkinan tangan awal dua-kartu**. Inilah seberapa sering yang orang tanyakan itu muncul.

| Tangan awal | Odds | Seberapa sering |
|:---|:---:|:---|
| Pocket pair spesifik (mis. A-A) | 1 dari 221 (0,45%) | Sekali tiap ~221 tangan |
| **Sembarang** pocket pair | 1 dari 17 (5,9%) | Kira-kira dua kali per jam live |
| A-K suited (spesifik) | 1 dari 332 (0,30%) | Langka |
| A-K (suited *atau* offsuit) | 1 dari 83 (1,2%) | — |
| Dua kartu suited apa pun | 1 dari 4,3 (23,5%) | Hampir tiap tangan keempat |

Jadi lain kali seseorang berkata "saya tak pernah dapat aces," mereka kira-kira benar — Anda akan dibagikan pasangan *spesifik* seperti aces hanya sekitar ==sekali tiap 221 tangan==. Tapi **sembarang** pocket pair datang tiap 17 tangan, itulah kenapa set-mining adalah strategi nyata, bukan khayalan. Pasangan dan tangan suited mana yang layak dimainkan dari tiap kursi dibahas di [bagan tangan awal per posisi](/id/blog/holdem-starting-hands-chart).

---

## Odds Nge-flop Tiap Tangan

> **Jawaban singkat**
> Dengan pocket pair, Anda nge-flop set atau lebih baik 11,8% dari waktu. Dengan dua kartu suited, flush yang langsung jadi di flop hanya 0,84%, sedangkan flush draw 10,9%. Ini odds bersyarat: mulailah dari kartu tertutup yang tertera di tabel, bukan dari frekuensi tangan itu di seluruh pembagian acak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Anda nge-flop… | Memegang | Odds | Melawan |
|:---|:---|:---:|:---:|
| Set (atau lebih baik) | Sebuah pocket pair | 11,8% | ~7,5:1 |
| Flush | Dua kartu suited | 0,84% | ~118:1 |
| Flush draw | Dua kartu suited | 10,9% | ~8:1 |
| Straight | Suited connector (mis. 8-7) | 1,3% | ~76:1 |
| Two pair | Dua kartu tak berpasangan | 2,0% | ~49:1 |
| Full house | Sebuah pocket pair | 0,98% | ~101:1 |
| Quads | Sebuah pocket pair | 0,245% | ~407:1 |

</div>

Untuk set-mining, ==7,5:1 adalah bayaran impas teoretis, bukan aturan stack yang memadai==: angka itu mengandaikan setiap set yang jadi menang dan dibayar. Dalam praktik, patokan umum 15–20× stack efektif memberi ruang untuk value yang tak terbayar dan set yang tetap kalah; itu pun heuristik, bukan call otomatis. Itulah jembatan ke [pot odds](#pot-odds), di bawah. Untuk penurunan lengkap tiap baris di sini — plus aturan stack set-mining dan pemisahan flush made-vs-draw-vs-lengkap — lihat bahasan mendalam [drawing odds dan odds nge-flop tiap tangan](/id/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Drawing Odds: Menyempurnakan Flush atau Straight Anda hingga River

> **Jawaban singkat**
> Flush draw sembilan outs jadi sekitar 35% dari waktu sepanjang turn dan river, dibanding 19,6% di river saja setelah turn meleset. Straight draw delapan outs sedikit lebih kecil peluangnya. Ini peluang jadi, bukan jaminan menang: kurangi dulu kartu yang memperbaiki tangan Anda tetapi tetap membiarkan lawan di depan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Flop → river (2 kartu) | Turn → river (1 kartu) |
|:---|:---:|:---:|:---:|
| Flush + open-ended (kombo) | 15 | 54,1% | 32,6% |
| Flush + gutshot | 12 | 45,0% | 26,1% |
| Flush draw | 9 | 35,0% | 19,6% |
| Open-ended straight | 8 | 31,5% | 17,4% |
| Dua overcard | 6 | 24,1% | 13,0% |
| Gutshot (dalam) straight | 4 | 16,5% | 8,7% |
| Pair → set | 2 | 8,4% | 4,3% |
| Set → full house atau quads | 7 (flop) / 10 (turn) | 33,4% | 21,7% |

</div>

Baris dua overcard dengan enam outs mengandaikan pair dari rank mana pun di antara keduanya akan menang. Melawan two pair, set, atau draw yang lebih kuat, sebagian atau semua kartu pembuat pair itu bisa jadi outs kotor — diskon kartu-kartu itu, jangan perlakukan enam sebagai outs menang yang pasti.

Situasi klasik: Anda nge-flop **flush draw** (sembilan outs). Anda akan sampai di sana ==35% dari waktu hingga river== — lebih baik dari satu banding tiga. Sebuah **open-ended straight draw** (delapan outs) hit 31,5%. Perhatikan dua kolomnya: begitu turn keluar kartu mati, Anda tinggal punya satu kartu tersisa alih-alih dua, jadi odds Anda kira-kira separuh — 35% menjadi 19,6% untuk flush draw — itulah persis kenapa draw jadi lebih mahal dikejar street demi street.

---

## Rumus Poker: Cara Menghitung Peluang dengan Outs dan Aturan 2 dan 4

> **Jawaban singkat**
> Aturan 2 dan 4 memperkirakan persentase jadinya sebuah draw: kalikan outs dengan dua untuk satu kartu tersisa, dan dengan empat untuk turn dan river sekaligus. Angka dua kartu hanya bisa dipakai menilai call di flop jika Anda tak perlu membayar lagi untuk melihat kedua kartu. Ini jalan pintas, bukan equity yang pasti.

Anda tak bisa membawa tabel itu di kepala. Kalau Anda mencari satu ==rumus poker== yang benar-benar dipakai di meja, inilah dia: **Aturan 2 dan 4** membawa Anda dalam sekitar satu-dua persen dalam satu detik:

:::steps
Hitung outs Anda | Kartu tak terlihat yang menyempurnakan tangan Anda (flush draw = 9)
Di flop, jika Anda akan melihat kedua kartu tanpa membayar lagi | Kalikan outs × 4 → perkiraan % Anda untuk hit hingga river
Di turn (1 kartu akan datang) | Kalikan outs × 2 → perkiraan % Anda untuk hit di river
:::

**Contoh terpecahkan.** Anda punya empat kartu menuju flush setelah flop. Itu ==9 outs== (13 dari jenis Anda − 4 yang bisa Anda lihat). Di flop: 9 × 4 = **36%** — angka sebenarnya 35,0%, jadi Anda tepat. Di turn jika Anda meleset: 9 × 2 = **18%** (sebenarnya: 19,6%).

:::tip[Perkiraan ×4 sudah sedikit *terlalu tinggi* sejak 7 outs; selisihnya makin berarti pada draw yang lebih besar. Dengan monster 15-out, "×4" bilang 60% tapi angka nyatanya 54% — turunkan beberapa poin untuk draw besar.]:::

Itulah jalan pintasnya: outs bersih → pengali untuk jumlah kartu yang akan Anda lihat → perkiraan draw yang dipakai berdampingan dengan [equity](/id/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") Anda. Sisanya hanya tahu apa yang harus dilakukan dengan angka itu. Satu keahlian yang diandaikan aturan ini sudah Anda kuasai adalah penghitungannya sendiri — untuk combo draw, outs yang tumpang tindih, dan outs "kotor" yang tak seharusnya dihitung, lihat panduan lengkap [menghitung outs di poker](/id/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot Odds: Mengubah Odds Anda Menjadi Call atau Fold

> **Jawaban singkat**
> Pot odds mengubah sebuah call menjadi target impas: bagi jumlah call dengan pot setelah call itu ditambahkan. Bandingkan harga itu dengan peluang menang Anda pada kartu yang benar-benar dibeli oleh call tersebut. Angka flush dua kartu tak bisa membenarkan bayaran untuk turn saja bila taruhan lain masih bisa menyusul; bayaran di street berikutnya butuh perkiraan tersendiri.

![Infografis pot odds — pot $100 dan call $25, jadi 25 ÷ 125 berarti Anda butuh 20% equity](/images/holdem-probability-pot-odds.webp "Call $25 ke pot $100: 25 ÷ 125 = 20% equity dibutuhkan untuk impas")

**Contoh terpecahkan.** Pot-nya $100. Lawan Anda bertaruh $50, menjadikannya $150. Anda harus call $50 untuk memenangkan $150 itu.

:::steps
Pot setelah taruhan | $100 + $50 = $150
Call Anda | $50 untuk menang $150 (pot akhir $200)
Pot odds | 50 ÷ 200 = 25% — Anda butuh setidaknya 25% equity
Equity Anda | Flush draw ≈ 35% hingga river (Aturan 4) — angka ini mengandaikan Anda melihat ==kedua== kartu
Keputusan | Dengan dua kartu tersisa: 35% > 25% → sebuah ==g:call== yang jelas menguntungkan
:::

Itulah momen semua angka membuahkan hasil — tapi **pakai angka untuk street yang sedang Anda bayar**. Kalau kedua kartu memang akan datang (Anda all-in, atau turn lewat tanpa taruhan lagi), **35%** Anda mengalahkan harga **25%** dan call memenangkan uang dalam jangka panjang meski Anda akan lebih sering kalah di tangan ini daripada tidak. Kalau lawan akan bertaruh lagi di turn, call ini hanya membeli Anda kartu turn — dari flop itu ==9 ÷ 47 = 19,1%==, *di bawah* harga — dan draw itu lalu butuh [implied odds](/id/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp"), yaitu uang yang Anda menangkan di street-street setelah Anda hit, untuk menutup celah itu. Memakai angka ×4 untuk keputusan satu kartu adalah cara paling umum pemula menaksir terlalu tinggi sebuah draw. Untuk metode lengkap dan contekan ukuran taruhan, lihat [cara menghitung pot odds](/id/blog/holdem-pot-odds).

---

## Odds Royal Flush & Straight Flush (dan Kenapa Begitu Langka)

> **Jawaban singkat**
> Royal flush muncul kira-kira sekali dalam 30.940 tangan Hold'em tujuh kartu acak, jauh lebih sering daripada di pembagian lima kartu. Straight flush non-royal sekitar 1 dari 3.590 hingga river — kurang langka, tapi tetap istimewa. Kedua angka itu bukan peluang Anda dari draw tertentu: begitu kartu tertutup dan flop diketahui, hitungannya bersyarat pada kartu-kartu itu.

![Infografis royal flush hati — A♥ K♥ di tangan menyempurnakan A-K-Q-J-10 hati di board 10♥ J♥ Q♥](/images/holdem-probability-royal-flush.webp "Royal flush hati: tangan paling langka di poker, sekitar 1 dari 30.940 hingga river")

- **Royal flush:** sebagai tangan lima-kartu yang dibagikan, ==1 dari 649.740==. Bermain Hold'em hingga river, peluangnya naik menjadi sekitar 1 dari 30.940 karena Anda memilih lima terbaik dari tujuh kartu. Bagaimanapun, kebanyakan pemain menunggu *bertahun-tahun* di antaranya.
- **Straight flush:** sekitar 1 dari 72.193 sebagai tangan lima-kartu, atau sekitar 1 dari 3.590 hingga river di Hold'em. Bagi kebanyakan pemain, ini tetap penampakan sekali setahun.

Kenapa begitu langka? Royal flush persis **satu rangkaian kartu spesifik dalam satu jenis spesifik** — empat cara membuatnya di seluruh deck versus 1.302.540 cara membuat high card biasa. Kelangkaan adalah seluruh alasan ia duduk di puncak peringkat.

:::note
Mitos umum: "royal flush mengalahkan segalanya, jadi ia bisa *seri*." Pot memang bisa dibagi, tapi bukan lewat cara yang biasa dijelaskan. Dua royal flush dalam jenis *berbeda* butuh sepuluh kartu tertentu, sedangkan dua pemain hanya punya sembilan — dua hole card masing-masing plus lima kartu board — jadi itu mustahil. Satu-satunya cara dua pemain sama-sama pegang royal flush adalah kalau board itu sendiri yang menjadi royal flush: semua orang memainkan board, dan pot dibagi. Dalam praktik Anda praktis tak akan pernah melihatnya.
:::

---

## Odds Peluang Tipis: Cooler, Quads, dan Bad Beat

> **Jawaban singkat**
> Odds peluang tipis di poker selalu butuh titik awal. Nge-flop quads dengan pocket pair sekitar satu dari 408; dibagikan aces satu dari 221 sebelum Anda melihat kartu apa pun. Kejadian seperti ini menjelaskan hasil yang langka, tetapi satu kekalahan langka saja tidak menunjukkan apakah keputusan sebelumnya benar.

| Peluang tipis | Odds |
|:---|:---:|
| Dibagikan pocket aces | 1 dari 221 |
| Nge-flop quads dengan pocket pair | 1 dari 408 |
| Nge-flop straight flush (suited connector) | ~1 dari 4.900 |
| Membuat royal flush hingga river | 1 dari 30.940 |

**Set over set** — Anda nge-flop set dan kalah dari set lebih besar — adalah cooler pamungkas. Tak ada angka tunggal yang bersih karena bergantung berapa pemain memegang pasangan, tapi jangkarnya begini: *Anda* nge-flop set hanya 11,8% dari waktu, dan lawan melakukan hal sama di board yang sama cukup langka sehingga kebanyakan pemain mengingat setiap kejadiannya. Saat itu terjadi, itu varians, bukan kesalahan — matematika berpihak pada Anda sepanjang jalan. Jika Anda ingin melihat persis bagaimana showdown itu dinilai, [aturan kicker dan tie-breaker](/id/blog/holdem-tiebreak-rules) mencakup semua kasus pelik.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-hand-rankings | Peringkat Tangan Poker, Terbaik ke Terburuk | /images/holdem-hand-rankings-hero.webp
/id/blog/holdem-starting-hands-chart | Tangan Awal Mana yang Benar-benar Dimainkan | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Berapa odds mendapatkan royal flush di Texas Hold'em?**

A. Sekitar 1 dari 30.940 hingga river saat Anda memainkan tangan Hold'em (memakai lima terbaik dari tujuh kartu). Sebagai tangan lima-kartu yang langsung dibagikan, odds-nya 1 dari 649.740. Bagaimanapun, kebanyakan pemain menunggu bertahun-tahun tanpa satu pun.

**Q. Berapa odds sebuah straight flush?**

A. Kira-kira 1 dari 72.193 sebagai tangan lima-kartu, atau sekitar 1 dari 3.590 hingga river di Hold'em. Ini tangan paling langka kedua, hanya dikalahkan royal flush.

**Q. Berapa odds four of a kind (atau quad aces)?**

A. Four of a kind terbentuk sekitar 1 dari 595 tangan hingga river di Hold'em (0,168%), atau 1 dari 4.165 sebagai tangan lima-kartu yang langsung dibagikan. Quads *spesifik* seperti quad aces jauh lebih langka — kira-kira 1 dari 7.700 hingga river. Jalur yang paling umum (sekitar 57% dari kasusnya) adalah satu ace di tangan Anda dan tiga sisanya di board; memegang pocket pair-nya lalu menangkap dua ace sisanya lebih langka lagi, dan keempatnya mendarat di board paling langka.

**Q. Seberapa langka flush, straight, atau full house?**

A. Hingga river di Hold'em Anda akan membuat flush sekitar 3,0% dari waktu (1 dari 33), straight 4,6% (1 dari 22), dan full house 2,6% (1 dari 39). Jadi full house sebenarnya lebih langka daripada flush, dan flush lebih langka daripada straight — persis urutan yang dipakai peringkat tangan.

**Q. Berapa odds hit flush hingga river?**

A. Jika Anda nge-flop flush draw (sembilan outs), Anda akan menyempurnakannya sekitar 35% dari waktu hingga river — lebih baik dari satu banding tiga. Pada satu kartu (turn ke river), turun menjadi kira-kira 19,6%.

**Q. Berapa odds nge-flop set?**

A. Sekitar 11,8%, atau kira-kira 1 dari 8,5, saat Anda memegang pocket pair. Odds setara 7,5:1 itu menggambarkan perbandingan meleset lawan kena, bukan kedalaman stack yang dianjurkan. Call set-mining juga butuh bayaran realistis di street berikutnya; patokan praktis 15–20× memberi ruang untuk set yang tak dibayar atau kalah.

**Q. Berapa odds nge-flop royal flush?**

A. Sangat kecil. Bahkan saat Anda sudah memegang dua dari lima kartunya suited — misalnya A♥ K♥ — flop memunculkan persis Q♥ J♥ 10♥ hanya sekitar sekali dalam 19.600 flop. Dari tangan awal acak jauh lebih langka lagi — itulah kenapa hampir semua royal flush yang jadi selesai di turn atau river, bukan di flop.

**Q. Berapa odds dibagikan pocket aces?**

A. 1 dari 221 (0,45%) untuk aces secara spesifik. Sembarang pocket pair, meski begitu, datang jauh lebih sering — sekitar 1 dari 17 tangan (5,9%).

**Q. Apa rumus poker untuk menghitung peluang?**

A. Ada dua rumus. Rumus kombinasi menghitung seberapa langka sebuah tangan: dari 52 kartu ada C(52,5) = 2.598.960 tangan lima-kartu, dan hanya 4 di antaranya royal flush — jadi peluangnya 4 ÷ 2.598.960 = 1 dari 649.740. Dua kartu tertutup punya C(52,2) = 1.326 kemungkinan. Rumus yang dipakai di meja adalah Aturan 2 dan 4: outs × 4 di flop bila Anda akan melihat turn dan river tanpa membayar lagi, outs × 2 di turn.

**Q. Apa itu Aturan 2 dan 4 di poker?**

A. Aturan 2 dan 4 (juga disebut "aturan 4-2") adalah jalan pintas untuk memperkirakan odds draw: kalikan outs Anda dengan 4 di flop untuk turn dan river sekaligus, atau dengan 2 di turn untuk river saja. Sembilan outs memberi 36% untuk dua kartu lewat ×4, dibanding persisnya 35,0%; ×2 memberi 18% untuk kartu river, dibanding 19,6%. Cek tabel angka persis saat harganya tipis, dan pakai angka dua kartu hanya saat Anda melihat kedua kartu tanpa taruhan lagi.

**Q. Bagaimana cara menghitung pot odds?**

A. Bagi jumlah yang harus Anda call dengan total pot setelah call Anda: call $50 ke pot $150 adalah 50 ÷ 200 = 25%, itulah equity yang Anda butuhkan. Halaman ini memberi separuh lainnya dari perbandingan itu — seberapa sering draw Anda benar-benar sampai. Sisi harganya ada di [panduan pot odds — rasio, jalan pintas ukuran taruhan, dan kesalahan yang mahal](/id/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp").

**Q. Berapa odds set over set?**

A. Tak ada angka tunggal yang tetap — bergantung berapa lawan memegang pocket pair — tapi ia langka. Anda nge-flop set hanya 11,8% dari waktu untuk memulainya, jadi dua pemain sama-sama nge-flop set di board yang sama adalah "cooler" klasik yang menghabiskan stack.

**Q. Tangan pemenang apa yang paling umum di poker?**

A. One pair, disusul two pair. Karena semua pemain berbagi lima kartu bersama, kebanyakan pot Texas Hold'em diputuskan oleh satu pair dan kicker-nya — flush, straight, dan full house menang jauh lebih jarang daripada dugaan pemula. Bagan di atas menunjukkan seberapa sering Anda *berakhir* dengan tiap tangan.

**Q. Seberapa sering tangan terbaik menang di poker?**

A. Lebih jarang dari dugaan Anda sebelum river. Bahkan pocket aces — tangan awal terbaik — hanya menang sekitar 85% dari waktu heads-up, dan jauh lebih rendah melawan satu meja penuh. Hingga river lima kartu terbaik menang menurut definisi; kejutannya terjadi lebih awal, saat tangan jadi disusul oleh draw yang masih hidup.

**Q. Seberapa sering Anda hit flop di poker?**

A. Dengan dua hole card tak berpasangan Anda akan memasangkan setidaknya salah satunya di flop sekitar 32% dari waktu — jadi Anda benar-benar meleset kira-kira dua dari tiga flop. Itulah kenapa posisi dan agresi begitu penting: satu lawan mana pun sudah meleset dari flop kira-kira dua kali dari tiga, dan pemain yang berani bertaruh sering mengambil pot.

**Q. Berapa odds memegang nuts?**

A. Tak ada angka tunggal — nuts (tangan terbaik yang mungkin di board tertentu) berubah di tiap board. Di board kering tanpa pair, nuts bisa berupa top set; di board terkoordinasi bisa berupa straight atau flush. Keahliannya bukan menghafal satu angka odds, melainkan membaca tangan mana yang *menjadi* nuts dan menilai seberapa mungkin lawan memegangnya.

---

## 3 Angka yang Harus Ditanam di Ingatan

1. **Nge-flop set: ~12% (1 dari 8,5).** Peluang kena ini memulai hitungan set-mining; kedalaman stack dan bayaran yang mungkin menentukan apakah call itu untung.
2. **Flush draw hingga river: 35%.** Sembilan outs, Aturan 4 → 9 × 4 = 36%.
3. **Pot odds mengalahkan firasat.** Cocokkan peluangnya dengan kartu yang dibeli call ini, lalu bandingkan harganya dengan peluang Anda menang — menyempurnakan draw tidak selalu cukup.

Poker memberi imbalan pada pemain yang telah menjadikan ini otomatis. Pelajari bagannya, latih Aturan 2 dan 4, dan mulai bertanya "berapa odds-nya?" *sebelum* Anda bertindak alih-alih sesudahnya. Selanjutnya, terapkan matematika ini dengan mempelajari [tangan awal mana yang dimainkan dari tiap posisi](/id/blog/holdem-starting-hands-chart), atau perbarui pemahaman [kenapa flush mengalahkan straight](/id/blog/holdem-flush-vs-straight) agar Anda selalu tahu nilai outs Anda.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Peringkat Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peringkat Tangan Poker, Terbaik ke Terburuk</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Urutan yang diciptakan odds ini — tiap tangan diperingkat</div>
  </a>
  <a href="/id/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tangan Awal</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagan Tangan Awal per Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mana dari 1.326 tangan itu yang benar-benar dimainkan</div>
  </a>
  <a href="/id/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Duel Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Apakah Flush Mengalahkan Straight?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa tangan yang lebih langka selalu menang</div>
  </a>
  <a href="/id/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Membaca Board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Membaca Board di Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Hitung outs Anda dengan melihat tiap draw</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagaimana Posisi Mengubah Segalanya</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kapan odds membenarkan call — dan kapan posisi yang membenarkannya</div>
  </a>
</div>
`.trim(),
};

export default POST;
