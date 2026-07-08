import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-kicker",
  title: "What Is a Kicker in Poker — Rules, Counting & the Dominated Ace",
  seoTitle: "What Is a Kicker in Poker? The Side Card That Wins Pots",
  desc: "A kicker is the side card that breaks ties in poker — which hands have one and how many, why A9 loses to AK, and the quads exception most guides get wrong.",
  tldr: "A kicker is the highest side card that isn't part of your main hand — it breaks ties when two players share the same rank. One pair uses 3 kickers, two pair 1, trips 2; straights, flushes, and full houses have none. It's why AK beats AQ when the board pairs an ace.",
  category: "초보 가이드",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🃏",
  image: "/images/holdem-kicker-hero.webp",
  imageAlt: "Two players turning over A-K and A-Q at showdown with an ace on the board — the king kicker deciding who wins the pot",
  tags: ["poker kicker", "what is a kicker in poker", "kicker rules", "does a flush have a kicker", "playing the board", "dominated ace", "kicker card", "does four of a kind have a kicker"],
  content: `
The hand that finally taught me what a kicker is cost me a full buy-in. I had ==b:A♦ 9♣==, the board paired my ace, and I shoved thinking top pair was gold. He flipped ==b:A♠ K♦== — same pair of aces, but his king outranked my nine, and the pot slid his way. I hadn't lost to a better *hand*; I'd lost to a better ==side card.== That side card is the kicker, and it decides more pots than any beginner realizes.

==A kicker is the tiebreaker built into poker itself — when two players hold the same rank, the highest leftover card wins.== Most guides give you a one-line definition and an AK-vs-AQ example. This one gives you the full picture: exactly which hands have a kicker (and how many), the one exception everyone gets wrong, and why "playing the board" means your kicker suddenly doesn't matter at all.

Where a kicker fits in the bigger picture of [poker hand rankings](/en/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp") is simple: it only comes up *after* two players tie on rank — it never beats a higher-ranked hand.

---

### Kickers at a glance

:::stripe
3 | Kickers in a one-pair hand
1 | Kicker in two pair (and quads)
0 | Kickers in a straight, flush, or full house
:::

---

## What Is a Kicker in Poker?

**A kicker is the highest card in your five-card hand that isn't part of your ranked combination — it settles the winner when two players share the same rank.** It's also called a "side card." Poker is always a five-card game (your best five out of seven in Hold'em), so once your pair or trips is locked in, the remaining slots are filled by kickers.

The key idea: a kicker ==never beats a higher-ranked hand.== A pair of kings with a deuce kicker still crushes a pair of tens with an ace kicker — rank first, kicker only as a tiebreaker. Kickers only matter when the ==r:ranks are identical==: pair vs. the same pair, trips vs. the same trips.

Say you hold A-K and your opponent holds A-Q, and the board pairs an ace. You both have "a pair of aces" — identical rank. Now the side cards decide, and your king outkicks their queen. Nobody made a better hand; the kicker just did its quiet job.

---

## Which Poker Hands Have a Kicker — and Which Don't

**Only hands that use fewer than five cards for their combination have kickers — everything that fills all five cards on its own has none.** This is the table competitors bury in paragraphs. Here it is at a glance:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | Has a kicker? | Kicker cards |
|:---|:---:|:---:|
| High card | Yes — all five compared in order | up to 4 |
| One pair | ✅ Yes | 3 |
| Two pair | ✅ Yes | 1 |
| Three of a kind | ✅ Yes | 2 |
| Four of a kind | ✅ Yes (rarely matters) | 1 |
| Straight | ❌ No | — |
| Flush | ❌ No* | — |
| Full house | ❌ No | — |
| Straight flush / Royal flush | ❌ No | — |

</div>

The logic is pure arithmetic: **combination cards + kickers always equal five.** One pair uses 2 cards, so 3 kickers fill the rest. A straight, flush, or full house already uses all five, so there's nothing left to kick with — two straights or two full houses are settled by the ranks *inside* them, not by a side card.

==*Flushes are the asterisk:== technically a flush has no "kicker." When two flushes clash, you compare all five cards highest-to-lowest (an ace-high flush beats a king-high flush). People loosely call the top card a "kicker," but strictly it's a five-card high-card comparison. Full tie-break order for every hand lives in [how ties are broken in poker](/en/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp").

---

## How Many Kickers Does Each Hand Use?

**One pair uses three kickers, three of a kind uses two, and two pair and four of a kind use just one.** Knowing the count tells you exactly how deep a tiebreaker can run.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | Combination | + Kickers | = 5 cards |
|:---|:---:|:---:|:---:|
| One pair | 2 | 3 | ✅ |
| Three of a kind | 3 | 2 | ✅ |
| Two pair | 4 | 1 | ✅ |
| Four of a kind | 4 | 1 | ✅ |

</div>

This matters at showdown because kickers are compared ==in order, highest first.== With one pair, if the first kickers tie, you move to the second, then the third. Two players can hold the same pair *and* the same top kicker and still get separated by the third card — which is exactly why "my kicker was good" isn't always good enough.

---

## AK vs AQ: How a Kicker Decides the Winner

Let's run it card by card so the mechanic is concrete.

The board is ==b:A♣ 9♦ 5♠ 2♥ 7♣==. You hold ==b:A♠ K♠==, your opponent holds ==b:A♦ Q♦==.

- **You:** A♠ K♠ + board → a pair of aces. Best five = ==g:A♠ A♣ K♠ 9♦ 7♣== (pair of aces, kickers K-9-7).
- **Opponent:** A♦ Q♦ + board → also a pair of aces. Best five = ==A♦ A♣ Q♦ 9♦ 7♣== (kickers Q-9-7).

Same pair, so compare kickers top-down: your ==g:K beats their Q.== You win, A-A-K-9-7 over A-A-Q-9-7. The 9 and 7 never even come into play — the first kicker settled it.

:::note
Notice both hands share the 9 and 7 from the board. Kickers can come from the board too: if the highest side card is a community card, it fills the hand for *both* players and the next card decides. Your hole card is only a kicker if it beats what's already on the board.
:::

---

## Playing the Board: When Your Kicker Doesn't Play

**If the five community cards already make the best possible hand and your hole cards can't improve on it, you're "playing the board" — and there is no kicker at all.** Everyone still in the hand uses the identical five cards, so the pot is split.

The board is ==b:10♠ J♦ Q♣ K♥ A♠== — a made ten-to-ace straight (Broadway), in mixed suits so no flush is possible.

- You hold ==b:2♣ 3♦==. Your best five is the board straight; the 2 and 3 add nothing.
- Your opponent holds ==b:4♥ 5♦==. Same story — the board straight is their best five too.

Neither of you can go higher than an ace, so you both "play the board" and ==g:chop the pot.== A straight has no kicker, so those hole cards are dead weight. When you hear "the board plays," this is it — and it's the one spot where a strong-looking hole card is worth exactly nothing. (More on spotting these runouts in [reading the board](/en/blog/holdem-reading-the-board).)

---

## The Dominated Ace: Why A9 Loses to AK

**A hand is "dominated" when it shares a card with a stronger hand and will lose the kicker battle nearly every time it connects — the classic trap is a weak ace like A9 against AK.** This is where kickers stop being trivia and start costing money.

![Two starting hands side by side on green felt — A-K next to A-9 — showing how the same ace with a weaker kicker becomes a dominated trap](/images/holdem-kicker-dominated.webp "Same ace, different fate: the kicker is what separates a premium hand from a dominated one")

Back to my buy-in. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, no straight or flush out there.

- **A9:** A♠ 9♣ → pair of aces, best five ==A♠ A♦ Q♠ 9♣ 7♣==.
- **AK:** A♥ K♦ → pair of aces, best five ==g:A♥ A♦ K♦ Q♠ 7♣==.

Same pair again, and K outkicks the 9. Worse, my 9 didn't even make the cut — the board's queen outranked it, so my "kicker" was ==r:dead== before the hand began. That's domination: when you hit your ace, you're often just paying off a bigger ace. It's the whole reason the [starting hands chart](/en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") treats A9 offsuit so much more cautiously than AK — the kicker is the difference between a premium hand and a trap.

---

## Does Four of a Kind Have a Kicker?

**Yes — four of a kind has a one-card kicker, but it almost never decides a hand in Hold'em because the quads are usually shared on the board.** This is the exception most guides fumble by lumping quads in with "five-card hands that have no kicker."

The math is clear: four cards make the quad, one card is the kicker. It only matters when two players somehow tie on the *same* four of a kind — which in Hold'em requires all four to sit on the board (since there are only four of each rank). If the board is ==b:5♠ 5♥ 5♦ 5♣ K♦==, everyone has quad fives, and the fifth card is the kicker: a player holding an ace plays ==g:5-5-5-5-A== and beats a player who takes the board's ==5-5-5-5-K.== Rare, but real — and being right about the edge cases is what separates a trustworthy guide from a hand-wavy one.

---

:::readnext[Keep reading]
/en/blog/holdem-hand-rankings | Poker Hand Rankings (Full Order) | /images/holdem-hand-rankings-hero.webp
/en/blog/holdem-tiebreak-rules | How Ties Are Broken in Poker | /images/holdem-tiebreak-hero.webp
:::

## FAQ

**Q. What is a kicker in poker?**

A. A kicker is the highest side card in your five-card hand that isn't part of your ranked combination. It breaks ties when two players share the same rank — for example, A-K beats A-Q when the board pairs an ace, because the king kicker outranks the queen. A kicker never beats a higher-ranked hand.

**Q. Does a flush have a kicker?**

A. No. A flush uses all five cards, so there's no separate kicker. When two flushes clash you compare all five cards from highest to lowest — an ace-high flush beats a king-high flush. People sometimes call the top card a "kicker" loosely, but it's really a five-card comparison.

**Q. Does a straight have a kicker?**

A. No. A straight is five consecutive cards, so it's already complete. If two players make the same straight, they split the pot — extra hole cards don't matter. Only a higher straight beats a lower one.

**Q. Does a full house have a kicker?**

A. No. A full house is three of a kind plus a pair — all five cards. Ties are broken by the rank of the trips first, then the pair, never by a side card.

**Q. Does four of a kind have a kicker?**

A. Yes, four of a kind has a one-card kicker, but it rarely matters in Hold'em. It only decides a hand when two players tie on the exact same quads — which requires all four cards to be on the board — and then the highest fifth card wins.

**Q. How many kickers are in a poker hand?**

A. It depends on the hand: one pair uses three kickers, three of a kind uses two, and two pair and four of a kind each use one. Straights, flushes, full houses, and straight flushes have no kickers because they already fill all five cards.

**Q. What is a good kicker in poker?**

A. A high one — an ace or king kicker is strong, while a low kicker like a nine leaves you "dominated." This is why AK and AQ are far better than A9 or A5: when everyone pairs their ace, the biggest kicker wins the pot.

**Q. What does "playing the board" mean?**

A. Playing the board means the five community cards are your best hand and your hole cards can't improve on it. Since everyone uses the same five cards, the pot is split. There's no kicker because the board already forms a complete five-card hand.

**Q. Do kickers matter in Texas Hold'em?**

A. A lot. Because everyone shares the community cards, players frequently make the same pair or trips, and the kicker decides those pots. Choosing hands with strong kickers (and folding dominated ones) is a core part of winning play.

---

## The 3 Things to Remember

1. **Kicker = side card, tiebreaker only.** It settles ties between equal ranks and never beats a higher-ranked hand.
2. **Combination + kickers = five.** One pair has 3 kickers, trips 2, two pair and quads 1; straights, flushes, and full houses have none.
3. **Kickers decide real money.** Domination (A9 vs AK) and playing the board both come down to the kicker — pick hands with strong side cards and know when yours is dead.

Get the kicker right and a whole category of "how did I lose that?" hands stops being a mystery. From here, see the full [poker hand rankings](/en/blog/holdem-hand-rankings) order, or the complete [tie-breaking rules](/en/blog/holdem-tiebreak-rules) for every hand type.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Hand Rankings</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The full order a kicker sits underneath</div>
  </a>
  <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Ties Are Broken</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Full tie-break order for every hand</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why weak-kicker aces get folded</div>
  </a>
  <a href="/en/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board Reading</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Read the Board</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Spot when you're playing the board</div>
  </a>
</div>
`.trim(),
};

export default POST;
