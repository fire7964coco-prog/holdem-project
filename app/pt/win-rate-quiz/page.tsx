import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientPt from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 포르투갈어(pt-BR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2076 Brazil(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | poker simulator(영문)     | 110  |
 *   | poker trainer(영문)       | 90   |
 *   | simulador de poker        | 70   |  ← 머리어(12개월 40~90)
 *   | treinar poker             | 40   |  ← 의도 보강어(제목 «para treinar»)
 *   | simulador poker           | 30   |
 *   | equity poker · poker equity | 20 |
 *   | simulador de poker online · gratis · texas holdem · treino de poker · treinador de poker · quiz de poker | 각 10 |
 *   | simulador de mãos de poker · simulador equity poker · simulador holdem | 데이터 없음 |
 *   SERP «simulador de poker»(mobile · pt · Brazil): 게임(247freepoker · megajogos · zynga · Steam) + reddit «bom simulador gratuito?» +
 *     PokerNews BR 계산기 4위 + pokertrainer.se(훈련형) — 의도 혼재(놀이/훈련), 훈련형 도구 자리는 비어 있다.
 *   ⇒ 제목 머리 = «Simulador de poker para treinar»(머리어 + 훈련 의도로 게임 SERP와 구분) · «equity»는 설명·본문.
 *   «Calculadora»·«odds»는 /pt/calculator 소유라 제목 머리에 쓰지 않는다(docs/keyword-bank/pt-calculator.md에서 «simulador de poker 70 = 게임 의도·미채택» — 계산기 쪽 판정).
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §pt.
 * OG locale pt_BR · inLanguage pt-BR · priceCurrency USD — /pt/calculator와 같은 판단.
 */
const TITLE = "Simulador de poker para treinar: onde você devia ter foldado? | HoldemMaster";
const DESCRIPTION =
  "Jogue uma mão 6-max ou 9-max sem ver as cartas dos adversários, como na mesa real: sua equity em cada street, as pot odds desde o flop e onde foldar.";
const OG_DESCRIPTION =
  "As cartas deles ficam escondidas, como no poker de verdade. Acompanhe sua equity street a street e as pot odds desde o flop, e revise onde devia ter foldado.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/pt/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/pt/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "pt_BR",
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
      name: "Simulador de poker para treinar",
      description: DESCRIPTION,
      url: `${SITE}/pt/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pt-BR",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Jogue uma mão em mesa 6-max ou de 9 lugares (2–6 jogadores) sem ver as cartas dos adversários, street a street",
        "Sua equity em cada street",
        "Pot odds necessárias a partir do flop",
        "Revisão pós-mão: onde era a hora certa de foldar",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/pt` },
        { "@type": "ListItem", position: 2, name: "Simulador de poker", item: `${SITE}/pt/win-rate-quiz` },
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
      <HubPage title="Simulador" locale="pt">
        <WinRateQuizClientPt />
      </HubPage>
    </>
  );
}
