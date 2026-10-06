import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_TR } from "./dict";
import { CALCULATOR_FAQ_TR } from "./faq";

/**
 * `/tr/calculator` — 터키어 계산기 랜딩. ★2026-10-06 신설(tr 클러스터 회차 2 · docs/tr-cluster-plan.md §4).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_TR) · `faq.ts`(CALCULATOR_FAQ_TR).
 *   정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 * 🔴 «pot oranı hesaplama · olasılık hesaplama» 의도의 주인(§3 카니발 소유표) — pot-odds·probability 글은 개념 의도만.
 * 키워드 실측·용어 근거는 dict.ts 머리 주석.
 */
// 🔴 title/description은 CALC_DICT_TR.seo에서 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓴다(check:seo-sync).
const TITLE = `${CALC_DICT_TR.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_TR.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/tr/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Poker Hesaplayıcı — HoldemMaster",
    description:
      "Eller arası equity, ICM deal, pot oranı ve gereken minimum equity, out, SPR, M değeri ve push/fold — dokuz ücretsiz Hold'em hesaplayıcısı.",
    url: `${SITE}/tr/calculator`,
    siteName: "HoldemMaster",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Hesaplayıcı" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Hesaplayıcı ve ICM Hesaplayıcı",
      url: `${SITE}/tr/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "tr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1.
      featureList: [
        "Equity hesaplayıcı (el karşılaştırması)",
        "Out hesaplayıcı",
        "Pot oranı ve implied odds hesaplayıcı",
        "El değerlendirici (el sıralaması)",
        "Başlangıç eli gücü",
        "SPR hesaplayıcı (stack-to-pot ratio)",
        "Turnuva M değeri hesaplayıcı",
        "ICM hesaplayıcı (Independent Chip Model)",
        "Nash push/fold tablosu",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana sayfa", item: `${SITE}/tr` },
        { "@type": "ListItem", position: 2, name: "Hesaplayıcı", item: `${SITE}/tr/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_TR.map((f) => ({
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
      <HubPage title="Hesaplayıcı" locale="tr">
        <CalculatorTool locale="tr" dict={CALC_DICT_TR} faq={CALCULATOR_FAQ_TR} />
      </HubPage>
    </>
  );
}
