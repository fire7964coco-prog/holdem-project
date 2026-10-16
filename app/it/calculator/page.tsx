import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_IT } from "./dict";
import { CALCULATOR_FAQ_IT } from "./faq";
const TITLE = `${CALC_DICT_IT.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_IT.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/it/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Calcolatore poker — HoldemMaster",
    description:
      "Equity tra mani, accordi ICM, pot odds, outs, SPR, valore M e push/fold: nove calcolatori gratuiti per il Texas Hold'em.",
    url: `${SITE}/it/calculator`,
    siteName: "HoldemMaster",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Calcolatore poker" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calcolatore poker e ICM",
      url: `${SITE}/it/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "it",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Calcolatore di equity (mano contro mano)",
        "Calcolatore di outs",
        "Calcolatore di pot odds e implied odds",
        "Valutazione della mano",
        "Forza delle mani iniziali",
        "Calcolatore SPR (stack-to-pot ratio)",
        "Calcolatore del valore M nei tornei",
        "Calcolatore ICM (Independent Chip Model)",
        "Tabella Nash push/fold",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/it` },
        { "@type": "ListItem", position: 2, name: "Calcolatore poker", item: `${SITE}/it/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_IT.map((f) => ({
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
      <HubPage title="Calcolatore poker" locale="it">
        <CalculatorTool locale="it" dict={CALC_DICT_IT} faq={CALCULATOR_FAQ_IT} />
      </HubPage>
    </>
  );
}
