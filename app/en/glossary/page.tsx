import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import GlossaryEn from "./glossary-client";
import HubPage from "@/components/hub-page";
import { TERMS } from "./glossary-data";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Poker Glossary — Texas Hold'em Terms Explained (A–Z) | HoldemMaster" },
  description:
    "A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms.",
  alternates: { canonical: `${SITE}/en/glossary` },
  // 카니발 방지: holdem-glossary 필라가 "poker glossary" 키워드 소유. 도구는 SERP 제외.
  robots: { index: false, follow: true },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Poker Glossary — Texas Hold'em Terms Explained (A–Z) | HoldemMaster",
    description: "A clear, accurate glossary of Texas Hold'em terms: nuts, outs, pot odds, 3-bet, c-bet, ICM, SPR, kicker, tilt and more. Search or filter 45+ essential poker terms.",
  },
  openGraph: {
    title: "Poker Glossary — HoldemMaster",
    description: "45+ essential Texas Hold'em terms, defined clearly and correctly. Search or filter by category.",
    url: `${SITE}/en/glossary`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 (2026-08-13 — 구 `<SEO schema={jsonLd}>`는 죽은 코드였다).
 *
 * ⚠ 타입을 **FAQPage → DefinedTermSet**으로 바꿨다. 구 코드는 질문을
 *   `What does "{term}" mean in poker?`로 **합성**했는데 그 문장은 화면에 없다(용어 카드 목록이다).
 *   구글 FAQPage는 «질문·답변이 페이지에 보일 것»을 요구하고, FAQ 리치결과는 2026-05-07에 종료돼
 *   «FAQPage여서 얻는 것»도 없다. 용어집의 정확한 타입은 DefinedTermSet/DefinedTerm이다.
 * ⚠ 구 코드는 `TERMS.slice(0, 8)`로 8개만 넣었다 — 전수로 바꿨다.
 * 🪶 이 페이지는 noindex(필라 `holdem-glossary`가 「poker glossary」를 소유) — 구글 리치결과가 아니라
 *   LLM·RAG 파싱과 페이지 품질 목적이다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "Poker Glossary — Texas Hold'em Terms",
      description:
        "Texas Hold'em terms defined clearly and correctly, with the situation each one actually shows up in.",
      url: `${SITE}/en/glossary`,
      inLanguage: "en",
      hasDefinedTerm: TERMS.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.desc,
        inDefinedTermSet: `${SITE}/en/glossary`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en/` },
        { "@type": "ListItem", position: 2, name: "Poker Glossary", item: `${SITE}/en/glossary` },
      ],
    },
  ];

  return (
    <HubPage title="Glossary" locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlossaryEn />
    </HubPage>
  );
}
