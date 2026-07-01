# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-07-01 (데스크탑 Cursor 세션)

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

## 🔥 이번 세션(2026-07-01) 작업 내용

### 1. P2 필라 포스트 발행 (`holdem-rules`)
- 18분 분량, 이미지 4개, FAQ 6개, 내부링크 6개
- 번 카드(Burn Card) 설명 + 포지션 중요성 추가
- 히어로 이미지: 딜러버튼·SB·BB 위치·행동순서 인포그래픽으로 교체 (54KB)
- "홀덤 룰" SERP Top6 경쟁 분석 → 콘텐츠 품질 우세, 도메인 권위만 부족

### 2. SEO 구조 개선 — 앱 페이지 카니발라이제이션 해소
- `/rules/texas-holdem` → **noindex** (블로그와 100% 키워드 겹침)
- `/hands` → **noindex** (`/blog/holdem-hand-rankings`와 겹침)
- `/rules` → 메타 추가, 텍사스 홀덤 내용 차별화, 모든 링크 → `/blog/holdem-rules`로 교체
- trailing slash 버그 수정 (`/blog/holdem-hand-rankings/` → `/blog/holdem-hand-rankings`)

### 앱 페이지 색인 현황 (최신)
| 페이지 | 구글 색인 | 비고 |
|--------|----------|------|
| `/rules` | ✅ 색인 | "포커 게임 종류 허브", 384 노출/27.6위 |
| `/rules/omaha` | ✅ 색인 | 96 노출/18위, 유지 |
| `/rules/seven-card-stud` | ✅ 색인 | 유지 |
| `/rules/texas-holdem` | ❌ noindex | `/blog/holdem-rules`로 역할 이전 |
| `/hands` | ❌ noindex | `/blog/holdem-hand-rankings`로 역할 이전 |

---

## 🚀 다음 세션 할 일 (우선순위 순)

### 1순위 — 즉시 할 것
- **GSC에서 `/blog/holdem-rules` URL 수동 색인 요청** (오늘 발행, 아직 크롤 안 됨)
  - 구글 서치콘솔 → URL 검사 → "색인 생성 요청"

### 2순위 — 영어 포스트 SEO 강화
- GSC 기준: `/en/blog/texas-holdem-rules-for-beginners` **노출 1,140 / 순위 54.7위** → 가장 임팩트 큰 개선 대상
- 영어 포스트 20개 중 노출 많고 순위 낮은 것들 순서대로 리라이팅

### 3순위 — 필라 포스트 추가 발행
- P3: 홀덤 확률 (pillar 미발행 또는 보강 필요 확인)
- P4~P11 필라 중 블로그 없는 것들 순차 발행
- 참고: `canvases/content-roadmap.canvas.tsx`에 전체 목록 있음

### 4순위 — 기존 글 검수
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
