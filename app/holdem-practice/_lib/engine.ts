// 홀덤 연습 게임 — 게임 엔진 (독립 모듈)
// 3인 테이블(사람 1 + AI 2), 블라인드 50/100, 사이드팟 지원.

import { type Card, makeDeck, shuffle } from "./cards";
import { evaluateBest, compareResults, type HandResult } from "./evaluator";

export type Stage = "preflop" | "flop" | "turn" | "river" | "showdown" | "handover";

export type ActionType = "fold" | "check" | "call" | "raise";

export interface Player {
  id: number;
  name: string;
  isHuman: boolean;
  chips: number;
  hole: Card[];
  /** 이번 스트리트에 낸 금액 */
  bet: number;
  /** 이번 핸드 전체 누적 베팅 */
  committed: number;
  folded: boolean;
  allIn: boolean;
  hasActed: boolean;
}

export interface PotResult {
  amount: number;
  winners: number[]; // player id
  /** 표시용: 우승 족보 이름 */
  handName?: string;
}

export interface GameState {
  players: Player[];
  deck: Card[];
  board: Card[];
  stage: Stage;
  /** 이번 스트리트 최고 베팅액 */
  currentBet: number;
  /** 최소 레이즈 증분 */
  minRaise: number;
  /** 행동할 좌석 인덱스 */
  toAct: number;
  dealer: number;
  smallBlind: number;
  bigBlind: number;
  lastAggressor: number | null;
  message: string;
  handNumber: number;
  results: PotResult[] | null;
  /** 쇼다운 시 각 플레이어 최종 족보 (id -> 이름) */
  reveal: Record<number, string> | null;
}

export const SMALL_BLIND = 50;
export const BIG_BLIND = 100;
export const START_CHIPS = 10000;
export const AI_NAMES = ["AI 제이크", "AI 미나"];

function activeCount(state: GameState): number {
  return state.players.filter((p) => !p.folded).length;
}

/** 다음에 행동할 수 있는(폴드X, 올인X) 좌석을 from 다음부터 탐색 */
function nextToActSeat(state: GameState, from: number): number {
  const n = state.players.length;
  for (let i = 1; i <= n; i++) {
    const seat = (from + i) % n;
    const p = state.players[seat];
    if (!p.folded && !p.allIn) return seat;
  }
  return -1;
}

export function createInitialState(humanChips: number): GameState {
  const players: Player[] = [
    { id: 0, name: "나", isHuman: true, chips: humanChips, hole: [], bet: 0, committed: 0, folded: false, allIn: false, hasActed: false },
    { id: 1, name: AI_NAMES[0], isHuman: false, chips: START_CHIPS, hole: [], bet: 0, committed: 0, folded: false, allIn: false, hasActed: false },
    { id: 2, name: AI_NAMES[1], isHuman: false, chips: START_CHIPS, hole: [], bet: 0, committed: 0, folded: false, allIn: false, hasActed: false },
  ];
  return {
    players,
    deck: [],
    board: [],
    stage: "handover",
    currentBet: 0,
    minRaise: BIG_BLIND,
    toAct: -1,
    dealer: 2, // 첫 핸드에서 dealer+1 → 0 이 되도록
    smallBlind: SMALL_BLIND,
    bigBlind: BIG_BLIND,
    lastAggressor: null,
    message: "새 핸드를 시작하세요.",
    handNumber: 0,
    results: null,
    reveal: null,
  };
}

function postBlind(player: Player, amount: number): number {
  const pay = Math.min(amount, player.chips);
  player.chips -= pay;
  player.bet += pay;
  player.committed += pay;
  if (player.chips === 0) player.allIn = true;
  return pay;
}

/** 새 핸드 시작: 버튼 이동, 카드 배분, 블라인드 포스팅 */
export function startHand(prev: GameState): GameState {
  const state: GameState = structuredClone(prev);
  const n = state.players.length;

  // 버튼 이동
  state.dealer = (state.dealer + 1) % n;
  state.handNumber += 1;
  state.board = [];
  state.results = null;
  state.reveal = null;
  state.stage = "preflop";
  state.currentBet = 0;
  state.minRaise = state.bigBlind;
  state.lastAggressor = null;

  // 플레이어 핸드 상태 초기화
  for (const p of state.players) {
    p.hole = [];
    p.bet = 0;
    p.committed = 0;
    p.folded = false;
    p.allIn = false;
    p.hasActed = false;
  }

  // 덱 셔플 후 2장씩 배분
  const deck = shuffle(makeDeck());
  for (let r = 0; r < 2; r++) {
    for (let s = 0; s < n; s++) {
      const seat = (state.dealer + 1 + s) % n;
      state.players[seat].hole.push(deck.pop()!);
    }
  }
  state.deck = deck;

  // 블라인드 좌석 (3인: SB=dealer+1, BB=dealer+2)
  const sbSeat = (state.dealer + 1) % n;
  const bbSeat = (state.dealer + 2) % n;
  postBlind(state.players[sbSeat], state.smallBlind);
  postBlind(state.players[bbSeat], state.bigBlind);
  state.currentBet = state.bigBlind;
  state.minRaise = state.bigBlind;
  state.lastAggressor = bbSeat;

  // 프리플랍 첫 행동: BB 다음 (3인에서는 dealer)
  state.toAct = nextToActSeat(state, bbSeat);
  state.message = `핸드 #${state.handNumber} 시작 — 블라인드 ${state.smallBlind}/${state.bigBlind}`;
  return state;
}

export interface LegalActions {
  canFold: boolean;
  canCheck: boolean;
  canCall: boolean;
  callAmount: number;
  canRaise: boolean;
  /** 레이즈 시 "이번 스트리트 총 베팅액" 의 최소/최대 */
  minRaiseTo: number;
  maxRaiseTo: number;
}

export function getLegalActions(state: GameState, seat: number): LegalActions {
  const p = state.players[seat];
  const toCall = Math.max(0, state.currentBet - p.bet);
  const callAmount = Math.min(toCall, p.chips);
  const canCheck = toCall === 0;
  const canCall = toCall > 0 && p.chips > 0;
  // 레이즈 가능: 콜한 뒤에도 칩이 남아야 함
  const maxRaiseTo = p.bet + p.chips; // 올인 시 총 베팅액
  const minRaiseTo = state.currentBet + state.minRaise;
  const canRaise = p.chips > toCall && maxRaiseTo > state.currentBet;
  return {
    canFold: true,
    canCheck,
    canCall,
    callAmount,
    canRaise,
    minRaiseTo: Math.min(minRaiseTo, maxRaiseTo),
    maxRaiseTo,
  };
}

export interface Action {
  type: ActionType;
  /** raise 시: 이번 스트리트 목표 총 베팅액 */
  amountTo?: number;
}

/** 한 플레이어의 액션을 적용하고 다음 상태로 진행 */
export function applyAction(prev: GameState, seat: number, action: Action): GameState {
  const state: GameState = structuredClone(prev);
  const p = state.players[seat];
  const legal = getLegalActions(state, seat);

  if (action.type === "fold") {
    p.folded = true;
    p.hasActed = true;
    state.message = `${p.name}: 폴드`;
  } else if (action.type === "check") {
    p.hasActed = true;
    state.message = `${p.name}: 체크`;
  } else if (action.type === "call") {
    const pay = legal.callAmount;
    p.chips -= pay;
    p.bet += pay;
    p.committed += pay;
    if (p.chips === 0) p.allIn = true;
    p.hasActed = true;
    state.message = `${p.name}: 콜 ${pay}`;
  } else {
    // raise
    let target = action.amountTo ?? legal.minRaiseTo;
    target = Math.max(legal.minRaiseTo, Math.min(target, legal.maxRaiseTo));
    const pay = target - p.bet;
    p.chips -= pay;
    p.bet += pay;
    p.committed += pay;
    if (p.chips === 0) p.allIn = true;
    // 레이즈 증분 갱신 (정상 레이즈일 때만)
    const increment = target - state.currentBet;
    if (increment >= state.minRaise) state.minRaise = increment;
    state.currentBet = Math.max(state.currentBet, target);
    state.lastAggressor = seat;
    p.hasActed = true;
    // 다른 활성 플레이어는 다시 행동해야 함
    for (const other of state.players) {
      if (other.id !== p.id && !other.folded && !other.allIn) other.hasActed = false;
    }
    state.message = `${p.name}: 레이즈 ${target}`;
  }

  return advance(state);
}

function bettingRoundComplete(state: GameState): boolean {
  const contenders = state.players.filter((p) => !p.folded && !p.allIn);
  // 행동 가능한 사람이 0~1명이면 베팅 라운드 종료
  if (contenders.length === 0) return true;
  for (const p of contenders) {
    if (!p.hasActed) return false;
    if (p.bet !== state.currentBet) return false;
  }
  return true;
}

/** 다음 행동자 결정 또는 스트리트/쇼다운 전환 */
function advance(state: GameState): GameState {
  // 한 명만 남으면 즉시 종료
  if (activeCount(state) === 1) {
    return endHandSinglePlayer(state);
  }

  if (!bettingRoundComplete(state)) {
    const next = nextToActSeat(state, state.toAct);
    if (next === -1) {
      // 행동 가능자 없음 → 라운드 종료 처리로 진행
      return closeStreet(state);
    }
    state.toAct = next;
    return state;
  }

  return closeStreet(state);
}

/** 현재 스트리트를 닫고 다음 스트리트로 이동하거나 쇼다운 */
function closeStreet(state: GameState): GameState {
  // 베팅 정리
  for (const p of state.players) {
    p.bet = 0;
    p.hasActed = false;
  }
  state.currentBet = 0;
  state.minRaise = state.bigBlind;
  state.lastAggressor = null;

  // 행동 가능자가 1명 이하면 남은 보드를 모두 깔고 쇼다운
  const canAct = state.players.filter((p) => !p.folded && !p.allIn).length;

  const dealNext = (s: GameState) => {
    if (s.stage === "preflop") {
      s.board.push(s.deck.pop()!, s.deck.pop()!, s.deck.pop()!);
      s.stage = "flop";
    } else if (s.stage === "flop") {
      s.board.push(s.deck.pop()!);
      s.stage = "turn";
    } else if (s.stage === "turn") {
      s.board.push(s.deck.pop()!);
      s.stage = "river";
    }
  };

  if (state.stage === "river") {
    return showdown(state);
  }

  if (canAct <= 1) {
    // 자동 런아웃
    while (state.stage !== "river") dealNext(state);
    return showdown(state);
  }

  dealNext(state);
  // 포스트플랍 첫 행동: 딜러 왼쪽(SB부터)
  state.toAct = nextToActSeat(state, state.dealer);
  state.message = streetLabel(state.stage);
  return state;
}

function streetLabel(stage: Stage): string {
  if (stage === "flop") return "플랍이 열렸습니다.";
  if (stage === "turn") return "턴 카드가 나왔습니다.";
  if (stage === "river") return "리버 카드가 나왔습니다.";
  return "";
}

/** 한 명만 남아 팟을 가져가는 경우 */
function endHandSinglePlayer(state: GameState): GameState {
  const winner = state.players.find((p) => !p.folded)!;
  const pot = state.players.reduce((sum, p) => sum + p.committed, 0);
  winner.chips += pot;
  state.results = [{ amount: pot, winners: [winner.id] }];
  state.reveal = null;
  state.stage = "handover";
  state.toAct = -1;
  state.message = `${winner.name} 님이 팟 ${pot}을 가져갑니다 (상대 폴드).`;
  return state;
}

/** 쇼다운: 사이드팟 계산 후 분배 */
function showdown(state: GameState): GameState {
  state.stage = "showdown";

  const results: HandResult[] = state.players.map((p) =>
    p.folded ? { category: -1, tiebreak: [], name: "폴드" } : evaluateBest([...p.hole, ...state.board])
  );

  const reveal: Record<number, string> = {};
  for (const p of state.players) {
    if (!p.folded) reveal[p.id] = results[p.id].name;
  }

  // 사이드팟: 각 기여 레벨별로 분배
  const contributions = state.players.map((p) => p.committed);
  const levels = [...new Set(contributions.filter((c) => c > 0))].sort((a, b) => a - b);

  const potResults: PotResult[] = [];
  let prev = 0;
  for (const level of levels) {
    let layerAmount = 0;
    for (let i = 0; i < state.players.length; i++) {
      const contribInLayer = Math.min(contributions[i], level) - prev;
      if (contribInLayer > 0) layerAmount += contribInLayer;
    }
    // 이 레이어 자격: 기여 >= level 이고 폴드하지 않은 플레이어
    const eligible = state.players.filter(
      (p) => !p.folded && contributions[p.id] >= level
    );
    if (eligible.length > 0 && layerAmount > 0) {
      let best = results[eligible[0].id];
      for (const p of eligible) {
        if (compareResults(results[p.id], best) > 0) best = results[p.id];
      }
      const winners = eligible.filter((p) => compareResults(results[p.id], best) === 0);
      const share = Math.floor(layerAmount / winners.length);
      let remainder = layerAmount - share * winners.length;
      // 우승자별 분배 (홀수 칩은 버튼에서 가까운 좌석부터)
      const ordered = [...winners].sort((a, b) => seatOrderFromButton(state, a.id) - seatOrderFromButton(state, b.id));
      for (const w of ordered) {
        let amt = share;
        if (remainder > 0) { amt += 1; remainder -= 1; }
        state.players[w.id].chips += amt;
      }
      potResults.push({ amount: layerAmount, winners: winners.map((w) => w.id), handName: best.name });
    }
    prev = level;
  }

  state.results = potResults;
  state.reveal = reveal;
  state.stage = "handover";
  state.toAct = -1;

  const winnerNames = [...new Set(potResults.flatMap((r) => r.winners))]
    .map((id) => state.players[id].name)
    .join(", ");
  const totalPot = potResults.reduce((s, r) => s + r.amount, 0);
  state.message = `쇼다운 — ${winnerNames} 승리 (팟 ${totalPot})`;
  return state;
}

function seatOrderFromButton(state: GameState, seatId: number): number {
  const n = state.players.length;
  return (seatId - state.dealer - 1 + n) % n;
}

/** 표시용 총 팟 (현재 커밋 합) */
export function totalPot(state: GameState): number {
  return state.players.reduce((sum, p) => sum + p.committed, 0);
}
