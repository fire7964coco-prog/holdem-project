import type { Post } from "../posts";

/**
 * GTO solver serisi ⑤ — Q♠9♠2♠ monoton board, Türkçe sürüm (2026-10-06, tr 회차 5).
 * 출처: lib/posts-en/monotone-board-strategy.ts (EN updated 2026-10-02). 수치는 EN과 값 동일(구분자만 터키식).
 * 링크 치환: /en/solver → /tr/solver · donk-bet-strategy·broadway-board-strategy → /tr/blog 동일 slug ·
 *   holdem-implied-odds → /tr/blog/holdem-pot-odds(implied·reverse implied odds 절 실재) ·
 *   holdem-drawing-odds → /tr/blog/holdem-probability(flop 플러시 %0,84·완성 확률 실재).
 * 이미지: EN 파일 그대로(-en.webp), alt만 터키어.
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "On seferin yedisinde check eden nut floş",
  seoTitle: "Nut floş bile %70 check ediyor — monoton flop stratejisi",
  desc: "Monoton flop'ta büyük bahis neredeyse yok olur: %3,2. Nut floş bile ortalama %69,9 check eder. Üç kart aynı türden gelince bahis boyutu neden çöküyor?",
  tldr: "Üç flop kartının da aynı türden olduğu Q♠9♠2♠'de big blind %88,8 check ediyor, %8,0 küçük ve yalnızca %3,2 büyük bahis yapıyor. Büyük boyut neredeyse kayboluyor, çünkü nuts sabit: hazır bir floş zaten küçük bahislere call alıyor, floşun yokken ne kadar büyük oynarsan seni call eden range o kadar floşlara daralıyor. Nut floş bile ortalama %69,9 check ediyor — nut olmayan floşlar ise daha da fazla, %81,4.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-02",
  readTime: "10 dk",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-en.webp",
  imageAlt: "Tek türden maça flop'u için HoldemMaster GTO solver sonucu: big blind'ın tablosu büyük ölçüde check'i gösteren yeşil, arada birkaç küçük bahis",
  keepImagesInBody: true,
  tags: [
    "monoton flop",
    "monoton board poker",
    "monoton flop nasıl oynanır",
    "nut floş",
    "bahis boyutu",
    "gto solver",
    "reverse implied odds",
  ],
  content: `
Flop **Q♠ 9♠ 2♠** — üç kart, tek tür. Elinde A♠J♠ var. Bu **nut floş**, daha flop'ta hazır.

Peki ne kadar bahis yaparsın? İçgüdün potu büyütmek der. Solver bu eli **%83,4 ihtimalle check ediyor.**

Monoton flop, insanların kafasını en çok karıştıran board tipidir; çünkü hem hazır eller hem boş eller alıştığından farklı davranır. Aşağıdaki her rakam HoldemMaster'ın [ücretsiz GTO solver'ından](/tr/solver) çıktı.


:::stripe
Spot | BTN 2,5bb açar → BB call eder (heads-up)
Flop | Q♠ 9♠ 2♠ (monoton — üçü de aynı türden)
Pot · stack | Pot 5,5bb · efektif stack 97,5bb
Sonuç | Büyük bahis %3,2 — boyut çöküyor
:::

> **Kısa cevap**
> Küçük oyna ya da check et, büyük neredeyse hiç. Q♠9♠2♠'de big blind **%88,8** check ediyor, potun üçte biri kadar **%8,0**, dörtte üçü kadar ise yalnızca **%3,2** bahis yapıyor. Nuts tek bir el tipine kilitli; yani hazır floş küçük bahisle zaten call alıyor, floşun yokken ne kadar büyük oynarsan call eden range o kadar floşlara daralıyor. Bu da büyük boyutu iki oyuncunun stratejisinden de dışarı itiyor.

## Pokerde monoton board nedir?

**Üç kartın da aynı türden olduğu flop** — burada Q♠ 9♠ 2♠; yani elinde iki maça tutan herkesin floşu zaten hazır. Sık görülen board tiplerinin en nadiri ve el değerlerini en çok değiştireni bu; çünkü tek bir maça kartı bir çiftten daha değerli olabilir.

| Ayar | Değer |
|---|---|
| Preflop | BTN 2,5bb açar · BB call eder · diğer herkes fold |
| Range'ler | Standart 100bb online oyunun yaklaşık hâli |
| Flop | Q♠ 9♠ 2♠, monoton (üç maça) |
| Pot · stack | Pot 5,5bb · efektif stack 97,5bb |
| Bahis boyutları | Potun yaklaşık %33'ü ve %75'i |
| Rake | Modele dahil değil |
| Kontrol | 20 Ağustos 2026, çalışma spotu çıktısı |

## Big blind monoton flop'u nasıl oynar?

**%88,8 check, %11,2 önden bahis (lead).** Bu, %23,7 ile [9-8-7 bağlantılı board'dakinden](/tr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") daha az önden bahis; ama A-7-2'de %1,9, K-8-3'te %0,2 olan kuru flop'lardan çok daha fazla.

| Big blind'ın ilk hamlesi | Sıklık | Kombo |
|---|---|---|
| Check | **%88,8** | 415,7 |
| Bet 1,8bb (potun %33'ü) | %8,0 | 37,4 |
| Bet 4,1bb (potun %75'i) | **%3,2** | 14,9 |

İlginç olan, önden bahsin içindeki dağılım değil — **saldırının tamamının küçülmesi.** Büyük bahsin önden bahis range'i içindeki payı %29; bu, 9-8-7'dekiyle (23,7'nin 6,9'u) neredeyse birebir aynı. Değişen toplam: önden bahis %23,7'den %11,2'ye, büyük bahis %6,9'dan %3,2'ye düştü — ikisi de kabaca yarıya indi.

Yani büyük boyut iki tarafın da işine yaramıyor, küçük boyut ise yalnızca birinin işine yarıyor — bütün stratejinin "küçük ya da check"e çökmesinin sebebi bu. Bu "büyük bahis kaldırıldı" demek değil: bu, **big blind'ın genel olarak daha az bahis yapması** — ve sebebi en net hâliyle hazır floşların nasıl davrandığında görünüyor.

## Monoton flop'ta büyük bahis neden kaybolur?

**Çünkü nuts sabit.** Q, 9 ve 2 bağlantılı değil, yani bu flop'ta sıralı floş mümkün değil. En iyi el kilitli: **A♠ ile yanında ikinci bir maça tutan oyuncu** (tek başına A♠ yalnızca dört kartlık bir floş draw'ıdır). Tek bir kart iki range'in de tepesini belirliyor.

Bu doğru olduğu anda büyük bahisler kimseye para kazandırmaz.

:::compare
Floşun varsa | Floşun yoksa
Büyük bahis, floşu olmayan ellerin çoğunu fold ettirir | Büyük bahse çoğunlukla floşlar ve maça draw'ları call eder
Küçük bahis tek çiftleri oyunda tutar | Küçük bahis ucuzdur ama tek çift ona fold etmez
:::

**Bir tarafın işine küçük boyut yarıyor; diğerinin işine hiçbiri.** Bu yüzden strateji herkes için "küçük ya da check"e çöküyor. Bahis boyutunu **senin ne kadar güçlü olduğunun değil, rakibinin neyle call edebileceğinin** belirlediği ilkesini serideki en net gösteren board bu.

## Nut floş neden check eder?

**Çünkü neredeyse hiçbir şey call edemez.** Solver'ın el bazlı tablosunu en alta kadar kaydır ve nut floşun sekiz kombosunun hepsini çek — big blind'ın gerçekten tutabileceği her A♠ eli:

| El | Equity | Check | Bet 1,8bb | Bet 4,1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | %97,7 | **%83,4** | %14,3 | %2,2 | %229,9 |
| A♠T♠ | %97,7 | **%84,2** | %14,5 | %1,2 | %232,3 |
| A♠8♠ | %97,7 | **%79,1** | %17,4 | %3,5 | %232,6 |
| A♠7♠ | %97,6 | **%56,0** | %20,6 | %23,4 | %231,3 |
| A♠6♠ | %97,6 | **%60,2** | %22,0 | %17,9 | %232,6 |
| A♠5♠ | %97,6 | **%64,1** | %20,2 | %15,7 | %233,6 |
| A♠4♠ | %97,6 | **%52,7** | %24,1 | %23,2 | %237,3 |
| A♠3♠ | %97,6 | **%79,7** | %0,0 | %20,3 | %240,6 |

**Ortalama %69,9 check.** %97,6 equity'li — kaybetmesi neredeyse imkânsız — bir el, on seferin yedisinde check ediyor.

Neden sadece sekiz kombo? As'lı suited ellerin üçü imkânsız, çünkü **Q♠, 9♠ ve 2♠ zaten board'da.** Kalan dokuzdan A♠K♠ preflop'ta 3-bet yapıyor ve buraya hiç gelmiyor; geriye sekiz kalıyor.

Check etmenin sebebi şimdi ne kazandığın değil, toplamda ne kazandığın. Büyük bahis yaparsan tek çiftlerin ve yüksek kartların çoğu fold eder; tek maçalı bir el gelebilir, ama hazır bir nut floşa karşı asla daha yüksek bir floş yapamaz, kazanmak için full gibi bir runner-runner yardımına muhtaçtır. Her iki durumda da ileride toplayacağın para kesilir. Check edersen rakibin kendi çiftiyle bahis yapar ya da sana blöf atar — turn ve river'da toplamaya devam edebileceğin para.

Rakamlar bunu açıkça söylüyor: **EQR %230**, pot payının iki katından fazla. Pot 5,5bb ve A♠J♠'nin beklenen değeri ==12,36bb==. Önünde kalan, şu an ortada olandan daha değerli.

Blocker'lar da aynı tabloda görünüyor. **A♠J♠ ve A♠T♠ %80'in üzerinde check ederken, A♠7♠ ile A♠4♠ arası %52–64'e iniyor ve çok daha fazla bahis yapıyor.** J♠ ya da T♠ tutmak, **o kartları taşıyan nut olmayan floşları** bloklar. ⚠ Bu board'da "vale yüksek floş" diye bir şey yok — Q♠ zaten board'da, yani her hazır floş en az kız yüksektir ve ikinci en iyi floş papaz yüksektir. J♠ ya da T♠ tutmanın elinden aldığı şey bu floşların **kicker yuvasıdır** (K♠J♠, J♠T♠ ve benzerleri). Ama blocker'lar dağılımı tek başına açıklamıyor. Butonun 18 nut olmayan floşunu say: J♠ ve T♠ bunlardan 4'er tanesini düşürüyor; 7♠ 6 tanesini, 8♠ ve 6♠ 5'er, 5♠ 4, 4♠ ise yalnızca 2 tanesini — ve hepsinin en büyük blocker'ı olan A♠7♠ yine de %44,0 bahis yapıyor; onu geçen tek el, yalnızca 2 kombo bloklayan A♠4♠ (%47,3). Hiçbirini bloklamayan tek kart 3♠ ve A♠3♠ %79,7 check ediyor. Her nut floş kombosunda üç hamle birbirine 0,05bb mesafede duruyor; o yüzden bu sütunu bir blocker kuralı olarak değil, neredeyse eşit seçenekler arasındaki bir karışım olarak oku.

## Nut olmayan floşlar farklı mı oynanır?

**Daha da fazla check ederler.** Bu board'da big blind'ın range'inde 33 hazır floş kombosu var; A♠ içermeyen 25'i ortalama **%81,4** check ediyor, nut'un %69,9'una karşı.

| El | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | %97,7 | %83,4 | %229,9 |
| K♠J♠ | %94,0 | **%91,8** | %197,0 |
| K♠8♠ | %93,6 | **%76,3** | %193,0 |
| K♠6♠ | %93,6 | **%61,0** | %193,7 |

Equity neredeyse kıpırdamıyor — %97,7'ye karşı %94 — ama EQR %197'ye düşüyor. **Kazandığında daha az kazanıyorsun.** Tek bir sebebi var: papaz yüksek floşun kaybettiği tek el as yüksek floş, ve büyük parayı ortaya koyan da tam olarak o el. Az kazanıp çok kaybetmek **reverse implied odds**'tur; [implied odds](/tr/blog/holdem-pot-odds)'un ayna görüntüsü.

## Burada kimde daha çok floş var?

**Big blind'da — %7,1, butonun %5,7'sine karşı.** Ama floş *draw*'larında tablo tersine dönüyor.

![Tek türden maça board'unda big blind ile butonun el kategorilerini karşılaştıran range dağılımı infografiği](/images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · kategori dağılımı — hazır floşlarda big blind önde, overpair ve as yüksekte buton önde")

| Kategori | BB (OOP) | BTN (IP) |
|---|---|---|
| Hazır floş | **%7,1** | %5,7 |
| Floş draw'ı (tek maça, combo draw'lar dahil) | %25,6 | **%29,2** |
| Top pair (Q) | %10,9 | **%12,0** |
| Overpair (KK, AA) | %0,0 | **%2,5** |
| As yüksek | %25,6 | **%28,5** |

⚠ Floş draw'ı satırı **türetilmiş** bir değer: solver "Flush Draw" ile "Combo Draw"u ayrı listeliyor ve tek maçalı bir el ikisinden birinde çıkabiliyor. Yani big blind için ==20,5 + 5,1 = %25,6==, buton için ==24,1 + 5,1 = %29,2==. Ekranla karşılaştıracaksan bunu bilmen işine yarar.

Bu dağılım preflop'tan geliyor. **Big blind ucuz suited çöpleri savunuyor** — J4s, J5s ve 85s gibi eller big blind'dan call ediliyor, maçalı olanları da floşa dönüşüyor. Buton bunları hiç açmıyor.

Butonda bunların yerine çok daha fazla **tek maçalı offsuit as-x ve papaz-x** var. Hazır değil, ama draw — ve A♠ tam burada özel hâle geliyor. Hem nut floşu yapabiliyor hem de rakibinin nut floşu **tutamayacağını** sana söylüyor.

## Tek bir maça bir elin değerini nasıl değiştirir?

**Aynı top pair, maça içerip içermemesine göre bambaşka bir el.**

Q♥J♦ elini düşün — top pair, maça yok. Butonun 474 komboluk range'inin tamamının **%12,0**'ına karşı zaten geride (floşlar 5,7 + overpair'ler 2,5, artı set'ler ve iki çiftler); üstüne bir de **AQ ve KQ**'ya karşı kicker'da geride: Q♠ board'da, Q♥ senin elinde, yani geriye iki kız kalıyor; bu da 8 AQ ve 8 KQ kombosu eder — senin Q♥ ve J♦'n çıkınca butonun hâlâ tutabileceği 428 kombonun 16'sı, **yaklaşık %3,7**. Aynı şekilde sayınca seni zaten geçmiş her şey 428'in 68'i, kabaca **%15,9** eder. Bunun üstüne bir **%29,2** daha tek kartla seni geçebiliyor (⚠ o 16 kicker kombosunun dördü maça tutuyor ve o %29,2'nin içinde de sayılıyor; iki rakamı öylece toplama). Bu, üç street value alınacak bir el değil; bir kez blöf yakalayacak bir el.

Şimdi 9♥8♠ eline bak — maçalı orta çift. Şimdi kazanabilir ya da sonra gelişebilir; bu da onu bahis yapmaya da call etmeye de yetecek kadar esnek kılıyor.

**Bu board'da tek bir tür bütün sıralamayı baştan yazıyor.**

## Equity 48'e 52 iken EQR neden 90'a 109?

**Çünkü potların küçük kaldığı bir board pozisyonun değerini de küçültür.**

| Ölçü | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | %47,7 | %52,3 |
| EV (bb) | 2,37 | 3,13 |
| **Equity gerçekleştirme (EQR)** | **%90,4** | **%108,8** |

Big blind'ın equity payı ==5,5 × %47,7 = 2,62bb==, gerçekleşen ise 2,37bb; işte %90,4 bu.

18,4 puanlık fark, **yedi tek raise'li pot arasında** en küçük ikinci fark; önünde 13,2 ile 9-8-7 var. ⚠ Serinin tamamında ise yalnızca beşinci — blind'a karşı blind K-T-6 (7,0) ve A-A-6 (9,3) ile 8-5-2 3-bet potu (16,6) daha dar; ama bunlar farklı koltuklar. Büyük bahisler kaybolunca zor kararlar da kaybolur — ve **pozisyon tam olarak hâlâ verilecek kararlar kadar değerlidir.**

## Masada ne değişir?

- **Monoton board'da büyük bahis zaten nadirdir.** Teoride big blind'ın büyük boyutu burada **%3,2**'ye düşüyor. ⚠ Bunu doğrudan "o zaman büyük bahse tek çifti fold et"e çevirme. %3,2, big blind'ın **önden bahis** sıklığı; bahsin *karşısında* olan sensen, butonun boyut sıklıkları bu çözümde hiç yok. Butonun kendi sütununa da bak: hazır floşlar %5,7 iken tek maçalı draw'lar **%29,2** — beş katından fazla. Büyük bahsi "floş" diye okumak seni semi-blöflere fold ettirir. Büyük bir bahis geldiğinde ilk bakacağın şey **kendi elinde A♠ olup olmadığı.**
- **Küçük floşu üç street boyunca büyük bahisle sürme.** Solver nut olmayan floşları %81,4 check ediyor (nuts: %69,9). Value'yu küçük bahislerle al, büyük bir raise'i aksi kanıtlanana kadar A♠ say.
- **A♠ tutmak bir eli blöf adayına terfi ettirir.** Rakibinin nut floş tutamayacağını bilerek yapılan blöf, körlemesine yapılandan farklı bir bahistir.
- **Hiç çift fold etmeyen bir rakibe karşı tuzak kurmayı bırak.** %69,9'luk check, check'e karşı rakibin bahis yapacağını varsayıyor; sadece call ediyorsa floşlarınla bahis yap ve parayı al.

:::readnext[Okumaya devam et]
/tr/blog/donk-bet-strategy | Donk bet'in doğru olduğu flop: 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
/tr/blog/broadway-board-strategy | Range'in üçte ikisinde draw var — ve yine de check | /images/gto-srp-broadway-oop-en.webp
:::

## Kendin kontrol et

[Ücretsiz GTO solver'ı](/tr/solver) aç, **Örnek spotlar → Monoton board (hepsi aynı renk) → [⚡ Sonuçları gör]** yolunu izle.

Bu spotta en alttaki el bazlı tablo dersin ta kendisi — **sonuna kadar kaydır.** A♠J♠ ile A♠4♠'nin check sıklığında neden 30 puan ayrıştığını ve aynı kızın maçayla gelip gelmemesine göre nasıl iki farklı ele bölündüğünü orada okuyabilirsin.

Sonra kenar çubuğundan **GTO Trainer**'ı aç ve bu board'da sana bir floş dağıtmasına izin ver: bir hamle seçip EV kaybını görmek, bir tablonun seni ikna etmesinden daha hızlıdır. Ücretsiz, kurulum yok, hesap yok.

## Sıkça sorulan sorular

**Q. Monoton flop nedir?**

A. Üç kartın da aynı türden olduğu flop, Q♠ 9♠ 2♠ gibi. O türden herhangi iki kart zaten floş yapar, tek bir kart ise draw'dır. El değerlerinin en çok kaydığı board tipidir; çünkü türler geçici olarak kart değerlerinden daha önemli hâle gelir.

**Q. Monoton board'da hazır floşla her zaman bahis yapmalı mısın?**

A. Hayır. Bu çözümde sekiz nut floş kombosu %52,7 ile %84,2 arasında, ortalama %69,9 check ediyor; nut olmayan floşlar ise %81,4. Büyük bahis tek çiftlerin ve yüksek kartların çoğunu fold ettirir — gelen tek maçalı bir el de nut floşa karşı asla daha yüksek bir floş yapamaz, kazanmak için full gibi bir runner-runner yardımına muhtaçtır — bu yüzden rakibi bahse davet etmek için check edip turn ve river boyunca toplamak toplamda daha çok kazandırır.

**Q. Big blind'da neden butondan daha çok floş var?**

A. Çünkü big blind pota zaten kısmen girmiş durumda ve J4s, J5s ve 85s gibi ucuz suited elleri savunuyor. Bunlar monoton board'da floşa dönüşüyor. Buton bunları hiç açmıyor; hazır floşlarının big blind'ın %7,1'ine karşı %5,7'de kalmasının sebebi bu.

**Q. Flop'ta floş gelme ihtimali ne kadar?**

A. Monoton board'un kendisini sıra dışı yapacak kadar düşük — iki suited kart gerekiyor ve üç flop kartının da işbirliği yapması lazım. Flop'ta floş yapmanın ve floşu tamamlamanın kesin yüzdeleri [poker olasılıkları](/tr/blog/holdem-probability) yazısında hesaplanıyor; burada önemli olan, board böyle açıldığında ne yapacağın.

**Q. Floşum bile yokken A♠ neden bu kadar önemli?**

A. Bir blocker: sen onu tuttuğun sürece rakibin nut floşu tutamaz. Bu da rakibini range'inin tepesini savunamaz hâle getirir; bu yüzden A♠'lı eller solver'ın seçtiği ilk blöflerdir. Tersi de geçerli — küçük bir floş tutarken büyük bir raise her zamankinden fazla saygıyı hak eder.
`.trim(),
};

export default POST;
