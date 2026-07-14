import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-drawing-odds",
  title: "Drawing Odds in Poker — The Odds of Flopping and Hitting Every Hand",
  seoTitle: "What Are the Odds You Actually Flop It? — Poker Drawing Odds",
  desc: "The real odds of flopping a set, a flush, quads and every draw in Hold'em — with the actual combinatorics and the set-mining math the top pages leave out.",
  tldr: "You flop a set with a pocket pair 11.8% of the time (7.5-to-1 against), flop a flush with two suited cards just 0.84%, and complete a flopped flush draw by the river 35% of the time. Every number below is derived from the deck, not guessed.",
  category: "odds",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🎲",
  image: "/images/holdem-drawing-odds-hero.webp",
  imageAlt: "A small pocket pair beside a chip stack on green felt as a flop is dealt, the moment a set-mining call pays off or misses",
  tags: ["drawing odds", "odds of flopping a set", "odds of flopping a flush", "odds of flopping quads", "set mining", "odds of being dealt pocket aces", "poker flop odds", "texas holdem drawing odds"],
  content: `
The hand that made me learn this cold: I called a raise with pocket fives, flopped my set, stacked a guy holding aces, and my buddy asked how I "knew" to call. I didn't *know* — I knew the number. ==You flop a set about 1 in 8.5 tries==, and the stacks were deep enough to pay me off when I did. That single fraction turned a "feels lucky" call into a profitable one.

That's what drawing odds really are: not luck, but the ==fixed math of a 52-card deck==. How often you flop a set, flop a flush, complete a draw by the river — every one of these is a number you can derive, and the players who win have them memorized. This guide is the ==g:probabilities behind the flop and the draw==, each with the actual combinatorics so you can see *why* the number is what it is. It's the companion to the full [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); once you know the odds here, [counting outs](/en/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp") and [pot odds](/en/blog/holdem-pot-odds) turn them into decisions.

---

### The numbers to burn in

:::stripe
11.8% | Flop a set with a pocket pair
0.84% | Flop a made flush with two suited cards
35% | Complete a flopped flush draw by the river
407-to-1 | Flop quads with a pocket pair
:::

---

## The Flop Lifecycle: One Table Every Odds Page Splits Up

Here's the table nobody builds in one place. Most sites tell you the odds of *flopping* a hand on one page and the odds of *completing a draw* on another — but at the table it's one continuous story. You get dealt two cards, you flop something made **or** a draw, and if it's a draw you either complete it or you don't.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Holding | Flop it made | Flop the draw | Complete draw by river |
|:---|:---:|:---|:---|
| Pocket pair → set | 11.8% (7.5-to-1) | — | set→boat 33% by river |
| Two suited → flush | 0.84% (118-to-1) | 10.9% flush draw | 35% (9 outs) |
| Connectors → straight | 1.3% (76-to-1) | ~10% OESD | 31.5% (8 outs) |
| Two unpaired → pair | ~32% | — | — |
| Pocket pair → quads | 0.245% (407-to-1) | — | — |

</div>

Read across a row and you see the whole lifecycle of a hand. Two suited cards almost never flop a *made* flush (0.84%) — but they flop a **flush draw** thirteen times more often (10.9%), and that draw gets there by the river 35% of the time. Conflating those three numbers is the single most common odds mistake, so we'll pull each apart below with the math shown.

---

## Odds of Flopping a Set (and the Set-Mining Math)

![Infographic of a gold dealer button and two face-down hole cards on a K♦ 7♣ 2♠ flop — the moment a set-mining call is decided](/images/holdem-button-dealer-board.webp "The flop decides a set-mining call: hit your two-outer 11.8% of the time, or fold and wait for the next pair")

**You flop a set (or better) with a pocket pair 11.8% of the time — about 1 in 8.5, or 7.5-to-1 against.** This is the most important drawing number in the game, because it's the entire basis for *set mining*: calling a raise with a small pair purely to flop three of a kind.

Where does 11.8% come from? Hold a pocket pair and there are two cards left in the deck that pair you. The flop is three cards drawn from the 50 you can't see. The clean way to count it is backwards — the chance you **miss** all three:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Step | Math |
|------|------|
| Flops that miss your pair | C(48,3) = 17,296 |
| Total possible flops | C(50,3) = 19,600 |
| Chance you miss | 17,296 ÷ 19,600 = 88.2% |
| **Chance you flop a set** | **1 − 0.882 = 11.8%** |

</div>

### When set mining actually pays

Flopping a set 11.8% of the time means you **whiff 88% of the time** and fold. To profit, the 12% you hit has to pay for all the times you miss. Breakeven is 7.5-to-1 — so if you call to set-mine, you want the pot plus what you can win on later streets to be worth **at least 7.5×** your call, and in practice ==g:15-to-1 or better== to cover the times your set doesn't get paid or gets outdrawn.

:::tip[The rule of thumb: only call a raise to set-mine if the effective stacks are roughly 15-20× the price of the call. Deep stacks make small pairs gold; short stacks make them trash. The pair didn't change — the implied odds did.]:::

Set mining is the purest [implied odds](/en/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") play there is — a tiny chance to win a big pot later. The full framework — the formula, draw-by-draw stack multiples, and reverse implied odds — lives in that guide.

Two related numbers people ask about:

- **Hitting a set by the river** (from preflop, seeing all five board cards) is ==**19.2%**== — 1 − C(48,5)/C(50,5). Higher than the flop figure because you get two more cards, but you can't count on reaching the river cheaply, which is why the flop number rules set-mining.
- **Set over set** — you flop a set and lose to a bigger one — has no single fixed figure because it depends on how many opponents hold pairs, but with two players both holding pairs it lands near ~1%. It's the classic cooler: the math was on your side the whole way.

---

## Flush Odds: Made vs Draw vs Complete

![Ace-king of hearts with a queen-seven of hearts flop on green felt, a flopped nine-out flush draw beside a short stack of chips](/images/holdem-drawing-odds-flush-draw.webp "Two hearts in hand, two on the flop — a flush draw, not a made flush: 10.9% to flop, 35% to complete by the river")

This is where competitors blur three completely different numbers. With two suited cards in your hand, there are **three separate questions**, and they're an order of magnitude apart:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Question | Odds | The math |
|:---|:---:|:---|
| Flop a **made flush** (3 of your suit) | 0.84% · 118-to-1 | C(11,3) ÷ C(50,3) = 165 ÷ 19,600 |
| Flop a **flush draw** (2 more of your suit) | 10.9% · 8-to-1 | C(11,2)×39 ÷ C(50,3) = 2,145 ÷ 19,600 |
| **Complete** a flopped flush draw by river | 35.0% · 1.9-to-1 | 1 − C(38,2) ÷ C(47,2) |

</div>

So the honest sentence is: two suited cards flop a **draw** far more than a made flush, and that draw is a coin-flip-ish 35% to get there. Chasing every suited hand "for the flush" ignores that you'll flop the made flush less than once per 100 hands.

The completion figure splits by street, which matters the moment there's betting left:

- **Flop → river (both cards):** 35.0% — use this only when you're all-in on the flop.
- **Flop → turn (one card):** 9 ÷ 47 = 19.1%.
- **Turn → river (one card):** 9 ÷ 46 = 19.6%.

A **backdoor** (runner-runner) flush — you flop just *one* extra card of your suit and need both the turn and river to be your suit — comes in around 4.2%, worth roughly one extra out of equity. Not a reason to call, but a real tiebreaker on close spots. To turn any of these into a call-or-fold, run the number through [how to calculate pot odds](/en/blog/holdem-pot-odds).

---

## Straight Odds: Flopping One vs Drawing to One

![An eight-high straight laid out in sequence on green felt, the finished hand an open-ended draw is chasing](/images/holdem-reading-straight-example.webp "An open-ended straight draw fills from either end — eight outs, 31.5% to complete by the river")

Connectors like 8♠7♠ have their own lifecycle. You'll **flop a made straight only 1.3%** of the time (76-to-1) — rarer than most players assume. Far more often you flop a **draw**:

- **Open-ended straight draw (OESD):** ~10% of flops with connectors. Eight outs, completes **31.5%** by the river — 1 − C(39,2)/C(47,2) — or 17% on any single card.
- **Gutshot (inside) straight draw:** four outs, completes **16.5%** by the river, 8.5% on one card. Half the equity of an open-ender, which is why the same connectors play so differently depending on the flop.

Notice the OESD (31.5%) and the flush draw (35%) are close — both are "one big draw," both roughly a third to hit by the river. That's the shortcut worth internalizing: a normal big draw is about ==**one in three**== to complete by the river, and it halves to about one in six on a single street.

---

## Rare Flops: Quads, Trips, Full Houses & Straight Flushes

These are the numbers behind the best (and worst) nights of your poker life. Each is a clean combinatorics problem on the 19,600 possible flops:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Flop this | Holding | Odds | The math |
|:---|:---|:---:|:---:|
| **Quads** | A pocket pair | 0.245% · 407-to-1 | 48 ÷ 19,600 |
| **Full house** | A pocket pair | 0.98% · 101-to-1 | 192 ÷ 19,600 |
| **Trips** | Two unpaired cards | 1.35% · 73-to-1 | 264 ÷ 19,600 |
| **Straight flush** | Suited connectors | 0.02% · ~4,900-to-1 | 4 ÷ 19,600 |

</div>

One crucial distinction the top pages routinely botch: a **set** is a pocket pair plus one matching board card (11.8%), while **trips** is one *unpaired* hole card that the board pairs twice (1.35%). Same three-of-a-kind on paper, wildly different odds and playability — a set is disguised, trips are obvious. Don't let anyone tell you they're the same shape.

The straight flush number is the one to frame: with suited connectors there are exactly **four** flops that make it (one run in your suit), so 4 ÷ 19,600 ≈ 1 in 4,900. That's why flopped straight flushes are stories people tell for a decade.

The full house figure counts every way the flop hands you a boat with a pocket pair — including the flops that come as trips of another rank on top of your pair — which is why it reads 0.98% rather than the narrower ~0.73% some tables quote for "set plus a board pair" only.

---

## Odds of Being Dealt Your Hand

Before any of the above, there's the deal. With **1,326 possible two-card combinations**, here's how often the hands people ask about arrive:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Dealt this | Odds | How often |
|:---|:---:|:---:|
| Pocket aces (specific pair) | 220-to-1 · 0.45% | 6 ÷ 1,326 |
| Any pocket pair | 16-to-1 · 5.9% | 78 ÷ 1,326 |
| A-K suited | 331-to-1 · 0.3% | 4 ÷ 1,326 |
| Two suited cards | 3.25-to-1 · 23.5% | almost every 4th hand |

</div>

The one that surprises people: if **you** hold aces at a 10-handed table, the chance a *second* player also has aces is about **1 in 136** (nine opponents each 1 ÷ C(50,2) = 1/1,225). Rare, but it's exactly the aces-vs-aces cooler that empties a stack and gets blamed on "rigged" software. It's just the deck. For which of those 1,326 hands are worth playing from each seat, see the [starting hands chart by position](/en/blog/holdem-starting-hands-chart).

---

:::readnext[Keep reading]
/en/blog/holdem-outs | How to Count Outs in Poker | /images/holdem-outs-hero.webp
/en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
:::

## FAQ

**Q. What are the odds of flopping a set?**

A. About 11.8%, or 1 in 8.5, when you hold a pocket pair — usually quoted as "7.5-to-1 against." It comes from 1 − C(48,3)/C(50,3): of the 19,600 possible flops, 17,296 miss your pair. That number is the entire basis for whether set-mining a small pair is profitable.

**Q. Why do people say 7.5-to-1 but also 1 in 8?**

A. They're the same odds stated two ways. "7.5-to-1 against" counts misses versus hits (7.5 misses for every hit), which works out to 1 hit per 8.5 attempts — i.e. about 1 in 8.5, or 11.8%. "Odds against" and "1 in N" always describe the same probability; don't add them together.

**Q. What's the difference between a set and trips?**

A. A set is a pocket pair plus one matching card on the board — you flop it 11.8% of the time and it's well hidden. Trips is one unpaired hole card that the board pairs (two matching board cards) — only 1.35% on the flop, and far more obvious to opponents. Same three-of-a-kind rank, very different odds and value.

**Q. What are the odds of flopping a flush?**

A. Just 0.84% (about 118-to-1) with two suited cards — that's C(11,3)/C(50,3). Don't confuse it with flopping a flush *draw*, which is 10.9%, or *completing* that draw by the river, which is 35%. Two suited cards flop a draw thirteen times more often than a made flush.

**Q. If I flop a flush draw, what are the odds I complete it?**

A. About 35% by the river with nine outs (1 − C(38,2)/C(47,2)) — a little better than one in three. On a single card it's roughly 19%: 9/47 flop-to-turn, 9/46 turn-to-river. Use the one-card number whenever there's still betting to come.

**Q. What are the odds of flopping quads?**

A. 0.245%, or 407-to-1, holding a pocket pair — there are exactly 48 flops (your last two matching cards plus any third card, C(48,1)) out of 19,600. Flopping a straight flush is even rarer at about 1 in 4,900.

**Q. What are the odds of being dealt pocket aces?**

A. 220-to-1 (0.45%) for aces specifically — 6 of the 1,326 starting combinations. Any pocket pair is far more common at 16-to-1 (5.9%). And if you have aces at a full table, another player also holding aces is about 1 in 136.

**Q. What are the odds of set over set?**

A. There's no single fixed number — it depends on how many opponents hold pocket pairs — but when two players both have pairs and both flop sets it's roughly 1%. It's the ultimate cooler: you flop a set only 11.8% of the time to begin with, so two of you doing it on the same board is a story, not a mistake.

---

## The 3 Things to Remember

1. **Flop a set: 11.8% (7.5-to-1).** The number that decides every set-mining call — only call deep enough to be paid 15× or more when you hit.
2. **Made vs draw vs complete are different numbers.** Two suited cards flop a made flush 0.84%, a flush draw 10.9%, and complete that draw 35%. Never quote the wrong one.
3. **A big draw is about one in three by the river.** Flush draw 35%, open-ender 31.5% — and roughly one in six on a single street.

Every figure here comes straight from the deck, not a gut feeling. Take these into [how to count outs](/en/blog/holdem-outs) to build the number in real time, then [pot odds](/en/blog/holdem-pot-odds) to turn it into a call or fold — or back up to the complete [poker odds and probability chart](/en/blog/holdem-probability) for every made-hand and long-shot number in one place.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Odds &amp; Probability Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Every made hand and long-shot number in one place</div>
  </a>
  <a href="/en/blog/holdem-outs" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Count Outs in Poker</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Turn these odds into a live out count</div>
  </a>
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Is the price right for your draw?</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which pairs and suited hands to draw with</div>
  </a>
</div>
`.trim(),
};

export default POST;
