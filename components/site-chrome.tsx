"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { localeFromPath, HTML_LANG, dirForLocale } from "@/lib/intl";

const GOLD = "#d4af37";
const BG = "#0b1120";

const LOCALE_FEED_ROOTS = ["/en", "/ja", "/zh", "/es", "/ar", "/pt", "/id", "/ms", "/vi", "/hi", "/de", "/tr"];

/**
 * 피드 앱 라우트 — 자체 헤더를 가지므로 SiteHeader/SiteFooter 불필요
 * 블로그도 포함: 피드 내 티저 클릭 → 동일 다크 UI 유지
 */
function isFeedAppRoute(pathname: string) {
  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/post/") ||
    pathname.startsWith("/blog/")
  ) return true;
  return LOCALE_FEED_ROOTS.some((p) => pathname === p || pathname === p + "/");
}

/** 미니 다크 탑바 — 툴/필라 페이지에서 홈 피드로 돌아가는 버튼 */
function AppTopBar() {
  return (
    <div
      className="sticky top-0 z-50 flex items-center px-4 h-11"
      style={{ background: BG, borderBottom: "1px solid rgba(212,175,55,0.15)" }}
    >
      <Link
        href="/"
        className="flex items-center gap-1.5 text-sm font-bold transition-opacity hover:opacity-70"
        style={{ color: GOLD }}
      >
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        홈피드
      </Link>
      <span
        className="text-[11px] font-black tracking-widest ml-auto"
        style={{ color: "rgba(212,175,55,0.4)" }}
      >
        HM
      </span>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  // 피드 앱 라우트(홈·로그인·글상세·블로그)는 자체 헤더 — 탑바 불필요
  if (isFeedAppRoute(pathname)) return null;
  // 나머지 모든 페이지(계산기·퀴즈·족보·규칙 등)는 미니 다크 탑바
  return <AppTopBar />;
}

/** 옛 사이트 푸터 — 전면 피드 전환으로 완전 제거 */
export function SiteFooter() {
  return null;
}

/**
 * <main> 래퍼 — 헤더가 없는 피드 앱 전체에서 상단 패딩 제거.
 * 툴 페이지에서는 AppTopBar(h-11 = 44px) 높이만큼 패딩 추가.
 */
export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isApp = isFeedAppRoute(pathname);
  return (
    <main
      id="main-content"
      className={isApp ? "relative z-10" : "relative z-10 pt-11"}
    >
      {children}
    </main>
  );
}

/**
 * 보조 언어 경로에서는 <html lang>을 해당 언어로, 그 외에는 "ko"로 동기화.
 */
export function HtmlLangSync() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  useEffect(() => {
    document.documentElement.lang = locale ? HTML_LANG[locale] : "ko";
    document.documentElement.dir = dirForLocale(locale);
  }, [locale]);
  return null;
}
