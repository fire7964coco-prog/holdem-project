import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-all-in-rules",
  title: "Texas Hold'em All-In Rules: Side Pots, Re-Raises & Showdown",
  seoTitle: "Went All-In and Confused? — Hold'em All-In Rules & Side Pots",
  desc: "Shoved all your chips and not sure what you can win? Texas Hold'em all-in rules — table stakes, side pots, re-raise eligibility, and showdown order.",
  tldr: "Going all-in means betting every chip you have. You can only win what you matched from each opponent (the main pot). Extra bets from bigger stacks form a side pot you cannot win. An all-in for less than a full raise does NOT reopen the betting for players who already acted.",
  category: "rules",
  date: "2026-06-15",
  updated: "2026-07-17",
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
| Side pot | Chips only bigger stacks can win; the all-in player is excluded |

</div>

==g:Once you're all-in, you are guaranteed to see all remaining community cards.== Nobody can bluff you off the hand. Your cards stay live through the river.

---

## How to Declare All-In

Two valid ways:

**1. Verbal declaration** — Say "all-in" clearly so the dealer and opponents hear you. This is the safest method. Once you say it, you are committed.

**2. Push all chips forward** — Slide your entire stack toward the center in one clean motion. Pushing chips forward in pieces can look like a string bet, so move everything at once.

![Texas Hold'em all-in showdown — a K♠ 10♣ 7♦ 4♥ 2♣ board with chips separated into a labeled main pot and side pot](/images/holdem-all-in-declare.webp)

==r:Never push a single chip forward without saying anything — the dealer counts it as just that chip's value, not your full stack.== Always declare "all-in" out loud, or move your entire stack at once.

---

## How Do Side Pots Work in Poker? (Why the All-In Player Gets Capped)

The all-in player can only win what they put in multiplied by the number of callers. Any chips bet beyond that form a **side pot** that belongs exclusively to the players who funded it.

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

![Poker re-raise rule after all-in — Player C goes all-in for less than a full raise, Player A can only call or fold](/images/holdem-all-in-reraise-rule.webp)

**Example:**

Blinds $1/$2. Four players see the flop.

1. Player A bets $10.
2. Player B goes all-in for **$14** (only $4 more than A's $10 bet — not a full raise, which would need at least $20).

What happens to Player A, and to Player C who hasn't acted yet?

- Player A already acted (bet $10) and now faces only an incomplete raise. Because B's all-in of $14 is **less than a full raise**, the action does NOT reopen for Player A. ==A can only call or fold — they cannot re-raise.==
- Player C has not yet acted — **Player C can still raise normally**.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| All-in amount | Full raise? | Reopens betting? |
|--------------|-------------|-----------------|
| Less than a full raise | No | No — players who already acted can only call or fold |
| Full raise or more | Yes | Yes — all players can re-raise again |

</div>

Why does this exist? It protects players from being forced into larger raises by partial all-ins. A full raise signals real aggression — a short-stack all-in for scraps doesn't.

### Advanced Case: What If Multiple Players Go All-In Short?

This is the version that trips up even regulars. Multiple short all-ins can **add up** to a full raise — and if their combined increments reach the threshold, betting reopens for players who already acted.

This is the official TDA "re-opening the bet" rule, and most card rooms follow it.

**Example (Blinds $1/$2, on the flop):**

1. Player A bets $10.
2. Player B goes all-in for **$14** (+$4 increment — not a full raise alone)
3. Player C goes all-in for **$21** (+$7 increment — not a full raise alone)

Combined increments: $4 + $7 = **$11** — that meets the $10 minimum raise threshold.

**Result: betting REOPENS for Player A.** A can fold, call, or re-raise, even though neither B nor C individually made a full raise.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| B's all-in | C's all-in | Combined increment | Reopens for A? |
|:---|:---:|:---|:---|
| $14 (+$4) | $18 (+$4) | $8 — below $10 | ❌ No |
| $14 (+$4) | $21 (+$7) | $11 — meets $10 | ✅ Yes |
| $15 (+$5) | $25 (+$10) | $15 — meets $10 | ✅ Yes |

</div>

The minimum raise threshold is always the *last full valid bet or raise* — not any cumulative total.

### Quick Decision Guide — Does This All-In Reopen Betting?

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Situation | Reopens for players who already acted? |
|---|---|
| Single all-in < full raise | ❌ No — call or fold only |
| Single all-in ≥ full raise | ✅ Yes — all can re-raise |
| Multiple short all-ins, combined < full raise | ❌ No |
| Multiple short all-ins, combined ≥ full raise | ✅ Yes |
| Player who has NOT yet acted | ✅ Always can raise (regardless) |

</div>

---

## All-In Showdown Rules

When all betting is complete and a player is all-in, here is what happens at showdown:

1. **Cards are turned face-up.** In tournaments, all hands involved in the all-in are typically tabled once betting is complete. In cash games, the standard [last-aggressor showdown rule](/en/blog/holdem-showdown-rules) applies first, then all-in players show.
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
A partial all-in from Player C does not give Player A a second chance to re-raise. Knowing this cold stops arguments before they start.

### Mistake 3: Adding chips from your pocket mid-hand
Table stakes. What's on the table is all you can bet. If you're all-in for $80 and the pot is $400, you can only win $80 from each caller.

### Mistake 4: Mucking your hand too quickly
You're all-in for the main pot. Two other players battle it out for the side pot. I once watched a short stack toss his cards the moment he lost the side-pot showdown — forgetting the main pot was still his to win. Those chips were gone the instant the cards hit the muck. Don't muck — your hand is still live for the main pot. ==Always wait for the dealer to resolve every pot before touching your cards.==

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

A. In tournaments, yes — once all betting is done with an all-in, all involved hands are typically tabled face-up. In live cash games, the standard showdown rules apply: last aggressor shows first, then others show or muck.

**Q. Can you run it twice in a poker all-in?**

A. Running it twice (dealing the remaining community cards twice and splitting the pot) is allowed in many cash games if both players agree after the all-in. It is generally not allowed in tournaments. The option must be agreed upon before the remaining community cards are run out.

**Q. What is the "table stakes" rule exactly?**

A. Table stakes means you can only wager chips that were in front of you when the hand started. You cannot add more money once a hand is in progress. This protects both players — you can never be forced to risk more than your stack, and opponents cannot suddenly bet more than you can cover.

**Q. If two players go all-in for different amounts, who shows first?**

A. The last all-in that was a bet or raise is the last aggressive action and shows first. An all-in that merely calls for less is not aggressive — the original bettor still shows first. In cash games, if it was a called all-in with no further action, the caller can muck if they lose after seeing the all-in player's hand (in tournaments all involved hands stay face-up).

**Q. Are all-in rules different in tournaments vs. cash games?**

A. The core rules are the same, but there are two practical differences. First, in tournaments all hands involved in an all-in are tabled face-up as soon as all betting is complete (TDA Rule 16) — you cannot muck until showdown. In cash games, standard showdown order applies and players can muck. Second, running it twice is common in cash games (if both players agree) but is generally not permitted in tournaments.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Rules for Beginners</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Complete rules from blinds to showdown</div>
  </a>
  <a href="/en/blog/holdem-split-pot-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Split Pot</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Split Pot and Chop Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">When pots are chopped and why</div>
  </a>
  <a href="/en/blog/holdem-showdown-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Showdown</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Showdown Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Who shows first and when you can muck</div>
  </a>
</div>
`.trim(),
};
