import { TOURNAMENTS } from "./tournaments";
import { POSTS_BY_LOCALE } from "./intl-posts";
import { POSTS } from "./posts";
import type { BoardLocale } from "./tournaments-i18n";

/** ko도 같은 규칙을 탄다 — 아래 주석의 "왜 ko까지" 참고 */
export type GuideLocale = BoardLocale | "ko";

/**
 * 대회 카드에 붙일 "상세 가이드" 링크를 로케일별로 해결한다.
 *
 * ★ **서버 전용이다. 클라이언트 컴포넌트에서 import하지 말 것.**
 *   `POSTS_BY_LOCALE`는 전 언어 포스트 본문을 통째로 들고 있어서,
 *   클라이언트 번들에 딸려 들어가면 번들이 MB 단위로 불어난다(전례 있음).
 *   `app/<locale>/tournaments/page.tsx`(서버 컴포넌트)에서 호출해
 *   결과 객체(최대 5개 항목)만 prop으로 내려보낸다.
 *
 * ★ 그 언어에 글이 **실제로 존재할 때만** 링크한다.
 *   없는데 링크하면 스페인어 페이지에서 한국어 본문이 열린다 — 링크가 없느니만 못하다.
 *
 * ★ **왜 ko까지 여기서 처리하는가**
 *   `blogLink`는 "/blog/<slug>" 형태라 ko 경로처럼 보이지만, 실제 의미는
 *   **"이 대회의 가이드 slug"**다. ko 글이 반드시 있다는 보장이 아니다.
 *   실제로 `ept-barcelona-2026-guide`·`wpt-australia-2026-guide`는
 *   EN 마스터로 쓰여 5개 언어로 번역됐지만 **한국어판이 없다.**
 *   예전엔 ko 보드가 `t.blogLink`를 존재 확인 없이 그대로 걸었기 때문에,
 *   이 두 대회에 blogLink를 달면 ko에서 404가 났다. 그래서 아예 안 달아뒀고,
 *   그 결과 5개 언어 번역본이 다 있는데도 **어느 보드에서도 링크가 안 떴다.**
 *   → ko도 같은 존재 검사를 통과해야 링크되게 통일했다. 이제 blogLink를 달아도
 *     ko는 조용히 링크를 숨기고, 번역본이 있는 5개 언어에서만 뜬다.
 *     나중에 한국어판을 쓰면 자동으로 ko에도 뜬다(추가 작업 없음).
 */
export function resolveBlogLinks(locale: GuideLocale): Record<string, string> {
  const have =
    locale === "ko"
      ? new Set(POSTS.map((p) => p.slug))
      : new Set((POSTS_BY_LOCALE[locale] ?? []).map((p: { slug: string }) => p.slug));

  const prefix = locale === "ko" ? "/blog" : `/${locale}/blog`;

  const out: Record<string, string> = {};
  for (const t of TOURNAMENTS) {
    if (!t.blogLink) continue;
    const slug = t.blogLink.replace(/^\/blog\//, "");
    if (have.has(slug)) out[t.id] = `${prefix}/${slug}`;
  }
  return out;
}
