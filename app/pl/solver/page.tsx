import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { OG_IMAGE } from "@/lib/page-metadata";
import HubPage from "@/components/hub-page";
import SolverClientPl from "./solver-client";
import SolverReviews from "@/components/solver-reviews/solver-reviews";
import { SOLVER_FAQ_PL } from "./faq";

/**
 * `/pl/solver` — 폴란드어 솔버 랜딩. ★2026-10-17 신설(17번째 랜딩 · 솔버 pl 라이브 S-106 10-17).
 * 마스터 = `app/en/solver/*`(구조·SPEC·FEATURES·COMPARE·SPOT_GROUPS·FAQ 문항). 추가 문항 골격 = `app/it/solver/faq.ts`(ru 선례).
 *
 * 🔴 키워드(정본 `docs/keyword-bank/pl-tools.md` §1·§6 · DFS 2616 Poland · pl · 10-17):
 *   gto poker 140 · poker solver 50 · solver poker 20 · gto solver 10 · solver gto 10 · poker solver free 10 (브랜드 gto wizard 1.000 = 비교 문맥만).
 *   SERP «gto poker» = 폴란드어 원문 pokertexas 2018 1편 → «Co oznacza GTO w pokerze?» H2 · SERP «poker solver» = 폴란드어 웹 원문 0
 *   (앱 스토어 설명 1) → 훅 = «za darmo · w przeglądarce · bez instalacji · open source».
 * 🔴 용어 = `docs/translation-terms-pl.md`(Solver·GTO 영어 유지 + 폴란드어 굴절 solvera·solverze · ty체 · 숫자 1 755 · 2,5 · 0,35% ·
 *   street 남성 굴절 · Zasada 2 i 4 · Kwota sprawdzenia). 솔버 화면 라벨 인용만 솔버 글자(Ustawienia drzewa · Trener GTO · Zadanie dnia 등 —
 *   S-105 «본체 정본과 다르게 간 자리») — 추출 = `docs/solver-app-verbatim-pl-2026-10-17.md`.
 * 링크: pl 도구 4(hand-chart·calculator·win-rate-quiz·glossary) + pl 글 2. GTO 예제 글·equity·c-bet·strategy 글은 pl에 없다
 *   → SPOT_GROUPS slug 비움(이름·요약만) · EN equity/c-bet/strategy 자리는 /pl/glossary · betting-actions · rules 글로(it 선례).
 */

const TITLE = "Solver GTO poker za darmo — licz spoty w przeglądarce | HoldemMaster";
const DESCRIPTION =
  "Darmowy solver GTO do pokera bez pobierania i rejestracji. Licz spoty postflop w przeglądarce: strategia, EV, equity i EQR dla każdej ręki.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 전 랜딩 파일이 완전히 같은 hreflang 세트여야 한다 — "pl-PL"은 기존 16파일에도 같이 단다(2026-10-17 추가).
  alternates: {
    canonical: `${SITE}/pl/solver`,
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
      "it-IT": `${SITE}/it/solver`,
      "pl-PL": `${SITE}/pl/solver`,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
  openGraph: {
    title: "Darmowy solver GTO — HoldemMaster",
    description:
      "Licz spoty postflop prosto w przeglądarce. Strategia, EV, equity i EQR dla wszystkich 169 rąk — za darmo i bez instalowania czegokolwiek.",
    url: `${SITE}/pl/solver`,
    siteName: "HoldemMaster",
    locale: "pl_PL",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Solver GTO HoldemMaster" }],
  },
};

/**
 * 🔴 `featureList`는 EN과 같은 사실만 — 전부 `solver-client.tsx`의 FEATURES 표에도 문장으로 있다.
 *    한쪽만 고치지 말 것. `offers` price 0 = FAQ «Czy ten solver GTO jest naprawdę darmowy?»와 같은 주장.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Darmowy solver GTO — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/pl/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pl",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Częstotliwości zakładu, czeku i pasa dla wszystkich 169 rąk w siatce 13×13",
        "Equity, EV i realizacja equity (EQR) dla każdej ręki",
        "Własne zakresy, board, stack i drzewo decyzyjne, z sizingami zakładów i przebić",
        "Rake i rake cap oraz edycja drzewa węzeł po węźle",
        "Node locking — blokujesz częstotliwości akcji w węźle i liczysz od nowa",
        "Policzone przez ciebie spoty stają się pytaniami trenera (tylko na tym urządzeniu)",
        "Tryb precyzji (32-bit float / 16-bit int) i docelowa exploitability",
        "Gotowe, policzone przykłady, które otwierają się od razu",
        "Przegląd flopów — wstępnie policzone strategie flopa dla wybranego spotu, pozycji i boardu (tylko flop, stałe sizingi)",
        "Statystyki flopów — średnia częstotliwość zakładu i EV na 1 755 wstępnie policzonych flopach (ważonych częstością), porównane według grup boardów",
        "Trener GTO, który ocenia decyzje według EV loss w stosunku do puli",
        "Trening RNG w Trenerze GTO — przy każdej ręce liczba od 1 do 100 wskazuje, którą akcję wybrać, żeby ćwiczyć strategie mieszane (wysokie/niskie; nie działa w Zadaniu dnia ani w zakładce „Moje spoty”)",
        "Eksport podsumowania do CSV i link do udostępnienia spotu",
        "Działa w przeglądarce dzięki WebAssembly — nic do instalowania, bez konta",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_PL.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Strona główna", item: `${SITE}/pl` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/pl/solver` },
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
      <HubPage title="Solver GTO" locale="pl">
        <SolverClientPl reviews={<SolverReviews locale="pl" />} />
      </HubPage>
    </>
  );
}
