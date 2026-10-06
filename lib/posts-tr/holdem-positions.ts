import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Poker pozisyonları: UTG'den butona her koltuğun adı ve tablosu",
  seoTitle: "Poker pozisyonları: UTG, CO, button — her elde adın değişir",
  desc: "İsimler sandalyeyle değil, butonla döner. Erken, orta ve geç pozisyon: tüm poker pozisyonları, koltuk numaraları, 6-max haritası ve ilk kimin konuştuğu.",
  tldr: "Poker pozisyonları, dağıtıcı butonuna göre belirlenen koltuk adlarıdır: UTG, lojack, hijack, cutoff, buton ve blind'lar; normalde her elde saat yönünde bir koltuk kayarlar. Preflop'ta ilk UTG, en son big blind konuşur; flop'tan sonra ilk small blind, en son buton konuşur (heads-up'ta buton aynı zamanda small blind'dır: preflop ilk, postflop son). Fiziksel koltuk numaraları hiç değişmez, pozisyonlar değişir.",
  category: "strategy",
  date: "2026-10-06",
  updated: "2026-10-06",
  masterUpdated: "2026-09-28",
  keepImagesInBody: true,
  readTime: "12 dk",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Üstten çekilmiş profesyonel poker masası: dokuz oyuncu koltuğunun önünde çip yığınları ve altın renkli dağıtıcı butonu",
  tags: [
    "poker pozisyonları",
    "poker masa pozisyonları",
    "button poker",
    "cutoff poker",
    "utg nedir",
    "hijack lojack poker",
    "pokerde ilk kim konuşur",
    "poker koltuk numaraları",
  ],
  content: `
İlk canlı cash oyunumda, sonradan UTG olduğunu öğreneceğim bir koltuğa oturmuştum. Elime J♥ J♠ geldi ve raise ettim. Hijack call etti. Cutoff call etti. Buton call etti. Big blind 3-bet attı. Ne yapacağımı hiç bilmiyordum — call ettim ve üç sokak boyunca çip kanattım.

Üç el sonra aynı J♥ J♠ ile butondaydım. Raise ettim. Herkes fold etti. Tek bir flop bile görmeden $14 kazandım.

Aynı el. Bambaşka bir sonuç. Değişen tek şey koltuğumdu — ve o gece fark ettim ki koltukların *adlarını* bile tam bilmiyordum, ne anlama geldiklerini bırak. Bu yazı o adların haritası; bu adlarla gerçekte ne yapacağın ise [poker stratejisi rehberinin](/tr/blog/holdem-strategy) konusu. Bir elin dağıtımdan showdown'a nasıl aktığını hâlâ öğreniyorsan önce [Texas Hold'em kuralları rehberinden](/tr/blog/texas-holdem-rules-for-beginners) başla; bu yazı, o rehberin bildiğini varsaydığı koltuk haritasıdır.

---

> **Kısa cevap**
> Poker pozisyonları, ==dağıtıcı butonuna göre belirlenen koltuk adlarıdır== — UTG, lojack, hijack, cutoff, buton, small blind, big blind — ve buton ilerledikçe ==normalde her elde saat yönünde bir koltuk kayarlar==. Preflop'ta ilk UTG, en son big blind konuşur. Flop'tan sonra ilk small blind, en son buton konuşur. (Heads-up'ta buton aynı zamanda small blind'dır: preflop ilk, postflop son konuşur.)

---

## Pokerde pozisyon nedir? Erken, orta ve geç pozisyon

Pokerde pozisyon, dağıtıcı butonuna göre nerede oturduğun ve bu yüzden kaçıncı konuştuğundur. Preflop'ta ilk konuşan koltuklar ==erken pozisyon== (UTG, UTG+1, UTG+2), ortadakiler ==orta pozisyon== (lojack, hijack), en son konuşanlar ==geç pozisyondur== (cutoff, buton); blind'lar ayrı bir grup sayılır. Buton flop, turn ve river'da en son konuşur; preflop'ta son söz ise big blind'ındır. 6-max'te ilk konuşan koltuk (9-max'in lojack'i) UTG adını alır ve erken pozisyon sayılır.

---

## Pokerde pozisyon neden önemli?

Sonra konuşan oyuncu, karar vermeden önce rakiplerinin check, bet ya da raise'ini görür; önce konuşan ise bu bilgi olmadan karar verir. Bu yüzden aynı el geç pozisyonda daha kolay oynanır ve erken koltuklardan daha az el açılır — girişteki iki J♥ J♠ eli arasındaki fark da buydu. Pozisyon, [poker stratejisi rehberindeki](/tr/blog/holdem-strategy#pozisyon) her elde verdiğin beş kararın ilkidir.

---

## Poker masasında hangi pozisyonlar var? (Tam koltuk haritası)

Pozisyon bir sandalye değildir — **dağıtıcı butonuna göre nerede oturduğunun adıdır** ve ==her sokakta ne zaman konuşacağını belirler==. Normal bir oyunda buton her elden sonra saat yönünde bir koltuk ilerler; yani masadaki herkes bir elden diğerine farklı bir ad taşır.

İşte 9 kişilik (9-max) masanın tam pozisyon tablosu — her koltuğun adı, kısaltması, bölgesi ve flop'tan önce ve sonra tam olarak kaçıncı konuştuğu:

![Her koltukta çip yığınları olan dokuz kişilik poker masası ve bir oyuncunun önünde D yazan dağıtıcı butonu](/images/holdem-button-position-hero.webp "Dağıtıcı butonu her koltuğun pozisyonunu ve oyun sırasını belirler")

| Koltuk | Kısaltma | Bölge | Preflop | Postflop |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | Erken | 1. (ilk) | 3. |
| Under the Gun +1 | **UTG+1** | Erken | 2. | 4. |
| Under the Gun +2 | **UTG+2** | Erken | 3. | 5. |
| Lojack | **LJ** | Orta | 4. | 6. |
| Hijack | **HJ** | Orta | 5. | 7. |
| Cutoff | **CO** | Geç | 6. | 8. |
| Button | **BTN** | Geç | 7. | **Son** |
| Small Blind | **SB** | Blind | 8. | **1.** |
| Big Blind | **BB** | Blind | 9. (son) | 2. |

Takla atan sıraya dikkat et: ==blind'lar preflop'ta son, postflop'ta ilk konuşur==; buton ise flop sonrası her sokakta en son konuşur. Bazı koltukları yapısal olarak diğerlerinden iyi yapan şey kartlar değil, işte bu sıralamadır.

> **Canlı masa notu:** buton, normalde her elde saat yönünde bir koltuk ilerleyen fiziksel bir disktir. "UTG", o an butonun üç solunda oturan kişidir — sabit bir sandalye değil.

---

## Poker pozisyon adları ve kısaltmaları: UTG, LJ, HJ, CO, BTN, SB, BB

Masada duyacağın ya da bir strateji yazısında okuyacağın her pozisyon adı, tek tek:

| Kısaltma | Tam adı | Grup | Neyi anlatır |
|:---|:---|:---|:---|
| **UTG** | Under the Gun | Erken (EP) | Preflop'ta ilk konuşan, big blind'ın hemen solu |
| **UTG+1 / UTG+2** | Under the Gun artı bir / iki | Erken (EP) | UTG'den sonra saat yönündeki koltuklar |
| **LJ** | Lojack | Orta (MP) | Butonun üç sağındaki koltuk |
| **HJ** | Hijack | Orta (MP) | Butonun iki sağındaki koltuk |
| **CO** | Cutoff | Geç (LP) | Butonun bir sağındaki koltuk |
| **BTN** | Button (dealer) | Geç (LP) | Dağıtıcı diskinin olduğu koltuk — postflop son konuşan |
| **SB** | Small Blind | Blind'lar | Butonun ilk solu; küçük zorunlu bahsi koyar |
| **BB** | Big Blind | Blind'lar | Butonun ikinci solu; tam zorunlu bahsi koyar |

Daha geniş bölge etiketlerini de görürsün: ==**EP** (early position, erken pozisyon)== UTG koltuklarını, ==**MP** (middle position, orta pozisyon)== lojack ve hijack'i, ==**LP** (late position, geç pozisyon)== ise cutoff ve butonu kapsar. Eski kitaplar lojack ile hijack'i "MP1/MP2" diye tek torbaya koyar — aynı koltuklar, farklı etiketler.

Adları bilmek birinci adım. Her birinden gerçekte ne *yapacağın* — açılışlar, steal'ler, pozisyonda ve pozisyon dışında oyun — bir strateji sorusudur. Genel kurallar [pozisyonun da yer aldığı beş kararlık strateji çerçevesinde](/tr/blog/holdem-strategy), koltuk koltuk açılış range'leri ise [başlangıç elleri tablosunda](/tr/hand-chart) yer alır.

---

## Pokerde koltuk numarası ve pozisyon — Seat 1 bir pozisyon değildir

İlk kez canlı oynayan neredeyse herkes buna takılır: floor **"Masa 12, Koltuk 5"** diye seslendiğinde, o numaranın ==poker pozisyonlarıyla hiçbir ilgisi yoktur==.

Çoğu kart salonunda fiziksel koltuklar krupiyenin hemen solundan numaralanır — ==Seat 1 (Koltuk 1) geleneksel olarak krupiyenin solundaki ilk sandalyedir== ve saat yönünde krupiyenin sağındaki Koltuk 9'a ya da 10'a kadar sayılır. Bu numaralar sandalyeye çakılıdır. Personel bunları lojistik için kullanır: yeni oyuncuyu oturtmak, çip getirmek, süre istemek.

Pozisyonlar bunun tam tersidir — ==butonla birlikte, normalde her elde, saat yönünde bir koltuk dönerler==. Koltuk 5 bu elde buton, bir sonrakinde cutoff, ondan sonrakinde hijack olabilir.

:::compare
Koltuk numaraları (fiziksel) | Pozisyonlar (poker)
Sandalyeye sabittir — Koltuk 1 genelde krupiyenin hemen solu | Her elde dağıtıcı butonuyla birlikte hareket eder
Personel kullanır: "Koltuk 5, çipler geliyor" | Strateji kullanır: "cutoff açıyor"
Seans boyunca hiç değişmez | Normalde her elde değişir, saat yönünde bir koltuk
NEREDE oturduğunu söyler | NE ZAMAN konuştuğunu söyler
:::

Yani "pokerde Seat 1 nedir?" sorusunun cevabı sıkıcıdır — bir sandalyedir — ve asıl mesele de tam olarak bu. ==Koltuk numarası bir adrestir; pozisyon bir görevdir==; görev de her elde yeniden dağıtılır.

---

## UTG nedir? Pokerde "under the gun" ne demek?

**UTG, "Under the Gun"ın kısaltmasıdır** — big blind'ın hemen solundaki koltuk ve ==preflop'ta ilk konuşan oyuncu==. Adı o anın baskısını anlatır: tek bir rakibin ne yaptığını görmeden çipini ortaya koymak zorundasın, sanki silah zoruyla karar veriyormuşsun gibi.

9 kişilik tam masada aslında üç "under the gun" koltuğu vardır — **UTG, UTG+1 ve UTG+2** — big blind'dan saat yönünde sayılır. Gerçekten kör konuşan yalnızca ilkidir; +1 ve +2 koltukları en azından önce bir iki kararı görür.

Tanım bu kadar. UTG'nin *nasıl oynanacağı* — neden masanın en sıkı range'ini istediği ve neden orada standart çizginin raise-ya-da-fold olduğu — strateji tarafının konusudur.

---

## Hijack ve lojack — ve neden bu adı taşıyorlar

**Hijack (HJ)**, butonun iki sağındaki koltuktur. **Lojack (LJ)** bir koltuk daha öncedir, butonun üç sağı. İkisi birlikte modern 9-max oyunda orta pozisyonu oluşturur.

Adların belgelenmiş resmî bir kökeni yok — poker argosunun nadiren olur — ama genelde anlatılan hikâye şöyle:

- **Hijack:** cutoff ve buton, klasik blind çalma (blind steal) koltuklarıdır. Bir önceki koltuktaki oyuncu ilk raise'i yaptığında, geç koltukların yapmayı beklediği ==**steal'i "kaçırmış" (hijack)** olur== — koltuk da adını buradan almış.
- **Lojack:** sonradan, ==hijack'e takılan şakacı bir kelime oyunu== olarak çıktı — sıralamada bir "alt" basamaktaki koltuk. Anlatıların çoğu buna LoJack hırsızlık önleme markasının yankısını da ekler: bir hijack, bir kademe aşağısı.

İkisini de etimoloji değil, masa efsanesi olarak al. Efsane olmayan kısım şu: hijack ve lojack, modern range tablolarının ve eğitim sitelerinin çoğunda göreceğin gerçek, standart adlardır; ezbere bilmeye değer.

---

## Cutoff ve buton (button, dealer pozisyonu)

**Cutoff (CO)**, ==butonun bir sağındaki koltuktur== — dağıtıcıdan önceki son pozisyon. Dolaşan iki köken hikâyesi var: biri, bu koltuğun ilk raise'i yaparak butonun blind çalma şansını "kestiğini" (cut off) söyler; daha eski olanı ise oyuncuların kendi dağıttığı ev oyunlarında, dağıtıcının sağındaki oyuncunun karıştırmadan sonra ==desteyi kestiğini== anlatır. Hangisi olursa olsun ad yerleşti ve cutoff her yerde geç pozisyon sayılır.

**Button (BTN)** — Türkçede çoğu zaman **buton**, ya da **dealer pozisyonu** — fiziksel dağıtıcı diskiyle işaretlenen koltuktur. Kumarhane oyunlarında kartları profesyonel bir krupiye dağıtır, yani buton yalnızca, krupiye olmasaydı kartları ==*dağıtacak olan* kişiyi== işaretler; bahis sırasını sabitleyen de budur: buton ==flop sonrası her sokakta en son konuşur== ve masadaki diğer her şey o diske olan uzaklığına göre adlandırılır.

Bu garantili son söz hakkı, butonun pokerin en kârlı koltuğu sayılmasının sebebidir — sayılarla birlikte tam gerekçe strateji tarafının konusudur.

---

## Blind'lar: SB ve BB koltukları

Butonun solundaki iki koltuk aynı anda hem pozisyon *hem* zorunlu bahistir:

- **Small blind (SB, küçük kör):** butonun ilk solundaki koltuk. Kartlar dağıtılmadan önce zorunlu bir bahis koyar — genelde big blind'ın yarısı.
- **Big blind (BB, büyük kör):** saat yönünde bir sonraki koltuk. Ele girmenin fiyatını belirleyen tam zorunlu bahsi koyar.

Pozisyon olarak, onları tanımlayan şey konuşma sırasındaki ters dönüştür: blind'lar ==preflop'ta son== konuşur (zaten para koymuşlardır, bu yüzden önce herkes onların bahsine cevap vermek zorundadır) ama ==postflop'ta ilk==, tüm masadan önce konuşur — flop'ta, turn'de ve river'da aynı şekilde.

Blind'ların neden var olduğu, bir turun (orbit) sana neye mal olduğu ve onları nasıl savunacağın ayrı bir konu — [small blind ve big blind rehberi](/tr/blog/holdem-blind-meaning) zorunlu bahis mekaniğini ve hesabını eksiksiz anlatır.

---

## Pokerde ilk kim konuşur — preflop ve postflop (blind'lar önce mi oynar?)

Pozisyonlarla ilgili en çok sorulan soru, tek tabloda:

| Sokak | İlk konuşan | Son konuşan |
|:---|:---|:---|
| **Preflop** | **UTG** — big blind'ın ilk solundaki koltuk | **Big blind** — kimse raise etmediyse check ya da raise edebilir |
| **Flop / Turn / River** | **Small blind** — ya da butonun solundaki ilk aktif koltuk | **Buton** — ya da ondan önceki en yakın aktif koltuk |

Peki — **blind'lar önce mi oynar?** ==Preflop'ta hayır. Postflop'ta evet.== Flop'tan önce blind'lar parayı zaten koymuştur, bu yüzden aksiyon UTG'den başlar ve en son onlara döner — big blind herkesten sonra konuşur. Flop'tan sonra sıra butondan itibaren saat yönünde sıfırlanır: ilk small blind konuşur, ikinci big blind, buton ise her zaman en son.

İki blind arasında ise: ==small blind her sokakta big blind'dan önce konuşur==, preflop'ta da postflop'ta da — tek bir istisnayla, aşağıda anlatılan heads-up.

Komşu bir soruya da bir satır: **showdown**'da varsayılan kural, son bet ya da raise yapan oyuncunun kartlarını önce açmasıdır (river check-check geçtiyse butonun solundaki ilk aktif koltuk açar) — tüm görgü kuralları [showdown kuralları rehberinde](/tr/blog/holdem-showdown-rules). Bir elin sokak sokak tam akışı için [oyun sırası](/tr/blog/holdem-game-order) yazısına bak.

---

## Oyuncu sayısına göre poker pozisyonları: heads-up'tan 10 kişiye (6-max ve full ring)

Pozisyon adları masa büyüklüğüyle değişmez — oyuncu eksildikçe ==önce erken pozisyondan düşerler==. Buton, blind'lar, cutoff ve hijack en uzun hayatta kalanlardır; UTG+1 ve üstü koltuklar yalnızca full ring (tam) masalarda vardır. İşte 2 oyuncudan 10'a harita, preflop konuşma sırasıyla:

| Oyuncu | Preflop konuşma sırası (ilk → son) |
|:---:|:---|
| **2 (heads-up)** | BTN (small blind'ı koyar) → BB |
| **3** | BTN → SB → BB |
| **4** | CO (burada "UTG" koltuğu) → BTN → SB → BB |
| **5** | HJ (burada "UTG" koltuğu) → CO → BTN → SB → BB |
| **6 (6-max)** | UTG (LJ de denir) → HJ → CO → BTN → SB → BB |
| **9 (full ring)** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**Herkesin sezgisini bozan heads-up'tır.** Yalnızca iki oyuncu varken ==small blind'ı buton koyar== — aynı koltuk hem BTN hem SB'dir. Bu da butonun ==preflop'ta **ilk**== konuştuğu (big blind her zamanki gibi son konuşur), ama ==flop sonrası her sokakta yine **son**== konuştuğu anlamına gelir; big blind ise postflop'ta ilk konuşur. Diğer tüm masa büyüklükleri normal kalıbı izler; en iyi koltuğu bir blind'la birleştiren yalnızca heads-up'tır.

**6-max ile full ring** arasındaki fark tamamen çıkarmadır: üç erken koltuk (UTG, UTG+1 ve UTG+2) düşer ve UTG adını lojack devralır; yani 6-max sırası UTG → HJ → CO → BTN → SB → BB'dir. Pratik sonuç, bir koltuğun "daha geç" oynaması değildir — cutoff'un arkasında iki durumda da üç oyuncu vardır. Asıl sonuç şu: ==erken koltuklar gidince çok daha sık blind'larda ve geç pozisyonda oturursun, önünde açan oyuncu da azalır== — 6-max'te UTG sekiz değil beş rakiple karşı karşıyadır. İlk koltuğun daha geniş açmasının ve kısa masada genel olarak daha çok el oynamanın sebebi budur; cutoff'un range'i ise neredeyse hiç değişmez. Her pozisyonu kazanca çevirmenin genel kuralları [poker stratejisi rehberinde](/tr/blog/holdem-strategy), koltuk koltuk açılış range'leri ve onları dolduran eller ise tek tek [başlangıç elleri tablosunda](/tr/hand-chart) yer alır.

> **Adlandırma uyarısı:** bazı siteler ve salonlar 6-max'in ilk koltuğuna UTG yerine "LJ" ya da "MP" der, 10 kişilik masadaki orta koltuklar da bazen "MP1/MP2" diye geçer. Etiketler değişir; konuşma sırası asla değişmez.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-strategy | Poker stratejisi: beş kararlık çerçeve | /images/holdem-strategy-hero.webp
/tr/hand-chart | Pozisyona göre başlangıç elleri tablosu | /images/holdem-starting-hands-chart-hero.webp
:::

## Sıkça sorulan sorular

**Q. Pokerde UTG ne demek?**

A. UTG, "Under the Gun"ın kısaltmasıdır — big blind'ın hemen solundaki koltuk ve preflop'ta ilk konuşan oyuncu. Adı, tek bir rakibin kararını görmeden çip koymanın baskısını anlatır. Full ring oyunlarda sonraki iki koltuğa UTG+1 ve UTG+2 denir.

**Q. Pokerde hijack nedir?**

A. Hijack (HJ), dağıtıcı butonunun iki sağındaki, cutoff'tan hemen önceki koltuktur. 9-max oyunda iki orta pozisyon koltuğunun sonrakisidir, 6-max'te ise preflop'ta ikinci konuşan koltuktur. Adın arkasında genelde anlatılan hikâye: bu koltuktan gelen bir raise, cutoff ve butonun yapmaya hazırlandığı blind steal'i "kaçırır".

**Q. Pokerde lojack nedir?**

A. Lojack (LJ), butonun üç sağındaki koltuktur — 9-max'te iki orta pozisyon koltuğunun öncekisidir. 6-max'te ilk konuşan koltuktur ve orada genelde sadece UTG denir. Ad çoğunlukla "hijack"e takılan şakacı bir kelime oyunu (bir koltuk aşağısı) olarak anlatılır, sık sık LoJack hırsızlık önleme markasıyla da ilişkilendirilir — belgelenmiş etimoloji değil, masa efsanesi.

**Q. Pokerde button ne demek?**

A. Button (buton, BTN), önünde "D" yazan diskin durduğu koltuktur: kartları krupiye dağıtsa bile disk, o elde dağıtıcı sayılan oyuncuyu gösterir ve normalde her elden sonra saat yönünde bir koltuk ilerler. Postflop'ta en son o konuşur; üç ve daha fazla oyunculu masada preflop'ta ondan sonra yalnızca iki blind konuşur. Bu koltuktan hangi ellerin açıldığını [buton açılış range'i tablosunda](/tr/hand-chart) görebilirsin.

**Q. Cutoff pozisyonu nedir?**

A. Cutoff (CO), saat yönünde butondan hemen önce gelen koltuktur ve geç pozisyonun ilk koltuğu sayılır. Preflop'ta arkasında yalnızca buton ve iki blind kalır; buton fold ettiyse flop'tan sonra en son cutoff konuşur. Cutoff'tan hangi ellerin açıldığını [cutoff açılış range'i tablosunda](/tr/hand-chart) görebilirsin.

**Q. Small blind mı önce konuşur, big blind mı?**

A. Small blind her sokakta big blind'dan önce konuşur. Preflop'ta iki blind da son konuşur (en son big blind — kimse raise etmediyse check ya da raise opsiyonuyla); postflop'ta small blind masada ilk konuşan koltuktur. Tek istisna heads-up'tır: orada small blind'ı buton koyar ve postflop'ta ilk big blind konuşur.

**Q. 6-max pokerde kaç pozisyon var?**

A. Altı: UTG (lojack da denir), hijack, cutoff, buton, small blind ve big blind. 9-max masaya göre üç erken koltuk (UTG, UTG+1 ve UTG+2) basitçe düşer ve UTG adını lojack devralır — adlar önce erken pozisyondan silinir, bu yüzden 9-max'in iki orta koltuğu da masada kalır. Kendi adını koruyan her koltuğun — hijack, cutoff, buton ve blind'lar — arkasında full ring'deki adaşıyla aynı sayıda oyuncu vardır; ama erken koltuklar gidince çok daha sık blind'larda ve geç pozisyonda oturursun, bu yüzden range'ler ortalamada daha geniş olur.

**Q. Poker pozisyonları her elde değişir mi?**

A. Evet. Dağıtıcı butonu her elden sonra saat yönünde bir koltuk ilerler ve tüm pozisyonlar butona olan uzaklığa göre adlandırıldığından, herkesin pozisyonu normalde her elde bir koltuk kayar. Sabit bir masada tam bir tur (orbit) boyunca her pozisyonu tam bir kez alırsın — istisnalar, bir oyuncu elenip ya da kalkıp masa dead button oynadığında (aynı oyuncu art arda iki elde son konuşabilir), oyuncular katıldığında, masalar dağıldığında ya da oyun heads-up'a düştüğünde ortaya çıkar.

**Q. Pokerde Seat 1 nedir?**

A. Seat 1 (Koltuk 1) bir pozisyon değil, fiziksel bir sandalyedir — çoğu kart salonunda krupiyenin hemen solundaki ilk koltuktur ve numaralar saat yönünde Koltuk 9'a ya da 10'a kadar gider. Personel koltuk numaralarını oturtma ve lojistik için kullanır. Poker pozisyonları (UTG, buton, blind'lar) her elde bağımsız olarak döner, yani Koltuk 1 herhangi bir pozisyon olabilir.

---

## Akılda kalacaklar

1. **Pozisyonlar sandalye değil, addır.** Her koltuk dağıtıcı butonuna olan uzaklığıyla adlandırılır ve her ad normalde her elde saat yönünde bir koltuk kayar.
2. **Tablo tek satırda:** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB. Preflop UTG'de başlar, big blind'da biter; postflop small blind'da başlar, butonda biter.
3. **Koltuk numarası ≠ pozisyon.** Koltuk 1 geleneksel olarak krupiyenin hemen soludur ve hiç kıpırdamaz; pozisyonlar her elde döner. Biri adres, diğeri görev.
4. **Masa küçüldükçe önden eksilir.** 6-max erken koltukları düşürür; heads-up butonu small blind'la birleştirir — preflop'ta ilk, postflop'ta son konuşur.

Adları ezbere bildiğinde asıl avantaj onlarla ne yaptığından gelir — [pozisyonun da yer aldığı beş kararlık strateji çerçevesi](/tr/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp") sıradaki okuman. Oradan sonra [başlangıç elleri tablosu](/tr/hand-chart) hangi elin hangi koltuktan oynanacağını gösterir, [el sıralaması rehberi](/tr/blog/holdem-hand-rankings) ise showdown'da gerçekte neyin kazandığını netleştirir.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Başlangıç rehberi</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Bir el dağıtımdan showdown'a nasıl işler</div>
  </a>
  <a href="/tr/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strateji</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker stratejisi ve taktikleri</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Pozisyonun da yer aldığı beş temel karar</div>
  </a>
  <a href="/tr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Oyun sırası</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Texas Hold'em'de oyun sırası</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Aksiyon sırası: preflop → flop → turn → river</div>
  </a>
  <a href="/tr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blind'lar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small blind ve big blind nedir?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Neden varlar ve doğru nasıl oynanırlar</div>
  </a>
</div>
`.trim(),
};
