import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Lora } from "next/font/google";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader, SiteFooter, HtmlLangSync, MainContent, ScrollToTopButton, SiteRail } from "@/components/site-chrome";
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
 * ★ 2026-08-08: 여기서 한 걸음 더 갔다 — **next/font/google → 자체 서브셋(next/font/local)**.
 *
 *   위 주석이 "397KB를 없애려면 한글 웹폰트를 포기해야 한다"고 적었는데, **그건 사실이 아니었다.**
 *   구글 CDN 방식이 한글을 unicode-range 124조각으로 쪼개는 게 문제였을 뿐이고,
 *   **글자를 우리가 직접 골라 한 파일로 만들면 글꼴을 유지한 채 둘 다 없앨 수 있다.**
 *
 *   왜 그 선언 더미가 비쌌나 — 라이브 A/B 실측(CPU 4x · Slow 4G · n=4 중앙값):
 *       현재(@font-face 438개)   FCP 홈 1,980ms · 블로그 1,748ms
 *       폰트 CSS 제거            FCP 홈 1,300ms · 블로그 1,056ms   (**-34% / -40%**)
 *   네트워크가 아니라 **메인스레드**였다. 홈은 모든 요청이 576ms에 끝났는데 FCP가 4.05s였고,
 *   그중 최대 항목이 Style & Layout 761~929ms였다. 브라우저가 페이지의 모든 텍스트를
 *   438개의 unicode-range와 대조하고 있었던 것이다.
 *
 *   결과: **@font-face 373개 → weight당 1개 · 렌더차단 CSS 235KB → ~0 · 전송 397KB → 157KB**
 *   글꼴은 그대로 Noto Sans KR이다(같은 원본에서 잘라낸 것이라 자형이 동일).
 *
 *   ⚠ 커버리지는 **KS X 1001 완성형 2,350자 + 사이트 실사용 글자**다(생성: `scripts/subset-korean-font.py`).
 *     사이트가 쓰는 1,161자 중 완성형 밖은 **단 2자**였다. 밖의 글자가 나오면
 *     **그 글자만** 시스템 폰트로 폴백된다(문서 전체가 아니다).
 *     새 언어·새 글자군(한자·키릴 등)을 도입하면 스크립트를 다시 돌릴 것.
 */
const notoSansKr = localFont({
  src: [
    { path: "./fonts/noto-sans-kr-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/noto-sans-kr-700.woff2", weight: "700", style: "normal" },
    { path: "./fonts/noto-sans-kr-900.woff2", weight: "900", style: "normal" },
  ],
  /**
   * ★ 2026-08-02: "swap" → "optional" (사장님 승인)
   *
   * swap일 때 실측 CLS가 **0.227**이었다(모바일 4G·CPU 4× · holdem-range-meaning).
   * 폰트가 3.2~3.9초에 도착 → 4.44초에 리플로우:
   *     설명 문단 117→88px · 요약 박스 251→225px · 태그 줄 50→94px
   * 글자가 많은 헤더일수록 커져서 글마다 0.04~0.24로 갈렸다. 구글 "불량" 경계(0.25) 코앞이다.
   *
   * optional은 블록 구간(~100ms) 안에 못 받으면 **그 페이지에선 시스템 폰트를 유지**한다 →
   * 늦게 도착해도 갈아끼우지 않으므로 리플로우가 아예 없다. 다운로드는 백그라운드로 진행돼
   * 캐시에 들어가므로 **두 번째 페이지부터는 웹폰트가 정상 적용**된다.
   * 대가: 느린 회선의 첫 방문에서 제목이 시스템 한글 폰트로 보인다(본문은 원래도 시스템 폰트다 — 아래 설명).
   *
   * ⚠ preload:false는 그대로 둔다. preload는 196ms에 대역폭을 선점해 CSS를 971ms까지 늦췄고,
   *   끄자 LCP가 절반이 됐다(2026-08-01). 되돌리지 말 것.
   */
  display: "optional",
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
  // "optional" — 위 Noto Sans KR과 같은 이유(2026-08-02 CLS 0.227).
  // ★ 리플로우의 실제 주범은 이쪽일 가능성이 크다: font-family가
  //   var(--font-inter), var(--font-noto-sans-kr), var(--font-sans) 순서라
  //   Inter가 첫 매칭이고, 한글은 여기서 폴백으로 흘러간다. Inter가 늦게 도착하면
  //   라틴·숫자 폭이 바뀌면서 한글이 섞인 문단까지 통째로 다시 흐른다.
  display: "optional",
  preload: false, // 위 Noto Sans KR과 같은 이유 — FCP에 불필요한데 대역폭만 선점했다
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
    /**
     * 네이버 서치어드바이저 소유확인 — **값이 두 개다. 하나도 지우지 말 것.**
     * 서치어드바이저는 **호스트 단위로 사이트를 등록**하고 각 사이트마다 다른 값을 준다.
     *   b978… = `https://holdemmaster.com`   (www 없음 · 2026-07-08 등록)
     *   ad6b… = `https://www.holdemmaster.com` (www · 2026-08-15 등록)
     * ★www를 뒤늦게 추가한 이유: 우리 정본은 canonical·사이트맵 전부 **www**인데
     *   등록은 non-www 하나뿐이었다. 웹마스터도구의 「요청(수집·사이트맵)」은
     *   **등록된 호스트 하위 URL만** 받으므로 www URL을 넣을 수가 없었다 —
     *   GTO 13편 중 5편과 `/hand-chart`가 네이버 미색인이던 유력한 원인이다(2026-08-15 실측).
     * ⚠ Next의 `verification.other`는 값에 배열을 주면 같은 name의 meta를 **여러 개** 렌더한다.
     *   네이버는 각 사이트의 값을 각자 찾으므로 둘 다 있어야 양쪽 소유확인이 유지된다.
     */
    other: {
      "naver-site-verification": [
        "b978aa0f38cbfd49ce7e06253e0bcb6f9e2efd18",
        "ad6bd8de7952760de5147c6755301779d0b9b4ac",
      ],
    },
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
        <SiteRail />
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
