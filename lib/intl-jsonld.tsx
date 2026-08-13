import { SITE } from "@/lib/site";
import { POST_LABELS, CHROME, type SecondaryLocale } from "@/lib/intl";
import { postsForLocale } from "@/lib/intl-posts";

/**
 * 로케일 홈·블로그 목록의 구조화 데이터 (2026-08-13 신설).
 *
 * ★왜 공용 모듈인가: 대상이 **50페이지**(홈 25 + 블로그 목록 25)다. 페이지마다 손으로 적으면
 *   반드시 갈라진다 — 실제로 허브 트랙에서 그 갈라짐을 여러 건 치웠다(클라이언트 SEO 문구 ≠ 서버 title).
 *   블로그 목록은 `IntlBlogIndex`(서버 컴포넌트) 한 곳만 고치면 25종에 그대로 전파된다.
 *
 * 🔴 **여기서 «없는 사실»을 만들지 않는다.** 이름·설명은 각 페이지가 이미 `metadata`로
 *   내보내는 문자열을 **그대로 받아 쓴다**(홈) 또는 `POST_LABELS`에서 가져온다(목록).
 *   스키마에만 있고 화면·메타에 없는 문장을 새로 지어내면, 허브 트랙에서 걷어낸 결함
 *   (「합성된 FAQ 질문」·「화면에 없는 답변」)을 그대로 재생산하는 것이다.
 */

/** 디렉터리명 → BCP-47 언어 태그. `zh-hant`만 표기가 다르다(zh-Hant). */
export function bcp47(locale: SecondaryLocale): string {
  return locale === "zh-hant" ? "zh-Hant" : locale;
}

/** 사이트 전체를 가리키는 공통 노드 — 로케일 페이지가 «무엇의 일부인지» 밝힌다. */
function isPartOfSite(locale: SecondaryLocale) {
  return { "@type": "WebSite", name: CHROME[locale].brand, url: SITE };
}

/**
 * 로케일 홈 (`/{locale}/`) — 커뮤니티 피드 페이지다.
 *
 * 타입을 `CollectionPage`로 잡은 이유: 이 페이지의 본체는 «글 하나»가 아니라
 * **여러 사람의 게시물이 흐르는 목록**이다. Article로 선언하면 저자·발행일이 있어야 맞고,
 * WebSite로 선언하면 루트 layout이 이미 내보내는 사이트 WebSite와 충돌한다.
 *
 * ⚠ `name`·`description`은 **호출부가 자기 `metadata`에서 넘긴다.** 여기서 짓지 않는다.
 */
export function LocaleHomeJsonLd({
  locale,
  name,
  description,
}: {
  locale: SecondaryLocale;
  name: string;
  description: string;
}) {
  const url = `${SITE}/${locale}/`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name,
      description,
      url,
      inLanguage: bcp47(locale),
      isPartOf: isPartOfSite(locale),
    },
  ];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

/**
 * 로케일 블로그 목록 (`/{locale}/blog`).
 *
 * Blog(이 URL이 블로그다) + ItemList(무엇이 실려 있나) + BreadcrumbList(어디에 속하나).
 *
 * ⚠ `blogPost`를 **전수로 펼치지 않는다.** 로케일당 40편 넘는 곳이 있고, 각 글은 자기 페이지에서
 *   이미 Article을 내보낸다. 여기서는 목록의 **최신 12편만** ItemList로 가리킨다
 *   (KO `/blog`와 같은 판단 — 산출물 크기 대비 이득이 없다).
 */
export function LocaleBlogIndexJsonLd({ locale }: { locale: SecondaryLocale }) {
  const t = POST_LABELS[locale];
  const url = `${SITE}/${locale}/blog`;
  const posts = postsForLocale(locale);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: t.blogTitle,
      description: t.blogIntro,
      url,
      inLanguage: bcp47(locale),
      publisher: { "@type": "Organization", name: CHROME[locale].brand, url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: t.blogTitle,
      numberOfItems: posts.length,
      itemListElement: posts.slice(0, 12).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `${SITE}/${locale}/blog/${p.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: CHROME[locale].brand, item: `${SITE}/${locale}/` },
        { "@type": "ListItem", position: 2, name: t.blogTitle, item: url },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
