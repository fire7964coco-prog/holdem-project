"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import { EN_NAMES } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES } from "../../win-rate-quiz/_engine";

/**
 * 영어판 승률 시뮬레이터 (2026-08-04 신설 · 2026-08-05 실전 모드로 개편).
 *
 * ★테이블 UI도 한국어판과 **같은 파일**을 쓴다(`_simulator.tsx`).
 *   언어별로 다른 건 **아래 문자열뿐**이고, 숫자·좌석 배치·팟오즈는 전 언어 동일하다.
 */

const EN_UI: QuizUI = {
  names: EN_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "You",
  folded: "Folded",
  raise: "Raise",
  call: "Call",
  check: "Check",
  tableNote: "6-max or 9-handed table · pick how many see the flop (2–6)",
  playersBtn: (n) => `${n} players`,
  playersLabel: "Players",
  tableBtn: (n) => `${n}-max`,
  styleLabel: "Opponent style",
  styleNames: { standard: "Normal", tight: "Tight", loose: "Loose", aggressive: "Aggro" },
  loading: "Shuffling and running the numbers…",

  myEquity: "Your equity",
  vsOpponents: (n) => (n === 0 ? "no one left" : `against ${n} opponent${n > 1 ? "s" : ""}`),
  basisSeat: "vs seat-based ranges",
  basisRange: "vs hands matching their actions",
  roleOpen: "Opened",
  roleDefend: "Defended",
  winShort: "Win",
  tieShort: "Tie",
  loseShort: "Lose",
  revealedLabel: "👀 Against the exact hands shown",
  revealedNote: (gap) =>
    `The number above assumes you cannot see their cards, which is why it is ${gap}%p apart. The top figure is the one you would actually decide on.`,

  potOddsTitle: "Pot odds — the equity a call needs to break even",
  potLabel: "Pot",
  potBeforeLabel: "Pot (before betting)",
  toCallLabel: "To call",
  requiredLabel: "Equity needed",
  noBet: "Nobody bet. You see the next card for free.",
  verdictCall: "Call",
  verdictFold: "Fold",
  impliedNote: "That said, if you can win more when you hit (implied odds), calling can still be right.",

  revealBtn: (next) => `Deal the ${next} →`,
  newHandBtn: "Deal a new hand 🔄",
  showCards: "👀 Peek at their cards",
  hideCards: "🙈 Hide their cards",

  wonByFold: (pot) => `Everyone folded — you take the ${pot.toLocaleString()} pot`,
  splitLabel: (names) => `Split pot — ${names.join(" · ")} tie`,
  winLabel: (name, cat) => `${name} wins · ${cat}`,

  reviewTitle: "📋 Review — where should you have folded?",
  reviewCols: ["Street", "Your equity", "Needed", "Verdict"],
  reviewNoMistake: "✅ Calling was right the whole way down.",
  reviewMistake: (street) => `⚠️ By the ${street.toLowerCase()}, folding was already correct. That was your spot to get out.`,
  reviewInvested: (invested, pot) => `You put in ${invested.toLocaleString()} · final pot ${pot.toLocaleString()}`,

  formulaTitle: "📐 Where this number comes from",
  outsLabel: (n) => `${n} card${n > 1 ? "s" : ""} complete or improve your hand`,
  outsBreak: (o, both) =>
    [
      o.flush > 0 ? `${o.flush} for the flush` : "",
      o.straight > 0 ? `${o.straight} for the straight` : "",
      o.set > 0 ? `${o.set} for a set or trips` : "",
      o.twoPair > 0 ? `${o.twoPair} for two pair` : "",
      o.over > 0 ? `${o.over} to pair an overcard` : "",
      both > 0 ? `${both} count for two of these (counted once)` : "",
    ].filter(Boolean).join(" · "),
  hitLabel: "Chance one of these cards comes (table math)",
  winLabel2: "Chance you win the pot (simulated)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 9 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "These measure different things. The top one is the chance you HIT; the bottom is the chance you WIN. You can hit and still lose if an opponent improves further, and you can miss and still win. The verdict uses the bottom number.",
  noDrawNote: (basis, n) =>
    basis === "seat"
      ? `It is still preflop, so the “outs × 2/4” shortcut does not apply yet. The equity above comes from running ${n} hands against the hands each opponent would plausibly enter the pot with from their seat.`
      : `You have no flush or straight draw and no card that moves you up a hand category to a set, two pair or an overcard pair, so the “outs × 2/4” shortcut does not apply here. The equity above comes from running ${n} hands against every holding that matches the actions you saw.`,
  chartTitle: "📈 Equity street by street — all cards face up",
  resultTabs: ["📋 Review", "📈 Equity flow", "🃏 Odds"],
  solverTitle: "See this spot in the GTO solver",
  solverOpen: "Open the solver's Flop study",
  solverNote: (info) => {
    const gto = "It shows the flop strategy when both players play GTO (pre-calculated results · 6-max 100bb · flop only), so the ranges, bet sizes and opponent rules differ from this simulator's.";
    switch (info.kind) {
      case "spot":
        return info.flop
          ? `${info.opener} open · ${info.caller} call · flop ${info.flop.map((c) => c.rank + c.suit).join("")} — opens the same seats and the same flop in the solver's Flop study. ${gto}`
          : `${info.opener} open · ${info.caller} call — this hand ended before the flop, so only the seat matchup opens. Pick the three flop cards in the solver. ${gto}`;
      case "notReady":
        return `${info.opener} open · ${info.caller} call is not pre-calculated in the solver's Flop study yet. Pick a nearby seat matchup, or calculate it yourself in the solver.`;
      case "multiway":
        return `${info.players} players saw this flop. The solver's pre-calculated results cover heads-up pots only, so this hand can't open as is — pick a matchup against one opponent in Flop study.`;
      case "table9":
        return "The solver's pre-calculated results are for 6-max tables, so a 9-handed hand can't open as is — pick the nearest seat matchup in Flop study.";
    }
  },
  solverLang: "en",
  chartRangeLegend: "What you saw",
  chartNote: "Solid lines are each seat's equity with every hand face up; the dashed line is the equity you saw on screen without knowing their cards. A folded player's line runs up to the street before the fold.",
  quizToggle: "🎯 Quiz",
  quizGuessTitle: "What's your equity?",
  quizGuessHint: "Set your guess with the slider",
  quizSubmit: "Check answer",
  quizCallSubmit: "Call → check",
  quizFoldSubmit: "Fold → check",
  quizResult: (guess, err, points) => `Your guess ${guess}% · off by ${err}%p · ${points} pts`,
  quizChoiceResult: (ok, verdict) => (ok ? `Right call (${verdict})` : `Wrong — the answer was ${verdict}`),
  quizStats: (s) => `${s.hands} hand${s.hands === 1 ? "" : "s"} · avg off ${s.avgErr}%p · ${s.hits}/${s.decisions} right · ${s.points.toLocaleString()} pts`,
  quizReset: "Reset",
  quizResetConfirm: "Clear the quiz record saved in this browser? This can't be undone.",
  quizInvite: "Log in to keep this record in your account and see it on any phone or PC.",
  quizInviteLink: "Log in",
  quizGuessCol: "Guess",
  quizChoiceCol: "Pick",
  quizHandSummary: (avgErr, hits, decisions, points) =>
    `This hand: avg error ${avgErr}%p${decisions > 0 ? ` · ${hits}/${decisions} decisions right` : ""} · ${points} pts`,
  quizGuessLegend: "Your guess",
  customToggle: "✍️ Set hand",
  customTitle: "Set up a hand — replay one you played",
  customHint: "Tap a slot, then pick a card below. Empty slots are dealt at random, and opponents still get hands from their seat ranges.",
  customPos: "Your seat",
  customRandom: "Random",
  customHero: "Your hand",
  customBoard: "Board",
  customBoardSlots: ["Flop", "Flop", "Flop", "Turn", "River"],
  customStart: "Deal this hand →",
  customClear: "Clear all",
  customClose: "Close",
  customOff: "Back to random hands",
  customActive: "Your set-up hand · new hands keep these cards",
  customEdit: "Edit",

  ruleTitle: "What this simulator assumes",
  ruleText: (style) => (
    <>
      <p className="mb-2">
        <b className="text-foreground">Opponents follow the rules below and nothing else.</b> Real players never
        play this way — position, opponent, stack depth and table image change everything. Treat it like
        &ldquo;assume no friction&rdquo; in a physics problem.
      </p>
      <p className="mb-1">
        Opponent style now: <b className="text-foreground">{EN_UI.styleNames[style]}</b> (the whole table plays the same style · change it in the picker above)
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Two pair or better → <b className="text-foreground">{style === "aggressive" ? "raise of 150% pot (overbet)" : "pot-sized raise"}</b></li>
        {style === "standard" && <li>One pair, or a flush/straight draw → <b className="text-foreground">half-pot bet</b></li>}
        {style === "tight" && <>
          <li>One pair that is top pair or better made with a hole card (overpairs included), or a flush/straight draw → <b className="text-foreground">half-pot bet</b></li>
          <li>Any weaker pair (including a pair that is only on the board) → <b className="text-foreground">fold</b></li>
        </>}
        {style === "loose" && <li>One pair, a flush/straight draw, or a hole card higher than every board card (an overcard) → <b className="text-foreground">half-pot bet</b></li>}
        {style === "aggressive" && <>
          <li>Flush/straight draw → <b className="text-foreground">raise (semi-bluff)</b></li>
          <li>One pair → <b className="text-foreground">half-pot bet</b></li>
          <li>No pair and no draw, but an overcard → <b className="text-foreground">raise (bluff)</b></li>
        </>}
        <li>Anything else → <b className="text-foreground">fold</b> (mucked, just like live play)</li>
      </ul>
      <p className="mb-2">
        Rules are checked from the top; the first line that fits decides the action. A draw means a four-card flush or straight pattern on the flop or turn that uses at least one hole card (there are no draws on the river).{" "}
        {style === "aggressive" && "Every Aggro raise, semi-bluffs and bluffs included, is 150% of the pot. "}
        When anyone raises, every player still in calls that raise amount, and a bet bigger than the remaining
        stack is capped at an all-in. There are no check-raises — each opponent acts once per street by the rules, and there is no step where a player checks and then responds again. You never bet here; you just call to the river.
        Preflop ranges (below) are the same whatever the style.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Your equity is calculated as if you cannot see their cards.</b> From the
        flop on, each opponent&rsquo;s range is the hands in their seat-based preflop range (below) that would have made
        the actions you saw under the chosen style&rsquo;s rules — against Normal opponents, a raise leaves only two pair
        or better; against Aggro opponents, draws and overcard bluffs stay in too. The players who fold on screen
        also drop out of the math.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Opponents&rsquo; preflop hands come from seat-based ranges.</b> Of the
        players in the pot, whoever acts first preflop is treated as the opener, and everyone else as having
        defended that open with a call or a 3-bet (opening range · defending range). The ranges are 6-max
        100bb cash consensus ranges cross-checked across several public sources, with borderline hands mixed
        at 25/50/75%. Where no chart exists (HJ facing a UTG open · SB facing a UTG, HJ or CO open) and for the
        third player onward, the nearest defending chart stands in. There are no 9-handed charts, so at a 9-max
        table UTG, UTG+1, UTG+2 and LJ use the 6-max UTG chart and every other seat uses the 6-max chart of the
        same name (an early seat defending another early seat&rsquo;s open, or the HJ defending one, uses the CO vs UTG chart) — the first three seats of a 9-max table come out wider than they really are. Only your own hand is random (unless you set it yourself) — the tool lets
        you play any two cards to the river. A 3-bet does not change the pot size here (simplified).
      </p>
      <p className="mb-2">
        <b className="text-foreground">The verdict is pure pot odds.</b> Implied odds are not in it, and
        opponent tendencies and bluffs only enter the ranges as far as the chosen style&rsquo;s rules go. Draws in particular often justify a call even when the raw pot odds come up
        just short.
      </p>
      <p>
        Everyone posts {ANTE} to start with a {STACK.toLocaleString()} stack. You never fold — that is the point,
        so you can see the river and review. Equity is a simulated estimate with a fixed sample size:{" "}
        <b className="text-foreground">{SAMPLES.preflop.toLocaleString()} runs</b> preflop and{" "}
        <b className="text-foreground">{SAMPLES.postflop.toLocaleString()} runs</b> from the flop on (standard error roughly 0.25–0.35%p).
        Each hand uses a fixed random seed, so the same hand shows the same numbers on any device. Ties are split
        by the number of players who share the pot (half each in a two-way tie).
      </p>
      <p className="mt-2">
        <b className="text-foreground">When you show their cards</b>, every seat gets its equity with all hands known. From
        the flop on this counts every remaining card exactly (preflop alone is {SAMPLES.known.toLocaleString()} simulated runs),
        and it never feeds the equity or the call/fold verdict on screen — you would not have that information at a
        real table.
      </p>
      <p className="mt-2">
        <b className="text-foreground">🎯 With Quiz on</b>, the equity and verdict stay hidden on each street until you guess
        your equity. On streets where someone bets, you also pick call or fold. The answer is “Your equity” above (the
        figure without seeing their cards), and each guess scores <b className="text-foreground">100 − 4 × error (%p)</b>
        (zero once you are 25%p or more off). A call/fold pick counts as right when it matches the pot-odds verdict. Your
        running totals stay in this browser, and when you are logged in they are also saved to your account so they
        follow you to other devices (the cards and board are not saved).
      </p>
      <p className="mt-2">
        <b className="text-foreground">✍️ Set hand</b> lets you pick your seat, your hole cards and the board to replay a
        hand you actually played. Empty slots are dealt at random. You cannot pick your opponents&rsquo; cards — you would
        not know them at a real table either — so they still come from the seat-based ranges, and the on-screen equity
        keeps the same “cards unknown” premise. Even with the board set in advance, each street&rsquo;s equity only uses
        the cards dealt so far. Because replaying the same hand would let you memorize the answers, set-up hands are not
        added to your quiz record.
      </p>
    </>
  ),
  footer: (
    <>
      Want the math?{" "}
      <a href="/en/blog/holdem-pot-odds" className="text-primary underline">Pot odds explained →</a>
      {" · "}
      <a href="/en/blog/holdem-position-play" className="text-primary underline">Why position matters</a>
      {" · "}
      <a href="/en/calculator" className="text-primary underline">Odds calculator</a>
    </>
  ),
};

export default function WinRateQuizClientEn() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 py-3 lg:py-6">
      <div className="text-center mb-1.5 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Equity Simulator 🃏</h1>
        <p className="hidden sm:block text-xs text-muted-foreground mt-0.5">Play it blind — then find out where you should have folded</p>
      </div>
      <WinRateSimulator ui={EN_UI} />
    </div>
  );
}
