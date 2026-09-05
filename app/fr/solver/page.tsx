import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientFr from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_FR } from "./faq";

/**
 * `/fr/solver` — 9번째 다국어 솔버 랜딩(ko·en·ja·es·pt·de·zh·zh-hant·fr).
 * ★2026-08-24 신설 — **솔버 앱이 fr을 배포한 «당일»** 개설(사장님 통보 → 라이브 실측).
 * 정본 구조 = `app/zh-hant/solver/page.tsx`(직전 회차). 내용은 **번역이 아니라 프랑스
 * 실검색으로 재조준**했다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **프랑스어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=fr`로 **완역돼 있다**(2026-08-24 Playwright 실측 · `<html lang="fr">` ·
 *      title 「HoldemMaster GTO Trainer — Solver et trainer GTO gratuits pour le Texas Hold'em」
 *      — 🔴 9언어 중 유일하게 «GTO Trainer» 선두).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어다. JS를 돌리는 도구로 볼 것.
 *
 * 🔴 키워드 실측(2026-08-24 · 라쿠 France/French requestId 1255949 · 48개월 — ⚠ DFS 인증 만료로
 *   단일 벤더. 전체 = `docs/keyword-bank/fr-gto-solver.md`):
 *   **어순 정본 = `solver poker`**(320 대 `poker solver` 90 — es와 같고 de·zh와 반대) ·
 *   `gto poker` 480 · **`solver poker gratuit` 110**(🟢 무료 축이 문자열로 실재 — 훅=조준축) ·
 *   `range poker` 1,600 · `calculateur poker` 390 · `gto solver` 50 · `solveur poker` 50.
 *
 * 🔴 **오염어 둘**: `GTO` 단독 = 자동차(Ferrari 250 GTO)·아니메 · **`solveur`/`solver` 단독 =
 *   Excel·수학·스도쿠·스크래블**(`solveur` 2,900은 전부 남의 것 — 서제스트 실증).
 *   → 제목·H1·H2에서 반드시 poker와 붙인다.
 *
 * 🔴 카니발 — **fr 코퍼스는 규칙 클러스터 6편뿐**(뱅크 §3): GTO·solver·range·equity 축 전부
 *   무주공산 → 랜딩이 가져간다. 입문·règles 축 = `fr/texas-holdem-rules-for-beginners` 소유 —
 *   FAQ가 핸드오프. 표준 내부링크 9종이 fr에 없어 링크는 실존 6편으로만(fr 코퍼스 확장 때 보강).
 * ❌ `simulateur poker`(170) 조준 금지 — 게임 의도 의심(FAQ가 가른다) · RTA·봇 축 금지.
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다:
//    ① «Solver Poker GTO» 한 문자열이 `solver poker`(어순 정본)와 `poker gto`를 함께 덮는다
//    ② `GTO`도 `Solver`도 단독으로 두지 않는다(자동차·아니메 / Excel·수학 오염 회피)
//    ③ 훅 = «Gratuit + dans ton navigateur + sans téléchargement ni inscription» — 설치형
//      무료(TexasSolver)·구독 웹(GTO Wizard fr)·푸시폴드 한정(poktools) 사이의 빈자리.
//    🪶 «solver poker gratuit»(110)의 연속 문자열은 H1이 받는다(제목은 GTO 결합이 우선).
//    🪶 SEO 렌즈 반영(2026-08-25) — 초판 97자를 형제 랜딩 대역(~79자)으로 압축(표시폭에서
//       훅 후반·브랜드가 잘리던 것). «sans téléchargement»은 desc·본문이 유지한다.
const TITLE =
  "Solver Poker GTO Gratuit — dans ton navigateur, sans inscription | HoldemMaster";
// 🪶 ≤160자 · 훅(gratuit·navigateur·sans limite)과 키워드(solver poker · postflop · ranges)를
//    함께 싣는다. register = tu(앱·프랑스 커뮤니티 실측).
const DESCRIPTION =
  "Solver poker GTO gratuit, directement dans ton navigateur — sans téléchargement ni inscription. Calcule ta stratégie postflop : ranges, board et bet sizes.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            프랑스어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/fr/solver`,
    // 🔴 **열 랜딩이 «같은 문자열 세트»를 선언해야**(2026-09-05 `/id/solver` 신설로 9→10) `check:hreflang`의 세트 일치를 통과한다.
    //    fr을 열면서 기존 여덟 파일에도 `fr-FR`을 같이 넣었다 — 한쪽만 고치면 구글은 세트
    //    전체를 무시하고 게이트는 빌드를 세운다.
    //    표기는 기존 세트의 «지역 포함» 형식(ko-KR·en-US·…)에 맞춰 fr-FR로 통일했다.
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
      // ★2026-09-05 — `/id/solver` 신설(10번째). 🔴 열 파일이 «같은 세트»를 선언해야 한다.
      "id-ID": `${SITE}/id/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Solver Poker GTO Gratuit — HoldemMaster",
    description:
      "Calcule la stratégie GTO postflop directement dans ton navigateur. Fréquences, equity, EV et EQR pour les 169 mains de départ — rien à installer, pas de compte.",
    url: `${SITE}/fr/solver`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: fr → fr_FR (블로그 컨벤션과 동일).
    locale: "fr_FR",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-24에
 *    `solver.holdemmaster.com/?lang=fr`을 열어 DOM에서 직접 읽었다
 *    (`docs/solver-app-verbatim-fr-2026-08-24.md`). 트레이너 항목도 실측(«notés sur la perte
 *    d'EV par rapport au pot» 🟢 팟 대비 정정본).
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx` **본문**에 문장으로 있다. **한쪽만 고치지 말 것.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver Poker GTO Gratuit — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/fr/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "fr",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Fréquences de mise, de check et de fold des 169 mains de départ, dans une matrice 13×13",
        "Equity, EV et réalisation d'equity (EQR) main par main",
        "Ranges, board, stacks et arbre des tailles de mise librement réglables",
        "Rake et cap de rake, édition de l'arbre de décision nœud par nœud",
        "Modes de précision (flottant 32 bits / entier 16 bits) et exploitabilité cible",
        "Spots d'étude précalculés, résultats au clic",
        "Trainer GTO qui note tes décisions sur la perte d'EV par rapport au pot",
        "Onglets intégrés Charts préflop et calculateur d'Equity",
        "Export CSV du récapitulatif, lien de partage de spot",
        "Tourne dans le navigateur via WebAssembly — sans installation ni compte",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_FR.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE}/fr` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/fr/solver` },
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
      {/* 🪶 허브 타이틀 «Solver GTO» = 앱 fr title의 «Solver et trainer GTO»에서 딴 라벨
          (라벨은 «검색 축»이 아니라 «메뉴 이름» — 어순 규율과 층이 다르다). */}
      <HubPage title="Solver GTO" locale="fr">
        <SolverClientFr />
      </HubPage>
    </>
  );
}
