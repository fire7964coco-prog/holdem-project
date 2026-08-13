import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import QuizEn from "./quiz-client";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Poker Hand Quiz — Spot the Best Hand from 7 Cards | HoldemMaster" },
  description:
    "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-ranking skills — share your score.",
  alternates: { canonical: `${SITE}/en/quiz` },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Poker Hand Quiz — Spot the Best Hand from 7 Cards | HoldemMaster",
    description: "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-ranking skills — share your score.",
  },
  openGraph: {
    title: "Poker Hand Quiz — HoldemMaster",
    description: "Spot the best 5-card hand from 7. Test your hand-reading in 10 questions.",
    url: `${SITE}/en/quiz`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 — 정본 = `app/calculator/page.tsx`.
 * ★2026-08-13 신설. 그 전까지 이 페이지는 자기 구조화 데이터가 **0**이었다
 *   (루트 layout의 WebSite·Organization만 있었다).
 * ⚠ FAQPage는 **붙이지 않았다** — 이 페이지엔 화면에 문답이 없다.
 *   스키마에만 있는 FAQ는 구글 스펙 위반이고 LLM도 읽지 못한다(허브 트랙에서 그 결함을 걷어냈다).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Poker Hand Quiz — Spot the Best Hand from 7 Cards",
      description: "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-ranking skills — share your score.",
      url: `${SITE}/en/quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "10 questions: pick the best 5 from 7 cards",
        "Explanation for every answer",
        "Shareable score"
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en/` },
        { "@type": "ListItem", position: 2, name: "Poker Hand Quiz", item: `${SITE}/en/quiz` },
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
      <HubPage title="Quiz" locale="en">
        <QuizEn />
      </HubPage>
    </>
  );
}
