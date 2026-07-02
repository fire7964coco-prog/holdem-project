# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-07-02 (Claude Code 세션 — SEO 검수·강화 대량 + /hand-chart 개편)

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

## 🔥 이번 세션(2026-07-02, Claude Code) 작업 내용

### 콘텐츠 검수·강화 (§13 사실오류 정정 포함)
- **족보 클러스터 4개**: 필라(holdem-hand-rankings) + 보조 3개(tiebreak·confusing·vs-7poker). §13 오류 3건 정정 — 스트레이트플러시 오기, 플러시/스트레이트 혼동, **"마운틴=로열플러시" 오기(→A-K-Q-J-10 스트레이트)**. 별명표·PAA FAQ·신선도 강화
- **holdem-starting-hand-range**: 플러시확률(완성 0.8%/드로우 11%) 정정, 이미지 맥락 교체(칩스택·깨끗한 포지션도), seoTitle CTR 강화
- **CTR·검수**: when-to-fold, holdem-tournament-how-to-enter(trailing slash 22개 정리), apt-incheon-2026(Event JSON-LD 추가), wsop-2025(결과 recap 전환), /tournaments(신선도)

### 디자인·시스템
- 인라인 링크 **형광 붓칠(5색)+밑줄** 강조, `:::eventcta:::` 이벤트 CTA 컴포넌트 신설
- **규칙 통합**: `.cursor/rules/posting.mdc`를 포스팅·콘텐츠 **단일 마스터**로 통합 + 포스트 작업 시 자동 읽기(CLAUDE.md 지시) + 기존 글 검수 체크리스트(SEO 메타 CTR 1순위)
- **/hand-chart** 세련 개편 + 모바일 최적화 + 내부링크(양방향)

### 예약/메모리
- 8/16 APT 인천 대회 후 자산화 클라우드 알림 예약(routine)
- 메모리: `gsc-28day-snapshot-2026-07`, `apt-incheon-2026-post-event-asset`

---

## 🚀 다음 세션 할 일 (우선순위 순)

> ⚠️ 포스트 작업 전 `.cursor/rules/posting.mdc`(통합 마스터) 먼저 읽기 — 이제 자동 적용됨.

### 1순위 — 영어 포스트 SEO 강화 (진행 중)
- 대상: `lib/posts-en/` 20개. GSC상 "how to play texas holdem / rules for dummies" 클러스터가 노출 많고 순위 페이지5~8
- ⚠️ 참고: 해당 EN 룰 글 콘텐츠는 이미 우수 → 문제는 **도메인 권위**(대형 경쟁사). 콘텐츠 추가보다 EN SERP·PAA 재조사·롱테일 커버·내부링크·장기 백링크 관점 접근
- 규칙: posting.mdc(다국어 현지화·EN 롱테일 클러스터링) + memory `gsc-28day-snapshot-2026-07` 확인 후 시작
- **✅ 완료(2026-07-02)**: `texas-holdem-rules-for-beginners`(H2 2개·내부링크 3개·FAQ 3개), `holdem-hand-rankings`(§13 스트플 오류 정정·slash·FAQ 2개), `holdem-game-order`(H2 who-acts-first·내부링크 5개), `holdem-positions`(이미지 추가·slash), `holdem-betting-actions`(§13 min-raise·slash 5·링크 3·이미지·FAQ limp), `holdem-flush-vs-straight`(§13 SF 과잉주장·링크·FAQ), `holdem-showdown-rules`(seoTitle CTR·slash 4·링크·FAQ), `holdem-all-in-rules`(CTR·본문링크 3·slash 3, 룰오류無), `holdem-starting-hands-chart`(§13 AK에쿼티·rangechart·slash 5·커서이미지2), `holdem-reading-the-board`(§13 플러시개수·링크2·slash 3)
- ⚠️ **이미지 점검 필수화**: EN 강화 시 각 글 이미지 맥락 적합/깨짐/한글오버레이 여부 확인, 더 맞는 실사 있으면 교체·추가(사용자 지시). 주의: `holdem-small-blind-position`·`poker-table-reference` 등 다수 포지션 이미지가 **한국어 인포그래픽/사이트 스크린샷**이라 EN 글에 부적합. 언어중립 실사(예: `holdem-button-position-hero`, `tournament-table-action`)만 재사용
- **다음 후보**: `holdem-tiebreak-rules`/`holdem-split-pot-rules`(다수 글이 링크), `holdem-blind-meaning`, `holdem-tournament-vs-cash-game`, `holdem-tournament`.
- 📌 **커서 이미지 워크플로 확립**: 프롬프트·삽입위치를 Claude가 주면 커서 에이전트가 이미지 생성+.ts 삽입(커밋/푸시는 Claude가, 커서는 파일저장까지만). 완료 예: starting-hands-chart 프리미엄핸드·약한에이스 2개(da080cc). ⚠️ 스타팅핸드 관련 기존 이미지는 전부 한국어라 EN 재사용 불가 → 필요시 커서 신규 방식 동일: EN SERP·PAA 재조사 → 롱테일 갭·내부링크·§13 검산·이미지 점검·**seoTitle/desc CTR 훅 평가**. ⚠️ 대부분 글에 trailing slash 링크가 남아있으니 검수 시 항상 제거. ⚠️ 족보 클러스터 글들에 "straight flush" 과잉주장 반복 패턴(§13 필수)

### 2순위 — GSC 색인 재요청
- 오늘 수정한 URL 재크롤링: 족보 4개·starting-hand-range·/hand-chart·/tournaments·apt-incheon·wsop-2025
- **EN 추가**: `/en/blog/texas-holdem-rules-for-beginners`, `/en/blog/holdem-hand-rankings`, `/en/blog/holdem-game-order`, `/en/blog/holdem-positions`, `/en/blog/holdem-betting-actions`, `/en/blog/holdem-flush-vs-straight`, `/en/blog/holdem-showdown-rules`, `/en/blog/holdem-all-in-rules`, `/en/blog/holdem-starting-hands-chart`, `/en/blog/holdem-reading-the-board`

### 3순위 — 남은 GSC 한국어 기회
- "블라인드 스틸"(pos 7.4·노출73·클릭0) 제목/메타 CTR 개선, ICM 클러스터(툴 의도)

### 4순위 — 8/16 이후
- APT 인천 대회 종료 후 결과 recap 자산화 (클라우드 알림 예약됨, memory `apt-incheon-2026-post-event-asset`)

### 참고
- Notion 연동(MCP)은 여유 있을 때
- 토너먼트 포스트 image 필드는 이번 세션 이전에 대부분 추가 완료됨

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
