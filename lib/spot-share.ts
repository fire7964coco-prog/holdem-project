import { createHash } from "node:crypto";

/**
 * 솔버 스팟 공유 짧은 주소 (2026-10-09 · 후기창 코드 2 · 설계 docs/solver-review-design.md §8 ②)
 *
 * 🔴 솔버 코드를 옮겨 심지 않는다(솔버 저장소 = AGPL-3.0). 이 파일은 솔버가 보낸 «형식 명세»만 보고 새로 짰다:
 *    ../클로드-프로그램만들기/handoff-to-main-site/공유링크_형식명세_2026-10-04.md
 *    (payload = UTF-8 JSON 의 base64url · 상한 16384자 · v 1~3 · o·i·b 비지 않은 문자열 · 형식 맞는 카드 3장 이상)
 * 🔴 meta 는 서버가 payload 를 디코드해 만든다 — 클라이언트가 보낸 meta 는 받지 않는다.
 * v4 가 오면 솔버가 명세를 갱신해 알린다 → 그때 SPOT_VERSIONS 를 늘린다.
 */

export const SPOT_PAYLOAD_MAX = 16384;
export const SPOT_VERSIONS = [1, 2, 3] as const;
export const SPOT_SHARES_PER_IP_PER_HOUR = 30;
export const SOLVER_APP_URL = "https://solver.holdemmaster.com/";
export const SPOT_SHARE_ID_PATTERN = /^[A-Za-z0-9_-]{10}$/;

const B64URL = /^[A-Za-z0-9_-]+$/;
const CARD = /^([2-9TJQKAtjqka])([cdhs])$/;

export type SpotMeta = {
  v: 1 | 2 | 3;
  board: string[]; // "Ks" 꼴 — 랭크 대문자 · 무늬 소문자
  pot: number | null;
  stack: number | null;
  unit: 1 | 10 | null; // 10 = 0.1bb 단위(교육 예제)
};

export type SpotParse = { ok: true; meta: SpotMeta } | { ok: false; error: "length" | "charset" | "decode" | "version" | "fields" | "board" };

const num = (x: unknown): number | null => (typeof x === "number" && Number.isFinite(x) ? x : null);

export function parseSpotPayload(p: unknown): SpotParse {
  if (typeof p !== "string" || p.length === 0 || p.length > SPOT_PAYLOAD_MAX) return { ok: false, error: "length" };
  if (!B64URL.test(p)) return { ok: false, error: "charset" };
  let obj: any;
  try {
    obj = JSON.parse(Buffer.from(p, "base64url").toString("utf8"));
  } catch {
    return { ok: false, error: "decode" };
  }
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return { ok: false, error: "decode" };
  if (!SPOT_VERSIONS.includes(obj.v)) return { ok: false, error: "version" };
  for (const k of ["o", "i", "b"]) if (typeof obj[k] !== "string" || !obj[k].trim()) return { ok: false, error: "fields" };
  // 솔버와 같은 기준: 형식에 안 맞는 조각은 버리고 3장 미만이면 링크 무효
  const board = (obj.b as string).split(" ")
    .map((c) => CARD.exec(c))
    .filter((m): m is RegExpExecArray => !!m)
    .map((m) => m[1].toUpperCase() + m[2])
    .slice(0, 5);
  if (board.length < 3) return { ok: false, error: "board" };
  const unit = obj.u === 10 ? 10 : obj.u === 1 ? 1 : null;
  return { ok: true, meta: { v: obj.v, board, pot: num(obj.sp), stack: num(obj.es), unit } };
}

/** 같은 payload = 같은 id(중복 저장 안 함). sha256 → base64url 10자(60비트). */
export function spotShareId(payload: string): string {
  return createHash("sha256").update(`hm-spot:${payload}`).digest("base64url").slice(0, 10);
}

export function spotShareIpHash(ip: string): string {
  return createHash("sha256").update(`hm-spot-ip:${ip}`).digest("hex").slice(0, 32);
}

/** 팟·스택 표시 — u=10 이면 0.1bb 단위라 bb 로, 아니면 칩 숫자 그대로(명세 §2) */
export function formatSpotAmount(n: number | null, unit: SpotMeta["unit"]): string | null {
  if (n === null) return null;
  if (unit === 10) return `${Math.round(n) / 10}bb`;
  return String(n);
}

export function solverOpenUrl(payload: string, lang: string): string {
  return `${SOLVER_APP_URL}?spot=${payload}&lang=${encodeURIComponent(lang)}`;
}
