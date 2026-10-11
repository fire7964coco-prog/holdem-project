// 승률 계산 웹 워커 — `_engine.ts`의 runHand를 메인 스레드 밖에서 돌린다 (S-034 회차 2 · 2026-10-11).
//
// ★왜: 그 전엔 메인 스레드에서 25ms씩 쪼개 돌리고 700ms 예산을 넘기면 표본을 줄였다.
//   그래서 같은 판도 기기마다 표본 수가 달랐다. 워커에서는 화면이 얼 일이 없으니 표본·시드를 고정한다.
// ★계산 로직은 여기 한 줄도 없다 — 메시지를 받아 runHand를 부르고 결과를 돌려줄 뿐이다.

import { runHand, type HandResult, type StreetRecord } from "./_engine";
import type { Card } from "./_equity";
import type { WeightedHole } from "./_ranges";

export interface HandRequest {
  id: number;
  heroHand: Card[];
  oppHands: Card[][];
  oppSlots: number[];
  board: Card[];
  oppRanges: WeightedHole[][];
  seed: number;
}

export type HandMessage =
  | { id: number; type: "streets"; streets: StreetRecord[] }
  | { id: number; type: "done"; result: HandResult };

self.onmessage = (e: MessageEvent<HandRequest>) => {
  const q = e.data;
  const result = runHand(q.heroHand, q.oppHands, q.oppSlots, q.board, q.oppRanges, q.seed, (streets) => {
    (self as unknown as Worker).postMessage({ id: q.id, type: "streets", streets } satisfies HandMessage);
  });
  (self as unknown as Worker).postMessage({ id: q.id, type: "done", result } satisfies HandMessage);
};
