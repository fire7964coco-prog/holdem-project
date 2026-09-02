import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑨ 영어판 — Q♥T♥7♠ 3벳팟 (2026-08-20)
 *
 * ★★계산은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 * ★★**KO를 먼저 검수하고 쓴 두 번째 편**(spec §4-A-1). KO ⑨는 2026-08-20에 적대 7렌즈 +
 *   2차 교열로 **핵심 메커니즘이 통째로 교체**된 뒤였다 — 그 결과만 옮겼다.
 *   🔴 아래 다섯은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
 *   · 「1/3이면 플러시 드로우만으로 수지가 맞고 2/3이면 무너진다」 → **산술로 거짓.**
 *     맨 FD 한 장 19.1%는 1/3의 요구값 19.8%에도 못 미치고, 두 장이면 35.0%로 2/3의 28.5%를 넘는다.
 *     게다가 **이 예제 BTN 레인지에 맨 FD는 0콤보**다(화면 Draws에 Flush Draw 행이 없다).
 *     → 축은 **콤보 드로우**다: 12아웃 한 장 **25.5%** < 2/3 요구값 **28.5%**.
 *     ⚠ **단 «최강 드로우»로 일반화하면 안 된다 — 아래 «2차 검수»가 그 부분을 뒤집었다.**
 *   · 「MDF 60.2%인데 완성 33.9%뿐 → 드로우는 접힐 수 없다」 → **과하다.**
 *     완성 33.9 + 언더페어 36.1 = **70%**라 드로우 없이도 60.2%를 넘는다.
 *   · 「EQR 117.8% = 큰 사이즈의 성과」 → **분모 효과.** BB 팟 몫은 ⑧ 75.5% → ⑨ **68.7%로 줄었고**
 *     EV도 15.46 < ⑧ 16.99다. **EQR이 높다고 더 좋은 스팟이 아니다.**
 *   · 「셋을 독점」 → **BTN 트리플이 9콤보로 BB의 6콤보보다 많다.** 독점은 오버 페어(16.4% 대 0)뿐.
 *   · 「사이즈를 나누는 목적 = 강·약을 다른 가격으로」 → ⑧이 **거짓으로 판정**한 명제. 혼합이 답이다.
 *
 * ▶ 🔴 **서치 — 뱅크의 ⑨ 배정이 필라와 충돌해 폐기했다** (2026-08-20 라쿠 English/US 실측)
 *   뱅크 §3 ⑨는 `poker c bet sizing (chart)`를 배정했는데, **`holdem-continuation-bet`이
 *   태그 `c-bet sizing` + H2 「How Much Should You C-Bet? (Sizing)」로 이미 소유**하고 있었다.
 *   ⑧의 「홀덤 SPR」과 **정확히 같은 사고**다 → 착수 시점 grep이 잡았다. [[absence-may-be-the-standard]]
 *   ★**`poker bet sizing` 110 · SEO난이도 8** — 주 키워드로 교체. 🔴 **`bet sizing poker`와 같은
 *     한 클러스터다**(15개 제출 → 14개 반환, 중복제거됨). **더하지 마라.** 12m −30% 하락 중.
 *   ★**`wet board poker` 50 · DA13** — 🔴 **`wet flop poker`는 볼륨 null.**
 *     ⑤⑥에서 확립한 「영어권은 board가 아니라 flop」이 **wet에서는 뒤집힌다.** 양쪽 다 재라.
 *   ★**`geometric bet sizing` 20 · DA18** — `lib/` 전체 grep **0건**의 빈자리이고,
 *     이 글이 실제로 (1+2f)³ = 8.911 → f = 53.7%를 계산한다. 전용 H2를 줬다.
 *   보조: `overbet poker` 40·DA10(FAQ) · `poker bet sizing strategy` 10·DA6 · `how much to bet in poker` 10·DA12
 *
 * ▶ 카니발 — 🔴 **c벳 필라가 «거의 같은 보드»에 정반대 결론을 이미 싣고 있다**
 *   `holdem-continuation-bet` L83 보드텍스처 표: **Q♥J♥7♣ 「Two-tone & wet」 → Caller-leaning ·
 *   "Polarize: big with value/draws, **check air**"**. 우리 보드는 Q♥T♥7♠이고 **에어까지 98.4% 벳**이다.
 *   → 둘 다 참이다(**SRP 대 3벳팟**). ⑧이 ①편의 「capped」와 겹쳤을 때처럼 **명시 대조**로 바꿨다.
 *   🪶 같은 투톤 브로드웨이의 SRP판이 ③편(`broadway-board-strategy`, Q♠J♦T♠)이라 **양방향 대조**가 가능하다.
 *
 * ▶ 수치 (§4-B/§4-B-2 정본 · 2026-08-20 `?lang=en` 라이브 재확인 — 드리프트 0)
 *   BB(OOP·3벳터): Bet 14.9bb(66%) **98.4%**(71.9) · Bet 7.4bb(33%) 0.7%(0.5) · Check 0.8%(0.6) ·
 *     All 73.0 · EQ 58.3% · EV 15.46 · EQR 117.8%
 *   BTN(IP·콜러): All 133.0 · EQ 41.7% · EV 7.04 · EQR 75.1%
 *   Hands BB: Trips 8.2 · Overpair 16.4 · Top Pair 20.5 · Underpair 16.4 · Ace High 38.4
 *     (**Second Pair 행이 화면에 없다 = 0**)
 *   Hands BTN: Trips 6.8 · Top Pair 20.3 · Second Pair 6.8 · Underpair 36.1 · Ace High 24.1 ·
 *     King High 3.0 · No Made Hand 3.0 (**Overpair 행이 없다 = 0**)
 *     🪶 KO는 마지막 둘을 「K 하이·미완성 6.0%」 한 행으로 합쳤다 — **EN도 합쳐 통일**(check:gto).
 *   Draws BB: Combo 2.7 · Flush 2.7 · Gutshot 24.7 · Backdoor 26.0 · No Draw 43.8 (**OESD 행 없음 = 0**)
 *   Draws BTN: Combo 3.0 · OESD 4.5 · Gutshot 22.6 · Backdoor 27.1 · No Draw 42.9 (**Flush Draw 행 없음 = 0**)
 *
 * §13 손 검산 (전부 재계산해 통과):
 *   · 팟 22.5 = 3벳 11 + 콜 11 + 죽은 SB 0.5 · 스택 89 = 100 − 11 · SPR 89÷22.5 = **3.956 ≈ 4.0** ✓
 *   · 액션 합 98.4 + 0.7 + 0.8 = 99.9(반올림) · 콤보 71.9 + 0.5 + 0.6 = **73.0** ✓
 *   · EV 15.46 + 7.04 = **22.50 = 팟** · EQ 58.3 + 41.7 = 100 ✓
 *   · EQR 15.46÷(0.583×22.5) = **117.86%**(표시 117.8) · 7.04÷(0.417×22.5) = **75.03%**(표시 75.1) ✓
 *   · 사이즈 7.4÷22.5 = 32.9% ≈ 33% · 14.9÷22.5 = 66.2% ≈ 66% ✓
 *   · 요구 에퀴티 1/3 = 7.4÷37.3 = **19.84%** · 2/3 = 14.9÷52.3 = **28.49%** ✓
 *   · 드로우 한 장: 콤보 12÷47 = **25.53%** · OESD 8÷47 = 17.02% · 거트샷 4÷47 = 8.51% ·
 *     맨 FD 9÷47 = **19.15%**(1/3 요구값 19.84%에 못 미친다) ✓
 *   · 두 장: 콤보 1−(35÷47)(34÷46) = **44.96%** · 맨 FD 1−(38÷47)(37÷46) = **34.97%** ·
 *     백도어 (10÷47)(9÷46) = **4.16%** ✓
 *   · MDF = 22.5 ÷ (22.5+14.9) = **60.16%** ✓ / BTN 완성 = 6.8+20.3+6.8 = **33.9%** ·
 *     완성+언더페어 = 33.9+36.1 = **70.0%**(60.2%를 넘는다 — 「드로우는 접힐 수 없다」가 거짓인 이유) ✓
 *   · 턴 라인 **14.9 → 34.5 → 39.6 = 89.0** ✓ (턴 팟 22.5+14.9+14.9 = 52.3 · 52.3×66% = 34.5 ·
 *     잔여 89−14.9−34.5 = 39.6). 턴 SPR = 74.1÷52.3 = **1.417 ≈ 1.4** ✓
 *     ⚠ 리버 39.6은 팟 121.3의 **32.6% ≈ 33%**라 「큰 벳 세 번」이 아니다
 *   · 지오메트릭: 최종 팟 = 22.5 + 2×89 = 200.5 · (1+2f)³ = 200.5÷22.5 = 8.911 →
 *     1+2f = 2.0732 → f = **53.66% ≈ 54%** ✓ (⑧편의 0.5368과 일치)
 *   · **BB 73콤보 전개** (보드 Q♥T♥7♠ 블로커 반영 · 3벳 레인지 14종은 ⑧과 동일):
 *     트리플 6 = QQ 3(Q♥ 보드) + TT 3(T♥ 보드) ※77은 레인지 밖 ·
 *     오버페어 12 = AA 6 + KK 6 · 탑페어 15 = AQs 3 + AQo 9 + KQs 3(Q♥가 빠져 Q는 3장) ·
 *     언더페어 12 = JJ 6 + 99 6 · A하이 28 = AK 16 + AJs 4 + A5s 4 + A4s 4 → **합 73** ✓
 *   · **BB 드로우 전개**: 콤보 2 = A♥K♥·A♥J♥(하트 FD + A-K-Q-J-T 거트샷 겸함, 12아웃) ·
 *     플러시 2 = A♥5♥·A♥4♥ · 거트샷 18 = (AK 16 − A♥K♥) + (AJs 4 − A♥J♥) = 15 + 3 ·
 *     백도어 19 · 없음 32 → **합 73** ✓
 *     ★AK와 AJ는 목표가 같은 A-K-Q-J-T인데 **필요한 카드가 다르다**(AK는 J, AJ는 K).
 *       JJ·99·KQs는 두 장이 필요해 드로우가 아니다 ✓
 *   · **BTN 133콤보 검산**: 9 + 27 + 9 + 48 + 32 + 4 + 4 = **133** ✓
 *     (6.8%×133 = 9.04 · 20.3% = 27.0 · 36.1% = 48.0 · 24.1% = 32.1 · 3.0% = 4.0 각각)
 *   · 족보: 보드 Q♥T♥7♠에 페어가 없으므로 **QQ·TT·77은 «셋»**이다(화면 패널 라벨은 `Trips`) ·
 *     하트 2장 = **투톤** ✓ · Q-T는 J 한 장이 빠진 연결 ✓ · 플랍 완성 스트레이트 불가 ✓
 *
 *
 * ═══ 2026-08-20 2차 검수 (적대 3렌즈 + 2차 교열 2편) — 되돌리지 마라 ═══
 * 🔴 **«이 보드의 최강 드로우 = 12아웃»이 거짓이었다.** 딜러 렌즈와 검산 렌즈가 **독립으로 수렴**했고
 *    라이브 전수 스크레이핑으로 확정했다 — BTN 133콤보를 가상 스크롤 끝까지 긁어(All 133.0과 일치)
 *    하트 2장 핸드를 뽑으면 **A♥K♥ · A♥J♥ · K♥J♥ · 9♥8♥ 정확히 4콤보**(= Combo Draw 3.0% × 133).
 *    · A♥K♥ · A♥J♥ = 플러시 + 거트샷(J / K) → 9 + 3 = **12아웃** = 25.5%
 *    · **K♥J♥ · 9♥8♥ = 플러시 + 양방**(A·9 / J·6, 하트 2장 중복 제외) → 9 + 6 = **15아웃**
 *      ==15 ÷ 47 = 31.91% > 2/3 요구값 28.49%== → **2/3 가격을 넘긴다**
 *    ✅ 교차검산 3중으로 잠긴다: OESD 6콤보 = KJs·98s의 **나머지 세 무늬** 3+3 ·
 *       거트샷 30 = AK 15 + AJ 15(각 16 − 하트하트 1) → A하이 32를 정확히 채운다 ·
 *       드로우 합 2+2+6+30 = **40콤보 = 133의 30.1%**(본문의 「진짜 드로우 30.1%」와 일치)
 *    🪶 원인: **BB의 콤보 드로우 구성(12아웃)을 BTN 칸에 전가**했다. §13 게이트는 원리상 못 잡는다.
 * 🔴 **분모는 133이 아니라 «드로우 40콤보»다.** 「133콤보 중 2개」로 쓰면 완성 핸드까지 가격에서
 *    밀려나는 것처럼 읽혀, 세 줄 뒤 「완성 33.9% + 언더페어 36.1% = 70%가 MDF를 나눠 받는다」와 충돌한다.
 * 🔴 **「1/3은 모든 드로우가 넘는 가격」도 거짓이다.** 1/3(19.84%)을 넘는 건 **4콤보**뿐이고
 *    OESD 17.0% · 거트샷 8.5%는 못 넘는다. 「every draw clears 19.8%」로 되돌리지 마라.
 * 🔴 **84.1%(AK2 「드로우 없음」)를 뺐다** — ⑧편이 백도어 15.9%를 「콤보 검산 10 대 11」로 금지했는데
 *    AK2는 레인보우라 두 값이 여집합이다. 대신 «레인보우 = 플러시 드로우 불가 + BB 전 레인지 페어 이상»으로 썼다.
 *    ⚠ **「스트레이트 드로우도 불가능」이라고 쓰면 안 된다** — QJ는 T 한 장, 45는 휠 거트샷이다(2차 교열이 잡음).
 * 🔴 즉시 오즈만으로 값매기던 것을 바로잡았다(두 장 54.1 / 45.0 / 31.5 / 16.5% + 포지션·뒷돈·레이즈).
 *    ⚠ OESD 두 장 31.5%는 2/3 요구값을 넘으므로 **표의 ❌(한 장 기준)와 헷갈리지 않게 «한 장/두 장»을 명시할 것.**
 * 🔴 MDF 60.2%에 「순수 블러프 가정」 단서(:::note) · 레이즈 대응에 탑 페어 자리 · 하트 턴 양면 서술 추가.
 * 🪶 본문에 **🔴 이모지를 쓰지 마라** — 이 레포에서 헤더 주석 전용 마커다(★·⚠·🪶만 본문에 쓴다).
 *
 * §13 추가 검산 (2차):
 *   15아웃 한 장 15÷47 = 31.91% · 두 장 1−(32÷47)(31÷46) = **54.12%** ✓
 *   OESD 두 장 1−(39÷47)(38÷46) = **31.45%** · 거트샷 두 장 1−(43÷47)(42÷46) = **16.47%** ✓
 *   BB A하이 28 = 하트2장 4 + 하트1장 6 + 하트0장 18 → 본문 「24콤보」는 «하트 2장이 아닌» 것이다
 *   (「하트가 없는」이라고 쓰면 18이라 틀린다 — 2차 교열이 잡았다)
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "3bet-pot-bet-sizing",
  title: "Two Sizes Offered, One Size Used",
  seoTitle: "98.4% Bet One Size — Poker Bet Sizing on a Wet Board",
  // 156자 (디코딩 기준 · EN 하드리밋 160)
  // 🔴 「breaks the best draw」로 되돌리지 마라 — 15아웃 2콤보가 2/3 가격을 넘는다(헤더 2차 수술 참조).
  desc: "The solver had two bet sizes on this two-tone flop and put 98.4% of its range into one. Two thirds of the pot is the price that breaks 38 of 40 draws.",
  tldr: "On Q♥T♥7♠ in a 3-bet pot the big blind bets two thirds of the pot (14.9bb) 98.4% of the time. The small size gets 0.7% and checking 0.8% — together barely one combo out of 73. One board earlier, on A♦K♠2♥, the same range split its sizing 57.8/42.2. What collapsed the split is not strength but price. On a board this wet the size is decided by what it costs the caller to keep drawing, and the small bet does not charge enough.",
  category: "strategy",
  date: "2026-08-20",
  updated: "2026-09-02",
  readTime: "12 min",
  emoji: "💧",
  image: "/images/gto-3bp-dynamic-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver on a Q-T-7 two-tone three-bet pot, the big blind's 13x13 grid almost entirely one color with the two-thirds size reading 98.4%",
  keepImagesInBody: true,
  tags: [
    "poker bet sizing",
    "wet board poker",
    "geometric bet sizing",
    "overbet poker",
    "how much to bet in poker",
    "gto solver",
  ],
  content: `
One board earlier the big blind bet its entire range on [A♦K♠2♥](/en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp") and split the sizing almost down the middle — 57.8% small, 42.2% large.

This flop is Q♥ T♥ 7♠. Two hearts, and only the jack missing between the queen and the ten. **Far more draws, and the split disappears:** two thirds of the pot takes ==98.4%==, and the small size takes 0.7%.

"Bet big on wet boards" is advice everybody has heard. What nobody mentions is how extreme it gets. Every number below comes from HoldemMaster's [free GTO solver](/en/solver).


:::stripe
Spot | BB three-bets → BTN calls (heads-up)
Flop | Q♥ T♥ 7♠ (two-tone, connected)
Pot · stack | Pot 22.5bb · effective stack 89bb · SPR 4.0
Result | Two thirds of pot 98.4% — the split collapses
:::

> **Quick answer**
> The big blind bets **14.9bb, two thirds of the pot, 98.4% of the time**. The small size at 0.7% and the check at 0.8% are effectively zero, not a strategy you can act on. The reason is the price. A third of the pot asks the caller for about ==19.8%== equity, which the button's four flush-draw combos clear easily. Two thirds asks for about ==28.5%==, and of the button's **40 draw combos only two still clear it** — the twelve-out combo draws that sailed past the small size no longer get there. On A-K-2 the sizing split instead because 63 combos were all a pair or better — a range with its bottom cut off, and no draws to charge.

## What conditions produced these numbers?

**Same three-bet pot as the previous board — only the flop changed.** The big blind three-bet to 11bb, the button called, and the two of them see Q♥T♥7♠ with 22.5bb in the middle and 89bb behind. Those two figures are the whole difference between this series' single-raised pots and its three-bet pots.

| Setting | Value |
|---|---|
| Preflop | BTN opens → **BB three-bets to 11bb** → BTN calls |
| OOP · IP | OOP = BB (the three-bettor) · IP = BTN (the caller) |
| Flop | Q♥ T♥ 7♠ — two hearts, so **two-tone** |
| Pot · stack | Pot 22.5bb · effective stack 89bb (**SPR 4.0**) |
| Bet sizes offered | About a third (7.4bb) and two thirds (14.9bb) of the pot |
| Rake | Not modeled |
| Checked | 2026-08-20 |

The 22.5bb pot is ==11 three-bet + 11 call + 0.5 dead small blind==, and the effective stack is ==100 − 11 = 89bb==. The solver reports in big blinds throughout, and each bet is shown as an amount and a pot fraction together.

## Does the range really use only one size?

**Effectively, no — it uses one.** 71.9 of the 73 combos take the two-thirds size, while the small bet and the check divide 1.1 combos between them. Both sizes were open in the tree and the solver declined one of them, so this is a choice rather than a restriction.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Bet 14.9bb (66% pot) | **98.4%** | 71.9 |
| Check | 0.8% | 0.6 |
| Bet 7.4bb (33% pot) | 0.7% | 0.5 |

Those combo counts are not whole numbers because they are **weighted by frequency**, not assigned: a few hands mix a tiny slice of checking and small betting into an otherwise pure large bet. Below one percent you cannot separate a real strategy from solver convergence noise, so read these as zero rather than as instructions. (Only the 0.1 percentage point missing from the action total is actual rounding.)

Put the two three-bet pots side by side and they look like different games.

Both rows are three-bet pots at SPR 4.0 running the same 14-hand three-bet range.

| Flop | A third | Two thirds | Check |
|---|---|---|---|
| A♦K♠2♥ dry rainbow | **57.8%** | 42.2% | 0.0% |
| **Q♥T♥7♠ two-tone, connected** | 0.7% | **98.4%** | 0.8% |

## Why does a wet board want one big size?

**Because poker bet sizing is set by what the opponent can afford to call with, not by how strong your own hand is.** Count the draws the button can hold, price each of them against the two sizes in the tree, and the choice makes itself. On a dry board that count is close to zero, which is why the small size survives there instead.

| Draw | BB (three-bettor) | BTN (caller) |
|---|---|---|
| Combo draw | 2.7% | 3.0% |
| Flush draw | 2.7% | — |
| Open-ended straight draw | — | **4.5%** |
| Gutshot | **24.7%** | 22.6% |
| Backdoor flush | 26.0% | 27.1% |
| No draw | 43.8% | 42.9% |

**Counting only real draws, both sides sit at 30.1%** — the big blind from 2.7% combo, 2.7% flush and 24.7% gutshot; the button from 3.0% combo, 4.5% open-ended and 22.6% gutshot.

🪶 Backdoor flushes are excluded on purpose. It takes runner-runner hearts, and that lands only ==(10 ÷ 47) × (9 ÷ 46) = about 4.2%== of the time — not something a bet size can charge for. And the draw table is a **separate axis from the made-hand table** — an overpair with one heart lands in the backdoor row too. On the [dry king-high flop](/en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp") the same row read 72.2% "no draw" for the big blind and 77.7% for the button. Different planet.

Bet a third of the pot, 7.4bb, and the caller needs ==7.4 ÷ (22.5 + 7.4 + 7.4) = about 19.8%== to continue. Here is what that price buys, measured one card at a time.

| Draw the button can hold | Combos | Outs | Next card | vs 1/3 (19.8%) | vs 2/3 (28.5%) |
|---|---|---|---|---|---|
| Flush plus open-ender — K♥J♥, 9♥8♥ | 2 | **15** | ==15 ÷ 47 = 31.9%== | ✅ | ✅ |
| Flush plus gutshot — A♥K♥, A♥J♥ | 2 | 12 | ==12 ÷ 47 = 25.5%== | ✅ | ❌ |
| Open-ended straight — K-J and 9-8 in the other suits | 6 | 8 | ==8 ÷ 47 = 17.0%== | ❌ | ❌ |
| Gutshot | 30 | 4 | ==4 ÷ 47 = 8.5%== | ❌ | ❌ |

**Of the button's 40 draw combos, two thirds prices out 38.** K♥J♥ and 9♥8♥ pair a flush draw with an open-ender, and fifteen outs clears **any size in this tree on immediate odds** — but that is ==2 out of 40==, and ⚠ **the outs are not clean.** The big blind holds exactly four two-heart combos — A♥K♥, A♥J♥, A♥5♥, A♥4♥ — and **every one of them contains the A♥** (the queen of hearts is on the board, so A♥Q♥ and K♥Q♥ cannot exist). The button's king-high and nine-high flush draws are chasing nine hearts against a range whose flushes are **all nuts**, and at an SPR of 4 a heart on the turn is a stack decision — reverse implied odds at their sharpest. Drop to a third of the pot and the number clearing the bar doubles to **four**, while the 30 gutshots behind them get a far cheaper look at the turn. (Made hands are a separate question: they continue on value, not on price.)

⚠ **The column above prices one card. A draw that needs both is a different question — and it pays twice.** Seeing both cards instead of one takes the fifteen-out draw to ==about 54.1%== and the twelve-out draw to ==about 45.0%==; the eight-out straight draw reaches ==31.5%== and even a gutshot gets to ==16.5%==. The caller also has position, a stack of 74.1bb behind, and the option to raise. **The big size puts a price on all of it.**

One step further, though: **the caller cannot simply fold everything either.** Facing 14.9bb into 22.5bb, denying a pure bluff its profit takes ==22.5 ÷ (22.5 + 14.9) = 60.2%== of the range — the minimum defense frequency. The button's genuinely made hands add up to only **33.9%** (6.8 trips, 20.3 top pair, 6.8 second pair).

🪶 Filling 60.2% does not need the draws at all, though — **33.9% made plus 36.1% underpairs is already 70.0%.** Even if all 38 priced-out draw combos fold, 71.4% of the range remains, comfortably clear. What the big size really does, then, is less "chase the draws away" and more **make the middle of the button's range pay badly to stay** — those underpairs put the money in surrounded by two overcards and every draw on the board.

:::note[⚠ MDF treats the bet as a pure bluff holding no equity of its own. Most of what bets here is not that — 24.7% of the big blind's range is a gutshot, and a gutshot that gives up still had real equity when it fired. Treat 60.2% as a way to think about defending, not a quota to fill.]:::

🪶 Do not compress this into "a flush draw calls anyway." A bare flush draw is nine outs, ==9 ÷ 47 = 19.1%==, which does not even clear the small size's 19.8% — and **this button range holds zero bare flush draws** (the dash in the comparison table). It has exactly four two-heart hands, and every one of them carries a straight draw as well — two a gutshot, two an open-ender — which is why all four sit in the combo-draw row instead. That a bare flush draw reaches ==about 35.0%== by the river is true, and beside the point here.

For a broader look at how to count outs and price draws, see [drawing odds](/en/blog/holdem-drawing-odds) and [pot odds](/en/blog/holdem-pot-odds).

:::pull[Your hand does not choose the size. What your opponent can afford to call does.]:::

:::note[⚠ Same texture, opposite conclusion — and both are right, because the seats are swapped. In a **single-raised pot** the top of a two-tone broadway flop belongs to the preflop raiser, and the big blind, who only called, checks it almost every time — on [Q♠J♦T♠](/en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp") it checks 99.9%. Standing advice like "bet big on wet boards, and polarize" in [the c-bet guide](/en/blog/holdem-continuation-bet) is written for the raiser's seat, not the caller's. **The three-bet is what swaps them.** Here the big blind is the one holding the range that connects, so it is the one betting — with everything. Texture alone never settles this; read the preflop action first.]:::

## What is geometric bet sizing?

**Geometric sizing means picking one pot fraction and repeating it every street so the last bet lands exactly on all-in.** With a 22.5bb pot and 89bb behind, the final pot after three bets and three calls has to be ==22.5 + 2 × 89 = 200.5bb==, so the pot must grow by ==200.5 ÷ 22.5 = 8.91 times== across three streets. That works out to **about 54% of the pot, three times.**

The size the solver actually offers here is bigger than that, and it still fits:

- Flop **14.9bb** → called, the pot is 52.3bb and 74.1bb is behind
- Turn **34.5bb** → called, 39.6bb is behind
- River **39.6bb** all in

**==14.9 + 34.5 + 39.6 = 89.0==.** Three bets and the stack is gone. That last one is 39.6 into a pot of 121.3 — only ==about 33%== — so this is not "three big bets"; it is two big ones and whatever happens to be left.

**And far fewer hands can plan that line than fire the first bet.** 98.4% bets the flop; on strength alone the candidates for all three streets are the sets and overpairs, ==6 + 12 = 18 combos==, while the ace-high combos at the bottom are buying one street and looking again. ⚠ That is read off the categories, not solved: with no turn or river node here, this screen cannot confirm that the 18 go all the way, nor place the 15 top-pair combos on either side. **Top pair is exactly where the decision is**, so settle your own plan before you bet.

This is what an **SPR of 4.0** actually means. The number to watch is not the money behind, it is the count of bets remaining. Betting 14.9bb drops the turn SPR to ==74.1 ÷ 52.3 = 1.4==, at which point the next bet is a stack decision whether you meant it to be or not.

And it is why the big size is not only about this street. The by-the-river draw equities are all "if I get to see both cards" numbers, and at two thirds the caller has to pay twice more to see them. Starting small is what would have waived that cost.

## Why do hands with no pair bet here?

**Because 38.4% of the big blind's range is ace-high, and most of that is drawing to a straight.** Of the 73 combos, 28 are ace-high, and all 18 gutshots sit inside those 28. A hand with no pair is not the same as a hand with no equity: four outs to Broadway, two overcards, and whatever folds the bet wins outright.

| The 28 ace-high combos | Combos | What they are |
|---|---|---|
| AK | 16 | **One jack** makes A-K-Q-J-T. 15 are gutshots; A♥K♥ adds the flush and becomes a combo draw |
| AJs | 4 | Same A-K-Q-J-T, but it needs **a king**. 3 are gutshots; A♥J♥ is a combo draw |
| A5s · A4s | 8 | A♥5♥ and A♥4♥ are the two bare flush draws |

With a queen and a ten on the board, **A-K and A-J are chasing the same A-K-Q-J-T while holding nothing at all right now.** Fold them out and you win immediately; get called and you still have outs. That is enough reason to bet.

JJ and 99 are the opposite case. **Neither is drawing to anything.** Jacks plus the board's queen and ten still need two more cards — a king and a nine, or an ace and a king — to make a straight. They have a pair, which reads as strength, but the hand that can turn the whole thing around with one card is A-K.

## What does the button actually have?

**More than a third of it — 36.1% — is an underpair, so it walks into a board with two broadway cards holding a pair below both of them.** The rest splits into hands that connected with the queen, hands drawing at the hearts, and a small tail of nothing. One row in the table below does not mean what it appears to mean, and it is worth finding before reading on.

![Range composition on a Q-T-7 two-tone three-bet pot, with overpairs only on the big blind's side and second pair only on the button's](/images/gto-3bp-dynamic-ranges-en.webp "Q-T-7 three-bet pot · the overpair row belongs to the big blind, the second-pair row to the button")

| Category | BB (three-bettor) | BTN (caller) |
|---|---|---|
| Trips (a set) | **8.2%** | 6.8% |
| Overpair | **16.4%** | — |
| Top pair (a queen) | 20.5% | 20.3% |
| Second pair (a ten) | — | **6.8%** |
| Underpair | 16.4% | **36.1%** |
| Ace high | **38.4%** | 24.1% |
| King high or no pair | — | 6.0% |

Two rows carry the whole story, and one of them is a trap.

**The overpair row is a genuine monopoly:** 16.4% for the big blind, nothing for the button, because this example's calling range holds no **pocket** aces or kings at all. (Aces and kings themselves are all over it — 32 combos of A-K and A-J sit in the ace-high row.) That is a **preflop setting written into the tree**, not something the solver derived — real solves sometimes keep a few back to protect the top of the calling range.

**The trips row is not a monopoly, despite the bigger percentage.** 8.2% of 73 combos is 6; 6.8% of 133 combos is 9. **The button has more sets here, not fewer.** A smaller share of a wider range can still be the bigger count, and 133 against 73 is wide enough to flip it. (The panel labels this row *Trips*. On a flop with no pair on it, a pocket pair matching a board card is a **set** — the distinction is worked through in the [paired-board spot](/en/blog/paired-board-strategy).)

Second pair belongs to the button alone for a structural reason: **the big blind's three-bet range contains no hand with a single ten in it.** Pocket tens are in there, but those flop a set and move up a row.

Top pair is 20.5% against 20.3%. **The difference between these ranges is above and below it, never at it.**

## Why is the EQR 117.8% when equity is 58.3%?

**The big blind realizes 1.18 times its share of the pot while out of position.** That is higher than the 109.6% on A-K-2 — and **it does not mean this is the better spot.** The big blind's actual EV *fell*, from 16.99bb there to **15.46bb** here.

| | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 58.3% | 41.7% |
| EV (bb) | 15.46 | 7.04 |
| **Equity realization** | **117.8%** | 75.1% |

In a 22.5bb pot, 58.3% equity is worth ==22.5 × 58.3% = 13.12bb==, and collecting 15.46bb makes that ==15.46 ÷ 13.12 = 117.8%==.

The equity gap here is *narrower* than on A-K-2, where it ran 68.9% against 31.1%, and yet the realization figure is higher. **Part of that is the denominator shrinking.** Equity realization measures against your own share, so as equity approaches 50% the same edge shows up as a bigger multiple. ⚠ The larger part, though, is real: measured as EV above raw share, A-K-2 came to ==16.99 − 22.5 × 68.9% = about 1.49bb== and this board to ==15.46 − 22.5 × 58.3% = about 2.34bb==, so **the excess itself grew too.** What did shrink is the big blind's share of the pot: ==16.99 ÷ 22.5 = 75.5%== on A-K-2 against ==15.46 ÷ 22.5 = 68.7%== here — a higher EQR and "taking more of the pot" are different claims.

The button's 75.1% is not independent evidence of anything either — the two EVs sum to the pot, so one side clearing 100% forces the other below it. What the number rests on is the overpair monopoly, and what it buys is the ability to charge the button's middling hands a bad price. Why position is normally worth money is covered in [position play](/en/blog/holdem-position-play).

:::note[Every EQR in this series is quoted as the solver displays it. Dividing the rounded equity and EV yourself can land a decimal off — that is rounding, not disagreement.]:::

## What changes at the table?

Everything below assumes **heads-up, three-bet pot, SPR 4**. Add a cold-caller or shorten the stacks and "bet the whole range" stops being true.

- **Pick the size from the board before you look at your hand.** Choosing by hand strength means big when strong and small when weak, which is readable. The solver puts 98.4% through one size here.
- **In a three-bet pot on a board with two draw types, reach for the large size first.** A third of the pot announces "19.8% is enough to continue," and every flush draw on this board clears that with room to spare. ⚠ Do not file that away as "draws mean bet big," though — **this article quotes its own counterexample.** The [8-5-2 board](/en/blog/3bet-pot-low-board), where 78.3% of the range has no draw at all, also fires the large size 97.8% of the time, and there the reason is a **polarized range** rather than draws. Read draw density and range shape together. (In a single-raised pot the same texture is a different question — see the single-raised-pot note earlier.)
- **A-K is not a check on this flop.** With a queen and a ten out there it is a gutshot to Broadway. On a board where nothing attaches to it, **the same A-K can drift toward a check** — ⚠ but not as a rule: on the 8-5-2 low board quoted above the range fires the large size 97.8% with A-K inside it, so "does it have a draw" alone does not settle what A-K does, and neither solve reports a per-hand frequency for it. The rule to carry is not "A-K bets" or "A-K checks" but "look at the shape of your whole range on this board first."
- **★This is a flop answer, not a plan.** Betting 14.9bb takes the turn SPR to 1.4, so the next bet is effectively the stack. Decide before you bet whether this hand is going there. **A heart on the turn cuts both ways** — the button's four combo draws get there, but so do your own four, and every one of yours holds the A♥ — which also means that when you are the one holding it, two of the button's four cannot exist. What it does to a non-heart ace-high is subtler: the jack you were drawing to is not gone, it is **contaminated**, because a J♥ completes somebody's flush. One size cannot cover all three cases.
- **★Decide the raise response in advance.** Betting almost the whole range means almost the whole range gets raised, and at SPR 4 a raise is a question about the stack. Sets and overpairs go with it. **Ace-high without two hearts — 24 of those 28 combos — is the clearest fold**, since a bare gutshot is four outs. The four heart hands are the continuing candidates, and A♥K♥ and A♥J♥ are the strongest of them because they carry the gutshot too. Top pair is the real decision, and a flop-only solve does not answer it.
- **★From the button's seat, plan where the middle pairs stop.** 36.1% of the calling range is an underpair here. ⚠ Do not read the **MDF of 60.2% as a calling quota**, though — it is a ceiling derived from treating the bet as a pure bluff with no equity, and **45.1% of the big blind's betting range is already made** (8.2 trips, 16.4 overpairs, 20.5 top pair), so the true optimal defense leans below it — **the exact figure, though, is not in this solve.** **The turn is where those pairs go** — a second big bet folds most of them out, and calling the flop without having decided that is how stacks leak. (The turn node is not in this solve, so that is judgment, not a figure.)

:::readnext[Keep reading]
/en/blog/3bet-pot-cbet | The Flop Nobody Checks — SPR 4 in a 3-Bet Pot | /images/gto-3bp-ace-king-oop-en.webp
/en/blog/3bet-pot-low-board | Three Combos Hit This Flop — and It Still Bets 97.8% | /images/gto-3bp-low-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver) and go to **Study Spots → Dynamic Two-Tone Board → [⚡ View results]**.

Watch the action strip first: **Bet 14.9bb (66% pot) · 98.4% · 71.9 combos**, with the other two options both under one percent. Then switch the Player selector to **IP (BTN)** and look at what is missing from the panel — the button has **no Overpair row and no Flush Draw row at all.** A category at zero is simply not drawn, and those two absences are most of this article.

Then open the **GTO Trainer** in the sidebar. It deals a hand from the real range weights and grades your action by EV lost. Free, no install, no account.

A useful contrast is the ace-high board from the previous spot. A♦K♠2♥ is a rainbow, so **no flush draw exists on it for anybody**, and the big blind's whole range there is a pair or better. Here the "no draw" row reads only 43.8%. ⚠ The other 56.2% is not all *live*, mind — 26.0 points of it is a **backdoor**, needing runner-runner hearts and completing about 4.2% of the time. Real draws come to 30.1%. **That one line is not the full explanation, though** — the [8-5-2 flop](/en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp") later in this series has 78.3% "no draw" and still fires the large size 97.8% of the time. Draw density and range shape both have a vote.

## FAQ

**Q. How much should you bet in poker?**

A. Work from what the board gives your opponent, not from what you hold. On Q-T-7 with two hearts, where both a flush and a straight are live, the solver uses two thirds of the pot 98.4% of the time. On a dry A-K-2 the same range prefers a third of the pot at 57.8%. The test is always what price the hands that can still improve are being offered.

**Q. Why bet big on a wet board?**

A. To make the draws pay a losing price. Two thirds of the pot asks the caller for about 28.5% equity, and only two of its 40 draw combos get there — K♥J♥ and 9♥8♥, which hold fifteen outs and 31.9%. Everything else falls short, including the twelve-out combo draws at 25.5%. Drop to a third of the pot and the bar falls to 19.8%, which doubles the number of combos clearing it to four. Draws are not the only route to the large size, though — where the range splits into strong and weak with no middle, a [dry board like 8-5-2](/en/blog/3bet-pot-low-board) reaches 97.8% too.

**Q. What is geometric bet sizing?**

A. Choosing one pot fraction and repeating it every street so the final bet lands exactly on all-in. It matters most at a low SPR, where you are choosing how many decisions are left rather than how much money is. The arithmetic for this spot, and why the size the solver actually uses is bigger than the geometric one, is worked through above.

**Q. Should I use an overbet instead?**

A. This tree only offered a third and two thirds, so an overbet was never on the menu. Open one up and the 98.4% would likely redistribute between two thirds and the overbet, since the same logic — charge the draws the worst price you can — pushes in that direction. Treat the exact frequency as belonging to this tree, not as a universal number.

**Q. Can you bet A-K with no pair here?**

A. Yes. A single jack completes A-K-Q-J-T, so it is a gutshot, and 15 of the big blind's 18 gutshot combos are A-K. Folds win the pot now, calls still leave you outs. What makes it a bet is the connection to the board, not the two big cards.

**Q. What if my opponent calls draws regardless of price?**

A. Then the fold equity disappears, and these numbers stop describing your opponent — they assume optimal defense. Against a station, skew toward value and cut the bluffs, but keep the big size. That player is paying a bad price to draw, and the bad price is exactly where your money comes from.

**Q. Do these numbers transfer to my game?**

A. As a baseline when the conditions match. Change the three-bet range, the stack depth or the sizes in the tree and the frequencies move with them, and no rake is modeled here. The structure — a wet board in a three-bet pot at SPR 4 wants one large size — is the part that travels. Note that **the rank of the board is doing as much work as the wetness**: Q-T-7 is broadway enough that a three-bet range still connects with it, which is not true of every wet flop.
`.trim(),
};

export default POST;
