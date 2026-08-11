# 필라 슬러그 — 문서상 이름 vs 실제 라이브 슬러그

> CLAUDE.md §8에서 분리(2026-08-11). 내부링크 걸 때 이 표를 본다.
> 헷갈리면 추측 말고 `curl -sI https://www.holdemmaster.com/blog/<slug>`로 확인.

## 8. SEO 필수 규칙

### 제목·설명 작성 원칙
- **호기심·자극 훅 + 핵심 키워드** 하이브리드
- `seoTitle`: ~32자, `desc`: ~95자 (한국어 검색 결과 잘림 방지)
- 정보형 제목 금지: "OO 뜻 정리", "OO 완벽 정리"
- 좋은 예: `"매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이"`

### URL 규칙 (절대 변경 금지)
- 포스트: `/blog/[slug]` (끝에 `/` 없음)
- `next.config.mjs`에 `trailingSlash: false` 설정됨

### 11개 필라 슬러그 (변경 금지)
`holdem-hand-rankings` / `holdem-rules` / `holdem-probability` / `holdem-strategy` /
`holdem-starting-hands` / `holdem-tournament` / `holdem-pub-guide` / `holdem-glossary` /
`holdem-position-play` / `holdem-pot-odds` / `holdem-bluff-spot`

> 🔴 **위 목록 중 6개는 실제 발행 슬러그가 아니다** (2026-08-08 라이브 대조로 확인).
> 그대로 `/blog/<slug>`를 쓰면 **404**다. 링크를 걸 땐 아래 오른쪽을 쓸 것.
>
> | 문서에 적힌 이름 | 실제 라이브 슬러그 |
> |---|---|
> | `holdem-starting-hands` | `holdem-starting-hand-range` |
> | `holdem-position-play` | `position-is-everything-in-holdem` |
> | `holdem-pot-odds` | `holdem-pot-odds-calculation` |
> | `holdem-bluff-spot` | `bluffing-strategy-when-and-how` |
> | `holdem-tournament` | 단일 글 없음 — `holdem-tournament-how-to-enter` / `-buy-in-cost` / `-vs-cash-game` / `-tax-guide`로 나뉨 |
> | `holdem-glossary` | **미발행** (용어는 `icm-poker-meaning`·`holdem-range-meaning` 등 개별 글) |
>
> 나머지 5개(`hand-rankings`·`rules`·`probability`·`strategy`·`pub-guide`)는 목록 그대로 실재한다.
> 링크 대상이 헷갈리면 추측하지 말고 `curl -sI https://www.holdemmaster.com/blog/<slug>`로 확인하라.

### E-E-A-T 원칙
- 모든 포스트에 **실제 경험담** 필수 (AI 백과사전식 금지)
- 클러스터는 해당 필라를 첫 번째 내부링크로 연결

---
