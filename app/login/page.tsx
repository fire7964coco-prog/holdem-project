"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { authCallbackUrl, loginHref, safeAuthNext } from "@/lib/auth-navigation";
import { AuthPanel, AUTH_BUTTON_CLASS, AUTH_INPUT_CLASS } from "@/components/auth-panel";
import { localeFromPath } from "@/lib/intl";

type Mode = "login" | "signup" | "recovery";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [supabase] = useState(createClient);
  const next = safeAuthNext(searchParams.get("next"));
  const [mode, setMode] = useState<Mode>(searchParams.get("mode") === "recovery" ? "recovery" : "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [loading, setLoading] = useState(false);
  const [socialLoading, setSocialLoading] = useState<"google" | "kakao" | null>(null);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const busy = loading || !!socialLoading;

  useEffect(() => {
    setSocialLoading(null);
    setLoading(false);
    setMode(searchParams.get("mode") === "recovery" ? "recovery" : "login");
    const error = searchParams.get("error");
    setErr(error === "recovery"
      ? "재설정 링크가 만료되었거나 유효하지 않습니다. 메일을 요청했던 브라우저에서 새 링크를 열어주세요."
      : error === "oauth" || error === "auth"
        ? "로그인 요청이 만료되었거나 인증에 실패했습니다. 다시 시도해주세요."
        : null);
  }, [searchParams]);

  useEffect(() => {
    const restore = () => { setSocialLoading(null); setLoading(false); };
    window.addEventListener("pageshow", restore);
    return () => window.removeEventListener("pageshow", restore);
  }, []);

  function returnToPage() {
    router.replace(next);
    router.refresh();
  }

  async function handleSocialLogin(provider: "google" | "kakao") {
    if (busy) return;
    setSocialLoading(provider);
    setErr(null);
    setMsg(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: authCallbackUrl(window.location.origin, next),
          scopes: provider === "kakao" ? "profile_nickname account_email" : undefined,
          queryParams: provider === "google" ? { access_type: "offline", prompt: "consent" } : undefined,
        },
      });
      if (error) {
        setErr("소셜 로그인에 연결하지 못했습니다. 다시 시도하거나 이메일로 로그인해주세요.");
        setSocialLoading(null);
      }
    } catch {
      setErr("연결을 확인한 뒤 다시 시도해주세요.");
      setSocialLoading(null);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (busy) return;
    setLoading(true);
    setErr(null);
    setMsg(null);
    try {
      if (mode === "recovery") {
        const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
          redirectTo: authCallbackUrl(window.location.origin, next, true),
        });
        if (error) setErr("재설정 메일을 요청하지 못했습니다. 잠시 후 다시 시도해주세요.");
        else setMsg("입력한 이메일의 계정이 있다면 재설정 링크를 보냈습니다. 스팸함도 확인하고, 이 브라우저에서 메일의 링크를 열어주세요.");
      } else if (mode === "signup") {
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { name: nickname.trim() || email.split("@")[0], language: localeFromPath(next.split(/[?#]/)[0]) ?? "ko" },
            emailRedirectTo: authCallbackUrl(window.location.origin, next),
          },
        });
        if (error) setErr(error.code === "user_already_exists" ? "이미 등록된 이메일입니다. 로그인하거나 비밀번호를 재설정해주세요." : "가입하지 못했습니다. 이메일과 비밀번호를 확인한 뒤 다시 시도해주세요.");
        else if (data.session) returnToPage();
        else setMsg("확인 메일을 보냈습니다. 메일함에서 가입을 완료해주세요.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
        if (error) setErr(error.code === "email_not_confirmed" ? "메일함에서 이메일 인증을 먼저 완료해주세요." : "로그인하지 못했습니다. 이메일과 비밀번호를 확인해주세요.");
        else returnToPage();
      }
    } catch {
      setErr("연결을 확인한 뒤 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  function switchMode(value: Mode) {
    setMode(value);
    setPassword("");
    setErr(null);
    setMsg(null);
    if (value === "recovery" || searchParams.get("mode")) {
      router.replace(loginHref(next, value === "recovery" ? { mode: "recovery" } : {}), { scroll: false });
    }
  }

  return (
    <AuthPanel
      title={mode === "login" ? "로그인" : mode === "signup" ? "회원가입" : "비밀번호 재설정"}
      description={mode === "recovery" ? "가입한 이메일로 비밀번호 재설정 링크를 보내드립니다." : "홀덤마스터 커뮤니티에서 함께 이야기해요."}
      backHref={next}
    >
      {mode !== "recovery" && <>
        <div className="mb-5 space-y-2.5">
          <button type="button" onClick={() => handleSocialLogin("google")} disabled={busy} className="flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-card py-3 text-sm font-semibold text-foreground disabled:opacity-60">
            <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            {socialLoading === "google" ? "연결 중…" : "Google로 계속하기"}
          </button>
          <button type="button" onClick={() => handleSocialLogin("kakao")} disabled={busy} className="flex w-full items-center justify-center gap-3 rounded-lg py-3 text-sm font-semibold disabled:opacity-60" style={{ background: "#FEE500", color: "#191919" }}>
            <svg width="18" height="18" viewBox="0 0 256 256" aria-hidden="true"><path fill="currentColor" d="M128 36C70.562 36 24 72.713 24 118c0 29.28 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.34-10.581 37.681 0 0-.207 1.762.934 2.434 1.141.672 2.483.15 2.483.15 3.272-.457 37.943-24.811 43.944-29.04 6.031.849 12.226 1.298 18.472 1.298 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"/></svg>
            {socialLoading === "kakao" ? "연결 중…" : "카카오로 계속하기"}
          </button>
        </div>
        <div className="mb-5 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border"/><span>또는 이메일로</span><span className="h-px flex-1 bg-border"/></div>
      </>}

      <form onSubmit={handleSubmit} className="space-y-4" aria-busy={busy} aria-describedby={err ? "auth-error" : undefined}>
        {mode === "signup" && <div>
          <label htmlFor="auth-nickname" className="mb-1.5 block text-sm font-semibold">닉네임 <span className="font-normal text-muted-foreground">(선택)</span></label>
          <input id="auth-nickname" name="nickname" type="text" autoComplete="nickname" maxLength={30} value={nickname} onChange={(e) => setNickname(e.target.value)} className={AUTH_INPUT_CLASS} disabled={busy}/>
        </div>}
        <div>
          <label htmlFor="auth-email" className="mb-1.5 block text-sm font-semibold">이메일</label>
          <input id="auth-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required value={email} onChange={(e) => setEmail(e.target.value)} className={AUTH_INPUT_CLASS} disabled={busy}/>
        </div>
        {mode !== "recovery" && <div>
          <label htmlFor="auth-password" className="mb-1.5 block text-sm font-semibold">비밀번호</label>
          <input id="auth-password" name="password" type="password" autoComplete={mode === "signup" ? "new-password" : "current-password"} required minLength={mode === "signup" ? 6 : undefined} value={password} onChange={(e) => setPassword(e.target.value)} className={AUTH_INPUT_CLASS} aria-describedby={mode === "signup" ? "password-help" : undefined} disabled={busy}/>
          {mode === "signup" && <p id="password-help" className="mt-1.5 text-xs text-muted-foreground">6자 이상 입력해주세요.</p>}
        </div>}
        {err && <p id="auth-error" role="alert" className="text-sm leading-relaxed text-destructive">{err}</p>}
        {msg && <p role="status" className="rounded-lg bg-secondary p-3 text-sm leading-relaxed text-foreground">{msg}</p>}
        <button type="submit" disabled={busy} className={AUTH_BUTTON_CLASS}>{loading ? "처리 중…" : mode === "login" ? "로그인" : mode === "signup" ? "가입하기" : "재설정 메일 보내기"}</button>
      </form>
      <div className="mt-4 flex flex-col items-center gap-1 text-sm">
        {mode === "login" && <button type="button" disabled={busy} onClick={() => switchMode("recovery")} className="min-h-11 px-2 text-muted-foreground underline underline-offset-4">비밀번호를 잊으셨나요?</button>}
        <button type="button" disabled={busy} onClick={() => switchMode(mode === "login" ? "signup" : "login")} className="min-h-11 px-2 font-semibold text-foreground">{mode === "login" ? "계정이 없으신가요? 회원가입" : "로그인으로 돌아가기"}</button>
      </div>
    </AuthPanel>
  );
}

export default function LoginPage() {
  return <Suspense><LoginForm/></Suspense>;
}
