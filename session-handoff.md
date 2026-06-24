# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-06-24 (Cursor 세션)

---

## 🎯 지금 프로젝트가 어느 단계인가

**개발은 완료, 지금은 "SEO 콘텐츠 품질 강화 + 포스트 추가" 운영 단계.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인): 전부 완성·배포됨 → 더 만들 것 없음
- 핵심 작업: **구글 1페이지 달성**을 위한 콘텐츠 품질 향상 + 신규 포스트 발행

### 현재 발행 현황 (정확한 수치)
- **한국어 블로그: 49개** (`lib/posts.ts` LEGACY 21개 + `lib/posts/` NEW 28개)
- **영어 블로그: 20개** (`lib/posts-en/`)
- 목표 한국어 50개 → **1개 남음**

> ⚠️ WORKLOG 일부 오래된 기록에 "총 포스트 29개" 등의 오기가 있음. 실제 수치는 위가 정확.

---

## 🔥 이번 세션(2026-06-24)에 한 일

1. **`holdem-bankroll-management` 신규 포스트 발행** (영어 스타일 표준 적용 1호 한국어 포스트)
   - image/imageAlt/keepImagesInBody 필드 추가
   - FAQ A. 접두어 추가, 인포그래픽 제거 → 실사 이미지 2개
   - 빌드·배포 완료 (커밋: `5162eb8`)

2. **`holdem-blind-meaning` 기존 포스트 스타일 표준화**
   - image/imageAlt/keepImagesInBody 필드 추가
   - 인포그래픽·일러스트 5개 제거 → 실사 이미지 2개 (`holdem-blind-meaning-hero.webp`, `holdem-button-dealer-board.webp`)
   - FAQ 7개 A. 접두어 추가
   - 빌드·배포 완료 (커밋: `61041e4`)

3. **Cursor 규칙 구조 재편** (`.cursorrules` 분리)
   - `.cursorrules`: 565줄 → 90줄 핵심만 유지
   - `.cursor/rules/posting.mdc`: 포스팅 SEO·형식·체크리스트 (Auto Attached: `lib/posts/**`)
   - `.cursor/rules/content.mdc`: 이미지·글쓰기·JSON-LD·다국어 (Auto Attached)
   - `.cursor/rules/tech.mdc`: 성능·빌드·GSC·Supabase 인프라 (Auto Attached)

---

## 🚀 다음 세션 할 일 (우선순위 순)

1. **한국어 신규 포스트 1개 발행** → 목표 50개 달성
   - 추천 주제: 홀덤 스몰블라인드 전략 (GSC에서 `스몰블라인드` 검색량 확인됨)
   - 또는: 홀덤 체크 뜻 / 홀덤 레이즈 얼마나 / 버튼 포지션 전략

2. **기존 글 전수 검수** (아직 안 한 것)
   - 포커 핸드 예시 사실오류 확인 (7장→베스트5장 검산)
   - trailing slash `/blog/x/` → `/blog/x` 정리
   - 깨진/플레이스홀더 이미지 (1KB짜리) 찾아 교체
   - 오래된 `updated` 날짜 갱신

3. **영어 SEO 강화** — EN 포스트 GSC 분석 후 보강 (`texas-holdem-rules` 완료, 19개 남음)

4. **기존 한국어 포스트 스타일 표준화** — `holdem-bankroll-management`, `holdem-blind-meaning` 방식으로 나머지 포스트들도 순차 업데이트
   - 우선순위: GSC 노출 높은 글부터

---

## 📐 포스트 형식 표준 (2026-06-24 확정)

새 포스트 AND 기존 포스트 업데이트 시 모두 적용:

```ts
{
  image: '/images/[slug]-hero.webp',      // 필수
  imageAlt: '구체적 상황 묘사',            // 키워드 나열 금지
  keepImagesInBody: true,                 // 항상 true
  tldr: 'Quick Answer 한 문장',           // 💡 박스로 렌더됨
  // FAQ 형식: **Q. ...** \n\n A. ...
}
```

> 상세 규칙: `.cursor/rules/posting.mdc`

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

---

## 💡 확정된 설계 결정사항

- SEO 경로(`/blog`, `/en/blog` 등): 절대 변경 안 함
- DB/Auth: Supabase / 번역: Gemini Flash + translations 캐싱
- 커뮤니티 메인 = 실시간 채팅 (피드 + 채팅 + 이벤트)
- 비로그인: 읽기 가능, 작성/전송은 로그인 필요
- 이미지: webp 전용, 실사 사진만 (인포그래픽·일러스트 금지)

---

## 🟡 남은 보안 권장 항목 (시급하지 않음)

- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지
