// 6맥스 좌석·포지션 배치 (언어 중립). 확률 계산은 전부 _equity.ts에 있고 여기엔 없다.
//
// ★왜 분리했나 (2026-08-05)
//   시뮬레이터를 "2~4명이 동그랗게 앉은 화면"에서 "6인 테이블에서 몇 명만 붙는 화면"으로
//   바꾸면서, 좌석 배치·포지션 이름은 한국어판과 영어판이 **완전히 같아야** 하기 때문이다.
//   UTG·HJ·CO·BTN·SB·BB는 두 언어에서 같은 표기를 쓴다.

import {
  dealHands, equities, winnersAt, handCategory,
  type Card, type HandNames,
} from "./_equity";

/**
 * 6맥스 프리플랍 액션 순서 = 물리적 좌석 순서(시계 방향).
 * slot 0(나)에서 시계 방향으로 1,2,3,4,5가 이어진다.
 */
export const POSITIONS_6 = ["UTG", "HJ", "CO", "BTN", "SB", "BB"] as const;
export type Position = (typeof POSITIONS_6)[number];

/** 좌석 slot의 포지션 이름 (나의 포지션이 heroPos일 때) */
export function positionAt(heroPos: number, slot: number): Position {
  return POSITIONS_6[(heroPos + slot) % 6];
}

/**
 * 그 좌석이 핸드에 **남아 있을** 상대적 빈도.
 *
 * ★여기서 하는 주장은 "뒷자리가 더 자주 끝까지 간다"는 빈도뿐이다.
 *   특정 핸드를 폴드하는 게 옳은지는 **판단하지 않는다** — 그래서 폴드한 좌석은
 *   카드를 뽑지도, 보여주지도 않는다(실전에서도 머크된다).
 *   이 구분을 지켜야 잘못된 프리플랍 레인지를 가르치는 사고가 안 난다.
 * ★포지션 우위 자체는 이 사이트의 필라(/blog/holdem-position-play)가 다루는 보편 사실이다.
 */
const STAY_WEIGHT: Record<Position, number> = {
  UTG: 1.0, HJ: 1.3, CO: 1.7, BTN: 2.2, SB: 1.2, BB: 2.0,
};

export interface TableSim {
  /** 나의 포지션 (POSITIONS_6 인덱스) */
  heroPos: number;
  /** 끝까지 간 좌석 번호(오름차순). 항상 0(나)을 포함한다 */
  activeSlots: number[];
  /** hands[k] ↔ activeSlots[k]. hands[0]은 항상 나 */
  hands: Card[][];
  board: Card[];
  eq: { preflop: number[]; flop: number[]; turn: number[] };
  winners: number[];
  categories: string[];
}

/** 가중 무작위 추출(비복원) — 뒷자리가 더 자주 뽑힌다 */
function pickSlots(heroPos: number, count: number): number[] {
  const pool = [1, 2, 3, 4, 5].map((slot) => ({ slot, w: STAY_WEIGHT[positionAt(heroPos, slot)] }));
  const picked: number[] = [];
  for (let i = 0; i < count; i++) {
    const total = pool.reduce((a, p) => a + p.w, 0);
    let r = Math.random() * total;
    let k = 0;
    while (k < pool.length - 1 && r > pool[k].w) { r -= pool[k].w; k++; }
    picked.push(pool[k].slot);
    pool.splice(k, 1);
  }
  return picked;
}

/**
 * 6인 테이블 한 판. `showdownCount`는 **끝까지 가는 인원**이지 좌석 수가 아니다.
 * 좌석은 언제나 6개고, 나머지는 폴드로 표시된다.
 */
export function makeTableSim(showdownCount: number, names: HandNames): TableSim {
  const heroPos = Math.floor(Math.random() * 6);
  const activeSlots = [0, ...pickSlots(heroPos, showdownCount - 1)].sort((a, b) => a - b);
  // activeSlots가 0을 포함한 오름차순이므로 인덱스 0 = 나 = hands[0]이 보장된다
  const { hands, board } = dealHands(showdownCount);
  return {
    heroPos,
    activeSlots,
    hands,
    board,
    eq: {
      preflop: equities(hands, []),
      flop: equities(hands, board.slice(0, 3)),
      turn: equities(hands, board.slice(0, 4)),
    },
    winners: winnersAt(hands, board),
    categories: hands.map((h) => handCategory(h, board, names)),
  };
}
