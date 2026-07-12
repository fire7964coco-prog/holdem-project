import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-outs",
  title: "How to Count Outs in Poker — The Skill Behind Every Odds Call",
  seoTitle: "How Many Cards Actually Save You? — Counting Outs in Poker",
  desc: "Counting outs is the skill nobody teaches first. Learn to count outs in poker fast — a draw-by-draw outs chart, the outs-to-odds table, and the dirty outs that quietly cost you money.",
  tldr: "An out is any card left in the deck that improves your hand to a likely winner. Count them, then convert: multiply outs by 4 on the flop or by 2 on the turn to get your rough % to hit. A flush draw is 9 outs ≈ 36% by the river.",
  category: "odds",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🎯",
  image: "/images/holdem-outs-hero.webp",
  imageAlt: "Infographic of counting outs — A♥ K♥ against a Q♠ J♦ 9♥ 4♣ 2♠ board where any ten completes the nut straight",
  tags: ["outs", "how to count outs in poker", "poker outs chart", "flush draw outs", "straight draw outs", "outs to odds", "dirty outs", "rule of 4 and 2"],
  content: `
For my first year at the table I "played my draws" without ever counting them. A flush draw and a gutshot felt about the same — both were "cards that could come" — so I called the same on both and wondered why I kept losing. The fix wasn't a strategy course. It was a five-minute habit: ==stop, and actually count the cards that save me.==

That habit is called counting **outs** — [poker's real answer to "counting cards"](/en/blog/holdem-card-counting "thumb:/images/holdem-card-counting-hero.webp") — and it's the single skill that sits underneath every odds decision in poker. Before you can ask "is this call profitable?" you have to answer "how many cards win the hand for me?" This guide is the counting half — the [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp") is the reference behind it, and [pot odds](/en/blog/holdem-pot-odds) is what you do with the number once you have it.

---

### Outs at a glance

:::stripe
9 | Outs in a flush draw
8 | Outs in an open-ended straight draw
×4 / ×2 | Multiply outs on the flop / turn for your %
:::

---

## What Are Outs in Poker?

**An out is any card still in the deck that turns your hand into a likely winner.** If you hold a flush draw, every remaining card of your suit is an out — catch one and you have a flush.

The word "likely" is doing quiet work there. A true out has to actually *win* the hand, not just improve your cards. Pairing your ten when a flush is already on the board isn't an out — you improved, but you're still losing. Learning to count outs is really learning to count the cards that win, and to ignore the ones that only *look* helpful.

Everything downstream — your equity, your [pot odds](/en/blog/holdem-pot-odds), your call-or-fold — starts from this one number. Get the out count wrong and every calculation after it is wrong too. And once you know the count, the [drawing odds](/en/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp") tell you exactly how often each draw actually gets there.

---

## How to Count Your Outs (Step by Step)

![A player holds the ace and king of spades and studies a low three-card flop on green felt, counting overcard outs before acting](/images/holdem-outs-counting.webp "A-K on a low flop is a textbook counting spot — six overcard outs, plus the backdoors")

Counting outs is a three-step routine you run on every draw until it's automatic:

:::steps
Name your draw | What hand are you chasing? Flush, straight, a bigger pair, a set — be specific about the target
Count the cards that complete it | There are 13 of each suit and 4 of each rank. Subtract the ones you can already see (your cards + the board)
Strip out the fakes | Cross off any "out" that completes your hand but still loses — a flush card that pairs the board, a straight that hands someone a higher one
:::

Take a flush draw: 13 cards of your suit exist, you can see **four** of them (two in your hand, two on the board), so ==g:13 − 4 = 9 outs==. That subtraction — counting the ones you *can't* catch because you're already holding them — is where beginners slip.

The counting only uses cards you can see. You don't subtract your opponent's unknown cards; you treat every unseen card as still live. That's why the standard out counts below hold up regardless of what anyone else is holding.

---

## Poker Outs Chart: Every Common Draw

![An eight-high straight laid out in sequence on green felt, showing the run of cards an open-ended draw is chasing](/images/holdem-reading-straight-example.webp "An open-ended straight draw fills from either end — eight outs, the second-biggest common draw")

Memorize these and you'll recognize your out count on sight. This is the chart every winning player has burned into memory:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Your draw | Outs | Why |
|:---|:---:|:---|
| Flush + open-ended straight | 15 | The monster — two draws at once |
| Flush draw | 9 | 13 of a suit − 4 you can see |
| Open-ended straight draw | 8 | Four cards on each end |
| Flush + gutshot | 12 | 9 flush + 4 gutshot − 1 shared card |
| Two overcards | 6 | Three of each rank to pair |
| One pair → two pair or trips | 5 | 3 to pair your kicker + 2 to trip up |
| Gutshot (inside straight) | 4 | Only one rank fills the hole |
| One overcard | 3 | Three cards to make top pair |
| Pocket pair → set | 2 | The last two of your rank |

</div>

The two combo draws at the top are where players fumble the arithmetic, so they get their own section below. Everything else is straight subtraction: count the ranks or suits that finish your hand, take away what you can see.

---

## Outs to Odds: The Conversion Chart

Counting outs is only useful once you turn them into a percentage you can compare to the price you're being offered. Here's the master table — the odds of hitting by the river, plus the one-card odds for when you're already on the turn:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Turn only (1 card) | By the river (2 cards) | River odds |
|:---|:---:|:---:|:---:|
| 2 | 4.3% | 8.4% | 11-to-1 |
| 4 | 8.5% | 16.5% | 5-to-1 |
| 6 | 12.8% | 24.1% | 3.1-to-1 |
| 8 | 17.0% | 31.5% | 2.2-to-1 |
| 9 | 19.1% | 35.0% | 1.9-to-1 |
| 12 | 25.5% | 45.0% | 1.2-to-1 |
| 15 | 31.9% | 54.1% | 0.85-to-1 |

</div>

Two numbers matter for every draw. **"By the river"** counts both remaining cards and applies when you're all-in on the flop with nothing left to bet. **"Turn only"** counts just the next card — use this the moment there's more betting to come, because you're only guaranteed to see one card at a time. Beginners quote the fat "by the river" number while facing a turn bet, talk themselves into a call, and pay for it.

Notice the 15-out monster: with two cards to come it's actually a **favorite** (54.1%), the rare draw you can happily get all-in with on the flop.

---

## The Rule of 4 and 2: Outs → Odds in Your Head

You can't carry that table to the table, so use the shortcut every player relies on:

- **On the flop (two cards to come):** outs ×4 ≈ your % to hit by the river.
- **On the turn (one card to come):** outs ×2 ≈ your % to hit on the river.

A flush draw is 9 outs. On the flop: 9 × 4 = **36%** (true value 35.0% — dead on). On the turn: 9 × 2 = **18%** (true 19.1% — close enough to act).

:::tip[The ×4 shortcut quietly assumes you'll see *both* cards with no more betting — only true when you're already all-in. If there's a bet in front of you, use the ×2 (one-card) number for the street you're actually on.]:::

There's one place the rule lies: **high out counts on the flop.** Because ×4 double-counts the small chance of hitting on *both* streets, it overshoots once you're past ~8 outs.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Outs | Rule says (×4) | True by river | Off by |
|:---|:---:|:---:|:---:|
| 8 | 32% | 31.5% | +0.5% |
| 9 | 36% | 35.0% | +1% |
| 12 | 48% | 45.0% | +3% |
| 15 | 60% | 54.1% | +6% |

</div>

The tidy fix for big draws: for **more than 8 outs on the flop**, multiply by 4 and then subtract *(outs − 8)*. For 15 outs: (15 × 4) − 7 = **53%**, almost exactly right. For everyday draws of 8 outs or fewer, plain ×4 and ×2 are all you need. The full derivations live in the [probability chart](/en/blog/holdem-probability).

---

## Combo Draws: Why 9 + 8 Isn't 17

The big draws trip people up because you can't just add the two out counts — some cards do double duty, and counting them twice inflates your equity.

Say you hold ==b:J♠ T♠== on a ==9♠ 8♣ 2♠== flop. You have two draws stacked: a flush draw (spades) and an open-ended straight draw (any Q or 7 makes the straight). Add them naively and you get 9 + 8 = 17. But the **Q♠ and 7♠** each complete *both* the flush and the straight — they're already inside the 9 flush outs. Count them once:

- Flush outs: **9** (every spade)
- Straight outs that aren't spades: Q♥ Q♦ Q♣, 7♥ 7♦ 7♣ = **6**
- Total: **15 outs**, not 17

Same logic on a **flush + gutshot**: 9 flush outs + 4 gutshot cards, but one of those four is your suit → 9 + 3 = **12**. Whenever two draws share a card, subtract the overlap. This is the single most common way players overcount, and it's why the combo rows in the chart look "one short" of the sum.

---

## Dirty Outs: The Cards That Only Look Like Wins

![Infographic of a paired 10♠ 8♥ 4♠ 4♣ 6♦ board separating clean outs from dirty outs](/images/holdem-outs-dirty-outs.webp "On a paired board some of your outs are dirty — hitting the flush can still pay off a full house")

This is the section most guides skip, and it's the one that actually saves money. A **dirty out** (or "tainted" out) is a card that completes your hand but can still lose — so counting it at full value overstates your equity. Winning players count raw outs, then *discount* the dirty ones before reaching for the Rule of 4 and 2.

Three situations to train your eye for:

:::card
♠ | The non-nut flush | Holding 8♠7♠ on K♠9♠2♣, you have 9 spade "outs" — but if a spade comes and an opponent holds a bigger spade, you make a flush and still lose. Discount your outs when you're not drawing to the nut flush
🂮 | The paired board | A flush draw on a board like J♥8♥8♣ looks like 9 clean outs, but the board is already paired — a made full house may be waiting, so some of your flushes are dead on arrival
🃁 | Overcards into strength | Two overcards (A-K on Q-8-3) count as 6 outs on paper, but if a big raise screams a set or two pair, pairing your ace often isn't good — count 3, maybe 4, not 6
:::

You rarely know the exact discount, and that's fine. The move is directional: when the board or the action tells you an out might not win, shave the count *down* before you convert. A player who counts 9 outs on a paired board and calls the pot is paying full price for a draw that's quietly worth six. Reading which outs are clean is a board-texture skill — build it with [how to read the board](/en/blog/holdem-reading-the-board).

---

:::readnext[Keep reading]
/en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
/en/blog/holdem-probability | Poker Odds & Probability Chart | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. What are outs in poker?**

A. Outs are the cards remaining in the deck that improve your hand into a likely winner. A flush draw has 9 outs (the 9 unseen cards of your suit); an open-ended straight draw has 8. You count them to work out your chance of hitting and whether a call is profitable.

**Q. How do you count outs in poker?**

A. Name the hand you're chasing, count how many cards complete it (13 of each suit, 4 of each rank), subtract the ones you can already see in your hand and on the board, then cross off any "dirty" outs that would still lose. A flush draw is 13 − 4 = 9.

**Q. How many outs does a flush draw have?**

A. Nine. There are 13 cards of each suit; with two in your hand and two on the board you can see four, leaving 9 unseen cards that complete your flush. That's roughly 35% to hit by the river from the flop.

**Q. How many outs does an open-ended straight draw have?**

A. Eight — four cards on each end fill the straight. A gutshot (inside) straight draw has only 4 outs because just one rank fills the gap. A double gutshot also has 8, the same as an open-ender.

**Q. What is the rule of 4 and 2?**

A. A shortcut to turn outs into a percentage: on the flop multiply outs by 4 for your chance to hit by the river; on the turn multiply by 2 for the river card. Nine flush outs ≈ 36% on the flop, 18% on the turn. Use ×4 only when you'll see both cards without more betting.

**Q. What are dirty or tainted outs?**

A. Cards that complete your hand but can still lose — a flush card when a bigger flush is possible, a straight card that also makes someone a higher straight, or overcards against a likely set. Discount (or don't count) dirty outs before converting to odds, or you'll overrate your equity.

**Q. How many outs is a flush draw plus a straight draw?**

A. 15, not 17. A flush draw is 9 outs and an open-ended straight is 8, but two of the straight cards are also your suit and are already counted in the flush — so you subtract the overlap. Fifteen outs is a favorite to hit by the river (about 54%).

**Q. Do you count your opponent's cards when counting outs?**

A. No. You only subtract cards you can actually see — your hole cards and the community board. Every other unseen card is treated as live, which is why the standard out counts (9 for a flush, 8 for an open-ender) hold no matter what your opponents hold.

---

## The 3 Things to Remember

1. **Count what wins, not what improves.** An out has to make the *best* hand, not just a better one. Subtract only the cards you can see.
2. **Convert with 4 and 2.** Outs × 4 on the flop, × 2 on the turn. Trim the estimate for big draws (over 8 outs) by subtracting *(outs − 8)*.
3. **Discount the dirty ones.** Non-nut flushes, paired boards, and overcards into strength all shrink your real out count. When in doubt, count fewer.

Nail the count and the rest of poker math falls into place. Take your out count straight into [how to calculate pot odds](/en/blog/holdem-pot-odds) to see if the price is right, or back up to the full [poker odds and probability chart](/en/blog/holdem-probability) for the exact number behind every draw.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Turn your out count into a call-or-fold</div>
  </a>
  <a href="/en/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Odds &amp; Probability Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The full reference behind every draw</div>
  </a>
  <a href="/en/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board Reading</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Read the Board</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Spot every draw so you count clean outs</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Enter pots with hands worth drawing to</div>
  </a>
</div>
`.trim(),
};

export default POST;
