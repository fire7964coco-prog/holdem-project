import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesClient from "./rules-client";
import HubPage from "@/components/hub-page";

export const metadata: Metadata = {
  title: "포커 게임 종류별 규칙 — 텍사스 홀덤·오마하·세븐카드 스터드",
  description: "텍사스 홀덤, 오마하, 세븐카드 스터드 세 가지 포커 게임의 규칙을 한 곳에서 비교합니다. 각 게임의 기본부터 핵심 차이점까지 정리했습니다.",
  robots: { index: true, follow: true },
  // ★2026-08-02: alternates 미선언 → 루트 layout의 홈 canonical을 물려받고 있었다.
  alternates: { canonical: `${SITE}/rules` },
};

export default function Page() {
  return (
    <HubPage title="규칙">
      <RulesClient />
    </HubPage>
  );
}
