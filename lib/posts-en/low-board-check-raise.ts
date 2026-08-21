import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑦ 영어판 — 6♠5♥2♦ 로우 레인보우 (2026-08-20, T24 ②)
 *
 * ★★계산은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 *
 * 🔴🔴 **이 편은 두 개의 서로 다른 솔브를 쓴다. 절대 섞지 마라.**
 *   ① **교육 예제(precomputed)** — Study Spots의 [⚡ View results]. §4-B 정본이 이것이다.
 *      루트: Check 96.8%(471.7) · Bet 1.8bb 3.2%(15.3) · All 487.0
 *   ② **자체 재솔브** — 2026-08-20. 「체크레이즈」 데이터는 **①에 존재하지 않는다.**
 *      Study Spots 뷰어는 **플랍 루트 전용**이고 액션 칩이 클릭 불가다(DOM 확인: BUTTON이 아님).
 *      화면 축어: `Flop strategy only. Want to click through turn and river? → Solve this spot yourself`
 *      그래서 같은 트리(flop bet 33 · raise 60 · pot 55 · stack 975)로 직접 돌렸다.
 *      설정: **190 iterations · exploitability 0.16 (0.29%)** · 16-bit integer · 12 threads
 *      (32-bit는 5.80GB로 브라우저 한도 초과)
 *   🔴 **②의 루트 리드 빈도는 2.0%(9.5콤보)로 ①의 3.2%와 다르다.** Hands·Draws·EQ·EV·EQR은 동일.
 *      리드는 EV 차가 0에 가까운 «거의 무차별» 액션이라 솔브마다 흔들린다.
 *      → **본문에서 두 솔브를 별도 절로 분리하고 그 사실을 독자에게 명시했다.**
 *      [[data-hierarchy-mixing-error]] — 문장은 다 참인데 결론이 거짓이 되는 전형이다.
 *
 * ▶ 🔴 **서치가 뱅크 §3-⑦을 다시 뒤집었다** (2026-08-20 라쿠 English/US 실측)
 *   뱅크가 ★를 달았던 **`what is a good check-raise percentage`가 US 볼륨 0**이다.
 *   6개 후보 중 **4개가 데이터 없음**(`poker check raise size chart` · `poker check raise size texas holdem` ·
 *   `why was check-raising banned`도 전부 0). 남은 둘은 `can you check-raise in poker` 10 ·
 *   `check raise bad etiquette` 10뿐이다. ⑥편과 같은 패턴 — **재료가 얇은 게 아니라 축이 틀렸다.**
 *   · 살아 있는 몸통 = **`check raise poker` ≈210** (= `poker check raise` = `check raise in poker`,
 *     셋이 월별까지 동일한 **한 덩어리**다. 더하지 마라)
 *   · 유일한 상승축 = **`when to check raise` 20 (12개월 +56.5% · 6개월 +38.5% · 3개월 +28.6%)**
 *   · 보조 = `what is a check raise in poker` 70 · `wet board poker` 50 ·
 *     **`what is a wet board in poker` 40 (+20.0%)** · `check raise meaning` 30
 *   🔴 **`check raise` 단독 260을 제목에 쓰면 안 된다** — 소총 치크라이저(cheek riser) ·
 *      미 연금 인상(social security check raise 2026) · pytest · 브리즈번/나고야/타이중의
 *      «Check Raise» 포커클럽 매장명이 섞인 값이다. **`poker` 앵커가 붙은 210 쪽이 진짜다.**
 *   🔴 **`low board` · `low flop`은 검색이 아예 없다** — `low board poker` 데이터 없음,
 *      `low flop` 서제스트는 전부 flip-flop 샌들·플립플롭 회로다. **제목·H2에 쓰지 마라.**
 *   🔴 **라쿠 `suggest-keywords`의 metrics는 일본 DB다** — `check raise`에 880을 붙여 주지만
 *      English/United States로 `search-volume-history`를 다시 돌리면 **260**이다(3.4배 과대).
 *      **판정에 쓸 수 있는 값은 location=United States의 search-volume-history뿐이다.**
 *   🪶 1월 봉우리(480)는 클러스터 전체에 걸린 계절성이라 ⑥의 `quads poker` 같은 단일 허수가 아니다.
 *      다만 연평균 260/210이 그 1월에 끌려 올라간 값이므로 **실질 기준선은 170~210**으로 본다.
 *
 * ▶ 카니발 — **EN 사이트는 이 자리가 완전히 비어 있다** (2026-08-20 전수 확인)
 *   `lib/posts-en/` 50편 중 slug에 `check`가 든 글 **0개** · H2/H3에 check-raise를 가진 글 **0개**.
 *   (KO에는 `holdem-check-raise`가 있지만 EN 대응본이 없다.)
 *   → 정의·사이즈 논의를 **이 글이 직접 흡수한다.**
 *   🔴 단 **「체크레이즈가 합법인가」류는 `holdem-betting-actions`가 이미 축어로 답한다** —
 *      FAQ로 다시 쓰면 자기 카니발이다. 링크로 넘긴다.
 *   🪶 SERP는 Upswing이 **플랍 체크레이즈 4부작 + 사이즈별 빈도 조정**으로 두껍게 덮고 있다.
 *      우리 차별점은 **한 스팟의 실측 레인지**(레이즈 100% 핸드가 정확히 트리플 9콤보 + 65s 2콤보,
 *      블러프는 전부 것샷/양방)이고, 그건 일반론 글이 줄 수 없다.
 *
 * ▶ 수치 ① 교육 예제 (§4-B/§4-B-2 정본 · 2026-08-20 라이브 재확인 드리프트 0)
 *   BB: Check 96.8%(471.7) · Bet 1.8bb 3.2%(15.3) · All 487.0 · EQ 48.3% · EV 2.24 · EQR 84.3%
 *   BTN: All 503.0 · EQ 51.7% · EV 3.26 · EQR 114.7%
 *   등급 10종: Trips 1.8/1.8 · Two Pair 0.4/0.4 · Overpair 4.9/9.5 · Top Pair 7.4/5.4 ·
 *     Second Pair 6.2/4.2 · Weak Pair 3.7/2.4 · Underpair 2.5/2.4 · Ace High 23.0/28.6 ·
 *     King High 15.6/14.3 · No Made Hand 34.5/31.0
 *   Draws: OESD 0.8/0.8 · Gutshot 18.5/13.9 · Backdoor Flush 20.5/18.5 · No Draw 60.2/66.8
 *   🔴 **「Straight」 행이 아예 없다** — 0%인 등급은 화면에 안 뜬다. 「데이터가 없다」로 쓰지 마라.
 *
 * ▶ 수치 ② 자체 재솔브 (체크레이즈 절 전용)
 *   루트: Check 98.0%(477.5) · Bet 1.8bb 2.0%(9.5) · All 487.0
 *   BB 체크 후 BTN: Bet 1.8bb **63.0%**(316.5) · Check 37.0%(186.5) · All 503.0
 *   그 벳에 대한 BB: **Raise 7.3bb 14.9%(69.7) · Call 65.6%(314.6) · Fold 19.5%(93.2)** · All 477.5
 *   ★핸드별 표 **487행 전수 캡처**(가상 스크롤 누적) — 상위 N개 표본이 아니다.
 *     레이즈 100%: 66(6♥6♦·6♥6♣·6♦6♣) · 55(5♠5♦·5♠5♣·5♦5♣) · 22(2♠2♥·2♠2♣·2♥2♣) ·
 *       65s(6♦5♦·6♣5♣) · 64s(6♥4♥·6♦4♦)
 *     블러프: 98s 99%+(EQ 35.8%) · 87s 80~83%(EQ 46.2%) · J4s **67~90%**(J♣4♣만 67.3%로 낮다) ·
 *       Q4s 71~75% · 54s 74~75%
 *
 * §13 손 검산 (전부 통과):
 *   · 팟 5.5 = 2.5 + 2.5 + 0.5(죽은 SB) · 스택 97.5 = 100 − 2.5 · SPR 97.5÷5.5 = **17.7** ✓
 *   · 벳 1.8 ÷ 5.5 = 32.7% ≈ 33% ✓
 *   · 🔴 **레이즈 7.3bb는 «팟 사이즈 레이즈»가 아니다** — 초판에서 내가 ✓로 통과시킨 오류다.
 *     팟 레이즈는 «콜한 뒤의 팟»을 레이즈한다: 5.5 + 1.8 + 1.8 = 9.1 → raise-to **10.9bb**.
 *     7.3bb의 실체는 (7.3 − 1.8) ÷ 9.1 = **60% 팟 레이즈**이고 트리 설정 `raise 60`과 정확히 일치한다.
 *     「7.3 = 5.5 + 1.8」이라는 관찰 자체는 참이라 그럴듯했다 — **참인 관찰에서 거짓 결론이 나온 자리다.**
 *     1.8 대비 7.3 ÷ 1.8 = **4.06배** ✓ (이쪽은 맞다)
 *   · 액션 합 96.8 + 3.2 = 100 · 콤보 471.7 + 15.3 = **487.0** ✓
 *   · EV 2.24 + 3.26 = **5.50 = 팟** · EQ 48.3 + 51.7 = 100 ✓
 *   · EQR 2.24÷(5.5×0.483) = 84.32%(표시 84.3) · 3.26÷(5.5×0.517) = 114.65%(표시 114.7) ✓
 *   · **트리플 = 66·55·22 각 3콤보 = 9콤보** (보드에 6♠·5♥·2♦이 한 장씩 → C(3,2)=3).
 *     9÷487 = 1.85% ≈ **1.8** · BTN도 9÷503 = 1.79% ≈ **1.8** ✓ — **양쪽이 같은 수다**
 *   · **투 페어 = 65s 2콤보뿐** — 6♠·5♥이 보드에 있어 6♥5♥는 불가, 남은 건 **6♦5♦·6♣5♣**.
 *     2÷487 = 0.41% ≈ **0.4** ✓. 62s·52s는 양쪽 레인지 밖(BB는 64s+, 65o도 없음)
 *   · **완성 스트레이트 = 43 하나뿐** (2-3-4-5-6). 7·8·9로 위쪽(5-6-7-8-9)을 만들려면
 *     홀카드 **3장**이 필요하다 → 불가능. 43s·43o는 **양쪽 레인지 밖**(둘 다 64s+) → **0콤보** ✓
 *   · 오버페어 = 7 이상 포켓페어. BB는 JJ+를 3벳으로 내보내 **77·88·99·TT만** = 4×6 = 24콤보.
 *     24÷487 = 4.93% ≈ **4.9** ✓ · BTN은 77~AA 8종 = 48콤보, 48÷503 = 9.54% ≈ **9.5** ✓
 *   · 페어 3종 합 BB 7.4+6.2+3.7 = **17.3** · BTN 5.4+4.2+2.4 = **12.0** ✓
 *   · 등급 합 BB 100.0 · BTN 100.0 · 드로우 합 100.0 / 100.0 ✓
 *   · 재솔브 노드 합: 63.0+37.0 = 100(콤보 503.0) · 14.9+65.6+19.5 = 100(콤보 **477.5**) ✓
 *     477.5 = 재솔브 루트의 Check 콤보와 일치(부모-자식 연결) ✓
 *   · MDF = 5.5 ÷ (5.5 + 1.8) = **75.3%**. BB 폴드 19.5% → 방어 **80.5%**로 MDF를 넘긴다 ✓
 *   · 블러프의 드로우 검산: **98s** 5-6-8-9 → 7 하나(**것샷**) · **87s** 5-6-7-8 → 4 또는 9(**양방**) ·
 *     **J4s·Q4s·54s·64s** 2-4-5-6 → 3 하나(**것샷**). 전부 스트레이트 드로우다 ✓
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "low-board-check-raise",
  title: "Neither Range Holds a Straight Here",
  seoTitle: "Zero Straights Here — When to Check-Raise in Poker",
  // 156자 (디코딩 기준 · EN 하드리밋 160)
  desc: "On 6-5-2 exactly one hand makes a straight and neither player holds it. So the big blind checks 96.8% — and saves all of its aggression for the check-raise.",
  tldr: "On the low rainbow flop 6♠5♥2♦ the big blind checks 96.8% and leads just 3.2% — even though its 48.3% equity is the second highest of the seven spots where it defends. Only one hand makes a straight here, 4-3, and neither range holds it. Nobody has a top end, so nobody leads out of position. The action comes later: re-solve the same tree to see past the flop and the big blind check-raises a 1.8bb bet 14.9% of the time, almost all of it draws.",
  category: "strategy",
  date: "2026-08-20",
  updated: "2026-08-21",
  readTime: "11 min",
  emoji: "🌊",
  image: "/images/gto-srp-low-rainbow-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a low rainbow flop, the big blind's 13x13 grid almost entirely green with a thin orange band of leads",
  keepImagesInBody: true,
  tags: [
    "check raise poker",
    "when to check raise",
    "wet board poker",
    "low rainbow flop",
    "gto solver",
    "gutshot",
  ],
  content: `
The flop is **6♠ 5♥ 2♦**. Three low cards, three different suits — so no flush draw, and a flush would need both remaining cards.

It looks like the kind of board the big blind should attack. The big blind's equity here is **48.3%** — the second highest of the seven spots in this series where it defends, ahead of the [ace-high flop](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp")'s 45.1% and the king-high flop's 46.3%.

It leads **3.2%** of the time.

The reason is one hand. **Exactly one holding makes a straight on 6-5-2, and neither player has it.** Every figure below comes from HoldemMaster's [free GTO solver](/en/solver).

![HoldemMaster GTO solver results for a 6-5-2 rainbow flop — the big blind's range almost entirely green for check, with a thin orange band of leads](/images/gto-srp-low-rainbow-oop-en.webp "6♠5♥2♦ · the big blind's flop strategy — green is the 96.8% check, the thin orange band is the 3.2% lead")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | 6♠ 5♥ 2♦ (low, rainbow)
Pot · stack | Pot 5.5bb · effective stack 97.5bb (SPR about 17.7)
Result | BB checks 96.8% — high equity, no top end
:::

> **Quick answer**
> Check, then take your shot on the raise. Equity is not what buys you the right to bet first — a top end is, and this board has none. Once the button bets, the big blind gets to be the aggressor: it check-raises with every set it holds and fills the rest of that raise with straight draws — the group it holds more of than the button, and the one it actually spends here.

## What conditions produced these numbers?

The button opens to 2.5bb, the big blind calls, everyone else folds. Two players, a 5.5bb pot, 97.5bb behind. **One difference from the earlier spots in this series: there is only one bet size.**

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | 6♠ 5♥ 2♦ (rainbow — three different suits) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb (SPR about 17.7) |
| Bet size | Roughly 33% of pot — **one size only** |
| Rake | Not modeled |
| Checked | 2026-08-20 |

The pot of 5.5bb is ==2.5 open + 2.5 call + 0.5 dead small blind==, and the effective stack is ==100 − 2.5 = 97.5bb==.

**The single bet size matters when you read the screen.** Earlier spots offered 33% and 75%; this one was solved with 33% alone, so **there is no "Bet 4.1bb" row anywhere in the output.** Nothing is missing — the option was never in the tree.

## How often does the big blind check on 6-5-2?

**96.8%.** Of 487 combos, 15.3 go out as a bet and 471.7 check.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **96.8%** | 471.7 |
| Bet 1.8bb (33% pot) | **3.2%** | 15.3 |

That 3.2% is not one specific hand taking a stab. It is spread thinly across the range, which is what a near-indifferent action looks like — the solver is telling you the decision is worth almost nothing either way.

## Why does the big blind lead 3.2% here but 23.7% on 9-8-7?

**Because equity and the right to bet first are different things.** Line the seven spots up and the ranking scrambles completely.

| Flop | Post | BB equity | BB lead |
|---|---|---|---|
| Q♠J♦T♠ broadway (two-tone) | ③ | 46.7% | 0.1% |
| K♠8♦3♣ dry | ② | 46.3% | 0.2% |
| A♥7♦2♣ dry | ① | 45.1% | 1.9% |
| 6♣6♦3♥ paired | ⑥ | 47.2% | 3.0% |
| **6♠5♥2♦ low rainbow** | **⑦** | **48.3%** | **3.2%** |
| Q♠9♠2♠ monotone | ⑤ | 47.7% | 11.2% |
| 9♥8♥7♣ connected | ④ | 48.5% | 23.7% |

The lowest-equity board (45.1%) leads more than the broadway one (46.7%). The [monotone flop](/en/blog/monotone-board-strategy) has **less** equity than this one — 47.7% against 48.3% — and leads more than three times as often.

Now put ⑦ next to ④. The equity gap is **0.2 percentage points**. The lead gap is **3.2% against 23.7%.**

**The difference is straights.** On [9-8-7](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp") the big blind arrives with 24 combos of made straight — J-T, T-6 suited and 6-5 suited. On 6-5-2 the only hand that completes one is **4-3**, filling ==2-3-4-5-6==. To build the straight at the other end you would need 7, 8 and 9 — **three cards, and you only hold two.**

And 4-3 is in neither range. **The solver's category panel has no "Straight" row at all**, and 43s and 43o are grayed out in both matrices — the hand never arrives in this spot in either form.

:::pull[One hand makes a straight on this board, and neither player was ever dealt it.]:::

## How do the two ranges differ on 6-5-2?

**The big blind wins the pairs and loses everything above them.** It holds more top pair, more second pair and more weak pairs than the button; trips and two pair are dead level; and its overpairs run at barely half the button's. Nearly three quarters of both ranges has no pair at all — which is what makes this an overcard fight rather than a value fight, and why the hand that wins it is usually still being drawn to.

![Range composition on a low rainbow board, the big blind ahead on pairs and the button ahead on overpairs](/images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · what the check-raise is actually made of")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Trips | 1.8% | 1.8% |
| Two pair | 0.4% | 0.4% |
| Overpair | 4.9% | **9.5%** |
| Top pair (a six) | **7.4%** | 5.4% |
| Second pair (a five) | **6.2%** | 4.2% |
| Weak pair | **3.7%** | 2.4% |
| Underpair | **2.5%** | 2.4% |
| Ace high | 23.0% | **28.6%** |
| King high | **15.6%** | 14.3% |
| No made hand | **34.5%** | 31.0% |

Add top pair, second pair and weak pair and the big blind leads **17.3% to 12.0%**. That is a real edge — and it is the wrong kind of edge to *lead* with, because none of those hands want to build the pot from out of position on the first action. They are check-call and check-raise hands.

Two rows explain the whole spot:

- **Trips is 1.8% for both players.** Only 66, 55 and 22 make it, and each is exactly ==3 combos== because one of each rank sits on the board. Nine combos each. **The best hand on this flop is split down the middle.**
- **Overpairs run 4.9% against 9.5%** — almost double. An overpair here is any pocket pair above a six, so 77 through AA. The big blind three-bets JJ and better before the flop, which leaves it **77 through TT, and nothing else.** The button keeps the whole top of that list.

## Why is the equity 48.3% but the EQR only 84.3%?

**Because equity is what you own and EQR is what you collect.**

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.3% | 51.7% |
| EV (bb) | 2.24 | 3.26 |
| **Equity realization** | **84.3%** | **114.7%** |

In a 5.5bb pot, 48.3% equity is worth ==5.5 × 48.3% = 2.66bb==. The big blind actually collects **2.24bb**, and ==2.24 ÷ 2.66== is its equity realization: **84.3%**. The button's 51.7% is worth 2.84bb and it collects 3.26bb — **114.7%**. (Divide the rounded figures yourself and you land a tenth of a point off; the solver works from unrounded values.)

The number to compare it against is the [ace-high flop](/en/blog/a-high-board-cbet), where the big blind had **45.1%** equity and realized **84.0%**. Three points more equity here, and it keeps virtually the same fraction of it. Meanwhile the big blind realized **93.2%** on 9-8-7 — because on that flop it held straights, so it could bet even out of position.

**Position is worth more than three points of equity when your range has no top end.** That is the whole gap.

## When should you check-raise on this flop?

**When the button bets, and often.** Facing a 1.8bb bet the big blind raises **14.9%** of the time.

:::note[⚠ **This section comes from a different solve.** The study spot published in the app is flop-only — it stops at the first decision and its action chips are not clickable, so the responses to a bet are not in it. To get them we rebuilt the same tree (33% bet, 60% raise, 5.5bb pot, 97.5bb stack) and ran it: **190 iterations, exploitability 0.16, which is 0.29% of the pot.** Every number in the two tables below is from that run, not from the study spot.]:::

First, what the button does when the action is checked to it:

| Button, after the check | Frequency | Combos |
|---|---|---|
| Bet 1.8bb (33% pot) | **63.0%** | 316.5 |
| Check back | 37.0% | 186.5 |

Then the big blind's answer:

| Big blind, facing 1.8bb | Frequency | Combos |
|---|---|---|
| **Raise to 7.3bb** | **14.9%** | 69.7 |
| Call | **65.6%** | 314.6 |
| Fold | 19.5% | 93.2 |

(One wrinkle worth naming: the app's percentages and its own combo counts disagree slightly at this node — 69.7 combos is ==69.7 ÷ 477.5 = 14.6%== of the 477.5 that reached this node, not 14.9%. The percentages above are quoted as the panel displays them. The gap is a third of a point and changes nothing, but if you run it yourself and get 14.6%, that is why.)

Two things worth noticing.

**The raise is 60% of the pot, not a pot-sized raise.** It is easy to get this backwards. Raising to 7.3bb does match what is already in the middle — ==5.5 + 1.8 = 7.3== — but a *pot-sized* raise means raising the pot **after** your call: ==5.5 + 1.8 + 1.8 = 9.1==, which would put you at **10.9bb**. What 7.3 actually is: ==(7.3 − 1.8) ÷ 9.1 = 60%== of the pot, matching the 60% raise size in the tree, and a shade over four times the bet (==7.3 ÷ 1.8 = 4.06==).

**The big blind folds only 19.5%,** which means it continues **80.5%** of the time. Against a 1.8bb bet into 5.5bb, the break-even defense figure is ==5.5 ÷ (5.5 + 1.8) = 75.3%== — the share you have to keep so a pure bluff cannot print money. The solver goes past it, because a board this low and this dry gives almost every hand something to hang on to.

:::note[One honest caveat about that run: its **root** lead frequency came out at **2.0%** rather than the study spot's 3.2%, on 9.5 combos instead of 15.3. Everything else — the categories, the draws, equity, EV and EQR — matched to the decimal. Leading here is a near-zero-EV decision, so it drifts between solves. Treat 3.2% and 2.0% as the same answer: *almost never*. Your own run will land somewhere in that band too.]:::

## Which hands make up the check-raise?

**Every set, both two pairs, and after that almost nothing but straight draws.**

We read all 487 rows of the per-hand table rather than the first screen of it. Sorted by raise frequency, the top of that list splits unusually cleanly.

| Hand | What it is | Raises |
|---|---|---|
| 66 · 55 · 22 | Three of a kind — **all nine combos** | **100%** |
| 65s | Two pair — only 6♦5♦ and 6♣5♣ exist, since the 6♠ and 5♥ are on the board | **100%** |
| 64s | Top pair **and** a gutshot | **100%** — two of its three combos |
| 98s | Gutshot to the seven — equity **35.8%** | 99%+ |
| 87s | Open-ended, the four or the nine — equity **46.2%** | 80–83% |
| J4s · Q4s | Gutshot to the three and nothing else | 67–90% |
| 54s | Second pair and a gutshot | 74–75% |

Read the second column downward and the pattern is impossible to miss. **Below two pair, every hand in the raise holds a straight draw** — the two that also have a pair (64s and 54s) are raising with the draw attached, not with the pair:

- **98s** holds 5-6-8-9 and needs the ==7==.
- **87s** holds 5-6-7-8 and takes the ==4 or the 9== — the only open-ender **in this range**. ⚠ Not the only one the board allows: **74 makes 4-5-6-7** and waits on the 3 or the 8, a textbook open-ender, and 84 is a double gutshot with the same eight outs. The 0.8% in the draw table means this solver's ranges have no 74 suited, not that the board has one open-ender.
- **J4s, Q4s, 54s and 64s** all hold 2-4-5-6 and need the ==3==.

**Not one hand at the top of that list was chosen for its high card.**

Those seven rows are the top of the sorted list, and they account for roughly 30 of the 69.7 combos that raise. The rest of the raise comes from the same range at lower frequencies — worth knowing before you conclude that *nothing* else ever raises here.

And look at how little of it is value. Trips and two pair together are **2.2%** of the range — ==2.2% × 487 ≈ 11 combos== — out of the 69.7 that raise. Even counting the two hands that pair the board as well, **fewer than one raising combo in four is a made hand.** That is why the raise still works when it gets called: most of the range that put the money in can still improve.

And straight draws are what the solver chooses to spend that edge on.

| Draw | BB | BTN |
|---|---|---|
| Open-ended | 0.8% | 0.8% |
| **Gutshot** | **18.5%** | 13.9% |
| Backdoor flush | **20.5%** | 18.5% |
| No draw | 60.2% | **66.8%** |

**Gutshots: 18.5% against 13.9%.** With trips split evenly at 1.8% and overpairs running 4.9% against 9.5%, the gutshot row is where the raising range comes from — the solver takes the group the big blind has more of and turns all of it into one action.

## Is 6-5-2 a wet board or a dry one?

**Dry at the top, wet in the middle.** A **wet board** is one that hands out draws — cards that connect for straights or flushes, so hands that are behind still have a way to win. A dry board gives out almost none. On 6-5-2 the distinction cuts both ways at once, which is why the label alone tells you nothing here.

There is no flush draw, and — as covered above — no completed straight sits in either range. In that sense the board is bone dry: the ceiling is trips, and both players get there equally often.

But **19.3% of the big blind's range holds a straight draw** (0.8% open-ended plus 18.5% gutshots), and another 20.5% picks up a backdoor flush. Only 60.2% has neither. So plenty of hands have a reason to keep going even with nothing made.

That combination — a low ceiling and a wide floor — is what produces the numbers above. Nobody can bet a monster because nobody has one, and nobody folds much because almost everybody has an out. A board like [Q♠9♠2♠](/en/blog/monotone-board-strategy) is the opposite: a high ceiling that both players are afraid the other has already reached. What you can bet follows the ceiling, not the floor — the same principle the [continuation bet](/en/blog/holdem-continuation-bet) guide works through on other textures.

## What changes at the table?

- **Stop leading low rainbow boards just because you "hit something."** Equity of 48.3% is not a reason. On 6-5-2 the entire range leads 3.2%, and the hands doing it are barely committed to it. The lead here is a single size, a third of the pot, so the button only needs **19.8%** to call — and its ace-highs and king-highs, **42.9%** of the range between them, clear that bar easily. You do not fold them out, and what does call has hands that beat you mixed in.
- **Check-raise with your sets, all of them.** All nine combos of trips raise 100% of the time. Slow-playing a set here — when the button has just as many — throws away the one big pot you were going to win.
- **Pick your bluffs by draw, not by high card.** The raising range is built from gutshots. An ace-high with no draw — A-J, A-9 — belongs in the calling range, the 65.6%, not the raise. (A-K never reaches this spot: the big blind's defending range tops out at A-J.)
- **Do not over-fold to a small bet.** Against 1.8bb into 5.5bb the solver keeps **80.5%** of its range, above the 75.3% break-even figure. Folding your king-high and weak pairs to one small bet is the single most exploitable habit on a board like this.

:::readnext[Keep reading]
/en/blog/paired-board-strategy | You Hold More Trips — and Still Check 97% | /images/gto-srp-paired-oop-en.webp
/en/blog/monotone-board-strategy | The Nut Flush That Checks Seven Times Out of Ten | /images/gto-srp-monotone-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), then go to **Study Spots → Low Rainbow Board → [⚡ View results]**.

The thing to look for is what is *not* there: **scroll the category panel and find the missing "Straight" row.** Then open the matrix and look at the 43s and 43o cells — grayed out for both players. That absence is the entire article.

To reach the check-raise numbers you have to go one step further, because the study spot is flop-only. Hit **Solve this spot yourself**, keep the tree it loads, and run it. When it finishes, click **Check** and then **Bet** on the top strip.

Then open the **GTO Trainer** in the sidebar: it deals you a hand using the actual range weights and grades your action in big blinds lost. Free, nothing to install, no account.

## FAQ

**Q. When should you check-raise in poker?**

A. When your range has hands that gain from a bigger pot and enough draws to balance them. On 6♠5♥2♦ that is 14.9% of the big blind's range facing a 1.8bb bet: every set, both combos of two pair, and a block of gutshots. The test is not "do I have a good hand" but "does this hand want the pot to grow, and can I find bluffs that improve when called?"

**Q. Why doesn't the big blind bet first on a low board?**

A. Because equity is not what earns the right to bet first — a top end is, and this board has none. Trips is split 1.8% to 1.8%, and the one holding that would beat it, 4-3, sits outside both ranges. With no hand that beats the opponent's best, there is nothing to build a pot with, so the big blind leads just 3.2%.

**Q. Why is the strategy so different from 9-8-7 with almost the same equity?**

A. Because the top of a range decides who bets first, not its average. On 9-8-7 the big blind arrives with 24 combos of made straight; on 6-5-2 neither range holds one. Two tenths of an equity point apart, and the leads come out 23.7% against 3.2%.

**Q. Which hands should you check-raise on 6-5-2?**

A. All nine combos of trips (66, 55, 22), both combos of 65 suited, and then straight draws: 98s for the gutshot to the seven, 87s for the open-ender, and J4s, Q4s, 54s and 64s for the gutshot to the three. Not one of them was picked for a high card — the raise is built on draws, top to bottom.

**Q. Is a check-raise allowed, and is it rude?**

A. Legal everywhere, and the rule itself is covered in the [betting actions](/en/blog/holdem-betting-actions) guide. The etiquette worry is a leftover: some old home games banned check-raising by house rule, and the stigma outlived the rule. Nobody plays that way now, and the numbers above are the reason — take the check-raise out of the big blind's game on this flop and you delete 14.9% of its range with nothing to replace it.

**Q. Do these numbers hold at my stake?**

A. Treat the frequencies on this page as a baseline for the matching conditions: heads-up, 100bb, a 2.5bb button open with standard defending ranges, no rake. One detail is specific to this example — this spot was solved with a single 33% bet size, so the solver never gets to choose a bigger one. Give the solver two sizes and the frequencies shift, though the underlying reason for checking does not.
`.trim(),
};

export default POST;
