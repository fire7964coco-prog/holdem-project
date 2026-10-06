import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-continuation-bet",
  title: "Continuation bet (c-bet): Flop'ta ne zaman, ne kadar bahis yapılır, ne zaman check edilir?",
  seoTitle: "C-bet nedir? Her flop'a c-bet neden çip kaybettirir?",
  desc: "C-bet (continuation bet) nedir, hangi flop'ta bahis yapılır, hangisinde check edilir? Kuru board'da küçük, ıslakta büyük boyut ve pozisyona göre sıklık.",
  tldr: "Continuation bet (c-bet), preflop'ta raise yapan oyuncunun flop'ta yaptığı bahistir. Modern kural her flop'a c-bet atmak değil; range'ini destekleyen yüksek ve kuru board'larda (K-7-2 gibi) küçük ve sık bahis yapmak, rakibini destekleyen düşük ve bağlantılı board'larda (7-6-5 gibi) check etmektir. Kuru board'da potun üçte biri, ıslak board'da üçte ikisi ya da daha fazlası kadar bahis yap; tek raise eden olarak pozisyon dışında daha az c-bet yap (pozisyon dışındaki 3-bet'çi olarak tersine neredeyse her zaman), multiway potlarda ise çok daha az.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-06",
  keepImagesInBody: true,
  readTime: "15 dk",
  emoji: "🔥",
  image: "/images/holdem-continuation-bet-hero.webp",
  imageAlt: "Preflop'ta raise yaptıktan sonra yeni açılan flop'a çip süren bir oyuncu — yeşil çuhada klasik continuation bet anı",
  tags: ["c-bet", "continuation bet", "cbet poker", "c-bet nedir", "continuation bet nedir", "c-bet boyutu", "c-bet sıklığı", "pozisyon dışında c-bet"],
  content: `
İlk iki yılımda flop için tek bir planım vardı: c-bet. Preflop'ta raise yaptıysam flop'ta bahis yapardım. Her seferinde. As yüksek board mu, bahis. Beni call eden adamı açıkça vurmuş, kent ve floş ihtimalleriyle dolu bir board mu? Yine bahis — ve pot üstüne pot raise yedim, call yedim, check-raise ile pottan atıldım. C-bet'in *stratejinin kendisi* olduğunu sanıyordum. Meğer c-bet bir neşterdi ve ben onu balyoz gibi sallıyordum.

**C-bet (continuation bet, devam bahsi)**, flop'tan önce raise yapan oyuncunun flop'ta yaptığı bahistir. Pokerdeki en yaygın bahistir — ve en kötü şekilde aşırı kullanılanı. Eski tavsiye "neredeyse her flop'a c-bet at" derdi. Solver'larla kontrol edilmiş modern strateji ise çok daha işe yarar ve kârlı bir şey söylüyor: ==*Senin* range'ini destekleyen flop'larda bahis yap, rakibinkini destekleyenlerde check et.== Bu yazı eksiksiz c-bet rehberi: hangi flop'lar, ne sıklıkla, ne kadar, pozisyonda ve pozisyon dışında, multiway potlarda ve check'in kazandıran hamle olduğu anlar. Kazandıran bir [Texas Hold'em stratejisinin](/tr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") flop yarısı tam olarak burası.

---

### Rakamlarla c-bet

:::stripe
~3'te 2 | Bir elin flop'u ıskalama sıklığı
⅓ pot | Kuru board'larda küçük "range bet" boyutu
%55–70 | Sağlıklı genel flop c-bet oranı
Check | Çoğu zaman en iyi hamle, zayıflık değil
:::

---

## Continuation bet (c-bet) nedir?

**Continuation bet, flop'tan önce agresör olan oyuncunun — yani son raise yapanın — flop'ta yaptığı bahistir.** Preflop'ta başlattığın güç hikâyesini "devam ettirirsin." İşin can alıcı noktası: ==c-bet yapmak için flop'u vurmuş olman gerekmez==; iyi c-bet'lerin büyük bir kısmı flop'u tamamen ıskalamış ellerle yapılır.

Bunun işe yaramasının sebebi tek bir istatistik: **eşleşmemiş iki hole kart, flop'ta yaklaşık üçte iki ihtimalle (%67,6) çift yapmaz.** Yani sen bahis yaptığında rakibin de çoğu zaman ıskalamıştır — ve bu ellerin büyük kısmı fold eder. Güçlü olduğun için değil, *onun muhtemelen zayıf olduğu* ve liderliği ilan eden sen olduğun için bahis yaparsın.

Flop c-bet'ini öğrendiğinde "barrel" merdiveninin geri kalanı kendiliğinden gelir:

- **Delayed c-bet (gecikmeli c-bet)** — flop'u *check* eder, turn'de bahis yaparsın. Flop'un rakibe yaradığı ama turn'ün dengeyi değiştirdiği potlar için harika.
- **Double barrel** — flop'ta c-bet yapar, turn'de *bir kez daha* bahis yaparsın.
- **Triple barrel** — üç street'in hepsinde bahis yaparsın: flop, turn ve river. En agresif çizgi; güçlü value elleri ya da blocker'larla iyi seçilmiş bir blöf için.

Check, bet ve raise gibi temel [bahis hareketleri](/tr/blog/holdem-betting-actions) hâlâ kafanda bulanıksa oradan başla. Değilse, neredeyse herkesin yaptığı hatayı düzeltelim.

---

## "Her flop'a c-bet at" tavsiyesi neden yanlış? Ne değişti?

Pokeri solver'lardan önce öğrendiysen sana *çoğu* flop'ta potun üçte ikisi kadar c-bet yapman söylenmiştir. Bir süre işe yaradı, çünkü rakipler gereğinden fazla fold ediyordu. Sonra herkes karşılık vermeyi öğrendi — float etmeyi, check-raise yapmayı, sonuna kadar call etmeyi — ve körü körüne c-bet, para kaybettiren bir kaçağa dönüştü.

Modern stratejinin gerçekte ne dediği kritik, çünkü yanlış anlaşılması kolay: **mesele "her yerde daha az c-bet" DEĞİL.** Mesele bir *ayrım*:

- Seni destekleyen board'larda **küçük ve eski tavsiyeden bile daha sık** bahis yap — bazen range'inin tamamıyla.
- Rakibini destekleyen board'larda **çok daha fazla check et** — bahis yaptığında da daha büyük ve daha seçici yap.

Bunun altında yatan kavram ==range avantajı (range advantage)==: bu belirli flop'ta kimin genel range'i daha güçlü? Preflop raise yapan olarak elinde daha çok büyük kart ve overpair vardır; bu yüzden **yüksek, kuru board'lar sana aittir** — orta değerli bağlantılı kartlarla dolu board'lar ise call eden oyuncuya. Bu tek fikre hâkim ol, masadaki bütün "ben her zaman c-bet atarım" oyuncularının önüne geçersin.

Üstelik hikâye range avantajıyla bitmiyor — üstüne pozisyonu da ekleyince etki uç noktaya varıyor. A-7-2 rainbow'da solver, call eden oyuncuya range'inin %98,2'sini check ettiriyor, top pair dahil — range equity'si %45,1'e karşı %54,9 ile sadece biraz geride, ama pozisyon dışında olmak bu küçük farkı neredeyse topyekûn bir check'e çeviriyor. Ayrıntılı döküm [top pair var, yine de check](/tr/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp") yazısında. Rakamları okumakla yetinmeyeceksen [bu spotu kendin çöz](/tr/solver): ücretsiz GTO solver'da Study Spots → Dry Ace-High Board yolu aynı ekranı açar; kurulum yok, hesap yok.

---

## Hangi flop'lara c-bet yapılır? Her şey board dokusunda

![Yeşil çuhada kuru, bağlantısız J-7-2 rainbow flop ve önüne sürülmüş küçük bir çip yığını — preflop raise yapana ait yüksek kartlı board tipi](/images/holdem-cbet-dry-board.webp "Bu J-7-2 gibi yüksek, kuru ve bağlantısız flop'lar preflop raise yapanı destekler — klasik küçük ve sık c-bet board'ları")

C-bet'in kalbi burası. Boyutu ya da sıklığı düşünmeden önce tek bir soru sor: **bu flop benim range'ime mi oturdu, rakibiminkine mi?** İşte harita:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop tipi | Örnek | Kimi destekler | Pozisyonda | Neden |
|:---|:---|:---|:---|:---|
| **Yüksek, kuru, bağlantısız** | K‑7‑2, A‑8‑3 | **Seni (raise yapan)** | **Sık ve küçük** bahis (⅓) | Sende daha çok top pair ve overpair var; o ıskaladı |
| **Düşük, bağlantılı** | 7‑6‑5, 9‑8‑6 | **Call eden** | **Daha çok check**; bahis yaparsan büyük ve seçici | Onun suited connector'larına ve küçük çiftlerine oturur |
| **Düşük eşli** | 8‑8‑3, 5‑5‑2 | **Seni (hafifçe)** | **Sık ve küçük** bahis | İki tarafta da üçlü pek yok; senin overcard ve overpair'lerin önde |
| **Monoton** | K♠9♠4♠ | Karışık — dikkat | **Daha az, daha küçük** bahis | Hazır floş iki range'i de sınırlar; ucuz oyna |
| **İki renkli ve ıslak** | Q♥J♥7♣ | Call edene yakın | **Polarize et:** value ve draw'larla büyük, boş ellerle check | Draw dolu — ya bedel ödet ya da çekil |

</div>

Buradaki bütün işi birbirine bağlı iki fikir görür:
- **Range avantajı ne *sıklıkla* bahis yapacağını belirler.** Bu board'da range'inin daha büyük kısmı güçlüyse → daha sık bahis.
- **Nut avantajı ne *büyüklükte* bahis yapacağını belirler.** Mutlak en iyi ellerin (set, kent) daha çoğu sendeyse → daha büyük bahis.

İnce nokta şu: biri sende olup diğeri olmayabilir. A‑8‑3'te çok daha fazla top pair'in var (range avantajı) ama neredeyse kimsede set yok, bu yüzden **sık ama küçük** bahis yaparsın. Çok daha fazla set ve overpair tuttuğun bir board'da ise **büyük** bahis yaparsın. Bu iki kolu doğru kurduğunda c-bet boyutu tahmin olmaktan çıkar.

---

## Ne sıklıkla c-bet yapmalısın? (Sıklık)

Tek bir "doğru" c-bet yüzdesi yok — sana tek bir sayı veren herkes aslında seni bir kaçağa yönlendiriyor. Sıklık; pozisyona, board'a ve pottaki oyuncu sayısına göre oynar. Hızlı başvuru tablosu:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Durum | Yaklaşık c-bet sıklığı | Not |
|:---|:---:|:---|
| **Pozisyonda, heads-up, kuru board** | **%70–100** (küçük) | Klasik "range bet" — neredeyse her şeyle, minik bahis |
| **Pozisyonda, heads-up, ıslak board** | **~%50–60** | Daha polarize — value ve draw'lar bahis, boş eller check |
| **Pozisyon dışında, heads-up (tek raise'li pot, raise yapan sensin)** | **~%30–45** | Check range'ini korumak için çok daha fazla check et. Pozisyon dışındaki *3-bet'çi* olarak tersine döner: çözdüğümüz üç board'un üçünde de %97'nin üstünde; Q♥T♥7♠ ve 8♦5♣2♠'de neredeyse tamamı potun üçte ikisiyle, A♦K♠2♥'de ise çoğunlukla üçte biriyle (%57,8) |
| **Multiway (2 rakip)** | **~%50 ya da daha az** | Birinin bağlamış olması muhtemel — sıkılaş |
| **Multiway (3+ rakip)** | **Yalnızca güçlü eller ve iyi draw'lar** | Fold equity neredeyse kalmadı |

</div>

Bir sağlık kontrolü olarak, sağlam bir oyuncunun tüm board'lardaki genel flop c-bet oranı **%55–70** civarına düşer. Flop'ların ~%85'inden fazlasında c-bet yapıyorsan otomatik pilottasın ve iyi oyuncular bunu cezalandırır; ~%40'ın altındaysan fazla dürüstsün, yalnızca vurduğunda bahis yapıyorsun. Ama unutma — bu sayı bir *toplam*, hedef değil. Oraya kota doldurarak değil, doğru board'larda bahis yaparak varırsın.

---

## Ne kadar c-bet yapmalısın? (Boyut)

Boyut doğrudan board dokusundan çıkar. İki vites neredeyse her şeyi karşılar:

- **Küçük — potun yaklaşık üçte biri** — kuru, statik, range avantajlı board'larda, özellikle pozisyondayken. Rakibinin range'i zayıf ve pek gelişmeyecek, yani draw'lara bedel ödetmen gerekmiyor; küçük bir bahis bile onun bütün boş ellerini zor durumda bırakırken daha kötü elleri sana ödeme yapmak için oyunda tutar. Burada daha büyük bir bahis sadece call etmesini *istediğin* elleri fold ettirir.
- **Büyük — potun üçte ikisi ya da daha fazlası** — ıslak, dinamik board'larda ve range'in polarize olduğunda. Artık floş ve kent draw'larına bedel ödetmen (equity'lerini gerçekleştirmelerini engellemen) ve güçlü ellerinle potu büyütmen gerekir. Küçük bir bahis draw'ların fazla ucuza call etmesine izin verir.

Gerçek rakamlarla bakalım. Flop'ta pot ==$30== olsun:

- **Potun üçte biri** kadar c-bet ==$10== eder — kuru board range bet'in.
- **Potun üçte ikisi** kadar c-bet ==$20== eder — ıslak board'da draw'lara bedel ödettiğin boyut.

**Turnuvalarda** biraz daha küçüğe kay: küçük boyut yine üçte bir kalır ama büyük boyut üçte iki yerine daha sık **yarım pot** olur, çünkü stack'in değerlidir — freezeout'ta yeniden giriş yapamazsın, re-entry ise yeni bir buy-in demektir. Hangi boyutu seçersen seç, onu alışkanlığa değil board'a bağla.

---

## Pozisyon dışında c-bet

![Pozisyon dışında ilk konuşan bir oyuncu, parmakları çiplerinin yanında çuhada, arkada gölgede bekleyen rakip](/images/holdem-cbet-oop.webp "Pozisyon dışında hiçbir bilgi olmadan ilk sen konuşursun; bu yüzden çok daha fazla check eder, daha dar ve daha güçlü bir range ile c-bet yaparsın")

Tek raise'li bir potta **pozisyon dışında (OOP)** c-bet yapmak çok daha zordur — her street'te rakibinin ne yapacağına dair hiçbir ipucu olmadan ilk sen konuşmak zorundasın (3-bet'çi olarak range avantajı bunu değiştirir). İki ayar:

1. **Daha seyrek c-bet yap.** Pozisyon olmadan potu o kadar iyi kontrol edemez, equity'ni o kadar iyi gerçekleştiremezsin; bu yüzden çok daha fazla check edersin — pozisyondayken otomatik bahis olacak ellerle bile. Bazı board'larda solver, tek raise'li potta pozisyon dışından ellerin yalnızca dörtte birinde c-bet yapar.
2. **Gerçek bir check range'i kur.** Sadece güçlüyken bahis yapıp zayıfken check edersen dikkatli bir rakip seni kitap gibi okur ve her check'ine saldırır. Bu yüzden bilerek *bazı* güçlü ellerle de check edersin; böylece check'lerin tehlikeli kalır ve oyunun tamamına karşı oynamak zorlaşır. [Pozisyonun](/tr/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") neden yapısal bir avantaj olduğunun sebebi de tam olarak bu — en son konuştuğunda c-bet'ler basitçe daha iyi çalışır.

---

## Multiway potlarda c-bet

En büyük c-bet tuzağı, **birden fazla rakibe heads-up'taymış gibi bahis atmaktır.** Pota giren her ekstra oyuncu, herkesin ıskalamış olma ihtimalini sert biçimde düşürür — dolayısıyla blöf c-bet'inin bütün motoru olan fold equity'n çöker.

Multiway kuralı basit: **güçlü hazır ellerinle ve en iyi draw'larınla value ve koruma için bahis yap, neredeyse geri kalan her şeyle check et.** İki oyuncuya karşı zaten heads-up range'inin çok daha dar bir hâline iniyorsun; üç ya da daha fazlasına karşı çıplak bir blöf c-bet çipleri ateşe atmaktan farksızdır, çünkü neredeyse her zaman birinde bir parça vardır. Range bet — range'inin tamamıyla küçük bahis — bir *heads-up* fikridir ve multiway potlara taşınmaz. Sınırda bir elle iki ya da daha fazla rakibe karşı kararsız kaldığında check et.

---

## Delayed c-bet (gecikmeli c-bet)

Flop'u check etmek elin sonu değildir. **Delayed c-bet** — preflop raise yapan olarak flop'u check edip turn'de bahis yapmak — pokerin en az kullanılan hamlelerinden biridir. En çok şu durumlarda parlar:

- **Flop rakibini destekledi** (düşük, bağlantılı bir board), yani bahis kötüydü — ama **turn tabloyu değiştirdi** (bir overcard ya da equity'ni yükselten bir kart).
- Pozisyonda **fena olmayan bir eli check'le geçtin** ve board daha güvenli hâle geldiği için şimdi bir street value almak istiyorsun.
- **Flop raise'ini elinden almak** istiyorsun: flop c-bet'ine blöf raise yapmayı planlayan oyuncular saldıracak bir bahis bulamaz, onun yerine turn'de senin bahsinle karşılaşır.

Gecikmek, otomatik bir c-bet'in çip kanattığı bir durumu bir street sonra yapılan kontrollü, bilgili bir bahse çevirir.

---

## Turn'de ikinci c-bet (double barrel) ne zaman?

Double barrel, flop c-bet'in call edildikten sonra turn'de ikinci kez bahis açmaktır. İkinci bahsi şu üç durumda değerlendir: turn kartı senin range'ine rakibininkinden daha iyi oturduğunda, elin turn'de equity kazandığında ya da turn kartından etkilenmeyen güçlü bir value elin olduğunda. Karar yine rakibin range'ine, fold equity'ye ve rakibin turn'e nasıl tepki verdiğine bağlıdır; turn hiçbir şeyi değiştirmediyse ve elinde ne value ne draw varsa, ikinci bahis çoğu zaman yalnızca kaybını büyütür — check et.

Turn kartı açıldığında bakacağın üç şey:

1. **Korkutucu kart (scare card) senin lehine.** Turn'de açılan bir as ya da papaz, preflop raise yapanın range'inde call edeninkinden daha sık bulunur; flop c-bet'ini orta bir çiftle call eden rakip bu kartta rahatsız olur. Board'u bağlayan, kenti ya da floşu tamamlayan bir kart ise genelde call edenin işine yarar — orada yavaşla.
2. **Equity'si artan eller ikinci bahsin en iyi adaylarıdır.** Flop'u ıskalayan elin turn'de floş draw'ına ya da açık uçlu kent draw'ına dönüştüyse ikinci bahis çoğu zaman iki yoldan kazanır: rakip fold edebilir, call ederse de river'da tamamlama şansın vardır. Yine de bazı draw'lar check ederek de iyi oynanır. Hiçbir out'u olmayan boş elle turn'de ikinci kez ateşlemek ise çoğu zaman sadece daha pahalı bir kayıptır.
3. **Rakibin range'i flop'ta daraldı mı?** Flop'ta raise yerine yalnızca call eden bir rakibin range'i genellikle orta güçteki ellere kayar, çünkü en güçlü ellerinin bir kısmını raise ile oynar. Turn bahsi tam olarak bu orta elleri zor bir karara sokar; yine de flop'ta güçlü elleri yavaş oynayan bir rakibe karşı bu varsayıma fazla güvenme.

Asıl iş flop'ta başlar: c-bet'i yapmadan önce hangi turn kartlarında ikinci kez ateşleyeceğini, hangilerinde bırakacağını kabaca bil. Planı olmayan flop bahsi, aşağıdaki hata tablosundaki "bir atıp bırakma" kaçağına dönüşür.

---

## Ne zaman c-bet yapılmaz? (Check bir silahtır, beyaz bayrak değil)

"Yapma"yı açıkça yazalım, çünkü para tam burada kurtarılır:

- **Board rakibinin range'ine çok iyi oturdu.** 7‑6‑5 ya da 9‑8‑7 flop'u, bir raise'i call eden elleri seninkilerden çok daha sert vurur. Burada range'inin çoğuyla bahis yapmak düpedüz çip bağışlamaktır — çok daha sık check et, bahis yaptığında da büyük ve seçici ol.
- **Dinamik bir board'da sınırda bir elle pozisyon dışındasın.** Hiç bilgi olmadan ilk konuşuyorsan potu küçük tut ve check et.
- **Boş elle multiway'desin.** Yukarıda anlattık — fold equity yok, bahis yok.
- **Elin bir check range'ini korumak istiyor.** Bazen güçlü bir elle bilerek check edersin ki check'lerin otomatik olarak zayıf görünmesin.

Seni kazanan oyuncuya çeviren zihniyet değişikliği şu: **check teslim olmak değildir.** İyi oyuncular *çok* ve bilerek check eder; bu da bahisleri geldiğinde onları çok daha korkutucu kılar. Sırf preflop'ta raise yaptın diye bahis yapmak zorunda hissediyorsan, o refleks sana para kaybettiriyor.

---

## Baştan sona gerçek bir c-bet eli

Aynı seanstan iki durum, kararın iki yüzünü de gösteriyor.

**Durum 1 — ders kitabı gibi bir c-bet.** ==A♣K♦== ile raise yapıyorum, big blind call ediyor. Flop: ==K♠ 7♦ 2♣.== Bu, benim range'ime ait yüksek, kuru, bağlantısız bir board — ve flop'ta **top pair, top kicker** yaptım: K♦'m K♠ ile çift oluyor, as da mümkün olan en iyi kicker (en iyi beş kart = K♦ K♠ A♣ 7♦ 2♣). Range bet olarak **potun üçte biri** kadar bahis yapıyorum: onun bütün ıskalamış ellerine bedel ödetiyor, daha kötü papazları ve çiftleri oyunda tutuyor. Kolay, kârlı bir c-bet.

**Durum 2 — ders kitabı gibi bir check.** Aynı seans, ==A♥Q♥== ile raise yapıyorum, big blind call ediyor. Flop: ==7♠ 6♠ 5♦.== Bu board, tam olarak onun call ettiği ellere — suited connector'lara, küçük çiftlere ve kent yapan ellere — çok iyi oturuyor; bende ise çiftsiz, draw'sız sadece as yüksek var (board'da hiç kupa yok, yani backdoor floş bile yok). İki yıl önce alışkanlıkla "devam eder" ve raise yerdim. Şimdi **check edip bırakıyorum.** Güvenli bir turn gelir ve equity toplarsam delayed c-bet seçeneği hâlâ masada; gelmezse minimumu kaybetmiş olurum.

Aynı preflop raise, zıt flop'lar, zıt doğru hamleler. Bütün ders bu: **karar veren board'dur, raise yapmış olman değil.**

---

## En sık yapılan 7 c-bet hatası

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hata | Sana neye mal olur | Çözüm |
|:---|:---|:---|
| **Otomatik pilotta her flop'a c-bet** | Birçok board'un call edeni desteklediğini görmezden gelir | Önce dokuyu oku |
| **Geniş bir range ile büyük bahis** | Geniş range'ler büyük değil küçük boyut ister | Kuruda küçük, büyük yalnızca polarize iken |
| **Multiway'de hafif c-bet** | Oyuncu sayısı arttıkça fold equity çöker | 2+ rakibe karşı yalnızca value ve draw |
| **Pozisyon dışında fazla sık c-bet** | İlk konuşurken equity'ni o kadar gerçekleştiremezsin | Daha çok check et, check range'i kur |
| **Onu vuran board'a bahis** | 7‑6‑5 senin değil, onun range'ine çok iyi oturdu | Daha çok check et; bahis yaparsan büyük ve seçici |
| **"Bir atıp bırakma"** | Flop'ta c-bet, turn'de hep pes = kolay float | Ateşlemeden önce bir turn planın olsun |
| **Equity'siz triple barrel** | Out'u ya da blocker'ı olmadan stack'i blöfle yakmak | Yedek equity ya da iyi blocker'larla blöf yap |

</div>

Bunların her biri aynı köke çıkar: **board'u okumak yerine otomatik pilotta c-bet yapmak.** Bunu düzelt, flop oyunun bir seviye atlasın.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-strategy | Kazandıran pokerin arkasındaki 5 karar | /images/holdem-strategy-hero.webp
/tr/blog/holdem-positions | Poker pozisyonları: BTN, CO, UTG | /images/holdem-positions-hero.webp
:::

## Sıkça sorulan sorular

**Q. Pokerde continuation bet (c-bet) nedir?**

A. Continuation bet, ya da kısaca c-bet, flop'tan önce son raise yapan oyuncunun — 3-bet yapan dahil preflop agresörünün — flop'ta yaptığı bahistir. Preflop'ta gösterdiğin gücü temsil etmeye "devam edersin." C-bet yapmak için flop'u vurmuş olman gerekmez: bir el flop'u yaklaşık üçte iki ihtimalle ıskaladığı için, iyi seçilmiş bir c-bet rakibinde bir şey yokken potu çoğu zaman kazanır.

**Q. Neden "devam bahsi" (continuation bet) deniyor?**

A. Çünkü flop'tan önce başlattığın agresyonu sürdürüyorsun. Preflop'ta liderliği almak için raise yaptın; flop bahsi bu hikâyeyi bir sonraki street'e taşır. Preflop'ta başka biri raise yapmış olsaydı senin flop bahsin c-bet olmazdı — terim özellikle preflop raise yapan oyuncunun flop'ta bahis yapmasını anlatır.

**Q. Her flop'a c-bet yapmalı mısın?**

A. Hayır — en sık yapılan c-bet hatası tam olarak bu. Range'ini destekleyen flop'larda (daha çok top pair ve overpair tuttuğun, K-7-2 gibi yüksek ve kuru board'lar) bahis yap, rakibini destekleyenlerde (onun call ettiği ellere oturan, 7-6-5 gibi düşük ve bağlantılı board'lar) check et. Otomatik pilotta her flop'a c-bet yapmak iyi oyuncular tarafından cezalandırılır.

**Q. Top pair ile her zaman c-bet yapmalı mıyım?**

A. Hayır. Top pair çoğu board'da bahis yapılacak bir eldir ama kararı elin tek başına değil, board ve pozisyon verir. Solver'dan uç bir örnek: "Buton açıp big blind call ettikten sonra A♥7♦2♣ flop'unda big blind range'inin %98,2'sini check eder — top pair, iki çift ve set'ler dahil." Bu, call edenin tarafı (onun bahsi teknik olarak c-bet değil, lead olur). Döküm [A-7-2 yazısında](/tr/blog/a-high-board-cbet). Raise yapan olarak da pozisyon dışında ya da ıslak bir board'da zayıf kicker'lı top pair'i check etmek potu küçük tutar ve check range'ini korur.

**Q. Elinde hiçbir şey yokken c-bet yapılır mı?**

A. Evet — ıskalamış elle bahis c-bet'in olağan bir parçasıdır, çünkü rakibin de çoğu zaman ıskalamıştır. Ama her boş el aynı değil: overcard'ları, backdoor floş ya da kent ihtimali olan eller turn'de gelişebildiği için en iyi adaylardır. Kuru board'da heads-up küçük range bet'e boş ellerini de katarsın; rakibine oturan bağlantılı board'larda ve multiway potlarda ise hiçbir şeyi olmayan elle check et.

**Q. Ne sıklıkla c-bet yapmalısın?**

A. Pozisyona, board'a ve rakip sayısına bağlıdır; bu yüzden bunları kural değil aralık olarak gör: pozisyonda, heads-up, kuru board'da (küçük boyutla) kabaca %70–100; tek raise'li potta raise yapan olarak pozisyon dışında %30–45 civarı (3-bet'çi olarak daha yüksek); multiway'de %50 ya da daha az. Sağlıklı bir genel flop c-bet oranı yaklaşık %55–70'tir — %85'in üstü otomatik pilotta olduğun anlamına gelir.

**Q. Ne kadar c-bet yapmalısın?**

A. Boyutu board'a göre ayarla. Kuru, statik board'larda küçük — potun yaklaşık üçte biri — bahis yap, çünkü rakibinin range'i zayıftır ve draw'lara bedel ödetmen gerekmez. Islak, dinamik board'larda büyük — potun üçte ikisi ya da daha fazlası — bahis yap ki floş ve kent draw'larına bedel ödetesin, güçlü ellerinle de potu büyütesin. Turnuvalarda büyük boyut küçülür — üçte iki yerine daha sık yarım pot — küçük boyut ise üçte bir kalır.

**Q. Pozisyon dışında c-bet yapmalı mısın?**

A. Tek raise'li potta preflop raise yapan sensen, pozisyondakinden daha seyrek. Her street'te hiçbir bilgi olmadan ilk konuştuğun için equity'ni o kadar iyi gerçekleştiremezsin; bu yüzden çok daha fazla check edersin — pozisyonda otomatik bahis yapacağın bazı ellerle bile — ve check'lerin otomatik olarak zayıf görünmesin diye bilerek bazı güçlü elleri check range'inde tutarsın. Pozisyon c-bet'leri daha iyi çalıştırır, nokta.

**Q. Multiway potta c-bet yapmalı mısın?**

A. Heads-up'tan çok daha az. Her ekstra rakip birinin bağlamış olma ihtimalini artırır, bu yüzden fold equity'n çöker. İki ya da daha fazla oyuncuya karşı güçlü hazır ellerinle ve en iyi draw'larınla value ve koruma için bahis yap, neredeyse geri kalan her şeyle check et. Üç ya da daha fazla oyuncuya blöf bahsi atmak klasik bir para kaybettirme yoludur.

**Q. Delayed c-bet (gecikmeli c-bet) nedir?**

A. Delayed c-bet, preflop raise yapan oyuncunun flop'u check edip turn'de bahis yapmasıdır. Flop rakibini desteklediğinde (yani bahis kötüyken) ama turn equity'ni yükselttiğinde, pozisyonda fena olmayan bir eli check'le geçtiğinde ya da flop bahsine blöf raise yapmayı planlayan rakipleri yakalamak istediğinde işe yarar. Pokerin en az kullanılan kârlı hamlelerinden biridir.

**Q. Ne zaman c-bet YAPMAMALISIN?**

A. Board rakibinin range'ine çok iyi oturduğunda (düşük bağlantılı board'lar — daha çok check et, bahis yaparsan büyük ve seçici ol), dinamik bir board'da sınırda bir elle pozisyon dışındayken, boş elle multiway'deyken ya da elin bir check range'ini korumayı tercih ettiğinde varsayılan olarak c-bet yapma. Bu durumlarda check zayıflık değildir — çip kurtarır ve gelecekteki bahislerini daha inandırıcı kılar.

**Q. C-bet bir blöf müdür?**

A. Bazen evet, bazen hayır — işin özü de bu. Birçok c-bet, flop'u ıskalamış ellerle yapılan semi-blöf ya da saf blöftür; rakibin de muhtemelen ıskaladığı için bahis yaparsın. Diğerleri güçlü ellerle yapılan value bet'lerdir. Dengeli bir c-bet stratejisi aynı board'larda ikisini de karıştırır, böylece rakipler flop bahsinin güç mü yoksa boşluk mu anlamına geldiğini çözemez.

**Q. Pokerde value bet nedir?**

A. Value bet, daha kötü bir elin *call etmesi* umuduyla güçlü bir elle yapılan bahistir — daha iyi bir eli fold ettirmeyi uman blöfün tam tersi. Bağladığın board'lardaki c-bet'lerinin çoğu value bet'tir: daha kötü çiftlere ve draw'lara bedel ödetmek için top pair ya da set ile bahis yaparsın. Ustalık, boyutu daha zayıf ellerin hâlâ call edeceği şekilde ayarlamaktır — rakibinin kendini ödemeye ikna edebileceği bir miktar seç.

**Q. Poker HUD'unda iyi bir c-bet yüzdesi kaçtır?**

A. Flop c-bet için %55–70 civarı sağlıklı ve dengeli bir banttır. Yaklaşık %85'in üstü, fazla c-bet yapan ve float edip raise yaparak sömürülebilecek birine işaret eder; yaklaşık %40'ın altı ise yalnızca güçlüyken bahis yapan bir oyuncuyu gösterir, yani c-bet'lerine gönül rahatlığıyla fold edebilir, check ettiğinde de bahisle potu deneyebilirsin. Bunu hedef değil, sağlık kontrolü olarak gör.

---

## Kısaca c-bet rehberi

1. **C-bet, preflop raise yapanın flop bahsidir** — ve eller flop'u yaklaşık üçte iki ihtimalle ıskaladığı için işe yarar.
2. **Karar veren board'dur.** Range'ini destekleyen yüksek, kuru board'larda bahis yap; rakibininkini destekleyen düşük, bağlantılı board'larda check et.
3. **Range avantajı sıklığı, nut avantajı boyutu belirler.** Hâkim olduğun board'larda sık bahis yap; nut'ların daha çoğu sendeyse ya da ıslak board'da draw'lara bedel ödetmen gerekiyorsa büyük bahis yap.
4. **Kuruda küçük (⅓), ıslakta büyük (⅔+).** Tek raise eden olarak pozisyon dışında daha az c-bet yap (pozisyon dışındaki 3-bet'çi olarak tersine neredeyse her zaman), multiway'de çok daha az.
5. **Check bir silahtır.** En iyi oyuncular sık ve bilerek check eder — c-bet bir neşterdir, balyoz değil.

Bunu doğru yaptığında, zaten hiç senin olmayan board'larda pot yakmayı bırakırsın. Keskin c-bet oyununu sağlam bir 3-bet oyunu, gerçek bir [pozisyon](/tr/blog/holdem-positions) farkındalığı ve eksiksiz [strateji çerçevesiyle](/tr/blog/holdem-strategy) birleştir; flop oyunun "her flop'a bahis" kalabalığını sessizce geride bırakır.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">5 karar çerçevesi</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-bet kazandıran bir oyunun neresine oturur</div>
  </a>
  <a href="/tr/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Temel kurallar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Bahis hareketleri: check, bet, raise</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-bet'in üzerine kurulduğu temel hamleler</div>
  </a>
  <a href="/tr/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker pozisyonları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">UTG'den butona: koltuk adları ve konuşma sırası</div>
  </a>
  <a href="/tr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Olasılık & Matematik</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot odds nasıl bulunur?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Büyük bir c-bet draw'lara neden bedel ödetir</div>
  </a>
</div>
`.trim(),
};

export default POST;
