import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_ID } from "./dict";
import { HAND_CHART_FAQ_ID } from "./faq";

/** `/id/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_ID.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_ID.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/id/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/id/hand-chart`,
    siteName: "HoldemMaster",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Chart Starting Hand Poker per Posisi" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_ID.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/id/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "id",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Semua 169 hand preflop",
        "Open range untuk UTG, HJ, CO, Button, dan SB",
        "Ketuk satu posisi untuk menyorot range-nya saja",
        "Warna hand sesuai posisi open (UTG sampai SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_ID.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE}/id` },
        { "@type": "ListItem", position: 2, name: "Chart Starting Hand", item: `${SITE}/id/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Chart Starting Hand" locale="id">
        <HandChartTool dict={HAND_CHART_DICT_ID} faq={HAND_CHART_FAQ_ID} />
      </HubPage>
    </>
  );
}
