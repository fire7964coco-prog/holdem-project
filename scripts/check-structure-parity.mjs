/**
 * 구조 계수 대조 — EN 마스터에 있고 로케일에 «없는» 구조 요소를 센다.
 *
 * 왜 만들었나 (2026-09-10 · 대기열 9-ⓒ · zh 회차 7이 남긴 최대 발견)
 *   🔴 **`check:drift` ✅는 «날짜 진실»이지 «내용 진실»이 아니다.**
 *   `holdem-3bet`·`holdem-position-play`는 `masterUpdated`가 EN `updated`와 **이미 같았는데 내용이 안 와 있었다**
 *   (EN 08-20 `cd9ec3c0`·`1d0245c1`). 한 번 날짜를 올려 버리면 **diff 방식으로는 영영 못 찾는다.**
 *   → 처방 = 드리프트 판정에 «구조 계수»를 한 겹 더. 전 코퍼스가 1초 안이고, 날짜도 diff도 못 보는 자리를 본다.
 *   🔴 회차 6의 「미러가 EN을 처음으로 완전히 따라잡았다」는 선언은 이 계수를 안 돌린 상태의 선언이었다.
 *
 *   4로케일 실증(대기열 43-ⓕ): de/es/pt/id `holdem-3bet` 체크리스트 6번(19.5bb·SPR) 문장이 **통째로 부재**인데
 *   `masterUpdated`는 09-09였다. 「날짜 진실」이 「내용 진실」을 가린 실물이다.
 *
 * 무엇을 세나 (전부 «EN보다 적은 쪽»만 본다 — 많은 것은 현지 추가라 규율상 허용된다)
 *   link   내부링크 대상 slug **집합** (🔴 메모리 「번역 내부링크 = EN과 구조 동일」: 대상·개수까지 1:1)
 *   h2     ## 절 개수
 *   h3     ### 개수
 *   row    표 행 개수
 *   li     리스트 항목 개수
 *   img    이미지 개수
 *   faq    **Q. 문항 개수
 *
 * 판정
 *   🔴 핵심 7로케일(check:drift와 같은 CORE_LOCALES)의 결손
 *   🟠 꼬리 17로케일의 결손 — 보이되 막지 않는다(대기열 40 판정 ⓒ와 같은 2등급)
 *
 * 사용
 *   npm run check:structure
 *   npm run check:structure -- --locale=ja
 *   npm run check:structure -- --slug=holdem-3bet
 *   npm run check:structure -- --tail        꼬리 로케일까지 펼친다
 *   npm run check:structure -- --strict      🔴 있으면 exit 1
 *   npm run check:structure:selftest
 *
 * 한계(원리상): «개수는 같은데 내용이 다른» 자리는 못 본다. 번역이 표 행을 합치거나 나눈 자리도 결손으로 뜬다
 *   → 첫 실행은 전건 원문 판정(게이트 튜닝 규율). 의도적 편차는 `docs/locale-intentional-diffs.md`로.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { CORE_LOCALES } from './check-mirror-drift.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'lib');
const EN_DIR = path.join(LIB, 'posts-en');

const args = process.argv.slice(2);
const opt = (n) => (args.find((a) => a.startsWith(`--${n}=`)) ?? '').split('=')[1] || null;
const has = (n) => args.includes(`--${n}`);

const contentOf = (src) => { const m = src.match(/content:\s*`([^`]*)`/); return m ? m[1] : ''; };

/** 구조 요소를 센다 */
export function measure(content) {
  const links = new Set();
  // 🔴 썸네일 링크(제목 인자가 붙은 링크)도 내부링크다 — 허용하지 않으면
  //    ① 로케일이 «가지고 있는데 없다»고 잡히고 ② EN 자신의 썸네일 링크가 기준선에서 통째로 빠진다.
  //    2026-09-10 실측: zh-hant hand-rankings tiebreak 링크가 오탐 · EN kicker·probability는 미검사였다.
  for (const m of content.matchAll(/\]\((?:https?:\/\/(?:www\.)?holdemmaster\.com)?\/(?:[a-z-]{2,7}\/)?blog\/([a-z0-9-]+)(?:\s+"[^"]*")?\)/g)) links.add(m[1]);
  const count = (re) => (content.match(re) ?? []).length;
  return {
    link: links,
    h2: count(/^##\s+/gm),
    h3: count(/^###\s+/gm),
    row: count(/^\s*\|.*\|\s*$/gm),
    li: count(/^\s*(?:[-*]\s+|\d+\.\s+)/gm),
    img: count(/!\[[^\]]*\]\([^)]*\)/g),
    faq: count(/\*\*Q\./g),
    // 🔴 «FAQ 문항이 몇 개의 H2 절에 흩어져 있나» — 정상은 1이다.
    //    2026-09-10 실사고: 이식 스크립트가 Q/A 한 문항을 엉뚱한 H2 한가운데에 넣었는데
    //    faq를 파일 전역으로만 세는 바람에 «개수 달성»으로 통과했다(렌더는 깨진 채로).
    faqSections: (() => {
      const secs = new Set();
      let cur = '(머리말)';
      for (const ln of content.split('\n')) {
        if (/^##\s+/.test(ln)) cur = ln.trim();
        else if (/\*\*Q\./.test(ln)) secs.add(cur);
      }
      return secs.size;
    })(),
  };
}

/* ────────────────────────────────────────────────────────────────
 * 예외 등재 — 🔴 사유 없는 행 금지. 정본은 `docs/locale-intentional-diffs.md`이고
 * 여기엔 «그 판정 때문에 게이트가 매 회차 또 집는 자리»만 옮겨 적는다.
 * 등재하지 않으면 규율(「의도적 편차는 등재해 닫아라」)이 실제로는 닫히지 않는다.
 * ──────────────────────────────────────────────────────────────── */
const ALLOW = [
  {
    slug: 'wsop-2026-tournament-guide',
    locales: ['ja', 'zh', 'zh-hant', 'es'],
    kinds: ['h2', 'li', 'row', 'h3', 'faq'],
    reason:
      '2026-09-10 전건 원문 판정: 이 글은 로케일마다 «자기 시장으로 재저작»한 글이다 ' +
      '(EN 13 H2 · ja/zh/zh-hant 12 · es 16). ja=일본 브레이슬릿·ESTA·일시소득 / zh=중국 선수·EVUS / ' +
      'zh-hant=台港澳 여권별 문턱 / es=멕시코·스페인·페루 + Matrícula Consular. ' +
      '핵심 사실은 전 로케일이 보유한다 — 우승자 Jumalon · ESPN · 엔트리 9,208·251,899(es는 스페인어 포맷 9.208·251.899). ' +
      '🔴 개수를 EN에 맞추려고 절을 쪼개거나 합치지 마라. 정본 = docs/locale-intentional-diffs.md. ' +
      '🆕 2026-09-10 faq 추가: es FAQ 6문은 EN 7문과 «한 문항도 겹치지 않는다» — ' +
      'es = 멕시코 ESTA·영사관 신분증(matrícula consular)·스페인어로 플레이·최저가 경로 / EN = 우승자·시청·상금·미국 온라인 예선. ' +
      '개수를 맞추려고 EN 문항을 옮겨 오면 스페인어권 독자에게 쓸모없는 FAQ가 된다.',
  },
  {
    slug: 'holdem-tournament',
    locales: ['zh-hant'],
    kinds: ['li'],
    reason:
      '2026-09-10 전건 원문 판정: zh-hant는 「報名 3가지 방식」의 B·C를 «일부러 산문으로 압축»했고 ' +
      '대신 대만 전용 블록(立案的撲克協會 · 台北·台中·高雄)을 더했다. 내용은 다 있고 «형식»만 다르다 ' +
      '(zh 13 li ↔ zh-hant 6 li + 산문 2문단 + 대만 블록). 🔴 불릿으로 되돌리려고 대만 블록을 밀어내지 마라.',
  },
  {
    slug: 'apt-incheon-2026-guide',
    locales: ['ja'],
    kinds: ['li'],
    reason:
      '2026-09-10 전건 원문 판정: H2 개수는 EN과 같은데(15) 첫 절이 «일본 독자용으로 통째 교체»됐다 — ' +
      'EN 「Why Korea in 2026? (The Non-Poker Case)」(불릿 5) ↔ ja 「日本から行くのに必要なものは? — パスポートだけ」. ' +
      '결손이 아니라 시장 재저작이다. posting.mdc 「다국어 = 번역이 아니라 현지 재구성」.',
  },
  {
    slug: 'korea-poker-marathon-2026',
    locales: ['ja'],
    kinds: ['li'],
    reason:
      '2026-09-10 실측: li 합계 EN 52 ↔ ja 51로 한 절에서 1개 차이뿐이다(8 ↔ 7). ' +
      '이 글은 로케일마다 창구·세금·비자가 다른 재저작 글이라 불릿 하나의 병합은 결손으로 보지 않는다. ' +
      '🔴 다른 종류(faq·h2·link)는 면제가 아니다 — li만이다.',
  },
  {
    slug: 'holdem-probability',
    locales: ['de'],
    kinds: ['li'],
    reason:
      '2026-09-10 전건 원문 판정: EN 「How Rare Is a Royal Flush?」의 불릿 2개를 de는 «산문 + 인포그래픽 + note 블록»으로 썼다. ' +
      'H2 개수는 같고(둘 다 11) 수치도 같다 — 1 zu 649.740(5장) · 1 zu 30.940(리버까지) · 4가지 조합 대 1.302.540. ' +
      '🔴 불릿으로 되돌리려고 note 블록(로열 두 개가 «다른» 무늬면 스플릿이 아니라는 통념 반박)을 밀어내지 마라.',
  },
  {
    slug: 'holdem-hand-rankings',
    locales: ['zh-hant'],
    kinds: ['h2', 'row'],
    reason:
      '🔴 2026-09-09 헤드 판정(11)으로 «이미 닫힌» 자리다 — EN H2 2개(「How Do You Memorize Poker Hands Fast?」· ' +
      '「Are Poker Hand Rankings the Same in Every Game?」)는 zh-hant에 «일부러» 없다. ' +
      '근거 ① 2026-07 번역 시점부터 없던 구조 ② DFS 「牌型記憶」 계열 4종 볼륨 null ' +
      '③ 둘째 H2 내용은 이미 본문에 흡수돼 있다(短牌→同花贏葫蘆 L259 · 奧馬哈 剛好用兩張 FAQ · 「90%」 L234). ' +
      'row −11은 그 두 절에 딸린 표 2개다(5행 + 6행) — 같은 뿌리. ' +
      '🔴🔴 **2026-09-10에 이 판정을 모르고 두 절을 다시 넣었다가 되돌렸다.** ' +
      '게이트 출력을 보고 움직이기 전에 docs/locale-intentional-diffs.md를 먼저 grep해라 — ' +
      '게이트는 그 파일을 읽지 않는다(그래서 이 ALLOW가 있다).',
  },
  {
    slug: 'holdem-rake',
    locales: ['de', 'pt'],
    kinds: ['faq'],
    reason:
      'EN FAQ 「Is taking a rake illegal?」를 «일부러» 만들지 않는다 — 합법성은 «주제일 때만» 다룬다는 상시 규율. ' +
      '레이크 글에서 합법성은 곁다리다. de는 2026-08-12에 같은 취지로 닫혔고(그 자리를 자체 문항 ' +
      '「Warum nimmt der Cardroom überhaupt Rake?」로 채웠다), pt도 2026-09-10에 같은 판정으로 닫는다.',
  },
    {
    slug: 'holdem-probability',
    locales: ['ja', 'pt', 'zh', 'zh-hant', 'de', 'id', 'es', 'ar'],
    kinds: ['faq'],
    reason:
      '🔴 EN FAQ 「쿼드 에이스 확률(1 in 7,700)」은 «전 핵심 로케일이 미보유»다 — 실측: zh 無 · zh-hant 無 · ja 無 · pt 無. ' +
      '한 로케일의 변덕이 아니라 일관된 정본이므로 만들지 않는다(2026-09-09 헤드 판정 10을 2026-09-10에 전 로케일로 확장). ' +
      '🪶 수치 자체는 참이다(C(48,3)/C(52,7) = 1/7,735 ≈ 1 in 7,700 · 「57% 경로」 = 12/21 = 57.1%) — ' +
      '되살릴 때 재계산하지 말고 이 값을 쓰되, 되살리려면 헤드 판정을 다시 받아라. ' +
      '🔴 「플랍 적중 32%」는 이 항목에 «해당하지 않는다» — 2026-09-10 헤드 판정으로 ' +
      'zh-hant에는 넣었다(거울쌍 zh가 이미 보유 = 09-09와 다른 축) · ja·pt는 09-09대로 닫힌 채다.',
  },
  {
    slug: 'holdem-game-order',
    locales: ['zh-hant'],
    kinds: ['faq'],
    reason:
      '🔴 2026-09-07 헤드 승인으로 «이미 닫힌» 자리다 — EN FAQ 「Who shows their cards first at showdown?」를 ' +
      'zh-hant에 «일부러» 넣지 않는다. 같은 회차에서 「攤牌」(DFS 170) 태그를 game-order → holdem-showdown-rules로 ' +
      '이관했고, showdown-rules가 H2 「攤牌時誰要先亮牌？」로 이 축의 주인이다. 태그를 넘기며 FAQ를 새로 만들면 자기모순. ' +
      '정본 = docs/locale-intentional-diffs.md(2026-09-07 행).',
  },
];
const allowHit = (loc, slug, kind) =>
  ALLOW.find((a) => a.slug === slug && a.locales.includes(loc) && a.kinds.includes(kind));

const NUMERIC = ['h2', 'h3', 'row', 'li', 'img', 'faq'];

/** EN 대비 결손을 낸다(양수 = EN에 있고 로케일에 없는 만큼) */
export function deficit(en, loc) {
  const out = {};
  for (const k of NUMERIC) { const d = en[k] - loc[k]; if (d > 0) out[k] = d; }
  const missing = [...en.link].filter((s) => !loc.link.has(s));
  if (missing.length) out.link = missing;
  return out;
}

function selftest() {
  const cases = [];
  const en = measure('## A\n### B\n| a | b |\n| - | - |\n- x\n- y\n![i](/images/a.webp)\n**Q. 질문**\n[링크](/blog/holdem-3bet)');
  cases.push(['EN 계수', en.h2 === 1 && en.h3 === 1 && en.row === 2 && en.li === 2 && en.img === 1 && en.faq === 1 && en.link.has('holdem-3bet')]);
  const same = measure('## A\n### B\n| a | b |\n| - | - |\n- x\n- y\n![i](/images/a.webp)\n**Q. 質問**\n[리ンク](/ja/blog/holdem-3bet)');
  cases.push(['로케일 접두 경로도 같은 slug로 본다', Object.keys(deficit(en, same)).length === 0]);
  const short = measure('## A\n| a | b |\n- x\n');
  const d = deficit(en, short);
  cases.push(['결손을 센다', d.h3 === 1 && d.row === 1 && d.li === 1 && d.img === 1 && d.faq === 1]);
  cases.push(['빠진 링크를 목록으로 낸다', Array.isArray(d.link) && d.link[0] === 'holdem-3bet']);
  const more = measure('## A\n## A2\n### B\n### B2\n| a | b |\n| - | - |\n- x\n- y\n- z\n![i](/images/a.webp)\n**Q. Q**\n[l](/blog/holdem-3bet)');
  cases.push(['EN보다 많은 것은 결손이 아니다(현지 추가 허용)', Object.keys(deficit(en, more)).length === 0]);
  const abs = measure('[l](https://www.holdemmaster.com/blog/holdem-outs)');
  cases.push(['절대 URL 내부링크도 센다', abs.link.has('holdem-outs')]);
  const ext = measure('[l](https://example.com/blog/holdem-outs)');
  cases.push(['외부 도메인은 내부링크가 아니다', !ext.link.has('holdem-outs')]);
  const thumb = measure('[l](/zh-hant/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp")');
  cases.push(['🔴 썸네일 링크도 내부링크로 센다', thumb.link.has('holdem-tiebreak-rules')]);
  const thumbEn = measure('[l](/en/blog/holdem-kicker "thumb:/images/holdem-kicker-hero.webp")');
  cases.push(['🔴 EN 기준선에도 썸네일 링크가 들어간다', thumbEn.link.has('holdem-kicker')]);
  const titled = measure('[l](/blog/holdem-outs "그냥 제목")');
  cases.push(['thumb가 아닌 제목이 붙어도 센다', titled.link.has('holdem-outs')]);
  const imgOnly = measure('![i](/images/holdem-outs.webp)');
  cases.push(['이미지 경로는 내부링크가 아니다', !imgOnly.link.has('holdem-outs')]);
  cases.push(['예외 등재는 «로케일+슬러그+종류»가 다 맞을 때만 걸린다', !!allowHit('ja', 'wsop-2026-tournament-guide', 'h2')]);
  cases.push(['등재 안 된 로케일은 예외가 아니다', !allowHit('de', 'wsop-2026-tournament-guide', 'h2')]);
  cases.push(['등재 안 된 종류는 예외가 아니다', !allowHit('ja', 'wsop-2026-tournament-guide', 'img')]);
  cases.push(['등재된 종류는 예외다(faq)', !!allowHit('es', 'wsop-2026-tournament-guide', 'faq')]);
  cases.push(['모든 예외 행에 사유가 있다', ALLOW.every((a) => typeof a.reason === 'string' && a.reason.length > 30)]);
  cases.push(['FAQ가 한 절에 모여 있으면 1', measure('## FAQ\n**Q. a**\n**Q. b**').faqSections === 1]);
  cases.push(['🔴 FAQ가 다른 절에도 박히면 2', measure('## 기억법\n**Q. a**\n## FAQ\n**Q. b**').faqSections === 2]);
  cases.push(['FAQ가 없으면 0', measure('## A\n본문').faqSections === 0]);
  const owned2 = new Set(['holdem-3bet']);
  cases.push(['보유한 글로의 링크 결손은 남는다', ['holdem-3bet'].filter((x) => owned2.has(x)).length === 1]);
  cases.push(['🔴 보유하지 않은 글로의 링크는 결손이 아니다', ['holdem-icm'].filter((x) => owned2.has(x)).length === 0]);
  let pass = 0;
  for (const [name, ok] of cases) { if (ok) pass++; console.log(`${ok ? '✅' : '❌'} ${name}`); }
  console.log(`selftest ${pass}/${cases.length}`);
  process.exit(pass === cases.length ? 0 : 1);
}

function main() {
  if (has('selftest')) return selftest();
  const onlyLoc = opt('locale');
  const onlySlug = opt('slug');

  const enMap = new Map();
  for (const f of fs.readdirSync(EN_DIR)) {
    if (!f.endsWith('.ts') || f === 'index.ts') continue;
    const c = contentOf(fs.readFileSync(path.join(EN_DIR, f), 'utf8'));
    if (c) enMap.set(f.replace(/\.ts$/, ''), measure(c));
  }

  const locales = fs.readdirSync(LIB)
    .filter((d) => d.startsWith('posts-') && d !== 'posts-en' && fs.statSync(path.join(LIB, d)).isDirectory())
    .map((d) => d.replace('posts-', ''))
    .filter((l) => !onlyLoc || l === onlyLoc);

  let core = 0, tail = 0, checked = 0;

  let allowed = 0;
  const stray = [];
  let unbuildable = 0;
  const unbuildableLoc = new Map();
  const coreLines = [], tailByLoc = new Map();
  for (const loc of locales) {
    const isCore = CORE_LOCALES.includes(loc);
    if (!isCore && !has('tail') && !onlyLoc) { /* 계수는 하되 목록은 접는다 */ }
    const dir = path.join(LIB, `posts-${loc}`);
    // 🔴 «그 로케일에 실제로 있는 글» 집합 — 없는 글로는 링크를 걸 수 없다(걸면 404가 색인에 남는다).
    //    2026-09-10 실측: ar은 8편뿐이라 링크 결손 32건 중 31건이 «대상 글이 없어서» 구조적으로 불가능했다.
    //    그걸 결손으로 세면 게이트가 «고칠 수 없는 일»을 매 회차 지적한다.
    const owned = new Set(fs.readdirSync(dir).filter((x) => x.endsWith('.ts') && x !== 'index.ts').map((x) => x.replace(/.ts$/, '')));
    for (const f of fs.readdirSync(dir).sort()) {
      if (!f.endsWith('.ts') || f === 'index.ts') continue;
      const slug = f.replace(/\.ts$/, '');
      if (onlySlug && slug !== onlySlug) continue;
      const en = enMap.get(slug);
      if (!en) continue;
      const c = contentOf(fs.readFileSync(path.join(dir, f), 'utf8'));
      if (!c) continue;
      checked++;
      let d = deficit(en, measure(c));
      if (Array.isArray(d.link)) {
        const impossible = d.link.filter((t) => !owned.has(t));
        if (impossible.length) { unbuildable += impossible.length; unbuildableLoc.set(loc, (unbuildableLoc.get(loc) ?? 0) + impossible.length); }
        const real = d.link.filter((t) => owned.has(t));
        if (real.length) d.link = real; else delete d.link;
      }
      const onlyKind = opt('only');
      if (onlyKind) d = Object.fromEntries(Object.entries(d).filter(([k]) => k === onlyKind));
      // 예외 등재분은 «지적»에서 뺀다(대신 마지막에 건수를 노출한다 — 조용히 사라지면 안 된다)
      for (const k of Object.keys(d)) if (allowHit(loc, slug, k)) { delete d[k]; allowed++; }
      if (measure(c).faqSections > 1) stray.push(`  🔴 ${loc}/${slug} — FAQ 문항이 FAQ 절 밖에도 있다(이식 사고 유형)`);
      const keys = Object.keys(d);
      if (!keys.length) continue;
      const parts = keys.map((k) => (k === 'link' ? `link ${d.link.length}개(${d.link.slice(0, 3).join(',')}${d.link.length > 3 ? '…' : ''})` : `${k} −${d[k]}`));
      const line = `  ${isCore ? '🔴' : '🟠'} ${loc}/${slug} — ${parts.join(' · ')}`;
      if (isCore) { core++; coreLines.push(line); }
      else { tail++; tailByLoc.set(loc, [...(tailByLoc.get(loc) ?? []), line]); }
    }
  }

  console.log(`구조 계수 대조 · EN 마스터 ${enMap.size}편 · 대조 ${checked}편 · 🔴 핵심 결손 ${core}편 · 🟠 꼬리 결손 ${tail}편`);
  console.log(`   핵심 = ${CORE_LOCALES.join(' ')} · 세는 것 = link(대상 slug 집합) h2 h3 row li img faq`);
  console.log(`   예외 등재로 제외 ${allowed}건 — 사유는 scripts/check-structure-parity.mjs의 ALLOW와 docs/locale-intentional-diffs.md`);
  if (unbuildable) console.log(`   🪶 «대상 글이 그 로케일에 없어서» 걸 수 없는 링크 ${unbuildable}건 제외 — ${[...unbuildableLoc].sort((a,b)=>b[1]-a[1]).map(([l,n])=>`${l} ${n}`).join(' · ')}`);
  if (stray.length) { console.log('\n🔴 FAQ 문항이 FAQ 절 밖에 있다(이식 사고):'); stray.forEach((l) => console.log(l)); }
  if (coreLines.length) { console.log('\n🔴 EN에 있고 로케일에 없는 구조:'); coreLines.forEach((l) => console.log(l)); }
  if (tail) {
    console.log('\n🟠 꼬리 17로케일:');
    if (has('tail') || onlyLoc) for (const [, ls] of tailByLoc) ls.forEach((l) => console.log(l));
    else console.log('   ' + [...tailByLoc].map(([l, ls]) => `${l} ${ls.length}`).join(' · ') + '   (`-- --tail`로 펼침)');
  }
  console.log('\n🪶 «개수는 같은데 내용이 다른» 자리는 원리상 못 본다 · 표 행을 합치거나 나눈 번역도 결손으로 뜬다 → 전건 원문 판정.');
  console.log('🪶 의도적 편차는 `docs/locale-intentional-diffs.md`에 등재하고 닫아라(다음 회차가 또 집는다).');
  if (has('strict') && core) process.exit(1);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) main();
