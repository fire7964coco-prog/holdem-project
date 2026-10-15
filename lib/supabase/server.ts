import { createServerClient } from "@supabase/ssr";
import { cookies, headers } from "next/headers";
import { aliasLegacyAuthCookies, authCookieOptions, dropHostOnlyTwins } from "./cookie-name";

export async function createClient() {
  const cookieStore = await cookies();
  const host = (await headers()).get("host");
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions: authCookieOptions(host),
      cookies: {
        getAll() {
          // 옮기기 전 옛 www 전용 쿠키도 새 이름으로 읽는다(옮겨 쓰기·지우기는 미들웨어·브라우저 몫)
          return aliasLegacyAuthCookies(cookieStore.getAll()).cookies;
        },
        setAll(cookiesToSet) {
          try {
            dropHostOnlyTwins(cookiesToSet).forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // Server Component에서 호출 시 무시 (읽기전용)
          }
        },
      },
    }
  );
}
