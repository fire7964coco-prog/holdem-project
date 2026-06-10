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

export function SiteHeader() {
  const locale = useLocale();
  return locale ? <IntlHeader locale={locale} /> : <Header />;
}

export function SiteFooter() {
  const locale = useLocale();
  return locale ? <IntlFooter locale={locale} /> : <Footer />;
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
