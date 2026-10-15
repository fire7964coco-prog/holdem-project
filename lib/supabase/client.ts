import { createBrowserClient } from "@supabase/ssr";
import { aliasLegacyAuthCookies, authCookieOptions } from "./cookie-name";

/**
 * 옛 www 전용 로그인 쿠키를 공용(.holdemmaster.com) 새 이름으로 옮긴다.
 * 미들웨어가 안 도는 페이지(글·도구·허브)에서 먼저 열려도 로그인이 풀리지 않게 브라우저에서도 한 번 한다.
 */
function migrateLegacyAuthCookies() {
  if (typeof document === "undefined") return;
  const all = document.cookie
    .split(/;\s*/)
    .filter(Boolean)
    .map((pair) => {
      const i = pair.indexOf("=");
      return { name: pair.slice(0, i), value: pair.slice(i + 1) };
    });
  const { migrated, legacy } = aliasLegacyAuthCookies(all);
  if (legacy.length === 0) return;
  const opts = authCookieOptions(window.location.hostname);
  const attrs = `; Path=/; Max-Age=${opts.maxAge}; SameSite=Lax${"domain" in opts ? `; Domain=${opts.domain}; Secure` : ""}`;
  for (const c of migrated) document.cookie = `${c.name}=${c.value}${attrs}`;
  for (const name of legacy) document.cookie = `${name}=; Path=/; Max-Age=0`;
}

export function createClient() {
  migrateLegacyAuthCookies();
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookieOptions: authCookieOptions(typeof window === "undefined" ? null : window.location.hostname) }
  );
}
