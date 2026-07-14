import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "牌型一样谁赢？德州扑克平局与踢脚牌规则",
  seoTitle: "牌型一样谁赢？德扑平局与踢脚牌规则",
  desc: "摊牌时同样是一对，怎么还是输了？这篇讲清德州扑克平局怎么定胜负——同样一对、两对谁赢，第五张牌何时决定一切，什么时候平分底池。",
  tldr: "平局按固定顺序拆分：先比牌型，再比组成牌型的牌，最后从大到小比踢脚牌。同样一对 → 第一张踢脚牌大的赢；五张牌完全一样 → 平分底池。花色永远不参与定胜负。",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 分钟",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "德州扑克摊牌：A♠ K♦ 对 A♥ 9♣，公共牌 A♦ Q♠ 7♥ 3♣ 2♦——同样一对A，靠踢脚牌决定胜负",
  tags: ["德州扑克 平局规则", "牌型一样谁赢", "同样一对谁赢", "两对平局", "第五张牌重要吗", "踢脚牌", "更大的顺子", "德扑 平局"],
  content: `
你亮出一对A。对手也是一对A。荷官盯着旁边那几张牌看了一秒——然后把整个底池推给了*对面*。==r:同样一对A，你怎么输的？==

我见过太多次这一幕卡住牌局，没有哪条规则比它更常见：有人半站起身，荷官敲敲台面，全桌都在等一个说法。说法在这里。德州扑克里每一次平局，都由一套固定流程来定，它就压在[德州扑克牌型大小](/zh/blog/holdem-hand-rankings)下面一层——牌型排名告诉你*哪种牌*赢；平局规则告诉你当两手牌是同一牌型时，*哪个玩家*赢。

大部分活儿都由一张牌搞定：==**踢脚牌**==。完整定义——哪些牌型有踢脚牌、有几张——在[什么是踢脚牌](/zh/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp")里讲。这篇讲的是*流程*：同样一对、两对、三条、顺子和同花的平局到底怎么拆——以及所有人都会忘的那第五张牌。

---

### 平局速览

:::stripe
3 | 拆解德扑每一次平局的步骤数
1 | 两对牌里的踢脚牌位数
0 | 靠花色定胜负的平局数
:::

---

## 德州扑克平局怎么定胜负？三步顺序

**平局按固定顺序拆分：先比牌型，再比组成牌型的牌，最后从大到小比踢脚牌——如果五张牌还是全一样，就平分底池。**每一次摊牌都跑同样这三道检查：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 步骤 | 比什么 | 细节 |
|:---:|---|---|
| **1** | 牌型 | 更高的牌型总是赢（同花大过顺子，等等） |
| **2** | 组成牌型的牌 | 牌型相同？更大的对子／三条／顶张赢 |
| **3** | 踢脚牌，从大到小 | 第一处不同赢下底池 |

</div>

如果第 1 步就定了，你根本走不到第 2 步。如果第 3 步的牌用完了，说明两手牌完全一样，==g:底池平分==——之后筹码具体怎么分（单张零头、三方分、边池）是[平分底池规则](/zh/blog/holdem-split-pot-rules)的地盘。争吵都发生在第 2、3 步，所以我们就往那儿讲。

---

## 两个玩家同样一对，谁赢？

**第一张踢脚牌大的赢。一对带三张踢脚牌，从上往下一张一张比——第一处不同定底池。**

拿上面照片里那手牌：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**玩家 A：** A♠ K♦  ·  **玩家 B：** A♥ 9♣
**公共牌：** A♦ Q♠ 7♥ 3♣ 2♦

| 玩家 | 最佳五张 | 踢脚牌 | 结果 |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **赢** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | 输 |

</div>

同样一对A，于是踢脚牌按顺序捉对厮杀：==g:K 大过 Q——打完收工。==B 的 9 作为第二张踢脚牌还*在*手里，但比较根本走不到那一步。

注意 B 的第一张踢脚牌是**公共牌**上的 Q，而不是他手里的 9。==r:踢脚牌只有真正进了你的最佳五张才算数==——更大的公共牌会把你的底牌挤下去。这也是为什么你起手的第二张牌和那张A本身一样重要：这里 A-K 和 A-9 都是"一对A"，可只有一个赢（起手牌图表）。

---

## 各牌型的德州扑克平局规则

**每种牌型都有自己的比较顺序——有的比到踢脚牌，有的完全靠组成牌型的牌就定了。**标记显示踢脚牌会不会登场：

:::tiebreak
皇家同花顺|永远平局（平分底池）|-无踢脚牌
同花顺|只比最大的牌|-无踢脚牌
四条|四条点数 → 第五张牌|+踢脚牌
葫芦|三条点数 → 对子点数|-无踢脚牌
同花|五张全比，从大到小|+踢脚牌
顺子|只比最大的牌|-无踢脚牌
三条|三条点数 → 2 张踢脚牌|+踢脚牌
两对|大对 → 小对 → 踢脚牌|+踢脚牌
一对|对子点数 → 3 张踢脚牌|+踢脚牌
高牌|五张全比，从大到小|+踢脚牌
:::

最容易在桌上吵起来的三行：

- **三条用两张踢脚牌，先比大的那张。**公共牌 A♣ A♥ 7♦ 5♣ 2♠，手持 A♠ J♠ 的玩家做成 A-A-A-==g:J==-7，赢过 A♦ 10♦ 的 A-A-A-==r:10==-7——J 大过 10，共用的那张 7 根本没轮到比。
- **葫芦没有踢脚牌。**先比三条点数，再比对子：K-K-K-A-A 靠对子赢过 K-K-K-Q-Q。
- **同花比全部五张——==r:绝不看花色==。**A 高同花赢过 K 高同花；点数完全相同则平分。完整对决（以及那些骗人的公共牌）在[同花大还是顺子大](/zh/blog/holdem-flush-vs-straight)里。

---

## 两个玩家都是两对，谁赢？

**先比大对，再比小对，最后比那唯一一张踢脚牌——就按这个顺序。**两对正好带一张踢脚牌，所以对子比完之后，只剩一张牌可争。

公共牌 **K♦ 9♣ 9♠ 5♦ 2♥**，K♠ Q♦ 做成 K♠ K♦ 9♣ 9♠ ==g:Q♦==，K♥ J♥ 做成 K♥ K♦ 9♣ 9♠ ==r:J♥==。同样是 K 带 9，于是靠那唯一一张踢脚牌定胜负：==g:Q 大过 J。==

然后是决定真金白银的那个陷阱——==r:**踢脚牌作废（counterfeiting）**==：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:16px;padding:16px 20px;margin:20px 0">

**你：** 5♠ 4♠  ·  **对手：** A♣ K♦
**翻牌：** 5♦ 4♥ K♣ —— 你的两对（5 和 4）领先他那对 K
**转牌 9♠，河牌 9♥** —— 最终公共牌 5♦ 4♥ K♣ 9♠ 9♥

| 玩家 | 最佳五张 | 牌型 |
|--------|-----------|------|
| 你 | ==r:9♠ 9♥== 5♠ 5♦ K♣ | 9 和 5——你的 4 没了 |
| 对手 | K♦ K♣ 9♠ 9♥ A♣ | **K 和 9——赢** |

</div>

公共牌成对的两张 9 给*双方*都送了一个更好的第二对——你的 4 被==r:作废==了，唯一剩下能比的就是顶对：K 大过 9。翻牌时领先的那手牌，谁都没提升自己的牌，却输掉了底池。

---

## 能有更大的顺子吗？（轮子排在哪）

**能——顺子纯粹按最大的那张牌排，而 A 低的轮子是全游戏里最小的顺子。**

公共牌 4♦ 3♣ 2♠ K♦ Q♥，手持 A♠ 5♠ 的玩家做成轮子：5-4-3-2-A。手持 6♥ 5♥ 的玩家做成 6-5-4-3-2。==r:轮子里的 A 当作*最小*==，所以 A-2-3-4-5 坐在顺子阶梯的最底层——==g:6 高的顺子赢。==两个顶张相同的顺子完全一样，一样的牌就平分。

轮子有两件事*做不到*：A 不能从中间绕圈（Q-K-A-2-3 什么都不是），也不能同时当大又当小。同花遵循平行规则——五张全从大往小比，花色无关——细节在[同花 vs 顺子](/zh/blog/holdem-flush-vs-straight)。

---

## 德州扑克里第五张牌重要吗？

**重要——只要两手牌的前四张一样，第五张牌就是整个底池。**

公共牌 **A♥ K♣ Q♦ 4♣ 2♥**，A♠ 8♠ 对 A♦ 7♦。两人都是一对A。第一张踢脚牌：公共牌的 K——平。第二张踢脚牌：公共牌的 Q——平。第三张踢脚牌：==g:8 大过 7。==这手牌里字面意义上的第五张牌，刚刚决定了它上面所有的比较。

同样的逻辑跑在公共牌四条的底池上：所有人共用四张牌，所以第五张就是整场摊牌。它也跑在高牌和同花的平局里，那里每一张牌一直比到最后一张。第五张牌只在公共牌大过它的时候才不再重要——这是拼图的最后一块。

---

## 当你的踢脚牌不参与比较——以及底池平分

![信息图：公共牌 A-K-Q-J-10 对所有人都是最佳五张，所以 9-7 的手牌赢不了它，底池平分](/images/holdem-tiebreak-best5.webp "七取五的最佳五张：当公共牌本身已经是最好的牌，你的底牌就掉出去了")

**如果你的底牌破不了公共牌自己的最佳五张，它们就不参与——而当所有人都是这样时，底池平分。**

看上面的公共牌：A♠ K♥ Q♣ J♦ 10♠，Broadway（顺高）已经现成。你的 9♥ 7♠ *确实*能做成顺子——K-Q-J-10-9——但它比台面上那副 A 高顺子**更小**，所以你的最佳五张就是公共牌本身。别人也一样。

更微妙的版本是你的牌参与了、但踢脚牌没参与。公共牌 A♥ K♣ Q♦ J♠ 9♥：A♠ 3♠ 对 A♦ 2♦。两人都成一对A，而且两个踢脚牌位都由公共牌填满——每个玩家都是 A-A-K-Q-J。那 3 和那 2 是死重；最佳五张完全相同，==g:平分。==

![信息图：在 A-K-Q-J-9 的公共牌上，A-3 和 A-2 都是 A-A-K-Q-J，所以完全相同的两手牌平分底池](/images/holdem-tiebreak-split.webp "当最佳五张一张对一张全部相同，底池就分掉——花色永远不拆平局")

在河牌下注之前就看出这些牌面走向，本身就是一门功夫——那就是[读公共牌](/zh/blog/holdem-reading-the-board)。而牌一旦打平之后筹码怎么办——均分、单张零头、三方分、all in 边池——全在[平分底池规则指南](/zh/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp")里。

---

:::readnext[继续阅读]
/zh/blog/holdem-kicker | 什么是踢脚牌？ | /images/holdem-kicker-hero.webp
/zh/blog/holdem-split-pot-rules | 什么时候平分底池？ | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. 德州扑克平局怎么定胜负？**

A. 按固定顺序：先比牌型，再比组成牌型的牌（更大的对子、三条或顶张），最后从大到小比踢脚牌。如果五张牌点数全相同，底池平分——花色永远用不上。

**Q. 两个玩家同样一对谁赢？**

A. 最佳五张里踢脚牌更大的那个玩家赢。一对带三张踢脚牌，从上往下比——第一处不同赢下底池。三张全相同则平分。

**Q. 两个玩家都是两对谁赢？**

A. 先比大对，再比小对，最后比那唯一一张踢脚牌。A 带 3 赢过 K 带 Q，因为顶对在其他一切之前先比。

**Q. 德州扑克里第五张牌重要吗？**

A. 重要。当两手牌的前四张相同时，第五张牌决定整个底池——一对的第三张踢脚牌、同花最小的那张、公共牌四条旁的那张单张。它只在公共牌大过你底牌的时候才不再重要。

**Q. 德州扑克里 A 能当 1 用吗？**

A. 可以，但仅限 A-2-3-4-5 的顺子（"轮子"），此时它当作最小的牌——这也让轮子成为全游戏最小的顺子。A 不能从中间绕圈：Q-K-A-2-3 不是顺子。

**Q. 能有比对手更大的顺子吗？**

A. 能——顺子纯粹按最大的那张牌排，所以 6-5-4-3-2 赢过 A-5 的轮子，而 Broadway（A-K-Q-J-10）赢过所有顺子。顶张相同就是完全一样的顺子，平分底池。

**Q. 德州扑克里花色会决定平局吗？**

A. 不会。德州扑克里没有花色排名——如果两手最佳五张牌一张对一张点数全相同，无论花色如何底池都平分。

**Q. 两个玩家牌型完全相同会怎样？**

A. 底池均分——也就是"平分（chop）"。筹码具体怎么分、谁拿那张单数零头、边池怎么结算，都在[平分底池规则](/zh/blog/holdem-split-pot-rules)里讲。

---

## 要点回顾

1. 每一次平局都跑同一套流程：==**牌型 → 组成牌型的牌 → 踢脚牌 → 平分**==——没有例外，不看花色。
2. 踢脚牌只有==g:进了你的最佳五张==才算数——公共牌能替换它，双对的公共牌还能把你的两对整个作废掉。
3. 顺子按最大的牌排（轮子最小），同花比全部五张——当没有任何东西能分出两手牌时，底池对半分。

用[完整牌型大小](/zh/blog/holdem-hand-rankings)把整套顺序锁死，在[什么是踢脚牌](/zh/blog/holdem-kicker)里把那张单张本身搞懂，再到[平分底池指南](/zh/blog/holdem-split-pot-rules)里看清打平的底池到底怎么分。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">踢脚牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">什么是踢脚牌？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">那张单张本身——哪些牌型有、有几张</div>
  </a>
  <a href="/zh/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克牌型大小——从大到小</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">全部 10 种牌型，附概率、例子和牌面谜题</div>
  </a>
  <a href="/zh/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型对决</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">同花大还是顺子大？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">数学、牌面情形，以及这个头号困惑的平局情况</div>
  </a>
  <a href="/zh/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平分底池</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">什么时候平分底池？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 种平分情形，以及 3 种玩家误以为能赢的牌</div>
  </a>
</div>
`.trim(),
};
