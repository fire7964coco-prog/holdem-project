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
 * ★2026-09-17 (ja 회차) 재조준 — EN 재저작(b337e436)과 동형: Equity 탭 · quickRef 6표 · FAQ 18 · 메타 재조준.
 *   근거 = docs/keyword-bank/ja-calculator.md(라쿠 Japan 실측 · 질문 DB · DFS SERP 3쿼리 · 상위 페이지 구조).
 * 정본 구조 = `app/en/calculator/page.tsx`. 도구 본체는 **공용 컴포넌트**
 *   `components/calculator/calculator-tool.tsx` + 이 폴더의 사전(`dict.ts`)·FAQ(`faq.ts`)만 일본어다.
 * hreflang 세트 = `lib/calculator-alternates.ts`(12개 랜딩이 같은 세트를 선언해야 `check:hreflang` 통과).
 *
 * 🔴 title/description은 CALC_DICT_JA.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 덮어쓰므로
 *   두 자리가 갈리면 안 된다(settled-decisions §6 · check:seo-sync). 접미 「| HoldemMaster」만 여기서 붙인다.
 *
 * 제목·설명에서 내린 판단(09-17 재조준):
 *   ① 핵심어는 사장님 승인 CTA 「ポーカー勝率計算機」 유지. 실측도 이 축이 머리다 — 「ポーカー 勝率 計算」 720(SD 22) ·
 *      「〜 サイト」 390 · 「〜 計算ツール/アプリ」 90/90(라쿠 Japan · 09-17). 「確率 計算」 320은 `holdem-probability`가 소유.
 *   ② 차별화어 = 「ハンド勝率」(「ポーカー ハンド 勝率」 320 · SERP 3위 pokerqz가 «ハンドvsハンド» 도구 = Equity 탭의 의도) ·
 *      「ICM」(「ICM 計算機」 20 · SD 23 · SERP 1위 holdemcalc) · 「必要勝率」(「ポーカー 必要勝率」 170 > 「ポットオッズ」 50).
 *      옛 제목의 「アウツ・ポットオッズ」는 설명으로 내렸다. 🔴 SPR·BB는 제목 훅 금지(settled §1) — 탭·표에서만.
 *   ③ 「チップチョップ」 1,600은 明治 과자 오염(라쿠 서제스트 26건 전부 과자) → 제목·OG 훅 금지. 설명 끝에 ICM 문맥으로만.
 *   ④ ICM 예시 통화는 EN 그대로 `$`(translation-terms-ja.md:17 「$ 유지·円 환산 금지」).
 */
const TITLE = `${CALC_DICT_JA.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_JA.seo.description;

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
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 summary_large_image 카드가 빈 채로 나간다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "ポーカー勝率計算機 & ICM計算機 — HoldemMaster",
    description:
      "ハンド対ハンドの勝率、ICMディール、ポットオッズと必要勝率、アウツ、SPR、M値、プッシュ/フォールド——ホールデムに必要な数字を1か所で、無料。",
    url: `${SITE}/ja/calculator`,
    siteName: "HoldemMaster",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster ポーカー勝率計算機" }],
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
      // ★2026-09-17 7 → 9: Equity 신설 + push/fold 누락 보완(EN과 동형). 탭을 늘리면 이 배열·hero.chips·guide.cards도 같이.
      featureList: [
        "勝率計算機(ハンド対ハンドの勝率)",
        "アウツ計算機",
        "ポットオッズ & インプライドオッズ計算機",
        "役判定",
        "スターティングハンドの強さ",
        "SPR(スタック対ポット比)計算機",
        "トーナメントのM値計算機",
        "ICM(独立チップモデル)計算機",
        "プッシュ/フォールドのナッシュ表",
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
