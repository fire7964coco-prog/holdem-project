import type { Post } from "../posts";

/**
 * GTO solver serisi ① (tr) — A♥7♦2♣ kuru as yüksek board. tr 회차 5 (2026-10-06).
 * 출처 = lib/posts-en/a-high-board-cbet.ts (EN updated 2026-10-02) · 수치 = EN과 동일, 구분자만 터키식.
 * 링크 치환: /en/solver → /tr/solver · holdem-continuation-bet → /tr/ 동일 slug ·
 *   holdem-position-play → /tr/blog/holdem-positions(앵커를 «postflop 발언 순서»로 좁힘) ·
 *   holdem-equity → tr에 없음 → 링크 제거, 문장은 «원리» 약속 없이 재서술.
 * 앱 라벨 = 라이브 ?lang=tr 축어(2026-10-09 S-049): Örnek spotlar · ⚡ Sonuçları gör · 스팟 이름 titleTr · Check/Bet/EQ/EV/EQR은 앱도 그대로.
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Top pair var, yine de check: A-7-2'de c-bet sıklıkları",
  seoTitle: "Top pair yaptın, solver check diyor — A-7-2'de c-bet",
  desc: "A-7-2'de top pair yaptın, bahis açmak istiyorsun. Solver big blind range'inin %98,2'sini check ediyor — c-bet sıklıkları ve equity'nin bunu neden açıklamadığı.",
  tldr: "Buton açıp big blind call ettikten sonra A♥7♦2♣ flop'unda big blind range'inin %98,2'sini check eder — top pair, iki çift ve set'ler dahil. Equity neredeyse başa baş, %45,1'e karşı %54,9; iki koltuğu ayıran şey equity gerçekleştirme (EQR): pozisyon dışında %84,0, pozisyonda %113,1.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-02",
  readTime: "9 dk",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-en.webp",
  imageAlt: "Kuru as yüksek flop için HoldemMaster GTO solver sonucu — big blind'ın 13x13 tablosu neredeyse tamamen check yeşili",
  keepImagesInBody: true,
  tags: [
    "c-bet sıklığı",
    "ne zaman c-bet",
    "kuru board",
    "range avantajı",
    "range avantajı poker",
    "gto solver",
    "equity realization",
  ],
  content: `
Flop **A♥ 7♦ 2♣** açılıyor, rainbow. Big blind'dasın, elinde A9 var — top pair. Önden bahis açmak (lead) bariz görünüyor. Değil.

Aşağıdaki bütün rakamlar HoldemMaster'ın [ücretsiz GTO solver'ından](/tr/solver) geliyor; 19 Ağustos 2026'da çalışma spotu çıktısından okundu ve aynı ekranı tek tıkla sen de açabilirsin.


:::stripe
Spot | BTN 2,5bb açar → BB call eder (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pot · stack | Pot 5,5bb · efektif stack 97,5bb
Sonuç | BB %98,2 check eder — range'in fiilen tamamı check
:::

> **Kısa cevap**
> Check et ve devam etmeyi planla. Bir range neredeyse her eliyle tek bir aksiyonu seçiyorsa — güçlü eller dahil (iki boyuttaki bahislerin toplamı sadece %1,9) — buna **range check** denir ve big blind'ın burada yaptığı tam olarak bu. Check etmek potu bırakmak değildir: butonun blöflerini potta tutar, c-bet geldiğinde de top pair hâlâ devam ettiğin bir eldir.

## Bu rakamlar hangi koşullarda çıktı?

Buton 2,5bb açar, big blind call eder, geri kalan herkes fold eder — yani iki oyuncu arkada 97,5bb ile 5,5bb'lik bir pota bakıyor. İki range de standart 100bb online oyunun yaklaşık hâlleri, flop A♥ 7♦ 2♣ rainbow ve solver'ın elinde iki bahis boyutu var: potun kabaca üçte biri ve dörtte üçü. Rake hesaba katılmadı. Bunlardan birini değiştirirsen sıklıklar da onunla birlikte değişir.

| Ayar | Değer |
|---|---|
| Preflop | BTN 2,5bb açar · BB call eder · geri kalan herkes fold |
| Range'ler | Standart 100bb online oyunun yaklaşık hâlleri |
| Flop | A♥ 7♦ 2♣, rainbow |
| Pot · stack | Pot 5,5bb · efektif stack 97,5bb |
| Bahis boyutları | Potun yaklaşık %33'ü ve %75'i |
| Rake | Modele dahil değil |
| Kontrol tarihi | 19 Ağustos 2026, çalışma spotu çıktısı |

Pot 5,5bb, çünkü butonun 2,5bb'lik açışına ve big blind'ın 2,5bb'lik call'una fold eden small blind'ın 0,5bb'lik ölü parası ekleniyor. Ekrandaki her şey big blind cinsinden — bahisler "Bet 1,8bb (%33 pot)" şeklinde, beklenen değer ise "EV (bb)" olarak görünür.

## Kuru as yüksek board'da iyi bir c-bet yüzdesi kaçtır?

Tamamen hangi koltukta oturduğuna bağlı. Bu kadar kuru bir board'da preflop raise yapan için cevap, heads-up ve pozisyondayken kabaca **küçük boyutla %70–100** — [continuation bet](/tr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") rehberi bunu board tipine göre tek tek açıyor. Call eden oyuncu içinse cevap **neredeyse sıfır**.

Aslına bakarsan call edenin c-bet'i diye bir şey yok — terim, preflop raise yapanın flop'ta bahis yapması demek; big blind'ın yaptığı bahsin adı **lead** (önden bahis). Ama elin bu tarafına düşen herkesin aradığı sayı bu, işte burada:

| Big blind'ın ilk aksiyonu | Sıklık | Kombo |
|---|---|---|
| Check | **%98,2** | 455,5 |
| Bet 1,8bb (potun %33'ü) | %1,0 | 4,5 |
| Bet 4,1bb (potun %75'i) | %0,9 | 3,9 |

464 kombonun yaklaşık sekizi bahis yapıyor — iki boyut birlikte, yuvarlanmış hâliyle %1,9. Pratikte bunu sıfıra yuvarlayabilirsin: **big blind bu board'da önden bahis açmaz.**

## Big blind top pair'i bile neden check ediyor?

Çünkü bu pot, bahisle değil check ile daha kolay kazanılıyor. Pozisyon dışında, tek çiftle, preflop'ta inisiyatifi almış oyuncuya önden bahis açmak, showdown'a seve seve gideceğin bir eli oynamanın en pahalı yolu.

Lead'i dezavantajlı kılan üç etken var. Birincisi **equity gerçekleştirme (EQR)** (equity'ni gerçekte ne kadar toplayabildiğin): aşağıdaki rakamlar big blind'ın equity'sinin %84,0'ını, butonun ise %113,1'ini topladığını gösteriyor. Pozisyon dışında daha büyük bir pot kurmak bu farkı ucuzlatmaz, pahalılaştırır. İkincisi, buton böyle bir flop'ta genelde sık c-bet yapar (bu çözüm o sıklığı vermiyor) — **check etmek onun blöflerini potta tutar**, lead ise onların fold edip pota daha fazla para koymadan çekilmesine izin verir. Üçüncüsü, big blind'ın range'i tavanlı (capped): içinde AA, AK ya da AQ yok; bu yüzden lead güçlü asların raise'ini davet eder ve big blind range'inin çoğu buna devam edemez — raise'e dayanabilen yalnızca 24 kombo var (77 ve 22 set'leri, A7 ve A2 iki çiftleri). (Bu çözümde raise düğümü hesaplanmadı.)

Lead'in yapmadığı şey ise daha iyi elleri fold ettirmek. Butonun açış range'inde A2'ye kadar bütün aslar, ayrıca underpair'ler ve yediler var; yani call edecek daha kötü el bol — sorun bu değil. Sorun, o eli kazanmak için kurduğun pot.

Bir de şu var: "as" tek bir el tipi değil. A9: AK, AQ, AJ ve AT karşısında kicker savaşını kaybeder, A7 ve A2 ise top pair bile değildir — bu board'da A7 ==A-A-7-7-2== olarak oynar, yani iki çift. Range check bunların hepsini tek bir aksiyonun arkasına saklar; rakibin hangisinin hangisi olduğunu ayıramaz.

**Bahis yapan eller de tahmin edeceğin eller değil.** Detay tablosunu açtığında, big blind'ın sahip olabileceği en güçlü aslar ara sıra küçük bir bahis deniyor: A♣J♣ küçük boyutla zamanın %14,5'inde bahis yapıyor, A♦J♦ %12,2, A♠J♠ %7,1, A♠T♠ %4,5. Sıklıklar küçük ama boş ellerden değil range'in tepesinden geliyor — check'in saf bir teslimiyet olmamasının sebebi de bu.

## Kuru board nedir, bu board neden raise yapanı destekler?

Kuru board, floş draw'ı olmayan ve kent draw'ı da neredeyse hiç olmayan board'dur — A♥ 7♦ 2♣ gibi, birbirine bağlanmayan üç farklı renkte üç kart. Neredeyse kimse bir şey kovalamıyor: **big blind range'inin %71,3'ünde hiç draw yok**, geri kalanın çoğu da backdoor floş draw'ı. Raise yapanı desteklemesinin sebebi şu: butonun açış range'inde AK ve AQ duruyor, big blind'ın call range'i ise AJ'de bitiyor — aslar masanın bir tarafına yığılmış ve ileride dengeyi değiştirecek draw'lar da yok.

![Kuru as yüksek board'da big blind ile butonun el kategorilerini yan yana yeşil ve altın çubuklarla karşılaştıran range dağılımı infografiği](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · kategori dağılımı — butonda daha çok top pair, big blind'da daha çok boş el")

Pozisyon dışı (OOP) ilk konuşan big blind; pozisyondaki (IP) ise buton.

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Üçlü — burada hep set | %1,3 | **%1,9** |
| İki çift | %3,9 | %3,9 |
| Top pair | %20,7 | **%25,9** |
| İkinci çift | %5,2 | %5,2 |
| Zayıf çift | %1,3 | %0,0 |
| Underpair | %9,1 | **%13,0** |
| Papaz yüksek | **%17,2** | %16,4 |
| Hazır el yok | **%41,4** | %33,7 |

Fark, her range'in içinde neye izin verildiğinden geliyor. Buton bütün asları açar — A2'den başlayıp AK dahil. Big blind'ın call range'i ise **AJ'de biter**: AA yok, AK yok, AQ yok, çünkü bunlar call değil 3-bet yapar. Board'da aynı as var ama top pair butonun tarafında 5,2 puan daha sık geliyor ve en güçlü asların hepsi masanın tek bir tarafında oturuyor.

Set'ler de el sayısıyla aynı hikâyeyi anlatıyor. Burada set yapan cep çiftleri AA, 77 ve 22; **big blind'da yalnızca 77 ve 22 var** — her biri 3 kombo, 464'te 6, ekrandaki %1,3 bu. Buton üç çiftin üçünü de tutuyor: 9 kombo, %1,9. Hesap solver'la birebir tutuyor.

## Equity neredeyse eşitse range avantajı ne demek?

Range avantajı, bir oyuncunun range'inin bütün olarak board'a diğerininkinden daha iyi oturması demek. A♥ 7♦ 2♣'de bu, ham equity'de pek görünmüyor — %45,1'e karşı %54,9, kimsenin felaket demeyeceği 9,8 puanlık bir fark. Asıl görüldüğü yer, iki tarafın o equity'den ne kadarını cebe koyabildiği; orada iki koltuk birbirine yakın bile değil.

| Metrik | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | %45,1 | %54,9 |
| EV (bb) | 2,09 | 3,41 |
| **Equity gerçekleştirme (EQR)** | **%84,0** | **%113,1** |

Equity gerçekleştirme, equity'nin gerçekten toplayabildiğin payıdır. Big blind'ın equity'si ==5,5 × %45,1 = 2,48bb== ediyor ama beklenen değeri 2,09bb — "sahip olduğu" payın yaklaşık altıda birini kaybediyor. Butonun %113,1'i ise **payından fazlasını** topladığı anlamına geliyor, çünkü en son o konuşuyor ve range'i baskı kuracak kadar güçlü. (Ekran değerleri yuvarlanmış olduğundan EQR değerini elle yeniden hesapladığında gösterilen değerin 0,3 puan yakınına düşersin.)

Pozisyon ve range avantajı burada birbirini katlıyor: buton hem daha büyük dilimi alıyor **hem de** onu daha iyi bir oranla kazanca çeviriyor. Bu, ham equity'ye tek başına bakmanın neden yetmediğini de gösteriyor; postflop'ta en son kimin konuştuğunu koltuk koltuk görmek istersen [poker pozisyonları](/tr/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") yazısına bak.

## Buton kuru as yüksek flop'ta ne zaman c-bet yapmalı?

Neredeyse her zaman, küçük — **fold eden rakiplere karşı.** Big blind'ın %41,4'ünde hazır el yok, %71,3'ünde draw yok; yani fold'lar kolay geliyor, kalan eller de nadiren gelişiyor. Bu, küçük boyutun ders kitabı örneği; burada tercih edeceğin bahsin %33'lük (1,8bb) olmasının sebebi de bu.

Her şeyi call eden bir masaya karşı "her şeyle küçük bahis" bedava olmaktan çıkar: hiçbir şey fold etmez ve pot istemeyen ellerle pot büyütürsün. Orada ayar, daha az deneme ve daha çok value.

Bu pratik kural tek bir şartla genelleşir: **range avantajı olan — ama belirgin bir nut avantajı olmayan — taraf küçük ve sık bahis yapar.** Bir oyuncunun nut'lara da sahip olduğu board'larda ise boyut büyür. Bunun board tiplerine göre nasıl değiştiği [continuation bet stratejisinde](/tr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") anlatılıyor.

:::note[Çalışma spotu flop'un yalnızca ilk aksiyonunu önceden çözüyor; bu yüzden butonun kesin c-bet sıklığı bu sayfadaki rakamlar arasında yok. Onu görmek için "Solve this spot yourself" seçeneğini açıp ağacı sonuna kadar çalıştır.]:::

## Masada ne değişir?

- **Heads-up bir raise'i call ettiysen kuru as yüksek flop'ta önden bahis fikrini bırak.** Top pair dahil. Lead, sonra pozisyon dışında tek çiftle oynamak zorunda kalacağın bir pot kurar — yukarıdaki %84'e karşı %113 farkı tam olarak bu. (Limp'li potlar ve blind'a karşı blind farklı bir yapı; bu spot onları kapsamıyor.)
- **Check, check-fold demek değil.** Rakamın en çok yanlış okunduğu yer burası. Butonun küçük c-bet'ine karşı big blind çok geniş devam eder — bütün aslar, yedilerin çoğu, underpair'ler, backdoor'u olan papaz yüksekler. **A9 bir check-call'dır**, genelde turn'de de. Doğal check-raise adayları 77, 22, A7 ve A2, artı birkaç backdoor blöf — gerçi bu çözüm big blind'ın c-bet'e cevabını kapsamıyor.
- **Butondayken fold eden rakiplere karşı geniş bir range'le küçük bahis yap.** Asla fold etmeyen bir oyuncuya karşı iki yönde ayar yap: daha az blöf, çünkü ne kadar bahis yaparsan yap fold etmeyecek — özellikle ikinci ve üçüncü barrel'in saf kayıp olduğu turn ve river'da — ve **top pair ya da daha iyisiyle** daha büyük value bet. Zayıf kicker'lı A9 boyut büyütülecek bir el değil; üç kez ateşlemediğin bir el.
- **Dengeli bir rakibe karşı buradaki check zayıflık değil** — check range'inin içinde set'ler (77, 22) ve iki çiftler (A7, A2) var; fazla bastırırsan check-raise'e çarparsın. Düşük limitlerde çoğu zaman tersi geçerli: birçok oyuncu güçlü ellerini düpedüz önden bahisle oynar, yani check'leri gerçekten zayıftır. Value bet yapmaya devam et; check-raise'i yavaşlama sebebi değil, ara sıra ödenen bir bedel olarak gör.

:::readnext[Okumaya devam et]
/tr/blog/holdem-continuation-bet | C-bet nedir? Her flop'a c-bet neden çip kaybettirir? | /images/holdem-continuation-bet-hero.webp
/tr/blog/holdem-positions | Poker pozisyonları: UTG'den butona | /images/holdem-positions-hero.webp
:::

## Kendin kontrol et

[Ücretsiz GTO solver'ı](/tr/solver) aç, **Örnek spotlar → Kuru A-high board → [⚡ Sonuçları gör]** yolunu izle; bu ekranın aynısı beklemeden açılır. OOP ile IP arasında oyuncu seçiciyi değiştirerek iki range'i karşılaştır, bahis yapan elleri bulmak için detay tablosunu istediğin sütuna göre sırala. Çalışma spotları **yalnızca flop'un ilk aksiyonunu** önceden çözer — turn ve river'a tıklayarak ilerlemek ya da bir range'i değiştirip sıklıkların nasıl oynadığını izlemek için **Solve this spot yourself** ile ağacı çalıştır.

Aynı spotu okumak yerine çalışmak istersen kenar çubuğundan **GTO Trainer**'ı aç: gerçek range'den sana bir el dağıtır, aksiyonunu seçersin ve o seçimin sana kaç big blind'a mal olduğunu söyler. Ücretsiz; kurulum yok, hesap yok.

## Sıkça sorulan sorular

**Q. A-7-2 board'unda A7 top pair mi?**

A. Hayır. Board senin 7'ni eşliyor, yani A7 ==A-A-7-7-2== yapar — iki çift. Gerçek top pair, kicker'ı board'a değmeyen bir astır; A9 ya da A8 gibi. İki çift (A7 ve A2) 18 kombo, big blind range'inin %3,9'u, ve bu eller de check ediyor.

**Q. %98,2 check, kelimenin tam anlamıyla hiç bahis yapmamam mı demek?**

A. Bu board dokusunda varsayılan olarak evet. Neredeyse hiç c-bet yapmayan bir rakibe karşı araya lead karıştırabilirsin — ama **yalnızca value ellerle**. Top pair ve yediler, o oyuncunun senin için asla kurmayacağı bir potu kurar; boş ellerin ise yine check etmeli, çünkü pasif bir rakip sana blöften daha değerli olan bedava kartlar ve bedava showdown'lar verir.

**Q. Islak board ile kuru board arasındaki fark ne?**

A. Kuru board'da floş draw'ı yoktur, kent draw'ı da azdır; yani flop'tan sonraki street'lerde ellerin sıralaması pek değişmez. Islak board — iki kupalı 9-8-7 gibi bağlantılı, iki renkli kartlar — iki oyuncuya da draw verir. Range'ler geniş kalır, equity'ler sürekli kayar; bu yüzden bahisler büyür, check-raise'ler sıklaşır.

**Q. Equity gerçekleştirme %100'ün üstüne çıkabilir mi?**

A. Evet. Gerçekte kazandığının, equity'ne göre pottaki payına oranıdır; pozisyon ve range gücü onu %100'ün üstüne iter. Buradaki buton %113,1 gerçekleştiriyor, yani ham %54,9'luk equity'sinin işaret ettiğinden fazlasını topluyor.

**Q. Bu rakamlar her limitte geçerli mi?**

A. Koşulların tuttuğu yerde onları başlangıç noktası olarak kullan: heads-up, 100bb, standart açış ve call range'leri, rake yok. Stack derinliğini, range'leri ya da boyutu değiştirirsen sıklıklar oynar. Belirgin şekilde sapan rakiplere karşı — hiç fold etmeyen, hiç c-bet yapmayan — sen de sap, çünkü bu rakamlar karşındaki oyuncunun da iyi oynadığını varsayıyor.
`.trim(),
};

export default POST;
