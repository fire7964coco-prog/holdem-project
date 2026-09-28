import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { EVENT_OPERATION, getIsoWeekId } from "@/lib/event-config";
import { performDraw } from "@/lib/event-draw";
import { REVIEW_TOURNAMENTS, isDrawDue } from "@/lib/participation-config";
import { performReviewDraw, tournamentDates } from "@/lib/review-event";

/**
 * 매주 일요일 10:00 UTC(19:00 KST) Vercel Cron이 호출.
 *
 * ① 매주 번호 추첨 — EVENT_OPERATION.acceptingEntries 가 true일 때만(2026-09-28부터 멈춤).
 *    그 시점 최신 비트코인 블록 해시로 당첨번호 6개를 결정론적으로 뽑아 저장한다(lib/event-draw.ts).
 * ② 대회 후기 이벤트 추첨 — 응모 마감일(KST)이 지났고 아직 추첨하지 않은 대회를 추첨한다(lib/review-event.ts).
 *    크론이 일요일에만 돌므로 «응모 마감 뒤 첫 일요일 오후 7시»가 된다(lib/participation-config.ts drawSunday).
 *    이미 추첨한 대회는 건너뛴다(멱등).
 */
export async function GET(req: Request) {
  // Vercel Cron 인증 헤더 확인
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Service Role로 Supabase 접근 (RLS 우회 필요)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const now = new Date();
  const out: Record<string, unknown> = { ok: true };
  let failed = false;

  if (EVENT_OPERATION.acceptingEntries) {
    const eventId = getIsoWeekId(now);
    const { result, skipped, error } = await performDraw(supabase, eventId);
    if (error) failed = true;
    out.weekly = error ? { eventId, error } : skipped ? { eventId, skipped: true } : result;
  } else {
    out.weekly = { paused: true };
  }

  const review: Record<string, unknown> = {};
  for (const t of REVIEW_TOURNAMENTS) {
    const dates = tournamentDates(t.id);
    if (!dates) { review[t.id] = { error: "대회 날짜 없음" }; failed = true; continue; }
    if (!isDrawDue(dates.endDate, now)) { review[t.id] = { notDue: true }; continue; }
    const r = await performReviewDraw(supabase, t.id);
    if (r.error) failed = true;
    review[t.id] = r;
  }
  out.review = review;

  if (failed) return NextResponse.json({ ...out, ok: false }, { status: 500 });
  return NextResponse.json(out);
}
