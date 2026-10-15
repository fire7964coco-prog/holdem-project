# 솔버 ↔ 본체 로그인 공유(SSO) — 솔버 쪽 작업 명세 (MB-343 · 2026-10-15)

## 증상

솔버(`solver.holdemmaster.com`)에서 로그인 → «커뮤로 가기» → 홈페이지(`www.`)는 비로그인.
계정은 같은 Supabase 프로젝트라 하나지만 **세션 저장소가 갈려 있다**: 본체 = www 전용 쿠키 · 솔버 = `solver.`의 localStorage(`src/account.ts`).

## 처방 — 양쪽이 «한 장의 쿠키»를 쓴다

| 항목 | 값 (본체와 반드시 같게) |
|---|---|
| 라이브러리 | `@supabase/ssr` **0.12.x** `createBrowserClient` (본체 `^0.12.0`) — 쿠키 인코딩 기본값(`base64url`)·쪼개기(3180바이트 · `name.0`,`name.1`…)가 같아야 서로 읽힌다 |
| 쿠키 이름 | 🔴 **`sb-holdemmaster-auth-token`** — MB-342 예고의 `sb-idikicmooauorjurdkzh-auth-token`에서 **바뀌었다**(아래 «왜 새 이름») |
| domain | `.holdemmaster.com` — **호스트가 `holdemmaster.com`이거나 `.holdemmaster.com`으로 끝날 때만**. localhost·미리보기는 domain 없음 |
| 나머지 | `path: "/"` · `sameSite: "lax"` · `maxAge: 34560000`(400일 · ssr 기본값) · domain 붙일 때 `secure: true` |

본체 정본 = `lib/supabase/cookie-name.ts`(`authCookieOptions`). 그대로 옮겨 쓰면 된다:

```ts
const SHARED = ".holdemmaster.com";
const host = location.hostname.toLowerCase();
const domain = host === "holdemmaster.com" || host.endsWith(SHARED) ? SHARED : undefined;
createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  cookieOptions: { name: "sb-holdemmaster-auth-token", path: "/", sameSite: "lax", maxAge: 34560000, ...(domain ? { domain, secure: true } : {}) },
  auth: { detectSessionInUrl: true }, // flowType은 ssr이 pkce로 고정
});
```

### 왜 새 이름인가 (본체 판단 · 10-15)

본체의 옛 쿠키는 **www 전용(host-only)** 이다. 같은 이름으로 `.holdemmaster.com` 쿠키를 하나 더 만들면 www에서 브라우저가
**둘 다** 보내고, 먼저 만든(낡은) 쪽이 이긴다 → 회전된 refresh token을 다시 써서 세션이 끊길 수 있다.
이름을 바꾸면 섞일 일이 없다. 본체는 옛 쿠키를 처음 만나는 자리(미들웨어·브라우저)에서 새 이름으로 복사하고 지운다(이미 배포 준비됨).
이름이 URL과 떨어져 있으니 `NEXT_PUBLIC_SUPABASE_URL`/솔버 `SUPABASE_URL`을 `https://auth.holdemmaster.com`으로 바꿔도 로그아웃이 안 생긴다.

## 솔버가 할 일

1. **클라이언트 교체** — `src/account.ts` `getClient`의 `mod.createClient(...)`를 위 `createBrowserClient`로. 지연 로딩(청크 분리)은 그대로 둬도 된다.
2. **기존 솔버 회원 이관(1회)** — 새 쿠키가 없고 localStorage에 옛 세션(`sb-idikicmooauorjurdkzh-auth-token`)이 있으면
   그 JSON의 `access_token`·`refresh_token`으로 `supabase.auth.setSession(...)` → 쿠키에 기록됨 → localStorage 키 삭제(`-code-verifier` 포함).
   실패(만료 등)해도 키는 지운다(다시 로그인하면 됨). 이걸 빼면 기존 솔버 회원이 배포 순간 한 번 로그아웃된다.
3. **`hasStoredSession()`** — localStorage 대신 `document.cookie`에서 `sb-holdemmaster-auth-token`(또는 `.0`)을 찾는다. 2번 이관 대상(옛 localStorage 키)도 true로 본다.
   → 본체에서 로그인하고 솔버를 처음 연 사람도 supabase 청크를 받고 로그인 상태가 된다(이게 SSO의 실체).
4. **로그아웃** — 지금 그대로(`signOut()`). 공용 쿠키가 지워져 본체도 함께 로그아웃된다(기대 동작).

## 시험 (배포 뒤 라이브 · 사장님 계정 또는 시험 계정)

| # | 절차 | 기대 |
|---|---|---|
| 1 | 솔버에서 로그인 → `www.holdemmaster.com/` | 로그인 상태 |
| 2 | 본체에서 로그인 → 솔버 새로고침 | 로그인 상태 |
| 3 | 한쪽 로그아웃 → 다른 쪽 새로고침 | 양쪽 비로그인 |
| 4 | 기존 솔버 회원(localStorage 세션) — 솔버 배포 후 첫 방문 | 로그아웃 없이 쿠키로 옮겨짐 |
| 5 | 기존 본체 회원(www 전용 쿠키) — 본체 배포 후 첫 방문 | 로그아웃 없이 `.holdemmaster.com` 새 쿠키로 옮겨짐(본체가 시험) |
| 6 | 두 탭(본체·솔버)을 1시간 넘게 열어 둠 | 토큰 갱신 후에도 둘 다 유지(ssr은 매 요청 쿠키를 다시 읽는다 · 갱신 토큰 재사용 허용 10초) |
| 7 | 카카오·구글·텔레그램 로그인(PKCE `-code-verifier`도 공용 쿠키) | 세 공급자 모두 정상 복귀 |

## 순서

본체 먼저 배포(혼자 나가도 안전 — 솔버는 아직 localStorage라 영향 없음) → 솔버 배포 → 위 시험 1~7 → 결과 S-행.
회원 전용 켜기(MB-340)는 이 작업과 묶어도, 따로 가도 된다 — 켜는 시점은 사장님 판단.
