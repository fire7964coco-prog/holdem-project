import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import RulesTexasHoldemClient from "./rules-texas-holdem-client";
import HubPage from "@/components/hub-page";

// 카니발 방지: /blog/holdem-rules 필라가 "홀덤 룰" 키워드 소유 → 이 도구는 noindex.
// ★2026-08-02 canonical 추가: 루트 layout의 홈 canonical을 물려받아 **noindex인데 홈을
//   표준으로 지목**하고 있었다(모순 신호). noindex를 확실히 전달하려면 자기 자신을 가리켜야 한다.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/rules/texas-holdem` },
};

export default function Page() {
  return (
    <HubPage title="규칙">
      <RulesTexasHoldemClient />
    </HubPage>
  );
}
