import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ID } from "./dict";
import { CALCULATOR_FAQ_ID } from "./faq";

/**
 * `/id/calculator` — 인도네시아어 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설분).
 *   그날까지 계산기 랜딩은 ko·en 둘뿐이라 id 글의 우측 레일 CTA가 한국어 `/calculator`로 떨어졌다.
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_ID) ·
 *   `faq.ts`(CALCULATOR_FAQ_ID). 정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 * 용어 출처 = `docs/keyword-bank/id-posting-reference.md` §5·§5-A(코퍼스 실측 판정) → `docs/translation-terms-id.md`
 *   → `lib/posts-id/*.ts` 어법(outs·pot odds·equity·ICM·SPR·push/fold 영어 유지 · 족보 영어 표기 · Anda체 · 숫자 인니식).
 * 제목·설명 판단:
 *   ① 핵심명 «Kalkulator Odds Poker»(사장님 승인 CTA 라벨)를 H1·title 앞머리에 그대로. id 코퍼스 앵커
 *      «kalkulator odds poker»·«kalkulator ICM»과 일치. ⚠ id 볼륨은 영어 «poker calculator» 90 vs
 *      «kalkulator poker» 10(id-core-volumes) — 영어형은 조준하지 않고 핵심명 규율을 따른다.
 *   ② 족보 축은 «Urutan Kartu»(id 검색 관습 «urutan kartu poker» · hand-rankings 글 tldr 표기)로 —
 *      EN «Hand Rank» 직역 대신. 그래서 title 본문이 63자(EN 62자와 동급 · 형제 랜딩 대역).
 *   ③ 훅 «gratis»는 title이 아니라 desc 첫 단어에 둔다(솔버 랜딩과 달리 계산기는 도구 8종 나열이 검색 축).
 */

const TITLE = "Kalkulator Odds Poker — Outs, Pot Odds, Urutan Kartu, SPR & ICM | HoldemMaster";
// ≤160자 · dict.seo.description과 동일 문자열(클라이언트 <SEO>가 서버 메타를 덮어쓰므로 둘이 같아야 한다).
const DESCRIPTION = CALC_DICT_ID.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            인도네시아어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/id/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Kalkulator Odds Poker — HoldemMaster",
    description:
      "Outs, pot odds, urutan kartu, starting hand, SPR, nilai M, dan ICM — semua angka Hold'em di satu tempat.",
    url: `${SITE}/id/calculator`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: id → id_ID (블로그·솔버 랜딩 컨벤션과 동일).
    locale: "id_ID",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Kalkulator Odds Poker & Kalkulator ICM",
      url: `${SITE}/id/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "id",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Kalkulator outs",
        "Kalkulator pot odds & implied odds",
        "Penilai hand (urutan kartu)",
        "Kekuatan starting hand",
        "Kalkulator SPR (stack-to-pot ratio)",
        "Kalkulator nilai M turnamen",
        "Kalkulator ICM (Independent Chip Model)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE}/id` },
        { "@type": "ListItem", position: 2, name: "Kalkulator", item: `${SITE}/id/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_ID.map((f) => ({
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
      <HubPage title="Kalkulator" locale="id">
        <CalculatorTool locale="id" dict={CALC_DICT_ID} faq={CALCULATOR_FAQ_ID} />
      </HubPage>
    </>
  );
}
