import type { Post } from "../posts";

/**
 * GTO solver serisi ③ (tr) — Q♠J♦T♠, bağlantılı broadway, iki renkli. 2026-10-06 tr 회차 5.
 * 출처: lib/posts-en/broadway-board-strategy.ts (updated 2026-10-02) · 수치 전부 EN과 동일(구분자만 터키식).
 * 링크 치환: /en/solver→/tr/solver · a-high/donk-bet/holdem-continuation-bet→/tr 동일 slug ·
 *   holdem-drawing-odds→/tr/blog/holdem-probability(아웃·드로우 완성 확률을 다룸) ·
 *   holdem-position-play→/tr/blog/holdem-positions(앵커=포스트플랍 행동 순서로 축소, thumb는 도착 글 히어로) ·
 *   k-high-board-cbet(tr 없음)→링크 2곳 제거·문장 유지, readnext 해당 칸은 donk-bet-strategy로 교체.
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Range'in üçte ikisinde draw var — ve yine de check",
  seoTitle: "%68'i draw, yine de %99,9 check — Q-J-T'de nut avantajı",
  desc: "Q-J-T iki renkli flop'ta big blind range'inin %68'inde draw var, yine de %99,9 check ediyor. Bu flop'u range avantajı değil, nut avantajı belirliyor.",
  tldr: "Buton açıp big blind call ettikten sonra gelen Q♠J♦T♠ flop'unda big blind %99,9 check eder — range'inin %68,4'ü draw tutmasına rağmen. Sebep nut avantajı: kent %10,5'e %7,1, set %2,0'a %0,7, overpair %2,6'ya %0. Equity gerçekleştirme %77,9'a %119,4 ayrılıyor; kurudan ıslağa giden üç flop içinde şimdiye kadarki en geniş fark.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-02",
  readTime: "10 dk",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-en.webp",
  imageAlt: "Bağlantılı broadway iki renkli flop için HoldemMaster GTO solver sonucu: big blind'ın grid'i check'i gösteren yeşil, sağda draw paneli",
  keepImagesInBody: true,
  tags: [
    "nut avantajı",
    "range avantajı ve nut avantajı farkı",
    "dinamik board",
    "iki renkli board",
    "gto solver",
    "broadway flop",
    "equity gerçekleştirme",
  ],
  content: `
Flop **Q♠ J♦ T♠** açılıyor. Big blind'dasın, elinde KQ — top pair artı açık uçlu kent draw'ı. Bunu check etmek yanlış olmalı, değil mi?

Önceki iki spot — [as yüksek board](/tr/blog/a-high-board-cbet) ve papaz yüksek board — neredeyse kimsenin draw'ı olmayan sakin board'lardı. Bu tam tersi: **burada big blind range'inin %68,4'ü draw tutuyor.** Ve solver yine de ==%99,9== check ediyor. Önden bahis (lead) daha *sık* değil, daha *seyrek* hâle geldi.

"Bol draw var" ile "ilk bahsi sen yapabilirsin" ayrı iddialar. Aşağıdaki bütün rakamlar HoldemMaster'ın [ücretsiz GTO solver'ından](/tr/solver) geliyor; 19 Ağustos 2026'da çalışma spotunun (Study Spots) çıktısından okundu.


:::stripe
Spot | BTN 2,5bb açar → BB call eder (heads-up)
Flop | Q♠ J♦ T♠ (iki renkli — iki maça)
Pot · stack | Pot 5,5bb · efektif stack 97,5bb
Sonuç | BB %99,9 check — her yer draw, yine de lead yok
:::

> **Kısa cevap**
> Big blind Q♠J♦T♠'de **%99,9** check eder, üstelik range'inin %68,4'ü draw tutarken. Sebep **nut avantajı**: kent %10,5'e %7,1, set %2,0'a %0,7, overpair %2,6'ya %0. En tepedeki kategoriler butonda — yalnızca iki çift %6,0'a %5,9 ile başa baş — yani önden bahis yaparsan yendiğin elleri fold ettirir, yenemediğin ellerden call yersin.

## Bu rakamlar hangi koşullarda çıktı?

Serinin geri kalanıyla aynı yapı: buton 2,5bb'ye açar, big blind call eder, diğer herkes fold eder. İki oyuncu, 5,5bb'lik bir pot, arkada 97,5bb, standart 100bb online range'ler ve potun kabaca üçte biri ile dörtte üçü olmak üzere iki bahis boyutu. Değişen tek şey flop.

| Ayar | Değer |
|---|---|
| Preflop | BTN 2,5bb açar · BB call eder · diğer herkes fold eder |
| Range'ler | Standart 100bb online oyunun yaklaşık hâli |
| Flop | Q♠ J♦ T♠, iki renkli (iki maça) |
| Pot · stack | Pot 5,5bb · efektif stack 97,5bb |
| Bahis boyutları | Potun kabaca %33'ü ve %75'i |
| Rake | Modele dahil değil |
| Kontrol | 19 Ağustos 2026, çalışma spotu çıktısı |

## Board bu kadar ıslakken neden %99,9 check?

**Çünkü aksiyonu belirleyen draw'ların *sayısı* değil, hazır ellerin *kalitesi*.**

| Big blind'ın ilk aksiyonu | Sıklık | Kombo |
|---|---|---|
| Check | **%99,9** | 452,5 |
| Bet 1,8bb (potun %33'ü) | %0,1 | 0,3 |
| Bet 4,1bb (potun %75'i) | %0,0 | 0,2 |

Kuru papaz yüksek flop'ta bu oran %99,8'di. **Range'in üçte ikisinin draw tuttuğu bir board'a geçince check gevşemiyor, tam tersine neredeyse yüzde yüze çıkıyor.** Bu spotun çalışma setinde olmasının sebebi tam olarak bu ters dönüş.

## Bu flop'ta nut avantajı nedir?

**Range'in tepesini kimin tuttuğudur.** Q-J-T'de kategoriler kent → set → **iki çift** → overpair diye sıralanır ve buton, iki çift hariç hepsinde önde.

| Tepe kategori | BB (OOP) | BTN (IP) | Farkı ne yaratıyor |
|---|---|---|---|
| Kent | %7,1 | **%10,5** | Big blind'da **AK yok** |
| Üçlü (set) | %0,7 | **%2,0** | Big blind'da **QQ yok, JJ yok** |
| İki çift | **%6,0** | %5,9 | Pratikte eşit — big blind'ın önde olduğu tek satır |
| Overpair | %0,0 | **%2,6** | Big blind'da **AA yok, KK yok** |

Sıralamayı doğru kur: **burada iki çift, overpair'in üstünde, üçüncü en iyi kategori.** Q-J-T'de JT ==J-J-T-T-Q== yapar — iki çift — AA ise tek bir çifttir. Yani "tepe tamamen butonun" demek abartı olur. Sonuç yine de ayakta: gerçekten nut sayılan iki kategori, kent ve set, butonun; berabere olan satır ise bu board'da ikisine de kaybediyor.

Bu farkların hepsi preflop'ta oluştu. Big blind AA, KK, QQ, JJ ve AK ile 3-bet yapar, yani bunların hiçbiri flop'a gelmez; buton ise hepsini açar ve yanında getirir.

Kombinasyonlar birebir tutuyor. Burada kent yapan yalnızca üç el var: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== ve ==98 (Q-J-T-9-8)==. İhtiyaç duydukları kartların hiçbiri — as, papaz, dokuz, sekiz — board'da yok, bu yüzden her biri 4 × 4 = 16 kombo. Big blind'da K9 ve 98 var, toplam **32 kombo**; buton AK'yi de ekleyip **48**'e çıkıyor. Solver'ın %7,1 ve %10,5 değerleri 32,2 ve 48,1 komboya denk geliyor — aynı sayılar.

**Farkın tamamı tek bir el: AK.** Preflop'taki tek bir 3-bet kararı, flop'un nut payını bu kadar kaydırıyor.

## Range avantajı ile nut avantajı arasındaki fark ne?

**Range avantajı ortalamada kimin daha güçlü olduğudur; nut avantajı en iyi ellerin daha çoğunu kimin tuttuğudur.** Genelde birlikte hareket ederler ve bu flop, ayrıştıkları durum.

| | Range avantajı | Nut avantajı |
|---|---|---|
| Cevapladığı soru | Genel olarak kimin range'inde daha çok equity var? | Tepedeki elleri kim tutuyor? |
| Q-J-T'de | Neredeyse eşit — %46,7'ye %53,3 | Tek taraflı — kent, set ve overpair hepsi butondan yana |
| Neyi belirler | Bahis yapıp yapmayacağını | **Ne büyüklükte bahis yapacağını ve kimin raise edebileceğini** |

Ortalama equity bu flop'un yazı-turaya yakın olduğunu söylüyor. Range'in tepesi ise bir oyuncunun büyük bir bahse dayanacak ellerin çoğunu tuttuğunu, diğerinin de karşılık verecek az eli olduğunu söylüyor. İkisi çeliştiğinde **boyutu nut avantajı belirler** — ve ondan yoksun oyuncu için önden bahsin seçenek olmadığına da o karar verir.

## Her range'in ne kadarı draw tutuyor?

**Yalnızca gerçek draw'ları sayarsan: big blind'da %68,4, butonda %68,7.** Backdoor floş draw'larını da eklersen %75,2 ve %74,4'e çıkıyor — iki range'in de dörtte üçü.

![Bağlantılı broadway iki renkli board'da big blind ile butonun el kategorilerini karşılaştıran range dağılımı infografiği](/images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · kategori dağılımı — flop'un kaderini üstteki dört satır belirliyor")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Kombo draw (kent + floş) | %5,3 | %4,1 |
| Floş draw'ı | %2,4 | %2,0 |
| Açık uçlu kent draw'ı | %28,7 | %27,7 |
| Gutshot | %32,0 | %34,9 |
| Backdoor floş | %6,8 | %5,7 |
| Draw yok | **%24,7** | **%25,5** |

**Draw'lar neredeyse eşit bölünüyor.** Papaz yüksek flop'ta big blind range'inin %72,2'sinde hiç draw yoktu; burada bu pay dörtte bir. (Bu, kategori tablosundan ayrı bir eksen — ikisi de kendi içinde %100'e tamamlanır ve draw ekseni **yalnızca hâlâ neyin draw olduğunu** okur: K♠9♠ gibi iki maça da tutan tamamlanmış bir kent floş satırına düşer, yanında hiçbir şey olmayan kent ise draw yok satırına.)

Yani bu board'daki kavga kimin daha çok draw'ı olduğuyla ilgili değil. Eşit draw'lar birbirini götürür; götürmeyen şey nut avantajı. Out saymayı pekiştirmek istediğin kısımsa [poker olasılıkları ve out sayma](/tr/blog/holdem-probability) yazısından başla.

## Top pair burada neden tehlikeli?

**Çünkü butonun range'inin %21,0'ı onu zaten yeniyor.** Bu, kent %10,5 artı set %2,0 artı iki çift %5,9 artı overpair %2,6 demek.

Kuru papaz yüksek flop'ta aynı hesap **%3,6** çıkmıştı — set %1,9, iki çift %0,4, overpair %1,3.

| Butonun range'inde top pair'i zaten yenen pay | |
|---|---|
| Kuru papaz yüksek flop (K-8-3) | %3,6 |
| **Broadway flop (Q-J-T)** | **%21,0** |

**Aynı "top pair", kabaca altı kat risk.** Ayrıca rakip range'inin %68,7'si bir tür draw tutuyor — bu, seni şimdiden geçmiş hazır ellerle örtüşen ayrı bir eksen, üstüne eklenen ayrı bir %68,7 değil — yani şu an yendiğin eller bile turn ve river'da seni geçebilir. Q-J-T'de tek çifti üç street boyunca itersen, geri gelen büyük aksiyon neredeyse hiçbir zaman yendiğin bir el olmaz. Bu, büyütülecek değil kontrol edilecek bir pot.

## Equity 47'ye 53 iken EQR neden 78'e 119?

**Çünkü bir board ne kadar çok karar dayatırsa, en son konuşan koltuğun değeri o kadar artar.**

| Ölçü | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | %46,7 | %53,3 |
| EV (bb) | 2,00 | 3,50 |
| **Equity gerçekleştirme (EQR)** | **%77,9** | **%119,4** |

Hesap şöyle işliyor: big blind'ın equity payı ==5,5 × %46,7 = 2,57bb==, gerçekte aldığı ise 2,00bb — %77,9 buradan çıkıyor; buton ise 2,93bb'lik payını 3,50bb'ye çeviriyor.

Üç flop'u yan yana koyunca eğilim tertemiz görünüyor.

| Flop | BB EQR | BTN EQR | Fark |
|---|---|---|---|
| A-7-2 (kuru) | %84,0 | %113,1 | 29,1 puan |
| K-8-3 (kuru) | %80,7 | %116,7 | 36,0 puan |
| **Q-J-T (bağlantılı, iki renkli)** | **%77,9** | **%119,4** | **41,5 puan** |

Üç spota bakınca kural *board ne kadar hareketliyse fark o kadar geniş* gibi duruyor. **Bu kural hemen bir sonraki spotta bozuluyor** — [9♥8♥7♣](/tr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") da Q-J-T gibi iki renkli bir board'da art arda üç kart, ama farkı **13,2 puan, yedi tek raise'li potun en darı**; big blind da %93,2 ile o yedisinin en yüksek equity gerçekleştirme oranına ulaşıyor (serinin tamamında Q-T-7 3-bet potundaki %117,8 daha yüksek). Farkı açan şey hareketlilik değil, **board'un tepesinin kimin range'ine ait olduğu**: Q-J-T, AK, QQ, JJ, AA ve KK'yi doğrudan butona veriyor, 9-8-7'de ise aynı kartlar board'u ıskalıyor. ⚠ Orada hiç önemsiz oldukları için değil — 9-8-7 overpair'leri **%1,3'e %6,4** bölüyor, bu Q-J-T'deki %0'a %2,6'dan daha geniş bir fark. Ama bağlantılı bir board'da overpair üstünlüğü kırılgan bir üstünlük; tepeyi kilitlememesinin sebebi bu. Butonun postflop'ta neden hep en son konuştuğu: [poker pozisyonları](/tr/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

## Buton böyle dinamik bir board'da nasıl bahis yapmalı?

**Yalnızca küçük değil — burada büyük boyut da karışıma giriyor.** Nut avantajı sendeyken yaptığın büyük bir bahse rakibinin raise atması zordur: kent, set ve overpair'ler çoğunlukla tek tarafta duruyor (big blind'da yalnızca %7,1 kent ve %0,7 set var), yani diğer oyuncunun karşılık verecek pek bir şeyi yok.

Bu, kuru board tarifinin tam tersi. Orada küçük ve sık bahis işe yarıyordu, çünkü amaç boş elleri fold ettirmekti. Burada rakip range'inin **%68,4'ü** draw tutuyor, yani **fold satın almak pahalı** — küçük boyut tek başına işi göremez, büyüğün de devreye girmesi gerekir. ⚠ Bunu "o zaman sıklık düşer"e kadar uzatma: bu çalışma spotu yalnızca flop'un ilk aksiyonunu çözüyor, dolayısıyla butonun gerçek boyut dağılımı ve c-bet sıklığı burada yok. Board board anlatılmış hâli [continuation bet stratejisinde](/tr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Yukarıdaki her şey solver çıktısı; bu bölüm onun bir yorumu. Çalışma spotu yalnızca big blind'ın ilk aksiyonunu önceden çözüyor, bu yüzden butonun boyut dağılımı bu ekranda yok. Gerçek rakamları istiyorsan "Solve this spot yourself"i aç ve ağacı çalıştır.]:::

## Masada ne değişir?

- **Draw tutmak, big blind'dan önden bahis yapmak için sebep değil.** Burada iki oyuncunun da draw'ları kabaca aynı, yani draw bir üstünlük değil — onunla lead yaparsan yalnızca rakibinde olan hazır ellere çarparsın.
- **Q-J-T'de top pair'i üç street value için oynama.** Rakibinin range'inin %21,0'ı zaten önde, kalanın çoğu da sana karşı draw. Bahis atmak yerine call ile sonuna kadar gitmek daha iyi.
- **O check'in içinde ne olduğunu unutma.** Big blind'ın %99,9'luk check'inin içinde 32 kombo kent (K9, 98) ve 27 kombo iki çift var. Bu eller zayıf oldukları için check etmiyor — **check edip sırayı butona bırakmak, önden bahisten daha çok kazandırıyor** (butonun burada ne sıklıkla c-bet yaptığı bu çalışma spotunda yok) ve check range'inin boş ellere çökmesini engelliyor. Yani check'i "hiçbir şey" diye okuyup check-raise ihtimalini eleme. ⚠ O check-raise'in *sıklığı* ne, bu çözüm söyleyemez: çalışma spotu **flop'un ilk aksiyonunda** duruyor, ötesindeki her şey için "Solve this spot yourself" gerekiyor.
- **Draw'ını asla fold etmeyen rakiplere karşı daha sık değil, daha büyük bahis yap.** Burada işe yaramayan şey fold satın almak; işe yarayan draw'lara bedel ödetmek.

:::readnext[Okumaya devam et]
/tr/blog/donk-bet-strategy | Donk bet'in doğru olduğu flop: 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
/tr/blog/a-high-board-cbet | Top pair var, yine de check: A-7-2'de c-bet sıklıkları | /images/gto-srp-dry-ace-oop-en.webp
:::

## Kendin kontrol et

[Ücretsiz GTO solver'ı](/tr/solver) aç, **Study Spots → Connected Broadway, Two-Tone → [⚡ View results]** yolunu izle; yukarıdaki ekran beklemeden açılır.

Bu spotta **sağdaki Draws paneline** bak — açık uçlu kent draw'ları ile gutshot'lar birlikte %60'ı geçiyor, bu seride ilk kez. Sonra oyuncu seçiciyi **IP (BTN)**'ye çevir ve Straight %10,5 satırına bak: bu yazının tamamı o tek satırdan çıkıyor.

Okumak yerine çalışmak istiyorsan kenar çubuğundaki **GTO Trainer**'ı aç: gerçek range ağırlıklarından el dağıtır ve aksiyonunun sana kaç big blind'a mal olduğunu gösterir. Ücretsiz, kurulum yok, hesap yok.

## Sıkça sorulan sorular

**Q. Q-J-T'de hangi eller kent yapar?**

A. Üç el: A-K-Q-J-T için AK, K-Q-J-T-9 için K9 ve Q-J-T-9-8 için 98. İhtiyaç duydukları kartların hiçbiri — as, papaz, dokuz, sekiz — board'da yok, bu yüzden her biri 4 × 4 = 16 kombo, toplam 48. Big blind AK ile preflop'ta 3-bet yaptığı için elinde 32 kalıyor.

**Q. Islak board semi-blöf lead'in yeri değil mi?**

A. Hayır — draw sayısı tek başına karar vermez. Hazır el dağılımı, nut avantajı ve blocker'lar birlikte tartılmalı. Burada açık uçlu kent draw'ları %28,7'ye %27,7 — pratikte aynı — tamamlanmış kentler ise %7,1'e %10,5 ile butondan yana. Lead için ortalamanın değil, range'in tepesinin senin tarafında olması gerekir ve bu flop tam tersi. Çalışma setinde bu koşulun gerçekten sağlandığı bir board var — [orta kartlarla bağlantılı 9-8-7](/tr/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"); orada big blind neredeyse hiç değil, %23,7 sıklıkla lead yapıyor.

**Q. Range avantajı ile nut avantajı arasındaki fark ne?**

A. Range avantajı ortalamayla ilgilidir — tüm eller boyunca kimin range'inde daha çok equity olduğu. Nut avantajı uçla ilgilidir — sıralamanın tepesini kimin tuttuğu; Q-J-T'de bu sıra kent, set, iki çift, overpair. Equity %46,7'ye %53,3 ile neredeyse eşit, ama kentler de setler de butondan yana (yalnızca iki çift %6,0'a %5,9 ile başa baş). Böyle ayrıştıklarında bahis boyutunu nut avantajı belirler.

**Q. Bu rakamları her limitte kullanabilir miyim?**

A. Koşullar tuttuğunda bir başlangıç noktası olarak: heads-up, 100bb, standart açış ve call range'leri, rake yok. Bu board özellikle derinlik arttıkça daha da tek taraflı hâle gelir — 200bb'de 3,4 puanlık kent farkı buradakinden çok daha önemlidir, çünkü sahip olamayacağın ele kaybedecek daha çok para masada kalır.
`.trim(),
};

export default POST;
