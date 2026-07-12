import type { Post } from "../posts";

export const POST: Post = {
  slug: "texas-holdem-rules-for-beginners",
  title: "Yeni başlayanlar için Texas Hold'em nasıl oynanır — kurallar, çipler, eller ve ilk strateji",
  seoTitle: "Texas Hold'em nasıl oynanır? Sıfırdan kurallar ve çip düzeni",
  desc: "İlk kez mi oynayacaksın? Texas Hold'em'i adım adım anlatıyoruz: blindler, çip dağıtımı, el sıralaması ve masanın yanına koyabileceğin yazdırılabilir hile kağıdı.",
  tldr: "Texas Hold'em'de her oyuncu 2 kapalı kart alır, 5 ortak kart açılır ve dört bahis turunun sonunda en iyi 5 kartlık poker eli kazanır.",
  category: "rules",
  date: "2026-06-11",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "14 dk",
  emoji: "♠️",
  image: "/images/rules-texas-holdem.webp",
  imageAlt: "Texas Hold'em temel bilgiler infografiği — A♣ K♦ kapalı kartların yanında beş ortak kartlık A♠ K♥ Q♦ J♣ 10♠ yelpazesi",
  tags: [
    "texas holdem nasıl oynanır",
    "poker nasıl oynanır",
    "texas holdem kuralları",
    "poker el sıralaması",
    "texas holdem masada kim başlar",
    "poker çipleri başlangıç",
    "texas holdem kaç kişi oynar",
    "no limit texas holdem",
  ],
  content: `
==Texas Hold'em kuralları== diye arattıysan muhtemelen henüz kalın bir kumarhane kural kitabına ihtiyacın yok.

Sana lazım olan şey aslında basit: blindlerin ne olduğu, sıranın ne zaman sana geldiği, beş ortak kartın nasıl çalıştığı, hangi elin kazandığı ve evde oynarken herkese kaç çip dağıtacağın.

Bu rehber ==Texas Hold'em'in nasıl oynandığını== sade bir dille anlatıyor: tam oyun sırası, yeni başlayanlar için çip düzeni, dağıtımın temelleri ve masanın yanına koyabileceğin yazdırılabilir bir hile kağıdı.

### Texas Hold'em 30 saniyede

1. İki oyuncu **blind** (zorunlu bahis) koyar
2. Herkese kapalı **2 hole kart** dağıtılır
3. Bahis yap, gör (call), yükselt (raise) ya da pas geç (fold) — **preflop**
4. Dağıtıcı **3 ortak kart** açar (flop) → tekrar bahis
5. Dağıtıcı **1 kart daha** açar (turn) → tekrar bahis
6. Dağıtıcı **son kartı** açar (river) → son bahis turu
7. Kalan oyuncular ellerini karşılaştırır — **en iyi 5 kartlık el kazanır**

Aklında kalsın:
- İki hole kartını da, birini ya da hiçbirini kullanmayabilirsin — en iyi eli hangisi yapıyorsa o
- Dağıtıcı butonu her elde döner, yani blindler ve sıra düzeni her turda kayar
- Herkes pas geçerse el gösterme (showdown) olmadan potu alırsın

---

## Texas Hold'em temel kuralları

Texas Hold'em'in temel kuralları, masayı sırayla gördüğünde şaşırtıcı derecede basittir.

Her el bir dağıtıcı butonuyla başlar. Butonun solundaki iki oyuncu **small blind** ve **big blind** denen zorunlu bahisleri koyar — bu kısım kafanı karıştırdıysa [blindlerin ne olduğuna ve small/big blind'ın nasıl çalıştığına](/tr/blog/holdem-blind-meaning) bir göz at. Ardından her oyuncuya kapalı iki kart verilir. Bunlar senin hole kartların (kapalı kartlar).

Bundan sonra dağıtıcı masanın ortasına beş ortak kart açar:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Aşama | Açılan kartlar | Ne olur |
|------|----------------|--------------|
| Preflop | 0 ortak kart | Oyuncular sadece 2 hole kartıyla oynar |
| Flop | 3 ortak kart | İlk ortak kartlar açılır |
| Turn | 1 kart daha | Dördüncü ortak kart açılır |
| River | 1 son kart | Beşinci ortak kart açılır |
| Showdown | Yeni kart yok | Kalan oyuncular en iyi 5 kartlık elini karşılaştırır |

</div>

==r:İki hole kartını da kullanmak **zorunda değilsin**.== Board'un kendisi en iyi eli yapıyorsa iki, bir ya da sıfır hole kart kullanabilirsin — buna board okuma denir.

Örneğin:

| Senin kartların | Board | Senin en iyi elin |
|-----------|-------|----------------|
| A♠ K♠ | A♦ 7♣ 7♥ 2♠ 9♣ | İki çift (İki Çift): as ve yediler |
| 8♠ 8♦ | K♣ 8♥ 4♠ 4♦ J♣ | Full: sekizler üstüne dörtler |
| 2♣ 3♦ | A♠ K♠ Q♠ J♠ 10♠ | Board'da Royal Floş |

El sıralaması sana hâlâ yabancıysa oynamadan önce [Texas Hold'em el sıralamasını](/tr/blog/holdem-hand-rankings) aç. Bir floşun mu yoksa bir kentin mi kazandığını bilmek, ileri seviye stratejiyi ezberlemekten çok daha önemli.

---

## Texas Hold'em nasıl oynanır — yeni başlayan akışı özeti

Bu yazı sana akışın **yeni başlayan sürümünü** veriyor ki masaya oturunca donup kalmayasın. Tam bir eli sokak sokak, bahis sırasıyla ve örneklerle görmek istersen sırada [Texas Hold'em oyun sırası](/tr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") var.

| Sıra | Aşama | Yeni başlayan neyi hatırlamalı |
|------:|-------|--------------------------------|
| 1 | Dağıtıcı butonu | Blindleri ve sıra düzenini belirler |
| 2 | Small blind / big blind | Kartlar dağıtılmadan önceki zorunlu bahisler |
| 3 | İki hole kart | Sadece senin gördüğün kapalı kartlar |
| 4 | Preflop | Aksiyon big blind'ın solundan başlar |
| 5 | Flop, turn, river | Ortak kartlar 3, sonra 1, sonra 1 gelir |
| 6 | Showdown | Kalan oyuncular en iyi 5 kartlık eli karşılaştırır |

İlk seansın için akılda tutman gereken tek fikir şu: ==**her yeni sokak açıldığında bir bahis turu daha yapılır.**==

![Flop öncesi bir Texas Hold'em masasının yukarıdan görünümlü infografiği — her oyuncu iki kapalı kart tutuyor ve board hâlâ boş](/images/rules-step2-preflop.webp "Texas Hold'em adım adım nasıl oynanır — blindlerden sonra preflop aksiyonu")

Ayrıntılı sürüm için [blindlerden showdown'a Texas Hold'em oyun sırasıyla](/tr/blog/holdem-game-order) devam et.

---

## Texas Hold'em kaç kişiyle oynanır?

Texas Hold'em bir masada **2 ile 10 kişi** arasında oynanır. Başlamak için dolu bir masaya ihtiyacın yok — sadece en az iki kişi yeter.

| Oyuncu | Adı | Yeni başlayan notu |
|--------:|------------------|----------------|
| 2 | Heads-up (bire bir) | Hızlı ve agresif; blindler ters döner (aşağıya bak) |
| 3–6 | Short-handed (6-max) | Online'da en yaygın; daha çok el oynanabilir |
| 7–10 | Full ring (9-max) | Klasik ev/kumarhane oyunu; daha sıkı oyna, daha çok pas |

İlk ev oyunun için **4 ila 6 kişi** tam kıvamındadır — öğrenmeye yetecek kadar aksiyon, eller hızlı ilerlesin diye yetecek kadar az kişi.

==g:Sadece iki oyuncu kaldığında (ya da baştan iki kişiyle başladığında) buna heads-up denir.== Kurallar aynıdır, tek bir farkla: ==buton small blind'ı koyar ve floptan önce ilk aksiyonu alır, ama flop, turn ve river'da big blind ilk oynar.== Bu ters çevirme, aksi halde hep en son oynayacak olan tarafı dengeleyerek oyunu adil tutar.

Oyuncu sayısı stratejini de değiştirir — ne kadar çok rakip varsa birinin güçlü bir eli olma ihtimali o kadar yüksektir, o yüzden zayıf elleri atarsın. Rahat bir ring oyunu ile rekabetçi bir format arasında kararsızsan [cash game mi turnuva mı](/tr/blog/holdem-tournament-vs-cash-game) yazısına bak.

---

## Texas Hold'em'de masada kim başlar?

Bu, yeni başlayanların en sık sorduğu sorulardan biri, çünkü cevap floptan sonra değişiyor.

| Tur | İlk oynayan | Neden |
|------|---------------------|-----|
| Preflop | Big blind'ın solundaki oyuncu | Blindler zaten zorunlu bahisleri koydu |
| Flop | Butonun solundaki ilk aktif oyuncu | Buton floptan sonra en son oynar |
| Turn | Butonun solundaki ilk aktif oyuncu | Aynı postflop düzeni |
| River | Butonun solundaki ilk aktif oyuncu | Aynı postflop düzeni |

Kolay hatırlama numarası:

==**Floptan önce big blind'ın soluna bak. Floptan sonra butonun soluna bak.**==

İşte tam da bu yüzden ==g:buton bu kadar güçlü bir pozisyondur==. ==Buton genelde flop, turn ve river'da en son oynar==, yani herkesin ne yaptığını önce görür. Her koltuğun adını — UTG'den butona, 6-max ile 9-max karşılaştırması, hangi koltuğun hangi açılış aralığına izin verdiği — baştan sona görmek istersen poker pozisyonları rehberine bakabilirsin.

---

## Texas Hold'em'e kaç çiple başlanır?

Bir kumarhanede çip değerleri zaten tanımlıdır. Ev oyununda çip düzenini kendin seçersin.

Yeni başlayanlar için sayıları basit tut. Beş farklı çip rengine gerek yok. Üç ya da dört renk yeter.

| Ev oyunu tipi | Önerilen başlangıç stack | Örnek blindler |
|:---|:---|:---:|
| Çok rahat öğrenme oyunu | 100 çip | 1 / 2 |
| Standart ev cash game hissi | 200 çip | 1 / 2 ya da 2 / 4 |
| Daha uzun turnuva tarzı gece | 1.000 ila 2.000 çip | 10 / 20 |

İlk ev oyunun için şu düzen gayet iyi çalışır:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Çip rengi | Değer | Oyuncu başına çip | Toplam değer |
|:---|:---:|:---:|:---:|
| Beyaz | 1 | 20 | 20 |
| Kırmızı | 5 | 16 | 80 |
| Mavi | 25 | 4 | 100 |
| **Toplam** | | **40 çip** | **200** |

</div>

200 çip ve 1/2 blindlerle ==g:her oyuncu 100 big blind ile başlar==. Bu, yeni başlayanlara pas geçmek, görmek, yükseltmek ve flop görmek için ==çok çabuk iflas etmeden== yeterince alan verir.

---

## Texas Hold'em'e ne kadar parayla başlanır?

Cevap, gerçek parayla mı oynadığına yoksa sadece pratik mi yaptığına bağlı.

Öğreniyorsan önce oyun çipleriyle başla. Amaç oyunun sırasını anlamak, üzerine baskı bindirmek değil.

Küçük bir ev cash game'i oynuyorsan, herkesin kaybetmeye gönül rahatlığıyla razı olduğu bir buy-in seç. Yaygın bir yeni başlayan yapısı şöyledir:

| Blind seviyesi | Yeni başlayan buy-in | Notlar |
|:---|:---:|:---|
| $0,01 / $0,02 | $2 ila $5 | Gerçek parayla öğrenmek için en iyisi |
| $0,05 / $0,10 | $10 ila $20 | Hâlâ küçük ama kararlar gerçek hissettirir |
| $0,10 / $0,25 | $25 ila $50 | Oyuncular kuralları öğrendikten sonra daha uygun |

==r:İnsanları geren bahislerle başlama.== Gergin yeni başlayanlar daha hızlı öğrenmez. Sadece fazla pas geçer, duygusal call yapar ya da kurallar üzerine tartışır.

Şunu da bil: bir **turnuva** buy-in'i cash game'den farklı çalışır — tek sabit bir giriş ücreti ödersin, paraya çevrilemeyen belirli bir stack alırsın ve bir oyuncu tüm çipleri toplayana kadar oynanır. Hangisini istediğinden emin değilsen önce [cash game mi turnuva mı](/tr/blog/holdem-tournament-vs-cash-game) yazısını oku.

Online pratik için, aksiyon sırasını düşünmeden anlatabilene kadar ücretsiz masaları kullan. Sonra yavaşça yüksel.

---

## No-Limit, Limit mi Pot-Limit mi? Hangi Texas Hold'em'i oynuyorsun?

İnsanlar "Texas Hold'em" dediğinde neredeyse her zaman **No-Limit Hold'em (NLHE)** kastederler — WSOP Ana Turnuvası'nda ve neredeyse her ev oyununda kullanılan format. Dağıtım, blindler ve el sıralaması üç formatta da aynıdır. Değişen tek şey **ne kadar bahis yapabileceğindir.**

| Format | Ne kadar bahis yapabilirsin? | Nerede görürsün |
|--------|-----------------------|---------------------|
| **No-Limit (NLHE)** | Tüm çiplerine kadar herhangi bir miktar ("all-in") | Varsayılan oyun — ev oyunları, çoğu kumarhane, WSOP |
| **Fixed-Limit** | Sadece sabit artışlar (belirli bir küçük bahis, sonra turn/river'da iki katı) | Eski kumarhane masaları; daha az büyük dalgalanma |
| **Pot-Limit** | Potun o anki büyüklüğüne kadar | Hold'em'de nadir; Omaha'da standart (PLO) |

Yeni başlayanlar için ==g:biri aksini söylemedikçe No-Limit oynadığını varsay.== No-Limit *anlaması* en kolay formattır (istediğin kadar bahis yap) ama kötü *oynanırsa* en acımasızıdır, çünkü yanlış bir call tüm stack'ine mal olabilir. Aşağıdaki pot odds bölümü ve [bahis aksiyonları — check, call, raise, fold](/tr/blog/holdem-betting-actions) tam da bu yüzden bu kadar önemli.

---

## Texas Hold'em nasıl dağıtılır?

Bir kumarhane krupiyesi gibi kusursuz dağıtman gerekmez ama temiz bir sıra izlemelisin.

İşte yeni başlayan dostu dağıtım sırası:

1. Desteyi karıştır.
2. Dağıtıcı butonunu yerleştir.
3. Small blind ve big blind çiplerini koyar.
4. Butonun solundan başlayarak saat yönünde birer birer kart dağıt.
5. Aynı şekilde her oyuncuya ikinci kartı dağıt.
6. Preflop bahis turunu oyna.
7. Bir kart yak (burn kart), sonra flop'u dağıt.
8. Bir kart yak, sonra turn'ü dağıt.
9. Bir kart yak, sonra river'ı dağıt.
10. Showdown'da en iyi beş kartlık elleri karşılaştır.

Burn kart, flop, turn ve river'dan önce kapalı olarak bir kenara konan en üstteki karttır. Desteyi korumaya yarar ve canlı pokerde standarttır.

![Bir Texas Hold'em masasının yukarıdan görünümlü infografiği — flop A♠ K♦ 8♥ ortada açık dağıtılıyor](/images/rules-step3-flop.webp "Texas Hold'em nasıl dağıtılır — preflop bahis turundan sonra flop açılır")

Rahat bir ev oyununda en önemli şey tutarlılıktır. Sokağı söyle, board'u düzenli tut ve biri karar verirken aksiyonu aceleye getirme.

---

## Texas Hold'em'de pozisyon — nerede oturduğun neden her şeyi değiştirir?

Pozisyon, **her bahis turunda ne zaman oynadığın** demektir. Daha sonra oynamak, diğer oyuncuların ne yaptığını önce görmüş olman demektir — ve bu bilgi çoğu yeni başlayanın sandığından çok daha değerlidir.

| Koltuk | Adı | Preflop sıra (9-max) | Ana nokta |
|------|------|----------------------|-----------|
| Erken pozisyon | UTG (Under the Gun) | 1. | Arkanda çok oyuncu var — en sıkı oyna |
| Orta | MP / HJ | 4.–5. | Orta aralık, yine de temkinli |
| Butonun sağında | CO (Cutoff) | 6. | İkinci en iyi koltuk — aralığı genişlet |
| Postflop en son | BTN (Buton) | 7. pre; **en son** post | **En iyi koltuk** — her postflop sokakta en son oynar |
| Dağıtıcının solunda | SB (Small Blind) | 8. pre, 1. post | En kötü koltuk — her postflop sokakta ilk oynar |
| Dağıtıcının iki solunda | BB (Big Blind) | Son pre (9.), 2. post | Preflop yükseltme opsiyonu var; postflop pozisyonsuz |

==g:Buton masadaki en kârlı koltuktur.== Flop, turn ve river'da en son oynarsın — yani her oyuncu sen karar vermeden önce el gücünü sana gösterir. Tam bir pozisyon rehberi için UTG'den butona kadar pozisyonları inceleyebilirsin.

---

## Yeni başlayanlar için Texas Hold'em stratejisi

Kurallar oturunca, ilk stratejin sıkıcı ve sağlam olmalı.

==r:Çoğu yeni başlayan çip kaybeder çünkü fazla el oynar, zayıf draw'ları kovalar ya da sırf merak ettiği için call yapar.== İlk hedefin herkesi blöfle kandırmak değil. ==g:İlk hedefin çip bağışlamayı bırakmak.==

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Yeni başlayan kuralı | Neden işe yarar |
|--------------|--------------|
| Daha az zayıf el oyna | Kötü başlangıç elleri zor kararlar doğurur |
| Güçlü elleri yükselt | Güçlü eller daha büyük potlar kurmalı |
| Erken pozisyondan daha çok pas geç | Arkandan çok oyuncu oynayacak |
| Büyük river bahislerine saygı göster | Yeni başlayanlar birçok river spotunda az blöf yapar |
| Her draw'ı kovalama | Bir draw'ın devam etmesi için doğru fiyat gerekir |

</div>

İyi yeni başlayan başlangıç elleri şunları içerir:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

**Yeni Başlayan Başlangıç Eli Tablosu — 4 Kademe**

| Kademe | Eller | Ne zaman oyna |
|------|-------|--------------|
| 🟥 **Premium — her zaman yükselt** | AA, KK, QQ, JJ, AKs, AKo | Her pozisyon, her stack |
| 🟧 **Güçlü — genelde yükselt** | TT, 99, AQs, AQo, AJs, KQs | Çoğu pozisyon; UTG'den daha sıkı |
| 🟦 **Oynanabilir — pozisyon önemli** | 88, 77, ATs, AJo, KJs, QJs, JTs | Geç pozisyonu tercih et (CO, BTN) |
| ⬜ **Varsayılan pas** | Yeni başlayan olarak geri kalan her şey | Özellikle erken pozisyondan |

**Kolay hatırlama kuralı:** TT ve üstü çiftlerle, artı AK ve AQ ile başla. Bu kabaca ellerin en iyi %5'i. Deneyim kazandıkça yavaşça genişlet.

</div>

Pozisyona göre düzenlenmiş tam 169 el tablosu için (UTG'den butona) başlangıç elleri tablosuna bakabilirsin. Başlangıç ellerini doğru kullanabilmek içinse önce [bahis aksiyonlarını — check, call, raise, fold](/tr/blog/holdem-betting-actions) bilmen gerekir.

---

## Pot odds — yeni başlayanın parasını kurtaran tek matematik kavramı

Matematik dehası olmana gerek yok. Bir bahsi görmeden önce sadece tek bir soruyu anlaman yeterli: **ödediğim fiyat, kazanma şansıma değer mi?**

### Pot odds nasıl çalışır (tek örnek)

Diyelim ki pot **$100** ve rakibin **$20** bahis yaptı. Elde kalmak için $20 call yapman gerekiyor. Toplam pot $120 olur.

Pot odds'un **$120'ye $20**, yani **6'ya 1**. Bu, bu call'ın kârlı olması için en az **7'de 1** (yaklaşık %14) kazanman gerektiği anlamına gelir.

### 2 ve 4 kuralı — anında olasılık kestirmesi

Draw eli tuttuğunda (örn. floşa dört kart), **out'larını** say — elini tamamlayacak kartlar.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Durum | Formül | Örnek (9 floş out'u) |
|-----------|---------|------------------------|
| **Flop'ta** (2 kart gelecek) | Out × 4 | 9 × 4 = **~%36 şans** |
| **Turn'de** (1 kart gelecek) | Out × 2 | 9 × 2 = **~%18 şans** |

</div>

Kazanma yüzden, pot odds'un gerektirdiği yüzden **yüksekse** call kârlıdır. Düşükse pas geç.

==r:Bu, yeni başlayanlar için tek başına en önemli matematik kavramı. Bunu iyice öğren, yeni oyuncuların yaptığı pahalı hataların yarısından otomatik olarak kaçınırsın.==

---

## Yazdırılabilir Texas Hold'em kuralları hile kağıdı

Bu, masanın yanında tutabileceğin hızlı sürüm. Notlarına kopyalayabilir, sayfayı yazdırabilir ya da ev oyunundan önce ortak İngilizce PDF'i kullanabilirsin.

[Yeni başlayanlar için Texas Hold'em kuralları PDF'ini indir](/downloads/texas-holdem-rules-for-beginners.pdf)

| Konu | Yeni başlayan cevabı |
|------|-----------------|
| Oyuncu başına kart | 2 kapalı hole kart |
| Ortak kartlar | 5 paylaşımlı board kartı |
| En iyi el | En iyi 5 kartlık poker eli |
| Bahis turları | Preflop, flop, turn, river |
| Zorunlu bahisler | Small blind ve big blind |
| İlk preflop aksiyon | Big blind'ın solu |
| İlk postflop aksiyon | Butonun solundaki ilk aktif oyuncu |
| Buton avantajı | Genelde floptan sonra en son oynar |
| Showdown olmadan kazanmak | Herkes pas geçer |
| Showdown'da kazanmak | En iyi 5 kartlık el kazanır |

En güçlüden en zayıfa temel el sıralaması (7 karttan en iyi 5'ini kullanarak her eli ne sıklıkta yaptığınla birlikte):

| Sıra | El | Yaklaşık sıklık |
|-----:|------|-----------------------|
| 1 | Royal Floş | %0,003 — yıllarca hiç görmeyebilirsin |
| 2 | Sıralı Floş | %0,03 — son derece nadir |
| 3 | Kare (Four of a Kind) | %0,17 — nadir; sertçe bahis yap |
| 4 | Full | %2,6 — güçlü ve beklenecek kadar yaygın |
| 5 | Floş | %3,0 — çoğu board'da sağlam kazanan |
| 6 | Kent (Straight) | %4,6 — floş/full'a karşı kırılgan |
| 7 | Üçlü (Three of a Kind) | %4,8 — iyi el ama board önemli |
| 8 | İki Çift (Two Pair) | %23,5 — en yaygın "güçlü" el |
| 9 | Çift (One Pair) | %43,8 — showdown'da en sık görülen el |
| 10 | Yüksek Kart (High Card) | %17,4 — showdown'daki en zayıf el; genelde blöfle kazanır |

İki oyuncunun aynı tür eli varsa, ilgili en yüksek kartları karşılaştır — kicker ve beraberlik kurallarına bakabilirsin. En iyi beş kart tamamen aynıysa pot bölünür (split).

---

## Yeni başlayanların sık yaptığı hatalar

### Hata 1: İki hole kartını da kullanmak zorunda olduğunu sanmak

İki hole kartını da, birini ya da hiçbirini kullanabilirsin. En iyi beş kartlık el kazanır.

### Hata 2: Aksiyon sırasının değiştiğini unutmak

Preflop big blind'ın solundan başlar. Floptan sonra aksiyon butonun solundan başlar.

### Hata 3: "Gelebilir" diye call yapmak

Draw'ların doğru fiyata ihtiyacı var. Pot küçük ve bahis kocamansa, zayıf bir draw kovalamak genelde pahalıya patlar.

### Hata 4: Her as ile oynamak

A♣4♦ yeni başlayana heyecan verici görünür ama zayıf aslar sık sık ikinci en iyi tek çift elleri yapar. AK ve AQ gibi büyük aslar çok daha güçlüdür.

### Hata 5: Pozisyonu görmezden gelmek

Eller, daha sonra oynadığında daha kolay oynanır. İlk oynayan sensen daha güçlü ellere ihtiyacın var, çünkü herkesin hâlâ bilgi avantajı var.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-game-order | Oyun sırası | /images/blog-holdem-game-flow.webp
/tr/blog/holdem-hand-rankings | Poker el sıralaması | /images/holdem-hand-rankings-hero.webp
:::

## SSS

### Texas Hold'em adım adım nasıl oynanır?

Blindleri koy, her oyuncuya iki hole kart dağıt, preflop bahsini oyna, flop, turn ve river'ı her sokaktan sonra bahisle aç, sonra showdown'da en iyi beş kartlık elleri karşılaştır.

### Texas Hold'em'de masada kim başlar?

Preflop'ta big blind'ın solundaki oyuncu ilk oynar. Floptan sonra dağıtıcı butonunun solundaki ilk aktif oyuncu ilk oynar ve buton genelde en son oynar.

### Texas Hold'em'e kaç çiple başlanır?

Yeni başlayan bir ev oyunu için her oyuncuya değer olarak yaklaşık 200 çip ver ve 1/2 blind kullan. Basit bir stack: değeri 1 olan 20 çip, değeri 5 olan 16 çip ve değeri 25 olan 4 çip.

### Texas Hold'em'e ne kadar parayla başlanır?

Öğrenmek için oyun çipleriyle başla. Küçük gerçek para ev oyunları için herkesin kaybetmeye razı olduğu bir buy-in kullan, örneğin $0,01/$0,02 blindlerde $2 ila $5.

### Texas Hold'em'de küçük kent var mı?

Evet. A-2-3-4-5 geçerli bir kenttir ve genelde "wheel" (tekerlek) diye anılır. Yapılabilecek en düşük kenttir. As başa dönemez: J-Q-K-A-2 kent değildir. As ya en yüksek kart (A-K-Q-J-10) ya da en düşük kart (A-2-3-4-5) olarak oynar, asla ortada olmaz.

### Texas Hold'em'de kaç farklı başlangıç eli var?

Tam 1.326 iki kartlık kombinasyon vardır ama oyuncular bunları genelde 169 başlangıç eli tipine gruplar, örneğin AA, AK suited ya da 76 offsuit.

### Yeni başlayanlar için Texas Hold'em kuralları — en basit hali nedir?

En basit hali: her oyuncu 2 kapalı kart alır. Beş paylaşımlı kart üç aşamada açılır (3, sonra 1, sonra 1). Her aşamadan sonra bahis yaparsın. Kendi kartların ve paylaşımlı kartların herhangi bir karışımını kullanan en iyi 5 kartlık el kazanır. Herkes pas geçerse, elinde hangi kartlar olursa olsun sen kazanırsın.

### Texas Hold'em kuralları — blindler ne demek?

Dağıtıcı butonunun solundaki iki oyuncu, kartlar dağıtılmadan önce zorunlu bahisleri koymak zorundadır. İlk oyuncu small blind'ı, ikincisi big blind'ı (genelde iki katı) koyar. Bu bahisler potta her zaman uğruna savaşılacak para olmasını garanti eder. Diğer her oyuncu, elde kalmak için en azından big blind'ı görmek zorundadır.

### Texas Hold'em kurallarının hızlı sürümü nedir?

Blindleri koy → 2 hole kart dağıt → preflop bahsi → 3 ortak kart aç (flop) + bahis → 1 kart aç (turn) + bahis → 1 kart aç (river) + bahis → en iyi el kazanır. Toplam: dört bahis turu, beş ortak kart, tek kazanan.

### Texas Hold'em oynamak için kaç kişi gerekir?

En az 2 oyuncu gerekir ve masaya 10 kişiye kadar oturabilir. Tam iki oyuncuyla buna heads-up denir ve blindler ters döner — buton small blind'ı koyar ve preflop ilk oynar, big blind ise floptan sonra ilk oynar. İlk ev oyunun için 4 ila 6 kişi aksiyonu hızlı ve takip etmesi kolay tutar.

### Texas Hold'em'de no-limit ne demek?

No-Limit, herhangi bir bahis turunda tüm çiplerine kadar istediğin miktarda bahis yapabilmen demektir — "all-in" hamlesi budur. WSOP Ana Turnuvası dahil varsayılan ve en popüler formattır. Limit Hold'em her bahsi sabit bir boyutla sınırlar, Pot-Limit ise bahsini o anki pot boyutuyla sınırlar.

### Bir Texas Hold'em eli ne kadar sürer?

Tek bir el genelde yaklaşık 10 ila 60 saniye sürer, ama zorlu kararlarla dolu büyük çok kişili bir pot birkaç dakika sürebilir. Birkaç saatlik rahat bir ev seansında düzinelerce el oynanır, yani kimse tek bir ele bütün akşamını adamak zorunda kalmaz.

---

## Son söz

Texas Hold'em, kuralları stratejiden ayırdığında öğrenmesi çok daha kolaydır.

Önce ==akışı öğren==: blindler, iki hole kart, beş ortak kart, dört bahis turu ve en iyi beş kartlık el. ==g:Sonra pozisyonu, başlangıç ellerini ve temel pot kararlarını öğren.==

Bir sonraki adımın için [Texas Hold'em el sıralamasını](/tr/blog/holdem-hand-rankings) gözden geçir, [başlangıç eli tablosuyla](/hand-chart) pratik yap ve bir call'ın neden kârlı olup olmadığını anlamak istediğinde [poker olasılık hesaplayıcısını](/calculator) kullan.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Oyun akışı</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em oyun sırası</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tam el akışı — preflop'tan showdown'a gerçek örneklerle</div>
  </a>
  <a href="/tr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker el sıralaması — en iyiden en kötüye</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">10 elin tamamı olasılıklar, örnekler ve board bulmacalarıyla</div>
  </a>
  <a href="/tr/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Bahis</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Check, Call, Raise, Fold açıklaması</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Her aksiyonu ne zaman kullanmalı + karar tablosu</div>
  </a>
  <a href="/tr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Showdown kuralları: kim önce açar?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Son agresör, mucking, slow roll ve all-in kuralları</div>
  </a>
  <a href="/tr/blog/holdem-all-in-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">All-In</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">All-in kuralları: yan potlar ve reraise'ler</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Ana pot, yan pot ve reraise hakkı</div>
  </a>
</div>
`.trim(),
};
