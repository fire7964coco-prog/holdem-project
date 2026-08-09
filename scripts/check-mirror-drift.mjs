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
 *   🔴 DRIFT     masterUpdated < EN updated  — EN이 고쳐졌는데 안 따라왔다
 *   🟠 UNTRACKED masterUpdated 필드 없음      — 최신인지 아닌지 «알 수 없다»(0건이 목표)
 *   ✅ OK        masterUpdated >= EN updated
 *   ·  NO-MASTER EN에 같은 slug가 없다(로케일 단독 글) — 판정 대상 아님
 *
 * 사용
 *   npm run check:drift              전체 리포트
 *   npm run check:drift -- --strict  드리프트가 있으면 exit 1 (CI·게이트용)
 *   npm run check:drift -- --locale=ja
 *   npm run audit:hard -- --drift    게이트 안에서 같이 본다
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');
const EN_DIR = path.join(LIB, 'posts-en');

const field = (src, name) => (src.match(new RegExp(`^\\s*${name}:\\s*["']([^"']+)["']`, 'm')) ?? [])[1] ?? null;

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
      if (mu < enUpdated) drift.push({ loc, slug, mu, enUpdated });
      else ok++;
    }
  }
  return { drift, untracked, ok, noMaster, locales: locales.length, masterCount: master.size };
}

/** 게이트(audit:hard)에서 부를 요약 출력 */
export function printDriftSummary(res) {
  console.log('\n\n══════ 미러 드리프트 (masterUpdated vs EN updated) ══════');
  console.log(
    `대상 ${res.locales}개 로케일 · EN 마스터 ${res.masterCount}편 · ` +
      `✅ ${res.ok} · 🔴 드리프트 ${res.drift.length} · 🟠 추적불가 ${res.untracked.length} · EN에 없음 ${res.noMaster}`
  );

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

  if (!res.drift.length && !res.untracked.length) console.log('\n✅ 드리프트 0 · 추적불가 0 — 미러가 EN 마스터를 따라잡았다.');
}

// ── CLI ── (윈도우에서 file:// 문자열을 손으로 만들면 슬래시 수가 어긋난다 → pathToFileURL 사용)
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const argv = process.argv.slice(2);
  const loc = (argv.find((a) => a.startsWith('--locale=')) ?? '').split('=')[1] || null;
  const res = checkDrift({ locale: loc });
  printDriftSummary(res);
  if (argv.includes('--strict') && res.drift.length) {
    console.log(`\n🔴 --strict: 드리프트 ${res.drift.length}편 → exit 1`);
    process.exit(1);
  }
}
