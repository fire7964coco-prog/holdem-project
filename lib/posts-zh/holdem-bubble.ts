import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-bubble",
  title: "德州扑克 bubble 怎么打——大码、中码、short stack 分别打法",
  seoTitle: "德扑 bubble 泡沫圈怎么打（按码量拆开讲）",
  desc: "到了 bubble 泡沫圈，活下来比拿筹码更重要，正确打法整个反过来：跟注收紧、推牌保持宽。大码、中码、short stack 各自怎么打，为什么最被困死的是中码而不是短码，外加 bubble factor 怎么算、卫星赛为什么连口袋 A 都要弃。",
  tldr: "bubble 泡沫圈就是进钱前的那一段——再淘汰一个人，其余所有人就都进钱了。因为出局什么都拿不到，活下来的价值就超过了你能赢到的筹码——所以跟注范围收得很紧，而 shove（推）依然要宽。大码进攻，中码最被困死（不是 short stack），而在卫星赛的 bubble 上，一旦你的席位锁定，什么都弃，连口袋 A 都弃。",
  category: "tournament",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 分钟",
  emoji: "🫧",
  image: "/images/holdem-bubble-hero.webp",
  imageAlt: "锦标赛牌桌上，钱圈 bubble 时一小摞筹码和一座高耸的大码隔桌相对，背景是奖金阶梯——活下来比筹码更值钱的那一刻",
  tags: ["扑克 bubble", "bubble 怎么打", "德扑 bubble 策略", "bubble factor", "short stack bubble", "钱圈 bubble", "卫星赛 bubble", "hand for hand 扑克"],
  content: `
我打得最自律的一次，是一场周五的锦标赛里离进钱还剩 3 个人的时候，所有人都在弃牌，好像手里的牌在烧手一样。我是中码，两次开池弃掉了 A-J——这种牌在现金局我每次都会加注。两轮之后 short stack 出局，我卡着进了 min-cash（最低奖）……最后拿了第 14 名，奖金勉强比我的买入多一点。==我硬是「活着」把自己活出了任何真正的钱。== 这就是 bubble 的一整个故事：打得太怕，你就锁死了一点点零头；打对了，这里才是锦标赛真正被赢下来的地方。

==在 bubble 上，多淘汰一个人，其余所有人就都进钱——所以在几手关键牌里，活下来比你能赢到的筹码更值钱。== 这一个事实就把正常的扑克整个翻了个底朝天，而几乎所有人都以同样的两种方式打错：大码进攻得不够，中码跟注得太多。这份指南就是按码量拆开讲的手册——大码、中码还是 short stack 各该怎么打，横跨你会遇到的三种不同 bubble。

如果你想弄懂*为什么*筹码在这里不再等于钱，那背后的数学就是 [ICM](/zh/blog/holdem-icm "thumb:/images/holdem-icm-hero.webp")——而这份指南，就是把那套理论在 [锦标赛](/zh/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") 牌桌上真正变成弃牌和推牌的地方。

---

### 一眼看懂 bubble

:::stripe
多淘汰 1 人 | 其余所有人都进钱——活下来的价值飙升
收紧跟注 | 保持 shove 宽
中码 | 最被困死的那个，不是 short stack
:::

---

## 德州扑克里的 bubble 是什么？（以及「on the bubble」）

**bubble 就是进钱前的那一段——再淘汰一个人，所有还坐在位子上的人就都进入了发钱的名次。** 如果一场锦标赛发前 27 名，那么剩 ==28 个人== 时就到了 bubble：现在出局你什么都拿不到；再挺过一次淘汰，你就锁定进钱了。

你会听到几个词：

- ==**On the bubble（在 bubble 上）**== ——锦标赛离进钱还差一次（或几次）淘汰。牌局慢到像爬。
- ==**Bubble boy（泡沫男孩）**== ——那个倒霉蛋，差一名进钱就出局、什么都没拿到。谁都不想要这个称号。
- ==**Stone bubble（硬 bubble）**== ——那一次戳破泡沫、让所有剩下的人都进钱的单次淘汰。真正的 stone bubble 里，只要有一个人出局，所有剩下的玩家就在那一瞬间全部锁定进钱。

bubble 之所以要紧，是因为锦标赛的奖金结构 ==头重脚轻==。从*什么都没有*到 min-cash 的这一跳，是整个奖金结构里百分比最大的一跳，这也正是为什么活下来会突然压过累积筹码——但只在一小段、很紧张的窗口里如此。

---

## 为什么 bubble 改变一切：一段话讲清 ICM

**因为锦标赛的筹码不是钱——你只能赢一个第一名，所以保护一份已经锁定的进钱的筹码，比伸手去够更多的筹码更值钱。** 这就是独立筹码模型（Independent Chip Model），在临近 pay jump（奖金跳档）时，它意味着 ==出局的风险压过了赢下一次抛硬币对局的回报==。一次在筹码上打平的跟注，换成真金白银可能就是亏钱的打法。

你不需要在牌桌上现算这套数学——那正是我们的 [ICM 计算器](/calculator) 要干的事，完整的拆解则在 [ICM 指南](/zh/blog/holdem-icm) 里。在牌桌上真正要紧的是那个后果：==跟注收得紧得多，但 shove 依然宽==，因为在别人都吓得缩手时，不摊牌就赢下底池（fold equity，弃牌胜率）比任何时候都更值钱。记住一句话：**先收紧你的跟注，再收紧你的 shove。**

---

## 你会遇到的 3 种 bubble：钱圈 vs 决赛桌 vs 卫星赛

**并不是所有 bubble 都一样——钱圈 bubble、决赛桌 bubble 和卫星赛 bubble 奖励的是完全不同的策略。** 把它们搞混，是锦标赛扑克里最烧钱的错误之一。

- ==**钱圈 bubble（money bubble）**== ——从什么都没有到 min-cash 的那一跳。活下来的溢价很高，但 min-cash 很小，所以你依然想为顶部大奖去*累积*。要施压，别光躲。
- ==**决赛桌 bubble（final-table bubble）**== ——离决赛桌只差一个位子。这里的 ICM 压力通常是 ==整场锦标赛里最极端的==，因为最大的那些奖金现在都上桌了。short stack 从一次深筹上分里能拿到的最多；而 9 人桌上的大码，可以说是整场比赛里最好的位子。

- ==**卫星赛 bubble（satellite bubble）**== ——那个另类。每一个晋级席位发的奖 ==完全一样==。一旦你的码量大到足够安全，多出来的筹码就*一文不值*——所以正确打法几乎变成了正常 bubble 的反面（下面「弃 A」那条规则会细讲）。

把这个区别记牢，因为接下来按码量给的建议，会随你处在哪一种 bubble 而变。

---

![ICM 压力信息图——钱圈 bubble 上，一座高耸的大码筹码堆压在一小摞 short stack 之上](/images/holdem-bubble-pressure.webp "在 bubble 上，ICM 压力让大码得以进攻——活下来比中间那堆筹码更值钱")

## 大码在 bubble 上怎么打

**毫不留情地进攻——你在全桌的风险溢价最低，而其他所有人都得敬着你的筹码。** 大码是 bubble 的头号受益者。你能干掉任何人；没人能干掉你。所以把压力压上去：

- **开池要宽、[3bet](/zh/blog/holdem-3bet) 要轻**，尤其是对你右手边那些中码——他们不搭上整场锦标赛就没法跟你。
- **盯着中码打，而不是最短的那些码。** 这是关键的细微处：short stack 更愿意跟你（他们要输的更少），而让他们翻倍是一场灾难。去欺负那些 ==最怕出局== 的人——也就是中码。
- **别得意忘形。** 施压的意思是偷盲然后遇到抵抗就弃，而不是把筹码往跟注里乱喷。要是一个打得紧的中码终于推了，敬它一下。

打对了，大码能在 bubble 上一手牌都不摊就印筹码。

---

## 中码在 bubble 上怎么打

**中码是全桌最被困死的位子——而这正是几乎每篇文章都搞错的事实。** 大家想当然地以为 short stack 感受到的压力最大。按真正的数学（bubble factor）来算，是 ==中码== 最受束缚：大到有真金白银的奖金权益可以输掉，又没短到能让你有理由去赌。

你的打法手册：

- **把你的跟注范围收得比谁都紧。** 你跟注跟没了、然后出局的话，要输的最多。那些在现金局你会乐呵呵跟注的牌，在这里弃掉——哪怕是面对更大码的推牌时，一些对子和大 A 这么强的牌也照弃。
- **继续偷你下方那些码的盲。** 跟注上被困死，不等于就此被动。开池、给更短的码施压；只是别跟你左手边的大码纠缠。
- **要有上分意识，不是恐惧。** 你在往进钱的方向走，但别一路弃到自己变成 short stack、然后被盲注 blind out（吹光）——那是拿一个陷阱去换一个更糟的陷阱。

要是你在 bubble 上感到夹子越收越紧，那你多半就是中码。在还能偷得下盲的前提下，打你能打的最小的底池。

---

## short stack 在 bubble 上怎么打

**要么 all in 要么弃牌——绝不 limp、也绝不跟到底——并且利用一个事实：你的 bubble factor 其实比中码更低。** 因为你本来就很可能出局，翻倍对你帮助极大，所以你比那些被困死的中码更能放开去赌。但你去赌的方式，是 ==当那个推牌的人==，而不是那个跟注的人——完整的 [short stack 推/弃手册](/zh/blog/holdem-short-stack "thumb:/images/holdem-short-stack-hero.webp") 讲透了其中的机制：

- **推或弃。** 抢先进攻能保住你的 [fold equity（弃牌胜率）](/zh/blog/holdem-when-to-fold)，那是你最值钱的武器。short stack 去开池 limp 或平跟，就是把它扔掉。
- **要是有比你更短的码，就等。** 如果有两个人比你更短，你可以弃掉边缘牌，让他们先出局——白白往上爬阶梯。但要是*你*就是最短的，你就等不起了；找个位置，在被盲注吹光之前推出去。
- **别一路收紧到万劫不复。** 为了「活下来」把自己弃到只剩两个大盲，正是你反而当上 bubble boy 的方式。挑一个合理的推牌范围，然后 commit（认了）。

short stack 的口诀：fold equity 就是一切。抢先推，在盲注替你挑位置之前，先挑好你自己的位置。

---

## Bubble factor 和风险溢价：告诉你何时该弃的那个数

**「bubble factor」衡量的是——输掉你的码给你造成的损失，比赢下同一个底池给你带来的好处，要大出多少——而它能直接换算成你做一次跟注所需要的额外胜率。** bubble factor 为 1.0，意味着筹码和钱同步移动（锦标赛早期）。bubble factor 为 1.5，意味着 ==出局的痛，是赢下的爽的 1.5 倍==，所以你需要大得多的优势才能把筹码投进去。

有用的部分来了：你做一次跟注打平所需的胜率，就是简单的 ==bubble factor ÷（1 + bubble factor）==。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Bubble factor | 输的痛…… | 跟注所需胜率 |
|:--|:--:|:--:|
| 1.0（无压力） | 和赢的爽一样 | 50% |
| 1.3 | 1.3× | ==57%== |
| 1.5（钱圈 bubble） | 1.5× | ==60%== |
| 1.7（决赛桌 bubble） | 1.7× | ==63%== |
| 2.0（严重） | 2× | ==67%== |

</div>

所以一次在筹码 EV 上 50% 你本会接的抛硬币对局，当你的 bubble factor 是 1.5、而你只有 50% 时，就变成了 ==明确该弃== ——你现在需要 60%。bubble factor 通常在钱圈和决赛桌 bubble 上冲到 ==1.5–1.7== 的峰值，等你进了钱又会掉回来。把你自己的码量和奖金填进 [ICM 计算器](/calculator)，看看某个局面里你真正的数字是多少。

---

## Hand-for-hand 和拖延：没人讲清楚的那套机制

**当进钱临近，锦标赛会切换到「hand-for-hand（逐手制）」——每一桌同时正好打一手牌，然后等——专门用来阻止玩家靠拖延混进钱圈。** 没有它的话，慢桌的玩家可以一手接一手地弃，而快桌却在飞速烧穿 bubble。hand-for-hand 把场子拉平：

- **它怎么运作：** 赛事总监暂停计时；所有桌各发一手牌，任何一桌都要等到每一桌都打完了才开始下一手。如果有两个人在同一次 hand-for-hand 里出局，通常是那手开始时筹码更少的那个拿更低（bubble）的名次。
- **拖延（Stalling）：** 每一个决定都把时间银行用满，好少看几手牌（然后弃进钱圈）。大码没理由拖延——他们想要更多手牌来进攻。short stack 和中码有时会拖延来求生，==但过度拖延可能招来 clock call（叫时）或罚则==，所以要 tank（长考）也得有个分寸。
- **利用它：** 因为其他所有人都慢了下来，一个在 hand-for-hand 期间持续施压的大码，几乎不受阻挠地把盲注和前注一把把收进兜里。

---

## 卫星赛 bubble：什么时候该弃口袋 A

**在卫星赛里，每一个席位发的奖都一样——所以一旦你的码量稳稳进了 bubble 里，你什么都弃，包括口袋 A。** 这是扑克里最反直觉的一个局面，而它是对的。如果赢下一手牌只是给你 ==一个你早已锁定的席位==，而输了却会把你淘汰，那就是没有回报、却有巨大风险：

- **一旦你的席位在数学上安全了**（你进 bubble 进得够深，追不上你了），就每手都弃——是的，连 AA 和 KK 都弃——让更短的码去互相厮杀。
- **每一手都拖延（stall）**，好保住那摞码。在卫星赛 bubble 上，拖延不只是被容忍，它是最优解。
- **唯一的例外：** 只有当干掉你正对上的那个特定 short stack 会*替你*锁定 bubble 时才跟——也就是说，他出局就保证了你的席位。

如果你从这一节只带走一件事：卫星赛不是一场正常的锦标赛。安全线以上的筹码一文不值，所以就照这个来打。

---

## 最大的 bubble 错误：为 min-cash 而打

**一路弃牌弃到 min-cash 感觉很安全，但那是拿锦标赛真正的钱去换它最小的那个奖。** 因为奖金头重脚轻，min-cash 是个地板，不是个目标——钱在阶梯的顶端，而你只有在 bubble 戳破时手里还有筹码，才够得着它。

那些赢下锦标赛的人，把 bubble 当成一个 ==趁别人都在躲、自己去累积== 的机会。活下来只在 pay jump 前后那几手牌里要紧；等 bubble 一戳破，ICM 压力就松了，又回到为了夺冠去堆码。敬着 bubble——然后在它一结束的那一刻，就别再打得那么怕了。

---

:::readnext[继续阅读]
/zh/blog/holdem-icm | ICM 讲透——为什么筹码不是钱 | /images/holdem-icm-hero.webp
/zh/blog/holdem-when-to-fold | 扑克里什么时候该弃牌 | /images/holdem-when-to-fold-hero.webp
:::

## FAQ

**Q. 扑克里「on the bubble」是什么意思？**

A. 它的意思是锦标赛离进钱还差一次或几次淘汰。如果前 27 名发奖，那么剩 28 个人时就是 bubble——下一个出局的人什么都拿不到，而其余所有人都锁定进钱。牌局会急剧收紧，因为活下来在短时间里比筹码更值钱。

**Q. 扑克里的 bubble boy 是谁？**

A. bubble boy 就是那个在最后一个不发奖的名次出局的玩家——差一名进钱——什么都没拿到。这是锦标赛里最惨的结局：熬了那么多小时，一分钱奖金都没有。有些比赛会给 bubble boy 一份小小的安慰奖，但传统上就是零。

**Q. stone bubble 和 soft bubble 有什么区别？**

A. stone（硬）bubble 是指一次淘汰就把所有剩下的玩家同时送进钱里。soft bubble 更松——是进钱附近的一小段几次淘汰，而不是某一个确切的名次。stone bubble 制造的压力最极端，因为一次出局就让所有剩下的人都进钱。

**Q. 在 bubble 上该弃牌吗？**

A. 你该弃的*跟注*要比平时多得多，但不是什么都弃——而且你该继续推牌和偷盲。在 pay jump 附近活下来比筹码更值钱，所以跟到底然后出局才是那个烧钱的错误。把你的跟注范围收得很紧，同时保持你抢先进攻的范围宽。

**Q. short stack 感受到的 bubble 压力最大吗？**

A. 不——这是常见的误解。按 bubble factor 算，中码才是最受束缚的：有足够的奖金权益可以输，又没短到能让你有理由去赌。short stack 其实 bubble factor 更低，因为出局本就很可能、而翻倍帮助又极大，所以他们能更放开去赌（靠推牌，不是靠跟注）。

**Q. 什么是 hand-for-hand 打法？**

A. 临近钱圈 bubble 时，所有桌同时正好打一手牌，然后要等每一桌都打完才开始下一手。它的存在是为了阻止拖延——没有它的话，玩家可以在一桌慢慢弃、偷偷混进钱里，而另一桌却更快地戳破了 bubble。

**Q. 为什么在卫星赛 bubble 上要弃口袋 A？**

A. 因为在卫星赛里每一个席位发的奖都一样，所以一旦你的码量稳稳进了 bubble 里，赢下一手牌不会给你带来任何额外的东西（你已经有你的席位了），而输了却会把你淘汰。全是风险、没有回报，连口袋 A 都弃在数学上就是对的。

---

## 记住这 3 件事

1. **活下来胜过筹码——只在那几手牌里。** 在 pay jump 附近，收紧你的跟注、保持你的 shove 宽。然后等 bubble 一戳破，就回到累积上。
2. **陷阱是中码，不是 short stack。** 大码打中码；中码打极小的底池；short stack 抢先推、用 fold equity。
3. **搞清你的 bubble 类型。** 钱圈、决赛桌和卫星赛 bubble 奖励的是不同的打法——而在卫星赛上，一个安全的码量什么都弃，连 A 都弃。

这一切背后的引擎是 [ICM](/zh/blog/holdem-icm)；那些弃牌背后的自律，是 [懂得什么时候放手](/zh/blog/holdem-when-to-fold)。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-icm" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM 讲透</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">bubble 为什么要紧背后的数学</div>
  </a>
  <a href="/zh/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">锦标赛</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">锦标赛策略</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">bubble 所属的那根支柱</div>
  </a>
  <a href="/zh/blog/holdem-when-to-fold" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">扑克里什么时候该弃牌</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">bubble 所要求的那份自律</div>
  </a>
  <a href="/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">免费工具</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM 计算器</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">找出你真正的 bubble-factor 数字</div>
  </a>
</div>
`.trim(),
};

export default POST;
