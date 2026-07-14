import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "德州扑克位置详解：每个座位的名称与图解",
  seoTitle: "每一手你的座位都在换名字 —— 德扑位置全图解",
  desc: "名字跟着按钮走，不跟着椅子走。UTG、劫机位、关煞位、按钮位每个位置名称，加上座位编号、6人桌图解，还有谁先行动。",
  tldr: "德州扑克的位置是以庄家按钮为基准来命名的座位 —— UTG（枪口位）、lojack、劫机位、关煞位、按钮位，还有两个盲位 —— 每手牌它们都顺时针移动一个座位。翻前 UTG 最先行动、大盲最后行动；翻牌后小盲最先行动、按钮位最后行动。物理座位编号永远不动，位置才会动。",
  category: "strategy",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 分钟",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "从上往下俯拍的专业德州扑克桌，显示 9 个玩家位置、每个座位的筹码堆和金色庄家按钮",
  tags: [
    "德州扑克 位置",
    "德扑 位置名称",
    "德州扑克 座位编号",
    "德州扑克 位置图",
    "劫机位 lojack",
    "德州扑克桌 位置",
    "德州扑克 谁先行动",
  ],
  content: `
我第一次打现场现金局，坐的那个位置后来我才知道叫 UTG。我低头一看是 J♥ J♠，加注。劫机位跟了。关煞位跟了。按钮位跟了。大盲 3bet。我完全不知道该怎么办 —— 我 call 了，然后连续三条街一路流血送筹码。

两圈之后我坐到了按钮位，还是同样的 J♥ J♠。我加注。所有人都弃牌。我一个翻牌都没看到就赢了 $14。

同样一手牌，结果天差地别。唯一变的只是我的座位 —— 那天晚上我才意识到，我其实根本不知道这些座位都*叫什么*，更别提它们意味着什么了。如果你还在学一手牌从发牌到摊牌是怎么走完的，先看[德州扑克新手规则](/zh/blog/texas-holdem-rules-for-beginners)；这篇是那份指南默认你已经懂了的座位地图。

---

> **快速回答**
> 德州扑克的位置是==以庄家按钮为基准来命名的座位== —— UTG（枪口位）、lojack、劫机位、关煞位、按钮位、小盲位、大盲位 —— 随着按钮移动，它们==每手牌都顺时针移动一个座位==。翻前 UTG 最先行动、大盲最后行动。翻牌后小盲最先行动、按钮位最后行动。

---

## 德州扑克桌上都有哪些位置？（完整座位地图）

位置不是一把椅子 —— 它是**你相对于庄家按钮所在位置的名称**，它决定了==你在每条街上什么时候行动==。因为按钮每手牌之后都顺时针移动一个座位，所以桌上每个玩家每一手都戴着一个不同的名字。

下面是完整的 9 人桌位置图 —— 每个座位名称、它的缩写、它的区域，以及它在翻牌前后到底什么时候行动：

![9 人德州扑克桌，每个座位都有筹码堆，其中一名玩家面前标着庄家按钮 D](/images/holdem-button-position-hero.webp "庄家按钮决定了每个座位的位置和行动顺序")

| 座位 | 缩写 | 区域 | 翻前 | 翻牌后 |
|:---|:---|:---|:---:|:---:|
| Under the Gun | **UTG** | 前位 | 第 1（最先） | 第 3 |
| Under the Gun +1 | **UTG+1** | 前位 | 第 2 | 第 4 |
| Under the Gun +2 | **UTG+2** | 前位 | 第 3 | 第 5 |
| Lojack | **LJ** | 中位 | 第 4 | 第 6 |
| Hijack | **HJ** | 中位 | 第 5 | 第 7 |
| Cutoff | **CO** | 后位 | 第 6 | 第 8 |
| Button | **BTN** | 后位 | 第 7 | **最后** |
| Small Blind | **SB** | 盲位 | 第 8 | **第 1** |
| Big Blind | **BB** | 盲位 | 第 9（最后） | 第 2 |

注意这个翻转：==盲位翻前最后行动，翻牌后却最先行动==，而按钮位在翻牌后的每条街都最后行动。正是这个顺序 —— 不是牌 —— 让某些座位在结构上就比别的座位更好。

> **现场牌桌小提示：** 按钮是一个实体圆盘，每手牌顺时针移动一个座位。「UTG」就是那一刻坐在按钮左边第三个座位的人 —— 不是固定的某把椅子。

---

## 德扑位置名称与缩写：UTG、LJ、HJ、CO、BTN、SB、BB

你在牌桌上会听到、在策略文章里会读到的每个位置名称，一次讲清楚：

| 缩写 | 全称 | 分组 | 指的是什么 |
|:---|:---|:---|:---|
| **UTG** | Under the Gun（枪口位） | 前位（EP） | 翻前第一个行动，紧挨着大盲左边 |
| **UTG+1 / UTG+2** | Under the Gun 加一 / 加二 | 前位（EP） | 从 UTG 顺时针数的接下来两个座位 |
| **LJ** | Lojack | 中位（MP） | 按钮右边第三个座位 |
| **HJ** | Hijack（劫机位） | 中位（MP） | 按钮右边第二个座位 |
| **CO** | Cutoff（关煞位） | 后位（LP） | 按钮右边第一个座位 |
| **BTN** | Button（按钮/庄家位） | 后位（LP） | 放着庄家圆盘的座位 —— 翻牌后最后行动 |
| **SB** | Small Blind（小盲位） | 盲位 | 按钮左边第一个座位；下强制小盲注 |
| **BB** | Big Blind（大盲位） | 盲位 | 按钮左边第二个座位；下完整的强制盲注 |

你还会看到更宽泛的区域标签：==**EP**（前位）==涵盖 UTG 那几个座位，==**MP**（中位）==涵盖 lojack 和劫机位，==**LP**（后位）==涵盖关煞位和按钮位。老一点的书把 lojack 和劫机位归成「MP1/MP2」—— 同样的座位，不同的标签。

知道名字只是第一步。从每个位置上到底*该做什么* —— 范围、偷盲、有位置与没位置的打法 —— 那是策略问题，讲在[位置策略指南](/zh/blog/holdem-position-play)里。

---

## 德扑座位编号 vs 位置 —— 1 号座位不是一个位置

这一点几乎绊倒每个第一次打现场的玩家：当值台员喊出**「12 号桌，5 号座」**时，那个数字跟==德州扑克位置毫无关系==。

在大多数扑克室里，物理座位是从庄家正左边开始编号的 —— ==1 号座位习惯上是庄家左边的第一把椅子==，顺时针数一圈到庄家右边的 9 号或 10 号座。这些数字是钉死在椅子上的。工作人员用它们来处理杂务：安排新玩家入座、送筹码、叫时间。

位置正好相反 —— 它们随着按钮==每一手都顺时针移动一个座位==。5 号座这一手可能是按钮位，下一手是关煞位，再下一手是劫机位。

:::compare
座位编号（物理） | 位置（扑克）
钉死在椅子上 —— 1 号座通常是庄家正左边 | 每手牌跟着庄家按钮移动
工作人员用：「5 号座，筹码来了」 | 策略上用：「关煞位开池」
一整个牌局中永不改变 | 每一手都变，顺时针挪一个座位
告诉你坐在哪里（WHERE） | 告诉你什么时候行动（WHEN）
:::

所以「德扑里的 1 号座是什么？」这个问题的答案很无聊 —— 它就是一把椅子 —— 而这恰恰是重点。==座位编号是一个地址；位置是一份工作==，而这份工作每手牌都会被重新分配。

---

## 德扑里的 UTG 是什么？

**UTG 是「Under the Gun」的缩写** —— 紧挨着大盲左边的座位，也是==翻前第一个行动的玩家==。这个名字点出了这个位置的压力：你必须在看到任何一个对手怎么做之前就投入筹码，就像被枪顶着行动一样。

在满员 9 人局里，其实有三个「under the gun」座位 —— **UTG、UTG+1 和 UTG+2** —— 从大盲开始顺时针数。只有第一个是真正盲着行动；+1 和 +2 座位至少还能先看到一两个决定。

那是定义。UTG *怎么打* —— 为什么它要求全桌最紧的范围，为什么加注或弃牌是这里的标准打法 —— 讲在[位置策略指南](/zh/blog/holdem-position-play)里。

---

## 劫机位和 lojack —— 以及它们为什么叫这名字

**劫机位（HJ）**是按钮右边第二个座位。**Lojack（LJ）**再往前一个，是按钮右边第三个座位。它们俩合起来构成了现代 9 人局里的中位。

这些名字没有任何有据可查的官方来源 —— 扑克黑话很少有 —— 但流传最广的说法是这样的：

- **劫机位：** 关煞位和按钮位是经典的偷盲座位。当前面一个座位的玩家先加注时，他就==**「劫」（hijack）走了**==那些后位座位本来等着做的偷盲 —— 于是这个座位就得了这个名字。
- **Lojack：** 是后来才有的，==对「hijack」的一个玩笑式变体== —— 在座次里「低」一档的座位。多数说法里还能听出防盗品牌 LoJack 的谐音：一个劫机位，往下挪一档。

这两个都当作牌桌传说听听就好，别当词源学。不是传说的是：劫机位和 lojack 是真实、标准的名称，你在每一张现代范围图和每一个训练网站上都会看到，所以值得把它们记得滚瓜烂熟。

---

## 关煞位和按钮位（庄家位）

**关煞位（CO）**是==按钮右边第一个座位== —— 庄家前面的最后一个位置。有两个来源说法在流传：一个说这个座位「切断」（cut off）了按钮先加注偷盲的机会；一个更老的说法是，在自己发牌的家庭局里，庄家右边的玩家会在洗牌后==切牌==（cut the deck）。不管哪种，名字就这么定下来了，关煞位普遍被算作后位。

**按钮位（BTN）** —— 也叫**庄家位** —— 是标着实体庄家圆盘的座位。在赌场局里由专业荷官负责发牌，所以按钮只是标出==谁*本来该*发牌==，而这正是下注顺序的锚点：按钮位==在翻牌后的每条街都最后行动==，桌上其他一切都是按它离那个圆盘的距离来命名的。

这个保证最后行动的特权，正是按钮位被认为是德扑里最赚钱座位的原因 —— 完整的论证，连带背后的数字，都在[位置策略指南](/zh/blog/holdem-position-play)里。

---

## 盲位：SB 和 BB 座位

按钮左边的两个座位同时既是位置*又是*强制下注：

- **小盲（SB）：** 按钮左边第一个座位。发牌前下一个强制注 —— 通常是大盲的一半。
- **大盲（BB）：** 顺时针数下一个座位。下完整的强制注，它设定了进入这手牌的价格。

作为位置，它们由行动顺序的翻转来定义：盲位==翻前最后行动==（它们已经付过钱了，所以其他所有人必须先回应它们的下注），但==翻牌后最先行动==，在翻牌、转牌、河牌上都抢在全桌前面。

盲注为什么存在、每圈要花多少、以及怎么防守，那是它自己的一个话题 —— [小盲和大盲指南](/zh/blog/holdem-blind-meaning)把强制注的机制和数学讲得清清楚楚。

---

## 德扑谁先行动 —— 翻前 vs 翻牌后（盲位先动吗？）

关于位置被问得最多的一个问题，用一张表回答：

| 街 | 最先行动 | 最后行动 |
|:---|:---|:---|
| **翻前** | **UTG** —— 大盲左边第一个座位 | **大盲** —— 可以过牌或加注 |
| **翻牌 / 转牌 / 河牌** | **小盲** —— 或按钮左边第一个仍在牌局里的座位 | **按钮位** —— 或它前面最近的还在局里的座位 |

那么 —— **盲位先动吗？** ==翻前，不。翻牌后，是。==翻牌前盲位已经把钱放进去了，所以行动从 UTG 开始，最后再绕回到它们 —— 大盲是所有人里最后一个行动的。翻牌后顺序从按钮开始顺时针重置：小盲先说话，大盲第二，按钮永远最后。

而在两个盲位之间：==小盲在每条街上都在大盲之前行动==，翻前翻后都一样 —— 只有一个例外，单挑，下面会讲。

有一个相邻的问题值得提一句：在**摊牌**时，默认是最后下注或加注的玩家先亮牌（如果河牌全过牌，那就是按钮左边第一个还在局里的座位先亮） —— 完整的礼仪在[摊牌规则指南](/zh/blog/holdem-showdown-rules)里。想看一手牌逐街的完整顺序，看[牌局行动顺序](/zh/blog/holdem-game-order)。

---

## 按人数看德扑位置：单挑到 10 人桌（6 人桌 vs 满员桌）

位置名称不随桌子大小改变 —— 随着玩家被移走，==它们是从前位先剥掉的==。按钮、盲位、关煞位和劫机位撑得最久；UTG 那些座位只有在满桌时才存在。下面是从 2 人到 10 人的地图，按翻前行动顺序列出：

| 人数 | 翻前行动顺序（先 → 后） |
|:---:|:---|
| **2（单挑）** | BTN（下小盲）→ BB |
| **3** | BTN → SB → BB |
| **4** | CO（这里的「UTG」座位）→ BTN → SB → BB |
| **5** | HJ（这里的「UTG」座位）→ CO → BTN → SB → BB |
| **6（6 人桌）** | UTG（也叫 LJ）→ HJ → CO → BTN → SB → BB |
| **9（满员桌）** | UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB |
| **10** | UTG → UTG+1 → UTG+2 → UTG+3 → LJ → HJ → CO → BTN → SB → BB |

**单挑是那个打破所有人直觉的。**只有两个玩家时，==按钮下小盲== —— 同一个座位既是 BTN 又是 SB。这意味着按钮==翻前**最先**行动==（大盲一如既往最后行动），但在==翻牌后的每条街仍然**最后**行动==，而大盲翻牌后最先行动。其他所有桌子大小都遵循正常模式；唯独单挑把最好的座位和一个盲位融在了一起。

**6 人桌 vs 满员桌**纯粹就是做减法：那三个多出来的座位（UTG+1、UTG+2 和一个中位座位）不存在，所以 6 人桌跑的是 UTG → HJ → CO → BTN → SB → BB。实际后果是==每个 6 人桌座位都比它满员桌的同名座位打得「更后」== —— 6 人桌的 UTG 面对五个对手，而不是八个 —— 这就是为什么在短手局里各个位置的范围都会放宽。逐座位的数字在[位置策略指南](/zh/blog/holdem-position-play)里，填进每个范围的具体牌型则在[起手牌图表](/zh/blog/holdem-starting-hands-chart)里映射好了。

> **命名提醒：** 有些网站和牌室把 6 人桌第一个座位标成「LJ」或「MP」而不是 UTG，10 人桌的中位座位有时会写成「MP1/MP2」。标签会变；行动顺序永远不变。

---

:::readnext[继续阅读]
/zh/blog/holdem-position-play | 位置策略：有位置 vs 没位置 | /images/holdem-position-play-hero.webp
/zh/blog/holdem-starting-hands-chart | 按位置划分的起手牌图表 | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. 德扑里的 UTG 是什么意思？**

A. UTG 是「Under the Gun」的缩写 —— 紧挨着大盲左边的座位，也是翻前第一个行动的玩家。这个名字点出了在看到任何对手决定之前就投入筹码的压力。在满员桌里，接下来两个座位叫 UTG+1 和 UTG+2。

**Q. 德扑里的劫机位是什么？**

A. 劫机位（HJ）是庄家按钮右边第二个座位，就在关煞位前面。它是 9 人局里两个中位座位中较靠后的那个，在 6 人桌里则是翻前第二个行动的座位。名字背后流传最广的说法是：从这个座位加注会「劫」走关煞位和按钮位本来占位准备做的偷盲。

**Q. 德扑里的 lojack 是什么？**

A. Lojack（LJ）是按钮右边第三个座位 —— 9 人局里两个中位座位中较靠前的那个。在 6 人桌里它是第一个行动的座位，那时通常就直接叫它 UTG。这个名字一般被讲成是对「hijack」的玩笑式变体（低一个座位），常常跟防盗品牌 LoJack 挂钩 —— 属于牌桌传说，而非有据可查的词源。

**Q. 谁先行动，小盲还是大盲？**

A. 小盲在每条街上都在大盲之前行动。翻前，两个盲位都最后行动（大盲是所有人里最后的那个，有过牌或加注的选择）；翻牌后，小盲是桌上第一个行动的座位。唯一的例外是单挑，那时按钮下小盲，大盲翻牌后最先行动。

**Q. 6 人桌德扑有几个位置？**

A. 六个：UTG（也叫 lojack）、劫机位、关煞位、按钮位、小盲位和大盲位。跟 9 人桌相比，UTG+1、UTG+2 和一个中位座位干脆就不存在 —— 名字是从前位先被移走的，所以剩下的每个座位都比它满员桌的同名座位打得「更后」。

**Q. 德扑位置每手牌都会变吗？**

A. 会。庄家按钮每手牌之后顺时针移动一个座位，而既然所有位置都是按离按钮的距离命名的，每个玩家的位置每手牌都会挪一个座位。打完一整圈，桌上每个位置你都会正好坐到一次。

**Q. 德扑里的 1 号座是什么？**

A. 1 号座是一把物理椅子，不是一个位置 —— 在大多数扑克室里它是庄家正左边的第一个座位，编号顺时针数到 9 号或 10 号座。工作人员用座位编号来安排入座和处理杂务。德扑位置（UTG、按钮、盲位）每手牌独立轮转，所以 1 号座可以是任何位置。

---

## 关键要点

1. **位置是名字，不是椅子。**每个座位都按离庄家按钮的距离命名，每个名字每手牌都顺时针移动一个座位。
2. **一行看懂这张图：** UTG → UTG+1 → UTG+2 → LJ → HJ → CO → BTN → SB → BB。翻前从 UTG 开始、到大盲结束；翻牌后从小盲开始、到按钮结束。
3. **座位编号 ≠ 位置。**1 号座习惯上是庄家正左边、永不移动；位置每手牌轮转。一个是地址，另一个是工作。
4. **桌子变小从前面减。**6 人桌砍掉前位座位；单挑把按钮和小盲融在一起 —— 翻前最先行动、翻牌后最后行动。

一旦这些名字变成本能，真正的优势就来自你拿它们做什么 —— [每个位置怎么打](/zh/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp")，从开池范围到有位置与没位置的打法，是下一篇该读的。从那里，[起手牌图表](/zh/blog/holdem-starting-hands-chart)把具体牌型映射到具体座位，而[牌型大小指南](/zh/blog/holdem-hand-rankings)则决定摊牌时到底什么牌赢。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">新手指南</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克新手规则</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">一手牌从发牌到摊牌是怎么走的</div>
  </a>
  <a href="/zh/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">位置策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">有位置 vs 没位置策略</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">开池范围以及每个座位该做什么</div>
  </a>
  <a href="/zh/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">行动顺序</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克的牌局行动顺序</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">翻前 → 翻牌 → 转牌 → 河牌 行动序列</div>
  </a>
  <a href="/zh/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">盲注</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">小盲和大盲详解</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">它们为什么存在、以及怎么正确打</div>
  </a>
</div>
`.trim(),
};
