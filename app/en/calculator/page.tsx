import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorClientEn from "./calculator-client";
import { CALCULATOR_FAQ_EN } from "./faq";

export const metadata: Metadata = {
  title: "Poker Odds Calculator — Outs, Pot Odds, Hand Rank, SPR & ICM",
  description:
    "Free Texas Hold'em calculator: outs & draw odds, pot odds, hand evaluator, starting hand strength, SPR, tournament M value, and ICM — 7 tools in one.",
  alternates: {
    canonical: `${SITE}/en/calculator`,
    languages: {
      "ko-KR": `${SITE}/calculator`,
      "en-US": `${SITE}/en/calculator`,
    },
  },
  openGraph: {
    title: "Poker Odds Calculator — HoldemMaster",
    description:
      "Outs, pot odds, hand rank, starting hands, SPR, M value, and ICM — every Hold'em number in one place.",
    url: `${SITE}/en/calculator`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Odds Calculator & ICM Calculator",
      url: `${SITE}/en/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Outs calculator",
        "Pot odds & implied odds calculator",
        "Hand evaluator",
        "Starting hand strength",
        "SPR (stack-to-pot ratio) calculator",
        "Tournament M value calculator",
        "ICM (Independent Chip Model) calculator",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: "Calculator", item: `${SITE}/en/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_EN.map((f) => ({
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
      <CalculatorClientEn />
    </>
  );
}
