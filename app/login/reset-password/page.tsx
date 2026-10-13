"use client";

import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { loginHref, safeAuthNext } from "@/lib/auth-navigation";
import { AuthPanel, AUTH_BUTTON_CLASS, AUTH_INPUT_CLASS, useDocumentLang } from "@/components/auth-panel";
import { authHtmlAttrs, authLocaleFromNext, authText } from "@/lib/auth-i18n";

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const next = safeAuthNext(searchParams.get("next"));
  const locale = authLocaleFromNext(next);
  const t = authText(locale);
  useDocumentLang(authHtmlAttrs(locale), locale ? `${t.resetTitle} | HoldemMaster` : null);
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
      setError(t.errMismatch);
      confirmationRef.current?.focus();
      return;
    }
    setLoading(true);
    try {
      const { error: updateError } = await supabase.auth.updateUser({ password });
      if (updateError) {
        setError(updateError.code === "same_password" ? t.errSamePassword : t.errUpdate);
      } else {
        setPassword("");
        setConfirmation("");
        setDone(true);
      }
    } catch {
      setError(t.errNetwork);
    } finally {
      setLoading(false);
    }
  }

  return <AuthPanel title={done ? t.resetTitleDone : t.resetTitle} description={done ? t.resetDescDone : t.resetDesc} backHref={next} backLabel={t.back}>
    {sessionState === "checking" ? <p role="status" className="text-sm text-muted-foreground">{t.resetChecking}</p>
      : done ? <div className="space-y-4">
        <p role="status" className="text-sm leading-relaxed">{t.resetDoneMsg}</p>
        <Link href={next} className={`${AUTH_BUTTON_CLASS} block text-center`}>{t.resetBack}</Link>
      </div>
      : sessionState === "expired" ? <div className="space-y-4">
        <p role="alert" className="text-sm leading-relaxed">{t.resetExpired}</p>
        <Link href={loginHref(next, { mode: "recovery" })} className={`${AUTH_BUTTON_CLASS} block text-center`}>{t.resetRequestAgain}</Link>
      </div>
      : <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading} aria-describedby={error ? "reset-error" : undefined}>
        <div>
          <label htmlFor="new-password" className="mb-1.5 block text-sm font-semibold">{t.newPassword}</label>
          <input id="new-password" name="password" type="password" autoComplete="new-password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className={AUTH_INPUT_CLASS} aria-describedby="reset-password-help" disabled={loading}/>
          <p id="reset-password-help" className="mt-1.5 text-xs text-muted-foreground">{t.passwordHelp}</p>
        </div>
        <div>
          <label htmlFor="confirm-password" className="mb-1.5 block text-sm font-semibold">{t.newPasswordConfirm}</label>
          <input ref={confirmationRef} id="confirm-password" name="confirm-password" type="password" autoComplete="new-password" required minLength={6} value={confirmation} onChange={(e) => setConfirmation(e.target.value)} className={AUTH_INPUT_CLASS} aria-describedby={error ? "reset-error" : undefined} aria-invalid={!!error && password !== confirmation} disabled={loading}/>
        </div>
        {error && <p id="reset-error" role="alert" className="text-sm leading-relaxed text-destructive">{error}</p>}
        <button type="submit" disabled={loading} className={AUTH_BUTTON_CLASS}>{loading ? t.changing : t.changeSubmit}</button>
        <Link href={loginHref(next, { mode: "recovery" })} className="inline-flex min-h-11 items-center text-sm text-muted-foreground underline underline-offset-4">{t.resetRequestAgain}</Link>
      </form>}
  </AuthPanel>;
}

export default function ResetPasswordPage() {
  return <Suspense><ResetPasswordForm/></Suspense>;
}
