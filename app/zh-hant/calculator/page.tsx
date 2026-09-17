import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ZH_HANT } from "./dict";
import { CALCULATOR_FAQ_ZH_HANT } from "./faq";

/**
 * `/zh-hant/calculator` — 번체(대만·홍콩) 계산기 랜딩. ★2026-09-17 신설(10개 로케일 일괄 개설 회차).
 * ★2026-09-17 (zh-hant 회차) 재조준 — EN 재저작(b337e436)·ja(9aa822ad)·zh(ff81a242)와 동형: Equity 탭 · quickRef 6표 · FAQ 18 · 메타 재조준.
 *   근거 = docs/keyword-bank/zh-hant-calculator.md(자동완성 TW/HK 44시드 · DFS 2158 볼륨 50시드 · SERP 4쿼리 · 상위 6페이지 구조).
 * 도구 본체는 공용 `components/calculator/calculator-tool.tsx`이고, 이 로케일은 사전(`./dict.ts`)과
 * FAQ(`./faq.ts`)만 갖는다. hreflang 세트는 `lib/calculator-alternates.ts` 한 곳에서 가져온다.
 * 용어 출처 = `docs/translation-terms-zh-hant.md` → `lib/posts-zh-hant/holdem-glossary.ts` → 코퍼스 실표기.
 *
 * 🔴 title/description은 CALC_DICT_ZH_HANT.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 「| HoldemMaster」만 여기서 붙인다.
 *
 * 제목·설명에서 내린 판단(09-17 재조준) —
 *   ① 제목 앞머리 = 「德州撲克勝率計算器」(DFS 2158 **260** · 12개월 210~390 · 자동완성 TW=HK 살아 있음 · SERP 10건 중 도구 8).
 *      옛 제목의 앞머리 「撲克機率計算器」는 볼륨 null·자동완성 0이라 H1(CTA · 코퍼스 앵커 · calculators.hk 8위 제목과 동일)에만 남겼다.
 *   ② 차별화어 = 「撲克機率」(H1과 이어짐) · 「ICM 計算機」(🔴 대만은 `icm計算機` 70 ↔ `icm計算器` null — 이 축만 «計算機») · 「底池賠率」.
 *      🔴 `聽牌`(TW 590 = 마작 · local-voice §1-D-3)과 SPR·BB 훅(settled §1)은 제목·설명에 넣지 않는다.
 *   ③ 옛 설명의 「全下或蓋牌納許表」 대신 「手牌對手牌的勝率（Equity）」를 앞에 — 9번째 도구(Equity)가 첫 탭이자 SSR되는 유일한 탭이다.
 *   ④ OG locale은 hreflang(zh-Hant)과 달리 `zh_TW`다 — OG 프로토콜에는 스크립트 서브태그가 없고 ll_TERR 형식이 강제(solver 랜딩·lib/intl.ts와 동일). 고치지 마라.
 *   ⑤ ICM 예시 통화는 EN 그대로 `$`(holdem-icm 관습 — 미화 예시는 환산하지 않는다).
 */
const TITLE = `${CALC_DICT_ZH_HANT.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_ZH_HANT.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            중국어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/zh-hant/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "撲克機率計算器與 ICM 計算機 — HoldemMaster",
    description:
      "手牌對手牌勝率、ICM 交易、底池賠率與所需勝率、補牌、SPR、M值、全下或蓋牌——德州撲克要用的數字，一頁全部算清，免費。",
    url: `${SITE}/zh-hant/calculator`,
    siteName: "HoldemMaster",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster 撲克機率計算器" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "撲克機率計算器與 ICM 計算機",
      url: `${SITE}/zh-hant/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hant",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // ★2026-09-17 7 → 9: Equity 신설 + 全下或蓋牌 누락 보완(EN과 동형). 탭을 늘리면 이 배열·hero.chips·guide.cards도 같이.
      featureList: [
        "手牌勝率計算器（手牌 vs 手牌）",
        "補牌計算器",
        "底池賠率與隱含賠率計算器",
        "牌型大小判定",
        "起手牌強度",
        "SPR（籌碼與底池比）計算器",
        "錦標賽 M值計算器",
        "ICM（獨立籌碼模型）計算機",
        "納許全下或蓋牌表",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: `${SITE}/zh-hant` },
        { "@type": "ListItem", position: 2, name: "機率計算器", item: `${SITE}/zh-hant/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_ZH_HANT.map((f) => ({
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
      <HubPage title="機率計算器" locale="zh-hant">
        <CalculatorTool locale="zh-hant" dict={CALC_DICT_ZH_HANT} faq={CALCULATOR_FAQ_ZH_HANT} />
      </HubPage>
    </>
  );
}
