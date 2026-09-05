import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientEn from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_EN } from "./faq";

/**
 * `/en/solver` — 한국어 `/solver`의 영어판. ★2026-08-19 신설(T24).
 * 정본 구조 = `app/en/calculator/page.tsx`(영어 도구 페이지 선례) + `app/solver/page.tsx`(내용).
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다 — 검색은 이 랜딩이 전담하고 본체로
 *   흘려보낸다. 영어권에 그 진입로가 하나도 없던 것을 여는 페이지다.
 *
 * 🔴 키워드 실측(2026-08-19 · 라쿠 English/United States): poker solver 1,600 ·
 *   gto solver 390(+12.3%) · gto poker solver 260 · poker solver free 260 · free poker solver 210.
 *   근거와 «쓰지 않기로 한 것»은 `docs/keyword-bank/en-gto-solver.md`.
 */

const TITLE = "Free GTO Solver — Poker Solver in Your Browser | HoldemMaster";
const DESCRIPTION =
  "Free GTO poker solver that runs in your browser: no download, no signup, no limits. Solve postflop spots and read strategy, EV, equity and EQR per hand.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  // ★2026-08-21 — `/ja/solver` 신설로 **3개로 늘렸다.**
  //   🔴 세 파일이 **완전히 같은 문자열 세트**를 선언해야 한다 — `check-hreflang`이
  //      문자열 일치로 세트를 묶으므로, 한 곳만 고치면 `[세트 불일치]`로 빌드가 선다.
  //      고칠 때는 반드시 `app/solver` · `app/en/solver` · `app/ja/solver` **셋을 함께.**
  alternates: {
    canonical: `${SITE}/en/solver`,
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      // ★2026-08-22 — `/es/solver` 신설. **네 랜딩이 같은 세트**여야 게이트를 통과한다.
      "es-ES": `${SITE}/es/solver`,
      // ★ 2026-08-23 — `/pt/solver` 신설. **다섯 랜딩이 같은 세트**여야 게이트를 통과한다.
      "pt-BR": `${SITE}/pt/solver`,
      // ★ 2026-08-24 — `/de/solver` 신설. **여섯 랜딩이 같은 세트**여야 게이트를 통과한다.
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
      // ★ 2026-08-24 — `/zh-hant/solver` 신설. **여덟 랜딩이 같은 세트**여야 게이트를 통과한다.
      "zh-Hant": `${SITE}/zh-hant/solver`,
      // ★ 2026-08-24 — `/fr/solver` 신설(같은 날 두 번째). **아홉 랜딩이 같은 세트**여야 한다.
      "fr-FR": `${SITE}/fr/solver`,
      // ★2026-09-05 — `/id/solver` 신설(10번째). 🔴 열 파일이 «같은 세트»를 선언해야 한다.
      "id-ID": `${SITE}/id/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Free GTO Solver — HoldemMaster",
    description:
      "Solve postflop spots in your browser. Strategy, EV, equity and EQR for all 169 hands — free, with nothing to install.",
    url: `${SITE}/en/solver`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 전부 2026-08-19에
 *    `solver.holdemmaster.com/?lang=en`을 열어 확인했다.
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx`의 기능 표에도 문장으로 있다. **한쪽만 고치지 말 것.**
 * 🔴 `offers` price 0 — FAQ "Is this GTO solver really free?"의 주장과 같다.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Free GTO Solver — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/en/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "en",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Bet, check and fold frequencies for all 169 hands on a 13×13 grid",
        "Per-hand equity, EV and equity realization (EQR)",
        "Custom ranges, board, stacks and bet sizing tree",
        "Rake and rake cap, plus node-by-node game tree editing",
        "Precision modes (32-bit float / 16-bit integer) and target exploitability",
        "Pre-solved study spots that open instantly",
        "GTO Trainer that grades decisions by EV loss relative to the pot",
        "CSV export of the summary and shareable spot links",
        "Runs in the browser via WebAssembly — no install, no account",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_EN.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/en` },
        { "@type": "ListItem", position: 2, name: "GTO Solver", item: `${SITE}/en/solver` },
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
      <HubPage title="GTO Solver" locale="en">
        <SolverClientEn />
      </HubPage>
    </>
  );
}
