import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesClient from "./rules-client";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  title: "포커 게임 종류별 규칙 — 텍사스 홀덤·오마하·세븐카드 스터드",
  description: "텍사스 홀덤, 오마하, 세븐카드 스터드 세 가지 포커 게임의 규칙을 한 곳에서 비교합니다. 각 게임의 기본부터 핵심 차이점까지 정리했습니다.",
  robots: { index: true, follow: true },
  // ★2026-08-02: alternates 미선언 → 루트 layout의 홈 canonical을 물려받고 있었다.
  alternates: { canonical: `${SITE}/rules` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * 🔴 2026-08-13: 원래 `rules-client.tsx`가 만들어 `<SEO schema={jsonLd}>`로 넘겼는데
 *   `components/seo.tsx`는 `schema`를 구조분해에서 받지도 않는다 — 죽은 코드였다.
 *
 * ⚠ `headline`을 **위 서버 metadata의 title에 맞췄다.** 구 코드의 headline은 클라이언트 SEO가
 *   쓰던 옛 문구(「포커 규칙 완벽 가이드 …」)라, 그대로 옮겼으면 구글이 보는 `<title>`과
 *   스키마 headline이 서로 다른 말을 하게 된다.
 * ⚠ 구 코드의 `dateModified: "2026-07-01"`은 **검증할 수 없어 옮기지 않았다.**
 *   틀린 날짜를 주장하는 것보다 주장하지 않는 편이 낫다(추적불가 > 거짓 초록).
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "포커 게임 종류별 규칙 — 텍사스 홀덤·오마하·세븐카드 스터드",
      description:
        "텍사스 홀덤, 오마하, 세븐카드 스터드 세 가지 포커 게임의 규칙을 한 곳에서 비교합니다. 각 게임의 기본부터 핵심 차이점까지 정리했습니다.",
      author: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
      mainEntityOfPage: `${SITE}/rules`,
      image: `${SITE}/images/rules-texas-holdem.webp`,
      keywords: "포커 규칙, 텍사스 홀덤 규칙, 오마하 포커, 세븐 카드 스터드, 포커 하는법, 포커 베팅, 포커 핸드 순위",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "게임 방법", item: `${SITE}/rules` },
      ],
    },
  ];

  return (
    <HubPage title="규칙">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RulesClient />
    </HubPage>
  );
}
