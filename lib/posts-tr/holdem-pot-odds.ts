import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-pot-odds",
  title: "Pot odds nedir? Pokerde pot oranını 10 saniyede bulmanın yolu",
  seoTitle: "Bu call gerçekten kârlı mı? — Pot odds (pot oranı) nedir",
  desc: "Umutla call etmeyi bırak. Pot odds (pot oranı) nedir, 10 saniyede nasıl bulunur: oran-yüzde kısayolu, bahis boyutu tablosu ve implied odds'un yeri.",
  tldr: "Pot odds, yani pot oranı, call edeceğin miktarın call'undan sonraki toplam pota bölünmesiyle bulunur. $150'lık bir pota $50 call edersen 50 ÷ 200 = %25 eder; yani call'un kârlı olması için en az %25 equity'ye ihtiyacın var.",
  category: "odds",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 dk",
  emoji: "🧮",
  image: "/images/holdem-pot-odds-hero.webp",
  imageAlt: "Yeşil çuhada çiplerini ortadaki pota iten bir oyuncunun eli — pot oranı kararının verildiği an",
  tags: ["pot odds nedir", "pot oranı nedir", "pot odds poker", "pot odds tablosu", "implied odds nedir", "pot odds ve equity", "4 ve 2 kuralı", "call için gereken equity"],
  content: `
Pokerdeki en pahalı kelime "umut"tur. İlk yılımda turn bahislerini, floş draw'ım river'da *belki* gelir diye call edip durdum ve bu yüzden sürekli çip kaybettim. Sonunda kafamda şimşek çaktığı gece, $150'lık bir pota $50'lık bir call'du — bir kez olsun hesabı yaptım, başa baş için sadece %25'e ihtiyacım olduğunu gördüm ve o günden sonra hiçbir call'a eskisi gibi bakmadım.

==Pot odds (pot oranı), hisle call etmekle bir sebeple call etmeyi ayıran tek matematik parçasıdır.== Öğrenmesi beş dakika, otomatiğe bağlaması birkaç seans sürer. Bu rehberde sana ==g:10 saniyelik yöntemi==, masada gözünün önüne getirebileceğin bir bahis boyutu tablosunu ve çoğu oyuncunun yanlış anladığı o tek şeyi veriyorum: pot odds, equity ve implied odds'un gerçekte nasıl birbirine oturduğunu.

Draw'larının arkasındaki sayılar [poker olasılıkları ve olasılık tablosu](/tr/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") yazısından gelir — bu rehber ise o sayıları doğru bir call'a ya da fold'a nasıl çevireceğini anlatıyor.

---

### Bir bakışta pot odds

:::stripe
%25 | Yarım pot bahse karşı gereken equity
%33 | Pot büyüklüğünde bahse karşı gereken equity
call ÷ (pot + call) | Formülün tamamı
:::

---

## Pot odds (pot oranı) nedir?

**Pot odds, oyunda kalman için sana teklif edilen fiyattır.** Potun büyüklüğünü call etmen gereken bahsin büyüklüğüyle karşılaştırır — yani ödülü riske karşı.

Diyelim pot $150 ve senin $50 call etmen gerekiyor. Sana ==$50'lık bir risk için $150 kazanma== teklif ediliyor — yani "3:1 alıyorsun." Pot call'a göre ne kadar büyükse fiyatın o kadar iyidir ve call'un değmesi için o kadar az kazanman yeterlidir.

İşin özü tam olarak bu "ne sıklıkla kazanman gerekiyor" sayısıdır. 3:1 almak, zamanın sadece **%25'inde** ya da daha fazlasında kazanırsan call'un kendini amorti ettiği anlamına gelir. Pot odds, bulanık bir "call etsem mi?" sorusunu net bir hedefe çevirir: *bu fiyatı yenecek sıklıkta kazanıyor muyum?*

---

## Pot oranı nasıl bulunur? Adım adım

> **Kısa cevap**
> Önce son potu bul: karşılaştığın bahis ve kendi call'un dahil. Sonra call'unu bu toplama böl. Çıkan sonuç başa baş equity yüzdesidir. Potun zamanlamasını tutarlı tut: mevcut potun içinde zaten sayılmış parayı ikinci kez ekleme.

:::steps
Son potu topla | Mevcut pot + bahis + senin call'un. Örnek: $100 pot + $50 bahis + senin $50 call'un = $200
Call'unu son pota böl | $50 ÷ $200 = 0,25
Gereken equity'n bu | Kârlı call için zamanın en az %25'inde kazanman gerekir
Gerçek equity'nle karşılaştır | 9 temiz out'lu floş draw'ı, önünde iki kart varken ve başka bahis yoksa ≈ %35 tutar → %35, %25'i geçer → ==g:call==
:::

Bu kadar. **Gereken equity = call'un ÷ son pot.** Gerçek kazanma şansın bu sayıdan büyükse, eli çoğu zaman kaybedecek olsan bile call uzun vadede para kazandırır.

> **Tüm karışıklığı bitiren tek kural**
> Kendi call'unu her zaman son pota kat. "3:1 almak" ile "%25'e ihtiyaç duymak" *aynı* durumu anlatır — oran fiyattır, yüzde hedeftir. Yeni başlayanların hatalarının çoğu bu iki gösterimi karıştırmaktan doğar; yüzdeyi seç ve bir daha arkana bakma.

Rakamları masada kafadan yapamadığın anlarda ya da bir eli sonradan kontrol etmek istediğinde [pot odds ve equity hesaplayıcımızı](/tr/calculator) kullanabilirsin — ama bu rehberin amacı, o hesabı kafanda 10 saniyede yapabilmen.

---

## Pot odds oran mı, yüzde mi? Oranı yüzdeye çevirme

> **Kısa cevap**
> Pot odds oranı, kazanabileceğin parayı riske attığın call ile karşılaştırır; yüzde ise bu riskin ne sıklıkla tutması gerektiğini gösterir. 4:1'de bir birim riske atıp dört birim kazanırsın, yani beş denemede bir kazanman gerekir: %20. Aynı call için ödül büyüdükçe başa baş yüzdesi düşer.

Dönüşüm tek adımdır: **X:1** oran, yüzde olarak **1 ÷ (X + 1)** equity'ye ihtiyacın olduğu anlamına gelir.

| Aldığın oran | Gereken equity |
|:---|:---:|
| 1:1 | %50 |
| 2:1 | %33 |
| 2,5:1 | %28,6 |
| 3:1 | %25 |
| 4:1 | %20 |
| 5:1 | %16,7 |
| 6:1 | %14,3 |

Mantık sezgiseldir: pot call'u ne kadar gölgede bırakırsa, call'u haklı çıkarmak için pastadan o kadar küçük bir dilim yeter.

---

## Call için ne kadar equity gerekir?

> **Kısa cevap**
> Yarım pot bahsi call etmek için %25, pot büyüklüğündeki bahis için %33, potun iki katı bahis için %40 equity gerekir. Hedefi belirleyen, bahsin dolar tutarı değil pota göre büyüklüğüdür. Önce bu hedefi bul, sonra elini sana bu fiyatı teklif eden rakibin range'ine karşı değerlendir.

![Son potu pot, bahis ve senin call'un olarak üç çubuğa bölen görsel — yarım pot bahis %25, pot büyüklüğünde bahis %33, 2× pot bahis %40 equity ister](/images/holdem-pot-odds-required-equity.webp "Gereken equity tamamen karşılaştığın bahsin büyüklüğüne bağlıdır")

Elinin yeterince güçlü olup olmadığına karar vermeden önce call'un fiyatını biçebilmek için şu yedi sabit noktayı ezberle:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Rakibin bahsi | Aldığın oran | Gereken equity |
|:---|:---:|:---:|
| ¼ pot | 5:1 | %16,7 |
| ⅓ pot | 4:1 | %20 |
| ½ pot | 3:1 | %25 |
| ⅔ pot | 2,5:1 | %28,6 |
| ¾ pot | 2,3:1 | %30 |
| Pot büyüklüğünde | 2:1 | %33 |
| 2× pot | 1,5:1 | %40 |

</div>

Devasa bir **2× pot overbet bile sadece %40 equity ister**. Kârlı call için neredeyse hiçbir zaman favori olman gerekmez. "Favori değilsem call edemem" sanmak yaygın bir yanılgıdır ve insanlara doğru call'ları fold ettirir. Bahis büyüdükçe gereken equity artar, ama çoğu oyuncunun sandığından çok daha yavaş tırmanır.

---

## Pot odds tablosu: hangi draw hangi bahsi karşılar?

> **Kısa cevap**
> Bir draw'ın fiyatı karşılayıp karşılamadığı hem temiz out sayısına hem de bu call'un sana kaç kart aldırdığına bağlıdır. Floş draw'ının iki kartlık şansı, tek kartlık şansından çok daha yüksektir. Gerçek karara uyan sütunu kullan; çift ya da floş yapmayı garantili kazanç sanma.

Tabloyu kullanmadan önce **out**'larını say. Altı out'lu iki overcard satırı, yapacağın herhangi bir çiftin kazandığını varsayar; sana çift yaptırsa bile rakibin olası ellerine karşı yine kaybettiren kartları hesaptan düş.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw'ın | Out | Tutma şansı, 1 kart (turn → river) | Tutma şansı, 2 kart (flop → river) |
|:---|:---:|:---:|:---:|
| Floş + açık uçlu kent | 15 | %32,6 | %54,1 |
| Floş draw'ı | 9 | %19,6 | %35,0 |
| Açık uçlu kent draw'ı | 8 | %17,4 | %31,5 |
| İki overcard | 6 | %13,0 | %24,1 |
| Gutshot (iç kent) | 4 | %8,7 | %16,5 |

</div>

Bunu yukarıdaki bahis boyutu tablosuyla birlikte oku. ==Yarım pot bahse (gereken %25)== karşı: bahis seni all-in bırakıyor ve iki kartı da göreceksen floş draw'ı (%35) net bir call'dur — ama flop'tan *tek* kart için (9 ÷ 47) aynı draw sadece %19,1'dir ve tek başına fiyatı **karşılamaz**. İşte o boşluk, tam da implied odds'un devreye girdiği yerdir.

---

## Pot odds, equity ve implied odds farkı nedir?

> **Kısa cevap**
> Pot odds fiyatı belirler, equity pottan beklenen payını ölçer, implied odds ise ileride kazanacağın ek parayı tahmin eder. İlk ikisiyle başla. İleride gelecek bir kazancı yalnızca kazanılacak çip kaldıysa ve ödeme yapması muhtemel bir rakip varsa say; ikinci en iyi eli tamamlamak tersine daha pahalıya patlayabilir.

:::compare
Terim | Ne demek
Pot odds | Fiyat: call ÷ son pot = *ihtiyaç duyduğun* equity
Equity | Şu anda pottan beklenen payın — kazandığın eller artı beraberliklerdeki payın
Implied odds | Tutturursan sonraki sokaklarda kazanmayı beklediğin *ekstra* çipler
:::

**Pot odds ile equity** karşılaştırması kararın çekirdeğidir: equity'n pot oranını geçiyorsa call et. **Implied odds** ise fiyatı kıl payı kaçıran draw'lar için hakemdir. Floş draw'ın %25'e ihtiyaç duyuyor ama river kartında sadece %19,6'ya sahipse, tutturduğunda aradaki farkı kapatacak kadar ekstra bahis alabileceksen yine de call edebilirsin. Flop'ta bir draw'la kârlı call yapabilmenin ve derin stack'lerin draw'ları neden daha değerli kıldığının sebebi budur.

Madalyonun karanlık yüzü **reverse implied odds**'tur — elini tutturup yine de kaybettiğinde *kaptıracağın* çipler (floşun gelir, ama board eşlenir ve birinde full vardır). İkinci en iyi draw'lar sessizce para eritir; [nut floş draw'ının küçük bir floş draw'ından çok daha değerli olmasının](/tr/hand-chart) sebebi de bu.

---

## 4 ve 2 kuralı nedir? Out'ları hızla yüzdeye çevirmek

> **Kısa cevap**
> Bir draw'ın call fiyatına yakın olup olmadığını tahmin etmek için 4 ve 2 kuralını kullan. Out sayısının dört katı iki kartı, iki katı tek kartı yaklaşık verir. Çarpanı seçmeden önce şimdiki call'un seni başka ödeme yapmadan river'a götürüp götürmediğini sor; kıl payı kararlarda kesin tabloya bak.

- **Flop'ta, önünde iki kart varken:** out'larını **4** ile çarp.
- **Turn'de, önünde tek kart varken:** out'larını **2** ile çarp.

Floş draw'ı 9 out'tur. Flop'ta: 9 × 4 = **%36** (gerçek değer %35,0 — tam isabet). Turn'de: 9 × 2 = **%18** (gerçek değer %19,6 — karar vermeye yetecek kadar yakın).

:::tip[×4 versiyonu, kalan iki kartı da başka bahis olmadan göreceğini sessizce varsayar — bu da ancak artık hiç bahis yapılamadığında garantidir (all-in olduysan ya da bir all-in'i call ettiysen). Önünde daha bahis varsa, önündeki sokak için ×2 (tek kart) sayısına yaslan; gerisini implied odds haklı çıkarsın.]:::

Her draw ve tamamlanmış el için tam türetmeler [olasılık tablosunda](/tr/blog/holdem-probability) duruyor. Burada ihtiyacın olan tek şey bu kısayol.

---

## Yeni başlayanların en sık yaptığı pot odds hataları neler?

> **Kısa cevap**
> Pahalıya patlayan pot odds hataları şunlardır: yanlış son potu kullanmak, yine de kaybettiren kartları out saymak ve tek kartlık bir call'u iki kartlık tahminle almak. Gelecekteki para da hayali olabilir: derin stack ödeme garantisi değildir. Bir draw'ı call etmeden önce fiyatı, temiz out'ları ve kalan bahsi ayrı ayrı kontrol et.

Bunların hepsini, beni batırmadan önce tek tek yaptım. Dikkat et:

:::card
🧮 | Call'u pota katmayı unutmak | Gereken equity call ÷ *son* pottur — ortaya giren kendi çiplerini de say, yoksa gereken equity'yi olduğundan yüksek görür ve yapman gereken call'ları fold edersin
🃏 | Kirli out'ları saymak | Board'u da eşleyen bir floş out'u birine full yaptırabilir. Sayıya güvenmeden önce "kirli" out'ları düş
🚀 | 4 kuralını yanlış kullanmak | ×4 sadece iki kartı da bedavaya göreceğinde (all-in) geçerlidir. Turn bahsiyle karşı karşıyaysan ×2'dir — ×4 kullanmak seni kaybettiren call'lara ikna eder
💸 | Implied ve reverse implied odds'u görmezden gelmek | Derin stack'ler draw ellerini ödüllendirir; daha büyük bir ele çarpan nut olmayan bir draw kazanç değil, tuzaktır
🎯 | Umutla call etmek | "Belki gelir" bir sebep değildir. Equity'n pot oranını (artı implied odds'u) geçmiyorsa, cevap fold'dur

:::

### Baştan sona gerçek bir el

Elimde ==b:A♥ K♥==, flop ==Q♥ 7♥ 2♣== — nut floş draw'ı, 9 out. Pot $100, rakip $50 bahis yapıyor. Pot oranım: 3:1 alıyorum, yani **%25**'e ihtiyacım var. İki kartı da görebilseydim ~%35'te olurdum — ama bu call sadece turn'ü alıyor ve tek başına turn %19,1, fiyatın altında. Aradaki farkı kapatan implied odds: bir kupa düşerse top pair'li bir eli stack'lerim. ==g:Rahat call.==

Turn 3♠ — boş kart. Pot $200 ve rakip $200 ile all-in gidiyor — pot büyüklüğünde bir bahis, yani artık sadece 2:1 alıyorum ve **%33**'e ihtiyacım var. Ama **tek kart kala floşum sadece %19,6** (yalnızca 9 kupayı sayıyorum — pot büyüklüğünde bir all-in'e karşı asımı ya da papazımı eşlemek çoğu zaman yine kaybettirir, o yüzden overcard'lar temiz out değil). Doğrudan fiyat fold diyor; implied odds'um da artık sıfır, çünkü rakip all-in ve bana daha fazla ödeyemez. Böyle boş bir turn'de all-in giden set'lere ve iki çiftlere karşı elimdeki tek şey %19,6 — range'ine birkaç top pair eli sızsa bile overcard'lar call'u ancak başa baş civarına çeker. ==r:Fold== — ve "umut"un bana eskiden bir stack'e mal olduğu tam o spot.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-probability | Poker olasılıkları ve olasılık tablosu | /images/holdem-probability-hero.webp
/tr/blog/holdem-tournament-vs-cash-game | Turnuva mı cash oyunu mu? | /images/holdem-tournament-vs-cash-hero.webp
:::

## Sıkça sorulan sorular

**Q. Pot odds hızlıca nasıl bulunur?**

A. Call etmen gereken miktarı, call'undan *sonraki* toplam pota böl. $150'lık bir pota $50 call etmek 50 ÷ 200 = %25 eder — ihtiyacın olan equity budur. Kazanma şansın, yalnızca bu call'un görmene izin verdiği kartlar üzerinden sayıldığında bunu geçiyorsa call et.

**Q. Pot odds'ta kendi call'unu pota katıyor musun?**

A. Evet. Gereken equity formülü, kendi call'unu da içeren *son* potu kullanır. $150'lık bir pota $50 call etmek $200'lık bir son pot demektir, yani 50 ÷ 200 = %25. Call'unu dışarıda bırakmak, yeni başlayanların en yaygın hatasıdır.

**Q. Pokerde pot büyüklüğü nasıl bulunur?**

A. Pot, ortada zaten duran her çip artı mevcut sokakta yapılan bahislerdir. Pot odds'u bulmadan önce başlangıç potunu ve rakibinin bahsini topla — sonra kendi call'unu *son* pota kat. Örnek: $100 pot, $50 bahis ve senin $50 call'un $200'lık bir son pot eder.

**Q. Pokerde iyi pot odds nedir?**

A. Ne kadar yüksekse o kadar iyi — "5:1 almak" (sadece %16,7'ye ihtiyaç) harikadır. Ama bir oranın "iyi" olup olmadığı eline bağlıdır: 2:1 almak (%33 gerekir) temiz bir floş draw'ıyla yalnızca iki kartı da zaten göreceksen işe yarar (all-in ya da başka bahis yok — %35); call sadece tek kart alıyorsa fiyatı karşılamaz (flop'tan %19,1, turn'den %19,6); gutshot'la ise berbattır. Fiyatı her zaman equity'nle karşılaştır.

**Q. Pot odds orandan yüzdeye nasıl çevrilir?**

A. X:1 oran, yüzde olarak 1 ÷ (X + 1) olur. Yani 3:1 = 1 ÷ 4 = %25; 4:1 = 1 ÷ 5 = %20. Kazanma şansınla karşılaştıracağın şey yüzdedir.

**Q. Pot odds ile implied odds arasındaki fark ne?**

A. Pot odds yalnızca şu anda pottaki çipleri sayar. Implied odds, elini tamamlarsan sonraki sokaklarda kazanmayı beklediğin *ekstra* çipleri ekler. Implied odds, pot odds'un tek başına fold dediği bazı draw'ları kârlı şekilde call etmeni sağlar — yeter ki stack'ler sana ödeme yapacak kadar derin olsun.

**Q. Pot büyüklüğünde bir bahis hangi pot odds'u verir?**

A. Pot büyüklüğünde bir bahis sana 2:1 verir, yani call için %33 equity gerekir. Yarım pot bahis 3:1 verir (%25 gerekir); 2× pot overbet 1,5:1 verir (%40 gerekir). Büyük bahisler daha fazla equity ister ama artış küçüktür: 2× pot overbet %40, 3× overbet yaklaşık %43, 5× overbet yaklaşık %45 ister — ve hiçbir bahis, ne kadar büyük olursa olsun, %50'den fazlasını istemez.

**Q. Potun ne kadarını bahis yapmalısın?**

A. Bahis boyutu pot odds'un öbür yüzüdür — bahsin, rakibinin alacağı fiyatı belirler. Yarım pot bahis ona 3:1 verir (%25'e ihtiyacı olur), pot büyüklüğünde bahis 2:1 verir (%33'e ihtiyacı olur), overbet ise daha fazlasını ister. Draw'a açık board'larda draw ellerinin kârlı call yapmasını engellemek için büyük bahis yap; daha zayıf bir elin değer için call etmesini istiyorsan küçült. Yaygın boyutlar board'a ve amacına göre ⅓ pottan tam pota kadar uzanır.

**Q. 4 ve 2 kuralı nedir?**

A. Temiz out'larını draw'ı tutturma şansına çeviren bir kısayol: out'ları flop'ta 4 ile (önünde iki kart), turn'de 2 ile (önünde tek kart) çarp. Dokuz floş out'u flop'ta ≈ %36, turn'de %18 eder. ×4'ü yalnızca iki kartı da başka bahis olmadan göreceksen kullan.

**Q. Bir bahsi call etmek için ne kadar equity gerekir?**

A. Tam olarak yüzde cinsinden pot oranın kadar: call ÷ son pot. Yarım pot bahse karşı %25, pot büyüklüğünde bahse karşı %33 gerekir. Bir draw için temiz out'larını say, bu call'un gerçekten aldığı kartlara göre 4 ve 2 kuralıyla çevir ve o şans çıtayı geçtiğinde — ya da implied odds aradaki farkı kapattığında — call et.

**Q. Equity'n pot odds'tan yüksek mi olmalı, düşük mü?**

A. Yüksek. Pot oranın call için *ihtiyaç duyduğun* equity'yi verir (call ÷ son pot); equity'n ise pottan beklenen payındır. Equity'n bu gereken sayıdan *yüksekse* call, düşükse fold edersin — implied odds (tutturduğunda sonraki sokaklarda kazanacağın para) farkı kapatamıyorsa. Yarım pot bahis %25 istiyor ve temiz floş draw'ının %35'i varsa (önünde iki kart — turn ve river'ı başka bahis olmadan göreceksin), %35 > %25 → kârlı bir call.

---

## Hatırlaman gereken 3 şey

1. **Formül:** gereken equity = call'un ÷ son pot (call'un dahil). Yarım pot = %25, pot büyüklüğü = %33.
2. **Karşılaştırma:** equity'n pot oranını geçtiğinde call et. Bir draw için out × 4 ya da × 2 bunu tahmin eder — yalnızca temiz out'ları say ve önünde daha bahis varsa ×2 kullan.
3. **Hakem:** implied odds fiyatı kıl payı kaçıran draw'ları kurtarır — ama yalnızca arkada kazanılacak çip ve bunu ödemesi muhtemel bir rakip varsa; nut'a çekmek bu kazancı daha güvenli kılar.

Bunu birkaç yüz kez yap; matematik olmaktan çıkıp içgüdüye dönüşür. Umutsuz call'ları fold edecek, kârlı olanları yapacak ve "umut" vergisini ödemeyi bırakacaksın. Buradan sonra her draw'ın arkasındaki ham sayıları [poker olasılıkları ve olasılık tablosu](/tr/blog/holdem-probability) yazısında keskinleştir ya da potlara çekmeye değer ellerle girdiğinden emin olmak için [pozisyona göre başlangıç eli tablosuna](/tr/hand-chart) bak.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Olasılık & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker olasılıkları ve olasılık tablosu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Her el, flop ve draw — fiyatın arkasındaki sayılar</div>
  </a>
  <a href="/tr/hand-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Başlangıç elleri</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pozisyona göre başlangıç eli tablosu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Potlara çekmeye değer ellerle gir</div>
  </a>
  <a href="/tr/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Araç</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot odds ve equity hesaplayıcı</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kafadan yaptığın hesabı kontrol et</div>
  </a>
  <a href="/tr/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Cash ve turnuva</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Turnuva mı cash oyunu mu?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Implied odds cash oyunlarında neden daha derindir</div>
  </a>
</div>
`.trim(),
};

export default POST;
