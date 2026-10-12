import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientDe from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 독일어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx` · breadcrumb 꼴 = `app/de/calculator/page.tsx`(Start → `${SITE}/de`).
 * 제목 머리 = 「Poker-Simulator」(DFS DE/de 2026-10-12: poker simulator 390 · poker trainer 140 · poker equity 70).
 *   🔴 「Poker-Rechner」/「Poker-Odds-Rechner」는 /de/calculator 소유 — 여기 제목 머리에 쓰지 않는다.
 * FAQ 없음(EN과 같음 — 화면에 없는 FAQ 스키마 금지).
 */
const TITLE = "Poker-Simulator: Wann hättest du folden sollen? | HoldemMaster";
const DESCRIPTION =
  "Kostenloser Poker-Simulator: Spiel eine 6-max-Hand blind, sieh deine Equity in jeder Setzrunde und ab dem Flop die Pot Odds – und wo Folden richtig war.";
const OG_DESCRIPTION =
  "Die Gegnerkarten bleiben verdeckt wie beim echten Poker. Verfolge deine Equity und ab dem Flop die Pot Odds – und sieh danach, wo du hättest folden sollen.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/de/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/de/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "de_DE",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Poker-Simulator",
      description: DESCRIPTION,
      url: `${SITE}/de/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "de",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Eine 6-max- oder 9-max-Hand blind spielen (2–6 Spieler), Setzrunde für Setzrunde",
        "Equity in jeder Setzrunde",
        "Benötigte Pot Odds ab dem Flop",
        "Analyse nach der Hand: der richtige Zeitpunkt zum Folden",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: "Poker-Simulator", item: `${SITE}/de/win-rate-quiz` },
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
      <HubPage title="Poker-Simulator" locale="de">
        <WinRateQuizClientDe />
      </HubPage>
    </>
  );
}
