import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import GlossaryClient from "./glossary-client";
import HubPage from "@/components/hub-page";
import { TERMS } from "./glossary-data";

// ★2026-08-01: metadata export가 없어 /strategy와 <title>이 완전히 같았다(루트 기본값).
//   용어집은 경쟁하는 블로그 필라가 없다(holdem-glossary 슬러그는 KO에 존재하지 않음) →
//   noindex·역할 이전 대상이 아니라 **고유 제목만 주면 되는 자산**이다.
export const metadata: Metadata = {
  // 🔴 개수는 **배열이 진실이다.** 2026-08-13 실측에서 여기 「27개」가 실제 26개와 어긋났고,
  //    화면은 {TERMS.length}를 렌더하고 있어 SERP 제목과 페이지가 갈려 있었다.
  //    게다가 제목이 약속한 **턴·리버·ICM이 배열에 아예 없었다** → 그 셋을 채워 제목을 참으로 만들었다(29개).
  title: "홀덤 포커 용어 사전 — 플랍·턴·리버부터 ICM까지 29개",
  description:
    "홀덤 테이블에서 실제로 오가는 용어 29개를 한 곳에 모았습니다. 플랍·턴·리버·체크·레이즈 같은 기본부터 레인지·ICM까지, 뜻과 실전에서 쓰이는 장면을 함께 정리했습니다.",
  robots: { index: true, follow: true },
  // ★2026-08-02: alternates 미선언 → 루트 layout의 홈 canonical을 물려받고 있었다.
  alternates: { canonical: `${SITE}/glossary` },
};

/**
 * JSON-LD는 **서버에서** 내보낸다.
 *
 * 🔴 2026-08-13: 원래 `glossary-client.tsx`가 스키마를 만들어 `<SEO schema={jsonLd}>`로
 *   넘겼는데 `components/seo.tsx`는 `schema`를 구조분해에서 받지도 않는다 — 죽은 코드였다.
 *
 * ⚠ 타입을 **FAQPage → DefinedTermSet**으로 바꿨다. 구 코드는 질문을
 *   `홀덤에서 {용어}이란 무엇인가요?`로 **합성**했는데 그 문장은 화면에 없다(용어 카드 목록이다).
 *   구글 FAQPage는 «질문·답변이 페이지에 보일 것»을 요구하므로 그대로 옮기면 스펙 위반이고,
 *   FAQ 리치결과는 2026-05-07에 종료돼 «FAQPage여서 얻는 것»도 없다.
 *   용어집의 정확한 타입은 DefinedTermSet/DefinedTerm이고, 답변 텍스트(`desc`)는 화면에 그대로 있다.
 * ⚠ 구 코드는 `TERMS.slice(0, 8)`로 8개만 넣었다 — 전수로 바꿨다.
 */
export default function Page() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTermSet",
      name: "홀덤 포커 용어 사전",
      description:
        "홀덤 테이블에서 실제로 오가는 용어를 뜻과 실전에서 쓰이는 장면과 함께 정리한 사전입니다.",
      url: `${SITE}/glossary`,
      hasDefinedTerm: TERMS.map((t) => ({
        "@type": "DefinedTerm",
        name: t.term,
        description: t.desc,
        inDefinedTermSet: `${SITE}/glossary`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "홀덤 포커 용어 사전", item: `${SITE}/glossary` },
      ],
    },
  ];

  return (
    <HubPage title="용어사전">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlossaryClient />
    </HubPage>
  );
}
