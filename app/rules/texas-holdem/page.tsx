import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesTexasHoldemClient from "./rules-texas-holdem-client";
import HubPage from "@/components/hub-page";
import { FAQ_ITEMS } from "./faq-data";

// 카니발 방지: /blog/holdem-rules 필라가 "홀덤 룰" 키워드 소유 → 이 도구는 noindex.
// ★2026-08-02 canonical 추가: 루트 layout의 홈 canonical을 물려받아 **noindex인데 홈을
//   표준으로 지목**하고 있었다(모순 신호). noindex를 확실히 전달하려면 자기 자신을 가리켜야 한다.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/rules/texas-holdem` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * 🔴 2026-08-13: 원래 클라이언트가 만들어 `<SEO schema={jsonLd}>`로 넘겼는데
 *   `components/seo.tsx`는 `schema`를 구조분해에서 받지도 않는다 — 죽은 코드였다.
 * 🔴 같은 날 **FAQ 답변이 서버 HTML에 한 글자도 없던 것**도 함께 고쳤다(아코디언 조건부 렌더).
 *   답변이 없는 채로 FAQPage를 붙였다면 «페이지에 없는 답변»을 주장하는 셈이었다.
 * ⚠ 이 페이지는 **noindex**다(필라 `/blog/holdem-rules`가 「홀덤 룰」을 소유). 구글 리치결과 목적이 아니라
 *   LLM·RAG 파싱과 페이지 품질 목적으로 넣는다 — `/hands`와 같은 판단이다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "텍사스 홀덤 포커 규칙 완벽 가이드",
      description: "텍사스 홀덤 기초 규칙을 처음 배우는 사람도 이해할 수 있도록 정리한 가이드. 블라인드·프리플랍·플랍·턴·리버·쇼다운 6단계, 베팅 옵션, 족보 순위, FAQ를 한 페이지에 담았습니다.",
      author: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      mainEntityOfPage: `${SITE}/rules/texas-holdem`,
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
        { "@type": "ListItem", position: 3, name: "텍사스 홀덤 규칙", item: `${SITE}/rules/texas-holdem` },
      ],
    },
  ];

  return (
    <HubPage title="규칙">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RulesTexasHoldemClient />
    </HubPage>
  );
}
