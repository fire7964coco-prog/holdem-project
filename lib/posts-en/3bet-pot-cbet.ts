import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑧ 영어판 — A♦K♠2♥ 3벳팟 (2026-08-20, T24 ②)
 *
 * ★★계산은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 * ★★**KO를 먼저 검수하고 쓴 첫 편이다** (spec §4-A-1, 2026-08-20 사장님 판정).
 *   KO ⑧은 적대 7렌즈 + 2차 교열로 **논거 30여 건**이 뒤집힌 뒤였다 — 그 결과를 그대로 옮겼다.
 *   🔴 아래 넷은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
 *   · 「미완성 핸드가 0%라서 체크가 0%」 → **주된 이유가 아니다.** ⑩편은 같은 14종 3벳 레인지·
 *     같은 SPR 4.0인데 852에서 A하이 48.2%인데도 체크가 2.0%다. 진짜 이유는 **BB의 상단 독점**.
 *   · 「큰 사이즈 두 번이면 올인」 → 66% 두 번 = 49.4bb(스택의 55.5%). **세 번이라야 끝난다.**
 *   · 「얕은 스택이라 작게 친다」 → SPR이 똑같이 4.0인 ⑨는 큰 사이즈 98.4%, ⑩은 97.8%다.
 *     사이즈를 정하는 건 스택 깊이가 아니라 **레인지의 모양**(콘덴스드 vs 폴라).
 *   · 「큰 사이즈 42.2% = 스택오프 핸드의 몫」 → 그 핸드는 36콤보(57.1%)다. 게다가 콤보가
 *     26.4로 **정수가 아니라서** 등급 분할이 아니라 **혼합 전략**이다.
 *
 * ▶ 🟢 **서치 — ⑥⑦와 달리 뱅크 ★후보가 살아남았다** (2026-08-20 라쿠 English/US 실측)
 *   ★**`poker spr` 480** — 13편 전체에서 가장 큰 키워드다. 단 12개월 −19.9%로 하락 중.
 *   🔴 **`poker spr` = `spr poker` = `spr in poker`는 24개월 배열이 완전히 같은 «한 클러스터»다.
 *      총합은 1,440이 아니라 480이다. 더하지 마라.**
 *   보조: **`what is spr in poker` 140**(자동완성 후보가 단 3개뿐인 깨끗한 질문형 → H2에 축어로) ·
 *     `spr poker meaning` 90 · `spr meaning poker` 50 · `effective stack poker` 30 ·
 *     `polarized range poker` 30(훅 축 최대 + 유일한 상승세) · `what does spr mean in poker` 20
 *   🔴 **`what is spr` 720은 포커가 아니다** — 자동완성이 spring water·sprinting·spreadsheet·
 *      spring boot다. CPC $14.4에 competition 1(비포커 광고). 2026-03의 1900 스파이크도 포커 무관.
 *   🔴 **`stack to pot ratio` 50은 12개월 −59.3%로 반토막**이다. 풀네임을 제목에 넣을 근거가 없다 →
 *      **철자는 `SPR`로 간다.**
 *   🔴 **`3bet pot` 축은 US 볼륨 10이 상한**이다(17개 변형 중 나머지 전부 0).
 *      그런데 **SERP는 꽉 차 있다** — GTO Wizard **IP·OOP 2부작** · Upswing OOP 1편 ·
 *      PokerCoaching **보드텍스처 3부작(하이카드 보드 포함 = 이 편과 같은 자리)**.
 *      **볼륨 0 + 강자 정면 → 제목 조준 금지.** 본문 H2로만 쓴다.
 *   🟢 **반대로 SPR 축 SERP는 전부 «용어사전·일반론»이다** — Upswing은 `/glossary/spr/` 한 장뿐,
 *      **GTO Wizard는 SPR 쿼리에 아예 안 나온다.** 「한 스팟의 실측 솔버 출력」이 통째로 빈자리다.
 *   ⚠ `spr poker calculator` · `spr poker chart` · `stack to pot ratio calculator`는
 *      **`/en/calculator`의 자리**다. 가져오지 마라.
 *
 * ▶ 카니발 (2026-08-20 전수)
 *   `lib/posts-en/`에 **SPR 주력 글 0편 · 3벳팟 주력 글 0편 · `condensed` 0건.**
 *   `holdem-3bet`은 H2 13개가 **전부 프리플랍**이고 `3bet pot` grep 0건이다 →
 *   카니발이 아니라 **«프리플랍은 저기, 플랍은 여기»로 갈라 붙일 최적 파트너**다.
 *   🔴 **차별화 필수 지점** — ①편(`a-high-board-cbet`)이 이미 A하이 보드에서
 *      「BB 레인지가 **capped**」를 썼다(L132 축어). ⑧도 A하이 보드라 그대로 겹친다.
 *      → ⑧은 **정반대 구조**임을 명시한다: SRP에서는 BB가 캡드였는데, 3벳팟에서는
 *        **BB가 상단을 독점하고 BTN이 캡드**다. 겹침을 대조로 바꾼다.
 *   🪶 `polarized`는 `holdem-3bet`의 「Linear vs. Polarized 3-Bet Ranges」가 프리플랍 층에서
 *      소유한다 → ⑧은 «플랍에서 콘덴스드 레인지를 상대한다»는 층으로만 쓴다.
 *   🔴 **2026-08-21 정정 — `polarized range poker` 태그를 ⑩(`3bet-pot-low-board`)에 넘겼다. 되돌리지 마라.**
 *      ⑧이 그 태그를 달고 있었지만 **⑧의 레인지는 폴라가 아니다** — 본문은 「아래가 잘린 레인지」로 쓰고,
 *      정작 `polarized`라는 단어를 쓰는 204줄은 **8-5-2(=⑩)를 가리킨다**("its range splits into
 *      overpairs and ace-high with nothing between, and a polarized shape bets big").
 *      즉 재배분이 아니라 **오태깅 정정**이다. 대체 태그는 `spr meaning poker`(US 50).
 *      🪶 204줄의 `polarized`라는 «단어»는 그대로 둔다 — ⑩을 가리키는 대조 문장이라 오히려 맞다.
 *
 * ▶ 수치 (§4-B/§4-B-2 정본 · 2026-08-20 라이브 재확인 드리프트 0)
 *   BB(OOP·3벳터): Bet 7.4bb **57.8%**(36.6) · Bet 14.9bb **42.2%**(26.4) · **Check 0.0%(0.0)** ·
 *     All 63.0 · EQ 68.9% · EV 16.99 · EQR 109.6%
 *   BTN(IP·콜러): All 130.0 · EQ 31.1% · EV 5.51 · EQR 78.7%
 *   등급 BB / BTN: Set 9.5(6) / 2.3(3) · Two Pair 14.3(9) / 6.9(9) · Top Pair 33.3(21) / 20.8(27) ·
 *     Second Pair 4.8(3) / 11.5(15) · Underpair 38.1(24) / 46.2(60) · **No Made Hand 0.0(0)** / 12.3(16)
 *   🔴 **백도어 플러시 15.9%는 쓰지 않는다** — 콤보 검산이 10 대 11로 갈렸고 KO 본문도 인용하지 않는다.
 *
 * §13 손 검산 (전부 통과):
 *   · 팟 22.5 = 3벳 11 + 콜 11 + 죽은 SB 0.5 · 스택 89 = 100 − 11 · SPR 89÷22.5 = **3.956 ≈ 4.0** ✓
 *   · 액션 합 57.8 + 42.2 + 0.0 = 100 · 콤보 36.6 + 26.4 = **63.0** ✓
 *   · EV 16.99 + 5.51 = **22.50 = 팟** · EQ 68.9 + 31.1 = 100 ✓
 *   · EQR 16.99÷(0.689×22.5) = **109.60%** · 5.51÷(0.311×22.5) = **78.74%** ✓
 *   · 사이즈 7.4÷22.5 = 32.9% ≈ 33% · 14.9÷22.5 = 66.2% ≈ 66% ✓
 *   · **BB 63콤보 전개**: AA 3(A♦ 보드) + KK 3(K♠ 보드) = 셋 6 · AK 9(3×3) = 투 페어 ·
 *     AQs·AJs·A5s·A4s 각 3 = 12 + AQo 9 = 탑 페어 21 · KQs 3 = 2번째 페어 ·
 *     QQ·JJ·TT·99 각 6 = 언더 페어 24 → **합 63** ✓ (KQo는 레인지 밖 = 매트릭스 회색)
 *   · **BTN 130콤보**: 22 3 + AK 9 + 27 + 15 + 60(QQ~33 10종×6) + 16 = **130** ✓
 *   · **3연벳이 스택을 정확히 비운다**: 14.9 → 34.5 → 39.6 = **89.0** ✓
 *     (턴 팟 22.5+14.9+14.9 = 52.3 · 52.3×66% = 34.5 · 잔여 89−14.9−34.5 = 39.6)
 *     두 번 합 49.4 ÷ 89 = **55.5%** · 등비 (1+2f)³ = 200.5÷22.5 = 8.911 → f = **0.5368 ≈ 54%** ✓
 *   · **SRP 대조**: 팟 5.5·스택 97.5에서 2/3씩 3연벳 = 3.667 + 8.556 + 19.963 = **32.2bb = 33%** ✓
 *   · MDF = 22.5 ÷ (22.5 + 7.4) = **75.25 ≈ 75.3%** ✓
 *   · BTN이 A나 K를 맞은 몫 = 20.8 + 11.5 + 6.9 + 2.3 = **41.5%** ✓
 *   · 스택오프 가능 콤보 = 6 + 9 + 21 = **36 = 57.1%**(> 큰 사이즈 42.2%) ✓
 *   · 족보: 보드 A♦K♠2♥에 페어가 없으므로 **AA·KK·22는 «셋»**이다(트립스 아님 — ⑥편 구분).
 *     AK = 투 페어 · AQ~A4 = 탑 페어 · KQs = 2번째 페어 · QQ~99 = 언더 페어 ✓
 *     완성 스트레이트 불가(A-K-Q-J-T는 홀카드 3장 필요) · 레인보우라 플러시는 백도어뿐 ✓
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "3bet-pot-cbet",
  title: "Nobody Checks This Flop",
  seoTitle: "Nobody Checks This Flop — What Poker SPR 4 Really Does",
  // 145자 (디코딩 기준 · EN 하드리밋 160)
  desc: "In this 3-bet pot the solver never checks — all 63 combos bet. Not because the range is strong, but because the caller has no pocket aces or kings left.",
  tldr: "On A♦K♠2♥ in a 3-bet pot the big blind bets 100% of the time. Checking is 0.0% — not one combo out of 63. In the seven earlier spots its default was to check, between 76.2% and 99.9% of the time. What flipped is not the board but the preflop action: the big blind three-bet instead of calling, so it owns the top of this flop while the button four-bet its pocket aces and kings away. And with an SPR of 4.0 there is no later street to defer to.",
  category: "strategy",
  date: "2026-08-20",
  updated: "2026-08-21",
  readTime: "12 min",
  emoji: "🔥",
  image: "/images/gto-3bp-ace-king-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for an ace-high 3-bet pot, the big blind's entire 13x13 grid colored for betting with check showing 0.0%",
  keepImagesInBody: true,
  tags: [
    "poker spr",
    "what is spr in poker",
    "effective stack poker",
    "spr poker meaning",
    "spr meaning poker",
    "gto solver",
  ],
  content: `
In the seven spots before this one, the big blind's answer was almost always to check. Even on the [9-8-7 flop](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp"), where leading mattered most, it only bet 23.7% of the time. Everywhere else it checked between 88.8% and 99.9%.

Here it does the opposite: **the big blind bets its entire range** — all 63 combos, every single time.

What changed is not the board. It is the preflop action: the big blind **three-bet** instead of calling, so the pot is 22.5bb instead of 5.5bb. That one difference flips the entire flop on its head. Every figure below comes from HoldemMaster's [free GTO solver](/en/solver).


:::stripe
Spot | BB three-bets → BTN calls (heads-up)
Flop | A♦ K♠ 2♥ (rainbow)
Pot · stack | Pot 22.5bb · effective stack 89bb · **SPR 4.0**
Result | BB bets 100% — check is 0.0%
:::

> **Quick answer**
> The big blind bets its entire range. The small size (7.4bb, 33% of the pot) is used 57.8% of the time and the large one (14.9bb, 66%) 42.2%. It is not because every hand is strong — 38.1% of the range is a pocket pair below the king. It is because **the button four-bet its pocket aces and kings away before the flop**, so the top of this board belongs to one player, and with an SPR of 4.0 there is no later street worth saving a check for.

## What conditions produced these numbers?

★**The conditions are different from the first seven spots.** The pot, the stack and the roles all changed, so the table comes first.

| Setting | This spot (3-bet pot) | ①–⑦ (single-raised pot) |
|---|---|---|
| Preflop | BTN opens → **BB three-bets to 11bb** → BTN calls | BTN opens 2.5bb → BB calls |
| OOP (acts first) | **BB — the three-bettor** | BB — the caller |
| IP | BTN — the caller | BTN — the opener |
| Pot | **22.5bb** | 5.5bb |
| Effective stack | **89bb** | 97.5bb |
| **SPR** | **4.0** | 17.7 |
| Bet sizes | Roughly 1/3 and 2/3 of pot | Roughly 33% and 75% (⑦ had one size) |
| Rake | Not modeled | Not modeled |
| Checked | 2026-08-20 | 2026-08-20 |

The 22.5bb pot is ==11 three-bet + 11 call + 0.5 dead small blind==, and the effective stack is ==100 − 11 = 89bb==.

## Is the check frequency really 0%?

**0.0%.** The combo column reads 0.0 as well, so none of the 63 combos checks — nothing is hiding under the rounding. Betting splits between two sizes instead: 57.8% takes the small one at 7.4bb and 42.2% the large one at 14.9bb. Across the seven single-raised pots before this, the big blind's default was the opposite in every single one.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Bet 7.4bb (33% pot) | **57.8%** | 36.6 |
| Bet 14.9bb (66% pot) | 42.2% | 26.4 |
| Check | **0.0%** | **0.0** |

(The solver's percentages and its combo counts are aggregated differently and do not divide exactly — ==36.6 ÷ 63 = 58.1%== against the 57.8% displayed. **The values above are quoted as the panel shows them.** The 0-combo result is unaffected.)

A 0.0% does not mean checking is forbidden. It means **every combo's checking EV came out below its betting EV in this tree, with these ranges.**

In the earlier spots the losing action still kept a scrap — 0.2%, 0.1%. Here the check does not even get that.

## Why doesn't a single combo check?

**Because the big blind owns the top of this board outright.** Three hands make a set on A-K-2, and it holds two of the three. When the player who has to act first also holds the best hand far more often, there is nothing a check protects that a bet does not protect better. The category table shows how far that runs.

| Category | BB (OOP) | Combos | BTN (IP) | Combos |
|---|---|---|---|---|
| Set | **9.5%** | 6 | 2.3% | **3** |
| Two pair | **14.3%** | 9 | 6.9% | 9 |
| Top pair (an ace) | **33.3%** | 21 | 20.8% | 27 |
| Second pair (a king) | 4.8% | 3 | **11.5%** | 15 |
| Underpair | 38.1% | 24 | **46.2%** | 60 |
| No made hand | **0.0%** | **0** | 12.3% | 16 |

(On screen the big blind has no "No Made Hand" row at all — a category at 0% is not drawn.)

Look at the top row. **Three hands make a set on A-K-2 — AA, KK and 22 — and the button holds only the last one.** (The solver's panel labels that row *Trips*. On a board with no pair on it, a pocket pair matching a board card is a **set** — the distinction is laid out in the [paired-board spot](/en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp").) The button four-bets its pocket aces and kings before the flop, so its set count is three combos against the big blind's six.

That is the whole spot. When your opponent almost cannot have the best hand, you can bet with the parts of your range that are not strong at all — and 38.1% of this range is a pocket pair *below* the king.

**"No made hand: 0.0%" is not the reason, though it is easy to think so.** The same three-bet range on a low board tells you otherwise: on the [8-5-2 flop](/en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp") later in this series, 48.2% of the big blind's range is ace-high with no pair at all — and it still checks only **2.0%**. Going from 0% air to 48% air moves the check by two points. What makes a check appear is not how much air you hold; it is whether the board turns against the three-bettor.

:::note[⚠ This is the mirror image of the [ace-high flop in a single-raised pot](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). There the big blind was the **capped** one — no AA, AK or AQ, because it would have three-bet them — and it checked 98.2%. Same ace-high texture, opposite seats: the player who three-bet is the player who keeps the top.]:::

## What is SPR in poker?

**SPR is short for stack-to-pot ratio: the effective stack divided by the pot at the start of the flop.** Here it is ==89 ÷ 22.5 = 4.0==, so the stack behind is only four times what is already in the middle. That is the number that makes a flop decision into a decision about the whole stack, because there is no longer enough room to put the question off.

| Situation | Pot | Effective stack | SPR |
|---|---|---|---|
| Single-raised pot (①–⑦) | 5.5bb | 97.5bb | **17.7** |
| Three-bet pot (this one) | 22.5bb | 89bb | **4.0** |

The number matters because it tells you **how many bets are left**, not how much money is left. Take the 66% size the solver offers here and run it down each street:

- Flop **14.9bb** → called, the pot is 52.3bb and 74.1bb remains
- Turn **34.5bb** → called, 39.6bb remains
- River **39.6bb** all in

**Three bets and it is gone: ==14.9 + 34.5 + 39.6 = 89.0==.** Two bets get you to 49.4bb, which is 55.5% of the stack — not all of it. If you want the three bets to land exactly on all-in with the same fraction each street, that fraction is ==about 54% of the pot==.

Run the same three bets in a single-raised pot and you have spent ==3.67 + 8.56 + 19.96 = 32.2bb==, a third of the stack. **That is the real difference between SPR 17.7 and SPR 4.0** — not the money, the number of decisions you still get to make. And when there is no later street to defer to, a check has nothing left to buy.

## Why is the smaller size used more often?

**Because of the shape of the range, not the depth of the stack.** All 63 combos here are a pair or better, so **the bottom of the range is gone entirely** and it never splits into "nuts or nothing." With no air to pair up with the large size, the whole range gets pushed toward the small one — which is why 57.8% of it goes out at a third of the pot. ("Condensed" is the usual label for a range with no bottom *and* no top; it does not fit here, because this range owns the top of the board outright — all six combos of sets.)

A-K-2 rainbow gives almost nothing to draw to, so there is no need to charge a draw either. Between the two, the range shape is what does the work.

⚠ **"Shallow stacks mean small bets" is not it.** Two later spots in this series sit at exactly the same SPR of 4.0 and fire the *large* size almost always — Q-T-7 at **98.4%** and [8-5-2](/en/blog/3bet-pot-low-board) at **97.8%** — for two different reasons. Q-T-7 is a wet board, so a big bet is what puts a price on the draws. 8-5-2 is dry like this one, but its range splits into overpairs and ace-high with nothing between, and a polarized shape bets big. Same stack depth, opposite sizing, and neither reason is the depth.

**And the large size is not "the strong hands' share" either.** Count the combos that can get a whole stack in — sets, two pair and top pair — and you get ==6 + 9 + 21 = 36 combos, 57.1%==, which is more than the 42.2% that bets large.

The giveaway is that **the combo counts are not whole numbers**: 26.4 large and 36.6 small. If whole categories were assigned to one size, both counts would be integers. **The same hand is mixing between the two sizes**, and 42.2% means "42.2% of the range" — not "a particular tier." Making the size unreadable is the point.

## What does the button actually have?

**Nearly half of its calling range — 46.2% — is a pocket pair with neither an ace nor a king in it** — so it walks straight into a board that has both.

![Range composition on an ace-high three-bet pot, the big blind holding every set combo while the button's range is bunched in middle pairs](/images/gto-3bp-ace-king-ranges-en.webp "A-K-2 three-bet pot · the big blind keeps the top of the board while the button's range bunches in the middle")

Underpairs are 46.2%, or 60 combos: QQ down to 33, ten pairs at six combos each. They cannot call two barrels on this texture.

One caveat worth naming: those 130 combos are what a **theoretically correct defense** looks like. Real opponents fold middle pocket pairs and call with A-Q, A-J and K-Q instead. Against that player the 46.2% is not there — so look at what your opponent actually called with before you take these numbers into a live game.

## How does the button respond to a third-pot c-bet?

**It is a hard spot to call all the way down.** The button's underpairs are blocked by both the ace and the king, and at an SPR of 4.0 there is not much distance left before the stack is gone.

⚠ *Which* bet is the all-in depends on the size. At two-thirds it is 14.9 → 34.5 → 39.6, exactly three. At the **7.4bb (one-third)** bet this section is about, three bets come to ==7.4 + 12.3 + 20.4 = 40.1bb==, only 45% of the stack. And the turn node does not exist in this solve — the study spot stops at the flop's first action, so everything from here is read off the range composition.

Facing 7.4bb into 22.5bb, denying a pure bluff any profit takes about ==22.5 ÷ (22.5 + 7.4) = 75.3%== of the range — the **minimum defense frequency**. But the button's hands that actually connected with A-K-2 add up to only ==20.8 + 11.5 + 6.9 + 2.3 = 41.5%==. 🪶 Note that the 2.3% of sets is **22** — it paired the deuce, not the ace or the king. Counting only the hands that paired an ace or a king gives **39.2%**.

⚠ **In this spot, though, the premise behind MDF does not hold.** MDF is the frequency that makes a **pure bluff with zero equity** indifferent — and the big blind's betting range contains **0.0% no-made-hand, not one combo.** Against a bet with no bluffs in it there is nothing to make indifferent, and both theory and practice point toward folding **more**, not less. So do not read the 41.5% as "therefore continue with middle pocket pairs." That the small size prices those 60 combos in is separately true, but the reason for the size is the **shape of the range** from the previous section; this is a side effect.

:::note[⚠ MDF simplifies the bet to a pure bluff. It only means something when the opponent actually has bluffs — where the betting range is a pair or better all the way down, as it is here, it does not apply at all. In practice also weigh how well a hand holds up on later streets.]:::

## Why is the EQR 109.6% when the big blind is out of position?

**Because a big enough range advantage outweighs position.** This is the first spot in the series where the out-of-position player realizes more than its equity — 68.9% against 31.1% is a different order of gap from the single-raised pots, where the out-of-position player ran **45.1% to 48.5%** against **51.5% to 54.9%**.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | **68.9%** | 31.1% |
| EV (bb) | 16.99 | 5.51 |
| **Equity realization** | **109.6%** | 78.7% |

In a 22.5bb pot, 68.9% equity is worth ==22.5 × 68.9% = 15.50bb==. The big blind actually collects **16.99bb**, and ==16.99 ÷ 15.50== is its equity realization: **109.6%**.

:::pull[Position magnifies an edge. It does not manufacture one.]:::

The button's 78.7% is not separate evidence of that — it is the same fact seen from the other side, since the two EVs add up to the pot, so one player's realization going above 100% forces the other's below it. What is worth looking at is the size of the gap. Across ①–⑦ the out-of-position player realized between **77.9% and 93.2%**; here it clears 100%, because everything the button folds lands in the big blind's stack. Why position is usually worth money is covered in [position play](/en/blog/holdem-position-play).

## What changes at the table?

- **Stop deciding whether to c-bet a three-bet pot — but only heads-up.** On an ace-high dry board where the three-bettor holds the top, the whole range bets, and the only question is the size. If a cold-caller comes along and three players see the flop, "bet everything" stops being true; drop the underpairs first for every extra player.
- **Count your SPR before the flop comes.** A bigger pot means fewer bets left, not less money. **SPR 4 is the band where three big bets finish the stack** — there is no fourth. Count the bets you have left, then pick the size.
- **★Betting the whole range is not the same as stacking off with the whole range.** 38.1% of what bets here is a pocket pair below the king. Even inside that group it splits: QQ beats more than half of the button's calling range and is a hand to check the turn with, while TT and 99 fold to a raise.
- **★Top pair splits by kicker.** Those 21 combos include **A5s and A4s** — hands three-bet as blockers, with the worst kicker there is. The range that calls off 89bb is narrow — **22 and A-K at its core**, with a strong top pair like A-Q attached depending on the opponent. **A-4 beats none of it.** The sets (AA, KK) beat all of it. **A-K sits in between**: it chops with the button's A-K and loses to 22, so "SPR 4, so it all goes in" holds unconditionally only for **AA and KK** — whether A-K belongs there depends on how wide the opponent calls.
- **★If the flop gets raised, the hand is over right there.** At SPR 4 a raise commits the rest of the stack. It is not a call-and-see-the-turn spot: decide to jam or fold right there — sets go in, low underpairs and weak-kicker top pairs go out. Two pair (A-K) depends on how wide the raise is: against a raising range of sets and A-K it is never ahead.
- **Do not carry "check 0%" to every three-bet pot.** What changes it is the board more than the range: the same three-bet range on [8-5-2](/en/blog/3bet-pot-low-board) checks 2.0%, and on a board that runs against the three-bettor a check appears for real. **"An ace and a king together" is the condition behind this zero.** How to build the three-bet range in the first place is in [3-bet strategy](/en/blog/holdem-3bet).

:::readnext[Keep reading]
/en/blog/low-board-check-raise | Neither Range Holds a Straight Here | /images/gto-srp-low-rainbow-oop-en.webp
/en/blog/paired-board-strategy | You Hold More Trips — and Still Check 97% | /images/gto-srp-paired-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), then go to **Study Spots → Ace-High Board, 3-Bettor's Edge → [⚡ View results]**.

Check the header first: **Pot 22.5bb · Stack 89bb**. Seeing those instead of the 5.5bb and 97.5bb of the earlier spots is this whole article in a single glance. Then look for the row that is not there: the Hands panel lists only **five** categories for the big blind, and the missing one is "No made hand". Above it, in the action strip, the check chip reads **0.0% / 0.0 combos**.

Then open the **GTO Trainer** in the sidebar: it deals you a hand using the actual range weights and grades your action in big blinds lost. Free, nothing to install, no account.

## FAQ

**Q. What does SPR mean in poker?**

A. It stands for stack-to-pot ratio. What it measures in practice is how many bets are left rather than how many chips — the same 100bb buy-in gives you 4.0 here and 17.7 in a single-raised pot, and those two numbers play nothing alike. Read it as the number of decisions you still own.

**Q. How many bets can you make at an SPR of 4?**

A. Three, and the third one is all in. Betting 66% of the pot each street runs 14.9 → 34.5 → 39.6bb, exactly the 89bb stack. Stop after two and you have 49.4bb in — a little over half. Pick a bigger size and you get there in two — which is the point: the size you choose decides how many decisions you still own.

**Q. Should the three-bettor always c-bet?**

A. On this board, yes — the solver checks 0.0%. But the condition is the board more than the range: the same three-bet range on 8-5-2 has 48.2% ace-high and still checks only 2.0%, while a board that favors the caller produces real checks. What creates this particular zero is an ace and a king arriving together, which strips the top of the range from the player who called.

**Q. Why does the button have no pocket aces or kings?**

A. This example's calling range does not contain them — most AA and KK four-bet instead. That is a preflop setting written into the tree, not something the solver worked out, and real solves sometimes keep a few in the calling range to protect its top. Change that and the set row moves with it.

**Q. Why is the small size used more than the big one?**

A. Because of the shape of the range — all 63 combos are a pair or better, so the bottom is gone and it never splits into "nuts or nothing," and a range like that bets small. **Not because the stack is shallow:** the [Q-T-7 spot](/en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") has the same SPR of 4.0 and uses the large size 98.4% of the time.

**Q. Do these numbers hold at my stake?**

A. Use them as a baseline when the conditions match. This solve allowed only two bet sizes, a third and two thirds of the pot, so in a game where overbets are in play the frequencies split differently. The same goes for a different three-bet range or stack depth, and no rake is included in the calculation.
`.trim(),
};

export default POST;
