import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { OG_IMAGE } from "@/lib/page-metadata";
import HubPage from "@/components/hub-page";
import SolverClientIt from "./solver-client";
import SolverReviews from "@/components/solver-reviews/solver-reviews";
import { SOLVER_FAQ_IT } from "./faq";

/**
 * `/it/solver` — 이탈리아어 솔버 랜딩. ★2026-10-17 신설(16번째 랜딩 · 솔버 it 라이브 S-104 10-17).
 * 마스터 = `app/en/solver/*`(구조·SPEC·FEATURES·COMPARE·SPOT_GROUPS·FAQ 문항). 추가 문항 골격 = `app/ru/solver/faq.ts`.
 *
 * 🔴 키워드(정본 `docs/keyword-bank/it-tools.md` §1·§6 · DFS 2380 Italy · it · 10-17):
 *   gto poker 480 · solver poker 90 · poker solver 70 · gto solver 40 · solver poker gratis 30 (브랜드 gto wizard 5.400 = 비교 문맥만).
 *   SERP «gto poker» = 정의 의도 6/10 → «Cosa significa GTO nel poker?» H2 · SERP «solver poker» = 이탈리아어 원문 페이지 0
 *   (reddit 번역·영어 페이지뿐) → 훅 = «gratis · nel browser · senza installare · open source».
 *   🔴 경쟁 일부의 «teoria dei giochi ottimale» 오역(최적인 것은 전략) → 본문·FAQ에서 경쟁사 이름 없이 바로잡는다.
 * 🔴 용어 = `docs/translation-terms-it.md`(Solver·GTO 영어 유지 · risolutore 금지 · tu체 · 숫자 1.755 · 2,5 · 0,35%).
 *   솔버 화면 라벨 인용만 솔버 글자(albero di gioco 등 · 정본 «솔버 추가» 절) — 추출 = `docs/solver-app-verbatim-it-2026-10-17.md`.
 * 링크: it 도구 4(hand-chart·calculator·win-rate-quiz·glossary) + it 규칙 글. GTO 예제 글·equity·c-bet·strategy 글은 it에 없다
 *   → SPOT_GROUPS slug 비움(이름·요약만) · EN equity/c-bet/strategy 자리는 /it/glossary · azioni · regole 글로.
 */

const TITLE = "Solver poker GTO gratis — calcola gli spot nel browser | HoldemMaster";
const DESCRIPTION =
  "Solver GTO gratis per il poker, senza download né registrazione. Calcola gli spot postflop nel browser: strategia, EV, equity ed EQR per ogni mano.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // 🔴 전 랜딩 파일이 완전히 같은 hreflang 세트여야 한다 — "it-IT"는 기존 15파일에도 같이 단다(2026-10-17 추가).
  alternates: {
    canonical: `${SITE}/it/solver`,
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
    title: "Solver GTO gratis — HoldemMaster",
    description:
      "Calcola gli spot postflop direttamente nel browser. Strategia, EV, equity ed EQR per tutte le 169 mani — gratis e senza installare nulla.",
    url: `${SITE}/it/solver`,
    siteName: "HoldemMaster",
    locale: "it_IT",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "HoldemMaster GTO solver" }],
  },
};

/**
 * 🔴 `featureList`는 EN과 같은 사실만 — 전부 `solver-client.tsx`의 FEATURES 표에도 문장으로 있다.
 *    한쪽만 고치지 말 것. `offers` price 0 = FAQ «Questo solver GTO è davvero gratis?»와 같은 주장.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver GTO gratis — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/it/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "it",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Frequenze di puntata, check e fold per tutte le 169 mani nella griglia 13×13",
        "Equity, EV e realizzazione dell’equity (EQR) per ogni mano",
        "Range, board, stack e albero di gioco personalizzati, con le dimensioni di puntata e di rilancio",
        "Rake e rake cap, più la modifica dell’albero nodo per nodo",
        "Node locking — fissi le frequenze delle azioni in un nodo e ricalcoli",
        "I tuoi spot calcolati diventano domande del trainer (solo su questo dispositivo)",
        "Modalità di precisione (float a 32 bit / intero a 16 bit) ed exploitability obiettivo",
        "Esempi già calcolati che si aprono subito",
        "Studio dei flop — strategie del flop precalcolate per lo spot, le posizioni e il board che scegli (solo flop, dimensioni di puntata fisse)",
        "Statistiche flop — frequenza di puntata ed EV medi su 1.755 flop precalcolati (pesati per frequenza), confrontati per gruppi di board",
        "Trainer GTO che valuta le decisioni in base all’EV loss rispetto al piatto",
        "Allenamento RNG nel Trainer GTO — a ogni mano un numero da 1 a 100 indica quale azione scegliere, per esercitarti sulle strategie miste (High/Low; non usato nel Sfida del giorno né in «I miei spot»)",
        "Esportazione del riepilogo in CSV e link per condividere lo spot",
        "Funziona nel browser con WebAssembly — niente da installare, nessun account",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_IT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/it` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/it/solver` },
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
      <HubPage title="Solver GTO" locale="it">
        <SolverClientIt reviews={<SolverReviews locale="it" />} />
      </HubPage>
    </>
  );
}
