import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesOmahaClient from "./rules-omaha-client";
import HubPage from "@/components/hub-page";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
//   28일 「오마하 룰」 24노출 9.0위로 실제 수요를 받는 페이지다.
export const metadata: Metadata = {
  title: "오마하 포커 규칙 완벽 가이드 — PLO 홀 카드 4장, 팟 리밋 완전 정리",
  description:
    "⚡오마하 포커⚡ 기초 규칙 완벽 가이드. 홀 카드 4장 사용법, 팟 리밋 베팅 방식, 텍사스 홀덤과의 차이점, PLO 핵심 전략 팁까지 한 페이지에서 마스터하세요.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/rules/omaha` },
};

export default function Page() {
  return (
    <HubPage title="규칙">
      <RulesOmahaClient />
    </HubPage>
  );
}
