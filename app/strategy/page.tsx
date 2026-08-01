import type { Metadata } from "next";
import StrategyClient from "./strategy-client";

// ★2026-08-01: metadata export가 없어 루트 기본 제목("홀덤마스터 — 텍사스 홀덤 완벽 가이드")이
//   그대로 나갔고, /glossary와 <title>이 완전히 같았다(두 페이지가 서로를 깎아먹음).
//   역할 분리: 이 페이지는 **주제별 색인 허브**, 학습 순서·깊이는 /blog/holdem-strategy 필라가 갖는다.
//   그래서 제목도 "무엇부터 배우나"(필라가 노리는 쿼리)가 아니라 "모아보기"로 잡는다.
export const metadata: Metadata = {
  title: "홀덤 전략 주제별 모아보기 — TAG·포지션·레인지·팟오즈",
  description:
    "타이트 어그레시브부터 포지션·스타팅 핸드·레인지 리딩·세미 블러핑·팟오즈까지, 홀덤 전략 주제를 한 화면에 모았습니다. 각 주제의 상세 가이드로 바로 이동하세요.",
  robots: { index: true, follow: true },
};

export default function Page() {
  return <StrategyClient />;
}
