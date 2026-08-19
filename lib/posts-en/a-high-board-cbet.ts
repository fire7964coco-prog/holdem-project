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
export const POST: Post = {
  slug: "a-high-board-cbet",
  title: "Top Pair, Still Checking: A-7-2 C-Bet Frequencies",
  seoTitle: "Top Pair and the Solver Says Check — Dry Ace-High C-Bet",
  // 🔴 155자 — EN 하드리밋 160.
  // ⚠ **산출물에서 재면 165자로 보인다.** `'`가 `&#x27;`(6자)로 인코딩되기 때문이다 —
  //   자수는 **디코딩한 문자열**로 세야 한다. 이걸 모르고 초판(실제 158자)을 «초과»로 오판했다.
  //   빌드의 자수 게이트는 `lib/posts-en/`을 검사하지 않으므로 어차피 손으로 세야 한다.
  desc: "You flop top pair on A-7-2 and want to lead. A solver checks 98.2% of the big blind's range — the exact c-bet frequencies, and why equity isn't the reason.",
  tldr: "On A♥7♦2♣ after a button open and a big blind call, the big blind checks 98.2% of its range — top pair, two pair and trips included. The reason isn't equity (45.1% vs 54.9%, a modest gap) but equity realization: 84.0% out of position against 113.1% in position.",
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
    "poker range advantage",
    "gto solver",
    "equity realization",
  ],
  content: `
The flop comes A-7-2, rainbow. You are in the big blind with A9 — top pair. Leading out feels obvious. It isn't.

Run the spot and the solver checks **98.2% of the big blind's entire range** here. Not "checks the weak hands" — checks top pair, two pair, and the sets too. This article shows where that number comes from and why it holds.

Every figure below came out of the [free GTO solver](/en/solver), and you can reproduce all of it in one click from the study spots.

![HoldemMaster GTO solver results screen for A-7-2 rainbow — the big blind's range shown almost entirely green for check, with action frequencies and hand categories](/images/gto-srp-dry-ace-oop-en.webp "A♥7♦2♣ · the big blind's flop strategy — green is check, 98.2% of the range")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | A♥ 7♦ 2♣ (rainbow)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB checks 98.2% — the whole range checks
:::

> **Short answer**
> The big blind checks **98.2%** on A-7-2 rainbow. Betting takes 1.9% across both sizes, which is effectively zero. Hands as strong as top pair check, and when a range takes one action with everything, that is a **range check**. The cause is not raw equity — it is **equity realization**. The same 45% is worth less without position.

## What conditions produced these numbers?

Conditions first, because different inputs give different answers.

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

For the preflop raiser, high. For the **caller, essentially zero** — 1.9%, split across two sizes. Almost every article about c-bet frequency is written from the raiser's seat, so if you are the big blind here, the usual advice does not apply to you. This is the other side of the same flop.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **98.2%** | 455.5 |
| Bet 1.8bb (33% pot) | 1.0% | 4.5 |
| Bet 4.1bb (75% pot) | 0.9% | 3.9 |

Out of 464 combos, roughly eight bet. In practice you can round it off: **the big blind does not lead this board.**

## Why does the big blind check top pair too?

Because betting top pair here only gets action from hands that beat it. That 98.2% includes every ace in the range, on purpose.

Say you lead with A9. What calls or raises? AK, AQ, AJ — **every one of them wins the kicker fight**. What folds? The junk you were already beating. You get paid when you are behind and nothing when you are ahead. That is the whole argument.

It also matters that "an ace" is not one hand type. A9 loses kicker battles, while A7 and A2 are not top pair at all — on this board A7 plays as ==A-A-7-7-2==, two pair. A range check hides all three behind one action, so your opponent cannot sort them.

## What is a dry board, and why does this one favor the raiser?

A dry board is one with no flush draw and almost no straight draw — three unconnected cards in three different suits, like A-7-2 rainbow. Nothing is chasing anything. That matters here because **71.3% of the big blind's range has no draw at all** — those hands can still pair up, but they have nothing pulling them to the river.

![Range composition infographic comparing the big blind and button hand categories on a dry ace-high board, green and gold bars side by side](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more top pair, the big blind more air")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Trips | 1.3% | **1.9%** |
| Two pair | 3.9% | 3.9% |
| Top pair | 20.7% | **25.9%** |
| Underpair | 9.1% | **13.0%** |
| King high | **17.2%** | 16.4% |
| No made hand | **41.4%** | 33.7% |

The button still holds AK, AQ and AJ. The big blind mostly does not — those hands would have three-bet preflop — so its calling range keeps the weak aces and the junk. Same ace on the board, and top pair lands 5.2 points more often on the button's side.

Sets tell the same story by hand count. The pocket pairs that flop a set here are AA, 77 and 22, and **the big blind has only 77 and 22** — three combos each, six of 464, which is the 1.3% on screen. The button keeps all three pairs: nine combos, 1.9%. The arithmetic matches the solver exactly.

## What does range advantage mean if equity is nearly even?

Equity says 45.1% against 54.9% — a 9.8 point gap, not a disaster. Then look at what each side actually banks.

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 45.1% | 54.9% |
| EV (bb) | 2.09 | 3.41 |
| **Equity realization (EQR)** | **84.0%** | **113.1%** |

Equity realization is the share of your equity you actually collect. The big blind's equity is worth ==5.5 × 45.1% = 2.48bb==, but its expected value is 2.09bb — it loses about a sixth of what it "owns". The button's 113.1% means it collects **more than its share**, because it acts last and its range is strong enough to apply pressure. (Screen values are rounded, so recomputing EQR by hand lands within 0.3 points.)

That is what range advantage buys: not a bigger slice of equity, but a better rate of converting it. The general principle is in the [equity guide](/en/blog/holdem-equity), and why the seat itself is worth so much is covered in [playing position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp").

## So how should the button c-bet here?

Small and wide. The big blind has 41.4% no made hand and 71.3% with no draw, so folds come cheap and the hands that stay rarely improve. This is the textbook case for the small size — which is why a 33% option (1.8bb) sits in the tree at all.

The rule of thumb generalizes: **the side with the range advantage bets small and often.** How that changes across board types is in [continuation bet strategy](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

:::note[Study spots pre-solve the flop's first action only. To see the button's exact c-bet frequency, open "Solve this spot yourself" and run the tree through.]:::

## What changes at the table?

- **In the big blind on a dry ace-high flop, drop the idea of leading.** Top pair included. Leading splits your range into "bet = strong, check = weak" and hands your opponent a free read.
- **On the button, this is close to an auto-bet with a small size.** Against a player who never folds, adjust in two directions: fewer bluffs, because raising the size will not make them fold — and bigger value bets, because they will pay.
- **A check here is not weakness.** The big blind's checking range contains sets (77, 22) and two pair (A7, A2). Push too hard against it and you run into a check-raise.

:::readnext[Keep reading]
/en/blog/holdem-continuation-bet | Why 'C-Bet Every Flop' Bleeds Chips | /images/holdem-continuation-bet-hero.webp
/en/blog/holdem-position-play | Position Is the Cheapest Edge in Poker | /images/holdem-position-play-hero.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Dry Ace-High Board → [⚡ View results]**, and this exact screen appears with no waiting. Switch the player selector between OOP and IP to compare both ranges, or click through turn and river cards. Change a range and watch the frequencies move.

To drill the same spot instead of reading it, open the **GTO Trainer** in the sidebar: it deals you a hand from the real range, you pick an action, and it tells you what that choice cost in big blinds. It is free, with nothing to install and no account.

**Q. Is A7 top pair on an A-7-2 board?**

A. No. The board pairs your 7, so A7 makes ==A-A-7-7-2== — two pair. True top pair means an ace with a kicker that misses the board, like A9 or A8. Two pair (A7 and A2) is 18 combos, 3.9% of the big blind's range, and those hands check as well.

**Q. Does 98.2% checking mean I should literally never bet?**

A. As a default, yes on this texture. The betting frequency is 1.9% across both sizes, which is inside the margin where a solver is balancing rather than telling you something. Against an opponent who almost never c-bets, leading becomes reasonable — you are collecting a pot nobody else will bet at.

**Q. What is the difference between a wet board and a dry board?**

A. A dry board has no flush draw and few straight draws, so the flop is unlikely to change hands on later streets. A wet board — connected, two-tone cards like 9-8-7 with two hearts — hands both players draws. Ranges stay wide and equities keep shifting, so bets get bigger and check-raises get more common.

**Q. Can equity realization go above 100%?**

A. Yes. It is the ratio of what you actually win to your share of the pot by equity, so position and range strength push it past 100%. The button here realizes 113.1%, collecting more than its raw 54.9% equity would suggest.

**Q. Do these numbers hold at any stake?**

A. Use them as a baseline where the conditions match: heads-up, 100bb, standard open and call ranges, no rake modeled. Change stack depth, ranges or sizing and the frequencies move. Against opponents who deviate strongly — never folding, never c-betting — deviate too, because these numbers assume the other player is also playing well.
`.trim(),
};

export default POST;
