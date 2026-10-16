import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientIt from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

// Current fr/ru structure; keyword research: docs/keyword-bank/it-tools.md section 4.
const TITLE = "Quiz poker: allena equity e decisioni | HoldemMaster";
const DESCRIPTION =
  "Allenamento poker con carte avversarie nascoste: stima la tua equity, scegli tra call e fold e rivedi ogni street con le pot odds.";
const OG_DESCRIPTION =
  "Stima la tua equity senza vedere le carte degli avversari. Poi rivedi la mano e scopri quando avresti dovuto foldare.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/it/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/it/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "it_IT",
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
      name: "Quiz poker",
      description: DESCRIPTION,
      url: `${SITE}/it/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "it",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Mani su tavoli 6-max o da 9 giocatori (2–6 al flop), con carte avversarie nascoste",
        "La tua equity a ogni street",
        "Pot odds ed equity minima richiesta dal flop in poi",
        "Analisi dopo la mano: quando avresti dovuto foldare",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/it` },
        { "@type": "ListItem", position: 2, name: "Quiz poker", item: `${SITE}/it/win-rate-quiz` },
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
      <HubPage title="Quiz poker" locale="it">
        <WinRateQuizClientIt />
      </HubPage>
    </>
  );
}
