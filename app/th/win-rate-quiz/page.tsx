import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientTh from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

// Head terms: docs/keyword-bank/th-tools.md section 4; EN meaning authority.
const TITLE = "ควิซโป๊กเกอร์: poker quiz ฝึก equity | HoldemMaster";
const DESCRIPTION = "ฝึกประเมิน equity โดยไม่เห็นไพ่คู่ต่อสู้ เลือกคอลหรือหมอบ ดู pot odds ตั้งแต่ฟลอป แล้วย้อนดูว่าคุณควรหมอบตอนไหน";
const OG_DESCRIPTION = "ประเมิน equity โดยไม่เห็นไพ่คู่ต่อสู้ ดู pot odds ตั้งแต่ฟลอป แล้วย้อนดูจังหวะที่ควรหมอบ";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/th/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/th/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "th_TH",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ควิซโป๊กเกอร์",
      description: DESCRIPTION,
      url: `${SITE}/th/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "th",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "ฝึกกับโต๊ะ 6-max หรือ 9 คน โดยไม่เห็นไพ่คู่ต่อสู้ (ผู้เล่นเห็นฟลอป 2–6 คน)",
        "แสดง equity ทุก street",
        "Pot odds และ equity ที่ต้องการตั้งแต่ฟลอป",
        "ย้อนดูหลังจบมือว่าควรหมอบตอนไหน",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE}/th` },
        { "@type": "ListItem", position: 2, name: "ควิซโป๊กเกอร์", item: `${SITE}/th/win-rate-quiz` },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HubPage title="ควิซโป๊กเกอร์" locale="th">
        <WinRateQuizClientTh />
      </HubPage>
    </>
  );
}
