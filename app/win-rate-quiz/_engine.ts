// 실전 모드 엔진 — "상대 패를 모르는 상태에서 내 승률" + 상대 액션 규칙 + 팟오즈.
//
// ★2026-08-05 신설. 사장님 요구: *"나는 끝까지 가서 결과를 보되, 프리플랍부터 단계별로
//   내 승률이 표시되고, 나중에 '아 여기서 끊는 게 맞았네' 하고 복기하는 것."*
//
// 이 파일이 지키는 두 가지 원칙:
//  1. **§13 평가기는 읽어 쓰기만 한다.** score5·best7fast를 `_equity.ts`의 EVAL로 가져와
//     호출만 하고, 승패 판정 로직을 여기서 새로 쓰지 않는다.
//  2. **상대 액션 규칙은 "가정"이지 "옳은 플레이"가 아니다.** 화면에 규칙을 그대로
//     노출하고 실제 플레이어는 이렇게 두지 않는다고 밝히는 것을 전제로 만들었다.
//     (물리 교과서의 "마찰이 없다고 가정하면"과 같은 취급)

import { EVAL, type Card } from "./_equity";
import type { WeightedHole } from "./_ranges";

const { score5, best7fast } = EVAL;

type NCard = [number, number];

const SUITS = ["♠", "♥", "♦", "♣"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function toNum(c: Card): NCard {
  return [RANKS.indexOf(c.rank) + 2, SUITS.indexOf(c.suit)];
}
const keyOf = (c: NCard) => c[0] * 4 + c[1];

/** n장(5~7) 중 베스트 5장의 족보 카테고리 (0 하이카드 … 8 스트레이트플러시) */
function bestCategory(cs: NCard[]): number {
  if (cs.length === 5) return Math.floor(score5(cs) / 15 ** 5);
  let best = -1;
  const n = cs.length;
  for (let a = 0; a < n - 4; a++)
    for (let b = a + 1; b < n - 3; b++)
      for (let c = b + 1; c < n - 2; c++)
        for (let d = c + 1; d < n - 1; d++)
          for (let e = d + 1; e < n; e++) {
            const s = score5([cs[a], cs[b], cs[c], cs[d], cs[e]]);
            if (s > best) best = s;
          }
  return Math.floor(best / 15 ** 5);
}

/** 플러시 드로우(한 무늬 정확히 4장) 또는 스트레이트 드로우(5칸 창에 4랭크) */
function hasDraw(cs: NCard[]): boolean {
  const suitCount = [0, 0, 0, 0];
  for (const c of cs) suitCount[c[1]]++;
  if (suitCount.some((x) => x === 4)) return true;
  const present = new Set(cs.map((c) => c[0]));
  if (present.has(14)) present.add(1); // 휠(A-2-3-4-5)
  for (let lo = 1; lo <= 10; lo++) {
    let n = 0;
    for (let k = 0; k < 5; k++) if (present.has(lo + k)) n++;
    if (n === 4) return true;
  }
  return false;
}

export type Action = "fold" | "call" | "raise";

/**
 * 상대의 액션 규칙. **이건 시뮬레이터의 가정이지 권장 플레이가 아니다.**
 * 실제 플레이어는 포지션·상대·스택·이미지에 따라 전혀 다르게 움직인다.
 */
export function opponentAction(hole: NCard[], board: NCard[]): Action {
  const cs = [...hole, ...board];
  const cat = bestCategory(cs);
  if (cat >= 2) return "raise"; // 투페어 이상
  if (cat === 1) return "call"; // 원페어
  if (hasDraw(cs)) return "call"; // 플러시·스트레이트 드로우
  return "fold";
}

/** 규칙을 화면에 그대로 적기 위한 기계 판독용 정의 (문자열은 UI가 언어별로 만든다) */
export const RULE = {
  raiseFrom: 2, // 투페어 이상 → 팟 사이즈 베팅
  callFrom: 1, // 원페어 또는 드로우 → 하프팟 베팅
} as const;

// ── 상대 레인지 ──────────────────────────────────────────────────────────────

/**
 * 지금까지의 모든 스트리트에서 **폴드하지 않았을** 홀카드 조합 전부.
 *
 * ★이게 이 설계의 핵심이다. 상대를 폴드시키는 그 규칙이 곧 **상대 레인지**가 되므로,
 *   화면에 보이는 폴드와 승률 계산의 근거가 저절로 일치한다. 별도 레인지 표가 필요 없다.
 */
export interface ActionStep {
  board: NCard[];
  action: Action;
}

/**
 * 빈도 가중 레인지 → 표본용 후보 목록. 빈도 25·50·75·100을 1·2·3·4벌 복사해 넣어
 * `heroEquity`의 균등 추출이 그대로 빈도 가중 추출이 된다. 죽은 카드(내 패·보드)와 겹치는 콤보는 뺀다.
 */
function expandPool(range: WeightedHole[], deadKeys: Set<number>): NCard[][] {
  const out: NCard[][] = [];
  for (const c of range) {
    if (deadKeys.has(keyOf(c.hole[0])) || deadKeys.has(keyOf(c.hole[1]))) continue;
    for (let k = Math.round(c.w / 25); k > 0; k--) out.push(c.hole);
  }
  return out;
}

/**
 * 이 상대가 **관측된 액션을 그대로 했을** 홀카드 조합 전부.
 *
 * ★2026-08-05 정정 — 처음엔 "폴드만 안 했으면 통과"로 만들었는데, 그러면
 *   **상대가 팟사이즈로 레이즈해도(=투페어 이상이라고 말해도) 원페어·드로우가 레인지에 남는다.**
 *   실측 결과 내 승률이 최대 +65%p 부풀려졌고 콜/폴드 판정이 정반대로 뒤집혔다.
 *   레이즈·콜은 폴드와 똑같이 **공개된 정보**다. 버리면 안 된다.
 */
function eligibleHoles(deadKeys: Set<number>, history: ActionStep[], preflop: WeightedHole[]): NCard[][] {
  // ★2026-10-11: 출발점이 «남은 카드 전부(1,081쌍)»에서 **그 상대의 프리플랍 레인지**로 바뀌었다.
  //   레이즈·콜이 공개 정보인 것처럼, 프리플랍에 팟에 들어왔다는 것도 공개 정보다.
  const kept: WeightedHole[] = [];
  for (const c of preflop) {
    if (deadKeys.has(keyOf(c.hole[0])) || deadKeys.has(keyOf(c.hole[1]))) continue;
    let ok = true;
    for (const step of history) {
      if (opponentAction(c.hole, step.board) !== step.action) { ok = false; break; }
    }
    if (ok) kept.push(c);
  }
  return expandPool(kept, deadKeys);
}

// ── 난수 ─────────────────────────────────────────────────────────────────────

/**
 * 시드 고정 난수(mulberry32). **같은 판이면 어느 기기에서 몇 번을 돌려도 같은 숫자**가 나온다.
 *
 * ★S-034 회차 2 (2026-10-11) — 그 전엔 Math.random + 시간 예산이라 같은 판도 기기마다
 *   표본 수가 달랐고(8,000~60,000) 마지막 자리가 흔들렸다. 계산을 웹 워커로 옮기면서
 *   «화면이 얼지 않게 표본을 줄이는» 이유가 사라져 표본을 고정하고 시드도 고정했다.
 */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ── 내 승률 (상대 패를 모르는 상태) ───────────────────────────────────────────

/** 승·무·패 분리 — 전부 % · equity = 승 + 무승부 몫(같이 이긴 사람 수로 나눈다) */
export interface EquitySplit {
  win: number;
  tie: number;
  lose: number;
  equity: number;
}

/**
 * 상대들의 홀카드가 미지수일 때 내 승률(승·무·패).
 *
 * @param pools  **상대별** 홀카드 후보 레인지(내 패·보드와 겹치는 콤보는 빠져 있어야 한다).
 *               상대마다 액션이 다르므로(한 명은 레이즈, 한 명은 콜) 레인지도 각각이다.
 *               후보가 한 개뿐인 레인지를 주면 그 패로 고정된다(공개된 패 계산).
 * ★무승부 몫: 2026-10-11 전에는 «무승부 = 절반»이라 3명 동점에서도 1/2을 셌다 → 1/동점자 수로 바로잡았다.
 */
export function heroEquity(
  heroCards: Card[],
  boardCards: Card[],
  pools: NCard[][][],
  samples: number,
  rng: () => number
): EquitySplit {
  const h = heroCards.map(toNum);
  const b = boardCards.map(toNum);
  const opponents = pools.length;
  const dead = new Set([...h, ...b].map(keyOf));
  const bag: NCard[] = [];
  for (let r = 2; r <= 14; r++)
    for (let s = 0; s < 4; s++) if (!dead.has(r * 4 + s)) bag.push([r, s]);

  const toCome = 5 - b.length;
  const holes: NCard[][] = Array.from({ length: opponents }, () => [[0, 0], [0, 0]]);
  const full: NCard[] = [...b];
  for (let i = b.length; i < 5; i++) full.push([0, 0]);
  const heroBuf: NCard[] = [h[0], h[1], full[0], full[1], full[2], full[3], full[4]];
  const oppBuf: NCard[] = [[0, 0], [0, 0], full[0], full[1], full[2], full[3], full[4]];

  let win = 0, tie = 0, share = 0, n = 0;
  const used = new Set<number>();

  for (let k = 0; k < samples; k++) {
    used.clear();
    let ok = true;

    // 1) 상대 홀카드 배정 — 상대마다 자기 액션에 맞는 레인지에서 뽑는다
    for (let o = 0; o < opponents; o++) {
      const pool = pools[o];
      let tries = 0;
      let picked: NCard[] | null = null;
      while (tries++ < 200) {
        const cand = pool[(rng() * pool.length) | 0];
        const k0 = keyOf(cand[0]), k1 = keyOf(cand[1]);
        if (used.has(k0) || used.has(k1)) continue;
        used.add(k0); used.add(k1);
        picked = cand;
        break;
      }
      if (!picked) { ok = false; break; }
      holes[o][0] = picked[0];
      holes[o][1] = picked[1];
    }
    if (!ok) continue; // 배정 실패 표본은 버린다(레인지가 극단적으로 좁을 때만 발생)
    // 2) 남은 보드는 아직 안 쓴 카드에서
    let filled = 0;
    let guard = 0;
    while (filled < toCome && guard++ < 400) {
      const c = bag[(rng() * bag.length) | 0];
      const kk = keyOf(c);
      if (used.has(kk)) continue;
      used.add(kk);
      full[b.length + filled] = c;
      filled++;
    }
    if (filled < toCome) continue;

    // 3) 승부 — 평가는 §13 검증 평가기가 한다
    for (let i = 0; i < 5; i++) { heroBuf[2 + i] = full[i]; oppBuf[2 + i] = full[i]; }
    const hs = best7fast(heroBuf);
    let best = -1, atBest = 0;
    for (let o = 0; o < opponents; o++) {
      oppBuf[0] = holes[o][0];
      oppBuf[1] = holes[o][1];
      const vs = best7fast(oppBuf);
      if (vs > best) { best = vs; atBest = 1; }
      else if (vs === best) atBest++;
    }
    if (hs > best) { win++; share++; }
    else if (hs === best) { tie++; share += 1 / (atBest + 1); }
    n++;
  }
  if (!n) return { win: 0, tie: 0, lose: 0, equity: 0 };
  return {
    win: (win / n) * 100,
    tie: (tie / n) * 100,
    lose: ((n - win - tie) / n) * 100,
    equity: (share / n) * 100,
  };
}

/**
 * **공개된 패끼리** 좌석마다의 승률 — 방송 화면 방식(S-034 ④).
 *
 * hands[0]은 나. 플랍부터는 남은 보드를 **전부 열거**(플랍 990 · 턴 44 · 리버 1)해서 정확한 값,
 * 프리플랍만 몬테카를로(표본 고정 · 시드 고정)다.
 * @returns equity = 좌석별 몫(%, 합계 100) · hero = 나의 승·무·패
 */
export function knownEquities(
  hands: Card[][],
  boardCards: Card[],
  samples: number,
  rng: () => number
): { equity: number[]; hero: EquitySplit } {
  const P = hands.length;
  const nums = hands.map((x) => x.map(toNum));
  const b = boardCards.map(toNum);
  const dead = new Set<number>();
  for (const x of nums) for (const c of x) dead.add(keyOf(c));
  for (const c of b) dead.add(keyOf(c));
  const rest: NCard[] = [];
  for (let r = 2; r <= 14; r++) for (let s = 0; s < 4; s++) if (!dead.has(r * 4 + s)) rest.push([r, s]);

  const bufs: NCard[][] = nums.map((x) => [x[0], x[1], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
  const eq = new Array<number>(P).fill(0);
  const sc = new Array<number>(P).fill(0);
  let heroWin = 0, heroTie = 0, total = 0;

  const settle = (full: NCard[]) => {
    let best = -1;
    for (let p = 0; p < P; p++) {
      const buf = bufs[p];
      for (let i = 0; i < 5; i++) buf[2 + i] = full[i];
      sc[p] = best7fast(buf);
      if (sc[p] > best) best = sc[p];
    }
    let w = 0;
    for (let p = 0; p < P; p++) if (sc[p] === best) w++;
    for (let p = 0; p < P; p++) if (sc[p] === best) eq[p] += 1 / w;
    if (sc[0] === best) { if (w === 1) heroWin++; else heroTie++; }
    total++;
  };

  const full: NCard[] = [...b];
  if (b.length === 5) settle(full);
  else if (b.length === 4) {
    for (const c of rest) { full[4] = c; settle(full); }
  } else if (b.length === 3) {
    for (let i = 0; i < rest.length; i++)
      for (let j = i + 1; j < rest.length; j++) { full[3] = rest[i]; full[4] = rest[j]; settle(full); }
  } else {
    const pool = [...rest];
    for (let k = 0; k < samples; k++) {
      for (let i = 0; i < 5; i++) {
        const j = i + ((rng() * (pool.length - i)) | 0);
        const t = pool[i]; pool[i] = pool[j]; pool[j] = t;
        full[i] = pool[i];
      }
      settle(full);
    }
  }
  return {
    equity: eq.map((e) => (e / total) * 100),
    hero: {
      win: (heroWin / total) * 100,
      tie: (heroTie / total) * 100,
      lose: ((total - heroWin - heroTie) / total) * 100,
      equity: (eq[0] / total) * 100,
    },
  };
}

// ── 아웃츠와 실전 암산(Rule of 2 and 4) ──────────────────────────────────────

export interface Outs {
  /** 플러시를 완성시키는 카드 수 */
  flush: number;
  /** 스트레이트를 완성시키는 카드 수 */
  straight: number;
  /** 둘 중 하나라도 완성시키는 카드 수 (겹치는 카드는 한 번만 센다) */
  total: number;
  /** 아직 볼 카드 수 — 플랍이면 2장, 턴이면 1장 */
  toCome: number;
}

/**
 * 내 드로우를 완성시키는 카드 수.
 *
 * ★"이기는 카드"가 아니라 **"드로우를 완성시키는 카드"**를 센다. 상대 패를 모르는 상태에서
 *   "이 카드가 오면 이긴다"는 셀 수 없고, 그렇게 세면 [[블로커]] 함정에 빠진다
 *   (내 플러시를 만드는 카드가 보드를 페어시켜 상대에게 풀하우스를 줄 수도 있다).
 *   화면에서도 "완성 카드"라고 부르고, 맞아도 이긴다는 보장은 없다고 밝힌다.
 * ★플러시는 **내 홀카드가 그 무늬에 기여할 때만** 센다. 보드에만 4장이면 5번째가 와도
 *   전원이 같은 플러시라 내 아웃츠가 아니다.
 * ★스트레이트도 같은 원칙 — **보드+그 카드만으로 완성되는 스트레이트는 전원 공유**라 내 아웃츠가
 *   아니다(보드 4-5-6-7에서 3·8을 "내 완성 카드"로 세면 안 된다. 2026-08-05 검수 판정 #2).
 */
export function heroOuts(heroCards: Card[], boardCards: Card[]): Outs {
  const h = heroCards.map(toNum);
  const b = boardCards.map(toNum);
  const seen = [...h, ...b];
  const toCome = 5 - b.length;
  if (b.length < 3 || toCome === 0) return { flush: 0, straight: 0, total: 0, toCome };

  const suitCount = [0, 0, 0, 0];
  const heroSuit = [0, 0, 0, 0];
  for (const c of seen) suitCount[c[1]]++;
  for (const c of h) heroSuit[c[1]]++;

  const ranksNow = new Set(seen.map((c) => c[0]));
  const boardRanks = new Set(b.map((c) => c[0]));
  const hasStraight = (set: Set<number>) => {
    const s = new Set(set);
    if (s.has(14)) s.add(1); // 휠(A-2-3-4-5)
    for (let lo = 1; lo <= 10; lo++) {
      let n = 0;
      for (let k = 0; k < 5; k++) if (s.has(lo + k)) n++;
      if (n === 5) return true;
    }
    return false;
  };
  const alreadyStraight = hasStraight(ranksNow);

  const dead = new Set(seen.map(keyOf));
  let flush = 0, straight = 0, total = 0;
  for (let r = 2; r <= 14; r++) {
    for (let s = 0; s < 4; s++) {
      if (dead.has(r * 4 + s)) continue;
      const makesFlush = suitCount[s] === 4 && heroSuit[s] > 0;
      let makesStraight = false;
      if (!alreadyStraight && !ranksNow.has(r)) {
        const next = new Set(ranksNow);
        next.add(r);
        makesStraight = hasStraight(next);
        if (makesStraight) {
          // 보드+이 카드만으로도 스트레이트면 전원 공유 — 내 아웃츠가 아니다
          const boardNext = new Set(boardRanks);
          boardNext.add(r);
          if (hasStraight(boardNext)) makesStraight = false;
        }
      } else if (!alreadyStraight && ranksNow.has(r)) {
        makesStraight = false; // 이미 있는 랭크는 스트레이트를 새로 만들지 못한다
      }
      if (makesFlush) flush++;
      if (makesStraight) straight++;
      if (makesFlush || makesStraight) total++;
    }
  }
  return { flush, straight, total, toCome };
}

/**
 * 실전 암산 — 아웃츠 × 2 / × 4.
 *
 * ★사이트 팟오즈 글(`lib/posts.ts` `holdem-pot-odds-calculation`)이 가르치는 것과 **같은 식**을 쓴다.
 *   두 장 볼 땐 ×4, 한 장이면 ×2, **아웃츠가 9개를 넘어가면(10부터) (아웃츠 − 8)만큼 뺀다.**
 *   글의 경계 그대로다 — 9아웃 플러시 드로우는 글처럼 36%(정확 34.97%, "2%p 이내" 범위)로 두고,
 *   10아웃 38 · 12아웃 44 · 15아웃 53으로 글의 예시와 같은 숫자가 나온다.
 *   (처음엔 9아웃부터 빼서 35%를 표시했는데, 같은 사이트의 두 화면이 9아웃에서
 *    다른 숫자를 보여주게 된다 — 2026-08-05 검수 판정 #3)
 */
export function ruleOf24(outs: number, toCome: number): number {
  if (outs <= 0 || toCome <= 0) return 0;
  if (toCome === 1) return outs * 2;
  return outs * 4 - (outs > 9 ? outs - 8 : 0);
}

// ── 한 판 전체 ───────────────────────────────────────────────────────────────

export interface StreetRecord {
  /** 0 프리플랍 · 1 플랍 · 2 턴 · 3 리버 */
  street: 0 | 1 | 2 | 3;
  /** 이 스트리트가 시작될 때 살아 있던 상대 수 */
  opponentsBefore: number;
  /** 이번에 폴드한 좌석(TableSim의 slot 번호) */
  foldedSlots: number[];
  /** 좌석별 액션 — 화면에 "레이즈·콜·폴드"를 붙이는 데 쓴다 */
  actionBySlot: Record<number, Action>;
  /** 상대가 건 금액 (0 = 아무도 안 걺) */
  bet: number;
  /** 베팅 전 팟 */
  potBefore: number;
  /** 내가 콜한 뒤의 팟 */
  potAfter: number;
  /** 내가 내야 하는 금액 */
  toCall: number;
  /** 팟오즈상 손익분기 승률 % (toCall이 0이면 null) */
  required: number | null;
  /** 상대 패를 모르는 상태에서의 내 승률 % (= split.equity) */
  equity: number;
  /** 같은 계산의 승·무·패 분리 (S-034 ④) */
  split: EquitySplit;
  /**
   * **공개된 패끼리** 좌석마다의 승률 — «상대 패 보기»·쇼다운·꺾은선용(S-034 ④).
   * slots[0] = 0(나) · 이 스트리트 액션 뒤에도 남아 있는 사람만. 화면 승률(equity)과 판정에는 안 쓴다.
   * ★null = 아직 계산 전. 첫 숫자를 빨리 보여 주려고 화면 승률 4스트리트를 먼저 다 낸 뒤에 채운다.
   */
  known: { slots: number[]; equity: number[]; hero: EquitySplit } | null;
  /** 이 승률이 자리별 프리플랍 레인지 기준인지(프리플랍), 그 위에 액션까지 맞춘 레인지 기준인지(플랍~) */
  basis: "seat" | "range";
  /** 팟오즈만 놓고 봤을 때의 판정 */
  verdict: "call" | "fold" | "free";
}

export interface HandResult {
  streets: StreetRecord[];
  /** 끝까지 남은 상대 좌석 */
  survivorSlots: number[];
  /** 전원이 폴드해 내가 그냥 가져간 시점 (없으면 null) */
  wonByFoldAt: 0 | 1 | 2 | 3 | null;
  /** 처음으로 "폴드가 맞았던" 스트리트 (없으면 null) */
  firstMistake: 0 | 1 | 2 | 3 | null;
  /** 내가 총 넣은 돈 */
  invested: number;
  finalPot: number;
  /** 스택을 다 넣었나 (올인) */
  allIn: boolean;
}

/** 프리플랍에 각자 넣고 들어온 금액 (칩 단위 — 사이트 팟오즈 글과 같은 정수 표기) */
export const ANTE = 20;

/**
 * 각자의 시작 스택.
 *
 * ★없으면 팟이 60 → 240 → 960 → 3,840으로 폭발한다(팟 사이즈 벳이 매번 전원 콜되므로).
 *   실전에서 그런 일이 안 벌어지는 이유가 스택이다. 넣고 나면 총 투자가 스택 이하로 묶인다.
 * ★모두 같은 액션(벳 또는 콜)을 하므로 살아 있는 사람들의 스택은 항상 같다.
 *   따라서 **사이드팟이 생기지 않는다** — 합의한 절단선(레이즈 응수·사이드팟 없음)이 유지된다.
 */
export const STACK = 1000;

/**
 * 승률 한 번에 쓰는 **고정** 표본 수. 화면의 규칙 설명이 이 값을 그대로 인용하므로
 * **export해서 손으로 적지 않게** 한다(숫자를 문장에 박아 두면 상수를 바꿨을 때 설명만 거짓이 된다).
 *
 * ★S-034 회차 2 (2026-10-11): 그 전엔 시간 예산(700ms)으로 8,000~60,000 사이에서 기기마다
 *   표본이 달랐다 — 메인 스레드에서 돌아 느린 기기가 얼어붙지 않게 하려는 장치였다.
 *   계산이 웹 워커(`_engine.worker.ts`)로 옮겨 가 화면이 얼 일이 없어졌으므로 **고정**하고
 *   시드도 판마다 고정한다(`mulberry32`) → 같은 판은 어느 기기에서든 같은 숫자.
 * ★표준오차: 40,000회 ≈ ±0.25%p · 20,000회 ≈ ±0.35%p(승률 50% 근처 최대치).
 *   known = 공개된 패끼리 프리플랍(플랍부터는 전수 열거라 표본이 없다).
 */
export const SAMPLES = { preflop: 40000, postflop: 20000, known: 40000 } as const;

/**
 * 한 판을 통째로 계산한다. 클릭할 때마다 계산하면 화면이 멈추므로 미리 다 구해 둔다.
 *
 * @param heroHand   내 홀카드
 * @param oppHands   상대 홀카드 (실제로 딜된 것 — 쇼다운 판정에만 쓰고 승률에는 절대 안 쓴다)
 * @param oppSlots   각 상대의 좌석 번호
 * @param board      보드 5장
 */
export function runHand(
  heroHand: Card[],
  oppHands: Card[][],
  oppSlots: number[],
  board: Card[],
  /** 상대별 프리플랍 레인지 (`TableSim.oppRanges` — 딜에 쓴 것과 같은 표) */
  oppRanges: WeightedHole[][],
  /** 판마다 고정된 시드 (`TableSim.seed`) — 같은 판은 같은 숫자 */
  seed: number,
  /** 스트리트가 하나 끝날 때마다 부른다 — 사용자가 프리플랍을 읽는 동안 나머지가 계산된다 */
  onStreet?: (streets: StreetRecord[]) => void
): HandResult {
  const rng = mulberry32(seed);
  const hN = heroHand.map(toNum);
  const oppN = oppHands.map((h) => h.map(toNum));
  const bN = board.map(toNum);

  let live = oppHands.map((_, i) => i); // 살아 있는 상대 인덱스
  let pot = ANTE * (oppHands.length + 1);
  let invested = ANTE;
  let remaining = STACK - ANTE; // 살아 있는 사람 모두가 같은 스택을 갖는다
  const streets: StreetRecord[] = [];
  /** 상대별 액션 이력 — 이게 곧 그 사람의 레인지다 */
  const history: ActionStep[][] = oppHands.map(() => []);
  let wonByFoldAt: HandResult["wonByFoldAt"] = null;
  /** 스트리트별로 액션 뒤에도 남아 있던 상대 인덱스 — 공개 승률을 뒤에서 채울 때 쓴다 */
  const liveAt: number[][] = [];

  for (let s = 0 as 0 | 1 | 2 | 3; s <= 3; s = (s + 1) as 0 | 1 | 2 | 3) {
    const shown = s === 0 ? 0 : s + 2; // 0 / 3 / 4 / 5
    const boardNow = bN.slice(0, shown);
    const opponentsBefore = live.length;

    // ── 상대 액션 (프리플랍은 좌석 배정 단계에서 이미 정해졌으므로 폴드 없음)
    const foldedSlots: number[] = [];
    const actionBySlot: Record<number, Action> = {};
    let bet = 0;
    if (s > 0 && live.length) {
      const stay: number[] = [];
      let strongest: Action = "fold";
      for (const i of live) {
        const a = opponentAction(oppN[i], boardNow);
        actionBySlot[oppSlots[i]] = a;
        history[i].push({ board: boardNow, action: a });
        if (a === "fold") { foldedSlots.push(oppSlots[i]); continue; }
        stay.push(i);
        if (a === "raise") strongest = "raise";
        else if (strongest !== "raise") strongest = "call";
      }
      live = stay;
      // 스택을 넘으면 올인 — 남은 스택 전부. 스택이 0이면 더 이상 베팅 없음
      if (live.length) bet = Math.min(strongest === "raise" ? pot : Math.round(pot / 2), remaining);
    }

    // ── 내 승률: 상대 패를 모른다는 전제로 계산한다 (실제 딜된 패는 쓰지 않는다)
    let split: EquitySplit = { win: 100, tie: 0, lose: 0, equity: 100 }; // 전원 폴드 = 팟은 내 것
    const basis: "seat" | "range" = s === 0 ? "seat" : "range";
    if (live.length) {
      if (s === 0) {
        const dead = new Set(hN.map(keyOf));
        const pools = live.map((i) => expandPool(oppRanges[i], dead));
        split = heroEquity(heroHand, [], pools, SAMPLES.preflop, rng);
      } else {
        // ★상대마다 «자기 프리플랍 레인지 ∩ 자기 액션 이력»으로 레인지를 만든다.
        //   한 명이 레이즈하고 한 명이 콜했으면 두 사람의 레인지는 서로 다르다.
        const dead = new Set([...hN, ...boardNow].map(keyOf));
        const pools = live.map((i) => eligibleHoles(dead, history[i], oppRanges[i]));
        split = heroEquity(heroHand, board.slice(0, shown), pools, SAMPLES.postflop, rng);
      }
    }
    const equity = split.equity;

    liveAt.push([...live]);

    // ── 팟오즈
    const potBefore = pot;
    const toCall = bet;
    let potAfter = pot;
    if (bet > 0) {
      potAfter = pot + bet * live.length + bet; // 벳·콜한 상대들 + 내 콜
      pot = potAfter;
      invested += bet;
      remaining -= bet;
    }
    const required = toCall > 0 ? (toCall / potAfter) * 100 : null;

    streets.push({
      street: s,
      opponentsBefore,
      foldedSlots,
      actionBySlot,
      bet,
      potBefore,
      potAfter,
      toCall,
      required,
      equity,
      split,
      known: null,
      basis,
      verdict: required === null ? "free" : equity >= required ? "call" : "fold",
    });
    onStreet?.([...streets]);

    if (!live.length) { wonByFoldAt = s; break; }
  }

  // ── 공개된 패끼리 (상대 패 보기·꺾은선용 — 위 승률·판정과 섞지 않는다)
  for (const r of streets) {
    const lv = liveAt[r.street];
    const k = lv.length
      ? knownEquities([heroHand, ...lv.map((i) => oppHands[i])], board.slice(0, r.street === 0 ? 0 : r.street + 2), SAMPLES.known, rng)
      : { equity: [100], hero: r.split };
    r.known = { slots: [0, ...lv.map((i) => oppSlots[i])], equity: k.equity, hero: k.hero };
    onStreet?.([...streets]);
  }

  const firstMistake = streets.find((r) => r.verdict === "fold")?.street ?? null;

  return {
    streets,
    survivorSlots: live.map((i) => oppSlots[i]),
    wonByFoldAt,
    firstMistake,
    invested,
    finalPot: pot,
    allIn: remaining <= 0,
  };
}
