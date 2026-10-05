import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_ZH } from "./dict";
import { HAND_CHART_FAQ_ZH } from "./faq";

/** `/zh/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts.
 *  OG locale = zh_CN · inLanguage = zh-Hans (calculator 랜딩과 동일 — 고치지 마라). */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_ZH.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_ZH.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/zh/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/zh/hand-chart`,
    siteName: "HoldemMaster",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — 德州扑克起手牌表" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_ZH.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/zh/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hans",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "全部169种翻前起手牌",
        "UTG、HJ、CO、按钮位与小盲位的开池范围",
        "点击位置只高亮该位置的范围",
        "按可开池的位置（UTG 至 SB）为起手牌分色显示",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_ZH.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${SITE}/zh` },
        { "@type": "ListItem", position: 2, name: "起手牌表", item: `${SITE}/zh/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="起手牌表" locale="zh">
        <HandChartTool dict={HAND_CHART_DICT_ZH} faq={HAND_CHART_FAQ_ZH} />
      </HubPage>
    </>
  );
}
