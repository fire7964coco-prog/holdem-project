// 결과 화면 «이 자리를 GTO 솔버로 보기» 링크 (S-034 2차 ⑥ · 2026-10-12 · 언어 중립).
//
// ★링크 규격 = 솔버 «플랍 조회» 딥링크 `?view=flop-study&spot=<상황 id>&flop=<카드 3장>`
//   (솔버 `flop-study-model.ts` parseFlopStudyLink · 본체 사용 허가 = 솔버 S-083 ③ 10-12).
//   솔버 소스는 AGPL-3.0이라 코드는 옮기지 않는다 — 아래는 이 파일이 따로 짰다.
// ★솔버의 미리 계산한 결과는 **6맥스 100bb 1대1 팟**뿐이다. 그래서 바로 여는 건
//   «6인 테이블 · 프리플랍 2명 · 그 오픈·콜 조합이 준비된 상황»일 때만이고,
//   나머지는 이유를 한 줄로 밝히고 플랍 조회 첫 화면으로 보낸다(없는 상황을 연다고 쓰지 않는다).

import type { Card } from "./_equity";
import { positionAt, type TableSim } from "./_table";

const SOLVER = "https://solver.holdemmaster.com/";

/**
 * 플랍 조회에 미리 계산된 싱글 레이즈 팟(오픈 · 콜) — `srp-<오픈>-<콜>`.
 * 출처 = 솔버 `hand-review-data.ts` readyScenarios(10-12 · 3벳·4벳 팟은 이 도구에 없는 팟이라 뺐다).
 * 솔버가 조합을 늘리면 S-행으로 알린다 → 그때 여기에 더한다.
 */
const READY_SRP = new Set([
  "srp-btn-bb", "srp-sb-bb", "srp-co-bb", "srp-hj-bb", "srp-utg-bb",
  "srp-co-btn", "srp-hj-btn", "srp-utg-btn", "srp-hj-co",
]);

export type SolverLinkInfo =
  /** 같은 자리(·플랍)를 바로 연다. flop = 플랍까지 간 판만 */
  | { kind: "spot"; opener: string; caller: string; flop: Card[] | null }
  /** 1대1이지만 그 오픈·콜 조합이 아직 미리 계산되지 않았다 */
  | { kind: "notReady"; opener: string; caller: string }
  /** 프리플랍에 3명 이상 */
  | { kind: "multiway"; players: number }
  /** 9인 테이블 (솔버 자료는 6맥스 기준) */
  | { kind: "table9" };

const SUIT_LETTER: Record<string, string> = { "♠": "s", "♥": "h", "♦": "d", "♣": "c" };
/** «10♦» → «Td» (솔버 카드 표기) */
const cardText = (c: Card) => (c.rank === "10" ? "T" : c.rank) + SUIT_LETTER[c.suit];

/** reachedFlop = 플랍을 실제로 깠나(프리플랍에서 끝난 판은 상황만 연다) */
export function solverLinkFor(sim: TableSim, reachedFlop: boolean, lang: string): { info: SolverLinkInfo; href: string } {
  const study = `${SOLVER}?view=flop-study&lang=${lang}`;
  if (sim.size !== 6) return { info: { kind: "table9" }, href: study };
  if (sim.activeSlots.length !== 2) return { info: { kind: "multiway", players: sim.activeSlots.length }, href: study };

  const role = sim.oppRoles[0];
  const heroPos = positionAt(sim.heroPos, 0, sim.size);
  const opener = role.kind === "open" ? role.pos : heroPos;
  const caller = role.kind === "open" ? heroPos : role.pos;
  const spot = `srp-${opener}-${caller}`.toLowerCase();
  if (!READY_SRP.has(spot)) return { info: { kind: "notReady", opener, caller }, href: study };

  // ★지금은 프리플랍 폴드가 없어(`runHand`) reachedFlop이 항상 참 → flop=null 분기는 도달하지 않는다.
  //   프리플랍 폴드를 넣는 날: 솔버는 flop 없이 열면 기본 플랍(A♥7♦2♣)을 자동으로 띄우므로
  //   solverNote의 «플랍 3장은 솔버 화면에서 골라 보세요»를 «기본 플랍으로 열립니다» 꼴로 6언어 같이 고친다(MA-491 통지 ②).
  const flop = reachedFlop ? sim.board.slice(0, 3) : null;
  const q = new URLSearchParams({ view: "flop-study", spot });
  if (flop) q.set("flop", flop.map(cardText).join(""));
  q.set("lang", lang);
  return { info: { kind: "spot", opener, caller, flop }, href: `${SOLVER}?${q.toString()}` };
}
