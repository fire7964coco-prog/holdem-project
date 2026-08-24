import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientZh from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_ZH } from "./faq";

/**
 * `/zh/solver` — 7번째 다국어 솔버 랜딩(ko·en·ja·es·pt·de·zh). ★2026-08-24 신설.
 * 정본 구조 = `app/de/solver/page.tsx`(최신). 내용은 **번역이 아니라 중화권 실검색으로 재조준**했다.
 * 대상은 **«구글 도달 간체권» = 싱가포르·말레이시아(+홍콩 혼용)**다 — 측정도 그 location으로 했다.
 * 본토 China는 구글 차단이라 대상이 아니다([[chinese-seo-traditional-taiwan-first]]).
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색은 이 랜딩이 전담하고 본체로 흘려보낸다.
 *   **중국어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *   🟢 본체는 `?lang=zh`로 **완역돼 있다**(2026-08-24 Playwright 실측 · `<html lang="zh-Hans">` ·
 *      title 「HoldemMaster GTO 求解器 — 免费在线德州扑克 GTO Solver」).
 *      ⚠ `curl`로는 못 본다 — SSR 초기 HTML이 한국어다. JS를 돌리는 도구로 볼 것.
 *
 * 🔴 키워드 실측(2026-08-24 · 라쿠 SG 1255796 · MY 1255797 · HK 1255800 + DataForSEO.
 *   전체는 `docs/keyword-bank/zh-gto-solver.md`):
 *   **zh 솔버 축은 라틴 문자열이 지배한다** — `gto poker`/`poker gto` SG **170** · MY 210 ·
 *   HK 390 · `poker solver` 40/20/30 · `gto solver` 30 · 중국어 문자열은 전부 ≤10.
 *   🟢 두 벤더 볼륨 일치(SG 10/10 · HK 근사) — es·pt·de에 이은 교차 검증.
 *   🔴 **라쿠 Taiwan은 죽은 소스**(2023-03 이후 0) — 대만 값은 DFS로만(zh-hant 회차 인계).
 *
 * 🔴 **오염어 둘**: `GTO` 단독 = 자동차·『GTO』 아니메(ja 함정의 간체판) ·
 *   `solver` 단독 = **수학 솔버**(`math solver` 49,500 — pt·de 엑셀과 내용이 다르다).
 *   → 제목·H1·H2에서 반드시 扑克/poker와 붙인다.
 *
 * 🔴 카니발 방지 — zh 43편 전수 grep(뱅크 §4):
 *   · **프리플랍 표 = `zh/holdem-starting-hands-chart` 소유**(태그 «GTO翻前图»). 랜딩은 포스트플랍.
 *   · **«德州扑克策略» = `zh/holdem-strategy` 소유.** GTO 도구 축은 무주공산 — 랜딩이 가져간다.
 *   · 승률·확률 «개념» = `zh/holdem-equity`·`zh/holdem-probability`. 랜딩은 도구 축만.
 * 🔴 **`德州扑克在线`(110)·`游戏`(30)·`app`(70) 조준 금지** — 게임 플레이 의도(FAQ가 가른다).
 */

// 🔴 제목 규칙 셋을 동시에 지킨 문장이다:
//    ① «GTO Poker Solver» 한 문자열이 `gto poker`와 `poker solver` 두 조준축을 함께 덮는다
//    ② `GTO`도 `Solver`도 단독으로 두지 않는다(자동차·아니메 / 수학 솔버 오염 회피)
//    ③ 훅은 «免费 + 无需下载·注册» — 설치형 무료(TexasSolver)와 구독 웹 사이의 빈자리.
//    🪶 «求解器»(중국어 정면 쿼리·앱 공식 표기)는 desc·H1이 받는다. 제목에 다 넣으면 훅이 죽는다.
const TITLE =
  "免费 GTO Poker Solver — 打开浏览器就能算，无需下载、无需注册 | HoldemMaster";
// 🪶 표시폭은 여섯 랜딩과 같은 대역. 훅(免费·浏览器·不限次数)과
//    키워드(德州扑克 求解器 · 范围 · 翻牌后 · 胜率)를 함께 싣는다.
// 🪶 SEO 렌즈 반영(2026-08-24) — zh desc 권장 ~78자에 맞춰 꼬리 문장을 잘랐다(잘림 방지).
const DESCRIPTION =
  "免费的德州扑克 GTO 求解器（poker solver），在浏览器里直接算——不用下载、不用注册、不限次数。按范围、公共牌和下注尺寸计算翻牌后策略。";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            중국어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/zh/solver`,
    // 🔴 **일곱 랜딩이 «같은 문자열 세트»를 선언해야** `check:hreflang`의 세트 일치를 통과한다.
    //    zh를 열면서 ko·en·ja·es·pt·de 여섯 파일에도 `zh-Hans`를 같이 넣었다 — 한쪽만 고치면
    //    구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    ⚠ `zh-CN`이 아니라 **`zh-Hans`(스크립트 서브태그)**다 — 대상이 «중국»이 아니라
    //       «구글 도달 간체 독자»(SG·MY 등)이고, 블로그 hreflang 컨벤션(lib/intl.ts
    //       HTML_LANG: zh → zh-Hans)과도 맞춘다. zh-hant 랜딩이 열리면 `zh-Hant`가 나란히 선다.
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
      "ja-JP": `${SITE}/ja/solver`,
      "es-ES": `${SITE}/es/solver`,
      "pt-BR": `${SITE}/pt/solver`,
      "de-DE": `${SITE}/de/solver`,
      "zh-Hans": `${SITE}/zh/solver`,
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "免费德州扑克 GTO 求解器 — HoldemMaster",
    description:
      "在浏览器里直接计算翻牌后的 GTO 策略。169 种起手牌的频率、胜率、EV 和 EQR——不用安装，不用注册。",
    url: `${SITE}/zh/solver`,
    siteName: "HoldemMaster",
    // ⚠ hreflang은 zh-Hans인데 여기만 zh_CN인 것은 모순이 아니다 — OG 프로토콜에는 스크립트
    //   서브태그(zh_Hans)가 없고 ll_TERR 형식이 강제라 간체 표준값이 zh_CN이다
    //   (블로그 OG_LOCALE 컨벤션과 동일 · lib/intl.ts). «고치»지 마라.
    locale: "zh_CN",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 2026-08-24에
 *    `solver.holdemmaster.com/?lang=zh`를 열어 DOM에서 직접 읽었다.
 *    🟢 트레이너 항목도 DOM 실측이다 — zh 화면이 이미 «按占底池的 EV 损失打分»으로
 *       정정본이다(pt·de와 같은 상태).
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx` **본문**(직답 단락·READ_SCREEN·기능 표 중 한 곳)에
 *    문장으로 있다. **한쪽만 고치지 말 것.**
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "免费德州扑克 GTO 求解器 — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/zh/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "zh-Hans",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      featureList: [
        "169 种起手牌的下注、过牌、弃牌频率，摆在一张 13×13 矩阵里",
        "逐手牌的胜率、EV 和权益实现（EQR）",
        "范围、公共牌、筹码量和下注尺寸树自由设定",
        "抽水和抽水封顶，以及逐节点编辑决策树",
        "精度模式（32 位浮点 / 16 位整数）和目标可剥削度",
        "已经算好、即点即看的教学案例",
        "按占底池的 EV 损失打分的 GTO 训练器",
        "汇总导出 CSV，牌局分享链接",
        "用 WebAssembly 在浏览器里运行——不用安装、不用注册",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_ZH.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "首页", item: `${SITE}/zh` },
        { "@type": "ListItem", position: 2, name: "GTO 求解器", item: `${SITE}/zh/solver` },
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
      <HubPage title="GTO 求解器" locale="zh">
        <SolverClientZh />
      </HubPage>
    </>
  );
}
