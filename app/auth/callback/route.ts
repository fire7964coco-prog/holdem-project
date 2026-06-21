import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

/** next 파라미터가 동일 오리진 경로인지 검증 — Open Redirect 방지 */
function safeNext(next: string | null): string {
  if (!next) return "/";
  // 반드시 /로 시작하고 //로 시작하지 않아야 함
  if (!next.startsWith("/") || next.startsWith("//")) return "/";
  // 프로토콜 상대 URL 패턴 차단
  if (/^\/[^/]*:/.test(next)) return "/";
  return next;
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeNext(searchParams.get("next"));

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
