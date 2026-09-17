import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ZH } from "./dict";
import { CALCULATOR_FAQ_ZH } from "./faq";

/**
 * `/zh/calculator` — 간체 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설).
 * 도구 본체는 공용 `components/calculator/calculator-tool.tsx`이고, 이 로케일은 사전(`./dict.ts`)과
 * FAQ(`./faq.ts`)만 갖는다. hreflang 세트는 `lib/calculator-alternates.ts` 한 곳에서 가져온다.
 * 용어 출처 = `docs/translation-terms-zh.md` → `lib/posts-zh/holdem-glossary.ts` → 코퍼스 실표기
 *   (`holdem-outs`·`holdem-pot-odds`·`holdem-icm`·`holdem-short-stack`·`holdem-hand-rankings`).
 * 제목·설명에서 내린 판단 —
 *   ① 사장님 승인 핵심명 «德州扑克概率计算器»를 제목에 연속 문자열로 두고 앞에 «免费» 훅만 붙였다
 *      (뱅크 `zh-probability.md` §: `胜率计算器`·`计算器在线`은 도구 의도 → 이 랜딩이 갖는다).
 *   ② 설명은 8개 도구의 검색어(补牌·底池赔率·隐含赔率·牌型大小·起手牌·SPR·M值·ICM·push/fold)를 전부 싣고
 *      «打开浏览器就能算» 훅은 zh 솔버 랜딩과 같은 문장으로 앞에 둔다(107자 · 160자 이내).
 *   ③ OG locale은 hreflang(zh-Hans)과 달리 `zh_CN`이다 — 솔버 랜딩과 같은 OG 프로토콜 관례(lib/intl.ts). 고치지 마라.
 */
const TITLE = "免费德州扑克概率计算器 — 胜率、补牌、底池赔率、ICM 一次算清 | HoldemMaster";
const DESCRIPTION =
  "免费的德州扑克概率计算器，打开浏览器就能算：补牌（outs）与听牌胜率、底池赔率和隐含赔率、牌型大小、起手牌强度、SPR、锦标赛 M值、ICM 分钱，还有 push/fold Nash 图表——8 个工具一页搞定。";

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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "德州扑克概率计算器 — HoldemMaster",
    description:
      "补牌、底池赔率、牌型大小、起手牌、SPR、M值和 ICM——德州扑克要用的数字，一页全算清。",
    url: `${SITE}/zh/calculator`,
    siteName: "HoldemMaster",
    locale: "zh_CN",
    type: "website",
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
      featureList: [
        "补牌（outs）计算器",
        "底池赔率与隐含赔率计算器",
        "牌型大小判定",
        "起手牌强度",
        "SPR（筹码底池比）计算器",
        "锦标赛 M值计算器",
        "ICM（独立筹码模型）计算器",
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
