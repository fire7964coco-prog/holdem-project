import type { Metadata } from "next";
import NotFoundContent from "@/components/not-found-content";

/**
 * 커스텀 404.
 *
 * ★그 전까지는 Next 기본 화면이었다 — 흰 배경에 영어 한 줄
 *   "404: This page could not be found." 뿐이고 사이트의 나머지로 갈 링크가 하나도 없었다.
 *   404에 떨어진 방문자는 사실상 100% 이탈이었다는 뜻이다.
 *
 * ★2026-08-04: 본문을 `components/not-found-content.tsx`로 분리했다.
 *   이 파일은 서버 컴포넌트라 **어느 경로에서 404가 났는지 모른다**(pathname을 안 받는다).
 *   로케일별 언어를 고르려면 경로가 필요해서 클라이언트 쪽에서 읽는다.
 *   그전까지 /en/... 오타 주소로 들어온 영어권 방문자가 **한국어 404**를 봤다.
 *   metadata export는 서버 컴포넌트에서만 가능하므로 껍데기는 여기 남긴다.
 *
 * ★404는 색인 대상이 아니다(robots noindex). Next가 이 페이지에 자동으로 404 상태 코드를
 *   주므로 별도 처리는 필요 없지만, 크롤러가 실수로 잡아가지 않도록 메타로도 명시한다.
 */
export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 (404)",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <NotFoundContent />;
}
