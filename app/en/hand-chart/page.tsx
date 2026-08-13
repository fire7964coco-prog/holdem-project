import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartEn from "./hand-chart-client";
import HubPage from "@/components/hub-page";
import { HAND_CHART_FAQ } from "./faq";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Poker Starting Hand Chart — Open Ranges by Position | HoldemMaster" },
  description:
    "Interactive Texas Hold'em starting hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges.",
  alternates: { canonical: `${SITE}/en/hand-chart` },
  // 카니발 방지: holdem-starting-hands-chart 필라가 키워드 소유. 도구는 SERP 제외.
  robots: { index: false, follow: true },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Poker Starting Hand Chart — Open Ranges by Position | HoldemMaster",
    description: "Interactive Texas Hold'em starting hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded GTO open ranges.",
  },
  openGraph: {
    title: "Poker Starting Hand Chart — HoldemMaster",
    description: "All 169 hands, color-coded by position. Tap a seat to see what to open.",
    url: `${SITE}/en/hand-chart`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 — 정본 = `app/calculator/page.tsx`.
 * ★2026-08-13 신설. 그 전까지 이 페이지는 자기 구조화 데이터가 **0**이었다
 *   (루트 layout의 WebSite·Organization만 있었다).
 * 🟢 FAQPage는 화면 `<details>`와 **같은 배열**을 쓴다 — `<details>`는 접혀 있어도 답변이 DOM에 남는다.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Starting Hand Chart — Open Ranges by Position",
      description: "Interactive Texas Hold'em starting hand chart. Compare all 169 hands across UTG, HJ, CO, Button, and SB with color-coded open ranges.",
      url: `${SITE}/en/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "All 169 preflop hands",
        "Open ranges for UTG, HJ, CO, Button and SB",
        "Tap a position to highlight only that range",
        "Colour-coded pocket pairs, suited and offsuit"
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en/` },
        { "@type": "ListItem", position: 2, name: "Starting Hand Chart", item: `${SITE}/en/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubPage title="Hand Chart" locale="en">
        <HandChartEn />
      </HubPage>
    </>
  );
}
