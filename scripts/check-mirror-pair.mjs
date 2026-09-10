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
 *   money  $1,050 · €690 · NT$3,000 (천단위 구분자 제거 · $1.000 = $1,000 · 万/萬/億/K/M 배수 전개)
 *   bb     2.5bb · 100BB
 *   rule   Rule 84 · 規則 16 · 第 73 條 (🔴 「第1天」 같은 일차 표기는 룰이 아니다 — 條/条 필수)
 *   date   2026-09-06 · 9月11日 → 9/11 · 9/11 · 범위 표기 전개(9 月 10–14 日 = 9/10 + 9/14)
 *
 * 판정
 *   🔴 DIFF   한쪽에만 있는 값(클래스별 목록) — 전건 원문 판정 대상
 *   ✅ SAME   클래스 전부 동일
 *   🟠 미판정  게이트가 «날짜인지 분수인지» 등을 못 가른 자리 — 매 실행 노출한다(게이트 튜닝 규율)
 *
 * 사용
 *   npm run check:mirror-pair                          zh↔zh-hant 전편
 *   npm run check:mirror-pair -- --slug=holdem-3bet
 *   npm run check:mirror-pair -- --locale-pair=zh,zh-hant
 *   npm run check:mirror-pair -- --multiset            등장 «횟수»까지 비교(FAQ 문항 수 차이가 전부 뜬다 — 노이즈 큼)
 *   npm run check:mirror-pair -- --unjudged            미판정 자리를 파일별로 펼쳐 본다
 *   npm run check:mirror-pair -- --strict              DIFF가 있으면 exit 1
 *   npm run check:mirror-pair:selftest
 *
 * 한계(원리상): 값이 «똑같이 틀린» 자리는 못 본다.
 *   «갈림 = 결함»이 아니라 «갈림 = 판정 대상»이다. 첫 실행 결과는 전건 원문으로 판정하라(게이트 튜닝 규율).
 *   2026-09-06 첫 튜닝: 다중집합 → 집합(개수 차가 42편 중 20편을 빨갛게 만들었다) · 第N天 오탐 · T/10 표기 · 月日/M-D 표기.
 *   🔴 2026-09-10 둘째 튜닝 (대기열 9-ⓐ · zh-hant §5-41 「wpt 9건 = 아티팩트」 실측 재현):
 *     ① **날짜 «범위» 표기가 비대칭이었다** — zh는 「9 月 10–14 日」(月형 범위 69건), zh-hant는 「9/10–14」(슬래시형 60건).
 *        옛 정규식은 月형 범위를 **한 건도 못 잡고**, 슬래시형 범위는 **앞쪽 날짜만** 잡았다.
 *        그래서 «zh-hant에만 날짜가 있다»는 가짜 갈림이 wpt 8건·kpm 8건으로 떴다. 진행 파일이 적은
 *        「「9 月 13 日」을 못 읽는다」는 부정확한 요약이다 — 단일 날짜는 읽었고, **범위**를 못 읽었다.
 *     ② **万/萬 단위가 절단됐다** — 「NT$750 萬」이 `NT$750`으로 잡혀 **만 배 차이가 같은 값으로** 보였다.
 *        「KRW 450 万」(zh) ↔ 「KRW 450 萬」(zh-hant)은 통화 KRW를 몰라 양쪽 다 무시됐다.
 *     ③ **분수·비율·노선번호가 날짜로 잡혔다** — 1/3(팟) · 2/3 · 5/8(지하철 5·8호선) · 25/50(블라인드) ·
 *        52/48(에쿼티) · 10/47(아웃) · 24/7(연중무휴) · 1/1,225(조합수).
 *        처방 = 월 1~12 · 일 1~31 범위 검사 + **«뒤 숫자 ≤ 8 이고 앞 < 뒤»는 분수로 보고 미판정 버킷**으로.
 *        진짜 1월 3일을 놓칠 수 있으나, 놓친 자리는 🟠 미판정으로 «매 실행 보인다»(숨기지 않는다).
 *     ④ 문장부호 삼킴(`$100,` → `$100`)은 값 끝을 숫자로 못 박아 막았다.
 *     🪶 못 보는 것(문서화된 한계): 한자 수사(九成=90%)는 pct로 안 세고 🟠 미판정으로만 알린다.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');

const args = process.argv.slice(2);
const opt = (name) => (args.find((a) => a.startsWith(`--${name}=`)) ?? '').split('=')[1] || null;
const has = (name) => args.includes(`--${name}`);

/** 범위 구분자 — en dash · em dash · 물결 · 하이픈 */
const SEP = '[\\u2013\\u2014~-]';

/** 통화 기호(긴 것부터) */
const CUR = '(?:NT\\$|US\\$|HK\\$|S\\$|CA\\$|A\\$|RM|KRW|USD|EUR|JPY|\\u20a9|[$\\u20ac\\u00a3\\u00a5])';
/** 배수 접미사 — 万/萬 = 1e4 · 億/亿 = 1e8 · K = 1e3 · M/million = 1e6 · billion = 1e9 */
const MULT = { '万': 1e4, '萬': 1e4, '億': 1e8, '亿': 1e8, K: 1e3, k: 1e3, M: 1e6, m: 1e6, million: 1e6, billion: 1e9 };
const MULT_RE = '(?:[万萬億亿KkMm]|[Mm]illion|[Bb]illion)';

/**
 * 유효숫자 2자리 — 배수 접미사가 붙은 값은 «근사 표기»다(「€9.9M」은 €9,918,250의 근사).
 * 근사끼리·근사↔정확은 이 자리에서 비교한다. 정확↔정확은 그대로 정확 비교라 «$10,400 vs $10,000»은 갈림으로 남는다.
 */
const sig2 = (n) => { if (!n) return 0; const f = Math.pow(10, Math.floor(Math.log10(Math.abs(n))) - 1); return Math.round(n / f) * f; };

/** 천단위 구분자 제거 — `$215.000` = `$215,000` · `4.5`는 소수라 보존 */
const stripThousands = (s) => s.replace(/\s+/g, '').replace(/[,.](?=\d{3}(?!\d))/g, '');

const num2str = (n) => (Number.isInteger(n) ? String(n) : String(Number(n.toFixed(6))));

/** 단순 정규식 클래스 */
function simple(re, norm) {
  return (c, bag) => {
    for (const m of c.matchAll(re)) add(bag, norm(m[0]));
  };
}
const add = (bag, k) => bag.set(k, (bag.get(k) ?? 0) + 1);

/** 월 1~12 · 일 1~31 */
const okMD = (mo, da) => mo >= 1 && mo <= 12 && da >= 1 && da <= 31;

/**
 * 날짜 추출 — 매치한 자리를 공백으로 «소비»하며 넓은 패턴부터 좁은 패턴으로 내려간다.
 * 소비하지 않으면 「2026/8/16」의 `8/16`이 2단 슬래시로 두 번 잡힌다.
 */
function extractDate(c, bag, un) {
  let s = c;
  const eat = (re, fn) => {
    s = s.replace(re, (...a) => {
      const groups = a.slice(1, -2);
      fn(groups, a[0]);
      return ' '.repeat(a[0].length);
    });
  };
  const put = (mo, da) => { if (okMD(+mo, +da)) add(bag, `${+mo}/${+da}`); };

  // ① ISO
  eat(/\d{4}-\d{2}-\d{2}/g, (_g, raw) => add(bag, raw));

  // ② 한자 月日 — 단일 + 일자 범위(9 月 10–14 日) 모두
  eat(new RegExp(`(\\d{1,2})\\s*月\\s*(\\d{1,2})(?:\\s*${SEP}\\s*(\\d{1,2}))?\\s*日`, 'g'), (g) => {
    put(g[0], g[1]);
    if (g[2]) put(g[0], g[2]);
  });

  // ③ 3단 슬래시(연/월/일) — 2026/8/16–8/29
  eat(new RegExp(`(?<![\\d/])\\d{4}\\s*/\\s*(\\d{1,2})\\s*/\\s*(\\d{1,2})(?:\\s*${SEP}\\s*(\\d{1,2})\\s*/\\s*(\\d{1,2}))?(?![\\d/])`, 'g'), (g) => {
    put(g[0], g[1]);
    if (g[2] && g[3]) put(g[2], g[3]);
  });

  // ④ 2단 슬래시 «범위» — 9/10–14 · 9/18–10/1 · 8/17–10/24
  //    범위라는 사실 자체가 «날짜»의 강한 신호다(분수는 범위를 쓰지 않는다) → 분수 의심 검사를 면제한다
  // 🪶 뒤 쉼표를 막지 않는다 — 「9/10–30, 2026」처럼 연도가 쉼표로 따라붙는다.
  //    「1/1,225」(조합수)는 SEP(대시)이 없어 이 패턴에 애초에 안 걸리므로 ⑤에서만 쉼표를 막으면 된다.
  eat(new RegExp(`(?<![\\d/])(\\d{1,2})\\s*/\\s*(\\d{1,2})\\s*${SEP}\\s*(\\d{1,2})(?:\\s*/\\s*(\\d{1,2}))?(?![\\d/])`, 'g'), (g) => {
    put(g[0], g[1]);
    if (g[3]) put(g[2], g[3]);
    else put(g[0], g[2]);
  });

  // ⑤ 2단 슬래시 «단일» — 여기서만 분수·노선번호·비율을 걸러낸다
  eat(new RegExp(`(?<![\\d/])(\\d{1,2})\\s*/\\s*(\\d{1,2})(?![\\d/,])`, 'g'), (g, raw) => {
    const mo = +g[0], da = +g[1];
    if (!okMD(mo, da)) return;                       // 25/50 · 10/47 · 52/48 · 24/7 — 날짜일 수 없다
    if (da <= 8 && mo < da) { un.push(`date? ${raw.trim()}`); return; } // 1/3 · 2/3 · 5/8 — 분수·노선 의심
    put(mo, da);
  });
}

/**
 * 화폐 추출 — 배수 접미사(万/萬/億/K/M/million/billion)를 값에 전개한다.
 * 접미사가 붙은 값에는 `~`를 앞에 달아 «근사 표기»로 표시한다(비교는 diffMoney가 유효숫자 2자리로).
 */
function extractMoney(c, bag) {
  const re = new RegExp(`(${CUR})\\s?(\\d(?:[\\d,.]*\\d)?)\\s*(${MULT_RE})?(?![A-Za-z0-9])`, 'g');
  for (const m of c.matchAll(re)) {
    const cur = m[1].replace(/\s+/g, '');
    const n = parseFloat(stripThousands(m[2]));
    if (!Number.isFinite(n)) continue;
    const suffix = m[3] ? m[3].toLowerCase() : null;
    const mult = suffix ? (MULT[suffix] ?? MULT[m[3]] ?? 1) : 1;
    add(bag, (suffix ? '~' : '') + cur + num2str(n * mult));
  }
}

/** `~€9900000` → { cur: '€', n: 9900000, approx: true } */
function parseMoneyKey(k) {
  const approx = k.startsWith('~');
  const s = approx ? k.slice(1) : k;
  const m = s.match(/^(\D+)(\d.*)$/);
  return m ? { cur: m[1], n: parseFloat(m[2]), approx } : null;
}

/**
 * 화폐 전용 차집합 — 한쪽이라도 «근사 표기»면 유효숫자 2자리로 맞춰 본다.
 * 근거: zh는 「€8,841,550」(정확), zh-hant는 「€8.8M 降到…」(근사)로 같은 값을 적는다.
 *       선례도 같다 — zh-hant §4-E 「money `$3M` = AUD $3,000,000의 근사(EN도 보유)」 = 아티팩트 판정.
 */
function diffMoney(a, b, multiset) {
  const paired = (k, other) => {
    const p = parseMoneyKey(k);
    if (!p) return false;
    for (const q of other.keys()) {
      const r = parseMoneyKey(q);
      if (!r || r.cur !== p.cur) continue;
      if ((p.approx || r.approx) && sig2(r.n) === sig2(p.n)) return true;
    }
    return false;
  };
  const side = (x, y) => [...x].filter(([k, n]) => {
    const m = y.get(k) ?? 0;
    if (multiset ? n <= m : m > 0) return false;
    return !paired(k, y);
  }).map(([k, n]) => {
    const label = k.replace(/^~/, '');
    return multiset && n - (y.get(k) ?? 0) > 1 ? `${label}×${n - (y.get(k) ?? 0)}` : label;
  });
  return { onlyA: side(a, b), onlyB: side(b, a) };
}

/** 비율 — 한자 수사(九成)는 세지 않고 미판정으로만 알린다 */
function extractPct(c, bag, un) {
  for (const m of c.matchAll(/\d+(?:[.,]\d+)?\s?[%％]/g)) {
    add(bag, m[0].replace(/\s+/g, '').replace('％', '%').replace(',', '.').replace(/\.0+%$/, '%'));
  }
  for (const m of c.matchAll(/[一二三四五六七八九]成/g)) un.push(`pct? ${m[0]}`);
}

const EXTRACTORS = {
  card: simple(/(?<![A-Za-z0-9])(?:10|[AKQJT2-9])[♠♥♦♣]/g, (t) => t.replace(/^T/, '10')),
  pct: extractPct,
  money: extractMoney,
  bb: simple(/\d+(?:[.,]\d+)?\s?(?:bb|BB)(?![A-Za-z])/g, (t) => t.replace(/\s+/g, '').replace(',', '.').toLowerCase()),
  rule: simple(/(?:Rule|規則|规则)\s?\d+(?:\.\w+)?|第\s?\d+\s?(?:條|条)/g, (t) =>
    t.replace(/\s+/g, '').replace(/規則|规则/, 'Rule').replace(/^第(\d+)(?:條|条)$/, 'Rule$1')),
  date: extractDate,
};

/** content 필드만 꺼낸다(메타의 날짜·slug는 비교 대상이 아니다). 본문에 백틱은 금지(§12-A)라 첫 백틱 쌍이 곧 본문이다 */
function contentOf(src) {
  const m = src.match(/content:\s*`([^`]*)`/);
  const c = m ? m[1] : src;
  // 🔴 URL은 토큰 추출 전에 지운다 — 위키 링크의 percent-encoding(%E5%BE%B7…)이 «5%·7%·89%»로 잡혔다
  // (zh 회차 1 헤드 요청 1 · zh는 德州扑克, zh-hant는 德州撲克를 인코딩해 바이트가 달라 정상인데 갈림으로 떴다)
  return c.replace(/https?:\/\/[^\s)\]>"'`]+/g, ' ');
}

function tokens(src) {
  const c = contentOf(src);
  const out = {};
  const un = [];
  for (const [cls, fn] of Object.entries(EXTRACTORS)) {
    const bag = new Map();
    fn(c, bag, un);
    out[cls] = bag;
  }
  return { out, un };
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
  for (const cls of Object.keys(EXTRACTORS)) {
    const d = cls === 'money' ? diffMoney(ta.out[cls], tb.out[cls], multiset) : diffBags(ta.out[cls], tb.out[cls], multiset);
    result[cls] = d;
    diff += d.onlyA.length + d.onlyB.length;
  }
  return { diff, result, unjudged: [...new Set([...ta.un, ...tb.un])] };
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
    // 🔴 2026-09-10 둘째 튜닝 — 날짜 범위
    ['月형 일자 범위 = 슬래시 범위', mk('9 月 10–14 日'), mk('9/10–14'), 0],
    ['月형 교차월 범위 = 슬래시 교차월', mk('9 月 18 日–10 月 1 日'), mk('9/18–10/1'), 0],
    ['年 붙은 月형 범위 = 슬래시+연도', mk('2026 年 9 月 10–30 日'), mk('9/10–30, 2026'), 0],
    ['연/월/일 3단 슬래시 = 月형', mk('2026/8/16–8/29'), mk('8 月 16 日 至 8 月 29 日'), 0],
    ['범위 끝 날짜가 갈리면 잡는다', mk('9 月 10–14 日'), mk('9/10–15'), 2],
    // 분수·노선·비율은 날짜가 아니다
    ['1/3 팟은 날짜가 아니다', mk('對 1/3 底池'), mk('面對半個底池'), 0],
    ['5/8 호선은 날짜가 아니다', mk('5/8 号线'), mk('地鐵'), 0],
    ['25/50 블라인드는 날짜가 아니다', mk('25/50 → 50/100'), mk('盲注上漲'), 0],
    ['10/47 아웃은 날짜가 아니다', mk('10/47 × 9/46'), mk('後門同花'), 0],
    ['1/1,225 조합수는 날짜가 아니다', mk('1 ÷ C(50,2) = 1/1,225'), mk('罕見'), 0],
    // 万/萬 배수
    ['NT$100 萬 = NT$1,000,000', mk('NT$100 萬'), mk('NT$1,000,000'), 0],
    ['KRW 450 万 = KRW 450 萬', mk('KRW 450 万'), mk('KRW 450 萬'), 0],
    ['萬 단위가 갈리면 잡는다', mk('NT$750 萬'), mk('NT$750'), 2],
    ['$3M = $3,000,000', mk('$3M'), mk('$3,000,000'), 0],
    ['$10K = $10,000', mk('$10K WPT High Roller'), mk('$10,000 賽事'), 0],
    ['문장부호를 삼키지 않는다', mk('價格 $100,000，接著'), mk('$100,000'), 0],
    // 근사 표기(배수 접미사) ↔ 정확 표기
    ['€9.9M = €9,918,250 (근사 표기)', mk('獎池從 €9.9M 降到'), mk('€9,918,250'), 0],
    ['$2.7 million = $2.7M', mk('$2.7 million'), mk('$2.7M'), 0],
    ['KRW 4 billion = KRW 40 億', mk('KRW 4 billion'), mk('KRW 40 億'), 0],
    ['근사끼리 값이 갈리면 잡는다', mk('€9.9M'), mk('€8.8M'), 2],
    ['정확값끼리는 근사로 뭉개지 않는다', mk('$10,400'), mk('$10,000'), 2],
    ['한자 수사는 pct로 세지 않는다(미판정)', mk('九成'), mk('九成'), 0],
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
  let same = 0, diffed = 0, unTotal = 0;
  const lines = [], unLines = [];
  for (const s of slugs) {
    const { diff, result, unjudged } = compare(fs.readFileSync(path.join(dirA, s + '.ts'), 'utf8'), fs.readFileSync(path.join(dirB, s + '.ts'), 'utf8'), { multiset });
    if (unjudged.length) { unTotal += unjudged.length; unLines.push(`🟠 ${s} — ${unjudged.join(' · ')}`); }
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
  console.log(`\n🟠 미판정 ${unTotal}종 — 게이트가 날짜/분수·수치 표기를 못 가른 자리${has('unjudged') ? '' : ' (`-- --unjudged`로 펼침)'}`);
  if (has('unjudged')) for (const l of unLines) console.log(l);
  console.log('\n🪶 갈림 = 판정 대상(결함 확정 아님). 판정은 EN 원문으로 — 둘이 같은 값이어도 같이 틀릴 수 있다(2026-09-06 A5s).');
  if (has('strict') && diffed) process.exit(1);
}

main();
