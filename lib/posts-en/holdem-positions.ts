import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-positions",
  title: "Poker Table Positions Explained: UTG to Button, 6-Max and 9-Max",
  seoTitle: "Same Hand, Folded from UTG, Raised on Button — Poker Positions Explained",
  desc: "You raised JJ from UTG and got stacked; two hands later you raised JJ from the button and took the pot. Here's every poker position name, the 6-max vs 9-max seat map, opening ranges, and what to do from each seat — so position is never a blind spot again.",
  tldr: "Position is when you act relative to the dealer button. The Button acts last on every postflop street and can open ~40% of hands; UTG acts first and should open only ~12%. Every seat between them gets a sliding range.",
  category: "초보 가이드",
  date: "2026-06-13",
  updated: "2026-06-13",
  keepImagesInBody: true,
  readTime: "14 min",
  emoji: "🎯",
  image: "/images/holdem-positions-hero.webp",
  imageAlt: "Top-down view of a professional poker table showing 9 player positions with chip stacks and a gold dealer button",
  tags: [
    "poker positions explained",
    "UTG poker",
    "button position poker",
    "hijack cutoff poker",
    "6 max positions",
    "early middle late position poker",
    "what does UTG mean in poker",
    "poker seat names",
  ],
  content: `
My first live cash game, I was seated in what I'd later learn was UTG. I looked down at J♥ J♠ and raised. The hijack called. The cutoff called. The button called. The big blind 3-bet. I had no idea what to do — I called and bled chips across three streets.

Two orbits later I was on the button with the same J♥ J♠. I raised. Everyone folded. I won $14 without ever seeing a flop.

Same hand. Completely different result. The only thing that changed was my seat.

---

> **Quick answer**
> Your **position** is where you sit relative to the dealer button — it determines **when you act** on every street. The Button (BTN) acts last on every postflop street: maximum information, maximum profit. Under the Gun (UTG) acts first: minimum information, minimum leeway. Every seat between them gets a sliding range from tight to wide.

---

## What Position Actually Means in Poker

"Position" isn't about your physical chair — it's about **the order in which you commit chips relative to everyone else**. Act early and you're guessing into the dark. Act last and you've watched every opponent move before spending a single chip. The later you act, the more information you hold, and in poker, information is money.

One number puts it in perspective: the Button earns approximately **8 big blinds per 100 hands more than UTG**, purely from acting last — before any edge from card selection is added.

---

## The 9-Max Seat Map

At a full nine-handed table, positions run clockwise from the dealer button. Preflop the action starts with UTG (left of the big blind). Postflop it restarts with the small blind.

| Seat | Abbr | Zone | Preflop | Postflop |
|------|------|------|---------|----------|
| Under the Gun | **UTG** | Early | 1st (first) | 3rd |
| Under the Gun +1 | **UTG+1** | Early | 2nd | 4th |
| Under the Gun +2 | **UTG+2** | Early | 3rd | 5th |
| Lojack | **LJ** | Middle | 4th | 6th |
| Hijack | **HJ** | Middle | 5th | 7th |
| Cutoff | **CO** | Late | 6th | 8th |
| Button | **BTN** | Late | 7th | **Last** |
| Small Blind | **SB** | Blind | 8th | **1st** |
| Big Blind | **BB** | Blind | 9th (last) | 2nd |

> **Live table note:** the button is a physical disc that moves one seat clockwise each hand. "UTG" is whoever sits two left of the button at that moment — not a fixed chair.

---

## The 3 Zones — and the Blinds

### Early Position: UTG, UTG+1, UTG+2

The three seats directly left of the big blind. You act **first preflop** — before anyone has shown strength or weakness — and you'll be out of position on most postflop streets.

The implication is mechanical: **play tight**. When you open-raise from UTG and get four callers, those players all have position on you for three streets. Hands that look playable anywhere else become a slow chip leak here.

**Opening range: ~12%** — premium pairs (JJ+), strong suited aces (AKs–AJs), offsuit broadway (AKo, AQo), suited broadways (KQs). That's roughly the top one in eight hands.

> **The UTG mistake:** raising K♥ 9♥ because it looks nice. In late position it's profitable; from UTG you face six players who can all dominate it before the flop even arrives. The hand has to be *good enough to play out of position against multiple opponents*.

---

### Middle Position: Lojack (LJ) and Hijack (HJ)

Two to three seats to the right of the button. More of the field has already folded, so you face fewer opponents and have better postflop position than UTG. You can afford to widen.

**Lojack opening range: ~16%** — add medium pairs (77–88), suited connectors (T9s, 98s), broadway hands (AJo, KQo).

**Hijack opening range: ~20%** — add weaker suited aces (A5s–A2s), more suited connectors (76s, 65s), offsuit broadway (KJo, QJo).

The hijack is sometimes called the "seat where position theft begins" — you're late enough to steal when the early seats fold, but early enough that you still need the field to cooperate.

---

### Late Position: Cutoff (CO) and Button (BTN)

The two most profitable seats at any poker table.

**Cutoff (CO)** sits one seat right of the button — "cutting off" the dealer's positional advantage. Only one player (the button) has postflop position on you. You can play wide and attack every time the field folds to you.

**Opening range: ~28%** — small pairs (22–44), suited connectors down to 54s, weak suited aces, most offsuit broadway.

**Button (BTN)** is the money seat. You act **last on every postflop street** — flop, turn, and river — every single hand. You always see what everyone does before deciding anything.

**Opening range: ~40%** — any pair, most suited hands, all broadway combos, suited connectors down to 32s.

| Position | Zone | Opens | Key Edge |
|----------|------|-------|----------|
| UTG–UTG+2 | Early | ~12% | Must be strong enough to play vs 6 players |
| LJ–HJ | Middle | 16–20% | Widen as field shrinks |
| CO | Late | ~28% | Only BTN has position postflop |
| BTN | Late | ~40% | Acts last every postflop street |
| SB | Blind | ~35% vs folds | Best preflop range, worst postflop spot |
| BB | Blind | Defend ~40% | Pot odds; acts last preflop |

> **Live cash game note:** at a $1/$2 holdem pub game with 100BB stacks, the button is the ideal seat for three-street value — you always know if opponents are weak before deciding whether to fire.

---

### The Blinds: Special Category

The blinds are forced bets in specific seats — for the full mechanics, see the [small blind and big blind guide](/en/blog/holdem-blind-meaning). Their postflop position is the trickiest in the game.

**Small blind** acts late preflop (second-to-last) but **first postflop** — the worst structural spot at the table. The correct default is raise-or-fold; flat-calling from the SB and playing out of position for three streets is a steady chip leak.

**Big blind** acts last preflop and second postflop. It gets a discount to call raises (one full bet already committed), which is why "big blind defense" — calling wider based on pot odds — is a real strategic concept with its own math.

---

## 6-Max vs 9-Max: Same Seats, Fewer Chairs

At a six-handed (6-max) table, three early seats simply don't exist. The seat map collapses:

| 9-Max | 6-Max | Note |
|-------|-------|------|
| UTG | UTG | First to act — still early, but facing only 5 players |
| UTG+1 | — | Doesn't exist |
| UTG+2 | — | Doesn't exist |
| Lojack | — | Doesn't exist in most formats |
| Hijack | HJ | Becomes the second seat |
| Cutoff | CO | Third seat — already late |
| Button | BTN | Still last postflop |
| SB | SB | Same role |
| BB | BB | Same role |

The strategic consequence: **6-max UTG plays like 9-max Hijack**. You face only five opponents instead of eight, so even UTG can open ~18–20% of hands — far wider than 9-max UTG's ~12%. If you switch between live 9-max and online 6-max, recalibrate your ranges before the session.

---

## Why the Button Is the Best Position in Poker

Every strategic advantage in poker reduces to information. The button has more of it than any other seat, and here's a concrete moment where it shows:

**Board: K♦ 7♠ 2♥** — a dry flop that hits very few hands.

You're **on the button** holding A♦ 9♦ — a complete miss. The small blind checks. The big blind checks. The UTG player who called preflop checks too.

Three checks. You now know: nobody connected with this board. A bet wins the pot far more often than it loses. You fire. They fold.

Now flip it: **you're UTG with the same A♦ 9♦.** You act before everyone. You check. The button bets into you. Now you're calling with air against a player who just watched you check weakness. You fold — the button wins without having a better hand.

This plays out dozens of times per session. Over a year, the gap between BTN and UTG is worth thousands of chips in a live game, entirely from acting last.

---

## What to Actually Do from Each Seat

Here is the one-line practical guide for each position when the action folds around to you:

| Seat | The default play |
|------|-----------------|
| UTG | Open only premium hands; fold anything marginal without hesitation |
| UTG+1 | Nearly identical to UTG; a small step wider on suited connectors |
| UTG+2 | Start adding medium pairs and suited aces |
| Lojack | Solid open range; 3-bet bluff if UTG has opened very tight |
| Hijack | Steal when early seats fold; attack limpers aggressively |
| Cutoff | Raise wide when it folds to you; pressure the blinds every time |
| Button | When it folds to you, raise ~40% of hands; **never limp the button** |
| Small Blind | Raise-or-fold; do not call — you act first on every postflop street |
| Big Blind | Defend wider using pot odds; 3-bet bluff against late-position steals |

---

## Position Locks In Before the Flop — and Never Changes

One thing beginners miss: **postflop position is set at the start of the hand and does not change.** If you're on the button, you act last on the flop, turn, and river — regardless of who bet or raised preflop. The small blind always acts first postflop, every street, even if they 3-bet preflop.

This is the core reason "playing in position" is so powerful. When you call a raise from the button, you carry the positional advantage across three streets. When you call from the big blind, you're out of position for all three. That gap compounds.

---

## FAQ

**Q. What does UTG mean in poker?**

A. UTG stands for "Under the Gun" — the player immediately left of the big blind who is forced to act first preflop with no information about any other player's hand. It is the most difficult seat at the table and requires the tightest opening range (~12% of hands). The name comes from the pressure of acting without any data: you're "under the gun."

**Q. Why is the button the best position in poker?**

A. The button acts last on every postflop street (flop, turn, and river), seeing every opponent's action before committing chips. This information advantage is worth roughly 8 big blinds per 100 hands compared to UTG, and allows an opening range of ~40% versus UTG's ~12%. No other seat has this guarantee of acting last across all three streets.

**Q. What is the difference between the hijack and the cutoff?**

A. The hijack is two seats right of the button; the cutoff is one seat right. Both are late positions, but the cutoff is stronger because only the button has position on you postflop. From the hijack you still have both the cutoff and button behind you, so it plays slightly tighter (~20% vs ~28% opening range).

**Q. What is the lojack in poker?**

A. The lojack is three seats to the right of the button — the first true middle position in a 9-max game. In 6-max, it effectively doesn't exist; the seat map skips from UTG straight to hijack. It's named in contrast to the "hijack" to its left: the hi-jack "hi-jacks" the dealer's advantage; the lo-jack is one step lower in the pecking order.

**Q. How many positions are there in 6-max poker?**

A. Six: UTG, Hijack, Cutoff, Button, Small Blind, and Big Blind. The UTG+1, UTG+2, and Lojack from 9-max are removed because there simply aren't enough seats. The result is that 6-max UTG opens ~18–20% of hands — much wider than 9-max UTG's ~12% — because you only face five opponents instead of eight.

**Q. Can you play the same starting hands from every position?**

A. No — this is one of the most common beginner leaks. The same hand that's profitable from the button can be a net loser from UTG, because position determines how many players can have stronger hands behind you *and* whether you'll have the information edge postflop. Playing a fixed range from every seat bleeds chips steadily.

**Q. What does "playing in position" mean in poker?**

A. Being "in position" means you act *after* your opponent on the current street, so you see their action before committing chips. "Out of position" means acting before them. Being in position for all postflop streets — by calling from the button rather than the blinds, for example — is a structural edge that persists across the entire hand.

**Q. Does position change during a hand?**

A. No. Postflop position is fixed at the beginning of the hand and never changes. Whoever is in the blinds acts first on every postflop street, and whoever is closest to the button acts last — regardless of who bet, raised, or 3-bet preflop. This is why calling in position preflop is always preferable to calling out of position, even with the same hand.

---

## The Takeaways

1. **Position = when you act.** Later is always better because you see more before spending chips — the button earns ~8 BB/100 more than UTG for this reason alone.
2. **Ranges slide with position:** BTN ~40%, CO ~28%, HJ ~20%, LJ ~16%, UTG ~12%. Use the same hand in the wrong seat and it's a loser.
3. **6-max compresses the map** — UTG in 6-max plays like a middle seat in 9-max. Adjust your ranges when the format changes.
4. **Postflop position is locked in for the whole hand** — the positional edge you gain preflop by calling in position compounds across flop, turn, and river.

New to the game? The [beginner's guide to Texas Hold'em rules](/en/blog/texas-holdem-rules-for-beginners) covers how a hand works from start to finish, and [the order of play](/en/blog/holdem-game-order) shows exactly when each seat acts across all four streets. For the forced bets posted by the two seats left of the button, the [small blind and big blind guide](/en/blog/holdem-blind-meaning) explains why they exist and how to play them well.
`.trim(),
};
