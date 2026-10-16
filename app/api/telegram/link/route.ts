import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import {
  BOT_LOCALES, TELEGRAM_BOT_USERNAME, TELEGRAM_LINK_TTL_MS, botApi, consentDate, consentNotice, isTimeZone, linkDeepUrl, newLinkToken,
  type BotLocale, type ConsentNoticeKind,
} from "@/lib/telegram-bot";

/**
 * 회원 ↔ 텔레그램 연결 (2026-10-16 · ⑤) · 설계 = docs/telegram-login-plan.md «④ 설계 수정안» · 표 = supabase/telegram-links.sql
 *
 * 인증 = 본체 로그인 쿠키(서버가 Supabase에 물어 확인). 표 읽기·쓰기는 service role(RLS on + 정책 0).
 * 쓰기 요청(POST·DELETE)은 같은 출처 브라우저만 받는다 — 쿠키 인증이라 다른 사이트의 폼 제출을 막는다.
 *
 * GET    → { ok, linked, username, blocked, marketing, marketingAt }
 * POST   → { ok, url } — 1회용 토큰(15분) 발급. 원문은 응답에만 싣고 DB엔 sha256만. 다시 누르면 새 토큰이 옛 것을 덮는다.
 * PATCH  → { ok, marketing, date } — ⑥ 대회·이벤트 소식(광고성) 수신 동의·철회. 몸통 { marketing: boolean, tz?, locale? }.
 *          연결된 회원만. 바뀌면 봇이 처리결과 DM(전송자 명칭·사실과 날짜·처리 결과) — 화면에도 같은 날짜를 보여 준다.
 * DELETE → { ok } — 연결 해제(chat_id·이름·토큰 비움). 🔴 수신 동의도 함께 철회한다(사장님 10-16) — 동의가 있었으면 지우기 전에 철회 DM.
 *
 * ⑥ 근거·원문 = docs/telegram-login-plan.md «⑥ 수신 동의». 야간 동의는 받지 않는다 — ⑦ 발송이 consent_tz 기준 08~21시만 보낸다.
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

function bodyLocale(v: unknown): BotLocale {
  return typeof v === "string" && (BOT_LOCALES as readonly string[]).includes(v) ? (v as BotLocale) : "en";
}

type Db = NonNullable<ReturnType<typeof createAdminClient>>;

/** 처리결과 DM. 403 + «blocked by the user» = 봇 차단 → 표시(웹훅 send()와 같은 판정 · MA-584 ⓐ). 실패해도 동의 처리는 그대로. */
async function notifyConsent(db: Db, chatId: number, locale: BotLocale, kind: ConsentNoticeKind, date: string) {
  const r = await botApi("sendMessage", { chat_id: chatId, text: consentNotice(locale, kind, date), link_preview_options: { is_disabled: true } });
  if (r.status === 403 && /blocked by the user/i.test(r.description ?? "")) {
    await db.from("telegram_links").update({ bot_blocked_at: new Date().toISOString() }).eq("chat_id", chatId);
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
    .select("chat_id, tg_username, bot_blocked_at, marketing_consent_at, consent_tz")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  const marketing = !!(data?.chat_id && data.marketing_consent_at);
  return json({
    ok: true,
    linked: !!data?.chat_id,
    username: data?.chat_id ? data.tg_username ?? null : null,
    blocked: !!(data?.chat_id && data.bot_blocked_at),
    marketing,
    marketingAt: marketing ? consentDate(new Date(data!.marketing_consent_at), data!.consent_tz) : null,
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

export async function PATCH(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, error: "origin" }, 403);
  const userId = await currentUserId();
  if (!userId) return json({ ok: false, error: "login" }, 401);
  let body: { marketing?: unknown; tz?: unknown; locale?: unknown };
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "body" }, 400);
  }
  if (typeof body.marketing !== "boolean") return json({ ok: false, error: "body" }, 400);
  const want = body.marketing;
  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503);
  const { data: row, error: readErr } = await db
    .from("telegram_links")
    .select("chat_id, marketing_consent_at, consent_tz")
    .eq("user_id", userId)
    .maybeSingle();
  if (readErr) return json({ ok: false, error: "unavailable" }, 503);
  if (!row?.chat_id) return json({ ok: false, error: "not_linked" }, 409);

  const tz = want ? (isTimeZone(body.tz) ? body.tz : null) : row.consent_tz;
  const had = !!row.marketing_consent_at;
  // 같은 상태를 다시 보내면(두 번 클릭 · 두 탭) 시각을 바꾸지 않고 DM도 다시 보내지 않는다
  if (had === want) {
    return json({ ok: true, marketing: want, date: want ? consentDate(new Date(row.marketing_consent_at), row.consent_tz) : null });
  }
  const now = new Date();
  const { error } = await db
    .from("telegram_links")
    .update(
      want
        ? { marketing_consent_at: now.toISOString(), consent_tz: tz, updated_at: now.toISOString() }
        : { marketing_consent_at: null, night_consent_at: null, consent_tz: null, consent_withdrawn_at: now.toISOString(), updated_at: now.toISOString() },
    )
    .eq("user_id", userId);
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  const date = consentDate(now, tz);
  await notifyConsent(db, row.chat_id, bodyLocale(body.locale), want ? "on" : "off", date);
  return json({ ok: true, marketing: want, date });
}

export async function DELETE(req: Request) {
  if (!sameOrigin(req)) return json({ ok: false, error: "origin" }, 403);
  const userId = await currentUserId();
  if (!userId) return json({ ok: false, error: "login" }, 401);
  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503);
  const { data: row } = await db
    .from("telegram_links")
    .select("chat_id, marketing_consent_at, consent_tz")
    .eq("user_id", userId)
    .maybeSingle();
  const now = new Date();
  const hadConsent = !!(row?.chat_id && row.marketing_consent_at);
  const { error } = await db
    .from("telegram_links")
    .update({
      chat_id: null, tg_username: null, tg_name: null, linked_at: null, bot_blocked_at: null,
      link_token_hash: null, link_token_expires_at: null,
      marketing_consent_at: null, night_consent_at: null, consent_tz: null,
      ...(hadConsent ? { consent_withdrawn_at: now.toISOString() } : {}),
      updated_at: now.toISOString(),
    })
    .eq("user_id", userId);
  if (error) return json({ ok: false, error: "unavailable" }, 503);
  // 철회 DM은 DB가 바뀐 «뒤»에 — 읽어 둔 chat_id로 보낸다(URL 파라미터 locale · 없으면 en)
  if (hadConsent) {
    const locale = bodyLocale(new URL(req.url).searchParams.get("locale"));
    await notifyConsent(db, row!.chat_id, locale, "unlink", consentDate(now, row!.consent_tz));
  }
  return json({ ok: true });
}
