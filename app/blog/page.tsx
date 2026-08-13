import BlogIndexClient, { type BlogCardMeta } from "./blog-index-client";
import { POSTS, CATEGORIES } from "@/lib/posts";
import HubPage from "@/components/hub-page";
import { SITE } from "@/lib/site";

/**
 * 블로그 목록 — 서버에서 카드에 필요한 필드만 뽑아 내려보낸다.
 *
 * ★2026-08-05: 전엔 클라이언트 컴포넌트가 `import { POSTS } from "@/lib/posts"` 를 직접 했다.
 *   POSTS 는 각 글의 **content(마크다운 본문 전체)** 를 들고 있어서, 목록 페이지에서
 *   한 글자도 쓰지 않는 56편치 본문이 통째로 클라이언트 번들·플라이트에 실려 나갔다.
 *   (같은 결함을 2026-08-02에 blog-post-client에서 이미 한 번 고쳤다 —
 *    거기 주석 "57편치 메타를 넘겨봐야 실제로 쓰는 건 5편뿐" 참조. 목록 쪽만 남아 있던 것.)
 *   카드가 그리는 필드만 추려서 넘긴다.
 *
 * ★검색·태그 필터(?q= · ?tag=)는 클라이언트가 **window.location에서** 읽는다.
 *   useSearchParams()도, 서버의 searchParams prop도 쓰지 않는다 — 둘 다 이 페이지를
 *   정적 렌더에서 떨어뜨려 목록 HTML을 비워 버린다. 자세한 근거는 blog-index-client.tsx 주석.
 */
export default function Page() {
  const posts: BlogCardMeta[] = POSTS.map((p) => ({
    slug: p.slug,
    title: p.title,
    desc: p.desc,
    category: p.category,
    date: p.date,
    readTime: p.readTime,
    tags: p.tags,
  }));

  /**
   * JSON-LD는 **서버에서** 내보낸다 (2026-08-13 — 구 `<SEO schema={jsonLd}>`는 죽은 코드였다.
   * `components/seo.tsx`가 `schema`를 구조분해에서 받지도 않아 한 번도 출력된 적이 없다).
   *
   * ⚠ 구 Blog 노드는 `url`이 없어 어느 URL의 블로그인지 못 박았다 — 붙였다.
   * ⚠ `blogPost`를 **전수로 넣지 않는다.** 69편을 ld+json에 펼치면 HTML이 크게 불어나는데,
   *   각 글은 자기 페이지에서 이미 Article을 내보내고 sitemap이 색인 경로를 준다.
   *   여기서는 «이 URL이 블로그다»만 선언하고, 목록 자체는 ItemList로 **최신 12편**만 가리킨다.
   */
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "홀덤마스터 블로그",
      description: "텍사스 홀덤 전략, 포커 팁, 토너먼트 정보를 정기적으로 업데이트합니다.",
      url: `${SITE}/blog`,
      inLanguage: "ko",
      publisher: { "@type": "Organization", name: "홀덤마스터", url: SITE },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "최신 홀덤 전략 글",
      itemListElement: posts.slice(0, 12).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `${SITE}/blog/${p.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: "홀덤 전략 블로그", item: `${SITE}/blog` },
      ],
    },
  ];

  return (
    <HubPage title="블로그">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIndexClient posts={posts} categories={[...CATEGORIES]} />
    </HubPage>
  );
}
