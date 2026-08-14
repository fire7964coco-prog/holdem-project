import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClient from "./solver-client";
import HubPage from "@/components/hub-page";
import { SOLVER_FAQ } from "./faq";

// "GTO 솔버" 키워드는 기존 필라/포스트가 소유하지 않음(작성 시점 확인) → 이 페이지가 인덱스 대상.
// 만약 이후 /blog에 GTO 솔버 필라를 만들면 hand-chart 선례대로 이 페이지를 noindex로 전환할 것.

/**
 * 메타 문구는 **상수로 뽑아 스키마와 공유한다.**
 * 허브 트랙 규율 ③ — 구조화 데이터에 «새 문장을 짓지 않는다». 이름·설명은 metadata를 그대로 쓴다.
 * (두 곳에 각각 적으면 한쪽만 고쳐져 갈라진다.)
 */
const TITLE = "무료 GTO 솔버 — 홀덤 GTO 표를 직접 계산";
const DESCRIPTION =
  "설치·회원가입 없는 100% 무료 GTO 솔버 프로그램. 홀덤 GTO 표와 레인지 차트를 브라우저에서 바로 계산하는 GTO 계산기 — 169핸드 전략·벳 사이즈·EV·에퀴티를 한 화면에서 보세요.";

export const metadata: Metadata = {
  // ⚠ 사이트명을 직접 붙이지 말 것 — layout의 title template이 " | 홀덤마스터"를 자동으로 더한다.
  //   원본에 들어 있어 산출물이 "… | 홀덤마스터 | 홀덤마스터"가 됐다(2026-08-08 빌드에서 확인).
  // ★2026-08-09 — 「홀덤 gto 표」(210)·「gto 차트」(90)·「홀덤 gto 차트」(20)·
  //   「홀덤 gto 계산기」(20)를 이 페이지가 가져간다. 근거: 솔버가 실제로 13×13 GTO 표를
  //   «산출»한다(추측이 아니라 화면에 있는 것). /hand-chart는 값이 솔버와 달라(SB 56% 대 46.6%)
  //   GTO를 못 붙이므로 그쪽은 「홀덤 차트」(480)를 맡는다 — 역할 분리로 카니발 방지.
  //   ⚠ 「gto 표」 단독은 조준 금지 — 자동완성이 「gto 표정·표지·표절」로 만화 GTO다.
  //     반면 「gto 차트」는 「홀덤 gto 차트·포커 gto 차트·gto 프리플랍 차트」로 포커가 맞다.
  title: TITLE,
  // ★2026-08-10 — 「홀덤 gto 프로그램」(140)·「홀덤 gto 계산기」(20) 대응으로
  //   「프로그램」·「계산기」 두 명사를 desc에 추가(keyword-bank/ko-gto-solver.md §4-1).
  description: DESCRIPTION,
  alternates: { canonical: `${SITE}/solver` },
  // ★2026-08-14 추가 — 형제 도구 페이지(`/calculator`)에는 있고 여기만 없었다.
  //   문구는 위 상수 재사용(새 문장 금지).
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
 *   **FAQPage 하나뿐**이었다(WebApplication·BreadcrumbList 없음). 형제 도구 둘은 셋 다 갖고 있다.
 *
 * 🔴 `featureList`는 **화면에 실제로 있는 것만** 적는다. 「결정 지점 33곳」·「유효 핸드 13,743개」
 *    같은 요청서 수치는 라이브 번들에서 확인되지 않아 본문에서 뺐고, 여기에도 넣지 않는다.
 * 🔴 `offers` price 0 — FAQ「정말 무료인가요」의 «100% 무료·횟수 제한 없음»과 같은 주장이다.
 *    유료화하면 **여기와 FAQ를 함께** 고쳐야 한다.
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
        "계산 없이 바로 여는 교육 예제 13개 스팟",
        "GTO 트레이너 — 내 선택의 EV 손실(bb)을 채점",
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
