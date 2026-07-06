import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-3bet",
  title: "3-Betting in Poker: When to 3-Bet, How Much, and How to Face One",
  seoTitle: "The 3-Bet Guide That Shows the Math — When, How Much, vs What",
  desc: "What a 3-bet is and why it's called that, when to 3-bet for value or as a light bluff, the exact sizing math, and how to respond when someone 3-bets you.",
  tldr: "A 3-bet is the first re-raise before the flop — called a 3-bet because the big blind is the first bet, the open-raise the second, and your re-raise the third. Value-3-bet a tight core (QQ+, AK) plus a few suited blocker bluffs like A5s, size it around 3x the open in position and 4x out of position, and keep your overall 3-bet frequency near 6–10%. When you're the one facing a 3-bet, 4-bet your premiums, call the hands that play well, and fold the rest — folding more than 'balanced' against low-stakes players who never bluff.",
  category: "strategy",
  date: "2026-07-06",
  updated: "2026-07-06",
  keepImagesInBody: true,
  readTime: "16 min",
  emoji: "♦️",
  image: "/images/holdem-3bet-hero.webp",
  imageAlt: "A poker player sliding a stack of chips forward for a re-raise while the original raiser looks on, a preflop 3-bet confrontation on the green felt",
  tags: ["3 bet poker", "what is a 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "when to 3-bet", "squeeze play", "facing a 3-bet", "linear vs polarized range"],
  content: `
The hand that taught me what a 3-bet is really *for* went like this: a loose player opened, I looked down at A-K, and — like every beginner — I just called. The flop came ace-high, I got no money in, and he folded to a single bet. I'd turned the best hand into a tiny pot. A week later, same spot, I *re-raised* instead. He called with a worse ace, stacked off on an ace-high flop, and I won five times as much. Same cards. One decision — the 3-bet — was the whole difference.

A **3-bet** is one of the most powerful weapons in No-Limit Hold'em, and also one of the most misunderstood. Most guides give you half the picture: how to *make* a 3-bet, but not how much, not which hands are bluffs and why, not what to do when someone 3-bets *you*. This is the ==complete **3-bet playbook**== — definition, sizing with the math actually shown, value and light ranges, the squeeze, facing a 3-bet, and the mistakes that quietly cost you stacks. It's the [raise-or-fold](/en/blog/holdem-limping) principle from a winning [Texas Hold'em strategy](/en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp"), turned up a level.

---

### The 3-bet, by the numbers

:::stripe
3rd bet | Why it's called a "3-bet" (blind = bet 1)
~3x / ~4x | Sizing: in position vs out of position
6–10% | A healthy overall 3-bet frequency
QQ+, AK | The value core almost everyone agrees on
:::

---

## What Is a 3-Bet in Poker?

**A 3-bet is the first re-raise before the flop** — you re-raise a player who has already open-raised. If someone opens to 3 big blinds and you make it 9, that's a 3-bet.

So why is it called a *three*-bet when it's only the second raise? Because the name counts **bets in the sequence, not raises.** The big blind is a forced bet — that's ==bet one==. The open-raise is ==bet two==. Your re-raise is ==bet three== — the 3-bet. Follow the chain up and the rest of the vocabulary falls into place:

- **4-bet** — the re-raise *over* a 3-bet (the fourth bet). Very strong or polarized.
- **5-bet** — the re-raise over a 4-bet. At 100 big blinds this is usually all-in.
- **Cold 4-bet** — a 4-bet from someone who hadn't raised yet (e.g. UTG opens, you 3-bet, the button 4-bets "cold"). It screams strength.

That's the whole ladder. Everything else in this guide is about the first rung — when to climb it, how far, and what to do when someone climbs it on you. If the basic [betting actions](/en/blog/holdem-betting-actions) of check, call, and raise are still fuzzy, start there and come back.

---

## Why 3-Bet At All? What a 3-Bet Actually Does

Calling an open-raise (called **flatting**) keeps you in the pot, but a 3-bet does four things a flat can't:

1. **It wins the pot immediately, often.** A good chunk of the time, the raiser folds and you scoop the pot before the flop with no showdown. A flat never does this.
2. **It builds a big pot with your best hands.** When you hold aces or kings, flatting lets three other players in cheaply. 3-betting isolates the raiser and gets money in while you're a huge favorite.
3. **It seizes initiative and position leverage.** You become the aggressor with the betting lead on every street — and against a wide opener, that pressure prints money.
4. **It denies equity and information.** A raise charges opponents to continue instead of letting them see a cheap flop with a hand that might crack you.

The catch: because a 3-bet is powerful, doing it *wrong* is expensive. Too many players only ever 3-bet their monsters, which makes them completely readable. The rest of this guide is about doing it right.

---

## When Should You 3-Bet? Value Hands vs. Light Bluffs

![A dark, on-brand grid infographic splitting 3-bet hands into two columns — VALUE 3-BETS like pocket aces, kings, queens and ace-king, and LIGHT 3-BETS like suited wheel aces and suited connectors](/images/holdem-3bet-range-grid.webp "A healthy 3-bet range has two parts: a value core you want called, and a few suited blocker bluffs you're happy to fold to a 4-bet")

A winning 3-bet range has **two distinct parts**, and understanding the split is the single biggest leap in this topic.

**Value 3-bets** — hands you *want* called because you're ahead of what continues:
- **The core, almost always:** ==g:QQ+ and AK.==
- **Extend to** JJ, TT, AQs, and KQs when you're up against a wider, later-position open — and trim back toward the core against a tight early-position raiser.

**Light 3-bets (3-bet bluffs)** — hands you 3-bet *hoping* to fold them out, but that still have backup equity when called. The best candidates aren't random junk; they're chosen for **blockers** and **playability**:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Light 3-bet hand | Why it's a great bluff |
|:---|:---|
| **A5s–A2s** (suited wheel aces) | Your ace **blocks** their premiums — it drops their combos of AA from 6 to 3 and AK from 16 to 12 — so they're less likely to have a hand that continues. Plus it flops flushes, straights, and wheel draws. |
| **Suited connectors** (76s, 65s) | Terrific playability — they flop straights, flushes, and draws, so they win plenty even when the bluff gets called. |
| **Suited one-gappers** (T8s, 97s) | Same idea, slightly weaker: disguised, flexible, and cheap to fold if 4-bet. |

</div>

Here's the blocker logic in one sentence: **holding an ace makes it mathematically less likely your opponent holds aces or ace-king**, so A5s is a far better bluff than, say, A9o — which blocks the same premiums but plays terribly when called and just makes weak pairs. Backup equity matters because your opponent won't fold every time; you want a bluff that can still win the pot. That's why A5s ≈ 30% equity against a QQ+/AK calling range, while offsuit junk sits well below it. This is the same [starting-hand](/en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp") discipline as always — just applied to re-raising.

---

## Linear vs. Polarized 3-Bet Ranges

You'll see these two words everywhere in 3-bet strategy. They describe the *shape* of your range, and picking the right one is what separates thinking players from hand-chart robots.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| | Linear (merged) | Polarized |
|:---|:---|:---|
| **Shape** | One solid block of your best hands | Barbell: strongest value **+** bluffs, nothing in the middle |
| **Example** | QQ+, AK, AQs, JJ, TT, KQs | AA-KK + A5s-type bluffs; flat the QQ/AQ/TT middle |
| **Use it when** | The open is **wide and weak** (late position), or you're **in position** | The open is **strong/tight** (early position), or you're **in the blinds** |

</div>

The reason is simple: against a **wide, weak** open, hands like AQ and TT are genuinely ahead, so you 3-bet them for value in one merged block (**linear**). Against a **tight** open, those same middle hands are dominated and get "blasted off" by 4-bets, so you 3-bet only true value plus clean bluffs and *flat* the middle (**polarized**).

One honest nuance the hand-chart crowd misses: **position isn't the only factor.** The real question is *how likely you are to get blasted off your hand* — which also depends on opponent aggression, rake, and your sizing. Facing someone who calls a lot and rarely 4-bets, with a small size and low rake, lean **linear**. Facing a 4-bet-happy opponent with a big size and high rake, lean **polarized**. Read the spot, don't memorize a rule.

---

## How Much Should You 3-Bet? (Sizing, With the Math)

Most guides tell you "3x in position, 4x out of position" and move on. Here's the *why* and the actual arithmetic, using a standard open of **3 big blinds** (call it a $6 open at $1/$2):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Size | 3bb open becomes… | Why |
|:---|:---:|:---:|:---|
| **In position** (you'll act last) | ~3x the open | **9bb** ($18) | Position lets you win with a smaller size, so you risk less. |
| **Out of position** (you'll act first) | ~4–4.5x | **12–13.5bb** ($24–27) | Bigger charges them more to see a flop and denies your positional disadvantage a cheap ride. |
| **Squeeze** (open + a caller) | OOP size **+ ~1x per caller** | **~14–15bb** ($30) | Extra dead money and an extra player to push out. |
| **Isolating a limper** | 3bb **+ 1bb per limper** (add 1 more live) | ~4–5bb | Punish the limp, discourage overcalls, still get called wide. |

</div>

The math is deliberately visible because it's where beginners leak: **3 × 3bb = 9bb** in position, **4 × 3bb = 12bb** out of position. Two rules that override the multipliers:

- **Never 3-bet tiny out of position.** A small OOP 3-bet lays your opponent a great price to call and outplay you with position — the exact thing you're trying to avoid. Use the full 4x+.
- **Sizing isn't a law.** Size *down* against players who over-fold (you're bluffing cheaper) and size *up* and go pure-value against calling stations who never fold. Rake and stack depth shift it too.

In tournaments with shallow stacks, the whole calculus changes: at roughly **10–25 big blinds**, many hands become a **3-bet all-in (a "shove")** rather than a small re-raise, because there isn't room to raise-and-fold. Stop min-3-betting and start jamming as you get short.

---

## 3-Bet, Flat, or Fold? A Decision Table

Facing an open, you have three choices, not two. This is the map most articles never draw — when a hand prefers a 3-bet, a flat (call), or the muck:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Your hand | In position (e.g. button vs a steal) | Out of position (e.g. in the blinds) |
|:---|:---|:---|
| **Premiums** (QQ+, AK) | 3-bet for value | 3-bet for value |
| **Strong** (JJ-TT, AQ, KQs) | 3-bet vs wide opens; flat vs tight | Mostly 3-bet or fold — flatting OOP is weak |
| **Speculative** (small pairs, suited connectors) | Flat to set-mine / see cheap flops | 3-bet as a bluff, or fold |
| **Blocker bluffs** (A5s-A2s) | 3-bet as a light raise | 3-bet as a light raise |
| **Everything else** | Fold | Fold |

</div>

The big takeaway: **flatting is legitimate in position** — modern solvers keep a healthy flatting range on the button because you can profitably see flops with the betting closed behind you. Out of position it's weaker, but with one important split: from the **small blind**, prefer a polarized *3-bet or fold*, since calling wide OOP realizes your equity poorly and builds a weak, cappable range. The **big blind** is the exception — because you close the action and are already getting a price, you defend by *calling* far wider there, especially against late-position steals. Position, again, changes everything — the same lesson as the [position playbook](/en/blog/holdem-position-play).

---

## The Squeeze Play: 3-Betting a Raiser *and* a Caller

![Chips and community-card setup on green felt with several stacks pushed in, representing a multiway pot where a squeeze 3-bet can pick up dead money](/images/holdem-button-dealer-board.webp "A squeeze punishes an open-raiser and a flat-caller at once — the extra dead money makes even a light 3-bet profitable")

A **squeeze play** is a 3-bet made after there's already been an open-raise *and* at least one caller. It's called a squeeze because you put both opponents in a vice: the original raiser now has to worry about the caller behind, and the caller — who just showed a hand not strong enough to re-raise — rarely wants to continue against your aggression.

Two things make the squeeze special:
- **There's more dead money.** The pot already holds the raise and the call, so a successful squeeze wins more, meaning your bluffs need to work *less* often to profit.
- **Size it bigger.** Add roughly one extra open-raise for each caller. Against a 3bb open plus one caller, a squeeze to about **14–15bb** is standard — the extra size is what pushes both players out.

Good squeeze bluffs are the same suited blocker hands (A5s and friends) that make good 3-bet bluffs, because you still want to fold out the raiser's medium hands and have equity when called.

---

## Facing a 3-Bet: Do You Call, 4-Bet, or Fold?

![Players around a green-felt table reading each other after a preflop re-raise, weighing whether to call, 4-bet, or fold to a 3-bet](/images/holdem-pub-players-table.webp "The half of 3-betting nobody teaches: when someone re-raises you, most of your range should simply fold — especially against players who never bluff")

Here's the half of 3-betting that almost every article skips: **you'll be on the receiving end far more often than you 3-bet yourself.** When you open and get re-raised, you have three responses:

- **4-bet** — for value with your premiums (QQ+, AK), plus the occasional blocker bluff (an A5s-type hand). A 4-bet says "I'm not going anywhere."
- **Call** — with hands that flop well and have the equity or position to continue: pocket pairs looking to set-mine, suited broadways, and strong hands that don't want to bloat the pot into a 4-bet war.
- **Fold** — everything else. Most of your opening range should simply give up to a 3-bet; that's normal, not weakness.

How much should you continue? The theoretical baseline is **Minimum Defense Frequency (MDF)** — the share of your range you must continue so the 3-bettor can't profit by bluffing any two cards. It's ==pot ÷ (pot + bet)==, which against typical 3-bet sizes lands somewhere around **half your range** in a vacuum. But here's the exploit that wins money at real tables:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Villain's fold-to-3-bet stat | What it tells you | Your adjustment |
|:---:|:---|:---|
| **~35% (rarely folds)** | A calling station — their 3-bets and calls are value-heavy | 3-bet them **for value only**, stop bluffing, and value-bet relentlessly |
| **~55% (balanced)** | A thinking regular | Play close to GTO — mix value and blocker bluffs |
| **~70%+ (folds too much)** | An exploitable nit | 3-bet them **light far more often** — they hand you the pot |

</div>

MDF assumes a *balanced* opponent. At low stakes and in live games, players badly **under-bluff** their 3-bets — so when a passive player suddenly re-raises, believe them and **fold more than MDF says.** You don't owe a nit a "balanced" defense.

---

## A Real 3-Bet Hand, Start to Finish

Enough theory — here's a full hand with the numbers, so you can see the whole flow (§13-checked). $1/$2 cash, 100bb deep.

- **Preflop:** A loose cutoff opens to ==$6== (3bb). I'm on the button with ==A♠Q♠==. This is a clear **value 3-bet** against a wide late-position open, and I'm in position, so I make it ==$18== (3x). The blinds fold; the cutoff calls. Pot is $39.
- **Flop:** ==Q♦ 8♣ 4♥.== I flop **top pair, top kicker** — my A♠Q♠ makes a pair of queens with the best possible kicker (the ace). Best five cards: Q♠ Q♦ A♠ 8♣ 4♥ = one pair (queens) with the ace kicker. Against his range of worse queens, eights, and floats, I'm way ahead.
- **The point:** because I 3-bet preflop, the pot is already big and I have the betting lead, so I bet again for value and get paid by worse queens and draws. Had I just *flatted* preflop, three other players might have seen that flop, my hand would be far harder to play, and the pot would be a fraction of the size. The 3-bet is what turned top pair into a stack.

Now flip it: if I'd 3-bet a **light** hand like A5s there and the cutoff had **4-bet** to $55, I'd simply fold — the blocker bluff did its job by giving me a cheap, clean laydown. That's the discipline that makes light 3-betting profitable instead of spewy.

---

## The 6 Most Common 3-Betting Mistakes

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| The mistake | Why it costs you | The fix |
|:---|:---|:---|
| **3-betting too small OOP** | Lays a great price to call — they realize equity in position against you | Use the full 4x+ out of position |
| **Only ever 3-betting value** | You become face-up; good players fold everything but coolers | Add suited blocker bluffs (A5s) |
| **Never 3-bet bluffing at all** | Leaves money on the table vs wide steals; your flats get too weak | Balance value with a few light 3-bets |
| **3-betting merged vs a nit** | Your "value" is dominated by their premium-only range | Go polarized or just fold vs a true nit |
| **Bluff-3-betting junk (Q7o)** | No blockers, no equity — you must fold to every 4-bet | Pick blocker/playability hands only |
| **Flatting too much in the blinds** | Poor equity realization OOP; a weak, cappable range | Prefer a polarized 3-bet-or-fold |

</div>

Notice the thread running through all six: a good 3-bet has a *reason* — value you want called, or a bluff with blockers and backup equity. Random re-raising with no plan is how stacks disappear.

---

:::readnext[Keep reading]
/en/blog/holdem-strategy | The 5 Decisions Behind Winning Poker | /images/holdem-strategy-hero.webp
/en/blog/holdem-position-play | Why Position Wins You Pots | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. What is a 3-bet in poker?**

A. A 3-bet is the first re-raise before the flop — you re-raise a player who has already open-raised. For example, if someone opens to 3 big blinds and you make it 9, you've 3-bet. It's the main tool for building a pot with strong hands and for applying pressure to opponents who open too wide.

**Q. Why is it called a 3-bet?**

A. Because the name counts bets in the sequence, not raises. The big blind is a forced first bet, the open-raise is the second bet, and your re-raise is the third — the "3-bet." That's why it's called a three-bet even though it's technically only the second raise of the hand.

**Q. What is the difference between a 3-bet and a 4-bet?**

A. A 3-bet is the first re-raise (over an open-raise); a 4-bet is the next re-raise, made over a 3-bet. So the ladder goes: open-raise (2nd bet) → 3-bet (3rd bet) → 4-bet (4th bet) → 5-bet (usually all-in). A 4-bet represents a very strong, polarized range.

**Q. What hands should you 3-bet?**

A. Split your 3-bets into value and bluffs. The value core is QQ+ and AK, extending to JJ, TT, AQs, and KQs against wider opens. For bluffs, use suited hands with blockers and playability — A5s through A2s and suited connectors like 76s and 65s — not random offsuit junk.

**Q. When should you 3-bet vs. just call (flat)?**

A. 3-bet when you have a premium, when the opener is wide and weak, or when you're out of position and want to avoid a bad flat. Flatting is fine in position with speculative hands (small pairs, suited connectors) where you can see cheap flops with the button. Out of position, prefer 3-betting or folding over calling.

**Q. What is a light 3-bet?**

A. A light 3-bet (or 3-bet bluff) is re-raising with a hand you don't expect to be best, hoping to fold the opener out. The best light 3-bets have blockers and backup equity — suited wheel aces like A5s block your opponent's aces and ace-king while still flopping flushes and straights, so they win even when called.

**Q. What is the difference between a linear and a polarized 3-bet range?**

A. A linear (merged) range is one solid block of your best hands — used against wide, weak opens or when in position. A polarized range is your strongest hands plus bluffs, with the medium hands removed and flatted instead — used against tight opens or from the blinds, where medium hands get blasted off by 4-bets.

**Q. How much should you 3-bet?**

A. Around 3x the open in position and 4–4.5x out of position. So against a 3 big blind open, make it about 9bb in position or 12bb out of position. Add roughly one extra open-raise per caller when squeezing. Don't 3-bet small out of position — it gives your opponent a cheap, easy call in position.

**Q. What is a good 3-bet percentage?**

A. For a solid player, an overall 3-bet frequency around 6–10% is healthy, with about 8% typical for a good 6-max cash player. Under ~4% is too tight and face-up; over ~10% is usually too aggressive and gets you 4-bet and called too light. It's naturally higher from the blinds and button than against early-position opens.

**Q. What is a squeeze play?**

A. A squeeze is a 3-bet made after an open-raise and at least one caller. The extra dead money in the pot makes it profitable, and it pressures both opponents at once — the raiser and the capped flat-caller. Size squeezes bigger than a normal 3-bet, adding about one extra open-raise for each caller.

**Q. How do you respond to a 3-bet?**

A. You have three options: 4-bet your premiums (QQ+, AK) plus the occasional blocker bluff, call with hands that flop well and have equity or position (pairs, suited broadways), and fold everything else. Most of your opening range should fold to a 3-bet — that's normal. Against players who rarely bluff, fold even more.

**Q. What is a good fold-to-3-bet percentage?**

A. Around 55% is a reasonable, roughly balanced baseline — you continue with the top of your range and let the rest go. Folding much more than that makes you exploitable by light 3-bets; folding far less means you're calling or 4-betting too wide. Adjust to the opponent: fold more against players who never bluff-3-bet.

**Q. Should you 3-bet or 4-bet all-in with a short stack in a tournament?**

A. As stacks get short — roughly 10–25 big blinds — many hands play best as a 3-bet all-in (a shove) rather than a small re-raise, because there's no room to raise and then fold to a 4-bet. Shoving realizes all your fold equity at once. Stronger fields counter pure jamming with tiny 3-bets, so mix in small non-all-in 3-bets when you can.

---

## The 3-Bet Playbook, In Short

1. **A 3-bet is the first pre-flop re-raise** — third bet in the sequence, because the blind counts as bet one.
2. **Build two ranges:** a value core (QQ+, AK) you want called, and suited blocker bluffs (A5s and friends) chosen for blockers and playability.
3. **Size it ~3x in position, ~4x out** — and never small out of position.
4. **Match shape to spot:** linear vs wide/weak opens, polarized vs tight opens and from the blinds.
5. **Facing a 3-bet, most hands fold** — 4-bet premiums, call the playable ones, and fold more than "balanced" against opponents who never bluff.

Get 3-betting right and you stop being the player who just calls with aces and wins a tiny pot. Pair it with a disciplined [starting-hand range](/en/blog/holdem-starting-hands-chart), sharp [position](/en/blog/holdem-position-play) awareness, and the full [strategy framework](/en/blog/holdem-strategy), and your preflop game quietly moves ahead of the field.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">The 5 Decisions Framework</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Where 3-betting fits in a winning game</div>
  </a>
  <a href="/en/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Why Limping Costs You</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Raise or fold — don't just call</div>
  </a>
  <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Playing Your Position</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why 3-bets work better in position</div>
  </a>
  <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Starting Hands Chart</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Which hands are worth raising at all</div>
  </a>
</div>
`.trim(),
};

export default POST;
