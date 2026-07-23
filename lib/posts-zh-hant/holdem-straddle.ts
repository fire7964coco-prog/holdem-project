import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "盲抓（強抓 / Straddle）是什麼？三種盲抓、行動順序與值不值得一次看",
  seoTitle: "翻前多一注、還買到位置——盲抓是什麼？",
  desc: "盲抓（Straddle）是發牌前自願下的第三盲注，讓下注前就把彩池加倍。規則、三種盲抓差別、誰先誰後、到底划不划算，一次講清楚。",
  tldr: "盲抓（Straddle）是發牌前自願下的一注盲注——通常是大盲的兩倍。它替盲抓者買到翻前最後行動、以及加注的權利，把整場的彩金加倍。但幾乎所有情況下它都是 -EV，而且只有現金桌、按各家撲克室規則才允許。",
  category: "glossary",
  date: "2026-07-23",
  updated: "2026-07-23",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "10 分鐘",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "槍口位牌手在發牌前，於大盲前方額外押上兩枚籌碼作為盲抓",
  tags: ["盲抓", "強抓", "straddle", "盲抓是什麼", "德州撲克盲抓規則", "密西西比盲抓", "按鈕位盲抓", "沉睡盲抓", "盲抓值不值得"],
  content: `
第一次在我坐的 $1/$2 桌上有人盲抓時，我完全搞不懂：那個槍口位的傢伙為什麼牌還沒發就丟出 $4，荷官又為什麼突然從再過去一個位子開始發動作。我把它叫做「有錢人的注」叫了大概一個月，才搞懂它真正在做什麼：盲抓==把彩池加倍，還替某一位牌手買下最後發言權==——而這一切都發生在還沒有人看到任何一張牌之前。

如果你在現場牌局看過那種憑空多出來的盲注，這個詞就是你在找的答案。它是整本[德州撲克術語表](/zh-hant/blog/holdem-glossary "thumb:/images/holdem-glossary-hero.webp")裡最常被誤解的一條，所以我們把它徹底講對。下面完整說清楚**盲抓（Straddle，台灣也叫強抓）**到底是什麼、你會碰到的每一種盲抓、有人下盲抓後誰先行動，以及唯一真正重要的那個問題的老實答案：==g:你到底該不該這麼做？==

---

### 盲抓速覽

:::stripe
2× BB | 標準盲抓的大小
最後 | 盲抓者的翻前行動順序
只限現金桌 | 錦標賽幾乎一律禁止
-EV | 對多數人的結論
:::

---

## 盲抓是什麼？（What Is a Straddle）

**盲抓是一注自願下的盲注——通常是大盲的兩倍——在發牌前就先押出去。** 在 $1/$2 的牌局裡，槍口位（大盲左手邊第一位）的牌手可以丟出 $4「下盲抓」，那一手牌整桌就瞬間打得像一張 $1/$2/$4 的桌子。

有兩件事讓它不只是「多丟一點錢進彩池」而已：

- 它是**活的盲注（live blind）。** 跟大盲一模一樣，盲抓者買到了**加注的權利**——就算大家都只是跟注，他也能加注，是一注帶著行動權的「第三盲注」。
- 它是**盲下的。** 你在*看牌之前*就下盲抓（多數牌室是連牌都還沒發就下）。你在毫無資訊的情況下投錢，這正是它通常是壞主意的根本原因——下面細說。

盲抓不是一般意義上的加注——它是一注重設價錢的盲注。如果你懂[大盲小盲是什麼](/zh-hant/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp")，那盲抓就是牌手自己選擇多押的那注*第三個*盲注，用來把彩金撐大、順便搶下位置。

---

## 盲抓怎麼運作：誰先行動、誰最後行動

![金色莊家鈕與兩張蓋著的底牌，後方是 K♦ 7♣ 2♠ 的翻牌，說明按鈕位在翻後最後行動](/images/holdem-button-dealer-board.webp "槍口位的活盲抓把大盲左手邊那個位子變成第三盲注——盲抓者現在翻前最後行動")

這一段是各種定義頁都會略過、也正是新手迷路的地方。盲抓會**重排翻前的行動順序。** 我們走一遍標準的 $1/$2 牌局，槍口位盲抓到 $4：

:::steps
槍口位下盲抓 | 槍口位牌手在發牌前押出 $4（$2 大盲的 2 倍）
先行動的變成盲抓者左手邊 | 行動現在從盲抓者左邊那位（UTG+1）開始，不是槍口位——盲抓的作用就像一個新的大盲
繞桌一圈 | 每個人都要跟到 $4（不是 $2）才能玩；照常可以蓋牌、跟注或加注
輪到盲注 | 小盲、大盲依序行動，面對的是 $4 的價錢
盲抓者最後行動 | 如果沒人加注，盲抓者可以過牌選擇權，也可以加注——翻前最後的發言權
:::

那個「翻前最後行動」正是盲抓者花錢買的東西。但注意陷阱：對**槍口位盲抓來說，最後行動的特權只在翻前。** 一旦翻牌出來，下注順序就彈回正常——小盲先行動，盲抓者又回到那個又早、又出位（out of position）的爛座位，面前還躺著一個被撐大的彩池。就是這一點，讓槍口位盲抓這麼常是賠錢貨：你付了雙倍只換來一條街的最後行動，接下來三條街全都在不利位置上打。

---

## 三種盲抓（槍口位 / 密西西比 / 按鈕位 / 沉睡）

![莊家鈕旁下的盲抓，展示按鈕位或密西西比盲抓——替這一手買下最後位置](/images/holdem-straddle-button.webp "按鈕位（密西西比）盲抓從按鈕位下——唯一連翻後都買到最後行動的盲抓")

不是所有盲抓都一樣——差別全在於**行動從哪裡開始、以及你能把最後位置保留多久。** 這張對照表是別的頁面沒有一次攤開講清楚的：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 種類 | 誰下的 | 行動從哪開始 | 最後行動 | 有買到選擇權嗎？ |
|------|------|------|------|------|
| **槍口位（標準）** | 槍口位 | 盲抓者左邊 | 只有翻前 | 有 |
| **密西西比** | 任意座位（常是按鈕/關煞位） | 盲抓者左邊 | 翻前＋翻後* | 有 |
| **按鈕位** | 按鈕位 | 小盲 | 翻前＋翻後 | 有 |
| **沉睡** | 非槍口位的座位 | 正常（槍口位） | 無 | 通常沒有 |
| **再盲抓** | 盲抓者左邊 | 再盲抓者左邊 | 只有翻前 | 有 |

</div>

*翻後最後行動，只在密西西比盲抓下在按鈕位或靠近按鈕位時才成立。

- **槍口位盲抓（UTG straddle）** — 最經典的一種。下在槍口位，只在翻前有最後行動。最常見，位置上也最弱。
- **密西西比盲抓（Mississippi straddle）** — 可以從**任意位置**下，威力最大的是按鈕位或關煞位。行動從盲抓者左手邊開始，所以按鈕位的密西西比盲抓能買到**翻前和翻後都是最後行動**——是唯一在位置上站得住腳的盲抓。不是每家都允許。
- **按鈕位盲抓（Button straddle）** — 特指從按鈕位下的密西西比式盲抓；按鈕位一路把最後行動保留到底。確切流程（小盲怎麼安排）各家不同——跟荷官確認。
- **沉睡盲抓（Sleeper straddle）** — 從非槍口位座位下的一注盲注，它「睡著」：**除非動作一路蓋到它那裡，否則不啟動**，而且多數牌室它**不**買位置、也不買加注權。少見，線上幾乎看不到。
- **再盲抓（雙盲抓 / double straddle）** — 盲抓者左邊的牌手可以*疊在*盲抓上再盲抓，至少是前一注的兩倍（$4 → $8 → $16）。允不允許、能從哪些座位下，全看各家撲克室規則。

⚠️ 上面每一種都**看各家規則。** 拿不準時，丟籌碼出去之前先問樓面（floor）——這些機制在不同牌室真的不一樣。

---

## 盲抓要下多少？

標準盲抓正好是**大盲的 2 倍**——$1/$2 牌局是 $4，$2/$5 牌局是 $10。這是幾乎所有牌室的預設。

有些無限注牌室允許更大：

- **無上限／全下盲抓** — 少數牌室讓盲抓者押任意金額、最多押到整疊籌碼，當作一注盲注。一注很大的盲抓，能把一場小牌局變成單手很大的牌局。
- **再盲抓遞增** — 在允許再盲抓的地方，每一注至少是前一注的兩倍：$4，然後 $8，然後 $16，依此類推。整桌都盲抓又再盲抓的牌局，能把有效彩金撐大好幾倍。

如果你要跟進一個被盲抓過的彩池，記得你的[底池賠率](/zh-hant/blog/holdem-pot-odds)現在是拿去比一個更大的盲注——每一手要玩的價錢都翻倍了，這會悄悄懲罰鬆散的跟注。

---

## 錦標賽允許盲抓嗎？

**幾乎不允許。** 盲抓是現金桌的功能。錦標賽跑的是固定的升盲結構，為了公平，每一桌都得維持一模一樣，一注自願的額外盲注會破壞這個結構——所以絕大多數的錦標賽，不管現場或線上，都**完全禁止盲抓。**

就算在現金桌，它也是可選的、看各家規則：有些牌室只允許槍口位盲抓，有些允許密西西比和按鈕位盲抓，有些限制大小，有些禁止再盲抓。線上盲抓很少見，有提供的地方通常也只是一個簡單的槍口位盲抓開關。像這樣的現金桌下注、跟僵硬的錦標賽賽制之間，位置怎麼運作也差很多——延伸閱讀[位置怎麼打](/zh-hant/blog/holdem-position-play)。

---

## 盲抓划算嗎？你該盲抓嗎？

![綠色檯面中央堆著一大疊混色籌碼——盲抓在還沒有人看牌之前就撐大的彩池](/images/holdem-straddle-bloated-pot.webp "盲抓把盲注加倍、撐大彩池——籌碼在看到任何一張牌之前就投進去了")

老實的答案，也是解算器（solver）一致同意的：**對幾乎每個人來說，不划算。** GTO Wizard 的分析講得很直白——從期望值的角度看，盲抓是賠錢的打法。三個原因：

:::card
🎯 | 你是盲投 | 錢在你看牌之前就進去了，所以你在毫無資訊下打一個被撐大的彩池——這正是讓盲注成為全桌最差座位的同一種劣勢
📉 | 它縮小你的位置優勢 | 把盲注加倍會撐大起始彩池，還讓你在最適合偷雞的座位時仍有更多人未行動。反直覺的是，解算器的回應是在被盲抓的彩池裡開**更少**手牌——按鈕位大約少開 15–20%——而不是更多
💸 | 它撐大抽水 | 更大的彩池代表被抽走更多[抽水（rake）](/zh-hant/blog/holdem-rake)，是被抽水現金桌裡每一手盲抓的隱形稅
:::

那什麼時候*才*站得住腳？只有特定情境，而且從來不是純為賺錢：

- **一張鬆弱的桌**：對手拿著垃圾牌也跟這個更大的盲注，翻牌後又打得「湊到就打、湊不到就蓋」——你偶爾可以吃這個豆腐，最好是從後位盲抓。
- **一張所有人都已經在盲抓的桌**：如果盲抓是全桌通例，你加入也不會損失任何*相對*位置（雖然全桌一起不盲抓才是最好的）。
- **玩樂／社交性質的牌局**：你來是為了好玩、不是為了最大 EV——這是完全正當的理由，只要你老實承認它在花錢。

盲抓*不會*幫你做到的，是「營造鬆散形象」然後回本——你是為了一個很少真的兌現的形象優勢，付出一筆真實、可測量的代價。如果你的目標是贏錢，真正能建立優勢的打法是[位置](/zh-hant/blog/holdem-position-play)，不是多一注盲注。想玩就盲抓，別為了賺錢盲抓。

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-blind-meaning | 德州撲克大盲小盲是什麼？ | /images/holdem-blind-meaning-hero.webp
/zh-hant/blog/holdem-position-play | 位置怎麼改變整場牌局 | /images/holdem-position-play-hero.webp
:::

## 常見問題 FAQ

**Q. 盲抓（Straddle）是什麼？**

A. 盲抓是一注自願下的盲注，通常是大盲的兩倍，在發牌前就押出去——最常由槍口位的牌手下。它把那一手的彩金加倍，並給盲抓者加注的權利和翻前最後行動，就像一個第三盲注。

**Q. 盲抓要下多少？**

A. 標準盲抓是大盲的 2 倍——$1/$2 牌局是 $4。有些無限注牌室允許更大、甚至無上限（全下）盲抓；在允許再盲抓的地方，每一注至少要是前一注的兩倍（$4、$8、$16，依此類推）。

**Q. 有人盲抓後誰先行動？**

A. 盲抓者正左手邊的牌手先行動，因為活的盲抓運作起來就像一個新的大盲。動作接著繞桌一圈，小盲、大盲依序行動，盲抓者翻前最後行動——如果前面沒人加注，他可以選擇過牌或加注。

**Q. 誰可以盲抓？是不是誰都能盲抓？**

A. 看種類而定。標準盲抓只有槍口位——大盲正左手邊那個座位——能下。密西西比盲抓在牌室允許時，讓任意牌手從任意位置盲抓，最常是按鈕位或關煞位。無論哪種，你只能在*發牌前*（或看牌前）盲抓，而某個座位到底能不能盲抓完全看各家規則——有些牌室只允許槍口位，有些允許任意座位，很多線上牌局和錦標賽則一律禁止。

**Q. 盲抓算是加注嗎？**

A. 不算。盲抓是一注盲注，不是加注——它重設每個人進池要跟的價錢，同時保留盲抓者之後加注的權利。在限注牌局裡它算不算進加注上限是各家規則：很多牌室不算，但有些會當成一次加注，所以在當地確認一下。

**Q. 密西西比盲抓是什麼？**

A. 密西西比盲抓可以從任意位置下，不限槍口位——常見於按鈕位或關煞位。行動接著從盲抓者左手邊開始，所以按鈕位的密西西比盲抓能買到翻前和翻後都是最後行動，這也是為什麼它是唯一有真正位置理由的盲抓。不是每家都允許。

**Q. 沉睡盲抓是什麼？**

A. 沉睡盲抓是從非槍口位座位下的一注盲注，它保持不啟動（「睡著」），除非動作一路蓋到它那裡才生效。多數牌室它不像活盲抓那樣買加注權或給位置。它不常見，線上也很少提供——一定要確認各家規則。

**Q. 錦標賽允許盲抓嗎？**

A. 幾乎不允許。錦標賽仰賴固定的盲注結構，必須在所有桌之間維持一致，一注自願的額外盲注會破壞賽制。盲抓基本上是現金桌專屬的選項，就算在現金桌，也要看該牌室的具體規則。

**Q. 盲抓划算嗎？你該盲抓嗎？**

A. 對多數牌手來說，不划算——它是一個 -EV 的打法。你盲投錢，你壓縮了自己的籌碼／彩池比（代表你該打更少手牌、而不是更多），又撐大了抽水。它只有在鬆弱桌、在所有人都已經盲抓的牌局、或純粹為了好玩時才站得住腳——絕不能拿來當賺錢的方法。

---

## 要記住的 3 件事

1. **盲抓是一注可選的第三盲注，通常是大盲的 2 倍**，在發牌前下——它把彩金加倍，並買下翻前最後行動。
2. **種類決定位置。** 槍口位盲抓只在翻前最後行動；密西西比或按鈕位盲抓連翻後也保留最後行動。一切都看各家規則。
3. **對幾乎每個人都是 -EV。** 盲投、在不利位置撐大彩池、餵養抽水，這些代價蓋過了樂趣。要盲抓，是為了桌上形象或娛樂，不是為了利潤。

現在你懂了這多出來的盲注，去把它扭曲掉的基本功收緊：[大盲小盲到底在做什麼](/zh-hant/blog/holdem-blind-meaning)、[為什麼位置贏錢](/zh-hant/blog/holdem-position-play)，以及盲抓重設價錢之後[下注動作和加注怎麼運作](/zh-hant/blog/holdem-betting-actions)。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克大盲小盲是什麼？</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲抓就是疊在大小盲上的那注</div>
  </a>
  <a href="/zh-hant/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">位置怎麼改變整場牌局</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲抓的位置比它的大小更重要</div>
  </a>
  <a href="/zh-hant/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">下注動作：過牌、跟注、加注</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲抓重設價錢後，動作怎麼走</div>
  </a>
  <a href="/zh-hant/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">策略</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">3-bet 隔離加注施壓</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲抓者範圍偏鬆，用隔離加注反制</div>
  </a>
</div>
`.trim(),
};

export default POST;
