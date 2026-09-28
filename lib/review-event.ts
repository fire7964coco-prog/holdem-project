import { createHash } from "node:crypto";
import type { SupabaseClient } from "@supabase/supabase-js";
import { REVIEW_EVENT, entryDeadlineInstant, isDrawDue, reviewTournamentById } from "./participation-config";
import { TOURNAMENTS } from "./tournaments";

/**
 * 대회 후기 이벤트 추첨 (2026-09-28 · 설계 docs/participation-event-redesign-design.md §4)
 *
 * 검증 방법(누구나 재현 가능):
 *   ⓪ 추첨 블록 = 응모 마감 순간(마감일 23:59:59.999 KST) «뒤에» 처음 채굴된 비트코인 블록 — fetchFirstBlockAfter.
 *      실행 시각과 상관없이 늘 같은 블록이라, 다시 돌려도(같은 응모 목록이면) 같은 당첨자가 나온다.
 *      마감 전에는 그 블록이 존재하지 않으므로 운영자도 결과를 미리 알 수 없다.
 *   ① 응모 목록 = 그 대회의 응모 후기를 «작성 시각 → id» 순으로 늘어놓은 것(응모 번호 = 순서 + 1)
 *   ② i = 0, 1, 2, … 에 대해 SHA-256("<blockHash>:<i>") 의 앞 8자리(hex) → 정수 % 응모 수 = 당첨 순번(0부터)
 *   ③ 이미 뽑힌 순번은 건너뛰고, 당첨자 수(= min(추첨 인원, 응모 수))가 찰 때까지 반복
 * 번호 추첨(lib/event-draw.ts deriveNumbers)과 같은 해시 방식이다 — 블록 해시를 그대로 자르지 않는다.
 */
export function pickWinnerIndices(blockHash: string, entryCount: number, winners: number): number[] {
  const k = Math.max(0, Math.min(winners, entryCount));
  const picked: number[] = [];
  for (let i = 0; picked.length < k; i++) {
    const digest = createHash("sha256").update(`${blockHash}:${i}`).digest("hex");
    const idx = parseInt(digest.slice(0, 8), 16) % entryCount;
    if (!picked.includes(idx)) picked.push(idx);
  }
  return picked;
}

/**
 * 주어진 순간 «뒤에» 채굴된 첫 블록. 순간 직전 블록 높이는 mempool.space(타임스탬프 → 블록) 공개 API로 찾고,
 * 그다음 높이부터 blockstream.info 에서 블록 타임스탬프가 그 순간보다 늦은 첫 블록을 고른다.
 * 아직 채굴되지 않았으면 error.
 */
export async function fetchFirstBlockAfter(instantIso: string): Promise<
  { blockHeight: number; blockHash: string; explorerUrl: string } | { error: string }
> {
  const ts = Math.floor(Date.parse(instantIso) / 1000);
  if (!Number.isFinite(ts)) return { error: "마감 시각 형식 오류" };
  const near = await fetch(`https://mempool.space/api/v1/mining/blocks/timestamp/${ts}`, { cache: "no-store" });
  if (!near.ok) return { error: "마감 시각의 블록을 찾지 못했습니다" };
  const n = await near.json() as { height?: number; timestamp?: string };
  if (!Number.isInteger(n.height)) return { error: "마감 시각 블록 응답 형식 오류" };
  const nearTs = n.timestamp ? Math.floor(Date.parse(n.timestamp) / 1000) : ts;
  let h = (nearTs <= ts ? n.height! + 1 : n.height!);
  for (let tries = 0; tries < 30; tries++, h++) {
    const hashRes = await fetch(`https://blockstream.info/api/block-height/${h}`, { cache: "no-store" });
    if (hashRes.status === 404) return { error: "응모 마감 뒤 블록이 아직 채굴되지 않았습니다" };
    if (!hashRes.ok) return { error: "블록 해시 조회 실패" };
    const blockHash = (await hashRes.text()).trim();
    if (!/^[0-9a-f]{64}$/.test(blockHash)) return { error: "블록 해시 형식 오류" };
    const blockRes = await fetch(`https://blockstream.info/api/block/${blockHash}`, { cache: "no-store" });
    if (!blockRes.ok) return { error: "블록 정보 조회 실패" };
    const b = await blockRes.json() as { timestamp?: number };
    if (typeof b.timestamp === "number" && b.timestamp > ts) {
      return { blockHeight: h, blockHash, explorerUrl: `https://blockstream.info/block/${blockHash}` };
    }
  }
  return { error: "마감 뒤 블록을 30개 안에서 찾지 못했습니다" };
}

/** 대회 id → 종료일(lib/tournaments.ts가 정본). 없으면 null */
export function tournamentDates(id: string): { startDate: string; endDate: string } | null {
  const t = TOURNAMENTS.find((x) => x.id === id);
  if (!t || !t.startDate || !t.endDate) return null;
  return { startDate: t.startDate, endDate: t.endDate };
}

/** 응모 목록(추첨 순서가 고정된 후기 id 배열) */
export async function loadEntryIds(db: SupabaseClient, tournamentId: string, endDate: string) {
  const { data, error } = await db
    .from("tournament_reviews")
    .select("id, created_at")
    .eq("tournament_id", tournamentId)
    .eq("is_event_entry", true)
    .eq("is_hidden", false)
    .lte("created_at", entryDeadlineInstant(endDate))
    .order("created_at", { ascending: true })
    .order("id", { ascending: true })
    .limit(5000);
  if (error) return { error: error.message };
  return { ids: (data ?? []).map((r: { id: string }) => r.id) };
}

/**
 * 추첨 실행. 크론(일요일)과 어드민 수동 실행이 같이 쓴다.
 * 🔴 응모 마감 전에는 거부한다 — 마감 전에 뽑으면 그 뒤 응모자가 영구히 빠진다(09-28 검토 지적).
 * 이미 추첨한 회차는 건너뛴다(멱등).
 */
export async function performReviewDraw(
  db: SupabaseClient,
  tournamentId: string,
): Promise<{ skipped?: boolean; error?: string; entryCount?: number; winnerCount?: number }> {
  if (!reviewTournamentById(tournamentId)) return { error: "대상 대회가 아닙니다" };
  const dates = tournamentDates(tournamentId);
  if (!dates) return { error: "대회 날짜를 찾지 못했습니다" };

  const { data: existing, error: exErr } = await db
    .from("review_event_draws")
    .select("tournament_id")
    .eq("tournament_id", tournamentId)
    .maybeSingle();
  if (exErr) return { error: exErr.message };
  if (existing) return { skipped: true };
  if (!isDrawDue(dates.endDate, new Date())) return { error: "응모 마감 전에는 추첨할 수 없습니다" };

  const entries = await loadEntryIds(db, tournamentId, dates.endDate);
  if ("error" in entries) return { error: entries.error };

  const block = await fetchFirstBlockAfter(entryDeadlineInstant(dates.endDate));
  if ("error" in block) return { error: block.error };

  const idx = entries.ids.length ? pickWinnerIndices(block.blockHash, entries.ids.length, REVIEW_EVENT.drawWinners) : [];
  const row = {
    tournament_id: tournamentId,
    block_height: block.blockHeight,
    block_hash: block.blockHash,
    explorer_url: block.explorerUrl,
    entry_ids: entries.ids,
    winner_ids: idx.map((i) => entries.ids[i]),
    drawn_at: new Date().toISOString(),
  };
  const { error } = await db.from("review_event_draws").insert(row);
  if (error) return { error: error.message };
  return { entryCount: entries.ids.length, winnerCount: row.winner_ids.length };
}
