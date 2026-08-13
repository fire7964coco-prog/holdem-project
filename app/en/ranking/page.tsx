import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RankingEn from "./ranking-client";
import HubPage from "@/components/hub-page";
import { SITES, FAQS } from "./ranking-data";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Best Online Poker Sites 2026 — Top 5 Tested & Ranked | HoldemMaster" },
  description:
    "Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared.",
  alternates: { canonical: `${SITE}/en/ranking` },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Best Online Poker Sites 2026 — Top 5 Tested & Ranked | HoldemMaster",
    description: "Our Top 5 online poker sites for 2026, tested end-to-end from signup to withdrawal. Licensing, security, traffic, and bonuses compared.",
  },
  openGraph: {
    title: "Best Online Poker Sites 2026 — HoldemMaster",
    description: "Top 5 online poker sites, independently tested and ranked for 2026.",
    url: `${SITE}/en/ranking`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 (2026-08-13 — 구 `<SEO schema={jsonLd}>`는 죽은 코드였다).
 * 🔴 구 FAQPage는 문답이 **스키마에만** 있었다(KO `/ranking`과 같은 결함) → 화면 섹션을 함께 만들었다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Widely known online poker sites (informational)",
      description:
        "A factual summary of widely known online Texas Hold'em sites by founding, license jurisdiction, and notable features (for information only, not a ranking or endorsement)",
      numberOfItems: SITES.length,
      itemListElement: SITES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: s.url,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en/` },
        { "@type": "ListItem", position: 2, name: "Online Poker Sites Guide", item: `${SITE}/en/ranking` },
      ],
    },
  ];

  return (
    <HubPage title="Poker Sites" locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RankingEn />
    </HubPage>
  );
}
