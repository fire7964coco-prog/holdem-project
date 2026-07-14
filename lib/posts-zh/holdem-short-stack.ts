import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-short-stack",
  title: "德州扑克短码怎么打——按筹码深度的 push/fold 全攻略",
  seoTitle: "德扑短码怎么打（push/fold 推或弃）",
  desc: "锦标赛里被打成短码，还在 min-raise 慢慢流血？按筹码深度学 push/fold——15、10、5 个大盲各该什么时候推，M值五个分区怎么划，为什么后位推得更宽、跟注却要更紧，还有泡沫圈上那个反直觉的 ICM 一起讲清楚。",
  tldr: "短码（大约 15–20 个大盲以下）没法打正常的翻后扑克，所以要切到 push/fold：first-in 就直接 all in 来保住你的 fold equity，永远别开池平跟、也别 min-raise 之后又弃牌。后位推得更宽，跟注范围要比推注范围更紧，别为了「等一手好牌」把筹码盲到见底——fold equity 才是你的武器，一旦跌破约 8 个大盲它就没了。",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 分钟",
  emoji: "📉",
  image: "/images/holdem-short-stack-hero.webp",
  imageAlt: "绿色桌布上，一小摞锦标赛筹码紧挨着一大摞，背后是锦标赛计时钟——短码牌手不得不 all in 或弃牌的那一刻",
  tags: ["短码策略", "短码怎么打", "push fold 策略", "push fold 图表", "M值 德州扑克", "短码 德州扑克", "德州扑克 all in 策略", "fold equity"],
  content: `
我从「还活着」到「出局」最快的一次，是那晚我拿着一个 12 个大盲的码量一直 min-raise，每次被再加注就弃牌，每一圈漏掉一个半盲注，直到我短得吓不住任何人。等我终于推的时候，我只剩 4 个大盲，还被两个人跟了。==我不是运气差——我是把短码当深码来打了。== 一旦你的码量变小，整个游戏就变了，懂新规则的人会主宰这张桌子。

==短码只有一个任务：first-in 就先 all in，保住你的 fold equity，在盲注替你决定之前挑对时机。== 这就是 push/fold 扑克，也是锦标赛里最好学的优势——一套你码量一掉下来就能立刻套用的干净规则。这篇是锦标赛数学三部曲的实战章：[ICM](/zh/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") 是理论，[泡沫圈](/zh/blog/holdem-bubble "thumb:/images/holdem-bubble-hero.webp") 是那个局面，而短码打法就是你在 [锦标赛](/zh/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") 里真正做出的动作。

---

### 短码规则速览

:::stripe
first-in 就推 | 保住你的 fold equity
跟得比推更紧 | 跟注范围紧于推注范围
~8bb | 跌破这里 fold equity 就消退——更早行动
:::

---

## 德州扑克里什么是短码？（多少个大盲算短码）

**短码就是任何小到没法打正常翻后扑克的码量——大致在约 20–25 个大盲以下，而从大约 15 个大盲往下 push/fold 就接管了。** 这些不是硬性的分界线，而是你的选择开始崩塌的区间。有 60 个大盲时，你可以加注、跟注、漂浮、在翻后把人打花。只剩 12 个时，这些大都消失了——你基本上是在翻前就决定要 all in 还是弃牌。

下面是按筹码深度的实战地图（无 ante、满桌的近似值——有 ante 会把每一档都往下压一点）：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 码量 | 打法模式 | 你的主武器 |
|:--|:--|:--|
| 25bb+ | 还是真正的翻后游戏——加注/弃牌，偶尔跟注 | 可打性 |
| 20bb | 加注或弃牌；对开池和平跟者 re-shove all in | 再推的杠杆 |
| 15bb | push/fold 接管——first-in 推，主要来自后位 | fold equity |
| 10bb | 纯 push/fold；first-in 就推一个宽而合理的范围 | fold equity（依然很强） |
| ≤5bb | 现在只有推或弃——fold equity 在消退，赶紧推进去 | 任何能打的牌，要快 |

</div>

最大的错误就是不知道自己在哪一行。一个 12 个大盲的码量还在一直开池又弃牌，就是在打 40 个大盲的游戏，每一圈亏掉一点，直到变成没有任何杠杆可用的 ≤5bb 那一行。

---

## 为什么短码打 push/fold：讲清 fold equity

**first-in 就 all in 之所以管用，是因为它把对手逼进一个孤注一掷的抉择，让他们弃掉那些面对一个小加注本会乐意打的牌——而那些弃牌就白白帮你赢下了盲注和 ante。** 这就是 ==fold equity==：每次所有人都弃牌时你赚到的利润，牌都还没亮。

想想你短码时一个 min-raise 会做什么：它投进了筹码，招来一次你跟不起的再加注，还让对手廉价地兑现他们的胜率。一次 ==推（shove）== 做的正相反。它说的是「拿你的锦标赛命来跟，不然就弃」，而大多数牌都会弃。当你足够频繁地不战而收下盲注和 ante 时，==就算被跟又输的那几次，你也依然盈利==，因为那些白拿的底池早就把它们赚回来了。

问题在于 fold equity 会==随着你码量缩水而衰减==。在 12–15 个大盲时，对手弃牌很多——你的推很吓人。到大约 8–10 个大盲它开始消退，到 4–5 个时对手拿到的价格好到几乎什么牌都跟——你的 fold equity 基本没了。这正是别等的全部理由：==趁你的 all in 还吓得住人时就推==，而不是等之后。

---

![一小摞筹码被推着 all in 越过桌布，一个更大的码量正在权衡是否跟注，背后锦标赛计时钟亮着](/images/holdem-short-stack-shove.webp "短码 push/fold：all in 逼出一个是或否的抉择，所有人都弃时就赢下盲注")

## M值（Harrington 分区）：绿、黄、橙、红、死

**M值衡量的是你靠弃牌还能撑几圈——你的码量除以一整圈盲注和 ante 的成本——它把你的码量分进五个区。** 由 Dan Harrington 推广，==M = 你的码量 ÷（小盲 + 大盲 + 每圈所有 ante）==。它回答的是「我在这儿啥也不干能坐多久？」——而它越小，你就越必须行动。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 分区 | M值 | 大致（无 ante） | 怎么打 |
|:--|:--:|:--:|:--|
| 🟢 绿 | 20+ | ~30bb+ | 全套武器，打正常扑克 |
| 🟡 黄 | 10–20 | ~15–30bb | 收紧，开始找推的机会 |
| 🟠 橙 | 6–10 | ~9–15bb | push/fold；first-in 施压，偷盲 |
| 🔴 红 | 1–5 | ~1.5–8bb | 任何合理的牌都推或弃 |
| ⚫ 死 | 低于 1 | 低于 ~1.5bb | 任意两张牌就推，下一个能打的位置 |

</div>

**M 怎么换算成大盲：** 没有 ante 时，一圈的成本是小盲加大盲——大约 1.5 个大盲——所以 ==M ≈ 你的大盲数 ÷ 1.5==。M 为 10 大约是 15 个大盲；M 为 5 大约是 7–8 个。加上 ante，每圈成本更高，所以同样的大盲码量 M 会*更低*——这正是为什么有 ante 的盲注级别会更早逼你行动。现代牌手通常就直接数大盲，但 M 是换个单位的同一个概念，而且它会自动把 ante 算进去。Harrington 后来又加了「有效 M」（按桌上有几个人调整），因为短手桌会更快把你盲光。

---

## 什么时候 all in：按筹码深度和位置的 first-in 推

**当你是第一个进池的人、又是短码时，你的抉择就是推或弃——而推得多宽，取决于你的码量，同样也取决于你的位置。** 你的位置越靠后，身后还剩下能醒来一手大牌的人就越少，盲注相对你码量的价值也越大——所以 ==你的推注范围会朝按钮位剧烈变宽==。

- **前位，12–15bb：**最紧。整桌人都在你身后，所以推一个强而基本线性的范围，其余全弃。
- **关煞位和按钮位，10–15bb：**宽得多。只剩一两个人要行动，你推是为了偷盲注和 ante，很多在枪口位轻松弃掉的牌你都可以推。
- **小盲位，任何短码：**所有 first-in 里最宽的——只有大盲能跟，而你已经有钱在池里了。短码在小盲位，弃牌往往才是错误。
- **约 6bb 以下：**位置没那么重要了。在你的 fold equity 消失之前，你得对着几乎任何人把筹码推进去；抓下一个合理的位置，而不是干等一个完美的。

注意这避开的陷阱：==一个只在每个位置都推超强牌的短码会被盲光==。盲注和 ante 才是奖品，偷下它们是短码大部分的利润所在。

---

## 推 vs 跟一个推：两个不同的范围

**你 first-in 的推注范围，和你跟别人 all in 的范围，不是一回事——而且跟注范围要紧得多。** 这是大多数新手漏掉的区分，也害掉了不少锦标赛。

当你 ==first-in 推== 时，你有两种赢法：所有人都弃（fold equity），或者你被跟、你的牌扛住。当你 ==跟== 一个推时，你只有一种赢法——你的牌得够好才行，因为没有 fold equity 可收了。所以：

- **first-in 推：**宽，尤其在后位——你有一部分是在打对方弃牌。
- **跟一个推：**紧——你需要一手能打赢推者*范围*的牌，而不只是随便一手牌。拿弱 A 或小对子这种牌「因为大概是掷硬币」就跟下去，是个典型的漏洞，因为在锦标赛里用一次掷硬币去赌出局是笔烂买卖（见 [什么时候弃牌](/zh/blog/holdem-when-to-fold)）。

记住一句话：==做那个推的人，别做那个跟的人。== first-in 施压才是短码利润所在；英雄跟 all in 是短码送命的地方。

---

## 怎么用 push/fold 图表（以及它的局限）

**push/fold 图表告诉你在给定筹码深度下哪些牌该推或该跟，依据的是 Nash 均衡——但它是基线，不是圣经，会随 ante、桌子大小和 ICM 而变。** 一张图表通常分两半：一张**推者（pusher）**图（first-in 该推什么）和一张**跟者（caller）**图（该拿什么跟一个推），正对应上面那个推 vs 跟的划分。

用它们来建立直觉，别当成自然法则：

- **它们假设特定条件。**标准 Nash 图忽略 ante 和 ICM；加上 ante 你的推变宽，加上 [泡沫圈/ICM 压力](/zh/blog/holdem-bubble) 你的跟变得紧得多。
- **它们是一个单挑 / 只算盲注的模型。**真实局面里还有多个人要行动、有读牌、有一张图看不到的名次奖金跳档。
- **可靠的要点是「形状」**，而不是具体那张牌：后位推更宽，跟得比推更紧，码量越掉就推得越多。真要一个真实 ICM 或泡沫局面下的确切数字，就把你的码量和奖金结构塞进 [ICM 计算器](/calculator)，别去信一张印出来的范围表。

*（给好奇的你一个细节：在 10–15 个大盲时，强手有时会用超强牌混入一个小 min-raise，来诱使被压制的牌推进来。它可能比纯推赚得更多——但那是个进阶附加项。push/fold 才是可靠的框架；先把它练精。）*

---

## 泡沫圈上的短码：ICM 反直觉

**这里有反直觉的一点：在泡沫圈上，一个明确的短码往往比中等码有更低的 bubble factor——所以你可以赌得更多，但只能靠推，不能靠跟。** 所有人都以为短码压力最大。按数学不是这样：你本来就很可能出局，而翻倍对你帮助巨大，所以你的风险溢价比那些被困住的中等码更低（[泡沫圈指南](/zh/blog/holdem-bubble) 拆解了为什么中等码才是真正的囚徒）。

这在实战里意味着：

- **继续 first-in 推**，去偷那些为了求生什么都弃的中等码——他们是完美的目标。
- **如果别人比你更短，你可以等。**如果钱线泡沫上有两个人筹码比你少，你可以弃掉边缘位置，让他们先出局，白白往上爬名次——但前提是你真的有筹码可以等，而不是你自己就是最短的那个。
- **别把 ICM 当成什么都弃的借口。**为了「溜进最低钱圈」而盲到没有 fold equity，是拿整个锦标赛去换它最小的那份奖金。尊重奖金跳档，然后回到积累筹码上来。

「我的 bubble factor 到底低多少」背后真正的数学在 [ICM 指南](/zh/blog/holdem-icm) 里——真到关键时刻，就把你的确切局面跑一遍 [计算器](/calculator)。

---

## 毁掉你锦标赛的 5 个短码错误

1. **开池平跟（open-limp）。**它交出了你的 fold equity，还把一个你翻后没法打的底池吹大。短码要加注或弃牌——而且那个加注通常就是一次推。
2. **拿垃圾牌 min-raise 之后又弃牌。**加注四分之一的码量再向一个推弃牌，是两头不讨好。如果一手牌不够好到能 all in，它就不够好到能加注。
3. **跟 all in 跟得太宽。**你的跟注范围必须比推注范围更紧。「大概是个掷硬币」正是短码送命的方式——一次赌出局的掷硬币是笔亏钱买卖。
4. **把筹码盲到见底。**为了等一手 AA 一直等到只剩 3 个大盲，是把那份让推有利可图的 fold equity 扔掉了。趁你的 all in 还吓得住人时就行动（通常，在你跌破约 8–10bb 之前）。
5. **无视位置。**只在按钮位推超强牌，或在枪口位推得太宽，两种都在漏筹码。后位放宽，前位收紧。

避开这五个，你就已经赢过场上大多数人了——他们会把短码当深码打，一直打到自己出局。

---

:::readnext[继续阅读]
/zh/blog/holdem-bubble | 泡沫圈该怎么打 | /images/holdem-bubble-hero.webp
/zh/blog/holdem-icm | ICM 详解——为什么筹码不等于钱 | /images/holdem-icm-hero.webp
:::

## FAQ

**Q. 多少个大盲算短码？**

A. 大致来说，约 20–25 个大盲以下算「短」，而 push/fold 打法从大约 15 个大盲往下接管，到 10 个时基本上就是纯推或弃了。这些是区间，不是硬规则——ante、桌子大小和 ICM 都会挪动它们。关键点是：在约 15 个大盲以下，你基本上是在翻前决定要不要 all in，而不是在打翻后扑克。

**Q. 什么是 push/fold 策略？**

A. push/fold 是一种短码策略：当你第一个进池时，你唯一的选择就是 all in 或弃牌——不平跟，不小加注。推能保住你的 fold equity（对手弃牌，你赢下盲注），也避免了拿一个小到没法周旋的码量在翻后被打花。

**Q. 短码时该不该平跟（limp）？**

A. first-in 时几乎永远不该。开池平跟交出 fold equity，还搭起一个你翻后没法驾驭的底池。短码时，标准打法是加注或弃牌，而拿着 15 个大盲或更少时那个加注通常就是一次 all in。（拿一个小得可怜的码量在小盲位跟在其他平跟者身后补齐，是一个罕见的例外。）

**Q. 短码时 min-raise 有对的时候吗？**

A. 作为新手的默认打法，没有——min-raise 之后又弃牌是个典型的漏洞。作为在 10–15 个大盲时的进阶动作，强手有时会用超强牌 min-raise 来诱使更差的牌推进来。先学会可靠的 push/fold；等那个变成本能了，再加上 min-raise 这道皱褶。

**Q. 德州扑克里的 M值是什么？**

A. M值是你的码量除以一圈的成本（小盲 + 大盲 + ante）——你靠弃牌还能撑几轮。Harrington 的分区是绿（20+）、黄（10–20）、橙（6–10）、红（1–5）和死（低于 1）。你的 M 越低，就越必须抓推或弃的位置。没有 ante 时，M 大约是你的大盲数 ÷ 1.5。

**Q. 什么是 fold equity，它为什么会缩水？**

A. fold equity 是对手向你的下注或推弃牌时你赚到的利润。当你短码并 all in 时，fold equity 就是你的主武器——那些你白拿的盲注和 ante。它会随着你码量下降而缩水，因为对手跟注的价格变得更好；跌破约 5 个大盲时，他们跟得太宽，你的 all in 几乎逼不动任何人弃牌。

**Q. 短码策略在现金局里不一样吗？**

A. 是的。在现金局你随时可以补码或加买到满码，而且通常没有 ante 或奖金跳档，所以短码只是一个你靠重新加码就能修复的临时状态——不是一种打法模式。锦标赛的短码 push/fold 之所以存在，是因为你后期不能重买，而且 ICM 让生存变得有价值。这篇讲的是锦标赛。

---

## 要记住的 3 件事

1. **first-in 就推，保住你的 fold equity。**永远别开池平跟，也别 min-raise 之后又弃牌。那些白拿的盲注和 ante 是短码大部分的利润。
2. **跟得比推更紧。**两个不同的范围——first-in 的推很宽（对方弃你也赢）；跟很紧（你只在摊牌时赢）。
3. **在你的 fold equity 死掉之前行动。**别为了等一手牌把筹码盲到见底。后位放宽你的推、前位收紧，趁你的 all in 还吓得住人时把筹码推进去。

短码打法是锦标赛数学变成肌肉记忆的地方——把它和 [ICM](/zh/blog/holdem-icm) 及 [泡沫圈策略](/zh/blog/holdem-bubble) 配在一起，你就不只知道该*怎么*推，还知道它*什么时候*最要紧。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-bubble" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">泡沫圈该怎么打</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">你的短码推在哪里最要紧</div>
  </a>
  <a href="/zh/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM 详解</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么生存能胜过筹码</div>
  </a>
  <a href="/zh/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">什么时候该弃牌</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么短码跟到底是个漏洞</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">免费工具</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM 计算器</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">算出你真实的推/跟位置</div>
  </a>
</div>
`.trim(),
};

export default POST;
