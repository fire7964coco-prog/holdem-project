import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑤ 영어판 — Q♠9♠2♠ 모노톤 보드 (2026-08-20, T24 ②)
 *
 * ★★계산 부분은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 *   🟢 **수치를 다시 «검사»하지 않았다** — §4-B가 2026-08-20 전수 재확인으로 드리프트 0이 확인됐다.
 *      정본에서 가져오고, 사람 시간은 D유형(전략 논거)·F유형(포커 사실)에 썼다.
 *
 * ▶ 조준 (뱅크 §3-⑤ + 2026-08-20 자동완성)
 *   `monotone flop`(10·LowDA 30) · `what is a monotone board in poker`(DA30) ·
 *   `monotone flop strategy` · `how to play monotone flop` · `how likely is it to flop a flush`(WS3 2)
 *   자동완성 실측: `monotone flop poker` · `monotone flop meaning` · `monotone flop odds` ·
 *   `monotone board poker meaning` · `odds of flopping a flush` · `how rare is it to flop a flush`
 * 🔴 **「board」가 아니라 「flop」이 본선이다**(뱅크 §4-1 — board 시드 27개 vs flop 시드 116개).
 * 🔴 형제 편과 겹치지 않는다: ①c벳 빈도·드라이 / ②always c-bet·체크백 / ③너트 우위·다이나믹 /
 *    ④동크벳·when not to c-bet / **⑤ 모노톤·플러시**.
 * 🔴 `holdem-flush-vs-straight`(족보 서열)·`holdem-drawing-odds`(드로우 확률)의 자리는 침범하지 않는다 —
 *    「플랍에 플러시가 뜰 확률」은 FAQ 한 문항 + 링크로만 넘긴다.
 *
 * ▶ 수치 출처: §4-B / §4-B-2 정본 + KO ⑤편(핸드별 표는 KO가 **가상 스크롤을 끝까지 내려** 검증했다).
 *   BB: Check 88.8%(415.7) · Bet 1.8bb 8.0%(37.4) · Bet 4.1bb 3.2%(14.9) · All 468.0 ·
 *       EQ 47.7% · EV 2.37 · EQR 90.4%
 *   BTN: All 474.0 · EQ 52.3% · EV 3.13 · EQR 108.8%
 *   등급(2026-08-20 라이브 재확인) — BB: Flush 7.1 · Trips 1.3 · Two Pair 2.6 · Top Pair 10.9 ·
 *       Second 14.1 · Weak 3.2 · Underpair 9.0 · Ace High 25.6 · King High 10.3 · No Made Hand 16.0
 *       BTN: Flush 5.7 · Trips 1.9 · Two Pair 1.9 · **Overpair 2.5** · Top Pair 12.0 · Second 13.3 ·
 *       Weak 2.5 · Underpair 10.1 · Ace High 28.5 · King High 8.9 · No Made Hand 12.7
 *   ⚠ 「플러시 드로우」는 **파생값**이다 — 화면의 Flush Draw + Combo Draw(스페이드 1장이 양쪽에 잡힌다).
 *     BB 20.5+5.1 = **25.6** · BTN 24.1+5.1 = **29.2**. 화면과 대조할 사람을 위해 본문에도 각주를 달았다.
 *
 * §13 손 검산 (전부 통과):
 *   · EV 합 2.37 + 3.13 = **5.50 = 팟** · 에퀴티 47.7 + 52.3 = 100
 *   · EQR 역산 2.37÷(5.5×0.477) = 90.3%(표시 90.4) · 3.13÷(5.5×0.523) = 108.8% ✓
 *   · 액션 합 88.8 + 8.0 + 3.2 = 100.0 · 콤보 합 415.7 + 37.4 + 14.9 = **468.0** ✓
 *   · 완성 플러시 7.1% × 468 = **33.2콤보** ✓ (너트 8 + 비너트 25)
 *   · **너트 플러시가 왜 8콤보인가** — 보드가 Q♠9♠2♠라 A♠Q♠·A♠9♠·A♠2♠는 **애초에 불가능**하고
 *     (그 스페이드가 보드에 깔려 있다), 남는 A♠K♠·A♠J♠·A♠T♠·A♠8♠~A♠3♠ 9개 중
 *     **A♠K♠는 BB가 프리플랍에 3벳**해서 빠진다 → **8콤보** ✓
 *   · A♠J♠ EQR 12.36÷(5.5×0.977) = **230.0%**(표시 229.9) ✓
 *   · 큰 벳이 리드에서 차지하는 몫 3.2÷11.2 = **28.6%** ≈ ④편 6.9÷23.7 = **29.1%** — 거의 같다 ✓
 *   · EQR 격차 108.8 − 90.4 = **18.4%p**(④편은 13.2%p로 더 작다) ✓
 *   · 탑 페어를 이미 이기는 BTN 레인지 = 5.7 + 1.9 + 1.9 + 2.5 = **12.0%** ✓
 *   · 등급 합 BB 100.1 · BTN 100.0 · 드로우 합 99.9 / 100.1(반올림) ✓
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "monotone-board-strategy",
  title: "The Nut Flush That Checks Seven Times Out of Ten",
  seoTitle: "The Nut Flush Checks 70% of the Time — Monotone Flop",
  // 154자 (디코딩 기준 · EN 하드리밋 160)
  desc: "On a monotone flop the big bet nearly disappears — 3.2%. Even the nut flush checks 69.9% on average. Here is why size collapses when three suits match.",
  tldr: "On Q♠9♠2♠, where all three flop cards share a suit, the big blind checks 88.8%, bets small 8.0% and bets big just 3.2%. The large size almost vanishes because the nuts are fixed: a made flush gets called by small bets anyway, and anything without a flush only gets called by flushes. Even the nut flush checks 69.9% on average — and non-nut flushes check more, at 81.4%.",
  category: "strategy",
  date: "2026-08-20",
  updated: "2026-08-21",
  readTime: "10 min",
  emoji: "♠️",
  image: "/images/gto-srp-monotone-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a monotone spade flop, the big blind's grid mostly green for check with a few small bets mixed in",
  keepImagesInBody: true,
  tags: [
    "monotone flop",
    "monotone board poker",
    "how to play monotone flop",
    "nut flush",
    "bet sizing",
    "gto solver",
    "reverse implied odds",
  ],
  content: `
The flop is **Q♠ 9♠ 2♠** — three cards, one suit. You look down at A♠J♠. That is the **nut flush**, already made, on the flop.

So how much do you bet? The instinct is to build the pot. The solver checks this hand **83.4% of the time.**

A monotone flop is the texture that confuses people most, because made hands and air both behave differently than usual. Every figure below came from HoldemMaster's [free GTO solver](/en/solver).

![HoldemMaster GTO solver results for Q-9-2 all spades — the big blind's range mostly green for check, with only a sliver of large bets](/images/gto-srp-monotone-oop-en.webp "Q♠9♠2♠ · the big blind's flop strategy — 88.8% check, and the large bet is only 3.2%")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | Q♠ 9♠ 2♠ (monotone — three of the same suit)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | Large bet 3.2% — the sizing collapses
:::

> **Quick answer**
> Bet small or check, almost never big. On Q♠9♠2♠ the big blind checks **88.8%**, bets a third of the pot **8.0%**, and bets three-quarters just **3.2%**. The nuts are locked to one hand type, so a made flush is already getting called by a small bet, and anything without a flush only gets called by a flush. That squeezes the large size out of the strategy for both players.

## What is a monotone board in poker?

**A flop where all three cards share the same suit** — Q♠ 9♠ 2♠ here, so any two spades in a player's hand is already a made flush. It is the rarest of the common textures and the one that changes hand values the most, because a single suited card can be worth more than a pair.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | Q♠ 9♠ 2♠, monotone (three spades) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-20, study spot output |

## How does the big blind play a monotone flop?

**Check 88.8%, lead 11.2%.** That is less leading than the [9-8-7 connected board](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") at 23.7%, but far more than the dry flops, where it ran 1.9% on A-7-2 and 0.2% on K-8-3.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **88.8%** | 415.7 |
| Bet 1.8bb (33% pot) | 8.0% | 37.4 |
| Bet 4.1bb (75% pot) | **3.2%** | 14.9 |

The interesting part is not the split inside the lead — it is that **the whole attack shrank.** The large bet's share of the leading range is 29%, which is almost exactly what it was on 9-8-7 (6.9 of 23.7). What changed is the total: leading fell from 23.7% to 11.2%, and the large bet from 6.9% to 3.2%, both roughly halved.

So neither side is served by the large size, and only one of them is served by the small one — which is why the whole strategy collapses toward "small, or check." This is not "the big bet got removed": it is **the big blind betting less overall** — and the reason shows up most clearly in how made flushes behave.

## Why does the big bet disappear on a monotone flop?

**Because the nuts are fixed.** Q, 9 and 2 are not connected, so no straight flush is possible on this flop. The best hand is locked: **whoever holds the A♠**. One card decides the top of both ranges.

Once that is true, large bets stop paying anyone.

:::compare
If you have a flush | If you don't have a flush
A big bet folds out everything without a flush | A big bet only gets called by flushes
A small bet keeps one pair in | A small bet is cheap, but one pair does not fold to it
:::

**Both sides prefer small.** So the strategy collapses toward "small or check" for everyone. This is the clearest board in the series for the principle that sizing is decided by **what your opponent can call with**, not by how strong you are.

## Why does the nut flush check?

**Because almost nothing can call.** Scroll the solver's per-hand table to the bottom and pull all eight combos of the nut flush — every A♠ hand the big blind can actually hold:

| Hand | Equity | Check | Bet 1.8bb | Bet 4.1bb | EQR |
|---|---|---|---|---|---|
| A♠J♠ | 97.7% | **83.4%** | 14.3% | 2.2% | 229.9% |
| A♠T♠ | 97.7% | **84.2%** | 14.5% | 1.2% | 232.3% |
| A♠8♠ | 97.7% | **79.1%** | 17.4% | 3.5% | 232.6% |
| A♠7♠ | 97.6% | **56.0%** | 20.6% | 23.4% | 231.3% |
| A♠6♠ | 97.6% | **60.2%** | 22.0% | 17.9% | 232.6% |
| A♠5♠ | 97.6% | **64.1%** | 20.2% | 15.7% | 233.6% |
| A♠4♠ | 97.6% | **52.7%** | 24.1% | 23.2% | 237.3% |
| A♠3♠ | 97.6% | **79.7%** | 0.0% | 20.3% | 240.6% |

**The average is 69.9% checking.** A hand with 97.6% equity — one that essentially cannot lose — checks seven times out of ten.

Why only eight combos? Three of the ace-suited hands are impossible, because **Q♠, 9♠ and 2♠ are already on the board.** Of the nine that remain, A♠K♠ three-bets preflop and never arrives, leaving eight.

The reason for checking is not what you win now but what you win in total. Bet big and most of the one pairs and high cards fold; a hand with one spade may come along, but against a made nut flush it is drawing at nothing. Either way the money you were going to collect later stops. Check, and your opponent bets their own pair or bluffs into you — money you can keep collecting on the turn and river.

The numbers say it plainly: **EQR 230%**, more than twice the pot share. The pot is 5.5bb and A♠J♠ has an expected value of ==12.36bb==. What is still to come is worth more than what is already there.

Blockers show up in the same table. **A♠J♠ and A♠T♠ check over 80%, while A♠7♠ through A♠4♠ drop to 52–64% and bet far more.** Holding J♠ or T♠ blocks the **jack-high and ten-high flushes** — not the second-best flush, which is king-high, since the Q♠ is on the board. And those are precisely the hands that would have *called* your bet. Removing them from the deck thins the calling range, so the bet is worth less and the hand drifts to a check. Low kickers block none of them, leaving somebody to pay you off, so betting directly is the better way to get paid. (A♠3♠ jumping back to 79.7% is a reminder that this is a tendency, not a rule.)

## Are non-nut flushes played differently?

**They check even more.** There are 33 made-flush combos on this board; the 25 without the A♠ average **81.4%** checking, against the nut's 69.9%.

| Hand | Equity | Check | EQR |
|---|---|---|---|
| A♠J♠ (nuts) | 97.7% | 83.4% | 229.9% |
| K♠J♠ | 94.0% | **91.8%** | 197.0% |
| K♠8♠ | 93.6% | **76.3%** | 193.0% |
| K♠6♠ | 93.6% | **61.0%** | 193.7% |

Equity barely moves — 94% against 97.7% — but EQR falls to 197%. **You win less when you win.** There is one reason: the only hand a king-high flush loses to is the ace-high flush, and that is exactly the hand that puts big money in. Winning small and losing big is **reverse implied odds**, the mirror image of [implied odds](/en/blog/holdem-implied-odds).

## Who holds more flushes here?

**The big blind — 7.1% against 5.7%.** But flush *draws* run the other way.

![Range composition infographic comparing the big blind and button hand categories on a monotone spade board](/images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · category split — made flushes favor the big blind, flush draws and ace-high favor the button")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Made flush | **7.1%** | 5.7% |
| Flush draw (one spade, incl. combo draws) | 25.6% | **29.2%** |
| Top pair (Q) | 10.9% | **12.0%** |
| Overpair (KK, AA) | 0.0% | **2.5%** |
| Ace high | 25.6% | **28.5%** |

⚠ The flush-draw row is **derived**: the solver lists "Flush Draw" and "Combo Draw" separately, and a hand with one spade can appear in either. So it is ==20.5 + 5.1 = 25.6%== for the big blind and ==24.1 + 5.1 = 29.2%== for the button. Worth knowing if you are checking these against the screen.

The split comes from preflop. **The big blind defends cheap suited junk** — hands like J5s, 85s and 74s get called from the big blind, and the spade ones turn into flushes. The button never opens them.

What the button has instead is far more **offsuit ace-x and king-x with one spade.** Not made, but drawing — and this is where the A♠ becomes special. It can make the nut flush, and it also tells you your opponent **cannot** have one.

## How does one spade change a hand's value?

**The same top pair is a different hand depending on whether it holds a spade.**

Take Q♥J♦ — top pair, no spade. Already behind against **12.0%** of the button's range (flushes 5.7 + overpairs 2.5, plus sets and two pair), and behind on the kicker to **AQ and KQ** on top of that: the Q♠ is on the board and the Q♥ is in your hand, so two queens remain, making 8 combos of AQ and 8 of KQ. Separately, another **29.2%** can pass it with one card. That is not a hand for three streets of value; it is a hand that catches a bluff once.

Now take 9♥8♠ — middle pair with a spade. It can win now or improve later, which makes it flexible enough to bet or call.

**One suit rewrites the whole ranking on this board.**

## Why is EQR 90 against 109 when equity is 48 against 52?

**Because a board where pots stay small also shrinks the value of position.**

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 47.7% | 52.3% |
| EV (bb) | 2.37 | 3.13 |
| **Equity realization (EQR)** | **90.4%** | **108.8%** |

The big blind's equity share is ==5.5 × 47.7% = 2.62bb== against an actual 2.37bb, which is the 90.4%.

The 18.4 point gap is the second-smallest **of the six single-raised pots**, behind 9-8-7 at 13.2. ⚠ Across all thirteen spots it is only fifth — the blind-versus-blind K-T-6 (7.0) and A-A-6 (9.3) and the 8-5-2 three-bet pot (16.6) are all tighter, and they are different seats. When large bets disappear, so do the difficult decisions — and **position is worth exactly as much as the decisions still left to make.**

## What changes at the table?

- **On a monotone board the big bet is rare to begin with.** In theory the big blind's large size falls to **3.2%** here. ⚠ Do not run that straight into "so fold one pair to a big bet." The 3.2% is how often the big blind **leads**, and when you are the one *facing* a bet, the button's sizing frequencies are not in this solve at all. Look at the button's own column too: made flushes are 5.7% while one-spade draws are **29.2%**, more than five times as many — reading a big bet as "flush" folds you out to semi-bluffs. The first thing to check when a big bet lands is whether **your own hand holds the A♠.**
- **Don't drive a small flush for three big streets.** The solver checks non-nut flushes 81.4% of the time (nuts: 69.9%). Take value with small bets, and treat a large raise as the A♠ until proven otherwise.
- **Holding the A♠ promotes a hand to bluff candidate.** A bluff made while knowing your opponent cannot hold the nut flush is a different bet from one made blind.
- **Against an opponent who never folds a pair, stop trapping.** The 69.9% check assumes the other player bets when checked to; if they only call, bet your flushes and take the money.

:::readnext[Keep reading]
/en/blog/donk-bet-strategy | The Flop Where Donk Betting Is Right — 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
/en/blog/broadway-board-strategy | Two-Thirds of the Range Has a Draw — and It Still Checks | /images/gto-srp-broadway-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Monotone Board → [⚡ View results]**.

For this spot the per-hand table at the bottom is the whole lesson — **scroll it to the end.** You can read why A♠J♠ and A♠4♠ differ by 30 points of checking frequency, and how the same queen splits into two different hands depending on whether it comes with a spade.

Then open the **GTO Trainer** in the sidebar and let it deal you a flush on this board: picking an action and seeing the EV cost is faster than being convinced by a table. Free, nothing to install, no account.

## FAQ

**Q. What is a monotone flop?**

A. A flop where all three cards are the same suit, like Q♠ 9♠ 2♠. Any two cards of that suit already make a flush, and a single card of it is a draw. It is the texture where hand values shift the most, because suits temporarily matter more than ranks.

**Q. Should you always bet a made flush on a monotone board?**

A. No. In this solve the eight nut-flush combos check between 52.7% and 84.2%, averaging 69.9%, and non-nut flushes check 81.4%. A large bet folds out every one pair and high card, so checking to induce a bet and collecting across the turn and river wins more in total.

**Q. Why does the big blind have more flushes than the button?**

A. Because the big blind is already partly invested and defends cheap suited hands like J5s, 85s and 74s. Those turn into flushes on a monotone board. The button never opens them, which is why its made flushes sit at 5.7% against the big blind's 7.1%.

**Q. How likely is it to flop a flush?**

A. Rare enough that the monotone board is unusual in itself — you need two suited cards and all three flop cards to cooperate. The exact percentages for flopping and completing flushes are worked through in [drawing odds](/en/blog/holdem-drawing-odds); what matters here is what to do once the board arrives that way.

**Q. Why does the A♠ matter so much if I'm not even holding a flush?**

A. It is a blocker: while you hold it, your opponent cannot have the nut flush. That makes them unable to defend the top of their range, so hands with the A♠ are the first bluffs a solver picks. The reverse also applies — when you hold a small flush, a large raise deserves more respect than usual.
`.trim(),
};

export default POST;
