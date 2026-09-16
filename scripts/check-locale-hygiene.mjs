/**
 * 로케일 표기 위생 — 그 언어의 조판·자형에서 «있을 수 없는» 문자를 잡는다.
 *
 * 왜 만들었나 (2026-09-10 · 대기열 37)
 *   ja §5-D 2 (네이티브 렌즈가 «재발 방지 룰»로 지목):
 *     ① **정중체 종지형 + 읽점** — 「〜跳ね上がります、高レートの…」처럼 「ます」로 끝낸 뒤 읽점으로 열거를 잇는
 *        문법 파손. EN의 대시 삽입구를 번역하다 닫지 못한 자리에서 난다(rake 1건 · 원본 유래).
 *     ② **«» (기유메) 혼입** — 작업 문서의 «» 관습이 본문에 새어 든다(straddle 1건). 일본어 조판에 없는 기호다.
 *        🪶 코드 주석의 «»는 제외해야 한다(ja GTO 13편이 주석에 쓴다) → 이 게이트는 `content` 안만 본다.
 *   zh 회차 6 §5-24:
 *     `bad-beat`에 번체 `手風`(1자)이 있었는데 **`check:hangul`·`check:cjk`·`audit:hard` 어느 것도 원리상 못 잡는다**
 *     (한글도 아니고 개행 문제도 아니다). 레인은 임시 스크립트로 30자 쌍을 훑어 0건을 확인했을 뿐 정식 게이트가 없었다.
 *
 * 검사
 *   zh       번체 전용자 누출   🔴   (간체 코퍼스에 繁體字)
 *   zh-hant  간체 전용자 누출   🔴   (번체 코퍼스에 简体字)
 *   ja       정중체+읽점        🔴   「ます、」「ました、」「です、」「でした、」
 *   ja       «» 혼입            🔴
 *   🆕 셋 다  인용부호 정본      🔴   zh=“ ” / zh-hant·ja=「 」(안쪽 『 』) · 본문 + 독자 노출 메타 5필드
 *   🆕 셋 다  산문 직선 "        🔴   구문(HTML 속성·마크다운 링크 제목)은 제외 · 면제는 «세 로케일 동형» 3자리
 *
 * 왜 인용부호를 여기에 (2026-09-16 · queue Q6-b)
 *   Q6-b가 zh 43편의 인용부호 770쌍을 정본으로 스윕했는데 **그걸 지키는 게이트가 없었다**
 *   (적대 렌즈 지적 · 「검수는 반복 말고 기계화」). 내일 누가 zh에 「」를 쓰면 아무것도 안 잡는다.
 *   🔴 첫 실행이 잡은 것은 코퍼스가 아니라 **내 면제 로직**이었다 — 면제를 «문자 단위»로 걸어
 *   100자 넘는 Rule 73 축어의 **닫는 따옴표만 3로케일에서 잡혔다**(3건). 면제는 «쌍» 단위여야 한다.
 *
 * 사용
 *   npm run check:hygiene
 *   npm run check:hygiene -- --locale=zh
 *   npm run check:hygiene -- --strict
 *   npm run check:hygiene:selftest
 *
 * 한계(원리상): 고유명사·인용은 정당하게 상대 자형을 쓴다(zh 본문의 「台灣」·대만 대회명).
 *   그런 자리는 `ALLOW`에 등재해 면제한다 — 첫 실행은 전건 원문 판정(게이트 튜닝 규율).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');

const args = process.argv.slice(2);
const opt = (n) => (args.find((a) => a.startsWith(`--${n}=`)) ?? '').split('=')[1] || null;
const has = (n) => args.includes(`--${n}`);

/**
 * 번체 ↔ 간체 쌍 — «자형이 실제로 갈리는» 글자만 넣는다(같은 글자는 넣지 않는다).
 * 시드 30자는 zh 회차 6이 임시로 훑은 목록이고, 여기에 포커·대회 문맥에서 자주 나오는 자를 더했다.
 *
 * 🔴 첫 실행에서 뺀 쌍(전건 원문 판정 · 되돌리지 마라):
 *   臺/台  — 번체 대만에서도 「台北」「舞台」「一台機器」가 표준이다. 이 한 쌍이 오탐 191건 중 대부분을 만들었다.
 *   準/准  — 번체에서 「准許」(허가)로 정당하게 쓴다.
 *   範/范  — 「范」은 번체에서도 성씨로 쓴다.
 *   ⚠ 「한 글자가 두 자형에서 다 살아 있는」 쌍은 넣으면 안 된다. 넣는 순간 게이트가 상시 빨간불이 된다.
 */
const PAIRS = [
  ['個', '个'], ['們', '们'], ['這', '这'], ['來', '来'], ['會', '会'], ['對', '对'], ['說', '说'], ['時', '时'],
  ['實', '实'], ['點', '点'], ['際', '际'], ['樣', '样'], ['還', '还'], ['過', '过'], ['當', '当'], ['開', '开'],
  ['關', '关'], ['門', '门'], ['問', '问'], ['間', '间'], ['題', '题'], ['發', '发'], ['現', '现'], ['無', '无'],
  ['為', '为'], ['與', '与'], ['從', '从'], ['業', '业'], ['東', '东'], ['車', '车'], ['輪', '轮'], ['長', '长'],
  ['書', '书'], ['體', '体'], ['學', '学'], ['經', '经'], ['濟', '济'], ['區', '区'], ['醫', '医'], ['藥', '药'],
  ['銀', '银'], ['錢', '钱'], ['買', '买'], ['賣', '卖'], ['價', '价'], ['費', '费'], ['風', '风'], ['機', '机'],
  ['構', '构'], ['標', '标'], ['確', '确'], ['認', '认'], ['識', '识'], ['別', '别'], ['語', '语'],
  ['記', '记'], ['錄', '录'], ['檔', '档'], ['網', '网'], ['絡', '络'], ['電', '电'], ['腦', '脑'], ['數', '数'],
  ['據', '据'], ['處', '处'], ['應', '应'], ['該', '该'], ['總', '总'], ['結', '结'], ['論', '论'], ['證', '证'],
  ['權', '权'], ['義', '义'], ['務', '务'], ['責', '责'], ['職', '职'], ['員', '员'], ['動', '动'], ['態', '态'],
  ['愛', '爱'], ['舊', '旧'], ['親', '亲'], ['歸', '归'], ['離', '离'], ['續', '续'], ['繼', '继'], ['斷', '断'],
  ['張', '张'], ['場', '场'], ['兒', '儿'], ['專', '专'], ['變', '变'], ['籌', '筹'], ['碼', '码'], ['贏', '赢'],
  ['輸', '输'], ['蓋', '盖'], ['撲', '扑'], ['請', '请'], ['莊', '庄'], ['閒', '闲'], ['雙', '双'], ['單', '单'],
  ['兩', '两'], ['內', '内'], ['計', '计'], ['條', '条'], ['規', '规'], ['則', '则'], ['級', '级'], ['線', '线'],
  ['選', '选'], ['擇', '择'], ['決', '决'], ['勝', '胜'], ['負', '负'], ['滿', '满'], ['錯', '错'], ['誤', '误'],
  ['類', '类'], ['種', '种'], ['圍', '围'], ['將', '将'], ['幾', '几'], ['萬', '万'], ['億', '亿'],
  ['產', '产'], ['廳', '厅'], ['廣', '广'], ['雞', '鸡'], ['魚', '鱼'], ['鳥', '鸟'], ['馬', '马'], ['鳳', '凤'],
  ['龍', '龙'], ['齊', '齐'], ['齒', '齿'], ['頭', '头'], ['臉', '脸'], ['錦', '锦'], ['賽', '赛'], ['隊', '队'],
  ['報', '报'], ['參', '参'], ['預', '预'],
  ['約', '约'], ['華', '华'], ['灣', '湾'], ['顯', '显'],
  ['讀', '读'], ['寫', '写'], ['聽', '听'], ['視', '视'], ['觀', '观'], ['覺', '觉'], ['積', '积'], ['極', '极'],
  ['則', '则'], ['歷', '历'], ['雖', '虽'], ['隨', '随'], ['險', '险'], ['靜', '静'], ['響', '响'], ['頻', '频'],
].filter((p) => Array.isArray(p) && p[0] !== p[1]);

const TRAD = new Set(PAIRS.map((p) => p[0]));
const SIMP = new Set(PAIRS.map((p) => p[1]));

/**
 * 면제 — 고유명사·인용은 정당하게 상대 자형을 쓴다.
 * 🔴 늘릴 때는 «원문에서 그 자리가 정말 고유명사인지» 먼저 판정하라(면제는 게이트를 눈멀게 한다).
 */
const ALLOW = {
  zh: ['台灣', '臺灣', '中華', '國語', '繁體', '韓國'],
  'zh-hant': ['简体', '中华人民'],
};

/**
 * 인용부호 정본 (2026-09-16 · queue Q6-b가 스윕한 뒤 그 스윕을 지키려고 신설)
 *   zh       = `“ ”`   (간체 GB 표준 · 정본 `docs/translation-terms-zh.md` §6)
 *   zh-hant  = `「 」`  (정본 `docs/translation-terms-zh-hant.md` §8-4)
 *   ja       = `「 」` · 안쪽 겹침 `『 』` (정본 `docs/translation-terms-ja.md` 「문장부호」)
 *
 * 🔴 **직선 `"`는 «산문»에서만 잡는다** — HTML 속성(`style="…"`)과 마크다운 링크 제목(`](url "title")`)은
 *    **구문**이라 직선이 정상이다(zh만 3,208 + 486자리). 마스크 없이 세면 게이트가 영구 적색이 된다.
 * 🔴 링크 마스크는 «짝 맞는 괄호»로 세어야 한다 — 첫 `)`에서 끊으면 제목 안에 괄호가 있는 자리
 *    (`](/images/x.webp "ボタン(ミシシッピ)…")`)에서 닫는 따옴표를 산문으로 흘린다.
 * 🔴 **직선 면제 기준은 «라틴 축어»가 아니라 «zh·zh-hant·ja 셋이 동형으로 직선인 자리»다**
 *    — 동급으로 축어인 `Qualify for as Little as $0.50`·`Unlimited Re-Entry`는 형제가 자기 인용부호로 감싸므로 면제가 아니다.
 */
const QUOTE_CANON = {
  zh: { ban: /[「」『』]/g, kind: '「」 혼입(zh 정본 “ ”)' },
  'zh-hant': { ban: /[“”]/g, kind: '“” 혼입(zh-hant 정본 「」)' },
  ja: { ban: /[“”]/g, kind: '“” 혼입(ja 정본 「」)' },
};

/** 직선 `"` 면제 — 세 로케일이 동형으로 직선을 쓰는 자리만. 늘리려면 형제 둘을 먼저 실측하라. */
const STRAIGHT_ALLOW = {
  zh: ['with the APT turning twenty in 2026', 'Tony G', 'In button games with 2 or more'],
  'zh-hant': ['with the APT turning twenty in 2026', 'Tony G', 'In button games with 2 or more'],
  // 🟠 ja 넷째 `Qualify for as Little as $0.50`은 **ja만 직선**이다(zh·zh-hant는 자기 인용부호) —
  //    ja 레인 판정 대기라 잠정 면제. 판정이 나면 이 줄을 지우거나 근거를 적어 남겨라.
  ja: ['with the APT turning twenty in 2026', 'Tony G', 'In button games with 2 or more', 'Qualify for as Little as $0.50'],
};

/** HTML 태그·마크다운 링크 괄호를 공백으로 덮는다(인덱스 보존) → 남은 것이 «산문»이다. */
export function proseOnly(text) {
  const out = text.split('');
  let inTag = false;
  for (let i = 0; i < text.length; i++) {
    if (!inTag && text[i] === '<' && /[a-zA-Z/]/.test(text[i + 1] ?? '')) inTag = true;
    if (inTag) out[i] = ' ';
    if (inTag && text[i] === '>') inTag = false;
  }
  for (let i = 0; i + 1 < text.length; i++) {
    if (text[i] === ']' && text[i + 1] === '(') {
      let depth = 0, j = i + 1;
      for (; j < text.length; j++) {
        if (text[j] === '(') depth++;
        else if (text[j] === ')') { depth--; if (depth === 0) break; }
        else if (text[j] === '\n') break;
      }
      if (depth === 0) for (let k = i; k <= j; k++) out[k] = ' ';
    }
  }
  return out.join('');
}

/**
 * 🔴 면제는 «쌍»으로 판정한다 — 문자 하나씩 마스크하면 **여는 따옴표만 면제되고 닫는 쪽이 잡힌다**
 *    (첫 실행이 정확히 그랬다: Rule 73 축어는 100자가 넘어 닫는 `"`가 면제 문자열 밖이었다 · 3로케일 3건).
 *    쌍을 못 이룬 홀수 따옴표는 **그대로 보고한다** — 그게 진짜 결함 신호다.
 */
function scanStraight(content, loc) {
  const prose = proseOnly(content);
  const allow = STRAIGHT_ALLOW[loc] ?? [];
  const pos = [];
  for (let i = 0; i < prose.length; i++) if (prose[i] === '"') pos.push(i);
  const hits = [];
  const report = (i) => hits.push({ ch: '"', ctx: content.slice(Math.max(0, i - 16), i + 17).replace(/\n/g, '⏎') });
  for (let k = 0; k + 1 < pos.length; k += 2) {
    const inner = prose.slice(pos[k] + 1, pos[k + 1]);
    if (allow.some((a) => inner.includes(a))) continue;
    report(pos[k]); report(pos[k + 1]);
  }
  if (pos.length % 2) report(pos[pos.length - 1]);
  return hits;
}

const RULES = {
  zh: [
    { kind: '번체자', test: (c) => scanChars(c, TRAD, ALLOW.zh) },
    { kind: QUOTE_CANON.zh.kind, test: (c) => scanRe(proseOnly(c), QUOTE_CANON.zh.ban) },
    { kind: '직선 " (산문)', test: (c) => scanStraight(c, 'zh') },
  ],
  'zh-hant': [
    { kind: '간체자', test: (c) => scanChars(c, SIMP, ALLOW['zh-hant']) },
    { kind: QUOTE_CANON['zh-hant'].kind, test: (c) => scanRe(proseOnly(c), QUOTE_CANON['zh-hant'].ban) },
    { kind: '직선 " (산문)', test: (c) => scanStraight(c, 'zh-hant') },
  ],
  ja: [
    { kind: '정중체+읽점', test: (c) => scanRe(c, /(?:ます|ました|です|でした)、/g) },
    { kind: '«» 혼입', test: (c) => scanRe(c, /[«»]/g) },
    { kind: QUOTE_CANON.ja.kind, test: (c) => scanRe(proseOnly(c), QUOTE_CANON.ja.ban) },
    { kind: '직선 " (산문)', test: (c) => scanStraight(c, 'ja') },
  ],
};

/**
 * 🔴 면제는 «그 글자가 면제 문자열 안에 있을 때»만 한다 — 근처에 있다고 면제하면
 *    「台灣的撲克室」에서 撲까지 통과한다(첫 셀프테스트가 잡은 설계 결함).
 */
function allowMask(content, allow) {
  const mask = new Uint8Array(content.length);
  for (const a of allow) {
    let from = 0;
    for (;;) {
      const i = content.indexOf(a, from);
      if (i < 0) break;
      mask.fill(1, i, i + a.length);
      from = i + 1;
    }
  }
  return mask;
}

function scanChars(content, set, allow = []) {
  const mask = allowMask(content, allow);
  const hits = [];
  for (let i = 0; i < content.length; i++) {
    const ch = content[i];
    if (!set.has(ch) || mask[i]) continue;
    hits.push({ ch, ctx: content.slice(Math.max(0, i - 14), i + 15).replace(/\n/g, '⏎') });
  }
  return hits;
}

function scanRe(content, re) {
  return [...content.matchAll(re)].map((m) => ({
    ch: m[0],
    ctx: content.slice(Math.max(0, m.index - 18), m.index + m[0].length + 14).replace(/\n/g, '⏎'),
  }));
}

/** 🔴 `content` 필드 안만 본다 — 코드 주석의 «»는 대상이 아니다(ja GTO 13편) */
const contentOf = (src) => { const m = src.match(/content:\s*`([^`]*)`/); return m ? m[1] : ''; };

/**
 * 🔴 독자 노출 메타 필드도 인용부호 정본의 대상이다(`tldr`은 화면에 상자로 그려지고 `desc`는 SERP에 나간다).
 *    단 **인용부호 규칙만** 먹인다 — 번체/간체·정중체 규칙은 `content` 기준으로 튜닝된 것이라 건드리지 않는다.
 *    🔴 소스는 CRLF다 — `(.*)$`로 잡으면 한 줄도 안 맞는다.
 */
const META_FIELD = /^\s*(?:title|seoTitle|desc|tldr|imageAlt):/;
const metaOf = (src) => src.slice(0, src.indexOf('content: `') + 1).split('\n').filter((l) => META_FIELD.test(l)).join('\n');

export function inspectSource(content, loc) {
  const out = [];
  for (const rule of RULES[loc] ?? []) for (const h of rule.test(content)) out.push({ kind: rule.kind, ...h });
  return out;
}

export function inspectMeta(meta, loc) {
  const canon = QUOTE_CANON[loc];
  if (!canon || !meta) return [];
  // 필드 구분자(`desc: "…"`)가 직선이라 «직선 규칙»은 메타에 못 먹인다 — 정본 기호 혼입만 본다.
  return scanRe(meta, canon.ban).map((h) => ({ kind: `${canon.kind} · 메타`, ...h }));
}

function selftest() {
  const t = [];
  const one = (name, loc, body, want) => { const got = inspectSource(body, loc).length; const ok = got === want; t.push([name, ok, want, got]); };
  one('zh에 번체 手風을 잡는다', 'zh', '他的手風不错', 1);
  one('zh 정상 간체는 통과', 'zh', '他的手风不错，筹码很多', 0);
  one('zh-hant에 간체 筹码를 잡는다', 'zh-hant', '他的籌碼很多但这里有筹码', 3);  // 这·筹·码
  one('zh-hant 정상 번체는 통과', 'zh-hant', '他的籌碼很多，贏了這一手', 0);
  one('고유명사 台灣은 zh에서 면제', 'zh', '台灣的撲克室', 1); // 灣·臺는 면제 · 撲은 걸린다
  one('ja 정중체+읽점을 잡는다', 'ja', 'レートは跳ね上がります、高レートの卓では注意', 1);
  one('ja ますが、는 정상', 'ja', '上がりますが、注意が必要です。', 0);
  one('ja «» 혼입을 잡는다', 'ja', 'これは«ストラドル»です。', 2);
  one('ja 정상 조판은 통과', 'ja', 'これは「ストラドル」です。上がりますので注意。', 0);
  // ── 인용부호 정본 (2026-09-16 신설) ──
  one('zh 정본 “”는 통과', 'zh', '他说“希望”就跟了', 0);
  one('zh 「」 혼입을 잡는다', 'zh', '他说「希望」就跟了', 2);
  one('zh 산문 직선 "를 잡는다', 'zh', '他说"希望"就跟了', 2);
  one('zh HTML 속성의 직선은 구문이라 통과', 'zh', '<a href="/zh/blog/x" style="color:red">链接</a>', 0);
  one('zh 마크다운 링크 제목의 직선은 구문이라 통과', 'zh', '[文字](/zh/blog/x "thumb:/images/y.webp")', 0);
  one('🔴 링크 제목 안에 괄호가 있어도 통과(짝 맞는 괄호 마스크)', 'zh', '![图](/images/y.webp "按钮(密西西比)位的直线")', 0);
  one('zh 면제 = 세 로케일 동형 직선 3자리', 'zh', '安塔纳斯·"Tony G"·古加在新加坡夺冠', 0);
  one('zh 면제는 그 문자열에만 — 옆의 다른 인용은 잡는다', 'zh', '*"with the APT turning twenty in 2026"* 而他说"希望"', 2);
  one('zh-hant 정본 「」는 통과', 'zh-hant', '他說「希望」就跟了', 0);
  one('zh-hant “” 혼입을 잡는다', 'zh-hant', '他說“希望”就跟了', 2);
  one('ja 안쪽 겹침 『』는 통과', 'ja', '「なんで『分かった』んだ?」と聞かれました', 0);
  one('ja “” 혼입을 잡는다', 'ja', '彼は“クーラー”と言った', 2);
  one('ja 산문 직선 "를 잡는다', 'ja', '彼は"クーラー"と言った', 2);
  const meta = (name, loc, body, want) => { const got = inspectMeta(body, loc).length; t.push([name, got === want, want, got]); };
  meta('zh 메타 「」 혼입을 잡는다', 'zh', '  tldr: "「鱼（fish）」是黑话",', 2);
  meta('zh 메타 정본 “”는 통과', 'zh', '  tldr: "“鱼（fish）”是黑话",', 0);
  meta('zh-hant 메타 “” 혼입을 잡는다', 'zh-hant', '  seoTitle: "找不到魚，你就是魚——“魚”是什麼",', 2);
  let pass = 0;
  for (const [name, ok, want, got] of t) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name} — want ${want} got ${got}`); }
  console.log(`selftest ${pass}/${t.length}`);
  process.exit(pass === t.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const locales = (opt('locale') ?? Object.keys(RULES).join(',')).split(',');
  let total = 0, files = 0;
  const lines = [];
  for (const loc of locales) {
    const dir = path.join(LIB, `posts-${loc}`);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).sort()) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      const src = fs.readFileSync(path.join(dir, f), 'utf8');
      const c = contentOf(src);
      if (!c) continue;
      files++;
      const hits = [...inspectSource(c, loc), ...inspectMeta(metaOf(src), loc)];
      if (!hits.length) continue;
      total += hits.length;
      const byKind = new Map();
      for (const h of hits) byKind.set(h.kind, [...(byKind.get(h.kind) ?? []), h]);
      lines.push(`🔴 ${loc}/${f.replace(/\.ts$/, '')} — ${[...byKind].map(([k, v]) => `${k} ${v.length}`).join(' · ')}`);
      for (const [, v] of byKind) for (const h of v.slice(0, 4)) lines.push(`     「${h.ch}」  …${h.ctx}…`);
    }
  }
  console.log(`로케일 표기 위생 · ${locales.join(',')} · 파일 ${files} · 🔴 ${total}건`);
  for (const l of lines) console.log(l);
  console.log(`\n🪶 번체/간체 쌍 ${PAIRS.length}자 · 면제 = ${Object.entries(ALLOW).map(([k, v]) => `${k}:${v.join(',')}`).join(' / ')}`);
  console.log('🪶 면제를 늘릴 때는 «그 자리가 정말 고유명사인지» 원문 판정부터 — 면제는 게이트를 눈멀게 한다.');
  console.log(`🪶 인용부호 정본 = zh:“ ” / zh-hant·ja:「 」 · 직선 면제(쌍 단위) = ${Object.entries(STRAIGHT_ALLOW).map(([k, v]) => `${k}:${v.length}`).join(' / ')}`);
  console.log('🪶 한계(원리상): 구문 마스크는 마크다운 «이미지 제목»도 지운다 — 그 자리는 <figcaption>으로 독자에게 보인다(zh는 따옴표 0이라 무해).');
  if (has('strict') && total) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
