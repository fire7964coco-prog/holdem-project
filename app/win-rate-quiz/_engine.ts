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
 * 이 상대가 **관측된 액션을 그대로 했을** 홀카드 조합 전부.
 *
 * ★2026-08-05 정정 — 처음엔 "폴드만 안 했으면 통과"로 만들었는데, 그러면
 *   **상대가 팟사이즈로 레이즈해도(=투페어 이상이라고 말해도) 원페어·드로우가 레인지에 남는다.**
 *   실측 결과 내 승률이 최대 +65%p 부풀려졌고 콜/폴드 판정이 정반대로 뒤집혔다.
 *   레이즈·콜은 폴드와 똑같이 **공개된 정보**다. 버리면 안 된다.
 */
function eligibleHoles(deadKeys: Set<number>, history: ActionStep[]): NCard[][] {
  const deck: NCard[] = [];
  for (let r = 2; r <= 14; r++)
    for (let s = 0; s < 4; s++) if (!deadKeys.has(r * 4 + s)) deck.push([r, s]);
  const out: NCard[][] = [];
  for (let i = 0; i < deck.length; i++) {
    for (let j = i + 1; j < deck.length; j++) {
      const hole = [deck[i], deck[j]];
      let ok = true;
      for (const step of history) {
        if (opponentAction(hole, step.board) !== step.action) { ok = false; break; }
      }
      if (ok) out.push(hole);
    }
  }
  return out;
}

/** 메인스레드를 잠깐 놓아준다 — 안 하면 계산이 1.6초짜리 long task가 되어 화면이 얼어붙는다 */
const yieldToMain = () => new Promise<void>((r) => setTimeout(r, 0));

/** 한 번에 돌리는 표본 수 (이 단위마다 메인스레드에 양보한다) */
const CHUNK = 4000;

// ── 내 승률 (상대 패를 모르는 상태) ───────────────────────────────────────────

/**
 * 상대들의 홀카드가 미지수일 때 내 승률 %. 무승부는 절반으로 센다.
 *
 * @param pools  **상대별** 홀카드 후보 레인지. null이면 전원 무작위(프리플랍).
 *               상대마다 액션이 다르므로(한 명은 레이즈, 한 명은 콜) 레인지도 각각이다.
 * @param onChunk 표본 CHUNK개마다 불린다 — 메인스레드 양보용
 */
export async function heroEquity(
  heroCards: Card[],
  boardCards: Card[],
  opponents: number,
  pools: NCard[][][] | null,
  samples: number
): Promise<number> {
  const h = heroCards.map(toNum);
  const b = boardCards.map(toNum);
  const dead = new Set([...h, ...b].map(keyOf));
  const deck: NCard[] = [];
  for (let r = 2; r <= 14; r++)
    for (let s = 0; s < 4; s++) if (!dead.has(r * 4 + s)) deck.push([r, s]);

  const toCome = 5 - b.length;
  const holes: NCard[][] = Array.from({ length: opponents }, () => [[0, 0], [0, 0]]);
  const full: NCard[] = [b[0], b[1], b[2], b[3], b[4]].slice(0, b.length) as NCard[];
  for (let i = b.length; i < 5; i++) full.push([0, 0]);
  const heroBuf: NCard[] = [h[0], h[1], full[0], full[1], full[2], full[3], full[4]];
  const oppBuf: NCard[] = [[0, 0], [0, 0], full[0], full[1], full[2], full[3], full[4]];

  let win = 0, tie = 0, n = 0;
  const used = new Set<number>();
  const bag = [...deck];

  for (let k = 0; k < samples; k++) {
    // 메인스레드 양보 — 이게 없으면 전체가 하나의 long task가 되어 화면이 얼어붙는다
    if (k > 0 && k % CHUNK === 0) await yieldToMain();
    used.clear();
    let ok = true;

    // 1) 상대 홀카드 배정 — 상대마다 자기 액션에 맞는 레인지에서 뽑는다
    if (pools) {
      for (let o = 0; o < opponents; o++) {
        const pool = pools[o];
        let tries = 0;
        let picked: NCard[] | null = null;
        while (tries++ < 200) {
          const cand = pool[(Math.random() * pool.length) | 0];
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
        const c = bag[(Math.random() * bag.length) | 0];
        const kk = keyOf(c);
        if (used.has(kk)) continue;
        used.add(kk);
        full[b.length + filled] = c;
        filled++;
      }
      if (filled < toCome) continue;
    } else {
      // 무작위 상대 — 부분 Fisher-Yates 한 번으로 상대 홀카드 + 남은 보드를 뽑는다
      const need = opponents * 2 + toCome;
      for (let i = 0; i < need; i++) {
        const j = i + ((Math.random() * (bag.length - i)) | 0);
        const t = bag[i]; bag[i] = bag[j]; bag[j] = t;
      }
      for (let o = 0; o < opponents; o++) {
        holes[o][0] = bag[o * 2];
        holes[o][1] = bag[o * 2 + 1];
      }
      for (let i = 0; i < toCome; i++) full[b.length + i] = bag[opponents * 2 + i];
    }

    // 3) 승부 — 평가는 §13 검증 평가기가 한다
    for (let i = 0; i < 5; i++) { heroBuf[2 + i] = full[i]; oppBuf[2 + i] = full[i]; }
    const hs = best7fast(heroBuf);
    let best = -1;
    for (let o = 0; o < opponents; o++) {
      oppBuf[0] = holes[o][0];
      oppBuf[1] = holes[o][1];
      const vs = best7fast(oppBuf);
      if (vs > best) best = vs;
    }
    if (hs > best) win++;
    else if (hs === best) tie++;
    n++;
  }
  return n ? ((win + tie / 2) / n) * 100 : 0;
}

/**
 * **공개된 상대 패**를 그대로 놓고 계산한 내 승률.
 *
 * ★2026-08-05 신설 — 「상대 패 보기」를 눌러도 화면 승률은 레인지 기준이라
 *   보이는 카드와 무관한 숫자가 된다(실측 스팟에서 20.1% vs 27.9%, 7.8%p 차이).
 *   두 값을 나란히 보여주기 위한 것이다.
 * ★구현은 `heroEquity`를 그대로 쓴다 — 상대마다 **후보가 한 개뿐인 레인지**를 주면
 *   그 패로 고정된다. 청크 양보도 함께 물려받아 화면이 안 얼어붙는다.
 */
export function heroEquityVsKnown(
  heroCards: Card[],
  boardCards: Card[],
  oppHands: Card[][],
  samples: number
): Promise<number> {
  const pools = oppHands.map((h) => [h.map(toNum)]);
  return heroEquity(heroCards, boardCards, oppHands.length, pools, samples);
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
  /** 상대 패를 모르는 상태에서의 내 승률 % */
  equity: number;
  /** 이 승률이 무작위 상대 기준인지, 규칙 레인지 기준인지 */
  basis: "random" | "range";
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
 * 표본 수. 화면의 규칙 설명이 이 값을 그대로 인용하므로 **export해서 손으로 적지 않게** 한다
 * (숫자를 문장에 박아 두면 상수를 바꿨을 때 설명만 거짓이 된다 — 이 프로젝트에서 반복된 사고다).
 */
export const SAMPLES = { preflop: 60000, postflop: 30000 } as const;

/**
 * 한 판을 통째로 계산한다. 클릭할 때마다 계산하면 화면이 멈추므로 미리 다 구해 둔다.
 *
 * @param heroHand   내 홀카드
 * @param oppHands   상대 홀카드 (실제로 딜된 것 — 쇼다운 판정에만 쓰고 승률에는 절대 안 쓴다)
 * @param oppSlots   각 상대의 좌석 번호
 * @param board      보드 5장
 */
export async function runHand(
  heroHand: Card[],
  oppHands: Card[][],
  oppSlots: number[],
  board: Card[],
  /** 스트리트가 하나 끝날 때마다 부른다 — 사용자가 프리플랍을 읽는 동안 나머지가 계산된다 */
  onStreet?: (streets: StreetRecord[]) => void
): Promise<HandResult> {
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
    let equity = 0;
    const basis: "random" | "range" = s === 0 ? "random" : "range";
    if (live.length) {
      if (s === 0) {
        equity = await heroEquity(heroHand, [], live.length, null, SAMPLES.preflop);
      } else {
        // ★상대마다 자기 액션 이력에 맞는 레인지를 만든다.
        //   한 명이 레이즈하고 한 명이 콜했으면 두 사람의 레인지는 서로 다르다.
        const dead = new Set([...hN, ...boardNow].map(keyOf));
        const pools = live.map((i) => eligibleHoles(dead, history[i]));
        equity = await heroEquity(heroHand, board.slice(0, shown), live.length, pools, SAMPLES.postflop);
      }
    } else {
      equity = 100; // 전원 폴드 = 팟은 내 것
    }

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
      basis,
      verdict: required === null ? "free" : equity >= required ? "call" : "fold",
    });
    onStreet?.([...streets]);

    if (!live.length) { wonByFoldAt = s; break; }
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
