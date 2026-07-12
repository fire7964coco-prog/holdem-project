import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-straddle",
  title: "What Is a Straddle in Poker? Rules, Types, and Whether You Should",
  seoTitle: "The Bet That Doubles the Stakes — What Is a Poker Straddle?",
  desc: "A straddle is a voluntary blind that doubles the stakes before cards are dealt. Here are the rules, every straddle type, who acts first, and whether straddling is actually profitable.",
  tldr: "A straddle is an optional blind bet — usually twice the big blind — posted before the cards are dealt. It buys the straddler the last action and the option to raise preflop, doubling the stakes. In almost every case it's a -EV play, allowed only in cash games under house rules.",
  category: "strategy",
  date: "2026-07-04",
  updated: "2026-07-04",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "💰",
  image: "/images/holdem-straddle-hero.webp",
  imageAlt: "An under-the-gun player posting an extra blind bet of two chips in front of the big blind before the cards are dealt",
  tags: ["straddle", "what is a straddle in poker", "poker straddle rules", "mississippi straddle", "button straddle", "sleeper straddle", "is straddling profitable", "utg straddle"],
  content: `
The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action two seats further along. I called it "the rich-guy bet" for about a month before I learned what it actually does: a straddle ==doubles the stakes and buys one player the last word==, all before anyone has looked at a card.

If you've seen a live game where an extra blind appears out of nowhere, this is the term you're looking for. Below is exactly what a **straddle** is, every type you'll run into, who acts first when one is posted, and the honest answer to the only question that matters: ==g:should you actually do it?==

---

### Straddle at a glance

:::stripe
2× BB | Standard straddle size
Last | The straddler's preflop action
Cash only | Almost never allowed in tournaments
-EV | The verdict for most players
:::

---

## What Is a Straddle in Poker?

**A straddle is a voluntary blind bet — normally twice the big blind — posted before the cards are dealt.** In a $1/$2 game the under-the-gun player (immediately left of the big blind) can drop $4 "on the straddle," and the game instantly plays like a $1/$2/$4 table for that hand.

Two things make it more than just extra money in the pot:

- It's a **live blind.** Exactly like the big blind, the straddler has bought the **option to raise** even if everyone just calls — a "third blind" with the right to act on it.
- It's posted **blind.** You straddle *before* looking at your cards (in most rooms, before they're even dealt). You're committing money with no information, which is the whole reason it's usually a bad idea — more on that below.

A straddle isn't a raise in the normal sense — it's a blind that resets the price. If you understand [what the small and big blinds are](/en/blog/holdem-blind-meaning "thumb:/images/holdem-blind-meaning-hero.webp"), a straddle is simply an optional *third* one that the player chooses to post to inflate the stakes and grab position.

---

## How a Straddle Works: Who Acts First and Last

![Infographic of a gold dealer button and two face-down hole cards behind a K♦ 7♣ 2♠ flop, where the button acts last postflop](/images/holdem-button-dealer-board.webp "A live UTG straddle turns the seat left of the big blind into a third blind — the straddler now acts last before the flop")

This is the part definition pages skip, and it's where new players get lost. A straddle **rearranges the preflop action order.** Walk through a standard $1/$2 game where UTG straddles to $4:

:::steps
UTG posts the straddle | The under-the-gun player puts out $4 (2× the $2 big blind) before cards are dealt
First to act = left of the straddler | Action now begins with the player to the straddler's left (UTG+1), not UTG — the straddle acts like a new big blind
Around the table | Everyone must call $4 (not $2) to play; they can fold, call, or raise as normal
Blinds decide | The small and big blinds act in turn, facing the $4 price
The straddler acts LAST | If no one raised, the straddler can check their option or raise — the last word before the flop
:::

That "last action preflop" is what the straddler is paying for. But note the catch: for a **UTG straddle, the last-action privilege is preflop only.** Once the flop comes, the betting order snaps back to normal — the small blind acts first, and the straddler is back in an early, out-of-position seat with a bloated pot. That single fact is why UTG straddling is so often a money-loser: you pay double to be last for one street, then play the next three streets out of position.

---

## Types of Straddle (UTG, Mississippi, Button & Sleeper)

![A straddle bet posted beside the dealer button, showing a button or Mississippi straddle that buys last position for the hand](/images/holdem-straddle-button.webp "A button (Mississippi) straddle posts from the button — the one straddle that buys last action postflop too")

Not all straddles are the same — and the differences are all about **where the action starts and how long you keep last position.** Here's the comparison no other page lays out in one place:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Type | Who posts it | Action starts | Last to act | Buys the option? |
|------|------|------|------|------|
| **UTG (standard)** | Under the gun | Left of straddler | Preflop only | Yes |
| **Mississippi** | Any seat (often button/CO) | Left of straddler | Pre + postflop* | Yes |
| **Button** | The button | Small blind | Pre + postflop | Yes |
| **Sleeper** | A non-UTG seat | Normal (UTG) | No | Usually no |
| **Re-straddle** | Left of a straddler | Left of re-straddler | Preflop only | Yes |

</div>

*Postflop last action applies when the Mississippi straddle is on or near the button.

- **UTG straddle** — the classic. Posted under the gun, last action preflop only. The most common and the weakest, positionally.
- **Mississippi straddle** — can be posted from **any position**, most powerfully from the button or cutoff. Action starts to the straddler's left, so a button Mississippi straddle buys **last action both preflop and postflop** — the one straddle with a real positional case. Not allowed everywhere.
- **Button straddle** — a Mississippi-style straddle specifically from the button; the button keeps last action all the way down. Exact flow (where the small blind fits) varies by room — confirm with the dealer.
- **Sleeper straddle** — a blind from a non-UTG seat that stays "asleep": it's **inactive unless the action folds all the way to it**, and in most rooms it does **not** buy position or the option to raise. Rare, and almost never seen online.
- **Re-straddle (double straddle)** — a player to the left can straddle *over* a straddle, for a minimum of double the previous one ($4 → $8 → $16). Whether it's allowed, and from which seats, is pure house rules.

⚠️ Every one of these is **house-rules dependent.** When in doubt, ask the floor before you toss chips out — the mechanics genuinely differ from room to room.

---

## How Much Is a Straddle?

The standard straddle is **exactly 2× the big blind** — $4 in a $1/$2 game, $10 in a $2/$5 game. That's the default in nearly every cardroom.

Some no-limit rooms allow more:

- **Uncapped / all-in straddle** — a few rooms let the straddler post any amount, up to their entire stack, as a blind bet. A large blind straddle can turn a small game into a very big one for a single hand.
- **Re-straddle progression** — where re-straddling is allowed, each one is at least double the last: $4, then $8, then $16, and so on. Games where the whole table straddles and re-straddles can balloon the effective stakes several times over.

If you're calling into a straddled pot, remember your [pot odds](/en/blog/holdem-pot-odds) are now measured against a bigger blind — the price to play every hand has doubled, which quietly punishes loose calling.

---

## Is Straddling Allowed in Tournaments?

**Almost never.** Straddling is a cash-game feature. Tournaments run on a fixed blind-level structure that has to stay identical at every table for fairness, and a voluntary extra blind would break that — so the overwhelming majority of tournaments, live and online, **prohibit straddling entirely.**

Even in cash games it's optional and house-rules dependent: some rooms allow only the UTG straddle, some permit Mississippi and button straddles, some cap the size, some ban re-straddles. Online, straddles are rare and, where offered, usually limited to a simple UTG button toggle. The difference between a cash-game bet like this and the rigid tournament format is a whole topic on its own — see [tournament vs cash game](/en/blog/holdem-tournament-vs-cash-game).

---

## Is Straddling Profitable? Should You Straddle?

![A large bloated pot of mixed chips piled in the middle of the felt, the inflated pot a straddle creates before anyone has seen a card](/images/holdem-straddle-bloated-pot.webp "A straddle doubles the blind and bloats the pot — money committed before a single card is seen")

The honest answer, and the one the solvers agree on: **for almost everyone, no.** GTO Wizard's analysis puts it bluntly — from an expected-value standpoint, straddling is a losing play. Three reasons:

:::card
🎯 | You commit blind | Money goes in before you see your cards, so you're playing a bloated pot with no information — the same disadvantage that makes the blinds the worst seats at the table
📉 | It shrinks your positional edge | Doubling the blind bloats the starting pot and leaves more players still to act when you're in your best stealing seats. Counterintuitively, solvers respond by opening **fewer** hands in straddled pots — around 15–20% fewer on the button — not more
💸 | It bloats the rake | Bigger pots mean more [rake](/en/blog/holdem-rake) skimmed out of them, a hidden tax on every straddled hand in a raked cash game
:::

So when *is* it defensible? Only in specific spots, and never as a pure profit play:

- **A loose-passive table** where opponents call the bigger blind with junk and play fit-or-fold after the flop — you can occasionally exploit that, ideally straddling from late position.
- **A game where everyone already straddles** — if the straddle is universal, you lose no *relative* position by joining in (though the table would all be better off not doing it).
- **Action / social games** where you're there for fun, not maximum EV — a perfectly valid reason, just be honest that it's costing you.

What straddling *won't* do is "create a loose image" that pays off — you're paying a real, measurable price for an image edge that rarely materializes. If your goal is winning, the play that actually builds an edge is [position](/en/blog/holdem-position-play), not an extra blind. Straddle for fun if you like; don't straddle to make money.

---

:::readnext[Keep reading]
/en/blog/holdem-blind-meaning | What Are the Blinds in Poker? | /images/holdem-blind-meaning-hero.webp
/en/blog/holdem-position-play | How Position Changes Everything | /images/holdem-position-play-hero.webp
:::

## FAQ

**Q. What is a straddle in poker?**

A. A straddle is a voluntary blind bet, usually twice the big blind, posted before the cards are dealt — most often by the player under the gun. It doubles the stakes for the hand and gives the straddler the option to raise and the last action preflop, just like a third blind.

**Q. How much is a straddle in poker?**

A. The standard straddle is 2× the big blind — $4 in a $1/$2 game. Some no-limit rooms allow larger or even uncapped (all-in) straddles, and where re-straddling is permitted each one must be at least double the previous straddle ($4, $8, $16, and so on).

**Q. Who acts first after a straddle?**

A. The player immediately to the left of the straddler acts first, because a live straddle works like a new big blind. Action then goes around the table, the small and big blinds act in turn, and the straddler acts last preflop — with the option to check or raise if no one raised before them.

**Q. Is a straddle considered a raise?**

A. No. A straddle is a blind bet, not a raise — it resets the price everyone must call to enter the pot, and it preserves the straddler's option to raise later. Whether it counts toward the raise cap in limit games is a house rule: many rooms don't count it, but some treat it as a raise for that purpose, so check locally.

**Q. What is a Mississippi straddle?**

A. A Mississippi straddle can be posted from any position, not just under the gun — commonly the button or cutoff. Action then starts to the straddler's left, so a button Mississippi straddle buys last action both preflop and postflop, which is why it's the one straddle with a genuine positional argument. It's not allowed in every room.

**Q. What is a sleeper straddle?**

A. A sleeper straddle is a blind posted from a non-UTG seat that stays inactive ("asleep") unless the action folds all the way around to it. In most rooms it doesn't buy the option to raise or grant position the way a live straddle does. It's uncommon and rarely offered online — always confirm the house rule.

**Q. Is straddling allowed in tournaments?**

A. Almost never. Tournaments rely on a fixed blind structure that must be identical across all tables, so a voluntary extra blind would break the format. Straddling is essentially a cash-game-only option, and even there it depends on the specific cardroom's house rules.

**Q. Is straddling profitable? Should you straddle?**

A. For most players, no — it's a -EV play. You commit money blind, you compress your stack-to-pot ratio (which means you should play fewer hands, not more), and you inflate the rake. It's defensible only at loose-passive tables, in games where everyone already straddles, or purely for fun — never as a way to make money.

---

## The 3 Things to Remember

1. **A straddle is an optional third blind, usually 2× the big blind,** posted before the cards — it doubles the stakes and buys the last action preflop.
2. **The type decides the position.** A UTG straddle is last preflop only; a Mississippi or button straddle keeps last action postflop too. Everything is house-rules dependent.
3. **It's -EV for almost everyone.** Committing blind, bloating the pot out of position, and feeding the rake outweigh the fun. Straddle for the table image or the entertainment, not the profit.

Now that you know the extra blind, tighten up the fundamentals it distorts: [what the blinds actually do](/en/blog/holdem-blind-meaning), [why position wins money](/en/blog/holdem-position-play), and [how betting actions and raises work](/en/blog/holdem-betting-actions) once the straddle resets the price.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Rules</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Are the Blinds in Poker?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The small and big blinds a straddle builds on</div>
  </a>
  <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">How Position Changes Everything</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why a straddle's position matters more than its size</div>
  </a>
  <a href="/en/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Rules</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Betting Actions: Check, Call, Raise</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">How the price resets after a straddle</div>
  </a>
  <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tournament vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why straddles are a cash-game-only thing</div>
  </a>
</div>
`.trim(),
};

export default POST;
