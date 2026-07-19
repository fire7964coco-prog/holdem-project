import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-position-play",
  title: "Position Strategy: In vs Out of Position",
  seoTitle: "Position Beats Cards — In vs Out of Position Poker Strategy",
  desc: "Two players, same cards, opposite results — the seat did it. In position vs out of position, why position matters, and opening ranges from UTG to the button.",
  tldr: "Being in position means you act last — you see every opponent's decision before spending a chip. Solver and database studies suggest in-position players realize roughly 85–100% of their equity, while out-of-position players capture only about 60–85%. That's why UTG opens ~13% of hands and the button ~43% — and why position rewrites every c-bet, bluff, and pot-control decision postflop.",
  category: "strategy",
  date: "2026-06-18",
  updated: "2026-07-19",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "🎯",
  image: "/images/holdem-position-play-hero.webp",
  imageAlt: "Top-down view of a professional poker table with 9 labeled positions and dealer button highlighting the button and cutoff seats as profit zones",
  tags: [
    "in position poker",
    "out of position poker",
    "poker position strategy",
    "under the gun poker",
    "why position matters in poker",
    "limp or raise UTG",
    "how to play out of position",
    "best position in poker",
  ],
  content: `
Last spring at my regular 1/2 game I played K♥Q♥ twice in the same session — once from the big blind, once from the button — and those two hands taught me more about position than any training video ever did.

From the big blind, I called a button raise and flopped top pair on Q♠8♦4♣. Acting first on every street, I check-called the flop, check-called the turn, and when a third barrel came on the river I stared at the felt and folded. Maybe he had it, maybe he didn't — ==r:out of position, I paid two streets to learn nothing.==

An hour later, same K♥Q♥, this time on the button. I raised, the big blind called and checked the J♠7♦3♣ flop. I checked behind. The turn Q♦ gave me top pair; he checked again, I bet, he called — and paid off my river bet with a worse hand. ==g:Same cards. Opposite seats. Opposite results.== That's position — the first of the [five decisions](/en/blog/holdem-strategy) that make up a winning Texas Hold'em strategy, and the one everything else is built on.

---

> **Quick answer**
> **In position (IP)** means you act last; **out of position (OOP)** means you act first. Solver and database studies suggest IP players realize roughly ==g:**85–100% of their equity**== while OOP players capture only about ==r:60–85%== — a gap that comes from information, not cards. It's why UTG opens ~13% of hands, the button ~43%, and why every c-bet, bluff, and pot-control decision changes with your seat.

---

## What Does "In Position" Mean in Poker?

Being **in position** means you act **after** your opponent on the flop, turn, and river — you get to watch them check, bet, or give up before you commit a single chip. Position is always measured relative to the **dealer button**: the closer you sit to the button's right-hand side of the action, the later you act, and the button itself acts last on every postflop street, guaranteed.

Position is decided preflop and never changes during the hand. If you're on the button and the big blind calls your raise, you are IP for the entire hand. If you open from under the gun and the button calls, you're OOP on every street until showdown.

The nine seats fall into four broad zones:

| Zone | Seats (9-max) | Default posture |
|:---|:---|:---|
| Early | UTG, UTG+1, UTG+2 | Tightest ranges — OOP against most of the table |
| Middle | Lojack, Hijack | Widening as the field shrinks |
| Late | Cutoff, Button | Widest ranges — IP against almost everyone |
| Blinds | SB, BB | Forced bets, OOP against every non-blind seat postflop |

For every seat name, abbreviation, and the full 6-max vs 9-max table map, see the [poker seat names and table map guide](/en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp") — this article is about what to *do* with each seat.

---

## What Is "Out of Position" (OOP) — and Why Acting First Costs You

**Out of position** means you act **before** your opponent on postflop streets. Every decision you make hands them free information, and every decision they make arrives after yours — too late to help you.

Here's what acting first actually costs:

:::compare
Out of position (act first) | In position (act last)
Bet into the unknown — they may raise, call, or fold, and you find out after your money is in | See their check, bet, or fold before deciding anything
Can't take a free card — check, and they can bet you off your draw | Check behind whenever you want to see the next card free
Pot size runs away from you — you can't stop them betting when you want a cheap showdown | You decide whether the hand goes to another street
Your range gets read — check-calling lines are transparent over time | Your checks and bets stay ambiguous because they act blind
:::

Notice none of this involves cards. Two players can hold identical hands all night, and the one acting first will still make less money with them. That structural tax is what the rest of this guide teaches you to collect — or dodge.

---

## Why Is Position So Important in Poker Strategy?

Because position converts the same cards into more money. The cleanest way to see it is **equity realization** — how much of your theoretical [pot equity](/en/blog/holdem-equity) you actually capture by the end of the hand.

| Situation | Equity realized (approx.) | Why |
|:---|:---:|:---|
| **In position** | ==g:**~85–100%**== | Act last → see everything → value-bet and bluff at the right moments |
| **Out of position** | ==r:~60–85%== | Act first → fold winners, pay off losers, surrender free cards |

These figures are approximate — solver outputs and database studies vary by stack depth and matchup — but the direction is universal: ==**the in-position player systematically over-realizes, the out-of-position player systematically under-realizes.**==

![IP vs OOP comparison — Button (IP) acts last and realizes roughly 85–100% equity; UTG (OOP) acts first and realizes only about 60–85% equity](/images/holdem-position-play-ip-vs-oop.webp)

Take 8♥7♥ on a K♥4♠2♥ flop. In position, your flush draw plays beautifully: call a bet cheaply, take a free card when checked to, or bluff when they show weakness twice. Out of position, the same draw leaks: bet and face a raise, or check and watch them charge you the maximum — or worse, check and fold the very card that would have completed you. Same nine outs, very different price.

Over thousands of hands, that leak compounds into the single biggest difference between winning and losing players at the same skill level. ==g:Winning players don't just play good cards — they play good cards in good positions.==

---

## The Best Position in Poker — and the Worst

**The best position in poker is the button.** It's the only seat guaranteed to act ==**last on every postflop street**== — flop, turn, and river, no matter who raised preflop. That guarantee is why the button can profitably open ~43% of hands while UTG manages only ~13%: position, not card strength, funds the difference.

Here's the button edge in one concrete hand. You open A♦9♦ on the button, the big blind calls, and the flop comes **K♦7♠2♥** — a dry board that hits almost nobody. The big blind checks. You've completely missed, but that check just told you he probably has too. ==g:A bet here wins far more often than it loses==, and when he folds, ace-high took the pot without a showdown. Now reverse the seats: OOP with the same A♦9♦, you check, he bets, and you're folding the best hand some meaningful share of the time. Same cards; the seat did all the work.

The **cutoff** is second-best for one reason: only the button acts behind you, and when the button folds — which is often — you inherit last action for the rest of the hand.

**And the worst seat?** There are actually two answers, and it pays to keep them straight:

| Seat | Typical long-run result (database averages) | Why |
|:---|:---|:---|
| **Button** | Clearly positive — the most profitable seat in essentially every sample | Guaranteed last action postflop |
| **Cutoff** | Positive — second best | Only the button behind you |
| Hijack / Lojack | Small positive to around break-even | Moderate position, moderate ranges |
| UTG | Near break-even even for solid players | Tight range, OOP most hands |
| **Small blind** | Negative — the ==r:**structurally worst seat to play a hand from**== | First to act on every postflop street, half a blind already dead |
| **Big blind** | ==r:**The biggest raw bb/100 loser**== | Posts a full blind every orbit — even perfect play only shrinks the loss |

The distinction matters: the **big blind loses the most raw chips per 100 hands** simply because it's forced to put in a full blind every single orbit — no strategy makes a forced bet free. But the **small blind is the worst seat to actually play**, because you act first on every postflop street with no compensating discount worth the trouble. Exact bb/100 figures vary by stake and player pool, so treat any specific number as a typical database result rather than a law — the *ranking*, though, is remarkably consistent.

> **Live game tip:** At a 1/2 live game, players regularly limp the button because "I don't have a great hand." That's leaving the most valuable real estate in poker unused. On the button, open-raise or fold — the positional premium is too valuable to limp away.

---

## Under the Gun: What It Means and How to Play UTG

**Under the gun (UTG)** is the seat immediately left of the big blind — the first player to act preflop, with zero information about the eight hands behind. The name is the strategy: you're *under the gun*, under pressure, forced to commit first. (Postflop, note, the order changes: the blinds act first and the button last — UTG's curse is opening blind preflop and then usually playing OOP against late-position callers.)

Playing UTG well is mostly about restraint:

- **Open roughly the top ~13% of hands** — the core is strong pairs (TT+), AK/AQ, and the best suited broadways (AJs, KQs), rounded out by the medium pairs and top suited aces you add as you loosen. For the exact hand-by-hand grid, use the [starting hands chart](/en/blog/holdem-starting-hands-chart).
- **Fold the pretty-but-dominated stuff.** KJo and QJo look playable and quietly bleed chips from UTG — when they hit, someone behind often hits bigger.
- **Expect to play the hand OOP.** Whoever calls your UTG open probably has position on you for three streets, so your range needs to be strong enough to stand that tax.

> **The discipline test:** if folding AJo from UTG feels slightly wrong, you're probably playing it right. Feels tight, earns more.

---

## Is It Better to Limp or Raise UTG?

**Raise or fold — don't limp.** If a hand is strong enough to play from the worst preflop seat, it's strong enough to raise; if it isn't strong enough to raise, playing it OOP against multiple opponents for the rest of the hand is exactly the trap the seat sets for you.

The open limp fails on three counts from UTG:

1. **It invites the whole table in** at perfect pot odds, so you flop against four random hands OOP.
2. **It caps your perceived range** — observant players attack limpers relentlessly, and you'll face raises you can't comfortably continue against.
3. **It wins nothing preflop.** A raise can take the blinds outright; a limp never does.

There's a narrow exception in very passive live games — limping behind other limpers with small pairs and suited connectors to see a cheap multiway flop — but *open*-limping UTG is a leak in essentially every lineup. The full argument, including when limping behind is actually fine, is in the [limping guide](/en/blog/holdem-limping).

---

## Early Position vs Late Position Strategy (Stealing the Blinds)

Early position is where you defend; late position is where you attack. From UTG through UTG+2 the job is simple — tight range, big cards, no fancy plays. From the cutoff and button, the job changes entirely: you're no longer waiting for hands, ==g:you're harvesting dead money.==

**Blind stealing** is the core late-position move. When everyone folds to you in the CO or on the button, the raise isn't really about your cards — it's about the two forced bets sitting in the pot and the fact that both blinds must play the hand OOP if they defend:

- **Cutoff steal:** raise ~2.2–2.5× with a wide range when folded to — but stay aware the button still lurks behind you.
- **Button steal:** wider still — hands like K7s, Q9s, and A2o become profitable opens because both blinds are OOP against you forever.
- **Respect the resteal:** blinds who 3-bet aggressively cut into your steal profit; against them, tighten slightly and 4-bet your best candidates.

![A late-position player on the button pushing a raise forward while both blinds fold — a textbook blind steal](/images/holdem-position-play-blind-steal.webp "Stealing the blinds from the button when it folds around")

The asymmetry is the lesson: the same K7s that's a fine button steal is an instant early-position fold. The hand never changed — the number of players left to beat, and who acts first afterward, did.

---

## Opening Ranges by Position: The Strategy Chart

Every seat gets its own opening range because **the number of players still to act — and your postflop position against them — changes the risk of every hand**. Here is the standard 9-max baseline:

| Position | Open range (approx.) | Rationale |
|:---|:---:|:---|
| UTG | ~13% | Eight players behind, OOP most hands |
| UTG+1 | ~14% | Barely wider than UTG |
| UTG+2 | ~16% | Field starting to shrink |
| Lojack | ~17% | First true middle position |
| Hijack | ~20% | Steal opportunities begin |
| **Cutoff** | **~27%** | Only the button behind — prime steal seat |
| **Button** | ==g:**~43%**== | Guaranteed last action postflop — widest open |
| Small blind | ~40% (raise-or-fold) | Wide when folded to, but never flat |
| Big blind | Defends wide vs steals | Closing action + pot odds, not opens |

![9-handed poker table showing opening ranges widening from UTG (~13%, tight red) to the Button (~43%, wide green)](/images/holdem-position-play-opening-range.webp "Opening range by position — UTG opens ~13%, the button ~43%")

The working rule: ==**every step toward the button widens the range**== — a point or two per seat through early position, then big leaps at the cutoff (+7%) and button (+16%) where position becomes near-certain. Moving the other way, ==r:trim the weakest suited hands and offsuit broadways first.==

These percentages describe *range sizes* — which specific hands fill them (whether T9s opens here, whether K9o makes the cut there) is the job of the [starting hands chart by position](/en/blog/holdem-starting-hands-chart), which maps every hand to every seat.

---

## How to Play Out of Position (When You Can't Avoid It)

Most guides stop at "avoid playing OOP." Fine — but you're in the blinds twice every orbit, and sometimes your UTG open gets called by the button. Here's how to lose the least, and occasionally flip the script:

**1. Check-raise is your equalizer.** It's the one weapon OOP has that IP doesn't: because they expect to bet when checked to, ==g:a check-raise turns their positional autopilot against them.== Build the range honestly — strong hands (sets, two pair) plus draws with real equity (open-enders, flush draws) — so it's never all-bluff or all-value.

**2. Bet bigger when you do bet.** OOP bets need to end hands sooner. A larger sizing (think two-thirds to three-quarters pot rather than a third) denies the free cards and cheap floats that position would otherwise let your opponent take. Playing small-ball OOP just extends the hand — and every extra street favors the player acting last.

**3. Pot control means checking more, calling more, and folding earlier.** Medium-strength hands OOP want cheap showdowns. Check-call lines get there; bet-and-get-raised lines don't. And when the third barrel arrives and your hand hasn't improved, remember what marginal hands OOP actually are: ==r:bluff-catchers that under-realize.== Folding the river OOP more often than feels natural is usually correct.

**4. Lead (donk-bet) rarely and specifically.** Betting into the preflop raiser works only on boards that favor your range — low, connected flops that smash a blind-defend range and miss a raiser's. As a default line it's readable and exploitable; as a scalpel on the right boards, it's fine.

**5. Best of all: don't get there.** Flat-calling raises from the small blind, cold-calling in middle position with dominated hands, defending the big blind against early-position opens with junk — most OOP misery is self-inflicted at the preflop decision.

---

## How Does Position Affect C-Bet Frequency?

Massively. The continuation bet is fundamentally an information play, and information is exactly what position supplies:

| Situation | Typical solver c-bet frequency (flop) |
|---|---|
| **IP (BTN/CO vs blind defense)** | **~65–75%** of boards |
| OOP (3-bet pots from the blinds) | ~40–50% of boards |
| OOP raiser vs IP caller | ~30–45% — most selective |

In position, you can c-bet a wide range — including air and backdoor draws — because your opponent must respond without knowing your next move, and when called you still act last on the turn. Out of position, the same bet is riskier: a check-raise ends your bluff, and a call leaves you guessing first on every remaining street. That's why blindly c-betting 100% "because you raised preflop" burns money OOP.

The full sizing and board-texture framework is in the [continuation bet guide](/en/blog/holdem-continuation-bet).

---

## Small Blind Strategy: Why 3-Bet or Fold?

The small blind looks cheap — half a blind already in — and plays expensive: you're first to act on every postflop street against everyone. Modern strategy has converged on a blunt fix: ==**from the SB, 3-bet or fold — almost never flat-call.**==

Flat-calling from the SB puts you in a capped, transparent range, OOP, with the big blind still behind you and priced in to squeeze. Instead:

- **3-bet** your value hands and a layer of blocker bluffs (A5s, A4s are the classics).
- **Fold** everything that would have been a "cheap" call — the discount doesn't cover the positional tax.
- **Size up to ~4× the open** (vs ~3× when 3-betting IP): since you won't have a postflop edge, charge more preflop and end more hands right there.

For the mechanics of the blinds themselves — why they exist and how the forced bets shape the game — see the [small blind and big blind guide](/en/blog/holdem-blind-meaning).

---

## 6-Max vs Full Ring — and Tournaments vs Cash

**6-max compresses the map.** With three early seats removed, the first player to act in 6-max faces only five opponents — so ==**6-max UTG plays like full-ring lojack, opening around ~17%**== rather than full ring UTG's ~13%. Every other seat widens similarly, steals come more often, and 3-bets are more frequent overall. The most common leak when switching formats is carrying 9-max tightness into 6-max — you end up folded off the table.

**Tournaments keep the same mechanics with different stakes on each decision.** In cash games, positional edges compound calmly across hours and rebuys make leaks recoverable. In tournaments, shrinking stacks change the texture: below ~15 big blinds, play collapses toward push/fold where positional nuance matters less, while at 20–30 BB late-position stealing becomes the engine of survival — until bubble ICM makes some mathematically fine steals tournament suicide. The full comparison is in the [tournament vs cash game guide](/en/blog/holdem-tournament-vs-cash-game).

---

:::readnext[Keep reading]
/en/blog/holdem-positions | Poker Seat Names & Table Map | /images/holdem-positions-hero.webp
/en/blog/holdem-starting-hands-chart | Starting Hands Chart by Position | /images/holdem-starting-hands-chart-hero.webp
:::

## FAQ

**Q. What does out of position mean in poker?**

A. Out of position (OOP) means you must act before your opponent on the postflop streets — flop, turn, and river. You commit chips without knowing what they'll do, can't take free cards, and struggle to control the pot size. The blinds are OOP against every other seat (between the two, the small blind acts first — so the big blind actually has position on the small blind); the button is never OOP against anyone.

**Q. Who acts first — the small blind or the big blind?**

A. It depends on the street. *Preflop*, the small blind acts before the big blind, and the big blind acts last — they "close" the action. *Postflop* (flop, turn, and river), the small blind is first to act and the big blind acts right after, so once the cards are out the small blind always acts before the big blind. The button always acts last postflop, which is exactly why it's the most profitable seat.

**Q. Why does position matter so much in poker?**

A. Because acting last converts the same cards into more money. Solver and database studies suggest in-position players realize roughly 85–100% of their theoretical equity while out-of-position players capture only about 60–85% — the in-position player sees every opponent decision before making their own, so they value-bet, bluff, and fold at better moments with identical holdings.

**Q. What is the most profitable position in poker?**

A. The button. It's the only seat guaranteed to act last on every postflop street, which is why database studies consistently show it as the biggest winner at every table size — it can profitably open around 43% of hands, roughly triple what UTG can. The cutoff runs second, since only the button acts behind it.

**Q. What is the weakest position in poker?**

A. Two answers, depending on the question. The small blind is the structurally worst seat to play a hand from — first to act on every postflop street. The big blind loses the most raw chips per 100 hands, simply because it posts a full forced blind every orbit; even perfect play only reduces that loss. Among non-blind seats, UTG is weakest: first preflop, tightest range, usually OOP after the flop.

**Q. Is the small blind an early position?**

A. No — the small blind is a blind, not an "early position" seat. Early-position players (UTG and the seats beside it) open tight because the whole table acts behind them, but they still act *after* the blinds preflop. The small blind is actually the worst seat to play from: it posts half a blind and then acts first on every postflop street. Don't treat it like early position — the modern default from the small blind is to 3-bet or fold.

**Q. Is it better to limp or raise from UTG?**

A. Raise or fold — don't open-limp. A hand strong enough to play from the worst preflop seat is strong enough to raise; limping invites multiway pots you'll play out of position, caps your perceived range, and never wins the blinds outright. The rare exception is limping behind existing limpers in passive live games with small pairs and suited connectors.

**Q. How wide should I open from UTG vs the button?**

A. From UTG in a full ring game, open roughly the top ~13% of hands — strong pairs, AK/AQ, and the best suited broadways. From the button, around ~43% is profitable because guaranteed last action compensates for weaker cards. In 6-max, UTG widens to about ~17%, playing like a full-ring lojack.

**Q. How does position affect c-bet frequency?**

A. In position (button or cutoff), solvers c-bet roughly 65–75% of flops — you act last on every later street, so wide betting including air is safe. Out of position that drops to roughly 30–50%, because a check-raise can end your bluff and a call leaves you guessing first on the turn and river. C-betting the same frequency OOP as IP is one of the most common and costly leaks.

**Q. Should you always 3-bet from the small blind?**

A. When you enter the pot, mostly yes — the modern default from the SB is 3-bet or fold, not flat-call. Flat-calling creates a capped, out-of-position range that the big blind can squeeze. 3-bet your strong hands plus blocker bluffs like A5s/A4s, size up to about 4× the open (vs 3× in position), and fold the rest.

---

## The Takeaways

1. **Position = equity realization.** ==g:In position, studies suggest you capture roughly 85–100% of your equity==; ==r:out of position, only about 60–85%==. The gap comes from acting last, not from better cards.
2. **Ranges slide with position.** UTG opens ~13%, the button ==g:~43%== — and every seat between gets a step on the ladder. ==r:Playing button hands from UTG bleeds chips.==
3. **The button is the best seat; the blinds are the worst.** The BB loses the most raw chips (forced bet); the SB is the worst seat to actually play (first to act every street). Protect your button, and 3-bet-or-fold your small blind.
4. **OOP isn't hopeless — it's disciplined.** Check-raise as your equalizer, size up when betting, control pots with medium hands, and fold rivers more than feels natural.
5. **Raise or fold under the gun.** Open-limping UTG combines the worst seat with the weakest line.
6. **6-max compresses the map.** 6-max UTG plays like full-ring lojack (~17%) — recalibrate when you switch formats.

For every seat name and the full table map, see the [poker seat names and positions guide](/en/blog/holdem-positions). For which exact hands fill each range, use the [starting hands chart by position](/en/blog/holdem-starting-hands-chart). And for why the "discounted" seats cost you the most, the [small blind and big blind guide](/en/blog/holdem-blind-meaning) covers the forced-bet math in detail.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Seat Names & Table Map</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — every seat explained</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Starting Hands</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart by Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which hands to play from each seat — printable reference chart</div>
  </a>
  <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Blinds</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Small Blind & Big Blind Strategy</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why the discounted seats are the hardest to profit from</div>
  </a>
  <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tournament vs Cash Game Strategy</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">How position decisions change when ICM applies</div>
  </a>
</div>
`.trim(),
};
