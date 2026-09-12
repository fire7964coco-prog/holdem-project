/**
 * PDF 용지 치수 게이트 — `@page size` ↔ 페이지 박스(`.page`/`.sheet`) ↔ `page.pdf({format})`
 *
 * ★ 왜 만들었나 (2026-09-12 · queue 회차 Q7-a ⑥ · 재료 Q1-7)
 *   🔴 **PDF는 어떤 게이트도 안 보는 자리다.** 2026-09-11 이전까지 `generate-beginner-pdf.mjs`는
 *   페이지 박스가 `8.5in × 11in` 고정이었는데 de·ko·ja·zh·pt·id는 `@page size: A4`를 썼다.
 *   A4는 210mm, Letter는 215.9mm — **de 판은 오른쪽 5.9mm가 잘린 채로 배포됐다.**
 *   `overflow:hidden`은 그걸 막아 주지 않는다(용지 경계에서 잘린다). 사람이 PDF를 열어 봐야만
 *   보이는 결함이고, 회차 Q1이 손으로 찾았다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»
 *   본다   = 한 소스 안에서 ① `@page size` ② 페이지 박스의 width/height ③ `page.pdf({format})`
 *            셋이 **같은 용지를 말하는가**. 정적 값은 mm로 환산해 대조하고,
 *            템플릿 값(`${PAGE_DIMS[...]}`)은 «세 자리가 같은 식을 쓰는가»로 구조 판정한다.
 *   못 본다 = 내용이 넘치는가(그건 렌더해서 봐야 한다) · 여백 안쪽 조판 · 글꼴 누락
 *
 * 🔴 판정 규칙 — 정적/동적이 섞이면 그 자체가 경보다
 *   ⓐ 정적 ↔ 정적 : mm로 환산해 0.5mm 넘게 갈리면 🔴
 *   ⓑ 동적 ↔ 동적 : 같은 키 식을 쓰면 ✅ (구조상 갈릴 수 없다)
 *   ⓒ 정적 ↔ 동적 : 🟠 — 지금 값이 우연히 맞아도 **용지를 하나 더 추가하는 순간 깨진다.**
 *                   실례(**2026-09-12 이전 상태**) `generate-hand-rankings-pdf.mjs`:
 *                   `@page size: ${c.pageSize}`(동적)인데 `.page { width: 210mm }`(정적)이었다.
 *                   CONTENT가 `de` 하나뿐이고 A4라 우연히 맞아 있었다.
 *                   🪶 이 게이트의 첫 실행이 그걸 잡았고 **같은 회차에 닫혔다** — 지금 그 파일은 ✅다.
 *                   규칙은 그대로 유효하다(다음에 같은 배치가 들어오면 다시 잡는다).
 *   ⓓ 여백이 있으면 페이지 박스는 «용지 − 여백×2»여야 한다
 *      (`starting-hands-chart-print.html`: A4 210mm − 12mm×2 = **186mm** = `.sheet` 폭 ✅)
 *
 * 사용
 *   node scripts/check-pdf-page.mjs
 *   npm run check:pdf-page -- --strict     🔴면 exit 1
 *   npm run check:pdf-page:selftest
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const has = (n) => args.includes(`--${n}`);

/** 표준 용지 (mm) */
export const PAPER = {
  a4: { w: 210, h: 297 },
  letter: { w: 215.9, h: 279.4 },
  legal: { w: 215.9, h: 355.6 },
  a5: { w: 148, h: 210 },
  tabloid: { w: 279.4, h: 431.8 },
};

/** CSS 길이를 mm로 — 못 읽으면 null */
export function toMm(raw) {
  if (!raw) return null;
  const m = String(raw).trim().match(/^([\d.]+)\s*(mm|cm|in|px|pt)$/i);
  if (!m) return null;
  const n = Number(m[1]);
  switch (m[2].toLowerCase()) {
    case 'mm': return n;
    case 'cm': return n * 10;
    case 'in': return n * 25.4;
    case 'pt': return (n / 72) * 25.4;
    case 'px': return (n / 96) * 25.4;
    default: return null;
  }
}

const isDynamic = (s) => typeof s === 'string' && s.includes('${');

/**
 * 🔴 CSS 여백은 **축약형**이 온다 — `margin: 0 12mm` 를 `toMm()`가 못 읽고 `?? 0` 으로 떨어지면
 *    «여백 0»으로 계산해 멀쩡한 파일을 🔴로 찍는다(2026-09-12 렌즈 실증).
 *    좌우 여백(= 두 번째 값, 없으면 첫 값)만 쓴다. 못 읽으면 **null**을 돌려 «미판정»으로 만든다.
 */
export function marginEach(raw) {
  if (raw === undefined || raw === null) return 0;
  const parts = String(raw).trim().split(/\s+/);
  const pick = parts.length >= 2 ? parts[1] : parts[0];
  if (/^0$/.test(pick)) return 0;
  return toMm(pick);
}

/** `format: paperName` 처럼 «변수»인가 — 값을 모르므로 🔴이 아니라 미판정이다 */
const isIdentifier = (s) => typeof s === 'string' && /^[A-Za-z_$][\w$.]*$/.test(s.trim()) && !PAPER[s.trim().toLowerCase()];

/**
 * 한 소스에서 용지 관련 선언을 뽑는다.
 * @returns {{ pageSize, box, format, margin }}
 */
/**
 * 🔴 CSS 블록을 «첫 `}`까지»로 읽으면 안 된다 — 값 자리에 템플릿 식이 들어 있다.
 *    `.page { width: ${DIMS["Letter"].w}; ... }` 에서 첫 `}` 는 **템플릿 식의 닫는 괄호**라
 *    블록이 거기서 끊기고 `width` 값이 `${DIMS["Letter"].w` 로 잘린다.
 *    그러면 키 비교가 통째로 무력화된다(2026-09-12 렌즈 실증). 중괄호를 세어 읽는다.
 */
function blockAfter(src, headRe) {
  const m = src.match(headRe);
  if (!m) return null;
  let i = m.index + m[0].length;   // `{` 다음
  let depth = 1;
  const from = i;
  while (i < src.length && depth > 0) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') depth--;
    i++;
  }
  return depth === 0 ? src.slice(from, i - 1) : null;
}

export function parseSource(src) {
  let pageSize = null, margin = null;
  const atPage = blockAfter(src, /@page\s*\{/);
  if (atPage !== null) {
    const sz = atPage.match(/size\s*:\s*([^;]+)/);
    if (sz) pageSize = sz[1].trim();
    const mg = atPage.match(/margin\s*:\s*([^;]+)/);
    if (mg) margin = mg[1].trim();
  }

  // 페이지 박스 — `.page { … }` 또는 `.sheet { … }`. width 를 가진 첫 규칙을 쓴다.
  let box = null;
  for (const sel of ['.page', '.sheet']) {
    const head = new RegExp('\\' + sel + '\\s*\\{', 'g');
    let hit;
    while ((hit = head.exec(src))) {
      const body = blockAfter(src.slice(hit.index), new RegExp('^\\' + sel + '\\s*\\{'));
      if (body === null) continue;
      const w = body.match(/(?:^|[;\s])width\s*:\s*([^;]+)/);
      const h = body.match(/(?:^|[;\s])height\s*:\s*([^;]+)/);
      if (w) { box = { sel, w: w[1].trim(), h: h ? h[1].trim() : null }; break; }
    }
    if (box) break;
  }

  const fmt = src.match(/format\s*:\s*([^,\n}]+)/);
  const format = fmt ? fmt[1].trim().replace(/['"]/g, '') : null;

  return { pageSize, box, format, margin };
}

/**
 * 선언 셋을 판정한다.
 * @returns {{ level: 'ok'|'amber'|'red', msg: string }[]}
 */
/** 템플릿 식의 «키»만 뽑는다 — `${PAGE_DIMS[c.pageSize ?? "A4"].w}` → `c.pageSize ?? "A4"` */
export function dynKey(s) {
  if (!isDynamic(s)) return null;
  const m = String(s).match(/\$\{([^}]*)\}/);
  if (!m) return null;
  // 표 이름과 속성 접근자를 벗겨 «무엇으로 고르나»만 남긴다
  return m[1]
    .replace(/^[A-Za-z_$][\w$]*\s*\[/, '')
    .replace(/\]\s*\.\s*[wh]\s*$/, '')
    .replace(/\]\s*$/, '')
    .replace(/\s+/g, '');
}

export function judge(d) {
  const out = [];
  if (!d.pageSize && !d.box && !d.format) return [{ level: 'ok', msg: '용지 선언 없음 — 대상 밖' }];

  const dynPage = isDynamic(d.pageSize);
  const dynBox = d.box ? isDynamic(d.box.w) : false;

  /* 🔴 «박스 선언이 없다»를 ✅로 찍지 마라 — 미검사다.
     첫 판은 `.page { color: red }` 처럼 첫 규칙에 width가 없으면 box=null 이 되고 조용히 통과했다. */
  if ((d.pageSize || d.format) && !d.box) {
    out.push({ level: 'amber', msg: '페이지 박스(.page/.sheet)의 width를 못 찾았다 — 대조 미실시(미판정)' });
  }

  if (d.pageSize && d.box) {
    if (dynPage !== dynBox) {
      out.push({
        level: 'amber',
        msg: `@page size는 ${dynPage ? '동적' : '정적'}(${d.pageSize})인데 ${d.box.sel} width는 ${dynBox ? '동적' : '정적'}(${d.box.w})다 — 용지를 하나 더 넣으면 갈린다`,
      });
    } else if (dynPage) {
      /* 🔴 «둘 다 동적이면 ✅»가 아니다 — **같은 키로 고르는가**를 실제로 본다.
         머리글이 ⓑ로 약속해 놓고 구현이 없었다(2026-09-12 렌즈 실증). 그 구멍이 곧
         `@page size: ${c.pageSize}` + `.page { width: ${DIMS["Letter"].w} }` — de 5.9mm 잘림 사고의 모양이다. */
      const kPage = dynKey(d.pageSize);
      const kBox = dynKey(d.box.w);
      if (kPage && kBox && kPage !== kBox) {
        out.push({
          level: 'red',
          msg: `@page size는 ${kPage}로 고르는데 ${d.box.sel} width는 ${kBox}로 고른다 — 같은 키가 아니다`,
        });
      }
      const kBoxH = d.box.h ? dynKey(d.box.h) : null;
      if (kPage && kBoxH && kPage !== kBoxH) {
        out.push({ level: 'red', msg: `@page size(${kPage}) ↔ ${d.box.sel} height(${kBoxH}) 키 불일치` });
      }
    } else {
      const paper = PAPER[String(d.pageSize).toLowerCase()];
      const boxW = toMm(d.box.w);
      const marginMm = marginEach(d.margin);
      if (paper && boxW !== null && marginMm !== null) {
        const expect = paper.w - marginMm * 2;
        if (Math.abs(boxW - expect) > 0.5) {
          out.push({
            level: 'red',
            msg: `${d.box.sel} width ${d.box.w}(${boxW.toFixed(1)}mm) ≠ ${d.pageSize} ${paper.w}mm${marginMm ? ` − 여백 ${marginMm}mm×2` : ''} = ${expect.toFixed(1)}mm`,
          });
        }
        const boxH = toMm(d.box.h);
        if (boxH !== null) {
          const expectH = paper.h - marginMm * 2;
          if (Math.abs(boxH - expectH) > 0.5) {
            out.push({ level: 'red', msg: `${d.box.sel} height ${d.box.h}(${boxH.toFixed(1)}mm) ≠ ${expectH.toFixed(1)}mm` });
          }
        }
      } else if (paper && boxW !== null && marginMm === null) {
        out.push({ level: 'amber', msg: `여백 «${d.margin}»을 못 읽어 박스 대조를 건너뛴다(미판정)` });
      }
    }
  }

  /* 🔴 `@page`가 없어도 «박스 ↔ format»만으로 사고가 성립한다 — 그 경로가 아예 없었다.
     `.page { width: 8.5in }` + `page.pdf({ format: "A4" })` 가 정확히 de 잘림 사고다. */
  if (d.box && d.format && !isDynamic(d.box.w) && !isDynamic(d.format) && !isIdentifier(d.format)) {
    const paper = PAPER[String(d.format).toLowerCase()];
    const boxW = toMm(d.box.w);
    const marginMm = marginEach(d.margin) ?? 0;
    if (paper && boxW !== null && Math.abs(boxW - (paper.w - marginMm * 2)) > 0.5) {
      out.push({
        level: 'red',
        msg: `${d.box.sel} width ${d.box.w}(${boxW.toFixed(1)}mm) ≠ page.pdf({format: ${d.format}}) ${paper.w}mm`,
      });
    }
  }

  if (d.pageSize && d.format && !isDynamic(d.pageSize) && !isDynamic(d.format)) {
    /* 🔴 `format: paperName` 처럼 «변수»면 값을 모른다 — 🔴이 아니라 미판정이다 */
    if (isIdentifier(d.format)) {
      out.push({ level: 'amber', msg: `page.pdf({format: ${d.format}})가 변수라 @page와 대조 못 함(미판정)` });
    } else if (String(d.pageSize).toLowerCase() !== String(d.format).toLowerCase()) {
      out.push({ level: 'red', msg: `@page size ${d.pageSize} ≠ page.pdf({format: ${d.format}})` });
    }
  }

  return out.length ? out : [{ level: 'ok', msg: '용지 선언 정합' }];
}

// ── 셀프테스트 ────────────────────────────────────────────
function selftest() {
  const t = [];
  const one = (name, ok) => t.push([name, ok]);

  one('in → mm', Math.abs(toMm('8.5in') - 215.9) < 0.01);
  one('mm 그대로', toMm('210mm') === 210);
  one('단위 없는 값은 null', toMm('210') === null);

  const good = '@page { size: A4; margin: 0; } .page { width: 210mm; height: 297mm; }';
  one('A4 ↔ 210mm는 ✅', judge(parseSource(good))[0].level === 'ok');

  const bad = '@page { size: A4; margin: 0; } .page { width: 8.5in; height: 11in; }';
  const badJ = judge(parseSource(bad));
  one('A4인데 박스가 Letter면 🔴 (de 5.9mm 잘림 유형)', badJ.some((x) => x.level === 'red'));

  const margin = '@page { size: A4; margin: 12mm; } .sheet { width: 186mm; }';
  one('여백 12mm면 .sheet 186mm가 맞다', judge(parseSource(margin))[0].level === 'ok');

  const marginBad = '@page { size: A4; margin: 12mm; } .sheet { width: 210mm; }';
  one('여백이 있는데 박스가 용지 전폭이면 🔴', judge(parseSource(marginBad)).some((x) => x.level === 'red'));

  const mixed = '@page { size: ${c.pageSize}; margin: 0; } .page { width: 210mm; height: 297mm; }';
  one('정적↔동적 혼합은 🟠', judge(parseSource(mixed)).some((x) => x.level === 'amber'));

  const dyn = '@page { size: ${c.pageSize}; margin: 0; } .page { width: ${DIMS[c.pageSize].w}; height: ${DIMS[c.pageSize].h}; }';
  one('둘 다 동적이면 ✅ (구조상 못 갈린다)', judge(parseSource(dyn))[0].level === 'ok');

  const fmt = '@page { size: A4; margin: 0; } .page { width: 210mm; height: 297mm; }\nawait page.pdf({ format: "Letter" })';
  one('@page ↔ page.pdf format 불일치를 잡는다', judge(parseSource(fmt)).some((x) => x.level === 'red'));

  one('용지 선언이 없으면 대상 밖', judge(parseSource('const x = 1;'))[0].msg.includes('대상 밖'));

  // 🔴 2026-09-12 렌즈 실증 — 전부 «오통과»였다(게이트의 간판 주장이 거짓이었다)
  one('동적↔동적이라도 «다른 키»면 🔴 (de 5.9mm 사고의 모양)', judge(parseSource(
    '@page { size: ${c.pageSize}; margin: 0; } .page { width: ${DIMS["Letter"].w}; height: ${DIMS["Letter"].h}; }',
  )).some((x) => x.level === 'red'));
  one('동적↔동적이고 «같은 키»면 ✅', judge(parseSource(
    '@page { size: ${c.pageSize}; margin: 0; } .page { width: ${DIMS[c.pageSize].w}; height: ${DIMS[c.pageSize].h}; }',
  ))[0].level === 'ok');
  one('dynKey가 표 이름·접근자를 벗긴다', dynKey('${PAGE_DIMS[c.pageSize ?? "A4"].w}') === 'c.pageSize??"A4"');

  one('@page가 없어도 박스↔format 불일치를 잡는다', judge(parseSource(
    '.page { width: 8.5in; height: 11in; }\nawait page.pdf({ format: "A4" })',
  )).some((x) => x.level === 'red'));

  one('박스 width를 못 찾으면 ✅이 아니라 미판정(🟠)', judge(parseSource(
    '@page { size: A4; margin: 0; } .page { color: red; }',
  )).some((x) => x.level === 'amber' && x.msg.includes('미판정')));

  one('축약형 여백 `0 12mm`를 읽는다(오탐이었다)', judge(parseSource(
    '@page { size: A4; margin: 0 12mm; } .sheet { width: 186mm; }',
  ))[0].level === 'ok');
  one('marginEach — 축약형은 좌우 값을 쓴다', marginEach('0 12mm') === 12 && marginEach('12mm') === 12 && marginEach('0') === 0);

  one('format이 변수면 🔴이 아니라 미판정(오탐이었다)', judge(parseSource(
    '@page { size: A4; margin: 0; } .page { width: 210mm; height: 297mm; }\nawait page.pdf({ format: paperName })',
  )).every((x) => x.level !== 'red'));

  let pass = 0;
  for (const [name, ok] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

// ── 본체 ──────────────────────────────────────────────────
function main() {
  if (has('selftest')) return selftest();
  console.log('── PDF 용지 치수 게이트 ──');

  const dir = path.join(ROOT, 'scripts');
  const SELF = path.basename(fileURLToPath(import.meta.url));
  const cands = fs.readdirSync(dir)
    .filter((f) => /\.(mjs|html)$/.test(f) && f !== SELF)   // 🔴 셀프테스트 문자열이 자기를 검사 대상으로 만든다
    .map((f) => `scripts/${f}`)
    .filter((rel) => {
      const s = fs.readFileSync(path.join(ROOT, rel), 'utf8');
      return /@page\s*\{/.test(s) || /page\.pdf\(/.test(s);
    });

  let red = 0, amber = 0;
  for (const rel of cands) {
    let src = fs.readFileSync(path.join(ROOT, rel), 'utf8');
    /* 🔴 `@page`가 «다른 파일»에 있는 경우를 잇는다 — `render-starting-hands-pdf.mjs`는
       `format: 'A4'`만 갖고 용지 선언은 `starting-hands-chart-print.html`에 있다.
       파일을 따로 보면 둘 다 «반쪽»이라 불일치가 원리상 안 잡힌다. */
    let paired = null;
    const ref = src.match(/resolve\(['"](scripts\/[\w-]+\.html)['"]\)/);
    if (ref && fs.existsSync(path.join(ROOT, ref[1]))) {
      paired = ref[1];
      src += '\n' + fs.readFileSync(path.join(ROOT, ref[1]), 'utf8');
    }
    const d = parseSource(src);
    if (paired) console.log(`   🪶 ${rel} ↔ ${paired} 를 함께 본다`);
    const verdicts = judge(d);
    const worst = verdicts.some((v) => v.level === 'red') ? '🔴' : verdicts.some((v) => v.level === 'amber') ? '🟠' : '✅';
    console.log(`${worst} ${rel}`);
    console.log(`     @page size = ${d.pageSize ?? '(없음)'} · 여백 ${d.margin ?? '(없음)'} · 박스 ${d.box ? `${d.box.sel} ${d.box.w} × ${d.box.h ?? '?'}` : '(없음)'} · format ${d.format ?? '(없음)'}`);
    for (const v of verdicts) {
      if (v.level === 'red') red++;
      if (v.level === 'amber') amber++;
      if (v.level !== 'ok') console.log(`     ${v.level === 'red' ? '🔴' : '🟠'} ${v.msg}`);
    }
  }

  console.log('\n── 커버리지 (0건이 «검증»으로 오독되지 않게) ──');
  console.log(`   검사한 소스 ${cands.length}개 — **scripts/ 최상위**에서 @page 또는 page.pdf( 를 가진 파일`);
  console.log('   ⚠ 못 본다: 내용이 실제로 넘치는가 · 조판 · 글꼴 누락 — 그건 산출물 PDF를 열어야 한다');
  console.log('   ⚠ 안 본다: scripts/ 하위 폴더 · app/ · public/ — 재귀하지 않는다(거기 PDF 생성기를 두면 이 게이트 밖이다)');

  console.log(`\n${red ? '🔴' : '✅'} 🔴 ${red}건 · ${amber ? '🟠' : '✅'} 🟠 ${amber}건`);
  if (has('strict') && red) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
