import Link from "next/link";
import type { ReactNode } from "react";

export const AUTH_INPUT_CLASS = "w-full rounded-lg border border-border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-primary-ink focus-visible:outline-offset-2 disabled:opacity-60";
export const AUTH_BUTTON_CLASS = "w-full rounded-lg bg-foreground px-4 py-3 text-sm font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-60";

export function AuthPanel({ title, description, backHref, children }: {
  title: string;
  description: string;
  backHref: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-8">
      <section className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 sm:p-7" aria-labelledby="auth-title">
        <Link href={backHref} className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-muted-foreground">← 사이트로 돌아가기</Link>
        <div className="mb-6">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-sm font-black" style={{ color: "rgb(var(--gold-dark-rgb))" }} aria-hidden="true">HM</span>
          <h1 id="auth-title" className="text-2xl font-bold text-foreground">{title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
        {children}
      </section>
    </div>
  );
}
