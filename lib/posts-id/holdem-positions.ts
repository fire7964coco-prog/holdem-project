import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Posisi Poker: Nama Setiap Kursi & Bagan",
  seoTitle: "Kursi Anda Berganti Nama Tiap Tangan — Bagan Posisi Poker",
  desc: "Namanya bergerak mengikuti button, bukan kursinya. Setiap nama posisi poker — UTG, hijack, cutoff, button — plus nomor kursi, peta 6-max, dan siapa aksi dulu.",
  tldr: "Posisi poker adalah nama kursi yang diukur dari tombol dealer — UTG, lojack, hijack, cutoff, button, dan blind — dan semuanya bergerak satu kursi searah jarum jam setiap tangan. Preflop, UTG aksi lebih dulu dan big blind terakhir; postflop, small blind aksi lebih dulu dan button terakhir. Nomor kursi fisik tak pernah berpindah; posisi berpindah.",
  category: "strategy",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Tampak atas meja poker profesional yang menunjukkan 9 posisi pemain dengan tumpukan chip dan tombol dealer berwarna emas",
  tags: [
    "posisi poker",
    "nama posisi poker",
    "nomor kursi poker",
    "bagan posisi poker",
    "hijack lojack poker",
    "posisi meja poker",
    "siapa aksi lebih dulu poker",
  ],
  content: `
Cash game live pertama saya, saya duduk di kursi yang belakangan saya tahu bernama UTG. Saya melihat J♥ J♠ dan raise. Hijack call. Cutoff call. Button call. Big blind 3-bet. Saya benar-benar tak tahu harus apa — saya call dan chip saya terkuras di tiga street.

Dua orbit kemudian saya di button dengan J♥ J♠ yang sama. Saya raise. Semua orang fold. Saya menang $14 tanpa pernah melihat flop.

Tangan yang sama. Hasil yang sepenuhnya berbeda. Satu-satunya yang berubah hanyalah kursi saya — dan malam itu saya sadar saya sebenarnya tak tahu kursi-kursi itu *disebut* apa, apalagi apa artinya. Jika Anda masih belajar bagaimana satu tangan penuh mengalir dari deal sampai showdown, mulailah dari [panduan aturan Texas Hold'em](/id/blog/texas-holdem-rules-for-beginners); artikel ini adalah peta kursi yang diasumsikan sudah Anda ketahui oleh panduan itu.

---

> **Jawaban singkat**
> Posisi poker adalah ==kursi bernama yang diukur dari tombol dealer== — UTG, lojack, hijack, cutoff, button, small blind, big blind — dan semuanya ==bergerak satu kursi searah jarum jam setiap tangan== seiring button berpindah. Preflop, UTG aksi lebih dulu dan big blind aksi terakhir. Postflop, small blind aksi lebih dulu dan button aksi terakhir.

---

## Apa Saja Posisi di Meja Poker? (Peta Kursi Lengkap)

Posisi bukanlah kursi — ia adalah **nama untuk tempat Anda duduk relatif terhadap tombol dealer**, dan ia menentukan ==kapan Anda aksi di setiap street==. Karena button berpindah satu kursi searah jarum jam setelah setiap tangan, setiap pemain di meja mengenakan nama yang berbeda di setiap tangan.

Berikut bagan posisi 9-max lengkap — setiap nama kursi, singkatannya, zonanya, dan persis kapan ia aksi sebelum dan sesudah flop:

![Meja poker sembilan pemain dengan tumpukan chip di setiap kursi dan tombol dealer ditandai D di depan salah satu pemain](/images/holdem-button-position-hero.webp "Tombol dealer menentukan posisi setiap kursi dan urutan permainan")

| Kursi | Singkatan | Zona | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Awal | ke-1 (pertama) | ke-3 |
| Under the Gun +1 | **UTG+1** | Awal | ke-2 | ke-4 |
| Under the Gun +2 | **UTG+2** | Awal | ke-3 | ke-5 |
| Lojack | **LJ** | Tengah | ke-4 | ke-6 |
| Hijack | **HJ** | Tengah | ke-5 | ke-7 |
| Cutoff | **CO** | Akhir | ke-6 | ke-8 |
| Button | **BTN** | Akhir | ke-7 | **Terakhir** |
| Small Blind | **SB** | Blind | ke-8 | **ke-1** |
| Big Blind | **BB** | Blind | ke-9 (terakhir) | ke-2 |

Perhatikan pembalikannya: ==blind aksi terakhir preflop tapi pertama postflop==, sementara button aksi terakhir di setiap street postflop. Urutan itulah — bukan kartunya — yang membuat sebagian kursi secara struktural lebih baik daripada yang lain.

> **Catatan meja live:** button adalah cakram fisik yang berpindah satu kursi searah jarum jam setiap tangan. "UTG" adalah siapa pun yang duduk tiga kursi di kiri button pada saat itu — bukan kursi tetap.

---

## Nama & Singkatan Posisi Poker: UTG, LJ, HJ, CO, BTN, SB, BB

Setiap nama posisi yang akan Anda dengar di meja atau baca di artikel strategi, diuraikan:

| Singkatan | Nama lengkap | Grup | Apa yang dirujuk |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Awal (EP) | Pertama aksi preflop, tepat di kiri big blind |
| **UTG+1 / UTG+2** | Under the Gun plus satu / dua | Awal (EP) | Kursi-kursi berikutnya searah jarum jam dari UTG |
| **LJ** | Lojack | Tengah (MP) | Tiga kursi di kanan button |
| **HJ** | Hijack | Tengah (MP) | Dua kursi di kanan button |
| **CO** | Cutoff | Akhir (LP) | Satu kursi di kanan button |
| **BTN** | Button (Dealer) | Akhir (LP) | Kursi dengan cakram dealer — terakhir aksi postflop |
| **SB** | Small Blind | Blind | Kursi pertama di kiri button; memasang taruhan paksa kecil |
| **BB** | Big Blind | Blind | Kursi kedua di kiri button; memasang taruhan paksa penuh |

Anda juga akan melihat label zona yang lebih luas: ==**EP** (posisi awal)== mencakup kursi-kursi UTG, ==**MP** (posisi tengah)== mencakup lojack dan hijack, dan ==**LP** (posisi akhir)== mencakup cutoff dan button. Buku-buku lama menggabungkan lojack dan hijack menjadi "MP1/MP2" — kursi yang sama, label yang berbeda.

Mengetahui namanya adalah langkah pertama. Apa yang sebenarnya *dilakukan* dari masing-masing kursi — range, steal, permainan in-position versus out-of-position — adalah pertanyaan strategi, dan itu dibahas di [panduan strategi posisi](/id/blog/holdem-position-play).

---

## Nomor Kursi Poker vs Posisi — Kursi 1 Bukanlah Sebuah Posisi

Ini membingungkan hampir setiap pemain live pemula: ketika petugas memanggil **"Meja 12, Kursi 5"**, angka itu ==tak ada hubungannya dengan posisi poker==.

Di sebagian besar card room, kursi fisik dinomori dari sisi kiri langsung dealer — ==Kursi 1 secara konvensi adalah kursi pertama di kiri dealer==, dihitung searah jarum jam sampai Kursi 9 atau 10 di kanan dealer. Angka-angka itu terpaku pada kursinya. Staf memakainya untuk logistik: menempatkan pemain baru, mengantar chip, memanggil waktu.

Posisi justru sebaliknya — ia ==berputar satu kursi searah jarum jam setiap tangan== mengikuti button. Kursi 5 mungkin menjadi button di tangan ini, cutoff di tangan berikutnya, dan hijack di tangan setelahnya.

:::compare
Nomor kursi (fisik) | Posisi (poker)
Tetap pada kursi — Kursi 1 biasanya di kiri langsung dealer | Berpindah mengikuti tombol dealer setiap tangan
Dipakai staf: "Kursi 5, chip datang" | Dipakai strategi: "cutoff open"
Tak pernah berubah selama satu sesi | Berubah setiap tangan, satu kursi searah jarum jam
Memberi tahu DI MANA Anda duduk | Memberi tahu KAPAN Anda aksi
:::

Jadi "apa itu Kursi 1 di poker?" punya jawaban yang membosankan — ia sebuah kursi — dan justru itulah intinya. ==Nomor kursi adalah alamat; posisi adalah pekerjaan==, dan pekerjaan itu ditugaskan ulang setiap tangan.

---

## Apa Itu UTG di Poker?

**UTG adalah singkatan dari "Under the Gun"** — kursi tepat di kiri big blind, dan ==pemain pertama yang aksi preflop==. Namanya membangkitkan tekanan dari posisi itu: Anda harus memasang chip sebelum melihat apa yang dilakukan satu pun lawan, seolah aksi di bawah todongan senjata.

Dalam permainan penuh 9 pemain sebenarnya ada tiga kursi "under the gun" — **UTG, UTG+1, dan UTG+2** — dihitung searah jarum jam dari big blind. Hanya kursi pertama yang benar-benar aksi buta; kursi +1 dan +2 setidaknya melihat satu atau dua keputusan lebih dulu.

Itulah definisinya. *Cara memainkan* UTG — kenapa ia menuntut range paling ketat di meja, dan kenapa raise-atau-fold adalah garis standar di sana — dibahas di [panduan strategi posisi](/id/blog/holdem-position-play).

---

## Hijack dan Lojack — dan Kenapa Disebut Begitu

**Hijack (HJ)** adalah kursi dua langkah di kanan button. **Lojack (LJ)** satu lagi lebih jauh, tiga langkah di kanan button. Bersama-sama keduanya membentuk posisi tengah dalam permainan 9-max modern.

Nama-nama itu tak punya asal-usul resmi yang terdokumentasi — slang poker jarang punya — tapi cerita yang umum beredar seperti ini:

- **Hijack:** cutoff dan button adalah kursi klasik pencuri blind. Ketika pemain satu kursi lebih awal raise lebih dulu, ia ==**"membajak" (hijack) steal**== yang hendak dilakukan kursi-kursi akhir — jadi kursi itu sendiri mendapat namanya.
- **Lojack:** muncul belakangan, sebagai ==pelesetan main-main dari "hijack"== — kursi satu tingkat "lebih rendah" dalam hierarki. Kebanyakan cerita juga mendengar gema merek anti-maling LoJack: sebuah hijack, satu tingkat di bawah.

Anggap keduanya sebagai cerita rakyat meja, bukan etimologi. Yang bukan cerita rakyat: hijack dan lojack adalah nama nyata dan standar yang akan Anda lihat di setiap bagan range modern dan situs latihan, itulah kenapa mereka layak dihafal mati.

---

## Cutoff dan Button (Posisi Dealer)

**Cutoff (CO)** adalah kursi ==satu langkah di kanan button== — posisi terakhir sebelum dealer. Dua kisah asal-usul beredar: satu mengatakan kursi itu "memotong" (cut off) peluang button mencuri blind dengan raise lebih dulu; kisah yang lebih tua mengatakan bahwa dalam home game yang dibagi sendiri, pemain di kanan dealer ==memotong dek (cut the deck)== setelah kocokan. Bagaimanapun, namanya melekat, dan cutoff secara universal dihitung sebagai posisi akhir.

**Button (BTN)** — juga disebut **posisi dealer** — adalah kursi yang ditandai cakram dealer fisik. Dalam permainan kasino, dealer profesional yang menangani kartu, jadi button hanya menandai ==siapa yang *akan* membagikan kartu==, dan itulah yang menjadi jangkar urutan taruhan: button aksi ==terakhir di setiap street postflop==, dan segala hal lain di meja dinamai berdasarkan jaraknya dari cakram itu.

Aksi terakhir yang terjamin itulah kenapa button dianggap kursi paling menguntungkan di poker — argumen lengkapnya, dengan angka di baliknya, ada di [panduan strategi posisi](/id/blog/holdem-position-play).

---

## Blind: Kursi SB dan BB

Dua kursi di kiri button adalah posisi *sekaligus* taruhan paksa pada saat yang sama:

- **Small blind (SB):** kursi pertama di kiri button. Memasang taruhan paksa — biasanya setengah big blind — sebelum kartu dibagikan.
- **Big blind (BB):** kursi berikutnya searah jarum jam. Memasang taruhan paksa penuh yang menentukan harga untuk masuk ke tangan.

Sebagai posisi, keduanya didefinisikan oleh pembalikan dalam urutan aksi: blind aksi ==terakhir preflop== (mereka sudah membayar, jadi semua orang lain harus merespons taruhan mereka lebih dulu) tapi ==pertama postflop==, di depan seluruh meja, baik di flop, turn, maupun river.

Kenapa blind ada, berapa biayanya per orbit, dan cara mempertahankannya adalah topik tersendiri — [panduan small blind dan big blind](/id/blog/holdem-blind-meaning) membahas mekanik taruhan paksa dan matematikanya secara lengkap.

---

## Siapa Aksi Lebih Dulu di Poker — Preflop vs Postflop (Apakah Blind Aksi Lebih Dulu?)

Pertanyaan paling sering ditanyakan tentang posisi, dijawab dalam satu tabel:

| Street | Pertama aksi | Terakhir aksi |
|:---|:---|:---|
| **Preflop** | **UTG** — kursi pertama di kiri big blind | **Big blind** — boleh cek atau raise |
| **Flop / Turn / River** | **Small blind** — atau kursi aktif pertama di kiri button | **Button** — atau kursi aktif terdekat sebelumnya |

Jadi — **apakah blind aksi lebih dulu?** ==Preflop, tidak. Postflop, ya.== Sebelum flop, blind sudah memasukkan uang, jadi aksi dimulai dari UTG dan berputar kembali ke mereka terakhir — big blind aksi terakhir dari semua orang. Setelah flop, urutan direset searah jarum jam dari button: small blind bicara lebih dulu, big blind kedua, dan button selalu terakhir.

Dan di antara kedua blind: ==small blind aksi sebelum big blind di setiap street==, baik preflop maupun postflop — dengan satu pengecualian, heads-up, dibahas di bawah.

Satu pertanyaan tetangga yang layak sebaris: pada **showdown**, defaultnya adalah pemain terakhir yang bertaruh atau raise menunjukkan kartu lebih dulu (jika river di-cek sampai habis, kursi aktif pertama di kiri button menunjukkan) — etiket lengkapnya ada di [panduan aturan showdown](/id/blog/holdem-showdown-rules). Untuk urutan lengkap street demi street dalam satu tangan, lihat [urutan permainan](/id/blog/holdem-game-order).

---

## Posisi Poker Berdasarkan Jumlah Pemain: Heads-Up hingga 10 Pemain (6-Max vs Full Ring)

Nama posisi tak berubah menurut ukuran meja — ==mereka terkelupas dari posisi awal lebih dulu== seiring pemain dikurangi. Button, blind, cutoff, dan hijack bertahan paling lama; kursi-kursi UTG hanya ada ketika meja penuh. Berikut petanya dari 2 pemain hingga 10, disusun dalam urutan aksi preflop:

| Pemain | Urutan aksi preflop (pertama → terakhir) |
|:---:|:---|
| **2 (heads-up)** | BTN (memasang small blind) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (kursi "UTG" di sini) → BTN → SB → BB |
| **5** | HJ (kursi "UTG" di sini) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (juga disebut LJ) → HJ → CO → BTN → SB → BB |
| **9 (full ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**Heads-up adalah yang mematahkan intuisi semua orang.** Dengan hanya dua pemain, ==button memasang small blind== — kursi yang sama menjadi BTN dan SB sekaligus. Itu berarti button aksi ==**pertama** preflop== (big blind aksi terakhir, seperti biasa) tapi tetap aksi ==**terakhir** di setiap street postflop==, sementara big blind aksi pertama postflop. Setiap ukuran meja lain mengikuti pola normal; hanya heads-up yang menyatukan kursi terbaik dengan sebuah blind.

**6-max vs full ring** murni pengurangan: tiga kursi tambahan (UTG+1, UTG+2, dan satu kursi tengah) tidak ada, jadi 6-max berjalan UTG → HJ → CO → BTN → SB → BB. Konsekuensi praktisnya adalah ==setiap kursi 6-max bermain "lebih akhir" daripada kursi senama di full ring== — UTG 6-max menghadapi lima lawan, bukan delapan — itulah kenapa range melebar menyeluruh dalam permainan short-handed. Angka kursi demi kursi ada di [panduan strategi posisi](/id/blog/holdem-position-play), dan tangan persis yang mengisi setiap range dipetakan di [bagan starting hands](/id/blog/holdem-starting-hands-chart).

> **Catatan penamaan:** sebagian situs dan card room melabeli kursi 6-max pertama sebagai "LJ" atau "MP" alih-alih UTG, dan kursi tengah 10 pemain kadang muncul sebagai "MP1/MP2". Label bervariasi; urutan aksi tak pernah bervariasi.

---

:::readnext[Lanjut membaca]
/id/blog/holdem-position-play | Strategi Posisi: In vs Out of Position | /images/holdem-position-play-hero.webp
/id/blog/holdem-starting-hands-chart | Bagan Starting Hands Berdasarkan Posisi | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. Apa arti UTG di poker?**

A. UTG adalah singkatan dari "Under the Gun" — kursi tepat di kiri big blind, dan pemain pertama yang aksi preflop. Namanya membangkitkan tekanan memasang chip sebelum melihat keputusan lawan mana pun. Dalam permainan full-ring, dua kursi berikutnya disebut UTG+1 dan UTG+2.

**Q. Apa itu hijack di poker?**

A. Hijack (HJ) adalah kursi dua langkah di kanan tombol dealer, tepat sebelum cutoff. Ia adalah yang lebih akhir dari dua kursi posisi tengah dalam permainan 9-max dan kursi kedua yang aksi preflop di 6-max. Cerita yang umum di balik namanya: raise dari kursi ini "membajak" (hijack) steal blind yang siap dilakukan cutoff dan button.

**Q. Apa itu lojack di poker?**

A. Lojack (LJ) adalah kursi tiga langkah di kanan button — yang lebih awal dari dua kursi posisi tengah di 9-max. Di 6-max ia adalah kursi pertama yang aksi, di mana biasanya cukup disebut UTG. Namanya umumnya diceritakan sebagai pelesetan main-main dari "hijack" (satu kursi lebih rendah), sering dikaitkan dengan merek anti-maling LoJack — cerita rakyat meja, bukan etimologi terdokumentasi.

**Q. Siapa yang aksi lebih dulu, small blind atau big blind?**

A. Small blind aksi sebelum big blind di setiap street. Preflop, kedua blind aksi terakhir (big blind paling akhir, dengan opsi cek atau raise); postflop, small blind adalah kursi pertama yang aksi di meja. Satu pengecualian adalah heads-up, di mana button memasang small blind dan big blind aksi pertama postflop.

**Q. Ada berapa posisi di poker 6-max?**

A. Enam: UTG (juga disebut lojack), hijack, cutoff, button, small blind, dan big blind. Dibandingkan meja 9-max, UTG+1, UTG+2, dan satu kursi tengah cukup tidak ada — nama dihapus dari posisi awal lebih dulu, jadi setiap kursi yang tersisa bermain "lebih akhir" daripada kursi senama di full ring.

**Q. Apakah posisi poker berubah setiap tangan?**

A. Ya. Tombol dealer berpindah satu kursi searah jarum jam setelah setiap tangan, dan karena semua posisi dinamai berdasarkan jaraknya dari button, posisi setiap pemain bergeser satu kursi setiap tangan. Sepanjang satu orbit penuh Anda akan memegang setiap posisi di meja tepat sekali.

**Q. Apa itu Kursi 1 di poker?**

A. Kursi 1 adalah kursi fisik, bukan posisi — di sebagian besar card room ia adalah kursi pertama di kiri langsung dealer, dengan nomor berjalan searah jarum jam sampai Kursi 9 atau 10. Staf memakai nomor kursi untuk penempatan dan logistik. Posisi poker (UTG, button, blind) berputar sendiri setiap tangan, jadi Kursi 1 bisa menjadi posisi mana pun.

---

## Poin Penting

1. **Posisi adalah nama, bukan kursi.** Setiap kursi dinamai berdasarkan jaraknya dari tombol dealer, dan setiap nama berpindah satu kursi searah jarum jam setiap tangan.
2. **Bagan dalam satu baris:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. Preflop dimulai dari UTG dan berakhir di big blind; postflop dimulai dari small blind dan berakhir di button.
3. **Nomor kursi ≠ posisi.** Kursi 1 secara konvensi adalah kiri langsung dealer dan tak pernah berpindah; posisi berputar setiap tangan. Yang satu adalah alamat, yang lain adalah pekerjaan.
4. **Ukuran meja mengurangi dari depan.** 6-max membuang kursi-kursi awal; heads-up menyatukan button dengan small blind — pertama aksi preflop, terakhir aksi postflop.

Begitu namanya jadi refleks, keunggulan sesungguhnya datang dari apa yang Anda lakukan dengannya — [cara memainkan setiap posisi](/id/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"), dari opening range sampai permainan in-position versus out-of-position, adalah bacaan berikutnya. Dari sana, [bagan starting hands](/id/blog/holdem-starting-hands-chart) memetakan tangan persis ke kursi persis, dan [panduan peringkat kartu](/id/blog/holdem-hand-rankings) memutuskan apa yang sebenarnya menang di showdown.

---

## Postingan Terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Panduan Pemula</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Aturan Texas Hold'em untuk Pemula</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Bagaimana satu tangan penuh berjalan dari deal sampai showdown</div>
  </a>
  <a href="/id/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategi Posisi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Strategi In vs Out of Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Opening range dan apa yang dilakukan dari setiap kursi</div>
  </a>
  <a href="/id/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Urutan Permainan</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Urutan Permainan di Texas Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Urutan aksi preflop → flop → turn → river</div>
  </a>
  <a href="/id/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blind</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small Blind & Big Blind Dijelaskan</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kenapa mereka ada dan cara memainkannya dengan benar</div>
  </a>
</div>
`.trim(),
};

export default POST;
