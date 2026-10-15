// ★2026-10-15 로그인 공유(SSO) — 본체(www)와 솔버(solver.)가 «한 장의 쿠키»를 같이 읽고 쓴다.
//
// 이름을 프로젝트 주소와 떼어 고정한다: @supabase/ssr은 기본값으로 URL 호스트 첫 마디에서 이름을 만들어
// NEXT_PUBLIC_SUPABASE_URL을 커스텀 도메인(auth.holdemmaster.com)으로 바꾸면 이름이 바뀌고 전원 로그아웃된다.
//
// 옛 이름(LEGACY)을 그대로 쓰지 않고 새 이름으로 옮기는 이유: 옛 쿠키는 www 전용(host-only)이라
// 같은 이름으로 .holdemmaster.com 쿠키를 하나 더 만들면 브라우저가 둘을 다 보내고, 먼저 만든(=낡은) 쪽이
// 이긴다 → 회전된 refresh token을 다시 써서 세션이 끊길 수 있다. 이름이 다르면 섞일 일이 없다.
// 옛 쿠키는 처음 만나는 자리(미들웨어·브라우저 클라이언트)에서 새 이름으로 복사하고 지운다.
export const SUPABASE_AUTH_COOKIE = "sb-holdemmaster-auth-token";
export const LEGACY_AUTH_COOKIE = "sb-idikicmooauorjurdkzh-auth-token";

const SHARED_DOMAIN = ".holdemmaster.com";
const MAX_AGE = 400 * 24 * 60 * 60; // @supabase/ssr 기본값과 같다

/** 운영(holdemmaster.com과 그 하위)에서만 공용 도메인. localhost·*.vercel.app 미리보기는 host-only. */
export function authCookieDomain(hostname: string | null | undefined): string | undefined {
  const host = (hostname ?? "").split(":")[0].toLowerCase();
  return host === "holdemmaster.com" || host.endsWith(SHARED_DOMAIN) ? SHARED_DOMAIN : undefined;
}

export function authCookieOptions(hostname: string | null | undefined) {
  const domain = authCookieDomain(hostname);
  return {
    name: SUPABASE_AUTH_COOKIE,
    path: "/",
    sameSite: "lax" as const,
    maxAge: MAX_AGE,
    ...(domain ? { domain, secure: true } : {}),
  };
}

/** 세션 본체(name · name.0 · name.1 …)와 PKCE 검증값(name-code-verifier)을 모두 잡는다. */
function isAuthCookie(cookieName: string, base: string) {
  return cookieName === base || cookieName.startsWith(`${base}.`) || cookieName.startsWith(`${base}-`);
}

type NamedCookie = { name: string; value: string };

/**
 * 새 이름 쿠키가 하나도 없고 옛 이름 쿠키가 있으면, 옛 쿠키를 새 이름으로 바꿔 읽게 한다.
 * migrated = 새 이름으로 옮겨 써야 할 쿠키 · legacy = 지워야 할 옛 쿠키 이름.
 */
export function aliasLegacyAuthCookies<T extends NamedCookie>(all: T[]) {
  const legacy = all.filter((c) => isAuthCookie(c.name, LEGACY_AUTH_COOKIE)).map((c) => c.name);
  const hasCurrent = all.some((c) => isAuthCookie(c.name, SUPABASE_AUTH_COOKIE));
  if (hasCurrent || legacy.length === 0) return { cookies: all, migrated: [] as NamedCookie[], legacy };
  const migrated = all
    .filter((c) => isAuthCookie(c.name, LEGACY_AUTH_COOKIE))
    .map((c) => ({ name: SUPABASE_AUTH_COOKIE + c.name.slice(LEGACY_AUTH_COOKIE.length), value: c.value }));
  return {
    cookies: [...all.filter((c) => !isAuthCookie(c.name, LEGACY_AUTH_COOKIE)), ...migrated] as NamedCookie[],
    migrated,
    legacy,
  };
}
