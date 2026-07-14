import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-starting-hands-chart",
  title: "Poker Starting Hands Chart & Best Hands",
  seoTitle: "Fold 80% of Your Hands? — Best Poker Starting Hands Chart",
  desc: "Most hole cards lose money. The best and good starting hands in poker, the full chart by position and 6-max, plus GTO vs beginner charts — in 10 minutes.",
  tldr: "Of the 169 starting hand types, only a small top slice — about 15–20% of the hands you're dealt — is profitable for a beginner. Big pairs (AA–TT) and AK raise from any seat; the later you act, the wider you open — from ~13% under the gun to ~43% on the button (wider again in 6-max). Start with a simplified chart, add GTO preflop charts once raise-or-fold is automatic.",
  category: "strategy",
  date: "2026-06-14",
  updated: "2026-07-11",
  keepImagesInBody: true,
  readTime: "10 min",
  emoji: "🂡",
  tags: [
    "good starting hands in poker",
    "poker starting hands chart",
    "gto preflop charts",
    "starting hands percentages",
    "6-max starting hands",
  ],
  image: "/images/holdem-starting-hands-chart-hero.webp",
  imageAlt: "Texas Hold'em starting hands chart showing Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) and Fold groups by position UTG to button",
  content: `
My first live session, I picked up A♣ 4♦ and thought "an ace, how bad can it be?"

I called a raise, missed the flop, called again, missed the turn. By the river I'd lost 40 big blinds with nothing.

Here's the uncomfortable math behind that hand: ==Texas Hold'em has 169 distinct starting hand types — and roughly 80% of the hands you're dealt should be folded preflop.== Learning which hands to play — and from which seat — is the single biggest improvement beginners make in their first month. Hand selection is the second of the [five decisions](/en/blog/holdem-strategy) behind every winning hand: get it right and every later street gets easier.

This page is the one-stop version: the 10 best starting hands, what makes a hand *good* in the first place, the full starting hands chart by position (9-max and 6-max), GTO preflop charts vs beginner charts, a printable PDF cheat sheet, and a quick quiz to test yourself.

---

### Starting hands, by the numbers

:::stripe
169 | Distinct starting hand types (1,326 exact combos)
~80% | Hands a beginner should fold preflop
~13% → ~43% | Opening range from UTG out to the button (9-max)
~85% | How often AA beats one random hand
:::

---

## The 10 Best Starting Hands in Poker, Ranked

These are the best starting hands in poker — the ones you should almost always raise preflop, from any seat at the table:

| Rank | Hand | Why it's strong |
|-----:|------|-----------------|
| 1 | AA | Best preflop hand — ~85% favorite over one random hand |
| 2 | KK | Loses only to AA preflop — still raise and re-raise |
| 3 | QQ | Strong, but reassess when an A or K hits the flop |
| 4 | JJ | Premium — raise strong, slow down vs. heavy action on A/K/Q flops |
| 5 | TT | Top-5 hand — raise first in, tread carefully vs. big 3-bets |
| 6 | AKs | Suited ace-king — dominates other big cards, makes the nut flush draw |
| 7 | AKo | Off-suit AK — raise from any position |
| 8 | AQs | Suited AQ — strong, but fold to big 3-bets out of position |
| 9 | KQs | Suited KQ — good in late position, trickier from UTG |
| 10 | AJs | Suited AJ — strong in position, fold to heavy resistance |

![Four premium Texas Hold'em starting hands — pocket aces, pocket kings, pocket queens, and ace-king suited — glowing gold on dark green felt](/images/holdem-starting-hands-premium.webp "The premium tier — hands you can raise from any position")

==g:With hands 1–5 (the pocket pairs), always raise and often re-raise preflop to build the pot.== With AK and AQ, the goal is to get heads-up where your big cards have maximum equity. One number worth memorizing: AK is roughly a ==coin flip against every smaller pocket pair== (the classic "race") and around 43–46% against QQ — close enough that raising and re-raising with AK stays correct.

Pocket rockets, cowboys, big slick — if the table slang is new to you, the [poker glossary](/en/blog/holdem-glossary) covers every hand nickname. And if you're fuzzy on what beats what once the board comes, review the [poker hand rankings](/en/blog/holdem-hand-rankings) first.

---

## What Counts as a Good Starting Hand in Poker?

Good starting hands in poker share one trait: ==they make strong *five-card* hands more often than the hands they run into.== High pairs start ahead. Big suited cards make top pair with the best kicker, nut flushes, and high straights. Everything else needs help — and hands that need help are only worth playing when the help is cheap.

Sorted into tiers, good starting hands in poker look like this:

| Tier | Examples | How to play it |
|------|----------|----------------|
| Premium | AA, KK, QQ, JJ, AKs, AKo | Raise from any position, re-raise aggressively |
| Strong | TT–88, AQ, AJs, ATs, KQs | Raise from most positions, slow down vs. heavy 3-bets |
| Speculative | Small pairs (77–22), suited connectors (JTs, T9s, 98s), suited aces (A2s–A9s) | Late position only — they need cheap flops and position |
| ==r:Trash== | Weak offsuit aces (A4o), king-rag (K3o), low offsuit junk | ==r:Fold preflop — these cost chips every session== |

:::tip[The tier is only half the answer. A speculative hand is "good" on the button and bad under the gun — which is why the real chart is organized by position, not by hand.]:::

---

## Poker Starting Hands Chart by Position (Full 9-Max Chart)

==Your position at the table changes which hands are profitable.==

From early position, many players still act after you — so you need stronger hands. From the button, you act last on every postflop street, which means you can play a much wider range profitably.

Here is the poker starting hands chart for a standard 9-max table:

| Position | Open range | Key hands to play |
|----------|-----------|-------------------|
| UTG (Early) | Top ~13% | TT+, AJs+, AKo, KQs |
| MP (Middle) | Top ~17% | Add 88, 99, ATs, KJs, QJs, JTs |
| CO (Cutoff) | Top ~27% | Add 55–77, A9s+, KTs+, suited connectors (T9s, 98s) |
| BTN (Button) | Top ~43% | Add 22–44, A2s+, suited broadways, weaker offsuit hands |

The rule: ==the later you act, the more hands you can open profitably==. Because the button always acts last postflop, it's the most valuable seat in poker.

Explore the full color-coded grid — every one of the 169 hands by position:

:::rangechart:::

Want it as a standalone tool with expanded ranges per seat? Use the [Texas Hold'em starting hand chart tool](/en/hand-chart). For a breakdown of every seat name (UTG, HJ, CO, BTN, SB, BB), see the [poker positions guide](/en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp").

### Early position (UTG): the tightest range

UTG is the hardest seat to play. ==r:Eight players still act behind you.== Any hand you open here needs to hold up against strong ranges.

The core of the UTG range (a full ~13% range widens to mid pairs like 77–99, more suited broadways, and a few offsuit hands like AQo/AJo as you improve):

- Pocket pairs: **TT, JJ, QQ, KK, AA**
- Premium suited: **AKs, AQs, AJs, KQs**
- Premium offsuit: **AKo** (and sometimes AQo)

Hands that look strong but should fold from UTG:

- **KJo, QJo, KTo** — too many dominated scenarios against the players who call a UTG open
- **77, 88** — fine from the button, marginal from UTG
- **Weak suited aces (A2s–A7s)** — save these for late position

### Late position (cutoff and button): the widest range

The button is the best seat in poker. ==g:You act last on the flop, turn, and river every hand.== That advantage lets you profitably add:

- **Small pocket pairs (22–66)** — hoping to flop a set
- **Any suited ace (A2s–A9s)** — nut flush draw potential
- **Suited connectors (T9s, 98s, 87s)** — cheap, high-implied-odds hands
- **Weaker broadway offsuit (KTo, QJo)** — only in late position, never early

Key rule: ==these speculative hands need position to be profitable==. If a UTG player raises in front of you, most of them go straight into the muck — their edge disappears without position.

---

## 6-Max Starting Hands: How the Chart Changes

Most online cash games are 6-max, and the chart shifts in one direction: ==wider==. Remove the three tightest seats from a 9-max table and every remaining position effectively "moves up." The first player to act in 6-max is opening into five opponents, not eight — so ==g:UTG in 6-max plays roughly like MP in 9-max== (~15–17% instead of ~13%).

:::compare
9-Max (Full Ring) | 6-Max
9 seats — three early positions before MP | 6 seats — UTG here is really the lojack
First seat opens ~13% of hands | First seat opens ~15–17% of hands
Blinds come around once every 9 hands — folding is cheap | Blinds come around 1.5x faster — folding everything bleeds chips
AJo, KQo = fold from first seat | AJo, KQo = standard opens from first seat
Speculative hands mostly CO/BTN only | Speculative hands playable a seat earlier
:::

The mistake to avoid is playing a 9-max chart in a 6-max game: you'll fold hands that are clearly profitable and get eaten by the blinds. The reverse mistake — 6-max ranges at a full-ring table — is how weak aces end up dominated all night. Once the chart feels automatic, [position play](/en/blog/holdem-position-play) is the skill that converts those wider ranges into actual profit: stealing, isolating, and pressuring the blinds from the seats that allow it.

---

## What Percentage of Starting Hands Should You Play?

Across a full session, ==a solid beginner target is playing roughly 15–20% of the hands you're dealt== — which means folding 80–85% preflop. That's not one flat number, it's the *average* of the position-based chart above: ~13% from UTG, ~17% from MP, ~27% from the cutoff, ~43% from the button.

:::stat[15–20%] of dealt hands — a healthy beginner range at 9-max:::

If you're playing 30–40% of hands at a full-ring table, you're not "seeing more flops" — you're paying rake and reverse-implied odds on hands the chart already told you to fold. Track it honestly for one session; the number is usually higher than it feels.

One scope note: this is about what percentage of your *range* to play, not about how often specific hands win against each other. For hand-vs-hand win rates (AK vs QQ, pair vs two overcards, and the rest), see the [poker odds and probability guide](/en/blog/holdem-probability) — that's its job, not this chart's.

---

## GTO Preflop Charts vs Beginner Charts: Which to Use?

I keep solver outputs open when I study, and I still hand every beginner a simplified chart first. These are two different tools, and knowing which one to use is worth more than either chart alone.

**GTO preflop charts** come from solvers (PioSOLVER, GTO Wizard and friends). They're theoretically unexploitable — and they're also full of mixed frequencies: open this hand 25% of the time, fold it 75%, 3-bet this combo but only with these suits. **Beginner charts** — like the one on this page — compress all of that into one clear action per hand.

:::compare
GTO Preflop Charts | Simplified Beginner Chart
Mixed frequencies — raise 25% / fold 75% of the time | One clear action per hand — raise or fold
Assumes opponents also play near-perfectly | Assumes opponents make mistakes (they do)
Built for a specific stack depth, rake, and format | Robust across typical live and low-stakes games
Best for: online regs, study sessions, range review | Best for: your first year, live games, building discipline
Misapplied = random-feeling decisions you can't explain | Slightly "too tight" — the cheapest flaw in poker
:::

Here's why memorizing solver charts blindly backfires: GTO frequencies are a defense against perfect opponents. Your opponents at low stakes call too much, fold too rarely, and never 3-bet light — against them, the solver's carefully balanced bluffs make *less* money than simply raising good hands and folding trash. You end up making mixed-frequency moves you can't explain, in games where the plain move earns more. ==g:Learn the simplified chart until raise-or-fold is automatic; add GTO preflop charts when you move online or start studying seriously.== The bridge between the two is understanding [poker equity](/en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp") — the win-share math that solver EVs are built on.

---

## The Worst Starting Hands (That Look Playable)

The worst starting hands in poker aren't random junk like 7-2 — nobody needs a chart to fold that. The expensive ones are the hands that *look* playable and consistently lose chips over sessions:

| Hand type | Why it loses | What beginners think |
|-----------|-------------|---------------------|
| ==r:Weak aces (A2o–A8o)== | Makes second-best pair vs. better aces | "I have an ace, it must be good" |
| Low offsuit connectors (74o, 85o) | Rarely hits cleanly, hard to play when it does | "It could make a straight" |
| King-rag offsuit (K3o, K4o) | Dominated by every better king | "A king is a big card" |
| Any two suited cards | Makes a flush by the river only ~6.5% of the time (flops one ~0.8%) | "But they're the same suit" |

![Weak ace trap in Texas Hold'em — A♣ 4♦ outlined in red as a losing hand, dominated by A♠ K♦ in gold](/images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop")

The ==r:most expensive mistake beginners make is calling raises with weak aces== like the A♣ 4♦ from the intro. When you finally hit your pair of aces, you're often second-best to A♠ K♦ or A♥ Q♦ — and you lose a big pot convinced you have top pair. You do. So do they, with a better kicker.

(And the actual worst hand in poker? 7-2 offsuit — more on that, and the famous "7-2 rule," in the FAQ below.)

---

## Printable Starting Hands Chart (PDF Cheat Sheet)

Charts only work if they're in front of you when it matters. For home games and study sessions, we made the whole thing printable:

**[Download the free printable poker starting hands chart (PDF)](/downloads/poker-starting-hands-chart.pdf)** — one page, 9-max and 6-max opening ranges side by side, cheat-sheet format. Print it, or keep it open on your phone between hands.

Then use it literally, every hand, for your first 20+ sessions:

:::steps
Check your position first | Before you even look at your cards, note where you sit relative to the button
Match your hole cards to the chart | Find your hand in the range for that position
Raise or fold | Avoid calling ([limping](/en/blog/holdem-limping)) as a default action
Fold everything else | Even when it feels too tight — especially then
:::

==g:It feels boring. That's the point.== Tight-aggressive preflop selection is the foundation of every winning poker style, from beginner cash games to high-stakes tournaments.

---

## Test Yourself: Preflop Hand Quiz

Three chart spots. Decide before you peek at the answers:

**1. 9-max, you're UTG with A♠ J♦ (offsuit).** Raise or fold?
→ ==r:Fold.== AJo doesn't make the UTG cut — it's dominated too often by the hands that call a UTG open. AJ*s* opens; AJo waits for a later seat.

**2. Button, everyone folds to you, 7♠ 6♠.** Raise or fold?
→ ==g:Raise.== Suited connectors are squarely inside the ~43% button range — this is exactly the seat they're profitable from.

**3. 6-max, the cutoff raises, you're on the button with A♦ 4♣.** Call, raise, or fold?
→ ==r:Fold.== A weak offsuit ace against a raise is the intro hand all over again — dominated when it hits, worthless when it misses.

:::quiz:::

Got all three? Try the full [10-question poker hand quiz](/en/quiz) — best five cards from seven, against the clock.

---

:::readnext[Keep reading]
/en/blog/holdem-hand-rankings | Poker Hand Rankings | /images/holdem-hand-rankings-hero.webp
/en/blog/holdem-probability | Poker Odds & Probability Chart | /images/holdem-probability-hero.webp
:::

## FAQ

**Q. What is the best starting hand in poker?**

A. Pocket aces (AA) is the best starting hand in poker. Preflop, aces win roughly 85% of the time against one random hand. Always raise and re-raise with aces — the goal is to build a big pot as the statistical favorite.

**Q. What are good starting hands in poker?**

A. Good starting hands in poker are premium pairs (AA–TT), big aces (AK, AQ), and strong suited broadways (KQs, AJs) — roughly the top 15–20% of all hands. Speculative hands like small pairs and suited connectors are only good from late position.

**Q. How many starting hands are there in poker?**

A. There are 169 distinct starting hand types (13 pairs, 78 suited, 78 offsuit) out of 1,326 exact two-card combinations. The math behind those counts lives in the [poker probability guide](/en/blog/holdem-probability).

**Q. What is the 7-2 rule in poker?**

A. The 7-2 rule is a house side game, not an official poker rule: if a player wins a pot with 7-2 offsuit — the worst hand — every other player pays them a small bounty. It exists purely to spice up home games and pub games by rewarding an outrageous bluff.

**Q. What is the worst starting hand in poker?**

A. 7-2 offsuit is widely considered the worst starting hand in poker. The cards are too far apart to make a straight together, too low to win unimproved, and even hitting a pair leaves you with a weak hand and a bad kicker.

**Q. Should beginners use GTO preflop charts?**

A. Not at first. GTO preflop charts use mixed frequencies designed to be unexploitable against strong opponents — overkill in beginner games, where a simplified raise-or-fold chart earns more. Learn the simple chart until it's automatic, then add GTO charts when you study or move up online.

**Q. Does being suited really matter?**

A. Suited adds about 2–3% equity over the same offsuit hand — meaningful, but not a reason to play a bad hand. Two suited cards make a flush by the river only ~6.5% of the time (and a flopped flush draw completes about 35% of the time by the river). Suited trash is still trash.

**Q. Should I always fold small pocket pairs like 22 or 33?**

A. Not always — position decides. From the cutoff or button, small pairs are worth playing to "set mine": you flop a set or better about 11.8% of the time (roughly 1 in 8.5). From early position they're hard to play profitably and are usually folds.

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Pillar</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Hand Rankings — Best to Worst</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">All 10 hands explained with odds and examples</div>
  </a>
  <a href="/en/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Positions</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Positions: UTG to Button</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why position changes which hands to play</div>
  </a>
  <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Hand Rankings</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Kicker and Tie-Breaker Rules</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Same pair but different result — kicker decides</div>
  </a>
</div>
`.trim(),
};
