# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음

---

## 📅 마지막 작업일
2026-06-23 (오후 세션)

---

## ✅ 완료한 작업 (Phase 0 → Phase 6 완료)

- **Phase 0**: `/community` 라우트 신설 + Supabase 클라이언트 설정
- **Phase 1**: 이메일 회원가입/로그인/로그아웃 + 피드 + 글쓰기 + 좋아요 (Production 배포 완료)
- **Phase 2**: 포스트카드 컴포넌트 분리, 글 상세/댓글, 다국어 피드+번역, Explore/프로필 탭
- **Phase 3**: 커뮤니티 UI 다국어 전환(LABELS), Blog→Community CTA, 이벤트 탭 구현
- **Phase 4**: 홈 피드 통합 — `holdemmaster.com/` 커뮤니티 피드로 전면 교체
  - `/login`, `/post/[id]`, `/auth/callback` 라우트 신설 / `/community/*` → 301 리다이렉트
- **Phase 5**: 홈 단순화 + 다국어 피드 12개 언어 신설 + 보안 패치
  - 홈/로그인/글상세에서 옛 헤더·푸터 숨김 (`site-chrome.tsx` `isFeedAppRoute`)
  - 블로그 글 → 티저 카드로 피드 자동 노출
  - 12개 언어 `/en`, `/ja`, `/zh`, `/es`, `/de`, `/pt`, `/ar`, `/id`, `/ms`, `/vi`, `/hi`, `/tr` 로케일 피드 신설
  - 이벤트 탭 12개 언어 현지화 (`EVENT_LABELS`)
  - **보안 패치** (커밋 `45dddca`):
    - `/api/community/translate` 로그인 필수 + 텍스트 3,000자 제한 + target 화이트리스트
    - `/auth/callback` Open Redirect 차단 (`safeNext` 검증)
    - `submitEventEntry` 번호 1~45 서버 검증 + `is_eligible` 하드코딩 제거
    - `createPost` 5,000자 / `addComment` 1,000자 / 제목 100자 길이 제한
- **Phase 6**: 실시간 채팅 전환
  - 탐색(Explore) 탭 → 채팅(Chat) 탭으로 교체 (13개 언어 LABELS 포함)
  - `app/community/chat-tab.tsx` 신규: Supabase Realtime 글로벌 단일 룸
  - `supabase/schema.sql` — `chat_messages` 테이블 + RLS 추가 (섹션 7)
  - 빌드 성공 확인 ✅

---

## 🚀 다음 세션 할 일

### Phase 6 완료 ✅ (배포 완료)
- `chat_messages` 테이블 Supabase SQL 실행 완료
- Supabase Realtime Publications → `chat_messages` 토글 ON 완료
- git push → Vercel 배포 완료 (커밋: `8d6beb2`)

### 이번 세션에서 한 작업
- CSR 전환: `app/page.tsx`, `app/[locale]/page.tsx` → `force-dynamic` 제거, 데이터 패칭 클라이언트로 이동
- 커뮤니티 UI 가독성 개선 (다크 테마 유지):
  - `post-card.tsx` — 텍스트 토큰 신규 정의 (`TEXT_PRIMARY`, `TEXT_BODY`, `TEXT_SECONDARY`, `TEXT_MUTED`, `DIVIDER`, `SURFACE`)
  - `CARD` 배경 `#0f1a2e` → `#162032` (한 톤 업)
  - `TEXT_PRIMARY` `#f0e8c8` → `#f8f2e2`, `TEXT_BODY` `#e4dcc4` → `#ede5cf`
  - `chat-tab.tsx`, `event-tab.tsx`, `community-client.tsx`, `post-detail-client.tsx` → 토큰 일괄 적용
  - `layout.tsx` → Noto Sans KR / DM Sans weight 500·600 추가
  - 타 언어 포스트 opacity 흐림 제거
- 로컬 dev 서버 실행 중 (port 3001, port 3000 이미 점유) — **배포 아직 안 함**
- GSC 분석: `/en/blog/texas-holdem-rules-for-beginners` 3개월 659 노출·순위 53.7·클릭 0
  - 영어 포스트는 `lib/posts-en/` 에 총 **20개** 존재
  - 영어 전략: 1페이지 진입이 목표 → 기존 페이지 강화 → 롱테일 공략 순서

### 다음 세션 할 일 (우선순위 순)
1. **영어 SEO 강화** — `/en/blog/texas-holdem-rules-for-beginners` 경쟁 분석 후 컨텐츠 보강
2. **가독성 개선 배포** — 로컬 확인 완료 후 `git push`
3. **디자인 재검토** — 크림색 editorial 디자인 (나중에)
4. **블로그 포스트 추가** — 현재 29개(KR) + 20개(EN), 목표 50개

---

## 남은 보안 권장 항목 (다음 기회에)

- 🟡 **RLS: `profiles.badge` UPDATE 차단** — Supabase 대시보드에서 DB 트리거 추가 필요
- 🟡 **Rate limiting** — 글/댓글 분당 횟수 제한 (Upstash Redis 연동)
- 🟡 **로그인 브루트포스 방지** — Supabase 대시보드 Rate Limits 강화 or Cloudflare Turnstile

---

## ⚠️ 주의사항 (절대 건드리지 말 것)

- `app/blog/[slug]/` — 한국어 블로그 라우트
- `app/en/blog/[slug]/`, `app/ja/blog/[slug]/` 등 다국어 블로그 라우트
- `public/sitemap.xml` — 자동 생성되므로 수동 수정 금지
- 기존 포스트 29개 slug

---

## 🔧 인프라 설정 (기억할 것)

- **Supabase 조직**: HoldemMaster (Free Plan, Seoul 리전)
- **프로젝트**: holdemmaster-community
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co` ← 오타 주의 (idikicm + oo)
- **Vercel 환경변수** (설정 완료): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Gemini API 키**: `.env.local`에 설정 완료. ⚠️ Vercel에는 아직 미설정 → 번역 동작 안 함
  - Vercel → Settings → Environment Variables → `GEMINI_API_KEY` 추가 후 Redeploy 필요
- **이메일 확인(Confirm email)**: Supabase에서 OFF (가입 즉시 로그인)

---

## 💡 확정된 설계 결정사항

- 기존 /blog, /en/blog 등 SEO 경로는 절대 건드리지 않음
- DB/Auth: **Supabase** (PostgreSQL + Auth)
- 번역: **Gemini Flash** + translations 테이블 캐싱, 포커 용어 원어 유지
- 어드민 포스팅: language 태그, 내 언어만 노출
- 커뮤니티 포스팅 → **실시간 채팅으로 전환 예정**
- 비로그인: 채팅 읽기 가능, 메시지 전송은 로그인 필요
- 이벤트 리워드: 기프트콘(3개→5천원/4개→1만원/5~6개→5만원)

## 🗒️ 참고 파일 위치

- 커뮤니티 클라이언트: `app/community/community-client.tsx`
- 이벤트 탭: `app/community/event-tab.tsx`
- 포스트카드: `app/community/post-card.tsx`
- 이벤트 설정: `lib/event-config.ts`
- 번역 API: `app/api/community/translate/route.ts`
- DB 스키마: `supabase/schema.sql`
- 디자인 레퍼런스: `C:\Users\하봄\Downloads\cursor-discussion-v1\` (★ 8종)
