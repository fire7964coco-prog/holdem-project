// EN calculator FAQ — shared by page.tsx (FAQPage JSON-LD) and calculator-client.tsx (visible render).
// Figures match the worked examples below and the tool output (§13 verified via computeICM).
export const CALCULATOR_FAQ_EN: { q: string; a: string }[] = [
  {
    q: "How do I use the ICM calculator?",
    a: "Enter the number of players, each player's chip stack, and the payout structure (1st–6th). The calculator instantly shows how much each stack is actually worth in prize money — use it for call/fold decisions and deal negotiations on the bubble and at the final table.",
  },
  {
    q: "What is ICM in poker?",
    a: "ICM stands for Independent Chip Model — a mathematical model that converts tournament chips into their real prize-money expectation. The key idea: doubling your chips does not double your prize equity.",
  },
  {
    q: "I'm the chip leader — why is my ICM value lower than my chip share?",
    a: "Because winning still pays only 1st-place money, not the whole prize pool. In the bubble example below, a leader with 40% of the chips has an ICM value of just 33.3% (6.7 points lower), while the shortest stack (13.3% of chips) is worth 16.6% — more than its chip share.",
  },
  {
    q: "How do I calculate an ICM (final-table) deal?",
    a: "You split the remaining prize money in proportion to each player's ICM value. The 'ICM value' this calculator outputs — after you enter current stacks and remaining prizes — is exactly the fair deal amount.",
  },
  {
    q: "What's the difference between a chip chop and an ICM deal?",
    a: "A chip chop splits prizes by raw chip share, favoring the chip leader. An ICM deal reflects each player's probability of finishing in each position, so it's fairer to short stacks. In the example below the short stack gets about $397 under an ICM deal versus $300 under a chip chop — always ask for an ICM deal when you're short.",
  },
  {
    q: "Why should I fold more on the bubble?",
    a: "On the bubble the ICM value you lose by busting is larger than the value you gain by winning. A call that's profitable in chip EV can be losing in prize EV (ICM), so middling stacks in particular should avoid coin flips.",
  },
  {
    q: "How do I estimate equity from outs?",
    a: "Multiply outs × 4 on the flop and × 2 on the turn for an approximate percentage. For example, a flush draw with 9 outs is about 35% on the flop and 19.6% on the turn. Use the outs calculator above for exact numbers.",
  },
  {
    q: "What is the pot odds formula?",
    a: "Call amount ÷ (pot + call amount) = the minimum equity you need. For example, a 3,000 call into a 10,000 pot is 3,000 ÷ 13,000 ≈ 23.1%, so calling is profitable when your equity is above 23.1%.",
  },
];
