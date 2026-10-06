import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_TR } from "./dict";
import { HAND_CHART_FAQ_TR } from "./faq";

/** `/tr/hand-chart` — ★2026-10-06 신설(tr 클러스터 회차 2 · docs/tr-cluster-plan.md §4 · «başlangıç elleri» 의도의 주인 §3).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_TR.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_TR.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/tr/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/tr/hand-chart`,
    siteName: "HoldemMaster",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Starting Hand Chart" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_TR.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/tr/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "tr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "169 preflop elin tamamı",
        "UTG, HJ, CO, Button ve SB için açılış range'leri",
        "Bir pozisyona dokununca yalnızca o range öne çıkar",
        "Eller açılış pozisyonuna göre renklendirilmiş (UTG'den SB'ye)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_TR.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: `${SITE}/tr` },
        { "@type": "ListItem", position: 2, name: "El Tablosu", item: `${SITE}/tr/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="El Tablosu" locale="tr">
        <HandChartTool dict={HAND_CHART_DICT_TR} faq={HAND_CHART_FAQ_TR} />
      </HubPage>
    </>
  );
}
