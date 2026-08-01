import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_KR, Inter, Lora } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader, SiteFooter, HtmlLangSync, MainContent, ScrollToTopButton } from "@/components/site-chrome";
import { BrushDefs } from "@/components/brush-defs";
import SitePopup from "@/components/site-popup";
import "./globals.css";
import { SITE } from "@/lib/site";
import { SECONDARY_LOCALES, HTML_LANG, RTL_LOCALES } from "@/lib/intl";

/**
 * 페인트 직전 동기 실행: URL 첫 세그먼트(/en, /ar 등)를 보고 <html>의 lang/dir을
 * 서버 기본값(ko/ltr)에서 해당 보조 언어로 즉시 보정한다.
 * - 보조 언어 정적 HTML은 lang="ko"로 출력되지만, 이 스크립트가 React 하이드레이션
 *   이전에 실행돼 크롤러가 렌더링하는 DOM·스크린리더·RTL 레이아웃에 올바른 언어 신호를 준다.
 * - 매핑은 lib/intl 단일 소스에서 생성 → drift 방지.
 */
const LOCALE_LANG_MAP = Object.fromEntries(
  SECONDARY_LOCALES.map((l) => [l, HTML_LANG[l]])
);
const RTL_MAP = Object.fromEntries(RTL_LOCALES.map((l) => [l, 1]));
const LANG_BOOTSTRAP = `(function(){try{var s=location.pathname.split('/')[1];var L=${JSON.stringify(
  LOCALE_LANG_MAP
)};var R=${JSON.stringify(
  RTL_MAP
)};var e=document.documentElement;e.lang=L[s]||'ko';e.dir=R[s]?'rtl':'ltr';}catch(_){}})();`;

/**
 * 모바일 전송량 최적화 (2026-08-01 실측 기준으로 재정리)
 *
 * ★ 여기 숫자를 늘리기 전에 반드시 읽을 것.
 * Noto Sans KR은 구글이 한글 글리프를 **124개 서브셋으로 쪼개** 배포한다.
 * 그래서 빌드 산출물의 @font-face 수 = weight 수 × 124.
 * weight 6개였을 때 실측: **@font-face 744개 · 한 페이지가 실제로 받는 woff2 21개 · 440KB**
 * (그 페이지 총 전송량 896KB의 절반이 폰트였다.)
 *
 * ★그런데 weight를 줄여도 **전송 바이트는 안 줄어든다.** 직접 재봤다(2026-08-01):
 *     weight 6개 → 받는 파일 21개 · 397KB (전부 weight 900 하나)
 *     weight 3개 → 21개 · 397KB (여전히 900 하나)
 *     weight 2개 → 21개 · 397KB (900이 없으니 700이 그만큼)
 *   브라우저는 **"이 페이지 한글 볼드에 필요한 글리프 한 벌"**만 받고, 그게 397KB다.
 *   나머지 weight는 @font-face 선언만 차지하고 실제로는 한 번도 안 받아진다.
 *   (본문 한글 400은 Inter_Fallback이 먼저 매칭돼 시스템 한글 폰트로 렌더된다.
 *    Noto Sans KR 400 파일이 단 한 번도 요청되지 않는 것이 그 증거다.)
 *
 * 그래서 여기서 하는 일은 **CSS 군살 제거**다 — @font-face 846개 → 438개.
 * 실제로 렌더에 쓰이는 400/700/900만 남긴다. 500·600·800은 어차피 다운로드된 적이
 * 없으므로 지워도 화면은 그대로다(라틴은 Inter가 5 weight를 유지하므로 무관).
 *
 * ⚠ 397KB를 진짜로 없애려면 **한글 웹폰트 자체를 포기**해야 한다(본문은 이미 시스템
 *   폰트를 쓰고 있으니 헤딩만 맞추면 된다). 그건 타이포그래피 결정이라 사장님 판단 몫.
 */
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  // ★ preload 끔 (2026-08-01). display:"swap"이라 첫 페인트는 시스템 폰트로 이미 나온다 —
  // 즉 이 폰트는 FCP에 필요하지 않다. 그런데 preload는 196ms에 최우선으로 받기 시작해
  // 렌더를 막는 CSS·HTML과 1.6Mbps를 다퉜다(모바일 4G 실측: CSS 24KB가 971ms 걸림).
  // 끄면 CSS 파싱 후에 받으므로 임계 경로에서 빠진다. 글자는 나중에 스왑된다.
  preload: false,
  variable: "--font-noto-sans-kr",
});

/**
 * Inter — 모바일 최적 UI 산세리프
 * 영자·숫자 가독성 최고, 모든 기기 완벽 지원
 */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: false, // 위 Noto Sans KR과 같은 이유 — swap이라 FCP에 불필요한데 대역폭만 선점했다
  variable: "--font-inter",
});

/**
 * Lora — 에디토리얼 세리프
 * 전략 글 헤드라인, 마스트헤드·인용에 사용
 */
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "optional",
  preload: false,
  variable: "--font-lora",
});

/*
 * EB Garamond 제거됨 (2026-08-01)
 * globals.css 19행에 "font-serif → sans-serif 통일 (EB Garamond 제거, 한글 혼용
 * 굵기 불균일 문제 해결)"이라고 이미 적혀 있었는데 **선언만 남아 있었다.**
 * --font-eb-garamond 를 참조하는 코드는 layout.tsx 자기 자신뿐이었다(전수 검색 확인).
 * @font-face 35개 · 빌드 산출물 1.27MB 분량이 아무 데도 안 쓰이고 있었다.
 * 되살리려면 globals.css의 위 결정부터 뒤집어야 한다.
 */
export const viewport: Viewport = {
  themeColor: "#0a1f10",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "홀덤마스터 — 텍사스 홀덤 완벽 가이드",
    template: "%s | 홀덤마스터",
  },
  description:
    "텍사스 홀덤 규칙, 전략, 확률 계산기, 홀덤펍 정보를 한 곳에서. 입문자부터 고수까지 모두를 위한 한국 최고의 홀덤 정보 허브.",
  keywords:
    "텍사스 홀덤, 홀덤 규칙, 포커 족보, 홀덤 전략, 홀덤 확률 계산기, 홀덤 입문, 홀덤마스터",
  authors: [{ name: "홀덤마스터 편집팀", url: SITE }],
  applicationName: "홀덤마스터",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  formatDetection: { email: false, telephone: false, address: false },
  robots: { index: true, follow: true },
  verification: {
    other: { "naver-site-verification": "b978aa0f38cbfd49ce7e06253e0bcb6f9e2efd18" },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon-192.png", sizes: "192x192" }],
  },
  alternates: {
    canonical: SITE,
    types: { "application/rss+xml": `${SITE}/rss.xml` },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE,
    siteName: "홀덤마스터",
    title: "홀덤마스터 — 텍사스 홀덤 완벽 가이드",
    description:
      "텍사스 홀덤 규칙, 전략, 확률 계산기, 홀덤펍 정보를 한 곳에서. 입문자부터 고수까지 모두를 위한 한국 최고의 홀덤 정보 허브.",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "홀덤마스터" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "홀덤마스터 — 텍사스 홀덤 완벽 가이드",
    description:
      "텍사스 홀덤 규칙, 전략, 확률 계산기, 홀덤펍 정보를 한 곳에서. 입문자부터 고수까지 모두를 위한 한국 최고의 홀덤 정보 허브.",
    images: ["/opengraph.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" dir="ltr" suppressHydrationWarning className={`${notoSansKr.variable} ${inter.variable} ${lora.variable}`}>
      <head>
        {/* 보조 언어 경로에서 lang/dir을 페인트 직전 보정 (RTL 깜빡임·언어 신호) */}
        <script dangerouslySetInnerHTML={{ __html: LANG_BOOTSTRAP }} />
        {/* Organization JSON-LD (사이트 전역) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "홀덤마스터",
              url: SITE,
              description:
                "텍사스 홀덤 규칙·전략·확률 계산기·홀덤펍 정보 포털. 입문자부터 고수까지.",
              inLanguage: "ko-KR",
              publisher: {
                "@type": "Organization",
                name: "홀덤마스터",
                url: SITE,
                logo: { "@type": "ImageObject", url: `${SITE}/favicon.svg` },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body>
        <BrushDefs />
        <HtmlLangSync />
        <SiteHeader />
        <MainContent>{children}</MainContent>
        <SiteFooter />
        <ScrollToTopButton />
        <SitePopup />

        {/* Google Analytics — lazyOnload (메인 스레드 한가할 때 로드, TBT/렌더 차단 0) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CHSBJJDC14"
          strategy="lazyOnload"
        />
        <Script id="ga4-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CHSBJJDC14', { send_page_view: true });
          `}
        </Script>

        {/*
         * Vercel Speed Insights — 실사용자(RUM) Core Web Vitals
         * 왜 필요한가: 지금까지 LCP는 CDP 스로틀링으로 "흉내낸" 값뿐이었다.
         * PSI는 무료 쿼터가 소진돼(429) 못 돌린다. 이건 실제 방문자의 LCP/INP/CLS를
         * 페이지별로 상시 수집한다 — 개선이 진짜 먹혔는지 확인할 유일한 수단.
         * GA4와 목적이 다르다: GA4=행동(참여율), Speed Insights=성능(CWV).
         * ⚠ Vercel 대시보드에서 Speed Insights를 켜야 데이터가 쌓인다(무료 티어 있음).
         */}
        <SpeedInsights />
        {/* Vercel Analytics — 서버 사이드 집계라 애드블록·ITP에 덜 막힌다.
            GA4가 놓치는 트래픽의 대조군으로 쓴다(Direct=봇 판정 검증에도 유용). */}
        <Analytics />
      </body>
    </html>
  );
}
