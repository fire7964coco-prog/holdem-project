import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// 홈 피드 및 인증 경로에 적용 — 기존 /blog, /en/blog 등 SEO 라우트는 절대 건드리지 않음
export const config = {
  matcher: ["/", "/login", "/post/:path*", "/auth/:path*"],
};
