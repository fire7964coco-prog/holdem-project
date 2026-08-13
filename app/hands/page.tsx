import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandsClient from "./hands-client";
import { HANDS, FAQS } from "./hands-data";

/**
 * ★2026-08-13 색인 개시 (사장님 결정) — hand-chart 선례(2026-08-08)와 같은 논리다.
 *
 * 원래 의도: 「blog/holdem-hand-rankings 필라가 족보 키워드를 소유하니 도구는 SERP에서 빠진다」.
 * 그런데 28일 GSC 실측이 그 전제를 부정했다 — 「홀덤 족보 순위」를 누가 받았나:
 *     이 도구 (noindex·제목 없음)  → 노출 111 · 순위 9.4
 *     필라 blog/holdem-hand-rankings → 노출 117 · 순위 15.0
 * 구글은 «표를 보여주는 도구» 쪽을 6계단 높게 평가했다. 디인덱스가 완료된 7일 창에서
 * 필라는 15.0 → 12.1로 3계단 올랐을 뿐, 이 페이지가 갖고 있던 9.4에는 닿지 못했다.
 * hand-chart는 「둘 다 0이라 잃을 게 없다」였지만 여기는 실제로 1페이지 문턱 자산을 버린 것이다.
 *
 * ★그리고 이 페이지는 제목조차 없는 상태로 그 순위를 받았다.
 *   서버 HTML의 title·description이 루트 layout 기본값(홈 제목)이었다 —
 *   noindex라 아무도 안 챙긴 자리다. hand-chart도 해제 때 같은 상태였다.
 *   검색 결과에 「홀덤마스터 — 텍사스 홀덤 완벽 가이드」로 떴으니 CTR 0.68%가 당연했다.
 *   즉 순위와 CTR 양쪽에 손도 안 댄 여지가 통째로 남아 있다.
 *
 * ★메타 조준 근거 (라쿠 · Korean/South Korea · 12개월 평균, 2026-08-13 실측):
 *       포커 족보          18,100   ← 이 판 최대. 우리는 3페이지(27.8위)였다
 *       홀덤족보(붙여쓰기)  8,100   ← GSC 노출 2. 표기 하나가 볼륨을 가른다
 *       텍사스 홀덤 족보    2,400
 *       포커 족보 순위        720
 *       홀덤 족보 순위        390   ← GSC 213노출이라 주력처럼 보였으나 실볼륨은 작다
 *   「홀덤 족보 카드」·「족보표」·「포커 핸드 랭킹」은 데이터 없음(≈0) — 제목에 쓰지 말 것.
 *
 * 재카니발 방지는 «역할 분리»로 한다 (noindex로 되돌리는 것은 최후 수단):
 *     이 도구 = 도구성 의도(지금 표를 본다)   → 확률의 근거·키커 판정은 필라로 보낸다
 *     필라    = 설명형 의도(왜 그 순서인가)   → 7장 기준 확률·같은 족보 비교·실전 판정
 * 4주 뒤(2026-09-10경) 재측정할 것. 필라 노출이 떨어지면 진짜 카니발이니 되돌린다.
 *   기준선(2026-08-09 GSC 7일): 필라 「홀덤 족보 순위」 63노출 12.1위 / 이 도구 0.
 *
 * canonical은 자기 자신을 가리킨다 — 루트 layout의 canonical은 절대주소라
 * 상속되면 항상 홈이 된다(components/seo.tsx 주석의 2026-08-02 사고 참조).
 */
export const metadata: Metadata = {
  title: "족보 헷갈릴 때 여는 표 — 포커 족보·홀덤족보 순위 10단계",
  description:
    "로열플러시부터 하이카드까지 10단계를 예시 카드와 함께 한 장에 담았습니다. 홀덤 7장 기준 실제 확률까지 붙여, 게임 중 족보가 헷갈릴 때 바로 확인하는 표입니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/hands` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * ★2026-08-13: 원래 hands-client.tsx가 Article·BreadcrumbList를 만들어
 *   `<SEO schema={jsonLd}>`로 넘기고 있었는데 `components/seo.tsx`는 `schema`를
 *   구조분해에서 받지도 않는다 — **한 번도 출력된 적이 없는 죽은 코드였다.**
 *   라이브 실측에서도 ld+json이 루트 layout의 WebSite 1개뿐이었다.
 *
 * 타입은 ItemList로 잡았다. 이 페이지의 본체가 «순위가 매겨진 10단계 표»라
 * Article보다 정확하고, 순위형 리치결과·AI 발췌에 그대로 쓰인다.
 * (Article은 저자·발행일이 있어야 맞는 타입이라 도구 페이지에는 부적합했다.)
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "포커·홀덤 족보 순위 (텍사스 홀덤 7장 기준, 강→약 10단계)",
      description:
        "로열 플러시부터 하이카드까지 10단계. 확률은 홀카드 2장 + 보드 5장, 총 7장에서 최강 5장을 고른 기준입니다.",
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      numberOfItems: HANDS.length,
      itemListElement: HANDS.map((h) => ({
        "@type": "ListItem",
        position: h.rank,
        name: h.name.split(" (")[0],
        description: `${h.example.join(" ")} · ${h.description} 홀덤 7장 기준 ${h.prob}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "포커 족보 순위표", item: `${SITE}/hands` },
      ],
    },
    /**
     * FAQPage — 화면의 FAQ와 **같은 배열**에서 만든다.
     * ⚠ 구글 FAQ 리치결과는 2026-05-07에 종료됐지만 마크업 자체는 유효하다
     *   (Bing·Perplexity·RAG가 파싱한다). 본문에도 같은 문장이 있어야 LLM이 읽는다 —
     *   스키마에만 있는 정보는 못 읽는다(posting.mdc §GEO).
     */
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HandsClient />
    </>
  );
}
