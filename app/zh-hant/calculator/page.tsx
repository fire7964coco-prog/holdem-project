import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ZH_HANT } from "./dict";
import { CALCULATOR_FAQ_ZH_HANT } from "./faq";

/**
 * `/zh-hant/calculator` — 번체(대만·홍콩) 계산기 랜딩. ★2026-09-17 신설(10개 로케일 일괄 개설 회차).
 * 공용 컴포넌트 `components/calculator/calculator-tool.tsx`를 `./dict.ts`(CalcDict) + `./faq.ts`로 구동한다 —
 *   페이지 고유 코드는 metadata·JSON-LD뿐. 정본 구조 = `app/en/calculator/page.tsx`.
 * 용어 출처 = `docs/translation-terms-zh-hant.md`(§7-B 確率·§7-D 底池賠率·§7-G 錦標賽) → `lib/posts-zh-hant/holdem-glossary.ts`
 *   → `lib/posts-zh-hant/{holdem-icm,holdem-short-stack,holdem-outs,holdem-pot-odds,holdem-starting-hands-chart}.ts` 실제 표기.
 * 제목·설명에서 내린 판단:
 *   ① 핵심명 「撲克機率計算器」(사장님 승인 CTA · `texas-holdem-rules-for-beginners` L511이 이미 이 이름으로 /zh-hant/calculator를 링크)를
 *      H1·제목 앞머리로 두고, 제목 안에 **`德州撲克勝率計算器`(TW 260 · SERP 8/10이 도구 의도 — `docs/keyword-bank/zh-hant-odds-cluster.md` §2-B)**
 *      를 연속 문자열로 박았다. 이 페이지는 «도구»라 그 의도에 정면으로 맞는다. 🔴 `勝率計算器` 단독(1,900)은 게임 계산기 의도 → 반드시 德州撲克 앞에 붙인다.
 *   ② 🔴 `聽牌`(TW 590)은 SERP 12/12 마작이라 title·description에 넣지 않았다(local-voice §1-D-3) — 본문 사전에서는 코퍼스 정본대로 쓴다.
 *   ③ 훅은 「免費 · 打開瀏覽器就能算 · 免註冊」(solver 랜딩과 같은 대만 웹 관습 표현) · description은 8개 도구 명칭을 전부 싣되 ~85자로 눌렀다.
 *   ④ push-fold 표기 = 「全下或蓋牌」(용어집 蓋牌 + bubble/tournament 포스트). short-stack 포스트만 「全下或棄牌」라 갈려 있다 — 보고서에 표시.
 * hreflang 세트는 `lib/calculator-alternates.ts` 한 곳(12코드) — 여기 복사하지 않는다.
 */

// 🪶 seo.tsx가 클라이언트에서 「 | HoldemMaster」를 붙이므로 dict.seo.title은 접미 없는 이 문자열과 같아야 한다.
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
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "撲克機率計算器 — HoldemMaster",
    description:
      "補牌、底池賠率、牌型判定、起手牌強度、SPR、M值、ICM——德州撲克要用的數字，全在這一頁。",
    url: `${SITE}/zh-hant/calculator`,
    siteName: "HoldemMaster",
    // ⚠ hreflang은 zh-Hant인데 여기만 zh_TW인 것은 모순이 아니다 — OG 프로토콜에는 스크립트
    //   서브태그가 없고 ll_TERR 형식이 강제라 번체 표준값이 zh_TW다(solver 랜딩·lib/intl.ts와 동일).
    locale: "zh_TW",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "撲克機率計算器與 ICM 計算器",
      url: `${SITE}/zh-hant/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hant",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "補牌計算器",
        "底池賠率與隱含賠率計算器",
        "牌型判定",
        "起手牌強度",
        "SPR（籌碼與底池比）計算器",
        "錦標賽 M值計算器",
        "ICM（獨立籌碼模型）計算器",
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
