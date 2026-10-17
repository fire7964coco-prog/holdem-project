import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientRu from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 러시아어(ru-RU)판 승률 시뮬레이터 (2026-10-13 신설 · 언어 확대 1차 회차 L1 마지막 언어 · 한 세션 = 한 언어).
 * 정본 구조 = `app/en/win-rate-quiz/page.tsx`(형제 = es·de·pt·fr·id·ms·vi·tr·hi). 엔진·테이블 UI는 전 언어 공용 — 숫자 동일(§13).
 *
 * 헤드텀 실측 — DataForSEO Google Ads search_volume live · 2026-10-13 · language ru · 지역 무지정(러시아어권 합산 —
 *   러시아 2643은 DFS 밖이라 대리 측정 · `docs/keyword-bank/ru-calculator.md` 머리 절과 같은 방식)
 *   | 키워드                        | 볼륨 |
 *   | обучение покеру              | 390  | ← 참고(강좌·스쿨 의도 · 이 페이지 몫 아님)
 *   | научиться играть в покер     | 210  | ← 참고(규칙 의도)
 *   | покер обучение               | 210  | ← 참고(강좌 의도)
 *   | покер с ботами               | 210  | ← 🔴 게임(봇 상대 플레이) 의도 · 제목·메타 제외
 *   | покерный тренажер · покер тренажер | 110 | ← 머리어 · 12개월 70~140 안정
 *   | симулятор покера             | 50   | ← 보조 머리어(메타 첫 구)
 *   | покер без денег              | 50   | ← 게임 의도 · 제외
 *   | покерный симулятор · покер симулятор · тренажер покера | 30 |
 *   | тренировка покер · покер тренировка 20 · симулятор покера онлайн · тест по покеру · техасский холдем симулятор 10 · покер квиз·симулятор холдема 데이터 없음
 *   SERP «покерный тренажер»(google.kz · ru · desktop): pokeroff(PreflopHero 설치 소프트) · reddit ×2 · YouTube(Simple GTO Trainer) ·
 *     rangecraftpoker(앱) · pokerful(글) · Google Play ×2 · poker.ru(설치 소프트) · pokerstrategy 포털 → 설치형 GTO·프리플랍 트레이너뿐 ·
 *     브라우저에서 바로 되는 핸드 시뮬레이터 0.
 *   ⇒ 제목 머리 = «Покерный тренажёр»(+ «онлайн» = 설치 소프트와 갈라 줌) · 메타 첫 구 = «симулятор покера» · 질문 꼬리 «где нужно было сбросить?».
 *   «Калькулятор·шансы»는 /ru/calculator 소유라 제목에 쓰지 않는다(그쪽 사전에 «тренаж»·«симулят» 0회 · 10-13 grep).
 *   🔴 «с ботами»·«без денег»(게임) · 돈·베팅 권유로 읽히는 말은 제목·메타에 넣지 않는다.
 *   근거 묶음 = docs/keyword-bank/win-rate-quiz-ltr.md §ru.
 * OG locale ru_RU · inLanguage ru · priceCurrency USD — /ru/calculator와 같은 판단.
 */
const TITLE = "Покерный тренажёр онлайн: где нужно было сбросить? | HoldemMaster";
const DESCRIPTION =
  "Бесплатный симулятор покера: играй раздачи 6-max или 9-max, не видя карт соперников, — эквити на каждой улице, пот-оддсы с флопа и разбор, где стоило сбросить.";
const OG_DESCRIPTION =
  "Карты соперников скрыты, как за настоящим столом. Смотри своё эквити на каждой улице и пот-оддсы с флопа, а потом разбери, где нужно было сбросить.";

export const metadata: Metadata = {
  // absolute — 루트 layout의 title.template("%s | 홀덤마스터")이 붙지 않게.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/ru/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/ru/win-rate-quiz`,
    title: TITLE,
    description: OG_DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "ru_RU",
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
      name: "Покерный тренажёр",
      description: DESCRIPTION,
      url: `${SITE}/ru/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ru",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Раздача за раздачей за столом 6-max или на 9 игроков (на флопе 2–6 игроков) — карты соперников скрыты",
        "Твоё эквити на каждой улице",
        "Нужные пот-оддсы начиная с флопа",
        "Разбор после раздачи: где нужно было сбросить",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/ru` },
        { "@type": "ListItem", position: 2, name: "Покерный тренажёр", item: `${SITE}/ru/win-rate-quiz` },
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
      <HubPage title="Покерный тренажёр" locale="ru">
        <WinRateQuizClientRu />
      </HubPage>
    </>
  );
}
