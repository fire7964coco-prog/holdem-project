import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_MS } from "./dict";
import { CALCULATOR_FAQ_MS } from "./faq";

/**
 * `/ms/calculator` — 말레이어 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설분) →
 *   ★2026-09-19 «계산 기능 강조» 재조준(브리프 `docs/harden-brief/calculator-landing-rewrite.md` §3-A를 ms로).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_MS) ·
 *   `faq.ts`(CALCULATOR_FAQ_MS). 정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 *
 * 🔴 키워드 실측(2026-09-19 · 뱅크 `docs/keyword-bank/ms-calculator.md` · 자동완성 59시드 × 4조합 + DFS 볼륨 28종 + SERP 3쿼리):
 *   ① **말레이어 계산기 어휘가 시장에 없다** — `kalkulator poker`가 `ms-MY`·`en-MY`·`ms-SG`·`ms-BN` **4조합 모두 0건**이고
 *      DFS 볼륨도 **null**이다(id는 10이라도 남아 있었다). 도구·개념구 **22개가 전멸**(뱅크 §2-A).
 *      🔴 `kalkulator outs` → «kalkulator outsourcing it» · `peraturan 4 dan 2`(직역) → 법령 노이즈 ·
 *      🔴 `spr calculator` → «spr **cpf** calculator»(싱가포르 영주권 납입) = 말레이시아·싱가포르 고유 오염.
 *   ② **영어형만 산다** — `poker odds calculator` **90** · `poker calculator` **90** · `poker equity calculator` 20 ·
 *      icm/pot odds/outs/hand/push fold chart/texas holdem calculator 각 10. 시장 자체는 있다(`texas holdem` 720).
 *   ③ 🔴 **그래도 영어 머리어는 조준하지 않는다** — `poker odds calculator` SERP(location Malaysia)가 **20/20 전부**
 *      글로벌 영어 도구 업계다(cardplayer·pokernews·888·natural8·pokerlistings·splitsuit·upswing…). 말레이시아 페이지 0건.
 *      반대로 `kalkulator poker`(language ms) SERP는 **#1이 개인 GitHub Pages 습작**이고 8개 중 3개가 의도 불일치
 *      (wsop 상금분배 · easysevens 정산로그 · pokercalculator.app 칩정산) = **무주공산**. id의 translate.google.com과 같은 신호다.
 *   ④ 🔴 **머리어 교체** — 09-16 일괄 개설 때 쓴 «Kalkulator Odds Poker»는 볼륨 null · 자동완성 확장 0이다.
 *      → **«Kalkulator Poker»**. 🔴 이건 id 근거를 옮긴 것이 아니라 `location=Malaysia`로 **재측정한 결과**다(브리프 §3-J).
 *      `CALC_CTA_LABELS.ms`도 같이 바꿨다.
 *   ⑤ 🔴 **«볼륨 null»을 «수요 0»으로 읽지 마라** — Google Ads는 월 10 미만을 null로 준다. 말레이시아 인구 3,200만 ↔
 *      인도네시아 2.8억(≈9배)이라 id의 «10»은 ms에서 측정 하한 아래다. 판별은 ①같은 언어의 다른 축이 사는가
 *      (`texas holdem` 720) ②그 언어 SERP가 비었는가(③) — 둘 다 예라서 조준했다(뱅크 §5).
 *   ⑥ 차별화어(Odds · Equity · ICM · Pot Odds)는 전부 **코퍼스 실측 영어 차용어**다(`lib/posts-ms/` 21편 raw 출현수:
 *      equity **184** : ekuiti **0** · board 463 : papan 2 · cip 153 : chip 4 · outs 20 · pot odds 17).
 *      → 말레이어 문장 안에서 자연스럽고 영어 토큰(90)도 제목이 같이 든다.
 *   ⑦ 🔴 **인도네시아어와 섞지 마라** — 구글의 `hl=ms` 자동완성 DB 자체가 인니어로 오염돼 있다(«gimana»·«remi»·«kartu»).
 *      우리 코퍼스는 깨끗하다: kad 459 : kartu 0 · boleh 409 : bisa 0 · kejohanan 33 : turnamen 0 · percuma 52 : gratis 0.
 *   ⑧ 숫자 조판 = 영어식(천단위 `,` · 소수 `.` — 코퍼스 131 : 2,171) · **% 앞 공백 없음**(1,599 : 0) → `percentGap` 미사용.
 *   ⑨ SPR·nilai M 단독 훅은 제목에 쓰지 않는다(settled §1).
 *
 * 🔴 내부 링크: EN이 쓰는 9슬러그(icm·equity·pot-odds·outs·probability·starting-hands-chart·short-stack·
 *   implied-odds·tournament-vs-cash-game) 가운데 ms에 실재하는 것은 **tournament-vs-cash-game 하나뿐**이다.
 *   → `related` 8은 전부 ms 코퍼스에서 골랐고, `quickRef` 6표 중 ①② 두 표는 **링크를 비웠다**(fr 선례 · 게이트 F항).
 */
// 🔴 title/description은 CALC_DICT_MS.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓰므로
//   두 자리가 갈리면 조용히 dict 쪽이 이긴다(check:seo-sync). ★2026-09-19: 옛 판은 하드코딩이었다(브리프 §3-I).
const TITLE = `${CALC_DICT_MS.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_MS.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            말레이어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/ms/calculator`,
    // 계산기 랜딩 12개(ko·en + 10로케일)가 같은 세트를 선언한다. 정본 = lib/calculator-alternates.ts
    languages: CALCULATOR_ALTERNATES,
  },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다(check:meta-lang 게이트)
  // 🔴 images는 루트 layout에서 상속되지 않는다(Next metadata는 얕은 병합) — 안 적으면 카드가 빈 채로 나간다(브리프 §3-I).
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/opengraph.jpg"],
  },
  openGraph: {
    title: "Kalkulator Poker — HoldemMaster",
    // 선례 로케일(es·pt·ja·de·fr·id)처럼 «equity 먼저 + 무료» 프레이밍.
    description:
      "Equity tangan lawan tangan, deal ICM, pot odds dan equity minimum yang diperlukan, outs, SPR, nilai M, dan push/fold — sembilan kalkulator Hold'em percuma.",
    url: `${SITE}/ms/calculator`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: ms → ms_MY (블로그·솔버 랜딩 컨벤션과 동일).
    locale: "ms_MY",
    type: "website",
    images: [{ url: "/opengraph.jpg", width: 1200, height: 630, alt: "HoldemMaster — Kalkulator Poker" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Kalkulator Poker & Kalkulator ICM",
      url: `${SITE}/ms/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ms",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1(Equity 탭 09-19 신설분 포함).
      featureList: [
        "Kalkulator equity (tangan lawan tangan)",
        "Kalkulator outs",
        "Kalkulator pot odds & implied odds",
        "Penilai tangan (kedudukan tangan)",
        "Kekuatan tangan permulaan",
        "Kalkulator SPR (stack-to-pot ratio)",
        "Kalkulator nilai M kejohanan",
        "Kalkulator ICM (Independent Chip Model)",
        "Carta push/fold Nash",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Laman utama", item: `${SITE}/ms` },
        { "@type": "ListItem", position: 2, name: "Kalkulator", item: `${SITE}/ms/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_MS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
      <HubPage title="Kalkulator" locale="ms">
        <CalculatorTool locale="ms" dict={CALC_DICT_MS} faq={CALCULATOR_FAQ_MS} />
      </HubPage>
    </>
  );
}
