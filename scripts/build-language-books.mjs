// 언어북 생성기 — 흩어진 언어별 자료(용어 정본·키워드 뱅크·현지 말투·계획/브리프·공통 용어 규칙)를
// `언어북/<loc>.md` 한 장으로 묶는다. 파일은 옮기지 않는다(문서 간 링크가 깨지지 않게) — 목차만 만든다.
// 실행: npm run langbook   (새 자료 파일을 만들면 다시 돌린다)
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const OUT = path.join(ROOT, '언어북');
const LOCALES = ['en', 'ar', 'bn', 'de', 'es', 'fa', 'fil', 'fr', 'he', 'hi', 'id', 'it', 'ja', 'ms', 'pl', 'pt', 'ro', 'ru', 'sw', 'th', 'tr', 'uk', 'vi', 'zh', 'zh-hant'];
const NAMES = { en: 'English', ar: 'العربية', bn: 'বাংলা', de: 'Deutsch', es: 'Español', fa: 'فارسی', fil: 'Filipino', fr: 'Français', he: 'עברית', hi: 'हिन्दी', id: 'Bahasa Indonesia', it: 'Italiano', ja: '日本語', ms: 'Bahasa Melayu', pl: 'Polski', pt: 'Português', ro: 'Română', ru: 'Русский', sw: 'Kiswahili', th: 'ไทย', tr: 'Türkçe', uk: 'Українська', vi: 'Tiếng Việt', zh: '简体中文', 'zh-hant': '繁體中文' };
// 파일 이름 별칭(로케일 코드와 다르게 붙은 것)
const ALIAS = { 'zh-hant': ['zh-hant', 'zh-tw'], es: ['es'] };
// multilingual-localization.mdc가 다루는 12개 언어
const MDC = ['en', 'ja', 'zh', 'es', 'de', 'ar', 'id', 'ms', 'vi', 'hi', 'tr']; // mdc «Prefer search-native» 목록 실측 10-16 (pt·fr·ru·zh-hant 없음)

const rel = (p) => path.relative(ROOT, p).split(path.sep).join('/');
const ls = (d) => (fs.existsSync(d) ? fs.readdirSync(d) : []);

// 이름이 «<code>-» 또는 «<code>.»로 시작하는가 — zh가 zh-hant·zh-tw를, fi가 fil을 먹지 않게
function owns(loc, name) {
  const codes = ALIAS[loc] || [loc];
  const hit = codes.some((c) => name.startsWith(c + '-') || name.startsWith(c + '.') || name === c);
  if (!hit) return false;
  for (const other of LOCALES) {
    if (other === loc || other.length <= loc.length) continue;
    const oc = ALIAS[other] || [other];
    if (oc.some((c) => c.startsWith(loc) && (name.startsWith(c + '-') || name.startsWith(c + '.') || name === c))) return false;
  }
  if (loc === 'zh' && /^zh-(tw|hant)/.test(name)) return false;
  return true;
}

function walk(dir, loc) {
  const out = [];
  for (const n of ls(dir)) {
    const full = path.join(dir, n);
    if (!owns(loc, n)) continue;
    if (fs.statSync(full).isDirectory()) {
      for (const m of ls(full)) out.push(path.join(full, m));
    } else out.push(full);
  }
  return out.sort();
}

const kb = (p) => `${(fs.statSync(p).size / 1024).toFixed(0)}KB`;
const line = (p) => `- \`${rel(p)}\` (${kb(p)})`;

fs.mkdirSync(OUT, { recursive: true });
const summary = [];
for (const loc of LOCALES) {
  const terms = path.join(ROOT, 'docs', `translation-terms-${loc}.md`);
  const sec = [
    ['① 용어 정본 — 족보·액션·숫자 표기·문체·도구/앱 UI 낱말 (글·도구·솔버 공용 · 🔴 가장 먼저)', fs.existsSync(terms) ? [terms] : []],
    ['② 키워드 뱅크 — 검색량·SERP·자동완성·조준 (도구 서치 «글 몫 발견» 절 포함)', walk(path.join(ROOT, 'docs', 'keyword-bank'), loc)],
    ['③ 현지 말투 — 현지 voice·표현 축적', walk(path.join(ROOT, 'docs', 'local-voice'), loc)],
    ['④ 계획·브리프·회차 기록 — 결정과 경위', [...walk(path.join(ROOT, 'docs'), loc).filter((p) => !p.includes('translation-terms-')), ...walk(path.join(ROOT, 'docs', 'tool-lanes'), loc)]],
  ];
  const body = [];
  body.push(`# 언어북 — ${loc} (${NAMES[loc]})`, '');
  body.push('> 🤖 `npm run langbook`이 만든 목차다. **직접 고치지 마라**(다시 돌리면 덮인다). 자료 본문은 각 링크 파일에 쓴다.');
  body.push('> 🔴 이 언어로 포스팅·번역·도구·검수·키워드 등 **어떤 작업이든 시작 전에 이 장을 열고, ①은 반드시 통독**, ②~⑤는 일감에 맞는 것을 읽는다.');
  body.push('> 다른 폴더(검수·솔버 등)에서는 `../Holdem_Project/언어북/' + loc + '.md`로 연다. 링크 경로는 레포 루트 기준.', '');
  let n = 0;
  for (const [title, files] of sec) {
    body.push(`## ${title}`, '');
    if (files.length) { body.push(...files.map(line)); n += files.length; } else body.push('- (없음)');
    body.push('');
  }
  body.push('## ⑤ 공통 용어 규칙 — 11개 언어 검색 관습 용어', '');
  body.push(MDC.includes(loc) ? '- `.cursor/rules/multilingual-localization.mdc` — 이 언어 절 있음' : '- (이 언어 절 없음 — `.cursor/rules/multilingual-localization.mdc`는 11개 언어만 다룬다)');
  body.push('', '## 함께 볼 공용 정본', '');
  body.push('- `.cursor/rules/posting.mdc` (포스트 작업 전 필수) · `REVIEW-PROTOCOL.md` (검수) · `docs/settled-decisions.md` (재론 금지) · `docs/tools-locale-rollout-plan.md` §4 (도구 전 언어 확장)');
  body.push('');
  fs.writeFileSync(path.join(OUT, `${loc}.md`), body.join('\n'));
  summary.push(`| [${loc}](${loc}.md) | ${NAMES[loc]} | ${n} |`);
}

const readme = [
  '# 언어북 (Language Books)',
  '',
  '> 언어별로 흩어진 자료 5종을 한 장씩 묶은 **목차**다. 파일은 원래 자리에 있고 여기엔 링크만 있다 — `npm run langbook`으로 다시 만든다(새 자료를 만들면 돌릴 것).',
  '> 🔴 **규칙: 어떤 언어로든 포스팅·번역·도구·검수·키워드 작업을 하기 전에 `언어북/<loc>.md`를 연다.** ① 용어 정본은 반드시 통독. 다른 폴더에서는 `../Holdem_Project/언어북/<loc>.md`.',
  '> 🔴 **작업 중 얻은 정보는 언어북이 가리키는 원래 파일에 쓴다**(용어 → ①, 검색어·SERP·글 후보 → ②, 말투 → ③). 이 폴더의 파일은 고치지 않는다.',
  '> 🔴 **다른 폴더(검수·솔버 등)는 읽기만 한다 — 직접 고치지 않는다.** 새로 얻은 정보는 우편함으로 «언어북 갱신 요청: 대상 파일·넣을 내용(원문 근거 포함)»을 보내고, 본체가 받아 원래 파일에 반영·커밋한다(사장님 10-16 · 받은 MA는 다음 세션 안에 반영+회신).',
  '',
  '| 자료 | 위치 |',
  '|---|---|',
  '| ① 용어 정본 | `docs/translation-terms-<loc>.md` |',
  '| ② 키워드 뱅크 | `docs/keyword-bank/<loc>-*` (+ `<loc>-serp/`) |',
  '| ③ 현지 말투 | `docs/local-voice/<loc>*.md` |',
  '| ④ 계획·브리프·회차 기록 | `docs/<loc>-*.md` · `docs/tool-lanes/<loc>-*` |',
  '| ⑤ 공통 용어 규칙 | `.cursor/rules/multilingual-localization.mdc` (11개 언어) |',
  '',
  '| 언어북 | 언어 | 자료 파일 수 |',
  '|---|---|---|',
  ...summary,
  '',
];
fs.writeFileSync(path.join(OUT, 'README.md'), readme.join('\n'));
console.log(`언어북 ${LOCALES.length}장 + README → ${rel(OUT)}/`);
