import { SITE } from "@/lib/site";

/**
 * `/hand-chart` 계열 hreflang 세트 — 12개 랜딩이 «완전히 같은 문자열 세트»를 선언해야
 * `check:hreflang`(postbuild)이 통과한다. 구조·언어 코드 = `lib/calculator-alternates.ts`와 동일.
 *
 * ★2026-10-05 신설 — 로케일 도구 확장 회차 1(`docs/tools-locale-rollout-plan.md`).
 *   그 전까지 차트는 ko·en 둘뿐이었고 서로 hreflang도 없었다.
 * 🔴 x-default = 영어판(계산기와 같은 판단).
 */
export const HAND_CHART_LOCALES = ["en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi", "tr", "vi", "ar", "it", "pl"] as const;
export type HandChartLocale = (typeof HAND_CHART_LOCALES)[number];

export const HAND_CHART_ALTERNATES: Record<string, string> = {
  "ko-KR": `${SITE}/hand-chart`,
  "en-US": `${SITE}/en/hand-chart`,
  "ja-JP": `${SITE}/ja/hand-chart`,
  "es-ES": `${SITE}/es/hand-chart`,
  "pt-BR": `${SITE}/pt/hand-chart`,
  "de-DE": `${SITE}/de/hand-chart`,
  "zh-Hans": `${SITE}/zh/hand-chart`,
  "zh-Hant": `${SITE}/zh-hant/hand-chart`,
  "fr-FR": `${SITE}/fr/hand-chart`,
  "id-ID": `${SITE}/id/hand-chart`,
  "ms-MY": `${SITE}/ms/hand-chart`,
  "hi-IN": `${SITE}/hi/hand-chart`,
  // ★2026-10-06 tr 회차 2(docs/tr-cluster-plan.md §4).
  "tr-TR": `${SITE}/tr/hand-chart`,
  // ★2026-10-07 vi 도구 회차(docs/keyword-bank/vi-tools.md).
  "vi-VN": `${SITE}/vi/hand-chart`,
  // ★2026-10-14 tool-lanes 🅲 ar 회차 1 — 🔴 지역 없는 «ar»(독자 = 아랍권 전체 · lib/tournaments-hreflang.ts와 같은 코드).
  //   다른 줄의 vi-VN·tr-TR과 모양이 다른 것은 의도다 — 한 나라 코드(ar-SA 등)를 붙이면 나머지 아랍권이 빠진다.
  "ar": `${SITE}/ar/hand-chart`,
  // ★2026-10-16 it 도구 회차
  "it-IT": `${SITE}/it/hand-chart`,
  "pl-PL": `${SITE}/pl/hand-chart`,
  "x-default": `${SITE}/en/hand-chart`,
};
