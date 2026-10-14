"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";

export const AUTH_INPUT_CLASS = "w-full rounded-lg border border-border bg-background px-3 py-3 text-base text-foreground focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-primary-ink focus-visible:outline-offset-2 disabled:opacity-60";
export const AUTH_BUTTON_CLASS = "w-full rounded-lg bg-foreground px-4 py-3 text-sm font-bold text-background transition-opacity hover:opacity-90 disabled:opacity-60";

/**
 * `/login`은 루트 레이아웃(<html lang="ko">) 아래라 언어를 서버에서 줄 수 없다 — 언어가 `?next=`로 정해지기 때문.
 * 화면 언어에 맞춰 <html lang/dir>을 바꾸고, 떠날 때 원래 값으로 돌린다(스크린리더·RTL 배치).
 * 비-KO면 탭 제목도 바꾼다(서버 메타 «로그인 | 홀덤마스터»는 한국어 고정 · noindex라 검색 영향 없음).
 */
export function useDocumentLang({ lang, dir }: { lang: string; dir: "rtl" | "ltr" }, title: string | null) {
  useEffect(() => {
    const root = document.documentElement;
    const prev = { lang: root.lang, dir: root.dir };
    root.lang = lang;
    root.dir = dir;
    return () => { root.lang = prev.lang; root.dir = prev.dir; };
  }, [lang, dir]);
  useEffect(() => {
    if (title) document.title = title;
  }, [title]);
}

export function AuthPanel({ title, description, backHref, backLabel, children }: {
  title: string;
  description?: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh items-center justify-center bg-background px-4 py-8">
      <section className="w-full max-w-sm rounded-2xl border border-border bg-card p-6 sm:p-7" aria-labelledby="auth-title">
        <Link href={backHref} className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-muted-foreground">{backLabel}</Link>
        <div className="mb-6">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-foreground text-sm font-black" style={{ color: "rgb(var(--gold-dark-rgb))" }} aria-hidden="true">HM</span>
          <h1 id="auth-title" className="text-2xl font-bold text-foreground">{title}</h1>
          {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
        </div>
        {children}
      </section>
    </div>
  );
}
