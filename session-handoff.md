# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-07-02 (데스크탑 Cursor 세션)

---

## 🎯 지금 프로젝트가 어느 단계인가

**개발은 완료, 지금은 "SEO 콘텐츠 품질 강화 + 포스트 추가" 운영 단계.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인): 전부 완성·배포됨 → 더 만들 것 없음
- 핵심 작업: **구글 1페이지 달성**을 위한 콘텐츠 품질 향상 + 신규 포스트 발행

### 현재 발행 현황
- **한국어 블로그: 51개** (`lib/posts.ts` LEGACY 21개 + `lib/posts/` NEW 30개)
- **영어 블로그: 20개** (`lib/posts-en/`)
- **필라 포스트 발행 현황**: holdem-hand-rankings(P1) ✅ · holdem-probability(P?) ✅ · holdem-rules(P2) ✅

---

## 🔥 이번 세션(2026-07-02) 작업 내용

### 1. 관련 글 카드 UI 개선 (`tournament-guide-post.tsx`)
- 관련 글 카드에 실제 히어로 이미지 썸네일 표시 (`next/image`)
- 이미지 없는 포스트는 포커카드 SVG 폴백 (`components/card-thumb.tsx`)
- `CardThumb` 공유 컴포넌트 분리 → `blog-index-client.tsx` 중복 코드 140줄 제거
- trailing slash 버그 수정 (관련 글 링크 `/blog/slug/` → `/blog/slug`)

### 2. WSOP 2025 · APT 제주 2026 히어로 이미지 생성 및 추가
- `wsop-2025-tournament-guide-hero.webp` 생성 (77.8KB) → `lib/posts.ts` image 필드 추가
- `apt-jeju-classic-2026-guide-hero.webp` 생성 (79.1KB) → `lib/posts.ts` image 필드 추가
- 이제 토너먼트 카테고리 관련 글 3장 모두 실제 사진 썸네일로 표시

---

## 🚀 다음 세션 할 일 (우선순위 순)

### 1순위 — 즉시 할 것
- **GSC에서 `/blog/holdem-rules` URL 수동 색인 요청** (아직 확인 안 된 경우)
  - 구글 서치콘솔 → URL 검사 → "색인 생성 요청"

### 2순위 — 영어 포스트 SEO 강화
- GSC 기준: `/en/blog/texas-holdem-rules-for-beginners` **노출 1,140 / 순위 54.7위** → 가장 임팩트 큰 개선 대상
- 영어 포스트 20개 중 노출 많고 순위 낮은 것들 순서대로 리라이팅

### 3순위 — 이미지 없는 토너먼트 포스트 이미지 추가
- 아직 `image` 필드 없는 토너먼트 포스트들:
  - `holdem-tournament-tax-guide`, `holdem-bubble-strategy`, `holdem-tournament-schedule-check`
  - `holdem-tournament-how-to-enter`, `holdem-tournament-buy-in-cost`, `icm-poker-meaning`
  - `holdem-tournament-vs-cash-game` (lib/posts/ 소속)
- 이미지 생성 → webp 변환(quality 50, 60~80KB 이하) → image 필드 추가

### 4순위 — 필라 포스트 추가 발행
- P4~P11 필라 중 블로그 없는 것들 순차 발행
- 참고: `canvases/content-roadmap.canvas.tsx`에 전체 목록 있음

### 5순위 — 기존 글 검수
- trailing slash 전수 점검 (`/blog/x/` → `/blog/x`)
- 1KB 플레이스홀더 이미지 찾아서 교체
- 포커 핸드 예시 사실오류 검산 (CLAUDE.md §13 참조)

---

## ⚠️ 절대 건드리지 말 것

- `app/blog/[slug]/` (한국어 블로그 라우트), `app/[locale]/blog/[slug]/` (다국어)
- `public/sitemap.xml` (빌드 시 자동 생성)
- 기존 포스트 slug (변경 시 SEO 초기화)
- `next.config.mjs`의 `trailingSlash: false` 설정
- `lib/posts.ts`의 기존 LEGACY 포스트 데이터

---

## 🔧 인프라 설정

- **Supabase**: holdemmaster-community (Seoul Free Plan)
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`
- **Realtime**: `chat_messages`만 활성화
- **Vercel 환경변수**:
  - `NEXT_PUBLIC_SUPABASE_URL` ✅
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` ✅
  - `GEMINI_API_KEY` ⚠️ **Vercel 미설정 → 프로덕션 번역 비활성**

---

## 🗒️ 핵심 파일 위치

| 용도 | 경로 |
|------|------|
| 한국어 LEGACY 포스트 | `lib/posts.ts` |
| 한국어 NEW 포스트 | `lib/posts/[slug].ts` + `lib/posts/index.ts` |
| 영어 포스트 | `lib/posts-en/[slug].ts` |
| 포스팅 규칙 | `.cursor/rules/posting.mdc` |
| 이미지·콘텐츠 규칙 | `.cursor/rules/content.mdc` |
| 기술·성능 규칙 | `.cursor/rules/tech.mdc` |
| 커뮤니티 클라이언트 | `app/community/community-client.tsx` |
| DB 스키마 | `supabase/schema.sql` |
| 콘텐츠 로드맵 캔버스 | `canvases/content-roadmap.canvas.tsx` |

---

## 💡 확정된 설계 결정사항

- SEO 경로(`/blog`, `/en/blog` 등): 절대 변경 안 함
- DB/Auth: Supabase / 번역: Gemini Flash + translations 캐싱
- 커뮤니티 메인 = 실시간 채팅 (피드 + 채팅 + 이벤트)
- 비로그인: 읽기 가능, 작성/전송은 로그인 필요
- 이미지: webp 전용, 실사 사진만 (인포그래픽·일러스트 금지)
- 앱 도구 페이지(`/hands`, `/rules/texas-holdem`)는 noindex → 블로그 필라가 키워드 단독 타깃

---

## 🟡 남은 보안 권장 항목 (시급하지 않음)

- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지
