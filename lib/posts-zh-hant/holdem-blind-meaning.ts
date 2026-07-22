import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-blind-meaning",
  title: "德州撲克盲注是什麼？小盲、大盲一次講清楚，還沒發牌就要下注的理由",
  seoTitle: "還沒看牌就要下注？德州撲克小盲大盲一次搞懂",
  desc: "為什麼有兩個人還沒發牌就得先下注？這篇用大白話講完盲注：小盲注、大盲注是什麼、誰下、SB/BB 各下多少、大盲底注，還有單挑時的特殊規則。",
  tldr: "盲注（Blind）是發牌前的強制下注。小盲注（SB）坐在莊家鈕左邊，大盲注（BB）再往左一位；大盲通常是小盲的兩倍，也是整桌的下注單位（1 BB）。",
  category: "rules",
  date: "2026-07-22",
  updated: "2026-07-22",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "9 分鐘",
  emoji: "💰",
  image: "/images/holdem-blind-meaning-hero.webp",
  imageAlt: "德州撲克桌上標示小盲注與大盲注的籌碼疊，旁邊是一枚金色莊家鈕",
  tags: ["盲注是什麼", "大盲注", "小盲注", "大小盲", "小盲大盲差別", "大盲底注", "德州撲克盲注"],
  content: `
我第一次坐進現場局，還沒看到任何一張牌，荷官就先敲了敲我面前的檯面：「小盲，麻煩下一下。」我整個人僵住——下注？下什麼？我牌都還沒看到欸。在撲克室跟家局裡打滾這些年，我幾乎每一場都還是會看到有新手，在同一個瞬間卡住、一臉茫然。

盲注是 ==讓整場牌局跑起來的引擎==——它是[德州撲克規則](/zh-hant/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp")裡，第一個真的會花到你籌碼的環節。一旦想通它，遊戲裡那些數字話術（「加到 2BB」「20BB 的籌碼量」）就突然全都說得通了。這篇一次幫你講清楚。

---

> **快速解答**
> 盲注是發牌前就要下的 **強制注**。**小盲注（SB）** 坐在莊家鈕的正左邊；**大盲注（BB）** 在小盲的左邊。大盲通常是小盲的 **兩倍**，也是整桌標準的下注單位。

---

### 三個核心數字

:::stripe
2 | 每一手牌都要下的強制注個數
1/2 | 小盲注通常是大盲注的一半
1 BB | 大盲＝整桌的下注單位
:::

---

## 盲注是什麼——為什麼一定要有它？

**盲注（Blind）** 是在你的牌發下來 *之前* 就被迫下的注——你是「盲下」，什麼都還沒看到就先押。每一手牌都有兩名玩家下盲注：小盲和大盲，也就是莊家鈕左邊緊挨著的兩個座位。

為什麼要逼人先付這筆錢？==g:為了讓牌局活下去。== ==r:沒有盲注的話，每個人都可以一直蓋牌、無止盡地枯等一手大牌==；底池永遠是空的，詐唬也變得毫無意義，整場牌局就停擺了。==g:每手牌兩個強制注，保證檯面上永遠有東西可以爭。==

---

## 小盲注是什麼？

**小盲注（Small Blind, SB）** 是兩個強制注裡比較小的那個，由坐在 **莊家鈕正左邊** 的玩家下。它通常是 **大盲的一半**——在一場 $1/$2 的局裡，小盲就是 $1。

它也是全桌出了名最難打的座位：你用一手隨機牌付了半個注，而且從翻牌開始，每一條街你都要 **第一個** 行動，握著最少的資訊。這就是為什麼小盲對幾乎所有人來說，長期都是輸錢的位置——目標是在這裡 *少輸*，而不是想著要贏。

---

## 大盲注是什麼？

**大盲注（Big Blind, BB）** 是完整的基本注，由 **小盲左邊** 緊挨著的玩家下。在 $1/$2 的局裡，大盲就是 $2。如果翻牌前沒人加注，大盲會拿到一個特別的權利——**「選擇權（option）」**，可以直接[過牌](/zh-hant/blog/holdem-betting-actions)、免費看翻牌。

大家會單獨去搜「大盲」是有原因的：它不只是一個座位，而是 ==**衡量整場牌局的那把尺**==。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| BB 的講法 | 意思 | 真實例子（$1/$2 局） |
|---------------|---------------|--------------------------|
| **加到 2BB** | 加注到大盲的兩倍 | 加到 $4 |
| **20BB 籌碼** | 手上有 20 個大盲的籌碼 | $40 的籌碼量 |
| **開池 3BB** | 標準的翻牌前加注大小 | 加到 $6 |
| **防守大盲** | 用大盲位置去跟一個加注 | 你已下 $2，面對加到 $6 的注 → 再跟 $4 |
| **100BB 深籌** | 滿籌，標準現金局 | $1/$2 桌上帶 $200 |

</div>

搞懂大盲，遊戲裡的那些數字話術——加注大小、籌碼深度、錦標賽壓力——就一次全部解鎖了。

---

## 大小盲規則：誰下、什麼時候下

兩個盲注都在 **發牌前** 下好，而莊家鈕每打完一手就順時針移動一個座位——所以盲注的座位也跟著轉，==每個人每一圈都會輪流各下一次大小盲==。沒有人能跳過自己那一輪。

| | 小盲注 | 大盲注 |
|------|-------------|-------------|
| 位置 | 莊家鈕正左邊 | 莊家鈕左邊第二位 |
| 金額 | 通常是大盲的一半 | 完整的基本注 |
| 翻牌前順序 | 倒數第二個行動 | **最後**行動（「選擇權」） |
| 翻牌後順序 | **第一個**行動（劣勢） | 第二個行動 |

> **提醒：** 翻牌前，行動從大盲左邊的玩家開始，大盲最後行動——他能先看到其他所有人的決定。從翻牌開始，順序重置、盲注們反而變成很早行動。逐街的完整先後順序，在[德州撲克規則](/zh-hant/blog/texas-holdem-rules-for-beginners)裡有完整拆解，鈕位周圍每個座位的名稱則在[位置策略](/zh-hant/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp")裡講清楚。

---

## 盲注要下多大？現金局與錦標賽的級別

級別寫成 **SB/BB**。「$1/$2」的局就代表小盲 $1、大盲 $2；小盲是比較小的數字，大盲是比較大的那個。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 級別 | 小盲注 | 大盲注 | 常見買入／級別 |
|:---|:---:|:---:|:---:|
| $0.5/$1 | $0.50 | $1 | $60–$100 |
| $1/$2 | $1 | $2 | $100–$300 |
| $2/$5 | $2 | $5 | $200–$500 |
| $5/$10 | $5 | $10 | $500–$2,000 |
| 25/50（錦標賽） | 25 籌碼 | 50 籌碼 | 盲注第 1 級 |
| 100/200（錦標賽） | 100 籌碼 | 200 籌碼 | 中盤級別 |

> **黃金守則：** ==坐下前一定要先看清楚級別牌==——有些牌房會跑非標準的結構，像 $1/$3 或 $2/$3。

</div>

- **現金局：** 盲注 ==g:**固定不變**==。坐進 $1/$2 的局，直到你離桌都是 $1/$2。（想更深入比較，看[錦標賽怎麼玩](/zh-hant/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp")。）
- **錦標賽：** 盲注 ==r:按計時器 **往上升**==（例如 25/50 → 50/100 → 100/200），所以打到越晚，壓力越大。盲注級別、計時、結構表都在[錦標賽怎麼玩](/zh-hant/blog/holdem-tournament)裡講。

---

## 大盲底注（Big Blind Ante）是什麼？（順帶講盲抓 Straddle）

多數錦標賽從前段或中段開始，會加進 **底注（Ante）**——一筆每手牌額外收、疊在盲注之上的小額強制注，用來把底池墊大、獎勵積極打法。現代常見的版本是 **大盲底注（Big Blind Ante）**：不用每個人各丟籌碼進去，而是 ==由大盲一個人代替全桌下一份底注——通常等於一個大盲==，這樣牌局又快又乾淨。底注什麼時候、怎麼開始生效，是[錦標賽盲注結構](/zh-hant/blog/holdem-tournament)的一部分。

還有一個你會在現金局看到的強制注遠親：**盲抓（Straddle）**——一個 *自願* 的額外盲注（通常是 2× 大盲），由大盲左邊的座位下，暫時把這一手的注碼拉高。它有自己的一套規則、種類與行動順序，完整說明在[德州撲克術語大全](/zh-hant/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp")裡查得到。

---

## 單挑（Heads-Up）時盲注誰下？

當桌上只剩兩名玩家（或本來就是單挑對戰）時，平常的規則會 ==r:反轉==。**莊家鈕下小盲注**，並在翻牌前 ==**第一個**== 行動；另一名玩家下大盲注、翻牌前 ==**最後**== 行動——然後從翻牌之後每一條街都變成他先動。這是唯一一次鈕位要下盲注，而幾乎每個人第一次碰到都會愣住。

---

## 沒下到盲注會怎樣？（死盲 Dead Blinds）

坐進一場現場現金局，你通常沒辦法免費開打：你要嘛 **補下一個大盲** 立刻加入，要嘛等盲注輪到你的座位。如果你離桌一下，==**漏掉了你的盲注**==，多數牌房會要你回座時補下才能重新加入——漏掉的大盲當成一個有效的活注，漏掉的小盲則是一枚 ==**死籌碼**==、直接被收進底池。線上牌桌會自動幫你處理這一切。

---

## 從盲注位怎麼打——30 秒速成版

![籌碼疊朝底池推過去的德州撲克桌面——從按鈕位發動的偷盲全推](/images/holdem-blind-steal.webp "從按鈕位發動的偷盲——沒人跟就贏下兩個盲注")

盲注位是我看新手最常默默流血的地方——不是一次大底池爆掉，而是每一圈都漏掉一點點。兩個習慣就能修掉大半：

- **小盲：打法從簡。** 翻牌前倒數第二個動，但翻牌後 **第一個** 動，乾淨的新手打法是 **加注或蓋牌**，不要跟注。跛入（limp）然後在不利位置被反打回來，是穩定的籌碼漏洞——小盲是我看新玩家整場輸最多的座位。
- **大盲：照賠率防守。** 你已經下了一個完整的注，所以你能有利可圖地跟注的範圍，比任何座位都寬。面對一個 2.5 BB 的開池（小盲蓋掉），你跟 1.5 BB 進一個 4 BB 的底池——大約 2.7 比 1，代表你大概有 27% 的勝率，這個跟注就打平。這套數學就是[底池賠率](/zh-hant/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp")，也是「防守大盲」之所以存在的原因。
- **後位：偷盲。** 當所有人都蓋牌給按鈕或關煞位，一個只想贏下那兩個盲注的加注，就叫 **偷盲（Steal the Blinds）**——而反過來再加注回去，就是 **反偷（re-steal）**。偷盲的大小、各座位的範圍、要防守多寬，都是策略主題，在[位置策略](/zh-hant/blog/holdem-position-play)裡有深入說明。

---

:::readnext[繼續閱讀]
/zh-hant/blog/texas-holdem-rules-for-beginners | 德州撲克規則怎麼玩 | /images/rules-texas-holdem.webp
/zh-hant/blog/holdem-position-play | 德州撲克位置怎麼打 | /images/holdem-position-play-hero.webp
:::

## 常見問題 FAQ

**Q. 為什麼要下盲注？不下不行嗎？**

A. 不行——沒有盲注，牌局就跑不起來。盲注是每手牌兩筆的強制注，保證底池裡永遠有籌碼可以爭，這樣才不會每個人都一直蓋牌枯等大牌、讓遊戲停擺。它同時也給了牌局「動機」：因為檯面上一開始就有錢，你才有理由去偷盲、去搶底池、去用位置施壓——盲注不只是規則，更是整場戰略的起點。

**Q. 小盲下多少、大盲下多少？**

A. 大盲是完整的基本注，小盲 **通常是大盲的一半**。所以 $1/$2 的局，小盲下 $1、大盲下 $2；級別牌上寫成「SB/BB」，小的在前、大的在後。錦標賽則以籌碼計，例如 25/50 代表小盲 25、大盲 50，而且會隨時間往上升。

**Q. 大盲翻牌前可以過牌（check）嗎？**

A. 可以——這就是大盲的「選擇權（option）」。只要翻牌前沒有人加注（大家都只跟大盲、也就是「平跟」），輪到大盲時他可以直接過牌、免費看翻牌，因為他早就下好那一個大盲了。當然，如果大盲手上是強牌，他也可以選擇加注，而不是過牌放大家免費看牌。

**Q. 小盲位打起來很吃虧怎麼辦？**

A. 小盲確實是全桌最不利的座位：你用半個注的隨機牌入池，翻牌後每條街又都要第一個行動。實務上的解法是「加注或蓋牌」——不要用跛入去 *平跟* 到大盲。手牌不夠強就乾脆蓋掉；夠強就用加注 **3-bet**（再加注）取得主動權，逼對手在不利於他的情況下做決定。長期目標是在這個座位 *少輸*，而不是想著要贏。

**Q. 盲注跟花色（同花大小）有關係嗎？**

A. **完全沒有關係，這是兩碼事。** 有些娛樂城的文章會把「盲注」和「花色有沒有大小」混在一起講，很容易誤導人。盲注是發牌前的強制 *下注*，只跟位置與金額有關（小盲、大盲）；花色（黑桃♠、紅心♥、方塊♦、梅花♣）在德州撲克裡 **沒有大小之分**，比牌只看點數，兩手同花就比最大的那張牌。想釐清哪一手牌贏哪一手，看[德州撲克牌型大小排名](/zh-hant/blog/holdem-hand-rankings)。

**Q. 下了盲注之後可以蓋牌嗎？**

A. 可以。輪到你時，你跟其他人一樣能蓋牌；小盲可以選擇放棄、不去補足到大盲。但要記住：已經下進去的盲注 **不會退還**，蓋掉就是把那筆籌碼留在底池裡。

**Q. 單挑（兩人局）時盲注誰下？**

A. 只剩兩人時規則會反轉：莊家鈕下小盲注，並在翻牌前 **第一個** 行動；另一名玩家下大盲注、翻牌前 **最後** 行動。這是唯一一次鈕位要下盲注，幾乎每個人第一次碰到都會搞錯。

**Q. 沒下到盲注（漏盲）會怎樣？**

A. 多數牌房會要你回座時補下漏掉的盲注——漏掉的大盲當成有效的活注，漏掉的小盲則是一枚死籌碼、直接進底池。或者，你也可以等大盲自然輪回你的座位再入局。線上牌桌會自動處理。

**Q. 「大盲」和「大小盲」是同一件事嗎？**

A. 不完全是——「大小盲（盲注）」指的是小盲和大盲兩個合起來，而「大盲」專指其中比較大的那個強制注，也是整桌的基準單位。搜尋時別把兩者混為一談。

---

## 重點整理

1. 盲注是 **發牌前的強制注**：小盲在莊家鈕左邊、大盲再往左一位，大盲通常是小盲的兩倍。
2. **大盲是整桌的單位**——加注、籌碼量、錦標賽壓力全都用 BB 來衡量。
3. 小心打你的盲注位：**小盲加注或蓋牌**、**大盲用底池賠率防守**，並在輪到你偷盲的後位時研究偷盲。

整體還是新手嗎？[德州撲克規則怎麼玩](/zh-hant/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp")會把基礎講完，[位置策略](/zh-hant/blog/holdem-position-play)則說明你的座位——不只是盲注——怎麼左右你的每一個決定。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">位置</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克位置怎麼打</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">從槍口位到按鈕、有利與不利位置、開牌範圍</div>
  </a>
  <a href="/zh-hant/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">新手規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克規則怎麼玩</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲注、發牌順序、翻牌前→河牌的行動流程</div>
  </a>
  <a href="/zh-hant/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">錦標賽</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克錦標賽怎麼玩</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">升盲、底注、獎金結構與各種賽制</div>
  </a>
</div>
`.trim(),
};

export default POST;
