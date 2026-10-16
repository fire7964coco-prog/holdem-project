import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientPl from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

// Italian structure; Polish head terms: docs/keyword-bank/pl-tools.md section 4.
const TITLE = "Quiz poker: trenuj equity i decyzje | HoldemMaster";
const DESCRIPTION =
  "Trening pokerowy bez znajomości kart rywali: oszacuj equity, wybierz sprawdzenie lub pas i analizuj kolejne street z pot odds od flopa.";
const OG_DESCRIPTION =
  "Oszacuj equity bez znajomości kart przeciwników. Przeanalizuj rozdanie i sprawdź, kiedy należało spasować.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/pl/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/pl/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "pl_PL",
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
      url: `${SITE}/pl/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pl",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Rozdania przy stołach 6-max lub 9-osobowych (2–6 graczy na flopie), z ukrytymi kartami przeciwników",
        "Twoje equity na każdej street",
        "Pot odds i potrzebne equity od flopa",
        "Analiza po rozdaniu: kiedy należało spasować",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE}/it` },
        { "@type": "ListItem", position: 2, name: "Quiz poker", item: `${SITE}/pl/win-rate-quiz` },
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
      <HubPage title="Quiz poker" locale="pl">
        <WinRateQuizClientPl />
      </HubPage>
    </>
  );
}
