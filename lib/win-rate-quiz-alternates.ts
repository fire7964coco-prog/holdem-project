import { SITE } from "@/lib/site";

/**
 * `/win-rate-quiz` 계열 hreflang 세트 — 모든 랜딩이 «완전히 같은 문자열 세트»를 선언해야
 * `check:hreflang`이 통과한다(정본 꼴 = `lib/calculator-alternates.ts`).
 *
 * ★2026-10-12 신설 — 승률 시뮬레이터 2차 ⑤ 언어 확대(ja·zh·es·de · 커뮤니티 6개 언어와 맞춤 ·
 *   요청서 `../클로드-프로그램만들기/handoff-to-main-site/처리완료/승률시뮬레이터업그레이드.md` §2-5).
 *   그 전까지는 ko·en 두 페이지가 각자 2줄짜리 세트를 직접 적고 있었다.
 * ★x-default = 영어판(계산기 세트와 같은 판단).
 */
export const WIN_RATE_QUIZ_LOCALES = ["en", "ja", "es", "de", "zh", "pt", "fr", "id", "ms", "vi", "tr", "hi", "ru"] as const;
export type WinRateQuizLocale = (typeof WIN_RATE_QUIZ_LOCALES)[number];

export const WIN_RATE_QUIZ_ALTERNATES: Record<string, string> = {
  "ko-KR": `${SITE}/win-rate-quiz`,
  "en-US": `${SITE}/en/win-rate-quiz`,
  "ja-JP": `${SITE}/ja/win-rate-quiz`,
  "es-ES": `${SITE}/es/win-rate-quiz`,
  "de-DE": `${SITE}/de/win-rate-quiz`,
  "zh-Hans": `${SITE}/zh/win-rate-quiz`,
  // ★2026-10-13 언어 확대 1차 회차 L1(한 세션 = 한 언어) — pt. 코드 = lib/calculator-alternates.ts와 같게(pt-BR).
  "pt-BR": `${SITE}/pt/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — fr. 코드 = lib/calculator-alternates.ts와 같게(fr-FR).
  "fr-FR": `${SITE}/fr/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — id. 코드 = lib/calculator-alternates.ts와 같게(id-ID).
  "id-ID": `${SITE}/id/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — ms. 코드 = lib/calculator-alternates.ts와 같게(ms-MY).
  "ms-MY": `${SITE}/ms/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — vi. 코드 = lib/calculator-alternates.ts와 같게(vi-VN).
  "vi-VN": `${SITE}/vi/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — tr. 코드 = lib/calculator-alternates.ts와 같게(tr-TR).
  "tr-TR": `${SITE}/tr/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — hi. 코드 = lib/calculator-alternates.ts와 같게(hi-IN).
  "hi-IN": `${SITE}/hi/win-rate-quiz`,
  // ★2026-10-13 회차 L1 — ru(마지막 언어). 코드 = lib/calculator-alternates.ts와 같게(ru-RU).
  "ru-RU": `${SITE}/ru/win-rate-quiz`,
  "x-default": `${SITE}/en/win-rate-quiz`,
};
