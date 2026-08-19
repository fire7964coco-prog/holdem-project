import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClient from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ } from "./faq";

// "GTO 솔버" 키워드는 기존 필라/포스트가 소유하지 않음(작성 시점 확인) → 이 페이지가 인덱스 대상.
// ★2026-08-14 확인: 솔버 본체(solver.holdemmaster.com)는 **noindex**다(라이브 meta robots).
//   즉 검색 노출은 전부 이 랜딩이 받아 본체로 흘려보낸다 — 롱테일을 이 한 장이 다 먹어야 한다.

/**
 * 메타 문구는 **상수로 뽑아 스키마와 공유한다.**
 * 허브 트랙 규율 ③ — 구조화 데이터에 «새 문장을 짓지 않는다». 이름·설명은 metadata를 그대로 쓴다.
 */
const TITLE = "무료 GTO 솔버 — 홀덤 GTO 표 계산 프로그램";
const DESCRIPTION =
  "설치도 회원가입도 없는 100% 무료 GTO 솔버. 한국어로 된 홀덤 GTO 프로그램으로 13×13 GTO 표와 EV·에퀴티를 브라우저에서 바로 계산합니다. 교육 예제와 EV 손실 채점 트레이너까지 무료입니다.";

export const metadata: Metadata = {
  // ⚠ 사이트명을 직접 붙이지 말 것 — layout의 title template이 " | 홀덤마스터"를 자동으로 더한다.
  //   원본에 들어 있어 산출물이 "… | 홀덤마스터 | 홀덤마스터"가 됐다(2026-08-08 빌드에서 확인).
  // ★2026-08-09 — 「홀덤 gto 표」(210)·「gto 차트」(90)·「홀덤 gto 차트」(20)·
  //   「홀덤 gto 계산기」(20)를 이 페이지가 가져간다. 근거: 솔버가 실제로 13×13 GTO 표를
  //   «산출»한다. /hand-chart는 값이 솔버와 달라(SB 56% 대 46.6%) GTO를 못 붙이므로
  //   그쪽은 「홀덤 차트」(480)를 맡는다 — 역할 분리로 카니발 방지.
  //   ⚠ 「gto 표」·「gto」 단독은 조준 금지 — 자동완성이 **만화 GTO**다
  //     (gto 애니·오프닝 가사·왓챠·보는 순서). 앞에 「홀덤」·「포커」가 붙어야 갈린다.
  // ★2026-08-14 — 제목에 「프로그램」을 넣었다. 「홀덤 gto 프로그램」 140은 이 축에서
  //   3번째로 큰 단어이고 **12개월 +27.5%로 유일하게 뚜렷한 상승세**인데 제목에 없었다.
  //   desc에는 「한국어」를 추가했다 — 「gto wizard 한글」 110(+47.8%)이 실측되는,
  //   즉 «한국어로 된 GTO 도구»를 찾는 수요가 실재하는 자리다.
  title: TITLE,
  description: DESCRIPTION,
  // ★2026-08-19 — `/en/solver`가 열리면서 ko ↔ en 상호 hreflang을 걸었다.
  //   한쪽만 걸면 구글이 쌍으로 인정하지 않는다(상호 참조가 조건이다).
  alternates: {
    canonical: `${SITE}/solver`,
    languages: {
      "ko-KR": `${SITE}/solver`,
      "en-US": `${SITE}/en/solver`,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE}/solver`,
    siteName: "홀덤마스터",
    locale: "ko_KR",
    type: "website",
  },
};

/**
 * JSON-LD는 **서버에서** 내보낸다 — 정본 = `app/calculator/page.tsx`.
 * ★2026-08-14 신설. 그 전까지 이 페이지의 구조화 데이터는 클라이언트 컴포넌트가 내보내는
 *   **FAQPage 하나뿐**이었다. 형제 도구 둘(`/calculator`·`/hand-chart`)은 셋 다 갖고 있다.
 *
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다. 전부 2026-08-14에
 *    solver.holdemmaster.com을 직접 열어 확인했다(레이크·정밀도 모드·트리 편집·CSV·
 *    스팟 공유·트레이너 33개 결정 노드).
 * 🔴 스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다(posting.mdc GEO §) →
 *    아래 항목은 전부 `solver-client.tsx`의 기능 표에도 문장으로 들어 있다. **한쪽만 고치지 말 것.**
 * 🔴 `offers` price 0 — FAQ「정말 무료인가요」의 «100% 무료·횟수 제한 없음»과 같은 주장이다.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: TITLE,
      description: DESCRIPTION,
      url: `${SITE}/solver`,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript",
      inLanguage: "ko",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
      featureList: [
        "169개 핸드의 벳·체크·폴드 빈도를 13×13 GTO 표로 계산",
        "핸드별 EV·에퀴티·에퀴티 실현율(EQR) 표시",
        "양쪽 레인지·보드·스택·벳 사이즈 트리 직접 설정",
        "레이크·레이크 캡 반영 및 게임 트리 직접 편집",
        "정밀도 모드(32비트 FP / 16비트 정수)와 목표 오차 지정",
        "계산 없이 바로 여는 교육 예제 스팟",
        "GTO 트레이너 — 결정 지점마다 EV 손실(bb)로 채점",
        "결과 요약 CSV 내보내기 · 스팟 공유 링크",
        "브라우저에서 실행(WebAssembly) · 설치·회원가입 없음",
      ],
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@type": "FAQPage",
      mainEntity: SOLVER_FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE },
        { "@type": "ListItem", position: 2, name: "GTO 솔버", item: `${SITE}/solver` },
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
      <HubPage title="GTO 솔버">
        <SolverClient />
      </HubPage>
    </>
  );
}
