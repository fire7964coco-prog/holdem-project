import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClient from "./calculator-client";
import { CALCULATOR_FAQ } from "./faq";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  // ★2026-08-16 CTR 재조준: 28일 GSC에서 이 페이지가 받는 최대 쿼리는 「홀덤 spr」(138노출·9.7위)인데
  //   구 제목은 SPR이 맨 뒤에 묻혀 있었고 45자라 SERP에서 잘렸다. 클릭은 3개 쿼리 합계 0이었다.
  //   → 최대 노출 키워드를 앞으로 빼고 32자 안으로. 훅 수치는 SPRCalc의 「SPR < 4 = 커밋 구간」과 동일 기준.
  title: "SPR·팟오즈·ICM을 3초에 — 홀덤 계산기 8종 무료",
  description:
    "SPR이 4 미만이면 이미 커밋 구간입니다. 스택 ÷ 팟만 넣으면 바로 나옵니다. 아웃츠·팟오즈·ICM·M값·푸시폴드까지 홀덤 계산기 8종 무료.",
  alternates: {
    canonical: `${SITE}/calculator`,
    languages: {
      "ko-KR": `${SITE}/calculator`,
      "en-US": `${SITE}/en/calculator`,
    },
  },
  openGraph: {
    title: "ICM 계산기·홀덤 확률 계산기 — 홀덤 계산 8종 올인원",
    description:
      "아웃츠·팟오즈·족보 판별·스타팅핸드·SPR·토너먼트 M값·ICM·푸시폴드 — 실전에서 필요한 홀덤 계산을 한 곳에서 무료로.",
    url: `${SITE}/calculator`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "홀덤 확률 계산기 · ICM 계산기",
      url: `${SITE}/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ko",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      featureList: [
        "아웃츠 계산기",
        "팟 오즈 · 임플라이드 오즈 계산기",
        "핸드 족보 판별기",
        "스타팅 핸드 강도 분석",
        "SPR(스택-팟 비율) 계산기",
        "토너먼트 M값 계산기",
        "ICM(독립 칩 모델) 계산기",
      ],
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "홀덤 계산기", item: `${SITE}/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
      <HubPage title="계산기">
        <CalculatorClient />
      </HubPage>
    </>
  );
}
