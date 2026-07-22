import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "牌型一樣誰贏？德州撲克平手與踢腳牌完整比法",
  seoTitle: "同對子誰贏？德州撲克平手比法一次看",
  desc: "攤牌一樣是一對，卻還是輸掉底池？這篇一次講清楚德州撲克平手怎麼比：同對子、同兩對誰贏、第五張什麼時候決勝、什麼情況才真的平分底池。",
  tldr: "平手一律照固定順序比：先比牌型，再比組成牌型的牌，最後從最大到最小逐張比踢腳牌。同對子→第一張踢腳大的贏；五張完全一樣→平分底池。花色永遠不破平手。",
  category: "hand-rankings",
  date: "2026-07-22",
  updated: "2026-07-22",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "12 分鐘",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "撲克攤牌：A♠ K♦ 對上 A♥ 9♣，公牌 A♦ Q♠ 7♥ 3♣ 2♦ —— 同樣是一對A，由踢腳牌決定贏家",
  tags: ["德州撲克平手", "牌型一樣誰贏", "同對子誰贏", "兩對平手", "第五張決勝", "踢腳牌", "同花比大小", "平分底池"],
  content: `
你翻出一對A。對手也是一對A。荷官盯著旁邊那幾張牌看了一秒 —— 然後把整個底池推向了 *他*。==r:同樣是一對，你怎麼會輸？==

在牌桌邊打滾這麼多年，我看過這一幕卡住牌局的次數比任何一條規則都多：有人半站起身，荷官敲敲檯面，全桌都在等一個解釋。答案在這裡。德州撲克裡的每一次平手，都由一套固定程序決定，這套程序就座落在[德州撲克牌型大小](/zh-hant/blog/holdem-hand-rankings)的下一層 —— 牌型排名告訴你*哪一種牌*贏；平手規則告訴你當雙方牌型一樣大時，*哪一位玩家*贏。

大部分的工作，都由一張牌完成：==**踢腳牌（Kicker，亦稱邊牌）**==。哪些牌型有踢腳、各有幾張，完整定義收在[踢腳牌是什麼](/zh-hant/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp")裡。這篇講的是*程序* —— 同對子、兩對、三條、順子、同花到底怎麼比出平手，還有那張大家老是漏看的第五張牌。

---

### 平手比法速覽

:::stripe
3 | 決定每一次平手的步驟
1 | 兩對牌裡的踢腳牌位子
0 | 靠花色破的平手
:::

---

## 德州撲克平手比法：三步固定順序

**平手一律照固定順序比：先比牌型，再比組成牌型的牌，然後從最大到最小逐張比踢腳牌 —— 如果五張牌還是全一樣，就平分底池。** 每一次攤牌都跑同樣的三道檢查：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 步驟 | 比什麼 | 說明 |
|:---:|---|---|
| **1** | 牌型 | 大的牌型永遠贏（同花贏順子，以此類推） |
| **2** | 組成牌型的牌 | 牌型一樣？較大的對子／三條／最大張贏 |
| **3** | 踢腳牌，最大張先比 | 第一個不一樣的地方就拿走底池 |

</div>

如果第1步就分出勝負，你根本不會走到第2步。如果第3步把牌都比完了，兩手就是一模一樣，==g:底池平分==。至於籌碼之後怎麼分（畸零籌碼、三家平分、邊池），那是[平分底池規則](/zh-hant/blog/holdem-split-pot-rules)的範疇。第2步和第3步才是牌桌上吵架的地方，我們接下來就往那走。

---

## 兩人同對子怎麼比（踢腳決勝）

**第一張踢腳大的贏。一對用三張踢腳，從最大那張開始一次比一張 —— 第一個不一樣的地方決定底池。**

拿上面照片裡那手牌來看：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**玩家A：** A♠ K♦  ·  **玩家B：** A♥ 9♣
**公牌：** A♦ Q♠ 7♥ 3♣ 2♦

| 玩家 | 最強五張 | 踢腳牌 | 結果 |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **贏** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | 輸 |

</div>

兩邊都是一對A，所以踢腳牌就依序捉對比大小：==g:K贏Q —— 比完收工。== B手上那張9其實還在牌裡、當第二張踢腳，但比較根本走不到那一步。

注意B最大的那張踢腳，是**公牌**上的Q，不是他手上那張9。==r:踢腳牌只有真的進到你最強五張裡才算數== —— 一張比較大的公牌，會把你的底牌擠下順位。這也是為什麼你起手第二張牌的重要性不輸那張A：在這裡 A-K 和 A-9 都是「一對A」，但只有一邊會贏（[起手牌表](/zh-hant/blog/holdem-starting-hands-chart)）。

---

## 每種牌型的平手比法

**每一種牌型都有自己的比較順序 —— 有些要比到踢腳，有些完全由組成牌型的牌決定。** 標記會顯示這種牌型有沒有用到踢腳：

:::tiebreak
皇家同花順|必定平手（分池）|-無踢腳牌
同花順|只比最大的牌|-無踢腳牌
四條|先比四條點數 → 第5張|+看踢腳牌
葫蘆|先比三條 → 再比對子|-無踢腳牌
同花|五張由大到小逐張比|-無踢腳牌
順子|只比最大的牌|-無踢腳牌
三條|三條點數 → 2張踢腳|+看踢腳牌
兩對|大對 → 小對 → 踢腳|+看踢腳牌
一對|對子點數 → 3張踢腳|+看踢腳牌
高牌|五張由大到小逐張比|+看踢腳牌
:::

最容易在牌桌上吵起來的三種：

- **三條用兩張踢腳，大的先比。** 公牌是 A♣ A♥ 7♦ 5♣ 2♠ 時，拿 A♠ J♠ 的人做成 A-A-A-==g:J==-7，贏過 A♦ 10♦ 的 A-A-A-==r:10==-7 —— J大過10，共用的那張7根本不用比。
- **葫蘆沒有踢腳。** 先比三條、再比對子：K-K-K-A-A 贏 K-K-K-Q-Q，是靠對子分出來的。
- **同花五張全比 —— ==r:永遠不比花色==。** A高的同花贏K高的同花；點數完全一樣就分池。

---

## 兩對的比較順序：大對→小對→踢腳

**先比大對，再比小對，最後比那張單一踢腳 —— 就照這個順序。** 兩對剛好帶一張踢腳，所以比完兩組對子之後，只剩一張牌可以吵。

公牌是 **K♦ 9♣ 9♠ 5♦ 2♥** 時，K♠ Q♦ 做成 K♠ K♦ 9♣ 9♠ ==g:Q♦==，K♥ J♥ 做成 K♥ K♦ 9♣ 9♠ ==r:J♥==。同樣是一對K加一對9，所以由那張單獨的踢腳決勝：==g:Q大過J。==

接著是真正會決定輸贏（決定真金白銀）的陷阱 —— ==r:**疊牌（Counterfeit，被公牌反做）**==：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:16px;padding:16px 20px;margin:20px 0">

**你：** 5♠ 4♠  ·  **對手：** A♣ K♦
**翻牌 5♦ 4♥ K♣** —— 你的兩對（5和4）領先他那對K
**轉牌 9♠、河牌 9♥** —— 最終公牌 5♦ 4♥ K♣ 9♠ 9♥

| 玩家 | 最強五張 | 牌型 |
|--------|-----------|------|
| 你 | ==r:9♠ 9♥== 5♠ 5♦ K♣ | 9和5兩對 —— 你的4不見了 |
| 對手 | K♦ K♣ 9♠ 9♥ A♣ | **K和9兩對 —— 贏** |

</div>

公牌成對的那對9，同時送給*兩位*玩家一個更好的第二對 —— 你的4被==r:疊掉了==，剩下唯一能比的就是頂對：K大過9。翻牌時領先的那手牌，在雙方都沒有改善自己底牌的情況下，就這樣輸掉了底池。

---

## 順子的比較與輪子的排位

**能 —— 順子純粹只比最大那張牌，而A當小的「輪子」是全場最小的順子。**

公牌是 4♦ 3♣ 2♠ K♦ Q♥ 時，拿 A♠ 5♠ 的人做成輪子：5-4-3-2-A。拿 6♥ 5♥ 的人做成 6-5-4-3-2。==r:A在輪子裡當*小*==，所以 A-2-3-4-5 座落在順子階梯的最底層 —— ==g:6高的順子贏。== 兩副最大張一樣的順子就是一模一樣，一樣的牌就平分。

輪子有兩件事*做不到*：A不能從中間繞回來（Q-K-A-2-3 什麼都不是），也不能同時當大又當小。同花走的是平行的規則 —— 五張由大到小全比、花色不算數。

---

## 第五張踢腳牌的決定性

**重要 —— 只要兩手牌的前四張一模一樣，那第五張就是整個底池。**

公牌 **A♥ K♣ Q♦ 4♣ 2♥**，A♠ 8♠ 對上 A♦ 7♦。兩邊都是一對A。第一張踢腳：公牌的K —— 平。第二張踢腳：公牌的Q —— 平。第三張踢腳：==g:8贏7。== 這一手牌名副其實的第五張牌，剛剛決定了它上面所有牌的勝負。

同樣的邏輯也發生在四條攤在公牌上的底池：大家共用四張牌，所以第五張就是整場攤牌。它也發生在高牌和同花的平手裡，一路比到最後一張。第五張牌唯一會失去意義的時候，是公牌本身就大過它 —— 那正是這道謎題的最後一塊。

---

## 你的踢腳不算數的時候 —— 以及底池平分

![資訊圖：公牌 A-K-Q-J-10 對每個人都是最強五張，所以 9-7 的牌贏不過它，底池平分](/images/holdem-tiebreak-best5.webp "七張取五：當公牌本身就是最強的牌時，你的底牌掉出了最強五張")

**如果你的底牌破不了公牌自己的最強五張，它們就不算數 —— 當這對每個人都成立時，底池就平分。**

看上面這副公牌：A♠ K♥ Q♣ J♦ 10♠，百老匯已經完成。你的 9♥ 7♠ *確實*能做出一副順子 —— K-Q-J-10-9 —— 但它**小於**攤在檯面上那副A高的順子，所以你的最強五張就是公牌本身。其他每個人也一樣。

比較細膩的版本，是你的牌有進場、但你的踢腳沒進場。公牌 A♥ K♣ Q♦ J♠ 9♥：A♠ 3♠ 對上 A♦ 2♦。兩邊都配成一對A，兩個踢腳位子也都由公牌填滿 —— 每位玩家都是 A-A-K-Q-J。那張3和那張2都是廢牌；最強五張一模一樣，==g:平分。==

![資訊圖：在 A-K-Q-J-9 的公牌上，A-3 和 A-2 都打出 A-A-K-Q-J，所以一模一樣的牌平分底池](/images/holdem-tiebreak-split.webp "當最強五張一張一張都對上時，底池平分 —— 花色永遠不破平手")

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-kicker | 踢腳牌是什麼？決定底池的旁牌 | /images/holdem-kicker-hero.webp
/zh-hant/blog/holdem-split-pot-rules | 德州撲克平分底池規則 | /images/holdem-split-pot-hero.webp
:::

## 常見問題 FAQ

**Q. 德州撲克的平手怎麼比？**

A. 照固定順序：先比牌型，再比組成牌型的牌（較大的對子、三條或最大張），然後從最大到最小比踢腳牌。如果五張牌點數全一樣，就平分底池 —— 花色永遠不拿來用。

**Q. 兩人牌型一樣誰贏？怎麼往下比？**

A. 口訣是「先比主體 → 再用踢腳補刀 → 五張全一樣才平分」。先比牌型本身（同對子時就是那個對子的點數），一樣的話就從最大那張開始逐張比踢腳牌，第一個不一樣的地方就贏。一對帶三張踢腳、兩對帶一張踢腳，都照這個順序往下走。只有五張完全比完都一樣，才是平手。

**Q. 兩人同對子誰贏？**

A. 最強五張裡踢腳較大的那位贏。一對帶三張踢腳，從最大往下比 —— 第一個不一樣的地方就拿走底池。三張全一樣才平分。

**Q. 兩人都兩對誰贏？**

A. 先比大對，再比小對，最後比那張單一踢腳。A和3的兩對贏K和Q的兩對，因為頂對（大對）會在其他一切之前先比。

**Q. 兩人同樣是三條誰贏？**

A. 三條帶兩張踢腳，大的先比 —— 所以兩人做成一樣的三條時，較大的邊牌贏。三條9的情況下，9-9-9-A-K 贏 9-9-9-A-Q，因為第二張踢腳（K）大過Q。三條和兩張踢腳都一樣才平分。（口袋對做成的暗三條幾乎不可能平手，因為那個特定的對子只有一位玩家能握有。）

**Q. 第五張牌在德州撲克裡重要嗎？**

A. 重要。當兩手牌的前四張一模一樣時，第五張就決定整個底池 —— 一對的第三張踢腳、同花的最小張、公牌四條旁邊那張邊牌。它唯一失去意義的時候，是公牌的牌大過你的底牌。

**Q. 什麼情況才是真的平手（Chop）？**

A. ==只有雙方最強的五張牌完全相同，才是真的平分底池==。請特別記住：**牌型一樣 ≠ 平手**。兩人都是一對A，但踢腳不同，還是分得出勝負；兩人都是同花，但點數不同，還是有輸贏。只有一張一張比到第五張都一樣，這個底池才會被平分。

**Q. 公牌鎖死時，底牌到底算不算？**

A. 如果公牌本身就是最強的五張（例如 A♠ K♥ Q♣ J♦ 10♠ 這種A高順子已經攤在檯面上），那你的底牌就==**無效**==、根本沒派上用場 —— 誰的底牌都改善不了公牌，於是大家一起用公牌、平分底池。底牌只有在能「破」公牌最強五張時才算數；破不了，它就掉出你的牌。

**Q. A可以在德州撲克裡當1嗎？**

A. 可以，但只有在 A-2-3-4-5 這副順子（「輪子」）裡，A當最小的牌 —— 這也讓輪子成為全場最小的順子。A不能從中間繞回來：Q-K-A-2-3 不是順子。

**Q. 你能做出比對手更大的順子嗎？**

A. 能 —— 順子純粹只比最大那張牌，所以 6-5-4-3-2 贏 A-5 的輪子，而百老匯（A-K-Q-J-10）贏過所有順子。最大張一樣就是一模一樣的順子，平分底池。

**Q. 兩人同樣是順子誰贏？**

A. 最大張較大的那副順子贏 —— Q-J-10-9-8 贏 J-10-9-8-7，因為順子只比最高那一張、沒有踢腳。兩副順子最大張一樣就是一模一樣，底池平分。這最常發生在順子大半靠公牌、雙方又補上同一端的時候。

**Q. 兩人都是同花誰贏？（花色能不能決勝？）**

A. 從最大張開始逐張比：A高的同花贏K高的同花，最大張一樣就比下一張，一路比完五張。==花色永遠不破平手==，所以五張點數全一樣就平分。花色只用在「判斷有沒有湊成同花（或同花順）」，不用來比大小。（在德州裡兩副同花一定同一花色，因為大家共用公牌。）

**Q. 兩人同樣是葫蘆誰贏？**

A. 先比三條 —— 三條大的贏，所以 K-K-K-2-2 贏 Q-Q-Q-A-A，就算那對A看起來比較大也一樣。只有三條一模一樣時，才去比對子。葫蘆沒有踢腳，所以三條和對子都一樣就平分。

**Q. 兩人都是同花順會怎樣？**

A. 較大的同花順贏，由最大張決定 —— Q高的同花順贏9高的同花順。皇家同花順就是A高的同花順，所以它贏過所有其他同花順。最大張一樣就是一模一樣的牌，平分底池。

**Q. 花色能不能決勝？德州撲克裡花色重要嗎？**

A. 花色只用在「湊成同花」，永遠不拿來排牌型大小、也不破平手。花色讓你組成同花（五張同一花色），但沒有任何一種花色大過另一種，所以黑桃同花不會贏過紅心同花，兩手其餘完全一樣的牌永遠平分。勝負只由點數和踢腳牌決定。

**Q. 在德州撲克裡花色曾經破過平手嗎？**

A. 不會。德州撲克沒有花色排序 —— 如果兩手最強的五張牌一張一張都對上，不管花色如何都平分底池。

**Q. 兩人的牌完全一樣會怎樣？**

A. 底池平均分掉 —— 也就是「平分（Chop）」。籌碼實際怎麼分、畸零籌碼歸誰、邊池怎麼結算，都在[平分底池規則](/zh-hant/blog/holdem-split-pot-rules)裡有講。

**Q. 德州撲克有可能平手（平分底池）嗎？**

A. 有，但不常見。真正的平手只在兩位（或以上）玩家最強的五張牌點數完全相同時發生 —— 最常見的是公牌本身就是最強的牌（「打公牌」），或是共用的順子、同花，沒人的底牌改善得了。這時底池平均分掉。踢腳牌存在的意義，正是在多數平手還沒變成平分之前，就先把它們比出勝負。

---

## 記住這3件事

1. 每一次平手都跑同樣的程序：==**牌型 → 組成的牌 → 踢腳 → 平分**== —— 沒有例外，也不看花色。
2. 踢腳牌只有在==g:進到你最強五張==裡才算數 —— 公牌能把它換掉，而公牌成雙對還能把你的兩對整個疊掉。
3. 順子只比最大張（輪子最小），同花五張全比 —— 當什麼都分不出兩手牌時，底池就平分。

用[完整牌型大小排名](/zh-hant/blog/holdem-hand-rankings)把整套順序鎖進腦子，把那張[踢腳牌](/zh-hant/blog/holdem-kicker)徹底搞懂，再到[平分底池規則](/zh-hant/blog/holdem-split-pot-rules)看清平手的籌碼到底怎麼分。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克牌型大小排名</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">10種牌型、踢腳與平手比法一次看</div>
  </a>
  <a href="/zh-hant/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">踢腳牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">踢腳牌是什麼？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">決定底池的那張旁牌、哪些牌型有</div>
  </a>
  <a href="/zh-hant/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">起手牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克起手牌表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">為什麼第二張牌和那張A一樣重要</div>
  </a>
  <a href="/zh-hant/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平分底池</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克平分底池規則</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 種 chop 情況、平手籌碼怎麼分</div>
  </a>
</div>
`.trim(),
};

export default POST;
