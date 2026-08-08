import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClient from "./solver-client";
import HubPage from "@/components/hub-page";

// "GTO 솔버" 키워드는 기존 필라/포스트가 소유하지 않음(작성 시점 확인) → 이 페이지가 인덱스 대상.
// 만약 이후 /blog에 GTO 솔버 필라를 만들면 hand-chart 선례대로 이 페이지를 noindex로 전환할 것.
export const metadata: Metadata = {
  // ⚠ 사이트명을 직접 붙이지 말 것 — layout의 title template이 " | 홀덤마스터"를 자동으로 더한다.
  //   원본에 들어 있어 산출물이 "… | 홀덤마스터 | 홀덤마스터"가 됐다(2026-08-08 빌드에서 확인).
  // ★2026-08-09 — 「홀덤 gto 표」(210)·「gto 차트」(90)·「홀덤 gto 차트」(20)·
  //   「홀덤 gto 계산기」(20)를 이 페이지가 가져간다. 근거: 솔버가 실제로 13×13 GTO 표를
  //   «산출»한다(추측이 아니라 화면에 있는 것). /hand-chart는 값이 솔버와 달라(SB 56% 대 46.6%)
  //   GTO를 못 붙이므로 그쪽은 「홀덤 차트」(480)를 맡는다 — 역할 분리로 카니발 방지.
  //   ⚠ 「gto 표」 단독은 조준 금지 — 자동완성이 「gto 표정·표지·표절」로 만화 GTO다.
  //     반면 「gto 차트」는 「홀덤 gto 차트·포커 gto 차트·gto 프리플랍 차트」로 포커가 맞다.
  title: "무료 GTO 솔버 — 홀덤 GTO 표를 직접 계산",
  description:
    "설치·회원가입 없는 100% 무료 GTO 솔버. 홀덤 GTO 표와 레인지 차트를 브라우저에서 직접 계산합니다. 169핸드 전략·벳 사이즈·EV·에퀴티를 한 화면에서 보세요.",
  alternates: { canonical: `${SITE}/solver` },
};

export default function Page() {
  return (
    <HubPage title="GTO 솔버">
      <SolverClient />
    </HubPage>
  );
}
