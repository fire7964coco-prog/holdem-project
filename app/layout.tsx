import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_KR, DM_Sans } from "next/font/google";
import { SiteHeader, SiteFooter, HtmlLangSync, MainContent } from "@/components/site-chrome";
import { BrushDefs } from "@/components/brush-defs";
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
 * 모바일 LCP/TBT 최적화:
 *  - weight 4개 → 2개 (400 본문, 700 강조) 다운로드 시간 절반
 *  - Noto Serif KR 제거: 헤딩도 Sans 700/900 으로 통일 (한글 폰트 파일 3개 추가 절감)
 *  - 본문/헤딩이 같은 폰트 파일 → 1번 다운로드로 모든 weight 커버
 *  - display:"optional" — 한글 서브셋이 100ms 안에 못 오면 시스템 폰트(Apple SD Gothic
 *    Neo / Malgun Gothic) 로 고정 렌더, 스왑 없음. 모바일 LCP = FCP 로 단축. 두 번째
 *    방문 이후엔 캐시된 Noto Sans KR 사용. (첫 방문자 시각 변화는 사실상 인지 불가)
 */
const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "optional",
  preload: false,
  variable: "--font-noto-sans-kr",
});

/**
 * DM Sans — 팩트풀니스 에디토리얼 감성 폰트
 * 라틴 글자·숫자·헤딩에 적용 (한글은 Noto Sans KR 폴백)
 * weight 800(ExtraBold)로 H2는 크기 아닌 굵기로 존재감
 */
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "optional",
  preload: false,
  variable: "--font-dm-sans",
});

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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon-192.png", sizes: "192x192" }],
  },
  alternates: { canonical: SITE },
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
    <html lang="ko" dir="ltr" suppressHydrationWarning className={`${notoSansKr.variable} ${dmSans.variable}`}>
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
      </body>
    </html>
  );
}
