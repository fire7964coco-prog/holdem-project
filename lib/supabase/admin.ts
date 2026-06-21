import { createClient } from "@supabase/supabase-js";

/**
 * 서비스 롤 클라이언트 — RLS 우회 (서버 전용).
 * translations 캐시 쓰기처럼 정책상 클라이언트가 못 하는 작업에만 사용.
 * SUPABASE_SERVICE_ROLE_KEY 가 없으면 null 을 반환한다 (캐싱은 선택 기능).
 */
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) return null;
  return createClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
