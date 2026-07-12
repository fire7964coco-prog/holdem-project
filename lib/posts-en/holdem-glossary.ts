import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-glossary",
  title: "Texas Hold'em Glossary: Every Poker Term You'll Hear at the Table",
  seoTitle: "From the Nuts to the Fish — The Texas Hold'em Glossary",
  desc: "Every poker term you'll hear at the table, explained simply and grouped by situation: betting, positions, hands, slang, and the terms people always mix up.",
  tldr: "This is a plain-English glossary of the poker terms that actually come up in a Texas Hold'em game, grouped by how you'll meet them — betting actions, positions, hands and board, player types, money, and table situations. Start with the 'most confused' terms below (check vs call, set vs trips, cooler vs bad beat), then browse by category. Terms with a deeper guide link straight to it.",
  category: "strategy",
  date: "2026-07-05",
  updated: "2026-07-05",
  keepImagesInBody: true,
  readTime: "12 min",
  emoji: "📖",
  image: "/images/holdem-glossary-hero.webp",
  imageAlt: "A Texas Hold'em table with chips, the dealer button, and community cards spread on green felt, representing the language of poker",
  tags: ["poker terms", "poker glossary", "texas holdem terms", "poker slang", "poker terminology", "poker vocabulary", "poker words", "what does it mean in poker"],
  content: `
The first time I sat in a live game, the table might as well have been speaking another language. Someone was "under the gun," another guy "three-bet the cutoff," the dealer asked if I wanted to "run it twice," and when I lost with kings I was told it "wasn't even a bad beat, just a [cooler](/en/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")." I nodded like I understood. I did not.

Poker has its own vocabulary, and knowing it does two things: it stops you looking like a [fish](/en/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp"), and it lets you actually follow the strategy that makes you money. This glossary collects the terms that genuinely come up at a Texas Hold'em table — grouped by ==g:how you'll actually run into them==, not just dumped in one giant A-to-Z wall. Start with the terms people mix up most, then browse whichever category you need. Where a term has a full guide, you'll find a link straight to it.

---

### The glossary, at a glance

:::stripe
6 | Categories, grouped by how you meet them
80+ | Terms defined in plain English
12 | "Most confused" pairs, sorted out first
→ | Deeper guides linked from key terms
:::

---

## The Terms People Mix Up Most

If you only clear up a dozen terms, make it these — they're the ones that cause the most confusion (and the most costly mistakes) at the table:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| These get mixed up | The difference |
|:---|:---|
| **Check vs Call** | A check risks **no chips** (only when no bet is live); a call **matches** an existing bet. |
| **Blind vs Ante** | Blinds are **positional** forced bets (SB/BB); antes are paid by **everyone** to seed the pot. |
| **Set vs Trips** | Both are three of a kind — a **set** uses a pocket pair; **trips** uses one hole card + a board pair. |
| **Cooler vs Bad Beat** | A [cooler](/en/blog/holdem-cooler) = you were behind and couldn't fold; a [bad beat](/en/blog/holdem-bad-beat) = you were ahead and got outdrawn. |
| **Value bet vs Bluff** | A value bet wants a **call from worse**; a bluff wants **better hands to fold**. |
| **Pot odds vs Implied odds** | [Pot odds](/en/blog/holdem-pot-odds) count only chips **in the pot now**; implied odds add what you'll **win later**. |
| **VPIP vs PFR** | VPIP = how often you **play**; PFR = how often you **raise**. PFR can never exceed VPIP. |
| **The 3-bet count** | Blinds are bet 1, the open-raise is bet 2, so the **re-raise is the 3-bet** (not the first raise). |

</div>

---

![A visual map of the six poker term categories in this glossary — Betting Actions, Positions, Hands, Player Types, Money, and Situations](/images/holdem-glossary-categories.webp "The six groups this glossary is organized into — browse by the situation you're in, not just alphabetically")

## Betting Actions

Everything you can physically do on your turn. If you're brand new, start with the [order of betting](/en/blog/holdem-betting-actions "thumb:/images/holdem-betting-actions-hero.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Check** | Pass the action without betting — only possible when no bet has been made this round. |
| **Bet** | Be the first to put chips in the pot on a betting round. |
| **Call** | Match the current bet to stay in the hand. |
| **Raise** | Increase the current bet, forcing others to match more or fold. |
| **Fold** | Give up your hand and any claim to the pot. |
| **All-in** | Commit all your chips; you can only win the part of the pot you covered (see [side pot](/en/blog/holdem-all-in-rules)). |
| **Limp** | Enter preflop by just calling the big blind instead of raising — usually a weak, passive play. |
| **Open (open-raise)** | Be the first player to enter the pot with a raise. |
| **3-bet** | The re-raise after an open (the third bet, counting the blinds as the first). |
| **4-bet** | A re-raise of a 3-bet. |
| **C-bet** | A "continuation bet" on the flop by the player who raised preflop. |
| **Donk bet** | Leading into the previous street's aggressor from out of position (once seen as a mistake, now a low-frequency tool). |
| **Value bet** | A bet with a strong hand hoping to get called by a worse one. |
| **Bluff / Semi-bluff** | A bluff bets a weak hand to fold out better; a semi-bluff does it with a draw that can still improve. |
| **Check-raise** | Check, then raise after an opponent bets — a strong, deceptive line (legal in modern rooms). |
| **Min-raise** | The smallest legal raise. |
| **String bet** | An illegal, undeclared reach-back for more chips; ruled a call, not a raise. |
| **Jam / Shove** | To move all-in. |
| **Snap call** | An instant, no-hesitation call. |
| **Hero call** | Calling with a weak hand because you've read the opponent as bluffing. |

</div>

---

## Positions

Where you sit decides when you act — and acting last is a permanent edge. For how to actually use them, see [position play](/en/blog/holdem-position-play).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Button (BTN)** | The dealer position; acts **last** postflop — the best seat at the table. |
| **Small blind (SB)** | Forced bet left of the button; acts first postflop (worst postflop seat). |
| **Big blind (BB)** | The larger of the two blinds; stakes are named by the blind sizes ($1/$2), and one big blind is the standard unit for measuring stacks. |
| **UTG (under the gun)** | First to act preflop — needs the tightest opening range. |
| **Cutoff (CO)** | Right of the button; second-best seat, great for stealing blinds. |
| **Hijack (HJ)** | Two seats right of the button; the start of late position. |
| **Lojack (LJ)** | Right of the hijack; late-middle position (labels shift with table size). |
| **Early / Middle / Late** | Groupings by how soon you act — early = tightest, late = widest and most profitable. |
| **In / Out of position** | You're *in position* if you act after your opponent, *out of position* if you act first. |

</div>

For the full seating map, see the [table positions guide](/en/blog/holdem-positions "thumb:/images/holdem-button-position-hero.webp").

---

## Hands & the Board

![Infographic of a gold dealer button and two face-down hole cards with a K♦ 7♣ 2♠ flop on green felt](/images/holdem-button-dealer-board.webp "The board and your hole cards combine into your best five-card hand — most poker vocabulary describes exactly how")

The cards themselves, and what you make with them. New to the flow of streets? Start with the [order of play](/en/blog/holdem-game-order).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Hole cards** | Your two private face-down cards. |
| **Community cards** | The five shared face-up cards everyone uses. |
| **Flop / Turn / River** | The first three shared cards / the fourth / the fifth and last. |
| **The nuts** | The best possible hand given the current board (it can change on later streets). |
| **Kicker** | A side card that breaks ties between otherwise equal hands (see [tie-breakers](/en/blog/holdem-tiebreak-rules)). |
| **Pocket pair** | Two hole cards of the same rank. |
| **Overpair** | A pocket pair higher than every card on the board. |
| **Top pair** | Pairing the highest board card with a hole card. |
| **Set** | Three of a kind using a **pocket pair** + one board card (well disguised). |
| **Trips** | Three of a kind using **one hole card** + a pair on the board (weaker kicker control). |
| **Two pair** | Two different pairs. |
| **Made hand** | A complete hand now, as opposed to a draw. |
| **Draw** | A hand that needs to improve — e.g. a **flush draw** (4 to a flush) or straight draw. |
| **Gutshot** | An inside straight draw needing one middle rank (4 [outs](/en/blog/holdem-outs)). |
| **Open-ender** | An open-ended straight draw, completed at either end (8 outs). |
| **Backdoor** | A draw needing **two** running cards (turn *and* river). |
| **Overcard** | A card higher than the board. |
| **Suited connectors** | Two consecutive same-suit cards (e.g. 8♥9♥). |
| **Broadway** | The T-J-Q-K-A straight, the highest straight. |
| **The wheel** | The A-2-3-4-5 straight, the **lowest** straight (ace plays low). |
| **Cooler** | A big hand that loses to a bigger one with no misplay — [full guide](/en/blog/holdem-cooler). |
| **Bad beat** | Losing as a big favorite to a lucky draw — [full guide](/en/blog/holdem-bad-beat). |

</div>

Still learning what beats what? The [hand rankings guide](/en/blog/holdem-hand-rankings) has the full order.

---

## Player Types & Slang

![Top-down infographic of a Texas Hold'em pub table with a K♦ 7♣ 2♠ 9♥ 3♦ board, chips, and a dealer button](/images/holdem-pub-players-table.webp "Every table is a mix of types — learning the slang tells you who to target and who to avoid")

The zoo of nicknames for the people across the felt. The full breakdown lives in the [fish guide](/en/blog/holdem-fish).

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Fish** | A weak, losing recreational player — the table's profit source. |
| **Shark** | A strong, winning player who preys on weaker ones. |
| **Whale** | A wealthy, weak recreational player at big stakes — a "fish with deep pockets." |
| **Nit** | An extremely tight player who only plays premium hands. |
| **Donkey (donk)** | A derogatory term for a bad, unskilled player. |
| **Calling station** | A passive player who calls far too much and rarely folds or raises. |
| **Reg** | A "regular" — a habitual, usually competent player at a stake. |
| **Grinder** | A player who profits through steady volume and discipline. |
| **LAG / TAG** | Loose-aggressive / tight-aggressive — two winning aggressive styles. |
| **Maniac** | A hyper-aggressive player who raises and bluffs wildly. |
| **Mark** | The weak player the table is trying to win money from. |

</div>

---

## Money & the Game

Chips, stakes, and the two formats. The big fork is [cash game vs tournament](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp").

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Blinds** | The forced SB/BB bets that start the action — also the name for stake levels ([blinds explained](/en/blog/holdem-blind-meaning)). |
| **Ante** | A small forced bet from everyone to seed the pot, separate from the blinds. |
| **Pot** | The total chips being played for. |
| **Side pot** | A separate pot made when a player is all-in and others keep betting. |
| **Stack** | The chips in front of a player. |
| **Bankroll** | The money set aside for poker overall — not the chips on the table. |
| **Buy-in** | The amount needed to enter a game or tournament. |
| **Rake** | The house's cut of each pot — [full guide](/en/blog/holdem-rake). |
| **Rakeback** | A rebate returning part of the rake you've paid. |
| **Straddle** | An optional blind (usually 2× BB) buying last preflop action — [full guide](/en/blog/holdem-straddle). |
| **Cash game** | Real-value chips, join or leave anytime, fixed blinds. |
| **Tournament** | Fixed buy-in, rising blinds, play until you bust or win. |
| **Freezeout** | A tournament with no rebuys — out means out. |
| **Bounty (knockout)** | A tournament paying a prize for each player you eliminate. |
| **Sit & Go (SNG)** | A small tournament that starts as soon as it fills. |
| **MTT** | A multi-table tournament that merges tables as players bust. |
| **ICM** | The Independent Chip Model — converts tournament chips into real-money equity near pay jumps. |
| **Bad beat jackpot** | A promo prize paid when a very strong hand loses — [how it works](/en/blog/holdem-bad-beat). |

</div>

---

## Situations, Stats & Etiquette

The words for what's happening — and how to behave while it does.

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Term | Meaning |
|:---|:---|
| **Showdown** | Revealing hands after the final bet to decide the winner ([showdown rules](/en/blog/holdem-showdown-rules)). |
| **Muck** | To discard a hand face-down. |
| **Chop / Split pot** | Dividing the pot when hands tie ([split pots](/en/blog/holdem-split-pot-rules)). |
| **Slow roll** | Deliberately delaying showing a winning hand to taunt — a serious etiquette breach. |
| **Tilt** | Emotionally-driven bad play, usually after a loss. |
| **Tell** | A physical or behavioral cue that leaks information about a hand. |
| **Pot odds** | The ratio of the pot to the cost of a call — [how to calculate](/en/blog/holdem-pot-odds). |
| **Implied odds** | Pot odds adjusted for the chips you expect to win on later streets. |
| **Equity** | Your percentage share of the pot right now ([probability guide](/en/blog/holdem-probability)). |
| **EV (expected value)** | The average long-run result of a decision; +EV wins over time. |
| **VPIP** | How often a player voluntarily puts money in preflop — the loose/tight stat. |
| **PFR** | How often a player raises preflop — the aggression stat (never higher than VPIP). |
| **GTO** | Game Theory Optimal — a balanced, unexploitable strategy from solvers. |
| **Range** | The full set of hands a player could hold in a spot; pros think in ranges, not single hands. |
| **Cold deck** | An unlucky deal producing a cooler (originally a cheat's pre-stacked deck). |
| **"Don't tap the glass"** | Don't criticize weak players — you'll scare away the ones you profit from. |
| **Run it twice** | All-in players deal the remaining board twice, each for half the pot, to cut variance. |

</div>

---

:::readnext[Keep reading]
/en/blog/holdem-cooler | Cooler vs Bad Beat, Explained | /images/holdem-cooler-hero.webp
/en/blog/holdem-fish | What Is a Fish in Poker? | /images/holdem-fish-hero.webp
:::

## FAQ

**Q. What are the most common poker terms every beginner should know?**

A. The essentials are the betting actions (check, bet, call, raise, fold, all-in), the streets (flop, turn, river), the positions (button, small blind, big blind, UTG), and a handful of hand terms (the nuts, kicker, set, top pair). Learn the "most confused" pairs above — especially check vs call and set vs trips — and you'll follow almost any table conversation.

**Q. What does UTG (under the gun) mean in poker?**

A. UTG is the seat immediately to the left of the big blind, so that player is first to act before the flop. Because everyone acts after them with more information, UTG is the tightest position — you should open the fewest, strongest hands from there.

**Q. What is the difference between a check and a call?**

A. A check passes the action without putting any chips in, and is only allowed when no one has bet yet this round. A call matches a bet someone has already made. Checking is free; calling costs you the amount of the current bet. Confusing the two is the single most common beginner mistake.

**Q. What is the difference between a set and trips?**

A. Both are three of a kind and rank identically, but they're made differently. A set is a pocket pair that hits a matching card on the board (you hold 7‑7, a 7 comes). Trips is one hole card matching a pair already on the board (you hold A‑7, and 7‑7 is on the board). A set is more disguised and has better kicker control, so it usually wins more money.

**Q. What is the difference between a cooler and a bad beat?**

A. In a bad beat you were the favorite when the money went in and got outdrawn by a lucky card. In a cooler you were behind the whole way with a hand too strong to fold, and no lucky card was needed — the bigger hand was ahead from the start. Quick test: if your opponent had to *improve* to win, it's a bad beat; if not, it's a cooler.

**Q. What is a 3-bet in poker, and why isn't the first raise the "1-bet"?**

A. A 3-bet is the first re-raise before the flop. The counting includes the blinds: the big blind is treated as the first bet, the opening raise is the second bet ("2-bet"), so the next raise is the third — the 3-bet. A re-raise on top of that is a 4-bet. It confuses beginners because the "first raise" is already the second bet in the sequence.

**Q. What does "the nuts" mean in poker?**

A. The nuts is the best possible hand given the cards on the board at that moment. If you have the nuts, no other holding can beat you right now — though a later card can change what the nuts is. The "second nuts" is the next-best possible hand.

**Q. What do VPIP and PFR mean in poker stats?**

A. VPIP (Voluntarily Put money In Pot) is the percentage of hands a player chooses to play preflop — a measure of how loose or tight they are. PFR (Pre-Flop Raise) is the percentage they raise preflop — a measure of aggression. PFR can never be higher than VPIP, and a big gap between the two marks a passive, calling-heavy player.

---

## Where to Go Next

This glossary is the map; the real learning is in the guides it links to. A few good starting points:

- **The absolute basics:** [how to play Texas Hold'em](/en/blog/texas-holdem-rules-for-beginners) and the [order of betting](/en/blog/holdem-betting-actions).
- **Hands:** [what beats what](/en/blog/holdem-hand-rankings) and the [tie-breaker rules](/en/blog/holdem-tiebreak-rules).
- **The math:** [pot odds](/en/blog/holdem-pot-odds), [outs](/en/blog/holdem-outs), and [probability](/en/blog/holdem-probability).
- **The slang, in depth:** [fish](/en/blog/holdem-fish), [cooler](/en/blog/holdem-cooler), [bad beat](/en/blog/holdem-bad-beat), [straddle](/en/blog/holdem-straddle), and [rake](/en/blog/holdem-rake).

Bookmark this page and check back whenever a word trips you up. Speak the language, and the game stops feeling like it's happening to you — and starts feeling like something you're doing *to* the table.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossary</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Is a Fish?</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The player types, decoded</div>
  </a>
  <a href="/en/blog/holdem-cooler" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Glossary</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Cooler vs Bad Beat</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The two losses everyone confuses</div>
  </a>
  <a href="/en/blog/holdem-betting-actions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Rules</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Betting Actions</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Check, bet, call, raise, fold</div>
  </a>
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">What Beats What</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The full hand ranking order</div>
  </a>
</div>
`.trim(),
};

export default POST;
