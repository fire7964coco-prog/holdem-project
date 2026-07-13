import type { Post } from "./posts";
import { SECONDARY_LOCALES, type SecondaryLocale } from "./intl";
import { EN_POSTS } from "./posts-en";
import { JA_POSTS } from "./posts-ja";
import { ES_POSTS } from "./posts-es";
import { ZH_POSTS } from "./posts-zh";
import { AR_POSTS } from "./posts-ar";
import { PT_POSTS } from "./posts-pt";
import { ID_POSTS } from "./posts-id";
import { MS_POSTS } from "./posts-ms";
import { VI_POSTS } from "./posts-vi";
import { HI_POSTS } from "./posts-hi";
import { DE_POSTS } from "./posts-de";
import { TR_POSTS } from "./posts-tr";
import { FR_POSTS } from "./posts-fr";
import { RU_POSTS } from "./posts-ru";
import { IT_POSTS } from "./posts-it";
import { PL_POSTS } from "./posts-pl";
import { TH_POSTS } from "./posts-th";
import { FA_POSTS } from "./posts-fa";
import { SW_POSTS } from "./posts-sw";

/** 보조 언어별 포스트 목록 */
export const POSTS_BY_LOCALE: Record<SecondaryLocale, Post[]> = {
  en: EN_POSTS,
  ja: JA_POSTS,
  es: ES_POSTS,
  zh: ZH_POSTS,
  ar: AR_POSTS,
  pt: PT_POSTS,
  id: ID_POSTS,
  ms: MS_POSTS,
  vi: VI_POSTS,
  hi: HI_POSTS,
  de: DE_POSTS,
  tr: TR_POSTS,
  fr: FR_POSTS,
  ru: RU_POSTS,
  it: IT_POSTS,
  pl: PL_POSTS,
  th: TH_POSTS,
  fa: FA_POSTS,
  sw: SW_POSTS,
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
