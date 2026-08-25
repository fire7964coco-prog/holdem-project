import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientZhHant from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_ZH_HANT } from "./faq";

/**
 * `/zh-hant/solver` — 8번째이자 **마지막** 다국어 솔버 랜딩(ko·en·ja·es·pt·de·zh·zh-hant).
 * ★2026-08-24 신설 — 이로써 **앱 8언어 = 랜딩 8개**가 맞아떨어진다.
 * 정본 구조 = `app/zh/solver/page.tsx`(직전 회차). 내용은 **자형 변환이 아니라 대만·홍콩
 * 실검색으로 재조준**했다([[chinese-seo-traditional-taiwan-first]] — 구글 중국어권은 번체가 본진).
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **번체권(대만·홍콩)에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=zh-hant`로 **완역돼 있다**(2026-08-24 Playwright 실측 · `<html lang="zh-Hant">` ·
 *      title 「HoldemMaster GTO 解算器 —— 免費線上德州撲克 GTO Solver」).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어다. JS를 돌리는 도구로 볼 것.
 *
 * 🔴 키워드 실측(볼륨 재실측 없음 — `docs/keyword-bank/zh-gto-solver.md` §0~§3의 TW·HK 값 재사용,
 *   zh-hant 고유 판정은 §7): **`gto poker`/`poker gto` TW 210 · HK 390** · `poker solver` 20~30 ·
 *   `gto solver` 30 · **`德州撲克 gto` TW 140**(간체권의 14배 — 중국어 정면 쿼리의 본진) ·
 *   `德州撲克勝率計算器` 260 · `德州撲克教學` 480 · `德州撲克範圍`·`gto是什麼`·`求解器` 각 70.
 *   🔴🔴 **TW 볼륨은 DataForSEO 단독**(라쿠 Taiwan은 죽은 소스 — 뱅크 §1-④).
 *   🔴 **`勝率計算器` 1,900 단독 조준 금지**(게임 계산기 의도 · 포커 0/10 — 뱅크 §1-③).
 *
 * 🔴 **오염어 둘**(간체와 동일 규율): `GTO` 단독 = 자동차·『GTO』아니메 · `solver` 단독 = 수학 솔버
 *   → 제목·H1·H2에서 반드시 撲克/poker와 붙인다.
 *
 * 🔴 카니발 방지 — zh-hant 43편 전수 grep(뱅크 §7-2):
 *   · **프리플랍 표 = `zh-hant/holdem-starting-hands-chart` 소유**(태그 «GTO翻前圖»). 랜딩은 포스트플랍.
 *   · 新手教學 = `texas-holdem-rules-for-beginners` 소유. 敎學은 «教學案例» 결합으로만.
 *   · 勝率 «개념» = `holdem-equity`·`holdem-probability`. 랜딩은 도구 축만 —
 *     단 `德州撲克勝率計算器`(260)는 무주공산이라 FAQ·내장 탭 문단이 정면으로 받는다.
 *   · **GTO·solver·解算器 축 = 소유자 0** → 랜딩이 가져간다.
 * 🔴 게임 플레이 의도 조준 금지(FAQ가 가른다) · RTA·봇 축 금지.
 *
 * 🪶 **solver의 번체 라벨 = «解算器»** — 간체 앱(求解器)과 다르다. 앱 번체 축어가 정본
 *   (2026-08-24 실측 · 용어집 §7-C 일치). 이 파일의 모든 라벨이 그 표기를 따른다.
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다(zh와 같은 골격):
//    ① «GTO Poker Solver» 한 문자열이 `gto poker`와 `poker solver` 두 조준축을 함께 덮는다
//    ② `GTO`도 `Solver`도 단독으로 두지 않는다(자동차·아니메 / 수학 솔버 오염 회피)
//    ③ 훅은 «免費 + 免下載·免註冊» — 설치형 무료(TexasSolver)와 구독 웹 사이의 빈자리.
//    🪶 «解算器»(앱 번체 축어)는 desc·H1이 받는다. 제목에 다 넣으면 훅이 죽는다.
//    🪶 «免下載、免註冊»는 대만 웹 관습 표현이다(간체 «无需下载、无需注册»와 갈랐다).
const TITLE =
  "免費 GTO Poker Solver — 打開瀏覽器就能算，免下載、免註冊 | HoldemMaster";
// 🪶 표시폭은 일곱 랜딩과 같은 대역. 훅(免費·瀏覽器·不限次數)과
//    키워드(德州撲克 解算器 · 範圍 · 翻牌後)를 함께 싣는다. zh desc 권장 ~78자 대역 준수.
const DESCRIPTION =
  "免費的德州撲克 GTO 解算器（poker solver），直接在瀏覽器裡算——免下載、免註冊、不限次數。依範圍、公共牌和下注尺寸計算翻牌後策略。";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            중국어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/zh-hant/solver`,
    // 🔴 **여덟 랜딩이 «같은 문자열 세트»를 선언해야** `check:hreflang`의 세트 일치를 통과한다.
    //    zh-hant를 열면서 ko·en·ja·es·pt·de·zh 일곱 파일에도 `zh-Hant`를 같이 넣었다 —
    //    한쪽만 고치면 구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    ⚠ `zh-TW`가 아니라 **`zh-Hant`(스크립트 서브태그)**다 — 대상이 «대만» 단독이 아니라
    //       «번체 독자 전체»(TW·HK)이고, 블로그 hreflang 컨벤션(lib/intl.ts HTML_LANG:
    //       zh-hant → zh-Hant)과도 맞춘다. zh 랜딩의 `zh-Hans`와 나란히 선다(뱅크 §1-⑤ —
    //       자형은 볼륨을 안 가르고 hreflang이 지역을 가른다).
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      "pt-BR": `${SITE}/pt/solver`,
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
      "zh-Hant": `${SITE}/zh-hant/solver`,
      // ★ 2026-08-24 — `/fr/solver` 신설(같은 날 두 번째). **아홉 랜딩이 같은 세트**여야 한다.
      "fr-FR": `${SITE}/fr/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "免費德州撲克 GTO 解算器 — HoldemMaster",
    description:
      "直接在瀏覽器裡計算翻牌後的 GTO 策略。169 種起手牌的頻率、勝率、EV 和 EQR——不用安裝，不用註冊。",
    url: `${SITE}/zh-hant/solver`,
    siteName: "HoldemMaster",
    // ⚠ hreflang은 zh-Hant인데 여기만 zh_TW인 것은 모순이 아니다 — OG 프로토콜에는 스크립트
    //   서브태그(zh_Hant)가 없고 ll_TERR 형식이 강제라 번체 표준값이 zh_TW다
    //   (블로그 OG_LOCALE 컨벤션과 동일 · lib/intl.ts "zh-hant": "zh_TW"). «고치»지 마라.
    locale: "zh_TW",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-24에
 *    `solver.holdemmaster.com/?lang=zh-hant`를 열어 DOM에서 직접 읽었다(뱅크 §7-3).
 *    🟢 트레이너 항목도 DOM 실측이다 — zh-hant 화면이 «按佔底池的 EV 損失評分» 정정본이다.
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx` **본문**(직답 단락·READ_SCREEN·기능 표 중 한 곳)에
 *    문장으로 있다. **한쪽만 고치지 말 것.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "免費德州撲克 GTO 解算器 — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/zh-hant/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hant",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "169 種起手牌的下注、過牌、棄牌頻率，擺在一張 13×13 表格裡",
        "逐手牌的勝率、EV 和勝率實現（EQR）",
        "範圍、公共牌、籌碼量和下注尺寸樹自由設定",
        "抽水和抽水封頂，以及逐節點編輯決策樹",
        "精度模式（32 位元浮點 / 16 位元整數）和目標可剝削度",
        "已經算好、即點即看的教學案例",
        "按佔底池的 EV 損失評分的 GTO 訓練器",
        "內建的德州撲克勝率計算器（Equity）分頁",
        "彙總匯出 CSV，牌局分享連結",
        "用 WebAssembly 在瀏覽器裡執行——不用安裝、不用註冊",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_ZH_HANT.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首頁", item: `${SITE}/zh-hant` },
        { "@type": "ListItem", position: 2, name: "GTO 解算器", item: `${SITE}/zh-hant/solver` },
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
      <HubPage title="GTO 解算器" locale="zh-hant">
        <SolverClientZhHant />
      </HubPage>
    </>
  );
}
