import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "Apa Itu Kicker dalam Poker — Peraturan, Kiraan & As yang Didominasi",
  seoTitle: "A9 Kalah kepada AK? — Maksud & Peraturan Kicker Poker",
  desc: "Board keluar As, tetapi A9 anda kalah kepada AK? Itulah kuasa kicker. Tangan mana yang ada kicker, berapa banyak, dan pengecualian Four of a Kind.",
  tldr: "Kicker ialah kad sampingan tertinggi yang bukan sebahagian daripada tangan utama anda — ia memecahkan seri apabila dua pemain memegang tangan yang sama nilainya. High Card guna 4 kicker, Pair 3, Two Pair 1, Three of a Kind 2; Straight, Flush, Full House dan Straight Flush tiada kicker. Itulah sebabnya AK menang ke atas AQ apabila board berpasangan dengan As.",
  category: "hand-rankings",
  date: "2026-09-27",
  updated: "2026-09-27",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 minit",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Dua pemain membuka A-K dan A-Q di showdown dengan As di board — kicker K menentukan siapa memenangi pot",
  tags: ["kicker poker", "poker kicker", "what is a kicker in poker", "poker kicker rules", "kicker card", "ace kicker", "does a flush have a kicker", "kicker dalam poker"],
  content: `
Tangan yang akhirnya mengajar saya apa itu kicker telah menelan satu buy-in penuh. Saya memegang ==b:A♠ 9♣==, board berpasangan dengan As saya, dan saya shove kerana menyangka top pair itu emas. Dia membuka ==b:A♥ K♦== — sepasang As yang sama, tetapi K miliknya mengatasi kicker saya, dan pot meluncur ke arahnya. Saya tidak kalah kepada *tangan* yang lebih baik; saya kalah kepada ==kad sampingan== yang lebih baik. Kad sampingan itulah kicker, dan ia menentukan lebih banyak pot daripada yang disedari oleh mana-mana pemula.

==Kicker ialah pemecah seri yang terbina dalam poker itu sendiri — apabila dua pemain memegang tangan yang sama nilainya, kad baki yang tertinggi menang.== Kebanyakan panduan memberi anda definisi satu baris dan satu contoh AK lawan AQ. Panduan ini memberi gambaran penuh: tangan mana yang ada kicker (dan berapa banyak), satu pengecualian yang semua orang tersilap, dan mengapa "playing the board" bermakna kicker anda tiba-tiba langsung tidak penting.

Kedudukan kicker dalam gambaran besar [susunan kad poker](/ms/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") adalah mudah: ia hanya muncul *selepas* dua pemain seri pada kedudukan tangan — ia tidak pernah mengalahkan tangan yang berkedudukan lebih tinggi.

---

### Ringkasan pantas

:::stripe
4 | Kicker dalam tangan high card
3 | Kicker dalam tangan one pair
1 | Kicker dalam two pair (dan quads)
0 | Kicker dalam straight, flush, full house atau straight flush
:::

---

## Apa Itu Kicker dalam Poker?

**Kicker ialah kad tertinggi dalam tangan lima kad anda yang bukan sebahagian daripada kombinasi tangan anda — ia menentukan pemenang apabila dua pemain memegang tangan yang sama nilainya.** Ia juga dipanggil "kad sampingan" (side card). Poker sentiasa permainan lima kad (lima kad terbaik anda daripada tujuh dalam Hold'em), jadi sebaik sahaja pair atau trips anda terkunci, tempat yang berbaki diisi oleh kicker.

Idea utamanya: kicker ==tidak pernah mengalahkan tangan yang berkedudukan lebih tinggi.== Sepasang K dengan kicker 2 masih menghancurkan sepasang 10 dengan kicker As — kedudukan tangan dahulu, kicker hanya sebagai pemecah seri. Kicker hanya penting apabila ==r:nilai tangan betul-betul sama==: pair lawan pair yang sama, trips lawan trips yang sama.

Katakan anda memegang A-K dan lawan anda memegang A-Q, dan board berpasangan dengan As. Anda berdua ada "sepasang As" — nilai yang sama. Sekarang kad sampingan yang menentukan, dan K anda mengatasi Q mereka. Tiada sesiapa yang membentuk tangan lebih baik; kicker hanya menjalankan tugasnya secara senyap.

---

## Tangan Poker Mana yang Ada Kicker — dan Mana yang Tiada?

**Hanya tangan yang menggunakan kurang daripada lima kad untuk kombinasinya mempunyai kicker — semua tangan yang mengisi kelima-lima kad dengan sendirinya tiada kicker.** Inilah jadual yang disorokkan oleh pesaing dalam perenggan panjang. Ini ringkasannya sekali imbas:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan | Ada kicker? | Kad kicker |
|:---|:---:|:---:|
| High card | Ya — kelima-lima dibandingkan mengikut urutan | 4 |
| One pair | ✅ Ya | 3 |
| Two pair | ✅ Ya | 1 |
| Three of a kind | ✅ Ya | 2 |
| Four of a kind | ✅ Ya (jarang penting) | 1 |
| Straight | ❌ Tidak | — |
| Flush | ❌ Tidak* | — |
| Full house | ❌ Tidak | — |
| Straight flush / Royal flush | ❌ Tidak | — |

</div>

Logiknya semata-mata aritmetik: **kad kombinasi + kicker sentiasa berjumlah lima.** One pair menggunakan 2 kad, jadi 3 kicker mengisi bakinya. Straight, flush, full house atau straight flush sudah menggunakan kelima-lima kad, jadi tiada apa-apa lagi untuk dijadikan kicker — dua straight atau dua full house ditentukan oleh nilai kad *di dalamnya*, bukan oleh kad sampingan.

==*Flush ialah tanda bintangnya:== secara teknikal flush tiada "kicker". Apabila dua flush bertembung, anda membandingkan kelima-lima kad dari tertinggi ke terendah (flush ber-As tinggi mengalahkan flush ber-K tinggi). Ramai yang secara longgar memanggil kad teratas sebagai "kicker", tetapi secara tepatnya ia perbandingan high card lima kad. Urutan pemecah seri penuh bagi setiap tangan ada dalam [cara seri dipecahkan dalam poker](/ms/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Berapa Banyak Kicker bagi Setiap Tangan?

**High card menggunakan empat kicker, one pair tiga, three of a kind dua, manakala two pair dan four of a kind hanya satu.** Mengetahui bilangannya memberitahu anda sejauh mana sesuatu pemecah seri boleh berlanjutan — dan tangan mana yang tidak akan pernah dipisahkan oleh kad sampingan langsung.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Tangan | Kombinasi | + Kicker | = 5 kad |
|:---|:---:|:---:|:---:|
| High card | 1 | 4 | ✅ |
| One pair | 2 | 3 | ✅ |
| Three of a kind | 3 | 2 | ✅ |
| Two pair | 4 | 1 | ✅ |
| Four of a kind | 4 | 1 | ✅ |

</div>

Ini penting di showdown kerana kicker dibandingkan ==mengikut urutan, bermula dengan yang tertinggi.== Dengan one pair, jika kicker pertama seri, anda beralih kepada kicker kedua, kemudian ketiga. Dua pemain boleh memegang pair yang sama *dan* kicker teratas yang sama, tetapi masih dipisahkan oleh kad ketiga — itulah sebabnya "kicker saya bagus" tidak selalunya cukup bagus.

---

## AK lawan AQ: Bagaimana Kicker Menentukan Pemenang?

Kita jalankan kad demi kad supaya mekanismenya jelas: apabila kedua-dua pemain membentuk sepasang As yang sama, kicker dibandingkan satu demi satu dari yang tertinggi, dan perbezaan pertama menentukan pemenang.

Board ialah ==b:A♣ 9♦ 5♠ 2♥ 7♣==. Anda memegang ==b:A♠ K♠==, lawan anda memegang ==b:A♦ Q♦==.

- **Anda:** A♠ K♠ + board → sepasang As. Lima kad terbaik = ==g:A♠ A♣ K♠ 9♦ 7♣== (sepasang As, kicker K-9-7).
- **Lawan:** A♦ Q♦ + board → juga sepasang As. Lima kad terbaik = ==A♦ A♣ Q♦ 9♦ 7♣== (kicker Q-9-7).

Pair yang sama, jadi bandingkan kicker dari atas ke bawah: ==g:K anda mengalahkan Q mereka.== Anda menang, A-A-K-9-7 mengatasi A-A-Q-9-7. Kad 9 dan 7 langsung tidak terlibat — kicker pertama sudah menyelesaikannya.

:::note[Perhatikan kedua-dua tangan berkongsi 9 dan 7 dari board. Kicker juga boleh datang dari board: jika kad sampingan tertinggi ialah kad komuniti, ia mengisi tangan *kedua-dua* pemain dan kad seterusnya yang menentukan. Hole card (dua kad peribadi anda) hanya menjadi kicker jika ia mengatasi kad yang sudah ada di board.]:::

---

## Bilakah Kicker Anda Tidak Dikira? Playing the Board

**Jika hole card anda tidak dapat memperbaiki apa yang sudah dibentuk oleh lima kad komuniti, anda sedang "playing the board" — dan kad sampingan anda berhenti menentukan apa-apa.** Setiap pemain yang tidak dapat memperbaikinya menggunakan lima kad yang serupa — dan jika tiada sesiapa yang dapat, pot dibahagi.

Board ialah ==b:10♠ J♦ Q♣ K♥ A♠== — straight 10 hingga As yang sudah siap (Broadway), dengan suit bercampur jadi flush tidak mungkin.

- Anda memegang ==b:2♣ 3♦==. Lima kad terbaik anda ialah straight di board; 2 dan 3 tidak menambah apa-apa.
- Lawan anda memegang ==b:4♥ 5♦==. Cerita yang sama — straight di board juga lima kad terbaik mereka.

Tiada sesiapa antara anda berdua boleh pergi lebih tinggi daripada As, jadi kedua-duanya "playing the board" dan ==g:membahagi pot (chop)== — tetapi hanya jika anda membuka hole card anda; muck kad itu dan anda tidak mendapat apa-apa, walaupun di sini (Peraturan 19 TDA 2024). Straight tiada kicker, jadi hole card itu sekadar beban mati. Apabila anda mendengar "the board plays", inilah maksudnya — dan inilah satu-satunya situasi di mana hole card yang nampak kuat bernilai kosong sama sekali. (Lebih lanjut tentang mengesan runout begini dalam [cara membaca board](/ms/blog/holdem-reading-the-board).)

---

## Mengapa A9 Kalah kepada AK? (As yang Didominasi)

**Sesuatu tangan "didominasi" (dominated) apabila ia berkongsi satu kad dengan tangan yang lebih kuat dan akan kalah dalam pertarungan kicker hampir setiap kali ia menjadi — perangkap klasiknya ialah As yang lemah seperti A9 menentang AK.** Di sinilah kicker berhenti menjadi pengetahuan remeh dan mula menelan wang.

![Dua tangan permulaan bersebelahan di atas felt hijau — A-K di sebelah A-9 — menunjukkan bagaimana As yang sama dengan kicker lebih lemah menjadi perangkap yang didominasi](/images/holdem-kicker-dominated.webp "As yang sama, nasib berbeza: kicker yang memisahkan tangan premium daripada tangan yang didominasi")

Kembali kepada buy-in saya tadi. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, tiada straight atau flush di sana.

- **A9:** A♠ 9♣ → sepasang As, lima kad terbaik ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK:** A♥ K♦ → sepasang As, lima kad terbaik ==g:A♥ A♦ K♦ Q♠ 7♣==.

Pair yang sama sekali lagi — dan 9 saya langsung tidak berpeluang bersuara. Ia ditolak ke kicker kedua oleh Q di board, dan perbandingan selesai pada kicker pertama: K miliknya mengatasi Q di board — jadi dari segi apa pun, "kicker" saya sudah ==r:mati== sebelum tangan itu bermula. Itulah dominasi: apabila As anda menjadi, anda sering hanya membayar As yang lebih besar. Itulah sebab utama [carta tangan permulaan](/ms/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") melayan A9 offsuit dengan jauh lebih berhati-hati berbanding AK — kicker ialah perbezaan antara tangan premium dan perangkap.

---

## Adakah Four of a Kind Ada Kicker?

**Ya — four of a kind ada kicker satu kad, tetapi ia hampir tidak pernah menentukan tangan dalam Hold'em: itu memerlukan dua pemain seri pada quads yang betul-betul sama, yang memerlukan kesemua empat kad berada di board — runout yang jarang berlaku.** Inilah pengecualian yang paling kerap disalah faham oleh kebanyakan panduan, kerana mereka meletakkan quads bersama "tangan lima kad yang tiada kicker".

Matematiknya jelas: empat kad membentuk quad, satu kad ialah kicker. Ia hanya penting apabila dua pemain entah bagaimana seri pada four of a kind yang *sama* — yang dalam Hold'em memerlukan kesemua empat kad berada di board (kerana hanya ada empat kad bagi setiap nilai). Jika board ialah ==b:5♠ 5♥ 5♦ 5♣ K♦==, semua orang ada quad 5, dan kad kelima ialah kicker: pemain yang memegang As memainkan ==g:5-5-5-5-A== dan mengalahkan pemain yang mengambil ==5-5-5-5-K== dari board. Jarang, tetapi nyata — dan ketepatan dalam kes terpencil seperti inilah yang membezakan panduan yang boleh dipercayai daripada yang sekadar agak-agak.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-hand-rankings | Susunan Kad Poker (Urutan Penuh) | /images/holdem-hand-rankings-hero.webp
/ms/blog/holdem-tiebreak-rules | Bagaimana Seri Dipecahkan dalam Poker | /images/holdem-tiebreak-hero.webp
:::

## Soalan Lazim

**Q. Apa itu kicker dalam poker?**

A. Kicker ialah kad sampingan tertinggi dalam tangan lima kad anda yang bukan sebahagian daripada kombinasi tangan anda. Ia memecahkan seri apabila dua pemain memegang tangan yang sama nilainya — contohnya, A-K mengalahkan A-Q apabila board berpasangan dengan As, kerana kicker K mengatasi Q. Kicker tidak pernah mengalahkan tangan yang berkedudukan lebih tinggi.

**Q. Adakah flush ada kicker?**

A. Tidak. Flush menggunakan kelima-lima kad, jadi tiada kicker berasingan. Apabila dua flush bertembung, anda membandingkan kelima-lima kad dari tertinggi ke terendah — flush ber-As tinggi mengalahkan flush ber-K tinggi. Kadangkala orang memanggil kad teratas sebagai "kicker" secara longgar, tetapi sebenarnya ia perbandingan lima kad.

**Q. Adakah straight ada kicker?**

A. Tidak. Straight ialah lima kad berturutan, jadi ia sudah lengkap. Jika dua pemain membentuk straight yang sama, mereka membahagi pot — hole card tambahan tidak penting. Hanya straight yang lebih tinggi mengalahkan straight yang lebih rendah.

**Q. Adakah full house ada kicker?**

A. Tidak. Full house ialah three of a kind ditambah sepasang — kelima-lima kad. Seri dipecahkan oleh nilai trips dahulu, kemudian pasangannya, tidak pernah oleh kad sampingan.

**Q. Adakah four of a kind ada kicker?**

A. Ya, four of a kind ada kicker satu kad, tetapi ia jarang penting dalam Hold'em. Ia hanya menentukan tangan apabila dua pemain seri pada quads yang betul-betul sama — yang memerlukan kesemua empat kad berada di board — dan kemudian kad kelima tertinggi yang menang.

**Q. Adakah kicker penting dengan three of a kind?**

A. Ya. Three of a kind menggunakan dua kicker, jadi apabila dua pemain membentuk trips yang sama, dua kad tertinggi seterusnya yang memecahkan seri — di board K♣ K♥ 7♦ 5♣ 2♠, K♠ A♠ memainkan K-K-K-A-7 dan mengalahkan K-K-K-Q-7 milik K♦ Q♦ kerana As mengatasi Q. (*Set* sebenar yang dibentuk daripada pocket pair jarang seri, kerana hanya seorang pemain boleh memegang pasangan tepat itu.)

**Q. Adakah two pair ada kicker?**

A. Ya — two pair menggunakan satu kicker. Jika anda memegang K♥ Q♦ dan lawan anda memegang J♠ Q♥ di board Q♣ 7♠ 7♦ 4♥ 2♣, anda berdua ada Q dan 7, tetapi kicker K anda mengalahkan J mereka (Q-Q-7-7-K mengatasi Q-Q-7-7-J). Kicker hanya terlibat apabila kedua-dua pemain memegang two pair yang serupa.

**Q. Adakah kicker mesti berada dalam tangan anda?**

A. Tidak. Kicker boleh jadi kad komuniti. Poker sentiasa membentuk lima kad terbaik daripada tujuh, jadi jika kad board mengatasi hole card anda, kad board itu menjadi kicker yang dikongsi dan kad seterusnya yang menentukan. Hole card anda hanya dimainkan sebagai kicker apabila ia lebih tinggi daripada kad board yang akan digantikannya.

**Q. Berapa banyak kicker dalam satu tangan poker?**

A. Bergantung pada tangan: tangan high card menggunakan empat kicker (kelima-lima kad dibandingkan mengikut urutan), one pair tiga, three of a kind dua, manakala two pair dan four of a kind masing-masing satu. Straight, flush, full house dan straight flush tiada kicker kerana ia sudah mengisi kelima-lima kad.

**Q. Apakah kicker yang bagus dalam poker?**

A. Kicker yang tinggi — kicker As atau K adalah kuat, manakala kicker rendah seperti 9 menyebabkan anda "didominasi". Itulah sebabnya AK dan AQ jauh lebih baik daripada A9 atau A5: apabila semua orang berpasangan dengan As mereka, kicker terbesar memenangi pot.

**Q. Apa itu kicker As (atau kicker K)?**

A. Kicker As (ace kicker) bermakna kad sampingan tertinggi anda ialah As — kicker paling kuat yang wujud, jadi "top pair, kicker As" memenangi hampir setiap showdown pair yang sama. Kicker K (king kicker) ialah yang terbaik seterusnya. Itulah sebabnya A-K dan A-Q mengalahkan As yang lemah seperti A-9: apabila board berpasangan dengan As semua orang, kicker terbesar mengambil pot.

**Q. Apa maksud "playing the board"?**

A. Playing the board bermakna lima kad komuniti ialah tangan terbaik anda dan hole card anda tidak dapat memperbaikinya. Jika tiada sesiapa yang dapat memperbaiki board, semua orang menggunakan lima kad yang sama dan pot dibahagi. Kad sampingan anda berhenti menentukan apa-apa, kerana tiada satu pun hole card anda membentuk lima kad yang anda mainkan — setiap kad dalam tangan itu dikongsi.

**Q. Adakah kicker penting dalam Texas Hold'em?**

A. Sangat penting. Kerana semua orang berkongsi kad komuniti, pemain kerap membentuk pair atau trips yang sama, dan kicker yang menentukan pot-pot itu. Memilih tangan dengan kicker yang kuat (dan fold tangan yang didominasi) ialah bahagian teras permainan yang menang.

---

## 3 Perkara untuk Diingati

1. **Kicker = kad sampingan, pemecah seri sahaja.** Ia menyelesaikan seri antara nilai yang sama dan tidak pernah mengalahkan tangan yang berkedudukan lebih tinggi.
2. **Kombinasi + kicker = lima.** High card ada 4 kicker, one pair 3, trips 2, two pair dan quads 1; straight, flush, full house dan straight flush tiada.
3. **Kicker menentukan wang sebenar.** Dominasi (A9 lawan AK) dan playing the board kedua-duanya bergantung pada kicker — pilih tangan dengan kad sampingan yang kuat dan ketahui bila kicker anda sudah mati.

Fahami kicker dengan betul dan satu kategori penuh tangan "macam mana saya boleh kalah?" tidak lagi menjadi misteri. Dari sini, lihat urutan penuh [susunan kad poker](/ms/blog/holdem-hand-rankings), atau [peraturan pemecah seri](/ms/blog/holdem-tiebreak-rules) penuh bagi setiap jenis tangan.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Susunan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Susunan Kad Poker</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Urutan penuh yang menjadi asas kicker</div>
  </a>
  <a href="/ms/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Susunan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bagaimana Seri Dipecahkan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Urutan pemecah seri penuh bagi setiap tangan</div>
  </a>
  <a href="/ms/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tangan Permulaan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Carta Tangan Permulaan</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Mengapa As berkicker lemah di-fold</div>
  </a>
  <a href="/ms/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Membaca Board</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Cara Membaca Board</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kesan bila anda sedang playing the board</div>
  </a>
</div>
`.trim(),
};

export default POST;
