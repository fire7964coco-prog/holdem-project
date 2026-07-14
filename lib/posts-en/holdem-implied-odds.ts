import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-implied-odds",
  title: "Implied Odds in Poker — When a Bad Price Is a Good Call",
  seoTitle: "The Call Pot Odds Say Is Wrong — Implied Odds Explained",
  desc: "Your pot odds say fold, but the call still prints. How implied odds work — the formula, set mining, reverse implied odds, and when the money isn't there.",
  tldr: "Implied odds are the extra chips you expect to win on later streets when your draw hits. They let you profitably call a draw that pot odds alone say to fold — but only if stacks are deep and your opponent will actually pay you off.",
  category: "odds",
  date: "2026-07-08",
  updated: "2026-07-08",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "💰",
  image: "/images/holdem-implied-odds-hero.webp",
  imageAlt: "A deep stack of chips sitting behind a player calling a bet with a flush draw on the turn — the moment implied odds justify a call the pot alone doesn't pay for",
  tags: ["implied odds", "implied odds poker", "reverse implied odds", "how to calculate implied odds", "implied odds vs pot odds", "set mining", "implied odds formula", "implied odds flush draw"],
  content: `
The biggest pot I ever won started with a call that "should" have been a fold. I had ==b:6♠ 5♠== on the button, flopped an open-ended draw, and the pot odds on the flop said the price wasn't there. I called anyway — because the guy across the table had 200 big blinds and couldn't fold top pair to save his life. The straight got there on the river, his whole stack came with it, and I finally understood the number nobody explains well: ==implied odds.==

==Implied odds are why you can call a draw that "should" be a fold — and why deep stacks make speculative hands so profitable in the right spots and so dangerous in the wrong ones.== The trouble is that most players treat them as a magic word that justifies any call. It isn't. It's a number you can estimate, and this guide shows you how.

The raw odds behind every draw come from the [poker odds and probability chart](/en/blog/holdem-probability "thumb:/images/holdem-probability-hero.webp"); this guide is how you decide when those odds — plus the money still to come — actually make a call profitable. It picks up exactly where [pot odds](/en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp") leave off.

---

### Implied odds at a glance

:::stripe
call ÷ hit% − (pot + call) | The implied odds formula
7.5-to-1 | True odds of flopping a set
0 | Your implied odds when villain is all-in
:::

---

## What Are Implied Odds in Poker?

**Implied odds are the extra chips you expect to win on later streets when your draw completes — added on top of the pot that's sitting there right now.** Pot odds only ask "is the current price worth it?" Implied odds ask the fuller question: "is the current price *plus everything I'll win later* worth it?"

That difference is why you can call a flop bet with a flush draw that isn't getting the immediate price. The pot in front of you doesn't pay enough — but if a heart lands and your opponent pays off a big river bet, the *total* you win covers the call many times over.

Here's the catch that makes or breaks the whole concept: that future money is an ==r:estimate==, not a fact. It depends entirely on how deep the stacks are and how likely your opponent is to pay you when you hit. Assume too much, and "implied odds" becomes a story you tell yourself while lighting chips on fire.

---

## Implied Odds vs Pot Odds: The Key Difference

**Pot odds count only the money in the pot right now; implied odds add the money you expect to win later if you hit.** They're not rivals — implied odds are pot odds *extended into the future*.

:::compare
Pot odds | Implied odds
Only the chips in the pot now | The pot now + chips you'll win on later streets
A fact you can calculate exactly | An estimate based on stacks and opponent
Tells you if the call pays for itself today | Tells you if the call pays off across the whole hand
Works even against an all-in | Worth zero against an all-in (no more betting)
:::

The practical rule: **start with pot odds.** If your equity already beats the price, call — no story needed. If your draw *just misses* the price, that's when implied odds become the tie-breaker. And if your draw misses the price by a mile, implied odds usually can't save it either.

---

## How to Calculate Implied Odds

**To calculate implied odds, figure out how much extra you need to win when you hit, using: extra needed = (your call ÷ your hit chance) − (the current pot + your call).** If you can realistically win that much more on later streets, the call is profitable.

Written cleanly, with ==g:x== as the extra money you must win when you complete:

:::steps
Find your hit chance | Count outs, convert to a percentage (the [Rule of 4 and 2](/en/blog/holdem-pot-odds) gets you close)
Divide your call by that hit chance | This is the total you need to win to break even
Subtract the pot that's already there | What's left is the extra you must win later — that's your ==g:x==
Judge if it's realistic | Deep stacks + a payoff-happy opponent = yes. Short stacks or a scary board = no
:::

The formula in one line: ==b:x = (call ÷ hit%) − (current pot + call).== If the extra money you'd realistically extract on later streets is *bigger* than x, calling is profitable even when the immediate pot odds say fold.

---

## A Worked Example: Flush Draw on the Turn

Let's run the numbers so the formula stops being abstract.

You hold ==b:A♥ K♥== on a ==Q♥ 7♥ 2♣ 3♠== board — the nut flush draw, 9 outs, with one card to come. The pot is $100 and your opponent bets $50 on the turn, so there's ==$150 in the middle== and it's $50 to you.

- **Pot odds first:** you're getting 150-to-50, or 3-to-1, so you need **25%** equity. Your flush hits on the river just ==r:19.6%== of the time (9 outs ÷ 46 unseen cards). 19.6% is less than 25%, so the immediate price says ==r:fold.==
- **Now the implied odds:** x = (call ÷ hit%) − (pot + call) = (50 ÷ 0.196) − (150 + 50) = 255 − 200 = ==g:about $55.== That's the extra you must win on the river when your flush lands.

So the question isn't "should I call $50?" It's "**when a heart hits, can I win at least $55 more?**" Against a deep opponent who'll pay off a river bet with top pair or a set, that's easy — you call. Against someone with $40 left behind, or on a board where a fourth heart kills their action, you can't — so you fold.

:::note
Same $50 call, opposite decisions — and the cards never changed. What changed is how much money is left to win. That's implied odds in one sentence.
:::

---

## How Much Do You Need? Implied Odds by Draw Type

**As a rule of thumb, the harder your draw is to hit — and the more obvious it is when it lands — the deeper the stacks need to be before a call is profitable.** Below is a practical field guide. Treat the stack multiples as ==r:heuristics, not laws== — they bake in the reality that you won't always get paid and won't always win when you hit.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Draw | Outs | Hit % (1 card) | Stacks behind needed |
|:---|:---:|:---:|:---:|
| Flush draw | 9 | 19.6% | ~8–10× the call |
| Open-ended straight | 8 | 17.4% | ~8–10× the call |
| Set (pocket pair) | 2→set | ~11.8% flop | ~15–20× the call |
| Gutshot straight | 4 | 8.7% | ~20×+ (rarely worth it) |

</div>

Two forces set the number. **Frequency:** a gutshot hits half as often as a flush draw, so it needs the payoff to be roughly twice as big to break even. **Disguise:** a hidden set gets paid far more than an obvious four-flush, because your opponent can't put you on it — which is why sets tolerate their low hit rate. The [nut flush draw is worth far more than a baby one](/en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") for the same reason: it gets paid *and* it doesn't lose when it hits.

---

## Set Mining: Small Pocket Pairs and Implied Odds

**You flop a set (or better) with a pocket pair just 11.8% of the time — about 7.5-to-1 against, or 1 in 8.5 — so set mining only profits when the stacks behind cover all the times you miss.** This is the purest implied-odds play in poker: you call a raise with a small pair for one reason only — to flop three of a kind and stack someone.

![A small pocket pair of fives beside a deep stack of chips on green felt — the setup for a set-mining call that only pays off when stacks are deep](/images/holdem-implied-odds-setmine.webp "Small pairs are gold with deep stacks behind — paying a little now to win a lot when you flop a set")

Because you miss ==r:seven times out of eight==, the math is brutal unless the payoff is huge. The common guideline is the **"5% rule": only call to set-mine if the effective stacks are at least 20× your call** (your call is ≤5% of the stack).

Here's the honest breakdown most articles skip:

- **The pure break-even is 7.5-to-1.** In a fantasy where you win your opponent's *entire* stack every time you flop a set, you'd only need about 7.5× behind.
- **Real life demands 15–20×.** You won't always get the whole stack, you'll sometimes flop a set and *still lose* (set-over-set, or they fill a bigger hand), and position matters. The extra cushion covers those leaks.
- So ==b:7.5-to-1 is the theoretical floor; 15–20× is the practical rule.== Don't confuse the two — using the 7.5 number as your real-table guide is a slow leak.

The exact flop-a-set math and every other "odds of flopping X" number live in [drawing odds](/en/blog/holdem-drawing-odds "thumb:/images/holdem-drawing-odds-hero.webp"); the takeaway here is that small pairs are gold when stacks are deep and trash when they're short — the pair didn't change, the implied odds did.

---

## Reverse Implied Odds: When Hitting Your Draw Still Loses

**Reverse implied odds are the chips you *lose* when you complete your hand but it's still second best.** Implied odds are the money you win when you hit; reverse implied odds are the money you bleed when you hit *and lose anyway*. Ignore them and you'll fall in love with draws that are quietly traps.

:::compare
Implied odds | Reverse implied odds
Money you ==g:win== on later streets when you hit | Money you ==r:lose== on later streets when you hit but it's second-best
Rewards draws to the nuts | Punishes weak, dominated draws
Raises a draw's value | Lowers a draw's value
:::

Three classic reverse-implied spots:

- **The baby flush.** You hold ==b:7♦ 6♦== and the board brings a third diamond. You make your flush — and pay off a stack to the guy holding ==b:A♦== for the nut flush. Your "winning" card cost you money.
- **The dummy end of a straight.** You hold ==b:6♦ 5♦== on ==b:9♥ 8♣ 2♠==, and a 7 on the turn makes your 5-6-7-8-9. But it's the *low* end — anyone holding J-10 now has 7-8-9-10-==g:J==, a higher straight, and the very card you needed pays them off.
- **The dominated top pair.** You pair your king with a weak kicker and keep calling — straight into someone's A-K.

The lesson: a draw to the ==g:nuts== is worth far more than the same draw to a second-best hand, even though they have identical outs. When your draw isn't to the nuts, shade your implied odds *down* — some of your "outs" are actually paying off your opponent.

---

## When NOT to Rely on Implied Odds (Common Mistakes)

**The moment your opponent is all-in, your implied odds are exactly zero — there is no more money to win, so you're back to pure pot odds.** This is the single most abused concept in poker: "I had implied odds" is the excuse players reach for after a call that was never justified.

Watch for these leaks:

:::card
🚫 | Villain is all-in | No future streets means no future money. Implied odds = 0. Use pot odds only
📉 | Short stacks behind | If there's only half a pot left to win, "I'll get paid on the river" is a fantasy
🙅 | A "no-pay" opponent | A nit who only bets the nuts won't pay off your flush. Your implied odds live and die on their willingness to call
🃏 | A scary board | If the card that completes your draw also freezes the action (four to a flush, paired board), nobody pays you
🎣 | Assuming stacks off | "It might get there and they might stack off" is two guesses stacked on a fold. Estimate conservatively
:::

I lost more chips to imaginary implied odds than to any bad beat. The fix is a single honest question before you call a draw that misses the price: ==b:"When I hit, who is actually paying me, and how much?"== If you can't name the money, it isn't there.

---

:::readnext[Keep reading]
/en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
/en/blog/holdem-drawing-odds | Odds of Flopping a Set, Flush & More | /images/holdem-drawing-odds-hero.webp
:::

## FAQ

**Q. What are implied odds in poker?**

A. Implied odds are the extra chips you expect to win on later streets if your draw completes, added to the chips already in the pot. They let you profitably call some draws that pot odds alone say to fold — as long as the stacks are deep enough to pay you off when you hit.

**Q. How do you calculate implied odds?**

A. Use: extra needed = (your call ÷ your hit chance) − the current pot. Calling $50 with a flush draw that hits 19.6% of the time means 50 ÷ 0.196 = $255, minus the $200 already in play (the $150 pot plus your $50 call) = about $55. If you can realistically win $55 more when you hit, the call is profitable. Note it's always an estimate, since future betting isn't guaranteed.

**Q. What is the difference between pot odds and implied odds?**

A. Pot odds count only the money in the pot right now and can be calculated exactly. Implied odds add the money you expect to win on later streets, which is an estimate. Pot odds tell you if a call pays for itself today; implied odds tell you if it pays off across the whole hand.

**Q. What are reverse implied odds?**

A. Reverse implied odds are the chips you lose when you complete your draw but it's still second best — like making a low flush against a higher one, or the low end of a straight against a bigger one. They make non-nut draws worth less than their outs suggest, so you need a better immediate price to call.

**Q. What are good implied odds — how much do you need?**

A. It depends on your draw. Flush and open-ended straight draws need roughly 8–10× the call behind in stacks; set mining needs about 15–20× (the "5% rule"). The harder the draw is to hit, the deeper the stacks must be to justify the call.

**Q. Do implied odds apply when your opponent is all-in?**

A. No. When your opponent is all-in there are no more betting rounds, so there's no additional money to win — your implied odds are zero. In that spot you must rely on pot odds alone. Assuming implied odds against an all-in is a common and costly mistake.

**Q. How do implied odds work in set mining?**

A. You flop a set with a pocket pair only 11.8% of the time (about 7.5-to-1 against), so you need a big payoff on the times you hit. The theoretical break-even is roughly 7.5× your call in stacks, but the practical guideline is 15–20× — the extra cushion covers the times you miss, get no action, or lose with a set.

**Q. Do you have implied odds with a flush draw?**

A. Usually yes, because a completed flush often gets paid — but only if it's a strong flush and stacks are deep. A nut flush draw has excellent implied odds; a baby flush draw carries reverse implied odds, since you can complete it and still lose to a higher flush.

**Q. Why are implied odds better in deep-stacked cash games?**

A. Implied odds are all about the money left to win, and deep stacks mean more of it. In a deep cash game a small pair or suited connector can win a full stack when it hits, so speculative hands go up in value. In short-stacked or tournament spots there's less to win, so those same hands lose value.

---

## The 3 Things to Remember

1. **The formula:** extra needed = (call ÷ hit%) − (current pot + call). If you can realistically win more than that later, the call is good even when pot odds say fold.
2. **The reality check:** implied odds are an estimate that lives on deep stacks and a paying opponent. Against an all-in or a short stack, they're zero — fall back on pot odds.
3. **The dark mirror:** reverse implied odds punish non-nut draws. A draw to the nuts is worth far more than the same draw to second best.

Get this right and you stop torching chips on hopeful calls while still making the profitable ones nobody else dares to. From here, lock in the raw numbers with the [poker odds and probability chart](/en/blog/holdem-probability), or see exactly how often each draw lands in [drawing odds](/en/blog/holdem-drawing-odds).

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-probability" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Odds & Probability Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Every hand, flop, and draw — the numbers behind the call</div>
  </a>
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The immediate price — where implied odds start</div>
  </a>
  <a href="/en/blog/holdem-drawing-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds & Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Drawing Odds & Odds of Flopping X</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">How often a set, flush, or straight actually lands</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which speculative hands are worth drawing with</div>
  </a>
</div>
`.trim(),
};

export default POST;
