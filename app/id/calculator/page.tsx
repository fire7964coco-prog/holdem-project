import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import CalculatorTool from "@/components/calculator/calculator-tool";
import HubPage from "@/components/hub-page";
import { CALCULATOR_ALTERNATES } from "@/lib/calculator-alternates";
import { CALC_DICT_ID } from "./dict";
import { CALCULATOR_FAQ_ID } from "./faq";

/**
 * `/id/calculator` — 인도네시아어 계산기 랜딩. ★2026-09-17 신설(10개 로케일 동시 개설분) →
 *   ★2026-09-19 «계산 기능 강조» 재조준(브리프 `docs/harden-brief/calculator-landing-rewrite.md` §3-A를 id로).
 * 공용 컴포넌트 = `components/calculator/calculator-tool.tsx` + 이 폴더의 `dict.ts`(CALC_DICT_ID) ·
 *   `faq.ts`(CALCULATOR_FAQ_ID). 정본 구조 = `app/en/calculator/page.tsx` · hreflang = `lib/calculator-alternates.ts`.
 *
 * 🔴 키워드 실측(2026-09-19 · 뱅크 `docs/keyword-bank/id-calculator.md` · 자동완성 52시드 + 라쿠 볼륨 35종 + DFS SERP 3쿼리):
 *   ① **인니어 계산기 명사는 전멸** — «kalkulator + X»는 `kalkulator poker`까지 포함해 **자동완성이 전부 0건**이다.
 *      볼륨이 남은 것은 `kalkulator poker` **10**뿐이고, `kalkulator odds poker`·`kalkulator peluang poker`·
 *      `kalkulator icm`·`probabilitas poker`는 **null 확인**, `kalkulator pot odds`·`kalkulator equity poker` 등은 **미측정**이다.
 *      🔴 `kalkulator outs` → «kalkulator outsourcing it» · `cara menghitung outs` → 10/10 «outstanding» 오염.
 *   ② **영어형만 산다** — `poker calculator` 90 · `poker odds calculator` 90(🔴 둘은 시계열이 달라 **별개 군**이다 ·
 *      브리프 §3-J ① 동일 군 판정 통과) · `poker hand calculator` 30 · icm/pot odds/outs/spr/push fold chart 각 10.
 *   ③ 🔴 **머리어 교체** — 09-16 일괄 개설 때 쓴 «Kalkulator Odds Poker»는 **볼륨 null · 자동완성 0**이었다(옛 주석이
 *      «핵심명 규율»을 근거로 적었지만 그건 코퍼스에서 왔지 시장에서 오지 않았다 — 브리프 §3-J ④ 함정 그대로).
 *      → **«Kalkulator Poker»**(10 · +41%↑ · 어순이 인니어 정상형 · **구글 자신이 «poker calculator»를 그렇게 번역한다**:
 *      `kalkulator poker` SERP #3 = Wikipedia-id 제목 축어). fr식 «교체»이지 zh-hant식 «분리»가 아니다.
 *      `CALC_CTA_LABELS.id`도 같이 바꿨다.
 *   ④ 🔴 **영어 머리어(90)는 조준하지 않는다** — SERP top10이 pokerlistings·omnicalculator·natural8·splitsuit 등
 *      영어 도구 업계 전체다(인니어 페이지 0개). 반대로 `kalkulator poker`(10) SERP는 8개 중 **3개가
 *      translate.google.com**(구글이 원문이 없어 영어를 기계번역해 때운다) = 무주공산 →
 *      메모리 `low-volume-longtail-aggregation`(«볼륨 10도 winnable이면 버리지 마») 정면 적용.
 *   ⑤ 차별화어(odds·equity·ICM·pot odds)는 전부 **코퍼스 실측 영어 차용어**다 — equity **324**(`id-posting-reference.md`
 *      §5-A · **문장 수**) · 2026-09-19 raw 출현수 재계수(`lib/posts-id/` 55편): pot odds **168** · outs **246** · ICM **155**.
 *      🔴 두 수치는 **척도가 다르다**(문장 수 ↔ raw) — 섞어 인용하지 마라(§5-A E) → 인니어 문장 안에서 자연스럽고 영어 토큰도 같이 먹는다.
 *   ⑥ 숫자 조판 = 인니식(천단위 `.` · 소수 `,` · 🔴 **% 앞 공백 없음** — §5-A C 「35,4%」. fr 「35 %」와 다르다).
 *   ⑦ SPR·nilai M 단독 훅은 제목에 쓰지 않는다(settled §1).
 *   🟢 오염 확인: ICM은 id에서 깨끗하다(체중·세금 오염은 **영어 시드** `icm calculator`에서만 왔다) ·
 *      🔴 `rumus poker` 390 = «rumus poker jitu»(도박 필승법) → 시드로도 쓰지 않는다 ·
 *      🔴 `push fold` 단독 = git «push folder to github» 지배 → `push fold chart` 결합형만.
 */
// 🔴 title/description은 CALC_DICT_ID.seo에서 가져온다 — 클라이언트 <SEO>가 같은 값을 런타임에 덮어쓰므로
//   두 자리가 갈리면 조용히 dict 쪽이 이긴다(settled-decisions §6 · check:seo-sync).
//   ★2026-09-19: 옛 판은 TITLE을 하드코딩했다(브리프 §3-I) — 선례 7로케일은 전부 dict 파생이다.
const TITLE = `${CALC_DICT_ID.seo.title} | HoldemMaster`;
const DESCRIPTION = CALC_DICT_ID.seo.description;

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            인도네시아어 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: `${SITE}/id/calculator`,
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
    // 선례 로케일(es·pt·ja·de·fr)처럼 «equity 먼저 + 무료» 프레이밍.
    description:
      "Equity hand lawan hand, deal ICM, pot odds dan equity minimum yang dibutuhkan, outs, SPR, nilai M, dan push/fold — sembilan kalkulator Hold'em gratis.",
    url: `${SITE}/id/calculator`,
    siteName: "HoldemMaster",
    // lib/intl.ts OG_LOCALE: id → id_ID (블로그·솔버 랜딩 컨벤션과 동일).
    locale: "id_ID",
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
      url: `${SITE}/id/calculator`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "id",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      // 9개 — 도구 탭과 1:1(Equity 탭 09-19 신설분 포함).
      featureList: [
        "Kalkulator equity (hand lawan hand)",
        "Kalkulator outs",
        "Kalkulator pot odds & implied odds",
        "Penilai hand (urutan kartu)",
        "Kekuatan starting hand",
        "Kalkulator SPR (stack-to-pot ratio)",
        "Kalkulator nilai M turnamen",
        "Kalkulator ICM (Independent Chip Model)",
        "Chart push/fold Nash",
      ],
      publisher: { "@type": "Organization", name: "HoldemMaster", url: SITE },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE}/id` },
        { "@type": "ListItem", position: 2, name: "Kalkulator", item: `${SITE}/id/calculator` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CALCULATOR_FAQ_ID.map((f) => ({
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
      <HubPage title="Kalkulator" locale="id">
        <CalculatorTool locale="id" dict={CALC_DICT_ID} faq={CALCULATOR_FAQ_ID} />
      </HubPage>
    </>
  );
}
