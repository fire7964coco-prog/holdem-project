import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-rake",
  title: "What Is Rake in Poker? How the House Gets Paid — and How Much You Really Pay",
  seoTitle: "The Fee Quietly Eating Your Winnings — What Is Poker Rake?",
  desc: "Rake is the fee the house takes from every cash-game pot. Here's how pot rake, time charges, and tournament fees work, how much you actually pay per session, and what rakeback gives back.",
  tldr: "Rake is the small cut the cardroom takes from each pot to host the game — usually 2.5–10% up to a cap of a few dollars. Most rooms take nothing if everyone folds before the flop ('no flop, no drop'). It hits low-stakes and short-handed players hardest, and rakeback returns a slice of it to regulars.",
  category: "strategy",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "11 min",
  emoji: "🏦",
  image: "/images/holdem-rake-hero.webp",
  imageAlt: "A dealer pulling a small stack of chips from the center pot into the rake drop slot on a green felt table",
  tags: ["rake", "what is a rake in poker", "poker rake explained", "rakeback", "poker rake cap", "time rake", "tournament rake", "how does rake work in poker"],
  content: `
It took me a depressing month of "break-even" sessions to figure out where my money was actually going. I wasn't losing to the other players — I was beating them, slightly. I was losing to the ==house's cut on every pot I won.== That quiet fee is called the **rake**, and until you understand it, you can be a winning player on paper and a losing one at the cashier.

Rake is how a cardroom makes money on a game where it doesn't play a single hand. Below is exactly what it is, every way it's collected, the honest math on ==g:how much you actually pay a session==, and how rakeback claws some of it back. It's the fee that decides whether beating small-stakes poker is even possible.

---

### Rake at a glance

:::stripe
2.5–10% | Typical pot rake range
$3–$6 | Common live rake cap
No flop, no drop | Usually no rake if all fold preflop
20–40% | Typical rakeback deal
:::

---

## What Is Rake in Poker?

**Rake is the commission a cardroom takes from a cash game for hosting it.** Because poker is played player-against-player — the house never bets — the rake is how the room, casino, or app actually earns its money. It's a service fee for the dealer, the table, the chips, and the security, skimmed a little at a time from the pots.

In a cash game it's usually taken straight from the pot: a small percentage of the money in the middle, dropped into a slot in the table before the winner is paid. In a tournament it works differently — the fee is baked into your buy-in up front (more on that below). Either way, the rake is separate from anything you win or lose to other players, which is exactly why it's so easy to overlook. This is one of the biggest practical differences between a [cash game and a tournament](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

---

## How Is Rake Taken? Pot Rake, Time Charge & Dead Drop

![A dealer sweeping a few chips from the center of the pot into the table's rake slot before pushing the rest to the winner](/images/holdem-rake-drop.webp "Pot rake: a small percentage skimmed from the pot and dropped before the winner is paid")

There isn't just one kind of rake. How the house collects its money depends on the stakes and the room, and the differences matter — here's the comparison no single competitor page lays out:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type | How it's taken | Typical amount | Where you'll see it |
|------|------|------|------|
| **Pot rake (scaled)** | % of each pot, up to a cap | 2.5–10%, capped $1–$6 | Most low/mid cash games, online |
| **Time charge** | Flat fee per player, every 30 min | ~$10–$15 per hour | High-stakes live ($10/$20+) |
| **Dead drop** | Button pays a set rake each hand | Fixed per hand | Some live rooms |
| **Tournament fee** | Added to the buy-in up front | ~5–20% of buy-in | Every tournament |

</div>

A few rules govern how pot rake is actually skimmed:

- **No flop, no drop.** In most rooms, if the hand ends before the flop — everyone folds to a preflop raise — the house takes **no rake** at all. (Not universal: a few sites, notably GGPoker, do rake some preflop pots, so check your room.)
- **The rake cap.** The house never takes the full percentage on a huge pot — it stops at a maximum, commonly **$3–$6 live** and **$1–$3 online**. Caps usually scale with the stakes and often shrink when fewer players are dealt in (a heads-up pot might be capped at $1).
- **Time charge instead of pot rake.** At higher stakes, rooms often stop raking pots and instead collect a flat fee — say $10–$15 an hour per player, taken every half-hour. This favors players who win big pots, since a $2,000 pot is no longer skimmed.
- **Dead drop.** A less common method where only the player on the button pays a set rake each hand, collected before the cards are dealt — designed so big-pot winners aren't taxed more than anyone else.

---

## How Much Rake Do You Actually Pay?

![A modest pot of chips on the felt with a couple of dollars already pulled aside as rake, showing how much a single hand quietly costs](/images/holdem-rake-lowstakes.webp "In low-stakes games the cap barely moves as pots grow, so small pots are proportionally raked the hardest")

Here's the part that changed how I think about the game. The percentage sounds tiny — 5%, capped at a few bucks — but you pay it on nearly every pot you win, for hours.

**A live $1/$2 game.** With 10% rake capped at $5 and roughly 30 hands dealt an hour, most contested pots hit or near the cap. A single busy table can pay **$100+ an hour** into the drop between all the players. That money comes straight out of the collective winnings — it's the reason a table full of roughly even players slowly bleeds chips to the house.

**The low-stakes "rake trap."** This is the punchline every beginner should hear. Because the cap barely rises as you move down in stakes, the *lower* you play, the *bigger* a bite the rake takes proportionally. A worked example at online NL50 (illustrative, and it swings with how many hands you play):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Same player, same game | Rake paid | Result |
|------|------|------|
| Room with a **$2 cap** | ~5 bb/100 | +8 bb/100 win rate stays a **winner (+3)** |
| Room with a **$4 cap** | ~8–9 bb/100 | +8 bb/100 turns into a **loser (−1)** |

</div>

Same skill, same edge over the field — and the rake alone is the difference between winning and losing. That's why serious low-stakes grinders obsess over rake structure and why [pot odds](/en/blog/holdem-pot-odds) and win rate always have to be read *after* the house takes its cut.

---

## What Is Rakeback?

Since the house profits from the volume you generate, most rooms give some of it back to keep you playing. **Rakeback is a percentage of the rake you personally pay, returned to you** — usually through points, cashback, or a loyalty program, paid out weekly or monthly. A 30% rakeback deal simply means you get back 30 cents of every dollar you rake.

There are two ways it's calculated:

:::compare
Contributed | Dealt
Based on the rake from pots **you put money into** — the standard modern method | Split evenly among **everyone dealt into** the raked pot, whether they contributed or not — now rare
:::

For a casual player, rakeback is a minor perk. For a high-volume regular it's enormous: the difference between a 20% and a 40% deal can be worth **tens of thousands a year**, and for many break-even grinders, rakeback *is* their profit. It effectively lowers your true rake, so it's worth checking before you pick where to play. Just be aware that much of the rakeback advice online is affiliate-driven — treat "sign up here" pages with the skepticism you'd give any sales pitch.

---

## Do Tournaments Have Rake?

Not the pot kind — but you still pay a fee, and it's hiding in plain sight. A tournament buy-in is split into two parts, shown with a **"+" sign**:

:::pull
A **$100 + $9** tournament means $100 goes into the prize pool and **$9 is the house's fee.**
:::

That fee — also called the **juice** or **vig** — is the tournament equivalent of rake. It's usually **5–20% of the buy-in**, and it's flat: you pay it whether you bust first or win the whole thing. Lower buy-ins carry proportionally higher fees (a $3 + $0.30 sit-and-go is 10%), and a common rule of thumb is that fast **turbo formats should be under ~13% fee** to stay beatable long-term. Since a tournament's structure is entirely different from a cash game's, the way you pay to play is too — a distinction worth understanding alongside the [tournament vs cash game](/en/blog/holdem-tournament-vs-cash-game) fundamentals.

---

## Online vs Live Rake: Which Is Higher?

It's a genuine trade-off, and the answer surprises people:

- **Live rake** tends to be a **higher percentage (often 10%) with a higher cap ($4–$6)** — but you only play ~30 hands an hour, so you pay it fewer times.
- **Online rake** is usually a **lower percentage (3–5%) with a smaller cap ($1–$3)** — but you might see 250+ hands an hour across multiple tables, so a volume grinder can pay *more* rake per hour than a live player despite the lower rate.

The lesson: never judge rake by the percentage alone. What matters is the percentage **times how often you pay it.** A "cheap" 5% online game you four-table can cost you more than a "pricey" 10% live game — which is exactly why rakeback and table selection matter more online.

---

:::readnext[Keep reading]
/en/blog/holdem-straddle | What Is a Straddle in Poker? | /images/holdem-straddle-hero.webp
/en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp
:::

## FAQ

**Q. What is a rake in poker?**

A. Rake is the fee a cardroom takes from a cash game for hosting it — normally a small percentage of each pot (2.5–10%) up to a capped maximum. Because the house doesn't play, the rake is its main source of revenue. Tournaments charge an equivalent fee built into the buy-in instead.

**Q. How is rake calculated?**

A. In most cash games it's a percentage of the pot, dropped before the winner is paid, up to a cap of a few dollars. The percentage and cap vary by room and stakes, and the cap often shrinks when fewer players are dealt in. At higher stakes, rooms may charge a flat time fee per player instead.

**Q. Do you pay rake if everyone folds before the flop?**

A. Usually not. Most rooms follow "no flop, no drop" — if the hand ends preflop, no rake is taken. It isn't universal, though: a few sites (notably GGPoker) rake some preflop pots, so it's worth confirming your room's rule.

**Q. How much rake is taken in a live $1/$2 game?**

A. Commonly 10% of the pot capped at around $5. Most contested pots reach the cap, so a single busy table can drop $100 or more per hour collectively. That fee is why a table of evenly matched players slowly loses chips to the house over time.

**Q. What is rakeback?**

A. Rakeback returns a percentage of the rake you personally pay — often 20–40% — through points, cashback, or a loyalty program. It effectively lowers your true rake. For casual players it's a small perk; for high-volume regulars it can be the difference between a losing and a winning year.

**Q. Do poker tournaments have rake?**

A. Yes, but not from the pot. The fee is added to your buy-in and shown with a "+" — a $100 + $9 tournament sends $100 to the prize pool and $9 to the house. That fee (the "juice" or "vig") is typically 5–20% of the buy-in and is paid regardless of how you finish.

**Q. How does rake affect your win rate?**

A. Significantly — especially at low stakes and short-handed, where the cap doesn't scale down with the stakes. Rake can turn a small winner into a loser: the same +8 bb/100 player can end up slightly negative simply by moving to a room with a higher rake cap. Always measure your win rate after rake.

**Q. Is online or live poker rake higher?**

A. Live rake is a higher percentage with a higher cap, but you play far fewer hands per hour. Online rake is lower percentage with a smaller cap, but multi-tabling means you pay it on many more hands — so a volume grinder can pay more rake per hour online. Judge rake by rate times frequency, not rate alone.

---

## The 3 Things to Remember

1. **Rake is the house's cut for hosting the game** — usually 2.5–10% of each pot up to a small cap, and it's separate from what you win or lose to opponents.
2. **It hits low stakes hardest.** The cap barely moves as you drop down, so proportionally you pay the most rake at the bottom — the "rake trap" that makes micro-stakes so hard to beat.
3. **Rakeback and structure matter.** Getting 20–40% of your rake back, and choosing rooms with player-friendly caps, can flip your long-term result — measure everything *after* the rake.

Now that you can see the house's cut, the numbers you read everywhere else make more sense: your [pot odds](/en/blog/holdem-pot-odds), your win rate, and why a [straddle](/en/blog/holdem-straddle) that bloats the pot also quietly feeds the rake. Poker is beatable — but only once you're beating the other players by *more* than the house takes.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tournament vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why the two charge you completely differently</div>
  </a>
  <a href="/en/blog/holdem-straddle" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossary</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Is a Straddle?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The extra blind that bloats the pot — and the rake</div>
  </a>
  <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Odds &amp; Math</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How to Calculate Pot Odds</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Read your pot after the house takes its cut</div>
  </a>
  <a href="/en/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Poker Tournaments Work</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Where the buy-in fee really goes</div>
  </a>
</div>
`.trim(),
};

export default POST;
