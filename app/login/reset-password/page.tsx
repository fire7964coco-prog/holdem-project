"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { loginHref, safeAuthNext } from "@/lib/auth-navigation";
import { AuthPanel, AUTH_BUTTON_CLASS, AUTH_INPUT_CLASS } from "@/components/auth-panel";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const next = safeAuthNext(searchParams.get("next"));
  const [supabase] = useState(createClient);
  const [sessionState, setSessionState] = useState<"checking" | "ready" | "expired">("checking");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const confirmationRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alive = true;
    supabase.auth.getUser().then(({ data, error: authError }) => {
      if (alive) setSessionState(data.user && !authError ? "ready" : "expired");
    }).catch(() => { if (alive) setSessionState("expired"); });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT" && alive) setSessionState("expired");
    });
    return () => { alive = false; subscription.unsubscribe(); };
  }, [supabase]);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (loading || sessionState !== "ready") return;
    setError(null);
    if (password !== confirmation) {
      setError("비밀번호가 일치하지 않습니다. 확인란에 다시 입력해주세요.");
      confirmationRef.current?.focus();
      return;
    }
    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(updateError.code === "same_password" ? "기존 비밀번호와 다른 비밀번호를 입력해주세요." : "비밀번호를 변경하지 못했습니다. 6자 이상인지 확인하거나 새 재설정 링크를 요청해주세요.");
      } else {
        setPassword("");
        setConfirmation("");
        setDone(true);
      }
    } catch {
      setError("연결을 확인한 뒤 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  return <AuthPanel title={done ? "비밀번호 변경 완료" : "새 비밀번호 설정"} description={done ? "새 비밀번호를 저장했습니다." : "앞으로 사용할 비밀번호를 입력해주세요."} backHref={next}>
    {sessionState === "checking" ? <p role="status" className="text-sm text-muted-foreground">재설정 링크를 확인하고 있습니다…</p>
      : done ? <div className="space-y-4">
        <p role="status" className="text-sm leading-relaxed">비밀번호를 변경했습니다. 새 비밀번호로 로그인할 수 있습니다.</p>
        <Link href={next} className={`${AUTH_BUTTON_CLASS} block text-center`}>보던 페이지로 돌아가기</Link>
      </div>
      : sessionState === "expired" ? <div className="space-y-4">
        <p role="alert" className="text-sm leading-relaxed">재설정 링크가 만료되었거나 로그인 정보를 확인할 수 없습니다. 새 링크를 요청한 뒤 같은 브라우저에서 열어주세요.</p>
        <Link href={loginHref(next, { mode: "recovery" })} className={`${AUTH_BUTTON_CLASS} block text-center`}>재설정 메일 다시 요청하기</Link>
      </div>
      : <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading} aria-describedby={error ? "reset-error" : undefined}>
        <div>
          <label htmlFor="new-password" className="mb-1.5 block text-sm font-semibold">새 비밀번호</label>
          <input id="new-password" name="password" type="password" autoComplete="new-password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className={AUTH_INPUT_CLASS} aria-describedby="reset-password-help" disabled={loading}/>
          <p id="reset-password-help" className="mt-1.5 text-xs text-muted-foreground">6자 이상 입력해주세요.</p>
        </div>
        <div>
          <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-semibold">새 비밀번호 확인</label>
          <input ref={confirmationRef} id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required minLength={6} value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className={AUTH_INPUT_CLASS} aria-describedby={error ? "reset-error" : undefined} aria-invalid={!!error && password !== confirmation} disabled={loading}/>
        </div>
        {error && <p id="reset-error" role="alert" className="text-sm leading-relaxed text-destructive">{error}</p>}
        <button type="submit" disabled={loading} className={AUTH_BUTTON_CLASS}>{loading ? "변경 중…" : "비밀번호 변경"}</button>
        <Link href={loginHref(next, { mode: "recovery" })} className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline underline-offset-4">재설정 메일 다시 요청하기</Link>
      </form>}
  </AuthPanel>;
}

export default function ResetPasswordPage() {
  return <Suspense><ResetPasswordForm/></Suspense>;
}
