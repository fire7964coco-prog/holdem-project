import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Adakah Flush Menang ke atas Straight? Matematik dan Salah Baca",
  seoTitle: "Straight Kalah kepada Flush? — Flush vs Straight Poker",
  desc: "Buka straight, tetapi pot pergi kepada flush? Flush sentiasa menang. Ini matematiknya, apa yang mengalahkan flush, dan 3 board yang mengelirukan pemain.",
  tldr: "Flush (lima kad satu suit, kira-kira 0.197% daripada tangan lima kad) sentiasa menang ke atas straight (lima kad berturutan, kira-kira 0.392%) dalam Texas Hold'em. Sebabnya flush lebih jarang: merentas tujuh kad hingga river, flush muncul 3.03% berbanding 4.62% untuk straight.",
  category: "hand-rankings",
  date: "2026-09-27",
  updated: "2026-10-11",
  masterUpdated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "11 minit",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infografik: flush ber-As tinggi A♠ J♠ 9♠ 6♠ 2♠ di sebelah straight 9 tinggi dengan lencana emas FLUSH WINS yang menerangkan mengapa flush berkedudukan lebih tinggi",
  tags: ["flush vs straight", "does a flush beat a straight", "straight flush", "flush poker", "flush vs full house", "what beats a flush", "straight poker", "flush menang straight"],
  content: `
Pot besar pertama yang saya kalah dalam cash game secara langsung berlaku tepat begini: saya dapat straight 10 tinggi di river, menolaknya ke depan seolah-olah emas — dan seorang pemain tetap yang pendiam membuka dua heart. ==r:Pengedar menolak pot ke arah lain==, dan saya mengulang tangan itu dalam kepala sepanjang perjalanan pulang.

Jika perkara itu baru sahaja berlaku kepada anda, jawapan ringkasnya ialah ==g:ya — flush menang ke atas straight, setiap kali==. Bahagian yang menarik ialah *mengapa*, apa lagi yang mengalahkan flush, dan tiga situasi board yang masih membuat pemain tersilap baca di meja.

---

### Jawapan Pendek

:::stripe
Flush > Straight | Tiada pengecualian dalam Texas Hold'em standard
5,108 vs 10,200 | Kombinasi flush lima kad lawan kombinasi straight — flush ~2× lebih jarang
#5 vs #6 | Kedudukan flush dan straight dalam susunan 10 tangan
:::

> **Jawapan ringkas**
> **Flush sentiasa menang ke atas straight** dalam Texas Hold'em — tiada pengecualian dalam permainan standard. Flush (lima kad satu suit) secara statistik lebih sukar dibentuk berbanding straight (lima kad berturutan): kira-kira **5,108** kombinasi lima kad berbanding **10,200**.

---

## Adakah Flush Menang ke atas Straight? Kedudukan Kedua-dua Tangan

Ya — dan ini bukan soal pendapat. ==Flush berada satu anak tangga di atas straight, dan itu tidak pernah berubah dalam Hold'em standard.== Flush ialah lima kad satu suit; straight ialah lima kad berturutan tanpa mengira suit. Inilah kedudukan di sekitar dua tangan yang paling kerap dikelirukan pemain:

| Kedudukan | Tangan | Contoh |
|------|------|------|
| #2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Straight** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Three of a Kind | Q♠ Q♥ Q♦ 7♠ 3♣ |

Mahu kesemua sepuluh tangan berserta kebarangkalian, contoh dan teka-teki board? Semuanya ada dalam panduan [susunan penuh kad poker](/ms/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — artikel ini memberi tumpuan kepada pertembungan flush lawan straight dan jiran terdekatnya.

---

## Mengapa Flush Menang ke atas Straight? Matematiknya

Kekuatan tangan dalam poker ditentukan oleh satu perkara sahaja: **betapa sukar tangan itu dibentuk**. Semakin jarang, semakin tinggi kedudukannya. Susunan ini langsung tidak sewenang-wenang — ia semata-mata soal kekerapan.

Kira kesemua 2,598,960 tangan lima kad yang mungkin daripada dek 52 kad, dan susunannya terbentuk dengan sendiri:

| Tangan | Kombinasi | Kebarangkalian | Keputusan |
|:---|:---:|:---:|:---|
| Four of a Kind | 624 | 0.024% | Menang ke atas flush |
| Full House | 3,744 | 0.144% | Menang ke atas flush |
| **Flush** | **5,108** | **0.197%** | **Menang ke atas straight ✅** |
| **Straight** | **10,200** | **0.392%** | **Kalah kepada flush ❌** |
| Three of a Kind | 54,912 | 2.11% | Kalah kepada straight |

Straight mempunyai lebih kurang ==r:**dua kali ganda**== cara untuk terbentuk berbanding flush — 10,200 lawan 5,108 daripada 2,598,960 tangan lima kad. Merentas kesemua tujuh kad hingga river, jurangnya mengecil kepada kira-kira ==1.5×== (4.62% berbanding 3.03%), tetapi arahnya tidak pernah berubah: straight lebih kerap muncul, dan itulah sebabnya ia tangan yang lebih lemah. Peraturan kekerapan lima kad yang sama menerangkan keseluruhan tangga (dengan tujuh kad, high card semata-mata sebenarnya lebih jarang daripada two pair, tetapi susunannya ditetapkan berdasarkan lima kad); angka tepat bagi setiap tangan ada dalam [carta kebarangkalian dan odds poker](/ms/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Mengapa ini terasa terbalik

Straight hanya memerlukan lima nilai berturutan, dan ==**suit tidak penting**==. Kebebasan itu mewujudkan jumlah kombinasi yang sangat besar. Flush pula sebaliknya: setiap satu daripada lima kad mesti berkongsi ==**suit yang sama**==, dan hanya satu daripada empat suit boleh melakukannya pada satu masa. ==g:Lebih sedikit jalan untuk sampai ke sana bermakna flush lebih jarang — dan antara kategori tangan, yang lebih jarang sentiasa berkedudukan lebih tinggi.==

:::tip[Jika anda memegang flush draw dan lawan anda mengejar straight, anda menang apabila kedua-duanya bertembung — apabila **kedua-dua** draw menjadi, flush anda mengalahkan straight mereka di showdown. Itu tidak sama dengan lebih berpeluang menang: jika straight draw mereka datang bersama pair atau kad yang lebih tinggi, mereka masih boleh mendahului sebelum river.]:::

---

## 3 Situasi Board yang Masih Mengelirukan Pemain

![Board 8♥ 7♥ 6♥ 5♠ A♣ — tiga heart di board bermakna flush masih mungkin walaupun anda memegang straight](/images/holdem-flush-vs-straight-board.webp "Tiga kad satu suit di board — flush masih hidup menentang straight anda")

Tahu peraturannya tidak sama dengan membacanya secara langsung — kemahiran itulah yang dilatih oleh [cara membaca board](/ms/blog/holdem-reading-the-board). Inilah tiga situasi di mana kesilapan itu benar-benar berlaku.

### Situasi 1 — Anda buat straight, tetapi board ada tiga kad satu suit

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 kad):::

Anda memegang **9♠ 10♠** untuk **straight 6-7-8-9-10** yang bersih. Terasa kuat — tetapi board menunjukkan **tiga heart**. Jika lawan anda memegang dua heart, dia ada flush, dan **flush menang ke atas straight**. Setiap kali tiga atau lebih kad satu suit berada di board, flush masih mungkin; tentukan saiz bet dan call anda dengan sewajarnya.

### Situasi 2 — Straight siap dengan flush draw di atasnya

:::hand[8♥,7♥,6♠,2♣] Board (4 kad, turn):::

Anda memegang **9♥ 5♥**. Anda sudah ada **straight 5-6-7-8-9** — jadi mengapa masih memerhati heart? Kerana anda juga memegang **empat kad ke arah flush** (9♥ 8♥ 7♥ 5♥): mana-mana heart di river menaik taraf straight anda kepada flush, dan **6♥ khususnya** melengkapkan **straight flush 5-6-7-8-9 (#2)** yang menghancurkan segalanya. Apabila anda boleh mengejar tangan yang lebih besar secara percuma, mainlah dengan peluang naik taraf itu dalam fikiran.

==r:**Dua amaran yang mesti diingat bersamanya.**== Pertama, straight ini **bukan the nuts** — sesiapa yang memegang T-9 sudah ada 10-9-8-7-6 yang lebih tinggi. Kedua, heart tertinggi yang anda pegang ialah ==9♥==. Mana-mana heart di river selain 6♥ juga memberikan flush kepada setiap lawan yang memegang dua heart, dan satu heart di atas 9 sudah cukup untuk mengalahkan anda — A♥ 2♥ boleh melakukannya. Peluang naik taraf itu memang nyata, tetapi ia ==r:bukan lesen untuk membina pot besar==.

### Situasi 3 — Anda ada flush, lawan tunjuk straight

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 kad):::

Anda memegang **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, flush ber-As tinggi. Lawan anda menunjukkan **10♥ 8♦** untuk straight 7-8-9-10-J dan mengumumkannya dengan yakin. Jangan goyah: flush anda lebih tinggi. Flush atas straight, sentiasa.

---

## Apa yang Mengalahkan Flush dalam Poker?

Flush anda lebih berpeluang menang menentang kebanyakan tangan — tetapi tepat **empat jenis tangan** (ditambah flush yang lebih besar) mengalahkannya:

:::compare
Mengalahkan flush anda | Kalah kepada flush anda
Full house (#4) | Straight (#6)
Four of a kind (#3) | Three of a kind (#7)
Straight flush (#2) | Two pair (#8)
Royal flush (#1) | One pair & high card (#9–#10)
Flush yang lebih tinggi | Mana-mana flush yang lebih rendah
:::

Pertembungan yang paling kerap dipertikaikan selepas flush lawan straight ialah **flush lawan full house** — dan boat yang menang. Lebih banyak kali daripada yang saya mahu akui, saya membayar full house di board berpasangan sambil memegang nut flush yang cantik, jadi tanda bahaya yang saya perhatikan sekarang mudah sahaja: **board berpasangan**. Perhatikan yang ini:

:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 kad):::

Anda memegang **A♠ 5♠** untuk nut flush: **A♠ K♠ 9♠ 5♠ 4♠**. Lawan anda memegang **K♦ 9♦** dan membuka **9♦ 9♠ 9♥ K♦ K♠** — nines full of kings. ==r:Full house menang ke atas flush==, dan tiada flush yang terselamat daripadanya. Di board yang tidak berpasangan, nut flush hanya dikalahkan oleh straight flush; sebaik sahaja board berpasangan, full house dan quads masuk ke dalam gambaran.

Apabila dua pemain memegang jenis tangan yang *sama*, pemenangnya ditentukan dengan membandingkan kad demi kad — sistem penuhnya ada dalam [peraturan pemecah seri dan kicker poker](/ms/blog/holdem-tiebreak-rules).

---

## Flush lawan Flush, Straight lawan Straight — Siapa Menang Jika Seri?

Ya, satu flush memang boleh lebih tinggi daripada flush yang lain. **Suit tidak relevan** — bandingkan lima kad dari atas ke bawah, bermula dengan yang tertinggi:

| Pemain | Flush | Keputusan |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Menang** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Kalah |

As milik Pemain A mengatasi K milik Pemain B pada kad pertama lagi, jadi A menang. Flush spade **tidak** mengalahkan flush heart — hanya nilai kad yang penting. (Dalam tangan Hold'em sebenar, dua flush sentiasa daripada suit yang *sama*, kerana kedua-duanya dibina daripada board yang dikongsi — suit bercampur di sini hanya sebagai ilustrasi.)

Straight lebih mudah lagi: bandingkan **kad tertinggi** sahaja — tiada kicker.

- **A-K-Q-J-10** (As tinggi, "Broadway") ialah straight paling kuat.
- **A-2-3-4-5** ("wheel", As dimainkan rendah) ialah yang paling lemah.

| Pemain | Straight | Keputusan |
|--------|------|------|
| A | Q-J-10-9-8 | **Menang** |
| B | J-10-9-8-7 | Kalah |

Q mengatasi J, jadi A menang. Jika lima kad terbaik kedua-dua pemain sama nilainya, pot dibahagi — itulah [split pot](/ms/blog/holdem-split-pot-rules).

---

## Apa Itu Straight Flush? Apabila Kedua-duanya Berlaku Serentak

![9♥ 8♥ 7♥ 6♥ 5♥ — straight flush heart, tangan #2 dalam poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — lima heart berturutan; hanya straight flush yang lebih tinggi atau royal flush mengalahkannya")

**Straight flush** ialah lima kad *berturutan* daripada *satu suit* — seperti 9♥ 8♥ 7♥ 6♥ 5♥. Ia **tangan #2 dalam poker**: hanya straight flush yang lebih tinggi atau royal flush (yang sebenarnya straight flush ber-As tinggi, A-K-Q-J-10 satu suit) mengalahkannya. Dengan hanya **36 kombinasi** (~0.00139% daripada tangan lima kad; kira-kira 0.028% menjelang river dalam Hold'em), ia lebih jarang daripada semua tangan lain kecuali royal itu sendiri.

Syaratnya: ==*lima kad yang sama* mesti satu suit dan berturutan sekali gus==. Lihat perbezaannya di board **8♥ 7♥ 6♥ Q♠ 3♦**:

- Pegang **K♥ 2♥** → lima heart anda ialah K-8-7-6-2. Tidak berturutan — itu ==flush biasa, bukan straight flush==.
- Pegang **10♥ 9♥** → lima heart anda ialah 10-9-8-7-6. Berturutan *dan* satu suit — ==g:straight flush 10 tinggi==.

Jika straight anda menggunakan sebahagian kad dan flush anda menggunakan kad yang lain, anda tidak menjumlahkan kedua-duanya — anda hanya memainkan yang lebih tinggi antara keduanya, iaitu flush.

---

## Adakah Susunan Tangan Berbeza dalam Short Deck? (Flush vs Full House)

Ya — Short Deck (6+) Hold'em ialah satu-satunya format biasa yang menyusun semula tangan-tangan ini. Dalam **Short Deck (6+) Hold'em**, kad 2 hingga 5 dikeluarkan daripada dek. Dengan kad yang lebih sedikit, flush menjadi *lebih sukar* dibentuk berbanding full house — jadi dalam format itu susunannya beralih dan ==r:**flush menang ke atas full house**==. Prinsipnya tidak pernah berubah: ==tangan yang lebih jarang menang==. Hanya dek yang berubah. Dalam Texas Hold'em standard dengan dek penuh 52 kad, ==g:flush menang ke atas straight dan kalah kepada full house, setiap kali==.

---

:::readnext[Baca seterusnya]
/ms/blog/holdem-tiebreak-rules | Peraturan Kicker & Pemecah Seri | /images/holdem-tiebreak-hero.webp
/ms/blog/holdem-split-pot-rules | Bilakah Pot Dibahagi? | /images/holdem-split-pot-hero.webp
:::

## Soalan Lazim

**Q. Adakah flush menang ke atas straight dalam poker?**

A. Ya. Flush ialah tangan #5 dan straight #6, jadi flush sentiasa menang dalam Texas Hold'em standard. Lima kad satu suit secara statistik lebih sukar dibentuk berbanding lima kad berturutan, dan antara tangan lima kad, tangan yang lebih jarang sentiasa berkedudukan lebih tinggi.

**Q. Adakah straight menang ke atas flush?**

A. Tidak. Straight (#6) tidak pernah mengalahkan flush (#5) dalam Texas Hold'em standard. Ramai yang keliru kerana straight terasa lebih sukar dilengkapkan, tetapi flush lebih jarang — 5,108 berbanding 10,200 cara antara tangan lima kad, dan 3.03% berbanding 4.62% merentas tujuh kad — jadi flush sentiasa mengambil pot.

**Q. Mengapa flush menang ke atas straight?**

A. Matematik semata-mata. Straight tidak mengira suit, jadi ada kira-kira 10,200 cara untuk membentuknya, berbanding hanya 5,108 cara untuk membentuk flush. Itu menjadikan flush kira-kira dua kali lebih jarang antara tangan lima kad; merentas kesemua tujuh kad hingga river, nisbah kira-kira 1.5 masih kekal (3.03% berbanding 4.62%). Dikira berdasarkan tangan lima kad, iaitu cara susunan itu ditetapkan, tangan yang lebih jarang sentiasa berkedudukan lebih tinggi.

**Q. Apa yang mengalahkan flush dalam poker?**

A. Full house, four of a kind, straight flush dan royal flush semuanya mengalahkan flush — begitu juga flush yang lebih tinggi (dibandingkan kad demi kad dari yang teratas). Semua di bawahnya (straight, three of a kind, two pair, one pair, high card) kalah kepadanya.

**Q. Apa yang mengalahkan straight dalam poker?**

A. Flush, full house, four of a kind, straight flush dan royal flush semuanya mengalahkan straight — ditambah mana-mana straight yang lebih tinggi. Straight masih mengalahkan three of a kind dan semua di bawahnya. Susunan penuh dari terbaik hingga terburuk ada dalam [susunan penuh kad poker](/ms/blog/holdem-hand-rankings).

**Q. Bolehkah anda ada flush yang lebih tinggi daripada pemain lain?**

A. Boleh. Dua flush dibandingkan kad demi kad dari atas ke bawah, jadi flush ber-As tinggi mengalahkan flush ber-K tinggi. Jika kad teratas sama, kad kedua tertinggi yang menentukan, dan begitulah seterusnya hingga kelima-lima kad.

**Q. Adakah suit flush itu penting?**

A. Tidak. Texas Hold'em tiada susunan suit. Suit hanya penting untuk *membentuk* flush, bukan untuk membandingkan tangan — apabila dua flush bertembung (sentiasa suit yang sama dalam Hold'em, kerana kedua-duanya berkongsi kad board), hanya nilai kad yang menentukan, dan nilai yang serupa membahagi pot.

**Q. Bolehkah flush dan straight seri atau membahagi pot?**

A. Tidak. Satu tangan sentiasa berkedudukan di atas yang lain, jadi flush terus menang. Pot hanya dibahagi antara dua tangan yang sama kedudukannya dengan nilai lima kad yang betul-betul serupa.

**Q. Adakah apa-apa yang boleh mengalahkan straight flush?**

A. Ya, tetapi hanya dua perkara: straight flush yang lebih tinggi, atau royal flush — yang sebenarnya straight flush ber-As tinggi, A-K-Q-J-10 satu suit. Selain itu, tiada tangan lain yang boleh mengalahkannya.

**Q. Adakah three of a kind menang ke atas flush?**

A. Tidak. Three of a kind ialah tangan #7, dua anak tangga di bawah flush (#5), jadi ia sentiasa kalah kepada flush. Malah semua tangan di bawah flush — straight, three of a kind, two pair, one pair dan high card — kalah kepadanya.

---

## 3 Perkara untuk Diingati

1. **Flush (#5) menang ke atas straight (#6)** — tiada pengecualian dalam Hold'em standard.
2. Ia menang kerana lebih jarang: **5,108** kombinasi flush berbanding **10,200** kombinasi straight antara tangan lima kad — dan 3.03% berbanding 4.62% merentas kesemua tujuh kad hingga river.
3. Perhatikan board: **tiga kad satu suit** bermakna flush masih mungkin, **board berpasangan** bermakna full house boleh mengalahkan flush anda, dan satu suit *serta* bersambung bermakna straight flush masih mungkin.

Kukuhkan urutannya dengan [susunan penuh kad poker](/ms/blog/holdem-hand-rankings), pelajari cara tangan yang hampir sama ditentukan dalam [panduan pemecah seri dan kicker](/ms/blog/holdem-tiebreak-rules), dan jika anda benar-benar baharu, [panduan peraturan Texas Hold'em untuk pemula](/ms/blog/texas-holdem-rules-for-beginners) menyatukan semuanya.

---

## Artikel Berkaitan

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/ms/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Susunan Tangan</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Susunan Kad Poker — Tertinggi hingga Terendah</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kesemua 10 tangan dengan kebarangkalian, contoh dan teka-teki board</div>
  </a>
  <a href="/ms/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pemecah Seri</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Peraturan Kicker & Pemecah Seri</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Flush atau straight sama — siapa menang pot?</div>
  </a>
  <a href="/ms/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bilakah Pot Dibahagi?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 situasi chop termasuk flush yang serupa</div>
  </a>
</div>
`.trim(),
};
