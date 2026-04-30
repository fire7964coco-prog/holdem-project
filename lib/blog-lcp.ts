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
      width: 1124,
      height: 613,
    };
  }

  if (mdM) {
    return {
      src: mdM[2],
      source: "markdown",
      alt: mdM[1] || "",
      width: 1200,
      height: 630,
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
