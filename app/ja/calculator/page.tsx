import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_JA } from "./dict";
import { CALCULATOR_FAQ_JA } from "./faq";

/**
 * `/ja/calculator` — 한국어 `/calculator`·영어 `/en/calculator`의 일본어판. ★2026-09-17 신설
 * (10개 로케일 동시 신설 — 다국어 글의 우측 레일 계산기 CTA가 전부 한국어 `/calculator`로 떨어지던 것의 처방).
 * 정본 구조 = `app/en/calculator/page.tsx`. 도구 본체는 **공용 컴포넌트**
 *   `components/calculator/calculator-tool.tsx` + 이 폴더의 사전(`dict.ts`)·FAQ(`faq.ts`)만 일본어다.
 * hreflang 세트 = `lib/calculator-alternates.ts`(12개 랜딩이 같은 세트를 선언해야 `check:hreflang` 통과).
 *
 * 용어 출처: `docs/translation-terms-ja.md`(문체·반각 괄호·$ 유지) → `lib/posts-ja/holdem-glossary.ts` →
 *   `lib/posts-ja/{holdem-icm,holdem-outs,holdem-pot-odds,holdem-short-stack,holdem-starting-hands-chart}.ts` 축어.
 *
 * 제목·설명에서 내린 판단:
 *   ① 핵심어는 사장님 승인 CTA 「ポーカー勝率計算機」(components/intl-blog-post-client.tsx:27)를 그대로 H1·title에.
 *      본문 링크 앵커는 「ICM計算機」(4)·「ICM計算ツール」(3)·「計算ツール」(2)·「ポーカー確率計算機」(1)로 갈려 있어
 *      어느 것도 정본이 아니다 — 승인된 이름을 정본으로 세우고 ICM 섹션 안에서만 「ICM計算機」를 쓴다.
 *   ② 제목 차별화어 = 「アウツ・ポットオッズ・ICM」. 「確率計算機」 축(`ポーカー 確率計算機` 50 · keyword-bank/ja-probability.md §1)은
 *      「確率計算」 390의 하위이고 `holdem-probability`가 허브를 소유하므로 제목에서 겹치지 않게 「勝率」 쪽으로 세웠다.
 *   ③ 「無料」는 설명 첫 어절 + 제목 끝에만. 솔버 랜딩과 같은 이유로 「登録不要」를 설명 첫머리에 두었다(제목 폭 ~31자 유지).
 *   ④ ICM 예시 통화는 EN 그대로 `$`(translation-terms-ja.md:17 「$ 유지·円 환산 금지」 · holdem-icm.ts:158~170 축어).
 */
const TITLE = "ポーカー勝率計算機 — アウツ・ポットオッズ・ICMを無料計算 | HoldemMaster";
const DESCRIPTION =
  "登録不要・無料のテキサスホールデム計算ツール。アウツとドロー完成率、ポットオッズ、役判定、スターティングハンドの強さ、SPR、トーナメントのM値、ICM、プッシュ/フォールドのナッシュ表——8つの計算機を1ページで。";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            일본어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/ja/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "ポーカー勝率計算機 — HoldemMaster",
    description:
      "アウツ、ポットオッズ、役判定、スターティングハンド、SPR、M値、ICM——ホールデムに必要な数字を1か所で。",
    url: `${SITE}/ja/calculator`,
    siteName: "HoldemMaster",
    locale: "ja_JP",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "ポーカー勝率計算機 & ICM計算機",
      url: `${SITE}/ja/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ja",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "アウツ計算機",
        "ポットオッズ & インプライドオッズ計算機",
        "役判定",
        "スターティングハンドの強さ",
        "SPR(スタック対ポット比)計算機",
        "トーナメントのM値計算機",
        "ICM(独立チップモデル)計算機",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/ja` },
        { "@type": "ListItem", position: 2, name: "勝率計算機", item: `${SITE}/ja/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_JA.map((f) => ({
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
      <HubPage title="勝率計算機" locale="ja">
        <CalculatorTool locale="ja" dict={CALC_DICT_JA} faq={CALCULATOR_FAQ_JA} />
      </HubPage>
    </>
  );
}
