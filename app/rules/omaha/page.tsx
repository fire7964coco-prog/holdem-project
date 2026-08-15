import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesOmahaClient from "./rules-omaha-client";
import HubPage from "@/components/hub-page";
import { FAQ_ITEMS } from "./faq-data";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
//   28일 「오마하 룰」 24노출 9.0위로 실제 수요를 받는 페이지다.
export const metadata: Metadata = {
  title: "4장 받고 2장만 씁니다 — 오마하 규칙과 팟리밋 베팅",
  description:
    "홀 카드가 4장이니 좋은 걸 골라 쓰면 된다고 생각하면 팟을 잃습니다. 반드시 2장만 쓰는 규칙, 팟 크기가 상한인 팟리밋 베팅, 홀덤과 갈리는 지점을 정리했습니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/rules/omaha` },
  // ★2026-08-16: og:title이 루트 기본값(「홀덤마스터 — 텍사스 홀덤 완벽 가이드」)으로 나가
  //   SNS 공유 시 페이지와 무관한 제목이 붙었다. 페이지 고유값으로 고정한다.
  openGraph: {
    title: "4장 받고 2장만 씁니다 — 오마하 규칙과 팟리밋 베팅",
    description: "홀 카드 4장 중 반드시 2장만 쓰는 오마하 핵심 규칙과, 팟 크기가 상한인 팟리밋 베팅을 홀덤과 비교해 정리했습니다.",
    url: `${SITE}/rules/omaha`,
    type: "article",
  },
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
      headline: "4장 받고 2장만 씁니다 — 오마하 규칙과 팟리밋 베팅",
      description: "홀 카드 4장 중 반드시 2장만 쓰는 오마하 핵심 규칙, 팟 크기가 상한인 팟리밋 베팅, 텍사스 홀덤과 갈리는 지점을 한 페이지에 정리했습니다.",
      author: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      mainEntityOfPage: `${SITE}/rules/omaha`,
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
        { "@type": "ListItem", position: 3, name: "오마하 포커 규칙", item: `${SITE}/rules/omaha` },
      ],
    },
  ];

  return (
    <HubPage title="규칙">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RulesOmahaClient />
    </HubPage>
  );
}
