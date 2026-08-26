"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localeFromPath, HTML_LANG, NAV_CTA, NAV_HOME_FEED, dirForLocale, SECONDARY_LOCALES, CHROME } from "@/lib/intl";
import { SITE } from "@/lib/site";
import BlogTopBar from "@/components/blog-top-bar";
import { hasBottomTabBar } from "@/components/bottom-tab-bar";
import { FixedSideRail, hasFixedSideRail } from "@/components/side-rail";
import { Footer } from "@/components/footer";
import { IntlFooter } from "@/components/intl-footer";
import { isHubRoute } from "@/lib/hub-routes";
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
 * ★자체 섹션 네비를 가진 라우트 — 공용 BlogTopBar를 렌더하지 않는다 (2026-08-04).
 *
 * 표준 앱 구조는 「하단 = 전역 네비 / 상단 = 그 섹션 안의 네비」다.
 * 하단 탭바가 생기면서 BlogTopBar의 ←홈피드·커뮤니티→ 두 버튼은 피드 탭과 완전히 중복이 됐고,
 * 그 자리를 섹션 자체 네비가 대신하는 편이 낫다.
 * 계산기는 이미 8개 계산기 탭을 본문 최상단에 갖고 있어 그것이 곧 섹션 네비다.
 */
function hasOwnSectionNav(pathname: string): boolean {
  const p = pathname.replace(/^\/[a-z]{2}(-[a-z]+)?(?=\/|$)/i, "") || "/";
  return p === "/calculator";
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

/**
 * ★접근성 skip-link — **body의 첫 포커스 요소**라 위치를 바꾸지 마라.
 *
 * 2026-08-16에 죽은 `components/header.tsx`에서 app/layout.tsx로 이식했는데,
 * 그때 라벨을 «본문 바로가기» 한국어로 하드코딩했다. 루트 레이아웃은 서버 컴포넌트라
 * 경로를 못 봐서 **비한국어 541페이지 전부**가 한국어 라벨을 내보내고 있었다
 * (2026-08-25 빌드 산출물 실측). 시각적으로 숨겨져 있어 «무해하다»고 적어 뒀지만
 * 스크린리더는 이 문자열을 **읽는다** — 독일어 페이지에서 한국어가 낭독됐다.
 *
 * 🔴 새 문자열을 짓지 않았다. `CHROME[locale].skip`이 25개 언어 전부 이미 있었는데
 *    (죽은 header.tsx가 쓰던 것) 이식 때 아무도 안 가져다 썼을 뿐이다.
 *
 * 클라이언트 컴포넌트지만 정적 프리렌더에 라벨이 그대로 박힌다 — SiteFooter가 같은
 * 방식으로 de/blog.html에 독일어 tagline을 이미 넣고 있는 것이 그 증거다.
 */
export function SkipLink() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md"
    >
      {locale ? CHROME[locale].skip : "본문 바로가기"}
    </a>
  );
}

/**
 * 사이트 전역 `WebSite` 구조화 데이터.
 *
 * ★2026-08-26 — 원래 `app/layout.tsx`의 `<head>`에 **한국어로 하드코딩**돼 있었다.
 *   루트 layout은 서버 컴포넌트라 경로를 못 보므로, 그 한국어가 **비한국어 541페이지 전부**에
 *   그대로 박혔다: `name: "홀덤마스터"` · 한국어 `description` · `inLanguage: "ko-KR"` ·
 *   `publisher.name: "홀덤마스터"`.
 *
 *   🔴 **같은 페이지 안에서 스키마가 갈리고 있었다.** 독일어 글 하나가
 *      Article 스키마에선 publisher 를 «HoldemMaster»(`intl-blog-page.tsx`)로,
 *      이 WebSite 스키마에선 «홀덤마스터»로 선언했다. `lib/intl-jsonld.tsx`의
 *      `isPartOfSite()`도 진작 `CHROME[locale].brand`를 쓰고 있었으니
 *      **같은 URL의 WebSite 엔티티에 이름이 둘**이었다. 그 파일 주석이 «루트 layout이 이미
 *      내보내는 사이트 WebSite와 충돌한다»고 경고해 둔 것이 바로 이 자리다.
 *      2026-08-25에 `<meta name="author">`를 og·JSON-LD와 3자 일치시킨 것과 **같은 유형**이다.
 *
 * ★문자열을 새로 짓지 않는다 — 전부 이미 검증돼 화면에 나가는 값이다
 *   `name`·`publisher.name` = `CHROME[locale].brand` (푸터·og:site_name 과 같은 소스)
 *   `description`           = `CHROME[locale].tagline` (푸터에 이미 렌더되는 문장)
 *   `inLanguage`            = `HTML_LANG[locale]` (`<html lang>`·hreflang 과 같은 소스)
 *
 * 🔴 **비한국어에는 `potentialAction`(SearchAction)을 넣지 않는다 — 거짓 주장이 된다.**
 *   KO `/blog`는 `blog-index-client.tsx`가 `window.location.search`로 `?q=`를 **실제로 읽는다**
 *   (2026-08-26 원문 확인). 그런데 로케일 목록 `lib/intl-blog-index.tsx`에는
 *   **검색 UI도 `?q=` 처리도 없다.** 그래서 KO 에서만 선언한다.
 *   로케일 blog 에 검색을 붙이는 날 여기도 같이 열어라.
 *
 * ⚠ 한국어 출력은 이전과 **의미상 동일**하다(값 전부 동일). 위치만 `<head>` → `<body>`로 옮겼다 —
 *   경로를 봐야 해서 클라이언트 컴포넌트여야 하기 때문이다. JSON-LD는 body 에 있어도 유효하고,
 *   이 레포의 다른 JSON-LD(`intl-jsonld.tsx`·`intl-blog-page.tsx`)도 전부 body 에 있다.
 */
export function SiteJsonLd() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);

  const brand = locale ? CHROME[locale].brand : "홀덤마스터";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: brand,
    url: SITE,
    description: locale
      ? CHROME[locale].tagline
      : "텍사스 홀덤 규칙·전략·확률 계산기·홀덤펍 정보 포털. 입문자부터 고수까지.",
    inLanguage: locale ? HTML_LANG[locale] : "ko-KR",
    publisher: {
      "@type": "Organization",
      name: brand,
      url: SITE,
      logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
    },
    ...(locale
      ? {}
      : {
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/** 스크롤 300px 이상 시 나타나는 맨 위로 버튼 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const label = (locale && BACK_TO_TOP[locale]) || "맨 위로 이동";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ★하단 탭바가 깔리는 라우트에서는 그 위로 비켜선다.
  //   기본 bottom-6(24px)이면 버튼(44px)이 24~68px를 차지해 탭바(0~62px)와 겹친다.
  //   허브 셸도 자체적으로 탭바를 깐다(TAB_BAR_SECTIONS엔 없는 /quiz 등 포함) → 같이 비켜준다.
  const liftAboveTabBar = hasBottomTabBar(pathname) || isHubRoute(pathname);

  return (
    <button
      onClick={() => smoothScrollWindowTo(0)}
      aria-label={label}
      className={`fixed right-4 z-50 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 ${
        liftAboveTabBar ? "bottom-[74px] lg:bottom-6" : "bottom-6"
      }`}
      style={{
        background: "linear-gradient(135deg,rgb(var(--gold-dark-rgb)),#f0d060)",
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
  // ★허브 셸 라우트는 HubShell이 홈과 같은 마스트헤드를 직접 그린다 (2026-08-04).
  //   여기서 BlogTopBar까지 렌더하면 상단바가 2겹이 된다.
  if (isHubRoute(pathname)) return null;
  // 나머지 모든 페이지(퀴즈·족보·규칙 등)는 BlogTopBar 공용 컴포넌트
  const homeHref = locale ? `/${locale}` : "/";
  const ctaLabel = locale ? NAV_CTA[locale] : "커뮤니티";
  const homeFeedLabel = locale ? NAV_HOME_FEED[locale] : "홈피드";
  const bar = <BlogTopBar homeHref={homeHref} homeFeedLabel={homeFeedLabel} communityLabel={ctaLabel} />;

  // ★xl 이상에서 좌측 레일이 깔리는 라우트는 탑바를 뺀다 (2026-08-04).
  //   레일이 전역 이동을 전부 맡으므로 탑바의 「홈피드」·「커뮤니티」는 중복이다
  //   (게다가 그 둘은 href가 같아 실질 목적지가 하나였다).
  //   xl 미만에는 레일이 없으므로 탑바가 그대로 그 역할을 맡는다.
  const railHere = hasFixedSideRail(pathname);

  // ★자체 섹션 네비가 있는 라우트(계산기)는 **모바일에서만** 전역 탑바를 뺀다.
  //   모바일은 하단 탭바가 전역 이동을 맡지만, 하단 탭바는 lg:hidden이라
  //   데스크톱에서 탑바까지 빼면 네비가 0이 된다(실측으로 잡은 회귀).
  if (hasOwnSectionNav(pathname)) return <div className={railHere ? "hidden lg:block xl:hidden" : "hidden lg:block"}>{bar}</div>;
  if (railHere) return <div className="xl:hidden">{bar}</div>;
  return bar;
}

/**
 * 데스크톱 전역 좌측 레일. 모바일 하단 탭바의 짝이며, 깔리는 섹션도 같다.
 * 홈은 자체 레일(community-client)이 있으므로 hasFixedSideRail에서 빠져 있다.
 */
export function SiteRail() {
  const pathname = usePathname() || "/";
  // 허브 셸은 자기 레일을 흐름 안에 갖는다(홈과 동일) — 고정 레일까지 깔면 2개가 된다
  if (isHubRoute(pathname)) return null;
  if (!hasFixedSideRail(pathname)) return null;
  const locale = localeFromPath(pathname);
  return (
    <FixedSideRail
      active="none"
      base={locale ? `/${locale}` : ""}
      locale={locale}
    />
  );
}

/**
 * 푸터를 깔지 **않는** 라우트 — 피드 앱(홈·글상세·로그인)과 커뮤니티.
 *
 * 무한 스크롤 피드는 바닥이 없어서 푸터가 사실상 도달 불가능한 자리에 놓인다.
 * 대신 데스크톱 좌측 레일 하단에 정책 링크를 넣어(side-rail.tsx) 홈에서도 도달 가능하게 했다.
 * 그 외 모든 페이지(블로그 글·목록·계산기·대회·규칙·툴)에는 푸터가 깔린다.
 */
function isFooterlessRoute(pathname: string): boolean {
  if (pathname === "/" || pathname === "/login") return true;
  if (pathname.startsWith("/post/") || pathname.startsWith("/community")) return true;
  return LOCALE_FEED_ROOTS.some((p) => pathname === p || pathname === p + "/");
}

/**
 * 사이트 푸터.
 *
 * ★2026-08-05 부활 — 그 전까지 이 함수는 `return null`이었고, 그래서 사이트 전체에
 *   렌더된 <footer>가 **0개**였다. 개인정보처리방침·이용약관·문의로 가는 길이 없었고
 *   /about은 만들어져 있는데 어디서도 링크되지 않았다.
 *
 * ★푸터는 <main> 밖(layout.tsx)에 있으므로 <main>이 받는 보정을 **똑같이 받아야 한다**:
 *   - 고정 좌측 레일(xl) → ps-[212px] 없으면 푸터가 레일 아래로 깔린다
 *   - 고정 하단 탭바     → pb 없으면 탭바가 푸터 마지막 62px을 덮는다
 */
export function SiteFooter() {
  const pathname = usePathname() || "/";
  if (isFooterlessRoute(pathname)) return null;
  /**
   * ★로케일 경로에는 다국어 푸터 (2026-08-04).
   *   허브 셸을 /en/* 에 적용하면서 **한국어 푸터가 영어 페이지 바닥에 통째로** 붙었다
   *   (홀덤 가이드 / 기초 규칙 / 개인정보처리방침 …). 실측으로 발견.
   *   `components/intl-footer.tsx`는 이미 있었는데 어디서도 import되지 않는 죽은 코드였다
   *   — CHROME[locale]의 검증된 문자열을 쓰므로 그걸 살려 쓴다(새 번역 0건).
   */
  const footerLocale = localeFromPath(pathname);
  // 허브 셸은 레일이 흐름 안에 있어 푸터가 비켜설 필요가 없다(위 MainContent와 같은 이유).
  const railPad = !isHubRoute(pathname) && hasFixedSideRail(pathname) ? " xl:ps-[212px]" : "";
  // ★허브 셸은 모든 경로에 하단 탭바를 깐다(TAB_BAR_SECTIONS에 없는 /quiz·/glossary 등 포함).
  //   푸터가 페이지의 마지막 요소이므로 탭바 높이를 여기서 비켜준다.
  const tabPad =
    isHubRoute(pathname) || hasBottomTabBar(pathname) ? " pb-[62px] lg:pb-0" : "";
  const cls = `${railPad}${tabPad}`;
  return footerLocale ? <IntlFooter locale={footerLocale} className={cls} /> : <Footer className={cls} />;
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
  const pathname = usePathname() || "/";
  // ★좌측 고정 레일이 깔린 라우트는 그만큼 비켜선다 — 하단 탭바가 fixed일 때
  //   본문에 pb-[62px]을 준 것과 같은 방식이다. 레일 자체는 fixed라 흐름을 안 차지한다.
  //   ps-(padding-inline-start)를 쓰는 이유: 아랍어·히브리어 RTL에서 레일이 오른쪽으로 간다.
  // ★허브 셸 라우트는 레일이 **흐름 안**(3열 flex)에 있으므로 이 패딩을 주면 안 된다.
  //   주면 본문이 212px 더 밀려 우측 사이드바가 잘린다.
  const railPad = !isHubRoute(pathname) && hasFixedSideRail(pathname) ? " xl:ps-[212px]" : "";
  return (
    <main id="main-content" className={`relative z-10${railPad}`}>
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
