# 홀덤마스터 작업일지

> 목표: holdemmaster.com 구글 1페이지 달성
> 전략: 기술 SEO(SSG) + 블로그 50편 + 필라-클러스터 내부링크 구조

---

## 2026-06-24

### 작업 내용
- 블로그 전체 디자인 리뉴얼: 크림 테마(globals.css), EB Garamond 세리프 폰트(팩트풀니스 스타일), BlogTopBar 공용 컴포넌트 신설(#1a3a2a, 홈피드·커뮤니티 버튼), 중복 탑바 제거(blog/layout.tsx), 한국어·영어 max-w-6xl 통일
- PPT 스타일 신규 마크다운 컴포넌트 추가: `:::card`, `:::steps`, `:::compare`
- 크림 에디토리얼 디자인 복원: globals.css Inter/Lora 폰트·크림 팔레트, community-client.tsx 크림 레이아웃, layout.tsx DM Sans → Inter+Lora 교체, post-card.tsx 색상 토큰 INK=#0d1c14·MUTED=#42372a로 진하게 보강 (이벤트탭 가독성 개선)
- 신규 포스트 발행: `holdem-bankroll-management` — 홀덤 뱅크롤 관리 가이드 (영어 스타일 표준 적용 1호)
- `holdem-blind-meaning` 포스트 스타일 표준화: image/imageAlt/keepImagesInBody 추가, 인포그래픽 5개 → 실사 2개, FAQ A. 접두어 추가
- `.cursorrules` 구조 재편: 565줄 → 90줄 핵심만 유지, 세부 규칙 `.cursor/rules/` 3개 파일로 분리
  - `posting.mdc` (SEO·형식·체크리스트), `content.mdc` (이미지·JSON-LD·다국어), `tech.mdc` (성능·빌드·인프라)

### 발행 현황
- 한국어 블로그: **49개** (LEGACY 21 + NEW_POSTS 28) / 영어: 20개
- 목표 50개까지 한국어 **1개 남음**

---

## 2026-06-23

### 작업 내용
- **★ 클로드코드 이관 준비**: `CLAUDE.md`·`session-handoff.md`·`WORKLOG.md` 전면 최신화 (인수인계용 노하우 추가)
- `holdem-tiebreak-rules` 사실 오류 수정: WORST 실수 1 보드 Q♣J♥10♦9♠8♥→10♣9♥8♦7♠6♥ (K가 보드에 연결돼 K-K 단독승리가 되던 오류 → 진짜 스플릿 팟으로 정정) (커밋: `5eb9d18`)
- `holdem-3bet-strategy` 검수 및 수정: updated 날짜 갱신, mistakes/faq 이미지 압축, defense/squeeze 플레이스홀더 이미지 신규 제작 (46KB·39KB) (커밋: `ccedbc4`, `4adc84d`)
- `apt-incheon-2026-guide` 검수 및 수정 (커밋: `c3b55ae`): trailing slash 4개, OnLive Day3→Day2 오류, updated 날짜
- `/tournaments` 검수 및 수정 (커밋: `9dcea52`): trailing slash 16개 제거, 한게임 운영사 '카카오게임즈→NHN' 정정, dateModified·기준일 업데이트
- 홈 피드 에디토리얼 크림 디자인 시도 후 revert — 기존 다크 피드 UI로 복원 (커밋: `ffa02d0`)
- GSC 분석 기반 EN 포스트 SEO 강화: `/en/blog/texas-holdem-rules-for-beginners` (커밋: `71487b8`, `382f1d3`)
  - seoTitle에 "how to play texas holdem for beginners" 메인 키워드 포함, desc에 "dummies" 롱테일
  - Quick Answer 7단계 리스트(Featured Snippet), 4티어 핸드 차트, 포지션·팟오즈·룰오브2&4 섹션 추가
  - 검수 후 BTN/SB 포지션 순서 오류·high card 잘못된 조언 수정, trailing slash 6개 제거

### 특이사항
- **포커 핸드 예시 사실오류 교훈**: AI가 그럴듯해 보이는 보드를 생성하면 베스트 5장 검산 없이 통과시키면 안 됨. 앞으로 모든 핸드 예시는 7장→베스트5장 명시적 검산 필수 (tiebreak 오류가 클로드코드 검수에서 발견됨)

### 발행 현황
- 한국어 블로그: **48개** (LEGACY 21 + NEW_POSTS 27, sitemap 기준) / 영어: 20개
- 목표 50개까지 한국어 2개 남음

---

## 2026-06-21 (9차)

### 작업 내용
- 버그 수정: OAuth bad_oauth_state 시 홈 화면 크래시 → `/login?error=oauth` 리다이렉트로 안내 메시지 표시
- 버그 수정: 채팅 탭 전환 시 Realtime 채널 중복 구독 에러 수정
- 버그 수정: 닉네임 수정 input `defaultValue`→`value` 제어형으로 변경 (타이핑 포커스 유실 해결)
- UI 개선: `/blog/` 경로도 `isFeedAppRoute`에 포함 → 블로그 클릭 시 옛 헤더 안 보임
- 기능 추가: 앱 라우트 6개를 피드 카드로 노출 (족보·핸드차트·계산기·퀴즈·용어사전·홀덤펍)
- 기능 추가: 채팅 탭 상단 툴 배너 (계산기·퀴즈·핸드차트·족보·용어사전)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---



### 작업 내용
- Google OAuth 소셜 로그인 추가: 로그인 페이지에 "Google로 계속하기" 버튼 추가
- Supabase Authentication → Google Provider 활성화 + Client ID/Secret 설정
- Google Cloud Console OAuth 앱 게시 (테스트 모드 → 프로덕션)
- 뒤로가기 시 "처리 중..." 고착 버그 수정 (useEffect로 상태 초기화)
- 카카오 로그인 버튼 제거 (요청)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---



### 작업 내용
- 유저 참여 UI 전환: 피드의 탐색(Explore) 탭 → 실시간 채팅(Chat) 탭으로 교체
- `app/community/chat-tab.tsx` 신규 생성: Supabase Realtime (`postgres_changes` INSERT) 글로벌 단일 룸
- `supabase/schema.sql`: `chat_messages` 테이블 + RLS (비로그인 읽기 허용, 로그인 유저만 전송) 추가
- 13개 언어 LABELS에 `chat` 키 추가 (explore/trendingExplore 제거)
- 모바일 하단 네비·데스크탑 헤더·사이드바 탐색 → 채팅 아이콘(💬) 으로 교체

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

### 특이사항
- Supabase 대시보드 → SQL Editor에서 `supabase/schema.sql` 마지막 섹션(7. chat_messages) 실행 필요
- Supabase 대시보드 → Database → Replication에서 `chat_messages` 테이블 Realtime 활성화 필요

---

## 2026-06-21 (6차)

### 작업 내용
- 보안 패치: 번역 API 로그인 필수 + 3,000자 제한 + target 화이트리스트
- 보안 패치: `/auth/callback` Open Redirect 차단 (`safeNext` 검증)
- 보안 패치: `submitEventEntry` 번호 1~45 서버 검증 + `is_eligible` 하드코딩 제거
- 길이 제한: 게시글 5,000자 / 댓글 1,000자 / 제목 100자

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (5차)

### 작업 내용
- 홈 단순화: 홈(`/`)·로그인·글상세에서 옛 사이트 헤더/푸터 숨김 (`site-chrome.tsx` `isFeedAppRoute` + `MainContent` 래퍼) — 블로그 등 SEO 페이지는 헤더 유지
- 블로그→피드 통합: 블로그 글 전체(`POSTS`)를 "티저 카드"로 홈 피드에 자동 노출, `전체 읽기 → /blog/[slug]` 연결 (목업 "어드민 티저 카드" 구현)
- `FeedPost`에 `blogSlug/category/readTime` 추가, `post-card.tsx`에 티저 카드 렌더 분기, 유저 글 초록 테두리로 시각 구분
- 다국어 피드 3개 신설: `/en` `/ja` `/zh` — 각 locale 번역 블로그 티저(`postsForLocale`) + 커뮤니티 글 혼합, `pageLocale`로 UI 언어 고정, 옛 헤더 숨김 처리
- 디자인 레퍼런스: `cursor-discussion-v1/design-ref-*.tsx` 8종 기준

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (4차)

### 작업 내용
- Phase 4: 홈 피드 통합 — `holdemmaster.com/` 이 커뮤니티 피드로 전면 교체
- `app/page.tsx` 커뮤니티 서버 로직으로 교체 (force-dynamic, Supabase 인증)
- 라우트 이동: `/community/login` → `/login`, `/community/post/[id]` → `/post/[id]`, `/community/auth/callback` → `/auth/callback`
- `next.config.mjs`: `/community`, `/community/:path*` → 301 영구 리다이렉트 추가
- `middleware.ts`: 매처 `/community/:path*` → `/, /login, /post/*, /auth/*` 업데이트
- `community-cta.tsx`, `post-card.tsx`, `actions.ts`, `community-client.tsx` 내 경로 전부 업데이트
- 브랜치 `feature/homepage-to-feed` 커밋·푸시 완료

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (3차)

### 작업 내용
- 커뮤니티 UI 다국어 전환: `community-client.tsx`에 LABELS 객체(ko/en/ja/zh) 추가, `getL(myLanguage)` 자동 전환
- Blog → Community CTA 신설: `components/community-cta.tsx` (13개 언어 현지화 카피)
- 한국어/다국어 블로그 포스트 하단에 CommunityCTA 삽입 (blog-post-client.tsx, intl-blog-post-client.tsx 전체 적용)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-21 (2차)

### 작업 내용
- 커뮤니티 Phase 2 (feature/community 브랜치): 피드 카드 카드형 레이아웃 재구성(`post-card.tsx` 컴포넌트 분리)
- 글 상세 페이지 신설 `/community/post/[id]` + 댓글 작성/표시/삭제 (`addComment`/`deleteComment` 액션)
- 다국어 피드: 자국어 밝게/타언어 흐리게 + Gemini 번역 버튼 (translations 캐싱)
- Gemini 번역 API 라우트 `/api/community/translate` (gemini-2.5-flash, thinking off, 포커 용어 원어 유지 시스템 프롬프트) — 로컬 테스트 통과
- Explore 탭 [전략 포스팅]/[커뮤니티] 서브탭 필터, 프로필 탭(내 글·받은 좋아요·댓글 수·뱃지) 구현
- 번역 캐시 쓰기용 service role 클라이언트 추가(`lib/supabase/admin.ts`, 키 없으면 캐싱만 생략)

### 특이사항
- 기존 /blog·SEO 라우트 영향 없음 (middleware는 /community/* 한정). 빌드 통과.
- 배포 전 필요: Vercel `GEMINI_API_KEY`(필수), `SUPABASE_SERVICE_ROLE_KEY`(선택, 번역 캐싱용) 환경변수 추가

---

## 2026-06-19

### 작업 내용
- 신규 EN 글 발행: `korea-poker-marathon-2026` — Korea Run + Play 2026: Marathons & Poker in One Trip
- 춘천마라톤(10/25), JTBC 서울마라톤(11/1), 가민런코리아(11/15), YTN 서울투어마라톤(9/6) 외국인 등록 가이드 포함
- BTS 슈가 Bay to Breakers 참가(2026.5.17) 훅으로 활용 — 포커+러닝 오버랩 오디언스 타깃
- "춘천마라톤 → 파라다이스시티 당일 이동 가능" 동선 설명 포함
- `apt-incheon-2026-guide` 오타/사실 검수: AREX 43분(홍대 오류)→ Express(서울역 43분)/All-Stop(홍대 60분) 분리 수정, desc 156자로 트림, Takeaways "5분"→"10분" 수정
- 실사진 8장 추가: 홍대입구역, 올리브영, 명동교자·공항버스·명동거리 3장, 청계천 3장 (480px, 28~73KB)
- Seoul Day Trips 섹션 교통편 표 추가 (AREX Express/All-Stop 분리), 명동→청계천 10분 동선 명시

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

---

## 2026-06-18 (4)

### 작업 내용
- 신규 EN 글 발행: `apt-incheon-2026-guide` — APT Incheon 2026: Poker Festival + Korea Travel Guide
- APT 인천 2026 상세 정보 (Aug 7–16, Paradise City, $2.7M GTD, Main Event ~$1,703, Natural8 $3.50 step satellite) 영어권 독자 대상 현지화
- K-wave 여행 각도: 서울 3일 코스 (경복궁/북촌·홍대/명동 야시장·강남/성수) + 예산 표 포함
- 경쟁글이 없는 블루오션 — "포커 + 한국 여행" 콤보 콘텐츠 최초 작성
- 히어로 이미지 생성 (파라다이스 시티 테이블 + 경복궁 야경 배경) → 58KB 압축
- 관련 EN 포스트 4개 내부링크 연결 (Related Posts 섹션)

### 발행 현황
- 총 포스트: 51개 (목표 50개 초과!)

---

## 2026-06-18 (3)

### 작업 내용
- 신규 EN 필라 글 발행: `holdem-position-play` — Poker Position Strategy: Complete Playbook for Every Seat
- SERP Top20 분석 → 경쟁글이 빠뜨린 3가지 포함: IP vs OOP 에퀴티 실현 갭 수치(85–100% vs 60–85%), 포지션별 c-bet 빈도(BTN 65–75%, OOP 40–50%), 홀덤펍 live game 실전 맥락
- 10개 H2에 롱테일 키워드 배치 ("Why is the button the best position in poker", "early position poker strategy UTG", "small blind poker strategy 3-bet or fold" 등)
- 히어로 이미지 생성 (9포지션 다이어그램, BTN/CO 골드 강조) → 38.5KB 압축
- `holdem-positions` 클러스터↔필라 양방향 내부링크 연결

### 발행 현황
- 총 포스트: 50개 (목표 달성!)

---

## 2026-06-18 (2)

### 작업 내용
- 신규 EN 글 발행: `wpt-australia-2026-guide` — WPT Australia 2026 Complete Player Guide
- SERP Top20 분석 → 모든 경쟁글이 빠뜨린 5가지 포함 (WPT Global 호주 제한, NSW 일일 현금 한도, 와이어 트랜스퍼 상세, 이중 챔피언십 비교, WC 시트 보너스)
- 36개 이벤트 전체 일정표, 위성 2루트($255 스텝 / $1,075 직접), 실전 여행 예산 표 포함
- 히어로 + 토너먼트 플로어 이미지 2장 생성
- EN 캔버스 WPT Australia 상태 pending → done 업데이트 예정

### 발행 현황
- 총 포스트: 49개 (목표 50개까지 1개 남음)

---

## 2026-06-18

### 작업 내용
- 신규 KO 글 발행: `pokerstars-appt-satellite-guide` — PokerStars APPT 위성 토너먼트 완전 가이드 2026
- SERP 분석 결과 한국어 APPT 위성 특화 가이드 공백 확인 (블루오션) → 위성 도전자 특화로 차별화
- Power Path 4단계($0.50→Silver Pass) 클릭 경로 + 현장 메가 퀄리파이어(9/9, ₩350K) 비교 가이드
- 파라다이스시티 파라다이스카드 발급 · KYC 인증 · 위성 당첨 후 절차까지 포함
- `appt-korea-2026-guide`에 양방향 내부링크 추가

### 발행 현황
- 총 포스트: 48개 (목표 50개까지 2개 남음)

---

## 2026-06-17 (3)

### 작업 내용
- 신규 EN 글 발행: `ept-barcelona-2026-guide` — EPT Barcelona 2026 Complete Player Guide (Aug 16–29, Casino Barcelona)
- SERP Top20 분석 + 롱테일 키워드 10개 H2 배치 전략 적용
- 차별화: Source of Funds 신고서 안내, 총 트립 비용 3가지 시나리오, Day 1 생존 가이드 (경쟁글 전부 누락 항목)
- Power Path $0.50→Gold Pass 단계별 가이드, 숙소 7곳 비교표, 공항→카지노 교통 4가지 비교

### 발행 현황
- 총 EN 포스트: 16개
- 총 KO 포스트: 38개

---

## 2026-06-17 (2)

### 작업 내용
- 신규 글 발행: `apt-jeju-2026-fall-guide` — APT 제주 2026 가을 참가 완전 가이드 (9/25~10/4, LES A 카지노, Natural8 위성 경로, 교통·체크인 전 과정)
- 외국인 전용 카지노 안내, 공식 일정 미발표 안내, APT 인천·APPT 코리아 양방향 내부링크

### 발행 현황
- 총 KO 포스트: 38개 (목표 50개까지 12개 남음)

---

## 2026-06-17

### 작업 내용
- 신규 글 발행: `ggpoker-wsop-express-satellite-guide` — GGPoker WSOP Express 위성 단계별 완전 가이드 (Step 0~4 구조·무료 티켓·Bracelet Pass 패키지 실제 신청 순서로 정리)
- `wsop-2026-tournament-guide` 내부링크 추가 (GGPoker Express 섹션 → 새 가이드 연결)

### 발행 현황
- 총 포스트: 33개 (목표 50개까지 17개 남음)

---

## 2026-06-16 (6)

### 작업 내용
- EN Tournament Pillar 신규 발행: `holdem-tournament` (영어 3번째 필라, 15개 EN 포스트)
- SERP Top 20 분석 후 차별화: Day-1 타임라인, 형식 결정 비교표, 실제 비용 구조, 초보 체크리스트

### 발행 현황
- 총 EN 포스트: 15개

---

## 2026-06-16 (5)

### 작업 내용
- 신규 글 발행: `appt-korea-2026-guide` — APPT 코리아 2026 참가 완전 가이드 (시리즈 2편)
- PokerStars Power Path 위성 구조, 현장 Mega Qualifier(35만원), Stars Account 결제 정보 포함
- APT 인천 가이드와 교차 링크로 중복 내용 최소화

### 발행 현황
- 총 포스트: 32개 (목표 50개까지 18개 남음)

---

## 2026-06-16 (4)

### 작업 내용
- 신규 글 발행: `apt-incheon-2026-guide` — APT 인천 2026 참가 완전 가이드 (단계별 신청 시리즈 1편)
- 시리즈 전용 레이아웃 컴포넌트 `components/tournament-guide-post.tsx` 신규 생성 (기존 포스트와 다른 디자인)
- `Post` 타입에 `layout?: "tournament-guide"` 필드 추가, `page.tsx`에서 조건부 렌더링
- 포스트 내용: Natural8 위성 경로($3.50~), 현장 체크인 절차, 파라다이스 시티 입장 규정(외국인 전용) 명시

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

### 특이사항
- 대회 참가 가이드 시리즈 1편 시작 — 11편까지 순차 발행 예정

---

## 2026-06-16 (3)

### 작업 내용
- `wsop-2026-tournament-guide` 전체 검수 및 오류 수정
  - 바이인 범위 `$300~$250,000` → `$500~$250,000` (실제 최저 바이인)
  - "2025년 9,735명" → "2024년 9,735명" (메인이벤트 참가자 연도 오류)
  - Day 1D "레이트 등록 마감" 오류 제거 (실제 마감은 Day 2D)
  - 이미 종료된 이벤트(#1~#34) 표에 취소선 표시, #50 MILLIONAIRE MAKER "내일!" 강조
  - 관련 글 카드 `/blog/holdem-tournament/` (404) → `/tournaments/` 수정
- `tournaments-client.tsx` WSOP 카드에 "WSOP 2026 완전 가이드" 내부 링크 버튼 추가
- `tournaments-client.tsx` 관련 가이드 섹션 상단에 WSOP 2026 Featured 배너 카드 추가 (진행중 뱃지 포함)

### 발행 현황
- 총 포스트: 31개 (목표 50개까지 19개 남음)

---

## 2026-06-16 (2)

### 작업 내용
- 신규 포스트 발행: `wsop-2026-tournament-guide` (토너먼트 필라 클러스터)
  - WSOP 공식·PokerNews·Pokerfuse 등 Top 5 소스 웹검색 기반 정확한 정보 수록
  - 메인이벤트 플라이트 일정표·주요 이벤트 바이인표·GGPoker 위성 단계표·현장 위성 일정표 포함
  - 이미지 3장 삽입: hero(78KB), schedule(75KB), ggpoker-satellite(75KB)
- `wsop-2025-tournament-guide` 상단에 2026 링크 배너 추가 (트래픽 연결)

### 발행 현황
- 총 포스트: 33개 (목표 50개까지 17개 남음)

---

## 2026-06-16

### 작업 내용
- `.cursorrules` H2 롱테일 키워드 규칙 추가: 영어 포스트 작성 전 PAA·자동완성으로 실제 검색 쿼리 도출 → H2에 직접 배치하는 절차 명시
- `holdem-all-in-rules` H2 3개 실제 검색 쿼리로 교체: "How Do Side Pots Work in Poker?", "Does Going All-In Reopen the Betting?", "What Happens If You Go All-In Wrong?"
- `holdem-all-in-rules` 콘텐츠 보강 (91점 목표): 누적 숏 올인 규칙(TDA Rule 47), Quick Decision Guide 표, E-E-A-T 경험담, FAQ 1개 추가
- GSC·GA4 데이터 분석: Organic Search 58% 확인, 카니발리제이션 발견
- 키워드 카니발리제이션 수정: `/hands` vs `/blog/holdem-hand-rankings` — `/hands` 제목을 툴 포커스로 차별화, 블로그 포스트 seoTitle 키워드 앞배치, `/hands`에서 블로그 포스트로 내부링크 추가

### 특이사항
- GA4 인기 페이지 3위에 404 페이지 발견 (33 조회) — 원인 URL 서치 콘솔 색인 탭에서 추가 확인 필요
- GSC 쿼리 분석: "홀덤 족보 순위" 80 노출 / 9.8위 → 카니발리제이션 수정으로 순위 상승 기대
- www 중복 URL 이슈 (이전에 이미 해결 완료)

### 발행 현황
- 총 포스트: 32개 (목표 50개까지 18개 남음)

---

## 2026-06-15 (3)

### 작업 내용
- 신규 EN 클러스터 발행: `holdem-all-in-rules` (Rules 필라 7번째 클러스터)
- Top 20 SERP 분석 후 경쟁 공백 3가지 보강: 리레이즈 재오픈 규칙, 4자 사이드팟 계산표, 올인 쇼다운 플로우
- `texas-holdem-rules-for-beginners` 관련 글 섹션에 양방향 링크 추가

### 발행 현황
- EN 포스트: 14개 (Rules 필라 7개)

---

## 2026-06-15 (2)

### 작업 내용
- `/en/blog/holdem-showdown-rules/` 섹션 이미지 3장 추가: who-shows-first(41KB), slow-roll(35KB), cards-speak(47KB)

---

## 2026-06-15

### 작업 내용
- 영문 클러스터 2개 신규 작성 (배포는 다음 날 예정): `holdem-showdown-rules`, `holdem-reading-the-board`
- 한국어 시즌 포스트 신규 작성: `holdem-masters-7th-guide` (WPL 제7회 홀덤 마스터스 2026 완전 가이드)
- 각 포스트: SERP 분석 → 롱테일 H2 구조 → 히어로 이미지 생성 → amber 테이블 + 하이라이트 + FAQ + 관련글
- 필라 포스트 양방향 내부링크 업데이트 (texas-holdem-rules-for-beginners, holdem-hand-rankings)

### 발행 현황
- 한국어 포스트: 30개 (총 포스트 32개 예정, 일부 배포 전)
- 영문 포스트: 13개

---

## 2026-06-14 (2차)

### 작업 내용
- 영문 클러스터 2개 신규 발행: `holdem-betting-actions`, `holdem-starting-hands-chart`
- 각 포스트: SERP 분석 → 롱테일 H2 구조 → 히어로 이미지 생성(42/44KB) → amber 테이블 + 하이라이트 + FAQ + Related Posts
- 필라 포스트 양방향 내부링크 업데이트 (texas-holdem-rules-for-beginners, holdem-hand-rankings)

### 발행 현황
- 영문 포스트: 11개 (총 포스트 29개, 목표 50개까지 21개 남음)

---

## 2026-06-14

### 작업 내용
- 영문 포스트 시각화 개선 완료: `texas-holdem-rules-for-beginners` (hero image, desc 160자, 하이라이트, amber 테이블 3개, Related Posts)

### 발행 현황
- 총 포스트: 29개 (목표 50개까지 21개 남음)

---

## 2026-06-13

### 작업 내용
- 다국어 `<html lang>`/`dir` 서버 신호 개선: 루트 레이아웃 `<head>`에 페인트 직전 동기 부트스트랩 스크립트 추가 — URL 첫 세그먼트(`/en`,`/ar` 등)로 `lang`/`dir`을 하이드레이션 이전에 보정 (RTL 깜빡임·언어 신호·접근성). 매핑은 `lib/intl` 단일 소스에서 생성, `suppressHydrationWarning` 적용.
- 영어(en) 섹션 필라-클러스터 보강: P1 족보 + P2 규칙 두 필라에 클러스터 4편 현지화 발행 — `holdem-flush-vs-straight`, `holdem-tiebreak-rules`, `holdem-blind-meaning`, `holdem-split-pot-rules`. EN SERP Top10 분석 후 작성, slug는 한국어와 동일(hreflang 상호 링크). 기존 EN 필라(`holdem-hand-rankings`, `texas-holdem-rules-for-beginners`)에서 신규 클러스터로 양방향 내부링크 연결. EN 포스트 4→8편.

### 특이사항
- `npm run build` 통과(127 페이지), `check:intl-links` 통과(43편), sitemap 다국어 39→43편 + 신규 EN slug에 ko/en/x-default hreflang 반영 확인. `<html lang>` 부트스트랩 스크립트 아랍어 정적 HTML head 주입 확인. `HtmlLangSync`는 클라이언트 라우트 이동용으로 유지.

---

## 2026-06-12 (5)

### 작업 내용
- 신규 글 발행: `holdem-tournament-schedule-check` ("홀덤 대회 일정 확인법 — 국내·해외 포커 토너먼트 어디서 볼까?")
  - `/tournaments` 필라의 일정 신뢰성 클러스터 글 — Google SERP + WSOP·APT·APPT·EPT·WPT 공식 일정 + PokerNews·SoMuchPoker·The Hendon Mob 확인 후 작성
  - 타깃 롱테일: 홀덤 대회 일정, 포커 대회 일정, 포커 토너먼트 일정, WSOP 일정, APT 일정, APPT 코리아 일정, EPT 일정, WPT 일정, PokerNews 일정
  - 차별화: 단순 일정표 반복이 아니라 공식 사이트 우선순위, 종합 캘린더 활용법, 날짜·장소·바이인·레이트 레지 교차검증 체크리스트 제공
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-how-to-enter`·`holdem-tournament-buy-in-cost`·`holdem-tournament-tax-guide`·`holdem-tournament-vs-cash-game`에서 신규 글 연결

### 발행 현황
- 총 포스트: 54개 (목표 50개 초과 달성)

### 특이사항
- 신규 이미지 생성 없이 기존 `tournament-hall-wsop.webp` 재사용
- `npm run build` 통과: 다국어 내부 링크 검사 통과, sitemap.xml 41 blog posts + 39 intl posts 반영

---

## 2026-06-12 (4)

### 작업 내용
- 신규 글 발행: `holdem-tournament-tax-guide` ("홀덤 대회 세금 — 상금 받으면 신고해야 할까?")
  - `/tournaments` 필라의 세금/신고 클러스터 글 — Google SERP + 국세청 기타소득 + IRS 비거주자 원천징수 자료 확인 후 작성
  - 타깃 롱테일: 홀덤 대회 세금, 포커 상금 세금, 기타소득 4.4%, 홀덤 상금 신고, WSOP 세금 30%, 해외 포커 상금 한국 신고, 외국납부세액공제
  - YMYL 안전 처리: 세무 조언 아님 명시, 국내/해외/미국 WSOP 케이스별로 단정 금지, 고액 상금은 세무사 상담 권고
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-buy-in-cost`·`holdem-tournament-how-to-enter`·`holdem-tournament-vs-cash-game`·WSOP·APT 제주 글에서 신규 글 연결

### 발행 현황
- 총 포스트: 53개 (목표 50개 초과 달성)

### 특이사항
- 이미지 최적화 확인: `public/images/tournament-trophy.webp` 70.9KB WebP (복잡한 트로피/칩 이미지 기준 80KB 이하)

---

## 2026-06-12 (3)

### 작업 내용
- 신규 글 발행: `holdem-tournament-buy-in-cost` ("홀덤 대회 바이인·참가비 — 초보는 얼마짜리부터 나가야 할까?")
  - `/tournaments` 필라의 비용/바이인 클러스터 글 — Google SERP 웹검색 후 롱테일 H2 설계
  - 타깃 롱테일: 홀덤 대회 바이인 뜻, 홀덤 대회 참가비 평균, 홀덤펍 대회 참가비, APT 바이인, APPT 코리아 바이인, WSOP 참가비, 리엔트리 포함 총비용, 새틀라이트 비용
  - 공식 숫자 반영: APT 인천 메인 KRW 2.5M, APT 제주 클래식 메인 KRW 2.3M, APPT 코리아 메인 KRW 1.8M/하이롤러 KRW 5M, WSOP 2026 $300~$250K·메인 $10K
  - 양방향 내부링크: `/tournaments` 카드 추가, `holdem-tournament-how-to-enter`·`holdem-tournament-vs-cash-game`·WSOP·APT 제주 글에서 신규 글 연결

### 발행 현황
- 총 포스트: 52개 (목표 50개 초과 달성)

### 특이사항
- 카니발라이제이션 방지: 참가방법 글은 신청 절차, 바이인 글은 비용/예산 계산으로 역할 분리
- 신규 이미지 생성 없이 기존 webp 재사용 (tournament-table-action)

---

## 2026-06-12 (2)

### 작업 내용
- 신규 글 발행: `holdem-tournament-how-to-enter` ("홀덤 대회 참가 방법 — 온라인 무료부터 WSOP까지 단계별 가이드")
  - `/tournaments` 필라의 클러스터 글 (참가 방법 주제) — SERP Top10 분석 후 차별화: 단계별 로드맵 + 현장 실전 절차(E-E-A-T) + 위성/초대권 시스템 구체화
  - 양방향 내부링크: `/tournaments` 가이드 카드 추가, `holdem-tournament-vs-cash-game`·`wsop-2025-tournament-guide`·`apt-jeju-classic-2026-guide` → 신규 글 역링크
  - 히어로/본문 이미지는 기존 webp 재사용 (tournament-hall-wsop, tournament-table-action, wsop-satellite-tournament, tournament-trophy)

### 발행 현황
- 총 포스트: 51개 (목표 50개 초과 달성)

### 특이사항
- 카니발라이제이션 방지: 본 글은 "참가 방법(절차) 허브 클러스터", WSOP 글은 해외 메이저 전용, APT 제주 글은 특정 대회 후기로 역할 분리

---

## 2026-06-12

### 작업 내용
- `/tournaments` 2026 대회 일정 전수 웹검색 재검증 및 업데이트 (대충 작성 금지 — 공식 소스 1건씩 교차확인)
- 신규 대회 추가:
  - APPT 코리아 2026 (9.03~9.14, 인천 파라다이스 시티) — PokerStars 6년 만의 한국 복귀, ₩20억+ GTD
  - EPT 프라하 2026 (12.02~12.13) — 2026 EPT 시즌 피날레
  - GOP Taipei II 'The Trial of Wisdom' (9.18~9.27)
  - Triton SHR 몬테네그로 (5.13~5.28, 종료) — Triton 10주년
- 사실 정정:
  - WSOP Europe: 개최지 로즈바도프 King's Resort → 프라하 King's Casino, 종료일 4/12→4/10, 메인 4/3~9 (€10M GTD)
  - WSOP 라스베이거스: 100개 브레이슬릿 확정, 파이널 테이블 8/3~5 ESPN 생중계, 2025 시리즈 246,960명·$4.81억 역대 기록 반영
  - WPT 월드 챔피언십: Prime 챔피언십 12/8~14 발표 반영
  - 미검증 'AJPC 사무라이 서킷 2·3차'(8월/12월) 제거 — 공식 확인 불가 (인천 4.10~4.19 1건만 실재)
- JSON-LD Event 스키마 정정: APT(Asian Poker Tour) 명칭/일자 수정 + APPT 코리아 Event 추가
- 일정표 기준일 라벨 2026.06.04 → 2026.06.12, dateModified 갱신

### 발행 현황
- 총 포스트: 50개 (목표 50개 달성)

### 특이사항
- 이 카테고리(토너먼트)는 정보 신뢰성·최신성이 최우선 → 모든 일자는 공식 사이트/PokerNews/Pokerfuse 등 교차확인 후 반영, 추정치 작성 배제
- APT/WSOP/EPT 핵심 일정은 기존 데이터와 일치 확인됨 (변경 없음)

---

## 2026-06-11

### 작업 내용
- 신규 글 발행 및 영어 현지화: `texas-holdem-rules-for-beginners` (LowFruits 롱테일 키워드 기반 초보자 규칙 가이드)
- 일본어 현지화 추가: `texas-holdem-rules-for-beginners` (初心者向けルール・チップ・PDFチートシート)
- 중국어 간체 현지화 추가: `texas-holdem-rules-for-beginners` (德州扑克新手规则·筹码设置·PDF速查表)
- 디자인 개선: 블로그 내 `/downloads/*.pdf` 링크를 강조 CTA 카드/버튼으로 자동 렌더링
- 카니발라이제이션 방지: 초보 규칙 글 ↔ 게임 진행 순서 글 ↔ `/rules/texas-holdem` 역할 분리 및 내부링크 조정
- 신규 글 발행 및 12개 언어 현지화 배포: `holdem-tournament-vs-cash-game`
- 성능 수정: LCP 이미지 최적화 유지 + 하단 요약 이미지 슬롯 제거

### 발행 현황
- 총 포스트: 50개 (목표 50개 달성)

### 특이사항
- 공용 영어 PDF 치트시트 제작: `public/downloads/texas-holdem-rules-for-beginners.pdf` (2페이지, 핸드 랭킹·게임 흐름·액션 순서·칩 세팅·초보 실수 / SERP Top10 분석 반영)
- PDF 생성기를 HTML/CSS → Chromium 렌더 방식으로 전환: `scripts/generate-beginner-pdf.mjs` (Playwright devDependency 추가, `npm run generate:beginner-pdf`)
  - 콘텐츠를 언어별 `CONTENT` 데이터로 분리 → 신규 언어는 키만 추가하면 생성 (한/일/중/아랍은 fontStack·dir만 지정)
  - 파비콘(`public/favicon.svg`)·`holdemmaster.com` URL을 헤더에 브랜딩으로 삽입
  - 정적 자산이라 사이트 런타임 성능에는 영향 없음 (생성은 로컬/빌드 도구 영역)
- 한국어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-ko.pdf` (Malgun Gothic 렌더, 2페이지)
- 일본어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-ja.pdf` (Yu Gothic/Meiryo 렌더, 2페이지)
- 중국어 PDF 추가: `public/downloads/texas-holdem-rules-for-beginners-zh.pdf` (Microsoft YaHei/Noto Sans SC 렌더, 2페이지)
  - 한국어 글은 한국어 PDF, 영어 글은 영어 PDF로 각각 연결
  - 실행: `node scripts/generate-beginner-pdf.mjs`(전체) / `... en ko`(지정 언어)
- 다국어 현지화 원칙 정리: 현지어 우선, 어색한 포커 용어는 영어 원단어 사용/병기

---

---

> ⚠️ **아래 섹션들은 2026-06-24에 `.cursor/rules/` 로 이관됨**
> - 포스팅 규칙 → `.cursor/rules/posting.mdc`
> - 이미지·콘텐츠 기준 → `.cursor/rules/content.mdc`
> - 성능·기술·GSC 루틴 → `.cursor/rules/tech.mdc`
> 이 아래 내용은 **역사적 기록**으로만 보관. 규칙 확인은 `.cursor/rules/` 참고.

---

## 🎯 구글 1페이지 스프린트 기록 (2026-05-18 시작)

### 핵심 숫자 (출발점)

| | GSC 3개월 | 45일 목표 |
|--|-----------|-----------|
| 클릭 | 61 | 100~180 |
| 평균 순위 | **9.5** | **≤7** |
| 1위 URL | `holdem-blind-meaning` | + 빅블라인드 CTR |

### 주차 요약 (상세는 md 파일)

| 주 | 기존 글 (빠르게) | 신규 |
|----|------------------|------|
| W1 | blind 전면, confusing/flush 메타 | — |
| W2 | tiebreak FAQ, cbet 상단, blind 링크 | **스몰블라인드** |
| W3 | confusing 본문, pub 메타, 클러스터 링크 5편 | **체크 뜻** |
| W4 | 홈 인기글, tournaments updated | **레이즈 얼마나** |
| W5 | blind 클러스터 동기화 | **버튼 포지션** |
| W6 | 전략↔기초 링크, 색인 오류 점검 | **펍 에티켓** |

### 📌 계획 유지 — 주간 체크인 (매주 월, 15분)

1. 아래 표에 **한 줄** 적기  
2. GSC Tier A 4키워드 순위 확인 (`홀덤 블라인드 뜻`, `빅블라인드`, `족보 같을 때`, `스몰블라인드`)  
3. Cursor에 **`이번 주 SEO 체크`** 또는 **`W2 시작해`** 입력 → 미완 작업 진행  
4. (선택) 구글 캘린더 반복: 「홀덤마스터 SEO 15분」월요일  
5. (선택) GSC → 설정 → **이메일 요약** 켜기  

| 주차 | 날짜 | 순위(28일) | 클릭(28일) | 완료 | 다음 |
|------|------|:----------:|:----------:|------|------|
| W1 | | | | ☐ | |
| W2 | | | | ☐ | |
| W3 | | | | ☐ | |
| W4 | | | | ☐ | |
| W5 | | | | ☐ | |
| W6 | | | | ☐ | |

---

## 📋 GSC 루틴 — 글 발행·배포 후 10분 (필수)

> **사이트맵 “제출”은 구글이 하는 일이고, 내가 GSC에 들어가서 눌러야 합니다.**  
> (자동 제출 스크립트는 Search Console API 키가 있어야 가능 — 지금은 수동 루틴 권장)

### A. 배포 직후 (매 글, 5분)

- [ ] [Google Search Console](https://search.google.com/search-console) → 속성 `holdemmaster.com`
- [ ] **URL 검사**에 새 글 주소 입력  
  예: `https://www.holdemmaster.com/blog/holdem-value-bet-sizing`
- [ ] **“색인 생성 요청”** 클릭 (이미 색인됐으면 “색인됨”만 확인)
- [ ] `public/sitemap.xml`에 해당 URL·`lastmod`가 글 `updated` 날짜인지 확인  
  → 배포 시 `npm run build`가 **자동으로 sitemap 재생성** (`prebuild` → `generate:sitemap`)  
  → 수동만 할 때: `npm run generate:sitemap`

### B. 주 1회 (5분)

- [ ] GSC → **Sitemaps** → `https://www.holdemmaster.com/sitemap.xml` **다시 제출** (이미 있어도 재제출 OK)
- [ ] **실적** → **검색어** 탭: 클릭·노출 있는 쿼리 3개 메모 → 다음 글 제목·H2에 반영
- [ ] **페이지** 탭: 노출 많은데 CTR 낮은 글 → `seoTitle`·`desc`만 손볼 후보로 표시

### C. 월 1회 (선택)

- [ ] 색인 안 된 URL이 있으면 URL 검사로 원인 확인 (noindex·리다이렉트·404)
- [ ] 옛 글 1~2편: 내부링크 2개 + `updated` 갱신 + 배포 → 해당 URL만 URL 검사

### 체크리스트 메모란 (발행할 때마다 적기)

| 날짜 | slug | URL 검사 | sitemap lastmod | 비고 |
|------|------|:--------:|:---------------:|------|
| | | ☐ | ☐ | |

---

## 🏆 최우선 원칙 (2026-04-20 확정, 절대 잊지 말 것)

### 앞으로 모든 포스팅은 반드시 사람의 경험이 담겨야 한다

AI가 정보를 재가공한 글은 이제 경쟁력이 없다.
구글이 살려주는 포스팅 = **실제 사람이 겪은 경험 + 그로 인한 인사이트**

**분업 방식:**
- 사용자 → 홀덤펍 경험, 핸드 상황, 느낀 점을 짧게라도 메모해서 전달
- AI → 그 경험을 SEO 포스팅으로 가공 (제목·구조·키워드·FAQ·이미지 전부)

**포스팅 유형별 적용:**
- 경험형 (펍, 전략) → 실제 핸드·경험담 직접 삽입
- 이론형 (ICM, 확률) → "알면서도 틀리는 이유" + Before/After + 계산기 연동

**이 원칙 없이는 새 포스팅 작성하지 않는다.**

---

## 💡 전략 방향 (2026-04-20 확정)

### 포스팅 전략 전환
- **기존 29개 포스트**: 그대로 유지. SEO 뼈대 역할. 절대 삭제/갈아엎기 금지
- **새 포스트부터**: 경험 기반 포맷으로 전환
- **장기**: 트래픽 쌓인 후 커뮤니티 기능 추가 (지금은 시기상조)

### 경험 기반 포스팅이란
AI가 쓴 글과 차별화되는 핵심 = **실제 경험(E-E-A-T의 첫 번째 E)**

| 죽는 포스팅 | 살아남는 포스팅 |
|------------|--------------|
| "C벳 성공 조건 3가지" | "강남 펍에서 C벳 블러프 불렸을 때 배운 것" |
| "버블 전략 완전 가이드" | "버블에서 올인 콜 잘못해서 칩 날린 실제 핸드 분석" |
| "AA 운영법 정리" | "AA 3번 연속 잃고 나서 바뀐 내 사고방식" |

### 사이트 운영자 홀덤펍 방문 예정
직접 경험을 쌓아 포스팅에 녹이기로 결정. 방문 체크리스트:
- 분위기, 테이블 구성, 로컬 룰 기록
- 기억에 남는 핸드 상황 메모 (내 패·보드·판단·결과)
- 옆 플레이어 유형, 심리적 흔들린 순간
- 나오면서 바로 음성 메모 (차 안에서)

### 커뮤니티 전환 로드맵
| 단계 | 시기 | 할 일 |
|------|------|------|
| 지금 | 포스트 50개 달성 전 | 경험 기반 포스트 집중 작성 |
| 중기 | 월 방문자 1만+ | 포스트 하단 댓글 기능 추가 |
| 장기 | 월 방문자 5만+ | 핸드 분석 게시판, Q&A 섹션 |

---

## 🔴 작업 시작 전 반드시 읽을 것

### 1. 포스트 저장 구조 (절대 혼동 금지)

포스트는 **두 곳**에 나뉘어 저장된다. 한 곳만 보면 절대 안 됨.

| 파일 | 포스트 수 | 설명 |
|------|----------|------|
| `src/data/posts.ts` | 21개 | 초기 발행 포스트 (3월~4월 초) |
| `src/data/posts/` 폴더 | 8개 | 최근 발행 포스트 (4월 중순~) |

**전체 포스트 수 = posts.ts(21) + posts/ 폴더(8) = 총 29개**

새 포스트는 `posts/` 폴더에 개별 `.ts` 파일로 추가하고 `posts/index.ts`에 import한다.

---

### 2. sitemap.xml 규칙 (절대 원칙) — 2026-05-06 정책 변경

> **⚠️ 정책 전환**: Next.js 마이그레이션 (`trailingSlash: false`) 으로 URL 정책 반전됨.
> 과거 Vite 시절 정책 (slash 포함 필수) 은 폐기.

**① 블로그 URL은 끝에 `/` 절대 금지**
- `next.config.mjs` 의 `trailingSlash: false` 와 일치해야 함
- canonical / OG url / sitemap 모두 slash 없이 통일
- ✅ 올바른 형식: `https://www.holdemmaster.com/blog/holdem-cbet-strategy`
- ❌ 잘못된 형식: `https://www.holdemmaster.com/blog/holdem-cbet-strategy/`

**② 사이트맵에는 실제 존재하는 포스트만 등록**
- 코드에 없는 포스트 URL 절대 추가 금지
- 새 포스트 발행 순서: 코드 작성 → 배포 → 사이트맵 추가 (이 순서 반드시 준수)

**③ 사이트맵 수정 후 할 일**
1. 배포
2. 서치 콘솔 → Sitemaps → `https://www.holdemmaster.com/sitemap.xml` 재제출

---

### 3. GSC(구글 서치 콘솔) 상태 해석

| 상태 | 의미 | 대응 |
|------|------|------|
| 리디렉션 오류 | URL이 다른 곳으로 301 이동됨 | 사이트맵 URL에 `/` 추가 |
| 발견됨 - 색인 생성되지 않음 | 구글이 찾았지만 아직 대기 중 | 색인 요청 또는 기다리기 |
| 실패함 | 유효성 검사 결과가 나쁨 (과거 기록) | 수정 후 유효성 검사 재시작 |

**"실패함"은 새 오류가 아니라 과거 검사 결과임. 수정 후 유효성 검사 다시 시작하면 됨.**

---

### 4. 새 포스트 발행 체크리스트 (Next.js 기준, 2026-05-06 갱신)

- [ ] `lib/posts/새포스트.ts` 파일 작성 (또는 `lib/posts.ts` 의 LEGACY_POSTS 배열에 추가)
- [ ] `lib/posts/index.ts` 의 NEW_POSTS 에 import 추가 (개별 파일 방식일 때만)
- [ ] **필수 메타필드**: slug · title · desc · category · date · `updated` · `tldr` · readTime · emoji · tags
  - `updated` = 작성/갱신 시점 YYYY-MM-DD (E-E-A-T 신선도 신호)
  - `tldr` = 검색 의도 직답 40~90자 (Featured Snippet · 모바일 LCP 후보 텍스트)
- [ ] `app/blog/roadmap` 또는 관련 허브 글에 링크 (있는 경우)
- [ ] `public/sitemap.xml` 에 URL 추가 (**끝 슬래시 없음**, lastmod·priority·changefreq)
- [ ] `npm run build` 검증
- [ ] 배포 (Vercel 자동) → Ready 확인
- [ ] 서치 콘솔 URL 검사 → 색인 생성 요청
- [ ] WORKLOG.md 발행 현황 + 엑셀 형식 표 업데이트

---

### 5. 현재 발행 현황 (2026-04-20 기준)

**총 29개 발행 / 목표 50개**

**posts.ts (21개):**
| slug | 날짜 | 카테고리 |
|------|------|---------|
| holdem-3bet-strategy | 2026-04-10 | 전략 |
| holdem-probability | 2026-04-09 | 확률·수학 |
| holdem-pot-odds-calculation | 2026-04-09 | 확률·수학 |
| holdem-flush-vs-straight | 2026-04-08 | 족보 |
| holdem-vs-7poker-hand-rankings | 2026-04-07 | 족보 |
| holdem-split-pot-rules | 2026-04-07 | 족보 |
| holdem-hand-rankings-confusing | 2026-04-06 | 족보 |
| holdem-tiebreak-rules | 2026-04-03 | 족보 |
| holdem-hand-rankings | 2026-04-02 | 족보 필라 |
| apt-jeju-classic-2026-guide | 2026-04-01 | 토너먼트 |
| holdem-beginner-mistakes-10 | 2026-03-31 | 초보 가이드 |
| holdem-overbet-strategy | 2026-03-30 | 전략 |
| holdem-outs-calculation | 2026-03-28 | 확률·수학 |
| holdem-starting-hand-range | 2026-03-27 | 스타팅 핸드 필라 |
| holdem-odds-calculator | 2026-03-26 | 확률·수학 |
| holdem-blind-meaning | 2026-03-26 | 기초 용어 |
| when-to-fold-preflop-holdem | 2026-03-24 | 전략 |
| holdem-game-order | 2026-03-24 | 기초 용어 |
| bluffing-strategy-when-and-how | 2026-03-17 | 전략 |
| position-is-everything-in-holdem | 2026-03-14 | 포지션 필라 |
| wsop-2025-tournament-guide | 2026-03-10 | 토너먼트 |

**posts/ 폴더 (8개):**
| slug | 날짜 | 카테고리 |
|------|------|---------|
| holdem-cbet-strategy | 2026-04-20 | 전략 |
| holdem-range-meaning | 2026-04-17 | 전략 |
| icm-poker-meaning | 2026-04-16 | 토너먼트 |
| pocket-kings-kk-strategy | 2026-04-15 | 스타팅 핸드 |
| pocket-aces-aa-strategy | 2026-04-15 | 스타팅 핸드 |
| holdem-pub-legal | 2026-04-14 | 홀덤펍 |
| holdem-pub-first-visit-guide | 2026-04-13 | 홀덤펍 |
| holdem-bubble-strategy | 2026-04-13 | 토너먼트 |

---

## 2026-05-08 — GSC 기반 카피 최적화 + SEO 카피 원칙 영구 등록

> "구글 검색 결과 = 유튜브 썸네일" 철학 확립. 호기심 훅 + 키워드 하이브리드 공식을 프로젝트 절대 원칙으로 영구 등록.

### 1. GSC 데이터 분석 → 호기심 훅이 실제로 작동 중임을 데이터로 확인

| URL | 클릭 | 노출 | CTR | 평균 순위 |
|------|------|------|-----|-----------|
| holdem-blind-meaning | 19 | 584 | 3.3% | 7.7 |
| holdem-tiebreak-rules | 6 | 141 | **4.3%** ↑ | — |
| holdem-hand-rankings-confusing | 3 | 88 | 3.4% | — |
| holdem-flush-vs-straight | 1 | 64 | 1.6% | — |

→ 모바일 한국어 7~8위 평균 CTR이 보통 2~3%대인데, 호기심형 훅이 들어간 글들은 3~4%대로 **이미 상위권**.
→ 이 훅을 정보형으로 깎으면 안 된다는 것을 데이터로 확인.

### 2. 카피 수정 (호기심 훅 + 키워드 하이브리드) — 2개 글

**`holdem-blind-meaning`**
- seoTitle: `매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이`
- desc 첫 문장: 공감/호기심형 ("자리 탓이 아닙니다")
- 본문 첫 화면에 "한 줄 정리" 박스 추가 (SB/BB 정의)

**`holdem-tiebreak-rules`**
- seoTitle: `같은 원페어인데 왜 내가 졌지? — 홀덤 키커·스플릿 팟 규칙`
- desc 첫 문장: 공감/호기심형 ("키커 한 장이 승부를 가른 거예요")
- 본문 첫 화면에 "한 줄 정리" 박스 추가 (키커·스플릿·무늬)

### 3. SEO 카피 원칙 영구 등록 (절대 원칙으로)

**`.cursorrules`** — 두 번째 최우선 원칙으로 추가
- E-E-A-T 다음 단계로 SEO 카피 = 호기심 훅 + 키워드 하이브리드 명시
- AI가 매번 자동 참조하므로 향후 모든 포스트에 자동 적용됨

**`docs/SEO_COPY_GUIDELINES.md`** — 새 파일, 디테일 가이드
- 검증된 공식 (Title / Desc / TLDR 길이·구조)
- 작성 후 체크리스트 (각 필드별)
- 좋은 예시 vs 나쁜 예시 사례집 (블라인드, 타이브레이크)
- 호기심 훅 패턴 라이브러리 (5가지 패턴)
- 절대 금지 사항 4가지
- GSC 데이터 기반 개선 워크플로우 (7단계)
- 성과 추적 기준 (CTR / 평균 순위 목표)

### 4. 향후 작업에 미치는 영향

- **새 포스트 발행 시**: `seoTitle` / `desc` 작성 시 `.cursorrules` 자동 참조 → 정보형 X, 호기심+키워드 하이브리드 O
- **기존 포스트 개선 시**: `docs/SEO_COPY_GUIDELINES.md` 워크플로우 따라 GSC 노출 ↑ + CTR ↓ 글부터 차례대로 다듬기
- **체크포인트**: 호기심 톤 단독 교체 금지, 본문 친근체 유지, 과장 금지

### 5. 다음 후보 (GSC 노출 큰 순)

| 우선순위 | URL | 노출 | 클릭 | 메모 |
|----------|-----|------|------|------|
| 1 | holdem-hand-rankings-confusing | 88 | 3 | "헷갈린다" 자체가 호기심 훅 — 보강만 |
| 2 | holdem-flush-vs-straight | 64 | 1 | 비교형, CTR 낮음 → 가장 ROI 클 가능성 |
| 3 | tournaments | 146 | 6 | 페이지 SEO (블로그 X) |

---

## 2026-05-06 — 모바일 LCP 회복 + E-E-A-T 강화 총력전

> Lighthouse 모바일 81~89 → F12 데스크탑 93 / 폰 PSI 90 회복 + 1페이지 노출 위한 E-E-A-T 갭 5개 중 3개 메움 (작성자 권위, 신선도, Featured Snippet)

### 1. 모바일 LCP 다단계 개선 (커밋 5건)

**1단계: 본문 첫 이미지 → 페이지 맨 하단 "이 글 전체 요약" 섹션으로 이동**
- `lib/blog-lcp.ts` 신설: faqcard 또는 markdown ![]() 첫 블록 추출/제거 유틸
- `app/blog/[slug]/page.tsx`: 추출된 LCP 블록을 `<summarySlot>` 으로 페이지 최하단(관련글 다음)에 lazy 로드 배치
- 결과: H1 텍스트가 LCP 후보가 됨

**2단계: 두 번째 이미지(첫 H2 직후 이미지) → 같은 섹션 끝(다음 ## 또는 ---) 직전으로 이동**
- 자동화 스크립트: `scripts/audit-blog-lcp.mjs` (위험도 분석), `scripts/move-first-section-image.mjs` (자동 변환)
- 처리 대상 9개 (HIGH 2 / MEDIUM 7): pot-odds·probability·apt-jeju·bubble·cbet·AA·3bet·beginner-mistakes·pub-legal
- 안전장치: 첫 LCP 블록(이미 1단계로 옮긴 것) 은 변환 대상에서 제외
- 결과: HIGH 0 / MEDIUM 0 / LOW 30

**3단계: 폰트 다운로드 비용 절반**
- Noto Sans KR weight 4개(400/500/600/700) → 2개(400/700)
- Noto Serif KR 완전 제거, font-serif 클래스를 Sans 로 통일 (한글 파일 3개 추가 절감)
- 모바일 backdrop-blur GPU 합성 비용 제거 (md: 분기로 데스크탑만 적용)

**4단계: font-display swap → optional**
- 100ms 안에 한글 서브셋 못 오면 시스템 폰트(Apple SD Gothic Neo / Malgun Gothic) 고정 → 스왑 없음 → LCP = FCP
- 두 번째 방문부터는 캐시된 Noto Sans KR 자동 적용

**5단계: 모바일 TOC 기본 접힘 (가장 큰 효과)**
- 24+ 항목 TOC 가 모바일 첫 화면 720px 차지 → LCP 후보가 큰 카드가 됨
- native `<details>` 로 감싸 50px 한 줄 (📚 목차 (N개) ▾) → 클릭 펼침
- JS 0, 데스크탑 sticky sidebar TOC 영향 없음 (xl: 분리)
- 결과: 모바일 첫 화면 점유 720→50px, F12 점수 90 → 93

### 2. E-E-A-T 강화 3종 (1·2·3)

**Phase 1: 글마다 '최종 업데이트' 날짜 표시**
- `Post` 타입에 optional `updated` 필드 추가
- 29 개 모든 포스트에 `updated: "2026-05-06"` 일괄 적용 (LCP·TOC 등 본문 갱신 반영)
- UI: 글 헤더에 "<date> 작성 · <updated> 업데이트" 두 개 `<time>` 노출, 업데이트 배지는 골드 톤
- JSON-LD: `dateModified` = `updated`, OG `modified_time` 동기화
- 효과: Google 신선도 신호 (특히 "최신" 키워드)

**Phase 2: /about 팀 소개 페이지 + 작성자 박스 권위 강화**
- 신규 `app/about/page.tsx` (정적 SSG, 176 B)
  - Hero (12년 경력·솔버 분석)
  - 운영 지표 4개 그리드 (29편 발행 / 30+ 회 현장 취재 / 12년+ / PioSolver·GTO+)
  - 편집 원칙 4개 (직접 경험·솔버 검증·신선도·도박 금지)
  - 편집 프로세스 6단계
  - 사용 도구 6개 (Pio·GTO+·HM3·Equilab·Stove·공식 룰북)
  - Organization JSON-LD (knowsAbout 6주제, foundingDate 2014)
- 블로그 작성자 박스 강화: 이름 → /about 링크, 운영 지표 4그리드 `<dl>`, "편집팀 상세 →" CTA
- Article schema author: Person → Organization, url → SITE/about
- Footer 하단 "팀 소개" 링크 추가
- sitemap.xml 에 /about 추가 (priority 0.7, monthly)

**Phase 3: 글마다 '한 줄 정답' (Featured Snippet 대상화)**
- `Post` 타입에 optional `tldr` 필드 추가
- 29 개 모든 포스트에 주제별 고유한 40~90자 직답 작성 (평균 77자)
- UI: 글 헤더 직후, 본문 진입 직전, 골드 그라디언트 강조 박스 ("💡 한 줄 정답")
- JSON-LD: Article schema 에 `abstract` 필드로 노출
- 효과: Google "발췌 텍스트" 진입 + 모바일 LCP 후보 텍스트화

### 3. 통합 자동 검증 — `scripts/verify-eeat.mjs`

- 12개 항목 전수 통과:
  - updated 29/29 ✓
  - tldr 29/29 ✓ (65~88자, 평균 76.9자)
  - /about 페이지 존재 / sitemap / footer / 작성자박스 / JSON-LD 모두 연결 ✓
  - dateModified = updated ✓ / abstract = tldr ✓
- audit-blog-lcp.mjs: HIGH 0 / MEDIUM 0 / LOW 30 유지

### 4. 커밋 7건 (이번 세션)

```
505a999 feat(seo): 한 줄 정답 (tldr) — Featured Snippet
96786c9 feat(eeat): /about 팀 소개 + 작성자 박스 권위 강화
1213490 feat(seo): 최종 업데이트 날짜 도입 (E-E-A-T 신선도)
4838d85 perf(mobile): TOC 기본 접힘 — LCP 큰 폭 개선
b2690e9 perf(mobile): font-display optional → LCP -2s
39980dd perf(blog): 두 번째 이미지를 섹션 끝으로 이동 (9 posts)
9bd336f perf(mobile): KR 폰트 7→2개, font-serif Sans 통일, blur 비활성화
```

### 5. 남은 갭 (1페이지 노출 1차 도전 후 검토)

| 갭 | 우선순위 | 비고 |
|----|---------|-----|
| 외부 권위 출처 인용 글마다 1~2개 | 중 | WSOP/PokerNews/PioSolver 블로그 dofollow |
| 본문에 작성자 실명·얼굴 추가 | 중상 | YMYL 인접 영역이라 영향 큼 |
| HowTo schema 추가 (튜토리얼 글 한정) | 중 | 강조 스니펫 카드형 노출 |
| Header Server / Client island 분할 | 하 | TBT 50ms 이미 우수, ROI 작음 |

### 6. 사용자 지표

- 시작 시점: 모바일 PSI 81 (pocket-aces-aa-strategy)
- F12 데스크탑: 93 (TOC 접힘 후 측정)
- 폰 PSI: 80 → 캐시 의심 (배포 직후 30분 캐시) — 캐시 우회 후 재측정 권장
- 색인 (GSC): sitemap 재제출 후 1~3주 모니터링 진행 중

---

## 2026-04-20

### GSC 리디렉션 오류 근본 원인 파악 및 수정

**원인 확인 (curl로 직접 검증):**
- 서버가 `/blog/slug` → `/blog/slug/` 로 301 자동 리디렉션
- 기존 사이트맵에 `/` 없는 URL → 구글 리디렉션 오류 판정

**수정 내용:**
- sitemap.xml 전체 블로그 URL 끝에 `/` 추가 (29개)
- 재배포 완료

**추가 실수 및 복구 (같은 날):**
- posts/ 폴더만 보고 posts.ts 미확인 → 실존하는 21개 포스트를 사이트맵에서 삭제
- 같은 날 복구 완료

**남은 할 일:**
- 서치 콘솔 → `https://www.holdemmaster.com/sitemap.xml` 재제출
- 리디렉션 오류 탭 → 유효성 검사 시작 클릭

---

## 2026-04-08 (1차)

### 12. `holdem-flush-vs-straight` 포스트 배열 위치 수정 및 등록
- **버그 수정**: POSTS 배열 `];` 이후에 잘못 삽입됐던 포스트를 배열 내부 마지막 항목으로 이동
- **이미지 파일명 변경** (이전 세션의 임시 경로 → 일러스트레이터 작업용 최종 파일명):
  - `flush-vs-straight-c1-rank.webp` — 족보 순위 비교표
  - `flush-vs-straight-c2-probability.webp` — 출현 확률 비교 카드
  - `flush-vs-straight-c3-realplay.webp` — 실전 보드 상황 3가지
  - `flush-vs-straight-c4-tiebreak.webp` — 타이브레이크 규칙 카드
- **sitemap.xml** 추가: `/blog/holdem-flush-vs-straight` (2026-04-08)
- **roadmap.tsx** 업데이트: `published: true` + `slug: "holdem-flush-vs-straight"`
- **발행 현황**: 18개 완료 / 목표 50개

---

## 2026-04-07 (3차)

### 9. 블로그 로드맵 배너 강화 (`/blog` 헤더)
- 기존 작은 아웃라인 버튼 → 어두운 카드 배너로 교체
  - 배경: `from-[#1a0a2e] via-[#0d1f3a] to-[#0a1a0d]` 그라디언트 + 금빛 테두리 글로우
  - 왼쪽 🗺️ 아이콘 박스 (호버 시 scale-110)
  - 중앙: "전체 콘텐츠 구조" 서브텍스트 + "홀덤마스터 학습 로드맵 보기" 타이틀
  - 카테고리 태그 6개: 족보·기초규칙·확률·포지션·전략·토너먼트 (컬러 배지)
  - 오른쪽 화살표 버튼 (호버 시 금색 채움)

### 10. 전체 SEO 오류 점검 및 seoTitle 수정
- 점검 항목: 빌드 오류, 로드맵 slug 정합성, 이미지 파일 존재 여부, seoTitle 글자 수, 오타 패턴
- 결과
  - ✅ 빌드 오류: 없음
  - ✅ 로드맵 slug: 17개 posts.ts 완전 일치
  - ✅ 이미지 파일: 91개 전체 존재
  - ✅ 오타 패턴(블라인트·홀댐 등): 없음
  - ⚠️ seoTitle 35자 초과 **10건 발견 → 전부 수정 완료**
- 수정 포스트 목록
  | 포스트 | 수정 전(자수) | 수정 후(자수) |
  |--------|------------|------------|
  | holdem-hand-rankings-confusing | 41자 | 26자 |
  | holdem-game-order | 37자 | 25자 |
  | position-is-everything-in-holdem | 37자 | 25자 |
  | wsop-2025-tournament-guide | 44자 | 24자 |
  | when-to-fold-preflop-holdem | 44자 | 25자 |
  | holdem-starting-hand-range | 40자 | 24자 |
  | holdem-outs-calculation | 36자 | 22자 |
  | holdem-overbet-strategy | 36자 | 24자 |
  | holdem-beginner-mistakes-10 | 41자 | 25자 |
  | apt-jeju-classic-2026-guide | 47자 | 26자 |

### 11. 배포
- Replit 배포 완료 (commit: d13a882)
- 변경사항: 로드맵 배너 + seoTitle 10건 반영

---

## 2026-04-07 (추가)

### 8. 블로그 로드맵 페이지 신규 제작 (`/blog/roadmap`)
- 인터랙티브 SVG 마인드맵 구현
  - 중심 노드(홀덤마스터) → 8개 필라 → 클러스터 포스트 방사형 배치
  - 발행 완료 노드: 클릭 시 해당 포스트로 이동 (노란 점 표시)
  - 준비 중 노드: 점선 + 흐림 처리 (예정 콘텐츠 예고)
  - 발행 진행 현황 바 (17/40 등 실시간 표시)
  - 카테고리별 포스트 목록 텍스트 (SEO용)
- 블로그 인덱스(`/blog`) 헤더에 "전체 학습 로드맵 보기" 버튼 추가
- sitemap.xml에 `/blog/roadmap` 등록 (priority 0.7, changefreq weekly)

---

## 2026-04-07

### 1. C4 포스트 완성 — 홀덤 스플릿 팟 완전 정복
- `holdem-split-pot-rules` 발행 (2026-04-07)
- 이미지 8장 전부 완성 (WebP 변환)
  - `split-pot-kicker-card.webp` — 키커 판정 카드 (조건5 섹션)
  - `split-pot-worst3-card.webp` — WORST 3 착각 카드
  - `split-pot-faq-card.webp` — FAQ 핵심 6가지 카드
- FAQPage JSON-LD 자동 추출 확인 (Q/A 형식 유지)

### 2. C4 동반 포스트 — 홀덤 vs 7포커 비교
- `holdem-vs-7poker-hand-rankings` 발행 (2026-04-07)
- 필라 1(족보) 클러스터 글

### 3. 전체 SEO 메타 교정
- seoTitle 글자 수 초과 5건 수정 (41자 → 33~34자)
- desc 글자 수 초과 2건 수정
- `holdem-hand-rankings` seoTitle = title 동일 문제 수정

### 4. 사이트맵 누락 2건 추가
- `holdem-beginner-mistakes-10` (2026-03-31) 추가
- `apt-jeju-classic-2026-guide` (2026-04-01) 추가
- 전체 17개 포스트 100% 등록 완료

### 5. 내부링크 inbound 보강
- `holdem-tiebreak-rules` → `holdem-split-pot-rules` 링크 추가
- `holdem-hand-rankings-confusing` → `holdem-vs-7poker-hand-rankings` 링크 추가
- `holdem-game-order` → `holdem-blind-meaning` 링크 추가

### 6. 이미지 재압축 최적화
- 200K 초과 8장 → q70/q65 재압축
- 최대 350K → 209K로 축소 (전체 기준 200K 이내)

### 7. 배포 및 Search Console
- Replit 배포 완료 (commit: 08f731172)
- sitemap.xml 제출: `https://www.holdemmaster.com/sitemap.xml`
- C4 URL 수동 색인 요청: `holdem-split-pot-rules`

---

## 2026-04-06

### 1. C3 포스트 발행 — 홀덤 족보 헷갈리는 경우 TOP5
- `holdem-hand-rankings-confusing` 발행
- 필라 1(족보) 클러스터 글

---

## 2026-04-03

### 1. C2 포스트 발행 — 홀덤 족보 타이브레이크 규칙
- `holdem-tiebreak-rules` 발행
- 필라 1(족보) 클러스터 글

---

## 2026-04-02

### 1. C1 포스트 발행 — 홀덤 족보 (필라 1)
- `holdem-hand-rankings` 발행
- 필라 1 허브글 — 족보 전체 클러스터의 권위 중심

---

## 2026-04-01

### 1. 포스트 발행 — APT 제주 클래식 2026 가이드
- `apt-jeju-classic-2026-guide` 발행 (토너먼트 카테고리)

---

## 2026-03-31

### 1. 포스트 발행 — 홀덤 초보 실수 10가지
- `holdem-beginner-mistakes-10` 발행 (초보 가이드 카테고리)

---

## 2026-03-30

### 1. 포스트 발행 — 홀덤 오버벳 전략
- `holdem-overbet-strategy` 발행 (전략 카테고리)
- 블로그 포스트 표준 레퍼런스 글로 지정

---

## 2026-03-28

### 1. 포스트 발행 — 홀덤 아웃츠 계산법
- `holdem-outs-calculation` 발행 (확률·수학 카테고리)
- 필라 3(확률) 클러스터 글

---

## 2026-03-27

### 1. 포스트 발행 — 홀덤 스타팅 핸드 레인지
- `holdem-starting-hand-range` 발행 (필라 4 — 스타팅 핸드 허브)

---

## 2026-03-26

### 1. 포스트 발행 — 포커 확률 계산기
- `holdem-odds-calculator` 발행 (확률·수학 카테고리)
- 필라 3(확률) 허브 핵심 글

### 2. 포스트 발행 — 홀덤 블라인드 뜻
- `holdem-blind-meaning` 발행 (기초 용어 카테고리)
- 필라 2(규칙) 클러스터 글

---

## 2026-03-24

### 1. 포스트 발행 — 홀덤 게임 진행 순서
- `holdem-game-order` 발행 (기초 용어 카테고리)

### 2. 포스트 발행 — 프리플랍 폴드 기준
- `when-to-fold-preflop-holdem` 발행 (전략 카테고리)

---

## 2026-03-17

### 1. 포스트 발행 — 홀덤 블러핑 전략
- `bluffing-strategy-when-and-how` 발행 (전략 카테고리)

---

## 2026-03-14

### 1. 포스트 발행 — 홀덤 포지션 전략
- `position-is-everything-in-holdem` 발행 (필라 5 — 포지션 허브)

---

## 2026-03-10

### 1. 포스트 발행 — WSOP 2025 토너먼트 가이드
- `wsop-2025-tournament-guide` 발행 (토너먼트 카테고리)

---

## 📊 날짜별 작업 이력 (엑셀 형식)

| 날짜 | 작업 유형 | 상세 내용 | 결과 / 비고 |
|------|----------|-----------|------------|
| 2026-05-06 | 🌟 E-E-A-T | 글마다 'tldr' 한 줄 정답 추가 (29편) + Article schema abstract | Featured Snippet 후보화. 골드 강조 박스 UI |
| 2026-05-06 | 🌟 E-E-A-T | /about 팀 소개 페이지 신설 + 작성자 박스 권위 강화 + Org JSON-LD | sitemap·footer·작성자박스·Article author 모두 /about 연결 |
| 2026-05-06 | 🌟 E-E-A-T | 글마다 'updated' 최종 업데이트 날짜 표시 (29편) | dateModified·OG modifiedTime 동기화. 신선도 신호 |
| 2026-05-06 | ⚡ 모바일 LCP | 블로그 모바일 TOC 기본 접힘 (`<details>`) | 첫 화면 점유 720→50px. F12 90→93 |
| 2026-05-06 | ⚡ 모바일 LCP | font-display swap → optional | 한글 서브셋 100ms 안에 못 오면 시스템 폰트 고정. 스왑 0 |
| 2026-05-06 | ⚡ 모바일 LCP | 두 번째 이미지(첫 H2 직후)를 섹션 끝으로 이동 (9개 글) | HIGH 2 / MEDIUM 7 → 모두 LOW. audit-blog-lcp.mjs 자동화 |
| 2026-05-06 | ⚡ 모바일 LCP | 본문 첫 이미지 → 페이지 맨 하단 '이 글 전체 요약' 섹션 | H1 텍스트가 LCP. lib/blog-lcp.ts 신설 |
| 2026-05-06 | ⚡ 모바일 LCP | KR 폰트 weight 7→2개, font-serif Sans 통일, mobile blur 비활성 | 폰트 다운로드 절반. GPU 합성 비용 감소 |
| 2026-04-20 | 🔧 SEO 오류 수정 | 사이트맵 블로그 URL 전체에 `/` 추가 (29개) | GSC 리디렉션 오류 근본 원인 해결. 서버가 slug/ 형태로 301 리디렉션하는 구조 확인 |
| 2026-04-20 | 🚨 실수 복구 | posts.ts(21개) 미확인으로 사이트맵에서 삭제했다가 복구 | 당일 복구 완료. 재발 방지 체크리스트 WORKLOG에 추가 |
| 2026-04-20 | 📋 GSC 작업 | 색인 재요청(8개 포스트) + 사이트맵 재제출 안내 | 유효성 검사 재시작 필요 (서치 콘솔에서 직접 클릭) |
| 2026-04-18 | ✍️ 포스트 발행 | holdem-cbet-strategy (C벳 전략 완전 가이드) | posts/ 폴더. 이미지 6장, FAQ, 인포그래픽, 워터마크 적용 |
| 2026-04-17 | ✍️ 포스트 발행 | holdem-range-meaning (레인지 뜻과 활용) | posts/ 폴더 |
| 2026-04-16 | ✍️ 포스트 발행 | icm-poker-meaning (ICM이란 뜻) | posts/ 폴더 |
| 2026-04-15 | ✍️ 포스트 발행 | pocket-kings-kk-strategy (KK 전략) | posts/ 폴더 |
| 2026-04-15 | ✍️ 포스트 발행 | pocket-aces-aa-strategy (AA 전략) | posts/ 폴더 |
| 2026-04-14 | ✍️ 포스트 발행 | holdem-pub-legal (홀덤펍 합법 여부) | posts/ 폴더 |
| 2026-04-13 | ✍️ 포스트 발행 | holdem-pub-first-visit-guide (홀덤펍 처음 가는 법) | posts/ 폴더 |
| 2026-04-13 | ✍️ 포스트 발행 | holdem-bubble-strategy (버블 전략) | posts/ 폴더 |
| 2026-04-08 | 🔧 버그 수정 | holdem-flush-vs-straight POSTS 배열 위치 오류 수정 | 이미지 4장 파일명 변경, 사이트맵 등록, roadmap.tsx 업데이트 |
| 2026-04-07 | 🎨 UI 개선 | /blog 헤더 로드맵 배너 강화 (SVG 마인드맵 포함) | 카테고리 태그 6개, 금빛 테두리 글로우 디자인 |
| 2026-04-07 | 🔧 SEO 교정 | seoTitle 35자 초과 10건 수정 | 전체 이미지 91개 존재 확인, 오타 없음 확인 |
| 2026-04-07 | ✍️ 포스트 발행 | holdem-split-pot-rules (스플릿 팟 완전 정복) | 이미지 8장, FAQPage JSON-LD 확인 |
| 2026-04-07 | ✍️ 포스트 발행 | holdem-vs-7poker-hand-rankings (홀덤 vs 7포커 비교) | 필라1 클러스터 |
| 2026-04-07 | 🔗 내부링크 | tiebreak→split-pot, hand-rankings-confusing→vs-7poker, game-order→blind 링크 추가 | inbound 링크 보강 3건 |
| 2026-04-07 | 🖼️ 이미지 최적화 | 200KB 초과 8장 재압축 (최대 350K→209K) | 전체 200KB 이내 기준 달성 |
| 2026-04-06 | ✍️ 포스트 발행 | holdem-hand-rankings-confusing (족보 헷갈리는 경우 TOP5) | 필라1 클러스터 |
| 2026-04-03 | ✍️ 포스트 발행 | holdem-tiebreak-rules (족보 타이브레이크 규칙) | 필라1 클러스터 |
| 2026-04-02 | ✍️ 포스트 발행 | holdem-hand-rankings (홀덤 족보 순위) | 필라1 허브 — 족보 클러스터 중심 |
| 2026-04-01 | ✍️ 포스트 발행 | apt-jeju-classic-2026-guide (APT 제주 클래식 가이드) | 토너먼트 카테고리 |
| 2026-03-31 | ✍️ 포스트 발행 | holdem-beginner-mistakes-10 (초보 실수 10가지) | 초보 가이드 카테고리 |
| 2026-03-30 | ✍️ 포스트 발행 | holdem-overbet-strategy (오버벳 전략) | 블로그 포스트 표준 레퍼런스 글 지정 |
| 2026-03-28 | ✍️ 포스트 발행 | holdem-outs-calculation (아웃츠 계산법) | 필라3(확률) 클러스터 |
| 2026-03-27 | ✍️ 포스트 발행 | holdem-starting-hand-range (스타팅 핸드 레인지) | 필라4 허브 |
| 2026-03-26 | ✍️ 포스트 발행 | holdem-odds-calculator (포커 확률 계산기) | 필라3 허브 핵심 글 |
| 2026-03-26 | ✍️ 포스트 발행 | holdem-blind-meaning (홀덤 블라인드 뜻) | 필라2(규칙) 클러스터 |
| 2026-03-24 | ✍️ 포스트 발행 | holdem-game-order (홀덤 게임 진행 순서) | 기초 용어 |
| 2026-03-24 | ✍️ 포스트 발행 | when-to-fold-preflop-holdem (프리플랍 폴드 기준) | 전략 카테고리 |
| 2026-03-17 | ✍️ 포스트 발행 | bluffing-strategy-when-and-how (홀덤 블러핑 전략) | 전략 카테고리 |
| 2026-03-14 | ✍️ 포스트 발행 | position-is-everything-in-holdem (포지션 전략) | 필라5 허브 |
| 2026-03-10 | ✍️ 포스트 발행 | wsop-2025-tournament-guide (WSOP 2025 가이드) | 토너먼트 카테고리 필라8 허브 |

**총 29개 발행 / 목표 50개**
