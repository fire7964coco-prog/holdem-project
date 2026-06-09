/**
 * 홀덤마스터(한국어 본진)에 곁들이는 보조 다국어 섹션 설정.
 * 한국어는 루트(/)에 그대로 두고, 추가 언어만 /{locale}/... 로 발행한다.
 * 새 언어 추가 = 아래 SECONDARY_LOCALES + CHROME 에 항목만 추가.
 */
export const SECONDARY_LOCALES = ["en", "ja"] as const;
export type SecondaryLocale = (typeof SECONDARY_LOCALES)[number];

export function isSecondaryLocale(value: string): value is SecondaryLocale {
  return (SECONDARY_LOCALES as readonly string[]).includes(value);
}

/** 경로에서 보조 언어 추출 (/en/..., /ja/...). 한국어(루트)면 null. */
export function localeFromPath(pathname: string): SecondaryLocale | null {
  const seg = pathname.split("/")[1];
  return isSecondaryLocale(seg) ? seg : null;
}

/** og:locale 형식 */
export const OG_LOCALE: Record<SecondaryLocale, string> = {
  en: "en_US",
  ja: "ja_JP",
};

/** <html lang> 및 hreflang 코드 */
export const HTML_LANG: Record<SecondaryLocale, string> = {
  en: "en",
  ja: "ja",
};

interface ChromeStrings {
  skip: string;
  brand: string;
  blogLabel: string;
  menuOpen: string;
  menuClose: string;
  koLabel: string;
  /** footer */
  tagline: string;
  contentHeading: string;
  languageHeading: string;
  disclaimer: string;
}

/** 블로그 글 페이지 UI 라벨 */
interface PostLabels {
  contents: string;
  quickAnswer: string;
  category: string;
  readSuffix: string;
  published: string;
  updated: string;
  prev: string;
  next: string;
  related: string;
  share: string;
  copy: string;
  copied: string;
  back: string;
  blogTitle: string;
  blogIntro: string;
}

export const POST_LABELS: Record<SecondaryLocale, PostLabels> = {
  en: {
    contents: "Contents",
    quickAnswer: "Quick Answer",
    category: "Beginner Guide",
    readSuffix: "read",
    published: "Published",
    updated: "Updated",
    prev: "Previous",
    next: "Next",
    related: "Related",
    share: "Share this article",
    copy: "Copy link",
    copied: "Copied!",
    back: "Back to all articles",
    blogTitle: "Texas Hold'em Strategy Blog",
    blogIntro:
      "Practical guides that explain not just what beats what, but why — and how to use it at the table.",
  },
  ja: {
    contents: "目次",
    quickAnswer: "ひとことで言うと",
    category: "初心者ガイド",
    readSuffix: "で読めます",
    published: "公開",
    updated: "更新",
    prev: "前の記事",
    next: "次の記事",
    related: "関連記事",
    share: "この記事をシェア",
    copy: "リンクをコピー",
    copied: "コピーしました!",
    back: "記事一覧へ戻る",
    blogTitle: "テキサスホールデム戦略ブログ",
    blogIntro:
      "何が何に勝つかだけでなく、その理由とテーブルでの使い方まで解説する実戦的ガイド。",
  },
};

export const CHROME: Record<SecondaryLocale, ChromeStrings> = {
  en: {
    skip: "Skip to content",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    koLabel: "한국어",
    tagline:
      "Clear, practical Texas Hold'em strategy. Guides that explain not just what beats what, but why.",
    contentHeading: "Content",
    languageHeading: "Language",
    disclaimer:
      "This site is for informational purposes only and does not promote real-money gambling. 18+ only.",
  },
  ja: {
    skip: "本文へスキップ",
    brand: "HoldemMaster",
    blogLabel: "ブログ",
    menuOpen: "メニューを開く",
    menuClose: "メニューを閉じる",
    koLabel: "한국어",
    tagline:
      "わかりやすく実戦的なテキサスホールデム戦略。何が何に勝つかだけでなく、その理由まで解説します。",
    contentHeading: "コンテンツ",
    languageHeading: "言語",
    disclaimer:
      "本サイトは情報提供のみを目的とし、実際のギャンブルを助長するものではありません。18歳以上限定。",
  },
};
