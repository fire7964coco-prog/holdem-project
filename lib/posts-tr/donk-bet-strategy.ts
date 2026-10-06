import type { Post } from "../posts";

/**
 * GTO solver serisi ④ tr — 9♥8♥7♣ orta bağlantılı iki renkli flop (2026-10-06, tr 회차 5).
 * 출처: lib/posts-en/donk-bet-strategy.ts (EN updated 2026-09-26). 수치·카드는 EN과 동일, 구분자만 터키식.
 * 링크 치환: /en/* → /tr/* · k-high-board-cbet·low-board-check-raise = tr 없음 → 링크만 제거(문장 유지)
 *   · holdem-drawing-odds → /tr/blog/holdem-probability (out 세기 절이 있다)
 *   · readnext k-high 카드 → monotone-board-strategy 카드로 교체(본문이 «다음 스팟»으로 가리키는 글).
 * 솔버 앱 라벨(Study Spots·Check·Bet·EQR 등)은 tr UI 미라이브라 영어 유지.
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "Donk bet'in doğru olduğu flop: 9-8-7",
  seoTitle: "Donk bet ne zaman doğru? Pokerde 9-8-7 flop'unda lead",
  desc: "Pokerde donk bet acemi hatası sayılır. 9-8-7 flop'unda solver %23,7 lead yapıyor — lead'i doğru kılan board koşulu ve bahis boyutu bu yazıda.",
  tldr: "Buton açıp big blind call ettikten sonra 9♥8♥7♣ flop'unda big blind %76,2 check ediyor, %23,7 lead yapıyor — bu seride lead'in yuvarlamadan kalan bir kırıntı değil, gerçek bir strateji olarak çıktığı ilk spot. Range avantajı el değiştirmedi: equity hâlâ %48,5'e %51,5. Değişen şey aradaki fark ve iki tarafın güçlü ellerinin nerede durduğu.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-09-26",
  readTime: "9 dk",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-en.webp",
  imageAlt: "Orta bağlantılı iki renkli flop için HoldemMaster GTO solver sonucu: big blind'ın ızgarasında yeşil check'lerin arasına turuncu ve pembe bahisler karışmış",
  keepImagesInBody: true,
  tags: [
    "donk bet",
    "donk bet nedir",
    "pokerde donk bet",
    "ne zaman c-bet yapılmaz",
    "lead bet",
    "gto solver",
    "orta bağlantılı board",
    "range avantajı",
  ],
  content: `
Pokerde ilk öğrendiğin kurallardan biri: **raise yapana check et.** Preflop'ta saldıran oyuncu flop'ta ilk bahsi yapma hakkını kazanır.

Son üç spot bu kuralın en uslu hâliydi. [As yüksek](/tr/blog/a-high-board-cbet), papaz yüksek ve [broadway](/tr/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp") flop'larında big blind'ın lead oranı her seferinde %2'nin altındaydı — K-8-3 ve Q-J-T'de %0,2 ya da daha azdı, pratikte sıfır.

**9♥ 8♥ 7♣** flop'unda bu oran **%23,7**. Kuralın kırıldığı yer burası.

Preflop'ta sadece call etmiş oyuncunun yaptığı bahse **donk bet** denir — "donkey"den, yani eşekten geliyor; bu da uzun süre nasıl görüldüğünü yeterince anlatıyor. Buna **lead** de denir. Solver'lar onu belirli board'larda stratejiye dahil eder ve çalışma setindeki en net örnek bu flop.

Aşağıdaki bütün rakamlar HoldemMaster'ın [ücretsiz GTO solver'ından](/tr/solver) geliyor; 19 Ağustos 2026'da çalışma spotu çıktısından okundu.


:::stripe
Spot | BTN 2,5bb açar → BB call eder (heads-up)
Flop | 9♥ 8♥ 7♣ (iki renkli — iki kupa)
Pot · stack | Pot 5,5bb · efektif stack 97,5bb
Sonuç | BB %23,7 lead yapar — bu serideki ilk gerçek lead
:::

> **Kısa cevap**
> 9♥8♥7♣'da big blind **%76,2** check eder, iki boyuta yayılmış **%23,7** lead yapar (ikisi de yuvarlanmış). Ama **range avantajı el değiştirmedi** — equity hâlâ %48,5'e %51,5, butonun lehine. Değişen şey farkın büyüklüğü ve güçlü ellerin nerede oturduğu: big blind'ın gücü tamamlanmış kentlerde, butonunki ise bu board'un tehdit ettiği overpair'lerde.

## Bu rakamlar hangi koşullarda çıktı?

Buton 2,5bb'ye açar, big blind call eder, herkes fold eder — iki oyuncu, 5,5bb pot, arkada 97,5bb. Range'ler standart 100bb online oyunun yaklaşık hâlleri, flop iki kupalı 9♥ 8♥ 7♣ ve solver'ın elinde potun kabaca üçte biri ile dörtte üçü olmak üzere iki bahis boyutu var. Rake modele dahil değil; rakamlar 19 Ağustos 2026'da okundu.

| Ayar | Değer |
|---|---|
| Preflop | BTN 2,5bb açar · BB call eder · diğer herkes fold |
| Range'ler | Standart 100bb online oyunun yaklaşık hâlleri |
| Flop | 9♥ 8♥ 7♣, iki renkli (iki kupa) |
| Pot · stack | Pot 5,5bb · efektif stack 97,5bb |
| Bahis boyutları | Potun yaklaşık %33'ü ve %75'i |
| Rake | Modele dahil değil |
| Kontrol | 19 Ağustos 2026, çalışma spotu çıktısı |

## Big blind 9-8-7'de ne sıklıkla donk bet yapar?

**%23,7** — ve bunun üçte ikisinden fazlası küçük boyutla gider.

| Big blind'ın ilk hamlesi | Sıklık | Kombo |
|---|---|---|
| Check | **%76,2** | 352,0 |
| Bet 1,8bb (potun %33'ü) | **%16,8** | 77,8 |
| Bet 4,1bb (potun %75'i) | %6,9 | 32,2 |

Dört flop'u yan yana koyunca sıçrama kendini gösteriyor.

| Flop | BB lead |
|---|---|
| A-7-2 (kuru) | %1,9 |
| K-8-3 (kuru) | %0,2 |
| Q-J-T (bağlantılı, iki renkli) | %0,1 |
| **9-8-7 (orta kartlarla bağlantılı, iki renkli)** | **%23,7** |

**%2'nin altından %23,7'ye — on kattan fazla bir sıçrama.** Buna "arada bir karıştırmak" denmez; bu başka bir strateji.

## İlk üç flop'a göre ne değişti?

**Big blind ilk kez en üst kategorilerden birinde önde.** Tamamlanmış kentlerde %5,2'ye %4,2.

Kombinasyonları sayınca sebep tam olarak ortaya çıkıyor. Burada kent yapan üç el var: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)== ve ==65 (9-8-7-6-5)==.

| Kent yapan el | BB (call range'i) | BTN (açış range'i) |
|---|---|---|
| JT | ✅ suited ve offsuit (16 kombo) | ✅ suited ve offsuit (16 kombo) |
| T6 | ✅ **T6s (4 kombo)** | ❌ açış range'inin dışında |
| 65 | ✅ 65s (4 kombo) | ✅ 65s (4 kombo) |
| **Toplam** | **24 kombo = %5,2** | **20 kombo = %4,2** |

**Bütün fark T6s — dört kombo.** Bu solver'da butonun range'i T7s'ten başlıyor, yani T6 suited hiç gelmiyor; big blind ise 2,5bb'nin 1bb'si zaten ortada olduğu için onu ucuza savunuyor. O tek hücre, **tamamlanmış kentlerin** çoğunun kimde olduğunu belirliyor — nuts'ın kimde olduğunu değil, o ayrı bir soru: buradaki en iyi el J-T ve iki oyuncuda da 16 kombosunun hepsi var.

Overpair'lerde ise durum tersine dönüyor: üstünlük butonda.

| Overpair (9'un üstünde pocket pair) | BB | BTN |
|---|---|---|
| TT | ✅ 6 kombo | ✅ 6 kombo |
| JJ · QQ · KK · AA | ❌ hepsi preflop'ta 3-bet | ✅ 24 kombo |
| **Toplam** | **6 kombo = %1,3** | **30 kombo = %6,4** |

## Yani bu flop big blind'ın lehine mi?

**Hayır. Equity hâlâ %48,5'e %51,5.** Bunu açıkça söylemek lazım, çünkü çıkarılması en kolay yanlış sonuç bu: lead'in ortaya çıkması range avantajının el değiştirdiği anlamına gelmez.

![Orta bağlantılı iki renkli board'da big blind ile butonun el kategorilerini karşılaştıran range dağılımı infografiği](/images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · kategori dağılımı — kentler big blind'ı, overpair ve as yüksek eller butonu destekliyor")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Kent | **%5,2** | %4,2 |
| Set (Üçlü) | %1,9 | %1,9 |
| İki Çift | %2,8 | %2,8 |
| Overpair | %1,3 | **%6,4** |
| Top pair (9) | **%13,6** | %12,7 |
| İkinci çift (8) | **%8,4** | %7,6 |
| Üçüncü çift ya da daha zayıfı | **%6,5** | %6,4 |
| Underpair | **%6,5** | %6,4 |
| As yüksek | %24,2 | **%30,5** |
| Papaz yüksek | **%13,9** | %11,9 |
| Hazır el yok | **%15,6** | %9,3 |

(Sütunların toplamı 99,9 ve 100,1 — yuvarlamadan.)

**Butonun lehine olan sadece iki satır var**: overpair'ler, %6,4'e %1,3, ve as yüksek eller, %30,5'e %24,2. İki Çift %2,8'de, set %1,9'da birebir eşit; geri kalan her satır big blind'ın.

Draw'ları da yanına koyup okumak gerekiyor.

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Kombo draw (kent + floş) | **%4,5** | %3,6 |
| Floş draw'ı | **%3,2** | %2,3 |
| Açık uçlu kent draw'ı | **%26,2** | %23,7 |
| Gutshot | **%21,6** | %20,6 |
| Backdoor floş | %14,1 | **%17,6** |
| Draw yok | %30,3 | **%32,2** |

**Sadece gerçek draw'ları sayınca — backdoor'lar hariç — big blind'da %55,5, butonda %50,2.** Bu board'da yalnızca hazır eller değil, hâlâ gelişen eller de big blind'a doğru eğiliyor.

Para hesaba katıldıktan sonra da tablo aynı. Equity gerçekleştirme hâlâ butondan yana, sadece şimdiye kadarki her yerden daha az farkla.

| Ölçüt | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | %48,5 | %51,5 |
| EV (bb) | 2,48 | 3,02 |
| **Equity gerçekleştirme (EQR)** | **%93,2** | **%106,4** |

İlk üç flop'taki %84,0, %80,7 ve %77,9'un ardından big blind'ın equity gerçekleştirme oranı **burada geri dönüyor** — %93,2, payının tamamını korumaya en çok yaklaştığı yer. Asıl sinyal bu: lead, pozisyon dışındaki oyuncu equity'sinin değerini nihayet elinde tutabildiğinde ortaya çıkıyor.

Bunun olması için iki şey değişti.

**Birincisi, fark daraldı.** 3,0 puanlık equity farkı şimdiye kadarki dört flop'un en küçüğü — A-7-2'de 9,8 puandı, Q-J-T'de 6,6.

**İkincisi, butonun gücü kırılgan yerlerde duruyor.** Önde olduğu iki kategori overpair'ler (%6,4) ve as yüksek eller (%30,5) — ve bunlardan biri aslında güç bile değil. O as yüksek ellerin çoğunun burada çifti yok; draw'ı olan yerlerde de big blind'ın draw'ı var, yani draw'lar kimseyi kayırmıyor, birbirini götürüyor. Overpair'lerin kırılganlığının sebebi bir sonraki bölümde. Big blind'ın üstünlüğü ise **zaten tamamlanmış** ellerde.

Lead'i doğru yapan şey tek başına ortalama güç değil; **en güçlü ellerin daha çoğunu tutuyor olman ve rakibinin rahatça bahis yapamaması.** Burada iki koşul da sağlanmış görünüyor: kentler big blind'da daha fazla (24 komboya 20, nut J-T ise iki tarafta da 16) ve range'inin %30,5'i as yüksek olan buton geniş bahis yapmakta zorlanır — bu, range dağılımından çıkan bir okuma, çünkü butonun kendi bahis düğümü bu çözümde yok. Lead'in aldığı şey tam da o sahipsiz alan.

## Butonun overpair'leri neden kırılgan?

**Çünkü gelecek kartların neredeyse yarısı turn'ü onlar için kötüleştiriyor.**

Diyelim elinde QQ var. Şu an en iyi ele yakınsın. Görünmeyen 47 kartın içinde:

- **T, J, 6, 5 — 16 kart.** Bunlardan herhangi biri, rakibinin elindeki tek bir kartla **kenti tamamlar.** Bir J gelirse board J-9-8-7 olur ve **elinde bir on olan herkes zaten J-T-9-8-7'ye sahiptir.**
- **Henüz sayılmamış kalan kupalar — 7 kart.** Floş tamamlanır.

Toplam **47 kartın 23'ü, yaklaşık %49** (⚠ içinde kupa olmayan bir QQ için — elinde Q♥ varsa o yedi kupadan biri senin elindedir, yani 47'de 22, yaklaşık %47). Kabaca her iki turn'den biri eli oynamayı zorlaştırıyor. Bu out'ları öbür taraftan saymayı pekiştirmek istiyorsan [out sayma ve draw olasılıklarından](/tr/blog/holdem-probability) başla.

Yani buradaki overpair, **draw'lara şimdi bedel ödetip raise yediğinde frene basacağın** bir el — dev pot kuracağın bir el değil. Kaçınman gereken pot, flop'ta kurduğun değil, kötü bir turn'den sonra büyüyen pottur.

## Lead'in üçte ikisi neden küçük boyutta?

**Çünkü lead tek bir el hakkında değil, range'in tamamı hakkında bir iddia.** %23,7'nin 16,8 puanı potun üçte biriyle, 6,9 puanı dörtte üçüyle gidiyor.

Küçük bahis "bütün range'im bu flop'u seviyor" der. Sadece güçlü eller bahis yaparsa range "bahis = güçlü, check = zayıf" diye ikiye ayrılır ve rakibin seni bedavaya okur. Kentleri, top pair'leri ve draw'ları tek bir küçük boyuta karıştırmak onları birbirinden ayırt edilemez kılar.

Büyük boyutun da bir sebebi var. Bütün kentler küçük bahse gitseydi buton büyük bir potla hiç karşılaşmadan her şeyi call edebilirdi. **İki boyut kullanmak, rakibin hem call hem de raise kararını zorlaştırır.**

## Ne zaman c-bet yapılmaz? 9-8-7 istisnası

**Bu flop'ta, preflop raise yapan olarak** — big blind ister lead yapsın ister check etsin. Çalışma setindeki en net "c-bet yapma" board'u bu ve sebebi doku değil, kendi range'inin bu board'da neye benzediği. Bu kararın board tiplerine nasıl genellendiği [continuation bet stratejisinde](/tr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") anlatılıyor.

Sebep range dağılımı. Butonun range'inin %30,5'i as yüksek, %11,9'u papaz yüksek, %9,3'ünde hazır el yok — %51,7'si çiftsiz. ⚠ **Ama "çift yok" tek başına sebep değil.** Big blind'ın sütununu aynı şekilde topla, **%53,7** çıkar — big blind'ın range'inde çiftsiz kısım 2,0 puan *daha fazla*, üstelik %23,7 lead yapan da o. Butonu asıl durduran şey **check range'inde geride kalanlar**: big blind'ın ellerinin %76,2'si hâlâ orada, aralarında kentler ve %13,6 top pair var; yani geniş bahis yapmak **check-raise**'e çarpar. ⚠ O 24 kent kombosunun bir kısmı check yerine lead yapıyor, yani hepsi check range'inde oturmuyor — ve check-raise *sıklığı* bu çözümde yer almıyor.

AKo ve AQo gibi ıskalamış **offsuit** yüksek kartlar standart check-back elleridir: showdown değerleri var ve raise geldiğinde devam edecek bir şeyin yok. Suited hâlleri başka bir el — A♥K♥ ve A♥Q♥ burada nut floş draw'ı, onlar bahis yapar.

:::note[Çalışma spotu flop'ta yalnızca ilk hamleyi, yani big blind'ınkini önceden çözer. Check'ten sonra butonun c-bet sıklığının gerçekte ne kadar düştüğü bu ekranda yok. "Solve this spot yourself" ile ağacı çalıştırıp kendin bak.]:::

## Masada ne değişir?

- **Lead'ler, geç pozisyondan geniş bir açılıştan sonra orta kartlarla bağlantılı board'larda yaşar.** Sonraki spottaki monoton board'da da yaklaşık %11 var; as yüksek ve papaz yüksek kuru flop'larda ise pratikte sıfır. ⚠ Ama bu serinin gerçekten çözdüğü tek orta bağlantılı board 9-8-7 ve koşul tek başına doku değil, **o board'da en güçlü ellerin daha çoğunu hangi range'in tuttuğu.** Kanıtı serinin içinde: 6-5-2 flop'u da aynı buton–big blind tek raise'li pot ve orada big blind sadece **%3,2** lead yapıyor, çünkü kent yapan tek el 4-3 ve iki range'de de yok. Düşük ve bağlantılı olmak tek başına lead üretmez.
- **Yine de zamanın dörtte üçünde check edersin.** Lead yaptığında: küçük ve sadece en iyi ellerinle değil, daha geniş bir range'le — sadece kentlerle lead yapan bir range anında okunur, bu yüzden top pair'ler ve draw'lar da aynı boyuta girer. Ama toplamı gözden kaçırma: **lead'in tamamı %23,7, bunun 16,8'i küçük boyutta.** "Her draw'la lead" kuralına dönüşürse range'in yarısına çıkar ve stratejiyi tersine çevirir. Geri kalan %76,2 check eder.
- **Butondaysan bu dokuda c-bet atma isteğine diren.** Range'inin yarısından fazlası çiftsiz ve overpair'ler büyük değil kontrollü bir pot ister.
- **Gerektiğinden çok daha sık c-bet yapan bir rakibe karşı check, lead'den değerli olabilir** — ve kentler ile top pair'lerle sadece check-call değil, check-**raise** yap. Güçlü ellerin için bahsi onun koymasına izin vermek inisiyatifi almaktan değerlidir, ama ancak ardından bedelini ödetirsen.
- **Tersinden de oku.** Islak board'larda check-back yapan bir oyuncuya karşı lead, solver rakamının söylediğinden daha değerlidir: orada check etmek street'i düpedüz kaybetmektir.

:::readnext[Okumaya devam et]
/tr/blog/broadway-board-strategy | Range'in üçte ikisinde draw var — ve yine de check | /images/gto-srp-broadway-oop-en.webp
/tr/blog/monotone-board-strategy | On seferin yedisinde check eden nut floş | /images/gto-srp-monotone-oop-en.webp
:::

## Kendin kontrol et

[Ücretsiz GTO solver'ı](/tr/solver) aç, **Study Spots → Middle Connected, Two-Tone → [⚡ View results]** yolunu izle.

Bu spotu çalışmanın en iyi yolu onu **kuru bir board'la yan yana** açmak. Önce "Dry King-High Board"u aç ve tek bir yeşille kaplı ızgaraya bak, sonra buraya dön ve aralarında turuncu ile pembenin belirdiğini izle. Aynı oyuncular, aynı range'ler — üç kart stratejiyi değiştirdi.

Sonra kenar çubuğundaki **GTO Trainer**'ı aç ve az önce okuduğun lead'i sana dağıtmasına izin ver — gerçek range ağırlıklarından rastgele bir el verir ve yanlış seçimin kaç big blind'a mal olduğunu söyler. Ücretsiz, kurulum yok, hesap yok.

## Sıkça sorulan sorular

**Q. Pokerde donk bet nedir?**

A. Flop'ta preflop raise yapmamış oyuncunun yaptığı bahis — agresöre check etmek yerine onun önüne bahis koymak. Adı "donkey"den, yani eşekten geliyor; bu hamle uzun süre böyle görüldü. Solver'lar belirli board dokularında doğru olduğunu gösteriyor ve bu flop'ta big blind'ın stratejisinin %23,7'si.

**Q. Donk bet neden kötü diye bilinir?**

A. Çünkü çoğu board'da öyle. Bu seride as yüksek, papaz yüksek ve broadway flop'larının hepsinde big blind'ın lead oranı %2'nin altındaydı, çünkü bu kartlara preflop raise yapan daha iyi bağlanıyor. İstisna, **call eden oyuncunun en iyi ellerin daha çoğunu tuttuğu** board — ve 9-8-7 bunun en net örneği.

**Q. 9-8-7'de avantaj big blind'da mı?**

A. Hayır. Equity %48,5'e %51,5, equity gerçekleştirme %93,2'ye %106,4 — ikisi de butonun lehine. Lead, big blind genel olarak önde olduğu için değil; big blind'da daha fazla tamamlanmış kent olduğu, butonun gücü ise bu board'un tehdit ettiği overpair'lerde toplandığı için çıkıyor.

**Q. Pokerde ne zaman lead yerine check etmelisin?**

A. Bu flop'ta bile zamanın dörtte üçünde — big blind'ın range'inin %76,2'si check ediyor. Range'in hazır ellerin daha çoğunu tutmuyorsa check et; her kuru as yüksek ya da papaz yüksek board böyle. Rakibin zaten fazla bahis yapıyorsa da check et: onun ateşlemesine izin vermek inisiyatifi elinden almaktan değerlidir. Lead istisnadır; her durumda check'ten daha iyi değildir.

**Q. Lead yapıp raise yersem ne olur?**

A. Bunu bahisten önce planla, çünkü potun üçte biri kadar bir lead raise davet eder. Kentler ve açık uçlu draw'lar devam eder — büyük pot oynayacak equity'n var. Dokuzlu top pair bir kez call'dur ve kötü bir turn'de genelde frene basar. Ne çifti ne draw'ı olan eller "görelim bakalım" demek yerine fold etmeli: raise'in hedef aldığı kısım tam olarak range'inin o parçası.

**Q. Lead'i hangi boyutla yapmalıyım?**

A. Çoğunlukla küçük. Solver %23,7 puanın 16,8'ini potun üçte biri kadar bahse, 6,9'unu dörtte üçüne koyuyor. Küçük boyut varsayılan, çünkü amaç range'in tamamıyla baskı kurmak; büyük boyut ise rakibin her şeyi rahatça call edemesin diye var.

**Q. Bu lead sıklıkları benim limitimde de geçerli mi?**

A. Board koşulu geçerli; tam %23,7 olduğu gibi taşınmaz. Heads-up oyun, 100bb, 2,5bb buton açılışı ve standart savunma range'leri varsayılıyor, rake yok. Daha büyük bir canlı açılış potu ve stack-pot oranını değiştirir; modelden çok daha geniş savunan bir big blind ise daha da fazla kent tutar — bu da lead'i zayıflatmaz, güçlendirir.
`.trim(),
};

export default POST;
