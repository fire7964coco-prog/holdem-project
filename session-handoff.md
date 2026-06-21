# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음

---

## 📅 마지막 작업일
2026-06-21

---

## ✅ 완료한 작업 (Phase 0 → Phase 2)
- **Phase 0**: `/community` 라우트 신설 + Supabase 클라이언트 설정 (client/server/middleware)
- **Phase 1**: 이메일 회원가입/로그인/로그아웃 + 피드(어드민+커뮤니티 혼합) + 글쓰기 + 좋아요 (main 머지 + Production 배포 완료)
- **Phase 2** (feature/community 브랜치 — 아직 main 미머지):
  - 피드 카드 카드형 레이아웃 재구성 → `app/community/post-card.tsx` 공통 컴포넌트 분리
  - 글 상세 페이지 `/community/post/[id]` + 댓글 작성/표시/삭제
  - 다국어 피드: 자국어 밝게 / 타언어 흐리게 + 번역 버튼(원문↔번역 토글)
  - Gemini 번역 API 라우트 `/api/community/translate` (gemini-2.5-flash, thinking off, translations 캐싱) — 로컬 번역 테스트 통과
  - Explore 탭: [전략 포스팅]/[커뮤니티] 서브탭 필터
  - 프로필 탭: 내 글 목록 + 받은 좋아요/댓글 수 + 뱃지
  - 번역 캐시 쓰기용 service role 클라이언트 `lib/supabase/admin.ts` (키 없으면 캐싱만 생략)
- DB 스키마 6개 테이블(profiles, posts, comments, likes, event_entries, translations) + 트리거 + RLS 적용 완료
- 기존 /blog·SEO 경로 영향 없음 (middleware는 /community/* 한정), 빌드 통과

---

## ⚠️ Phase 2 배포 전 할 일 (중요)
1. Vercel 환경변수 `GEMINI_API_KEY` 추가 (필수 — 번역 동작) → 추가 후 Redeploy
2. (선택) Vercel `SUPABASE_SERVICE_ROLE_KEY` 추가 → 번역 결과 translations 캐싱 (없으면 매번 API 호출, 동작은 함)
   - Supabase 대시보드 → Settings → API → service_role secret
3. feature/community → main 머지 → Vercel 자동 배포 → /community 동작 확인

---

## 🔧 인프라 설정 (중요 — 기억할 것)
- **Supabase 조직**: HoldemMaster (Free Plan, Seoul 리전)
- **프로젝트**: holdemmaster-community
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`  ← 오타 주의 (idikicm + oo)
- **Vercel 환경변수** (Production 설정 완료): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - ⚠️ NEXT_PUBLIC 변수는 빌드 시점에 박힘 → 값 바꾸면 반드시 Redeploy
- **이메일 확인(Confirm email)**: Supabase에서 이미 OFF (가입 즉시 로그인됨)
- **로컬**: `.env.local`에 동일 값 + `GEMINI_API_KEY` 입력 완료 (git ignore됨)
- **Gemini API 키**: 발급 완료 (Google AI Studio, 새 형식 `AQ.Ab8...` — AIzaSy 접두사 없음이 정상)
  - 이 키에서 쓸 수 있는 모델은 **gemini-2.5 계열** (2.0-flash 없음) → 라우트는 `gemini-2.5-flash` 사용
  - ⚠️ Vercel `GEMINI_API_KEY`는 아직 미설정 → 배포 전 추가 필요

---

## 🔄 다음 세션에 이어할 것 (Phase 3 후보)
- [ ] 이벤트 탭: 로또형 번호 선택(1~45 중 6개) + 참여 조건(글 3개+좋아요 3개) — 현재 "준비 중" 플레이스홀더
- [ ] (선택) Google OAuth 추가
- [ ] (선택) 어드민 포스팅을 DB(posts type=admin)에 시드 — 기존 블로그 글을 피드/Explore 상단 노출
- [ ] (선택) 글쓰기 이미지 업로드 (Supabase Storage)
- [ ] (선택) 블로그 → 커뮤니티 유입 CTA (블로그 레이아웃 1곳, C안)

---

## 💡 확정된 설계 결정사항
- 기존 /blog, /en/blog 등 SEO 경로는 절대 건드리지 않음
- 커뮤니티는 /community 경로에 별도 추가, feature/community 브랜치 → main 머지 방식
- DB/Auth: **Supabase** (PostgreSQL + Auth)
- 번역: **Gemini Flash** + translations 테이블 캐싱, 포커 용어(3-bet, pot odds 등) 원어 유지
- 어드민 포스팅: language 태그(ko=50, en/ja/zh=30), 내 언어만 노출
- 커뮤니티 포스팅: 전체 통합 피드, 자국어 밝게 + 타국어 흐리게 + 번역 버튼
- 비로그인: 글 읽기 가능, 좋아요/댓글 클릭 시 로그인 유도
- 이벤트 리워드: 기프트콘(3개→5천원/4개→1만원/5~6개→5만원), 글로벌은 Tremendous API
- 뱃지 시스템: winner / hot / top / participant

## 🗒️ 참고 시안 파일 위치
- design-reference/ (Downloads): GlobalFeedEvent.tsx, MultiLangFeed.tsx, PostDetail.tsx
- 실제 구현: app/community/ (page.tsx, community-client.tsx, post-card.tsx, post/[id]/, login/, actions.ts, auth/callback/)
- 번역 API: app/api/community/translate/route.ts · DB 스키마: supabase/schema.sql
