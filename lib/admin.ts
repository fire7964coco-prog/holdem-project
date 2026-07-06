import { createClient } from "@/lib/supabase/server";

/**
 * 어드민 판별 — 스키마 변경 없이 env 이메일 화이트리스트로 관리.
 * Vercel/로컬 env: ADMIN_EMAILS="a@x.com,b@y.com" (쉼표 구분)
 */
export function adminEmails(): string[] {
  return (process.env.ADMIN_EMAILS ?? "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return adminEmails().includes(email.toLowerCase());
}

/**
 * 현재 로그인 유저가 어드민이면 user를 반환, 아니면 null.
 * ⚠️ 모든 어드민 서버 액션 첫 줄에서 반드시 호출해 재검증할 것
 *    (/admin 페이지 게이트는 UX용일 뿐, 실제 권한은 액션마다 확인).
 */
export async function requireAdmin() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user || !isAdminEmail(user.email)) return null;
  return user;
}
