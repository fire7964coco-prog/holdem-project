import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientEs from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_ES } from "./faq";

/**
 * `/es/solver` — `/solver`(ko)·`/en/solver`·`/ja/solver`의 스페인어판. ★2026-08-22 신설.
 * 정본 구조 = `app/ja/solver/page.tsx`. 내용은 **번역이 아니라 스페인어 실검색으로 재조준**했다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **스페인어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=es`로 **완역돼 있다**(2026-08-22 라이브 확인 · `<html lang="es">`).
 *      언어 셀렉터는 8개(`ko en ja es pt de zh zh-hant`) — **pt·de 랜딩도 UI가 이미 준비돼 있다.**
 *
 * 🔴 키워드 실측(2026-08-22 · DataForSEO Labs + SERP API + 라쿠. 전체는 `docs/keyword-bank/es-gto-solver.md`):
 *   **`rangos poker`/`poker rangos`/`rangos del poker` ES 480 · MX 170 · SD 0~1**(이 판 최대) ·
 *   **`solver poker` ES 70 · MX 30 · SD 0** · `gto poker`/`poker gto` ES 210 · **MX 260**(SD 6~7) ·
 *   `solver poker gratis` 20/10 · `que es gto en poker` 20/**30** · `rangos de poker` 90.
 *
 * 🔴🔴 **제목·H1·H2에 `GTO`를 단독으로 쓰지 마라 — 멕시코에서 `GTO`는 과나후아토 주 코드다.**
 *   실증(lowfruits export): `que es gto mexico` · `que es gto policia` · `historia de guanajuato` ·
 *   `¿qué es un gto carro`(폰티악) · `¿qué es gto anime`(ja에서도 걸린 드라마).
 *   → **반드시 `poker`/`solver`와 붙여 쓴다.** (ja의 「ジーティーオー=드라마」와 같은 계열인데 3중이다.)
 *
 * 🔴 **어순이 난이도를 가른다** — `solver poker` **SD 0** 대 `poker solver` **SD 46** ·
 *   `solver de poker` **SD 46**. 뜻은 같은데 0 대 46이다. **`solver poker` 쪽으로 통일한다.**
 *   ✅ ja와 반대로 **es에서 `solver`는 살아 있는 말**이다 — 자사 es 코퍼스 4편이 이미 본문 용어로 쓰고,
 *      `es/holdem-glossary` L237이 「…inexplotable de los solvers」로 정본을 정해 뒀다.
 *
 * 🔴 **차별화어는 「무료」가 아니다 — 「등록 없음 · 제한 없음 · 크레딧 없음」이다.**
 *   SERP 실측(google.es · `solver poker` top-10): gtowizard(구독) · Google Play(앱) · pocketsolver(앱) ·
 *   educapoker(TexasSolver «소개 글») · casinobarcelona(설명 글) · solvers.poker(리뷰) ·
 *   optimuspoker · App Store · 888poker(설명 글) · piosolver(설치형).
 *   그리고 `optimuspoker`는 **무료가 「1 Solution / Day」 + 등록 필수 + 크레딧제**다(라이브 실측).
 *   **무료·무등록·무제한으로 포스트플랍까지 가는 스페인어 페이지가 top-10에 없다.**
 *
 * 🔴 카니발 방지 — es가 «가진 것»은 EN과 다르다:
 *   · `app/es/`에 있는 것은 `blog`·`tournaments`·`page.tsx`뿐이다. **`/es/hand-chart`·`/es/calculator`·
 *     `/es/win-rate-quiz`는 없다** → EN이 거는 도구 링크 3종을 그대로 옮기면 전부 404다.
 *     → **es 블로그 글로 갈았다.** 링크 대상은 전건 `lib/posts-es/<slug>.ts` 실존을 확인했다.
 *   · **프리플랍 표 = `es/holdem-starting-hands-chart`가 소유**한다(`tablas preflop` ES 210 · SD 0 —
 *     2026-08-22에 그 글에 소급 반영했다). **`tablas preflop`을 제목·H2에 쓰지 마라.**
 *   · 「`estrategia poker`」(ES 110 · SD 0) = **`es/holdem-strategy`가 seoTitle+태그 4개로 소유**한다.
 *     이 랜딩은 `estrategia gto poker`(10)만 가져간다.
 *   · `calculadora de poker`(ES 170 · SD 1)와 롱테일 12개 = **`/es/calculator`의 자리**다. 가져오지 않는다.
 *   🟢 미소유 확인(es 60편 전수 태그 grep): `rangos poker` 일반형 0편 · `solver` 0편 ·
 *      `gto poker` 0편 · `postflop` 0편 · `simulador`·`entrenador` 본문에도 0건.
 *
 * ❌ **`simulador de poker`(ES 140 · MX 70)를 조준하지 마라** — SERP 실측 top-10이 misjuegos ·
 *   minijuegos · juegos.elpais.com · zyngapoker · Steam이다. **의도가 «무료로 노는 게임»**이지 학습이 아니다.
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다:
//    ① `GTO`를 단독으로 두지 않는다(`solver poker GTO`) ② 어순은 SD 0인 `solver poker`
//    ③ 차별화어는 「무료」가 아니라 **「sin registro · sin límites」**.
//    🪶 `rangos`는 H1·H2가 받는다 — 제목에 다 넣으면 훅이 죽는다.
const TITLE =
  "Solver poker GTO gratis — sin registro, sin límites | HoldemMaster";
// 🪶 2차 교열(2026-08-22) — 초판 desc가 **212자**로 세 랜딩(ko 117 · ja 108 · en 152)에서 혼자 튀었다.
//    ⚠ 「표시폭 160 상한」 규칙 자체는 **폐기됐다**(핸드오프 §손대면 안 되는 것) — 위반이라서가 아니라
//       **가족 내 일관성**과 SERP 잘림 때문에 조였다. 훅(sin instalar/registrarte/límites)과
//       키워드(solver poker · rangos poker · postflop)는 그대로 남겼다.
const DESCRIPTION =
  "Solver poker GTO gratis en tu navegador: sin instalar, sin registrarte y sin límites. Calcula rangos poker postflop en flop, turn y river con equity, EV y EQR.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            스페인어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/es/solver`,
    // 🔴 **네 랜딩이 «같은 문자열 세트»를 선언해야** `check-hreflang`의 세트 일치를 통과한다.
    //    한쪽만 고치면 구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    표기는 기존 세 랜딩의 «지역 포함» 형식(ko-KR·en-US·ja-JP)에 맞춰 es-ES로 통일했다.
    //    ⚠ `es-419`(LATAM)나 `es`(무지역)로 쓰지 마라 — **세트가 갈라진다.**
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      // ★ 2026-08-23 — `/pt/solver` 신설. **다섯 랜딩이 같은 세트**여야 게이트를 통과한다.
      "pt-BR": `${SITE}/pt/solver`,
      // ★ 2026-08-24 — `/de/solver` 신설. **여섯 랜딩이 같은 세트**여야 게이트를 통과한다.
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Solver poker GTO gratis — HoldemMaster",
    description:
      "Calcula la estrategia GTO postflop en el navegador. Frecuencias, equity, EV y EQR de las 169 manos — sin instalar y sin registrarte.",
    url: `${SITE}/es/solver`,
    siteName: "HoldemMaster",
    locale: "es_ES",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-22에
 *    `solver.holdemmaster.com/?lang=es`를 열어 DOM에서 직접 읽었다.
 *    ⚠ **단 하나 예외**: 트레이너 항목(«en proporción al bote»)은 **DOM에서 읽은 것이 아니다.**
 *       화면은 아직 「pérdida de EV」라고만 쓰는데, 앱이 2026-08-15에 팟 대비 비율로 바꿨으므로
 *       §4-B로 **정정해 넣은 것**이다. 「전부 DOM 실측」이라고 적으면 그 한 줄이 거짓이 된다.
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx`의 기능 표에도 문장으로 있다. **한쪽만 고치지 말 것.**
 * 🔴 트레이너 항목은 **«팟 대비 비율»**이다. 앱 화면이 아직 「pérdida de EV」라고 쓰지만
 *    앱은 2026-08-15에 바꿨다 — **절대 bb로 되돌리지 마라.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver poker GTO gratis — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/es/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "es",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
      featureList: [
        "Frecuencias de apuesta, check y fold de las 169 manos en una matriz 13×13",
        "Equity, EV y realización de equity (EQR) mano por mano",
        "Rangos, board, stack y árbol de tamaños de apuesta configurables por completo",
        "Rake y tope de rake, y edición del árbol de juego nodo a nodo",
        "Modos de precisión (coma flotante 32 bits / entero 16 bits) y explotabilidad objetivo",
        "Spots de estudio ya calculados que se abren al instante",
        "Entrenador GTO que puntúa la pérdida de EV en proporción al bote",
        "Exportación del resumen a CSV y enlace para compartir un spot",
        "Corre en el navegador con WebAssembly — sin instalación y sin cuenta",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_ES.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE}/es` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/es/solver` },
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
      <HubPage title="Solver GTO" locale="es">
        <SolverClientEs />
      </HubPage>
    </>
  );
}
