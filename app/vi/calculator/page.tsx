import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_VI } from "./dict";
import { CALCULATOR_FAQ_VI } from "./faq";

/**
 * `/vi/calculator` — 베트남어 계산기 랜딩. ★2026-10-07 신설(골격 = app/tr/calculator/page.tsx 10-06 선례).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_VI) · `faq.ts`(CALCULATOR_FAQ_VI).
 *   정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 * 🔴 머리어는 영어 «Poker Calculator»(VN 실측 140 · 베트남어 도구 어휘 전부 null) — 키워드 실측·용어 근거는 dict.ts 머리 주석.
 * HubPage title = «Máy tính xác suất poker» = 사이드 레일 라벨 = vi 코퍼스 앵커(texas-holdem-rules-for-beginners.ts:444).
 */
// 🔴 title/description은 CALC_DICT_VI.seo에서 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓴다(check:seo-sync).
const TITLE = `${CALC_DICT_VI.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_VI.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 keywords 메타는 넣지 않는다 — 사이트 전역에서 의도적으로 제거했다(f12ae9e2 · scripts/check-meta-lang.mjs 머리 주석).
  //    표적어 poker calculator · máy tính xác suất poker(⊃ tính xác suất poker)는 title·h1에, poker odds calculator는 description·FAQ 1번에,
  //    equity · ICM은 title·탭·본문 어휘로 들어 있다(영어 «poker equity calculator»·«icm calculator» 축어 구는 없다).
  alternates: {
    canonical: `${SITE}/vi/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Poker Calculator — HoldemMaster",
    description:
      "Equity giữa các tay bài, ICM deal, pot odds và equity tối thiểu cần có, outs, SPR, chỉ số M và push/fold — chín máy tính Hold'em miễn phí.",
    url: `${SITE}/vi/calculator`,
    siteName: "HoldemMaster",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker Calculator" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Calculator và máy tính ICM",
      url: `${SITE}/vi/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "vi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1.
      featureList: [
        "Máy tính equity (tay bài vs tay bài)",
        "Máy tính outs",
        "Máy tính pot odds và implied odds",
        "Đánh giá tay bài (thứ hạng tay bài)",
        "Sức mạnh bài khởi đầu",
        "Máy tính SPR (stack-to-pot ratio)",
        "Máy tính chỉ số M trong giải đấu",
        "Máy tính ICM (Independent Chip Model)",
        "Bảng Nash push/fold",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/vi` },
        { "@type": "ListItem", position: 2, name: "Máy tính xác suất poker", item: `${SITE}/vi/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_VI.map((f) => ({
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
      <HubPage title="Máy tính xác suất poker" locale="vi">
        <CalculatorTool locale="vi" dict={CALC_DICT_VI} faq={CALCULATOR_FAQ_VI} />
      </HubPage>
    </>
  );
}
