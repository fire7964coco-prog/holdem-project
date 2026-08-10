import type { Metadata } from "next";
import WinRateQuizClient from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_FAQ } from "./faq";
import QuizContent from "./_content";

const SITE = "https://www.holdemmaster.com";

export const metadata: Metadata = {
  title: "홀덤 승률 시뮬레이터 — 어디서 끊었어야 했는지 복기까지",
  description:
    "상대 패를 모르는 실전 그대로, 단계별 내 승률과 플랍부터의 팟오즈 필요 승률을 보여주고 마지막에 어디서 폴드했어야 하는지 복기해주는 홀덤 승률 시뮬레이터.",
  alternates: {
    canonical: `${SITE}/win-rate-quiz`,
    /**
     * ★2026-08-10 추가 — `/en/win-rate-quiz`는 처음부터 ko를 세트에 넣고 있었는데
     *   이쪽이 응답을 안 해서 **상호참조가 한쪽만 성립**했다. hreflang은 양쪽이
     *   서로를 가리켜야 유효하고, 어긋나면 구글은 세트를 통째로 무시한다.
     *   `scripts/check-hreflang.mjs`(같은 날 신설)가 첫 실행에서 잡았다.
     * ⚠ 값은 en판(app/en/win-rate-quiz/page.tsx)과 **글자 그대로 같아야** 한다.
     *   x-default가 en을 가리키는 것도 en판 선언 그대로다.
     */
    languages: {
      ko: `${SITE}/win-rate-quiz`,
      en: `${SITE}/en/win-rate-quiz`,
      "x-default": `${SITE}/en/win-rate-quiz`,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE}/win-rate-quiz`,
    title: "홀덤 승률 시뮬레이터 — 어디서 끊었어야 했는지 복기까지 | 홀덤마스터",
    description:
      "상대 패는 가린 채 단계별 내 승률과 플랍부터의 팟오즈를 보여주고, 끝나면 어디서 폴드했어야 하는지 복기해주는 홀덤 승률 시뮬레이터.",
    siteName: "홀덤마스터",
    locale: "ko_KR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
};

/**
 * 구조화 데이터 — `app/calculator/page.tsx`와 같은 @graph 구성.
 * ⚠️ FAQ는 `./faq`의 같은 배열을 본문(`_content.tsx`)에서도 렌더한다.
 *    스키마에만 있고 본문에 없는 정보는 LLM이 읽지 못한다(posting.mdc §스키마).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "홀덤 승률 시뮬레이터",
      url: `${SITE}/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ko",
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      featureList: [
        "6인 테이블 핸드 시뮬레이션",
        "스트리트별 내 승률 계산",
        "팟오즈 필요 승률 병기",
        "핸드 종료 후 폴드 시점 복기",
        "상대 액션 기반 레인지 추정",
      ],
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "승률 시뮬레이터", item: `${SITE}/win-rate-quiz` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: WIN_RATE_QUIZ_FAQ.map((f) => ({
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
      <HubPage title="승률 시뮬레이터">
        <WinRateQuizClient />
        {/* ★정적 본문은 **서버 컴포넌트로** 여기서 렌더한다.
            ① 클라이언트 번들에 실리지 않는다(순수 마크업이라 JS가 필요 없다)
            ② 정적 HTML에 그대로 들어간다 — 2026-08-06 이전엔 이 페이지의 정적 HTML이
               h1+부제뿐이라 사이트맵 priority 0.8로 색인을 밀면서도 받을 콘텐츠가 없었다
               (`/holdem-practice`가 같은 상태였다). 클라이언트 안으로 옮기지 말 것. */}
        <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto px-3 pb-8">
          <QuizContent />
        </div>
      </HubPage>
    </>
  );
}
