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
    a: "Enter the remaining players, positive stacks and payouts from highest to lowest (equal prizes are allowed). For a call/fold decision, calculate your value after each possible outcome — win, tie or loss — multiply each by its actual probability, and add them. Compare that weighted value with your value after folding, using the resulting stacks and remaining prizes in each scenario. If you bust, use the prize you actually receive, which may be zero on the bubble. This stack calculator does not supply the hand-outcome probabilities.",
  },
  {
    q: "What does the “ICM value” in this calculator mean?",
    a: "The prize money your stack is expected to collect under ICM, given the stacks and payouts. It is a model value, not a guaranteed payment. With multiple paid places, chips generally have diminishing marginal prize value, so doubling your chips need not double your ICM value. The exact relationship depends on the payout structure and all remaining stacks.",
  },
  {
    q: "When should you use the ICM calculator?",
    a: "Whenever the payouts are fixed by finishing position and the money is close: on the bubble, at a final table, when a deal is proposed, and in satellites where every seat pays the same. It does not apply to cash games, where a chip is always worth its face value.",
  },
  {
    q: "Is ICM the same as chip EV?",
    a: "No. Chip EV counts chips; ICM counts expected prize money. A call can gain chips in expectation yet lose prize value, because losing removes your chance at higher payouts while doubling up does not usually double your prize value. Busting still pays any prize already secured. ICM often tightens all-in calling ranges, but the effect depends on stacks and payouts rather than applying to every action equally.",
  },
  {
    q: "I'm the chip leader — why is my ICM value lower than my chip share?",
    a: "First place pays only its listed prize, not the whole pool, while smaller stacks still have a chance to collect the other prizes. In the bubble example above the leader holds 40% of the chips but 33.3% of the prize value, and the shortest stack's prize share is higher than its chip share. The difference describes that payout distribution; it is not itself a measure of a particular call's risk premium.",
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
    a: "A chip-profitable call can lose prize value when elimination costs more than a double-up gains. Medium stacks often face the largest risk premium, especially when covered and smaller stacks can bust first. An extremely short stack about to be blinded out has less survival value to protect. Do not fold or shove by stack label alone: compare the actual ranges, coverage, payouts and probabilities. A covering stack can sometimes exploit tighter calling ranges, but wider aggression is not automatic.",
  },
];
