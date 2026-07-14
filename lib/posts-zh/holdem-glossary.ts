import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "德州扑克术语表：牌桌上你会听到的每个扑克黑话",
  seoTitle: "从 nuts 到 fish——一份看得懂的德扑术语表",
  desc: "牌桌上你会听到的每个德扑术语，按情境分组一次讲清楚：下注动作、位置、牌型和牌面、玩家类型、钱，还有大家老是搞混的那几组词——过牌 vs 跟注、set vs trips、cooler vs bad beat。",
  tldr: "这是一份大白话的德州扑克术语表，收的都是牌桌上真会碰到的词，按你怎么遇到它们来分组——下注动作、位置、牌型和牌面、玩家类型、钱，以及牌桌情境。先看下面那组「最容易搞混」的词（过牌 vs 跟注、set vs trips、cooler vs bad beat），再按分类随便翻。有深入指南的术语会直接给你链接。",
  category: "glossary",
  date: "2026-07-05",
  updated: "2026-07-05",
  keepImagesInBody: true,
  readTime: "12 分钟",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "一张德州扑克桌，绿色桌布上摆着筹码、庄家按钮和展开的公共牌，代表扑克这门语言",
  tags: ["扑克术语", "德扑术语表", "德州扑克术语", "扑克黑话", "扑克名词", "扑克词汇", "德扑黑话", "扑克 是什么意思"],
  content: `
我第一次坐进现场局的时候，整桌人简直像在说另一种语言。有人「枪口位」，另一个人「3bet 了关煞位」，荷官问我要不要「run it twice（分两次发）」，等我拿着一对 K 输牌，别人还告诉我「这都算不上 bad beat，只是个 [cooler](/zh/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")」。我像听懂了一样点头。其实我一句都没懂。

扑克有它自己的一套词，懂这套词能帮你两件事：让你看起来不像个 [fish](/zh/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp")，也让你真正跟得上那些能帮你赢钱的策略。这份术语表收的是德州扑克牌桌上真会冒出来的词——按 ==g:你实际会怎么遇到它们== 来分组，而不是一股脑塞进一堵从 A 到 Z 的大墙里。先看大家最爱搞混的那几个词，再按你需要的分类翻。凡是有完整指南的术语，你都能找到一条直达链接。

---

### 术语表速览

:::stripe
6 | 个分类，按你怎么遇到它们分组
80+ | 个术语，大白话讲清楚
8 | 组「最容易搞混」的词，先给你捋顺
→ | 关键术语都链到更深的指南
:::

---

## 大家最容易搞混的那些词

如果你只想先捋清十来个词，就先捋这些——它们是牌桌上引起最多困惑（也造成最贵错误）的那几个：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 这些老被搞混 | 区别在哪 |
|:---|:---|
| **过牌 vs 跟注（Check vs Call）** | 过牌 **不投一分筹码**（只有当前没有下注时才行）；跟注是 **跟上** 一个已经存在的下注。 |
| **盲注 vs 前注（Blind vs Ante）** | 盲注是 **按位置** 收的强制下注（SB/BB）；前注是 **每个人** 都要交、用来起底池的。 |
| **set vs trips** | 两者都是三条——**set** 用的是一对口袋对子；**trips** 用的是一张手牌 + 牌面上的一对。 |
| **cooler vs bad beat** | [cooler](/zh/blog/holdem-cooler) = 你一路落后又弃不掉；[bad beat](/zh/blog/holdem-bad-beat) = 你本来领先却被对手翻盘。 |
| **价值下注 vs 诈唬（Value bet vs Bluff）** | 价值下注想 **让更差的牌跟你**；诈唬想 **让更好的牌弃掉**。 |
| **底池赔率 vs 隐含赔率（Pot odds vs Implied odds）** | [底池赔率](/zh/blog/holdem-pot-odds) 只算 **现在池里** 的筹码；隐含赔率还加上你 **后面会赢到** 的部分。 |
| **VPIP vs PFR** | VPIP = 你多常 **入池玩牌**；PFR = 你多常 **加注**。PFR 永远不可能超过 VPIP。 |
| **3bet 的数法** | 盲注是第 1 次下注、开池加注是第 2 次，所以 **再加注才是 3bet**（不是第一次加注）。 |

</div>

---

![一张暗色、贴合品牌的视觉地图，把这份术语表的六大分类列出来——下注动作、位置、牌型、玩家类型、钱、情境](/images/holdem-glossary-categories.webp "这份术语表分成的六组——按你所处的情境来翻，别只按字母顺序找")

## 下注动作

轮到你时你手上能做的一切动作。要是你是全新的新手，先从 [下注顺序](/zh/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp") 看起。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **过牌（Check）** | 不下注就把行动权让出去——只有当前这轮还没人下注时才可以过。 |
| **下注（Bet）** | 在一轮里第一个把筹码投进底池。 |
| **跟注（Call）** | 跟上当前的下注以留在这手牌里。 |
| **加注（Raise）** | 提高当前的下注额，逼别人跟更多或弃牌。 |
| **弃牌（Fold）** | 放弃你的牌，也放弃对底池的一切主张。 |
| **all in（全下）** | 把你全部筹码押进去；你只能赢下你所覆盖的那部分底池（见 [边池](/zh/blog/holdem-all-in-rules)）。 |
| **平跟入池（Limp）** | 翻前只跟大盲、不加注就入池——通常是一种偏弱、被动的打法。 |
| **开池（Open / 开池加注）** | 第一个用加注入池的玩家。 |
| **3bet** | 一次开池之后的再加注（第 3 次下注，把盲注算作第 1 次）。 |
| **4bet** | 对一次 3bet 的再加注。 |
| **c-bet** | 翻前加注的那个人在翻牌圈打出的「持续下注」。 |
| **领打下注（Donk bet）** | 无位置时朝上一条街的进攻方主动下注（曾被视为失误，如今是一种低频工具）。 |
| **价值下注（Value bet）** | 用一手强牌下注，指望被更差的牌跟。 |
| **诈唬 / 半诈唬（Bluff / Semi-bluff）** | 诈唬是用弱牌下注逼走更好的牌；半诈唬则是用一手还能变强的听牌来做同样的事。 |
| **过牌加注（Check-raise）** | 先过牌，等对手下注后再加注——一条强力、有欺骗性的线（现代牌房都合法）。 |
| **最小加注（Min-raise）** | 规则允许的最小加注。 |
| **拉线下注（String bet）** | 一次违规、没声明的回手取筹码；被判为跟注，而非加注。 |
| **推 / all in（Jam / Shove）** | 全下的意思。 |
| **秒跟（Snap call）** | 一次毫不犹豫、即刻的跟注。 |
| **英雄跟注（Hero call）** | 用一手弱牌跟注，因为你读出对手是在诈唬。 |

</div>

---

## 位置

你坐在哪儿，决定了你什么时候行动——而最后行动是一种永久的优势。至于怎么真正用好它，见 [位置打法](/zh/blog/holdem-position-play)。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **按钮位（Button / BTN）** | 庄家位；翻后 **最后** 行动——全桌最好的座位。 |
| **小盲（Small blind / SB）** | 按钮位左边的强制下注；翻后第一个行动（翻后最差的座位）。 |
| **大盲（Big blind / BB）** | 两个盲注中较大的那个；级别就是按盲注大小命名的（$1/$2），而一个大盲是衡量筹码量的标准单位。 |
| **枪口位（UTG）** | 翻前第一个行动——需要最紧的开池范围。 |
| **关煞位（Cutoff / CO）** | 按钮位右边；第二好的座位，非常适合偷盲。 |
| **劫机位（Hijack / HJ）** | 按钮位右边第二个座位；后位的起点。 |
| **Lojack（LJ）** | 劫机位右边；中后位（叫法会随桌上人数变动）。 |
| **前位 / 中位 / 后位（Early / Middle / Late）** | 按你多早行动来分组——前位 = 最紧，后位 = 最宽也最赚钱。 |
| **有位置 / 无位置（In / Out of position）** | 你在对手 *之后* 行动就是 *有位置*，*先于* 对手行动就是 *无位置*。 |

</div>

想看完整的座位图，见 [牌桌位置指南](/zh/blog/holdem-positions "thumb:/images/holdem-button-position-hero.webp")。

---

## 牌型与牌面

![一张信息图：金色庄家按钮加两张盖着的底牌，绿色桌布上是 K♦ 7♣ 2♠ 的翻牌](/images/holdem-button-dealer-board.webp "牌面和你的底牌组合成你最好的五张牌——大多数扑克词汇讲的正是这个怎么组")

牌本身，以及你用它们组成什么。对各条街的流程还不熟？先从 [游戏顺序](/zh/blog/holdem-game-order) 看起。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **底牌（Hole cards）** | 你自己那两张盖着的私牌。 |
| **公共牌（Community cards）** | 五张所有人共用的、翻开的牌。 |
| **翻牌 / 转牌 / 河牌（Flop / Turn / River）** | 头三张共用牌 / 第四张 / 第五张也是最后一张。 |
| **nuts（坚果牌）** | 在当前牌面下能拿到的最强牌（后面的街可能会改变它）。 |
| **踢脚（Kicker）** | 一张用来在牌力相同的牌之间分胜负的边张（见 [分胜负规则](/zh/blog/holdem-tiebreak-rules)）。 |
| **口袋对子（Pocket pair）** | 两张点数相同的底牌。 |
| **超对（Overpair）** | 一对比牌面上每一张牌都大的口袋对子。 |
| **顶对（Top pair）** | 用一张底牌配上牌面最大的那张牌成对。 |
| **set（暗三条）** | 用一对 **口袋对子** + 一张公共牌组成的三条（隐蔽性极好）。 |
| **trips（明三条）** | 用 **一张底牌** + 牌面上已有的一对组成的三条（踢脚控制较弱）。 |
| **两对（Two pair）** | 两对不同的对子。 |
| **成手牌（Made hand）** | 已经成型的一手牌，与听牌相对。 |
| **听牌（Draw）** | 还需要变强的一手牌——比如 **同花听牌**（差一张凑同花）或顺子听牌。 |
| **卡顺听牌（Gutshot）** | 缺中间一张点数的内听顺子（4 张 [outs](/zh/blog/holdem-outs)）。 |
| **两头顺听牌（Open-ender）** | 两端都能补上的开放式顺子听牌（8 张 outs）。 |
| **后门听牌（Backdoor）** | 需要 **连着两张** 牌才能凑成的听牌（转牌 *和* 河牌都得来）。 |
| **超牌（Overcard）** | 一张比牌面都大的牌。 |
| **同花连张（Suited connectors）** | 两张连续的同花色牌（比如 8♥9♥）。 |
| **Broadway** | 10-J-Q-K-A 的顺子，最大的顺子。 |
| **轮子（The wheel）** | A-2-3-4-5 的顺子，**最小** 的顺子（A 当 1 用）。 |
| **cooler** | 一手大牌无失误地输给了更大的牌——[完整指南](/zh/blog/holdem-cooler)。 |
| **bad beat** | 作为大热门却被对手一张幸运牌翻盘——[完整指南](/zh/blog/holdem-bad-beat)。 |

</div>

还在学谁大谁小？[牌型大小指南](/zh/blog/holdem-hand-rankings) 里有完整的顺序。

---

## 玩家类型与黑话

![一张俯视信息图：一张德扑酒馆桌，牌面是 K♦ 7♣ 2♠ 9♥ 3♦，还有筹码和庄家按钮](/images/holdem-pub-players-table.webp "每张桌子都是各种类型的混合——学会这些黑话，你就知道该盯谁、该躲谁")

给桌布对面那些人起的一堆外号。完整的拆解在 [fish 指南](/zh/blog/holdem-fish)。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **fish（鱼）** | 一个弱、长期输钱的娱乐玩家——全桌的利润来源。 |
| **shark（鲨鱼）** | 一个强、长期赢钱的玩家，专门捕食更弱的人。 |
| **whale（鲸鱼）** | 大级别里一个有钱但打得很弱的娱乐玩家——「一条口袋很深的鱼」。 |
| **nit** | 一个极紧的玩家，只玩顶级牌。 |
| **donkey（驴 / donk）** | 骂人的词，指一个差劲、没水平的玩家。 |
| **calling station（跟注站）** | 一个被动玩家，跟得太多、几乎不弃牌也不加注。 |
| **reg（常客）** | 一个「regular」——某个级别上常来、通常有水平的玩家。 |
| **grinder（磨谷者）** | 靠稳定的牌量和纪律赚钱的玩家。 |
| **LAG / TAG** | 松凶 / 紧凶——两种赢钱的激进风格。 |
| **maniac（疯子）** | 一个超激进的玩家，加注和诈唬都毫无节制。 |
| **mark（肥羊）** | 全桌想从他身上赢钱的那个弱玩家。 |

</div>

---

## 钱与牌局

筹码、级别，以及两种赛制。最大的分岔是 [现金局 vs 锦标赛](/zh/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **盲注（Blinds）** | 用来开启行动的强制 SB/BB 下注——也是级别档位的叫法（[盲注详解](/zh/blog/holdem-blind-meaning)）。 |
| **前注（Ante）** | 每个人都要交的一小笔强制下注，用来起底池，跟盲注分开算。 |
| **底池（Pot）** | 正在争夺的全部筹码。 |
| **边池（Side pot）** | 当一名玩家 all in、其余人继续下注时另建的一个独立底池。 |
| **筹码量（Stack）** | 一名玩家面前的筹码。 |
| **bankroll（资金）** | 你为打扑克整体留出的钱——不是桌上的筹码。 |
| **买入（Buy-in）** | 进入一场牌局或锦标赛所需的金额。 |
| **抽水（Rake）** | 牌房从每个底池里抽的一份——[完整指南](/zh/blog/holdem-rake)。 |
| **返水（Rakeback）** | 把你交过的抽水退回一部分的返利。 |
| **straddle** | 一个可选的盲注（通常是 2 倍 BB），花钱买翻前最后行动权——[完整指南](/zh/blog/holdem-straddle)。 |
| **现金局（Cash game）** | 实值筹码，随时入座离场，盲注固定。 |
| **锦标赛（Tournament）** | 固定买入、盲注递增，一直打到你出局或夺冠。 |
| **无重买赛（Freezeout）** | 一种不能重买的锦标赛——出局就是出局。 |
| **赏金赛 / 淘汰赛（Bounty / Knockout）** | 每淘汰一名玩家就给一份奖金的锦标赛。 |
| **Sit & Go（SNG）** | 一坐满就开打的小型锦标赛。 |
| **MTT** | 一种多桌锦标赛，随着玩家出局会合并桌子。 |
| **ICM** | 独立筹码模型（Independent Chip Model）——在临近奖金跳档时把锦标赛筹码换算成真钱权益。 |
| **bad beat 大奖池（Bad beat jackpot）** | 当一手极强的牌输掉时派发的一份彩金——[怎么运作](/zh/blog/holdem-bad-beat)。 |

</div>

---

## 情境、数据与礼仪

用来描述正在发生什么的词——以及这期间该怎么表现。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 术语 | 意思 |
|:---|:---|
| **摊牌（Showdown）** | 最后一注之后亮牌决定赢家（[摊牌规则](/zh/blog/holdem-showdown-rules)）。 |
| **盖牌（Muck）** | 把一手牌盖着扔掉。 |
| **平分 / 分池（Chop / Split pot）** | 当牌力打平时把底池分掉（[分池](/zh/blog/holdem-split-pot-rules)）。 |
| **slow roll** | 故意拖延亮出赢牌来挑衅对手——一种严重的礼仪失当。 |
| **上头（Tilt）** | 被情绪带偏的糟糕打法，通常发生在输牌之后。 |
| **破绽（Tell）** | 一个泄露手牌信息的身体或行为线索。 |
| **底池赔率（Pot odds）** | 底池与一次跟注成本的比值——[怎么计算](/zh/blog/holdem-pot-odds)。 |
| **隐含赔率（Implied odds）** | 把你预期在后面几条街能赢到的筹码也算进去的底池赔率。 |
| **胜率 / 权益（Equity）** | 你此刻在底池里占的百分比份额（[概率指南](/zh/blog/holdem-probability)）。 |
| **EV（期望值）** | 一个决定长期平均下来的结果；+EV 长期会赢。 |
| **VPIP** | 一名玩家翻前主动投钱入池的频率——那个松 / 紧的数据。 |
| **PFR** | 一名玩家翻前加注的频率——那个激进度的数据（永远不会高于 VPIP）。 |
| **GTO** | 博弈论最优（Game Theory Optimal）——来自求解器的一套平衡、不可被剥削的策略。 |
| **range（范围）** | 一名玩家在某个局面下可能拿着的全部牌的集合；高手想的是范围，而不是单一的牌。 |
| **cold deck（冷牌）** | 一次倒霉的发牌，制造出一个 cooler（原指出千者事先码好的牌）。 |
| **「别敲玻璃缸（Don't tap the glass）」** | 别去批评弱玩家——你会把那些你正赚钱的人吓跑。 |
| **run it twice（分两次发）** | all in 的玩家把剩下的牌面发两次，每次争一半底池，用来降低波动。 |

</div>

---

:::readnext[继续阅读]
/zh/blog/holdem-cooler | cooler vs bad beat，讲清楚 | /images/holdem-cooler-hero.webp
/zh/blog/holdem-fish | 扑克里的 fish 是什么？ | /images/holdem-fish-hero.webp
:::

## FAQ

**Q. 每个新手都该知道的最常见扑克术语有哪些？**

A. 最核心的是下注动作（过牌、下注、跟注、加注、弃牌、all in）、各条街（翻牌、转牌、河牌）、各个位置（按钮位、小盲、大盲、枪口位），再加上一小把牌型术语（nuts、踢脚、set、顶对）。把上面那组「最容易搞混」的词学会——尤其是过牌 vs 跟注、set vs trips——你几乎能听懂任何一桌的对话。

**Q. 扑克里的 UTG（枪口位）是什么意思？**

A. UTG 是紧挨着大盲左边的那个座位，所以那名玩家在翻牌前第一个行动。因为所有人都在他之后、手握更多信息才行动，UTG 是最紧的位置——你在那儿应该只开最少、最强的牌。

**Q. 过牌和跟注有什么区别？**

A. 过牌是不投任何筹码就把行动权让出去，而且只有当这一轮还没人下注时才允许。跟注是跟上某人已经做出的下注。过牌是免费的；跟注要花掉你当前下注那么多的钱。把这两个搞混，是新手最常犯的头号错误。

**Q. set 和 trips 有什么区别？**

A. 两者都是三条、牌力也完全相同，但组成方式不一样。set 是一对口袋对子在牌面上撞上一张相配的牌（你拿 7-7，来了一张 7）。trips 是你的一张底牌配上牌面上已有的一对（你拿 A-7，而牌面上是 7-7）。set 更隐蔽、踢脚控制也更好，所以通常赢得更多钱。

**Q. cooler 和 bad beat 有什么区别？**

A. 在 bad beat 里，钱投进去时你本是热门，却被一张幸运牌翻盘。在 cooler 里，你一路落后、手里的牌又强到弃不掉，而且对手根本不需要什么幸运牌——那手更大的牌从一开始就领先。快速判断法：如果你的对手必须 *变强* 才能赢，那是 bad beat；如果不用，那就是 cooler。

**Q. 扑克里的 3bet 是什么，为什么第一次加注不叫「1bet」？**

A. 3bet 是翻牌前的第一次再加注。数的时候把盲注也算进去：大盲被当作第 1 次下注，开池加注是第 2 次下注（「2bet」），所以下一次加注就是第三次——3bet。盖在它之上的再加注是 4bet。它让新手困惑，是因为「第一次加注」在这个序列里其实已经是第 2 次下注了。

**Q. 扑克里的「nuts」是什么意思？**

A. nuts 是在那一刻的牌面下能拿到的最强牌。如果你拿着 nuts，此刻没有任何一手牌能打过你——不过后面来一张牌可能会改变 nuts 是什么。「second nuts（次坚果）」就是次好的那手牌。

**Q. 扑克数据里的 VPIP 和 PFR 是什么意思？**

A. VPIP（主动投钱入池，Voluntarily Put money In Pot）是一名玩家选择在翻前玩牌的手数占比——衡量他有多松或多紧。PFR（翻前加注，Pre-Flop Raise）是他翻前加注的占比——衡量激进度。PFR 永远不可能高于 VPIP，两者差距很大就标志着一个被动、爱跟注的玩家。

---

## 接下来看哪儿

这份术语表是张地图；真正的学习在它链向的那些指南里。给你几个不错的起点：

- **最最基础：**[怎么玩德州扑克](/zh/blog/texas-holdem-rules-for-beginners) 和 [下注顺序](/zh/blog/holdem-betting-actions)。
- **牌型：**[谁大谁小](/zh/blog/holdem-hand-rankings) 和 [分胜负规则](/zh/blog/holdem-tiebreak-rules)。
- **数学：**[底池赔率](/zh/blog/holdem-pot-odds)、[outs](/zh/blog/holdem-outs) 和 [概率](/zh/blog/holdem-probability)。
- **黑话，深入版：**[fish](/zh/blog/holdem-fish)、[cooler](/zh/blog/holdem-cooler)、[bad beat](/zh/blog/holdem-bad-beat)、[straddle](/zh/blog/holdem-straddle) 和 [抽水](/zh/blog/holdem-rake)。

把这一页收藏起来，每当一个词把你绊住就回来翻。会说这门语言，牌局就不再像是发生在你身上的事——而开始像是你 *对着* 牌桌做的事。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">术语表</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">fish 是什么？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">解读各种玩家类型</div>
  </a>
  <a href="/zh/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">术语表</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">cooler vs bad beat</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">大家都会混淆的两种输法</div>
  </a>
  <a href="/zh/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">规则</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">下注动作</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">过牌、下注、跟注、加注、弃牌</div>
  </a>
  <a href="/zh/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">谁大谁小</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">完整的牌型大小顺序</div>
  </a>
</div>
`.trim(),
};

export default POST;
