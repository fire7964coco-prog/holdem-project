# CLAUDE.md — HoldemMaster (holdemmaster.com)

> Claude Code가 이 프로젝트를 처음 열 때 반드시 읽는 파일.
> 작업 전 `WORKLOG.md`와 `session-handoff.md`도 함께 확인할 것.

---

## 1. 프로젝트 개요

- **사이트**: holdemmaster.com — 한국어 메인 + 12개 언어 다국어 홀덤 정보 사이트
- **배포**: Vercel (git push → 자동 배포). 브랜치: `main`
- **목표**: 구글 1페이지 달성 / 블로그 포스트 50개 (현재 29개, 21개 남음)
- **두 개의 트랙이 공존**:
  1. **SEO 블로그 트랙** — 정적 포스트, 필라-클러스터, 다국어
  2. **커뮤니티 트랙** — Supabase 기반 실시간 채팅·피드·이벤트

---

## 2. 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js 14.2.18 (App Router, SSG) |
| 언어 | TypeScript |
| 스타일 | TailwindCSS v4 |
| 이미지 | next/image (webp only) |
| DB/Auth | Supabase (PostgreSQL + Auth, Seoul 리전) |
| 번역 | Gemini Flash API (`GEMINI_API_KEY`) |
| 패키지 | npm |
| 설정 파일 | `next.config.mjs` (확장자 `.mjs` 주의) |

---

## 3. 핵심 명령어

```bash
npm run build          # 빌드 + 사이트맵 자동 생성 (배포 전 필수)
npm run dev            # 로컬 개발 서버
npm run compress:images  # public/images 전체 webp 압축
git push               # Vercel 자동 배포 트리거
```

---

## 4. 디렉토리 구조 (핵심만)

```
Holdem_Project/
├── app/
│   ├── blog/[slug]/          # 한국어 블로그 (건드리지 말 것)
│   ├── [locale]/blog/[slug]/ # 다국어 블로그 (en/ja/zh/es/de/pt/ar/id/ms/vi/hi/tr)
│   ├── community/            # 커뮤니티 앱 (피드·채팅·이벤트)
│   │   ├── community-client.tsx
│   │   ├── chat-tab.tsx      # Supabase Realtime 채팅
│   │   ├── event-tab.tsx
│   │   └── post-card.tsx
│   ├── post/[id]/            # 커뮤니티 글 상세
│   ├── login/                # 로그인 (이메일 + Google OAuth)
│   └── auth/callback/        # OAuth 콜백
├── lib/
│   ├── posts.ts              # 구형 포스트 (수정 금지)
│   ├── posts/
│   │   ├── index.ts          # NEW_POSTS 배열 (새 포스트 import 추가 위치)
│   │   └── [slug].ts         # 개별 포스트 파일
│   ├── event-config.ts       # 이벤트 설정
│   ├── supabase/
│   │   ├── client.ts         # 브라우저용 Supabase 클라이언트
│   │   └── server.ts         # 서버 컴포넌트용
│   └── utils.ts
├── public/images/            # 모든 이미지 (flat, webp만)
├── supabase/schema.sql       # DB 전체 스키마 (테이블 7개)
├── WORKLOG.md                # 날짜별 작업 기록 (매 작업 후 업데이트)
├── session-handoff.md        # 세션 간 인수인계
└── CLAUDE.md                 # 이 파일
```

---

## 5. Supabase 인프라

- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`
- **테이블**: profiles / posts / comments / likes / event_entries / translations / chat_messages
- **RLS**: 전 테이블 활성화. 비로그인은 읽기만 허용.
- **Realtime**: `chat_messages` 테이블만 활성화 (Supabase 대시보드 Publications)
- **이메일 확인**: OFF (가입 즉시 로그인)
- **환경변수**: `.env.local` 참조. Vercel에도 동일하게 설정 필요.
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `GEMINI_API_KEY` (Vercel에 미설정 시 번역 기능 비활성)

---

## 6. SEO 블로그 포스트 추가 절차

### Step 1 — 파일 생성
`lib/posts/[slug].ts` 생성. 내용:

```ts
import { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'holdem-example',
  title: '제목 40자 이하',
  description: '120~160자 메타 description',
  category: 'strategy',
  tags: ['태그1', '태그2'],
  publishedAt: 'YYYY-MM-DD',
  readTime: 8,
  image: '/images/holdem-example-hero.webp',
  imageAlt: '구체적인 alt 텍스트 (키워드 나열 금지)',
  content: `[마크다운 본문]`,
};

export default post;
```

### Step 2 — index.ts에 import 추가
`lib/posts/index.ts`의 `NEW_POSTS` 배열 앞에 추가.

### Step 3 — 이미지
- 경로: `public/images/[slug]-hero.webp`
- 규격: 1200×675, webp quality 65, **60KB 이하**
- 히어로 이미지: `priority={true}` 필수

### Step 4 — 내부링크
- 새 포스트 본문에 관련 기존 포스트 링크 최소 3개
- 기존 관련 포스트에도 새 포스트로 역링크 추가

### Step 5 — 빌드 & 배포
```bash
npm run build  # 빌드 성공 + sitemap 갱신 확인
git add . && git commit -m "feat: 새 포스트 [slug]" && git push
```

### Step 6 — WORKLOG.md 최상단에 기록

---

## 7. 다국어 페이지 구조

### 지원 언어 (12개)
`en` / `ja` / `zh` / `es` / `de` / `pt` / `ar` / `id` / `ms` / `vi` / `hi` / `tr`

### 라우트 패턴
- 한국어 블로그: `/blog/[slug]/`
- 다국어 블로그: `/[locale]/blog/[slug]/`
- 다국어 커뮤니티 피드: `/[locale]/` (각 로케일 홈)

### 현지화 원칙
- **직역 금지** — 해당 언어권 포커 커뮤니티 실제 표현 사용
- 포커 전문 용어(`ICM`, `bubble`, `bankroll` 등)는 현지 검색 관습 우선
- `slug`는 모든 언어에서 동일하게 유지 (hreflang 보존)
- `seoTitle`/`desc`/`tldr`/H2/FAQ는 각 언어 SERP 기준으로 별도 작성

---

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

### E-E-A-T 원칙
- 모든 포스트에 **실제 경험담** 필수 (AI 백과사전식 금지)
- 클러스터는 해당 필라를 첫 번째 내부링크로 연결

---

## 9. 이미지 규칙

| 항목 | 기준 |
|------|------|
| 형식 | webp 전용 (png/jpg 절대 금지) |
| 용량 | 파일당 ≤ 60KB (복잡한 이미지 ≤ 80KB) |
| 해상도 | 1200×675 |
| quality | 65 (기본), 80KB 초과 시 60 |
| alt | 구체적 상황 묘사 필수 (키워드 나열 금지) |
| 히어로 | `priority={true}` 필수 |

---

## 10. 커뮤니티 기능 현황 (Phase 6 완료)

| 기능 | 상태 |
|------|------|
| 이메일 회원가입/로그인 | ✅ |
| Google OAuth | ✅ |
| 피드 (글쓰기·좋아요·댓글) | ✅ |
| 다국어 피드 (12개 언어) | ✅ |
| Gemini 자동 번역 (캐싱) | ✅ (Vercel GEMINI_API_KEY 미설정 시 비활성) |
| 이벤트 탭 (번호 6개 선택) | ✅ |
| 실시간 채팅 (Supabase Realtime) | ✅ |
| `/community/*` → 홈 리다이렉트 | ✅ |

### 보안 패치 완료 항목
- 번역 API: 로그인 필수 + 3,000자 제한 + target 화이트리스트
- `/auth/callback`: Open Redirect 차단
- 글 5,000자 / 댓글 1,000자 / 제목 100자 길이 제한

### 남은 보안 권장 항목
- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지

---

## 11. 절대 금지 사항

1. 기존 포스트 29개 `slug` 변경 (SEO 초기화)
2. `lib/posts.ts` 임의 수정/삭제
3. `app/blog/[slug]/` 및 다국어 블로그 라우트 구조 변경
4. `public/sitemap.xml` 수동 수정 (빌드 시 자동 생성)
5. 이미지를 `.jpg` / `.png`로 저장
6. URL 끝의 `/` 제거
7. meta description 160자 초과
8. 경험담 없는 AI 백과사전식 포스트 작성
9. 히어로 이미지에 `priority` 누락
10. `lib/posts.ts`와 `lib/posts/index.ts` 동시 확인 없이 포스트 목록 수정

---

## 12. 작업 완료 후 체크리스트

- [ ] `npm run build` 성공 확인
- [ ] `public/sitemap.xml`에 새 slug 반영 확인
- [ ] `git push` → Vercel 배포 완료 확인
- [ ] `WORKLOG.md` 최상단에 날짜·작업내용·포스트 총 수 기록
- [ ] `session-handoff.md` 다음 세션 할 일 업데이트
