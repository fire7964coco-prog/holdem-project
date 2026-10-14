import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_AR } from "./dict";
import { HAND_CHART_FAQ_AR } from "./faq";

/** `/ar/hand-chart` — ★2026-10-14 신설(tool-lanes 🅲 회차 1 · vi·tr 방식 · docs/keyword-bank/ar-tools.md · «الأيدي الافتتاحية» 의도의 주인).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts(지역 없는 «ar»). */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_AR.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_AR.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/ar/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: "مخطط الأيدي الافتتاحية — HoldemMaster",
    description: DESCRIPTION,
    url: `${SITE}/ar/hand-chart`,
    siteName: "HoldemMaster",
    locale: "ar_AR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — مخطط الأيدي الافتتاحية" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_AR.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/ar/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ar",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "كل الأيدي الافتتاحية الـ169 قبل الفلوب",
        "نطاقات الفتح لـUTG وHJ وCO وBTN وSB",
        "اضغط على مركز لتُبرز نطاقه وحده",
        "الأيدي ملوّنة حسب مركز الفتح (من UTG إلى SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_AR.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: "مخطط الأيدي الافتتاحية", item: `${SITE}/ar/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="مخطط الأيدي الافتتاحية" locale="ar">
        <HandChartTool dict={HAND_CHART_DICT_AR} faq={HAND_CHART_FAQ_AR} rtl />
      </HubPage>
    </>
  );
}
