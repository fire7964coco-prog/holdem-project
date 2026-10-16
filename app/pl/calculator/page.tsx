import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_PL } from "./dict";
import { CALCULATOR_FAQ_PL } from "./faq";
const TITLE = `${CALC_DICT_PL.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_PL.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/pl/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Kalkulator pokerowy — HoldemMaster",
    description:
      "Equity, deale ICM, pot odds, outy, SPR, M i push/fold: dziewięć bezpłatnych kalkulatorów Texas Hold’em.",
    url: `${SITE}/pl/calculator`,
    siteName: "HoldemMaster",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Kalkulator pokerowy" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Kalkulator pokerowy i ICM",
      url: `${SITE}/pl/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pl",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Kalkulator equity (hand vs hand)",
        "Kalkulator outów",
        "Kalkulator pot odds i implied odds",
        "Ocena układu",
        "Siła rąk startowych",
        "Kalkulator SPR (stack-to-pot ratio)",
        "Kalkulator M w turniejach",
        "Kalkulator ICM (Independent Chip Model)",
        "Tabela Nasha push/fold",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE}/pl` },
        { "@type": "ListItem", position: 2, name: "Kalkulator pokerowy", item: `${SITE}/pl/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_PL.map((f) => ({
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
      <HubPage title="Kalkulator pokerowy" locale="pl">
        <CalculatorTool locale="pl" dict={CALC_DICT_PL} faq={CALCULATOR_FAQ_PL} />
      </HubPage>
    </>
  );
}
