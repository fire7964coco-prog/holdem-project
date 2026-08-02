import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PubIndexClient from "./pub-index-client";

// ★2026-08-02: metadata export가 없어 **루트 레이아웃의 홈 canonical과 홈 제목이 그대로 나갔다.**
//   components/seo.tsx는 useEffect로만 메타를 바꾸는 클라이언트 컴포넌트라 서버 HTML에 반영되지 않는다
//   (그 파일 주석의 "SSG 단계에서 이미 박혀 있다"는 전제가 틀렸다).
//   제목·설명 문구는 클라이언트가 광고하던 것과 **동일하게** 두고 서버로만 옮긴다 —
//   이 페이지는 「홀덤펍 추천」 5.6위·CTR 26.9%라 §17상 제목을 건드리면 안 된다.
export const metadata: Metadata = {
  title: "지역별 홀덤펍 추천 — 전국 홀덤펍 완전 가이드",
  description:
    "⚡전국 홀덤펍⚡ 강남·홍대·일산·수원·인천·분당·부산·대구 지역별 홀덤펍 위치, 바이인, 운영시간 총정리. 내 주변 홀덤펍 찾기.",
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE}/pub` },
};

export default function Page() {
  return <PubIndexClient />;
}
