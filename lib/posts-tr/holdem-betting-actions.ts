import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-betting-actions",
  title: "Texas Hold'em bahis hareketleri: check, call, raise, fold",
  seoTitle: "Sıra sende, kilitlendin mi? — Poker bahis hareketleri",
  desc: "Sıra sana geldi, kafan bomboş mu? Pokerde check, call, raise ve fold ne demek, min-raise kuralı nasıl işler ve kaç kez re-raise yapabilirsin — hepsi burada.",
  tldr: "Texas Hold'em'de 5 bahis hareketi var: check (bedavaya pas), bet (turu açmak), call (bahsi görmek), raise (yükseltmek — minimum yükseltme, önceki bahse ya da yükseltmeye eşittir) ve fold (yatmak). Check'i yalnızca o street'te henüz kimse bahis koymadıysa yapabilirsin.",
  category: "rules",
  date: "2026-06-14",
  updated: "2026-07-13",
  masterUpdated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "9 dk",
  emoji: "🃏",
  tags: [
    "poker bahis hareketleri",
    "pokerde check nedir",
    "pokerde call nedir",
    "min raise poker kuralı",
    "pokerde kaç kez raise yapılır",
    "check raise nedir",
    "string bet",
  ],
  image: "/images/holdem-betting-actions-hero.webp",
  imageAlt: "CHECK, CALL, RAISE ve FOLD için ayrılmış çip yığınlarını gösteren Texas Hold'em masası — bir oyuncu hole kartlarını tutarken hareketine karar veriyor",
  content: `
İlk canlı seansımda krupiye "sıra sende" dedi ve donup kaldım — koca masa bana bakarken saniyelerce süren bir sessizlik.

Check mi? Call mı? Raise mi? El sıralamasını biliyordum. Ama ==hareketlerin kendi kurallarını== gerçekten bilmiyordum — işte bu rehber tam olarak o boşluğu kapatıyor.

Texas Hold'em'de yalnızca ==5 bahis hareketi== var, ama etraflarındaki kurallar (check ne zaman yasal, bir raise ne kadar olmalı, kaç kez re-raise yapılır) yeni başlayanları haftalarca uğraştırır. Bu işe yeni başladıysan, önce [Texas Hold'em kurallarının tam rehberine](/tr/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") bir göz at — sonra buraya, hareket hareket kural kitabına dön.

---

### Hızlı özet

:::stripe
5 | bahis hareketi: check, bet, call, raise, fold
1 BB | No-Limit Hold'em'de minimum açılış bahsi
= son raise | minimum re-raise büyüklüğü (artış kuralı)
Sınır yok | No-Limit'te re-raise'e — biri all-in olana kadar yükseltebilirsin
:::

## Texas Hold'em'de 5 bahis hareketi nedir?

Poker masasında verdiğin her karar bu beşinden biridir:

| Hareket | Ne zaman mümkün | Çip maliyeti |
|--------|---------------|-----------|
| Fold (yatmak) | Sıra sende olduğu her an | Bedava — ama pota koyduğun çipleri kaybedersin |
| Check | Yalnızca bu turda henüz kimse bahis koymadıysa | Bedava — çip eklemeden pas geçersin |
| Call (görmek) | Biri bahis koyduktan ya da yükselttikten sonra | Mevcut bahsi birebir görürsün |
| Bet (bahis) | Turun ilk bahsi | Seçtiğin miktar (minimum = 1 big blind) |
| Raise (yükseltmek) | Biri bahis koyduktan sonra | Önceki bahsin ya da yükseltmenin en az büyüklüğü kadar üstüne |

==All-in== gitmek altıncı ayrı bir hareket değildir — kalan tüm çiplerinle yaptığın bir bet, call ya da raise'dir. Aşağıda daha çok var.

Yeni başlayanların kaçırdığı en önemli kural şu: ==r:biri bahis koyduktan sonra artık check yapamazsın==. Pota çip girdiği an seçeneklerin fold, call ya da raise'e daralır.

---

## Pokerde check nedir?

Check demek: ==g:"pas geçiyorum — benden bahis yok ama elde kalıyorum."==

Hiçbir maliyeti yok. Canlı pokerde masaya parmakla vurarak ya da "check" diyerek belli edersin. Sıra solundaki oyuncuya geçer. Herkes sırayla check yaparsa bir sonraki ortak kart açılır — river'daysan doğrudan showdown'a gidilir.

Check yapmak teslim olmak değildir. Kartların sende kalır, tüm seçeneklerin durur ve sonrasını görmek için hiç ödeme yapmamışsındır.

---

## Pokerde ne zaman check yapabilirsin?

Check'i tam olarak iki durumda yapabilirsin:

- **O street'te henüz kimse bahis koymadıysa** (flop, turn ya da river)
- **Preflop'ta big blind sensen ve kimse yükseltmediyse** — blind'in zaten canlı bir bahis sayılır, yani check yapıp flop'u bedavaya görebilirsin

Sen check yaptıktan sonra biri bahis koyarsa, önüne yepyeni bir karar gelir: fold, call ya da raise. Önce check yapıp sonra rakip bahis koyunca yükseltmene ==check-raise== denir — Texas Hold'em'de tamamen yasaldır ve standart bir silahtır, ayak oyunu değil.

Hangi street'te kimin ne zaman oynadığını sırayla görmek için [Texas Hold'em oyun sırasına](/tr/blog/holdem-game-order "thumb:/images/blog-holdem-game-flow.webp") bak.

---

## Pokerde call nedir? (check vs call)

Call yapmak, elde kalmak için ==mevcut bahsi birebir görmek== demektir. Biri $10 koyar, sen $10 call yaparsın — ne fazla, ne eksik.

Check ile call, yeni başlayanların en sık karıştırdığı ikili, o yüzden temiz ayrımı şöyle:

| | Check | Call |
|-|-------|------|
| Ne zaman var | Bu turda kimse bahis koymadı | Senden önce biri bahis koydu |
| Çip maliyeti | Bedava | Mevcut bahsi görürsün |
| Ne der | "Pas, hâlâ içerideyim" | "Devam etmek için öderim" |

Gerçek örnek: flop'ta K♠ 8♦ ile oturuyorsun. Kimse bahis koymamış, o yüzden ==check== yaparsın. Sıradaki oyuncu $10 koyar. Artık seçeneklerin $10 ==call==, ==raise== ($20 ya da fazlası) ya da ==fold==. Check gitti — o pencere bahis girdiği an kapandı.

---

## Pokerde fold nedir — istediğin an yatabilir misin?

Fold yapmak, kartlarını atıp elden çıkmak demektir. Yeni bir şey ödemezsin ama ==r:pota koyduğun her çip potta kalır==.

Evet — sıra sende olduğu her an yatabilirsin, hiç bahis koymadan önce bile, hatta check bedavayken bile. Ama şu son kısımdaki tuzağa dikkat: **bedavaya check yapabilecekken yatmak, elini boşa çöpe atmaktır**. Kimse bahis koymadıysa, sadece check yap.

Canlı adabından bir kural: ==sırası gelmeden== yatma. Sıra sana ulaşana kadar bekle — erken yatmak hâlâ karar veren oyunculara bilgi sızdırır ve çoğu salon bunu uyarır ya da cezalandırır. Yatmanın *ne zaman* doğru hamle olduğunu bilmek başlı başına bir beceridir.

---

## Min-raise nedir? Texas Hold'em bet ve raise kuralları

![Poker min-raise kuralını gösteren infografik: $6'lık bir bahis en az $12'ye yükseltmeyi, $6'ya yapılan bir preflop yükseltme ise en az $10'a re-raise gerektirir](/images/holdem-betting-actions-min-raise.webp "Min-raise kuralı — her yükseltme, son bahsin ya da yükseltmenin büyüklüğü kadarını en az üstüne eklemeli")

No-Limit Hold'em'de (neredeyse her zaman oynayacağın format):

- **Minimum bahis**: 1 big blind
- **Minimum yükseltme (min-raise)**: en az ==önceki bahsin ya da yükseltmenin büyüklüğü== kadarını üstüne
- **Maksimum**: tüm stack'in — işte bu yüzden "no limit"

İki çözümlü örnek:

| Street | Şu ana kadarki hareket | Minimum yükseltme |
|--------|--------------|---------------|
| Flop | Oyuncu $6 koyar | $6 daha → toplam $12 |
| Preflop (blindler $1/$2) | Oyuncu $6'ya yükseltir ($2 blind üzerine $4'lük yükseltme) | $4 daha → toplam $10 |

İşin özü: min-raise, big blind'e değil, son bahsin ya da yükseltmenin ==artışına== eşittir. Preflop'ta big blind açılış bahsi sayılır — en küçük açılış yükseltmesi bu yüzden 2 big blind'edir.

Yükseltmeyle birlikte gelen iki canlı poker kuralı:

1. **Çipleri hareket ettirmeden önce "raise" de.** "Call" deyip sonra fazladan çip mi ittin? O fazlalık bir ==string bet=='tir ve çoğu salonda krupiye bunu call sayar.
2. **Tek hareket.** Söylemezsen çiplerin tek bir ileri hareketle girmeli.

*Ne kadar* yükseltmen gerektiği (2,5x açılışlar, 3x 3-bet'ler, board dokusuna göre sizing) strateji, kural değil — o, Texas Hold'em stratejisinde yaşar.

---

## Pokerde kaç kez raise yapabilirsin?

**No-Limit Hold'em'de: sınır yok.** Yükseltir, sana re-raise gelir, tekrar yükseltirsin ("re-raise", "raise'i raise'lemek" — aynı şey) ta ki birinin çipi bitene kadar. Raise → 3-bet → 4-bet → 5-bet → all-in yasal, gerçi ürkütücü bir dizidir.

Yine de iki sınır geçerli:

- Her re-raise, yukarıdaki ==min-raise artış kuralını== karşılamalı
- ==r:Kendi bahsini yükseltemezsin.== Sen bahis koyarsın ve herkes sadece call yaparsa tur biter — ancak biri *seni* önce yükseltirse tekrar raise yapabilirsin

**Fixed-Limit** oyunlarda çoğu salon her turu bir bahis artı üç yükseltmeyle sınırlar ("capped" pot); genelde sadece iki oyuncu kalınca bu sınır kalkar — salon kuralları değişir, o yüzden krupiyeye sor.

---

## All-in gitmek ne demek?

All-in demek, ==kalan tüm çiplerini== yatırmak demektir. Sıra sende olduğu her an yapabilirsin — bet, call ya da raise olarak.

All-in'in mevcut bahisten *küçükse* elden çıkmış olmazsın: sadece katkına göre sınırlanmış bir ==ana pot== için yarışırsın; büyük stack'lerin fazla çipleri ise kazanamayacağın bir ==yan pot (side pot)== oluşturur. Ve *tam bir min-raise'den az* olan bir all-in, çoğunlukla önceden oynamış oyuncular için yükseltmeyi yeniden açmaz — düzenli oyuncuları bile şaşırtan ince bir kural.

Tüm mekanik — yan pot matematiği, kim önce açar, table stakes — [all-in kuralları ve yan potlarda](/tr/blog/holdem-all-in-rules), all-in eller berabere kaldığında ne olduğu ise [showdown kurallarında](/tr/blog/holdem-showdown-rules).

---

## Hareketleri bilmek birinci adım — hangisini seçmek strateji

Bu rehber her hareketin ne *olduğunu* ve ne zaman *yasal* olduğunu anlatır. Hangisini seçeceğin — ne zaman bahis, ne zaman call kârlı, ne zaman iyi bir el bile atılmalı — ayrı bir beceri ağacı:

- Her karar için çerçeve: Texas Hold'em stratejisi
- Önce elinin ham gücünü tartmak: [poker el sıralaması](/tr/blog/holdem-hand-rankings)
- Nakit ve turnuvada hareketlerin nasıl değiştiği: [nakit oyun vs turnuva](/tr/blog/holdem-tournament-vs-cash-game)

O zamana kadar yeni başlayanlara gerçek para kazandıran bir kural: ==bir el yükseltecek kadar güçlü değilse, yatmak genelde call yapmaktan iyidir.==

---

## Her hafta gördüğüm canlı bahis hataları

Haftalık düşük bahisli canlı bir oyun oynuyorum ve aynı hareket hataları saat gibi tekrar ediyor:

### Hata 1 — Check yapabilecekken call yapmak

Flop'ta ilk oynayan sensin, kimse bahis koymamış ve yeni bir oyuncu "call yapayım" diye çip atıyor. Görülecek bir şey yok — bu bir bahis olur. Street açılmadıysa check yap ve kartı bedavaya gör.

### Hata 2 — String raise

"Call... yok, dur, raise!" Olmaz. Canlı pokerde hareketin, ilan ettiğin an kilitlenir. Krupiyelerin bunu cümlenin ortasında düz call saydığını, sayamayacağım kadar çok kez gördüm. Önce "raise" de, *sonra* çipleri hareket ettir.

### Hata 3 — Big blind'in bedava flop'u atması

Herkes limp'ler, sıra big blind'e gelir ve o... fold eder. Bu, bedava bir flop'u muck'a atmaktır. ==g:Kimse yükseltmediyse BB check yapıp üç kartı sıfır ekstra maliyetle görebilir== — blind zaten canlı. Bu her turda çıkar.

### Hata 4 — Sessiz tek çip

$10'lık bir bahis karşısında oyuncu sessizce tek bir $100'lık çip atar, hem para üstü hem raise bekler. Çoğu salonda ==tek çip kuralı (one-chip rule)==, ilan edilmemiş tek büyük çipin sadece call olduğunu söyler. Yükselteceksen "raise" de.

---

:::readnext[Okumaya devam et]
/tr/blog/holdem-all-in-rules | All-in kuralları ve yan potlar | /images/holdem-all-in-rules-hero.webp
/tr/blog/holdem-game-order | Texas Hold'em oyun sırası | /images/blog-holdem-game-flow.webp
:::

## Sıkça sorulan sorular

**Q. Pokerde check yaptıktan sonra raise yapılır mı?**

A. Evet — check'ten sonra biri bahis koyarsa, sıra sana dönünce yükseltebilirsin. Bu check-raise'dir ve tamamen yasaldır. Arkandaki herkes check yaparsa yükseltecek bahis olmaz ve street öylece biter.

**Q. Kendi bahsini yükseltebilir misin?**

A. Hayır. Sen bahis koyarsın ve rakipler sadece call yaparsa fazladan ekleyemezsin — bahis turu biter. Ancak başka bir oyuncu seni önce yükseltirse tekrar raise yapabilirsin, bu da hareketi yeniden açar.

**Q. Texas Hold'em'de kaç kez raise yapabilirsin?**

A. No-Limit'te yükseltme sayısına sınır yok — her raise minimum artışı karşıladığı sürece, bir oyuncu all-in olana kadar re-raise sürebilir. Fixed-Limit oyunlarda tur genelde bir bahis artı üç yükseltmeyle sınırlanır.

**Q. Sıran gelmeden fold yapabilir misin?**

A. Yapmamalısın. Hareket saat yönünde, sırayla ilerlemeli; sırası gelmeden yapılan bir fold, hâlâ karar veren oyunculara bilgi sızdırır. Çoğu salon bunu bağlayıcı sayar ve tekrarında uyarı ya da ceza verebilir. Sağındaki oyuncu oynayana kadar bekle.

**Q. Preflop'ta check yapılır mı?**

A. Yalnızca big blind olarak ve yalnızca kimse yükseltmediyse. BB zaten canlı bir bahis koymuştur, o yüzden check yapıp flop'u bedavaya görebilir. Preflop'ta diğer her pozisyon call, raise ya da fold yapmalı.

**Q. Biri all-in olduktan sonra raise yapılır mı?**

A. All-in'in büyüklüğüne bağlı. All-in tam yasal bir yükseltmeyse hareket yeniden açılır ve re-raise yapabilirsin. Tam bir min-raise'den *azsa*, önceden oynamış oyuncular çoğunlukla sadece call ya da fold yapabilir — kısa all-in çoğu salonda onlar için yükseltmeyi açmaz.

**Q. Pokerde string bet nedir?**

A. Çipleri birden fazla hareketle koymak ya da "call" deyip sonra "raise" demeden yükseltme eklemek. Krupiyeler string bet'i orijinal miktarın call'u sayar. Hareketini sözle ilan et ya da tüm çipleri tek hareketle koy.

**Q. Pokerde limp ne demek?**

A. Limp, preflop'ta yükseltmek yerine sadece big blind'i görerek pota girmektir. Yasaldır ama genelde zayıf oyundur — nadir birkaç durumda mantıklı olsa da kural değil istisnadır.

---

## İlgili yazılar

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/tr/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Yeni başlayanlar için Texas Hold'em kuralları</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Tam kural rehberi — blindlerden showdown'a</div>
  </a>
  <a href="/tr/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Oyun akışı</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em oyun sırası</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Preflop'tan river'a gerçek el örnekleriyle</div>
  </a>
  <a href="/tr/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blindler</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small blind vs big blind farkı</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Kartları görmeden neden ödersin</div>
  </a>
</div>
`.trim(),
};
