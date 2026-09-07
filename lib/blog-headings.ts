/**
 * 목차용 헤딩 유틸 — 클라이언트(TocList)도 쓰므로 렌더러와 **분리된 모듈**로 둔다.
 * 한 파일에 두면 extractHeadings 하나 쓰려다 renderMarkdown 499줄이 번들에 딸려온다
 * (트리셰이킹에 기대지 말 것). 함수 본문은 blog-post-client.tsx에서 그대로 옮긴 것이다.
 */

/**
 * 🔴 2026-09-08 수리 — 옛 규칙 `[^\w\s가-힣]`은 **`\w`가 `[A-Za-z0-9_]`뿐**이라
 * 가나·한자·키릴·아랍·히브리·타이·데바나가리·벵골 문자를 **통째로 삭제**했다.
 * `가-힣`만 예외로 들어가 있어 ko만 무사했고 나머지는 id가 빈 문자열이 됐다.
 *   "リンプとは何か?" -> ""   ·   "3ベットとは?" -> "3"   ·   "什麼是跛入" -> ""
 * 실측(빌드 산출물 596페이지 전수) = **222페이지 결함 · 빈 id 1,743 · 중복 id 1,803**.
 * 결과 셋 ① 목차 링크가 `href="#"`라 눌러도 맨 위로 튄다 ② 빈·중복 id = 무효 HTML
 * ③ 구글이 패시지 랭킹에 쓰는 프래그먼트 앵커가 통째로 없다.
 *
 * 🔴 **라틴 문자의 «강세 부호 탈락»은 일부러 그대로 뒀다.** `é`·`á`·`ı`·`ş`는 지금도 지운다.
 * 이유 = 그 자리는 **고장난 적이 없다**(라틴 15개 로케일 실측 빈 id 0). 살리면 이미 색인된
 * 앵커 수백 개가 «개선»을 명분으로 바뀐다. 이 수리의 범위는 «죽은 앵커를 살리는 것»이지
 * «살아 있는 앵커를 다듬는 것»이 아니다. 그래서 **비라틴 문자만** 되살린다.
 * → 검증: 전 코퍼스 헤딩 대조에서 ko·en·es·de·pt·id·fr·it·pl·ro·sw·fil·ms·vi·tr **변경 0**.
 */
const KEEPABLE = /[\p{L}\p{N}\p{M}]/u;
const KEEP_SCRIPTS =
  /[\p{scx=Han}\p{scx=Hiragana}\p{scx=Katakana}\p{scx=Hangul}\p{scx=Arabic}\p{scx=Cyrillic}\p{scx=Hebrew}\p{scx=Bengali}\p{scx=Devanagari}\p{scx=Thai}]/u;

export function slugify(text: string): string {
  return text
    // 옛 규칙이 지우던 문자 중 «글자이면서 위 문자체계에 속한 것»만 되살린다.
    // 🪶 `scx`(Script_Extensions)를 쓰는 이유 = 장음부 「ー」(U+30FC)는 Script=Common 이라
    //    `\p{Script=Katakana}` 로는 안 잡힌다(헤딩에 617회 쓰인다). 반대로 「・」(U+30FB)는
    //    scx 에 Katakana 가 들어 있지만 General_Category 가 Po 라 KEEPABLE 에서 걸러진다.
    .replace(/[^\w\s가-힣]/gu, (ch) => (KEEPABLE.test(ch) && KEEP_SCRIPTS.test(ch) ? ch : ''))
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
}

/** H2·H3 를 문서 순서로 잡는다 — 렌더러와 목차가 **같은 순서**를 보게 하는 단일 출처. */
export const HEADING_RE = /^(#{2,3}) (.+)$/gm;

/**
 * 같은 문서 안에서 id 충돌을 막는 슬러그 발급기.
 * 🔴 **문서 하나당 한 번 만들어 문서 순서대로 호출해야 한다** — 렌더러와 `extractHeadings` 가
 * 같은 순서로 호출해야 목차 링크와 실제 id 가 일치한다(그래서 렌더러도 H2·H3 를 **한 패스**로 돈다).
 * 🪶 접미는 2번째부터 붙는다(`-2`·`-3`) — 첫 번째는 접미가 없어야 **기존 앵커가 보존된다**.
 * 실측: 새 규칙 적용 후 남는 충돌은 전 코퍼스 **4자리뿐**(tr 3 · ru 1)이고
 * ko·en·es·de·pt·id 는 0 이라 이 발급기는 그 로케일들에서 **동작상 no-op** 이다.
 */
export function createHeadingSlugger(): (text: string) => string {
  const used = new Map<string, number>();
  return (text: string): string => {
    // 문장부호만으로 된 헤딩이 빈 id 를 만들지 않도록 최후 보루를 둔다(현재 코퍼스 해당 0건).
    const base = slugify(text) || 'section';
    const n = (used.get(base) ?? 0) + 1;
    used.set(base, n);
    return n === 1 ? base : `${base}-${n}`;
  };
}

/** 목차: H2(##)만 노출 — 핵심 요약·FAQ Q·소제목(###) 제외 (모바일 LCP·가독성) */
export function extractHeadings(content: string): { id: string; text: string; level: number }[] {
  const slug = createHeadingSlugger();
  // 🔴 H3 도 «발급기에는» 먹인다 — 렌더러가 H2·H3 를 한 패스로 돌기 때문에
  //    번호를 맞추려면 목차 쪽도 같은 순서로 소비해야 한다. 반환에서만 H2 를 고른다.
  return [...content.matchAll(HEADING_RE)]
    .map((m) => ({ id: slug(m[2]), text: m[2].trim(), level: m[1].length }))
    .filter((h) => h.level === 2)
    .filter((h) => !/이 글 핵심 요약/.test(h.text));
}
