/**
 * 직답 블록 검사 — 「> **바로 답**」 계열 블록이 «그 절 본문을 축어로 되풀이»하는 자리를 잡는다.
 *
 * 왜 만들었나 (2026-09-10 · 대기열 9-ⓑ + 37-③)
 *   zh-hant §5-36: **렌즈 두 개가 독립으로 약 40자리**의 축어 중복을 찾았는데 **기존 게이트 6종은 한 건도 못 봤다.**
 *     제안 = 「블록 ↔ 그 절 전체 LCS ≥ 9자」. 🔴 «바로 다음 문단»만 보면 안 된다 —
 *     `hand-rankings` L286↔L299처럼 **절 끝의 중복**을 놓친다.
 *   ja §5-D 3: 회차 6이 «블록 전체 ↔ 절 본문 LCS 18자 + 90~170자 + H2 직후 첫 요소 + 중첩볼드»를
 *     임시 스크립트로 돌려 **렌즈 반영이 만든 이탈 5건**을 잡았다(길이 초과 3 · LCS 2) → 정식 게이트로 승격.
 *
 *   근본 원인: §14-A가 «각 H2 직후 40~75단어 직답»을 요구하는데, 직답을 넣는 가장 쉬운 방법이
 *   본문 문장을 그대로 올리는 것이다. 그러면 독자는 같은 문장을 두 번 읽는다(교열 렌즈만 잡던 유형).
 *
 * 검사 3종
 *   echo    블록 ↔ 그 절 본문(블록 제외)의 최장 공통 부분문자열이 임계 이상   🔴
 *   length  블록 길이가 규격 밖                                              🟠
 *   place   블록이 H2 직후 첫 요소가 아님                                     🟠
 *
 * 임계 — «표의문자·가나·한글만 센 길이» 기준(숫자·라틴·기호는 안 센다)
 *   zh·zh-hant·ja 18자 · ko 14자 · en 35자(알파벳)
 *   🔴 원 제안값(zh 9 · ja 18 «원 문자» 기준)은 **이미 경화된 9편**에서 얻은 값이라 전 코퍼스에선 낮았다.
 *      첫 실행 385건 → 표본 전건 판정 → 나열·공식·수치를 걷어내고 표의문자 기준으로 재정의했다. 아래 MIN_LCS 주석 참조.
 *
 * 사용
 *   npm run check:answer-echo
 *   npm run check:answer-echo -- --locale=ja
 *   npm run check:answer-echo -- --slug=holdem-hand-rankings
 *   npm run check:answer-echo -- --only=echo        (echo|length|place)
 *   npm run check:answer-echo -- --strict           🔴 있으면 exit 1
 *   npm run check:answer-echo:selftest
 *
 * 한계(원리상): **글자가 겹치지 않고 «내용»만 어긋나는 결함은 못 본다**(ja §5-A가 기록한 자리).
 *   고유명사가 길면 오탐이 난다 — `PROPER_NOUNS`에 등재해 면제한다(ja 「Country Exclusives」 18자 선례).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');

const args = process.argv.slice(2);
const opt = (n) => (args.find((a) => a.startsWith(`--${n}=`)) ?? '').split('=')[1] || null;
const has = (n) => args.includes(`--${n}`);

/** 로케일별 직답 라벨(실측 2026-09-10 · 코퍼스 빈도) */
const LABELS = {
  ko: ['바로 답'],
  en: ['Quick answer'],
  ja: ['先に結論'],
  zh: ['快速回答'],
  'zh-hant': ['快速解答'],
};
const DIR = (loc) => (loc === 'ko' ? path.join(LIB, 'posts') : path.join(LIB, `posts-${loc}`));

/**
 * 최장 공통 부분문자열 임계 — «표의문자·가나·한글만 센 길이»(cjkLen) 기준.
 * 🔴 2026-09-10 첫 실행 튜닝: 원 문자 수로 재면 zh 9자·ja 18자에서 385건이 떴고, 표본 판정 결과
 *    대부분이 «같은 주제라 자연히 겹치는» 배경이었다(분포의 92%가 20자 미만).
 *    §5-36의 「9자」·§5-D의 「18자」는 **이미 경화된 9편**을 대상으로 얻은 값이라 전 코퍼스에선 낮다.
 *    표의문자만 세고 «나열·공식·수치»를 걷어낸 뒤의 값으로 다시 잡았다.
 */
const MIN_LCS = { zh: 18, 'zh-hant': 18, ja: 18, ko: 14, en: 35 };
/** LCS 탐색 하한(원 문자 기준) — 이보다 짧으면 cjkLen이 임계에 닿을 수 없다 */
const SCAN_MIN = 12;

/** 표의문자·가나·한글만 센다(숫자·라틴·기호·구두점 제외) */
const cjkLen = (s) => (s.match(/[぀-ヿ㐀-䶿一-鿿가-힯]/g) ?? []).length;
const enLen = (s) => (s.match(/[a-z]/g) ?? []).length;

/**
 * «되풀이»가 아닌 겹침 — 첫 실행 전건 판정에서 나온 3유형.
 *   나열  구분자 3개 이상 (「ストレート、フラッシュ、フルハウス、…」 족보 나열 · 포지션 순서)
 *   공식  수식 기호 4개 이상 (「=(コール額÷ヒット率)−(現在のポット+コール額)」)
 * 둘 다 «직답과 본문이 같은 값을 적는 것»이지 문장을 되풀이하는 것이 아니다.
 */
function isEnumerationOrFormula(s) {
  const seps = (s.match(/[、，,・･]/g) ?? []).length;
  const ops = (s.match(/[=÷×−+%()（）→~]/g) ?? []).length;
  return seps >= 3 || ops >= 4;
}
/**
 * 블록 길이 규격(정규화 후 문자 수) — 🔴 로케일별(2026-09-11 · ja 회차 10 §5-H 1).
 *   ja  90~170  = ja 회차 10 브리프 규격(가나가 섞여 중문보다 길다 · 378블록 전수가 이 안)
 *   zh·zh-hant 60~130 = 헤드 판정 2026-09-11 (6)(정본 `docs/settled-decisions.md` §3 「직답 블록 길이 규격 로케일표」 · 프로토콜 §4).
 *     🔴 «60~110»으로 되돌리지 마라 — 세 근거가 130에 수렴한다: ① ja 정본 170 × zh/ja 같은 절 실측 비율 med 0.74(309블록) = 126
 *     ② 코퍼스 p90 zh 129 · zh-hant 114 ③ 이 카운터는 숫자·라틴·구두점을 세는데 zh 블록의 29.5%가 그것이다(zh-hant 18.4% · ja 13.5%)
 *     — zh는 outs·c-bet·bubble factor 같은 라틴 용어가 많아 같은 정보량에 글자가 더 든다. 110은 순한자 기준 값이었다.
 *   ko  90~170 (임시 · 실측 블록 2개뿐이라 판정 근거 없음) · en 은 단어 단위 규격이라 이 카운터로 재지 않는다(측정 0).
 *   🪶 09-11 실측: 단일 90~170으로 재면 zh 68·zh-hant 131이 «아래로» 걸리고, 60~110으로 재면 zh 137·zh-hant 53이 «위로» 걸린다 · 60~130이면 zh 33(미달 3)·zh-hant 9(미달 6)
 *   (zh 중앙값 107 · zh-hant 93). 규격을 바꾼다고 부채가 사라지는 게 아니라 «어느 쪽이 걸리는가»가 바뀐다 — 상한 판정은 헤드 미결.
 */
const LEN_BY_LOCALE = {
  ja: { min: 90, max: 170 },
  zh: { min: 60, max: 130 },
  'zh-hant': { min: 60, max: 130 },
  ko: { min: 90, max: 170 },
};
const LEN_DEFAULT = { min: 90, max: 170 };
const lenSpec = (loc) => LEN_BY_LOCALE[loc] ?? LEN_DEFAULT;

/** 고유명사·정형 문구 — 이만큼 겹쳐도 «되풀이»가 아니다 */
const PROPER_NOUNS = [
  'Country Exclusives', 'Paradise City', 'PokerStars', 'Mystery Bounty', 'High Roller',
  'World Series of Poker', 'Main Event', 'holdemmaster.com', 'Texas Hold', 'Day 1',
];

/** 길이 규격을 면제하는 글 — 물류 정보(일정·비자·숙소)는 직답이 표 대용이다(핸드오프 판정 13-ⓑ) */
const LENGTH_EXEMPT = /^(?:wpt-|ept-|apt-|wsop-|korea-poker-marathon|japan-poker|taiwan-|como-entrar)/;

/** 마크다운 장식을 걷어낸다 */
function normalize(s, loc) {
  let t = s
    .replace(/^>\s?/gm, '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^:::.*$/gm, ' ')
    .replace(/[*_~`]/g, '')
    .replace(/==[a-z]:/g, '')
    .replace(/==/g, '')
    .replace(/^#+\s*/gm, '')
    .replace(/\|/g, ' ');
  if (loc === 'en') return t.replace(/\s+/g, ' ').trim().toLowerCase();
  return t.replace(/\s+/g, '');
}

/** 길이 L의 공통 부분문자열이 있으면 그 하나를 돌려준다 */
function commonAt(a, b, L) {
  if (a.length < L || b.length < L) return null;
  const set = new Set();
  for (let i = 0; i + L <= a.length; i++) set.add(a.slice(i, i + L));
  for (let i = 0; i + L <= b.length; i++) { const g = b.slice(i, i + L); if (set.has(g)) return g; }
  return null;
}

/** 임계 이상이면 «최장»을 찾아 돌려준다(없으면 null) */
export function longestCommon(a, b, minL) {
  if (!commonAt(a, b, minL)) return null;
  let best = commonAt(a, b, minL);
  for (let L = minL + 1; L <= Math.min(a.length, b.length); L++) {
    const hit = commonAt(a, b, L);
    if (!hit) break;
    best = hit;
  }
  return best;
}

const exempt = (s, loc) => {
  const cmp = loc === 'en' ? s : s.replace(/\s+/g, '');
  return PROPER_NOUNS.some((p) => {
    const q = loc === 'en' ? p.toLowerCase() : p.replace(/\s+/g, '');
    return cmp.includes(q) && cmp.replace(q, '').length < MIN_LCS[loc];
  });
};

const contentOf = (src) => { const m = src.match(/content:\s*`([^`]*)`/); return m ? m[1] : ''; };

/**
 * 한 편을 검사한다. 절(H2) 단위로 잘라 그 안의 직답 블록을 본문 나머지와 견준다.
 */
export function inspect(content, loc, labels = LABELS[loc] ?? []) {
  const out = [];
  const lines = content.split('\n');
  // H2 경계로 절을 나눈다
  const sections = [];
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) { cur = { head: lines[i].replace(/^##\s+/, '').trim(), from: i, lines: [] }; sections.push(cur); continue; }
    if (cur) cur.lines.push({ i, t: lines[i] });
  }
  for (const sec of sections) {
    // 이 절의 직답 블록(연속된 `>` 줄) 찾기
    for (let k = 0; k < sec.lines.length; k++) {
      const t = sec.lines[k].t;
      const m = t.match(/^>\s*\*\*([^*\n]{1,20})\*\*/);
      if (!m || !labels.some((L) => m[1].trim().startsWith(L))) continue;
      let end = k;
      while (end + 1 < sec.lines.length && /^>/.test(sec.lines[end + 1].t)) end++;
      const blockRaw = sec.lines.slice(k, end + 1).map((x) => x.t).join('\n');
      const restRaw = sec.lines.filter((_, j) => j < k || j > end).map((x) => x.t).join('\n');
      const block = normalize(blockRaw.replace(/^>\s*\*\*[^*\n]{1,20}\*\*\s*/, ''), loc);
      const rest = normalize(restRaw, loc);
      const at = `L${sec.lines[k].i + 1}`;

      // ① echo — 원 문자로 찾고, 판정은 «표의문자 길이 + 나열·공식 제외»로 한다
      const hit = longestCommon(block, rest, SCAN_MIN);
      const eff = hit ? (loc === 'en' ? enLen(hit) : cjkLen(hit)) : 0;
      if (hit && eff >= (MIN_LCS[loc] ?? 14) && !isEnumerationOrFormula(hit) && !exempt(hit, loc)) {
        out.push({ kind: 'echo', at, head: sec.head, len: eff, raw: hit.length, sample: hit.slice(0, 40) });
      }
      // ② length
      out.push({ kind: 'length', at, head: sec.head, len: block.length });
      // ③ place — H2 직후 첫 «내용» 요소여야 한다(빈 줄·이미지·디렉티브는 건너뛴다)
      let first = 0;
      while (first < k && (sec.lines[first].t.trim() === '' || /^(?:!\[|:::|<)/.test(sec.lines[first].t.trim()))) first++;
      if (first < k) out.push({ kind: 'place', at, head: sec.head, before: sec.lines[first].t.trim().slice(0, 40) });
      break; // 절당 첫 직답 블록만
    }
  }
  return out;
}

function selftest() {
  const cases = [];
  const mk = (body) => body;
  // echo — 블록이 본문 문장을 그대로 되풀이
  cases.push(['zh 축어 되풀이를 잡는다', 'zh',
    '## 標題\n> **快速回答** 翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。\n\n正文說明。翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。', 'echo', 1]);
  cases.push(['zh 겹침이 짧으면 통과', 'zh',
    '## 標題\n> **快速回答** 用小尺寸下注最好。\n\n完全不同的正文內容在這裡展開敘述。', 'echo', 0]);
  cases.push(['🔴 절 «끝»의 중복도 잡는다(바로 다음 문단만 보면 놓친다)', 'zh',
    '## 標題\n> **快速回答** 翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。\n\n中間段落完全無關的內容寫在這裡。\n\n再來一段也是無關的敘述。\n\n最後才說翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。', 'echo', 1]);
  cases.push(['ja 임계 미만은 통과', 'ja',
    '## 見出し\n> **先に結論** ポットの三分の一が基準です。\n\nまったく別の本文がここに続きます。', 'echo', 0]);
  cases.push(['나열(구분자 3개 이상)은 되풀이가 아니다', 'ja',
    '## 見出し\n> **先に結論** ストレート、フラッシュ、フルハウス、ストレートフラッシュの順です。\n\n強い順は ストレート、フラッシュ、フルハウス、ストレートフラッシュ です。', 'echo', 0]);
  cases.push(['공식(수식 기호 4개 이상)은 되풀이가 아니다', 'ja',
    '## 見出し\n> **先に結論** 期待値=(コール額÷ヒット率)−(現在のポット+コール額)で求めます。\n\n計算式は 期待値=(コール額÷ヒット率)−(現在のポット+コール額) です。', 'echo', 0]);
  cases.push(['숫자·라틴만 겹치면 되풀이가 아니다', 'zh',
    '## 標題\n> **快速回答** 盲注會從 25/50→50/100→100/200 一路上漲。\n\n上漲節奏是 25/50→50/100→100/200 這樣。', 'echo', 0]);
  cases.push(['ja 18자 이상 되풀이를 잡는다', 'ja',
    '## 見出し\n> **先に結論** フロップのコンティニュエーションベットは小さめのサイズが基準になります。\n\nフロップのコンティニュエーションベットは小さめのサイズが基準になります。', 'echo', 1]);
  cases.push(['고유명사는 면제', 'ja',
    '## 見出し\n> **先に結論** Country Exclusivesが対象です。\n\n別の話題。Country Exclusivesという枠があります。', 'echo', 0]);
  cases.push(['라벨이 없으면 검사 대상이 아니다', 'zh',
    '## 標題\n> **提示** 翻牌圈的持續下注應該用小尺寸。\n\n翻牌圈的持續下注應該用小尺寸。', 'echo', 0]);
  // place
  cases.push(['H2 직후가 아니면 place', 'zh',
    '## 標題\n先出現的正文段落。\n\n> **快速回答** 一句話。\n', 'place', 1]);
  cases.push(['H2 직후면 place 아님', 'zh',
    '## 標題\n> **快速回答** 一句話。\n\n正文。', 'place', 0]);
  cases.push(['이미지가 앞서도 H2 직후로 본다', 'zh',
    '## 標題\n![圖](/images/x.webp)\n\n> **快速回答** 一句話。\n', 'place', 0]);
  let pass = 0;
  for (const [name, loc, body, kind, want] of cases) {
    const got = inspect(mk(body), loc).filter((r) => r.kind === kind).length;
    const ok = got === want;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${name} — want ${want} got ${got}`);
  }
  // length는 항상 1건 산출되므로 값으로 검증
  const lenRow = inspect('## 標題\n> **快速回答** 短。\n', 'zh').find((r) => r.kind === 'length');
  const okLen = lenRow && lenRow.len === 2;  // 「短。」 = 문장부호 포함 2자
  if (okLen) pass++; else console.log('❌ length 계수');
  console.log(`${okLen ? '✅' : '❌'} 길이 계수 — want 2 got ${lenRow ? lenRow.len : 'null'}`);
  console.log(`selftest ${pass}/${cases.length + 1}`);
  process.exit(pass === cases.length + 1 ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const locales = (opt('locale') ?? Object.keys(LABELS).join(',')).split(',');
  const only = opt('only');
  const slug = opt('slug');
  let red = 0, amber = 0, blocks = 0, files = 0;
  const lines = [];
  for (const loc of locales) {
    const dir = DIR(loc);
    if (!fs.existsSync(dir)) { lines.push(`⚠ ${loc} — 디렉터리 없음`); continue; }
    for (const f of fs.readdirSync(dir).sort()) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      const s = f.replace(/\.ts$/, '');
      if (slug && s !== slug) continue;
      const c = contentOf(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (!c) continue;
      files++;
      const rows = inspect(c, loc);
      blocks += rows.filter((r) => r.kind === 'length').length;
      const bad = [];
      for (const r of rows) {
        if (only && r.kind !== only) continue;
        if (r.kind === 'echo') { red++; bad.push(`  🔴 echo   ${r.at} 「${r.head}」 LCS ${r.len}자(원문 ${r.raw}) — ${r.sample}`); }
        const LEN = lenSpec(loc);
        if (r.kind === 'length' && !LENGTH_EXEMPT.test(s) && (r.len < LEN.min || r.len > LEN.max)) {
          amber++; bad.push(`  🟠 length ${r.at} 「${r.head}」 ${r.len}자 (규격 ${loc} ${LEN.min}~${LEN.max})`);
        }
        if (r.kind === 'place') { amber++; bad.push(`  🟠 place  ${r.at} 「${r.head}」 앞에: ${r.before}`); }
      }
      if (bad.length) lines.push(`${loc}/${s}`, ...bad);
    }
  }
  console.log(`직답 블록 검사 · 로케일 ${locales.join(',')} · 파일 ${files} · 블록 ${blocks} · 🔴 echo ${red} · 🟠 그밖 ${amber}`);
  for (const l of lines) console.log(l);
  console.log(`\n🪶 임계 = ${Object.entries(MIN_LCS).map(([k, v]) => `${k} ${v}자`).join(' · ')} · 길이 규격 = ${Object.entries(LEN_BY_LOCALE).map(([k, v]) => `${k} ${v.min}~${v.max}`).join(' · ')}(그밖 ${LEN_DEFAULT.min}~${LEN_DEFAULT.max}) · 길이 면제 = 이벤트 가이드(물류 정보는 직답이 표 대용 · 판정 13-ⓑ)`);
  console.log('🪶 원리상 못 보는 것: 글자가 겹치지 않고 «내용»만 어긋나는 결함(ja §5-A 유형) — 그 자리는 렌즈 몫이다.');
  if (has('strict') && red) process.exit(1);
}

main();
