import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "踢腳牌（Kicker）是什麼？德州撲克踢腳牌規則、算幾張與被壓制的 A",
  seoTitle: "踢腳牌是什麼？決定底池的那張旁牌｜德州撲克",
  desc: "踢腳牌就是德州撲克裡幫你破平手的那張旁牌——哪些牌型有、有幾張，為什麼 A9 會輸給 AK，還有多數教學都講錯的四條例外。",
  tldr: "踢腳牌（Kicker，亦稱旁牌）是你最強五張裡、不屬於成牌本身的那張最大牌——當兩位玩家湊成同一種牌型時，用它來決定誰贏。一對用 3 張踢腳、兩對 1 張、三條 2 張；順子、同花、葫蘆則完全沒有踢腳。這就是為什麼公牌成 A 時，AK 會贏 AQ。",
  category: "hand-rankings",
  date: "2026-07-22",
  updated: "2026-07-22",
  masterUpdated: "2026-07-18",
  keepImagesInBody: true,
  readTime: "10 分鐘",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "攤牌時兩位玩家翻出 A-K 與 A-Q，公牌上有一張 A——K 踢腳決定了誰拿走底池",
  tags: ["踢腳牌", "踢腳牌是什麼", "德州撲克踢腳牌", "kicker", "旁牌", "同花有踢腳嗎", "三條踢腳", "四條踢腳", "被壓制的A"],
  content: `
那把讓我終於搞懂踢腳牌是什麼的牌，賠掉了我整整一個買入。我拿的是 ==b:A♠ 9♣==，公牌配成了我的 A，我心想頂對穩了，直接梭下去。他一翻 ==b:A♥ K♦== —— 一樣是一對 A，但他的 K 壓過我的 9，底池就這樣滑到他那邊。我輸的不是更大的*牌型*，而是輸給了一張更大的 ==旁牌==。這張旁牌就是踢腳牌，它決定的底池比多數新手想像的還多。

==踢腳牌（Kicker，亦稱旁牌）就是德州撲克內建的破平手機制 —— 當兩位玩家湊成同一種牌型時，剩下最大的那張牌贏。== 多數教學只給你一句定義加一個 AK 對 AQ 的例子。這篇要給你完整的全貌：到底哪些牌型有踢腳（各有幾張）、大家老是講錯的那個例外，以及為什麼「用公牌打（playing the board）」會讓你的踢腳突然一點都不重要。

踢腳牌在整個 [德州撲克牌型大小](/zh-hant/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") 裡的位置其實很單純：它只有在兩位玩家**牌型打平之後**才登場 —— 它永遠不會贏過一個更大的牌型。

---

### 踢腳牌速覽

:::stripe
3 | 一對用到的踢腳牌張數
1 | 兩對（與四條）用到的踢腳牌
0 | 順子、同花、葫蘆用到的踢腳牌
:::

---

## 踢腳牌到底是什麼？

**踢腳牌是你最強五張牌裡、不屬於成牌組合的那張最大牌 —— 當兩位玩家湊成同一種牌型時，就靠它決定贏家。** 它也叫「旁牌」。撲克永遠是五張牌的遊戲（德州是七張取五），所以一旦你的對子或三條定下來，剩下的空位就由踢腳牌填滿。

關鍵觀念：踢腳牌 ==永遠不會贏過更大的牌型。== 一對 K 帶一張 2 的踢腳，照樣輾壓一對 10 帶一張 A 的踢腳 —— 先比牌型，踢腳只是破平手用的。踢腳只有在 ==r:牌型完全相同== 時才有意義：一對比同樣的一對、三條比同樣的三條。

假設你拿 A-K、對手拿 A-Q，公牌配成一張 A。你們都是「一對 A」—— 牌型一模一樣。這時候旁牌決定勝負，你的 K 壓過他的 Q。沒有人湊成更大的牌；是踢腳默默做完了它的工作。

---

## 哪些牌型有踢腳牌、哪些沒有

**只有那些用不到五張牌就湊成的牌型才有踢腳 —— 凡是自己就填滿五張的，一張踢腳都沒有。** 這張表是競爭對手都藏在一堆段落裡的。這裡一次看清楚：

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 牌型 | 有踢腳嗎？ | 踢腳張數 |
|:---|:---:|:---:|
| 高牌（散牌） | 有 —— 五張全部依序比 | 最多 4 |
| 一對 | ✅ 有 | 3 |
| 兩對 | ✅ 有 | 1 |
| 三條 | ✅ 有 | 2 |
| 四條 | ✅ 有（很少用到） | 1 |
| 順子 | ❌ 沒有 | — |
| 同花 | ❌ 沒有* | — |
| 葫蘆 | ❌ 沒有 | — |
| 同花順／皇家同花順 | ❌ 沒有 | — |

</div>

背後的邏輯就是純算術：**組合牌 + 踢腳牌永遠等於五張。** 一對用掉 2 張，所以剩下 3 張踢腳來補。順子、同花、葫蘆本身就用滿五張，沒有多的牌可以拿來當踢腳 —— 兩副順子或兩副葫蘆，是靠它們**內部**的點數來分高下，不是靠旁牌。

==*同花是那個星號：== 嚴格說同花沒有「踢腳」。當兩副同花對撞時，你把五張牌從大到小逐張比（A 高的同花贏 K 高的同花）。大家口語上會把最大那張叫「踢腳」，但嚴格講那是五張的高牌比較。每種牌型完整的破平手順序，收在 [德州撲克平手比法](/zh-hant/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp") 那篇裡。

---

## 每種牌型用到幾張踢腳牌？

**一對用三張踢腳、三條用兩張、兩對和四條各只用一張。** 知道張數，你就清楚一場破平手最深能比到哪裡。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 牌型 | 組合牌 | + 踢腳 | = 5 張 |
|:---|:---:|:---:|:---:|
| 一對 | 2 | 3 | ✅ |
| 三條 | 3 | 2 | ✅ |
| 兩對 | 4 | 1 | ✅ |
| 四條 | 4 | 1 | ✅ |

</div>

這在攤牌時很重要，因為踢腳是 ==由大到小、依序比較的。== 拿一對來說，如果第一張踢腳打平，就比第二張，再比第三張。兩位玩家可以握有同樣的對子*加上*同樣的第一張踢腳，最後還是被第三張牌分出勝負 —— 這正是為什麼「我踢腳不錯」有時候還是不夠好。

---

## AK 對 AQ：踢腳牌怎麼決定贏家

我們一張一張跑一遍，把機制講到具體。

公牌是 ==b:A♣ 9♦ 5♠ 2♥ 7♣==。你拿 ==b:A♠ K♠==，對手拿 ==b:A♦ Q♦==。

- **你：** A♠ K♠ ＋公牌 → 一對 A。最強五張＝ ==g:A♠ A♣ K♠ 9♦ 7♣==（一對 A，踢腳 K-9-7）。
- **對手：** A♦ Q♦ ＋公牌 → 也是一對 A。最強五張＝ ==A♦ A♣ Q♦ 9♦ 7♣==（踢腳 Q-9-7）。

同樣一對 A，所以從最大踢腳往下比：你的 ==g:K 壓過他的 Q。== 你贏，A-A-K-9-7 勝 A-A-Q-9-7。那張 9 跟 7 根本沒輪到上場 —— 第一張踢腳就分完勝負了。

:::note[注意兩手牌都共用了公牌上的 9 跟 7。踢腳也可以來自公牌：如果最大的旁牌是一張公牌，它會同時填進**雙方**的手牌，就由下一張決定。你的底牌只有在贏過公牌現有的牌時，才會算你的踢腳。]:::

---

## 用公牌打：你的踢腳不上場的時候

**如果五張公牌本身就湊成了最強的牌、你的底牌又無法讓它更好，那你就是在「用公牌打（playing the board）」—— 這時候根本沒有踢腳。** 每個還在牌裡的人都用同樣的五張牌，所以底池平分。

公牌是 ==b:10♠ J♦ Q♣ K♥ A♠== —— 一副做好的 10 到 A 順子（Broadway），花色混雜、不可能成同花。

- 你拿 ==b:2♣ 3♦==。你的最強五張就是公牌那副順子；2 跟 3 沒有加任何分。
- 對手拿 ==b:4♥ 5♦==。一樣的故事 —— 公牌那副順子也是他的最強五張。

你們誰都湊不出比 A 更高的，所以雙方都「用公牌打」，==g:平分底池。== 順子沒有踢腳，所以那些底牌是死重。當你聽到「the board plays（公牌自己成牌）」，講的就是這個 —— 這也是唯一一個看起來很強的底牌，實際上一文不值的場合。

---

## 為什麼 A9 會輸給 AK？（被壓制的 A）

**當一手牌跟一手更強的牌共用一張牌、而且幾乎每次連上時都會輸掉踢腳戰，就叫這手牌「被壓制（dominated）」了 —— 最經典的陷阱就是像 A9 這種弱 A 對上 AK。** 到了這裡，踢腳就不再是冷知識，而是開始讓你賠錢。

![綠色牌桌上並排兩組起手牌 —— A-K 旁邊是 A-9 —— 展示同樣一張 A、配上較弱踢腳，怎麼變成一個被壓制的陷阱](/images/holdem-kicker-dominated.webp "同樣一張 A、不同命運：踢腳就是頂級牌與被壓制牌之間的分水嶺")

回到我那個買入。公牌 ==b:A♦ 7♣ 2♥ Q♠ 4♦==，檯面沒有順子也沒有同花。

- **A9：** A♠ 9♣ → 一對 A，最強五張 ==A♠ A♦ Q♠ 9♣ 7♣==。
- **AK：** A♥ K♦ → 一對 A，最強五張 ==g:A♥ A♦ K♦ Q♠ 7♣==。

又是同樣一對 A —— 而我那張 9 連投票的機會都沒有。它被公牌的 Q 擠到了第二張踢腳，勝負在第一張踢腳就定了：他的 K 壓過公牌的 Q —— 所以就結果而言，我的「踢腳」在這手牌開始前就已經 ==r:死透了==。這就是壓制：當你連上你那張 A，往往只是在付錢給一張更大的 A。這也正是 [起手牌表](/zh-hant/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") 為什麼把 A9 不同花看得比 AK 謹慎那麼多 —— 踢腳就是頂級牌與陷阱之間的差別。

---

## 四條有踢腳牌嗎？

**有 —— 四條有一張踢腳，但在德州裡它幾乎從不決定勝負，因為四條通常是攤在公牌上大家共用的。** 這是多數教學搞砸的例外，它們把四條跟「用滿五張、沒有踢腳的牌型」混為一談。

算術很清楚：四張牌組成四條，一張牌是踢腳。它只有在兩位玩家湊成**同樣**四條時才有用 —— 而這在德州裡需要四張同點數全攤在公牌上（因為每個點數就只有四張）。如果公牌是 ==b:5♠ 5♥ 5♦ 5♣ K♦==，每個人都有四條 5，第五張就是踢腳：手上有一張 A 的玩家打 ==g:5-5-5-5-A==，贏過拿公牌 ==5-5-5-5-K== 的玩家。少見，但真的會發生 —— 而把這種邊界情況講對，正是一份值得信賴的教學跟一份含糊帶過的教學之間的差別。

---

:::readnext[繼續閱讀]
/zh-hant/blog/holdem-hand-rankings | 德州撲克牌型大小排名 | /images/holdem-hand-rankings-hero.webp
/zh-hant/blog/holdem-tiebreak-rules | 牌型一樣誰贏？平手比法 | /images/holdem-tiebreak-hero.webp
:::

## 常見問題 FAQ

**Q. 德州撲克的踢腳牌（Kicker）是什麼？**

A. 踢腳牌是你最強五張牌裡、不屬於成牌組合的那張最大旁牌。當兩位玩家湊成同一種牌型時，就靠它破平手 —— 例如公牌配成一張 A 時，A-K 會贏 A-Q，因為 K 踢腳壓過 Q。踢腳永遠不會贏過更大的牌型。

**Q. 同花有踢腳牌嗎？**

A. 沒有。同花用滿五張牌，所以沒有另外的踢腳。當兩副同花對撞時，你把五張牌從大到小逐張比 —— A 高的同花贏 K 高的同花。大家有時口語上把最大那張叫「踢腳」，但那其實是五張的比較。

**Q. 順子有踢腳牌嗎？**

A. 沒有。順子是五張連號、本身就已經完整。如果兩位玩家湊成同樣的順子，就平分底池 —— 多出來的底牌不算數。只有更大的順子才贏得了較小的順子。

**Q. 葫蘆有踢腳牌嗎？**

A. 沒有。葫蘆是三條加一對 —— 五張全滿。破平手時先比三條的點數，再比對子，永遠不靠旁牌。

**Q. 三條有踢腳牌嗎？**

A. 有。三條用兩張踢腳，所以當兩位玩家湊成同樣的三條時，接下來最大的兩張牌決定勝負 —— K-K-K-A-2 贏 K-K-K-Q-J，因為 A 壓過 Q。（用口袋對子做成的真正暗三條（Set）很少打平，因為那個對子只有一個人握得到。）

**Q. 兩對有踢腳牌嗎？**

A. 有 —— 兩對用一張踢腳。如果你拿 K-Q、對手拿 J-Q，公牌是 Q-7-7，你們都是 Q 帶 7，但你的 K 踢腳贏他的 J。踢腳只有在雙方握有一模一樣的兩對時才登場。

**Q. 四條有踢腳牌嗎？**

A. 有，四條有一張踢腳，但在德州裡很少用到。它只有在兩位玩家湊成同一組四條時才決定勝負 —— 而那需要四張同點數全攤在公牌上 —— 這時最大的第五張贏。

**Q. 踢腳牌一定要在自己手上嗎？**

A. 不用。踢腳牌可以是一張公牌。撲克永遠從七張裡取最強的五張，所以如果一張公牌壓過你的底牌，那張公牌就成了共用的踢腳，由下一張決定勝負。你的底牌只有在比它要頂替的公牌更大時，才會當踢腳上場。

**Q. 一手撲克牌有幾張踢腳？**

A. 看牌型：一對用三張踢腳、三條用兩張、兩對和四條各用一張。順子、同花、葫蘆、同花順沒有踢腳，因為它們已經填滿五張。

**Q. 什麼算好的踢腳牌？**

A. 大的那種 —— A 或 K 踢腳很強，而像 9 這種小踢腳會讓你「被壓制」。這就是為什麼 AK、AQ 遠比 A9、A5 好：當大家都配成一對 A，最大的踢腳拿走底池。

**Q. 什麼是 A 踢腳（或 K 踢腳）？**

A. A 踢腳指你最大的旁牌是一張 A —— 最強的踢腳，所以「頂對 A 踢腳」幾乎贏下每一場同對子的攤牌。K 踢腳是次強。這正是為什麼 A-K 和 A-Q 會贏過 A-9 這種弱 A：當公牌配成大家的 A，最大的踢腳拿走底池。

**Q.「用公牌打（playing the board）」是什麼意思？**

A. 用公牌打指五張公牌就是你的最強牌、你的底牌無法讓它更好。因為大家都用同樣的五張牌，底池平分。這時沒有踢腳，因為公牌本身已經湊成一副完整的五張牌。

**Q. 踢腳牌在德州撲克裡重要嗎？**

A. 非常重要。因為大家共用公牌，玩家經常湊成同樣的對子或三條，那些底池就靠踢腳決定。挑踢腳強的手牌（並蓋掉被壓制的牌）是贏牌打法的核心。

---

## 記住這 3 件事

1. **踢腳牌＝旁牌，只用來破平手。** 它在牌型相同時決定勝負，永遠不會贏過更大的牌型。
2. **組合牌 ＋ 踢腳 ＝ 五張。** 一對有 3 張踢腳、三條 2 張、兩對和四條 1 張；順子、同花、葫蘆都沒有。
3. **踢腳決定真金白銀。** 被壓制（A9 對 AK）和用公牌打，關鍵都在踢腳 —— 挑旁牌強的手牌，並知道你的踢腳什麼時候已經死了。

把踢腳搞懂，一整類「我到底是怎麼輸的？」的牌就不再是謎。接下來，去看完整的 [德州撲克牌型大小](/zh-hant/blog/holdem-hand-rankings) 順序，或把每種牌型的 [平手比法](/zh-hant/blog/holdem-tiebreak-rules) 一次搞清楚。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">牌型大小</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克牌型大小排名</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">踢腳牌坐落在其下的完整順序</div>
  </a>
  <a href="/zh-hant/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平手比法</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">牌型一樣誰贏？平手比法</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">每種牌型完整的破平手順序</div>
  </a>
  <a href="/zh-hant/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">起手牌</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">起手牌表</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">為什麼弱踢腳的 A 該蓋掉</div>
  </a>
  <a href="/zh-hant/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">位置</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克位置怎麼打</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">位置怎麼放大你的踢腳優勢</div>
  </a>
</div>
`.trim(),
};

export default POST;
