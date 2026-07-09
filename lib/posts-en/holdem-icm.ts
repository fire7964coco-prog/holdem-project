import type { Post } from "../posts";

export const POST: Post = {
  slug: "holdem-icm",
  title: "What Is ICM in Poker? The Independent Chip Model, Explained",
  seoTitle: "Your Chips Aren't Worth Face Value — ICM in Poker",
  desc: "In a tournament your chips aren't cash — winning only pays first. ICM (the Independent Chip Model) turns your stack into real prize money. Here's how it works.",
  tldr: "ICM (Independent Chip Model) converts your tournament chip stack into its real prize-money value, using the payouts and everyone's stacks. Because you only win one first prize, doubling your chips never doubles your money — so the chip leader's stack is worth less than its chip share, and short stacks are worth more. That gap is why you fold hands on the bubble that would be easy calls in a cash game.",
  category: "strategy",
  date: "2026-07-09",
  updated: "2026-07-09",
  keepImagesInBody: true,
  readTime: "13 min",
  emoji: "🏆",
  image: "/images/holdem-icm-hero.webp",
  imageAlt: "Final-table poker chips stacked in front of a payout ladder, showing that a bigger chip stack does not convert one-to-one into a bigger share of the prize money",
  tags: ["poker icm", "what is icm in poker", "icm poker meaning", "icm vs chip ev", "icm deal", "chip chop vs icm", "how is icm calculated", "icm poker strategy"],
  content: `
The first time ICM cost me money, I didn't even know it existed. Four of us left, three getting paid, and I looked down at pocket jacks with a middling stack. I shoved, the chip leader called with ace-ten, and I busted on the bubble for nothing. ==In a cash game that shove is fine. On that bubble it was a disaster== — and the reason why is the single most important idea in tournament poker.

==Chips in a tournament are not money. You only ever win *one* first prize, so doubling your stack never doubles what you're actually worth.== ICM — the Independent Chip Model — is the math that turns your pile of chips into the real dollars it represents, and once you see it, calls and folds that felt wrong suddenly make sense. This guide takes you from "what does ICM stand for" all the way to splitting a final-table deal, with every number worked out so you can check it yourself.

ICM lives inside the [tournament game](/en/blog/holdem-tournament "thumb:/images/holdem-tournament-hero.webp") specifically — it's the reason late-stage MTT play looks nothing like a cash game.

---

### ICM at a glance

:::stripe
chips ≠ money | You win only one first prize
chip leader | worth LESS than their chip share
short stack | worth MORE than their chip share
:::

---

## What Is ICM in Poker?

**ICM (the Independent Chip Model) converts a chip stack into its real prize-money value, using the remaining payouts and every player's stack size.** It answers one question: ==if the tournament ended right now with these stacks, what is my slice of the prize pool actually worth in dollars?==

It works by estimating how often each player finishes in each paying position — first, second, third, and so on — from their share of the chips, then multiplying those probabilities by the payouts. The bigger your stack, the more often you finish high; but because ==the top prize is capped, extra chips buy less and less money.==

The key mental shift: in a cash game a chip is a dollar, full stop. In a tournament a chip is a *lottery ticket* on a fixed set of prizes. ICM prices that ticket. It applies to tournaments and sit-and-gos only — [never to cash games](/en/blog/holdem-tournament-vs-cash-game "thumb:/images/tournament-table-action.webp"), where your chips already equal their face value.

---

## Why Your Chips Aren't Worth Their Face Value in Money

**Because prize money is "top-heavy" and locked in below you.** Say three prizes pay $50 / $30 / $20. The moment you're in the money, you're guaranteed at least $20 — so the chips protecting that $20 are precious, while the chips reaching for first are chasing a prize you can only win once.

That makes the chip-to-money curve ==bend==: the first chips (survival) are worth a lot, the last chips (going for the win) are worth less. A player with half the chips does not own half the prize pool — they own noticeably less, because they can't finish better than first but they *can* still bust.

Flip it around and the short stack is the winner of this math. They already have a real claim on the pay jumps below them, so ==each of their chips is worth more than face value==. This single asymmetry — big stack overvalued in chips, short stack undervalued — drives every ICM decision you'll ever make.

---

## How Is ICM Calculated? (The Malmuth–Harville Model)

**ICM assigns each player their probability of finishing in each position based purely on stack size, then multiplies by the payouts.** The method is often called the Malmuth–Harville model — the finish-probability math comes from David Harville's 1970s work on horse-racing odds, which Mason Malmuth applied to poker.

The rule is simple and recursive:

- Your chance of finishing **1st** = your stack ÷ total chips.
- Your chance of finishing **2nd** = the sum, over every other player who could finish 1st, of (their chance of winning) × (your stack ÷ the chips left without them).
- Keep going for each lower position.

Let's do it for real. Three players are left, prizes are ==$50 / $30 / $20== ($100 pool), and the stacks are:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Finish | Leader (5,000 · 50%) | Middle (3,000 · 30%) | Short (2,000 · 20%) |
|:--|:--:|:--:|:--:|
| 1st | 50.0% | 30.0% | 20.0% |
| 2nd | 33.9% | 37.5% | 28.6% |
| 3rd | 16.1% | 32.5% | 51.4% |

</div>

Take the leader's 2nd-place number so you can see the recursion: if Middle wins first (30% of the time), the leader then takes 5,000 of the 7,000 chips left = 71.4%, and 0.30 × 0.714 = 21.4%; if Short wins first (20%), the leader takes 5,000 of 8,000 = 62.5%, and 0.20 × 0.625 = 12.5%. Add them: ==33.9%== of the time the leader finishes 2nd.

Now multiply each row by the payouts and you get the dollar value of every stack:

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Player | Chip % | ICM value | ICM % | vs chips |
|:--|:--:|:--:|:--:|:--:|
| Leader | 50.0% | ==$38.39== | 38.4% | ==r:−11.6== |
| Middle | 30.0% | $32.75 | 32.8% | ==g:+2.8== |
| Short | 20.0% | $28.86 | 28.9% | ==g:+8.9== |

</div>

There it is in numbers: the leader has ==half the chips but only 38.4% of the money==, while the short stack's 20% of chips is worth 28.9%. You don't have to run this by hand at the table — the [ICM calculator](/en/calculator) does it instantly — but seeing the machinery once is what makes the strategy stick.

---

## ICM vs Chip EV — What's the Difference?

**Chip EV measures a decision in chips won or lost; ICM (or "$EV") measures it in real prize money. They agree early and split hard late.** Early in a tournament, with tiny pay jumps far away, a chip is basically a chip — you play [chip EV](/en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp"), accumulating relentlessly. Near the money and the final table, ICM takes over.

The classic clash is a marginal all-in. In chip EV, a coin flip for a big pot can be fine or even good — you gain as many chips as you lose. In ICM it can be a clear ==fold==, because busting costs you locked-in prize money you can't get back, while the chips you'd win are worth less than face value.

That is exactly the mistake I made with those jacks: a fine chip-EV shove, a losing ICM shove. ==Chip EV asks "will this build my stack?" ICM asks "will this build my bankroll?"== — and only the second one pays out.

---

## The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps

**The "ICM tax" is the gap between your chip percentage and your real money percentage — value that vanishes the moment stacks get top-heavy.** In the worked example, the leader's chips say 50% but the money says 38.4%: an ==11.6-point ICM tax== on being the big stack.

The tax shows up in every all-in as a **risk premium** — the extra equity you need *on top of* the chip-EV break-even before a call is actually profitable in dollars. If chip math says you need 40% to call, ICM might demand 48-50%, because the downside (busting, losing pay-jump equity) outweighs the upside (chips worth less than face).

The player who feels this most is the **medium stack on the bubble** — big enough to have real equity to lose, not short enough to be forced in. They carry the highest risk premium and should play the tightest. The big stack carries the *lowest* risk premium, which is the whole engine behind ICM pressure.

---

![A medium tournament stack folding to a big stack's shove on the money bubble, chips and a payout ladder in view — the moment ICM pressure turns a normal call into a fold](/images/holdem-icm-pressure.webp "ICM pressure: the medium stack folds because busting costs locked-in prize money the chips can't buy back")

## Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls

**"Bubble factor" measures how much more losing your chips costs you than winning the same chips helps — and it spikes right before every pay jump.** A bubble factor of 1.0 means chips and money move together (early game). A bubble factor of 1.5 means a lost pot hurts 1.5× as much as an identical won pot helps — so you need a much bigger edge to get involved.

Two practical rules fall out of it:

- **Big stack: attack.** Your low risk premium lets you [open and 3-bet](/en/blog/holdem-3bet) relentlessly against players who can't call without risking their tournament life. This is "applying ICM pressure," and it's the most reliable way to win chips at a final table.
- **Medium and short stacks: tighten your calling range, but keep shoving first.** Being the one who moves all-in (with fold equity) is far better than being the one who has to call off. Under pressure, your calling range should shrink hard while your open-shoving range stays aggressive.

The nightmare seat is the medium stack getting shoved on — folding hands as strong as some you'd snap-call in a cash game. That's not weakness; that's ICM.

---

## ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool

**A chip chop splits the remaining money by raw chip percentage; an ICM deal splits it by each player's ICM dollar value. The chip chop favors big stacks, the ICM deal is fairer to short stacks.** When players agree to end a tournament early and divide the prizes, these are the two methods on the table — and knowing the difference is worth real money.

Say three players with 50% / 30% / 20% of the chips are dividing a ==$1,500== remaining pool (paying $900 / $400 / $200):

<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">

| Player | Chip chop | ICM deal | Difference |
|:--|:--:|:--:|:--:|
| Leader (50%) | $750 | ==$618== | ==r:−$132== |
| Middle (30%) | $450 | $485 | ==g:+$35== |
| Short (20%) | $300 | ==$397== | ==g:+$97== |

</div>

The short stack gets ==$97 more== from an ICM deal than a chip chop, because ICM credits the pay jumps they've already earned. So the rule is easy: ==if you're short, ask for an ICM deal; if you're the chip leader, propose a chip chop.== In practice the chip leader often negotiates a bit *above* their ICM number (and short stacks accept a bit below) in exchange for the certainty of locking up money — that's fine, as long as you know your ICM figure first. Run your own stacks and payouts through the [ICM deal calculator](/en/calculator) before you agree to anything.

---

## When Does ICM Matter Most — and When Should You Ignore It?

**ICM matters most near pay jumps and least when they're far away.** Lean on it in these spots:

- **The money bubble** — the biggest jump of all is from $0 to a cash, so risk premiums peak.
- **The final-table bubble and every pay jump on the final table** — each ladder step is real money.
- **Satellites** — the extreme case: every qualifying seat is worth the same, so once you have enough chips to win a seat, extra chips are worth almost *nothing* and you fold nearly everything.

Ignore it (play chip EV) when:

- **Early and middle stages**, where the next pay jump is a distant abstraction and accumulating chips is what wins tournaments.
- **Deep-stacked play with tiny blinds**, where you have room to outplay opponents rather than get it in.
- **Heads-up for the title**, where only two prizes remain and ICM stops changing your strategy — it's effectively chip EV again.

A common leak is over-applying ICM: folding your way down to a short stack "to ladder up" instead of accumulating when the pressure isn't really there yet. ICM is a late-game tool, not an excuse to play scared all tournament.

---

## How Accurate Is ICM? Its Limitations

**ICM is the best simple model we have, but it's an approximation — it assumes every player is equally skilled and ignores almost everything except stack sizes.** Be honest about what it leaves out:

- **Skill.** ICM treats a world champion and a first-timer with equal stacks as equal. A better player's chips are worth more than the model says.
- **Position.** A 3-big-blind stack on the button (about to see cheap flops) is worth more than the same stack in the big blind (about to be forced in). ICM can't see the seats.
- **Blinds and future play.** ICM freezes the tournament at this instant; it ignores rising blinds, antes, and how the next few orbits will actually play out.

There's even empirical backing for its blind spot: a large 2025 study that back-tested ICM against real tournament results found it tends to ==underestimate big stacks and overestimate short stacks==, in part because a skilled chip leader can leverage ICM pressure to win *more* than the raw model predicts. Advanced solvers add a "future game" correction for exactly this reason. None of that makes ICM wrong — it makes it a strong first approximation you adjust for skill and position, not a law of physics.

---

:::readnext[Keep reading]
/en/blog/holdem-tournament | Texas Hold'em Tournament Strategy | /images/holdem-tournament-hero.webp
/en/blog/holdem-equity | Poker Equity Explained | /images/holdem-equity-hero.webp
:::

## FAQ

**Q. What is ICM in poker?**

A. ICM (the Independent Chip Model) is a formula that converts your tournament chip stack into its real prize-money value, using the remaining payouts and every player's stack. It works because you only win one first prize, so chips and dollars aren't the same thing — ICM prices the difference.

**Q. How is ICM calculated?**

A. It assigns each player a probability of finishing in each paying position based on their share of the chips (your chance of finishing first = your stack ÷ total chips, then recursively for lower spots), then multiplies those probabilities by the payouts. The sum is your stack's dollar value. In practice you use an ICM calculator; the point is to understand what it's doing.

**Q. What's the difference between ICM and chip EV?**

A. Chip EV measures a decision in chips won or lost; ICM measures it in real money. They agree early in a tournament and diverge near the money, where busting costs locked-in prize equity. A coin-flip all-in that's fine in chip EV can be a clear fold under ICM.

**Q. What is an ICM deal, and how is it different from a chip chop?**

A. Both split a prize pool when players agree to end early. A chip chop divides the money by raw chip percentage (favoring big stacks); an ICM deal divides it by each player's ICM dollar value (fairer to short stacks). If you're short, ask for an ICM deal; if you're the chip leader, a chip chop pays you more.

**Q. Does ICM apply to cash games?**

A. No. In a cash game every chip already equals its face value in dollars and you can rebuy or leave anytime, so there's nothing to convert. ICM only exists because tournament chips can't be cashed out for their face value.

**Q. When should I ignore ICM?**

A. Early and middle stages, deep-stacked play with small blinds, and heads-up for the title — all spots where pay jumps are far away or only two prizes remain. In those cases you play chip EV and focus on accumulating chips.

**Q. Who invented ICM?**

A. The finish-probability math is usually credited to David Harville (from 1970s horse-racing research), which Mason Malmuth applied to poker tournaments — hence the "Malmuth–Harville" model. It became the standard way to value tournament stacks and split final-table deals.

---

## The 3 Things to Remember

1. **Chips aren't money.** You win only one first prize, so the chip leader is worth less than their chip share and the short stack is worth more. That single gap is all of ICM.
2. **Late game, switch from chip EV to $EV.** Near pay jumps, a call needs extra equity (a risk premium) to be profitable. The medium stack folds hands a cash game would snap-call.
3. **Know your number before you deal.** Short stacks want an ICM deal, big stacks want a chip chop — run the [calculator](/en/calculator) first.

From here, see how ICM pressure fits the wider [tournament strategy](/en/blog/holdem-tournament), or go back to the foundation with [poker equity](/en/blog/holdem-equity) and [pot odds](/en/blog/holdem-pot-odds).

---

## Related Posts

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
  <a href="/en/blog/holdem-tournament" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Texas Hold'em Tournament Strategy</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">The pillar ICM belongs to</div>
  </a>
  <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Tournament</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Tournament vs Cash Game</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Why ICM never applies to cash</div>
  </a>
  <a href="/en/blog/holdem-equity" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Strategy</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">Poker Equity Explained</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Chip EV is just equity in chips</div>
  </a>
  <a href="/en/calculator" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-decoration:none;transition:border-color 0.2s" onmouseover="this.style.borderColor='rgba(212,175,55,0.45)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.10)'">
    <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:var(--primary);margin-bottom:6px">Free Tool</div>
    <div style="font-size:14px;font-weight:700;color:var(--foreground);line-height:1.4">ICM Calculator</div>
    <div style="font-size:12px;color:var(--muted-foreground);margin-top:4px">Run your own stacks and deals</div>
  </a>
</div>
`.trim(),
};

export default POST;
