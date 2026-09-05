import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientPt from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_PT } from "./faq";

/**
 * `/pt/solver` — `/solver`(ko)·`/en/solver`·`/ja/solver`·`/es/solver`의 포르투갈어판. ★2026-08-23 신설.
 * 정본 구조 = `app/es/solver/page.tsx`. 내용은 **번역이 아니라 브라질 실검색으로 재조준**했다.
 * 대상은 **pt-BR(브라질)**이다 — 측정도 전부 `location_name: "Brazil"`이다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **포르투갈어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=pt`로 **완역돼 있다**(2026-08-23 Playwright 실측 · `<html lang="pt">`).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어이고 **타이틀은 JS 실행 후 바뀐다**
 *        (실제로 curl이 「홀덤마스터 GTO 솔버」를 돌려줬다). **JS를 돌리는 도구로 볼 것.**
 *
 * 🔴 키워드 실측(2026-08-23 · DataForSEO Labs + SERP API + 라쿠. 전체는 `docs/keyword-bank/pt-gto-solver.md`):
 *   **`range poker`/`poker range` 590 · SD 2**(이 판 최대이자 최저 난이도) ·
 *   **`gto poker`/`poker gto` 590 · SD 9** · **`solver poker` 170 · SD 17** ·
 *   `range de mãos poker` 210 · `calculadora de poker` 170 · `tabela de range poker` 110 ·
 *   `poker solver` 50 · `range de poker` 50 · `o que é gto no poker` 30 · `o que é range no poker` 20.
 *   🟢 **두 벤더가 볼륨에서 일치했다**(라쿠 대 DataForSEO 5/5) — es 6/6에 이어 두 번째 교차 검증.
 *
 * 🔴🔴 **`solver`를 단독으로 쓰지 마라 — 브라질에서 «Excel 솔버»다.**
 *   `o que é solver` 110 · **SD 0**으로 이 판에서 가장 쉬운 값이 나오지만, SERP top-10이
 *   **8/8 엑셀**이다(`support.microsoft.com` 1위 · 대학 PDF 「SOLVER(EXCEL): MANUAL DE REFERÊNCIA」 ·
 *   `dicio.com.br` 사전). PAA도 「Onde acho o Solver no Excel?」이다.
 *   → **제목·H1·H2에서 반드시 `poker`와 붙여 쓴다.**
 *   🪶 **es와 규율은 같고 이유가 다르다** — es는 `GTO`가 과나후아토였고 pt는 `solver`가 엑셀이다.
 *      **pt에서 `GTO` 단독은 깨끗하다**(수확물 189개 중 오염 0건). es 규율을 그대로 옮기면
 *      엉뚱한 단어를 지키게 된다.
 *
 * 🔴 **`solver de poker`는 볼륨이 0이다** — `solver poker` 170 · `poker solver` 50인데
 *   전치사형은 데이터가 없다. **앱 타이틀이 「Solver de poker GTO grátis」라고 해서 그것이
 *   검색어인 것은 아니다** — 제품명과 쿼리는 다른 층이다.
 *   → 산문은 `de`를 넣어 읽히게 쓰고, 「같은 것을 부르는 여러 이름」 문단에서 축어로 한 번 놓는다.
 *
 * 🔴 **`postflop`·`pós-flop`·`pos flop`이 전부 볼륨 0이다 — es와 여기서 갈린다.**
 *   es는 `postflop`을 조준축으로 썼지만 **브라질은 그 말을 안 친다.**
 *   개념은 쓰되 키워드로 조준하지 않는다. 살아 있는 것은 `flop turn river` 260 · SD 6이다.
 *
 * 🔴 카니발 방지 — pt 43편 전수 태그 grep:
 *   · **프리플랍 표 = `pt/holdem-starting-hands-chart`가 소유**한다(`tabelas gto de preflop` 태그 +
 *     seoTitle 「Tabela de mãos iniciais」). `tabela de range poker`(110)·`tabela range poker`(40)·
 *     `range poker por posição`(30)은 **전부 그쪽 자리다.** 제목·H2에 쓰지 마라.
 *   · **`estratégia de poker`(30) 외 3형 = `pt/holdem-strategy`가 seoTitle+태그 4개로 소유**한다.
 *   · 🔴 **`calculadora de equity poker`를 `pt/holdem-equity`가 이미 태그로 갖고 있다 — es와 다르다.**
 *     `calculadora de poker`(170)·`calculadora de odds poker`(110)와 함께 계산기 자리이므로 안 가져온다.
 *   🟢 미소유 확인: `range poker` 일반형 0편 · `solver` 0편 · `gto poker` 0편.
 *
 * 🔴 pt는 es보다 «가진 것»이 적다 — `app/pt/`에 있는 것은 `blog`·`page.tsx`뿐이다.
 *   **`/pt/tournaments`도 없다**(es에는 있다). 링크는 전건 `lib/posts-pt/<slug>.ts` 실존 확인(11/11).
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다:
//    ① `solver`를 `poker`와 붙인다(엑셀 회피) ② `GTO`는 pt에서 깨끗하니 앞에 둘 수 있다
//    ③ 차별화어는 「무료」가 아니라 **「sem cadastro · sem limites」** — SERP top-10 전부와 갈린다.
//    🪶 `range`는 H1·H2가 받는다. 제목에 다 넣으면 훅이 죽는다.
const TITLE =
  "Solver de poker GTO grátis — sem cadastro, sem limites | HoldemMaster";
// 🪶 표시폭은 네 랜딩(ko 117 · ja 108 · en 152 · es 155)과 같은 대역으로 맞췄다.
//    훅(sem instalar/cadastro/limites)과 키워드(solver poker · range · GTO)를 함께 싣는다.
const DESCRIPTION =
  "Solver de poker GTO grátis no navegador: sem instalar, sem cadastro e sem limites. Calcule os ranges de poker no flop, turn e river com equity, EV e EQR.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            포르투갈어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/pt/solver`,
    // 🔴 **다섯 랜딩이 «같은 문자열 세트»를 선언해야** `check-hreflang`의 세트 일치를 통과한다.
    //    한쪽만 고치면 구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    표기는 기존 네 랜딩의 «지역 포함» 형식에 맞춰 pt-BR로 통일했다.
    //    ⚠ `pt`(무지역)나 `pt-PT`로 쓰지 마라 — **세트가 갈라지고, 우리 정본은 브라질이다.**
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
      // ★ 2026-08-24 — `/fr/solver` 신설(같은 날 두 번째). **아홉 랜딩이 같은 세트**여야 한다.
      "fr-FR": `${SITE}/fr/solver`,
      // ★2026-09-05 — `/id/solver` 신설(10번째). 🔴 열 파일이 «같은 세트»를 선언해야 한다.
      "id-ID": `${SITE}/id/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(2026-08-23 게이트 `check:meta-lang`)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Solver de poker GTO grátis — HoldemMaster",
    description:
      "Calcule a estratégia GTO depois do flop direto no navegador. Frequências, equity, EV e EQR das 169 mãos — sem instalar e sem cadastro.",
    url: `${SITE}/pt/solver`,
    siteName: "HoldemMaster",
    locale: "pt_BR",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-23에
 *    `solver.holdemmaster.com/?lang=pt`를 열어 DOM에서 직접 읽었다.
 *    🟢 **pt는 트레이너 항목도 DOM 실측이다** — es는 화면이 아직 「pérdida de EV」라 §4-B로
 *       정정해 넣어야 했는데, **pt 화면은 이미 「sua nota vem da perda de EV em relação ao pote」**로
 *       정정본이다(08-22 솔버 배포가 pt에 반영됐다). **여기엔 «DOM 밖» 항목이 없다.**
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx`의 기능 표에도 문장으로 있다. **한쪽만 고치지 말 것.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver de poker GTO grátis — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/pt/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pt-BR",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      featureList: [
        "Frequências de aposta, check e fold das 169 mãos numa matriz 13×13",
        "Equity, EV e realização de equity (EQR) mão a mão",
        "Ranges, board, stack e árvore de tamanhos de aposta totalmente configuráveis",
        "Rake e teto de rake, e edição da árvore de jogo nó a nó",
        "Modos de precisão (ponto flutuante 32 bits / inteiro 16 bits) e exploitabilidade alvo",
        "Spots de estudo já calculados que abrem na hora",
        "Treinador GTO que pontua a perda de EV em relação ao pote",
        "Exportação do resumo em CSV e link para compartilhar um spot",
        "Roda no navegador com WebAssembly — sem instalação e sem conta",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_PT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/pt` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/pt/solver` },
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
      <HubPage title="Solver GTO" locale="pt">
        <SolverClientPt />
      </HubPage>
    </>
  );
}
