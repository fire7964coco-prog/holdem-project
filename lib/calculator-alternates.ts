import { SITE } from "@/lib/site";

/**
 * `/calculator` 계열 hreflang 세트 — **12개 랜딩이 «완전히 같은 문자열 세트»를 선언해야**
 * `check:hreflang`(postbuild)이 통과한다(솔버 랜딩 12파일과 같은 규율 · docs/solver-landing-playbook.md §3).
 *
 * ★2026-09-17 신설 — 그날까지 계산기 랜딩은 ko·en 둘뿐이었고, 다국어 글의 우측 레일 CTA가
 *   전부 한국어 `/calculator`로 떨어졌다(사장님 지적). 10개 로케일 랜딩을 한 번에 열면서
 *   솔버처럼 12파일에 복사하지 않고 **한 곳**에 둔다 — 로케일을 더할 때 여기 한 줄이면 된다.
 * ★언어 코드 표기는 솔버 랜딩과 동일(`ko-KR en-US ja-JP es-ES pt-BR de-DE zh-Hans zh-Hant fr-FR id-ID ms-MY hi-IN`).
 */
export const CALCULATOR_LOCALES = ["en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi"] as const;
export type CalculatorLocale = (typeof CALCULATOR_LOCALES)[number];

export const CALCULATOR_ALTERNATES: Record<string, string> = {
  "ko-KR": `${SITE}/calculator`,
  "en-US": `${SITE}/en/calculator`,
  "ja-JP": `${SITE}/ja/calculator`,
  "es-ES": `${SITE}/es/calculator`,
  "pt-BR": `${SITE}/pt/calculator`,
  "de-DE": `${SITE}/de/calculator`,
  "zh-Hans": `${SITE}/zh/calculator`,
  "zh-Hant": `${SITE}/zh-hant/calculator`,
  "fr-FR": `${SITE}/fr/calculator`,
  "id-ID": `${SITE}/id/calculator`,
  "ms-MY": `${SITE}/ms/calculator`,
  "hi-IN": `${SITE}/hi/calculator`,
  /**
   * ★2026-09-20 추가 — `x-default`는 «어느 언어에도 안 맞는 방문자»가 갈 곳이다.
   *   없으면 구글이 알아서 고르는데, 그 선택은 우리가 통제하지 못한다.
   *   🔴 **영어판을 지목한다** — ko가 아니다. 12개 랜딩 중 도구 용어가 가장 국제적이고
   *      (equity·ICM·pot odds가 원어 그대로), 실제 유입도 비한국어권이 대부분인 자리다.
   *   ⚠ 값이 `en-US`와 **같은 URL인 것은 정상**이다(하나의 페이지가 두 역할을 겸한다).
   */
  "x-default": `${SITE}/en/calculator`,
};
