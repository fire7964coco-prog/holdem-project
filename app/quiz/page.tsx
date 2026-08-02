import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import QuizClient from "./quiz-client";

// ★2026-08-02: metadata export가 없어 홈 canonical·홈 제목이 그대로 나갔다.
//   제목은 클라이언트가 쓰던 문구에서 "| 홀덤마스터"만 뗀다 — 루트 layout의
//   title.template("%s | 홀덤마스터")이 자동으로 붙이므로 그대로 두면 두 번 붙는다.
export const metadata: Metadata = {
  title: "홀덤 족보 퀴즈 — 7장에서 최강 패를 맞혀라!",
  description:
    "홀덤 족보 퀴즈! 7장 카드에서 베스트 5장 족보를 맞혀보세요. 10문제로 나의 족보 실력을 테스트하고 결과를 공유하세요.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/quiz` },
};

export default function Page() {
  return <QuizClient />;
}
