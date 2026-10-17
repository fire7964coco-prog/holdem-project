import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientHi from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 힌디어(hi-IN)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr·id·ms·vi·tr). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2356 India(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | poker game                | 22,200 | ← 참고(게임 의도 · 제목·메타 제외)
 *   | poker practice online     | 210  | ← 🪶 26-04~08 스파이크(170→480) · 그 전 50~110 · 게임 의도 섞임 → 제목 미채택
 *   | poker simulator           | 170  | ← 머리어 · 12개월 110~210 안정
 *   | poker equity calculator   | 110  | ← /hi/calculator 몫
 *   | poker practice            | 90   | ← 훈련 의도 · 12개월 50~140 · 제목 «से poker practice»
 *   | poker kaise khelte hain   | 70   | ← 참고(규칙 의도 · 이 페이지 몫 아님)
 *   | poker trainer · poker training 50 · poker quiz 40 · poker equity · poker simulator online · pot odds 20 · texas holdem simulator 10
 *   | पोकर सिम्युलेटर · पोकर सिमुलेटर · पोकर अभ्यास · पोकर सीखें · poker sikhe · poker seekhe | 데이터 없음 |
 *   SERP «poker simulator»(mobile · hi · India): 영어 게임 판 — 247games·247freepoker×2·MSN Zone·WaPo Arkadium·Arkadium·Google Play(게임 7) +
 *     IEEE 논문 1 + reddit «practise against ai» 1 · 힌디어 페이지 0 · 훈련형 0.
 *   ⇒ 제목 머리 = 영어 «Poker Simulator»(데바나가리 도구구 전멸 — 계산기 «머리어 영어 유지» 판정과 같음) ·
 *     훈련 의도 = «poker practice»(90 · 실측) · 질문 꼬리는 데바나가리(본문이 힌디어 원문이라는 신호).
 *   «Calculator·odds»는 /hi/calculator 소유라 제목에 쓰지 않는다(그쪽 메타·사전에 «simulator» 0회 · 10-13 grep).
 *   🔴 «poker game»(게임) · 돈·베팅 권유로 읽히는 말은 제목·메타에 넣지 않는다.
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §hi.
 * OG locale hi_IN · inLanguage hi · priceCurrency USD — /hi/calculator와 같은 판단.
 */
const TITLE = "Poker Simulator से poker practice: कहाँ fold करना था? | HoldemMaster";
const DESCRIPTION =
  "विरोधियों के कार्ड देखे बिना, असली टेबल की तरह 6-max या 9-max हैंड खेलें: हर street पर आपकी equity, flop से pot odds, और आपको कहाँ fold करना चाहिए था।";
const OG_DESCRIPTION =
  "विरोधियों के कार्ड हमेशा छिपे, असली पोकर की तरह। हर street पर अपनी equity और flop से pot odds देखें, फिर समीक्षा करें कि कहाँ fold करना चाहिए था।";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/hi/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/hi/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // twitter를 안 주면 루트 layout의 한국어가 나간다 · images는 상속되지 않는다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

/**
 * JSON-LD는 서버에서. FAQPage는 붙이지 않는다 — 화면에 문답이 없다(EN과 같음).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Poker Simulator",
      description: DESCRIPTION,
      url: `${SITE}/hi/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "hi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "विरोधियों के कार्ड देखे बिना 6-max या 9 खिलाड़ियों की टेबल पर (flop पर 2–6 खिलाड़ी) street दर street एक हैंड खेलें",
        "हर street पर आपकी equity",
        "Flop से ज़रूरी pot odds",
        "हैंड के बाद समीक्षा: आपको कहाँ fold करना चाहिए था",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "होम", item: `${SITE}/hi` },
        { "@type": "ListItem", position: 2, name: "Poker Simulator", item: `${SITE}/hi/win-rate-quiz` },
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
      <HubPage title="Poker Simulator" locale="hi">
        <WinRateQuizClientHi />
      </HubPage>
    </>
  );
}
