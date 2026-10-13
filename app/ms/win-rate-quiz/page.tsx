import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientMs from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 말레이어(ms-MY)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr·id). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2458 Malaysia(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | cara main poker           | 170  |  ← 참고(규칙 의도 · 이 페이지 몫 아님)
 *   | permainan poker           | 140  |  ← 참고(게임 의도)
 *   | simulator poker           | 40   |  ← 머리어 · «poker simulator»와 12개월 시계열 완전 동일(같은 군 · 20~70)
 *   | poker trainer · poker training · poker equity · pot odds · texas holdem simulator · poker quiz · belajar poker | 각 10 |
 *   | simulasi poker · latihan poker · berlatih poker · kuiz poker · simulator poker percuma | 데이터 없음 |
 *   SERP «simulator poker»(mobile · ms · Malaysia): 영어 글로벌 판 — 계산기 3(cardplayer · pokernews · pokerlistings)
 *     + 게임 3(aarp · arkadium · Steam) + 훈련형 2(pokertrainer.se · GTO Wizard) + 소프트웨어 목록 1 · 말레이어 페이지 0.
 *   ⇒ 제목 머리 = «Simulator Poker» · 훈련 의도는 «untuk Latihan»(볼륨 미측정 · 게임 SERP와 구분용) · «equity»는 설명·본문.
 *   «Kalkulator»·«odds»는 /ms/calculator 소유라 제목 머리에 쓰지 않는다(그쪽 메타·사전에 «simulator» 0회 · 10-13 grep).
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §ms.
 * 문체 = 제목은 Title Case «Anda», 메타 문중은 소문자 «anda»(ms-posting-reference §2).
 * OG locale ms_MY · inLanguage ms · priceCurrency USD — /ms/calculator와 같은 판단.
 */
const TITLE = "Simulator Poker untuk Latihan: Bilakah Anda Patut Fold? | HoldemMaster";
const DESCRIPTION =
  "Main satu tangan 6-max tanpa melihat kad lawan, seperti di meja sebenar: equity anda pada setiap street, pot odds mulai flop, dan bila anda sepatutnya fold.";
const OG_DESCRIPTION =
  "Kad lawan kekal tertutup, seperti dalam poker sebenar. Ikuti equity anda street demi street dan pot odds mulai flop, lalu semak bila anda patut fold.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/ms/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/ms/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "ms_MY",
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
      url: `${SITE}/ms/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ms",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Main satu tangan di meja 6-max atau 9 pemain (2 hingga 6 pemain) tanpa melihat kad lawan, street demi street",
        "Equity anda pada setiap street",
        "Pot odds yang diperlukan mulai flop",
        "Semakan selepas tangan: bila anda sepatutnya fold",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Laman utama", item: `${SITE}/ms` },
        { "@type": "ListItem", position: 2, name: "Simulator Poker", item: `${SITE}/ms/win-rate-quiz` },
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
      <HubPage title="Simulator Poker" locale="ms">
        <WinRateQuizClientMs />
      </HubPage>
    </>
  );
}
