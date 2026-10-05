import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_JA } from "./dict";
import { HAND_CHART_FAQ_JA } from "./faq";

/** `/ja/hand-chart` — ★2026-10-05 신설(로케일 도구 확장 회차 1 · docs/tools-locale-rollout-plan.md).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_JA.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_JA.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/ja/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/ja/hand-chart`,
    siteName: "HoldemMaster",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — ポーカー ハンドレンジ表" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_JA.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/ja/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ja",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "プリフロップの全169ハンド",
        "UTG・HJ・CO・ボタン・SBのオープンレンジ",
        "ポジションをタップしてそのレンジだけをハイライト",
        "オープンできるポジション別(UTG〜SB)にハンドを色分け",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_JA.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/ja` },
        { "@type": "ListItem", position: 2, name: "ハンドレンジ表", item: `${SITE}/ja/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="ハンドレンジ表" locale="ja">
        <HandChartTool dict={HAND_CHART_DICT_JA} faq={HAND_CHART_FAQ_JA} />
      </HubPage>
    </>
  );
}
