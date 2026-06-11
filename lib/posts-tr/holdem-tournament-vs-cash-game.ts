import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament-vs-cash-game",
  title: "Poker turnuvası mı cash game mi? Yeni başlayanlar için seçim",
  seoTitle: "Fişlerin her zaman para değildir — Turnuva mı cash game mi?",
  desc: "Cash game ve poker turnuvası aynı Texas Hold'em gibi görünür; ama fiş değeri, blind yapısı, bankroll, varyans ve ICM baskısı tamamen farklıdır. Yeni başlayanlar için net karşılaştırma.",
  tldr: "Cash game'de fişler gerçek parayı temsil eder ve blind'lar genellikle sabittir. Turnuvada fişler turnuva hayatındır; blind'lar yükselir ve kazanç, bitirdiğin sıraya bağlıdır.",
  category: "토너먼트",
  date: "2026-06-11",
  updated: "2026-06-11",
  hideSummaryImageSlot: true,
  readTime: "16 dk",
  emoji: "🏆",
  tags: [
    "poker turnuvası mı cash game mi",
    "cash game poker",
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

Dışarıdan bakınca aynı oyun gibi görünür. Yine iki kapalı kart alırsın, masaya beş ortak kart açılır ve preflop'tan river'a kadar dört bahis turu oynanır. Ama stratejik olarak neredeyse iki ayrı dünyadır. Cash game'de fişlerin paradır. Turnuvada fişlerin turnuva hayatındır.

Bu rehber, ==poker turnuvası ile cash game farkını== yeni başlayanların gerçekten ihtiyaç duyduğu şekilde anlatır: fiş değeri, blind yapısı, zaman, varyans, bankroll, ICM, stack derinliği ve hangi formatla başlaman gerektiği.

![Turnuva ve cash game seçimlerinin fiş değerini ve stratejiyi değiştirdiği bir Texas Hold'em masası](/images/tournament-table-action.webp "Poker turnuvası ve cash game karşılaştırması")

### 15 saniyelik cevap

- **Cash game:** fişler gerçek parayı temsil eder, blind'lar sabit kalır ve istediğin zaman masadan kalkabilirsin.
- **Turnuva:** tek bir buy-in ödersin, turnuva fişi alırsın ve elenene ya da kazanana kadar oynarsın.
- **Cash game temelleri daha hızlı öğretir** çünkü stack'ler daha derindir ve hataların geri bildirimi daha nettir.
- **Turnuvalar daha büyük skor fırsatı verir**, ama varyans daha yüksek, seanslar daha uzun ve ICM baskısı daha serttir.
- **Çoğu yeni oyuncu için en temiz başlangıç cash game'dir.** Temel kararlar otomatikleşince küçük turnuvaları eklemek daha sağlıklıdır.

---

## Cash game vs turnuva: temel fark

En kısa haliyle şöyle:

**Cash game, masadaki gerçek parayla kârlı kararlar vermektir. Turnuva pokeri, ödüle ulaşacak kadar uzun süre hayatta kalmaktır.**

Cash game'de $200 ile oturursan, önündeki fişler $200'ü temsil eder. Stack'in $450 olursa $450 ile kalkabilirsin. $120'ye düşersen elinde kalan para budur. Her fişin doğrudan para değeri vardır.

Turnuvada ise $100 buy-in ödeyip 20.000 fiş alabilirsin. Bu fişler $20.000 etmez ve turnuva ortasında kasaya gidip bozduramazsın. Değerleri; hayatta kalmana, baskı kurmana ve ödül yapısında daha yukarı çıkmana yardım etmelerinden gelir.

Masada bu fark şöyle hissedilir: $1/$2 cash game'de river'da tek çiftle $60 görürsen, şu anda $60 riske atıyorsun. Kötü bir call ise masadan kalkabilir, yeniden yükleme yapabilir ya da başka gün oynayabilirsin. $50'lık bir turnuvada bubble'a yakın 18BB ile all-in görmek ise tüm etkinliğini bitirebilir.

| Başlık | Cash game | Turnuva |
|------|------|------|
| Fiş değeri | Gerçek para | Turnuva equity'si |
| Giriş | Seçtiğin miktarla buy-in | Sabit buy-in |
| Çıkış | İstediğin zaman | Elenene ya da bitirene kadar |
| Blind | Genellikle sabit | Zamanla yükselir |
| Ana hedef | Uzun vadeli EV'yi artırmak | Hayatta kalıp ödül basamaklarını çıkmak |
| Strateji odağı | Deep-stack postflop oyun | Stack baskısı, ICM, bubble oyunu |

---

## Turnuva fişleri nakit para değildir

Cash game'de stack'ini ikiye katlamak paranı da ikiye katlar. $200 ile başlayıp $200 kazanırsan artık $400'ün vardır. Bu yüzden cash game kararları doğrudan Chip EV üzerinden düşünülebilir: *Bu call kârlı mı? Bu bahis uzun vadede para kazandırıyor mu?*

Turnuvada fiş stack'ini ikiye katlamak **gerçek para equity'ni** ikiye katlamaz. Ödemeler, o anda kaç fişin olduğuna değil, turnuvayı kaçıncı bitirdiğine göre yapılır.

10 kişilik bir turnuva düşün. Herkes $100 ödüyor.

| Sıra | Ödül |
|------|------|
| 1. | $500 |
| 2. | $300 |
| 3. | $200 |
| 4.-10. | $0 |

Toplam fişlerin %10'undan %20'sine çıkarsan para kazanma şansın artar, ama ödül equity'n basitçe ikiye katlanmaz. Buna karşılık bubble'da tüm fişlerini kaybedersen turnuva equity'n anında sıfıra iner.

![Turnuva fişleri ICM altında ödül parasına bire bir oranla dönüşmez](/images/icm-chips-not-money-real.webp "Pokerde turnuva fiş değeri ve ICM")

---

## Sabit blind mı, yükselen blind mı?

$1/$2 cash game'de blind'lar $1/$2 kalır. Bir saat sonra da aynı, üç saat sonra da aynı. Daha iyi spot bekleyebilir, gerekirse yeniden yükleme yapabilir ve deep stack oynamaya devam edebilirsin.

Turnuvada blind'lar seviyelere göre yükselir. Başta 100BB olan stack, tek bir el kaybetmeden ilerleyen saatlerde 25BB olabilir. Sonra 12BB'ye düşebilir. Bir noktadan sonra beklemek bile pahalı hale gelir.

| Aşama | Cash game | Turnuva |
|------|------|------|
| Erken | Deep stack sık kalır | Çoğu oyuncu deep başlar |
| Orta | Blind baskısı sabittir | Ortalama stack kısalır |
| Geç | Yeniden yükleme veya kalkma mümkün | Short-stack all-in'ler artar |
| Baskı | Daha düşük ve sabit | Her seviyede yükselir |

Bu yüzden turnuvalarda "sadece premium el bekle" tavsiyesi her zaman yetmez. Yükselen blind'lar seni steal, defend, reshove ve kontrollü risk almaya zorlar.

---

## Zaman ve çıkış özgürlüğü

Cash game esnektir. 30 dakika oynayabilir, iki saat oturabilir ya da masa kötüleşince kalkabilirsin. Yorgunsan, tilt olduysan veya zamanın azsa kendini masadan kalkarak koruyabilirsin.

Turnuva farklıdır. Kayıt olduktan sonra ne zaman biteceğini tam bilemezsin. Elenene, paraya girene, final masasına ulaşana ya da kazanana kadar oynarsın. Küçük bir canlı etkinlik bile saatler sürebilir. Büyük alanlı bir MTT tüm günü alabilir.

| Oyuncu durumu | Daha uygun format |
|------|------|
| Boş zamanın belirsiz | Cash game |
| Kısa seans istiyorsun | Cash game |
| Saatlerce odaklanabilirsin | Turnuva |
| Sıralama, baskı ve kupa seviyorsun | Turnuva |
| Aniden gitmen gerekebilir | Cash game |

---

## Kâr yapısı ve varyans

Cash game sonuçları genellikle **bb/100** veya saatlik kazançla ölçülür. Bir oyuncu büyük örneklemde 100 elde 5 büyük kör kazanıyorsa, bu istikrarlı bir edge'dir. Geri bildirim turnuva sonuçlarından daha hızlı ve temizdir.

Turnuva sonuçları **ROI**, paraya girme oranı, final masa sayısı ve büyük skorlarla ölçülür. Kazanan bir turnuva oyuncusu 20 ya da 30 etkinlik para almadan geçirebilir, sonra tek bir deep run her şeyi karşılayabilir.

| Ölçüt | Cash game | Turnuva |
|------|------|------|
| Sonuç birimi | bb/100 veya saatlik | ROI ve bitiş sırası |
| Varyans | Orta | Çok yüksek |
| Büyük ödeme şansı | Daha düşük | Daha yüksek |
| Skill geri bildirimi | Daha hızlı | Daha yavaş |
| Mental zorluk | Seans seans | Uzun cash'siz dönemler |

Tuzak, varyansı beceri sanmaktır. Tek bir büyük turnuva skoru seni crusher yapmaz. Kötü bir cash seansı da oynayamadığını göstermez. İki formatta da örneklem gerekir.

---

## Bankroll yönetimi

Bankroll yönetimi iki formatta da önemlidir, ama turnuvalarda dalgalanma daha sert olduğu için genelde daha büyük tampon gerekir.

Cash game için basit yeni başlayan kuralı, oynadığın limitte yaklaşık **20-40 buy-in** bulundurmaktır. Normal buy-in'in $200 ise, daha güvenli bir poker bankroll'u için kabaca $4.000-$8.000 gerekir.

Turnuvalarda birçok oyuncu **50-100+ buy-in** kullanır; büyük alanlı MTT'ler daha fazlasını gerektirebilir. $50'lık turnuva, $200 cash game buy-in'inden ucuz görünebilir; ama varyansı çok daha sert olabilir.

| Format | Yeni başlayan bankroll kuralı | Neden |
|------|------|------|
| Cash game | 20-40 buy-in | Daha düşük varyans, yeniden yükleme var |
| Küçük Sit & Go | 40-60 buy-in | Ödeme varyansı daha yüksek |
| Büyük MTT | 100+ buy-in | Uzun cash'siz dönemler normal |

Bankroll sadece para meselesi değildir. Karar kaliteni korur. Under-rolled olduğunda her all-in kişisel gelir ve iyi stratejinin yerini korku alır.

---

## ICM: cash game'de olmayan turnuva kavramı

Cash game ile turnuva arasındaki en büyük stratejik ayrım ==ICM== kavramıdır.

ICM, **Independent Chip Model** anlamına gelir. Stack boyutları, kalan oyuncular ve ödül yapısına göre turnuva stack'inin gerçek para değerini tahmin eder. Cash game'de ICM gerekmez çünkü fişler zaten paradır.

ICM en çok bubble ve final table aşamalarında önemlidir. Bubble'da orta stack'e sahip olduğunu düşün. Bir oyuncu all-in yaptı, sende AKo var. Cash game'de pot odds ve equity uygunsa call yapabilirsin. Turnuvada ise kaybetmek $0 ile elenmek anlamına gelebilir; kazanmak ise ödül equity'ni ikiye katlamaz.

| Karar faktörü | Cash game | Turnuva |
|------|------|------|
| Call mantığı | Pot odds + equity | Pot odds + equity + ICM |
| Stack kaybetmek | Bir buy-in kaybetmek | Elenmek |
| Güçlü ellerin değeri | Daha sabit | Ödül baskısına göre değişir |
| Bubble baskısı | Yok | Çok yüksek |

![Bubble aşamasındaki turnuva masasında ICM baskısı, all-in call kararını cash game'e göre çok daha zor hale getirir](/images/holdem-bubble-table.webp "Turnuva bubble baskısı ve ICM kararı")

---

## Deep stack vs short stack push/fold

Cash game genellikle deep-stack becerisini ödüllendirir. Sık sık 100BB civarında oynarsın; flop, turn ve river kararları çok önemlidir. Value bet, blöf, board texture, pozisyon ve rakip range'lerini anlaman gerekir.

Turnuvalar deep başlar ama çoğu zaman short-stack pokerine dönüşür. 25BB, 15BB veya 10BB seviyelerinde preflop kararları öne çıkar. Üç street planlamak yerine open, reshove, call off veya fold kararına gelirsin.

| Stack derinliği | Daha yaygın | Ana beceri |
|------|------|------|
| 100BB+ | Cash game | Postflop oyun ve value bet |
| 40-60BB | Erken/orta turnuva | Open range ve 3-bet cevabı |
| 15-25BB | Orta/geç turnuva | Resteal ve shove baskısı |
| 10BB veya az | Geç turnuva | Push/fold disiplini |

---

## Yeni başlayan önce hangisini oynamalı?

Çoğu yeni oyuncu için **cash game daha iyi ilk sınıftır**.

Cash game kolay olduğu için değil. Kolay değildir. Ama daha temiz tekrar verir. Blind'lar aynı kalır, stack'ler daha derindir ve call, raise veya value bet kararını ICM, pay jump ve blind baskısıyla aynı anda çözmeden inceleyebilirsin.

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

Bir poker odasında ya da yerel etkinlikte oturmadan önce formatı sor. Aynı masa, aynı fişler ve aynı kartlar; yapıya göre tamamen farklı kararlar doğurabilir.

| Soru | Neden önemli? |
|------|------|
| Bu cash game mi, turnuva mı? | Fiş değeri ve strateji değişir |
| Blind veya blind seviyeleri nedir? | Stack baskısını belirler |
| Re-entry, rebuy veya add-on var mı? | Toplam maliyet ve risk değişir |
| Ödül yapısı nasıl? | Bubble ve ICM kararlarını etkiler |
| Etkinlik genelde ne kadar sürer? | Zaman baskısı hatalarını önler |

Yapıyı açıklayamıyorsan henüz buy-in yapma. Önce sor, sonra oyna.

---

## FAQ

**Q. Poker turnuvaları cash game'den daha mı zor?**

A. Farklı şekilde zordur. Cash game daha derin postflop becerisi ister çünkü çoğu zaman 100BB oynarsın. Turnuvalar yükselen blind, short stack, ICM ve bubble baskısı ekler.

**Q. Turnuvalar cash game'den daha kârlı mı?**

A. Turnuvalar daha büyük tekil skorlar verebilir, ama varyansı çok daha yüksektir. Cash game genellikle zaman içinde daha istikrarlı sonuç verir.

**Q. Yeni başlayan cash game mi turnuva mı oynamalı?**

A. Çoğu yeni oyuncu düşük limit cash game veya çok küçük turnuvalarla başlamalıdır. Temelleri hızlı öğrenmek istiyorsan cash game daha temizdir.

**Q. ICM cash game'de önemli mi?**

A. Hayır. ICM turnuvalar içindir çünkü turnuva fişleri doğrudan para değildir. Cash game'de fişler paradır; kararlar daha doğrudan pot odds, equity, pozisyon ve range üzerinden verilir.

**Q. Re-entry turnuva cash game gibi mi?**

A. Hayır. Re-entry sadece belirli süre içinde yeniden girmene izin verir. Fişler hâlâ nakit değildir, blind'lar yükselir ve ileride ICM önem kazanır.

**Q. Cash game ve turnuva için kaç buy-in gerekir?**

A. Basit kural: cash game için 20-40 buy-in, turnuvalar için 50-100+ buy-in. Büyük MTT'ler daha fazlasını gerektirebilir.

---

## Hatırlanacak 3 şey

1. **Cash game fişleri paradır; turnuva fişleri hayatta kalma gücüdür.**
2. **Cash game temelleri daha hızlı öğretir; turnuvalar baskıyı daha sert test eder.**
3. **Bankroll ve zaman önemlidir.** Uzun seansları veya uzun downswings'i kaldıramıyorsan cash game genelde daha iyi başlangıçtır.

Önce cash temellerini oturt, sonra yükselen blind'lar, ICM baskısı ve deep run kovalamaya hazır olduğunda turnuvaları ekle.
`.trim(),
};
