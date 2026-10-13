import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { loginHref, resetPasswordHref, safeAuthNext } from "@/lib/auth-navigation";
import { localeFromPath } from "@/lib/intl";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = safeAuthNext(searchParams.get("next"));
  const recovery = searchParams.get("flow") === "recovery";

  if (code) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error) {
        // OAuth 가입은 언어를 못 실어 보내 트리거가 profiles.language='ko'로 만든다(이메일 가입만 metadata로 전달).
        // 비-KO 화면은 Google 가입뿐이라(10-13) 새 계정이면 들어온 페이지의 로케일로 고친다 — 글·채팅 언어 태그가 이 값이다.
        const user = data.user;
        const locale = localeFromPath(next.split(/[?#]/)[0]);
        if (!recovery && user && locale && Date.now() - new Date(user.created_at).getTime() < 10 * 60 * 1000) {
          await supabase.from("profiles").update({ language: locale }).eq("id", user.id).eq("language", "ko");
        }
        return NextResponse.redirect(new URL(recovery ? resetPasswordHref(next) : next, origin));
      }
    } catch {
      // Expired codes or connectivity failures return to a retryable form.
    }
  }

  return NextResponse.redirect(new URL(loginHref(next, {
    error: recovery ? "recovery" : "auth",
    ...(recovery ? { mode: "recovery" as const } : {}),
  }), origin));
}
