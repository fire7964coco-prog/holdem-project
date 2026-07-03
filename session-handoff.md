# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-07-03 (Claude Code 세션 — **EN Phase0 + Odds 허브 `holdem-probability` + 클러스터 `holdem-pot-odds` 발행. 클릭강화 UX(인라인 썸네일 링크·:::readnext 박스) 신설·규칙화**. 다음 = Odds 클러스터 계속(outs·4-2룰) or GSC 색인요청)

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

### ★0순위 (다음 세션 시작 작업) — EN 6필라 발행 (Phase 0 완료, Phase 1 진행)
**진행상태**:
- ✅ **Phase 0 완료** — `holdem-hand-rankings` 정확매칭 FAQ 10개 추가·배포(e06ed4c). ~17k 볼륨 흡수.
- ✅ **Phase 1 Odds 허브 발행** — `holdem-probability` 종합 플래그십. 확률 35개 검산. 배포 bcad393.
- ✅ **Odds 클러스터 #1 발행** — `holdem-pot-odds`("How to Calculate Pot Odds"). 벳사이즈 치트시트·3개념구분·4-2룰·실전핸드. §13 18개 검산(턴 팟오즈 오류1 정정). 허브 양방향링크. 배포 ac3a93b.
**다음 착수 후보(순서 계속)**: ① **Odds 클러스터 계속** — `holdem-outs`(count outs/outs chart)·`holdem-rule-of-2-and-4`·`holdem-drawing-odds`(flush/straight draw 확률) → 필라3 토픽오소리티 완성 ② 그 후 다른 필라(Glossary straddle 2900 / Strategy limping 590). **토픽오소리티 원칙상 Odds 클러스터 먼저 두껍게.**
**즉시 할 일**: GSC 색인요청 `/en/blog/holdem-pot-odds`·`/en/blog/holdem-probability`·`/en/blog/holdem-hand-rankings`.
**🧹 기존 정리 과제(발견 2026-07-03)**: EN desc>160자 **7개 기존글** 트리밍 필요(CTR 훅+키워드 유지하며) — positions 255·hand-rankings 210·tournament 205·blind-meaning 176·all-in-rules 164·reading-the-board 162·showdown-rules 162. (오늘 신규 probability·pot-odds는 정정 완료)
**✅ EN 전체 클릭강화 적용 완료(2026-07-03)**: 22개 EN 글 전부 인라인 썸네일 링크 + FAQ앞 :::readnext 2카드. 신규글은 이 패턴 기본 포함(posting.mdc 규칙).
**적용 중인 신규 규칙**: 모든 신규글 = 인라인 썸네일 링크(가장 연관글 1~2개, `"thumb:이미지"`) + FAQ앞 `:::readnext[라벨]` 2카드 박스. posting.mdc·memory 문서화.
로드맵 상세: `docs/keyword-bank/00-SYNTHESIS-roadmap.md`.

**먼저 읽을 문서 3개 (순서대로)**:
1. `docs/en-blog-pillar-cluster-map.md` — EN 6필라 구조 마스터 맵
2. `docs/keyword-bank/00-SYNTHESIS-roadmap.md` — 데이터 기반 발행 우선순위 (여기가 실행 순서)
3. `docs/keyword-bank/en-*.md` (6개) — 시드별 키워드+승산(LDA/weak-spot) 상세

**확정된 EN 6필라** (KO 복제 X, EN 시장 독립설계, pub-guide 제외):
1 How to Play(`texas-holdem-rules-for-beginners`) · 2 Hand Rankings(`holdem-hand-rankings`) · 3 Odds&Math(`holdem-probability` 신규) · 4 Strategy(`holdem-strategy` 신규) · 5 Tournament(`holdem-tournament`) · 6 Glossary(`holdem-glossary` 신규). slug은 12언어 공유(hreflang)라 확정=변경금지.

**목표(재확인)**: **롱테일 키워드 구글 1등**이 전부. 메인키워드 정면승부 X. 커뮤니티 전환은 설계 드라이버 아님(리텐션용). EN 완성 후 그 구조로 12언어 번역.

### 🛠️ 작업 워크플로우 = "필라 단위 스프린트" (사용자가 이 방식 선호 — 새 세션에서 다시 설명 후 착수)
**핵심: 작업을 성격별로 쪼갠다.**
- **리서치(SERP·PAA)** = 서브에이전트 병렬 (or lowfruits 데이터 활용) — 이미 키워드뱅크로 1차 완료
- **초안 작성** = 내가(Claude) 메인에서 **1편씩** (EN=마스터라 오류가 12언어 전파 → 병렬 금지, 품질 집중)
- **검증(§13 핸드검산·팩트체크)** = 적대적 서브에이전트
- **이미지** = 커서 워크플로우(프롬프트+위치는 Claude가, 생성·저장은 커서)

**루프**: [A]리서치(키워드뱅크 활용) → [B]사용자 방향 게이트(각도 승인, 5분) → [C]초안 1편(경험담+§13검산+내부링크 첫링크=필라) → [D]빌드·커밋·GSC 소배치 → [E]맵§7·WORKLOG 갱신 → 다음. 발행은 2~3편씩.
**사용자 게이트**: 방향 승인 + 포커사실 검수(언어중립). 매 글 **한국어 2~3줄 요약** 첨부.

### 첫 착수 = Phase 0 (기존 글 FAQ 강화, 최고 ROI)
`holdem-hand-rankings`에 데이터 매칭 FAQ 강화부터: `what is a flush`(5400)·`full house`(4400)·`straight`(2900) 정의 + `what beats a X` FAQ + 룰 FAQ(3 pairs·ace as 1 등). 합 ~17k 볼륨, 기존 랭크+GSC권위 레버리지. → 그다음 Phase 1(Odds 확률차트 신규 LDA11, Strategy limping LDA8, Glossary straddle/rake/fish…). 상세는 00-SYNTHESIS-roadmap.md.

**⚠️ lowfruits 후속 수확 남음**(다음 라운드): `pot odds *`·`c bet *`·`poker bluff *`·`poker cash game *`(Cash Game 7필라 후보). 승산 판정 = LDA≤20 매우좋음/20~35 좋음.

**시작 전 반드시**: CLAUDE.md → session-handoff → WORKLOG → posting.mdc → 위 3개 문서.

### 1순위 — 영어 포스트 SEO 강화 (20개 1차 강화 완료)
- 대상: `lib/posts-en/` 20개. GSC상 "how to play texas holdem / rules for dummies" 클러스터가 노출 많고 순위 페이지5~8
- ⚠️ 참고: 해당 EN 룰 글 콘텐츠는 이미 우수 → 문제는 **도메인 권위**(대형 경쟁사). 콘텐츠 추가보다 EN SERP·PAA 재조사·롱테일 커버·내부링크·장기 백링크 관점 접근
- 규칙: posting.mdc(다국어 현지화·EN 롱테일 클러스터링) + memory `gsc-28day-snapshot-2026-07` 확인 후 시작
- **✅ 완료(2026-07-02)**: `texas-holdem-rules-for-beginners`(H2 2개·내부링크 3개·FAQ 3개), `holdem-hand-rankings`(§13 스트플 오류 정정·slash·FAQ 2개), `holdem-game-order`(H2 who-acts-first·내부링크 5개), `holdem-positions`(이미지 추가·slash), `holdem-betting-actions`(§13 min-raise·slash 5·링크 3·이미지·FAQ limp), `holdem-flush-vs-straight`(§13 SF 과잉주장·링크·FAQ), `holdem-showdown-rules`(seoTitle CTR·slash 4·링크·FAQ), `holdem-all-in-rules`(CTR·본문링크 3·slash 3, 룰오류無), `holdem-starting-hands-chart`(§13 AK에쿼티·rangechart·slash 5·커서이미지2), `holdem-reading-the-board`(§13 플러시개수·링크2·slash 3), `holdem-tiebreak-rules`(§13 전체검산·이미지3점검·내부링크 starting-hands-chart 정밀화·롱테일 FAQ 2개), `holdem-split-pot-rules`(SERP·PAA 조사·§13 원페어예시 정정·토너먼트chop 분화/전략/odd chip 롱테일 FAQ 3개), `holdem-blind-meaning`(핵심키워드·헤드업/미스드 블라인드 신규섹션·FAQ 2개·desc CTR·속도점검 통과), `holdem-tournament-vs-cash-game`(토너먼트필라 내부링크+Related카드·PAA FAQ 3개 bubble정의/pros/hourly·속도통과), `holdem-tournament`(**필라**·트슬래시4제거·클러스터허브 Related 5카드·PAA FAQ 2개 latereg/중도이탈·히어로 재압축), `holdem-position-play`(**포지션필라**·현지화누수 ₩/holdempub 교정·early/mid/late FAQ·**본문이미지 2→4개** 오프닝레인지인포+블라인드스틸실사 커서생성), `ept-barcelona-2026-guide`(웹검증 전일정정확·과장표현정정·트슬래시·**본문이미지 2→4개** PowerPath인포+포트올림픽실사)
- ⚠️ **이미지 점검 필수화**: EN 강화 시 각 글 이미지 맥락 적합/깨짐/한글오버레이 여부 확인, 더 맞는 실사 있으면 교체·추가(사용자 지시). 주의: `holdem-small-blind-position`·`poker-table-reference` 등 다수 포지션 이미지가 **한국어 인포그래픽/사이트 스크린샷**이라 EN 글에 부적합. 언어중립 실사(예: `holdem-button-position-hero`, `tournament-table-action`)만 재사용
- **EN 20개 전부 1차 강화 완료** (룰·전략·필라·족보 클러스터 + 이벤트가이드 4개). 
- ✅ **트슬래시/raw-img lazy 전수점검 완료(2026-07-03)**: EN 20개 클린, **KO 9개파일 트슬래시 65개 정정**·masters-7th img lazy 1개. 이제 전 포스트 내부링크 슬래시 클린.
- **다음 후보**: ① (완료됨) ② GSC 색인 재요청(이벤트가이드는 "크롤됨-색인안됨" 상태 다수 — 오늘 개선 배포 후 재요청) ③ 신규 한국어 포스트(목표 50개, 현재 51개는 이미 달성상태 확인 필요) ④ APT 인천 8/16 후 자산화
- ⚠️ **이벤트가이드 = 웹 교차검증 필수(사용자 강조)**: wpt-australia에서 Championship 날짜 하루 오기(23→24) 웹검증으로 발견·정정. ept·korea-marathon도 날짜·바이인·일정 반드시 공식/복수소스 재확인. 마크다운 표 `||`/구분행 누락, 트슬래시도 함께 점검
- ⚠️ **이벤트가이드 속도 점검 필수**: apt-incheon에서 갤러리 raw `<img>`에 loading=lazy 누락 발견·수정. **다른 이벤트가이드도 raw `<img>` grep해서 lazy 없으면 추가**(마크다운 `![]()`는 renderMarkdown이 자동 lazy 처리하나 raw img는 미처리). 이미지 다수라 초기로드 속도에 직결
- ⚠️ **현지화 누수 점검 필수**: position-play에서 영어 글에 ₩(원화)·"holdem pub"(홀덤펍) 혼입 발견·교정함. **다른 EN 글도 강화 시 ₩·홀덤펍·한국식표현 grep 점검**(글로벌 EN 독자용). 도입부 실경험담의 'local poker club' 수준은 E-E-A-T로 유지 OK
- ⚠️ **속도점검 루틴화(2026-07-03 사용자 지시)**: 매 검수마다 성능도 확인 — 히어로 LCP ≤60KB·본문 총합 ≤200KB·치수 1200×675(CLS 방지)·keepImagesInBody로 priority 자동. sharp로 치수/용량 확인. 이 프로젝트 EN 이미지는 대부분 이미 30~45KB라 통상 통과하지만, 신규/교체 이미지는 반드시 확인
- 📌 **커서 이미지 워크플로 확립**: 프롬프트·삽입위치를 Claude가 주면 커서 에이전트가 이미지 생성+.ts 삽입(커밋/푸시는 Claude가, 커서는 파일저장까지만). 완료 예: starting-hands-chart 프리미엄핸드·약한에이스 2개(da080cc). ⚠️ 스타팅핸드 관련 기존 이미지는 전부 한국어라 EN 재사용 불가 → 필요시 커서 신규 방식 동일: EN SERP·PAA 재조사 → 롱테일 갭·내부링크·§13 검산·이미지 점검·**seoTitle/desc CTR 훅 평가**. ⚠️ 대부분 글에 trailing slash 링크가 남아있으니 검수 시 항상 제거. ⚠️ 족보 클러스터 글들에 "straight flush" 과잉주장 반복 패턴(§13 필수)

### 2순위 — GSC 색인 재요청
- 오늘 수정한 URL 재크롤링: 족보 4개·starting-hand-range·/hand-chart·/tournaments·apt-incheon·wsop-2025
- **EN 추가**: `/en/blog/texas-holdem-rules-for-beginners`, `/en/blog/holdem-hand-rankings`, `/en/blog/holdem-game-order`, `/en/blog/holdem-positions`, `/en/blog/holdem-betting-actions`, `/en/blog/holdem-flush-vs-straight`, `/en/blog/holdem-showdown-rules`, `/en/blog/holdem-all-in-rules`, `/en/blog/holdem-starting-hands-chart`, `/en/blog/holdem-reading-the-board`, `/en/blog/holdem-tiebreak-rules`, `/en/blog/holdem-split-pot-rules`, `/en/blog/holdem-blind-meaning`, `/en/blog/holdem-tournament-vs-cash-game`, `/en/blog/holdem-tournament`, `/en/blog/holdem-position-play`, `/en/blog/apt-incheon-2026-guide`, `/en/blog/wpt-australia-2026-guide`, `/en/blog/ept-barcelona-2026-guide`, `/en/blog/korea-poker-marathon-2026`

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
