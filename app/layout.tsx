import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BrushDefs } from "@/components/brush-defs";
import "./globals.css";

const SITE = "https://holdemmaster.com";

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
    <html lang="ko">
      <head>
        {/* Pretendard Variable (한글 가독성 SOTA) — dynamic-subset, 비차단 로드 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@600;700;900&display=swap"
        />
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
