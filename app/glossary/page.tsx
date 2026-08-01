import type { Metadata } from "next";
import GlossaryClient from "./glossary-client";

// ★2026-08-01: metadata export가 없어 /strategy와 <title>이 완전히 같았다(루트 기본값).
//   용어집은 경쟁하는 블로그 필라가 없다(holdem-glossary 슬러그는 KO에 존재하지 않음) →
//   noindex·역할 이전 대상이 아니라 **고유 제목만 주면 되는 자산**이다.
export const metadata: Metadata = {
  title: "홀덤 포커 용어 사전 — 플랍·턴·리버부터 ICM까지 27개",
  description:
    "홀덤 테이블에서 실제로 오가는 용어 27개를 한 곳에 모았습니다. 플랍·턴·리버·체크·레이즈 같은 기본부터 레인지·ICM까지, 뜻과 실전에서 쓰이는 장면을 함께 정리했습니다.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return <GlossaryClient />;
}
