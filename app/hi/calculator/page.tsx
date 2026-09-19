import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HubPage from "@/components/hub-page";
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_HI } from "./dict";
import { CALCULATOR_FAQ_HI } from "./faq";

/**
 * `/hi/calculator` — 힌디어 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설분) →
 *   ★2026-09-19 «계산 기능 강조» 재조준(브리프 `docs/harden-brief/calculator-landing-rewrite.md` §3-A를 hi로).
 *   **계산기 로케일 트랙의 마지막(11/11)**이다(ko는 별도 후순위).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_HI) ·
 *   `faq.ts`(CALCULATOR_FAQ_HI). 정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 *
 * 🔴 키워드 실측(2026-09-19 · 뱅크 `docs/keyword-bank/hi-calculator.md` · 자동완성 47시드 × 2조합 + DFS 볼륨 36종 조회(표 등재 28 · 나머지 null) + SERP 2쿼리):
 *   ① **힌디어 계산기 어휘가 시장에 없다** — `पोकर कैलकुलेटर`·`पोकर ऑड्स कैलकुलेटर`·`पोकर हैंड कैलकुलेटर`·
 *      `पोकर इक्विटी कैलकुलेटर`가 전부 **볼륨 null**이고 데바나가리 도구 시드 20개가 자동완성 전멸이다(뱅크 §2-B).
 *   ② 🔴 **새 신호형 — 구글이 데바나가리 시드를 «영어로 치환해서» 돌려준다**: `पोकर संभावना कैलकुलेटर` →
 *      `poker probability calculator` 5개 전부 영어 · `पोकर इक्विटी कैलकुलेटर` → 영어 10개.
 *      id·ms는 «0건»이었지만 hi는 «0건 + 영어 치환»이다 — 그 언어의 쿼리 공간이 비어 있다는 뜻이다(뱅크 §2-A).
 *      🔴 오염: `आईसीएम कैलकुलेटर` → **`lcm कैलकुलेटर`**(최소공배수 · 수학) · `spr calculator` → **`sip calculator`**
 *      (인도 금융 Systematic Investment Plan) · `poker hindi` → «hindi meaning» **사전 의도**(시드로 쓰지 마라).
 *   ③ **영어형은 크게 살아 있다** — `poker odds calculator` **390** · `poker calculator` **210** ·
 *      `poker equity calculator` **110** · `poker hand calculator` 70 · `icm calculator` 30 · `pot odds calculator` 20.
 *      🔴 id·ms는 머리어가 90이었다 — 인도는 **4.3배**다.
 *   ④ 🔴 **그래도 영어 SERP는 조준하지 않는다** — `poker odds calculator`(location India) 상위 **19/19가 전부**
 *      글로벌 영어 도구 업계다(cardplayer·pokernews·omnicalculator·888·natural8·splitsuit·upswing…). 인도 페이지 0건.
 *      id(10/10)·ms(20/20)와 동형이라 단기 승산이 없다.
 *   ⑤ 🔴 **반대로 힌디어 SERP는 비어 있다** — `पोकर कैलकुलेटर`(language Hindi) 유기 결과 **9개 중 5개가
 *      `translate.google.com`**(영어 페이지의 기계번역)이고, #8조차 「हिंदी में देखने के लिए क्लिक करें」를 단 영어 페이지다.
 *      id의 3/8보다 강한, **지금까지 가장 뚜렷한 «공백» 신호**다(뱅크 §3-B).
 *   ⑥ 🔴 **그런데 제목 머리어는 «영어를 유지»한다 — id·ms와 반대 판정이다.**
 *      두 로케일은 자국어 볼륨 null이 **인구 대비 해상도 아래**로 설명됐지만(브리프 §3-L ①), hi는 **인구 14억**에서
 *      데바나가리 `पोकर`가 **880**으로 잡히는데도 도구구만 null이다 — 해상도가 아니라 **부재**다.
 *      → 2026-09-16 사장님 지시(「계산기라는 현지 용어가 없으면 그냥 영어로」)를 실측이 **확인**한 것이다.
 *      `CALC_CTA_LABELS.hi`의 영어 문구도 `location=India` 재측정 후 **유지**한다(뱅크 §5).
 *      🔴 ⑤의 공백을 먹는 수단은 제목이 아니라 **본문·H2·FAQ가 힌디어 원문인 것**이다 — 경쟁자가 전부 기계번역이다.
 *   ⑦ 차별화어(equity · pot odds · ICM)는 전부 **코퍼스 실측 라틴 차용어**다(`lib/posts-hi/` 21편:
 *      equity **186** : इक्विटी **0** · bet 821 : बेट 1 · raise 308 : रेज 0 · chip(s) 142 : चिप 0).
 *      🔴 예외 둘: **बोर्ड 313 : board 137**(산문은 데바나가리) · **हैंड 606 : hand 47**(패 = हैंड).
 *   ⑧ 숫자 조판 = 서양식(천단위 `,` · 소수 `.`) — 🔴 **लाख 묶음(`1,00,000`)은 코퍼스 0건**이라 `numberLocale`은
 *      `hi-IN`이 아니라 **`en-US`**다. % 앞 공백 없음(**1,611 : 0**) → `percentGap` 미사용
 *      (🔴 데바나가리 선례가 없어 이 측정이 유일한 근거 · hi는 09-19까지 게이트 G항 「미검사」 로케일이었다).
 *   ⑨ SPR·M value 단독 훅은 제목에 쓰지 않는다(settled §1).
 *
 * 🔴 내부 링크: EN이 쓰는 9슬러그(icm·equity·pot-odds·outs·probability·starting-hands-chart·short-stack·
 *   implied-odds·tournament-vs-cash-game) 가운데 hi에 실재하는 것은 **tournament-vs-cash-game 하나뿐**이다(ms와 동형).
 *   → `related` 8은 전부 hi 코퍼스에서 골랐고, `quickRef` 6표 중 ①② 두 표는 **링크를 비웠다**(fr 선례 · 게이트 F항).
 */
// 🔴 title/description은 CALC_DICT_HI.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓰므로
//   두 자리가 갈리면 조용히 dict 쪽이 이긴다(check:seo-sync). ★2026-09-19: 옛 판은 하드코딩이었다(브리프 §3-I).
const TITLE = `${CALC_DICT_HI.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_HI.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            힌디어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/hi/calculator`,
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
    title: "Poker Odds Calculator — HoldemMaster",
    // 선례 로케일(es·pt·ja·de·fr·id·ms)처럼 «equity 먼저 + 무료» 프레이밍.
    description:
      "हैंड बनाम हैंड equity, pot odds, outs, हैंड रैंकिंग, SPR, M value और ICM deal — 9 मुफ़्त Hold'em कैलकुलेटर एक ही जगह।",
    url: `${SITE}/hi/calculator`,
    siteName: "HoldemMaster",
    locale: "hi_IN",
    type: "website",
    images: ["/opengraph.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "Poker Odds Calculator और ICM कैलकुलेटर",
      url: `${SITE}/hi/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "hi",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 🔴 9개 — dict.guide.cards와 같은 순서·같은 도구(Equity 탭 신설분 포함).
      featureList: [
        "Equity कैलकुलेटर (हैंड बनाम हैंड)",
        "Outs कैलकुलेटर",
        "Pot odds और implied odds कैलकुलेटर",
        "हैंड रैंकिंग जाँच",
        "Starting hand की ताक़त",
        "SPR (stack-to-pot ratio) कैलकुलेटर",
        "Tournament M value कैलकुलेटर",
        "ICM (Independent Chip Model) कैलकुलेटर",
        "Nash push/fold चार्ट",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "होम", item: `${SITE}/hi` },
        { "@type": "ListItem", position: 2, name: "कैलकुलेटर", item: `${SITE}/hi/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_HI.map((f) => ({
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
      <HubPage title="कैलकुलेटर" locale="hi">
        <CalculatorTool locale="hi" dict={CALC_DICT_HI} faq={CALCULATOR_FAQ_HI} />
      </HubPage>
    </>
  );
}
