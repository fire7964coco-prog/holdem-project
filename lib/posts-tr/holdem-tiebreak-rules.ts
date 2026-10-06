import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Pokerde beraberlik nasıl bozulur — aynı elde potu kim alır?",
  seoTitle: "Pokerde beraberlik: aynı çift kim kazanır? Kicker, split pot",
  desc: "Aynı çifti açtın, potu yine de mi kaybettin? Pokerde beraberlik nasıl bozulur: kicker (yan kart), iki çift, 5. kart ve board kaynaklı split pot, 12 örnekle.",
  tldr: "Beraberlik sabit bir sırayla bozulur: önce el türü, sonra eli oluşturan kartlar, sonra yüksekten düşüğe kicker'lar. Aynı çiftte ilk kicker'ı yüksek olan kazanır; beş kartın beşi de aynıysa pot bölünür (split pot). Türler asla beraberlik bozmaz.",
  category: "hand-rankings",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "12 dk",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Poker showdown'ı: A♠ K♦ ile A♥ 9♣, board A♦ Q♠ 7♥ 3♣ 2♦ — ikisinde de As çifti var, kazananı kicker belirliyor",
  tags: ["kicker nedir", "split pot nedir", "pokerde beraberlik", "aynı çift kim kazanır", "poker kicker", "pot bölünmesi poker", "pokerde türler önemli mi", "en yüksek kent", "pokerde beraberlik olursa ne olur", "board'da kent varsa pot bölünür mü"],
  content: `
As çiftini açıyorsun. Rakip de As çiftini açıyor. Krupiye yan kartlara bir saniye bakıyor — sonra potun tamamını *ona* itiyor. ==r:Aynı çift. Nasıl kaybettin?==

Oyunları en çok duraksatan an budur, defalarca izledim: biri yarı ayağa kalkar, krupiye keçeye vurur, bütün masa bir açıklama bekler. İşte o açıklama. Texas Hold'em'deki her beraberlik, [poker el sıralamasının](/tr/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") bir kat altında duran tek ve sabit bir prosedürle çözülür — sıralama sana *hangi elin* kazandığını söyler; beraberlik kuralları ise iki el aynı türdeyken *hangi oyuncunun* kazandığını.

İşin çoğunu tek bir kart yapar: ==**kicker**== (yan kart). Bu rehber o kartın nasıl devreye girdiğini adım adım anlatıyor: aynı çift, iki çift, üçlü, kent ve floşta beraberliğin tam olarak nasıl bozulduğunu — ve herkesin unuttuğu beşinci kartı.

### Kicker nedir? (yan kart)

**Kicker (yan kart), elini oluşturan kartların dışında en iyi beşe giren ve aynı kombinasyondaki iki eli ayıran karttır.** Board K♣ 9♦ 6♠ 4♥ 2♣ olsun. K♥ Q♠ tutanın yedi kartı K♥ Q♠ K♣ 9♦ 6♠ 4♥ 2♣, en iyi beşi ==K-K-Q-9-6==: papaz çifti, ilk kicker kız. K♦ J♦ tutan rakibin yedi kartı K♦ J♦ K♣ 9♦ 6♠ 4♥ 2♣, en iyi beşi ==K-K-J-9-6==. Çiftler eşit; ilk kicker'da ==g:kız valeyi geçer==, pot K♥ Q♠'nin. Terimin kısa tanımı [poker sözlüğümüzde](/tr/glossary) de var.

---

### Bir bakışta beraberlik

:::stripe
3 | Hold'em'deki her beraberliği çözen adım
1 | İki çiftte kalan kicker yuvası
0 | Türle bozulan beraberlik sayısı
:::

---

## Pokerde beraberlik nasıl bozulur? 3 adımlık sıra

**Beraberlik sabit bir sırayla bozulur: önce el türü, sonra eli oluşturan kartlar, sonra yüksekten düşüğe kicker'lar karşılaştırılır — beş kartın beşi de hâlâ aynıysa pot bölünür.** Her showdown aynı üç kontrolden geçer:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Adım | Neyi karşılaştırırsın | Ayrıntı |
|:---:|---|---|
| **1** | El türü | Üstteki kombinasyon her zaman kazanır (floş kenti yener vb.) |
| **2** | Eli oluşturan kartlar | Tür aynıysa yüksek çift / üçlü / en yüksek kart kazanır |
| **3** | Kicker'lar, en yüksekten | İlk fark potu belirler |

</div>

1. adım işi bitirirse 2. adıma hiç geçmezsin. 3. adımda karşılaştıracak kart kalmazsa eller aynıdır ve ==g:pot bölünür== — çiplerin sonra nasıl paylaştırıldığı (artan çip, yan potlar) ayrı bir konu; all-in'lerde yan pot işini [all-in kuralları ve yan potlar](/tr/blog/holdem-all-in-rules) yazısında anlattım. Önce 3. adımın kart bırakmadığı ana, yani split pot'a bakalım; sonra tartışmaların asıl çıktığı 2. ve 3. adıma geçeceğiz.

---

## Split pot (pot bölünmesi) nedir, ne zaman olur?

**Split pot (pot bölünmesi), showdown'da iki ya da daha fazla oyuncunun en iyi beş kartı değer değer aynı çıktığında potun bu oyuncular arasında eşit paylaştırılmasıdır. Türler bu eşitliği bozmaz. Çoğu zaman iki yoldan gelir: board'un kendisi herkesin en iyi eli olduğunda ya da hole kartların, board'un zaten verdiği kicker'ların altında kalıp oyuna giremediğinde.**

![İnfografik: A-K-Q-J-10 board'u herkesin en iyi beşi, bu yüzden 9-7 eli onu yenemez ve pot bölünür](/images/holdem-tiebreak-best5.webp "Yedi karttan en iyi beş: board zaten en iyi else, hole kartların dışarıda kalır")

Hole kartların board'un kendi en iyi beşini geçemiyorsa oyuna girmezler — bu herkes için geçerliyse pot bölünür. Yukarıdaki board'a bak: A♠ K♥ Q♣ J♦ 10♠, Broadway zaten tamam. Senin 9♥ 7♠'in bir kent *yapıyor* — K-Q-J-10-9 — ama keçede duran As yüksek kentten **düşük**, yani en iyi beşin board'un kendisi. Herkesinki de öyle.

Daha ince versiyonu, elinin oynadığı ama kicker'ının oynamadığı durumdur. Board A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ karşısında A♦ 2♦. İkisi de As'ı eşler ve üç kicker yuvasının üçü de board'dan dolar — iki oyuncu için de A-A-K-Q-J. 3 ve 2 ölü ağırlık; en iyi beşler birebir aynı, ==g:pot bölünür.==

![İnfografik: A-K-Q-J-9 board'unda A-3 de A-2 de A-A-K-Q-J oynar, aynı eller potu böler](/images/holdem-tiebreak-split.webp "En iyi beşler değer değer eşleştiğinde pot bölünür — türler asla beraberlik bozmaz")

Bu runout'ları river bahsinden önce görmek başlı başına bir beceri. Kartları kimin önce açtığı, muck ve "kartlar konuşur" kuralı ise [showdown kuralları](/tr/blog/holdem-showdown-rules "thumb:/images/holdem-showdown-rules-hero.webp") yazısında.

---

## Aynı çift olursa kim kazanır?

**Aynı çiftte ilk kicker'ı yüksek olan kazanır. Çiftin üç kicker'ı vardır ve en yüksekten başlayarak teker teker karşılaştırılır — ilk fark potu belirler. Çift de üç kicker da eşitse pot bölünür; türlere hiç bakılmaz, elindeki yan kartın kaç olduğu da ancak en iyi beşe girdiği sürece önemlidir.**

Kapak fotoğrafındaki ele bak:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Oyuncu A:** A♠ K♦  ·  **Oyuncu B:** A♥ 9♣
**Board:** A♦ Q♠ 7♥ 3♣ 2♦

| Oyuncu | En iyi beş | Kicker'lar | Sonuç |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Kazanır** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Kaybeder |

</div>

İkisinde de As çifti var, o yüzden kicker'lar sırayla kapışır: ==g:K, Q'yu yener — iş biter.== B'nin dokuzlusu ikinci kicker olarak hâlâ elin *içinde*, ama karşılaştırma oraya kadar hiç gelmez.

Dikkat et: B'nin en yüksek kicker'ı elindeki 9 değil, **board'daki** kız. ==r:Kicker ancak gerçekten en iyi beş kartına giriyorsa sayılır== — board'daki daha yüksek bir kart, elindeki kartı listede aşağı iter. Başlangıçtaki ikinci kartının As'ın kendisi kadar önemli olmasının nedeni de bu: burada A-K de A-9 da "As çifti", ama yalnızca biri kazanıyor ([başlangıç eli tablosu](/tr/hand-chart)).

---

## Her el için beraberlik kuralları

**Her el türünün kendi karşılaştırma sırası var — bazıları kicker'a gider, bazıları tamamen eli oluşturan kartlarla çözülür.** Sağdaki rozet kicker'ın devreye girip girmediğini gösterir:

:::tiebreak
Royal Floş|İki royal ancak board'un kendisi royal'ken olur — herkes bölüşür|-Kicker yok
Sıralı Floş|Yalnızca en yüksek kart|-Kicker yok
Kare|Karenin değeri → 5. kart|+Kicker geçerli
Full|Üçlünün değeri → çiftin değeri|-Kicker yok
Floş|Beşi de, yüksekten düşüğe|-Kicker yok
Kent|Yalnızca en yüksek kart|-Kicker yok
Üçlü|Üçlünün değeri → 2 kicker|+Kicker geçerli
İki Çift|Yüksek çift → düşük çift → kicker|+Kicker geçerli
Çift|Çiftin değeri → 3 kicker|+Kicker geçerli
Yüksek Kart|Beşi de, yüksekten düşüğe|+Kicker geçerli
:::

Masada en çok tartışma çıkaran üç satır:

- **Üçlünün iki kicker'ı vardır, önce yüksek olanı.** A♣ A♥ 7♦ 5♣ 2♠ board'unda A♠ J♠ tutan oyuncu A-A-A-==g:J==-7 yapar ve A♦ 10♦'nin A-A-A-==r:10==-7'sini yener — vale onluyu geçer, ortaktaki 7'ye hiç bakılmaz bile.
- **Full'ün kicker'ı yoktur.** Önce üçlünün değeri, sonra çift: K-K-K-A-A, çift sayesinde K-K-K-Q-Q'yu yener.
- **Floşlar beş kartın beşiyle karşılaştırılır — ==r:asla türle değil==.** As yüksek floş papaz yüksek floşu yener; değerler birebir aynıysa pot bölünür. Floş ile kentin tam kapışmasını [el sıralaması](/tr/blog/holdem-hand-rankings) rehberindeki hızlı yanıtlar tablosunda bulursun.

---

## İki oyuncuda da iki çift varsa kim kazanır?

**Çiftler toplanmaz: önce yüksek çift, sonra düşük çift, sonra 5. kart karşılaştırılır.** Kart değerlerini toplayıp büyük toplamı kazandırmak masada sık duyulan ama yanlış bir yöntemdir: papaz ve ikili (K-K-2-2), kız ve valeyi (Q-Q-J-J) yener, çünkü karşılaştırma yüksek çiftte biter. İki çiftin tam olarak bir kicker'ı vardır; iki çift de eşitse potu o tek beşinci kart belirler.

**K♦ 9♣ 9♠ 5♦ 2♥** board'unda K♠ Q♦, K♠ K♦ 9♣ 9♠ ==g:Q♦== yapar; K♥ J♥ ise K♥ K♦ 9♣ 9♠ ==r:J♥==. İkisi de papaz ve dokuzlu, yani işi tek kicker çözer: ==g:kız valeyi yener.==

Asıl para kaybettiren tuzak ise ==r:**counterfeit**== (elin değersizleşmesi):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Sen:** 5♠ 4♠  ·  **Rakip:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — senin iki çiftin (beşli ve dörtlü) rakibin papaz çiftinin önünde
**Turn 9♠, river 9♥** — son board 5♦ 4♥ K♣ 9♠ 9♥

| Oyuncu | En iyi beş | El |
|--------|-----------|------|
| Sen | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Dokuzlu ve beşli — dörtlülerin gitti |
| Rakip | K♦ K♣ 9♠ 9♥ A♣ | **Papaz ve dokuzlu — kazanır** |

</div>

Board'un dokuzlu eşlenmesi *iki oyuncuya da* daha iyi bir ikinci çift verdi — senin dörtlülerin ==r:counterfeit== oldu ve geriye tek karşılaştırma kaldı: yüksek çift, papaz dokuzluyu geçer. Flop'ta önde olan el, iki oyuncu da kendi kartını geliştirmeden potu kaybeder.

---

## Daha yüksek kent olur mu? (Wheel nerede durur)

**Evet — kentler yalnızca en yüksek kartlarına göre sıralanır ve As'ın düşük oynadığı wheel oyunun en düşük kentidir.**

4♦ 3♣ 2♠ K♦ Q♥ board'unda A♠ 5♠ tutan oyuncu wheel yapar: 5-4-3-2-A. 6♥ 5♥ tutan oyuncu 6-5-4-3-2 yapar. ==r:Wheel'de As *düşük* oynar==, yani A-2-3-4-5 kent merdiveninin en dibindedir — ==g:altı yüksek kent kazanır.== En yüksek kartı aynı olan iki kent birebir aynıdır ve aynı eller bölünür.

Merdivenin öbür ucunda ==**pokerin en yüksek kenti Broadway'dir — A-K-Q-J-10**==. Hiçbir kent onu yenemez (floş ve üstündeki eller yine yener); wheel en dipte durduğu için oyundaki her kent, yalnızca en yüksek kartına göre bu ikisinin arasında bir yere oturur.

Wheel'in *yapamadığı* iki şey: As ortadan dönemez (Q-K-A-2-3 hiçbir şey değildir) ve aynı anda hem yüksek hem düşük olamaz. Floşlar paralel kurala uyar — beş kartın beşi yukarıdan karşılaştırılır, türlerin önemi yoktur.

---

## Board'da kent varsa pot hep bölünür mü?

**Hayır. Board'daki kent herkesin elidir, ama hole kartıyla bu kentin bir üst ucunu tamamlayan oyuncu daha yüksek bir kent yapar ve potu tek başına alır. Pot yalnızca kimse board'un kentini geçemediğinde ya da geçenler aynı en yüksek karta ulaştığında bölünür. Kentin alt ucuna eklenen kart ise hiçbir işe yaramaz.**

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Board:** 5♥ 6♣ 7♠ 8♦ 9♣ — dokuzlu kent board'da, türler karışık, floş yok. Üç oyuncu showdown'da:

| Oyuncu | Yedi kart | En iyi beş | Sonuç |
|--------|-----------|-----------|--------|
| 10♦ 2♥ | 10♦ 2♥ 5♥ 6♣ 7♠ 8♦ 9♣ | ==g:10-9-8-7-6== | **Onlu kent — kazanır** |
| K♠ 3♦ | K♠ 3♦ 5♥ 6♣ 7♠ 8♦ 9♣ | 9-8-7-6-5 | Board'un kenti |
| Q♥ 4♣ | Q♥ 4♣ 5♥ 6♣ 7♠ 8♦ 9♣ | 9-8-7-6-5 | Board'un kenti (4 alt uca eklenir, 8-7-6-5-4 daha düşük) |

</div>

Karşılaştırma: onlu kent dokuzlu kenti yener, potun tamamı 10♦ 2♥'nin. Masada on tutan kimse olmasaydı K♠ 3♦ ile Q♥ 4♣'ün en iyi beşi birebir aynı olurdu — ikisi de board'un 9-8-7-6-5'ini oynar, papaz da kız da dışarıda kalır — ve ==g:pot bölünürdü.== İki oyuncunun da on tutması tek başına beraberlik yaratmaz: biri J-10 tutuyorsa valeli kentle kazanır. Pot ancak iki oyuncunun en iyi beş kartı değer değer aynıysa bölünür.

Kendi board'unda bu ihtimalleri görmek istersen elleri ve board'u [poker hesaplayıcısına](/tr/calculator) gir: her elin kazanma yüzdesinin yanında beraberlik yüzdesini de ayrıca gösterir.

---

## Board'da kare varsa kicker oynar mı?

**Evet — dört kart board'daysa herkesin karesi aynıdır ve potu beşinci kart belirler: herkes board'un beşinci kartı ile kendi iki hole kartı arasından en yükseğini kicker olarak kullanır, en yüksek kicker kazanır; eşitse pot bölünür. Board'un beşinci kartı As ise ondan yüksek kart olmadığı için herkes aynı beşi oynar ve pot bölünür. Cep çiftin çift olması işe yaramaz: kare fulün üstündedir, cep çift ancak beşinci karttan yüksekse kicker olarak sayılır.**

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Board:** 4♣ 4♦ 4♥ 4♠ K♣ — dörtlü karesi board'da, beşinci kart papaz.

| Oyuncu | Yedi kart | En iyi beş | Sonuç |
|--------|-----------|-----------|--------|
| A♥ 7♠ | A♥ 7♠ 4♣ 4♦ 4♥ 4♠ K♣ | 4-4-4-4-==g:A== | **As kicker — kazanır** |
| Q♦ Q♣ | Q♦ Q♣ 4♣ 4♦ 4♥ 4♠ K♣ | 4-4-4-4-==r:K== | Kızlar papazın altında, board oynar |
| 9♥ 2♦ | 9♥ 2♦ 4♣ 4♦ 4♥ 4♠ K♣ | 4-4-4-4-==r:K== | Board'u oynar |

</div>

Karşılaştırma: dört dörtlü herkeste ortak, tek fark beşinci kart — ==g:As papazı geçer==, pot A♥ 7♠'nin. As tutan kimse olmasaydı Q♦ Q♣ ile 9♥ 2♦ aynı 4-4-4-4-K'yi oynar ve potu bölerdi. Board'un beşinci kartı As olsaydı ise elinde ne olursa olsun pot herkes arasında bölünürdü, çünkü As'tan yüksek kicker yoktur.

Masada bu runout'ta en sık gördüğüm sahne, cep çifti olan oyuncunun kartlarını kendinden emin açıp potu beklemesiydi. Cep çiftin çift olması burada bir şey katmaz; tek soru, board'un beşinci kartından yüksek bir kartın kimde olduğudur.

---

## Pokerde 5. kart önemli mi?

**Evet — iki elin ilk dört kartı birebir aynıysa beşinci kart potun tamamıdır.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, A♠ 8♠ karşısında A♦ 7♦. İkisinde de As çifti var. Birinci kicker: board'daki K — berabere. İkinci kicker: board'daki Q — berabere. Üçüncü kicker: ==g:8, 7'yi yener.== Elin kelimenin tam anlamıyla beşinci kartı, üstündeki her şeyi belirledi.

Aynı mantık board'da kare olan potlarda da işler: herkes dört kartı paylaşır, yani beşinci kart showdown'ın ta kendisidir. Yüksek kart ve floş beraberliklerinde de işler; orada son karta kadar her kart karşılaştırılır. Beşinci kart ancak board onu geçtiğinde önemini yitirir — yukarıdaki split pot örneğinde ve board'da karenin yanındaki papazı geçemeyen ellerde olduğu gibi.

---

## Pokerde türler (renk) önemli mi?

**Hayır — kimin kazandığına karar verirken önemli değil. Texas Hold'em'de türün tek bir işi vardır: aynı türden beş kart floş yapar. Bunun dışında türün değeri yoktur; değer değer eşleşen iki el her zaman potu böler ve hiçbir kart türü yüzünden bir diğerini geçmez.**

«Pokerde renk sıralaması var mı?» sorusunun tam cevabını, türlerin el sıralamasındaki yeriyle birlikte [poker el sıralaması](/tr/blog/holdem-hand-rankings) rehberinde verdim; burada yalnızca beraberliğe etkisine bakıyoruz.

Bu soru sürekli gelir çünkü pokerde tür sıralaması gerçekten var — sadece bu oyunda el sıralaması için hiç kullanılmaz. Stud ve razz onu bring-in'i kimin yapacağına ve bölünemeyen çipin kime gideceğine karar vermek için kullanır. Hold'em ikisi için de kullanmaz.

En temiz kanıt, *bölünemeyen* o tek çip. 2026 WSOP turnuva kuralları şöyle der: ==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*== (Kural 73) — yani butonlu oyunlarda iki veya daha fazla high ya da low el varsa artan çip butonun solundaki ilk koltuğa gider. Pot fiziksel olarak eşit bölünmediğinde bile kural **koltuğa** bakar, türe değil — aynı kuralın ikinci yarısındaki türe dayalı yöntem yalnızca stud ve razz için yazılmıştır.

Bilmeye değer bir şey daha: Hold'em'de iki floş zaten her zaman *aynı* türdendir, çünkü beş ortak kartın hepsi paylaşılır ve bir board aynı anda üç kupa ve üç maça taşıyamaz. Yani "benim maçalarım senin kupalarını yener" kaybettiğin bir kural değil — dağıtılması imkânsız bir el.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-hand-rankings | Poker el sıralaması — en güçlüden en zayıfa | /images/holdem-hand-rankings-hero.webp
/tr/blog/holdem-showdown-rules | Kartı önce kim açar? Showdown ve muck kuralları | /images/holdem-showdown-rules-hero.webp
:::

## Sıkça sorulan sorular

**Q. Pokerde beraberlik nasıl bozulur?**

A. Sırayla üç kontrol: el türü, sonra eli oluşturan kartlar, sonra yukarıdan aşağıya kicker'lar — ilk fark işi bitirir. Karşılaştırmaya neyin hiç girmediği de aynı derecede önemli: türler, son bahsi kimin yaptığı, butona kimin daha yakın oturduğu ve kimin ne kadar çip koyduğu. Beş kart değer değer eşleşiyorsa, bahiste ne olmuş olursa olsun krupiye potu böler.

**Q. Kicker nedir, aynı çiftte kim kazanır?**

A. Kicker, eli oluşturmayan ama beraberliği bozan yan karttır; aynı çiftte yüksek kicker kazanır — ama önce hangi kartlarının en iyi beşe gerçekten girdiğine bak. A-Q-7-3-2 board'unda As çiftiyle A-9 tutan oyuncu A-A-Q-9-7 oynar: board'daki kız dokuzlunun önüne geçer, dokuzlu yalnızca *ikinci* kicker'dır. A-K karşısında pot ilk yuvada zaten belli olur ve o dokuzlu hiç karşılaştırılmaz. Üç kicker yuvası vardır; potların çoğu ilkinde biter.

**Q. Kicker her zaman oynar mı?**

A. Hayır. Kent, floş, full ve sıralı floşta kicker yoktur; bu ellerde beş kartın tamamı elin kendisidir. Çift, iki çift, üçlü, kare ve yüksek kartta ise kicker vardır ama yalnızca en iyi beşe giriyorsa sayılır — board'da kare ve yanında papaz varken elindeki kız hiç oynamaz.

**Q. İki oyuncuda da iki çift varsa kim kazanır?**

A. Önce yüksek çift, sonra düşük çift, sonra tek kicker — yani ikinci çift çok daha küçük olsa da A-A-3-3 (Aslar ve üçlüler), K-K-Q-Q'yu (papazlar ve kızlar) yener. İnsanları yakalayan durum, K-K-9-9-5 gibi iki kez eşlenmiş ve aynı türden üç kart taşımayan, yani kimsenin floş yapamadığı bir board: biri papaz, dokuzlu, cep beşli ya da dokuzludan büyük bir cep çift tutmuyorsa herkesin iki çifti aynıdır, el tek bir kicker'a iner ve masadaki en iyi hole kart potu alır — kimsenin hole kartı board'un beşini geçemiyorsa herkes board'u oynar ve pot bölünür. İki çiftin tam olarak bir kicker'ı vardır, asla iki değil.

**Q. İki oyuncuda aynı üçlü varsa kim kazanır?**

A. Üçlünün iki kicker'ı vardır ve önce yüksek olanı karşılaştırılır — iki oyuncu aynı üçlüyü yaparsa yan kartı yüksek olan kazanır. Dokuzlu üçlüsünde 9-9-9-A-K, 9-9-9-A-Q'yu yener çünkü ikinci kicker (papaz) kızı geçer. Üçlü de iki kicker da eşleşirse pot bölünür. (Cep çiftten gelen set neredeyse hiç berabere kalmaz, çünkü o çifti yalnızca bir oyuncu tutabilir.)

**Q. Pokerde 5. kart önemli mi?**

A. Evet — ve emin olduğun bir potu kaybetmenin en yaygın yolu budur. Potun tamamını son karta bağlayan klasik durumlar: çiftin üçüncü kicker'ı, iki çiftin tek kicker'ı, floşun en düşük kartı ve board'daki karenin yanındaki yan kart. Ancak board'un kendi kartları elindeki yan kartı geçtiğinde önemini yitirir — bazen bütün board oynadığı ve hole kartların tamamen dışarıda kaldığı için, bazen de bir hole kart oynayıp diğeri hiç sayılmadığı için: A♥ K♣ Q♦ J♠ 9♥ board'unda A♠ 3♠ ile A♦ 2♦ berabere biter, ikisi de A-A-K-Q-J oynar.

**Q. Pokerde As 1 olarak kullanılabilir mi?**

A. Evet, ama yalnızca A-2-3-4-5 kentinde ("wheel"); orada en düşük kart olarak oynar — bu da wheel'i oyunun en düşük kenti yapar. As ortadan dönemez: Q-K-A-2-3 kent değildir.

**Q. Başka bir oyuncudan daha yüksek kent yapabilir misin?**

A. Evet; pratikte kentin büyük kısmı zaten board'dayken olur. 5♦ 6♣ 7♠ 8♥ 2♦ board'unu düşün: 9♣ 4♠ tutan oyuncu 9-8-7-6-5 yapar, 4♥ 3♦ tutan oyuncu aynı dört karttan 8-7-6-5-4 yapar. İkisi de "kent yaptı"; sayılan tek şey en yüksek karttı, potu dokuzlu alır. En yüksek kartlar eşitse kent aynıdır ve pot bölünür.

**Q. İki oyuncuda aynı kent varsa kim kazanır?**

A. En yüksek kartı büyük olan kent kazanır — Q-J-10-9-8, J-10-9-8-7'yi yener, çünkü kent yalnızca en yüksek kartıyla sıralanır ve kicker'ı yoktur. İki kentin en yüksek kartı aynıysa eller birebir aynıdır ve pot bölünür. Bu en çok kentin büyük kısmı board'dayken ve iki oyuncu da aynı ucu tamamladığında olur.

**Q. İki oyuncuda da floş varsa kim kazanır?**

A. Floşları yukarıdan aşağıya kart kart karşılaştır: As yüksek floş papaz yüksek floşu yener; en yüksek kartlar eşitse bir sonraki karta geçersin ve beşine kadar böyle devam eder. Türler asla beraberlik bozmaz, yani beş değerin beşi de aynıysa pot bölünür. (Hold'em'de iki floş her zaman aynı türdendir, çünkü oyuncular board'u paylaşır.)

**Q. İki oyuncuda aynı full varsa kim kazanır?**

A. Önce üçlüyü karşılaştır — yüksek üçlü kazanır, yani Aslar daha büyük görünse de K-K-K-2-2, Q-Q-Q-A-A'yı yener. Çift ancak üçlüler aynıysa karşılaştırılır. Full'ün kicker'ı yoktur; üçlü de çift de eşleşirse pot bölünür.

**Q. İki oyuncuda da sıralı floş varsa ne olur?**

A. En yüksek kartına göre yüksek olan sıralı floş kazanır — kız yüksek sıralı floş, dokuz yüksek olanı yener. Royal floş, As yüksek sıralı floştan başka bir şey değildir; bu yüzden diğer bütün sıralı floşları yener. En yüksek kartlar aynıysa el aynıdır ve pot bölünür.

**Q. Texas Hold'em'de türler hiç beraberlik bozar mı?**

A. Hayır — türler asla potu belirlemez. Hold'em masasında türün ortaya çıktığı yer, bir koltuğu belirleyen kart çekilişleridir. En bilineni buton çekilişi: cash oyunlarında ve çoğu kart salonunun ev kurallarında dealer butonunun nereden başlayacağını belirlemek için herkes bir kart çeker; iki kart değer olarak eşitse tür sıralaması karar verir. (WSOP turnuvaları açılış çekilişini atlar: ==Turnuva Kuralı 85== butonu krupiyenin sağındaki ilk stack'ten başlatır ve buton çekilişini yalnızca üç, iki ve bir masa kaldığında yapar.) Turnuva direktörleri dağılan bir masanın oyuncularını da her birine bir kart vererek yerleştirir; TDA örneğinde ilk koltuk ==türe göre en yüksek kartı== alana verilir. Her iki durumda da seçilen bir *koltuktur*, asla bir el değil. WSOP turnuva kural kitabının el kuralları arasında tek tür sıralaması stud ve razz'a aittir. İki en iyi beş değer değer eşleşiyorsa türler ne olursa olsun pot bölünür.

**Q. Pokerde beraberlik olursa ne olur?**

A. İki ya da daha fazla oyuncunun en iyi beş kartı değer değer aynıysa pot bu oyuncular arasında eşit bölünür — buna "chop" ya da split pot denir. Kimin daha çok bahis yaptığı, türler ya da kartı önce kimin açtığı sonucu değiştirmez. All-in'lerde potun katmanlara ayrıldığı durumlar [all-in kuralları](/tr/blog/holdem-all-in-rules) yazısında.

**Q. Bölünemeyen (artan) çip kime gider?**

A. Pot eşit bölünemediğinde artan çip için WSOP turnuva kuralları (Kural 73) butonlu oyunlarda butonun solundaki ilk koltuğu gösterir; türe bakılmaz. Cash masalarında ve diğer salonlarda ev kuralına göre değişebilir, emin değilsen krupiyeye sor.

**Q. Pokerde beraberlik (split pot) mümkün mü?**

A. Evet, ama sık değil. Gerçek beraberlik ancak iki veya daha fazla oyuncunun en iyi beş kartı değer olarak birebir eşleştiğinde olur — en çok board'un kendisi en iyi el olduğunda ("board'u oynamak") ya da kimsenin hole kartlarının geliştiremediği ortak bir kent veya floşta. O zaman pot eşit bölünür. Kicker'lar tam da olası beraberliklerin çoğunu daha bölünmeye varmadan bozmak için vardır.

---

## Akılda kalacak 3 şey

1. Her beraberlik aynı prosedürden geçer: ==**el türü → eli oluşturan kartlar → kicker'lar → bölünme**== — istisna yok, tür yok.
2. Kicker ancak ==g:en iyi beşine giriyorsa== sayılır — board kartları onun yerini alabilir, iki kez eşlenmiş bir board da iki çiftini tamamen counterfeit edebilir.
3. Kentler en yüksek kartlarına göre sıralanır (wheel en düşüğü), floşlar beş kartın beşiyle karşılaştırılır — elleri hiçbir şey ayırmıyorsa pot bölünür.

Tam sıralamayı [poker el sıralaması](/tr/blog/holdem-hand-rankings) rehberiyle pekiştir, showdown'da kartların hangi sırayla açıldığını [showdown kuralları](/tr/blog/holdem-showdown-rules) yazısında gör, all-in'de potun nasıl katmanlara ayrıldığını da [all-in kuralları](/tr/blog/holdem-all-in-rules) yazısında oku.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker el sıralaması — en güçlüden en zayıfa</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">10 elin tamamı, olasılıklar ve board soruları</div>
  </a>
  <a href="/tr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Kartı önce kim açar? Showdown kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Gösterme sırası, muck ve slow roll</div>
  </a>
  <a href="/tr/blog/holdem-all-in-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">All-in</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">All-in kuralları ve yan potlar</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Ana pot, yan pot ve kimin neyi kazanabileceği</div>
  </a>
  <a href="/tr/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Terimler</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pokerde rest, bop, nuts ne demek?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Masada duyduğun poker terimleri, tek tek</div>
  </a>
</div>
`.trim(),
};
