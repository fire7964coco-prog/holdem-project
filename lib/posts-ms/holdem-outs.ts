import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "Cara Kira Outs dalam Poker — Kemahiran di Sebalik Setiap Odds Call",
  seoTitle: "Berapa Kad Sebenarnya Selamatkan Anda? — Kira Outs Poker",
  desc: "Tiada siapa ajar kira outs dulu. Maksud outs, carta outs poker ikut draw, jadual outs ke odds, Rule of 4 and 2 dan dirty outs yang rugikan anda.",
  tldr: "Out ialah mana-mana kad yang masih tinggal dalam dek dan boleh menaikkan tangan anda menjadi tangan yang berkemungkinan menang. Kira dulu, kemudian tukar: darab outs dengan 4 di flop atau dengan 2 di turn untuk anggaran peratus anda hit. Flush draw ada 9 outs, lebih kurang 36% menjelang river.",
  category: "odds",
  date: "2026-09-26",
  updated: "2026-09-26",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "11 minit",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infografik kira outs — A♥ K♥ menentang flop Q♠ J♦ 9♥ — mana-mana ten melengkapkan nut straight",
  tags: ["outs", "poker outs", "how to count outs in poker", "poker outs chart", "carta outs", "maksud outs", "flush draw outs", "rule of 4 and 2"],
  content: `
Sepanjang tahun pertama saya di meja, saya "main draw" tanpa pernah mengiranya. Flush draw dan gutshot terasa lebih kurang sama — kedua-duanya "kad yang mungkin datang" — jadi saya call dengan cara yang sama untuk kedua-duanya dan tertanya-tanya kenapa saya asyik kalah. Penyelesaiannya bukan kursus strategi. Ia tabiat lima minit: ==berhenti, dan betul-betul kira kad yang menyelamatkan saya.==

Tabiat itu dipanggil mengira **outs** — [jawapan sebenar poker kepada "kira kad"](/ms/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — dan ia satu-satunya kemahiran yang menjadi asas setiap keputusan odds dalam poker. Sebelum anda boleh bertanya "adakah call ini menguntungkan?", anda perlu menjawab "berapa kad yang memenangkan tangan ini untuk saya?" Panduan ini ialah separuh bahagian mengira — [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") ialah rujukan di belakangnya, dan [pot odds](/ms/blog/holdem-pot-odds) ialah apa yang anda buat dengan nombor itu sebaik anda memilikinya.

---

### Outs sepintas lalu

:::stripe
9 | Outs dalam flush draw
8 | Outs dalam open-ended straight draw
×4 / ×2 | Darab outs di flop / turn untuk % anda
:::

---

## Apakah Maksud Outs dalam Poker?

**Out ialah mana-mana kad yang masih dalam dek dan menukar tangan anda menjadi tangan yang berkemungkinan menang.** Jika anda memegang flush draw, setiap kad jenis anda yang tinggal melengkapkannya — dan setiap satu ialah out selagi flush itu benar-benar menang.

Perkataan "berkemungkinan" itu memainkan peranan senyap di situ. Out sebenar mesti benar-benar *memenangi* tangan, bukan sekadar memperbaiki kad anda. Berpasangan dengan ten anda apabila flush sudah ada di board bukanlah out — tangan anda bertambah baik, tetapi anda masih kalah. Belajar mengira outs sebenarnya belajar mengira kad yang menang, dan mengabaikan kad yang hanya *nampak* membantu.

Semua yang menyusul — equity anda, [pot odds](/ms/blog/holdem-pot-odds) anda, keputusan call atau fold anda — bermula daripada satu nombor ini. Jika kiraan outs salah, setiap kiraan selepasnya juga salah. Dan sebaik anda tahu kiraannya, [drawing odds](/ms/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") memberitahu dengan tepat sekerap mana setiap draw benar-benar menjadi.

---

## Bagaimana Cara Kira Outs Anda? (Langkah demi Langkah)

> **Jawapan ringkas**
> Kira kad yang belum kelihatan yang membawa anda ke tangan sasaran, kemudian buang calon yang masih meninggalkan anda kalah. Mulakan dengan jumlah jenis atau nilai kad dan tolak kad yang sudah kelihatan. Kira setiap kad fizikal sekali sahaja, walaupun ia melengkapkan dua draw yang berbeza.

![Seorang pemain memegang as dan king spade sambil meneliti flop tiga kad rendah di atas kain hijau, mengira outs overcard sebelum bertindak](/images/holdem-outs-counting.webp "A-K pada flop rendah ialah situasi kiraan buku teks — enam outs overcard, ditambah backdoor")

Mengira outs ialah rutin tiga langkah yang anda jalankan pada setiap draw sehingga ia automatik:

:::steps
Namakan draw anda | Tangan apa yang anda kejar? Flush, straight, pair lebih besar, set — tentukan sasaran dengan jelas
Kira kad yang melengkapkannya | Ada 13 kad bagi setiap jenis dan 4 bagi setiap nilai. Tolak yang sudah anda nampak (kad anda + board)
Buang yang palsu | Potong mana-mana "out" yang melengkapkan tangan anda tetapi masih kalah — kad flush yang membuat board berpasangan, straight yang memberi seseorang straight lebih tinggi
:::

Ambil flush draw: ada 13 kad jenis anda, anda nampak **empat** daripadanya (dua di tangan, dua di board), jadi ==g:13 − 4 = 9 outs==. Penolakan itu — mengira kad yang anda *tidak boleh* dapat kerana sudah memegangnya — ialah tempat pemula tergelincir.

Kiraan hanya menggunakan kad yang anda nampak. Anda tidak menolak kad lawan yang tidak diketahui; anda anggap setiap kad yang belum kelihatan masih hidup. Sebab itulah kiraan mentah di bawah sama tidak kira apa yang dipegang orang lain — ia titik permulaan, sebelum anda memotong outs kotor ("dirty outs") lebih jauh di bawah.

---

## Carta Outs Poker: Setiap Draw yang Biasa

> **Jawapan ringkas**
> Kiraan permulaan standard ialah sembilan untuk flush draw, lapan untuk open-ended straight draw dan empat untuk gutshot. Draw gabungan perlukan potongan pertindihan. Overcard dan draw bukan nut perlukan satu lagi semakan: kiraan ini menggambarkan kad yang memperbaiki tangan anda, dan hanya yang berkemungkinan menang layak diberi nilai penuh.

![Dua kiraan draw bersebelahan — tiga belas spade dengan empat dipangkah di sebelah angka 9 yang besar, dan satu susunan terbuka yang ditanda di kedua-dua hujung di sebelah angka 8 yang besar](/images/holdem-outs-nine-and-eight.webp "Kiri, flush draw; kanan, open-ender — dua kiraan outs yang menjadi ukuran bagi setiap draw lain")

Gunakan kiraan mentah ini sebagai titik permulaan, kemudian jalankan semakan outs kotor di bawah:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw anda | Outs | Kenapa |
|:---|:---:|:---|
| Flush + open-ended straight | 15 | 9 flush + 8 straight − 2 kad dikongsi — draw raksasa |
| Flush + gutshot | 12 | 9 flush + 4 gutshot − 1 kad dikongsi |
| Flush draw | 9 | 13 satu jenis − 4 yang anda nampak |
| Open-ended straight draw | 8 | Empat kad di setiap hujung |
| Dua overcard | 6 | Tiga bagi setiap nilai untuk berpasangan |
| One pair → two pair atau trips | 5 | 3 untuk memadankan kicker + 2 untuk trips |
| Gutshot (inside straight) | 4 | Hanya satu nilai yang mengisi lompang |
| Satu overcard | 3 | Tiga kad untuk membentuk top pair |
| Pocket pair → set | 2 | Dua kad terakhir nilai anda |

</div>

Dua combo draw di bahagian atas ialah tempat pemain tersilap aritmetik, jadi ia mendapat bahagian sendiri di bawah. Yang lain cuma penolakan terus: kira nilai atau jenis yang melengkapkan tangan anda, tolak apa yang anda nampak.

---

## Berapa Peratus untuk Setiap Bilangan Outs? Carta Outs ke Odds

> **Jawapan ringkas**
> Sembilan outs kena pada kad seterusnya dari flop 19.1% daripada masa, atau sekurang-kurangnya sekali menjelang river 35.0% daripada masa. Angka kedua itu termasuk dua peluang. Pilih lajur satu kad apabila menilai harga turn sahaja; lajur dua kad menganggap anda akan melihat runout penuh.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Flop → turn (1 kad) | Menjelang river (2 kad) | Odds river |
|:---|:---:|:---:|:---:|
| 2 | 4.3% | 8.4% | 11:1 |
| 4 | 8.5% | 16.5% | 5:1 |
| 6 | 12.8% | 24.1% | 3.1:1 |
| 8 | 17.0% | 31.5% | 2.2:1 |
| 9 | 19.1% | 35.0% | 1.9:1 |
| 12 | 25.5% | 45.0% | 1.2:1 |
| 15 | 31.9% | 54.1% | 0.85:1 |

</div>

Dua nombor penting untuk setiap draw. **"Menjelang river"** mengira kedua-dua kad yang tinggal dan terpakai apabila tiada lagi pertaruhan boleh berlaku — anda all-in, atau anda sudah call all-in. **"Flop → turn"** mengira kad seterusnya sahaja (9 ÷ 47 = 19.1%; dari turn ke river ia menjadi 9 ÷ 46 = 19.6%) — gunakan ini selagi masih ada pertaruhan akan datang, kerana anda hanya dijamin melihat satu kad pada satu masa. Pemula memetik nombor "menjelang river" yang besar sambil menghadapi bet di turn, memujuk diri sendiri untuk call, dan membayar harganya.

Perhatikan draw raksasa 15 outs: dengan dua kad lagi ia lengkap 54.1% daripada masa — menentang satu pair, itu biasanya menjadikannya **favorite**, draw jarang yang anda boleh all-in dengan senang hati di flop. Menentang set pula tidak: board boleh berpasangan dan melengkapkan full house bagi set itu — contoh J♠ T♠ pada 9♠ 8♣ 2♠ di bawah hanya lebih kurang 40% menentang pocket nines.

---

## Bagaimana Rule of 4 and 2 Tukar Outs Jadi Odds dalam Kepala?

> **Jawapan ringkas**
> Sebaik anda ada kiraan outs yang bersih, darab dengan empat menganggar peluang kena merentas dua kad; darab dengan dua menganggar satu kad. Jalan pintas ini makin kurang tepat apabila draw makin besar. Ia menganggar peluang lengkap, jadi mengira kad yang masih kalah tidak boleh dibetulkan dengan memilih pendarab yang betul.

- **Di flop (dua kad lagi):** outs ×4 ≈ % anda kena menjelang river.
- **Di turn (satu kad lagi):** outs ×2 ≈ % anda kena di river.

Flush draw ialah 9 outs. Di flop: 9 × 4 = **36%** (nilai sebenar 35.0% — tepat). Di turn: 9 × 2 = **18%** (sebenar 19.6% — cukup dekat untuk bertindak).

:::tip[Jalan pintas ×4 secara senyap menganggap anda akan melihat *kedua-dua* kad tanpa bet lagi — hanya terjamin apabila tiada lagi pertaruhan boleh berlaku (anda all-in, atau anda sudah call all-in). Jika ada bet di depan anda, guna nombor ×2 (satu kad) untuk street yang anda sedang berada.]:::

Kelemahan utamanya ialah **kiraan outs yang tinggi di flop**. Kiraan dua kad yang tepat mengambil kira kena di mana-mana street tanpa mengira kena dua kali sebagai dua. Anggaran ×4 mula sedikit tinggi pada 7 outs, tetapi jurangnya membesar dengan draw yang lebih besar; pembetulan biasa di bawah digunakan untuk lebih daripada 8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Kata peraturan (×4) | Sebenar menjelang river | Terlebih |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31.5% | +0.5% |
| 9 | 36% | 35.0% | +1% |
| 12 | 48% | 45.0% | +3% |
| 15 | 60% | 54.1% | +6% |

</div>

Pembetulan kemas untuk draw besar: untuk **lebih daripada 8 outs di flop**, darab dengan 4 kemudian tolak *(outs − 8)*. Untuk 15 outs: (15 × 4) − 7 = **53%**, hampir tepat. Untuk draw biasa 8 outs atau kurang, ×4 dan ×2 biasa sudah memadai. Terbitan penuhnya ada dalam [carta kebarangkalian](/ms/blog/holdem-probability).

---

## Combo Draw: Mengapa 9 + 8 Bukan 17?

> **Jawapan ringkas**
> Flush draw ditambah open-ended straight draw ada 15 kad pelengkap yang berbeza, bukan 17: dua kad straight sudah pun tergolong dalam jenis flush. Flush draw ditambah gutshot ada 12 kerana satu kad bertindih. Kira gabungan draw itu, kemudian potong secara berasingan mana-mana kad yang masih akan kalah.

Katakan anda memegang ==b:J♠ T♠== pada flop ==9♠ 8♣ 2♠==. Anda ada dua draw bertindan: flush draw (spade) dan open-ended straight draw (mana-mana Q atau 7 membentuk straight). Tambah secara naif dan anda dapat 9 + 8 = 17. Tetapi **Q♠ dan 7♠** masing-masing melengkapkan *kedua-dua* flush dan straight — ia sudah berada dalam 9 outs flush. Kira sekali sahaja:

- Outs flush: **9** (setiap spade)
- Outs straight yang bukan spade: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Jumlah: **15 outs**, bukan 17

Logik yang sama untuk **flush + gutshot**: 9 outs flush + 4 kad gutshot, tetapi satu daripada empat itu jenis anda → 9 + 3 = **12**. Setiap kali dua draw berkongsi kad, tolak pertindihannya — satu kad dalam flush + gutshot, dua dalam flush + open-ender. Inilah cara paling biasa pemain terlebih kira, dan sebab itulah baris combo dalam carta lebih rendah daripada jumlah mudah.

---

## Bilakah Outs Anda Sebenarnya Kotor? Dirty Outs yang Nampak Macam Menang

> **Jawapan ringkas**
> Dirty out (outs kotor) memperbaiki tangan anda tetapi belum tentu meletakkan anda di depan. Kad flush pada board berpasangan, flush rendah menentang flush draw yang lebih tinggi, dan overcard menentang made hand yang kuat semuanya perlu diteliti. Mulakan dengan kiraan mentah, kemudian kurangkan ikut tangan yang munasabah dipegang lawan, dan jangan bayar setiap peningkatan seolah-olah ia kemenangan.

![Infografik board berpasangan 10♠ 8♥ 4♠ 4♣ 6♦ yang memisahkan outs bersih daripada outs kotor](/images/holdem-outs-dirty-outs.webp "Pada board berpasangan, sebahagian outs anda kotor — membentuk flush masih boleh membayar full house lawan")

Tiga situasi untuk melatih mata anda:

:::card
♠ | Flush bukan nut | Memegang 8♠7♠ pada K♠9♠2♣, anda ada 9 "outs" spade — tetapi jika spade datang dan lawan sedang draw ke flush yang sama dengan spade lebih tinggi, anda membentuk flush dan masih kalah. Potong outs anda apabila anda bukan draw ke nut flush
🂮 | Board berpasangan | Flush draw pada board seperti J♥8♥8♣ nampak seperti 9 outs bersih, tetapi board sudah berpasangan — full house yang sudah jadi mungkin sedang menunggu, jadi sebahagian flush anda sudah mati sebelum sempat hidup
🃁 | Overcard menentang kekuatan | Dua overcard (A-K pada Q-8-3) dikira 6 outs di atas kertas, tetapi jika raise besar menjerit set atau two pair, berpasangan dengan as anda selalunya tidak cukup — kira 3, mungkin 4, bukan 6
:::

Anda jarang tahu potongan yang tepat, dan itu tidak mengapa. Arahnya jelas: apabila board atau aksi memberitahu sesuatu out mungkin tidak menang, kurangkan kiraan *ke bawah* sebelum anda menukarnya. Pemain yang mengira 9 outs pada board berpasangan lalu call saiz pot sedang membayar harga penuh untuk draw yang diam-diam hanya bernilai enam. Membaca outs mana yang bersih ialah kemahiran tekstur board — bina ia dengan [cara membaca board](/ms/blog/holdem-reading-the-board).

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-pot-odds | Cara Kira Pot Odds | /images/holdem-pot-odds-hero.webp
/ms/blog/holdem-probability | Carta Odds & Kebarangkalian Poker | /images/holdem-probability-hero.webp
:::

## Soalan Lazim

**Q. Apakah maksud outs dalam poker?**

A. Outs ialah kad yang tinggal dalam dek yang memperbaiki tangan anda menjadi tangan yang berkemungkinan menang. Flush draw ada 9 outs (9 kad jenis anda yang belum kelihatan); open-ended straight draw ada 8. Anda mengiranya untuk mengetahui peluang anda kena dan sama ada sesuatu call menguntungkan.

**Q. Apa maksud 9 outs dalam poker?**

A. Ia bermakna sembilan kad yang tinggal dalam dek boleh melengkapkan tangan anda — selalunya flush draw (13 satu jenis tolak 4 yang anda nampak). Sembilan outs bersamaan lebih kurang 35% untuk kena menjelang river dari flop — nombor dua kad yang menganggap tiada lagi bet akan datang — atau 19.1% pada satu kad turn sahaja. Peraturannya sama untuk mana-mana kiraan: lebih banyak outs bermakna peluang kena lebih tinggi, dan darab outs dengan 4 di flop (atau 2 di turn) memberi peratus yang pantas.

**Q. Bagaimana cara kira outs dalam poker?**

A. Namakan tangan yang anda kejar, kira berapa kad yang melengkapkannya (13 bagi setiap jenis, 4 bagi setiap nilai), tolak yang sudah anda nampak di tangan dan di board, kemudian potong mana-mana outs "kotor" yang masih akan kalah. Flush draw ialah 13 − 4 = 9.

**Q. Berapa outs ada pada flush draw?**

A. Sembilan. Ada 13 kad bagi setiap jenis; dengan dua di tangan dan dua di board anda nampak empat, meninggalkan 9 kad yang belum kelihatan yang melengkapkan flush anda. Itu lebih kurang 35% untuk kena menjelang river dari flop, atau 19.1% pada kad seterusnya sahaja jika masih ada pertaruhan akan datang.

**Q. Berapa outs ada pada open-ended straight draw?**

A. Lapan — empat kad di setiap hujung mengisi straight. Gutshot (inside) straight draw hanya ada 4 outs kerana hanya satu nilai yang mengisi lompang. Double gutshot juga ada 8, sama seperti open-ender.

**Q. Apakah Rule of 4 and 2?**

A. Jalan pintas untuk menukar outs menjadi peratus: di flop darab outs dengan 4 untuk peluang anda kena menjelang river; di turn darab dengan 2 untuk kad river. Sembilan outs flush ≈ 36% di flop, 18% di turn. Guna ×4 hanya apabila anda akan melihat kedua-dua kad tanpa bet lagi.

**Q. Apakah dirty outs atau tainted outs?**

A. Kad yang melengkapkan tangan anda tetapi masih boleh kalah — kad flush apabila flush lebih besar mungkin wujud, kad straight yang juga memberi seseorang straight lebih tinggi, atau overcard menentang set yang berkemungkinan. Potong (atau jangan kira) dirty outs sebelum menukar kepada odds, atau anda akan menilai equity anda terlalu tinggi.

**Q. Berapa outs untuk flush draw campur straight draw?**

A. 15, bukan 17. Flush draw ialah 9 outs dan open-ended straight ialah 8, tetapi dua kad straight juga jenis anda dan sudah dikira dalam flush — jadi anda tolak pertindihannya. Lima belas outs ialah favorite untuk kena menjelang river (lebih kurang 54%) — tetapi hanya apabila anda akan melihat kedua-dua kad; jika bet di turn masih akan datang, 32% satu kad itulah yang menentukan harga call anda.

**Q. Adakah kad lawan dikira semasa mengira outs?**

A. Tidak. Anda hanya menolak kad yang benar-benar anda nampak — hole card anda dan board komuniti. Setiap kad lain yang belum kelihatan dianggap hidup, dan sebab itulah kiraan mentah (9 untuk flush, 8 untuk open-ender) kekal sama tidak kira apa yang lawan pegang. Sama ada setiap kad itu benar-benar menang masih bergantung pada tangan mereka — itulah semakan dirty outs.

---

## 3 Perkara yang Wajib Anda Ingat

1. **Kira yang menang, bukan yang memperbaiki.** Out mesti membentuk tangan *terbaik*, bukan sekadar tangan yang lebih baik. Tolak hanya kad yang anda nampak.
2. **Tukar dengan 4 dan 2.** Outs × 4 di flop, × 2 di turn. Di flop, potong anggaran ×4 untuk draw besar (lebih 8 outs) dengan menolak *(outs − 8)*.
3. **Potong yang kotor.** Flush bukan nut, board berpasangan dan overcard menentang kekuatan semuanya mengecilkan kiraan outs sebenar anda. Bila ragu, kira lebih sedikit.

Kuasai kiraannya dan selebihnya matematik poker akan jatuh ke tempatnya. Bawa kiraan outs anda terus ke [cara kira pot odds](/ms/blog/holdem-pot-odds) untuk melihat sama ada harganya berbaloi, atau kembali ke [carta odds dan kebarangkalian poker](/ms/blog/holdem-probability) yang penuh untuk nombor tepat di sebalik setiap draw.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Kira Pot Odds</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tukar kiraan outs anda menjadi call atau fold</div>
  </a>
  <a href="/ms/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds &amp; Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Odds &amp; Kebarangkalian Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Rujukan penuh di sebalik setiap draw</div>
  </a>
  <a href="/ms/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Membaca Board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Membaca Board</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kesan setiap draw supaya anda kira outs bersih</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hand</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Starting Hand Ikut Posisi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Masuk pot dengan tangan yang berbaloi dikejar</div>
  </a>
</div>
`.trim(),
};
