import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tournament",
  seoTitle: "沒打過德州撲克錦標賽？規則流程一次看懂",
  title: "德州撲克錦標賽怎麼打？買入、盲注結構、賽制與新手 Day 1 全攻略",
  desc: "德州撲克錦標賽怎麼運作？買入、升盲結構、賠付結構，freezeout／PKO／衛星賽賽制差別，加上新手 Day 1 流程，第一次報名要準備什麼一次看懂。",
  tldr: "德州撲克錦標賽裡，你付一筆固定買入換籌碼，盲注照計時器上升，直到一個人贏走全部籌碼。通常前 10–15% 的人進錢圈。賽制有 freezeout、PKO、衛星賽、deepstack——報名方式有直接買入、衛星賽晉級、或線上預先報名。台灣則多在立案的撲克協會打合法錦標賽。",
  category: "tournament",
  date: "2026-07-22",
  updated: "2026-09-12",
  masterUpdated: "2026-09-12",
  keepImagesInBody: true,
  readTime: "14 分鐘",
  emoji: "🏆",
  image: "/images/holdem-tournament-hero.webp",
  imageAlt: "熱鬧的現場德州撲克錦標賽會場，升盲計時器顯示 12,000/24,000，玩家正在爭一手底池",
  tags: ["德州撲克錦標賽", "錦標賽規則", "盲注結構", "賽制類型", "freezeout", "PKO", "衛星賽", "限時錦標賽", "台灣撲克協會"],
  content: `
我第一次走進現場德州撲克錦標賽，帶著 $200、對德州撲克一知半解，還完全搞不懂「盲注級別」或「泡泡時間」是什麼。

四小時後我出局了。但我已經清楚知道每個術語是什麼意思、我為什麼輸、什麼時候該再回來。

這篇就是我當年多希望有人先告訴我的一切——錦標賽結構到底怎麼運作、你報的是哪種賽制、怎麼報名才不會像個菜鳥，還有 Day 1 一小時一小時是什麼感覺。

---

### 一眼看懂

:::stripe
10–15% | 通常能進錢圈（拿到獎金）的比例
20–40 分鐘 | 現場賽每個盲注級別的長度
$100+$9 | 典型買入怎麼拆——獎池 + 手續費
:::

## 什麼是德州撲克錦標賽？（30 秒答案）

> **快速解答**
> 分辨錦標賽和現金桌，只要問一件事：桌上的籌碼能不能隨時換回現金？能的是現金桌；不能、只能打到出局或打完再依名次領獎金的，就是錦標賽。這一個差別決定了後面所有的規則和策略。

德州撲克錦標賽是一種比賽：所有人付同樣的報名費（**買入**）、拿同樣多的起始籌碼，一路打到一個人贏走場上全部籌碼。

**一句話總結：** 在現金桌，你的籌碼就是真錢、隨時能離場。在 freezeout 錦標賽，你的最大損失正好就是那筆買入——有重入和增購就會超過——但你在爭的是一個大得多的獎池的一份。

就這一個差別，從根本改變了籌碼價值、盲注壓力和策略。→ [現金桌 vs 錦標賽的完整差別](/zh-hant/blog/holdem-tournament-vs-cash-game)另有專篇（籌碼價值、升盲、ICM）。

---

## 錦標賽結構——買入、費用、起始籌碼

> **快速解答**
> 「$100+$9」裡的 $9 不進獎池——它是場地收的手續費，獎池只由每個人的 $100 累積。所以人數一公布，你可以自己驗算獎池，也能看出這場賽事的手續費比例合不合理；新手最常誤以為報名費會全數進獎池。

報名時，你付一筆買入。這筆錢分兩路：

| $109 買入（寫成「$100+$9」） | 去哪裡 |
|:---|:---|
| **$100** | → 獎池，所有參賽者共享 |
| **$9** | → 場地收的手續費（抽水） |

大型現場賽通常收買入的 8–10% 當手續費（小型每日賽常收更多）——這裡 $109 裡的 $9，約 8.3%。這筆手續費怎麼運作（以及為什麼線上和現場不一樣），在[撲克抽水怎麼算](/zh-hant/blog/holdem-rake)裡講得很細。

換來的，是一疊**起始籌碼**——常見 10,000 到 50,000 顆比賽籌碼，在第 1 級通常有 100–300 個大盲深。

**你的起始籌碼沒有現金價值。** 一疊 10,000 籌碼不等於 $10,000——它只是你的「比賽生命」。唯一重要的是：當獎金位置到來時，你的籌碼有沒有比別人多。

每場錦標賽都會公布它的**結構表（structure sheet）**：起始籌碼、盲注級別、每級長度、底注時程、賠付結構。報名時就跟櫃台要一張——它是全場最有用的一份文件。

---

## 盲注結構——升盲、底注與計時器

> **快速解答**
> 盲注結構決定的是「這場要打幾小時」和「你多快會變短碼」：級別越短、升得越急，深籌碼的優勢就越小。所以結構表要在報名前看，而不是坐下之後——同樣的買入，20 分鐘升一級和 40 分鐘升一級是兩種不同的比賽。

這是多數新手指南跳過、卻是錦標賽最重要的機制概念。要是你對[小盲和大盲到底是什麼](/zh-hant/blog/holdem-blind-meaning)還完全陌生，先補那一篇，下面每個「BB」數字才會一下子對上號。

**盲注一開始很小，照計時器上升——現場賽通常每 20–40 分鐘升一級。**

| 級別 | 盲注 | 底注 | 你的 1 萬籌碼 = |
|:---|:---:|:---:|:---|
| 1 | 25 / 50 | — | 200 個大盲 |
| 3 | 75 / 150 | 150 | 67 個大盲 |
| 6 | 200 / 400 | 400 | 25 個大盲 |
| 9 | 500 / 1,000 | 1,000 | 10 個大盲 |

注意：從第 1 級到第 9 級，**你一顆籌碼都沒輸掉**。但你的籌碼從 200BB 掉到 10BB，因為盲注漲了。這就是錦標賽逼出行動、最後淘汰玩家的方式。

==g:粗略原則：低於 20 個大盲，你就進入「全下或蓋牌」的邊界；到 15 就成了你的主要模式。低於 10 個大盲，你幾乎任何能打的牌——尤其在後位或小盲位——都得在盲注吃掉你之前推全下。==

**什麼是底注（ante）？** 過了前幾級，多數錦標賽會加「底注」——每手牌在盲注之外額外收的一筆強制注。現代多數現場賽用單一「大盲底注」（台灣的協會賽程上常寫成「大盲前注」），金額等於一個大盲，由大盲位玩家代替全桌付（所以上表底注欄和大盲一樣）。它把底池做大、加快節奏。底注一進場，你的籌碼縮得更快。

---

## 每場錦標賽都會經歷的 4 個階段

> **快速解答**
> 階段不是看時鐘、而是看平均籌碼有幾個大盲：一百到兩百個大盲是前期，三十到六十個是中期，泡泡時間和決賽桌則看剩下的人數。同一場比賽在不同桌感覺可能不同，但你自己的籌碼落在哪一段，才決定你該用哪套打法。

### 階段 1——前期級別（100–200 BB 深）
你有空間打牌。投機牌、摸暗三條、多看翻牌——都合理。多數新手在這裡打得太緊。盲注很便宜；先熟悉牌桌。

### 階段 2——中期（30–60 BB）
底注這時通常已進場。籌碼壓力開始。短籌碼玩家開始推全下。大部分人是在這個階段被淘汰的。

### 階段 3——泡泡時間（Bubble）
最緊張的階段。再淘汰一個人，剩下所有人就**進錢圈**（ITM = In The Money，拿到獎金）。[短籌碼](/zh-hant/blog/holdem-short-stack)會僵住，大籌碼會霸凌。這裡聰明地打，能在不贏任何一個底池的情況下加到真實的權益——[泡泡時間值得一篇專屬指南](/zh-hant/blog/holdem-bubble)。

### 階段 4——決賽桌（Final Table）
通常剩 6–9 人。每淘汰一個人，賠付就大幅跳升。這裡由 **[ICM（獨立籌碼模型）](/zh-hant/blog/holdem-icm)**主導決策——籌碼 EV 和真實獎金 EV 明顯背離。

---

## 錦標賽類型——freezeout、PKO、衛星賽、deepstack 與更多

> **快速解答**
> 第一次報名，先在兩種裡選：想要成本固定就選 freezeout；台灣協會的賽程上還常見一種「限時錦標賽」，打到時間結束就結算，下面有專節。賞金賽、衛星賽、重買賽等你打過幾場再碰，它們各自需要不同的打法。

| 賽制 | 怎麼運作 | 適合誰 |
|:---|:---|:---|
| **freezeout（無重買）** | 一次買入、不能重買。出局＝結束。 | 新手——成本固定 |
| **重買／重入（Rebuy/Re-entry）** | 在前期時段內再買籌碼——重買賽常常不用先出局 | 資金較大的積極玩家 |
| **賞金賽／KO（Bounty）** | 每淘汰一名玩家就拿一份固定賞金 | 愛動作的玩家——每次擊殺有額外收入 |
| **PKO（累進賞金）** | 賞金隨每次擊殺成長——一部分付給你、一部分加到你頭上 | 高波動、高上檔的玩家 |
| **deepstack（深籌碼）** | 起始籌碼明顯高於同系列的標準賽事，級別也更慢 | 想多打翻牌後的玩家 |
| **衛星賽（Satellite）** | 獎品是更大賽事的入場資格，不是現金 | 預算有限、瞄準大賽的玩家 |
| **Turbo／Hyper-Turbo（快速賽）** | 盲注級別比標準賽事短很多，籌碼很快變淺，早早進入 push/fold | 時間不多、習慣推或蓋決策的玩家 |
| **Mystery Bounty（神秘賞金）** | 賞金賽的一種：每次擊殺（通常從某個階段起）抽一個隨機獎金——多數很小，少數是頭獎 | 想搏一筆大額單次派彩的玩家 |
| **MTT（多桌錦標賽）** | 跨多桌的大場——玩家出局就併桌 | 任何人——最常見的賽制 |
| **SNG（Sit & Go）** | 人坐滿就開打（沒有固定開賽時間）——通常 6–9 人 | 想快速打一場、不用配合時間 |
| **限時錦標賽** | 打到計時歸零為止，依各協會規則分獎金 | 台灣協會的日常賽事 |

**給新手：** 從 **freezeout MTT** 開始——成本已知、規則簡單、沒有重買決策要煩。

錦標賽賽程上最常看到的三個賽制名稱，值得好好定義：

### 什麼是 freezeout（無重買）錦標賽？

freezeout 給每位玩家正好一次買入。輸光籌碼就淘汰——不能重買、不能重入。它是最原始的賽制，也是最適合新手的，因為你報名那一刻，總成本就固定了。

### 什麼是 PKO（累進賞金賽）？

PKO（Progressive Knockout）是一種賞金賽，通常每筆買入約一半進一般獎池、另一半變成那名玩家頭上的賞金。你淘汰某人時，通常當場拿到他一部分賞金的現金，其餘加到你自己的賞金上——讓你越贏、頭上的目標越大。確切比例各站各賽不同，50/50 常見但非通則，看大廳或結構表。

### 什麼是 deepstack（深籌碼）錦標賽？

deepstack 讓你的起始籌碼相對盲注明顯高於同系列的標準賽事，而且通常配更長的盲注級別。**它沒有統一的門檻數值**——「deepstack」始終是相對的說法。你要做的是翻開 structure sheet，算出自己第 1 級的籌碼相當於多少個大盲，再跟標準賽事的 100–200 BB 比一比。更多籌碼加更慢的計時器，代表更多翻牌後的博弈、更多從失誤中恢復的空間，也代表更長的比賽日。

**重買和加購（rebuy / add-on）呢？** 重買賽讓你在設定的前期時段內再買籌碼——很多賽事只要你的碼量不高於起始籌碼就行，不必先出局；加購則是那個時段結束時通常提供的一次性選購籌碼。之後，比賽就照 freezeout 進行。

### 台灣特有的「限時錦標賽」是什麼？

限時錦標賽是台灣協會賽程上很常見的一種賽制：比賽有明確的結束時間——見過的公告從 90 分鐘到 3 小時都有——中間照樣升盲。計時歸零就結算，主辦方統計每個還在場的人手上的籌碼來分獎金。**分法各協會不同**：有的直接依籌碼比例分（例如總獎池 10 萬、你握有全場 10% 的籌碼就分走 1 萬），也有的用 ICM 換算成名次獎金。**依比例分的那種**沒有「最後一人」，所以一般錦標賽後期的泡泡時間與 ICM 壓力在這裡幾乎不存在，數學上更接近一場盲注會上漲、時間到就結算的現金桌；用 ICM 換算的那種則不然。多數協會的做法是手續費在報名時一次收、桌上不另外逐底池抽水，但實際收費、時長與分配方式請以各協會公告為準。

---

## 什麼是衛星賽（Satellite）？

> **快速解答**
> 衛星賽贏到的不是錢，是一張特定賽事的入場券——所以報名前先確認兩件事：那場比賽你到底去不去得了，以及席位能不能轉讓或折現（要看主辦方的規定）。發多個席位的衛星賽，打法也跟一般錦標賽相反：席位一穩就停止冒險（只發一個席位的贏家全拿賽是例外）。

衛星賽是一種較小的錦標賽，獎品不是現金——而是**一張入場券**，進入一個更大、更貴的錦標賽。

**例子：**
- WSOP 主賽事買入：**$10,000**
- 衛星賽買入：**$500**（20 人）
- 獎品：主賽事的**1 個席位**

你不用花 $10,000，而是在一個 $500 的錦標賽裡跟另外 19 人比。一個人贏走那個 $10,000 席位。

**接力衛星賽**能壓得更低。$5 超級衛星 → $55 資格賽 → $215 賽事 → $1,050 的線上主賽事。很多大賽玩家，都是用直接買入的零頭、透過一連串衛星賽晉級進去的。

==g:衛星賽策略和一般錦標賽不同——在發出多個同樣席位的衛星賽裡，一旦你的籌碼足以保證拿到席位，就停止冒險，連好牌都蓋掉，避免在泡泡時間出局。只發一個席位的贏家全拿衛星賽是例外：那種要按籌碼EV 去搶第一。==

---

## 怎麼報名參加錦標賽——3 種方式（含台灣撲克協會）

> **快速解答**
> 三種方式的差別不在難易，而在「什麼時候付錢」：A 是到場才付、B 是出發前先付、C 是先用小錢賭一個席位。第一次就選 A，因為只有 A 能在櫃台當面問清楚結構表和晚報名時間。

### 方式 A：現場直接買入（最簡單）
1. 找到撲克室報名櫃台（大型賽事則是賽事櫃台）
2. 出示**有效證件**＋（若需要）會員卡
3. 用現金、籌碼或刷卡付買入
4. 拿到你的座位卡（桌號 + 座號）
5. 到你的桌子，把座位卡給荷官，領籌碼
6. 打第一手牌前先數你的起始籌碼——會發生錯誤

### 方式 B：線上預先報名
多數大型現場賽事讓你事先在線上報名：在賽事平台開帳號 → 線上付買入 → 到場驗證證件 → 自助機印座位卡或櫃台領。省掉排隊，大場值得。

### 方式 C：衛星賽晉級
在線上或現場找衛星賽 → 贏了就拿到目標賽事的席位券 → 到主賽事櫃台出示券＋證件 → 領座位卡。

**報名通常在開賽前 1–3 小時開放。** 大型系列賽，前一天先線上報名以保證席位。在亞洲打？[APT 仁川 2026 指南](/zh-hant/blog/apt-incheon-2026-guide)裡有一場真實賽事的日程、買入和報名流程。

> **台灣怎麼打？** 在台灣，多數人是在各地**立案的撲克協會（俗稱撲克室）**現場報名參加合法錦標賽，台北、台中、高雄都有據點——光是規模最大的連鎖就在 14 個縣市設了 20 個館；也可透過線上平台或衛星賽晉級國際賽事。各城市有哪些場館，見[全台德州撲克據點地圖](/zh-hant/blog/taiwan-poker-clubs-guide "thumb:/images/taiwan-poker-clubs-guide-hero.webp")。關於合法性的界線，見下方 FAQ。

---

## 錦標賽策略——分階段打法

> **快速解答**
> 分階段打法的意思不是「越後面越要打得好」，而是同一套技術在不同籌碼深度下權重不同：深的時候翻牌後功力最值錢，三十個大盲以下偷盲和防守變成主角，二十以下幾乎只剩全下或蓋牌的數學。認清自己在哪一段，比記招式重要。

一篇講不完完整的錦標賽策略——那是各專篇的工作——但這裡是每個獲勝計畫都掛在上面的分階段骨架：

**前期級別（100BB+）：** 打緊、注意位置，用能打爆大對子的牌便宜看翻牌。一套有紀律的[起手牌表](/zh-hant/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp")能擋掉多數新手災難。第一個小時別把籌碼詐唬光——第 1 級沒人會蓋牌。

**中期（30–60BB）：** 底注讓每個底池都值得爭。後位開寬一點、偷盲、更常防守你的大盲，並開始留意你這桌誰是短籌碼。

**短籌碼（20BB 以下）：** 全下或蓋牌接管一切——這裡的數學基本已解，用猜的會賠真錢。

**泡泡時間與決賽桌：** 生存數學蓋過籌碼數學。賠付壓力改變了你能打哪些牌——由上面階段那節連到的泡泡時間與 ICM 概念決定。

---

## Day 1 一小時一小時會發生什麼

> **快速解答**
> 第一次來最常出錯的不是打法，而是時間：報名通常在開賽前一個多小時開放、排隊可能很長，而晚報名關閉後就不能再進場。所以照下面的時間軸，抓開賽前至少半小時到場當底線，並先問清楚晚報名幾點截止。

這是多數新手只能靠吃虧學到的部分。以一場中午 12 點開賽的 $300 現場 freezeout 為例，一個實際的 Day 1 時間軸：

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">Day 1 時間軸——$300 freezeout，10,000 起始籌碼</div>
<div style="display:grid;gap:10px;font-size:13px">
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">10:30</div>
<div style="color:hsl(var(--foreground))">報名開放。出示證件、付款、拿座位卡。找到你的桌子。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">12:00</div>
<div style="color:hsl(var(--foreground))">發牌開打。第 1 級：盲注 25/50。你有 200BB。打探索性的牌。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">13:00–15:00</div>
<div style="color:hsl(var(--foreground))">第 2–4 級。晚報名還開著。人數增加。底注按結構表進場（上面示例是第 3 級）。有些玩家已經出局。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">約 15:30</div>
<div style="color:hsl(var(--foreground))">晚報名截止。公布最終人數、確認獎池。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">約 17:00</div>
<div style="color:hsl(var(--foreground))">晚餐休息（通常 1 小時）。約 40% 的人已被淘汰。開始併桌。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.06)">
<div style="color:hsl(var(--primary));font-weight:700">18:00–21:00</div>
<div style="color:hsl(var(--foreground))">泡泡時間逼近。開始手手制。壓力達到頂點。再一個出局，大家就都有獎金。</div>
</div>
<div style="display:grid;grid-template-columns:80px 1fr;gap:12px;padding:8px 0">
<div style="color:#22c55e;font-weight:700">21:00–23:00</div>
<div style="color:hsl(var(--foreground))">進錢圈——泡泡破了。剩下的玩家封存籌碼，或今晚打到決賽桌。</div>
</div>
</div>
</div>

---

## 賠付結構——誰能拿多少

> **快速解答**
> 「前 10–15% 進錢圈」講的是人數，不是錢：最小獎金通常只有買入的一倍半到兩倍出頭，而冠軍一個人就拿走獎池的一成上下到三成，人數越多冠軍的比例越低。所以打進錢圈只是回本，真正的獎金集中在最後一桌。

**典型結構：** 前 10–15% 的人拿到獎金。

| 參賽人數 | 進錢圈人數 | 最小獎金（典型） | 冠軍（典型） |
|:---|:---:|:---:|:---|
| 100 | ~13 | 1.5–2 倍買入 | 獎池的 25–30% |
| 500 | ~60 | 1.5–2 倍買入 | 獎池的 20–25% |
| 2,000 | ~250 | 1.7–2.2 倍買入 | 獎池的 13–18% |
| 10,000 | ~1,200 | 1.5–2 倍買入 | 獎池的 8–12% |

**真實例子（WPT Seminole Rock 'N' Roll Poker Open 冠軍賽 2024，$3,500 買入，1,435 人次）：**
- 獎池：$4,592,000（每筆買入的 $3,200 進獎池，其餘是手續費）
- 進錢圈人數：180（約全場 12.5%）
- 最小獎金：約買入的 1.83 倍
- 冠軍：$662,200（約獎池的 14%）

賠付結構開賽前就查得到，但最終有幾個名次有錢、各拿多少，往往要等報名、重買與加購全部關閉後才定案。報名時跟櫃台要**結構表**——上面列出盲注級別、底注、起始籌碼與賠付結構。

---

## 錦標賽術語——Day 1 會聽到的

> **快速解答**
> 十三個詞裡，Day 1 真正會反覆聽到的只有三個——「晚報名」、「錢圈」、「手手制」，而且都是從荷官或樓面口中聽到，不是從別的玩家。其他十個等你在表上遇到再查就好，沒有人會在牌桌上考你。

這 16 個術語涵蓋你在牌桌會聽到的大部分。完整 A 到 Z，看[德州撲克術語大全](/zh-hant/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp")。

| 術語 | 意思 |
|------|--------------|
| **錢圈（ITM）** | In The Money——你已進入有獎金的位置 |
| **泡泡時間（Bubble）** | 進錢圈前的那一刻——再一個出局大家就都有獎金 |
| **手手制（Hand-for-hand）** | 泡泡時間各桌一次只打一手，防止拖時間 |
| **結構表（Structure sheet）** | 列出盲注級別、底注與賠付結構的官方文件 |
| **籌碼領先（Chip leader）** | 籌碼最多的玩家 |
| **短籌碼（Short stack）** | 相對盲注籌碼很少的玩家 |
| **全下（Shove／Jam）** | 推全部籌碼進去 |
| **晚報名（Late reg）** | 晚報名時段——開賽後仍可入場 |
| **重入（Re-entry）** | 出局後再買入（只在晚報名時段內） |
| **衛星賽（Satellite）** | 獎品是大賽席位的資格賽 |
| **PKO** | 累進賞金賽——賞金會成長 |
| **神秘賞金（Mystery Bounty）** | 每次擊殺的獎金隨機抽出的賞金賽制 |
| **快速賽（Turbo）** | 盲注級別短很多的結構；hyper-turbo 更短 |
| **增購（Add-on）** | 重買期結束時向所有人提供的一次性額外買碼，不看籌碼量 |
| **ICM** | 獨立籌碼模型——換算比賽籌碼價值的數學框架 |
| **最小獎金（Min-cash）** | 最低的獎金位置——進錢圈能拿到的最少金額 |

---

## 第一次參賽檢查清單

> **快速解答**
> 清單上真正會讓人報不了名的只有兩樣：證件和時間。沒帶身分證或護照，任何協會都不會讓你入座；晚報名截止後才到場，就只能看別人打。錢多帶兩成、外套、會員卡都是舒適度的問題，這兩樣才是門票。

<div style="background:rgba(255,248,210,0.06);border:1px solid rgba(255,240,180,0.25);border-radius:12px;padding:20px 24px;margin:20px 0">
<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin-bottom:14px">出門前</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>有效證件</strong>——身分證或護照。沒有例外。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>買入 + 多帶 20%</strong> 的現金——有些場地不收卡</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>會員卡</strong>（若協會或場地需要）</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span><strong>報名確認信</strong>（若你線上先報名了）</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>舒適的衣服——比賽會打 6–12 小時。帶件外套（撲克室很冷）。</span></div>
</div>

<div style="font-size:13px;font-weight:700;color:hsl(var(--primary));margin:16px 0 10px">到場後</div>
<div style="display:grid;gap:8px;font-size:13px">
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>開賽前 30–45 分鐘到。報名可能排很長。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>打第一手前先數起始籌碼。少了立刻告訴荷官。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0;border-bottom:1px solid rgba(255,255,255,0.05)"><span style="width:18px;height:18px;border-radius:4px;background:rgba(34,197,94,0.12);border:1.5px solid rgba(34,197,94,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#22c55e">✓</span><span>要一張結構表——知道底注何時進場、晚餐何時休息。</span></div>
<div style="display:flex;align-items:center;gap:10px;padding:7px 0"><span style="width:18px;height:18px;border-radius:4px;background:rgba(255,150,0,0.12);border:1.5px solid rgba(255,150,0,0.4);flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;color:#ff9600">!</span><span><strong>牌局進行中不要在桌上滑手機</strong>——多數撲克室會處罰。</span></div>
</div>
</div>

---

:::readnext[繼續閱讀]
/zh-hant/blog/texas-holdem-rules-for-beginners | 德州撲克規則怎麼玩 | /images/rules-texas-holdem.webp
/zh-hant/blog/holdem-starting-hands-chart | 前期該打哪些起手牌 | /images/holdem-starting-hands-chart-hero.webp
:::

## 常見問題 FAQ

**Q. 德州撲克錦標賽在台灣合法嗎？**

A. 一般而言，在政府立案的撲克協會（撲克室）以錦標賽形式進行，較常被視為合法的競技活動；部分法院判決也曾把德州撲克視為偏重技術的競技，但實務見解並不一致，仍有依個案認定為賭博的情形。涉及現金對賭更有明確的法律風險。新手最好從立案協會的合法錦標賽入門，實際請以最新法規為準。

**Q. 台灣哪裡可以打德州撲克錦標賽？**

A. 台灣各地都有立案的撲克協會（撲克室）。以規模最大的連鎖來說，全台 14 個縣市設有 20 個據點，北部最密集（桃園一地就有 4 館）；南部的台南、高雄則以在地獨立牌館為主。各城市有哪些場館、怎麼挑，整理在這裡：[全台德州撲克據點地圖](/zh-hant/blog/taiwan-poker-clubs-guide)。實際場館、賽程與報名費請以各協會官方最新公告為準；此外也可透過線上平台或衛星賽晉級國際賽事。

**Q. 一場德州撲克錦標賽要打多久？**

A. 一般賭場的每日賽通常 4–8 小時。大型系列賽（如 WPT 冠軍賽）會打 4–6 天、分多個比賽日；WSOP 主賽事從 Day 1 分場到決賽桌，接近兩週。報名時跟櫃台要結構表——它會依盲注級別長度和起始人數，告訴你預估的比賽日長度。

**Q. PKO 和一般賞金賽（Bounty）差在哪？**

A. 一般賞金賽裡，每個玩家頭上的賞金是固定的——淘汰某人你就拿走全額，賞金永遠不變。PKO（累進賞金）裡賞金會成長：你通常拿到被淘汰者一部分賞金的現金，其餘加到你自己頭上。這讓 PKO 裡的籌碼領先者，隨著比賽進行變成越來越值錢的目標。

**Q. 重買和加購（rebuy / add-on）的規則是什麼？**

A. 重買賽裡，你可以在設定的重買時段內再買籌碼——很多賽事只要碼量不高於起始籌碼就行，不必先出局——通常限於前幾個盲注級別。加購是一次性的選購籌碼，通常在重買時段結束時提供給所有人、不看籌碼量。那個時段一關，比賽就照 freezeout 進行。確切規則各場地不同，看結構表。

**Q. 錦標賽怎麼賺錢？**

A. 場地在每筆買入之外收一筆手續費——就是「$100+$9」裡的「+$9」。那筆手續費（大型現場賽通常約 8–10%，小型每日賽更高）是場地的營收；「$100」的部分全部進玩家爭奪的獎池。所以錦標賽場地靠的是報名量和手續費賺錢，不是獎金本身——獎金只是在玩家之間循環。

**Q. 錢圈（ITM）是什麼意思？**

A. ITM＝「In The Money」，你已到達保證有獎金的名次。在一個付 25 個名次的 200 人賽裡，當 175 人被淘汰、只剩 25 人時，你就進錢圈了。最小獎金通常是買入的 1.5–2 倍。

**Q. 開賽後還能加入錦標賽嗎？**

A. 可以，在晚報名時段內——通常是前幾個盲注級別，常見開賽後兩到四小時。你一樣拿完整的起始籌碼，但因為盲注已經漲了，你坐下時的大盲數會比早報名的人少。晚報名一關，就不再收新玩家。

**Q. 可以中途離場、把籌碼帶走嗎？**

A. 不行。跟現金桌不同，比賽籌碼沒有現金價值、不能中途兌現。你走人的話，籌碼留在場上，繼續付盲注和底注直到輸光。一般獎金只有在你打進有獎金的（ITM）名次時才拿得到；賞金賽與 PKO 賽制裡，賞金是另外結算的。

**Q. 錦標賽比較靠運氣還是實力？**

A. 兩者都有——但長期是實力決定誰贏。單一一場錦標賽波動巨大：你可以打得完美，卻在 AA 被超車時出局，這就是為什麼連頂尖職業也會很久沒有大獎。但在幾百場之間，好的玩家進決賽桌的頻率遠高於機率——德州撲克是包在短期運氣裡的實力遊戲，而錦標賽裝進去的運氣，比現金桌更多。

**Q. 台灣的「限時錦標賽」跟一般錦標賽差在哪？**

A. 差在「怎麼結束」：一般錦標賽打到一個人拿走全部籌碼，限時錦標賽打到時間歸零就結算。獎金分法各協會不同——有的依剩餘籌碼比例分，有的用 ICM 換算名次。差別會影響打法：依比例分的那種沒有名次階梯，後期的泡泡時間與 ICM 壓力幾乎不存在，打起來更接近升盲的現金桌；用 ICM 換算的那種則保留了階梯壓力。報名前先看該協會的規則。

**Q. 大盲前注和大盲底注是同一回事嗎？**

A. 是同一個東西，只是叫法不同。台灣的協會賽程表常寫成「大盲前注」，盲注級別會標成像「100/200/200」——第三個 200 就是它，由大盲位一個人替全桌付。它讓底池一開始就變大、進行變快，也是開池範圍要放寬的原因之一。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">起手牌表</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">前期級別該打哪些牌</div>
  </a>
  <a href="/zh-hant/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">德州撲克策略：5 個決策</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">贏家每一手都在做的事</div>
  </a>
  <a href="/zh-hant/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">新手</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">德州撲克規則怎麼玩</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">先把基礎打好</div>
  </a>
  <a href="/zh-hant/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">術語</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">德州撲克術語大全</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">泡泡時間、ICM、衛星賽是什麼</div>
  </a>
</div>
`.trim(),
};

export default POST;
