import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "什么是踢脚牌 kicker —— 规则、数量与被压制的 A",
  seoTitle: "什么是踢脚牌 kicker？决定底池归属的那张单张",
  desc: "踢脚牌 kicker 就是德州扑克里用来打破平局的那张单张——哪些牌型有、有几张，为什么 A9 会输给 AK，以及大多数教程都讲错的四条例外。",
  tldr: "踢脚牌 kicker 就是你手里不属于主牌型的那张最大单张——当两名玩家牌型相同时，它来决定胜负。一对用 3 张踢脚，两对 1 张，三条 2 张；顺子、同花、葫芦都没有踢脚。这也是公共牌成对出 A 时，AK 能赢 AQ 的原因。",
  category: "hand-rankings",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "10 分钟",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "摊牌时两名玩家亮出 A-K 和 A-Q，公共牌上有一张 A——K 这张踢脚牌决定了底池归谁",
  tags: ["踢脚牌", "什么是踢脚牌 kicker", "踢脚牌规则", "同花有踢脚牌吗", "打公共牌", "被压制的 A", "kicker 单张", "四条有踢脚牌吗"],
  content: `
真正教会我什么叫踢脚牌的那一把，赔了我整整一个买入。我拿的是 ==b:A♠ 9♣==，公共牌把我的 A 配成了对，我心想顶对稳了就直接全下。他一翻是 ==b:A♥ K♦==——同样一对 A，可他的 K 压过我的 9，底池滑向了他那边。我不是输给了更好的*牌型*，我是输给了一张更大的==单张。==那张单张就是踢脚牌 kicker，它决定的底池比大多数新手意识到的都多。

==踢脚牌 kicker 就是德州扑克内建的那道打破平局的机制——当两名玩家牌型相同时，剩下最大的那张牌赢。==大多数教程只给你一句话定义外加一个 AK vs AQ 的例子。这篇给你完整的图景：到底哪些牌型有踢脚（各有几张）、所有人都讲错的那个例外，以及为什么"打公共牌"意味着你的踢脚牌突然一点用都没有。

踢脚牌在 [德州扑克牌型大小](/zh/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") 这张大图里的位置很简单：它只在两名玩家牌型打平*之后*才登场——它永远赢不过更高的牌型。

---

### 踢脚牌一览

:::stripe
3 | 一对里的踢脚牌
1 | 两对（和四条）里的踢脚牌
0 | 顺子、同花、葫芦里的踢脚牌
:::

---

## 什么是踢脚牌 kicker？

**踢脚牌 kicker 就是你五张牌里不属于成牌组合的那张最大单张——当两名玩家牌型相同时，由它定输赢。**它也叫"单张"。德州扑克永远是五张牌的游戏（在德州里是七选五），所以一旦你的对子或三条锁定了，剩下的位置就由踢脚牌来填。

关键在于：踢脚牌==永远赢不过更高的牌型。==一对 K 带一张 2 的踢脚，照样碾压一对 10 带一张 A 的踢脚——先比牌型，踢脚只在打平时才用得上。踢脚牌只在==r:牌型完全相同==时才起作用：对子对同样的对子，三条对同样的三条。

假设你拿 A-K，对手拿 A-Q，公共牌成对出了一张 A。你俩都是"一对 A"——牌型相同。这时候由单张来定胜负，你的 K 踢过对方的 Q。谁也没做出更好的牌，是踢脚牌悄悄干完了它的活。

---

## 哪些牌型有踢脚牌——哪些没有

**只有那些成牌组合用不满五张的牌型才有踢脚牌——凡是自己就占满五张的牌型都没有。**这张表就是那些同行埋在大段文字里的东西。这里给你一眼看清：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 牌型 | 有踢脚牌吗？ | 踢脚牌张数 |
|:---|:---:|:---:|
| 高牌 | 有——五张全部依次比较 | 最多 4 |
| 一对 | ✅ 有 | 3 |
| 两对 | ✅ 有 | 1 |
| 三条 | ✅ 有 | 2 |
| 四条 | ✅ 有（极少起作用） | 1 |
| 顺子 | ❌ 无 | — |
| 同花 | ❌ 无* | — |
| 葫芦 | ❌ 无 | — |
| 同花顺 / 皇家同花顺 | ❌ 无 | — |

</div>

逻辑纯是算术：**组合牌 + 踢脚牌永远等于五张。**一对占 2 张，所以 3 张踢脚补满其余。顺子、同花或葫芦已经占满五张，就没剩下什么可以踢了——两个顺子或两个葫芦，由它们*内部*的点数来定胜负，而不是靠单张。

==*同花是那个带星号的例外：==严格说同花没有"踢脚牌"。当两个同花相撞时，你把五张牌从大到小逐一比较（A 高的同花赢 K 高的同花）。人们习惯把最大那张叫"踢脚牌"，但严格讲那是五张牌的高牌比较。每种牌型完整的平局判定顺序，都在 [德州扑克平局怎么判](/zh/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp") 里。

---

## 每种牌型用几张踢脚牌？

**一对用三张踢脚，三条用两张，两对和四条各用一张。**知道张数，你就清楚一场平局最深能拆到哪一层。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 牌型 | 组合 | + 踢脚牌 | = 5 张 |
|:---|:---:|:---:|:---:|
| 一对 | 2 | 3 | ✅ |
| 三条 | 3 | 2 | ✅ |
| 两对 | 4 | 1 | ✅ |
| 四条 | 4 | 1 | ✅ |

</div>

这一点在摊牌时很关键，因为踢脚牌是==从大到小依次比较的。==拿一对来说，如果第一张踢脚打平，就比第二张，再比第三张。两名玩家可能对子相同*而且*最大踢脚也相同，最后靠第三张才分出高下——这正是为什么"我踢脚不小"未必就够用。

---

## AK vs AQ：踢脚牌如何决定胜负

我们一张牌一张牌地走一遍，把这套机制讲具体。

公共牌是 ==b:A♣ 9♦ 5♠ 2♥ 7♣==。你拿 ==b:A♠ K♠==，对手拿 ==b:A♦ Q♦==。

- **你：**A♠ K♠ + 公共牌 → 一对 A。最佳五张 = ==g:A♠ A♣ K♠ 9♦ 7♣==（一对 A，踢脚 K-9-7）。
- **对手：**A♦ Q♦ + 公共牌 → 也是一对 A。最佳五张 = ==A♦ A♣ Q♦ 9♦ 7♣==（踢脚 Q-9-7）。

同样一对，所以从上往下比踢脚：你的 ==g:K 压过他的 Q。==你赢，A-A-K-9-7 胜 A-A-Q-9-7。那张 9 和 7 根本没轮到出场——第一张踢脚就搞定了。

:::note[注意两手牌都共用了公共牌上的 9 和 7。踢脚牌也可以来自公共牌：如果最大的那张单张是公共牌，它就同时补进*双方*的牌，由下一张来决定。你的底牌只有比公共牌上已有的牌更大，才算得上踢脚。]:::

---

## 打公共牌：你的踢脚牌不生效的时候

**如果五张公共牌本身已经组成了最好的牌，而你的底牌无法改善它，那你就是在"打公共牌"——这时候根本没有踢脚牌。**还留在这把里的所有人都用那同样的五张牌，于是底池平分。

公共牌是 ==b:10♠ J♦ Q♣ K♥ A♠==——一副做成的十到 A 的顺子（Broadway），花色混杂所以不可能有同花。

- 你拿 ==b:2♣ 3♦==。你的最佳五张就是公共牌那副顺子；2 和 3 什么都加不上。
- 对手拿 ==b:4♥ 5♦==。一样——公共牌顺子也是他的最佳五张。

你俩谁都没法组出比 A 更高的顺子，所以你俩都"打公共牌"，==g:平分底池。==顺子没有踢脚牌，所以那些底牌全是废物。当你听到"打公共牌"时，说的就是这个——这也是唯一一处，一张看起来很强的底牌一文不值。（关于识别这类公共牌走势，更多内容看 [如何读公共牌](/zh/blog/holdem-reading-the-board)。）

---

## 被压制的 A：为什么 A9 会输给 AK

**当一手牌和更强的牌共用一张牌、几乎每次连上时都会在踢脚牌较量中落败，它就是"被压制"了——最经典的陷阱就是像 A9 这样的弱 A 撞上 AK。**从这里起，踢脚牌不再是冷知识，而是开始真金白银地花钱。

![绿色台面上并排放着两手起手牌——A-K 挨着 A-9——展示同样一张 A 配上更弱的踢脚牌，如何变成一个被压制的陷阱](/images/holdem-kicker-dominated.webp "同样一张 A，命运不同：踢脚牌就是顶级牌和被压制牌之间的分水岭")

回到我那个买入。公共牌 ==b:A♦ 7♣ 2♥ Q♠ 4♦==，外面没有顺子也没有同花。

- **A9：**A♠ 9♣ → 一对 A，最佳五张 ==A♠ A♦ Q♠ 9♣ 7♣==。
- **AK：**A♥ K♦ → 一对 A，最佳五张 ==g:A♥ A♦ K♦ Q♠ 7♣==。

又是同样一对——而我的 9 根本没轮到投票。它被公共牌上的 Q 挤到了第二张踢脚的位置，胜负在第一张踢脚就定了：他的 K 压过公共牌的 Q——所以就实际影响而言，我的"踢脚牌"在这把牌开始前就==r:死了。==这就是压制：当你击中你的 A 时，你往往只是在给一个更大的 A 付账。这也正是 起手牌表格 对 A9 不同花的态度，为什么远比对 AK 谨慎得多——踢脚牌就是顶级牌和陷阱之间的差别。

---

## 四条有踢脚牌吗？

**有——四条带一张踢脚牌，但在德州里它几乎从不决定胜负，因为那四条通常是共用在公共牌上的。**这就是大多数教程搞砸的那个例外，它们把四条一股脑归进了"没有踢脚牌的五张牌型"。

算术很清楚：四张牌组成四条，一张牌是踢脚。它只在两名玩家不知怎么撞上*同一副*四条时才有用——而在德州里，这要求那四张全在公共牌上（因为每个点数只有四张）。如果公共牌是 ==b:5♠ 5♥ 5♦ 5♣ K♦==，人人都是四条 5，那第五张就是踢脚牌：手里有一张 A 的玩家打出 ==g:5-5-5-5-A==，赢过只能取公共牌 ==5-5-5-5-K== 的玩家。罕见，但真实存在——而把这些边缘情况说对，正是一份靠谱教程和一份含糊其辞的教程之间的分界。

---

:::readnext[继续阅读]
/zh/blog/holdem-hand-rankings | 德州扑克牌型大小（完整顺序） | /images/holdem-hand-rankings-hero.webp
/zh/blog/holdem-tiebreak-rules | 德州扑克平局怎么判 | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. 什么是踢脚牌 kicker？**

A. 踢脚牌 kicker 就是你五张牌里不属于成牌组合的那张最大单张。当两名玩家牌型相同时，它来打破平局——比如公共牌成对出 A 时，A-K 赢 A-Q，因为 K 这张踢脚压过 Q。踢脚牌永远赢不过更高的牌型。

**Q. 同花有踢脚牌吗？**

A. 没有。同花用满五张牌，所以没有单独的踢脚牌。当两个同花相撞时，你把五张牌从大到小比较——A 高的同花赢 K 高的同花。人们有时习惯把最大那张叫"踢脚牌"，但那其实是五张牌的比较。

**Q. 顺子有踢脚牌吗？**

A. 没有。顺子是五张连续的牌，本身就已经完整。如果两名玩家做成同样的顺子，就平分底池——多出来的底牌不起作用。只有更高的顺子才能赢过更低的顺子。

**Q. 葫芦有踢脚牌吗？**

A. 没有。葫芦是三条加一对——正好五张牌。平局先按三条的点数判，再按对子的点数，永远不靠单张。

**Q. 四条有踢脚牌吗？**

A. 有，四条带一张踢脚牌，但在德州里它很少起作用。它只在两名玩家撞上完全相同的四条时才决定胜负——而这要求那四张全在公共牌上——这时候第五张最大的赢。

**Q. 一手牌里有几张踢脚牌？**

A. 看牌型：一对用三张踢脚，三条用两张，两对和四条各用一张。顺子、同花、葫芦和同花顺都没有踢脚牌，因为它们本身就占满了五张。

**Q. 什么样的踢脚牌算好？**

A. 大的那种——A 或 K 的踢脚很强，而像 9 这样低的踢脚会让你"被压制"。这就是为什么 AK 和 AQ 远好过 A9 或 A5：当人人都配成一对 A 时，最大的踢脚赢底池。

**Q. "打公共牌"是什么意思？**

A. 打公共牌指的是五张公共牌就是你最好的牌，而你的底牌无法改善它。因为人人都用同样的五张牌，底池就平分。没有踢脚牌，因为公共牌本身已经组成了完整的五张牌。

**Q. 踢脚牌在德州扑克里重要吗？**

A. 非常重要。因为人人共用公共牌，玩家经常做成同样的对子或三条，那些底池就由踢脚牌来定。选踢脚强的牌（并弃掉被压制的牌）是赢牌打法的核心一环。

---

## 要记住的 3 件事

1. **踢脚牌 = 单张，只用来打破平局。**它在同牌型之间定胜负，永远赢不过更高的牌型。
2. **组合 + 踢脚牌 = 五张。**一对有 3 张踢脚，三条 2 张，两对和四条各 1 张；顺子、同花、葫芦都没有。
3. **踢脚牌关乎真金白银。**压制（A9 vs AK）和打公共牌，归根结底都落在踢脚牌上——挑单张强的牌，也要知道自己的踢脚什么时候已经死了。

把踢脚牌搞对，一整类"我怎么就输了那把？"的牌局就不再是谜。从这里出发，去看完整的 [德州扑克牌型大小](/zh/blog/holdem-hand-rankings) 顺序，或每种牌型完整的 [平局判定规则](/zh/blog/holdem-tiebreak-rules)。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克牌型大小</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">踢脚牌所处的完整顺序</div>
  </a>
  <a href="/zh/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">平局怎么判</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">每种牌型完整的平局判定顺序</div>
  </a>
  <a href="/zh/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">读公共牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">如何读公共牌</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">识别你在打公共牌的时刻</div>
  </a>
</div>
`.trim(),
};

export default POST;
