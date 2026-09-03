/**
 * 본문 이미지 재사용 검사기 (CLAUDE.md §9 「클러스터 글 본문 이미지 고유화」)
 *
 * ★왜 만들었나 (2026-08-31)
 *   핸드오프가 「KO 코퍼스 48장이 2편 이상 공유」라고 적어 뒀는데 실측은 **17장**이었다.
 *   원인 = **썸네일 참조를 본문 이미지로 섞어 셌다.**
 *     - `[앵커](/blog/slug "thumb:/images/x.webp")`  ← 링크 «대상 글»의 자기 이미지 미리보기
 *     - `:::readnext` 카드 줄 `/blog/slug | 제목 | /images/x.webp`  ← 같은 성격
 *   둘 다 **설계상 정상**이다(대상 글의 이미지를 보여주는 것이 목적). 재사용 규율이 겨냥하는 것은
 *   «같은 사진이 여러 글의 **본문에** 실려 각 글의 고유성이 사라지는 것»이다.
 *   그래서 이 게이트는 **hero + 본문에 실제로 렌더되는 이미지만** 센다.
 *
 * 🔴 판정 못 하는 자리는 「미판정」으로 반드시 출력한다 — 0건이 «검증»으로 오독되지 않게.
 *
 * 사용:
 *   node scripts/check-image-reuse.mjs                 # KO 코퍼스 검사(기본 — 동작 불변)
 *   node scripts/check-image-reuse.mjs --locale=ja     # 특정 로케일
 *   node scripts/check-image-reuse.mjs --all           # KO + 24개 로케일 전수 + 요약표
 *   node scripts/check-image-reuse.mjs --selftest      # 게이트 자체 검증
 *   node scripts/check-image-reuse.mjs --strict        # 🔴가 있으면 exit 1
 *
 * ★ 로케일 인자 추가 (2026-09-03)
 *   slug는 전 언어 동일하지만(CLAUDE.md §7) **본문 구성은 로케일마다 재저작**이라
 *   이미지 공유 양상이 KO와 다르다. 그래서 KO 결과를 옮겨 적으면 안 되고 로케일마다 다시 센다.
 *   🔴 **클러스터 지도가 있는 로케일은 9개뿐이다**(ko·en·ja·es·pt·de·zh·zh-hant·id).
 *   나머지 16개는 clusterOf가 항상 null이라 «같은 필라 안 공유»를 **원리상 판정할 수 없다**
 *   → 그 로케일의 본문 공유는 전부 🟠 + 「미판정」으로 계수된다. 0건을 검증으로 읽지 마라.
 */
import { dirname, join, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

/* ────────────────────────────────────────────────────────────────
 * 예외 — 반드시 사유를 적는다. 사유 없는 행 금지.
 * ──────────────────────────────────────────────────────────────── */
const ALLOW = [
  {
    image: "tournament-hall-wsop.webp",
    reason:
      "대회 현장 사진 — 사장님 판정(2026-08-31): 「토너먼트 관련 사진은 서치해서 찾은 것 아닌가, 그런 건 그냥 둬도 될 듯」. " +
      "🔴 관찰 사실만 적는다: 820×448 · 워터마크 없음 · 실제 인물과 WSOP 테이블 로고가 보이는 보도사진 형태. " +
      "**출처는 확인되지 않았다** — 「외부 자산」으로 확정된 것이 아니라 «출처 미확인이라 손대지 않는다»가 판정 근거다.",
  },
  {
    image: "tournament-trophy.webp",
    reason:
      "대회 트로피 이미지 — 위와 같은 사장님 판정으로 동결. " +
      "🔴 단, 이건 보도사진과 다르다: 1024×572에 노란 배지형 스페이드 마크가 있고 이는 " +
      "tiebreak-kicker-concept·tiebreak-split-pot과 **같은 생성 배치**의 마크다(= 우리 생성물일 가능성이 크다). " +
      "되살릴 때 「외부 자산이라 못 건드린다」로 읽지 마라 — 근거는 우선순위 판정이지 저작권이 아니다.",
  },
];

/* ────────────────────────────────────────────────────────────────
 * 추출 — 여기가 게이트의 심장이다.
 *   hero  : post.image (히어로 = LCP · OG 이미지)
 *   body  : 본문 마크다운 이미지 ![alt](/images/x.webp "title")
 *           + 본문 raw <img src="/images/x.webp">  (실제로 렌더된다)
 *   ✂ 제외: thumb:… / :::readnext 카드 줄 → 「대상 글의 이미지」이지 이 글의 본문 이미지가 아니다.
 *          마크다운 이미지·<img> 문법과 구조적으로 겹치지 않으므로 «필터»가 아니라 «미포착»으로 배제된다.
 * ──────────────────────────────────────────────────────────────── */
const MD_IMG_RE = /!\[[^\]]*\]\(\s*(\/images\/[^)\s"']+)/g;
const RAW_IMG_RE = /<img[^>]*\ssrc=["'](\/images\/[^"']+)["']/g;

export function extractImages(post) {
  const hero = [];
  const body = [];
  if (typeof post.image === "string" && post.image.startsWith("/images/")) hero.push(basename(post.image));
  const content = post.content || "";
  for (const m of content.matchAll(MD_IMG_RE)) body.push(basename(m[1]));
  for (const m of content.matchAll(RAW_IMG_RE)) body.push(basename(m[1]));
  return { hero, body: [...new Set(body)] };
}

/* ────────────────────────────────────────────────────────────────
 * 분석
 * ──────────────────────────────────────────────────────────────── */
export function analyze(posts, clusterOf) {
  const usage = new Map(); // img -> Map(slug -> Set<'hero'|'body'>)
  for (const post of posts) {
    const { hero, body } = extractImages(post);
    const put = (img, kind) => {
      if (!usage.has(img)) usage.set(img, new Map());
      const per = usage.get(img);
      if (!per.has(post.slug)) per.set(post.slug, new Set());
      per.get(post.slug).add(kind);
    };
    for (const i of hero) put(i, "hero");
    for (const i of body) put(i, "body");
  }

  const allowed = new Map(ALLOW.map((a) => [a.image, a.reason]));
  const findings = [];
  let unjudged = 0;

  for (const [img, per] of usage) {
    if (per.size < 2) continue;
    if (allowed.has(img)) continue;

    const slugs = [...per.keys()];
    const heroSlugs = slugs.filter((s) => per.get(s).has("hero"));
    const clusters = slugs.map((s) => clusterOf(s));
    const known = clusters.filter(Boolean);
    const unknownCount = clusters.length - known.length;

    // 같은 필라 안에서 공유되고 있나
    const byCluster = new Map();
    known.forEach((c, i) => {
      const list = byCluster.get(c) || [];
      list.push(slugs[clusters.indexOf(c, 0)]);
      byCluster.set(c, list);
    });
    const sameCluster = [];
    for (const c of new Set(known)) {
      const members = slugs.filter((s) => clusterOf(s) === c);
      if (members.length >= 2) sameCluster.push({ cluster: c, members });
    }

    let level, reason;
    if (heroSlugs.length >= 2) {
      level = "RED";
      reason = `히어로 중복 ${heroSlugs.length}편 — SERP 썸네일·OG 이미지까지 같아진다`;
    } else if (sameCluster.length) {
      level = "RED";
      reason = `같은 필라 안 본문 공유 — ${sameCluster.map((s) => `${s.cluster}(${s.members.length}편)`).join(" · ")}`;
    } else {
      level = "ORANGE";
      reason = "클러스터가 다른 글끼리 공유 — §9 「연관 클러스터」 밖이라 판정 필요";
    }
    if (unknownCount) unjudged += unknownCount;

    findings.push({
      img,
      level,
      reason,
      n: per.size,
      slugs: slugs.map((s) => ({
        slug: s,
        kinds: [...per.get(s)].sort().join("+"),
        cluster: clusterOf(s) || "(클러스터 미등재)",
      })),
      unknownCount,
    });
  }

  findings.sort((a, b) => (a.level === b.level ? b.n - a.n || a.img.localeCompare(b.img) : a.level === "RED" ? -1 : 1));
  return { findings, totalImages: usage.size, unjudged };
}

/* ────────────────────────────────────────────────────────────────
 * 로케일 해석 — 순수 함수라 셀프테스트가 검증한다
 * ──────────────────────────────────────────────────────────────── */
export const LOCALES = [
  "ar", "bn", "de", "en", "es", "fa", "fil", "fr", "he", "hi", "id", "it", "ja",
  "ms", "pl", "pt", "ro", "ru", "sw", "th", "tr", "uk", "vi", "zh", "zh-hant",
];
// 클러스터 지도가 실제로 있는 로케일만. 없는 곳은 «판정 불가»이지 «결함 없음»이 아니다.
export const CLUSTERED = ["ko", "en", "ja", "es", "pt", "de", "zh", "zh-hant", "id"];

export function resolveLocale(loc) {
  const key = String(loc || "ko").toLowerCase();
  const UP = key.toUpperCase().replace(/-/g, "_");
  if (key === "ko") {
    return { locale: "ko", module: "../lib/posts.ts", postsExport: "POSTS", clustersExport: "KO_CLUSTERS" };
  }
  if (!LOCALES.includes(key)) return null;
  return {
    locale: key,
    module: `../lib/posts-${key}/index.ts`,
    postsExport: `${UP}_POSTS`,
    clustersExport: CLUSTERED.includes(key) ? `${UP}_CLUSTERS` : null,
  };
}

/* ────────────────────────────────────────────────────────────────
 * 셀프테스트 — 규칙보다 먼저다
 * ──────────────────────────────────────────────────────────────── */
function selftest() {
  const C = { a: "전략", b: "토너먼트" };
  const clusterOf = (s) => ({ s1: C.a, s2: C.a, s3: C.b, s4: C.b, s5: null }[s] ?? null);
  const cases = [];
  const t = (name, cond) => cases.push({ name, ok: !!cond });

  // 1. 썸네일은 본문 이미지가 아니다
  const thumbOnly = analyze(
    [
      { slug: "s1", content: '[앵커](/blog/x "thumb:/images/shared.webp")' },
      { slug: "s2", content: '[앵커](/blog/x "thumb:/images/shared.webp")' },
    ],
    clusterOf
  );
  t("thumb: 참조는 재사용으로 세지 않는다", thumbOnly.findings.length === 0);

  // 2. readnext 카드 줄도 아니다
  const rn = analyze(
    [
      { slug: "s1", content: ":::readnext\n/blog/x | 제목 | /images/shared.webp\n:::" },
      { slug: "s2", content: ":::readnext\n/blog/x | 제목 | /images/shared.webp\n:::" },
    ],
    clusterOf
  );
  t("readnext 카드 줄은 재사용으로 세지 않는다", rn.findings.length === 0);

  // 3. 본문 마크다운 이미지(제목 붙은 형태)는 반드시 잡는다  ← 2026-08-31 실제 오탐지 원인
  const md = analyze(
    [
      { slug: "s1", content: '![설명](/images/shared.webp "타이틀")' },
      { slug: "s2", content: '![설명](/images/shared.webp "타이틀")' },
    ],
    clusterOf
  );
  t("제목 붙은 마크다운 이미지를 잡는다", md.findings.length === 1);
  t("같은 필라 공유는 🔴", md.findings[0]?.level === "RED");

  // 4. 히어로 중복은 🔴
  const hero = analyze(
    [
      { slug: "s1", image: "/images/h.webp", content: "" },
      { slug: "s3", image: "/images/h.webp", content: "" },
    ],
    clusterOf
  );
  t("히어로 중복은 클러스터가 달라도 🔴", hero.findings[0]?.level === "RED");

  // 5. 클러스터가 다르고 본문만 공유면 🟠
  const cross = analyze(
    [
      { slug: "s1", content: "![a](/images/c.webp)" },
      { slug: "s3", content: "![a](/images/c.webp)" },
    ],
    clusterOf
  );
  t("교차 클러스터 본문 공유는 🟠", cross.findings[0]?.level === "ORANGE");

  // 6. raw <img>도 본문 이미지다
  const raw = analyze(
    [
      { slug: "s1", content: '<img src="/images/r.webp" alt="x">' },
      { slug: "s2", content: '![a](/images/r.webp)' },
    ],
    clusterOf
  );
  t("raw <img>도 본문 이미지로 센다", raw.findings.length === 1);

  // 7. 1편만 쓰면 지적하지 않는다
  const solo = analyze([{ slug: "s1", content: "![a](/images/solo.webp)" }], clusterOf);
  t("단독 사용은 무지적", solo.findings.length === 0);

  // 8. 클러스터 미등재는 「미판정」으로 계수된다
  const unk = analyze(
    [
      { slug: "s5", content: "![a](/images/u.webp)" },
      { slug: "s3", content: "![a](/images/u.webp)" },
    ],
    clusterOf
  );
  t("클러스터 미등재 글은 미판정으로 계수", unk.unjudged === 1);

  // 9. 같은 글이 같은 이미지를 두 번 써도 재사용이 아니다
  const dup = analyze([{ slug: "s1", content: "![a](/images/d.webp)\n![b](/images/d.webp)" }], clusterOf);
  t("한 글 안의 중복 사용은 재사용 아님", dup.findings.length === 0);

  // 10. hero와 body가 같은 글이면 1편이다
  const hb = analyze([{ slug: "s1", image: "/images/hb.webp", content: "![a](/images/hb.webp)" }], clusterOf);
  t("같은 글의 hero=body는 1편", hb.findings.length === 0);

  // 12~16. 로케일 해석 (2026-09-03 추가)
  t("ko는 lib/posts.ts + POSTS", resolveLocale("ko")?.postsExport === "POSTS" && resolveLocale().postsExport === "POSTS");
  t("ja는 JA_POSTS + JA_CLUSTERS", resolveLocale("ja")?.postsExport === "JA_POSTS" && resolveLocale("ja")?.clustersExport === "JA_CLUSTERS");
  t("zh-hant 하이픈은 밑줄로", resolveLocale("zh-hant")?.postsExport === "ZH_HANT_POSTS" && resolveLocale("zh-hant")?.clustersExport === "ZH_HANT_CLUSTERS");
  t("클러스터 지도 없는 로케일은 clustersExport=null", resolveLocale("ms")?.clustersExport === null && resolveLocale("fr")?.clustersExport === null);
  t("없는 로케일은 null", resolveLocale("xx") === null);

  const pass = cases.filter((c) => c.ok).length;
  for (const c of cases) console.log(`${c.ok ? "  ✓" : "  ✗"} ${c.name}`);
  console.log(`\n셀프테스트 ${pass}/${cases.length}`);
  process.exit(pass === cases.length ? 0 : 1);
}

/* ────────────────────────────────────────────────────────────────
 * main
 * ──────────────────────────────────────────────────────────────── */
if (process.argv.includes("--selftest")) selftest();

const { createJiti } = await import("jiti");
const jiti = createJiti(join(root, "scripts", "check-image-reuse.mjs"));

const argLocale = (process.argv.find((a) => a.startsWith("--locale=")) || "").split("=")[1];
const runAll = process.argv.includes("--all");
const targets = runAll ? ["ko", ...LOCALES] : [argLocale || "ko"];

function loadCorpus(loc) {
  const spec = resolveLocale(loc);
  if (!spec) return { error: `알 수 없는 로케일: ${loc}` };
  let posts;
  try {
    posts = jiti(spec.module)[spec.postsExport];
  } catch (e) {
    return { error: `로드 실패(${spec.module}): ${e.message}` };
  }
  if (!Array.isArray(posts)) return { error: `${spec.postsExport} 가 배열이 아니다` };

  let clusterOf = () => null;
  if (spec.clustersExport) {
    const pc = jiti("../lib/pillar-clusters.ts");
    const map = pc[spec.clustersExport];
    const fn = pc.clusterForSlug;
    if (Array.isArray(map) && typeof fn === "function") {
      clusterOf = (slug) => {
        const c = fn(slug, map);
        return c ? c.pillarLabel : null;
      };
    }
  }
  return { spec, posts, clusterOf, hasClusters: !!spec.clustersExport };
}

const summary = [];
let exitRed = 0;

for (const loc of targets) {
  const c = loadCorpus(loc);
  if (c.error) {
    console.log(`\n⚠ ${loc}: ${c.error}`);
    continue;
  }
  const { findings, totalImages, unjudged } = analyze(c.posts, c.clusterOf);
  const red = findings.filter((f) => f.level === "RED");
  const orange = findings.filter((f) => f.level === "ORANGE");
  exitRed += red.length;
  summary.push({
    loc,
    posts: c.posts.length,
    images: totalImages,
    red: red.length,
    orange: orange.length,
    unjudged,
    hasClusters: c.hasClusters,
  });

  const head = loc === "ko" ? "KO 포스트" : `${loc} 포스트`;
  console.log(`\n🖼  본문 이미지 재사용 검사 — ${head} ${c.posts.length}편 · 참조 이미지 ${totalImages}장`);
  if (!c.hasClusters) {
    console.log(`   🔴 이 로케일은 클러스터 지도가 없다 — «같은 필라 안 공유»를 판정할 수 없다(전부 🟠 + 미판정).`);
  }
  console.log("");
  for (const f of findings) {
    console.log(`${f.level === "RED" ? "🔴" : "🟠"} ${f.img}  (${f.n}편)`);
    console.log(`    ${f.reason}`);
    for (const sl of f.slugs) console.log(`      · ${sl.slug}  [${sl.kinds}]  ${sl.cluster}`);
    console.log("");
  }
  console.log("─".repeat(60));
  console.log(`🔴 ${red.length}건 · 🟠 ${orange.length}건`);
  console.log(`커버리지: 지적 대상 글 중 클러스터 미등재 = ${unjudged}건 (「미판정」 — 0건이 검증이 아니다)`);
  console.log(`예외 등재: ${ALLOW.length}건`);
}

if (summary.length > 1) {
  console.log(`\n${"═".repeat(72)}`);
  console.log("전 로케일 요약 — 🔴는 즉시 조치, 🟠는 «교차 클러스터» 판정 대기");
  console.log(`${"═".repeat(72)}`);
  console.log("로케일    글수  이미지   🔴   🟠  미판정  클러스터지도");
  for (const r of summary) {
    console.log(
      `${r.loc.padEnd(9)}${String(r.posts).padStart(4)}${String(r.images).padStart(8)}` +
        `${String(r.red).padStart(5)}${String(r.orange).padStart(5)}${String(r.unjudged).padStart(8)}   ` +
        (r.hasClusters ? "있음" : "🔴 없음(판정 불가)")
    );
  }
  const totRed = summary.reduce((a, b) => a + b.red, 0);
  const totOr = summary.reduce((a, b) => a + b.orange, 0);
  const noMap = summary.filter((r) => !r.hasClusters).length;
  console.log(`\n합계 🔴 ${totRed}건 · 🟠 ${totOr}건 · 클러스터 지도 없는 로케일 ${noMap}개`);
  console.log("🔴 지도 없는 로케일의 «🔴 0건»은 «히어로 중복이 없다»는 뜻일 뿐이다 — 필라 판정은 미검사다.");
}

if (process.argv.includes("--strict") && exitRed) process.exit(1);
