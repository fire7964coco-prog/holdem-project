import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_MS } from "./dict";
import { HAND_CHART_FAQ_MS } from "./faq";

/** `/ms/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_MS.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_MS.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/ms/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/ms/hand-chart`,
    siteName: "HoldemMaster",
    locale: "ms_MY",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Starting Hand Chart" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_MS.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/ms/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ms",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Kesemua 169 tangan preflop",
        "Open range untuk UTG, HJ, CO, Button dan SB",
        "Ketik satu posisi untuk menyerlahkan range itu sahaja",
        "Tangan diwarnakan mengikut posisi open (UTG hingga SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_MS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Laman utama", item: `${SITE}/ms` },
        { "@type": "ListItem", position: 2, name: "Carta Tangan", item: `${SITE}/ms/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Carta Tangan" locale="ms">
        <HandChartTool dict={HAND_CHART_DICT_MS} faq={HAND_CHART_FAQ_MS} />
      </HubPage>
    </>
  );
}
