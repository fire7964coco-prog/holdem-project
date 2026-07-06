import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { getIsoWeekId } from "@/lib/event-config";
import { performDraw } from "@/lib/event-draw";

/**
 * 매주 일요일 10:00 UTC(19:00 KST) Vercel Cron이 호출.
 * 그 시점 최신 비트코인 블록 해시로 당첨번호 6개를 결정론적으로 뽑아 저장한다.
 * 추첨 로직은 lib/event-draw.ts(performDraw)에 있어 어드민 수동 테스트와 공유.
 */
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

  const { result, skipped, error } = await performDraw(supabase, eventId);

  if (error) return NextResponse.json({ error }, { status: 500 });
  if (skipped) return NextResponse.json({ ok: true, skipped: true, eventId });

  return NextResponse.json({ ok: true, ...result });
}
