import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_HI } from "./dict";
import { HAND_CHART_FAQ_HI } from "./faq";

/** `/hi/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_HI.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_HI.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/hi/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/hi/hand-chart`,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Starting Hand Chart" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_HI.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/hi/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "hi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "सभी 169 preflop हैंड",
        "UTG, HJ, CO, Button और SB की open range",
        "किसी position पर tap करें, सिर्फ़ वही range हाइलाइट होगी",
        "हर हैंड का रंग उसकी open position (UTG से SB) के हिसाब से",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_HI.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "होम", item: `${SITE}/hi` },
        { "@type": "ListItem", position: 2, name: "हैंड चार्ट", item: `${SITE}/hi/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="हैंड चार्ट" locale="hi">
        <HandChartTool dict={HAND_CHART_DICT_HI} faq={HAND_CHART_FAQ_HI} />
      </HubPage>
    </>
  );
}
