import type { Post } from "../posts";

// MS ⑪. EN master + approved C11; see docs/ms-gto-source-contract.md.
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "SB Bertindak Dahulu, Bet 67.4%",
  seoTitle: "SB Bet 67.4% — C-Bet Poker GTO Blind Lawan Blind",
  desc: "SB tiada posisi tetapi melakukan c-bet 67.4% pada KT6. Lihat bagaimana peranan opener dan kesesuaian board membawa EQR kepada 103.1%.",
  tldr: "Selepas SB open dan BB call, flop K♥T♦6♠ menghasilkan bet 67.4% dan check 32.6%. Dalam tujuh pot single-raised terdahulu, pemain OOP hanya bet 0.1% hingga 23.7%. Dua perkara berubah: OOP kini raiser, dan board sesuai dengan rangenya. Gabungan itu membawa realisasi equity OOP kepada 103.1%. Peranan sahaja tidak cukup; SB yang sama hanya bet 9.6% pada 765.",
  category: "strategy",
  date: "2026-09-15",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  readTime: "10 minit",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-ms.webp",
  imageAlt: "Grid range SB dalam solver HoldemMaster pada flop K-T-6 rainbow, sebahagian besar berwarna oren untuk bet",
  keepImagesInBody: true,
  tags: ["blind lawan blind poker", "SB open", "c-bet K-high", "realisasi equity", "poker GTO", "strategi OOP"],
  content: `
Dalam tujuh pot single-raised terdahulu, satu pola sering berulang: **pemain yang bertindak dahulu banyak check**. Kekerapan bet OOP tertinggi ialah 23.7% pada [board bersambung 9-8-7](/ms/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-ms.webp"); enam contoh lain tidak melebihi 11.2%. Pot 3-bet kemudian menunjukkan corak berlainan.

Kali ini pot biasa: SB open ke 3 bb, BB call. Namun **pemain yang bertindak dahulu melakukan bet 67.4%**.

Pot hanya 6 bb dan baki stack masih 97 bb. Yang berubah ialah **siapa bertindak dahulu serta range siapa yang sesuai dengan board**. Semua angka datang daripada [solver GTO HoldemMaster](/ms/solver). Range ialah julat tangan, sementara board ialah kad komuniti.

:::stripe
Spot | SB open 3 bb → BB call (blind lawan blind)
Flop | K♥ T♦ 6♠ (rainbow)
Pot · stack | Pot 6 bb · stack efektif 97 bb · **SPR 16.2**
Hasil | SB bet **67.4%** — contoh single-raised pertama dengan majoriti range OOP melakukan bet
:::

> **Jawapan ringkas**
> Pada KT6 blind lawan blind, tindakan pertama SB ialah **bet 67.4%, check 32.6%**. Berbanding 0.1%–23.7% pada ①–⑦, dua perkara berubah: OOP kini **raiser, bukannya caller**, dan board K-high bersama ten sesuai dengan rangenya. Peranan sahaja tidak mencukupi; SB yang sama hanya bet **9.6%** pada [board 7-6-5](/ms/blog/blind-battle-connected-board). Di sini kedua-dua faktor sehaluan, membawa **EQR OOP kepada 103.1%**, kali pertama ia melepasi 100% dalam contoh single-raised siri ini.

## Apakah syarat yang menghasilkan angka ini?

★ **Tetapan berubah lagi.** Pot, stack dan peranan berbeza daripada contoh sebelumnya. Jadual ini memisahkan ketiga-tiga struktur sebelum kita membandingkan hasilnya.

| Tetapan | Contoh ini (blind lawan blind) | ①–⑦ (BTN lawan BB) | ⑧–⑩ (pot 3-bet) |
|---|---|---|---|
| Preflop | **SB open 3 bb → BB call** | BTN open 2.5 bb → BB call | BB 3-bet ke 11 bb → BTN call |
| OOP (bertindak dahulu) | **SB — opener** | BB — caller | BB — 3-bettor |
| IP | BB — caller | BTN — opener | BTN — caller |
| Pot | **6 bb** | 5.5 bb | 22.5 bb |
| Stack efektif | **97 bb** | 97.5 bb | 89 bb |
| SPR | **16.2** | 17.7 | 4.0 |
| Saiz bet | Kira-kira satu pertiga pot, **satu saiz sahaja** | Kira-kira satu pertiga dan tiga perempat (⑦ satu sahaja) | Kira-kira satu pertiga dan dua pertiga |
| Rake | Tidak dimodelkan | Tidak dimodelkan | Tidak dimodelkan |
| Tarikh semakan | 2026-08-08 (hasil spot belajar) | 2026-08-08 | 2026-08-08 |

Pot 6 bb ialah ==3 daripada SB + 3 daripada BB==. Kedua-dua blind berada dalam pot, jadi tiada blind tambahan daripada pemain yang fold. Stack efektif ialah ==100 − 3 = 97 bb==.

Paparan menggunakan **big blind**: “Bet 2bb (33% pot)” menunjukkan amaun dan pecahan pot; EV ditunjukkan sebagai “EV (bb)”.

## Berapa kerap SB melakukan bet?

**Bet 67.4%, check 32.6%.** Daripada 538 kombo, 362.1 kombo berwajaran menyertai bet.

| Tindakan pertama SB | Kekerapan | Kombo |
|---|---|---|
| Bet 2 bb (33% pot) | **67.4%** | 362.1 |
| Check | 32.6% | 175.9 |

Perbandingan seluruh siri menunjukkan jurangnya dengan lebih jelas.

| Spot | Siapa OOP | Kekerapan bet OOP |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3.0%–3.2% |
| **7♦6♦5♣ blind lawan blind (⑫)** | **SB opener** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ bersambung (④) | BB caller | 23.7% |
| **K♥T♦6♠ blind lawan blind (⑪)** | **SB opener** | **67.4%** |
| **A♠A♥6♦ blind lawan blind (⑬)** | **SB opener** | **80.1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB 3-bettor | 98–100% |

**Posisi dan peranan sahaja tidak menerangkan jadual ini.** SB opener yang sama memberikan 9.6%, 67.4% dan 80.1%, iaitu **rentang 70.5 mata**. Malah 9.6% pada ⑫ lebih rendah daripada caller pada ⑤ (11.2%) dan ④ (23.7%). Jurang mutlak antara caller dengan aggressor hanya kelihatan jika contoh lawan itu dibuang. Yang jelas terpisah ialah **pot 3-bet pada 98–100%**; variasi lain datang daripada peranan dan board bersama.

## Mengapa pemain OOP boleh bet dahulu di sini?

**Aggressor preflop juga pemain pertama bertindak pada flop.** Namun struktur itu tidak menjamin bet tinggi: ia turut menghasilkan **9.6%** pada [⑫](/ms/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-ms.webp") dan **80.1%** pada [⑬](/ms/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-ms.webp"). Peranan memberi peluang menggunakan kelebihan range; board menentukan sejauh mana peluang itu wujud.

Dalam BTN lawan BB, dua peranan ini terpisah. **BTN yang raise, tetapi BB yang bertindak dahulu.** Itulah struktur check dahulu, kemudian peluang c-bet, yang muncul pada ①–⑦.

Blind lawan blind menyatukannya pada SB: SB melakukan raise dan SB juga bertindak dahulu. **Pada KT6, kelebihan range serta giliran pertama berada pada pemain yang sama.** Bet SB di sini ialah c-bet, bukan donk bet.

| | Aggressor preflop | Bertindak dahulu pada flop | Bet OOP |
|---|---|---|---|
| BTN lawan BB (①–⑦) | BTN | **BB** | berasingan → 0.1%–23.7% |
| SB lawan BB (⑪ KT6) | **SB** | **SB** | pemain sama → **67.4%** |
| SB lawan BB (⑫ 7-6-5) | **SB** | **SB** | pemain sama, tetapi → **9.6%** |

⚠ **Baris ketiga tidak boleh diabaikan.** [⑫](/ms/blog/blind-battle-connected-board) mempunyai struktur peranan yang tepat sama, tetapi bet hanya 9.6%. Menjadi opener OOP membolehkan c-bet; **board masih perlu sesuai dengan range** sebelum bet luas itu berasas.

Equity mengukur kesesuaian tersebut: **SB 55.3%, BB 44.7%**. Dalam ①–⑦, OOP hanya 45.1%–48.5%, sentiasa di bawah separuh.

:::pull[Untuk memutuskan sama ada mahu bet dahulu, baca kekuatan range anda pada board tertentu itu.]:::

Kelemahan OOP dikongsi oleh BB dalam ①–⑦ dan SB di sini. Perbezaannya ialah **hubungan antara range dengan board**. Malah range sahaja belum cukup: pada [board 765](/ms/blog/blind-battle-connected-board), range benar-benar sama tetapi check mencapai 90.4%.

## Mengapa bet sekitar 67% sedangkan pot 3-bet hampir 100%?

**Range pertahanan BB jauh lebih luas.** Dua range di sini hampir sama besar: **538 kombo SB dan 525 kombo BB**. SB hanya open 3 bb; BB yang sudah meletakkan 1 bb perlu menambah 2 bb sahaja. Harga itu membolehkan banyak tangan terus bermain.

Range yang luas masih mempunyai pelbagai cara mempertahankan diri. Anda tidak boleh mengandaikan semuanya akan fold lalu bet setiap tangan. Sebab itu **32.6% kekal sebagai check**.

Tangan dalam check juga mempunyai tugas berbeza: ada yang terlalu lemah untuk bet, ada yang boleh mengundang bet lawan. Jika lawan menyamakan check dengan lemah, kemungkinan [check-raise](/ms/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-ms.webp") perlu diambil kira. Ini tafsiran susunan range; respons selepas check tidak dikira dalam contoh ini.

:::note[⚠ Spot belajar ini hanya menawarkan satu saiz bet, iaitu satu pertiga pot. Menambah saiz lebih besar boleh mengubah 67.4% itu sendiri. Bacalah hasilnya sebagai “bet kecil dan luas dalam syarat ini”, bukan bukti bahawa saiz lain lebih buruk.]:::

## Bagaimanakah kedua-dua range berbeza?

**SB mempunyai lebih banyak kelas kuat, sementara BB mempunyai lebih banyak tangan belum siap.** Namun setiap baris perlu dibaca sendiri; SB tidak mendahului semuanya.

![Perbandingan kelas tangan SB dan BB pada flop K-T-6](/images/gto-sb-king-mid-ranges-ms.webp "KT6 blind lawan blind · BB mempunyai hampir 10 mata peratus lebih banyak tangan belum siap")

| Kategori | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Set/Trips | **1.7%** | 0.6% |
| Two Pair | 2.4% | **2.5%** |
| Overpair (AA) | **1.1%** | 0.0% |
| Top pair (K) | **15.6%** | 10.9% |
| Second pair (T) | 11.7% | **13.7%** |
| Pair lemah | 6.1% | **8.0%** |
| Underpair | **10.0%** | 8.0% |
| Ace-High | **26.8%** | 22.1% |
| Tiada made hand | 24.5% | **34.3%** |

Dua baris paling jelas: **top pair 15.6% berbanding 10.9% memihak kepada SB; tangan belum siap 24.5% berbanding 34.3%**, hampir 10 mata lebih banyak pada BB.

⚠ “Belum siap” tidak bermakna langsung tiada potensi. Solver mengelaskan draw pada paksi berasingan. **Empat baris berikut tidak bertindih dan setiap lajur berjumlah 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| OESD | 3.0% | 2.3% |
| Gutshot | **16.4%** | **16.0%** |
| Backdoor FD | 17.8% | **21.1%** |
| Tiada draw | **62.8%** | 60.6% |

**Tiada baris flush draw**, kerana flop rainbow tidak membenarkan empat kad suit sama antara dua kad tangan dan tiga kad board. Backdoor masih ada, tetapi memerlukan dua kad berturut-turut dan jauh lebih jarang lengkap.

OESD 3.0% bersamaan ==0.030 × 538 = kira-kira 16 kombo==. Pada board ini, jenis tangan yang menghasilkan OESD ialah **QJ**: K-Q-J-T memerlukan ace atau sembilan, **lapan outs**. QJ mempunyai tepat 16 kombo. Gutshot lebih banyak kerana AQ, AJ, Q9, J9, 98 dan 87 semuanya boleh masuk kategori itu.

Apabila kira-kira satu pertiga range lawan belum siap dan bahagian atas range anda lebih kuat, bet kecil dengan banyak tangan menjadi pilihan yang masuk akal dalam tree ini.

Set menyokong penjelasan sama. KK, TT dan 66 masing-masing menghasilkan tiga kombo set. **SB memegang kesemua sembilan (1.7%), tetapi BB hanya mempunyai 66, tiga kombo (0.6%).** Dalam tetapan ini BB melakukan 3-bet dengan KK dan TT, bukannya call. Sebab yang sama menyebabkan AA, enam kombo overpair, hanya berada pada SB.

## Mengapa EQR mencapai 103.1% walaupun OOP?

**Kelebihan range sedikit mengatasi kelemahan posisi.** EQR ialah realisasi equity; EV ialah nilai jangkaan. Nilai-nilai ini menunjukkan SB memperoleh sedikit lebih daripada bahagian pot berdasarkan equity mentahnya.

| Metrik | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55.3% | 44.7% |
| EV (bb) | 3.42 | 2.58 |
| **EQR (realisasi equity)** | **103.1%** | 96.1% |

Pot 6 bb memberikan bahagian mentah SB ==6 × 55.3% = 3.32 bb==, sementara EV ialah 3.42 bb. Maka ==3.42 ÷ 3.32 ≈ 103.1%==.

Berikut tujuh contoh terpilih, disusun mengikut EQR OOP:

| Spot | Siapa OOP | Equity OOP | EQR OOP |
|---|---|---|---|
| A♥7♦2♣ kering (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ rendah (⑦) | caller | 48.3% | 84.3% |
| 9♥8♥7♣ bersambung (④) | caller | 48.5% | 93.2% |
| **K♥T♦6♠ blind lawan blind (⑪)** | **opener** | **55.3%** | **103.1%** |
| 8♦5♣2♠ pot 3-bet (⑩) | 3-bettor | 58.6% | 106.9% |
| A♦K♠2♥ pot 3-bet (⑧) | 3-bettor | 68.9% | 109.6% |
| Q♥T♥7♠ pot 3-bet (⑨) | 3-bettor | 58.3% | 117.8% |

Semua baris melebihi 100% dalam petikan ini ialah pemain yang bukan caller. ⚠ **Kesimpulan terbaliknya tidak sah.** [Board 765](/ms/blog/blind-battle-connected-board), yang tiada dalam jadual ini, mempunyai SB opener sama pada **85.3%**, bersama kelompok caller. Nilai 103.1% contoh ini pula hanya sedikit melepasi garis tersebut.

⚠ **EQR lebih tinggi juga tidak semestinya bermakna kelebihan lebih besar.** Equity tertinggi dalam jadual, ⑧ pada **68.9%**, memberikan EQR **109.6%**, lebih rendah daripada **117.8%** pada ⑨ walaupun equity ⑨ hanya **58.3%**, kira-kira sepuluh mata lebih rendah. Rumusnya ==EV ÷ (equity × pot)==: equity ialah penyebut. Bagi EV sama, penyebut lebih kecil menghasilkan nisbah lebih besar. Nilai 103.1% di sini tidak patut dinilai sebagai “gagal mencapai 117.8%”.

BB pula mempunyai posisi tetapi EQR hanya 96.1%, sisi lain bagi pembahagian nilai yang sama. Asas [urutan tindakan dan posisi](/ms/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") membantu memahami kelebihan maklumat itu sebelum membandingkannya dengan kekuatan range.

## Apakah pelajaran yang boleh digunakan di meja?

- **Jangan automatik check hanya kerana OOP ketika blind lawan blind.** SB opener mempunyai kelebihan range **preflop**; pada KT6, ia bet 67.4%. Namun board tetap perlu dibaca. King bersama ten sesuai dengan opener, sedangkan [7♦6♦5♣](/ms/blog/blind-battle-connected-board) membawa SB yang sama kembali kepada bet 9.6% sahaja.
- **Saiz yang digunakan ialah satu pertiga pot.** Range BB dengan 525 kombo boleh ditekan secara luas melalui saiz kecil. ⚠ Tetapi tree hanya menawarkan **33%**. Pengiraan ini tidak boleh menjawab sama ada bet besar lebih buruk. [Contoh AA6](/ms/blog/ace-paired-board-strategy) kemudian mempunyai pilihan 75% juga.
- **★Pada SPR 16.2, rancang respons kepada raise terlebih dahulu.** Bet dengan 67.4% range membuka banyak peluang untuk lawan raise. Dengan baki bersamaan kira-kira **enam belas pot**, top pair tidak secara automatik sesuai untuk seluruh stack. Pot 3-bet SPR 4.0 mempunyai ruang manuver jauh lebih kecil. Di sini, call lalu menilai turn sesuai dipertimbangkan bagi lebih banyak tangan. Di luar sembilan set dan **two pair KT, K6, T6**, sebab untuk segera melakukan commitment penuh lebih terhad. 🪶 **AA berada di bawah two pair**, kerana overpair masih hanya satu pair; ia bukan dilemahkan oleh sebarang “sekatan” king. Jadual menyusun set → two pair → overpair, sementara 1.7%, 2.4%, 1.1% ialah bahagian range, bukannya markah kekuatan. ⚠ Node selepas raise tidak dikira; ini pertimbangan berdasarkan SPR, bukan arahan solver.
- **Sebagai BB, sedar kesan memindahkan KK dan TT kepada 3-bet.** Range call anda kemudian hanya memegang set 66 pada board ini. Bahagian atas range call menjadi lebih nipis.
- **Jangan baca check 32.6% sebagai kelemahan semata-mata.** Sebahagian tangan boleh digunakan untuk meneruskan atau check-raise. Semak prinsip itu mengikut posisi ini dalam [solver dan latihan c-bet](/ms/solver), sambil mengingati bahawa node respons belum dikira dalam contoh ini.

:::readnext[Baca seterusnya]
/ms/blog/3bet-pot-low-board | Flop Rendah, Bet Besar 97.8% | /images/gto-3bp-low-oop-ms.webp
/ms/blog/blind-battle-connected-board | Board Berubah, Bet Turun ke 9.6% | /images/gto-sb-connected-oop-ms.webp
:::

## Bagaimanakah anda menyemak sendiri?

Buka [solver GTO](/ms/solver), kemudian **Spot belajar → Board K-high dengan T → ⚡ Lihat hasil**. Untuk menjadikannya latihan keputusan, buka [Trainer GTO](/ms/solver) daripada sidebar. Selepas anda memilih tindakan, ia memaparkan kekerapan campuran dan **kerugian EV (bb)**. Secara lalai, rekod disimpan pada peranti ini; jika anda log masuk dengan akaun HoldemMaster, rekod latihan Spot belajar dan Cabaran Harian disegerakkan antara peranti. Masalah daripada solve tersuai serta rekod latihannya tetap pada peranti walaupun log masuk.

Perhatikan label **OOP (SB (opener))** terlebih dahulu. Ia berbeza daripada **OOP (BB (caller))** dalam contoh awal; inilah maksud “peranan berubah”. Percuma, tanpa pemasangan atau akaun.

**Q. Patutkah SB sentiasa c-bet ketika blind lawan blind?**

A. Tidak. Pada KT6, solver bet 67.4% dan check 32.6%. Itu berbeza daripada 0.1%–23.7% bet OOP dalam contoh single-raised BTN lawan BB. Peranan dan board kedua-duanya berubah. KT6 sesuai dengan opener, tetapi board yang sesuai dengan caller boleh menurunkan kekerapan SB dengan ketara.

**Q. Adakah bermain OOP sentiasa merugikan dalam poker?**

A. Ia kelemahan, tetapi tidak menentukan hasil sendirian. SB di sini merealisasikan 103.1% bahagian equity mentahnya tanpa posisi, sementara BB dengan posisi hanya 96.1%. Kelebihan range yang cukup besar boleh mengatasi kelemahan posisi; range lemah pula boleh mempunyai EQR rendah walaupun IP.

**Q. Mengapa menggunakan satu pertiga pot sahaja?**

A. Kedua-dua range hampir sama luas, 538 kombo berbanding 525. Saiz kecil membolehkan tekanan melalui banyak tangan tanpa membesarkan setiap pot. Namun hanya saiz 33% ditawarkan dalam contoh ini; ia tidak membuktikan saiz besar yang belum dikira lebih buruk.

**Q. Mengapa 66 satu-satunya set BB di sini?**

A. Dalam tetapan range ini, KK dan TT melakukan 3-bet terhadap open SB, bukannya call. Jadi BB hanya menyimpan 66, tiga kombo atau 0.6%. SB mempunyai KK, TT dan 66, sembilan kombo atau 1.7%. AA tiada pada BB atas sebab sama.
`.trim(),
};

export default POST;
