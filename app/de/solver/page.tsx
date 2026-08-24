import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientDe from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_DE } from "./faq";

/**
 * `/de/solver` — 6번째 다국어 솔버 랜딩(ko·en·ja·es·pt·de). ★2026-08-24 신설.
 * 정본 구조 = `app/pt/solver/page.tsx`(최신). 내용은 **번역이 아니라 독일 실검색으로 재조준**했다.
 * 대상은 **de-DE(독일)**다 — 측정도 전부 `location: Germany`다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **독일어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=de`로 **완역돼 있다**(2026-08-24 Playwright 실측 · `<html lang="de">` ·
 *      title 「HoldemMaster GTO Solver – Kostenloser Online-Solver für Texas Hold’em」).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어다. JS를 돌리는 도구로 볼 것.
 *
 * 🔴 키워드 실측(2026-08-24 · 라쿠 requestId 1255693 + DataForSEO Labs/SERP.
 *   전체는 `docs/keyword-bank/de-gto-solver.md`):
 *   **`gto poker`/`poker gto`/`gto in poker` 390 · SD 6~25**(최대 축) ·
 *   **`poker range`/`poker ranges` 320 · SD 6~11** · **`flop turn river` 390** ·
 *   **`poker solver` 140 · SD 11** · `poker trainer` 140 · SD 7 · `poker hand range` 70 ·
 *   `gto solver` 50 · `solver poker` 30 · `gto trainer` 20 · `gto poker bedeutung` 10(신생).
 *   🟢 **두 벤더가 볼륨에서 일치했다**(라쿠 대 DataForSEO **8/8**) — es 6/6·pt 5/5에 이은 세 번째.
 *
 * 🔴🔴 **어순이 pt와 반대다** — de는 `poker solver` 140 대 `solver poker` 30이다
 *   (pt는 `solver poker` 170이 컸다). **기본 어순은 `Poker Solver`.**
 *   ja→es→pt→de 네 번 연속으로 «물려받는 것은 규율이지 값이 아니다»가 실증됐다.
 *
 * 🔴 **`Solver` 단독 = 독일에서도 «Excel Solver»다**(pt와 같은 오염 · 같은 규율).
 *   `solver` SERP: 위키(1위)·마이크로소프트·SOLIDWORKS·기업명·영화. PAA 「Wie verwende ich
 *   Solver in Excel?」. → **제목·H1·H2에서 반드시 `Poker`/`GTO`와 붙인다.**
 *   🟢 **`GTO`는 깨끗하다**(es 과나후아토 같은 동음이의 없음) — 제목 맨 앞에 둘 수 있다.
 *
 * 🔴 **`kostenlos` 롱테일은 볼륨이 전부 null이다**(`gto poker kostenlos`·`poker solver kostenlos`
 *   등) — 무료 수요는 실재하나(SERP에 Reddit 「Beste (kostenlose) Poker Solver?」가 뜬다)
 *   문자열로는 안 잡힌다. **훅은 «kostenlos + im Browser + ohne Anmeldung» 조합**으로 —
 *   경쟁 top-10 제목에 이 조합이 없다(ja 「登録不要」 판정과 동형).
 *
 * 🔴 카니발 방지 — de 43편 전수 grep(뱅크 §4):
 *   · **프리플랍 표·차트 = `de/holdem-starting-hands-chart` 소유**(태그 `gto preflop charts` 명시).
 *     `poker charts` 390 · `preflop charts` 110 · `poker range chart` 50 전부 그쪽 자리다.
 *   · **`poker strategie` 1,300 = `de/holdem-strategy` 소유**(seoTitle+태그).
 *     ⚠ 그 글이 `gto poker`·`poker range` 태그도 달고 있으나 **본문 H2 14개 중 GTO 축 0** —
 *     명목 태그다(ja `holdem-strategy`와 동형). 랜딩이 **도구·포스트플랍 축**을 가져간다.
 *   · `poker rechner` 260 = 계산기 축 — de에 도구 페이지가 없다. 앱 내 Equity-Rechner 언급으로만.
 *   🟢 미소유 확인: `poker solver`·`gto solver`·`flop turn river`·`poker trainer` 0편.
 *
 * 🔴 **`poker simulator`(390)·`poker ohne anmeldung`(320)을 조준하지 마라** — SERP 실측에서
 *   의도가 «무료 게임»이다(각각 6/10·10/10). «ohne Anmeldung»은 카피 표현으로만 쓴다.
 * 🔴 **`poker bot`(170)·`rta poker`(40) 축 금지** — 부정행위 도구 검색이다. FAQ가 방어 문항으로 가른다.
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다:
//    ① `Solver`를 `Poker`와 붙인다(엑셀 회피) ② `GTO`는 de에서 깨끗하니 맨 앞에 둔다
//    ③ 훅은 «kostenlos – im Browser, ohne Anmeldung» — SERP top-10 제목 전부와 갈린다.
//    🪶 `Range`는 H1·H2가 받는다. 제목에 다 넣으면 훅이 죽는다.
const TITLE =
  "GTO Poker Solver kostenlos – im Browser, ohne Anmeldung | HoldemMaster";
// 🪶 표시폭은 다섯 랜딩과 같은 대역. 훅(ohne Installation/Anmeldung/Limit)과
//    키워드(poker solver · ranges · flop turn river · GTO)를 함께 싣는다.
const DESCRIPTION =
  "Kostenloser GTO Poker Solver im Browser – ohne Installation, ohne Anmeldung, ohne Limit. Berechne Poker Ranges auf Flop, Turn und River mit Equity, EV und EQR.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            독일어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/de/solver`,
    // 🔴 **여섯 랜딩이 «같은 문자열 세트»를 선언해야** `check-hreflang`의 세트 일치를 통과한다.
    //    de를 열면서 ko·en·ja·es·pt 다섯 파일에도 `de-DE`를 같이 넣었다 — 한쪽만 고치면
    //    구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    ⚠ `de`(무지역)나 `de-AT`로 쓰지 마라 — 세트가 갈라지고, 우리 정본은 독일이다.
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      "pt-BR": `${SITE}/pt/solver`,
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
      // ★ 2026-08-24 — `/zh-hant/solver` 신설. **여덟 랜딩이 같은 세트**여야 게이트를 통과한다.
      "zh-Hant": `${SITE}/zh-hant/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Kostenloser GTO Poker Solver – HoldemMaster",
    description:
      "Berechne die GTO-Strategie nach dem Flop direkt im Browser. Frequenzen, Equity, EV und EQR aller 169 Hände – ohne Installation und ohne Konto.",
    url: `${SITE}/de/solver`,
    siteName: "HoldemMaster",
    locale: "de_DE",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-24에
 *    `solver.holdemmaster.com/?lang=de`를 열어 DOM에서 직접 읽었다.
 *    🟢 트레이너 항목도 DOM 실측이다 — de 화면이 이미 «benotet nach EV-Verlust im Verhältnis
 *       zum Pot»로 정정본이다(pt와 같은 상태 · es만 아직 옛 문구였다).
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx` **본문**(직답 단락·READ_SCREEN·기능 표 중 한 곳)에
 *    문장으로 있다. **한쪽만 고치지 말 것.** ⚠ 「기능 표에만」이 아니다 — #1(13×13 빈도)·
 *    #2(EQR Hand für Hand)는 직답·READ_SCREEN이 담는다(정합성 렌즈 판정 2026-08-24).
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Kostenloser GTO Poker Solver – HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/de/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "de-DE",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      featureList: [
        "Bet-, Check- und Fold-Frequenzen aller 169 Hände in einer 13×13-Matrix",
        "Equity, EV und Equity-Realisierung (EQR) Hand für Hand",
        "Ranges, Board, Stack und Bet-Size-Baum frei konfigurierbar",
        "Rake und Rake-Cap sowie Spielbaum-Bearbeitung Knoten für Knoten",
        "Präzisionsmodi (32-Bit-Float / 16-Bit-Integer) und Ziel-Exploitability",
        "Fertig gelöste Lernspots, die sich sofort öffnen",
        "GTO-Trainer, der Entscheidungen nach EV-Verlust im Verhältnis zum Pot benotet",
        "CSV-Export der Zusammenfassung und Teilen-Link für einen Spot",
        "Läuft mit WebAssembly im Browser – ohne Installation und ohne Konto",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_DE.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${SITE}/de` },
        { "@type": "ListItem", position: 2, name: "GTO Solver", item: `${SITE}/de/solver` },
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
      <HubPage title="GTO Solver" locale="de">
        <SolverClientDe />
      </HubPage>
    </>
  );
}
