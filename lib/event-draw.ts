import type { SupabaseClient } from "@supabase/supabase-js";

/**
 * 비트코인 블록 해시(64자리 hex) → 1~45 번호 6개 결정론적 추출.
 * 8자리씩 잘라 (n % 45) + 1, 중복 제외. 누구나 블록 탐색기로 검증 가능.
 */
export function deriveNumbers(blockHash: string): number[] {
  const numbers: number[] = [];
  let idx = 0;
  while (numbers.length < 6 && idx + 8 <= blockHash.length) {
    const chunk = parseInt(blockHash.slice(idx, idx + 8), 16);
    const num = (chunk % 45) + 1;
    if (!numbers.includes(num)) numbers.push(num);
    idx += 8;
    if (idx + 8 > blockHash.length && numbers.length < 6) {
      idx = idx % 8;
    }
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
