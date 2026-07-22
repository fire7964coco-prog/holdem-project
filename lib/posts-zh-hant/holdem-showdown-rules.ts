import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-showdown-rules",
  title: "德州撲克攤牌規則——誰先亮牌、能不能蓋牌不亮，還有搓牌為什麼失禮",
  seoTitle: "誰先亮牌？德州撲克攤牌規則與蓋牌（Muck）",
  desc: "攤牌時誰要先亮牌？可以不亮直接蓋掉嗎？德州撲克攤牌規則一次講清楚——最後主動下注者、牌面說話、搓牌（Slow Roll）、全下攤牌怎麼處理，還有現場亮牌禮儀。",
  tldr: "攤牌時，河牌圈最後一個下注或加注的人先亮牌。如果河牌大家都過牌，就從按鈕左邊第一位還在牌局裡的玩家開始亮。你如果輸了，可以直接蓋牌（Muck）不亮；但你的下注被跟到時，對手有權要求看那手牌。",
  category: "rules",
  date: "2026-07-22",
  updated: "2026-07-22",
  masterUpdated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "10 分鐘",
  emoji: "🃏",
  image: "/images/holdem-showdown-rules-hero.webp",
  imageAlt: "德州撲克攤牌圖解——在 4♥ 7♣ Q♦ K♠ 2♥ 的牌面上，A♠ K♥ 靠一對 K 加 A 踢腳牌獲勝",
  tags: [
    "德州撲克攤牌規則",
    "誰先亮牌",
    "攤牌蓋牌",
    "搓牌 slow roll",
    "全下攤牌規則",
  ],
  content: `
你跟了河牌那一注。現在兩個人乾瞪眼，都在等對方先翻牌。

誰都不動。

荷官左看右看。旁邊的玩家開始嘆氣。

==這一幕幾乎在每張現場牌桌上都會上演== ——因為多數新手根本沒學過，攤牌時到底該由誰先亮牌。這篇把每一種攤牌情況都講清楚：一般手牌、河牌全過牌、全下，還有為什麼「搓牌」會讓你接下來整場都被白眼。

## 攤牌時誰要先亮牌？

答案取決於最後一輪下注是怎麼結束的（想先把一手牌從發牌到攤牌的完整順序搞懂，看[德州撲克規則與行動順序](/zh-hant/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp")）。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 河牌圈最後的動作 | 誰先亮牌 |
|--------------------|-----------------|
| 河牌圈有人下注或加注 | ==最後一個下注或加注的人== 先亮 |
| 河牌大家都過牌 | 按鈕左邊第一位還在牌局裡的玩家先亮 |
| 前面的街全下（河牌沒有下注） | 所有手牌在發完剩下的公牌前／發牌時，全部正面朝上攤開 |

</div>

![德州撲克攤牌順序圖解——在 J♥ 9♠ 4♦ 2♠ K♥ 的牌面上誰先亮牌](/images/holdem-showdown-who-shows-first.webp)

==g:關鍵詞就是「最後主動下注者」（last aggressor）。== 如果你在河牌下注、被人跟到，是 **你先亮牌** ——不是跟注的那個人。跟注的人可以先看到你的牌，再決定要亮還是蓋。

---

## 攤牌時可以不亮牌直接蓋掉嗎？（Muck）

可以——**前提是你輸了**。

一旦最後主動下注者亮出牌，其他玩家可以選擇：
- **亮牌**，如果你覺得自己贏
- **正面朝下蓋牌（Muck）**，如果你看出自己輸了——不需要秀出你的牌

==r:但有一個重要例外：== 如果你在河牌的下注被跟到了，跟注的人是付了全額才有資格看你的牌。在多數牌房，任何一位有被發到牌的玩家，都可以要求荷官把這手被跟到、進到攤牌的蓋掉的牌翻開來看——這就是 **「我要看那手牌」** 的規則。（別跟「秀一給一，秀一給全（show one, show all）」搞混，那條說的是：你只要自願把牌秀給其中一個人看，全桌的人都有權看到。）

實戰口訣：==如果你是詐唬被跟到，快點蓋牌；如果你是價值下注被跟到，就把牌翻開。==

---

## 河牌全過牌時的攤牌順序

如果河牌沒人下注（大家都過牌），攤牌就從 **按鈕左邊第一位還在牌局裡的玩家** 開始，順時針進行。

例子：按鈕、小盲、大盲三家看到河牌。SB 過牌、BB 過牌、按鈕過牌。攤牌從 SB（按鈕左邊第一位還在牌局裡的玩家）開始。SB 可以亮或蓋。接著 BB。最後才是按鈕。

==g:在這種情況下，按鈕最後亮牌== ——這其實是個優勢。按鈕可以先看清有沒有人贏過自己，再決定要不要翻牌。

---

## 全下攤牌規則——全下的人要先亮嗎？

當一名玩家全下、後面已經不可能再有下注時，剩下的公牌通常會 **在所有手牌都正面朝上的狀態下** 發完。這是為了保護這手牌的完整性——在全下的局面裡，沒有人應該還能靠策略性蓋牌來藏資訊。

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| 全下情境 | 攤牌規則 |
|----------------|---------------|
| 有人全下、其他人跟注、後面不可能再下注 | 所有手牌在發完剩牌前或發牌時全部正面朝上 |
| 河牌上的全下被跟到 | 一般攤牌——全下的人就是最後主動下注者，先亮牌 |
| 多人全下、產生多個邊池 | 每個池分開結算；所有涉及的手牌都要亮 |

</div>

有一個細節：如果還有 **邊池（side pot）**（其他人手上還有籌碼、繼續下注），邊池會先結算——這些還在活躍下注的人裡，最後主動下注者先亮——然後才是主池，這時全下玩家的牌才亮。

想了解全下時邊池怎麼堆疊、怎麼分配，看[全下與邊池規則](/zh-hant/blog/holdem-all-in-rules)；平手切池的情況，看[平分底池（Chop）的判定](/zh-hant/blog/holdem-split-pot-rules)。

---

## 什麼是「牌面說話（Cards Speak）」？

![牌面說話規則圖解——在 8♠ 9♣ 10♥ J♦ Q♠ 的牌面上組成 Q 高順子，攤牌時牌面本身會替玩家說話](/images/holdem-showdown-cards-speak.webp)

「牌面說話」的意思是 ==不管玩家嘴上怎麼講，最強的牌就是贏==。

如果一名玩家看錯自己的牌、說「我只有一對」，但他手上其實是順子——順子照樣贏。荷官會直接讀牌，把底池判給亮出來的最強牌。

這條規則兩面都成立。如果你以為自己輸了、沒亮牌就直接蓋掉，但你那手牌其實才是贏家——==r:底池就飛了==。你的牌一碰到蓋牌堆就死了。只要你不是 100% 確定自己輸，攤牌前一定先讓荷官把你的牌讀完再說。

真實情況：你手上是 J♥ 10♥，牌面是 Q♥ 9♥ 8♥ 2♣ 5♦。你組成的是 Q 高同花順（紅心 Q-J-10-9-8）。對手亮出 K♣ Q♦（一對 Q）。你贏得乾乾淨淨。==別因為看到他一張 Q 就急著蓋牌。==

---

## 什麼是搓牌（Slow Roll）？

搓牌就是 ==明明知道自己贏定了，卻故意拖很久才亮出這手超強的牌==。

你手上是堅果牌（Nuts）。對手亮出一手強牌。你偏偏停下來、假裝在想、慢慢偷看自己的牌、讓全桌等你——最後才翻出贏牌。這在規則上合法，但人人討厭。

![搓牌 slow roll——一名玩家故意拖著不亮贏牌，桌上其他玩家滿臉不耐煩](/images/holdem-showdown-slow-roll.webp)

==r:搓牌是在牌桌上樹敵最快的方法。== 它會被解讀成故意在對手傷口上撒鹽。有一條不成文的規矩：如果你手上是最大的牌，就 **立刻翻開**。搓牌沒有任何策略上的好處，唯一的結果就是製造火藥味。

要把它跟 **長考（tanking）** 分清楚——那是真的在面對一個困難決定、正當地花時間思考。長考是被接受、甚至被尊重的。拿著堅果牌搓牌，是完全不同的兩回事。

---

## 沒攤牌就贏了，要亮底牌嗎？

不用。==g:如果在攤牌前所有人都蓋牌，你不用亮出任何一張牌就贏下底池。==

你想亮也可以——有些玩家會秀詐唬去激怒對手，或秀強牌來建立一個「打得很緊」的形象。但只要你是靠別人全部蓋牌贏的，你永遠沒有義務亮牌。

這正是撲克有趣的地方之一。最大的牌不一定會贏——撐到最後的人才贏。

---

## 攤牌禮儀——新手最常做錯的地方

沒有什麼比一場處理得亂七八糟的攤牌更快把整桌氣氛搞冷。這裡面大多不是規則問題——是沒人教過新手的習慣。下面這四個，是我在撲克室最常出手糾正的。

### 錯誤 1：等跟注的人先亮

你在河牌下注，有人跟你。你僵在那裡等對方先亮。這是反的。==你才要先亮——你是最後主動下注者。== 你這樣乾等，就算你不是故意的，看起來也像在搓牌——我親眼看過一場氣氛很好的局，就因為一個人老是讓跟注的人在那邊冒汗、遲遲不翻贏牌，整整一圈都冷掉了。

### 錯誤 2：荷官還沒讀牌就把牌蓋掉

你八成覺得自己輸了。你把牌正面朝下推向蓋牌堆。荷官把牌收進去。結果你手上才是贏家。牌死了——底池沒了。==沒確定之前，千萬別蓋牌。== 讓荷官把兩手牌都讀完。

### 錯誤 3：每一手被跟到的牌都要求看

在多數牌房，你可以要求荷官把一手蓋掉的牌翻開——但僅限那手 **被跟到、而且進到攤牌** 的牌。已經蓋掉的棄牌是死牌，永遠拿不回來。這條「要求看牌」的規則，是用來防串通作弊的，不是用來滿足好奇心的，濫用它會被當成失禮。要省著用。

### 錯誤 4：不知道自己可以提早亮牌

沒有任何規則禁止你在還沒正式輪到你之前就翻牌。==g:如果你手上是堅果牌或一手很強的牌，馬上亮。== 別的玩家會感激你。這能加快牌局。而且這正是搓牌的相反面。

---

:::readnext[繼續閱讀]
/zh-hant/blog/texas-holdem-rules-for-beginners | 德州撲克規則怎麼玩 | /images/rules-texas-holdem.webp
/zh-hant/blog/holdem-all-in-rules | 德州撲克全下與邊池規則 | /images/holdem-all-in-rules-hero.webp
:::

## 常見問題 FAQ

**Q. 德州撲克攤牌時誰先亮牌？**

A. 在最後一輪下注做出最後主動動作（下注或加注）的人要先亮牌。如果最後那一輪所有人都過牌，就從按鈕左邊第一位還在牌局裡的玩家開始亮，接著順時針進行。

**Q. 攤牌被跟到，一定要亮牌嗎？**

A. 要——如果你是河牌圈最後一個下注或加注的人，被跟到時你必須先亮。如果是你跟了別人的注，你可以在看到對方的牌、確認自己輸了之後，正面朝下蓋牌。不過在多數牌房，任何被發到牌的玩家，都可以要求荷官把這手被跟到又蓋掉的牌翻開。

**Q. 只剩我一個人，還要亮牌嗎？**

A. 不用。如果你的下注把其他人全部逼退、在河牌攤牌前大家都蓋牌，你不用亮出任何一張底牌就直接收下底池。想亮是你的自由（有人會秀詐唬去干擾對手），但靠別人全蓋贏來的牌，你永遠沒有義務亮。

**Q. 攤牌可以不亮牌直接蓋掉嗎？（Muck）**

A. 可以，但只有在你明確輸了的時候。一旦贏家的牌亮出，輸的玩家可以正面朝下蓋牌。例外是：如果你的牌是被跟到的，對手可以要求看。只要對誰贏還有一絲不確定，荷官讀完兩手牌前絕對別蓋。

**Q. 搓牌（Slow Roll）是什麼？為什麼很失禮？**

A. 搓牌是故意拖延，遲遲不亮出你早就知道是最大的贏牌。它合法，卻人人討厭，因為它被視為故意在羞辱對手。如果你手上是堅果牌或明擺著的贏家，立刻翻牌。你亮牌的速度，其實很能說明你在牌桌上的品格。

**Q. 全下的局面，誰先亮牌？**

A. 當一名玩家全下、後面不可能再有下注時，涉及那個池的所有手牌，通常會在發完剩下的公牌前或發牌時全部正面朝上。如果有一個還在繼續下注的邊池，那些玩家裡最後主動下注者先亮邊池的牌。全下玩家的牌則另外為主池亮出。

**Q. 撲克裡的「牌面說話（Cards Speak）」是什麼意思？**

A. 牌面說話的意思是：勝負依牌實際亮出來的樣子決定，不看玩家嘴上怎麼講。一名玩家就算看錯牌、宣告錯了牌型，只要他實際的牌是最強的，照樣贏。反過來，一名沒確認自己是否真的輸就蓋牌的玩家，就算他那手牌本來會贏，也對底池沒有任何主張。

**Q. 沒攤牌就贏了，要亮底牌嗎？**

A. 不用。如果在河牌攤牌前其他人全部蓋牌，你立刻贏下底池，永遠不必亮出你的底牌。亮牌是選擇性的——有些玩家會翻一手詐唬去激對手，但一手不戰而勝的牌，你永遠不被要求亮出。

---

## 相關文章

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/zh-hant/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">新手規則</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克規則怎麼玩</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">盲注、發牌順序、一路打到攤牌</div>
  </a>
  <a href="/zh-hant/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平分底池</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">德州撲克平分底池規則</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">什麼時候會 chop、邊池怎麼分</div>
  </a>
  <a href="/zh-hant/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">平手比法</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">牌型一樣誰贏？踢腳與平手比法</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">攤牌牌型一樣時，到底誰拿走底池</div>
  </a>
</div>
`.trim(),
};

export default POST;
