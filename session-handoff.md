# 세션 인수인계 (Session Handoff)

> **사용법**: 작업 마칠 때 이 파일 업데이트 → 다음 세션 시작 시 AI가 읽고 바로 이어받음
> **2026-06-23부터 Claude Code로 이관**. 작업 시작 전 `CLAUDE.md` → `session-handoff.md` → `WORKLOG.md` 순서로 읽을 것.

---

## 📅 마지막 작업일
2026-06-23 (Cursor 세션 마지막 → Claude Code 이관)

---

## 🎯 지금 프로젝트가 어느 단계인가 (가장 중요)

**개발(Phase 0~6)은 끝났고, 지금은 "콘텐츠 품질 검수 + SEO 강화 + 포스트 추가" 운영 단계다.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인)은 전부 완성·배포됨 → 더 만들 것 없음
- 현재 핵심 작업은 **이미 발행된 글의 정확성·SEO·이미지 품질을 끌어올리는 것**과 **신규 포스트 발행(목표 50개)**
- 최근 며칠간 한 일이 전부 "기존 글 검수 → 오류 수정 → 재배포" 패턴이었음

### 현재 발행 현황 (정확한 수치)
- **한국어 블로그: 48개** (`lib/posts.ts` LEGACY 21개 + `lib/posts/` NEW_POSTS 27개)
- **영어 블로그: 20개** (`lib/posts-en/`)
- 그 외 다국어(ja/zh 등)는 핵심 3~4개만 번역됨
- 목표 한국어 50개 → **2개 남음**

> ⚠️ WORKLOG 과거 기록의 "총 포스트 29개"는 오래된 오기다. 빌드 sitemap이 authoritative: `npm run build` 실행 시 "48 blog posts + 55 intl posts" 출력됨.

---

## 🔥 이번 세션(2026-06-23)에 한 일

1. **기존 글 검수·수정 릴레이** (오타·사실오류·링크·이미지·날짜)
   - `holdem-tiebreak-rules`: WORST 실수 1 보드 예시 **사실 오류** 수정 (커밋 `5eb9d18`)
   - `holdem-3bet-strategy`: 이미지 최적화 + 플레이스홀더 이미지 2개 신규 제작 (커밋 `ccedbc4`, `4adc84d`)
   - `apt-incheon-2026-guide`: trailing slash·OnLive Day 오류·날짜 (커밋 `c3b55ae`)
   - `/tournaments`: trailing slash 16개·한게임 운영사 정정·날짜 (커밋 `9dcea52`)
   - `appt-korea-2026-guide`: trailing slash 7개 (커밋 `ceb8bec`)
   - EN `texas-holdem-rules-for-beginners`: SEO 강화 + 검수 (커밋 `71487b8`, `382f1d3`)

2. **이관 문서 정비**: `CLAUDE.md`·`session-handoff.md`·`WORKLOG.md` 최신화

### ★ 이번 세션 최대 교훈 (반드시 인수인계)
- 클로드코드가 `holdem-tiebreak-rules`의 "스플릿 팟" 예시를 검수하다 **사실 오류**를 잡아냄.
  - 잘못: `A♠2♦ vs K♠K♦, 보드 Q-J-10-9-8` → "스플릿"이라 썼지만, K가 보드에 연결돼 **K-Q-J-10-9 (K하이 스트레이트)** 가 되어 K-K 단독 승리였음.
  - 교정: 보드를 `10-9-8-7-6`으로 바꿔 A도 K도 연결 안 되게 → 진짜 스플릿.
- **근본 원인**: AI가 포커 핸드 예시를 "그럴듯한 패턴"으로 생성하고, 검수 시 베스트 5장을 직접 계산하지 않으면 이런 오류가 계속 새어나간다.
- **앞으로 규칙**: 핸드 예시가 나오면 무조건 `홀카드 + 보드 = 7장 → 베스트 5장 명시 조합 → 승자/스플릿 검산`. (CLAUDE.md §13에 프로토콜로 명문화함)

---

## 🚀 다음 세션 할 일 (우선순위 순)

1. **나머지 글 전수 검수** — 아직 검수 안 한 한국어/영어 포스트의 ① 포커 핸드 예시 사실오류 ② trailing slash(`/blog/x/` → `/blog/x`) ③ 깨진/플레이스홀더 이미지(1KB짜리) ④ 오래된 `updated` 날짜
   - 검수 우선순위: GSC 노출 높은 글 → 전략 글(핸드 예시 많음) → 토너먼트 가이드(날짜·운영사 정보)
2. **영어 SEO 강화 계속** — EN 포스트 GSC 분석 후 보강 (texas-holdem-rules 완료, 나머지 19개 남음)
3. **신규 포스트 2개 발행** — 한국어 50개 달성
4. (선택) 디자인 재검토 — 크림색 editorial 시도는 revert됨, 지금은 다크 피드 유지

---

## ⚠️ 절대 건드리지 말 것

- `app/blog/[slug]/` (한국어 블로그 라우트), `app/[locale]/blog/[slug]/` (다국어)
- `public/sitemap.xml` (빌드 시 자동 생성)
- 기존 포스트 slug (변경 시 SEO 초기화)
- `next.config.mjs`의 `trailingSlash: false` 설정
- `lib/posts.ts`의 기존 LEGACY 포스트 데이터

---

## 🔧 인프라 설정 (기억할 것)

- **Supabase 프로젝트**: holdemmaster-community (Free Plan, Seoul)
- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co` ← 오타 주의 (idikicm + oo)
- **테이블 7개**: profiles / posts / comments / likes / event_entries / translations / chat_messages
- **Realtime**: `chat_messages`만 활성화
- **Vercel 환경변수** (설정 완료): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **⚠️ `GEMINI_API_KEY`**: `.env.local`엔 있으나 **Vercel엔 미설정 → 프로덕션 번역 비활성**. 번역 켜려면 Vercel에 추가 후 Redeploy.
- **이메일 확인**: OFF (가입 즉시 로그인)

---

## 🗒️ 핵심 파일 위치

| 용도 | 경로 |
|------|------|
| 한국어 LEGACY 포스트 | `lib/posts.ts` |
| 한국어 NEW 포스트 | `lib/posts/[slug].ts` + `lib/posts/index.ts` (NEW_POSTS 배열) |
| 영어 포스트 | `lib/posts-en/[slug].ts` |
| 커뮤니티 클라이언트 | `app/community/community-client.tsx` |
| 실시간 채팅 | `app/community/chat-tab.tsx` |
| 이벤트 탭 | `app/community/event-tab.tsx` |
| 포스트카드 | `app/community/post-card.tsx` |
| 번역 API | `app/api/community/translate/route.ts` |
| DB 스키마 | `supabase/schema.sql` |
| 이미지 압축 스크립트 | `scripts/compress-images.mjs` |

---

## 💡 확정된 설계 결정사항

- SEO 경로(/blog, /en/blog 등)는 절대 변경 안 함
- DB/Auth: Supabase / 번역: Gemini Flash + translations 캐싱 (포커 용어 원어 유지)
- 커뮤니티 메인 = 실시간 채팅 (글 피드 + 채팅 + 이벤트 탭)
- 비로그인: 읽기 가능, 작성/전송은 로그인 필요
- 이벤트 리워드: 기프트콘 (번호 3개→5천원 / 4개→1만원 / 5~6개→5만원)

---

## 🟡 남은 보안 권장 항목 (시급하지 않음)

- `profiles.badge` UPDATE RLS 트리거 (대시보드에서 추가)
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지 (Supabase Rate Limits or Cloudflare Turnstile)
