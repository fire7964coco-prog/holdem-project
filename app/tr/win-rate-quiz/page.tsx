import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientTr from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 터키어(tr-TR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr·id·ms·vi). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2792 Türkiye(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | poker nasıl oynanır       | 5.400 |  ← 참고(규칙 의도 · 이 페이지 몫 아님)
 *   | poker oyunu               | 1.600 |  ← 참고(게임 의도 · 제목·메타 제외)
 *   | poker öğren · poker öğrenme | 50  |  ← 같은 군(12개월 시계열 동일 · 40~70) · 제목 «ile poker öğren»
 *   | poker simulator           | 30   |  ← 머리어 · «simulator poker»와 12개월 시계열 완전 동일(같은 군 · 20~50)
 *   | poker trainer · poker training · poker equity · pot odds · poker quiz · texas holdem simulator · poker simulator online | 각 10 |
 *   | poker simülatörü · poker simülasyonu · poker simulatoru · poker antrenman(ı) · poker pratik · poker alıştırma | 데이터 없음 |
 *   SERP «poker simulator»(mobile · tr · Türkiye): 영어 글로벌 판 — 훈련형 3(pokertrainer.se 퀴즈 · religionandstory · PokerStars Learn) +
 *     계산기 2(tightpoker · beatthefish) + 게임 1(funnygames) + AI 챗 1(shapes.inc) · 터키어 페이지 0.
 *   ⇒ 제목 머리 = 영어 «Poker Simulator»(터키어 «simülatör»형 전멸 · vi와 같은 판단) · 훈련 의도 = «poker öğren»(50 · 실측) ·
 *     «equity»는 설명·본문.
 *   «Hesaplayıcı»·«pot oranı hesaplama»는 /tr/calculator 소유라 제목에 쓰지 않는다(그쪽 메타·사전에 «simulator» 0회 · 10-13 grep).
 *   🔴 «poker oyunu»(게임) · 돈·베팅 권유로 읽히는 말은 제목·메타에 넣지 않는다.
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §tr.
 * OG locale tr_TR · inLanguage tr · priceCurrency USD — /tr/calculator와 같은 판단.
 */
const TITLE = "Poker Simulator ile poker öğren: nerede fold etmeliydin? | HoldemMaster";
const DESCRIPTION =
  "Rakip kartlarını görmeden, gerçek masadaki gibi 6-max veya 9-max bir el oyna: street street equity'n, flop'tan itibaren pot oranı, nerede fold etmen gerektiği.";
const OG_DESCRIPTION =
  "Rakip kartları hep kapalı, gerçek pokerdeki gibi. Equity'ni street street, pot oranını flop'tan itibaren izle; sonra nerede fold etmen gerektiğini incele.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/tr/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/tr/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "tr_TR",
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
      url: `${SITE}/tr/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "tr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Rakip kartlarını görmeden 6-max ya da 9 kişilik masada (flop'ta 2–6 oyuncu) street street bir el oyna",
        "Her street'te equity'n",
        "Flop'tan itibaren gereken pot oranı",
        "El sonrası inceleme: nerede fold etmeliydin",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: `${SITE}/tr` },
        { "@type": "ListItem", position: 2, name: "Poker Simulator", item: `${SITE}/tr/win-rate-quiz` },
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
      <HubPage title="Poker Simulator" locale="tr">
        <WinRateQuizClientTr />
      </HubPage>
    </>
  );
}
