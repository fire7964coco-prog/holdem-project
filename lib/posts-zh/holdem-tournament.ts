import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "没打过扑克锦标赛？一篇讲清它到底怎么运作",
  title: "德州扑克锦标赛怎么运作——买入、赛制与 Day 1 全流程",
  desc: "锦标赛到底怎么打？买入、盲注结构、奖金结构，freezeout / PKO / 卫星赛的区别，外加一份新手 Day 1 逐小时清单，让你第一次进场也能照着走完全程。",
  tldr: "在锦标赛里你交一笔固定买入换取筹码，盲注按计时器不断上涨，直到一名玩家赢下全部筹码。通常前 10–15% 的人进钱。赛制包括 freezeout、PKO、卫星赛和 deepstack——报名方式有直接买入、卫星赛晋级，或线上预注册。",
  category: "tournament",
  date: "2026-06-16",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "14 分钟",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "人头攒动的现场扑克锦标赛大厅，盲注钟显示 12,000/24,000，玩家们正在争夺一手牌",
  tags: [
    "德州扑克锦标赛怎么运作",
    "锦标赛结构",
    "锦标赛盲注结构",
    "锦标赛奖金结构",
    "锦标赛类型",
    "freezeout 锦标赛",
    "pko 扑克",
    "卫星赛",
    "锦标赛怎么打",
  ],
  content: `
我第一次走进现场扑克锦标赛，兜里揣着 $200，脑子里只有一个模糊的德州扑克概念，完全搞不懂什么叫"盲注级别"或者"bubble"。

四个小时后我出局了。但我已经彻底搞清了每个术语的意思、我为什么输、以及下次什么时候该回来。

这篇指南就是那天之前我多希望有人告诉我的一切——锦标赛结构到底怎么运作、你报的是哪种赛制、怎么报名才不显得一脸懵、以及 Day 1 逐个小时是什么感觉。

---

### 一图速览

:::stripe
10–15% | 通常能进钱的选手占比
20–40 分钟 | 现场赛每个盲注级别的时长
$100+$9 | 一笔典型买入的拆分——奖池 + 手续费
:::

## 什么是扑克锦标赛？（30 秒答案）

扑克锦标赛是这样一种比赛：所有人交同样的入场费（**买入 / buy-in**）、拿到同样多的起始筹码，然后一直打到有一个人赢下场上全部的筹码。

**一句话总结：**在现金局里你的筹码就是真钱，你随时可以离场。而在锦标赛里，你的最大损失恰好就是那笔买入——但你争的是一个大得多的奖池里的一份。

就这一个差别，从根上改变了筹码价值、盲注压力和策略。→ 完整对比：[锦标赛 vs 现金局——你该打哪种？](/zh/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp")

---

## 锦标赛结构——买入、手续费与起始筹码

报名时，你要交一笔买入。这笔钱分成两部分：

| $109 买入（写作 "$100+$9"） | 钱去哪了 |
|:---|:---|
| **$100** | → 奖池，所有参赛者共享 |
| **$9** | → 场馆收取的手续费（rake / 抽水） |

大型现场赛通常把买入的 8–10% 作为手续费（小型每日赛往往抽得更多）——这里是 $109 里的 $9，约 8.3%。这笔手续费怎么运作（以及为什么线上和现场不一样），在 rake 抽水怎么算 里讲得很细。

作为交换，你会拿到一份**起始筹码（starting stack）**——常见是 10,000 到 50,000 枚锦标赛筹码，在 Level 1 通常有 100–300 个大盲深。

**你的起始筹码没有现金价值。**一份 10,000 的筹码不等于 $10,000——它只是你的一条锦标赛命。真正重要的，是钱圈到来时你手里的筹码有没有比别人多。

每场锦标赛都会在一张**结构表（structure sheet）**上公布它的结构：起始筹码、盲注级别、每级时长、前注安排和奖金分配。报名时问工作人员要一份——它是全场最有用的一份文件。

---

## 锦标赛盲注结构——级别、前注与那口钟

这正是大多数新手指南略过、却是锦标赛里最重要的机械概念。

**盲注一开始很小，然后按计时器上涨——现场赛通常每 20–40 分钟涨一级。**

| 级别 | 盲注 | 前注 | 你的 10k 筹码 = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 个大盲 |
| 3 | 75 / 150 | 150 | 67 个大盲 |
| 6 | 200 / 400 | 400 | 25 个大盲 |
| 9 | 500 / 1,000 | 1,000 | 10 个大盲 |

注意：从 Level 1 到 Level 9，**你一枚筹码都没输掉**。但你的筹码却从 200BB 掉到了 10BB，因为盲注涨了。锦标赛就是这样逼出行动、并最终淘汰玩家的。

==g:经验法则：低于 20 个大盲，你就进入了 push-or-fold（要么推要么弃）的区域。低于 10 个大盲，你几乎任何一手能打的牌都必须在盲注把你啃光之前推出去。==

真到了那一步，具体的推牌范围都在 [短码策略——什么时候推、什么时候弃](/zh/blog/holdem-short-stack) 里。

**什么是前注（ante）？**过了早期级别，大多数锦标赛会加一个"前注"——每手牌在盲注之外额外强制收取的一注。在现代大多数现场赛里，这是一个"大盲前注（big blind ante）"，等于一个大盲，由大盲位玩家代替整桌支付（这也是为什么上表里前注那一列和大盲相等）。它把底池做大、加快节奏。前注一上，你的筹码缩得更快。

对盲注还完全陌生？先从 [小盲和大盲到底是什么](/zh/blog/holdem-blind-meaning) 看起——上面那些"BB"数字都会一下子对上号。

---

## 每场锦标赛都会经历的 4 个阶段

### 阶段 1 — 早期级别（100–200 BB 深）
你有空间打牌。投机牌、set-mining（凑暗三条）、看翻牌——都合理。大多数新手在这里打得太紧。盲注很便宜；先摸清这桌人。

### 阶段 2 — 中期阶段（30–60 BB）
到这时前注通常已经上了。筹码压力开始显现。短码玩家开始推。这里是大部分选手被淘汰的地方。

### 阶段 3 — Bubble（泡沫圈）
最煎熬的阶段。再淘汰一个人，剩下的所有人就都**进钱**了（ITM = In The Money，进入钱圈）。短码开始缩手缩脚，大码开始欺压。这里聪明的打法能实打实增加权益，一个底池都不用赢——[bubble 值得单独一篇指南](/zh/blog/holdem-bubble)。

### 阶段 4 — 决赛桌（Final Table）
通常还剩 6–9 人。每淘汰一个人，奖金就大幅跳涨。[ICM（独立筹码模型）](/zh/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp") 主宰着这里的决策——筹码 EV 和真金白银 EV 会大幅背离。

---

## 锦标赛类型——Freezeout、PKO、卫星赛、Deepstack 及其他

| 赛制 | 怎么运作 | 适合谁 |
|:---|:---|:---|
| **Freezeout** | 一次买入，不可重买。破产 = 出局。 | 新手——成本固定 |
| **重买 / 重进（Rebuy / Re-entry）** | 破产后（在早期级别内）可再交钱 | bankroll 更厚的激进型玩家 |
| **赏金 / KO（Bounty / KO）** | 每淘汰一人赢一份固定现金赏金 | 打行动的人——每次击杀多一份收入 |
| **PKO（渐进式击杀）** | 赏金随每次击杀增长——一部分付给你，一部分加到你头上 | 高波动、大上限的玩家 |
| **Deepstack** | 起始筹码更大（通常 100–200BB+），级别更慢 | 想多打翻后的人 |
| **卫星赛（Satellite）** | 奖品是更大赛事的入场资格，不是现金 | 瞄准大赛的预算型玩家 |
| **MTT** | 多桌锦标赛——多张桌子的大场 | 任何人——最常见的赛制 |
| **SNG（Sit & Go）** | 坐满即开（没有固定开赛时间）——通常 6–9 人 | 快速一局，不用看时间 |

**给新手：**从一场 **Freezeout MTT** 开始——成本已知、规则简单、没有重买决策让你纠结。

在锦标赛日程表上你最常见的三个赛制名字，值得好好下个定义：

### 什么是 Freezeout 锦标赛？

freezeout 锦标赛给每名玩家恰好一次买入。输光筹码你就出局——不能重买、不能重进。它是最原始的锦标赛赛制，也是最适合新手的，因为从你报名那一刻起，你的总成本就固定了。

### 什么是 PKO 扑克？（渐进式击杀）

PKO（渐进式击杀）是一种赏金锦标赛，通常每笔买入的大约一半进入常规奖池，另一半变成扣在那名玩家头上的赏金。当你淘汰某人时，你通常立刻拿到他一部分赏金的现金，其余的加到你自己的赏金上——你越赢，就成了越大的靶子。具体的拆分因平台和赛事而异；50/50 常见但不是通例，所以要查大厅或结构表。（一篇完整的 PKO 策略指南很快会加入这个专题。）

### 什么是 Deepstack 锦标赛？

deepstack 锦标赛让你带着相对盲注多得多的筹码开局——通常 100 个大盲以上，常常 200BB+——而且一般配上更长的盲注级别。更多筹码加更慢的钟，意味着更多翻后打法、更多从失误里恢复的空间，以及更长的比赛日。

**那重买和 add-on 呢？**在重买赛里，你可以在设定好的早期时间窗内破产后再交钱；add-on 则是一次性的可选加购筹码，通常在那个时间窗关闭时提供。在那之后，赛事就按 freezeout 的方式往下打。

---

## 什么是卫星赛（Satellite）？

卫星赛是一种更小的锦标赛，它的奖品不是现金——而是一张**通往一场更大、更贵赛事的入场券**。

**举例：**
- WSOP 主赛买入：**$10,000**
- 卫星赛买入：**$500**（20 人）
- 奖品：主赛的 **1 个席位**

你不用花 $10,000，而是在一场 $500 的锦标赛里和另外 19 人竞争。一个人赢下那个价值 $10,000 的席位。

**链式卫星赛**能把门槛压得更低。$5 超级卫星 → $55 资格赛 → $215 赛事 → $1,050 主赛。很多大赛的玩家，都是通过一条卫星赛链，用直接买入的零头挤进来的。

==g:卫星赛策略和普通锦标赛打法不一样——一旦你的筹码足够锁定一个席位，就别再冒险了。哪怕好牌也弃掉，免得在 bubble 上破产。==

---

## 怎么报名一场锦标赛——3 种方式

### 方式 A：赌场现场直接买入（最简单）
1. 找到扑克室的报名台（大型赛事则找锦标赛台）
2. 出示**有效带照片证件** + 需要的话再加会员卡
3. 用现金、筹码或刷卡付买入
4. 领取你的座位卡（桌号 + 座号）
5. 走到你那桌，把座位卡交给荷官，领取你的筹码
6. 打第一手牌之前先数一遍起始筹码——数错是常有的事

### 方式 B：线上预注册
大多数大型现场赛事让你提前在线报名：
- 在赛事平台上开个账号（比如 WSOP 用 Bravo Poker Live，EPT/APPT 赛事用 PokerStars Live app）
- 在线支付买入
- 到场馆 → 核验证件 → 在自助机上打印座位卡或到台前领取
- 省掉排队报名——大型赛事值得这么做

### 方式 C：卫星赛晋级
- 在线上（PokerStars Power Path、GGPoker SuperSatellites）或现场找卫星赛
- 赢下卫星赛 → 拿到目标赛事的席位券
- 到主赛报名台 → 出示席位券 + 证件 → 领取座位卡

**报名通常在开赛前 1–3 小时开放。**对大型赛事，提前一天在线报名以锁定席位。

在亚洲打？看 [APT 仁川 2026 指南](/zh/blog/apt-incheon-2026-guide)，里面有一场真实赛事的日程、买入和报名流程。

---

## 锦标赛怎么打——按阶段拆解的策略

一篇文章教不了完整的锦标赛策略——那是专题指南的活——但下面是每套制胜方案都挂在其上的、按阶段的骨架：

**早期级别（100BB+）：**打紧、看位置的牌，用那些能爆掉大对子的牌便宜地看翻牌。一份自律的 [起手牌表](/zh/blog/holdem-starting-hands-chart) 能挡掉大多数新手灾难。别在第一个小时就把筹码诈唬光——Level 1 没人会弃牌。

**中期阶段（30–60BB）：**前注让每个底池都值得一争。后位开牌放宽、偷盲、更常防守你的大盲，并开始盯着你这桌谁是短码。

**短码（20BB 以下）：**push-or-fold 接管全局——这里的数学基本已经被解出来了，靠猜是要花真金白银的。到 [短码策略](/zh/blog/holdem-short-stack) 里学推牌范围。

**Bubble 和决赛桌：**求生数学盖过筹码数学。奖金压力改变了你能打哪些牌——上面阶段那节里链接的 bubble 和 ICM 指南，正好讲清了具体怎么做。

---

## Day 1 会发生什么——逐个小时

这是别的指南不会告诉你的。这里是一场现场 $300 freezeout、中午 12 点开赛的、真实的 Day 1 时间线：

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">Day 1 时间线 — $300 Freezeout，10,000 起始筹码</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">10:30am</div>
<div style="color:var(--foreground)">报名开放。出示证件、付钱、领座位卡。找到你那桌。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">12:00pm</div>
<div style="color:var(--foreground)">发牌开打。Level 1：盲注 25/50。你有 200BB。打探索性的牌。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">1:00–3pm</div>
<div style="color:var(--foreground)">Level 2–4。迟到报名仍开放。人数增长。有些玩家已经破产。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~3:30pm</div>
<div style="color:var(--foreground)">迟到报名关闭。公布最终参赛人数。确认奖池。前注上场。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">~5:00pm</div>
<div style="color:var(--foreground)">晚餐休息（通常 1 小时）。约 40% 的人已被淘汰。合桌。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:var(--primary);font-weight:700">6–9pm</div>
<div style="color:var(--foreground)">Bubble 临近。开始 hand-for-hand（逐手同步）打法。压力到顶。一破产 = 所有人进钱。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">9–11pm</div>
<div style="color:var(--foreground)">ITM——钱圈泡沫破裂。剩下的玩家装袋封存筹码，或今晚就打到决赛桌。</div>
</div>
</div>
</div>

---

## 锦标赛奖金结构——谁拿多少

**典型结构：**前 10–15% 的选手进钱。

| 参赛人数 | 进钱人数 | 最低奖（典型） | 冠军（典型） |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1.5–2 倍买入 | 奖池的 25–30% |
| 500 | ~60 | 1.5–2 倍买入 | 奖池的 20–25% |
| 2,000 | ~250 | 1.7–2.2 倍买入 | 奖池的 13–18% |
| 10,000 | ~1,200 | 1.5–2 倍买入 | 奖池的 8–12% |

**真实案例（WPT Seminole Rock 'N' Roll Poker Open Championship 2024，$3,500 买入，1,435 人参赛）：**
- 奖池：$4,592,000（每笔买入的 $3,200 进奖池——其余是手续费）
- 进钱人数：181（约占全场 12.6%）
- 最低奖：大约 1.5 倍买入
- 冠军：$662,200（约占奖池的 14%）

奖金结构总会在锦标赛开赛前公布。报名时问一份**结构表（structure sheet）**——它列出盲注级别、前注、起始筹码和奖金分配。

---

## 锦标赛术语表——Day 1 你会听到的词

这 13 个术语覆盖了你在桌上会听到的大部分内容。想要完整的 A 到 Z，看 poker 术语表。

| 术语 | 什么意思 |
|------|--------------|
| **ITM** | In The Money——你已经进入了拿钱的名次 |
| **Bubble** | ITM 之前的那个阶段——再淘汰一人所有人就进钱 |
| **Hand-for-hand** | Bubble 期间所有桌一次只打一手牌，防止拖延 |
| **Structure sheet** | 列出盲注级别、前注和奖金的官方文件 |
| **Chip leader** | 筹码最多的玩家 |
| **Short stack** | 相对盲注筹码很少的玩家 |
| **Shove / JAM** | all in（把你整份筹码推进中间） |
| **Late reg** | 迟到报名窗口——开赛后仍可入场 |
| **Re-entry** | 破产后再买入（仅限迟到报名窗口内） |
| **Satellite** | 奖品是更大赛事席位的资格赛 |
| **PKO** | 渐进式击杀——赏金会增长的赏金赛 |
| **ICM** | 独立筹码模型——衡量锦标赛筹码价值的数学框架 |
| **Min-cash** | 最低的拿钱名次——进钱能拿到的最少金额 |

---

## 第一次锦标赛清单

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:var(--primary);margin-bottom:14px">出门之前</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>有效带照片证件</strong>——护照或驾照。没有例外。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>买入 + 额外 20%</strong> 现金——有些场馆不收卡</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>需要的话带上<strong>赌场会员卡</strong>（比如 WSOP 的 Caesars Rewards）</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>如果你在线预注册过，带上<strong>报名确认邮件</strong></span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>穿舒服的衣服——锦标赛要打 6–12 小时。带件外套（牌室很冷）。</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:var(--primary);margin:16px 0 10px">到了场馆</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>提前 30–45 分钟到场。报名队伍可能很长。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>打第一手牌之前先数你的起始筹码。少了立刻告诉荷官。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>问一份结构表——搞清前注什么时候上、晚餐休息什么时候。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>一手牌进行中不许在桌上看手机</strong>——大多数牌室会为此罚你。</span></div>
</div>
</div>

---

:::readnext[继续阅读]
/zh/blog/holdem-tournament-vs-cash-game | 锦标赛 vs 现金局 | /images/tournament-table-action.webp
/zh/blog/holdem-bubble | 扑克里的 Bubble 是什么？ | /images/holdem-bubble-hero.webp
/zh/blog/apt-incheon-2026-guide | APT 仁川 2026 指南 | /images/apt-incheon-2026-guide-hero.webp
:::

## FAQ

**Q. 一场扑克锦标赛要打多久？**

A. 本地赌场的每日赛通常要打 4–8 小时。像 WPT 冠军赛这样的大型系列赛事要打 4–6 天、分成多个比赛日——而 WSOP 主赛从它的 Day 1 分组一路打到决赛桌，接近两周。报名时问一份结构表——它会根据盲注级别时长和起始参赛人数，告诉你预期的比赛日长度。

**Q. PKO 和普通赏金赛有什么区别？**

A. 在普通赏金（击杀）赛里，每名玩家带着一份固定赏金——淘汰某人你就拿到全额，赏金永不变化。而在 PKO（渐进式击杀）里，赏金会增长：你通常拿到被淘汰玩家一部分赏金的现金，其余的加到你自己头上的赏金里。这就让 PKO 里的筹码领先者随赛事推进成为越来越值钱的靶子。

**Q. 重买（rebuy）和 add-on 的规则是什么？**

A. 在重买赛里，破产后（有时是筹码跌破某个门槛后）你可以再交一次入场费，但只限于设定好的重买期内——通常是最初的几个盲注级别。add-on 则是一次性的可选加购筹码，通常在重买期结束时向所有人提供，不看筹码量。那个窗口一关，赛事就按 freezeout 往下打。具体规则因场馆而异，所以查结构表。

**Q. 在家办扑克锦标赛合法吗？**

A. 这取决于你所在的司法辖区。在很多地方，只要主办方不抽 rake、不切入场费、也不从中牟利（除了作为玩家参与），私人社交家庭局就是合法的——所有钱都回到玩家手里。收取场地费、抽取奖池的一定比例、或公开招揽，通常就是把一场家庭局变成非法赌博的界线。各国、各州法律差异很大，办之前先查你当地的规定。

**Q. 扑克里的 ITM 是什么意思？**

A. ITM = "In The Money"（进入钱圈）。你已经到了一个能保证拿钱的名次。在一场 200 人、支付 25 个名次的锦标赛里，一旦 175 人被淘汰、只剩 25 人，你就 ITM 了。你的最低奖通常是买入的 1.5–2 倍。

**Q. 锦标赛开赛后还能加入吗？**

A. 可以，在迟到报名窗口内——通常是最初几个盲注级别，往往是开赛后两到四个小时。你仍然拿到完整的起始筹码，但由于盲注已经涨了，你坐下时的大盲数会比早报名的人少。迟到报名一关，就不再允许新入场。

**Q. 能提前离开锦标赛并把筹码留着吗？**

A. 不能。和现金局不同，锦标赛筹码没有现金价值，也不能中途兑现。如果你走人，你的筹码会留在场上继续付盲注和前注，直到它们被榨光。只有当你打进拿钱（ITM）的名次，你才会拿到钱。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">深度对比</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">锦标赛 vs 现金局</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">筹码价值、上涨的盲注、ICM——哪种赛制适合你</div>
  </a>
  <a href="/zh/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">起手牌表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">早期级别该打哪些牌</div>
  </a>
  <a href="/zh/blog/holdem-short-stack" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">短码</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">短码策略</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲注逼近时的 push-or-fold</div>
  </a>
  <a href="/zh/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">从这里开始</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克新手规则</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">先把基础打牢</div>
  </a>
  <a href="/zh/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">盲注</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">扑克里的盲注是什么？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲注级别从这里开始——SB、BB 和前注</div>
  </a>
  <a href="/zh/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">位置</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">扑克桌位置详解</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">为什么你的座位主宰每个锦标赛决策</div>
  </a>
</div>
`.trim(),
};

export default POST;
