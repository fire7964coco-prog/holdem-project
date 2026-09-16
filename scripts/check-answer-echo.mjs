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
 * 검사 5종 (+ 커버리지 2종 — 「미판정」·「면제」를 매 실행 출력한다)
 *   echo    블록 ↔ 그 절 본문(블록 제외)의 최장 공통 부분문자열이 임계 이상   🔴
 *   length  블록 길이가 규격 밖                                              🟠
 *   place   블록이 H2 직후 첫 요소가 아님                                     🟠
 *   count   H2·블록이 약속한 «N개» ↔ 블록 안 열거 수                          ℹ (2026-09-13 신설)
 *   pointer 「下の表」류로 답을 미룬 자리                                      ℹ (2026-09-13 신설)
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
 *   npm run check:answer-echo -- --only=echo        (echo|length|place|count|count-unknown|pointer)
 *   npm run check:answer-echo -- --strict           🔴 있으면 exit 1
 *   npm run check:answer-echo:selftest
 *
 * 한계(원리상): **글자가 겹치지 않고 «내용»만 어긋나는 결함은 못 본다**(ja §5-A가 기록한 자리).
 *   고유명사가 길면 오탐이 난다 — `PROPER_NOUNS`에 등재해 면제한다(ja 「Country Exclusives」 18자 선례).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

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

/**
 * 🔴 **«셈의 단위» 2차 축 — 원문 길이** (2026-09-13 · queue Q7-b · ja §5-K 5)
 *
 *   ja 회차 13이 남긴 실례: `betting-actions` 블록이 H3 제목 **「「コール」と言ってからレイズに変える」**
 *   (원문 **18자**)를 통째로 담고 있었는데 게이트는 🔴 0을 냈다.
 *   🔴 **ja 진행 파일이 적은 원인(「cjkLen이 표의문자만 센다」)은 틀렸다** — 이 정규식은 **가나를 센다**
 *      (「ミス2 — 「コール」…」 전체는 cjkLen 18로 «잡힌다»). 실제 원인은 **괄호·숫자·기호가 0으로 세어져**
 *      그 축어가 cjkLen **16**(2자 미달)이 되는 것이다. 그래서 제안 ①(카타카나·라틴 0.5자)은
 *      **이 실례를 못 잡는다**(16 + 2×0.5 = 17 < 18) — 채택한 것은 제안 ②(원문 문자 수)다.
 *
 *   산식 = «실효 ≥ MIN_LCS» **또는** «실효 ≥ RAW_FLOOR **그리고** 원문 ≥ RAW_MIN».
 *   🔴 `RAW_FLOOR`가 「숫자·라틴만 겹치는 것은 되풀이가 아니다」를 지키는 자리다
 *      (`25/50→50/100→100/200` = 실효 0 → 통과). **이 하한을 0으로 내리지 마라.**
 *
 *   🔴 **코퍼스엔 그 실례가 남아 있지 않다** — ja 회차 13(`5708d2a8`)이 블록을
 *      「「コール」と宣言した後でレイズに言い直す」로 고쳐 축어가 사라졌다. 그래서 `--slug=holdem-betting-actions`는
 *      지금도 🔴 0이 맞다. **«회귀했다»고 오판하지 마라** — 이 축의 검증은 셀프테스트가 한다.
 *
 *   첫 실행 전건 판정(2026-09-13 · CJK FLOOR 12 / RAW 18): 신규 **9건 · 12/13이 진짜 되풀이**(렌즈 3 재검).
 *   그중 `ja/holdem-hand-rankings`는 겹친 상대가 **비교표 셀**이고 EN도 같다 → 되풀이가 아니라 **EN-먼저**로 재분류했다.
 *   🪶 «L286↔L299»(§5-36)는 **zh-hant** 자리다 — 줄 번호가 우연히 겹쳤을 뿐 같은 결함이 아니다(렌즈 4 B-4).
 *
 *   🔴 **en 값(70/30)은 CJK와 다른 근거로 정했다**: en `normalize`는 공백을 «살려» 한 칸으로 만들므로
 *      같은 정보량에 원문 문자 수가 2배 이상 든다(CJK는 공백 전삭). 코퍼스 실측이 아니라 **산식 대칭**으로 잡은 값이고,
 *      en 블록은 전부 머리말에 있어 아직 히트가 0이다 — **en에서 이 축을 쓰려면 표본을 먼저 재라.**
 */
const RAW_MIN = { zh: 18, 'zh-hant': 18, ja: 18, ko: 14, en: 70 };
const RAW_FLOOR = { zh: 12, 'zh-hant': 12, ja: 12, ko: 9, en: 30 };

/** LCS 탐색 하한(원 문자 기준) — 이보다 짧으면 어느 축도 임계에 닿을 수 없다 */
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

/* ══════════════════════════════════════════════════════════════════════════
 * 🔴 검사 ④⑤ — «개수»와 «포인터» (2026-09-13 · queue Q7-b)
 *
 * 축 = **«블록만 떼어 읽어도 H2의 질문에 답이 되는가»**(ja 회차 11 §3-L 1이 세운 정본 질문).
 * ja 회차 11·12·13이 **임시 `.mjs`로** 돌린 스캐너 3종을 여기로 올린다. 그 실측이 이 규칙의 근거다:
 *   회차 11 첫 주사 42히트 중 **29가 오탐·브리지** · 회차 12 22히트 중 **13이 ✅/🪶** ·
 *   회차 13 ① 31히트 중 **결손 6**(나머지는 ✅ 열거 또는 `5つ星`·`2026年` 오탐).
 * 🔴 그래서 이 두 검사의 등급은 **ℹ다 — 🔴도 🟠도 아니다.** 첫 실행 전건 판정에서 «결손»은 소수였고,
 * 기계가 하는 일은 «판정»이 아니라 **1,139블록 중 «사람이 읽을 자리»만 남기는 것**이다(2026-09-13 실측 = 후보 13 + 미판정 248). 등급 승격은 실측 정밀도가 선 뒤에.
 *
 * 🔴 **이 검사가 원리상 못 보는 것**(매 실행 출력한다):
 *   ① 개수어 «없이» 목록을 약속하는 H2(「〜の見分け方」·「どんな場合か」) — 숫자에만 걸린다.
 *   ② 「いくつか」·「主な」처럼 수사가 아닌 표현.
 *   ③ **열거 수를 «못 세는» 블록** — 볼드·번호가 없으면 «미판정»으로 낸다(🔴 구분자는 근거가 아니다 · `countedItems` 주석).
 *      회차 13 브리프 축어: *「스캐너는 블록 텍스트를 출력할 뿐 항목을 세지 못한다 — 판정 13건은 전부 손으로 셌다」*.
 *      **그 말은 여전히 대체로 참이다** — 2026-09-13 실측 = 후보 13건 · **미판정 248건**. 기계가 준 것은 «어느 자리를 읽을까»다.
 * ══════════════════════════════════════════════════════════════════════════ */

/**
 * H2·블록이 «N개»를 약속하는 말.
 *
 * 🔴 **첫 실행 전건 판정으로 걷어낸 오탐 부류 4종**(2026-09-13 · queue Q7-b · 이 목록을 «조이는» 쪽으로 되돌리지 마라):
 *   ① **`条`·`條`는 세지 않는다** — 중문에서 `三条`·`四條`는 **족보 이름**(트립스·쿼드)이고 `第 5 條`는 룰 번호다.
 *      회차 13이 「개수어」로 잡았던 zh 히트의 최다 부류가 이것이었다.
 *   ② **`个`·`個` 뒤의 «단위 명사»** — `12 个大盲`(BB) · `三个对手` · `9 个席位`는 **분량**이지 열거 약속이 아니다.
 *   ③ **`5つ星`·`2026年`** 류(회차 13 브리프가 이미 기록한 오탐).
 *   ④ **어림수** — `10個ほど` · `五種左右`는 «세어 보라»는 약속이 아니다.
 */
const COUNT_PAT = {
  ja: /(?:^|[^0-9０-９])([0-9０-９]{1,2}|[一二三四五六七八九十])\s*(?:つ|個|種類|パターン|ステップ|通り|選|項目)(?![星年月日人位円%]|ほど|くらい|ぐらい|程度|以上|以下|前後|の?大盲|BB|bb)/g,
  zh: /(?:^|[^0-9０-９])([0-9０-９]{1,2}|[一二三四五六七八九十])\s*(?:个|個|種|种|步|項|项)(?!大盲|大盲位|玩家|对手|對手|人|筹码|籌碼|底池|席位|小时|小時|街|年|月|日|位|%|左右|以上|以下|多)/g,
  ko: /(?:^|[^0-9０-９])([0-9０-９]{1,2}|다섯|여섯|일곱|여덟|아홉|[한두세네열])\s*(?:가지|개|단계)(?![월일년%]|쯤|정도|이상|이하)/g,
  en: /\b(two|three|four|five|six|seven|eight|nine|ten|[2-9]|1[0-9])\s+(?:ways|things|mistakes|rules|steps|reasons|questions|signs|spots|habits|factors|numbers|checks|tips|points|moves|traps|keys|leaks|sins)\b/gi,
};
COUNT_PAT['zh-hant'] = COUNT_PAT.zh;
const NUM_WORD = {
  一: 1, 二: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9,
  한: 1, 두: 2, 세: 3, 네: 4, 다섯: 5,
  two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
};
const toNum = (t) => {
  const k = String(t).toLowerCase();
  if (NUM_WORD[k] != null) return NUM_WORD[k];
  const n = Number(String(t).replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0)));
  return Number.isFinite(n) ? n : null;
};
/** 그 글에서 «약속된 개수» 하나를 뽑는다(가장 큰 값 — 「2つ」보다 「5つ」가 약속이 크다) */
export function declaredCount(text, loc) {
  const re = COUNT_PAT[loc] ?? COUNT_PAT.en;
  let best = null;
  for (const m of text.matchAll(new RegExp(re.source, re.flags))) {
    const n = toNum(m[1]);
    if (n != null && n >= 2 && n <= 12 && (best == null || n > best)) best = n;
  }
  return best;
}

/**
 * 블록 안에서 «기계가 셀 수 있는» 열거 수. 셋 중 최댓값이고, **셋 다 0이면 null(미판정)**이다.
 *   볼드   `**…**` 런의 개수
 *   구분자 한 문장 안에서 `、，,・･` 로 갈린 조각 수(구분자 n개 → 항목 n+1)
 *   번호   ①②③ · `1つめ` · `1.` · `첫째`
 */
export function countedItems(block, loc) {
  const bold = (block.match(/\*\*[^*\n]+\*\*/g) ?? []).length;
  const marks = (block.match(/[①②③④⑤⑥⑦⑧⑨⑩]/g) ?? []).length;
  let sepMax = 0;
  for (const sent of block.split(/[。．.!?！？]\s*/)) {
    const seps = (sent.match(/[、，,・･]/g) ?? []).length;
    if (seps >= 1) sepMax = Math.max(sepMax, seps + 1);
  }
  /**
   * 🔴 **구분자는 «세는 근거»가 아니라 참고값이다** (2026-09-13 · 렌즈 1 항목 4 실측).
   *    쉼표 n개 → 항목 n+1로 세면 **한 항목을 쉼표로 풀어 쓴 평범한 문장이 곧바로 3~5개**가 된다
   *    (「チップを先に出すこと、これが一番多い、という話です。」 → 3). 코퍼스 실측: 개수 약속 블록 276건 중
   *    **구분자 덕분에 «충족»으로 통과한 블록이 198건**이었고, 그래서 「셋 다 0이면 미판정」이라는 안전망이
   *    **한 번도 울리지 않았다**(미판정 0건). 볼드·번호만 근거로 삼고 구분자는 출력에만 싣는다.
   *    🔴 이 순서를 되돌리지 마라 — 되돌리면 ℹ 목록이 «조용한 0»으로 돌아간다.
   */
  const counted = Math.max(bold, marks);
  return { counted: counted >= 2 ? counted : null, seps: sepMax >= 2 ? sepMax : null };
}

/**
 * 포인터 어구 — «답은 저기 있다»고 미루는 말.
 * 🔴 회차 12가 원문 판정으로 걷어낸 오탐을 **패턴 자체로** 막는다:
 *    `表になるカード`(앞면) · `表に出ます`(드러난다) · `すぐ下に来る`(족보 순위) — 그래서 `表`는
 *    **`下の表`·`表のとおり`처럼 지시어가 붙은 꼴만** 본다(회차 12 ②의 «の격» 보강 포함).
 */
const POINTER_PAT = {
  // 🔴 «미룸»의 대표 표현을 로케일마다 실측해 넣었다 — 뒤 세 개(後述·详见下文…)는 렌즈 1 항목 7이 찾은 공백이다
  ja: /(?:下の表|以下の表|次の表|右の表|表のとおり|表のとおりです|下記の|以下のとおり|次の節|この節|下のリスト|後述|のちほど|次のセクション|記事の後半)/g,
  zh: /(?:下表|见下表|如下表|下面的表|下面这张表|下一节|本节|见下方|详见下文|后面会讲|如下所示|参见下方)/g,
  'zh-hant': /(?:下表|見下表|如下表|下面的表|下面這張表|下一節|本節|見下方|詳見下文|後面會講|如下所示|參見下方)/g,
  ko: /(?:아래 표|밑의 표|다음 표|아래 목록|아래에서|아래와 같이|다음 절|뒤에서)/g,
  en: /(?:the table below|see below|below the table|in the table below|the list below|the next section|later in this guide|further down)/gi,
};

/* ────────────────────────────────────────────────────────────────
 * 판정 등재 — 🔴 **사유 없는 행 금지.** `check:structure`의 `ALLOW`와 같은 장치다.
 * 등재하지 않으면 «전건 원문 판정»을 회차마다 다시 하게 된다(ja 회차 11·12가 같은 자리를 두 번 판정했다).
 * 키 = 로케일 · 슬러그 · H2 제목의 «부분 문자열»(줄 번호는 편집 때마다 움직인다) · 검사 종류.
 * ──────────────────────────────────────────────────────────────── */
export const JUDGED = [
  /* ── echo · «값 표현» 면제 (2026-09-16 queue Q6-c · 판정 정본 = settled-decisions «echo 면제는 겹친 것의 성격으로» 2026-09-14) ──
   * 🔴 kind 'echo'는 **hit(겹친 문자열의 부분)까지** 맞아야 닫힌다 — 절 단위로 닫으면 같은 절의 «산문» 겹침이 조용히 묻힌다.
   * 🔴 산문 겹침은 등재하지 마라 — 그건 «지우되 남은 문단 재작성»(프로토콜 §4) 대상이다. */
  {
    loc: 'ja', slug: 'apt-incheon-2026-guide', head: '(머리말)', kind: 'echo', hit: '第1ターミナルから無料シャトルで10分',
    reason: '값 표현(공항 터미널명+소요 시간). 물류 값은 자리마다 같은 문면이어야 한다 — 다르게 쓰라는 요구가 곧 드리프트다.',
  },
  {
    loc: 'zh', slug: 'holdem-betting-actions', head: '一轮可以加注几次', kind: 'echo', hit: '在一次下注加四次加注（第100.b条）',
    reason: '값 표현(WSOP Rule 100.b 상한 «1 bet + 4 raises» + 조항 번호). 룰 문구를 자리마다 달리 쓰면 룰이 갈린다.',
  },
  {
    loc: 'ko', slug: 'broadway-board-strategy', head: '(머리말)', kind: 'echo', hit: '레인지의68.4%가드로우를',
    reason: '값 표현(솔버 수치 68.4% + 그 수치가 가리키는 대상). GTO 시리즈 1차 데이터 — 문면을 흩으면 값의 지시 대상이 흐려진다.',
  },
  {
    loc: 'ja', slug: 'holdem-drawing-odds', head: 'レアなフロップ', kind: 'pointer',
    reason:
      '2026-09-13 queue Q7-b 전건 원문 판정 = ✅. 「下の表が確率順に並べています」는 문중에 있지만 ' +
      '블록이 값을 **다 준다**(フォーカード 407対1 · フルハウス 101対1 · トリップス 73対1 · ストレートフラッシュ 約4,900対1). ' +
      '🔴 «포인터가 마지막 문장이 아니다»만으로 되돌려 잡지 마라 — 답이 포인터 뒤에 있는 자리가 아니다.',
  },
  {
    loc: 'ja', slug: 'holdem-glossary', head: '役とボード', kind: 'pointer',
    reason:
      '🔴 ja 회차 12 §5-I 4가 이미 «이번 축 대상 밖»으로 판정한 자리다(「この節」 2자리). ' +
      '블록이 앞에서 답을 다 주고 「この節」은 문중에 있어 자기완결성을 해치지 않는다. ' +
      '«절 상대 지시어 금지»를 규율로 세울지는 헤드 몫 — 게이트가 먼저 결손으로 찍지 않는다.',
  },
  {
    loc: 'zh', slug: 'holdem-game-order', head: '德州扑克有哪些下注动作', kind: 'pointer',
    reason:
      '2026-09-13 queue Q7-b 전건 원문 판정 = ✅. 블록이 다섯 액션을 **볼드로 전부 열거**하고 ' +
      '(弃牌·过牌·跟注·下注·加注) 「就是下表的七行」은 3bet·올인 두 특례를 표로 잇는 다리다.',
  },
  {
    loc: 'zh', slug: 'holdem-tournament', head: '锦标赛奖金结构', kind: 'pointer',
    reason:
      '2026-09-13 queue Q7-b 전건 원문 판정 = ✅. 블록이 값을 다 준다(진입 10–15% · 네 등급 12–13% · ' +
      '최저 1.5–2.2배 · 우승 8–30% · WPT 1,435명 중 180명 인더머니 약 14%). 「下表四档」은 근거 제시다.',
  },
];
/**
 * echo 등재 — **겹침 하나(hit)와 «완전 일치»**해야 닫힌다 (2026-09-16 queue Q6-c 렌즈 4 교정).
 * 🔴 «포함»으로 판정하지 마라 — 짧은 hit(「加四次加注」 5자)이 그것을 품은 35자 산문 겹침까지 닫았다(탐침 재현).
 * 🔴 판정은 `inspect`의 hit 루프 **안에서** 겹침 하나씩 한다 — 블록 대표(picked)에 걸면 같은 블록의 약한 산문 겹침이 가려진다.
 */
export const judgedEcho = (loc, slug, head, hit) =>
  JUDGED.some((j) => j.kind === 'echo' && j.loc === loc && j.slug === slug && head.includes(j.head) && hit === j.hit);
/** 등재된 자리인가 */
export const judged = (loc, slug, head, kind) =>
  JUDGED.some((j) => j.loc === loc && j.slug === slug && j.kind === kind && head.includes(j.head));

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

/**
 * 임계 이상이면 «최장»을 찾아 돌려준다(없으면 null).
 * 🔴 **판정 경로에서는 더 이상 쓰지 않는다** — 아래 `commonRuns`가 대신한다(2026-09-13 · 렌즈 1 항목 2).
 *    「원문 최장 하나」는 **가려짐(masking)**을 만든다. 남겨 둔 이유는 셀프테스트·외부 진단용이다.
 */
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

/**
 * 🔴 **겹침은 «하나»가 아니다 — 극대 공통 부분문자열을 전부 낸다** (2026-09-13 · queue Q7-b 렌즈 1).
 *
 *   구 구현은 `longestCommon`으로 **원문이 가장 긴 겹침 하나**만 뽑아 놓고 판정은 **실효 길이**로 했다.
 *   그래서 URL·영문 약어·날짜가 섞인 긴 겹침이 «최장»을 차지하면, **같은 블록의 진짜 축어는 후보에 오르지도 못했다.**
 *   렌즈 1 실측 5건이 전부 이 유형이었다 — 예: zh `holdem-betting-actions`는 최장이
 *   「加注→3bet→4bet→5bet→全押」(실효 4)라 통과했는데, 가려진 겹침 「在一次下注加四次加注（第100.b条）」는
 *   **직답·본문·FAQ 세 곳에 축어**로 있었다(WSOP Rule 100.b).
 *   같은 이유로 **«나열·공식» 면제도 그 히트 하나만 무효화해야 한다** — 구 구현은 면제가 곧 «블록 무죄»였다.
 *
 *   🪶 비용: 블록당 O(블록 길이 × 확장 길이)로 전 코퍼스 1초 안이다(실측).
 */
export function commonRuns(a, b, minL) {
  const out = [];
  if (a.length < minL || b.length < minL) return out;
  let i = 0;
  while (i + minL <= a.length) {
    if (!b.includes(a.slice(i, i + minL))) { i++; continue; }
    let L = minL;
    while (i + L + 1 <= a.length && b.includes(a.slice(i, i + L + 1))) L++;
    out.push(a.slice(i, i + L));
    i += 1; // 겹치는 시작점도 본다(한 칸만 밀어도 다른 극대 런이 나온다)
  }
  /**
   * 🔴 **다른 런의 부분문자열은 버린다.** 안 버리면 «나열·공식 면제»가 뚫린다 —
   *    「ストレート、フラッシュ、フルハウス、ストレートフラッシュ」(구분자 3 → 면제)에서 한 칸 민 런
   *    「フラッシュ、フルハウス、ストレートフラッシュ」는 구분자가 2라 면제를 빠져나간다(셀프테스트가 잡았다).
   *    부분문자열을 버려도 렌즈 1이 찾은 «가려진 축어»는 남는다 — 그건 최장 런의 부분문자열이 아니다.
   */
  const uniq = [...new Set(out)];
  return uniq.filter((s) => !uniq.some((t) => t !== s && t.includes(s)));
}

/**
 * 🔴 고유명사 면제 — **단위를 섞지 마라**(렌즈 1 항목 5).
 *    구 구현은 «원문 문자 수»를 «실효 임계(`MIN_LCS`)»와 비교했다. ja·zh는 `MIN_LCS 18 == RAW_MIN 18`이라
 *    **원문 축이 담당하는 18~27자 밴드를 이 면제가 통째로 삼킬 수 있었다**(현행 코퍼스 실측 영향 0건 · 잠복 구멍).
 *    이제 «고유명사를 뺀 나머지»를 **실효**와 **원문** 두 축 모두로 재고, 둘 다 미달일 때만 면제한다.
 */
const exempt = (s, loc) => {
  const cmp = loc === 'en' ? s : s.replace(/\s+/g, '');
  return PROPER_NOUNS.some((p) => {
    const q = loc === 'en' ? p.toLowerCase() : p.replace(/\s+/g, '');
    if (!cmp.includes(q)) return false;
    const restStr = cmp.replace(q, '');
    const eff = loc === 'en' ? enLen(restStr) : cjkLen(restStr);
    return eff < (MIN_LCS[loc] ?? 14) && restStr.length < (RAW_MIN[loc] ?? 18);
  });
};

const contentOf = (src) => { const m = src.match(/content:\s*`([^`]*)`/); return m ? m[1] : ''; };

/**
 * 한 편을 검사한다. 절(H2) 단위로 잘라 그 안의 직답 블록을 본문 나머지와 견준다.
 */
export function inspect(content, loc, labels = LABELS[loc] ?? [], slug = null) {
  const out = [];
  const lines = content.split('\n');
  // H2 경계로 절을 나눈다
  const sections = [];
  /**
   * 🔴 **머리말(첫 H2 앞)도 절로 센다** (2026-09-13 · queue Q7-b 실측).
   *    지금까지 이 게이트는 «H2 절 안»만 봤는데, 실측하면 직답 블록의 상당수가 **머리말에 산다**:
   *    ko **48/50** · en **23/23** · ja 24 · zh 23 · zh-hant 13 = **131블록**.
   *    그래서 「ko 블록 2」·「en 블록 0」이라고 찍어 왔다 — «검증 0»이 아니라 **«안 본 것»**이었다.
   *    🔴 단 **echo만** 본다. `length`·`place`·`count`·`pointer`의 규격·전제는 «H2 직후 블록»에서 얻은 것이라
   *       머리말 블록(tldr 성격 · 앞에 H2가 없어 `place`가 의미 없다)에 그대로 먹이면 오탐이 쏟아진다.
   *       머리말 블록의 길이 규격이 필요하면 그때 **표본을 다시 재서** 정하라 — 여기서 유추하지 마라.
   */
  const firstH2 = lines.findIndex((l) => /^##\s+/.test(l));
  const leadEnd = firstH2 < 0 ? lines.length : firstH2;
  const lead = { head: '(머리말)', from: 0, lead: true, lines: [] };
  for (let i = 0; i < leadEnd; i++) lead.lines.push({ i, t: lines[i] });
  if (lead.lines.length) sections.push(lead);
  let cur = null;
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s+/.test(lines[i])) { cur = { head: lines[i].replace(/^##\s+/, '').trim(), from: i, lines: [] }; sections.push(cur); continue; }
    if (cur) cur.lines.push({ i, t: lines[i] });
  }
  for (const sec of sections) {
    let seenBlock = false; // 이 절에서 직답 블록을 이미 하나 봤나(`place`는 첫 블록만 본다)
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

      /* ① echo — 극대 겹침을 **전부** 뽑아 각각 판정한다(면제는 그 겹침 하나만 무효화한다) */
      let picked = null, exempted = 0;
      for (const hit of commonRuns(block, rest, SCAN_MIN)) {
        const eff = loc === 'en' ? enLen(hit) : cjkLen(hit);
        const byEff = eff >= (MIN_LCS[loc] ?? 14);
        const byRaw = hit.length >= (RAW_MIN[loc] ?? 18) && eff >= (RAW_FLOOR[loc] ?? 12);
        if (!byEff && !byRaw) continue;
        if (isEnumerationOrFormula(hit) || exempt(hit, loc)) { exempted++; continue; }
        if (slug && judgedEcho(loc, slug, sec.head, hit)) { out.push({ kind: 'echo-judged', at, head: sec.head }); continue; }
        if (process.env.ECHO_HITS) console.error(`HIT ${loc}/${slug} 「${sec.head}」 ${JSON.stringify(hit)}`);
        // 여러 개면 «실효»가 가장 진한 것을 대표로 낸다(원문 길이가 아니다 — 그게 구 구현의 버그였다)
        if (!picked || eff > picked.len || (eff === picked.len && hit.length > picked.raw)) {
          picked = { kind: 'echo', at, head: sec.head, len: eff, raw: hit.length, axis: byEff ? '실효' : '원문', sample: hit.slice(0, 40) };
        }
      }
      if (picked) out.push(picked);
      // 🔴 «면제했다»는 사실을 삼키지 마라 — 무엇을 걷어냈는지 보여야 §13 렌즈가 그 자리를 본다
      else if (exempted) out.push({ kind: 'echo-exempt', at, head: sec.head, n: exempted });
      // 🔴 머리말 블록은 echo까지만 본다(위 주석) — 아래 네 검사의 규격·전제가 H2 블록에서 나왔다
      if (sec.lead) { out.push({ kind: 'lead', at, head: sec.head }); k = end; continue; }
      // ② length
      out.push({ kind: 'length', at, head: sec.head, len: block.length });
      /* ③ place — H2 직후 첫 «내용» 요소여야 한다(빈 줄·이미지·디렉티브는 건너뛴다)
       * 🔴 **절의 «첫» 블록에만 적용한다** (2026-09-13 · 렌즈 1 항목 9 · 렌즈 4 D-1 수렴).
       *    `break`를 뺀 뒤로 둘째 블록은 **앞에 반드시 첫 블록의 `>` 줄이 있어** 무조건 🟠가 된다 —
       *    「앞에: > **快速回答** …」라는 무의미한 지적이 된다. 지금 코퍼스엔 그런 절이 0건이라 안 터졌을 뿐이다. */
      if (!seenBlock) {
        let first = 0;
        while (first < k && (sec.lines[first].t.trim() === '' || /^(?:!\[|:::|<)/.test(sec.lines[first].t.trim()))) first++;
        if (first < k) out.push({ kind: 'place', at, head: sec.head, before: sec.lines[first].t.trim().slice(0, 40) });
      }
      seenBlock = true;

      /* ④ count — «H2(또는 블록)가 약속한 N» ↔ «블록 안에서 센 열거 수»
       * 🔴 **라벨을 먼저 떼라** — `**快速回答**`·`**先に結論**`이 볼드 런 하나로 세어져
       *    「2개 열거」가 「3개」가 된다(셀프테스트가 잡았다). 길이 산식도 라벨을 안 센다(§4 정본). */
      const blockPlain = blockRaw.replace(/^>\s?/gm, '').replace(/^\s*\*\*[^*\n]{1,20}\*\*\s*/, '');
      const nHead = declaredCount(sec.head, loc);
      const nBlock = declaredCount(blockPlain, loc);
      const promised = Math.max(nHead ?? 0, nBlock ?? 0) || null;
      if (promised) {
        const { counted, seps } = countedItems(blockPlain, loc);
        const from = nHead ? 'H2가' : '블록이';
        if (counted == null) {
          // 🔴 «못 셌다»를 0건으로 흘리지 않는다 — 미판정으로 낸다(회차 13이 손으로 센 자리들이 여기다)
          out.push({ kind: 'count-unknown', at, head: sec.head, promised, from, seps });
        } else if (counted < promised) {
          out.push({ kind: 'count', at, head: sec.head, promised, got: counted, from, seps });
        }
      }

      /* ⑤ pointer — 3단 판정(🔴 결손 / 🟠 의존 / ✅ 브리지). 이 게이트는 둘을 🟠 하나로 낸다 */
      const pre = POINTER_PAT[loc];
      if (pre) {
        /**
         * 🔴 **라벨은 이미 `blockPlain`에서 떼었다 — 여기서 또 떼면 «본문 선두 볼드 런»이 통째로 지워진다**
         *    (2026-09-13 2차 교열 D). `> **先に結論** **下の表のとおり**です。` 처럼 포인터가 선두 볼드 안에 들면
         *    그 블록이 조용히 0건이 된다(코퍼스 영향 0 · 선두 볼드 블록 16개 중 해당 0 — 잠복 구멍이었다).
         */
        const body = blockPlain;
        const hits = [...body.matchAll(new RegExp(pre.source, pre.flags))];
        if (hits.length) {
          /**
           * 🔴 **«브리지»의 정의는 좁다**(ja §3-M 7 — 넓게 잡아 2자리를 오통과시켰다):
           *    ⓐ 포인터가 **마지막 한 문장에만** 있고 ⓑ **H2가 약속한 개수가 블록 안에서 충족**될 때만 ✅다.
           *    둘 중 하나라도 어긋나면 «답이 포인터 뒤에 있다» → 🟠 후보.
           */
          /**
           * 🔴 **«마지막 문장»은 인덱스를 세지 말고 «시작 위치»로 재라** (2026-09-13 · 렌즈 1 항목 6).
           *    문장을 `split`으로 자르면 **지운 공백만큼 누적 인덱스가 밀려**, 앞 문장이 많은 블록에서
           *    포인터가 «뒤쪽 문장»으로 매핑된다 → 마지막으로 밀리면 ✅ 브리지로 조용히 통과했다.
           *    마지막 문장의 **시작 오프셋 하나만** 구해 비교하면 드리프트가 원리상 없다.
           */
          /**
           * 🔴 종결부호에서 **소수점을 빼고**(`1.5`·`11.8%`가 문장 끝으로 세어졌다 — 코퍼스 154블록),
           *    **마지막 종결부호 뒤에 글이 남았으면 그 자리가 «마지막 문장»의 시작**이다
           *    (안 그러면 창이 한 문장 넓어진다 · 2026-09-13 2차 교열 E · 둘 다 코퍼스 판정 갈림 0의 잠복 결함이었다).
           */
          const sentEnds = [...body.matchAll(/(?<!\d)[。．.!?！？](?!\d)\s*/g)];
          const lastEnd = sentEnds.length ? sentEnds[sentEnds.length - 1] : null;
          const tail = lastEnd ? lastEnd.index + lastEnd[0].length : 0;
          const lastStart = tail < body.trimEnd().length
            ? tail                                   // 종결부호 뒤에 글이 남았다 = 그 글이 마지막 문장
            : (sentEnds.length >= 2
              ? sentEnds[sentEnds.length - 2].index + sentEnds[sentEnds.length - 2][0].length
              : 0);
          const onlyLast = hits.every((h) => h.index >= lastStart);
          const { counted } = countedItems(blockPlain, loc);
          const promiseKept = !promised || (counted != null && counted >= promised);
          if (!(onlyLast && promiseKept)) {
            out.push({
              kind: 'pointer', at, head: sec.head,
              why: !onlyLast ? '마지막 문장이 아니다(답이 포인터 뒤)' : `H2 약속 ${promised}개 ↔ 블록 ${counted ?? '미판정'}`,
              sample: hits[0][0],
            });
          }
        }
      }
      /**
       * 🔴 **절당 «첫» 블록에서 멈추지 않는다** (2026-09-13 · queue Q7-b · ja §5-J 5 ①).
       *    ja 회차 11의 임시 스캐너가 여기서 멈추는 바람에 `bad-beat` L92 · `fish` L140을 놓쳤고,
       *    회차 12가 그 `break`를 빼자 둘 다 잡혔다. 정식 게이트엔 그 수정이 안 들어와 있었다.
       *    🪶 전 코퍼스 재주사 결과 «실효» 축 신규 히트는 0이다(한 절에 블록이 둘인 자리가 드물다) —
       *       그래도 빼 둔다. 구멍은 «히트가 있을 때» 드러난다.
       */
      k = end; // 이 블록 다음부터 계속 본다
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
  // 🔴 «셈의 단위» 2차 축 — 원문 길이 (queue Q7-b · ja §5-K 5)
  cases.push(['원문 18자 축어를 잡는다(실효는 16자 — ja §5-K 5 실례)', 'ja',
    '## 見出し\n> **先に結論** そこで問題になるのが「コール」と言ってからレイズに変える、という動きです。\n\n本文はまったく別の話題ですが、最後にもう一度。「コール」と言ってからレイズに変える人がいます。', 'echo', 1]);
  cases.push(['🔴 원문이 길어도 실효가 하한 미만이면 통과(숫자·라틴 나열)', 'zh',
    '## 標題\n> **快速回答** 盲注 25/50 → 50/100 → 100/200 → 200/400 這樣漲。\n\n節奏是 25/50 → 50/100 → 100/200 → 200/400 這樣。', 'echo', 0]);
  cases.push(['원문·실효 둘 다 미달이면 통과', 'ja',
    '## 見出し\n> **先に結論** ポットの三分の一が基準。\n\nまったく別の本文。三分の一が基準。', 'echo', 0]);
  // 🔴 절당 «첫» 블록에서 멈추지 않는다 (ja §5-J 5 ①)
  cases.push(['같은 절의 두 번째 직답 블록도 본다', 'zh',
    '## 標題\n> **快速回答** 第一個區塊は完全に無関係な内容。\n\n中間段落。\n\n> **快速回答** 翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。\n\n翻牌圈的持續下注應該用小尺寸而不是大尺寸這是基準做法。', 'echo', 1]);

  // 🔴 머리말(첫 H2 앞) 블록 — echo만 본다 (queue Q7-b)
  cases.push(['머리말 블록의 되풀이도 잡는다(ko 48·en 23이 이 자리에 있다)', 'ja',
    '> **先に結論** 会場は第1ターミナルから無料シャトルで10分です。\n\n導入の段落。第1ターミナルから無料シャトルで10分で着きます。\n\n## 見出し\n本文。', 'echo', 1]);
  cases.push(['🔴 머리말 블록엔 length 규격을 먹이지 않는다(H2 블록에서 얻은 값이다)', 'zh',
    '> **快速回答** 短。\n\n正文。\n\n## 標題\n本文。', 'length', 0]);
  cases.push(['🔴 머리말 블록엔 place도 먹이지 않는다(앞에 H2가 없다)', 'zh',
    '먼저 오는 문단。\n\n> **快速回答** 一句話。\n\n## 標題\n本文。', 'place', 0]);

  // place
  cases.push(['H2 직후가 아니면 place', 'zh',
    '## 標題\n先出現的正文段落。\n\n> **快速回答** 一句話。\n', 'place', 1]);
  cases.push(['H2 직후면 place 아님', 'zh',
    '## 標題\n> **快速回答** 一句話。\n\n正文。', 'place', 0]);
  cases.push(['이미지가 앞서도 H2 직후로 본다', 'zh',
    '## 標題\n![圖](/images/x.webp)\n\n> **快速回答** 一句話。\n', 'place', 0]);

  // ④ count — «약속한 N» ↔ «센 열거 수» (queue Q7-b · ja §5-J 5 · §5-K 5)
  cases.push(['H2가 4つ를 약속했는데 블록이 2개만 열거하면 잡는다(볼드로 센다)', 'ja',
    '## ライブでよくあるミス4つ\n> **先に結論** **チップ先出し**と**宣言の言い直し**——この二つが典型です。\n\n本文。', 'count', 1]);
  cases.push(['약속한 수를 다 열거하면 통과', 'ja',
    '## ライブでよくあるミス4つ\n> **先に結論** **チップ先出し**・**宣言の言い直し**・**BBのフォールド**・**無言の1枚**——この4つです。\n\n本文。', 'count', 0]);
  // 🔴 구분자는 «세는 근거»가 아니다(렌즈 1 항목 4) — 쉼표로 푼 한 항목이 3~5개로 세어지던 자리
  cases.push(['🔴 쉼표만 있는 블록은 «충족»이 아니라 «미판정»이다', 'ja',
    '## ライブでよくあるミス4つ\n> **先に結論** チップを先に出すこと、これが一番多い、という話です。\n\n本文。', 'count-unknown', 1]);
  cases.push(['🔴 그때 count(결손)로는 세지 않는다', 'ja',
    '## ライブでよくあるミス4つ\n> **先に結論** チップを先に出すこと、これが一番多い、という話です。\n\n本文。', 'count', 0]);
  cases.push(['🔴 「5つ星」·「2026年」은 개수어가 아니다(회차 13 오탐)', 'ja',
    '## 5つ星ホテルの2026年の話\n> **先に結論** ここには열거が一つもありません。\n\n本文。', 'count', 0]);
  cases.push(['블록이 스스로 선언한 수도 본다(H2에 개수어가 없는 유형)', 'ja',
    '## ライブで見かけるミス\n> **先に結論** 覚えることは4つあります。**チップ先出し**と**宣言の言い直し**の二つだけ挙げておきます。\n\n本文。', 'count', 1]);
  cases.push(['🔴 셋 다 못 세면 «미판정»으로 낸다(0건으로 흘리지 않는다)', 'ja',
    '## ライブでよくあるミス4つ\n> **先に結論** 手と口の順番が問題になります。動かす前に一拍おけば起きません。\n\n本文。', 'count-unknown', 1]);
  cases.push(['zh 个 계열도 본다', 'zh',
    '## 新手最常犯的 3 个错误\n> **快速回答** 这里只说两个：**打得太松**、**跟得太多**。\n\n正文。', 'count', 1]);

  // ⑤ pointer — 3단 판정
  cases.push(['포인터가 마지막 문장이 아니면 잡는다(답이 포인터 뒤)', 'ja',
    '## いくらレーキを払っているのか\n> **先に結論** 詳しくは下の表のとおりです。だからレーキは思ったより重いのです。\n\n本文。', 'pointer', 1]);
  cases.push(['✅ 브리지 — 답을 다 준 뒤 마지막 한 문장만 표 안내', 'ja',
    '## いくらレーキを払っているのか\n> **先に結論** レーキは5%・上限$5が標準で、$1/$2なら1時間あたりおよそ$4〜$6になります。内訳は下の表のとおりです。\n\n本文。', 'pointer', 0]);
  cases.push(['🔴 브리지여도 H2 약속 개수가 안 차면 잡는다(§3-M 7 좁힌 정의)', 'ja',
    '## 覚えておくミス4つ\n> **先に結論** チップ先出しと宣言の言い直しが典型です。残りは下の表のとおりです。\n\n本文。', 'pointer', 1]);
  cases.push(['🪶 「表になるカード」는 포인터가 아니다(회차 12 오탐)', 'ja',
    '## カードの表と裏\n> **先に結論** 表になるカードはコミュニティカードだけで、ホールカードは伏せたままです。\n\n本文。', 'pointer', 0]);

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
  // 🔴 echo 등재는 겹침 하나와 «완전 일치»해야 닫힌다 (queue Q6-c · 렌즈 4가 탐침으로 잡은 두 구멍)
  const J = JUDGED.find((j) => j.kind === 'echo' && j.loc === 'ja');
  const okJ1 = !!J && judgedEcho(J.loc, J.slug, J.head, J.hit) === true;
  const okJ2 = !!J && judgedEcho(J.loc, J.slug, J.head, `按规则${J.hit}以后就封顶了`) === false; // 포함≠일치
  // 파이프라인: 등재 겹침 + 같은 블록의 «더 옅은» 산문 겹침 → 산문 쪽은 여전히 🔴 1
  //   (🔴 산문이 등재 겹침보다 진하면 «블록 대표에만 판정을 거는» 옛 구현도 통과한다 — 2차 교열이 변이 시험으로 잡았다)
  const probe = J ? `> **先に結論** ${J.hit}です。ABCホテル送迎バスは22時30分まで運行

本文です。${J.hit}。そしてABCホテル送迎バスは22時30分まで運行

## 見出し
本文。` : '';
  const okJ3 = !!J && inspect(probe, 'ja', undefined, J.slug).filter((r) => r.kind === 'echo').length === 1;
  const okJ4 = !!J && inspect(probe.replace('ABCホテル送迎バスは22時30分まで運行', '').replace('そしてABCホテル送迎バスは22時30分まで運行', ''), 'ja', undefined, J.slug).filter((r) => r.kind === 'echo').length === 0;
  for (const [ok, nm] of [[okJ1, 'echo 등재 — 완전 일치면 닫는다'], [okJ2, '🔴 echo 등재 — hit을 «품은» 긴 겹침은 안 닫는다'],
    [okJ3, '🔴 echo 등재 — 같은 블록의 산문 겹침은 여전히 뜬다(파이프라인)'], [okJ4, 'echo 등재 — 등재 겹침만 있으면 0']]) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${nm}`); }
  console.log(`selftest ${pass}/${cases.length + 5}`);
  process.exit(pass === cases.length + 5 ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const locales = (opt('locale') ?? Object.keys(LABELS).join(',')).split(',');
  const only = opt('only');
  const slug = opt('slug');
  let red = 0, amber = 0, blocks = 0, leadBlocks = 0, files = 0, count = 0, pointer = 0, unknown = 0, exemptN = 0, judgedEchoN = 0;
  const lines = [], info = [];
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
      const rows = inspect(c, loc, undefined, s);
      blocks += rows.filter((r) => r.kind === 'length').length;
      leadBlocks += rows.filter((r) => r.kind === 'lead').length;
      const bad = [];
      for (const r of rows) {
        if (r.kind === 'echo-judged') { judgedEchoN++; continue; }
        if (only && r.kind !== only) continue;
        if (r.kind === 'echo') { red++; bad.push(`  🔴 echo   ${r.at} 「${r.head}」 ${r.axis}축 · LCS ${r.len}자(원문 ${r.raw}) — ${r.sample}`); }
        const LEN = lenSpec(loc);
        if (r.kind === 'length' && !LENGTH_EXEMPT.test(s) && (r.len < LEN.min || r.len > LEN.max)) {
          amber++; bad.push(`  🟠 length ${r.at} 「${r.head}」 ${r.len}자 (규격 ${loc} ${LEN.min}~${LEN.max})`);
        }
        if (r.kind === 'place') { amber++; bad.push(`  🟠 place  ${r.at} 「${r.head}」 앞에: ${r.before}`); }
        /**
         * 🔴 **`count`·`pointer`는 «결함 판정»이 아니라 «사람이 읽을 자리»다** — 등급도 🟠이 아니라 ℹ다.
         *    2026-09-13 첫 실행 전건 판정이 그렇게 만들었다(queue Q7-b):
         *    · `pointer` 첫 주사 **7히트 중 진짜 결손 2**(zh `fish` 자기진단 4문항 · zh `game-order` 「10 种牌型」 이름 0개).
         *      오탐 4는 **포인터가 문중에 있을 뿐 답은 블록 안에 있었다** → `JUDGED`로 닫았다
         *      (ja `drawing-odds` 407対1·101対1·73対1 · zh `game-order` 다섯 액션 볼드 · zh `tournament` 12~13%·1.5~2.2배 ·
         *      ja `glossary` = 회차 12가 이미 «대상 밖» 판정). 🪶 `zh-hant/wpt`는 **결손이 아니다**(세 경로를 다 댄다 · 렌즈 3).
         *    · `count`는 첫 판에 **항목이 아니라 구분자를 셌다** — 276블록 중 **198건이 구분자 덕에 «충족»**으로 통과했고
         *      그래서 「미판정」 안전망이 **0건**이었다. 🔴 그 축은 **`countedItems`에서 근거에서 빠졌다**(L200대 주석 참조) —
         *      **이 문장을 근거로 구분자를 되살리지 마라.**
         *    🔴 «마지막 문장인가»·«센 개수»로 결손을 «판정»하려 들지 마라. 기계가 좁히는 것은 **자리**이고,
         *       «답이 블록 안에 있나»는 사람이 본다(ja 회차 12 브리프 축어: 「판정은 결국 손이다」).
         *    🪶 그래도 값은 크다 — 2026-09-13 마감 실측 = **후보 13자리**(count 7 · pointer 6) **+ 미판정 248**.
         *       회차 11~13은 이 목록을 손으로 만들었다.
         */
        if (r.kind === 'count' && !judged(loc, s, r.head, 'count')) {
          count++; info.push(`  ℹ count   ${loc}/${s} ${r.at} 「${r.head}」 ${r.from}가 ${r.promised}개 약속 ↔ 기계가 센 것 ${r.got}개`);
        }
        if (r.kind === 'pointer' && !judged(loc, s, r.head, 'pointer')) {
          pointer++; info.push(`  ℹ pointer ${loc}/${s} ${r.at} 「${r.head}」 ${r.why} — 「${r.sample}」`);
        }
        if (r.kind === 'count-unknown') {
          unknown++;
          /**
           * 🔴 «미판정 248건»이라고 세어 놓고 **어디인지 뽑을 방법이 없으면** 그 계수는 쓸모가 없다
           *    (2026-09-13 2차 교열 H). 기본 실행에서는 248줄을 쏟지 않고, **`--only=count-unknown`으로 부를 때만** 펼친다.
           *    구분자로 «센 척»한 수는 참고값으로 같이 낸다 — 사람이 그 자리를 열 때 단서가 된다.
           */
          if (only === 'count-unknown') {
            info.push(`  ℹ 미판정  ${loc}/${s} ${r.at} 「${r.head}」 ${r.from} ${r.promised}개 약속 ↔ 볼드·번호로는 못 셌다(구분자 참고값 ${r.seps ?? '-'})`);
          }
        }
        // 🔴 «면제했다»는 사실을 출력한다 — 무엇을 걷어냈는지 보여야 §13 렌즈가 그 자리를 본다(렌즈 1 항목 3)
        if (r.kind === 'echo-exempt') exemptN += r.n;
      }
      if (bad.length) lines.push(`${loc}/${s}`, ...bad);
    }
  }
  console.log(`직답 블록 검사 · 로케일 ${locales.join(',')} · 파일 ${files} · 블록 ${blocks}(+ 머리말 ${leadBlocks} · echo만 본다) · 🔴 echo ${red} · 🟠 그밖 ${amber} · ℹ 사람이 볼 자리 ${count + pointer}(count ${count} · pointer ${pointer})`);
  for (const l of lines) console.log(l);
  if (info.length) {
    console.log('\nℹ 사람이 읽을 자리 — «약속한 개수»와 «포인터»(결함 판정이 아니다 · 판정은 JUDGED에 등재해 닫는다):');
    for (const l of info) console.log(l);
  }
  console.log(`\n🪶 임계 = ${Object.entries(MIN_LCS).map(([k, v]) => `${k} ${v}자`).join(' · ')} · 길이 규격 = ${Object.entries(LEN_BY_LOCALE).map(([k, v]) => `${k} ${v.min}~${v.max}`).join(' · ')}(그밖 ${LEN_DEFAULT.min}~${LEN_DEFAULT.max}) · 길이 면제 = 이벤트 가이드(물류 정보는 직답이 표 대용 · 판정 13-ⓑ)`);
  console.log('🪶 원리상 못 보는 것: 글자가 겹치지 않고 «내용»만 어긋나는 결함(ja §5-A 유형) — 그 자리는 렌즈 몫이다.');
  console.log(`🪶 count·pointer는 «후보»다(ℹ 고정 — 등급 승격은 실측 정밀도가 선 뒤에). 판정 등재 ${JUDGED.length}건은 이 스크립트의 JUDGED에 사유와 함께 있다.`);
  console.log(`🪶 «값 표현» 판정 등재로 닫은 echo ${judgedEchoN}자리 — JUDGED(kind: echo)는 **겹침 하나와 완전 일치**해야 닫힌다(같은 블록의 다른 겹침은 따로 판정된다 · settled-decisions «echo 면제는 겹친 것의 성격으로»).`);
  console.log(`🪶 «나열·공식·고유명사»로 면제한 겹침 ${exemptN}건 — 면제는 «그 겹침 하나»만 무효화한다(블록 무죄가 아니다 · 렌즈 1 항목 3).`);
  console.log(unknown
    ? `⚠ 미판정 ${unknown}건 — «N개를 약속했는데 볼드·번호가 없어 열거 수를 못 센» 블록이다(🔴 구분자는 근거로 세지 않는다 · «0건»이 아니라 «사람이 셀 자리»다).`
    : '✅ 미판정 0건 — 개수를 약속한 블록은 전부 기계가 셀 수 있었다(볼드·번호 기준).');
  console.log('🪶 개수 검사가 못 보는 것: 개수어 «없이» 목록을 약속하는 H2(「〜の見分け方」) · 「いくつか」·「主な」 같은 비수사 표현.');
  if (has('strict') && red) process.exit(1);
}

// 🔴 직접 실행일 때만 돈다 — 이 모듈은 `inspect`·`declaredCount`·`countedItems`·`JUDGED`를 export하므로
//    가드가 없으면 **import만 해도 전 코퍼스 스캔이 실행된다**(2026-09-13 렌즈 4 D-3 · `check-stamp.mjs`와 같은 꼴).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
