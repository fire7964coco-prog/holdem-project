import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_FR } from "./dict";
import { CALCULATOR_FAQ_FR } from "./faq";

/**
 * `/fr/calculator` — 프랑스어 계산기 랜딩.
 * ★2026-09-17 신설(10로케일 일괄 개설) → ★2026-09-18 «계산 기능 강조» 재조준 회차
 *   (Equity 탭 + 빠른 참조 6표 + FAQ 18 + 메타 재조준 + §3-I 개정 7자리).
 * 공용 컴포넌트 `components/calculator/calculator-tool.tsx` + 이 폴더의 사전(`dict.ts`)·FAQ(`faq.ts`)로 그린다.
 * 정본 구조 = `app/en/calculator/page.tsx` · hreflang 세트 = `lib/calculator-alternates.ts`(12코드 공용).
 * 실측 정본 = `docs/keyword-bank/fr-calculator.md`(09-18) · 브리프 = `docs/harden-brief/calculator-landing-rewrite.md`.
 *
 * 제목·설명에서 내린 판단 —
 *   ① 🔴 머리어를 「Calculatrice de probabilités poker」 → **「Calculateur poker」**로 교체했다.
 *      볼륨은 calculateur≡calculatrice를 **못 가른다**(동의어군 390 · 시계열·CPC·입찰가 완전 동일).
 *      가른 근거 셋 = 자동완성 재조준(«calculatrice poker» 확장 8개 중 4개가 «calculateur…» · 역방향 0) ·
 *      전치사 «de»가 39배를 죽인다(«calculateur poker» 390 ↔ «calculateur de poker» 10) ·
 *      SERP 프랑스어 도구 페이지 **title 6/6이 «Calculateur»**(«Calculatrice»는 0건 · 뱅크 §3-A).
 *      🔴 옛 앵커는 fr 코퍼스 **단 한 줄**(`texas-holdem-rules-for-beginners.ts:444`)에서 왔지 시장에서 온 게 아니다 →
 *      zh-hant식 «분리»가 아니라 «교체»가 맞다. `CALC_CTA_LABELS.fr`도 같이 바꿨다.
 *   ② 뒤 토큰 = «équité» 110 · «cote» 110 · **«ICM» 480**. 🔴 fr에서 ICM은 롱테일이 아니라 머리어다(de 110의 4.4배).
 *   ③ 🔴 영문 «poker odds calculator» 260은 자국어 머리어 390의 **0.67배**라 제목에 넣지 않았다 —
 *      de(590:260 = 영문 2.3배)와 **반대**다. §3-H를 「영문이 크다」로 일반화하면 안 된다(뱅크 §7-B).
 *   ④ 🔴 «Push or Fold»는 영어 «or»다 — «push ou fold» 3변형 전부 null ↔ «push or fold» 70 ·
 *      자동완성 9/9 · SERP top10 전부. PokerStars.fr만 «push ou fold»를 쓴다(자사 문체 · 뱅크 §3-D-1).
 *   ⑤ 프랑스식 조판 = 코퍼스 관습대로 일반 공백(« ? » · « : » · «35 %») · 천단위 공백 · 소수 쉼표 ·
 *      guillemets « » · $ 유지 · register = tu(코퍼스 6편 전부).
 *   ⑥ SPR·valeur M 단독 훅은 제목에 쓰지 않는다(settled §1).
 */
// 🔴 title/description은 CALC_DICT_FR.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓰므로
//   두 자리가 갈리면 조용히 dict 쪽이 이긴다(settled-decisions §6 · check:seo-sync).
//   ★2026-09-18: 옛 판은 이 두 값을 하드코딩했다(브리프 §3-I) — 선례 6로케일은 전부 dict 파생이다.
const TITLE = `${CALC_DICT_FR.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_FR.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            프랑스어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/fr/calculator`,
    // 계산기 랜딩 12개(ko·en + 10로케일)가 같은 세트를 선언한다. 정본 = lib/calculator-alternates.ts
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 카드가 빈 채로 나간다(브리프 §3-I).
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Calculateur poker — HoldemMaster",
    // 선례 로케일(es·pt·ja·de)처럼 «équité 먼저 + 무료» 프레이밍.
    description:
      "Équité main contre main, deals ICM, cotes du pot et équité minimale requise, outs, SPR, valeur M et push or fold — neuf calculateurs Hold'em gratuits.",
    url: `${SITE}/fr/calculator`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: fr → fr_FR (블로그·솔버 랜딩과 동일).
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Calculateur poker" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Calculateur poker et calculateur ICM",
      url: `${SITE}/fr/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "fr",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // ★2026-09-18: 8 → 9(Equity 탭 신설). 🪶 이름은 **탭 라벨이 아니라 `dict.guide.cards` 제목의 확장형**이다
      //   (EN도 같은 패턴 — 탭은 «Classement»·«Main de départ»로 짧고, 여기는 기능을 풀어 쓴다).
      //   초안 주석이 «탭 라벨과 같은 이름»이라고 적었던 것을 교열 렌즈 09-18이 정정했다.
      featureList: [
        "Calculateur d'équité (main contre main)",
        "Calculateur d'outs",
        "Calculateur de cotes du pot et de cotes implicites",
        "Évaluateur de main — le classement des mains",
        "Force des mains de départ",
        "Calculateur de SPR (ratio tapis / pot)",
        "Calculateur de valeur M de tournoi",
        "Calculateur ICM (Independent Chip Model)",
        "Tableau push or fold (Nash)",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
        { "@type": "ListItem", position: 2, name: "Calculateur", item: `${SITE}/fr/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_FR.map((f) => ({
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
      <HubPage title="Calculateur poker" locale="fr">
        <CalculatorTool locale="fr" dict={CALC_DICT_FR} faq={CALCULATOR_FAQ_FR} />
      </HubPage>
    </>
  );
}
