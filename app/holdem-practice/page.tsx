import type { Metadata } from "next";
import HoldemPracticeClient, { SEO_TITLE, SEO_DESC } from "./holdem-practice-client";
import HubPage from "@/components/hub-page";

const SITE = "https://www.holdemmaster.com";

/**
 * ★제목·description은 클라이언트의 `<SEO>`와 **같은 상수**를 쓴다.
 *   `<SEO>`가 런타임에 덮어쓰기 때문에, 문구를 따로 적으면 정적 HTML과 브라우저가 갈린다.
 */
export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESC,
  alternates: { canonical: `${SITE}/holdem-practice` },
  openGraph: {
    type: "website",
    url: `${SITE}/holdem-practice`,
    title: SEO_TITLE,
    description:
      "무료 연습 포인트 10,000점으로 AI 상대와 텍사스 홀덤을 연습하세요. 포지션·베팅 전략을 실전처럼 시험해보는 교육용 게임.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
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
      name: "홀덤 연습장 — 무료 텍사스 홀덤 연습 게임",
      description: "무료 연습 포인트 10,000점으로 AI 상대와 텍사스 홀덤을 연습하세요. 포지션·베팅 전략을 실전처럼 시험해보는 교육용 게임.",
      url: `${SITE}/holdem-practice`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ko",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      featureList: [
        "AI 상대 텍사스 홀덤 핸드 플레이",
        "무료 연습 포인트 10,000점",
        "포지션·베팅 결정 연습"
      ],
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "홀덤 연습장", item: `${SITE}/holdem-practice` },
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
      <HubPage title="연습장">
        <HoldemPracticeClient />
      </HubPage>
    </>
  );
}
