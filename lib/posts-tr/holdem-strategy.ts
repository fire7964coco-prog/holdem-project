import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-strategy",
  title: "Texas Hold'em stratejisi: kazanan her elin arkasındaki 5 karar",
  seoTitle: "Ezberlediğin ipuçları neden tutmadı? — Poker taktikleri",
  desc: "Pokerde kazanmak on kopuk ipucu değil; her elde aynı beş karar: pozisyon, el seçimi, raise ya da fold, c-bet ve eli ne zaman bırakacağın.",
  tldr: "Kazanan her Texas Hold'em kararı tekrar eden beş soruya iner: nerede oturuyorum, bu el oynanmaya değer mi, pota ilk giriyorsam limp yerine raise mi fold mu, flop'ta bahse devam ediyor muyum ve eli ne zaman bırakıyorum. Bu beş soruyu iyi cevaplayan tight-aggressive bir oyuncu flop öncesi ellerin yaklaşık %80'ini fold eder, oynadıklarını agresif oynar ve ezber ipucu listesine gerek kalmadan neredeyse her gündelik masayı yener.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-10-05",
  keepImagesInBody: true,
  readTime: "14 dk",
  emoji: "♠️",
  image: "/images/holdem-strategy-hero.webp",
  imageAlt: "Yeşil çuhalı bir Texas Hold'em masasında, önünde çipler ve açık ortak kartlarla elin ortasında kararını tartan dikkatli bir poker oyuncusu",
  tags: [
    "poker taktikleri",
    "poker nasıl kazanılır",
    "texas holdem taktikleri",
    "pokerde kazanma taktikleri",
    "poker stratejisi",
    "poker ipuçları",
    "tight aggressive nedir",
    "pokerde ne zaman fold edilir",
  ],
  content: `
İlk iki yılımda herkesin yaptığını yaptım: ipucu listeleri okudum. "On hızlı ipucu." "Dokuz altın kural." Hepsini ezbere sayabiliyordum — daha az el oyna, agresif ol, pozisyona saygı göster — ve *yine de* kaybediyordum. Sorun ipuçlarının yanlış olması değildi. Birbirine hiçbir şeyle bağlanmayan bir kural yığınıydılar; masada, o an geldiğinde hangisinin geçerli olduğunu bilmiyordum.

Beni sonunda kazanan bir oyuncu yapan şey daha uzun bir liste olmadı. **Texas Hold'em'deki her elin, tekrar tekrar sorulan aynı beş karar olduğunu** fark etmek oldu: nerede oturuyorum, bu el oynanmaya değer mi, raise mi fold mu, bahse devam ediyor muyum ve eli ne zaman bırakıyorum. Bu beşini doğru yaparsan oturduğun gündelik masaların neredeyse hepsini yenersin. Bu yazı, o beş karar üzerine kurulu ==eksiksiz **Texas Hold'em stratejisi** çerçevesi==; her kararın ayrıntılı rehberine giden linklerle birlikte, nereden para kaçırıyorsan oraya odaklanabilesin diye.

---

### Kazananları geri kalan herkesten gerçekte ne ayırır

:::stripe
5 | Her elde yeniden karşına çıkan karar
~%80 | Tight-aggressive bir oyuncunun flop öncesi fold ettiği eller
%11,8 | Cep çiftinin flop'ta set yapma ihtimali (≈ 8,5'te 1)
%0 | Limp'in potu flop'tan önce kazanma ihtimali
:::

---

## Poker taktikleri bir ipucu listesi değil — beş karardır

Herhangi bir "yeni başlayanlar için poker stratejisi" yazısını aç, karşına numaralı bir liste çıkar: on ipucu, dokuz kural, yedi alışkanlık. *Yanlış* değiller — ama liste öğrenmenin en kötü yolu, çünkü oyun sana numaralı bir menü vermez. Sana bir koltuk, iki kart ve karşılık vermen gereken bir bahis verir.

O yüzden liste yerine bir **karar omurgası** kullan. Oynadığın her el aynı beş sorudan aynı sırayla geçer. Her birinin bu sitede kendi rehberi var — bu yazı da onları birbirine bağlayan harita:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Karar | Aslında sorduğun soru | Ayrıntılı rehber |
|:---:|:---|:---|:---|
| **1** | **Pozisyon** | Nerede oturuyorum, benden sonra kim konuşuyor? | [Pokerde pozisyonlar](/tr/blog/holdem-positions) |
| **2** | **El seçimi** | Bu el pota girmeye değer mi? | [Başlangıç eli tablosu](/tr/hand-chart) |
| **3** | **Flop öncesi agresiflik** | Pota ilk giriyorsan limp yerine raise mi, fold mu? | Aşağıda, Karar 3 |
| **4** | **Devam** | Flop'ta bahse devam mı, yoksa geri mi çekiliyorum? | [Bahis hareketleri](/tr/blog/holdem-betting-actions) |
| **5** | **Disiplin** | Eli ne zaman bırakıyorum? | [Pot odds ve fold](/tr/blog/holdem-pot-odds) |

</div>

Sihir tek bir kararda değil — kararların *zincirleme* çalışmasında. İyi pozisyon el seçimini kolaylaştırır. Daha seçici el seçimi raise'lerini daha korkutucu yapar. Korkutucu raise'ler flop'ta daha çok pot kazanır. Ne zaman fold edeceğini bilmek de kaybettiğin potları küçük tutar. Bir halkayı atlarsan zincir kopar. Şimdi tek tek bakalım.

---

## Karar 1 — Nerede oturuyorum? (Pozisyon)

![Dağıtıcı butonunda oturan, önünde kapalı iki hole kart ve çip yığını olan bir oyuncu — flop sonrası her turda en son konuşan koltuk](/images/holdem-strategy-button-seat.webp "Buton, flop sonrası her turda en son konuşur — masadaki en kârlı koltuk")

Kartlarına bakmadan önce bile en önemli bilgi zaten belli: **koltuğun.** Hold'em'de flop'tan sonra *en son* konuşan oyuncunun büyük bir avantajı vardır — tek bir çip koymadan önce herkesin ne yaptığını görür. Bu yüzden [buton (BTN)](/tr/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") oyundaki en kârlı koltuk, blind'lar ise en kârsız koltuklardır.

En son konuşmak, erken pozisyondaki kimsenin yapamayacağı üç şeyi yapmanı sağlar:

- **Bilgi toplarsın** — karar vermeden önce herkesin check, bet ya da fold ettiğini izlersin; asla körlemesine tahmin yürütmezsin.
- **Potu kontrol edersin** — orta karar bir elle check edip potu küçük tutabilir, güçlü bir elle bet edip büyütebilirsin.
- **Daha çok çalarsın** — geç pozisyondan gelen bir bahis daha inandırıcıdır ve çok daha sık geçer.

Buradan çıkan pratik kural: **geç pozisyonda daha çok, erken pozisyonda daha az el oyna.** K‑J gibi bir el UTG'de (under the gun, flop öncesi ilk konuşan) fold'dur ama butonda rahat bir raise'dir. Pozisyon hakkında tek bir şey hatırlayacaksan bu olsun. Koltuk koltuk ayrıntılar — UTG, orta pozisyon, CO (cutoff), BTN ve [blind'lar](/tr/blog/holdem-blind-meaning) — pozisyon rehberinde.

---

## Karar 2 — Bu el oynanmaya değer mi? (El seçimi)

Pokerdeki en büyük tek kaçak, çok fazla el oynamak. Yeni oyuncular içinde as olan her elle, her iki resimli kartla, her aynı renk iki kartla call eder — sonra elin geri kalanını dertle geçirir. Çözüm oyunun en gösterişsiz ama en kârlı becerisi: **sana gelenlerin çoğunu fold et.**

"Çoğu" ne kadar? Sağlam bir [tight-aggressive](/tr/hand-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") başlangıç oyuncusu **ellerinin kabaca %80'ini flop'tan önce fold eder.** Nedenini içselleştirene kadar bu saçma derecede sıkı gelir: *oynadığın* eller ortalamada rakiplerininkinden güçlüdür, böylece önemli potları kazanır, sessizce çip eriten sınırda spotları atlarsın.

Hangi ellerin listeye girdiği pozisyonuna bağlıdır (Karar 1, Karar 2'yi besler), ama başlangıç için pratik bir kural:

- **Her zaman raise:** büyük çiftler (A‑A'dan T‑T'ye) ve A‑K.
- **Genelde raise:** orta çiftler, A‑Q ve güçlü suited broadway'ler (K‑Q, A‑J suited) — koltuğun ne kadar geçse o kadar rahat.
- **Spekülatif, pozisyona bağlı:** küçük cep çiftleri ve suited connector'lar; bunlar ucuz, çok oyunculu potlar ister (matematiği aşağıda).
- **Fold:** geri kalan neredeyse her şey, özellikle J‑4, Q‑7, K‑3 gibi offsuit çöp eller.

[Başlangıç eli tablosu](/tr/hand-chart) bunu gerçekten ezberleyebileceğin renk kodlu bir ızgaraya çevirir. Burada gösterdiğin disiplin, sonraki her kararı kolaylaştırır.

---

## Karar 3 — Raise ya da fold. Sadece limp etme.

![RAISE / FOLD başlığı altında numaralı üç kutu — çipler ve koltuk işaretiyle OVER-LIMP, 1,5 ÷ 5,5 ve %27 ile BIG BLIND, bir çift beşli ve %11,8 ile SET-MINING](/images/holdem-strategy-raise-or-fold.webp "İlk giren olarak raise ya da fold — başlıca indirimler: pozisyonda over-limp, %27'lik big blind savunması ve set-mining")

Bir elin oynanmaya değer olduğuna karar verdikten sonra, çoğu yeni oyuncunun yanlış yaptığı ikinci bir karar gelir: pota *nasıl* gireceğin. Cevap neredeyse her zaman şu: **raise et — limp etme.**

Limp etmek, raise yerine sadece big blind'ı call etmektir. Güvenli ve ucuz hissettirir; oysa pokerin en pahalı alışkanlıklarından biridir, üç nedenle:

1. **Limp potu flop'tan önce asla kazanamaz.** İlk giren olarak raise ettiğinde herkes fold edebilir ve blind'ları bedavaya toplarsın. Limp edersen bu ihtimal tam olarak **sıfırdır** — kazanmanın en temiz yolunu çöpe atmış olursun.
2. **İnisiyatifi teslim edersin.** Flop öncesi raise eden, flop'ta hikâyesini anlatmaya devam eder (Karar 4). Limp edersen o hikâyeyi başkasına verirsin.
3. **Sırtına hedef tahtası asarsın.** Güçlü oyuncular bir limper'ın arkasından büyük raise atarak onu izole eder, sonra bütün el boyunca pozisyonda onu alt eder. Açılışta limp etmek "burada zayıf, pasif bir oyuncu var" diye ilan etmektir.

Bunu düzelten varsayılan kural çok net: **bir el oynanmaya değecek kadar iyiyse raise etmeye de değecek kadar iyidir; değilse fold et.** Biri senden *önce* raise ettiyse, tekrar raise etmek — yani 3-bet — geniş açılışları cezalandırmanın ve en iyi ellerinle pot büyütmenin yoludur. Bu raise-ya-da-fold kuralının istisnaları gerçek ve hepsi **fiyatla** ilgili. *Over*-limp — zaten limp etmiş birinin *arkasından*, pozisyonda, küçük bir çift gibi spekülatif bir elle call etmek — çok oyunculu bir pota ucuz bir koltuk satın alır. **Big blind'ını savunmak** bunların en büyüğü: 2,5bb'lik bir açılışa karşı (heads-up, small blind fold etmiş, ante yok) ==1bb zaten ortada==; yani 4bb'lik bir pota 1,5bb call ediyorsun ve kâğıt üzerinde sadece ==1,5 ÷ 5,5 = %27== equity'ye ihtiyacın var. Pozisyon dışında ham equity'nin tamamını gerçekleştiremezsin; o yüzden %27'yi bitiş çizgisi değil taban say. Call'un aksiyonu *kapattığı* için de BB range'inin geniş bir dilimi 3-bet ya da fold yerine düz call eder. Derin stack'lerle bir raise'e karşı küçük bir çiftle **set-mining** üçüncüsü (matematiği aşağıda). Bunlar strateji değil, indirimdir — bu tür spotların dışında raise ya da fold. İlk giren kuralının kendisi normal derinlikte cash oyunu varsayılanıdır: raise gelmemiş bir potta small blind'ı tamamlamak ve kısa turnuva stack'lerinde solver'ların kullandığı buton open-limp'leri, kuralın kapsamadığı başlıca meşru limp'lerdir.

---

## Karar 4 — Flop'ta bahse devam mı? (c-bet)

Flop öncesi raise ettin, biri call etti ve flop açıldı. Potların çoğu aslında burada kazanılıp kaybedilir — ve buradaki araç [c-bet (continuation bet, devam bahsi)](/tr/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp"): board sana yardım etsin etmesin, flop öncesi raise eden sen olduğun için flop'ta bahse devam etmek.

C-bet işe yarar çünkü flop öncesi güç gösteren *sendin*; board bu yüzden "senin"dir. Ama kaçınman gereken hata şu: **tek bir doğru c-bet yüzdesi yoktur.** Eski tavsiye "neredeyse her flop'a bet et" derdi. Modern strateji bunun üç şeye bağlı olduğunu söyler:

- **Pozisyon** — kuru, yüksek kartlı bir board'da (mesela K‑7‑2) pozisyondaysan sık c-bet atabilirsin; pozisyon dışında frekans sert düşer, çünkü hem daha az bilgin hem daha az fold equity'n vardır. Kesin aralıklar [c-bet rehberinde](/tr/blog/holdem-continuation-bet).
- **Board dokusu** — rakibini ıskalayan kuru board'lar bet etmeyi destekler; call range'lerine oturan ıslak, bağlantılı board'lar (iki aynı renkli 9‑8‑7) dikkat ister.
- **Rakip sayısı** — heads-up rahatça bet edebilirsin; iki ya da daha fazla call'cıya karşı **ellerin yarısından azında** c-bet at, çünkü biri mutlaka *bir şeyle* bağlanmıştır.

Boyutlandırmada, kuru bir board'da geniş bir range'le bet ediyorsan potun **%25–35'i** kadar küçük bir bet işe yarar; daha ıslak bir board'da polarize bir value-blöf range'ine **%65+** gibi daha büyük bir bet uyar. **Raise** yersen ve elinde hiçbir şey yoksa, iş doğrudan Karar 5'e akar. [Check, bet ve raise](/tr/blog/holdem-betting-actions) mekaniği bahis hareketleri rehberinde.

---

## Karar 5 — Ne zaman fold ederim? (En çok para kurtaran karar)

![Gökkuşağı 2♥ 7♦ 9♠ flop'una karşı A♣ K♣, gelen check-raise ve altın renkli FOLD şeridiyle cevap veren infografik](/images/holdem-strategy-fold-ace-high.webp "Pokerin en kârlı hamlesi kimsenin fark etmediği hamledir — yenilmiş bir eli sana bir stack'e mal olmadan fold etmek")

Agresiflik pot kazandırır. **Disiplin stack'i korur.** Başa baş oyuncularla kazananları ayıran karar kahramanca bir call ya da şık bir blöf değildir — yenildiğinde fold etmenin sıkıcı, tekrar eden eylemidir.

Oynadığım bir elden somut bir örnek. ==A♣K♣== ile raise ettim ve bir call aldım. Flop ==2♥ 7♦ 9♠== geldi — tamamen ıska. Elimde as-yüksek var; ne çift ne draw. Bir c-bet atıyorum (Karar 4: pozisyondayım, board kuru) ve rakibim check-**raise** yapıyor. Bu noktada matematik basit: mümkün olan en iyi yüksek karta sahibim ve başka hiçbir şeyim yok; düşük limitlerde o board'da gelen check-raise neredeyse hiç blöf değildir. As-yüksek elimi fold edip en az kayıpla çıkıyorum. İki yıl önce olsa "görmek için call" ederdim — ve her seferinde karşıdaki 9'lu set'e ödeme yapardım.

Genel kural: **rakibinin anlattığı hikâye gerçekten elindeki eli yeniyorsa ve draw'ı tamamlamak için gereken oranın yoksa, bırak gitsin.** İyi ama yenilmiş bir eli fold etmek kaybetmek gibi hissettirir. Aslında oyundaki en kârlı tek alışkanlıktır. Elinde bir draw *varsa*, fold mu call mı kararı [pot odds](/tr/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") meselesine iner — aldığın fiyat ile kazandıran kartı yakalama ihtimalin.

---

## Atlayamayacağın matematik

Matematikçi olman gerekmiyor, ama kararlarının yarısının altında iki sayı yatar.

**Pot odds** bir call'un kârlı olup olmadığını söyler: call'un fiyatını potun büyüklüğüyle, sonra da kazandıran kartı yakalama ihtimalinle karşılaştır. Pot sana 4'e 1 veriyorsa ve draw'ın kabaca 5'te 1 gelip kazanıyorsa, call aşağı yukarı başa baştır; bundan iyiyse kârdır. Her "bu draw'ın peşinden gideyim mi?" spotunun motoru budur — [pot odds rehberi](/tr/blog/holdem-pot-odds) bunu 10 saniyelik bir tablo okumasına çevirir.

**Set-mining oranları** küçük çiftlerin neden spekülatif olduğunu açıklar. Flop'ta set — yani üçlü — yapma umuduyla 5'li bir cep çiftiyle bir raise'i call edersen, sadece **%11,8 ihtimalle, kabaca 8,5'te 1** bağlanırsın. Tuttuğunda harikadır: ==5♠5♦== ile flop ==5♣ K♠ 2♦== gelir ve elinde bir overpair'i stack'leyecek gizli bir set vardır. Ama flop'ların ~%88'ini ıskaladığın için set-mining ancak efektif stack'ler tuttuğunda sana ödeme yapacak kadar derinse kârlıdır — kaba bir ölçü olarak **call'un en az ~15–20 katı.** Stack'ler sığ mı? O spekülatif call bir kaçağa dönüşür. İhtiyacın olacak her sayı [poker olasılıkları ve olasılık tablosu](/tr/blog/holdem-probability) yazısında.

---

## Yeni başlayanlara en pahalıya patlayan 6 kaçak — ve çözümü

Stratejiyi yeni oyunculara gerçekten para kaybettiren şeylere indirgersen, karşına her seferinde aynı kısa liste çıkar. Bu altısını düzelt, işin %90'ını yapmış olursun:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Kaçak | Neden çip eritir | Çözüm |
|:---|:---|:---|
| **Çok fazla el oynamak** | Zayıf başlangıç elleri flop'ta zayıf eller yapar ve flop sonrası sana pahalıya patlar | Flop öncesi ~%80 fold (Karar 2) |
| **Çok fazla call** | Call'un fold equity'si yoktur — kimseyi fold ettirmez; ya tutması ya da showdown'a önde ulaşması gerekir | Raise ya da fold; "görmek için call"ı bırak (Karar 3) |
| **Fazla pasif olmak** | Kazananlar value için bet ve raise eder; pasiflik küçük potlar kazanıp büyükleri kaybettirir | Elin varken agresif çizgiyi seç (Karar 4) |
| **Pozisyonu yok saymak** | Pozisyon dışında çöp oynamak her turda tahmin yürütmek demektir | Erken sıkı, geç daha gevşek oyna (Karar 1) |
| **Oran yokken draw kovalamak** | Potun haklı çıkarmadığı "umut" call'ları | Her draw call'undan önce pot odds'a bak (Karar 5) |
| **Tilt'te oynamak** | Duygusal kararlar iyi bir seansı yakar | Net düşünemiyorsan kalk |

</div>

Altısından beşinin doğrudan beş karara oturduğuna dikkat et. Çerçeve soyut değil — kelimenin tam anlamıyla kaçak listesinin ters çevrilip düzeltilmiş hâli.

---

## Tight-aggressive: başlaman gereken tek stil

Beş karar işin *ne* olduğuysa, **tight-aggressive (TAG)** *nasıl* olduğudur — her kaynağın doğru başlangıç noktası olarak üzerinde anlaştığı tek stil. Bütün işi iki kelime yapar:

- **Tight (sıkı)** — az el oynarsın (Karar 2). Fold edersin, fold edersin, fold edersin ve önde olma ihtimalinin yüksek olduğu spotları beklersin.
- **Aggressive (agresif)** — ama oynadığında call ederek değil, raise ve bet ederek girersin (Karar 3 ve 4). Kararı rakiplerine verirsin, tersi değil.

TAG işe yarar çünkü yeni başlayanların en büyük iki kaçağına — çok el oynamak ve fazla pasif oynamak — aynı anda saldırır ve kazanan stiller arasında öğrenme eğrisi en yumuşak olanıdır. Teorik *optimum* değildir; güçlü modern oyuncular daha agresif (LAG) ve dengeli range'lere doğru genişler. Ama neredeyse her gündelik masayı yenebileceğin bir temel olarak yanına yaklaşan yok. Önce tight-aggressive'de ustalaş, beş karar ikinci doğa hâline gelince de bilinçli olarak gevşe.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-positions | Poker pozisyonları: UTG'den butona | /images/holdem-positions-hero.webp
/tr/hand-chart | Hangi elleri gerçekten oynamalısın | /images/holdem-starting-hands-chart-hero.webp
:::

## SSS

**Q. Texas Hold'em için en iyi strateji nedir?**

A. Tekrar eden beş karar üzerine kurulu tight-aggressive bir stil oyna: elleri pozisyonuna göre seç, sana gelenlerin çoğunu fold et (flop öncesi yaklaşık %80), pota limp yerine raise ederek gir, inisiyatif sendeyken ve board ile rakipler izin veriyorsa flop'ta c-bet at, yenildiğinde de disiplinli fold'lar yap. Bu kombinasyon, hiçbir ileri teori gerektirmeden neredeyse her gündelik masayı yener.

**Q. Yeni başlayanlar için en iyi poker taktikleri hangileri?**

A. Tight-aggressive (TAG). Az el oyna ama agresif oyna — call yerine raise et, ıskaladığında hızla fold et. Yeni başlayanların en yaygın iki kaçağını (çok el oynamak ve fazla pasif oynamak) doğrudan düzeltir ve kazanan stiller arasında öğrenme eğrisi en yumuşak olanıdır. Daha gevşek, daha ileri yaklaşımları denemeden önce buradan başla.

**Q. Poker nasıl kazanılır?**

A. Daha çok el oynayarak değil — her elde aynı beş spotta daha iyi kararlar vererek kazanırsın: pozisyon, el seçimi, raise ya da fold, c-bet ve fold. Kazananlar kaybedenlerden daha çok fold eder, daha çok raise eder ve daha az call eder. Zamanla daha seçici başlangıç elleri ve disiplinli fold'lar büyük potları kazanıp küçükleri kaybetmen demektir — oyunun tamamı da bu.

**Q. Pokerde ne zaman fold edilir?**

A. Rakibinin anlattığı hikâye elindeki eli yeniyorsa ve draw'a devam etmek için gereken pot odds'un yoksa fold et. Somut olarak: zayıf elleri flop öncesi fold et, ıskalayıp gerçek bir agresiflikle karşılaştığında fold et, fiyat yanlışsa draw'ları fold et. İyi ama yenilmiş bir eli fold etmek kaybetmek gibi hissettirir, ama pokerdeki en kârlı tek alışkanlıktır.

**Q. Pokerde ne zaman bet, ne zaman check edilir?**

A. Pot büyütmeye değer bir elin varsa ya da rakiplerin fold edebileceği iyi bir blöf spotundaysan bet et — bet potu iki yoldan kazandırır (ya fold ederler ya da en iyi el sendedir). Elin orta kararsa ve potu küçük tutmak istiyorsan, net bir planın olmadan pozisyon dışındaysan ya da check güçlü bir elle tuzak kurmanı sağlıyorsa check et. Flop öncesi raise eden sensen, flop'ta c-bet çoğu zaman varsayılanındır.

**Q. Pokerde ne zaman blöf yapılır?**

A. Hikâye inandırıcıysa ve rakibin gerçekten fold edebilecekse blöf yap — sadece ıskaladığın için değil. En iyi blöflerin bir yedeği vardır: call edilse bile kazanabilecek bir draw (semi-blöf), pozisyonda, tek rakibe karşı, senin range'ini destekleyen bir board'da. Birden fazla call'cıya ya da hiç fold etmeyen oyunculara saf blöf yapmak, parayı ateşe atmaktır.

**Q. Ne zaman 3-bet yapılır?**

A. En güçlü ellerinle — büyük çiftler ve A‑K — öndeyken potu büyütmek için value 3-bet'i (flop öncesi raise edene re-raise) yap; buna call edildiğinde iyi oynayan, suited connector'lar ya da suited aslar gibi ellerle daha az sayıda blöf ekle. Geç pozisyondan ve çok geniş açan oyunculara karşı daha çok 3-bet yap; pozisyon dışındaki en zayıf ellerini düz call etmek yerine fold et.

**Q. Ne zaman raise, ne zaman call edilir?**

A. Çoğu spotta, devam etmeye değer bir elin varsa call yerine raise'i tercih et. Raise potu iki yoldan kazandırır (fold equity artı en iyi el) ve inisiyatifi alır; call'un fold equity'si yoktur — call'a kimse fold etmez — ve başkalarını ucuza içeri alır. Elin devam edecek kadar güçlü ama büyük bir pot kuracak kadar güçlü değilse, küçük bir çiftle set-mining yapıyorsan ya da zayıf bir oyuncunun blöflerini içeride tutmak istiyorsan call et.

**Q. Texas Hold'em'de kaç el oynamalısın?**

A. İçinden geldiğinden çok daha az. Kazanan tight-aggressive bir oyuncu ellerinin kabaca %80'ini flop öncesi fold eder; erken pozisyonda daha sıkı, butonda daha gevşek oynar. Kabaca beş elden birinden fazlasıyla pota giriyorsan neredeyse kesin çok fazla el oynuyorsun — sıkılaşmak gelişmenin en hızlı yoludur.

**Q. Tight-aggressive (TAG) ne demek?**

A. Tight-aggressive, dar bir güçlü el range'i oynamayı (tight) ama bu elleri call yerine bet ve raise'lerle iddialı oynamayı (aggressive) anlatır. Hem kârlı hem basit olduğu için yeni başlayanlara en çok önerilen stildir: ellerin çoğunu fold et, tuttuklarınla saldır. Tersi — loose-passive, çok el oynayıp çoğunlukla call etmek — klasik kaybeden profilidir.

**Q. Ne sıklıkla c-bet (continuation bet) atmalısın?**

A. Tek bir sayı yok — pozisyona, board'a ve kaç rakiple karşı karşıya olduğuna bağlı. Kuru bir board'da tek rakibe karşı pozisyondaysan en sık c-bet atarsın; pozisyon dışında ya da iki ve daha fazla rakibe karşı çok daha az — kesin aralıklar [c-bet rehberinde](/tr/blog/holdem-continuation-bet). Rakibinin range'ini ıskalayan board'larda daha çok, ona oturan ıslak board'larda daha az bet et; geniş bet ediyorsan küçük (potun %25–35'i), polarize isen daha büyük (%65+) boyut kullan.

**Q. Poker şans oyunu mu, beceri oyunu mu?**

A. İkisi de — ama zamanla beceri kazanır. Tek bir elde büyük bir şans payı vardır; bu yüzden bir yeni başlayan bir seansta bir profesyoneli stack'leyebilir. Ama binlerce el boyunca daha iyi karar verenin avantajı baskın çıkar ve varyans dengelenir — aynı oyuncuların sürekli kazanmasının sebebi de tam olarak budur. Poker, şanstan bir desteyle oynanan bir beceri oyunudur.

**Q. GTO poker nedir?**

A. GTO (Game Theory Optimal), heads-up'ta sömürülemeyen, matematiksel olarak dengeli bir stratejidir — blöf ve value bet'leri, rakiplerine kârlı bir karşılık bırakmayacak oranlarda karıştırırsın. Solver'ların hesapladığı teorik idealdir; ama düşük limitlerde *exploitative* (sömürücü) oynayarak daha çok para kazanırsın: belirli kaçakları (fazla fold eden ya da fazla call eden oyuncuları) cezalandırmak için GTO'dan sapmak. Tight-aggressive ile başla, sömürmeyi öğren ve GTO'yu ilk gün hedefi değil, referans noktası olarak gör.

**Q. Pokerde nasıl daha iyi olursun?**

A. Masadan uzakta çalış, masada sıkılaş. Çoğu oyuncu için en hızlı kazanımlar: flop öncesi daha çok el fold et (~%80 kuralı), limp yerine raise ya da fold et ve en çok çip kaybettiğin elleri sonradan gözden geçirip kaçağı bul. Her şeyi birden değil, bir seferde bir kavram ekle — önce pozisyon, sonra pot odds, sonra c-bet. Hacim artı dürüst gözden geçirme, herhangi tek bir "ipucu"nu yener.

---

## Beş karar, bir kez daha

1. **Pozisyon** — geç pozisyonda daha çok, erken pozisyonda daha az el oyna; buton en kârlı koltuğun.
2. **El seçimi** — flop öncesi ~%80 fold et; tuttuğun eller ortalamada rakiplerininkinden güçlüdür.
3. **Raise ya da fold** — normal derinlikte cash oyununda açılışta limp etme (raise gelmemiş potta small blind'ı tamamlamak istisnadır); raise potu hemen kazanabilir, limp asla.
4. **Devam** — inisiyatif sendeyken c-bet at, ama board'a, pozisyona ve rakiplere göre ayarla.
5. **Disiplin** — yenilmiş elleri ve oranı olmayan draw'ları fold et; en çok parayı kurtaran hamle bu.

Bütün çerçeve bu. Ezberlenecek on ipucu değil — her elde sırayla sorulacak beş soru. Bunları cevaplamakta ustalaşırsan, hâlâ daha uzun bir liste arayan oyuncuları sessizce geçersin. [Başlangıç eli tablosu](/tr/hand-chart) ve gerçek bir [pozisyon](/tr/blog/holdem-positions) farkındalığıyla başla, üzerine [pot odds](/tr/blog/holdem-pot-odds) ekle; oturacağın neredeyse her masayı yenen bir oyun kurmuş olursun.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pokerde pozisyonlar</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Her koltuğun adı ve kimin ne zaman konuştuğu</div>
  </a>
  <a href="/tr/hand-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Başlangıç eli tablosu</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Fold etmen gereken o %80</div>
  </a>
  <a href="/tr/blog/holdem-continuation-bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">C-bet (devam bahsi)</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Flop'ta ne zaman bahse devam etmeli</div>
  </a>
  <a href="/tr/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Olasılık</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Pot odds nasıl bulunur</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Her fold'un arkasındaki 10 saniyelik matematik</div>
  </a>
</div>
`.trim(),
};

export default POST;
