import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "德州撲克術語大全——牌桌上會聽到的每個術語，中英文對照一次搞懂",
  seoTitle: "從 Nuts 到 Fish——德州撲克術語中英對照大全",
  desc: "牌桌上會聽到的每個德州撲克術語，按情境分組、中英文對照一次講清楚：下注、位置、牌型、玩家類型，還有大家老是搞混的那幾組（過牌 vs 跟注、暗三條 vs 明三條、Cooler vs Bad Beat）。",
  tldr: "這是一份大白話的德州撲克術語表，收的都是牌桌上真會碰到的詞，按你怎麼遇到它們來分組——下注動作、位置、牌型與牌面、玩家類型、錢，以及牌桌局面。先看下面那組「最容易搞混」的詞（過牌 vs 跟注、暗三條 vs 明三條、Cooler vs Bad Beat），再按分類隨便翻。有深入指南的術語會直接給你連結。",
  category: "glossary",
  date: "2026-07-22",
  updated: "2026-07-22",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "12 分鐘",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "一張德州撲克桌，綠色檯面上擺著籌碼、莊家按鈕和展開的公牌，代表撲克這門語言",
  tags: ["德州撲克術語", "術語大全", "中英文對照", "撲克黑話", "撲克名詞", "德撲術語", "玩家類型", "水上水下"],
  content: `
我第一次坐進現場局的時候，整桌人簡直像在說另一種語言。有人「槍口位」，另一個人「3-bet 了 CO」，荷官問我要不要「分兩次發（run it twice）」，等我拿著一對 K 輸牌，別人還告訴我「這都算不上 Bad Beat，只是個 Cooler（冷牌）」。我像聽懂了一樣點頭。其實我一句都沒懂。

撲克有它自己的一套詞，懂這套詞能幫你兩件事：讓你看起來不像個「魚（Fish）」，也讓你真正跟得上那些能幫你贏錢的策略。這份術語表收的是德州撲克牌桌上真會冒出來的詞——按 ==g:你實際會怎麼遇到它們== 來分組，而不是一股腦塞進一堵從 A 到 Z 的大牆裡。先看大家最愛搞混的那幾個詞，再按你需要的分類翻。凡是有深入指南的術語，你都能找到一條直達連結。

---

### 術語表速覽

:::stripe
6 | 個分類，按你怎麼遇到它們分組
90+ | 個術語，大白話講清楚
8 | 組「最容易搞混」的詞，先給你理順
→ | 關鍵術語都連到更深的指南
:::

---

## 大家最容易搞混的那些詞

如果你只想先理清十來個詞，就先理這些——它們是牌桌上引起最多困惑（也造成最貴錯誤）的那幾個：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 這些老被搞混 | 區別在哪 |
|:---|:---|
| **過牌 vs 跟注（Check vs Call）** | 過牌 **不投一分籌碼**（只有目前沒有下注時才行）；跟注是 **跟上**一個已經存在的下注。 |
| **盲注 vs 底注（Blind vs Ante）** | 盲注是 **按位置**收的強制下注（SB/BB）；底注是 **每個人**都要交、用來墊底池的。 |
| **暗三條 vs 明三條（Set vs Trips）** | 兩者都是三條——**暗三條**用的是一對口袋對子；**明三條**用的是一張底牌 + 牌面上的一對。 |
| **Cooler vs Bad Beat** | [Cooler（冷牌）](/zh-hant/blog/holdem-cooler)＝你一路落後又蓋不掉；Bad Beat（爆冷）＝你本來領先卻被對手超車。 |
| **價值下注 vs 詐唬（Value bet vs Bluff）** | 價值下注想 **讓更差的牌跟你**；詐唬想 **讓更好的牌蓋掉**。 |
| **底池賠率 vs 隱含賠率（Pot odds vs Implied odds）** | [底池賠率](/zh-hant/blog/holdem-pot-odds) 只算 **現在池裡**的籌碼；隱含賠率還加上你 **後面會贏到**的部分。 |
| **VPIP vs PFR** | VPIP＝你多常 **入池玩牌**；PFR＝你多常 **加注**。PFR 永遠不可能超過 VPIP。 |
| **3-bet 的數法** | 盲注是第 1 次下注、開池加注是第 2 次，所以 **再加注才是 3-bet**（不是第一次加注）。 |

</div>

---

![一張德州撲克術語表的六大分類視覺地圖——下注動作、位置、牌型、玩家類型、錢、局面](/images/holdem-glossary-categories.webp "這份術語表分成的六組——按你所處的情境來翻，別只按字母順序找")

## 下注動作

輪到你時，你手上能做的每一件事。如果你是全新的新手，先搞懂[德州撲克規則與下注流程](/zh-hant/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp")。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **過牌（Check）** | 不下注、把行動權讓給下一位——只有這一輪還沒人下注時才行。 |
| **下注（Bet）** | 在一條下注輪裡第一個把籌碼放進底池。 |
| **跟注（Call）** | 跟上目前的下注，留在這手牌裡。 |
| **加注（Raise）** | 把目前的下注加大，逼別人跟更多或蓋牌。 |
| **蓋牌（Fold）** | 放棄你的牌，也放棄對底池的一切主張。 |
| **全下（All-in）** | 押上你全部的籌碼；你只能贏你有蓋到的那部分底池（見邊池 Side Pot）。 |
| **跛入（Limp）** | 翻牌前只跟大盲、不加注就入池——通常是弱、被動的打法。 |
| **開池加注（Open）** | 第一個用加注入池的玩家。 |
| **3-bet** | 開池之後的再加注（把盲注算成第一次下注，這是第三次）。 |
| **4-bet** | 對 3-bet 的再加注。 |
| **C-bet（持續下注）** | 翻牌前加注的人，在翻牌圈接著下的注。 |
| **領打（Donk bet）** | 不利位置的人，朝上一條街的加注者搶先下注（過去被當成失誤，現在是低頻工具）。 |
| **價值下注（Value bet）** | 拿強牌下注，希望被更差的牌跟。 |
| **詐唬／半詐唬（Bluff / Semi-bluff）** | 詐唬是拿弱牌下注逼走更好的牌；半詐唬是拿還能成的聽牌去做。 |
| **過牌加注（Check-raise）** | 先過牌，等對手下注後再加注——強而有欺騙性的一手（現代牌房合法）。 |
| **最小加注（Min-raise）** | 規則允許的最小加注。 |
| **拉桿注（String bet）** | 一種違規、沒宣告就伸手拿更多籌碼的動作；會被判為跟注，不算加注。 |
| **全下（Jam／Shove）** | 直接推全部籌碼。 |
| **秒跟（Snap call）** | 毫不猶豫、瞬間就跟。 |
| **英雄跟注／抓詐（Hero call）** | 拿弱牌跟注，因為你判斷對手在詐唬。 |

</div>

---

## 位置

你坐哪裡，決定你什麼時候行動——而最後行動是一個永久的優勢。想知道怎麼實際運用，看[位置策略](/zh-hant/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp")。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **按鈕位（Button, BTN）** | 莊家位置；翻牌後 **最後**行動——全桌最好的座位。 |
| **小盲位（Small Blind, SB）** | 按鈕左邊的強制注；翻牌後第一個行動（翻牌後最差的座位）。 |
| **大盲位（Big Blind, BB）** | 兩個盲注中較大的那個；級別用盲注大小命名（$1/$2），而一個大盲是衡量籌碼量的標準單位。 |
| **槍口位（UTG, Under the Gun）** | 翻牌前第一個行動——需要最緊的開牌範圍。 |
| **CO（Cutoff／切位）** | 按鈕右邊；第二好的座位，很適合偷盲。台灣多半直接講「CO」。 |
| **HJ（Hijack／高劫持位）** | 按鈕右邊第二個；後位的開端。台灣多半直接講「HJ」。 |
| **LJ（Lojack／低劫持位）** | HJ 右邊；中後位（名稱會隨桌型變動）。 |
| **前位／中位／後位** | 按你多快行動來分組——前位最緊，後位最寬、最好賺。 |
| **有利位置／不利位置（In / Out of position）** | 在對手 **之後**行動＝有利位置；**先**行動＝不利位置。 |

</div>

完整的座位圖，之後在位置專篇會細講。

---

## 牌型與牌面

![金色莊家按鈕與兩張蓋著的底牌，加上 K♦ 7♣ 2♠ 翻牌攤在綠色檯面上的示意圖](/images/holdem-button-dealer-board.webp "底牌加上公牌組成你最強的五張牌——多數撲克術語就是在描述這件事怎麼發生")

牌本身，以及你用它們做出什麼。先想搞懂什麼牌贏什麼牌？看[德州撲克牌型大小排名](/zh-hant/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp")。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **底牌（Hole cards）** | 你的兩張私有、蓋著的牌。 |
| **公牌（Community cards）** | 五張大家共用、翻開的牌。 |
| **翻牌／轉牌／河牌（Flop / Turn / River）** | 前三張共用牌／第四張／第五也是最後一張。 |
| **堅果（The Nuts）** | 目前牌面下最強的可能牌型（後面的牌會改變它）。 |
| **踢腳牌（Kicker）** | 用來分辨相同牌型大小的旁牌（見[踢腳與平手規則](/zh-hant/blog/holdem-hand-rankings)）。 |
| **口袋對（Pocket pair）** | 兩張同點數的底牌。 |
| **超對（Overpair）** | 比牌面上每一張都大的口袋對。 |
| **頂對（Top pair）** | 用底牌配上牌面最大那張成對。 |
| **暗三條（Set）** | 用 **口袋對** + 一張公牌做成的三條（藏得很深）。 |
| **明三條（Trips）** | 用 **一張底牌** + 牌面上的一對做成的三條（踢腳控制較差）。 |
| **兩對（Two pair）** | 兩組不同的對子。 |
| **葫蘆（Boat / Full House）** | 三條加一對，台灣也常直接叫「葫蘆」。 |
| **四條／鐵支（Quads）** | 四張同點數的俗稱。 |
| **成牌（Made hand）** | 現在就已經成型的牌，相對於聽牌。 |
| **聽牌（Draw）** | 還需要改善的牌——例如 **同花聽牌**（差一張成同花）或順子聽牌。 |
| **卡順（Gutshot）** | 內順聽牌，只差中間一張（4 張補牌）。 |
| **兩頭順（Open-ender）** | 兩端都能成的順子聽牌（8 張補牌）。 |
| **後門（Backdoor）** | 需要 **兩張**接連的牌（轉牌 *和* 河牌）才能成。 |
| **送尾（Runner-runner）** | 靠轉牌 *和* 河牌 **兩張**都中而成的牌——後門聽牌真的成了（例如「送尾同花」）。 |
| **超牌／高張（Overcard）** | 比牌面都大的一張牌。 |
| **同花連張（Suited connectors）** | 兩張同花色的連牌（例如 8♥9♥）。 |
| **百老匯（Broadway）** | 10-J-Q-K-A 的順子，最大的順子。 |
| **輪子（The Wheel）** | A-2-3-4-5 的順子，**最小**的順子（A 當小）。 |
| **Cooler（冷牌）** | 大牌輸給更大的牌、卻沒有任何失誤——是撲克裡最無奈的一種輸法。 |
| **[Bad Beat（爆冷）](/zh-hant/blog/holdem-bad-beat)** | 你是大熱門，卻被一張幸運牌超車輸掉。 |

</div>

還在學什麼牌贏什麼牌？[牌型大小排名](/zh-hant/blog/holdem-hand-rankings)有完整順序。

---

## 玩家類型與黑話

![德州撲克撲克室牌桌俯視圖，K♦ 7♣ 2♠ 9♥ 3♦ 牌面、籌碼與莊家按鈕](/images/holdem-pub-players-table.webp "每張桌子都是各種類型的混合——學會這些黑話，你就知道該鎖定誰、又該避開誰")

檯子對面那些人，江湖上各種綽號的大集合。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **[魚（Fish）](/zh-hant/blog/holdem-fish)** | 技術差、長期輸錢的娛樂玩家——牌桌的利潤來源。 |
| **鯊魚（Shark）** | 牌技高超、專吃弱者的贏家。 |
| **鯨魚（Whale）** | 有錢卻打得差、玩大注的娛樂玩家——「口袋很深的魚」。 |
| **石頭（Nit）** | 極緊的玩家，只玩頂級牌，台灣也常直接講「Nit」。 |
| **驢子（Donkey, Donk）** | 罵人的話，指打得爛、沒技術的玩家。 |
| **跟注機器（Calling Station）** | 被動、跟太多、幾乎不蓋不加的玩家。 |
| **常客（Reg / Regular）** | 某個級別的「常駐」玩家，通常已有一定水準。 |
| **磨石／穩定盈利型（Grinder）** | 靠穩定的量和紀律慢慢累積利潤的玩家。 |
| **鬆凶／緊凶（LAG / TAG）** | Loose-Aggressive／Tight-Aggressive——兩種會贏的積極風格。 |
| **瘋子／狂人（Maniac）** | 超級積極、亂加亂詐唬的玩家。 |
| **肥羊／目標（Mark）** | 整桌都想從他身上贏錢的那個弱玩家。 |

</div>

---

## 錢與牌局

籌碼、級別，和兩種賽制。最大的分岔是**現金桌 vs 錦標賽**：現金桌用真實面值籌碼、隨時進出；錦標賽固定買入、盲注上升，打到你出局或贏。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **盲注（Blinds）** | 開場的 SB/BB 強制注——也是級別的名稱（$1/$2）。 |
| **底注（Ante）** | 每個人都交、用來墊底池的小額強制注，和盲注分開。 |
| **底池（Pot）** | 大家在爭的全部籌碼。 |
| **邊池（Side pot）** | 有人全下、其他人繼續下注時另外分出來的池。 |
| **籌碼量（Stack）** | 一名玩家面前的籌碼。 |
| **本金／資金（Bankroll）** | 你整體撥給撲克的錢——不是桌上的籌碼。 |
| **買入（Buy-in）** | 進一場牌局或錦標賽需要的金額。 |
| **[抽水（Rake）](/zh-hant/blog/holdem-rake)** | 牌房從每個底池抽的一小份。 |
| **抽水返還（Rakeback）** | 把你付過的抽水退一部分回來的回饋。 |
| **[盲抓／抓頭（Straddle）](/zh-hant/blog/holdem-straddle)** | 一個可選的額外盲注（通常 2× BB），買下翻牌前最後的行動權。 |
| **現金桌（Cash game）** | 真實面值的籌碼，隨時進出，盲注固定。 |
| **無限注（NLH）／限注（Limit）** | 無限注可以下到你全部籌碼；限注把每次下注鎖在固定大小。德州幾乎都是無限注。 |
| **PLO（底池限注奧馬哈）** | 一種流行的變體：發四張底牌、必須剛好用兩張（不是同一種遊戲，但你會聽到它）。 |
| **錦標賽（Tournament）** | 固定買入、盲注上升，打到你出局或贏。 |
| **無重買（Freezeout）** | 不能重買的錦標賽——出局就出局。 |
| **保證獎池（GTD, Guaranteed）** | 錦標賽承諾的最低獎池，就算人數不足也照付。 |
| **手手制（Hand-for-hand）** | 接近錢圈泡泡時，每桌一次只打一手，讓沒人能拖時間混進錢圈。 |
| **賞金／擊殺（Bounty / Knockout）** | 每淘汰一名玩家就發一份獎金的錦標賽。 |
| **SNG（Sit & Go）** | 人一滿就開打的小型錦標賽。 |
| **MTT（多桌錦標賽）** | 隨著玩家出局而併桌的多桌錦標賽。 |
| **ICM（獨立籌碼模型）** | 在獎金跳點附近，把錦標賽籌碼換算成真實獎金權益的模型。 |

</div>

---

## 局面、數據與禮儀

正在發生什麼的那些詞——以及發生時該怎麼守規矩。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 術語 | 意思 |
|:---|:---|
| **攤牌（Showdown）** | 最後一注結束後亮牌決定贏家。 |
| **蓋牌／丟牌（Muck）** | 把牌面朝下丟掉。 |
| **分池／平分底池（Chop / Split pot）** | 平手時把底池分掉。 |
| **搓牌（Slow roll）** | 故意拖著不亮贏牌來挑釁——嚴重失禮。 |
| **上頭／傾斜（Tilt）** | 情緒失控導致的爛打，通常在輸牌之後。 |
| **破綻（Tell）** | 洩漏手牌資訊的身體或行為線索。 |
| **底池賠率（Pot odds）** | 底池對上跟注成本的比率——[怎麼計算](/zh-hant/blog/holdem-pot-odds)。 |
| **隱含賠率（Implied odds）** | 把你之後幾條街預期贏到的籌碼算進去的底池賠率。 |
| **勝率／權益（Equity）** | 你此刻占底池的百分比（[機率指南](/zh-hant/blog/holdem-probability)）。 |
| **期望值（EV, Expected Value）** | 一個決策長期的平均結果；+EV 長期會贏。 |
| **入池率（VPIP）** | 玩家翻牌前自願投錢的頻率——鬆／緊的指標。 |
| **翻前加注率（PFR）** | 玩家翻牌前加注的頻率——積極度指標（永遠不高於 VPIP）。 |
| **激進係數（AF）** | （下注＋加注）÷ 跟注，衡量攻擊性的另一個台灣常用數據。 |
| **GTO（賽局理論最佳解）** | 解算器算出的平衡、不可被剝削的策略（納許均衡）。 |
| **範圍（Range）** | 一名玩家在某個局面可能持有的所有手牌；高手用範圍思考，不是單一手牌。 |
| **水上／水下** | 台灣現場局俗語：這一場你淨贏就是「水上」，淨輸就是「水下」。在「局抽」抽水制下，通常只有水上（贏錢）的人才會被抽水。 |
| **冷牌組（Cold deck）** | 發出 Cooler 的一副倒楣牌（原指老千事先排好的牌）。 |
| **別敲玻璃缸（Don't tap the glass）** | 別去教育、數落弱玩家——你會把送錢的人嚇跑。 |
| **分兩次發（Run it twice）** | 全下的玩家把剩下的公牌發兩次，各賭一半底池，用來降低運氣波動。 |
| **單挑（Heads-up）** | 一對一打——兩人局，或錦標賽最後兩人。 |
| **搶先加注（RFI, Raise First In）** | 第一個用加注入池（開池加注）。 |
| **潑池（Splash the pot）** | 把籌碼亂丟進底池、而不是整齊疊在自己面前——不鼓勵，因為金額無法核對。 |

</div>

---

:::readnext[繼續閱讀]
/zh-hant/blog/texas-holdem-rules-for-beginners | 德州撲克規則怎麼玩 | /images/rules-texas-holdem.webp
/zh-hant/blog/holdem-hand-rankings | 德州撲克牌型大小排名 | /images/holdem-hand-rankings-hero.webp
:::

## 常見問題 FAQ

**Q. 新手最該先懂哪些德州撲克術語？**

A. 最基本的是下注動作（過牌、下注、跟注、加注、蓋牌、全下）、四階段（翻牌、轉牌、河牌）、位置（按鈕、小盲、大盲、槍口位），還有幾個牌型詞（堅果、踢腳牌、暗三條、頂對）。把上面那組「最容易搞混」的先搞懂——尤其是過牌 vs 跟注、暗三條 vs 明三條——你就幾乎聽得懂整桌的對話了。

**Q. 德州撲克裡的「水上／水下」是什麼意思？**

A. 這是台灣現場局的俗語。這一場（或這一局）你淨贏、帳面是正的，就叫「水上」；淨輸、帳面是負的，就叫「水下」。在採「局抽」（按時間或按局抽水）的牌房裡，通常只有水上、也就是贏錢的玩家才會被抽水，輸家不再另外被抽。

**Q. 德州撲克的 UTG（槍口位）是什麼意思？**

A. UTG 是大盲位左邊緊挨著的座位，所以那名玩家在翻牌前第一個行動。因為所有人都在他之後、握有更多資訊，UTG 是最緊的位置——你應該只從這裡開最少、最強的牌。

**Q. 過牌和跟注差在哪？**

A. 過牌是不投任何籌碼、把行動權讓下去，而且只有這一輪還沒人下注時才允許。跟注是跟上別人已經下的注。過牌免費；跟注要付出目前下注的金額。把兩者搞混，是新手最常犯的錯。

**Q. 暗三條和明三條差在哪？**

A. 兩者都是三條、大小也相同，但做法不同。暗三條（Set）是口袋對子配上牌面一張同點數（你拿 7-7，翻出一張 7）；明三條（Trips）是你一張底牌配上牌面已有的一對（你拿 A-7，牌面是 7-7）。暗三條藏得深、踢腳控制也好，通常贏更多。

**Q. Cooler 和 Bad Beat 差在哪？**

A. Bad Beat（爆冷）是錢進去時你是大熱門，卻被一張幸運牌超車。Cooler（冷牌）是你一路落後、手上又是一手強到蓋不掉的牌，對手根本不需要運氣——大牌從頭到尾都領先。快速判斷：如果對手要 *改善* 才能贏，那是 Bad Beat；不用，就是 Cooler。

**Q. 什麼是 3-bet？為什麼第一次加注不算「1-bet」？**

A. 3-bet 是翻牌前的第一次再加注。計算時把盲注算進去：大盲當成第一次下注、開池加注是第二次，所以下一個加注是第三次——3-bet。在那之上再加注就是 4-bet。新手會搞混，是因為那「第一次加注」在順序上其實已經是第二次下注了。

**Q. VPIP 和 PFR 是什麼？**

A. VPIP（自願入池率）是玩家翻牌前選擇玩牌的比例——衡量他鬆還是緊。PFR（翻前加注率）是他翻牌前加注的比例——衡量積極度。PFR 永遠不會高於 VPIP，兩者差距大就代表這是個被動、愛跟注的玩家。

---

## 接下來去哪

這份術語表是地圖；真正的學習在它連到的那些指南裡。幾個好的起點：

- **最基礎：** [德州撲克規則怎麼玩](/zh-hant/blog/texas-holdem-rules-for-beginners)。
- **牌型：** [什麼牌贏什麼牌](/zh-hant/blog/holdem-hand-rankings)。
- **數學：** [底池賠率](/zh-hant/blog/holdem-pot-odds) 和 [機率與勝率](/zh-hant/blog/holdem-probability)。
- **策略：** [起手牌表](/zh-hant/blog/holdem-starting-hands-chart) 和 [位置策略](/zh-hant/blog/holdem-position-play)。

把這頁加進書籤，每次有詞卡住你就回來翻。說得出這套語言，這個遊戲就不再是「發生在你身上」，而開始變成你 *對整桌* 做的事。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">新手規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克規則怎麼玩</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲注、發牌順序、牌型大小一次搞懂</div>
  </a>
  <a href="/zh-hant/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克牌型大小排名</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">堅果、踢腳、暗三條到底是什麼</div>
  </a>
  <a href="/zh-hant/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">數學</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">底池賠率怎麼算</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">把術語變成賺錢的跟注或蓋牌</div>
  </a>
  <a href="/zh-hant/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">位置</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克位置怎麼打</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">有利位置與不利位置的差別</div>
  </a>
</div>
`.trim(),
};

export default POST;
