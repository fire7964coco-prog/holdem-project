import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "When Is a Pot Split? Hold'em Chop Rules",
  seoTitle: "Won the Hand but Got Half? — Poker Split Pot & Chop Rules",
  desc: "Can you tie in poker? Yes — here's exactly when pots split: identical five-card hands, the board playing for everyone, the odd chip rule, and side-pot chops.",
  tldr: "Yes — poker hands can tie. A pot is split (a chop) when two or more players show down the identical best five-card hand. Suits never break the tie, and any leftover odd chip goes to the first tied player left of the dealer button.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Poker split pot — board 8♠ 8♥ 8♦ A♣ K♠ with J♠ 10♥ vs 5♣ 2♦, chips divided by a gold line since neither hand beats the board",
  tags: ["split pot poker", "can you tie in poker", "chopped pot", "when is a pot split", "odd chip rule poker", "board plays", "texas holdem chop"],
  content: `
Early in my poker days I led every street — raised preflop, bet the flop and turn, got called on the river. I flipped over J-10. My opponent turned over **5-2**. "I win, right?" The dealer said nothing and pointed at the board: ==**8-8-8-A-K**==. ==r:Neither of our hole cards beat trip eights with an ace-king kicker==, so the dealer quietly cut the pot in half.

Getting half a pot you were sure you'd won is jarring. But ==g:split pots follow clear rules== — and they answer the question new players ask most: **can you tie in poker?** Yes. Here is every way it happens.

---

> **Quick answer**
> A pot is **split** (also called a **chop**) when two or more players have the **identical best five-card hand** at showdown. The chips are divided equally. Suits never break the tie, and any leftover odd chip goes to the first tied player left of the dealer button.

---

### The core numbers

:::stripe
5 | situations where a Hold'em pot splits
0 | ties ever broken by suit in Texas Hold'em
1 | odd chip — goes to the first tied seat left of the button
:::

---

## What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?)

A **split pot** happens when two or more players have the identical best five-card hand at showdown, so the dealer divides the chips equally between them. A **chop** — or a "chopped pot" — is the exact same thing in table slang ("we're chopping"). Rulebooks say split; players say chop. People search both, so you'll see them used interchangeably.

The foundation: your hand is always the ==**best five cards**== out of seven — your two hole cards plus the five on the board. Where every five-card hand ranks is covered in the [complete poker hand rankings](/en/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"). ==r:When two players' best fives are identical in rank, neither is "more" of a winner== — the pot splits, full stop.

---

## Can You Tie in Poker? The 5 Situations That Split the Pot

Yes — ties are a normal, legal outcome in Texas Hold'em, and they're more common than beginners expect. Because everyone shares the same five community cards, two players often arrive at the same best five. These are the five ways it happens.

### 1. Identical best five cards
Two players make the exact same five-card hand — same ranks, even if their hole cards differ in suit.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| | Player A | Player B |
|---|---|---|
| **Hole** | K♠ 7♣ | K♥ 2♦ |
| **Board** | K♦ K♣ Q♥ Q♦ J♠ | (same) |
| **Best five** | ==g:K-K-K-Q-Q== | ==g:K-K-K-Q-Q → split== |

</div>

Both make the full house KKK-QQ from the board plus a king. ==r:The suits of those kings don't matter.==

### 2. The board plays
The five community cards are already the strongest hand for everyone left — that's the 8-8-8-A-K pot from my story. It's the single most common split, so it gets its own section below.

### 3. The same straight
Two straights with the same top card tie, regardless of suit. On a board of 7♣ 6♦ 5♥ K♠ 2♣, both A's 9♠ 8♠ and B's 9♥ 8♦ make 9-8-7-6-5 — same height, so **split**.

### 4. The same flush
There's no suit ranking, so two flushes with the same five ranks tie. In practice this almost always means the **board itself** is a five-card flush. On K♠ J♠ 8♠ 4♠ 2♠, if A holds A♥ Q♦ and B holds 10♥ 9♦, neither has a spade — both play the board's K-J-8-4-2 flush and **chop**.

==r:But check before you assume:== any spade in your hand higher than the board's lowest spade improves the flush. Here even the humble 3♠ makes K-J-8-4-3 and ==g:wins the whole pot== — and A♠ makes the nut flush.

### 5. Identical down to the last kicker
Pairs and two pairs are usually decided by kickers — but if the kickers match too, it's a split. Board A♦ Q♠ 9♣ 6♥ 2♠ with A♠ K♦ vs A♥ K♣ gives both players ==g:A-A-K-Q-9== → **split**. When the kickers *differ*, the higher one wins outright — exactly how that comparison works, hand by hand, is in the [tie-breaker and kicker rules](/en/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## Can Two Players Win the Same Pot? When the Board Plays

Yes — and it doesn't even take two monster hands. When the five community cards already form the best possible five for everyone still in, ==**the board plays**== and every remaining player shares the pot, whether that's two players or five.

That's my 8-8-8-A-K hand: my J-10 and his 5-2 both played the board's trip eights with ace-king kickers — identical fives, automatic chop. The extreme case is a board like A♠ K♠ Q♠ J♠ 10♠ (a royal flush): no hole cards can improve it, so ==g:everyone left chops==.

> **The check:** does *your* best five — using at least one hole card — beat the board's own five? If yes, you play your hand. If not, the board plays and you're likely chopping. The full method for scanning a board this way is in [how to read the board and find your best 5](/en/blog/holdem-reading-the-board).

:::tip[If the board plays and someone bets the river, think before calling: when the best you can do is tie, a call usually just buys back part of your own chips. Call only if your hole cards can realistically beat their exact holding.]:::

---

## 3 Things That Never Break a Tie in Poker

![Spade royal flush = Heart royal flush with a golden equals sign between them — suits never decide a winner in Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Identical ranks always split — no suit ranking in Texas Hold'em")

These are the misconceptions behind most "wait, why is it a split?!" arguments.

### ❌ "My suit is higher, so I win"
==r:A spade flush does **not** beat a heart flush.== Texas Hold'em has no suit ranking — ==identical ranks split, full stop==. (This trips up players coming from games that *do* rank suits.)

### ❌ "My hole cards are higher, so I win"
Board 9♠ 8♦ 7♣ 6♥ 5♠ — a made straight. You hold A♠ K♦; your opponent holds 2♣ 3♥. ==r:**Split.**== Both of you play the board's 9-8-7-6-5, because ==r:your big hole cards never enter the best five==. A high hole card only matters when it actually plays as a kicker — [what a kicker is and when it plays](/en/blog/holdem-kicker) draws that line precisely.

### ❌ "I used both my cards and they used one"
==r:How many hole cards you use is irrelevant.== The only thing that counts is the strongest five of seven. ==g:If both players land on the same best five, it's a chop no matter how you got there.==

---

## Who Gets the Extra Chip? The Odd Chip Rule

Sometimes a pot won't divide evenly — a 101-chip pot between two players is 50 each with one chip left over, and there are no half-chips. The standard rule:

> ==The leftover odd chip goes to the first tied player **left of the dealer button**== (the earliest winning seat clockwise from the dealer).

In a three-way split with two odd chips, the two earliest seats clockwise each get one. ==r:House rules can vary== — a few card rooms award the odd chip by high card or suit instead — so if real money rides on it, ask the floor. ==g:Online, the software assigns it automatically by position.==

---

## Do Side Pots Split Too? Ties When Someone Is All-In

When someone is all-in, the chips form a ==**main pot**== (everyone is eligible) plus one or more ==**side pots**== (only the deeper stacks who kept betting). Each pot is awarded — or chopped — ==**separately**==, based on the best hand among that pot's eligible players.

A worked example: A is all-in for 100; B and C each put in 300. That's a **main pot of 300** (100 × 3) and a **side pot of 400** (200 + 200, B and C only). The board runs A♦ J♥ 7♠ 4♣ 2♥:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:20px 0">

| Player | Hole | Best five | Result |
|---|---|---|---|
| A (all-in) | A♠ Q♦ | ==g:A-A-Q-J-7== | chops main pot → 150 |
| B | A♣ Q♥ | ==g:A-A-Q-J-7== | chops main (150) + wins side (400) |
| C | K♦ K♠ | K-K-A-J-7 | loses both → 0 |

</div>

A and B tie with aces and identical kickers, so they ==g:split the main pot==; the side pot is contested only by B and C, and B's aces beat C's kings outright. ==r:An all-in player can only ever win or chop the pots they actually contributed to.== How those pots get built in the first place — capping, re-raise eligibility, showdown order — is covered in the [all-in rules and side pots guide](/en/blog/holdem-all-in-rules).

---

## Is the Pot Ever Split Half High, Half Low?

Not in Texas Hold'em. You may have heard of "split-pot games" like Omaha Hi-Lo or Stud Hi-Lo, where **every** pot is designed to split between the best high hand and the best qualifying low hand (eight-or-better). That's a different game family. ==Standard Hold'em is high-only== — the pot splits *only* when best five-card hands genuinely tie.

---

:::readnext[Keep reading]
/en/blog/holdem-reading-the-board | How to Read the Board & Find Your Best 5 | /images/holdem-reading-the-board-hero.webp
/en/blog/holdem-all-in-rules | All-In Rules & Side Pots Explained | /images/holdem-all-in-rules-hero.webp
:::

## FAQ

**Q. When is a pot split in poker?**

A. A pot is split when two or more players have the identical best five-card hand at showdown; the chips are divided equally among them.

**Q. Do you split the pot if both players have the same hand?**

A. Only if the full best five ties — same pair with the same kickers, or the same straight, flush, or full house. If any kicker differs, the higher kicker wins the whole pot instead of splitting.

**Q. What does "chopped pot" mean in poker?**

A. A chopped pot is simply a split pot in table slang. "Chop" is what players say; "split pot" is the rulebook term — both mean dividing the pot equally among tied hands.

**Q. Does suit ever decide who wins a split?**

A. No. Texas Hold'em has no suit ranking, so identical five-card hands always split regardless of suit.

**Q. Who gets the odd chip when a pot can't divide evenly?**

A. Standard rule: the first tied player left of the dealer button. A few rooms assign it by high card or suit instead, so house rules can vary — online software handles it automatically.

**Q. Can more than two players split a pot?**

A. Yes. If three or more players all hold the identical best five-card hand, the pot divides equally among them — most often when the board plays for everyone.

**Q. How are split pots handled when someone is all-in?**

A. The pot breaks into a main pot and side pots; each is awarded or chopped separately based on the best hand among the players eligible for that specific pot.

**Q. Is a tournament chop the same as a split pot?**

A. No — same word, two different things. A split pot at showdown is automatic: when hands tie, the dealer divides the chips. A tournament "chop" is a voluntary deal among the remaining players to divide the prize pool, usually by chip counts or [ICM](/en/blog/holdem-icm), and it only happens if everyone agrees. See [tournament vs cash game](/en/blog/holdem-tournament-vs-cash-game) for how tournament payouts differ.

---

## The Takeaways

1. Yes, ==**you can tie in poker**== — a pot splits (chops) whenever two or more players share the ==**identical best five of seven**==.
2. ==r:**Suits, higher hole cards, and how many cards you used**== never break a tie.
3. The ==**odd chip**== goes to the first tied player left of the button, and ==**side pots**== are settled separately from the main pot.

Brush up on the order in the [complete hand rankings](/en/blog/holdem-hand-rankings), master close hands in the [kicker and tie-breaker guide](/en/blog/holdem-tiebreak-rules), and settle the classic argument in [does a flush beat a straight](/en/blog/holdem-flush-vs-straight).

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
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">How kickers decide same-hand showdowns</div>
  </a>
  <a href="/en/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Matchup</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Does a Flush Beat a Straight?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Math and board spots for the #1 confusion</div>
  </a>
</div>
`.trim(),
};
