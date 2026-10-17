import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_TH } from "./dict";
import { CALCULATOR_FAQ_TH } from "./faq";
const TITLE = `${CALC_DICT_TH.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_TH.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/th/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "เครื่องคำนวณ Equity — HoldemMaster",
    description:
      "Equity, ICM, pot odds, outs, SPR, M และ push/fold ในเครื่องคำนวณ Texas Hold’em ฟรี 9 แบบ",
    url: `${SITE}/th/calculator`,
    siteName: "HoldemMaster",
    locale: "th_TH",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — เครื่องคำนวณ Equity · poker calculator" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "เครื่องคำนวณ Equity และ ICM",
      url: `${SITE}/th/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "th",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "เครื่องคำนวณ Equity (hand vs hand)",
        "เครื่องคำนวณ Outs",
        "เครื่องคำนวณ Pot odds และ Implied odds",
        "ประเมินมือ",
        "ความแข็งแกร่งของไพ่เริ่มต้น",
        "เครื่องคำนวณ SPR (stack-to-pot ratio)",
        "เครื่องคำนวณ M ในทัวร์นาเมนต์",
        "เครื่องคำนวณ ICM (Independent Chip Model)",
        "Nash push/fold chart",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE}/th` },
        { "@type": "ListItem", position: 2, name: "เครื่องคำนวณ Equity · poker calculator", item: `${SITE}/th/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_TH.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HubPage title="เครื่องคำนวณ Equity · poker calculator" locale="th">
        <CalculatorTool locale="th" dict={CALC_DICT_TH} faq={CALCULATOR_FAQ_TH} />
      </HubPage>
    </>
  );
}
