import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClient from "./calculator-client";
import { CALCULATOR_FAQ } from "./faq";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  // ★2026-08-16 CTR 재조준: 최대 쿼리 「홀덤 spr」을 앞으로 뺐다(구 제목은 SPR이 맨 뒤·45자라 SERP 잘림).
  // ★2026-08-29 SPR 양보 — 위 조치를 되돌리는 게 아니라 «같은 날 생긴 충돌»을 푸는 것이다.
  //   08-16 회차는 이 제목을 SPR로 재조준하면서 **같은 날** 「SPR 전용 글이 없다」는 판정으로
  //   `/blog/holdem-spr`을 발행했다. 두 조치가 같은 쿼리를 겨눠 카니발이 됐다:
  //   「홀덤 spr」 쿼리 단위 115노출인데 페이지 단위 합은 127(여기 64 + blog 63) = **12건 동시 노출**,
  //   그리고 **양쪽 다 클릭 0**. 라이브 SERP 실측(모바일·2410·ko)에서 blog가 7위, 이 페이지는 top20 밖 —
  //   [[seo-tool-vs-blog-cannibalization]]의 「블로그가 이기고 있나」 기준상 **글이 이긴다.**
  //   → SPR 축은 blog에 넘기고, 여기는 실측상 진짜 강점인 ICM으로 간다
  //     (「홀덤 icm 계산기」 68노출 r6.3 클릭 2 · icm 계열이 이 페이지 클릭 5 중 3을 만든다.
  //      확률·승률 계산기 계열은 전부 r15~22의 2페이지라 훅으로 세울 근거가 없다).
  //   🔴 8종 나열의 SPR은 남긴다 — 탭은 실재하고, 카니발 신호는 «제목·첫 문장»이지 나열 항목이 아니다.
  title: "ICM·팟오즈·아웃츠를 3초에 — 홀덤 계산기 8종 무료",
  description:
    // ⚠ 「콜인지 폴드인지 나온다」로 쓰지 마라 — ICMCalc가 출력하는 것은 **ICM 가치(원)와 ICM %**이지
    //   액션 판정이 아니다(주력 컬럼 = `{equity}원`, calculator-client.tsx:988).
    // 🔴 아래 title·description을 고치면 `calculator-client.tsx`의 <SEO> 두 줄도 **같이** 고쳐라 —
    //   그쪽이 렌더 후 이 값을 덮어쓴다(components/seo.tsx:79-92).
    // 🪶 앞 훅은 구 클라이언트 desc(07-09~)에 있던 문장을 살린 것이다 — 서버/클라이언트를 하나로
    //   합치면서 버릴 뻔했는데, §17 「호기심 훅을 앞에」에 가장 잘 맞는 카피라 이쪽을 정본으로 삼았다.
    "칩 리더인데 왜 그 콜이 손해일까? 내 칩의 진짜 상금 가치가 3초에 나옵니다. ICM·아웃츠·팟오즈·SPR·M값·푸시폴드까지 홀덤 계산기 8종 무료.",
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
        // ★2026-08-29 추가 — 여기가 7개인데 title·description·본문은 전부 「8종」이었다(자기모순).
        //   `TABS`(calculator-client.tsx)는 8개다. 탭을 늘리면 이 배열도 같이 늘려라.
        "푸시/폴드 내시 균형 차트",
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
