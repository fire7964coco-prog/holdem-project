import type { Metadata } from "next";
import Link from "next/link";
import { Home, Search, Compass } from "lucide-react";

/**
 * 커스텀 404.
 *
 * ★그 전까지는 Next 기본 화면이었다 — 흰 배경에 영어 한 줄
 *   "404: This page could not be found." 뿐이고 사이트의 나머지로 갈 링크가 하나도 없었다.
 *   404에 떨어진 방문자는 사실상 100% 이탈이었다는 뜻이다.
 *
 * ★404는 색인 대상이 아니다(robots noindex). Next가 이 페이지에 자동으로 404 상태 코드를
 *   주므로 별도 처리는 필요 없지만, 크롤러가 실수로 잡아가지 않도록 메타로도 명시한다.
 *
 * ★서버 컴포넌트로 둔다 — 검색은 폼을 /blog로 GET 제출하는 것으로 충분해서
 *   자바스크립트가 필요 없다(폼 action이 곧 layout.tsx SearchAction과 같은 `/blog?q=` 계약).
 */

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 (404)",
  robots: { index: false, follow: true },
};

/** 유입이 가장 많은 관문들 — 여기로 흘려보내는 게 404의 유일한 일이다 */
const POPULAR = [
  { href: "/blog/holdem-hand-rankings", label: "포커 족보 순위", desc: "로열 플러시부터 하이카드까지" },
  { href: "/blog/holdem-rules", label: "텍사스 홀덤 규칙", desc: "처음이라면 여기부터" },
  { href: "/tournaments", label: "홀덤 대회 일정", desc: "국내외 대회 한눈에" },
  { href: "/calculator", label: "확률 계산기", desc: "아웃츠·팟오즈·ICM" },
  { href: "/blog", label: "전체 글 보기", desc: "56편 전략·가이드" },
  { href: "/pub", label: "지역별 홀덤펍", desc: "내 근처 매장 찾기" },
] as const;

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-10">
        <p
          className="text-6xl md:text-7xl font-black leading-none mb-4 text-gold-gradient"
          aria-hidden="true"
        >
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-black text-foreground mb-3">
          찾으시는 페이지가 없습니다
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          주소가 바뀌었거나 삭제된 페이지일 수 있습니다.
          <br className="hidden sm:block" /> 아래에서 검색하시거나 인기 페이지로 이동해 보세요.
        </p>
      </div>

      {/* 검색 — JS 없이 동작한다. /blog가 ?q=를 읽어 필터링한다. */}
      <form action="/blog" method="get" role="search" className="mb-12">
        <label htmlFor="notfound-search" className="sr-only">
          사이트에서 검색
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
            placeholder="찾는 주제를 검색하세요 — 족보, 팟오즈, 블라인드…"
            autoComplete="off"
            className="w-full h-12 ps-12 pe-24 rounded-full bg-card border border-border text-foreground placeholder:text-muted-foreground/70 text-sm md:text-base shadow-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 transition-colors"
          />
          <button
            type="submit"
            className="absolute end-1.5 top-1/2 -translate-y-1/2 h-9 px-4 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:brightness-95 active:scale-95 transition-all"
          >
            검색
          </button>
        </div>
      </form>

      <section aria-labelledby="popular">
        <h2
          id="popular"
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary mb-4"
        >
          <Compass className="w-4 h-4" aria-hidden="true" /> 많이 찾는 페이지
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {POPULAR.map(({ href, label, desc }) => (
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
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:brightness-95 transition-all"
        >
          <Home className="w-4 h-4" aria-hidden="true" /> 홈으로 돌아가기
        </Link>
        <p className="text-xs text-muted-foreground mt-4">
          링크가 깨진 것 같다면 <Link href="/contact" className="text-primary font-semibold hover:underline">알려주세요</Link> — 확인 후 고치겠습니다.
        </p>
      </div>
    </div>
  );
}
