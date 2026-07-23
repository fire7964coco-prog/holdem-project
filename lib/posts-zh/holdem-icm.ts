import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "德州扑克 ICM 是什么？把独立筹码模型讲给你听",
  seoTitle: "你的筹码不值面值——德州扑克里的 ICM",
  desc: "锦标赛里筹码不是现金——只有冠军拿最多。ICM（独立筹码模型）把你的码量换算成真正的奖金。这篇讲清它怎么运作。",
  tldr: "ICM（独立筹码模型）用奖金结构和所有人的码量，把你锦标赛的筹码换算成它真正值多少奖金。因为冠军只有一个，把筹码翻倍永远不会把你的钱翻倍——所以 chip leader 的码量价值低于它的筹码占比，而 short stack 的价值高于筹码占比。这个差距，正是你在 bubble 上会弃掉那些在现金局里轻松跟的牌的原因。",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-24",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "13 分钟",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "final table 的筹码堆在一张奖金阶梯前，说明更大的筹码堆并不会一比一换算成更大的奖金份额",
  tags: ["扑克 icm", "德州扑克 icm 是什么", "icm 是什么意思", "icm vs chip ev", "icm 分钱", "chip chop vs icm", "icm 怎么算", "icm 锦标赛策略"],
  content: `
ICM 第一次让我亏钱时，我压根不知道有这个东西。桌上剩四个人，三个进钱，我低头一看是一对 J、码量中等。我推了，chip leader 拿 A-10 跟注，我在 bubble 上出局，一分钱没拿到。==在现金局里这个推毫无问题。可在那个 bubble 上，它是场灾难== ——原因，就是锦标赛扑克里最重要的那个概念。

==锦标赛里的筹码不是钱。你永远只能赢*一个*冠军，所以翻倍你的码量永远不会翻倍你实际值多少。== ICM——独立筹码模型（Independent Chip Model）——就是那套把你一堆筹码换算成它所代表的真实美元的数学。你一旦看懂它，那些曾经感觉不对的跟注和弃牌，就突然全说得通了。这篇指南带你从"ICM 到底是什么"一路走到 final table 分钱，每一个数字都算给你看，你自己也能对。

ICM 专属于 [锦标赛这种玩法](/zh/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") ——它正是为什么 MTT 后期的打法跟现金局完全不一样。

---

### ICM 一览

:::stripe
筹码 ≠ 钱 | 你只能赢一个冠军
chip leader | 值得比他的筹码占比**更少**
short stack | 值得比他的筹码占比**更多**
:::

---

## 德州扑克里的 ICM 是什么？

**ICM（独立筹码模型）用剩下的奖金结构和每个人的码量，把一份筹码换算成它真正值多少奖金。** 它回答一个问题：==如果锦标赛此刻就以这些码量结束，我这一份奖池实际值多少美元？==

它的做法是：从每个人的筹码占比出发，估算他们各自落在每个进钱名次——第一、第二、第三，以此类推——的概率，再把这些概率乘以对应的奖金。你的码量越大，你落在高名次的次数就越多；但因为 ==冠军奖金是封顶的，多出来的筹码换来的钱越来越少。==

关键的思维转变：在现金局里，一个筹码就是一美元，就这么简单。在锦标赛里，一个筹码是一张押在固定奖金上的*彩票*。ICM 就是给这张彩票定价。它只适用于锦标赛和 sit-and-go——[永远不适用于现金局](/zh/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")，因为在现金局里你的筹码本来就等于它的面值。

---

## 为什么你的筹码换成钱时不值面值

**因为奖金是"头重脚轻"的，而且低于你的那部分已经锁定了。** 假设三个奖金分别付 $50 / $30 / $20。你一进钱，就保证至少能拿 $20——所以那些护着这 $20 的筹码非常宝贵，而那些冲着冠军去的筹码，追的是一个你只能赢一次的奖。

这让筹码换钱的曲线 ==弯曲== 起来：最先的那些筹码（生存）值很多，最后的那些筹码（去争冠军）值得更少。一个握着一半筹码的人，并不拥有一半奖池——他拥有的明显更少，因为他不可能比第一名更好，但他*仍然*会出局。

反过来看，short stack 才是这套数学的赢家。他对身下那些 pay jump 已经有了实打实的所有权，所以 ==他的每一个筹码都值得比面值更多==。这一个不对称——大码量在筹码上被高估，short stack 被低估——驱动着你日后会做的每一个 ICM 决策。

---

## ICM 怎么算？（Malmuth–Harville 模型）

**ICM 纯粹根据码量大小，给每个人分配他落在每个名次的概率，然后乘以奖金。** 这套方法常被叫作 Malmuth–Harville 模型——落名次概率的数学，来自 David Harville 在 1970 年代对赛马赔率的研究，Mason Malmuth 把它用到了扑克上。

规则很简单，而且是递归的：

- 你落在 **第 1 名** 的概率 = 你的码量 ÷ 总筹码。
- 你落在 **第 2 名** 的概率 = 对每一个可能拿到第 1 名的其他人，把（他夺冠的概率）×（你的码量 ÷ 去掉他之后剩下的筹码）加起来。
- 每个更低的名次都这么继续算下去。

来真算一次。桌上剩三个人，奖金是 ==$50 / $30 / $20==（$100 奖池），码量分别是：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 名次 | Leader（5,000 · 50%） | Middle（3,000 · 30%） | Short（2,000 · 20%） |
|:--|:--:|:--:|:--:|
| 第 1 名 | 50.0% | 30.0% | 20.0% |
| 第 2 名 | 33.9% | 37.5% | 28.6% |
| 第 3 名 | 16.1% | 32.5% | 51.4% |

</div>

拿 leader 的第 2 名数字，你就能看清这个递归：如果 Middle 拿了第一（30% 的概率），leader 接着拿走剩下 7,000 筹码里的 5,000 = 71.4%，于是 0.30 × 0.714 = 21.4%；如果 Short 拿了第一（20%），leader 拿走 8,000 里的 5,000 = 62.5%，于是 0.20 × 0.625 = 12.5%。加起来：==33.9%== 的概率下 leader 落在第 2 名。

现在把每一行乘以奖金，你就得到每份码量的美元价值：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 玩家 | 筹码 % | ICM 价值 | ICM % | vs 筹码 |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50.0% | ==$38.39== | 38.4% | ==r:−11.6== |
| Middle | 30.0% | $32.75 | 32.8% | ==g:+2.8== |
| Short | 20.0% | $28.86 | 28.9% | ==g:+8.9== |

</div>

数字摆在这儿了：leader 握着 ==一半的筹码，却只有 38.4% 的钱==，而 short stack 那 20% 的筹码值得 28.9%。你不用在牌桌上手算这些——[ICM 计算器](/calculator) 一瞬间就算好——但把这套机器看懂一次，才能让策略真正扎根。

---

## ICM vs chip EV——区别是什么？

**chip EV 用赢来或输掉的筹码来衡量一个决策；ICM（或叫 "$EV"）用真实奖金来衡量。它们在前期一致，在后期分道扬镳。** 锦标赛前期，pay jump 又小又远，一个筹码基本就是一个筹码——你打 [chip EV](/zh/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp")，不停地积累。逼近钱圈和 final table 时，ICM 就接管了。

经典的冲突是一次边缘的 all in。在 chip EV 里，为一个大底池打一次 coin flip 可能没问题、甚至很好——你赢的筹码和输的一样多。在 ICM 里它可能是个明确的 ==弃牌==，因为出局会让你失去那些拿不回来的、已锁定的奖金，而你要赢的那些筹码，值得比面值更少。

那正是我拿那对 J 犯的错：一次没问题的 chip-EV 推，一次亏钱的 ICM 推。==chip EV 问的是"这会做大我的码量吗？"ICM 问的是"这会做大我的 bankroll 吗？"== ——而只有后者才真正兑现成钱。

---

## "ICM 税"：为什么输筹码的痛，大过赢筹码的爽

**"ICM 税"就是你的筹码占比和你真实的钱占比之间的差——一旦码量变得头重脚轻，这部分价值就凭空蒸发。** 在上面那个算例里，leader 的筹码说是 50%，钱却只说 38.4%：当大码量要交一笔 ==11.6 个点的 ICM 税==。

这笔税在每一次 all in 里都以 **风险溢价（risk premium）** 的形式出现——在 chip-EV 的盈亏平衡点*之上*，你还需要额外多出来的胜率，一次跟注才真的能赚到钱。如果筹码数学说你需要 40% 才能跟，ICM 可能会要求 48-50%，因为下行风险（出局、失去 pay-jump 权益）盖过了上行收益（那些值得比面值更少的筹码）。

对这一点感受最深的，是 **bubble 上的中等码量** ——大到有真实的权益可输，又没短到被迫进池。他们背着最高的风险溢价，也该打得最紧。大码量背的风险溢价*最低*，这正是整套 ICM 施压背后的引擎。

---

![一个中等码量的锦标赛牌手在钱圈 bubble 上向大码量的 all in 弃牌，画面里有筹码和一道奖金阶梯——正是 ICM 压力把一次正常的跟注变成弃牌的那一刻](/images/holdem-icm-pressure.webp "ICM 压力：中等码量弃牌，因为出局会让他失去那些筹码买不回来的、已锁定的奖金")

## bubble factor 与风险溢价：ICM 怎么改变你的推和跟

**"bubble factor"衡量的是：输掉你的筹码，比赢来同样的筹码要多亏多少——而它会在每一次 pay jump 之前飙升。** bubble factor 为 1.0 意味着筹码和钱同步移动（前期）。bubble factor 为 1.5 意味着输掉一个底池的痛，是赢下一个同样底池的爽的 1.5 倍——所以你需要大得多的优势才值得下场。

从中掉出两条实战规则：

- **大码量：进攻。** 你低的风险溢价，让你可以对那些一跟注就要赌上锦标赛性命的人，不停地 [开池和 3bet](/zh/blog/holdem-3bet)。这就叫"施加 ICM 压力"，也是在 final table 赢筹码最可靠的方式。
- **中等码量和 short stack：收紧你的跟注范围，但保持率先推牌。** 当那个率先 all in（带着 fold equity）的人，远好过当那个不得不 call off 的人。压力之下，你的跟注范围该狠狠收紧，而你率先 open-shove 的范围要保持激进。

最难受的座位，是被推的那个中等码量——弃掉一些强到你在现金局里会 snap-call 的牌。那不是软弱，那是 ICM。

---

## ICM deal vs chip chop：怎么分掉一个 final table 的奖池

**chip chop 按纯筹码占比来分剩下的钱；ICM deal 按每个人的 ICM 美元价值来分。chip chop 偏袒大码量，ICM deal 对 short stack 更公平。** 当玩家们同意提前结束锦标赛、把奖金分掉时，桌面上就是这两种方法——而懂得两者的区别，值真金白银。

假设三个玩家分别握着 50% / 30% / 20% 的筹码，要分一个 ==$1,500== 的剩余奖池（付 $900 / $400 / $200）：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 玩家 | chip chop | ICM deal | 差额 |
|:--|:--:|:--:|:--:|
| Leader（50%） | $750 | ==$618== | ==r:−$132== |
| Middle（30%） | $450 | $485 | ==g:+$35== |
| Short（20%） | $300 | ==$397== | ==g:+$97== |

</div>

short stack 从一次 ICM deal 里，比 chip chop 多拿 ==$97==，因为 ICM 把他已经挣到的那些 pay jump 记在了他头上。所以规则很简单：==如果你是 short，就要求 ICM deal；如果你是 chip leader，就提议 chip chop。== 实战里，chip leader 常常会谈到略*高于*他的 ICM 数字（而 short stack 接受略低），换来一份锁定奖金的确定性——这没问题，只要你先知道自己的 ICM 数字。在你答应任何事之前，先把你自己的码量和奖金结构丢进 [ICM 分钱计算器](/calculator) 里跑一遍。

---

## ICM 什么时候最重要——什么时候又该无视它？

**ICM 在逼近 pay jump 时最重要，在 pay jump 还很远时最不重要。** 在这些位置上靠它：

- **[钱圈 bubble](/zh/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp")** ——最大的一次跳跃，就是从 $0 到进钱，所以风险溢价在这里达到峰值。
- **final table 的 bubble，以及 final table 上每一次 pay jump** ——阶梯上的每一级都是真钱。
- **卫星赛（satellite）** ——最极端的情形：每一个晋级席位价值都相同，所以一旦你有足够的筹码赢下一个席位，多出来的筹码就几乎*一文不值*，你几乎会弃掉一切。

无视它（打 chip EV）的时候是：

- **前期和中期**，此时下一次 pay jump 还是个遥远的抽象概念，积累筹码才是赢下锦标赛的关键。
- **筹码深、盲注小的打法**，此时你有空间靠牌技压制对手，而不是把钱全推进去。
- **争冠军的 heads-up**，此时只剩两个奖金，ICM 不再改变你的策略——它实际上又变回了 chip EV。

一个常见的漏洞是过度套用 ICM：一路弃牌把自己弃成 short stack "去 ladder up"，而不是在压力其实还没到时去积累筹码。ICM 是个后期工具，不是让你整场锦标赛都打得畏手畏脚的借口。

---

## ICM 有多准？它的局限

**ICM 是我们手上最好的简单模型，但它是个近似——它假设每个玩家水平相同，并且除了码量大小之外几乎无视一切。** 对它遗漏的东西要诚实：

- **牌技。** ICM 把码量相同的世界冠军和第一次打的新手当成相等。一个更强的玩家，他的筹码值得比模型说的更多。
- **位置。** button 上的 3 个大盲码量（马上能看便宜翻牌）值得比 big blind 上同样的码量（马上被迫进池）更多。ICM 看不见座位。
- **盲注和后续打法。** ICM 把锦标赛冻结在此刻这一瞬间；它无视上涨的盲注、ante，以及接下来几圈实际会怎么打。

它的盲点甚至有实证支撑：2025 年一项大型研究，把 ICM 拿去回测真实锦标赛结果，发现它倾向于 ==低估大码量、高估 short stack==，部分原因是一个技术娴熟的 chip leader 能利用 ICM 压力，赢得比原始模型预测的*更多*。高级 solver 正是为此加了一个"future game"修正项。这些都不能说明 ICM 是错的——它说明 ICM 是一个强有力的初步近似，你要针对牌技和位置去调整它，而不是把它当成物理定律。

---

:::readnext[继续阅读]
/zh/blog/holdem-tournament | 德州扑克锦标赛策略 | /images/holdem-tournament-hero.webp
/zh/blog/holdem-equity | 扑克胜率讲清楚 | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. 德州扑克里的 ICM 是什么？**

A. ICM（独立筹码模型）是一条公式，用剩下的奖金结构和每个玩家的码量，把你锦标赛的筹码换算成它真正值多少奖金。它之所以成立，是因为你只能赢一个冠军，所以筹码和美元不是一回事——ICM 就是给这个差价定价。

**Q. ICM 怎么算？**

A. 它根据每个玩家的筹码占比，给他分配一个落在每个进钱名次的概率（你落在第一的概率 = 你的码量 ÷ 总筹码，然后对更低的名次递归计算），再把这些概率乘以奖金。加起来就是你这份码量的美元价值。实战里你会用一个 ICM 计算器；重点是理解它在做什么。

**Q. ICM 和 chip EV 有什么区别？**

A. chip EV 用赢来或输掉的筹码衡量一个决策；ICM 用真实的钱衡量。它们在锦标赛前期一致，逼近钱圈时分道扬镳，因为在那里出局会让你失去已锁定的奖金权益。一次在 chip EV 里没问题的 coin-flip all in，在 ICM 下可能是个明确的弃牌。

**Q. 什么是 ICM deal，它和 chip chop 有什么不同？**

A. 两者都是在玩家同意提前结束时分掉奖池。chip chop 按纯筹码占比来分钱（偏袒大码量）；ICM deal 按每个玩家的 ICM 美元价值来分（对 short stack 更公平）。如果你是 short，就要求 ICM deal；如果你是 chip leader，chip chop 给你分得更多。

**Q. ICM 适用于现金局吗？**

A. 不适用。在现金局里每个筹码本来就等于它的美元面值，你随时可以 rebuy 或离桌，所以没什么要换算的。ICM 之所以存在，正是因为锦标赛的筹码没法按面值兑现。

**Q. 我什么时候该无视 ICM？**

A. 前期和中期、筹码深且盲注小的打法，以及争冠军的 heads-up——这些位置要么 pay jump 还很远，要么只剩两个奖金。在这些情况下你打 chip EV，专注于积累筹码。

**Q. 最常见的 ICM 错误有哪些？**

A. 主要有三个。第一，*过度*套用 ICM——在 pay jump 还很远时就一路弃牌"去 ladder up"，而不是积累筹码。第二，作为 bubble 附近的中等码量跟得太宽，而那里恰恰是你风险溢价最高、出局会失去已锁定奖金的地方。第三，当你是 short stack 时不先跑一遍数字就答应 chip chop（或当你是 leader 时答应 ICM deal）。ICM 是个后期工具：用得太早，或在 final table 上无视它，两头都在漏钱。

**Q. ICM 压力下拿 AJ 面对全压，需要多少权益才能跟？**

A. 比 chip EV 的盈亏平衡点更高。在 chip EV 里，一个像 40% 权益就能跟的边缘 all in，到了 ICM 下往往要 48-50% 才够——因为出局会让你失去已锁定的 pay-jump 奖金，而你赢来的筹码又值得比面值更少（这就是**风险溢价**）。所以拿 AJ 这种常被压制、翻牌前对上对手全压范围经常落后的边缘牌，在 bubble 或 final table 上很多本该是 chip-EV 跟注的位置，会翻转成 ICM 弃牌。你越短、pay jump 越大，需要的权益就越高。

**Q. ICM 是谁发明的？**

A. 落名次概率的数学，通常归功于 David Harville（源自 1970 年代的赛马研究），Mason Malmuth 把它用到了扑克锦标赛上——这就是"Malmuth–Harville"模型的由来。它成了给锦标赛码量估值、以及分掉 final table 奖池的标准方法。

---

## 要记住的 3 件事

1. **筹码不是钱。** 你只能赢一个冠军，所以 chip leader 值得比他的筹码占比更少，short stack 则值得更多。这一个差距，就是 ICM 的全部。
2. **后期，从 chip EV 切换到 $EV。** 逼近 pay jump 时，一次跟注需要额外的胜率（一份风险溢价）才能赚钱。中等码量会弃掉现金局里会 snap-call 的牌。
3. **分钱前先知道你的数字。** short stack 想要 ICM deal，大码量想要 chip chop——先跑一遍 [计算器](/calculator)。

从这儿出发，看看 ICM 压力如何嵌进更宽的 [锦标赛策略](/zh/blog/holdem-tournament)，或者回到 [扑克胜率](/zh/blog/holdem-equity) 和 [底池赔率](/zh/blog/holdem-pot-odds) 的基础。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克锦标赛策略</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">ICM 所属的那根支柱</div>
  </a>
  <a href="/zh/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">锦标赛 vs 现金局</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么 ICM 永远不适用于现金局</div>
  </a>
  <a href="/zh/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">扑克胜率讲清楚</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">chip EV 不过就是用筹码算的胜率</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">免费工具</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM 计算器</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">跑一遍你自己的码量和分钱</div>
  </a>
</div>
`.trim(),
};

export default POST;
