import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "德州扑克概率一览表 —— 每种牌型的真实概率",
  seoTitle: "你到底多久能中一次？德州扑克概率一览表",
  desc: "德州扑克每种牌型、翻牌、听牌的真实概率，加上「2 和 4 法则」与底池赔率的简单算法，全部整理成一张完整的概率一览表。",
  tldr: "德州扑克靠概率做决策，不是靠猜。牌型越稀有排名越高：打到河牌你有 43.8% 会做成一对、3.0% 同花、2.6% 葫芦，皇家同花顺约每 3.1 万手才出现一次。听牌时用「2 和 4 法则」（outs×4 估到河牌胜率），再和底池赔率一比，就知道该跟还是弃。",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-24",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "13 分钟",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "俯视一张正在进行的德州扑克桌，摆着五张公共牌、散落的筹码堆，几名牌手打到一半",
  tags: ["德州扑克概率", "德扑概率一览表", "牌型概率", "翻牌中 set 概率", "2 和 4 法则", "底池赔率", "outs 补牌一览表", "德州扑克赔率"],
  content: `
我第一次在现场牌局拿一对 5 去 set-mine，翻牌就中了暗三条，旁边那哥们哀嚎了一句"这也能中，*概率*多低啊？"——而我还真知道：大约 ==1 比 8.5==。就是这一个数字，让我一开始敢跟。

扑克不是猜谜游戏。每一次跟、弃、推，本质上都是一道 ==披着外衣的概率题==，赢家就是那些把"概率多少？"变成条件反射的人。这是德州扑克 ==完整的**概率一览表**==——每种成手牌、每种翻牌、每种听牌——外加那 ==g:一个心算捷径==，让你在牌桌上两秒钟就能把账算清。

---

### 最该记住的几个数字

:::stripe
43.8% | 打到河牌做成一对
23.5% | 两对
3.0% | 做成同花
2.6% | 做成葫芦
1 in 30,940 | 皇家同花顺
:::

---

## 德州扑克牌型概率一览表：每种牌的真实概率

这就是主表。大多数网站漏掉的关键：每种牌都有 ==两个不同的数字==，把它们搞混，就是大家争论皇家同花顺到底"多稀有"的原因。

- **5 张牌概率** = 随手发的一副五张牌*恰好就是*那种牌型的几率（经典教科书数字）。
- **德州扑克（打到河牌）** = 看完全部七张牌（你的两张底牌 + 五张公共牌）后，你*最终*做成那种牌型的几率。这才是牌桌上真正重要的数字。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 牌型 | 5 张牌概率（发到） | 德扑概率（到河牌） |
|:---|:---:|:---:|
| 皇家同花顺 | 1 in 649,740 (0.000154%) | 1 in 30,940 (0.0032%) |
| 同花顺 | 1 in 72,193 (0.00139%) | 1 in 3,590 (0.0279%) |
| 四条 | 1 in 4,165 (0.0240%) | 1 in 595 (0.168%) |
| 葫芦 | 1 in 694 (0.144%) | 1 in 39 (2.60%) |
| 同花 | 1 in 509 (0.197%) | 1 in 33 (3.03%) |
| 顺子 | 1 in 255 (0.392%) | 1 in 22 (4.62%) |
| 三条 | 1 in 47 (2.11%) | 1 in 21 (4.83%) |
| 两对 | 1 in 21 (4.75%) | 1 in 4.3 (23.5%) |
| 一对 | 1 in 2.4 (42.3%) | 1 in 2.3 (43.8%) |
| 高牌 | 1 in 2.0 (50.1%) | 1 in 5.7 (17.4%) |

</div>

> **最让人意外的数据**
> 高牌是*最*常见的五张牌牌型（50%），却是*最*少见的德扑结果之一（17%）。为什么？七张牌给了你太多配对的机会，"到河牌都没成对"反而变得罕见。牌越多，连接越多。

注意顺序永远不变——一种牌越难做成，它就越大。这正是 [德州扑克牌型排名](/zh/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") 背后的全部逻辑：概率*就是*排名。

:::quiz:::

---

## 每种起手牌被发到的概率

![口袋 A —— 黑桃 A 和红桃 A 刚发到绿色台呢上，旁边是筹码](/images/holdem-probability-starting-hands.webp "口袋 A：最好的起手牌，每 221 手才发到一次")

翻牌之前，一共有 **1,326 种可能的两张起手牌**。下面是大家最爱问的那几手各自出现的频率。

| 起手牌 | 概率 | 出现频率 |
|:---|:---:|:---|
| 某一对特定口袋对（如 A-A） | 1 in 221 (0.45%) | 大约每 221 手一次 |
| **任意**口袋对 | 1 in 17 (5.9%) | 现场大约每小时两次 |
| A-K 同花（特定） | 1 in 332 (0.30%) | 罕见 |
| A-K（同花*或*非同花） | 1 in 83 (1.2%) | — |
| 任意两张同花色 | 1 in 4.3 (23.5%) | 几乎每四手就有一手 |

所以下次有人说"我从来发不到 A"，他说得大致没错——你被发到*特定*的一对（比如口袋 A）平均只有 ==大约每 221 手一次==。但**任意**口袋对每 17 手就来一次，这就是为什么 set-mine 是真实可行的打法，不是幻想。哪些对子和同花手值得从哪个座位打，可以看[按位置排的起手牌图表](/zh/blog/holdem-starting-hands-chart)。

---

## 翻牌中每种牌型的概率

这张表大多数概率页面要么埋掉，要么拆散在十几篇文章里。这些是给定左栏底牌后，翻牌*帮你做成*那种牌的概率。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 你翻牌中… | 手持 | 概率 | 赔率 |
|:---|:---|:---:|:---:|
| 暗三条（set）或更好 | 一对口袋对 | 11.8% | ~7.5 比 1 |
| 同花 | 两张同花色 | 0.84% | ~118 比 1 |
| 同花听牌 | 两张同花色 | 10.9% | ~8 比 1 |
| 顺子 | 同花连张（如 8-7） | 1.3% | ~76 比 1 |
| 两对 | 两张不成对的牌 | 2.0% | ~49 比 1 |
| 葫芦 | 一对口袋对 | 0.98% | ~101 比 1 |
| 四条 | 一对口袋对 | 0.245% | ~407 比 1 |

</div>

最该记住的是第一行：==**你翻牌中暗三条（set）的概率大约 12%**，也就是大约 1 比 8.5==。就这一个数字，决定了为了 set-mine 一对小对去跟一个加注到底划不划算——你需要底池（加上对手很可能的码量）在你中牌时给你超过 7.5 比 1 的回报。这就通向了下面的 [底池赔率](#pot-odds)。想看这里每一行的完整推导——外加 set-mine 的码量法则、成手/听牌/直接成同花的拆分——可以看深度解析：[听牌概率与翻牌中各牌型的概率](/zh/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp")。

---

## 听牌概率：到河牌做成同花或顺子

翻牌后你有一手听牌。你有多大几率完成它？一切都归结于 **outs（补牌）**——牌堆里剩下的、能帮你做成牌的那些牌。数出你的 outs，然后横着看下去。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 听牌 | outs | 翻牌 → 河牌（2 张） | 转牌 → 河牌（1 张） |
|:---|:---:|:---:|:---:|
| 同花 + 两头顺（组合听牌） | 15 | 54.1% | 32.6% |
| 同花 + 卡顺 | 12 | 45.0% | 26.1% |
| 同花听牌 | 9 | 35.0% | 19.6% |
| 两头顺听牌 | 8 | 31.5% | 17.4% |
| 两张超对牌 | 6 | 24.1% | 13.0% |
| 卡顺（内嵌顺）听牌 | 4 | 16.5% | 8.7% |
| 一对 → 暗三条 / 暗三条 → 葫芦 | 2 | 8.4% | 4.3% |

</div>

经典场面：你翻牌中一手**同花听牌**（9 张 outs）。你到河牌 ==有 35% 会做成==——比三分之一还高一点。**两头顺听牌**（8 张 outs）中 31.5%。注意这两栏：一旦转牌落空，你在*单独*一张牌上的概率大约减半，这正是为什么听牌一条街一条街地追下去会越来越贵。

---

## 如何计算扑克概率：数 outs 与 2 和 4 法则

你没法把那张表整个记在脑子里——但你也不需要。**2 和 4 法则**一秒钟就能把你算到误差一两个百分点以内：

:::steps
数出你的 outs | 那些没露面、能帮你做成牌的牌（同花听牌 = 9）
翻牌上（还有 2 张要发） | outs × 4 → 你到河牌中牌的大致百分比
转牌上（还有 1 张要发） | outs × 2 → 你在河牌中牌的大致百分比
:::

**实战演算。** 翻牌后你有四张同花色的牌，差一张成同花。那就是 ==9 张 outs==（你这门花色 13 张 − 你看得见的 4 张）。翻牌上：9 × 4 = **36%**——真实数字是 35.0%，你算得分毫不差。转牌上若落空：9 × 2 = **18%**（真实：19.6%）。

:::tip[这条法则在你的 outs 超过大约 9 张之后会略微*高估*。手握 15 张 outs 的巨怪听牌，"×4"说 60%，但真实数字是 54%——大听牌要往下调几个点。]:::

这就是全部诀窍。outs → 翻牌上乘以四 → 你的 [胜率](/zh/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")。剩下的只是知道拿这个数字该怎么办。这条法则唯一默认你已经掌握的技能，就是数 outs 本身——对于组合听牌、重叠的 outs、以及那些不该算数的"脏"outs，看完整指南：[如何数扑克 outs](/zh/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp")。

---

<a id="pot-odds"></a>

## 底池赔率：把你的概率变成跟注还是弃牌

![底池赔率信息图 —— 一个 $100 的底池和 $25 的跟注，所以 25 ÷ 125 意味着你需要 20% 胜率](/images/holdem-probability-pot-odds.webp "向 $100 底池跟 $25：25 ÷ 125 = 需要 20% 胜率才能打平")

知道你有 35% 会中牌，在你把它和**价格**比较之前毫无用处。底池赔率其实很简单：*我为了跟注，付出的是最终底池的多少比例？* 如果你赢的几率比这个比例大，你就跟。

**实战演算。** 底池是 $100。对手下注 $50，底池变成 $150。你必须跟 $50 才能去赢那 $150。

:::steps
下注后的底池 | $100 + $50 = $150
你的跟注 | 跟 $50 去赢 $150（最终底池 $200）
底池赔率 | 50 ÷ 200 = 25%——你至少需要 25% 胜率
你的胜率 | 同花听牌 ≈ 35%（4 法则）
决定 | 35% > 25% → 明显有利可图的 ==g:跟注==
:::

这就是所有数字兑现的时刻：你的**听牌概率（35%）**打败了你的**底池赔率（25%）**，所以长期来看跟注是赚钱的，尽管这一把你输的时候会比赢的时候多。当听牌比价格大，你就跟；当它比价格小，你就弃——不需要凭感觉。想看完整方法、下注尺度速查表，以及隐含赔率如何改变这个跟注决定，看 [如何计算底池赔率](/zh/blog/holdem-pot-odds) 和 [隐含赔率](/zh/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp")。

---

## 皇家同花顺与同花顺的概率（以及为什么它们这么稀有）

![红桃皇家同花顺信息图 —— 手中 A♥ K♥，在 10♥ J♥ Q♥ 的牌面上凑成红桃 A-K-Q-J-10](/images/holdem-probability-royal-flush.webp "红桃皇家同花顺：扑克里最稀有的牌，到河牌大约 1 比 30,940")

这两种最稀有的牌，是牌手会吹好几年的——而且吹得有理。

- **皇家同花顺：** 作为发到的五张牌，==1 比 649,740==。打德州扑克到河牌，因为你是从七张里挑最好的五张，概率提升到大约 1 比 30,940。不管怎么算，大多数牌手都要*好几年*才碰上一次。
- **同花顺：** 作为五张牌大约 1 比 72,193。对大多数人来说仍是一年一见。

为什么这么稀有？皇家同花顺恰好是**一种特定花色里一段特定的连牌**——整副牌里只有四种凑法，而普通高牌有 1,302,540 种凑法。稀有正是它稳坐排名之首的全部原因。

:::note
一个常见误区："皇家同花顺打赢一切，所以它可以被*打平*。"两副皇家同花顺只可能出现在不同花色——而既然花色永远不用来定胜负，那就是分池。实际上，除了共用牌面的巧合，这几乎永远不会发生。
:::

---

## 超级冷门概率：Cooler、四条和 bad beat

有些数字存在的意义，基本就是为了解释你打牌生涯里最惨的那个夜晚。

| 冷门 | 概率 |
|:---|:---:|
| 被发到口袋 A | 1 in 221 |
| 用口袋对翻牌中四条 | 1 in 407 |
| 用同花连张翻牌中同花顺 | ~1 in 4,900 |
| 到河牌做成皇家同花顺 | 1 in 30,940 |

**暗三条对暗三条（set over set）**——你翻牌中暗三条，却输给更大的暗三条——是终极 cooler。没有一个干净的单一数字，因为它取决于有多少玩家手握对子，但基准是这个：*你*翻牌中暗三条只有 11.8% 的概率，而对手在同一牌面上也做到这一点，罕见到大多数牌手每一次都记得清清楚楚。当它发生时，那是方差，不是失误——数学一路都站在你这边。想看这类摊牌到底怎么定胜负，[踢脚牌与平局规则](/zh/blog/holdem-tiebreak-rules) 涵盖了每一种边缘情况。

---

:::readnext[继续阅读]
/zh/blog/holdem-hand-rankings | 德州扑克牌型排名，从大到小 | /images/holdem-hand-rankings-hero.webp
/zh/blog/holdem-starting-hands-chart | 到底该打哪些起手牌 | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. 德州扑克拿到皇家同花顺的概率是多少？**

A. 打完一手德州扑克（用七张里最好的五张）到河牌，大约 1 比 30,940。作为直接发到的五张牌，是 1 比 649,740。不管怎么算，大多数牌手都要好几年才碰上一次。

**Q. 同花顺的概率是多少？**

A. 作为五张牌大约 1 比 72,193，或在德州扑克里到河牌大约 1 比 3,590。它是第二稀有的牌，只输给皇家同花顺。

**Q. 到河牌做成同花的概率是多少？**

A. 如果你翻牌中一手同花听牌（9 张 outs），你到河牌大约有 35% 会完成它——比三分之一还高一点。单独一张牌上（转牌到河牌），降到大约 19.6%。

**Q. 翻牌中暗三条（set）的概率是多少？**

A. 当你手握一对口袋对时，大约 11.8%，也就是大约 1 比 8.5。那个"7.5 比 1 不利"的数字，就是判断 set-mine 一对小对划不划算的基础。

**Q. 翻牌就中皇家同花顺的概率是多少？**

A. 微乎其微。哪怕你手里已经拿着其中两张同花色的牌——比如 A♥ K♥——翻牌恰好开出 Q♥ J♥ 10♥ 也只有大约每 19,600 次翻牌一次。从一手随机起手牌算起就更稀有了，所以几乎每一次做成的皇家同花顺，都是在转牌或河牌补上的，而不是翻牌。

**Q. 被发到口袋 A 的概率是多少？**

A. 具体到 A，是 1 比 221（0.45%）。不过任意口袋对来得频繁得多——大约每 17 手一次（5.9%）。

**Q. 扑克里的 2 和 4 法则是什么？**

A. 一个算听牌概率的捷径：翻牌上（还有两张要发）把你的 outs 乘以 4，或转牌上（还有一张要发）乘以 2，来估算你中牌的百分比几率。在大约 9 张 outs 以内，它误差只有一两个百分点。

**Q. 二四法则准不准？误差有多大？**

A. 在大约 9 张 outs 以内相当准，一般只差一两个百分点。以最经典的同花听牌（9 张 outs）为例：翻牌上 9 × 4 = **36%**，而精确值是 35.0%；转牌上 9 × 2 = **18%**，精确值是 19.6%。所以估算和真实值几乎重合。要注意的是，outs 超过大约 9 张之后，这条法则会**高估**——手握 15 张 outs 的巨怪听牌，"×4"说 60%，真实数字其实是 54.1%，大听牌记得往下调几个点。

**Q. 概率、胜率、赔率有什么区别？**

A. 三个词常被混用，其实各指一件事：**概率**是某件事发生的可能性（比如你翻牌中暗三条的概率是 11.8%）；**胜率**（equity）是你这手牌到摊牌能赢的百分比（同花听牌到河牌约 35%）；**赔率**（底池赔率）是你为了跟注，付出的钱占最终底池的比例（跟 $50 去赢 $200 就是 25%）。做决策的核心，就是拿**胜率**去和底池**赔率**比：胜率更高就跟，更低就弃。

**Q. 起手牌胜率表是怎么算的？单挑时不一样吗？**

A. 你看到的那些起手牌胜率百分比，绝大多数是按**九人全下**（9-way all-in）的假设算出来的——也就是所有人都把牌摊开、跑完五张公共牌，用海量模拟统计每手牌赢的比例。人越多，同一手牌的胜率通常越低，因为要同时打赢的对手更多。**单挑（heads-up）时会明显不一样**：只面对一名对手，强牌的胜率会大幅上升——比如口袋 A 单挑约有 85% 会赢，但在满桌九人里赢的比例就低得多。所以看胜率表时，先确认它假设的是几个人。

**Q. 底池赔率怎么算？**

A. 用你必须跟的金额除以跟注后的总底池。向 $150 的底池跟 $50，就是 50 ÷ 200 = 25%——所以你至少需要 25% 胜率才能有利可图地跟。把它和你的听牌概率比较：如果你中牌的几率更高，你就跟。

**Q. 暗三条对暗三条（set over set）的概率是多少？**

A. 没有单一固定的数字——它取决于有多少对手手握口袋对——但它很罕见。你翻牌中暗三条本身只有 11.8% 的概率，所以两名玩家在同一牌面上都翻中暗三条，就是那种赔光筹码的经典"cooler"。

**Q. 扑克里最常见的赢牌牌型是什么？**

A. 一对，其次是两对。因为每个人都共用那五张公共牌，大多数德州扑克的底池最后是靠一对加上踢脚牌分出胜负的——同花、顺子、葫芦赢的次数，远比新手想象的要少。每种结果的完整频率就在上面那张表里。

**Q. 最好的牌多久能赢一次？**

A. 比你在河牌之前以为的要少。哪怕是口袋 A——最好的起手牌——单挑时也只有大约 85% 会赢，面对满桌人时还要低得多。到了河牌，最好的五张牌按定义就是赢家；爆冷都发生在更早的时候，也就是一手成手牌被一手活的听牌反超的时候。

**Q. 在扑克里多久能击中翻牌一次？**

A. 拿着两张不成对的底牌，翻牌大约有 32% 会至少配上其中一张——也就是说你大概每三次翻牌就有两次完全落空。这正是位置和进攻性为什么这么重要：大多数翻牌谁都没配上，敢下注的那个人常常就把底池拿走了。

**Q. 拿到坚果牌（nuts）的概率是多少？**

A. 没有单一数字——坚果（某个牌面上可能做成的最大牌）随每一副牌面而变。在一个干燥、不成对的牌面上，坚果可能是顶暗三条；在一个协调的牌面上，可能是顺子或同花。真正的技能不是背一个概率数字，而是读出哪一手才*是*坚果，并判断对手有多大可能拿着它。

---

## 必须刻进脑子的 3 个数字

1. **翻牌中暗三条：约 12%（1 比 8.5）。** 决定每一次 set-mine 的跟注。
2. **同花听牌到河牌：35%。** 9 张 outs，4 法则 → 9 × 4 = 36%。
3. **底池赔率胜过凭感觉。** 如果你中牌的几率比跟注的价格大，你就跟——每一次都是。

扑克奖励那些把这些变成本能的人。学会这张表，练熟 2 和 4 法则，开始在行动*之前*就问"概率多少？"，而不是行动之后。接下来，把数学用起来，学学[哪些起手牌该从每个位置打](/zh/blog/holdem-starting-hands-chart)，或者温习一下 [为什么同花大过顺子](/zh/blog/holdem-flush-vs-straight)，这样你永远清楚自己的 outs 到底值多少。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型排名</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克牌型排名，从大到小</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">这些概率造就的顺序——每种牌都排好序</div>
  </a>
  <a href="/zh/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">起手牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">按位置排的起手牌图表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">这 1,326 手里到底该打哪些</div>
  </a>
  <a href="/zh/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌力对决</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">同花大过顺子吗？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么更稀有的牌总是赢</div>
  </a>
  <a href="/zh/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">读牌面</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克怎么读牌面</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">看清每一种听牌，数出你的 outs</div>
  </a>
  <a href="/zh/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">位置如何改变一切</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">概率何时值得跟注——以及位置何时值得</div>
  </a>
</div>
`.trim(),
};

export default POST;
