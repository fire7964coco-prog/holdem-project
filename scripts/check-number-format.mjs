/**
 * 숫자 표기 일관성 게이트 — 한 로케일 안에서 소수점·천단위 구분자가 갈리는가
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a · §2 미결 「소수점 구분자 부채」)
 *   미결에 적힌 문제는 «공용 그림의 `31.5%` ↔ de·id·pt 본문의 `31,5%`»였고, 결론은
 *   **«그림 안 문자열은 어떤 게이트도 안 본다»**였다. 맞다 — 그림은 OCR 없이는 못 본다.
 *   그런데 **본문은 잴 수 있고, 재 보니 그림보다 큰 게 나왔다**(2026-09-12 실측):
 *     de·pt·id·fr·it·pl·ro·ru·uk·vi = 소수점 **쉼표 100%** (마침표 0건) — 깨끗하다
 *     **es만 갈린다** — 마침표 2,005 ↔ 쉼표 20 · 통화 천단위 쉼표 278 ↔ 마침표 103
 *
 *   🔴 **es가 EN 포맷인 것은 «정본»이다 — 시장 추론이 아니다.** `docs/translation-terms-es.md` L8 축어:
 *     *「Números — ★MANTENER EL FORMATO DE EN TAL CUAL (punto decimal, coma de millares: 1,326 · 2.5 ·
 *     0.0032%). **NO convertir a formato europeo** (2,5). Motivo: los posts es ya desplegados usan
 *     formato EN y hay que ser consistentes + evitar errores de conversión.」*
 *     같은 파일 L53·L67이 재확인한다 — *「igual que EN, sin recalcular ni **reformatear**」*.
 *     선례도 있다: 렌즈 2종이 「es는 `1.326`이 맞다」고 했으나 **코퍼스 실측으로 기각**됐다
 *     (`docs/harden-queue-진행.md` 「그 언어의 관습과 이 코퍼스의 관습이 갈리면 코퍼스가 이긴다」).
 *   🪶 「LATAM은 마침표를 쓴다」를 근거로 대지 마라 — **LATAM 안에서 갈린다**(MX·CO·PE는 마침표,
 *      AR·CL·UY는 쉼표). 결론은 같아도 근거로는 못 쓴다. 정본은 «배포본과의 일관성»이다.
 *
 * 🔴 규약을 코드에 박지 않는다 — **코퍼스에서 다수파를 학습한다**
 *   「es는 쉼표」 같은 표를 박았다면 이 게이트가 1,734건을 전부 🔴로 찍고 폐기됐을 것이다
 *   (메모리 `gate-tuning-loop-is-the-work` — 「사양서에 적힌 판별 조건도 실측에서 틀린다」).
 *   로케일마다 «그 로케일이 실제로 쓰는 다수파»를 세고, **소수파만** 이탈로 본다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = 로케일 안의 소수점 구분자 · 통화 천단위 구분자의 **내부 불일치**
 *            🔴 한 «파일» 안에서 두 규약이 섞임 (이건 변명의 여지가 없다)
 *            🟠 파일은 일관되지만 그 로케일의 소수파 규약
 *   못 본다 = ① **그림 안 문자열**(OCR 필요 — §2 미결의 원래 항목은 여전히 열려 있다)
 *            ② 어느 규약이 «옳은가»(그건 독자 시장 판정 — `local-voice` 몫)
 *            ③ 수치가 «맞는가»
 *
 * 사용
 *   node scripts/check-number-format.mjs
 *   npm run check:number-format -- --locale=es
 *   npm run check:number-format -- --strict     🔴면 exit 1
 *   npm run check:number-format:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);
const val = (n, d) => {
  const hit = args.find((a) => a.startsWith(`--${n}=`));
  return hit ? hit.slice(n.length + 3) : d;
};

/**
 * 통화 표기 — 기호 **와 문자 코드**. 코드를 빼면 `KRW 2,7M` 같은 자리가 통째로 안 보인다
 * (2026-09-12 렌즈 지적 · 실제로 `korea-poker-marathon-2026.ts`의 1000배 오독 위험 자리를 놓쳤다).
 */
const CUR = '(?:[₩$€£₱¥₫฿]|\\b(?:KRW|USD|EUR|PHP|JPY|TWD|AUD|CHF|GBP|BRL|VND|THB)\\b\\s?|NT\\$|US\\$|HK\\$|R\\$)';
/**
 * 🔴 «수의 끝» 판정에서 **뒤따르는 문장 부호를 값의 일부로 읽으면 안 된다.**
 *    `(?![\d.,])`로 잘랐더니 `≈ $1.800, ==g:…`의 `$1.800`이 통째로 안 잡혔다(2026-09-12 렌즈 실증).
 *    「뒤에 숫자가 오면 안 된다」 + 「구분자 다음에 숫자가 이어지면 안 된다」 둘로 나눈다.
 */
const NUM_END = '(?!\\d)(?![.,]\\d)';

/**
 * 🔴 «맨 소수»를 세면 안 된다 — 포스트 본문에는 **인라인 CSS가 들어 있다.**
 *   첫 구현이 `\d+\.\d{1,2}` 를 그대로 셌더니 de가 「마침표 1,442」로 나왔다. 실체는
 *   `rgba(0,0,0,0.18)` · `padding:0 0 0 0.5in` · `1.5px` 였다(같은 날 `%` 한정 실측은 마침표 **0**).
 *   그래서 **독자가 숫자로 읽는 자리**만 센다: 백분율 · 통화 · bb.
 *   덤으로 `style="…"` 속성과 `rgba()`·`hsl()` 는 먼저 지운다.
 */
export function stripStyling(text) {
  return String(text)
    .replace(/style\s*=\s*"[^"]*"/g, ' ')
    .replace(/(?:rgba?|hsla?)\([^)]*\)/g, ' ')
    // Tailwind 아비트러리 값 — `w-[33.33%]`·`scale-[1.015]`도 숫자가 아니다
    .replace(/\[[\d.]+(?:rem|px|em|%|vh|vw|ch)?\]/g, ' ')
    /* 🔴 온라인 캐시게임 «스테이크 표기»(`$0.01/$0.02`)는 로케일 규약을 안 따른다 —
       전 세계 어느 사이트에서나 마침표로 쓰는 고정 관습이고, 로비 화면에 그렇게 찍힌다.
       쉼표 로케일에서 이걸 «이탈»로 잡으면 영구 🔴이 된다(uk 실례 · 2026-09-12 전건 판정). */
    .replace(/[₩$€£₱¥₫฿]\s?\d+[.,]\d{1,2}\s*\/\s*[₩$€£₱¥₫฿]?\s?\d+[.,]\d{1,2}/g, ' ');
}

/**
 * 한 텍스트의 표기 계수 — 백분율·통화·bb만.
 * 소수 = 구분자 뒤 1~2자리(천단위로는 읽힐 수 없다) · 천단위 = 통화 뒤 «1~3자리 + 구분자 + 정확히 3자리»
 */
export function countFormats(raw) {
  const text = stripStyling(raw);
  const c = { decDot: 0, decComma: 0, thouDot: 0, thouComma: 0 };
  const dec = (sep) =>
    new RegExp(
      `(?:\\d+${sep}\\d{1,2}\\s*%` +
        `|${CUR}\\s?\\d+${sep}\\d{1,2}${NUM_END}` +
        `|\\d+${sep}\\d{1,2}\\s?(?:bb|[KM])\\b)`,
      'g',
    );
  for (const _ of text.matchAll(dec('\\.'))) c.decDot++;
  for (const _ of text.matchAll(dec(','))) c.decComma++;
  // 천단위는 «1~3자리 + (구분자 + 정확히 3자리)+» — `$1.234.567`도 한 번만 센다
  for (const _ of text.matchAll(new RegExp(`${CUR}\\s?\\d{1,3}(?:\\.\\d{3})+${NUM_END}`, 'g'))) c.thouDot++;
  for (const _ of text.matchAll(new RegExp(`${CUR}\\s?\\d{1,3}(?:,\\d{3})+${NUM_END}`, 'g'))) c.thouComma++;
  return c;
}

/** 파일 하나의 판정 — 'mixed' | 'dot' | 'comma' | 'none' (소수점 축) */
/**
 * 🔴 **두 축을 다 본다.** 소수점 축만 보면 «천단위만 혼용된 파일»이 통과한다
 *    (2026-09-12 렌즈 실증: `korea-poker-marathon-2026.ts`가 `₩70,000` ↔ `$1.800`을 같이 쓰는데 ✅였다).
 */
export function fileVerdict(c) {
  if ((c.decDot && c.decComma) || (c.thouDot && c.thouComma)) return 'mixed';
  if (c.decDot) return 'dot';
  if (c.decComma) return 'comma';
  return 'none';
}

function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);

  one('소수 마침표를 센다', countFormats('equity 37.8% y 2.5bb').decDot === 2);
  one('소수 쉼표를 센다', countFormats('equity 37,8% y 2,5bb').decComma === 2);
  one('천단위 마침표는 소수로 세지 않는다', countFormats('$10.000').decDot === 0);
  one('통화 천단위 마침표를 센다', countFormats('cada uno vale $10.000 hoy').thouDot === 1);
  one('통화 천단위 쉼표를 센다', countFormats('cada uno vale $10,000 hoy').thouComma === 1);
  one('통화 없는 10.000은 천단위로 안 센다', countFormats('10.000 manos').thouDot === 0);
  one('세 자리 소수(3.372)는 소수로도 천단위로도 안 센다',
    countFormats('3.372').decDot === 0 && countFormats('3.372').thouDot === 0);

  // 🔴 첫 실행 오탐 폭발(de 마침표 1,442)의 재발 방지 — 본문에 인라인 CSS가 들어 있다
  one('인라인 CSS rgba(…,0.18)은 숫자가 아니다', countFormats('background:rgba(0,0,0,0.18)').decDot === 0);
  one('style 속성 안의 0.5in은 숫자가 아니다', countFormats('<div style="padding:0 0 0 0.5in">x</div>').decDot === 0);
  one('1.5px·scale-[1.015]도 숫자가 아니다',
    countFormats('border:1.5px solid; class="scale-[1.015]"').decDot === 0);
  one('그래도 bb 소수는 센다', countFormats('un EV real de 3.5bb').decDot === 1);
  one('통화 소수도 센다', countFormats('$1.5 por mano').decDot === 1);
  one('스테이크 표기 $0.01/$0.02는 대상 밖(전 세계 고정 관습)',
    countFormats('при блайндах $0.01/$0.02 грати').decDot === 0);
  one('스테이크 표기를 빼도 나머지 소수는 센다',
    countFormats('блайнди $0.01/$0.02, еквіті 62,5%').decComma === 1);

  // 🔴 2026-09-12 렌즈 실증 3종 — 전부 «오통과»였다(오탐보다 나쁘다)
  one('뒤따르는 문장 쉼표에 눈이 멀지 않는다',
    countFormats('≈ $1.800, ==g:KRW 2,200M GTD==').thouDot === 1);
  one('문자 통화코드도 통화다 — KRW 2,7M',
    countFormats('buy-in de KRW 2,7M ≈ $1,800').decComma === 1);
  one('천단위만 혼용돼도 mixed다',
    fileVerdict(countFormats('₩70,000 y $1.800')) === 'mixed');
  one('1.234.567은 한 번만 센다',
    countFormats('premio de $1.234.567 total').thouDot === 1);
  one('Tailwind 아비트러리 %도 숫자가 아니다',
    countFormats('class="w-[33.33%]"').decDot === 0);
  one('K 단위 소수도 센다 — 42,2K',
    countFormats('el maratón completo de 42,2K').decComma === 1);

  one('한 파일에 둘 다면 mixed', fileVerdict(countFormats('37,8% y 98.4%')) === 'mixed');
  one('마침표만이면 dot', fileVerdict(countFormats('98.4%')) === 'dot');
  one('쉼표만이면 comma', fileVerdict(countFormats('37,8%')) === 'comma');
  one('소수가 없으면 none', fileVerdict(countFormats('사백 마흔둘')) === 'none');

  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const only = val('locale', null);
  console.log('── 숫자 표기 일관성 게이트 (로케일 내부) ──');

  const lib = path.join(ROOT, 'lib');
  const dirs = fs.readdirSync(lib).filter((d) => /^posts-/.test(d) && fs.statSync(path.join(lib, d)).isDirectory());

  let red = 0, amber = 0;
  for (const d of dirs) {
    const loc = d.slice(6);
    if (only && loc !== only) continue;
    const files = fs.readdirSync(path.join(lib, d)).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    const per = [];
    const sum = { decDot: 0, decComma: 0, thouDot: 0, thouComma: 0 };
    for (const f of files) {
      const c = countFormats(fs.readFileSync(path.join(lib, d, f), 'utf8'));
      for (const k of Object.keys(sum)) sum[k] += c[k];
      per.push({ f, c, v: fileVerdict(c) });
    }
    if (!sum.decDot && !sum.decComma && !sum.thouDot && !sum.thouComma) continue;

    const dominant = sum.decDot >= sum.decComma ? 'dot' : 'comma';
    const minority = dominant === 'dot' ? 'comma' : 'dot';
    const mixedFiles = per.filter((p) => p.v === 'mixed');
    const minorityFiles = per.filter((p) => p.v === minority);
    const thouDominant = sum.thouDot >= sum.thouComma ? 'thouDot' : 'thouComma';
    const thouMinorityFiles = per.filter((p) => p.c[thouDominant === 'thouDot' ? 'thouComma' : 'thouDot'] > 0);

    const mark = mixedFiles.length ? '🔴' : (minorityFiles.length || thouMinorityFiles.length) ? '🟠' : '✅';
    console.log(`\n${mark} ${loc} — 소수점 다수파 «${dominant === 'dot' ? '마침표' : '쉼표'}» (마침표 ${sum.decDot} · 쉼표 ${sum.decComma}) · 통화 천단위(마침표 ${sum.thouDot} · 쉼표 ${sum.thouComma})`);
    for (const p of mixedFiles) {
      red++;
      console.log(`   🔴 ${p.f} — 한 파일에 둘 다 (마침표 ${p.c.decDot} · 쉼표 ${p.c.decComma})`);
    }
    for (const p of minorityFiles) {
      amber++;
      console.log(`   🟠 ${p.f} — 이 로케일 소수파 규약만 쓴다 (${minority === 'dot' ? '마침표' : '쉼표'} ${minority === 'dot' ? p.c.decDot : p.c.decComma})`);
    }
    for (const p of thouMinorityFiles) {
      if (mixedFiles.includes(p) || minorityFiles.includes(p)) continue;
      amber++;
      console.log(`   🟠 ${p.f} — 통화 천단위가 소수파 (마침표 ${p.c.thouDot} · 쉼표 ${p.c.thouComma})`);
    }
  }

  console.log('\n── 커버리지 (0건이 «검증»으로 오독되지 않게) ──');
  console.log('   다수파는 표에 박지 않고 **그 로케일 코퍼스에서 센다** — 「es는 쉼표」 같은 가정이 틀리기 때문이다.');
  console.log(`   검사한 로케일 디렉터리 ${dirs.length}개 (lib/posts-*)`);
  console.log('   ⚠ 미판정: `lib/posts.ts`·`lib/posts/`(한국어) — 한국어는 마침표 하나뿐이라 갈릴 축이 없다');
  console.log('   ⚠ 못 본다: 🔴 **그림 안 문자열**(OCR 필요 · §2 미결의 원래 항목은 여전히 열려 있다)');
  console.log('            · **단위 없는 맨 소수**(`1,5–2 horas` · `hace 2,5 años`) — 산문 수치와 못 가른다');
  console.log('            · 소수 3자리 이상(`42.195K`) — 천단위와 구분이 원리상 안 된다');
  console.log('            · 어느 규약이 옳은가(정본 = `docs/translation-terms-<loc>.md`) · 수치의 옳음');

  console.log(`\n${red ? '🔴' : '✅'} 파일 내부 혼용 ${red}건 · ${amber ? '🟠' : '✅'} 소수파 ${amber}건`);
  if (has('strict') && red) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
