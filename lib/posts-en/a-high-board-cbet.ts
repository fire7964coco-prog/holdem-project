import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ① 영어판 — A♥7♦2♣ 드라이 A하이 보드 (2026-08-19 신설, T24 ②)
 *
 * ★한국어 `lib/posts/a-high-board-cbet.ts`의 «번역»이 아니다.
 *   §13 대상(카드·빈도·확률·EV·EQR)만 불변이고 훅·H2·FAQ는 영어권 실검색으로 다시 짰다.
 *
 * ▶ 조준 키워드 (실측 근거 = `docs/keyword-bank/en-gto-series.md` §3-①)
 *   `what's a good c bet percentage`(WS3 2·LowDA 28) · `when to c bet poker`(10·WS3 2·DA22) ·
 *   `what is a dry board in poker`(WS3 2·DA19) · `what does range advantage mean in poker`(DA28) ·
 *   `poker range advantage`(10·DA28) · 자동완성 `dry board poker meaning`·`wet vs dry board poker`·
 *   `range advantage meaning poker`·`good c bet percentage`
 * 🔴 **c벳 «머리말»은 가져오지 않는다** — `c-bet poker` 320 · `what is a c-bet in poker`는
 *   기존 `holdem-continuation-bet`의 자리다(뱅크 §5). 이 글은 **이 스팟 고유 롱테일**만 먹는다.
 *
 * ▶ SERP 차별점 (2026-08-19 WebSearch): 「good c bet percentage」 상위글은 전부
 *   **프리플랍 레이저 기준**으로 답한다. 이 글은 **콜러 쪽 좌석**의 숫자를 준다 — 같은 질문에
 *   아무도 안 준 답이고, 우리 솔버로 재현 가능하다.
 *
 * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry Ace-High
 *   Board → ⚡ View results」를 열어 **화면에서 직접 읽었다**(OOP·IP 양쪽 모두 전환해 확인).
 *   BB: Check 98.2%(455.5 combos) · Bet 1.8bb 1.0%(4.5) · Bet 4.1bb 0.9%(3.9) ·
 *       All 464.0 combos · EQ 45.1% · EV 2.09 · EQR 84.0%
 *   BTN: All 463.0 combos · EQ 54.9% · EV 3.41 · EQR 113.1%
 *   BTN Hands에 **Weak Pair 행이 없다** — 0%라 앱이 표시하지 않는다(KO 표의 0.0%와 일치).
 *
 * 🔴 **벳하는 핸드를 「suited aces에 집중」이라고 쓸 뻔했다 (2026-08-19 검수에서 자기 검출).**
 *   상세 표가 **가상 스크롤**이라 innerText로는 **31행(벳 1.12콤보)** 만 잡힌다 — 8.4콤보 전체를
 *   본 적이 없는데 상단 몇 행으로 «집중»을 주장했다. 지금 본문은 **실측한 4개 핸드의 빈도만** 말한다.
 *   ★전수 집계가 필요하면 innerText가 아니라 표를 정렬하거나 CSV 내보내기로 받아야 한다.
 *
 * §13 손 검산 (전부 통과):
 *   · A7은 A72에서 A-A-7-7-2 = **투 페어**(탑 페어 아님)
 *   · BB 셋 = 77·22 각 3콤보 = 6콤보 → 6÷464 = 1.29% ≈ 1.3% ✓
 *   · BTN 셋 = AA·77·22 각 3콤보 = 9콤보 → 9÷463 = 1.94% ≈ 1.9% ✓
 *   · 투 페어 = A7·A2 각 9콤보 = 18콤보 → 18÷464 = 3.88% ≈ 3.9% ✓
 *   · EV 합 2.09 + 3.41 = 5.50 = 팟 5.5bb ✓ · 에퀴티 45.1 + 54.9 = 100 ✓
 *   · EQR 역산 2.09÷(0.451×5.5) = 84.3% / 3.41÷(0.549×5.5) = 112.9% (화면 반올림과 0.3%p 이내)
 *   · 팟 5.5 = 2.5 + 2.5 + 0.5(죽은 SB) · 스택 100 − 2.5 = 97.5 ✓
 *
 * 🖼 **이미지는 영어판을 새로 만들었다** — 한국어 두 장이 전부 한글이라 재사용 불가였다.
 *   히어로 = 영어 솔버 화면 직접 캡처(1200×803 · 57KB) ·
 *   인포그래픽 = HTML+Playwright 스크린샷(1200×675 · 26KB, §9-1 「글자 인포그래픽은 이미지 AI 금지」).
 *
 * ★이 시리즈는 §8 「경험담 필수」의 예외다 (사장님 결정 2026-08-08).
 *   그 규칙은 «AI가 지어낸 일반론»을 막으려는 것인데 이 글은 성격이 정반대다 —
 *   우리 솔버로 계산한 1차 데이터이고 **재현 가능성이 출처를 대신한다.**
 */
/**
 * 🔴 2026-08-21 키워드 정정 — 되돌리지 마라 (EN ⑪ 착수 시 키워드 팩이 잡았다):
 *   `poker range advantage` → **`range advantage poker`**.
 *   **뜻은 같은데 어순 하나로 US 볼륨이 10 대 30, 세 배다**(rakko 실측 2026-08-21).
 *   게다가 30 쪽만 상승세다 — 12개월 **+54.8%** · 6개월 +41.2% · 3개월 +33.3%
 *   (10 쪽은 12개월 내내 월 10으로 평평하다).
 *   🪶 「동크벳/돈크벳 320 대 0」과 같은 유형이다 — **동의어의 볼륨이 벌어지면 표기를 실측으로 고른다.**
 *   ⚠ 이 태그는 ①의 것이다. A 하이 보드가 레인지 우위의 교과서 자리이고
 *      ③(`range advantage vs nut advantage`)·④(`range advantage`)와 층이 다르다.
 *      ⑪(블라인드전)이 「레인지 우위가 포지션 열세를 넘는다」를 다루지만 **가져가지 않았다** —
 *      ⑪의 자리는 `blind vs blind poker`다.
 */
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Top Pair, Still Checking: A-7-2 C-Bet Frequencies",
  // ⚠ 초판 "Top Pair and the Solver Says Check"는 명사구 + 절을 and로 이어 반쪽 문장으로 읽혔다
  //   (교열 렌즈 지적, 확신도 중간~높음). 훅은 살리고 절+절로 고쳤다 — 55자.
  seoTitle: "You Flop Top Pair, the Solver Checks — Dry Ace C-Bet",
  // 🔴 155자 — EN 하드리밋 160.
  // ⚠ **산출물에서 재면 165자로 보인다.** `'`가 `&#x27;`(6자)로 인코딩되기 때문이다 —
  //   자수는 **디코딩한 문자열**로 세야 한다. 이걸 모르고 초판(실제 158자)을 «초과»로 오판했다.
  //   빌드의 자수 게이트는 `lib/posts-en/`을 검사하지 않으므로 어차피 손으로 세야 한다.
  desc: "You flop top pair on A-7-2 and want to lead. A solver checks 98.2% of the big blind's range — the exact c-bet frequencies, and why equity isn't the reason.",
  // 🔴 tldr·리드 문단·Quick answer가 같은 세 수치를 세 번 반복하던 것을 역할로 갈랐다
  //    (교열 렌즈 #6): tldr = 결론 / 리드 = 훅 / Quick answer = 그래서 무엇을 하나.
  tldr: "On A♥7♦2♣ after a button open and a big blind call, the big blind checks 98.2% of its range — top pair, two pair and sets included. Equity is nearly even at 45.1% against 54.9%; what splits the two seats is equity realization, 84.0% out of position against 113.1% in position.",
  category: "strategy",
  date: "2026-08-19",
  updated: "2026-08-19",
  readTime: "9 min",
  emoji: "🅰️",
  image: "/images/gto-srp-dry-ace-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a dry ace-high flop, the big blind's 13x13 grid almost entirely green for check",
  keepImagesInBody: true,
  tags: [
    "c bet percentage",
    "when to c bet",
    "dry board poker",
    "range advantage",
    "range advantage poker",
    "gto solver",
    "equity realization",
  ],
  content: `
The flop comes **A♥ 7♦ 2♣**, rainbow. You are in the big blind with A9 — top pair. Leading out feels obvious. It isn't.

Every figure below came from HoldemMaster's [free GTO solver](/en/solver), read off the study-spot output on 2026-08-19, and you can pull the same screen up with a single click.


:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB checks 98.2% — the whole range checks
:::

> **Quick answer**
> Check, and plan to keep going. When a range takes one action with everything — strong hands included — that is a **range check**, and it is what the big blind does here. Checking is not giving up on the pot: it keeps the button's bluffs in, and top pair is still a hand you continue with when the c-bet lands.

## What conditions produced these numbers?

The button opens to 2.5bb, the big blind calls, and everyone else folds — so two players see a 5.5bb pot with 97.5bb behind. Both ranges are the standard 100bb online approximations, the flop is A♥ 7♦ 2♣ rainbow, and the solver is given two bet sizes to work with, roughly a third and three-quarters of the pot. Rake is not modeled. Change any of those and the frequencies change with them.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | A♥ 7♦ 2♣, rainbow |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-19, study spot output |

The pot is 5.5bb because the button's 2.5bb open and the big blind's 2.5bb call are joined by the dead small blind of 0.5bb. Everything on screen is in big blinds — bets read as "Bet 1.8bb (33% pot)", expected value as "EV (bb)".

## What's a good c-bet percentage on a dry ace-high board?

It depends entirely on which seat you are in. For the preflop raiser on a board this dry, roughly **70–100% at a small size** heads-up in position — the [continuation bet](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp") guide breaks that down by board type. For the player who called, the answer is **essentially zero**.

Strictly, the caller does not have a c-bet at all — the term means the preflop raiser betting the flop, so the big blind's version is a **lead**. But it is the number people want when they land on this side of the hand, and here it is:

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **98.2%** | 455.5 |
| Bet 1.8bb (33% pot) | 1.0% | 4.5 |
| Bet 4.1bb (75% pot) | 0.9% | 3.9 |

Out of 464 combos, about eight combos bet — 1.9% across both sizes, rounded. In practice you can round it off: **the big blind does not lead this board.**

## Why does the big blind check top pair too?

Because the pot is easier to win by checking than by betting into it. Leading with one pair, out of position, against the player who took the initiative preflop is the expensive way to play a hand you are happy to see showdown with.

Three things are working against a lead. First, **equity realization**: the numbers below show the big blind banking 84.0% of its equity and the button 113.1%. Building a bigger pot out of position makes that gap cost more, not less. Second, the button c-bets this flop at a high frequency — **checking keeps its bluffs in the pot**, while leading lets them fold and take nothing. Third, the big blind's range is capped: with no AA, AK or AQ in it, a lead invites a raise from exactly the hands it cannot continue against.

What a lead does **not** do is fold out better hands. The button's opening range keeps every ace down to A2, plus underpairs and sevens, so plenty of worse hands would call — that is not the problem. The problem is the pot you are building to win it.

It also matters that "an ace" is not one hand type. A9 loses kicker battles to AK, AQ, AJ and AT, while A7 and A2 are not top pair at all — on this board A7 plays as ==A-A-7-7-2==, two pair. A range check hides all of them behind one action, so your opponent cannot sort them.

**And the hands that do bet are not the ones you would guess.** Open the detail table and the strongest aces the big blind is allowed to have take the occasional stab: A♣J♣ bets the small size 14.5% of the time, A♦J♦ 12.2%, A♠J♠ 7.1%, A♠T♠ 4.5%. Small frequencies, but they come from the top of the range rather than from air — which is why the check is not a pure surrender.

## What is a dry board, and why does this one favor the raiser?

A dry board is one with no flush draw and almost no straight draw — three unconnected cards in three different suits, like A♥ 7♦ 2♣. Almost nothing is chasing anything: **71.3% of the big blind's range has no draw**, and most of the rest is a backdoor flush draw. It favors the raiser because the button's opening range keeps AK, AQ and AJ while the big blind's calling range does not — the aces are stacked on one side, and there are no draws to even out later.

![Range composition infographic comparing the big blind and button hand categories on a dry ace-high board, green and gold bars side by side](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more top pair, the big blind more air")

Out of position (OOP) is the big blind, acting first; in position (IP) is the button.

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Trips — here always a set | 1.3% | **1.9%** |
| Two pair | 3.9% | 3.9% |
| Top pair | 20.7% | **25.9%** |
| Second pair | 5.2% | 5.2% |
| Weak pair | 1.3% | 0.0% |
| Underpair | 9.1% | **13.0%** |
| King high | **17.2%** | 16.4% |
| No made hand | **41.4%** | 33.7% |

The gap comes from what each range is allowed to contain. The button opens every ace — A2 through AK. The big blind's calling range **tops out at AJ**: no AA, no AK, no AQ, because those three-bet instead. Same ace on the board, and top pair still lands 5.2 points more often on the button's side, with the strongest aces sitting entirely on one side of the table.

Sets tell the same story by hand count. The pocket pairs that flop a set here are AA, 77 and 22, and **the big blind has only 77 and 22** — three combos each, six of 464, which is the 1.3% on screen. The button keeps all three pairs: nine combos, 1.9%. The arithmetic matches the solver exactly.

## What does range advantage mean if equity is nearly even?

Range advantage means one player's whole range fits the board better than the other's. On A♥ 7♦ 2♣ it barely shows up in raw equity — 45.1% against 54.9%, a 9.8 point gap that no one would call a disaster. It shows up in what each side is able to bank from that equity, and there the two seats are not close.

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45.1% | 54.9% |
| EV (bb) | 2.09 | 3.41 |
| **Equity realization (EQR)** | **84.0%** | **113.1%** |

Equity realization is the share of your equity you actually collect. The big blind's equity is worth ==5.5 × 45.1% = 2.48bb==, but its expected value is 2.09bb — it loses about a sixth of what it "owns". The button's 113.1% means it collects **more than its share**, because it acts last and its range is strong enough to apply pressure. (Screen values are rounded, so recomputing EQR by hand lands within 0.3 points of the displayed figure.)

Position and range advantage compound here: the button gets the bigger slice **and** the better rate of converting it. The general principle is in the [equity guide](/en/blog/holdem-equity), and why the seat itself is worth so much is covered in [playing position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## When should the button c-bet a dry ace-high flop?

Almost always, small — **against opponents who fold.** The big blind has 41.4% no made hand and 71.3% with no draw, so folds come easily and the hands that stay rarely improve. That is the textbook case for the small size, which is why the 33% bet (1.8bb) is the one to reach for here.

Against a table that calls anything, "bet everything small" stops being free: nothing folds, and you are building pots with hands that do not want one. There the adjustment is fewer stabs and more value.

The rule of thumb generalizes with one condition: **the side with the range advantage — and no clear nut advantage — bets small and often.** On boards where one player also owns the nuts, sizing goes up instead. How that changes across board types is in [continuation bet strategy](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[The study spot pre-solves the flop's first action only, so the button's exact c-bet frequency is not one of the numbers on this page. To get it, open "Solve this spot yourself" and run the tree through.]:::

## What changes at the table?

- **Having called a raise heads-up, drop the idea of leading a dry ace-high flop.** Top pair included. Leading builds a pot you then have to play out of position with one pair — which is exactly the 84% against 113% gap above. (Limped pots and blind-versus-blind are a different structure and are not what this spot covers.)
- **Checking is not check-folding.** This is where the number gets misread. Facing the button's small c-bet, the big blind continues very wide — every ace, most sevens, the underpairs, king-high with a backdoor. **A9 is a check-call**, usually through the turn as well. The check-raises come mostly from 77, 22, A7 and A2, plus a few backdoor bluffs.
- **On the button, bet small and wide against opponents who fold.** Against a player who never folds, adjust in two directions: fewer bluffs, because they will not fold no matter what you bet — especially on the turn and river, where second and third barrels are pure loss — and bigger value bets with **top pair or better**. A9 with its weak kicker is not a size-up hand; it is a hand you simply do not fire three times.
- **Against a balanced opponent, a check here is not weakness** — the checking range contains sets (77, 22) and two pair (A7, A2), so pushing too hard runs into a check-raise. At low stakes it is often the reverse: many players simply lead their strong hands, so their check really is weak. Keep value-betting; treat the check-raise as an occasional cost, not a reason to slow down.

:::readnext[Keep reading]
/en/blog/holdem-continuation-bet | Why 'C-Bet Every Flop' Bleeds Chips | /images/holdem-continuation-bet-hero.webp
/en/blog/holdem-position-play | Position Is the Cheapest Edge in Poker | /images/holdem-position-play-hero.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Dry Ace-High Board → [⚡ View results]**, and this exact screen appears with no waiting. Switch the player selector between OOP and IP to compare both ranges, and sort the detail table by any column to find the hands that bet. The study spots pre-solve **the flop's first action only** — to click through turn and river, or to change a range and watch the frequencies move, use **Solve this spot yourself** and run the tree.

To drill the same spot instead of reading it, open the **GTO Trainer** in the sidebar: it deals you a hand from the real range, you pick an action, and it tells you what that choice cost in big blinds. It is free, with nothing to install and no account.

## FAQ

**Q. Is A7 top pair on an A-7-2 board?**

A. No. The board pairs your 7, so A7 makes ==A-A-7-7-2== — two pair. True top pair means an ace with a kicker that misses the board, like A9 or A8. Two pair (A7 and A2) is 18 combos, 3.9% of the big blind's range, and those hands check as well.

**Q. Does 98.2% checking mean I should literally never bet?**

A. As a default, yes on this texture. Against an opponent who almost never c-bets, you can mix in a lead — but **only with value hands**. Top pair and sevens build a pot that player will never build for you, while your air should still check, because a passive opponent hands you free cards and free showdowns that are worth more than the bluff.

**Q. What is the difference between a wet board and a dry board?**

A. A dry board has no flush draw and few straight draws, so the flop is unlikely to change hands on later streets. A wet board — connected, two-tone cards like 9-8-7 with two hearts — hands both players draws. Ranges stay wide and equities keep shifting, so bets get bigger and check-raises get more common.

**Q. Can equity realization go above 100%?**

A. Yes. It is the ratio of what you actually win to your share of the pot by equity, so position and range strength push it past 100%. The button here realizes 113.1%, collecting more than its raw 54.9% equity would suggest.

**Q. Do these numbers hold at any stake?**

A. Use them as a baseline where the conditions match: heads-up, 100bb, standard open and call ranges, no rake modeled. Change stack depth, ranges or sizing and the frequencies move. Against opponents who deviate strongly — never folding, never c-betting — deviate too, because these numbers assume the other player is also playing well.
`.trim(),
};

export default POST;
