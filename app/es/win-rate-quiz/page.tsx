import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientEs from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 스페인어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`. 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-12 · language es
 *   | 키워드                        | ES(2724) | MX(2484) |
 *   | simulador de poker           | 140      | 90       |
 *   | simulador poker              | 140      | 30       |
 *   | probabilidades poker         | 320      | 110      |  ← /es/calculator 축(카니발 회피 · 제목 머리 금지)
 *   | equity poker                 | 70       | 20       |
 *   | entrenador de poker          | 10       | 10       |
 *   | simulador de manos de poker  | 10       | 10       |
 *   | simulador texas holdem       | 10       | 10       |
 *   | simulador de equity poker    | 데이터 없음 | 데이터 없음 |
 *   ⇒ 제목 머리 = «Simulador de poker»(두 나라 모두 시뮬레이터 축 최대) + «equity»(H1 부제·본문 앵커).
 *   «Calculadora»·«probabilidades»는 /es/calculator 소유라 제목 머리에 쓰지 않는다.
 * OG locale es_ES · inLanguage es · priceCurrency USD — /es/calculator와 같은 판단.
 */
const TITLE = "Simulador de poker con equity: ¿dónde tocaba foldear? | HoldemMaster";
const DESCRIPTION =
  "Juega una mano 6-max sin ver las cartas rivales, como en una mesa real: tu equity en cada calle, las pot odds desde el flop y, al final, dónde tocaba foldear.";
const OG_DESCRIPTION =
  "Sus cartas quedan ocultas, como en el poker real. Sigue tu equity calle a calle y tus pot odds desde el flop, y repasa dónde tenías que foldear.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/es/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/es/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "es_ES",
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
      name: "Simulador de poker con equity",
      description: DESCRIPTION,
      url: `${SITE}/es/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "es",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Juega una mano 6-max o de mesa de 9 (2–6 jugadores) sin ver las cartas rivales, calle a calle",
        "Tu equity en cada calle",
        "Pot odds necesarias desde el flop",
        "Repaso tras la mano del momento correcto para foldear",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/es` },
        { "@type": "ListItem", position: 2, name: "Simulador de poker", item: `${SITE}/es/win-rate-quiz` },
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
      <HubPage title="Simulador" locale="es">
        <WinRateQuizClientEs />
      </HubPage>
    </>
  );
}
