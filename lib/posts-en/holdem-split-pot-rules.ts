import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-split-pot-rules",
  title: "When Is a Pot Split? Texas Hold'em Chop Rules and the 5 Tie Situations",
  seoTitle: "Won the Hand but Got Half? — Texas Hold'em Split Pot & Chop Rules",
  desc: "Won the hand but got half the chips? Here are the 5 ways a pot splits in Hold'em, the 3 things that never break a tie, and how the odd chip rule works.",
  tldr: "A pot is split when two or more players have the identical best five-card hand at showdown. Suits never break the tie, and any odd chip goes to the player nearest the dealer's left.",
  category: "초보 가이드",
  date: "2026-06-13",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🃏",
  image: "/images/holdem-split-pot-hero.webp",
  imageAlt: "Poker split pot — board 8♠ 8♥ 8♦ A♣ K♠ with J♠ 10♥ vs 5♣ 2♦, chips divided by a gold line since neither hand beats the board",
  tags: ["split pot poker", "chop pot", "when is a pot split", "texas holdem tie", "board plays", "side pot", "odd chip rule"],
  content: `
Early in my poker days I led every street — raised preflop, bet the flop and turn, got called on the river. I flipped over J-10. My opponent turned over **5-2**. "I win, right?" The dealer said nothing and pointed at the board: ==**8-8-8-A-K**==. ==r:Neither of our hole cards beat trip eights with an ace-king kicker==, so the dealer quietly cut the pot in half.

Getting half a pot you were sure you'd won is jarring. But ==g:"split pots" follow clear rules== — and knowing them also sharpens how you read what your opponents can have.

---

> **Quick answer**
> A pot is **split** (also called a **chop**) when two or more players have the **identical best five-card hand** at showdown. The chips are divided equally. Suits never break the tie, and any leftover odd chip goes to the player nearest the dealer's left.

---

## Split Pot vs Chop — Same Thing

"Split pot" is the rulebook term; "chop" is what players say at the table ("we're chopping"). They mean exactly the same outcome — equal shares to everyone whose best five-card hand ties. People search both, so you'll see them used interchangeably.

Remember the foundation: your hand is the ==**best five cards**== out of your two hole cards plus the five on the board. ==r:When two players' best fives are identical in rank, neither is "more" of a winner== — they tie.

---

## The 5 Situations That Cause a Split

![Two players comparing their best five-card hands at a Texas Hold'em showdown](/images/holdem-hand-rankings-showdown.webp "At showdown, identical best five-card hands split the pot")

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
The five community cards are already the strongest hand, and no one's hole cards improve on it — so everyone left in the hand shares. That's the 8-8-8-A-K board from the story above. On a board like A♠ K♠ Q♠ J♠ 10♠ (a royal flush), every remaining player chops.

> **The check:** does *your* best five — using your hole cards — beat the board's own best five? If yes, you play your hand; if not, the board plays and you're likely chopping.

### 3. The same straight
Two straights of the same top card tie, regardless of suit. With a board of 7♣ 6♦ 5♥ K♠ 2♣, both A's 9♠ 8♠ and B's 9♥ 8♦ make 9-8-7-6-5 — same height, so **split**.

### 4. The same flush
There's no suit ranking, so two flushes with the same five ranks tie. In practice this almost always means the **board itself** is a five-card flush (e.g. K♠ J♠ 8♠ 4♠ 2♠) and both players just play the board.

### 5. Identical down to the kicker
Pairs and two pairs are usually decided by kickers — but if the kickers match too, it's a split. Board A♦ Q♠ 9♣ 6♥ 2♠ with A♠ K♦ vs A♥ K♣ gives both players a pair of aces with the same K-Q-9 kickers — ==g:A-A-K-Q-9== → **split**. For exactly how kickers are compared, see the [tie-breaker and kicker rules](/en/blog/holdem-tiebreak-rules).

---

## 3 Things That Never Break a Tie

![Spade royal flush = Heart royal flush with a golden equals sign between them — suits never decide a winner in Texas Hold'em](/images/holdem-split-pot-suit-equals.webp "Identical ranks always split — no suit ranking in Texas Hold'em")

These are the misconceptions that cause "wait, why is it a split?!" arguments.

### ❌ "My suit is higher, so I win"
==r:A spade flush does **not** beat a heart flush.== Texas Hold'em has no suit ranking — ==identical ranks split, full stop==. (This trips up players coming from games that *do* rank suits.)

### ❌ "My hole cards are higher, so I win"
Board 9♠ 8♦ 7♣ 6♥ 5♠ (a made straight). You hold A♠ K♦; your opponent holds 2♣ 3♥. ==r:**Split.**== Both of you simply play the board's 9-8-7-6-5 — ==r:your big hole cards never enter the best five==.

### ❌ "I used both my cards and they used one"
==r:How many hole cards you use is irrelevant.== The only thing that counts is the strongest five of seven. ==g:If both players land on the same best five, it's a chop no matter how you got there.==

---

## The Odd Chip

Sometimes a pot won't divide evenly — a 101-chip pot between two players is 50 and 51, and there are no half-chips. The rule:

> ==The leftover odd chip goes to the tied player **nearest the dealer's left**== (the earliest winner clockwise from the button).

In a three-way split with two odd chips, the two earliest seats clockwise each get one. ==g:Online, the software handles this automatically by position.==

---

## Splits and All-Ins: Side Pots

When someone is all-in, the chips form a ==**main pot**== (everyone is eligible) plus one or more ==**side pots**== (only the deeper players who kept betting). Each pot is awarded — or chopped — ==**separately**==, based on the best hand among that pot's eligible players. ==g:So it's entirely possible for the main pot to be split three ways while a side pot is won outright by one of the deeper stacks.== ==r:An all-in player can only ever win or chop the pots they actually contributed to.==

---

## FAQ

**Q. When is a pot split in poker?**

A. A pot is split when two or more players have the identical best five-card hand at showdown; the chips are divided equally among them.

**Q. Is a chop the same as a split pot?**

A. Yes. "Chop" is the casual table term and "split pot" is the formal rule, but both mean dividing the pot equally among players whose best hands tie.

**Q. Does suit ever decide who wins a split?**

A. No. Texas Hold'em has no suit ranking, so identical five-card hands always split regardless of suit.

**Q. Who gets the odd chip when a pot can't divide evenly?**

A. The odd chip goes to the tied player closest to the dealer's left — the first eligible winner clockwise from the button.

**Q. Can more than two players split a pot?**

A. Yes. If three or more players all hold the identical best five-card hand, the pot divides equally among them, which often happens when the board plays.

**Q. How are split pots handled when someone is all-in?**

A. The pot breaks into a main pot and side pots; each is awarded or chopped separately based on the best hand among the players eligible for that specific pot.

**Q. Is a tournament chop the same as a split pot?**

A. No — same word, two different things. A split pot at showdown is automatic: whenever hands tie, the dealer divides the chips. A tournament "chop" (or "deal") is a voluntary agreement among the remaining players to divide the prize money, usually by chip counts or ICM, and it only happens if everyone agrees. See [tournament vs cash game](/en/blog/holdem-tournament-vs-cash-game) for how tournament payouts differ.

**Q. Should you call on the river if you can only split the pot?**

A. Usually not. If the board plays and the best you can make is the same hand as everyone else, calling a river bet just wins back part of your own chips while risking more. Fold unless the pot is already large or there's a real chance your hole cards beat their exact holding.

**Q. Does suit affect the odd chip?**

A. Never the pot itself — identical hands always split regardless of suit. A few card rooms use a suit order to assign only the single leftover odd chip, but the standard rule is simpler: that chip goes to the first eligible player clockwise from the button.

---

## The Takeaways

1. A pot ==**splits**== (chops) when two or more players share the ==**identical best five of seven**==.
2. ==r:**Suits, higher hole cards, and how many cards you used**== never break a tie.
3. The ==**odd chip**== goes to the player nearest the dealer's left, and ==**side pots**== are settled separately from the main pot.

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
