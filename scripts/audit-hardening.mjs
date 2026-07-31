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
};

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
const STRUCTURAL_H2 = /(FAQ|자주 묻는 질문|출처|참고 자료|참고자료|마무리|핵심 요약|이 글 핵심|먼저 보세요|한눈에 보기)/;
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
  if (faq.length === 0) add('ERR', 'F3', 'FAQ 문항 0개 — 리치결과 없음');
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
const PLAYER_RE = /(내\s*패|내\s*핸드|내\s*카드|나|상대\S{0,2}|플레이어\s*\S{0,3}|히어로|빌런|hero|villain|당신|홀카드)\s*[::]?\s*[*_=\s(]*$/i;
const PLAYER_AB_RE = /(^|\n|\|)\s*\**\s*[A-Z]\s*[::]\s*\**\s*$/;
const ROW_LABEL_RE = /^[|\s*]*(홀카드|핸드|패|hand)/i;

/** 족보 표기 → 정본 이름. 구체적인 것부터 검사해야 "플러시"가 "스트레이트 플러시"를 잡아먹지 않는다. */
const HAND_ALIASES = [
  ['로열 플러시', /로열\s*(스트레이트\s*)?플러시/],
  ['스트레이트 플러시', /스트레이트\s*플러시|스트플|스티플/],
  ['포카드', /포카드|포 ?카드|쿼드|포 ?오브 ?어 ?카인드/],
  ['풀하우스', /풀\s*하우스|풀하우스|보트/],
  ['플러시', /플러시/],
  ['스트레이트', /스트레이트|양차|백도어 ?스트/],
  ['트리플', /트리플|트립스|쓰리\s*카드|셋(?=[\s)*.,·]|$)/],
  ['투페어', /투\s*페어|투페어/],
  // 맨 "페어"는 뺀다 — "페어 2쌍"(=투페어) · "트리플 + 페어"(=풀하우스 구성 설명)를 원페어로 오독한다.
  ['원페어', /원\s*페어|오버\s*페어|탑\s*페어|바텀\s*페어|미들\s*페어|포켓\s*페어/],
  ['하이카드', /하이\s*카드/],
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
    const r = new RegExp(re.source, 'g');
    let m;
    while ((m = r.exec(text))) {
      if (!m[0].length) break;
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + 14);
      if (/^[\s는은이가도를로]{0,3}(없|불성립|아닙|아니|못|않)/.test(after)) continue;  // 부정은 주장이 아니다
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
    if (run.length === 1 && sawBoard && board.length < 5) { board.push(...run); continue; } // 턴·리버 공개
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

function auditHandsIn(post, PE) {
  const f = [];
  const add = (sev, code, msg, detail) => f.push({ sev, code, msg, detail });
  const c = post.content ?? '';
  const stat = { cardParas: 0, scenarios: 0, evaluated: 0, unanchored: 0, fiveCard: 0 };
  HAND_STATS.set(post.slug, stat);

  /* H5 — 5장 족보 예시 직접 판정.
     "| 5위 | 플러시 | A♠ J♠ 9♠ 6♠ 2♠ |" 처럼 족보 이름과 예시가 한 줄에 붙어 있는 형태.
     가드: 그 줄의 카드가 정확히 5장이고 런이 하나일 때만 — 홀카드+보드 표(7장)를 걸러낸다. */
  {
    const lines = c.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const ln = lines[i];
      const toks = tokenizeCards(ln);
      if (toks.length !== 5) continue;
      const runs = groupRuns(toks, ln);
      if (runs.length !== 1) continue;
      const named = namedHandIn(ln);
      if (!named) continue;
      if (distinctHandNames(ln) > 1) continue;   // 구성 설명 줄은 판정 근거가 안 된다
      stat.fiveCard++;
      const ids = runs[0].map((t) => t.id);
      if (new Set(ids).size !== 5) {
        add('ERR', 'H5', `L${i + 1} 5장 예시에 같은 카드 중복: ${ids.join(' ')}`, [ln.trim().slice(0, 110)]);
        continue;
      }
      const actual = PE.evalHand5(runs[0].map((t) => ({ rank: t.rank, suit: t.suit, id: t.id })));
      if (actual.koreanName !== named) {
        add('ERR', 'H5', `L${i + 1} 5장 족보 예시 불일치 — 글은 "${named}", 실제는 "${actual.koreanName}"`,
          [ln.trim().slice(0, 110), `→ ${ids.join(' ')} = ${actual.koreanName}`]);
      }
    }
  }
  const paras = [];
  let off = 0;
  for (const p of c.split(/\n[ \t]*\n/)) {
    paras.push({ text: p, line: c.slice(0, off).split('\n').length });
    off += p.length + 2;
  }

  for (const { text: para, line } of paras) {
    if (tokenizeCards(para).length >= 4) stat.cardParas++;
    const sc = extractScenario(para);
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
    .replace(/[.。!?·,·:：]/g, '')
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

function auditClusterTables(cluster, slugs, bySlug, stats) {
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
      if (jaccard(A.gram, B.gram) < 0.45 || !sameTopicTable(A, B)) continue;
      stats.pairs++;
      const mapB = new Map(B.rows.map((r) => [r[0], r]));
      const diffs = [];
      let matched = 0;
      for (const r of A.rows) {
        const b = mapB.get(r[0]);
        if (!b) continue;
        stats.rows++; matched++;
        for (let k = 1; k < Math.min(r.length, b.length); k++) {
          const na = numsOf(r[k]), nb = numsOf(b[k]);
          if (na && nb && na !== nb) diffs.push(`"${r[0]}" ${A.header[k] ?? k}: ${A.slug}=${r[k].slice(0, 28)} / ${B.slug}=${b[k].slice(0, 28)}`);
        }
      }
      if (diffs.length) {
        out.push({
          sev: 'ERR', code: 'C1',
          msg: `[${cluster}] 형제 글의 같은 표에서 수치 불일치 ${diffs.length}건 — ${A.slug}(L${A.line}) ↔ ${B.slug}(L${B.line})`,
          detail: diffs,
        });
      } else if (matched === 0) {
        // 같은 주제의 표인데 행 키가 달라 기계가 대조하지 못했다.
        // 여기서 침묵하면 "검증됨"으로 읽힌다 → 육안 대조 대상으로 올린다. (overbet↔bluffing 사고가 정확히 이 자리)
        stats.manual++;
        out.push({
          sev: 'WARN', code: 'C2',
          msg: `[${cluster}] 같은 주제 표인데 행 키가 달라 자동 대조 불가 — 육안 대조 필요: ${A.slug}(L${A.line}) ↔ ${B.slug}(L${B.line})`,
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

const POSTS = await loadPosts();
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
    ['로열 플러시를 "플러시"로 표기 (잡아야 함)', true,
      '- 플레이어 A: A♠ K♠ Q♠ J♠ 10♠ (스페이드 플러시)'],
    ['표 두 열의 베스트5는 별개다 (오탐 금지)', false,
      '| **홀카드** | K♠ 7♣ | K♥ 2♦ |\n| **보드** | K♦ K♣ Q♥ Q♦ J♠ | (동일) |\n| **베스트 5장** | K♠ K♦ K♣ Q♥ Q♦ | K♥ K♦ K♣ Q♥ Q♦ |\n| **결과** | 풀하우스 | 풀하우스 → **스플릿** |'],
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
  console.log(`\n${pass}/${FIX.length} 통과`);
  process.exit(pass === FIX.length ? 0 : 1);
}
const bySlug = new Map(POSTS.map((p) => [p.slug, p]));
const allSlugs = new Set(POSTS.map((p) => p.slug));
const srcMap = buildSourceMap();

let targets = [];
if (oneSlug) targets = [['지정', [oneSlug]]];
else if (oneCluster) targets = [[oneCluster, CLUSTERS[oneCluster] ?? []]];
else if (wantAll) targets = [['KO 전체', POSTS.map((p) => p.slug)]];
else targets = Object.entries(CLUSTERS);

const SEV_ORDER = { ERR: 0, WARN: 1, INFO: 2 };
const SEV_ICON = { ERR: '🔴', WARN: '🟠', INFO: '🟡' };
const report = [];

for (const [cluster, slugs] of targets) {
  for (const slug of slugs) {
    const post = bySlug.get(slug);
    if (!post) {
      report.push({ cluster, slug, src: '(없음)', findings: [{ sev: 'ERR', code: 'F0', msg: '슬러그가 존재하지 않음 — 클러스터 정의 오류' }] });
      continue;
    }
    report.push({
      cluster, slug, src: srcMap.get(slug) ?? '?',
      findings: [...auditPost(post, allSlugs), ...auditHandsIn(post, PE), ...auditDuplication(post)],
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
const cStats = { tables: 0, pairs: 0, rows: 0, manual: 0 };
for (const [cluster, slugs] of targets) {
  if (slugs.length < 2) continue;
  clusterFindings.push(...auditClusterTables(cluster, slugs, bySlug, cStats));
}
console.log('\n\n══════ 클러스터 교차 대조 (형제 글 간 모순) ══════');
console.log(`표 ${cStats.tables}개 수집 · 같은 주제로 짝지어진 표 ${cStats.pairs}쌍 · 자동 대조한 행 ${cStats.rows}개 · 육안 대조 넘김 ${cStats.manual}쌍`);
if (!cStats.pairs) console.log('⚠ 짝지어진 표가 없다 = 이 대조는 아무것도 검증하지 못했다(헤더가 서로 달라 매칭 실패).');
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

const approved = report.flatMap((r) => r.findings.filter((x) => x.msg.includes('[예외 승인]')).map((x) => `${r.slug} [${x.code}] ${x.msg}`));
if (approved.length) {
  console.log(`\n승인된 예외 ${approved.length}건 (통과가 아니라 "이유 있는 미준수"다):`);
  for (const a of approved) console.log(`  · ${a}`);
}

console.log('\n코드별:');
for (const [k, n] of [...byCode.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${k.padEnd(10)} ${n}건`);

/* §13 커버리지 — "0건"이 검증인지 미검사인지 구분해서 보고한다(묵시적 축소 금지) */
let sSc = 0, sEv = 0, sPara = 0, sUn = 0, sFive = 0;
const uncovered = [];
for (const r of report) {
  const st = HAND_STATS.get(r.slug);
  if (!st) continue;
  sSc += st.scenarios; sEv += st.evaluated; sPara += st.cardParas; sUn += st.unanchored; sFive += st.fiveCard;
  if (st.cardParas > 0 && st.scenarios === 0 && st.fiveCard === 0) uncovered.push(`${r.slug} (카드 문단 ${st.cardParas})`);
}
console.log('\n§13 자동 판정 커버리지:');
console.log(`  쇼다운 시나리오 ${sSc}개(플레이어 ${sEv}명) · 5장 족보 예시 ${sFive}개 · 카드가 나온 문단 ${sPara}개`);
if (sUn) console.log(`  ⚠ 보드는 잡혔으나 홀카드 라벨이 없어 계산 못 한 문단 ${sUn}개`);
if (uncovered.length) {
  console.log(`  ⚠ 카드가 있으나 시나리오를 하나도 못 잡은 글 ${uncovered.length}편 — 이 글의 "0건"은 검증이 아니라 미검사다:`);
  for (const u of uncovered) console.log(`      · ${u}`);
}

process.exit(totalErr > 0 ? 1 : 0);
