---
name: new-post
description: 새 한국어 SEO 블로그 포스트 1편을 발행한다. "새 포스트 써줘", "OO 주제로 글 발행", 신규 slug 생성부터 이미지·내부링크·빌드·배포까지. HoldemMaster 신규 발행 절차(6단계).
---

# new-post — 신규 SEO 포스트 발행 절차

시작 전 반드시 `.cursor/rules/posting.mdc`(통합 포스팅 마스터 규칙)를 읽는다. 발행 전 **구글 SERP Top10 + PAA(People Also Ask) 조사** → 검색자가 실제로 치는 표현을 H2/FAQ에 반영(롱테일 6~8개 클러스터링).

## Step 1 — 파일 생성 `lib/posts/[slug].ts`

```ts
import { BlogPost } from '../types';
const post: BlogPost = {
  slug: 'holdem-example',           // 케밥, 전 언어 동일. 절대 변경 금지
  title: '제목 40자 이하',
  seoTitle: '호기심 훅 — 핵심키워드 2~3개',   // ~32자 (§8·§17)
  description: '120~160자 메타',              // 160자 초과 금지
  tldr: '...',
  category: 'strategy',
  tags: ['태그1','태그2'],
  publishedAt: 'YYYY-MM-DD',
  readTime: 8,
  image: '/images/holdem-example-hero.webp',
  imageAlt: '구체적 상황 묘사(키워드 나열 금지)',
  content: `[마크다운 본문]`,
};
export default post;
```

- **본문 필수**: 실제 경험담(1인칭·구체 숫자/고유명사) — AI 백과사전식 금지(§11-8). 필라를 첫 내부링크로 연결.
- **핸드 예시가 있으면 §13 베스트5 검산 필수** (review-post 스킬 §1 참조 — 눈대중 금지).
- 재사용 컴포넌트(`:::readnext`·`:::compare`·`:::steps`·`:::stat` 등)는 `blog-post-client.tsx`의 디렉티브 활용. 리스트 항목 줄바꿈은 `<br/>`([[post-readability-line-breaks]]).

## Step 2 — index 등록

`lib/posts/index.ts`의 `NEW_POSTS` 배열 **앞에** import 추가.

## Step 3 — 이미지 (§9)

- 경로 `public/images/[slug]-hero.webp` / 1200×675 / webp quality 65 / **≤60KB**(복잡 ≤80KB)
- 히어로 `priority={true}` 필수 / alt 구체적
- 인포그래픽이면 §9-1 가드레일(텍스트 최소·스펠링 육안검수·온브랜드 골드/그린·§13 정확) + 커밋 전 렌더 확인([[infographic-images-allowed]])
- 본문 이미지 = 가독성 장치([[images-for-readability]]), 클러스터 중복 금지([[cluster-posts-unique-images]])

## Step 4 — 내부링크

- 새 글 본문에 관련 기존 포스트 링크 **최소 3개** (첫 링크는 필라)
- 기존 관련 글에 새 글로 **역링크** 추가
- 가장 연관된 글은 인라인 미니썸네일 + FAQ앞 `:::readnext` 카드([[internal-link-thumbnail-readnext]])
- 링크 끝 `/` 금지(trailingSlash:false → 301)

## Step 5 — 빌드 & 배포

```
npm run build       # 성공 + sitemap의 "N blog posts" 확인
git add . && git commit -F commit-msg.txt && git push
```

## Step 6 — 기록

- `WORKLOG.md` 최상단에 날짜·작업·**post 총 수**
- `session-handoff.md` 갱신
- 임시 스크립트(`*.mjs`·`commit-msg.txt`) 삭제

## 발행 현황 참고
authoritative 수치는 `npm run build` 출력의 "N blog posts". 목표=한국어 50편. LEGACY(`lib/posts.ts`)는 구조/slug 변경 금지(오타·사실수정만).
