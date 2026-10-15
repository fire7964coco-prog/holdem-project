import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { aliasLegacyAuthCookies, authCookieOptions, dropHostOnlyTwins } from "./cookie-name";

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });
  const cookieOptions = authCookieOptions(request.nextUrl.hostname);
  // 옛 www 전용 쿠키만 있으면 새 공용 이름으로 읽힌다(아래에서 옮겨 쓰고 옛것은 지운다)
  const { cookies: aliased, migrated, legacy } = aliasLegacyAuthCookies(request.cookies.getAll());
  let wrote = false;

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookieOptions,
      cookies: {
        getAll() {
          return aliased;
        },
        setAll(all) {
          const cookiesToSet = dropHostOnlyTwins(all);
          wrote = true;
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // 세션 토큰 갱신 (만료 방지)
  await supabase.auth.getUser();

  // 갱신이 없었으면 setAll이 안 불린다 — 옮길 쿠키는 여기서 직접 쓴다(갱신으로 이미 쓴 이름은 건너뛴다)
  const { name: _name, ...attrs } = cookieOptions;
  migrated
    .filter(({ name }) => !(wrote && supabaseResponse.cookies.get(name)))
    .forEach(({ name, value }) => supabaseResponse.cookies.set(name, value, attrs));
  // 옛 쿠키는 www 전용(host-only)이었다 — domain 없이 지워야 지워진다
  legacy.forEach((name) => supabaseResponse.cookies.set(name, "", { path: "/", maxAge: 0 }));

  return supabaseResponse;
}
