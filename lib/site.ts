/**
 * 공식 도메인 (Vercel: apex → www 307 리다이렉트)
 * canonical·sitemap·JSON-LD는 반드시 이 URL과 일치해야 GSC 리디렉션 오류가 나지 않음.
 */
export const SITE = "https://www.holdemmaster.com";

/**
 * 공식 문의 메일.
 * ★새로 만든 주소가 아니다 — `lib/posts/holdem-pub-promotion.ts`가 2026-07부터
 *   본문에 공개해 온 실제 운영 채널을 상수로 올린 것뿐이다. 여기서 바꾸면
 *   /contact·/privacy·/terms가 함께 따라간다(그 포스트 본문은 마크다운이라 별개).
 */
export const CONTACT_EMAIL = "holdemmaster.kr@gmail.com";
