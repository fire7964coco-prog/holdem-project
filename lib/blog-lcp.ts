import { IMAGE_DIMS, IMAGE_DIMS_FALLBACK } from "./image-dims";

/**
 * 블로그 본문에서 LCP 후보(첫 faqcard 또는 첫 마크다운 이미지)를
 * renderMarkdown 과 동일한 문서 순서 규칙으로 추출·제거한다.
 */
export type BlogLcpInfo = {
  src: string;
  source: "faqcard" | "markdown";
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

/**
 * 🔴 치수는 **손으로 적지 않는다** — 파일별 실제 치수표(`lib/image-dims.ts`)를 본다.
 *    2026-09-12 이전엔 여기도 1200×630(마크다운)·1124×613(faqcard)이 박혀 있었다.
 *    실측하면 `public/images/` 597장 중 1200×630은 **3장**이고 최다는 1200×675다.
 *    같은 날 `lib/render-markdown.ts`가 표를 보게 바뀌었는데 **이 파일만 남으면 정본이 둘로 갈린다.**
 *    🪶 지금 이 값은 도달 불가 경로다(전 포스트 `keepImagesInBody: true`라 렌더에 안 쓰인다).
 *       그래도 «남은 사본»은 다음 세션이 근거로 인용한다 — 같이 고친다
 *       (메모리 `completion-count-the-copies-first`).
 */
const dims = (src: string) => {
  const [width, height] = IMAGE_DIMS[src] ?? IMAGE_DIMS_FALLBACK;
  return { width, height };
};

const FAQCARD_RE = /:::faqcard\[([^\]]+)\]\[([^\]]*)\]\[([^\]]*)\]:::/;
const MD_IMG_RE = /!\[([^\]]*)\]\(([^)\s]+)/;

export function getBlogLcpInfo(content: string): BlogLcpInfo | null {
  const faqM = FAQCARD_RE.exec(content);
  const mdM = MD_IMG_RE.exec(content);
  const fi = faqM?.index ?? Infinity;
  const mi = mdM?.index ?? Infinity;

  if (fi === Infinity && mi === Infinity) return null;

  if (fi <= mi && faqM) {
    return {
      src: faqM[1],
      source: "faqcard",
      alt: faqM[2] || "",
      caption: faqM[3] || undefined,
      ...dims(faqM[1]),
    };
  }

  if (mdM) {
    return {
      src: mdM[2],
      source: "markdown",
      alt: mdM[1] || "",
      ...dims(mdM[2]),
    };
  }

  return null;
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function stripFirstBlogLcpBlock(content: string, lcp: BlogLcpInfo): string {
  if (lcp.source === "faqcard") {
    return content.replace(FAQCARD_RE, "");
  }
  const esc = escapeRe(lcp.src);
  return content.replace(new RegExp(`!\\[[^\\]]*\\]\\(${esc}(?:\\s+"[^"]*")?\\)`), "");
}
