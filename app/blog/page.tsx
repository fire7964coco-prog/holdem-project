import BlogIndexClient, { type BlogCardMeta } from "./blog-index-client";
import { POSTS, CATEGORIES } from "@/lib/posts";
import HubPage from "@/components/hub-page";

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

  return (
    <HubPage title="블로그">
      <BlogIndexClient posts={posts} categories={[...CATEGORIES]} />
    </HubPage>
  );
}
