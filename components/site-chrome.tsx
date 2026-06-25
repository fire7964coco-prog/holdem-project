"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPath, HTML_LANG, NAV_CTA, NAV_HOME_FEED, dirForLocale } from "@/lib/intl";
import BlogTopBar from "@/components/blog-top-bar";

const LOCALE_FEED_ROOTS = ["/en", "/ja", "/zh", "/es", "/ar", "/pt", "/id", "/ms", "/vi", "/hi", "/de", "/tr"];

/**
 * 피드 앱 라우트 — 자체 헤더를 가지므로 SiteHeader/SiteFooter 불필요
 * 블로그도 포함: 블로그 전용 BlogTopBar 컴포넌트가 담당
 */
function isFeedAppRoute(pathname: string): boolean {
  if (
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/post/") ||
    pathname.startsWith("/blog/")
  ) return true;
  if (LOCALE_FEED_ROOTS.some((p) => pathname === p || pathname === p + "/")) return true;
  return LOCALE_FEED_ROOTS.some((p) => pathname.startsWith(p + "/blog"));
}


/** 스크롤 300px 이상 시 나타나는 맨 위로 버튼 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="맨 위로 이동"
      className="fixed bottom-6 right-4 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95"
      style={{
        background: "linear-gradient(135deg,#d4af37,#f0d060)",
        color: "#0b1120",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
      }}
    >
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  // 피드 앱 라우트(홈·로그인·글상세·블로그)는 자체 헤더 — 탑바 불필요
  if (isFeedAppRoute(pathname)) return null;
  // 나머지 모든 페이지(계산기·퀴즈·족보·규칙 등)는 BlogTopBar 공용 컴포넌트
  const homeHref = locale ? `/${locale}` : "/";
  const ctaLabel = locale ? NAV_CTA[locale] : "커뮤니티";
  const homeFeedLabel = locale ? NAV_HOME_FEED[locale] : "홈피드";
  return <BlogTopBar homeHref={homeHref} homeFeedLabel={homeFeedLabel} communityLabel={ctaLabel} />;
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
