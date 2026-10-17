import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientId from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 인도네시아어(id-ID)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2360 Indonesia(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | simulator poker           | 110  |  ← 머리어 · «poker simulator»와 12개월 시계열 완전 동일(같은 군 · 50~260)
 *   | belajar poker             | 30   |
 *   | poker trainer · poker training · equity poker · quiz poker · pot odds · texas holdem simulator | 각 10 |
 *   | simulasi poker · latihan poker · kuis poker · berlatih poker · simulator poker gratis | 데이터 없음 |
 *   SERP «simulator poker»(mobile · id · Indonesia): 게임(Play 앱 · boardgamearena · 247games · kosmi · Steam · softonic)
 *     + 칩 카운터 앱 2 · 훈련형은 영어 1개(religionandstory) — «상대 카드를 못 본 채 에퀴티 추정 → 복기» 자리는 비어 있다.
 *   ⇒ 제목 머리 = «Simulator Poker» · 훈련 의도는 «untuk Latihan»(볼륨 미측정 · 게임 SERP와 구분용) · «equity»는 설명·본문.
 *   «Kalkulator»·«odds»는 /id/calculator 소유라 제목 머리에 쓰지 않는다(그쪽 메타·사전에 «simulator» 0회 · 10-13 grep).
 *   🔴 id 고유: 도박 홍보로 읽히는 말(taruhan·judi·«uang asli»)을 메타에 쓰지 않는다(translation-terms-id ★2).
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §id.
 * OG locale id_ID · inLanguage id · priceCurrency USD — /id/calculator와 같은 판단.
 */
const TITLE = "Simulator Poker untuk Latihan: Kapan Seharusnya Anda Fold? | HoldemMaster";
const DESCRIPTION =
  "Mainkan hand 6-max atau 9-max tanpa melihat kartu lawan, seperti di meja asli: equity Anda di tiap street, pot odds sejak flop, dan kapan seharusnya Anda fold.";
const OG_DESCRIPTION =
  "Kartu lawan tetap tertutup, seperti di poker sungguhan. Ikuti equity Anda street demi street dan pot odds sejak flop, lalu tinjau kapan seharusnya Anda fold.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/id/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/id/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "id_ID",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // twitter를 안 주면 루트 layout의 한국어가 나간다 · images는 상속되지 않는다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: OG_DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

/**
 * JSON-LD는 서버에서. FAQPage는 붙이지 않는다 — 화면에 문답이 없다(EN과 같음).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Simulator Poker untuk Latihan",
      description: DESCRIPTION,
      url: `${SITE}/id/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "id",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Mainkan satu hand di meja 6-max atau 9 pemain (2 sampai 6 pemain) tanpa melihat kartu lawan, street demi street",
        "Equity Anda di setiap street",
        "Pot odds yang dibutuhkan sejak flop",
        "Tinjauan setelah hand: kapan seharusnya Anda fold",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE}/id` },
        { "@type": "ListItem", position: 2, name: "Simulator Poker", item: `${SITE}/id/win-rate-quiz` },
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
      <HubPage title="Simulator Poker" locale="id">
        <WinRateQuizClientId />
      </HubPage>
    </>
  );
}
