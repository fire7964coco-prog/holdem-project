import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-probability",
  title: "Poker Odds & Probability Chart — Every Hand's Real Odds in Hold'em",
  seoTitle: "How Often Do You Actually Hit? — Poker Odds & Probability Chart",
  desc: "The real odds of every poker hand, flop, and draw in Texas Hold'em — plus the Rule of 2 and 4 and pot odds made simple, in one complete probability chart.",
  tldr: "By the river you'll make one pair 43.8% of the time, two pair 23.5%, a flush 3.0%, and a full house 2.6% — while a royal flush shows up just once in about 31,000 hands.",
  category: "strategy",
  date: "2026-07-03",
  updated: "2026-07-03",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🎲",
  image: "/images/holdem-probability-hero.webp",
  imageAlt: "Overhead view of an active Texas Hold'em table with five community cards, scattered chip stacks and players mid-hand",
  tags: ["poker odds", "poker probability chart", "poker hand odds", "odds of flopping a set", "rule of 2 and 4", "pot odds", "poker outs chart", "texas holdem odds"],
  content: `
The first time I set-mined a pair of fives in a live game and hit my set on the flop, the guy next to me groaned "what are the *odds*?" — and I actually knew: about ==1 in 8.5==. That one number is why I called in the first place.

Poker isn't a guessing game. Every call, fold, and shove is a ==probability question in disguise==, and the players who win are the ones who've turned "what are the odds?" into a reflex. This is the ==complete **poker odds and probability chart**== for Texas Hold'em — every made hand, every flop, every draw — with the ==g:one mental shortcut== that lets you do the math at the table in two seconds.

---

### The numbers that matter most

:::stripe
43.8% | One pair by the river
23.5% | Two pair
3.0% | Making a flush
2.6% | Making a full house
1 in 30,940 | A royal flush
:::

---

## Poker Hand Odds Chart: The Probability of Every Hand

Here's the master chart. The trick most sites skip: there are ==two different numbers== for every hand, and confusing them is why people argue about how rare a royal flush "really" is.

- **5-card odds** = the chance a single random five-card hand *is* that hand (the classic textbook number).
- **Hold'em (by the river)** = the chance you *end up* with that hand after seeing all seven cards (your two hole cards + five community cards). This is the number that actually matters at the table.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Hand | 5-card odds (dealt) | Hold'em odds (by river) |
|:---|:---:|:---:|
| Royal Flush | 1 in 649,740 (0.000154%) | 1 in 30,940 (0.0032%) |
| Straight Flush | 1 in 72,193 (0.00139%) | 1 in 3,590 (0.0279%) |
| Four of a Kind | 1 in 4,165 (0.0240%) | 1 in 595 (0.168%) |
| Full House | 1 in 694 (0.144%) | 1 in 39 (2.60%) |
| Flush | 1 in 509 (0.197%) | 1 in 33 (3.03%) |
| Straight | 1 in 255 (0.392%) | 1 in 22 (4.62%) |
| Three of a Kind | 1 in 47 (2.11%) | 1 in 21 (4.83%) |
| Two Pair | 1 in 21 (4.75%) | 1 in 4.3 (23.5%) |
| One Pair | 1 in 2.4 (42.3%) | 1 in 2.3 (43.8%) |
| High Card | 1 in 2.0 (50.1%) | 1 in 5.7 (17.4%) |

</div>

> **The stat that surprises everyone**
> High card is the *most* common five-card hand (50%) but one of the *least* common Hold'em results (17%). Why? Seven cards give you so many chances to pair up that "no pair by the river" actually becomes rare. More cards, more connections.

Notice how the order never changes — the rarer a hand is to make, the higher it beats. That's the whole logic behind the [poker hand rankings](/en/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp"): probability *is* the ranking.

:::quiz:::

---

## Odds of Being Dealt Each Starting Hand

![Pocket aces — the ace of spades and ace of hearts freshly dealt on green felt beside poker chips](/images/holdem-probability-starting-hands.webp "Pocket aces: the best starting hand, dealt just once in 221 hands")

Before any flop, there are exactly **1,326 possible two-card starting hands**. Here's how often the ones people ask about show up.

| Starting hand | Odds | How often |
|:---|:---:|:---|
| A specific pocket pair (e.g. A-A) | 1 in 221 (0.45%) | Once every ~221 hands |
| **Any** pocket pair | 1 in 17 (5.9%) | Roughly twice an hour live |
| A-K suited (specific) | 1 in 332 (0.30%) | Rare |
| A-K (suited *or* offsuit) | 1 in 83 (1.2%) | — |
| Any two suited cards | 1 in 4.3 (23.5%) | Almost every fourth hand |

So the next time someone says "I never get aces," they're roughly right — you'll be dealt a *specific* pair like aces only about ==once every 221 hands==. But **any** pocket pair arrives every 17 hands, which is why set-mining is a real strategy, not a fantasy. Which pairs and suited hands are worth playing from each seat is covered in the [starting hands chart by position](/en/blog/holdem-starting-hands-chart).

---

## Odds of Flopping Each Hand

This is the table most odds pages bury or split across a dozen articles. These are the odds of the flop *making* your hand, given the hole cards in the left column.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| You flop… | Holding | Odds | Against |
|:---|:---|:---:|:---:|
| A set (or better) | A pocket pair | 11.8% | ~7.5 to 1 |
| A flush | Two suited cards | 0.84% | ~118 to 1 |
| A flush draw | Two suited cards | 10.9% | ~8 to 1 |
| A straight | Suited connectors (e.g. 8-7) | 1.3% | ~76 to 1 |
| Two pair | Two unpaired cards | 2.0% | ~49 to 1 |
| A full house | A pocket pair | 0.98% | ~101 to 1 |
| Quads | A pocket pair | 0.245% | ~407 to 1 |

</div>

The one to memorize is the top row: ==**you flop a set about 12% of the time**, or roughly 1 in 8.5==. That single number decides whether calling a raise to "set-mine" a small pair is profitable — you need the pot (and your opponent's likely stack) to pay you off more than 7.5 to 1 when you hit. That's the bridge to [pot odds](#pot-odds), below. For the full derivation of every row here — plus the set-mining stack rule and the made-vs-draw-vs-complete flush split — see the deep dive on [drawing odds and the odds of flopping each hand](/en/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp").

---

## Drawing Odds: Hitting Your Flush or Straight by the River

You have a draw on the flop. How often do you complete it? It all comes down to **outs** — the cards left in the deck that make your hand. Count your outs, then read across.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Flop → river (2 cards) | Turn → river (1 card) |
|:---|:---:|:---:|:---:|
| Flush + open-ended (combo) | 15 | 54.1% | 32.6% |
| Flush + gutshot | 12 | 45.0% | 26.1% |
| Flush draw | 9 | 35.0% | 19.6% |
| Open-ended straight | 8 | 31.5% | 17.4% |
| Two overcards | 6 | 24.1% | 13.0% |
| Gutshot (inside) straight | 4 | 16.5% | 8.7% |
| Pair → set / set → full house | 2 | 8.4% | 4.3% |

</div>

The classic spot: you flop a **flush draw** (nine outs). You'll get there ==35% of the time by the river== — better than one in three. An **open-ended straight draw** (eight outs) hits 31.5%. Note the two columns: once the turn bricks, your odds on a *single* card roughly halve, which is exactly why draws get more expensive to chase street by street.

---

## How to Calculate Poker Odds: Counting Outs and the Rule of 2 and 4

You can't carry that table in your head — but you don't need to. The **Rule of 2 and 4** gets you within a percent or two in one second:

:::steps
Count your outs | The unseen cards that complete your hand (flush draw = 9)
On the flop (2 cards to come) | Multiply outs × 4 → your approximate % to hit by the river
On the turn (1 card to come) | Multiply outs × 2 → your approximate % to hit on the river
:::

**Worked example.** You have four cards to a flush after the flop. That's ==9 outs== (13 of your suit − 4 you can see). On the flop: 9 × 4 = **36%** — the true figure is 35.0%, so you're spot on. On the turn if you missed: 9 × 2 = **18%** (true: 19.6%).

:::tip[The rule slightly *over*-estimates once you have more than about 9 outs. With a 15-out monster, "×4" says 60% but the real number is 54% — shade it down a few points for big draws.]:::

That's the entire trick. Outs → times four on the flop → your [equity](/en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"). Everything else is just knowing what to do with that number. The one skill this rule assumes you've mastered is the count itself — for combo draws, overlapping outs, and the "dirty" outs that shouldn't count, see the full guide to [counting outs in poker](/en/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp").

---

<a id="pot-odds"></a>

## Pot Odds: Turning Your Odds Into a Call or Fold

![A player pushing a stack of chips toward the center pot on green felt — a call in motion](/images/holdem-probability-pot-odds.webp "Pot odds compare the price of a call to the size of the pot")

Knowing you'll hit 35% of the time is useless until you compare it to the **price**. Pot odds are simply: *what fraction of the final pot am I paying to call?* If your chance of winning is bigger than that fraction, you call.

**Worked example.** The pot is $100. Your opponent bets $50, making it $150. You must call $50 to win that $150.

:::steps
Pot after the bet | $100 + $50 = $150
Your call | $50 to win $150 (final pot $200)
Pot odds | 50 ÷ 200 = 25% — you need at least 25% equity
Your equity | Flush draw ≈ 35% (Rule of 4)
Decision | 35% > 25% → a clearly profitable ==g:call==
:::

That's the moment all the numbers pay off: your **drawing odds (35%)** beat your **pot odds (25%)**, so calling wins money in the long run even though you'll lose the hand more often than not. When the draw is bigger than the price, you call; when it's smaller, you fold — no gut feeling required. For the full method, bet-size cheat sheet, and how implied odds change the call, see [how to calculate pot odds](/en/blog/holdem-pot-odds) and [implied odds](/en/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp").

---

## Royal Flush & Straight Flush Odds (and Why They're So Rare)

![A royal flush in hearts — A-K-Q-J-10 all hearts — held with ace-king on a Queen-Jack-Ten heart board](/images/holdem-probability-royal-flush.webp "A royal flush in hearts: the rarest hand in poker, about 1 in 30,940 by the river")

The two rarest hands are the ones players brag about for years — with good reason.

- **Royal flush:** as a dealt five-card hand, ==1 in 649,740==. Playing Hold'em to the river, it improves to about 1 in 30,940 because you're choosing your best five from seven cards. Either way, most players go *years* between them.
- **Straight flush:** about 1 in 72,193 as a five-card hand. Still a once-a-year sighting for most.

Why so rare? A royal flush is exactly **one specific run of cards in one specific suit** — four ways to make it in the entire deck versus 1,302,540 ways to make a plain high card. Rarity is the whole reason it sits at the top of the rankings.

:::note
A common myth: "a royal flush beats everything, so it can be *tied*." Two royal flushes are only possible in different suits — and since suits never break ties, that's a split pot. In practice it essentially never happens outside of shared-board flukes.
:::

---

## Long-Shot Odds: Coolers, Quads, and Bad Beats

Some numbers exist mostly to explain the worst night of your poker life.

| Long shot | Odds |
|:---|:---:|
| Being dealt pocket aces | 1 in 221 |
| Flopping quads with a pocket pair | 1 in 407 |
| Flopping a straight flush (suited connectors) | ~1 in 4,900 |
| Making a royal flush by the river | 1 in 30,940 |

**Set over set** — you flop a set and lose to a bigger set — is the ultimate cooler. There's no clean single number because it depends on how many players hold pairs, but the anchor is this: *you* flop a set only 11.8% of the time, and an opponent doing the same on the same board is rare enough that most players remember every one. When it happens, it's variance, not a mistake — the math was on your side the whole way. If you want to see exactly how those showdowns are scored, the [kicker and tie-breaker rules](/en/blog/holdem-tiebreak-rules) cover every edge case.

---

:::readnext[Keep reading]
/en/blog/holdem-hand-rankings | Poker Hand Rankings, Best to Worst | /images/holdem-hand-rankings-hero.webp
/en/blog/holdem-starting-hands-chart | Which Starting Hands to Actually Play | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. What are the odds of getting a royal flush in Texas Hold'em?**

A. About 1 in 30,940 by the river when you play out a Hold'em hand (using your best five of seven cards). As a straight dealt five-card hand it's 1 in 649,740. Either way, most players go years without one.

**Q. What are the odds of a straight flush?**

A. Roughly 1 in 72,193 as a five-card hand, or about 1 in 3,590 by the river in Hold'em. It's the second-rarest hand, beaten only by the royal flush.

**Q. What are the odds of hitting a flush by the river?**

A. If you flop a flush draw (nine outs), you'll complete it about 35% of the time by the river — better than one in three. On a single card (turn to river), it drops to roughly 19.6%.

**Q. What are the odds of flopping a set?**

A. About 11.8%, or roughly 1 in 8.5, when you hold a pocket pair. That "7.5 to 1 against" figure is the basis for deciding whether set-mining a small pair is profitable.

**Q. What are the odds of being dealt pocket aces?**

A. 1 in 221 (0.45%) for aces specifically. Any pocket pair, though, comes around far more often — about 1 in 17 hands (5.9%).

**Q. What is the Rule of 2 and 4 in poker?**

A. A shortcut for draw odds: multiply your outs by 4 on the flop (two cards to come) or by 2 on the turn (one card to come) to estimate your percentage chance of hitting. It's accurate to within a point or two up to about nine outs.

**Q. How do you calculate pot odds?**

A. Divide the amount you must call by the total pot after your call. Calling $50 into a $150 pot means 50 ÷ 200 = 25% — so you need at least 25% equity to call profitably. Compare that to your drawing odds: if your chance to hit is higher, you call.

**Q. What are the odds of set over set?**

A. There's no single fixed number — it depends on how many opponents hold pocket pairs — but it's rare. You flop a set only 11.8% of the time to begin with, so two players both flopping sets on the same board is the classic "cooler" that costs stacks.

---

## The 3 Numbers to Burn Into Memory

1. **Flop a set: ~12% (1 in 8.5).** Decides every set-mining call.
2. **Flush draw by the river: 35%.** Nine outs, Rule of 4 → 9 × 4 = 36%.
3. **Pot odds beat gut feeling.** If your chance to hit is bigger than the price of the call, you call — every time.

Poker rewards the players who've made these automatic. Learn the chart, drill the Rule of 2 and 4, and start asking "what are the odds?" *before* you act instead of after. Next, put the math to work by learning [which starting hands to play from each position](/en/blog/holdem-starting-hands-chart), or brush up on [why a flush beats a straight](/en/blog/holdem-flush-vs-straight) so you always know what your outs are worth.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Hand Rankings, Best to Worst</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The order these odds create — every hand ranked</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which of those 1,326 hands to actually play</div>
  </a>
  <a href="/en/blog/holdem-flush-vs-straight" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Matchup</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Does a Flush Beat a Straight?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why the rarer hand always wins</div>
  </a>
  <a href="/en/blog/holdem-reading-the-board" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Board Reading</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Read the Board in Hold'em</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Count your outs by seeing every draw</div>
  </a>
  <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Position Changes Everything</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">When the odds justify a call — and when position does</div>
  </a>
</div>
`.trim(),
};

export default POST;
