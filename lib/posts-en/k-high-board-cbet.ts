import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ② 영어판 — K♠8♦3♣ 드라이 K하이 보드 (2026-08-19, T24 ②)
 *
 * ★★**계산 부분은 한국어판과 통일한다** (사장님 판정 2026-08-19 · `docs/gto-solver-series-spec.md` §4-A-2).
 *   고정 = 계산 조건·모든 수치·**전략 논거**·구조 / 언어별 = seoTitle·desc·H2·FAQ·내부링크.
 *   검증은 `npm run check:gto` (ko ↔ en 수치 집합 대조).
 *
 * ▶ 조준 키워드 (뱅크 `docs/keyword-bank/en-gto-series.md` §3-② + 2026-08-19 자동완성)
 *   `should you always c bet in poker`(자동완성 실측 · 뱅크 WS3 2·LowDA 22) ·
 *   `check back poker`·`check back range poker`·`check back meaning poker`(자동완성 4종) ·
 *   `delayed c bet poker`(WS10 4·DA19) · `what are c bets in poker`(DA19)
 * 🔴 ①편과 겹치지 않게 잡았다 — ①이 `good c bet percentage`·`dry board`·`range advantage`를 가져갔다.
 *    자기 시리즈끼리 같은 쿼리를 물면 서로 깎는다(뱅크 §3 머리말).
 * 🔴 c벳 «머리말»(`c-bet poker` 320)은 `holdem-continuation-bet` 소유다. 침범하지 않는다.
 *
 * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry King-High Board
 *   → ⚡ View results」를 열어 **OOP·IP 양쪽 전환해 화면에서 직접 읽었다.** 전부 KO판과 일치했다.
 *   BB: Check 99.8%(473.0) · Bet 1.8bb 0.1%(0.6) · Bet 4.1bb 0.1%(0.4) · All 474.0 · EQ 46.3% ·
 *       EV 2.06 · EQR 80.7% · Trips 1.3 · Two Pair 0.8 · Top Pair 12.7 · Second 10.8 · Weak 3.2 ·
 *       Underpair 8.9 · Ace High 27.0 · No Made Hand 35.4 · Backdoor 27.8 · No Draw 72.2
 *   BTN: All 480.0 · EQ 53.7% · EV 3.44 · EQR 116.7% · Trips 1.9 · Two Pair 0.4 · **Overpair 1.3** ·
 *       Top Pair 14.4 · Second 10.0 · Weak 2.5 · Underpair 11.3 · Ace High 30.0 · No Made 28.3 ·
 *       Backdoor 22.3 · No Draw 77.7
 *   ⚠ BB에 Overpair 행이 없다 — 0%라 앱이 표시하지 않는다(KO 표의 0.0%와 같은 뜻).
 *
 * §13 손 검산 (전부 통과):
 *   · BB 셋 = 88·33 각 3콤보 = 6 → 6÷474 = 1.27% ≈ 1.3 ✓
 *   · BTN 셋 = KK·88·33 각 3콤보 = 9 → 9÷480 = 1.88% ≈ 1.9 ✓ (KK가 BTN에만 있다)
 *   · K83에서 K보다 높은 포켓페어는 **AA뿐** → BB 오버페어 0%, BTN 1.3% ✓
 *   · EV 합 2.06 + 3.44 = **5.50 = 팟** ✓ · 에퀴티 46.3 + 53.7 = 100 ✓
 *   · EQR 역산 2.06÷(5.5×0.463) = 80.9% / 3.44÷(5.5×0.537) = 116.5% (화면 반올림 0.3%p 이내) ✓
 *   · 등급 합 BB 100.1 · BTN 100.1(반올림) ✓
 *   · 백도어 플러시 완성 = 10/47 × 9/46 = 0.0416 = **4.2%** ✓ (같은 무늬 남은 10장 → 9장)
 *   · 팟 5.5 = 2.5+2.5+0.5 · 스택 100−2.5 = 97.5 ✓
 *
 * 🖼 이미지는 영어판을 새로 만들었다(한국어 두 장이 전부 한글) —
 *   히어로 = 영어 솔버 화면 캡처(1200×803 · 58.5KB) · 인포그래픽 = HTML+Playwright(1200×675 · 25.8KB).
 *
 * ★§8 「경험담 필수」 예외 — 우리 솔버로 계산한 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "k-high-board-cbet",
  title: "The King-High Flop Where the Caller Checks 99.8%",
  seoTitle: "The Flop Where the Big Blind Checks 99.8% — K-8-3 C-Bet",
  // 155자 (디코딩 기준 · EN 하드리밋 160). `'` 는 HTML에서 6자로 잡히니 산출물 수치를 그대로 믿지 말 것.
  desc: "On K-8-3 the big blind checks 99.8% — a purer range check than ace-high. One missing hand explains it, and equity realization does the rest.",
  tldr: "On K♠8♦3♣ after a button open and a big blind call, the big blind checks 99.8% of its range — an even purer range check than the 98.2% on an ace-high flop. Two things cause it: the big blind holds no overpair here, because AA three-bets preflop, and equity realization splits 80.7% against 116.7%.",
  category: "strategy",
  date: "2026-08-19",
  updated: "2026-08-19",
  readTime: "9 min",
  emoji: "👑",
  image: "/images/gto-srp-dry-king-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a dry king-high flop, the big blind's 13x13 grid almost entirely green for check",
  keepImagesInBody: true,
  tags: [
    "should you always c bet",
    "check back range",
    "delayed c bet",
    "king high flop",
    "gto solver",
    "range check",
    "equity realization",
  ],
  content: `
The flop comes **K♠ 8♦ 3♣**, rainbow. You hold K9 in the big blind — top pair. You already learned to check the ace-high version. Surely a king is different?

It is. **It checks harder.** The big blind checks ==99.8%== here, more completely than the 98.2% on [the ace-high flop](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). Both bet sizes together take 0.2% — one combo out of 474.

Every figure below came from HoldemMaster's [free GTO solver](/en/solver), read off the study-spot output on 2026-08-19.

![HoldemMaster GTO solver results for K-8-3 rainbow — the big blind's range shown almost entirely green for check, with hand categories on the right](/images/gto-srp-dry-king-oop-en.webp "K♠8♦3♣ · the big blind's flop strategy — green is check, 99.8% of the range")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | K♠ 8♦ 3♣ (rainbow)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB checks 99.8% — purer than the ace-high flop
:::

> **Quick answer**
> Check everything, and expect to defend wide afterwards. One combo out of 474 leads, so treat leading as unavailable here. Two things make this check purer than the ace-high version: the big blind has **no overpair** on this board — AA three-bets preflop — and equity realization splits **80.7% against 116.7%** even though equity is nearly even.

## What conditions produced these numbers?

The button opens to 2.5bb, the big blind calls, everyone else folds — two players, a 5.5bb pot, 97.5bb behind. Ranges are the standard 100bb online approximations, the flop is K♠ 8♦ 3♣ with three different suits, and the solver has two bet sizes available, roughly a third and three-quarters of the pot. Rake is not modeled.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | K♠ 8♦ 3♣, rainbow (all three suits different) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-19, study spot output |

The pot is ==2.5 open + 2.5 call + 0.5 dead small blind == 5.5bb==, and the effective stack is 100bb minus the 2.5bb open.

## How often does the big blind check on K-8-3?

**99.8%.** The remaining 0.2% is split between the two bet sizes.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **99.8%** | 473.0 |
| Bet 1.8bb (33% pot) | 0.1% | 0.6 |
| Bet 4.1bb (75% pot) | 0.1% | 0.4 |

One combo out of 474 — closer to a rounding artifact than a strategy. **On a dry king-high flop the big blind has no lead at all**, and you lose nothing in practice by treating it that way.

## Why is this check even purer than on an ace-high flop?

**Because the big blind holds no overpair here, and the ace-high flop has no overpair to hold.** On K-8-3 the only pocket pair above the board is AA — and the big blind three-bets AA preflop, so it never arrives. Overpairs: **0.0% for the big blind, 1.3% for the button.**

On A-7-2 that column does not exist for anybody: nothing is above an ace. So both ranges are missing the same thing, and their ceilings look alike. On a king-high board, the ceiling belongs to one player.

Sets say the same thing. The pocket pairs that flop a set here are KK, 88 and 33, and **the big blind has only 88 and 33.**

| Pocket pair that flops a set | BB | BTN |
|---|---|---|
| KK | ❌ (three-bets preflop) | ✅ |
| 88 · 33 | ✅ | ✅ |
| **Share of range** | **1.3%** | **1.9%** |

The hand count matches the solver exactly. The big blind has 88 and 33 at three combos each — six of 474, or 1.27%. The button adds KK for nine of 480, 1.88%.

## How do the two ranges differ?

**The strong categories sit with the button, the weak ones with the big blind.** Side by side the gap is obvious.

![Range composition infographic comparing the big blind and button hand categories on a dry king-high board, green and gold bars side by side](/images/gto-srp-dry-king-ranges-en.webp "K♠8♦3♣ · category split — the top of the range belongs to the button")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Trips — here always a set | 1.3% | **1.9%** |
| Two pair | **0.8%** | 0.4% |
| Overpair | 0.0% | **1.3%** |
| Top pair (K) | 12.7% | **14.4%** |
| Second pair (8) | **10.8%** | 10.0% |
| Weak pair | **3.2%** | 2.5% |
| Underpair | 8.9% | **11.3%** |
| Ace high | 27.0% | **30.0%** |
| No made hand | **35.4%** | 28.3% |

Read it top to bottom. **Every category at the top of the range — sets, overpairs, top pair — belongs to the button, and the weakest one, no made hand, is 7.1 points heavier for the big blind.** The categories where the big blind leads are all middling: two pair, second pair, weak pair. Plenty of hands, none of them able to carry a pot. Betting first with a range shaped like that means your weak half is paying off their strong half.

## Why is almost a third of both ranges ace high?

**It is a king-high board — the aces have nowhere to land.** Ace high is 27.0% of the big blind's range and 30.0% of the button's, close to a third each. On A-7-2 that group does not exist, because every ace is instantly top pair.

That group is what makes this flop interesting. AQ and AJ have no pair, yet they beat every hand in the opponent's "no made hand" column, so they have showdown value. On the button, they are not automatic c-bets: part of the time they check back and take the free showdown.

The same AQ in the big blind is worth less, because getting to showdown without position is harder. **Identical cards, different value by seat** — which is exactly what the next section measures.

## Why is EQR 81 against 117 when equity is 46 against 54?

**Equity is how often you win the pot; equity realization is how much of that you actually collect.** They are not the same number.

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 46.3% | 53.7% |
| EV (bb) | 2.06 | 3.44 |
| **Equity realization (EQR)** | **80.7%** | **116.7%** |

The arithmetic: the pot is 5.5bb, so the big blind's equity share is ==5.5 × 46.3% = 2.55bb==, while its actual expected value is 2.06bb — that ratio is the 80.7%. The button's share is 2.95bb against an EV of 3.44bb, which is why it lands above 100%.

:::note[The EQR figures in this series are the ones shown on the solver screen. Recomputing them from the rounded equity and EV on the same screen can land a tenth of a point off — that is rounding, not a contradiction.]:::

The ace-high flop was 84.0% against 113.1%. **Same dry texture, wider gap on the king board.** The quieter the board — no draws, nothing forcing action — the longer the player who acts last keeps their information edge. Why the seat itself is worth so much is covered in [playing position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## Are there really no draws here?

**No completed draw types at all.** K, 8 and 3 are three different suits and too far apart to connect, so there is no flush draw and no open-ended straight draw for either player.

| Draw | BB | BTN |
|---|---|---|
| Backdoor flush (needs two more of a suit) | 27.8% | 22.3% |
| No draw | **72.2%** | **77.7%** |

What is left is the backdoor flush. It needs the turn *and* the river to bring the same suit, so it completes only ==10/47 × 9/46 = about 4.2%== of the time. It still matters: when you have to pick bluffs, **a hand with a backdoor beats a hand with nothing**, because if the turn brings that suit you now hold a real draw and a reason to fire again — the setup for a delayed c-bet on the turn.

## Should you always c-bet a king-high flop?

**Close to it at a small size, but "always" is the wrong word for one group of hands.** The big blind has 35.4% with no made hand and 72.2% with no draw, so a third of the range folds immediately and most of the rest cannot improve. Betting about a third of the pot with most of your range is the standard.

The common advice is that ace-high hands with showdown value should check back. On this board that is **half right**. At a small size, AQ and AJ mix in bets often enough — they fold out hands like QJ, JT and T9 that hold two live cards but no pair, and an ace on a later street gives them the best pair on the board. But they also cost little by checking, so this is where much of the **check-back range** comes from. Neither "always bet" nor "always check back" is correct; the frequency is the answer.

:::note[⚠ This section is a reading of the range composition, not a solved number. The study spot pre-solves only the flop's first action — the big blind's — so the button's exact c-bet frequency is not on this screen. Open "Solve this spot yourself" and run the tree to get it.]:::

## What changes at the table?

- **In the big blind on a dry king-high flop, leading is not a candidate.** Even with a king. The range-check logic from the ace-high flop applies more strongly here, not less.
- **Checking is not check-folding.** Facing the small c-bet, the big blind continues wide — every king, the eights, the underpairs, ace-high with a backdoor. Top pair is a call, and the check-raises come mostly from 88, 33 and the two pairs.
- **On the button, do not give AQ and AJ one fixed treatment.** Betting small and checking back are both defensible; adjust the mix based on whether this opponent actually folds overcards.
- **Do not read the check as weakness — against a balanced opponent.** That checking range still holds the sets (88, 33) and 12.7% top pair. At low stakes the reverse is often true, because many players simply lead their strong hands, so keep value betting and treat the check-raise as an occasional cost.

:::readnext[Keep reading]
/en/blog/a-high-board-cbet | Top Pair, Still Checking: A-7-2 | /images/gto-srp-dry-ace-oop-en.webp
/en/blog/holdem-continuation-bet | Why 'C-Bet Every Flop' Bleeds Chips | /images/holdem-continuation-bet-hero.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Dry King-High Board → [⚡ View results]**, and this screen appears with no waiting. Then switch the player selector to **IP (BTN)** — the range-composition table above is read straight off that panel, and comparing the two sides is the fastest way to see why one of them cannot bet.

To drill the spot instead of reading it, open the **GTO Trainer** in the sidebar: it deals you a hand from the real range weights, you pick an action, and it grades the choice in big blinds lost. Free, nothing to install, no account.

## FAQ

**Q. Why doesn't the big blind ever bet on K-8-3?**

A. Because every hand at the top of this board sits with the other player. The overpair (AA) and the best set (KK) are both missing from the calling range, while no made hand piles up at 35.4%. Leading with a range shaped like that builds a pot for someone else to win. The solver checks 99.8%.

**Q. Which is worse for the big blind, an ace-high flop or a king-high flop?**

A. King-high. Equity is actually higher — 46.3% against 45.1% on A-7-2 — but equity realization is lower, 80.7% against 84.0%. The big blind wins the pot more often here and collects less of it.

**Q. What is a check-back range?**

A. The hands the player in position chooses not to bet, keeping them to see a free showdown or to protect the checking range from being all weakness. On this flop it is built largely from ace-high hands like AQ and AJ, which beat the opponent's air but gain little by betting.

**Q. How much is a backdoor flush draw worth?**

A. About 4.2% to complete from the flop, so it is not a reason to call on its own. Its value is in bluff selection: a hand that picks up a real draw on the turn gives you a reason to keep betting, which is where delayed c-bets come from.

**Q. Can I use these numbers at any stake?**

A. As a baseline when the conditions match: heads-up, 100bb, standard open and call ranges, no rake. The one to watch on this board is the opener's position — if the raise came from under the gun rather than the button, that range holds even more kings and aces, and the big blind's situation is worse than what is shown here.
`.trim(),
};

export default POST;
