import { SITE } from "@/lib/site";

/**
 * `/glossary` 계열 hreflang 세트 — 12개 랜딩이 «완전히 같은 문자열 세트»를 선언해야
 * `check:hreflang`(postbuild)이 통과한다. 구조·언어 코드 = `lib/calculator-alternates.ts`와 동일.
 *
 * ★2026-10-05 신설 — 로케일 도구 확장 회차 2(`docs/tools-locale-rollout-plan.md`).
 *   그 전까지 용어 사전은 ko·en 둘뿐이었고 서로 hreflang도 없었다.
 * 🔴 x-default = 영어판(계산기와 같은 판단).
 */
export const GLOSSARY_LOCALES = ["en", "ja", "es", "pt", "de", "zh", "zh-hant", "fr", "id", "ms", "hi"] as const;
export type GlossaryLocale = (typeof GLOSSARY_LOCALES)[number];

export const GLOSSARY_ALTERNATES: Record<string, string> = {
  "ko-KR": `${SITE}/glossary`,
  "en-US": `${SITE}/en/glossary`,
  "ja-JP": `${SITE}/ja/glossary`,
  "es-ES": `${SITE}/es/glossary`,
  "pt-BR": `${SITE}/pt/glossary`,
  "de-DE": `${SITE}/de/glossary`,
  "zh-Hans": `${SITE}/zh/glossary`,
  "zh-Hant": `${SITE}/zh-hant/glossary`,
  "fr-FR": `${SITE}/fr/glossary`,
  "id-ID": `${SITE}/id/glossary`,
  "ms-MY": `${SITE}/ms/glossary`,
  "hi-IN": `${SITE}/hi/glossary`,
  "x-default": `${SITE}/en/glossary`,
};
