import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { SOLVER_APP_ORIGIN, deviceFromUserAgent, isSolverFeedbackLocale } from "@/lib/solver-feedback-config";
import { readMyFeedbackState, saveFeedback, type FeedbackInput } from "@/lib/solver-feedback-server";

/**
 * 앱(solver.holdemmaster.com) → 본체 후기 쓰기 (2026-10-04 · 설계 docs/solver-review-design.md §7-2)
 *
 * - CORS = 솔버 도메인 하나만.
 * - 인증 = `Authorization: Bearer <Supabase access token>` — 서버가 Supabase 에 물어 검증한다(서명만 보지 않는다).
 * - 검사·저장 = lib/solver-feedback-server.ts (랜딩 서버 액션과 같은 함수). 앱이 Supabase 에 직접 쓰는 길은 없다.
 *
 * GET  ?locale=xx         → 내 상태(내 후기·이름 확인 필요 여부·이름) — 다시 쓰면 기존 후기 수정 화면으로
 * POST { locale, kind, body, downside?, rating?, nickname?, hasUsage? } → { ok, error? }
 *      error 코드는 lib/solver-feedback-server.ts FeedbackError (화면 문구는 앱이 12언어로 갖는다)
 */

export const dynamic = "force-dynamic";

function cors(origin: string | null): Record<string, string> {
  const h: Record<string, string> = { Vary: "Origin" };
  if (origin === SOLVER_APP_ORIGIN) {
    h["Access-Control-Allow-Origin"] = origin;
    h["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS";
    h["Access-Control-Allow-Headers"] = "Authorization, Content-Type";
    h["Access-Control-Max-Age"] = "600";
  }
  return h;
}

function json(body: unknown, status: number, origin: string | null) {
  return NextResponse.json(body, { status, headers: cors(origin) });
}

async function userFrom(req: Request) {
  const m = /^Bearer\s+(.+)$/i.exec(req.headers.get("authorization") ?? "");
  if (!m) return null;
  const db = createAdminClient();
  if (!db) return null;
  try {
    const { data, error } = await db.auth.getUser(m[1].trim());
    return error ? null : data.user ?? null;
  } catch {
    return null;
  }
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { status: origin === SOLVER_APP_ORIGIN ? 204 : 403, headers: cors(origin) });
}

export async function GET(req: Request) {
  const origin = req.headers.get("origin");
  const locale = new URL(req.url).searchParams.get("locale");
  if (!isSolverFeedbackLocale(locale)) return json({ ok: false, error: "locale" }, 400, origin);
  const user = await userFrom(req);
  if (!user) return json({ ok: false, error: "login" }, 401, origin);
  const s = await readMyFeedbackState(user, locale);
  if (!s.available) return json({ ok: false, error: "unavailable" }, 503, origin);
  return json({
    ok: true,
    nickname: s.nickname,
    nicknameNeedsConfirm: s.nicknameNeedsConfirm,
    nicknameLooksLikeEmail: s.nicknameLooksLikeEmail,
    myReview: s.myReview,
  }, 200, origin);
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  // 다른 출처의 브라우저 요청은 받지 않는다(서버 간 호출은 origin 이 없다 — 토큰으로만 판정).
  if (origin && origin !== SOLVER_APP_ORIGIN) return json({ ok: false, error: "bad_input" }, 403, origin);
  const user = await userFrom(req);
  if (!user) return json({ ok: false, error: "login" }, 401, origin);
  let input: FeedbackInput;
  try {
    const raw = await req.text();
    if (raw.length > 8000) return json({ ok: false, error: "body_long" }, 413, origin);
    input = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "bad_input" }, 400, origin);
  }
  const r = await saveFeedback({
    user,
    input: {
      locale: input?.locale, kind: input?.kind, body: input?.body, downside: input?.downside ?? null,
      rating: input?.rating ?? null, nickname: input?.nickname ?? null, hasUsage: input?.hasUsage === true,
    } as FeedbackInput,
    source: "app",
    device: deviceFromUserAgent(req.headers.get("user-agent")),
  });
  const status = r.ok ? 200 : r.error === "unavailable" ? 503 : r.error === "rate" ? 429 : 400;
  return json({ ok: r.ok, error: r.error }, status, origin);
}
