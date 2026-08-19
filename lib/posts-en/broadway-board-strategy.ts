import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ③ 영어판 — Q♠J♦T♠ 브로드웨이 연결 투톤 (2026-08-19, T24 ②)
 *
 * ★★계산 부분은 한국어판과 통일한다 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 *   고정 = 계산 조건·모든 수치·전략 논거·구조 / 언어별 = seoTitle·desc·H2·FAQ·내부링크.
 *
 * ▶ 조준 (뱅크 §3-③ + 2026-08-19 자동완성) — **이 시리즈 최고 winnable 자리다**
 *   `what is the difference between nut advantage and range advantage in poker`(**WS3 3**·LowDA 19) ·
 *   `range advantage vs nut advantage`(+chart·texas holdem 변형 · WS3 2) ·
 *   자동완성 실측: `difference between range advantage and nut advantage` · `nut advantage poker meaning` ·
 *   `dynamic board poker` · `dynamic board meaning poker` · `two tone board poker`
 * 🔴 ①편이 `range advantage`를 **기초 개념**으로 가져갔다. 이 편은 **«둘의 차이»**를 잡는다 —
 *    같은 낱말이지만 쿼리가 다르고, ①과 ③이 한 쌍으로 서로를 인용해 자연스럽게 묶인다.
 *
 * 🔴 수치 출처: 2026-08-19 `solver.holdemmaster.com/?lang=en` 「Study Spots → Connected Broadway,
 *   Two-Tone → ⚡ View results」에서 OOP·IP 양쪽 전환해 직접 읽었다. 전부 KO판과 일치.
 *   BB: Check 99.9%(452.5) · Bet 1.8bb 0.1%(0.3) · Bet 4.1bb 0.0%(0.2) · All 453.0 · EQ 46.7% ·
 *       EV 2.00 · EQR 77.9% / Straight 7.1 · Trips 0.7 · Two Pair 6.0 · Top Pair 9.3 · Second 11.3 ·
 *       Weak 11.9 · Underpair 10.6 · Ace High 28.3 · King High 6.2 · No Made Hand 8.8
 *       Draws: Combo 5.3 · Flush 2.4 · OESD 28.7 · Gutshot 32.0 · Backdoor 6.8 · No Draw 24.7
 *   BTN: All 458.0 · EQ 53.3% · EV 3.50 · EQR 119.4% / Straight 10.5 · Trips 2.0 · Two Pair 5.9 ·
 *       **Overpair 2.6** · Top Pair 9.8 · Second 9.2 · Weak 11.1 · Underpair 10.5 · Ace High 27.9 ·
 *       King High 3.5 · No Made Hand 7.0 / Draws: 4.1 · 2.0 · 27.7 · 34.9 · 5.7 · 25.5
 *
 * §13 손 검산 (전부 통과):
 *   · 스트레이트를 만드는 핸드는 **AK·K9·98 셋뿐**(A-K-Q-J-T / K-Q-J-T-9 / Q-J-T-9-8).
 *     보드에 Q·J·T가 한 장씩이라 각 16콤보 → BB는 AK가 없어 **32**(32÷453 = 7.06% ≈ 7.1) ·
 *     BTN은 **48**(48÷458 = 10.48% ≈ 10.5). **차이가 정확히 AK 16콤보다.**
 *   · 셋 = QQ·JJ·TT 각 3콤보(보드에 한 장씩) → BB는 TT뿐 3(0.66% ≈ 0.7) · BTN 9(1.97% ≈ 2.0)
 *   · 오버페어 = AA·KK 각 6콤보 = 12 → 12÷458 = 2.62% ≈ 2.6 · BB는 0
 *   · 투 페어 = QJ·QT·JT 각 9콤보 = 27 → 27÷453 = 5.96% ≈ 6.0 · 27÷458 = 5.90% ≈ 5.9
 *   · 탑 페어를 이미 이기는 BTN 레인지 = 10.5+2.0+5.9+2.6 = **21.0%** ✓ (K83은 1.9+0.4+1.3 = 3.6%)
 *   · 진짜 드로우 = BB 5.3+2.4+28.7+32.0 = **68.4** · BTN 4.1+2.0+27.7+34.9 = **68.7** ✓
 *     백도어 포함 = 75.2 / 74.4 ✓
 *   · EV 합 2.00 + 3.50 = **5.50 = 팟** ✓ · 에퀴티 46.7 + 53.3 = 100 ✓
 *   · EQR 역산 2.00÷(5.5×0.467) = 77.9% / 3.50÷(5.5×0.533) = 119.4% ✓
 *   · EQR 격차 29.1 / 36.0 / 41.5%p ✓ · 스트레이트 차이 10.5−7.1 = 3.4%p ✓
 *   · 등급 합 BB 100.2 · BTN 100.0 · 드로우 합 99.9 / 99.9 (반올림) ✓
 *
 * 🖼 영어판 이미지 신규 제작 — 히어로 = 영어 솔버 캡처(1200×803 · 58KB) ·
 *   인포그래픽 = HTML+Playwright(1200×675 · 30KB · 11개 등급 전부 + 너트 우위 4줄 강조).
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "broadway-board-strategy",
  title: "Two-Thirds of the Range Has a Draw — and It Still Checks",
  seoTitle: "68% Have a Draw, 99.9% Check — Q-J-T Nut Advantage",
  // 152자 (디코딩 기준 · EN 하드리밋 160)
  desc: "On Q-J-T two-tone, 68% of the big blind's range holds a draw and it still checks 99.9%. Nut advantage — not range advantage — is what decides this flop.",
  tldr: "On Q♠J♦T♠ after a button open and a big blind call, the big blind checks 99.9% — even though 68.4% of its range holds a draw. The cause is nut advantage: straights 10.5% against 7.1%, sets 2.0% against 0.7%, overpairs 2.6% against 0%. Equity realization splits 77.9% against 119.4%, the widest gap of the three dry-to-wet flops so far.",
  category: "strategy",
  date: "2026-08-19",
  updated: "2026-08-19",
  readTime: "10 min",
  emoji: "🎴",
  image: "/images/gto-srp-broadway-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a connected broadway two-tone flop, the big blind's grid green for check with the draw panel on the right",
  keepImagesInBody: true,
  tags: [
    "nut advantage",
    "range advantage vs nut advantage",
    "dynamic board poker",
    "two tone board",
    "gto solver",
    "broadway flop",
    "equity realization",
  ],
  content: `
The flop comes **Q♠ J♦ T♠**. You hold KQ in the big blind — top pair plus an open-ended straight draw. Checking this has to be wrong, surely.

The last two spots — [ace-high](/en/blog/a-high-board-cbet) and [king-high](/en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp") — were quiet boards where almost nothing was drawing. This is the opposite: **68.4% of the big blind's range holds a draw here.** And the solver still checks ==99.9%==. Leading got *rarer*, not more common.

"Lots of draws" and "you may bet first" are different claims. Every figure below came from HoldemMaster's [free GTO solver](/en/solver), read off the study-spot output on 2026-08-19.

![HoldemMaster GTO solver results for Q-J-T two-tone — the big blind's range shown green for check, with the draw breakdown panel on the right](/images/gto-srp-broadway-oop-en.webp "Q♠J♦T♠ · the big blind's flop strategy — 99.9% check, with the draw panel worth reading")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | Q♠ J♦ T♠ (two-tone — two spades)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB checks 99.9% — draws everywhere, still no lead
:::

> **Quick answer**
> The big blind checks **99.9%** on Q♠J♦T♠, with 68.4% of its range holding a draw. The reason is **nut advantage**: straights 10.5% against 7.1%, sets 2.0% against 0.7%, overpairs 2.6% against 0%. The top of the range sits entirely with the button, so betting first folds out the hands you beat and gets called by the hands you don't.

## What conditions produced these numbers?

Same structure as the rest of the series: the button opens to 2.5bb, the big blind calls, everyone else folds. Two players, a 5.5bb pot, 97.5bb behind, standard 100bb online ranges, and two bet sizes available at roughly a third and three-quarters of the pot. The only thing that changed is the flop.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | Q♠ J♦ T♠, two-tone (two spades) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-19, study spot output |

## Why check 99.9% when the board is this wet?

**Because the *quality* of the made hands decides the action, not the *quantity* of draws.**

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **99.9%** | 452.5 |
| Bet 1.8bb (33% pot) | 0.1% | 0.3 |
| Bet 4.1bb (75% pot) | 0.0% | 0.2 |

The dry king-high flop was 99.8%. **Move to a board where two-thirds of the range is drawing and the check gets more complete, not less.** That inversion is why this spot is in the study set.

## What is nut advantage on this flop?

**It is who holds the top of the range — and here it is not close.** On Q-J-T the top three categories are straights, sets and overpairs, and the button leads all three.

| Top category | BB (OOP) | BTN (IP) | What causes the gap |
|---|---|---|---|
| Straight | 7.1% | **10.5%** | The big blind has **no AK** |
| Trips (set) | 0.7% | **2.0%** | The big blind has **no QQ, no JJ** |
| Overpair | 0.0% | **2.6%** | The big blind has **no AA, no KK** |
| Two pair | 6.0% | 5.9% | The one row that ties |

Every gap was created preflop. The big blind three-bets AA, KK, QQ, JJ and AK, so none of them arrive on the flop; the button opens all of them and brings them along.

The combinations match exactly. Only three hands make a straight here: ==AK (A-K-Q-J-T)==, ==K9 (K-Q-J-T-9)== and ==98 (Q-J-T-9-8)==. With one queen, one jack and one ten on the board, each is 16 combos. The big blind holds K9 and 98 for **32 combos**; the button adds AK for **48**. The solver's 7.1% and 10.5% are 32.2 and 48.1 combos — the same numbers.

**The entire difference is one hand: AK.** A single preflop three-betting decision moves that much of the flop's nut share.

## Range advantage vs nut advantage — what's the difference?

**Range advantage is who is stronger on average; nut advantage is who holds more of the very best hands.** They usually move together, and this flop is the case where they don't.

| | Range advantage | Nut advantage |
|---|---|---|
| Question it answers | Whose range has more equity overall? | Who holds the top hands? |
| On Q-J-T | Nearly even — 46.7% against 53.3% | Lopsided — straights, sets and overpairs all favor the button |
| What it drives | Whether you bet at all | **How big you bet, and who can raise** |

Average equity says this flop is close to a coin flip. The top of the range says one player can never get raised off a big bet and the other can never make one. When the two disagree, **nut advantage decides the sizing** — and, for the player without it, decides that betting first is not an option.

## How much of each range is drawing?

**Counting real draws only: 68.4% for the big blind, 68.7% for the button.** Add backdoor flush draws and it reaches 75.2% and 74.4% — three-quarters of both ranges.

![Range composition infographic comparing the big blind and button hand categories on a connected broadway two-tone board](/images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · category split — the top four rows are where the flop is decided")

| Draw | BB (OOP) | BTN (IP) |
|---|---|---|
| Combo draw (straight + flush) | 5.3% | 4.1% |
| Flush draw | 2.4% | 2.0% |
| Open-ended straight draw | 28.7% | 27.7% |
| Gutshot | 32.0% | 34.9% |
| Backdoor flush | 6.8% | 5.7% |
| No draw | **24.7%** | **25.5%** |

**The draws split almost evenly.** On the king-high flop, 72.2% of the big blind's range had no draw at all; here it is a quarter. (This is a separate axis from the category table — each adds to 100% on its own, and a completed straight counts as "no draw" in this panel.)

So the fight on this board is not about who has more draws. Even draws cancel out, and what does not cancel is the nut advantage. If counting outs is the part you want to firm up, start with [drawing odds](/en/blog/holdem-drawing-odds).

## Why is top pair dangerous here?

**Because 21.0% of the button's range already beats it.** That is straights 10.5% plus sets 2.0% plus two pair 5.9% plus overpairs 2.6%.

On the dry king-high flop, the same calculation came to **3.6%** — sets 1.9%, two pair 0.4%, overpairs 1.3%.

| Share of the button's range that already beats top pair | |
|---|---|
| Dry king-high flop (K-8-3) | 3.6% |
| **Broadway flop (Q-J-T)** | **21.0%** |

**Same "top pair", roughly six times the risk.** On top of that, 68.7% of the opponent's range keeps drawing at you through the turn and river. Pushing one pair for three streets on Q-J-T means the big action that comes back is almost never one you beat. This is a pot to control, not to build.

## Why is EQR 78 against 119 when equity is 47 against 53?

**Because the more decisions a board forces, the more the last-to-act seat is worth.**

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.7% | 53.3% |
| EV (bb) | 2.00 | 3.50 |
| **Equity realization (EQR)** | **77.9%** | **119.4%** |

The method is worked through in [the king-high spot](/en/blog/k-high-board-cbet). Here: the big blind's equity share is ==5.5 × 46.7% = 2.57bb== against an actual 2.00bb, which is the 77.9%; the button turns a 2.93bb share into 3.50bb.

Line the three flops up and the trend is clean.

| Flop | BB EQR | BTN EQR | Gap |
|---|---|---|---|
| A-7-2 (dry) | 84.0% | 113.1% | 29.1 points |
| K-8-3 (dry) | 80.7% | 116.7% | 36.0 points |
| **Q-J-T (connected, two-tone)** | **77.9%** | **119.4%** | **41.5 points** |

**The busier the board, the more it costs to act first.** Every street brings a real decision, and one player makes theirs blind while the other makes theirs with the answer already on the table — the argument laid out in [playing position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## How should the button bet a dynamic board like this?

**Less often, and bigger when it does.** With the nut advantage, a large bet is hard to raise: the straights, sets and overpairs are all on one side, so the other player has little to push back with.

That is the opposite of the dry-board recipe. There, small and frequent worked because the goal was folding out air. Here, 68.7% of the opponent's range is drawing, so **folds are expensive to buy** — but not every hand can afford the price, so the frequency drops. Size and frequency move in opposite directions on this texture. The board-by-board version is in [continuation bet strategy](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[⚠ Everything above is solver output; this section is a reading of it. The study spot pre-solves only the big blind's first action, so the button's sizing split is not on this screen. Open "Solve this spot yourself" and run the tree if you want the actual numbers.]:::

## What changes at the table?

- **Holding a draw is not a reason to lead from the big blind.** Both players have roughly the same draws here, so a draw is not an edge — leading with one runs into the made hands that only your opponent has.
- **Do not play top pair for three streets of value on Q-J-T.** 21.0% of their range is already ahead and most of the rest is drawing at you. Calling down beats betting into it.
- **Remember what is inside that check.** The big blind's 99.9% contains 32 combos of straights (K9, 98) and 27 combos of two pair. This is the board where a large continuation bet runs into a check-raise.
- **Against opponents who never fold draws, size up rather than bet more often.** Buying folds is what fails here; charging draws is what works.

:::readnext[Keep reading]
/en/blog/k-high-board-cbet | The King-High Flop Where the Caller Checks 99.8% | /images/gto-srp-dry-king-oop-en.webp
/en/blog/a-high-board-cbet | Top Pair, Still Checking: A-7-2 | /images/gto-srp-dry-ace-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Connected Broadway, Two-Tone → [⚡ View results]**, and the screen above appears with no waiting.

On this spot, read the **Draws panel on the right** — open-enders and gutshots together clear 60%, the first time in this series. Then switch the player selector to **IP (BTN)** and look at Straight 10.5%: that single row is where the whole article comes from.

To drill it instead of reading it, open the **GTO Trainer** in the sidebar: it deals hands from the real range weights and grades your action in big blinds lost. Free, nothing to install, no account.

## FAQ

**Q. Which hands make a straight on Q-J-T?**

A. Three: AK for A-K-Q-J-T, K9 for K-Q-J-T-9, and 98 for Q-J-T-9-8. With one queen, one jack and one ten already on the board, each is 16 combos, so 48 in total. The big blind three-bets AK preflop, which leaves it 32.

**Q. Isn't a wet board the place to semi-bluff lead?**

A. Only when your draws outnumber theirs. Here open-enders are 28.7% against 27.7% — effectively identical — while completed straights are 7.1% against 10.5% in the button's favor. A lead needs the top of the range on your side, not the average, and this flop is exactly the reverse. There is one board in the study set where the condition genuinely is met — the middle connected 9-8-7 — and it is the only spot in the series where the big blind leads at a meaningful frequency.

**Q. What is the difference between range advantage and nut advantage?**

A. Range advantage is about the average — whose range has more equity across all hands. Nut advantage is about the extreme — who holds the straights, sets and overpairs. On Q-J-T equity is nearly even at 46.7% against 53.3%, yet all three top categories favor the button. When they split like that, nut advantage is what sets the bet size.

**Q. Can I use these numbers at any stake?**

A. As a baseline when the conditions match: heads-up, 100bb, standard open and call ranges, no rake. This board in particular gets more lopsided with depth — at 200bb the 3.4 point straight gap matters far more than it does here, because there is more money left to lose to the hand you cannot have.
`.trim(),
};

export default POST;
