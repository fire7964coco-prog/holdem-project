import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import QuizClient from "./quiz-client";
import HubPage from "@/components/hub-page";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
//   제목은 클라이언트가 쓰던 문구에서 "| 홀덤마스터"만 뗀다 — 루트 layout의
//   title.template("%s | 홀덤마스터")이 자동으로 붙이므로 그대로 두면 두 번 붙는다.
export const metadata: Metadata = {
  title: "홀덤 족보 퀴즈 — 7장에서 최강 패를 맞혀라!",
  description:
    "홀덤 족보 퀴즈! 7장 카드에서 베스트 5장 족보를 맞혀보세요. 10문제로 나의 족보 실력을 테스트하고 결과를 공유하세요.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/quiz` },
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
      name: "홀덤 족보 퀴즈",
      description: "홀덤 족보 퀴즈! 7장 카드에서 베스트 5장 족보를 맞혀보세요. 10문제로 나의 족보 실력을 테스트하고 결과를 공유하세요.",
      url: `${SITE}/quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ko",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      featureList: [
        "7장에서 베스트 5장 고르기 10문제",
        "문항별 정답 해설",
        "점수 결과 공유"
      ],
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "홀덤 족보 퀴즈", item: `${SITE}/quiz` },
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
      <HubPage title="퀴즈">
        <QuizClient />
      </HubPage>
    </>
  );
}
