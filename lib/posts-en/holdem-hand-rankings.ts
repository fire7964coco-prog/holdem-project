import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-hand-rankings",
  title: "Poker Hand Rankings in Texas Hold'em — Best to Worst, With the Odds",
  seoTitle: "Thought You Won but Lost the Pot? — Poker Hand Rankings & Ties",
  desc: "Flopped a flush and still lost the pot? It's almost always one missed rule. Here are all 10 poker hand rankings from best to worst, the real odds behind each, and exactly how kickers and ties decide the winner.",
  tldr: "Poker hand rankings from best to worst are: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, and High Card.",
  category: "hand-rankings",
  date: "2026-06-09",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🃏",
  image: "/images/holdem-hand-rankings-hero.webp",
  imageAlt: "Royal Flush — 10 J Q K A of spades on a poker table with chip stacks and dealer button",
  tags: ["poker hand rankings", "texas holdem hands", "poker hands order", "what beats what in poker", "poker kicker", "poker tie breaker", "best poker hands", "holdem hand chart"],
  content: `
You're heads-up on the river. You made your flush, you're sure it's good — and then ==r:the dealer pushes the pot the other way==. The board was paired, your opponent had a full house, and you never saw it coming.

Almost every "I thought I won" moment comes down to one thing: ==not reading the **poker hand rankings** fast enough==. The order itself takes five minutes to learn. Reading it live, under pressure, with a paired or coordinated board — ==that's the part nobody explains well==.

This guide fixes both. You'll get the full ranking order with the real odds, every tiebreaker rule, three live board puzzles so you can practice "find your best five," and a 1-second routine for reading any board at the table.

---

## Poker Hand Rankings: The Full Order at a Glance

Start here. This is the entire hierarchy, strongest to weakest, with the long-run odds of being dealt each hand by the river in Texas Hold'em.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| # | Hand | Also called | What it is | Odds (by river) |
|:---|:---|:---|:---|:---:|
| **1** | Royal Flush | "Broadway flush" | A-K-Q-J-10, one suit | 0.0032% |
| **2** | Straight Flush | "Steel wheel" (A-5) | 5 in sequence, one suit | 0.0279% |
| **3** | Four of a Kind | "Quads" | Four cards of one rank | 0.168% |
| **4** | Full House | "Boat" / "Full boat" | Three of a kind + a pair | 2.60% |
| **5** | Flush | — | Any 5 of one suit | 3.03% |
| **6** | Straight | — | 5 in sequence, mixed suits | 4.62% |
| **7** | Three of a Kind | "Trips" / "Set" | Three cards of one rank | 4.83% |
| **8** | Two Pair | — | Two different pairs | 23.5% |
| **9** | One Pair | — | Two cards of one rank | 43.8% |
| **10** | High Card | "No pair" | No combination at all | 17.4% |

</div>

> **The one rule that wins arguments**
> One Pair and High Card together make up roughly 61% of all seven-card hands by the river. Big hands feel common because they're memorable — but most pots are decided by a pair and a [kicker](/en/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp").

:::quiz:::

---

## Card Strength: The 30-Second Foundation

Before hands, you need card strength. Two things only.

### Rank order (high to low)

**A > K > Q > J > 10 > 9 > 8 > 7 > 6 > 5 > 4 > 3 > 2**

The Ace is the strongest card and also the only one that bends the rules: it plays high (A-K-Q-J-10) *and* low (A-2-3-4-5, "the wheel"). It cannot wrap around the middle — Q-K-A-2-3 is **not** a straight.

### Suits don't rank

In standard Texas Hold'em, **no suit is stronger than another**. Spades do not beat hearts. Suits only matter for *making* a flush, never for breaking a tie. If two players have the same five cards in different suits, the pot is split — every time.

---

## The 10 Poker Hands Explained

### #1 — Royal Flush

:::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10, all spades:::

**A♠ K♠ Q♠ J♠ 10♠** — the highest straight flush, and the best hand in poker.

It cannot be beaten; the only possible tie is a royal flush that sits entirely on the board for everyone to share, which splits the pot. You'll see one roughly once in 31,000 hands, so most players go years without hitting one. When you do, your only job is to get as many chips in as possible.

### #2 — Straight Flush

:::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — five hearts in sequence:::

**9♥ 8♥ 7♥ 6♥ 5♥** — five cards in a row, all one suit.

Only a higher straight flush or a royal flush beats it. The lowest version, A-2-3-4-5 of one suit, is called the **"steel wheel."** When two straight flushes clash, the one with the higher top card wins.

### #3 — Four of a Kind (Quads)

:::hand[8♣,8♦,8♥,8♠,K♥] Four of a Kind — four eights + kicker:::

**8♣ 8♦ 8♥ 8♠ K♥** — all four cards of one rank.

Between two quads, the higher four-of-a-kind wins. If the quads are *on the board* (all four shared), the highest **kicker** decides it — and the Ace kicker plays.

### #4 — Full House (Boat)

:::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — three queens + two fives:::

**Q♠ Q♥ Q♦ 5♣ 5♠** — three of a kind plus a pair.

Compare the **three-of-a-kind first**: QQQ55 beats JJJ99 because queens top jacks, no matter how big the pair is. Only if the trips tie do you compare the pairs.

> **The most common cooler**
> Any time the board pairs, check for a full house before you commit with a flush or straight. "My nut flush lost to a boat" is the single most frequent beat in Hold'em.

### #5 — Flush

:::hand[A♦,J♦,8♦,6♦,2♦] Flush — five diamonds:::

**A♦ J♦ 8♦ 6♦ 2♦** — any five cards of one suit, sequence irrelevant.

Two flushes are compared card by card from the top: A-J-8-6-2 beats A-J-8-5-2 because the 6 tops the 5. Four cards of a suit is **not** a flush — you need five.

### #6 — Straight

:::hand[7♠,6♥,5♣,4♦,3♠] Straight — five in a row, mixed suits:::

**7♠ 6♥ 5♣ 4♦ 3♠** — five cards in sequence, suits mixed.

- **The nuts:** A-K-Q-J-10 ("Broadway") is the highest straight.
- **The wheel:** A-2-3-4-5 is the lowest straight (the Ace plays low).
- **Illegal:** you cannot wrap around — K-A-2-3-4 is not a straight.

Higher top card wins between two straights.

### #7 — Three of a Kind (Trips / Set)

:::hand[J♣,J♠,J♥,A♦,4♠] Three of a Kind — three jacks + kickers:::

**J♣ J♠ J♥ A♦ 4♠** — three cards of one rank.

There are two ways to make it, and the difference matters:

- **Set:** a pocket pair plus one matching board card (e.g. you hold J♣ J♠, board has J♥). Disguised and dangerous.
- **Trips:** a pair on the board plus one in your hand. Easier for opponents to read and to share.

A set wins more chips because nobody sees it coming.

### #8 — Two Pair

:::hand[10♠,10♥,8♣,8♦,A♠] Two Pair — tens and eights + ace kicker:::

**10♠ 10♥ 8♣ 8♦ A♠** — two different pairs.

Compare in order: **high pair → low pair → kicker**. KK99-A beats QQJJ-A because kings top queens before anything else is checked.

### #9 — One Pair

:::hand[K♠,K♦,9♥,6♣,2♠] One Pair — kings + three kickers:::

**K♠ K♦ 9♥ 6♣ 2♠** — two cards of one rank.

The most common made hand in Hold'em. Two equal pairs go to kickers: **pair rank → kicker 1 → kicker 2 → kicker 3**, highest first. This is where most "same hand" losses happen — guard your kicker.

### #10 — High Card

:::hand[A♣,Q♠,9♥,5♦,3♣] High Card — no combination:::

**A♣ Q♠ 9♥ 5♦ 3♣** — nothing connects.

At showdown, the highest card wins, then the next, and so on down all five. If all five match, it's a split. This is what you're left with when a bluff gets called and misses.

---

## How Kickers and Ties Actually Work

![Poker showdown — comparing two players' best five-card hands](/images/holdem-hand-rankings-showdown.webp "At showdown, the best five-card hand takes the pot")

This is the part that decides real pots — and the part most charts skip. When two players have the **same hand type**, work through this exact order:

1. **Compare the hand rank.** A flush always beats a straight, full house always beats a flush, and so on.
2. **Compare the cards that make the hand.** A pair of aces beats a pair of kings; a queen-high flush beats a jack-high flush.
3. **Compare the kickers.** If the made hand ties, the leftover cards break it, one at a time from the top.
4. **Still identical? Split the pot.** Suits never break the tie.

The badge on the right shows whether a **kicker is used to decide the hand**.

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

A **kicker** is simply a card that isn't part of your made hand but is still used to break ties. With A-A-K vs A-A-Q, both have aces — the king kicker wins. This is why pros care so much about the *quality* of their high cards, not just whether they paired. For every hand's tie rule in one place, see the [kicker and tie-breaker guide](/en/blog/holdem-tiebreak-rules); when the best five cards match exactly, the pot is [split](/en/blog/holdem-split-pot-rules).

---

## Read the Board: 3 Live Puzzles

![K-K-K-A-4 board on a poker table — can you spot the full house before the dealer does?](/images/holdem-hand-rankings-board-puzzle.webp "Poker board reading puzzle — find your best five-card hand")

Knowing the order isn't the same as reading it fast. Here are three real spots. Cover the answer, find your best five cards out of seven, then check.

### Puzzle 1 — The hidden full house

:::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 cards):::

You hold **Q♥ Q♦**. What's your best hand?

→ The board already shows two pair (A-A and K-K). Your two queens plus the board's Q♠ make **trip queens**, and combined with the board's aces you have a **full house — QQQ + AA**. That's your best five. Beginners freeze on "isn't AAKK + Q just two pair?" — no. Once you have trips, you take the full house. **Full house beats two pair.**

### Puzzle 2 — The flush that's actually better

:::hand[7♥,8♥,9♥,10♥,J♠] Board (5 cards):::

You hold **6♥ 2♣**. The board has four hearts.

→ Your 6♥ is the fifth heart, so you think "flush." But look at the sequence: **10♥ 9♥ 8♥ 7♥ 6♥** is five hearts *in a row* — a **ten-high straight flush**, the #2 hand. (Swap that 6♥ for a K♥ and the hearts are 7-8-9-10-K — no longer connected, so it drops to a plain king-high flush.) Always check whether your flush cards are also *consecutive* before you assume a straight flush.

### Puzzle 3 — When you have to share

:::hand[K♠,K♦,K♥,A♠,2♠] Board (5 cards):::

You hold **A♥ 3♣**. The board already has trip kings.

→ Your A♥ pairs with the board's A♠, giving you **KKK + AA, a full house**. But if your opponent also holds a single Ace, they have the *same* full house and you split (only the exact pocket A-A makes a bigger boat, aces full). If they have no Ace and only a smaller pair, your boat wins. The lesson: when the board does most of the work, your hand is often only as good as one extra card.

---

## Quick Answers to the Matchups People Argue About

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Matchup | Winner | Why |
|------|------|------|
| Flush vs Straight | **Flush** | #5 beats #6 |
| Full House vs Flush | **Full House** | #4 beats #5 |
| Three of a Kind vs Two Pair | **Three of a Kind** | #7 beats #8 |
| Straight vs Three of a Kind | **Straight** | #6 beats #7 |
| A-2-3-4-5 vs 10-J-Q-K-A | **Broadway (A-high)** | The wheel is the lowest straight |
| Same pair, K kicker vs J kicker | **K kicker** | Higher kicker wins |
| Four of a Kind vs Full House | **Four of a Kind** | #3 beats #4 |

</div>

---

## Why the Order Is What It Is

The ranking isn't arbitrary — it's ==pure probability==. ==g:**The harder a hand is to make, the higher it ranks.**== A flush sits above a straight because, in a 52-card deck, there are simply fewer ways to make five of one suit than five in sequence across any suits. That single principle explains the entire hierarchy — see the exact numbers in the [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp").

It also explains the one big exception you'll meet: in **Short Deck (6+) Hold'em**, where the 2s through 5s are removed, flushes become harder than full houses — so in that format a ==r:**flush beats a full house**==. The math changed, so the order changed. More on game-by-game differences below.

---

## The 1-Second Hand-Reading Routine

![Infographic of a paired 9♥ Q♥ 9♠ 8♣ 7♠ community board — reading the pairs and possible straights to find your best five cards](/images/holdem-hand-rankings-board-read.webp "How to read a poker board fast — suits, straights, pairs in order")

Under a time bank, run this scan in order every time the board is complete:

**1. Suits first** — are there three or more of one suit on the board? If yes, ==a flush is possible==. Check your suit.

**2. Connectedness next** — are there cards close in rank (like 8-9-10)? If yes, ==a straight is live==.

**3. Pairs last** — is the board paired? ==r:If yes, full houses and quads are on the table, and your flush or straight may be in danger.==

Trained players read the board in this exact order — danger first (flush/straight on the board), then whether the board is paired (which threatens everything). Build the habit and you'll stop making rushed river calls.

---

## Memorize It in 3 Steps

| Step | What to do | Time |
|------|------|------|
| **1** | Learn three groups: Premium (#1–3), Middle (#4–6), Common (#7–10) | 1 day |
| **2** | Drill only the confusing pairs: flush vs straight, full house vs flush | 3 days |
| **3** | Watch poker streams and call the winner before the dealer announces | 1–2 weeks |

Grouping first stops the order from feeling like ten random items. The confusing pairs in step 2 cause 90% of beginner mistakes, so over-practice those.

---

## Hand Rankings by Game Type

The order is shared across most poker variants, with a few important twists.

| Game | Hand rankings | Key difference |
|------|------|------|
| **Texas Hold'em** | Standard (this guide) | Use any 0–2 of your hole cards |
| **Omaha** | Standard | Must use *exactly* 2 of your 4 hole cards |
| **Seven-Card Stud** | Standard | No community cards |
| **Short Deck (6+)** | Modified | Flush beats full house; often A-6-7-8-9 counts as a straight |

The takeaway: learn the standard order once and it carries you through nearly every game. Just remember Omaha's "exactly two" rule and Short Deck's flush bump.

---

:::readnext[Keep reading]
/en/blog/holdem-flush-vs-straight | Does a Flush Beat a Straight? | /images/holdem-flush-vs-straight-hero.webp
/en/blog/holdem-tiebreak-rules | Kicker & Tie-Breaker Rules | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. What is a flush in poker?**

A. A flush is any five cards of the same suit — for example A♦ J♦ 8♦ 6♦ 2♦ — regardless of order. It ranks #5, above a straight and below a full house. When two players both hold a flush, the highest card wins; suits never break the tie.

**Q. What is a full house in poker?**

A. A full house (a "boat") is three of a kind plus a pair, such as Q-Q-Q-5-5. It ranks #4, beating a flush and a straight. Between two full houses, the higher three-of-a-kind decides it first — so QQQ-55 beats JJJ-99 no matter how big the pair is.

**Q. What is a straight in poker?**

A. A straight is five cards in consecutive rank order with mixed suits, like 7-6-5-4-3. It ranks #6. The Ace can play high (10-J-Q-K-A, "Broadway") or low (A-2-3-4-5, "the wheel"), but a straight can't wrap around the corner — Q-K-A-2-3 is not a straight.

**Q. Does a flush beat a straight in poker?**

A. Yes. A flush is #5 and a straight is #6, so a flush always wins — see [why a flush beats a straight](/en/blog/holdem-flush-vs-straight). It's higher because five cards of one suit are statistically harder to make than five in sequence.

**Q. Does a full house beat a flush?**

A. Yes. A full house (#4) beats a flush (#5) and a straight. It only loses to four of a kind, a straight flush, or a royal flush.

**Q. What beats a straight in poker?**

A. A flush, full house, four of a kind, straight flush, or royal flush all beat a straight — and so does a higher straight. A straight (#6) still beats three of a kind, two pair, one pair, and high card.

**Q. What beats a flush in poker?**

A. A full house, four of a kind, straight flush, or royal flush beats a flush. Against another flush, the higher top card wins. A flush (#5) still beats a straight and everything below it.

**Q. What beats a full house in poker?**

A. Only three hands beat a full house: four of a kind, a straight flush, and a royal flush. A higher full house wins too — and the three-of-a-kind is compared before the pair, so KKK-22 beats QQQ-AA.

**Q. What beats a royal flush in poker?**

A. Nothing. A royal flush (A-K-Q-J-10 of one suit) is the best possible hand in poker. It can't be beaten — the only "tie" is a royal flush that sits entirely on the board for everyone to share, which splits the pot.

**Q. What beats a straight flush in poker?**

A. Only a higher straight flush or a royal flush (which is simply the ace-high straight flush). A straight flush (#2) beats four of a kind and every hand below it.

**Q. What is a kicker?**

A. A kicker is a card that isn't part of your made hand but breaks ties. With two equal pairs, the highest side card (kicker) wins. The Ace is the best possible kicker.

**Q. Can two players have the same hand?**

A. Yes. If both players' best five cards are identical in rank, the pot is split ("chopped"). Suits never break the tie in Texas Hold'em.

**Q. Do you have to use both of your hole cards?**

A. In Hold'em, no — you make the best five from any combination of your two hole cards and the five community cards, including using zero. (Omaha is different: you must use exactly two.)

**Q. What's the difference between a set and trips?**

A. Both are three of a kind. A *set* is a pocket pair plus one board card (well disguised); *trips* is a board pair plus one card in your hand (easier to read). Sets win more chips.

**Q. What is the highest hand in poker?**

A. The Royal Flush (A-K-Q-J-10 of one suit). It's unbeatable — the only tie is a royal flush sitting entirely on the board, which everyone shares for a split pot.

**Q. Is three of a kind better than two pair?**

A. Yes. Three of a kind is #7 and two pair is #8, so trips win. Two pair only beats one pair and high card.

**Q. Does a straight flush beat four of a kind?**

A. Yes. A straight flush (#2) beats four of a kind (#3) — five cards in sequence of one suit outrank quads. The only thing above a straight flush is a royal flush, which is just the ace-high version of it.

**Q. What is the lowest (worst) hand in poker?**

A. The worst possible hand is 7-5-4-3-2 in mixed suits ("seven-high"). It's the lowest high-card holding that isn't a pair, straight, or flush — the classic "you have nothing" hand.

**Q. Can you have three pairs in poker?**

A. No. A poker hand is always five cards, so it can contain at most two pairs. If your hole cards and the board give you three pairs across seven cards, only your best two pairs count toward the hand — one card of the third pair can still fill the kicker slot if it's your highest leftover card, but it never becomes a "three pair" hand.

**Q. Can you use an ace as a 1 in poker?**

A. Yes. The Ace plays both high and low, so A-2-3-4-5 (the "wheel") is a legal straight — the lowest one possible. You can't wrap around the corner, though: K-A-2-3-4 is not a straight.

---

## The 3 Things to Remember

1. **The order:** Royal Flush > Straight Flush > Four of a Kind > Full House > Flush > Straight > Three of a Kind > Two Pair > One Pair > High Card.
2. **The trap:** a flush (#5) beats a straight (#6) — and any paired board can hide a full house that beats both.
3. **The reality:** most pots are won with one pair or high card, so your kicker is worth more than you think.

Learn the order in an afternoon, drill the confusing pairs, and run the suits → straights → pairs scan on every board. Do that and you'll never again push the pot the wrong way.

Once you know the rankings, the natural next step is knowing which hands to start with — use the [Texas Hold'em starting hands chart by position](/en/blog/holdem-starting-hands-chart) to see exactly which hole cards to play from each seat.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Matchup</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Does a Flush Beat a Straight?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The math, the misreads, and every tie rule</div>
  </a>
  <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tiebreaker</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Kicker & Tie-Breaker Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Same pair — who wins? Kicker and split pot rules</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">When Is a Pot Split?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chop rules and the 5 tie situations explained</div>
  </a>
  <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Beginner Guide</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Rules for Beginners</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Full rules from deal to showdown</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which hole cards to play from UTG to button</div>
  </a>
  <a href="/en/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board Reading</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Read the Board in Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Find your best 5 cards from 7 — wet vs dry board</div>
  </a>
</div>
`.trim(),
};
