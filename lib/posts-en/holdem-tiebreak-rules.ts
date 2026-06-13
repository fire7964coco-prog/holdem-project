import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "Same Pair, Same Hand — Who Wins? Poker Kickers and Ties Explained",
  seoTitle: "Same Pair but You Still Lost? — Poker Kicker & Tie-Breaker Rules",
  desc: "You both had a pair of aces and you still lost the pot — the kicker did it. Here's the exact 3-step tie-breaker order, the kicker rule for every hand, the best-five-of-seven trap, and when a tie becomes a split pot.",
  tldr: "When two hands share the same rank, first compare the cards that make the hand, then the kickers from highest to lowest. If all five cards match, the pot is split — suits never break a tie.",
  category: "초보 가이드",
  date: "2026-06-13",
  updated: "2026-06-13",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "⚖️",
  tags: ["poker kicker", "poker tie breaker", "who wins same pair poker", "poker tie rules", "split pot", "best five card hand", "texas holdem ties"],
  content: `
You turn over a pair of aces. So does your opponent. The dealer pushes the pot to *them*. Same pair — how did you lose?

One word: **kicker**. Same-hand showdowns happen far more often than beginners expect, and if you don't know how they're decided, the result feels random (and a lot of people end up arguing with the dealer). Here's every tie-breaker rule in one place.

---

> **Quick answer**
> When two hands are the same rank, compare the cards that *make* the hand first (the pair, the trips, and so on). If those tie, compare the leftover cards — the **kickers** — from highest to lowest. If all five cards match exactly, the pot is **split**. Suits never break a tie in Texas Hold'em.

---

## The 3-Step Tie-Breaker

Every showdown in Hold'em is resolved with the same three checks, in order:

| Step | Compare | Detail |
|:---:|---|---|
| **1** | Hand rank | The higher category always wins (a flush beats a straight, etc.) |
| **2** | The cards that make the hand | Same rank? The higher pair / trips / top card wins |
| **3** | Kickers | Still tied? Compare the leftover cards, highest first |

If step 1 settles it, you never reach step 2. If step 3 still can't separate the hands, the pot is split. Steps 2 and 3 come up constantly, which is exactly why kickers matter so much.

---

## What Is a Kicker?

A **kicker** is a card in your best five that isn't part of the made hand but is still used to break ties. With one pair, two cards form the pair and the other three act as kickers, compared from the top down.

### Kicker example — both hold a pair of aces

**Player A:** A♠ K♦  ·  **Player B:** A♥ 9♣
**Board:** A♦ Q♠ 7♥ 3♣ 2♦

- A's best five: **A♠ A♦** K♦ Q♠ 7♥ → top kicker **K**
- B's best five: **A♥ A♦** Q♠ 9♣ 7♥ → top kicker **Q**

K beats Q, so **Player A wins**. Both flopped aces; the side card decided the pot. This is the single most common way beginners lose a hand they thought was a tie — so the *quality* of your second card matters as much as the pair itself, which is why [starting-hand selection](/en/blog/texas-holdem-rules-for-beginners) is so important.

> **The trap:** Player B held a 9 but their kicker is the board's **Q**. You always build the best five from seven cards — a high board card can outrank your hole card and take the kicker slot.

---

## The Best-Five-of-Seven Trap

Most tie confusion comes from one false belief: *"I have to use both of my hole cards."* You don't. In Hold'em you use the **best five cards** out of your two hole cards plus the five community cards — two of them, one, or even none.

Run this scan at showdown:

1. **My best five** — what's the strongest five-card hand I can make from seven?
2. **Their best five** — same rank, or higher?
3. **The made cards** — whose pair / trips / top card is higher?
4. **The kickers** — if still tied, compare leftovers from the top.

When a strong hand is already on the board, your hole cards can get pushed *out* of your best five. In those spots, "I have an ace, so I win" is wrong — what matters is whether the ace actually lands in your final five.

---

## Kicker Rules for Every Hand

Some hands use kickers; others are settled entirely by the cards that make them. The badge shows whether a kicker comes into play.

:::tiebreak
Royal Flush|Always a tie (split pot)|-No kicker
Straight Flush|Highest card only|-No kicker
Four of a Kind|Quad rank → 5th card|+Kicker
Full House|Trips rank → pair rank|-No kicker
Flush|Compare all 5, high to low|+Kicker
Straight|Highest card only|-No kicker
Three of a Kind|Trips rank → 2 kickers|+Kicker
Two Pair|High pair → low pair → kicker|+Kicker
One Pair|Pair rank → 3 kickers|+Kicker
High Card|Compare all 5, high to low|+Kicker
:::

A few that trip people up:

- **Two pair:** compare the high pair, then the low pair, then the one kicker. KK-QQ-A beats KK-JJ-A because queens top jacks before the kicker is even checked.
- **Full house:** compare the trips first, then the pair — there's no kicker. KKK-AA beats KKK-QQ on the pair.
- **Straight & flush:** a straight is decided by its top card only; a flush compares all five cards but **never** by suit.

If you want the matchup that confuses players most — flush versus straight — broken down on its own, see [does a flush beat a straight](/en/blog/holdem-flush-vs-straight).

---

## When a Tie Becomes a Split Pot

If both players' best five cards are identical in rank, nobody wins outright — the pot is **split** (also called a "chop"). The classic case is the board playing: on A♣ A♦ K♠ Q♥ J♣, everyone's best five is A-A-K-Q-J, so the pot is shared. Suits do not break the tie, and any odd chip goes to the player nearest the dealer's left.

The full set of situations — and the three things players wrongly think will win a tie — are covered in the [split pot rules guide](/en/blog/holdem-split-pot-rules).

---

## FAQ

**Q. Who wins if both players have the same pair?**

A. The player with the higher kicker wins; if the first kicker ties, compare the next, and so on. If all five cards match, the pot is split.

**Q. What is a kicker in poker?**

A. A kicker is a card in your best five-card hand that isn't part of the made hand but is used to break ties between equal hands, such as two players holding the same pair.

**Q. Do suits ever break a tie in Texas Hold'em?**

A. No. There is no suit ranking in Hold'em, so if two best five-card hands are identical in rank, the pot is split regardless of suit.

**Q. Does a higher kicker always win?**

A. Only if the kicker is part of your best five-card hand. If the board provides higher kickers than your hole cards, your kicker doesn't play and the hands may tie.

**Q. Do straights and flushes use kickers?**

A. Straights are decided by the highest card with no kicker. Flushes compare all five cards from the top, so the lower cards act like kickers — but suit is never used.

**Q. Can three players split one pot?**

A. Yes. If three players all have the identical best five-card hand, the pot is divided three ways, with any odd chips given to the earliest players clockwise from the dealer.

---

## The Takeaways

1. Tie-breaking is always: **hand rank → made cards → kickers → split**.
2. A **kicker** breaks ties between equal hands; guard it, because most "same hand" losses come down to one side card.
3. Build the **best five of seven** — your hole cards can fall out of the hand, and suits never decide a tie.

Lock in the order with the [complete hand rankings](/en/blog/holdem-hand-rankings), settle the famous matchup in [flush vs straight](/en/blog/holdem-flush-vs-straight), and see exactly when chips get shared in the [split pot guide](/en/blog/holdem-split-pot-rules).
`.trim(),
};
