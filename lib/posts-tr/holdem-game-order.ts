import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-game-order",
  title: "Texas Hold'em nasıl oynanır: blind'dan showdown'a elin sırası",
  seoTitle: "Sıra kimde, ne zaman bahis? — Hold'em el sırası",
  desc: "Hold'em'de sıra sana gelince donup mu kalıyorsun? İşte elin tam sırası — preflop, flop, turn, river, showdown — gerçek bir el üzerinden adım adım.",
  tldr: "Bir Texas Hold'em eli şöyle ilerler: blind koy → 2 kapalı kart dağıt → preflop → flop (3 kart) → turn (1 kart) → river (1 kart) → showdown, toplam 4 bahis turuyla.",
  category: "rules",
  date: "2026-06-10",
  updated: "2026-07-13",
  masterUpdated: "2026-07-02",
  keepImagesInBody: true,
  readTime: "16 dk",
  emoji: "🎬",
  image: "/images/blog-holdem-game-flow.webp",
  imageAlt: "Texas Hold'em el sırası şeması — blind, preflop, flop, turn, river, showdown; altı aşamanın tamamı",
  tags: ["texas holdem nasıl oynanır", "texas holdem kuralları", "poker el sırası", "preflop flop turn river", "poker bahis turları", "pokerde sıra kimde", "bir poker eli nasıl işler", "poker showdown"],
  content: `
İlk kez Texas Hold'em oynamak için oturan hemen herkes aynı şeyi sorar: ==r:*"Dur… şimdi sıra kimde ve çiplerimi ne zaman koyacağım?"*== Kartların dağıtılacağını biliyorsun. Bilmediğin şey, ne zaman bahis yapacağın, bir sonraki kartların ne zaman geleceği ve kazananın gerçekte nasıl belirlendiği.

İşte bu, **elin sırası rehberi**: blind, preflop, flop, turn, river, showdown ve her aşamada sıranın kimde olduğu. Sıfırdan başlıyorsan ve daha geniş bir başlangıç paketi istiyorsan — kurallar, çipler, el sıralaması, ilk strateji ve yazdırılabilir PDF — önce [yeni başlayanlar için Texas Hold'em kuralları](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") yazısıyla başla. Sonra buraya dönüp elin ayrıntılı akışına bak.

---

### Bir el 15 saniyede

Blind koy (zorunlu bahis) → her oyuncuya 2 **kapalı kart** dağıt → **preflop** turu → 3 **flop** kartını aç → bahis → **turn** kartını ekle → bahis → son **river** kartını aç → bahis → kalan oyuncular showdown'da kartlarını gösterir → en iyi beş kartlık el kazanır.

![Texas Hold'em el sırası — blind, preflop, flop, turn, river, showdown](/images/blog-holdem-game-flow.webp "Bir Texas Hold'em elinin altı aşaması, blind'dan showdown'a")

---

## Texas Hold'em nedir?

Texas Hold'em, dünyada en çok oynanan poker türüdür. WSOP Ana Turnuvası'ndan bir arkadaş masasına kadar, biri "poker" dediğinde neredeyse kesinlikle Hold'em'i kasteder.

Temel kural basit: **2 kapalı kartın (hole kart) ile masadaki 5 ortak kartı** birleştirerek **en iyi beş kartlık eli** oluşturursun. Hangi kartların geleceğine şans karar verir, ama elin sırasını anlamak — ve her aşamada doğru kararı vermek — kazananı diğerlerinden ayıran şeydir.

---

## Kartlar dağıtılmadan önce: buton ve blind

Tek bir kart bile açılmadan önce masayı düzenleyen iki şey vardır: **dağıtıcı (dealer) butonu** ve **blind (kör bahis)**.

**Dağıtıcı butonu ("buton", "D" harfiyle gösterilir)**, o elde "dağıtıcı" konumunu işaretleyen yuvarlak bir disktir. Bir krupiye olsa bile bahis sırasını buton belirler ve buton her elden sonra saat yönünde bir koltuk kayar.

**Blind**, kartlar dağıtılmadan önce konulan zorunlu bahistir. Blind olmasa herkes bedavaya check deyip pas geçebilirdi; ==g:blind, pota para koyar ve oyunculara yarışmak için bir sebep verir==. (Yeni misin? Tam olarak [small blind ve big blind nasıl işler](/tr/blog/holdem-blind-meaning) yazısına bak.)

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Blind | Konum | Örnek |
|:---|:---|:---:|
| Small blind (SB) | Butonun hemen solundaki koltuk | 1.000 |
| Big blind (BB) | Butonun iki sol koltuğu | 2.000 |

</div>

Blind sadece bir giriş ücreti değildir — ==pozisyonun ve stratejinin başlangıç noktasıdır==.

---

## Aşama 1 — Preflop: ilk karar elin tonunu belirler

Blind'lar konduktan sonra dağıtıcı her oyuncuya kapalı (yüzü aşağı) 2 **hole kart** verir. Bunları yalnızca sen görürsün ve **preflop** turu başlar.

Aksiyon big blind'ın solundan başlar ve saat yönünde ilerler. Sıra sana gelince şunlardan birini seçersin:

- **Fold (pas)** — eli bırak ve kartları at (muck). Daha fazla kaybetmezsin ama potu da kazanamazsın.
- **Call (gör)** — mevcut bahse eşitle (preflop'ta bu big blind kadardır).
- **Raise (yükselt)** — rakibe baskı yapmak için big blind'dan fazla bahis yap.
- **3-bet (yeniden yükselt)** — başkasının yükseltişinin üzerine bir yükseltme daha. Güçlü el sinyali.

==r:Çoğu yeni oyuncu "sadece flop'u göreyim" diyerek neredeyse her eli oynar. Bu, pokerdeki en pahalı alışkanlıktır.== ==g:**İyi oyuncular preflop'ta ellerin çoğunu fold eder ve yalnızca yaklaşık %15–25'ini oynar.**==

### Yeni başlayanlar için sağlam başlangıç elleri

- **Premium:** A♠A♥ (As çifti), K♠K♥, Q♠Q♥, J♠J♥
- **Güçlü:** A♠K♥ ("Big Slick"), A♠Q♥, A♠J♥, 10♠10♥
- **Duruma bağlı:** 9♠9♥, 8♠8♥, K♠Q♥, K♠J♥

Bunlardan hangilerini gerçekten açabileceğin koltuğuna bağlıdır. Pozisyona göre ayrılmış 169 elin tam başlangıç eli tablosu ayrı bir konudur.

---

## Aşama 2 — Flop: üç ortak kart

Preflop turu bitince dağıtıcı masanın ortasına 3 **ortak kart (community cards)** açar. İşte bu, **flop**'tur.

Artık gerçek beş kartlık bir eli okuyabilirsin: iki hole kartın ve masadaki üç kart. Aynı anda iki şeye bak:

- **Şu an ne elde ettiğin** — bir çift, iki çift ya da henüz hiçbir şey.
- **Daha ne yapabileceğin** — sonraki sokaklarda tamamlanabilecek bir floş (flush) ya da kent (straight) **çekişi (draw)**.

![Texas Hold'em'in üç sokağı — K♥ 7♦ 2♣ flop'u, 9♠ turn'ü ve Q♥ river'ı](/images/blog-holdem-card-stages.webp "Sokaklar: flop'ta üç kart, sonra turn'de bir ve river'da bir kart")

Flop, yeni bir seçeneği de açar: **check (kontrol)**. Henüz kimse bahis yapmadıysa, çip koymadan sırayı check ile geçebilirsin. Ama sen check dedikten sonra rakip bahis yaparsa; call, raise ya da fold demek zorundasın.

---

## Aşama 3 — Turn: tablo netleşir

Flop bahis turundan sonra bir ortak kart daha eklenir: **turn**. Artık masada dört kart var.

Turn, stratejik olarak ağır bir sokaktır (street):

- Kent ya da floş çekişin tamamlandı mı?
- Rakibin preflop ve flop hamleleri, el aralığı (range) hakkında ne söylüyor?
- Bu el river'a kadar götürmeye değer mi?

==r:Turn'de pasif kalıp check der, sonra river'da aniden büyük bahis yaparsan; dikkatli bir rakip zayıflığını sezer.== ==g:**Güçlü elle turn'de bahis yapıp potu büyüt**== — rakip hâlâ görmeye (call) razıyken.

---

## Aşama 4 — River: son kart, son karar

Turn bahis turundan sonra beşinci ve son ortak kart açılır: **river**. Artık beş ortak kart da ortadadır ve gelecek yeni bir bilgi kalmaz.

River'da klasik yeni oyuncu hataları:

- **Zayıf elle sonuna kadar görmek (call)** — "buraya kadar geldim ya" tuzağı.
- **Güçlü elle pasif check demek** — rakibe bedava showdown vermek.
- **Aniden river'da blöf yapmak** — önceki tüm sokaklarda pasif kaldıysan, buradaki büyük bahis inandırıcı bir hikâye anlatmaz.

River, tüm eli kapattığın yerdir. Elinin gücünü, rakibin bahis düzenini ve tüm board'u tartıp son kararını ver.

---

## Aşama 5 — Showdown: en iyi beş kart kazanır

River bahsinden sonra hâlâ iki ya da daha fazla oyuncu kaldıysa el **showdown**'a gider.

![Poker showdown — 10♣ 7♥ J♦ 4♠ 9♣ board'unda As çifti A♥ A♦, Papaz çiftini K♥ K♣ yener](/images/blog-holdem-showdown.webp "Showdown'da kalan oyuncular kartlarını açar — burada daha yüksek çift, As As, potu alır")

Showdown kuralları:

- Her oyuncu iki hole kart ve beş ortak karttan **en iyi beş kartlık eli** oluşturur.
- İki hole kartını da kullanmak zorunda değilsin — biri, hatta hiçbiri (board oynamak) bile olur, eğer en iyi beşlin oysa.
- Son agresif hamleyi (bahis ya da yükseltme) yapan oyuncu önce açar; river check ile geçildiyse butonun solundaki ilk aktif oyuncu önce açar.
- Kaybeden oyuncu kartlarını göstermeden atabilir (**muck**).
- Eşit güçteki eller potu **bölüşür** (split / "chop").

Kimin önce göstereceği, ne zaman muck yapabileceğin ve slow-roll âdâbı [showdown kuralları](/tr/blog/holdem-showdown-rules) yazısında tümüyle anlatılıyor.

---

## Her sokakta sıra kimde?

"Sıra kimde?" sorusunun cevabı flop'tan önce ve sonra farklıdır — ve tam da bu değişim, pozisyon stratejisinin motorudur.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sokak | İlk konuşan | Son konuşan |
|------|------|------|
| Preflop | Big blind'ın solundaki oyuncu ("UTG") | Big blind |
| Flop | Small blind (ya da butonun solundaki ilk aktif oyuncu) | Buton |
| Turn | Flop ile aynı | Buton |
| River | Flop ile aynı | Buton |

</div>

Ezber hilesi: ==**flop'tan önce big blind'ın soluna, flop'tan sonra butonun soluna bak.**== Buton, flop sonrası her sokakta son konuşur; en kârlı koltuk olmasının nedeni tam olarak budur.

==g:**Heads-up (2 oyuncu) istisnadır:**== buton *small* blind'ı koyar ve preflop'ta **ilk**, flop, turn ve river'da ise **son** konuşur. Aşağıdaki tam el anlatımında bu sıra kullanılıyor.

---

## Tüm sıra tek bakışta

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Aşama | Ne olur | Ortak kart | Bahis? |
|:---|:---|:---:|:---|
| Blind | SB ve BB zorunlu bahis koyar | 0 | Zorunlu |
| Preflop | 2 hole kart dağıtılır → bahis | 0 | ✅ |
| Flop | 3 ortak kart açılır | 3 | ✅ |
| Turn | Bir ortak kart daha | 4 | ✅ |
| River | Son ortak kart | 5 | ✅ |
| Showdown | En iyi 5 kart karşılaştırılır → kazanan | 5 | — |

</div>

### ⚡ Her sokak tek cümlede

- **Preflop** = başlangıç (yalnızca iki kartınla karar ver)
- **Flop** = değişim (üç kart olasılıkları açar)
- **Turn** = karar (river'ı planlamak için son gerçek şans)
- **River** = kapanış (tüm kartlar açıldı, son bahis)
- **Showdown** = sonuç (en iyi beş kart potu alır)

---

## Tam bir eli adım adım takip et

![Tam bir Texas Hold'em eli örneği — preflop'tan showdown'a](/images/holdem-game-example-fullhand.webp "Tam bir eli her sokakta showdown'a kadar takip etmek")

Sokakları okumak soyut kalır. Hadi gerçek kart ve çip miktarlarıyla tek bir heads-up (bire bir) eli ilk karttan son karta oynayalım.

**Durum:** heads-up. Blind SB 1.000 / BB 2.000.

- **Oyuncu A (sen):** A♠ K♥ (As-Papaz, farklı tür / offsuit)
- **Oyuncu B (rakip):** 9♦ 9♣ (dokuz çifti)

### Preflop

A, Big Slick ile **6.000'e yükseltir**. B dokuz çiftiyle görür (call).
**Pot: 12.000**

### Flop: K♦ 9♠ 3♥

- **A:** en üst çift, en iyi kicker (Papaz çifti). Güçlü görünüyor.
- **B:** üç dokuz — bir **set (üçlü)**. Şimdiden canavar el.

B check der, A **8.000 bahis** yapar, B görür.
**Pot: 28.000**

### Turn: 2♣

- **A:** değişiklik yok, hâlâ üst çift.
- **B:** hâlâ set, gelişmeye gerek yok.

B check der, A **15.000 bahis** yapar (yaklaşık yarım pot), B görür.
**Pot: 58.000**

### River: A♥

- **A:** As eşlenir — artık **iki çift, As ve Papaz**. Kendine fazla güvenip **30.000 bahis** yapar.
- **B:** set, iki çifti hâlâ açık ara eziyor. **70.000'e yükseltir**.
- **A:** iki çiftinin yeterince iyi olduğuna inanıp görür.

**Pot: 198.000**

### Showdown

- A: A♠ K♥ + A♥ K♦ 9♠ → **iki çift (As ve Papaz)**
- B: 9♦ 9♣ + 9♠ K♦ A♥ → **üçlü (dokuzlar)**

**Kazanan: B** — üçlü, iki çifti yener.

Ders: ==r:river A'nın elini iki çift yaptığında bu kazanan bir el *gibi hissettirir* — ama B flop'tan beri, tüm el boyunca set tutuyordu.== ==g:**Sadece kendi elinin gelişmesini değil, tüm board'u okumak — Hold'em'in özü budur.**==

---

## 7 bahis hamlesi, baştan sona

![Poker bahis hamleleri — check, call, fold, bet, raise, yeniden yükselt, all-in](/images/holdem-betting-options-guide.webp "Texas Hold'em'de yapabileceğin her bahis hamlesi")

İşte masadaki tüm hamleler — yeni oyuncuların en çok karıştırdığı kısım.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hamle | İşlevi | Ne zaman yapılır |
|------|------|------|
| Fold (pas) | Eli bırak, kartları at | Her zaman |
| Check (kontrol) | Bahis yapmadan sırayı geç | Yalnızca önünde bahis yokken |
| Call (gör) | Mevcut bahse eşitle | Önünde bahis varken |
| Bet (bahis) | Turun ilk bahsini yap | Henüz kimse bahis yapmamışken |
| Raise (yükselt) | Mevcut bahsin üzerine çık | Önünde bahis varken |
| Re-raise (3-bet) | Bir yükseltişin üzerine yükselt | Önünde yükseltiş varken |
| All-in | Tüm çiplerini ortaya koy | Her zaman |

</div>

==r:**Önemli:** Preflop'ta check diyemezsin==, çünkü big blind zaten aktif bir bahistir. ==Check ancak flop'tan itibaren mümkün olur.==

Her hamleyi ne zaman kullanacağına dair daha derin bir karar rehberi — check-call-raise-fold karar tablosuyla — için [bahis hamleleri açıklaması](/tr/blog/holdem-betting-actions) yazısına bak.

---

## Bilmen gereken 10 poker el sıralaması

Showdown'da kazanmak için hangi elin hangisini yendiğini anında bilmen gerekir. İşte **el sıralaması (hand ranking)**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Sıra | El | Örnek | Sıklık |
|------|------|------|------|
| 1 | Royal Floş (Royal Flush) | A♠ K♠ Q♠ J♠ 10♠ | Son derece nadir |
| 2 | Sıralı Floş (Straight Flush) | 5♥ 6♥ 7♥ 8♥ 9♥ | Çok nadir |
| 3 | Kare (Four of a Kind) | A♠ A♥ A♦ A♣ K♠ | Nadir |
| 4 | Full (Full House) | K♠ K♥ K♦ A♠ A♥ | Ara sıra |
| 5 | Floş (Flush) | A♠ K♠ 8♠ 5♠ 2♠ | Ara sıra |
| 6 | Kent (Straight) | 5♥ 6♠ 7♦ 8♣ 9♥ | Bazen |
| 7 | Üçlü (Three of a Kind) | Q♠ Q♥ Q♦ 5♠ 7♥ | Bazen |
| 8 | İki Çift (Two Pair) | J♠ J♥ 8♦ 8♣ A♠ | Sık |
| 9 | Çift (Pair) | K♠ K♥ 7♦ 4♣ 2♠ | Çok sık |
| 10 | Yüksek Kart (High Card) | A♠ Q♥ 8♦ 5♣ 2♠ | Çok sık |

</div>

Kicker ve beraberliklerin kazananı nasıl belirlediği dâhil tüm ayrıntılar için [poker el sıralaması](/tr/blog/holdem-hand-rankings) rehberinin tamamına bak.

---

## Her yeni oyuncunun kaçınması gereken 5 hata

Elin sırasını ezbere bilsen bile şunları yaparsan çiplerini kaybedersin.

### 1. Neredeyse her eli oynamak

"Önce flop'u göreyim" uzun vadede kesin zarardır. Güçlü oyuncular ellerin yalnızca %15–25'ini oynar, geri kalanını tereddütsüz fold eder. Preflop'ta herhangi iki kartla görüyorsan (call), kaybetmek için para ödüyorsun demektir.

### 2. Pozisyonu görmezden gelmek

Butona ne kadar yakınsan o kadar iyi — son konuşmak, karar vermeden önce herkesin ne yaptığını görmeni sağlar. Erken pozisyonda sıkı (tight), geç pozisyonda daha agresif oyna.

### 3. Çekişlerin (draw) peşinden körü körüne gitmek

Floş ya da kent çekişin olması otomatik call demek değildir. **Pot oranını (pot odds)** tartmalısın — görmenin bedeli, potun büyüklüğüne karşı. Pot 100.000 ve görmek için 50.000 koyman gerekiyorsa, çekişinin değmesi için en az yaklaşık %33 ihtimalle tamamlanması gerekir.

### 4. River'da zayıf elle durup dururken blöf yapmak

Tüm yol boyunca pasif check dedikten sonra river'da birden büyük koyarsan, dikkatli rakip anında anlar. Blöf, ilk sokaktan itibaren tutarlı bir hikâye gerektirir.

### 5. Showdown'da kendi elini yanlış okumak

Klasik yeni oyuncu hatası: aslında tek çift varken "iki çiftim var!" sanmak. İki hole kartın ve masadaki beş karttan **en iyi beş kartı** seçmeyi refleks olana kadar çalış.

---

## Bugün oynamaya nasıl başlarsın

Elin sırası kafanda oturunca, sıra gerçekten oynamakta.

- **Oyun parasıyla çalış** — çoğu uygulama ve poker odası ücretsiz masalar sunar. Bu rehberdekileri gerçek bir akışta dene.
- **Bu yazıyı iki üç kez tekrar oku** — sıra refleks olmalı ki masada asla donup kalmayasın.
- **Bir el sıralaması kopya kâğıdı yap** — on eli bir kâğıda yaz ve sık gördüğün bir yere as.
- **En küçük bahisle başla** — hataların ne kadar ucuzsa, o kadar hızlı öğrenirsin.

Texas Hold'em otuz dakikada öğrenilir ama bir ömür boyu ustalaşılır. Yine de bugün öğrendiğin temel, masaya oturmak için fazlasıyla yeterli. Tarihçesi ve resmi kuralları için [Texas hold 'em Vikipedi maddesi](https://tr.wikipedia.org/wiki/Texas_hold_%27em) sağlam bir kaynaktır.

---

:::readnext[Okumaya devam et]
/tr/blog/texas-holdem-rules-for-beginners | Yeni başlayanlar için Texas Hold'em kuralları | /images/rules-texas-holdem.webp
/tr/blog/holdem-betting-actions | Bahis hamleleri açıklaması | /images/holdem-betting-actions-hero.webp
:::

## Sık sorulan sorular (SSS)

**S. Bir Texas Hold'em elinin sırası tam olarak nasıldır?**

Zorunlu blind → 2 hole kart dağıt → preflop turu → flop (3 kart) ve bahis → turn (1 kart) ve bahis → river (son kart) ve bahis → showdown (en iyi 5 kart karşılaştırılır).

**S. Preflop ile flop arasındaki fark nedir?**

Preflop, henüz ortak kart yokken olan aşamadır — yalnızca iki hole kartınla karar verirsin. Flop, üç ortak kart açıldıktan sonradır; burada hem mevcut elini hem de çekiş potansiyelini okursun.

**S. Check ile call arasındaki fark nedir?**

Check, önünde bahis yokken bahis yapmadan sırayı geçmektir ve yalnızca önünde bahis yokken mümkündür. Call ise rakibin bahsine eşitlemektir. Biri bahis yaptıysa check diyemezsin — call, raise ya da fold demelisin.

**S. Showdown'da iki hole kartımı da kullanmak zorunda mıyım?**

Hayır. En iyi beş kartlık eli, iki hole kart ve beş ortak kartın herhangi bir kombinasyonundan oluşturursun — hatta yalnızca birini ya da hiçbirini ("board oynamak") kullanabilirsin.

**S. Pot oranı (pot odds) nedir?**

Pot oranı, mevcut pot büyüklüğü ile görmen gereken miktarın oranıdır. Pot 100.000 ve rakip 20.000 bahis yaptıysa, 120.000'lik potu kazanmak için 20.000 riske edersin (6:1). Kazanma ihtimalin bu orandan iyiyse call kârlıdır.

**S. Ne zaman all-in gitmeliyim?**

All-in, elindeki tüm çipleri koymak demektir. Çok güçlü bir elin (nuts) varken ya da rakibi fold ettirmek için blöf olarak kullan. All-in'den sonra daha fazla bahis yapamazsın ama eşitlediğin pot payı üzerinde hakkın kalır. Stack'ler farklı olduğunda bu yan pot (side pot) yaratır — [all-in kuralları ve yan potlar](/tr/blog/holdem-all-in-rules) yazısına bak.

**S. Bir elde kaç bahis turu vardır?**

Dört: preflop, flop, turn ve river. Blind zorunlu bir bahistir ve showdown'da bahis yoktur.

---

## Aklında tutman gereken 3 şey

1. ==**Sıra:**== blind → preflop → flop (3) → turn (1) → river (1) → showdown, ==dört bahis turuyla==.
2. ==**Okuma:**== her sokakta hem şu an ne elde ettiğini hem de daha ne yapabileceğini değerlendir — ve sadece kendi elini değil, tüm board'u izle.
3. ==g:**Disiplin:**== preflop'ta ellerin çoğunu fold et, pozisyona saygı duy ve yalnızca hikâyen mantıklıysa büyük bahis yap.

Sırayı iyice öğren, ücretsiz masalarda tekrarla ve bir daha asla "sıra kimde?" diye donup kalma. Masaya oturmaya hazırsın.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Yeni başlayan rehberi</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tüm kurallar, çipler, el sıralaması + yazdırılabilir PDF</div>
  </a>
  <a href="/tr/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">El sıralaması</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker el sıralaması — en iyiden en kötüye</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">10 elin tamamı; olasılıklar, örnekler ve board bulmacaları</div>
  </a>
</div>
`.trim(),
};
