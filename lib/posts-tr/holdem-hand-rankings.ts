import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Texas Hold'em'de poker el sıralaması — en güçlüden en zayıfa, olasılıklarla",
  seoTitle: "Kazandın sandın? Poker elleri: perden royal floşa sıralama",
  desc: "Flush yaptın ama potu mu kaybettin? Poker el sıralaması 10 el: Türkçe adları (renk, kent, per, döper), gerçek olasılıklar ve en sık yapılan hatalar.",
  tldr: "Poker el sıralaması en güçlüden en zayıfa şöyledir: Royal Flush, Straight Flush, Four of a Kind (Kare), Full House, Flush, Straight (Kent), Three of a Kind (Üçlü), Two Pair (İki Çift), Pair (Çift) ve High Card (Yüksek Kart).",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-10-06",

  masterUpdated: "2026-09-07",
  keepImagesInBody: true,
  readTime: "16 dk",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Royal Flush, poker dizilimlerinin en yükseği — poker masasında maça 10 J Q K A, çip yığınları ve dağıtıcı butonuyla",
  tags: ["poker elleri", "poker el sıralaması", "poker kart sıralaması", "poker büyüklük sıralaması", "poker dizilimleri", "poker kombinasyonları", "pokerde en iyi el sıralaması", "pokerde en yüksek el", "texas holdem elleri", "pokerde hangi el kazanır"],
  content: `
River'da tek rakibin kaldı. Flush'ını yaptın, en iyi elin bu olduğundan eminsin — sonra krupiye potu karşı tarafa itiyor. Board eşlenmişti, rakibinde full house vardı ve bunu hiç beklemiyordun.

Bu sahneyi ben de yaşadım: As yüksek floşumla river'da bütün çiplerimi ortaya ittim, board turn'de eşlenmişti ve rakip fulunu açtığında o eşlenmiş kartı hiç hesaba katmadığımı ancak o an fark ettim.

"Kazandığımı sanmıştım" anlarının neredeyse hepsi aynı şeye dayanır: **poker el sıralamasını** yeterince hızlı okuyamamak. Sıralama beş dakikada öğrenilir. Asıl zor olan, onu canlı, baskı altında, eşlenmiş veya bağlantılı bir board'da okumaktır — ve bunu kimse pek iyi anlatmaz.

Masaya hiç oturmadıysan önce [Texas Hold'em kurallarına](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") bir göz at; bu rehber oradan devam ediyor. Sıralamayı ezberlemek de baskı altında okumak da burada: Gerçek olasılıklarla tam sıralamayı, beraberliğin temel kuralını (ayrıntısı ayrı bir yazıda), "en iyi beş kartını bul" alıştırması için üç gerçek board sorusunu ve herhangi bir board'u okumak için 1 saniyelik bir rutini bulacaksın.

---

## Poker elleri nelerdir? Tam el sıralaması

> **Kısa cevap**
> Texas Hold'em'de 10 poker eli vardır. En güçlüden en zayıfa: **Royal Floş (Royal Flush), Sıralı Floş (Straight Flush), Kare, Full (Full House), Floş (Flush), Kent, Üçlü, İki Çift, Çift ve Yüksek Kart**. Yedi kartın (2 elindeki + 5 ortak) içinden en iyi beşini seçersin; sıralama, beş kartlık kombinasyonun ne kadar nadir olduğuna dayanır.

Buradan başla. İşte Texas Hold'em'de her eli river'a kadar yapma olasılığıyla birlikte, en güçlüden en zayıfa kadar tüm sıralama — yani poker büyüklük sıralaması ve Türk masalarında duyacağın adlarıyla 10 poker kombinasyonu.

| # | El | Türkçe masa adı | Diğer adı | Nedir | Olasılık (river'a kadar) |
|------|------|------|------|------|------|
| **1** | Royal Flush | Royal Renk | "Royal" | Aynı türden A-K-Q-J-10 | %0,0032 |
| **2** | Straight Flush | Sıralı Renk | "Steel wheel" (yalnızca A-5) | Aynı türden 5 ardışık | %0,0279 |
| **3** | Four of a Kind (Kare) | Kare | "Quads" | Aynı değerden dört kart | %0,168 |
| **4** | Full House | Ful | — | Üçlü + çift | %2,60 |
| **5** | Flush | Renk | — | Aynı türden 5 kart | %3,03 |
| **6** | Straight (Kent) | Kent | — | Karışık türden 5 ardışık | %4,62 |
| **7** | Three of a Kind (Üçlü) | Set (Üçlü) | "Trips" | Aynı değerden üç kart | %4,83 |
| **8** | Two Pair (İki Çift) | Döper | — | İki farklı çift | %23,5 |
| **9** | Pair (Çift) | Per | — | Aynı değerden iki kart | %43,8 |
| **10** | High Card (Yüksek Kart) | Beş Benzemez | "Hiçbir şey" | Hiçbir kombinasyon yok | %17,4 |

Masa adlarında Sıralı Renk = Sıralı Floş, Renk = Floş demektir; rehberin geri kalanında Floş adlarını kullanıyoruz.

> **Tartışmaları bitiren kural**
> Çift ve Yüksek Kart birlikte, river'a kadarki tüm yedi kartlık ellerin yaklaşık %61'ini oluşturur. Büyük eller akılda kaldığı için sık görünür — ama potların çoğu bir çift ya da yüksek kart ve ona eşlik eden kicker ile belirlenir.

:::quiz:::

---

## Pokerde en yüksek el hangisi?

> **Kısa cevap**
> Pokerde en yüksek, en büyük ve en güçlü el **Royal Floş**tur (Royal Renk): aynı türden A-K-Q-J-10. Onu hiçbir el yenemez. Ne kadar nadir olduğu hangi kartlara baktığına bağlıdır: Hold'em'de river'a kadar yedi kartın en iyi beşini seçerken yaklaşık ==30.940'ta 1== (%0,0032), doğrudan dağıtılan beş kartlık elde ise ==649.740'ta 1==. Hemen altında Sıralı Floş (straight flush), sonra Kare gelir.

İki sayının neden bu kadar farklı olduğunu görmek kolay:

- **Beş kartlık dağıtım:** 52 karttan beş kartın 2.598.960 farklı eli vardır ve bunların yalnızca 4'ü royal'dir (her türden bir tane): ==4 ÷ 2.598.960 = 649.740'ta 1==.
- **Hold'em, yedi kart (2 kapalı + 5 board):** 133.784.560 farklı yedi kartlık kombinasyon var. Royal içerenleri saymak için türü seç (4 yol), kalan 47 karttan herhangi ikisini ekle (1.081 yol): ==4 × 1.081 = 4.324 → 133.784.560 ÷ 4.324 = 30.940'ta 1==.

Yani "royal 649.740 elde bir gelir" Hold'em için doğru bir sayı değildir — o, beş kartlık kapalı pokerin sayısıdır. Royal'den kareye ve full house'a kadar her elin beş kart ve yedi kart değerlerini yan yana görmek istersen [poker olasılıkları](/tr/blog/holdem-probability) yazısındaki tam tabloya bak. "Pokerde en iyi el sıralaması" beş kartlık olasılıkların sırasıdır; yedi kartta sıra birebir tutmaz: çift (%43,8) ve iki çift (%23,5), sıralamada daha aşağıdaki yüksek karttan (%17,4) daha sık gelir.

---

## Poker kartlarının sıralaması ve isimleri

> **Kısa cevap**
> Poker kart sıralaması yüksekten düşüğe A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2'dir. Türkçe adlarıyla: As, Papaz (rua), Kız (dam), Vale (bacak), ardından sayılar. As en güçlü karttır ve hem en yüksek kentte (A-K-Q-J-10) hem en düşük kentte (A-2-3-4-5) oynayabilir. Dört türün (maça, kupa, karo, sinek) birbirine üstünlüğü yoktur.

Ellerden önce kart gücüne ihtiyacın var.

### Değer sırası (yüksekten düşüğe)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

| Kart | Türkçe adı | Diğer adı |
|------|------|------|
| **A** | As | — |
| **K** | Papaz | Rua |
| **Q** | Kız | Dam |
| **J** | Vale | Bacak |
| **10–2** | Sayılar | — |

As'ın düşük oynadığı A-2-3-4-5 kentine "the wheel" denir. As'ın tek sınırı şu: ortadan dönemez, yani Q-K-A-2-3 bir kent **değildir**.

---

## Pokerde renk sıralaması var mı? (Hangi renk büyük?)

> **Kısa cevap**
> Hayır. Standart Texas Hold'em'de renk (tür) sıralaması yoktur: maça kupayı, kupa karoyu yenmez. Tür yalnızca bir floş oluşturmak için önemlidir, asla beraberlik bozmak için değil. İki oyuncunun en iyi beş kartı aynı kombinasyonda (sıralamada aynı basamakta) ve aynı değerlerdeyse pot bölünür; kartların türlerinin farklı olması sonucu hiçbir zaman değiştirmez.

Bu soru karışıyor çünkü bazı beş kartlık kapalı poker ev kurallarında türlere sıra verilir — ve kaynaklar o sırada bile anlaşmaz: biri kupa, maça, karo, sinek der; diğeri maça, kupa, karo, sinek. Bu rehber hangisinin doğru olduğunu söylemiyor, çünkü Texas Hold'em'de ikisi de geçerli değildir.

Bir de kelime karışıklığı var: "renk" hem kartın türü hem de floş elinin adıdır. "Renk sıralaması" türlerin sırasını sorar (cevap: yok); "renk yaptım" ise aynı türden beş kartı, yani floşu anlatır.

---

## 10 poker kombinasyonu tek tek

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — maça A-K-Q-J-10:::

**A♠ K♠ Q♠ J♠ 10♠** — en yüksek straight flush ve pokerin en iyi eli.

Yenilemez; mümkün olan tek beraberlik, tamamen board'da yatan ve herkesin paylaştığı bir royal flush'tır, bu da potu böler. Yaklaşık her 31.000 elde bir gelir, bu yüzden birçok oyuncu yıllarca onu yapamaz. Yaptığında tek işin mümkün olduğunca çok çip koymaktır.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — beş ardışık kupa:::

**9♥ 8♥ 7♥ 6♥ 5♥** — beş ardışık kart, hepsi aynı türden.

Onu yalnızca daha yüksek bir straight flush veya royal flush yener. En düşük versiyonu, aynı türden A-2-3-4-5, "steel wheel" denir. İki straight flush karşılaşırsa, yüksek kartlı olan kazanır.

### #3 — Four of a Kind (Kare)

:::hand[8♣,8♦,8♥,8♠,K♥] Kare — dört 8 + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — aynı değerdeki dört kart.

İki kare arasında yüksek değer kazanır. Dördü de *board'daysa*, en yüksek **kicker** belirler — ve As söz sahibidir. Her el için beraberliğin nasıl bozulduğunu [kicker ve split pot kuralları](/tr/blog/holdem-tiebreak-rules) yazısında tek tek gösterdim.

### #4 — Full House

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — üç kız + iki beşli:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — bir üçlü artı bir çift.

**Önce üçlüyü** karşılaştır: QQQ55, JJJ99'u yener çünkü kızlar valeleri geçer, çiftin büyüklüğü ne olursa olsun. Çift yalnızca üçlü berabere kalırsa karşılaştırılır.

> **En yaygın "cooler"**
> Board her eşlendiğinde, bir flush ya da kente bel bağlamadan önce full house ara. "En yüksek flush'ım full house'a yenildi" Hold'em'in en sık görülen bad beat'idir.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — beş karo:::

**A♦ J♦ 8♦ 6♦ 2♦** — sıra ne olursa olsun aynı türden beş kart.

İki flush en yüksekten başlayarak kart kart karşılaştırılır: A-J-8-6-2, A-J-8-5-2'yi yener çünkü 6, 5'i geçer. Bir türden dört kart flush **değildir**: beş kart gerekir.

### #6 — Straight (Kent)

:::hand[7♠,6♥,5♣,4♦,3♠] Kent — beş ardışık, karışık tür:::

**7♠ 6♥ 5♣ 4♦ 3♠** — beş ardışık kart, karışık tür.

- **En yüksek:** A-K-Q-J-10 ("Broadway") en yüksek kenttir.
- **The wheel:** A-2-3-4-5 en düşüğüdür (As düşük oynar).
- **Yasak:** dönemez — K-A-2-3-4 kent değildir.

İki kent arasında yüksek kartlı olan kazanır.

### #7 — Three of a Kind (set / trips)

:::hand[J♣,J♠,J♥,A♦,4♠] Üçlü — üç vale + kicker:::

**J♣ J♠ J♥ A♦ 4♠** — aynı değerdeki üç kart.

Onu oluşturmanın üç yolu vardır ve fark önemlidir:

- **Set:** elindeki bir çift artı bir board kartı (örneğin J♣ J♠ tutarsın ve board J♥ getirir). Gizli ve tehlikeli.
- **Trips:** board'daki bir çift artı senin bir kartın. Rakip için okuması daha kolay ve daha çok paylaşılır.
- **Board'da üçlü:** üç kartın üçü de board'dadır (örneğin ortada J♣ J♠ J♥). Herkes paylaşır; biri straight ya da daha güçlü bir el yapmadıkça sizi yalnızca kicker'lar ayırır.

Set daha çok çip kazandırır çünkü kimse onu görmez.

### #8 — Two Pair (İki Çift)

:::hand[10♠,10♥,8♣,8♦,A♠] İki Çift — onlu ve sekizli + As kicker:::

**10♠ 10♥ 8♣ 8♦ A♠** — iki farklı çift.

Şu sırayla karşılaştırılır: **yüksek çift → düşük çift → kicker**. KK99-A, QQJJ-A'yı yener çünkü başka hiçbir şeye bakmadan önce papazlar kızları geçer.

### #9 — Pair (Çift)

:::hand[K♠,K♦,9♥,6♣,2♠] Çift — papazlar + üç kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — aynı değerden iki kart.

Hold'em'in en yaygın tamamlanmış eli. Aynı değerde iki çift karşılaşırsa kicker belirler: **çiftin değeri → kicker 1 → kicker 2 → kicker 3**, yüksekten düşüğe. "Aynı el" yenilgilerinin çoğu burada olur: kicker'ına dikkat et.

### #10 — High Card (Yüksek Kart)

:::hand[A♣,Q♠,9♥,5♦,3♣] Yüksek Kart — kombinasyon yok:::

**A♣ Q♠ 9♥ 5♦ 3♣** — hiçbir şey bağlanmıyor.

Showdown'da en yüksek kart kazanır, sonra bir sonraki, ve beşi boyunca böyle gider. Beşi de eşleşirse pot bölünür. Bir blöf görüldüğünde ve tutmadığında elinde kalan budur.

---

## Kicker ve beraberlikler gerçekte nasıl işler

![Poker showdown — iki oyuncunun en iyi beş kartının karşılaştırılması](/images/holdem-kicker-showdown-neutral.webp "Showdown'da en iyi beş kartlık el potu alır")

İki oyuncuda aynı el türü varsa önce eli oluşturan kartlar, sonra kicker (yan kart) yüksekten düşüğe karşılaştırılır; beş kartın beşi de aynıysa pot bölünür ve türler asla beraberliği bozmaz. Kicker'ın hangi elde oynayıp hangisinde oynamadığını, iki çiftin nasıl karşılaştırıldığını ve board'dan bölünen potları tek tek [kicker ve split pot kuralları](/tr/blog/holdem-tiebreak-rules) yazısında gösterdim. Kartları kimin önce açacağı ve muck kuralları ise [showdown kuralları](/tr/blog/holdem-showdown-rules) konusu.

---

## Board'u oku: 3 gerçek soru

Sıralamayı bilmek, onu hızlı okumakla aynı şey değil. İşte üç gerçek durum. Cevabı kapat, yedi karttan en iyi beşini bul, sonra kontrol et.

### Soru 1 — Gizli full house

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 kart):::

Elinde **Q♥ Q♦** var. En iyi elin ne?

→ Board zaten iki çift gösteriyor (A-A ve K-K). İki kızın ve board'daki Q♠ bir **kız üçlüsü** yapar, board'daki As'larla birlikte bir **full house — QQQ + AA** olur. En iyi beşin bunlar. Yeni başlayanlar "AAKK + Q sadece iki çift değil mi?" diye takılır — hayır. Üçlün olduğu ve board da kendi başına bir çift eklediği anda full house'u alırsın. **Full house iki çifti yener.**

### Soru 2 — Aslında daha güçlü olan flush

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 kart):::

Elinde **6♥ 2♣** var. Board'da dört kupa var.

→ 6♥ beşinci kupa, bu yüzden "flush" diye düşünüyorsun. Ama sıraya bak: **10♥ 9♥ 8♥ 7♥ 6♥** beş *ardışık* kupa — yani **10'a kadar uzanan bir straight flush (sıralı floş)**, el #2. Sadece flush sanmadan önce flush kartlarının bağlı olup olmadığını her zaman kontrol et.

### Soru 3 — Paylaşmak gerektiğinde

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 kart):::

Elinde **A♥ 3♣** var. Board'da zaten papaz üçlüsü var.

→ A♥ board'daki A♠ ile eşleşir ve sana **full house, KKK + AA** verir. Ama rakipte de tek bir As varsa — ve son papaz yoksa — *aynı* full house onda da var ve pot bölünür. Seni hâlâ yenen yalnızca iki şey var: elde As çifti (pocket A-A) daha büyük bir full house yapar, yani "aces full"; ve son papaz (K♣) yanındaki kart ne olursa olsun **papaz karesi** yapar — board'daki A♠ zaten onun kicker'ı olur. Ne As'ı ne de o papazı varsa, full house'un kazanır. Ders: board işin neredeyse tamamını yaptığında, elin çoğu zaman sadece bir ekstra kart değerindedir.

---

## Hangi el kazanır? En sık yapılan 3 sıralama hatası

> **Kısa cevap**
> Sıralamayı bilen oyuncuların bile en sık düştüğü üç tuzak şunlar: royal floş için beş kartlık pokerin olasılığını Hold'em'e uygulamak, board'da kent varken potun her zaman bölüneceğini sanmak ve board'da kare ile As varken kicker'ın hâlâ oynadığını düşünmek. Üçünü de aşağıda yedi kartı tek tek yazıp en iyi beşi seçerek kontrol ediyoruz.

**Hata 1 — "Royal 649.740 elde bir gelir."** Bu, beş kartlık dağıtımın sayısıdır (4 ÷ 2.598.960). Hold'em'de yedi kartın en iyi beşini seçtiğin için river'a kadar ==yaklaşık 30.940'ta 1== olur (4 × 1.081 = 4.324 royal'li yedi kartlık kombinasyon ÷ 133.784.560). Hesabın tamamı yukarıda, "Pokerde en yüksek el hangisi?" bölümünde.

**Hata 2 — "Board'da kent varsa pot hep bölünür."** Board: **6♠ 7♦ 8♣ 9♥ 10♠** (türler karışık, floş yok).

- Sen **J♥ 3♣**: yedi kart J♥ 3♣ 6♠ 7♦ 8♣ 9♥ 10♠ → en iyi beş **J-10-9-8-7** (valeye kadar kent).
- Rakip **A♣ 2♦**: yedi kart A♣ 2♦ 6♠ 7♦ 8♣ 9♥ 10♠ → en iyi beş **10-9-8-7-6** (board'un kendi kenti; As ve 2 bağlanmaz).
- Karşılaştırma: J'li kent 10'lu kenti yener → **potun tamamı J'de**. Pot yalnızca iki oyuncunun en iyi beş kartlık eli eşitse bölünür — örneğin ikisinin de en iyi eli J'li kentse ya da kimse board'daki kenti geçemiyorsa.

**Hata 3 — "Board'da kare ve As varsa kicker'ı yüksek olan kazanır."** Board: **8♠ 8♥ 8♦ 8♣ A♠**.

- Sen **K♥ Q♥**: yedi kart K♥ Q♥ 8♠ 8♥ 8♦ 8♣ A♠ → en iyi beş **8-8-8-8-A**.
- Rakip **2♣ 3♦**: yedi kart 2♣ 3♦ 8♠ 8♥ 8♦ 8♣ A♠ → en iyi beş yine **8-8-8-8-A**.
- Karşılaştırma: beş kart birebir aynı → **pot bölünür**. As zaten board'da ve ondan büyük kicker yok; elindeki papaz da iki de oynamaz. Board 8-8-8-8-5 olsaydı durum değişirdi: A♥ 2♣ tutan 8-8-8-8-A ile, K♣ Q♦ tutanın 8-8-8-8-K elini yenerdi.

Board'un "oynadığı" diğer durumları ve iki çift beraberliklerini [kicker ve split pot kuralları](/tr/blog/holdem-tiebreak-rules) yazısında tek tek çözdüm.

---

## Herkesin tartıştığı kapışmalara hızlı yanıtlar

| Kapışma | Kazanan | Neden |
|------|------|------|
| Flush vs Kent | **Flush** | #5, #6'yı yener |
| Full House vs Flush | **Full House** | #4, #5'i yener |
| Üçlü vs İki Çift | **Üçlü** | #7, #8'i yener |
| Kent vs Üçlü | **Kent** | #6, #7'yi yener |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (As yüksek)** | The wheel en düşük kent |
| Aynı çift, kicker K vs J | **Kicker K** | Yüksek kicker kazanır |
| Kare vs Full House | **Kare** | #3, #4'ü yener |

---

## Sıralama neden böyle

Sıralama keyfî değil — saf olasılık. **Bir eli beş karttan yapmak ne kadar zorsa, o kadar yukarıdadır.** 52 kartlık destede, aynı türden beş kart yapmanın yolları, herhangi bir türden beş ardışık yapmaktan daha azdır — bu yüzden flush, kentin üstündedir. Bu tek ilke tüm sıralamayı açıklar.

Karşılaşacağın büyük istisnayı da açıklar: 2'den 5'e kadar kartların çıkarıldığı **Short Deck (6+) Hold'em**'de flush'lar full house'lardan daha zor olur — bu yüzden o formatta **flush, full house'u yener**. Matematik değişti, sıralama değişti. Varyantlara göre farklar aşağıda.

---

## Board okumanın 1 saniyelik rutini

Süre azaldığında, board her tamamlandığında şunu sırayla tara:

**1. Önce türler** — board'da aynı türden üç veya daha fazla kart var mı? Varsa flush mümkün. Kendi türüne bak.

**2. Sonra bağlantı** — değer olarak yakın kartlar var mı (8-9-10 gibi)? Varsa kent canlı.

**3. En son çiftler** — board eşlenmiş mi? Eşlenmişse full house ve kareler devrede, flush'ın veya kentin tehlikede olabilir.

Eğitimli oyuncular board'u bu sırayla okur — önce tehlike (board'da flush/kent), sonra board'un eşlenip eşlenmediği (ki bu her şeyi tehdit eder). Bunu alışkanlık edin ve river'da rastgele call yapmayı bırak.

---

## 3 adımda ezberle

| Adım | Ne yapmalı | Süre |
|------|------|------|
| **1** | Üç grubu öğren: Premium (#1-3), Orta (#4-6), Yaygın (#7-10) | 1 gün |
| **2** | Sadece kafa karıştıran kapışmaları çalış: flush vs kent, full house vs flush | 3 gün |
| **3** | Poker yayınları izle ve kazananı krupiyeden önce söyle | 1-2 hafta |

Önce gruplamak, sıralamanın on rastgele şey gibi görünmesini engeller. 2. adımdaki kafa karıştıran kapışmalar yeni başlayan hatalarının %90'ına neden olur, o yüzden bolca çalış.

---

## Varyanta göre el sıralaması

Sıralama neredeyse tüm poker varyantlarında aynıdır, birkaç önemli farkla.

| Oyun | Sıralama | Temel fark |
|------|------|------|
| **Texas Hold'em** | Standart (bu rehber) | 0-2 kartını kullan |
| **Omaha** | Standart | 4 kartından *tam olarak* 2'sini kullanmalısın |
| **Seven-Card Stud** | Standart | Ortak kart yok |
| **Short Deck (6+)** | Değiştirilmiş | Flush full house'u yener; A-6-7-8-9 en düşük kenttir (As düşük oynar; 2–5 çıkarıldığı için doğrudan 6'ya bağlanır) |

Özet: standart sıralamayı bir kez öğren, neredeyse her oyunda işine yarar. Sadece Omaha'nın "tam olarak iki" kuralını ve Short Deck'te flush'ın yükselişini hatırla. Türk pokeri ayrı bir oyundur; bu rehber 52 kartlık Texas Hold'em içindir.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-showdown-rules | Showdown ve muck kuralları | /images/holdem-showdown-rules-hero.webp
/tr/blog/holdem-game-order | Oyun sırası | /images/blog-holdem-game-flow.webp
:::

## Sıkça sorulan sorular

**Q. Poker elleri nelerdir, sıralaması nasıl?**

A. En güçlüden en zayıfa 10 el: Royal Floş, Sıralı Floş, Kare, Full, Floş, Kent, Üçlü, İki Çift, Çift, Yüksek Kart. Aynı kombinasyonda önce eli oluşturan kartlar, sonra kicker karşılaştırılır; türlerin değeri yoktur.

**Q. Poker kart sıralaması nasıldır?**

A. Yüksekten düşüğe A, K, Q, J, 10, 9, 8, 7, 6, 5, 4, 3, 2. As hem en yüksek (A-K-Q-J-10) hem en düşük (A-2-3-4-5) kentte oynayabilir. Maça, kupa, karo ve sinek arasında üstünlük yoktur.

**Q. Pokerde flush kenti yener mi?**

A. Evet. Flush #5, kent #6, yani flush her zaman kazanır. Daha yukarıdadır çünkü aynı türden beş kart, beş ardışıktan daha zordur.

**Q. Full mu büyük renk mi?**

A. Full büyüktür. Full (full house, #4) floşu (#5) — masadaki adıyla rengi — ve kenti yener. Full yalnızca daha yüksek bir full, kare, sıralı floş ve royal floşa kaybeder.

**Q. Kicker nedir?**

A. Kicker (yan kart), tamamlanmış elinin parçası olmayan ama aynı el türünde beraberliği bozan karttır. Örneğin A-A-K ile A-A-Q'da ikisinde de As çifti var; papaz kicker'ı olan kazanır. Hangi elde oynadığını ve board'un ne zaman oynadığını [kicker ve split pot kuralları](/tr/blog/holdem-tiebreak-rules) yazısında anlattım.

**Q. İki oyuncuda aynı el olabilir mi?**

A. Evet. İkisinin de en iyi beş kartı değer olarak aynıysa pot bölünür. Texas Hold'em'de türler asla beraberlik bozmaz.

**Q. Kendi iki kartını da kullanmak zorunda mısın?**

A. Hold'em'de hayır — en iyi beşini iki kartın ve beş ortak kartın herhangi bir kombinasyonundan, hatta hiç kullanmadan oluşturursun. (Omaha farklıdır: tam olarak ikisini kullanmalısın.)

**Q. Set ile trips arasındaki fark ne?**

A. İkisi de üçlü. *Set*, elindeki bir çift artı bir board kartıdır (iyi gizlenmiş); *trips*, board'daki bir çift artı senin bir kartın (okuması daha kolay). Set daha çok çip kazandırır.

**Q. Pokerde en güçlü el nedir?**

A. Royal floş (aynı türden A-K-Q-J-10). Yenilemez — tek "beraberlik", tamamen board'da yatan ve herkesin paylaştığı bir royal floştur, bu da potu böler. Ondan sonraki en güçlü eller sıralı floş (straight flush) ve karedir.

**Q. Pokerde kazanan eller hangi sırayla sıralanır?**

A. Yukarıdan aşağıya, Türk masalarındaki adlarıyla: Royal Renk, Sıralı Renk, Kare, Ful, Renk (floş), Kent, Set (üçlü), Döper (iki çift), Per (çift) ve Beş Benzemez (yüksek kart). Üstteki el alttakini her zaman yener.

**Q. Pokerde 3 as ne demek?**

A. Üç As, yani As üçlüsü (set ya da trips). Üçlü iki çifti ve çifti yener ama kente, floşa ve daha üstteki ellere kaybeder. Üçlüler arasında As üçlüsü en yükseğidir.

**Q. Royal flush ne demek? Nasıl yapılır?**

A. Royal flush (royal floş), aynı türden 10-J-Q-K-A'dır — pokerin en yüksek eli. Hold'em'de iki kapalı kartın ve beş board kartının en iyi beşiyle yapılır; river'a kadar yaklaşık 30.940'ta bir gelir.

**Q. Döper ne demek? Per ne demek?**

A. Döper, iki çifttir (two pair) — örneğin 10-10-8-8 ve bir yan kart. Per ise tek çifttir (pair); "as per" As çifti, "kız per" kız çifti demektir. Döper peri yener.

**Q. Pokerde floş (renk) ne demek?**

A. Floş, ya da masadaki adıyla renk, aynı türden beş karttır; sıraları önemli değildir. Aynı türden dört kart floş sayılmaz, beşinci kart gerekir. Floş kenti yener, fula kaybeder.

**Q. Üçlü iki çiftten iyi mi?**

A. Evet. Üçlü #7, iki çift #8, yani üçlü kazanır. İki çift yalnızca çift ve yüksek kartı yener.

---

## Hatırlaman gereken 3 şey

1. **Sıralama:** Royal Flush > Straight Flush > Kare > Full House > Flush > Kent > Üçlü > İki Çift > Çift > Yüksek Kart.
2. **Tuzak:** flush (#5) kenti (#6) yener — ve her eşlenmiş board ikisini de yenen bir full house gizleyebilir.
3. **Gerçek:** potların çoğu çift veya yüksek kartla kazanılır, yani kicker'ın sandığından değerlidir.

Sıralamayı bir öğleden sonrada öğren, kafa karıştıran kapışmaları çalış ve her board'da "türler → kentler → çiftler" taramasını yap. Bunu yap, bir daha asla potu yanlış tarafa itmeyeceksin. Bir elin preflop'tan river'a nasıl aktığını görmek istersen [Texas Hold'em oyun sırası](/tr/blog/holdem-game-order) yazısıyla devam et.
`.trim(),
};
