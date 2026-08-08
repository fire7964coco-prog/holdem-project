/**
 * POSTS + 정적 경로 → public/sitemap.xml 생성
 * 사용: npm run generate:sitemap (build 전 자동 실행)
 */
import { writeFileSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const jiti = createJiti(join(root, "scripts", "generate-sitemap.mjs"));
const { POSTS } = jiti("../lib/posts.ts");
const { SECONDARY_LOCALES, HTML_LANG } = jiti("../lib/intl.ts");
const { POSTS_BY_LOCALE } = jiti("../lib/intl-posts.ts");

const SITE = "https://www.holdemmaster.com";

function secondaryLocalesForSlug(slug) {
  return SECONDARY_LOCALES.filter((l) => POSTS_BY_LOCALE[l].some((p) => p.slug === slug));
}

/** trailing slash 없음 (next.config trailingSlash: false) */
const STATIC_ROUTES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.7", changefreq: "monthly" },
  // 정책·문의 (2026-08-05 신설). 순위를 노리는 페이지는 아니지만 색인은 시킨다 —
  // 검색엔진이 사이트의 신뢰도(E-E-A-T)를 볼 때 실제로 조회하는 페이지들이다.
  { path: "/contact", priority: "0.4", changefreq: "yearly" },
  { path: "/privacy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms", priority: "0.3", changefreq: "yearly" },
  { path: "/calculator", priority: "0.95", changefreq: "monthly" },
  { path: "/quiz", priority: "0.85", changefreq: "monthly" },
  { path: "/win-rate-quiz", priority: "0.8", changefreq: "monthly" },
  /**
   * ★영어판 승률 시뮬레이터 (2026-08-04 신설). 새 페이지라 외부 링크가 0이므로
   *   사이트맵이 없으면 발견이 늦다. robots는 index:true다(app/en/win-rate-quiz/page.tsx).
   * ⚠ 참고: 나머지 EN 도구 페이지(/en/calculator·quiz·glossary·hand-chart·ranking)는
   *   **원래부터 사이트맵에 없다.** 의도인지 누락인지 확인되지 않아 이번엔 건드리지 않았다.
   */
  { path: "/en/win-rate-quiz", priority: "0.7", changefreq: "monthly" },
  /**
   * ★2026-08-08 `/hand-chart` 색인 개시 (사장님 결정) — 상세 근거는 `app/hand-chart/page.tsx` 주석.
   *   요약: 몰아준 쪽(holdem-starting-hand-range)이 28일 노출 16·38위로 못 이겼고
   *   희생한 차트는 0이었다. 반면 같은 성격의 `/calculator`는 노출 463·6.5위다.
   *   ⚠ 4주 뒤 재측정 — 포스팅 노출이 떨어지면 되돌린다(기준선: 포스팅 16 / 차트 0).
   */
  { path: "/hand-chart", priority: "0.85", changefreq: "monthly" },
  /**
   * ★2026-08-08 GTO 솔버 랜딩. 도구 본체(solver.holdemmaster.com)는 **noindex**이고
   *   검색은 이 랜딩으로 일원화했다 — 서브도메인은 구글에게 별도 사이트라 본체가 쌓은
   *   도메인 권위를 못 받는다. 반대 증거가 `/calculator`에 있다(노출 463 · 6.5위).
   */
  { path: "/solver", priority: "0.9", changefreq: "monthly" },
  // /hands · /rules/texas-holdem 은 noindex(app/.../page.tsx robots index:false) → 사이트맵에서 제외.
  //   ★특히 `/hands`는 풀지 말 것 — 상대가 holdem-hand-rankings(내부링크 198회, 사이트 최강 필라)라
  //   거기서의 카니발은 실제 손해다. hand-chart와 사정이 다르다.
  { path: "/glossary", priority: "0.8", changefreq: "monthly" },
  { path: "/rules", priority: "0.9", changefreq: "monthly" },
  { path: "/rules/omaha", priority: "0.8", changefreq: "monthly" },
  { path: "/rules/seven-card-stud", priority: "0.8", changefreq: "monthly" },
  { path: "/strategy", priority: "0.85", changefreq: "monthly" },
  { path: "/ranking", priority: "0.9", changefreq: "weekly" },
  { path: "/tournaments", priority: "0.9", changefreq: "weekly" },
  { path: "/pub", priority: "0.9", changefreq: "weekly" },
  { path: "/pub/gangnam", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/hongdae", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/ilsan", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/suwon", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/incheon", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/bundang", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/busan", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/daegu", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/kondae", priority: "0.85", changefreq: "weekly" },
  { path: "/pub/sinchon", priority: "0.85", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/blog/roadmap", priority: "0.7", changefreq: "weekly" },
  ...SECONDARY_LOCALES.map((l) => ({ path: `/${l}/blog`, priority: "0.7", changefreq: "weekly" })),

  /**
   * ── 영어 도구 페이지 (2026-08-04 추가) ──────────────────────────────────
   *
   * ★그전까지 EN 도구 페이지는 **하나도 사이트맵에 없었다.** 색인 가능한 페이지인데
   *   내부링크로만 발견되는 상태였다. `/en/blog`·`/en/tournaments`는 위/아래에서
   *   따로 들어가고 있었고 나머지는 누락이었다.
   *
   * ★★여기 넣기 전에 반드시 그 페이지의 robots를 확인할 것. noindex 페이지를 사이트맵에
   *   올리면 구글 서치콘솔에 "사이트맵에 있으나 noindex" 오류가 뜬다.
   *   확인 방법: `.next/server/app/en/<page>.html` 의 <meta name="robots">
   *
   *   현재 상태(2026-08-04 실측):
   *     index    → /en/calculator · /en/quiz · /en/ranking  ← 그래서 여기 넣는다
   *     noindex  → /en/glossary · /en/hand-chart            ← **넣지 말 것**
   *                (한국어 /hand-chart도 같은 이유로 이 목록에 없다)
   */
  { path: "/en/calculator", priority: "0.7", changefreq: "monthly" },
  { path: "/en/quiz", priority: "0.6", changefreq: "monthly" },
  { path: "/en/ranking", priority: "0.7", changefreq: "weekly" },

  /**
   * ★`/holdem-practice` 누락 복구 (2026-08-04). 색인 가능(index, follow)하고 좌측 레일에도
   *   있는 한국어 도구 페이지인데 사이트맵에만 빠져 있었다.
   *   `npm run canonical:check`의 C-6 검사가 잡았다.
   */
  { path: "/holdem-practice", priority: "0.75", changefreq: "monthly" },
];

/**
 * ── 로케일 홈 피드 (2026-08-04 추가) ────────────────────────────────────────
 *
 * ★25개 언어 홈(`/en`·`/ja`·…)이 **전부 사이트맵에 없었다.** 색인 가능한 페이지이고
 *   각 언어권의 실질적 진입점인데, 구글이 내부링크로만 발견하고 있었다.
 *   `npm run canonical:check`의 C-6이 잡았다.
 * ★이 25개 + 한국어 `/`는 같은 페이지의 언어판이므로 hreflang으로 서로를 선언한다
 *   (토너먼트 일정표를 다루는 방식과 같다).
 */
const localeHomeAlts = [
  { hreflang: "ko", href: `${SITE}/` },
  ...SECONDARY_LOCALES.map((l) => ({
    // zh는 간체 → zh-Hans. lib/tournaments-hreflang.ts와 같은 규칙
    hreflang: l === "zh" ? "zh-Hans" : l === "zh-hant" ? "zh-Hant" : HTML_LANG[l] || l,
    href: `${SITE}/${l}`,
  })),
  { hreflang: "x-default", href: `${SITE}/en` },
];

function todayIso() {
  return new Date().toISOString().slice(0, 10);
}

/**
 * ★2026-08-08 — 정적 라우트의 lastmod를 «빌드일»에서 «실제 변경일(git)»로 바꿨다.
 *
 * 왜: 이전에는 정적 라우트 89개가 **매 배포마다 lastmod가 오늘로** 바뀌었다.
 *     내용이 안 바뀌었는데 바뀌었다고 말하는 셈이라, 구글이 이 사이트의 lastmod를
 *     신뢰하지 않게 된다(구글 문서: 부정확하면 무시한다). 그러면 정말 고친 글의
 *     재크롤 신호까지 같이 죽는다. 블로그 글은 원래부터 `updated || date`를 써서 정확했고,
 *     망가져 있던 건 정적 라우트뿐이었다.
 *
 * 어떻게: 그 라우트를 그리는 소스의 마지막 커밋 날짜를 쓴다.
 *     ⚠ layout.tsx 같은 «전 페이지 공통» 파일은 일부러 넣지 않는다 —
 *       넣으면 또 전부 같은 날짜가 되어 원점으로 돌아간다.
 *     ⚠ Vercel은 vercel.json의 buildCommand(`next build && patch-html-lang`)를 쓰므로
 *       prebuild가 안 돈다 → 사이트맵은 **로컬에서 생성돼 커밋된다.**
 *       로컬엔 전체 히스토리가 있으니 git 조회가 안전하다. shallow clone이면 폴백이 뜬다.
 */
const gitDateCache = new Map();
function gitLastModified(paths, fallback) {
  const key = paths.join("|");
  if (gitDateCache.has(key)) return gitDateCache.get(key);
  let out = null;
  try {
    const existing = paths.filter((p) => existsSync(join(root, p)));
    if (existing.length) {
      const r = execFileSync("git", ["log", "-1", "--format=%cs", "--", ...existing], {
        cwd: root,
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      }).trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(r)) out = r;
    }
  } catch {
    /* git 없음·shallow clone → 폴백 */
  }
  const val = out || fallback;
  gitDateCache.set(key, val);
  return val;
}

/** 라우트 → 그 라우트를 그리는 소스 경로. 명시 안 된 건 `app/<path>`로 추론한다. */
const ROUTE_SOURCES = {
  "/": ["app/page.tsx", "app/home-client.tsx"],
  "/blog": ["app/blog/page.tsx"],
  "/blog/roadmap": ["app/blog/roadmap"],
  // 데이터가 바뀌면 페이지 내용도 바뀐다 — 데이터 파일을 함께 본다
  "/tournaments": ["app/tournaments", "lib/tournaments.ts"],
  "/pub": ["app/pub", "lib/pubs.ts"],
  "/ranking": ["app/ranking", "lib/posts.ts"],
};
function sourcesFor(path) {
  if (ROUTE_SOURCES[path]) return ROUTE_SOURCES[path];
  if (path.startsWith("/pub/")) return ["app/pub", "lib/pubs.ts"]; // 동적 라우트 [region]
  const dir = `app${path}`;
  if (existsSync(join(root, dir))) return [dir];
  // /en/calculator 처럼 로케일 하위가 별도 디렉터리로 없으면 한 단계 위로
  const parent = dir.split("/").slice(0, -1).join("/");
  return existsSync(join(root, parent)) ? [parent] : [dir];
}

function entry(loc, lastmod, changefreq, priority, alternates) {
  const altLinks = (alternates || [])
    .map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${a.href}" />`)
    .join("");
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${altLinks}
  </url>`;
}

/** ko(한국어 마스터)에 실제 존재하는 슬러그 — hreflang이 404를 가리키지 않도록 가드 */
const KO_SLUGS = new Set(POSTS.map((p) => p.slug));

/**
 * 번역본이 있는 글의 hreflang 대체 링크 묶음 (ko + 보조 언어 + x-default)
 * ⚠️ ko는 **실제로 존재할 때만** 추가한다. 특정 언어에만 있는 유니크 글
 * (예: es-US 로컬 글)은 ko 대응본이 없어 `/blog/<slug>`가 404이기 때문.
 * (`lib/intl-blog-page.tsx`의 hreflangLanguages와 동일한 규칙)
 */
function altsForSlug(slug) {
  const secondaries = secondaryLocalesForSlug(slug);
  if (secondaries.length === 0) return [];
  const alts = [];
  if (KO_SLUGS.has(slug)) alts.push({ hreflang: "ko", href: `${SITE}/blog/${slug}` });
  for (const l of secondaries) {
    alts.push({ hreflang: HTML_LANG[l], href: `${SITE}/${l}/blog/${slug}` });
  }
  // 자기 자신 하나뿐이면 hreflang 세트 자체가 무의미 → 생략
  if (alts.length < 2) return [];
  const xDefault = secondaries.includes("en")
    ? `${SITE}/en/blog/${slug}`
    : `${SITE}/${secondaries[0]}/blog/${slug}`;
  alts.push({ hreflang: "x-default", href: xDefault });
  return alts;
}

const siteToday = todayIso();

/**
 * 토너먼트 일정표의 로케일 판.
 * 블로그와 달리 슬러그가 아니라 페이지 하나가 통째로 언어별로 존재하므로
 * altsForSlug()를 못 쓴다. 로케일을 추가하면 이 배열에만 넣으면 된다.
 * ★ app/<locale>/tournaments/page.tsx 를 만들기 전에 여기 먼저 넣으면 사이트맵이 404를 가리킨다.
 */
const TOURNAMENT_LOCALES = ["en", "ja", "zh", "zh-hant", "es"];

const tournamentAlts = [
  { hreflang: "ko", href: `${SITE}/tournaments` },
  ...TOURNAMENT_LOCALES.map((l) => ({
    // zh는 간체 → zh-Hans. lib/tournaments-hreflang.ts와 같은 규칙을 쓴다
    hreflang: l === "zh" ? "zh-Hans" : l === "zh-hant" ? "zh-Hant" : HTML_LANG[l] || l,
    href: `${SITE}/${l}/tournaments`,
  })),
  { hreflang: "x-default", href: `${SITE}/en/tournaments` },
];

// ⚠ 로케일은 동적 `[locale]`이 아니라 **언어별 실제 디렉터리**다(app/en · app/ja …).
//   처음에 `app/[locale]`로 짰다가 경로가 없어 25개가 전부 폴백(=빌드일)으로 떨어졌다.
const localeHomeEntries = SECONDARY_LOCALES.map((l) =>
  entry(`${SITE}/${l}`, gitLastModified([`app/${l}/page.tsx`, `app/${l}`], siteToday), "daily", "0.8", localeHomeAlts)
);

const tournamentEntries = TOURNAMENT_LOCALES.map((l) =>
  entry(
    `${SITE}/${l}/tournaments`,
    gitLastModified([`app/${l}/tournaments`, "lib/tournaments.ts", "lib/tournaments-i18n.ts"], siteToday),
    "weekly",
    "0.9",
    tournamentAlts
  )
);

const staticEntries = STATIC_ROUTES.map((r) =>
  entry(
    `${SITE}${r.path}`,
    gitLastModified(sourcesFor(r.path), siteToday),
    r.changefreq,
    r.priority,
    r.path === "/tournaments" ? tournamentAlts : undefined,
  )
);

// noindex 글은 사이트맵에서도 뺀다 — "색인하지 마라"고 해놓고 사이트맵에 제출하면 모순 신호다.
const INDEXABLE_POSTS = POSTS.filter((p) => !p.noindex);
const NOINDEX_POSTS = POSTS.filter((p) => p.noindex);

const blogEntries = [...INDEXABLE_POSTS]
  .sort((a, b) => a.slug.localeCompare(b.slug))
  .map((p) =>
    entry(
      `${SITE}/blog/${p.slug}`,
      p.updated || p.date,
      "monthly",
      "0.8",
      altsForSlug(p.slug)
    )
  );

const intlBlogEntries = SECONDARY_LOCALES.flatMap((l) =>
  [...POSTS_BY_LOCALE[l]]
    .sort((a, b) => a.slug.localeCompare(b.slug))
    .map((p) =>
      entry(`${SITE}/${l}/blog/${p.slug}`, p.updated || p.date, "monthly", "0.8", altsForSlug(p.slug))
    )
);

const intlCount = SECONDARY_LOCALES.reduce((n, l) => n + POSTS_BY_LOCALE[l].length, 0);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">

  <!-- 자동 생성: npm run generate:sitemap · 블로그 lastmod = post.updated || post.date -->

${staticEntries.join("\n\n")}

  <!-- 로케일 홈 피드 (${SECONDARY_LOCALES.length}개 언어) -->

${localeHomeEntries.join("\n\n")}

  <!-- 다국어 토너먼트 일정표 (${TOURNAMENT_LOCALES.length}개 로케일) -->

${tournamentEntries.join("\n\n")}

  <!-- 블로그 포스트 (${INDEXABLE_POSTS.length}편) -->

${blogEntries.join("\n\n")}

  <!-- 다국어 블로그 포스트 (${intlCount}편) -->

${intlBlogEntries.join("\n\n")}

</urlset>
`;

const outPath = join(root, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");

console.log(`sitemap.xml → ${INDEXABLE_POSTS.length} blog posts + ${intlCount} intl posts + ${STATIC_ROUTES.length} static URLs + ${localeHomeEntries.length} locale homes`);
console.log(NOINDEX_POSTS.length ? `  ↳ noindex로 제외: ${NOINDEX_POSTS.map(p=>p.slug).join(", ")}` : "");
console.log(`Latest blog lastmod: ${[...POSTS].map((p) => p.updated || p.date).sort().pop()}`);
