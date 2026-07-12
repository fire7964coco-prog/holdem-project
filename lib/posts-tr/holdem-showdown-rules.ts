import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "Texas Hold'em showdown kuralları: kartı önce kim açar, muck ve slow roll",
  seoTitle: "Kartı önce kim açar? Showdown ve muck kuralları",
  desc: "Showdown'da kartları önce kim gösterir? Göstermeden muck yapabilir misin? Son agresör, cards speak, slow roll ve all-in — Hold'em showdown kuralları netçe.",
  tldr: "Showdown'da son bahis yapan ya da yükselten oyuncu kartını önce açar. River'da herkes check dediyse, buton'un solundaki ilk aktif oyuncu önce gösterir. Kaybettiysen göstermeden muck yapabilirsin, ama rakipler call edilmiş bir eli görmeyi isteyebilir.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
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
| River'da biri bahis yaptı ya da yükseltti | ==Son bahis yapan ya da yükselten oyuncu== önce gösterir |
| River'da herkes check dedi | Buton'un solundaki ilk aktif oyuncu önce gösterir |
| Önceki bir sokakta all-in (river'da bahis yok) | Tüm eller kalan kartlar açılmadan önce/açılırken yüzü açık masaya konur |

</div>

![Texas Hold'em'de showdown sırası infografiği — J♥ 9♠ 4♦ 2♠ K♥ board'unda önce kim gösterir](/images/holdem-showdown-who-shows-first.webp)

==g:Anahtar ifade "son agresör".== River'da bahis yaptın ve call edildin mi, önce sen gösterirsin — call eden değil. Call eden, kendi elini gösterip göstermeyeceğine karar vermeden önce senin elini görme hakkını kazanır.

---

## Showdown'da göstermeden muck yapabilir misin?

Evet — **kaybettiysen**.

Son agresör elini gösterdikten sonra, diğer oyuncular şunlardan birini yapabilir:
- **Elini gösterir** — kazandığını düşünüyorsa
- **Yüzü kapalı muck'a atar** — kaybettiğini görüyorsa, kartlarını açmasına gerek yok

==r:Ama önemli bir istisna var:== river'daki bahsin call edildiyse, call eden senin elini görmek için tam bedeli ödedi. Ele dağıtılmış olan herhangi bir oyuncu, call edilmiş bir showdown'a dahil olan muck'a atılmış bir eli krupiyeye açtırmayı isteyebilir — çoğu casinoda geçen **"o eli görmek istiyorum"** kuralı. (Bunu "birine göster, herkese göster" kuralıyla karıştırma — o kural, kartlarını gönüllü olarak bir oyuncuya gösterirsen masadaki herkesin de görme hakkı kazanması demektir.)

Pratik kural: ==blöf yaptın ve call edildin mi, hızlıca muck yap. Value bet yaptın ve call edildin mi, kartlarını çevir.==

---

## River'da herkes check dediğinde showdown sırası

River'da kimse bahis yapmadıysa (herkes check dedi), showdown **buton'un solundaki ilk aktif oyuncudan** başlar ve saat yönünde ilerler.

Örnek: Buton, small blind ve big blind river'ı görüyor. SB check, BB check, Buton check. Showdown SB'den başlar (buton'un solundaki ilk aktif oyuncu). SB gösterebilir ya da muck yapabilir. Sonra BB. En son da buton.

==g:Bu durumda buton en son gösterir== — ki bu aslında bir avantaj. Buton, kartlarını çevirip çevirmeyeceğine karar vermeden önce birinin kendisini yenip yenmediğini görebilir.

---

## All-in showdown kuralları — all-in olan oyuncu önce mi gösterir?

Bir oyuncu all-in gittiğinde ve artık bahis yapmak mümkün olmadığında, kalan kartlar genellikle **tüm eller yüzü açık** olacak şekilde açılır. Bu, elin dürüstlüğünü korur — kimse bir all-in durumunda stratejik olarak muck yapamamalı.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in senaryosu | Showdown kuralı |
|----------------|---------------|
| Bir oyuncu all-in gider, diğerleri call eder, artık bahis mümkün değil | Tüm eller kartlar açılmadan önce/açılırken yüzü açık konur |
| River'da all-in bahsi call edilir | Normal showdown — all-in giden son agresördür ve önce gösterir |
| Birden fazla side pot yaratan çoklu all-in | Her pot ayrı ayrı çözülür; dahil olan tüm eller gösterilir |

</div>

Bir ince nokta: eğer bir **yan pot (side pot)** varsa (diğer oyuncuların hâlâ çipi var ve bahse devam ediyorlar), önce yan pot dağıtılır — o canlı bahisçiler arasındaki son agresör önce gösterir — sonra ana pot gelir, orada da all-in oyuncunun eli gösterilir.

Oyuncular all-in olduğunda yan potların nasıl oluşup nasıl ödendiği için [all-in kuralları ve yan potlar](/tr/blog/holdem-all-in-rules) yazısına bak; bölünen potlar içinse split pot ve chop kurallarına.

---

## "Cards speak" (kartlar konuşur) kuralı nedir?

![Cards speak kuralı infografiği — 8♠ 9♣ 10♥ J♦ Q♠ board'u kız yüksek bir kent yapar ve showdown'da kartlar kendi adına konuşur](/images/holdem-showdown-cards-speak.webp)

"Cards speak" şu demek: ==oyuncu ne derse desin en iyi el kazanır==.

Bir oyuncu elini yanlış okuyup "çiftim var" derse ama aslında kenti varsa — kent kazanır. Krupiye kartları okur ve potu gösterilen en iyi ele iter.

Bu iki yönlü işler. Kaybettiğini sanıp göstermeden muck yaparsan ama elin aslında kazanan olsaydı — ==r:pot gitti==. Elin muck'a değdiği an ölüdür. Kaybettiğinden %100 emin değilsen, muck yapmadan önce her zaman krupiyenin elini okumasına izin ver.

Gerçek durum: elinde **J♥ T♥** var, board **Q♥ 9♥ 8♥ 2♣ 5♦**. Kız yüksek bir straight flush'ın var (kupa Q-J-T-9-8). Rakip **K♣ Q♦** gösteriyor (bir kız çifti). Farkla kazanırsın. Sırf onun kızını gördün diye muck yapma.

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

Kaybettiğinden neredeyse eminsin. Kartlarını yüzü kapalı muck'a doğru itiyorsun. Krupiye içeri çekiyor. Meğer kazanan sendeymiş. El öldü — pot gitti. ==Emin olmadan asla muck yapma.== Krupiyenin iki eli de okumasına izin ver.

### Hata 3: Her call edilen eli görmeyi dayatmak

Çoğu casinoda krupiyeye muck'a atılmış bir eli açtırmasını isteyebilirsin — ama yalnızca call edilip showdown'a ulaşmış bir eli. Fold edilen eller ölüdür ve asla geri getirilemez. Bu talep kuralı işbirliğine (collusion) karşı korumak için vardır, merakı gidermek için değil; onu kötüye kullanmak kaba sayılır. Nadiren kullan.

### Hata 4: Erken gösterebileceğini bilmemek

Resmî sıran gelmeden elini çevirmeni yasaklayan bir kural yok. ==g:Elinde nuts ya da çok güçlü bir el varsa, hemen göster.== Diğer oyuncular bundan memnun olur. Oyunu hızlandırır. Ve slow roll'un tam tersidir.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-game-order | Oyun sırası | /images/blog-holdem-game-flow.webp
/tr/blog/holdem-all-in-rules | All-in kuralları ve yan potlar | /images/holdem-all-in-rules-hero.webp
:::

## Sıkça sorulan sorular

**Q. Poker showdown'ında kartları önce kim gösterir?**

A. Son bahis turunda agresif aksiyon yapan (bahis ya da yükseltme) son oyuncu önce göstermek zorundadır. Son turda herkes check dediyse, buton'un solundaki ilk aktif oyuncu önce gösterir ve aksiyon saat yönünde ilerler.

**Q. Showdown'da call edilirsen kartlarını göstermek zorunda mısın?**

A. Evet — river'da son bahis yapan ya da yükselten sensen, call edildiğinde önce sen göstermek zorundasın. Başkasının bahsini call ettiysen, elini gördükten sonra kaybettiysen yüzü kapalı muck yapabilirsin. Ancak çoğu casinoda masadaki herhangi bir oyuncu, muck'a atılmış call edilmiş bir eli krupiyenin açmasını isteyebilir.

**Q. Showdown'da göstermeden muck yapabilir misin?**

A. Evet, ama yalnızca açıkça kaybettiysen. Kazanan el gösterildikten sonra, kaybeden oyuncular yüzü kapalı muck yapabilir. İstisna, elinin call edilmiş olması — rakipler onu görmeyi isteyebilir. Kimin kazandığına dair en ufak şüphe varsa, krupiye iki eli de okumadan asla muck yapma.

**Q. Pokerde slow roll nedir ve neden kötü?**

A. Slow roll, en iyisi olduğunu zaten bildiğin kazanan bir eli göstermeyi bilerek geciktirmektir. Yasaldır ama herkesçe nefret edilir, çünkü rakibi kasten aşağılamak gibi görülür. Elinde nuts ya da net bir kazanan varsa, kartlarını hemen çevir. Kartını ne hızla gösterdiğin, masadaki karakterin hakkında çok şey söyler.

**Q. All-in durumunda kartları önce kim gösterir?**

A. Bir oyuncu all-in gittiğinde ve başka bahis mümkün olmadığında, o pota dahil olan tüm eller genellikle ortak kartlar açılmadan önce ya da açılırken yüzü açık gösterilir. Bahsin sürdüğü bir yan pot varsa, o oyuncular arasındaki son agresör yan pot için önce gösterir. All-in oyuncunun eli ana pot için ayrıca gösterilir.

**Q. Pokerde "cards speak" ne demek?**

A. Cards speak (kartlar konuşur), oyuncular ne derse desin, kartların gerçekten gösterdiğine göre en iyi elin kazandığı anlamına gelir. Elini yanlış okuyup yanlış el ilan eden bir oyuncu, kartları aslında en iyi else yine de kazanır. Tersine, kaybettiğini doğrulamadan muck yapan bir oyuncunun, eli kazanacak olsa bile pot üzerinde hiçbir hakkı kalmaz.

**Q. Showdown olmadan kazanırsan kartlarını göstermek zorunda mısın?**

A. Hayır. Diğer herkes river showdown'ından önce fold yaparsa, potu anında kazanırsın ve hole kartlarını asla açmak zorunda kalmazsın. Göstermek isteğe bağlı — bazı oyuncular rakibi kışkırtmak için blöfünü çevirir, ama itirazsız kazanan bir eli göstermek asla zorunlu değildir.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tüm kurallar — blind'lardan showdown'a</div>
  </a>
</div>
`.trim(),
};
