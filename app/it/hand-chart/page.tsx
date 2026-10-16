import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_IT } from "./dict";
import { HAND_CHART_FAQ_IT } from "./faq";
const TITLE = `${HAND_CHART_DICT_IT.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_IT.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/it/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/it/hand-chart`,
    siteName: "HoldemMaster",
    locale: "it_IT",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Tabella delle mani iniziali" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_IT.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/it/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "it",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Tutte le 169 mani preflop",
        "Range di apertura per UTG, HJ, CO, BTN e SB",
        "Tocca una posizione per evidenziare il suo range",
        "Mani colorate per posizione di apertura (da UTG a SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_IT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/it` },
        { "@type": "ListItem", position: 2, name: "Tabella delle mani iniziali", item: `${SITE}/it/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Tabella delle mani iniziali" locale="it">
        <HandChartTool dict={HAND_CHART_DICT_IT} faq={HAND_CHART_FAQ_IT} />
      </HubPage>
    </>
  );
}
