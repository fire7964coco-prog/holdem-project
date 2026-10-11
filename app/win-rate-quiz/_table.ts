// 6맥스 좌석·포지션 배치 (언어 중립). 확률 계산은 전부 _equity.ts에 있고 여기엔 없다.
//
// ★왜 분리했나 (2026-08-05)
//   시뮬레이터를 "2~4명이 동그랗게 앉은 화면"에서 "6인 테이블에서 몇 명만 붙는 화면"으로
//   바꾸면서, 좌석 배치·포지션 이름은 한국어판과 영어판이 **완전히 같아야** 하기 때문이다.
//   UTG·HJ·CO·BTN·SB·BB는 두 언어에서 같은 표기를 쓴다.

import { toDisplay, type Card, type HandNames } from "./_equity";
import { rangeFor, type EntryRole, type NCard, type WeightedHole } from "./_ranges";

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
 * ★포지션 우위 자체는 이 사이트의 필라(/blog/position-is-everything-in-holdem)가 다루는 보편 사실이다.
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
  /**
   * 상대별 프리플랍 레인지(빈도 포함) — oppRanges[k] ↔ activeSlots[k + 1].
   * 딜도 승률 계산도 **같은 표**에서 출발한다(그래야 화면의 상대와 계산의 상대가 같은 사람이다).
   */
  oppRanges: WeightedHole[][];
  /** 상대별 역할 — «UTG 오픈» · «BB가 UTG 오픈 수비» 같은 표기를 UI가 만든다 */
  oppRoles: EntryRole[];
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
 * 6인 테이블 한 판을 **딜만 한다.** `preflopCount`는 프리플랍에 들어오는 인원이고,
 * 좌석은 언제나 6개다. 나머지는 폴드로 표시된다.
 *
 * ★2026-08-05 성능 검수에서 여기서 하던 계산을 전부 걷어냈다.
 *   6인 테이블 버전이 쓰던 `eq`(프리플랍 MC 10만 + 플랍 990 + 턴 44)·`winners`·`categories`를
 *   그대로 두고 있었는데, **실전 모드는 그중 무엇도 쓰지 않는다.**
 *   매 핸드 500~800ms짜리 동기 계산이 아무 이유 없이 돌면서 화면을 얼려 놓고 있었다.
 *   승률은 `_engine.ts`가, 쇼다운 판정은 `_simulator.tsx`가 §13 평가기로 직접 한다.
 */
export function makeTableSim(preflopCount: number, _names?: HandNames): TableSim {
  const heroPos = Math.floor(Math.random() * 6);
  const activeSlots = [0, ...pickSlots(heroPos, preflopCount - 1)].sort((a, b) => a - b);
  // activeSlots가 0을 포함한 오름차순이므로 인덱스 0 = 나 = hands[0]이 보장된다
  const oppRoles = activeSlots.slice(1).map((slot) => roleOf(heroPos, slot, activeSlots));
  const oppRanges = oppRoles.map(rangeFor);
  const { hands, board } = dealFromRanges(oppRanges);
  return { heroPos, activeSlots, hands, board, oppRanges, oppRoles };
}

/**
 * 이 좌석이 어떤 역할로 팟에 들어왔나.
 *
 * ★모델(가정): 프리플랍 액션 순서(UTG→BB)에서 **팟에 남은 사람 중 가장 먼저인 사람이 오픈**했고,
 *   나머지는 그 오픈을 수비(콜 또는 3벳)했다. 나도 이 순서에 들어간다 — 내가 맨 앞이면
 *   상대 전원이 «내 오픈을 수비한 사람»이다. 3명 이상 팟의 두 번째 수비자도 같은 수비 표를 쓴다
 *   (콜드콜 2번째 이후 표는 차트에 없다 · 단순화).
 * ★BB는 액션 순서가 맨 끝이라 2명 이상 팟에서 오프너가 될 수 없다.
 */
function roleOf(heroPos: number, slot: number, activeSlots: number[]): EntryRole {
  const order = (s: number) => (heroPos + s) % 6; // POSITIONS_6 = 액션 순서
  const opener = activeSlots.reduce((a, s) => (order(s) < order(a) ? s : a));
  const pos = positionAt(heroPos, slot);
  if (slot === opener) return { kind: "open", pos };
  return { kind: "defend", pos, vs: positionAt(heroPos, opener) };
}

/** 빈도 가중 추출 — 이미 쓴 카드와 겹치는 콤보는 다시 뽑는다 */
function pickWeighted(range: WeightedHole[], used: Set<number>): WeightedHole["hole"] {
  const total = range.reduce((a, c) => a + c.w, 0);
  for (let tries = 0; tries < 1000; tries++) {
    let r = Math.random() * total;
    let k = 0;
    while (k < range.length - 1 && r >= range[k].w) { r -= range[k].w; k++; }
    const h = range[k].hole;
    if (!used.has(h[0][0] * 4 + h[0][1]) && !used.has(h[1][0] * 4 + h[1][1])) return h;
  }
  throw new Error("레인지에서 콤보를 뽑지 못함");
}

/**
 * 나는 무작위 2장(레인지 밖의 패로도 «끝까지 가 보는» 도구라서), 상대는 각자 레인지에서,
 * 보드는 남은 카드에서 뽑는다.
 */
function dealFromRanges(oppRanges: WeightedHole[][]): { hands: Card[][]; board: Card[] } {
  const deck: NCard[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) deck.push([r, s]);
  /** 아직 안 쓴 카드에서 n장 — 부분 Fisher-Yates */
  const draw = (n: number, used: Set<number>): NCard[] => {
    const rest = deck.filter((c) => !used.has(c[0] * 4 + c[1]));
    for (let i = 0; i < n; i++) {
      const j = i + Math.floor(Math.random() * (rest.length - i));
      [rest[i], rest[j]] = [rest[j], rest[i]];
    }
    return rest.slice(0, n);
  };
  const used = new Set<number>();
  const mark = (cs: NCard[]) => cs.forEach((c) => used.add(c[0] * 4 + c[1]));
  const hero = draw(2, used);
  mark(hero);
  const opp = oppRanges.map((range) => {
    const h = pickWeighted(range, used);
    mark(h);
    return h;
  });
  const board = draw(5, used);
  return {
    hands: [hero, ...opp].map((h) => h.map(toDisplay)),
    board: board.map(toDisplay),
  };
}
