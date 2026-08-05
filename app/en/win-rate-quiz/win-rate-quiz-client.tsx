"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import { EN_NAMES } from "../../win-rate-quiz/_equity";
import { ANTE, STACK, SAMPLES, MIN_SAMPLES } from "../../win-rate-quiz/_engine";

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
  tableNote: "6-max table · pick how many see the flop",
  playersBtn: (n) => `${n} players`,
  loading: "Shuffling and running the numbers…",

  myEquity: "Your equity",
  vsOpponents: (n) => (n === 0 ? "no one left" : `against ${n} opponent${n > 1 ? "s" : ""}`),
  basisRandom: "vs random hands",
  basisRange: "vs hands matching their actions",
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
  outsLabel: (n) => `${n} card${n > 1 ? "s" : ""} complete your draw`,
  outsBreak: (f, s) =>
    [f > 0 ? `${f} for the flush` : "", s > 0 ? `${s} for the straight` : ""].filter(Boolean).join(" · "),
  hitLabel: "Chance you hit the draw (table math)",
  winLabel2: "Chance you win the pot (simulated)",
  formulaExpr: (outs, toCome) =>
    toCome === 1 ? `${outs} × 2` : outs > 8 ? `${outs} × 4 − ${outs - 8}` : `${outs} × 4`,
  formulaCaveat:
    "These measure different things. The top one is the chance you HIT; the bottom is the chance you WIN. You can hit and still lose if an opponent improves further, and you can miss and still win. The verdict uses the bottom number.",
  noDrawNote: (samples) =>
    `You have no flush or straight draw right now, so the “outs × 2/4” shortcut does not apply here. The equity above comes from running ${samples} hands against every holding that matches the actions you saw.`,

  ruleTitle: "What this simulator assumes",
  ruleText: (
    <>
      <p className="mb-2">
        <b className="text-foreground">Opponents follow the rules below and nothing else.</b> Real players never
        play this way — position, opponent, stack depth and table image change everything. Treat it like
        &ldquo;assume no friction&rdquo; in a physics problem.
      </p>
      <ul className="list-disc pl-4 space-y-0.5 mb-2">
        <li>Two pair or better → <b className="text-foreground">pot-sized raise</b></li>
        <li>One pair, or a flush/straight draw → <b className="text-foreground">half-pot bet</b></li>
        <li>Anything else → <b className="text-foreground">fold</b> (mucked, just like live play)</li>
      </ul>
      <p className="mb-2">
        When anyone raises, every player still in — one-pair hands and draws included — calls that pot-sized
        amount, and a bet bigger than the remaining stack is capped at an all-in.
      </p>
      <p className="mb-2">
        <b className="text-foreground">Your equity is calculated as if you cannot see their cards.</b> From the
        flop on, each opponent&rsquo;s range is every hand that would have taken exactly the actions you saw —
        after a raise, only two pair or better remains. The players who fold on screen also drop out of the
        math. Only preflop treats opponents as fully random.
      </p>
      <p className="mb-2">
        <b className="text-foreground">The verdict is pure pot odds.</b> Implied odds, opponent tendencies and
        bluffing are not in it. Draws in particular often justify a call even when the raw pot odds come up
        just short.
      </p>
      <p>
        Everyone posts {ANTE} to start with a {STACK.toLocaleString()} stack. You never fold — that is the point,
        so you can see the river and review. Equity is a simulated estimate, and the sample size scales to your
        device between <b className="text-foreground">{MIN_SAMPLES.toLocaleString()} and {SAMPLES.preflop.toLocaleString()} runs</b>{" "}
        (roughly ±0.2–0.6%p) so a slower phone never freezes for seconds at a time.
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
      <div className="text-center mb-2 lg:mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Equity Simulator 🃏</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Play it blind — then find out where you should have folded</p>
      </div>
      <WinRateSimulator ui={EN_UI} />
    </div>
  );
}
