import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "補牌怎麼數？德州撲克 Outs 一次算清——髒補牌、打折補牌與四二法則",
  seoTitle: "到底幾張牌能救你？德州撲克補牌怎麼數",
  desc: "光會四二法則還不夠。這篇教你正確數補牌（Outs）——各種聽牌的補牌對照表、outs 換勝率的橋接，還有多數人漏算、悄悄虧錢的髒補牌。",
  tldr: "補牌就是牌堆裡還能把你這手變成大牌的牌。先數清楚，再換算：翻牌圈補牌 × 4、轉牌圈 × 2，就是你成牌的大概機率。同花聽牌是 9 張補牌，到河牌約 35%。",
  category: "odds",
  date: "2026-07-23",
  updated: "2026-07-23",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "11 分鐘",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "數補牌的圖解——A♥ K♥ 面對 Q♠ J♦ 9♥ 的翻牌，任何一張 10 都能湊成堅果順子",
  tags: ["補牌", "outs", "補牌怎麼數", "德州撲克補牌", "同花聽牌補牌", "順子聽牌補牌", "髒補牌", "四二法則"],
  content: `
我打牌的第一年，一直「靠聽牌在打」，卻從來沒真的數過補牌。同花聽牌跟中洞順子在我眼裡感覺差不多——反正都是「還可能來的牌」——所以兩種我都下一樣的注，然後納悶自己怎麼一直輸。真正救我的不是什麼策略課，而是一個五分鐘就能養成的習慣：==停一下，把真正能救我的牌，一張一張數出來。==

這個習慣就叫數**補牌（Outs）**——它是德州撲克裡每一個賠率決策底下的那塊地基。在你問「這手跟注划不划算？」之前，你得先答出「有幾張牌能幫我贏下這一手？」這篇講的就是「數」的那一半；至於數字背後的機率，[德州撲克機率與勝率表](/zh-hant/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp")是那張參考表，而[底池賠率](/zh-hant/blog/holdem-pot-odds)則是你數出來之後拿它去做的事。

---

### 補牌速覽

:::stripe
9 | 同花聽牌的補牌數
8 | 兩頭順聽牌的補牌數
×4 / ×2 | 翻牌圈 / 轉牌圈把補牌乘上去，就是你的成牌 %
:::

---

## 補牌是什麼？

**補牌就是牌堆裡任何一張，能把你這手變成大概會贏的牌。** 如果你有同花聽牌，剩下的每一張同花色都是補牌——來一張，你就湊成同花。

那個「大概會贏」四個字是有分量的。真正的補牌得要*真的贏下*這一手，而不只是把牌變好一點。牌面上已經有三張同花時，你配對了自己的 10，那不是補牌——你的牌是進步了，但你還是輸。學會數補牌，其實就是學會只數「能贏的牌」，並且把那些只是*看起來*有用的牌全部忽略掉。

後面所有的東西——你的勝率、你的[底池賠率](/zh-hant/blog/holdem-pot-odds)、你要跟還是蓋——都是從這一個數字長出來的。補牌數錯了，後面每一步計算也就跟著全錯。

---

## 補牌一步步這樣數

![一位牌手拿著黑桃 A 和黑桃 K，盯著綠色檯面上一個小小的三張翻牌，在行動前先數高張補牌](/images/holdem-outs-counting.webp "A-K 面對一個小翻牌是教科書等級的數牌時機——六張高張補牌，外加後門聽牌")

數補牌是一套三步驟的例行動作，每次聽牌都跑一遍，跑到變成本能為止：

:::steps
先講清楚你在追什麼牌 | 你要湊的是哪種牌？同花、順子、更大的一對、暗三條——把目標講得具體
數能湊成它的牌有幾張 | 每種花色 13 張、每個點數 4 張，把你已經看得見的（你的牌 + 牌面）扣掉
把假補牌剔掉 | 任何「湊成了卻還是輸」的補牌都劃掉——會讓牌面成對的同花張，或者會給別人做成更大順子的順子張
:::

拿同花聽牌來說：你這花色共有 13 張，你看得見其中**四**張（手上兩張、牌面兩張），所以 ==g:13 − 4 = 9 張補牌==。就是那一步減法——把你*抓不到*、因為早就握在自己手上的牌扣掉——新手最常在這裡跌倒。

數補牌只用你看得見的牌。你不會去扣對手那兩張看不見的牌；每一張沒露出來的牌，都當成還活在牌堆裡。這也是為什麼下面那些標準補牌數，不管別人手上拿什麼，都一樣成立。

---

## 各種常見聽牌的補牌對照表

![綠色檯面上按順序排開的一副以 8 為頂的順子，展示兩頭順聽牌正在追的那一串牌](/images/holdem-reading-straight-example.webp "兩頭順聽牌兩端都能填滿——八張補牌，是第二常見的大聽牌")

把這些背起來，你一眼就能認出自己的補牌數。這是每個贏家都刻進腦子裡的一張表：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 你的聽牌 | 補牌 | 為什麼 |
|:---|:---:|:---|
| 同花 + 兩頭順 | 15 | 怪物——同時聽兩種 |
| 同花聽牌 | 9 | 一花色 13 張 − 你看得見的 4 張 |
| 兩頭順聽牌 | 8 | 兩端各四張 |
| 同花 + 中洞 | 12 | 9 張同花 + 4 張中洞 − 1 張重複 |
| 兩張高張 | 6 | 各三張能配對 |
| 一對 → 兩對或三條 | 5 | 3 張配對你的踢腳牌 + 2 張湊成三條 |
| 中洞（內順） | 4 | 只有一個點數能填那個洞 |
| 一張高張 | 3 | 三張能湊成頂對 |
| 口袋對 → 暗三條 | 2 | 你這點數剩下的最後兩張 |

</div>

最上面那兩個複合聽牌，正是牌手最會把算術搞砸的地方，所以下面另闢一段講。其餘的全是單純的減法：數一數能收尾的點數或花色，再把你看得見的扣掉。

---

## outs → 勝率：換算對照表

補牌要換成一個你能拿去跟價錢比的百分比，才真的有用。這是那張主表——到河牌成牌的機率，外加你已經走到轉牌圈時只看一張牌的機率：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 補牌 | 只看轉牌（1 張） | 到河牌（2 張） | 河牌賠率 |
|:---|:---:|:---:|:---:|
| 2 | 4.3% | 8.4% | 11 比 1 |
| 4 | 8.5% | 16.5% | 5 比 1 |
| 6 | 12.8% | 24.1% | 3.1 比 1 |
| 8 | 17.0% | 31.5% | 2.2 比 1 |
| 9 | 19.1% | 35.0% | 1.9 比 1 |
| 12 | 25.5% | 45.0% | 1.2 比 1 |
| 15 | 31.9% | 54.1% | 0.85 比 1 |

</div>

每個聽牌都有兩個數字要看。**「到河牌」** 把剩下兩張牌都算進去，只有你在翻牌圈全下（all-in）、後面沒有下注時才適用。**「只看轉牌」** 只算下一張牌——只要後面還有下注，就用這個，因為你一次只保證看得到一張牌。新手明明面對的是轉牌圈的注，卻拿「到河牌」那個又肥的數字說服自己跟注，然後付出代價。

注意那個 15 張的怪物聽牌：還剩兩張牌要發時，它其實是**優勢方**（54.1%），是那種你可以開開心心在翻牌圈就全下的罕見聽牌。

---

## 四二法則：把補牌換成勝率的心算

你沒辦法把那張表帶到牌桌上，所以就用每個牌手都靠的捷徑：

- **在翻牌圈（還剩兩張牌）：** 補牌 × 4 ≈ 你到河牌的成牌 %。
- **在轉牌圈（還剩一張牌）：** 補牌 × 2 ≈ 你在河牌那張的成牌 %。

同花聽牌是 9 張補牌。翻牌圈：9 × 4 = **36%**（真實值 35.0%——分毫不差）。轉牌圈：9 × 2 = **18%**（真實值 19.6%——夠近，夠你做決定了）。

:::tip[×4 那版悄悄假設了你會看到*兩張*牌、中間沒有更多下注——只有你已經全下時才成立。如果你面前還有一注要打，就用 ×2（單張牌）的數字，看你眼前這條街到底是哪一街。]:::

有一個地方這條法則會騙人：**翻牌圈補牌數很大的時候。** 因為 ×4 把「兩街都中」的那一點點小機率重覆算進去了，所以只要超過 ~8 張補牌，它就會高估。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 補牌 | 法則說（×4） | 到河牌真實值 | 誤差 |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31.5% | +0.5% |
| 9 | 36% | 35.0% | +1% |
| 12 | 48% | 45.0% | +3% |
| 15 | 60% | 54.1% | +6% |

</div>

大聽牌的漂亮修正法：**翻牌圈補牌超過 8 張**時，先 × 4，再減掉 *(補牌 − 8)*。以 15 張為例：(15 × 4) − 7 = **53%**，幾乎完全準。至於 8 張以下的日常聽牌，單純的 ×4、×2 就夠用了。每一種聽牌成牌的精確機率都在[德州撲克成牌機率](/zh-hant/blog/holdem-drawing-odds)裡，完整推導則收在[機率與勝率表](/zh-hant/blog/holdem-probability)。

---

## 複合聽牌：為什麼 9 + 8 不是 17

大聽牌會絆倒人，是因為你不能把兩個補牌數直接相加——有些牌身兼兩職，重覆算一次就會把你的勝率灌水。

假設你拿 ==b:J♠ 10♠==，翻牌是 ==9♠ 8♣ 2♠==。你疊了兩個聽牌：同花聽牌（黑桃）和兩頭順聽牌（任何 Q 或 7 都能成順）。天真地相加會得到 9 + 8 = 17。但 **Q♠ 和 7♠** 這兩張，同時湊成*同花和順子*——它們早就被算進那 9 張同花補牌裡了。只能算一次：

- 同花補牌：**9**（每一張黑桃）
- 不是黑桃的順子補牌：Q♥ Q♦ Q♣、7♥ 7♦ 7♣ = **6**
- 合計：**15 張補牌**，不是 17

**同花 + 中洞**也是同樣的道理：9 張同花補牌 + 4 張中洞牌，但那四張裡有一張是你的花色 → 9 + 3 = **12**。只要兩個聽牌共用某張牌，就把重疊的扣掉。這是牌手最常見的多算方式，也是為什麼表裡那幾行複合聽牌，看起來總比兩數相加「少一張」。

---

## 髒補牌：那些只是看起來像贏的牌

![成對牌面 10♠ 8♥ 4♠ 4♣ 6♦ 的圖解，把乾淨補牌和髒補牌分開](/images/holdem-outs-dirty-outs.webp "牌面成對時，你有些補牌是髒的——湊成同花仍可能餵給對手一副葫蘆")

這一段是多數教學會跳過的，卻也是真正幫你省錢的一段。**髒補牌（dirty outs）**（也叫被污染的補牌）是那種「湊成了你的牌、卻還是可能輸」的補牌——照全額去算它，會高估你的勝率。贏家會先數原始補牌，再把髒的那幾張*打折（discounted outs）*，然後才拿去套四二法則。

三種你該訓練眼睛去抓的情況：

:::card
♠ | 非堅果同花 | 你拿 8♠ 7♠ 面對 K♠ 9♠ 2♣，帳面上有 9 張黑桃「補牌」——但如果來一張黑桃、而對手握著更大的黑桃，你湊成了同花卻還是輸。當你追的不是堅果同花時，就得把補牌打折
🂮 | 成對的牌面 | 面對像 J♥ 8♥ 8♣ 這種牌面的同花聽牌，看起來是 9 張乾淨補牌，但牌面已經成對——說不定已經有人湊成葫蘆，所以你有些同花一成牌就已經死了
🃁 | 高張撞上強牌 | 兩張高張（A-K 面對 Q-8-3）帳面上算 6 張補牌，但如果一個大加注在尖叫著暗三條或兩對，那你配對 A 往往還是不夠好——算 3 張、頂多 4 張，別算 6
:::

你很少能算出精確的折扣，這沒關係。這一手是「方向性」的：當牌面或下注在告訴你某張補牌可能贏不了，換算之前就先把補牌數往*下*砍。一個在成對牌面上還照 9 張補牌去跟滿池的人，等於用全價買了一個其實只值六張的聽牌。看懂哪些補牌是乾淨的，是一種讀牌面的功夫——你可以搭配[德州撲克牌型大小排名](/zh-hant/blog/holdem-hand-rankings)先搞懂你的聽牌成牌後到底贏什麼、輸什麼，也可以用[起手牌表](/zh-hant/blog/holdem-starting-hands-chart)確保你一開始就進池得漂亮。

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-pot-odds | 底池賠率怎麼算 | /images/holdem-pot-odds-hero.webp
/zh-hant/blog/holdem-probability | 德州撲克機率與勝率表 | /images/holdem-probability-hero.webp
:::

## 常見問題 FAQ

**Q. 德州撲克的補牌（Outs）是什麼？**

A. 補牌是牌堆裡還沒露出來、能把你這手變成大概會贏的那些牌。同花聽牌有 9 張補牌（沒看見的 9 張同花色）；兩頭順聽牌有 8 張。你數補牌是為了算出成牌機率，進而判斷跟注划不划算。

**Q. 9 張補牌是什麼意思？**

A. 代表牌堆裡還有九張牌能收尾你這手——最常見就是同花聽牌（一花色 13 張減掉你看得見的 4 張）。9 張補牌從翻牌圈算到河牌約 35%，只看轉牌那一張則是 19.1%。這個規律對任何補牌數都成立：補牌越多、成牌機率越高，翻牌圈把補牌 × 4（轉牌圈 × 2）就能快速得到百分比。

**Q. 補牌到底怎麼數？**

A. 先講清楚你在追哪種牌，數一數有幾張能湊成它（每花色 13 張、每點數 4 張），把你手上和牌面上已經看得見的扣掉，再劃掉任何會「湊成卻還是輸」的髒補牌。同花聽牌就是 13 − 4 = 9。

**Q. 同花聽牌有幾張補牌？**

A. 九張。每種花色 13 張，你手上兩張加牌面兩張、看得見四張，剩下 9 張沒露面的牌能收尾你的同花。從翻牌圈算到河牌大約 35%。

**Q. 兩頭順聽牌有幾張補牌？**

A. 八張——兩端各四張能填滿順子。中洞（內順）聽牌只有 4 張補牌，因為只有一個點數能補那個洞。雙中洞（double gutshot）也是 8 張，跟兩頭順一樣。

**Q. 四二法則是什麼？**

A. 一個把補牌換成百分比的捷徑：翻牌圈把補牌 × 4，得到到河牌的成牌機率；轉牌圈 × 2，得到河牌那張的機率。9 張同花補牌在翻牌圈 ≈ 36%、轉牌圈 18%。只有在你不用再下注就能看到兩張牌時，才用 ×4。

**Q. 什麼是髒補牌（被污染的補牌）？**

A. 就是那種「湊成了你的牌、卻還是可能輸」的補牌——牌面已可能有更大同花時的那張同花，會同時餵給別人更大順子的那張順子牌，或者撞上疑似暗三條的兩張高張。換算成賠率之前先把髒補牌打折（甚至不算），不然你會高估自己的勝率。

**Q. 同花聽牌加順子聽牌一共幾張補牌？**

A. 15 張，不是 17。同花聽牌 9 張、兩頭順 8 張，但其中有兩張順子牌同時也是你的花色、早已算進同花裡——所以要扣掉重疊。15 張補牌到河牌是優勢方（約 54%）。

**Q. 數補牌時要不要把對手的牌算進去？**

A. 不用。你只扣你真正看得見的牌——你的底牌和公共牌面。其他每一張看不見的牌都當成活牌，這也是為什麼那些標準補牌數（同花 9 張、兩頭順 8 張）不管對手拿什麼都成立。

---

## 要記住的 3 件事

1. **數能贏的牌，不是數變好的牌。** 補牌得湊成*最大*的牌，不只是更好的牌。只扣你看得見的牌。
2. **用四二法則換算。** 翻牌圈補牌 × 4、轉牌圈 × 2。大聽牌（超過 8 張補牌）要再減掉 *(補牌 − 8)* 修一下估值。
3. **把髒的那幾張打折。** 非堅果同花、成對牌面、撞上強牌的高張，都會讓你真正的補牌數縮水。拿不準的時候，寧可少算。

把補牌數穩了，剩下的撲克數學就會自己各就各位。把你的補牌數直接帶進[底池賠率怎麼算](/zh-hant/blog/holdem-pot-odds)看看價錢對不對，或者回頭翻[德州撲克機率與勝率表](/zh-hant/blog/holdem-probability)，把每個聽牌背後的精確數字磨到最利。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">機率與數學</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">底池賠率怎麼算</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">把你的補牌數變成一個跟或蓋的決定</div>
  </a>
  <a href="/zh-hant/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">機率與數學</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克機率與勝率表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">每個聽牌背後那張完整參考表</div>
  </a>
  <a href="/zh-hant/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克牌型大小排名</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">先搞懂你的聽牌成牌後贏什麼、輸什麼</div>
  </a>
  <a href="/zh-hant/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">起手牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">按位置劃分的起手牌表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">進池時拿的都是值得聽牌的手牌</div>
  </a>
</div>
`.trim(),
};

export default POST;
