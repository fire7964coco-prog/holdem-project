#!/usr/bin/env node
/**
 * de(독일어) 문체 게이트 — `lib/posts-de/` 42편의 «번역 티»를 기계로 잡는다.
 *
 * ★사양: docs/de-style-gate-spec.md   ★규칙 근거(정본): docs/translation-terms-de.md §1~§7
 *   이 파일은 «어떻게 검사할지»만 다룬다. 무엇이 옳은 독일어인지는 정본이 정한다.
 *
 * ★왜 만들었나 (2026-08-10 사양 → 08-10 구현)
 *   de 42편 경화를 앞두고 지표를 급조해 돌렸더니 **오탐이 심했다**. 게이트의 값어치는
 *   스크립트가 아니라 «오탐 튜닝 루프»에 있다 — 반쯤 튜닝된 게이트는 무시당해 결국 안 쓰인다.
 *   그래서 사양서에 함정을 박아 두고, 여기서는 그 함정을 **회귀 테스트로 고정**한 뒤 구현했다.
 *
 * ★사양서에 박힌 오탐 함정 3종 (다시 발견하지 마라 — 전부 --selftest 픽스처로 고정돼 있다)
 *   ① `Sie`(경어) vs `sie`(3인칭). 독일어는 **문장 첫머리에서 3인칭 sie가 대문자 Sie**가 된다.
 *      급조 정규식이 24편을 잡았는데 대부분 오탐이었다. → 문두를 빼고, **경어 동사형**과 함께만 센다.
 *   ② `prüfen`은 그 자체로 오역 지문이 아니다. `geprüft`·`überprüfen`은 정상 독일어이고
 *      "anhand der Primärquellen geprüft"는 우리가 채택한 표현이다. → **포커 액션 문맥에서만** 잡는다.
 *   ③ 숫자는 부호가 아니라 **«자릿수 패턴»**으로 판정한다. `1,5 BB`·`1.000 Chips`는 정상,
 *      `€1,650`(천단위 쉼표)·`31.5 %`(마침표 소수점)만 틀렸다.
 *
 * ★"0건"은 «안 봤다»와 «보고 통과»를 반드시 갈라서 출력한다(맨 아래 검사 커버리지 절).
 *   특히 D6(FAQ 스키마)는 **빌드 산출물이 진실**이라 `.next`가 없으면 0건이 아니라 «미검사»다.
 *
 * 사용:
 *   node scripts/check-de-style.mjs                    # 42편 전수
 *   node scripts/check-de-style.mjs --cluster=Regeln   # 클러스터 = 경화 세션 단위
 *   node scripts/check-de-style.mjs --slug=holdem-3bet
 *   node scripts/check-de-style.mjs --selftest         # 게이트 자신을 검증
 *   node scripts/check-de-style.mjs --verbose          # 걸린 줄 전문
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const ROOT = process.cwd();
const TMP = path.join(ROOT, 'node_modules', '.cache', 'check-de-style');
const argv = process.argv.slice(2);
const arg = (k) => (argv.find((a) => a.startsWith(`--${k}=`)) ?? '').split('=')[1] || null;
const VERBOSE = argv.includes('--verbose');

/* ────────────────────────────────────────────────────────────────
   0. 클러스터 = 경화 세션 단위 (session-handoff.md 승인 순서 그대로)
      합계 42편. 사양서 §0의 베이스라인(Regeln 6·Handreihenfolge 6·Odds 6·
      Strategie 8·Turniere 9·Glossar 6 + card-counting 1)과 일치하는지가 곧 검증이다.
   ──────────────────────────────────────────────────────────────── */
export const DE_CLUSTERS = {
  Regeln: [
    'texas-holdem-rules-for-beginners', 'holdem-game-order', 'holdem-betting-actions',
    'holdem-blind-meaning', 'holdem-showdown-rules', 'holdem-all-in-rules',
  ],
  Handreihenfolge: [
    'holdem-hand-rankings', 'holdem-tiebreak-rules', 'holdem-split-pot-rules',
    'holdem-flush-vs-straight', 'holdem-kicker', 'holdem-reading-the-board',
  ],
  Odds: [
    'holdem-probability', 'holdem-pot-odds', 'holdem-outs',
    'holdem-implied-odds', 'holdem-equity', 'holdem-drawing-odds',
  ],
  Strategie: [
    'holdem-strategy', 'holdem-3bet', 'holdem-continuation-bet', 'holdem-position-play',
    'holdem-positions', 'holdem-starting-hands-chart', 'holdem-when-to-fold', 'holdem-limping',
  ],
  Glossar: [
    'holdem-glossary', 'holdem-bad-beat', 'holdem-cooler',
    'holdem-fish', 'holdem-rake', 'holdem-straddle',
  ],
  Turniere: [
    'holdem-tournament', 'holdem-tournament-vs-cash-game', 'holdem-icm', 'holdem-bubble',
    'holdem-short-stack', 'apt-incheon-2026-guide', 'ept-barcelona-2026-guide',
    'wpt-australia-2026-guide', 'korea-poker-marathon-2026',
  ],
  기타: ['holdem-card-counting'],
};

/* ────────────────────────────────────────────────────────────────
   1. 로더 — lib/posts-de/*.ts 를 트랜스파일해 «실제 객체»로 읽는다.
      정규식으로 소스를 긁으면 템플릿 리터럴 경계에서 틀린다(audit-hardening.mjs와 같은 이유).
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
async function loadDePosts() {
  // 캐시 디렉토리는 지우지 않고 전량 덮어쓴다(이 환경에선 fs.rmSync(recursive)가 프로세스를 죽인다).
  const dir = path.join(ROOT, 'lib', 'posts-de');
  for (const f of fs.readdirSync(dir)) {
    if (!f.endsWith('.ts')) continue;
    transpileTo(path.join(dir, f), path.join(TMP, f.replace(/\.ts$/, '.mjs')));
  }
  const mod = await import(pathToFileURL(path.join(TMP, 'index.mjs')).href);
  const arr = Object.values(mod).find((v) => Array.isArray(v) && v.length && v[0]?.slug);
  if (!arr) throw new Error('lib/posts-de/index.ts 에서 포스트 배열을 못 찾음');
  return arr;
}

/* ────────────────────────────────────────────────────────────────
   2. 검사 대상 줄 만들기
      독자에게 «독일어 문장으로» 보이는 필드만 본다. tags는 검색어 목록이라 제외한다
      (소문자 키워드가 정답인 자리라 명사 대문자 규칙을 적용하면 42편이 통째로 오탐이다).
   ──────────────────────────────────────────────────────────────── */
const PROSE_FIELDS = ['title', 'seoTitle', 'desc', 'tldr', 'imageAlt'];

/** content 상대 줄 → **소스 파일의 실제 줄**. 경화 세션이 그대로 열 좌표라 틀리면 안 된다.
 *  ★선언줄 + 상대줄로 «계산»하면 1 어긋난다 — 템플릿 리터럴 안의 이스케이프 때문에
 *    JS 문자열의 줄 수와 소스 파일의 줄 수가 정확히 대응하지 않는다(실측으로 확인).
 *    → 계산하지 말고 **그 줄의 본문을 소스에서 직접 찾는다.** */
const srcIndexCache = new Map();
function sourceLineIndex(slug) {
  if (srcIndexCache.has(slug)) return srcIndexCache.get(slug);
  const src = path.join(ROOT, 'lib', 'posts-de', `${slug}.ts`);
  const map = new Map();
  if (fs.existsSync(src)) {
    fs.readFileSync(src, 'utf8').split('\n').forEach((l, i) => {
      const k = l.trim();
      if (k && !map.has(k)) map.set(k, i + 1);
    });
  }
  srcIndexCache.set(slug, map);
  return map;
}

function linesOf(post) {
  const out = [];
  const idx = post.slug ? sourceLineIndex(post.slug) : new Map();
  for (const f of PROSE_FIELDS) {
    if (typeof post[f] === 'string' && post[f].trim()) out.push({ field: f, line: 0, raw: post[f] });
  }
  (post.content ?? '').split('\n').forEach((l, i) => {
    if (!l.trim()) return;
    // 소스에서 못 찾으면(이스케이프가 든 줄) 상대 줄 번호에 '~'를 붙여 «근사»임을 밝힌다.
    const hit = idx.get(l.trim());
    out.push({ field: 'content', line: hit ?? i + 1, approx: !hit, raw: l });
  });
  return out;
}

/** URL·링크 타깃·**인라인 HTML/CSS**는 독일어 산문이 아니다.
 *  ★첫 실행에서 42/42편이 D2·D3에 걸렸는데 전부 여기서 온 오탐이었다 —
 *    `rgba(255,255,255,0.12)`·`line-height:1.5`·`letter-spacing:0.08em`.
 *    사양서 베이스라인이 「마침표 소수점 0편 ✅」이라고 이미 손으로 재 둔 덕에 즉시 오탐임을 알았다.
 *    태그는 통째로 지우되 **안쪽 텍스트는 남긴다**(독일어 본문이 div 안에 들어 있다). */
const stripNonProse = (s) => s
  .replace(/https?:\/\/\S+/g, ' ')
  .replace(/<[^<>]*>/g, ' ')
  .replace(/\]\([^)]*\)/g, '] ')
  .replace(/`[^`]*`/g, ' ')
  // ★하이라이트 마커(==r: … ==)와 굵게(**)를 지워 **문장 부호가 드러나게** 한다.
  //   안 지우면 "…trennt.== Sie sind"에서 앞 글자가 '='라 문두로 안 보여 3인칭 Sie를 경어로 오판한다
  //   (D1 오탐 2건이 전부 이것이었다 — holdem-pot-odds L22 · holdem-split-pot-rules L105).
  .replace(/==([a-zA-Z]{1,2}:)?/g, ' ')
  .replace(/\*\*/g, ' ');

/** 마크다운 링크·이미지의 타깃과 title은 산문이 아니다. stripNonProse의 `\]\([^)]*\)` 는
 *  **타이틀 안의 괄호**에서 새므로(holdem-straddle L70 실측), 한 겹 중첩까지 허용해 통째로 지운다.
 *  D11(ASCII 따옴표) 전용 — 새면 `"thumb:…"` 가 산문 인용부호로 오탐된다. */
const stripLinkTitles = (s) => s.replace(/\]\((?:[^()\n]|\([^()\n]*\))*\)/g, '] ');

/** 날짜·조항 번호는 «마침표 소수점»이 아니다. D3 전용 추가 세척. */
const stripDates = (s) => s
  .replace(/\b\d{1,2}\.\d{1,2}\.\d{2,4}\b/g, ' ')                       // 31.03.2026
  .replace(/\b\d{1,2}\.\s*(Jan|Feb|Mär|Apr|Mai|Jun|Jul|Aug|Sep|Okt|Nov|Dez)[a-zä]*/g, ' ') // 12. Apr.
  .replace(/§+\s*\d+[.\d]*/g, ' ')                                       // §7.7
  .replace(/\bv?\d+\.\d+\.\d+\b/g, ' ');                                 // 버전 표기

/* ────────────────────────────────────────────────────────────────
   3. D1 — du/Sie 혼용 (사양서 함정①)
   ──────────────────────────────────────────────────────────────── */
const DU_RE = /(?<![\wäöüßÄÖÜ])(du|dein|deine|deinem|deinen|deiner|deines|dir|dich)(?![\wäöüßÄÖÜ])/gi;

// 3인칭 단수는 sie kann/hat/ist라 «동사형이 다르다» — 이게 가장 신뢰할 수 있는 판별 축이다.
// (3인칭 복수 sie können과는 동형이지만, 복수 sie는 문장 중간에서 **소문자**다.)
const POLITE_VERBS =
  'können|haben|sind|müssen|werden|sollten|wollen|dürfen|möchten|brauchen|wissen|sehen|finden|' +
  'spielen|setzen|halten|machen|bekommen|erhalten|gewinnen|verlieren|folden|callen|raisen|checken|sitzen';

/** 문장 첫머리인가 — 여기서는 대문자 Sie가 3인칭일 수 있어 판정하지 않는다. */
function isSentenceStart(line, idx) {
  const before = line.slice(0, idx).replace(/\s+$/, '');
  if (before === '') return true;
  return /[.!?:;…—–|>»«„"'()[\]#*_-]$/.test(before);
}
function politeHits(line) {
  const hits = [];
  for (const m of line.matchAll(new RegExp(`\\bSie\\s+(?:${POLITE_VERBS})\\b`, 'g'))) {
    if (!isSentenceStart(line, m.index)) hits.push(m[0]);
  }
  // 경어의 확실한 지문 — 3격 Ihnen과 «문장 중간에 대문자로 오는» 소유격 Ihr*.
  // (ihr 2인칭 복수·3인칭 소유격은 문장 중간에서 소문자다.)
  for (const m of line.matchAll(/\b(Ihnen|Ihre|Ihrem|Ihren|Ihrer|Ihres|Ihr)\b/g)) {
    if (!isSentenceStart(line, m.index)) hits.push(m[0]);
  }
  return hits;
}

/* ────────────────────────────────────────────────────────────────
   4. D2·D3 — 숫자 표기 (사양서 함정③: 부호가 아니라 자릿수 패턴)
   ──────────────────────────────────────────────────────────────── */
/* 천단위 쉼표. ⚠ `1,650`과 `42,195`는 **모양이 같다** — 전자는 금액(오류), 후자는 소수 3자리(정상
   독일어. 마라톤 42,195 km). 기계는 못 가른다. → **금액·수량 앵커가 붙은 것만 🔴로 확정**하고,
   앵커 없는 것은 커버리지에 «미판정»으로 내보낸다(조용히 버리지 않는다).
   실측: korea-poker-marathon-2026의 `42,195K`가 앵커 없는 유일한 사례였다. */
const THOUSANDS_COMMA_ANCHORED_RE =
  /(?:[€$£₩]\s?\d{1,3},\d{3}(?![\d%])|(?<![\d,])\d{1,3},\d{3}(?![\d%])\s?(?:€|\$|£|₩|EUR|USD|KRW|Euro|Dollar|Chips|Punkte|Entries|Spieler|BB)\b)/g;
const THOUSANDS_COMMA_ANY_RE = /(?<![\d,])(?!0,)\d{1,3},\d{3}(?![\d%])/g;
// 마침표 소수점: 소수 1~2자리. `1.000`(천단위)는 3자리라 통과.
const DECIMAL_DOT_RE = /(?<![\d.])\d+\.\d{1,2}(?!\d)/g;

/* ────────────────────────────────────────────────────────────────
   5. D4 — 기계번역 지문 (§7-7 표. 전부 실제 번역 사이트에서 채집된 것)
   ──────────────────────────────────────────────────────────────── */
const MT_MARKERS = [
  [/\bAusbeutung\w*/g, 'Ausbeutung(exploit 직역) → "exploitativ (spielen)" / "Exploit"'],
  [/\bwerthaltige?[nmrs]?\b/gi, 'Werthaltige(value 직역) → "Value-Range"'],
  [/\bFestland[-\s]Casinos?\b/gi, 'Festland Casino → "landbasiertes Casino"'],
  [/\bIntermediär\w*/gi, 'Intermediäre(intermediate 직역) → "Fortgeschrittene"'],
  [/\b(SB|BB|UTG|MP|CO|BTN|HJ|LJ)\s+gegenüber\b/g, '포지션 대비 gegenüber → "BB vs. MP"'],
  [/\bgegenüber\s+(dem|der)?\s*(SB|BB|UTG|MP|CO|BTN|HJ|LJ)\b/g, '포지션 대비 gegenüber → "BB vs. MP"'],
  // apt-incheon 미러 실전 교정(§대회·여행 글) — 검수에서 이미 확정된 정정이라 게이트로 내린다.
  [/\bgegen\s+(die\s+)?Primärquellen\s+geprüft/gi, '"gegen Primärquellen geprüft" → "anhand der Primärquellen geprüft"'],
  // 합성어까지 — 실측된 오류가 `das Natural8-Lobby`(하이픈)였다.
  [/\b(im|das|dem|ein)\s+(?:[A-ZÄÖÜ][\wäöüß]*-)?Lobby\b/gi, 'die Lobby(여성) — "im Lobby"/"das …-Lobby" 금지'],
];

/* 🔴 채택하지 않은 규칙 — «das/der APT» 성 검사 (2026-08-10 튜닝에서 폐기).
   §정본은 "die APT"를 정정으로 적어 뒀지만, 실측 3건이 **전부 오탐**이었다:
     · "mit der APT Championship"  → 핵이 Championship(die)이고 3격이라 der가 정답
     · "das größte Main Event, das APT je gespielt hat" → das는 **관계대명사**(선행사 Main Event)
     · "das APT Incheon Main Event" → 핵이 Main Event(중성)
   즉 APT는 거의 항상 **수식어**로 쓰여 뒤 명사가 성을 정한다. 정밀도 0/3이라 내린다.
   실제 "die APT" 오류는 «APT가 단독 주어»일 때만 생기는데 그건 사람 눈의 자리다. */

/* 성(gender) 오류 — §7-7 "Dein Spielweise". 관사는 격에 따라 변해 판정이 위험하지만
   («in der Hand»는 3격이라 der가 정답이다), **소유격/부정관사 + 명사**는 격과 무관하게 갈린다:
   `dein`은 여성 명사 앞에 절대 못 오고, `deine`는 남성·중성 단수 앞에 절대 못 온다. */
const FEM_SG = ['Bet', 'Range', 'Equity', 'Bubble', 'C-Bet', '3-Bet', 'Hand', 'Karte', 'Farbe',
  'Straße', 'Beikarte', 'Gebühr', 'Lobby', 'Spielweise', 'Strategie', 'Position', 'Frequenz',
  'Starthand', 'Setzrunde', 'Wettrunde', 'Bankroll'];
const MASC_NEUT_SG = ['Flop', 'Turn', 'River', 'Pot', 'Stack', 'Showdown', 'Kicker', 'Flush',
  'Straddle', 'Rake', 'Cooler', 'Draw', 'Call', 'Raise', 'Check', 'Button', 'Dealer', 'Shove',
  'Fold', 'Spot', 'Board', 'Set', 'Cashgame',
  // ★2026-08-10 (7) 추가 — 되읽기 패스에서 내가 «eine ganze Orbit»라고 새로 써 넣었다.
  //   de 42편 코퍼스는 「in jedem einzelnen Orbit」·「über einen vollen Orbit」·「jeden Orbit」로 **남성 통일**이다.
  'Orbit'];
const grp = (arr) => arr.map((w) => w.replace(/[-]/g, '\\-')).join('|');
/* ⚠ 대소문자를 통째로 무시하면 안 된다 — 명사는 «대문자로 쓰였는지»가 D8의 판정 대상이라
   여기서 소문자 명사까지 잡으면 두 규칙이 같은 자리를 두 번 센다.
   → **관사·소유격만** 첫 글자 양쪽을 허용한다(문장 첫머리의 "Dein"·"Ein"). */
const POSS_M = '[DdMmKkSs]ein|[Ee]in';        // dein/mein/kein/sein/ein — 남성·중성 단수 1·4격
/* ★2026-08-10 확장 — 위 형태만 보면 «사격(斜格)으로 새는 성 오류»를 원리상 못 잡는다.
   실측: `bei einem Bet plus drei Raises`(betting-actions L149·L214)가 두 번 통과했다.
   `einem`·`einen`은 여성 단수 앞에 절대 못 온다(여성은 einer/eine) → 격과 무관하게 확정 오류다.
   복수와도 겹치지 않는다: 여기 쓰이는 여성 명사의 복수는 -s(Bets·Ranges) 또는 -n(Karten)이라
   단수형과 형태가 다르다. */
const POSS_M_OBL = '[DdMmKkSs]eine[mn]|[Ee]ine[mn]';   // deinem/deinen/einem/einen
const DEF_M_N = '[Dd]as|[Dd]em|[Dd]es';                 // 여성 앞에 못 오는 정관사 (der는 3·2격이라 제외)

/* ★튜닝으로 확정된 세 가지 제외 (2026-08-10 · 실측 오탐 19건이 전부 여기서 나왔다)
   ① **띄어쓴 영어 합성어**의 성은 «뒤 명사»가 정한다 —
      `deine Pot Odds`(die Odds) · `deine Fold Equity`(die Equity) · `Ein Bubble Factor`(der Factor).
      → 명사 뒤에 «공백 + 대문자 낱말»이 오면 판정하지 않는다.
   ② **복수**는 여성 단수와 형태가 같다 — `keine Kicker`·`keine Cooler`는 복수라 정상.
      → 남성·중성 검사는 **복수형이 없는 `eine`에만** 건다(deine/keine/meine/seine는 복수일 수 있다).
   ③ `der eine Spot`처럼 **정관사 + eine(=하나의)**는 정상 독일어다. → 앞에 정관사가 있으면 제외. */
const NEXT_IS_CAPITAL = '(?!\\s+[A-ZÄÖÜ])';
/* ★`\s{0,2}-`까지 막는 이유 — stripNonProse가 `**`를 «공백»으로 바꾸는 탓에
   `die **Turn**-Karte`가 `die  Turn -Karte`가 되어 하이픈 합성어가 안 보인다.
   그러면 핵이 Karte(여성)인데 Turn(남성)으로 판정해 오탐이 난다(2026-08-10 (2) 실측 1건). */
const NOT_COMPOUND = '(?![\\w\\-äöüß])(?!\\s{0,2}-)';
const AFTER_DEF_ART = '(?<!\\b[Dd]er\\s)(?<!\\b[Dd]ie\\s)(?<!\\b[Dd]as\\s)(?<!\\b[Dd]en\\s)(?<!\\b[Dd]em\\s)(?<!\\b[Dd]es\\s)';
/* `die + 남성·중성`은 «복수»와 형태가 겹칠 때만 위험하다. -er로 끝나는 차용어는 복수가 단수와
   같아(der Kicker → die Kicker) 판정할 수 없다 → **복수가 -s인 낱말에만** 건다. */
const MASC_NEUT_S_PL = MASC_NEUT_SG.filter((w) => !/er$/.test(w));
/* 관사와 명사 사이에 «형용사» 하나가 들어가도 성 판정은 그대로다 — `eine ganze Orbit`.
   대문자 낱말은 넣지 않는다(그건 띄어쓴 영어 합성어라 뒤 명사가 핵이다). 소문자 -e 어미만 허용. */
/* 🔴 한정사는 형용사가 아니다. 안 막으면 `das eine Bet`(관계대명사 das + eine Bet)·`dem deine Hand`가
   전부 오탐이 된다 — 2026-08-10 (7) 실측에서 이 한 줄이 없어 7편이 잘못 걸렸다. */
const NOT_DET = '(?!(?:eine|deine|meine|seine|keine|ihre|die|diese|jede|welche|alle|einer|deiner)\\s)';
const ADJ = `(?:${NOT_DET}[a-zäöüß]+e\\s+)?`;
/* ★하이픈 합성어의 성은 «마지막 요소»가 정한다(§5). 그래서 앞 요소는 건너뛰고 **핵만** 본다:
   `eine River-Raise` → 핵이 Raise(남성)라 오류 · `die Turn-Karte` → 핵이 Karte(여성)라 정상.
   앞 요소는 대문자로 시작하는 낱말만 인정한다(`3-Bet-`·`All-in-`처럼 소문자·숫자가 섞이면
   핵을 잘못 짚을 위험이 커서 아예 판정하지 않는다 — 이 공백은 의도적이다). */
const COMPOUND_HEAD = '(?:[A-ZÄÖÜ][A-Za-zÄÖÜäöüß]{1,20}-)*';
const GENDER_RULES = [
  [new RegExp(`\\b(?:${POSS_M})\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(FEM_SG)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '여성 명사인데 -e가 없다 (dein → deine / ein → eine)'],
  [new RegExp(`${AFTER_DEF_ART}\\b[Ee]ine\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(MASC_NEUT_SG)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '남성·중성 단수인데 -e가 붙었다 (eine → ein)'],
  [new RegExp(`\\b(?:${POSS_M_OBL})\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(FEM_SG)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '여성 명사인데 남성·중성 격변화다 (einem → einer / einen → eine)'],
  [new RegExp(`\\b(?:${DEF_M_N})\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(FEM_SG)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '여성 명사인데 남성·중성 정관사다 (das/dem/des → die/der)'],
  [new RegExp(`\\b[Ee]iner\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(MASC_NEUT_SG)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '남성·중성인데 여성 격변화다 (einer → einem/eines)'],
  [new RegExp(`\\b[Dd]ie\\s+${ADJ}${COMPOUND_HEAD}(?:${grp(MASC_NEUT_S_PL)})${NOT_COMPOUND}${NEXT_IS_CAPITAL}`, 'g'),
    '남성·중성 단수인데 die다 (die → der/das)'],
];

/* ────────────────────────────────────────────────────────────────
   6. D5 — 금지 용어 (§1·§2 false friend)
   ──────────────────────────────────────────────────────────────── */
/* ★Fluss·Wende·Brett·Topf·anrufen은 **평범한 독일어 낱말이기도 하다.**
   실측 오탐: korea-poker-marathon L422 「trägst deine Schale zu einer Bank am Fluss」(진짜 강이다) ·
   straddle L104 「Ein großer Blind-Straddle」(형용사+합성어).
   → 이 다섯은 **같은 줄에 포커 문맥 토큰**이 있을 때만 판정한다. `Blenden`·`kleiner Blind`는
     이 도메인에서 다른 뜻으로 쓰일 자리가 없어 무조건 잡는다. */
const POKER_CONTEXT_RE =
  /\b(Flop|Turn|River|Board|Pot|Hand|Karten?|Setzrunde|Blind|Blinds|Bet|Raise|Call|Check|Fold|Showdown|Street|Draw|Stack|Chips|folden|callen|raisen|betten|checken|limpen|shoven)\b/;
const BANNED_TERMS = [
  [/(?<![\wäöüß-])Blenden?(?![\wäöüß])/g, 'Blenden → die Blinds (§1 절대 금지)', false],
  [/(?<![\wäöüß-])Topf(?![\wäöüß])/g, 'Topf → der Pot', true],
  [/(?<![\wäöüß-])Fluss(?![\wäöüß])/g, 'Fluss → der River', true],
  [/\b(die|der|den)\s+Wende(?![\wäöüß])/g, 'Wende → der Turn', true],
  [/(?<![\wäöüß-])Brett(?![\wäöüß])/g, 'Brett → das Board', true],
  [/\b(anrufen|angerufen)\b/g, 'anrufen → callen / mitgehen', true],
  // `Ein großer Blind-Straddle`는 형용사 + 합성어라 정상이다 → 하이픈·글자 이어짐 제외.
  [/\b(kleine[rn]?|große[rn]?)\s+Blind(?![-\w])/g, '"kleiner/großer Blind" → Small Blind / Big Blind', false],
];

/* prüfen(=check 오역)은 **포커 액션 문맥에서만** 잡는다(사양서 함정②를 실측으로 한 번 더 좁힘).
   ★사양서는 "`ich prüfe`·`du prüfst`처럼 1·2인칭 현재형일 때만"을 제안했지만, 42편 실측 결과
     그 조건이 **7건 전부 오탐**을 냈다. 독일어 **명령형이 1인칭 단수와 형태가 같기** 때문이다:
       "prüfe auf ein Full House"(확인해 봐라) · "prüfe die offiziellen Rennwebsites" ·
       "prüfe immer die ausgehängten Regeln" · "prüfe sie gegen die Bet" — 전부 정상 독일어다.
   → 인칭 조건을 버리고 **같은 줄의 Check 토큰**만 앵커로 쓴다.
     앵커 없는 단독 오역은 원리상 못 잡는다 → 커버리지에 그렇게 적는다(0건 ≠ 검증). */
const PRUEFEN_RE = /\b(prüfe|prüfst|prüft|prüfen)\b/g;
const CHECK_CONTEXT_RE = /\bCheck\b|\bchecke[nst]?\b|\bgecheckt\b|Check-Raise/;

/* ────────────────────────────────────────────────────────────────
   7. D8 — 명사 소문자 (§5 "der flop" = 오류). 관사 뒤 소문자 차용명사만 본다.
      동사는 소문자가 정답이지만("du willst callen") 관사 뒤에 오지 않는다.
   ──────────────────────────────────────────────────────────────── */
const LOWER_NOUNS = ['flop', 'turn', 'river', 'board', 'pot', 'stack', 'range', 'equity', 'bubble',
  'blinds', 'outs', 'kicker', 'showdown', 'button', 'dealer', 'draw', 'set', 'bet', 'raise',
  'call', 'check', 'fold', 'straße', 'hand', 'karte', 'farbe', 'nuts', 'rake', 'straddle'];
// 관사만 첫 글자 양쪽 허용(문장 첫머리의 "Der"). 명사는 소문자여야 «오류»이므로 그대로 둔다.
const DET = '[Dd]er|[Dd]ie|[Dd]as|[Dd]em|[Dd]en|[Dd]es|[Ee]ine[mnr]?|[Ee]in|[Dd]eine[mnr]?|[Dd]ein';
const LOWER_NOUN_RE = new RegExp(
  `\\b(?:${DET})\\s+(?:${LOWER_NOUNS.join('|')})(?![\\w\\-äöüß])`, 'g');

/* ────────────────────────────────────────────────────────────────
   8. 검사기 본체 — post 하나 → findings[]
   ──────────────────────────────────────────────────────────────── */
function auditDeStyle(post) {
  const f = [];
  const add = (sev, code, msg, detail) => f.push({ sev, code, msg, detail });
  const lines = linesOf(post);
  const where = (l) => (l.field === 'content' ? `L${l.line}${l.approx ? '~' : ''}` : l.field);

  /* ── D1 du/Sie ── */
  let duCount = 0;
  const politeLines = [];
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    duCount += (s.match(DU_RE) ?? []).length;
    const hits = politeHits(s);
    if (hits.length) politeLines.push({ l, hits });
  }
  const politeCount = politeLines.reduce((n, x) => n + x.hits.length, 0);
  if (duCount >= 3 && politeCount >= 1) {
    add('ERR', 'D1', `du체 글에 경어(Sie/Ihr) ${politeCount}곳 혼재 — §7-7 "한 글 안 Sie/du 혼용 = 즉시 번역 티" (du 신호 ${duCount}개)`,
      politeLines.map((x) => `${where(x.l)} ${x.hits.join(' · ')} — ${x.l.raw.trim().slice(0, 110)}`));
  } else if (duCount === 0 && politeCount >= 3) {
    add('WARN', 'D1b', `du 신호 0 · 경어 ${politeCount}곳 = 통짜 경어체 글 — §4 커뮤니티 보이스는 du다(혼용이 아니라 전면 전환 대상)`,
      politeLines.slice(0, 6).map((x) => `${where(x.l)} ${x.hits.join(' · ')}`));
  }

  /* ── D2 천단위 쉼표 / D3 마침표 소수점 ── */
  const d2 = [], d3 = [], d2unjudged = [];
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    for (const m of s.matchAll(THOUSANDS_COMMA_ANCHORED_RE)) d2.push(`${where(l)} "${m[0]}" — ${l.raw.trim().slice(0, 90)}`);
    if (!d2.length) {
      for (const m of s.matchAll(THOUSANDS_COMMA_ANY_RE)) d2unjudged.push(`${where(l)} "${m[0]}"`);
    }
    for (const m of stripDates(s).matchAll(DECIMAL_DOT_RE)) d3.push(`${where(l)} "${m[0]}" — ${l.raw.trim().slice(0, 90)}`);
  }
  if (d2.length) add('ERR', 'D2', `천단위 쉼표 ${d2.length}곳 — 독일 독자는 "€1,650"을 «1유로 65»로 읽는다 (§3: 천단위=마침표)`, d2);
  if (d3.length) add('ERR', 'D3', `마침표 소수점 ${d3.length}곳 — §7-7 채집된 기계번역 지문 (소수점=콤마)`, d3);

  /* ── D4 기계번역 지문 + 성 오류 ── */
  const d4 = [];
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    for (const [re, why] of MT_MARKERS) for (const m of s.matchAll(re)) d4.push(`${where(l)} "${m[0].trim()}" — ${why}`);
    for (const [re, why] of GENDER_RULES) for (const m of s.matchAll(re)) d4.push(`${where(l)} "${m[0]}" — ${why}`);
  }
  if (d4.length) add('ERR', 'D4', `기계번역 지문 ${d4.length}곳 (§7-7)`, d4);

  /* ── D5 금지 용어 ── */
  const d5 = [], pruefenUnjudged = [];
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    const hasPoker = POKER_CONTEXT_RE.test(s);
    for (const [re, why, needsPoker] of BANNED_TERMS) {
      if (needsPoker && !hasPoker) continue;   // 평범한 독일어로 쓰인 자리 — 판정하지 않는다
      for (const m of s.matchAll(re)) d5.push(`${where(l)} "${m[0].trim()}" — ${why}`);
    }
    // prüfen — 같은 줄에 Check 토큰이 있을 때만(위 주석: 인칭 조건은 오탐 7/7이라 폐기)
    if (CHECK_CONTEXT_RE.test(s)) {
      for (const m of s.matchAll(PRUEFEN_RE)) {
        d5.push(`${where(l)} "${m[0]}" — check→prüfen 오역 의심 (§2 check≠prüfen). 같은 줄에 Check`);
      }
    } else {
      for (const m of s.matchAll(PRUEFEN_RE)) pruefenUnjudged.push(`${where(l)} "${m[0]}"`);
    }
  }
  if (d5.length) add('ERR', 'D5', `금지 용어 ${d5.length}곳 (§1·§2 false friend)`, d5);

  /* ── D7 퍼센트 표기 문서 내 혼재 (⚠ 일관성만 — §7-5는 어느 쪽인지 판정하지 않는다) ── */
  let pctTight = 0, pctSpaced = 0;
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    pctTight += (s.match(/\d%/g) ?? []).length;
    pctSpaced += (s.match(/\d[\s ]%/g) ?? []).length;
  }
  if (pctTight && pctSpaced) {
    add('WARN', 'D7', `퍼센트 표기 혼재 — 붙임 ${pctTight}곳 / 띄움 ${pctSpaced}곳 (§7-5: 어느 쪽인지는 판정하지 않되 한 글 안에서는 통일)`);
  }

  /* ── D10 독일어 인용부호 짝 (§7-5 표기) ──
     독일어는 „…“ 다. 여는 „ 를 쓰고 ASCII "로 닫으면 **반쪽만 현지화된 상태**가 된다 —
     2026-08-10 (7) 실측: 42편 중 5편이 „ 228개 중 59개를 ASCII로 닫고 있었다.
     ⚠ 인라인 HTML의 style="…" 때문에 반드시 stripNonProse 뒤에 검사한다. */
  const d10 = [];
  for (const l of lines) {
    const s = stripNonProse(l.raw);
    for (const m of s.matchAll(/„[^„“\n]{0,200}?"/g)) {
      d10.push(`${where(l)} "${m[0].slice(0, 60)}" — 여는 „ 를 ASCII "로 닫았다 (→ „…“)`);
    }
  }
  if (d10.length) add('ERR', 'D10', `독일어 인용부호 짝 어긋남 ${d10.length}곳 (§7-5)`, d10);

  /* ── D11 산문 ASCII 따옴표 (§7-1 · 2026-08-10 42편 일괄 확정) ──
     D10은 «반쪽만 현지화된» „…" 만 봤다. 그래서 처음부터 끝까지 ASCII로 쓴 25편 294쌍은
     원리상 침묵했다(그 상태를 못 보게 만든 픽스처까지 있었다 — 아래 D10 ⑤).
     42편을 „…“ 로 통일한 뒤 규칙을 넓힌다. 이제 ASCII 쌍은 «드리프트»다.
     ⚠ 마크다운 링크 타이틀(`](/x.webp "thumb:…")`)은 산문이 아니다 — stripNonProse의
       `\]\([^)]*\)` 는 **타이틀에 괄호가 들어가면 새기 때문에**(실측: holdem-straddle L70의
       "Ein Button- (Mississippi-) Straddle …") 한 겹 중첩까지 허용하는 세척을 먼저 건다. */
  const d11 = [];
  for (const l of lines) {
    const s = stripNonProse(stripLinkTitles(l.raw));
    for (const m of s.matchAll(/"[^"\n]{1,200}"/g)) {
      d11.push(`${where(l)} ${m[0].slice(0, 60)} — 독일식 „…“ 로 (§7-1)`);
    }
  }
  if (d11.length) add('ERR', 'D11', `ASCII 인용부호 ${d11.length}곳 — 독일식은 „…“ (§7-1)`, d11);

  /* ── D12 Gedankenstrich (§7-1) ──
     독일 조판은 Halbgeviertstrich(–)다. EN 마스터에서 상속된 ` — `(em dash)가 2,364곳 있었고
     ` – `는 9곳뿐이었다 — 즉 «소수가 옳고 다수가 틀린» 상태였다. 2026-08-10에 일괄 정리.
     🔴 처음엔 «공백 양쪽»만 봤는데, 그러면 삽입구를 닫는 `—,`(뒤에 공백 없음)와
        하이라이트 마커에 붙은 `==—`가 **원리상 안 걸린다.** 일괄 치환 뒤 5곳이 정확히 그 자리에
        남아 있었다(hand-rankings·split-pot·strategy·texas ×2). → **em dash 전부**로 넓힌다.
        독일어 산문에 em dash가 옳은 자리는 없다. 숫자 범위(15–25%)는 이미 –라 대상이 아니다. */
  const d12 = [];
  for (const l of lines) {
    const n = (l.raw.match(/—/g) ?? []).length;
    if (n) d12.push(`${where(l)} ${n}곳 — '—' → '–' (Halbgeviertstrich)`);
  }
  if (d12.length) {
    add('ERR', 'D12', `em dash ' — ' ${d12.reduce((a, x) => a + Number(x.match(/ (\d+)곳/)[1]), 0)}곳 (§7-1)`, d12);
  }

  /* ── D8 명사 소문자 ── */
  const d8 = [];
  for (const l of lines) {
    for (const m of stripNonProse(l.raw).matchAll(LOWER_NOUN_RE)) d8.push(`${where(l)} "${m[0]}" — §5 모든 명사 대문자`);
  }
  if (d8.length) add('WARN', 'D8', `관사 뒤 소문자 명사 ${d8.length}곳 (§5)`, d8);

  return {
    findings: f,
    // 기계가 «판정하지 않고 넘긴» 것들. 0건 보고가 이 공백을 덮지 않도록 커버리지에 그대로 싣는다.
    unjudged: { thousands: d2unjudged, pruefen: pruefenUnjudged },
    stats: { duCount, politeCount, lines: lines.length },
  };
}

/* ────────────────────────────────────────────────────────────────
   9. 자가 테스트 — 검증되지 않은 게이트는 "통과"가 아니라 "안 본 것"이다.
      ★거짓 픽스처(울리면 안 됨)는 **실제 lib/posts-de 문장에서 딴 것**이다.
        holdem-3bet.ts의 오탐 문장 3개가 그대로 회귀 테스트가 된다(사양서 §3).
   ──────────────────────────────────────────────────────────────── */
const FIXTURES = [
  /* D1 — Sie/du */
  ['D1', 'du 글 안의 경어 "Sie können" (잡아야 함)', true,
    'Wenn du eine 3-Bet siehst, dann Sie können hier folden, und dein Stack bleibt dir erhalten.'],
  ['D1', '[실제 3bet L8] "sie heißt 3-Bet" = 3인칭 (울리면 안 됨)', false,
    'Eine 3-Bet ist die erste Re-Raise vor dem Flop — sie heißt 3-Bet, weil der Big Blind die erste Bet ist, und deine Re-Raise die dritte. Wenn du selbst gegen eine 3-Bet sitzt, folde den Rest.'],
  ['D1', '[실제 3bet L54] 문장 첫머리 "Sie gewinnt den Pot" = 3인칭 (울리면 안 됨)', false,
    '1. **Sie gewinnt den Pot oft sofort.** In einem guten Teil der Fälle foldet der Raiser und du scoopst den Pot vor dem Flop ohne Showdown. Dein Flat tut das nie.'],
  ['D1', '[실제 3bet L46] "wann du sie erklimmst" = 3인칭 (울리면 안 됨)', false,
    'Alles andere dreht sich um die erste Sprosse — wann du sie erklimmst, wie weit, und was du tust, wenn jemand sie bei dir erklimmt.'],
  ['D1', '문장 중간 소유격 "Ihre Hand" = 경어 (잡아야 함)', true,
    'Am Showdown zeigen Sie Ihre Hand, und du siehst, ob dein Read stimmte — dein Stack entscheidet.'],

  /* D2·D3 — 숫자 */
  ['D2', '천단위 쉼표 "€1,650" (잡아야 함)', true, 'Das Main Event kostet €1,650 plus Rake.'],
  ['D2', '"1,5 BB" = 소수점 콤마 (울리면 안 됨)', false, 'Der Straddle liegt bei 1,5 BB und der Open bei 2,2 BB.'],
  ['D2', '"1.000 Chips" = 천단위 마침표 (울리면 안 됨)', false, 'Du startest mit 1.000 Chips und 1.326 möglichen Startkarten.'],
  ['D2', '"0,004%" = 소수 3자리, 천단위 아님 (울리면 안 됨)', false, 'Die Chance auf einen Royal Flush liegt bei 0,004% pro Hand.'],
  ['D3', '마침표 소수점 "31.5 %" (잡아야 함)', true, 'Deine Equity liegt bei 31.5 % gegen dieses Range.'],
  ['D3', '오즈 "7.5:1" (잡아야 함)', true, 'Die Pot Odds stehen bei 7.5:1 gegen dich.'],
  ['D3', '날짜 "31.03.2026" (울리면 안 됨)', false, 'Das Turnier läuft vom 31.03.2026 bis zum 12.04.2026 in Prag.'],
  ['D3', '독일식 날짜 "12. Apr." (울리면 안 됨)', false, 'Der Start ist am 12. Apr. 2026 um 12 Uhr.'],
  ['D3', '"1.000.000" 천단위 (울리면 안 됨)', false, 'Der Preispool erreichte 1.000.000 Euro.'],

  /* D4 — 기계번역 지문 */
  ['D4', '"Ausbeutung" (잡아야 함)', true, 'Die Ausbeutung schwacher Gegner bringt dir das meiste Geld.'],
  ['D4', '"Werthaltige 3-Bet-Range" (잡아야 함)', true, 'Baue eine werthaltige 3-Bet-Range auf.'],
  ['D4', '"Festland Casino" (잡아야 함)', true, 'Im Festland Casino gelten andere Regeln.'],
  ['D4', '"Intermediäre Poker Tipps" (잡아야 함)', true, 'Intermediäre Poker Tipps für den nächsten Schritt.'],
  ['D4', '포지션 "BB gegenüber MP" (잡아야 함)', true, 'Aus dem BB gegenüber MP spielst du enger.'],
  ['D4', '성 오류 "Dein Spielweise" (잡아야 함)', true, 'Dein Spielweise verrät dich am Tisch.'],
  ['D4', '"deine Spielweise" 정상 (울리면 안 됨)', false, 'Deine Spielweise verrät dich am Tisch.'],
  ['D4', '"ein Flop" 정상 남성 (울리면 안 됨)', false, 'Ein Flop wie K-7-2 ist trocken, und dein Board hilft niemandem.'],
  ['D4', '합성어 "eine Flop-Karte"의 핵은 Karte (울리면 안 됨)', false, 'Eine Flop-Karte kann alles ändern, und eine River-Bet entscheidet.'],
  ['D4', '복수 "deine Outs" 정상 (울리면 안 됨)', false, 'Zähl deine Outs und deine Draws, bevor du callst.'],
  ['D4', '"gegen Primärquellen geprüft" (잡아야 함)', true, 'Alle Zahlen wurden gegen Primärquellen geprüft.'],
  ['D4', '"anhand der Primärquellen geprüft" 정상 (울리면 안 됨)', false, 'Alle Zahlen wurden anhand der Primärquellen geprüft.'],

  /* ══ 2026-08-10 (2) 확장 — 사격(斜格)으로 새던 성 오류. 실측 근거는 §6-B ══
     Bet=여성 / Raise=남성은 독일 매체 5곳 DOM 실측으로 확정됐다(die Bet 7 : der Bet 2 · der Raise 5 : die Raise 0). */
  ['D4', '[betting-actions L149] "bei einem Bet" — die Bet의 3격은 einer (잡아야 함)', true,
    'In Fixed-Limit-Spielen deckeln die meisten Cardrooms jede Runde bei einem Bet plus drei Raises.'],
  ['D4', '[pot-odds] "gegen einen Bet" — die Bet의 4격은 eine (잡아야 함)', true,
    'Du entscheidest gegen einen Bet, obwohl die Odds dafür sprechen.'],
  ['D4', '[3bet L160] "enthält bereits die Raise" — der Raise (잡아야 함)', true,
    'Der Pot enthält bereits die Raise und den Call, also gewinnt ein Squeeze mehr.'],
  ['D4', '"nach einer Raise" — der Raise의 3격은 einem (잡아야 함)', true,
    'Nach einer Raise auf 60 € bist du im Nachteil.'],
  ['D4', '"Das Bet war zu groß" — die Bet (잡아야 함)', true, 'Das Bet war zu groß für diesen Pot.'],
  // ★위 확장이 만들 뻔한 오탐 — 전부 lib/posts-de 원문이다
  ['D4', '[pot-odds L22] "einen Bet-Size-Spickzettel" 핵은 Spickzettel (울리면 안 됨)', false,
    'Dieser Guide gibt dir die 10-Sekunden-Methode und einen Bet-Size-Spickzettel für den Tisch.'],
  ['D4', '[limping L95] "die Raise-oder-Fold-Regel" 핵은 Regel (울리면 안 됨)', false,
    'Nur der Big Blind handelt hinter dir — die Raise-oder-Fold-Regel bricht zum Rabatt zusammen.'],
  ['D4', '"in der Hand" = 여성 3격, der가 정답 (울리면 안 됨)', false,
    'Was du in der Hand hältst, zählt weniger als deine Position.'],
  ['D4', '"die Kicker/Dealer/Cooler" = 복수(단수와 동형) (울리면 안 됨)', false,
    'Die Kicker entscheiden hier, die Dealer sagen es an, und die Cooler passieren trotzdem.'],
  ['D4', '"die Pots" 복수 (울리면 안 됨)', false, 'Die Pots werden größer, wenn niemand foldet.'],
  ['D4', '"einem Bet Sizing" 띄어쓴 합성어의 핵은 Sizing (울리면 안 됨)', false,
    'Mit einem Bet Sizing von 33% hältst du seine Range breit.'],
  ['D4', '"einer der Spieler" (울리면 안 됨)', false, 'Einer der Spieler am Tisch hatte den Flush schon getroffen.'],
  ['D4', '[game-order L28] "die **Turn**-Karte" 핵은 Karte — ** 제거가 하이픈을 가린다 (울리면 안 됨)', false,
    'drei **Flop**-Karten werden aufgedeckt → setzen → die **Turn**-Karte kommt dazu → die letzte **River**-Karte wird aufgedeckt.'],
  ['D4', '되읽기에서 내가 쓴 "eine ganze Orbit" — der Orbit (잡아야 함)', true,
    'Die Runde wurde eine ganze Orbit lang eisig, weil niemand mehr reden wollte.'],
  ['D4', '[betting-actions L190] "in jedem einzelnen Orbit" 정상 남성 (울리면 안 됨)', false,
    'Das passiert in jedem einzelnen Orbit, und der Big Blind verschenkt jedes Mal einen gratis Flop.'],
  // 하이픈 합성어 — 성은 «마지막 요소»가 정한다
  ['D4', '[when-to-fold L224] "eine River-Raise" 핵은 Raise (잡아야 함)', true,
    'Behandle eine River-Raise, besonders von einem passiven Spieler, als Value, bis das Gegenteil bewiesen ist.'],
  ['D4', '[game-order] "die Turn-Karte" 핵은 Karte (울리면 안 됨)', false,
    'Danach kommt die Turn-Karte dazu, und die letzte River-Karte entscheidet die Hand.'],
  ['D4', '"ein 3-Bet-Pot" 정상 (울리면 안 됨)', false, 'In einem 3-Bet-Pot ist ein 3-Bet-Pot schnell größer, als du denkst.'],
  // 한정사를 형용사로 먹으면 안 된다 — 아래 넷은 전부 lib/posts-de 원문이다
  ['D4', '[pot-odds L256] "das eine Bet" = 관계대명사 das + eine Bet (울리면 안 됨)', false,
    'Pot Odds sind das eine Stück Mathematik, das eine Bet in eine Rechnung verwandelt.'],
  ['D4', '[outs L54] "das deine Hand" (울리면 안 됨)', false,
    'Zähl die Karten, das deine Hand noch verbessern kann, bevor du callst.'],
  ['D4', '[bankroll L104] "das meine Bankroll" (울리면 안 됨)', false,
    'Das ist das Limit, das meine Bankroll gerade noch trägt.'],
  ['D4', '"dem die Hand" (울리면 안 됨)', false,
    'Der Spieler, dem die Hand gehörte, hatte längst gefoldet.'],

  /* D10 — 독일어 인용부호 짝 */
  ['D10', '[kicker L?] "„Kicker\\"" ASCII로 닫음 (잡아야 함)', true,
    'Viele Spieler sagen „mein Kicker war gut" und meinen damit etwas ganz anderes.'],
  ['D10', '정상 „…“ (울리면 안 됨)', false,
    'Viele Spieler sagen „mein Kicker war gut“ und meinen damit etwas ganz anderes.'],
  ['D10', '인라인 HTML의 style="…" (울리면 안 됨)', false,
    '<div style="background:rgba(255,248,210,0.10);border-radius:14px">„Das Board spielen“ heißt genau das.</div>'],
  ['D10', 'ASCII 따옴표만 쓴 줄 — 여는 „ 가 없으면 판정 대상 아님 (울리면 안 됨)', false,
    'Der Dealer sagt "action is on you" und wartet auf deine Entscheidung.'],

  /* D5 — 금지 용어 */
  ['D5', '"die Blenden" (잡아야 함)', true, 'Die Blenden steigen alle 20 Minuten.'],
  ['D5', '"der Topf" + 포커 문맥 (잡아야 함)', true, 'Der Topf war schon groß genug, also ging sein ganzer Stack rein.'],
  ['D5', '"der Fluss" + 포커 문맥 (잡아야 함)', true, 'Auf dem Fluss kam das dritte Pik, und der Pot ging an ihn.'],
  ['D5', '[korea L422] "eine Bank am Fluss" = 진짜 강 (울리면 안 됨)', false,
    'Minuten später schlägst du ein Ei auf, rührst um und trägst deine Schale zu einer Bank am Fluss.'],
  ['D5', '"Spielfluss"는 정상 독일어 (울리면 안 됨)', false, 'Der Spielfluss leidet, wenn jemand zu lange überlegt.'],
  ['D5', '"Einfluss"는 정상 독일어 (울리면 안 됨)', false, 'Position hat den größten Einfluss auf deine Winrate.'],
  ['D5', '"anrufen" (잡아야 함)', true, 'Du kannst hier anrufen oder folden.'],
  ['D5', '"kleiner Blind" (잡아야 함)', true, 'Der kleiner Blind zahlt die Hälfte.'],
  ['D5', '"anhand der Primärquellen geprüft" — geprüft는 정상 (울리면 안 됨)', false,
    'Alle Zahlen wurden anhand der Primärquellen geprüft. Stand: 28. Juli 2026.'],
  ['D5', '"überprüfen"은 정상 독일어 (울리면 안 됨)', false, 'Du solltest die Regeln vor Ort überprüfen.'],
  // ⚠ 의도적 공백: 앵커 없는 "Ich prüfe hier"(=액션 Check의 오역)는 **잡지 않는다.**
  //   독일어 명령형 prüfe와 형태가 같아 정상 문장 7건을 전부 오탐했기 때문이다(아래 ⑤ 픽스처).
  //   이 공백은 실행할 때마다 커버리지 「D5 미판정 N곳」으로 출력된다 — 침묵시키지 않는다.
  ['D5', '같은 줄에 Check + prüfen (잡아야 함)', true, 'Ein Check bedeutet, dass die Spieler nichts setzen und einfach prüfen.'],
  ['D5', '"du kannst prüfen oder setzen" + Check 앵커 (잡아야 함)', true,
    'Wenn niemand gesetzt hat, kannst du prüfen — der Check kostet dich nichts.'],

  /* D8 — 명사 소문자 */
  ['D8', '"der flop" 소문자 (잡아야 함)', true, 'Der flop kam zweifarbig.'],
  ['D8', '"du willst callen" 동사 소문자는 정답 (울리면 안 됨)', false, 'Wenn du willst callen, dann mach es mit Plan — du foldest sonst zu oft.'],

  /* ══ 2026-08-10 42편 전수 튜닝에서 실측된 오탐 — 전부 lib/posts-de 원문이다.
        26건 중 20건이 오탐이었고, 원인은 아래 다섯 가지뿐이었다. ══ */

  // ① 띄어쓴 영어 합성어 — 성은 «뒤 명사»가 정한다
  ['D4', '[equity L84] "deine Pot Odds" = die Odds (울리면 안 됨)', false,
    'Calle, wenn deine Equity größer ist als deine Pot Odds — dieser eine Vergleich entscheidet fast jeden Call im Poker.'],
  ['D4', '[short-stack L21] "deine Fold Equity" = die Equity (울리면 안 됨)', false,
    'Ein Short Stack hat eine Aufgabe: geh zuerst all-in, behalte deine Fold Equity und wähle den richtigen Moment.'],
  ['D4', '[icm L122] "Ein Bubble Factor von 1,0" = der Factor (울리면 안 됨)', false,
    'Ein Bubble Factor von 1,0 bedeutet, Chips und Geld bewegen sich zusammen (frühes Spiel).'],
  ['D4', '[bubble L102] "dein Bubble Factor" (울리면 안 됨)', false,
    'Nutze die Tatsache, dass dein Bubble Factor tatsächlich niedriger ist als der des Medium Stacks.'],
  // ② 복수는 여성 단수와 형태가 같다
  ['D4', '[kicker L172] "haben keine Kicker" = 복수 (울리면 안 됨)', false,
    'Straße, Flush, Full House und Straight Flush haben keine Kicker, weil sie bereits alle fünf Karten füllen.'],
  ['D4', '[cooler L188] "die keine Cooler sind" = 복수 (울리면 안 됨)', false,
    'Gewinnen ist das, was du in all den Händen tust, die keine Cooler sind.'],
  // ③ 정관사 + eine(=하나의)
  ['D4', '[equity L143] "der eine Spot" = 정상 (울리면 안 됨)', false,
    'All-in ist der eine Spot im Poker, wo der Kuchen genau so geschnitten wird, wie die Mathematik es sagt.'],
  // 진짜로 남은 것 — 정본 §5와 어긋나는 성
  ['D4', '[betting-actions L57] "es ist ein Bet" — §5 die Bet (잡아야 함)', true,
    'All-in zu gehen ist keine separate sechste Aktion — es ist ein Bet, Call oder Raise mit allen Chips.'],
  ['D4', '[3bet L57] "Eine Raise lässt Gegner zahlen" — §5 der Raise (잡아야 함)', true,
    'Eine Raise lässt Gegner zum Weiterspielen zahlen, statt sie einen billigen Flop sehen zu lassen.'],

  // ④ 하이라이트 마커가 문장 부호를 가려 3인칭 Sie/Ihr를 경어로 오판
  ['D1', '[pot-odds L22] "…trennt.== Sie sind" = 3인칭 복수 (울리면 안 됨)', false,
    '==Pot Odds sind das eine Stück Mathematik, das einen Call aus Gefühl von einem Call mit Grund trennt.== Sie sind in fünf Minuten gelernt. Dieser Guide gibt dir die Formel, damit du sie im Kopf hast.'],
  ['D1', '[split-pot L105] "==r:**Split.**== Ihr beide spielt" = 2인칭 복수 (울리면 안 됨)', false,
    'Du hältst A♠ K♦; dein Gegner hält 2♣ 3♥. ==r:**Split.**== Ihr beide spielt die 9-8-7-6-5 des Boards, weil deine großen Hole Cards nichts verbessern.'],

  // ⑤ prüfen — 독일어 «명령형»이 1인칭 단수와 형태가 같다. 사양서의 인칭 조건은 7/7 오탐이었다
  ['D5', '[hand-rankings L107] "prüfe auf ein Full House" (울리면 안 됨)', false,
    'Sobald sich das Board paart, prüfe auf ein Full House, bevor du dich mit einem Flush festlegst.'],
  ['D5', '[korea L468] "prüfe die offiziellen Rennwebsites" (울리면 안 됨)', false,
    'Daten und Events können sich ändern — prüfe die offiziellen Rennwebsites, bevor du Flüge buchst.'],
  ['D5', '[bad-beat L122] "prüfe immer die ausgehängten Regeln" (울리면 안 됨)', false,
    'Nimm nie etwas an; prüfe immer die ausgehängten Regeln des jeweiligen Rooms.'],
  ['D5', '[pot-odds L112] "prüfe sie gegen die Bet" (울리면 안 됨)', false,
    'Rechne sie in Equity um und prüfe sie gegen die Bet. Das sind die Draws, denen du am häufigsten begegnest.'],
  ['D5', '[card-counting L126] "prüfe, ob du eine Karte hältst" (울리면 안 됨)', false,
    'Bevor du bluffst, prüfe, ob du eine Karte hältst, die ihre stärkste Calling-Hand unwahrscheinlicher macht.'],
  // ⑥ 형용사 + 합성어
  ['D5', '[straddle L104] "Ein großer Blind-Straddle" (울리면 안 됨)', false,
    'Ein großer Blind-Straddle kann den Pot vor dem Flop verdreifachen.'],
  ['D5', '[korea L394] "Der Han-Fluss" = 고유명사 합성어 (울리면 안 됨)', false,
    'Der Han-Fluss durchschneidet das Zentrum von Seoul, und beide Ufer haben über 80 Kilometer flache Laufwege.'],

  // ⑦ 천단위 쉼표 — 앵커가 없으면 «소수 3자리»와 구분되지 않는다
  ['D2', '[korea L87] "42,195K" = 마라톤 거리(소수 3자리) (울리면 안 됨)', false,
    'Das Rennen: Gegründet 1946 — Koreas zweitältester Marathon. Distanzen: Full 42,195K · 10K.'],
  ['D2', '금액 앵커가 붙은 "€1,650" (잡아야 함)', true, 'Das Main Event kostet €1,650 plus Rake.'],
  ['D2', '수량 앵커가 붙은 "10,000 Chips" (잡아야 함)', true, 'Du startest mit 10,000 Chips.'],

  /* ══ 2026-08-10 (10) 확장 — 표기 42편 일괄 확정 후 «되돌아감»을 막는 두 규칙 ══
     D10이 「여는 „ 가 있을 때」만 봤기 때문에 **처음부터 ASCII로 쓴 25편 294쌍은 침묵**했다.
     그 침묵을 고정하던 픽스처(D10 ⑤)가 아래 D11 첫 줄로 뒤집힌다 — 규칙이 넓어졌다는 뜻이다. */

  /* D11 — 산문 ASCII 따옴표 */
  ['D11', '[fish 원문] ASCII "Fish" (잡아야 함)', true,
    'Am Tisch nennt man ihn "Fish", und niemand sagt es ihm ins Gesicht.'],
  ['D11', '독일식 „Fish“ 정상 (울리면 안 됨)', false,
    'Am Tisch nennt man ihn „Fish“, und niemand sagt es ihm ins Gesicht.'],
  ['D11', '[straddle L70] 링크 타이틀 속 괄호 — "thumb:…"는 산문이 아니다 (울리면 안 됨)', false,
    '![Ein Straddle-Einsatz neben dem Dealer-Button](/images/holdem-straddle-button.webp "Ein Button- (Mississippi-) Straddle wird vom Button gesetzt")'],
  ['D11', '인라인 썸네일 링크 (울리면 안 됨)', false,
    'Mehr dazu in der [Poker-Reihenfolge](/de/blog/holdem-hand-rankings "thumb:/images/holdem-hand-rankings-hero.webp").'],
  ['D11', '인라인 HTML의 style="…" (울리면 안 됨)', false,
    '<div style="background:rgba(255,248,210,0.10);border-radius:14px">Der Fish zahlt die Rechnung.</div>'],
  ['D11', '한 줄에 두 쌍 (둘 다 잡아야 함)', true,
    'Er sagt "ich calle mal" und meint damit "ich habe keinen Plan".'],

  /* D12 — Gedankenstrich */
  ['D12', "em dash ' — ' (잡아야 함)", true,
    'Limpen ist fast immer ein Fehler — du kannst den Pot präflop nicht gewinnen.'],
  ['D12', "Halbgeviertstrich ' – ' 정상 (울리면 안 됨)", false,
    'Limpen ist fast immer ein Fehler – du kannst den Pot präflop nicht gewinnen.'],
  ['D12', '숫자 범위 "15–25%" (울리면 안 됨)', false,
    'Ein Short Stack liegt grob bei 15–25 Big Blinds, und deine Fold Equity trägt dich.'],
  ['D12', '표 구분선 "|------|" (울리면 안 됨)', false, '| Duell | Gewinnt | Warum |'],
  ['D12', '삽입구를 닫는 "—," — 뒤에 공백이 없어 «공백 양쪽» 규칙을 빠져나갔다 (잡아야 함)', true,
    'Hält dein Gegner aber ebenfalls ein einzelnes Ass – und nicht den letzten König —, teilt ihr.'],
  ['D12', '하이라이트 마커에 붙은 "==—" (잡아야 함)', true,
    'Rechnet das einmal durch und sagt es laut==— die häufigste Streiterei entsteht über Chip-Werte.'],
];

if (argv.includes('--selftest')) {
  console.log('\n══════ de 문체 게이트 자가 테스트 ══════');
  let pass = 0;
  for (const [code, name, shouldFire, content] of FIXTURES) {
    const { findings } = auditDeStyle({ slug: 'selftest', content });
    const hit = findings.filter((x) => x.code === code || (code === 'D1' && x.code === 'D1b'));
    const ok = shouldFire ? hit.length > 0 : hit.length === 0;
    if (ok) pass++;
    console.log(`${ok ? '✅' : '❌'} [${code}] ${shouldFire ? '[잡아야 함]' : '[울리면 안 됨]'} ${name}`);
    if (!ok || VERBOSE) for (const x of hit) {
      console.log(`      → [${x.code}] ${x.msg}`);
      for (const d of (x.detail ?? []).slice(0, 3)) console.log(`          · ${d}`);
    }
  }
  console.log(`\n${pass === FIXTURES.length ? '✅' : '🔴'} ${pass}/${FIXTURES.length} 통과`);
  process.exit(pass === FIXTURES.length ? 0 : 1);
}

/* ────────────────────────────────────────────────────────────────
   10. 실행
   ──────────────────────────────────────────────────────────────── */
const POSTS = await loadDePosts();
const bySlug = new Map(POSTS.map((p) => [p.slug, p]));
const oneSlug = arg('slug');
const oneCluster = arg('cluster');

let targets;
if (oneSlug) targets = [['지정', [oneSlug]]];
else if (oneCluster) {
  const key = Object.keys(DE_CLUSTERS).find((k) => k.toLowerCase() === oneCluster.toLowerCase());
  if (!key) { console.error(`🔴 클러스터 '${oneCluster}' 없음. 가능: ${Object.keys(DE_CLUSTERS).join(', ')}`); process.exit(1); }
  targets = [[key, DE_CLUSTERS[key]]];
} else targets = Object.entries(DE_CLUSTERS);

/* 클러스터 정의가 실제 파일과 어긋나면 «검사 안 한 글»이 조용히 생긴다 — 먼저 대조한다. */
const defined = new Set(Object.values(DE_CLUSTERS).flat());
const orphans = POSTS.map((p) => p.slug).filter((s) => !defined.has(s));
const ghosts = [...defined].filter((s) => !bySlug.has(s));

/* ── D6 FAQ 스키마 — 빌드 산출물이 진실이다(소스 raw 카운트는 CRLF 정규화 탓에 틀린다).
      ★산출물이 없으면 "0건"이 아니라 «미검사»다. 이 구분을 커버리지에 그대로 출력한다. */
const OUT_DIR = path.join(ROOT, '.next', 'server', 'app', 'de', 'blog');
const haveBuild = fs.existsSync(OUT_DIR);
function faqQuestions(slug) {
  const html = path.join(OUT_DIR, `${slug}.html`);
  if (!fs.existsSync(html)) return null;
  const txt = fs.readFileSync(html, 'utf8');
  // JSON-LD가 페이지와 RSC 페이로드에 각각 실려 FAQPage 수만큼 중복 계수된다 → 나눠서 센다.
  // ("@type":"Question" 문자열은 산출물에서 이스케이프돼 0으로 세진다 → acceptedAnswer로 센다.)
  const blocks = Math.max(1, (txt.match(/FAQPage/g) ?? []).length);
  return Math.round((txt.match(/acceptedAnswer/g) ?? []).length / blocks);
}

const SEV_ORDER = { ERR: 0, WARN: 1, INFO: 2 };
const SEV_ICON = { ERR: '🔴', WARN: '🟠', INFO: '🟡' };
const W = (s, n) => (s + ' '.repeat(n)).slice(0, n);
const report = [];
let faqChecked = 0, faqMissing = 0;

for (const [cluster, slugs] of targets) {
  for (const slug of slugs) {
    const post = bySlug.get(slug);
    if (!post) { report.push({ cluster, slug, findings: [{ sev: 'ERR', code: 'D0', msg: '슬러그가 lib/posts-de 에 없다 — DE_CLUSTERS 정의 오류' }], stats: {} }); continue; }
    const { findings, stats, unjudged } = auditDeStyle(post);

    // D6
    const q = haveBuild ? faqQuestions(slug) : null;
    if (q === null) faqMissing++;
    else {
      faqChecked++;
      if (q === 0) findings.push({ sev: 'ERR', code: 'D6', msg: 'FAQPage 리치결과 0문항 — 산출물에 스키마가 없다 (§14-A 5: **Q. + 빈 줄 + A.)' });
    }

    // D9 masterUpdated — 드리프트 추적에 안 잡히는 글. 소스 원문에서 본다.
    const src = path.join(ROOT, 'lib', 'posts-de', `${slug}.ts`);
    if (fs.existsSync(src) && !/masterUpdated\s*:/.test(fs.readFileSync(src, 'utf8'))) {
      findings.push({ sev: 'WARN', code: 'D9', msg: 'masterUpdated 없음 — 미러 드리프트 추적에 안 잡힌다(경화하며 채울 것)' });
    }

    report.push({ cluster, slug, findings, stats, unjudged, faq: q });
  }
}

console.log('\n══════ de 문체 게이트 ══════');
console.log(`대상 ${report.length}편 · 기준 docs/translation-terms-de.md §1~§7 · 사양 docs/de-style-gate-spec.md\n`);

let totalErr = 0, totalWarn = 0, curCluster = null;
for (const r of report) {
  if (r.cluster !== curCluster) { curCluster = r.cluster; console.log(`\n── [${curCluster}] ──`); }
  const errs = r.findings.filter((x) => x.sev === 'ERR');
  const warns = r.findings.filter((x) => x.sev === 'WARN');
  totalErr += errs.length; totalWarn += warns.length;
  const mark = errs.length ? '🔴' : warns.length ? '🟠' : '✅';
  console.log(`\n${mark} ${W(r.slug, 34)} ${errs.length}err ${warns.length}warn   FAQ ${r.faq ?? '?'}문항`);
  for (const x of [...r.findings].sort((a, b) => SEV_ORDER[a.sev] - SEV_ORDER[b.sev])) {
    console.log(`   ${SEV_ICON[x.sev]} [${x.code}] ${x.msg}`);
    const detail = x.detail ?? [];
    const show = VERBOSE ? detail.length : 6;
    for (const d of detail.slice(0, show)) console.log(`        · ${d}`);
    if (detail.length > show) console.log(`        · … 외 ${detail.length - show}건 (--verbose)`);
  }
}

const clean = report.filter((r) => !r.findings.some((x) => x.sev !== 'INFO')).length;
console.log('\n══════ 요약 ══════');
console.log(`통과(무결) ${clean}/${report.length}편 · 🔴 ${totalErr}건 · 🟠 ${totalWarn}건`);

const byCode = new Map();
for (const r of report) for (const x of r.findings) {
  if (x.sev === 'INFO') continue;
  const k = `${x.code}/${x.sev}`;
  byCode.set(k, (byCode.get(k) ?? 0) + 1);
}
console.log('\n코드별:');
for (const [k, n] of [...byCode.entries()].sort((a, b) => b[1] - a[1])) console.log(`  ${W(k, 10)} ${n}편`);

/* ── 검사 커버리지 — "0건"이 «검증»인지 «미검사»인지 반드시 갈라서 말한다 ── */
console.log('\n검사 커버리지:');
console.log(`  D1~D5·D7·D8 (본문 문체): ${report.filter((r) => r.stats.lines).length}/${report.length}편 실제 검사`);
console.log(`  D10~D12 (표기: „…“ · ASCII 따옴표 · Gedankenstrich): ${report.filter((r) => r.stats.lines).length}/${report.length}편 실제 검사`);
if (haveBuild) console.log(`  D6 (FAQ 스키마·산출물 기준): ${faqChecked}/${report.length}편 확인${faqMissing ? ` · ⚠ 산출물 없는 글 ${faqMissing}편 = 미검사` : ''}`);
else console.log(`  ⚠ D6 (FAQ 스키마): .next/server/app/de/blog 없음 → ${report.length}편 전부 **미검사**. \`npm run build\` 후 다시 돌려라.`);
/* ★기계가 «판정하지 않고 넘긴» 자리 — 여기서 침묵하면 0건이 거짓말이 된다. */
const unjThousands = report.flatMap((r) => (r.unjudged?.thousands ?? []).map((d) => `${r.slug} ${d}`));
const unjPruefen = report.flatMap((r) => (r.unjudged?.pruefen ?? []).map((d) => `${r.slug} ${d}`));
if (unjThousands.length) {
  console.log(`  ⚠ D2 미판정 ${unjThousands.length}곳 — 금액·수량 앵커가 없어 «천단위 쉼표»인지 «소수 3자리»인지 기계가 못 가른다(사람이 볼 것):`);
  for (const d of unjThousands.slice(0, VERBOSE ? 99 : 6)) console.log(`      · ${d}`);
}
if (unjPruefen.length) {
  console.log(`  ⚠ D5 미판정 ${unjPruefen.length}곳 — 같은 줄에 Check가 없는 prüfen. 독일어 명령형과 형태가 같아 앵커 없이는 판정 불가:`);
  for (const d of unjPruefen.slice(0, VERBOSE ? 99 : 6)) console.log(`      · ${d}`);
}
const fullFormal = report.filter((r) => r.findings.some((x) => x.code === 'D1b')).map((r) => r.slug);
if (fullFormal.length) console.log(`  ℹ D1: 통짜 경어체 ${fullFormal.length}편은 «혼용»이 아니라 별개 판정 — ${fullFormal.join(', ')}`);
if (orphans.length) console.log(`  ⚠ DE_CLUSTERS에 없는 글 ${orphans.length}편 — 클러스터 모드에서 **검사조차 안 된다**: ${orphans.join(', ')}`);
if (ghosts.length) console.log(`  ⚠ DE_CLUSTERS에 있으나 파일이 없는 슬러그 ${ghosts.length}개: ${ghosts.join(', ')}`);
if (!orphans.length && !ghosts.length) console.log(`  ✅ DE_CLUSTERS ${defined.size}편 = lib/posts-de 실제 ${POSTS.length}편 (누락·유령 0)`);

process.exit(totalErr > 0 ? 1 : 0);
