import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import HandChartClient from "./hand-chart-client";
import HubPage from "@/components/hub-page";

/**
 * ★2026-08-08 noindex 해제 (사장님 결정) — 몰아주기가 성과로 회수되지 않았다.
 *
 * 원래 의도: "/blog/holdem-starting-hand-range 필라가 «홀덤 스타팅 핸드» 키워드를 소유하니
 * 도구는 SERP에서 빠진다." 그런데 **28일 GSC 실측이 그 전제를 부정했다**:
 *     몰아준 쪽 holdem-starting-hand-range → 노출 16 · 클릭 1 · 순위 38~60위
 *     희생한 쪽 /hand-chart              → 노출 0 (noindex)
 * 희생을 시켰는데 상대가 못 이겼다. 즉 «둘 다 0»이었고 잃을 게 없다.
 *
 * 반대 근거도 있다 — 이 사이트에서 «도구 페이지»는 검색에 통한다:
 *     /calculator 노출 463 · 「홀덤 icm 계산기」 6.5위 (같은 28일)
 * 그리고 포스팅이 잡히는 검색어에 「홀덤 핸드 승률 표」·「포지션별 핸드레인지」가 있다 —
 * **표를 원하는 의도**라 설명글보다 차트가 정답인 자리다.
 *
 * ⚠ 재카니발 방지는 «역할 분리»로 한다(noindex로 되돌리지 말 것):
 *     차트  = 도구성 의도(표를 지금 본다) → 근거 해설은 포스팅으로 보낸다
 *     포스팅 = 설명형 의도(왜 그렇게 플레이하나)
 * ⚠ 4주 뒤(2026-09-05경) 재측정할 것. **포스팅 노출이 떨어지면 진짜 카니발**이니 되돌린다.
 *   현재 기준선: 포스팅 노출 16 · 클릭 1 / 차트 0.
 *
 * ★`/hands`(족보 순위)는 사정이 다르다 — 상대가 holdem-hand-rankings(내부링크 198회,
 *   사이트 최강 필라)라 거기서의 카니발은 실제 손해다. ★`/hands`는 noindex 유지.
 *   (⚠ 블록주석 안에서 별표 두 개 뒤에 슬래시가 오면 주석 종료 기호가 만들어져 거기서 끊긴다.
 *    「굵게 표기 + 슬래시로 시작하는 경로」 조합이 그렇다. 2026-08-08에 이걸로 빌드가 깨졌다 —
 *    CLAUDE.md §12-A 백틱 금지와 같은 계열의 함정이다.)
 */
export const metadata: Metadata = {
  title: "홀덤 스타팅 핸드 차트 — 포지션별 오픈 레인지 169핸드",
  description:
    "UTG에선 12%, 버튼에선 42%. 169개 스타팅 핸드를 5개 포지션별로 색칠한 차트입니다. 포지션을 누르면 그 자리에서 오픈할 핸드만 골라 보여줍니다.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/hand-chart` },
};

export default function Page() {
  return (
    <HubPage title="핸드 차트">
      <HandChartClient />
    </HubPage>
  );
}
