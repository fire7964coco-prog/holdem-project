/**
 * 거울쌍 대조 — 같은 slug의 두 로케일(기본 zh ↔ zh-hant)에서 «언어 불변 항목»이 갈린 자리를 찾는다.
 *
 * 왜 만들었나 (2026-09-06 · 경화 프로토콜 §7-D):
 *   zh·zh-hant는 슬러그 42편이 완전히 겹치는 거울쌍이다. 용어는 달라도(概率/機率 · 弃牌/蓋牌)
 *   카드·비율·화폐·bb·날짜·룰 번호는 같아야 한다. 2026-09-06에 둘 다 A5s 블로커를 「AA 和 KK」로
 *   똑같이 틀리고 있었다 — «둘이 같다»는 교차검증이 아니므로, 이 게이트는 «갈림»만 잡고 판정은 사람이 EN 원문으로 한다.
 *
 * 무엇을 비교하나 (토큰 클래스 · 기본은 «집합» 비교 = 한쪽에만 «존재»하는 값)
 *   card   A♠ K♥ 10♦ (T♠는 10♠로 정규화)
 *   pct    12.5% · 33,3% · 97.0%→97% · ％→%
 *   money  $1,050 · €690 · NT$3,000 (천단위 구분자 제거 · $1.000 = $1,000)
 *   bb     2.5bb · 100BB
 *   rule   Rule 84 · 規則 16 · 第 73 條 (🔴 「第1天」 같은 일차 표기는 룰이 아니다 — 條/条 필수)
 *   date   2026-09-06 · 9月11日 → 9/11 · 9/11 (월 1~12 · 일 1~31만)
 *
 * 판정
 *   🔴 DIFF   한쪽에만 있는 값(클래스별 목록) — 전건 원문 판정 대상
 *   ✅ SAME   클래스 전부 동일
 *
 * 사용
 *   npm run check:mirror-pair                          zh↔zh-hant 전편
 *   npm run check:mirror-pair -- --slug=holdem-3bet
 *   npm run check:mirror-pair -- --locale-pair=zh,zh-hant
 *   npm run check:mirror-pair -- --multiset            등장 «횟수»까지 비교(FAQ 문항 수 차이가 전부 뜬다 — 노이즈 큼)
 *   npm run check:mirror-pair -- --strict              DIFF가 있으면 exit 1
 *   npm run check:mirror-pair:selftest
 *
 * 한계(원리상): 값이 «똑같이 틀린» 자리는 못 본다. 「1/8」 같은 분수는 날짜로 잡힐 수 있다.
 *   «갈림 = 결함»이 아니라 «갈림 = 판정 대상»이다. 첫 실행 결과는 전건 원문으로 판정하라(게이트 튜닝 규율).
 *   2026-09-06 첫 튜닝: 다중집합 → 집합(개수 차가 42편 중 20편을 빨갛게 만들었다) · 第N天 오탐 · T/10 표기 · 月日/M-D 표기.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');

const args = process.argv.slice(2);
const opt = (name) => (args.find((a) => a.startsWith(`--${name}=`)) ?? '').split('=')[1] || null;
const has = (name) => args.includes(`--${name}`);

const CLASSES = {
  card: /(?<![A-Za-z0-9])(?:10|[AKQJT2-9])[♠♥♦♣]/g,
  pct: /\d+(?:[.,]\d+)?\s?[%％]/g,
  money: /(?:NT\$|US\$|HK\$|S\$|RM|[$€£¥])\s?\d[\d,.]*/g,
  bb: /\d+(?:[.,]\d+)?\s?(?:bb|BB)(?![A-Za-z])/g,
  rule: /(?:Rule|規則|规则)\s?\d+(?:\.\w+)?|第\s?\d+\s?(?:條|条)/g,
  date: /\d{4}-\d{2}-\d{2}|(?:1[0-2]|[1-9])\s?月\s?(?:3[01]|[12]?\d)\s?日|(?<![\d/])(?:1[0-2]|[1-9])\/(?:3[01]|[12]?\d)(?![\d/])/g,
};

const NORM = {
  card: (t) => t.replace(/^T/, '10'),
  pct: (t) => t.replace(/\s+/g, '').replace('％', '%').replace(',', '.').replace(/\.0+%$/, '%'),
  money: (t) => t.replace(/\s+/g, '').replace(/[,.](?=\d{3}(?!\d))/g, ''),
  bb: (t) => t.replace(/\s+/g, '').replace(',', '.').toLowerCase(),
  rule: (t) => t.replace(/\s+/g, '').replace(/規則|规则/, 'Rule').replace(/^第(\d+)(?:條|条)$/, 'Rule$1'),
  date: (t) => t.replace(/\s+/g, '').replace(/^(\d{1,2})月(\d{1,2})日$/, '$1/$2'),
};

/** content 필드만 꺼낸다(메타의 날짜·slug는 비교 대상이 아니다). 본문에 백틱은 금지(§12-A)라 첫 백틱 쌍이 곧 본문이다 */
function contentOf(src) {
  const m = src.match(/content:\s*`([^`]*)`/);
  return m ? m[1] : src;
}

function tokens(src) {
  const c = contentOf(src);
  const out = {};
  for (const [cls, re] of Object.entries(CLASSES)) {
    const bag = new Map();
    for (const m of c.matchAll(re)) {
      const k = NORM[cls](m[0]);
      bag.set(k, (bag.get(k) ?? 0) + 1);
    }
    out[cls] = bag;
  }
  return out;
}

function diffBags(a, b, multiset) {
  const onlyA = [], onlyB = [];
  for (const [k, n] of a) { const m = b.get(k) ?? 0; if (multiset ? n > m : m === 0) onlyA.push(multiset && n - m > 1 ? `${k}×${n - m}` : k); }
  for (const [k, n] of b) { const m = a.get(k) ?? 0; if (multiset ? n > m : m === 0) onlyB.push(multiset && n - m > 1 ? `${k}×${n - m}` : k); }
  return { onlyA, onlyB };
}

export function compare(srcA, srcB, { multiset = false } = {}) {
  const ta = tokens(srcA), tb = tokens(srcB);
  const result = {};
  let diff = 0;
  for (const cls of Object.keys(CLASSES)) {
    const d = diffBags(ta[cls], tb[cls], multiset);
    result[cls] = d;
    diff += d.onlyA.length + d.onlyB.length;
  }
  return { diff, result };
}

function selftest() {
  const mk = (body) => `export const POST = { slug: "x", updated: "2026-01-01", content: \`${body}\` };`;
  const cases = [
    ['동일 토큰 · 용어만 다름 → SAME', mk('概率 33.3% A♠K♥ $1,050 2.5bb Rule 84'), mk('機率 33,3% A♠K♥ $1,050 2.5bb 規則 84'), 0],
    ['카드가 갈림', mk('A♠ K♦'), mk('A♠ K♥'), 2],
    ['비율이 갈림', mk('胜率 28%'), mk('勝率 30%'), 2],
    ['개수 차는 기본(집합)에서 무시', mk('12% 12%'), mk('12%'), 0],
    ['메타 날짜는 비교 안 함', mk('본문').replace('2026-01-01', '2026-02-02'), mk('본문'), 0],
    ['룰 번호 갈림', mk('Rule 16'), mk('第 18 條'), 2],
    ['第N條 = Rule N 동일', mk('Rule 16'), mk('第16條'), 0],
    ['第1天(일차)은 룰이 아니다', mk('第1天 開賽'), mk('Day 1'), 0],
    ['bb 갈림', mk('open 2.5bb'), mk('open 3bb'), 2],
    ['bb 대소문자 동일', mk('100BB'), mk('100bb'), 0],
    ['T♠ = 10♠', mk('T♠ T♥'), mk('10♠ 10♥'), 0],
    ['97.0% = 97%', mk('97.0%'), mk('97%'), 0],
    ['9月11日 = 9/11', mk('9月11日'), mk('9/11'), 0],
    ['24/7은 날짜가 아니다', mk('24/7 營業'), mk('全天'), 0],
    ['$215.000 = $215,000', mk('$215.000'), mk('$215,000'), 0],
    ['화폐 값 갈림', mk('$290'), mk('$550'), 2],
  ];
  let pass = 0;
  for (const [name, a, b, want] of cases) {
    const got = compare(a, b).diff;
    const ok = got === want;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} ${name} — want ${want} got ${got}`);
  }
  console.log(`selftest ${pass}/${cases.length}`);
  process.exit(pass === cases.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const [la, lb] = (opt('locale-pair') ?? 'zh,zh-hant').split(',');
  const dirA = path.join(LIB, `posts-${la}`), dirB = path.join(LIB, `posts-${lb}`);
  const only = opt('slug');
  const multiset = has('multiset');
  const list = (d) => fs.readdirSync(d).filter((f) => f.endsWith('.ts') && f !== 'index.ts').map((f) => f.replace(/\.ts$/, ''));
  const A = new Set(list(dirA)), B = new Set(list(dirB));
  const slugs = [...A].filter((s) => B.has(s)).filter((s) => !only || s === only).sort();
  let same = 0, diffed = 0;
  const lines = [];
  for (const s of slugs) {
    const { diff, result } = compare(fs.readFileSync(path.join(dirA, s + '.ts'), 'utf8'), fs.readFileSync(path.join(dirB, s + '.ts'), 'utf8'), { multiset });
    if (diff === 0) { same++; continue; }
    diffed++;
    lines.push(`🔴 ${s} — 갈림 ${diff}`);
    for (const [cls, d] of Object.entries(result)) {
      if (!d.onlyA.length && !d.onlyB.length) continue;
      lines.push(`     ${cls.padEnd(5)} ${la}만: ${d.onlyA.join(' ') || '—'}   |   ${lb}만: ${d.onlyB.join(' ') || '—'}`);
    }
  }
  console.log(`거울쌍 ${la} ↔ ${lb} · 공통 ${slugs.length}편 · ✅ 동일 ${same} · 🔴 갈림 ${diffed} · ${la}만 ${[...A].filter((s) => !B.has(s)).length}편 · ${lb}만 ${[...B].filter((s) => !A.has(s)).length}편 · 모드 ${multiset ? '다중집합' : '집합'}`);
  for (const l of lines) console.log(l);
  console.log('\n🪶 갈림 = 판정 대상(결함 확정 아님). 판정은 EN 원문으로 — 둘이 같은 값이어도 같이 틀릴 수 있다(2026-09-06 A5s).');
  if (has('strict') && diffed) process.exit(1);
}

main();
