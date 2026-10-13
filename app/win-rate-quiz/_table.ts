// 6인·9인 테이블 좌석·포지션 배치 (언어 중립). 확률 계산은 전부 _equity.ts에 있고 여기엔 없다.
//
// ★왜 분리했나 (2026-08-05)
//   시뮬레이터를 "2~4명이 동그랗게 앉은 화면"에서 "6인 테이블에서 몇 명만 붙는 화면"으로
//   바꾸면서, 좌석 배치·포지션 이름은 한국어판과 영어판이 **완전히 같아야** 하기 때문이다.
//   UTG·HJ·CO·BTN·SB·BB는 두 언어에서 같은 표기를 쓴다.

import { toDisplay, type Card, type HandNames } from "./_equity";
import { rangeFor, type EntryRole, type NCard, type WeightedHole } from "./_ranges";

/**
 * 프리플랍 액션 순서 = 물리적 좌석 순서(시계 방향).
 * slot 0(나)에서 시계 방향으로 1,2,3,…가 이어진다.
 * ★9인(풀링)은 6맥스 앞에 세 자리(UTG·UTG+1·UTG+2)가 더 있고, 6맥스의 UTG 자리가 LJ가 된다
 *   (S-034 ② · 2026-10-11 · 이름 규칙 = 블로그 holdem-positions 표의 9인 행과 같다).
 */
export const POSITIONS_6 = ["UTG", "HJ", "CO", "BTN", "SB", "BB"] as const;
export const POSITIONS_9 = ["UTG", "UTG+1", "UTG+2", "LJ", "HJ", "CO", "BTN", "SB", "BB"] as const;
export type Position = (typeof POSITIONS_9)[number];
export type TableSize = 6 | 9;

const positionsOf = (size: TableSize): readonly Position[] => (size === 9 ? POSITIONS_9 : POSITIONS_6);

/** 좌석 slot의 포지션 이름 (나의 포지션이 heroPos일 때) */
export function positionAt(heroPos: number, slot: number, size: TableSize): Position {
  return positionsOf(size)[(heroPos + slot) % size];
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
  UTG: 1.0, "UTG+1": 1.0, "UTG+2": 1.0, LJ: 1.0, HJ: 1.3, CO: 1.7, BTN: 2.2, SB: 1.2, BB: 2.0,
};

export interface TableSim {
  /** 테이블 좌석 수 — 좌석 slot은 0 ~ size-1 */
  size: TableSize;
  /** 나의 포지션 (POSITIONS_6 또는 POSITIONS_9 인덱스) */
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
  /** 이 판의 승률 계산 시드 — 같은 판은 어느 기기에서든 같은 숫자(`_engine.ts` mulberry32) */
  seed: number;
  /** 직접 입력(S-034 2차 ①) 또는 공유 링크(3차 ①)로 고정한 판 — 퀴즈 기록에 넣지 않는다 */
  custom: boolean;
}

// ── 공유·재현 링크 (S-034 3차 ① · 2026-10-13) ──────────────────────────────
//
// ★시드만 싣지 않고 **딜 전체**(자리·인원·카드 전부)를 싣는다. 딜은 Math.random이라 시드로 재현되지
//   않고, 딜을 시드로 바꿔도 레인지 표·딜 순서를 고치는 순간 옛 링크가 다른 판이 된다.
//   카드를 그대로 적으면 링크가 코드 변경을 견딘다. 시드는 승률 계산용(`_engine.ts` mulberry32) —
//   같은 시드 + 같은 카드 + 같은 성향이면 받은 사람 화면의 숫자가 보낸 사람과 같다.
// ★상대 레인지는 싣지 않는다 — 자리에서 다시 만든다(roleOf → rangeFor). 링크가 짧아지고, 레인지 표가
//   바뀌면 받은 쪽은 새 표로 계산한다(카드는 그대로).
// 꼴: v1 = «1.{테이블}{내 자리}{성향}.{시드 36진}.{자리 번호들}.{카드 2자씩}»
//   카드 순서 = 나 2장 → 상대(자리 순) 2장씩 → 보드 5장 · 랭크 23456789TJQKA · 무늬 s h d c(♠♥♦♣)
const SHARE_RANKS = "23456789TJQKA";
const SHARE_SUITS = "shdc";
const SUIT_SYMBOLS = ["♠", "♥", "♦", "♣"];
const RANK_NAMES = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

/** 성향 한 글자 — `_engine.ts` OPP_STYLES와 같은 이름 */
const STYLE_CODES: Record<string, string> = { standard: "s", tight: "t", loose: "l", aggressive: "a" };

export function encodeShare(sim: TableSim, style: string): string {
  const card = (c: Card) => SHARE_RANKS[RANK_NAMES.indexOf(c.rank)] + SHARE_SUITS[SUIT_SYMBOLS.indexOf(c.suit)];
  return [
    "1",
    `${sim.size}${sim.heroPos}${STYLE_CODES[style] ?? "s"}`,
    sim.seed.toString(36),
    sim.activeSlots.join(""),
    [...sim.hands.flat(), ...sim.board].map(card).join(""),
  ].join(".");
}

/**
 * 링크 → 판. 틀린 곳이 하나라도 있으면 null(화면은 무작위 판으로 시작한다).
 * ★손으로 고친 링크도 들어온다 — 카드 중복·자리 범위·장수를 전부 확인한다.
 */
export function decodeShare(code: string): { sim: TableSim; style: string } | null {
  const parts = code.split(".");
  if (parts.length !== 5 || parts[0] !== "1") return null;
  const [, head, seed36, slotStr, cardStr] = parts;
  const m = /^([69])(\d)([stla])$/.exec(head);
  if (!m) return null;
  const size = Number(m[1]) as TableSize;
  const heroPos = Number(m[2]);
  const style = Object.keys(STYLE_CODES).find((k) => STYLE_CODES[k] === m[3])!;
  if (heroPos >= size) return null;
  if (!/^[0-9a-z]{1,7}$/.test(seed36)) return null;
  const seed = parseInt(seed36, 36);
  if (!(seed >= 0 && seed < 2 ** 32)) return null;
  if (!/^\d{2,6}$/.test(slotStr)) return null;
  const activeSlots = [...slotStr].map(Number);
  if (activeSlots[0] !== 0 || activeSlots.some((s, i) => s >= size || (i > 0 && s <= activeSlots[i - 1]))) return null;
  const nCards = activeSlots.length * 2 + 5;
  if (cardStr.length !== nCards * 2) return null;
  const cards: Card[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < cardStr.length; i += 2) {
    const r = SHARE_RANKS.indexOf(cardStr[i]);
    const s = SHARE_SUITS.indexOf(cardStr[i + 1]);
    if (r < 0 || s < 0 || seen.has(cardStr.slice(i, i + 2))) return null;
    seen.add(cardStr.slice(i, i + 2));
    cards.push({ rank: RANK_NAMES[r], suit: SUIT_SYMBOLS[s] } as Card);
  }
  const hands: Card[][] = activeSlots.map((_, k) => cards.slice(k * 2, k * 2 + 2));
  const board = cards.slice(activeSlots.length * 2);
  const oppRoles = activeSlots.slice(1).map((slot) => roleOf(heroPos, slot, activeSlots, size));
  const oppRanges = oppRoles.map(rangeFor);
  return { sim: { size, heroPos, activeSlots, hands, board, oppRanges, oppRoles, seed, custom: true }, style };
}

/**
 * 직접 입력 (S-034 2차 ① · 2026-10-12) — «내가 겪은 그 판» 재현.
 * null 칸은 지금처럼 무작위로 채운다. 상대 패는 입력받지 않는다 — 실전에서 모르는 정보라서
 * 늘 자리별 레인지에서 나온다(화면 승률의 전제 «상대 패를 모른다»가 그대로 유지된다).
 */
export interface FixedDeal {
  /** 내 포지션 인덱스 (POSITIONS_6 또는 POSITIONS_9) · null = 무작위 */
  heroPos: number | null;
  /** 내 패 2칸 */
  hero: (NCard | null)[];
  /** 보드 5칸 (플랍 3 · 턴 · 리버) */
  board: (NCard | null)[];
}

/** 고정한 칸이 하나라도 있나 */
export const isFixed = (f: FixedDeal | null | undefined): f is FixedDeal =>
  !!f && (f.heroPos !== null || f.hero.some(Boolean) || f.board.some(Boolean));

/** 가중 무작위 추출(비복원) — 뒷자리가 더 자주 뽑힌다 */
function pickSlots(heroPos: number, count: number, size: TableSize): number[] {
  const pool = Array.from({ length: size - 1 }, (_, i) => i + 1)
    .map((slot) => ({ slot, w: STAY_WEIGHT[positionAt(heroPos, slot, size)] }));
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
 * 6인 또는 9인 테이블 한 판을 **딜만 한다.** `preflopCount`(2~6)는 프리플랍에 들어오는 인원이고,
 * 좌석은 `size`개다. 나머지는 폴드로 표시된다.
 *
 * ★2026-08-05 성능 검수에서 여기서 하던 계산을 전부 걷어냈다.
 *   6인 테이블 버전이 쓰던 `eq`(프리플랍 MC 10만 + 플랍 990 + 턴 44)·`winners`·`categories`를
 *   그대로 두고 있었는데, **실전 모드는 그중 무엇도 쓰지 않는다.**
 *   매 핸드 500~800ms짜리 동기 계산이 아무 이유 없이 돌면서 화면을 얼려 놓고 있었다.
 *   승률은 `_engine.ts`가, 쇼다운 판정은 `_simulator.tsx`가 §13 평가기로 직접 한다.
 */
export function makeTableSim(preflopCount: number, size: TableSize = 6, _names?: HandNames, fixed?: FixedDeal | null): TableSim {
  const custom = isFixed(fixed);
  const heroPos = custom && fixed.heroPos !== null && fixed.heroPos < size ? fixed.heroPos : Math.floor(Math.random() * size);
  const activeSlots = [0, ...pickSlots(heroPos, Math.min(preflopCount, size) - 1, size)].sort((a, b) => a - b);
  // activeSlots가 0을 포함한 오름차순이므로 인덱스 0 = 나 = hands[0]이 보장된다
  const oppRoles = activeSlots.slice(1).map((slot) => roleOf(heroPos, slot, activeSlots, size));
  const oppRanges = oppRoles.map(rangeFor);
  const { hands, board } = dealFromRanges(oppRanges, custom ? fixed : null);
  const seed = Math.floor(Math.random() * 2 ** 32);
  return { size, heroPos, activeSlots, hands, board, oppRanges, oppRoles, seed, custom };
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
function roleOf(heroPos: number, slot: number, activeSlots: number[], size: TableSize): EntryRole {
  const order = (s: number) => (heroPos + s) % size; // POSITIONS_6·POSITIONS_9 = 액션 순서
  const opener = activeSlots.reduce((a, s) => (order(s) < order(a) ? s : a));
  const pos = positionAt(heroPos, slot, size);
  if (slot === opener) return { kind: "open", pos };
  return { kind: "defend", pos, vs: positionAt(heroPos, opener, size) };
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
 * ★직접 입력한 칸은 먼저 «쓴 카드»로 막아 둔다 — 상대 콤보·무작위 칸이 그 카드를 다시 뽑지 않게.
 */
function dealFromRanges(oppRanges: WeightedHole[][], fixed: FixedDeal | null): { hands: Card[][]; board: Card[] } {
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
  const fixedCards = fixed ? [...fixed.hero, ...fixed.board].filter((c): c is NCard => !!c) : [];
  mark(fixedCards);
  /** 고정 칸은 그대로, 빈 칸은 남은 카드에서 */
  const fill = (slots: (NCard | null)[]): NCard[] => {
    const rnd = draw(slots.filter((c) => !c).length, used);
    mark(rnd);
    let k = 0;
    return slots.map((c) => c ?? rnd[k++]);
  };
  const hero = fill(fixed ? fixed.hero : [null, null]);
  const opp = oppRanges.map((range) => {
    const h = pickWeighted(range, used);
    mark(h);
    return h;
  });
  const board = fill(fixed ? fixed.board : [null, null, null, null, null]);
  return {
    hands: [hero, ...opp].map((h) => h.map(toDisplay)),
    board: board.map(toDisplay),
  };
}
