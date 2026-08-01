/**
 * 목차용 헤딩 유틸 — 클라이언트(TocList)도 쓰므로 렌더러와 **분리된 모듈**로 둔다.
 * 한 파일에 두면 extractHeadings 하나 쓰려다 renderMarkdown 499줄이 번들에 딸려온다
 * (트리셰이킹에 기대지 말 것). 함수 본문은 blog-post-client.tsx에서 그대로 옮긴 것이다.
 */

export function slugify(text: string): string {
  return text
    .replace(/[^\w\s가-힣]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/** 목차: H2(##)만 노출 — 핵심 요약·FAQ Q·소제목(###) 제외 (모바일 LCP·가독성) */
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  return [...content.matchAll(/^## (.+)$/gm)]
    .map((m) => ({ id: slugify(m[1]), text: m[1].trim(), level: 2 }))
    .filter((h) => !/이 글 핵심 요약/.test(h.text));
}
