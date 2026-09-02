import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ⑫ 영어판 — 7♦6♦5♣ 블라인드전 (SB 오픈레이저 vs BB 콜러)
 *
 * ★★ «번역 + 5필드»다 (스펙 §4-A-3). 언어별로 바꾸는 것은
 *    seoTitle · desc · H2 문구 · FAQ 문항 선택 · 내부링크 대상 **다섯뿐**이고,
 *    본문·수치·전략 논거·**고지 문장**은 KO ⑫를 그대로 옮긴다.
 *
 * ★ ⑪(K♥T♦6♠)과 조건이 «완전히 동일»하다 — 팟 6bb · 스택 97bb · SPR 16.2 · 벳 사이즈 33% 하나.
 *   바뀐 것은 보드 석 장뿐이고, 그래서 이 편의 주제가 «보드가 레인지 우위를 무효화한다»가 된다.
 *
 * ▶ 수치 출처: 2026-08-21 `?lang=en` 라이브 재캡처(`capture-solver-spots.mjs sb-connected --lang=en`).
 *   §4-B 정본과 **전건 일치** — OOP 572.0 / 49.6% / 2.54 / 85.3% · IP 534.0 / 50.4% / 3.46 / 114.4%
 *   SB: Bet 2bb (33% pot) **9.6%**(55.0) · Check **90.4%**(517.0)   ← **사이즈는 하나뿐이다**
 *   SB hands: Straight 2.8 · Set/Trips 1.6 · Two Pair 1.2 · Overpair 7.3 · Top Pair 6.8 ·
 *             Second Pair 5.8 · Weak Pair 4.2 · Underpair 3.1 · Ace-High 25.2 · King-High 16.1 ·
 *             No Made Hand 25.9 (합 100.0)
 *   BB hands: Straight 3.7 · Set/Trips 1.7 · Two Pair 2.4 · Overpair 2.2 · Top Pair 11.2 ·
 *             Second Pair 6.2 · Weak Pair 6.2 · Underpair 3.4 · Ace-High 18.7 · King-High 15.7 ·
 *             No Made Hand 28.5 (합 99.9)
 *   SB draws: Combo Draw 3.0 · Flush Draw 2.8 · OESD 21.2 · Gutshot 19.4 · Backdoor FD **21.0** ·
 *             No Draw 32.7 (합 100.1)
 *   BB draws: Combo Draw 3.7 · Flush Draw 2.6 · OESD 24.9 · Gutshot 23.8 · Backdoor FD **15.5** ·
 *             No Draw 29.4 (합 99.9)
 *     🔴 **여섯 줄은 상호배타다. 「백도어 플러시」 행을 다시 빼지 마라** — M-023 축B가 잡은 결함이
 *        정확히 그것이고(합이 79.1 / 84.4였다), 하필 **SB가 앞서는 유일한 칸**이라 누락이
 *        「드로우까지 BB가 두껍다」를 유리하게 만드는 방향이었다.
 *        🪶 재캡처한 히어로 이미지에 **21.0%가 화면에 그대로 보인다** — 독자가 눈으로 검산한다.
 *   화면 라벨: 보드명 「Connected Low Board, Two-Tone」 · 「OOP (SB (Opener))」 · 「IP (BB (Caller))」
 *
 * ▶ §13 손 검산 (게이트가 «미검사»로 흘린다 — 콤보를 직접 셌고 **11개 등급이 전부 일치**한다)
 *   팟 3+3=6 ✓ / 스택 100−3=97 ✓ / SPR 97÷6=16.17→16.2 ✓
 *   액션 9.6+90.4=100 ✓ / 콤보 55.0+517.0=572.0 ✓ / EV 2.54+3.46=6.00bb=팟 ✓
 *   EQR 2.54÷(0.496×6)=85.35→85.3 ✓ / 3.46÷(0.504×6)=114.42→114.4 ✓ / 사이즈 2.0÷6=33.3% ✓
 *   보드 7♦6♦5♣ → ♦2 + ♣1 = 투톤 ✓ / 5-6-7 연속 = 연결 ✓
 *   스트레이트 SB 16 = 98s 4 + 98o 12 (9-8-7-6-5) · BB 20 = 그 16 + **43s 4**(7-6-5-4-3) ✓
 *     16÷572=2.80% ✓ / 20÷534=3.75%→3.7% ✓
 *   트리플 양쪽 9 = 77·66·55 각 3(랭크마다 한 장이 보드) · 9÷572=1.57→1.6 · 9÷534=1.69→1.7 ✓
 *   투 페어 SB 7 = 76s **3**(7♦6♦이 보드라 ♦ 조합 소멸) + 75s **2**(7♦·5♣ 소멸) + 65s **2**
 *            BB 13 = 그 7 + **76o 6**(7의 3장 × 6의 3장 − 수딧 3) · 7÷572=1.22→1.2 · 13÷534=2.43→2.4 ✓
 *   오버 페어 SB 42 = AA~88 **7랭크** × 6 · 42÷572=7.34→7.3 ✓
 *            BB 12 = 88·99뿐(TT+는 3벳으로 나간다) · 12÷534=2.25→2.2 ✓
 *   탑 페어 SB 39 = 수딧 7종(A7s~87s) × 3 = 21 + A7o·K7o 각 9 = 18 · 39÷572=6.82→6.8 ✓
 *            BB 60 = 수딧 8종 × 3 = 24 + 오프수트 4종 × 9 = 36 · 60÷534=11.24→11.2 ✓
 *   BB가 오버 페어를 이미 이기는 콤보 = 셋 9 + 투 페어 13 + 스트레이트 20 = **42** ✓
 *   진짜 드로우 합 = SB 3.0+2.8+21.2+19.4 = **46.4** · BB 3.7+2.6+24.9+23.8 = **55.0** ✓
 *   88 = 오버 페어이면서 **동시에 양방**(8-7-6-5에 4나 9) ✓ / K4s·Q4s = 4-5-6-7에 3이나 8 양방 ✓
 *
 * ▶ 키워드 (2026-08-21 rakko 실측 · US)
 *   🟢 **이 편의 자리 = `board texture poker` 30** — `lib/posts-en/` 전체에서 tags 0건인 빈자리다.
 *      (`holdem-reading-the-board`는 `wet board vs dry board`를 갖지만 이 표기는 아니다.)
 *   🔴 가져오면 안 되는 것: `wet board poker` 50 → **⑨·⑦이 이미 갖고 있다**(두 편이 겹친 상태다) ·
 *      `middle connected board` → **④** · `blind vs blind poker` → **⑪**(바로 앞 편이다).
 *   🪶 `connected board poker`·`low connected flop`·`overpair on connected board`·
 *      `who has range advantage`는 **전부 US 볼륨 null**이다. 스팟 축은 늘 이렇다 —
 *      **볼륨이 아니라 카니발 정리가 키워드 팩의 값**이다.
 *
 * ✅ EN 링크 제약 — **2026-08-21 해소됐다. 다시 빼지 마라.**
 *   같은 회차에 EN ⑬을 발행해 본문 2곳 + readnext를 KO와 같게 복원했다. 아래는 당시 기록이다.
 *   KO ⑫는 ⑬(`ace-paired-board-strategy`)을 **본문 2곳 + readnext**에서 링크한다. EN ⑬가 아직 없어
 *   **문장은 전부 살리고 링크만 뺐다.** → **EN ⑬ 발행 직후 이 파일에 링크를 걸어라.**
 *   대체한 것 하나: `holdem-check-raise` → `low-board-check-raise`(⑦).
 *   🟢 ⑪(`blind-battle-cbet`)은 **이번 회차에 발행됐으므로 링크가 살아 있다** — 이 편의 짝이다.
 *
 * ★이 시리즈는 §8 「경험담 필수」 예외 — 1차 데이터가 본체이고 재현 가능성이 출처를 대신한다.
 *
 * 🔴 KO ⑫가 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
 *   ① **드로우 표에서 백도어 행을 빼지 마라**(위 참조). 「드로우 없음」에서 끊어 읽게 하지 마라.
 *   ② **EQR 표를 「골라」라고 밝혀라.** 13스팟 최하위는 ③ 77.9 · ② 80.7 · ⑥ 83.7이고
 *      이 편(85.3) 아래에 콜러가 **다섯 편** 있다. 「콜러 둘 바로 위」로 쓰지 마라.
 *   ③ 「레이즈가 오면 미련 없이 놓아라」는 **유해 조언**이다 — 벳→레이즈 노드가 없고,
 *      상대 레인지에 양방 24.9 · 거트샷 23.8 · 콤보 3.7이 있어 레이즈가 전부 밸류일 수 없다.
 *      **스택오프를 삼가는 것과 폴드는 다르다.**
 *   ④ 🔴 **9.6%의 이유를 팟 6bb·스택 97bb·SPR 16.2에서 찾지 마라** — 셋 다 ⑪⑬에서 **상수**인데
 *      거기서는 같은 SB가 67.4%와 80.1%를 친다. **상수로는 변수를 설명할 수 없다.**
 *   ⑤ 체크 이후를 «본론»으로 말할 땐 **그 노드가 이 계산에 없다는 고지**를 함께 적어라.
 *   ⑥ 벳 9.6%는 **세 종류**다 — 88(클래스 평균 39.5%로 1위 · 오버 페어 겸 양방) · A7s·K7s · K4s·Q4s.
 *      ⚠ 단 **개별 콤보 최다는 88이 아니다**(Q♠4♠ 54.7 · A♣7♣ 54.4 · T♣9♣ 52.2 > 8♦8♣ 47.1).
 *      「88이 최다」는 **클래스 단위에서만 참**이다.
 *   ⑦ 「SB가 가진 몇 안 되는 값 있는 패」로 A7s·K7s를 설명하지 마라 — 실제 이유는
 *      **얇은 밸류 + A·K 블로커**다(탑 페어는 39 대 60으로 오히려 밀린다).
 *   ⑧ 체크 이후 대체재로 ⑦을 넘길 땐 **역할이 다르다**고 명시하라(⑦은 BB 콜러가 BTN을 상대한다).
 */
export const POST: Post = {
  slug: "blind-battle-connected-board",
  title: "Same Seat, Same Stack — and the Bet Falls from 67% to 9.6%",
  seoTitle: "Board Texture Turns a 67% C-Bet Into 9.6% — GTO Solver",
  // 157자 (EN 하드리밋 160)
  desc: "Nothing changed but three cards. On 7-6-5 the small blind that bet 67.4% one board earlier now bets 9.6% — the clearest read on board texture in poker.",
  tldr: "After a small-blind open and a big-blind call, the 7♦6♦5♣ flop gets a bet just 9.6% of the time and a check 90.4%. Pot, stack, SPR, bet size and both ranges are identical to the previous spot — only the three board cards changed, and the bet collapsed from 67.4% to 9.6%. The range edge won preflop was an edge in **high cards**, and a low connected board erases it outright. Equity flips to 49.6% against 50.4% and the out-of-position realization drops to 85.3%.",
  category: "strategy",
  date: "2026-08-21",
  updated: "2026-09-02",
  readTime: "10 min",
  emoji: "🪜",
  image: "/images/gto-sb-connected-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver on a 7-6-5 two-tone flop, the small blind's grid almost entirely green for the check",
  keepImagesInBody: true,
  tags: [
    "board texture poker",
    "connected board poker",
    "low connected flop",
    "poker overpair strategy",
    "gto solver",
  ],
  content: `
In the previous spot the small blind bet **67.4% with no position**. The reason was that the preflop aggressor is also first to act in that seat, so the range edge and the action order land on the same player.

So should the small blind simply always bet blind versus blind? This spot is the answer.

**The pot is the same 6bb, the effective stack the same 97bb, and the only bet size in the tree is still a third of the pot.** Both ranges are the same as the previous spot too. The only thing that changed is **three board cards**. And the small blind's bet collapses to **9.6%**. Every number below comes from the [HoldemMaster GTO solver](/en/solver).


:::stripe
Spot | SB opens 3bb → BB calls (blind vs blind)
Flop | 7♦ 6♦ 5♣ (connected · two-tone)
Pot · stack | Pot 6bb · effective stack 97bb · SPR 16.2
Result | SB bets **9.6%** — the same seat that bet 67.4% one board ago
:::

> **Quick answer**
> On the 7-6-5 connected board blind versus blind, the small blind's first action is **bet 9.6%, check 90.4%**. Pot, stack, SPR, bet size and both ranges are **identical** to the previous spot (K♥T♦6♠) — only the board changed, and the bet fell from 67.4% to 9.6%. The opener's range edge is an edge in **high cards**, and on a board of 5, 6 and 7 that edge is gone entirely. Equity actually **flips to 49.6% against 50.4%**, and the small blind's equity realization drops from 103.1% to **85.3%**.

## What conditions produced these numbers?

**They are identical to the previous spot.** Since the whole point here is "same conditions, different result," it is worth nailing down what is the same and what is not.

| Item | This spot ⑫ | Previous spot ⑪ | Same? |
|---|---|---|---|
| Preflop | SB opens 3bb → BB calls | SB opens 3bb → BB calls | **same** |
| OOP (acts first) | SB — the opener | SB — the opener | **same** |
| Pot | 6bb | 6bb | **same** |
| Effective stack | 97bb | 97bb | **same** |
| SPR | 16.2 | 16.2 | **same** |
| Bet size | One size, about a third of the pot | One size, about a third of the pot | **same** |
| SB range | 572 combos | 538 combos | same range (only board blockers differ) |
| **Flop** | **7♦ 6♦ 5♣** | **K♥ T♦ 6♠** | **different** |
| Rake | Not modeled | Not modeled | — |
| Checked | 2026-08-08 (study spot result) | 2026-08-08 | — |

The 6bb pot is ==the SB's 3 plus the BB's 3==. The effective stack is ==100 − 3 = 97bb==, so the SPR is ==97 ÷ 6 = 16.2==.

The combo counts differ — 572 against 538 — not because the ranges differ but because **cards on the board delete the combos that would have used them.** A board of K, T and 6 removes more from a range thick with broadway cards.

The display is in **big blinds** — bets read as "Bet 2bb (33% pot)", and EV reads as "EV (bb)".

## How often does the small blind bet here?

**9.6% bet, 90.4% check.** Of 572 combos only 55 go into the bet; the other 517 check.

| The small blind's first action | Frequency | Combos |
|---|---|---|
| Bet 2bb (33% pot) | **9.6%** | 55.0 |
| Check | **90.4%** | 517.0 |

Placed on the series, you can see where this spot sits.

| Spot | Who is out of position | OOP bet frequency |
|---|---|---|
| A♥7♦2♣ · K♠8♦3♣ · Q♠J♦T♠ (①②③) | BB caller | 0.1%–1.9% |
| 6♣6♦3♥ · 6♠5♥2♦ (⑥⑦) | BB caller | 3.0%–3.2% |
| **7♦6♦5♣ blind vs blind (⑫)** | **SB opener** | **9.6%** |
| Q♠9♠2♠ monotone (⑤) | BB caller | 11.2% |
| 9♥8♥7♣ connected (④) | BB caller | 23.7% |
| K♥T♦6♠ blind vs blind (⑪) | SB opener | 67.4% |
| A♠A♥6♦ blind vs blind (⑬) | SB opener | 80.1% |
| A♦K♠2♥ · Q♥T♥7♠ · 8♦5♣2♠ (⑧⑨⑩) | BB three-bettor | 98–100% |

**The "role" alone does not explain this table.** The same opener appears at both 67.4% and 9.6%. If the previous spot said "change the role and the default changes," this one is the clause that follows: **the board takes that default back.**

## Why does 67.4% become 9.6% when nothing else changed?

**Because the opener's edge is an edge in high cards.** The small blind could open to 3bb because its range is thick with aces, kings and queens and heavy in broadway combinations — and not one of those cards touches 5, 6 or 7.

The previous board was the opposite. **The top card was a king**, and king combinations are far more numerous on the opener's side. Put the same range on a low connected board and that structure inverts.

| | K♥T♦6♠ (⑪) | 7♦6♦5♣ (⑫) |
|---|---|---|
| Top board card | **K** — the opener's card | **7** — the caller's card |
| SB equity | **55.3%** | **49.6%** |
| SB EQR | **103.1%** | **85.3%** |
| SB bet frequency | **67.4%** | **9.6%** |

:::pull[The range edge is won preflop, but whether it gets realized is decided by three cards on the flop.]:::

The previous article ended by saying *"on boards that fit the caller the check comes back even from this seat."* This is that case, and the number the solver puts on it is **9.6%**.

## Why does this board favor the big blind?

**Because the combinations that connect with 5-6-7 survive only in the big blind's calling range.** The top five rows below are the classes that actually hit this board, and apart from overpairs the small blind does not lead a single one.

![Range composition infographic comparing the small blind and big blind hand classes on a 7-6-5 board](/images/gto-sb-connected-ranges-en.webp "7-6-5 blind vs blind · class-by-class composition — top pair runs 6.8% to 11.2% in the big blind's favor")

| Class | SB (OOP · opener) | BB (IP · caller) |
|---|---|---|
| Straight | 2.8% (16 combos) | **3.7% (20 combos)** |
| Set/trips | 1.6% (9 combos) | 1.7% (9 combos) |
| Two pair | 1.2% (7 combos) | **2.4% (13 combos)** |
| Overpair | **7.3% (42 combos)** | 2.2% (12 combos) |
| Top pair (7) | 6.8% (39 combos) | **11.2% (60 combos)** |
| Second pair (6) | 5.8% | **6.2%** |
| Weak pair | 4.2% | **6.2%** |
| Underpair | 3.1% | **3.4%** |
| Ace-high | **25.2%** | 18.7% |
| King-high | **16.1%** | 15.7% |
| No made hand | 25.9% | **28.5%** |

Three cells decide it.

- **Top pair is 39 combos against 60.** Half again as many sevens for the big blind. The small blind's opening range is built without offsuit hands like T-7, 9-7 and 8-7, while the big blind — already in for 1bb — adds just 2bb and keeps every one of them.
- **Straights are 16 combos against 20.** Both hold 9-8 (making 9-8-7-6-5), but the big blind also has 4-3 suited for 7-6-5-4-3. The small blind's opening range has no 4-3 suited.
- **Two pair is 7 combos against 13.** All six combos of offsuit 7-6 belong to the big blind alone.

Sets are the exception. Both hold 7-7, 6-6 and 5-5 for **exactly nine combos each.** The split reads 1.6% against 1.7% only because the big blind's range is smaller at 534 combos, so the same nine take a slightly larger share.

The one class the small blind leads is **overpairs, 42 combos (7.3%)** against the big blind's 12 (2.2%) — everything from T-T up gets three-bet against a small-blind open, so only 8-8 and 9-9 remain in the calling range.

The trouble is that **an overpair is not a strong hand on this board.** The hands **already beating it** in the opponent's range come to ==9 sets + 13 two pairs + 20 straights = 42 combos==. The 60 combos of top pair currently losing to it can turn into two pair or trips by the river, and the draws run thicker on the big blind's side as well.

| Draw | SB | BB |
|---|---|---|
| Combo draw | 3.0% | **3.7%** |
| Flush draw | **2.8%** | 2.6% |
| Open-ended straight draw | 21.2% | **24.9%** |
| Gutshot | 19.4% | **23.8%** |
| Backdoor flush draw | **21.0%** | 15.5% |
| No draw | **32.7%** | 29.4% |

**Open-enders run 21.2% to 24.9% and gutshots 19.4% to 23.8%.** Counting only live draws — combo, flush, open-ended, gutshot — it is **46.4% for the small blind against 55.0% for the big blind**, which means even the unmade portion of the big blind's range is the portion more likely to *grow*.

🪶 **The small blind leads exactly two cells**: flush draws 2.8% to 2.6%, and backdoor flushes 21.0% to 15.5%. The first is a 0.2-point gap, effectively a tie; the second needs runner-runner cards of the same suit and completes only about 4.2% of the time. All six rows have to be added to reach 100%, so do not stop reading this table at "no draw."

## The opener is behind on equity — how?

**Because ace-high and king-high are worth almost nothing on this board.** 41.3% of the small blind's range is ace-high or king-high (25.2 + 16.1), and above 5-6-7 those combinations are simply high cards.

| Item | SB (OOP) | BB (IP) |
|---|---|---|
| Equity | 49.6% | **50.4%** |
| EV (bb) | 2.54 | **3.46** |
| **EQR (equity realization)** | **85.3%** | **114.4%** |

The pot is 6bb, so the small blind's share is ==6 × 49.6% = 2.976bb== while the actual EV is 2.54bb — that is ==2.54 ÷ 2.976 = 85.3%==. Adding the two EVs gives ==2.54 + 3.46 = 6.0bb==, exactly the pot.

**Equity is nearly even at 49.6 to 50.4, yet realization splits wide at 85.3% against 114.4%.** That gap is what position is worth. In the previous spot the range edge more than covered it and the small blind realized 103.1%; here there is no edge left to cover it with.

Rank the out-of-position EQR of **six selected spots** from low to high and this one sits among the callers. (The true bottom of the whole series is ③ at 77.9%, ② at 80.7% and ⑥ at 83.7%, all caller seats; the table below is an excerpt with that tail cut off.)

| Spot | Who is out of position | OOP equity | OOP EQR |
|---|---|---|---|
| A♥7♦2♣ dry (①) | caller | 45.1% | 84.0% |
| 6♠5♥2♦ low (⑦) | caller | 48.3% | 84.3% |
| **7♦6♦5♣ blind vs blind (⑫)** | **opener** | **49.6%** | **85.3%** |
| 9♥8♥7♣ connected (④) | caller | 48.5% | 93.2% |
| K♥T♦6♠ blind vs blind (⑪) | opener | 55.3% | 103.1% |
| 8♦5♣2♠ 3-bet pot (⑩) | three-bettor | 58.6% | 106.9% |

**An opener, sitting among the callers.** Across the series there are **five** caller seats below this one (③ 77.9 · ② 80.7 · ⑥ 83.7 · ① 84.0 · ⑦ 84.3), so it is not near the bottom. The point stands anyway: **the same opener seat reads 103.1% at ⑪ and 85.3% here.** The board sets the value, not the seat.

## So which hands make up the 9.6% that bets?

**Not one block — a thin layer smeared across the whole range.** Nowhere in the matrix is a cell fully orange; most carry a narrow orange stripe. Even A-A and K-K are mostly green.

Three kinds of cell carry a visibly thicker stripe. (The frequencies below are combo averages for each hand class, counted by reading the live per-hand table all the way down on 2026-08-21.)

- **8-8 — betting 39.5%, the most frequent class in the range.** On 7-6-5 an eight-eight is **an overpair and an open-ender at the same time** (8-7-6-5 completes with a four or a nine). Value and draw in one hand, so there are two reasons to bet. Measured equity runs 73.4%–75.2% and EQR 133%–138%.
- **A-7 suited and K-7 suited** — top pair with a seven. They get picked not for strength but because **thin value comes with an ace or king blocker** (one fewer ace-high or king-high in the opponent's range). Top pair on this board actually trails, 39 combos to 60.
- **K-4 suited and Q-4 suited** — a suited four. Add a four to 7-6-5 and you hold ==4-5-6-7==, an open-ender completing on a three or an eight. By class average that is Q-4s at 30.9% and K-4s at 27.1%, but **as individual combos Q♠4♠ and Q♥4♥ hit 54.7%, the highest in the entire spot.**

The 9.6% is built by mixing a little value with a few draws. Eight-eight tops the class ranking because **one hand does both jobs at once.** ⚠ That is not a general rule, though — **none of the top three individual combos does both** (Q♠4♠ at 54.7% is a pure draw, A♣7♣ at 54.4% is thin value with a blocker, T♣9♣ at 52.2% is a gutshot). The best single combo of the double-duty hand, 8♦8♣, is *lower* at 47.1%. **The 9.6% was not selected by any one criterion.** **And checking 90.4% is not the small blind giving up on this board** — it is that leading with thin value and then facing a raise costs far more than it makes. ⚠ Do not look for the reason in the 6bb pot, the 97bb stack or the SPR of 16.2, though — those three are **exactly the same constants** on [⑪ K-T-6](/en/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-en.webp") and on [the A-A-6 board](/en/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp") later in the series, where the same small blind bets 67.4% and 80.1%. What produced 9.6% is not the stack; it is **three board cards**.

:::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 9.6% can move. Read it as "under these conditions there is almost nothing worth betting, even small."]:::

## What changes at the table?

- **Do not turn "it's blind versus blind, so bet" into a rule.** The 67.4% of the previous spot and the 9.6% here were split by the board, not the seat. Even if you opened from the small blind, once the flop runs low and connected — 5, 6, 7, 8 — the initiative in that hand has already crossed the table.
- **Do not treat an overpair as a reason to build a big pot.** The small blind's 42 combos of overpairs are three and a half times the big blind's, but on a board where the opponent holds 42 combos that already beat them, this is not a hand for two or three barrels. That is not an argument against a single small bet — the point is **not to treat it as a stack-off hand**. ⚠ Nor does it mean "fold the moment a raise comes." The opponent's range holds 24.9% open-enders, 23.8% gutshots and 3.7% combo draws, so a flop raise cannot be all value, and auto-folding an overpair to a draw-heavy opponent's raise is itself an exploitable habit. **Declining to stack off and folding are different things.** And the bet-then-raise node is not in this solve, so no frequency comes out of it. This series keeps reaching the same conclusion, that [a connected board shaves the preflop aggressor's edge](/en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp").
- **Do not mistake ace-high for strength.** A quarter of the small blind's range is ace-high, and on this board the best it does is pair up. The opponent's draws, when they hit, are straights — what differs is not the chance of improving but **what the improvement is worth**. The 49.6% equity figure is the result.
- **Decide in advance what you do after checking.** Having passed 90.4% into a check, what you call and what you [check-raise](/en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp") against the opponent's bet is the next real problem. ⚠ **That answer is not in this calculation** — the study spot solves only the **first action on the flop**, so the nodes after a check (the big blind's betting frequency, the small blind's check-raise) simply do not exist. If you want a spot where a check-raise was actually solved, the low-rainbow board is the only one in the series with re-solved frequencies — **though the seat is different** (there the big blind is the caller facing a button).

:::readnext[Keep reading]
/en/blog/blind-battle-cbet | The Player With No Position Bets First — 67.4% of the Time | /images/gto-sb-king-mid-oop-en.webp
/en/blog/ace-paired-board-strategy | Two Aces on the Flop and the Bet Jumps to 80% | /images/gto-sb-paired-ace-oop-en.webp
:::

## Check it yourself

Every figure here comes up if you open the [GTO solver](/en/solver) and hit **Study Spots → "Connected Low Board, Two-Tone" → [⚡ View results]**. To play the same spot as a problem instead, open the [GTO Trainer](/en/solver) from the sidebar — it deals you a random hand, and once you pick an action it shows the mixed frequency and the **EV loss (bb)** of your choice. Your history stays in your own browser.

**Click back and forth with "King-High with a Ten"**, the previous spot. The player labels read "OOP (SB (Opener))" on both, the pot and stack are identical — and the matrix flips colour completely. It is the shortest demonstration in this series of what a board actually does. Free, no install, no account.

**Q. Why does the same range change value from board to board?**

A. Because a range is concentrated in particular cards. The small blind's opening range is thick with aces, kings and queens, so it gains on high boards; the big blind's calling range is thick with connectors and low suited hands, so it gains on low connected boards. Put the same two ranges on K♥T♦6♠ and the small blind has 55.3% equity; put them on 7♦6♦5♣ and it drops to 49.6%. The ranges did not move — only the board did.

**Q. You opened from the small blind and the flop comes low and connected. Now what?**

A. Mostly you check. The solver passes 90.4% into a check on 7♦6♦5♣. Even the 9.6% that bets is spread thinly across **8-8, an overpair that is also an open-ender** (39.5% by class average, the highest here), top pair (A-7s, K-7s) and a suited four making an open-ender (K-4s, Q-4s). But this is not the same as giving up — checking and then answering the opponent's bet with calls and check-raises beats leading with thin value and getting raised.

**Q. The small blind has three times as many overpairs. Why is the bet only 9.6%?**

A. Because the opponent holds plenty that beats an overpair on this board: 42 combos of sets, two pairs and straights, plus 24.9% open-enders and 23.8% gutshots. Even the 60 combos of top pair currently behind hold cards that flip it by the river. An overpair here is "ahead now, hard to put in more than once." ⚠ Do not look for the reason in the SPR of 16.2 — a 6bb pot, a 97bb stack and an SPR of 16.2 are **the same constants** on the [K-T-6](/en/blog/blind-battle-cbet) and [A-A-6](/en/blog/ace-paired-board-strategy) boards, where the same small blind bets 67.4% and 80.1%. What produced 9.6% is not the stack; it is three board cards.

**Q. Which of the two spots is the blind-versus-blind default?**

A. Neither. The pair exists to show that the same seat produces 9.6% and 67.4% at opposite ends depending on the board. What to carry to the table is not "small blind, so bet" but **whose range the top board card belongs to**. A king, queen or ace and it is the opener's; a run of 5, 6, 7 or 8 and it is the caller's.
`.trim(),
};

export default POST;
