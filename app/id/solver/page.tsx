import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientId from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_ID } from "./faq";

/**
 * `/id/solver` — 10번째 다국어 솔버 랜딩(ko·en·ja·es·pt·de·zh·zh-hant·fr·id).
 * ★2026-09-05 신설 — 저작 회차(Fable). 유일한 입력 = `docs/id-solver-landing-brief.md`
 *   (준비 회차 Opus · 2026-09-04). 정본 구조 = `app/fr/solver/page.tsx`(직전 신설분).
 *   내용은 **번역이 아니라 인도네시아 맥락으로 재저작** — 단 경량판(브리프 §0): A층(표기·어순·
 *   오염어)만 실측으로 갈아 끼우고 B층(롱테일·FAQ 창작·키워드 뱅크)은 버렸다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **인니어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=id`로 **완역돼 있다**(2026-09-04 Playwright 실측 · `<html lang="id">` ·
 *      title 「HoldemMaster GTO Trainer — Solver & Trainer GTO Gratis untuk Texas Hold'em」).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어다. JS를 돌리는 도구로 볼 것.
 *
 * 🔴 키워드 실측(2026-09-04 · DataForSEO location 2360 Indonesia — 브리프 §2):
 *   **조준축 = `gto poker` 50**(12개월 20~90) · `poker gto` 50은 **시계열이 완전히 동일** =
 *   구글이 어순을 정규화 → **어순 판정 불필요**. `range poker` 20 보조.
 *   `gto solver`·`solver poker`·`poker solver`·`kalkulator poker` 각 10 — 🔴 **solver 계열은
 *   검색축이 아니라 «정체성 표기»**(앱 이름과 일치시키는 자리). 제목에는 넣되 `GTO`와 붙여서.
 *   ⚠ `poker gratis` 50은 **조준 금지**(«무료로 플레이할 게임» 의도 의심) — FAQ가 가른다.
 *
 * 🔴 SERP(`gto poker` · 모바일 · top 24): 인니어로 «쓰인» 페이지는 `poker.academy` **하나뿐** ·
 *   `translate.google.com`이 **4개 랭크**(구글이 원문이 없어 영어를 번역해 때우는 중 = 무주공산) ·
 *   상위는 해외 도구 브랜드 + Play 스토어 앱(브랜드 축은 못 먹는다) · 의도 = **정의형 + 도구형 혼합**
 *   → 상단에 한 문단짜리 GTO 정의를 두고 바로 도구로 잇는다 · 관련검색 1번 `gto poker free` =
 *   훅(무료·설치 불필요)과 정확히 일치. 이어지는 calculator·app·chart·practice는 FAQ가 흡수.
 *
 * 🟢 오염어 — id에서는 확인되지 않았다(top 24 전부 포커). 공통 규율만: `solver` 단독 금지.
 * 🟢 카니발 0 — id 42편 중 title·seoTitle에 GTO가 든 글 **0편**. 단 프리플랍 레인지표 축은
 *   `holdem-starting-hands-chart`가 소유 — 랜딩은 포스트플랍으로 가른다.
 * ❌ RTA·봇 축 금지 · 합법성 축 금지 · `/ms/solver` 동시 신설 금지(브리프 §7).
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다(브리프 §4):
//    ① «Solver GTO Poker» 한 문자열이 조준축 `gto poker`를 덮는다
//    ② `GTO`도 `Solver`도 단독으로 두지 않는다
//    ③ 훅 = «Gratis + langsung di browser + tanpa instal» — 관련검색 1번 `gto poker free`.
//    🪶 ~79자 대역(형제 랜딩과 맞춘다). «tanpa akun»은 desc·본문이 유지한다.
const TITLE =
  "Solver GTO Poker Gratis — langsung di browser, tanpa instal | HoldemMaster";
// 🪶 ≤160자 · 훅(gratis·browser·tanpa instal·tanpa akun)과 키워드(solver GTO poker · postflop ·
//    range·board·bet size)를 함께 싣는다. register = Anda(브리프 §3).
const DESCRIPTION =
  "Solver GTO poker gratis yang langsung berjalan di browser Anda — tanpa instal, tanpa akun. Hitung strategi postflop Texas Hold'em: range, board, dan bet size.";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            인도네시아어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/id/solver`,
    // 🔴 **열 랜딩이 «같은 문자열 세트»를 선언해야** `check:hreflang`의 세트 일치를 통과한다.
    //    ✅ **2026-09-05 ③ 마감 완료** — 기존 9파일에 `id-ID`를 동시 추가했다(게이트 10/10 동일 세트 통과).
    //    한쪽만 고치면 구글은 세트 전체를 무시하고 게이트가 빌드를 세운다 — 다시 가르지 마라.
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
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "Solver GTO Poker Gratis — HoldemMaster",
    description:
      "Hitung strategi GTO postflop langsung di browser Anda. Frekuensi, equity, EV, dan EQR untuk 169 hand awal — tanpa instal, tanpa akun.",
    url: `${SITE}/id/solver`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: id → id_ID (블로그 컨벤션과 동일).
    locale: "id_ID",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 근거 = 브리프 §1-2 축어
 *    (`docs/solver-app-verbatim-id-2026-09-04.md` · 라이브 `?lang=id` DOM). fr 랜딩의 10개 항목과
 *    기능이 같으므로 그 뼈대를 쓰되 **id 축어로** 적었다(트레이너 = «relatif terhadap pot» 🟢 팟 대비 정정본).
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(브리프 §1-3) →
 *    아래 항목은 전부 `solver-client.tsx` **본문**에 문장으로 있다. **한쪽만 고치지 말 것.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Solver GTO Poker Gratis — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/id/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "id",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "Frekuensi bet, check, dan fold untuk 169 hand awal dalam grid 13×13",
        "Equity, EV, dan realisasi equity (EQR) per hand",
        "Range, board, stack, dan pohon bet size yang bisa diatur bebas",
        "Rake dan cap rake, edit pohon keputusan per node",
        "Mode presisi (float 32-bit / integer 16-bit) dan target exploitability",
        "Spot belajar yang sudah dihitung, hasil langsung tampil saat diklik",
        "Trainer GTO yang menilai keputusan Anda dari kerugian EV relatif terhadap pot",
        "Tab Chart preflop dan kalkulator Equity terintegrasi",
        "Ekspor CSV ringkasan, Impor JSON dan Ekspor JSON, tautan Bagikan Spot",
        "Berjalan di browser lewat WebAssembly — tanpa instal, tanpa akun",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_ID.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE}/id` },
        { "@type": "ListItem", position: 2, name: "Solver GTO", item: `${SITE}/id/solver` },
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
      {/* 🪶 허브 타이틀 «Solver GTO» = 앱 id title의 «Solver & Trainer GTO»에서 딴 라벨
          (라벨은 «검색 축»이 아니라 «메뉴 이름» — 어순 규율과 층이 다르다).
          ✅ `lib/hub-i18n.ts`의 id 블록은 **2026-09-05 ③ 마감이 등록했다**(`LABELS.id` 축어 복사).
          🔴 없으면 셸·사이드바가 통째로 영어로 떨어진다 — pt에서 실제로 걸린 자리다. */}
      <HubPage title="Solver GTO" locale="id">
        <SolverClientId />
      </HubPage>
    </>
  );
}
