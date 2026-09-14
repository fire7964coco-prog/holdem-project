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
 *   link   내부링크 대상 slug **집합** — 🔴 **마크다운 본문 링크만**(카드·readnext는 로케일이 큐레이션한다 · measure 주석)
 *   linkn  같은 대상에 거는 링크 **개수** — 🔴 세 형식 전부(마크다운 + 생 `<a href>` + `:::readnext` 카드 · 2026-09-13 신설)
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
  /**
   * 🔴 **집합만으로는 «같은 대상에 거는 링크가 한 개 줄어든 것»을 못 본다** (2026-09-13 · queue Q7-b · Q5b-5).
   *    Q5-b 실증: EN `holdem-probability` FAQ에 `/blog/holdem-pot-odds` 링크를 신설하고 7로케일에 전파했는데
   *    **es만 빠졌다.** 그런데 es 본문에는 이미 같은 slug 링크가 있어서 **집합이 안 변했다** →
   *    네 렌즈가 전부 잡은 자리를 게이트는 **0건**으로 통과시켰다.
   *    그래서 대상 slug별 «개수»도 같이 센다(`linkCounts`). 집합 결손은 `link`, 개수 결손은 `linkn`이다.
   *    🪶 커밋된 코퍼스엔 그 실례가 남아 있지 않다(같은 회차가 고쳤다) — 셀프테스트로 재현한다.
   */
  const linkCounts = new Map();
  // 🔴 썸네일 링크(제목 인자가 붙은 링크)도 내부링크다 — 허용하지 않으면
  //    ① 로케일이 «가지고 있는데 없다»고 잡히고 ② EN 자신의 썸네일 링크가 기준선에서 통째로 빠진다.
  //    2026-09-10 실측: zh-hant hand-rankings tiebreak 링크가 오탐 · EN kicker·probability는 미검사였다.
  /**
   * 🔴 **내부링크는 세 형식이다 — 마크다운만 세면 3분의 1을 못 본다** (2026-09-13 · queue Q7-b · 렌즈 2 B-1).
   *    실측(EN): 마크다운 `](…)` **481** · 생 `<a href>` **162** · `:::readnext` 카드 줄 **113**.
   *    즉 EN 내부링크의 **약 36%**가 `link`·`linkn` 양쪽에 보이지 않았다 — 메모리 규율
   *    「번역 내부링크 = 대상·개수·Related/readnext 카드·thumb까지 EN 1:1」이 부르는 자리인데 계수 대상이 아니었다.
   *    🔴 세 패턴을 같은 `linkCounts`에 합산한다. 형식을 바꿔 쓴 로케일이 «유령 결손»으로 뜨지 않게 하려면
   *    **형식별로 나눠 세지 마라** — 합계가 판정 단위다.
   */
  const LINK_PATTERNS = [
    /\]\((?:https?:\/\/(?:www\.)?holdemmaster\.com)?\/(?:[a-z-]{2,7}\/)?blog\/([a-z0-9-]+)(?:\s+"[^"]*")?\)/g,
    /<a\s[^>]*href="(?:https?:\/\/(?:www\.)?holdemmaster\.com)?\/(?:[a-z-]{2,7}\/)?blog\/([a-z0-9-]+)"/g,
    /^\/(?:[a-z-]{2,7}\/)?blog\/([a-z0-9-]+)\s*\|/gm,
  ];
  /**
   * 🔴 **집합(`link`)은 마크다운 본문 링크만, 개수(`linkn`)는 세 형식 전부.** 첫 실행 판정이 그렇게 갈랐다.
   *    세 형식을 집합에도 넣자 🔴 핵심 결손이 **0 → 12편(전부 zh-hant)**으로 튀었는데, 원문을 열어 보니
   *    **«관련 글 카드»는 로케일이 스스로 고른다**: `holdem-cooler` 카드 4장이 EN = fish·tiebreak·straddle·pot-odds ↔
   *    zh-hant = glossary·tiebreak·hand-rankings·probability로 **개수는 같고 대상만 다르다.**
   *    카드·readnext를 «대상 1:1»로 요구하면 그 큐레이션을 전부 결함으로 찍는다 → 집합에서는 뺀다.
   *    🔴 그래도 **개수 축에는 넣는다** — 렌즈 2 실측대로 EN 링크의 36%가 그 두 형식이고,
   *    「카드 블록이 통째로 빠진」 진짜 결함(`zh-hant/texas-holdem-rules-for-beginners` 6장 → 0장)은 개수로 드러난다.
   */
  /**
   * 🔴🔴 **«개수»를 한 축에 몰면 카드 큐레이션이 그 축을 오염시킨다 — 축을 둘로 갈랐다**
   *    (2026-09-14 · queue Q6-a 전건 판정). 바로 위 주석이 스스로 적었듯 **카드·readnext는 대상을 로케일이 고르는 자리**인데
   *    Q7-b는 그것을 «개수» 축에 넣었다. 그래서 개수 축이 큐레이션 차이를 결손으로 찍었다 — 실측:
   *    `wsop-2026-tournament-guide`의 `holdem-icm 3→1`은 **EN이 카드·readnext에 icm을, es·ja·zh는 같은 자리에**
   *    **지역 대회 가이드**(apt-incheon·ept-barcelona)**를 골랐을 뿐**이고 카드 앵커 «장수»는 EN 4 ↔ 셋 다 4로 같다.
   *    ✅ 처방 = **`linkn`은 본문 마크다운만**(큐레이션이 없는 자리) · **카드·readnext는 «장수»(`cardn`)로만**(대상 무관).
   *    Q7-b가 잡으려던 진짜 결함(`zh-hant/texas-holdem-rules-for-beginners` 카드 6장 → 0장)은 `cardn`이 그대로 잡는다.
   */
  let cardn = 0;
  const cardRawT = [], cardRnT = [];
  const body = (t) => { links.add(t); linkCounts.set(t, (linkCounts.get(t) ?? 0) + 1); };
  for (const [i, re] of LINK_PATTERNS.entries()) {
    for (const m of content.matchAll(re)) {
      if (i === 0) { body(m[1]); continue; }
      /**
       * 🔴 **카드인지 아닌지는 «HTML 형식»이 아니라 «역할»로 가른다** (2026-09-14 Q6-a 렌즈 1 C-8).
       *    실측: 전 코퍼스 생 `<a>` 내부링크 **1,559개가 전부 `display:block`**(카드 앵커)이고 산문 인라인 `<a>`는 **0개**다.
       *    그 가정이 코드에 없으면, 누가 산문에 `<a href>`를 하나 쓰는 순간 그 링크가 조용히 «카드 큐레이션»으로
       *    재분류돼 `linkn` 축에서 사라진다. 지금 박아 두면 **비용 0**이다(현재 예외 0건).
       */
      if (i === 1) {
        // 🪶 정규식은 href까지만 먹으므로 «태그 전체»를 다시 잘라 본다(style은 href 뒤에 온다).
        const tag = content.slice(m.index, content.indexOf('>', m.index) + 1);
        if (!/display\s*:\s*block/.test(tag)) { body(m[1]); continue; }
      }
      cardn += 1;
      (i === 1 ? cardRawT : cardRnT).push(m[1]);
    }
  }
  const count = (re) => (content.match(re) ?? []).length;
  return {
    link: links,
    linkCounts,
    cardn,
    cardRaw: cardRawT.length,
    cardRn: cardRnT.length,
    cardRawT,
    cardRnT,
    cardTargets: [...cardRawT, ...cardRnT],
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
  /**
   * 🔴 zh-hant 링크 정책 = «대상당 대체로 1회 + 대상 수를 늘린다» (2026-09-14 queue Q6-a 전건 원문 판정).
   *    아래 두 편은 **대상 수가 EN과 같아** 상쇄 규칙에 안 걸리는데, 원문을 열면 기전은 같다 —
   *    EN이 같은 대상을 인트로·본문·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다.
   *    대응 문단은 **다 있다**(전건 대조: tiebreak zh-hant L55·L263·L277 ↔ EN L51·L175·L236·L250 ·
   *    flush-vs-straight zh-hant L151 ↔ EN L100·L137 · marathon zh-hant L281 ↔ EN L261·L517).
   */
  {
    slug: 'holdem-bubble',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-icm 3→1', 'holdem-when-to-fold 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L24(icm 인트로)·L247(when-to-fold 마무리) ↔ EN L23·L55·L216 / L103·L216.',
  },
  {
    slug: 'holdem-drawing-odds',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-outs 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L251(마무리) ↔ EN L21(인트로 썸네일)·L232.',
  },
  {
    slug: 'holdem-equity',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-implied-odds 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L94(썸네일 링크) ↔ EN L88·L236.',
  },
  {
    slug: 'holdem-implied-odds',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-drawing-odds 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L143(썸네일 링크) ↔ EN L130·L228.',
  },
  {
    slug: 'holdem-reading-the-board',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-hand-rankings 3→2'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L197·L343 ↔ EN L42·L176·L290.',
  },
  {
    slug: 'holdem-strategy',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-limping 2→1', 'holdem-betting-actions 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정 — **zh-hant 링크 정책**: EN이 같은 대상을 인트로·표·FAQ·마무리에서 2~4회 다시 거는 자리를 zh-hant는 1~3회만 건다. 대응 «문단»은 다 있고 링크만 없다. 코퍼스 실측: zh-hant 링크 총계 771(EN 756) · 대상 수 432(EN 378) = 반복을 줄이고 대상을 늘린 것이다. 🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라. 🪶 `spots`에 적힌 «그 자리»만 면제다 — 새 자리가 생기면 게이트가 다시 잡는다(정본 = docs/harden-queue-진행.md §1-Q6-a).' +
      ' 대조: zh-hant L52(결정 표)·L133 ↔ EN L48·L97 / L49·L117.',
  },
  {
    slug: 'holdem-tournament',
    locales: ['zh-hant'],
    kinds: ['cardn'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정: zh-hant는 이 글의 카드 세트를 «대만 독자용으로 재선정»했다 — 카드 4장(starting-hands-chart · strategy · beginners · glossary) + readnext 2행이고, 그중 strategy·glossary는 **EN 카드에 없는 대상**이다(EN = tvc · shc · short-stack · beginners · blind-meaning · positions). 같은 글의 li 결손이 이미 «대만 전용 블록(立案的撲克協會·台北·台中·高雄)» 때문에 등재돼 있다 — 같은 뿌리다. 🔴 장수를 EN에 맞추려고 카드를 덧붙이면 그 큐레이션을 밀어낸다. 다시 열려면 헤드 판정을 받아라.',
  },
  {
    slug: 'holdem-tiebreak-rules',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['holdem-split-pot-rules 4→3', 'holdem-flush-vs-straight 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정: zh-hant는 같은 대상을 반복해 걸지 않는다(split-pot 4→3 · flush-vs-straight 2→1). ' +
      'EN이 다시 거는 문단은 zh-hant에도 있고 링크만 없다 — 대상 집합도 총계도 온전하다(코퍼스 실측: zh-hant 링크 771·대상 432 ↔ EN 756·378). ' +
      '🔴 개수를 맞추려고 같은 문단에 두 번째 링크를 심지 마라(정본 = docs/harden-queue-진행.md §1-Q6-a).',
  },
  {
    slug: 'korea-poker-marathon-2026',
    locales: ['zh-hant'],
    kinds: ['linkn'],
    spots: ['apt-incheon-2026-guide 2→1'],
    reason:
      '2026-09-14 queue Q6-a 전건 원문 판정: EN은 apt-incheon 가이드를 본문(L261)과 마무리(L517) 두 곳에서 걸고 ' +
      'zh-hant는 본문(L281 · 썸네일 링크)에서 한 번 건다. 같은 링크 정책이며 총계는 zh-hant가 더 많다(10 ↔ 8).',
  },
];
const allowHit = (loc, slug, kind) =>
  ALLOW.find((a) => a.slug === slug && a.locales.includes(loc) && a.kinds.includes(kind));

/**
 * 🔴 **목록형 지적(`linkn`)의 예외는 «판정한 자리»까지 적어야 한다** (2026-09-14 Q6-a 렌즈 1 C-10).
 *    `kinds: ['linkn']`만 적으면 그 파일의 개수 결손이 **영원히** 면제된다 — 내일 EN이 새 링크를 걸고
 *    로케일이 전파를 빠뜨려도 같은 면제가 삼킨다. 그래서 `spots`(지문)를 쓰면 **그 자리만** 빼고
 *    새 자리는 다시 뜨게 한다. `spots`가 없는 등재는 종전대로 전부 면제(스칼라 종류와 같은 동작).
 */
export function applyAllow(loc, slug, kind, value) {
  const hit = allowHit(loc, slug, kind);
  if (!hit) return { value, allowed: 0 };
  if (!Array.isArray(hit.spots) || !Array.isArray(value)) return { value: undefined, allowed: 1 };
  const left = value.filter((x) => !hit.spots.includes(x));
  return { value: left.length ? left : undefined, allowed: value.length - left.length ? 1 : 0 };
}

const NUMERIC = ['h2', 'h3', 'row', 'li', 'img', 'faq'];

/** EN 대비 결손을 낸다(양수 = EN에 있고 로케일에 없는 만큼) */
export function deficit(en, loc) {
  const out = {};
  for (const k of NUMERIC) { const d = en[k] - loc[k]; if (d > 0) out[k] = d; }
  const missing = [...en.link].filter((s) => !loc.link.has(s));
  if (missing.length) out.link = missing;
  /**
   * 🔴 링크 «개수» 결손 — 로케일이 그 대상을 **가지고는 있는데 EN보다 적게** 거는 자리.
   *    대상이 통째로 없는 것(`link`)과 겹쳐 두 번 보고하지 않는다 → `loc ≥ 1`인 slug만 본다.
   *    🪶 EN보다 «많이» 거는 것은 결손이 아니다(현지 추가 허용 — 다른 종류와 같은 규칙).
   */
  /**
   * 🔴 **`m === 0`은 집합 축(`link`)이 보고한다 — 여기서는 «가지고 있는데 적게 거는» 자리만 본다.**
   *    2026-09-14(Q6-a 렌즈 1 C-7 반영): 축을 가른 뒤 `linkCounts`에는 **본문 마크다운만** 들어가므로
   *    `keys(linkCounts) ≡ link`가 **항등**이고, 이 조건은 구조적으로 «`m === 0`이면 항상 continue»가 된다.
   *    🪶 그래서 2026-09-13 주석이 걱정한 «카드·readnext에만 있는 대상이 통째로 빠졌는데 두 축이 다 침묵»은
   *    이제 `linkn`이 아니라 **`cardn`(형식별 장수)**이 덮는다 — 그 자리가 정확히 형식별 결손으로 나온다.
   */
  const fewer = [];
  for (const [slug, n] of en.linkCounts ?? []) {
    const m = loc.linkCounts?.get(slug) ?? 0;
    if (n <= m) continue;
    if (m === 0) continue; // 집합 축(`link`)이 이미 보고한다 — 두 번 세지 않는다
    fewer.push(`${slug} ${n}→${m}`);
  }
  if (fewer.length) out.linkn = fewer;
  return out;
}

/**
 * 🔴 **파일 하나의 «최종 판정»** — `deficit()`(계수 차이)와 달리 «그 로케일이 실제로 할 수 있는 일인가»를 본다.
 *    main()에 인라인으로 있던 것을 뽑았다(2026-09-14 Q6-a 렌즈 1 B-5: 새 규칙 7개 분기의 셀프테스트 커버리지가 0이었고
 *    테스트 2개는 main()의 로직을 테스트 안에서 **재작성한 동어반복**이었다 — main()을 지워도 통과했다).
 *    반환 = { d(지적) · impossible(대상 미보유로 뺀 link 수) · offsetSpots(상쇄로 뺀 linkn 자리 수) }
 */
export function judge(en, m, owned) {
  const d = deficit(en, m);
  let impossible = 0, offsetSpots = 0;
  if (Array.isArray(d.link)) {
    const gone = d.link.filter((t) => !owned.has(t));
    impossible += gone.length;
    const real = d.link.filter((t) => owned.has(t));
    if (real.length) d.link = real; else delete d.link;
  }
  /**
   * 🔴 **`linkn`에도 «보유» 필터를 건다** — ar처럼 8편뿐인 로케일이 **없는 글로 링크를 안 걸었다는 이유로**
   *    결손으로 찍히던 자리(ar 4편 4자리 전건). 🪶 `linkn`은 `m >= 1`에서만 발화하므로 여기 걸리는 것은
   *    «로케일이 자기가 없는 글로 실제 링크를 걸고 있다» = 404 신호다(현재 코퍼스 0건 · `check:intl-links`가 본다).
   *    그래서 **«걸 수 없는 링크» 카운터에는 더하지 않는다**(단위가 다르다 — 렌즈 1 C-9).
   */
  if (Array.isArray(d.linkn)) {
    const target = (x) => x.replace(/ \d+→\d+$/, '');
    const real = d.linkn.filter((x) => owned.has(target(x)));
    if (real.length) d.linkn = real; else delete d.linkn;
  }
  /**
   * 🔴 **카드 결손은 «형식별로» 센다** (2026-09-14 Q6-a 렌즈 1 A-2·A-3·A-4 반영).
   *    기대치 = EN이 그 형식에 건 대상 중 **그 로케일이 보유한 것의 수**(못 만드는 카드는 요구하지 않는다).
   *    형식별이라 «블록이 통째로 없는» 자리는 그 형식 기대치가 통째로 결손으로 나온다 —
   *    별도 `blockGone` 분기가 필요 없다(전엔 그 분기가 «장수 결손이 이미 있을 때»만 평가돼 8편을 놓쳤다).
   *    🔴 **카드 결손에는 «상쇄»를 적용하지 않는다** — 축이 «장수»인데 «대상 수»로 면제하면 자기모순이고,
   *    실제로 `zh-hant/holdem-tournament`의 카드 3장 소실이 그렇게 무성 통과했다.
   */
  const expRaw = en.cardRawT.filter((t) => owned.has(t)).length;
  const expRn = en.cardRnT.filter((t) => owned.has(t)).length;
  const cardDef = Math.max(0, expRaw - m.cardRaw) + Math.max(0, expRn - m.cardRn);
  if (cardDef > 0) d.cardn = cardDef;
  /**
   * 🔴 **상쇄는 «본문 대상»으로만 판정한다** (렌즈 1 A-1 — 이 회차가 처음 넣었을 때의 구멍).
   *    처음엔 대상 union에 카드 대상을 넣었는데, **카드 대상은 로케일이 고르는 자리**라
   *    «카드를 다양하게 골랐다»는 이유만으로 본문 전파 누락이 지워졌다(실측 6편 8자리).
   *    본문 대상이 EN보다 많을 때만 «반복을 다른 대상으로 바꿨다»가 성립한다.
   */
  if (d.linkn && m.link.size > en.link.size) { offsetSpots = d.linkn.length; delete d.linkn; }
  return { d, impossible, offsetSpots };
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
  /**
   * 🔴 `spots`(자리 지문)는 **목록형 종류에만** 의미가 있다 — `cardn`·`h2` 같은 스칼라에 적으면
   *    `applyAllow`가 «자리만 면제»가 아니라 **통째로 면제**한다(2026-09-14 Q6-a 2차 교열 #26).
   *    그래서 표 자체를 검사한다: `spots`가 있는 행의 `kinds`는 `link`·`linkn`뿐이어야 한다.
   */
  cases.push(['🔴 spots 등재는 목록형(link·linkn)에만 붙는다', ALLOW.every((a) => !a.spots || a.kinds.every((k) => k === 'link' || k === 'linkn'))]);
  cases.push(['FAQ가 한 절에 모여 있으면 1', measure('## FAQ\n**Q. a**\n**Q. b**').faqSections === 1]);
  cases.push(['🔴 FAQ가 다른 절에도 박히면 2', measure('## 기억법\n**Q. a**\n## FAQ\n**Q. b**').faqSections === 2]);
  cases.push(['FAQ가 없으면 0', measure('## A\n본문').faqSections === 0]);
  const owned2 = new Set(['holdem-3bet']);
  cases.push(['보유한 글로의 링크 결손은 남는다', ['holdem-3bet'].filter((x) => owned2.has(x)).length === 1]);
  cases.push(['🔴 보유하지 않은 글로의 링크는 결손이 아니다', ['holdem-icm'].filter((x) => owned2.has(x)).length === 0]);
  // 🔴 linkn — Q5-b가 실증한 «집합은 그대로인데 개수가 줄어든» 자리 (queue Q7-b)
  const enTwice = measure('본문 [a](/blog/holdem-pot-odds) 그리고 FAQ [b](/blog/holdem-pot-odds)');
  const locOnce = measure('본문 [a](/es/blog/holdem-pot-odds)');
  const dn = deficit(enTwice, locOnce);
  cases.push(['🔴 같은 대상 링크가 2→1로 줄면 linkn이 잡는다', Array.isArray(dn.linkn) && dn.linkn[0] === 'holdem-pot-odds 2→1']);
  cases.push(['그때 link(집합) 쪽은 침묵한다(두 번 보고하지 않는다)', !dn.link]);
  const locNone = measure('링크가 하나도 없는 본문');
  const dn0 = deficit(enTwice, locNone);
  cases.push(['대상이 통째로 없으면 link만 잡고 linkn은 안 잡는다', !!dn0.link && !dn0.linkn]);
  const locMore = measure('[a](/ja/blog/holdem-pot-odds) [b](/ja/blog/holdem-pot-odds) [c](/ja/blog/holdem-pot-odds)');
  cases.push(['EN보다 많이 걸면 결손이 아니다', !deficit(enTwice, locMore).linkn]);
  // 🔴 세 형식 전부 센다(렌즈 2 B-1) — 마크다운만 세면 EN 내부링크의 36%가 안 보인다
  const rawA = measure('<a href="/en/blog/holdem-icm" style="display:block;padding:16px 18px">ICM</a>');
  cases.push(['생 <a href>는 cardn에만 들고 집합·linkn에는 안 든다(대상은 로케일이 고른다)', rawA.cardn === 1 && !rawA.link.has('holdem-icm') && !rawA.linkCounts.get('holdem-icm')]);
  const card = measure(':::readnext[Keep reading]\n/en/blog/holdem-outs | How to Count Outs | /images/holdem-outs-hero.webp\n:::');
  cases.push([':::readnext 카드 줄도 cardn에 든다', card.cardn === 1 && !card.link.has('holdem-outs')]);
  const mixed = measure('[a](/en/blog/holdem-icm) <a href="/en/blog/holdem-icm" style="display:block;padding:16px 18px">b</a>');
  cases.push(['형식별로 축이 갈린다 — 마크다운 1(linkn) + 카드 1(cardn)', mixed.linkCounts.get('holdem-icm') === 1 && mixed.cardn === 1]);
  const enCards = measure('<a href="/en/blog/holdem-outs" style="display:block;padding:16px 18px">1</a><a href="/en/blog/holdem-icm" style="display:block;padding:16px 18px">2</a>');
  cases.push(['🔴 카드 대상이 달라도 장수가 같으면 조용하다', measure('<a href="/ja/blog/holdem-fish" style="display:block;padding:16px 18px">1</a><a href="/ja/blog/holdem-rake" style="display:block;padding:16px 18px">2</a>').cardn === enCards.cardn]);
  cases.push(['🔴 카드 블록이 통째로 빠지면 장수 차이로 드러난다', enCards.cardn - measure('본문만').cardn === 2]);
  cases.push(['🔴 형식별 카드 계수를 따로 센다(블록 부재 판정용)', measure('<a href="/en/blog/a-x" style="display:block;padding:16px 18px">1</a>').cardRaw === 1 && measure('/en/blog/b-y | t | /images/x.webp').cardRn === 1]);
  /**
   * 🔴 **판정 로직(`judge`)의 분기를 직접 먹인다** — 2026-09-14 Q6-a 렌즈 1 B-5:
   *    이 자리에 있던 두 케이스는 main()의 로직을 테스트 안에서 재작성한 **동어반복**이라
   *    main()을 통째로 지워도 통과했다. 아래는 `judge()`를 실제로 호출한다.
   */
  const CARD = (href) => `<a href="${href}" style="display:block;padding:16px">x</a>`;
  const jEn = measure(`[a](/en/blog/holdem-pot-odds) [b](/en/blog/holdem-pot-odds)\n${CARD('/en/blog/holdem-icm')}\n/en/blog/holdem-icm | t | /i.webp`);
  const jLoc = measure(`[a](/ja/blog/holdem-pot-odds)\n${CARD('/ja/blog/holdem-fish')}\n/ja/blog/holdem-rake | t | /i.webp`);
  const own3 = new Set(['holdem-pot-odds', 'holdem-icm', 'holdem-fish', 'holdem-rake']);
  const j1 = judge(jEn, jLoc, own3);
  cases.push(['🔴 카드 대상만 늘어난 것은 상쇄가 아니다(본문 대상으로만 판정)', Array.isArray(j1.d.linkn) && j1.d.linkn[0] === 'holdem-pot-odds 2→1' && j1.offsetSpots === 0]);
  const jLoc2 = measure('[a](/ja/blog/holdem-pot-odds) [c](/ja/blog/holdem-outs)\n' + CARD('/ja/blog/holdem-icm') + '\n/ja/blog/holdem-icm | t | /i.webp');
  cases.push(['본문 대상이 EN보다 많으면 상쇄한다', !judge(jEn, jLoc2, new Set([...own3, 'holdem-outs'])).d.linkn]);
  const cEn = measure(CARD('/en/blog/holdem-icm') + CARD('/en/blog/holdem-fish') + '\n/en/blog/holdem-rake | t | /i.webp');
  const cLoc = measure(CARD('/ja/blog/holdem-outs'));
  const jc = judge(cEn, cLoc, new Set(['holdem-icm', 'holdem-fish', 'holdem-rake', 'holdem-outs']));
  cases.push(['🔴 형식별로 센다 — readnext 블록이 통째로 없으면 장수가 달라도 잡는다', jc.d.cardn === 2]);
  cases.push(['🔴 카드 결손은 대상 수로 면제되지 않는다', judge(cEn, measure(CARD('/ja/blog/a-1') + '\n[x](/ja/blog/b-2) [y](/ja/blog/c-3)'), new Set(['holdem-icm','holdem-fish','holdem-rake','a-1','b-2','c-3'])).d.cardn === 2]);
  cases.push(['🔴 못 만드는 카드는 기대치에서 깎는다(보유 0이면 결손 0)', !judge(cEn, measure('본문만'), new Set()).d.cardn]);
  cases.push(['🔴 개수 결손도 «보유하지 않은 대상»은 제외한다', !judge(measure('[a](/en/blog/holdem-icm) [b](/en/blog/holdem-icm)'), measure('[a](/ja/blog/holdem-icm)'), new Set()).d.linkn]);
  cases.push(['🔴 산문 인라인 <a>는 카드가 아니라 본문 링크다', measure('<a href="/en/blog/holdem-icm">x</a>').link.has('holdem-icm')]);
  cases.push(['🔴 spots 등재는 «그 자리»만 뺀다', applyAllow('zh-hant', 'holdem-bubble', 'linkn', ['holdem-icm 3→1', 'holdem-rake 9→1']).value?.[0] === 'holdem-rake 9→1']);
  const ext2 = measure('<a href="https://example.com/blog/holdem-icm">x</a>');
  cases.push(['외부 도메인 <a>는 내부링크가 아니다', !ext2.link.has('holdem-icm')]);
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
  const offsetFiles = new Set();
  let offsetSpots = 0;
  const unbuildableLoc = new Map();
  const coreLines = [], tailByLoc = new Map(), linknLines = [];
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
      const m = measure(c);
      const judged = judge(en, m, owned);
      let d = judged.d;
      if (judged.impossible) { unbuildable += judged.impossible; unbuildableLoc.set(loc, (unbuildableLoc.get(loc) ?? 0) + judged.impossible); }
      if (judged.offsetSpots) { offsetFiles.add(`${loc}/${slug}`); offsetSpots += judged.offsetSpots; }
      const onlyKind = opt('only');
      if (onlyKind) d = Object.fromEntries(Object.entries(d).filter(([k]) => k === onlyKind));
      // 예외 등재분은 «지적»에서 뺀다(대신 마지막에 건수를 노출한다 — 조용히 사라지면 안 된다)
      for (const k of Object.keys(d)) {
        const r = applyAllow(loc, slug, k, d[k]);
        if (r.allowed) allowed += r.allowed;
        if (r.value === undefined) delete d[k]; else d[k] = r.value;
      }
      if (m.faqSections > 1) stray.push(`  🔴 ${loc}/${slug} — FAQ 문항이 FAQ 절 밖에도 있다(이식 사고 유형)`);
      /**
       * 🔴 `linkn`은 **자리마다 판정이 갈리는 신호**라 «핵심 = 🔴» 규칙에서 뺀다 (2026-09-13 Q7-b).
       *    🔴🔴 **2026-09-14(Q6-a) 정정 — 「세 형식을 다 세니 94편·160자리·15로케일」은 «재현율»이 아니라 «정밀도 붕괴»였다.**
       *    당시 주석은 「첫 주사(마크다운만)의 19편 전부 zh-hant는 재현율이 낮은 그림」이라 적었는데, **그 판독이 오진이었다** —
       *    ⓐ 보유 필터 누락(ar 4편 5자리) ⓑ 카드·readnext 큐레이션 ⓒ 상쇄 미고려를 걷어내자 **첫 주사가 맞았다**(zh-hant 단독).
       *    지금 이 축이 내는 자리는 **본문 마크다운 링크의 «반복 횟수»뿐**이고, 카드 블록 부재는 `cardn`이 형식별로 낸다.
       *    → 자리별 원문 판정 전에는 🔴을 쓰지 않는다. 대신 **접지 않고 매 실행 전건 출력**한다.
       *    🪶 판정 정본 = `docs/harden-queue-진행.md` §1-Q6-a.
       */
      if (d.linkn) { linknLines.push(`  🟠 ${loc}/${slug} — ${d.linkn.length}자리: ${d.linkn.join(' · ')}`); delete d.linkn; }
      const keys = Object.keys(d);
      if (!keys.length) continue;
      const parts = keys.map((k) => (k === 'link' ? `link ${d.link.length}개(${d.link.slice(0, 3).join(',')}${d.link.length > 3 ? '…' : ''})`
        : `${k} −${d[k]}`));
      const line = `  ${isCore ? '🔴' : '🟠'} ${loc}/${slug} — ${parts.join(' · ')}`;
      if (isCore) { core++; coreLines.push(line); }
      else { tail++; tailByLoc.set(loc, [...(tailByLoc.get(loc) ?? []), line]); }
    }
  }

  console.log(`구조 계수 대조 · EN 마스터 ${enMap.size}편 · 대조 ${checked}편 · 🔴 핵심 결손 ${core}편 · 🟠 꼬리 결손 ${tail}편 · 🟠 링크 개수 결손 ${linknLines.length}편`);
  console.log(`   핵심 = ${CORE_LOCALES.join(' ')} · 세는 것 = link(본문 링크 대상 집합) linkn(같은 대상 본문 링크 «개수») cardn(카드·readnext «장수» · 대상 무관) h2 h3 row li img faq`);
  console.log(`   예외 등재로 제외 ${allowed}건 — 사유는 scripts/check-structure-parity.mjs의 ALLOW와 docs/locale-intentional-diffs.md`);
  if (offsetSpots) console.log(`   🪶 «반복 링크를 다른 대상으로 바꾼» 상쇄 ${offsetSpots}자리(${offsetFiles.size}편) 제외 — 그 편의 «본문 링크 대상 수»가 EN보다 많다(기전 ⓑ · 판정 = docs/harden-queue-진행.md §1-Q6-a)`);
  if (unbuildable) console.log(`   🪶 «대상 글이 그 로케일에 없어서» 걸 수 없는 링크 ${unbuildable}건 제외 — ${[...unbuildableLoc].sort((a,b)=>b[1]-a[1]).map(([l,n])=>`${l} ${n}`).join(' · ')}`);
  if (stray.length) { console.log('\n🔴 FAQ 문항이 FAQ 절 밖에 있다(이식 사고):'); stray.forEach((l) => console.log(l)); }
  if (coreLines.length) { console.log('\n🔴 EN에 있고 로케일에 없는 구조:'); coreLines.forEach((l) => console.log(l)); }
  if (linknLines.length) {
    console.log('\n🟠 링크 «개수» 결손 — 대상은 가지고 있는데 EN보다 적게 건다(자리별 원문 판정 필요):');
    linknLines.forEach((l) => console.log(l));
  }
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
