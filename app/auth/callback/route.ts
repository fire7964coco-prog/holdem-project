import { NextResponse } from "next/server";
import type { EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { loginHref, resetPasswordHref, safeAuthNext } from "@/lib/auth-navigation";
import { localeFromPath } from "@/lib/intl";

// ★2026-10-14 메일 링크 두 갈래를 받는다.
//   ① code — OAuth(Google·카카오)와 예전 메일 링크(.ConfirmationURL). PKCE라 가입한 «그 브라우저»의 code_verifier가 있어야 세션이 생긴다.
//   ② token_hash + type — 메일 템플릿(docs/auth-email-templates)이 «{{ .RedirectTo }}&token_hash=…&type=…»로 보낸다.
//      verifyOtp는 브라우저 저장값이 필요 없어 PC에서 가입하고 폰 메일로 눌러도 로그인된다(Supabase 문서 «Email-based auth with PKCE flow for SSR»).
//      10-14 시험 2: ① 링크가 인증은 됐는데 세션 교환에 실패해 /login으로 돌아왔다.
const OTP_TYPES: readonly EmailOtpType[] = ["email", "signup", "recovery", "invite", "magiclink", "email_change"];

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const tokenHash = searchParams.get("token_hash");
  const otpType = searchParams.get("type") as EmailOtpType | null;
  const next = safeAuthNext(searchParams.get("next"));
  const recovery = searchParams.get("flow") === "recovery" || otpType === "recovery";

  if (code || (tokenHash && otpType && OTP_TYPES.includes(otpType))) {
    try {
      const supabase = await createClient();
      const { data, error } = code
        ? await supabase.auth.exchangeCodeForSession(code)
        : await supabase.auth.verifyOtp({ type: otpType as EmailOtpType, token_hash: tokenHash as string });
      if (!error) {
        // OAuth 가입은 언어를 못 실어 보내 트리거가 profiles.language='ko'로 만든다(이메일 가입만 metadata로 전달).
        // 새 계정이면 들어온 페이지의 로케일로 고친다 — 글·채팅 언어 태그가 이 값이다.
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
