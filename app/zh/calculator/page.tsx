import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ZH } from "./dict";
import { CALCULATOR_FAQ_ZH } from "./faq";

/**
 * `/zh/calculator` — 간체 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설).
 * ★2026-09-17 (zh 회차) 재조준 — EN 재저작(b337e436)·ja(9aa822ad)와 동형: Equity 탭 · quickRef 6표 · FAQ 18 · 메타 재조준.
 *   근거 = docs/keyword-bank/zh-calculator.md(구글 자동완성 SG/MY/CN 40시드 · DFS SERP 5쿼리 · 상위 15페이지 구조).
 * 도구 본체는 공용 `components/calculator/calculator-tool.tsx`이고, 이 로케일은 사전(`./dict.ts`)과
 * FAQ(`./faq.ts`)만 갖는다. hreflang 세트는 `lib/calculator-alternates.ts` 한 곳에서 가져온다.
 * 용어 출처 = `docs/translation-terms-zh.md` → `lib/posts-zh/holdem-glossary.ts` → 코퍼스 실표기.
 *
 * 🔴 title/description은 CALC_DICT_ZH.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 「| HoldemMaster」만 여기서 붙인다.
 *
 * 제목·설명에서 내린 판단(09-17 재조준) —
 *   ① 핵심어는 사장님 확정 CTA 「德州扑克概率计算器」 유지. 자동완성(SG/MY/CN 동일)에서 「德州扑克概率计算器」·「德州扑克胜率计算器」 둘 다 살아 있고
 *      SERP가 같은 도구 페이지 집합(dongpaidi·last2win·calcbe·viegg)이라 동의어군 — «计算器»는 도구 의도이고, «概率表·概率计算(방법)»은 `holdem-probability` 소유.
 *   ② 차별화어 = 「胜率计算器」(자동완성 「德州扑克 胜率」 확장 5종의 머리 · SERP 1위 dongpaidi 제목 축어) · 「ICM」(「icm计算/icm公式」 살아 있음 ·
 *      🔴 「ICM计算器」 단독은 자동완성 0) · 「底池赔率」. 옛 제목의 「补牌」는 설명으로 내렸다. 🔴 SPR·BB는 제목 훅 금지(settled §1).
 *   ③ 볼륨 절대값은 없다(DFS 2156·2702 전 시드 10 바닥값 · 라쿠 Singapore 동일) — 근거는 자동완성·SERP·PAS.
 *   ④ OG locale은 hreflang(zh-Hans)과 달리 `zh_CN`이다 — 솔버 랜딩과 같은 OG 프로토콜 관례(lib/intl.ts). 고치지 마라.
 *   ⑤ ICM 예시 통화는 EN 그대로 `$`(translation-terms-zh.md §3 「$ 保存·¥ 금지」).
 */
const TITLE = `${CALC_DICT_ZH.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_ZH.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            중국어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/zh/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "德州扑克概率计算器 & ICM 计算器 — HoldemMaster",
    description:
      "手牌 vs 手牌胜率、ICM deal、底池赔率与所需胜率、补牌、SPR、M值、push/fold——德州扑克要用的数字，一页全算清，免费。",
    url: `${SITE}/zh/calculator`,
    siteName: "HoldemMaster",
    locale: "zh_CN",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster 德州扑克概率计算器" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "德州扑克概率计算器 & ICM 计算器",
      url: `${SITE}/zh/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hans",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // ★2026-09-17 7 → 9: Equity 신설 + push/fold 누락 보완(EN과 동형). 탭을 늘리면 이 배열·hero.chips·guide.cards도 같이.
      featureList: [
        "手牌胜率计算器（手牌 vs 手牌）",
        "补牌（outs）计算器",
        "底池赔率与隐含赔率计算器",
        "牌型大小判定",
        "起手牌强度",
        "SPR（筹码底池比）计算器",
        "锦标赛 M值计算器",
        "ICM（独立筹码模型）计算器",
        "Nash push/fold 图表",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${SITE}/zh` },
        { "@type": "ListItem", position: 2, name: "概率计算器", item: `${SITE}/zh/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_ZH.map((f) => ({
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
      <HubPage title="概率计算器" locale="zh">
        <CalculatorTool locale="zh" dict={CALC_DICT_ZH} faq={CALCULATOR_FAQ_ZH} />
      </HubPage>
    </>
  );
}
