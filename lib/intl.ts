/**
 * 홀덤마스터(한국어 본진)에 곁들이는 보조 다국어 섹션 설정.
 * 한국어는 루트(/)에 그대로 두고, 추가 언어만 /{locale}/... 로 발행한다.
 * 새 언어 추가 = 아래 SECONDARY_LOCALES + CHROME 에 항목만 추가.
 */
export const SECONDARY_LOCALES = ["en", "ja", "es", "zh", "ar", "pt", "id", "ms", "vi", "hi", "de", "tr", "fr", "ru", "it"] as const;
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
  pt: "pt_BR",
  id: "id_ID",
  ms: "ms_MY",
  vi: "vi_VN",
  hi: "hi_IN",
  de: "de_DE",
  tr: "tr_TR",
  fr: "fr_FR",
  ru: "ru_RU",
  it: "it_IT",
};

/** <html lang> 및 hreflang 코드 (zh는 간체 = zh-Hans, pt는 브라질 = pt-BR) */
export const HTML_LANG: Record<SecondaryLocale, string> = {
  en: "en",
  ja: "ja",
  es: "es",
  zh: "zh-Hans",
  ar: "ar",
  pt: "pt-BR",
  id: "id",
  ms: "ms",
  vi: "vi",
  hi: "hi",
  de: "de",
  tr: "tr",
  fr: "fr",
  ru: "ru",
  it: "it",
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
  pt: {
    contents: "Conteúdo",
    quickAnswer: "Resposta rápida",
    category: "Guia para iniciantes",
    readSuffix: "de leitura",
    published: "Publicado",
    updated: "Atualizado",
    prev: "Anterior",
    next: "Próximo",
    related: "Artigos relacionados",
    share: "Compartilhe este artigo",
    copy: "Copiar link",
    copied: "Copiado!",
    back: "Voltar para todos os artigos",
    blogTitle: "Blog de estratégia de Texas Hold'em",
    blogIntro:
      "Guias práticos que explicam não só qual mão ganha de qual, mas por quê — e como usar isso na mesa.",
  },
  id: {
    contents: "Daftar Isi",
    quickAnswer: "Jawaban Singkat",
    category: "Panduan Pemula",
    readSuffix: "baca",
    published: "Terbit",
    updated: "Diperbarui",
    prev: "Sebelumnya",
    next: "Berikutnya",
    related: "Artikel Terkait",
    share: "Bagikan artikel ini",
    copy: "Salin tautan",
    copied: "Tersalin!",
    back: "Kembali ke semua artikel",
    blogTitle: "Blog Strategi Texas Hold'em",
    blogIntro:
      "Panduan praktis yang menjelaskan bukan hanya tangan mana yang menang, tapi kenapa — dan cara memakainya di meja.",
  },
  ms: {
    contents: "Kandungan",
    quickAnswer: "Jawapan Pantas",
    category: "Panduan Pemula",
    readSuffix: "bacaan",
    published: "Diterbitkan",
    updated: "Dikemas kini",
    prev: "Sebelumnya",
    next: "Seterusnya",
    related: "Artikel Berkaitan",
    share: "Kongsi artikel ini",
    copy: "Salin pautan",
    copied: "Disalin!",
    back: "Kembali ke semua artikel",
    blogTitle: "Blog Strategi Texas Hold'em",
    blogIntro:
      "Panduan praktikal yang menerangkan bukan sekadar tangan mana menang, tetapi sebabnya — dan cara menggunakannya di meja.",
  },
  vi: {
    contents: "Mục lục",
    quickAnswer: "Trả lời nhanh",
    category: "Hướng dẫn người mới",
    readSuffix: "đọc",
    published: "Đăng",
    updated: "Cập nhật",
    prev: "Trước",
    next: "Tiếp",
    related: "Bài viết liên quan",
    share: "Chia sẻ bài viết này",
    copy: "Sao chép liên kết",
    copied: "Đã sao chép!",
    back: "Quay lại tất cả bài viết",
    blogTitle: "Blog chiến thuật Texas Hold'em",
    blogIntro:
      "Những hướng dẫn thực dụng giải thích không chỉ tay bài nào thắng, mà còn vì sao — và cách dùng nó tại bàn.",
  },
  hi: {
    contents: "विषय-सूची",
    quickAnswer: "त्वरित उत्तर",
    category: "शुरुआती गाइड",
    readSuffix: "पढ़ने में",
    published: "प्रकाशित",
    updated: "अपडेट",
    prev: "पिछला",
    next: "अगला",
    related: "संबंधित लेख",
    share: "यह लेख साझा करें",
    copy: "लिंक कॉपी करें",
    copied: "कॉपी हो गया!",
    back: "सभी लेखों पर वापस जाएँ",
    blogTitle: "टेक्सस होल्डम रणनीति ब्लॉग",
    blogIntro:
      "व्यावहारिक गाइड जो सिर्फ़ यह नहीं बतातीं कि कौन-सा हाथ जीतता है, बल्कि क्यों — और टेबल पर इसका इस्तेमाल कैसे करें।",
  },
  de: {
    contents: "Inhalt",
    quickAnswer: "Kurze Antwort",
    category: "Einsteiger-Guide",
    readSuffix: "Lesezeit",
    published: "Veröffentlicht",
    updated: "Aktualisiert",
    prev: "Zurück",
    next: "Weiter",
    related: "Ähnliche Artikel",
    share: "Diesen Artikel teilen",
    copy: "Link kopieren",
    copied: "Kopiert!",
    back: "Zurück zu allen Artikeln",
    blogTitle: "Texas-Hold'em-Strategie-Blog",
    blogIntro:
      "Praxisnahe Ratgeber, die nicht nur erklären, welche Hand gewinnt, sondern auch warum — und wie du es am Tisch nutzt.",
  },
  tr: {
    contents: "İçindekiler",
    quickAnswer: "Hızlı Yanıt",
    category: "Başlangıç Rehberi",
    readSuffix: "okuma",
    published: "Yayınlandı",
    updated: "Güncellendi",
    prev: "Önceki",
    next: "Sonraki",
    related: "İlgili Yazılar",
    share: "Bu yazıyı paylaş",
    copy: "Bağlantıyı kopyala",
    copied: "Kopyalandı!",
    back: "Tüm yazılara dön",
    blogTitle: "Texas Hold'em Strateji Blogu",
    blogIntro:
      "Sadece hangi elin kazandığını değil, neden kazandığını ve masada nasıl kullanılacağını açıklayan pratik rehberler.",
  },
  fr: {
    contents: "Sommaire",
    quickAnswer: "Réponse rapide",
    category: "Guide du débutant",
    readSuffix: "de lecture",
    published: "Publié",
    updated: "Mis à jour",
    prev: "Précédent",
    next: "Suivant",
    related: "Articles liés",
    share: "Partage cet article",
    copy: "Copier le lien",
    copied: "Copié !",
    back: "Retour à tous les articles",
    blogTitle: "Blog de stratégie Texas Hold'em",
    blogIntro:
      "Des guides pratiques qui expliquent non seulement quelle main bat quelle autre, mais pourquoi — et comment t'en servir à la table.",
  },
  ru: {
    contents: "Содержание",
    quickAnswer: "Коротко",
    category: "Гид для новичков",
    readSuffix: "чтения",
    published: "Опубликовано",
    updated: "Обновлено",
    prev: "Назад",
    next: "Далее",
    related: "Похожие статьи",
    share: "Поделиться статьёй",
    copy: "Скопировать ссылку",
    copied: "Скопировано!",
    back: "Ко всем статьям",
    blogTitle: "Блог о стратегии Техасского Холдема",
    blogIntro:
      "Практичные гайды: не только какая рука сильнее, но и почему — и как использовать это за столом.",
  },
  it: {
    contents: "Indice",
    quickAnswer: "Risposta rapida",
    category: "Guida per principianti",
    readSuffix: "di lettura",
    published: "Pubblicato",
    updated: "Aggiornato",
    prev: "Precedente",
    next: "Successivo",
    related: "Articoli correlati",
    share: "Condividi questo articolo",
    copy: "Copia link",
    copied: "Copiato!",
    back: "Torna a tutti gli articoli",
    blogTitle: "Blog di strategia Texas Hold'em",
    blogIntro:
      "Guide pratiche che spiegano non solo quale mano batte quale, ma perché — e come usarlo al tavolo.",
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
  pt: {
    skip: "Pular para o conteúdo",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Abrir menu",
    menuClose: "Fechar menu",
    koLabel: "한국어",
    tagline:
      "Estratégia de Texas Hold'em de forma clara e prática. Guias que explicam não só qual mão ganha de qual, mas por quê.",
    contentHeading: "Conteúdo",
    languageHeading: "Idioma",
    disclaimer:
      "Este site é apenas informativo e não incentiva apostas com dinheiro real. Somente para maiores de 18 anos.",
  },
  id: {
    skip: "Lewati ke konten",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    koLabel: "한국어",
    tagline:
      "Strategi Texas Hold'em yang jelas dan praktis. Panduan yang menjelaskan bukan hanya tangan mana yang menang, tapi kenapa.",
    contentHeading: "Konten",
    languageHeading: "Bahasa",
    disclaimer:
      "Situs ini hanya untuk informasi dan tidak mendorong perjudian uang sungguhan. Hanya untuk usia 18 tahun ke atas.",
  },
  ms: {
    skip: "Langkau ke kandungan",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Buka menu",
    menuClose: "Tutup menu",
    koLabel: "한국어",
    tagline:
      "Strategi Texas Hold'em yang jelas dan praktikal. Panduan yang menerangkan bukan sekadar tangan mana menang, tetapi sebabnya.",
    contentHeading: "Kandungan",
    languageHeading: "Bahasa",
    disclaimer:
      "Laman ini untuk tujuan maklumat sahaja dan tidak menggalakkan perjudian wang sebenar. Untuk usia 18 tahun ke atas sahaja.",
  },
  vi: {
    skip: "Bỏ qua đến nội dung",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Mở menu",
    menuClose: "Đóng menu",
    koLabel: "한국어",
    tagline:
      "Chiến thuật Texas Hold'em rõ ràng và thực dụng. Những hướng dẫn giải thích không chỉ tay bài nào thắng, mà còn vì sao.",
    contentHeading: "Nội dung",
    languageHeading: "Ngôn ngữ",
    disclaimer:
      "Trang web này chỉ nhằm mục đích thông tin và không khuyến khích cờ bạc bằng tiền thật. Chỉ dành cho người trên 18 tuổi.",
  },
  hi: {
    skip: "मुख्य सामग्री पर जाएँ",
    brand: "HoldemMaster",
    blogLabel: "ब्लॉग",
    menuOpen: "मेन्यू खोलें",
    menuClose: "मेन्यू बंद करें",
    koLabel: "한국어",
    tagline:
      "स्पष्ट और व्यावहारिक टेक्सस होल्डम रणनीति। ऐसी गाइड जो सिर्फ़ यह नहीं बतातीं कि कौन-सा हाथ जीतता है, बल्कि क्यों जीतता है यह भी समझाती हैं।",
    contentHeading: "सामग्री",
    languageHeading: "भाषा",
    disclaimer:
      "यह साइट केवल जानकारी के लिए है और असली पैसे के जुए को बढ़ावा नहीं देती। केवल 18 वर्ष से अधिक आयु के लिए।",
  },
  de: {
    skip: "Zum Inhalt springen",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    koLabel: "한국어",
    tagline:
      "Klare und praxisnahe Texas-Hold'em-Strategie. Ratgeber, die nicht nur erklären, welche Hand gewinnt, sondern auch warum.",
    contentHeading: "Inhalt",
    languageHeading: "Sprache",
    disclaimer:
      "Diese Seite dient nur zur Information und fördert kein Echtgeld-Glücksspiel. Nur für Personen ab 18 Jahren.",
  },
  tr: {
    skip: "İçeriğe geç",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Menüyü aç",
    menuClose: "Menüyü kapat",
    koLabel: "한국어",
    tagline:
      "Net ve pratik Texas Hold'em stratejisi. Sadece hangi elin kazandığını değil, neden kazandığını da açıklayan rehberler.",
    contentHeading: "İçerik",
    languageHeading: "Dil",
    disclaimer:
      "Bu site yalnızca bilgilendirme amaçlıdır ve gerçek parayla kumarı teşvik etmez. Yalnızca 18 yaş üstü için.",
  },
  fr: {
    skip: "Aller au contenu",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    koLabel: "한국어",
    tagline:
      "Stratégie Texas Hold'em claire et pratique. Des guides qui expliquent non seulement quelle main gagne, mais pourquoi.",
    contentHeading: "Contenu",
    languageHeading: "Langue",
    disclaimer:
      "Ce site est fourni à titre informatif uniquement et ne fait pas la promotion des jeux d'argent réels. Réservé aux 18 ans et plus.",
  },
  ru: {
    skip: "Перейти к содержанию",
    brand: "HoldemMaster",
    blogLabel: "Блог",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    koLabel: "한국어",
    tagline:
      "Понятная и практичная стратегия Техасского Холдема. Гайды о том, какая рука выигрывает и почему.",
    contentHeading: "Разделы",
    languageHeading: "Язык",
    disclaimer:
      "Этот сайт носит исключительно информационный характер и не пропагандирует азартные игры на реальные деньги. Только для лиц старше 18 лет.",
  },
  it: {
    skip: "Vai al contenuto",
    brand: "HoldemMaster",
    blogLabel: "Blog",
    menuOpen: "Apri menu",
    menuClose: "Chiudi menu",
    koLabel: "한국어",
    tagline:
      "Strategia Texas Hold'em chiara e pratica. Guide che spiegano non solo quale mano vince, ma perché.",
    contentHeading: "Contenuti",
    languageHeading: "Lingua",
    disclaimer:
      "Questo sito è solo a scopo informativo e non promuove il gioco d'azzardo con denaro reale. Solo per maggiori di 18 anni.",
  },
};

/** 블로그 탑바 — 홈 피드 버튼 (한국어 기본값: 홈피드) */
export const NAV_HOME_FEED: Record<SecondaryLocale, string> = {
  en: "Home Feed",
  ja: "ホームフィード",
  es: "Feed Inicio",
  zh: "首页动态",
  ar: "الصفحة الرئيسية",
  pt: "Feed Início",
  id: "Feed Beranda",
  ms: "Feed Utama",
  vi: "Trang chủ",
  hi: "होम फ़ीड",
  de: "Start-Feed",
  tr: "Ana Sayfa",
  fr: "Accueil",
  ru: "Главная",
  it: "Home",
};

/** 블로그 탑바 — 커뮤니티 CTA 버튼 */
export const NAV_CTA: Record<SecondaryLocale, string> = {
  en: "Community →",
  ja: "コミュニティ →",
  zh: "社区 →",
  es: "Comunidad →",
  de: "Community →",
  ar: "المجتمع →",
  tr: "Topluluk →",
  vi: "Cộng đồng →",
  id: "Komunitas →",
  ms: "Komuniti →",
  pt: "Comunidade →",
  hi: "समुदाय →",
  fr: "Communauté →",
  ru: "Сообщество →",
  it: "Community →",
};
