import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_AR } from "./dict";
import { CALCULATOR_FAQ_AR } from "./faq";

/**
 * `/ar/calculator` — 아랍어(MSA) 계산기 랜딩. ★2026-10-14 신설(tool-lanes 🅲 회차 1 · 골격 = app/ru/calculator/page.tsx 10-13 선례).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_AR) · `faq.ts`(CALCULATOR_FAQ_AR).
 *   정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`(지역 없는 «ar»).
 * 🔴 머리어 = 영어 «Poker Calculator» + 아랍어 부제 «حاسبة احتمالات البوكر»(아랍어 도구구 볼륨 null · vi·hi·tr 선례) —
 *   근거 = docs/keyword-bank/ar-tools.md · 용어 근거는 dict.ts 머리 주석. RTL은 app/layout.tsx의 html dir가 맡는다.
 * HubPage title = «حاسبة احتمالات البوكر» = 사이드 레일 라벨 = 글 우측 CTA title.
 */
// 🔴 title/description은 CALC_DICT_AR.seo에서 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓴다(check:seo-sync).
const TITLE = `${CALC_DICT_AR.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_AR.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 keywords 메타는 넣지 않는다 — 사이트 전역에서 의도적으로 제거했다(f12ae9e2 · scripts/check-meta-lang.mjs 머리 주석).
  alternates: {
    canonical: `${SITE}/ar/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "حاسبة احتمالات البوكر — HoldemMaster",
    description: DESCRIPTION,
    url: `${SITE}/ar/calculator`,
    siteName: "HoldemMaster",
    locale: "ar_AR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — حاسبة احتمالات البوكر" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "حاسبة احتمالات البوكر وحاسبة ICM",
      url: `${SITE}/ar/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ar",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1.
      featureList: [
        "حاسبة الإكويتي (يد ضد يد)",
        "حاسبة الأوتس",
        "حاسبة بوت أودز والاحتمالات الضمنية",
        "مقيّم قوة اليد",
        "قوة اليد الافتتاحية",
        "حاسبة SPR (نسبة الستاك إلى البوت)",
        "حاسبة قيمة M في البطولات",
        "حاسبة ICM (نموذج الرقائق المستقل)",
        "مخطط Push/Fold لناش",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: "حاسبة احتمالات البوكر", item: `${SITE}/ar/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_AR.map((f) => ({
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
      <HubPage title="حاسبة احتمالات البوكر" locale="ar">
        <CalculatorTool locale="ar" dict={CALC_DICT_AR} faq={CALCULATOR_FAQ_AR} />
      </HubPage>
    </>
  );
}
