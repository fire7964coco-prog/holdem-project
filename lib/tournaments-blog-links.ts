import { TOURNAMENTS } from "./tournaments";
import { POSTS_BY_LOCALE } from "./intl-posts";
import type { BoardLocale } from "./tournaments-i18n";

/**
 * 대회 카드에 붙일 "상세 가이드" 링크를 로케일별로 해결한다.
 *
 * ★ **서버 전용이다. 클라이언트 컴포넌트에서 import하지 말 것.**
 *   `POSTS_BY_LOCALE`는 전 언어 포스트 본문을 통째로 들고 있어서,
 *   클라이언트 번들에 딸려 들어가면 번들이 MB 단위로 불어난다(전례 있음).
 *   `app/<locale>/tournaments/page.tsx`(서버 컴포넌트)에서 호출해
 *   결과 객체(최대 5개 항목)만 prop으로 내려보낸다.
 *
 * ★ 번역본이 **실제로 존재할 때만** 링크한다.
 *   지금 blogLink가 달린 대회 5개 중 5개 언어 번역본이 있는 건
 *   `apt-incheon-2026-guide` 하나뿐이다. 나머지를 한국어 글로 보내면
 *   스페인어 페이지에서 한국어 본문이 열린다 — 링크가 없느니만 못하다.
 */
export function resolveBlogLinks(locale: BoardLocale): Record<string, string> {
  const posts = POSTS_BY_LOCALE[locale] ?? [];
  const have = new Set(posts.map((p: { slug: string }) => p.slug));

  const out: Record<string, string> = {};
  for (const t of TOURNAMENTS) {
    if (!t.blogLink) continue;
    // blogLink는 ko 기준 "/blog/<slug>" 형태다
    const slug = t.blogLink.replace(/^\/blog\//, "");
    if (have.has(slug)) out[t.id] = `/${locale}/blog/${slug}`;
  }
  return out;
}
