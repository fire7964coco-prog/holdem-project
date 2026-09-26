import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Texas Hold'em showdown kuralları: kartı önce kim açar, muck ve slow roll",
  seoTitle: "Kartı önce kim açar? Showdown ve muck kuralları",
  desc: "Showdown'da kartları önce kim gösterir? Göstermeden muck yapabilir misin? Son agresör, cards speak, slow roll ve all-in — Hold'em showdown kuralları netçe.",
  tldr: "All-in olmayan bir turnuva showdown'ında river'ın son agresörü önce gösterir; river check geçildiyse butonun solundaki ilk aktif oyuncu başlar. Bir oyuncu all-in olduğunda, tüm bahis aksiyonu tamamlanınca kalan bütün eller hemen açılır. River bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir. Cash oyununda gösterme ve muck ev kuralına bağlıdır.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-26",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 dk",
  emoji: "🃏",
  tags: [
    "showdown kuralları poker",
    "kartları önce kim gösterir poker",
    "muck nedir poker",
    "slow roll poker",
    "all-in showdown texas holdem",
  ],
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "Texas Hold'em showdown infografiği — 4♥ 7♣ Q♦ K♠ 2♥ board'unda A♠ K♥ papaz çifti ve As kicker ile kazanır",
  content: `
River'daki bahsi call ettin. Şimdi ikiniz de karşılıklı bakıp duruyorsunuz, herkes önce diğerinin kartını açmasını bekliyor.

Kimse kıpırdamıyor.

Krupiye bir ona bir sana bakıyor. Masadaki diğerleri iç çekiyor.

==İşte bu kilitlenme neredeyse her canlı masada yaşanır== — çünkü çoğu yeni oyuncu kartı gerçekte kimin önce açması gerektiğini hiç öğrenmemiştir. Bu rehber showdown'ın tüm hallerini kapsıyor: normal eller, check'le geçilen river'lar, all-in'ler ve slow roll yaparsan neden seansın geri kalanında ters ters bakılacağın.

## Showdown'da kartları önce kim göstermek zorunda?

Kural, son bahis turunun nasıl bittiğine bağlı (buraya kadar gelen sokak sokak sıranın tamamı için [oyun sırasına](/tr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") bak).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Son sokaktaki aksiyon | Önce kim gösterir |
|--------------------|-----------------|
| All-in olmayan turnuvada river'da biri bahis yaptı ya da yükseltti | ==Son bahis yapan ya da yükselten oyuncu== önce gösterir |
| River'da herkes check dedi | Buton'un solundaki ilk aktif oyuncu önce gösterir |
| Önceki bir sokakta all-in (river'da bahis yok) | Turnuvada, tüm bahis aksiyonu tamamlanınca kalan bütün eller ortak kartlar açılmadan hemen gösterilir; cash oyununda ev kuralı geçerlidir |

</div>

![Texas Hold'em'de showdown sırası infografiği — J♥ 9♠ 4♦ 2♠ K♥ board'unda önce kim gösterir](/images/holdem-showdown-who-shows-first.webp)

==g:All-in olmayan turnuvada river'ın son agresörü önce gösterir.== Bahis yaptın ve call edildin mi, call edenden önce sen gösterirsin. Turnuvada river bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir (TDA 2024 Kural 18). Diğer istekler turnuva direktörüne; cash oyunları ev kuralına bağlıdır.

---

## Showdown'da göstermeden muck yapabilir misin?

Evet — **kaybettiysen**.

Son agresör elini gösterdikten sonra, diğer oyuncular şunlardan birini yapabilir:
- **Elini gösterir** — kazandığını düşünüyorsa
- **Yüzü kapalı muck'a atar** — kaybettiğini görüyorsa, izin verilen eli görme talepleri saklı kalmak üzere kartlarını açmasına gerek yoktur. İstisna: Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılır; muck yoktur (TDA 2024 Kural 16). Cash oyununda ev kuralı geçerlidir.

==r:Ama önemli bir istisna var:== river'daki bahsin call edildiyse, call eden senin elini görmek için tam bedeli ödedi. Muck'a atılmış bir eli krupiyeye açtırmayı istemek, işte bu **"o eli görmek istiyorum"** kuralıdır. Turnuvada ==TDA 2024 Kural 18== sınırı dar çizer: showdown'da elinde kart kalmayan ya da kapalı muck yapan kişi isteme hakkını yitirir. Bu hak yalnızca river bahsini call eden ve kartlarını açan ya da elinde tutan oyuncu için dokunulmazdır, o da sadece ==son agresörün== eli için. Gerisi turnuva direktörünün takdirindedir; cash oyununda hangi isteklere izin verileceğini ev kuralı belirler. (Bunu "birine göster, herkese göster" kuralıyla karıştırma — o kural, kartlarını gönüllü olarak bir oyuncuya gösterirsen masadaki herkesin de görme hakkı kazanması demektir.)

Pratik kural: ==All-in olmayan turnuvada river'ın son agresörü önce gösterir — call edilen blöfte de.== River bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir (TDA 2024 Kural 18). Diğer istekler turnuva direktörüne; cash oyunları ev kuralına bağlıdır. Kazanabilecek bir eli aceleyle muck etme; turnuvada all-in ve tüm bahis aksiyonu tamamlandıysa muck istisnası yoktur.

---

## River'da herkes check dediğinde showdown sırası

River'da kimse bahis yapmadıysa (herkes check dedi), showdown **buton'un solundaki ilk aktif oyuncudan** başlar ve saat yönünde ilerler.

Örnek: Buton, small blind ve big blind river'ı görüyor. SB check, BB check, Buton check. Showdown SB'den başlar (buton'un solundaki ilk aktif oyuncu). SB gösterebilir ya da muck yapabilir. Sonra BB. En son da buton.

==g:Bu durumda buton en son gösterir== — ki bu aslında bir avantaj. Buton, kartlarını çevirip çevirmeyeceğine karar vermeden önce birinin kendisini yenip yenmediğini görebilir.

---

## All-in showdown kuralları — all-in olan oyuncu önce mi gösterir?

Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılmalıdır; muck yoktur (TDA 2024 Kural 16). Bu, elin bütünlüğünü korur. WSOP 2026 cash oyunlarında B149'a göre yan pot oyuncuları yalnızca ana potta olanlardan önce gösterir. No-Limit'te bahis river'dan önce bittiyse all-in oyuncusu önce gösterir; aksi halde river'ın son agresörü, river check geçildiyse butonun solundaki ilk aktif oyuncu başlar.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in senaryosu | Showdown kuralı |
|----------------|---------------|
| Bir oyuncu all-in gider, diğerleri call eder, artık bahis mümkün değil | Turnuvada kalan bütün eller ortak kartlar açılmadan hemen gösterilir; cash oyununda ev kuralı geçerlidir |
| River'da all-in bahsi call edilir | Turnuvada tüm bahis aksiyonu tamamlanır tamamlanmaz bütün eller sıra beklemeden açılır; WSOP cash oyununda B149'a göre yan pot oyuncuları yalnızca ana potta olanlardan önce gösterir ve sırası gelen grubun içinde river'ın son agresörü başlar |
| Birden fazla side pot yaratan çoklu all-in | Her pot ayrı ayrı çözülür; turnuvada tüm bahis aksiyonu tamamlanınca kalan bütün eller hemen açılır |

</div>

Bir ince nokta: **yan pot**, ana pottan önce dağıtılır. Bu **ödeme sırası**, turnuvadaki açılışı geciktirmez: tüm bahis aksiyonu tamamlanınca kalan bütün eller hemen gösterilir (TDA 2024 Kural 16 ve eki). Yan potta bahis sürüyorsa bu açma zorunluluğu henüz başlamaz. WSOP cash oyununda ise B149, yan pot oyuncularının yalnızca ana potta olanlardan önce göstermesini ister.

Oyuncular all-in olduğunda yan potların nasıl oluşup nasıl ödendiği için [all-in kuralları ve yan potlar](/tr/blog/holdem-all-in-rules) yazısına bak; bölünen potlar içinse split pot ve chop kurallarına.

---

## "Cards speak" (kartlar konuşur) kuralı nedir?

![Cards speak kuralı infografiği — 8♠ 9♣ 10♥ J♦ Q♠ board'u kız yüksek bir kent yapar ve showdown'da kartlar kendi adına konuşur](/images/holdem-showdown-cards-speak.webp)

"Cards speak" şu demek: ==oyuncu ne derse desin en iyi el kazanır==.

Bir oyuncu elini yanlış okuyup "çiftim var" derse ama aslında kenti varsa — kent kazanır. Krupiye kartları okur ve potu gösterilen en iyi ele iter.

Kaybettiğini sanıp kazanan bir eli göstermeden muck edersen ==r:potu kaybedebilirsin==. Yüzü kapalı duran kartlar otomatik olarak ölü değildir: %100 tanımlanabilir ve geri alınabilir durumdaysa masaya açılabilir. Krupiye eli muck'a ittiğinde ya da el artık tanımlanıp geri alınamadığında ölür (TDA 2024 Kural 14). Yine de buna güvenme. Kaybettiğinden %100 emin değilsen, muck etmeden önce krupiyenin elini okumasına izin ver.

Gerçek durum: elinde **J♥ 10♥** var, board **Q♥ 9♥ 8♥ 2♣ 5♦**. Kız yüksek bir straight flush'ın var (kupa Q-J-10-9-8). Rakip **K♣ Q♦** gösteriyor (bir kız çifti). Farkla kazanırsın. Sırf onun kızını gördün diye muck yapma.

---

## Pokerde slow roll nedir?

Slow roll, ==kazandığını bildiğin çok güçlü bir eli göstermeyi bilerek uzatmaktır==.

Elinde nuts var. Rakip güçlü bir el gösteriyor. Sen duraklıyorsun, düşünüyormuş gibi yapıyorsun, kartlarına yavaşça bakıyorsun, herkesi bekletiyorsun — sonra kazananı çeviriyorsun. Teknik olarak yasal. Herkesçe nefret edilen bir hareket.

![Pokerde slow roll — bir oyuncu kazanan eli göstermeyi bilerek geciktirirken diğer oyuncuların sinirlenmesi](/images/holdem-showdown-slow-roll.webp)

==r:Slow roll, poker masasında düşman edinmenin en hızlı yoludur.== Zaferi kasten yüzüne vurmak gibi algılanır. Yazısız kural: en iyi el sendeyse, hemen çevir. Slow roll yapmanın hiçbir stratejik faydası yok. Tek sonucu gerginlik.

Bunu **tanking** ile karıştırma — zor bir karar için haklı olarak zaman almak. O kabul görür, hatta saygı duyulur. Nuts ile slow roll yapmak bambaşka bir şey.

---

## Showdown olmadan kazanırsan hole kartlarını göstermek zorunda mısın?

Hayır. ==g:Herkes showdown'dan önce fold yaparsa, tek bir kart bile göstermeden potu alırsın.==

İstersen gösterebilirsin — bazı oyuncular rakibi tilt etmek için blöfünü, ya da tight bir imaj kurmak için güçlü elini gösterir. Ama herkes fold yaptığı için kazandığında kartlarını göstermek asla zorunlu değil.

Pokerin ilginç olmasının bir sebebi de bu. En iyi el her zaman kazanmaz — ayakta kalan son kişi kazanır.

---

## Showdown adabı — yeni başlayanların yaptığı hatalar

### Hata 1: Call eden gösterse diye beklemek

River'da bahis yaptın. Biri seni call etti. Donup kalıyorsun ve onun göstermesini bekliyorsun. Bu tersine. ==Önce sen gösterirsin — son agresör sendin.== Beklemek, öyle olmasa bile slow roll gibi görünür.

### Hata 2: Krupiye eli okumadan muck yapmak

Kaybettiğinden neredeyse eminsin. Kartlarını yüzü kapalı muck'a doğru itiyorsun. Krupiye içeri çekiyor. Meğer kazanan sendeymiş. El geçerli kurala göre öldüyse pot gider; geri alınacağını varsayma. ==Emin olmadan asla muck yapma.== Krupiyenin iki eli de okumasına izin ver.

### Hata 3: Her call edilen eli görmeyi dayatmak

Turnuvada river bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir (TDA 2024 Kural 18). Diğer istekler direktöre; cash oyunları ev kuralına bağlıdır. Showdown'da yalnızca yüzü kapalı duran bir el otomatik olarak ölü değildir: geri alınması tanımlanabilirliğine ve floor kararına bağlıdır (TDA 2024 Kural 14; WSOP Tournament 2026 Kurallar 109–110). Bu, bahis sürerken yapılmış geçerli bir fold'u geri almaz. Cash oyunundaki istekler merakı değil, olası işbirliğini denetlemeyi amaçlar; kötüye kullanma.

### Hata 4: Erken gösterebileceğini bilmemek

Showdown'da — yani bütün bahisler kapandıktan sonra — resmî sıran gelmeden elini çevirmeni yasaklayan bir kural yok. El hâlâ sürüyorsa ve bekleyen bir aksiyon varsa tam tersi geçerlidir: turnuvada kart göstermek ceza getirir, ama eli otomatik olarak öldürmez (==WSOP Tournament 2026 Kural 117==). ==g:Elinde nuts ya da çok güçlü bir el varsa, hemen göster.== Diğer oyuncular bundan memnun olur. Oyunu hızlandırır. Ve slow roll'un tam tersidir.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-game-order | Oyun sırası | /images/blog-holdem-game-flow.webp
/tr/blog/holdem-all-in-rules | All-in kuralları ve yan potlar | /images/holdem-all-in-rules-hero.webp
:::

## Sıkça sorulan sorular

**Q. Poker showdown'ında kartları önce kim gösterir?**

A. All-in olmayan turnuvada river'ın son agresörü önce gösterir. River check geçildiyse butonun solundaki ilk aktif oyuncu başlar ve sıra saat yönünde ilerler. Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılır; muck yoktur (TDA 2024 Kural 16). Cash oyununda sırayı ev kuralı belirler.

**Q. Showdown'da call edilirsen kartlarını göstermek zorunda mısın?**

A. All-in olmayan turnuvada river'ın son agresörü, bahsi call edildiğinde önce gösterir. River bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir (TDA 2024 Kural 18). Diğer istekler direktöre; cash oyunları ev kuralına bağlıdır. Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılır; muck yoktur (TDA 2024 Kural 16).

**Q. Showdown'da göstermeden muck yapabilir misin?**

A. Turnuvadaki all-in açma zorunluluğu dışında kaybeden el, izin verilen eli görme talepleri saklı kalmak üzere muck edilebilir. Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılır; muck yoktur (TDA 2024 Kural 16). Turnuvada river bahsini call eden ve kartlarını elinde tutan ya da masaya açan oyuncu son agresörün elini isteyebilir (TDA 2024 Kural 18). Diğer istekler direktöre; cash oyunları ev kuralına bağlıdır. Kazanandan şüphe ediyorsan iki eli de krupiyeye okut.

**Q. Pokerde slow roll nedir ve neden kötü?**

A. Slow roll, en iyisi olduğunu zaten bildiğin kazanan bir eli göstermeyi bilerek geciktirmektir. Yasaldır ama herkesçe nefret edilir, çünkü rakibi kasten aşağılamak gibi görülür. Elinde nuts ya da net bir kazanan varsa, kartlarını hemen çevir. Kartını ne hızla gösterdiğin, masadaki karakterin hakkında çok şey söyler.

**Q. All-in durumunda kartları önce kim gösterir?**

A. Turnuvada bir oyuncu all-in olduğunda ve tüm bahis aksiyonu tamamlandığında kalan bütün eller hemen açılır; muck yoktur (TDA 2024 Kural 16). Yan potta bahis sürüyorsa bu zorunluluk henüz başlamaz; tüm bahis aksiyonu tamamlanınca açılış yan potun dağıtımına kadar ertelenmez. WSOP 2026 cash oyunlarında B149'a göre yan pot oyuncuları yalnızca ana potta olanlardan önce gösterir. No-Limit'te bahis river'dan önce bittiyse all-in oyuncusu; aksi halde river sırası başlar.

**Q. Pokerde "cards speak" ne demek?**

A. Cards speak, oyuncunun ilanına değil masaya açılan kartlara göre en iyi elin kazandığı anlamına gelir; yanlış ilan edilen el de kazanabilir. Yüzü kapalı duran kartlar otomatik olarak ölü değildir: %100 tanımlanabilir ve geri alınabilir durumdaysa masaya açılabilir. Krupiye eli muck'a ittiğinde ya da el artık tanımlanıp geri alınamadığında ölür (TDA 2024 Kural 14). Elini doğrulamadan muck etme.

**Q. Showdown olmadan kazanırsan kartlarını göstermek zorunda mısın?**

A. Hayır. Diğer herkes river showdown'ından önce fold yaparsa, potu anında kazanırsın ve hole kartlarını asla açmak zorunda kalmazsın. Göstermek isteğe bağlı — bazı oyuncular rakibi kışkırtmak için blöfünü çevirir, ama itirazsız kazanan bir eli göstermek asla zorunlu değildir.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Tüm kurallar — blind'lardan showdown'a</div>
  </a>
</div>
`.trim(),
};
