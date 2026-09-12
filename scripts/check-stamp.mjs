/**
 * `updated` 스탬프 정직성 게이트 — «그 파일이 실제로 손질된 날»과 스탬프가 맞는가 (양방향)
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a)
 *   정책은 2026-09-10에 결재됐다(`docs/settled-decisions.md` §1-C · 사장님 축어
 *   *「당연히 페이지 업데이트한 날이니까 마감일이지 — 그래야 나중에 나도 날짜를 보고
 *   업데이트 할지 말지 결정을 하지」*). 그런데 **그 정책을 보는 기계가 없었다.**
 *   재현은 셸 한 줄(파일별 `git log -1` ↔ `updated`)로 회차마다 손으로 돌렸고
 *   (`docs/harden-queue-진행.md` Q3 행), 그래서 회차 Q4-a에서 **스탬프 4건이
 *   «거짓 주장»이었던 것**을 사람이 찾았다. 손으로 찾은 검사는 기계로 내린다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = 파일의 `updated` ↔ **그 파일을 마지막으로 «실질» 변경한 커밋의 날짜** (양방향)
 *   못 본다 = ① 내용이 «옳은가» ② `lib/posts.ts`(LEGACY 다중 포스트 한 파일 — 파일 단위 스탬프가
 *            성립하지 않는다. 매 실행 «미판정»으로 계수해 출력한다)
 *            ③ 커밋 안 된 작업 트리 변경(git이 원천이다)
 *
 * 🔴 «실질»의 정의 — 첫 실행 전건 원문 판정으로 튜닝했다 (2026-09-12 · 창 안 후보 8건 전부 오탐이었다)
 *   ① **스탬프만**   : 그 커밋의 그 파일 hunk가 `updated`/`masterUpdated` 필드뿐 → 손질이 아니다.
 *                     실측 6/8이 이것이었다(`masterUpdated`만 올린 전파 커밋 = 프로토콜 §5-⑦-B가
 *                     «정상»이라고 못 박은 상태다).
 *   ② **기계적**     : 스탬프를 뺀 나머지가 **구두점·공백·마크다운 장식만** 다르다(단어 다중집합 동일).
 *   ③ **메타**       : 나머지가 전부 «필드 한 줄»이고 그중 독자가 읽는 필드
 *                     (content·tldr·title·desc·seoTitle·image·imageAlt)가 없다 → 🟠.
 *                     실측 1/8 = `lib/posts/holdem-community-event-guide.ts`의 `emoji:` 1행 삭제.
 *   ④ **실질**       : 그 밖 전부 → 🔴(EN은 🟠 — 아래 문턱).
 *
 * 🔴 EN 문턱이 다른 이유 (`settled-decisions` §1-C · 메모리 `audit-recent-window-not-history`)
 *   EN `updated`는 8로케일 `masterUpdated`의 **기준선**이다. 올리는 순간 그 8편이 전부
 *   «드리프트»로 뜬다(가짜 8건). 그래서 EN의 «과소»는 🔴이 아니라 🟠 — 사람이 판정한다.
 *   실측 1/8 = `lib/posts-en/holdem-icm.ts`(2c9012c7 · 끊긴 문장 수리 · 명제 무변경 ·
 *   «올리지 않는다» 판정이 이미 서 있다). 🪶 Q3 행은 이걸 「구두점만」이라 적었는데 실측하면
 *   **절 재작성**이다(의미는 같다). 판정은 그대로지만 근거 문구는 이 주석이 정본이다.
 *
 * 🔴 감사 창은 «최근»이다 — 과거 발굴 금지 (메모리 `audit-recent-window-not-history`)
 *   창 밖(기본 7일 전)의 과소는 **계수만** 한다. 집계 숫자엔 사장님만 아는 맥락이 섞여 있고
 *   (7·8월 스탬프 = 색인등록 작업 기간), 과거 판정표는 산출물이 아니다.
 *   🔴 창은 **상대식**이다(`--days`). 절대 날짜를 박으면 그 날짜가 오늘을 통과시킨다
 *   (메모리 `analytics-snapshot-gate`의 오탐 튜닝 1번과 같은 함정).
 *
 * 사용
 *   npm run check:stamp                    # 최근 7일 창 · 양방향
 *   npm run check:stamp -- --days=14
 *   npm run check:stamp -- --locale=en
 *   npm run check:stamp -- --all           # 창 밖 과소도 전건 출력(감사용 · 기본 아님)
 *   npm run check:stamp -- --strict        # 🔴 있으면 exit 1
 *   npm run check:stamp:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);
const val = (n, d) => {
  const hit = args.find((a) => a.startsWith(`--${n}=`));
  return hit ? hit.slice(n.length + 3) : d;
};

const DEFAULT_DAYS = 7;
/**
 * 독자가 읽는 필드 — 이것이 바뀌면 «메타»가 아니라 본문이다.
 *
 * 🔴 **코퍼스에서 세고 넣어라.** 첫 판에는 `excerpt`·`faq`·`alt`·`caption`이 들어 있었는데
 *    전수 계수하면 **넷 다 0건**이었다(정밀도 0 = 폐기 대상 · 메모리 `gate-tuning-loop-is-the-work`).
 *    반대로 **579건인 `image`·`imageAlt`가 빠져 있었다** — 히어로를 갈아 끼우고 alt를 새로 쓴 커밋이
 *    «메타»(🟠)로 강등됐다. 하필 이 레인의 Q2-b·Q2-c가 정확히 그 작업이었다(2026-09-12 렌즈 실측).
 *    실측(2026-09-12 · 포스트 589파일): content·tldr·title·desc·seoTitle 589 · image·imageAlt 579.
 *    🪶 주석에 경로 글로브를 쓰지 마라 — `posts*` 뒤의 슬래시·별표가 **블록 주석을 거기서 닫는다.**
 */
export const READER_FIELDS = ['content', 'tldr', 'title', 'desc', 'seoTitle', 'image', 'imageAlt'];
/** 스탬프 필드 — 이것만 바뀐 커밋은 «손질»이 아니다 */
const STAMP_FIELD = /^\s*(updated|masterUpdated)\s*:/;
/** TS 객체 필드 한 줄인가 — `  emoji: "🏆",` */
const FIELD_LINE = /^\s*([A-Za-z_$][\w$]*)\s*:/;

/**
 * 마크다운 장식·구두점·공백을 **전부 지운 글자 시퀀스**.
 *
 * 🔴 «단어 다중집합»으로 재면 CJK에서 오탐이 난다 (2026-09-12 첫 실행이 6건 냈다).
 *    CJK엔 띄어쓰기가 없어 한 문단이 토큰 «하나»다. `**誰のカードが**ペアに` 에서 별표만
 *    떼면 토큰 2개가 1개로 합쳐져 다중집합이 달라지고, **순수 장식 제거가 «실질»로 잡힌다**
 *    (실례 `a069430a` tldr 별표 제거 · ja·zh·zh-hant 6파일).
 *    글자 시퀀스로 재면 언어에 무관하고, 어순이 바뀐 것은 여전히 «실질»로 남는다.
 */
export function bare(s) {
  return s.replace(KEEP, '');
}
/**
 * 🔴 **무늬·부호·부등호는 지우면 안 된다** (2026-09-12 렌즈 실측).
 *    `♠♥♦♣`는 유니코드 `So`(기호)라 `\p{L}`에도 `\p{N}`에도 안 든다. 전부 지우면
 *      `A♠K♠ → A♥K♥` · `EV -0.5bb → +0.5bb` · `55% > 45% → 55% < 45%`
 *    셋 다 **«구두점만 바뀜»으로 통과한다.** 이 프로젝트가 1순위로 못 박은 §13 부류다.
 *    그래서 «지울 것»을 여집합으로 쓰되 그 넷을 **보존 문자로 승격**한다.
 */
const KEEP = /[^\p{L}\p{N}♠♥♦♣+\-<>≤≥×÷]+/gu;

/**
 * 한 커밋이 한 파일에 가한 변경의 «무게»를 판정한다.
 * @param lines 그 파일 hunk의 +/- 본문 줄 (접두 부호 포함)
 * @returns 'stamp' | 'cosmetic' | 'meta' | 'substantive'
 */
export function classify(lines) {
  const body = lines.filter((l) => /^[-+]/.test(l) && !/^([-+])\1\1/.test(l));
  const kept = body.filter((l) => !STAMP_FIELD.test(l.slice(1)));
  if (!kept.length) return 'stamp';
  const minus = kept.filter((l) => l[0] === '-').map((l) => l.slice(1)).join('\n');
  const plus = kept.filter((l) => l[0] === '+').map((l) => l.slice(1)).join('\n');
  if (bare(minus) === bare(plus)) return 'cosmetic';
  const fields = kept.map((l) => (l.slice(1).match(FIELD_LINE) || [])[1]).filter(Boolean);
  if (fields.length === kept.length && !fields.some((f) => READER_FIELDS.includes(f))) return 'meta';
  return 'substantive';
}

// ── git 수집 ──────────────────────────────────────────────
const git = (cmd) => execSync(`git ${cmd}`, { cwd: ROOT, maxBuffer: 1 << 28, encoding: 'utf8' });

/** 파일별 «마지막 커밋 날짜» — 과대(거짓 주장) 판정용. 한 번의 전체 순회로 만든다. */
function lastTouched() {
  const out = git('log --format="C|%H|%ad" --date=short --name-only -- lib/posts lib/posts-*');
  const map = new Map();
  let sha = null, date = null;
  for (const line of out.split('\n')) {
    if (line.startsWith('C|')) { const p = line.split('|'); sha = p[1]; date = p[2].trim(); continue; }
    const f = line.trim();
    if (!f || map.has(f)) continue;
    map.set(f, { sha, date });
  }
  return map;
}

/** 창 안 커밋들을 무게와 함께 편다 — 파일 → [{date, sha, weight}] (최신 우선) */
function windowCommits(sinceISO) {
  const shas = git(`log --since="${sinceISO} 00:00" --format=%H -- lib/posts lib/posts-*`)
    .split('\n').map((s) => s.trim()).filter(Boolean);
  const byFile = new Map();
  for (const sha of shas) {
    const date = git(`show -s --format=%ad --date=short ${sha}`).trim();
    const patch = git(`show --format="" --unified=0 ${sha} -- lib/posts lib/posts-*`);
    let file = null, buf = [];
    const flush = () => {
      if (!file) return;
      if (!byFile.has(file)) byFile.set(file, []);
      byFile.get(file).push({ sha, date, weight: classify(buf) });
      buf = [];
    };
    for (const line of patch.split('\n')) {
      const m = line.match(/^\+\+\+ b\/(.+)$/);
      if (m) { flush(); file = m[1]; continue; }
      if (/^diff --git /.test(line)) { flush(); file = null; continue; }
      if (file) buf.push(line);
    }
    flush();
  }
  return byFile;
}

const POST_DIRS = () =>
  fs.readdirSync(path.join(ROOT, 'lib'))
    .filter((d) => /^posts(-[\w-]+)?$/.test(d) && fs.statSync(path.join(ROOT, 'lib', d)).isDirectory());

function readStamp(rel) {
  const t = fs.readFileSync(path.join(ROOT, rel), 'utf8');
  const m = t.match(/\n\s*updated\s*:\s*["']([0-9-]+)["']/);
  return m ? m[1] : null;
}

const localeOf = (rel) => {
  const m = rel.match(/^lib\/posts(?:-([\w-]+))?\//);
  return m ? (m[1] || 'ko') : null;
};

// ── 셀프테스트 ────────────────────────────────────────────
function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);

  one('스탬프만 — masterUpdated 1행', classify([
    '-  masterUpdated: "2026-09-09",',
    '+  masterUpdated: "2026-09-12",',
  ]) === 'stamp');

  one('스탬프만 — updated + masterUpdated', classify([
    '-  updated: "2026-09-09",', '+  updated: "2026-09-12",',
    '-  masterUpdated: "2026-09-09",', '+  masterUpdated: "2026-09-12",',
  ]) === 'stamp');

  one('기계적 — 구두점만 다르다', classify([
    '-본문 한 줄 — 그리고 또 한 줄.',
    '+본문 한 줄; 그리고 또 한 줄!',
  ]) === 'cosmetic');

  one('기계적 — tldr 별표만 제거', classify([
    '-  tldr: "**요약** 한 줄",',
    '+  tldr: "요약 한 줄",',
  ]) === 'cosmetic');

  one('메타 — emoji 필드 1행 삭제', classify(['-  emoji: "🏆",']) === 'meta');

  one('메타가 아니다 — content 필드가 섞이면 실질', classify([
    '-  content: "옛 문장",', '+  content: "새로운 다른 문장",',
  ]) === 'substantive');

  one('실질 — 단어가 바뀌었다', classify([
    '-The bubble costs you your entire prize equity.',
    '+The bubble costs everything you have locked in.',
  ]) === 'substantive');

  one('스탬프 + 실질이 섞이면 실질', classify([
    '-  updated: "2026-09-09",', '+  updated: "2026-09-12",',
    '-옛 문장 하나', '+아주 다른 문장 둘',
  ]) === 'substantive');

  one('diff 머리글(+++/---)은 본문으로 안 센다', classify([
    '--- a/lib/posts-en/x.ts', '+++ b/lib/posts-en/x.ts',
    '-  masterUpdated: "2026-09-09",', '+  masterUpdated: "2026-09-12",',
  ]) === 'stamp');

  // 🔴 첫 실행 오탐 6건의 재발 방지 — CJK엔 띄어쓰기가 없어 «단어 다중집합»이 못 잡는다
  one('기계적 — CJK 문장 한가운데 별표만 제거(a069430a 유형)', classify([
    '-  tldr: "分けたのは「ボードがペアになったこと」ではなく、**誰のカードが**ペアになったか。",',
    '+  tldr: "分けたのは「ボードがペアになったこと」ではなく、誰のカードがペアになったか。",',
  ]) === 'cosmetic');

  one('실질 — CJK 어순이 바뀌면 잡는다', classify([
    '-  tldr: "高張上的優勢被低張連張牌面抹掉。",',
    '+  tldr: "低張連張牌面把高張上的優勢抹掉。",',
  ]) === 'substantive');

  one('bare()는 마크다운 장식을 무시한다',
    bare('**굵게** ==표시== `코드`') === bare('굵게 표시 코드'));

  // 🔴 2026-09-12 렌즈 실증 — §13급 변경이 «장식»으로 통과하던 자리
  one('실질 — 무늬가 바뀌면 잡는다(§13)', classify(['-보드 A♠K♠', '+보드 A♥K♥']) === 'substantive');
  one('실질 — EV 부호가 뒤집히면 잡는다', classify(['-EV -0.5bb', '+EV +0.5bb']) === 'substantive');
  one('실질 — 부등호가 뒤집히면 잡는다', classify(['-승률 55% > 45%', '+승률 55% < 45%']) === 'substantive');
  one('메타가 아니다 — 히어로 이미지·alt 교체는 본문이다', classify([
    '-  image: "/images/a.webp",', '+  image: "/images/b.webp",',
    '-  imageAlt: "옛 설명",', '+  imageAlt: "완전히 다른 새 설명",',
  ]) === 'substantive');
  one('메타 — 읽히지 않는 필드만 바뀌면 여전히 메타', classify(['-  emoji: "🏆",']) === 'meta');

  one('READER_FIELDS에 content·tldr이 있다',
    READER_FIELDS.includes('content') && READER_FIELDS.includes('tldr'));

  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

// ── 본체 ──────────────────────────────────────────────────
function main() {
  if (has('selftest')) return selftest();

  const days = Number(val('days', DEFAULT_DAYS));
  const onlyLocale = val('locale', null);
  const since = new Date(Date.now() - days * 86400000).toISOString().slice(0, 10);
  const today = new Date().toISOString().slice(0, 10);

  console.log('── `updated` 스탬프 정직성 게이트 (양방향) ──');
  console.log(`   창 = 최근 ${days}일(${since} ~ ${today})${onlyLocale ? ` · 로케일 ${onlyLocale}` : ''}`);

  const last = lastTouched();
  const win = windowCommits(since);

  const files = [];
  for (const d of POST_DIRS()) {
    for (const f of fs.readdirSync(path.join(ROOT, 'lib', d))) {
      if (!f.endsWith('.ts') || f === 'index.ts' || f.startsWith('_')) continue;
      files.push(`lib/${d}/${f}`);
    }
  }

  const over = [], underRed = [], underAmberEn = [], underAmberMeta = [];
  let outside = 0, noStamp = 0, inWindow = 0;
  const outsideRows = [];

  /**
   * 🔴 커버리지는 «내가 무엇을 봤는가»여야 한다 — 판정 루프 «안»에서 세면 안 된다.
   *    첫 판은 마지막 `else` 분기에서만 셌고, 그래서 「스탬프만 28건」이라고 찍는데
   *    실측은 198건이었다(2026-09-12 렌즈 실측 · 7배). 창 안 커밋을 통째로 먼저 센다.
   */
  const tally = { stamp: 0, cosmetic: 0, meta: 0, substantive: 0 };
  for (const [rel, commits] of win) {
    if (onlyLocale && localeOf(rel) !== onlyLocale) continue;
    for (const c of commits) tally[c.weight] = (tally[c.weight] || 0) + 1;
  }

  for (const rel of files) {
    const loc = localeOf(rel);
    if (onlyLocale && loc !== onlyLocale) continue;
    const up = readStamp(rel);
    if (!up) { noStamp++; continue; }
    const lt = last.get(rel);
    if (!lt) continue;

    // 과대 — 스탬프가 «아직 일어나지 않은 손질»을 주장한다
    if (up > lt.date) { over.push({ rel, up, last: lt.date, sha: lt.sha }); continue; }
    if (up === lt.date) continue;

    const commits = win.get(rel) || [];
    if (!commits.length) { outside++; outsideRows.push({ rel, up, last: lt.date }); continue; }
    inWindow++;

    const real = commits.find((c) => c.weight === 'substantive');
    const meta = commits.find((c) => c.weight === 'meta');
    if (real && real.date > up) {
      (loc === 'en' ? underAmberEn : underRed).push({ rel, up, ...real });
    } else if (meta && meta.date > up) {
      underAmberMeta.push({ rel, up, ...meta });
    }
  }

  const p = (rows, mark, title) => {
    console.log(`\n${mark} ${title} — ${rows.length}건`);
    for (const r of rows) {
      console.log(`   ${r.rel}`);
      console.log(`      updated ${r.up} ${r.last ? '> 마지막 커밋 ' + r.last : '< 실질 커밋 ' + r.date}  (${(r.sha || '').slice(0, 8)})`);
    }
  };

  p(over, over.length ? '🔴' : '✅', '과대 — `updated`가 마지막 커밋보다 미래다 (거짓 주장)');
  p(underRed, underRed.length ? '🔴' : '✅', '과소 — 본문을 고치고 `updated`를 안 올렸다 (창 안 · EN 제외)');
  p(underAmberEn, underAmberEn.length ? '🟠' : '✅', '과소(EN 문턱) — 사람이 판정한다 (`settled-decisions` §1-C)');
  p(underAmberMeta, underAmberMeta.length ? '🟠' : '✅', '과소(메타 필드만) — 올릴지는 판정 대상');

  console.log('\n── 커버리지 (0건이 «검증»으로 오독되지 않게) ──');
  console.log(`   판정 대상 파일 ${files.length}개 · 창 안에서 움직인 파일 ${inWindow}개`);
  console.log(`   🪶 창 안 커밋×파일 ${tally.stamp + tally.cosmetic + tally.meta + tally.substantive}건 = 스탬프만 ${tally.stamp} · 구두점·장식만 ${tally.cosmetic} · 메타 ${tally.meta} · 실질 ${tally.substantive}`);
  console.log(`   🪶 창 밖 과소 ${outside}건 — 계수만 한다(과거 발굴 금지 · 메모리 audit-recent-window-not-history)`);
  console.log(`   ⚠ 미판정: lib/posts.ts(LEGACY 다중 포스트 한 파일 — 파일 단위 스탬프가 성립하지 않는다) · updated 필드 없는 파일 ${noStamp}개`);

  if (has('all') && outsideRows.length) {
    console.log('\n   창 밖 전건(--all):');
    for (const r of outsideRows) console.log(`     ${r.rel}  updated ${r.up} < last ${r.last}`);
  }

  const red = over.length + underRed.length;
  if (has('strict') && red) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
