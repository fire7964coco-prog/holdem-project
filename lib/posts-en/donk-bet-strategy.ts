import type { Post } from "../posts";

/**
 * GTO 솔버 스팟 해설 시리즈 ④ 영어판 — 9♥8♥7♣ 미들 연결 투톤 (2026-08-19, T24 ②)
 * **시리즈에서 리드 벳이 처음 등장하는 스팟이다.**
 *
 * ★★계산 부분은 한국어판과 통일 (`docs/gto-solver-series-spec.md` §4-A-2 · `npm run check:gto`).
 *
 * ▶ 조준 (뱅크 §3-④ 원문 4개 + 2026-08-19 자동완성)
 *   **`what is a donk bet in poker` 90**(WS3 2·LowDA 28 — 자동완성 1위) · `donk bet poker` 140(DA21) ·
 *   `when not to c bet`(WS3 2·DA22) · **`poker when to check` 10**(WS3 2·DA25) ·
 *   자동완성 보강: `donk bet meaning`·`donk bet poker meaning`
 *   ⚠ 초판 주석이 `should i always c-bet`을 §3-④로 적었으나 **그건 §3-②의 자리다**(SEO 렌즈가 잡았다).
 * 🔴 **「donk bet」 단독은 오염돼 있다** — 자동완성에 `donk beyonce`·`donk betboom`(브랜드)이 섞인다.
 *    **poker 앵커를 반드시 붙인다** — seoTitle·desc·FAQ에 전부 넣었다(초판은 메타에 poker가 0회였다).
 * 🔴 ②편이 `should you always c bet`을 가져갔다 → ④는 **「when NOT to c-bet」·「when to check」** 쪽이다.
 *
 * 🔴 수치 출처: 2026-08-19 `?lang=en` 「Study Spots → Middle Connected, Two-Tone」 OOP·IP 실측.
 *   BB: Check 76.2%(352.0) · Bet 1.8bb **16.8%**(77.8) · Bet 4.1bb **6.9%**(32.2) · All 462.0 ·
 *       EQ 48.5% · EV 2.48 · EQR 93.2% / Straight 5.2 · Trips 1.9 · Two Pair 2.8 · Overpair 1.3 ·
 *       Top Pair 13.6 · Second 8.4 · Weak 6.5 · Underpair 6.5 · Ace High 24.2 · King High 13.9 ·
 *       No Made Hand 15.6 / Draws: Combo 4.5 · Flush 3.2 · OESD 26.2 · Gutshot 21.6 · Backdoor 14.1 · No Draw 30.3
 *   BTN: All 472.0 · EQ 51.5% · EV 3.02 · EQR 106.4% / Straight 4.2 · Trips 1.9 · Two Pair 2.8 ·
 *       **Overpair 6.4** · Top Pair 12.7 · Second 7.6 · Weak 6.4 · Underpair 6.4 · Ace High 30.5 ·
 *       King High 11.9 · No Made Hand 9.3 / Draws: 3.6 · 2.3 · 23.7 · 20.6 · 17.6 · 32.2
 *   ⚠ **BTN의 OESD가 23.7%인데 BB의 리드 빈도도 23.7%다.** 우연이고 다른 값이다 — 본문에서 섞지 마라.
 *
 * §13 손 검산 (전부 통과):
 *   · 스트레이트를 만드는 핸드 = **JT(J-T-9-8-7) · T6(T-9-8-7-6) · 65(9-8-7-6-5)**
 *     BB = JT 16 + T6s 4 + 65s 4 = **24콤보** → 24÷462 = 5.19% ≈ 5.2 ✓
 *     BTN = JT 16 + 65s 4 = **20콤보**(T6s는 버튼 오픈 레인지 밖) → 20÷472 = 4.24% ≈ 4.2 ✓
 *     🔴 **차이가 정확히 T6s 4콤보다** — 빅블라인드라 싸게 방어한 한 칸이 너트 지분을 뒤집는다
 *   · 오버페어 = BB는 TT 6콤보뿐(6÷462 = 1.30% ≈ 1.3) / BTN은 TT~AA 30콤보(30÷472 = 6.36% ≈ 6.4)
 *   · 셋 = 99·88·77 각 3콤보 = 9 → 9÷462 = 1.95% · 9÷472 = 1.91% (양쪽 1.9%) ✓
 *   · EV 합 2.48 + 3.02 = **5.50 = 팟** ✓ · 에퀴티 48.5 + 51.5 = 100 ✓
 *   · EQR 역산 2.48÷(5.5×0.485) = 93.0% / 3.02÷(5.5×0.515) = 106.6% (표시 93.2·106.4 · 0.2%p) ✓
 *   · 액션 합 76.2 + 16.8 + 6.9 = 99.9(반올림) ✓ · 리드 합 16.8 + 6.9 = **23.7** ✓
 *   · 턴 위험 카드 = T·J·6·5 각 4장 = **16장** + 겹치지 않는 하트 **7장**(하트 13 − 보드 2 − T♥J♥6♥5♥ 4)
 *     = **23장 ÷ 47 = 48.9% ≈ 49%** ✓
 *   · BTN이 페어조차 못 맞춘 비율 = 30.5 + 11.9 + 9.3 = **51.7%** ✓
 *   · 등급 합 BB 99.9 · BTN 100.1(반올림) ✓
 *
 * ⚠ KO 파일 주석의 경고를 그대로 잇는다: **「레인지 우위가 BB로 넘어갔다」고 쓰지 마라.**
 *   에퀴티는 48.5 대 51.5로 여전히 BTN이 앞선다. 달라진 것은 «격차»와 «분포»다.
 *
 * ★§8 「경험담 필수」 예외 — 1차 데이터이고 재현 가능성이 출처를 대신한다.
 */
export const POST: Post = {
  slug: "donk-bet-strategy",
  title: "The Flop Where Donk Betting Is Right — 9-8-7",
  // 🔴 초판 seoTitle·desc에 **poker 가 0회**였다 — 이 파일 자신이 「poker 앵커를 반드시 붙인다」고
  //    적어 놓고 메타에서 빠뜨렸다(SEO·수학 렌즈가 동시에 잡았다). 56자.
  seoTitle: "The Board Where a Donk Bet Is Correct — 9-8-7 Poker Lead",
  // 152자 — ⚠ 초판은 **실측 160자**(주석엔 156으로 적혀 있었다). 하드리밋과 같아 여유가 0이었다.
  //    자수는 반드시 «디코딩 기준»으로 재라(`'`는 HTML에서 `&#x27;` 6자가 된다).
  desc: "In poker a donk bet reads as a beginner mistake. On 9-8-7 a solver leads 23.7% — here is the board condition that makes leading correct, and the sizing.",
  tldr: "On 9♥8♥7♣ after a button open and a big blind call, the big blind checks 76.2% and leads 23.7% — the first spot in this series where the lead is a real strategy rather than a rounding artifact. Range advantage has not flipped: equity is still 48.5% against 51.5%. What changed is the gap and where each side's strong hands sit.",
  category: "strategy",
  date: "2026-08-19",
  updated: "2026-08-21",
  readTime: "9 min",
  emoji: "🎯",
  image: "/images/gto-srp-middle-connected-oop-en.webp",
  imageAlt: "HoldemMaster GTO solver results for a middle connected two-tone flop, the big blind's grid mixing green checks with orange and pink bets",
  keepImagesInBody: true,
  tags: [
    "donk bet poker",
    "what is a donk bet",
    "when not to c bet",
    "lead bet",
    "gto solver",
    "middle connected board",
    "range advantage",
  ],
  content: `
One of the first rules you learn in poker: **check to the raiser.** The player who attacked preflop gets to make the first bet on the flop.

The last three spots were that rule at its most obedient. On [ace-high](/en/blog/a-high-board-cbet), [king-high](/en/blog/k-high-board-cbet) and [broadway](/en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp") flops, the big blind's lead was under 2% every time — on K-8-3 and Q-J-T it was 0.2% or less, effectively zero.

On **9♥ 8♥ 7♣** it is **23.7%**. This is where the rule breaks.

A bet by the player who only called preflop is a **donk bet** — from donkey, which tells you how it has been regarded. Also called a **lead**. Solvers put it in the strategy on specific boards, and this is the clearest one in the study set.

Every figure below came from HoldemMaster's [free GTO solver](/en/solver), read off the study-spot output on 2026-08-19.

![HoldemMaster GTO solver results for 9-8-7 two-tone — the big blind's grid mixing green checks with orange and pink bets](/images/gto-srp-middle-connected-oop-en.webp "9♥8♥7♣ · the big blind's flop strategy — orange and pink start appearing among the green")

:::stripe
Spot | BTN opens 2.5bb → BB calls (heads-up)
Flop | 9♥ 8♥ 7♣ (two-tone — two hearts)
Pot · stack | Pot 5.5bb · effective stack 97.5bb
Result | BB leads 23.7% — the first real lead in this series
:::

> **Quick answer**
> On 9♥8♥7♣ the big blind checks **76.2%** and leads **23.7%** across two sizes (both rounded). But **range advantage has not changed hands** — equity is still 48.5% against 51.5% in the button's favor. What changed is the size of the gap, and where the strong hands sit: the big blind's strength is in completed straights, the button's is in overpairs that this board threatens.

## What conditions produced these numbers?

The button opens to 2.5bb, the big blind calls, everyone else folds — two players, a 5.5bb pot, 97.5bb behind. Ranges are the standard 100bb online approximations, the flop is 9♥ 8♥ 7♣ with two hearts, and the solver has two bet sizes available at roughly a third and three-quarters of the pot. Rake is not modeled, and the figures were read on 2026-08-19.

| Setting | Value |
|---|---|
| Preflop | BTN opens 2.5bb · BB calls · everyone else folds |
| Ranges | Approximations of standard 100bb online play |
| Flop | 9♥ 8♥ 7♣, two-tone (two hearts) |
| Pot · stack | Pot 5.5bb · effective stack 97.5bb |
| Bet sizes | Roughly 33% and 75% of pot |
| Rake | Not modeled |
| Checked | 2026-08-19, study spot output |

## How often does the big blind donk bet on 9-8-7?

**23.7%**, and more than two-thirds of it goes in at the small size.

| Big blind's first action | Frequency | Combos |
|---|---|---|
| Check | **76.2%** | 352.0 |
| Bet 1.8bb (33% pot) | **16.8%** | 77.8 |
| Bet 4.1bb (75% pot) | 6.9% | 32.2 |

Put the four flops side by side and the jump is obvious.

| Flop | BB leads |
|---|---|
| A-7-2 (dry) | 1.9% |
| K-8-3 (dry) | 0.2% |
| Q-J-T (connected, two-tone) | 0.1% |
| **9-8-7 (middle connected, two-tone)** | **23.7%** |

**From under 2% to 23.7% — more than a tenfold jump.** That is not "mixing it in occasionally"; that is a different strategy.

## What changed compared with the first three flops?

**For the first time the big blind is ahead in a top category.** Completed straights are 5.2% against 4.2%.

Count the combinations and the reason shows up exactly. Three hands make a straight here: ==JT (J-T-9-8-7)==, ==T6 (T-9-8-7-6)== and ==65 (9-8-7-6-5)==.

| Straight hand | BB (calling range) | BTN (opening range) |
|---|---|---|
| JT | ✅ suited and offsuit (16 combos) | ✅ suited and offsuit (16 combos) |
| T6 | ✅ **T6s (4 combos)** | ❌ outside the opening range |
| 65 | ✅ 65s (4 combos) | ✅ 65s (4 combos) |
| **Total** | **24 combos = 5.2%** | **20 combos = 4.2%** |

**The whole difference is T6s — four combos.** This solver's button range starts at T7s, so T6 suited never arrives, while the big blind defends it cheaply because 1bb of the 2.5bb is already posted. That one cell decides who holds more **completed straights** — not who holds the nuts, which is a separate question: the best hand here is J-T, and both players have all 16 combos of it.

It cuts the other way too. Overpairs belong to the button.

| Overpair (pocket pair above the 9) | BB | BTN |
|---|---|---|
| TT | ✅ 6 combos | ✅ 6 combos |
| JJ · QQ · KK · AA | ❌ all three-bet preflop | ✅ 24 combos |
| **Total** | **6 combos = 1.3%** | **30 combos = 6.4%** |

## So does this flop favor the big blind?

**No. Equity is still 48.5% against 51.5%.** This is worth stating plainly, because it is the easiest wrong conclusion to draw: a lead appearing does not mean the range advantage moved.

![Range composition infographic comparing the big blind and button hand categories on a middle connected two-tone board](/images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · category split — straights favor the big blind, overpairs and ace-high favor the button")

| Category | BB (OOP) | BTN (IP) |
|---|---|---|
| Straight | **5.2%** | 4.2% |
| Set (trips) | 1.9% | 1.9% |
| Overpair | 1.3% | **6.4%** |
| Top pair (9) | **13.6%** | 12.7% |
| Ace high | 24.2% | **30.5%** |
| King high | **13.9%** | 11.9% |
| No made hand | **15.6%** | 9.3% |

⚠ This table lists **only the categories that differ noticeably**, so the columns do not sum to 100%. Two pair (98, 97, 87) and the lower pairs are left out — a category missing from the table is not a category at zero.

The same holds after the money is counted. Equity realization still favors the button, just by less than anywhere else so far.

| Metric | BB (OOP) | BTN (IP) |
|---|---|---|
| Equity | 48.5% | 51.5% |
| EV (bb) | 2.48 | 3.02 |
| **Equity realization (EQR)** | **93.2%** | **106.4%** |

After 84.0%, 80.7% and 77.9% on the first three flops, the big blind's equity realization **turns around here** — 93.2% is the closest it gets to keeping its full share. That is the real signal: a lead appears when the out-of-position player can finally hold on to what its equity is worth.

Two things changed to make that happen.

**First, the gap narrowed.** A 3.0 point equity difference is the smallest of the four flops so far — A-7-2 was 9.8 points, Q-J-T was 6.6.

**Second, the button's strength sits in vulnerable places.** The only two categories where it leads are overpairs (6.4%) and ace-high (30.5%) — and one of those is not strength at all. Most of that ace-high has no pair here — and where it does have a draw, so does the big blind, so the draws cancel rather than favor anyone. The overpairs are fragile for the reason in the next section. The big blind's edge, by contrast, is in hands that are **already made**.

A lead becomes correct not from average strength alone, but when **you hold more of the nuts and your opponent cannot bet confidently.** Both conditions are met here: the big blind has more straights, and with 30.5% of its range as ace-high the button cannot fire wide. That unclaimed space is what the lead takes.

## Why are the button's overpairs vulnerable?

**Because nearly half the cards still to come make the turn worse for them.**

Say you hold QQ. Right now you are close to the best hand. Of the 47 unseen cards:

- **T, J, 6, 5 — 16 cards.** Any of them **completes a straight** for a single card in your opponent's hand. A jack makes the board J-9-8-7, and **anyone holding a ten already has J-T-9-8-7.**
- **The remaining hearts that are not already counted — 7 cards.** The flush gets there.

Together that is **23 of 47 cards, about 49%.** Roughly every other turn makes the hand harder to play. If counting those outs from the other side is the part you want to firm up, start with [drawing odds](/en/blog/holdem-drawing-odds).

So an overpair here is a hand to **charge the draws with now and shut down when raised** — not one to build a huge pot with. The pot worth avoiding is the one that gets built after a bad turn, not the one you build on the flop.

## Why is the small size two-thirds of the lead?

**Because the lead is a claim about the whole range, not about one hand.** Of the 23.7%, 16.8 points go in at a third of the pot and 6.9 at three-quarters.

A small bet says "my entire range likes this flop." If only the strong hands bet, the range splits into "bet = strong, check = weak" and your opponent reads it for free. Mixing straights, top pairs and draws into one small size keeps them indistinguishable.

The large size still exists for a reason. If every straight went into the small bet, the button could call everything without ever facing a big pot. **Using two sizes is what leaves neither calling nor raising comfortable.**

## When should you not c-bet? The 9-8-7 exception

**On this flop, as the preflop raiser** — whether the big blind leads or checks. It is the clearest "when not to c-bet" board in the study set, and the reason is not the texture but what your own range looks like on it. How that judgment generalizes across board types is in [continuation bet strategy](/en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp").

The reason is the range composition. Ace-high is 30.5% of the button's range, king-high 11.9%, no made hand 9.3% — 51.7% without a pair. 🔴 **But "no pair" is not the reason on its own.** Add the big blind's column the same way and you get **53.7%** — the big blind has *more* of its range unpaired, by 2.0 points, and it is the one leading 23.7% of the time. What actually stops the button is **what stayed behind in the checking range**: 76.2% of the big blind's hands are still there, straights and 13.6% top pair among them, so betting wide runs into a **check-raise**. ⚠ Some of those 24 straight combos lead rather than check, so they are not all sitting in the checking range — and the check-raise *frequency* is not something this solve contains.

Missed **offsuit** high cards like AKo and AQo are standard check-backs: they hold showdown value, and when a raise comes you have nothing to continue with. The suited versions are a different hand — A♥K♥ and A♥Q♥ are nut flush draws here, and they bet.

:::note[The study spot pre-solves only the flop's first action — the big blind's. How far the button's c-bet frequency actually drops after a check is not on this screen. Open "Solve this spot yourself" and run the tree to see it.]:::

## What changes at the table?

- **Leads live on middle connected boards after a wide late-position open.** The monotone board in the next spot has about 11% too, while ace-high and king-high dry flops are effectively zero. ⚠ The only middle connected board this series actually solves is 9-8-7, though, and the condition is not the texture alone but **which range holds more of the nuts on it.** The proof is inside the series: on a 7-6-5 flop in a blind-versus-blind pot, the small blind — the player who opened — leads just **9.6%** of the time. Connected on its own does not produce a lead.
- **You still check three-quarters of the time.** When you do lead: small, and with more than your best hands — a range that only leads straights gets read immediately, so top pair and draws belong in the same size. Keep the total in view, though: **the whole lead is 23.7%, 16.8 of it at the small size.** Turned into "lead every draw," it becomes half the range and inverts the strategy. The other 76.2% checks.
- **On the button, resist the c-bet on this texture.** More than half your range has no pair, and the overpairs want a controlled pot rather than a big one.
- **Against an opponent who c-bets far too often, checking can be worth more than leading** — and check-**raise**, rather than only check-calling, with the straights and top pairs. Letting them bet your strong hands for you is worth more than taking the initiative, but only if you then charge for it.
- **Read it the other way too.** Against a player who checks back wet boards, leading is worth more than the solver number suggests: checking there simply loses the street.

:::readnext[Keep reading]
/en/blog/broadway-board-strategy | Two-Thirds of the Range Has a Draw — and It Still Checks | /images/gto-srp-broadway-oop-en.webp
/en/blog/k-high-board-cbet | The King-High Flop Where the Caller Checks 99.8% | /images/gto-srp-dry-king-oop-en.webp
:::

## Check it yourself

Open the [free GTO solver](/en/solver), go to **Study Spots → Middle Connected, Two-Tone → [⚡ View results]**.

The best way to study this one is **side by side with a dry board.** Open "Dry King-High Board" first and look at a grid covered in a single green, then come back here and watch orange and pink appear among it. Same players, same ranges — three cards changed the strategy.

Then open the **GTO Trainer** in the sidebar and let it deal you the lead you just read about — it hands you a random hand from the real range weights and tells you in big blinds what choosing wrong cost. Free, nothing to install, no account.

## FAQ

**Q. What is a donk bet in poker?**

A. A bet on the flop by the player who did not raise preflop — betting into the aggressor instead of checking to them. The name comes from "donkey", which is how the play was long regarded. Solvers show it is correct on specific board textures, and on this flop it is 23.7% of the big blind's strategy.

**Q. Why do people say donk betting is bad?**

A. Because on most boards it is. In this series the ace-high, king-high and broadway flops all had the big blind leading under 2%, since the preflop raiser connects better with those cards. The exception is a board where **the caller holds more of the very best hands** — and 9-8-7 is the clearest example.

**Q. Does the big blind have the advantage on 9-8-7?**

A. No. Equity is 48.5% against 51.5% and equity realization is 93.2% against 106.4%, both in the button's favor. The lead appears because the big blind holds more completed straights while the button's strength is concentrated in overpairs this board threatens — not because the big blind is ahead overall.

**Q. When should you check instead of leading in poker?**

A. Three-quarters of the time, even on this flop — 76.2% of the big blind's range checks. Check when your range does not hold more of the made hands, which is every dry ace-high or king-high board, and check when your opponent bets too often anyway: letting them fire is worth more than taking the initiative from them. Leading is the exception, not the upgrade.

**Q. What happens if I lead and get raised?**

A. Plan it before you bet, because a third-pot lead invites raises. Straights and open-ended draws continue — you have the equity to play a big pot. Top pair with a nine is a call, once, and it usually shuts down on a bad turn. Hands with neither pair nor draw should fold rather than "find out": that is exactly the part of your range the raise is targeting.

**Q. What size should I lead with?**

A. Mostly small. The solver puts 16.8 of the 23.7 points into a third-pot bet and 6.9 into three-quarters. The small size is the default because the point is to pressure with the whole range; the large one exists so your opponent cannot simply call everything.

**Q. Do these lead frequencies hold at my stake?**

A. The board condition does; the exact 23.7% does not travel unchanged. It assumes heads-up play, 100bb, a 2.5bb button open and standard defending ranges, with no rake. A larger live open changes the pot and the stack-to-pot ratio, and a big blind defending far wider than the model holds even more straights — which makes leading stronger, not weaker.
`.trim(),
};

export default POST;
