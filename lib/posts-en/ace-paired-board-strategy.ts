import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑬ 영어판 — A♠A♥6♦ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *   ⚠ 「(the last)」·「thirteen spots」 류 **편 수 하드코딩을 넣지 마라** — 정본은 `lib/gto-series.ts`의
 *      `GTO_SERIES_TOTAL`이다(사장님 규약 2026-08-15). KO ⑬이 그 위반 5곳을 이미 정리했다.
 *
 * ★★ «번역 + 5필드»다 (스펙 §4-A-3). 언어별로 바꾸는 것은
 *    seoTitle · desc · H2 문구 · FAQ 문항 선택 · 내부링크 대상 **다섯뿐**이고,
 *    본문·수치·전략 논거·**고지 문장**은 KO ⑬을 그대로 옮긴다.
 *    🟢 **KO ⑬은 EN 미발행 상태에서 M-023 8건 + 규약 3건을 반영했다** — 그 정정본을 옮기는 것이므로
 *       12개 언어 전파가 원천 차단된다. 아래 「KO가 확정한 것」을 하나도 떨어뜨리지 마라.
 *
 * ★ ⑪⑫와 조건은 같지만 **벳 사이즈가 두 가지**다 — 화면에 「Bet 4.5bb (75% pot)」과
 *   「Bet 2bb (33% pot)」이 함께 있다. ⑦⑪⑫의 「33% 한 가지」를 복사하면 틀린다.
 *
 * ▶ 수치 출처: 2026-08-21 `?lang=en` 라이브 재캡처(`capture-solver-spots.mjs sb-paired-ace --lang=en`).
 *   §4-B 정본과 **전건 일치** — OOP 503.0 / 56.2% / 3.51 / 104.1% · IP 505.0 / 43.8% / 2.49 / 94.8%
 *   SB: Bet 4.5bb (75% pot) **0.5%**(2.7) · Bet 2bb (33% pot) **79.6%**(400.4) · Check **19.8%**(99.8)
 *       → 벳 합계 **80.1%** (§4-B와 일치)
 *   SB hands: Quads 0.2 · Full House 1.8 · Set/Trips 17.5 · Two Pair 18.5 · King-High 22.3 ·
 *             No Made Hand 39.8 (합 100.1)
 *   BB hands: Full House 1.8 · Set/Trips 13.1 · Two Pair 15.4 · King-High 18.2 ·
 *             No Made Hand 51.5 (합 100.0) — **Quads 행이 없다 = 0**
 *   SB draws: Backdoor FD 17.9 · No Draw 82.1 (합 100.0)
 *   BB draws: Backdoor FD 20.2 · No Draw 79.8 (합 100.0)
 *     🪶 드로우 목록이 **두 줄뿐**인 것이 보드와 맞는다 — A♠A♥6♦는 무늬가 셋 다 달라
 *        플러시 드로우가 원리상 불가능하고, 페어 보드라 스트레이트 드로우도 없다.
 *   화면 라벨: 보드명 「Ace-Paired Board」 · 「OOP (SB (Opener))」 · 「IP (BB (Caller))」
 *
 * ▶ §13 손 검산 — **콤보 합계가 양쪽 다 정확히 닫힌다** (게이트가 «미검사»로 흘리는 자리다)
 *   팟 3+3=6 ✓ / 스택 100−3=97 ✓ / SPR 97÷6=16.2 ✓
 *   액션 0.5+79.6+19.8 = 99.9(반올림) ✓ / 콤보 2.7+400.4+99.8 = 502.9 ≈ 503.0 ✓
 *   EV 3.51+2.49 = 6.00bb = 팟 ✓
 *   EQR 3.51÷(0.562×6)=104.09→104.1 ✓ / 2.49÷(0.438×6)=94.75→94.8 ✓
 *   사이즈 4.5÷6=75% · 2.0÷6=33.3% ✓ / 보드 A♠A♥6♦ = 페어 보드 · 무늬 셋 다름 ✓
 *   포카드   SB **1** = A♦A♣ 단 1콤보(보드에 A♠A♥) · 1÷503=0.199→0.2 ✓ / BB 0 (AA는 3벳) ✓
 *   풀하우스 양쪽 **9** = 66 **3**(6♦이 보드) + A6 **6**(남은 A 2장 × 남은 6 3장)
 *            9÷503=1.79→1.8 ✓ / 9÷505=1.78→1.8 ✓
 *   트리플   SB **88** = A + 키커 11랭크(K Q J T 9 8 7 5 4 3 2) × 8콤보 · 88÷503=17.49→17.5 ✓
 *            BB **66** = AT~A2 8랭크 × 8 = 64 + AJs 2 = 66 · 66÷505=13.07→13.1 ✓
 *            ★SB에만 = AK 8 + AQ 8 + AJo 6 = **22콤보** (BB는 전부 3벳으로 나간다)
 *   투 페어  SB **93** = 포켓페어 11랭크 66 + 6x 27 · 93÷503=18.49→18.5 ✓
 *            BB **78** = 포켓페어 7랭크(99~22) 42 + 6x 36 · 78÷505=15.45→15.4 ✓
 *   K 하이   SB 112÷503=22.27→22.3 ✓ / BB 92÷505=18.22→18.2 ✓
 *   미완성   SB 200÷503=39.76→39.8 ✓ / BB 260÷505=51.49→51.5 ✓
 *   🔴 **합계 검산**: SB 1+9+88+93+112+200 = **503** ✓ / BB 0+9+66+78+92+260 = **505** ✓
 *   A를 든 콤보 SB 95(88+6+1)=18.9% · BB 72(66+6)=14.3% → **95÷72 = 1.32배** ✓
 *   BB 투 페어 78 + K 하이 92 = **170**(33.7%) / KK를 이기는 트립스+풀하우스 = 66+9 = **75**(14.9%) ✓
 *   ★ **A-A-A-6에서 KK는 «에이스 풀 오브 킹스»다** — A♠A♥6♦에 A가 더 붙으면 KK의 베스트 5장은
 *     A-A-A-K-K다. 상대 170콤보를 전수 대조: 포켓페어(99~22)는 A-A-A-x-x로 **에이스 풀 오브 x**라
 *     킹스에 진다 · 6x는 A-A-A-6-6 = 에이스 풀 오브 식스 · K 하이는 A-A-A-K-y로 **트립스**다.
 *     → 「KK를 넘는 핸드가 170콤보 안에 없다」는 참이다 ✓
 *     🔴 ④의 「A 한 장에 뒤집힌다」를 이 보드에 이식하지 마라 — M-025 ⑫가 잡은 족보 오류다.
 *
 * ▶ 키워드 (2026-08-21 rakko 실측 · US)
 *   🟢 **이 편의 자리**: `trips poker` **210** · `what are trips in poker` **110** —
 *      둘 다 `lib/posts-en/` 전체에서 **tags 0건**인 빈자리다.
 *   🔴 **`trips poker` = `poker trips` = `trips in poker`는 월별 배열이 완전히 같은 «한 클러스터»다.
 *      210이지 630이 아니다. 더하지 마라.**
 *   🔴 가져오면 안 되는 것: `trips vs set` 140 → **⑥**(`paired-board-strategy`) ·
 *      `paired board poker` 10 → `holdem-reading-the-board` · `kicker poker` 390 → `holdem-kicker`
 *      · `when to bluff` → `holdem-strategy`.
 *   🪶 **주인 없는 210이 하나 남아 있다 — `aces full of kings`**(경쟁성 0 · 12개월 −2.7%로 안정).
 *      이 편에 그 표현이 실제로 나오지만 **한 문장뿐이라 가져가지 않았다.** 제자리는
 *      `holdem-hand-rankings`나 `holdem-flush-vs-straight`다. 🪶 `full house poker`는 **9,900**이다.
 *   🪶 ⑥의 `trips vs set`(140)보다 `set vs trips`(**170** · 12개월 +14.0%)가 조금 높다.
 *      다만 1.2배라 「자릿수 함정」 기준(10배)에 못 미친다 — **기록만 하고 손대지 않았다.**
 *
 * ★이 시리즈는 §8 「경험담 필수」 예외 — 1차 데이터가 본체이고 재현 가능성이 출처를 대신한다.
 *
 * 🔴 KO ⑬이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
 *   ① **폐기 논거 「나쁜 패는 접고 좋은 트립스만 콜한다」를 되살리지 마라.** 이 편의 표가 반증한다 —
 *      BB 투 페어 78 + K 하이 92 = **170콤보(33.7%)가 전부 KK 아래**이고, KK를 이기는 트립스+
 *      풀하우스는 **75콤보(14.9%)로 더 적다.** 값이 얇은 진짜 이유는 «그 넓은 몫이 콜은 해도
 *      큰 팟까지는 따라오지 않는 것»이다.
 *   ② 「트립스가 **전부** 벳」으로 쓰지 마라 — 라이브 실측으로 A를 든 94콤보의 체크가
 *      **0.1%~26.0%(평균 12.3%)**이고 **체크 0%인 콤보는 0개**다.
 *   ③ 체크가 몰린 칸을 「KK·QQ·JJ·TT」로 쓰지 마라 — **TT 체크는 21.6%(= 벳 78%)**다.
 *      체크 레인지의 최다 구성은 「중간 강도」가 아니라 **미완성 ≈44%**이고,
 *      초록이 가장 두꺼운 칸은 **오프수트 브로드웨이**(Q9o·QJo·QTo·J9o)다.
 *   ④ 판단 기준을 「그 랭크가 내 레인지에 얼마나 두꺼운가」로 쓰지 마라 — **같은 글이 부정한다.**
 *      ⑥ 663에서 BB는 6을 더 두껍게(5.3 대 4.0) 갖고도 **3.0%만 쳤다.**
 *   ⑤ ⑥편 인용은 **「보드 페어 위에 얹은 핸드는 BB 18.4% 대 BTN 20.3%로 BTN이 앞선다」**가 정본이다.
 *      「트리플 위쪽은 앞섰지만」으로 뒤집지 마라. ⑥이 하이카드 싸움을 **81.6%**로 못박는다.
 *   ⑥ **⑬ 104.1%가 블라인드전 3편 중 1위다**(⑪ 103.1 · ⑫ 85.3). 「⑪에 이어 두 번째」를
 *      순위로 읽히게 쓰지 마라 — 100% 돌파 **순서**가 두 번째라는 뜻이다.
 *   ⑦ 「레인지가 강·약으로 쪼개졌을 때」의 링크는 **⑩**(3bet-pot-low-board)이지 ⑨가 아니다.
 *   ⑧ 「A는 공격한 쪽이 **압도적으로** 많이」로 과장하지 마라 — SB 95 대 BB 72로 **약 1.3배**다.
 */
export const POST: Post = {
  slug: "ace-paired-board-strategy",
  title: "Two Aces on the Flop and the Bet Jumps to 80%",
  seoTitle: "Trips on an Ace-Paired Board: Why It Bets 80% — GTO",
  // 158자 (EN 하드리밋 160)
  desc: "One paired flop gets a 3% bet and another gets 80.1%. On A-A-6 the ace belongs to the raiser — and the trips that beat you are missing from the caller's range.",
  tldr: "After a small-blind open and a big-blind call, the A♠A♥6♦ flop gets a bet 80.1% of the time (79.6% at a third of the pot, 0.5% at three quarters, check 19.8%). That is the reverse of the 3.0% seen on the 6♣6♦3♥ paired board — and what split them is not that the board paired, but **whose card** paired. Hands making trips with an ace run 88 combos to 66, and 16 of those combos, A-K and A-Q, are absent from the calling range entirely.",
  category: "strategy",
  date: "2026-08-21",
  updated: "2026-08-21",
  readTime: "10 min",
  emoji: "🅰️",
  image: "/images/gto-sb-paired-ace-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver on an A-A-6 flop, the small blind's grid almost entirely orange for the bet",
  keepImagesInBody: true,
  tags: [
    "trips poker",
    "what are trips in poker",
    "ace paired board",
    "poker bluff frequency",
    "gto solver",
  ],
  content: `
People will tell you bets do not go in on paired boards. On the [6-6-3 paired board](/en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp") earlier in this series the player acting first bet just **3.0%**.

This is a paired board too. A♠ A♥ 6♦. And the small blind bets **80.1%**.

The conditions are unchanged from the previous two spots — a 6bb pot, a 97bb effective stack, the small blind as the opener. One board ago, from that same seat, [it bet only 9.6%](/en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp"). This spot is the other end. Every number below comes from the [HoldemMaster GTO solver](/en/solver).

![HoldemMaster GTO solver on an A-A-6 flop, the small blind's grid almost entirely orange for the bet](/images/gto-sb-paired-ace-oop-en.webp "A-A-6 blind vs blind · the small blind's flop strategy — orange is the 79.6% bet, the green stripes the 19.8% check")

:::stripe
Spot | SB opens 3bb → BB calls (blind vs blind)
Flop | A♠ A♥ 6♦ (paired · no flush draw possible)
Pot · stack | Pot 6bb · effective stack 97bb · SPR 16.2
Result | SB bets **80.1%** — against 3.0% on the 6-6-3 paired board
:::

> **Quick answer**
> On the A-A-6 paired board the small blind's first action is **bet 80.1%, check 19.8%** (79.6% of it at a third of the pot). That is the reverse of the 3.0% on 6-6-3, and what split them is **not that the board paired but whose card paired.** Hands making trips with an ace run **88 combos to 66**, and of those, **A-K and A-Q — 16 combos — do not exist in the big blind's calling range at all.** They were three-bet before the flop.

## What conditions produced these numbers?

★**Same as the previous two spots, except there are two bet sizes.** Spots ⑪ and ⑫ had only a third of the pot; this one has three quarters open alongside it.

| Item | This spot ⑬ | ⑫ 7♦6♦5♣ | ⑪ K♥T♦6♠ |
|---|---|---|---|
| Preflop | SB opens 3bb → BB calls | same | same |
| OOP (acts first) | SB — the opener | same | same |
| Pot · effective stack | 6bb · 97bb | same | same |
| SPR | 16.2 | same | same |
| **Bet sizes** | **Two: about 33% and 75% of the pot** | One, 33% | One, 33% |
| SB range | 503 combos | 572 combos | 538 combos |
| **Flop** | **A♠ A♥ 6♦** | 7♦ 6♦ 5♣ | K♥ T♦ 6♠ |
| Rake | Not modeled | Not modeled | Not modeled |
| Checked | 2026-08-08 (study spot result) | 2026-08-08 | 2026-08-08 |

The 6bb pot is ==the SB's 3 plus the BB's 3==, the effective stack is ==100 − 3 = 97bb==, and the SPR is ==97 ÷ 6 = 16.2==. All three spots use the same range, and **only the combo count shrinks by what the board takes out** — two aces on the flop delete a great many ace combinations, which is why 503 is the smallest of the three.

The display is in **big blinds** — bets read as "Bet 4.5bb (75% pot)", and EV reads as "EV (bb)".

## How often does the small blind bet here?

**79.6% at the small size, 0.5% at the large one, and 19.8% checks.** The bets add to 80.1%, and 403 of 503 combos go in.

| The small blind's first action | Frequency | Combos |
|---|---|---|
| Bet 4.5bb (75% pot) | 0.5% | 2.7 |
| Bet 2bb (33% pot) | **79.6%** | 400.4 |
| Check | 19.8% | 99.8 |

Lined up across the series, you can see where this one lands.

| Spot | Who is out of position | OOP bet frequency |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1–1.9% |
| **6♣6♦3♥ paired board (⑥)** | BB caller | **3.0%** |
| 6♠5♥2♦ low (⑦) | BB caller | 3.2% |
| 7♦6♦5♣ blind vs blind (⑫) | SB opener | 9.6% |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ connected (④) | BB caller | 23.7% |
| K♥T♦6♠ blind vs blind (⑪) | SB opener | 67.4% |
| **A♠A♥6♦ paired board (⑬)** | **SB opener** | **80.1%** |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB three-bettor | 98–100% |

**The two paired boards sit near opposite ends of the table.** Which is to say the label "paired board" does not decide a strategy.

## Two paired boards, 3.0% and 80.1% — what split them?

**Not the number of trips but the *rest of the range*.** The 6-6-3 spot is the decisive counterexample here, because there **the player acting first held more trips** and still bet 3.0%.

| | 6♣6♦3♥ (⑥) | A♠A♥6♦ (⑬) |
|---|---|---|
| Who acts first | BB — the caller | **SB — the opener** |
| Share of trips | BB 5.3% vs BTN 4.0% — **the player betting first has more** | SB 17.5% vs BB 13.1% — the player betting first has more |
| OOP equity | 47.2% | **56.2%** |
| OOP EQR | 83.7% | **104.1%** |
| OOP bet frequency | **3.0%** | **80.1%** |

On 6-6-3 the big blind had defended cheaply with hands the button never opens — J-6s, T-6s, 9-6s — so its combos holding a six came to 26 (5.3%) against the opponent's 20 (4.0%). **And it still bet 3.0%.** Count every hand that puts something on top of the board pair and it runs **18.4% for the big blind against 20.3% for the button** — the button is ahead. What the big blind led was the one row, trips. And the remaining 81.6%, the "paired six plus a high card" fight, went the other way as well: ace-high 26.3% against 31.9%.

Here the rest goes the small blind's way too. King-high is 22.3% against 18.2%, and hands that missed entirely run 39.8% against 51.5% — **11.7 points more for the opponent.**

:::pull[What sets the betting frequency is not how many combos your top class has. It is whether your whole range is better than theirs.]:::

The ace is the card the preflop aggressor holds more of — in this spot 95 combos to 72, **about 1.3 times as many.** When that card lands twice on the flop, the top of the range and the rest of it tilt **the same way**, and that is when the betting frequency climbs to 80%.

## Who holds more trips?

**88 combos (17.5%) for the small blind, 66 (13.1%) for the big blind.** But **what is missing** matters more than the count. (The solver labels this class "Set/Trips" — it is what the table calls trips.)

![Range composition infographic comparing the small blind and big blind hand classes on an A-A-6 board](/images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · class-by-class composition — hands that missed run 39.8% against 51.5%")

| Class | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Quads | **0.2% (1 combo)** | 0.0% (0 combos) |
| Full house | 1.8% (9 combos) | 1.8% (9 combos) |
| Set/trips | **17.5% (88 combos)** | 13.1% (66 combos) |
| Two pair | **18.5% (93 combos)** | 15.4% (78 combos) |
| King-high | **22.3% (112 combos)** | 18.2% (92 combos) |
| No made hand | 39.8% (200 combos) | **51.5% (260 combos)** |

Three lines are the whole spot.

- **The big blind's trips contain no A-K and no A-Q.** Those get three-bet against a 3bb small-blind open rather than called. The upper trips the small blind holds alone are ==8 combos of A-K + 8 of A-Q + 6 of offsuit A-J = 22 combos==. Same trips, and the kicker fight is already decided.
- **Quads belong to the small blind alone.** With A♠ and A♥ on the board, the only aces left are A♦ and A♣, so A-A is **exactly one combo**. The big blind three-bets A-A and holds zero.
- **More than half of the big blind's range is nothing.** 260 combos (51.5%) missed. That is how large a share a single bet can fold out.

Only full houses are exactly level: both hold ==3 combos of 6-6 + 6 combos of A-6 = 9==. **Take that one cell away and every class above tilts to the small blind, while only the bottom — the misses — runs 11.7 points heavier for the big blind.**

Equity shows the result.

| Item | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | **56.2%** | 43.8% |
| EV (bb) | 3.51 | 2.49 |
| **EQR (equity realization)** | **104.1%** | 94.8% |

The pot is 6bb, so the small blind's share is ==6 × 56.2% = 3.372bb== against an actual EV of 3.51bb — that is ==3.51 ÷ 3.372 = 104.1%==. The two EVs add to ==3.51 + 2.49 = 6.0bb==, the pot exactly.

**Equity realization clears 100% with no position.** It is the **highest of the three blind-versus-blind spots** — ⑪ at 103.1%, ⑫ at 85.3%, this one at **104.1%**. It is the second of them to clear 100%, and the range edge being sharper here takes it a little past ⑪. (The three-bet pots also clear 100% out of position, at 106.9%–117.8% — that edge was built by three-betting.)

## Why is the large size almost never used?

**Because the edge is *wide* rather than *deep*.** The three-quarter-pot bet gets 0.5%, just 2.7 combos. In practice there is only one size.

The three-bet pots were the opposite. On the [8-5-2 low board](/en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp") the big blind used two thirds of the pot 97.8% of the time, because that range split roughly in half into **overpairs or ace-high** — a polarized shape. A range pulled to the extremes calls for a big size.

This spot is not that. The small blind's range runs **continuously** — trips 17.5%, two pair 18.5%, king-high 22.3%, misses 39.8%. With that shape, pushing the whole range in at a small size is worth more: fold out the opponent's 51.5% and that alone is profit, and when they do not fold the pot stays small enough that the 97bb behind is never at risk.

:::note[⚠ This study spot was solved with two size candidates, 33% and 75%. Add a smaller one — a fifth or a quarter of the pot — and the 79.6% could migrate there. Read it as "the small one of the sizes offered," not as "33% is the answer."]:::

## Which hands make up the 19.8% that checks?

**Not one class held back whole, but a slice from each.** Measured live on 2026-08-21, the pocket pairs check at **K-K 72.4%, Q-Q 66.2%, J-J 42.0% and T-T 21.6%** — so K-K and Q-Q lean check, but **T-T is already betting 78%.** The 99.8 checking combos cannot be summed up as "medium strength" either: **misses are the largest group at about 44%**, then king-high at about 27%, two pair about 17% and trips about 11%. The cells where green pools most thickly are **offsuit broadways** like Q-9o, Q-Jo, Q-To and J-9o. The cells holding an ace, and 6-6, are mostly orange.

The reason lies in **who calls you.** K-K makes two pair with the board's aces, but **there is little value to collect by betting it.** ⚠ Do not translate that into "the worse hands fold and only better trips call" — **this article's own table refutes it.** The big blind's 78 combos of two pair are seven ranks of pocket pairs (42) plus six-x (36), **all below K-K**, and its 92 combos of king-high are below it too; facing a third-pot bet, those 170 combos (33.7% of the range) do not all fold. Meanwhile the trips and full houses that beat K-K come to **75 combos (14.9%) — fewer.** The reason the value is thin is not that the weak hands all fold; it is that **that wide slice will call but will not follow you into a big pot** — two pair and king-high can tell they are behind K-K without much trouble, so the bigger you bet the more only trips remain. ⚠ For the record, **another ace on the turn or river does not flip K-K** — with A-A-A-6 on the board K-K becomes *aces full of kings*, and nothing in those 170 combos beats that card. Checking instead leaves room for the big blind's 260 missed combos to bluff, and then a call earns its keep — **on the assumption that the opponent mixes in bluffs.** ⚠ How often the big blind actually bluffs after a check is not in this calculation (the study spot ends at the first action on the flop); it is an interpretation drawn from range composition.

**That pairs with the trips going almost entirely into the bet.** The 88 combos holding an ace need value from the opponent's king-high and misses, so there is little reason to check. ⚠ "Entirely" is wrong, though — measured live on 2026-08-21, the **94 combos holding one ace** (88 trips plus the 6 combos of A-6 that make a full house) check between **0.1% and 26.0%, averaging 12.3%**, and **not one combo checks exactly 0%.** The mixing is steadiest where the ace is paired with a low card (A♣8♣ at 19.4%, A♣7♣ at 20.9%, and offsuit A-5 through A-2 averaging 20.1%).

## What changes at the table?

- **Do not turn "paired board means check" into a rule.** It is 3.0% on 6-6-3 and 80.1% on A-A-6. The test is not whether the board paired, and **not how many combos of that rank you hold either** — on 6-6-3 the big blind held sixes more heavily (5.3% against 4.0%) and still bet only 3.0%. The test is **whether your range *as a whole* is better than theirs.** The bet reached 80% here because the top and the rest tilted **the same way**.
- **With two aces out there, do not assume your ace is worthless.** If the opponent three-bets A-K and A-Q, the kicker fight is already leaning your way. **That does rest on them three-betting, though** — against a table that only ever calls with A-K and A-Q the premise collapses, so with a weakly kicked trips hand, bet but stay out of a big raising war.
- **Small size, high frequency.** When the range runs continuously, pushing wide at a third of the pot is better. The large size is the tool for [a range split into strong and weak](/en/blog/3bet-pot-low-board) — though even within three-bet pots the reason differs on [a board thick with draws](/en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp"), where a big bet is about holding the opponent at a bad price. **Note also that 80.1% is a heads-up calculation** — with more than one opponent still in, cut the bets from the missed hands sharply and narrow toward trips and two pair.
- **Do not bet K-K and Q-Q "because they are strong."** On this board they struggle to get called by anything worse. Checking to catch the opponent's bluffs is better. ⚠ That is **a judgment drawn from range composition**, not a value this series measured — the study spot shows only the frequency of the first action on the flop, and no node after a check is solved anywhere in the series. **It also assumes the opponent mixes in bluffs** — against someone who almost never does, a bet arriving after your check is usually an ace, and folding beats digging in.

:::readnext[Keep reading]
/en/blog/blind-battle-connected-board | Same Seat, Same Stack — and the Bet Falls from 67% to 9.6% | /images/gto-sb-connected-oop-en.webp
/en/blog/a-high-board-cbet | The Flop Where the Big Blind Checks 98% of the Time | /images/gto-srp-dry-ace-oop-en.webp
:::

## Check it yourself

Every figure here comes up if you open the [GTO solver](/en/solver) and hit **Study Spots → "Ace-Paired Board" → [⚡ View results]**. To play the same spot as a problem instead, open the [GTO Trainer](/en/solver) from the sidebar — it deals you a random hand, and once you pick an action it shows the mixed frequency and the **EV loss (bb)** of your choice. Your history stays in your own browser.

**Click back and forth with the 6-6-3 paired board.** Both are paired boards and the matrices are opposite colours. Work through the study spots once and one conclusion is left: look first not at **what board it is** but at **whose range this board attaches to**. Free, no install, no account.

**Q. What are trips in poker, and how do they differ from a set?**

A. Trips are made when the board shows two cards of the same rank and you hold one of them. On A-A-6 most hands holding a single ace qualify (**A-6 is not trips but a full house** — it pairs with the board's six as well), and in this spot that is 88 combos (17.5%) for the small blind and 66 (13.1%) for the big blind. A *set* is made the other way round, from a pocket pair with one more of that rank on the board. Note that 6-6 does make a set with the board's six here, but the board's pair of aces sits on top of it, so the final hand is a **full house**.

**Q. If you also bet with hands that missed, isn't that bluffing?**

A. Hand by hand, yes. But in GTO **bluffing is not "I am deceiving with this hand" — it is "what percentage of bluffs sits in my range."** The solver does not decide whether a hand is a bluff; it decides **the betting frequency of the whole range.** With 51.5% of the opponent's range having missed, the bet earns its keep, and when it does not fold them out, the small blind's 88 combos of trips collect. Value and bluff leave at the same size, so the opponent cannot tell them apart.

**Q. On a board like A-A-6, how likely is the opponent to hold an ace?**

A. In this spot, **72 of the big blind's 505 combos (14.3%)** — 66 combos of trips plus the 6 combos of A-6 that make a full house. With A♠ and A♥ on the board only two aces remain, so it is lower than it feels. The small blind, by contrast, holds **95 combos (18.9%)**: 88 trips, 6 of A-6 and 1 of A-A. The same board gives different answers depending on who attacked before the flop.

**Q. What is the conclusion running through this series?**

A. That **"acting first is a disadvantage" is only half true.** The big-blind caller in spots ① through ⑦ bet just 0.1%–23.7%, but from the same first-to-act seat the three-bettor in a three-bet pot bets 98%–100%, and the small-blind opener blind versus blind moves from 9.6% to 80.1% depending on the board. It is not the seat but **the relationship between range and board** that sets the frequency. You can click through every one of these spots yourself in the study spots of the [HoldemMaster GTO solver](/en/solver).
`.trim(),
};

export default POST;
