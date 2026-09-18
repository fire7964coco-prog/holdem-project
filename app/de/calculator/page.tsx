import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_DE } from "./dict";
import { CALCULATOR_FAQ_DE } from "./faq";

/**
 * `/de/calculator` — ★2026-09-17 신설(10개 로케일 계산기 랜딩 동시 개설 회차).
 * 공용 컴포넌트 `components/calculator/calculator-tool.tsx` + 이 폴더의 사전(`dict.ts`)·FAQ(`faq.ts`)로 그린다.
 * 정본 구조 = `app/en/calculator/page.tsx` · hreflang 세트 = `lib/calculator-alternates.ts`(12코드 공용).
 * 용어 출처 = `docs/translation-terms-de.md`(정본) → `lib/posts-de/holdem-glossary.ts` → de 코퍼스 grep.
 *
 * ★2026-09-18 재조준 회차(Equity 탭 + 빠른 참조 6표 + FAQ 18 + 메타) — 뱅크 `docs/keyword-bank/de-calculator.md`.
 * 제목·설명에서 내린 판단 —
 *   ① 앞머리는 승인 CTA 「Poker-Odds-Rechner」(`components/intl-blog-post-client.tsx:30`) 유지 —
 *      🟢 실측 50으로 **살아 있고**(zh-hant의 «CTA 볼륨 0» 사례와 다르다), 그 안에 자국어 머리어
 *      「poker rechner」 260과 영문 머리어 「poker odds calculator」 **590**의 토큰이 둘 다 들어간다.
 *      HubPage(마스트헤드) 짧은 이름만 코퍼스 다수형 「Poker-Rechner」를 쓴다.
 *   ② 둘째 토큰 「Wahrscheinlichkeiten」 = 「poker wahrscheinlichkeiten rechner」 210.
 *      🔴 형제 글이 소유한 것은 「Wahrscheinlichkeiten 〈Tabelle〉」(`holdem-probability` title 축어)이지
 *      「Rechner」가 아니다 — title에 「Rechner」를 쓰는 형제 글은 0건(뱅크 §6) → 분리 성립.
 *   ③ 🔴 「Quoten(rechner)」 금지 — 「quotenrechner」 210은 **스포츠베팅**이고 「poker quotenrechner」는 0이다.
 *      SERP 1위 888poker.de가 FAQ에서 쓰는 것은 odds의 직역(번역체 잔재)이지 검색어가 아니다(뱅크 §1-A).
 *      「Kalkulator」도 금지(390은 폴란드어) · SPR·Faustregel 단독 훅도 금지(settled §1 · 형제 소유).
 *   ④ 훅 «kostenlos»는 title이 아니라 description 첫 단어에 둔다.
 *   ⑤ 대시는 「–」(Halbgeviertstrich · terms §7-10), 「Pot Odds」는 단독 명사(하이픈은 합성어에서만).
 *   ⑥ 통화 $ 유지 = terms §3-A 기준 3(추상·토너먼트 예시). ICM 글과 같은 기준.
 * ⚠ `de-gto-solver.md` §4 「계산기 축 — de에 도구 페이지 없음」 메모는 이 파일로 낡았다.
 */
// 🔴 title/description은 CALC_DICT_DE.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓰므로
//   두 자리가 갈리면 조용히 dict 쪽이 이긴다(settled-decisions §6 · check:seo-sync). 접미 「| HoldemMaster」만 여기서.
//   ★2026-09-18 교열 렌즈: 옛 판은 이 두 값을 하드코딩했다(선례 5로케일은 전부 dict 파생).
const TITLE = `${CALC_DICT_DE.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_DE.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            독일어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/de/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 카드가 빈 채로 나간다.
  //   ★2026-09-18 교열 렌즈: de만 이 두 자리가 비어 있었다(es·pt·ja·zh·zh-hant는 전부 있다).
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Poker-Odds-Rechner – HoldemMaster",
    // ★2026-09-18 2차 교열: 꼬리가 이번 회차에 교체한 옛 h1Sub(「Jede Hold'em-Zahl an einem Ort」)였다.
    //   선례 3로케일(es·pt·ja)처럼 「Equity 먼저 + 무료」 프레이밍으로 맞춘다.
    description:
      "Equity Hand gegen Hand, ICM-Deals, Pot Odds und benötigte Mindest-Equity, Outs, SPR, M-Ratio und Push/Fold – neun kostenlose Hold'em-Rechner.",
    url: `${SITE}/de/calculator`,
    siteName: "HoldemMaster",
    locale: "de_DE",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Poker-Odds-Rechner" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker-Odds-Rechner & ICM-Rechner",
      url: `${SITE}/de/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "de",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Equity-Rechner (Hand gegen Hand)",
        "Outs-Rechner",
        "Pot-Odds- & Implied-Odds-Rechner",
        "Hand-Ranking (Handbewertung)",
        "Starthand-Stärke",
        "SPR-Rechner (Stack-to-Pot-Ratio)",
        "Turnier-M-Rechner",
        "ICM-Rechner (Independent Chip Model)",
        "Nash-Push/Fold-Chart",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: "Rechner", item: `${SITE}/de/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_DE.map((f) => ({
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
      <HubPage title="Poker-Rechner" locale="de">
        <CalculatorTool locale="de" dict={CALC_DICT_DE} faq={CALCULATOR_FAQ_DE} />
      </HubPage>
    </>
  );
}
