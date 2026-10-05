import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_ZH_HANT } from "./dict";
import { HAND_CHART_FAQ_ZH_HANT } from "./faq";

/** `/zh-hant/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts.
 *  OG locale = zh_TW · inLanguage = zh-Hant (calculator 랜딩과 동일 — 고치지 마라). */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_ZH_HANT.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_ZH_HANT.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/zh-hant/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/zh-hant/hand-chart`,
    siteName: "HoldemMaster",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — 德州撲克起手牌表" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_ZH_HANT.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/zh-hant/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hant",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "全部169種翻前起手牌",
        "UTG、HJ、CO、按鈕位與小盲位的開池範圍",
        "點擊位置只亮出該位置的範圍",
        "依可開池的位置（UTG 至 SB）將起手牌分色顯示",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_ZH_HANT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: `${SITE}/zh-hant` },
        { "@type": "ListItem", position: 2, name: "起手牌表", item: `${SITE}/zh-hant/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="起手牌表" locale="zh-hant">
        <HandChartTool dict={HAND_CHART_DICT_ZH_HANT} faq={HAND_CHART_FAQ_ZH_HANT} />
      </HubPage>
    </>
  );
}
