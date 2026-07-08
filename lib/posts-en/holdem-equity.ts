import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-equity",
  title: "Poker Equity Explained — Win %, Fold Equity, and Realization",
  seoTitle: "Your Win % Isn't What You Keep — Poker Equity Explained",
  desc: "Equity is your share of the pot — but you don't always keep it. How poker equity works, why 40% equity doesn't mean you win 40%, and how fold equity wins pots you're behind in.",
  tldr: "Equity is your share of the pot — the percentage of the time your hand wins if all the cards are dealt. You call when your equity beats the pot odds, but position and betting mean you rarely keep your full equity — and fold equity lets you win pots even when your hand is behind.",
  category: "strategy",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "🥧",
  image: "/images/holdem-equity-hero.webp",
  imageAlt: "Two players all-in with cards face up on green felt, a stack of chips in the middle — the moment each hand's equity turns into a real share of the pot",
  tags: ["poker equity", "what is equity in poker", "fold equity", "equity realization", "equity vs pot odds", "all in equity", "poker equity calculator", "how to calculate equity poker"],
  content: `
For a year I thought "equity" was just a fancy word for "how likely I am to win." Then I lost three big pots in a night where I was the favorite going in, and a better player told me the thing that reframed the whole game: ==your equity is what you're *owed*, not what you *collect*.== You can be 40% to win a hand and realize almost none of it — or be behind and still print money. Understanding the gap between those is most of what separates winning players from hopeful ones.

==Equity is the single number that ties every other piece of poker math together — outs, pot odds, position, and aggression all resolve into one question: what share of this pot is really mine?== This guide covers what equity is, how to estimate it, and the three things nobody tells beginners: why you don't keep all of it, how folding opponents hands you extra, and why your big hand shrinks against a crowd.

The raw win-percentages behind every hand come from the [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); this guide is how you turn those percentages into decisions at the table.

---

### Equity at a glance

:::stripe
pot × win% | What your hand is worth right now
raw × realization% | What you actually collect
B ÷ (P + B) | The fold % a pure bluff needs
:::

---

## What Is Equity in Poker?

**Equity is your share of the pot — the percentage of the time your hand wins if the hand is played all the way to showdown.** If the pot is $100 and you're 60% to win, your hand is worth ==$60 right now==, even though the chips haven't been pushed yet.

Think of it as your slice of the pie. Every hand still live has a slice; the slices always add up to 100%. When you're heads-up and 70% to win a $200 pot, ==g:$140 of it is "yours"== in the long run — you won't win *this* pot 70% of the time and lose the rest, but across a thousand identical spots, that's the share you collect.

That's the whole reason equity matters: it turns "am I ahead?" into "how much of this pot do I own?" — and that's the number you compare against the price of a call.

---

## How to Estimate Your Equity Fast

**On a draw, multiply your outs by 4 on the flop or by 2 on the turn; preflop, memorize the handful of matchups that come up again and again.** You'll almost never compute exact equity at the table — you estimate, and these two shortcuts cover 90% of spots.

**Draws (the Rule of 4 and 2):** count your [outs](/en/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp"), then multiply. A flush draw is 9 outs → ==9 × 4 = 36%== on the flop (true value 35%). The exact numbers for every draw live in [drawing odds](/en/blog/holdem-drawing-odds); here's the quick reference:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Equity (2 cards) |
|:---|:---:|:---:|
| Flush + open-ender | 15 | 54.1% |
| Flush draw | 9 | 35.0% |
| Open-ended straight | 8 | 31.5% |
| Gutshot straight | 4 | 16.5% |

</div>

**Preflop matchups (memorize these):** all-in before the flop, the same fights repeat. Learn these and you'll instantly know your equity in most preflop all-ins.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Matchup | Equity | Type |
|:---|:---:|:---|
| AA vs KK | 82% / 18% | Overpair dominates |
| QQ vs AK | ~57% / ~43% | Pair edges the "race" |
| 22 vs AK | ~52% / ~48% | The true coin flip |
| AK vs AQ | ~70% / ~25% | Domination (rest chops) |
| 88 vs A7 | ~70% / ~30% | Pair vs one overcard |

</div>

Two things trip people up here. A pair against two overcards (QQ vs AK) is ==r:not a 50/50== — the pair is a modest favorite, around 57/43 offsuit (a touch tighter, ~54/46, when the AK is suited). And the phrase "coin flip" really only fits a low pair against two bigger cards (22 vs AK), where it's genuinely close.

---

## Equity vs Pot Odds: The One Rule That Decides Every Call

**Call when your equity is bigger than your pot odds — that single comparison decides almost every call in poker.** [Pot odds](/en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") tell you the equity you *need* to break even; equity tells you what you *have*. If you have more than you need, calling makes money.

Facing a half-pot bet, your pot odds require ==25%== to call. A flush draw with two cards to come has ~35% equity — 35 beats 25, so it's a profitable call. That's the entire decision, stripped of guesswork.

But here's the catch almost every guide skips: **"your equity equals your pot share" is only true when there's no more betting.** The moment more money can go in on later streets, a raw 35% doesn't automatically translate to 35% of the final pot — you might get blown off your draw, or pay off when you hit second-best. That gap is exactly where [implied odds](/en/blog/holdem-implied-odds "thumb:/images/holdem-implied-odds-hero.webp") (money you'll win later) and equity realization (below) come in. Equity is where the math *starts*, not where it ends.

---

## Fold Equity: How You Win Pots When Your Hand Is Behind

**Fold equity is the extra equity you gain from the chance your opponent folds — it's why a bet can win a pot your hand alone would lose.** When you bet, you have two ways to win: your opponent folds now, or they call and you win at showdown. Checking only gives you the second one.

:::compare
Betting (aggression) | Checking or calling (passive)
They fold now → you win the pot | No fold equity — nobody folds to a check
They call and you hit → you win | You hit → you win
==g:Two ways to win== | ==r:One way to win==
:::

For a ==pure bluff== with no chance to improve, the break-even is simple: you need your opponent to fold often enough to cover the risk. Betting $50 into a $100 pot, your break-even fold rate is ==B ÷ (P + B) = 50 ÷ 150 = 33%==. If they fold more than a third of the time, betting profits — even with the worst hand at the table.

Now add a draw, and it gets much better. Here's the full picture as a ==g:semi-bluff==: pot is $100, you bet $50 with a flush draw, your opponent folds 40% of the time, and when they call you still have 35% equity to hit by the river.

:::note
EV = (fold% × pot) + (call% × [equity × (pot + bet) − (miss% × bet)])
EV = (0.40 × $100) + (0.60 × [0.35 × $150 − 0.65 × $50])
EV = $40 + (0.60 × [$52.50 − $32.50]) = $40 + $12 = ==g:+$52==
:::

Betting that flush draw is worth ==+$52== versus check-folding it — and most of that value comes from the times they fold, not the times you hit. That's fold equity: the reason aggression beats passivity, and why a draw is worth far more as a bet than as a call.

---

## Equity Realization: Why 40% Equity Doesn't Mean You Win 40%

**Equity realization is how much of your raw equity you actually collect — and it's usually less than 100%, because position and betting cost you.** Your "40% to win" assumes you always reach showdown; in reality you get bet off draws, forced to fold, and pushed around out of position. What you keep is:

==b:Realized equity = raw equity × realization%==

A hand with 40% raw equity that only realizes 75% of it is really worth ==0.75 × 40% = 30%==. That's why you can be "ahead of your opponent's range" and still lose money — you never get to cash in the full slice.

What moves your realization up or down:

:::card
🪑 | Position | In position you realize *more* than your raw equity (you see free cards, control the pot); out of position you realize less. This is the biggest factor
🎯 | Playability | Suited connectors and hands that flop draws realize well; offsuit clunkers realize badly even with decent raw equity
📚 | Stack depth & skill | Deeper stacks and tougher opponents make marginal equity harder to realize
:::

This is the single most important idea most beginner guides leave out, and it's why the [same hand plays completely differently by position](/en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp"). Raw equity is the ceiling; realization is what you take home.

---

## All-In Equity: When Raw Equity Is All That Matters

**When you're all-in, there are no more decisions — so you realize 100% of your equity, and raw equity becomes the final word.** Every complication above (position, folding, getting bet off) disappears, because no more betting can happen. Whatever your win-percentage is, that's exactly the share of the pot you'll collect over time.

This is why preflop all-in equities matter so much: AA all-in against KK banks its full ==82%== — no realization tax, no fold equity, just the raw number playing out. It's also why a "coin flip" (22 vs AK at ~52/48) is a genuine near-tossup all-in, even though the same two hands played postflop would diverge wildly based on the board and who has position.

All-in is the one spot in poker where the pie is sliced exactly as the math says — which is both its appeal and its danger.

---

## Multiway Equity: Why Your Big Hand Shrinks Against a Crowd

**Your equity drops fast in multiway pots, because the same 100% pie now gets split among more hands.** Pocket aces are around 85% heads-up, but against three opponents that slides to ==r:~64%==, and against four to ~56% — still the best hand, but no longer the crush it feels like. Three-way, equity *averages* 33% by definition, because three players divide one pot.

![A crowded poker table with four players still in the hand, cards and chips in front of each — the moment a premium hand's equity gets split several ways](/images/holdem-equity-multiway.webp "The more players still in the pot, the smaller everyone's slice — even pocket aces")

Two things get worse multiway, not just your raw share:

- **Fold equity collapses.** To win a pot with a bet, now *everyone* has to fold — much less likely with three opponents than one. Bluffs and thin semi-bluffs lose value fast.
- **Realization drops.** More players left to act means more ways to get outdrawn or bet off your hand, so you realize even less of an already-smaller slice.

The practical takeaway: hands that want a multiway pot are the ones that make the nuts (sets, suited aces for the nut flush), not big pairs that play best heads-up. When the field is large, tighten toward hands whose equity holds up when the pie is cut five ways.

---

## Putting It Together: How Pros Actually Use Equity at the Table

**Good players don't compute exact equity — they run a fast four-step estimate that layers realization and fold equity on top of the raw number.** Here's the thought process, in the order it actually happens:

:::steps
Estimate raw equity | Outs × 4 or × 2 for draws; recall the matchup preflop
Discount for realization | Out of position or hard to play? Shave it down — 40% raw might be 30% real
Add fold equity | If you're betting, how often does villain fold? That's extra equity your hand alone doesn't have
Compare to the price | Realized equity + fold equity vs your pot odds → call, bet, or fold
:::

The night I mentioned at the top, I was making step one and stopping — counting my raw equity and ignoring that out of position, against a good player, I'd never realize it. Once I started discounting for position and thinking about *their* folds instead of just my cards, the leaks closed. Equity isn't a number you look up; it's a lens you run every decision through.

---

:::readnext[Keep reading]
/en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
/en/blog/holdem-implied-odds | Implied Odds — When a Bad Price Is a Good Call | /images/holdem-implied-odds-hero.webp
:::

## FAQ

**Q. What is equity in poker?**

A. Equity is your share of the pot — the percentage of the time your hand wins if the hand goes to showdown. If the pot is $100 and you're 60% to win, your equity is worth $60. It's the core number you compare against the price of a call to decide whether to continue.

**Q. How do you calculate equity in poker?**

A. For draws, use the Rule of 4 and 2: multiply your outs by 4 on the flop (two cards to come) or by 2 on the turn. Nine flush outs ≈ 36% on the flop. Preflop, memorize common matchups (AA vs KK is 82/18). For exact numbers, players use equity calculators away from the table to study — you estimate while playing.

**Q. What's the difference between equity and pot odds?**

A. Equity is your chance of winning (what you have); pot odds are the equity you need to break even on a call (what the price demands). The rule is simple: call when your equity is greater than your pot odds. Pot odds come from the bet size; equity comes from your hand and the board.

**Q. Is 50% equity good in poker?**

A. It's neither good nor bad on its own — 50% is a coin flip. Whether it's a call depends on the price: against a half-pot bet you only need 25%, so 50% is a big call; but risking your whole stack as a 50/50 underdog to nothing is a gamble, not an edge. Equity is only meaningful next to the pot odds.

**Q. How much fold equity do I need to bluff profitably?**

A. For a pure bluff, you need your opponent to fold at least bet ÷ (pot + bet) of the time. Betting $50 into $100 means 50 ÷ 150 = 33%. If you also have a draw (a semi-bluff), you need them to fold even less often, because you can still win when called. That's why semi-bluffing draws is so profitable.

**Q. What is equity realization?**

A. Equity realization is how much of your raw equity you actually collect. Realized equity = raw equity × realization%. A hand with 40% raw equity that realizes 75% is really worth 30%. Position is the biggest driver — in position you realize more, out of position less — which is why the same hand is worth more on the button than in the blinds.

**Q. What is all-in equity?**

A. All-in equity is simply your raw win-percentage when no more betting can happen. Because there are no future decisions, you realize 100% of it, so raw equity becomes the exact share of the pot you collect over time. It's the one spot where "equity equals pot share" is literally true.

**Q. Why does my equity drop in multiway pots?**

A. Because the same 100% pot is now split among more hands — pocket aces at ~85% heads-up fall to ~64% against three players and ~56% against four. Multiway also cuts your fold equity (everyone has to fold, not just one player) and your realization (more players means more ways to get outdrawn), so both your raw share and what you keep of it shrink.

---

## The 3 Things to Remember

1. **Equity is your share of the pot** — win% × pot size. Call when it beats your pot odds. That comparison is the backbone of every decision.
2. **You rarely keep all of it.** Realized equity = raw × realization%, and position is the biggest factor. Raw equity is the ceiling, not the payout.
3. **Aggression manufactures equity.** Fold equity lets a bet win pots your hand would lose — but it collapses multiway, where you need everyone to fold.

Master this and the rest of poker math clicks into place. From here, turn equity into correct calls with the [pot odds guide](/en/blog/holdem-pot-odds), or see how deep stacks change the picture with [implied odds](/en/blog/holdem-implied-odds).

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Odds & Probability Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The raw win-percentages behind every hand</div>
  </a>
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The price your equity has to beat</div>
  </a>
  <a href="/en/blog/holdem-implied-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Implied Odds Explained</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why equity isn't your final pot share</div>
  </a>
  <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Position Changes Everything</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why realization lives and dies on position</div>
  </a>
</div>
`.trim(),
};

export default POST;
