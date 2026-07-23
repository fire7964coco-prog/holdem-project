import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "同花跟順子哪個大？比牌機率、逐張比大小與 3 種常見誤判一次看",
  seoTitle: "同花跟順子哪個大？一次看懂比牌",
  desc: "把順子推出去，結果同花把底池贏走了？同花永遠比順子大。這篇講清楚背後的機率、什麼比同花大，還有 3 種讓牌手看走眼的牌面。",
  tldr: "同花（五張同花色，約佔五張發牌的 0.197%）在德州撲克裡永遠比順子（五張連號，約 0.392%）大——因為做出同花的難度大約是順子的兩倍。",
  category: "hand-rankings",
  date: "2026-07-23",
  updated: "2026-07-23",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "11 分鐘",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "資訊圖：A 高同花 A♠ J♠ 9♠ 6♠ 2♠ 對上一手 9 高順子，旁邊有金色「FLUSH WINS」標章，說明為什麼同花排名比較高",
  tags: ["同花跟順子哪個大", "同花 順子", "什麼比同花大", "同花順是什麼", "為什麼同花比順子大", "同花 葫蘆", "同花比大小", "同花和順子差別"],
  content: `
我在現場現金桌輸掉的第一個大底池，過程是這樣的：河牌讓我做成一手 10 高的順子，我像捧著金子一樣把牌推出去——結果坐在旁邊一個安靜的常客翻出兩張紅心。==r:荷官把底池推向了另一邊==，那手牌我開車回家一路重播了好幾遍。

如果你剛剛也遇到同樣的事，簡短的答案是：==g:對，同花每一次都比順子大==。有意思的是*為什麼*、還有什麼東西比同花大，以及牌桌上到現場才會看走眼的那三種牌面。

---

### 先給結論

:::stripe
同花 > 順子 | 標準德州撲克裡沒有例外
5,108 vs 10,200 | 五張同花組合數 vs 順子組合數——同花大約罕見兩倍
第 5 名 vs 第 6 名 | 同花與順子在 10 種牌型裡的位置
:::

> **快速回答**
> 在德州撲克裡，**同花永遠比順子大**——標準玩法沒有任何例外。同花（五張同花色）在統計上比順子（五張連號）更難做出來：大約 **5,108** 種五張組合，對上順子的 **10,200** 種。

---

## 同花跟順子哪個大？兩手牌的排名位置（Flush vs Straight）

對——而且根本不是模稜兩可的判斷。==同花就坐在順子上面一格，這在標準德州撲克裡永遠不會變。== 這是大家最常搞混的兩手牌，還有它們周圍的鄰居：

| 排名 | 牌型 | 範例 |
|------|------|------|
| 第 2 名 | 同花順（Straight Flush） | 9♥ 8♥ 7♥ 6♥ 5♥ |
| 第 4 名 | 葫蘆（Full House） | J♠ J♥ J♦ 8♠ 8♥ |
| **第 5 名** | **同花（Flush）** | A♠ J♠ 9♠ 6♠ 2♠ |
| **第 6 名** | **順子（Straight）** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| 第 7 名 | 三條（Three of a Kind） | Q♠ Q♥ Q♦ 7♠ 3♣ |

想看全部十種牌型連同機率、範例和牌面謎題嗎？那些都在[完整的德州撲克牌型大小排名](/zh-hant/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp")裡——這篇只聚焦在同花對順子的對決，還有它們最近的鄰居。

---

## 為什麼同花比順子大？看機率就懂（The Math）

撲克裡牌力的高低，只由一件事決定：**這手牌有多難做出來**。越罕見，排名越高。牌型順序沒有一點是隨便定的——純粹是出現頻率。

把一副 52 張牌能發出的 2,598,960 種五張組合數一數，順序自己就跑出來了：

| 牌型 | 組合數 | 機率 | 結論 |
|:---|:---:|:---:|:---|
| 四條（Four of a Kind） | 624 | 0.024% | 比同花大 |
| 葫蘆（Full House） | 3,744 | 0.144% | 比同花大 |
| **同花（Flush）** | **5,108** | **0.197%** | **比順子大 ✅** |
| **順子（Straight）** | **10,200** | **0.392%** | **輸給同花 ❌** |
| 三條（Three of a Kind） | 54,912 | 2.11% | 輸給順子 |

順子湊成的方法大約是同花的 ==r:**兩倍**==，所以它出現的頻率也是兩倍——這就讓它成為比較弱的一手。同一條頻率法則解釋了整個牌型階梯；每一手牌的精確數字都在[德州撲克機率與勝率表](/zh-hant/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp")裡。

### 為什麼這感覺是反過來的

順子只需要五個連號，而且==**花色不用管**==。這份自由造出了非常多的組合。同花剛好相反：五張牌**每一張都得同一種花色**，而且四種花色一次只有一種能成。==g:能達成的方法少太多，同花就更罕見——而越罕見的永遠贏。==

:::tip[如果你拿的是同花聽牌，對手在追順子，那你的處境很棒——就算**兩邊都成牌**，攤牌時你的同花還是壓過他的順子。]:::

---

## 3 種讓牌手看走眼的牌面（Board Spots）

![牌面顯示 8♥ 7♥ 6♥ 5♠ A♣——場上有三張紅心，就算你手裡是順子，同花也還活著](/images/holdem-flush-vs-straight-board.webp "牌面三張同花色——你的順子正面對一個活著的同花聽牌")

知道規則，和在現場讀懂牌面是兩回事——那個技巧正是[讀牌面判讀](/zh-hant/blog/holdem-reading-the-board)訓練你的東西。下面這三種正是真的會出錯的地方。

### 情況 1 — 你做成順子，但牌面是三張同花色

:::hand[8♥,7♥,6♥,5♠,A♣] 牌面（5 張）:::

你手裡是 **9♠ 10♠**，做成一手漂亮的 **6-7-8-9-10 順子**。感覺很強——可是牌面攤著**三張紅心**。如果對手手裡有兩張紅心，他就是同花，而**同花比順子大**。只要牌面上有三張或以上同一種花色，同花就活著；你的下注和跟注都要照這點來定價。

### 情況 2 — 同時聽順子又聽同花

:::hand[8♥,7♥,6♠,2♣] 牌面（4 張，轉牌）:::

你手裡是 **9♥ 5♥**。你已經有了 **5-6-7-8-9 順子**——那還盯著紅心幹嘛？因為你手上還有**四張聽同花**（9♥ 8♥ 7♥ 5♥）：河牌來任何一張紅心，你的順子就升級成同花，而**特別是 6♥** 會湊成一手 **5-6-7-8-9 同花順（第 2 名）**，那壓過一切。當你能免費聽一手更大的牌，就要帶著這個升級空間去打。

### 情況 3 — 你拿同花，對手攤出順子

:::hand[J♠,9♠,7♠,4♣,2♦] 牌面（5 張）:::

你手裡是 **A♠ 6♠** → 湊成 **A♠ J♠ 9♠ 7♠ 6♠**，一手 A 高同花。對手亮出 **10♥ 8♦**，是 7-8-9-10-J 順子，還很有自信地報牌。別眨眼：你的同花比較大。同花壓過順子，永遠如此。

---

## 什麼比同花大？（What Beats a Flush）

你的同花對上牌堆裡大多數牌都是領先的——但剛好有**四種牌型**（外加一手更大的同花）比它大：

:::compare
比你的同花大 | 輸給你的同花
葫蘆（第 4 名） | 順子（第 6 名）
四條（第 3 名） | 三條（第 7 名）
同花順（第 2 名） | 兩對（第 8 名）
皇家同花順（第 1 名） | 一對與高牌（第 9～10 名）
更大的同花 | 任何比較小的同花
:::

除了同花對順子之外，大家最愛爭的就是**同花對葫蘆**——而葫蘆贏。我手握一手漂亮的堅果同花、卻付錢給成對牌面上的葫蘆，這種次數多到我不太想承認，所以現在我盯的危險訊號很簡單：**成對的牌面**。看這一手：

:::hand[K♠,9♠,9♥,4♠,2♦] 牌面（5 張）:::

你手裡是 **A♠ 5♠**，做成堅果同花：**A♠ K♠ 9♠ 5♠ 4♠**。對手手裡是 **K♦ 9♦**，攤出 **9♦ 9♠ 9♥ K♦ K♠**——三條 9 帶一對 K 的葫蘆。==r:葫蘆比同花大==，沒有任何同花活得下來。在沒成對的牌面上，你的 A 高同花只會輸給同花順；可是牌面一旦成對，葫蘆和四條就都進場了。

當兩位玩家拿的是*同一種*牌型時，勝負就要逐張比——完整的系統在[比牌與踢腳牌規則](/zh-hant/blog/holdem-tiebreak-rules)裡。

---

## 同花對同花、順子對順子——平手怎麼分？（Flush vs Flush）

對，一手同花確實可以比另一手同花大。**花色不比大小**——從最大那張開始、由上往下逐張比：

| 玩家 | 同花 | 結果 |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **勝** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | 負 |

玩家 A 的 A 在**第一張**就壓過玩家 B 的 K，所以 A 勝。黑桃同花**不會**因為花色而贏過紅心同花——只有點數算數。（在真正的德州撲克手牌裡，兩手同花一定是*同一種*花色，因為都是靠共用的公牌湊出來的；這個抽象例子只是要把重點釘死：決定同花大小的是點數，永遠不是花色。）

順子更簡單：只比**最大那張**——沒有踢腳牌。

- **A-K-Q-J-10**（A 當高張，「百老匯／大順」）是最大的順子。
- **A-2-3-4-5**（「輪子／小順」，A 當 1）是最小的順子。

| 玩家 | 順子 | 結果 |
|--------|------|------|
| A | Q-J-10-9-8 | **勝** |
| B | J-10-9-8-7 | 負 |

Q 壓過 J，所以 A 勝。如果兩位玩家最後的五張牌點數完全相同，那就是[分池／平分底池](/zh-hant/blog/holdem-split-pot-rules)。

:::tip[【教練提醒】順子的 A 只能往一個方向連：當高張接 K-Q-J-10，或當低張接 2-3-4-5。它**不能繞環**——K-A-2 不是順子。這是新手最常犯的誤解之一。]:::

---

## 同花順是什麼？當兩者同時發生（What Is a Straight Flush）

![9♥ 8♥ 7♥ 6♥ 5♥——一手紅心同花順，撲克裡第 2 大的牌型](/images/holdem-flush-vs-straight-sf.webp "同花順——五張紅心連號，只輸給皇家同花順")

**同花順**是五張*連號*又*同花色*的牌——像 9♥ 8♥ 7♥ 6♥ 5♥。它是**撲克裡第 2 大的牌型**，只輸給皇家同花順（其實就是 A 高的同花順，A-K-Q-J-10 同花色）。它只有 **36 種組合（約 0.00139%）**，除了皇家同花順本身之外比任何牌型都罕見。

要注意的陷阱是：==**同樣那五張牌**必須既同花色、又連號==。看看牌面 **8♥ 7♥ 6♥ Q♠ 3♦** 上的差別：

- 拿 **K♥ 2♥** → 你的五張紅心是 K-8-7-6-2。不連號——那是==一手普通的同花，不是同花順==。
- 拿 **10♥ 9♥** → 你的五張紅心是 10-9-8-7-6。既連號*又*同花色——==g:一手 10 高的同花順==。

如果你的順子用的是某些牌、同花用的是另一些牌，那不能加在一起——你就只是打兩者中比較大的那一手，也就是同花。

---

## 短牌（Short Deck）裡牌型排名不一樣嗎？

會——短牌（6+）德州撲克是唯一一種會把這些牌型重新排序的常見玩法。在**短牌（6+）德州撲克**裡，2 到 5 的牌會從牌堆裡拿掉。牌變少，同花就變得*比*葫蘆*更難*做出來——所以在這種玩法裡排名會變，==r:**同花會比葫蘆大**==。原則從來沒變過：==越罕見的牌越贏==。變的只是牌堆。在用完整 52 張牌的標準德州撲克裡，==g:同花永遠比順子大、輸給葫蘆==。

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-tiebreak-rules | 比牌與踢腳牌規則 | /images/holdem-tiebreak-hero.webp
/zh-hant/blog/holdem-split-pot-rules | 什麼時候會分池？ | /images/holdem-split-pot-hero.webp
:::

## 常見問題 FAQ

**Q. 同花在撲克裡比順子大嗎？**

A. 是。同花是第 5 名、順子是第 6 名，所以在標準德州撲克裡同花永遠贏。五張同花色在統計上比五張連號更難做出來，而越罕見的牌型排名永遠越高。

**Q. 順子會比同花大嗎？**

A. 不會。在標準德州撲克裡，順子（第 6 名）永遠不會贏過同花（第 5 名）。這是常見的混淆，因為順子感覺比較難湊，但同花大約罕見兩倍——所以同花永遠把底池贏走。

**Q. 為什麼同花比順子大？**

A. 純粹是數學。順子不用管花色，所以大約有 10,200 種湊法，而同花只有 5,108 種。同花大約罕見兩倍，而撲克裡越罕見的牌型排名永遠越高。

**Q. 什麼比同花大？**

A. 葫蘆、四條、同花順和皇家同花順都比同花大——一手更大的同花（頂張更大）也是。它下面的一切（順子、三條、兩對、一對、高牌）都輸給它。

**Q. 什麼比順子大？**

A. 同花、葫蘆、四條、同花順和皇家同花順都比順子大——外加任何更大的順子。順子仍然贏過三條和它以下的一切。完整的由大到小順序都在[完整牌型大小排名](/zh-hant/blog/holdem-hand-rankings)裡。

**Q. 我的同花可以比對手的同花大嗎？**

A. 可以。兩手同花從頂張開始逐張比，所以 A 高（「堅果」）同花贏過 K 高同花。如果頂張相同，就比第二大的那張，依此類推比完五張。

**Q. 同花的花色會影響大小嗎？**

A. 不會。德州撲克沒有花色排名。花色只在*做出*同花時才有用，比牌時永遠不算——當兩手同花對撞（在德州撲克裡一定是同一種花色，因為共用公牌），只有點數決勝負，點數完全相同就分池。

**Q. 同花和順子有可能平手或分池嗎？**

A. 不會。一定有一手排名在另一手上面，所以同花就直接贏。分池只發生在兩手完全同一排名、而且五張點數完全一樣的牌之間。

---

## 3 個重點帶走

1. **同花（第 5 名）比順子（第 6 名）大**——標準德州撲克裡沒有例外。
2. 它會贏是因為它大約**罕見兩倍**：5,108 種同花組合 vs 10,200 種順子組合。
3. 盯緊牌面：**三張同花色**代表同花活著，**成對的牌面**代表葫蘆可能壓過你的同花，而同花色*加上*連號就是同花順。

用[完整牌型大小排名](/zh-hant/blog/holdem-hand-rankings)把整個順序記牢，在[比牌與踢腳牌規則](/zh-hant/blog/holdem-tiebreak-rules)裡學會接近的牌怎麼分勝負，如果你完全是新手，就順著這條線一路讀下去。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克牌型大小排名</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">全部 10 種牌型，附機率、範例與牌面謎題</div>
  </a>
  <a href="/zh-hant/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">比牌規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">比牌與踢腳牌規則</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">同花或順子平手時——誰把底池贏走？</div>
  </a>
  <a href="/zh-hant/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">分池</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">什麼時候會分池？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 種平分底池的情況，包含同花平手</div>
  </a>
  <a href="/zh-hant/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">踢腳牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">踢腳牌（Kicker）是什麼</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">順子沒有踢腳牌，但同花逐張比到底</div>
  </a>
</div>
`.trim(),
};

export default POST;
