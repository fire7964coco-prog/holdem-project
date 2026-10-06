import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "Poker terimleri: Texas Hold'em masasında duyacağın her kelime ve anlamı",
  seoTitle: "Nuts, tilt, ICM ne demek? Poker terimleri sözlüğü",
  desc: "Masada duyduğun poker terimleri sade Türkçeyle: bahis hareketleri, pozisyonlar, eller, argo, ICM ve tilt. En çok karıştırılan ikililer de en başta.",
  tldr: "Bu sözlük, Texas Hold'em masasında gerçekten duyacağın poker terimlerini karşına çıktıkları duruma göre gruplar: bahis hareketleri, pozisyonlar, eller ve board, oyuncu tipleri, para ve oyun formatları, masa durumları. Önce en çok karıştırılan ikililerle başla (check ile call, set ile trips, cooler ile bad beat), sonra ihtiyacın olan kategoriye geç. Derin rehberi olan terimler doğrudan o yazıya bağlanıyor.",
  category: "glossary",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "12 dk",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "Yeşil çuha üzerinde çipler, dealer butonu ve açık ortak kartlarla bir Texas Hold'em masası — poker dilini temsil ediyor",
  tags: [
    "poker terimleri",
    "poker terimleri ve anlamları",
    "texas holdem terimleri",
    "icm nedir",
    "tilt nedir",
    "poker argosu",
    "pokerde nuts ne demek",
    "pokerde kicker nedir",
  ],
  content: `
İlk canlı oyunuma oturduğumda masa başka bir dil konuşuyor gibiydi. Biri "under the gun"daydı, bir başkası "cutoff'a 3-bet atmıştı", krupiye bana "run it twice" yapmak isteyip istemediğimi sordu, papazlarla kaybettiğimde de "bu bad beat bile değil, düpedüz cooler" dediler. Anlamış gibi kafa salladım. Anlamamıştım.

Pokerin kendine ait bir sözlüğü var ve onu bilmek sana iki şey kazandırır: masada "fish" gibi görünmezsin ve sana para kazandıracak stratejiyi gerçekten takip edebilirsin. Oyunun temellerinde hâlâ yeniysen önce [Texas Hold'em kurallarına](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") göz at. Bu sözlük, Texas Hold'em masasında gerçekten geçen poker terimlerini topluyor — hepsini A'dan Z'ye dev bir listeye yığmak yerine ==g:onlarla gerçekte nasıl karşılaştığına göre== gruplanmış halde. En çok karıştırılan terimlerle başla, sonra ihtiyacın olan kategoriye geç. Bir terimin ayrıntılı rehberi varsa doğrudan oraya giden linki bulacaksın.

---

### Sözlük, bir bakışta

:::stripe
6 | Kategori — karşılaştığın duruma göre gruplandı
90+ | Sade Türkçeyle tanımlanmış terim
8 | En çok karıştırılan ikili, önce bunlar
→ | Önemli terimlerden derin rehberlere link
:::

---

## En çok karıştırılan poker terimleri hangileri?

En çok karıştırılan poker terimleri sekiz ikilidir: check ile call, blind ile ante, set ile trips, cooler ile bad beat, value bet ile blöf, pot oranı ile implied odds, VPIP ile PFR ve 3-bet'in nasıl sayıldığı. Masada en çok kafa karışıklığını — ve en pahalı hataları — bunlar yaratır. Sadece bir avuç terimi netleştireceksen, aşağıdaki tablodan başla.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Karıştırılan ikili | Fark |
|:---|:---|
| **Check vs Call** | Check **hiç çip riske atmaz** (yalnızca önünde karşılaman gereken açık bir bahis yoksa); call mevcut bahsi **birebir görür**. |
| **Blind vs Ante** | Blind'lar **pozisyona bağlı** zorunlu bahislerdir (SB/BB); ante potu başlatır — geleneksel olarak **herkesten** alınır, ama bugün çoğu turnuva tek bir koltuğun ödediği big blind ante kullanır. |
| **Set vs Trips** | İkisi de Üçlü (Three of a Kind) — **set** elindeki pocket pair ile; **trips** tek bir hole kart + board'daki bir çiftle yapılır. |
| **Cooler vs Bad Beat** | Cooler = fold edilemeyecek kadar güçlü bir elin daha büyük bir ele çarpması (dar anlamda, para ortaya girerken zaten gerideydin); bad beat = para girerken büyük favoriydin ve rakip sonradan kart tutup seni geçti. |
| **Value bet vs Blöf** | Value bet **daha zayıf bir elden call** ister; blöf **daha iyi ellerin fold etmesini** ister. |
| **Pot oranı vs Implied odds** | [Pot oranı (pot odds)](/tr/blog/holdem-pot-odds) yalnızca **şu an pottaki** çipleri sayar; implied odds **ileride kazanacaklarını** da hesaba katar. |
| **VPIP vs PFR** | VPIP = ne sıklıkla **oynadığın**; PFR = ne sıklıkla **yükselttiğin**. PFR asla VPIP'i geçemez. |
| **3-bet sayımı** | Blind'lar 1. bahis, açılış raise'i 2. bahistir; yani **re-raise 3-bet'tir** (ilk raise değil). |

</div>

---

![Koyu yeşil çuha üzerinde altı kutucuklu poker terimleri haritası, her kutuda altın bir ikon — Actions, Positions, Hands, Players, Money ve Slang](/images/holdem-glossary-categories.webp "Bu sözlüğün düzenlendiği altı grup — alfabeye göre değil, içinde bulunduğun duruma göre göz at")

## Check, call, raise ne demek? Bahis hareketleri terimleri

Check, önünde bahis yokken çip koymadan sırayı geçmektir; call mevcut bahsi görmek, raise ise bahsi yükseltmektir. Fold elini bırakıp pottan çekilmek, all-in tüm çiplerini ortaya sürmektir. Bunların üstüne limp, 3-bet, c-bet, check-raise gibi terimler, sıra sende olduğunda fiziksel olarak yapabileceğin her şeyi tarif eder. İşe yeni başladıysan önce [bahis hareketleri rehberine](/tr/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp") bak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Check** | Bahis yapmadan sırayı geçmek — yalnızca önünde karşılaman gereken açık bir bahis yoksa. |
| **Bet (bahis)** | Bir bahis turunda pota ilk çipi koyan olmak. |
| **Call (görmek)** | Elde kalmak için mevcut bahsi birebir görmek. |
| **Raise (yükseltmek)** | Mevcut bahsi artırmak; diğerlerini ya daha fazlasını görmeye ya da fold etmeye zorlar. |
| **Fold (yatmak)** | Elini bırakıp pot üzerindeki her hakkından vazgeçmek. |
| **All-in** | Tüm çiplerini ortaya sürmek; potun yalnızca karşılayabildiğin kısmını kazanabilirsin (bkz. [yan pot](/tr/blog/holdem-all-in-rules)). |
| **Limp** | Preflop'ta raise yerine sadece big blind'ı call ederek elde kalmak — genelde zayıf, pasif bir oyun. |
| **Open (open-raise)** | Pota raise ile giren ilk oyuncu olmak. |
| **3-bet** | Açılıştan sonraki re-raise (blind'lar birinci bahis sayıldığı için üçüncü bahis). |
| **4-bet** | Bir 3-bet'e yapılan re-raise. |
| **C-bet** | Preflop'ta raise yapan oyuncunun flop'ta yaptığı "devam bahsi" (continuation bet). |
| **Donk bet** | Pozisyon dışındayken bir önceki street'in agresörüne önden bahis yapmak (eskiden hata sayılırdı, bugün düşük frekanslı bir araç). |
| **Value bet** | Daha zayıf bir elden call almayı umarak güçlü elle yapılan bahis. |
| **Blöf / Semi-blöf** | Blöf, daha iyi elleri fold ettirmek için zayıf elle bahis yapmaktır; semi-blöf aynısını hâlâ gelişebilecek bir draw ile yapar. |
| **Check-raise** | Önce check yapıp rakip bahis koyunca yükseltmek — güçlü ve aldatıcı bir hat (modern salonlarda yasal). |
| **Min-raise** | Yasal olan en küçük yükseltme. |
| **String bet** | Önceden beyan etmeden daha fazla çip için geri uzanmak — yalnızca ilk hareket sayılır (genelde call olarak değerlendirilir). Önce raise miktarının tamamını söylersen parça parça hareket yasal olur; güvenli alışkanlık, çiplere uzanmadan önce miktarı söylemek ya da raise'in tamamını tek hareketle itmektir. |
| **Jam / Shove** | All-in gitmek. |
| **Snap call** | Anında, hiç düşünmeden yapılan call. |
| **Hero call** | Rakibin blöf yaptığını okuduğun için zayıf bir elle call etmek. |

</div>

---

## UTG, buton ve cutoff nedir? Pozisyon terimleri

Pozisyon terimleri masada nerede oturduğunu, yani ne zaman hareket edeceğini anlatır. Buton (BTN) postflop'ta en son oynar ve masanın en iyi koltuğudur; UTG preflop'ta ilk oynar ve en sıkı açılış range'ini ister. Cutoff butonun sağında, hijack ve lojack ise orta pozisyondadır. Son oynamak kalıcı bir avantajdır, çünkü karar verirken herkesin ne yaptığını görürsün.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Buton (BTN)** | Dealer pozisyonu; postflop'ta **en son** oynar — masanın en iyi koltuğu. |
| **Small blind (SB)** | Üç ya da daha fazla oyuncu varken butonun solundaki zorunlu bahis; postflop'ta ilk oynar (postflop'un en kötü koltuğu). Heads-up'ta SB butondadır ve postflop'ta en son oynar. |
| **Big blind (BB)** | İki blind'ın büyüğü; limitler blind miktarlarıyla adlandırılır ($1/$2) ve bir big blind, stack ölçmenin standart birimidir. |
| **UTG (under the gun)** | Preflop'ta ilk oynayan — en sıkı açılış range'ini ister. |
| **Cutoff (CO)** | Butonun sağı; ikinci en iyi koltuk, blind çalmak için ideal. |
| **Hijack (HJ)** | Butonun iki sağı; orta pozisyon (MP), cutoff'tan hemen önce. |
| **Lojack (LJ)** | Hijack'in sağı; o da orta pozisyon (MP) — etiketler masa büyüklüğüne göre kayar. |
| **Erken / Orta / Geç** | Ne kadar erken oynadığına göre gruplar — erken = en sıkı, geç = en geniş ve en kârlı. |
| **Pozisyonda / Pozisyon dışında** | Rakibinden sonra oynuyorsan *pozisyondasın*, önce oynuyorsan *pozisyon dışındasın*. |

</div>

Her pozisyondan hangi elleri açabileceğini görmek için [başlangıç eli tablosuna](/tr/hand-chart) bak.

---

## Nuts, set ve trips nedir? El ve board terimleri

![Yeşil çuha üzerinde altın bir dealer butonu, yüzü kapalı iki hole kart ve K♦ 7♣ 2♠ flop'unu gösteren infografik](/images/holdem-button-dealer-board.webp "Board ile hole kartların birleşerek en iyi beş kartlık elini oluşturur — poker sözlüğünün büyük kısmı tam olarak bunu anlatır")

Nuts, o anki board'da mümkün olan en iyi eldir. Set, elindeki pocket pair'in board'daki bir kartla Üçlü yapmasıdır; trips ise tek bir hole kartının board'daki bir çiftle Üçlü yapmasıdır. Bu bölümdeki terimler kartların kendisini ve onlarla ne yaptığını anlatır: hole kartlar, ortak kartlar, kicker, draw'lar ve gutshot gibi. Street'lerin akışında yeniysen önce [oyun sırasına](/tr/blog/holdem-game-order) bak.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Hole kartlar** | Yüzü kapalı, sadece sana ait iki kartın. |
| **Ortak kartlar (community cards)** | Herkesin kullandığı, yüzü açık beş ortak kart. |
| **Flop / Turn / River** | İlk üç ortak kart / dördüncü / beşinci ve son kart. |
| **Nuts** | Mevcut board'da mümkün olan en iyi el (sonraki street'lerde değişebilir). |
| **Kicker (yan kart)** | Diğer açılardan eşit eller arasında beraberliği bozan yan kart (bkz. [beraberlik kuralları](/tr/blog/holdem-tiebreak-rules)). |
| **Pocket pair** | Aynı değerde iki hole kart. |
| **Overpair** | Board'daki her karttan yüksek bir pocket pair. |
| **Top pair** | Board'un en yüksek kartını bir hole kartınla eşlemek. |
| **Set** | **Pocket pair** + bir board kartıyla yapılan Üçlü (iyi gizlenir). |
| **Trips** | **Tek bir hole kart** + board'daki bir çiftle yapılan Üçlü (kicker kontrolü daha zayıf). |
| **İki Çift (Two pair)** | İki farklı çift. |
| **Boat / Full boat** | **Full (Full House)** için argo — Üçlü artı bir Çift (el "dolar"). |
| **Quads** | **Kare (Four of a Kind)** için argo. |
| **Made hand** | Draw'ın aksine, şu an tamamlanmış bir el. |
| **Draw** | Gelişmesi gereken bir el — örneğin **floş draw'ı** (Floşa 4 kart) ya da kent draw'ı. |
| **Gutshot** | Ortadaki tek bir değere ihtiyaç duyan içten kent draw'ı (4 out). |
| **Open-ender** | İki uçtan da tamamlanabilen açık uçlu kent draw'ı (8 out). |
| **Backdoor** | **İki** kartın art arda gelmesine (turn *ve* river) ihtiyaç duyan draw. |
| **Runner-runner** | Eli **hem** turn **hem** river ile yapmak — tutan bir backdoor draw (örneğin "runner-runner floş"). |
| **Overcard** | Board'dan yüksek bir kart. |
| **Suited connectors** | Aynı türden iki ardışık kart (örneğin 8♥9♥). |
| **Broadway** | 10-J-Q-K-A Kenti, en yüksek Kent. |
| **Wheel** | A-2-3-4-5 Kenti, **en düşük** Kent (As küçük oynar). |
| **Cooler** | Hiçbir hata olmadan daha büyük bir ele kaybeden büyük el. |
| **Bad beat** | Büyük favoriyken şanslı bir draw'a kaybetmek. |

</div>

Hangi elin hangisini yendiğini hâlâ öğreniyorsan tam sıralama [poker el sıralaması rehberinde](/tr/blog/holdem-hand-rankings).

---

## Fish, shark, nit kimdir? Oyuncu tipleri ve poker argosu

![Beş poker oyuncu tipi kutucuğu — fish, whale, donk, nit ve shark — her biri kendini tanımlayan sembolle işaretli](/images/holdem-glossary-player-types.webp "Her masa farklı tiplerin karışımıdır — argoyu öğrenmek kimi hedef alacağını, kimden uzak duracağını söyler")

Fish, masanın kâr kaynağı olan zayıf ve kaybeden eğlence oyuncusudur; shark ise zayıf oyunculardan beslenen güçlü, kazanan oyuncudur. Nit yalnızca premium ellerle oynayan aşırı sıkı oyuncu, calling station her şeyi call edip nadiren fold eden pasif oyuncudur. Bu argo, çuhanın karşı tarafındaki insanların takma adlarından oluşan küçük bir hayvanat bahçesidir.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Fish** | Zayıf, kaybeden eğlence oyuncusu — masanın kâr kaynağı. |
| **Shark** | Zayıf oyunculardan beslenen güçlü, kazanan oyuncu. |
| **Whale** | Yüksek limitlerde oynayan varlıklı, zayıf eğlence oyuncusu — "cebi derin bir fish". |
| **Nit** | Yalnızca premium ellerle oynayan aşırı sıkı oyuncu. |
| **Donkey (donk)** | Kötü, beceriksiz oyuncu için aşağılayıcı bir terim. |
| **Calling station** | Çok fazla call eden, nadiren fold ya da raise yapan pasif oyuncu. |
| **Reg** | "Regular" — bir limitte düzenli oynayan, genelde yetkin oyuncu. |
| **Grinder** | İstikrarlı hacim ve disiplinle kâr eden oyuncu. |
| **LAG / TAG** | Loose-aggressive / tight-aggressive — kazanan oyuncuların çoğunun oyununu üzerine kurduğu iki agresif tarz (tarz tek başına kimseyi kazanan yapmaz). |
| **Maniac** | Çılgınca raise ve blöf yapan aşırı agresif oyuncu. |
| **Mark** | Masanın para kazanmaya çalıştığı zayıf oyuncu. |

</div>

---

## Rake, buy-in ve ICM nedir? Para ve oyun formatı terimleri

Rake, salonun cash oyunundaki çoğu pottan aldığı paydır; buy-in bir oyuna ya da turnuvaya girmek için gereken miktardır. ICM (Independent Chip Model) ise turnuva çiplerini, ödül basamaklarına yaklaşırken gerçek para cinsinden equity'ye çeviren modeldir. Bu bölüm çipleri, limitleri ve iki büyük formatı kapsar; asıl yol ayrımı [turnuva ile cash game](/tr/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp") arasındadır.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Blind'lar** | Aksiyonu başlatan zorunlu SB/BB bahisleri — limit seviyelerinin adı da budur ([blind nedir](/tr/blog/holdem-blind-meaning)). |
| **Ante** | Geleneksel olarak potu başlatmak için herkesten alınan, blind'lardan ayrı küçük zorunlu bahis — bugün çoğu turnuva, masa adına tek bir koltuğun ödediği big blind ante kullanır. |
| **Pot** | Uğruna oynanan çiplerin toplamı. |
| **Yan pot (side pot)** | Bir oyuncu all-in olup diğerleri bahse devam ettiğinde oluşan ayrı pot. |
| **Stack** | Bir oyuncunun önündeki çipler. |
| **Bankroll** | Poker için genel olarak ayırdığın para — masadaki çipler değil. |
| **Buy-in** | Bir oyuna ya da turnuvaya girmek için gereken miktar. |
| **Rake** | Salonun cash oyunundaki çoğu pottan aldığı pay. |
| **Rakeback** | Ödediğin rake'in bir kısmını geri veren iade. |
| **Straddle** | Preflop'ta son hareket hakkını satın alan isteğe bağlı blind (genelde 2× BB). |
| **Cash game** | Gerçek değerli çipler, istediğin an girip çıkabilirsin, blind'lar sabit. |
| **No-limit (NLH) / Limit** | No-limit'te açılış bahsi bir big blind'dan tüm stack'ine kadar olabilir (daha küçük bir all-in serbesttir); limit'te bahis büyüklükleri sabittir. PLO formatındaki pot-limit ise bahis ve raise'leri pot büyüklüğüyle sınırlar. Hold'em neredeyse her zaman no-limit oynanır. |
| **PLO** | Pot-Limit Omaha — dört hole kart aldığın ve tam olarak ikisini kullanmak zorunda olduğun popüler bir varyant (aynı oyun değil, ama adını duyarsın). |
| **Turnuva** | Sabit buy-in, yükselen blind'lar; elenene ya da kazanana kadar oynanır ([poker turnuvaları nasıl işler](/tr/blog/holdem-tournament)). |
| **Freezeout** | Rebuy olmayan turnuva — elendin mi, çıktın. |
| **GTD (garantili)** | Turnuvanın vaat ettiği minimum ödül havuzu; katılım yetmese bile ödenir. |
| **Hand-for-hand** | Para balonuna (bubble) yaklaşınca her masa aynı anda tek el oynar; böylece kimse oyunu yavaşlatıp paraya giremez. |
| **Bounty (knockout)** | Elediğin her oyuncu için ödül ödeyen turnuva. |
| **Sit & Go (SNG)** | Dolar dolmaz başlayan küçük turnuva. |
| **MTT** | Oyuncular elendikçe masaları birleştiren çok masalı turnuva. |
| **ICM** | Independent Chip Model (Bağımsız Çip Modeli) — ödül basamaklarına yaklaşırken turnuva çiplerini gerçek para cinsinden equity'ye çevirir. |
| **Bad beat jackpot** | Çok güçlü bir el kaybettiğinde ödenen promosyon ödülü. |

</div>

---

## Showdown, tilt ve VPIP ne demek? Durum, istatistik ve adap terimleri

Showdown, son bahisten sonra kazananı belirlemek için ellerin açılmasıdır. Tilt, genelde bir kayıptan sonra duyguların yönettiği kötü oyundur. VPIP bir oyuncunun preflop'ta ne sıklıkla gönüllü olarak pota para koyduğunu, PFR ne sıklıkla raise yaptığını gösteren istatistiktir. Bu bölüm masada olan biteni anlatan kelimeleri — ve o sırada nasıl davranman gerektiğini — topluyor.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Anlamı |
|:---|:---|
| **Showdown** | Son bahisten sonra kazananı belirlemek için ellerin açılması ([showdown kuralları](/tr/blog/holdem-showdown-rules)). |
| **Muck** | Elini yüzü kapalı atmak. |
| **Chop / Split pot** | Eller berabere kaldığında potu bölmek ([beraberlik kuralları](/tr/blog/holdem-tiebreak-rules)). |
| **Slow roll** | Kazanan eli göstermeyi rakibi kızdırmak için bilerek geciktirmek — ciddi bir adap ihlali. |
| **Tilt** | Duyguların yönettiği kötü oyun; genelde bir kayıptan sonra gelir. |
| **Tell** | Bir el hakkında bilgi sızdıran fiziksel ya da davranışsal ipucu. |
| **Pot oranı (pot odds)** | Potun, bir call'un maliyetine oranı — [nasıl hesaplanır](/tr/blog/holdem-pot-odds). |
| **Implied odds** | Sonraki street'lerde kazanmayı beklediğin çiplerle düzeltilmiş pot oranı. |
| **Equity** | Şu an pottaki yüzde payın ([poker olasılıkları](/tr/blog/holdem-probability)). |
| **EV (beklenen değer)** | Bir kararın uzun vadedeki ortalama sonucu; +EV zamanla kazandırır. |
| **VPIP** | Bir oyuncunun preflop'ta ne sıklıkla gönüllü olarak pota para koyduğu — gevşek/sıkı istatistiği. |
| **PFR** | Bir oyuncunun preflop'ta ne sıklıkla raise yaptığı — agresyon istatistiği (asla VPIP'ten yüksek olmaz). |
| **GTO** | Game Theory Optimal — solver'lardan çıkan dengeli, sömürülemeyen strateji. |
| **Range** | Bir oyuncunun o spotta tutabileceği ellerin tamamı; profesyoneller tek elle değil range'lerle düşünür. |
| **Cold deck** | Cooler üreten şanssız bir dağıtım (aslen hilecinin önceden dizdiği deste). |
| **"Don't tap the glass"** | Zayıf oyuncuları eleştirme — kâr ettiğin oyuncuları kaçırırsın. |
| **Run it twice** | All-in oyuncular kalan board'u iki kez açar, her biri potun yarısı için; varyansı azaltmak içindir — yalnızca cash oyununda ve ilgili herkes kabul ederse. |
| **Heads-up** | Bire bir oynamak — ya iki kişilik bir oyun ya da bir turnuvanın son iki oyuncusu. |
| **RFI (raise first in)** | Açılış raise'i için range ve istatistik kısaltması: senden önce kimse pota girmemişken potu ne sıklıkla açtığın. |
| **Splash the pot** | Çipleri önüne dizmek yerine pota dağınık fırlatmak — miktar doğrulanamadığı için hoş karşılanmaz. |

</div>

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-betting-actions | Poker bahis hareketleri | /images/holdem-betting-actions-hero.webp
/tr/blog/holdem-tiebreak-rules | Pokerde beraberlik nasıl bozulur? | /images/holdem-tiebreak-hero.webp
:::

## Sıkça sorulan sorular

**Q. Yeni başlayan birinin bilmesi gereken en temel poker terimleri hangileri?**

A. Temel olanlar bahis hareketleri (check, bet, call, raise, fold, all-in), street'ler (flop, turn, river), pozisyonlar (buton, small blind, big blind, UTG) ve bir avuç el terimidir (nuts, kicker, set, top pair). Yukarıdaki "en çok karıştırılan" ikilileri öğren — özellikle check ile call ve set ile trips — ve neredeyse her masa sohbetini takip edersin.

**Q. Pokerde UTG (under the gun) ne demek?**

A. UTG, big blind'ın hemen solundaki koltuktur; yani o oyuncu flop'tan önce ilk oynar. Herkes ondan sonra ve daha fazla bilgiyle oynadığı için UTG en sıkı pozisyondur — oradan en az sayıda ve en güçlü elleri açmalısın.

**Q. Check ile call arasındaki fark nedir?**

A. Check, hiç çip koymadan sırayı geçmektir ve yalnızca önünde karşılaman gereken açık bir bahis yoksa yapılabilir. Call ise birinin zaten yaptığı bahsi görmektir. Check pota çip eklemez; call, mevcut bahse karşı hâlâ borçlu olduğun miktarı öder. İkisini karıştırmak, yeni başlayanların en sık yaptığı hatadır.

**Q. Set ile trips arasındaki fark nedir?**

A. İkisi de Üçlüdür ve aynı değerdedir, ama farklı yollarla yapılır. Set, board'a eşleşen bir kart gelen pocket pair'dir (7‑7 tutuyorsun, bir 7 geliyor). Trips, board'da zaten duran bir çifte eşleşen tek bir hole karttır (A‑7 tutuyorsun, board'da 7‑7 var). Set daha gizlidir ve kicker kontrolü daha iyidir, bu yüzden genelde daha çok para kazandırır.

**Q. Cooler ile bad beat arasındaki fark nedir?**

A. Bad beat'te para ortaya girerken favori sendin ve şanslı bir kartla geçildin. Cooler'da — dar anlamıyla — para girerken fold edilemeyecek kadar güçlü bir elle zaten gerideydin ve şanslı bir karta gerek yoktu; bazı oyuncular "cooler"ı daha büyük bir ele kaybeden her büyük el için kullanır. Hızlı test: para girerken açık favoriydin ve rakibin kazanmak için *gelişmek* zorundaysa bad beat'tir; rakip zaten öndeydi ve senin elin fold edilemeyecek kadar güçlüyse cooler'dır (sadece daha zayıf elle geride olmak ikisi de değildir — sıradan, kaybedilmiş bir pottur).

**Q. Pokerde 3-bet nedir ve neden ilk raise "1-bet" değildir?**

A. 3-bet, flop'tan önceki ilk re-raise'dir. Sayıma blind'lar da dahildir: big blind birinci bahis sayılır, açılış raise'i ikinci bahistir ("2-bet"), yani bir sonraki raise üçüncüdür — 3-bet. Onun üstüne gelen re-raise 4-bet'tir. Yeni başlayanların kafasını karıştırır, çünkü "ilk raise" sıralamada zaten ikinci bahistir.

**Q. Pokerde "nuts" ne demek?**

A. Nuts, o anda board'daki kartlara göre mümkün olan en iyi eldir. Nuts sendeyse şu an hiçbir el seni yenemez — ama sonraki bir kart nuts'ın ne olduğunu değiştirebilir. "Second nuts" ise mümkün olan ikinci en iyi eldir.

**Q. Pokerde ICM nedir?**

A. ICM (Independent Chip Model — Bağımsız Çip Modeli), turnuva çiplerini gerçek para cinsinden ödül equity'sine çeviren modeldir. Turnuvada önündeki çipler nakit değildir; özellikle ödül basamaklarına (pay jump) yaklaşırken çip sayısı, ödül havuzundaki gerçek payını birebir göstermez. Kendi stack'lerinle denemek istersen [poker hesaplayıcısındaki](/tr/calculator) ICM aracını kullanabilirsin.

**Q. Pokerde tilt nedir?**

A. Tilt, duyguların kararlarını yönettiği kötü oyundur ve genelde bir kayıptan sonra gelir — örneğin büyük bir pot kaybettikten hemen sonra. Tilt'teki oyuncu artık planına göre değil, öfkesine göre oynar. Cash game'in esnekliği burada işe yarar: tilt olduğunu fark ettiğinde masadan kalkarak kendini koruyabilirsin.

**Q. Poker istatistiklerinde VPIP ve PFR ne demek?**

A. VPIP (Voluntarily Put money In Pot), bir oyuncunun preflop'ta oynamayı seçtiği ellerin yüzdesidir — ne kadar gevşek ya da sıkı olduğunun ölçüsü. PFR (Pre-Flop Raise), preflop'ta raise yaptığı ellerin yüzdesidir — agresyonun ölçüsü. PFR asla VPIP'ten yüksek olamaz ve ikisi arasındaki büyük fark pasif, bol call eden bir oyuncuya işaret eder.

---

## Sırada ne var?

Bu sözlük bir harita; asıl öğrenme, bağlandığı rehberlerde. Başlamak için birkaç iyi nokta:

- **Mutlak temeller:** [Texas Hold'em nasıl oynanır](/tr/blog/texas-holdem-rules-for-beginners) ve [bahis hareketleri](/tr/blog/holdem-betting-actions).
- **Eller:** [hangi el hangisini yener](/tr/blog/holdem-hand-rankings) ve [beraberlik kuralları](/tr/blog/holdem-tiebreak-rules).
- **Matematik:** [pot oranı](/tr/blog/holdem-pot-odds) ve [poker olasılıkları](/tr/blog/holdem-probability); kendi elini hesaplamak için [poker hesaplayıcısı](/tr/calculator).
- **Turnuvalar:** [poker turnuvaları nasıl işler](/tr/blog/holdem-tournament) ve [turnuva mı cash game mi](/tr/blog/holdem-tournament-vs-cash-game).

Bu sayfayı yer imlerine ekle ve bir kelime ayağına takıldığında geri dön. Dili konuşmaya başladığında oyun artık başına gelen bir şey gibi hissettirmez — masaya karşı senin yaptığın bir şeye dönüşür.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Temel rehber</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tüm kurallar — blind'lardan showdown'a</div>
  </a>
  <a href="/tr/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kurallar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bahis hareketleri</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Check, bet, call, raise, fold</div>
  </a>
  <a href="/tr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Hangi el hangisini yener</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tam poker el sıralaması</div>
  </a>
  <a href="/tr/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Beraberlik kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Kicker ve split pot</div>
  </a>
</div>
`.trim(),
};

export default POST;
