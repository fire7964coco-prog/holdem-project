# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음

---

## 📅 마지막 작업일
2026-06-21

---

## ✅ 완료한 작업 (Phase 0 → Phase 4 완료)

- **Phase 0**: `/community` 라우트 신설 + Supabase 클라이언트 설정
- **Phase 1**: 이메일 회원가입/로그인/로그아웃 + 피드 + 글쓰기 + 좋아요 (Production 배포 완료)
- **Phase 2**: 포스트카드 컴포넌트 분리, 글 상세/댓글, 다국어 피드+번역, Explore/프로필 탭
- **Phase 3**: 커뮤니티 UI 다국어 전환(LABELS), Blog→Community CTA, 이벤트 탭 구현 — **전부 main 커밋·배포 완료**
  - 커밋: `3cef3bf` (feat: event tab - number picker + condition check)
- **Phase 4**: 홈 피드 통합 — `holdemmaster.com/` 커뮤니티 피드로 전면 교체 (커밋 `f1e50c1`, main 배포 완료)
  - `/login`, `/post/[id]`, `/auth/callback` 라우트 신설 / `/community/*` → 301 리다이렉트
- **Phase 5 (진행 중)**: 홈 단순화 + 블로그→피드 통합 (목업 기준)
  - 홈/로그인/글상세에서 옛 사이트 헤더·푸터 숨김 (`site-chrome.tsx` `isFeedAppRoute`) — 커밋 `7158b82`
  - 블로그 29편을 "티저 카드"로 피드 자동 노출 (`전체 읽기 → /blog/slug`) — 커밋 `b441019`
  - 디자인 레퍼런스: `C:\Users\하봄\Downloads\cursor-discussion-v1\design-ref-*.tsx` (8종)

---

## 🚀 다음 세션 첫 번째 할 일 — 목업 기준 디자인 정합 마무리

### 목업 대비 아직 미반영 (우선순위순)
1. **탐색(Explore) 탭 리디자인**: 목업 = 인기 해시태그 + 어드민 추천 글 + 언어별 탐색. 현재 = 단순 strategy/community 목록
2. **이벤트 탭**: 목업 = 로또 + 지난 추첨 YouTube 임베드 + 리워드 클레임. 현재 구현과 비교 필요 (`event-tab.tsx`)
3. **피드 스토리바**: 목업 = 온라인 유저 가로 스크롤 (실시간 presence 필요 — 백엔드 작업)
4. 블로그 티저 다국어 연결: 현재 모두 `/blog/ko` 연결 → 유저 언어별 `/en/blog` 등 연결 고려

### 참고
- 블로그 티저는 `app/page.tsx`에서 `POSTS`(lib/posts.ts) → FeedPost 변환해 주입. 좋아요/댓글 없음, 클릭 시 `/blog/[slug]`
- Gemini 번역 키 Vercel 미설정 → 번역 버튼 동작 안 함 (env: `GEMINI_API_KEY`)

---

## ⚠️ 주의사항 (절대 건드리지 말 것)

- `app/blog/[slug]/` — 한국어 블로그 라우트
- `app/en/blog/[slug]/`, `app/ja/blog/[slug]/` 등 다국어 블로그 라우트
- `public/sitemap.xml` — 자동 생성되므로 수동 수정 금지
- 기존 포스트 29개 slug

---

## 🔧 기술 리스크 (미리 알고 시작)

1. **홈이 SSG → SSR 전환**: `force-dynamic` 추가로 Lighthouse 성능 점수 하락 가능
   → 대응: 피드는 클라이언트 fetch로 분리해 초기 HTML은 정적으로 유지하는 방법 검토
2. **middleware 패턴**: `/community/*` → `/` + `/post/[id]` 등으로 변경 필요
3. **기존 홈 SEO**: 메타 교체 시 기존 홈 키워드 트래픽 일부 영향 가능 → description에 기존 핵심 키워드 포함으로 완화

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
- 어드민 포스팅: language 태그(ko=50, en/ja/zh=30), 내 언어만 노출
- 커뮤니티 포스팅: 전체 통합 피드, 자국어 밝게 + 타국어 흐리게 + 번역 버튼
- 비로그인: 글 읽기 가능, 좋아요/댓글 클릭 시 로그인 유도
- 이벤트 리워드: 기프트콘(3개→5천원/4개→1만원/5~6개→5만원)

## 🗒️ 참고 파일 위치

- 현재 홈 컴포넌트: `app/home-client.tsx` (교체 대상)
- 현재 커뮤니티: `app/community/` (홈으로 이동 대상)
- 이벤트 설정: `lib/event-config.ts`
- CTA 컴포넌트: `components/community-cta.tsx` (링크 수정 대상)
- 번역 API: `app/api/community/translate/route.ts`
- DB 스키마: `supabase/schema.sql`
- 디자인 레퍼런스: `C:\Users\하봄\Downloads\cursor-discussion-v1\` (★ 3개 파일)
