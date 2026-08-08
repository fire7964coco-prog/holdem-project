import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { CHROME, POST_LABELS, OG_LOCALE, NAV_CTA, NAV_HOME_FEED, dirForLocale, type SecondaryLocale } from "@/lib/intl";
import { postsForLocale } from "@/lib/intl-posts";
import BlogTopBar from "@/components/blog-top-bar";

export function intlBlogIndexMetadata(locale: SecondaryLocale): Metadata {
  const t = POST_LABELS[locale];
  const url = `${SITE}/${locale}/blog`;
  // ⚠️ 여기 구분자가 원래 "??"(물음표 2개)로 박혀 있었다.
  //    em dash가 인코딩 사고로 U+3F U+3F가 된 채 커밋돼서
  //    25개 로케일 블로그 목록의 <title>에 "Blog ??HoldemMaster"로 나가고 있었다.
  const title = `${t.blogTitle} | ${CHROME[locale].brand}`;
  return {
    // absolute — 안 쓰면 루트 template("%s | 홀덤마스터")이 덧붙는다
    title: { absolute: title },
    description: t.blogIntro,
    alternates: { canonical: url },
    // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
    twitter: {
      card: "summary_large_image",
      title,
      description: t.blogIntro,
    },
    openGraph: {
      type: "website",
      url,
      title,
      description: t.blogIntro,
      siteName: CHROME[locale].brand,
      locale: OG_LOCALE[locale],
    },
  };
}

export function IntlBlogIndex({
  locale,
  inShell = false,
}: {
  locale: SecondaryLocale;
  /** 허브 셸(<HubPage>) 안에서 렌더되는가 — 상단바·바깥 폭 제한을 셸에 넘긴다 */
  inShell?: boolean;
}) {
  const t = POST_LABELS[locale];
  const posts = postsForLocale(locale);
  const base = `/${locale}/blog`;

  return (
    <div dir={dirForLocale(locale)}>
      {/* ★허브 셸 안에서는 상단바를 그리지 않는다 (2026-08-04).
          셸이 홈과 같은 마스트헤드를 이미 그리므로 여기서 또 그리면 상단바가 2겹이 된다.
          아직 셸을 안 입힌 로케일(ja·zh·es…)은 예전대로 BlogTopBar가 필요하다. */}
      {!inShell && (
        <BlogTopBar
          homeHref={`/${locale}`}
          homeFeedLabel={NAV_HOME_FEED[locale]}
          communityLabel={NAV_CTA[locale]}
        />
      )}
      <div className={inShell ? "px-4 py-10" : "max-w-4xl mx-auto px-4 py-16"}>
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-sans font-extrabold text-foreground mb-3">{t.blogTitle}</h1>
        <p className="text-lg text-muted-foreground">{t.blogIntro}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {posts.map((p) => (
          <Link key={p.slug} href={`${base}/${p.slug}`}>
            <article className="h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-0.5 transition-all cursor-pointer group">
              {p.image ? (
                /**
                 * ★ 2026-08-07: 생 <img>였다 — 25개 로케일 목록이 전부 최적화를 우회했다.
                 * 카드는 **160px 높이 자리**인데 1200px 원본을 통째로 받고 있었다.
                 * /de/blog 실측: 42장 = **1,488,918 bytes**.
                 *
                 * 폭 480은 라이브 실측 근거다: 비셸 로케일 **420px**(max-w-4xl 864 ÷ 2 − gap),
                 * 허브 셸 로케일 **352px**. 둘 다 덮으면서 부족하지 않은 값.
                 * ⚠ 추측하지 말 것 — 표시 폭은 `getBoundingClientRect()`로 재고 나서 바꾼다.
                 *
                 * ★`sizes`를 «일부러» 안 준다 (2026-08-08).
                 *   `sizes`가 있으면 next/image가 deviceSizes ∪ imageSizes **사다리 전체**를 srcset에 깐다
                 *   → 이미지 1장이 변형 12종이 되고, 그게 **Vercel 이미지 변환 쿼터**를 그만큼 먹는다.
                 *   빼면 `1x`/`2x` **2종**만 나온다(480 · 1080). 카드는 420px 고정 박스라 그걸로 충분하고
                 *   **전송량 절감은 그대로**다. 카드처럼 크기가 고정된 자리엔 sizes를 주지 말 것.
                 */
                <Image
                  src={p.image}
                  alt={p.imageAlt ?? p.title}
                  width={480}
                  height={270}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="px-6 pt-6 text-3xl">{p.emoji}</div>
              )}
              <div className="p-6 pt-4">
              <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-2">
                {p.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
              <div className="mt-4 text-xs text-muted-foreground">{p.readTime} {t.readSuffix}</div>
              </div>
            </article>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
