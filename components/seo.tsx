"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";
import { CHROME, localeFromPath } from "@/lib/intl";

/**
 * 🔴 **이 컴포넌트가 실제로 쓰는 건 `title`·`description`·`path` 셋뿐이다.**
 *
 * ★2026-08-13에 `schema` prop을 **인터페이스에서 제거**했다. 이유:
 *   타입에는 있는데 구현이 구조분해에서 받지도 않아, `<SEO schema={...}>`를 쓰는
 *   **13개 파일이 전부 죽은 코드**였다 — 타입체크는 통과하니 아무도 몰랐고,
 *   `/ranking`(사이트 최대 노출 쿼리)을 포함한 허브 전부가 구조화 데이터 0인 채로 나갔다.
 *   **선언만 있고 구현이 없는 prop은 «조용히 버려지는 인자»다.** 다시 만들지 마라.
 *   → JSON-LD가 필요하면 **서버 `page.tsx`에서** `<script type="application/ld+json">`로 직접 렌더한다.
 *     최신 예시: `app/ranking/page.tsx` · `app/hands/page.tsx`.
 *
 * ⚠ 아래 `keywords`·`type`·`image`·`seoTitle`도 **현재 구현이 쓰지 않는다.** 다만 이쪽은
 *   버려져도 손실이 구조화 데이터만큼 크지 않아 호출부를 건드리지 않고 남겨 뒀다.
 *   메타를 진짜로 바꾸려면 서버 `metadata` export를 고쳐라(위 주석 참조).
 */
interface SEOProps {
  title: string;
  description: string;
  path?: string;
  /** ⚠ 아래 넷은 현재 구현이 읽지 않는다 (위 주석 참조). */
  keywords?: string | string[];
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
export function SEO({ title, description, path }: SEOProps) {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);

  /**
   * ★브랜드명을 로케일에서 뽑는다 (2026-08-04).
   *   전엔 "홀덤마스터"가 하드코딩돼 있어서, 이 컴포넌트를 쓰는 **영어 페이지의 제목이
   *   런타임에 "… | 홀덤마스터"로 덮어쓰였다.** 서버 HTML은 "| HoldemMaster"로 옳게
   *   나가는데 JS가 돌면서 한국어로 바뀌던 것 — 브라우저 탭·SPA 이동 후 표시가 전부 한국어였다.
   */
  const siteName = locale ? CHROME[locale].brand : "홀덤마스터";
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = SITE;

  /**
   * ★canonical은 path가 없으면 **현재 경로**를 쓴다. 절대 홈으로 떨어뜨리지 않는다.
   *   기존엔 `path = ""`가 기본이라 `SITE + "" = 홈`이 됐고, 실제로
   *   `/en/glossary`·`/en/hand-chart`·`/en/ranking`이 (존재하지 않는 `canonical` prop을
   *   넘기는 바람에 path가 비어) **canonical을 홈으로 덮어쓰고 있었다.**
   *   서버 metadata는 옳은 canonical을 내보내는데 JS가 그걸 홈으로 바꾸던 상태다.
   *   이 컴포넌트 상단 주석의 2026-08-02 사고와 같은 종류다.
   */
  const canonical = `${baseUrl}${path ?? pathname}`;

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
