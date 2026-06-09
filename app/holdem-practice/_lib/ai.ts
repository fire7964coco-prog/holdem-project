// 홀덤 연습 게임 — 간단한 규칙 기반 AI (독립 모듈)

import { evaluateBest } from "./evaluator";
import { getLegalActions, type GameState, type Action } from "./engine";

/** 프리플랍 핸드 강도 (0~1 근사치) */
function preflopStrength(hole: { rank: number; suit: number }[]): number {
  if (hole.length < 2) return 0;
  const [a, b] = hole;
  const high = Math.max(a.rank, b.rank);
  const low = Math.min(a.rank, b.rank);
  const pair = a.rank === b.rank;
  const suited = a.suit === b.suit;
  const gap = high - low;

  let score = 0;
  if (pair) {
    // 포켓페어: 22(0.45) ~ AA(0.95)
    score = 0.45 + ((a.rank - 2) / 12) * 0.5;
  } else {
    score = (high - 2) / 12 * 0.4 + (low - 2) / 12 * 0.2;
    if (suited) score += 0.1;
    if (gap === 1) score += 0.08;
    else if (gap === 2) score += 0.04;
    if (high === 14) score += 0.06; // 에이스 보너스
  }
  return Math.max(0, Math.min(1, score));
}

/** 포스트플랍 핸드 강도: 족보 카테고리 기반 (0~1) */
function postflopStrength(hole: { rank: number; suit: number }[], board: { rank: number; suit: number }[]): number {
  const result = evaluateBest([...hole, ...board]);
  // category 0~8 → 0~1 매핑, 약간의 보정
  const base = result.category / 8;
  return Math.max(0, Math.min(1, base + 0.05));
}

/**
 * AI 한 명의 액션을 결정한다. 순수 함수: 상태를 읽고 Action 만 반환.
 */
export function decideAction(state: GameState, seat: number): Action {
  const p = state.players[seat];
  const legal = getLegalActions(state, seat);
  const pot = state.players.reduce((sum, pl) => sum + pl.committed, 0);
  const toCall = legal.callAmount;

  const strength =
    state.stage === "preflop"
      ? preflopStrength(p.hole)
      : postflopStrength(p.hole, state.board);

  const rand = Math.random();

  // 콜 비용 대비 팟 비율
  const potOdds = toCall > 0 ? toCall / (pot + toCall) : 0;

  // 베팅이 없는 상황 (체크 가능)
  if (legal.canCheck) {
    // 강하면 밸류 베팅, 약하면 가끔 블러프
    if (strength > 0.6 && legal.canRaise && rand < 0.8) {
      return raiseTo(state, seat, pot, 0.6);
    }
    if (strength < 0.35 && legal.canRaise && rand < 0.12) {
      return raiseTo(state, seat, pot, 0.5); // 가벼운 블러프
    }
    return { type: "check" };
  }

  // 베팅을 마주한 상황
  // 매우 강함: 자주 레이즈
  if (strength > 0.75) {
    if (legal.canRaise && rand < 0.7) return raiseTo(state, seat, pot, 0.7);
    return legal.canCall ? { type: "call" } : { type: "check" };
  }

  // 중간: 콜 위주, 가끔 폴드/레이즈
  if (strength > 0.45) {
    if (potOdds > 0.5 && rand < 0.4) return { type: "fold" };
    if (legal.canRaise && rand < 0.12) return raiseTo(state, seat, pot, 0.6);
    return legal.canCall ? { type: "call" } : { type: "check" };
  }

  // 약함: 콜 비용이 작거나 가끔 블러프 콜
  if (strength > 0.25) {
    if (potOdds < 0.25 && rand < 0.6) return legal.canCall ? { type: "call" } : { type: "check" };
    return { type: "fold" };
  }

  // 매우 약함: 거의 폴드, 공짜면 체크
  if (toCall === 0) return { type: "check" };
  return { type: "fold" };
}

/** 팟 대비 비율로 레이즈 목표액 계산 */
function raiseTo(state: GameState, seat: number, pot: number, potFraction: number): Action {
  const legal = getLegalActions(state, seat);
  const raiseSize = Math.round((state.currentBet + pot * potFraction) / 50) * 50;
  const target = Math.max(legal.minRaiseTo, Math.min(raiseSize, legal.maxRaiseTo));
  return { type: "raise", amountTo: target };
}
