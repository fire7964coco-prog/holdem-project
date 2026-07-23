import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "ICM 是什麼？籌碼不等於現金——獨立籌碼模型一次看懂",
  seoTitle: "你的籌碼不值面額——撲克 ICM 是什麼",
  desc: "錦標賽裡籌碼不是現金，翻倍籌碼從不等於翻倍獎金。ICM（獨立籌碼模型）把你的籌碼量換算成真實獎金——一篇看懂它怎麼運作。",
  tldr: "ICM（獨立籌碼模型）用剩下的獎金結構和每個人的籌碼量，把你的錦標賽籌碼換算成真實的獎金價值。因為第一名只有一個，翻倍籌碼從不等於翻倍獎金——所以籌碼領先者的籌碼，價值低於他的籌碼佔比；短碼則高於他的佔比。這道缺口，就是為什麼你在泡沫期會蓋掉那些在現金桌輕鬆跟的手牌。",
  category: "tournament",
  date: "2026-07-23",
  updated: "2026-07-23",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "13 分鐘",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "決賽桌上一疊疊撲克籌碼擺在獎金階梯前，說明更大的籌碼量不會一比一換成更大份的獎金",
  tags: ["撲克 ICM", "ICM 是什麼", "獨立籌碼模型", "籌碼EV vs ICM", "ICM 交易", "決賽桌交易", "ICM 怎麼算", "錦標賽 ICM 策略"],
  content: `
我第一次被 ICM 坑掉錢的時候，根本不知道它的存在。桌上剩四個人，三個進錢圈，我低頭看到一手口袋 J，籌碼中等。我推了全下，籌碼領先者拿 A-10 跟，結果我在泡沫圈爆掉、一毛沒拿。==在現金桌，這個全下完全沒問題。但在那個泡沫圈，它是一場災難==——而背後的原因，正是錦標賽撲克裡最重要的一個觀念。

==錦標賽裡的籌碼不是錢。第一名永遠只有*一個*，所以翻倍你的籌碼，從不等於翻倍你真正值多少。== ICM——獨立籌碼模型（Independent Chip Model）——就是那塊把你的一疊籌碼換算成它真正代表的美元的數學。一旦你看懂它，那些原本感覺不對的跟注和蓋牌，突然全都說得通了。這篇會帶你從「ICM 到底是什麼」一路走到決賽桌交易怎麼分，每個數字都算給你看，你可以自己覆核。

ICM 只活在[錦標賽](/zh-hant/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")這個場景裡——它正是為什麼 MTT 後期的打法，跟現金桌完全是兩回事。

---

### ICM 速覽

:::stripe
籌碼 ≠ 現金 | 第一名獎金只有一個
籌碼領先者 | 價值*低於*他的籌碼佔比
短碼 | 價值*高於*他的籌碼佔比
:::

---

## ICM 是什麼？（What Is ICM in Poker）

**ICM（獨立籌碼模型）用剩下的獎金結構和每位玩家的籌碼量，把一疊籌碼換算成它真實的獎金價值。** 它回答一個問題：==如果錦標賽此刻就用這些籌碼結束，我在總獎池裡的那一份，換成美元到底值多少？==

它的做法，是先從每位玩家的籌碼佔比，估算他落在每個名次的機率——第一、第二、第三……——再把這些機率乘上對應的獎金。你的籌碼越多，落在高名次的次數就越多；但因為==最高獎金封頂了，多出來的籌碼買到的錢越來越少。==

關鍵的思維轉換在這：現金桌裡，一顆籌碼就是一塊錢，句號。錦標賽裡，一顆籌碼是一張押在固定獎金組上的*彩券*。ICM 就是幫這張彩券定價。它只適用於錦標賽和 SNG（Sit-and-Go）——**現金桌從來用不上**，因為那裡的籌碼本來就等於它的面額。

---

## 為什麼你的籌碼不值它的面額（Chips ≠ Money）

**因為獎金「頭重腳輕」，而且下面的獎金已經被鎖住了。** 假設三個名次分別付 $50 / $30 / $20。你一進錢圈，就至少保證拿到 $20——所以守住這 $20 的那些籌碼，價值連城；而那些衝著第一名去的籌碼，追的是一個你只能贏一次的獎項。

這讓「籌碼換錢」的曲線==彎掉==了：最前面的那些籌碼（求生存）值很多，最後面的那些籌碼（拼冠軍）值很少。一個手握一半籌碼的玩家，並不擁有一半的獎池——他擁有的明顯更少，因為他名次最高就是第一，卻*還是有可能*爆掉。

反過來看，短碼才是這道數學的贏家。他對下面那些獎金躍升（pay jump）已經有了實實在在的權益，所以==他的每一顆籌碼都值超過面額==。這一道不對稱——大碼在籌碼上被高估、短碼被低估——驅動你這輩子做的每一個 ICM 決策。

---

## ICM 怎麼算？（The Malmuth–Harville 模型）

**ICM 純粹依籌碼量，把每位玩家落在各個名次的機率算出來，再乘上獎金。** 這個方法常被稱為 Malmuth–Harville 模型——名次機率的數學來自 David Harville 在 1970 年代對賽馬賠率的研究，後來由 Mason Malmuth 套用到撲克上。

規則很簡單，而且是遞迴的：

- 你落到**第 1 名**的機率 = 你的籌碼 ÷ 全部籌碼。
- 你落到**第 2 名**的機率 = 把每一個「可能拿第 1 名」的對手都算一遍，加總（他奪冠的機率）×（你的籌碼 ÷ 扣掉他之後剩下的籌碼）。
- 每個更低的名次依此類推。

來實際算一遍。桌上剩三個人，獎金是 ==$50 / $30 / $20==（$100 獎池），籌碼是：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 名次 | 領先者（5,000 · 50%） | 中碼（3,000 · 30%） | 短碼（2,000 · 20%） |
|:--|:--:|:--:|:--:|
| 第 1 名 | 50.0% | 30.0% | 20.0% |
| 第 2 名 | 33.9% | 37.5% | 28.6% |
| 第 3 名 | 16.1% | 32.5% | 51.4% |

</div>

拿領先者的第 2 名數字來看，你就懂那個遞迴：如果中碼拿到第 1 名（發生機率 30%），領先者接著在剩下的 7,000 籌碼裡拿走 5,000 = 71.4%，於是 0.30 × 0.714 = 21.4%；如果短碼拿第 1 名（20%），領先者在 8,000 裡拿 5,000 = 62.5%，於是 0.20 × 0.625 = 12.5%。加起來：領先者有 ==33.9%== 的時候落在第 2 名。

現在把每一列乘上獎金，就得到每疊籌碼的美元價值：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 玩家 | 籌碼 % | ICM 價值 | ICM % | 對比籌碼 |
|:--|:--:|:--:|:--:|:--:|
| 領先者 | 50.0% | ==$38.39== | 38.4% | ==r:−11.6== |
| 中碼 | 30.0% | $32.75 | 32.8% | ==g:+2.8== |
| 短碼 | 20.0% | $28.86 | 28.9% | ==g:+8.9== |

</div>

數字全在這了：領先者手握==一半的籌碼，卻只佔 38.4% 的獎金==，而短碼那 20% 的籌碼，值 28.9%。你不用在牌桌上手算這些——[ICM 計算機](/zh-hant/blog/holdem-tournament)一秒就跑完——但親眼看過一次這台機器怎麼運轉，才是讓策略真正刻進腦子的關鍵。

---

## 籌碼EV vs ICM——差在哪？（Chip EV vs \$EV）

**籌碼EV（chip EV, cEV）用「贏了或輸了多少籌碼」來衡量一個決策；ICM（也就是 \$EV）用真實獎金來衡量。兩者早期一致，後期急劇分裂。** 錦標賽早期，獎金躍升還遠得很，一顆籌碼基本上就是一顆籌碼——你打[籌碼EV](/zh-hant/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")，不停地累積。一進錢圈、上決賽桌，ICM 就接管一切。

最經典的衝突，是一手邊緣全下。在籌碼EV 裡，為一個大底池打一場五五開可以是不錯、甚至是好的——你贏到的籌碼跟你可能輸掉的一樣多。但在 ICM 裡，它可能是清清楚楚該==蓋==，因為爆掉會賠上你已經鎖住、再也拿不回來的獎金，而你贏到的那些籌碼，價值又低於面額。

那正是我拿那手口袋 J 犯的錯：一個沒問題的籌碼EV 全下，卻是一個賠錢的 ICM 全下。==籌碼EV 問的是「這會不會把我的籌碼疊高？」ICM 問的是「這會不會把我的資金堆高？」==——只有第二個問題會真的付你錢。

---

## 「ICM 稅」：為什麼輸籌碼比贏籌碼更痛

**「ICM 稅」就是你的籌碼佔比和真實獎金佔比之間的那道缺口——籌碼一變頭重腳輕，這份價值就憑空蒸發。** 在剛才算過的例子裡，領先者的籌碼說 50%，獎金卻說 38.4%：當大碼要付一筆 ==11.6 個百分點的 ICM 稅==。

這筆稅在每一次全下裡都以**風險溢價（risk premium）**的形式現身——你在籌碼EV 打平點*之上*，還需要多出來的那塊勝率，一個跟注才真的在美元上獲利。如果籌碼數學說你要 40% 才能跟，ICM 可能要你 48–50%，因為下檔（爆掉、輸掉獎金躍升的權益）壓過了上檔（你贏到的籌碼還低於面額）。

感受最深的，是**泡沫期的中碼**——大到有實實在在的權益可以輸，又沒短到被逼著非上不可。他背著最高的風險溢價，該打得最緊。籌碼領先者背著*最低*的風險溢價，這正是 ICM 壓力（ICM pressure）背後的整台引擎。

---

![泡沫圈上，一個中碼在錢圈邊緣蓋掉面對大碼全下的牌，籌碼與獎金階梯都在畫面裡——ICM 壓力把一個正常的跟注變成蓋牌的那一刻](/images/holdem-icm-pressure.webp "ICM 壓力：中碼蓋牌，因為爆掉會賠上籌碼再也買不回來的鎖定獎金")

## 泡沫因子與風險溢價：ICM 怎麼改變你的全下和跟注

**「泡沫因子（bubble factor）」衡量的是「輸掉這些籌碼賠給你的痛」比「贏到同樣籌碼帶來的爽」多多少——而它會在每一次獎金躍升前飆高。** 泡沫因子 1.0，代表籌碼和錢一起動（遊戲早期）。泡沫因子 1.5，代表輸掉一個底池的痛，是贏下同樣底池的爽的 1.5 倍——所以你需要一個大得多的優勢才值得下場。

從它可以推出兩條實戰規則：

- **大碼：進攻。** 你的低風險溢價讓你可以對著那些「不冒著淘汰出局就不敢跟」的對手，不停地[開池和 3-bet](/zh-hant/blog/holdem-3bet)。這叫「施加 ICM 壓力」，也是在決賽桌贏籌碼最可靠的方法。
- **中碼與短碼：收緊你的跟注範圍，但保持率先推。** 當那個帶著棄牌權益（fold equity）主動全下的人，遠好過當那個被迫跟注（call off）的人。壓力之下，你的跟注範圍要用力縮小，而你率先全下的範圍保持進攻。

最惡夢的座位，是被全下打的中碼——蓋掉一些強度不輸你在現金桌會秒跟的手牌。那不是軟弱，那是 ICM。

---

## ICM 交易 vs 籌碼平分：決賽桌獎池怎麼拆

**籌碼平分（chip chop）按純籌碼佔比拆剩下的錢；ICM 交易（ICM deal）按每位玩家的 ICM 美元價值拆。籌碼平分偏袒大碼，ICM 交易對短碼更公平。** 當玩家們同意提前結束錦標賽、把獎金分掉，這就是桌上的兩種方法——而懂這個差別，值真金白銀。

假設三位玩家分別握 50% / 30% / 20% 的籌碼，要拆一個剩下 ==$1,500== 的獎池（原本付 $900 / $400 / $200）：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 玩家 | 籌碼平分 | ICM 交易 | 差額 |
|:--|:--:|:--:|:--:|
| 領先者（50%） | $750 | ==$618== | ==r:−$132== |
| 中碼（30%） | $450 | $485 | ==g:+$35== |
| 短碼（20%） | $300 | ==$397== | ==g:+$97== |

</div>

短碼從 ICM 交易拿到的，比籌碼平分多 ==$97==，因為 ICM 把他早已賺到的那些獎金躍升算了進去。所以規則很好記：==你是短碼，就要求 ICM 交易；你是籌碼領先者，就提議籌碼平分。== 實務上，籌碼領先者常常會談到*略高於*他 ICM 數字的位置（短碼也接受略低一點），換取把錢當場鎖死的確定性——這沒問題，只要你先知道自己的 ICM 數字。在你答應任何事之前，先把自己的籌碼和獎金結構丟進 [ICM 交易計算機](/zh-hant/blog/holdem-tournament)跑一遍。

---

## ICM 什麼時候最重要——什麼時候該無視它？

**ICM 在接近獎金躍升時最重要，在躍升還遠時最不重要。** 在這些場合請靠它：

- **[錢圈泡沫（bubble）](/zh-hant/blog/holdem-bubble)**——所有躍升裡最大的一次，就是從 $0 到進錢，所以風險溢價在這裡達到頂峰。
- **決賽桌泡沫，以及決賽桌上的每一次獎金躍升**——每一級階梯都是真金白銀。
- **衛星賽（satellite）**——最極端的例子：每一個晉級席位都同樣值錢，所以一旦你的籌碼夠贏一個席位，多出來的籌碼幾乎*一文不值*，你會蓋掉幾乎所有牌。

無視它（打籌碼EV）的時機：

- **早期與中期**，下一次獎金躍升還是個遙遠的抽象概念，累積籌碼才是贏錦標賽的方法。
- **深籌碼、盲注還很小**的時候，你有空間靠技術壓過對手，而不是把籌碼全推進去。
- **爭冠的單挑（heads-up）**，只剩兩個獎項，ICM 不再改變你的策略——那基本上又回到籌碼EV 了。

一個常見的漏洞是*過度*套用 ICM：明明壓力還沒真的來，卻一路蓋牌把自己蓋成短碼「想往上爬階梯」，而不是去累積。ICM 是一個後期工具，不是一張讓你整場都打得畏畏縮縮的藉口。

---

## ICM 有多準？它的局限（Limitations）

**ICM 是我們手上最好的簡單模型，但它是個近似值——它假設每位玩家技術相等，並且幾乎只看籌碼量、其他一律忽略。** 對它漏掉的東西要誠實：

- **技術。** ICM 把籌碼一樣多的世界冠軍和第一次打牌的新手，當成相等。強手的籌碼，價值高於模型所說。
- **位置。** 一個 3 個大盲的籌碼坐在按鈕位（最後才付盲注，被逼上之前多買到幾手免費的牌），價值高於同樣籌碼坐在大盲位（下一手就被迫全下）。ICM 看不見座位。
- **盲注與後續打法。** ICM 把錦標賽凍結在此刻這一瞬間；它無視上升的盲注、底注，以及接下來幾圈實際會怎麼打。

它的盲點甚至有實證支撐：一份 2025 年的大型研究拿 ICM 去回測真實錦標賽結果，發現它傾向==低估大碼、高估短碼==，部分原因就是一個有技術的籌碼領先者，能利用 ICM 壓力贏到*比*原始模型預測*更多*。進階解算器（solver）正是為此加上一個「未來局（future game）」修正。這些都不代表 ICM 是錯的——它代表 ICM 是一個強力的初步近似值，你要為技術和位置去微調它，而不是把它當成物理定律。

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-tournament | 德州撲克錦標賽策略 | /images/holdem-tournament-hero.webp
/zh-hant/blog/holdem-equity | 德州撲克勝率（Equity）講解 | /images/holdem-equity-hero.webp
:::

## 常見問題 FAQ

**Q. 撲克裡的 ICM 是什麼？**

A. ICM（獨立籌碼模型）是一條公式，用剩下的獎金和每位玩家的籌碼量，把你的錦標賽籌碼換算成真實的獎金價值。它之所以成立，是因為第一名只有一個，籌碼和美元不是同一回事——ICM 幫這道差價定價。

**Q. ICM 怎麼算？**

A. 它依每位玩家的籌碼佔比，算出他落在各個付錢名次的機率（落第一名的機率 = 你的籌碼 ÷ 全部籌碼，再遞迴算更低的名次），再把這些機率乘上獎金。加總就是你這疊籌碼的美元價值。實務上你會用 ICM 計算機；重點是搞懂它在做什麼。

**Q. ICM 和籌碼EV（chip EV）差在哪？**

A. 籌碼EV 用贏或輸多少籌碼衡量一個決策；ICM 用真實獎金衡量。兩者在錦標賽早期一致，接近錢圈就分岔，因為在那裡爆掉會賠上鎖定的獎金權益。一手在籌碼EV 沒問題的五五開全下，在 ICM 下可能是清楚的蓋牌。

**Q. 什麼是 ICM 交易？它和籌碼平分有什麼不同？**

A. 兩者都是玩家同意提前結束時拆獎池的方法。籌碼平分按純籌碼佔比拆錢（偏袒大碼）；ICM 交易按每位玩家的 ICM 美元價值拆（對短碼更公平）。你是短碼就要求 ICM 交易；你是籌碼領先者，籌碼平分付你更多。

**Q. ICM 適用於現金桌嗎？**

A. 不。現金桌裡每一顆籌碼本來就等於它的面額，而且你隨時能重買或離場，所以沒東西要換算。ICM 之所以存在，就是因為錦標賽的籌碼沒辦法按面額換成現金。

**Q. 我什麼時候該無視 ICM？**

A. 早期與中期、深籌碼小盲注、以及爭冠的單挑——全都是獎金躍升還遠、或只剩兩個獎項的場合。這些時候你打籌碼EV，專心累積籌碼。

**Q. 最常見的 ICM 錯誤有哪些？**

A. 三個大的。第一，*過度*套用 ICM——獎金躍升明明還遠，卻一路蓋牌「想爬階梯」，而不是累積籌碼。第二，當泡沫期附近的中碼卻跟得太寬，那正是你風險溢價最高、爆掉會賠上鎖定獎金的地方。第三，當短碼卻答應籌碼平分（或當領先者卻答應 ICM 交易）而事先沒算過數字。ICM 是後期工具：用得太早、或在決賽桌無視它，都會漏錢。

**Q. ICM 是誰發明的？**

A. 名次機率的數學通常歸功於 David Harville（來自 1970 年代的賽馬研究），後由 Mason Malmuth 套用到撲克錦標賽——因此叫「Malmuth–Harville」模型。它成了替錦標賽籌碼估值、以及拆決賽桌交易的標準方法。

---

## 要記住的 3 件事

1. **籌碼不是錢。** 第一名只有一個，所以籌碼領先者的價值低於他的籌碼佔比，短碼則高於。這一道缺口，就是 ICM 的全部。
2. **後期，從籌碼EV 切換到 \$EV。** 接近獎金躍升時，一個跟注需要額外的勝率（風險溢價）才划算。中碼會蓋掉現金桌裡秒跟的手牌。
3. **交易前先知道你的數字。** 短碼想要 ICM 交易，大碼想要籌碼平分——先跑一次計算機。

從這裡，去看看 ICM 壓力怎麼嵌進更大的[錦標賽策略](/zh-hant/blog/holdem-tournament)，或回到地基，把[德州撲克勝率（Equity）](/zh-hant/blog/holdem-equity)和[底池賠率](/zh-hant/blog/holdem-pot-odds)重新打牢。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">錦標賽</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克錦標賽策略</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">ICM 所屬的支柱主題</div>
  </a>
  <a href="/zh-hant/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克勝率（Equity）講解</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">籌碼EV 不過是用籌碼算的勝率</div>
  </a>
  <a href="/zh-hant/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">機率與數學</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克底池賠率怎麼算</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">後期每個跟注背後的價錢</div>
  </a>
  <a href="/zh-hant/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">決策</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克何時該蓋牌</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">泡沫期蓋掉現金桌會跟的牌</div>
  </a>
</div>
`.trim(),
};

export default POST;
