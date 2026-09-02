import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑥ 영어판 — 6♣6♦3♥ 페어 보드 (2026-08-20, T24 ②)
 *
 * ★★계산 부분은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 *   수치는 §4-B/§4-B-2 정본 + KO ⑥편에서 가져왔다(2026-08-20 전수 재확인 완료 · 드리프트 0).
 *
 * ▶ 🔴 **서치가 뱅크를 뒤집었다** (2026-08-20 라쿠 English/US + 자동완성 + SERP)
 *   뱅크 §3-⑥은 이 편을 「재료가 얇다」고 적었는데, **재료가 없는 게 아니라 축이 틀렸다.**
 *   · **볼륨 없음(0)**: `paired flop` · `paired flops in poker` · `paired board strategy` ·
 *     `how to play paired boards in poker` · `odds of paired flop` · `c bet paired board` ·
 *     `pair the board poker` · `small pair poker` · `how rare is a pair in poker`
 *   · **살아 있는 축 = trips**: `trips poker` **210** · `what is trips in poker` **110** ·
 *     **`trips vs set poker` 40 (12개월 +95.4%)** · `poker trips vs set` 20(+44%) ·
 *     `paired board poker` 10 · `bottom pair poker` 10
 *   🔴 **`full house poker` 9,900은 조준 금지** — 족보 용어라 `holdem-hand-rankings` 소유다.
 *   🔴 **`quads poker` 6,600은 허수다** — 월별을 보면 2026-01에 **74,000** 한 번 튀고 나머지 달은
 *      170~590이다. 12개월 평균이 스파이크에 끌려 올라간 값 → 실제 수준은 **200~400**.
 *      [[keyword-volume-order-of-magnitude-trap]] 계열이라 채택하지 않았다.
 *   → 그래서 이 편은 **「trips vs set」**을 H2로 세웠다. 정의(`what is trips in poker`)는
 *      `holdem-glossary`·`holdem-hand-rankings` 소유라 **«이 보드에서 둘이 어떻게 갈리는가»**만 가져온다.
 *      ③편이 `range advantage`의 «차이»만 가져간 것과 같은 분할이다.
 *
 * ▶ SERP (2026-08-20 WebSearch): Upswing ×2 · SplitSuit · PokerNews · **GTO Wizard
 *   「Attacking Paired Flops From the BB」** — **각도가 정확히 겹치는 경쟁글이 있다.**
 *   그쪽이 못 주는 것으로 승부한다: ①이 스팟의 **콤보 수**(트리플 26 대 20 · 포카드 1 · 풀하우스 3)
 *   ②**BB가 트리플을 더 갖고도 97% 체크**한다는 반직관 ③포켓페어 에퀴티 표(TT 76.0% → 22 50.4%).
 *   🪶 상위글의 「low paired flop에서는 작게 자주 친다」는 **레이저 기준**이다 — 이 글은 콜러 쪽이고,
 *      콜러의 소수 리드는 오히려 **큰 사이즈**가 많다(2.0% 대 1.0%). 충돌이 아니라 다른 좌석이다.
 *
 * ▶ 수치 (§4-B + KO ⑥ · 등급은 2026-08-20 라이브 재확인)
 *   BB: Check 97.0%(471.7) · Bet 4.1bb **2.0%**(9.6) · Bet 1.8bb 1.0%(4.7) · All 486.0 ·
 *       EQ 47.2% · EV 2.17 · EQR 83.7%
 *   BTN: All 502.0 · EQ 52.8% · EV 3.33 · EQR 114.5%
 *   등급(7종 — 페어 보드는 분류축이 다르다): Quads 0.2/0.2 · Full House 0.6/0.6 · Trips 5.3/4.0 ·
 *       Two Pair 12.3/15.5 · Ace High 26.3/31.9 · King High 16.5/15.1 · No Made Hand 38.7/32.7
 *   Draws: OESD 0.8/0.8 · Gutshot 0.8/0.8 · Backdoor 22.8/19.1 · No Draw 75.5/79.3
 *
 * §13 손 검산 (전부 통과):
 *   · **포카드 = 1콤보뿐** — 보드에 6♣6♦이 있어 남은 조합은 **6♠6♥ 하나**. 0.2% × 486 = **1.0** ✓
 *   · **풀하우스 = 3콤보** — 보드 3♥ 제외 3♠3♦·3♠3♣·3♦3♣. 0.6% × 486 = **2.9** ✓
 *     🪶 63도 풀하우스지만 63s·63o가 **양쪽 레인지 밖**이라 존재하지 않는다
 *   · **트리플 = BB 26 / BTN 20콤보** — 남은 6이 6♠·6♥ 둘뿐이라 핸드당 2콤보.
 *     A6(수딧+오프) 8 · K6s·Q6s 4 · **J6s·T6s·96s 6(BB만)** · 86s·76s·65s·64s 8
 *     → BB 26÷486 = 5.35% ≈ **5.3** · BTN 20÷502 = 3.98% ≈ **4.0** ✓
 *   · EV 합 2.17 + 3.33 = **5.50 = 팟** · 에퀴티 47.2 + 52.8 = 100 ✓
 *   · EQR 역산 2.17÷(5.5×0.472) = 83.6%(표시 83.7) · 3.33÷(5.5×0.528) = 114.7%(표시 114.5) ✓
 *   · 액션 합 97.0 + 2.0 + 1.0 = 100.0 · 콤보 합 471.7 + 9.6 + 4.7 = **486.0** ✓
 *   · 보드 페어 «위에» 얹은 핸드 = BB 0.2+0.6+5.3+12.3 = **18.4%** · BTN 0.2+0.6+4.0+15.5 = **20.3%** ✓
 *   · MDF = 5.5 ÷ (5.5 + 1.8) = **75.3%** ✓
 *   · 등급 합 BB 99.9 · BTN 100.0 · 드로우 합 99.9 / 100.0 ✓
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 *
 * ═══ 적대 검수 4렌즈 (2026-08-20 · 병렬) — 되돌리지 마라 ═══
 * 🔴 **기계 게이트가 전부 통과시킨 뒤에 나온 결함들이다.** `check:gto` 🔴0 · `audit:hard` 🔴0인
 *    상태에서 렌즈가 잡았다 — §14-A가 말한 «게이트가 원리상 못 잡는 D(유해조언)·F(사실)»가 이것이다.
 *
 * ① 🔴 **「Only four combos beat trips」는 키커를 지운 유해 조언이었다.** 플랍 5장이라
 *    베스트5 = 6-6-6 + 키커 2장이고 **둘째 키커는 보드 3♥로 고정** → 6 옆의 카드 한 장이 전부다.
 *    A6일 때만 «4콤보»가 참이고, 76s면 BTN의 A6·K6s·Q6s·86s·33·66 **18콤보**에 진다.
 *    이 조언대로 76s로 팟을 키우면 페어 보드 최대 파산 패턴에 걸린다. → 키커 경고로 교체.
 * ② 🔴 **「리드하는 핸드가 대부분 6x」는 자기 표가 반증했다.** 큰 벳 총량 9.6콤보 중
 *    6x+쿼드 기여는 26×0.08 + 1×0.096 ≈ **2.2콤보(23%)**뿐이다. 참인 명제는
 *    «6x가 작은 사이즈를 안 고른다»(레인지 평균 2.0% 대비 4배 over-index)이지 «다수»가 아니다.
 * ③ 🔴 **EQR 100%를 «손익분기»로 오독했다.** EQR은 실현률이지 손익이 아니다 —
 *    44의 EV는 **3.42bb**로 레인지 평균 **2.17bb**의 1.6배다. 22도 1.83bb로 «쓸모없다»가 아니다.
 * ④ 🔴 **갈림선은 6이 아니라 3이다.** 55(63.7%)·44(61.8%)는 6보다 낮은데도 제 몫을 다 실현한다.
 *    22만 보드의 **두 랭크 아래**라 33·X3에 지고 러닝 3에 카운터피트된다.
 * ⑦ 🔴 **MDF 처방이 14%p 미달이었다.** 18.4 + A하이 26.3 + K하이 16.5 = **61.2% < 75.3%** →
 *    미완성 핸드(백도어 Q하이·것샷)까지 가야 닿는다고 명시했다.
 * ⑧ 🔴 **64.6%는 K하이 15.1%를 빠뜨린 값**이었다(정답 **79.7%** = 100−20.3).
 *    BB는 3개 등급을 다 더하면서 BTN은 2개만 더해, 한 글 안에서 집계 규칙이 갈렸다.
 * ⑨ 🟡 「every 6x hand is exactly two combos」는 **오프수트에 거짓**(A6o는 6콤보) ·
 *    「both 33s」는 3콤보를 2로 적음 · 「on A-7-2 you needed 77 or 22」는 **AA 누락**(BB 좌석 한정).
 *
 * 🔴 **①②③④⑦⑧은 한국어판에도 그대로 있었다 → 같은 커밋에서 KO도 고쳤다.** 개선은 양방향으로 흐른다.
 * 🟢 렌즈D가 **`EN_POSTS` 배열 등록 누락**을 잡았다 — import만 있어 TS 에러도 빌드 실패도 없이
 *    이 글이 **통째로 안 만들어지고 있었다**(intl posts 463 → 등록 후 464). 조용히 통과하는 종류다.
 * 🟢 카니발 정리: set/trips 정의가 glossary·hand-rankings·drawing-odds에 이미 3중으로 있어
 *    FAQ를 «왜 페어 보드에서 트리플이 셋보다 약한가»로 스팟화하고 족보 필라로 링크했다.
 *    태그 `paired board poker`는 `holdem-reading-the-board`와 **문자열이 동일**해 교체했다.
 *    MDF는 `holdem-3bet` 소유인데 링크가 MDF를 한 번도 안 쓰는 pot-odds로 가 있어 앵커를 낮췄다.
 * 🪶 계산 자체는 4렌즈 전부 「전건 통과」였다 — 이 시리즈에서 5편 연속 같은 결과다.
 *    **결함은 늘 계산이 아니라 «계산에서 끌어낸 해석»에서 나온다.**
 */
export const POST: Post = {
  slug: "paired-board-strategy",
  title: "You Hold More Trips — and Still Check 97%",
  seoTitle: "More Trips, Still Checking 97% — the 6-6-3 Paired Flop",
  // 145자 (디코딩 기준 · EN 하드리밋 160)
  desc: "On 6-6-3 the caller holds more trips than the raiser — 26 combos against 20 — and checks 97% anyway. Here is what a paired flop actually rewards.",
  tldr: "On the low paired flop 6♣6♦3♥ the big blind checks 97.0%. The odd part is that it holds more trips than the button: 26 six-x combos against 20. It checks anyway, because only 18.4% of its range has anything beyond the board's pair, and the other 81.6% is a high-card contest the button wins. What does gain value is any pocket pair above a six — TT is 76.0% equity here.",
  category: "strategy",
  date: "2026-08-20",
  updated: "2026-09-02",
  readTime: "10 min",
  emoji: "👯",
  image: "/images/gto-srp-paired-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a low paired flop, the big blind's grid almost entirely green with quads and full house rows in the panel",
  keepImagesInBody: true,
  tags: [
    "trips vs set",
    "paired flop strategy",
    "paired flop example",
    "pocket pairs",
    "gto solver",
    "minimum defense frequency",
  ],
  content: `
The flop is **6♣ 6♦ 3♥** — low cards, and a pair among them. It looks like a board nobody hit.

Hold TT there and your equity is **76.0%**. The same TT is around 54–57% against AK preflop, so this flop is *better* for it than the usual flip. Hold A9 and you have nothing — but four-fifths of your opponent's range has nothing more than the board's pair either, so folding it right away throws away the pot.

**A board nobody hit is really a contest over whose high cards are better.** The [ace-high](/en/blog/a-high-board-cbet) and [king-high](/en/blog/k-high-board-cbet) flops were fights over who connected; this one is a fight between two ranges that mostly did not. Every figure below comes from HoldemMaster's [free GTO solver](/en/solver).


:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | 6♣ 6♦ 3♥ (low paired board)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB checks 97.0% — while holding more trips
:::

> **Quick answer**
> Check almost everything, and defend far wider than feels right. Holding a six is not a reason to lead — leading only folds out what you already beat, so the sixes stay in the checking range, and the big blind checks **97.0%** here. The hands that genuinely gain on this flop are the pocket pairs above a six, and the ones to stop folding are ace-high and the better king-high hands.

## What conditions produced these numbers?

The button opens to 2.5bb, the big blind calls, and everyone else folds — two players, a 5.5bb pot, 97.5bb behind, standard 100bb online ranges, two available bet sizes at roughly a third and three-quarters of the pot, and no rake modeled. Change the ranges or the sizing and the frequencies move with them.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | 6♣ 6♦ 3♥ (paired board, three different suits) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-20, study spot output |

## Trips vs a set — on a paired board it’s trips

**A set is a pocket pair that matches one board card; trips is one card in your hand matching a pair on the board.** They are the same ranking — three of a kind, filed together in the [hand rankings](/en/blog/holdem-hand-rankings) — but they play completely differently.

Every other flop in this series produced sets: on A-7-2 the big blind needed 77 or 22 in hand. Here the board brings its own pair, so **any single six makes trips**, and only 66 in the pocket makes quads.

| Your hand on 6♣6♦3♥ | You have |
|---|---|
| A6, K6s, 96s … any one six | **Trips** — three sixes |
| 66 | **Quads** |
| 33 | **Full house** — threes full of sixes |
| TT, 99, 88, 77 … | **Two pair** — your pair plus the board's sixes |

That difference matters because trips is far more common than a set and **your opponent can hold it just as easily.** A set is rare and usually the best hand; trips on a paired board is shared territory, which is exactly why the solver does not treat it as a license to bet.

## How does the big blind play a low paired flop?

**Check 97.0%.** On 6♣6♦3♥ the big blind leads only 3.0% of the time in total — 2.0% for 4.1bb and 1.0% for 1.8bb — and hands the initiative straight back to the player who opened. What is worth a second look is which of the two sizes it picks when it does bet, because this is the one flop in the series where the answer flips.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **97.0%** | 471.7 |
| Bet 4.1bb (75% pot) | **2.0%** | 9.6 |
| Bet 1.8bb (33% pot) | 1.0% | 4.7 |

**The large bet outnumbers the small one** — the first time in this series. On the two boards where leading actually mattered, the small size won out by more than two to one: 16.8% against 6.9% on [the 9-8-7 donk-bet spot](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), 8.0% against 3.2% on the [monotone flop](/en/blog/monotone-board-strategy). Here it inverts, and the per-hand table below shows why.

## Why check when you hold more trips?

**Because trips is only 5.3% of the range.** The other 94.7% is mostly the board’s own pair of sixes plus a high card — and on that axis the button is ahead.

First, the count. With 6♣ and 6♦ on the board, only 6♠ and 6♥ remain — so every *suited* 6x hand is two combos, and A6 offsuit is six. The whole category runs through just two cards.

| 6x hand | BB (calling range) | BTN (opening range) |
|---|---|---|
| A6 (suited + offsuit) | ✅ 8 combos | ✅ 8 combos |
| K6s · Q6s | ✅ 4 combos | ✅ 4 combos |
| **J6s · T6s · 96s** | ✅ **6 combos** | ❌ outside the opening range |
| 86s · 76s · 65s · 64s | ✅ 8 combos | ✅ 8 combos |
| **Total** | **26 combos = 5.3%** | **20 combos = 4.0%** |

**The difference is J6s, T6s and 96s — six combos.** The big blind defends them cheaply; the button never opens them.

Now widen the view and the picture flips.

![Range composition infographic comparing the big blind and button hand categories on a low paired board](/images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · category split — trips favor the caller, but two pair and ace-high favor the opener")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Quads (66) | 0.2% | 0.2% |
| Full house (33) | 0.6% | 0.6% |
| Trips (a six) | **5.3%** | 4.0% |
| Two pair | 12.3% | **15.5%** |
| Ace high | 26.3% | **31.9%** |
| King high | **16.5%** | 15.1% |
| No made hand | **38.7%** | 32.7% |

**Anything beyond the board's own pair is 18.4% for the big blind and 20.3% for the button.** The other **81.6%** of the big blind's range is the board's own pair of sixes plus a high card — and the button wins that contest, its ace-high running 31.9% against 26.3%.

Leading into that fails from both ends: with a six you fold out only the hands you already beat, and with everything else you advertise a range that cannot stand a raise. So the sixes stay in the checking range instead.

## Equity is 47 against 53 — so why is EQR 84 against 115?

**Because the board hits both ranges the same way, but the two players do not collect the same way.** On 6-6-3 almost everybody holds the board's pair of sixes and nothing else, which keeps raw equity close. What each side actually banks is not close at all.

| | Big blind (OOP) | Button (IP) |
|---|---|---|
| Equity | 47.2% | 52.8% |
| EV (bb) | 2.17 | 3.33 |
| **EQR (equity realization)** | **83.7%** | **114.5%** |

The big blind's share of the pot is ==5.5 × 47.2% = 2.60bb==, and it books 2.17bb — ==2.17 ÷ 2.60 ≈ 83.7%==. The button's share is 2.90bb against 3.33bb of EV, so it collects **114.5%**, more than its winning percentage is worth.

The **30.8-point** gap is almost exactly the 29.1 points of the [dry ace-high board](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). **A paired board plays like a dry one** — four ranges out of five are the same pair of sixes with a different high card, so the hand runs quietly, and the player who acts last gets to see which high card showed up before choosing. That advantage is the whole gap.

:::note[Every EQR in this series is the figure the solver displays. Dividing the rounded equity and EV yourself lands within a tenth of a point of it — that is rounding, not a discrepancy.]:::

## How strong are pocket pairs on 6-6-3?

**Almost every pocket pair is two pair here.** TT makes T-T-6-6-3. The two that break the pattern are the ones matching the board: 66 is quads, 33 is a full house.

| Hand | Equity | EV (bb) | EQR | Check |
|---|---|---|---|---|
| TT | 76.0% | 6.66 | 159.4% | 97.7% |
| 99 | 72.6% | 5.68 | 142.4% | 96.1% |
| 88 | 69.9% | 4.96 | 128.9% | 94.8% |
| 77 | 68.5% | 4.63 | 123.0% | 94.7% |
| 55 | 63.7% | 3.82 | 108.9% | 93.8% |
| 44 | 61.8% | 3.42 | 100.5% | 93.9% |
| 22 | 50.4% | 1.83 | 66.0% | 95.8% |

(Averages across each hand's six combos; individual combos vary by about a tenth of a point.)

**TT at 76.0% is the top of the big blind's range** once you set aside the sixes, 33 and 66 — because JJ and better three-bet preflop and never see this flop.

**But the bottom drops out.** 44 realizes exactly its equity share — EQR 100.5% — and still makes 3.42bb against the range's 2.17bb average, so it is not a marginal hand. 22 is the one that breaks: 50.4% equity, EQR 66.0%, 1.83bb.

**The dividing line is the three, not the six.** 55 and 44 both sit below the six and still realize their full share. A deuce is under *both* board ranks, so it loses to 33, to every hand holding a three, and a running three counterfeits it into playing the board. The rule that actually holds is not "small pairs are fine on low boards" but **"any pair above the three is fine — the deuces are the only ones that break."**

One more group counts as two pair, and it is easy to miss: **any hand with a three.** A3 plays as sixes and threes with an ace — which beats 22 and loses to every pair above the three.

## How many quads and full houses are actually out there?

**One combo of quads, three combos of a full house.** You can count both by hand.

- **Quads (66)** — with 6♣ and 6♦ on the board, the only remaining combination is ==6♠6♥==. 0.2% of 486 combos is 1.0 — and the per-hand table has exactly one row.
- **Full house (33)** — with 3♥ on the board, that leaves ==3♠3♦ · 3♠3♣ · 3♦3♣==. 0.6% × 486 = 2.9.

63 also makes a full house, but neither 63 suited nor 63 offsuit is in either range, **so 33 is the entire full-house category** on this flop.

Those four combos explain why paired boards feel dangerous. Open the per-hand table and read the EQR column: 6♠6♥ realizes **359.7%** of its equity share (19.78bb of EV), and the three 33s run **309.8%, 309.8% and 309.5%** — three to four times their share of the pot. Rare — but when one of them hits, the stacks go in.

## Why is the big bet more common than the small one?

**Because trips and quads pick the large size when they bet at all.** Hand by hand:

| Hand | Bet 4.1bb (75% pot) | Bet 1.8bb (33% pot) | Check |
|---|---|---|---|
| K♠6♠ | **7.8%** | 0.3% | 92.0% |
| Q♥6♥ | **7.9%** | 0.7% | 91.5% |
| J♥6♥ | **9.0%** | 3.3% | 87.7% |
| 6♠6♥ (quads) | **9.6%** | 0.0% | 90.4% |
| T♠T♥ (two pair) | 0.8% | 1.7% | 97.5% |

Trips and quads do take the small size occasionally — K♠6♠ 0.3%, Q♥6♥ 0.7%, J♥6♥ 3.3% — but the large size is several times that. The only row at a flat 0.0% is 6♠6♥, and **that is quads, not trips.** A two pair like TT barely bets, and when it does it picks the small one.

It comes down to what the opponent can call with. A six is close to unbeatable here, so the point is to build a pot — and since most sixes are checking anyway, **the few that do bet have every reason to go big.** Two pair is behind every six and all three 33s, so it has no interest in a big pot. The class that wants a big pot refuses the small size; the class that only wants a call refuses the large one.

⚠ **Do not read this as "the better the kicker, the bigger the bet" — the table runs the other way.** Large-bet frequency goes K♠6♠ 7.8% < Q♥6♥ 7.9% < **J♥6♥ 9.0%**: the weakest kicker bets most. The reason is blockers, not kickers. J6s, T6s and 96s are not in the button's opening range at all, so holding one removes none of the button's trips. K6 and Q6 are hands the button also holds, so taking one out of the deck thins the very range that would call.

And this does not account for all of the large bets — the sixes are 26 of 486 combos, roughly a quarter of the large-bet total of about 9.7 combos. The rest comes from other classes.

The big blind leads only 3.0% of the time, so you will rarely run into this at the table. It is a clean demonstration of a principle, though: **sizing is chosen by the range, not by the hand.**

## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?

**Far less often than it feels like you should.** Only 18.4% of your range has anything beyond the board's pair, so folding everything else hands the pot away.

Facing a 1.8bb bet into 5.5bb, denying a pure bluff any profit means continuing roughly ==5.5 ÷ (5.5 + 1.8) = 75.3%== of the time. That estimate is called **minimum defense frequency (MDF)**.

Add every ace-high (26.3%) and every king-high (16.5%) and you are still only at **61.2%**, short of 75.3%.

⚠ **Do not jump from that to "so you must defend more."** MDF treats the opponent's bet as a pure bluff with zero equity, but a flop bluff still has two streets to come, so it does have equity. And the out-of-position player realizes equity badly. ⚠ What this study spot cannot tell you is where the real optimum sits: it is solved **through the flop's first action only**, so the big blind's response to a bet is not in it, and whether the optimal defense lands above or below MDF **cannot be read from this material.**

What this arithmetic is good for, then, is not "hit 75%" but **"do not fold on the strength of one high card."** Plenty of the ace-highs and king-highs are still calls here, and folding all of them to one small c-bet is exactly the habit that gets exploited.

(On a paired board nobody is literally ace-high: you always hold the board's pair of sixes. "Ace-high" here means that pair with an ace as your best card.)

:::note[MDF simplifies the opponent’s bet to a pure bluff. In practice the right frequency also depends on how well your hand realizes its equity on later streets, so use it as a starting point rather than a hard rule. The pot-odds side of the same arithmetic is in [pot odds](/en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp"), and [3-bet defense](/en/blog/holdem-3bet) works the same formula preflop.]:::

## What changes at the table?

- **Do not undervalue middle pocket pairs on low paired boards.** 77 through TT are 68–76% equity here, the top of the calling range. But the floor is real: 44 and 55 still beat the range average, while 22 keeps only two-thirds of what its equity is worth, because it pairs below both board ranks.
- **Flopping trips is not a reason to lead.** The sixes lead more than any other class here, and they still check nine times out of ten. Leading only folds out the hands you already beat; checking lets those hands put the money in themselves, and leaves you a check-raise or a call-down. ⚠ What this solve cannot tell you is *how much* more the check-raise line makes: the study spot solves **the flop's first action only**, so the button's c-bet frequency and any check-raise EV simply do not exist in it.
- **Do not fold ace-high to one small bet.** 79.7% of the button’s range has nothing beyond the board’s pair either — ace-high 31.9%, king-high 15.1% and no made hand 32.7%.
- **Your kicker decides the hand.** Only three combos beat trips outright — the three 33 full houses. (Quads is off the table: once you hold a six yourself, 6♠6♥ cannot exist, so the four combos counted in the full-house section become three from your seat.) And even that holds only when your kicker is an ace. The second kicker is fixed by the board's 3, so the single card beside your six is the whole hand: with 76s the button's A6, K6, Q6 and 86 all have you dominated. Trips with a weak kicker is a bluff-catcher, not a hand to build a pot with.

:::readnext[Keep reading]
/en/blog/monotone-board-strategy | The Nut Flush That Checks Seven Times Out of Ten | /images/gto-srp-monotone-oop-en.webp
/en/blog/donk-bet-strategy | The Flop Where Donk Betting Is Right — 9-8-7 | /images/gto-srp-middle-connected-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), then go to **Study Spots → Paired Board → [⚡ View results]**.

What to look for is **the single 6♠6♥ row** in the per-hand table — the only quads this board allows, and at **359.7%** the highest equity realization anywhere in these thirteen spots (second is 6♥6♣ on the [low rainbow flop](/en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") at **318.9%**). Compare it with the three 33 rows just below and you can see how few combos the very top of a paired board actually contains.

Then open the **GTO Trainer** in the sidebar: it deals you a hand using the actual range weights and grades your action in big blinds lost. Free, nothing to install, no account.

## FAQ

**Q. Why is trips weaker than a set on a paired board?**

A. Because the board hands it to everyone. A set needs a pocket pair matching one board card; trips only needs one card matching the pair already showing, so the button holds 20 combos of it here against the big blind's 26. On top of that your second kicker is fixed by the board, which means a six with a weak kicker is dominated by a six with a better one. The [ranking](/en/blog/holdem-hand-rankings) is identical — the situation is not.

**Q. What do pocket pairs become on a 6-6-3 board?**

A. Two pair, in almost every case: TT plays as T-T-6-6-3. The exceptions are 66, which is quads, and 33, which is a full house. Not all two pairs are equal though — 22 is a pair of deuces below both board cards, so it loses to every other pocket pair and drops to 50.4% equity.

**Q. Why does the caller hold more trips than the raiser?**

A. Because the big blind is already partly invested and defends hands the button never opens. J6s, T6s and 96s are exactly that group — six extra combos, which is the entire 26-against-20 gap. It still checks, because trips is only 5.3% of its range.

**Q. What is minimum defense frequency?**

A. An estimate of how often you must continue so that a pure bluff cannot profit: pot ÷ (pot + bet). Against a 1.8bb bet into 5.5bb that is 75.3%. It assumes the bet is a pure bluff, which real opponents rarely are — so it tells you roughly how much you cannot fold, not exactly how much you must call.

**Q. How often does the flop come paired?**

A. About **17.2%** of the time — roughly one flop in six. The three flop cards miss each other only when the second card avoids the first rank and the third avoids both: ==(48 ÷ 51) × (44 ÷ 50) = 82.8%==, and the rest is paired or better. So a paired board is not an oddity you can afford to have no plan for — you will sit in one every session. (It is not the *more* common event, though: an unpaired hand misses the flop entirely ==(44 ÷ 50) × (43 ÷ 49) × (42 ÷ 48) = 67.6%== of the time, so it pairs up **32.4%** — closer to twice as often as the board pairs.)

**Q. Do these numbers hold at my stake?**

A. Use them as a baseline when the conditions match: heads-up, 100bb, a 2.5bb button open with standard defending ranges, no rake. One deviation is worth knowing — against an opponent who rarely c-bets paired boards, leading more often than the solver’s 3.0% is worth it, because the pot is otherwise going to be checked down.
`.trim(),
};

export default POST;
