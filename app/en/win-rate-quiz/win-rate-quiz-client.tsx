"use client";

import WinRateSimulator, { type QuizUI } from "../../win-rate-quiz/_simulator";
import { EN_NAMES } from "../../win-rate-quiz/_equity";

/**
 * 영어판 승률 시뮬레이터 (2026-08-04 신설 · 2026-08-05 6인 테이블로 전환).
 *
 * ★테이블 UI도 이제 한국어판과 **같은 파일**을 쓴다(`_simulator.tsx`).
 *   원래는 UI를 통째로 복사해 갖고 있었는데, 6좌석·포지션 로직까지 두 벌이 되면
 *   한쪽만 고쳐져 동작이 갈라진다 — 확률 엔진에 대해 이 파일이 스스로 경고하던 문제다.
 *   언어별로 다른 건 **아래 문자열뿐**이고, 숫자와 좌석 배치는 전 언어 동일하다.
 */

const EN_UI: QuizUI = {
  names: EN_NAMES,
  streets: ["Preflop", "Flop", "Turn", "River"],
  hero: "You",
  folded: "Folded",
  tableNote: "6-max table · pick how many stay to showdown",
  playersBtn: (n) => `${n} players`,
  loading: "Shuffling and running the numbers…",
  equityWord: "Equity",
  methodNote: "Exact calculation",
  revealBtn: (next) => `Deal the ${next} →`,
  newHandBtn: "Deal a new hand 🔄",
  splitLabel: (names) => `Split pot — ${names.join(" · ")} tie`,
  winLabel: (name, cat) => `${name} wins · ${cat}`,
  footer: (
    <>
      Want to run your own numbers?{" "}
      <a href="/en/calculator" className="text-primary underline">Poker Odds Calculator →</a>
      {" · "}
      <a href="/en/blog/holdem-position-play" className="text-primary underline">Why position matters</a>
      {" · "}
      <a href="/en/blog/holdem-probability" className="text-primary underline">Learn the math</a>
    </>
  ),
};

export default function WinRateQuizClientEn() {
  return (
    <div className="min-h-screen max-w-md md:max-w-2xl mx-auto px-3 py-6">
      <div className="text-center mb-3">
        <h1 className="font-serif text-2xl font-black text-foreground">Equity Simulator 🃏</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Watch how the odds swing as each card comes out</p>
      </div>
      <WinRateSimulator ui={EN_UI} />
    </div>
  );
}
