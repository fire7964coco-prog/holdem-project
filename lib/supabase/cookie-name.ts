// 로그인 쿠키 이름을 프로젝트 주소와 떼어 고정한다.
// @supabase/ssr은 기본값으로 URL 호스트 첫 마디에서 이름을 만든다(sb-<ref>-auth-token).
// NEXT_PUBLIC_SUPABASE_URL을 커스텀 도메인(auth.holdemmaster.com)으로 바꾸면 이름이
// sb-auth-auth-token으로 바뀌어 기존 회원이 전부 로그아웃되므로, 옛 이름을 그대로 쓴다.
// 솔버(solver.holdemmaster.com)도 같은 프로젝트라 같은 이름을 쓴다.
export const SUPABASE_AUTH_COOKIE = "sb-idikicmooauorjurdkzh-auth-token";
