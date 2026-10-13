import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_RU } from "./dict";
import { CALCULATOR_FAQ_RU } from "./faq";

/**
 * `/ru/calculator` — 러시아어 계산기 랜딩. ★2026-10-13 신설(ru 계산기 회차 · 골격 = app/vi/calculator/page.tsx 10-07 선례).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_RU) · `faq.ts`(CALCULATOR_FAQ_RU).
 *   정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 * 🔴 머리어 = 키릴 «покерный калькулятор»(러시아어권 1,000 · vi·hi와 달리 자국어 머리어가 볼륨을 가진다) —
 *   러시아 본토는 측정 도구 밖이라 대리 측정. 근거 = docs/keyword-bank/ru-calculator.md · 용어 근거는 dict.ts 머리 주석.
 * HubPage title = «Покерный калькулятор» = 사이드 레일 라벨 = 글 우측 CTA title.
 */
// 🔴 title/description은 CALC_DICT_RU.seo에서 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓴다(check:seo-sync).
const TITLE = `${CALC_DICT_RU.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_RU.seo.description;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 keywords 메타는 넣지 않는다 — 사이트 전역에서 의도적으로 제거했다(f12ae9e2 · scripts/check-meta-lang.mjs 머리 주석).
  //    표적어 покерный калькулятор(+онлайн)는 title·h1에, эквити·ауты·ICM은 title·탭·본문 어휘로 들어 있다.
  alternates: {
    canonical: `${SITE}/ru/calculator`,
    languages: CALCULATOR_ALTERNATES,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Покерный калькулятор — HoldemMaster",
    description: DESCRIPTION,
    url: `${SITE}/ru/calculator`,
    siteName: "HoldemMaster",
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Покерный калькулятор" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Покерный калькулятор и ICM-калькулятор",
      url: `${SITE}/ru/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ru",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1.
      featureList: [
        "Калькулятор эквити (рука против руки)",
        "Калькулятор аутов",
        "Калькулятор пот-оддсов и подразумеваемых шансов",
        "Определение комбинации",
        "Сила стартовых рук",
        "Калькулятор SPR (отношение стека к банку)",
        "Калькулятор M-фактора в турнире",
        "Калькулятор ICM (Independent Chip Model)",
        "Таблица пуш-фолд по Нэшу",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: `${SITE}/ru` },
        { "@type": "ListItem", position: 2, name: "Покерный калькулятор", item: `${SITE}/ru/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_RU.map((f) => ({
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
      <HubPage title="Покерный калькулятор" locale="ru">
        <CalculatorTool locale="ru" dict={CALC_DICT_RU} faq={CALCULATOR_FAQ_RU} />
      </HubPage>
    </>
  );
}
