/**
 * 다국어 FAQPage 스키마 게이트 (2026-08-10 신설)
 *
 * ★왜 만들었나
 *   de 문체 게이트의 D6이 de 2편의 FAQ 스키마 0을 잡았는데, 파 보니 **de만의 문제가 아니었다** —
 *   EN 마스터를 포함해 15개 로케일 41편이 같은 상태였다. 원인은 단순하다:
 *     · `audit:hard --schema` 는 `.next/server/app/blog/` 만 본다 = **한국어 전용**
 *     · 다국어 산출물은 `.next/server/app/<locale>/blog/` 에 있는데 이 경로를 보는 코드가 없었다
 *   즉 23개 로케일은 **원리상 미검사**였다. hreflang(2026-08-10 (5))과 같은 병이다.
 *   근거·목록: docs/faq-schema-audit-2026-08-10.md
 *
 * ★이 게이트의 전제는 «렌더러»다 — 그래서 전제부터 검증한다
 *   FAQ 스키마를 만드는 유일한 코드는 lib/intl-blog-page.tsx 의 정규식 하나다.
 *   그 정규식이 바뀌면 이 게이트의 판정은 전부 거짓이 된다 →
 *   **매 실행 렌더러 소스에서 정규식을 다시 읽어 대조하고, 어긋나면 즉시 실패한다.**
 *   ("별도 검사가 있다"는 주석이 존재 증거가 아니었던 canonical-check 사고의 반대편 장치다.)
 *
 * ★KO와 다국어는 «지원 패턴 수»가 다르다 (이 게이트가 진단하는 핵심 함정)
 *   app/blog/[slug]/page.tsx (KO)  : `**Q. …**` + `A. …`  **그리고**  `### Q1. …`  둘 다
 *   lib/intl-blog-page.tsx (다국어): `**Q. …**` + `A. …`  **하나만**
 *   → KO 글을 그대로 옮기며 `### Q1.` 형식을 쓰면 **조용히 스키마가 사라진다.**
 *
 * 사용:
 *   node scripts/check-faq-schema.mjs                 # 24개 로케일 전수
 *   node scripts/check-faq-schema.mjs --locale=en
 *   node scripts/check-faq-schema.mjs --slug=holdem-game-order
 *   node scripts/check-faq-schema.mjs --selftest      # 게이트 자신을 검증
 *   node scripts/check-faq-schema.mjs --verbose       # 통과분까지 전부 출력
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const ROOT = process.cwd();
const TMP = path.join(ROOT, 'node_modules', '.cache', 'check-faq-schema');
const argv = process.argv.slice(2);
const arg = (k) => (argv.find((a) => a.startsWith(`--${k}=`)) ?? '').split('=')[1] || null;
const VERBOSE = argv.includes('--verbose');

/* ────────────────────────────────────────────────────────────────
   0. 렌더러 정규식 — «원천»과 대조한다
   ──────────────────────────────────────────────────────────────── */
const RENDERER = 'lib/intl-blog-page.tsx';
/** lib/intl-blog-page.tsx 가 실제로 쓰는 것과 **같아야 하는** 정규식. */
const SCHEMA_SRC = String.raw`\*\*Q\.\s*([^*\n]+)\*\*\n\n?A\.\s*([^\n]+)`;
/** 스키마가 붙는 최소 문항 수(렌더러의 `faqItems.length >= 2`). */
const MIN_ITEMS = 2;

/** 렌더러 소스에서 정규식 리터럴을 뽑아 위 상수와 대조. 어긋나면 이 게이트는 «거짓말»이 된다. */
function assertRendererContract() {
  const p = path.join(ROOT, RENDERER);
  if (!fs.existsSync(p)) throw new Error(`렌더러를 못 찾음: ${RENDERER}`);
  const src = fs.readFileSync(p, 'utf8');
  const m = src.match(/matchAll\(\s*\/(.+?)\/g\s*\)/s);
  if (!m) throw new Error(`${RENDERER} 에서 FAQ 정규식을 못 찾았다 — 렌더러가 바뀌었다. 게이트를 갱신하라.`);
  const found = m[1];
  const minM = src.match(/faqItems\.length\s*>=\s*(\d+)/);
  const foundMin = minM ? Number(minM[1]) : null;
  const ok = found === SCHEMA_SRC && foundMin === MIN_ITEMS;
  return { ok, found, foundMin };
}

/* ────────────────────────────────────────────────────────────────
   1. 로더 — 정규식으로 소스를 긁으면 템플릿 리터럴 경계에서 틀린다.
      실제 객체로 읽는다(check-de-style.mjs와 같은 방식).
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
async function loadLocale(locale) {
  const dir = path.join(ROOT, 'lib', `posts-${locale}`);
  const out = path.join(TMP, locale);
  for (const f of fs.readdirSync(dir)) {
    if (f.endsWith('.ts')) transpileTo(path.join(dir, f), path.join(out, f.replace(/\.ts$/, '.mjs')));
  }
  const mod = await import(pathToFileURL(path.join(out, 'index.mjs')).href + `?t=${Date.now()}`);
  const arr = Object.values(mod).find((v) => Array.isArray(v) && v.length && v[0]?.slug);
  if (!arr) throw new Error(`lib/posts-${locale}/index.ts 에서 포스트 배열을 못 찾음`);
  return arr;
}
const localeDirs = () =>
  fs.readdirSync(path.join(ROOT, 'lib'))
    .filter((d) => d.startsWith('posts-') && fs.statSync(path.join(ROOT, 'lib', d)).isDirectory())
    .map((d) => d.replace('posts-', ''))
    .sort();

/* ────────────────────────────────────────────────────────────────
   2. 판정 — «FAQ가 없다»와 «FAQ는 있는데 형식 때문에 0이다»는 처방이 정반대다
   ──────────────────────────────────────────────────────────────── */
const SCHEMA_RE = () => new RegExp(SCHEMA_SRC, 'g');
/** FAQ 섹션 헤딩 — 25개 언어. 어느 언어든 «FAQ»라는 라틴 약어를 대부분 그대로 쓴다. */
const FAQ_HEADING_RE =
  /^#{2,3}[^\n]*(FAQ|Häufig|Fragen|Preguntas|Domande|Perguntas|Questions|よくある|質問|常见问题|常見問題|자주|Часто|Sıkça|Soalan|Pertanyaan|Câu hỏi|अक्सर|शंका|שאלות|أسئلة|Maswali|คำถาม|Mga Tanong|Întrebări|Pytania|প্রশ্ন|سوالات|Ceisteanna)/mi;
const Q_MARK_RE = /\*\*Q\./g;
const A_PREFIX_RE = /^A\.\s/gm;
const KO_ONLY_RE = /^### Q\d+\.\s/gm;      // KO 렌더러만 보는 패턴
const H3_QUESTION_RE = /^### [^\n]*[?？]\s*$/gm;
/* 🔴 «현지어 마커» — 렌더러는 라틴 `Q.`/`A.` 만 안다. 실측(2026-08-10): ar `**س.`/`ج.` 14곳 ·
   hi `**प्र.` 7곳 · tr `**S.` 7곳. 이걸 안 보면 그 글이 «FAQ 없음»(미판정)으로 흘러
   **결함이 침묵한다** — 첫 실행에서 실제로 tr 2편이 그렇게 샜다. 짧은 마커 + 마침표 꼴을 전부 잡는다. */
const ANY_Q_MARK_RE = /^\*\*(\S{1,4})\.\s/gm;

function judge(post) {
  const c = post.content ?? '';
  const items = [...c.matchAll(SCHEMA_RE())].length;
  const q = (c.match(Q_MARK_RE) ?? []).length;
  const a = (c.match(A_PREFIX_RE) ?? []).length;
  const koOnly = (c.match(KO_ONLY_RE) ?? []).length;
  const h3q = (c.match(H3_QUESTION_RE) ?? []).length;
  // ⚠ `**1.` `**2.` 는 굵게 쓴 «번호 목록»이지 FAQ 마커가 아니다 — 첫 실행에서 fr·ar를 오진했다.
  const anyQ = [...c.matchAll(ANY_Q_MARK_RE)].map((m) => m[1]);
  const foreignQ = anyQ.filter((x) => x !== 'Q' && !/^\d+$/.test(x));
  const hasHeading = FAQ_HEADING_RE.test(c);
  const hasFaq = hasHeading || q > 0 || koOnly > 0 || foreignQ.length >= MIN_ITEMS;

  if (!hasFaq) return { state: 'none', items, q, a, koOnly, h3q };
  if (items >= MIN_ITEMS) return { state: 'ok', items, q, a, koOnly, h3q };

  // 🔴 — 왜 0인지까지 말한다. "0문항"만 보고하면 사람이 소스를 열어보고서야 원인을 안다.
  // ★진단 순서가 곧 처방의 정확도다. 라틴 `**Q.`가 이미 충분히 있으면 그게 원인이지 마커가 원인이 아니다.
  let why;
  if (q >= MIN_ITEMS && a === 0) {
    why = `\`**Q.\` ${q}개는 있는데 \`A.\` 접두가 **0개** — 답 줄 앞에 "A. "를 붙이면 즉시 살아난다`;
  } else if (q >= MIN_ITEMS && a > 0) {
    why = `\`**Q.\` ${q}개 · \`A.\` ${a}개인데 짝이 ${items}개 — 빈 줄 누락이거나 답이 여러 줄이다(답은 **한 줄**이어야 한다)`;
  } else if (foreignQ.length >= MIN_ITEMS) {
    const kinds = [...new Set(foreignQ)].map((x) => `\`**${x}.\``).join(' ');
    why = `질문 마커가 현지어다 (${kinds} ${foreignQ.length}곳) — **렌더러는 라틴 \`Q.\`/\`A.\` 만 본다**. 마커만 라틴으로 바꾸면 문안은 그대로 살릴 수 있다`;
  } else if (koOnly >= MIN_ITEMS) {
    why = `KO 전용 「### Q1.」 형식 ${koOnly}문항 — **다국어 렌더러는 이 패턴을 안 본다**(KO만 지원). \`**Q./A.\`로 전환`;
  } else if (h3q >= MIN_ITEMS) {
    why = `\`### 질문?\` 헤딩 FAQ ${h3q}문항 — 스키마 대상이 아니다. \`**Q./A.\`로 전환`;
  } else {
    why = `문항이 ${items}개뿐 — 렌더러는 ${MIN_ITEMS}개 이상일 때만 FAQPage를 만든다`;
  }
  return { state: 'broken', items, q, a, koOnly, h3q, why };
}

/* ────────────────────────────────────────────────────────────────
   3. 자가 테스트 — 검증되지 않은 게이트의 «0건»은 통과가 아니라 미검사다
   ──────────────────────────────────────────────────────────────── */
const FIXTURES = [
  ['정본 형식 2문항 (통과해야 함)', 'ok',
    '## FAQ\n\n**Q. Was ist ein Flop?**\n\nA. Die ersten drei Gemeinschaftskarten.\n\n**Q. Und der Turn?**\n\nA. Die vierte Karte.\n'],
  ['빈 줄 없이 붙여 쓴 형식도 렌더러는 받는다 (통과해야 함)', 'ok',
    '## FAQ\n\n**Q. Erste Frage?**\nA. Erste Antwort.\n\n**Q. Zweite Frage?**\nA. Zweite Antwort.\n'],
  ['🔴 A. 접두 누락 (잡아야 함)', 'broken',
    '## FAQ\n\n**Q. Erste Frage?**\n\nErste Antwort ohne Präfix.\n\n**Q. Zweite Frage?**\n\nZweite Antwort ohne Präfix.\n'],
  ['🔴 ### 헤딩 FAQ (잡아야 함)', 'broken',
    '## FAQ\n\n### Wie spielt man das?\n\nSo und so.\n\n### Und was dann?\n\nDann das.\n'],
  ['🔴 KO 전용 ### Q1. 형식 (잡아야 함)', 'broken',
    '## FAQ\n\n### Q1. 첫 질문인가요?\n\n첫 답변입니다.\n\n### Q2. 두 번째 질문인가요?\n\n두 번째 답변입니다.\n'],
  ['🔴 1문항뿐 — 렌더러가 FAQPage를 안 만든다 (잡아야 함)', 'broken',
    '## FAQ\n\n**Q. Nur eine Frage?**\n\nA. Nur eine Antwort.\n'],
  ['FAQ 섹션이 아예 없는 글은 «미판정» (broken이 아니다)', 'none',
    '## Regeln\n\nEin ganz normaler Absatz ohne jede Frage.\n'],
  ['질문에 ** 가 들어가면 렌더러가 못 읽는다 (잡아야 함)', 'broken',
    '## FAQ\n\n**Q. Was ist eine **starke** Hand?**\n\nA. Eine gute.\n\n**Q. Zweite?**\n\nA. Antwort.\n'],
  ['답이 두 줄이면 둘째 줄은 버려진다 — 1문항만 성립 (잡아야 함)', 'broken',
    '## FAQ\n\n**Q. Erste Frage?**\n\nA. Erste Zeile.\nZweite Zeile.\n\n**Q. Zweite Frage?**\n\nZweite Antwort ohne Präfix.\n'],
  ['★실측: de texas-…-beginners 수정 후 형태 (통과해야 함)', 'ok',
    '## FAQ\n\n**Q. Mit wie vielen Karten spielt man Texas Hold\'em?**\n\nA. **52 Karten** — ein französisches Blatt ohne Joker.\n\n**Q. Wie viele Karten bekommt man beim Poker?**\n\nA. Jeder Spieler bekommt genau **2 verdeckte Karten**.\n'],
  ['🔴 현지어 마커 — 아랍어 س./ج. (잡아야 함, «FAQ없음»으로 흘리면 안 된다)', 'broken',
    '## الأسئلة الشائعة\n\n**س. هل يتفوق الفلاش على الستريت؟**\n\nج. نعم.\n\n**س. ما هو الكيكر؟**\n\nج. ورقة.\n'],
  ['🔴 현지어 마커 — 터키어 S. (헤딩 없이도 잡아야 함)', 'broken',
    '**S. Poker nasıl oynanır?**\n\nC. Şöyle oynanır.\n\n**S. Blind nedir?**\n\nC. Zorunlu bahistir.\n'],
  ['굵게 쓴 번호 목록 `**1.`은 FAQ 마커가 아니다 (오진하면 안 됨 — 정상 FAQ라 통과)', 'ok',
    '## FAQ\n\n**Q. Erste Frage?**\n\nA. Erste Antwort.\n\n**Q. Zweite Frage?**\n\nA. Zweite Antwort.\n\n**1.** Ein Listenpunkt.\n\n**2.** Noch einer.\n'],
  ['라틴 **Q.가 충분하면 원인은 «마커»가 아니라 «A. 접두»다 (진단 문구 확인)', 'broken',
    '## FAQ\n\n**Q. Erste Frage?**\n\nErste Antwort.\n\n**Q. Zweite Frage?**\n\nZweite Antwort.\n\n**س. سؤال؟**\n\nج. جواب.\n\n**س. سؤال ثان؟**\n\nج. جواب ثان.\n'],
  ['★실측: en holdem-game-order 현재 형태 = A. 접두 없음 (잡아야 함)', 'broken',
    '## FAQ\n\n**Q. What is the exact order of play in Texas Hold\'em?**\n\nPost blinds, deal two hole cards, then flop, turn, river.\n\n**Q. How many betting rounds are there in a hand?**\n\nFour: preflop, flop, turn and river.\n'],
];

function selftest() {
  let pass = 0;
  const fails = [];
  // ① 렌더러 계약부터
  const contract = assertRendererContract();
  if (contract.ok) { pass++; console.log('✅ [계약] 렌더러 정규식·최소문항이 게이트와 일치'); }
  else {
    fails.push('계약');
    console.log('❌ [계약] 렌더러가 바뀌었다');
    console.log(`     렌더러: /${contract.found}/g · >= ${contract.foundMin}`);
    console.log(`     게이트: /${SCHEMA_SRC}/g · >= ${MIN_ITEMS}`);
  }
  // ② 픽스처
  for (const [name, want, content] of FIXTURES) {
    const got = judge({ content }).state;
    if (got === want) { pass++; console.log(`✅ [${want}] ${name}`); }
    else { fails.push(name); console.log(`❌ [${want}→${got}] ${name}`); }
  }
  const total = FIXTURES.length + 1;
  console.log(`\n${fails.length ? '🔴' : '✅'} ${pass}/${total} 통과`);
  process.exit(fails.length ? 1 : 0);
}

/* ────────────────────────────────────────────────────────────────
   4. 본체
   ──────────────────────────────────────────────────────────────── */
async function main() {
  if (argv.includes('--selftest')) return selftest();

  const contract = assertRendererContract();
  console.log('\n══════ 다국어 FAQPage 스키마 게이트 ══════');
  console.log(`판정 기준 = ${RENDERER} 의 정규식 (요약이 아니라 «원천»에서 읽는다)`);
  if (!contract.ok) {
    console.log('\n🔴🔴 렌더러가 바뀌었다 — 이 게이트의 판정은 지금 «거짓»이다. 먼저 게이트를 갱신하라.');
    console.log(`   렌더러: /${contract.found}/g · faqItems.length >= ${contract.foundMin}`);
    console.log(`   게이트: /${SCHEMA_SRC}/g · faqItems.length >= ${MIN_ITEMS}`);
    process.exit(1);
  }
  console.log('✅ 렌더러 계약 확인 — 정규식·최소문항 일치\n');

  const only = arg('locale');
  const slug = arg('slug');
  const locales = only ? [only] : localeDirs();

  const rows = [];
  for (const loc of locales) {
    let posts;
    try { posts = await loadLocale(loc); }
    catch (e) { console.log(`⚠ ${loc}: 로드 실패 — ${e.message}`); continue; }
    for (const p of posts) {
      if (slug && p.slug !== slug) continue;
      rows.push({ loc, slug: p.slug, ...judge(p) });
    }
  }

  const broken = rows.filter((r) => r.state === 'broken');
  const none = rows.filter((r) => r.state === 'none');
  const ok = rows.filter((r) => r.state === 'ok');

  // 글별로 묶어서 출력 — 같은 결함이 여러 로케일에 퍼진 게 이 문제의 본질이라 이 축이 맞다
  if (broken.length) {
    const bySlug = new Map();
    for (const r of broken) {
      if (!bySlug.has(r.slug)) bySlug.set(r.slug, []);
      bySlug.get(r.slug).push(r);
    }
    console.log('🔴 FAQPage 리치결과가 «안 붙는» 글\n');
    for (const [s, list] of [...bySlug].sort((a, b) => b[1].length - a[1].length)) {
      console.log(`🔴 ${s}   ${list.length}개 로케일`);
      console.log(`     ${list.map((r) => r.loc).join(' ')}`);
      for (const why of new Set(list.map((r) => r.why))) console.log(`     · ${why}`);
      console.log('');
    }
  }

  console.log('══════ 로케일별 ══════');
  const byLoc = new Map();
  for (const r of rows) {
    if (!byLoc.has(r.loc)) byLoc.set(r.loc, { ok: 0, broken: 0, none: 0 });
    byLoc.get(r.loc)[r.state]++;
  }
  for (const [loc, v] of [...byLoc].sort((a, b) => a[1].broken - b[1].broken || a[0].localeCompare(b[0]))) {
    const mark = v.broken ? '🔴' : '✅';
    console.log(`  ${mark} ${loc.padEnd(9)} 성립 ${String(v.ok).padStart(3)} · 🔴 ${String(v.broken).padStart(2)} · FAQ없음 ${v.none}`);
  }

  console.log('\n══════ 요약 ══════');
  console.log(`FAQ가 있는 글 ${ok.length + broken.length}편 중 스키마 성립 ${ok.length}편 · 🔴 ${broken.length}편`);

  console.log('\n검사 커버리지:');
  console.log(`  대상 로케일 ${locales.length}개 · 글 ${rows.length}편 (실제 객체로 로드해 판정)`);
  console.log(`  ⚠ FAQ 섹션이 아예 없는 ${none.length}편은 «미판정»이다 — 0건이 이 자리를 덮지 않는다.`);
  console.log('     (FAQ를 새로 써야 하는지는 SEO 판단이라 기계가 정할 일이 아니다)');
  console.log('  🔴 한국어(app/blog)는 이 게이트 밖이다 — `npm run audit:hard -- --schema`가 본다.');
  console.log('     KO 렌더러는 `### Q1.` 패턴도 지원하지만 **다국어 렌더러는 안 한다.** 옮길 때 이 차이가 함정이다.');
  if (VERBOSE && ok.length) {
    console.log('\n통과분:');
    for (const r of ok) console.log(`  ✅ ${r.loc.padEnd(9)} ${r.slug.padEnd(36)} ${r.items}문항`);
  }
  process.exit(broken.length ? 1 : 0);
}

main().catch((e) => { console.error(e); process.exit(1); });
