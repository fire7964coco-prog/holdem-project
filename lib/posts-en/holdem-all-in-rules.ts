import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Texas Hold'em All-In Rules: Side Pots, Re-Raises & Showdown",
  seoTitle: "Went All-In and Confused? — Hold'em All-In Rules & Side Pots",
  desc: "Shoved all your chips and not sure what you can win? Texas Hold'em all-in rules — table stakes, side pots, re-raise eligibility, and showdown order.",
  tldr: "Going all-in means betting every chip you have. You can only win what you matched from each opponent (the main pot). Extra bets from bigger stacks form a side pot that only the players who covered them can win. An all-in for less than a full raise does NOT reopen the betting for players who already acted.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-09-26",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "♠",
  tags: [
    "texas holdem all in rules",
    "poker all in rules",
    "side pot poker explained",
    "does all in reopen betting poker",
    "poker all in showdown rules",
  ],
  image: "/images/holdem-all-in-rules-hero.webp",
  imageAlt: "Texas Hold'em all-in — player pushes all chips into center as dealer separates main pot and side pot on green felt",
  content: `
You're short-stacked. You shove. The player behind calls. A third player re-raises. The dealer starts separating chips into two piles.

You have no idea what's happening.

I've been at that table. The first time I went all-in at a live cash game, I didn't know whether I could still win anything, whether the other player could re-raise, or even which pile of chips was mine. Nobody explained it.

==This guide covers every situation: main pots, side pots, re-raise eligibility, and showdown order.== No more freezing when the dealer starts counting stacks. (If the basic betting flow is still fuzzy, the [beginner's rules guide](/en/blog/texas-holdem-rules-for-beginners "thumb:/images/rules-texas-holdem.webp") covers it first.)

## What Does "All-In" Mean in Texas Hold'em?

Going all-in means betting every chip you have in front of you. Once you commit, you cannot add more chips — and you cannot be forced to fold.

The foundation is the **table stakes rule**: you can only bet the chips you had on the table at the start of the hand. You cannot reach into your pocket for extra money, borrow from a friend, or add a watch or car keys — that's movie poker.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|------|---------|
| Push / Shove / Jam | Slang for going all-in |
| Table stakes | You can only bet what you had at hand start |
| Double up | Win an all-in and double your stack |
| Main pot | The pot everyone — including the all-in player — can win |
| Side pot | Chips only bigger stacks can win; the player who went all-in for less is excluded |

</div>

==g:Once you're all-in and called, you are guaranteed to see all remaining community cards.== Nobody can bluff you off the hand. Your cards stay live through the river.

---

## How to Declare All-In

Two valid ways:

**1. Verbal declaration** — Say "all-in" clearly so the dealer and opponents hear you. This is the safest method. Once you say it, you are committed.

**2. Push all chips forward** — Slide your entire stack toward the center in one clean motion. Pushing chips forward in pieces can look like a string bet, so move everything at once. ==r:Pushing alone is not always enough: if you are facing a bet and every one of your chips is needed just to call it, a silent push is ruled a call, not an all-in (TDA 2024 Rule 45-A, WSOP Tournament Rule 92).== Any other time, pushing your last chips **is** an all-in bet (TDA 2024 Rule 45-B) — the one exception is a single oversized last chip pushed silently into a bet, which is only a call (TDA 2024 Rule 44).

![Texas Hold'em all-in showdown — a K♠ 10♣ 7♦ 4♥ 2♣ board with chips separated into a labeled main pot and side pot](/images/holdem-all-in-declare.webp)

==r:Never push a single oversized chip forward silently — facing a bet, the dealer counts it as a call (with no bet pending, as just that chip's value), never your full stack.== Always declare "all-in" out loud — it is the one method that never gets re-read as something else.

---

## How Do Side Pots Work in Poker? (Why the All-In Player Gets Capped)

The all-in player can only win their own bet plus a matching amount from each other player still in the pot. Chips bet beyond that go into a **side pot** that belongs exclusively to the players who funded it — but only if two or more players put them in. If just one player is above the cap, there is nobody to contest a side pot and the excess comes straight back to them as an uncalled bet.

![Texas Hold'em all-in side pot — dealer separating chips into main pot and side pot as Player A is capped](/images/holdem-all-in-side-pot.webp)

### 3-Player Example (Standard)

| Player | Stack | Action |
|--------|-------|--------|
| Player A | 100 chips | All-in |
| Player B | 300 chips | Calls 100, then bets 50 more |
| Player C | 300 chips | Calls 100, then calls 50 |

**Main pot:** 100 × 3 = **300 chips** (A, B, C all eligible)

**Side pot:** 50 × 2 = **100 chips** (only B and C eligible)

==Player A can win the 300-chip main pot at showdown. But even if A has the best hand overall, A cannot touch the 100-chip side pot.== B or C will win it.

### 4-Player Multi-Stack Example

This is where it gets complicated — and where most beginners get lost.

| Player | Stack | Goes all-in for |
|:---|:---:|:---:|
| A | 100 | 100 |
| B | 200 | 200 |
| C | 500 | 500 |
| D | 500 | calls all |

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Pot | Amount | Eligible players |
|:---|:---:|:---|
| Main pot | 100 × 4 = **400** | A, B, C, D |
| Side pot 1 | 100 × 3 = **300** | B, C, D (A is capped) |
| Side pot 2 | 300 × 2 = **600** | C, D (A and B capped) |
| **Total** | **1,300** | — |

</div>

The rule: ==each side pot is built by taking the difference up to the next-smallest stack × the number of players who match it.== Work from smallest stack to largest.

---

## Does Going All-In Reopen the Betting? — The Rule Most Players Get Wrong

==r:This is the single most disputed all-in rule at live tables — I've watched two players argue about it for five minutes while the whole table waited. Both were wrong.==

**The rule:** If a player goes all-in for **less than a [full raise](/en/blog/holdem-betting-actions)**, that all-in does NOT reopen the betting for players who have already acted in that round.

![Poker re-raise rule after all-in — a short all-in of less than a full raise, so Player A, who has already acted, can only call or fold](/images/holdem-all-in-reraise-rule.webp)

**Example:**

Blinds $1/$2. Four players see the flop.

1. Player A bets $10.
2. Player B goes all-in for **$14** (only $4 more than A's $10 bet — not a full raise, which would need at least $20).

What happens to Player A, and to Player C who hasn't acted yet?

- Player A already acted (bet $10) and now faces only an incomplete raise. Because B's all-in of $14 is **less than a full raise**, the action does NOT reopen for Player A. ==A can only call or fold — they cannot re-raise.==
- Player C has not yet acted — **Player C can still raise**. The reopening limit never touches a player who has not acted yet. Mind the size, though: if C raises, the minimum is a **total** of B's all-in plus the last full bet — $14 + $10 = **$24**, not the $20 that would have been a full raise over A (WSOP Live Action Rule 176). C can still move in for less than that: the minimum never binds a player who is going all-in (Live Action Rule 175).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in amount | Full raise? | Reopens betting? |
|--------------|-------------|-----------------|
| Less than a full raise | No | No — players who already acted can only call or fold |
| Full raise or more | Yes | Yes — all players can re-raise again |

</div>

Why does this exist? It protects players from being forced into larger raises by partial all-ins. A full raise signals real aggression — a short-stack all-in for scraps doesn't.

### Advanced Case: What If Multiple Players Go All-In Short?

This is the version that trips up even regulars. Multiple short all-ins can **add up** to a full raise — and if their combined increments reach the threshold, betting reopens for a player who already acted. ==r:The test is run player by player, not once for the table:== it reopens only for a player who, **when the action returns to them, is facing at least a full raise above what they have already put in** (==TDA 2024 Rule 47==).

This is the official TDA "re-opening the bet" rule, and most card rooms follow it.

**Example (Blinds $1/$2, on the flop):**

1. Player A bets $10.
2. Player B goes all-in for **$14** (+$4 increment — not a full raise alone)
3. Player C goes all-in for **$21** (+$7 increment — not a full raise alone)

Combined increments: $4 + $7 = **$11** — that meets the $10 minimum raise threshold.

**Result: betting REOPENS for Player A.** A put in $10 and now faces $21 — $11 more, at least a full raise — so A can fold, call, or re-raise, even though neither B nor C individually made a full raise. A player who had called B's $14 in between would face only $7 more when it came back around, and for them nothing reopens: call or fold.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| B's all-in | C's all-in | Combined increment | Reopens for A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — below $10 | ❌ No |
| $14 (+$4) | $21 (+$7) | $11 — meets $10 | ✅ Yes |
| $15 (+$5) | $24 (+$9) | $14 — meets $10 | ✅ Yes |

</div>

The minimum raise threshold is always the *last full valid bet or raise* — not any cumulative total.

### Quick Decision Guide — Does This All-In Reopen Betting?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Reopens for players who already acted? |
|---|---|
| Single all-in < full raise | ❌ No — call or fold only |
| Single all-in ≥ full raise | ✅ Yes — all can re-raise |
| Multiple short all-ins, combined < full raise | ❌ No |
| Multiple short all-ins, combined ≥ full raise | ✅ Yes — for each player who now faces at least a full raise above their own last action |
| Player who has NOT yet acted | ✅ The reopening limit never applies to them — they can still raise, as far as their own chips allow (and in a limit game, the house cap on raises — TDA 2024 Rule 48) |

</div>

---

## All-In Showdown Rules

When all betting is complete and a player is all-in, here is what happens at showdown:

1. **Cards are turned face-up.** In tournaments, all hands involved in the all-in are typically tabled once betting is complete. In no-limit cash games it depends on when the betting ended: if it ended before the river, the player who pushed all-in turns over first (WSOP Live Action Rule 149); if the river was bet, the standard [last-aggressor showdown rule](/en/blog/holdem-showdown-rules) applies.
2. **Side pots are awarded first.** The dealer resolves the most recently created side pot first, then works backward to the main pot.
3. **Cards speak.** The best hand wins each pot they're eligible for — regardless of what players say they have.
4. **Multiple winners are possible.** Player A can win the main pot. Player B can win the side pot. Neither takes everything just because they won "their" pot.

==g:One player can win the main pot but lose the side pot. Both outcomes are valid.==

**Special case:** If one side pot has only one player left (everyone else folded), that player wins those chips back immediately — no showdown needed for that pot.

---

## What Happens If You Go All-In Wrong? — 5 Mistakes to Avoid

After enough all-in pots, you learn the chaos almost always comes from five specific misunderstandings — not the math, but who is eligible for which pot.

### Mistake 1: Thinking the all-in player can win the side pot
They cannot. Once the all-in player is capped, any additional chips bet by larger stacks belong to a pot the all-in player has no claim to.

### Mistake 2: Not knowing the re-raise eligibility rule
A partial all-in gives players who have **already acted** this round no second chance to re-raise — unless several short all-ins stack up so that one of them is facing at least a full raise when the action gets back around. Anyone still to act may raise, at the minimum total shown above. Knowing this cold stops arguments before they start.

### Mistake 3: Adding chips from your pocket mid-hand
Table stakes. What's on the table is all you can bet. If you're all-in for $80 and the pot is $400, you can only win $80 from each caller.

### Mistake 4: Mucking your hand too quickly
You're all-in for the main pot. Two other players battle it out for the side pot. In a tournament this resolves itself — once their betting ends, ==TDA 2024 Rule 16== has every hand tabled, yours included. In a cash game it doesn't: I once watched a short stack toss his cards the moment the side-pot showdown went against him — forgetting he wasn't even in that pot, and the main pot was still his to win. Once the dealer had swept them into the muck they were unidentifiable — dead, and the main pot went the other way. (A hand that can still be clearly identified may be retrieved at the floor's discretion, but never count on it.) Don't muck — your hand is still live for the main pot. ==Always wait for the dealer to resolve every pot before touching your cards.==

### Mistake 5: Going all-in out of frustration
The all-in is the most powerful move at the table. It forces opponents into all-or-nothing decisions. That power disappears when you shove randomly. Use it at the right moment — short stack pressure, value hands you want called, bluffs with real fold equity.

---

:::readnext[Keep reading]
/en/blog/texas-holdem-rules-for-beginners | Texas Hold'em Rules for Beginners | /images/rules-texas-holdem.webp
/en/blog/holdem-showdown-rules | Showdown Rules Explained | /images/holdem-showdown-rules-hero.webp
:::

## FAQ

**Q. Can you go all-in for less than the big blind?**

A. Yes. If you're sitting with fewer chips than the big blind, you are automatically all-in for whatever you have when the blinds come around. Other players still pay the full big blind — any amount above your contribution goes into a side pot.

**Q. What happens if you win the all-in but lose the side pot?**

A. You collect the main pot (what you matched from each player) and the other player collects the side pot. You each win the portion you were eligible for.

**Q. Does going all-in expose your hand?**

A. In tournaments, yes — once all betting is done with an all-in, all involved hands are typically tabled face-up. In live cash games, the standard showdown rules apply — last aggressor shows first, then others show or muck — unless it is a no-limit game and the betting ended before the river, in which case the player who went all-in turns over first (WSOP Live Action Rule 149).

**Q. Can you run it twice in a poker all-in?**

A. Running it twice (dealing the remaining community cards twice and splitting the pot) is allowed in many cash games if everyone still in the pot agrees after the all-in — not just two of you (WSOP Live Action Rule 210). It is generally not allowed in tournaments. The option must be agreed upon before the remaining community cards are run out.

**Q. What is the "table stakes" rule exactly?**

A. Table stakes means you can only wager chips that were in front of you when the hand started. You cannot add more money once a hand is in progress. This protects both players — you can never be forced to risk more than your stack, and whatever an opponent bets beyond your stack cannot cost you anything: it goes into a side pot or comes back as an uncalled bet.

**Q. If two players go all-in for different amounts, who shows first?**

A. The last all-in that was a bet or raise is the last aggressive action and shows first. An all-in that merely calls for less is not aggressive — in a cash game the original bettor still shows first, and the WSOP Live Action rules then go by pot: anyone in the side pot shows before the player who is all-in for only the main pot (Rule 149). ==r:In a tournament there is no show-first order here at all== — once the all-in betting is complete, every hand involved is turned face-up at the same time (TDA 2024 Rule 16); the rule that sets an order of show, TDA 2024 Rule 17, covers non all-in showdowns only. In cash games, if it was a called all-in with no further action, the caller can muck if they lose after seeing the all-in player's hand (in tournaments all involved hands stay face-up).

**Q. Are all-in rules different in tournaments vs. cash games?**

A. The core rules are the same, but there are two practical differences. First, in tournaments all hands involved in an all-in are tabled face-up as soon as all betting is complete (TDA 2024 Rule 16) — you cannot muck until showdown. In cash games, standard showdown order applies — unless it is a no-limit game and the betting ended before the river, when the all-in player turns over first (Live Action Rule 149) — and players can muck. Second, running it twice is common in cash games (if everyone still in the pot agrees) but is generally not permitted in tournaments.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Texas Hold'em Rules for Beginners</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Complete rules from blinds to showdown</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Split Pot and Chop Rules</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">When pots are chopped and why</div>
  </a>
  <a href="/en/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Showdown Rules</div>
    <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Who shows first and when you can muck</div>
  </a>
</div>
`.trim(),
};
