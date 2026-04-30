"use client";

import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string | string[];
  path?: string;
  schema?: object | object[];
  type?: "website" | "article";
  image?: string;
  seoTitle?: string;
}

/**
 * 클라이언트 측 메타데이터 동기화
 *
 * SSG 단계에서 모든 메타태그·title·canonical 은 이미 빌드 타임에 HTML 에 박혀 있다.
 * 이 컴포넌트는 클라이언트 라우트 변경(SPA 네비게이션) 시에만 동작해서
 * <title>/description 만 업데이트한다. 서버에서는 부작용 없는 빈 노드.
 *
 * react-helmet-async 는 Node ESM 환경에서 named export 호환성 문제가 있어 자체 구현으로 교체.
 */
export function SEO({ title, description, path = "" }: SEOProps) {
  const siteName = "홀덤마스터";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = "https://holdemmaster.com";
  const canonical = `${baseUrl}${path}`;

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.title !== fullTitle) document.title = fullTitle;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
      if (!el) return;
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('link[rel="canonical"]', "href", canonical);
  }, [fullTitle, description, canonical]);

  return null;
}
