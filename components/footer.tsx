import Link from "next/link";
import { Spade } from "lucide-react";

/**
 * 사이트 푸터.
 *
 * ★2026-08-05 재작성 — 그 전까지 이 파일은 **어디서도 import되지 않는 죽은 코드**였다.
 *   site-chrome.tsx의 SiteFooter()가 `return null`이라 실제 렌더된 <footer>는 전 페이지 0개였고,
 *   그 결과 개인정보처리방침·이용약관·문의로 가는 길이 사이트에 존재하지 않았다
 *   (/privacy는 404였고 /about은 만들어져 있는데 어디서도 링크되지 않았다).
 *
 * ★색은 크림 테마 토큰(bg-card/border-border/muted-foreground)으로 간다.
 *   옛 버전은 다크 그린 그라디언트를 하드코딩하고 있었는데, 사이트 UI는 2026-07에
 *   따뜻한 크림 라이트 테마로 바뀌었다(globals.css `--background: 37 33% 93%`).
 *   그대로 되살렸으면 페이지 하단만 검게 뜬다.
 *
 * ★「주요 키워드」 <span> 10개 블록은 되살리지 않았다. 누를 수 없는 키워드 나열은
 *   이번 세션에서 태그 칩을 링크로 바꾼 것과 정확히 같은 종류의 문제(§8 키워드 나열 금지)다.
 */

const GUIDE_LINKS = [
  { href: "/rules", label: "기초 규칙" },
  { href: "/blog/holdem-hand-rankings", label: "핸드 랭킹" },
  { href: "/hand-chart", label: "스타팅 핸드 차트" },
  { href: "/strategy", label: "전략 가이드" },
  { href: "/glossary", label: "용어 사전" },
] as const;

const CONTENT_LINKS = [
  { href: "/blog", label: "전략 블로그" },
  { href: "/blog#search", label: "글 검색" },
  { href: "/calculator", label: "확률 계산기" },
  { href: "/tournaments", label: "홀덤 대회" },
  { href: "/pub", label: "지역별 홀덤펍" },
  { href: "/win-rate-quiz", label: "승률 시뮬레이터" },
  { href: "/quiz", label: "족보 퀴즈" },
  /**
   * ⚠ 여기에 «/hands»를 넣지 마라 (2026-08-13에 넣었다가 같은 날 뺐다).
   *   그 페이지는 noindex이고, 「우리 족보 페이지는 여기다」라고 전 페이지에서 말하면
   *   검색엔진에 «색인하지 마라»와 정반대 신호가 간다 — 2026-08-01에 링크 10곳을
   *   필라로 이관한 이유가 정확히 그것이었다. 족보 링크는 GUIDE_LINKS의 「핸드 랭킹」(필라)이 받는다.
   */
] as const;

/** 사이트 정보 — 신뢰(E-E-A-T)·법적 고지. 여기가 이번에 새로 생긴 축이다. */
const SITE_LINKS = [
  { href: "/about", label: "팀 소개" },
  { href: "/contact", label: "문의·오류 제보" },
  { href: "/privacy", label: "개인정보처리방침" },
  { href: "/terms", label: "이용약관" },
] as const;

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: readonly { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="text-xs uppercase tracking-[0.18em] text-primary mb-3 font-bold">{title}</h2>
      <ul className="space-y-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-primary transition-colors duration-200 inline-flex items-center gap-1.5 group"
            >
              <span
                className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary transition-colors"
                aria-hidden="true"
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer({ className = "" }: { className?: string }) {
  return (
    <footer
      className={`relative z-10 mt-16 border-t border-border bg-card ${className}`}
      role="contentinfo"
    >
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
      />
      {/* ★2026-08-19 구간C: 모바일 푸터가 844px = 정확히 한 화면이었다. 여백만 줄인다.
          🔴 **링크 그룹을 접거나 지우지 않았다** — 이 푸터는 전역이라 홈·계산기·대회까지 같이 바뀐다.
             이번 회차는 「블로그 상세」로 범위를 못박았고, 홈은 실측상 문제 축이 아니었다
             (오가닉 랜딩 5.2% · 모바일 격차 17.9p 로 최하위권). 접기는 별도 판단으로 남긴다. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(var(--gold-dark-rgb),0.45)]"
                style={{
                  background: "linear-gradient(135deg, #f5d36a 0%, rgb(var(--gold-dark-rgb)) 50%, #b8862a 100%)",
                }}
              >
                <Spade className="h-4 w-4 text-[#1a0e02] fill-current" aria-hidden="true" />
              </div>
              <span className="font-black text-xl text-foreground">홀덤마스터</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              텍사스 홀덤 규칙·전략·확률·대회 정보를 한 곳에서.
              <br className="hidden md:block" /> 12년 경력 편집팀이 직접 검산해 씁니다.
            </p>
          </div>

          <FooterNav title="홀덤 가이드" links={GUIDE_LINKS} />
          <FooterNav title="콘텐츠" links={CONTENT_LINKS} />
          <FooterNav title="사이트 정보" links={SITE_LINKS} />
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground leading-relaxed">
          <p>&copy; {new Date().getFullYear()} 홀덤마스터. All rights reserved.</p>
          <p className="text-center md:text-right">
            본 사이트는 정보 제공 목적으로 운영되며, 실제 도박을 조장하지 않습니다.{" "}
            <strong className="text-foreground">만 19세 미만 이용 금지.</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
