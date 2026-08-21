import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑩ 영어판 — 8♦5♣2♠ 3벳팟 (BB 3벳터 vs BTN 콜러)
 *
 * ★★ 이 편부터 «재저작»이 아니라 «번역 + 5필드»다 (스펙 §4-A-3 · 2026-08-21 확정).
 *   언어별로 바꾸는 것은 seoTitle · desc · H2 문구 · FAQ 문항 선택 · 내부링크 대상 **다섯뿐**이고,
 *   본문·수치·전략 논거·**고지 문장**은 KO ⑩을 그대로 옮긴다. 계산은 `check:gto`가 강제한다.
 *   🔴 착수 조건이었던 «KO가 검수 종료 상태»는 충족됐다 — M-027 3차 재판정에서 D·F 대상 전건 해소.
 *
 * ▶ 수치 출처: 2026-08-21 `?lang=en` 라이브 재캡처(`capture-solver-spots.mjs 3bp-low --lang=en`).
 *   §4-B 정본과 **전건 일치** — OOP 83.0 / 58.6% / 14.09 / 106.9% · IP 144.0 / 41.4% / 8.41 / 90.3%
 *   BB: Bet 14.9bb (66% pot) **97.8%**(81.1) · Bet 7.4bb (33% pot) 0.3%(0.2) · Check 2.0%(1.7)
 *   BB hands: Overpair 43.4 · Second Pair 3.6 · Ace-High 48.2 · King-High 4.8 (합 100.0)
 *   BB draws: **Gutshot 4.8 · Backdoor FD 16.9 · No Draw 78.3** (합 100.0)
 *     🔴 이 세 줄이 **상호배타**다. 「거트샷을 뺀 나머지가 78.3」으로 쓰지 마라 —
 *        M-023에서 KO를 그렇게 고쳤고, 이번 라이브 캡처가 그 정정을 독립 확인했다.
 *        **히어로 이미지에 16.9%가 그대로 찍혀 있어** 독자가 눈으로 검산한다.
 *   BTN hands: Set/Trips 6.3 · Overpair 16.7 · Top Pair 2.1 · Underpair 16.7 · Ace-High 36.1 ·
 *              King-High 13.9 · No Made Hand 8.3 (합 100.1)
 *   BTN draws: Backdoor FD 20.1 · No Draw 79.9
 *   화면 라벨: Player = 「OOP (BB (3-Bettor))」 · 「IP (BTN (Caller))」 · 보드명 「Low Dry Board」
 *
 * ▶ 키워드 (2026-08-21 실측 · 언어당 «키워드 팩» 1회 — 스펙 §4-A-3)
 *   🔴 **US 볼륨이 거의 안 잡힌다** — `3bet pot flop strategy`·`low flop 3bet pot`·`c bet dry flop`·
 *      `connected board poker` 전부 **볼륨 없음(null)**. 검수장 경고(「뱅크 별표 키워드 US 볼륨 0」) 그대로다.
 *      살아 있는 것: **`polarized range poker` 30**(12개월 +12.5% · 경쟁성 1) · `dry board poker` 10.
 *   🔴 **카니발 정리 — 키워드 팩이 실제로 하나 잡았다.**
 *      `polarized range poker`를 **EN ⑧이 tags로 갖고 있었는데, ⑧의 레인지는 폴라가 아니다.**
 *      ⑧은 본문에서 「아래가 잘린 레인지」라 하고, 그 단어를 쓸 때조차 **8-5-2(=이 편)를 가리킨다**
 *      ("8-5-2 ... its range splits into overpairs and ace-high with nothing between, and a polarized shape bets big").
 *      → **⑧에서 빼고 ⑩이 가져왔다.** 이건 재배분이 아니라 **오태깅 정정**이다.
 *      🪶 프리플랍 층의 `linear vs polarized range`는 `holdem-3bet`이 계속 소유한다 — 층이 다르다.
 *
 * ▶ SERP (2026-08-21 WebSearch): GTO Wizard 「C-Betting IP in 3-Bet Pots」·「Navigating Range
 *   Disadvantage as the 3-Bettor」 · Upswing 「3-Bet Preflop Strategy」 · MicroGrinder 「Linear vs Polarized」.
 *   🔴 **상위글의 정설이 이 글과 정면으로 갈린다** — "On dry boards or in 3-bet pots, bet small with
 *      your entire range". 이 시리즈는 그 정설을 **보드로 가른다**: 같은 3벳팟·같은 SPR 4.0인데
 *      ⑧ AK2는 작은 사이즈 **57.8%**, ⑩ 852는 큰 사이즈 **97.8%**다. 그 대조가 이 글의 값이다.
 *   상위글이 못 주는 것: ① **콤보 수**(83콤보 중 보드를 맞은 것이 A5s 3콤보) ② **트리플 0% 대 6.3%**
 *      ③ 드로우 3행 정확한 분해 ④ 젖은 ⑨(98.4%)와 마른 ⑩(97.8%)이 **이유는 다른데 결론이 같다**.
 *
 * ★이 시리즈는 §8 「경험담 필수」 예외 — 1차 데이터가 본체이고 재현 가능성이 출처를 대신한다.
 *
 * 🔴 **2026-08-21 (검수장 M-032 §1) — readnext 둘째 카드를 ⑧ → ⑪로 되돌렸다. 다시 바꾸지 마라.**
 *   발행 당시 EN ⑪이 없어 ⑧으로 «대체»한 것이었는데 **⑪ 발행(`ecb07811`) 후 되돌리지 않았다.**
 *   사슬 실측: EN ⑨→⑧⑩ · **⑩→⑨⑧** · ⑪→⑩⑫ · ⑫→⑪⑬ — **⑩ 한 편만 KO와 달랐고**,
 *   본문에도 `blind-battle-cbet`이 0곳이라 ⑨→⑩까지 온 독자가 ⑪로 갈 길이 없었다.
 *   🔴 **규율(검수장 제안 · 수용)**: **미발행 대체 링크는 «그 편이 발행되는 커밋»에서 되돌리고,
 *      분모는 KO 쪽에서 세라.** 헤더에 「발행 직후 걸어라」라고 적어 두는 것만으로는 샌다 —
 *      ⑪⑫⑬은 그렇게 해서 지켰는데 **⑩은 그 메모를 ⑩ 자신에게는 안 남겼다.**
 *
 * 🔴 KO ⑩이 세 회차 검수로 확정한 것 — 번역에서 떨어뜨리지 마라 (고지 문장 포함):
 *   ① 드로우 3행은 **상호배타**(위 참조). 여집합으로 흡수 금지.
 *   ② 「작게 시작하면 스택을 다 넣을 길이 사라진다」는 **거짓**(33%로도 7.4 → 24.6 → 57.0으로 소진).
 *      사이즈를 정하는 건 스택 깊이가 아니라 레인지의 모양이다 — ⑧은 같은 SPR에서 작은 쪽을 57.8% 쓴다.
 *   ③ 「레이즈가 오면 오버 페어가 이길 핸드가 없다」는 **유해 조언**이다 — 레이즈 대응 노드가 없고,
 *      AA·KK는 레이즈 레인지에서 셋 9콤보를 뺀 전부를 이긴다.
 *   ④ 「58.3%가 못 맞았다」를 「58.3%가 접는다」로 **환산하지 마라**(대응 노드가 없다). 3사본 전부.
 *   ⑤ EQR 격차를 «상대가 챙겨 가는 몫»으로 읽지 마라 — 실제 팟 몫은 37.4% 대 31.3%로 6.1%p다.
 *   ⑥ MDF 60.2%는 **채워야 할 콜 할당량이 아니라 출발선**이다.
 *   ⑦ 「트리플」은 앱 라벨이다 — 852는 언페어드라 원리상 **셋**만 가능하다. 병기해서 옮긴다.
 */
export const POST: Post = {
  slug: "3bet-pot-low-board",
  title: "Three Combos Hit This Flop — and It Still Bets 97.8%",
  seoTitle: "A Polarized Range Bets 97.8% on a Board It Missed",
  // 152자 (디코딩 기준 · EN 하드리밋 160)
  desc: "In a 3-bet pot on 8-5-2, only three combos in the big blind's range paired the board — and it fires two-thirds pot 97.8% of the time. Here is why.",
  tldr: "After a big blind three-bet and a button call, the flop 8♦5♣2♠ gets a two-thirds-pot bet 97.8% of the time. The odd part: of the big blind's 83 combos, exactly three paired this board — the A5s — and none of 88, 55 or 22 is in the range at all. The bet goes anyway because the range splits into 36 combos of overpairs and 40 combos of ace-high with nothing in between. A polarized shape bets big.",
  category: "strategy",
  date: "2026-08-21",
  updated: "2026-08-21",
  readTime: "10 min",
  emoji: "🎲",
  image: "/images/gto-3bp-low-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for an 8-5-2 rainbow flop in a three-bet pot, the big blind's grid almost entirely coloured for the large bet",
  keepImagesInBody: true,
  tags: [
    "polarized range poker",
    "dry board poker",
    "3-bet pot flop",
    "overpair strategy",
    "gto solver",
  ],
  content: `
The flop comes **8♦ 5♣ 2♠**. You three-bet before the flop, the board is as dry as it gets, and you are holding A-K. No pair, no draw. **This is where checking feels obvious.**

The solver does the opposite. **It bets 14.9bb — two-thirds of the pot — 97.8% of the time.** And this is not a statement about A-K. Of the big blind's 83 combos, the number that actually *paired* this board is ==three==.

Why a range that hit nothing fires the big size is what the numbers below are for. All of them come from HoldemMaster's [free GTO solver](/en/solver).

![HoldemMaster GTO solver results for an 8-5-2 flop in a three-bet pot — the big blind's range almost entirely coloured for the large bet](/images/gto-3bp-low-oop-en.webp "8-5-2 in a three-bet pot · the big blind's flop strategy — Bet 14.9bb (66% pot) at 97.8%")

:::stripe
Spot | BB three-bets → BTN calls (heads-up)
Flop | 8♦ 5♣ 2♠ (rainbow, unconnected)
Pot · stack | Pot 22.5bb · effective stack 89bb · **SPR 4.0**
Result | Two-thirds pot 97.8% — three combos paired this board
:::

> **Quick answer**
> On 8-5-2 in a three-bet pot the big blind bets **two-thirds of the pot 97.8%** of the time. Yet of its 83 combos only **three — the A5s — paired the board**, and 88, 55 and 22 are not in the range at all. The bet still goes in because the range splits into **36 combos of overpairs (43.4%) and 40 combos of ace-high (48.2%)** with almost nothing between them. Very strong or nothing at all — when the middle is empty, the size goes up.

## What conditions produced these numbers?

The same three-bet-pot setup as the [A-K-2](/en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp") and [Q-T-7](/en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") spots. Only the board changed.

| Item | Setting |
|---|---|
| Preflop | BTN opens → **BB three-bets to 11bb** → BTN calls |
| OOP · IP | OOP = big blind (three-bettor) · IP = button (caller) |
| Flop | 8♦ 5♣ 2♠ (three different suits) |
| Pot · stack | Pot 22.5bb · effective stack 89bb (**SPR 4.0**) |
| Bet sizes | About a third of the pot (7.4bb) and two-thirds (14.9bb) |
| Rake | Not modeled |
| Checked | 2026-08-08 (study spot result) |

The 22.5bb pot is ==11 three-bet + 11 call + 0.5 dead small blind==. The display is in **big blinds** — EV reads as "EV (bb)" and each bet shows the amount alongside its share of the pot.

## How often does the three-bettor actually bet?

**The large size, 97.8% of the time.** Almost identical to the wet board in the previous spot (98.4%).

| The big blind's first action | Frequency | Combos |
|---|---|---|
| Bet 14.9bb (66% pot) | **97.8%** | 81.1 |
| Check | 2.0% | 1.7 |
| Bet 7.4bb (33% pot) | 0.3% | 0.2 |

Here is the strange part. **[Q-T-7](/en/blog/3bet-pot-bet-sizing), drenched in draws, and this board, which has almost none, use the same size at almost the same frequency.** In the previous spot the large size was there to put a price on the opponent's draws. There are no draws to charge here. **The reason differs; the conclusion does not.**

## Did only three combos really pair this board?

**Yes — three combos of A5s.** Laying out all 83 combos:

| Category | Share | Combos | What it is |
|---|---|---|---|
| Overpair | 43.4% | 36 | AA · KK · QQ · JJ · TT · 99 |
| Ace-high | 48.2% | 40 | AK 16 · AQ 16 · AJs 4 · A4s 4 |
| Second pair (5) | 3.6% | 3 | **A5s** |
| King-high | 4.8% | 4 | KQs |
| **Set/trips** | **0%** | **0** | 88, 55 and 22 are not in a three-betting range |
| **Top pair (8)** | **0%** | **0** | Nothing in the range holds an eight |

The combinations come out as whole numbers. The 36 overpair combos are six pocket pairs from 99 up to AA, six combos each. **Every pocket pair above an eight becomes an overpair — that is what a low board does.** A5s is three combos rather than four because the 5♣ is on the board, leaving A♠5♠, A♥5♥ and A♦5♦.

There is exactly one gutshot too. **The four combos of A4s** are one card — a three — away from the A-2-3-4-5 wheel. The solver's draw panel splits into three mutually exclusive rows: **gutshot 4.8% · backdoor flush 16.9% (14 combos) · no draw 78.3%.** That is *not* "78.3% is whatever is left after the gutshot." All three have to be added to reach 100, and the backdoor 16.9% sits between them (it needs runner-runner suited cards, so it completes about 4.2% of the time).

## Why bet big with a range that missed?

**Because the range splits into "very strong" and "nothing," with an empty middle.** When the middle is gone, the size goes up.

The 36 overpair combos take the entire top of the big blind's range. **From AA or KK, the only hands beating you are the button's nine combos of a set.** At the other end, the 40 ace-high combos beat almost nothing at showdown **against the range that calls a big bet** — though against all 144 of the button's combos the picture is different, since 58.3% of them missed this board too.

⚠ Do not treat the overpairs as one block, though. The button holds overpairs of its own — 16.7%, 24 combos of QQ, JJ, TT and 99 — so the big blind's 99 loses to 18 of them, TT to 12, JJ to 6. **The ranking runs inside the "overpair" row as well.**

| Range shape | Size |
|---|---|
| Strong, medium and weak spread evenly (a range bet) | Small — the medium hands need to get called |
| **Strong or nothing (polarized)** | **Large — with no middle, there is nothing to protect** |

SPR 4 shows how far that size travels — it is not the *reason* for it, which is the polarized shape above. With only 89bb behind, **two-thirds-pot twice and then whatever is left on the river empties the stack exactly**: 14.9bb on the flop, 34.5bb on the turn, 39.6bb on the river. The first two come to ==14.9 + 34.5 = 49.4bb==, or 55.5% of the 89bb stack.

⚠ **That is not the same as "start small and you lose the path to getting it all in."** You do not. Starting with 7.4bb: called, the pot is 37.3 with 81.6 behind; two-thirds of that on the turn is 24.6, leaving a pot of 86.5 and a stack of 57.0; the river shove of 57.0 is 65.9% of the pot. **And the size is not chosen by stack depth anyway** — the [A-K-2 board](/en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp") sits at the same SPR of 4.0 and uses the **small** size 57.8% of the time. What produces the large size here is the polarized range, not the SPR.

And the 40 ace-high combos **win as soon as the opponent folds.** 58.3% of the button's range is ace-high, king-high or no made hand on this board. ⚠ "Missed" is not "folds," though — **the node for how the button responds to a bet is not in this solve**, so no fold frequency comes out of it, and the button's ace-highs run A-K down to A-T, which keeps some showdown value. When a bluff is actually profitable is covered in [bluffing strategy](/en/blog/holdem-strategy).

## Why are all the sets on the other side?

**Because 88, 55 and 22 are not in a three-betting range, and they are in a calling range.** This is the first spot in the series where the top of the board belongs entirely to the in-position player.

![Range composition infographic comparing the big blind and button hand categories on an 8-5-2 board in a three-bet pot](/images/gto-3bp-low-ranges-en.webp "8-5-2 in a three-bet pot · category split — trips only on the button, overpairs nearly double for the big blind")

| Category | BB (three-bettor) | BTN (caller) |
|---|---|---|
| **Set/trips** | **0.0%** | **6.3%** (9 combos) |
| Overpair | **43.4%** | 16.7% |
| Top pair (8) | 0.0% | 2.1% |
| Second pair (5) | 3.6% | — |
| Underpair | — | **16.7%** |
| Ace-high | **48.2%** | 36.1% |
| King-high · no made hand | 4.8% | **22.2%** |

The button's nine combos are 88, 55 and 22, three each — one of every rank sits on the board, so each pocket pair drops from six combos to three. 🪶 The table and the solver screen both call this row **"Set/Trips."** On 8-5-2 only a **set** is possible, since the board holds no pair (trips means holding one card of a paired board). The app label is quoted as it appears — read it as *set*.

**This shape matters at the table.** All the sets are on the other side, and the big blind has nothing above them — so its overpairs are not the nuts here.

⚠ Do not turn that into "if a raise comes back, the overpair beats nothing." Two reasons. First, **the node for responding to a raise is not in this solve** — the study spot stops at the flop's first action. Second, it is not true anyway: to raise against a 97.8% range bet you need bluffs mixed with the value (nine combos of a set), and **AA and KK beat everything in that raising range except those nine combos.**

## Why does the caller realize more equity here than in the last two spots?

**The button's realization climbs to 90.3% in the same three-bet-pot structure.** It was 78.7% and 75.1% in the previous two. ⚠ It is not that the button alone went up — the two EVs sum to the pot, so **when one side rises the other must fall.** The big blind came down from 117.8% to 106.9%. These are not two facts but two sides of one.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.6% | 41.4% |
| EV (bb) | 14.09 | 8.41 |
| **EQR** | **106.9%** | **90.3%** |

| Three-bet pot, three boards | BB EQR | BTN EQR |
|---|---|---|
| A♦K♠2♥ dry (⑧) | 109.6% | 78.7% |
| Q♥T♥7♠ two-tone (⑨) | 117.8% | 75.1% |
| **8♦5♣2♠ low (⑩)** | **106.9%** | **90.3%** |

The reason is where the sets live. **The button is the only player who can hold one**, and those nine combos collect whole stacks. Its 16.7% of underpairs — 77, 66, 44, 33 — are also ahead of ace-high, which gives them a reason to pay off the bet.

**A low board is where the three-bettor stays ahead but converts that edge into money least well.** Its 58.6% equity is actually a shade above Q-T-7's 58.3%, while **realization** drops from 117.8% to 106.9%. ⚠ Do not read the 15.2-point move on the **button's** side (⑨ 75.1% → ⑩ 90.3%) as "what the opponent takes home" — EQR is the ratio of equity *realized*, not a share of the pot. By actual share, this button books ==8.41 ÷ 22.5 = 37.4%== against ⑨'s ==7.04 ÷ 22.5 = 31.3%== — a gap of **6.1 points**.

## What changes at the table?

- **Do not default to "I missed, so I check" on a low dry board.** In a three-bet pot your opponent missed too — **58.3%** of the button's range failed to make a pair here. ⚠ Do not convert that 58.3% into a folding share; the response node is not in this solve. The reason to bet is not "they fold" but **"my range is polarized, so the large size earns its keep."**
- **But do not treat an overpair as the nuts when a raise comes back.** All nine set combos are on the other side, and the button also holds 24 combos of QQ through 99. **Your 99 and TT are overpairs that lose to overpairs.**
- **Against someone who rarely folds, cut the ace-high portion.** The 97.8% figure rests on the fact that much of the opponent's range missed. ⚠ Again, "58.3% missed" is not "58.3% folds" — no fold frequency comes out of this solve, and the button's 36.1% of ace-high is the A-K, A-Q, A-J, A-T family with no weak aces in it. 🪶 Facing 14.9bb into 22.5bb the MDF is **60.2%**, but that is a **starting point, not a calling quota** — MDF treats the bet as a pure bluff with zero equity, and the range betting here contains 36 combos of overpairs, so the true optimal defense sits below it. Against a calling station, firing ace-high twice and three times turns the whole bluff portion into losses; narrow to the overpairs for value instead.
- **From the button, small pocket pairs are worth more here than anywhere in this series.** 88, 55 and 22 make sets, and 77, 66, 44 and 33 are all ahead of ace-high. That is the exact opposite of [the A-K-2 spot](/en/blog/3bet-pot-cbet), where the underpairs were helpless. How the three-betting range is built decides this, and that is in [3-bet strategy](/en/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp").
- **Count the SPR before you bet.** At SPR 4, two-thirds-pot twice (14.9 → 34.5) plus a river shove of 39.6 empties 89bb precisely. The moment you bet the flop, whether you are going all the way is effectively already decided.

:::readnext[Keep reading]
/en/blog/3bet-pot-bet-sizing | One Size, 98.4% of the Time — Q-T-7 in a 3-Bet Pot | /images/gto-3bp-dynamic-oop-en.webp
/en/blog/blind-battle-cbet | The Player With No Position Bets First — 67.4% of the Time | /images/gto-sb-king-mid-oop-en.webp
:::

## Check it yourself

Every figure here comes up if you open the [GTO solver](/en/solver) and hit **Study Spots → "Low Dry Board" → [⚡ View results]**. To play the same spot as a problem instead, open the [GTO Trainer](/en/solver) from the sidebar — it deals you a random hand, and once you pick an action it shows the mixed frequency and the **EV loss (bb)** of your choice. Your history stays in your own browser.

Look for the **missing "Set/Trips" row** in the hand panel. Then switch the player to IP (BTN) and it appears at 6.3%. That one line is the whole story of who holds the top of this board. Free, no install, no account.

**Q. Should you c-bet A-K on a low board in a three-bet pot?**

A. Yes. On 8-5-2 A-K has neither a pair nor a draw, yet the solver puts the whole range into the large size 97.8% of the time. The reason is that the big blind's range is **polarized — overpairs or ace-high, split roughly in half** — and when the middle is empty the size goes up, with the entire range using it. That 58.3% of the opponent's range failed to pair helps, but do not read it as "58.3% folds"; the response node is not in this solve.

**Q. What does a polarized range mean?**

A. A range made only of very strong hands and hands with nothing, with the middle missing. Here the big blind is 43.4% overpairs and 48.2% ace-high with almost nothing between. With no medium hands to get called, there is no longer a reason to keep the size small.

**Q. Why does the three-bettor have no sets?**

A. Because small pocket pairs like 88, 55 and 22 get called or folded preflop rather than three-bet. So all nine set combos on this board sit with the button. That is why the feeling of "I dominate in a three-bet pot" wobbles on a low flop.

**Q. Can these numbers go straight into a live game?**

A. Use them as a baseline when the conditions match. If your three-betting range mixes in small pocket pairs or suited connectors, the composition on this board changes and the size split changes with it. Rake is not modeled in the calculation.
`.trim(),
};

export default POST;
