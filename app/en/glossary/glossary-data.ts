/**
 * `/en/glossary` 공유 데이터 — 서버 `page.tsx`(JSON-LD)와 화면이 **같은 배열**을 쓴다.
 *
 * ★2026-08-13 분리. 구 코드는 `<SEO schema={jsonLd}>`로 넘기던 죽은 코드였다.
 * 🔴 타입도 바꿨다: 구 코드는 질문을 `What does "{term}" mean in poker?`로 **합성**했는데
 *   그 문장은 화면에 없다(용어 카드 목록이다) → 용어집의 정확한 타입인 **DefinedTermSet**으로.
 *   게다가 `TERMS.slice(0, 8)`로 8개만 넣고 있었다 — 전수로 바꿨다.
 */

export interface Term { term: string; desc: string; }

export const TERMS: Term[] = [
  { term: "3-Bet", cat: "Action", desc: "The first re-raise of a hand. The big blind counts as the first bet and the open-raise as the second, so the re-raise is the 3-bet. It signals a very strong hand — or a bluff." },
  { term: "All-in", cat: "Action", desc: "Betting your entire stack in one move. Once you're all-in you can't bet again, and a side pot forms if opponents have more chips behind." },
  { term: "Ante", cat: "Action", desc: "A small forced bet posted by every player before the deal to build the pot. Common in later tournament levels, unlike blinds, which only two players post." },
  { term: "Backdoor", cat: "Board", desc: "A draw that needs both the turn and the river to complete — for example, a backdoor flush when you flop just one extra card of your suit." },
  { term: "Bad Beat", cat: "Slang", desc: "Losing a hand you were a big favorite to win, usually to an unlikely turn or river card." },
  { term: "Bankroll", cat: "Slang", desc: "The money you've set aside specifically for poker, kept separate from everyday finances so downswings don't hurt your life." },
  { term: "Blinds", cat: "Action", desc: "Forced bets posted before the cards are dealt: the small blind (SB) sits left of the button, the big blind (BB) next. They create action every hand." },
  { term: "Bluff", cat: "Action", desc: "Betting or raising with a weak hand to make a better hand fold. Reckless bluffing bleeds chips; well-timed bluffs win pots you'd otherwise lose." },
  { term: "Board", cat: "Board", desc: "The community cards in the middle of the table. A 'wet' board is draw-heavy and dangerous; a 'dry' board offers few draws." },
  { term: "Button (BTN)", cat: "Position", desc: "The dealer position, marked by a round disc. It acts last after the flop — the most profitable seat — and moves one seat clockwise each hand." },
  { term: "Call", cat: "Action", desc: "Matching the current bet to stay in the hand. A player who calls far too often is called a 'calling station'." },
  { term: "Check", cat: "Action", desc: "Passing the action without betting — only possible when no one has bet before you in the round." },
  { term: "Check-Raise", cat: "Action", desc: "Checking first, then raising after an opponent bets. A powerful move to trap opponents holding a strong hand, or to punish habitual bettors." },
  { term: "Continuation Bet (C-Bet)", cat: "Action", desc: "A bet on the flop by the player who raised preflop, keeping the initiative they already had. Effective because opponents often miss the flop." },
  { term: "Cooler", cat: "Slang", desc: "A hand where two very strong holdings collide and someone was always going to lose big — like a set running into a higher set. Rarely avoidable." },
  { term: "Draw", cat: "Hand", desc: "An unfinished hand that becomes strong if the right card arrives — most often a flush draw or a straight draw." },
  { term: "Equity", cat: "Math", desc: "Your share of the pot based on your chance to win. A hand that's 60% to win has 60% equity in the current pot." },
  { term: "Flop", cat: "Board", desc: "The first three community cards, dealt at the same time, followed by the second betting round." },
  { term: "Fold", cat: "Action", desc: "Giving up the hand and forfeiting any chips already in the pot. It stops further losses. Also called 'mucking'." },
  { term: "GTO", cat: "Math", desc: "Game Theory Optimal — a balanced, unexploitable strategy that can't be beaten long-term, even when opponents know exactly what you're doing." },
  { term: "Gutshot", cat: "Hand", desc: "An inside straight draw needing one specific rank — just 4 outs. Example: 5-6-8-9 needing a 7." },
  { term: "Hand Range", cat: "Math", desc: "The full set of hands an opponent could hold in a given spot. 'Putting someone on a range' means narrowing down their likely holdings." },
  { term: "ICM", cat: "Math", desc: "Independent Chip Model — converts tournament chips into real cash-prize value. Essential for correct call/fold decisions on the bubble and at the final table." },
  { term: "Kicker", cat: "Hand", desc: "A side card that breaks a tie when two players share the same made hand. Example: on an ace pair, A-K beats A-Q because the king outkicks the queen." },
  { term: "Limp", cat: "Action", desc: "Just calling the big blind preflop instead of raising. Usually a passive, weak play that invites others in cheaply." },
  { term: "Nuts", cat: "Hand", desc: "The best possible hand given the current board. If you 'have the nuts', you cannot lose the hand as it stands." },
  { term: "Offsuit", cat: "Hand", desc: "Two cards of different suits (e.g., A♠K♦). Slightly weaker than the suited version of the same hand because it's far less likely to make a flush." },
  { term: "Outs", cat: "Math", desc: "The cards left in the deck that improve you to the winning hand. A flush draw has 9 outs; an open-ended straight draw has 8." },
  { term: "Overpair", cat: "Hand", desc: "A pocket pair higher than every card on the board — for example, QQ on a J-7-3 flop." },
  { term: "Position", cat: "Position", desc: "Where you act in the betting order. Acting later ('in position') is a major edge because you see opponents act before you decide." },
  { term: "Pot", cat: "Board", desc: "The total chips wagered in a hand. The winner takes it all; tied hands split it evenly (a split pot)." },
  { term: "Pot Odds", cat: "Math", desc: "The ratio of your call to the pot: call ÷ (pot + call). If your chance to win beats that percentage, calling is profitable long-term." },
  { term: "Preflop", cat: "Board", desc: "The first betting round, before any community cards, when each player has only their two hole cards." },
  { term: "Rake", cat: "Slang", desc: "The small cut the house or poker site takes from each pot or tournament entry — how the room makes money." },
  { term: "Raise", cat: "Action", desc: "Increasing the current bet. It seizes initiative and pressures opponents to fold or commit more chips." },
  { term: "River", cat: "Board", desc: "The fifth and final community card, followed by the last betting round before showdown." },
  { term: "Semi-Bluff", cat: "Action", desc: "Betting a hand that's weak now but can improve — like a flush draw. Safer than a pure bluff because you can still hit and win if called." },
  { term: "Set", cat: "Hand", desc: "Three of a kind made with a pocket pair plus one matching board card. Very well disguised — opponents rarely see it coming. (Compare 'Trips'.)" },
  { term: "Showdown", cat: "Board", desc: "After the final bet, remaining players reveal their cards. The best five-card hand wins the pot." },
  { term: "SPR", cat: "Math", desc: "Stack-to-Pot Ratio — effective stack ÷ pot. A low SPR favors committing with strong made hands; a high SPR rewards draws and post-flop skill." },
  { term: "Stack", cat: "Slang", desc: "The chips a player has on the table. A 'deep stack' is large relative to the blinds; a 'short stack' is small." },
  { term: "Tilt", cat: "Slang", desc: "Playing emotionally and poorly after a bad beat or frustration. It's the leak that costs most players more than any single hand ever does." },
  { term: "Trips", cat: "Hand", desc: "Three of a kind made with one hole card and a pair on the board. Stronger-looking to opponents than a set, so it gets less value. (Compare 'Set'.)" },
  { term: "Turn", cat: "Board", desc: "The fourth community card, dealt after the flop, followed by its own betting round." },
  { term: "Value Bet", cat: "Action", desc: "Betting a strong hand to get called by a worse one — the opposite of a bluff, and where most long-term profit comes from." },
  { term: "Wheel", cat: "Hand", desc: "The lowest possible straight, A-2-3-4-5, in which the ace plays low." },
];
