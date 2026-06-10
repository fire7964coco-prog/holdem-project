import type { Post } from "./posts";
import { SECONDARY_LOCALES, type SecondaryLocale } from "./intl";
import { EN_POSTS } from "./posts-en";
import { JA_POSTS } from "./posts-ja";
import { ES_POSTS } from "./posts-es";
import { ZH_POSTS } from "./posts-zh";
import { AR_POSTS } from "./posts-ar";
import { PT_POSTS } from "./posts-pt";
import { ID_POSTS } from "./posts-id";

/** 보조 언어별 포스트 목록 */
export const POSTS_BY_LOCALE: Record<SecondaryLocale, Post[]> = {
  en: EN_POSTS,
  ja: JA_POSTS,
  es: ES_POSTS,
  zh: ZH_POSTS,
  ar: AR_POSTS,
  pt: PT_POSTS,
  id: ID_POSTS,
};

export function getPostByLocale(locale: SecondaryLocale, slug: string): Post | undefined {
  return POSTS_BY_LOCALE[locale].find((p) => p.slug === slug);
}

export function postsForLocale(locale: SecondaryLocale): Post[] {
  return POSTS_BY_LOCALE[locale];
}

/** 해당 슬러그의 번역본이 존재하는 보조 언어 목록 (hreflang 상호 링크용) */
export function secondaryLocalesForSlug(slug: string): SecondaryLocale[] {
  return SECONDARY_LOCALES.filter((l) => POSTS_BY_LOCALE[l].some((p) => p.slug === slug));
}
