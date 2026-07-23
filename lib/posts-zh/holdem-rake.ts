import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "德州扑克的抽水（rake）是什么？牌局怎么赚你的钱，你到底交了多少",
  seoTitle: "悄悄吃掉你利润的那笔费用——德扑抽水到底是什么",
  desc: "抽水就是牌局从每个现金局底池里抽走的费用。这篇讲清底池抽水、time rake（计时费）、锦标赛费怎么算，你一个 session 实际交多少，以及 rakeback 又还给你多少。",
  tldr: "抽水就是牌局从每个底池里抽走的一小块钱，用来撑起这场牌局——通常是 2.5–10%，封顶几美元。大多数牌局在翻牌前所有人都弃牌时不抽（「no flop, no drop」）。它对低级别和短台牌手伤害最大，而 rakeback 会把其中一部分还给常客。",
  category: "glossary",
  date: "2026-07-04",
  updated: "2026-07-24",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "11 分钟",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "荷官把一小摞筹码从中间底池拨进绿色桌布上的抽水投币口里",
  tags: ["抽水", "德州扑克 抽水是什么", "德扑抽水讲解", "rakeback", "抽水封顶", "time rake", "锦标赛抽水", "德州扑克 抽水怎么算"],
  content: `
我花了整整一个月「打平」的 session，才搞明白我的钱到底流去哪了。我不是输给别的牌手——我在赢他们，只是赢得不多。我是输给了==每个我赢下的底池被牌局抽走的那一刀。==那笔悄悄的费用就叫 **抽水（rake）**，在你搞懂它之前，你可能在纸面上是个赢家，到了收银台却是个输家。

抽水，就是一间牌局一手牌都不打、却还能靠这场牌赚钱的方式。下面把它到底是什么、有哪几种收法、==g:你一个 session 实际交多少==的老实账算给你看，还有 rakeback 又是怎么把一部分抠回来的。正是这笔费用，决定了打赢小级别德扑到底有没有可能——它也是[德扑术语大全](/zh/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp")里一句话就能查到、却最烧钱、最不该理解错的词之一。

---

### 抽水一眼看懂

:::stripe
2.5–10% | 常见的底池抽水区间
$3–$6 | 现场常见的抽水封顶
No flop, no drop | 翻前全弃通常不抽水
20–40% | 常见的 rakeback 比例
:::

---

## 德州扑克的抽水（rake）是什么？

**抽水（rake / commission）就是牌局为了主办这场现金局而抽走的佣金。**因为扑克是牌手对牌手打的——牌局本身从不下注——所以抽水就是这间房、这家赌场、这个 App 真正赚钱的方式。它是给荷官、牌桌、筹码、安保的一笔服务费，一点一点从底池里刮出来。

抽水（rake）按底池比例抽成；部分牌房改收固定台费（table fee，按座位或按时段收），不看底池大小。

在现金局里，它通常直接从底池抽：中间那堆钱里的一小部分百分比，在赢家拿钱之前就投进桌上的一个口子里。锦标赛里则不一样——那笔费用一开始就打进了你的买入（下面细讲）。不管哪种，抽水都跟你从别的牌手身上赢的或输的钱是分开的，正因如此它才这么容易被忽略。这也是[现金局和锦标赛](/zh/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")之间最大的实操差别之一。

---

## 抽水怎么收？底池抽水、time rake、dead drop

![荷官在把剩下的筹码推给赢家之前，先从底池中间刮几个筹码进桌上的抽水口子](/images/holdem-rake-drop.webp "底池抽水：从底池里刮出一小部分百分比，在赢家拿钱之前投进口子里")

抽水不止一种收法。牌局怎么收钱，取决于级别和这间房，而这些差别很关键——下面这张对照表是任何一个竞品页面都没摊开讲的：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 类型 | 怎么收 | 常见金额 | 你会在哪儿见到 |
|:---|:---|:---:|:---|
| **底池抽水（按比例）** | 每个底池的 %，封顶为止 | 2.5–10%，封顶 $1–$6 | 大多数低/中级现金局、线上 |
| **time rake（计时费）** | 每人一笔固定费，每 30 分钟 | 约 $10–$15 每小时 | 高级别现场（$10/$20+） |
| **dead drop** | 按钮位每手付一笔固定抽水 | 每手固定 | 部分现场牌局 |
| **锦标赛费** | 一开始就加进买入 | 约买入的 5–20% | 每一场锦标赛 |

</div>

底池抽水实际怎么刮，有几条规矩管着：

- **No flop, no drop（不翻牌，不抽水）。**大多数牌局里，如果这手牌在翻牌前就结束了——大家对一个翻前加注全弃了——牌局**一分抽水都不收**。（不是绝对：少数网站，尤其是 GGPoker，确实会抽一些翻前底池，所以要看你这间房的规矩。）
- **抽水封顶。**牌局绝不会在一个巨大底池上按满百分比抽——到一个上限就停，现场常见 **$3–$6**、线上 **$1–$3**。封顶通常随级别放大，而且发到桌的人越少往往越缩水（一个单挑底池可能封顶在 $1）。
- **用 time rake 代替底池抽水。**在更高级别，牌局常常不抽底池，改成收一笔固定费——比如每人每小时 $10–$15，每半小时收一次。这对赢大底池的牌手有利，因为一个 $2,000 的底池不再被刮了。
- **dead drop。**一种不太常见的收法，只有按钮位那个牌手每手付一笔固定抽水，在发牌之前收——设计目的是让赢大底池的人不会比别人被多抽。

---

## 你实际交了多少抽水？

![桌布上一个不大的筹码底池，已经有几美元被拨到一边当抽水，展示了单单一手牌悄悄花掉的成本](/images/holdem-rake-lowstakes.webp "在低级别牌局里，封顶几乎不随底池变大而动，所以小底池按比例被抽得最狠")

这里就是改变了我看待这个游戏方式的部分。那个百分比听起来微不足道——5%，封顶就几块钱——可你几乎每个赢下的底池都要交，一交就是好几个小时。

**一个现场 $1/$2 的局。**10% 抽水封顶 $5、每小时大约发 30 手牌，多数有争夺的底池都到或接近封顶。单单一张忙碌的牌桌，所有牌手加起来，一小时就能往抽水口投**$100 以上**。这笔钱直接从大家的总赢利里出——正因如此，一桌水平大致相当的牌手，才会慢慢把筹码流失给牌局。

**低级别的「抽水陷阱」。**这就是每个新手都该听到的那句重点。因为你往低级别走时封顶几乎不跟着降，你打得*越低*，抽水按比例咬得*越狠*。拿线上 NL50 举个算过的例子（仅作演示，而且会随你打多少手而波动）：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 同一个牌手，同一个局 | 交的抽水 | 结果 |
|:---|:---:|:---|
| 封顶 **$2** 的房 | 约 5 bb/100 | +8 bb/100 的赢率仍然是**赢家（+3）** |
| 封顶 **$4** 的房 | 约 8–9 bb/100 | +8 bb/100 变成**输家（−1）** |

</div>

同样的技术，对场上同样的优势——单单抽水一项，就是赢和输之间的差别。这就是为什么认真的低级别 grinder 会对抽水结构斤斤计较，也是为什么[底池赔率](/zh/blog/holdem-pot-odds)和赢率永远得在牌局抽完那一刀*之后*再来看。

---

## 底池抽 5% ≠ 你只亏 5%

很多人一看「才抽 5%」就放心了，这里恰恰藏着最反直觉的一刀。抽水是按**底池**算的，可你在意的是**利润**——两者根本不是一回事。

举个具体的：一个 $60 的底池被抽走 $6，占底池 10% 听着不多。但你打这手牌，真正装进口袋的净利润可能就 $30 上下（你投进去的那份不算赢来的钱）——那 $6 抽水，咬掉的是你**净利的 20%**。底池越小、你的边际优势越薄，这个倍数放得越大。这也是为什么把抽水单纯理解成「底池的百分之几」会严重低估它：真正被吃掉的，是你赢率里那层最薄、最值钱的利润。所以每次估自己打不打得赢，都要拿抽水去比**净赢利**，而不是比底池。

---

## 什么是 rakeback（返水）？

既然牌局是靠你打出的手数量来赚钱的，大多数房会返一部分给你、好让你继续打。**rakeback 就是把你个人交的抽水按一个百分比还给你**——通常通过积分、返现或忠诚度计划，按周或按月发。一个 30% 的 rakeback，说白了就是你每交 1 美元抽水就拿回 30 美分。

它有两种算法：

:::compare
Contributed（按投入） | Dealt（按发牌）
基于你**投过钱**的那些底池的抽水——现代标准算法 | 在被发进那个被抽水底池的**每个人**之间平分，不管有没有投钱——现在很少见
:::

对一个休闲牌手来说，rakeback 是个小福利。对一个高手数的常客来说它巨大无比：一个 20% 和一个 40% 的返水之间，一年可能差**好几万美元**，而对很多打平的 grinder 来说，rakeback *就是*他们的利润。它实际上拉低了你真正的抽水，所以在挑去哪儿打之前值得先看看。只是要留个心眼：网上很多 rakeback 的攻略都是联盟推广驱动的——对那些「点这里注册」的页面，要用你对付任何一句推销词的那份怀疑去看待。

---

## 锦标赛有抽水吗？

底池抽水那种没有——但你照样要交一笔费用，而且它就明晃晃摆在眼前。一个锦标赛买入分成两部分，用一个 **「+」号**标出来：

:::pull
一场 **$100 + $9** 的锦标赛，意思是 $100 进奖池、**$9 是牌局的费用。**
:::

那笔费用——也叫 **juice** 或 **vig**——就是锦标赛版的抽水。它通常是**买入的 5–20%**，而且是固定的：不管你第一个出局还是拿下整场冠军，都要交。买入越低，费用按比例越高（一个 $3 + $0.30 的 sit-and-go 就是 10%），而一条常见的经验法则是，快节奏的 **turbo 赛制费用应低于约 13%**，才能在长期上还打得赢。既然锦标赛的结构跟现金局完全不同，你为打牌付费的方式也就不一样——这个区别值得跟[锦标赛 vs 现金局](/zh/blog/holdem-tournament-vs-cash-game)的基础一起搞懂。

---

## 线上 vs 现场抽水：哪个更高？

这是个实打实的取舍，而且答案让人意外：

- **现场抽水**往往是**更高的百分比（常常 10%）加上更高的封顶（$4–$6）**——但你每小时只打约 30 手，所以你交它的次数更少。
- **线上抽水**通常是**更低的百分比（3–5%）加上更小的封顶（$1–$3）**——但你多台一起打，一小时可能看 250+ 手，所以一个走量的 grinder 每小时交的抽水，反而可能比现场牌手*更多*，哪怕费率更低。

这一课就是：永远别只看百分比来判断抽水。真正要紧的是那个百分比**乘以你交它的频率。**一个你四开的「便宜」5% 线上局，花掉你的钱可能比一个「贵」的 10% 现场局还多——这也正是为什么在线上，rakeback 和选桌更加要紧。

---

:::readnext[继续阅读]
/zh/blog/holdem-straddle | 德州扑克的 straddle 是什么？ | /images/holdem-straddle-hero.webp
/zh/blog/holdem-tournament-vs-cash-game | 锦标赛 vs 现金局 | /images/tournament-table-action.webp
:::

## FAQ

**Q. 德州扑克里的抽水（rake）是什么？**

A. 抽水就是牌局为主办一场现金局而抽走的费用——通常是每个底池的一小部分百分比（2.5–10%），到一个封顶上限为止。因为牌局本身不打牌，抽水就是它的主要收入来源。锦标赛则改为把一笔等价的费用打进买入里。

**Q. 抽水怎么算？**

A. 在大多数现金局里，它是底池的一个百分比，在赢家拿钱之前抽走，封顶为几美元。百分比和封顶因房、因级别而异，而且发到桌的人越少封顶往往越缩。在更高级别，牌局可能改为每人收一笔固定的计时费（time rake）。

**Q. 抽水是谁付的？**

A. 抽水是直接从底池里抽走的，所以纸面上是赢下这手牌的人在付——赢家拿回的那摞筹码，会按抽水金额少一块。但实际上，凡是往那个底池里投过筹码的人都出了一份，整桌人一个 session 下来共同分摊了这笔成本。锦标赛里则毫不含糊：每个报名的人都平摊一笔打进买入的费用，不管你是赢了还是第一个出局。

**Q. 翻牌前所有人都弃牌，还要交抽水吗？**

A. 通常不用。大多数房遵循「no flop, no drop」——如果这手牌在翻前就结束，不抽水。不过这不是绝对：少数网站（尤其是 GGPoker）会抽一些翻前底池，所以值得确认一下你这间房的规矩。

**Q. 现场 $1/$2 的局抽多少水？**

A. 常见是底池的 10%、封顶约 $5。多数有争夺的底池都会到封顶，所以单单一张忙碌的牌桌，所有人加起来一小时就能投 $100 甚至更多。正是这笔费用，让一桌水平相当的牌手随时间慢慢把筹码输给牌局。

**Q. 什么是 rakeback？**

A. rakeback 把你个人交的抽水按一个百分比还给你——常常是 20–40%——通过积分、返现或忠诚度计划。它实际上拉低了你真正的抽水。对休闲牌手是个小福利；对高手数的常客，它可能就是输的一年和赢的一年之间的差别。

**Q. 怎么少付点抽水？**

A. 在一个抽水的局里你没法完全躲开抽水，但你能把它压小。尽量拿到最好的 rakeback；挑封顶对牌手友好的房；往上打级别，那里一个固定封顶占每个底池的比例更小。多打大底池、少打一堆到封顶的小底池，避开封顶几乎不降的极短台，偏向高级别的计时费（time rake）局，这些都能拉低你的实际抽水。至于完全不抽水的家庭局，那是最便宜的扑克了。

**Q. 抽水合法吗？收抽水在扑克里为什么会犯法？**

A. 对一间有牌照的牌局、赌场或受监管的线上网站来说，收抽水完全合法——收一笔费用来主办牌局本来就是它们整个商业模式。在美国大多数州（以及很多别的地方）犯法的，是*私人*局或家庭局的主办者为了个人牟利去抽水：抽走一份，就把一场朋友之间的牌变成了在经营一门无牌照的赌博生意，真正越线的是这个——而不是打扑克本身。这也是为什么合法的家庭局会分摊成本、却从不抽底池，也正是电影《茉莉牌局》（*Molly's Game*）背后的那个问题：主办者开始抽一个百分比，就失去了一场业余牌局本该有的那层保护。

**Q. 扑克锦标赛有抽水吗？**

A. 有，但不是从底池抽。那笔费用加在你的买入上，用「+」标出来——一场 $100 + $9 的锦标赛，$100 进奖池、$9 归牌局。那笔费用（「juice」或「vig」）通常是买入的 5–20%，不管你最后打成什么样都要交。

**Q. 抽水怎么影响你的赢率？**

A. 影响很大——尤其在低级别和短台，那里封顶不随级别一起降下来。抽水能把一个小赢家变成输家：同一个 +8 bb/100 的牌手，仅仅换到一个抽水封顶更高的房，就可能变成小幅亏损。永远要在抽完水之后再来量你的赢率。

**Q. 线上还是现场的扑克抽水更高？**

A. 现场抽水是更高的百分比加更高的封顶，但你每小时打的手数少得多。线上抽水是更低的百分比加更小的封顶，但多台一起打意味着你在多得多的手上交它——所以一个走量的 grinder 在线上每小时交的抽水反而可能更多。判断抽水要看费率乘以频率，而不是只看费率。

---

## 要记住的 3 件事

1. **抽水是牌局主办这场牌的抽成**——通常是每个底池的 2.5–10%，到一个小封顶为止，而且它跟你从对手身上赢的或输的钱是分开的。
2. **它对低级别伤害最大。**你往下走时封顶几乎不动，所以按比例说你在最底层交的抽水最多——这就是让微级别那么难打的「抽水陷阱」。
3. **rakeback 和结构很关键。**拿回 20–40% 的抽水、并选那些对牌手友好封顶的房，能翻转你的长期结果——一切都要在抽完水*之后*再来衡量。

现在你能看见牌局抽的那一刀了，你在别处到处读到的那些数字也就更说得通了：你的[底池赔率](/zh/blog/holdem-pot-odds)、你的赢率，以及为什么一个把底池吹大的 [straddle](/zh/blog/holdem-straddle) 也在悄悄地喂着抽水。扑克是打得赢的——但前提是，你赢别的牌手，得赢得*比*牌局抽走的*更多*。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">锦标赛 vs 现金局</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么这两种收你钱的方式完全不同</div>
  </a>
  <a href="/zh/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">术语</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">什么是 straddle？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">把底池吹大的那个额外盲注——也顺带喂大了抽水</div>
  </a>
  <a href="/zh/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">赔率与数学</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">底池赔率怎么算</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">在牌局抽完那一刀之后再来看你的底池</div>
  </a>
  <a href="/zh/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">扑克锦标赛怎么运作</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">买入里那笔费用究竟去了哪</div>
  </a>
</div>
`.trim(),
};

export default POST;
