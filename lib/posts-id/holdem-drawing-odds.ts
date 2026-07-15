import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Drawing odds di poker — peluang flop dan menyelesaikan setiap tangan",
  seoTitle: "Berapa peluang Anda benar-benar flop? — Drawing odds poker",
  desc: "Peluang nyata flop set, flush, quads, dan setiap draw di Hold'em — dengan kombinatorika sesungguhnya dan matematika set mining yang dilewatkan halaman teratas.",
  tldr: "Anda flop set dengan pocket pair 11,8% dari waktu (7,5:1 melawan), flop flush dengan dua kartu suited hanya 0,84%, dan menyelesaikan flush draw yang di-flop hingga river 35% dari waktu. Setiap angka di bawah diturunkan dari deck, bukan ditebak.",
  category: "odds",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "12 mnt",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "Pocket pair kecil di samping tumpukan chip di atas felt hijau saat flop dibagikan, momen call set mining terbayar atau meleset",
  tags: ["drawing odds", "peluang flop set", "peluang flop flush", "peluang flop quads", "set mining", "peluang dibagikan pocket aces", "poker flop odds", "texas holdem drawing odds"],
  content: `
Tangan yang membuat saya menghafal ini mati-matian: saya call sebuah raise dengan pocket fives, flop set saya, menghabiskan stack lawan yang pegang aces, dan teman saya bertanya bagaimana saya "tahu" harus call. Saya tidak *tahu* — saya tahu angkanya. ==Anda flop set kira-kira 1 dari 8,5 kali==, dan stack cukup dalam untuk membayar saya saat itu terjadi. Pecahan tunggal itu mengubah call yang "terasa hoki" menjadi call yang profit.

Itulah drawing odds sebenarnya: bukan keberuntungan, melainkan ==matematika tetap dari deck 52 kartu==. Seberapa sering Anda flop set, flop flush, menyelesaikan draw hingga river — setiap angka ini bisa Anda turunkan, dan pemain yang menang sudah menghafalnya. Panduan ini adalah ==g:probabilitas di balik flop dan draw==, masing-masing dengan kombinatorika sesungguhnya agar Anda bisa melihat *mengapa* angkanya seperti itu. Ini pendamping [tabel odds dan probabilitas poker lengkap](/id/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); begitu Anda tahu peluang di sini, [menghitung outs](/id/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") dan [pot odds](/id/blog/holdem-pot-odds) mengubahnya menjadi keputusan.

---

### Angka yang harus tertanam

:::stripe
11,8% | Flop set dengan pocket pair
0,84% | Flop flush jadi dengan dua kartu suited
35% | Menyelesaikan flush draw yang di-flop hingga river
407:1 | Flop quads dengan pocket pair
:::

---

## Siklus hidup flop: satu tabel yang dipecah setiap halaman odds

Inilah tabel yang tak dibuat siapa pun di satu tempat. Kebanyakan situs memberi tahu peluang *flop* sebuah tangan di satu halaman dan peluang *menyelesaikan draw* di halaman lain — tapi di meja itu satu cerita yang berkesinambungan. Anda dibagikan dua kartu, Anda flop sesuatu yang jadi **atau** sebuah draw, dan kalau itu draw Anda menyelesaikannya atau tidak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pegangan | Flop jadi | Flop draw-nya | Selesaikan draw hingga river |
|:---|:---:|:---|:---|
| Pocket pair → set | 11,8% (7,5:1) | — | set→boat 33% hingga river |
| Dua suited → flush | 0,84% (118:1) | 10,9% flush draw | 35% (9 outs) |
| Connectors → straight | 1,3% (76:1) | ~10% OESD | 31,5% (8 outs) |
| Dua unpaired → pair | ~32% | — | — |
| Pocket pair → quads | 0,245% (407:1) | — | — |

</div>

Baca menyeberang satu baris dan Anda melihat seluruh siklus hidup sebuah tangan. Dua kartu suited hampir tak pernah flop flush *jadi* (0,84%) — tapi mereka flop **flush draw** tiga belas kali lebih sering (10,9%), dan draw itu sampai di river 35% dari waktu. Mencampuradukkan ketiga angka itu adalah kesalahan odds yang paling umum, jadi kita akan pisahkan masing-masing di bawah dengan matematikanya ditampilkan.

---

## Peluang flop set (dan matematika set mining)

![Infografik tombol dealer emas dan dua kartu tertutup di atas flop K♦ 7♣ 2♠ — momen sebuah call set mining diputuskan](/images/holdem-button-dealer-board.webp "Flop memutuskan call set mining: kena two-outer 11,8% dari waktu, atau fold dan tunggu pair berikutnya")

**Anda flop set (atau lebih baik) dengan pocket pair 11,8% dari waktu — kira-kira 1 dari 8,5, atau 7,5:1 melawan.** Ini angka drawing terpenting dalam permainan, karena inilah seluruh dasar *set mining*: call sebuah raise dengan pair kecil murni untuk flop three of a kind.

Dari mana 11,8% berasal? Pegang pocket pair dan ada dua kartu tersisa di deck yang memasangkan Anda. Flop adalah tiga kartu ditarik dari 50 yang tak bisa Anda lihat. Cara bersih menghitungnya adalah mundur — peluang Anda **meleset** dari ketiganya:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Langkah | Matematika |
|------|------|
| Flop yang meleset dari pair Anda | C(48,3) = 17.296 |
| Total flop yang mungkin | C(50,3) = 19.600 |
| Peluang Anda meleset | 17.296 ÷ 19.600 = 88,2% |
| **Peluang Anda flop set** | **1 − 0,882 = 11,8%** |

</div>

### Kapan set mining benar-benar terbayar

Flop set 11,8% dari waktu berarti Anda **meleset 88% dari waktu** dan fold. Untuk profit, 12% yang Anda kena harus membayar semua kali Anda meleset. Titik impas adalah 7,5:1 — jadi kalau Anda call untuk set mining, Anda ingin pot ditambah yang bisa Anda menangkan di street berikutnya bernilai **setidaknya 7,5×** call Anda, dan dalam praktik ==g:15:1 atau lebih baik== untuk menutupi kali set Anda tak dibayar atau di-outdraw.

:::tip[Aturan praktisnya: hanya call sebuah raise untuk set mining kalau effective stack kira-kira 15-20× harga call. Stack dalam membuat pair kecil jadi emas; stack pendek membuatnya sampah. Pair-nya tak berubah — implied odds-nya yang berubah.]:::

Set mining adalah play [implied odds](/id/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") paling murni yang ada — peluang kecil memenangkan pot besar nanti. Kerangka lengkapnya — rumus, kelipatan stack per draw, dan reverse implied odds — ada di panduan itu.

Dua angka terkait yang sering ditanyakan:

- **Kena set hingga river** (dari preflop, melihat kelima kartu board) adalah ==**19,2%**== — 1 − C(48,5)/C(50,5). Lebih tinggi dari angka flop karena Anda mendapat dua kartu lagi, tapi Anda tak bisa mengandalkan mencapai river dengan murah, itulah mengapa angka flop yang menentukan set mining.
- **Set over set** — Anda flop set dan kalah dari yang lebih besar — tak punya satu angka tetap karena tergantung berapa banyak lawan pegang pair, tapi dengan dua pemain sama-sama pegang pair angkanya mendarat dekat ~1%. Inilah cooler klasik: matematika ada di pihak Anda sepanjang jalan.

---

## Peluang flush: jadi vs draw vs selesai

![Ace-king hati dengan flop queen-seven hati di atas felt hijau, sebuah flush draw sembilan-out yang di-flop di samping tumpukan chip pendek](/images/holdem-drawing-odds-flush-draw.webp "Dua hati di tangan, dua di flop — sebuah flush draw, bukan flush jadi: 10,9% untuk flop, 35% untuk selesai hingga river")

Di sinilah para pesaing mengaburkan tiga angka yang sama sekali berbeda. Dengan dua kartu suited di tangan Anda, ada **tiga pertanyaan terpisah**, dan mereka berselisih satu orde besaran:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pertanyaan | Peluang | Matematikanya |
|:---|:---:|:---|
| Flop **flush jadi** (3 dari jenis Anda) | 0,84% · 118:1 | C(11,3) ÷ C(50,3) = 165 ÷ 19.600 |
| Flop **flush draw** (2 lagi dari jenis Anda) | 10,9% · 8:1 | C(11,2)×39 ÷ C(50,3) = 2.145 ÷ 19.600 |
| **Selesaikan** flush draw yang di-flop hingga river | 35,0% · 1,9:1 | 1 − C(38,2) ÷ C(47,2) |

</div>

Jadi kalimat jujurnya: dua kartu suited flop **draw** jauh lebih sering daripada flush jadi, dan draw itu peluang ala lempar-koin 35% untuk sampai di sana. Mengejar setiap tangan suited "demi flush" mengabaikan bahwa Anda akan flop flush jadi kurang dari sekali per 100 tangan.

Angka penyelesaian terpecah per street, yang penting begitu masih ada taruhan tersisa:

- **Flop → river (kedua kartu):** 35,0% — pakai ini hanya saat Anda all-in di flop.
- **Flop → turn (satu kartu):** 9 ÷ 47 = 19,1%.
- **Turn → river (satu kartu):** 9 ÷ 46 = 19,6%.

Sebuah flush **backdoor** (runner-runner) — Anda flop hanya *satu* kartu ekstra dari jenis Anda dan butuh turn maupun river jadi jenis Anda — muncul sekitar 4,2%, kira-kira senilai satu out ekstra dari equity. Bukan alasan untuk call, tapi pemecah seri nyata di spot yang ketat. Untuk mengubah salah satunya jadi call atau fold, jalankan angkanya lewat [cara menghitung pot odds](/id/blog/holdem-pot-odds).

---

## Peluang straight: flop satu vs draw ke satu

![Sebuah straight eight-high tersusun berurutan di atas felt hijau, tangan jadi yang dikejar sebuah open-ended draw](/images/holdem-reading-straight-example.webp "Sebuah open-ended straight draw terisi dari ujung mana pun — delapan outs, 31,5% untuk selesai hingga river")

Connectors seperti 8♠7♠ punya siklus hidupnya sendiri. Anda akan **flop straight jadi hanya 1,3%** dari waktu (76:1) — lebih langka dari dugaan kebanyakan pemain. Jauh lebih sering Anda flop sebuah **draw**:

- **Open-ended straight draw (OESD):** ~10% dari flop dengan connectors. Delapan outs, selesai **31,5%** hingga river — 1 − C(39,2)/C(47,2) — atau 17% pada satu kartu mana pun.
- **Gutshot (inside) straight draw:** empat outs, selesai **16,5%** hingga river, 8,5% pada satu kartu. Setengah equity dari open-ender, itulah mengapa connectors yang sama bermain sangat berbeda tergantung flop.

Perhatikan OESD (31,5%) dan flush draw (35%) berdekatan — keduanya "satu draw besar", keduanya kira-kira sepertiga untuk kena hingga river. Itulah jalan pintas yang layak diinternalisasi: sebuah draw besar normal kira-kira ==**satu dari tiga**== untuk selesai hingga river, dan itu terbelah jadi kira-kira satu dari enam pada satu street.

---

## Flop langka: quads, trips, full house & straight flush

Inilah angka di balik malam terbaik (dan terburuk) hidup poker Anda. Masing-masing adalah soal kombinatorika bersih atas 19.600 flop yang mungkin:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop ini | Pegangan | Peluang | Matematikanya |
|:---|:---|:---:|:---:|
| **Quads** | Pocket pair | 0,245% · 407:1 | 48 ÷ 19.600 |
| **Full house** | Pocket pair | 0,98% · 101:1 | 192 ÷ 19.600 |
| **Trips** | Dua kartu unpaired | 1,35% · 73:1 | 264 ÷ 19.600 |
| **Straight flush** | Suited connectors | 0,02% · ~4.900:1 | 4 ÷ 19.600 |

</div>

Satu perbedaan krusial yang rutin dikacaukan halaman teratas: sebuah **set** adalah pocket pair plus satu kartu board yang cocok (11,8%), sedangkan **trips** adalah satu kartu hole *unpaired* yang di-pair-kan board dua kali (1,35%). Three of a kind yang sama di atas kertas, peluang dan playability yang jauh berbeda — set tersamar, trips terlihat jelas. Jangan biarkan siapa pun bilang keduanya bentuk yang sama.

Angka straight flush adalah yang pantas dibingkai: dengan suited connectors ada tepat **empat** flop yang membentuknya (satu rangkaian di jenis Anda), jadi 4 ÷ 19.600 ≈ 1 dari 4.900. Itulah mengapa straight flush yang di-flop jadi cerita yang diceritakan orang selama satu dekade.

Angka full house menghitung setiap cara flop memberi Anda boat dengan pocket pair — termasuk flop yang muncul sebagai trips dari rank lain di atas pair Anda — itulah mengapa terbaca 0,98% bukan ~0,73% yang lebih sempit yang dikutip beberapa tabel untuk "set plus board pair" saja.

---

## Peluang dibagikan tangan Anda

Sebelum semua di atas, ada pembagiannya. Dengan **1.326 kombinasi dua-kartu yang mungkin**, inilah seberapa sering tangan yang orang tanyakan datang:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Dibagikan ini | Peluang | Seberapa sering |
|:---|:---:|:---:|
| Pocket aces (pair spesifik) | 220:1 · 0,45% | 6 ÷ 1.326 |
| Pocket pair apa pun | 16:1 · 5,9% | 78 ÷ 1.326 |
| A-K suited | 331:1 · 0,3% | 4 ÷ 1.326 |
| Dua kartu suited | 3,25:1 · 23,5% | hampir setiap tangan ke-4 |

</div>

Yang satu ini mengejutkan orang: kalau **Anda** pegang aces di meja 10-handed, peluang pemain *kedua* juga pegang aces kira-kira **1 dari 136** (sembilan lawan masing-masing 1 ÷ C(50,2) = 1/1.225). Langka, tapi persis inilah cooler aces-vs-aces yang menguras stack dan disalahkan pada software "rigged". Itu cuma deck-nya. Untuk tangan mana dari 1.326 itu yang layak dimainkan dari tiap kursi, pelajari [tabel starting hands per posisi](/id/blog/holdem-starting-hands-chart).

---

:::readnext[Lanjut membaca]
/id/blog/holdem-outs | Cara menghitung outs di poker | /images/holdem-outs-hero.webp
/id/blog/holdem-pot-odds | Cara menghitung pot odds | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. Berapa peluang flop set?**

A. Sekitar 11,8%, atau 1 dari 8,5, saat Anda pegang pocket pair — biasanya dikutip sebagai "7,5:1 melawan". Ia berasal dari 1 − C(48,3)/C(50,3): dari 19.600 flop yang mungkin, 17.296 meleset dari pair Anda. Angka itu adalah seluruh dasar apakah set mining sebuah pair kecil menguntungkan.

**Q. Mengapa orang bilang 7,5:1 tapi juga 1 dari 8?**

A. Keduanya odds yang sama dinyatakan dua cara. "7,5:1 melawan" menghitung meleset versus kena (7,5 meleset per satu kena), yang berujung 1 kena per 8,5 percobaan — yaitu kira-kira 1 dari 8,5, atau 11,8%. "Odds melawan" dan "1 dari N" selalu menggambarkan probabilitas yang sama; jangan menjumlahkannya.

**Q. Apa beda set dan trips?**

A. Sebuah set adalah pocket pair plus satu kartu cocok di board — Anda flop itu 11,8% dari waktu dan tersembunyi rapi. Trips adalah satu kartu hole unpaired yang di-pair-kan board (dua kartu board cocok) — hanya 1,35% di flop, dan jauh lebih jelas bagi lawan. Rank three of a kind yang sama, peluang dan nilai yang sangat berbeda.

**Q. Berapa peluang flop flush?**

A. Hanya 0,84% (kira-kira 118:1) dengan dua kartu suited — itulah C(11,3)/C(50,3). Jangan kelirukan dengan flop flush *draw*, yang 10,9%, atau *menyelesaikan* draw itu hingga river, yang 35%. Dua kartu suited flop draw tiga belas kali lebih sering daripada flush jadi.

**Q. Kalau saya flop flush draw, berapa peluang saya menyelesaikannya?**

A. Sekitar 35% hingga river dengan sembilan outs (1 − C(38,2)/C(47,2)) — sedikit lebih baik dari satu dari tiga. Pada satu kartu itu kira-kira 19%: 9/47 flop-ke-turn, 9/46 turn-ke-river. Pakai angka satu-kartu kapan pun masih ada taruhan yang akan datang.

**Q. Berapa peluang flop quads?**

A. 0,245%, atau 407:1, memegang pocket pair — ada tepat 48 flop (dua kartu terakhir Anda yang cocok plus kartu ketiga apa pun, C(48,1)) dari 19.600. Flop straight flush bahkan lebih langka pada kira-kira 1 dari 4.900.

**Q. Berapa peluang dibagikan pocket aces?**

A. 220:1 (0,45%) untuk aces spesifik — 6 dari 1.326 kombinasi awal. Pocket pair apa pun jauh lebih umum pada 16:1 (5,9%). Dan kalau Anda pegang aces di meja penuh, pemain lain yang juga pegang aces kira-kira 1 dari 136.

**Q. Berapa peluang set over set?**

A. Tak ada satu angka tetap — tergantung berapa banyak lawan pegang pocket pair — tapi saat dua pemain sama-sama punya pair dan sama-sama flop set, itu kira-kira 1%. Inilah cooler pamungkas: Anda flop set hanya 11,8% dari waktu sejak awal, jadi dua di antara Anda melakukannya di board yang sama adalah cerita, bukan kesalahan.

---

## 3 hal yang harus diingat

1. **Flop set: 11,8% (7,5:1).** Angka yang menentukan setiap call set mining — hanya call cukup dalam agar dibayar 15× atau lebih saat Anda kena.
2. **Jadi vs draw vs selesai adalah angka berbeda.** Dua kartu suited flop flush jadi 0,84%, flush draw 10,9%, dan menyelesaikan draw itu 35%. Jangan pernah mengutip yang keliru.
3. **Sebuah draw besar kira-kira satu dari tiga hingga river.** Flush draw 35%, open-ender 31,5% — dan kira-kira satu dari enam pada satu street.

Setiap angka di sini datang langsung dari deck, bukan firasat. Bawa ini ke [cara menghitung outs](/id/blog/holdem-outs) untuk membangun angkanya secara real time, lalu [pot odds](/id/blog/holdem-pot-odds) untuk mengubahnya jadi call atau fold — atau kembali ke [tabel odds dan probabilitas poker lengkap](/id/blog/holdem-probability) untuk setiap angka tangan-jadi dan long-shot di satu tempat.

---

## Postingan terkait

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/id/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tabel odds &amp; probabilitas poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Setiap angka tangan-jadi dan long-shot di satu tempat</div>
  </a>
  <a href="/id/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara menghitung outs di poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ubah peluang ini jadi hitungan out langsung</div>
  </a>
  <a href="/id/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Matematika</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cara menghitung pot odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Apakah harganya pas untuk draw Anda?</div>
  </a>
  <a href="/id/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tangan Awal</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Bagan Tangan Awal per Posisi</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Pair dan tangan suited mana yang layak di-draw</div>
  </a>
</div>
`.trim(),
};

export default POST;
