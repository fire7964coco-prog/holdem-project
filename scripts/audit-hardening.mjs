#!/usr/bin/env node
/**
 * scripts/audit-hardening.mjs — 경화(§14-A) 기계 게이트 "Layer 1"
 *
 * 왜 있는가:
 *   체크리스트를 문서에만 적어두면 세션이 길어질수록 안 읽힌다(실제로 20편째에서 샜다).
 *   그래서 "읽어서 지키는 규칙"을 "안 읽어도 강제되는 코드"로 내린 것이 이 스크립트다.
 *
 * 무엇을 잡는가 (기계 판정 가능한 것만):
 *   F1  바로 답 라벨 통일          §14-A 1
 *   F2  질문형 H2 70% 이상          §14-A 2
 *   F3  FAQ 스키마 Q/A 짝 + 빈 줄   §14-A 5
 *   F4  seoTitle/desc/title 길이    §8 §17
 *   F5  내부링크 trailing slash·404 §14 2·3
 *   F6  content 백틱                §12-A
 *   F7  emoji/제목 이모지           §14-A 8
 *   F8  updated 유효성              §14 4
 *   F9  §17 금지어(총정리 등)
 *   F10 구조 배치 순서              §14-A 6
 *
 * 못 잡는 것(사람이 봐야 하는 것):
 *   D유형 전략적 유해 조언 · F유형 사실오류 → 렌즈(Layer 2)와 1차 출처의 몫.
 *
 * 사용법:
 *   node scripts/audit-hardening.mjs                 # 경화 완료 25편
 *   node scripts/audit-hardening.mjs --all           # KO 전체
 *   node scripts/audit-hardening.mjs --cluster=전략
 *   node scripts/audit-hardening.mjs --slug=holdem-rules
 *   node scripts/audit-hardening.mjs --json          # 기계 판독용
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const ROOT = process.cwd();
const TMP = path.join(ROOT, 'node_modules', '.cache', 'audit-hardening');

/* ────────────────────────────────────────────────────────────────
   0. 경화 완료 클러스터 정의 (직전 세션 커밋 기준)
   ──────────────────────────────────────────────────────────────── */
export const CLUSTERS = {
  '규칙': [
    'holdem-rules', 'texas-holdem-rules-for-beginners', 'holdem-game-order',
    'holdem-check-meaning', 'holdem-blind-meaning', 'holdem-small-blind-role',
    'holdem-beginner-mistakes-10',
  ],
  '족보': [
    'holdem-hand-rankings', 'holdem-tiebreak-rules', 'holdem-hand-rankings-confusing',
    'holdem-split-pot-rules', 'holdem-flush-vs-straight', 'holdem-vs-7poker-hand-rankings',
  ],
  '포지션': [
    'position-is-everything-in-holdem', 'holdem-button-position', 'holdem-blind-steal',
  ],
  '전략': [
    'holdem-strategy', 'holdem-range-meaning', 'holdem-3bet-strategy', 'holdem-check-raise',
    'holdem-cbet-strategy', 'bluffing-strategy-when-and-how', 'holdem-value-bet-sizing',
    'holdem-overbet-strategy', 'holdem-bankroll-management',
  ],
  // 멤버는 필라 holdem-pub-guide의 :::pillarhub 선언 그대로(디렉토리 /pub은 포스트가 아니라 제외).
  '홀덤펍': [
    'holdem-pub-guide', 'holdem-pub-first-visit-guide', 'holdem-pub-legal', 'holdem-pub-promotion',
  ],
  // 멤버는 필라 holdem-probability의 :::pillarhub 선언 그대로 (lib/posts.ts:6892)
  '확률': [
    'holdem-probability', 'holdem-outs-calculation', 'holdem-pot-odds-calculation',
    'holdem-implied-odds', 'holdem-odds-calculator',
  ],
  // 멤버는 holdem-tournament-how-to-enter의 :::pillarhub 선언 그대로 + 그 글 자신.
  // ⚠ §8의 필라 슬러그 'holdem-tournament'는 **포스트로 존재하지 않는다** — /tournaments가
  //   /pub처럼 라우트 허브다.
  //   ★2026-08-02 정정: 그렇다고 필라가 없는 게 아니다 — `lib/pillar-clusters.ts` 는 이 클러스터의
  //   pillarSlug 를 'holdem-tournament-how-to-enter' 로 지정한다. 배열 첫 원소를 그 필라로 맞춰 둔다.
  //   (앞선 주석이 "필라 포스트가 없다"고 단정했는데 소스를 안 열어보고 쓴 것이었다)
  // 왜 늦게 추가됐나 (2026-08-02): 핸드오프가 "icm-poker-meaning은 CLUSTERS에 없어 형제 대조를
  //   못 받는다(토너먼트 클러스터 미정의)"를 두 번 남겼는데, 정작 정의가 안 돼 있었다.
  //   바이인·상금·일정 수치가 글마다 흩어져 있어 교차 대조 값어치가 가장 큰 묶음이다.
  // 개별 대회 후기(apt-*·appt-*·wsop-*·holdem-masters-*)는 날짜·바이인이 회차마다 달라
  //   전략 글과 섞으면 오탐이 난다. 필요하면 '대회이벤트'로 따로 묶을 것.
  '토너먼트': [
    'holdem-tournament-how-to-enter', 'holdem-tournament-vs-cash-game',
    'holdem-tournament-buy-in-cost', 'holdem-tournament-schedule-check',
    'holdem-bubble-strategy', 'icm-poker-meaning', 'holdem-tournament-tax-guide',
  ],
};

/**
 * slug → 소속 클러스터. `--slug` 모드에서 형제 글을 끌어오는 데 쓴다.
 *
 * ★왜 필요한가 (2026-08-01): 경화는 언제나 `--slug=<slug>` 1편 단위로 돌린다. 그런데 그 모드는
 * 대상 1편만 로드해 클러스터 대조가 **표 0개·0쌍**이 됐고, 출력은 "헤더가 서로 달라 매칭 실패"라는
 * 틀린 원인까지 붙였다. 전체 실행에선 25쌍이 멀쩡히 돌고 있었다 — 즉 검사가 죽은 게 아니라
 * **정작 쓰는 순간에만 죽어 있었고, 그 사실이 오진으로 기록됐다.**
 * 형제 대조는 글 1편 검수로는 원리상 못 잡는 자리이므로, 1편 모드일수록 반드시 살아 있어야 한다.
 */
export const clusterOf = (slug) =>
  Object.keys(CLUSTERS).find((c) => CLUSTERS[c].includes(slug)) ?? null;

/* ────────────────────────────────────────────────────────────────
   1. 로더 — lib/**.ts 를 임시 .mjs 로 트랜스파일해 실제 객체로 읽는다.
      (정규식 파싱은 템플릿 리터럴 경계에서 틀린다. 실제 값으로 판정한다.)
   ──────────────────────────────────────────────────────────────── */
function rewriteRelativeImports(code) {
  return code.replace(
    /(\bfrom\s*["']|\bimport\s*\(\s*["'])(\.[^"']*?)(["'])/g,
    (m, head, spec, tail) => (spec.endsWith('.mjs') ? m : head + spec + '.mjs' + tail),
  );
}

function transpileTo(srcAbs, outAbs) {
  const src = fs.readFileSync(srcAbs, 'utf8');
  const { outputText } = ts.transpileModule(src, {
    fileName: srcAbs,
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  });
  fs.mkdirSync(path.dirname(outAbs), { recursive: true });
  fs.writeFileSync(outAbs, rewriteRelativeImports(outputText), 'utf8');
}

async function loadPosts() {
  // 캐시 디렉토리는 지우지 않고 전량 덮어쓴다.
  // (이 환경에선 fs.rmSync(recursive)가 프로세스를 죽인다 — 삭제가 차단돼 있음)
  transpileTo(path.join(ROOT, 'lib', 'posts.ts'), path.join(TMP, 'posts.mjs'));
  const dir = path.join(ROOT, 'lib', 'posts');
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    transpileTo(path.join(dir, f), path.join(TMP, 'posts', f.replace(/\.ts$/, '.mjs')));
  }
  const mod = await import(pathToFileURL(path.join(TMP, 'posts.mjs')).href);
  return mod.POSTS;
}

/**
 * 로케일판 포스트 로드 (--locale=en 등).
 * ⚠ 여기서 돌리는 검사는 **언어 불변 항목만**이다 — §13 핸드·산수·카드 중복·표 교차대조.
 *    메타 길이·"바로 답" 라벨·질문형 종결어미·§17 금지어는 한국어 기준이라 로케일에 적용하지 않는다.
 *    (EN은 seoTitle ~55자·desc ≤160자로 기준 자체가 다르다.)
 */
async function loadLocalePosts(locale) {
  const dir = path.join(ROOT, 'lib', `posts-${locale}`);
  if (!fs.existsSync(dir)) throw new Error(`로케일 폴더 없음: lib/posts-${locale}`);
  const outDir = path.join(TMP, `posts-${locale}`);
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    transpileTo(path.join(dir, f), path.join(outDir, f.replace(/\.ts$/, '.mjs')));
  }
  const mod = await import(pathToFileURL(path.join(outDir, 'index.mjs')).href);
  const arr = Object.values(mod).find((v) => Array.isArray(v) && v.length && v[0]?.slug);
  if (!arr) throw new Error(`lib/posts-${locale}/index.ts 에서 포스트 배열을 못 찾음`);
  return arr;
}

/** 사이트가 실제로 쓰는 평가기를 그대로 재사용한다(감사기 독자 구현 = 원본과 갈라짐). */
async function loadPokerEval() {
  transpileTo(path.join(ROOT, 'lib', 'poker-eval.ts'), path.join(TMP, 'poker-eval.mjs'));
  return await import(pathToFileURL(path.join(TMP, 'poker-eval.mjs')).href);
}

/** slug → 소스 파일 경로 (보고용) */
function buildSourceMap() {
  const map = new Map();
  const legacy = fs.readFileSync(path.join(ROOT, 'lib', 'posts.ts'), 'utf8');
  for (const m of legacy.matchAll(/slug:\s*["']([^"']+)["']/g)) map.set(m[1], 'lib/posts.ts');
  const dir = path.join(ROOT, 'lib', 'posts');
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    const txt = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = /slug:\s*["']([^"']+)["']/.exec(txt);
    if (m) map.set(m[1], `lib/posts/${f}`);
  }
  return map;
}

/* ────────────────────────────────────────────────────────────────
   2. 파싱 헬퍼
   ──────────────────────────────────────────────────────────────── */
const chars = (s) => Array.from(s ?? '').length;
// 화살표(→ ← ↔, U+2190~21FF)와 각종 구두점 기호는 이모지가 아니다 — 오탐 방지로 제외.
const EMOJI_RE = /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/u;

/** H2 목록 — '## ' 로 시작하는 줄(### 제외) */
function getH2s(content) {
  return content.split('\n')
    .map((l, i) => ({ line: i + 1, raw: l }))
    .filter(({ raw }) => /^##\s+\S/.test(raw) && !/^###/.test(raw))
    .map(({ line, raw }) => ({ line, text: raw.replace(/^##\s+/, '').trim() }));
}

/**
 * 구조 섹션 H2 — FAQ·출처·마무리 등은 질문형일 수 없다.
 * 질문형 70% 기준의 분모에서 빼지 않으면 잘 쓴 글이 무더기로 오탐된다.
 */
// "핵심 1줄 요약"(하단 요약)과 pillarhub 로드맵 섹션도 구조다 — 질문형으로 바꾸면 오히려 어색해진다.
const STRUCTURAL_H2 = /(FAQ|자주 묻는 질문|출처|참고 자료|참고자료|마무리|핵심 요약|핵심 정리|이 글 핵심|먼저 보세요|한눈에 보기|줄 요약|줄 정리|로드맵)/;
function isStructuralH2(t) {
  const s = t.replace(/^[0-9]+[.)]\s*/, '').replace(/[*_~]/g, '').trim();
  return STRUCTURAL_H2.test(s) || /^정리\b|^정리\s*—/.test(s);
}

/** 질문형인가 — 물음표(위치 무관) 또는 한국어 의문 종결어미 */
function isQuestionH2(t) {
  const s = t.replace(/[*_~`]/g, '').trim();
  if (s.includes('?') || s.includes('？')) return true;   // "왜 X한가? — 근거" 형태 포함
  return /(까|나요|는가|은가|ㄹ까|을까|할까|인가|뭔가|어떻게|왜)\s*$/.test(s);
}

/**
 * FAQ 블록 — 정본 형식은 `**Q. 질문**` + 빈 줄 + `A. 답변`
 * (빈 줄이 없으면 리치결과가 안 붙는다 → 구형 형식)
 */
function getFaq(content) {
  const lines = content.split('\n');
  const items = [];
  for (let i = 0; i < lines.length; i++) {
    if (!/^\*\*Q[.．]/.test(lines[i].trim())) continue;
    const next = (lines[i + 1] ?? '').trim();
    const after = (lines[i + 2] ?? '').trim();
    let form = 'broken';
    if (next === '' && /^A[.．]/.test(after)) form = 'ok';
    else if (/^A[.．]/.test(next)) form = 'legacy';      // 빈 줄 없음 = 구형
    items.push({ line: i + 1, q: lines[i].trim(), form });
  }
  return items;
}

/** 본문 내부링크 (/blog/xxx) */
function getInternalLinks(content) {
  const out = [];
  for (const m of content.matchAll(/\]\((\/blog\/[a-z0-9-]+)(\/?)\)/g)) {
    out.push({ slug: m[1].replace('/blog/', ''), trailing: m[2] === '/' });
  }
  return out;
}

/* ────────────────────────────────────────────────────────────────
   3. 검사기
   ──────────────────────────────────────────────────────────────── */
const BANNED_TITLE_WORDS = ['총정리', '완벽 정리', '뜻 정리', '한눈에 정리', '완전 정리'];
const LEGACY_LABELS = ['한 줄 답', '한 줄 정리', '한 줄 요약', '한줄 답', '한줄정리', '한줄요약'];

// 기준값 (CLAUDE.md §8 §14-A) — 초과분은 경고, 명백한 위반은 오류
const LIMIT = {
  seoTitle: 32, seoTitleHard: 36,
  desc: 95, descHard: 105,
  title: 40,
  questionH2Ratio: 0.7,
};

/**
 * 규칙 예외 — 반드시 이유를 적는다. 이유 없이 넘어간 예외는 예외가 아니라 은폐다.
 * 여기 적힌 항목은 INFO로 내려가되 요약에 항상 다시 나열된다(잊히지 않게).
 */
const EXCEPTIONS = {
  'holdem-beginner-mistakes-10': {
    F2: '리스티클(실수 ①~⑩) — H2가 목록 항목이라 질문형으로 바꾸면 스캔성이 나빠진다. 2026-07-31 판단.',
  },
  'holdem-pub-promotion': {
    F2: '매장 운영자용 영업 랜딩(검색 대상 아님 — 90일 GSC 노출 0). 독자가 검색자가 아니라 제안을 받는 사장님이라, '
      + '질문형 H2로 바꾸면 제안서가 아니라 FAQ처럼 읽혀 전환이 나빠진다. 2026-08-01 판단.',
  },
  'holdem-tournament-schedule-check': {
    F2: 'noindex 글(카니발 몰아주기 — 「일정」 쿼리는 /tournaments가 수령). 검색 유입 대상이 아니라 '
      + '내부링크 경로로만 남긴 글이라, 질문형 H2의 목적(검색자 문구 매칭)이 성립하지 않는다. '
      + '내부 독자에게는 현재의 서술형 소제목이 훑기 좋다. 2026-08-02 판단.',
  },
};

function auditPost(post, allSlugs) {
  const f = [];
  const ex = EXCEPTIONS[post.slug] ?? {};
  const add = (sev, code, msg, detail) => f.push(
    ex[code] ? { sev: 'INFO', code, msg: `${msg} — [예외 승인] ${ex[code]}`, detail } : { sev, code, msg, detail },
  );
  const c = post.content ?? '';

  /* F1 — 바로 답 라벨 */
  const hasNew = /^>\s*\*\*바로 답\*\*/m.test(c);
  const legacyHit = LEGACY_LABELS.filter((l) => c.includes(`**${l}**`));
  if (!hasNew && legacyHit.length) add('ERR', 'F1', `구형 라벨 "${legacyHit[0]}" — "바로 답"으로 미전환`);
  else if (!hasNew) add('WARN', 'F1', '"> **바로 답**" 블록 없음');
  else if (legacyHit.length) add('ERR', 'F1', `"바로 답"과 구형 라벨 "${legacyHit[0]}" 혼재`);

  /* F2 — 질문형 H2 비율 */
  const h2all = getH2s(c);
  const h2 = h2all.filter((h) => !isStructuralH2(h.text));   // 분모 = 콘텐츠 H2만
  if (h2all.length === 0) add('WARN', 'F2', 'H2 없음');
  else if (h2.length) {
    const q = h2.filter((h) => isQuestionH2(h.text));
    const ratio = q.length / h2.length;
    if (ratio < LIMIT.questionH2Ratio) {
      add('ERR', 'F2', `질문형 H2 ${(ratio * 100).toFixed(0)}% (${q.length}/${h2.length} 콘텐츠 H2) — 기준 70% 미달`,
        h2.filter((h) => !isQuestionH2(h.text)).map((h) => `L${h.line} ${h.text}`));
    }
  }

  /* F3 — FAQ 스키마 */
  const faq = getFaq(c);
  if (faq.length === 0) {
    // ★"FAQ가 없다"와 "FAQ는 있는데 구형 형식이라 스키마가 0이다"는 처방이 정반대다.
    //   후자는 새로 쓸 게 아니라 형식만 바꾸면 즉시 살아난다.
    //   2026-08-02 하루에 세 번 나왔다(홀덤펍 15문항·대회참가 6·토너먼트vs캐시 6).
    //   그때마다 "FAQ 문항 0개"만 보고 사람이 소스를 열어보고서야 알아챘다 — 그 왕복을 없앤다.
    //   posting.mdc가 금지한 구형: `### Q1. 질문` (스타일드 카드 미렌더 + FAQPage 스키마 누락)
    const legacyQ = [...c.matchAll(/^#{3,4}\s*Q\s*\d*\s*[.·:]?\s*(.+)$/gm)];
    if (legacyQ.length) {
      add('ERR', 'F3',
        `FAQ 스키마 0개 — 그런데 본문에 구형 "### Q" 형식 ${legacyQ.length}문항이 있다. 새로 쓰지 말고 형식만 바꿔라`,
        [...legacyQ.slice(0, 3).map((m) => m[0].trim().slice(0, 50)),
          '변환: `### Qn. 질문` → `**Q. 질문**` + 빈 줄 + `A. 답변` (posting.mdc §FAQ 형식)']);
    } else add('ERR', 'F3', 'FAQ 문항 0개 — 리치결과 없음');
  }
  else {
    const bad = faq.filter((x) => x.form !== 'ok');
    if (bad.length) add('ERR', 'F3', `FAQ ${faq.length}문항 중 ${bad.length}개 형식 깨짐(A. 누락 또는 빈 줄 없음)`,
      bad.map((x) => `L${x.line} [${x.form}] ${x.q.slice(0, 40)}`));
  }

  /* F4 — 메타 길이 */
  const st = post.seoTitle ?? '';
  if (st) {
    const n = chars(st);
    if (n > LIMIT.seoTitleHard) add('ERR', 'F4', `seoTitle ${n}자 (기준 ~${LIMIT.seoTitle}자)`, [st]);
    else if (n > LIMIT.seoTitle) add('WARN', 'F4', `seoTitle ${n}자 (기준 ~${LIMIT.seoTitle}자)`, [st]);
  } else add('WARN', 'F4', 'seoTitle 없음');
  const dn = chars(post.desc ?? '');
  if (dn > LIMIT.descHard) add('ERR', 'F4', `desc ${dn}자 (기준 ~${LIMIT.desc}자)`, [post.desc]);
  else if (dn > LIMIT.desc) add('WARN', 'F4', `desc ${dn}자 (기준 ~${LIMIT.desc}자)`, [post.desc]);
  if (chars(post.title ?? '') > LIMIT.title) add('WARN', 'F4', `title ${chars(post.title)}자 (기준 ~${LIMIT.title}자)`, [post.title]);

  /* F5 — 내부링크 */
  const links = getInternalLinks(c);
  const trailing = links.filter((l) => l.trailing);
  if (trailing.length) add('ERR', 'F5', `trailing slash ${trailing.length}건 (301 발생)`,
    [...new Set(trailing.map((l) => `/blog/${l.slug}/`))]);
  const broken = links.filter((l) => !allSlugs.has(l.slug));
  if (broken.length) add('ERR', 'F5', `깨진 내부링크 ${broken.length}건 (404)`,
    [...new Set(broken.map((l) => `/blog/${l.slug}`))]);

  /* F6 — 백틱 (§12-A) */
  if (c.includes('`')) {
    const n = (c.match(/`/g) || []).length;
    add('ERR', 'F6', `content에 백틱 ${n}개 — 빌드 파손 위험(§12-A)`);
  }

  /* F7 — 이모지 */
  if (post.emoji && post.emoji !== post.emoji.trim()) add('ERR', 'F7', `emoji 필드에 공백: "${post.emoji}"`);
  if (st && EMOJI_RE.test(st)) add('ERR', 'F7', 'seoTitle에 이모지 포함', [st]);
  if (post.title && EMOJI_RE.test(post.title)) add('WARN', 'F7', 'title에 이모지 포함', [post.title]);

  /* F8 — updated */
  if (!post.updated) add('ERR', 'F8', 'updated 없음 (sitemap lastmod 미반영)');
  else if (!/^\d{4}-\d{2}-\d{2}$/.test(post.updated)) add('ERR', 'F8', `updated 형식 오류: ${post.updated}`);
  else if (post.date && post.updated < post.date) add('ERR', 'F8', `updated(${post.updated}) < date(${post.date})`);

  /* F9 — §17 금지어 */
  for (const w of BANNED_TITLE_WORDS) {
    if (st.includes(w)) add('ERR', 'F9', `seoTitle에 §17 금지어 "${w}"`, [st]);
    else if ((post.title ?? '').includes(w)) add('WARN', 'F9', `title에 §17 금지어 "${w}"`, [post.title]);
  }

  /* F10 — 구조 배치 순서 (§14-A 6) */
  const iAnswer = c.search(/^>\s*\*\*바로 답\*\*/m);
  const iReadnext = c.indexOf(':::readnext');
  const iFaq = faq.length ? c.indexOf(faq[0].q) : -1;
  // 첫 H2는 훅 제목인 경우가 많다 → 3번째 H2보다 뒤에 있을 때만 배치 이상으로 본다.
  const lines = c.split('\n');
  const h2Offsets = h2all.map((h) => lines.slice(0, h.line - 1).join('\n').length);
  if (iAnswer >= 0 && h2Offsets.length >= 3 && iAnswer > h2Offsets[2]) {
    add('WARN', 'F10', '"바로 답"이 본문 한참 뒤에 있음(3번째 H2 이후)');
  }
  // §14-A 6의 순서는 … → :::stripe → 바로 답 → H2들 이다. stripe가 뒤에 오면 독자가
  // 한 줄 요약을 보기 전에 직답부터 만나 두 블록이 같은 말을 두 번 하는 것처럼 읽힌다.
  // 2026-08-02 실측: 14편 중 6편이 역순이었고, 라벨 존재만 보던 F1은 이걸 못 잡았다.
  const iStripe = c.indexOf(':::stripe');
  if (iStripe >= 0 && iAnswer >= 0 && iStripe > iAnswer) {
    add('WARN', 'F10', ':::stripe 가 "바로 답"보다 뒤에 있음 (§14-A 6 순서: stripe → 바로 답)');
  }
  if (iReadnext >= 0 && iFaq >= 0 && iReadnext > iFaq) add('WARN', 'F10', ':::readnext 가 FAQ보다 뒤에 있음');
  if (iReadnext < 0) add('INFO', 'F10', ':::readnext 카드 없음');
  if (!post.image) add('WARN', 'F10', 'image 없음');
  if (post.image && !post.imageAlt) add('ERR', 'F10', 'imageAlt 없음');

  return f;
}

/* ────────────────────────────────────────────────────────────────
   3-B. §13 핸드 예시 자동 판정
        "읽어서 통과시킬 수 있는 검사는 그럴듯하고 틀린 글이 반드시 통과한다."
        → 7장을 실제로 조합해 베스트5를 계산하고, 글의 주장과 대조한다.
   ──────────────────────────────────────────────────────────────── */
const CARD_RE = /(10|[2-9AKQJ])\s?([♠♥♦♣])|([♠♥♦♣])\s?(10|[2-9AKQJ])/g;
const BOARD_KW = /(보드|플랍|플롭|턴|리버|board|flop|turn|river)/i;
// '|'는 넣지 않는다 — 표의 두 열(A의 베스트5 | B의 베스트5)이 한 조합으로 병합돼 오탐이 난다.
const GAP_OK = /^[\s,·/、*_~()\-—–]*$/;
const SPLIT_KW = /(스플릿|찹\b|split|무승부|동점|반씩|나눠 ?갖|나눠 ?가)/i;
// 2장 런이 "플레이어의 홀카드"임을 확정해 주는 라벨. 이게 없으면 평가하지 않는다
// (레인지 나열·베스트5 재기술·대안 핸드를 플레이어로 오인하면 통째로 오탐이 된다).
// 키워드와 콜론 사이에 마크다운이 낀 형태도 받는다: "**내 홀카드**: K♠ Q♦"
// 영어 라벨은 2026-07-31 EN 전수조사에서 추가. EN 글은 "**My hand:** ==A♥K♣==" 또는
// "I raise ==A♣K♦==" 형태가 압도적이라 이게 없으면 홀카드를 하나도 못 잡는다.
const PLAYER_RE = new RegExp(
  '(' + [
    '내\\s*패', '내\\s*핸드', '내\\s*카드', '나', '상대\\S{0,2}', '플레이어\\s*\\S{0,3}', '히어로', '빌런', '당신', '홀\\s*카드',
    'hero', 'villain',
    'my\\s+(hand|cards|hole\\s*cards)', "I\\s+(raise|have|hold|open|call|'m\\s+holding)", '(he|she|they|opponent)\\s+(has|holds|shows)',
    // de — "Du hältst J♥ 10♥", "Deine Karten", "Spieler A (du)"
    'du\\s+(hältst|haltst|hast)', 'deine?\\s+(karten|hand|blatt)', 'gegner',
    // 각 언어의 "플레이어" (표·대결 표기에서 흔하다)
    '(spieler|jugador|giocatore|pemain|player)\\s*\\S{0,3}',
    // ja·zh
    '(自分|あなた)の?(手札|ハンド|カード)', '(我|你|對手|对手)的?(手牌|牌)',
  ].join('|') + ')\\s*[*_]*\\s*[::]?\\s*[*_=\\s(]*(?:to\\s+\\S+\\s+with\\s+)?$', 'i');
const PLAYER_AB_RE = /(^|\n|\|)\s*\**\s*[A-Z]\s*[::]\s*\**\s*$/;
const ROW_LABEL_RE = /^[|\s*]*(홀카드|핸드|패|hand)/i;

/** 족보 표기 → 정본 이름. 구체적인 것부터 검사해야 "플러시"가 "스트레이트 플러시"를 잡아먹지 않는다. */
/*
 * 족보 별칭 — 위에서부터 매칭하므로 **긴 이름이 먼저** 와야 한다
 * ("straight flush"가 "flush"에 먼저 걸리면 안 된다).
 * 영어 별칭은 2026-07-31 EN 전수조사에서 추가했다. 그전까지 EN·다국어판은
 * 족보명을 하나도 인식하지 못해 H4·H5·H6이 원리상 작동하지 않았다(커버리지 쇼다운 1개).
 * ⚠ 영어는 일반 단어와 겹치므로 가드가 필요하다:
 *   - "set"은 settings·set of 등과 겹쳐 통째로 뺐다(trips·three of a kind로 충분)
 *   - 맨 "pair"는 KO와 같은 이유로 뺀다(two pair·구성 설명 오독)
 */
const HAND_ALIASES = [
  ['로열 플러시', /로열\s*(스트레이트\s*)?플러시|\broyal\s+flush\b|ロイヤル(ストレート)?フラッシュ|皇家同花[顺順]|\bescalera\s+real\b/i],
  ['스트레이트 플러시', /스트레이트\s*플러시|스트플|스티플|\bstraight\s+flush\b|ストレートフラッシュ|同花[顺順]|\bescalera\s+de\s+color\b/i],
  ['포카드', /포카드|포 ?카드|쿼드|포 ?오브 ?어 ?카인드|\bfour\s+of\s+a\s+kind\b|\bquads?\b|フォーカード|クワッズ|四[条條]|\bvierling\b|\bquadra\b/i],
  ['풀하우스', /풀\s*하우스|풀하우스|보트|\bfull\s+house\b|\bfull\s+boat\b|フルハウス|葫[芦蘆]/i],
  // ⚠ 中文 "同花色"는 "같은 무늬"라는 뜻이지 플러시가 아니다 → 뒤에 "色"이 오면 제외.
  // ⚠ 中文 "同花色"는 "같은 무늬"라는 뜻이지 플러시가 아니다 → 뒤에 "色"이 오면 제외.
  // ⚠ es "color"가 곧 flush다(용어파일의 ★★TRAMPAS). 스페인어 글은 무늬를 "palo"라 쓰므로 충돌이 적다.
  ['플러시', /플러시|\bflush\b|フラッシュ|同花(?!色)|\bcolor(?:es)?\b/i],
  // ⚠ pt "sequência"는 뺐다 — "sem importar a sequência"(순서 상관없이)처럼 일반 명사로 더 자주 쓴다.
  //   같은 이유로 es "orden", de "Reihenfolge"도 넣지 않는다.
  ['스트레이트', /스트레이트|양차|백도어 ?스트|\bstraight\b|ストレート|[顺順]子|\bescalera\b|\bstra[ßs]e\b/i],
  ['트리플', /트리플|트립스|쓰리\s*카드|셋(?=[\s)*.,·]|$)|\bthree\s+of\s+a\s+kind\b|\btrips\b|スリーカード|トリップス|三[条條]|\bdrilling\b|\btrinca\b|\btr[íi]o\b/i],
  ['투페어', /투\s*페어|투페어|\btwo\s+pair\b|ツーペア|[两兩][对對]|\bzwei\s+paare\b|\bdois\s+pares\b|\bdoble\s+pareja\b/i],
  // 맨 "페어"/"pair"/"par"/"Paar"는 뺀다 — "페어 2쌍"(=투페어) · "트리플 + 페어"(=풀하우스 구성 설명)를 원페어로 오독한다.
  ['원페어', /원\s*페어|오버\s*페어|탑\s*페어|바텀\s*페어|미들\s*페어|포켓\s*페어|\b(one|top|over|bottom|middle|pocket)\s*-?\s*pair\b|ワンペア|オーバーペア|トップペア|ポケットペア|一[对對]/i],
  ['하이카드', /하이\s*카드|\bhigh\s+card\b|ハイカード|ノーペア|高牌|\bcarta\s+alta\b|\bh[öo]chste\s+karte\b/i],
];

function tokenizeCards(text) {
  const out = [];
  CARD_RE.lastIndex = 0;
  let m;
  while ((m = CARD_RE.exec(text))) {
    const rank = m[1] ?? m[4];
    const suit = m[2] ?? m[3];
    out.push({ rank, suit, id: rank + suit, start: m.index, end: m.index + m[0].length });
  }
  return out;
}

/** 공백·구두점만으로 이어진 카드들을 하나의 "런"으로 묶는다 (A♠ 2♦ vs K♠ K♦ → 2런) */
function groupRuns(tokens, text) {
  const runs = [];
  let cur = [];
  for (const t of tokens) {
    if (cur.length) {
      const gap = text.slice(cur[cur.length - 1].end, t.start);
      if (gap.length > 6 || !GAP_OK.test(gap)) { runs.push(cur); cur = []; }
    }
    cur.push(t);
  }
  if (cur.length) runs.push(cur);
  return runs;
}

/**
 * 텍스트가 주장하는 족보 이름. 두 가지를 지킨다:
 *  1) 위치상 가장 먼저 나온 것을 택한다 (별칭 목록 순서로 고르면 "투페어"가 "원페어"를 덮어쓴다)
 *  2) 부정 표현은 주장이 아니다 — "페어 없음" · "스트레이트 불성립" · "플러시는 아닙니다"
 */
function handMentions(text) {
  const ms = [];
  for (const [name, re] of HAND_ALIASES) {
    // ★'gi' — 원본의 i 플래그를 반드시 이어받아야 한다.
    //   'g'만 주면 대소문자 구분이 살아나 "Straight Flush"(대문자)가 통째로 누락된다.
    //   한글 별칭은 영향이 없어 KO에서는 드러나지 않았고, de·en 실측에서 잡혔다(2026-07-31).
    const r = new RegExp(re.source, 'gi');
    let m;
    while ((m = r.exec(text))) {
      if (!m[0].length) break;
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + 14);
      if (/^[\s는은이가도를로]{0,3}(없|불성립|불가|아님|아닙|아니|못|않|안\s)/.test(after)) continue;  // 부정은 주장이 아니다
      // 다국어 부정 — 족보명 **앞**에 붙는다: "sin escalera ni color", "nenhum flush", "没有顺子", "kein Flush".
      // 범위를 넉넉히 잡는 이유: 부정어가 등위접속으로 떨어져 있다("no straight or flush").
      const before = text.slice(Math.max(0, m.index - 26), m.index);
      if (/\b(sin|sem|ni|nem|no|not|nenhum|nenhuma|kein|keine|nicht|tidak|bukan|tanpa)\b[^.。!?]{0,22}$/i.test(before)) continue;
      if (/(没有|沒有|不是|なし|ではない)[^。.!?]{0,10}$/.test(before)) continue;
      ms.push({ name, start: m.index, end: m.index + m[0].length });
    }
  }
  // 중첩 제거 — "로열 플러시" 안의 "플러시", "스트레이트플러시" 안의 "스트레이트"는 별개 언급이 아니다
  return ms
    .filter((a) => !ms.some((b) => b !== a && b.start <= a.start && b.end >= a.end && b.end - b.start > a.end - a.start))
    .sort((x, y) => x.start - y.start);
}

function namedHandIn(text) {
  const ms = handMentions(text);
  return ms.length ? ms[0].name : null;
}

/**
 * 글이 실제 족보를 **상위 개념 이름**으로 부른 경우는 오류가 아니다.
 * 로열 플러시는 정의상 "가장 높은 스트레이트 플러시"라, 그렇게 설명하는 문장이 전 언어에 있다
 * ("the highest straight flush" · 「最も高いストレートフラッシュ」 · "la escalera de color más alta").
 * ⚠ 반대는 오류다 — 로열을 그냥 "플러시"라 부르면 2026-07-31에 실제로 잡은 그 사고다.
 */
const isBroaderName = (actual, named) => actual === '로열 플러시' && named === '스트레이트 플러시';

/** 한 줄에 서로 다른 족보가 2개 이상이면 "구성 설명"(트리플+원페어=풀하우스)이라 판정 근거가 안 된다. */
function distinctHandNames(text) {
  return new Set(handMentions(text).map((m) => m.name)).size;
}

/** 문단 하나에서 시나리오(보드 + 플레이어들) 추출 — 라벨이 확실한 것만 채택 */
function extractScenario(para) {
  const tokens = tokenizeCards(para);
  if (tokens.length < 4) return null;
  const runs = groupRuns(tokens, para);

  // 런이 속한 줄과, 그 줄 안에서 런 앞에 오는 텍스트를 구한다 (주장 탐색을 줄 밖으로 넘기지 않기 위해)
  const lineStarts = [0];
  for (let i = 0; i < para.length; i++) if (para[i] === '\n') lineStarts.push(i + 1);
  const lineOf = (idx) => {
    let lo = 0;
    for (let i = 0; i < lineStarts.length; i++) if (lineStarts[i] <= idx) lo = i;
    const start = lineStarts[lo];
    const end = lo + 1 < lineStarts.length ? lineStarts[lo + 1] - 1 : para.length;
    return { start, end, text: para.slice(start, end) };
  };

  const twoRunsPerLine = new Map();
  for (const r of runs) if (r.length === 2) {
    const k = lineOf(r[0].start).start;
    twoRunsPerLine.set(k, (twoRunsPerLine.get(k) ?? 0) + 1);
  }

  const board = [];
  const boardRuns = [];
  const players = [];
  let sawBoard = false;

  for (const run of runs) {
    const ln = lineOf(run[0].start);
    const before = para.slice(ln.start, run[0].start);

    if (BOARD_KW.test(before.slice(-22))) {
      sawBoard = true;
      if (board.length < 5) { board.push(...run); boardRuns.push(run); }
      continue;
    }
    // ★라벨 없는 1장은 보드로 흡수하지 않는다.
    //   산문에서 "my K♦ pairs the K♠" 같은 낱장 언급이 보드에 섞여 카드가 중복된다(2026-07-31 EN 실측).
    //   줄 단위 가드로는 못 막는다 — 영어 문단은 보드·액션·결과가 한 줄에 다 들어 있다.
    //   턴·리버는 "Turn:" 같은 라벨이 붙으면 위 BOARD_KW 분기에서 이미 잡힌다.
    //   라벨이 없으면 판정하지 않고 커버리지에 "미검사"로 남긴다 — 잘못 잡는 것보다 낫다.
    if (run.length === 1) continue;
    if (run.length !== 2) continue;

    const anchored = PLAYER_RE.test(before.slice(-16))
      || PLAYER_AB_RE.test(before.slice(-8))
      || ROW_LABEL_RE.test(ln.text)                                    // 표의 "홀카드" 행 → 열마다 한 명
      || (/\bvs\b/i.test(ln.text) && twoRunsPerLine.get(ln.start) === 2); // "X vs Y" 대결 표기
    if (!anchored) continue;

    players.push({
      cards: run,
      label: (before.slice(-14).replace(/[\s*_>|\-]+/g, ' ').trim()) || '?',
      claim: namedHandIn(para.slice(run[1].end, ln.end)),               // ★ 같은 줄 안에서만 찾는다
    });
  }
  return { board, boardRuns, players };
}

/** 커버리지 — "오류 0건"이 진짜인지 판단하려면 몇 개를 실제로 계산했는지 알아야 한다. */
const HAND_STATS = new Map();
/** 카드가 있는데 기계가 판정하지 못한 문단 — --uncovered 로 뽑아 사람이 직접 검산한다. */
const UNCOVERED_PARAS = [];

function auditHandsIn(post, PE) {
  const f = [];
  const add = (sev, code, msg, detail) => f.push({ sev, code, msg, detail });
  const c = post.content ?? '';
  const stat = { cardParas: 0, scenarios: 0, evaluated: 0, unanchored: 0, fiveCard: 0, tableRows: 0 };
  HAND_STATS.set(post.slug, stat);
  const h5Lines = new Set();   // H5가 이미 판정한 줄 — 미판정 목록에서 빼야 잡음이 안 낀다

  /* H6 — "홀카드 | 보드" 표 판정.
     `| 내 카드 | 보드 | ... | 최종 족보 |` 형태는 행마다 7장이 다 있어 완전히 계산 가능한데,
     런이 파이프로 끊겨 시나리오 경로로는 못 잡힌다. 표는 표로 읽는다. */
  for (const t of extractTables(c)) {
    const hi = t.header.findIndex((h) => /(내\s*카드|홀\s*카드|내\s*패|내\s*핸드|hand)/i.test(h));
    const bi = t.header.findIndex((h) => /(보드|board)/i.test(h));
    if (hi < 0 || bi < 0 || hi === bi) continue;
    for (const row of t.rows) {
      const hole = tokenizeCards(row[hi] ?? '');
      const board = tokenizeCards(row[bi] ?? '');
      if (hole.length !== 2 || board.length !== 5) continue;
      const ids = [...hole, ...board].map((x) => x.id);
      if (new Set(ids).size !== 7) {
        add('ERR', 'H6', `L${t.line} 표 행에서 홀카드가 보드와 겹침: ${ids.join(' ')}`, [row.join(' | ').slice(0, 110)]);
        continue;
      }
      stat.tableRows++;
      const { best, bestCards } = PE.evalBest7(ids.map((id, k) => [...hole, ...board][k]).map((x) => ({ rank: x.rank, suit: x.suit, id: x.id })));
      const claimCell = row.filter((_, k) => k !== hi && k !== bi).join(' ');
      if (distinctHandNames(claimCell) !== 1) continue;
      const named = namedHandIn(claimCell);
      if (named && named !== best.koreanName) {
        add('ERR', 'H6', `L${t.line} 표 행 족보 불일치 — 글은 "${named}", 실제는 "${best.koreanName}"`,
          [row.join(' | ').slice(0, 110), `→ ${hole.map((x) => x.id).join(' ')} + ${board.map((x) => x.id).join(' ')} = ${bestCards.map((x) => x.id).join(' ')}`]);
      }
    }
  }

  /* H5 — 5장 족보 예시 직접 판정.
     "| 5위 | 플러시 | A♠ J♠ 9♠ 6♠ 2♠ |" 처럼 족보 이름과 예시가 한 줄에 붙어 있는 형태.
     가드: 그 줄의 카드가 정확히 5장이고 런이 하나일 때만 — 홀카드+보드 표(7장)를 걸러낸다. */
  {
    const lines = c.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      const toks = tokenizeCards(ln);
      /* H5가 어떤 줄을 왜 건너뛰는지 보려면:
           AUDIT_DEBUG5="문장 일부" npm run audit:hard -- --locale=de
         "5장 예시 0개"의 원인이 카드 토큰인지·런 분리인지·족보명 인식인지 바로 갈린다.
         (실제로 이 훅으로 handMentions의 'gi' 플래그 누락을 찾았다 — 2026-07-31) */
      const DBG = process.env.AUDIT_DEBUG5 && ln.includes(process.env.AUDIT_DEBUG5);
      if (DBG) console.log(`[dbg] toks=${toks.length} :: ${ln.slice(0, 80)}`);
      if (toks.length !== 5) continue;
      const runs = groupRuns(toks, ln);
      if (DBG) console.log(`[dbg] runs=${runs.length} named=${namedHandIn(ln)} distinct=${distinctHandNames(ln)}`);
      if (runs.length !== 1) continue;
      // 이미지 마크다운 줄은 판정하지 않는다 — alt·캡션은 "보드를 읽는 법" 같은 설명문이라
      // 카드와 족보명이 함께 있어도 그 카드의 족보를 주장하는 문장이 아니다.
      if (/!\[/.test(ln)) continue;
      const named = namedHandIn(ln);
      if (!named) continue;
      if (distinctHandNames(ln) > 1) continue;   // 구성 설명 줄은 판정 근거가 안 된다
      // 구성 설명 다국어 — "three of a kind plus a pair" · "un trío más una pareja" ·
      // "uma trinca mais um par" · "three of a kind plus sepasang" (전부 풀하우스의 부품 나열).
      // 맨 "pair/pareja/par/paar"를 별칭에서 뺐기 때문에 위 가드에 안 걸려 여기서 따로 거른다.
      // ⚠ id "sepasang"은 se+pasang = "a pair" 자체다 — 수식어가 아니라 명사 쪽에 둔다.
      if (/(plus|und|and|with|más|mas|mais|\+|と|加)\s*(a|an|one|two|un|una|uma|um|dois|ein(e|em|en)?)?\s*(sepasang|pair|pareja|pares|par|pasang|paare?|ペア|[对對])\b/i.test(ln)) continue;
      stat.fiveCard++;
      h5Lines.add(i + 1);
      const ids = runs[0].map((t) => t.id);
      if (new Set(ids).size !== 5) {
        add('ERR', 'H5', `L${i + 1} 5장 예시에 같은 카드 중복: ${ids.join(' ')}`, [ln.trim().slice(0, 110)]);
        continue;
      }
      const actual = PE.evalHand5(runs[0].map((t) => ({ rank: t.rank, suit: t.suit, id: t.id })));
      if (actual.koreanName !== named && !isBroaderName(actual.koreanName, named)) {
        add('ERR', 'H5', `L${i + 1} 5장 족보 예시 불일치 — 글은 "${named}", 실제는 "${actual.koreanName}"`,
          [ln.trim().slice(0, 110), `→ ${ids.join(' ')} = ${actual.koreanName}`]);
      }
    }
  }
  // H7 억제 대상 — "이 비교는 실제 홀덤에서 나오지 않는다"고 본문이 **스스로 밝힌** 자리.
  // 무늬 서열이 없다는 규칙을 가르치려고 일부러 추상 비교를 쓰고 각주를 단 경우가 있다
  // (holdem-vs-7poker-hand-rankings). 그건 결함이 아니라 의도된 서술이므로 울리면 오탐이다.
  const H7_DISCLAIMER = /(일어나지 않습니다|나오지 않습니다|성립하지 않습니다|보드는 5장|최소 6장)/;
  const h7Exempt = [];
  c.split('\n').forEach((ln, i) => { if (H7_DISCLAIMER.test(ln)) h7Exempt.push(i + 1); });

  const paras = [];
  let off = 0;
  for (const p of c.split(/\n[ \t]*\n/)) {
    // 이미지 마크다운(alt·캡션)은 걷어낸다 — "…A♠ A♦ 대 K♥ K♦ … 플랍 트리플이 에이스를 깬다" 같은
    // 설명문이라 카드와 족보명이 함께 있어도 그 핸드의 족보를 주장하는 문장이 아니다(2026-07-31 pt·ja·zh 실측).
    // 길이는 보존해야 line 계산이 어긋나지 않으므로 같은 길이의 공백으로 치환한다.
    const cleaned = p.replace(/!\[[^\]]*\]\([^)]*\)/g, (mm) => ' '.repeat(mm.length));
    paras.push({ text: cleaned, line: c.slice(0, off).split('\n').length });
    off += p.length + 2;
  }

  for (const { text: para, line } of paras) {
    const hasCards = tokenizeCards(para).length >= 4;
    if (hasCards) stat.cardParas++;
    const sc = extractScenario(para);
    const nLines = para.split('\n').length;
    let h5Covered = false;
    for (let k = line; k < line + nLines; k++) if (h5Lines.has(k)) { h5Covered = true; break; }
    if (hasCards && !h5Covered && (!sc || sc.board.length !== 5 || sc.players.length === 0)) {
      UNCOVERED_PARAS.push({
        slug: post.slug, line, para,
        why: !sc ? '카드 수 부족' : sc.board.length !== 5 ? `보드 ${sc.board.length}장(5장 아님)` : '홀카드 라벨 없음',
      });
    }
    /* H7 — 5장 vs 5장인데 공유 카드가 0장 = 홀덤에서 나올 수 없는 조합
     *
     * 근거(순수 산수): 각 플레이어의 베스트 5장은 홀카드가 2장뿐이라 **최소 3장을 보드에서** 가져온다.
     * 두 명이면 3+3=6장이 필요한데 보드는 5장뿐이므로, 비둘기집 원리로 **두 베스트 5장은 반드시
     * 1장 이상을 공유**한다. 공유가 0장이면 그 상황은 홀덤에서 발생할 수 없다.
     *
     * ★왜 필요한가 (2026-08-02): `holdem-tiebreak-rules` 한 편에서 이 유형이 **3건** 나왔다 —
     *   로열플러시 2개·브로드웨이 2개·플러시 2개(스페이드 vs 다이아). 전부 "무늬 서열이 없다"를
     *   가르치려다 나온 것인데, 정작 그 상황 자체가 홀덤에 없다.
     *
     * ★반드시 `if (!sc) continue` **앞**에 있어야 한다. 이 문단들은 보드 라벨이 없어 extractScenario가
     *   null을 주고, 기계는 "보드 0장"으로 분류해 **미판정으로 넘겨버린다.** 가드 뒤에 두면
     *   정작 잡아야 할 자리에서만 조용해진다(2026-08-01 C1/C2가 --slug 모드에서만 죽어 있던 것과 같은 함정).
     *
     * WARN인 이유: "vs"로 이어진 두 5장이 **같은 쇼다운**이라는 추론까지는 기계가 확신할 수 없다
     * (족보 강약을 추상적으로 비교하는 문장일 수도 있다). 산수는 확실하니 사람에게 올린다.
     */
    for (const ln of para.split('\n')) {
      const sides = ln.split(/\s+(?:vs|VS|Vs|대)\s+/);
      if (sides.length !== 2) continue;
      const L = tokenizeCards(sides[0]).map((t) => t.id);
      const R = tokenizeCards(sides[1]).map((t) => t.id);
      if (L.length !== 5 || R.length !== 5) continue;
      if (L.some((x) => R.includes(x))) continue;
      // 본문이 "실제로는 안 나온다"고 이미 밝혔으면 의도된 추상 비교다(위 h7Exempt 주석 참조).
      if (h7Exempt.some((d) => Math.abs(d - line) <= 8)) continue;
      add('WARN', 'H7',
        `L${line} 5장 vs 5장인데 공유 카드 0장 — 홀덤에서 나올 수 없는 조합`,
        [ln.trim(), '베스트5는 보드에서 최소 3장을 가져오므로 두 손은 반드시 1장 이상을 공유한다(3+3>5)']);
    }

    if (!sc) continue;
    if (sc.board.length === 5 && sc.players.length === 0) stat.unanchored++;  // 보드는 있는데 홀카드 라벨을 못 잡음

    /* H1 — 보드 한 벌에 같은 카드가 두 번 (덱에 없는 보드) — 확정 오류 */
    for (const run of sc.boardRuns) {
      if (run.length < 3) continue;
      const ids = run.map((t) => t.id);
      const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
      if (dup.length) add('ERR', 'H1', `L${line} 보드에 같은 카드 중복: ${[...new Set(dup)].join(', ')}`, [ids.join(' ')]);
    }

    if (sc.board.length !== 5 || sc.players.length < 1) continue;

    /* H2 — 한 플레이어의 7장(홀 2 + 보드 5)에 같은 카드 — 확정 오류 */
    const usable = [];
    for (const p of sc.players) {
      const ids = [...p.cards.map((t) => t.id), ...sc.board.map((t) => t.id)];
      const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
      if (dup.length) {
        add('ERR', 'H2', `L${line} 홀카드가 보드와 겹침: ${[...new Set(dup)].join(', ')}`,
          [`${p.label} ${p.cards.map((t) => t.id).join(' ')} + 보드 ${sc.board.map((t) => t.id).join(' ')}`]);
        continue;
      }
      usable.push(p);
    }
    if (!usable.length) continue;

    stat.scenarios++;
    stat.evaluated += usable.length;

    /* 베스트5 계산 */
    const evald = usable.map((p) => {
      const seven = [...p.cards, ...sc.board].map((t) => ({ rank: t.rank, suit: t.suit, id: t.id }));
      const { best, bestCards } = PE.evalBest7(seven);
      return { ...p, best, bestCards, score: PE.handScore(bestCards) };
    });

    /* H3 — 글이 붙인 족보 이름 vs 계산 결과 */
    for (const e of evald) {
      if (!e.claim) continue;
      if (e.claim !== e.best.koreanName) {
        add('ERR', 'H3', `L${line} 족보 표기 불일치 — 글은 "${e.claim}", 실제 베스트5는 "${e.best.koreanName}"`,
          [`${e.label} ${e.cards.map((t) => t.id).join(' ')} + 보드 ${sc.board.map((t) => t.id).join(' ')}`,
           `→ 베스트5 ${e.bestCards.map((t) => t.id).join(' ')} = ${e.best.koreanName}`]);
      }
    }

    /* H4 — "스플릿" 주장 vs 실제 승부 */
    if (evald.length >= 2 && SPLIT_KW.test(para)) {
      let winners = [evald[0]];
      for (const e of evald.slice(1)) {
        if (e.best.rank < winners[0].best.rank) winners = [e];
        else if (e.best.rank === winners[0].best.rank) {
          if (PE.scoreBetter(e.score, winners[0].score)) winners = [e];
          else if (!PE.scoreBetter(winners[0].score, e.score)) winners.push(e);
        }
      }
      if (winners.length < 2) {
        add('ERR', 'H4', `L${line} "스플릿" 서술이지만 실제로는 ${winners[0].label} 단독 승리`,
          [`보드 ${sc.board.map((t) => t.id).join(' ')}`,
           ...evald.map((e) => `${e.label} ${e.cards.map((t) => t.id).join(' ')} → ${e.bestCards.map((t) => t.id).join(' ')} = ${e.best.koreanName}`)]);
      }
    }

    /* 워크시트 (--worksheet) */
    if (argv.includes('--worksheet') && evald.length) {
      add('INFO', 'H0', `L${line} 시나리오 — 보드 ${sc.board.map((t) => t.id).join(' ')}`,
        evald.map((e) => `${e.label} ${e.cards.map((t) => t.id).join(' ')} → ${e.bestCards.map((t) => t.id).join(' ')} = ${e.best.koreanName}${e.claim ? ` (글: ${e.claim})` : ''}`));
    }
  }
  return f;
}

/* ────────────────────────────────────────────────────────────────
   3-C. E유형 — 내 편집이 만든 축어 중복
        Q-A-E 직답을 넣으면서 바로 아래 원문과 같은 말을 반복한 사고가 실제로 5건 있었다.
        최종본을 통독하면 "둘 다 맞는 말"이라 그냥 지나간다 → 기계로 잰다.
   ──────────────────────────────────────────────────────────────── */
function normText(s) {
  return s
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')   // 링크 → 라벨만
    .replace(/[*_=~`>#]/g, '')
    .replace(/\s+/g, ' ')
    // ★소수점은 문장부호가 아니다. 보호하지 않으면 "3.5%"와 "35%"가 같은 값이 돼
    //   형제 글의 확률 수치 모순을 통째로 놓친다(2026-07-31 확률 클러스터에서 발견).
    .replace(/[.。!?·,·:：]/g, (m, i, str) => (m === '.' && /\d/.test(str[i - 1] ?? '') && /\d/.test(str[i + 1] ?? '')) ? '.' : '')
    .trim();
}
function trigrams(s) { const g = new Set(); for (let i = 0; i < s.length - 2; i++) g.add(s.slice(i, i + 3)); return g; }
function jaccard(a, b) { let inter = 0; for (const x of a) if (b.has(x)) inter++; return inter / (a.size + b.size - inter || 1); }

function sentencesOf(c) {
  const out = [];
  const lineRe = /[^\n]+/g;
  let m;
  while ((m = lineRe.exec(c))) {
    if (/^\s*[|>]/.test(m[0]) || /^\s*#{1,6}\s/.test(m[0])) continue;   // 표·인용·헤딩 제외
    // HTML 라인은 태그를 벗기고 남은 산문만 본다.
    // 왜: 표를 감싸는 <div style="background:rgba(...)"> 래퍼나 연속된 <img ...>가
    //     서로 "유사도 100% 축어 중복"으로 잡히던 오탐(2026-08-01 masters-7th에서 5건).
    //     스타일 속성은 콘텐츠가 아니다. 반대로 <p style="...">진짜 문장</p> 은
    //     이제 스타일 노이즈 없이 산문끼리 비교돼 검출력이 오히려 올라간다.
    if (m[0].includes('<')) {
      const prose = normText(m[0].replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim());
      if (prose.length >= 30) out.push({ norm: prose, start: m.index, line: c.slice(0, m.index).split('\n').length });
      continue;
    }
    let base = m.index;
    for (const part of m[0].split(/(?<=[.?!])\s+/)) {
      const idx = c.indexOf(part, base);
      if (idx < 0) continue;
      base = idx + part.length;
      const norm = normText(part);
      if (norm.length >= 30) out.push({ norm, start: idx, line: c.slice(0, idx).split('\n').length });
    }
  }
  return out;
}

/* ────────────────────────────────────────────────────────────────
   F13 — 본문에 적힌 나눗셈을 실제로 계산해 본다.
   왜 있는가: 2026-07-31 확률 클러스터에서 팟오즈 분모가 통째로 틀렸는데
   "팟오즈" 키워드 검색으로는 안 걸렸다. position 글의 "팟 오즈 = 2/4 = 33%"(2/4는 50%)는
   적대적 검수가 우연히 발견했다. 산수 자체를 기계가 재계산하면 언어와 무관하게 전부 잡힌다.
   ──────────────────────────────────────────────────────────────── */
const DIV_RE = /([\d][\d,]*(?:\.\d+)?)\s*(?:÷|\/)\s*\(?\s*([0-9,.\s+×x*]+?)\s*\)?\s*(?:(?:×|x|\*)\s*100\s*)?=\s*\**\s*(?:약\s*)?([\d.]+)\s*%/g;

/** "10,000 + 5,000 + 5,000" 또는 "20,000 + 10,000 × 2" → 숫자. 못 풀면 null. */
function evalDenom(s) {
  const t = s.replace(/,/g, '').trim();
  if (!/^[\d.\s+×x*]+$/.test(t)) return null;
  let sum = 0;
  for (const term of t.split('+')) {
    const factors = term.split(/[×x*]/).map((x) => parseFloat(x.trim()));
    if (factors.some((f) => !Number.isFinite(f))) return null;
    sum += factors.reduce((a, b) => a * b, 1);
  }
  return sum;
}

function auditArithmetic(post) {
  const out = [];
  const lines = (post.content ?? '').split('\n');
  lines.forEach((raw, i) => {
    for (const m of raw.matchAll(DIV_RE)) {
      const num = parseFloat(m[1].replace(/,/g, ''));
      const den = evalDenom(m[2]);
      const claimed = parseFloat(m[3]);
      if (!Number.isFinite(num) || den === null || den === 0 || !Number.isFinite(claimed)) continue;
      const actual = (num / den) * 100;
      // 0.6%p까지는 반올림·어림으로 본다. 그 이상 벌어지면 산수가 틀린 것이다.
      if (Math.abs(actual - claimed) > 0.6) {
        out.push({
          sev: 'ERR', code: 'F13',
          msg: `L${i + 1} 나눗셈 결과 불일치 — 글은 "${claimed}%", 실제 ${actual.toFixed(1)}% (${m[1]} ÷ ${m[2].trim()})`,
        });
      }
    }
  });
  return out;
}

function auditDuplication(post) {
  const f = [];
  const c = post.content ?? '';
  const sents = sentencesOf(c).map((s) => ({ ...s, gram: trigrams(s.norm) }));
  const seen = new Set();
  for (let i = 0; i < sents.length; i++) {
    for (let j = i + 1; j < sents.length; j++) {
      if (sents[j].start - sents[i].start > 3000) break;              // 가까운 자리의 반복만
      const sim = jaccard(sents[i].gram, sents[j].gram);
      if (sim < 0.78) continue;
      const key = `${sents[i].line}-${sents[j].line}`;
      if (seen.has(key)) continue;
      seen.add(key);
      f.push({
        sev: sim >= 0.95 ? 'ERR' : 'WARN', code: 'E1',
        msg: `L${sents[i].line} ↔ L${sents[j].line} 축어 중복 (유사도 ${(sim * 100).toFixed(0)}%)`,
        detail: [sents[i].norm.slice(0, 100), sents[j].norm.slice(0, 100)],
      });
    }
  }
  // FAQ 문항 ↔ H2 축어 중복 (§14-A 2·5)
  const h2 = getH2s(c).map((h) => ({ ...h, gram: trigrams(normText(h.text)) }));
  for (const q of getFaq(c)) {
    const qn = normText(q.q.replace(/^\*\*Q[.．]\s*/, ''));
    if (qn.length < 12) continue;
    const g = trigrams(qn);
    for (const h of h2) {
      if (jaccard(g, h.gram) >= 0.8) {
        f.push({ sev: 'WARN', code: 'E2', msg: `L${q.line} FAQ 문항이 H2(L${h.line})와 축어 중복`, detail: [qn.slice(0, 80), h.text.slice(0, 80)] });
      }
    }
  }
  return f;
}

/* ────────────────────────────────────────────────────────────────
   3-D. C유형 — 클러스터 형제 글 간 표 불변식 대조
        overbet ↔ bluffing 밸류:블러프 비율표가 정면 모순이었다.
        각 글 안에서는 아무 모순이 없어서 1편 검수로는 원리상 못 잡는다.
   ──────────────────────────────────────────────────────────────── */
function extractTables(c) {
  const lines = c.split('\n');
  const tables = [];
  for (let i = 0; i < lines.length; i++) {
    if (!/^\s*\|/.test(lines[i])) continue;
    const start = i;
    const raw = [];
    while (i < lines.length && /^\s*\|/.test(lines[i])) { raw.push(lines[i]); i++; }
    if (raw.length < 3) continue;
    const cells = raw.map((r) => r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map((x) => normText(x)));
    const header = cells[0];
    const rows = cells.slice(1).filter((r) => !r.every((x) => /^-*:?-*$/.test(x) || x === ''));
    tables.push({ line: start + 1, header, rows });
  }
  return tables;
}
const numsOf = (s) => (s.match(/\d+(?:[.,]\d+)?/g) ?? []).join('/');

/** 편집거리(Levenshtein) — 표 열 이름의 표기차 판정용. */
function editDistance(a, b) {
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[b.length];
}

/**
 * 형제 글끼리 달라도 정상인 셀 — 대조하면 오탐만 난다.
 *   ① 예시 핸드: 카드 기호(♠♥♦♣), 또는 랭크 5개 나열("9-8-7-6-5" 같은 베스트5 표기)
 *   ② 날짜·연도·월
 *   ③ 금액(통화 기호·통화 코드)
 *   ④ 오즈 표기("16 para 1" ↔ "1 em 17"은 같은 값의 다른 표기다)
 * 카드 자체의 정합성은 H1~H6이 따로 본다.
 */
const NON_COMPARABLE_CELL = new RegExp([
  '[♠♥♦♣$€₩¥£]',
  '\\b[AKQJT0-9]{1,2}(?:-[AKQJT0-9]{1,2}){4}\\b',
  '\\b(19|20)\\d{2}\\b',
  '\\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\\b',
  '\\d+\\s*월',
  'AUD|USD|KRW|EUR',
  '\\d+\\s*(?:대|對|para|to|:)\\s*1\\b',
].join('|'), 'i');

/** 대회 가이드 slug(연도 포함) — 서로 다른 대회의 수치를 대조하는 건 의미가 없다. */
const isEventGuide = (s) => /\b(19|20)\d{2}\b/.test(s);

/** 열 이름 비교 — 3-gram으로는 표기차를 못 잡는다("플럽 승률 (×4)" ↔ "플랍 승률(×4)" = 0.25). */
const keyOf = (h) => (h ?? '').replace(/[\s()（）[\]{}·,:/\-—]/g, '');
function nearName(x, y) {
  const a = keyOf(x), b = keyOf(y);
  if (!a || !b) return false;
  return editDistance(a, b) <= Math.max(1, Math.floor(Math.max(a.length, b.length) * 0.25));
}

// 아무 표에나 붙는 일반 머리말 — 이것만 겹치는 건 "같은 주제"의 근거가 못 된다.
const GENERIC_HEADER = new Set(['구분', '주제', '항목', '궁금한 점', '핵심 정리', '내용', '연결 내용', '설명',
  '비고', '상황', '기준', '예시', '포인트', '방법', '이유', '결과', '체크', '단계']);

/**
 * 같은 주제의 표인가 — **값 열**(첫 열 제외)이 2칸 이상 겹칠 때.
 * 키 열 이름으로 판정하면 안 된다: 실제 사고였던
 * bluffing "벳 사이즈 | 밸류:블러프 | 블러프 비중" ↔ overbet "오버벳 크기 | 밸류:블러프 | 블러프 비중" 이
 * 첫 열 이름이 다르다는 이유로 통째로 빠진다.
 */
function sameTopicTable(A, B) {
  const valA = A.header.slice(1).filter((h) => h && !GENERIC_HEADER.has(h));
  const valB = new Set(B.header.slice(1).filter((h) => h && !GENERIC_HEADER.has(h)));
  return valA.filter((h) => valB.has(h)).length >= 2;
}

/**
 * @param focus  지정하면 **그 글이 한쪽에 낀 쌍만** 대조한다.
 *               `--slug` 모드에서 형제 전원을 로드하되, 손대지도 않은 형제끼리의
 *               C2까지 쏟아내면 정작 내 글의 지적이 묻힌다.
 */
function auditClusterTables(cluster, slugs, bySlug, stats, focus = null) {
  const out = [];
  const all = [];
  for (const s of slugs) {
    const p = bySlug.get(s);
    if (!p) continue;
    for (const t of extractTables(p.content ?? '')) all.push({ slug: s, ...t, gram: trigrams(t.header.join(' ')) });
  }
  stats.tables += all.length;
  for (let i = 0; i < all.length; i++) {
    for (let j = i + 1; j < all.length; j++) {
      const A = all[i], B = all[j];
      if (A.slug === B.slug) continue;
      if (focus && A.slug !== focus && B.slug !== focus) continue;
      // 서로 다른 대회 가이드끼리는 엔트리·상금·일정이 다른 게 정상이다.
      if (isEventGuide(A.slug) && isEventGuide(B.slug)) continue;
      const mapB = new Map(B.rows.map((r) => [r[0], r]));
      const rowOverlap = A.rows.filter((r) => r[0] && mapB.has(r[0])).length;
      // ★짝짓기 신호 2개 — 어느 하나만 성립해도 대조 대상이다.
      //  ① 헤더가 닮았다(값 열 이름 2개 이상 공유) — overbet↔bluffing 사고가 이 경로
      //  ② 헤더가 달라도 **같은 행 키를 2개 이상 공유**한다 — 확률 클러스터가 이 경로.
      //     「플러시 드로우/거트샷…」 행을 4편이 공유하는데 값 열 이름이 제각각이라
      //     ①만 보면 통째로 빠진다(침묵 = "검증됨"으로 오독되는 공백).
      // ★행 키만 겹치는 경로는 **첫 열 이름도 닮아야** 짝짓는다.
      //   족보 이름(플러시·스트레이트…)은 어느 표에나 행 키로 등장하기 때문이다.
      //   2026-07-31 ja/zh 실측: 「5장 족보 확률」표와 「플랍에서 완성될 확률」표가
      //   행 키를 공유한다는 이유로 짝지어져 🔴 4건씩 오탐이 났다. 둘 다 정확한 표였다.
      const rowLinked = rowOverlap >= 3 && nearName(A.header[0], B.header[0]);
      if (!(jaccard(A.gram, B.gram) >= 0.45 && sameTopicTable(A, B)) && !rowLinked) continue;
      stats.pairs++;
      // ★열은 인덱스가 아니라 **이름**으로 맞춘다.
      // 인덱스로 맞추면 다른 개념끼리 대조해 오탐이 난다 — 2026-07-31 확률 클러스터에서 실제 발생:
      //   probability「드로우|아웃츠|플럽 승률(×4)|턴 승률(×2)」 ↔ pot-odds「…|콜 가능 최대 팟오즈」
      //   → 4번째 열끼리 비교해 "18% vs 36%" 불일치 5건을 쏟았으나, 공통 열(플럽 승률)은 완전 일치였다.
      const colMap = [];
      for (let k = 1; k < A.header.length; k++) {
        const h = A.header[k];
        if (!h) continue;
        const kb = B.header.indexOf(h);
        if (kb > 0) colMap.push([k, kb, h]);
      }
      /* 이름이 안 맞아 비교에서 빠진 열 중 **같은 개념의 다른 이름으로 의심되는 쌍**만 육안으로 올린다.
         조건: 양쪽 다 숫자를 담은 값 열이고, 열 이름끼리 닮았을 것.
         ─ 이름이 안 닮았으면 애초에 다른 개념이다("턴 승률(×2)" ↔ "콜 가능 최대 팟오즈") → 침묵이 맞다.
         ─ 이 조건 없이 "미대조 열 전부"를 올렸더니 25편에서 C2가 40건 넘게 터졌다. 40건은 아무도 안 본다. */
      const hasNum = (rows, k) => rows.some((r) => numsOf(r[k] ?? ''));
      const unmatchedCols = [];
      for (let ka = 1; ka < A.header.length; ka++) {
        if (!A.header[ka] || colMap.some(([x]) => x === ka) || !hasNum(A.rows, ka)) continue;
        for (let kb = 1; kb < B.header.length; kb++) {
          if (!B.header[kb] || colMap.some(([, y]) => y === kb) || !hasNum(B.rows, kb)) continue;
          if (nearName(A.header[ka], B.header[kb])) {
            unmatchedCols.push(`"${A.header[ka]}" ↔ "${B.header[kb]}"`);
          }
        }
      }
      const diffs = [];
      let matched = 0;
      for (const r of A.rows) {
        const b = mapB.get(r[0]);
        if (!b) continue;
        stats.rows++; matched++;
        for (const [ka, kb, hname] of colMap) {
          const ca = r[ka] ?? '', cb = b[kb] ?? '';
          // ★예시 핸드와 날짜는 "달라도 되는 값"이다 — 대조하면 오탐만 난다.
          //   족보 예시: 9♥8♥7♥6♥5♥ ↔ 5♥6♥7♥8♥9♥ 는 같은 핸드를 순서만 바꿔 쓴 것.
          //   대회 날짜: 서로 다른 대회의 일정이 다른 건 당연하다.
          //   (카드 자체의 정합성은 H1~H6이 따로 본다.)
          if (NON_COMPARABLE_CELL.test(ca) || NON_COMPARABLE_CELL.test(cb)) continue;
          const na = numsOf(ca), nb = numsOf(cb);
          if (na && nb && na !== nb) diffs.push(`"${r[0]}" ${hname}: ${A.slug}=${ca.slice(0, 28)} / ${B.slug}=${cb.slice(0, 28)}`);
        }
      }
      // 짝은 지어졌으나 행 키가 안 맞아 그냥 지나간 행 — 침묵이 "검증됨"으로 읽히지 않게 집계만 해둔다.
      stats.rowsSkipped += A.rows.length - matched;
      if (diffs.length) {
        out.push({
          sev: 'ERR', code: 'C1',
          msg: `[${cluster}] 형제 글의 같은 표에서 수치 불일치 ${diffs.length}건 — ${A.slug}(L${A.line}) ↔ ${B.slug}(L${B.line})`,
          detail: diffs,
        });
      } else if (matched === 0 || unmatchedCols.length) {
        // 대조하지 못하고 남은 것이 있다 — 행 키가 안 맞거나(matched 0), 열 이름이 달라 비교에서 빠진 값 열이 있다.
        // ★이름이 다른 두 열이 "다른 개념"인지 "같은 개념의 다른 이름"인지는 기계가 판정할 수 없다.
        //   여기서 침묵하면 "검증됨"으로 읽힌다 → 사람에게 넘긴다. (overbet↔bluffing 사고가 정확히 이 자리)
        stats.manual++;
        out.push({
          sev: 'WARN', code: 'C2',
          msg: `[${cluster}] ${matched === 0 ? '자동 대조가 행 키 불일치로 전혀 안 됨' : `이름만 다른 같은 개념 열로 의심됨 — ${unmatchedCols.join(', ')}`} — 육안 대조 필요: ${A.slug}(L${A.line}) ↔ ${B.slug}(L${B.line})`,
          detail: [
            `헤더 A: ${A.header.join(' | ')}`,
            ...A.rows.slice(0, 5).map((r) => `   ${A.slug}: ${r.join(' | ')}`),
            `헤더 B: ${B.header.join(' | ')}`,
            ...B.rows.slice(0, 5).map((r) => `   ${B.slug}: ${r.join(' | ')}`),
          ],
        });
      }
    }
  }
  return out;
}

/* ────────────────────────────────────────────────────────────────
   4. 실행
   ──────────────────────────────────────────────────────────────── */
const argv = process.argv.slice(2);
const arg = (k) => { const a = argv.find((x) => x.startsWith(`--${k}=`)); return a ? a.split('=')[1] : null; };
const wantAll = argv.includes('--all');
const wantJson = argv.includes('--json');
const oneSlug = arg('slug');
const oneCluster = arg('cluster');

const oneLocale = arg('locale');
const POSTS = oneLocale && oneLocale !== 'ko' ? await loadLocalePosts(oneLocale) : await loadPosts();
const PE = await loadPokerEval();

/* ── 자가 테스트 (--selftest) — 게이트가 실제 사고를 잡는지 증명한다 ──
   검증되지 않은 게이트는 "통과"가 아니라 "안 본 것"이다. */
if (argv.includes('--selftest')) {
  const FIX = [
    ['2026-06-23 실제 사고 (보드 스트레이트 위로 K가 연결)', true,
      '보드: Q♣ J♥ 10♦ 9♠ 8♥\nA: A♠ 2♦ → 보드 스트레이트\nB: K♠ K♦ → 보드 스트레이트\n→ **스플릿**'],
    ['수정본 (10-9-8-7-6, 양쪽 다 연결 불가 = 진짜 스플릿)', false,
      '보드: 10♣ 9♥ 8♦ 7♠ 6♥\nA: A♠ 2♦ → 보드 스트레이트\nB: K♠ K♦ → 보드 스트레이트\n→ **스플릿**'],
    ['족보 이름 오기 (실제 원페어인데 투페어라고 씀)', true,
      '보드: A♦ K♣ 7♥ 2♠ 3♦\n- 나: A♠ Q♠ → **투페어(AA)**'],
    ['홀카드가 보드와 중복', true,
      '보드: A♦ K♣ 7♥ 2♠ 3♦\n- 나: A♦ Q♠ → **원페어**'],
    ['부정 표현은 주장이 아니다 (페어 없음 = 하이카드, 정상)', false,
      '보드: K♦ 7♠ 4♣ 2♥ J♦\nA: A♠ Q♣ → 베스트 5장: **A-K-Q-J-7** (페어 없음, 하이카드)'],
    ['스타팅 핸드 나열은 한 조합이 아니다 (오탐 금지)', false,
      '- **강한 핸드**: A♠K♥ (빅 슬릭), A♠Q♥, A♠J♥, 10♠10♥'],
    ['5장 족보 예시 오기 (6♣ 섞여 플러시 아님)', true,
      '| **5위** | **플러시** | A♠ J♠ 9♠ 6♣ 2♠ |'],
    ['5장 족보 예시 정상', false,
      '| **6위** | **스트레이트** | 9♠ 8♥ 7♦ 6♣ 5♠ |'],
    ['홀카드+보드 표(7장)는 5장 예시가 아니다 (오탐 금지)', false,
      '| ♠A ♠K | ♠Q ♠J ♠9 ♥3 ♦2 | ✅ 스페이드 플러시 | 홀카드 2+보드 3 |'],
    ['구성 설명은 판정 근거가 아니다 — 풀하우스 (오탐 금지)', false,
      '**Q♠ Q♥ Q♦ 5♣ 5♠** — 트리플(3장) + 원페어(2장).'],
    ['구성 설명은 판정 근거가 아니다 — 페어 2쌍 (오탐 금지)', false,
      '**10♠ 10♥ 8♣ 8♦ A♠** — 서로 다른 숫자의 페어 2쌍.'],
    ['홀카드|보드 표 — 정상 4행 (오탐 금지)', false,
      '| 내 카드 | 보드 | 쓰는 개인 카드 | 최종 족보 |\n|---|---|---|---|\n| A♠ K♠ | A♦ 7♣ 7♥ 2♠ 9♣ | 2장 | 에이스·세븐 투페어 (K 키커) |\n| 8♠ 8♦ | K♣ 8♥ 4♠ 4♦ J♣ | 2장 | 8 풀하우스 |\n| 2♣ 3♦ | A♠ K♠ Q♠ J♠ 10♠ | 0장 | 보드 로열플러시 |'],
    ['부정 축약형 "아님"도 주장이 아니다 (오탐 금지)', false,
      '| 내 홀카드 | 보드 | 플러시? | 설명 |\n|---|---|---|---|\n| ♣A ♦K | ♠Q ♠J ♥9 ♦7 ♣3 | ❌ 플러시 아님 | 같은 무늬 5장 없음 |'],
    ['홀카드|보드 표 — 족보 오기 (잡아야 함)', true,
      '| 내 카드 | 보드 | 최종 족보 |\n|---|---|---|\n| A♠ 4♦ | A♦ K♣ 9♥ 7♣ 2♠ | 에이스 투페어 |'],
    ['**내 홀카드**: 형태도 잡는다 (잡아야 함)', true,
      '**내 홀카드**: K♠ Q♦ / **상대 홀카드**: K♥ 5♣\n**보드**: K♦ J♠ 8♥ 4♣ 2♦\n→ **스플릿**'],
    ['로열 플러시를 "플러시"로 표기 (잡아야 함)', true,
      '- 플레이어 A: A♠ K♠ Q♠ J♠ 10♠ (스페이드 플러시)'],
    ['표 두 열의 베스트5는 별개다 (오탐 금지)', false,
      '| **홀카드** | K♠ 7♣ | K♥ 2♦ |\n| **보드** | K♦ K♣ Q♥ Q♦ J♠ | (동일) |\n| **베스트 5장** | K♠ K♦ K♣ Q♥ Q♦ | K♥ K♦ K♣ Q♥ Q♦ |\n| **결과** | 풀하우스 | 풀하우스 → **스플릿** |'],

    /* H7(5장 vs 5장 공유 0장) 픽스처는 WARN 등급이라 아래 H7FIX 블록에서 따로 돌린다. */

    /* ── 다국어 (2026-07-31 EN·ja·zh·es·pt·id 전수조사에서 실측된 오탐/검출) ── */
    ['ja 족보 오기 (잡아야 함)', true, '**A♠ K♠ Q♠ J♠ 10♠** — フルハウス。'],
    ['zh 족보 오기 (잡아야 함)', true, '**9♥ 8♥ 7♥ 6♥ 5♥** —— 葫芦。'],
    ['es 족보 오기 (잡아야 함)', true, '**A♦ J♦ 8♦ 6♦ 2♦** — una escalera.'],
    ['로열을 "가장 높은 스트레이트 플러시"라 부르는 건 정확하다 — en (오탐 금지)', false,
      '**A♠ K♠ Q♠ J♠ 10♠** — the highest straight flush, and the best hand in poker.'],
    ['로열을 "가장 높은 스트레이트 플러시"라 부르는 건 정확하다 — ja (오탐 금지)', false,
      '**A♠ K♠ Q♠ J♠ 10♠** — 最も高いストレートフラッシュであり、ポーカー最強の役。'],
    ['로열을 "가장 높은 스트레이트 플러시"라 부르는 건 정확하다 — es (오탐 금지)', false,
      '**A♠ K♠ Q♠ J♠ 10♠** — la escalera de color más alta y la mejor mano del póker.'],
    ['구성 설명 — es "un trío más una pareja" (오탐 금지)', false, '**Q♠ Q♥ Q♦ 5♣ 5♠** — un trío más una pareja.'],
    ['구성 설명 — pt "uma trinca mais um par" (오탐 금지)', false, '**Q♠ Q♥ Q♦ 5♣ 5♠** — uma trinca mais um par.'],
    ['구성 설명 — id "three of a kind plus sepasang" (오탐 금지)', false, '**Q♠ Q♥ Q♦ 5♣ 5♠** — three of a kind plus sepasang.'],
    ['구성 설명 — de "ein Drilling plus ein Paar" (오탐 금지)', false, '**Q♠ Q♥ Q♦ 5♣ 5♠** — ein Drilling plus ein Paar.'],
    ['대문자 족보명도 잡아야 한다 — de (잡아야 함)', true, '**A♠ K♠ Q♠ J♠ 10♠** — ein Full House im Poker.'],
    ['부정문 — en "no straight or flush" (오탐 금지)', false,
      'Back to my buy-in. Board ==b:A♦ 7♣ 2♥ Q♠ 4♦==, no straight or flush out there.'],
    ['부정문 — es "sin escalera ni color" (오탐 금지)', false,
      'Mesa ==b:A♦ 7♣ 2♥ Q♠ 4♦==, sin escalera ni color a la vista.'],
    ['zh "同花色"는 같은 무늬이지 플러시가 아니다 (오탐 금지)', false,
      '关键在于：同样这五张牌必须既同花色又连续。在牌面 **8♥ 7♥ 6♥ Q♠ 3♦** 上看看差别。'],
    ['이미지 alt는 족보 주장이 아니다 (오탐 금지)', false,
      '![Infográfico de um par de ases A♠ A♦ contra K♥ K♦ num board K♠ 7♦ 2♣ 8♥ 3♠ — a trinca de reis quebra os ases](/images/x.webp "legenda")'],
    ['라벨 없는 낱장은 보드가 아니다 (오탐 금지)', false,
      'I raise ==A♣K♦== and the big blind calls. Flop: ==K♠ 7♦ 2♣.== my K♦ pairs the K♠, with the ace as the best kicker.'],
  ];
  let pass = 0;
  console.log('\n══════ 자가 테스트 ══════');
  for (const [name, shouldFire, content] of FIX) {
    const found = auditHandsIn({ slug: 'selftest', content }, PE).filter((x) => x.sev === 'ERR');
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  /* ── WARN 등급 핸드 검사(H7) 자가 테스트 ──
     위 FIX 루프는 ERR만 센다. H7은 "vs로 이어진 두 5장이 같은 쇼다운인가"를 기계가 확신할 수 없어
     WARN으로 두었으므로 별도로 검증해야 한다. 안 그러면 검사가 죽어도 자가 테스트가 초록이다. */
  const H7FIX = [
    ['H7 로열 vs 로열 — 공유 0장이라 홀덤에서 불가능 (잡아야 함)', true,
      'A♠ K♠ Q♠ J♠ 10♠ vs A♥ K♥ Q♥ J♥ 10♥ → 무늬 달라도 숫자 동일이라 스플릿.'],
    ['H7 다른 무늬 플러시끼리 — 보드 6장이 필요하다 (잡아야 함)', true,
      'A♠ K♠ Q♠ J♠ 9♠ vs A♦ K♦ Q♦ J♦ 8♦ → 9 > 8 이라 스페이드 승리.'],
    ['H7 본문이 "실제로는 안 나온다"고 밝혔으면 의도된 비교다 (오탐 금지)', false,
      'A♠ K♠ Q♠ J♠ 9♠ vs A♥ K♥ Q♥ J♥ 9♥ → 스플릿 팟.\n\n서로 다른 무늬로 동시에 플러시를 만드는 일은 일어나지 않습니다. 보드는 5장뿐이기 때문입니다.'],
    ['H7 보드를 공유하는 정상 쇼다운은 울리지 않는다 (오탐 금지)', false,
      '**보드**: A♠ K♠ Q♠ J♠ 2♥ / **나**: 9♠ 3♦ / **상대**: 8♠ 5♦\n나는 A-K-Q-J-9, 상대는 A-K-Q-J-8 이라 내가 이깁니다.'],
    ['H7 홀카드끼리 2장 비교는 대상이 아니다 (오탐 금지)', false,
      'A♠ K♦ vs A♥ K♣ — 보드에서 같은 족보가 완성되면 스플릿입니다.'],
  ];
  for (const [name, shouldFire, content] of H7FIX) {
    const found = auditHandsIn({ slug: 'selftest', content }, PE).filter((x) => x.code === 'H7');
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  /* ── 클러스터 표 교차 대조(C1/C2) 자가 테스트 ──
     C1은 "형제 글의 같은 표가 서로 모순"을 잡는 검사다. 열을 인덱스로 맞추면
     서로 다른 개념 열을 대조해 오탐이 난다(2026-07-31 확률 클러스터 실측). */
  const CFIX = [
    ['실제 사고 재현 — 같은 이름 열의 수치 모순', ['C1'],
      '| 벳 사이즈 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 40% |',
      '| 오버벳 크기 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 25% |'],
    ['같은 이름 열이 전부 일치하면 조용하다', [],
      '| 벳 사이즈 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 40% |',
      '| 오버벳 크기 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 40% |'],
    // ★2026-07-31 확률 클러스터 실측: 열을 인덱스로 맞춰 "턴 승률(×2)"와 "콜 가능 최대 팟오즈"를
    //   대조하고 🔴 수치 불일치 5건을 단정했다. C1은 절대 울리면 안 되고, 대조 못 한 열은 C2로만 넘긴다.
    ['확률 클러스터 오탐 — 다른 개념 열은 C1도 C2도 아니다', [],
      '| 드로우 종류 | 아웃츠 | 플럽 승률 (×4) | 턴 승률 (×2) |\n|:---|:---:|:---|:---|\n| 플러시 드로우 | 9장 | 약 36% | 약 18% |\n| 양방 스트레이트 | 8장 | 약 32% | 약 16% |\n| 거트샷 스트레이트 | 4장 | 약 16% | 약 8% |',
      '| 드로우 종류 | 아웃츠 | 플럽 승률 (×4) | 콜 가능 최대 팟오즈 |\n|:---|:---:|:---|:---|\n| 플러시 드로우 | 9장 | 약 36% | 36% 이하 (팟의 56% 이하 베팅) |\n| 양방 스트레이트 | 8장 | 약 32% | 32% 이하 (팟의 47% 이하 베팅) |\n| 거트샷 스트레이트 | 4장 | 약 16% | 16% 이하 (팟의 19% 이하 베팅) |'],
    // ★normText가 마침표를 문장부호로 보고 지우면 "3.5%"와 "35%"가 같은 값이 된다.
    //   확률 클러스터는 19.6%·31.5%·16.5%처럼 소수점 수치투성이라 이 결함 하나로 전부 무력화된다.
    // ★2026-07-31 EN 전수조사 실측 오탐: 같은 족보의 다른 예시 핸드, 서로 다른 대회의 날짜.
    ['예시 핸드가 다른 건 모순이 아니다 (오탐 금지)', [],
      '| 순위 | 족보 | Example |\n|---|---|---|\n| 2 | 스트레이트 플러시 | 9♥ 8♥ 7♥ 6♥ 5♥ |\n| 5 | 플러시 | A♠ J♠ 9♠ 6♠ 2♠ |\n| 6 | 스트레이트 | 9♣ 8♥ 7♦ 6♣ 5♠ |',
      '| 순위 | 족보 | Example |\n|---|---|---|\n| 2 | 스트레이트 플러시 | 5♥ 6♥ 7♥ 8♥ 9♥ |\n| 5 | 플러시 | A♠ K♠ 8♠ 5♠ 2♠ |\n| 6 | 스트레이트 | 5♥ 6♠ 7♦ 8♣ 9♥ |'],
    ['서로 다른 대회의 날짜가 다른 건 모순이 아니다 (오탐 금지)', [],
      '| 항목 | 2026 (Confirmed) | 2025 (Actual) |\n|---|---|---|\n| Dates | Sep 10–30 2026 | Sep 18–Oct 1 2025 |\n| Venue | Melbourne | Melbourne |\n| Buy-in | A$1,100 | A$1,100 |',
      '| 항목 | 2026 (Confirmed) | 2025 (Actual) |\n|---|---|---|\n| Dates | Aug 16–29 2026 | Aug 18–31 2025 |\n| Venue | Barcelona | Barcelona |\n| Buy-in | A$1,100 | A$1,100 |'],
    ['소수점을 지우면 안 된다 — 3.5%와 35%는 다른 값', ['C1'],
      '| 드로우 | 아웃츠 | 완성 확률 |\n|---|---|---|\n| 투페어+ | 6 | 3.5% |\n| 플러시 드로우 | 9 | 35% |\n| 거트샷 | 4 | 16.5% |',
      '| 드로우 | 아웃츠 | 완성 확률 |\n|---|---|---|\n| 투페어+ | 6 | 35% |\n| 플러시 드로우 | 9 | 35% |\n| 거트샷 | 4 | 16.5% |'],
    ['같은 개념인데 표기만 다른 열은 육안으로 올린다 (C2)', ['C2'],
      '| 드로우 | 아웃츠 | 플럽 승률 (×4) |\n|---|---|---|\n| 플러시 드로우 | 9장 | 약 36% |\n| 양방 스트레이트 | 8장 | 약 32% |\n| 거트샷 | 4장 | 약 16% |',
      '| 드로우 | 아웃츠 | 플랍 승률(×4) |\n|---|---|---|\n| 플러시 드로우 | 9장 | 약 35% |\n| 양방 스트레이트 | 8장 | 약 31% |\n| 거트샷 | 4장 | 약 17% |'],
  ];
  for (const [name, want, ca, cb] of CFIX) {
    const bs = new Map([['a', { slug: 'a', content: ca }], ['b', { slug: 'b', content: cb }]]);
    const st = { tables: 0, pairs: 0, rows: 0, rowsSkipped: 0, manual: 0 };
    const found = auditClusterTables('selftest', ['a', 'b'], bs, st);
    const codes = [...new Set(found.map((x) => x.code))].sort();
    const ok = codes.join(',') === [...want].sort().join(',');
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} [기대 ${want.length ? want.join('+') : '무음'}] ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  /* ── `--slug` 1편 모드에서 형제 대조가 살아 있는가 (2026-08-01 오진 재발 방지) ──
     이 배선이 끊기면 게이트는 조용히 초록이 되고, 그 침묵을 사람이 "검증됨"으로 읽는다.
     실제로 핸드오프에 "헤더 매칭 실패라 0쌍"이라는 **틀린 원인**이 기록돼 있었다. */
  const CONTRA_A = '| 벳 사이즈 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 40% |';
  const CONTRA_B = '| 오버벳 크기 | 밸류:블러프 | 블러프 비중 |\n|---|---|---|\n| 100% | 2:1 | 33% |\n| 200% | 1.5:1 | 25% |';
  const SAME_C = CONTRA_A.replace('벳 사이즈', '벳 크기');
  // 벳 사이즈 표와 헤더·행 키가 하나도 안 겹쳐 애초에 짝이 안 지어지는 표.
  const UNRELATED = '| 드로우 종류 | 아웃츠 | 플럽 승률 (×4) |\n|---|---|---|\n| 플러시 드로우 | 9장 | 약 36% |\n| 양방 스트레이트 | 8장 | 약 32% |\n| 거트샷 | 4장 | 약 16% |';
  const WFIX = [
    // focus를 줘도 그 글이 낀 모순은 그대로 잡아야 한다 (a↔b가 모순)
    ['focus=a — 내 글이 낀 모순은 잡는다', ['C1'], 'a',
      new Map([['a', { slug: 'a', content: CONTRA_A }], ['b', { slug: 'b', content: CONTRA_B }], ['c', { slug: 'c', content: SAME_C }]])],
    // 내가 손대지 않은 형제끼리(b↔c)의 모순으로 내 보고를 오염시키지 않는다.
    // a는 짝이 안 지어지는 다른 주제 표만 갖고 있으므로, 남는 모순은 b↔c뿐이다.
    ['focus=a — 형제끼리의 모순은 내 보고에 섞지 않는다', [], 'a',
      new Map([['a', { slug: 'a', content: UNRELATED }], ['b', { slug: 'b', content: CONTRA_A }], ['c', { slug: 'c', content: CONTRA_B }]])],
    // focus 없이(전체 모드) 돌리면 그 b↔c 모순은 당연히 잡아야 한다 — 위 무음이 "검사 죽음"이 아님을 증명한다
    ['focus 없음 — 같은 데이터에서 형제끼리의 모순은 잡는다', ['C1'], null,
      new Map([['a', { slug: 'a', content: UNRELATED }], ['b', { slug: 'b', content: CONTRA_A }], ['c', { slug: 'c', content: CONTRA_B }]])],
  ];
  for (const [name, want, focus, bs] of WFIX) {
    const st = { tables: 0, pairs: 0, rows: 0, rowsSkipped: 0, manual: 0 };
    const found = auditClusterTables('selftest', ['a', 'b', 'c'], bs, st, focus);
    const codes = [...new Set(found.map((x) => x.code))].sort();
    const ok = codes.join(',') === [...want].sort().join(',');
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} [기대 ${want.length ? want.join('+') : '무음'}] ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  /* slug → 클러스터 역인덱스. 이게 null이면 `--slug` 모드의 형제 대조가 통째로 안 돈다. */
  const KFIX = [
    ['필라 slug가 자기 클러스터를 찾는다', 'holdem-hand-rankings', '족보'],
    ['클러스터 글도 찾는다', 'holdem-overbet-strategy', '전략'],
    ['정의에 없는 slug는 null (조용히 오답 내지 말 것)', 'holdem-masters-7th-guide', null],
  ];
  for (const [name, slug, want] of KFIX) {
    const got = clusterOf(slug);
    const ok = got === want;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} [기대 ${want ?? 'null'}] ${name} → ${got ?? 'null'}`);
  }

  /* ── F13 산수 검산 자가 테스트 ──
     2026-07-31 position 글의 실제 오류("팟 오즈 = 2/4 = 33%")를 잡는지 고정한다. */
  const AFIX = [
    ['실제 사고 재현 — 2/4를 33%라고 씀', true, '2BB만 더 내면 4BB를 탈 수 있습니다. 팟 오즈 = 2/4 = 33%.'],
    ['분모가 합인 정상 계산 (울리면 안 됨)', false, '팟오즈 = 5,000 ÷ (10,000 + 5,000 + 5,000) × 100 = 25%'],
    ['분모 합이 틀린 경우 (잡아야 함)', true, '팟오즈 = 10,000 ÷ (20,000 + 10,000) × 100 = 25%'],
    ['반올림 오차는 봐준다 (울리면 안 됨)', false, '팟오즈 = 3,300 ÷ (13,300 + 3,300) × 100 = 20%'],
    ['곱셈이 섞인 분모도 푼다 (울리면 안 됨)', false, '필요 승률 = 10 ÷ (10 + 10 × 2) × 100 = 33.3%'],
    ['분모에 문자가 섞이면 판정하지 않는다 (오탐 금지)', false, '팟오즈 = 콜 ÷ (팟 + 상대 베팅 + 콜) × 100 = 25%'],
  ];
  for (const [name, shouldFire, content] of AFIX) {
    const found = auditArithmetic({ slug: 'selftest', content });
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  /* ── E1 축어 중복 자가 테스트 ──
     2026-08-01 masters-7th에서 표를 감싸는 <div style="..."> 래퍼 5쌍이
     "유사도 100% 축어 중복"으로 🔴 오탐을 냈다. 스타일 속성은 콘텐츠가 아니다.
     동시에 HTML 안에 든 진짜 산문 중복은 계속 잡아야 한다. */
  const WRAP = '<div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">';
  const DFIX = [
    ['표 감싸는 style div 반복 (울리면 안 됨)', false, `${WRAP}\n\n표1\n\n</div>\n\n${WRAP}\n\n표2\n\n</div>`],
    ['연속 <img> 나열 (울리면 안 됨)', false,
      '<img src="/images/a-1.webp" alt="공식 일정표 1" width="900" height="1270" loading="lazy" style="width:100%" />\n' +
      '<img src="/images/a-2.webp" alt="공식 일정표 2" width="900" height="1270" loading="lazy" style="width:100%" />'],
    ['HTML 안에 든 진짜 산문 중복 (잡아야 함)', true,
      '<p style="font-size:14px;line-height:1.7">새틀라이트 1~10위 안에 들면 초대권이 자동으로 지급됩니다.</p>\n' +
      '<p style="color:var(--muted)">새틀라이트 1~10위 안에 들면 초대권이 자동으로 지급됩니다.</p>'],
    ['평문 축어 중복은 그대로 잡는다 (잡아야 함)', true,
      '초대권을 따도 DAY1을 아무 날이나 가는 게 아니라 정해진 플라이트 날짜에 가야 합니다.\n\n' +
      '초대권을 따도 DAY1을 아무 날이나 가는 게 아니라 정해진 플라이트 날짜에 가야 합니다.'],
  ];
  /* ── F10 구조 배치 순서(§14-A 6) 자가 테스트 — stripe → 바로 답 ──
     라벨 존재만 보던 F1은 순서를 못 잡는다. 2026-08-02에 14편 중 6편이 역순이었다. */
  const OFIX = [
    ['stripe → 바로 답 정순 (울리면 안 됨)', false,
      ':::stripe\n정의 | 어쩌고\n:::\n\n> **바로 답**\n> 직답입니다.'],
    ['바로 답 → stripe 역순 (잡아야 함)', true,
      '> **바로 답**\n> 직답입니다.\n\n:::stripe\n정의 | 어쩌고\n:::'],
    ['stripe가 아예 없으면 순서 검사 대상이 아니다 (울리면 안 됨)', false,
      '> **바로 답**\n> 직답입니다.\n\n## 첫 번째 질문인가요?'],
  ];
  for (const [name, shouldFire, content] of OFIX) {
    const found = auditPost({ slug: 'selftest', title: 't', seoTitle: 't', desc: 'd', content, image: '/i.webp', imageAlt: 'a' }, new Set(['selftest']))
      .filter((x) => x.code === 'F10' && /stripe/.test(x.msg));
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  for (const [name, shouldFire, content] of DFIX) {
    const found = auditDuplication({ slug: 'selftest', content }).filter((x) => x.code === 'E1');
    const ok = shouldFire ? found.length > 0 : found.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    for (const x of found) console.log(`      → [${x.code}] ${x.msg}`);
  }

  const TOTAL = FIX.length + H7FIX.length + CFIX.length + WFIX.length + KFIX.length + AFIX.length + OFIX.length + DFIX.length;
  console.log(`\n${pass}/${TOTAL} 통과`);
  process.exit(pass === TOTAL ? 0 : 1);
}
const bySlug = new Map(POSTS.map((p) => [p.slug, p]));
const allSlugs = new Set(POSTS.map((p) => p.slug));
const srcMap = buildSourceMap();

let targets = [];
if (oneLocale && oneLocale !== 'ko') targets = [[`${oneLocale.toUpperCase()} 전체 (언어 불변 항목만)`, POSTS.map((p) => p.slug)]];
else if (oneSlug) targets = [['지정', [oneSlug]]];
else if (oneCluster) targets = [[oneCluster, CLUSTERS[oneCluster] ?? []]];
else if (wantAll) targets = [['KO 전체', POSTS.map((p) => p.slug)]];
else targets = Object.entries(CLUSTERS);

/* ── 클러스터 대조는 대상 목록이 다르다 ──
   게이트(F·H·E)는 "내가 편집한 글"만 보면 되지만, C유형은 **형제가 있어야 성립**한다.
   `--slug` 모드에서 대상 1편만 넘기면 짝이 0쌍이 되고, 그 침묵이 "검증됨"으로 오독된다.
   → 소속 클러스터 전원을 넘기되 focusSlug로 내 글이 낀 쌍만 보고한다. */
const focusCluster = oneSlug ? clusterOf(oneSlug) : null;
const clusterTargets = oneSlug
  ? (focusCluster ? [[focusCluster, CLUSTERS[focusCluster]]] : [])
  : targets;

const SEV_ORDER = { ERR: 0, WARN: 1, INFO: 2 };
const SEV_ICON = { ERR: '🔴', WARN: '🟠', INFO: '🟡' };
const report = [];

for (const [cluster, slugs] of targets) {
  // CLUSTERS 정의의 첫 원소가 그 클러스터의 필라다.
  // ★`--slug`/`--all`도 slug로 소속을 역인덱스해 F12를 살린다 — 예전엔 여기서 건너뛰는 바람에
  //   "경화하며 1편씩 돌릴 때만 필라 역링크 검사가 꺼져 있는" 상태였다(C유형과 같은 종류의 구멍).
  const clusterPillar = CLUSTERS[cluster] ? CLUSTERS[cluster][0] : null;
  for (const slug of slugs) {
    const pillar = clusterPillar ?? (CLUSTERS[clusterOf(slug)] ?? [])[0] ?? null;
    const post = bySlug.get(slug);
    if (!post) {
      report.push({ cluster, slug, src: '(없음)', findings: [{ sev: 'ERR', code: 'F0', msg: '슬러그가 존재하지 않음 — 클러스터 정의 오류' }] });
      continue;
    }
    const extra = [];
    // F12 — 클러스터 글은 필라를 내부링크로 연결해야 한다(§6 STEP 4 / posting.mdc 내부링크 규칙).
    // 이게 빠지면 필라를 띄우려는 클러스터 구조 자체가 작동하지 않는다.
    if (pillar && slug !== pillar && !(post.content ?? '').includes(`/blog/${pillar}`)) {
      extra.push({ sev: 'WARN', code: 'F12', msg: `필라(/blog/${pillar}) 역링크 없음 — 클러스터 구조가 작동하지 않는다` });
    }
    // 로케일 모드는 언어 불변 항목만 본다(위 loadLocalePosts 주석 참조).
    report.push({
      cluster, slug,
      src: oneLocale && oneLocale !== 'ko' ? `lib/posts-${oneLocale}/` : (srcMap.get(slug) ?? '?'),
      findings: oneLocale && oneLocale !== 'ko'
        ? [...auditHandsIn(post, PE), ...auditArithmetic(post)]
        : [...auditPost(post, allSlugs), ...auditHandsIn(post, PE), ...auditDuplication(post), ...auditArithmetic(post), ...extra],
    });
  }
}

if (wantJson) {
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

/* ── 사람용 출력 ── */
const W = (s, n) => (s + ' '.repeat(n)).slice(0, n);
console.log('\n══════ 경화 기계 게이트 (Layer 1) ══════');
console.log(`대상 ${report.length}편 · 기준 CLAUDE.md §8 §12-A §14 §14-A §17\n`);

let totalErr = 0, totalWarn = 0;
let curCluster = null;
for (const r of report) {
  if (r.cluster !== curCluster) { curCluster = r.cluster; console.log(`\n── [${curCluster}] ──`); }
  const errs = r.findings.filter((x) => x.sev === 'ERR');
  const warns = r.findings.filter((x) => x.sev === 'WARN');
  totalErr += errs.length; totalWarn += warns.length;
  const mark = errs.length ? '🔴' : warns.length ? '🟠' : '✅';
  console.log(`\n${mark} ${W(r.slug, 34)} ${errs.length}err ${warns.length}warn   ${r.src}`);
  for (const x of [...r.findings].sort((a, b) => SEV_ORDER[a.sev] - SEV_ORDER[b.sev])) {
    if (x.sev === 'INFO' && !argv.includes('--verbose')) continue;
    console.log(`   ${SEV_ICON[x.sev]} [${x.code}] ${x.msg}`);
    if (x.detail) for (const d of x.detail.slice(0, 6)) console.log(`        · ${d}`);
    if (x.detail && x.detail.length > 6) console.log(`        · … 외 ${x.detail.length - 6}건`);
  }
}

/* ── 클러스터 단위 대조 (C유형) — 글 1편 검수로는 원리상 못 잡는 자리 ── */
const clusterFindings = [];
const cStats = { tables: 0, pairs: 0, rows: 0, rowsSkipped: 0, manual: 0 };
for (const [cluster, slugs] of clusterTargets) {
  if (slugs.length < 2) continue;
  clusterFindings.push(...auditClusterTables(cluster, slugs, bySlug, cStats, oneSlug));
}
console.log('\n\n══════ 클러스터 교차 대조 (형제 글 간 모순) ══════');
if (oneSlug) {
  console.log(focusCluster
    ? `대상: ${oneSlug} ↔ [${focusCluster}] 형제 ${CLUSTERS[focusCluster].length - 1}편`
    : `대상: ${oneSlug} — 형제 없음`);
}
console.log(`표 ${cStats.tables}개 수집 · 같은 주제로 짝지어진 표 ${cStats.pairs}쌍 · 자동 대조한 행 ${cStats.rows}개 · 육안 대조 넘김 ${cStats.manual}쌍`);
if (cStats.rowsSkipped) {
  // 짝은 지어졌는데 행 키가 안 맞아 그냥 지나간 행들. "0건"이 이 공백을 덮지 않게 항상 보여준다.
  console.log(`ℹ 짝지어진 표 안에서 행 키가 안 맞아 대조 못 한 행 ${cStats.rowsSkipped}개 — 이 행들은 검증되지 않았다.`);
}
/* ★"0쌍"의 원인을 구분해서 말한다.
   예전엔 무조건 "헤더가 서로 달라 매칭 실패"라고 단정했는데, 실제 원인은 대부분
   **대상에 형제가 없어 애초에 대조를 시도조차 안 한 것**이었다(2026-08-01에 오진으로 판명).
   진단 메시지가 틀리면 사람이 엉뚱한 데를 고친다 — 게이트 자신의 한계도 정직해야 한다. */
if (!cStats.pairs) {
  if (oneSlug && !focusCluster) {
    console.log(`⚠ '${oneSlug}'가 CLUSTERS 정의에 없다 → 형제 대조를 **시도하지 않았다**. 헤더 문제가 아니다.`);
    console.log('   이 글도 클러스터 대조를 받게 하려면 scripts/audit-hardening.mjs의 CLUSTERS에 추가할 것.');
  } else if (!cStats.tables) {
    console.log('⚠ 대조할 표가 하나도 없다 → 이 대조는 아무것도 검증하지 못했다(글에 표가 없음).');
  } else {
    console.log(`⚠ 표 ${cStats.tables}개를 봤지만 짝이 0쌍 = 아무것도 검증하지 못했다(헤더·행 키가 서로 달라 매칭 실패).`);
  }
}
for (const x of clusterFindings) {
  console.log(`\n${SEV_ICON[x.sev]} [${x.code}] ${x.msg}`);
  for (const d of x.detail.slice(0, 12)) console.log(`     · ${d}`);
  if (x.detail.length > 12) console.log(`     · … 외 ${x.detail.length - 12}건`);
  if (x.sev === 'ERR') totalErr++; else totalWarn++;
}

const clean = report.filter((r) => !r.findings.some((x) => x.sev === 'ERR' || x.sev === 'WARN')).length;
console.log('\n══════ 요약 ══════');
console.log(`통과(무결) ${clean}/${report.length}편 · 🔴 ${totalErr}건 · 🟠 ${totalWarn}건`);

// 코드별 집계 — 어떤 규칙이 가장 많이 샜는지
const byCode = new Map();
for (const r of report) for (const x of r.findings) {
  if (x.sev === 'INFO') continue;
  const k = `${x.code}/${x.sev}`;
  byCode.set(k, (byCode.get(k) ?? 0) + 1);
}
/* F11 — FAQ 스키마는 빌드 산출물이 진실 (§14-A 5). `npm run build` 후 --schema 로 검사.
   주의: 산출물에서 "@type":"Question" 문자열은 이스케이프돼 0으로 세진다 → acceptedAnswer 로 센다. */
if (argv.includes('--schema')) {
  const dir = path.join(ROOT, '.next', 'server', 'app', 'blog');
  console.log('\n\n══════ FAQ 스키마 (빌드 산출물 기준) ══════');
  if (!fs.existsSync(dir)) {
    console.log('⚠ .next 산출물이 없다 — npm run build 를 먼저 돌려야 이 검사가 의미를 가진다.');
  } else {
    for (const r of report) {
      const html = path.join(dir, `${r.slug}.html`);
      if (!fs.existsSync(html)) { console.log(`  ⚠ ${r.slug}: 산출물 없음`); continue; }
      const txt = fs.readFileSync(html, 'utf8');
      // JSON-LD 블록이 페이지와 RSC 페이로드에 각각 실려 FAQPage 수만큼 중복 계수된다 → 나눠서 센다.
      const blocks = Math.max(1, (txt.match(/FAQPage/g) ?? []).length);
      const rendered = Math.round((txt.match(/acceptedAnswer/g) ?? []).length / blocks);
      const source = getFaq(bySlug.get(r.slug)?.content ?? '').filter((x) => x.form === 'ok').length;
      if (rendered === 0) { console.log(`  🔴 ${r.slug}: 리치결과 0문항 (소스 ${source}문항) — 스키마 미출력`); totalErr++; }
      else if (rendered !== source) console.log(`  🟠 ${r.slug}: 산출물 ${rendered}문항 / 소스 ${source}문항`);
    }
    console.log('  (출력 없으면 전편 소스=산출물 일치)');
  }
}

/* --uncovered — 기계가 판정 못 한 카드 문단을 원문 그대로 뽑는다. 사람이 직접 검산할 목록이다. */
if (argv.includes('--uncovered')) {
  const want = new Set(report.map((r) => r.slug));
  const list = UNCOVERED_PARAS.filter((u) => want.has(u.slug));
  console.log(`\n\n══════ 기계 미판정 카드 문단 ${list.length}개 — 직접 검산 대상 ══════`);
  let cur = null;
  for (const u of list) {
    if (u.slug !== cur) { cur = u.slug; console.log(`\n───── ${u.slug} ─────`); }
    console.log(`\n[L${u.line}] (${u.why})`);
    console.log(u.para.split('\n').map((l) => '  ' + l).join('\n'));
  }
  process.exit(0);
}

const approved = report.flatMap((r) => r.findings.filter((x) => x.msg.includes('[예외 승인]')).map((x) => `${r.slug} [${x.code}] ${x.msg}`));
if (approved.length) {
  console.log(`\n승인된 예외 ${approved.length}건 (통과가 아니라 "이유 있는 미준수"다):`);
  for (const a of approved) console.log(`  · ${a}`);
}

console.log('\n코드별:');
for (const [k, n] of [...byCode.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(10)} ${n}건`);

/* §13 커버리지 — "0건"이 검증인지 미검사인지 구분해서 보고한다(묵시적 축소 금지) */
let sSc = 0, sEv = 0, sPara = 0, sUn = 0, sFive = 0, sTab = 0;
const uncovered = [];
for (const r of report) {
  const st = HAND_STATS.get(r.slug);
  if (!st) continue;
  sSc += st.scenarios; sEv += st.evaluated; sPara += st.cardParas; sUn += st.unanchored;
  sFive += st.fiveCard; sTab += st.tableRows;
  if (st.cardParas > 0 && st.scenarios === 0 && st.fiveCard === 0 && st.tableRows === 0) {
    uncovered.push(`${r.slug} (카드 문단 ${st.cardParas})`);
  }
}
console.log('\n§13 자동 판정 커버리지:');
console.log(`  쇼다운 ${sSc}개(플레이어 ${sEv}명) · 5장 족보 예시 ${sFive}개 · 홀카드|보드 표 ${sTab}행 · 카드가 나온 문단 ${sPara}개`);
if (sUn) console.log(`  ⚠ 보드는 잡혔으나 홀카드 라벨이 없어 계산 못 한 문단 ${sUn}개`);
if (uncovered.length) {
  console.log(`  ⚠ 카드가 있으나 시나리오를 하나도 못 잡은 글 ${uncovered.length}편 — 이 글의 "0건"은 검증이 아니라 미검사다:`);
  for (const u of uncovered) console.log(`      · ${u}`);
}

process.exit(totalErr > 0 ? 1 : 0);
