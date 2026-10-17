import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientFr from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 프랑스어(fr-FR)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2250 France(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | poker simulator(영문)     | 390  |
 *   | simulateur poker          | 170  |  ← 머리어(12개월 140~260)
 *   | équité poker              | 110  |
 *   | entrainement poker        | 90   |  ← 의도 보강어(제목 «pour s'entraîner»)
 *   | simulateur poker gratuit  | 50   |
 *   | simulateur de poker       | 30   |  ← «de»형은 1/6(계산기 뱅크 §1-A와 같은 패턴) → 무전치사
 *   SERP «simulateur poker»(mobile · fr · France): 계산기(pokerlistings ×2 · poktools · vmaths) + 훈련형(peppermill 블로그 · aipoker-simulator)
 *     + 게임(jeuxclic · playpager) — «상대 카드를 못 본 채 에퀴티 추정 → 복기» 자리는 비어 있다.
 *   ⇒ 제목 머리 = «Simulateur poker pour s'entraîner» · «équité»는 설명·본문.
 *   «Calculateur»·«cote»·«probabilité»는 /fr/calculator 소유라 제목에 쓰지 않는다(그쪽 메타·사전에 «simulateur» 0회 · 10-13 grep).
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §fr.
 * OG locale fr_FR · inLanguage fr · priceCurrency USD — /fr/calculator와 같은 판단.
 */
const TITLE = "Simulateur poker pour s'entraîner : quand fallait-il te coucher ? | HoldemMaster";
const DESCRIPTION =
  "Joue une main en 6-max ou à 9 sans voir les cartes adverses, comme à une vraie table : ton équité par street, les cotes du pot dès le flop et où te coucher.";
const OG_DESCRIPTION =
  "Leurs cartes restent cachées, comme au vrai poker. Suis ton équité street par street et les cotes du pot dès le flop, puis revois où tu aurais dû te coucher.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/fr/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/fr/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "fr_FR",
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
      name: "Simulateur poker pour s'entraîner",
      description: DESCRIPTION,
      url: `${SITE}/fr/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "fr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Joue une main à une table 6-max ou à 9 (2 à 6 joueurs) sans voir les cartes adverses, street par street",
        "Ton équité à chaque street",
        "Les cotes du pot nécessaires dès le flop",
        "Revue après la main : à quel moment il fallait se coucher",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
        { "@type": "ListItem", position: 2, name: "Simulateur poker", item: `${SITE}/fr/win-rate-quiz` },
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
      <HubPage title="Simulateur poker" locale="fr">
        <WinRateQuizClientFr />
      </HubPage>
    </>
  );
}
