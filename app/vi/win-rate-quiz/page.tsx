import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientVi from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 베트남어(vi-VN)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr·id·ms). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · location 2704 Vietnam(language 생략)
 *   | 키워드                     | 볼륨 |
 *   | cách chơi poker           | 2.900 |  ← 참고(규칙 의도 · 이 페이지 몫 아님)
 *   | game poker                | 720  |  ← 참고(게임 의도 · CPC 3,65 = 카지노 광고판)
 *   | poker simulator           | 40   |  ← 머리어 · «simulator poker»와 12개월 시계열 완전 동일(같은 군 · 30~70)
 *   | chơi poker online miễn phí 40 · học poker 30 · poker equity 30 · pot odds 20 |
 *   | poker trainer · poker training · poker quiz · poker practice · texas holdem simulator · tập chơi poker | 각 10 |
 *   | mô phỏng poker · giả lập poker · luyện poker · luyện tập poker · tính equity poker | 데이터 없음 |
 *   SERP «poker simulator»(mobile · vi · Vietnam): 영어 글로벌 판 — 훈련형 3(pokertrainer.se 퀴즈 · Upswing 2) + 게임 5(kosmi · Pokerist 2 ·
 *     optimuspoker · Zynga) + AI 챗 1(shapes.inc) · 베트남어 페이지 0.
 *   ⇒ 제목 머리 = 영어 «Poker Simulator»(vi 계산기 «Poker Calculator»와 같은 판단 — 베트남어 도구 어휘 전멸) ·
 *     훈련 의도는 «để luyện tập»(볼륨 미측정 · 게임 SERP와 구분용) · «equity»는 설명·본문.
 *   «Calculator»·«xác suất»는 /vi/calculator 소유라 제목에 쓰지 않는다(그쪽 메타·사전에 «simulator» 0회 · 10-13 grep).
 *   🔴 «game poker»·«chơi poker online miễn phí»는 도박 게임 의도 — 제목·메타에 넣지 않는다.
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §vi.
 * OG locale vi_VN · inLanguage vi · priceCurrency USD — /vi/calculator와 같은 판단.
 */
const TITLE = "Poker Simulator để luyện tập: lẽ ra bạn nên fold ở đâu? | HoldemMaster";
const DESCRIPTION =
  "Chơi một ván 6-max mà không thấy bài đối thủ, như ở bàn thật: equity của bạn ở mỗi vòng cược, pot odds từ flop trở đi và lẽ ra bạn nên fold ở đâu.";
const OG_DESCRIPTION =
  "Bài đối thủ luôn úp, như khi chơi poker thật. Theo dõi equity qua từng vòng cược và pot odds từ flop trở đi, rồi xem lại lẽ ra bạn nên fold ở đâu.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/vi/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/vi/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "vi_VN",
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
      name: "Poker Simulator để luyện tập",
      description: DESCRIPTION,
      url: `${SITE}/vi/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "vi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Chơi một ván ở bàn 6-max hoặc 9 người (2 đến 6 người chơi) mà không thấy bài đối thủ, qua từng vòng cược",
        "Equity của bạn ở mỗi vòng cược",
        "Pot odds cần có từ flop trở đi",
        "Xem lại sau ván: lẽ ra bạn nên fold ở đâu",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${SITE}/vi` },
        { "@type": "ListItem", position: 2, name: "Poker Simulator", item: `${SITE}/vi/win-rate-quiz` },
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
      <HubPage title="Poker Simulator" locale="vi">
        <WinRateQuizClientVi />
      </HubPage>
    </>
  );
}
