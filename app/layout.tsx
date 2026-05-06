import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Noto_Sans_KR } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BrushDefs } from "@/components/brush-defs";
import "./globals.css";

const SITE = "https://holdemmaster.com";

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
  variable: "--font-noto-sans-kr",
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
    <html lang="ko" className={notoSansKr.variable}>
      <head>
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
        <Header />
        <main id="main-content" className="flex-grow pt-[68px] md:pt-20 relative z-10">
          {children}
        </main>
        <Footer />

        {/* Google Analytics — afterInteractive (LCP 영향 0) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CHSBJJDC14"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
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
