import { POSTS } from "@/lib/posts";

const SITE = "https://holdemmaster.com";

// 빌드 시 정적 생성 (사이트맵과 동일 — 배포마다 갱신)
export const dynamic = "force-static";

function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET() {
  // 발행일 최신순 (새 글이 피드 상단)
  const posts = [...POSTS].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const items = posts
    .map((p) => {
      const url = `${SITE}/blog/${p.slug}`;
      const pubDate = new Date(`${p.date}T00:00:00Z`).toUTCString();
      // CDATA 안전을 위해 "]]>" 시퀀스만 분리
      const desc = p.desc.replace(/]]>/g, "]]]]><![CDATA[>");
      return `    <item>
      <title>${esc(p.seoTitle ?? p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${esc(p.category)}</category>
      <description><![CDATA[${desc}]]></description>
    </item>`;
    })
    .join("\n");

  const lastBuildDate = new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>홀덤마스터 블로그</title>
    <link>${SITE}/blog</link>
    <description>텍사스 홀덤 규칙·전략·확률·토너먼트 정보 — 홀덤마스터 최신 블로그 글</description>
    <language>ko-KR</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
