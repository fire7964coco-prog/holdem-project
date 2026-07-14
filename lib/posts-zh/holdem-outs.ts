import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "德州扑克怎么数 outs（补牌）——每个赔率决策背后的真功夫",
  seoTitle: "到底有几张牌能救你？outs 补牌怎么算",
  desc: "数 outs 是没人一开始教你、却最要紧的功夫。教你快速数出补牌——逐个听牌的补牌表、补牌换赔率对照表，还有那些悄悄让你亏钱的脏 outs。",
  tldr: "一张 out（补牌）就是牌堆里任何一张能把你的牌变成大概率赢家的牌。先数出来，再换算：翻牌圈把补牌数 ×4、转牌圈 ×2，就是你击中的大致 %。同花听牌是 9 张补牌 ≈ 到河牌 36%。",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "11 分钟",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "数补牌的图解——A♥ K♥ 对上 Q♠ J♦ 9♥ 的翻牌，任何一张十都能凑成坚果顺子",
  tags: ["outs 补牌", "德州扑克 outs 怎么算", "德扑 补牌表", "同花听牌 补牌", "顺子听牌 补牌", "补牌换赔率", "脏 outs", "2 和 4 法则"],
  content: `
上桌的头一年，我"打我的听牌"却从来不数它们。同花听牌和一张卡顺，感觉都差不多——都是"可能来的牌"——所以两种我都一样地跟，然后纳闷自己为什么老输。解药不是什么策略课，而是一个五分钟就能养成的习惯：==停下来，实实在在地数一数那些能救我的牌。==

这个习惯叫数 **outs（补牌）**——[poker 里"数牌"的真正答案](/zh/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp")——它是每一个赔率决策底下都躺着的那一项基本功。在你能问"这次跟注划算吗？"之前，你得先答上"有几张牌能帮我赢下这手？"这篇讲的是数牌这一半——[德扑赔率与概率对照表](/zh/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp")是它背后的参考，而[底池赔率](/zh/blog/holdem-pot-odds)是你拿到这个数字之后要做的事。

---

### 补牌一眼看懂

:::stripe
9 | 同花听牌的补牌数
8 | 两头顺（开口顺）听牌的补牌数
×4 / ×2 | 翻牌圈 / 转牌圈把补牌数乘一下，得到你的 %
:::

---

## 什么是德扑里的 outs（补牌）？

**一张 out（补牌）就是牌堆里仍然剩着、能把你的牌变成大概率赢家的任意一张牌。** 如果你拿着同花听牌，你花色里剩下的每一张都是补牌——抓到一张，你就成了同花。

那个"大概率"三个字在悄悄干着重活。真正的补牌得实实在在*赢下*这手，而不只是让你的牌变好一点。牌面上已经有同花时，你配对了自己的十，那不算补牌——你是进步了，但你还是在输。学会数补牌，其实就是学会数那些能赢的牌，同时无视那些只是*看起来*有用的牌。

往下的一切——你的胜率、你的[底池赔率](/zh/blog/holdem-pot-odds)、你的跟或弃——全都从这一个数字起步。补牌数错了，它之后的每一步计算也就全错了。而一旦你数清了，[听牌赔率](/zh/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp")会精确告诉你每种听牌到底多久能真正成上。

---

## 怎么数你的补牌（一步一步来）

![一名玩家拿着黑桃 A 和黑桃 K，在绿色台面上盯着一个低张三张翻牌，行动前先数超对补牌](/images/holdem-outs-counting.webp "A-K 打在低翻牌上是教科书级的数牌场景——六张超对补牌，外加那些后门")

数补牌是个三步走的例行程序，每遇到一个听牌就跑一遍，直到它变成本能：

:::steps
点名你的听牌 | 你在追的是哪种牌？同花、顺子、更大的一对、暗三条——把目标说具体
数出能凑成它的牌 | 每种花色 13 张、每个点数 4 张。减掉你已经能看见的那些（你的牌 + 牌面）
剔掉那些假的 | 划掉任何"补牌"——它虽然凑成了你的牌却仍然会输：一张让牌面成对的同花牌，一个把更大顺子送给别人的顺子
:::

拿同花听牌来说：你花色的牌一共 13 张，你能看见其中**四张**（手里两张、牌面两张），所以 ==g:13 − 4 = 9 张补牌==。那一步减法——把那些你*抓不到*、因为已经握在你手里的牌减掉——正是新手会滑跤的地方。

数牌只用到你看得见的牌。你不去减对手的未知牌；每一张没露过面的牌你都当作还活着。这就是为什么下面这些标准补牌数不管别人手里握着什么都成立。

---

## 德扑补牌表：每一种常见听牌

![一副八高的顺子在绿色台面上按顺序排开，展示一个开口顺听牌在追的那串牌](/images/holdem-reading-straight-example.webp "开口顺听牌从两头都能补上——八张补牌，第二大的常见听牌")

把这些记熟，你一眼就能认出自己的补牌数。这就是每个赢家玩家都刻进脑子里的那张表：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 你的听牌 | 补牌 | 为什么 |
|:---|:---:|:---|
| 同花 + 开口顺 | 15 | 巨兽——两个听牌一起来 |
| 同花听牌 | 9 | 一种花色 13 张 − 看得见的 4 张 |
| 开口顺听牌 | 8 | 两头各四张牌 |
| 同花 + 卡顺 | 12 | 9 张同花 + 4 张卡顺 − 1 张共用牌 |
| 两张超对 | 6 | 每个点数三张能配对 |
| 一对 → 两对或三条 | 5 | 3 张配你的踢脚 + 2 张成三条 |
| 卡顺（内嵌顺子） | 4 | 只有一个点数能填上那个洞 |
| 一张超对 | 3 | 三张牌能凑成顶对 |
| 口袋对子 → 暗三条 | 2 | 你那点数剩下的最后两张 |

</div>

表格顶上那两个组合听牌，正是玩家们把算术搞砸的地方，所以下面给它们单开一节。其余全是直来直去的减法：数出能凑成你牌的点数或花色，再减掉你看得见的。

---

## 补牌换赔率：换算对照表

数补牌只有在你把它变成一个能跟对手给你的价钱去比的百分比之后，才有用。这是那张总表——到河牌击中的赔率，外加当你已经在转牌圈时的单张赔率：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 补牌 | 仅转牌（1 张） | 到河牌（2 张） | 河牌赔率 |
|:---|:---:|:---:|:---:|
| 2 | 4.3% | 8.4% | 11:1 |
| 4 | 8.5% | 16.5% | 5:1 |
| 6 | 12.8% | 24.1% | 3.1:1 |
| 8 | 17.0% | 31.5% | 2.2:1 |
| 9 | 19.1% | 35.0% | 1.9:1 |
| 12 | 25.5% | 45.0% | 1.2:1 |
| 15 | 31.9% | 54.1% | 0.85:1 |

</div>

每个听牌都有两个数字要紧。**"到河牌"**把剩下两张牌都算上，适用于你在翻牌圈已经 all in、后面没得下注的时候。**"仅转牌"**只算下一张牌——只要后面还有下注就用这个，因为你一次只保证看得到一张牌。新手在面对一个转牌下注时却报着"到河牌"那个肥数字，把自己说服去跟注，然后为此买单。

注意那个 15 张补牌的巨兽：还有两张牌要来时它其实是**领先方**（54.1%），是那种你在翻牌圈可以乐呵呵全下的稀有听牌。

---

## 2 和 4 法则：在脑子里把补牌 → 赔率

你没法把那张表带到牌桌上，所以用每个玩家都靠的这个捷径：

- **在翻牌圈（还有两张牌要来）：** 补牌数 ×4 ≈ 你到河牌击中的 %。
- **在转牌圈（还有一张牌要来）：** 补牌数 ×2 ≈ 你在河牌击中的 %。

同花听牌是 9 张补牌。翻牌圈：9 × 4 = **36%**（真值 35.0%——正中）。转牌圈：9 × 2 = **18%**（真值 19.6%——够接近，可以据此行动）。

:::tip[×4 这个捷径悄悄假定了你会看到*两张*牌、后面没有下注——只有你已经 all in 时才成立。如果你面前有个下注，就用你实际所在那条街的 ×2（单张）数字。]:::

有一处这法则会撒谎：**翻牌圈的高补牌数。** 因为 ×4 重复计算了同时在*两条*街都击中的那点小概率，所以一旦你过了 ~8 张补牌，它就会高估。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 补牌 | 法则说（×4） | 到河牌真值 | 差了 |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31.5% | +0.5% |
| 9 | 36% | 35.0% | +1% |
| 12 | 48% | 45.0% | +3% |
| 15 | 60% | 54.1% | +6% |

</div>

大听牌的漂亮修正：翻牌圈**超过 8 张补牌**时，乘 4 之后再减去 *(补牌 − 8)*。15 张补牌：(15 × 4) − 7 = **53%**，几乎分毫不差。日常那些 8 张或更少补牌的听牌，光用 ×4 和 ×2 就够了。完整的推导都在[概率对照表](/zh/blog/holdem-probability)里。

---

## 组合听牌：为什么 9 + 8 不等于 17

大听牌之所以绊住人，是因为你不能光把两个补牌数一加了事——有些牌身兼两职，把它们数两遍会虚增你的胜率。

假设你在 ==9♠ 8♣ 2♠== 的翻牌上拿着 ==b:J♠ 10♠==。你叠着两个听牌：一个同花听牌（黑桃）和一个开口顺听牌（任何 Q 或 7 都能凑成顺子）。天真地一加你得到 9 + 8 = 17。但 **Q♠ 和 7♠** 各自都*同时*凑成同花和顺子——它们已经在那 9 张同花补牌里头了。只数它们一次：

- 同花补牌：**9**（每一张黑桃）
- 不是黑桃的顺子补牌：Q♥ Q♦ Q♣、7♥ 7♦ 7♣ = **6**
- 合计：**15 张补牌**，不是 17

**同花 + 卡顺**同理：9 张同花补牌 + 4 张卡顺牌，但那四张里有一张是你的花色 → 9 + 3 = **12**。只要两个听牌共用一张牌，就减掉重叠的部分。这是玩家多数牌最常见的一种方式，也是为什么表里那些组合行看起来比加总"少了一张"。

---

## 脏 outs：那些只是看起来像赢的牌

![一个成对的 10♠ 8♥ 4♠ 4♣ 6♦ 牌面的图解，把干净补牌和脏补牌分开](/images/holdem-outs-dirty-outs.webp "在成对的牌面上，你的一些补牌是脏的——击中同花也可能反倒喂了葫芦")

这是多数指南都跳过的一节，却是真正省钱的那一节。一张**脏 out（无效补牌）**（或叫"被污染的"补牌）是那种凑成了你的牌却仍然可能输的牌——所以按全额去数它，会高估你的胜率。赢家玩家先数出原始补牌，然后在动用 2 和 4 法则之前，把脏的那些*打折*。

三种要训练你眼力去认的情况：

:::card
♠ | 非坚果同花 | 在 K♠9♠2♣ 上拿着 8♠7♠，你有 9 张黑桃"补牌"——但如果来了一张黑桃、而对手握着更大的黑桃，你成了同花却还是输。当你不是在听坚果同花时，给你的补牌打折
🂮 | 成对的牌面 | J♥8♥8♣ 这样的牌面上的同花听牌看着像 9 张干净补牌，但牌面已经成对了——一个成好的葫芦可能正等着你，所以你的一些同花一出生就是死的
🃁 | 超对撞上强牌 | 两张超对（A-K 在 Q-8-3 上）纸面上算 6 张补牌，但如果一个大加注在嚷嚷着暗三条或两对，配对你的 A 往往不够好——数 3，顶多 4，不是 6
:::

你很少能知道确切的折扣，那也没关系。要领是方向性的：当牌面或行动告诉你某张补牌可能赢不了，换算之前先把补牌数*往下*削。一个在成对牌面上数着 9 张补牌、就着底池去跟注的玩家，是在为一个悄悄只值六张的听牌付全价。读出哪些补牌是干净的，是一门牌面结构的功夫——用[德州扑克怎么读公共牌](/zh/blog/holdem-reading-the-board)去练它。

---

:::readnext[接着读]
/zh/blog/holdem-pot-odds | 底池赔率怎么算 | /images/holdem-pot-odds-hero.webp
/zh/blog/holdem-probability | 德扑赔率与概率对照表 | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. 德扑里的 outs（补牌）是什么？**

A. outs 是牌堆里剩下、能把你的牌变成大概率赢家的那些牌。同花听牌有 9 张补牌（你花色里 9 张没露面的牌）；开口顺听牌有 8 张。你数它们，是为了算出你击中的机会、以及一次跟注是否划算。

**Q. 德扑里怎么数补牌？**

A. 点名你在追的那手牌，数出有几张牌能凑成它（每种花色 13 张、每个点数 4 张），减掉你在手里和牌面上已经能看见的，再划掉任何仍会输的"脏"补牌。同花听牌就是 13 − 4 = 9。

**Q. 同花听牌有几张补牌？**

A. 九张。每种花色有 13 张牌；手里两张、牌面两张，你能看见四张，剩下 9 张没露面的牌能凑成你的同花。从翻牌圈算，到河牌大约 35% 能击中。

**Q. 开口顺听牌有几张补牌？**

A. 八张——两头各四张牌能凑成顺子。卡顺（内嵌）听牌只有 4 张补牌，因为只有一个点数能填上那个缺口。双卡顺也是 8 张，跟开口顺一样。

**Q. 什么是 2 和 4 法则？**

A. 一个把补牌变成百分比的捷径：翻牌圈把补牌数乘 4，得到你到河牌击中的机会；转牌圈乘 2，得到河牌那一张。九张同花补牌 ≈ 翻牌圈 36%、转牌圈 18%。只在你不用再下注就能看到两张牌时才用 ×4。

**Q. 什么是脏 outs 或被污染的补牌？**

A. 那些凑成了你的牌却仍然可能输的牌——一张同花牌但更大的同花有可能存在，一张顺子牌同时也把更大的顺子送给别人，或者撞上大概率暗三条的超对。换算成赔率之前先给脏 outs 打折（或干脆不数），否则你会高估自己的胜率。

**Q. 同花听牌加顺子听牌是几张补牌？**

A. 15，不是 17。同花听牌是 9 张补牌、开口顺是 8 张，但顺子牌里有两张同时也是你的花色、已经算在同花里了——所以你减掉重叠部分。十五张补牌到河牌是领先方（约 54%）。

**Q. 数补牌时要把对手的牌数进去吗？**

A. 不。你只减掉你真正看得见的牌——你的底牌和公共牌面。其他每一张没露面的牌都当作活着，这就是为什么那些标准补牌数（同花 9 张、开口顺 8 张）不管对手握着什么都成立。

---

## 要记住的 3 件事

1. **数能赢的，不是数变好的。** 一张补牌得凑成*最好*的牌，而不只是更好的一手。只减掉你看得见的牌。
2. **用 4 和 2 换算。** 翻牌圈补牌 × 4、转牌圈 × 2。大听牌（超过 8 张补牌）的估值靠减去 *(补牌 − 8)* 来修正。
3. **给脏的打折。** 非坚果同花、成对牌面、以及撞上强牌的超对，都会缩水你真正的补牌数。拿不准时，数少一点。

把数牌钉牢，剩下的 poker 数学就都各就各位了。把你的补牌数直接带进[底池赔率怎么算](/zh/blog/holdem-pot-odds)去看价钱对不对，或者退回到完整的[德扑赔率与概率对照表](/zh/blog/holdem-probability)去找每种听牌背后的确切数字。

---

## 相关文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">赔率与数学</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">底池赔率怎么算</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">把你的补牌数变成跟或弃</div>
  </a>
  <a href="/zh/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">赔率与数学</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德扑赔率与概率对照表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">每种听牌背后的完整参考</div>
  </a>
  <a href="/zh/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">读公共牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州扑克怎么读公共牌</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">认出每一个听牌，才能数出干净补牌</div>
  </a>
  <a href="/zh/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">起手牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">按位置划分的起手牌表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">带着值得听牌的牌进池</div>
  </a>
</div>
`.trim(),
};

export default POST;
