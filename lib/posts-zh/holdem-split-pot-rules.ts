import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "什么时候平分底池？德州扑克 Chop 规则",
  seoTitle: "赢了牌却只拿一半？德州扑克平局怎么分",
  desc: "德州扑克能打平吗？能——本文讲清底池到底何时平分：完全相同的五张牌、公共牌通杀、单数筹码规则，还有边池平分怎么算。",
  tldr: "能——扑克牌是可以打平的。当两名或更多玩家摊牌时亮出完全相同的最佳五张牌，底池就会平分（chop）。花色永远不能决定胜负，任何剩下的单数筹码归庄家按钮位左边第一个平局玩家。",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 分钟",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "德州扑克平分底池——牌面 8♠ 8♥ 8♦ A♣ K♠，一方 J♠ 10♥ 对另一方 5♣ 2♦，因为两手牌都打不过公共牌，筹码被一条金线分成两半",
  tags: ["平分底池 德州扑克", "德州扑克能打平吗", "chop 是什么", "什么时候平分底池", "单数筹码规则", "公共牌通杀", "德扑 平局怎么分"],
  content: `
刚玩扑克那阵子，有一手牌我每条街都在领打——翻前加注，翻牌、转牌都下注，河牌被跟注。我翻开 J-10。对手亮出 **5-2**。“我赢了吧？”荷官一言不发，指了指牌面：==**8-8-8-A-K**==。==r:我们两个人的底牌都盖不过带 A-K 踢脚的三条 8==，于是荷官默默把底池分成了两半。

你本以为稳赢的底池，结果只拿到一半，确实很难受。但 ==g:平分底池是有清晰规则的==——而且它正好回答了新手问得最多的一个问题：**德州扑克能打平吗？**能。下面是它发生的每一种情况。

---

> **快速答案**
> 当摊牌时两名或更多玩家拥有**完全相同的最佳五张牌**，底池就会**平分**（也叫 **chop**）。筹码被均等分开。花色永远不能拆平局，任何剩下的单数筹码归庄家按钮位左边第一个平局玩家。

---

### 核心数字

:::stripe
5 | 种德州扑克底池平分的情况
0 | 次平局在德州扑克中由花色决定
1 | 枚单数筹码——归按钮位左边第一个平局座位
:::

---

## 什么是平分底池？（“Chop”是同一回事吗？）

**平分底池**发生在摊牌时两名或更多玩家拥有完全相同的最佳五张牌，于是荷官把筹码在他们之间均等分开。**chop**——或者说“chopped pot”——在牌桌黑话里就是完全一样的意思（“我们 chop 吧”）。规则书里说 split，牌手嘴上说 chop。两个词大家都搜，所以你会看到它们混着用。

基础在于：你的牌永远是七张里的 ==**最佳五张**==——你的两张底牌加上牌面的五张。每种五张牌型的高低排在哪里，[完整的德州扑克牌型大小](/zh/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp")里都讲了。==r:当两名玩家的最佳五张在牌力上完全相同，谁都不算“更”赢==——底池平分，就这么简单。

---

## 德州扑克能打平吗？会平分底池的 5 种情况

能——平局在德州扑克里是完全正常、合法的结果，而且比新手想的更常见。因为大家共用同样的五张公共牌，两名玩家常常凑出同样的最佳五张。下面是它发生的五种方式。

### 1. 完全相同的最佳五张牌
两名玩家凑出一模一样的五张牌——点数相同，哪怕底牌花色不同。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | 玩家 A | 玩家 B |
|---|---|---|
| **底牌** | K♠ 7♣ | K♥ 2♦ |
| **牌面** | K♦ K♣ Q♥ Q♦ J♠ | （相同） |
| **最佳五张** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → 平分== |

</div>

两人都用牌面加一张 K 凑成葫芦 KKK-QQ。==r:那些 K 的花色无关紧要。==

### 2. 公共牌通杀
五张公共牌本身对场上剩下的所有人来说已经是最强牌——就是我故事里那个 8-8-8-A-K 的底池。这是最常见的一种平分，所以下面单独给它开一节。

### 3. 相同的顺子
两个顶张相同的顺子打平，不看花色。在牌面 7♣ 6♦ 5♥ K♠ 2♣ 上，A 的 9♠ 8♠ 和 B 的 9♥ 8♦ 都凑成 9-8-7-6-5——一样高，所以**平分**。

### 4. 相同的同花
花色没有高低之分，所以点数相同的两个同花打平。实战中这几乎总是意味着**牌面本身**就是一副五张同花。在 K♠ J♠ 8♠ 4♠ 2♠ 上，如果 A 拿 A♥ Q♦、B 拿 10♥ 9♦，两人都没有黑桃——都打牌面的 K-J-8-4-2 同花，**chop**。

==r:但在你下结论之前先检查一下：==你手里任何一张比牌面最小黑桃更大的黑桃都会改进这个同花。这里哪怕不起眼的 3♠ 都能凑成 K-J-8-4-3，==g:赢下整个底池==——而 A♠ 则凑成坚果同花。

### 5. 一直相同到最后一张踢脚
对子和两对通常由踢脚决定——但如果踢脚也一样，那就是平分。牌面 A♦ Q♠ 9♣ 6♥ 2♠，A♠ K♦ 对 A♥ K♣，两名玩家都拿到 ==g:A-A-K-Q-9== → **平分**。当踢脚*不同*时，更大的那张单独赢下——这个比较到底怎么一手手比，[平局与踢脚规则](/zh/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp")里讲得很清楚。

---

## 两名玩家能赢同一个底池吗？公共牌通杀时

能——而且甚至不需要两手怪物牌。当五张公共牌本身就已经是场上剩下所有人的最佳五张，==**公共牌通杀**==，每个还在牌局里的玩家都分这个底池，无论是两个人还是五个人。

那就是我的 8-8-8-A-K：我的 J-10 和他的 5-2 都在打牌面带 A-K 踢脚的三条 8——五张完全相同，自动 chop。极端情况是像 A♠ K♠ Q♠ J♠ 10♠（皇家同花顺）这样的牌面：任何底牌都改进不了它，所以 ==g:剩下的所有人一起 chop==。

> **检查方法：** *你的*最佳五张——至少用一张底牌——能打过牌面本身的五张吗？如果能，你就打你的牌。如果不能，那就是公共牌通杀，你很可能在 chop。系统地这样扫牌面的完整方法，在[怎么读牌面、找出你的最佳五张](/zh/blog/holdem-reading-the-board)里。

:::tip[如果公共牌通杀而有人在河牌下注，跟注前想一想：当你顶多只能打平时，跟注通常只是把你自己的一部分筹码买回来。只有你的底牌真能打过他们那手确切的牌时才跟。]:::

---

## 德州扑克里永远不能拆平局的 3 件事

![一副黑桃皇家同花顺 = 一副红桃皇家同花顺，中间一个金色等号——在德州扑克里花色永远不能决定胜负](/images/holdem-split-pot-suit-equals.webp "点数相同永远平分——德州扑克没有花色高低")

以下就是大多数“等等，这凭什么平分？！”争论背后的误区。

### ❌ “我花色更大，所以我赢”
==r:黑桃同花**打不过**红桃同花。==德州扑克没有花色高低——==点数相同就平分，就这么简单==。（这一点常把那些从有花色高低的玩法转过来的玩家坑到。）

### ❌ “我底牌更大，所以我赢”
牌面 9♠ 8♦ 7♣ 6♥ 5♠——一副现成的顺子。你拿 A♠ K♦；对手拿 2♣ 3♥。==r:**平分。**==你们两个都打牌面的 9-8-7-6-5，因为 ==r:你那些大底牌根本进不了最佳五张==。大底牌只有在真正作为踢脚起作用时才有意义——[什么是踢脚、它什么时候起作用](/zh/blog/holdem-kicker)精确地划出了这条线。

### ❌ “我用了两张牌，他们只用一张”
==r:你用几张底牌无关紧要。==唯一算数的是七张里最强的五张。==g:如果两名玩家落在同样的最佳五张上，不管你是怎么凑到的，都是 chop。==

---

## 多出来那枚筹码归谁？单数筹码规则

有时底池没法均分——两人之间一个 101 枚筹码的底池，每人 50 枚，剩一枚，而且没有半枚筹码这回事。标准规则是：

> ==剩下的那枚单数筹码归**按钮位左边**第一个平局玩家==（从庄家顺时针数最早的赢家座位）。

在三方平分、多出两枚单数筹码时，顺时针最早的两个座位各拿一枚。==r:各家规矩可能不同==——少数牌房改成按高牌或花色分单数筹码——所以真金白银时最好问一下荷官主管。==g:线上则由软件按位置自动分配。==

---

## 边池也会平分吗？有人 all in 时的平局

当有人 all in 时，筹码会形成一个 ==**主池**==（所有人都有资格）加上一个或多个 ==**边池**==（只有继续下注的深码玩家）。每个池子都==**分别**==结算——赢下或 chop——根据该池子有资格玩家中的最佳牌。

举个具体例子：A all in 投入 100；B 和 C 各投入 300。这就是一个 **300 的主池**（100 × 3）和一个 **400 的边池**（200 + 200，只有 B 和 C）。牌面跑出 A♦ J♥ 7♠ 4♣ 2♥：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| 玩家 | 底牌 | 最佳五张 | 结果 |
|---|---|---|---|
| A（all in） | A♠ Q♦ | ==g:A-A-Q-J-7== | 平分主池 → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | 平分主池（150）+ 赢下边池（400） |
| C | K♦ K♠ | K-K-A-J-7 | 两池皆输 → 0 |

</div>

A 和 B 用一对 A 加相同踢脚打平，所以他们 ==g:平分主池==；边池只由 B 和 C 争夺，而 B 的一对 A 单独打过 C 的一对 K。==r:一个 all in 玩家永远只能赢下或 chop 他实际投入过的那些池子。==这些池子最初是怎么搭起来的——封顶、再加注资格、摊牌顺序——都在[all in 规则与边池指南](/zh/blog/holdem-all-in-rules)里。

---

## 底池会不会分成一半高牌、一半低牌？

在德州扑克里不会。你可能听过像 Omaha Hi-Lo 或 Stud Hi-Lo 这样的“分池玩法”，那里**每个**底池都设计成在最佳高牌和最佳合格低牌（八或更好）之间平分。那是另一个游戏家族。==标准德州扑克只玩高牌==——底池*只在*最佳五张牌真正打平时才平分。

---

:::readnext[继续阅读]
/zh/blog/holdem-reading-the-board | 怎么读牌面、找出你的最佳五张 | /images/holdem-reading-the-board-hero.webp
/zh/blog/holdem-all-in-rules | All in 规则与边池详解 | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. 德州扑克什么时候平分底池？**

A. 当摊牌时两名或更多玩家拥有完全相同的最佳五张牌，底池就会平分；筹码在他们之间均等分开。

**Q. 两名玩家牌一样就一定平分底池吗？**

A. 只有完整的最佳五张打平才平分——同样的对子加同样的踢脚，或者同样的顺子、同花、葫芦。只要有任何一张踢脚不同，更大的踢脚就赢下整个底池，而不是平分。

**Q. 扑克里“chopped pot”是什么意思？**

A. chopped pot 就是牌桌黑话里的平分底池。“chop”是牌手嘴上说的；“split pot”是规则书里的术语——两者都指在打平的牌之间均等分开底池。

**Q. 花色会不会决定谁赢下一次平分？**

A. 不会。德州扑克没有花色高低，所以完全相同的五张牌永远平分，不看花色。

**Q. 底池没法均分时，多出来那枚筹码归谁？**

A. 标准规则：庄家按钮位左边第一个平局玩家。少数牌房改成按高牌或花色分，所以各家规矩可能不同——线上软件会自动处理。

**Q. 超过两名玩家能平分一个底池吗？**

A. 能。如果三名或更多玩家都拿着完全相同的最佳五张牌，底池就在他们之间均等分开——最常见于公共牌对所有人通杀时。

**Q. 有人 all in 时，平分底池怎么处理？**

A. 底池会拆成一个主池和若干边池；每个池子分别赢下或 chop，根据有资格玩该特定池子的玩家中的最佳牌来定。

**Q. 锦标赛的 chop 和平分底池是一回事吗？**

A. 不是——同一个词，两件不同的事。摊牌时的平分底池是自动的：牌打平时荷官就分筹码。锦标赛的“chop”是剩下的玩家之间自愿的谈拢，把奖池分掉，通常按筹码量或 ICM 计算，只有所有人同意才发生。锦标赛的派彩有什么不同，可以看[锦标赛 vs 现金局](/zh/blog/holdem-tournament-vs-cash-game)。

---

## 关键要点

1. 对，==**德州扑克是能打平的**==——只要两名或更多玩家共用 ==**七张里完全相同的最佳五张**==，底池就平分（chop）。
2. ==r:**花色、更大的底牌、你用了几张牌**==——都永远不能拆平局。
3. ==**单数筹码**==归按钮位左边第一个平局玩家，而 ==**边池**==与主池分开结算。

回顾一下顺序，看[完整的牌型大小](/zh/blog/holdem-hand-rankings)；掌握贴身近牌，看[踢脚与平局规则](/zh/blog/holdem-tiebreak-rules)；解决那个经典争论，看[同花和顺子哪个大](/zh/blog/holdem-flush-vs-straight)。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克牌型大小——从大到小</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">全部 10 种牌型，带概率、例子和牌面谜题</div>
  </a>
  <a href="/zh/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平局规则</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">踢脚与平局规则</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">踢脚如何决定同牌型摊牌</div>
  </a>
  <a href="/zh/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌力对决</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">同花和顺子哪个大？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">头号困惑的数学与牌面场景</div>
  </a>
</div>
`.trim(),
};
