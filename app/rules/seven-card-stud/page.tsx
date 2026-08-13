import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesSevenCardStudClient from "./rules-seven-card-stud-client";
import HubPage from "@/components/hub-page";
import { FAQ_ITEMS } from "./faq-data";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
export const metadata: Metadata = {
  title: "세븐 카드 스터드 포커 규칙 완벽 가이드 — 7장 포커 하는법",
  description:
    "⚡세븐 카드 스터드⚡ 포커 기초 규칙 완벽 가이드. 앤티·브링인부터 서드~세븐스 스트리트 5단계 베팅, 업카드 전략, 라이브 카드 개념까지 한 페이지에서 마스터.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/rules/seven-card-stud` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * 🔴 2026-08-13: 원래 클라이언트가 만들어 `<SEO schema={jsonLd}>`로 넘겼는데
 *   `components/seo.tsx`는 `schema`를 구조분해에서 받지도 않는다 — 죽은 코드였다.
 * 🔴 같은 날 **FAQ 답변이 서버 HTML에 한 글자도 없던 것**도 함께 고쳤다(아코디언 조건부 렌더).
 *   답변이 없는 채로 FAQPage를 붙였다면 «페이지에 없는 답변»을 주장하는 셈이었다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "세븐 카드 스터드 포커 규칙 완벽 가이드 — 7장 포커 하는법",
      description: "세븐 카드 스터드 포커 기초 규칙 가이드. 앤티·브링인부터 서드~세븐스 스트리트 5단계 베팅, 업카드 전략, 라이브 카드 개념까지 정리했습니다.",
      author: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      mainEntityOfPage: `${SITE}/rules/seven-card-stud`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "게임 방법", item: `${SITE}/rules` },
        { "@type": "ListItem", position: 3, name: "세븐 카드 스터드 규칙", item: `${SITE}/rules/seven-card-stud` },
      ],
    },
  ];

  return (
    <HubPage title="규칙">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RulesSevenCardStudClient />
    </HubPage>
  );
}
