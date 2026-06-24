import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { CURRENT_EVENT_ID, EVENT_CONDITION } from "@/lib/event-config";

/**
 * 비트코인 블록 해시 → 1~45 번호 6개 결정론적 추출
 *
 * 알고리즘:
 * 1. 블록 해시(64자리 hex)를 8자리씩 잘라 10진수로 변환
 * 2. 각 값을 (n % 45) + 1 로 1~45 범위로 변환
 * 3. 중복 없이 6개 선택
 */
function deriveNumbers(blockHash: string): number[] {
  const numbers: number[] = [];
  let idx = 0;
  while (numbers.length < 6 && idx + 8 <= blockHash.length) {
    const chunk = parseInt(blockHash.slice(idx, idx + 8), 16);
    const num = (chunk % 45) + 1;
    if (!numbers.includes(num)) numbers.push(num);
    idx += 8;
    // 해시 64자리로 부족하면 처음부터 다시 (salt 추가)
    if (idx + 8 > blockHash.length && numbers.length < 6) {
      idx = (idx % 8);
    }
  }
  return numbers.sort((a, b) => a - b);
}

/** ISO 주차 계산 (YYYY-WNN) */
function getIsoWeekId(date: Date): string {
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNo).padStart(2, "0")}`;
}

export async function GET(req: Request) {
  // Vercel Cron 인증 헤더 확인
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const eventId = getIsoWeekId(new Date());

  // Service Role로 Supabase 접근 (RLS 우회 필요)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // 이미 이번 주 추첨이 완료됐으면 스킵 (멱등성)
  const { data: existing } = await supabase
    .from("event_draws")
    .select("id")
    .eq("event_id", eventId)
    .single();

  if (existing) {
    return NextResponse.json({ ok: true, skipped: true, eventId });
  }

  // 비트코인 최신 블록 fetch (Blockstream 공개 API)
  const blockHeightRes = await fetch("https://blockstream.info/api/blocks/tip/height");
  if (!blockHeightRes.ok) throw new Error("Failed to fetch block height");
  const blockHeight = parseInt(await blockHeightRes.text());

  const blockHashRes = await fetch(`https://blockstream.info/api/block-height/${blockHeight}`);
  if (!blockHashRes.ok) throw new Error("Failed to fetch block hash");
  const blockHash = (await blockHashRes.text()).trim();

  // 번호 추출
  const winningNumbers = deriveNumbers(blockHash);
  const explorerUrl = `https://blockstream.info/block/${blockHash}`;

  // DB 저장
  const { error } = await supabase.from("event_draws").insert({
    event_id: eventId,
    block_height: blockHeight,
    block_hash: blockHash,
    winning_numbers: winningNumbers,
    explorer_url: explorerUrl,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    eventId,
    blockHeight,
    blockHash,
    winningNumbers,
    explorerUrl,
  });
}
