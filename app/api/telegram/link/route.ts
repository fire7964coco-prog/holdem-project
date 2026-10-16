import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { TELEGRAM_BOT_USERNAME, TELEGRAM_LINK_TTL_MS, linkDeepUrl, newLinkToken } from "@/lib/telegram-bot";

/**
 * 회원 ↔ 텔레그램 연결 (2026-10-16 · ⑤) · 설계 = docs/telegram-login-plan.md «④ 설계 수정안» · 표 = supabase/telegram-links.sql
 *
 * 인증 = 본체 로그인 쿠키(서버가 Supabase에 물어 확인). 표 읽기·쓰기는 service role(RLS on + 정책 0).
 * 쓰기 요청(POST·DELETE)은 같은 출처 브라우저만 받는다 — 쿠키 인증이라 다른 사이트의 폼 제출을 막는다.
 *
 * GET    → { ok, linked, username, blocked }
 * POST   → { ok, url } — 1회용 토큰(15분) 발급. 원문은 응답에만 싣고 DB엔 sha256만. 다시 누르면 새 토큰이 옛 것을 덮는다.
 * DELETE → { ok } — 연결 해제(chat_id·이름·토큰 비움). 동의 시각 열(⑥)은 건드리지 않는다.
 */

export const dynamic = "force-dynamic";

function json(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function sameOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

async function currentUserId(): Promise<string | null> {
  try {
    const sb = await createClient();
    const { data } = await sb.auth.getUser();
    return data.user?.id ?? null;
  } catch {
    return null;
  }
}

export async function GET() {
  const userId = await currentUserId();
  if (!userId) return json({ ok: false, error: "login" }, 401);
  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503);
  const { data, error } = await db
    .from("telegram_links")
    .select("chat_id, tg_username, bot_blocked_at")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  return json({
    ok: true,
    linked: !!data?.chat_id,
    username: data?.chat_id ? data.tg_username ?? null : null,
    blocked: !!(data?.chat_id && data.bot_blocked_at),
    bot: TELEGRAM_BOT_USERNAME,
  });
}

export async function POST(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, error: "origin" }, 403);
  const userId = await currentUserId();
  if (!userId) return json({ ok: false, error: "login" }, 401);
  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503);
  const { token, hash } = newLinkToken();
  const { error } = await db.from("telegram_links").upsert(
    {
      user_id: userId,
      link_token_hash: hash,
      link_token_expires_at: new Date(Date.now() + TELEGRAM_LINK_TTL_MS).toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" },
  );
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  return json({ ok: true, url: linkDeepUrl(token) });
}

export async function DELETE(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, error: "origin" }, 403);
  const userId = await currentUserId();
  if (!userId) return json({ ok: false, error: "login" }, 401);
  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503);
  const { error } = await db
    .from("telegram_links")
    .update({
      chat_id: null, tg_username: null, tg_name: null, linked_at: null, bot_blocked_at: null,
      link_token_hash: null, link_token_expires_at: null, updated_at: new Date().toISOString(),
    })
    .eq("user_id", userId);
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  return json({ ok: true });
}
