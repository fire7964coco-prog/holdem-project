"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { IntlHeader } from "@/components/intl-header";
import { IntlFooter } from "@/components/intl-footer";
import { localeFromPath, HTML_LANG, dirForLocale } from "@/lib/intl";

function useLocale() {
  const pathname = usePathname() || "/";
  return localeFromPath(pathname);
}

/**
 * 피드 앱(커뮤니티) 라우트 — 홈 피드 · 로그인 · 글 상세.
 * 이 경로들은 자체 헤더/하단 네비를 가진 단순 앱 화면이므로
 * 옛 사이트 헤더·푸터(가이드·계산기·블로그 등 풀 네비)를 숨긴다.
 * 블로그·규칙 등 SEO 페이지는 기존 헤더를 그대로 유지한다.
 */
function isFeedAppRoute(pathname: string) {
  return (
    pathname === "/" ||
    pathname === "/login" ||
    pathname.startsWith("/post/")
  );
}

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  if (isFeedAppRoute(pathname)) return null;
  return locale ? <IntlHeader locale={locale} /> : <Header />;
}

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  if (isFeedAppRoute(pathname)) return null;
  return locale ? <IntlFooter locale={locale} /> : <Footer />;
}

/**
 * <main> 래퍼 — SEO 페이지에서는 고정 헤더 높이만큼 상단 패딩을 주고,
 * 피드 앱 라우트에서는 헤더가 없으므로 패딩을 제거해 빈 공간을 없앤다.
 */
export function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isApp = isFeedAppRoute(pathname);
  return (
    <main
      id="main-content"
      className={
        isApp
          ? "relative z-10"
          : "flex-grow pt-[68px] md:pt-20 relative z-10"
      }
    >
      {children}
    </main>
  );
}

/**
 * 보조 언어 경로에서는 <html lang>을 해당 언어로, 그 외에는 "ko"로 동기화.
 * 루트 레이아웃은 SSG 유지를 위해 lang="ko"로 정적 렌더되며,
 * 이 컴포넌트가 클라이언트에서 보조 언어 경로의 lang을 보정한다.
 */
export function HtmlLangSync() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale ? HTML_LANG[locale] : "ko";
    document.documentElement.dir = dirForLocale(locale);
  }, [locale]);
  return null;
}
