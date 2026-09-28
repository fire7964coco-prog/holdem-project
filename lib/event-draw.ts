import { createHash } from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * 비트코인 블록 해시(64자리 hex) → 1~45 번호 6개 결정론적 추출.
 * 누구나 블록 탐색기의 해시로 재현·검증할 수 있다:
 *   i = 0, 1, 2, … 에 대해 SHA-256("<blockHash>:<i>")의 앞 8자리(hex) → (n % 45) + 1, 중복은 건너뛴다.
 *
 * ⚠ 블록 해시를 그대로 자르면 안 된다 — 작업증명 때문에 앞 19자리 안팎이 항상 0이라
 *   첫 조각이 늘 0 → 번호 1이 매 회차 당첨번호에 들어갔다(2026-W28~W39 9회 전부).
 *   조각도 6개뿐이라 중복이 나면 무한 루프에 빠질 수 있었다. (2026-09-28 수정)
 */
export function deriveNumbers(blockHash: string): number[] {
  const numbers: number[] = [];
  for (let i = 0; numbers.length < 6; i++) {
    const digest = createHash("sha256").update(`${blockHash}:${i}`).digest("hex");
    const num = (parseInt(digest.slice(0, 8), 16) % 45) + 1;
    if (!numbers.includes(num)) numbers.push(num);
  }
  return numbers.sort((a, b) => a - b);
}

export type DrawResult = {
  event_id: string;
  block_height: number;
  block_hash: string;
  winning_numbers: number[];
  explorer_url: string;
};

/**
 * 추첨 실행 — 최신 비트코인 블록 해시로 당첨번호를 뽑아 event_draws에 저장.
 * 크론(일요일)과 어드민 수동 테스트가 공유한다.
 *
 * @param force true면 이미 존재하는 회차도 덮어쓴다(테스트용). 기본 false = 멱등(스킵).
 */
export async function performDraw(
  supabase: SupabaseClient,
  eventId: string,
  opts: { force?: boolean } = {}
): Promise<{ result?: DrawResult; skipped?: boolean; error?: string }> {
  const { data: existing } = await supabase
    .from("event_draws")
    .select("id")
    .eq("event_id", eventId)
    .maybeSingle();

  if (existing) {
    if (!opts.force) return { skipped: true };
    await supabase.from("event_draws").delete().eq("event_id", eventId);
  }

  // 최신 블록 높이 → 해시 (Blockstream 공개 API)
  const heightRes = await fetch("https://blockstream.info/api/blocks/tip/height");
  if (!heightRes.ok) return { error: "블록 높이 조회 실패" };
  const blockHeight = parseInt(await heightRes.text());

  const hashRes = await fetch(`https://blockstream.info/api/block-height/${blockHeight}`);
  if (!hashRes.ok) return { error: "블록 해시 조회 실패" };
  const blockHash = (await hashRes.text()).trim();

  const winningNumbers = deriveNumbers(blockHash);
  const explorerUrl = `https://blockstream.info/block/${blockHash}`;

  const { error } = await supabase.from("event_draws").insert({
    event_id: eventId,
    block_height: blockHeight,
    block_hash: blockHash,
    winning_numbers: winningNumbers,
    explorer_url: explorerUrl,
  });

  if (error) return { error: error.message };

  return {
    result: {
      event_id: eventId,
      block_height: blockHeight,
      block_hash: blockHash,
      winning_numbers: winningNumbers,
      explorer_url: explorerUrl,
    },
  };
}
