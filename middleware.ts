import { type NextRequest } from "next/server";
import { updateSession } from "./lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

// 커뮤니티 경로에만 적용 — 기존 /blog, /en/blog 등 SEO 라우트는 절대 건드리지 않음
export const config = {
  matcher: ["/community/:path*"],
};
