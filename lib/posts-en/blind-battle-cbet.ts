import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑪ 영어판 — K♥T♦6♠ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *
 * ★★ «번역 + 5필드»다 (스펙 §4-A-3). 언어별로 바꾸는 것은
 *    seoTitle · desc · H2 문구 · FAQ 문항 선택 · 내부링크 대상 **다섯뿐**이고,
 *    본문·수치·전략 논거·**고지 문장**은 KO ⑪을 그대로 옮긴다.
 *    🔴 착수 조건(«KO가 검수 종료»)은 충족됐다 — M-023 8건 + M-025/027 전파를 받았다.
 *
 * ▶ 수치 출처: 2026-08-21 `?lang=en` 라이브 재캡처(`capture-solver-spots.mjs sb-king-mid --lang=en`).
 *   §4-B 정본과 **전건 일치** — OOP 538.0 / 55.3% / 3.42 / 103.1% · IP 525.0 / 44.7% / 2.58 / 96.1%
 *   SB: Bet 2bb (33% pot) **67.4%**(362.1) · Check **32.6%**(175.9)   ← **사이즈는 하나뿐이다**
 *   SB hands: Set/Trips 1.7 · Two Pair 2.4 · Overpair 1.1 · Top Pair 15.6 · Second Pair 11.7 ·
 *             Weak Pair 6.1 · Underpair 10.0 · Ace-High 26.8 · No Made Hand 24.5 (합 99.9)
 *   BB hands: Set/Trips 0.6 · Two Pair 2.5 · Top Pair 10.9 · Second Pair 13.7 · Weak Pair 8.0 ·
 *             Underpair 8.0 · Ace-High 22.1 · No Made Hand 34.3 (합 100.1) — **Overpair 행이 없다 = 0**
 *   SB draws: OESD 3.0 · Gutshot 16.4 · Backdoor FD 17.8 · No Draw 62.8 (합 100.0)
 *   BB draws: OESD 2.3 · Gutshot 16.0 · Backdoor FD 21.1 · No Draw 60.6 (합 100.0)
 *     🔴 **네 줄은 상호배타다.** 여집합으로 흡수하지 마라(⑩이 M-023에서 그렇게 틀렸다).
 *        **Flush Draw 행이 아예 없다** — 보드가 레인보우다.
 *   화면 라벨: 보드명 「King-High with a Ten」 · 「OOP (SB (Opener))」 · 「IP (BB (Caller))」
 *
 * ▶ §13 손 검산 (게이트가 이 글을 «미검사»로 흘린다 — 직접 셌다)
 *   팟      = SB 오픈 3 + BB 콜 3 = 6bb ✓ / 유효 스택 = 100 − 3 = 97bb ✓ / SPR = 97 ÷ 6 = 16.2 ✓
 *   액션 합 = 67.4 + 32.6 = 100% ✓ / 콤보 합 = 362.1 + 175.9 = 538.0 ✓
 *   EV 합   = 3.42 + 2.58 = 6.00bb = 팟 ✓
 *   EQR     = 3.42 ÷ (0.553 × 6) = 103.1% ✓ / 2.58 ÷ (0.447 × 6) = 96.2%(표기 96.1 · 오차 0.1%p) ✓
 *   사이즈  = 2.0 ÷ 6 = 33.3% ✓
 *   트리플  = KK·TT·66 각 3콤보(랭크마다 한 장이 보드) = 9 · 9 ÷ 538 = 1.67% → 1.7% ✓
 *             BB는 66만 3콤보 · 3 ÷ 525 = 0.57% → 0.6% ✓ (KK·TT는 3벳으로 나간다)
 *   오버페어= AA 6콤보뿐(K 위는 A밖에 없다) · 6 ÷ 538 = 1.12% → 1.1% ✓ / BB는 0 ✓
 *   양방    = 3.0% × 538 = 16.1콤보 = **QJ 16콤보**(QJs 4 + QJo 12) — 이 보드에서 양방은 QJ 하나뿐이다 ✓
 *             (K-Q-J-T로 A나 9를 받는 8아웃)
 *   거트샷  = AQ(J) · AJ(Q) · Q9(J) · J9(Q) · 98(7) · 87(9) — 여섯 조합 전부 한 장짜리 확인 ✓
 *   보드    = K♥ T♦ 6♠ → 세 무늬 전부 다름 = 레인보우 ✓
 *   ①의 1.9% = 두 사이즈 1.0 + 0.9 (반올림) — §4-B 체크 98.2 와 0.1%p 어긋나는 것은 **정상**이다.
 *             「0.1~1.8%」로 고치지 마라. ① 본문 102줄이 「(반올림)」이라고 명시한다.
 *
 * ▶ 키워드 (2026-08-21 rakko 실측 · US)
 *   🟢 **이 편의 자리 = `blind vs blind poker` 10 (6개월 +50% · 12개월 +20%)** —
 *      `lib/posts-en/` 전체에서 **tags 0건 · 본문 언급 0건**인 완전한 빈자리다.
 *   🔴 **가져오면 안 되는 것들 (전부 임자가 있다)**:
 *      · `out of position poker` **110** · `poker position strategy` 20 → **`holdem-position-play`**
 *      · `c-bet out of position` → **`holdem-continuation-bet`**
 *      · `small blind vs big blind` **260** → **`holdem-blind-meaning`**(룰 층이다)
 *      · `spr poker` **480** → **`holdem-spr`** 필라 (스펙 §4-A 160줄)
 *      · `range advantage` 계열 → ①(`a-high-board-cbet`) · ③ · ④
 *   🪶 **키워드 팩이 ①에서 자릿수 함정을 하나 잡았다** — ①이 `poker range advantage`(**10**)를 달고
 *      있었는데 어순만 바꾼 **`range advantage poker`는 30**이고 12개월 **+54.8%** 상승세다.
 *      ①의 태그를 30 쪽으로 바꿨다(근거는 ① 헤더에 박아 뒀다). **⑪이 가져오지 않았다** — 층이 다르다.
 *
 * 🔴 EN 링크 제약 (⑬ 발행 시 반드시 되돌아올 것)
 *   ✅ **2026-08-21: ⑫ 링크는 걸었다** — 같은 회차에 EN ⑫를 발행해 본문 6곳 + readnext를 복원했다.
 *      **다시 빼지 마라.** ⑫는 이 편의 논거에 필수인 반례다(같은 자리인데 9.6%).
 *   ⚠ 남은 것은 ⑬뿐이다. 아래는 당시 기록이다:
 *   KO ⑪은 ⑫(`blind-battle-connected-board`)를 **본문 5곳 + readnext**에서 링크한다.
 *   ⑫는 이 편의 **논거에 필수인 반례**다(같은 자리인데 9.6%). EN ⑫가 아직 없어서
 *   **문장은 전부 살리고 링크만 뺐다.** ⑬(`ace-paired-board-strategy`)도 같다.
 *   → **EN ⑫⑬ 발행 직후 이 파일에 링크를 걸어라.** 문장은 이미 그 자리에 있다.
 *   대체한 것 셋: `holdem-check-raise` → `low-board-check-raise`(⑦) ·
 *   `position-is-everything-in-holdem` → `holdem-position-play` ·
 *   `holdem-cbet-strategy` → `holdem-continuation-bet`.
 *
 * ★이 시리즈는 §8 「경험담 필수」 예외 — 1차 데이터가 본체이고 재현 가능성이 출처를 대신한다.
 *
 * 🔴 KO ⑪이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
 *   ① **축F — 반례 두 줄(⑫⑬)을 표에서 빼지 마라.** 같은 SB 오픈 레이저가 9.6 / 67.4 / 80.1로
 *      **70.5%p 폭**이고, ⑫의 9.6%는 콜러인 ⑤(11.2)·④(23.7)보다 **낮다.**
 *      「콜러와 공격자 사이에 절벽」은 그 두 줄을 빼야만 나온다.
 *   ② tldr·바로 답을 「보드가 **아니라** 자리」로 단언하지 마라 — 본문은 「보드도 본다」고 이미 말한다.
 *   ③ **EQR이 높다고 우위가 큰 게 아니다** — 에퀴티가 **분모**다(⑧ 68.9%인데 109.6 < ⑨ 58.3%인데 117.8).
 *   ④ **트리에 33% 하나뿐**이니 「크게 치면 값이 떨어진다」를 단언하지 마라.
 *   ⑤ EQR 순 표에서 **⑫(85.3%)를 빼지 마라** — 넣으면 「비콜러 → 100% 초과」 함의가 깨진다.
 *   ⑥ **SPR 16.2를 본문에서 쓰고 레이즈 대응을 다뤄라** — 67.4%로 치면 레이즈를 자주 받는다.
 *   ⑦ 「상대의 3분의 1이 아무것도 못 맞았다」로 쓰지 마라 — 미완성 34.3%에 **드로우가 들어 있다.**
 *   ⑧ 「SB로 열었으니 우위는 내 쪽」은 **프리플랍 한정**이다(⑫에서 같은 두 레인지가 49.6 대 50.4로 뒤집힌다).
 */
export const POST: Post = {
  slug: "blind-battle-cbet",
  title: "The Player With No Position Bets First — 67.4% of the Time",
  seoTitle: "Blind vs Blind GTO: Out of Position, Betting 67.4%",
  // 155자 (EN 하드리밋 160)
  desc: "Blind vs blind on K-T-6, the small blind is first to act with no position — and bets 67.4%. Here is how a range edge drags equity realization past 100%.",
  tldr: "After a small-blind open and a big-blind call, the K♥T♦6♠ flop gets a bet 67.4% of the time and a check 32.6%. In the seven single-raised pots earlier in this series the out-of-position player bet only 0.1% to 23.7% — and two things changed, not one. Here the out-of-position player is the raiser rather than the caller, and the board favors that range. Together they push the out-of-position equity realization to 103.1%.",
  category: "strategy",
  date: "2026-08-21",
  updated: "2026-08-21",
  readTime: "10 min",
  emoji: "⚔️",
  image: "/images/gto-sb-king-mid-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver showing the small blind's range on a K-T-6 rainbow flop, most of the grid coloured orange for the bet",
  keepImagesInBody: true,
  tags: [
    "blind vs blind poker",
    "small blind open",
    "king high flop",
    "equity realization",
    "gto solver",
  ],
  content: `
Across the seven single-raised pots earlier in this series one rule kept repeating. **Whoever acts first checks.** The highest the out-of-position player ever bet was on the [9-8-7 connected board](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") at 23.7%, and the other six topped out at 11.2%. The only exception was a three-bet pot.

This is not a three-bet pot. It is an ordinary hand: the small blind opens to 3bb, the big blind calls. And **the player who acts first bets 67.4%.**

What changed? The pot is small at 6bb and the stacks are 97bb deep. What changed is **who acts first, and which range the board favors — both at once.** Every number below comes from the [HoldemMaster GTO solver](/en/solver).

![HoldemMaster GTO solver on a K-T-6 rainbow flop, the small blind's grid mixed orange for the bet and green for the check](/images/gto-sb-king-mid-oop-en.webp "K-T-6 blind vs blind · the small blind's flop strategy — orange is the 67.4% bet, green the 32.6% check")

:::stripe
Spot | SB opens 3bb → BB calls (blind vs blind)
Flop | K♥ T♦ 6♠ (rainbow)
Pot · stack | Pot 6bb · effective stack 97bb · **SPR 16.2**
Result | SB bets **67.4%** — the first single-raised pot where the out-of-position player leads
:::

> **Quick answer**
> On K-T-6 blind vs blind the small blind's first action is **bet 67.4%, check 32.6%**. That is the reverse of the 0.1%–23.7% seen in spots ① through ⑦, and **two things** are different, not one: the out-of-position player here is **the raiser rather than the caller**, and the board is a king with a broadway kicker. The seat alone does not explain it — the same small-blind raiser bets only **9.6%** on [a 7-6-5 board](/en/blog/blind-battle-connected-board) later in this series. Here the two line up, so the preflop aggressor is also first to act and holds the range edge and the action order together. The result is an **out-of-position equity realization of 103.1%** — the first time in a single-raised pot that it clears 100%.

## What conditions produced these numbers?

★**The setup has changed again.** Pot, stack and roles are all different from the earlier spots, so the table comes first.

| Item | This spot (blind vs blind) | ①–⑦ (BTN vs BB) | ⑧–⑩ (3-bet pot) |
|---|---|---|---|
| Preflop | **SB opens 3bb → BB calls** | BTN opens 2.5bb → BB calls | BB 3-bets to 11bb → BTN calls |
| OOP (acts first) | **SB — the opener** | BB — the caller | BB — the three-bettor |
| IP | BB — the caller | BTN — the opener | BTN — the caller |
| Pot | **6bb** | 5.5bb | 22.5bb |
| Effective stack | **97bb** | 97.5bb | 89bb |
| SPR | **16.2** | 17.7 | 4.0 |
| Bet sizes | About a third of the pot, **one size only** | About a third and three quarters (⑦ has one) | About a third and two thirds |
| Rake | Not modeled | Not modeled | Not modeled |
| Checked | 2026-08-08 (study spot result) | 2026-08-08 | 2026-08-08 |

The 6bb pot is ==the SB's 3 plus the BB's 3==. Both blinds are already in the hand, so there is no dead blind on the side. The effective stack is ==100 − 3 = 97bb==.

The display is in **big blinds** — bets read as "Bet 2bb (33% pot)", with the amount and the pot fraction together, and EV reads as "EV (bb)".

## How often does the small blind actually bet?

**67.4% bet, 32.6% check.** Of 538 combos, 362.1 go into the bet.

| The small blind's first action | Frequency | Combos |
|---|---|---|
| Bet 2bb (33% pot) | **67.4%** | 362.1 |
| Check | 32.6% | 175.9 |

Lined up against the rest of the series, the gap is obvious.

| Spot | Who is out of position | OOP bet frequency |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3.0–3.2% |
| **7♦6♦5♣ blind vs blind (⑫)** | **SB opener** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ connected (④) | BB caller | 23.7% |
| **K♥T♦6♠ blind vs blind (⑪)** | **SB opener** | **67.4%** |
| **A♠A♥6♦ blind vs blind (⑬)** | **SB opener** | **80.1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB three-bettor | 98–100% |

**Do not read this as "the seat is all that matters."** The same small-blind-opener seat produces 9.6% at ⑫, 67.4% here and 80.1% at ⑬ — a **spread of 70.5 points**. And ⑫'s 9.6% is *lower* than the callers at ⑤ (11.2%) and ④ (23.7%). The picture of a cliff between callers and aggressors only appears if you delete those two rows. What is certain is that **the three-bet pots (98–100%) sit apart**; the rest of the spread is set by **the seat and the board together**.

## Why does the out-of-position player lead here?

**Because this is the seat where the preflop aggressor also acts first on the flop.** ⚠ That is a *necessary* condition, not a sufficient one — the same structure produces **9.6%** [at ⑫](/en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp") and **80.1%** at ⑬. The seat opens the door; the board decides how far you walk through it.

In an ordinary hand these two come apart. When the button opens and the big blind calls, **the aggressor is the button but the first to act is the big blind.** That is what builds the check-then-c-bet structure, and it is what ① through ⑦ all looked like.

Blind versus blind, the two collapse into one. The small blind raised, and the small blind is first on the flop. **The range edge and the action order land on the same player.**

| | Preflop aggressor | First to act on the flop | OOP bet |
|---|---|---|---|
| BTN vs BB (①–⑦) | BTN | **BB** | split → 0.1–23.7% |
| SB vs BB (⑪ K-T-6) | **SB** | **SB** | together → **67.4%** |
| SB vs BB (⑫ 7-6-5) | **SB** | **SB** | together, and yet → **9.6%** |

⚠ **Do not delete the third row.** "Together" **opens the door without deciding how far you go** — [⑫](/en/blog/blind-battle-connected-board) has a seat structure identical to this one, letter for letter, and bets 9.6%. Without the overlap you rarely lead at all (the first row); with it, you still need **the board to fit your range** before you actually bet.

Equity puts a number on that edge. **SB 55.3% against BB 44.7%.** In ① through ⑦ the out-of-position player sat at 45.1%–48.5%, always short of half — the opposite direction.

:::pull[A check is not something you do because you lack position. It is something you do because your range is weak on this board.]:::

Lacking position is the same for the big blind in ①–⑦ and the small blind here. What splits them is **the relationship between range and board** — ⚠ and you cannot reduce that to "range" alone. On [the 7-6-5 board](/en/blog/blind-battle-connected-board) the range is *literally identical* and the check runs to 90.4%.

## Why 67% here when a three-bet pot is 100%?

**Because the big blind's defending range is wide.** That is where this spot parts from the 100% bet in a three-bet pot.

The two ranges here are almost the same size: **538 combos for the SB, 525 for the BB.** That many hands came along instead of folding. The small blind only raised to 3bb, so the big blind — already in for 1bb — had to add just 2bb, and the price was good enough to defend wide.

Against a wide range you **cannot bet everything on the chance they fold.** So 32.6% stays back as a check.

The checking hands have jobs of their own. **Hands too weak to bet** and **hands that check to induce a bet** both live there. If the opponent reads that check as weakness and fires, a [check-raise](/en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") is waiting.

:::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 67.4% itself can move. Read it as "small and wide is the answer *under these conditions*."]:::

## How do the two ranges differ?

**The strong classes sit with the small blind; the unmade hands sit with the big blind.**

![Range composition infographic comparing the small blind and big blind hand classes on a K-T-6 board](/images/gto-sb-king-mid-ranges-en.webp "K-T-6 blind vs blind · class-by-class composition — the big blind holds about 10 points more unmade hands")

| Class | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Set/trips | **1.7%** | 0.6% |
| Two pair | 2.4% | **2.5%** |
| Overpair (AA) | **1.1%** | 0.0% |
| Top pair (K) | **15.6%** | 10.9% |
| Second pair (T) | 11.7% | **13.7%** |
| Weak pair | 6.1% | **8.0%** |
| Underpair | **10.0%** | 8.0% |
| Ace-high | **26.8%** | 22.1% |
| No made hand | 24.5% | **34.3%** |

Two cells decide it. **Top pair runs 15.6% to 10.9% in the small blind's favor, and unmade hands run 24.5% to 34.3% — nearly 10 points more for the big blind.**

⚠ Do not read "unmade" as "has nothing," though. The solver counts draws on a separate axis — **the four rows below are mutually exclusive and each column sums to 100%.**

| Draw | SB (OOP) | BB (IP) |
|---|---|---|
| Open-ended straight draw | 3.0% | 2.3% |
| Gutshot | **16.4%** | **16.0%** |
| Backdoor flush draw | 17.8% | **21.1%** |
| No draw | **62.8%** | 60.6% |

**There is no flush-draw row at all** — the board is a rainbow, so neither player can hold four to a flush on this flop. What they have instead is a thick backdoor slice, and a backdoor needs runner-runner, so it completes rarely.

The 3.0% open-ender works out to ==0.030 × 538 = about 16 combos==, and on this board exactly one hand makes an open-ender: **Q-J** (K-Q-J-T, needing an ace or a nine — **eight outs**). Sixteen is precisely the number of Q-J combos. The gutshot row is thicker because A-Q, A-J, Q-9, J-9, 9-8 and 8-7 all land in it.

Still, when a third of the opponent's range has not even paired and your own top end is heavier, betting small and wide is the standard.

Sets point the same way. Three pocket pairs make a set on this board — K-K, T-T and 6-6 — and **the small blind holds all three, nine combos (1.7%), while the big blind is left with 6-6 alone, three combos (0.6%).** The big blind three-bets K-K and T-T against a small-blind open rather than calling. Overpairs belong to the small blind for the same reason: A-A, six combos.

## Why is equity realization 103.1% without position?

**Because the range edge *barely* outweighs the positional one.** Put this spot's numbers on the whole series and the answer shows.

| Item | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 55.3% | 44.7% |
| EV (bb) | 3.42 | 2.58 |
| **EQR (equity realization)** | **103.1%** | 96.1% |

The pot is 6bb, so the small blind's share is ==6 × 55.3% = 3.32bb== while the actual EV is 3.42bb. That is ==3.42 ÷ 3.32 ≈ 103.1%==.

Pick seven spots from the series and rank them by EQR:

| Spot | Who is out of position | OOP equity | OOP EQR |
|---|---|---|---|
| A♥7♦2♣ dry (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ low (⑦) | caller | 48.3% | 84.3% |
| 9♥8♥7♣ connected (④) | caller | 48.5% | 93.2% |
| **K♥T♦6♠ blind vs blind (⑪)** | **opener** | **55.3%** | **103.1%** |
| 8♦5♣2♠ 3-bet pot (⑩) | three-bettor | 58.6% | 106.9% |
| A♦K♠2♥ 3-bet pot (⑧) | three-bettor | 68.9% | 109.6% |
| Q♥T♥7♠ 3-bet pot (⑨) | three-bettor | 58.3% | 117.8% |

**Every row above 100% belongs to someone who is not the caller.** ⚠ Do not read it backwards — **"not the caller" does not imply "above 100%."** [The 7-6-5 board](/en/blog/blind-battle-connected-board), missing from this table, is the same small-blind opener at **85.3%**, sitting among the callers. And this spot is the closest to the line of any of them: 103.1% clears it barely.

⚠ **Nor does a higher EQR mean a bigger edge.** Read the ranking as it stands — the biggest range edge in the table, ⑧ at **68.9%** equity, lands on **109.6%**, *below* ⑨'s **117.8%** at ten points less equity. EQR is ==EV ÷ (equity × pot)==, so **equity is the denominator**: the lower it is, the larger the ratio for the same EV. It is true that one open-raise of edge stops at 103.1%; the reason is not "it could have reached 117.8%."

The big blind's 96.1% is the other face of the same story. **Position, and still short of its share.** Why position usually pays, and when it is not enough, is in [why position matters](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## What changes at the table?

- **Blind versus blind, do not default to "no position, so check."** If you opened from the small blind, the **preflop** range edge is yours, and the solver bets 67.4% on this board. **But you still read the board** — a king with a broadway kicker suits the opener, and on boards that fit the caller the check comes back even from this seat. The [7♦6♦5♣ connected board](/en/blog/blind-battle-connected-board) is exactly that: the same small blind bets only 9.6%.
- **The size is a third of the pot.** With the big blind defending 525 combos, small and wide is right. ⚠ Do not turn that into "betting big is worse" — **this study spot only had the 33% size in the tree.** With no larger size solved, "what if I had bet big" is a question this calculation cannot answer. The A-A-6 spot later in the series does have 75% open alongside it.
- **★At SPR 16.2, decide in advance what a raise means.** Betting 67.4% of your range means facing raises often, and with **sixteen pots** left behind you this is not a stack-off spot for top pair. That is the reverse of a three-bet pot at SPR 4.0, where "raise" meant "the stack is going in." Here calling and seeing a turn covers far more of your range, and outside nine set combos and **two pair (K-T, K-6, T-6)** there is little reason to commit — 🪶 note that **A-A is *below* two pair here** (an overpair pinned under the king; the class table reads set 1.7% · two pair 2.4% · overpair 1.1%). ⚠ The node after a raise is not in this solve, so this is judgment drawn from the SPR, not a solver number.
- **Defending the big blind, remember what three-betting K-K and T-T costs you.** The result is exactly the structure on this board: the big blind's only set is 6-6. The calling range thins out by that much.
- **Do not read the 32.6% of checks as weakness.** Check-raising hands are mixed in. The general standards in [c-bet strategy](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") are worth double-checking in this seat.

:::readnext[Keep reading]
/en/blog/3bet-pot-low-board | Three Combos Hit This Flop — and It Still Bets 97.8% | /images/gto-3bp-low-oop-en.webp
/en/blog/blind-battle-connected-board | Same Seat, Same Stack — and the Bet Falls from 67% to 9.6% | /images/gto-sb-connected-oop-en.webp
:::

## Check it yourself

Every figure here comes up if you open the [GTO solver](/en/solver) and hit **Study Spots → "King-High with a Ten" → [⚡ View results]**. To play the same spot as a problem instead, open the [GTO Trainer](/en/solver) from the sidebar — it deals you a random hand, and once you pick an action it shows the mixed frequency and the **EV loss (bb)** of your choice. Your history stays in your own browser.

Look at the player labels across the top first: **"OOP (SB (Opener))"**. Once you see that it differs from the earlier spots' "OOP (BB (Caller))", what this article means by "the role changed" lands immediately. Free, no install, no account.

**Q. Should the small blind always c-bet blind versus blind?**

A. Not always. On this board the solver bets 67.4% and leaves 32.6% as a check. But that is a different world from an ordinary single-raised pot, where the out-of-position player bets 0.1%–23.7%. **When the role changes, the default changes.** Bear in mind that K-T-6 is a board that suits the opener — just as one board type split 0.1% from 23.7% in the earlier spots, the small blind's betting frequency drops on boards that fit the caller.

**Q. Is being out of position always bad in poker?**

A. Bad, but not decisive. In this spot the small blind takes 103.1% of its equity share with no position, while the big blind, holding position, collects only 96.1%. A big enough range edge covers a positional one. Run it the other way — a weak range realizes poorly even in position.

**Q. Why bet as small as a third of the pot?**

A. Because the opponent's defending range is wide. The two ranges are almost the same size, 538 combos to 525. Against someone you cannot expect to fold, pressuring wide with a small size earns more. Bear in mind that this study spot had only the 33% size as a candidate.

**Q. Why is 6-6 the big blind's only set on this board?**

A. Because K-K and T-T get three-bet against a small-blind open rather than called. So the big blind's calling range keeps only 6-6, three combos (0.6%), while the small blind holds K-K, T-T and 6-6 for nine (1.7%). A-A is absent from the big blind for the same reason.
`.trim(),
};

export default POST;
