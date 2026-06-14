import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Does a Flush Beat a Straight? The Math, the Misreads, and Every Tie Rule",
  seoTitle: "Played a Straight, Lost to a Flush? — Why a Flush Beats a Straight",
  desc: "Straight felt unbeatable — then a flush took the pot? A flush always beats a straight. Here's why, 3 board spots that fool players, and every tie-break rule.",
  tldr: "A flush (five cards of one suit, ~0.197%) always beats a straight (five in sequence, ~0.392%) in Texas Hold'em — because a flush is about twice as hard to make.",
  category: "초보 가이드",
  date: "2026-06-13",
  updated: "2026-06-13",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Flush hand (A J 6 2 spades) facing a straight (9 8 7 5 mixed suits) at showdown with dealer button between them",
  tags: ["does a flush beat a straight", "flush vs straight", "poker hand rankings", "why does a flush beat a straight", "flush tie breaker", "straight tie breaker", "poker odds"],
  content: `
You slide your straight forward, sure it's good — then your opponent quietly turns over a flush and ==r:the dealer pushes the pot the other way==. If you've felt that exact sting, you're in good company: "does a flush beat a straight" is one of the most-searched poker questions on the planet.

The short answer is ==g:yes, every time==. The interesting part is *why* — and the three board spots where players still get it wrong live at the table.

---

> **Quick answer**
> A **flush always beats a straight** in Texas Hold'em — no exceptions in the standard game. A flush is five cards of one suit; a straight is five cards in sequence. The flush wins because it's statistically harder to make: about **5,108** ways to make a flush versus **10,200** ways to make a straight.

---

## A Flush Beats a Straight — Where They Sit

Here's the hierarchy around the two hands people confuse most. ==The flush sits one rung above the straight, and that never changes in standard Hold'em.==

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Rank | Hand | Example |
|------|------|------|
| 1 | Royal Flush | A♠ K♠ Q♠ J♠ 10♠ |
| 2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| 3 | Four of a Kind | K♠ K♥ K♦ K♣ 7♠ |
| 4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **6** | **Straight** | 9♠ 8♥ 7♦ 6♣ 5♠ |
| 7 | Three of a Kind | Q♠ Q♥ Q♦ 7♠ 3♣ |
| 8 | Two Pair | K♠ K♦ 8♥ 8♣ A♠ |
| 9 | One Pair | A♠ A♦ K♥ 9♣ 3♠ |
| 10 | High Card | A♠ K♦ J♥ 7♣ 2♠ |

Want the whole ladder with odds and examples? Start with the [full poker hand rankings guide](/en/blog/holdem-hand-rankings). This article zooms in on the flush-versus-straight matchup.

</div>

---

## Why a Flush Wins — Proven With the Math

Hand strength in poker is decided by one thing: **how hard the hand is to make**. The rarer it is, the higher it ranks. Nothing about the ranking is arbitrary — it's pure frequency.

Count the five-card combinations possible from a 52-card deck and the order falls out on its own:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | Combinations | Probability | Verdict |
|------|------|------|------|
| Four of a Kind | 624 | 0.024% | Beats flush |
| Full House | 3,744 | 0.144% | Beats flush |
| **Flush** | **5,108** | **0.197%** | **Beats straight ✅** |
| **Straight** | **10,200** | **0.392%** | **Loses to flush ❌** |
| Three of a Kind | 54,912 | 2.11% | Loses to straight |

</div>

A straight has roughly ==r:**twice** as many ways to come together as a flush==, so it shows up twice as often — which makes it the weaker hand.

### Why this feels backwards

A straight only needs five ranks in a row, and ==**the suits don't matter**==. That freedom creates a huge number of combinations. A flush is the opposite: every one of the five cards has to share ==**the same suit**==, and only one of four suits can do it at a time. ==g:Far fewer ways to get there means the flush is rarer — and rarer always wins.==

> **At the table:** if you hold a flush draw and your opponent is drawing to a straight, you're in great shape. Even when **both** draws complete, your flush beats their straight at showdown.

---

## 3 Board Spots That Still Fool Players

![Board showing 8♥ 7♥ 6♥ 5♠ A♣ — three hearts on board means a flush is live even if you hold a straight](/images/holdem-flush-vs-straight-board.webp "Three suited cards on board — flush draw live against your straight")

Knowing the rule isn't the same as reading it live. These are the three spots where the mistake actually happens.

### Spot 1 — You make a straight, but the board is three of a suit

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cards):::

You hold **9♠ 10♠** for a clean **6-7-8-9-10 straight**. Feels strong — but the board shows **three hearts**. If your opponent holds two hearts, they have a flush, and **flush beats straight**. Any time three or more of one suit are on the board, a flush is live; price your bets and calls accordingly.

### Spot 2 — Drawing to both a straight and a flush

:::hand[8♥,7♥,6♠,2♣] Board (4 cards, turn):::

You hold **9♥ 5♥**. You've already got the **5-6-7-8-9 straight** — so why keep eyeing the hearts? Because if another heart lands, your hand becomes a **straight flush (#2)**, which crushes everything. When you can draw to the bigger hand for free, play with that upgrade in mind.

### Spot 3 — You have the flush, they table a straight

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cards):::

You hold **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, an ace-high flush. Your opponent shows **10♥ 8♦** for a 7-8-9-10-J straight and announces it confidently. Don't blink: your flush is higher. Flush over straight, always.

---

## Flush vs Flush — How the Tie Breaks

Two flushes? **Suits are irrelevant.** Compare the five cards from the top down, highest first.

| Player | Flush | Result |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Wins** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Loses |

Player A's ace tops Player B's king on the very first card, so A wins. A spade flush does **not** beat a heart flush — only the ranks matter. If all five ranks match, it's a [split pot](/en/blog/holdem-split-pot-rules). For the full breakdown of how every hand type is decided, see the [poker tie-breaker and kicker rules](/en/blog/holdem-tiebreak-rules).

---

## Straight vs Straight — How the Tie Breaks

Straights are compared by the **highest card** only — there's no kicker.

- **A-K-Q-J-10** (ace high, "Broadway") is the strongest straight.
- **A-2-3-4-5** (the "wheel," ace plays low) is the weakest.

| Player | Straight | Result |
|--------|------|------|
| A | Q-J-10-9-8 | **Wins** |
| B | J-10-9-8-7 | Loses |

Queen tops jack, so A wins. If the top cards match, the straights are identical and the pot is split.

---

## When Both Happen at Once: the Straight Flush

![9♥ 8♥ 7♥ 6♥ 5♥ — a straight flush in hearts, the #2 hand in poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — five hearts in sequence, beaten only by a royal flush")

If your five cards are **both** suited **and** in sequence, you don't have "a flush plus a straight" — you have a **straight flush (#2)**, beaten only by a royal flush. So the moment your flush cards are also connected (like 9♥ 8♥ 7♥ 6♥ 5♥), you're holding one of the rarest hands in the game.

---

## The One Real Exception: Short Deck

In **Short Deck (6+) Hold'em**, the 2s through 5s are removed from the deck. With fewer cards, a flush becomes *harder* to make than a full house — so in that format the ranking shifts and a ==r:**flush beats a full house**==. The principle never changes: ==the rarer hand wins==. Only the deck changed. In standard Texas Hold'em with a full 52-card deck, ==g:a flush beats a straight and loses to a full house, every time==.

---

## FAQ

**Q. Does a flush beat a straight in poker?**

A. Yes. A flush is the #5 hand and a straight is #6, so a flush always wins in standard Texas Hold'em because five cards of one suit are harder to make than five in sequence.

**Q. Why does a flush beat a straight if a straight looks harder?**

A. A straight ignores suits, so there are about 10,200 ways to make one, versus only 5,108 ways to make a flush — the flush is roughly twice as rare, so it ranks higher.

**Q. Does the suit of a flush matter?**

A. No. In Texas Hold'em there is no suit ranking, so a spade flush and a heart flush of the same ranks are equal — two identical flushes split the pot.

**Q. What beats a flush?**

A. A full house, four of a kind, a straight flush, and a royal flush all beat a flush; everything below it (straight, trips, two pair, one pair, high card) loses to it.

**Q. Can a flush and a straight ever tie or split the pot?**

A. No. One is always ranked above the other, so the flush simply wins — a split only happens between two hands of the exact same rank and cards.

---

## The Takeaways

1. **Flush (#5) beats straight (#6)** — no exceptions in standard Hold'em.
2. It wins because it's about **twice as rare**: 5,108 flush combos vs 10,200 straight combos.
3. Watch the board: **three of one suit** means a flush is live, and a suited *and* connected hand is a straight flush.

Lock in the order with the [complete hand rankings](/en/blog/holdem-hand-rankings), learn how close hands are decided in the [tie-breaker and kicker guide](/en/blog/holdem-tiebreak-rules), and if you're brand new, the [beginner's guide to Texas Hold'em rules](/en/blog/texas-holdem-rules-for-beginners) ties it all together.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Hand Rankings — Best to Worst</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">All 10 hands with odds, examples, and board puzzles</div>
  </a>
  <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker & Tie-Breaker Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Same flush or straight — who wins the pot?</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">When Is a Pot Split?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">5 chop situations including identical flushes</div>
  </a>
</div>
`.trim(),
};
