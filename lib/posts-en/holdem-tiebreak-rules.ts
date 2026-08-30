import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-tiebreak-rules",
  title: "How Ties Are Broken in Poker — Same Hand, Who Wins?",
  seoTitle: "Same Hand, Same Pair — Who Wins? Poker Tie-Breaker Rules",
  desc: "Same pair at showdown and still lost? How ties are broken in poker — who wins with the same pair or two pair, when the 5th card matters, and when pots split.",
  tldr: "Ties are broken in a fixed order: hand rank first, then the cards that make the hand, then kickers from highest to lowest. Same pair → higher first kicker wins; identical five cards → split pot. Suits never decide a tie.",
  category: "hand-rankings",
  date: "2026-06-13",
  updated: "2026-08-30",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "⚖️",
  image: "/images/holdem-tiebreak-hero.webp",
  imageAlt: "Poker showdown: A♠ K♦ vs A♥ 9♣ with board A♦ Q♠ 7♥ 3♣ 2♦ — same pair of aces, kicker decides the winner",
  tags: ["poker tie breaker rules", "how are ties broken in poker", "who wins same pair poker", "two pair tie poker", "does the 5th card matter in poker", "do suits matter in poker", "highest straight in poker", "poker kicker", "texas holdem ties"],
  content: `
You turn over a pair of aces. So does your opponent. The dealer counts the side cards for a second — then pushes the whole pot to *them*. ==r:Same pair. How did you lose?==

I have watched that exact moment stall more games than any other rule: someone half-stands, the dealer taps the felt, and the whole table waits for an explanation. Here it is. Every tie in Texas Hold'em is settled by one fixed procedure that sits one level below the [poker hand rankings](/en/blog/holdem-hand-rankings) — the rankings tell you *which hand* wins; tie-breaker rules tell you *which player* wins when both hands are the same rank.

Most of the work is done by one card: the ==**kicker**==. The full definition — which hands have one and how many — lives in [what is a kicker in poker](/en/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp"). This guide is the *procedure*: exactly how ties are broken for the same pair, two pair, trips, straights and flushes — and the fifth card everyone forgets.

---

### Tie-breaks at a glance

:::stripe
3 | Steps that settle every tie in Hold'em
1 | Kicker slot in a two-pair hand
0 | Ties ever broken by suit
:::

---

## How Are Ties Broken in Poker? The 3-Step Order

**Ties are broken in a fixed order: compare hand rank first, then the cards that make the hand, then the kickers from highest to lowest — and if all five cards still match, the pot is split.** Every showdown runs the same three checks:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Step | Compare | Detail |
|:---:|---|---|
| **1** | Hand rank | The higher category always wins (a flush beats a straight, etc.) |
| **2** | The cards that make the hand | Same rank? The higher pair / trips / top card wins |
| **3** | Kickers, highest first | The first difference wins the pot |

</div>

If step 1 settles it, you never reach step 2. If step 3 runs out of cards, the hands are identical and ==g:the pot is split== — how the chips are then divided (odd chips, three-way chops, side pots) is [split pot rules](/en/blog/holdem-split-pot-rules) territory. Steps 2 and 3 are where the arguments happen, so that's where we're going.

---

## Who Wins if Two Players Have the Same Pair?

**The higher first kicker wins. One pair uses three kickers, compared one at a time from the top — the first difference decides the pot.**

Take the hand in the photo above:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**Player A:** A♠ K♦  ·  **Player B:** A♥ 9♣
**Board:** A♦ Q♠ 7♥ 3♣ 2♦

| Player | Best Five | Kickers | Result |
|--------|-----------|---------|--------|
| A | A♠ A♦ ==g:K♦== Q♠ 7♥ | ==g:K==-Q-7 | **Wins** |
| B | A♥ A♦ ==r:Q♠== 9♣ 7♥ | ==r:Q==-9-7 | Loses |

</div>

Same pair of aces, so the kickers go head-to-head in order: ==g:K beats Q — fight over.== B's nine is still *in* the hand as the second kicker, but the comparison never gets that far.

Notice B's top kicker is the **board's** queen, not the 9 they're holding. ==r:A kicker only counts if it actually lands in your best five== — a higher board card pushes your hole card down the list. It's also why the second card you start with matters as much as the ace itself: A-K and A-9 are both "a pair of aces" here, and only one of them wins ([starting hands chart](/en/blog/holdem-starting-hands-chart)).

---

## Poker Tie-Breaker Rules for Every Hand

**Each hand rank has its own comparison order — some go to kickers, others are settled entirely by the cards that make them.** The badge shows whether a kicker comes into play:

:::tiebreak
Royal Flush|Two of them only happens when the board is the royal — everyone chops|-No kicker
Straight Flush|Highest card only|-No kicker
Four of a Kind|Quad rank → 5th card|+Kicker
Full House|Trips rank → pair rank|-No kicker
Flush|Compare all 5, high to low|-No kicker
Straight|Highest card only|-No kicker
Three of a Kind|Trips rank → 2 kickers|+Kicker
Two Pair|High pair → low pair → kicker|+Kicker
One Pair|Pair rank → 3 kickers|+Kicker
High Card|Compare all 5, high to low|+Kicker
:::

The three rows that cause the most table arguments:

- **Trips use two kickers, top one first.** On a board of A♣ A♥ 7♦ 5♣ 2♠, a player with A♠ J♠ makes A-A-A-==g:J==-7 and beats A♦ 10♦'s A-A-A-==r:10==-7 — the jack outranks the ten, and the shared 7 is never even checked.
- **Full houses have no kicker.** Trips rank first, then the pair: K-K-K-A-A beats K-K-K-Q-Q on the pair.
- **Flushes compare all five cards — ==r:never suits==.** An ace-high flush beats a king-high flush; identical ranks split. The full matchup (and the boards that fool people) is in [does a flush beat a straight](/en/blog/holdem-flush-vs-straight).

---

## Who Wins if Both Players Have Two Pair?

**Compare the higher pair, then the lower pair, then the single kicker — in that order.** Two pair carries exactly one kicker, so after the pairs themselves there's only one card left to argue about.

On a board of **K♦ 9♣ 9♠ 5♦ 2♥**, K♠ Q♦ makes K♠ K♦ 9♣ 9♠ ==g:Q♦== and K♥ J♥ makes K♥ K♦ 9♣ 9♠ ==r:J♥==. Same kings-and-nines, so the lone kicker settles it: ==g:queen over jack.==

Then there's the trap that decides real money — ==r:**counterfeiting**==:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:16px 20px;margin:20px 0">

**You:** 5♠ 4♠  ·  **Opponent:** A♣ K♦
**Flop:** 5♦ 4♥ K♣ — your two pair (fives and fours) leads their pair of kings
**Turn 9♠, river 9♥** — final board 5♦ 4♥ K♣ 9♠ 9♥

| Player | Best Five | Hand |
|--------|-----------|------|
| You | ==r:9♠ 9♥== 5♠ 5♦ K♣ | Nines and fives — your fours are gone |
| Opponent | K♦ K♣ 9♠ 9♥ A♣ | **Kings and nines — wins** |

</div>

The board pairing nines handed *both* players a better second pair — your fours got ==r:counterfeited==, and the only comparison left was top pair: kings over nines. The hand that led the flop loses the pot without either player improving their own cards.

---

## Can You Have a Higher Straight? (Where the Wheel Ranks)

**Yes — straights are ranked purely by their top card, and the ace-low wheel is the lowest straight in the game.**

On a board of 4♦ 3♣ 2♠ K♦ Q♥, a player with A♠ 5♠ makes the wheel: 5-4-3-2-A. A player with 6♥ 5♥ makes 6-5-4-3-2. ==r:The ace plays *low* in a wheel==, so A-2-3-4-5 sits at the very bottom of the straight ladder — ==g:the six-high straight wins.== Two straights with the same top card are identical, and identical hands split.

At the other end of the ladder, ==**the highest straight in poker is Broadway — A-K-Q-J-10**==. No straight beats it (though a flush or anything above it still does), and the wheel sits at the bottom, so every straight in the game ranks somewhere between those two by its top card alone.

Two things the wheel does *not* do: the ace can't wrap around the middle (Q-K-A-2-3 is nothing), and it can't be high and low at once. Flushes follow the parallel rule — all five cards compared from the top, suits irrelevant — with the details over in [flush vs straight](/en/blog/holdem-flush-vs-straight).

---

## Does the 5th Card Matter in Poker?

**Yes — whenever the first four cards of two hands are identical, the fifth card is the whole pot.**

Board **A♥ K♣ Q♦ 4♣ 2♥**, and it's A♠ 8♠ against A♦ 7♦. Both have a pair of aces. First kicker: the board's K — tie. Second kicker: the board's Q — tie. Third kicker: ==g:8 beats 7.== The literal fifth card of the hand just decided everything above it.

The same logic runs quads-on-board pots: everyone shares four cards, so the fifth is the entire showdown. And it runs high-card and flush ties, where every card down to the last one is compared. The fifth card only stops mattering when the board outranks it — which is the last piece of the puzzle.

---

## Do Suits Matter in Poker?

**No — not for deciding who wins. Suits do exactly one job in Texas Hold'em: five of the same suit make a flush. Beyond that they carry no rank, so two hands that match rank for rank always split the pot, and no card ever outranks another because of its suit.**

The question keeps coming up because suit order genuinely exists in poker — just not in this game. Stud and razz use it to decide who brings it in and who takes an indivisible chip. Hold'em uses it for neither.

The cleanest proof is the one chip that *cannot* be divided. The 2026 WSOP tournament rules say ==g:*"In button games with 2 or more high or low hands, the odd chip goes to the first seat left of the button"*== (Rule 73). Even when a pot physically will not split evenly, the rule reaches for **the seat**, not the suit — and the suit-based method in the back half of that same rule is written for stud and razz only.

One more thing worth knowing: in Hold'em two flushes are always the *same* suit anyway, because all five community cards are shared and a board can't hold three hearts and three spades at once. So "my spades beat your hearts" is not a rule you lost to — it's a hand that cannot be dealt.

---

## When Your Kicker Doesn't Play — and the Pot Splits

![Infographic: the board A-K-Q-J-10 is the best five for everyone, so a 9-7 hand cannot beat it and the pot is split](/images/holdem-tiebreak-best5.webp "Best five of seven: when the board is already the best hand, your hole cards fall out of it")

**If your hole cards can't crack the board's own best five, they don't play — and when that's true for everyone, the pot is split.**

Take the board above: A♠ K♥ Q♣ J♦ 10♠, Broadway already complete. Your 9♥ 7♠ *does* make a straight — K-Q-J-10-9 — but it's **lower** than the ace-high straight sitting on the felt, so your best five is the board itself. So is everyone else's.

The subtler version is when your hand plays but your kicker doesn't. Board A♥ K♣ Q♦ J♠ 9♥: A♠ 3♠ against A♦ 2♦. Both pair the ace, and all three kicker slots fill from the board — A-A-K-Q-J for each player. The 3 and the 2 are dead weight; identical best fives, ==g:chop.==

![Infographic: on an A-K-Q-J-9 board, A-3 and A-2 both play A-A-K-Q-J, so the identical hands split the pot](/images/holdem-tiebreak-split.webp "When best fives match rank for rank, the pot is divided — suits never break the tie")

Spotting these runouts before the river bet is a skill of its own — that's [reading the board](/en/blog/holdem-reading-the-board). And what happens to the chips once hands tie — equal shares, the odd chip, three-way chops, all-in side pots — is all in the [split pot rules guide](/en/blog/holdem-split-pot-rules "thumb:/images/holdem-split-pot-hero.webp").

---

:::readnext[Keep reading]
/en/blog/holdem-kicker | What Is a Kicker in Poker? | /images/holdem-kicker-hero.webp
/en/blog/holdem-split-pot-rules | When Is a Pot Split? | /images/holdem-split-pot-hero.webp
:::

## FAQ

**Q. How are ties broken in poker?**

A. Three checks in order — hand rank, then the cards that make the hand, then kickers from the top down — and the first difference ends it. Just as important is what never enters the comparison: suits, who bet last, who sits closer to the button, and how many chips each player put in. If the five cards match rank for rank, the dealer chops the pot no matter what happened in the betting.

**Q. Who wins if two players have the same pair?**

A. The higher kicker — but check which of your cards actually reach the best five first. On A-Q-7-3-2 with a pair of aces, a player holding A-9 plays A-A-Q-9-7: the board's queen jumps ahead of their nine, so the nine is only the *second* kicker. Against A-K the pot is already decided at the first slot, and that nine is never compared at all. Three kicker slots exist; most pots end at the first one.

**Q. Who wins if both players have two pair?**

A. Higher pair first, then the lower pair, then the one kicker — so aces-and-threes beats kings-and-queens even though the second pair is far smaller. The case that catches people is a double-paired board like K-K-9-9-5: every player already holds the same two pair, so the hand collapses to a single kicker and the best hole card at the table takes it. Two pair carries exactly one kicker, never two.

**Q. Who wins if two players have the same three of a kind?**

A. Three of a kind carries two kickers, compared highest first — so if both players make the same trips, the higher side card wins. With trip nines, 9-9-9-A-K beats 9-9-9-A-Q because the second kicker (king) tops the queen. Matching trips and both kickers means a split. (A set from a pocket pair almost never ties, since only one player can hold that exact pair.)

**Q. Does the 5th card matter in poker?**

A. Yes — and it is the most common way a player loses a pot they were sure they had won. Three spots put the whole pot on the last card: a pair's third kicker, the lowest card of a flush, and the side card next to quads sitting on the board. It stops mattering only when the board's own cards outrank whatever you hold, at which point your hole cards drop out of the hand entirely and you are playing the board.

**Q. Can you use an ace as a 1 in poker?**

A. Yes, but only in the A-2-3-4-5 straight (the "wheel"), where it plays as the lowest card — which makes the wheel the lowest straight in the game. The ace can't wrap around the middle: Q-K-A-2-3 is not a straight.

**Q. Can you have a higher straight than another player?**

A. Yes, and in practice it happens when most of the straight is already on the board. Take a board of 5♦ 6♣ 7♠ 8♥ 2♦: a player with 9♣ 4♠ makes 9-8-7-6-5, while a player with 4♥ 3♦ makes 8-7-6-5-4 off the same four cards. Both of them "made a straight"; only the top card was ever counted, so the nine takes it. Equal top cards mean the same straight and a chop.

**Q. Who wins if two players have the same straight?**

A. The straight with the higher top card wins — Q-J-10-9-8 beats J-10-9-8-7, because a straight is ranked only by its highest card and has no kicker. If both straights have the same top card they are identical, so the pot is split. This happens most often when the straight sits mostly on the board and both players fill the same end.

**Q. Who wins if two players both have a flush?**

A. Compare the flushes card by card from the top down: an ace-high flush beats a king-high flush, and if the top cards match you move to the next card, and so on through all five. Suits never break the tie, so if all five ranks are identical the pot is split. (In Hold'em two flushes are always the same suit, since players share the board.)

**Q. Who wins if two players have the same full house?**

A. Compare the three-of-a-kind first — the higher trips win, so K-K-K-2-2 beats Q-Q-Q-A-A even though the aces look bigger. Only if the trips are identical do you compare the pair. A full house has no kicker, so matching trips and pair means a split pot.

**Q. What happens if two players both have a straight flush?**

A. The higher straight flush wins, decided by its top card — a queen-high straight flush beats a nine-high one. A royal flush is simply the ace-high straight flush, so it beats every other straight flush. Identical top cards mean an identical hand and a split pot.

**Q. Do suits ever break a tie in Texas Hold'em?**

A. No — but there is one place suits are used at a Hold'em table, and it is not the pot. When a game starts, each player draws a card to decide where the dealer button goes, and if two draws tie on rank the suit order settles it. That picks a *seat*, never a hand. Everywhere else in the rulebook suit order belongs to stud and razz. If two best fives match rank for rank, the pot is split regardless of suits.

**Q. What happens if both players have the exact same hand?**

A. The pot is split equally — a "chop." How the chips are physically divided, who gets the odd chip, and how side pots are settled is covered in the [split pot rules](/en/blog/holdem-split-pot-rules).

**Q. Is a tie (split pot) possible in poker?**

A. Yes, but it's uncommon. A true tie happens only when two or more players' best five cards match in rank exactly — most often when the board itself is the best hand ("playing the board"), or a shared straight or flush that no one's hole cards can improve. Then the pot is split equally. Kickers exist precisely to break most would-be ties before they ever become a split.

---

## The Takeaways

1. Every tie runs the same procedure: ==**hand rank → made cards → kickers → split**== — no exceptions, no suits.
2. A kicker only counts if it ==g:makes your best five== — board cards can replace it, and a double-paired board can counterfeit your two pair entirely.
3. Straights rank by their top card (the wheel is the lowest), flushes compare all five — and when nothing separates the hands, the pot is chopped.

Lock in the full order with the [complete hand rankings](/en/blog/holdem-hand-rankings), get the side card itself down in [what is a kicker](/en/blog/holdem-kicker), and see exactly how tied pots get divided in the [split pot guide](/en/blog/holdem-split-pot-rules).

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-kicker" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Kicker</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">What Is a Kicker in Poker?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The side card itself — which hands have one and how many</div>
  </a>
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Hand Rankings — Best to Worst</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">All 10 hands with odds, examples, and board puzzles</div>
  </a>
  <a href="/en/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hand Matchup</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Does a Flush Beat a Straight?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Math, board spots, and tie cases for the #1 confusion</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">When Is a Pot Split?</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">5 chop situations and 3 things players wrongly think win</div>
  </a>
</div>
`.trim(),
};
