import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Texas Hold'em all-in kuralları: yan potlar, yeniden yükseltme ve showdown",
  seoTitle: "All-in gittin ama ne kazanırsın? — All-in ve yan pot kuralları",
  desc: "Tüm çiplerini ortaya sürdün ve krupiye çipleri iki yığına ayırıyor. Texas Hold'em all-in kuralları: table stakes, ana pot, yan pot, yeniden yükseltme ve showdown.",
  tldr: "All-in gitmek, önündeki tüm çipleri ortaya sürmektir. Her rakipten sadece eşlediğin kadarını kazanabilirsin (ana pot); büyük stack'lerin fazladan koyduğu çipler dokunamayacağın bir yan pot oluşturur. Tam bir yükseltmeden az olan bir all-in, zaten aksiyon almış oyuncular için bahsi YENİDEN açmaz.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-13",
  masterUpdated: "2026-07-12",
  keepImagesInBody: true,
  readTime: "10 dk",
  emoji: "♠",
  tags: [
    "all in kuralları poker",
    "texas holdem all in",
    "yan pot poker nedir",
    "pot nasıl bölünür",
    "all in gidince ne olur",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "Texas Hold'em all-in — bir oyuncu tüm çiplerini ortaya iterken krupiye yeşil çuha üzerinde ana pot ile yan potu ayırıyor",
  content: `
Çipin azaldı. Hepsini ortaya sürüyorsun. Arkandaki oyuncu görüyor. Üçüncü bir oyuncu yeniden yükseltiyor. Krupiye çipleri iki yığına ayırmaya başlıyor.

Ve senin ne olduğuna dair hiçbir fikrin yok.

Ben o masada oturdum. Canlı bir cash oyununda ilk kez all-in gittiğimde hâlâ bir şey kazanıp kazanamayacağımı, diğer oyuncunun yeniden yükseltip yükseltemeyeceğini, hatta hangi çip yığınının benim olduğunu bile bilmiyordum. Kimse anlatmadı.

==Bu rehber her durumu kapsıyor: ana pot, yan pot, kimin yeniden yükseltebileceği ve showdown sırası.== Krupiye stack'leri saymaya başlayınca donup kalma devri bitti. (Temel bahis akışı hâlâ kafanda oturmadıysa, [yeni başlayanlar için kurallar rehberi](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") her şeyi sıfırdan anlatıyor.)

## Texas Hold'em'de "all-in" ne demek?

All-in gitmek, önünde duran tüm çipleri ortaya sürmek demektir. Bir kez sürdükten sonra daha fazla çip ekleyemezsin — ve seni kimse pas geçmeye zorlayamaz.

Temel, **table stakes** kuralıdır: sadece elin başladığında masada olan çiplerle bahis yapabilirsin. Cebinden ekstra para çıkaramaz, arkadaşından borç alamaz, saat ya da araba anahtarı ortaya koyamazsın — o film pokeridir.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Terim | Ne demek |
|------|---------|
| Push / Shove / Jam | All-in gitmenin İngilizce argosu |
| Table stakes | Sadece elin başında sahip olduğunla bahis yapabilirsin |
| Double up | Bir all-in kazanıp stack'ini ikiye katlamak |
| Ana pot (main pot) | Herkesin — all-in oyuncu dahil — kazanabileceği pot |
| Yan pot (side pot) | Sadece büyük stack'lerin kazanabileceği çipler; all-in oyuncu dışarıda kalır |

</div>

==g:All-in olduğun anda kalan tüm ortak kartları görmen garanti altındadır.== Kimse seni blöfle elden düşüremez. Kartların river'a kadar canlı kalır.

---

## All-in nasıl ilan edilir

İki geçerli yol var:

**1. Sözlü ilan** — "All-in" de, krupiye ve rakipler net duysun. En güvenli yöntem budur. Bir kez söyledin mi, artık bağlısın.

**2. Tüm çipleri öne itmek** — Tüm stack'ini tek ve temiz bir hareketle merkeze doğru kaydır. Çipleri parça parça itmek string bet'e (parçalı bahis) benzeyebilir, o yüzden hepsini tek seferde hareket ettir.

![Texas Hold'em all-in showdown — K♠ 10♣ 7♦ 4♥ 2♣ board'u ve çiplerin etiketli ana pot ile yan pota ayrılmış hali](/images/holdem-all-in-declare.webp)

==r:Hiçbir şey demeden tek bir çipi öne itme — krupiye onu sadece o çipin değeri kadar sayar, tüm stack'in olarak değil.== Her zaman yüksek sesle "all-in" de ya da tüm stack'ini tek seferde ortaya sür.

---

## Poker'de yan potlar nasıl işler? (All-in oyuncu neden sınırlanır)

All-in oyuncu, sadece koyduğu miktarı, onu gören rakip sayısıyla çarparak kazanabilir. Bunun üzerinde bahis yapılan tüm çipler, o parayı koyan oyunculara özel bir **yan pot** oluşturur.

![Texas Hold'em all-in sonrası yan pot — krupiye çipleri ana pot ile yan pota ayırırken A Oyuncusu sınırlanmış durumda](/images/holdem-all-in-side-pot.webp)

### 3 oyunculu örnek (standart durum)

| Oyuncu | Stack | Aksiyon |
|--------|-------|--------|
| A Oyuncusu | 100 çip | All-in |
| B Oyuncusu | 300 çip | 100'ü görür, sonra 50 daha koyar |
| C Oyuncusu | 300 çip | 100'ü görür, sonra 50'yi görür |

**Ana pot:** 100 × 3 = **300 çip** (A, B ve C kazanabilir)

**Yan pot:** 50 × 2 = **100 çip** (sadece B ve C)

==A Oyuncusu showdown'da 300 çiplik ana potu kazanabilir. Ama en iyi ele sahip olsa bile 100 çiplik yan pota dokunamaz.== Onu B ya da C alır.

### 4 oyunculu, farklı stack'li örnek

İşin karıştığı yer burası — ve çoğu yeni başlayanın kaybolduğu yer.

| Oyuncu | Stack | All-in gittiği miktar |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | hepsini görür |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Miktar | Kazanabilecek oyuncular |
|:---|:---:|:---|
| Ana pot | 100 × 4 = **400** | A, B, C, D |
| Yan pot 1 | 100 × 3 = **300** | B, C, D (A sınırlı) |
| Yan pot 2 | 300 × 2 = **600** | C, D (A ve B sınırlı) |
| **Toplam** | **1.300** | — |

</div>

Kural şu: ==her yan pot, bir sonraki en küçük stack'e kadarki farkı × onu karşılayan oyuncu sayısı ile hesaplanır.== En küçük stack'ten en büyüğe doğru ilerle.

---

## All-in bahsi yeniden açar mı? — Çoğu oyuncunun yanlış bildiği kural

==r:Bu, canlı masalarda en çok tartışma çıkaran all-in kuralıdır — iki oyuncunun bunu tam beş dakika tartışmasını, tüm masa beklerken izledim. İkisi de yanılıyordu.==

**Kural:** Bir oyuncu **tam bir [yükseltmeden](/tr/blog/holdem-betting-actions) az** bir miktara all-in giderse, o all-in, o turda zaten aksiyon almış oyuncular için bahsi YENİDEN açmaz.

![Poker'de all-in sonrası yeniden yükseltme kuralı — C Oyuncusu tam bir yükseltmeden az all-in gidiyor, A Oyuncusu sadece görebilir veya pas geçebilir](/images/holdem-all-in-reraise-rule.webp)

**Örnek:**

Blind'lar $1/$2. Dört oyuncu flop'u görüyor.

1. A Oyuncusu $10 bahis yapıyor.
2. B Oyuncusu **$14** all-in gidiyor (A'nın $10'luk bahsinden sadece $4 fazla — tam bir yükseltme değil; tam yükseltme en az $20 olurdu).

A Oyuncusuna ve henüz aksiyon almamış C Oyuncusuna ne olur?

- A Oyuncusu zaten aksiyon aldı ($10 bahis yaptı) ve şimdi eksik bir yükseltmeyle karşılaşıyor. B'nin $14'lük all-in'i **tam bir yükseltmeden az** olduğu için aksiyon A Oyuncusu için yeniden açılmaz. ==A sadece görebilir veya pas geçebilir — yeniden yükseltemez.==
- C Oyuncusu henüz aksiyon almadı — **C Oyuncusu normal şekilde yükseltebilir.**

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in miktarı | Tam yükseltme mi? | Bahsi yeniden açar mı? |
|--------------|-------------|-----------------|
| Tam bir yükseltmeden az | Hayır | Hayır — zaten aksiyon alanlar sadece görebilir veya pas geçebilir |
| Tam yükseltme veya fazlası | Evet | Evet — herkes yeniden yükseltebilir |

</div>

Bu kural neden var? Oyuncuları, kısmi all-in'ler yüzünden daha büyük yükseltmelere zorlanmaktan korur. Tam bir yükseltme gerçek agresyon anlamına gelir — kısa stack'in birkaç çip için gittiği all-in ise gelmez.

### İleri düzey durum: Birden fazla oyuncu kısa all-in giderse ne olur?

Bu, düzenli oyuncuları bile takan versiyon. Birden fazla kısa all-in, **toplanarak** tam bir yükseltme oluşturabilir — ve birleşik artışları eşiğe ulaşırsa, zaten aksiyon almış oyuncular için bahis yeniden açılır.

Bu, TDA'nın resmi "bahsi yeniden açma" kuralıdır ve çoğu casino ve poker salonu bunu uygular.

**Örnek (blind'lar $1/$2, flop'ta):**

1. A Oyuncusu $10 bahis yapıyor.
2. B Oyuncusu **$14** all-in gidiyor (+$4 artış — tek başına tam bir yükseltme değil)
3. C Oyuncusu **$21** all-in gidiyor (+$7 artış — tek başına tam bir yükseltme değil)

Birleşik artışlar: $4 + $7 = **$11** — $10'luk minimum yükseltme eşiğini karşılıyor.

**Sonuç: bahis A Oyuncusu için YENİDEN AÇILIR.** A pas geçebilir, görebilir veya yeniden yükseltebilir; B ya da C tek başına tam bir yükseltme yapmamış olsa bile.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| B'nin all-in'i | C'nin all-in'i | Birleşik artış | A için açılır mı? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — $10'un altında | ❌ Hayır |
| $14 (+$4) | $21 (+$7) | $11 — $10'a ulaşıyor | ✅ Evet |
| $15 (+$5) | $25 (+$10) | $15 — $10'a ulaşıyor | ✅ Evet |

</div>

Minimum yükseltme eşiği her zaman *son geçerli tam bahis veya yükseltmedir* — herhangi bir kümülatif toplam değil.

### Hızlı karar rehberi — Bu all-in bahsi yeniden açar mı?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Durum | Zaten aksiyon alanlar için açılır mı? |
|---|---|
| Tek all-in < tam yükseltme | ❌ Hayır — sadece gör ya da pas geç |
| Tek all-in ≥ tam yükseltme | ✅ Evet — herkes yeniden yükseltebilir |
| Birden fazla kısa all-in, toplam < tam yükseltme | ❌ Hayır |
| Birden fazla kısa all-in, toplam ≥ tam yükseltme | ✅ Evet |
| Henüz aksiyon ALMAMIŞ oyuncu | ✅ Her zaman yükseltebilir (ne olursa olsun) |

</div>

---

## All-in showdown kuralları

Bahis kapandığında ve bir oyuncu all-in olduğunda, showdown'da olanlar şöyledir:

1. **Kartlar yüzü açık çevrilir.** Turnuvalarda, all-in'e karışan tüm eller bahis kapanır kapanmaz genellikle açılır. Cash oyunlarında önce standart [son agresörün gösterdiği showdown kuralı](/tr/blog/holdem-showdown-rules) uygulanır, sonra all-in oyuncular gösterir.
2. **Yan potlar önce dağıtılır.** Krupiye en son oluşturulan yan potu ilk çözer, sonra geriye doğru ana pota kadar ilerler.
3. **Kartlar konuşur.** En iyi el, hak kazandığı her potu kazanır — oyuncular ne dediklerini söylerse söylesin.
4. **Birden fazla kazanan olabilir.** A Oyuncusu ana potu, B Oyuncusu yan potu kazanabilir. Kimse "kendi" potunu kazandı diye her şeyi almaz.

==g:Bir oyuncu ana potu kazanıp yan potu kaybedebilir. Her iki sonuç da geçerlidir.==

**Özel durum:** Bir yan potta sadece tek bir oyuncu kaldıysa (diğerleri pas geçti), o oyuncu o çipleri hemen geri alır — o pot için showdown gerekmez.

---

## All-in'i yanlış gidersen ne olur? — Kaçınılması gereken 5 hata

### Hata 1: All-in oyuncunun yan potu kazanabileceğini sanmak

Kazanamaz. All-in oyuncu bir kez sınırlandı mı, büyük stack'lerin koyduğu her ekstra çip, üzerinde hiçbir hakkı olmayan bir pota gider.

### Hata 2: Kimin yeniden yükseltebileceği kuralını bilmemek

C Oyuncusundan gelen kısmi bir all-in, A Oyuncusuna yeniden yükseltmek için ikinci bir şans vermez. Bunu ezbere bilmek, tartışmaları daha başlamadan bitirir.

### Hata 3: El ortasında cepten çip eklemek

Table stakes. Masada olan, bahis yapabileceğin her şeydir. $80 için all-in'sen ve pot $400 ise, seni gören her oyuncudan sadece $80 kazanabilirsin.

### Hata 4: Elini çok erken atmak

Ana pot için all-in'sin. Diğer iki oyuncu yan pot için kapışıyor. Kartlarını atma — elin ana pot için hâlâ canlı. ==Kartlarına dokunmadan önce her zaman krupiyenin tüm potları çözmesini bekle.==

### Hata 5: Sinirinden all-in gitmek

All-in, masadaki en güçlü hamledir. Rakipleri ya hep ya hiç kararına zorlar. O güç, rastgele hepsini ortaya sürünce kaybolur. Doğru anda kullan — kısa stack baskısı, görülmesini istediğin değer elleri, gerçek fold equity'si olan blöfler.

---

:::readnext[Okumaya devam et]
/tr/blog/texas-holdem-rules-for-beginners | Yeni başlayanlar için Texas Hold'em kuralları | /images/rules-texas-holdem.webp
/tr/blog/holdem-showdown-rules | Showdown kuralları, adım adım | /images/holdem-showdown-rules-hero.webp
:::

## Sıkça sorulan sorular

**Q. Big blind'dan az bir miktara all-in gidilebilir mi?**

A. Evet. Big blind'dan az çipin varsa, sıra sana geldiğinde elindeki neyse otomatik olarak onunla all-in olursun. Diğerleri yine tam big blind'ı öder — senin koyduğunu aşan her miktar bir yan pota gider.

**Q. All-in'i kazanıp yan potu kaybedersen ne olur?**

A. Ana potu (her oyuncudan eşlediğin miktarı) sen alırsın, yan potu diğer oyuncu alır. Herkes hak kazandığı kısmı kazanır.

**Q. All-in gitmek elini açmaya zorlar mı?**

A. Turnuvalarda evet — all-in ile bahis kapanır kapanmaz, karışan tüm eller yüzü açık masaya konur. Canlı cash oyunlarında standart showdown kuralları geçerlidir: son agresör önce gösterir, diğerleri gösterir ya da kartlarını atar.

**Q. Poker all-in'inde "run it twice" yapılabilir mi?**

A. Kalan ortak kartları iki kez dağıtıp potu bölmek (run it twice), all-in sonrası iki oyuncu da kabul ederse birçok cash oyununda serbesttir. Turnuvalarda genellikle izin verilmez. Kalan kartlar açılmadan önce anlaşılması gerekir.

**Q. "Table stakes" kuralı tam olarak nedir?**

A. Table stakes, sadece el başladığında önünde duran çiplerle bahis yapabileceğin anlamına gelir. El oynanırken para ekleyemezsin. Bu iki tarafı da korur: sen asla stack'inden fazlasını riske atmaya zorlanamazsın, rakip de karşılayabileceğinden fazlasını bir anda bahis yapamaz.

**Q. İki oyuncu farklı miktarlarda all-in giderse önce kim gösterir?**

A. Bahis ya da yükseltme olan son all-in, son agresif aksiyondur ve önce gösterir. Sadece görmek için (daha az miktara) gidilen bir all-in agresif değildir — bu durumda ilk bahsi yapan oyuncu yine önce gösterir. Cash oyunlarında, başka aksiyon olmadan görülen bir all-in ise, gören oyuncu all-in oyuncunun elini gördükten sonra kaybederse kartlarını atabilir (turnuvalarda karışan tüm eller yüzü açık kalır).

**Q. All-in kuralları turnuvalarda ve cash oyunlarında farklı mı?**

A. Temel kurallar aynı, ama iki pratik fark var. Birincisi: turnuvalarda all-in'e karışan tüm eller, bahis kapanır kapanmaz yüzü açık masaya konur (TDA Kural 16) — showdown'dan önce kartlarını atamazsın. Cash oyunlarında standart showdown sırası geçerlidir ve atabilirsin. İkincisi: run it twice cash oyunlarında yaygındır (iki oyuncu da kabul ederse), ama turnuvalarda genellikle izin verilmez.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pilar rehber</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Blind'lardan showdown'a tüm kurallar</div>
  </a>
  <a href="/tr/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Showdown kuralları</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kim önce gösterir ve kartlarını ne zaman atabilirsin</div>
  </a>
</div>
`.trim(),
};
