"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPath, HTML_LANG, NAV_CTA, NAV_HOME_FEED, dirForLocale, SECONDARY_LOCALES } from "@/lib/intl";
import BlogTopBar from "@/components/blog-top-bar";
import { smoothScrollWindowTo } from "@/lib/smooth-scroll";

/**
 * ★SECONDARY_LOCALES에서 파생시킨다 — 손으로 적으면 반드시 어긋난다.
 *   실제로 2026-08-04까지 이 배열은 12개였고 SECONDARY_LOCALES는 25개였다.
 *   누락된 13개(zh-hant·fr·ru·it·pl·th·fa·sw·bn·ro·fil·uk·he)는
 *   isFeedAppRoute()가 false를 반환해 SiteHeader가 BlogTopBar를 렌더했고,
 *   그 아래 community-client의 자체 마스트헤드가 또 렌더돼 **상단바가 2겹**이었다.
 *   lib/intl.ts의 "새 언어 추가 = SECONDARY_LOCALES + CHROME" 안내가
 *   이 배열을 언급하지 않아 생긴 드리프트다. 파생시켜 재발을 막는다.
 */
const LOCALE_FEED_ROOTS = SECONDARY_LOCALES.map((l) => `/${l}`);

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


/**
 * 「맨 위로」 버튼의 스크린리더 라벨.
 * 예전엔 한국어가 하드코딩돼 있어서, 일본어·스페인어 페이지에서도
 * 스크린리더가 「맨 위로 이동」을 한국어로 읽었다.
 */
const BACK_TO_TOP: Record<string, string> = {
  en: "Back to top", ja: "ページ上部へ戻る", es: "Volver arriba",
  zh: "回到顶部", "zh-hant": "回到頂部", ar: "العودة إلى الأعلى",
  pt: "Voltar ao topo", id: "Kembali ke atas", ms: "Kembali ke atas",
  vi: "Về đầu trang", hi: "शीर्ष पर जाएँ", de: "Nach oben",
  tr: "Başa dön", fr: "Retour en haut", ru: "Наверх",
  it: "Torna su", pl: "Do góry", th: "กลับไปด้านบน",
  fa: "بازگشت به بالا", sw: "Rudi juu", bn: "উপরে ফিরে যান",
  ro: "Înapoi sus", fil: "Bumalik sa itaas", uk: "Догори", he: "חזרה למעלה",
};

/** 스크롤 300px 이상 시 나타나는 맨 위로 버튼 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = localeFromPath(pathname);
  const label = (locale && BACK_TO_TOP[locale]) || "맨 위로 이동";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => smoothScrollWindowTo(0)}
      aria-label={label}
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
 * <main> 래퍼.
 *
 * ★예전엔 툴 페이지에 pt-11(44px)을 줬다. 그때 상단바가 `fixed`인 AppTopBar(h-11)라
 *   문서 흐름에서 빠져 있었기 때문이다. 지금 렌더되는 건 BlogTopBar이고
 *   `sticky top-0` + height 56px라 **자기 높이를 이미 차지한다**(blog-top-bar.tsx:26).
 *   그래서 pt-11은 순수 잉여였고, 계산기·대회·규칙 등 모든 툴 페이지 상단에
 *   44px 빈 공간을 만들고 있었다. 제거한다.
 */
export function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main id="main-content" className="relative z-10">
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
