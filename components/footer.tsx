import Link from "next/link";
import { Spade } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative z-10 mt-16 border-t border-primary/15"
      style={{
        background:
          "linear-gradient(180deg, hsl(152 55% 5% / 0.6) 0%, hsl(152 55% 7%) 30%, hsl(152 60% 4%) 100%)",
      }}
      role="contentinfo"
    >
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(212,175,55,0.45)]"
                style={{
                  background: "linear-gradient(135deg, #f5d36a 0%, #d4af37 50%, #b8862a 100%)",
                }}
              >
                <Spade className="h-4 w-4 text-[#1a0e02] fill-current" aria-hidden="true" />
              </div>
              <span className="font-serif font-black text-xl text-gold-gradient">홀덤마스터</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              대한민국 최고의 텍사스 홀덤 정보 포털.
              <br className="hidden md:block" />
              초보자부터 고수까지 필요한 모든 정보를 제공합니다.
            </p>
          </div>

          <nav aria-label="홀덤 가이드 메뉴">
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-primary/85 mb-4 font-bold">
              홀덤 가이드
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/rules", label: "기초 규칙" },
                { href: "/hands", label: "핸드 랭킹" },
                { href: "/hand-chart", label: "스타팅 핸드 차트" },
                { href: "/strategy", label: "전략 가이드" },
                { href: "/glossary", label: "용어 사전" },
              ].map((link) => (
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

          <nav aria-label="콘텐츠 메뉴">
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-primary/85 mb-4 font-bold">
              콘텐츠
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/calculator", label: "확률 계산기" },
                { href: "/pub", label: "지역별 홀덤펍" },
                { href: "/blog", label: "전략 블로그" },
                { href: "/win-rate-quiz", label: "승률 퀴즈" },
                { href: "/quiz", label: "족보 퀴즈" },
                { href: "/tournaments", label: "홀덤 대회" },
              ].map((link) => (
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

          <div>
            <h2 className="font-serif text-sm uppercase tracking-[0.18em] text-primary/85 mb-4 font-bold">
              주요 키워드
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                "텍사스 홀덤",
                "포커 룰",
                "홀덤 전략",
                "핸드 랭킹",
                "블라인드",
                "플랍",
                "리버",
                "올인",
                "블러핑",
                "포지션",
              ].map((kw) => (
                <span
                  key={kw}
                  className="text-[11px] tracking-wide text-muted-foreground bg-background/60 border border-primary/15 px-2 py-1 rounded-md hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/12 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground leading-relaxed">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>&copy; {new Date().getFullYear()} 홀덤마스터. All rights reserved.</p>
            <Link
              href="/about"
              className="hover:text-primary transition-colors underline-offset-2 hover:underline"
            >
              팀 소개
            </Link>
          </div>
          <p className="text-center md:text-right opacity-80">
            본 사이트는 정보 제공 목적으로 운영되며, 실제 도박을 조장하지 않습니다. 만 19세 미만 이용 금지.
          </p>
        </div>
      </div>
    </footer>
  );
}
