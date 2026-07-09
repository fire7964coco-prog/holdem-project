import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClient from "./calculator-client";
import { CALCULATOR_FAQ } from "./faq";

export const metadata: Metadata = {
  title: "ICM 계산기·홀덤 확률 계산기 — 아웃츠·팟오즈·SPR·M값 무료",
  description:
    "칩 리더인데 왜 그 콜이 손해일까? ICM 계산기로 토너먼트 칩의 진짜 상금 가치를 즉시 확인하세요. 아웃츠·팟오즈·족보·스타팅핸드·SPR·M값까지 홀덤 계산기 7종 무료.",
  alternates: {
    canonical: `${SITE}/calculator`,
    languages: {
      "ko-KR": `${SITE}/calculator`,
      "en-US": `${SITE}/en/calculator`,
    },
  },
  openGraph: {
    title: "ICM 계산기·홀덤 확률 계산기 — 홀덤 계산 7종 올인원",
    description:
      "아웃츠·팟오즈·족보 판별·스타팅핸드·SPR·토너먼트 M값·ICM — 실전에서 필요한 홀덤 계산을 한 곳에서 무료로.",
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
      <CalculatorClient />
    </>
  );
}
