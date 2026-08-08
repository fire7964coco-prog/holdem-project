import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import SolverClient from "./solver-client";
import HubPage from "@/components/hub-page";

// "GTO 솔버" 키워드는 기존 필라/포스트가 소유하지 않음(작성 시점 확인) → 이 페이지가 인덱스 대상.
// 만약 이후 /blog에 GTO 솔버 필라를 만들면 hand-chart 선례대로 이 페이지를 noindex로 전환할 것.
export const metadata: Metadata = {
  // ⚠ 사이트명을 직접 붙이지 말 것 — layout의 title template이 " | 홀덤마스터"를 자동으로 더한다.
  //   원본에 들어 있어 산출물이 "… | 홀덤마스터 | 홀덤마스터"가 됐다(2026-08-08 빌드에서 확인).
  title: "무료 GTO 솔버 — 설치 없이 브라우저에서 실행",
  description:
    "홀덤마스터가 제공하는 100% 무료 GTO 솔버. 설치·회원가입 없이 브라우저에서 텍사스 홀덤 포스트플랍 전략(레인지·벳 사이즈·EV)을 직접 계산하세요. 사용법 가이드 포함.",
  alternates: { canonical: `${SITE}/solver` },
};

export default function Page() {
  return (
    <HubPage title="GTO 솔버">
      <SolverClient />
    </HubPage>
  );
}
