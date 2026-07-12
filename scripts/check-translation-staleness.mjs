/**
 * 번역 스테일(뒤처짐) 추적기
 *
 * EN 마스터가 갱신됐는데 번역본이 옛 버전 그대로 방치된 경우를 감지한다.
 * 판정: 같은 슬러그에서 EN 마스터의 updated(없으면 date) > 번역본의 updated(없으면 date)
 *       → 번역본이 마스터 개정 이후로 손대지 않음 = "요검토(스테일 후보)".
 *
 * 이건 리뷰 신호이지 오류가 아니므로 **빌드를 막지 않는다**(경고성 리포트만).
 * 사용: node scripts/check-translation-staleness.mjs
 *
 * 정밀도 업그레이드(향후): 번역 저작 시 post.masterUpdated = 그 시점 EN updated 를
 * 기록하면 "updated 우연 갱신"에 흔들리지 않는 정확 비교가 됨(translation-spec 참조).
 */
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createJiti } from "jiti";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const jiti = createJiti(join(root, "scripts", "check-translation-staleness.mjs"));
const { SECONDARY_LOCALES } = jiti("../lib/intl.ts");
const { POSTS_BY_LOCALE } = jiti("../lib/intl-posts.ts");

const rev = (p) => p.masterUpdated || p.updated || p.date || "";
const enRev = (p) => p.updated || p.date || "";

const enMap = new Map((POSTS_BY_LOCALE.en || []).map((p) => [p.slug, p]));

const stale = []; // 마스터가 더 최신
const orphan = []; // 번역본인데 EN 마스터에 슬러그 없음

for (const locale of SECONDARY_LOCALES) {
  if (locale === "en") continue;
  for (const post of POSTS_BY_LOCALE[locale] || []) {
    const en = enMap.get(post.slug);
    if (!en) {
      orphan.push({ locale, slug: post.slug });
      continue;
    }
    const master = enRev(en);
    const tr = rev(post);
    if (master && tr && master > tr) {
      stale.push({ locale, slug: post.slug, master, tr });
    }
  }
}

if (orphan.length) {
  console.log(`\n※ EN 마스터에 없는 번역 슬러그 ${orphan.length}건 (구조 점검):`);
  for (const o of orphan) console.log(`   [${o.locale}] ${o.slug}`);
}

if (stale.length === 0) {
  console.log(`\n✓ 스테일 번역 없음 — 모든 번역본이 EN 마스터 개정일 이상.`);
} else {
  const byLocale = {};
  for (const s of stale) (byLocale[s.locale] ||= []).push(s);
  console.log(`\n⚠ 스테일 후보 ${stale.length}건 (EN 마스터가 번역본보다 최신 = 재번역/검토 필요)\n`);
  for (const [loc, list] of Object.entries(byLocale)) {
    console.log(`  [${loc}] ${list.length}건`);
    for (const s of list) console.log(`     ${s.slug.padEnd(36)} EN ${s.master}  >  ${loc} ${s.tr}`);
  }
  console.log(`\n→ 해당 번역본을 현행 EN 마스터로 재번역하거나 검토하세요.`);
}
