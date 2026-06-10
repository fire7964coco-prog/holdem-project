/**
 * 홀덤마스터(한국어 본진)에 곁들이는 보조 다국어 섹션 설정.
 * 한국어는 루트(/)에 그대로 두고, 추가 언어만 /{locale}/... 로 발행한다.
 * 새 언어 추가 = 아래 SECONDARY_LOCALES + CHROME 에 항목만 추가.
 */
export const SECONDARY_LOCALES = ["en", "ja", "es", "zh", "ar"] as const;
export type SecondaryLocale = (typeof SECONDARY_LOCALES)[number];

export function isSecondaryLocale(value: string): value is SecondaryLocale {
  return (SECONDARY_LOCALES as readonly string[]).includes(value);
}

/** RTL(오른쪽→왼쪽) 언어. 아랍어 등. */
export const RTL_LOCALES: readonly SecondaryLocale[] = ["ar"];

export function dirForLocale(locale: SecondaryLocale | null): "rtl" | "ltr" {
  return locale && RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
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
  es: "es_ES",
  zh: "zh_CN",
  ar: "ar_AR",
};

/** <html lang> 및 hreflang 코드 (zh는 간체 = zh-Hans) */
export const HTML_LANG: Record<SecondaryLocale, string> = {
  en: "en",
  ja: "ja",
  es: "es",
  zh: "zh-Hans",
  ar: "ar",
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
  es: {
    contents: "Contenido",
    quickAnswer: "Respuesta rápida",
    category: "Guía para principiantes",
    readSuffix: "de lectura",
    published: "Publicado",
    updated: "Actualizado",
    prev: "Anterior",
    next: "Siguiente",
    related: "Relacionado",
    share: "Comparte este artículo",
    copy: "Copiar enlace",
    copied: "¡Copiado!",
    back: "Volver a todos los artículos",
    blogTitle: "Blog de estrategia de Texas Hold'em",
    blogIntro:
      "Guías prácticas que explican no solo qué mano gana a cuál, sino por qué — y cómo usarlo en la mesa.",
  },
  zh: {
    contents: "目录",
    quickAnswer: "一句话答案",
    category: "新手指南",
    readSuffix: "阅读",
    published: "发布",
    updated: "更新",
    prev: "上一篇",
    next: "下一篇",
    related: "相关文章",
    share: "分享这篇文章",
    copy: "复制链接",
    copied: "已复制！",
    back: "返回全部文章",
    blogTitle: "德州扑克策略博客",
    blogIntro:
      "实用攻略：不只讲什么牌赢什么牌，更讲清原因，以及在牌桌上怎么用。",
  },
  ar: {
    contents: "المحتويات",
    quickAnswer: "الإجابة السريعة",
    category: "دليل المبتدئين",
    readSuffix: "للقراءة",
    published: "نُشر",
    updated: "حُدّث",
    prev: "السابق",
    next: "التالي",
    related: "مقالات ذات صلة",
    share: "شارك هذا المقال",
    copy: "نسخ الرابط",
    copied: "تم النسخ!",
    back: "العودة إلى كل المقالات",
    blogTitle: "مدوّنة استراتيجية تكساس هولدم",
    blogIntro:
      "أدلّة عملية تشرح ليس فقط أي يد تتفوق على الأخرى، بل لماذا — وكيف تستخدمها على الطاولة.",
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
  es: {
    skip: "Saltar al contenido",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    koLabel: "한국어",
    tagline:
      "Estrategia de Texas Hold'em clara y práctica. Guías que explican no solo qué gana a qué, sino por qué.",
    contentHeading: "Contenido",
    languageHeading: "Idioma",
    disclaimer:
      "Este sitio es solo para fines informativos y no promueve el juego con dinero real. Solo mayores de 18 años.",
  },
  zh: {
    skip: "跳到正文",
    brand: "HoldemMaster",
    blogLabel: "博客",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    koLabel: "한국어",
    tagline:
      "清晰实用的德州扑克策略。不只告诉你什么牌赢什么牌，更讲清背后的原因。",
    contentHeading: "内容",
    languageHeading: "语言",
    disclaimer:
      "本网站仅供信息参考，不鼓励任何真实赌博。仅限18岁以上人士。",
  },
  ar: {
    skip: "تخطَّ إلى المحتوى",
    brand: "HoldemMaster",
    blogLabel: "المدوّنة",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    koLabel: "한국어",
    tagline:
      "استراتيجية تكساس هولدم بشكل واضح وعملي. أدلّة تشرح ليس فقط أي يد تتفوق على الأخرى، بل لماذا.",
    contentHeading: "المحتوى",
    languageHeading: "اللغة",
    disclaimer:
      "هذا الموقع لأغراض المعلومات فقط ولا يشجّع على القمار بأموال حقيقية. للبالغين فوق 18 عامًا فقط.",
  },
};
