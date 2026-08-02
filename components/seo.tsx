"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/site";

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
 * 클라이언트 측 메타데이터 동기화 (SPA 네비게이션 보정 전용)
 *
 * 🔴 **이 컴포넌트만으로는 SEO 메타가 서버 HTML에 들어가지 않는다.**
 *    useEffect는 브라우저에서 JS가 돈 뒤에야 실행되므로, 크롤러가 받는 SSG HTML에는
 *    **루트 layout의 기본값**(홈 제목 + `alternates.canonical = SITE` = 홈 절대주소)이 그대로 남는다.
 *
 * ⚠ 2026-08-02 실제 사고: 여기 원래 "SSG 단계에서 모든 메타태그·title·canonical은 이미 빌드
 *    타임에 HTML에 박혀 있다"고 적혀 있었는데 **틀린 전제였다.** 그 결과 `/pub`·`/ranking`·
 *    `/quiz`·`/rules/*`·`/strategy`·`/glossary`가 전부 **canonical을 홈으로 지목**하고 있었고,
 *    `/pub`은 서버 `<title>`이 홈 제목이었다. 「홀덤사이트」 1,896노출을 받던 `/ranking`이
 *    같은 쿼리를 홈과 나눠 갖던 원인이다.
 *
 * ✅ 규칙: **모든 라우트는 서버 `page.tsx`(또는 그 라우트의 `layout.tsx`)에서
 *    `export const metadata`로 `title`·`description`·`alternates.canonical`을 직접 선언한다.**
 *    루트 layout의 canonical은 절대주소라 **상속되면 항상 홈**이 된다 — 반드시 덮어써야 한다.
 *    이 컴포넌트는 그 위에서 SPA 이동 시 표시를 맞추는 보조 장치일 뿐이다.
 *    점검: `npm run canonical:check`
 *
 * react-helmet-async 는 Node ESM 환경에서 named export 호환성 문제가 있어 자체 구현으로 교체.
 */
export function SEO({ title, description, path = "" }: SEOProps) {
  const siteName = "홀덤마스터";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = SITE;
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
