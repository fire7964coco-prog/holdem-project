/**
 * 다국어 포스트 본문 내부 링크 검사기
 *
 * 번역본(보조 언어) 글에서 마크다운 내부 링크가 올바른 언어 경로를 쓰는지 검사한다.
 *   - 잘못됨: [텍스트](/blog/슬러그)            → 한국어 페이지로 새버림
 *   - 잘못됨: [텍스트](/<다른언어>/blog/슬러그)   → 다른 언어로 교차 누수
 *   - 올바름: [텍스트](/<현재언어>/blog/슬러그), 앵커(#...), 외부 링크(http...)
 *
 * 위반이 있으면 exit code 1로 빌드를 막는다.
 * 사용: npm run check:intl-links (build 전 자동 실행)
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const jiti = createJiti(join(root, "scripts", "check-intl-links.mjs"));
const { SECONDARY_LOCALES } = jiti("../lib/intl.ts");
const { POSTS_BY_LOCALE } = jiti("../lib/intl-posts.ts");

const SECONDARY_SET = new Set(SECONDARY_LOCALES);

/** 마크다운 내부 링크 [text](path) 추출 (외부 http(s)와 앵커는 제외) */
const LINK_RE = /\[[^\]]+\]\((\/[^)]*)\)/g;

const violations = [];

for (const locale of SECONDARY_LOCALES) {
  for (const post of POSTS_BY_LOCALE[locale]) {
    for (const m of post.content.matchAll(LINK_RE)) {
      const href = m[1];

      // 블로그 링크만 검사 대상. (/calculator 등 공용 유틸 페이지는 통과)
      const blogMatch = href.match(/^\/(?:([a-z]{2})\/)?blog\/(.+)$/);
      if (!blogMatch) continue;

      const linkLocale = blogMatch[1]; // undefined면 언어 코드 없는 /blog/...

      if (!linkLocale) {
        violations.push({
          locale,
          slug: post.slug,
          href,
          reason: `언어 코드 없음 → /${locale}/blog/... 로 써야 함`,
        });
      } else if (linkLocale !== locale && SECONDARY_SET.has(linkLocale)) {
        violations.push({
          locale,
          slug: post.slug,
          href,
          reason: `다른 언어(${linkLocale})로 교차 누수 → /${locale}/blog/... 로 써야 함`,
        });
      }
    }
  }
}

if (violations.length > 0) {
  console.error(`\n✖ 다국어 내부 링크 검사 실패 — ${violations.length}건\n`);
  for (const v of violations) {
    console.error(`  [${v.locale}] ${v.slug}`);
    console.error(`    링크: ${v.href}`);
    console.error(`    문제: ${v.reason}\n`);
  }
  console.error("번역본 본문 링크는 반드시 해당 언어 경로(/<lang>/blog/슬러그)를 사용하세요.\n");
  process.exit(1);
}

const total = SECONDARY_LOCALES.reduce((n, l) => n + POSTS_BY_LOCALE[l].length, 0);
console.log(`✓ 다국어 내부 링크 검사 통과 (${total}편, ${SECONDARY_LOCALES.length}개 언어)`);
