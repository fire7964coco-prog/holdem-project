# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음

---

## 📅 마지막 작업일
2026-06-20

---

## ✅ 완료한 작업 (Phase 0 + Phase 1 — Production 배포 완료)
- **Phase 0**: `/community` 라우트 신설 + Supabase 클라이언트 설정 (client/server/middleware)
- **Phase 1**: 이메일 회원가입/로그인/로그아웃 + 피드(어드민+커뮤니티 혼합) + 글쓰기 + 좋아요
- DB 스키마 6개 테이블 생성 완료 (Supabase SQL Editor 실행 완료)
  - profiles, posts, comments, likes, event_entries, translations
  - 트리거: 회원가입 시 profiles 자동 생성, 좋아요/댓글 카운트 자동 갱신
  - RLS 정책 전부 적용
- main 머지 + Production 배포 완료 → holdemmaster.com/community 작동 확인
- 기존 블로그/SEO 경로 영향 없음 확인 (middleware는 /community/* 에만 적용)

---

## 🔧 인프라 설정 (중요 — 기억할 것)
- **Supabase 조직**: HoldemMaster (Free Plan, Seoul 리전)
- **프로젝트**: holdemmaster-community
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`  ← 오타 주의 (idikicm + oo)
- **Vercel 환경변수** (Production에 설정 완료):
  - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (sb_publishable_ 형식)
  - ⚠️ NEXT_PUBLIC 변수는 빌드 시점에 박힘 → 값 바꾸면 반드시 Redeploy
- **이메일 확인(Confirm email)**: Supabase에서 이미 OFF 상태 (가입 즉시 로그인됨)
- **로컬**: `.env.local` 에 동일 값 (git ignore됨)

---

## 🔄 다음 세션에 이어할 것 (Phase 2)
- [ ] 피드 카드 레이아웃 다듬기 (현재 글이 헤더에 붙고 여백 없음 — 디자인 정리)
- [ ] 댓글 시스템 (글 상세 페이지 /community/post/[id] + 댓글 작성/표시)
- [ ] 다국어: 자국어 밝게 / 타언어 흐리게 + Gemini 번역 버튼 (translations 캐싱 활용)
- [ ] Explore 탭: [전략 포스팅] [커뮤니티] 서브탭 필터
- [ ] 프로필 탭: 내 글, 좋아요 수, 뱃지
- [ ] (선택) Google OAuth 추가
- [ ] (선택) 어드민 포스팅을 DB에 시드 — 기존 블로그 글을 피드 상단에 노출

---

## 💡 확정된 설계 결정사항
- 기존 /blog, /en/blog 등 SEO 경로는 절대 건드리지 않음
- 커뮤니티는 /community 경로에 별도 추가, feature/community 브랜치 → main 머지 방식
- DB/Auth: **Supabase** (PostgreSQL + Auth)
- 번역: **Gemini Flash** (Google AI Studio) + translations 테이블 캐싱
  - 시스템 프롬프트로 포커 용어(3-bet, pot odds 등) 원어 유지
  - GEMINI_API_KEY 환경변수 (Phase 2에서 발급/설정 필요)
- 어드민 포스팅: language 태그 (ko=50개, en/ja/zh=30개), 내 언어만 노출
- 커뮤니티 포스팅: 전체 통합 피드, 자국어 밝게 + 타국어 흐리게 + 번역 버튼
- 비로그인: 글 읽기 가능, 좋아요/댓글/이벤트 클릭 시 로그인 유도
- 블로그 → 커뮤니티 유입 CTA: 블로그 레이아웃 1곳에만 추가 (C안, 아직 미구현)
- 이벤트 탭: 로또형 번호 선택 (1~45 중 6개), 조건(글 3개+좋아요 3개 이상)
- 당첨 리워드: 기프트콘 (3개→5천원 / 4개→1만원 / 5~6개→5만원)
- 글로벌 리워드: Tremendous API
- 뱃지 시스템: winner / hot / top / participant

## 🗒️ 참고 시안 파일 위치
- design-reference/ (Downloads): GlobalFeedEvent.tsx, MultiLangFeed.tsx, PostDetail.tsx
- 실제 구현: app/community/ (page.tsx, community-client.tsx, login/, actions.ts, auth/callback/)
- DB 스키마: supabase/schema.sql
