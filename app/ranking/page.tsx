import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RankingClient from "./ranking-client";
import { SITES, FAQS } from "./ranking-data";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다
//   (components/seo.tsx는 useEffect로만 도는 클라이언트 컴포넌트라 서버 HTML엔 안 박힌다).
//   이 페이지는 「홀덤사이트」 28일 1,896노출로 사이트 최대 쿼리를 받는데, 같은 쿼리를 홈(/)이
//   1,351노출로 나눠 갖고 있었다. canonical이 홈을 가리키니 구글이 둘을 가를 근거가 없었다.
export const metadata: Metadata = {
  title: "온라인 홀덤 사이트, 안전하게 고르는 법 — 체크리스트 & 주요 사이트 비교 [2026]",
  description:
    "온라인 홀덤 사이트를 찾기 전 꼭 확인할 안전·합법성 기준과 먹튀 경고 신호를 정리했습니다. 세계 주요 홀덤 사이트의 라이센스·규모·특징도 정보 목적으로 비교합니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/ranking` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * 🔴 2026-08-13: 이 스키마는 원래 `ranking-client.tsx`가 만들어 `<SEO schema={jsonLd}>`로
 *   넘기고 있었는데 `components/seo.tsx`는 `schema`를 **구조분해에서 받지도 않는다** —
 *   한 번도 출력된 적 없는 죽은 코드였다. 산출물 실측에서도 ld+json이 루트 layout의
 *   WebSite·Organization뿐이었다. 이 페이지는 「홀덤사이트」로 사이트 최대 노출을 받는 자리다.
 *
 * ⚠ `@context`가 빠져 있었다 — 그대로 옮겼다면 출력은 됐어도 구글이 파싱하지 않는다.
 * ⚠ FAQPage는 **화면에 같은 문답이 렌더될 때만** 유효하다. 죽은 코드의 FAQ 3개는
 *   스키마에만 있었으므로, `ranking-data.ts`로 옮겨 화면 섹션과 **한 배열**을 쓰게 했다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "널리 알려진 온라인 홀덤 사이트 (정보 정리)",
      description:
        "설립·라이센스 관할·알려진 특징 기준으로 정리한, 전 세계적으로 널리 알려진 온라인 텍사스 홀덤 사이트 목록 (정보 제공 목적, 순위·보증 아님)",
      numberOfItems: SITES.length,
      itemListElement: SITES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.name,
        url: s.url,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "온라인 홀덤 사이트 가이드", item: `${SITE}/ranking` },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RankingClient />
    </>
  );
}
