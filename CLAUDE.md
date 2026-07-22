# CLAUDE.md — HoldemMaster (holdemmaster.com)

> Claude Code가 이 프로젝트를 처음 열 때 반드시 읽는 파일.
> 작업 전 **`session-handoff.md` → `WORKLOG.md`** 순서로 함께 확인할 것.
> (이 프로젝트는 2026-06-23에 Cursor → Claude Code로 이관됨)
>
> ### ⚡ 포스팅 작업 자동 규칙 (필수)
> **포스트(`lib/posts/`·`lib/posts.ts`·`lib/posts-en/`)를 작성·검수·수정하기 전에 반드시 `.cursor/rules/posting.mdc`(통합 포스팅·콘텐츠 마스터 규칙)를 먼저 읽고 시작하라.** 이 파일 하나에 SEO 카피·형식·이미지·§13 핸드검산·다국어·재사용 컴포넌트·배포/GSC 규칙이 모두 통합돼 있다. (이 지시는 CLAUDE.md 기본 동작을 OVERRIDE 한다.)

---

## 0. 지금 무슨 단계인가 (먼저 읽기)

**개발은 끝났다. 지금은 "콘텐츠 품질 검수 + SEO 강화 + 신규 포스트 발행" 운영 단계다.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인)은 전부 완성·배포됨 → 새 기능 개발 거의 없음
- 핵심 작업 = ① 발행된 글의 **정확성·SEO·이미지 품질**을 끌어올리기 ② 신규 포스트 발행
- 가장 자주 하는 작업 패턴: **"특정 글 검수 → 오타·사실오류·링크·이미지 수정 → 빌드 → 배포"**
- 이 작업을 할 때 §13(포커 정확성 검증)·§14(검수 체크리스트)·§15(이미지 노하우)를 반드시 따를 것

---

## 1. 프로젝트 개요

- **사이트**: holdemmaster.com — 한국어 메인 + 12개 언어 다국어 홀덤 정보 사이트
- **배포**: Vercel (git push → 자동 배포). 브랜치: `main`
- **목표**: 구글 1페이지 달성 / **한국어 블로그 50개** (현재 48개, 2개 남음)
- **발행 현황 (정확한 수치)**:
  - 한국어 블로그: **48개** (`lib/posts.ts` LEGACY 21 + `lib/posts/` NEW_POSTS 27)
  - 영어 블로그: **20개** (`lib/posts-en/`)
  - 그 외 다국어(ja/zh 등): 핵심 3~4개만 번역
  - ⚠️ authoritative 수치는 `npm run build` 출력의 "N blog posts"로 확인 (WORKLOG 과거 "29개"는 오기)
- **두 개의 트랙이 공존**:
  1. **SEO 블로그 트랙** — 정적 포스트, 필라-클러스터, 다국어
  2. **커뮤니티 트랙** — Supabase 기반 실시간 채팅·피드·이벤트 (완성됨)

---

## 2. 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | Next.js 14.2.18 (App Router, SSG) |
| 언어 | TypeScript |
| 스타일 | TailwindCSS v4 |
| 이미지 | next/image (webp only) |
| DB/Auth | Supabase (PostgreSQL + Auth, Seoul 리전) |
| 번역 | Gemini Flash API (`GEMINI_API_KEY`) |
| 패키지 | npm |
| 설정 파일 | `next.config.mjs` (확장자 `.mjs` 주의) |

---

## 3. 핵심 명령어

```bash
npm run build          # 빌드 + 사이트맵 자동 생성 (배포 전 필수)
npm run dev            # 로컬 개발 서버
npm run compress:images  # public/images 전체 webp 압축
git push               # Vercel 자동 배포 트리거
```

---

## 4. 디렉토리 구조 (핵심만)

```
Holdem_Project/
├── app/
│   ├── blog/[slug]/          # 한국어 블로그 (건드리지 말 것)
│   ├── [locale]/blog/[slug]/ # 다국어 블로그 (en/ja/zh/es/de/pt/ar/id/ms/vi/hi/tr)
│   ├── community/            # 커뮤니티 앱 (피드·채팅·이벤트)
│   │   ├── community-client.tsx
│   │   ├── chat-tab.tsx      # Supabase Realtime 채팅
│   │   ├── event-tab.tsx
│   │   └── post-card.tsx
│   ├── post/[id]/            # 커뮤니티 글 상세
│   ├── login/                # 로그인 (이메일 + Google OAuth)
│   └── auth/callback/        # OAuth 콜백
├── lib/
│   ├── posts.ts              # 한국어 LEGACY 포스트 21개 (기존 데이터 수정 금지)
│   ├── posts/
│   │   ├── index.ts          # NEW_POSTS 배열 (새 한국어 포스트 import 추가 위치)
│   │   └── [slug].ts         # 개별 한국어 포스트 파일 (27개 import됨)
│   ├── posts-en/             # 영어 포스트 20개 (EN SEO 강화 대상)
│   │   ├── index.ts
│   │   └── [slug].ts
│   ├── event-config.ts       # 이벤트 설정
│   ├── supabase/
│   │   ├── client.ts         # 브라우저용 Supabase 클라이언트
│   │   └── server.ts         # 서버 컴포넌트용
│   └── utils.ts
├── public/images/            # 모든 이미지 (flat, webp만)
├── supabase/schema.sql       # DB 전체 스키마 (테이블 7개)
├── WORKLOG.md                # 날짜별 작업 기록 (매 작업 후 업데이트)
├── session-handoff.md        # 세션 간 인수인계
└── CLAUDE.md                 # 이 파일
```

---

## 5. Supabase 인프라

- **Project URL**: `https://idikicmooauorjurdkzh.supabase.co`
- **테이블**: profiles / posts / comments / likes / event_entries / translations / chat_messages
- **RLS**: 전 테이블 활성화. 비로그인은 읽기만 허용.
- **Realtime**: `chat_messages` 테이블만 활성화 (Supabase 대시보드 Publications)
- **이메일 확인**: OFF (가입 즉시 로그인)
- **환경변수**: `.env.local` 참조. Vercel에도 동일하게 설정 필요.
  - `NEXT_PUBLIC_SUPABASE_URL`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `GEMINI_API_KEY` (Vercel에 미설정 시 번역 기능 비활성)

---

## 6. SEO 블로그 포스트 추가 절차

### Step 1 — 파일 생성
`lib/posts/[slug].ts` 생성. 내용:

```ts
import { BlogPost } from '../types';

const post: BlogPost = {
  slug: 'holdem-example',
  title: '제목 40자 이하',
  description: '120~160자 메타 description',
  category: 'strategy',
  tags: ['태그1', '태그2'],
  publishedAt: 'YYYY-MM-DD',
  readTime: 8,
  image: '/images/holdem-example-hero.webp',
  imageAlt: '구체적인 alt 텍스트 (키워드 나열 금지)',
  content: `[마크다운 본문]`,
};

export default post;
```

### Step 2 — index.ts에 import 추가
`lib/posts/index.ts`의 `NEW_POSTS` 배열 앞에 추가.

### Step 3 — 이미지
- 경로: `public/images/[slug]-hero.webp`
- 규격: 1200×675, webp quality 65, **60KB 이하**
- 히어로 이미지: `priority={true}` 필수

### Step 4 — 내부링크
- 새 포스트 본문에 관련 기존 포스트 링크 최소 3개
- 기존 관련 포스트에도 새 포스트로 역링크 추가

### Step 5 — 빌드 & 배포
```bash
npm run build  # 빌드 성공 + sitemap 갱신 확인
git add . && git commit -m "feat: 새 포스트 [slug]" && git push
```

### Step 6 — WORKLOG.md 최상단에 기록

---

## 7. 다국어 페이지 구조

### 지원 언어 (12개)
`en` / `ja` / `zh` / `es` / `de` / `pt` / `ar` / `id` / `ms` / `vi` / `hi` / `tr`

### 라우트 패턴
- 한국어 블로그: `/blog/[slug]/`
- 다국어 블로그: `/[locale]/blog/[slug]/`
- 다국어 커뮤니티 피드: `/[locale]/` (각 로케일 홈)

### 현지화 원칙
- **직역 금지** — 해당 언어권 포커 커뮤니티 실제 표현 사용
- 포커 전문 용어(`ICM`, `bubble`, `bankroll` 등)는 현지 검색 관습 우선
- `slug`는 모든 언어에서 동일하게 유지 (hreflang 보존)
- `seoTitle`/`desc`/`tldr`/H2/FAQ는 각 언어 SERP 기준으로 별도 작성

---

## 8. SEO 필수 규칙

### 제목·설명 작성 원칙
- **호기심·자극 훅 + 핵심 키워드** 하이브리드
- `seoTitle`: ~32자, `desc`: ~95자 (한국어 검색 결과 잘림 방지)
- 정보형 제목 금지: "OO 뜻 정리", "OO 완벽 정리"
- 좋은 예: `"매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이"`

### URL 규칙 (절대 변경 금지)
- 포스트: `/blog/[slug]` (끝에 `/` 없음)
- `next.config.mjs`에 `trailingSlash: false` 설정됨

### 11개 필라 슬러그 (변경 금지)
`holdem-hand-rankings` / `holdem-rules` / `holdem-probability` / `holdem-strategy` /
`holdem-starting-hands` / `holdem-tournament` / `holdem-pub-guide` / `holdem-glossary` /
`holdem-position-play` / `holdem-pot-odds` / `holdem-bluff-spot`

### E-E-A-T 원칙
- 모든 포스트에 **실제 경험담** 필수 (AI 백과사전식 금지)
- 클러스터는 해당 필라를 첫 번째 내부링크로 연결

---

## 9. 이미지 규칙

| 항목 | 기준 |
|------|------|
| 형식 | webp 전용 (png/jpg 절대 금지) |
| 용량 | 파일당 ≤ 60KB (복잡한 이미지 ≤ 80KB) |
| 해상도 | 1200×675 |
| quality | 65 (기본), 80KB 초과 시 60 |
| alt | 구체적 상황 묘사 필수 (키워드 나열 금지) |
| 히어로 | `priority={true}` 필수 |

### 9-1. 이미지 장르 정책 (2026-07-05 갱신 — 실사 우선 + 인포그래픽 상황적 허용)
> 과거 규칙은 "실사만, 인포그래픽 금지"였으나, **"독자 이해를 돕는 게 목적"**이라는 원칙에 따라 상황적 인포그래픽을 허용하도록 갱신. 단 가드레일 필수.

- **실사 사진 = 기본(default).** 대부분의 히어로·가독성용 본문 이미지는 실사(언어중립·오버레이 없음).
- **인포그래픽/다이어그램 = 상황적 허용.** 개념 비교·결정 흐름·핵심 대비를 **글보다 그림이 더 빨리 이해시키는 자리에만** 사용(억지 삽입 금지). 예: RAISE/LIMP/FOLD 3분기, 비교 카드, 순서도.
- **★필수 가드레일 (전부 충족해야 발행)**:
  1. **텍스트 최소** — 단어·아주 짧은 라벨만. 문단·작은 글씨·설명문 금지(AI 생성 글자는 잘 깨짐 = §13급 신뢰 리스크).
  2. **커밋 전 스펠링 육안 검수 필수** — Read 도구로 렌더 이미지를 직접 열어 **모든 글자 철자·잘림·엉킴**을 확인. 하나라도 깨지면 폐기·재생성.
  3. **온브랜드** — 골드/그린/그레이 팔레트 + 펠트/칩 모티프. (참고: **사이트 UI 테마는 따뜻한 크림/포레스트 그린 라이트 테마**다 — `globals.css` `--background: 37 33% 93%`. 인포그래픽은 크림 페이지 위에 얹히는 **프리미엄 다크 카드**로 대비를 주는 건 괜찮으나, "사이트가 다크"라는 옛 전제는 폐기. 페이지 배경·본문 UI는 크림 기준.) 조잡한 클립아트 금지.
  4. **정확성** — 그림 속 수치·핸드·족보는 §13 동일 적용(틀린 데이터 금지). 카드 나오면 유효하거나 뒷면.
  5. webp·용량·1200×675·alt 규칙은 실사와 동일.
- 커밋 메시지에 인포그래픽임을 명시(장르 추적).

---

## 10. 커뮤니티 기능 현황 (Phase 6 완료)

| 기능 | 상태 |
|------|------|
| 이메일 회원가입/로그인 | ✅ |
| Google OAuth | ✅ |
| 피드 (글쓰기·좋아요·댓글) | ✅ |
| 다국어 피드 (12개 언어) | ✅ |
| Gemini 자동 번역 (캐싱) | ✅ (Vercel GEMINI_API_KEY 미설정 시 비활성) |
| 이벤트 탭 (번호 6개 선택) | ✅ |
| 실시간 채팅 (Supabase Realtime) | ✅ |
| `/community/*` → 홈 리다이렉트 | ✅ |

### 보안 패치 완료 항목
- 번역 API: 로그인 필수 + 3,000자 제한 + target 화이트리스트
- `/auth/callback`: Open Redirect 차단
- 글 5,000자 / 댓글 1,000자 / 제목 100자 길이 제한

### 남은 보안 권장 항목
- `profiles.badge` UPDATE RLS 트리거
- Rate limiting (Upstash Redis)
- 로그인 브루트포스 방지

---

## 11. 절대 금지 사항

1. 기존 포스트 `slug` 변경 (SEO 초기화)
2. `lib/posts.ts` 포스트의 **구조/slug 임의 변경·삭제** (단, 오타·사실오류·링크 **검수 수정은 허용·권장** — 실제로 `holdem-tiebreak-rules`, `holdem-3bet-strategy` 등 다수 글이 여기 있음)
3. `app/blog/[slug]/` 및 다국어 블로그 라우트 구조 변경
4. `public/sitemap.xml` 수동 수정 (빌드 시 자동 생성)
5. 이미지를 `.jpg` / `.png`로 저장
6. URL 끝에 `/` 추가 (trailingSlash: false라 301 발생)
7. meta description 160자 초과
8. 경험담 없는 AI 백과사전식 포스트 작성
9. 히어로 이미지에 `priority` 누락
10. **포커 핸드 예시를 베스트 5장 검산 없이 작성/통과** (§13 필수)

> 📌 한 글이 `lib/posts.ts`(LEGACY)에 있는지 `lib/posts/`(NEW)에 있는지 먼저 확인: `holdem-tiebreak-rules`·`holdem-3bet-strategy`처럼 오래된 인기 글은 `posts.ts`에 있다. Grep으로 `slug: "..."` 검색해서 위치 파악 후 수정.

---

## 12. 작업 완료 후 체크리스트

- [ ] (핸드 예시 수정 시) §13 베스트 5장 검산 완료
- [ ] `npm run build` 성공 확인 (sitemap 출력의 post 수도 확인)
- [ ] `git push` → Vercel 배포 완료 확인
- [ ] `WORKLOG.md` 최상단에 날짜·작업내용·포스트 총 수 기록
- [ ] `session-handoff.md` 다음 세션 할 일 업데이트
- [ ] 임시 스크립트(`*.mjs`, `*.js`, `commit-msg.txt`) 정리(삭제)

---

## 13. ★ 포커 콘텐츠 정확성 검증 프로토콜 (이 프로젝트의 1순위 규칙)

> **왜 최우선인가**: 작성자 소개에 "WSOP·GTO 솔버·12년 경력"으로 E-E-A-T를 강하게 어필한다. 포커를 아는 독자가 핸드 예시 하나라도 틀린 걸 발견하면 신뢰가 무너지고, 구글은 그 신뢰(체류·재방문·피인용)로 순위를 매긴다. **사실오류 1개 = 치명상.**

### 실제 사고 사례 (2026-06-23, 클로드코드가 발견)
`holdem-tiebreak-rules`의 "스플릿 팟" 예시:
- ❌ `A♠2♦ vs K♠K♦, 보드 Q♣J♥10♦9♠8♥` → "둘 다 보드 스트레이트라 스플릿"
- 실제로는 K 보유자가 **K-Q-J-10-9 (K하이 스트레이트)** 를 만들어 **K-K 단독 승리**였음 (K가 보드에 연결됨)
- ✅ 수정: 보드를 `10-9-8-7-6`으로 → A도 K도 연결 안 됨 → 진짜 스플릿

### 근본 원인
AI(나 포함)는 핸드 예시를 "그럴듯한 텍스트 패턴"으로 생성한다. 검수 때 베스트 5장을 **직접 조합·계산하지 않으면** 이런 오류가 계속 새어나간다. "여러 번 검수했는데 또 오류"의 정체가 이것이다.

### 필수 검산 절차 (핸드 예시가 나오면 무조건)
1. 각 플레이어의 **7장 나열**: 홀카드 2장 + 보드 5장
2. 7장 중 **베스트 5장을 명시적으로 조합** (족보 만들 수 있는 모든 경우 비교)
3. **양쪽 베스트 5장을 직접 비교** → 의도한 결론(승자/스플릿)과 일치하는지 확인
4. 특히 점검할 함정:
   - 보드에 스트레이트가 깔렸을 때, 플레이어의 홀카드가 **그 위로 더 높은 스트레이트를 만드는지** (위 사례)
   - "스플릿"이라고 쓸 땐 양쪽이 **정말 동일한 5장**인지 (한쪽이 보드+홀카드로 개선 가능한지)
   - 키커: 보드 카드가 자동으로 베스트 5장에 들어가 키커가 바뀌는 경우
   - 휠 스트레이트(A-2-3-4-5)는 가장 낮은 스트레이트
   - 무늬 서열은 홀덤에 없음 (플러시는 숫자로만 비교)
5. 표·계산이 있으면 사이즈/비율/확률도 산수 검산 (예: 3벳 사이즈 BB 계산)

> 핸드 예시 검산이 필요하면 작은 노드/파이썬 스니펫이나 poker-eval(`lib/poker-eval.ts`)로 평가해도 좋다. 절대 눈대중으로 통과시키지 말 것.

---

## 14. 기존 글 검수 체크리스트 (현재 가장 자주 하는 작업)

특정 글을 검수하라는 요청을 받으면 아래를 순서대로 점검·수정한다.

1. **사실 정확성** (§13) — 포커 핸드 예시, 전략 수치, 토너먼트 정보(운영사·날짜·바이인), 룰 설명
2. **trailing slash** — 내부 링크가 `/blog/x/`로 끝나면 301 발생 → `/blog/x`로 수정
   - 점검: `grep -n "/blog/[^)\"']*/[\")]"` 또는 Grep으로 `/" 패턴` 검색
3. **링크 유효성** — 참조한 slug가 실제 존재하는지 (`lib/posts.ts` + `lib/posts/` + `lib/posts-en/`에서 확인)
4. **이미지 점검**:
   - 깨진/플레이스홀더 이미지: **1KB 안팎 webp = 빈 플레이스홀더** (내용 없음) → 새로 제작 필요
   - 용량 초과: 60KB(복잡한 인포그래픽 80KB) 초과 → 재압축 (§15)
   - alt 텍스트: 구체적 상황 묘사인지 (키워드 나열 금지)
4. **`updated` 날짜** — 글 수정 시 `updated`(또는 `dateModified`)를 오늘 날짜로 갱신 (sitemap lastmod 반영)
5. **메타** — seoTitle/desc 길이·훅 (§8)

### 검수 우선순위
GSC 노출 높은 글 → 전략 글(핸드 예시 많아 오류 위험 큼) → 토너먼트 가이드(날짜·운영사 정보 노후화)

---

## 15. 이미지 최적화 실전 노하우

### 기본
- `npm run compress:images` — public/images 전체를 quality 65로 압축 후 적용 (`--apply` 포함됨). 단, 이미 압축된 webp는 거의 안 줄어듦
- 신규 PNG(예: 생성형 이미지) → webp 변환 + 1200×675 리사이즈 + quality 65

### 개별 파일이 60KB를 못 넘기게 강제 압축할 때
`sharp`로 직접 quality를 45~55까지 낮춰 재압축. **Windows 파일 락 주의**:
```js
// ❌ sharp(file)...toBuffer() 후 같은 file에 writeFile → UNKNOWN open 에러(파일 락)
// ✅ 먼저 readFileSync로 버퍼에 읽고, 임시파일 쓴 뒤 rename
const inputBuf = readFileSync(file);
const out = await sharp(inputBuf).webp({ quality: 50, effort: 6 }).toBuffer();
await writeFile(file + '.tmp', out);
await rename(file + '.tmp', file);
```

### 플레이스홀더 이미지 판별
- **1,192 bytes 같은 1KB대 webp는 거의 항상 빈 플레이스홀더**. 헤더는 유효(`RIFF...WEBP`)해도 내용이 없음.
- 발견 시 사용자에게 알리고, 맥락에 맞는 인포그래픽을 생성→webp 변환→교체.

### 커밋 주의
`compress:images`는 public/images의 **수백 개 파일을 미세하게 건드린다**. 특정 글만 작업했으면 `git checkout -- public/images/` 로 되돌린 뒤 **실제로 바꾼 파일만** 다시 압축·스테이징 한다. 무관한 이미지 수백 개를 같이 커밋하지 말 것.

---

## 16. Windows/PowerShell 환경 주의사항

- 셸은 **PowerShell**. 명령 체이닝은 `&&` 대신 `;` 사용 (`&&` 파싱 에러 자주 남)
- `tail`/`head` 없음 → `Select-Object -First N` 또는 Read 도구 사용
- `node -e "..."` 안에서 따옴표/특수문자가 PowerShell에 먼저 파싱돼 깨짐 → **복잡한 스크립트는 `.mjs`/`.js` 파일로 작성해 실행**
- git 커밋 메시지에 한글·여러 줄·특수문자가 있으면 here-doc도 깨짐 → **`commit-msg.txt`에 쓰고 `git commit -F commit-msg.txt`** 가 가장 안전 (작업 후 파일 삭제)
- `git push` 출력의 "To https://..."가 stderr로 와서 빨갛게 보여도 정상 (exit code 0이면 성공)

---

## 17. SEO 카피 핵심 (제목·설명 빠른 참조)

> 상세: `.cursorrules` 및 `docs/SEO_COPY_GUIDELINES.md`. 핵심만 재정리.

- **공식**: `seoTitle: "[호기심·자극 훅] — [핵심 키워드 2~3개]"` / `desc: "[공감 한 문장]. [무엇을 알려주는지 + 키워드 + N분]"`
- 좋은 예: `"매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이"`
- 금지: "OO 뜻 정리", "OO 완벽 정리", "총정리" 같은 정보형/흔한 마무리
- CTR 잘 나오는 호기심형 제목을 **정보형으로 단독 교체 금지** — 훅은 살리고 키워드만 보강
- 영어 포스트: 포스팅 전 구글 SERP Top10 + PAA(People Also Ask) 조사 → 검색자가 실제로 치는 표현을 H2/FAQ에 그대로 사용 (롱테일 6~8개를 한 글에 클러스터링)
- 다국어: 직역 금지, 포커 용어(ICM·bubble·bankroll 등)는 현지 검색 관습 우선, slug는 전 언어 동일(hreflang)

---

## 18. 영상 다루기 (영상 임베드·분석)

클로드는 영상을 재생하지 못하지만, **ffmpeg으로 프레임을 뽑아 이미지로 Read하면 내용 파악이 가능하다**(클로드는 이미지를 읽을 수 있음). yt-dlp로 영상을 받고 → ffmpeg으로 프레임 추출 → PNG를 Read.

> **도구 확인 필수**: 세션 시작 시 `Get-Command ffmpeg,ffprobe,yt-dlp`(PowerShell)로 설치 여부 확인. **없으면 설치**: `winget install Gyan.FFmpeg` + `winget install yt-dlp.yt-dlp` (또는 yt-dlp는 `pip install yt-dlp`). ⚠️ 2026-07-22 확인 시 이 로컬 머신엔 미설치(winget은 사용 가능). "영상 작업 클로드"가 됐다면 도구가 깔린 다른 환경일 수 있음.

- 영상 받기: `yt-dlp -f "bv*[height<=720]+ba/b[height<=720]" -o 영상.mp4 "URL"`
- 특정 시점 확인: `ffmpeg -ss 30 -i 영상.mp4 -frames:v 1 -vf scale=800:-1 f.png` → PNG를 Read로 읽기
- 여러 시점 한눈에: 프레임 여러 장 뽑아 `hstack`/`vstack`으로 격자 합성 → 읽기 1회로 8~15개 확인
- 대사·소리 위치: `ffmpeg -ss N -t 0.5 -i 영상.mp4 -af volumedetect -f null -` 로 구간별 음량 측정
- 영상 스펙: `ffprobe -v error -show_entries stream=width,height,r_frame_rate -show_entries format=duration ...`

주의: 라이브 방송 소스는 잡음이 계속 깔려 있어 `silencedetect`로 무음 구간이 안 잡힌다. 음량 스캔(volumedetect)을 쓸 것.

> 용도: 자체 유튜브 영상(포커 하이라이트 등)을 포스팅에 임베드(`:::youtube:::` lite-facade, `docs/video-embed-playbook.md`)하기 전, 프레임 분석으로 **장면·타임스탬프·핸드를 확인**해 정확한 분석글을 쓰고 정밀 배치한다.
