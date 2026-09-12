/**
 * 대회 수치 대조 게이트 — 한국어 원문의 «금액»이 6로케일에서 그대로 살아 있는가
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a)
 *   `check:tournaments-i18n`은 **«한글이 남는가»만** 본다(그 파일 머리글이 스스로 그렇게 적어 뒀다).
 *   그래서 «번역은 됐는데 숫자가 어긋난» 자리는 어떤 게이트도 안 봤다. 대회 데이터는
 *   §13과 같은 급(**언어 불변**)인데도 그렇다 — `lib/tournaments-i18n.ts` 머리글 축어:
 *   *「대회 데이터(날짜·바이인·출처)는 §13처럼 언어 불변이지만…」*
 *
 * 🔴 «숫자 그대로 비교»는 원리상 못 쓴다 — 배율 단위와 소수점 구분자가 로케일마다 다르다
 *   `₩5만~₩1,000만` 하나가 이렇게 갈린다(실측 6로케일):
 *     en `₩50K–₩10M` · ja `5万〜1,000万ウォン` · zh `5万〜1,000万韩元` · zh-hant `5萬〜1,000萬韓元`
 *     es `50 mil – 10 M KRW` · de `50 Tsd. – 10 Mio. KRW`
 *   🔴 **de 사전은 `.`이 천단위이고 `,`가 소수점이다**(`NT$120.000` = 12만 · `1,5 Mio.` = 150만).
 *   🪶 es 사전도 여기서는 유럽식 표기를 쓰지만, **es 포스트 본문은 EN 포맷이 정본이다**
 *      (`docs/translation-terms-es.md` L8 — 「NO convertir a formato europeo」).
 *      «사전 한 칸의 표기»와 «본문 규약»은 다른 축이다. 그래서 이 게이트는 **규약 목록을 안 쓰고**
 *      자릿수로 판별한다(아래 `parseNumber`). 본문 규약은 `check:number-format`이 따로 본다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = 보드 값 필드(buyin·venue·dateNote)와 JSON-LD 설명문의 **금액 토큰 절대값 다중집합**
 *   못 본다 = ① **날짜**(`7/10~9/10` → `Jul 10 – Sep 10` — 표기가 통째로 다르다)
 *            ② **통화 없는 맨 수**(135 이벤트 · 46 이벤트 · 100 브레이슬릿) — 🟠로만 센다
 *            ③ 번역이 «맞는가»(뜻·표기) · 원문 수치가 «옳은가»(그건 1차 출처 몫)
 *   🪶 «금액»의 정의 = 통화 기호(₩ $ € ₱ NT$ ¥ £)가 붙었거나 배율 단위(만·億·K·M·mil·Mio.)가 붙은 수.
 *
 * 사용
 *   node scripts/check-tournament-numbers.mjs
 *   npm run check:tournament-numbers -- --strict     🔴면 exit 1
 *   npm run check:tournament-numbers:selftest
 */
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);

export const LOCALES = ['en', 'ja', 'zh', 'zh-hant', 'es', 'de'];
export const FIELDS = ['buyin', 'venue', 'dateNote'];

/* 🔴 «유럽식 로케일 목록»을 여기 두지 마라 — 한때 `EU_DECIMAL`에 `es`가 들어 있었다.
   그 분류는 **정본과 반대**다: `docs/translation-terms-es.md` L8이 es 본문에 대해
   *「MANTENER EL FORMATO DE EN TAL CUAL … NO convertir a formato europeo」* 라고 못 박았고,
   코퍼스 실측도 같다(2026-09-12: 소수 마침표 2,005 ↔ 쉼표 20).
   규약 목록을 두 파일에 적으면 갈라진다 — 이 게이트는 파서가 «자릿수»로 판별하므로 목록이 필요 없고,
   로케일별 표기 규약은 `scripts/check-number-format.mjs`가 **코퍼스에서 학습해** 한 곳에서만 판정한다. */

/** 수 뒤에 오면 «금액이 아니라 개수»라는 신호 — 로케일별 세는 말 */
const COUNT_WORD = /^\s*(entries|entradas|エントリー|参加|人|名|players|jugadores|Teilnehmer|inscripciones|events|eventos|イベント|イベント数|个|個|場|席|seats|tickets|asientos)\b/i;

/** 배율 단위 — 긴 것부터 봐야 `Mio.`가 `M`에 먹히지 않는다 */
const SCALES = [
  ['mrd.', 1e9], ['mio.', 1e6], ['tsd.', 1e3],
  ['bn', 1e9], ['mil millones', 1e9], ['millones', 1e6], ['mil', 1e3],
  // 🔴 `천`이 빠져 있었다 — `1억 5천만`이 [1e8]로 읽혀 **5천만이 통째로 증발**했다(2026-09-12 렌즈 실증)
  ['억', 1e8], ['천만', 1e7], ['만', 1e4], ['천', 1e3],
  ['億', 1e8], ['亿', 1e8], ['万', 1e4], ['萬', 1e4],
  ['k', 1e3], ['m', 1e6], ['b', 1e9],
];

const EMPTY = "";
const DOT = ".";

/** 코퍼스에 실제로 쓰인 통화 표기 전수 (2026-09-12 실측 · 3글자 코드는 «허용목록»이다 —
    LES·CTP·WTC 같은 회장명 약어가 통화로 읽히면 안 된다) */
const CURRENCY_TOKENS = [
  '₩', 'NT$', 'HK$', 'US$', 'R$', 'A$', '$', '€', '£', '₱', '¥', '₫', '฿',
  'KRW', 'USD', 'EUR', 'PHP', 'JPY', 'TWD', 'AUD', 'CHF', 'GBP', 'BRL', 'VND', 'THB',
];
/**
 * 🔴 `$`를 손으로 이스케이프하지 마라 — 한 겹 벗겨지면 «문자열 끝» 앵커가 돼
 *    **아무 문자열에나 매치한다**(2026-09-12에 실제로 그렇게 새서 `1,150 entries`가 금액이 됐다).
 *    그래서 토큰 배열에서 «코드로» 이스케이프한다.
 */
const CURRENCY = CURRENCY_TOKENS.map((s) =>
  s.split('').map((c) => (/[.*+?^${}()|[\]\\]/.test(c) ? String.fromCharCode(92) + c : c)).join(''),
).join('|');

/**
 * 수 문자열을 파싱한다 — 🔴 **로케일이 아니라 «자릿수»로 구분자를 판별한다.**
 *
 * 첫 실행이 오탐 38건을 냈다(2026-09-12). 원인: es·de 사전에 **미등재라 한국어 표기가
 * 그대로 통과한** 값(`$2,750` · `₱45,000`)에 유럽식 규약을 먹여 3 · 45로 읽었다.
 * 게이트는 «이 문자열이 사전을 거쳤는가»를 모른다 — 그러니 규약을 로케일에서 가져오면 안 된다.
 *
 * 규칙(통화 표기에선 로케일 무관하게 성립한다):
 *   마지막 구분자 뒤 자릿수가 **정확히 3** → 그 구분자는 **천단위** (`2,750` · `€5.300` · `120.000`)
 *   1~2자리                              → **소수점**              (`1,5 Mio.` · `$1.5M` · `€5,30`)
 * 🪶 `locale`은 남겨 둔다 — 판별이 갈리는 새 표기가 나오면 여기서 갈라야 하기 때문이다.
 */
export function parseNumber(raw, locale) {
  const s = String(raw).trim().replace(/\s+/g, EMPTY);
  const tail = s.match(/[.,](\d+)$/);
  let normalized;
  if (tail && tail[1].length !== 3) {
    const cut = s.lastIndexOf(tail[0][0]);
    normalized = s.slice(0, cut).replace(/[.,]/g, EMPTY) + DOT + s.slice(cut + 1);
  } else {
    normalized = s.replace(/[.,]/g, EMPTY);
  }
  const n = Number(normalized);
  return Number.isFinite(n) ? n : null;
}

/**
 * 문자열에서 «금액» 토큰의 절대값 다중집합을 뽑는다.
 *
 * 금액으로 치는 것 셋:
 *   ① 통화 기호가 바로 앞에 붙은 수      `₩150만` · `$2,750` · `NT$120,000`
 *   ② 배율 단위가 바로 뒤에 붙은 수      `5万` · `10 Mio.` · `50 mil`
 *   ③ 🔴 문자열 «어딘가»에 통화가 있고, 그 수가 **천 이상**인 것
 *      근거(첫 실행 잔여 2건 · 2026-09-12): es·de가 `AUD $1,150~$5,000`을
 *      **`AUD 1.150–5.000`**으로 옮긴다 — 통화는 맨 앞 한 번뿐이라 ①②에 안 걸려
 *      값이 맞는데도 «없음»으로 잡혔다(탐지 공백 · 결함 아님).
 *      🪶 «천 이상»으로 자르는 이유 = 날짜 조각(`7/10~9/10`)과 갈라야 하기 때문이다.
 *      🪶 연도(19xx·20xx)는 통화가 같이 있어도 제외한다 — 금액이 아니다.
 */
export function amounts(text, locale) {
  if (!text) return [];
  const CUR_RE = new RegExp(CURRENCY);
  const hasCurrency = CUR_RE.test(text);
  const out = [];
  const re = new RegExp(
    `(${CURRENCY})?\\s*([0-9][0-9.,]*)\\s*` +
      `(Mrd\\.|Mio\\.|Tsd\\.|mil millones|millones|mil|bn|억|천만|万|萬|億|亿|만|천|[KMB])?`,
    'gi',
  );
  let m;
  while ((m = re.exec(text))) {
    const [, cur, num, scaleRaw] = m;
    const after = text.slice(m.index + m[0].length);
    const before = text.slice(0, m.index);
    const scaleKey = (scaleRaw || '').toLowerCase();
    let mult = 1;
    let scaleUsed = scaleKey;
    if (scaleKey) {
      // 🔴 단어의 «첫 글자»를 배율로 읽지 마라 — `€5,300 (Main)`의 M · de `$15.000 bis`의 b.
      //    그때 토큰을 **버리면 안 된다**(2026-09-12 첫 실행: de triton `$15.000`이 통째로 사라졌다).
      //    배율만 무르고 수는 그대로 센다.
      if (/^[A-Za-z]/.test(after) && /^[kmb]$/.test(scaleKey)) scaleUsed = '';
      else {
        const hit = SCALES.find(([k]) => k === scaleKey);
        if (hit) mult = hit[1];
      }
    }
    const n = parseNumber(num, locale);
    if (n === null) continue;
    if (!cur && !scaleUsed) {
      // ③ — 문자열에 통화가 있고, 천 이상이고, 날짜 조각·연도가 아닌 수
      if (!hasCurrency) continue;
      if (n < 1000) continue;
      if (n >= 1900 && n <= 2100 && !/[.,]/.test(num)) continue;
      /* 🔴 뒤에 «세는 말»이 오면 금액이 아니다 — 같은 필드에 바이인과 참가자 수가 같이 있으면
         `1,150 entries`가 금액으로 셌다(2026-09-12 렌즈 실증). ③ 분기는 문자열 전체에서
         통화를 찾으므로 이 가드가 없으면 «금액 옆의 개수»를 전부 끌어온다. */
      if (COUNT_WORD.test(after)) continue;
      // 🔴 날짜 조각 필터가 «하이픈 범위»까지 먹으면 안 된다 — 하이픈으로 이은 범위의
      //    둘째 금액이 통째로 사라졌다(2026-09-12 렌즈 실증). 슬래시(7/10)만 날짜로 본다.
      if (/^[/]/.test(after) || /\d[/]$/.test(before)) continue;
    }
    out.push(Math.round(n * mult));
  }
  return out.sort((a, b) => a - b);
}

const same = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

/**
 * 🔴 값 필드와 설명문은 «같은 기준»이 아니다.
 *   값 필드(buyin·venue·dateNote) = 같은 값의 **표기 변환** → 완전 일치(`same`).
 *   JSON-LD 설명문             = `lib/tournaments-i18n.ts` 머리글이 못 박은 **«현지 재저작»**
 *                                → 로케일이 «더» 말할 수 있다. 그러니 **포함**만 본다.
 *   실례(2026-09-12 전건 판정): ko는 「메인 18억 + 딥스택 5개 × 4천만」인데 6로케일은
 *   「시리즈 총액 20억 보증, 메인 18억 GTD」로 묶어 말한다. 18 + 5×0.4 = **20억** — 산수가 맞고
 *   모순이 아니다. 완전 일치로 재면 이 6건이 영구 🟠로 남아 게이트가 무시당한다.
 *   🪶 그래서 잡는 것은 «ko가 말한 금액이 로케일에서 사라지거나 값이 달라진» 자리뿐이다.
 */
const covers = (base, mine) => base.every((v) => mine.includes(v));

/**
 * 🔴 설명문 축은 **기계가 원리상 판정할 수 없다.** 인정하고 🪶로 내린다.
 *
 *   `lib/tournaments-i18n.ts` 머리글이 못 박았듯 설명문은 «번역»이 아니라 «현지 재저작»이다.
 *   실례(2026-09-12 전건 판정): ko 「메인 18억 + 딥스택 5개 각 **4천만**」 ↔ 6로케일
 *   「총액 **20억** 보증, 메인 18억」. 18 + 5×0.4 = 20억으로 **산수가 맞다** — 결함이 아니다.
 *   그런데 «없어진 4천만 · 새로 나온 20억»은 **값이 틀린 경우와 모양이 똑같다.**
 *   개수로도 못 가른다(양쪽 다 금액 2개다).
 *
 *   🔴 그래서 이 축으로 🟠을 띄우면 **영구 경보**가 되고, 영구 경보는 곧 무시되는 게이트다.
 *      대신 매 실행 «갈린 자리»를 그대로 찍고 «사람이 판정한다»고 말한다.
 *      exit 코드와 🔴은 **값 필드**(표기 변환이라 기계가 판정 가능)에만 건다.
 */

// ── 셀프테스트 ────────────────────────────────────────────
function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);

  one('ko 5만~1,000만', same(amounts('₩5만~₩1,000만', 'ko'), [50000, 10000000]));
  one('en 50K–10M', same(amounts('₩50K–₩10M', 'en'), [50000, 10000000]));
  one('ja 5万〜1,000万ウォン', same(amounts('5万〜1,000万ウォン', 'ja'), [50000, 10000000]));
  one('zh-hant 5萬〜1,000萬韓元', same(amounts('5萬〜1,000萬韓元', 'zh-hant'), [50000, 10000000]));
  one('es 50 mil – 10 M KRW', same(amounts('50 mil – 10 M KRW', 'es'), [50000, 10000000]));
  one('de 50 Tsd. – 10 Mio. KRW', same(amounts('50 Tsd. – 10 Mio. KRW', 'de'), [50000, 10000000]));

  one('ko 메인 ₩150만 = 150만', same(amounts('메인 ₩150만', 'ko'), [1500000]));
  one('en Main ₩1.5M = 150만', same(amounts('Main ₩1.5M', 'en'), [1500000]));
  one('de 1,5 Mio. = 150만 (쉼표가 소수점)', same(amounts('Main Event 1,5 Mio. KRW', 'de'), [1500000]));
  one('es 1,5 M = 150만', same(amounts('Main event 1,5 M KRW', 'es'), [1500000]));

  one('en NT$120,000 = 12만', same(amounts('Freeroll–NT$120,000', 'en'), [120000]));
  one('de NT$120.000 = 12만 (마침표가 천단위)', same(amounts('Freeroll – NT$120.000', 'de'), [120000]));
  one('es €5.300 = 5300', same(amounts('€5.300 (main event)', 'es'), [5300]));
  one('en €5,300 = 5300', same(amounts('€5,300 (Main)', 'en'), [5300]));

  // 🔴 못 보는 것 — 이것들이 «0건»으로 나오는 게 정상이다
  one('날짜는 금액이 아니다', amounts('(online satellites Jul 10 – Sep 10)', 'en').length === 0);
  one('맨 개수는 금액이 아니다', amounts('135 events', 'en').length === 0);
  one('빈 값은 빈 배열', amounts('', 'en').length === 0 && amounts(undefined, 'en').length === 0);

  // 오탐 함정 — 단어 안의 M/K/B
  one('Main의 M을 배율로 읽지 않는다', same(amounts('메인 ₩150만', 'ko'), amounts('Main ₩1.5M', 'en')));
  one('«5,300 Main»의 Main은 배율이 아니다', same(amounts('€5,300 (Main)', 'en'), [5300]));

  one('₩700만 ↔ up to ₩7M', same(amounts('~₩700만 (하이롤러)', 'ko'), amounts('up to ₩7M (high roller)', 'en')));
  one('₩700만 ↔ de 7 Mio.', same(amounts('~₩700만 (하이롤러)', 'ko'), amounts('bis 7 Mio. KRW (High Roller)', 'de')));

  // 🔴 첫 실행 오탐 38건의 재발 방지 — 사전 미등재로 «한국어 표기가 그대로 통과»한 값에
  //    유럽식 규약을 먹이면 $2,750이 3이 된다. 구분자는 로케일이 아니라 자릿수로 판별한다.
  one('사전 미등재 통과값 $2,750을 es로 읽어도 2750', same(amounts('$2,750~$250,000', 'es'), [2750, 250000]));
  one('사전 미등재 통과값 ₱45,000을 de로 읽어도 45000', same(amounts('₱45,000', 'de'), [45000]));

  // 🔴 첫 실행 잔여 2건 — 통화가 맨 앞에 한 번만 붙는 표기(탐지 공백이었다)
  one('AUD $1,150~$5,000 ↔ es AUD 1.150–5.000',
    same(amounts('AUD $1,150~$5,000', 'ko'), amounts('AUD 1.150–5.000', 'es')));
  one('통화가 없으면 천 이상 맨 수도 금액이 아니다', amounts('1,150 entries', 'en').length === 0);
  one('통화가 있어도 연도는 금액이 아니다', same(amounts('₩150만 (2026)', 'ko'), [1500000]));
  one('통화가 있어도 날짜 조각은 금액이 아니다', same(amounts('$1,100 (7/10~9/10)', 'en'), [1100]));

  // 🔴 첫 실행 설명문 7건의 재발 방지
  one('de `$15.000 bis $200.000` — bis의 b를 배율로 읽고 토큰을 버리지 않는다',
    same(amounts('Buy-ins von $15.000 bis $200.000', 'de'), [15000, 200000]));
  one('설명문은 «재저작»이라 포함만 본다 — 로케일이 더 말해도 통과',
    covers([1800000000], [1800000000, 2000000000]));
  one('설명문도 «ko 금액이 사라지면» 잡는다',
    !covers([15000, 200000], [200000]));

  // 🔴 2026-09-12 렌즈 실증 — 셀프테스트가 «쉬운 쪽»만 덮고 있던 자리들
  one('통화가 섞인 문자열의 참가자 수는 금액이 아니다',
    same(amounts('$5,000 buy-in · 1,150 entries', 'en'), [5000]));
  one('로케일 세는 말도 마찬가지 — entradas',
    same(amounts('buy-in $5,000 · 1,823 entradas', 'es'), [5000]));
  one('하이픈으로 이은 범위의 둘째 금액이 사라지지 않는다',
    same(amounts('$1,000-2,000', 'en'), [1000, 2000]));
  one('한국어 «천» 단위를 센다 — 1억 5천만',
    same(amounts('메인 1억 5천만', 'ko'), [50000000, 100000000]));
  one('날짜 슬래시는 여전히 금액이 아니다',
    same(amounts('$1,100 (7/10~9/10)', 'en'), [1100]));
  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

// ── 본체 ──────────────────────────────────────────────────
async function main() {
  const { createJiti } = await import('jiti');
  const jiti = createJiti(join(ROOT, 'scripts', 'check-tournament-numbers.mjs'));
  const { TOURNAMENTS, computeStatus } = jiti('../lib/tournaments.ts');
  const i18n = jiti('../lib/tournaments-i18n.ts');

  console.log('── 대회 수치 대조 게이트 (금액 절대값) ──');

  const bad = [];
  let scanned = 0, skippedNoAmount = 0, passthrough = 0;

  for (const t of TOURNAMENTS) {
    for (const f of FIELDS) {
      const ko = t[f];
      if (typeof ko !== 'string' || !ko) continue;
      const base = amounts(ko, 'ko');
      if (!base.length) { skippedNoAmount++; continue; }
      for (const loc of LOCALES) {
        const got = i18n.localizeField(ko, loc);
        scanned++;
        /* 🔴 사전에 미등재면 `localizeField`가 **ko를 그대로 돌려준다** — 그 쌍은
           «ko ↔ ko» 자기비교라 **항상 통과**한다. 검증이 아니라 «비교 미성립»이다.
           계수해서 커버리지에 찍지 않으면 그 통과가 «검증»으로 읽힌다(2026-09-12 렌즈 실증: 140쌍). */
        if (got === ko) { passthrough++; continue; }
        const mine = amounts(got, loc);
        if (!same(base, mine)) bad.push({ id: t.id, field: f, loc, ko, got, base, mine });
      }
    }
  }

  // JSON-LD 설명문 — 기준은 한국어 `schemaDescription`
  const today = new Date().toISOString().slice(0, 10);
  const schemaBad = [];
  let schemaScanned = 0, schemaSkipped = false;
  const byLocale = new Map();
  // 🔴 인자 순서는 (locale, todayISO, site)다 — 거꾸로 주면 computeStatus가 전부 «ended»로 읽어
  //    이벤트가 0개가 되고, 그게 «설명문 0쌍»이라는 조용한 미검사로 나온다(2026-09-12에 실제로 그랬다).
  //    반환에는 FAQPage·BreadcrumbList가 뒤에 붙으므로 @type === 'Event'만 걸러 쓴다.
  for (const loc of LOCALES) {
    const all = i18n.buildLocaleSchemas(loc, today, 'https://www.holdemmaster.com') || [];
    byLocale.set(loc, all.filter((e) => e && e['@type'] === 'Event'));
  }

  /**
   * 🔴 스키마 이벤트엔 `id`가 없다 — 이름이 로케일마다 다르므로 **인덱스로 맞춘다.**
   *    `buildLocaleSchemas`가 쓰는 필터(startDate·endDate·schemaDescription·미종료)는
   *    로케일과 무관하므로 **모든 로케일이 같은 순서·같은 개수**다. 그 전제를 매 실행 검증한다
   *    (틀리면 «0쌍»이 조용히 나와 미검사가 «검증»으로 읽힌다 — 첫 구현이 실제로 그랬다).
   */
  const eligible = TOURNAMENTS.filter(
    (t) => t.startDate && t.endDate && t.schemaDescription && computeStatus(t, today) !== 'ended',
  );
  const lenOk = LOCALES.every((loc) => (byLocale.get(loc) || []).length === eligible.length);
  if (!lenOk) {
    schemaSkipped = true;
    console.log('⚠ 미판정 — 로케일별 스키마 이벤트 수가 갈린다. 인덱스 정합을 못 쓴다:');
    for (const loc of LOCALES) console.log(`   ${loc}: ${(byLocale.get(loc) || []).length} (기대 ${eligible.length})`);
  } else {
    eligible.forEach((t, i) => {
      const base = amounts(t.schemaDescription, 'ko');
      if (!base.length) return;
      for (const loc of LOCALES) {
        const desc = (byLocale.get(loc) || [])[i]?.description;
        if (!desc) continue;
        schemaScanned++;
        const mine = amounts(desc, loc);
        if (!covers(base, mine)) schemaBad.push({ id: t.id, loc, base, mine, desc });
      }
    });
  }

  for (const b of bad) {
    console.log(`🔴 ${b.id} .${b.field} [${b.loc}]`);
    console.log(`   ko  ${JSON.stringify(b.ko)}  → ${b.base.join(' · ')}`);
    console.log(`   ${b.loc.padEnd(3)} ${JSON.stringify(b.got)}  → ${b.mine.join(' · ') || '(없음)'}`);
  }
  for (const b of schemaBad) {
    console.log(`🪶 ${b.id} schemaDescription [${b.loc}] — ko ${b.base.join(' · ')} ↔ ${b.mine.join(' · ') || '(없음)'}`);
  }

  console.log('\n── 커버리지 (0건이 «검증»으로 오독되지 않게) ──');
  console.log(`   값 필드 ${scanned}쌍을 돌았다 — 그중 **실제 대조 ${scanned - passthrough}쌍**`);
  console.log(`   🔴 사전 미등재로 ko 원문이 그대로 통과한 ${passthrough}쌍은 «ko ↔ ko» 자기비교라 **비교가 성립하지 않는다**`);
  console.log('      (그 쌍의 통과는 «검증»이 아니다 — 번역 자체가 없다는 뜻이고, 그건 `check:tournaments-i18n`이 본다)');
  console.log(`   🪶 금액이 없어 «대상 밖»인 값 ${skippedNoAmount}개 — 장소·날짜·「미발표」 같은 문자열이다`);
  console.log(`   🪶 JSON-LD 설명문 대조 ${schemaScanned}쌍`);
  console.log('   ⚠ 못 본다: 날짜 표기 · 통화 없는 맨 개수(135 이벤트) · 번역의 뜻 · 원문 수치의 옳음');

  /* 🔴 미판정을 찍어 놓고 요약 줄에 ✅를 찍지 마라 — 이 파일 머리글이 스스로 경고한 함정을
     요약 줄에서 되살렸었다(2026-09-12 렌즈 실증). 건너뛰었으면 ⚠로 말한다. */
  const schemaMark = schemaSkipped
    ? '⚠ 설명문 미판정(인덱스 정합 실패)'
    : `🪶 설명문 갈림 ${schemaBad.length}건(사람 판정 — 재저작과 오류가 같은 모양이다)`;
  console.log(`\n${bad.length ? '🔴' : '✅'} 값 필드 ${bad.length}건 · ${schemaMark}`);
  if (has('strict') && bad.length) process.exit(1);
}

const direct = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (direct && has('selftest')) selftest();
else if (direct) await main();
