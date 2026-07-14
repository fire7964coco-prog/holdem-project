import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Texas Hold'em'de poker el sıralaması — en güçlüden en zayıfa, olasılıklarla",
  seoTitle: "Kazandın sandın ama potu mu kaybettin? — Poker elleri",
  desc: "Flush yaptın ama yine de potu mu kaybettin? Neredeyse her zaman gözden kaçan tek bir kural yüzündendir. İşte en güçlüden en zayıfa 10 poker eli, her birinin gerçek olasılığı ve kicker ile beraberliklerin kazananı nasıl belirlediği.",
  tldr: "Poker el sıralaması en güçlüden en zayıfa şöyledir: Royal Flush, Straight Flush, Four of a Kind (Kare), Full House, Flush, Straight (Kent), Three of a Kind (Üçlü), Two Pair (İki Çift), Pair (Çift) ve High Card (Yüksek Kart).",
  category: "초보 가이드",
  date: "2026-06-09",
  updated: "2026-06-09",
  keepImagesInBody: true,
  readTime: "14 dk",
  emoji: "🃏",
  tags: ["poker elleri", "poker el sıralaması", "poker kart sırası", "texas holdem elleri", "pokerde hangi el kazanır", "kicker poker", "beraberlik kuralları poker", "en iyi poker elleri"],
  content: `
River'da head-up'sın. Flush'ını yaptın, en iyisinin bu olduğundan eminsin — sonra krupiye potu karşı tarafa itiyor. Board eşlenmişti, rakibinde full house vardı ve bunun geleceğini hiç görmedin.

"Kazandığımı sanmıştım" anlarının neredeyse hepsi aynı şeye dayanır: **poker el sıralamasını** yeterince hızlı okuyamamak. Sıralama beş dakikada öğrenilir. Asıl zor olan, onu canlı, baskı altında, eşlenmiş veya bağlantılı bir board'da okumaktır — ve bunu kimse pek iyi anlatmaz.

Bu rehber ikisini de çözüyor. Gerçek olasılıklarla tam sıralamayı, tüm beraberlik kurallarını, "en iyi beş kartını bul" alıştırması için üç gerçek board sorusunu ve herhangi bir board'u okumak için 1 saniyelik bir rutini bulacaksın.

---

## Poker el sıralaması: tam liste

Buradan başla. İşte Texas Hold'em'de her eli river'a kadar yapma olasılığıyla birlikte, en güçlüden en zayıfa kadar tüm sıralama.

| # | El | Diğer adı | Nedir | Olasılık (river'a kadar) |
|------|------|------|------|------|
| **1** | Royal Flush | "Royal" | Aynı türden A-K-Q-J-10 | %0,0032 |
| **2** | Straight Flush | "Steel wheel" (A-5) | Aynı türden 5 ardışık | %0,0279 |
| **3** | Four of a Kind (Kare) | "Quads" | Aynı değerden dört kart | %0,168 |
| **4** | Full House | "Full" | Üçlü + çift | %2,60 |
| **5** | Flush | — | Aynı türden 5 kart | %3,03 |
| **6** | Straight (Kent) | — | Karışık türden 5 ardışık | %4,62 |
| **7** | Three of a Kind (Üçlü) | "Set" / "Trips" | Aynı değerden üç kart | %4,83 |
| **8** | Two Pair (İki Çift) | — | İki farklı çift | %23,5 |
| **9** | Pair (Çift) | — | Aynı değerden iki kart | %43,8 |
| **10** | High Card (Yüksek Kart) | "Hiçbir şey" | Hiçbir kombinasyon yok | %17,4 |

> **Tartışmaları bitiren kural**
> Çift ve Yüksek Kart birlikte, river'a kadarki tüm yedi kartlık ellerin yaklaşık %61'ini oluşturur. Büyük eller akılda kaldığı için sık görünür — ama potların çoğu bir çift ve bir kicker ile belirlenir.

:::quiz:::

---

## Kart gücü: 30 saniyede temel

Ellerden önce kart gücüne ihtiyacın var. Sadece iki şey.

### Değer sırası (yüksekten düşüğe)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

As en güçlü karttır ve kuralı bozan tek karttır: hem yüksek (A-K-Q-J-10) hem düşük (A-2-3-4-5, "the wheel") oynar. Ama ortadan dönemez: Q-K-A-2-3 bir kent **değildir**.

### Türlerin değeri yoktur

Standart Texas Hold'em'de **hiçbir tür diğerini yenmez**. Maça kupayı yenmez. Tür yalnızca bir flush *oluşturmak* için önemlidir, asla beraberlik bozmak için değil. İki oyuncunun aynı beş kartı farklı türlerde varsa, pot bölünür — her seferinde.

---

## 10 poker eli açıklaması

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

İki kare arasında yüksek değer kazanır. Dördü de *board'daysa*, en yüksek **kicker** belirler — ve As söz sahibidir.

### #4 — Full House

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — üç kız + iki beşli:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — bir üçlü artı bir çift.

**Önce üçlüyü** karşılaştır: QQQ55, JJJ99'u yener çünkü kızlar valeleri geçer, çiftin büyüklüğü ne olursa olsun. Çift yalnızca üçlü berabere kalırsa karşılaştırılır.

> **En yaygın "cooler"**
> Board her eşlendiğinde, bir flush ya da kent'e bel bağlamadan önce full house ara. "En yüksek flush'ım full house'a yenildi" Hold'em'in en sık görülen bad beat'idir.

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

Onu oluşturmanın iki yolu vardır ve fark önemlidir:

- **Set:** elindeki bir çift artı bir board kartı (örneğin J♣ J♠ tutarsın ve board J♥ getirir). Gizli ve tehlikeli.
- **Trips:** board'daki bir çift artı senin bir kartın. Rakip için okuması daha kolay ve daha çok paylaşılır.

Set daha çok çip kazandırır çünkü kimse onu görmez.

### #8 — Two Pair (İki Çift)

:::hand[10♠,10♥,8♣,8♦,A♠] İki Çift — onlu ve sekizli + As kicker:::

**10♠ 10♥ 8♣ 8♦ A♠** — iki farklı çift.

Şu sırayla karşılaştırılır: **yüksek çift → düşük çift → kicker**. KK99-A, QQJJ-A'yı yener çünkü başka hiçbir şeye bakmadan önce papazlar kızları geçer.

### #9 — Pair (Çift)

:::hand[K♠,K♦,9♥,6♣,2♠] Çift — papazlar + üç kicker:::

**K♠ K♦ 9♥ 6♣ 2♠** — aynı değerden iki kart.

Hold'em'in en yaygın tamamlanmış eli. Aynı iki çift kicker ile belirlenir: **çiftin değeri → kicker 1 → kicker 2 → kicker 3**, yüksekten düşüğe. "Aynı el" yenilgilerinin çoğu burada olur: kicker'ına dikkat et.

### #10 — High Card (Yüksek Kart)

:::hand[A♣,Q♠,9♥,5♦,3♣] Yüksek Kart — kombinasyon yok:::

**A♣ Q♠ 9♥ 5♦ 3♣** — hiçbir şey bağlanmıyor.

Showdown'da en yüksek kart kazanır, sonra bir sonraki, ve beşi boyunca böyle gider. Beşi de eşleşirse pot bölünür. Bir blöf görüldüğünde ve tutmadığında elinde kalan budur.

---

## Kicker ve beraberlikler gerçekte nasıl işler

![Poker showdown — iki oyuncunun en iyi beş kartının karşılaştırılması](/images/holdem-hand-rankings-showdown.webp "Showdown'da en iyi beş kartlık el potu alır")

Gerçek potları belirleyen kısım budur — ve çoğu tablonun atladığı kısım. İki oyuncuda **aynı el türü** olduğunda tam olarak şu sırayı izle:

1. **El türünü karşılaştır.** Flush her zaman kenti yener, full house her zaman flush'ı yener, vesaire.
2. **Eli oluşturan kartları karşılaştır.** As çifti papaz çiftini yener; As'lı flush vale'li flush'ı yener.
3. **Kicker'ları karşılaştır.** Tamamlanmış el berabere kalırsa, kalan kartlar yüksekten başlayarak teker teker belirler.
4. **Hâlâ aynı mı? Pot bölünür.** Türler asla beraberlik bozmaz.

Sağdaki rozet, **kicker'ın eli belirlemekte kullanılıp kullanılmadığını** gösterir.

:::tiebreak
Royal Flush|Her zaman beraberlik (pot bölünür)|-Kicker yok
Straight Flush|Yalnızca en yüksek kart|-Kicker yok
Kare|Karenin değeri → 5. kart|+Kicker geçerli
Full House|Üçlünün değeri → çiftin|-Kicker yok
Flush|Beşi de, yüksekten düşüğe|+Kicker geçerli
Kent|Yalnızca en yüksek kart|-Kicker yok
Üçlü|Üçlünün değeri → 2 kicker|+Kicker geçerli
İki Çift|Yüksek çift → düşük → kicker|+Kicker geçerli
Çift|Çiftin değeri → 3 kicker|+Kicker geçerli
Yüksek Kart|Beşi de, yüksekten düşüğe|+Kicker geçerli
:::

Bir **kicker**, tamamlanmış elinin parçası olmayan ama beraberliği bozan bir karttır. A-A-K ile A-A-Q'da ikisinde de As çifti var — papaz kicker'ı kazanır. İyi oyuncular bu yüzden sadece çift yapmaya değil, yüksek kartlarının *kalitesine* önem verir.

---

## Board'u oku: 3 gerçek soru

Sıralamayı bilmek, onu hızlı okumakla aynı şey değil. İşte üç gerçek durum. Cevabı kapat, yedi karttan en iyi beşini bul, sonra kontrol et.

### Soru 1 — Gizli full house

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 kart):::

Elinde **Q♥ Q♦** var. En iyi elin ne?

→ Board zaten iki çift gösteriyor (A-A ve K-K). İki kızın ve board'daki Q♠ bir **kız üçlüsü** yapar, board'daki As'larla birlikte bir **full house — QQQ + AA** olur. En iyi beşin bunlar. Yeni başlayanlar "AAKK + Q sadece iki çift değil mi?" diye takılır — hayır. Üçlün olduğu anda full house'u alırsın. **Full house iki çifti yener.**

### Soru 2 — Aslında daha güçlü olan flush

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 kart):::

Elinde **K♥ 2♣** var. Board'da dört kupa var.

→ K♥ beşinci kupa, bu yüzden "flush" diye düşünüyorsun. Ama sıraya bak: **K♥ 10♥ 9♥ 8♥ 7♥** beş *ardışık* kupa — yani **papazlı bir straight flush**, el #2. Sadece flush sanmadan önce flush kartlarının bağlı olup olmadığını her zaman kontrol et.

### Soru 3 — Paylaşmak gerektiğinde

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 kart):::

Elinde **A♥ 3♣** var. Board'da zaten papaz üçlüsü var.

→ A♥ board'daki A♠ ile eşleşir ve sana **full house, KKK + AA** verir. Ama rakipte de As varsa, *aynı* full house onda da var ve pot bölünür. As'ı yoksa ve sadece daha küçük bir çift varsa, full house'un kazanır. Ders: board işin neredeyse tamamını yaptığında, elin çoğu zaman sadece bir ekstra kart değerindedir.

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

Sıralama keyfî değil — saf olasılık. **Bir eli yapmak ne kadar zorsa, o kadar yukarıdadır.** 52 kartlık destede, aynı türden beş kart yapmanın yolları, herhangi bir türden beş ardışık yapmaktan daha azdır — bu yüzden flush, kentin üstündedir. Bu tek ilke tüm sıralamayı açıklar.

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
| **Short Deck (6+)** | Değiştirilmiş | Flush full house'u yener; bazen A-6-7-8-9 kent sayılır |

Özet: standart sıralamayı bir kez öğren, neredeyse her oyunda işine yarar. Sadece Omaha'nın "tam olarak iki" kuralını ve Short Deck'te flush'ın yükselişini hatırla.

---

## Sıkça sorulan sorular

**Q. Pokerde flush kenti yener mi?**

A. Evet. Flush #5, kent #6, yani flush her zaman kazanır. Daha yukarıdadır çünkü aynı türden beş kart, beş ardışıktan daha zordur.

**Q. Full house flush'ı yener mi?**

A. Evet. Full house (#4), flush (#5) ve kenti yener. Yalnızca kare, straight flush ve royal flush'a kaybeder.

**Q. Kicker nedir?**

A. Kicker, tamamlanmış elinin parçası olmayan ama beraberliği bozan bir karttır. Aynı iki çiftte en yüksek yan kart (kicker) kazanır. En iyi kicker As'tır.

**Q. İki oyuncuda aynı el olabilir mi?**

A. Evet. İkisinin de en iyi beş kartı değer olarak aynıysa pot bölünür. Texas Hold'em'de türler asla beraberlik bozmaz.

**Q. Kendi iki kartını da kullanmak zorunda mısın?**

A. Hold'em'de hayır — en iyi beşini iki kartın ve beş ortak kartın herhangi bir kombinasyonundan, hatta hiç kullanmadan oluşturursun. (Omaha farklıdır: tam olarak ikisini kullanmalısın.)

**Q. Set ile trips arasındaki fark ne?**

A. İkisi de üçlü. *Set*, elindeki bir çift artı bir board kartıdır (iyi gizlenmiş); *trips*, board'daki bir çift artı senin bir kartın (okuması daha kolay). Set daha çok çip kazandırır.

**Q. Pokerin en iyi eli hangisi?**

A. Royal Flush (aynı türden A-K-Q-J-10). Yenilemez — tek "beraberlik", tamamen board'da yatan ve herkesin paylaştığı bir royal flush'tır, bu da potu böler.

**Q. Üçlü iki çiftten iyi mi?**

A. Evet. Üçlü #7, iki çift #8, yani üçlü kazanır. İki çift yalnızca çift ve yüksek kartı yener.

---

## Hatırlaman gereken 3 şey

1. **Sıralama:** Royal Flush > Straight Flush > Kare > Full House > Flush > Kent > Üçlü > İki Çift > Çift > Yüksek Kart.
2. **Tuzak:** flush (#5) kenti (#6) yener — ve her eşlenmiş board ikisini de yenen bir full house gizleyebilir.
3. **Gerçek:** potların çoğu çift veya yüksek kartla kazanılır, yani kicker'ın sandığından değerlidir.

Sıralamayı bir öğleden sonrada öğren, kafa karıştıran kapışmaları çalış ve her board'da "türler → kentler → çiftler" taramasını yap. Bunu yap, bir daha asla potu yanlış tarafa itmeyeceksin.
`.trim(),
};
