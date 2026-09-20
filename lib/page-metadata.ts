import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * OG/트위터 카드 공용 빌더 — **«얕은 병합» 때문에 필요하다.**
 *
 * 🔴 Next의 `metadata`는 `openGraph`·`twitter`를 **키 단위로 통째 교체**한다(깊은 병합이 아니다).
 *    그래서 라우트가 `openGraph`를 **안 적으면** 루트 layout의 홈 카드가 그대로 나가고,
 *    **적으면** 이번엔 `images`가 상속되지 않아 카드가 빈 채로 나간다. 둘 다 조용하다.
 *
 * ★2026-09-20 신설. 그날 실측(JS 끈 서버 HTML ↔ 렌더 후 DOM, 20개 라우트)에서
 *   `/ranking`·`/glossary`·`/hands`·`/strategy` 등이 **서버 og:title = «홀덤마스터 — 텍사스 홀덤
 *   완벽 가이드» · og:url = 홈**으로 나가고 있었다. 2026-08-02에 `title`·`description`·`canonical`은
 *   고쳤지만 **`openGraph` 축은 그때 안 고쳤다.** 카카오톡·페이스북 같은 소셜 스크래퍼는
 *   **JS를 돌리지 않으므로**, 클라이언트 `<SEO>`가 런타임에 고쳐 봐야 그들에겐 영원히 안 보인다.
 *   → **og는 서버 전용 영역이다.** 자세한 경위 = `docs/og-meta-audit-2026-09-20.md`.
 *
 * 사용법: 라우트의 `metadata`에서 펼친다.
 *   export const metadata: Metadata = {
 *     title: TITLE, description: DESC,
 *     alternates: { canonical: `${SITE}/ranking` },
 *     ...socialMeta({ title: TITLE, description: DESC, path: "/ranking" }),
 *   };
 */

/** 사이트 공용 OG 이미지 (1200×630 · `public/opengraph.jpg`) */
export const OG_IMAGE = "/opengraph.jpg";

type SocialMetaOptions = {
  /** 페이지 제목 — **브랜드 접미 없이** 넘긴다(여기서 `| brand`를 붙인다). */
  title: string;
  description: string;
  /** 선행 `/` 포함, **끝 `/` 금지**(붙이면 301 — CLAUDE.md §8). */
  path: string;
  /** 기본 «홀덤마스터». 영어/다국어 라우트는 해당 브랜드 표기를 넘긴다. */
  brand?: string;
  /** og:locale. 기본 `ko_KR`. */
  ogLocale?: string;
  /**
   * 소셜 카드에만 쓸 **별도** 제목. 계산기 랜딩처럼 카드용 짧은 문구를
   * 따로 두는 자리에서 쓴다. 없으면 `${title} | ${brand}`.
   */
  ogTitle?: string;
  image?: string;
  imageAlt?: string;
};

export function socialMeta({
  title,
  description,
  path,
  brand = "홀덤마스터",
  ogLocale = "ko_KR",
  ogTitle,
  image = OG_IMAGE,
  imageAlt,
}: SocialMetaOptions): Pick<Metadata, "openGraph" | "twitter"> {
  const cardTitle = ogTitle ?? `${title} | ${brand}`;
  const url = `${SITE}${path}`;
  const alt = imageAlt ?? brand;

  return {
    openGraph: {
      type: "website",
      locale: ogLocale,
      url,
      siteName: brand,
      title: cardTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: cardTitle,
      description,
      images: [image],
    },
  };
}
