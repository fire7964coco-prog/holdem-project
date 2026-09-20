// EN calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and the CalculatorTool (visible render).
// ★2026-09-17 8 → 17 questions, then rewritten after the 4 lenses (SEO · dealer · copy · math):
//   calculator-form questions only — definitions ("What is ICM in poker?", "Does ICM apply to cash games?",
//   "pot odds vs implied odds") belong to lib/posts-en/{holdem-icm,holdem-pot-odds}.ts and were retargeted.
//   Sources: PAA for "icm calculator" / "pot odds calculator" / "poker odds calculator" (docs/keyword-bank/en-calculator.md §3).
// §13: every figure comes from scripts/calc-reference-tables.ts — AA vs KK 81.9% is the all-suit average (81.95);
//   AK vs pocket pair bands follow settled-decisions §3-F; 19.1% = 9/47 (flop → next card), 19.6% = 9/46 (turn → river).
// Render order on the page: tool → ICM examples → guide cards → quick-reference tables → FAQ, so "above" is correct.
export const CALCULATOR_FAQ_EN: { q: string; a: string }[] = [
  {
    q: "How does a poker odds calculator work?",
    a: "It deals out every card still to come and counts how often each hand wins. With every hand known, this calculator enumerates every possible runout on the flop and turn exactly (990 on the flop heads-up, 44 on the turn; fewer with more players, and the river is already complete). Preflop there are 1.7 million boards per matchup, and a random-hand opponent multiplies that again, so in those spots it samples 60,000 random runouts instead and says so under the result — the figure moves by about 0.3 points between runs.",
  },
  {
    q: "What are the odds of AA vs KK?",
    a: "Pocket aces win about 82% of the time against pocket kings preflop (81.9% averaged over every suit combination, with a 0.5% chance of a tie). AA against AK suited is about 88% to 12%, and KK against AK suited about 66% to 34%.",
  },
  {
    q: "Is AK vs a pocket pair a coin flip?",
    a: "Close to one against every pair below aces and kings, though never quite 50/50. Offsuit AK has about 46–47% equity against 22–44, about 45% against 55–99 and about 43% against TT–QQ; suited AK adds roughly 2.5–3 points. Against KK it drops to about 30% and against AA to about 7%, so the label only fits the pairs the ace and king are both above.",
  },
  {
    q: "What is the 4 and 2 rule in poker?",
    a: "A mental shortcut for draw odds: with two cards to come (flop to river) multiply your outs by 4; with one card to come (turn to river) multiply by 2. For 9 outs that gives 36% and 18%; the exact figures are in the next answer. The times-4 half stays within about a point up to 9 outs and drifts roughly a point per out after that (15 outs is really 54.1%, not 60%); the times-2 half runs low, and more so the more outs you have (1.6 points at 9 outs, 2.6 at 15). And times 4 only applies when you will see both cards without paying again.",
  },
  {
    q: "How often does a flush draw hit?",
    a: "With 9 outs a flush draw completes 35.0% of the time from the flop to the river (two cards to come), 19.1% on the next card from the flop, and 19.6% from the turn to the river.",
  },
  {
    q: "How do you calculate pot odds?",
    a: "Call amount ÷ (pot after the bet + call amount) = the minimum equity you need. For example, a 3,000 call when the pot already holds 10,000 including the bet is 3,000 ÷ 13,000 ≈ 23.1%, so calling is profitable when your equity is above 23.1%. A full-pot bet always requires 33.3%; a half-pot bet 25%.",
  },
  {
    q: "What pot odds do I need to call with a flush draw?",
    a: "Facing a single bet on the flop, count only the next card: 9 outs hit 19.1% of the time, so you need pot odds better than about 4.2 to 1 — or implied odds that make up the difference, which requires your opponent to have chips behind and a hand that will pay. Discount that heavily when you are not drawing to the nuts: a second-best flush that gets paid loses far more than it wins. If you are guaranteed to see both cards (an all-in), the 35.0% two-card figure applies instead.",
  },
  {
    q: "How do I use the implied odds calculator?",
    a: "Open the pot odds tab and switch on “Implied odds”, then enter the extra amount you expect to win on later streets when you hit. The calculator adds it to the pot and lowers the equity your call needs right now. Keep the extra amount honest: it only counts if your opponent has that much behind and will actually pay when your draw comes in.",
  },
  {
    q: "How do I check which poker hand wins?",
    a: "In the equity calculator, enter both hole cards and all five board cards: with a complete board it names the winner and the winning hand, or reports a chop. To grade a single hand, drop 5–7 cards into the hand evaluator and it finds the best five-card combination automatically.",
  },
  {
    q: "How do I use the ICM calculator?",
    a: "Enter the number of players, each player's chip stack, and the payout structure (1st–6th). The calculator instantly shows how much each stack is actually worth in prize money, next to what a chip chop would pay. For a call/fold decision, run it twice — once with the stacks you would have after winning, once after busting — and compare the average against your value if you just fold.",
  },
  {
    q: "What does the “ICM value” in this calculator mean?",
    a: "Your real prize-money value: the share of the remaining prize pool your stack is expected to collect, given every player's chance of finishing in each place. It is not your chip share: with more than one place paid, doubling your chips never doubles your ICM value, which is why the chip leader's ICM value sits below their chip share.",
  },
  {
    q: "When should you use the ICM calculator?",
    a: "Whenever the payouts are fixed by finishing position and the money is close: on the bubble, at a final table, when a deal is proposed, and in satellites where every seat pays the same. It does not apply to cash games, where a chip is always worth its face value.",
  },
  {
    q: "Is ICM the same as chip EV?",
    a: "No. Chip EV counts chips; ICM counts prize money. A call can be profitable in chips yet lose prize equity, because busting costs you every payout you were still in line for. Near the bubble and at final tables the two diverge most, which is why ICM ranges are tighter than chip-EV ranges.",
  },
  {
    q: "I'm the chip leader — why is my ICM value lower than my chip share?",
    a: "Because winning still pays only 1st-place money, not the whole prize pool, while busting costs you every payout below it. In the bubble example above the leader holds 40% of the chips but only 33.3% of the prize money, and the shortest stack is worth more than its chip share.",
  },
  {
    q: "How do I calculate an ICM (final-table) deal?",
    a: "Enter the current stacks and the remaining prizes; each player's “ICM value” is the baseline deal amount. In practice the table usually leaves an agreed sum — often the gap between first and second — in the middle to play for, and the floor stops the clock and confirms that every remaining player agrees before anything is paid.",
  },
  {
    q: "What's the difference between a chip chop and an ICM deal?",
    a: "A chip chop pays by chip share, an ICM deal by each player's chance of finishing in each place — the worked example above shows the gap ($276 vs $458 for the shortest stack). Which one a room means by chip chop varies: many pay everyone the next payout first and split only the remainder, which lands near ICM, so ask before you agree to either.",
  },
  {
    q: "Why should I fold more on the bubble?",
    a: "On the bubble the prize money you lose by busting is larger than what you gain by winning, as the bubble example above shows, so a call that is profitable in chips can be losing in prize EV. Medium stacks — and short stacks that are not about to be blinded out — should avoid coin flips when calling off. The flip side is that everyone else is folding too, so open and re-shove wider as the aggressor even while you call tighter.",
  },
];
