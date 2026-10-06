import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Poker turnuvası mı cash game mi? Yeni başlayanlar için seçim",
  seoTitle: "Poker turnuvası mı cash game mi? Çip her zaman para değil",
  desc: "Cash game (nakit masa) nedir, poker turnuvasından farkı ne? Çip değeri, sabit ve yükselen blind, bankroll ve ICM baskısı; yeni başlayan hangisiyle başlamalı?",
  tldr: "Cash game'de çipler gerçek parayı temsil eder ve blind'lar genellikle sabittir. Turnuvada çipler turnuva hayatındır; blind'lar yükselir ve kazanç, bitirdiğin sıraya bağlıdır.",
  category: "tournament",
  date: "2026-06-11",
  updated: "2026-10-06",
  hideSummaryImageSlot: true,
  readTime: "16 dk",
  emoji: "🏆",
  image: "/images/holdem-tournament-vs-cash-hero.webp",
  imageAlt: "Cash game ile poker turnuvasını yan yana karşılaştıran infografik — çip değeri, blind yapısı ve masadan ne zaman kalkabileceğin",
  tags: [
    "poker turnuvası mı cash game mi",
    "cash game poker",
    "cash game nedir",
    "nakit masa poker",
    "poker turnuvası yeni başlayanlar",
    "nakit oyun poker",
    "turnuva poker stratejisi",
    "poker bankroll yönetimi",
    "ICM poker",
    "bubble poker",
  ],
  content: `
Neredeyse her yeni Hold'em oyuncusu bir noktada aynı soruyu sorar:

*"==Cash game== mi oynayayım, yoksa ==turnuvalara== mı gireyim?"*

Dışarıdan bakınca aynı oyun gibi görünür — [Texas Hold'em kuralları](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") birebir aynıdır. Yine iki kapalı kart alırsın, masaya beş ortak kart açılır ve preflop'tan river'a kadar dört bahis turu oynanır. Ama stratejik olarak neredeyse iki ayrı dünyadır. Cash game'de çiplerin paradır. Turnuvada çiplerin turnuva hayatındır.

Bu rehber, ==poker turnuvası ile cash game farkını== yeni başlayanların gerçekten ihtiyaç duyduğu şekilde anlatır: çip değeri, blind yapısı, zaman, varyans, bankroll, ICM, stack derinliği ve hangi formatla başlaman gerektiği. Turnuvanın kendisini — buy-in, blind seviyeleri, aşamalar ve ödül dağılımı — [poker turnuvası nasıl işler?](/tr/blog/holdem-tournament) rehberinde ayrıca anlattım.

![Turnuva ve cash game seçimlerinin çip değerini ve stratejiyi değiştirdiği bir Texas Hold'em masası](/images/tournament-table-action.webp "Poker turnuvası ve cash game karşılaştırması")

### 15 saniyelik cevap

- **Cash game:** çipler gerçek parayı temsil eder, blind'lar sabit kalır ve istediğin zaman masadan kalkabilirsin.
- **Turnuva:** tek bir buy-in ödersin, turnuva çipi alırsın ve elenene ya da kazanana kadar oynarsın.
- **Cash game temelleri daha hızlı öğretir** çünkü stack'ler daha derindir ve hataların geri bildirimi daha nettir.
- **Turnuvalar daha büyük skor fırsatı verir**, ama varyans daha yüksek, seanslar daha uzun ve ICM baskısı daha serttir.
- **Çoğu yeni oyuncu için en temiz başlangıç cash game'dir.** Temel kararlar otomatikleşince küçük turnuvaları eklemek daha sağlıklıdır.

---

## Cash game nedir? (Nakit masa / nakit oyun)

> **Kısa cevap**
> Cash game (Türkçede nakit masa ya da nakit oyun), masadaki çiplerin doğrudan gerçek parayı temsil ettiği poker formatıdır. Blind'lar seans boyunca sabit kalır, masanın alt ve üst buy-in sınırları içinde istediğin tutarla oturursun, stack'in azalınca üstüne çip ekleyebilirsin (top-up) ve istediğin an kalkıp çiplerini paraya çevirirsin. Turnuvadaki gibi elenme, sıralama ya da ödül tablosu yoktur.

Masada nakit oyunlar genellikle blind'larıyla anılır: "1/2 oynuyoruz" dendiğinde small blind 1, big blind 2 birimdir ve bu tutarlar sen kalkana kadar değişmez.

---

## Cash game ile turnuva arasındaki fark nedir?

> **Kısa cevap**
> Cash game, masadaki gerçek parayla kârlı kararlar vermektir; turnuva pokeri ise ödüle ulaşacak kadar uzun süre hayatta kalmaktır. Cash game'de çipler paradır, blind'lar sabittir ve istediğin zaman kalkarsın. Turnuvada sabit bir buy-in ödeyip turnuva çipi alırsın, blind'lar yükselir ve kazancını elindeki çip sayısı değil, turnuvayı kaçıncı bitirdiğin belirler.

Cash game'de $200 ile oturursan, önündeki çipler $200'ü temsil eder. Stack'in $450 olursa $450 ile kalkabilirsin. $120'ye düşersen elinde kalan para budur. Her çipin doğrudan para değeri vardır.

Turnuvada ise $100 buy-in ödeyip 20.000 çip alabilirsin. Bu çipler $20.000 etmez ve turnuva ortasında kasaya gidip bozduramazsın. Değerleri; hayatta kalmana, baskı kurmana ve ödül yapısında daha yukarı çıkmana yardım etmelerinden gelir.

Masada bu fark şöyle hissedilir: $1/$2 cash game'de river'da tek çiftle $60 görürsen, şu anda $60 riske atıyorsun. Kötü bir call ise masadan kalkabilir, üstüne çip ekleyebilir (top-up) ya da başka gün oynayabilirsin. $50'lık bir turnuvada bubble'a yakın 18BB ile all-in görmek ise tüm etkinliğini bitirebilir.

| Başlık | Cash game | Turnuva |
|------|------|------|
| Çip değeri | Gerçek para | Turnuva equity'si |
| Giriş | Seçtiğin miktarla buy-in | Sabit buy-in |
| Çıkış | İstediğin zaman | Elenene ya da bitirene kadar |
| Blind | Genellikle sabit | Zamanla yükselir |
| Ana hedef | Uzun vadeli EV'yi artırmak | Hayatta kalıp ödül basamaklarını çıkmak |
| Strateji odağı | Deep-stack postflop oyun | Stack baskısı, ICM, bubble oyunu |

---

## Turnuva çipleri neden nakit para değildir?

> **Kısa cevap**
> Çünkü turnuvada ödeme, o anda kaç çipin olduğuna göre değil, turnuvayı kaçıncı bitirdiğine göre yapılır. Çiplerini turnuva ortasında kasada bozduramazsın; değerleri hayatta kalmana ve ödül basamaklarında yukarı çıkmana yardım etmelerinden gelir. Bu yüzden turnuvada stack'ini ikiye katlamak gerçek para equity'ni ikiye katlamaz, ama para bölgesinden önce tüm çiplerini kaybetmek o equity'yi anında sıfırlar (paraya girdikten sonra elenirsen bitirdiğin sıranın ödülü sende kalır).

Cash game'de stack'ini ikiye katlamak paranı da ikiye katlar. $200 ile başlayıp $200 kazanırsan artık $400'ün vardır. Bu yüzden cash game kararları doğrudan Chip EV üzerinden düşünülebilir: *Bu call kârlı mı? Bu bahis uzun vadede para kazandırıyor mu?*

Turnuvada aynı hesap işlemez. 10 kişilik bir turnuva düşün. Herkes $100 ödüyor.

| Sıra | Ödül |
|------|------|
| 1. | $500 |
| 2. | $300 |
| 3. | $200 |
| 4.-10. | $0 |

Toplam çiplerin %10'undan %20'sine çıkarsan para kazanma şansın artar, ama ödül equity'n basitçe ikiye katlanmaz. Buna karşılık bubble'da tüm çiplerini kaybedersen turnuva equity'n anında sıfıra iner.

![Turnuva çipleri ICM altında ödül parasına bire bir oranla dönüşmez](/images/icm-chips-not-money-real.webp "Pokerde turnuva çip değeri ve ICM")

---

## Sabit blind mı, yükselen blind mı?

[Small blind ve big blind](/tr/blog/holdem-blind-meaning) her iki formatta da aynı mantıkla konur; fark, tutarların değişip değişmediğindedir. $1/$2 cash game'de blind'lar $1/$2 kalır. Bir saat sonra da aynı, üç saat sonra da aynı. Daha iyi spot bekleyebilir, gerekirse üstüne çip ekleyebilir (top-up) ve deep stack oynamaya devam edebilirsin.

Turnuvada blind'lar seviyelere göre yükselir. Başta 100BB olan stack, tek bir el kaybetmeden ilerleyen saatlerde 25BB olabilir. Sonra 12BB'ye düşebilir. Bir noktadan sonra beklemek bile pahalı hale gelir.

| Aşama | Cash game | Turnuva |
|------|------|------|
| Erken | Deep stack sık kalır | Çoğu oyuncu deep başlar |
| Orta | Blind baskısı sabittir | Ortalama stack kısalır |
| Geç | Yeniden yükleme veya kalkma mümkün | Short-stack all-in'ler artar |
| Baskı | Daha düşük ve sabit | Her seviyede yükselir |

Bu yüzden turnuvalarda "sadece premium el bekle" tavsiyesi her zaman yetmez. Yükselen blind'lar seni steal, defend, reshove ve kontrollü risk almaya zorlar.

---

## Masadan ne zaman kalkabilirsin?

> **Kısa cevap**
> Cash game'de istediğin an kalkabilirsin: 30 dakika da oynayabilirsin, iki saat de; kalktığında çiplerin paraya çevrilir. Turnuvada ise kayıt olduktan sonra ne zaman biteceğini bilemezsin; elenene ya da turnuvayı kazanana kadar oynarsın ve erken ayrılırsan çiplerini bozduramazsın. Zamanın belirsizse cash game, saatlerce odaklanabiliyorsan turnuva daha uygundur.

Cash game'de yorgunsan, tilt olduysan ya da masa kötüleştiyse kendini masadan kalkarak koruyabilirsin. Turnuvada bu seçenek yoktur: küçük bir canlı etkinlik bile saatler sürebilir, büyük alanlı bir MTT tüm günü alabilir.

| Oyuncu durumu | Daha uygun format |
|------|------|
| Boş zamanın belirsiz | Cash game |
| Kısa seans istiyorsun | Cash game |
| Saatlerce odaklanabilirsin | Turnuva |
| Sıralama, baskı ve kupa seviyorsun | Turnuva |
| Aniden gitmen gerekebilir | Cash game |

---

## Hangisinde varyans daha yüksek?

> **Kısa cevap**
> Turnuvada. Cash game sonuçları bb/100 ya da saatlik kazançla ölçülür ve geri bildirim hızlı gelir. Turnuvada ise kazancın büyük kısmı az sayıdaki büyük skordan (deep run) gelir; kazanan bir oyuncu bile 20-30 etkinlik para almadan geçirebilir. Bu yüzden turnuva varyansı çok daha yüksektir ve iki formatta da sonuçları yorumlamak için büyük örneklem gerekir.

Cash game'de bir oyuncu büyük örneklemde 100 elde 5 büyük kör (**5 bb/100**) kazanıyorsa, bu istikrarlı bir edge'dir. Geri bildirim turnuva sonuçlarından daha hızlı ve temizdir.

Turnuva sonuçları **ROI**, paraya girme oranı, final masa sayısı ve büyük skorlarla ölçülür. Uzun bir para alamama serisinden sonra tek bir deep run tüm açığı kapatabilir.

| Ölçüt | Cash game | Turnuva |
|------|------|------|
| Sonuç birimi | bb/100 veya saatlik | ROI ve bitiş sırası |
| Varyans | Orta | Çok yüksek |
| Büyük ödeme şansı | Daha düşük | Daha yüksek |
| Skill geri bildirimi | Daha hızlı | Daha yavaş |
| Mental zorluk | Seans seans | Uzun süre paraya girememek |

Tuzak, varyansı beceri sanmaktır. Tek bir büyük turnuva skoru seni crusher yapmaz. Kötü bir cash seansı da oynayamadığını göstermez. İki formatta da örneklem gerekir.

---

## Cash game ve turnuva için ne kadar bankroll gerekir?

> **Kısa cevap**
> Basit bir başlangıç kuralı: cash game için oynadığın limitte 20-40 buy-in, küçük Sit & Go'lar için 40-60 buy-in, turnuvalar için 50-100+ buy-in. Büyük alanlı MTT'ler daha fazlasını gerektirebilir. Turnuvada daha büyük tampon gerekir, çünkü ödemeler seyrek gelir ve uzun süre paraya giremeden geçen dönemler normaldir. Yeterli bankroll, kararlarını korkunun değil stratejinin yönetmesini sağlar.

Cash game için basit yeni başlayan kuralı, oynadığın limitte yaklaşık **20-40 buy-in** bulundurmaktır. Normal buy-in'in $200 ise, daha güvenli bir poker bankroll'u için kabaca $4.000-$8.000 gerekir.

Turnuvalarda birçok oyuncu **50-100+ buy-in** kullanır. $50'lık turnuva, $200 cash game buy-in'inden ucuz görünebilir; ama varyansı çok daha sert olabilir.

| Format | Yeni başlayan bankroll kuralı | Neden |
|------|------|------|
| Cash game | 20-40 buy-in | Daha düşük varyans, top-up yapılabilir |
| Küçük Sit & Go | 40-60 buy-in | Ödeme varyansı daha yüksek |
| Büyük MTT | 100+ buy-in | Uzun süre ITM olmamak normal |

Bankroll sadece para meselesi değildir. Karar kaliteni korur. Bankroll'un oynadığın limite yetmiyorsa her all-in seni gereğinden fazla gerer ve kararlarını strateji yerine korku yönlendirmeye başlar.

---

## ICM neden sadece turnuvada var?

> **Kısa cevap**
> Çünkü ICM, çipleri paraya çevirmek için vardır ve cash game'de çipler zaten paradır. Turnuvada ise ödül çip sayına değil bitirdiğin sıraya göre ödenir; bu yüzden aynı stack'in gerçek para değerinin ayrıca hesaplanması gerekir. ICM'nin etkisi en çok bubble'da ve final masasında hissedilir: cash game'de rahat bir call, turnuvada fold'a dönebilir.

==ICM== (Independent Chip Model — Bağımsız Çip Modeli), stack boyutlarına, kalan oyunculara ve ödül yapısına göre turnuva stack'inin gerçek para değerini tahmin eden modeldir. Modelin tam açıklamasını ve sayısal bir final masası örneğini [poker turnuvası rehberindeki ICM bölümünde](/tr/blog/holdem-tournament#icm) bulabilirsin.

Farkı tek bir spotta görmek için bubble'da orta stack'e sahip olduğunu düşün. Bir oyuncu all-in yaptı, sende AKo var. Cash game'de pot odds ve equity uygunsa call yapabilirsin. Turnuvada ise kaybetmek $0 ile elenmek anlamına gelebilir; kazanmak ise ödül equity'ni ikiye katlamaz.

| Karar faktörü | Cash game | Turnuva |
|------|------|------|
| Call mantığı | Pot odds + equity | Pot odds + equity + ICM |
| Stack kaybetmek | Bir buy-in kaybetmek | Elenmek |
| Güçlü ellerin değeri | Daha sabit | Ödül baskısına göre değişir |
| Bubble baskısı | Yok | Çok yüksek |

![Bubble aşamasındaki turnuva masasında ICM baskısı, all-in call kararını cash game'e göre çok daha zor hale getirir](/images/holdem-bubble-table.webp "Turnuva bubble baskısı ve ICM kararı")

---

## Deep stack mi, short stack mi? Push/fold ne zaman başlar?

> **Kısa cevap**
> Cash game'de genelde 100BB civarında, yani deep stack oynarsın; flop, turn ve river kararları öne çıkar. Turnuvalar da deep başlar, ama yükselen blind'lar stack'leri kısaltır ve 25BB, 15BB, 10BB seviyelerinde oyun preflop'a kayar. Yaklaşık 10BB ve altında kararların çoğu push (all-in) ya da fold seçimine iner.

Cash game'de value bet, blöf, board texture, pozisyon ve rakip range'lerini anlaman gerekir. Turnuvanın geç aşamasında ise üç street planlamak yerine open, reshove, call off veya fold kararına gelirsin.

| Stack derinliği | Daha yaygın | Ana beceri |
|------|------|------|
| 100BB+ | Cash game | Postflop oyun ve value bet |
| 40-60BB | Erken/orta turnuva | Open range ve 3-bet cevabı |
| 15-25BB | Orta/geç turnuva | Resteal ve shove baskısı |
| 10BB veya az | Geç turnuva | Push/fold disiplini |

---

## Yeni başlayan önce hangisini oynamalı?

Çoğu yeni oyuncu için **cash game, temelleri öğrenmeye daha elverişlidir**.

Cash game kolay olduğu için değil. Kolay değildir. Ama benzer koşullarda aynı kararı tekrar tekrar verip hatalarını görmeni sağlar. Blind'lar aynı kalır, stack'ler daha derindir ve call, raise veya value bet kararını ICM, pay jump ve blind baskısıyla aynı anda çözmeden inceleyebilirsin.

Turnuvalar yine de iyidir; özellikle rekabeti seviyor ve varyansı kaldırabiliyorsan. Sadece tek bir deep run'ı tüm stratejinin doğru olduğuna kanıt sanma.

| Hedef | Daha iyi başlangıç |
|------|------|
| Temelleri hızlı öğrenmek | Cash game |
| Postflop kararları geliştirmek | Cash game |
| Planlı kısa etkinlik oynamak | Turnuva |
| Büyük skor kovalamak | Turnuva |
| Kısa seans oynamak | Cash game |
| ICM ve bubble baskısı çalışmak | Turnuva |

Tamamen yeniysen önce [Texas Hold'em elinin nasıl ilerlediğini](/tr/blog/holdem-game-order) ve [poker el sıralamasını](/tr/blog/holdem-hand-rankings) öğren. Format seçmek, temel kurallar otomatikleşince çok daha kolaydır.

---

## Canlı poker odasında önce ne sormalısın?

Bir poker odasında ya da yerel etkinlikte oturmadan önce formatı sor. Aynı masa, aynı çipler ve aynı kartlar; yapıya göre tamamen farklı kararlar doğurabilir.

| Soru | Neden önemli? |
|------|------|
| Bu cash game mi, turnuva mı? | Çip değeri ve strateji değişir |
| Blind veya blind seviyeleri nedir? | Stack baskısını belirler |
| Re-entry, rebuy veya add-on var mı? | Toplam maliyet ve risk değişir |
| Ödül yapısı nasıl? | Bubble ve ICM kararlarını etkiler |
| Etkinlik genelde ne kadar sürer? | Zaman baskısı hatalarını önler |

Yapıyı açıklayamıyorsan henüz buy-in yapma. Önce sor, sonra oyna. Yakındaki ve büyük serilerin tarihlerini, buy-in'lerini ve yerlerini [poker turnuvaları takvimimizde](/tr/tournaments) topluyoruz.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-all-in-rules | All-in kuralları ve yan potlar | /images/holdem-all-in-rules-hero.webp
/tr/blog/holdem-blind-meaning | Small blind ve big blind | /images/holdem-blind-meaning-hero.webp
:::

## Sıkça sorulan sorular

**Q. Cash game nedir?**

A. Cash game (nakit masa / nakit oyun), çiplerin gerçek parayı temsil ettiği, blind'ların sabit kaldığı ve istediğin zaman kalkıp çiplerini paraya çevirebildiğin poker formatıdır. Örneğin "1/2" masada SB 1, BB 2 birimdir ve değişmez.

**Q. Nakit masa ile turnuva arasındaki fark nedir?**

A. Nakit masada kazancını masadan kalktığındaki çip miktarı, turnuvada ise bitiş sıran belirler; bu yüzden turnuvada ICM ve hayatta kalma baskısı devreye girer. Nakit masada istediğin an kalkabilirsin, turnuvada ise elenene ya da kazanana kadar oynarsın.

**Q. Poker turnuvaları cash game'den daha mı zor?**

A. Farklı şekilde zordur. Cash game daha derin postflop becerisi ister çünkü çoğu zaman 100BB oynarsın. Turnuvalar yükselen blind, short stack, ICM ve bubble baskısı ekler.

**Q. Turnuvalar cash game'den daha kârlı mı?**

A. Turnuvalar daha büyük tekil skorlar verebilir, ama varyansı çok daha yüksektir. Cash game genellikle zaman içinde daha istikrarlı sonuç verir.

**Q. Yeni başlayan cash game mi turnuva mı oynamalı?**

A. Çoğu yeni oyuncu düşük limit cash game veya çok küçük turnuvalarla başlamalıdır. Temelleri hızlı öğrenmek istiyorsan cash game daha temizdir.

**Q. ICM cash game'de önemli mi?**

A. Hayır. ICM turnuvalar içindir çünkü turnuva çipleri doğrudan para değildir. Cash game'de çipler paradır; kararlar daha doğrudan pot odds, equity, pozisyon ve range üzerinden verilir.

**Q. Re-entry turnuva cash game gibi mi?**

A. Hayır. Re-entry sadece belirli süre içinde yeniden girmene izin verir. Çipler hâlâ nakit değildir, blind'lar yükselir ve ileride ICM önem kazanır.

**Q. Cash game ve turnuva için kaç buy-in gerekir?**

A. Basit kural: cash game için 20-40 buy-in, turnuvalar için 50-100+ buy-in. Büyük MTT'ler daha fazlasını gerektirebilir.

---

## Hatırlanacak 3 şey

1. **Cash game çipleri paradır; turnuva çipleri hayatta kalma gücüdür.**
2. **Cash game temelleri daha hızlı öğretir; turnuvalar baskıyı daha sert test eder.**
3. **Bankroll ve zaman önemlidir.** Uzun seansları veya uzun downswing'leri kaldıramıyorsan cash game genelde daha iyi başlangıçtır.

Önce cash temellerini oturt, sonra yükselen blind'lar, ICM baskısı ve deep run kovalamaya hazır olduğunda turnuvaları ekle.
`.trim(),
};
