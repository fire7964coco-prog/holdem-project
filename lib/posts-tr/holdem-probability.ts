import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Poker olasılıkları tablosu — Texas Hold'em'de her elin gerçek ihtimali",
  seoTitle: "Ne sıklıkla tutturursun? — Poker olasılıkları tablosu",
  desc: "Texas Hold'em'de her elin, flop'un ve draw'ın gerçek olasılıkları; 2 ve 4 kuralı ve pot oranı tek bir poker olasılıkları tablosunda, sade dille.",
  tldr: "River'a kadar elin %43,8 ihtimalle Çift, %23,5 ihtimalle İki Çift, %3,0 ihtimalle Floş ve %2,6 ihtimalle Full olur. Royal floş ise yaklaşık 31.000 elde yalnızca bir kez gelir.",
  category: "odds",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-01",
  keepImagesInBody: true,
  readTime: "13 dk",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Beş ortak kartın açıldığı, çip yığınlarının dağıldığı ve oyuncuların elin ortasında olduğu bir Texas Hold'em masasına yukarıdan bakış",
  tags: ["poker olasılıkları", "poker olasılık tablosu", "poker el olasılıkları", "set gelme olasılığı", "2 ve 4 kuralı", "pot odds", "outs nedir", "texas holdem olasılıkları"],
  content: `
Canlı bir oyunda ilk kez elimdeki 5'li çiftle set avına çıkıp flop'ta setimi yaptığımda, yanımdaki adam "bunun ihtimali ne ki?" diye homurdandı — ve ben cevabı gerçekten biliyordum: yaklaşık ==8,5 elde 1==. Zaten o elde call etmemin sebebi de tam olarak o tek sayıydı.

Poker tahmin oyunu değil. Her call, her fold ve her shove aslında ==kılık değiştirmiş bir olasılık sorusu==; kazanan oyuncular da "ihtimali ne?" sorusunu reflekse çevirmiş olanlar. Bu yazı Texas Hold'em için ==eksiksiz bir **poker olasılıkları tablosu**== — her tamamlanmış el, her flop, her draw — ve masada hesabı iki saniyede yapmanı sağlayan ==g:tek bir zihinsel kısayol==.

---

### En çok işine yarayacak sayılar

:::stripe
%43,8 | River'a kadar Çift (One Pair)
%23,5 | İki Çift (Two Pair)
%3,0 | Floş (Flush) yapmak
%2,6 | Full (Full House) yapmak
30.940'ta 1 | Royal Floş (Royal Flush)
:::

---

## Poker el olasılıkları nedir? Her elin ihtimali tek tabloda

> **Kısa cevap**
> Bir poker elinin olasılığı kaç kart kullandığına bağlıdır. Hold'em'de yedi kartın en iyi beşi, %43,8 ihtimalle Çift ve %23,5 ihtimalle İki Çift verir. Bu river frekansları rastgele dağıtılan beş kartlık elden farklıdır; iki elin ne kadar nadir olduğunu karşılaştırmadan önce doğru sütunu seç.

- **5 kart olasılığı** = rastgele dağıtılan tek bir beş kartlık elin tam olarak o el *olma* ihtimali (ders kitaplarındaki klasik sayı).
- **Hold'em (river'a kadar)** = yedi kartın hepsini (2 kapalı kartın + 5 ortak kart) gördükten sonra o elle *bitirme* ihtimalin. Masada asıl önemli olan sayı bu.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| El | 5 kart olasılığı (dağıtılan) | Hold'em olasılığı (river'a kadar) |
|:---|:---:|:---:|
| Royal Floş | 1/649.740 (%0,000154) | 1/30.940 (%0,0032) |
| Sıralı Floş | 1/72.193 (%0,00139) | 1/3.590 (%0,0279) |
| Kare | 1/4.165 (%0,0240) | 1/595 (%0,168) |
| Full | 1/694 (%0,144) | 1/39 (%2,60) |
| Floş | 1/509 (%0,197) | 1/33 (%3,03) |
| Kent | 1/255 (%0,392) | 1/22 (%4,62) |
| Üçlü | 1/47 (%2,11) | 1/21 (%4,83) |
| İki Çift | 1/21 (%4,75) | 1/4,3 (%23,5) |
| Çift | 1/2,4 (%42,3) | 1/2,3 (%43,8) |
| Yüksek Kart | 1/2,0 (%50,1) | 1/5,7 (%17,4) |

</div>

> **Herkesi şaşırtan istatistik**
> Beş kartta en sık görülen el Yüksek Karttır (%50,1), ama Hold'em'de **%17,4**'e düşer — Çift (%43,8) ve İki Çiftin (%23,5) ardından üçüncü sıraya iner. Neden? Yedi kart sana o kadar çok eşleşme şansı verir ki "river'a kadar hiç çift yok" istisna hâline gelir. Daha çok kart, daha çok bağlantı.

Sıralama **beş kart sütununu** izler: bir el beş rastgele kart arasında ne kadar nadirse o kadar üstte durur — Yüksek Karttan Royal Floşa kadar hiç boşluk yok. Yedi kartta bu, Yüksek Kart dışında her yerde geçerlidir; Yüksek Kart, Çiftten (%43,8) daha nadir olduğu hâlde yine en altta kalır. [Poker el sıralamasının](/tr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") mantığı bu: sıralama zaten olasılığın kendisi — beş kart üzerinden ölçülmüş hâli.

:::quiz:::

---

## Hangi başlangıç elinin gelme olasılığı ne?

> **Kısa cevap**
> Elde As çifti (pocket aces) yaklaşık 221 dağıtımda bir gelir, ama herhangi bir el çifti yaklaşık 17 dağıtımda bir gelir. Fark kombinasyon sayısından doğar: mümkün 1.326 iki kartlık dağıtım vardır ve belirli bir çift bunların yalnızca altısıdır. Aynı türden herhangi iki kart %23,5 ihtimalle gelir; özel olarak A-K suited ise yalnızca %0,30'dur.

![Elde As çifti — yeşil çuhada çiplerin yanında yeni dağıtılmış maça ası ve kupa ası](/images/holdem-probability-starting-hands.webp "Elde As çifti: en iyi başlangıç eli, 221 elde yalnızca bir kez gelir")

Flop'tan önce tam olarak **1.326 farklı iki kartlık başlangıç eli** vardır. İnsanların en çok sorduklarının ne sıklıkla geldiği şöyle:

| Başlangıç eli | Olasılık | Ne sıklıkla |
|:---|:---:|:---|
| Belirli bir el çifti (örn. A-A) | 1/221 (%0,45) | Yaklaşık her 221 elde bir |
| **Herhangi bir** el çifti | 1/17 (%5,9) | Canlı oyunda kabaca saatte iki kez |
| A-K suited (belirli) | 1/332 (%0,30) | Nadir |
| A-K (suited *ya da* offsuit) | 1/83 (%1,2) | — |
| Aynı türden herhangi iki kart | 1/4,3 (%23,5) | Neredeyse her dört elde bir |

Yani biri bir dahaki sefere "bana hiç As gelmiyor" dediğinde aşağı yukarı haklı — As çifti gibi *belirli* bir çift sana ancak ==yaklaşık her 221 elde bir== gelir. Ama **herhangi bir** el çifti her 17 elde bir gelir; set avının hayal değil gerçek bir strateji olmasının sebebi bu. Hangi çiftlerin ve aynı türden ellerin hangi pozisyondan oynamaya değdiğini [başlangıç eli tablosunda](/tr/hand-chart) pozisyon pozisyon görebilirsin.

---

## Flop'ta hangi elin gelme olasılığı ne?

> **Kısa cevap**
> Elinde bir çift varsa flop'ta set ya da daha iyisini %11,8 ihtimalle yaparsın. Aynı türden iki kartla flop'ta hazır floş yalnızca %0,84, floş draw'ı ise %10,9'dur. Bunlar koşullu olasılıklardır: tüm rastgele dağıtımlardaki frekanstan değil, tabloda gösterilen elindeki kartlardan yola çık.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop'ta yaptığın… | Elindeki | Olasılık | Aleyhte oran |
|:---|:---|:---:|:---:|
| Set (ya da daha iyisi) | Bir el çifti | %11,8 | ~7,5:1 |
| Floş | Aynı türden iki kart | %0,84 | ~118:1 |
| Floş draw'ı | Aynı türden iki kart | %10,9 | ~8:1 |
| Kent | Suited connector (örn. 8-7) | %1,3 | ~76:1 |
| İki Çift | Eşleşmemiş iki kart | %2,0 | ~49:1 |
| Full | Bir el çifti | %0,98 | ~101:1 |
| Kare | Bir el çifti | %0,245 | ~407:1 |

</div>

Set avında ==7,5:1 teorik başa baş getiridir, yeterli stack kuralı değildir==: her isabetin kazandığını ve ödendiğini varsayar. Pratikte yaygın ölçü olan, call'un 15–20 katı efektif stack, ödenmeyen değeri ve kaybeden setleri hesaba katar; o bile otomatik call değil, kaba bir kuraldır. Aşağıdaki [pot oranı](#pot-odds) bölümüne köprü tam da burası.

---

## Draw olasılıkları: river'a kadar floş ya da kenti tamamlamak

> **Kısa cevap**
> Dokuz out'lu bir floş draw'ı turn ve river boyunca yaklaşık %35 ihtimalle tamamlanır; turn boşa geçtikten sonra yalnızca river'da bu oran %19,6'dır. Sekiz out'lu kent draw'ı biraz daha düşüktür. Bunlar tamamlanma olasılıkları, garanti kazanç değil: önce elini geliştirip rakibi yine önde bırakan kartları düş.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Out | Flop → river (2 kart) | Turn → river (1 kart) |
|:---|:---:|:---:|:---:|
| Floş + açık uçlu kent (kombo) | 15 | %54,1 | %32,6 |
| Floş + gutshot | 12 | %45,0 | %26,1 |
| Floş draw'ı | 9 | %35,0 | %19,6 |
| Açık uçlu kent | 8 | %31,5 | %17,4 |
| İki overcard | 6 | %24,1 | %13,0 |
| Gutshot (içten) kent | 4 | %16,5 | %8,7 |
| Çift → set | 2 | %8,4 | %4,3 |
| Set → full ya da kare | 7 (flop) / 10 (turn) | %33,4 | %21,7 |

</div>

Altı out'lu overcard satırı, iki değerden birini eşlemenin kazandırdığını varsayar. İki çifte, sete ya da daha güçlü bir draw'a karşı bu çift yapan kartların bir kısmı ya da hepsi "kirli" olabilir — altıyı garanti kazanan out saymak yerine indir. Set satırı senin değerindeki dördüncü kartı da sayar: yalnızca full, flop'tan yaklaşık %29,1, turn'den %19,6'dır.

Klasik durum: flop'ta **floş draw'ı** (dokuz out) yakaladın. ==River'a kadar %35 ihtimalle== tamamlarsın — üçte birden iyi. **Açık uçlu kent draw'ı** (sekiz out) %31,5 tutar. İki sütuna dikkat et: turn boş geçince iki yerine tek kartın kalır, ihtimalin kabaca yarıya iner — floş draw'ında %35, %19,6 olur. Draw kovalamanın sokak sokak pahalılaşmasının sebebi tam olarak bu.

---

## Poker olasılıkları nasıl hesaplanır? Out saymak ve 2 ve 4 kuralı

> **Kısa cevap**
> 2 ve 4 kuralı bir draw'ın tamamlanma yüzdesini tahmin eder: tek kart kaldıysa out sayısının iki katını, turn ve river birlikte kaldıysa dört katını al. İki kartlık tahmin, bir flop call'unu ancak iki kartı görmek için tekrar ödeme gerekmiyorsa fiyatlayabilir. Bu bir kısayoldur, kesin equity değildir.

:::steps
Out'larını say | Elini tamamlayan görünmeyen kartlar (floş draw'ı = 9)
Flop'tayken, iki kartı tekrar ödemeden göreceksen | Out × 4 → river'a kadar tutturma yüzden, yaklaşık
Turn'deyken (1 kart kaldı) | Out × 2 → river'da tutturma yüzden, yaklaşık
:::

**Örnek.** Flop'tan sonra elinde aynı türden dört kart var. Bu ==9 out== eder (türünün 13 kartı − gördüğün 4). Flop'ta: 9 × 4 = **%36** — gerçek değer %35,0, yani tam isabet. Turn'de tutmadıysa: 9 × 2 = **%18** (gerçek: %19,6).

:::tip[×4 tahmini 7 out'ta bile biraz yüksek kalır; draw büyüdükçe fark daha önemli hâle gelir. 15 out'luk dev bir draw'da "×4" %60 der ama gerçek sayı %54'tür — büyük draw'larda birkaç puan aşağı yuvarla.]:::

Kısayol bu kadar: temiz out'lar → göreceğin kart sayısına göre çarpan → equity'nle birlikte kullanacağın bir draw tahmini. Kesin equity'yi görmek istersen eli [poker hesap makinesine](/tr/calculator) gir. Gerisi o sayıyla ne yapacağını bilmekten ibaret. Bu kuralın senden ustalaşmış olmanı beklediği tek beceri sayımın kendisi: kombo draw'larda çakışan out'ları bir kez say, sayılmaması gereken "kirli" out'ları da baştan ayıkla.

---

<a id="pot-odds"></a>

## Pot oranı nedir? Olasılığını call ya da fold kararına çevirmek

> **Kısa cevap**
> Pot oranı (pot odds) bir call'u başa baş hedefine çevirir: call miktarını, call eklendikten sonraki pota böl. Bu fiyatı, call'un gerçekten satın aldığı kartlar boyunca kazanma ihtimalinle karşılaştır. İki kartlık floş rakamı, arkasından yeni bir bahis gelebilecekken sadece turn için ödemeyi haklı çıkaramaz; gelecekteki kazançlar ayrı tahmin ister.

![Pot oranı infografiği — $100'lık pot ve $25 call, 25 ÷ 125 yani %20 equity gerekir](/images/holdem-probability-pot-odds.webp "$100'lık pota $25 call: başa baş için 25 ÷ 125 = %20 equity gerekir")

**Örnek.** Pot $100. Rakibin $50 bahis yapıyor, pot $150 oluyor. O $150'ı kazanmak için $50 call etmen gerekiyor.

:::steps
Bahisten sonraki pot | $100 + $50 = $150
Senin call'un | $150 kazanmak için $50 (son pot $200)
Pot oranı | 50 ÷ 200 = %25 — en az %25 equity gerekir
Senin equity'n | 9 temiz out'lu floş draw'ı ≈ river'a kadar %35 — ==iki== kartı da gördüğünü varsayan 4 kuralı sayısı
Karar | İki kart da gelecekse: %35 > %25 → açıkça kârlı bir ==g:call==
:::

Bütün sayıların karşılığını aldığın an bu — ama **sayıyı, parasını ödediğin sokakla eşleştir**. İki kart da geliyorsa (all-in'sin ya da turn check'le geçiyor), temiz bir draw'ın **%35**'i **%25**'lik fiyatı geçer ve eli çoğu zaman kaybetsen bile call uzun vadede para kazandırır. Rakibin turn'de yine ateş edecekse bu call sana yalnızca turn kartını alır — flop'tan bu ==9 ÷ 47 = %19,1== eder, fiyatın *altında* — ve draw'ın aradaki farkı kapatmak için implied odds'a, yani tutturduktan sonraki sokaklarda kazanacağın paraya ihtiyacı olur. ×4 sayısını tek kartlık bir kararda harcamak, yeni başlayanların bir draw'ı abartmasının en yaygın yoludur. Yöntemin tamamı ve bahis büyüklüğüne göre hızlı tablo için [pot oranı nasıl hesaplanır](/tr/blog/holdem-pot-odds) yazısına bak.

---

## Royal floş ne kadar nadir? (Ve sıralı floş)

> **Kısa cevap**
> Royal floş rastgele yedi kartlık Hold'em ellerinde kabaca 30.940'ta bir gelir; beş kartlık dağıtımdan çok daha sık. Royal olmayan bir sıralı floş river'a kadar yaklaşık 3.590'da birdir — daha az nadir ama yine olağanüstü. İkisi de belirli bir draw'dan gelen ihtimalini anlatmaz: kapalı kartlar ve flop belli olduğunda hesap o kartlara bağlı, koşullu hâle gelir.

![Kupa royal floş infografiği — 10♥ J♥ Q♥ board'unda eldeki A♥ K♥ ile tamamlanan kupa A-K-Q-J-10](/images/holdem-probability-royal-flush.webp "Kupa royal floş: pokerin en nadir eli, river'a kadar yaklaşık 30.940'ta bir")

- **Royal Floş:** dağıtılan beş kartlık el olarak ==649.740'ta 1==. Hold'em'i river'a kadar oynayınca yedi kartın en iyi beşini seçtiğin için yaklaşık 30.940'ta 1'e iner. Hangisi olursa olsun çoğu oyuncu ikisi arasında *yıllar* geçirir.
- **Sıralı Floş:** beş kartlık el olarak yaklaşık 72.193'te 1 (Hold'em'de river'a kadar yaklaşık 3.590'da 1). Çoğu oyuncu için hâlâ yılda bir görülen bir şey.

Neden bu kadar nadir? Royal floş, **tek bir türde tek bir belirli kart dizisidir** — bütün destede onu yapmanın dört yolu vardır, sıradan bir yüksek kart yapmanın ise 1.302.540 yolu. Sıralamanın en tepesinde durmasının tek sebebi bu nadirlik.

:::note
Yaygın bir efsane: "Royal floş her şeyi yener, yani *berabere* kalamaz." Pot bölünebilir, ama genelde anlatıldığı şekilde değil. *Farklı* türlerde iki royal için on belirli kart gerekir, iki oyuncunun ise kullanabileceği yalnızca dokuz kart vardır — her birinin iki kapalı kartı artı board'daki beş — yani bu olamaz. İki oyuncunun da royal'ı olmasının tek yolu board'un kendisinin royal olmasıdır: herkes board'u oynar ve pot bölünür. Pratikte bunu neredeyse hiç görmezsin.
:::

---

## Uzak ihtimaller: cooler'lar, kareler ve bad beat'ler

> **Kısa cevap**
> Uzak poker ihtimallerinin bir başlangıç koşulu olmalı. Elindeki çiftle flop'ta kare yapmak yaklaşık 408'de birdir; As çifti gelmesi ise hiç kart görmeden önce 221'de birdir. Bu olaylar nadir sonuçları açıklar, ama nadir bir kayıp tek başına ondan önceki kararın doğru olup olmadığını göstermez.

| Uzak ihtimal | Olasılık |
|:---|:---:|
| Elde As çifti gelmesi | 1/221 |
| Elindeki çiftle flop'ta kare | 1/408 |
| Flop'ta sıralı floş (suited connector 54s–JTs) | ~1/4.900 |
| River'a kadar royal floş | 1/30.940 |

**Set over set** — flop'ta set yapıp daha büyük bir sete kaybetmek — en büyük cooler'dır. Tek ve temiz bir sayısı yoktur çünkü kaç oyuncunun elinde çift olduğuna bağlıdır, ama dayanak şu: *sen* flop'ta set yalnızca %11,8 ihtimalle yaparsın, aynı board'da bir rakibin de aynısını yapması o kadar nadirdir ki çoğu oyuncu her birini hatırlar. Başına geldiğinde kaybın kendisi call'un hata olduğunu — ya da doğru olduğunu — kanıtlamaz; onu showdown'a göre değil, o anki fiyata ve stack derinliğine göre değerlendir. O showdown'ların tam olarak nasıl puanlandığını görmek istersen [kicker ve beraberlik kuralları](/tr/blog/holdem-tiebreak-rules) her uç durumu anlatıyor.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-hand-rankings | Poker el sıralaması, en güçlüden en zayıfa | /images/holdem-hand-rankings-hero.webp
/tr/blog/holdem-pot-odds | Pot oranı: call mu fold mu? | /images/holdem-pot-odds-hero.webp
:::

## Sıkça sorulan sorular

**Q. Texas Hold'em'de royal floş gelme olasılığı nedir?**

A. Bir Hold'em elini sonuna kadar oynadığında (yedi kartın en iyi beşini kullanarak) river'a kadar yaklaşık 30.940'ta 1. Doğrudan dağıtılan beş kartlık el olarak 649.740'ta 1. Hangisi olursa olsun çoğu oyuncu yıllarca bir tane görmez.

**Q. Sıralı floş olasılığı nedir?**

A. Beş kartlık el olarak kabaca 72.193'te 1, Hold'em'de river'a kadar yaklaşık 3.590'da 1. İkinci en nadir eldir; onu yalnızca royal floş yener.

**Q. Kare (ya da As karesi) gelme olasılığı nedir?**

A. Kare Hold'em'de river'a kadar yaklaşık 595'te 1 gelir (%0,168), dağıtılan beş kartlık el olarak 4.165'te 1. As karesi gibi *belirli* bir kare çok daha uzak bir ihtimaldir — river'a kadar kabaca 7.700'de 1. En yaygın yol (vakaların yaklaşık %57'si) bir As'ın elinde, diğer üçünün board'da olmasıdır; el çiftini tutup kalan iki As'ı yakalamak daha nadir, dördünün de board'a düşmesi ise daha da nadirdir.

**Q. Floş, kent ya da full ne kadar nadir?**

A. Hold'em'de river'a kadar floşu yaklaşık %3,0 (33'te 1), kenti %4,6 (22'de 1), full'ü %2,6 (39'da 1) ihtimalle yaparsın. Yani full aslında floştan, floş da kentten daha nadirdir — el sıralamasının onları dizdiği sırayla birebir aynı.

**Q. River'a kadar floş tamamlama olasılığı nedir?**

A. Flop'ta floş draw'ı (dokuz out) yakaladıysan river'a kadar yaklaşık %35 ihtimalle tamamlarsın — üçte birden iyi. Tek kartta (turn'den river'a) kabaca %19,6'ya düşer.

**Q. Flop'ta set gelme olasılığı nedir?**

A. Elinde bir çift varken yaklaşık %11,8, yani kabaca 8,5'te 1. Bunun karşılığı olan 7,5:1 oran, her 1 isabete karşı 7,5 ıskayı anlatır; önerilen bir stack derinliği değildir. Set avı call'u gerçekçi bir gelecek ödemesi de ister; pratik ölçü olan call'un 15–20 katı efektif stack, aksiyon almayan ya da kaybeden setlere pay bırakır.

**Q. Flop'ta royal floş gelme olasılığı nedir?**

A. Yok denecek kadar az. Beş kartından ikisini aynı türden zaten tutsan bile — örneğin A♥ K♥ — flop tam olarak Q♥ J♥ 10♥'yi yalnızca yaklaşık 19.600 flop'ta bir getirir. Rastgele bir başlangıç eliyle bu olasılık daha da düşüktür; yapılan royal floşların neredeyse hepsinin flop'ta değil turn ya da river'da tamamlanmasının sebebi bu.

**Q. Elde As çifti gelme olasılığı nedir?**

A. Özel olarak As çifti için 221'de 1 (%0,45). Ama herhangi bir el çifti çok daha sık gelir — yaklaşık 17 elde 1 (%5,9).

**Q. Pokerde 2 ve 4 kuralı nedir?**

A. 2 ve 4 kuralı (bazen "4-2 kuralı" da denir) draw olasılığını tahmin eder: flop'ta turn ve river birlikte için out sayını 4'le, turn'de yalnızca river için 2'yle çarp. Dokuz out ×4 ile iki kartta %36 verir, kesin değer %35,0; ×2 river kartı için %18 verir, kesin değer %19,6. Fiyat yakınsa kesin tabloya bak ve iki kartlık rakamı ancak iki kartı ek bahis olmadan göreceğin durumlar için sakla.

**Q. Pot oranı nasıl hesaplanır?**

A. Call etmen gereken miktarı, call'undan sonraki toplam pota böl: $150'lık pota $50 call etmek 50 ÷ 200 = %25 eder; gereken equity budur. Bu sayfa karşılaştırmanın diğer yarısını verir — draw'ının gerçekte ne sıklıkla tamamlandığını. Fiyat tarafı [pot oranı rehberinde — oranlar, bahis büyüklüğü kısayolları ve pahalı hatalar](/tr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") anlatılıyor.

**Q. Set over set olasılığı nedir?**

A. Tek ve sabit bir sayı yok — kaç rakibin elinde çift olduğuna bağlı — ama nadirdir. Sen zaten flop'ta set yalnızca %11,8 ihtimalle yaparsın; aynı board'da iki oyuncunun da set yapması, stack'leri eriten klasik "cooler"dır.

**Q. Pokerde en sık kazanan el hangisi?**

A. Çift, ardından İki Çift. Her oyuncu beş ortak kartı paylaştığı için Texas Hold'em potlarının çoğu tek bir çift ve onun kicker'ıyla belirlenir — floş, kent ve full'ler yeni başlayanların beklediğinden çok daha az kazanır. Her elin yedi kart üzerinden ne sıklıkla oluştuğu — ki bu, potu ne sıklıkla kazandığıyla aynı şey değildir — yukarıdaki tabloda.

**Q. Pokerde en iyi el ne sıklıkla kazanır?**

A. River'dan önce sandığından daha az. En iyi başlangıç eli olan As çifti bile rastgele bir ele karşı heads-up yalnızca yaklaşık %85 kazanır, dolu bir masaya karşı çok daha az. River'da en iyi beş kart tanım gereği kazanır; sürprizler daha önce, hazır bir el canlı bir draw'a yenildiğinde yaşanır.

**Q. Pokerde flop'u ne sıklıkla tutturursun?**

A. Eşleşmemiş iki kapalı kartla flop'ta en az birini yaklaşık %32 ihtimalle eşlersin — yani kabaca üç flop'tan ikisini tamamen ıskalarsın. Pozisyonun ve agresifliğin bu kadar önemli olmasının sebebi bu: herhangi bir rakip de flop'u yaklaşık üçte iki oranında ıskalamıştır ve bahis yapmaya istekli oyuncu potu çoğu zaman alır.

**Q. Nuts'a sahip olma olasılığı nedir?**

A. Tek bir sayı yok — nuts (belirli bir board'daki mümkün olan en iyi el) her board'da değişir. Kuru, eşlenmemiş bir board'da nuts en yüksek set olabilir; bağlantılı bir board'da kent ya da floş olabilir. Beceri bir olasılık rakamını ezberlemek değil; hangi elin nuts *olduğunu* okumak ve bir rakibin onu tutma ihtimalini tartmaktır.

---

## Aklına kazıman gereken 3 sayı

1. **Flop'ta set: ~%12 (8,5'te 1).** İsabet oranı set avı hesabını başlatır; call'un kâr getirip getirmediğine stack derinliği ve muhtemel ödeme karar verir.
2. **River'a kadar floş draw'ı: %35.** Dokuz out, 4 kuralı → 9 × 4 = %36.
3. **Pot oranı içgüdüyü yener.** Olasılığı bu call'un satın aldığı kartlarla eşleştir, sonra fiyatı kazanma ihtimalinle karşılaştır — draw'ı tamamlamak her zaman yetmez.

Poker bunları otomatiğe bağlamış oyuncuları ödüllendirir. Tabloyu öğren, 2 ve 4 kuralını çalış ve "ihtimali ne?" sorusunu hamleden *sonra* değil *önce* sormaya başla. Sırada bu hesabı işe koymak var: [her pozisyondan hangi başlangıç ellerini oynayacağını](/tr/hand-chart) öğren ya da out'larının neye değdiğini hep bilmek için [floşun kenti neden yendiğine](/tr/blog/holdem-hand-rankings) bir daha göz at.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker el sıralaması, en güçlüden en zayıfa</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bu olasılıkların yarattığı sıra — her el yerli yerinde</div>
  </a>
  <a href="/tr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pot oranı</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot oranı: call mu fold mu?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Olasılığını fiyatla karşılaştırmanın yolu</div>
  </a>
  <a href="/tr/hand-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Başlangıç elleri</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pozisyona göre başlangıç eli tablosu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">O 1.326 elden hangilerini gerçekten oynamalısın</div>
  </a>
  <a href="/tr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Beraberlik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kicker ve beraberlik kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Aynı el çıktığında potu kim alır</div>
  </a>
  <a href="/tr/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Araç</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker hesap makinesi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pot oranı ve equity'yi elinle hesapla</div>
  </a>
</div>
`.trim(),
};

export default POST;
