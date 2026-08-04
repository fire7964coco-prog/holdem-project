"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Search, Compass } from "lucide-react";
import { localeFromPath, CHROME, type SecondaryLocale } from "@/lib/intl";

/**
 * 404 본문 — **로케일별**로 언어를 고른다.
 *
 * ★왜 클라이언트 컴포넌트인가
 *   Next의 `app/not-found.tsx`는 서버 컴포넌트지만 **어느 경로에서 404가 났는지 모른다**
 *   (pathname을 받지 않는다). 로케일별 문구를 고르려면 경로가 필요하므로 여기서 읽는다.
 *   404는 색인 대상이 아니라 클라이언트 렌더로 충분하다 — 상태 코드 404는 서버가 이미 준다.
 *   (로케일마다 not-found.tsx를 두는 방법도 있지만 25개 파일이 된다.)
 *
 * ★언어 커버리지: 한국어 + 영어. 그 외 로케일은 **영어로 떨어진다.**
 *   404 문구 전체를 25개 언어로 새로 번역하면 그게 곧 지어낸 번역이 된다
 *   (bottom-tab-bar의 tabLabels·hub-i18n이 en 폴백을 쓰는 것과 같은 방침).
 *   링크 라벨 중 「블로그」만은 CHROME[locale].blogLabel로 그 언어를 쓴다 — 검증된 값이다.
 *
 * ★다국어에는 검색창을 두지 않는다
 *   검색(`?q=`)은 한국어 `/blog`에만 구현돼 있다. 다국어 블로그 목록엔 없다.
 *   없는 기능을 404에서 제안하면 두 번 실망시킨다.
 */

const KO_POPULAR = [
  { href: "/blog/holdem-hand-rankings", label: "포커 족보 순위", desc: "로열 플러시부터 하이카드까지" },
  { href: "/blog/holdem-rules", label: "텍사스 홀덤 규칙", desc: "처음이라면 여기부터" },
  { href: "/tournaments", label: "홀덤 대회 일정", desc: "국내외 대회 한눈에" },
  { href: "/calculator", label: "확률 계산기", desc: "아웃츠·팟오즈·ICM" },
  { href: "/blog", label: "전체 글 보기", desc: "56편 전략·가이드" },
  { href: "/pub", label: "지역별 홀덤펍", desc: "내 근처 매장 찾기" },
] as const;

/** 영어권 404에서 보여줄 곳 — /en 에만 있는 도구 페이지를 포함한다 */
const EN_POPULAR = [
  { href: "/en/blog/holdem-hand-rankings", label: "Poker Hand Rankings", desc: "Royal flush down to high card" },
  { href: "/en/blog/texas-holdem-rules-for-beginners", label: "Texas Hold'em Rules", desc: "Start here if you're new" },
  { href: "/en/tournaments", label: "Tournament Schedule", desc: "Live events worldwide" },
  { href: "/en/calculator", label: "Odds Calculator", desc: "Outs, pot odds, ICM" },
  { href: "/en/blog", label: "All Articles", desc: "43 guides and strategy posts" },
  { href: "/en/win-rate-quiz", label: "Equity Simulator", desc: "Watch the odds swing" },
] as const;

export default function NotFoundContent() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const isKo = !locale;

  const t = isKo
    ? {
        heading: "찾으시는 페이지가 없습니다",
        lead1: "주소가 바뀌었거나 삭제된 페이지일 수 있습니다.",
        lead2: "아래에서 검색하시거나 인기 페이지로 이동해 보세요.",
        popular: "많이 찾는 페이지",
        home: "홈으로 돌아가기",
        reportPre: "링크가 깨진 것 같다면 ",
        reportLink: "알려주세요",
        reportPost: " — 확인 후 고치겠습니다.",
        searchLabel: "사이트에서 검색",
        searchPlaceholder: "찾는 주제를 검색하세요 — 족보, 팟오즈, 블라인드…",
        searchButton: "검색",
      }
    : {
        heading: "This page doesn't exist",
        lead1: "The address may have changed, or the page may have been removed.",
        lead2: "Try one of the pages below instead.",
        popular: "Popular pages",
        home: "Back to home",
        reportPre: "Think a link is broken? ",
        reportLink: "Tell us",
        reportPost: " and we'll fix it.",
        searchLabel: "",
        searchPlaceholder: "",
        searchButton: "",
      };

  /** 그 언어에 실제로 존재하는 곳만 — 없는 데로 보내면 404에서 또 404가 된다 */
  const popular =
    isKo ? KO_POPULAR
    : locale === "en" ? EN_POPULAR
    : ([
        { href: `/${locale}`, label: CHROME[locale as SecondaryLocale].brand, desc: "Community feed" },
        { href: `/${locale}/blog`, label: CHROME[locale as SecondaryLocale].blogLabel, desc: "Guides and strategy" },
      ] as const);

  const homeHref = isKo ? "/" : `/${locale}`;

  /**
   * ★탭 제목도 언어를 맞춘다.
   *   `app/not-found.tsx`의 metadata는 서버에서 확정되므로 경로를 모른다 — 그래서 한국어 제목이
   *   영어 404에도 그대로 붙었다(브라우저 탭이 "페이지를 찾을 수 없습니다"였다).
   *   404는 색인 대상이 아니라 클라이언트에서 바꿔도 SEO 손해가 없다.
   */
  useEffect(() => {
    if (isKo) return;
    const brand = CHROME[locale as SecondaryLocale].brand;
    document.title = `Page not found (404) | ${brand}`;
  }, [isKo, locale]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <p className="text-6xl md:text-7xl font-black leading-none mb-4 text-gold-gradient" aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-black text-foreground mb-3">{t.heading}</h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          {t.lead1}
          <br className="hidden sm:block" /> {t.lead2}
        </p>
      </div>

      {/* 검색은 한국어에만 — `?q=`가 /blog에만 구현돼 있다(위 주석 참조) */}
      {isKo && (
        <form action="/blog" method="get" role="search" className="mb-12">
          <label htmlFor="notfound-search" className="sr-only">
            {t.searchLabel}
          </label>
          <div className="relative max-w-xl mx-auto">
            <Search
              className="absolute start-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none"
              aria-hidden="true"
            />
            <input
              id="notfound-search"
              name="q"
              type="search"
              placeholder={t.searchPlaceholder}
              autoComplete="off"
              className="w-full h-12 ps-12 pe-24 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground/70 text-sm md:text-base shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition-colors"
            />
            <button
              type="submit"
              className="absolute end-1.5 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:brightness-95 active:scale-95 transition-all"
            >
              {t.searchButton}
            </button>
          </div>
        </form>
      )}

      <section aria-labelledby="popular">
        <h2
          id="popular"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4"
        >
          <Compass className="w-4 h-4" aria-hidden="true" /> {t.popular}
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {popular.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              className="block rounded-xl border border-border bg-card p-4 hover:border-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <span className="block text-sm font-bold text-foreground mb-0.5">{label}</span>
              <span className="block text-xs text-muted-foreground">{desc}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-10 text-center">
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:brightness-95 transition-all"
        >
          <Home className="w-4 h-4" aria-hidden="true" /> {t.home}
        </Link>
        <p className="text-xs text-muted-foreground mt-4">
          {t.reportPre}
          <Link href="/contact" className="text-primary font-semibold hover:underline">
            {t.reportLink}
          </Link>
          {t.reportPost}
        </p>
      </div>
    </div>
  );
}
