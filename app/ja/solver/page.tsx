import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClientJa from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ_JA } from "./faq";

/**
 * `/ja/solver` — 한국어 `/solver`·영어 `/en/solver`의 일본어판. ★2026-08-21 신설.
 * 정본 구조 = `app/en/solver/page.tsx`. 내용은 **번역이 아니라 일본 실검색으로 재조준**했다.
 *
 * ★솔버 본체(solver.holdemmaster.com)는 **noindex**다 — 2026-08-21에 `?lang=ja`로 열어
 *   `<meta name="robots" content="noindex">`를 직접 확인했다. 검색은 이 랜딩이 전담하고
 *   본체로 흘려보낸다. **일본어권에 그 진입로가 하나도 없던 것을 여는 페이지다.**
 *
 * 🔴 키워드 실측(2026-08-21 · 라쿠 MCP · google/일본어): ポーカー gto **880**(SEO난이도 34) ·
 *   ポーカー gtoアプリ 110→90 · ポーカー gtoツール 90→70 · **ポーカー gtoツール 無料 50** ·
 *   🔴 2026-08-23 정정(M-035 축B) — 초판이 적은 「난이도 24 = 이 판 유일한 低」는 **재실측에서
 *      재현되지 않았다**(재실측 34 · 12개월 −31%). 반대로 `ポーカー gto`는 34→**22**로 내려왔다.
 *      **난이도로 순서를 세우지 마라** — 뱅크 §3-7 참조. 문안은 그대로 두고 근거만 걷어냈다.
 *   ポーカー 練習 アプリ 390 · ポーカー gto 意味ない 70 · ポーカー gto 勉強法 70.
 *   근거와 «쓰지 않기로 한 것»은 `docs/keyword-bank/ja-gto-solver.md`.
 *
 * 🔴 **제목의 차별화어는 「無料」가 아니라 「登録不要」다** — SERP 실측(2026-08-21):
 *   `ポーカー GTOツール 無料` top-10 중 **6개가 제목에 이미 「無料」를 달고 있고 전부 «앱 소개 글»**이다.
 *   「무료」만으로는 구별되지 않는다. **「登録不要・インストール不要」를 표방하는 일본어 페이지는
 *   top-30에 사실상 없다.** 무료 키워드는 유지하되(SD 24로 이 판에서 가장 무르익었다),
 *   **읽는 사람에게 다른 것을 약속하는 자리는 「登録不要」로 잡는다.**
 *
 * 🔴 **「ソルバー」를 제목·H1에 쓰지 마라 — 일본어권에서는 죽은 표기다.**
 *   `ソルバー ポーカー` **40** 대 `ポーカー gto` **880** = 22배. 質問 DB도 ソルバー는 1건뿐이다.
 *   ✅ 다만 **본문 용어로는 `ソルバー`가 정본**이다(자사 ja 10편 전부 그렇게 쓴다).
 *   **두 층을 섞지 마라**: 검색 축 = GTO / 본문 용어 = ソルバー.
 *
 * 🔴 카니발 방지 — ja는 EN·KO와 «가진 것»이 다르다:
 *   · **`/ja/hand-chart`·`/ja/calculator`·`/ja/win-rate-quiz`는 존재하지 않는다.**
 *     EN 랜딩이 거는 도구 링크 3종을 그대로 옮기면 전부 404다. → **ja 블로그 글로 갈았다.**
 *   · 프리플랍 레인지 표 = `ja/holdem-starting-hands-chart`가 이미 소유한다
 *     (`ポーカー レンジ表` **1,600** · H2 「GTOプリフロップチャート vs 初心者用チャート」).
 *     **이 랜딩은 그 축을 조준하지 않는다** — 포스트플랍 계산만 가져간다.
 *   · 「GTOとは」 순수 정의 = `ja/holdem-strategy`의 FAQ가 이미 갖고 있다. 링크로 넘긴다.
 */

// 🔴 2026-08-21 정정 — 초판 TITLE 이 「…ブラウザで動くGTOソルバー」였다. **아래 자기 규칙을 어긴 것**이다.
//    ① 「ソルバー」는 검색 축이 아니다(40 대 880) ② `GTOツール`와 동의어라 한 줄에 두 번 넣은 셈이고
//    ③ 전각 ~49자라 일본어 SERP 표시폭(~30자)에서 차별화어 뒤가 통째로 잘렸다.
//    → 그 자리에 SERP 실측이 «top-30에 없다»고 판정한 「インストール不要」를 넣었다.
const TITLE = "無料ポーカーGTOツール — 登録不要・インストール不要でGTO計算 | HoldemMaster";
const DESCRIPTION =
  "インストール不要・登録不要・回数制限なしの無料ポーカーGTOツール。ブラウザ上でポストフロップのGTO戦略を計算し、169ハンドすべてのベット頻度・エクイティ・EV・EQRを表示。GTOトレーナーでの練習も無料です。";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            일본어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/ja/solver`,
    // 🔴 세 랜딩이 **같은 문자열 세트**를 선언해야 `check-hreflang`의 «세트 일치»를 통과한다.
    //    한쪽만 고치면 구글은 세트 전체를 무시하고 게이트는 빌드를 세운다.
    //    표기는 기존 두 랜딩의 «지역 포함» 형식(ko-KR·en-US)에 맞춰 ja-JP로 통일했다.
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
    },
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  openGraph: {
    title: "無料ポーカーGTOツール — HoldemMaster",
    description:
      "ブラウザでポストフロップのGTOを計算。169ハンドすべての戦略・EV・エクイティ・EQRが、インストールなしで無料で見られます。",
    url: `${SITE}/ja/solver`,
    siteName: "HoldemMaster",
    locale: "ja_JP",
    type: "website",
  },
};

/**
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다 — 전부 2026-08-21에
 *    `solver.holdemmaster.com/?lang=ja`를 열어 DOM에서 직접 읽었다.
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx`의 기능 표에도 문장으로 있다. **한쪽만 고치지 말 것.**
 * 🔴 `offers` price 0 — FAQ 「このGTOツールは本当に無料ですか?」의 주장과 같다.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "無料ポーカーGTOツール — HoldemMaster",
      description: DESCRIPTION,
      url: `${SITE}/ja/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ja",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "JPY" },
      featureList: [
        "169ハンドすべてのベット・チェック・フォールド頻度を13×13グリッドで表示",
        "ハンドごとのエクイティ・EV・エクイティ実現率（EQR）",
        "レンジ・ボード・スタック・ベットサイズツリーをすべて自分で設定",
        "レーキとレーキキャップの設定、ゲームツリーのノード単位編集",
        "精度モード（32bit浮動小数点／16bit整数）と目標エクスプロイタビリティの指定",
        "待ち時間なしで開ける計算済みの学習スポット",
        "ポットに対する比率でEVロスを採点するGTOトレーナー",
        "サマリーのCSV出力とスポットの共有リンク",
        "WebAssemblyでブラウザ上で動作 — インストールもアカウントも不要",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ_JA.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "ホーム", item: `${SITE}/ja` },
        { "@type": "ListItem", position: 2, name: "GTOソルバー", item: `${SITE}/ja/solver` },
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
      <HubPage title="GTOソルバー" locale="ja">
        <SolverClientJa />
      </HubPage>
    </>
  );
}
