import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import WinRateQuizClientAr from "./win-rate-quiz-client";
import HubPage from "@/components/hub-page";
import { WIN_RATE_QUIZ_ALTERNATES } from "@/lib/win-rate-quiz-alternates";

/**
 * 아랍어(MSA)판 승률 시뮬레이터 (2026-10-14 신설 · tool-lanes 🅲 회차 2). 정본 = `app/en/win-rate-quiz/page.tsx` · 틀 = `app/zh-hant/win-rate-quiz/page.tsx`.
 *
 * 제목 판단 — DFS 실측(2026-10-14 · 2682 Saudi Arabia / 2818 Egypt · ar): poker simulator 10 · 10 · poker trainer 10 · 10 ·
 *   아랍어 시뮬레이터 구(محاكي البوكر · تدريب البوكر …) 전부 null(= 데이터 없음 · 수요 0 아님) · SERP «محاكي البوكر» = 앱 2 + 게임 · 아랍어 웹 연습 도구 0.
 *   → 영어 머리어 «Poker Simulator» + 아랍어 앵커 «محاكي البوكر»(SERP 스니펫 실사용형) — 회차 1 계산기·차트와 같은 «영어 머리어 + 아랍어 부제» 형.
 *   «حاسبة»·«احتمالات البوكر»·«نسبة الفوز»는 `/ar/calculator` 소유라 쓰지 않는다(카니발 회피) · «طريقة لعب»·«تعلم» = 입문 글 몫.
 *   상세 = docs/keyword-bank/ar-tools.md §5 · 브리프 = docs/tool-lanes/ar-tools-r2-brief.md.
 * OG locale = ar_AR(계산기·차트 랜딩과 같은 관례 · lib/intl.ts). RTL은 app/layout.tsx의 html dir가 맡는다.
 * FAQ 스키마 없음 — 화면에 문답이 없다(EN과 같음).
 */
const TITLE = "Poker Simulator — محاكي البوكر: تدرّب واعرف متى تطوي | HoldemMaster";
const DESCRIPTION =
  "هل كنت ستطوي في الوقت الصحيح؟ العب يدًا 6-max دون رؤية أوراق الخصوم، شاهد الإكويتي في كل جولة وبوت أودز من الفلوب، ثم راجع أين كان الطي هو القرار الصحيح.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE}/ar/win-rate-quiz`,
    languages: WIN_RATE_QUIZ_ALTERNATES,
  },
  openGraph: {
    type: "website",
    url: `${SITE}/ar/win-rate-quiz`,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "HoldemMaster",
    locale: "ar_AR",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630 }],
  },
  // twitter를 안 주면 루트 layout의 한국어가 나가고, images는 상속되지 않는다.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "محاكي البوكر",
      description: DESCRIPTION,
      url: `${SITE}/ar/win-rate-quiz`,
      applicationCategory: "GameApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ar",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "العب يدًا على طاولة 6-max أو 9-max دون رؤية أوراق الخصوم، جولة بعد جولة (2–6 لاعبين)",
        "الإكويتي لديك في كل جولة",
        "بوت أودز المطلوبة للمجاراة من الفلوب",
        "مراجعة بعد اليد لنقطة الطي الصحيحة",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${SITE}/ar` },
        { "@type": "ListItem", position: 2, name: "محاكي البوكر", item: `${SITE}/ar/win-rate-quiz` },
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
      <HubPage title="محاكي البوكر" locale="ar">
        <WinRateQuizClientAr />
      </HubPage>
    </>
  );
}
