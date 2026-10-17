import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartTool from "@/components/hand-chart/hand-chart-tool";
import HubPage from "@/components/hub-page";
import { HAND_CHART_ALTERNATES } from "@/lib/hand-chart-alternates";
import { HAND_CHART_DICT_TH } from "./dict";
import { HAND_CHART_FAQ_TH } from "./faq";
const TITLE = `${HAND_CHART_DICT_TH.seo.title} | HoldemMaster`;
const DESCRIPTION = HAND_CHART_DICT_TH.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/th/hand-chart`, languages: HAND_CHART_ALTERNATES },
  robots: { index: true, follow: true },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/opengraph.jpg"] },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/th/hand-chart`,
    siteName: "HoldemMaster",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — ตาราง Preflop · poker chart" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: HAND_CHART_DICT_TH.seo.title,
      description: DESCRIPTION,
      url: `${SITE}/th/hand-chart`,
      applicationCategory: "ReferenceApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "th",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "ไพ่เริ่มต้น preflop ทั้ง 169 แบบ",
        "เรนจ์เปิดสำหรับ UTG, HJ, CO, BTN และ SB",
        "เลือกตำแหน่งเพื่อไฮไลต์เรนจ์",
        "มือแบ่งสีตามตำแหน่งเปิด (จาก UTG ถึง SB)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: HAND_CHART_FAQ_TH.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE}/th` },
        { "@type": "ListItem", position: 2, name: "ตาราง Preflop · poker chart", item: `${SITE}/th/hand-chart` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="ตาราง Preflop · poker chart" locale="th">
        <HandChartTool dict={HAND_CHART_DICT_TH} faq={HAND_CHART_FAQ_TH} />
      </HubPage>
    </>
  );
}
