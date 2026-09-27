import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-Bet dalam Poker: Bila Perlu 3-Bet, Berapa Saiznya dan Cara Menghadapinya",
  seoTitle: "3-Bet Ikut Rasa? — 3-Bet Poker: Bila, Berapa & Matematiknya",
  desc: "Kena 3-bet dan terus keliru? Apa itu 3-bet poker, bila 3-bet untuk value atau bluff ringan, matematik saiz yang tepat, dan cara bertindak balas bila di-3-bet.",
  tldr: "3-bet ialah re-raise pertama sebelum flop — bet ketiga selepas big blind dan open-raise. Value 3-bet dengan QQ+ dan AK, tambah beberapa bluff blocker suited seperti A5s; saiz kira-kira 3x open in position dan 4x out of position, dengan kekerapan keseluruhan sekitar 6–10%. Bila kena 3-bet: 4-bet tangan premium, call tangan yang main baik, fold selebihnya.",
  category: "strategy",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "16 minit",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "Seorang pemain poker menolak timbunan cip ke hadapan untuk re-raise sementara raiser asal memerhati — konfrontasi 3-bet preflop di atas meja hijau",
  tags: ["3-bet poker", "apa itu 3-bet", "saiz 3-bet", "range 3-bet", "3-bet ringan", "bluff 3-bet", "bila perlu 3-bet", "squeeze play", "hadapi 3-bet", "range linear vs terpolarisasi"],
  content: `
Tangan yang mengajar saya apa sebenarnya *fungsi* 3-bet berlaku begini: seorang pemain longgar membuat open, saya melihat A-K di tangan, dan — seperti setiap pemula — saya sekadar call. Flop keluar dengan As, saya langsung tidak dapat memasukkan wang ke dalam pot, dan dia fold kepada satu bet sahaja. Saya telah menukar tangan terbaik menjadi pot yang kecil. Seminggu kemudian, dalam spot yang sama, saya *re-raise* pula. Dia call dengan As yang lebih lemah, habis seluruh stack-nya di flop yang ada As, dan saya menang lima kali ganda. Kad yang sama. Satu keputusan — 3-bet — itulah seluruh perbezaannya.

**3-bet** ialah salah satu senjata paling berkuasa dalam No-Limit Hold'em, dan juga antara yang paling disalah faham. Kebanyakan panduan hanya memberi separuh gambaran: cara *membuat* 3-bet, tetapi bukan berapa saiznya, bukan tangan mana yang bluff dan mengapa, bukan apa yang perlu dibuat apabila seseorang 3-bet *anda*. Inilah ==**playbook 3-bet** yang menyeluruh== — definisi, saiz dengan matematik yang benar-benar ditunjukkan, range (julat tangan) value dan ringan, squeeze, cara menghadapi 3-bet, dan kesilapan yang diam-diam menghabiskan stack anda. Ia bahagian teras [strategi Texas Hold'em](/ms/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") yang menang — prinsip [raise atau fold](/ms/blog/holdem-limping), dibawa satu tahap lebih tinggi.

---

### 3-bet, dalam angka

:::stripe
Bet ke-3 | Sebab ia dinamakan "3-bet" (blind = bet 1)
~3x / ~4x | Saiz: in position vs out of position
6–10% | Kekerapan 3-bet keseluruhan yang sihat
QQ+, AK | Teras value yang hampir semua orang setuju
:::

---

## Apakah 3-Bet dalam Poker?

**3-bet ialah re-raise pertama sebelum flop** — anda re-raise pemain yang sudah membuat open-raise. Jika seseorang open kepada 3 big blinds dan anda jadikan 9, itulah 3-bet. Dengan 3-bet, anda membesarkan pot ketika kuat dan menekan opener yang terlalu longgar — jadi memahaminya ialah langkah pertama sebelum anda menyentuh saiz atau range.

Jadi mengapa ia dinamakan *three*-bet sedangkan ia cuma raise kedua? Kerana nama itu mengira **bet dalam urutan, bukan raise.** Big blind ialah bet paksa — itu ==bet pertama==. Open-raise ialah ==bet kedua==. Re-raise anda ialah ==bet ketiga== — iaitu 3-bet. Ikut rantai ini ke atas dan istilah selebihnya akan mudah difahami:

- **4-bet** — re-raise *di atas* 3-bet (bet keempat). Sangat kuat atau terpolarisasi.
- **5-bet** — re-raise di atas 4-bet. Pada 100 big blinds, ini biasanya all-in.
- **Cold 4-bet** — 4-bet daripada pemain yang belum raise lagi (contohnya UTG open, anda 3-bet, button pula 4-bet secara "cold"). Ia isyarat kekuatan yang jelas.

Itulah keseluruhan tangga. Semua yang lain dalam panduan ini tentang anak tangga pertama — bila memanjatnya, sejauh mana, dan apa yang perlu dibuat apabila orang lain memanjatnya ke atas anda. Jika [aksi pertaruhan](/ms/blog/holdem-betting-actions) asas seperti check, call dan raise masih kabur, mulakan di sana dan kembali ke sini.

---

## Mengapa Perlu 3-Bet? Apa Sebenarnya Fungsi 3-Bet

Call ke atas open-raise — disebut **flat call** — mengekalkan anda dalam pot, tetapi 3-bet melakukan empat perkara yang flat call tidak mampu: memenangi pot serta-merta, membina pot besar dengan tangan terbaik, merampas inisiatif pertaruhan, dan menafikan equity serta maklumat kepada lawan. Setiap satu diterangkan di bawah:

1. **Ia sering memenangi pot serta-merta.** Dalam banyak keadaan, raiser akan fold dan anda mengaut pot sebelum flop tanpa showdown. Flat call tidak pernah berbuat begini.
2. **Ia membina pot besar dengan tangan terbaik anda.** Apabila anda memegang AA atau KK, flat call membiarkan tiga pemain lain masuk dengan murah. 3-bet mengasingkan raiser dan memasukkan wang ketika anda jauh di hadapan.
3. **Ia merampas inisiatif pertaruhan.** Anda menjadi pihak agresif yang memegang inisiatif bet di setiap street — dan terhadap opener yang luas, tekanan itu menjana keuntungan besar.
4. **Ia menafikan equity dan maklumat.** Raise mengenakan bayaran kepada lawan untuk terus bermain, bukannya membiarkan mereka melihat flop murah dengan tangan yang mungkin mengalahkan anda.

Masalahnya: kerana 3-bet begitu berkuasa, melakukannya dengan *salah* amat mahal. Terlalu ramai pemain hanya 3-bet dengan tangan raksasa, lalu mereka mudah dibaca sepenuhnya. Selebihnya panduan ini tentang melakukannya dengan betul.

---

## Bila Patut Anda 3-Bet? Tangan Value vs Bluff Ringan

![Infografik grid bertema gelap yang membahagikan tangan 3-bet kepada dua lajur — VALUE 3-BETS seperti pocket As, King, Queen dan A-K, serta LIGHT 3-BETS seperti As wheel suited dan suited connector](/images/holdem-3bet-range-grid.webp "Range 3-bet yang sihat ada dua bahagian: teras value yang anda mahu di-call, dan beberapa bluff blocker suited yang anda rela fold apabila kena 4-bet")

Range 3-bet yang menang mempunyai **dua bahagian berbeza**: value 3-bet dengan tangan yang anda mahu di-call, dan 3-bet ringan (light 3-bet) dengan tangan suited yang ada blocker serta equity sandaran. Memahami pembahagian ini ialah lonjakan terbesar dalam topik ini — teras value hampir sentiasa QQ+ dan AK, manakala bluff terbaik dipilih kerana blocker dan playability.

**Value 3-bet** — tangan yang anda *mahu* di-call kerana anda di hadapan tangan yang meneruskan:
- **Teras, hampir sentiasa:** ==g:QQ+ dan AK.==
- **Lanjutkan kepada** JJ, TT, AQs dan KQs apabila berdepan open yang lebih luas dari posisi lewat — dan kecilkan semula ke arah teras terhadap raiser yang ketat dari posisi awal.

**3-bet ringan (bluff 3-bet)** — tangan yang anda 3-bet dengan *harapan* lawan fold, tetapi masih ada equity sandaran jika di-call. Calon terbaik bukan sampah rawak; ia dipilih kerana **blocker** dan **playability** (senang dimainkan selepas flop):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan 3-bet ringan | Mengapa ia bluff yang hebat |
|:---|:---|
| **A5s–A2s** (As wheel suited) | As anda **menyekat** (block) tangan premium mereka — kombinasi AA mereka jatuh dari 6 kepada 3 dan AK dari 16 kepada 12 — jadi mereka kurang berkemungkinan memegang tangan yang meneruskan. Tambahan pula ia boleh membentuk flush, straight dan draw wheel di flop. |
| **Suited connector** (76s, 65s) | Playability yang hebat — ia membentuk straight, flush dan draw di flop, jadi ia banyak menang walaupun bluff itu di-call. |
| **Suited one-gapper** (T8s, 97s) | Idea yang sama, sedikit lebih lemah: tersembunyi, fleksibel, dan murah untuk fold jika kena 4-bet. |

</div>

Inilah logik blocker dalam satu ayat: **memegang As menjadikan lawan secara matematik kurang berkemungkinan memegang AA atau AK**, jadi A5s ialah bluff yang jauh lebih baik berbanding, katakan, A9o — yang menyekat premium yang sama tetapi teruk dimainkan apabila di-call dan hanya membentuk pasangan lemah. Equity sandaran penting kerana lawan tidak akan fold setiap kali; anda mahu bluff yang masih boleh memenangi pot. Sebab itulah A5s ≈ 30% equity terhadap range call QQ+/AK, manakala sampah offsuit jauh di bawahnya. Ini disiplin [tangan permulaan](/ms/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") yang sama seperti biasa — cuma digunakan untuk re-raise.

---

## Range 3-Bet Linear vs Terpolarisasi: Apa Bezanya?

Range linear ialah satu blok padu tangan terbaik anda; range terpolarisasi pula gabungan value terkuat dan bluff, tanpa tangan tengah. Kedua-dua istilah ini muncul di mana-mana dalam strategi 3-bet kerana ia menerangkan *bentuk* range anda — dan memilih bentuk yang betul itulah yang membezakan pemain yang berfikir daripada robot carta tangan.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linear (merged) | Terpolarisasi |
|:---|:---|:---|
| **Bentuk** | Satu blok padu tangan terbaik anda | Bentuk barbel: value terkuat **+** bluff, tiada apa di tengah |
| **Contoh** | QQ+, AK, AQs, JJ, TT, KQs | QQ+ dan AK + bluff jenis A5s; flat call bahagian tengah JJ/AQ/TT |
| **Gunakan apabila** | Open itu **luas dan lemah** (posisi lewat), atau anda **in position** (IP — bertindak terakhir selepas flop). Terhadap open yang sama, small blind lebih condong linear berbanding big blind, kerana ia jarang flat call | Open itu **kuat/ketat** (posisi awal), atau anda di **big blind** (tempat anda flat call bahagian tengah pada harga diskaun) |

</div>

Sebabnya mudah: terhadap open yang **luas dan lemah**, tangan seperti AQ dan TT benar-benar di hadapan, jadi anda 3-bet tangan itu untuk value dalam satu blok bergabung (**linear**). Terhadap open yang **ketat**, tangan tengah yang sama didominasi dan "dihalau" oleh 4-bet, jadi anda hanya 3-bet value sebenar serta bluff yang bersih, dan *flat call* bahagian tengah (**terpolarisasi**).

Satu nuansa jujur yang terlepas oleh golongan carta tangan: **posisi bukan satu-satunya faktor.** Soalan sebenar ialah *sejauh mana kemungkinan anda dihalau daripada tangan anda* — yang juga bergantung pada keagresifan lawan, rake dan saiz anda. Berdepan lawan yang banyak call dan jarang 4-bet, dengan saiz kecil dan rake rendah, condonglah ke **linear**. Berdepan lawan yang gemar 4-bet, dengan saiz besar dan rake tinggi, condonglah ke **terpolarisasi**. Baca spot itu, jangan hafal satu peraturan.

---

## Berapa Saiz 3-Bet yang Patut? (Sizing, dengan Matematik)

Saiz standard ialah kira-kira 3x open in position dan 4–4.5x out of position — terhadap open 3 big blinds, itu 9bb atau 12–13.5bb. Kebanyakan panduan berhenti setakat "3x in position, 4x out of position". Di sini ada *sebabnya* dan aritmetik sebenar, menggunakan open standard **3 big blinds** (anggap open $6 pada $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situasi | Saiz | Open 3bb menjadi… | Mengapa |
|:---|:---:|:---:|:---|
| **In position** (anda bertindak terakhir) | ~3x open | **9bb** ($18) | Posisi membolehkan anda menang dengan saiz lebih kecil, jadi risiko anda kurang. |
| **Out of position** (OOP — anda bertindak dahulu) | ~4–4.5x | **12–13.5bb** ($24–27) | Saiz lebih besar menjadikan flop mahal untuk dilihat, supaya lawan tidak dapat bermain murah sambil menikmati kelebihan posisi. |
| **Squeeze** (open + seorang caller) | Saiz OOP **+ ~1x bagi setiap caller** | **~15–16.5bb** ($30–33) | Lebih banyak dead money dan seorang pemain tambahan untuk dihalau keluar. |

</div>

⚠ **Mengasingkan limper bukan 3-bet.** Jika semua pemain sebelum anda limp, raise anda ialah raise *pertama* dalam pusingan itu — iaitu 2-bet. Soalan saiznya sama, jadi ia diletakkan di sini: **3bb + 1bb bagi setiap limper** (tambah 1 lagi dalam permainan live), yang menjadikannya sekitar **4–5bb**. Ia menghukum limp dan mengurangkan overcall — anda tetap akan di-call dengan luas.

Matematiknya sengaja ditunjukkan kerana di sinilah pemula bocor: **3 × 3bb = 9bb** in position, **4 × 3bb = 12bb** out of position. Dua peraturan yang mengatasi pengganda ini:

- **Jangan sekali-kali 3-bet kecil out of position.** 3-bet OOP yang kecil memberi lawan harga yang bagus untuk call dan mengalahkan anda dengan posisi — perkara yang anda cuba elakkan. Gunakan 4x+ penuh.
- **Saiz bukan undang-undang.** Kecilkan saiz terhadap pemain yang terlalu kerap fold (bluff anda jadi lebih murah) dan besarkan saiz serta main value tulen terhadap calling station yang tidak pernah fold. Rake dan kedalaman stack juga mengubahnya.

Dalam tournament dengan stack cetek, seluruh kiraan berubah: pada kira-kira **10–25 big blinds**, banyak tangan menjadi **3-bet all-in (satu "shove")** dan bukannya re-raise kecil, kerana tiada ruang untuk raise lalu fold. Beralih daripada min-3-bet ke arah jam apabila stack semakin pendek — namun terhadap barisan pemain yang kuat, kekalkan sedikit 3-bet kecil bukan all-in dalam campuran.

---

## 3-Bet, Flat atau Fold? Jadual Keputusan

Apabila berdepan open, anda ada tiga pilihan, bukan dua: 3-bet, flat call atau fold. Premium sentiasa di-3-bet untuk value, manakala bluff blocker seperti A5s-A2s di-3-bet sebagai raise ringan; tangan kuat (JJ-TT, AQ, KQs) dan tangan spekulatif bergantung pada posisi dan siapa yang open, manakala selebihnya fold. Ini peta yang jarang dilukis untuk pemula — bila sesuatu tangan lebih sesuai untuk 3-bet, flat call, atau terus ke muck:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan anda | In position (contohnya button vs steal) | Out of position (small blind — big blind flat call lebih luas, lihat di bawah) |
|:---|:---|:---|
| **Premium** (QQ+, AK) | 3-bet untuk value | 3-bet untuk value |
| **Kuat** (JJ-TT, AQ, KQs) | 3-bet vs open luas; flat call vs ketat | Kebanyakannya 3-bet atau fold — flat call OOP lemah |
| **Spekulatif** (pasangan kecil, suited connector) | Flat call untuk set-mine / lihat flop murah | 3-bet sebagai bluff, atau fold |
| **Bluff blocker** (A5s-A2s) | 3-bet sebagai raise ringan | 3-bet sebagai raise ringan |
| **Selebihnya** | Fold | Fold |

</div>

Pengajaran besar: **flat call sah in position** — solver moden mengekalkan range flat call yang sihat di button kerana anda bertindak terakhir di setiap street selepas flop dan hanya dua blind berada di belakang anda, jadi risiko squeeze kecil dan anda boleh melihat flop dengan menguntungkan. Out of position ia lebih lemah, tetapi dengan satu pembahagian penting: dari **small blind**, condonglah kepada *3-bet atau fold* dengan range yang lebih **linear**: call secara luas OOP merealisasikan equity anda dengan buruk dan membina range lemah yang mudah di-cap, jadi anda raise bahagian atas range dan lepaskan selebihnya. **Big blind** pula pengecualian — kerana anda menutup aksi dan sudah mendapat harga, anda mempertahankan dengan *call* jauh lebih luas di situ, terutamanya terhadap steal dari posisi lewat. Hasilnya, 3-bet big blind anda secara relatif lebih **terpolarisasi**: tangan kuat dan bluff, dengan bahagian tengah dimainkan secara flat call. Posisi, sekali lagi, mengubah segalanya — pengajaran yang sama seperti [playbook posisi](/ms/blog/holdem-position-play).

---

## Squeeze Play: 3-Bet ke atas Raiser *dan* Caller

![Timbunan cip tiga pemain ditolak ke tengah meja hijau ketika seorang pemain menolak re-raise yang lebih besar, menghimpit pemain yang open-raise dan seorang caller](/images/holdem-3bet-squeeze.webp "Squeeze menghukum pemain yang open-raise dan pemain yang flat call serentak — dead money tambahan menjadikan 3-bet ringan pun menguntungkan")

**Squeeze play** ialah 3-bet yang dibuat selepas sudah ada open-raise *dan* sekurang-kurangnya seorang caller. Ia dinamakan squeeze kerana anda menghimpit kedua-dua lawan: raiser asal kini perlu risau tentang caller di belakangnya, dan caller itu — yang baru menunjukkan tangan yang tidak cukup kuat untuk re-raise — jarang mahu meneruskan menentang keagresifan anda.

Dua perkara menjadikan squeeze istimewa:
- **Lebih banyak dead money.** Pot sudah mengandungi raise dan call, jadi squeeze yang berjaya memenangi lebih banyak. Oleh sebab anda juga membesarkan saiz untuk caller, kadar fold yang diperlukan oleh bluff anda tidak semestinya turun — dari blind ia turun sedikit, dari button ia kekal lebih kurang sama — tetapi setiap fold kini mengutip lebih banyak cip.
- **Saiz lebih besar.** Tambah kira-kira satu open-raise tambahan bagi setiap caller. Terhadap open 3bb dan seorang caller, squeeze kepada kira-kira **15–16.5bb** ialah saiz standard — saiz tambahan itulah yang menghalau kedua-dua pemain keluar.

Bluff squeeze yang baik ialah tangan blocker suited yang sama (A5s dan sekutunya) yang menjadi bluff 3-bet yang baik, kerana anda masih mahu menghalau tangan sederhana raiser dan mempunyai equity apabila di-call.

---

## Kena 3-Bet: Call, 4-Bet atau Fold?

![Seorang pemain poker merenung re-raise preflop dengan tangan di atas cipnya, menimbang sama ada mahu call, 4-bet atau fold kepada 3-bet](/images/holdem-3bet-facing.webp "Separuh 3-bet yang tiada siapa ajar: apabila seseorang re-raise anda, sebahagian besar range anda patut fold sahaja — terutamanya terhadap pemain yang tidak pernah bluff")

Inilah separuh 3-bet yang hampir setiap artikel langkau: **anda akan berada di pihak penerima lebih kurang sekerap anda sendiri membuat 3-bet.** Apabila anda open dan kena re-raise, anda ada tiga respons — 4-bet dengan premium, call dengan tangan yang main baik, dan fold selebihnya:

- **4-bet** — untuk value dengan premium anda (QQ+, AK), ditambah bluff blocker sekali-sekala (tangan jenis A5s). 4-bet value berkata "saya tidak akan ke mana-mana" — 4-bet bluff blocker tetap fold kepada 5-bet.
- **Call** — dengan tangan yang kena flop dengan baik dan ada equity atau posisi untuk meneruskan: pocket pair yang mahu set-mine, broadway suited, dan tangan kuat yang tidak mahu membengkakkan pot menjadi perang 4-bet.
- **Fold** — selebihnya. Kebanyakan range open anda patut menyerah sahaja kepada 3-bet; itu normal, bukan kelemahan.

Berapa banyak yang patut anda teruskan? Garis asas teori ialah **Minimum Defense Frequency (MDF)** — bahagian range yang mesti anda teruskan supaya pemain 3-bet tidak boleh untung dengan bluff mana-mana dua kad. Formulanya ==pot ÷ (pot + bet)== — dengan *pot* ialah jumlah di tengah sebelum 3-bet dan *bet* ialah jumlah yang **ditambah** oleh pemain 3-bet (dari blind, itu raise ditolak cip yang sudah diletakkan) — yang terhadap saiz 3-bet biasa bersamaan kira-kira **satu pertiga range anda** secara teori (3-bet 3x dari button: pot 4.5bb ÷ (4.5bb + 9bb) ≈ 33%). Tetapi inilah eksploit yang menghasilkan wang di meja sebenar. Ia paling jelas dibaca dari kerusi lawan, jadi tukar tempat duduk untuk jadual di bawah: statistik di bawah ialah berapa kerap **mereka** fold apabila **anda** 3-bet mereka.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Statistik fold-to-3-bet lawan | Apa maksudnya | Pelarasan anda |
|:---:|:---|:---|
| **~35% (jarang fold)** | Calling station — mereka call dengan hampir apa sahaja, jadi bluff jarang mendapat fold yang cukup untuk untung | 3-bet mereka **untuk value sahaja**, berhenti bluff, dan value-bet tanpa henti |
| **~55% (seimbang)** | Regular yang berfikir | Main hampir dengan GTO — campurkan value dan bluff blocker |
| **~70%+ (terlalu kerap fold)** | Nit yang boleh dieksploit | 3-bet mereka **secara ringan jauh lebih kerap** — mereka menyerahkan pot kepada anda |

</div>

Sekarang tukar semula. MDF menganggap lawan yang *seimbang*. Pada stake rendah dan dalam permainan live, pemain sangat **kurang bluff** dengan 3-bet mereka — jadi apabila pemain pasif tiba-tiba re-raise, percayalah dan **pertahankan kurang daripada garis asas MDF; dengan kata lain, fold lebih daripada 1−MDF.** Anda tidak berhutang pertahanan "seimbang" kepada seorang nit.

---

## Contoh Tangan 3-Bet Sebenar, dari Mula hingga Akhir

Cukup teori — inilah satu tangan penuh dengan angkanya, supaya anda nampak keseluruhan aliran: value 3-bet dengan A♠Q♠ di button, top pair di flop, dan pot yang sudah besar hasil daripada 3-bet preflop. Permainan cash $1/$2, stack 100bb.

- **Preflop:** Cutoff yang longgar open kepada ==$6== (3bb). Saya di button dengan ==A♠Q♠==. Ini **value 3-bet** yang jelas terhadap open luas dari posisi lewat, dan saya in position, jadi saya jadikan ==$18== (3x). Kedua-dua blind fold; cutoff call. Pot kini $39.
- **Flop:** ==Q♦ 8♣ 4♥.== Saya dapat **top pair, top kicker** — A♠Q♠ saya membentuk sepasang Queen dengan kicker terbaik (As). Lima kad terbaik: Q♠ Q♦ A♠ 8♣ 4♥ = one pair (Queen) dengan kicker As. Terhadap range dia yang terdiri daripada Queen lebih lemah, pasangan 8 dan float, saya jauh di hadapan.
- **Intinya:** kerana saya 3-bet preflop, pot sudah besar dan saya memegang inisiatif bet, jadi saya bet lagi untuk value dan dibayar oleh Queen yang lebih lemah dan draw. Kalau saya sekadar *flat call* preflop, tiga pemain lain mungkin melihat flop itu, tangan saya jauh lebih sukar dimainkan, dan pot hanya sebahagian kecil saiznya. 3-bet itulah yang menukar top pair menjadi satu stack.

Sekarang terbalikkan: jika saya 3-bet tangan **ringan** seperti A5s di situ dan cutoff **4-bet** kepada $48 (kira-kira 2.7x — sedikit melebihi 2.2–2.5x in position, kerana cutoff bertindak dahulu selepas flop), saya akan fold sahaja — bluff blocker sudah menjalankan tugasnya dengan memberi saya laydown yang murah dan bersih. Itulah disiplin yang menjadikan 3-bet ringan menguntungkan, bukan boros.

---

## Apakah 6 Kesilapan 3-Bet Paling Biasa?

Enam kesilapan 3-bet paling biasa ialah 3-bet terlalu kecil OOP, hanya 3-bet value, tidak pernah bluff 3-bet, 3-bet merged terhadap nit, bluff 3-bet dengan sampah seperti Q7o, dan terlalu banyak flat call dari small blind. Setiap satu menghabiskan cip dengan cara berbeza — jadual di bawah menunjukkan sebabnya dan cara membetulkannya.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kesilapan | Mengapa ia merugikan anda | Pembetulan |
|:---|:---|:---|
| **3-bet terlalu kecil OOP** | Memberi harga bagus untuk call — mereka merealisasikan equity in position terhadap anda | Gunakan 4x+ penuh out of position |
| **Hanya 3-bet value** | Anda menjadi terbuka (face-up); pemain bagus fold semua kecuali cooler | Tambah bluff blocker suited (A5s) |
| **Langsung tidak bluff 3-bet** | Meninggalkan wang di meja terhadap steal luas; flat call anda menjadi terlalu lemah | Imbangkan value dengan beberapa 3-bet ringan |
| **3-bet merged terhadap nit** | "Value" anda didominasi oleh range mereka yang premium sahaja | Beralih ke terpolarisasi atau fold sahaja terhadap nit tulen |
| **Bluff 3-bet dengan sampah (Q7o)** | Blocker lemah dan sedikit equity sandaran — anda mesti fold kepada setiap 4-bet | Pilih tangan blocker/playability sahaja |
| **Terlalu banyak flat call dari small blind** | Realisasi equity yang lemah OOP; range lemah yang mudah di-cap | Apabila berdepan raise, kebanyakannya 3-bet-atau-fold dari SB; simpan flat call luas untuk big blind |

</div>

Perhatikan benang merah yang merentasi keenam-enamnya: 3-bet yang baik ada *sebab* — value yang anda mahu di-call, atau bluff dengan blocker dan equity sandaran. Re-raise rawak tanpa rancangan ialah cara stack lenyap.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-strategy | 5 Keputusan di Sebalik Poker yang Menang | /images/holdem-strategy-hero.webp
/ms/blog/holdem-position-play | Mengapa Posisi Memenangi Pot untuk Anda | /images/holdem-position-play-hero.webp
:::

## Soalan Lazim

**Q. Apakah 3-bet dalam poker?**

A. 3-bet ialah re-raise pertama sebelum flop — anda re-raise pemain yang sudah membuat open-raise. Contohnya, jika seseorang open kepada 3 big blinds dan anda jadikan 9, anda telah 3-bet. Ia alat utama untuk membina pot dengan tangan kuat dan untuk menekan lawan yang open terlalu luas.

**Q. Mengapa ia dinamakan 3-bet?**

A. Kerana nama itu mengira bet dalam urutan, bukan raise. Big blind ialah bet pertama yang dipaksa, open-raise ialah bet kedua, dan re-raise anda ialah bet ketiga — "3-bet". Sebab itulah ia dinamakan three-bet walaupun secara teknikal ia cuma raise kedua dalam tangan itu.

**Q. Apakah beza antara 3-bet dan 4-bet?**

A. 3-bet ialah re-raise pertama (ke atas open-raise); 4-bet ialah re-raise seterusnya, dibuat ke atas 3-bet. Jadi tangganya begini: open-raise (bet ke-2) → 3-bet (bet ke-3) → 4-bet (bet ke-4) → 5-bet (biasanya all-in). 4-bet mewakili range yang sangat kuat dan terpolarisasi.

**Q. Tangan apa yang patut anda 4-bet, dan berapa saiznya?**

A. 4-bet dengan range terpolarisasi: premium untuk value (QQ+ dan AK — terhadap lawan yang jarang 3-bet, ketatkan teras kepada AA–KK) dan beberapa bluff blocker seperti A5s yang menyekat AA dan AK lawan. Saiz 4-bet kira-kira 2.2–2.5x daripada 3-bet in position dan sedikit lebih besar out of position — lebih kecil daripada jangkaan kebanyakan pemula, kerana pot sudah besar. Dari segi kekerapan, pemain mantap hanya 4-bet beberapa peratus tangan; luaskan 4-bet value anda terhadap lawan yang terlalu kerap 3-bet.

**Q. Bila patut anda 5-bet dalam poker?**

A. 5-bet ialah re-raise ke atas 4-bet, dan pada sekitar 100 big blinds ia hampir sentiasa all-in. 5-bet untuk value dengan bahagian paling atas range anda (AA, KK, selalunya AK) dan, terhadap pemain agresif yang 4-bet ringan, tambah bluff blocker As sekali-sekala. Terhadap kebanyakan lawan stake rendah, 5-bet hampir pasti bermaksud "AA atau KK", jadi jika pemain pasif 5-bet, fold semua kecuali premium mutlak anda.

**Q. Tangan apa yang patut anda 3-bet?**

A. Bahagikan 3-bet anda kepada value dan bluff. Teras value ialah QQ+ dan AK, dilanjutkan kepada JJ, TT, AQs dan KQs terhadap open yang lebih luas. Untuk bluff, gunakan tangan suited yang ada blocker dan playability — A5s hingga A2s serta suited connector seperti 76s dan 65s — bukan sampah offsuit rawak.

**Q. Bila patut 3-bet berbanding sekadar call (flat)?**

A. 3-bet apabila anda ada premium, apabila opener luas dan lemah, atau apabila anda out of position dan mahu elak flat call yang buruk. Flat call tidak mengapa in position dengan tangan spekulatif (pasangan kecil, suited connector) di mana anda boleh melihat flop murah dengan button. Out of position, utamakan 3-bet atau fold berbanding call — dengan big blind sebagai pengecualian, kerana di situ anda menutup aksi pada harga yang baik dan mempertahankan dengan call jauh lebih luas.

**Q. Apakah 3-bet ringan (light 3-bet)?**

A. 3-bet ringan (atau bluff 3-bet) ialah re-raise dengan tangan yang anda tidak jangka terbaik, dengan harapan opener fold. 3-bet ringan terbaik ada blocker dan equity sandaran — As wheel suited seperti A5s menyekat AA dan AK lawan sambil masih boleh membentuk flush dan straight di flop, jadi ia tetap menang walaupun di-call.

**Q. Apakah beza antara range 3-bet linear dan terpolarisasi?**

A. Range linear (merged) ialah satu blok padu tangan terbaik anda — digunakan terhadap open yang luas dan lemah atau apabila in position. Range terpolarisasi ialah tangan terkuat anda ditambah bluff, dengan tangan sederhana dibuang dan dimainkan secara flat call — digunakan terhadap open ketat, dan dari big blind, kerana harga yang anda sudah dapat membolehkan anda call dengan bahagian tengah dan bukannya dihalau oleh 4-bet. Small blind, yang tiada call murah, lebih condong linear.

**Q. Berapa saiz 3-bet yang patut?**

A. Kira-kira 3x open in position dan 4–4.5x out of position. Jadi terhadap open 3 big blinds, jadikan kira-kira 9bb in position atau 12bb out of position. Tambah kira-kira satu open-raise tambahan bagi setiap caller ketika squeeze. Jangan 3-bet kecil out of position — ia memberi lawan call yang murah dan mudah in position.

**Q. Berapakah peratusan 3-bet yang baik?**

A. Bagi pemain mantap, kekerapan 3-bet keseluruhan sekitar 6–10% dikira sihat, dengan kira-kira 8% biasa bagi pemain cash 6-max yang bagus. Di bawah ~4% terlalu ketat dan mudah dibaca; melebihi ~10% biasanya terlalu agresif dan menyebabkan anda kena 4-bet serta di-call dengan terlalu ringan. Ia secara semula jadi lebih tinggi dari blind dan button berbanding terhadap open dari posisi awal.

**Q. Apakah squeeze play?**

A. Squeeze ialah 3-bet yang dibuat selepas open-raise dan sekurang-kurangnya seorang caller. Dead money tambahan dalam pot menjadikannya menguntungkan, dan ia menekan kedua-dua lawan serentak — raiser dan flat caller yang range-nya sudah capped. Buat saiz squeeze lebih besar daripada 3-bet biasa, dengan menambah kira-kira satu open-raise tambahan bagi setiap caller.

**Q. Bagaimana hendak bertindak balas terhadap 3-bet?**

A. Anda ada tiga pilihan: 4-bet premium anda (QQ+, AK) ditambah bluff blocker sekali-sekala, call dengan tangan yang kena flop dengan baik dan ada equity atau posisi (pasangan, broadway suited), dan fold selebihnya. Kebanyakan range open anda patut fold kepada 3-bet — itu normal. Terhadap pemain yang jarang bluff, fold lebih banyak lagi.

**Q. Berapakah peratusan fold-to-3-bet yang baik?**

A. Sekitar 55% ialah garis asas yang munasabah dan lebih kurang seimbang — anda teruskan dengan bahagian atas range dan lepaskan selebihnya. Itu lebih luas daripada MDF matematik tulen, yang terhadap 3-bet 3x biasa in position hanya meminta anda mempertahankan kira-kira satu pertiga — dengan kata lain, fold tidak lebih daripada kira-kira 66.7%. Anggap angka itu sebagai siling, bukan sasaran. MDF menganggap bluff tiada equity langsung, tetapi bluff 3-bet sebenar seperti A5s membawa kira-kira 30% equity terhadap range yang anda teruskan, dan ini menolak kekerapan fold pulang modal jauh di bawah siling teori itu. Jadi 55% ialah garis asas praktikal, bukan jaminan: 3-bet ringan dengan equity sebenar masih boleh untung terhadapnya. Fold jauh melebihi 55% menjadikan anda mudah dieksploit oleh 3-bet ringan; fold jauh kurang bermakna anda call atau 4-bet terlalu luas. Sesuaikan dengan lawan: fold lebih banyak terhadap pemain yang tidak pernah bluff 3-bet.

**Q. Patutkah anda 3-bet atau 4-bet all-in dengan stack pendek dalam tournament?**

A. Apabila stack semakin pendek — kira-kira 10–25 big blinds — banyak tangan paling baik dimainkan sebagai 3-bet all-in (shove) dan bukannya re-raise kecil, kerana tiada ruang untuk raise lalu fold kepada 4-bet. Shove merealisasikan seluruh fold equity anda sekali gus. Medan yang lebih kuat membalas jam tulen dengan 3-bet kecil, jadi campurkan 3-bet kecil bukan all-in apabila boleh.

---

## Playbook 3-Bet, Secara Ringkas

Seluruh artikel ini boleh diringkaskan kepada enam peraturan — daripada definisi dan dua range, kepada saiz, bentuk range, cara menghadapi 3-bet, dan apa yang berlaku apabila flop tiba dalam pot 3-bet. Simpan senarai ini dan semak semula sebelum sesi anda yang seterusnya:

1. **3-bet ialah re-raise pertama preflop** — bet ketiga dalam urutan, kerana blind dikira sebagai bet pertama.
2. **Bina dua range:** teras value (QQ+, AK) yang anda mahu di-call, dan bluff blocker suited (A5s dan sekutunya) yang dipilih kerana blocker dan playability.
3. **Saiz ~3x in position, ~4x out of position** — dan jangan sekali-kali kecil out of position.
4. **Padankan bentuk dengan spot:** linear terhadap open luas/lemah (dan dari small blind apabila berdepan raise), terpolarisasi terhadap open ketat dan dari big blind.
5. **Apabila kena 3-bet, kebanyakan tangan fold** — 4-bet premium, call yang boleh dimainkan, dan fold lebih daripada "seimbang" terhadap lawan yang tidak pernah bluff.
6. **Kemudian flop tiba.** Pot 3-bet dimainkan langsung tidak seperti pot single-raised — mengikut angka artikel ini (open 3bb, 3-bet 9bb, stack 100bb) pot itu kira-kira 2.6× lebih besar (19.5bb berbanding 7.5bb yang akan dibina oleh flat call heads-up; 3-bet out of position yang lebih besar menolaknya ke arah 3.5×) dan SPR jatuh kepada kira-kira 4.7. Pemain 3-bet masih sering bet [seluruh range-nya di flop](/ms/blog/3bet-pot-cbet) — kerana bentuk range-nya, bukan kerana stack-nya cetek.

Kuasai 3-bet dengan betul dan anda berhenti menjadi pemain yang sekadar call dengan AA lalu memenangi pot kecil. Gandingkannya dengan [range tangan permulaan](/ms/blog/holdem-starting-hands-chart) yang berdisiplin, kesedaran [posisi](/ms/blog/holdem-position-play) yang tajam, dan [rangka kerja strategi](/ms/blog/holdem-strategy) yang menyeluruh, dan permainan preflop anda diam-diam bergerak mendahului pemain lain.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Rangka Kerja 5 Keputusan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tempat 3-bet dalam permainan yang menang</div>
  </a>
  <a href="/ms/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Mengapa Limp Merugikan Anda</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise atau fold — jangan sekadar call</div>
  </a>
  <a href="/ms/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Memainkan Posisi Anda</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mengapa 3-bet lebih berkesan in position</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Tangan Permulaan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tangan mana yang berbaloi di-raise</div>
  </a>
</div>
`.trim(),
};

export default POST;
