import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientJa from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 일본어판 승률 시뮬레이터 (2026-10-12 신설 · S-034 2차 ⑤ 언어 확대).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`. 엔진·테이블 UI는 공용이고 문자열만 일본어다(§13 숫자 불변).
 * hreflang = `lib/win-rate-quiz-alternates.ts`(전 랜딩 같은 세트).
 *
 * 제목 판단(DataForSEO Google Ads · Japan/ja · 2026-10-12 실측):
 *   「ポーカー 勝率」 590은 /ja/calculator(「ポーカー勝率計算機」)가 소유 → 제목 머리에 계산기 축을 쓰지 않는다.
 *   「ポーカー 練習」 170 · 「ポーカー 練習 アプリ」 260 · 「ポーカー シミュレーター」 20 → «練習シミュレーター» 축.
 * ⚠ FAQPage 없음 — 화면에 문답이 없다(EN과 같음).
 */
const TITLE = "ポーカー練習シミュレーター — 勝率と降りどきが分かる | HoldemMaster";
const DESCRIPTION =
  "相手のカードが見えない実戦形式で6max・9maxのハンドを1ストリートずつプレイ。ストリートごとの勝率とフロップ以降の必要勝率(ポットオッズ)を確認し、どこで降りるべきだったかを振り返れる無料の練習ツールです。";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙는다
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/ja/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/ja/win-rate-quiz`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "ja_JP",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // twitter를 안 주면 루트 layout의 한국어가 나간다 · images는 상속되지 않는다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

/** JSON-LD는 서버에서 — breadcrumb 꼴은 `app/ja/calculator/page.tsx`(ホーム = `${SITE}/ja`)를 따른다. */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "ポーカー練習シミュレーター",
      description: DESCRIPTION,
      url: `${SITE}/ja/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ja",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "6max・9maxテーブルで相手のカードを見ずにハンドをプレイ(2〜6人)",
        "ストリートごとの勝率を表示",
        "フロップ以降の必要勝率(ポットオッズ)",
        "ハンド後の振り返りで正しい降りどきを確認",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/ja` },
        { "@type": "ListItem", position: 2, name: "勝率シミュレーター", item: `${SITE}/ja/win-rate-quiz` },
      ],
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
      <HubPage title="勝率シミュレーター" locale="ja">
        <WinRateQuizClientJa />
      </HubPage>
    </>
  );
}
