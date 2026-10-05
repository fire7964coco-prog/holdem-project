import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Aksi Pertaruhan Texas Hold'em: Cek, Call, Raise, Fold",
  seoTitle: "Cek, Call atau Fold? — Aksi Pertaruhan Poker & Peraturan Raise",
  desc: "Giliran anda tiba dan fikiran terus kosong? Ketahui maksud cek, call, raise dan fold dalam poker, peraturan min-raise, dan berapa kali anda boleh re-raise.",
  tldr: "Texas Hold'em ada 5 aksi pertaruhan: cek (lepas giliran secara percuma), bertaruh (buka pusingan), call (samai pertaruhan), raise (menaikkannya — kenaikan minimum sama dengan saiz pertaruhan atau raise penuh sebelumnya), dan fold. Anda hanya boleh cek apabila tiada pertaruhan aktif di hadapan anda — pada praflop itu biasanya hanya big blind (atau pemain yang meletakkan straddle hidup).",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-10-06",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "9 minit",
  emoji: "🃏",
  tags: [
    "aksi pertaruhan poker",
    "apa itu cek dalam poker",
    "apa itu call dalam poker",
    "peraturan min raise poker",
    "berapa kali boleh raise dalam poker",
    "check raise poker",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "Meja Texas Hold'em dengan timbunan cip CHECK, CALL, RAISE, FOLD — seorang pemain memegang kad pemula sambil memikirkan aksinya",
  content: `
Sesi live pertama saya, pengedar berkata "action is on you" dan saya terus kaku — beberapa saat penuh kesunyian sementara seluruh meja merenung saya.

Cek? Call? Raise? Kedudukan tangan poker memang saya hafal. Tetapi ==peraturan aksi-aksi itu sendiri== saya tidak betul-betul faham — dan itulah jurang yang panduan ini tutup.

Texas Hold'em hanya ada ==5 aksi pertaruhan==, tetapi peraturan di sekelilingnya (bila cek dibenarkan, berapa besar raise mesti dibuat, berapa kali boleh re-raise) membuatkan pemain baharu keliru berminggu-minggu. Kalau anda benar-benar baru, baca dulu [panduan lengkap peraturan Texas Hold'em](/ms/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") — kemudian kembali ke sini untuk buku peraturan aksi demi aksi.

---

### Ringkasan pantas

:::stripe
5 | aksi pertaruhan: cek, bertaruh, call, raise, fold
1 BB | pertaruhan pembuka minimum dalam No-Limit Hold'em
= raise penuh terakhir | saiz minimum re-raise (peraturan inkremen)
Tiada had | re-raise dalam No-Limit — anda boleh raise sehingga seseorang all-in
:::

## Apakah 5 Aksi Pertaruhan dalam Texas Hold'em?

Setiap keputusan yang anda buat di meja poker adalah salah satu daripada lima ini:

| Aksi | Bila boleh dibuat | Kos cip |
|--------|---------------|-----------|
| Fold | Bila-bila masa giliran anda | Percuma — tetapi anda lepaskan cip yang sudah masuk dalam pot |
| Cek | Hanya apabila tiada pertaruhan aktif di hadapan anda (praflop: sebagai big blind, atau sebagai pemain yang meletakkan straddle hidup) | Percuma — anda lepas giliran tanpa menambah cip |
| Call | Selepas seseorang bertaruh atau raise | Anda samai pertaruhan semasa dengan tepat |
| Bertaruh (bet) | Pertaruhan pertama dalam pusingan | Jumlah pilihan anda (minimum = 1 big blind) |
| Raise | Selepas seseorang bertaruh | Sekurang-kurangnya sebesar pertaruhan atau raise penuh sebelumnya, ditambah di atasnya |

==All-in== bukan aksi keenam yang berasingan — ia adalah bertaruh, call atau raise dengan semua cip yang anda ada. Kita bincangkan lebih lanjut di bawah.

Peraturan paling penting yang selalu terlepas pandang oleh pemain baharu: ==r:anda tidak boleh cek jika ada pertaruhan aktif di hadapan anda==. Sebaik sahaja ada cip dalam pot yang belum anda samakan, pilihan anda mengecil kepada fold, call atau raise.

---

## Apa Itu Cek dalam Poker?

Cek bermaksud: ==g:"Saya lepas giliran — tiada pertaruhan daripada saya, tetapi saya kekal dalam hand ini."==

Ia tidak berkos apa-apa. Dalam poker live anda mengisyaratkannya dengan mengetuk meja atau menyebut "check". Aksi berpindah kepada pemain di sebelah kiri anda. Jika semua orang cek, kad komuniti seterusnya dibuka — atau, pada river, terus ke showdown.

Cek bukan bermakna menyerah. Anda simpan kad anda, anda kekalkan semua pilihan, dan anda tidak bayar satu sen pun untuk melihat apa yang berlaku seterusnya.

---

## Bila Anda Boleh Cek dalam Poker?

Anda boleh cek dalam dua jenis situasi:

- **Belum ada sesiapa bertaruh** dalam pusingan semasa (flop, turn atau river)
- **Anda big blind pada pre-flop dan tiada sesiapa raise atau straddle** — blind anda sudah dikira sebagai pertaruhan hidup, jadi anda boleh cek dan melihat flop secara percuma (begitu juga pemain yang meletakkan straddle hidup, jika tiada sesiapa raise atau re-straddle selepasnya)

Jika seseorang bertaruh selepas anda cek, anda berdepan keputusan baharu: fold, call atau raise. Cek dahulu kemudian raise apabila lawan bertaruh dipanggil ==check-raise== — ia sepenuhnya sah dalam Texas Hold'em dan senjata standard, bukan helah kotor.

Untuk melihat cara memilih tangan bagi tindakan ini, ikuti [contoh check-raise BB pada flop 652](/ms/blog/low-board-check-raise). Contoh itu membezakan keputusan awal daripada pengiraan berasingan selepas lawan bet.

Untuk gambaran penuh siapa bertindak bila, pusingan demi pusingan, lihat [urutan permainan Texas Hold'em](/ms/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp").

---

## Apa Itu Call dalam Poker? (Cek vs Call)

Call bermaksud anda ==samai pertaruhan semasa dengan tepat== untuk kekal dalam hand. Seseorang bertaruh $10, anda call $10 — tidak lebih, tidak kurang.

Cek vs call ialah kekeliruan pemain baharu yang paling kerap, jadi ini pembahagian yang jelas:

| | Cek | Call |
|-|-------|------|
| Bila wujud | Tiada pertaruhan aktif di hadapan anda (praflop: sebagai big blind, atau sebagai pemain yang meletakkan straddle hidup) | Seseorang sudah bertaruh sebelum anda |
| Kos cip | Percuma | Anda samai pertaruhan semasa |
| Maksudnya | "Saya lepas giliran, masih dalam permainan" | "Saya bayar untuk teruskan" |

Contoh sebenar: anda di flop dengan K♠ 8♦. Tiada sesiapa bertaruh, jadi anda ==cek==. Pemain seterusnya bertaruh $10. Sekarang pilihan anda ialah ==call== $10, ==raise== (kepada $20 atau lebih), atau ==fold==. Pilihan cek sudah tiada — tingkap itu tertutup sebaik sahaja pertaruhan masuk.

---

## Apa Itu Fold dalam Poker — Boleh Fold Bila-bila Masa?

Fold bermaksud anda serahkan kad anda dan keluar daripada hand itu. Anda tidak bayar apa-apa yang baharu, tetapi ==r:setiap cip yang sudah anda masukkan kekal dalam pot==.

Ya — bila-bila masa giliran anda, anda boleh fold, walaupun sebelum bertaruh apa-apa, dan fold itu mengikat. Namun ia bukan tanpa akibat: dalam kejohanan, fold sedangkan tiada pertaruhan di hadapan anda dikira "non-standard fold" di bawah ==WSOP Rule 84== dan boleh menerima amaran. Dan awas perangkap ini: **fold ketika anda boleh cek secara percuma bermakna membuang hand tanpa sebab**. Kalau tiada sesiapa bertaruh, cek sahaja.

Satu adab poker live: jangan fold ==di luar giliran==. Tunggu sehingga aksi sampai kepada anda — fold awal memberi maklumat kepada pemain yang masih membuat keputusan, dan kebanyakan bilik kad akan memberi amaran atau penalti. Mengetahui *bila* fold adalah langkah yang betul ialah kemahiran tersendiri — itu dibincangkan dalam [panduan bila masa untuk fold dalam poker](/ms/blog/holdem-when-to-fold).

---

## Apa Itu Min-Raise? Peraturan Bertaruh & Raise Texas Hold'em

![Infografik peraturan min-raise poker: pertaruhan $6 memerlukan raise kepada sekurang-kurangnya $12, dan raise pre-flop kepada $6 memerlukan re-raise minimum kepada $10](/images/holdem-betting-actions-min-raise.webp "Peraturan min-raise — raise mesti menambah sekurang-kurangnya sebesar pertaruhan atau raise penuh terakhir; hanya all-in boleh lebih kecil")

Dalam No-Limit Hold'em (format yang hampir selalu anda mainkan):

- **Pertaruhan minimum**: 1 big blind
- **Raise minimum (min-raise)**: sekurang-kurangnya ==sebesar pertaruhan atau raise penuh sebelumnya== ditambah di atasnya
- **Maksimum**: keseluruhan stack anda — itulah maksud "no limit"

Dua contoh pengiraan:

| Pusingan | Aksi setakat ini | Raise minimum |
|--------|--------------|---------------|
| Flop | Pemain bertaruh $6 | Tambah $6 → $12 jumlahnya |
| Pre-flop (blind $1/$2) | Pemain raise kepada $6 (kenaikan $4 di atas blind $2) | Tambah $4 → $10 jumlahnya |

Perkara utamanya: min-raise mengikut ==inkremen== pertaruhan atau raise penuh terakhir, bukan big blind. (Perkataan "penuh" penting apabila seseorang all-in kurang daripada satu raise: selepas pertaruhan $10 dan all-in $14, inkremen yang perlu disamai kekal $10, jadi raise terkecil ialah kepada $24.) Pada pre-flop, big blind dikira sebagai pertaruhan pembuka — sebab itulah open-raise terkecil ialah kepada 2 big blind.

Dua peraturan poker live yang datang bersama raise:

1. **Umumkan "raise" sebelum menggerakkan cip.** Sebut "call" kemudian tolak cip tambahan? Pengumuman anda sudah mengikat sejak saat itu (==Rule 90.d==) — lebihannya tidak dikira. ==String bet== yang sebenar lain: bertaruh atau raise dalam beberapa pergerakan yang termasuk kembali ke stack anda **tanpa** mengumumkan "raise" dahulu — atau isyarat mengelirukan yang bertujuan memancing aksi di luar giliran (==Rule 103==).
2. **Satu pergerakan.** Jika anda tidak mengumumkan, cip anda mesti masuk dalam satu pergerakan ke hadapan sahaja.

*Berapa banyak* anda patut raise (open 2.5x, 3-bet 3x, saiz mengikut tekstur board) ialah strategi, bukan peraturan — tempatnya dalam [panduan utama strategi Texas Hold'em](/ms/blog/holdem-strategy). Selepas 3-bet dan call berlaku, [contoh pot 3-bet pada flop AK2](/ms/blog/3bet-pot-cbet) menunjukkan bagaimana range dan stack yang tinggal mempengaruhi keputusan seterusnya.

---

## Berapa Kali Anda Boleh Raise dalam Poker?

Dalam **No-Limit Hold'em: tiada had**. Anda boleh raise, kena re-raise, dan raise semula ("re-raise", "raise atas raise" — benda yang sama) sehingga seseorang kehabisan cip. Raise → 3-bet → 4-bet → 5-bet → all-in ialah urutan yang sah, walaupun menggerunkan.

Dua sempadan masih terpakai:

- Setiap re-raise mesti memenuhi ==peraturan inkremen min-raise== di atas — satu-satunya pengecualian ialah all-in, yang boleh kurang daripada itu
- ==r:Anda tidak boleh raise pertaruhan anda sendiri.== Jika anda bertaruh dan semua orang hanya call, pusingan tamat — anda hanya boleh raise semula jika ada orang raise *anda* dahulu

Dalam permainan **Fixed-Limit**, setiap pusingan ada had (pot "capped"). Peraturan kejohanan WSOP meletakkan had itu pada ==satu pertaruhan tambah empat raise== (Rule 100.b) — dan pengecualiannya berjalan terbalik daripada sangkaan kebanyakan orang: ==r:had itu kekal walaupun tinggal dua pemain sahaja dalam tangan itu==. Ia hanya terbuka apabila **seluruh kejohanan** tinggal dua orang. Dalam cash game peraturan rumah yang berkuasa, jadi tanya pengedar.

---

## Apa Maksud All-In?

All-in bermaksud mempertaruhkan ==semua cip yang anda ada==. Anda boleh melakukannya bila-bila masa giliran anda — sebagai bertaruh, call atau raise.

Jika all-in anda *lebih kecil* daripada pertaruhan semasa, anda tidak terkeluar: anda cuma bersaing untuk ==pot utama== yang dihadkan pada sumbangan anda, manakala cip lebihan daripada stack yang lebih besar membentuk ==side pot== yang anda tidak boleh menang. (Jika ada pemain yang stack-nya lebih pendek daripada anda, anda tetap bermain untuk side pot yang tidak dapat dicapainya — setiap all-in hanya mengehadkan lapisannya sendiri.) Dan all-in yang *kurang daripada satu min-raise penuh* umumnya tidak membuka semula raise untuk pemain yang sudah bertindak — peraturan halus yang mengejutkan pemain tetap sekalipun.

Mekanik penuhnya — kiraan side pot, siapa tunjuk kad dahulu, table stakes — ada dalam [peraturan all-in dan side pot](/ms/blog/holdem-all-in-rules), dan apa yang berlaku apabila hand all-in seri diliputi oleh [peraturan split pot dan chop](/ms/blog/holdem-split-pot-rules).

---

## Mengetahui Aksi Ialah Langkah Pertama — Memilihnya Ialah Strategi

Panduan ini merangkumi apa *itu* setiap aksi dan bila ia *sah*. Yang mana untuk dipilih — bila untuk bertaruh, bila call menguntungkan, bila hand yang bagus mesti di-fold — ialah cabang kemahiran yang lain:

- Menilai kekuatan mentah hand anda dahulu: [kedudukan tangan poker](/ms/blog/holdem-hand-rankings)
- Rangka kerja untuk setiap keputusan: [strategi Texas Hold'em — 5 keputusan](/ms/blog/holdem-strategy)
- Kenapa tempat duduk anda mengubah segalanya: [penjelasan posisi dalam poker](/ms/blog/holdem-positions)

Satu petua yang menjimatkan wang sebenar pemain baharu sehingga tahap itu: ==jika sesuatu hand tidak cukup kuat untuk raise, fold biasanya lebih baik daripada call.==

---

## Kesilapan Pertaruhan Live yang Saya Lihat Setiap Minggu

Saya bermain permainan live taruhan rendah setiap minggu, dan kesilapan aksi yang sama berulang setiap minggu, tanpa gagal:

### Kesilapan 1 — Call ketika anda boleh cek

Pertama bertindak di flop, tiada sesiapa bertaruh, dan pemain baharu menolak cip masuk **tanpa bersuara**, "untuk call". Tiada apa yang hendak di-call: menurut ==WSOP Rule 90.a==, pertaruhan dibuat melalui pengumuman *atau* dengan menolak cip — dia baru sahaja bertaruh tanpa sengaja. Kalau dia *menyebut* "call", ==Rule 90.b.1== menjadikannya cek. Apabila pusingan belum dibuka, cek dan lihat kad secara percuma.

### Kesilapan 2 — "Saya call... eh, raise!"

"Saya call... eh, raise!" Tidak boleh. Dalam poker live aksi anda terkunci sebaik sahaja anda mengumumkannya — mengikut ==Rule 90.d==, pengumuman lisan pada giliran anda adalah mengikat. (Ini bukan string bet; string bet ialah menolak cip dalam beberapa pergerakan seperti dalam FAQ. Hasilnya sama: perkataan pertama yang terpakai.) Saya sudah tak terkira berapa kali melihat pengedar mengira ini sebagai call di tengah ayat. Umumkan "raise" *dahulu*, barulah gerakkan cip.

### Kesilapan 3 — Big blind membuang flop percuma

Semua orang limp, aksi sampai kepada big blind, dan dia fold. Itu flop percuma yang dibuang ke muck. ==g:Jika tiada sesiapa raise, BB boleh cek dan melihat tiga kad tanpa kos tambahan== — blind itu sudah pun hidup. Perkara ini berlaku setiap orbit.

### Kesilapan 4 — Satu cip besar tanpa suara

Berdepan pertaruhan $10, seorang pemain diam-diam campak satu cip $100 sambil mengharapkan baki *dan* raise. ==Peraturan satu cip (one-chip rule)== tertulis begitu dalam peraturan WSOP (==Rule 97==): satu cip besar tanpa pengumuman dikira call sahaja. Untuk raise, perkataan "raise" mesti keluar **sebelum cip menyentuh permukaan meja**.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-all-in-rules | Peraturan All-In & Side Pot | /images/holdem-all-in-rules-hero.webp
/ms/blog/holdem-strategy | 5 Keputusan di Sebalik Poker yang Menang | /images/holdem-strategy-hero.webp
:::

## Soalan Lazim

**Q. Boleh raise selepas cek dalam poker?**

A. Boleh — jika seseorang bertaruh selepas anda cek, anda boleh raise apabila aksi kembali kepada anda. Itulah check-raise, dan ia sah sepenuhnya. Jika semua orang cek selepas anda, tiada pertaruhan untuk di-raise, dan pusingan itu tamat begitu sahaja.

**Q. Boleh raise pertaruhan sendiri?**

A. Tidak boleh. Jika anda bertaruh dan lawan hanya call, anda tidak boleh menambah lagi — pusingan pertaruhan tamat. Dalam No-Limit dan Pot-Limit, anda hanya boleh raise semula jika aksi kembali kepada anda dengan sekurang-kurangnya satu raise penuh di atas pertaruhan anda — sama ada dibuat oleh seorang pemain atau terkumpul daripada beberapa all-in pendek; satu all-in yang kurang daripada raise penuh tidak membuka semula aksi. Dalam Fixed-Limit ambangnya lebih rendah: all-in sekurang-kurangnya 50% daripada satu pertaruhan atau raise penuh sudah membuka semula aksi (TDA 2024 Rule 47-B).

**Q. Berapa kali boleh raise dalam Texas Hold'em?**

A. Dalam No-Limit tiada had bilangan raise — re-raise boleh berterusan sehingga seorang pemain all-in, asalkan setiap raise memenuhi inkremen minimum (all-in boleh kurang daripada itu). Dalam Fixed-Limit, peraturan kejohanan WSOP mengehadkan satu pusingan kepada satu pertaruhan tambah empat raise (Rule 100.b), dan had itu kekal walaupun tinggal dua pemain dalam tangan itu.

**Q. Boleh fold di luar giliran?**

A. Tak patut. Aksi mesti bergerak mengikut arah jam secara teratur, dan fold di luar giliran membocorkan maklumat kepada pemain yang masih membuat keputusan. Kebanyakan bilik kad menganggapnya mengikat dan mungkin memberi amaran atau penalti jika berulang. Tunggu sehingga pemain di sebelah kanan anda sudah bertindak.

**Q. Boleh cek pada pre-flop?**

A. Hanya jika taruhan wajib yang anda letakkan sendiri ialah pertaruhan hidup penuh yang mesti disamai oleh semua pemain lain dan tiada sesiapa raise — biasanya big blind jika tiada sesiapa straddle, atau pemain straddle hidup jika ada (WSOP Live Action Rules 159 · 165): taruhan itu dikira sebagai pertaruhan pembuka anda, jadi anda boleh cek untuk melihat flop secara percuma. Separuh pertaruhan small blind tidak pernah layak, dan dalam pot yang di-straddle, big blind hanyalah seorang lagi pemain yang berdepan pertaruhan — setiap posisi yang tidak meletakkan pertaruhan hidup itu sendiri mesti call, raise atau fold pada pre-flop.

**Q. Boleh raise selepas seseorang all-in?**

A. Bergantung pada saiz all-in itu. Jika all-in itu merupakan raise sah yang penuh, aksi dibuka semula dan anda boleh re-raise — dengan syarat sekurang-kurangnya seorang lawan yang tidak all-in masih dalam hand itu; heads-up menentang all-in, tiada lagi pihak untuk di-raise, jadi anda hanya boleh call atau fold. Jika ia *kurang* daripada satu min-raise penuh, pemain yang sudah bertindak umumnya hanya boleh call atau fold — all-in pendek itu tidak membuka semula raise untuk mereka di kebanyakan bilik kad.

**Q. Apa itu string bet dalam poker?**

A. Cubaan bertaruh atau raise dalam beberapa pergerakan — kembali ke stack anda di antaranya — tanpa mengumumkan "raise" dahulu (==Rule 103==). Pergerakan kedua tidak pernah dikira — hanya cip pertama yang kekal, dinilai terlebih dahulu di bawah peraturan call satu cip dan berbilang cip (TDA 2024 Rules 44–45). Jika ambang separuh minimum Rule 43-A terpakai, ukur kenaikan di atas jumlah call, bukan jumlah keseluruhan cip: kurang daripada separuh pertaruhan atau raise penuh terbesar sebelumnya dikira call; separuh atau lebih mewajibkan min-raise penuh. Pengumuman raise yang dibuat lebih awal atau all-in dinilai di bawah peraturannya sendiri. Rule 103 juga melarang isyarat mengelirukan yang bertujuan memancing aksi di luar giliran sebelum aksi anda sendiri selesai. Menyebut "call" kemudian menambah bukan string bet tetapi pengumuman yang mengikat (==Rule 90.d==) — kesannya sama. Umumkan aksi anda secara lisan atau gerakkan semua cip dalam satu pergerakan.

**Q. Apa maksud limp dalam poker?**

A. Limp ialah masuk ke dalam pot pada pre-flop dengan hanya call big blind dan bukannya raise. Ia sah tetapi biasanya permainan yang lemah — lihat [mengapa limp merugikan anda](/ms/blog/holdem-limping) untuk situasi apabila ia sebenarnya wajar.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peraturan Texas Hold'em untuk Pemain Baharu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Panduan peraturan lengkap — dari blind hingga showdown</div>
  </a>
  <a href="/ms/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Aliran Permainan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Urutan Permainan Texas Hold'em</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pre-flop hingga river dengan contoh hand sebenar</div>
  </a>
  <a href="/ms/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small Blind vs Big Blind Dijelaskan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kenapa anda bayar sebelum melihat kad</div>
  </a>
</div>
`.trim(),
};
