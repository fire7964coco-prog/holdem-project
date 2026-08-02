import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * ★2026-08-02 신설. `app/login/page.tsx`가 "use client"라 metadata를 export할 수 없어
 * 루트 layout의 기본값이 그대로 나갔다 — **홈 제목 + canonical=홈**.
 * 로그인 화면이 홈을 표준으로 지목하면 안 되고, 애초에 색인 대상도 아니다(사이트맵에 없음).
 * 클라이언트 페이지에 서버 메타를 주는 방법은 이 라우트 layout뿐이다.
 */
export const metadata: Metadata = {
  title: "로그인",
  description: "홀덤마스터 커뮤니티 로그인·회원가입.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${SITE}/login` },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
