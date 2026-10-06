import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Texas Hold'em all-in (rest) kuralları: yan potlar, yeniden yükseltme ve showdown",
  seoTitle: "All-in gittin ama ne kazanırsın? Rest ve yan pot kuralları",
  desc: "Pokerde rest, yani all-in: tüm çiplerini ortaya sürdün, krupiye çipleri iki yığına ayırıyor. Table stakes, ana pot, yan pot ve showdown kuralları örnekle.",
  tldr: "All-in (Türkçe masa dilinde rest) gitmek, önündeki tüm çipleri ortaya sürmektir. Her rakipten sadece eşlediğin kadarını kazanabilirsin (ana pot); iki ya da daha fazla büyük stack'in bunun üstüne koyduğu çipler yalnızca onların kazanabileceği bir yan pot oluşturur; tek bir oyuncunun fazlası ise ona iade edilir. No-limit ve pot-limit'te tam bir yükseltmeden az olan bir all-in, zaten aksiyon almış oyuncu için bahsi YENİDEN açmaz — birkaç kısa all-in toplanıp o oyuncunun koyduğunun üstüne en az tam bir yükseltme etmedikçe.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-10-06",
  masterUpdated: "2026-08-12",
  keepImagesInBody: true,
  readTime: "10 dk",
  emoji: "♠",
  tags: [
    "all in kuralları poker",
    "pokerde rest ne demek",
    "texas holdem all in",
    "yan pot poker nedir",
    "pot nasıl bölünür",
    "all in gidince ne olur",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "Texas Hold'em all-in — bir oyuncu tüm çiplerini ortaya iterken krupiye yeşil çuha üzerinde ana pot ile yan potu ayırıyor",
  content: `
Çipin azaldı. Hepsini ortaya sürüyorsun. Arkandaki oyuncu görüyor. Üçüncü bir oyuncu yeniden yükseltiyor. Krupiye çipleri iki yığına ayırmaya başlıyor.

Ve sen masada neler olduğunu hiç anlamıyorsun.

Ben o masada oturdum. Canlı bir cash oyununda ilk kez all-in gittiğimde hâlâ bir şey kazanıp kazanamayacağımı, diğer oyuncunun yeniden yükseltip yükseltemeyeceğini, hatta hangi çip yığınının benim olduğunu bile bilmiyordum. Kimse anlatmadı.

==Bu rehber her durumu kapsıyor: ana pot, yan pot, kimin yeniden yükseltebileceği ve showdown sırası.== Krupiye stack'leri saymaya başlayınca donup kalma devri bitti. (Temel bahis akışı hâlâ kafanda oturmadıysa, [yeni başlayanlar için kurallar rehberi](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") her şeyi sıfırdan anlatıyor.)

## All-in (rest) nedir? Pokerde rest çekmek ne demek?

All-in, Türkçe masa diliyle rest, önündeki tüm çipleri tek hamlede ortaya sürmektir. TDK sözlüğü rest'i tam bu anlamda tanımlar: «Pokerde, bir oyuncunun önündeki paranın tümü.» Texas Hold'em kurallarında ve masalarında standart yazım «all-in»dir; rest aynı hamlenin Türkçe adıdır. Sözlük ikinci anlamı da verir: «Karşı çıkış.» Günlük dildeki «rest çekmek» bu ikisini birleştirir — masadaki gibi her şeyini ortaya koyup karşısındakine açıkça karşı çıkmak.

Bir kez sürdükten sonra daha fazla çip ekleyemezsin — ve seni kimse pas geçmeye zorlayamaz. Masada duyacağın diğer Türkçe sözcükler (gördüm, bop, pas) [check, call, raise, fold rehberinin](/tr/blog/holdem-betting-actions) masa terimleri bölümünde; eski Türk masa sözlerinin tamamı [masa dili rehberinde](/tr/blog/holdem-glossary), İngilizce terimlerin kısa tanımları ise [poker terimleri sözlüğünde](/tr/glossary).

Temel, **table stakes** kuralıdır: sadece elin başladığında masada olan çiplerle bahis yapabilirsin. Cebinden ekstra para çıkaramaz, arkadaşından borç alamaz, saat ya da araba anahtarı ortaya koyamazsın — o film pokeridir.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Ne demek |
|------|---------|
| Rest / rest çekmek | All-in'in Türkçe masa adı |
| Push / Shove / Jam | All-in gitmenin İngilizce argosu |
| Table stakes | Sadece elin başında sahip olduğunla bahis yapabilirsin |
| Double up | Bir all-in kazanıp stack'ini ikiye katlamak |
| Ana pot (main pot) | Herkesin — all-in oyuncu dahil — kazanabileceği pot |
| Yan pot (side pot) | Sadece büyük stack'lerin kazanabileceği çipler; all-in oyuncu kendi katkısını aşan yan potlarda hak sahibi değildir |

</div>

==g:All-in olup call edildiğinde kalan tüm ortak kartları görmen garanti altındadır.== Kimse seni blöfle elden düşüremez. Kartların river'a kadar canlı kalır.

Masada en sık gördüğüm karışıklık şu: biri "rest" der, karşısındaki "ben de rest" der ve ikisi de bunun bir yükseltme olduğunu sanır. Oysa stack'i küçük ya da eşit olan için bu yalnızca bir call'dur — krupiye önce iki stack'i sayar, ancak ondan sonra kimin neyi kazanabileceği belli olur.

---

## All-in nasıl ilan edilir

İki geçerli yol var:

**1. Sözlü ilan** — "All-in" de, krupiye ve rakipler net duysun. En güvenli yöntem budur. Bir kez söyledin mi, artık bağlısın.

**2. Tüm çipleri öne itmek** — Tüm stack'ini tek ve temiz bir hareketle merkeze doğru kaydır. Çipleri parça parça itmek string bet'e (parçalı bahis) benzeyebilir, o yüzden hepsini tek seferde hareket ettir.

![Texas Hold'em all-in showdown — K♠ 10♣ 7♦ 4♥ 2♣ board'u ve çiplerin etiketli ana pot ile yan pota ayrılmış hali](/images/holdem-all-in-declare.webp)

==r:Hiçbir şey demeden tek bir büyük çipi öne itip bunun all-in sayılmasını bekleme — önünde bir bahis varsa krupiye onu call sayar; bahis yoksa yalnızca o çipin değeri kadar bir bahis sayar.== Her zaman yüksek sesle "all-in" de ya da tüm stack'ini tek seferde ortaya sür.

---

## Pokerde yan potlar nasıl işler? (All-in oyuncu neden sınırlanır)

All-in oyuncu, sadece kendi koyduğu miktarı ve pota çip koyan diğer her oyuncudan en fazla aynı miktarı kazanabilir — sonradan fold eden oyuncunun koyduğu çipler de buna dahil, çünkü pota giren çip potta kalır. Bunun üzerinde bahis yapılan çipler, o parayı koyan oyunculara özel bir **yan pot** oluşturur — ama yalnızca en az iki oyuncu bu fazlalığı koyduysa. Sınırın üstünde tek bir oyuncu varsa yan pot için yarışacak kimse yoktur; fazlalık karşılanmamış bahis olarak doğrudan ona iade edilir.

![Texas Hold'em all-in sonrası yan pot — krupiye çipleri ana pot ile yan pota ayırırken A Oyuncusu sınırlanmış durumda](/images/holdem-all-in-side-pot.webp)

### 3 oyunculu örnek (standart durum)

| Oyuncu | Stack | Aksiyon |
|--------|-------|--------|
| A Oyuncusu | 100 çip | All-in |
| B Oyuncusu | 300 çip | 100'ü görür, sonra 50 daha koyar |
| C Oyuncusu | 300 çip | 100'ü görür, sonra 50'yi görür |

**Ana pot:** 100 × 3 = **300 çip** (A, B ve C kazanabilir)

**Yan pot:** 50 × 2 = **100 çip** (sadece B ve C)

==A Oyuncusu showdown'da 300 çiplik ana potu kazanabilir. Ama en iyi ele sahip olsa bile 100 çiplik yan pota dokunamaz.== Onu B ya da C alır.

### 4 oyunculu, farklı stack'li örnek

İşin karıştığı yer burası — ve çoğu yeni başlayanın kaybolduğu yer.

| Oyuncu | Stack | All-in gittiği miktar |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | hepsini görür |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Miktar | Kazanabilecek oyuncular |
|:---|:---:|:---|
| Ana pot | 100 × 4 = **400** | A, B, C, D |
| Yan pot 1 | 100 × 3 = **300** | B, C, D (A sınırlı) |
| Yan pot 2 | 300 × 2 = **600** | C, D (A ve B sınırlı) |
| **Toplam** | **1.300** | — |

</div>

Kural şu: ==her yan pot, bir sonraki en küçük stack'e kadarki farkı × onu karşılayan oyuncu sayısı ile hesaplanır.== En küçük stack'ten en büyüğe doğru ilerle.

---

## All-in bahsi yeniden açar mı? — Çoğu oyuncunun yanlış bildiği kural

==r:Bu, canlı masalarda en çok tartışma çıkaran all-in kuralıdır — iki oyuncunun bunu tam beş dakika tartışmasını, tüm masa beklerken izledim. İkisi de yanılıyordu.==

**Kural:** Bir oyuncu **tam bir [yükseltmeden](/tr/blog/holdem-betting-actions) az** bir miktara all-in giderse, o all-in, bu turda zaten bet, call ya da raise yapmış ve son aksiyonundan bu yana toplamda tam bir yükseltmeyle karşılaşmayan oyuncular için bahsi YENİDEN açmaz.

![Pokerde all-in sonrası yeniden yükseltme kuralı — tam bir yükseltmeden az kalan kısa bir all-in, bu yüzden zaten aksiyon almış olan A Oyuncusu sadece görebilir veya pas geçebilir](/images/holdem-all-in-reraise-rule.webp)

**Örnek:**

Blind'lar $1/$2. Dört oyuncu flop'u görüyor.

1. A Oyuncusu $10 bahis yapıyor.
2. B Oyuncusu **$14** all-in gidiyor (A'nın $10'luk bahsinden sadece $4 fazla — tam bir yükseltme değil; tam yükseltme en az $20 olurdu).

A Oyuncusuna ve henüz aksiyon almamış C Oyuncusuna ne olur?

- A Oyuncusu zaten aksiyon aldı ($10 bahis yaptı) ve şimdi eksik bir yükseltmeyle karşılaşıyor. B'nin $14'lük all-in'i **tam bir yükseltmeden az** olduğu için aksiyon A Oyuncusu için yeniden açılmaz. ==A sadece görebilir veya pas geçebilir — yeniden yükseltemez.==
- C Oyuncusu henüz aksiyon almadı — **C Oyuncusu normal şekilde yükseltebilir.**

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in miktarı | Tam yükseltme mi? | Bahsi yeniden açar mı? |
|--------------|-------------|-----------------|
| Tam bir yükseltmeden az (tek başına) | Hayır | Hayır — zaten aksiyon alanlar sadece görebilir veya pas geçebilir (birden fazla kısa all-in toplamı için aşağıdaki tabloya bak) |
| Tam yükseltme veya fazlası | Evet | Evet — herkes yeniden yükseltebilir |

</div>

Bu kural neden var? Oyuncuları, kısmi all-in'ler yüzünden daha büyük yükseltmelere zorlanmaktan korur. Tam bir yükseltme gerçek agresyon anlamına gelir — kısa stack'in birkaç çip için gittiği all-in ise gelmez.

### İleri düzey durum: Birden fazla oyuncu kısa all-in giderse ne olur?

Bu, düzenli oyuncuları bile zorlayan durumdur. Birden fazla kısa all-in **toplanabilir**, ancak bahsin yeniden açılıp açılmadığı her oyuncu için son aksiyonundan itibaren ayrı ayrı ölçülür. Oyuncunun karşı karşıya kaldığı toplam artış son tam bahis veya yükseltmeye ulaştığında yeniden yükseltme hakkı doğar.

Bu, No-Limit ve Pot-Limit için TDA 2024 Kural 47-A'daki resmi "bahsi yeniden açma" kuralıdır. Cash oyununda önce ev kuralını kontrol et.

**Örnek (blind'lar $1/$2, flop'ta):**

1. A Oyuncusu $10 bahis yapıyor.
2. B Oyuncusu **$14** all-in gidiyor (+$4 artış — tek başına tam bir yükseltme değil)
3. C Oyuncusu **$21** all-in gidiyor (+$7 artış — tek başına tam bir yükseltme değil)

Birleşik artışlar: $4 + $7 = **$11** — $10'luk minimum yükseltme eşiğini karşılıyor.

**Sonuç: bahis A Oyuncusu için YENİDEN AÇILIR.** A artık $21 ile karşı karşıyadır; son $10 aksiyonundan bu yana artış $11'dir ve tam $10 yükseltme için yeterlidir. Ancak B ile C arasında $14 gören bir oyuncunun karşısındaki artış yalnızca $7'dir; bahis o oyuncu için yeniden açılmaz.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| B'nin all-in'i | C'nin all-in'i | Birleşik artış | A için açılır mı? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — $10'un altında | ❌ Hayır |
| $14 (+$4) | $21 (+$7) | $11 — $10'a ulaşıyor | ✅ Evet |
| $15 (+$5) | $24 (+$9) | $14 — $10'a ulaşıyor | ✅ Evet |

</div>

Minimum yükseltme eşiği her zaman *son geçerli tam bahis veya yükseltmedir* — herhangi bir kümülatif toplam değil.

### Hızlı karar rehberi — Bu all-in bahsi yeniden açar mı?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Durum | Zaten aksiyon alanlar için açılır mı? |
|---|---|
| Tek all-in < tam yükseltme | ❌ Hayır — sadece gör ya da pas geç |
| Tek all-in ≥ tam yükseltme | ✅ Evet — herkes yeniden yükseltebilir |
| Birden fazla kısa all-in, toplam < tam yükseltme | ❌ Hayır |
| Birden fazla kısa all-in; oyuncunun son aksiyonundan beri artış ≥ tam bahis/yükseltme | ✅ Evet — yalnızca o oyuncu için |
| Henüz aksiyon ALMAMIŞ oyuncu | ✅ Her zaman yükseltebilir (ne olursa olsun) |

</div>

---

## All-in showdown kuralları

Bahis kapandığında ve bir oyuncu all-in olduğunda, showdown'da olanlar şöyledir:

1. **Kartlar yüzü açık çevrilir.** Turnuvada bir oyuncu all-in olduğunda ve tüm bahis tamamlandığında kalan bütün eller hemen açılmalıdır; muck yoktur (TDA 2024 Kural 16). Cash oyununda ev kuralı geçerlidir; WSOP 2026 B149'a göre yan pot oyuncuları yalnızca ana potta olanlardan önce gösterir. No-Limit'te bahis river'dan önce bittiyse all-in oyuncusu önce gösterir; aksi halde river'ın son agresörü, river herkesçe check geçildiyse butonun solundaki ilk aktif oyuncu başlar. Ayrıntılar [showdown kurallarında](/tr/blog/holdem-showdown-rules).
2. **Yan potlar önce dağıtılır.** Krupiye en son oluşturulan yan potu ilk çözer, sonra geriye doğru ana pota kadar ilerler.
3. **Kartlar konuşur.** En iyi el, hak kazandığı her potu kazanır — oyuncular ne derse desin.
4. **Birden fazla kazanan olabilir.** A Oyuncusu ana potu, B Oyuncusu yan potu kazanabilir. Kimse "kendi" potunu kazandı diye her şeyi almaz.

==g:Bir oyuncu ana potu kazanıp yan potu kaybedebilir. Her iki sonuç da geçerlidir.==

**Özel durum:** Bir yan potta sadece tek bir oyuncu kaldıysa (diğerleri pas geçti), o oyuncu o çipleri hemen geri alır — o pot için showdown gerekmez.

---

## All-in'i yanlış gidersen ne olur? — Kaçınılması gereken 5 hata

### Hata 1: All-in oyuncunun kendi katkısını aşan yan potu kazanabileceğini sanmak

Kazanamaz. All-in oyuncu, katkıda bulunduğu ana pot ve yan potlarda hak sahibidir; ama kendi katkısını aşan kısımda büyük stack'lerin koyduğu her ekstra çip, üzerinde hiçbir hakkı olmayan bir pota gider.

### Hata 2: Kimin yeniden yükseltebileceği kuralını bilmemek

Kısmi bir all-in, o turda **zaten bet, call ya da raise yapmış** oyunculara yeniden yükseltme şansı vermez — birkaç kısa all-in toplanıp o oyuncunun son aksiyonundan bu yana en az tam bir yükseltmeye ulaşmadıkça. Henüz aksiyon almamış olan normal şekilde yükseltebilir. Bunu ezbere bilmek, tartışmaları daha başlamadan bitirir.

### Hata 3: El ortasında cepten çip eklemek

Table stakes. Masada olan, bahis yapabileceğin her şeydir. $80 için all-in'sen ve pot $400 ise, seni gören her oyuncudan sadece $80 kazanabilirsin.

### Hata 4: Elini çok erken atmak

Ana pot için all-in'sin. Diğer iki oyuncu yan pot için kapışıyor. Kartlarını atma — elin ana pot için hâlâ canlı. ==Kartlarına dokunmadan önce her zaman krupiyenin tüm potları çözmesini bekle.==

### Hata 5: Sinirinden all-in gitmek

All-in, masadaki en güçlü hamledir. Rakipleri ya hep ya hiç kararına zorlar. O güç, rastgele hepsini ortaya sürünce kaybolur. Doğru anda kullan — kısa stack baskısı, görülmesini istediğin değer elleri, gerçek fold equity'si olan blöfler.

---

:::readnext[Okumaya devam et]
/tr/blog/texas-holdem-rules-for-beginners | Yeni başlayanlar için Texas Hold'em kuralları | /images/rules-texas-holdem.webp
/tr/blog/holdem-showdown-rules | Showdown kuralları, adım adım | /images/holdem-showdown-rules-hero.webp
:::

## Sıkça sorulan sorular

**Q. Pokerde rest çekmek ne demek?**

A. Sıra sana geldiğinde bütün çiplerini tek hamlede ortaya koymak, yani all-in gitmektir. Yüksek sesle "rest" ya da "all-in" demen veya stack'ini tek seferde öne itmen yeterlidir; krupiyenin "rest"i bildiğinden emin değilsen "all-in" de. Söyledikten sonra geri alamazsın. Sözcüğün sözlük anlamı ve deyimle bağı için yukarıdaki «All-in (rest) nedir?» bölümüne bak.

**Q. Reste rest ne demek?**

A. Rakibin rest'ine kendi bütün çiplerinle karşılık vermektir; ne anlama geldiğini stack'ler belirler. Stack'in rakibinkinden küçük ya da eşitse bu bir all-in call'dur — eşleyebildiğin kadarını görürsün. Stack'in daha büyükse ve elde başka oyuncu kalmadıysa yine call'dur; rakibin karşılayamadığı fazlalık sana geri döner. Elde hâlâ çipi olan başka oyuncular varsa senin all-in'in bir raise sayılabilir — ama bu turda zaten bet, call ya da raise yaptıysan ve son aksiyonundan bu yana sana gelen toplam artış tam bir yükseltme değilse yeniden yükseltemezsin. Ayrıntı yukarıdaki «All-in bahsi yeniden açar mı?» bölümünde.

**Q. Rest ile all-in aynı şey mi?**

A. Evet, aynı hamledir: table stakes, yan pot hesabı ve showdown sırası birebir aynı işler. Fark yalnızca sözcükte — kural metinlerinde ve çoğu Texas Hold'em masasında "all-in" denir, Türkçe masa dilinde ve günlük konuşmada "rest" yaşar. İlan ederken krupiyenin net anlayacağı sözcüğü seç.

**Q. Rest çekip kaybedersen ne olur?**

A. Seni gören rakip daha iyi elle kazanırsa ortaya koyduğun çipleri kaybedersin; table stakes kuralı yüzünden masadakinden fazlasını asla kaybetmezsin. Rakibin stack'i seninkinden küçükse yalnızca onun eşleyebildiği kadarı gider, gerisi önünde kalır. Stack'in sıfırlanırsa cash oyununda yeniden çip alabilirsin; turnuvada elenirsin (rebuy ya da re-entry varsa ev kuralına göre). Table stakes'in tanımı yukarıdaki «All-in (rest) nedir?» bölümünde.

**Q. Big blind'dan az bir miktara all-in gidilebilir mi?**

A. Evet. Ödemen gereken blind tüm stack'inden büyükse kalan çiplerini koyar ve onunla all-in olursun (WSOP Live Action Kural 154). Diğerleri yine tam big blind'ı öder — senin koyduğunu aşan miktar aralarında bir yan pot oluşturur ya da fazlalığı tek bir oyuncu koyduysa karşılanmamış bahis olarak ona geri döner.

**Q. All-in'i kazanıp yan potu kaybedersen ne olur?**

A. Ana potu (her oyuncudan eşlediğin miktarı) sen alırsın, yan potu diğer oyuncu alır. Herkes hak kazandığı kısmı kazanır.

**Q. All-in gitmek elini açmaya zorlar mı?**

A. Turnuvada evet—bir oyuncu all-in olduğunda ve tüm bahis tamamlandığında kalan bütün eller hemen açılmalı, hiçbiri muck edilmemelidir (TDA 2024 Kural 16). Cash oyununda ev kuralı geçerlidir. WSOP 2026 B149'a göre yan pot oyuncuları önce gösterir; No-Limit'te bahis river'dan önce bittiyse all-in oyuncusu önce gösterir.

**Q. Poker all-in'inde "run it twice" yapılabilir mi?**

A. Kalan ortak kartları iki kez dağıtıp potu bölmek (run it twice), biri all-in olup bekleyen bahis aksiyonu kalmadığında potta kalan herkes kabul ederse — sadece ikiniz değil — birçok cash oyununda serbesttir (WSOP Live Action Kural 210 ve 211). Turnuvalarda genellikle izin verilmez. Kalan kartlar açılmadan önce anlaşılması gerekir.

**Q. "Table stakes" kuralı tam olarak nedir?**

A. Table stakes, sadece el başladığında önünde duran çiplerle bahis yapabileceğin anlamına gelir. El oynanırken para ekleyemezsin. Bu iki tarafı da korur: sen asla stack'inden fazlasını riske atmaya zorlanamazsın, rakip de karşılayabileceğinden fazlasını bir anda bahis yapamaz.

**Q. İki oyuncu farklı miktarlarda all-in giderse önce kim gösterir?**

A. ==r:Turnuvada "kim önce gösterir" sırası yoktur==—bir oyuncu all-in olduğunda ve bahis tamamlandığında kalan bütün eller hemen açılmalıdır (TDA 2024 Kural 16). Cash oyununda ev kuralı geçerlidir; WSOP 2026 B149'a göre yan pot oyuncuları önce gösterir ve No-Limit'te bahis river'dan önce bittiyse all-in oyuncusu önce gösterir. All-in miktarı tek başına kimin başlayacağını belirlemez.

**Q. All-in kuralları turnuvalarda ve cash oyunlarında farklı mı?**

A. Turnuvada bir oyuncu all-in olduğunda ve bahis tamamlandığında kalan bütün eller hemen açılmalı, hiçbiri muck edilmemelidir (TDA 2024 Kural 16). Cash oyununda ev kuralı ve WSOP 2026 B149 gibi salona özgü sıralar geçerlidir; muck imkânı da ev kuralına bağlıdır. Run it twice anlaşmayla birçok cash oyununda yaygındır, ancak turnuvada genellikle izin verilmez.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pilar rehber</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Blind'lardan showdown'a tüm kurallar</div>
  </a>
  <a href="/tr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Showdown kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kim önce gösterir ve kartlarını ne zaman atabilirsin</div>
  </a>
</div>
`.trim(),
};
