import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesSevenCardStudClient from "./rules-seven-card-stud-client";
import HubPage from "@/components/hub-page";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
export const metadata: Metadata = {
  title: "세븐 카드 스터드 포커 규칙 완벽 가이드 — 7장 포커 하는법",
  description:
    "⚡세븐 카드 스터드⚡ 포커 기초 규칙 완벽 가이드. 앤티·브링인부터 서드~세븐스 스트리트 5단계 베팅, 업카드 전략, 라이브 카드 개념까지 한 페이지에서 마스터.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/rules/seven-card-stud` },
};

export default function Page() {
  return (
    <HubPage title="규칙">
      <RulesSevenCardStudClient />
    </HubPage>
  );
}
