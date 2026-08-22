# CLAUDE.md — HoldemMaster (holdemmaster.com)

> **목표는 하나다: 롱테일 키워드 구글 1페이지.** 모든 규칙이 거기서 나온다.
> 이 파일은 **진입점**이다. 절차 본체는 복사하지 않는다 — §19 라우팅 표를 보고 그때 연다.
>
> 🔢 **섹션 번호는 프로젝트 공용 언어다** (REVIEW-PROTOCOL·스킬·docs가 «§13 검산»처럼 서로를 이 번호로 가리킨다).
> **번호를 바꾸지 마라.** 내용이 다른 파일로 옮겨가도 **번호와 한 줄 요약은 여기 남긴다.**
> (2026-08-11에 532줄 → 이 크기로 축약. 원본 전문은 `docs/CLAUDE-full-backup-2026-08-11.md`)

### 세션 시작 시
1. `session-handoff.md` **통독** — «지금 할 일»만 담겨 있다
2. 🔴 **`git status`를 먼저 본다.** 커밋 안 된 수정이 있으면 `git diff --stat`으로 내용을 확인하라 —
   이 레포는 **편집기 사고로 문서가 통째로 비워지는 일이 두 번 있었다**(2026-06-10 `SEO_COPY_GUIDELINES.md`
   10KB → 0, 2026-08-11 같은 파일 재발 + `session-handoff.md`가 낡은 7월판으로 덮임 +
   `photo-prompts-nano-banana.md` 공통규칙 6줄 삭제). **셋 다 커밋 안 된 상태라 `git checkout --`로 복구됐다.**
   낡은 handoff를 그대로 믿고 시작하면 **엉뚱한 작업을 한 세션 통째로** 하게 된다.
3. 🔴 `WORKLOG.md`는 **600KB+라 통독 금지** (Read 상한 초과 → 에러). 쓰는 법은 둘뿐:
   ① 최상단 몇 개만 `Read`에 `limit` 주고 보기 ② 손댈 글은 **`slug`로 grep**해 이미 작업했는지 확인
   (안 읽어서 2026-08-02에 2건 오판했다)

### ⚡ 포스팅 작업 자동 규칙 (필수)
**포스트(`lib/posts/`·`lib/posts.ts`·`lib/posts-en/`)를 작성·검수·수정하기 전에 반드시
`.cursor/rules/posting.mdc`를 먼저 읽어라.** SEO 카피·형식·이미지·§13 핸드검산·다국어·
재사용 컴포넌트·배포/GSC 규칙이 그 파일 하나에 통합돼 있다.
(이 지시는 CLAUDE.md 기본 동작을 OVERRIDE 한다.)

---

## 0. 지금 무슨 단계인가

**개발은 끝났다. 지금은 «콘텐츠 품질 검수 + SEO 강화 + 신규 발행» 운영 단계다.**

- 커뮤니티 기능(피드·채팅·이벤트·다국어·로그인)은 전부 완성·배포됨 → 새 기능 개발 거의 없음
- 가장 잦은 작업: **특정 글 검수 → 오타·사실오류·링크·이미지 수정 → 빌드 → 배포**
- 이때 §13(포커 정확성)·§14(검수)·§9(이미지)를 반드시 따른다

## 1. 프로젝트 개요

- 사이트: holdemmaster.com — 한국어 메인 + 12개 언어(`en ja zh es de pt ar id ms vi hi tr`)
- 배포: Vercel (`main`에 git push → 자동 배포)
- 두 트랙: **① SEO 블로그**(정적 포스트·필라클러스터·다국어) **② 커뮤니티**(Supabase 실시간, 완성됨)

> 🔴 **발행 개수를 문서에 적지 마라.** 적는 순간 낡는다 — 2026-08-11 확인 시
> CLAUDE.md·handoff·.cursorrules·실제 파일이 **넷 다 달랐다**(EN은 문서 20개 vs 실제 43개).
> **authoritative 수치는 `npm run build` 출력의 "N blog posts"뿐이다.**

## 2. 기술 스택

Next.js 14.2.18 (App Router, SSG) · TypeScript · TailwindCSS v4 · next/image(webp only) ·
Supabase(PostgreSQL+Auth, Seoul) · 번역 Gemini Flash · npm · 설정 `next.config.mjs`(확장자 주의)

## 3. 핵심 명령어

```bash
npm run build                       # 빌드 + 사이트맵 생성 (배포 전 필수)
npm run dev                         # 로컬 개발 서버
npm run audit:hard -- --slug=<slug> # ★검수 기계 게이트 (🔴 0건까지)
npm run audit:hard:selftest         # 게이트 자체 검증
npm run compress:images             # public/images 전체 webp 압축
```

## 4. 파일 위치

| 무엇 | 어디 |
|---|---|
| 한국어 LEGACY 포스트 | `lib/posts.ts` |
| 한국어 NEW 포스트 | `lib/posts/[slug].ts` + `lib/posts/index.ts`(NEW_POSTS 배열) |
| 영어 포스트 | `lib/posts-en/[slug].ts` |
| 이미지 | `public/images/` (flat, webp만) |
| 블로그 라우트 | `app/blog/[slug]/` · `app/[locale]/blog/[slug]/` — **건드리지 말 것** |
| 커뮤니티 | `app/community/` · DB 스키마 `supabase/schema.sql` |
| 렌더러 | `lib/render-markdown.ts` |

> 📌 손댈 글이 LEGACY(`posts.ts`)인지 NEW(`posts/`)인지 **먼저 grep으로 확인**하라.
> `holdem-tiebreak-rules`·`holdem-3bet-strategy` 같은 오래된 인기 글은 `posts.ts`에 있다.

## 5. Supabase 인프라

`https://idikicmooauorjurdkzh.supabase.co` / 테이블 7개(profiles·posts·comments·likes·
event_entries·translations·chat_messages) / 전 테이블 RLS(비로그인 읽기만) / Realtime은
`chat_messages`만 / 이메일 확인 OFF / 환경변수는 `.env.local`
(`GEMINI_API_KEY`는 Vercel 미설정 = 프로덕션 번역 비활성)

---

## 6. 포스트 추가 절차

→ **`.cursor/rules/posting.mdc` 「새 포스트 추가 STEP BY STEP」이 본체다.** 여기 복사하지 않는다.
발행 전 검수는 §14(= `REVIEW-PROTOCOL.md` 3층 게이트)를 신규 글에도 예외 없이 적용한다.

## 7. 다국어

→ 본체는 posting.mdc 「다국어」절 + `.cursor/rules/multilingual-localization.mdc`(12개 언어 용어).
불변 규칙 둘만 여기 남긴다: **slug는 전 언어 동일**(hreflang 보존) · **직역 금지**(현지 검색 관습 우선).

## 8. SEO 필수 규칙

- **URL**: `/blog/[slug]` — **끝에 `/` 없음** (`trailingSlash: false`, 붙이면 301)
- **seoTitle** ~32자 / **desc** ~95자 · **160자 절대 초과 금지**
- 정보형 제목 금지("OO 뜻 정리"·"OO 완벽 정리"·"총정리") → 상세 공식은 §17
- **E-E-A-T**: 모든 포스트에 **실제 경험담** 필수(AI 백과사전식 금지). 클러스터는 필라를 **첫 내부링크**로
- 🔴 **필라 슬러그는 `docs/pillar-slugs.md`를 보고 써라.** 예전 목록의 **6개는 실제로 404**다
  (`holdem-pot-odds`·`holdem-position-play`·`holdem-starting-hands`·`holdem-bluff-spot`·
  `holdem-tournament`·`holdem-glossary`). 헷갈리면 `curl -sI https://www.holdemmaster.com/blog/<slug>`

## 9. 이미지 규칙

| 항목 | 기준 |
|---|---|
| 형식 | **webp 전용** (png/jpg 금지) |
| 해상도 | **1200×675 — 폭 750px 미만 금지** (next/image 최적화를 우회한다) |
| 파일당 | ≤60KB (복잡한 인포그래픽 ≤80KB) · quality 65 (80KB 초과 시 60) |
| alt | 구체적 상황 묘사 (키워드 나열 금지) |
| 히어로 | `priority={true}` 필수 |

**§9-1 장르** — **실사 사진이 기본.** 인포그래픽/다이어그램은 «글보다 그림이 더 빨리 이해시키는
자리»에만 상황적 허용. 가드레일 4개 전부 충족해야 발행: **① 텍스트 최소**(문단·설명문 금지)
**② 커밋 전 스펠링 육안 검수**(Read로 렌더 이미지를 직접 열어 확인, 깨지면 폐기)
**③ 온브랜드**(골드/그린/그레이 · 사이트는 크림 라이트 테마) **④ 수치·핸드는 §13 동일 적용**.
글자 든 인포그래픽은 이미지 AI 금지 → HTML/CSS + Playwright 스크린샷.

**§9-2 용량은 «실제 전송량»으로 잰다** — **200KB는 하드리밋이 아니다** (2026-08-07 사용자 지시).
목적은 «빠른 페이지»이고 200KB는 대리 지표였다. **조금 넘어도 된다.** 대신 ① **가독성 우선**
(용량 맞추려고 사진을 뭉개면 실패) ② **디스크 합계로 재지 마라** — 렌더러가 `w=750&q=75` +
srcset으로 줄여 보내고 첫 장 빼고 전부 lazy다.
→ 측정법·압축 순서·sharp 파일락 회피는 **`docs/IMAGE_OPTIMIZATION.md`** (§15 내용도 거기 합쳤다).

## 10. 커뮤니티 현황

Phase 6 완료(로그인·피드·다국어·번역·이벤트·실시간 채팅 전부 ✅). → 상세 `docs/community-status.md`
남은 보안 권장(시급하지 않음): `profiles.badge` UPDATE RLS · Rate limiting · 브루트포스 방지

---

## 11. 절대 금지 사항

1. 기존 포스트 **`slug` 변경** (SEO 초기화)
2. `lib/posts.ts` 포스트의 구조/slug 임의 변경·삭제 (오타·사실오류 **수정은 허용·권장**)
3. `app/blog/[slug]/` 및 다국어 라우트 구조 변경
4. `public/sitemap.xml` 수동 수정 (빌드 시 자동 생성)
5. 이미지를 `.jpg`/`.png`로 저장
6. URL 끝에 `/` 추가 (301 발생)
7. meta description 160자 초과
8. **경험담 없는 AI 백과사전식 포스트**
9. 히어로 이미지에 `priority` 누락
10. **핸드 예시를 베스트 5장 검산 없이 통과** (§13)
11. 포스트 본문에 백틱 (§12-A)

## 12. 작업 완료 체크리스트

- [ ] **`npm run audit:hard -- --slug=<slug>` 🔴 0건** — 출력 맨 아래 **커버리지**를 반드시 읽어라.
      "시나리오를 못 잡은 글"의 0건은 **검증이 아니라 미검사**다
- [ ] (핸드 수정 시) §13 베스트 5장 검산 — 게이트가 못 잡았으면 손으로
- [ ] `npm run build` 성공 (sitemap post 수 확인)
- [ ] (FAQ 손댔으면) `npm run audit:hard -- --schema`
- [ ] `git push` → Vercel 배포 확인
- [ ] `WORKLOG.md` 최상단에 날짜·작업내용 기록
- [ ] `session-handoff.md` 다음 세션 할 일 갱신
- [ ] 임시 스크립트(`*.mjs`, `commit-msg.txt`) 삭제

## 12-A. 🔴 백틱 금지 (빌드 파손)

포스트 `content`는 백틱 템플릿 리터럴이다. 본문에 백틱을 쓰면 문자열이 그 자리에서 끊겨
**빌드가 즉시 깨진다**(exit=1). 2026-07-30 하루에만 **3회 파손**.
→ 대체: `**굵게**` · `==하이라이트==` · `"따옴표"`. 계산식도 `==0.6 ÷ 1.6 = 약 37.5%==`로.
편집 후 반드시 `npm run build` 확인.

## 12-B. 🔴 서치 절대 규칙 — 요약 금지, 원문 직접 (§13과 동급)

**사실은 «요약»이 아니라 «원문»에서만 가져온다.** 2026-07-29 하루에 같은 원인으로 **두 번** 틀렸다
(중국 우승자 2명→실제 4명, 일본 브레이슬릿 3개→4개). 둘 다 WebFetch에 질문을 던지고
**요약된 답을 받아쓴** 탓이다.

| 도구 | 허용 | 금지 |
|---|---|---|
| **WebSearch** | **URL 찾기 전용** | 검색 요약의 **내용을 사실로 쓰기** |
| **WebFetch** | 단일 사실. **축어 인용 요구** 필수 | **열거·개수·목록** 질문 |
| **Playwright** | ★열거·개수의 유일한 정답. `browser_evaluate`로 DOM을 긁어 **직접 센다** | — |

- 파싱 후 **빠진 번호가 없는지** 완전성 검증까지
- WebFetch 응답에 **질문과 무관한 항목이 섞이면 그 응답은 불완전하다** — 이 신호를 보고도 넘어가서 틀렸다
- 2차 출처밖에 없으면 **쓰지 않는다** (상세: posting.mdc 최상단)

---

## 13. ★ 포커 콘텐츠 정확성 검증 (이 프로젝트 1순위 규칙)

> **왜 최우선인가**: 작성자 소개에 "WSOP·GTO 솔버·12년 경력"으로 E-E-A-T를 강하게 어필한다.
> 포커를 아는 독자가 핸드 예시 하나라도 틀린 걸 발견하면 신뢰가 무너지고,
> 구글은 그 신뢰(체류·재방문·피인용)로 순위를 매긴다. **사실오류 1개 = 치명상.**

**근본 원인**: AI는 핸드 예시를 «그럴듯한 텍스트 패턴»으로 생성한다. 베스트 5장을
**직접 조합·계산하지 않으면** 계속 새어나간다. "여러 번 검수했는데 또 오류"의 정체가 이것이다.

**핸드 예시가 나오면 무조건**:
1. 각 플레이어의 **7장 나열** (홀카드 2 + 보드 5)
2. 7장 중 **베스트 5장을 명시적으로 조합** (가능한 족보 전부 비교)
3. **양쪽 베스트 5장을 직접 비교** → 의도한 결론(승자/스플릿)과 일치하는지 확인
4. 함정: 보드 스트레이트 위로 홀카드가 **더 높은 스트레이트**를 만드는지 ·
   "스플릿"이 정말 **동일한 5장**인지 · 보드 카드가 베스트5에 들어가 **키커가 바뀌는** 경우 ·
   휠(A-2-3-4-5)은 **최저** 스트레이트 · **무늬 서열 없음**(플러시는 숫자로만 비교)
5. 표·계산이 있으면 사이즈/비율/확률도 **산수 검산**

> 눈대중 통과 절대 금지. `lib/poker-eval.ts`나 파이썬 스니펫으로 평가해도 좋다.

**실제 사고 (2026-06-23, `holdem-tiebreak-rules`)**
- ❌ `A♠2♦` vs `K♠K♦`, 보드 `Q♣J♥10♦9♠8♥` → "둘 다 보드 스트레이트라 스플릿"
- 실제: **보드에 K가 없다.** A♠2♦는 보드 스트레이트 `Q-J-10-9-8`이 전부이고,
  K♠K♦만 `K-Q-J-10-9`로 연결된다 → **K측 단독 승리**
- ✅ 수정: 보드를 `10-9-8-7-6`으로 → A도 K도 연결 안 됨 → 진짜 스플릿
- ⚠️ 2026-08-11에 `content.mdc`가 **같은 예시를 "A측 단독 승리"라고 반대로** 적어둔 걸 발견해 폐기했다
  (없는 K를 끌어와 `A-K-Q-J-10`을 만든 전형적 패턴 — **이 오류가 바로 §13이 막으려는 것이다**)

---

## 14. 검수

> 🔴 **검수 요청을 받으면 `REVIEW-PROTOCOL.md`(레포 루트)를 먼저 통독하고 그대로 따른다.**
> 신규 발행 직후·기존 글·경화·번역본 검수 **전부** 그 파일이 본체다.
> 3층 게이트(① 기계 `npm run audit:hard` → ② 미판정 문단 육안 검산 `--uncovered`
> → ③ 적대적 렌즈 4종)와 근거·함정·프롬프트 장치가 거기 다 있다. **여기 복사하지 않는다.**

**검수 우선순위**: GSC 노출 높은 글 → 전략 글(핸드 예시 많아 오류 위험) → 토너먼트 가이드(정보 노후화)

## 14-A. 경화(hardening) 작업 표준

기존 글을 클러스터 단위로 끌어올리는 고정 규격. **신규 발행(§6)과는 다른 절차다.**
→ 본체는 `REVIEW-PROTOCOL.md` + posting.mdc. 핵심 셋만 여기 남긴다:
**① 기계 게이트 먼저, 사람은 그다음** (`audit:hard --slug`로 🔴 0건 → 사람은 게이트가 원리상 못 잡는
D유형(전략적 유해 조언)·F유형(사실 오류)에 시간을 쓴다) **② 질문형 H2 70% + 각 H2 직후 40~75단어 직답**
**③ `> **바로 답**` 블록 라벨 통일** ("한 줄 답/정리/요약"은 전부 이걸로).

> 왜 기계 게이트인가: 같은 방식의 통독은 몇 번을 반복해도 검출률이 오르지 않는다.
> **읽어서 통과시킬 수 있는 검사는 «그럴듯하고 틀린 글»이 반드시 통과한다.**

## 15. 이미지 최적화 실전

→ **`docs/IMAGE_OPTIMIZATION.md`가 본체다** (전송량 측정법·압축 순서·sharp Windows 파일락 회피
`readFileSync→tmp→rename`·1KB대 플레이스홀더 판별·`compress:images` 커밋 주의).

## 16. Windows / PowerShell

- 셸은 PowerShell — 체이닝은 `&&` 대신 `;`. `tail`/`head` 없음
- 커밋 메시지에 한글·여러 줄이면 `commit-msg.txt`에 쓰고 `git commit -F commit-msg.txt`
- 🔴 **PowerShell로 한글 파일 일괄치환 금지** — `Get-Content -Raw` + `-replace` + `Set-Content`는
  PS 5.1이 UTF-8(BOM 없음)을 시스템 ANSI로 읽어 **한글이 전부 깨진다.** 2026-08-08에
  `docs/gto-solver-series-spec.md`를 이렇게 날렸다. → **문서 편집은 Edit 도구.**
  스크립트로 해야 하면 `.mjs`에서 `readFileSync(p,'utf8')`. 치환 전 `git status`로 추적 여부 확인
- 나머지 함정: `docs/windows-notes.md`

## 17. SEO 카피 (제목·설명)

- **공식**: `seoTitle: "[호기심·자극 훅] — [핵심 키워드 2~3개]"` /
  `desc: "[공감 한 문장]. [무엇을 알려주는지 + 키워드 + N분]"`
- 좋은 예: `"매판마다 칩이 빠지는 이유 — 홀덤 블라인드 뜻과 SB·BB 차이"`
- 금지어: "OO 뜻 정리" · "OO 완벽 정리" · "총정리" (audit 게이트가 잡는다)
- **CTR 좋은 호기심형 제목을 정보형으로 단독 교체 금지** — 훅은 살리고 키워드만 보강
- 영어 글: 발행 전 **구글 SERP Top10 + PAA 조사** → 검색자가 실제 치는 표현을 H2/FAQ에 그대로
  (롱테일 6~8개를 한 글에 클러스터링). EN 기준은 seoTitle ~55자 · desc ≤160자
- 상세: posting.mdc 「SEO 카피」절 · `docs/SEO_COPY_GUIDELINES.md`

## 18. 영상 다루기

→ `docs/video-workflow.md` (yt-dlp로 받고 ffmpeg으로 프레임 뽑아 PNG를 Read).
임베드는 `docs/video-embed-playbook.md`.

---

## 19. ★ 어디를 읽어야 하나 (라우팅)

**절차 본체를 이 파일에 복사하지 않는다.** 두 곳에 적으면 갈라지고,
갈라진 쪽을 읽는 순간 어제 고친 게 오늘 되살아난다.

| 하려는 일 | 읽을 파일 |
|---|---|
| **포스트 작성·검수·수정 (전부)** | `.cursor/rules/posting.mdc` ← **통합 마스터, 자동 필수** |
| **검수 요청을 받았다** | `REVIEW-PROTOCOL.md` ← **본체.** 3층 게이트 |
| 이미지 규격·압축·전송량 | `docs/IMAGE_OPTIMIZATION.md` |
| 내부링크 걸 slug 확인 | `docs/pillar-slugs.md` ← **문서상 이름 6개가 실제로는 404** |
| 다국어 용어(12개 언어) | `.cursor/rules/multilingual-localization.mdc` |
| **로케일마다 «일부러 다른» 자리인지 판정** | `docs/locale-intentional-diffs.md` ← 없으면 «아직 판정 안 함»이다 |
| **키워드를 조사한다 (전 언어)** | `docs/rakko-playbook.md` ← **본체.** 도구 3종 분업(**발굴·SD=DataForSEO / 볼륨·시계열=라쿠 / lowfruits=SERP 약점**) · 🔴 **`language`는 볼륨을 안 나눈다** · 🔴 **CPC는 벤더 간 30배라 근거 금지** |
| 키워드·발행 우선순위 | `docs/keyword-bank/00-SYNTHESIS-roadmap.md` · `docs/en-blog-pillar-cluster-map.md` |
| 커뮤니티 손댈 때 | `docs/community-status.md` · `supabase/schema.sql` |
| 성능·빌드·GSC 루틴 | `.cursor/rules/tech.mdc` |
| Windows 함정 | `docs/windows-notes.md` |
| 영상 | `docs/video-workflow.md` |

> ⚠️ **`.cursor/rules/content.mdc`는 폐기됐다 (2026-08-11).** 내용이 posting.mdc로 통합된 뒤에도
> 남아 있다가 **핸드 검산 오답 · 폐기된 200KB 하드리밋 · "인포그래픽 금지"(현재는 허용)** 를
> 그대로 들고 있었다. 열지 마라.
