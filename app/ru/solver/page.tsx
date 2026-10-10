import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { OG_IMAGE } from "@/lib/page-metadata";
import HubPage from "@/components/hub-page";
import SolverClientRu from "./solver-client";
import SolverReviews from "@/components/solver-reviews/solver-reviews";
import { SOLVER_FAQ_RU } from "./faq";

/**
 * `/ru/solver` — 러시아어 솔버 랜딩. ★2026-10-10 신설(15번째 랜딩 · 솔버 ru 라이브 S-049 10-09).
 * 마스터 = `app/en/solver/*`(구조·SPEC·FEATURES·COMPARE·SPOT_GROUPS·FAQ 문항). 골격 = `app/vi/solver/*`(10-09).
 *
 * 🔴 키워드(정본 `docs/keyword-bank/ru-gto-solver.md`): 러시아 본토 볼륨·SERP는 측정 불가(DFS·라쿠에 RU 없음) →
 *   대리 = KZ·UA·지역 무지정 볼륨 + google.kz 러시아어 SERP + Yandex 자동완성(모스크바).
 *   1차 `солвер покер`(Yandex·구글 자동완성 1번 축 · 꼬리 `онлайн`·`бесплатно`·`скачать`) → 제목·H1은 변형 «покерный солвер»·«солвер для покера».
 *   🔴 오염: `гто` 단독 = 체력검정 ГТО(246,000) → «GTO/ГТО»는 반드시 «покер»와 붙인다 · `солвер` 단독 = 멘토링·소설 ·
 *   `ренджи` = 블리치 캐릭터 · `эквити` = 재무. 실시간 보조(помощник·RTA)·실머니·합법성 축은 조준 금지(뱅크 §1-⑤).
 *   훅 = «бесплатно · онлайн в браузере · без скачивания · без регистрации»(네 개를 함께 내세운 러시아어 페이지 0 · 뱅크 §5-C ③).
 * 🔴 ru에는 도구·GTO 예제 글·strategy·equity·c-bet 글이 없다(뱅크 §6 · hi·vi 선례 ⓐ «링크 빈자리를 안고 랜딩 먼저»).
 *   내부링크 = 앱 진입 + ru 규칙 글 6편 + `/ru` 홈. ru 도구·GTO 글이 생기면 PICK_TOOL·SPOT_GROUPS `slug`를 채운다.
 * 솔버 앱 러시아어 UI = 라이브 ?lang=ru 축어(`docs/solver-app-verbatim-ru-2026-10-10.md`).
 */

const TITLE = "Покерный солвер онлайн бесплатно — GTO прямо в браузере | HoldemMaster";
const DESCRIPTION =
  "Бесплатный покерный солвер онлайн — без скачивания и регистрации. Считай постфлоп-споты в браузере: стратегия, EV, эквити и EQR для каждой руки.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 전 랜딩 파일이 완전히 같은 hreflang 세트여야 한다 — "ru-RU"는 기존 14파일에도 같이 단다(2026-10-10 추가).
  alternates: {
    canonical: `${SITE}/ru/solver`,
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      "pt-BR": `${SITE}/pt/solver`,
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
      "zh-Hant": `${SITE}/zh-hant/solver`,
      "fr-FR": `${SITE}/fr/solver`,
      "id-ID": `${SITE}/id/solver`,
      "ms-MY": `${SITE}/ms/solver`,
      "hi-IN": `${SITE}/hi/solver`,
      "tr-TR": `${SITE}/tr/solver`,
      "vi-VN": `${SITE}/vi/solver`,
      "ru-RU": `${SITE}/ru/solver`,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  openGraph: {
    title: "Бесплатный покерный солвер — HoldemMaster",
    description:
      "Считай постфлоп-споты прямо в браузере. Стратегия, EV, эквити и EQR для всех 169 рук — бесплатно и без установки.",
    url: `${SITE}/ru/solver`,
    siteName: "HoldemMaster",
    locale: "ru_RU",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HoldemMaster GTO solver" }],
  },
};

/**
 * 🔴 `featureList`는 EN과 같은 사실만 — 전부 `solver-client.tsx`의 FEATURES 표에도 문장으로 있다.
 *    한쪽만 고치지 말 것. `offers` price 0 = FAQ «Солвер правда бесплатный?»와 같은 주장.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Бесплатный покерный солвер — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/ru/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ru",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Частоты бета, чека и фолда для всех 169 рук в матрице 13×13",
        "Эквити, EV и реализация эквити (EQR) для каждой руки",
        "Свои диапазоны, борд, стеки и дерево розыгрыша с сайзингами бетов и рейзов",
        "Рейк и потолок рейка, правка дерева по отдельным узлам",
        "Нодлок — фиксация частот действий в узле и пересчёт",
        "Свои рассчитанные споты превращаются в вопросы тренажёра (только на этом устройстве)",
        "Режим точности (32-бит с плавающей точкой / 16-бит целое) и целевая exploitability",
        "Учебные споты, рассчитанные заранее, открываются сразу",
        "GTO-тренажёр с оценкой по потере EV относительно банка",
        "Экспорт сводки в CSV и ссылка на спот",
        "Работает в браузере на WebAssembly — без установки и без аккаунта",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_RU.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/ru` },
        { "@type": "ListItem", position: 2, name: "GTO-солвер", item: `${SITE}/ru/solver` },
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
      <HubPage title="GTO-солвер" locale="ru">
        <SolverClientRu reviews={<SolverReviews locale="ru" />} />
      </HubPage>
    </>
  );
}
