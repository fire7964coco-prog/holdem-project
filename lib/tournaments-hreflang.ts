import { SITE } from "./site";

/**
 * 토너먼트 일정표의 hreflang 세트 — **여기 한 곳만 고치면 된다.**
 *
 * 원래는 ko layout · en page · ja page · zh page · sitemap 스크립트까지
 * 다섯 군데에 같은 목록을 손으로 적고 있었다. 로케일을 하나 추가할 때마다
 * 다섯 번 고쳐야 하고, 하나라도 빠뜨리면 hreflang이 짝이 안 맞아
 * 구글이 세트 전체를 무시한다(상호 참조가 성립해야 유효하다).
 *
 * ⚠️ 여기 넣기 전에 `app/<locale>/tournaments/page.tsx`가 실제로 있어야 한다.
 *    없으면 hreflang이 404를 가리킨다.
 * ⚠️ `scripts/generate-sitemap.mjs`는 .mjs라 이 파일을 import하지 않는다.
 *    거기 `TOURNAMENT_LOCALES`도 함께 갱신할 것.
 */
export const TOURNAMENT_LOCALES = ["en", "ja", "zh"] as const;

export const TOURNAMENT_HREFLANG: Record<string, string> = {
  ko: `${SITE}/tournaments`,
  ...Object.fromEntries(
    TOURNAMENT_LOCALES.map((l) => [
      // zh는 간체이므로 zh-Hans로 명시한다. 그냥 "zh"로 두면
      // 나중에 추가할 번체판(zh-Hant)과 구글이 구분하지 못한다.
      l === "zh" ? "zh-Hans" : l,
      `${SITE}/${l}/tournaments`,
    ]),
  ),
};
