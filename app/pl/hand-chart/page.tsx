import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_PL } from "./dict";
import { HAND_CHART_FAQ_PL } from "./faq";
const TITLE = `${HAND_CHART_DICT_PL.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_PL.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/pl/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/pl/hand-chart`,
    siteName: "HoldemMaster",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Ręce startowe poker" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_PL.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/pl/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pl",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Wszystkie 169 rąk preflop",
        "Zakresy otwarcia dla UTG, HJ, CO, BTN i SB",
        "Wybierz pozycję, aby podświetlić jej zakres",
        "Ręce oznaczone kolorami według pozycji otwarcia (od UTG do SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_PL.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE}/pl` },
        { "@type": "ListItem", position: 2, name: "Ręce startowe poker", item: `${SITE}/pl/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Ręce startowe poker" locale="pl">
        <HandChartTool dict={HAND_CHART_DICT_PL} faq={HAND_CHART_FAQ_PL} />
      </HubPage>
    </>
  );
}
