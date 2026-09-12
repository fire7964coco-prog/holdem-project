import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bad-beat",
  title: "什么是 bad beat？当你是大热门却还是输了",
  seoTitle: "你有 80% 胜率——却输了。什么是 bad beat？",
  desc: "bad beat（爆冷输牌）就是你作为大热门却因对手走运而输牌。它跟 cooler 有什么不同、bad beat jackpot 赔多少，以及为什么它其实对你是好事。",
  tldr: "bad beat（爆冷输牌／走背运）就是你作为大热门——通常 80% 或以上——把钱推进去，却因对手摸到一张幸运牌「suck out」逆袭你而输掉。跟 cooler 不同，你是全程领先的；只是这副牌在最后一刻背叛了你。它很扎心，但 bad beat 其实是个信号：说明你正在一个有利可图的牌局里。",
  category: "glossary",
  date: "2026-07-05",
  updated: "2026-09-12",
  masterUpdated: "2026-09-12",
  keepImagesInBody: true,
  readTime: "11 分钟",
  emoji: "💔",
  image: "/images/holdem-bad-beat-hero.webp",
  imageAlt: "一名牌手在输掉一个自己本是大热门的大底池后双手抱头懊恼，筹码堆在绿色桌布上",
  tags: ["德州扑克 bad beat 意思", "什么是 bad beat", "bad beat jackpot", "bad beat jackpot 意思", "bad beat jackpot 概率", "怎么面对 bad beat"],
  content: `
那一手到现在还扎心：我拿着一对 A，全下对上一个用一对 5 跟注的对手，然后眼睁睁看着牌桌上仅剩两张 5 中的一张砸在了 river 河牌上。我什么都做对了。我的钱推进去时是超过 4:1 的热门，可我还是把整摞筹码输给了 ==这副牌里唯一能击败我的两张牌之一==。这就是 bad beat（爆冷输牌／走背运），只要你打扑克打得够久，它就会发生在你身上成千上万次。

**bad beat** 就是你作为统计上的大热门把筹码推进去，却还是输了，因为你的对手摸到一张幸运牌对你 ==g:suck out（逆袭）== 了。关键词是*热门*——钱推进去时你是领先的，只有一张几乎不可能出现的牌才翻转了结果。它是整个 [扑克术语表](/zh/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp") 里被滥用得最厉害的词之一，所以下面就讲清楚到底什么才算 bad beat、它跟 [cooler](/zh/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp") 有什么区别、「bad beat jackpot」赔多少，以及每个赢家最终都会学到的那个反直觉的真相：bad beat 其实对你是*好事*。

---

### 一眼看懂 bad beat

:::stripe
全程领先 | 钱推进去时你所处的位置
80%+ | 通常要多大的热门才算
suckout 逆袭 | 那张翻转局面的幸运牌
其实是好事 | 它对你长期盈利意味着什么
:::

---

## 扑克里的 bad beat 是什么？

> **快速回答**
> bad beat 就是这样一手牌：筹码推进去时你是很强的统计热门，之后却被一张几乎不该来的牌反超。判断看两点：钱进池时你领先，而且对手靠后面的牌翻了盘——两点齐了才算，至于「多大才够」，见下一节的门槛。

这样的牌你打得没错——你把钱推进去时是「好牌位」，在数学上领先——牌堆却偏偏发出了那张能击败你的牌。这一败不怪你；是 variance（方差／运气波动）在使坏。

机制永远是一次 **suckout（逆袭）**：一张在钱进池之后才到来的牌——翻牌、转牌或河牌都可能——把一手输牌变成了赢牌。你的一对 A 本来把对手的一对 5 打得死死的，直到那第三张 5 冒了出来。你的顶对本来让对手的同花听牌毫无希望，直到最后一张红桃落下。那个瞬间——热门被一个本不该到岸的听牌逆袭——正是这个词的核心。搞懂它，也是不让它毁掉你整个牌局的第一步，这份情绪自律正是把高手和 [fish（鱼／菜鸟）](/zh/blog/holdem-fish) 区分开来的东西。

---

## bad beat 和 cooler：那个至关重要的区别

> **快速回答**
> 区别只有一条：钱推进去时你领先、之后被一张幸运牌反超，是 bad beat；钱进池时你就已经落后、只是牌太强弃不掉，是 cooler。前者该气这副牌，后者只能佩服它——两者都疼，但方向相反。

![把 bad beat 和 cooler 分开的信息图——一对 A 对上提升成暗三条的一对 7，旁边是一对 K 撞上从头就领先、不必提升的一对 A](/images/holdem-bad-beat-litmus.webp "一个问题就能定案：对手要提升牌力才能赢，那是 bad beat；他本来就领先，那是 cooler")

人们常把「bad beat」和「cooler」混着用，但它俩其实是相反的——而搞清楚刚刚发生的是哪一个，能告诉你该气这副牌，还是该佩服它。整个区别就在于**钱推进去时谁领先，以及有没有发生 suckout：**

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | bad beat | cooler |
|:---|:---|:---|
| **筹码推进去时谁领先** | **你**是热门（常常 80%+） | 你是**落后**的 |
| **有没有发生 suckout？** | 有——一张幸运牌翻转了局面 | 没有——领先方全程领先 |
| **你本可以弃牌吗？** | 无所谓——你本来是赢的 | 不行——牌太强弃不掉 |
| **典型例子** | AA 输给 7‑7 击中暗三条 | KK 撞上 AA |
| **那种感觉** | 「我被逆袭了」 | 「我从头到尾没机会」 |

</div>

一个快速的试金石：**如果你的对手需要*提升*牌力才能赢，那就是 bad beat。**如果钱推进去时他就已经领先、你只是弃不掉自己的怪兽牌，那是 [cooler](/zh/blog/holdem-cooler)——没有 suckout，就没有 bad beat。还要注意这个陷阱：**翻牌成的暗三条对翻牌成的暗三条（flopped set over set）不是 bad beat。**当你的暗三条 Q 输给同一个翻牌上做出的暗三条 K 时，没有人在 river 河牌走运——更大的那个暗三条从头到尾都领先。（如果那对 K 是在转牌或河牌才击中暗三条，按这条试金石就是 suckout——那一次*确实*是 bad beat。）那是一场披着 bad beat 外衣的 cooler。

---

## 要多大的热门才算「真正的」bad beat？

> **快速回答**
> 并不是每一次作为热门输牌都是 bad beat。门槛是两条同时满足：你是约 80% 或以上的大热门，而且对手靠一次 suckout 反超了你。差了任何一条，那就只是这个游戏的正常质感。

![一张简单的三步图解 bad beat——先是 80% 的热门，接着 river 河牌一次 suckout，然后是这一败](/images/holdem-bad-beat-suckout.webp "bad beat 的形状：你是约 80% 的热门，river 河牌送来一次 suckout，本该赢下的这手牌就没了")

这里就是休闲玩家和认真玩家分道扬镳的地方。有一条不成文的胜率门槛，想诚实地使用这个词，就得先认这条门槛：

- **约 80% 或以上，且你输给一次 suckout**——才是货真价实的 bad beat。你的一对 A（对一个更小的对子是约 4:1 的热门）被击碎就是教科书式的案例。**one-outer（只剩一张牌能救对手）**——输给这副牌里仅剩的那唯一一张牌——是所有 bad beat 里最纯粹的。
- **60–70% 的热门输牌**——难受，但其实只是 variance 罢了。你只是个不大不小的热门；另一种结果本来就会相当频繁地发生。
- **coinflip（对翻／五五开）永远不是 bad beat。**A‑K 输给 Q‑Q（不同花约 43/57，同花牌约 46/54），或者一个对子输给两张高牌，已经够接近对翻了——把这个叫 bad beat，就像把一次输掉的抛硬币叫抢劫。如果本来就接近五五开，你不是被*击败*了，你只是输了一次对翻。

对这条门槛保持诚实，正是把一个会钻研的玩家和一个把每次失败都怪到运气头上的玩家区分开的东西——同样的自我诚实也能告诉你，一场真正的 cooler 和一手 [打烂了的牌](/zh/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") 有什么不同。

---

## 经典 bad beat 案例（附赔率）

> **快速回答**
> 三种最典型：AA 对小对子约 80% 的热门，却被击中暗三条；AA 翻前 all-in 对随机牌约 85%，被随便两张牌逆袭；最极端的 one-outer 约 96%，输给这副牌里仅剩的那一张。胜率越高，那一败就越纯粹。

![信息图：一对 A 约 80% 对一对 7 约 20%——被翻牌暗三条击碎的 4:1 优势](/images/holdem-bad-beat-aces-vs-set.webp "每一次 bad beat 里数学都站在你这边——只是弱势方摸到了他需要的那张牌")

每一次 bad beat 都有同样的形状：你是热门，弱势方需要帮助，而帮助恰好到了。最常见的几个版本，附上大致的翻前／翻牌胜率：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 这一败 | 你拿的 | 你的胜率 | 它是怎么发生的 |
|:---|:---|:---:|:---|
| **一对 A 被暗三条击碎** | AA 对一个更小的对子（例如 7‑7） | ~80%（4:1） | 他们的对子在翻牌、转牌或河牌击中暗三条 |
| **一对 A 对上随机牌** | AA 翻前 all-in | ~85% | 随便两张牌把你逆袭 |
| **超对 vs 同花听牌（边界案例）** | 翻牌面的超对 | ~63%（1.7:1） | 他们那 9 张同花 outs，再加上后门两对或顺子，到河牌为止都能补上 |
| **runner-runner（连摸两张）** | 翻牌时领先的一手成牌 | ~90%+ | 两张完美的牌（turn *和* river）把一个听牌补成成牌 |
| **one-outer（只剩一张）** | 一手近乎锁死的牌 | ~96% | 这副牌里仅剩的那唯一一张牌击败你 |

</div>

*按上一节的标准，超对 vs 同花听牌是这个家族的边界案例：~63% 的优势更接近普通的方差，算不上「货真价实」的 bad beat——但牌桌上大家就是这么叫它。*

最标志性的是**一对 A 被暗三条击碎。**你拿着一对 A 翻前全下对上一对 7——你大约是 80% 的热门，一个 4:1 稳赢的局面。可这副牌里还有另外两张 7，只要一张出现在牌面上——而且没有 A 跟着来——他们的三条就击败了你的对子。五次里有四次你收下底池；第五次，你就有了一个没人想听的 bad beat 故事。数学从来没错——你只是落在了它错误的那一边，这也正是为什么单独一手牌根本 [说明不了你打得好不好](/zh/blog/holdem-cooler)。

---

## 什么是 bad beat jackpot？

> **快速回答**
> bad beat jackpot（官方就叫这名，中文辅助说「爆冷大奖」）是一个累积奖池：从每手符合条件的牌里抽一小笔攒起来，当一手非常强的牌在摊牌时输掉，就派给输家。门槛条件和分配比例全看牌室规则。

有些牌室把这份痛苦变成了奖金：jackpot 的用意是奖励那个遭遇惊天大败的玩家，而奖金往往能改变人生。

规则**因牌室而异**，但常见的结构是这样的：

- **门槛条件。**一个典型的最低门槛是**「aces full of jacks or better（葫芦 A 带 J 或更大），被 four of a kind or better（四条或更大）击败」**。有些牌室把门槛设得更高（要四条被击败）。输掉的这手牌必须极强——你没法用一场普通的 cooler 触发它。
- **两张底牌都必须参与。**几乎每家牌室都要求输家的*两张*底牌（往往赢家的也要）都成为这手牌的一部分，所以你没法靠一手完全由公共牌凑成的牌来领取。
- **分配方式。**遭遇 bad beat 的玩家拿**最大的一份**，这手牌的赢家拿第二份，这手牌里**拿到底牌的**其余玩家平分剩下的。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 谁 | 典型份额 |
|:---|:---:|
| **输家（那手 bad beat 的牌）** | ~50% |
| **这手牌的赢家** | ~25% |
| **这手牌里拿到底牌的其他玩家** | ~25%（均分） |

</div>

有一条重要的告诫：**每家赌场和扑克网站都自定门槛条件和分配比例**——有些用 40/30/30，有些要求用一个口袋对子凑成符合条件的四条，有些对 jackpot 抽水的方式也不一样。永远别想当然；在你指望派彩之前，一定先查清那家牌室张贴的具体规则。

---

## 扑克史上最著名的 bad beat

> **快速回答**
> 2008 年 WSOP 主赛事：Motoyuki Mabuchi 凑成四条 A，却输给 Justin Phillips 的方块同花大顺——同一张河牌 A♦ 同时做出了两手牌。严格按门槛算它甚至不算 bad beat：Phillips 在转牌就已经用顺子领先，钱又是河牌之后才进池的。

如果你想让自己心里好受点，记住：最惨的 bad beat 都发生在最大的舞台上。最传奇的那一次发生在 **2008 年世界扑克大赛（WSOP）主赛事**上，**Motoyuki Mabuchi** 把他的一对 A 打成了 **four of a kind——四条 A**，一手全扑克里只有同花顺能击败的牌——却*还是输了*。牌面是 A♥ 9♣ Q♦ 10♦，**Justin Phillips**（手握 K♦ J♦）早在转牌就已经做出了 A 高的顺子——broadway，A-K-Q-J-10——领先于 Mabuchi 的暗三条 A。river 河牌那张 **A♦** 凑成了 Mabuchi 的四条，而与此同时，同一张牌又把 Phillips 的顺子变成了 **同花大顺**——方块的 10‑J‑Q‑K‑A。河牌圈的动作，按 PokerNews 的报道：Mabuchi 过牌，Phillips 下注，Mabuchi 喊了一声「gamble！」全下，Phillips 立刻跟注。让他凑成四条 A 的那唯一一张牌，正是唯一能击败它的那张牌。

*按同一条标准，这严格来说甚至算不上 bad beat——Phillips 在转牌就已经领先，而筹码是在最后一张牌落下之后才进池的，所以谁也没有 suckout。但扑克把它记成了史上最著名的 bad beat，这个叫法也就留了下来。*

那就是 bad beat 之痛的天花板：不是一个 80% 的热门倒下，而是*四条 A*——一手你打一辈子都可能永远输不掉的牌——被唯一能压过它的那副牌击败。下次你的一对 A 被击碎时，值得把这个揣在兜里：无论这副牌怎么亏待了你，曾经有人拿着四条 A 也输了。

---

## 为什么 bad beat 其实对你是好事

> **快速回答**
> 你遭遇的每一次 bad beat，都是你正在一个可击败的牌局里的证据。愿意在落后时把钱推进去的对手，就是长期给你送钱的对手；一次 suckout 是那份收入的入场费，不是账单。

这不是安慰话，而是一条能推到底的道理。想想一次 bad beat 需要什么：一个把钱在*落后*时、作为数学上的弱势方推进去，然后走运的对手。多数情况下，那是一个在做**亏钱决策**的玩家——正是你想要的那种对手。如果你牌桌上从来没人逆袭你，那就意味着每个人都在正确地弃掉自己的弱牌，也就没有钱可赢了。正如一句广为人知的教练格言所说，来自弱手的一次 suckout 是一份*礼物*：它是你另外四次拿走他们筹码的入场费。

在一个足够大的样本里，你遭遇的 bad beat 和你*施加*给别人的 bad beat 大致相互抵消。剩下的——唯一真正驱动你长期结果的东西——就是你决策的质量。**把钱在领先时推进去然后输了，从长期看，在每一个重要的意义上仍然是一次胜利。**筹码会回来的；优势是永久的，variance 是暂时的。

---

## 怎么面对一次 bad beat

> **快速回答**
> 五个动作：先出声承认「我领先着推进去的」，把它归为 variance；盯住上头的苗头，别拿下一手去追；歇一圈、离桌五分钟；靠一份够厚的资金去吸收 variance；别去讲那个 bad beat 故事。输掉的底池已经没了，能保住的只有之后的决策。

因为一次 bad beat 关于你的打法根本没有任何教训可言，它唯一真正的危险在于它对你*接下来*几手牌的影响。保护好它们：

1. **大声接受它。**一句简单的「我领先着推进去的，我啥也做不了」胜过默默生闷气（粤语常说「黑仔」「手风差」，讲的就是这种运气差）。把它命名为 variance，就等于结了案。
2. **警惕 tilt（上头）。**你输掉的那个底池已经没了；你为了赢回来而打的那三手鲁莽牌，才是一次 bad beat 真正的代价。如果你感到火气在往上冒，那就是提醒你该慢下来的信号。
3. **休息一下。**歇一圈、喝口水、离开五分钟。这是扑克里最便宜的保险，能防止你把一手输牌变成一整个输掉的牌局。
4. **相信你的 bankroll（资金）。**bad beat 正是你要留一份足以吸收 variance 的资金的原因。跨越几万手牌，一次 bad beat 只是一个舍入误差——只有当你让它改变了你的打法时，它才会伤到你的结果。
5. **别讲那个 bad beat 故事。**没人想听，而复述它只会让你重温那份 tilt。高手的标志不是从不遭遇 bad beat——而是到下一手牌就把它忘了。

---

:::readnext[继续阅读]
/zh/blog/holdem-cooler | 什么是扑克里的 cooler？ | /images/holdem-cooler-hero.webp
/zh/blog/holdem-fish | 什么是扑克里的 fish？ | /images/holdem-fish-hero.webp
:::

## FAQ

**Q. 扑克里的 bad beat 是什么？**

A. bad beat 就是你输掉了一手本来作为很强的统计热门该赢的牌，因为对手摸到一张不太可能的牌反超了你。你把钱推进去时是「好牌位」——在数学上领先——只有一次几乎不可能的 suckout 才翻转了结果。经典案例就是一对 A 被一个更小的对子击中暗三条给击碎。

**Q. bad beat 和 cooler 有什么区别？**

A. 在一次 bad beat 里，钱推进去时你是热门，然后被逆袭了——发生了一次 suckout。在一场 cooler 里，你全程落后、手握一手太强弃不掉的牌，且没有发生 suckout。快速测试：如果你的对手需要*提升*牌力才能赢，那就是 bad beat；如果他本来就领先，那就是 cooler。比如说，两边都在翻牌就击中的暗三条 vs 暗三条就是 cooler，不是 bad beat——但如果更大的那个暗三条是转牌或河牌才来的，那就是一次 suckout。

**Q. 输掉一次 coinflip 算 bad beat 吗？**

A. 不算。一次 bad beat 需要你是个大热门——通常约 80% 或以上——然后被 suck out。输掉一个接近五五开的对局，比如 A‑K 对 Q‑Q（A‑K 不同花只赢约 43%，同花牌约 46%），只是正常的 variance。如果那手牌接近一次抛硬币，这不算被爆冷，你只是输了一次本来就有大约一半概率会输的对翻。

**Q. 什么是 bad beat jackpot，怎样才算符合条件？**

A. bad beat jackpot 是有些牌室在一手异常强的牌于摊牌时输掉时派发的累积奖金。一个常见的门槛是「aces full of jacks or better（葫芦 A 带 J 或更大）被 four of a kind or better（四条或更大）击败」，且要求输家的两张底牌都参与。输家通常拿最大的一份，赢家拿第二份，这手牌里拿到底牌的其余玩家平分剩下的——但门槛条件和分配比例因牌室而异，所以永远要查清当地规则。

**Q. bad beat jackpot 怎样才算触发？我这手牌能领吗？**

A. 大多数牌室要卡住四个硬条件，缺一条就领不到：**①牌力够大**——最低门槛通常是「葫芦 A 带 J 或更大，被四条或更大击败」（有些房间要求输的必须是四条以上）；**②必须走到摊牌**——牌得真正亮出来比大小，中途有人弃牌、还没摊牌就结束的这手不算；**③输家的两张底牌都要参与成牌**（不少房间对赢家也有同样要求，但这一条各房不同）——你不能靠一手完全由公共牌凑成的牌来领；**④通常只限现金局**（锦标赛一般没有 jackpot）。我见过有人凑齐了葫芦 A 输给四条、兴奋地喊 jackpot，结果因为只有一张底牌参与成牌而没资格——**具体以你所在房间张贴的规则为准**，坐下前先看清门槛和抽水。

**Q. 扑克史上最惨的 bad beat 是什么？**

A. 最著名的来自 2008 年 WSOP 主赛事：Motoyuki Mabuchi 凑成了四条 A——一手只有同花顺能击败的牌——却还是输了。他翻牌击中暗三条 A，Justin Phillips 在转牌做出了 A 高的顺子，然后 river 河牌那张 case ace（仅剩的那张 A）凑成了 Mabuchi 的四条，而在同一张牌上，又把 Phillips 的顺子变成了方块同花大顺。凑成扑克里最大的四条，却撞上唯一能压过它的同花顺，这差不多就是 bad beat 惨到极点的样子了。

**Q. bad beat 在线上更常见吗？**

A. 感觉上会是这样，但那多半是数量造成的错觉。线上你每小时打的牌多得多——常常还是同时开好几桌——所以在同样的时间里你单纯就是*看到*更多 bad beat。发牌是随机的；你在线上并没有更倒霉，你只是打完了多得多的牌，而牌越多，两个方向上的 suckout 就越多。

**Q. 该怎么面对扑克里的 bad beat？**

A. 把这手牌当成 variance 接受下来，死死盯住 tilt，保护好你接下来的几个决策——输掉的那个底池已经没了，但你为了赢回来而打的那些鲁莽牌，才是真正的代价。需要的话就短暂休息一下，依靠一份足以吸收 variance 的资金，别去复述那个 bad beat 故事，因为那只会让你重温它。

**Q. bad beat 跟打得烂是一回事吗？**

A. 不——它俩是相反的。一次 bad beat 意味着你做出了*正确*的决策、作为热门把钱推进去，然后输给了运气。因为*你自己*做了一次糟糕的跟注或一次松散的打法而输牌，那不是 bad beat，那是错误。诚实的玩家会很小心，不把自己的错误归档到「bad beat」名下，因为漏洞就是这么一直不被修好的。

---

## 要记住的 3 件事

1. **bad beat 就是作为大热门输给一次幸运的 suckout**——钱推进去时你是领先的，你打得没错，却被逆袭了。那是 variance，不是错误。
2. **它是 cooler 的反面。**bad beat 需要一次 suckout（弱势方提升牌力）；cooler 不需要（领先方全程领先）。如果你的对手需要提升牌力才能赢，那就是一次 bad beat。
3. **bad beat 其实对你是好事。**它们意味着对手正在落后时把钱推进去然后走运——那些亏钱决策给你带来的回报，远远多过它们烧到你的次数。领先着推进去，把这一败一笑置之，让 variance 自己抹平。

bad beat 是你为参与一个能赢的牌局所交的税。最好的玩家遭遇的 bad beat 跟其他人一模一样多——他们只是学会了把这些记为 variance、保护下一手牌不受 tilt 影响，然后回到 [把满桌人打穿](/zh/blog/holdem-fish) 上去。只要你足够频繁地领先着把钱推进去，这副牌的残忍就会变成你的利润。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">术语</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">什么是 cooler？</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">没有 suckout 的那种输——也就不是 bad beat</div>
  </a>
  <a href="/zh/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">术语</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">什么是 fish？</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">他的 suckout 替你付账单的那个玩家</div>
  </a>
  <a href="/zh/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">赔率与数学</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">怎么计算底池赔率</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">先搞清楚你到底是不是热门</div>
  </a>
  <a href="/zh/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">摊牌时谁赢</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">获胜的牌到底是怎么定的</div>
  </a>
</div>
`.trim(),
};

export default POST;
