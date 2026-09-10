/**
 * 미러 드리프트 감지 — EN 마스터가 고쳐졌는데 번역본이 안 따라온 글을 찾는다.
 *
 * 왜 만들었나 (워크플로우 8번 완료 조건):
 *   2026-07-19 EN 마스터에서 「치명 3 + 정확성 8」을 고치고 커밋 메시지에 "(전 언어 소급 예정)"이라
 *   적어 뒀는데 그 소급이 안 됐다. 104편이 드리프트, 123편은 masterUpdated 필드가 없어 **추적조차 안 됐다.**
 *   같은 일이 다시 일어나지 않게, 사람의 기억이 아니라 스크립트가 본다.
 *   (관련 원칙: 「검수는 반복 말고 기계화」 — 읽어서 통과시킬 수 있는 검사는 반드시 샌다)
 *
 * 판정
 *   🔴 DRIFT     masterUpdated < EN updated  — EN이 고쳐졌는데 안 따라왔다 (**핵심 7로케일만**)
 *   🟠 TAIL      같은 드리프트인데 «꼬리 17로케일»에서 난 것 — 부채로 «보이되» 게이트를 막지 않는다
 *   🟠 UNTRACKED masterUpdated 필드 없음      — 최신인지 아닌지 «알 수 없다»(0건이 목표)
 *   ✅ OK        masterUpdated >= EN updated
 *   ·  NO-MASTER EN에 같은 slug가 없다(로케일 단독 글) — 판정 대상 아님
 *
 * 🔴 2등급 분리 (2026-09-10 · 핸드오프 대기열 40 · 판정안 ⓒ 「사안별 2등급」)
 *   EN-먼저 정정은 선례(`4522532a`·`77953269`)대로 **8로케일(en 포함)**까지만 갔고, 나머지 17로케일은
 *   안 따라왔다. 그 부채가 이 게이트의 🔴 120여 건이었다 — **게이트가 상시 빨간불이면 아무도 안 본다.**
 *   그렇다고 제외하면 «틀린 채로 있는 글»이 장부에서 사라진다. 그래서 «숨기지 않되 막지도 않는» 2등급으로 나눈다.
 *     ① §13급(승자 뒤집힘·규칙 오류·수치)만 25로케일 전파  ② 문안·구조·GEO 개선은 핵심 8로케일까지
 *     ③ 이 게이트는 핵심 🔴 / 꼬리 🟠 — `--strict`는 핵심만 막는다(`--strict-all`로 옛 동작)
 *   근거: 꼬리 17로케일은 GA4 실측상 구글 유입이 거의 0(색인 국면)이라 전량 재번역은 비용 대비 0에 가깝다.
 *
 * 사용
 *   npm run check:drift                  전체 리포트(핵심 🔴 · 꼬리 🟠)
 *   npm run check:drift -- --strict      **핵심** 드리프트가 있으면 exit 1 (CI·게이트용)
 *   npm run check:drift -- --strict-all  꼬리까지 포함해 exit 1 (옛 동작)
 *   npm run check:drift -- --tail        꼬리 로케일 목록을 펼쳐 본다
 *   npm run check:drift -- --locale=ja
 *   npm run audit:hard -- --drift        게이트 안에서 같이 본다
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');
const EN_DIR = path.join(LIB, 'posts-en');

const field = (src, name) => (src.match(new RegExp(`^\\s*${name}:\\s*["']([^"']+)["']`, 'm')) ?? [])[1] ?? null;

/**
 * 핵심 로케일 — EN-먼저 정정이 실제로 전파되는 범위(마스터 en + 미러 8 = 실질 9에서 en을 뺀 8).
 * 🔴 2026-09-10 사장님 결재 40 — 「id까지 · en도 넣어라」. en은 «미러»가 아니라 «출발점»이라
 *    이 목록에 넣으면 EN을 EN과 대조하게 되므로 넣지 않는다. ar이 이번에 핵심으로 올라왔다.
 * 🔴 이 목록을 늘리려면 «전파 회차가 실제로 그 로케일을 만지는가»를 먼저 확인하라.
 *    목록만 늘리면 게이트가 다시 상시 빨간불이 되고, 그때부터 아무도 안 본다.
 */
export const CORE_LOCALES = ['ar', 'de', 'es', 'id', 'ja', 'pt', 'zh', 'zh-hant'];
const isCore = (loc) => CORE_LOCALES.includes(loc);

/** EN 마스터의 slug → updated 맵 */
function enMasterDates() {
  const map = new Map();
  if (!fs.existsSync(EN_DIR)) return map;
  for (const f of fs.readdirSync(EN_DIR)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    const src = fs.readFileSync(path.join(EN_DIR, f), 'utf8');
    const up = field(src, 'updated') ?? field(src, 'date');
    if (up) map.set(f.replace(/\.ts$/, ''), up);
  }
  return map;
}

export function checkDrift({ locale = null } = {}) {
  const master = enMasterDates();
  const locales = fs
    .readdirSync(LIB)
    .filter((d) => d.startsWith('posts-') && d !== 'posts-en' && fs.statSync(path.join(LIB, d)).isDirectory())
    .map((d) => d.replace('posts-', ''))
    .filter((l) => !locale || l === locale);

  const drift = [];
  const untracked = [];
  let ok = 0;
  let noMaster = 0;

  for (const loc of locales) {
    const dir = path.join(LIB, `posts-${loc}`);
    for (const f of fs.readdirSync(dir)) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      const slug = f.replace(/\.ts$/, '');
      const enUpdated = master.get(slug);
      if (!enUpdated) { noMaster++; continue; }
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const mu = field(src, 'masterUpdated');
      if (!mu) { untracked.push({ loc, slug, enUpdated }); continue; }
      if (mu < enUpdated) drift.push({ loc, slug, mu, enUpdated, core: isCore(loc) });
      else ok++;
    }
  }
  return {
    drift: drift.filter((d) => d.core),
    tailDrift: drift.filter((d) => !d.core),
    untracked, ok, noMaster, locales: locales.length, masterCount: master.size,
  };
}

/** 게이트(audit:hard)에서 부를 요약 출력 */
export function printDriftSummary(res) {
  console.log('\n\n══════ 미러 드리프트 (masterUpdated vs EN updated) ══════');
  console.log(
    `대상 ${res.locales}개 로케일 · EN 마스터 ${res.masterCount}편 · ` +
      `✅ ${res.ok} · 🔴 핵심 드리프트 ${res.drift.length} · 🟠 꼬리 드리프트 ${(res.tailDrift ?? []).length} · 🟠 추적불가 ${res.untracked.length} · EN에 없음 ${res.noMaster}`
  );
  console.log(`   핵심 = ${CORE_LOCALES.join(' ')} (EN-먼저 전파 범위) · 꼬리 = 그 밖 17로케일(§13급만 전파 · 대기열 40 판정 ⓒ)`);

  if (res.drift.length) {
    const byLoc = new Map();
    for (const d of res.drift) byLoc.set(d.loc, [...(byLoc.get(d.loc) ?? []), d]);
    console.log('\n🔴 EN이 고쳐졌는데 안 따라온 글:');
    for (const [loc, items] of [...byLoc].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`  ${loc} (${items.length}편)`);
      for (const d of items.slice(0, 8)) console.log(`     · ${d.slug}  ${d.mu} < EN ${d.enUpdated}`);
      if (items.length > 8) console.log(`     · … 외 ${items.length - 8}편`);
    }
  }

  if (res.untracked.length) {
    const byLoc = new Map();
    for (const u of res.untracked) byLoc.set(u.loc, (byLoc.get(u.loc) ?? 0) + 1);
    console.log(
      '\n🟠 masterUpdated 없음 — «최신인지 아닌지 알 수 없다»(드리프트 0건이어도 이 숫자가 크면 의미 없다):'
    );
    console.log(
      '   ' +
        [...byLoc]
          .sort((a, b) => b[1] - a[1])
          .map(([l, n]) => `${l} ${n}`)
          .join(' · ')
    );
  }

  const tail = res.tailDrift ?? [];
  if (tail.length) {
    const byLoc = new Map();
    for (const d of tail) byLoc.set(d.loc, (byLoc.get(d.loc) ?? 0) + 1);
    console.log('\n🟠 꼬리 17로케일 드리프트 — 부채로 «보이되» 게이트를 막지 않는다(§13급 정정만 여기까지 전파):');
    console.log('   ' + [...byLoc].sort((a, b) => b[1] - a[1]).map(([l, n]) => `${l} ${n}`).join(' · '));
    if (process.argv.includes('--tail')) {
      for (const d of tail) console.log(`     · ${d.loc}/${d.slug}  ${d.mu} < EN ${d.enUpdated}`);
    } else {
      console.log('   (`-- --tail`로 편별 목록)');
    }
  }

  if (!res.drift.length && !res.untracked.length) {
    console.log(`\n✅ 핵심 ${CORE_LOCALES.length}로케일 드리프트 0 · 추적불가 0 — 미러가 EN 마스터를 따라잡았다.`);
    if (tail.length) console.log(`🪶 단 «완전»은 아니다 — 꼬리 로케일에 ${tail.length}편이 남아 있다(위 🟠).`);
  }
}

// ── CLI ── (윈도우에서 file:// 문자열을 손으로 만들면 슬래시 수가 어긋난다 → pathToFileURL 사용)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const argv = process.argv.slice(2);
  const loc = (argv.find((a) => a.startsWith('--locale=')) ?? '').split('=')[1] || null;
  const res = checkDrift({ locale: loc });
  printDriftSummary(res);
  const blocking = argv.includes('--strict-all') ? res.drift.length + (res.tailDrift ?? []).length : res.drift.length;
  if ((argv.includes('--strict') || argv.includes('--strict-all')) && blocking) {
    console.log(`\n🔴 ${argv.includes('--strict-all') ? '--strict-all' : '--strict'}: 드리프트 ${blocking}편 → exit 1`);
    process.exit(1);
  }
}
