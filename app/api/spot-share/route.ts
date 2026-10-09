import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { SOLVER_APP_ORIGIN } from "@/lib/solver-feedback-config";
import { SPOT_PAYLOAD_MAX, SPOT_SHARES_PER_IP_PER_HOUR, parseSpotPayload, spotShareId, spotShareIpHash } from "@/lib/spot-share";

/**
 * 솔버 «공유» → 본체 짧은 주소 (2026-10-09 · 후기창 코드 2 · 설계 docs/solver-review-design.md §7-2·§8 ②)
 *
 * POST { payload: "<base64url>" } → 200 { ok: true, id, url } · 실패면 4xx/5xx { ok: false, error }
 *   - 로그인 불필요 · CORS = 솔버 도메인 하나만 · IP 해시 속도 제한(시간당 SPOT_SHARES_PER_IP_PER_HOUR · 이미 있는 주소는 안 셈)
 *   - 검사 = lib/spot-share.ts (형식 명세만 보고 새로 짠 것 — 솔버 코드 이식 아님)
 *   - 같은 payload 는 같은 id 를 돌려준다.
 * 솔버는 실패·3초 시간 초과면 기존 ?spot= 주소를 그대로 복사한다(solver-feedback-share.ts) — 여기서 실패해도 공유는 안 막힌다.
 */

export const dynamic = "force-dynamic";

const SITE = "https://www.holdemmaster.com";

function cors(origin: string | null): Record<string, string> {
  const h: Record<string, string> = { Vary: "Origin" };
  if (origin === SOLVER_APP_ORIGIN) {
    h["Access-Control-Allow-Origin"] = origin;
    h["Access-Control-Allow-Methods"] = "POST, OPTIONS";
    h["Access-Control-Allow-Headers"] = "Content-Type";
    h["Access-Control-Max-Age"] = "600";
  }
  return h;
}

function json(body: unknown, status: number, origin: string | null) {
  return NextResponse.json(body, { status, headers: cors(origin) });
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin");
  return new NextResponse(null, { status: origin === SOLVER_APP_ORIGIN ? 204 : 403, headers: cors(origin) });
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin");
  if (origin && origin !== SOLVER_APP_ORIGIN) return json({ ok: false, error: "origin" }, 403, origin);

  let payload: unknown;
  try {
    const raw = await req.text();
    if (raw.length > SPOT_PAYLOAD_MAX + 200) return json({ ok: false, error: "length" }, 413, origin);
    payload = JSON.parse(raw)?.payload;
  } catch {
    return json({ ok: false, error: "bad_input" }, 400, origin);
  }
  const parsed = parseSpotPayload(payload);
  if (!parsed.ok) return json({ ok: false, error: (parsed as { error: string }).error }, 400, origin);
  const p = payload as string;

  const db = createAdminClient();
  if (!db) return json({ ok: false, error: "unavailable" }, 503, origin);
  const id = spotShareId(p);
  const ok = () => json({ ok: true, id, url: `${SITE}/s/${id}` }, 200, origin);
  try {
    const { data: existing, error: readErr } = await db.from("spot_shares").select("payload").eq("id", id).maybeSingle();
    if (readErr) return json({ ok: false, error: "unavailable" }, 503, origin);
    if (existing) return existing.payload === p ? ok() : json({ ok: false, error: "collision" }, 409, origin);

    const ip = (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim();
    const ipHash = ip ? spotShareIpHash(ip) : null;
    if (ipHash) {
      const since = new Date(Date.now() - 3600_000).toISOString();
      const { count, error } = await db.from("spot_shares").select("*", { count: "exact", head: true })
        .eq("ip_hash", ipHash).gte("created_at", since);
      if (error) return json({ ok: false, error: "unavailable" }, 503, origin);
      if ((count ?? 0) >= SPOT_SHARES_PER_IP_PER_HOUR) return json({ ok: false, error: "rate" }, 429, origin);
    }
    const { error } = await db.from("spot_shares").upsert(
      { id, payload: p, meta: parsed.meta, ip_hash: ipHash },
      { onConflict: "id", ignoreDuplicates: true },
    );
    if (error) return json({ ok: false, error: "unavailable" }, 503, origin);
    return ok();
  } catch {
    return json({ ok: false, error: "unavailable" }, 503, origin);
  }
}
