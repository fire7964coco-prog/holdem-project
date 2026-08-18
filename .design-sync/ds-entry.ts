/**
 * design-sync 용 «합성 엔트리».
 *
 * 이 레포는 컴포넌트 라이브러리가 아니라서 `dist/` 도, 배럴도 없다(`private: true`, `exports` 없음).
 * 컨버터는 패키지의 published 엔트리를 esbuild 로 묶어 `window.HoldemMaster.*` 로 올리는데,
 * 우리에겐 그 엔트리가 없으므로 여기서 만든다. 이 파일 자체가 «출하물» 은 아니다 —
 * 실제 컴포넌트 코드는 `components/` 그대로이고, 여기서는 이름만 붙여 다시 내보낸다.
 *
 * 🔴 default export 를 named 로 승격하는 것이 이 파일의 두 번째 역할이다.
 *    우리 컴포넌트는 default/named 가 반반이라(예: CardThumb=default, TableOfContents=named)
 *    그대로 두면 번들의 export 목록에 이름이 안 잡힌다.
 *
 * 🔴 여기 넣는 기준은 «정적 렌더가 되는가» 다 — `next/link`·`next/image`·`next/navigation`·
 *    `@supabase`·`@/lib/*` 에 의존하는 22개는 라우터/이미지 컨텍스트가 없으면 어차피 빈 화면이라
 *    뺐다. 넣고 싶으면 `cfg.provider` 로 셰임을 배선해야 한다(미시도). 근거는 NOTES.md.
 */

export { BrushDefs } from '../components/brush-defs';
export { default as CardThumb } from '../components/card-thumb';
export { LegalPage, LegalSection } from '../components/legal-page';
export { default as OmahaTableDiagram } from '../components/OmahaTableDiagram';
export { PokerOddsCalculator } from '../components/poker-odds-calculator';
export { default as PokerTableDiagram } from '../components/PokerTableDiagram';
export { default as RankingTable } from '../components/ranking-table';
export { default as ReadingProgressBar } from '../components/reading-progress-bar';
export { default as SevenCardStudDiagram } from '../components/SevenCardStudDiagram';
export { TableOfContents } from '../components/table-of-contents';
