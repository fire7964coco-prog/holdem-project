import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_VI } from "./dict";
import { HAND_CHART_FAQ_VI } from "./faq";

/** `/vi/hand-chart` — ★2026-10-07 신설(vi 도구 회차 · tr 회차 2 방식 · docs/keyword-bank/vi-tools.md · «bảng bài khởi đầu» 의도의 주인).
 *  공용 컴포넌트 components/hand-chart + 이 폴더 사전. hreflang = lib/hand-chart-alternates.ts. */
// 🔴 title/description은 dict.seo에서 — 클라이언트 <SEO>와 갈리면 안 된다(check:seo-sync).
const TITLE = `${HAND_CHART_DICT_VI.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_VI.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/vi/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/vi/hand-chart`,
    siteName: "HoldemMaster",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Starting Hand Chart" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_VI.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/vi/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "vi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Đủ 169 tay bài preflop",
        "Range mở bài cho UTG, HJ, CO, Button và SB",
        "Chạm vào một vị trí để chỉ làm nổi bật range đó",
        "Tay bài được tô màu theo vị trí mở bài (từ UTG đến SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_VI.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/vi` },
        { "@type": "ListItem", position: 2, name: "Bảng bài khởi đầu", item: `${SITE}/vi/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="Bảng bài khởi đầu" locale="vi">
        <HandChartTool dict={HAND_CHART_DICT_VI} faq={HAND_CHART_FAQ_VI} />
      </HubPage>
    </>
  );
}
