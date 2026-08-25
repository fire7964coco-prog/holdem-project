import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { CHROME, type SecondaryLocale } from "@/lib/intl";

/**
 * 로케일 서브트리(`app/<locale>/layout.tsx`)가 루트 레이아웃의 **한국어 메타를 덮는** 자리.
 *
 * ★왜 로케일마다 layout.tsx가 필요한가 (2026-08-25)
 *   `app/layout.tsx`의 `metadata`는 사이트 전역 기본값이고, 그 값들이 한국어다
 *   (`applicationName: "홀덤마스터"` · `authors: 홀덤마스터 편집팀` · 한국어 `keywords`).
 *   Next의 메타데이터는 **얕은 병합**이라 하위에서 같은 필드를 주지 않으면 그대로 상속된다.
 *   루트 레이아웃은 서버 컴포넌트라 `usePathname`을 못 쓰고 `params`도 안 받으므로
 *   «지금이 무슨 언어인지»를 알 방법이 없다 → 로케일 세그먼트에 한 겹 끼워 넣는 수밖에 없다.
 *   (`<title>`·og·twitter는 각 page.tsx가 이미 덮고 있어서 이 사각지대에 안 걸렸다.
 *    남은 4종은 **아무 page.tsx도 안 건드리는 필드**라 541페이지가 통째로 새고 있었다.)
 *
 *   빌드 산출물 실측(2026-08-25): 비한국어 HTML **541개 전부**가
 *   `application-name`·`author`를 한국어로, 그중 70개가 `keywords`까지 한국어로 내보냈다.
 *   (blog 글 471개는 `intl-blog-page.tsx`가 `post.tags`로 keywords를 이미 덮고 있었다.)
 *
 * ★문자열을 새로 짓지 않는다
 *   브랜드는 `CHROME[locale].brand` 단일 소스에서 가져온다(현재 25개 언어 전부 "HoldemMaster").
 *   여기서 손으로 적으면 CHROME과 갈린다.
 *
 *   저자명도 마찬가지다 — `intl-blog-page.tsx`가 이미 **두 곳**에서 쓰고 있는
 *   «{brand} Editorial Team»과 한 글자도 다르지 않게 맞춘다:
 *     · `openGraph.authors` → `<meta property="article:author">`
 *     · Article 스키마 `author.name` (JSON-LD)
 *   🔴 «Redaktion»·«編集部» 같은 현지어 저자명을 여기서 새로 지으면 **같은 페이지 안에서
 *      meta author와 JSON-LD author가 갈린다.** 구글은 그 불일치를 그대로 본다.
 *      현지어로 가려면 og·JSON-LD·about 페이지까지 같은 커밋에서 함께 옮겨야 하고,
 *      그건 이 기계적 치환 회차의 몫이 아니다(§14 검수가 붙는 별건).
 *
 * ▶ 게이트: `npm run check:meta-lang`
 */
export function localeLayoutMetadata(locale: SecondaryLocale): Metadata {
  const brand = CHROME[locale].brand;
  return {
    applicationName: brand,
    authors: [{ name: `${brand} Editorial Team`, url: SITE }],
  };
}
