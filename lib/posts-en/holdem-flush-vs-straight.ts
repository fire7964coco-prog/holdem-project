import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-flush-vs-straight",
  title: "Does a Flush Beat a Straight? The Math and the Misreads",
  seoTitle: "Does a Flush Beat a Straight? Yes — and What Beats a Flush",
  desc: "Slid a straight forward — and a flush took the pot? A flush always beats a straight. Here's the math, what beats a flush, and 3 boards that fool players.",
  tldr: "A flush (five cards of one suit — ~0.197% of five-card deals) always beats a straight (five in sequence, ~0.392%) in Texas Hold'em — because a flush is about twice as hard to make.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "⚡",
  image: "/images/holdem-flush-vs-straight-hero.webp",
  imageAlt: "Infographic: ace-high flush A♠ J♠ 9♠ 6♠ 2♠ beside a nine-high straight with a gold FLUSH WINS badge explaining why a flush ranks higher",
  tags: ["does a flush beat a straight", "flush vs straight", "what beats a flush", "what is a straight flush", "why does a flush beat a straight", "flush vs full house", "higher flush", "flush and straight difference"],
  content: `
The first big pot I ever lost in a live cash game went exactly like this: I rivered a ten-high straight, slid it forward like it was gold — and a quiet regular flipped over two hearts. ==r:The dealer pushed the pot the other way==, and I replayed that hand the whole drive home.

If that just happened to you, the short answer is ==g:yes — a flush beats a straight, every single time==. The interesting parts are *why*, what else beats a flush, and the three board spots where players still get it wrong live at the table.

---

### The Short Answer

:::stripe
Flush > Straight | No exceptions in standard Texas Hold'em
5,108 vs 10,200 | Five-card flush combos vs straight combos — the flush is ~2× rarer
#5 vs #6 | Where flush and straight sit in the 10-hand ranking
:::

> **Quick answer**
> A **flush always beats a straight** in Texas Hold'em — no exceptions in the standard game. A flush (five cards of one suit) is statistically harder to make than a straight (five cards in sequence): about **5,108** five-card combinations versus **10,200**.

---

## Does a Flush Beat a Straight? Where the Two Hands Sit

Yes — and it's not close to a judgment call. ==The flush sits one rung above the straight, and that never changes in standard Hold'em.== Here's the neighborhood around the two hands people confuse most:

| Rank | Hand | Example |
|------|------|------|
| #2 | Straight Flush | 9♥ 8♥ 7♥ 6♥ 5♥ |
| #4 | Full House | J♠ J♥ J♦ 8♠ 8♥ |
| **#5** | **Flush** | A♠ J♠ 9♠ 6♠ 2♠ |
| **#6** | **Straight** | 9♣ 8♥ 7♦ 6♣ 5♠ |
| #7 | Three of a Kind | Q♠ Q♥ Q♦ 7♠ 3♣ |

Want all ten hands with odds, examples, and board puzzles? That lives in the [full poker hand rankings guide](/en/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") — this article zooms in on the flush-versus-straight matchup and its closest neighbors.

---

## Why Does a Flush Beat a Straight? The Math

Hand strength in poker is decided by one thing: **how hard the hand is to make**. The rarer it is, the higher it ranks. Nothing about the order is arbitrary — it's pure frequency.

Count the 2,598,960 possible five-card hands from a 52-card deck and the order falls out on its own:

| Hand | Combinations | Probability | Verdict |
|:---|:---:|:---:|:---|
| Four of a Kind | 624 | 0.024% | Beats flush |
| Full House | 3,744 | 0.144% | Beats flush |
| **Flush** | **5,108** | **0.197%** | **Beats straight ✅** |
| **Straight** | **10,200** | **0.392%** | **Loses to flush ❌** |
| Three of a Kind | 54,912 | 2.11% | Loses to straight |

A straight has roughly ==r:**twice** as many ways to come together as a flush==, so it shows up twice as often — which makes it the weaker hand. The same frequency rule explains the entire ladder; the exact numbers for every hand are in the [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

### Why this feels backwards

A straight only needs five ranks in a row, and ==**the suits don't matter**==. That freedom creates a huge number of combinations. A flush is the opposite: every one of the five cards has to share ==**the same suit**==, and only one of four suits can do it at a time. ==g:Far fewer ways to get there means the flush is rarer — and rarer always wins.==

:::tip[If you hold a flush draw and your opponent is drawing to a straight, you're in great shape — even when **both** draws complete, your flush beats their straight at showdown.]:::

---

## 3 Board Spots That Still Fool Players

![Board showing 8♥ 7♥ 6♥ 5♠ A♣ — three hearts on board means a flush is live even if you hold a straight](/images/holdem-flush-vs-straight-board.webp "Three suited cards on board — flush draw live against your straight")

Knowing the rule isn't the same as reading it live — that skill is exactly what [reading the board](/en/blog/holdem-reading-the-board) trains. These are the three spots where the mistake actually happens.

### Spot 1 — You make a straight, but the board is three of a suit

:::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cards):::

You hold **9♠ 10♠** for a clean **6-7-8-9-10 straight**. Feels strong — but the board shows **three hearts**. If your opponent holds two hearts, they have a flush, and **flush beats straight**. Any time three or more of one suit are on the board, a flush is live; price your bets and calls accordingly.

### Spot 2 — Drawing to both a straight and a flush

:::hand[8♥,7♥,6♠,2♣] Board (4 cards, turn):::

You hold **9♥ 5♥**. You've already got the **5-6-7-8-9 straight** — so why keep eyeing the hearts? Because you also hold **four to a flush** (9♥ 8♥ 7♥ 5♥): any heart on the river upgrades your straight to a flush, and the **6♥ specifically** completes a **5-6-7-8-9 straight flush (#2)** that crushes everything. When you can draw to a bigger hand for free, play with that upgrade in mind.

### Spot 3 — You have the flush, they table a straight

:::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cards):::

You hold **A♠ 6♠** → **A♠ J♠ 9♠ 7♠ 6♠**, an ace-high flush. Your opponent shows **10♥ 8♦** for a 7-8-9-10-J straight and announces it confidently. Don't blink: your flush is higher. Flush over straight, always.

---

## What Beats a Flush in Poker?

Your flush is a favorite against most of the deck — but exactly **four hand types** (plus a bigger flush) beat it:

:::compare
Beats your flush | Loses to your flush
Full house (#4) | Straight (#6)
Four of a kind (#3) | Three of a kind (#7)
Straight flush (#2) | Two pair (#8)
Royal flush (#1) | One pair & high card (#9–#10)
A higher flush | Any lower flush
:::

The matchup people argue about most after flush vs straight is **flush vs full house** — and the boat wins. The danger sign is a **paired board**. Watch this one:

:::hand[K♠,9♠,9♥,4♠,2♦] Board (5 cards):::

You hold **A♠ 5♠** for the nut flush: **A♠ K♠ 9♠ 5♠ 4♠**. Your opponent holds **K♦ 9♦** and tables **9♦ 9♠ 9♥ K♦ K♠** — nines full of kings. ==r:Full house beats flush==, and no flush survives it. On an unpaired board your ace-high flush is beaten only by a straight flush; the moment the board pairs, full houses and quads enter the picture.

When two players hold the *same* hand type, the winner comes down to card-by-card comparison — the full system is in the [poker tie-breaker and kicker rules](/en/blog/holdem-tiebreak-rules).

---

## Flush vs Flush, Straight vs Straight — Who Wins the Tie?

Yes, one flush can absolutely be higher than another. **Suits are irrelevant** — compare the five cards from the top down, highest first:

| Player | Flush | Result |
|--------|------|------|
| A | A♠ J♠ 9♠ 6♠ 2♠ | **Wins** |
| B | K♥ Q♥ 10♥ 8♥ 3♥ | Loses |

Player A's ace tops Player B's king on the very first card, so A wins. A spade flush does **not** beat a heart flush — only the ranks matter.

Straights are even simpler: compare the **highest card** only — there's no kicker.

- **A-K-Q-J-10** (ace high, "Broadway") is the strongest straight.
- **A-2-3-4-5** (the "wheel," ace plays low) is the weakest.

| Player | Straight | Result |
|--------|------|------|
| A | Q-J-10-9-8 | **Wins** |
| B | J-10-9-8-7 | Loses |

Queen tops jack, so A wins. If both players' best five cards are identical in rank, it's a [split pot](/en/blog/holdem-split-pot-rules).

---

## What Is a Straight Flush? When Both Happen at Once

![9♥ 8♥ 7♥ 6♥ 5♥ — a straight flush in hearts, the #2 hand in poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — five hearts in sequence, beaten only by a royal flush")

A **straight flush** is five *consecutive* cards of *one suit* — like 9♥ 8♥ 7♥ 6♥ 5♥. It's the **#2 hand in poker**, beaten only by a royal flush (which is simply the ace-high straight flush, A-K-Q-J-10 suited). At just **36 combinations (~0.00139%)**, it's rarer than everything except the royal itself.

The catch: ==the *same five cards* must be both suited and in sequence==. Watch the difference on the board **8♥ 7♥ 6♥ Q♠ 3♦**:

- Hold **K♥ 2♥** → your five hearts are K-8-7-6-2. Not consecutive — that's ==a plain flush, not a straight flush==.
- Hold **10♥ 9♥** → your five hearts are 10-9-8-7-6. Consecutive *and* suited — ==g:a 10-high straight flush==.

If your straight uses some cards and your flush uses others, you don't add them together — you simply play the higher of the two, the flush.

---

## The One Real Exception: Short Deck

In **Short Deck (6+) Hold'em**, the 2s through 5s are removed from the deck. With fewer cards, a flush becomes *harder* to make than a full house — so in that format the ranking shifts and a ==r:**flush beats a full house**==. The principle never changes: ==the rarer hand wins==. Only the deck changed. In standard Texas Hold'em with a full 52-card deck, ==g:a flush beats a straight and loses to a full house, every time==.

---

:::readnext[Keep reading]
/en/blog/holdem-tiebreak-rules | Kicker & Tie-Breaker Rules | /images/holdem-tiebreak-hero.webp
/en/blog/holdem-split-pot-rules | When Is a Pot Split? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. Does a flush beat a straight in poker?**

A. Yes. A flush is the #5 hand and a straight is #6, so a flush always wins in standard Texas Hold'em. Five cards of one suit are statistically harder to make than five in sequence, and the rarer hand always ranks higher.

**Q. Does a straight beat a flush?**

A. No. A straight (#6) never beats a flush (#5) in standard Texas Hold'em. It's a common mix-up because a straight can feel harder to complete, but a flush is roughly twice as rare — so the flush always takes the pot.

**Q. Why does a flush beat a straight?**

A. Pure math. A straight ignores suits, so there are about 10,200 ways to make one, versus only 5,108 ways to make a flush. The flush is about twice as rare, and in poker the rarer hand always ranks higher.

**Q. What beats a flush in poker?**

A. A full house, four of a kind, a straight flush, and a royal flush all beat a flush — and so does a higher flush (better top card). Everything below it (straight, three of a kind, two pair, one pair, high card) loses to it.

**Q. What beats a straight in poker?**

A. A flush, full house, four of a kind, straight flush, and royal flush all beat a straight — plus any higher straight. A straight still beats three of a kind and everything below. The full best-to-worst order is in the [complete hand rankings](/en/blog/holdem-hand-rankings).

**Q. Can you have a higher flush than another player?**

A. Yes. Two flushes are compared card by card from the top down, so an ace-high ("nut") flush beats a king-high flush. If the top cards match, the second-highest decides, and so on through all five.

**Q. Does the suit of a flush matter?**

A. No. Texas Hold'em has no suit ranking. Suits only matter for *making* a flush, never for comparing hands — when two flushes clash (always the same suit in Hold'em, since they share board cards), only the ranks decide, and identical ranks split the pot.

**Q. Can a flush and a straight ever tie or split the pot?**

A. No. One hand is always ranked above the other, so the flush simply wins. A split only happens between two hands of the exact same rank with the exact same five-card values.

---

## The Takeaways

1. **Flush (#5) beats straight (#6)** — no exceptions in standard Hold'em.
2. It wins because it's about **twice as rare**: 5,108 flush combos vs 10,200 straight combos.
3. Watch the board: **three of one suit** means a flush is live, a **paired board** means a full house can beat your flush, and suited *plus* connected is a straight flush.

Lock in the full order with the [complete hand rankings](/en/blog/holdem-hand-rankings), learn how close hands are decided in the [tie-breaker and kicker guide](/en/blog/holdem-tiebreak-rules), and if you're brand new, the [beginner's guide to Texas Hold'em rules](/en/blog/texas-holdem-rules-for-beginners) ties it all together.

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
