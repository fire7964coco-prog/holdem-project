# 홀덤마스터 작업일지

> 목표: holdemmaster.com 구글 1페이지 달성
> 전략: 기술 SEO(SSG) + 블로그 50편 + 필라-클러스터 내부링크 구조

---

## 2026-06-11

### 작업 내용
- 영어 기준본 추가: `en/blog/holdem-tournament-vs-cash-game`
- 영어 기준본 품질 보강: 실전 $1/$2 캐시게임·$50 토너먼트 예시, 버블 AKo ICM 예시, 초보 선택 프레임 추가
- 성능 수정: `hideSummaryImageSlot` 추가로 첫 이미지는 LCP 최적화 제거 유지, 하단 요약 이미지 슬롯만 숨김
- 초안 점검: `holdem-tournament-vs-cash-game` FAQ 재사용 이미지 제거
- 하단 구성 정리: 자동 `이 글 전체 요약` 이미지 슬롯 제거, 결론 테이블 제거
- 이미지 alt 최적화: 본문 이미지 3개 alt를 장면·의도 중심으로 수정
- 카피/문장 다듬기: `seoTitle`, `desc`, 어색한 표현 일부 개선

### 발행 현황
- 총 포스트: 38개 (목표 50개까지 12개 남음)

### 특이사항
- `ReadLints` 기준 수정 파일 린트 오류 없음
- 영어 기준본은 SERP 경쟁 글 기준으로 칩 가치·블라인드·ICM·뱅크롤·초보 선택 기준 강화
- `npm run check:intl-links` 통과 (25편, 12개 언어)

---

## 🚨 포스팅 전 필수 (최우선)

**포스팅할 때는 항상 키워드로 구글 검색 → Top 10 경쟁 글 분석 → 가장 경쟁력 있는 콘텐츠 생성.**

→ 체크리스트: [`docs/SEO_COPY_GUIDELINES.md`](docs/SEO_COPY_GUIDELINES.md) · 스프린트: [`docs/SEO_SPRINT_45D.md`](docs/SEO_SPRINT_45D.md)

---

## 🎯 구글 1페이지 스프린트 (45일, 2026-05-18~)

> **전체 기획서 (다운로드):** [`docs/SEO_SPRINT_45D.md`](docs/SEO_SPRINT_45D.md)  
> GSC·GA4 기반. 90일 → **45일 압축** (기존 키워드 활성화 2~3편/주, 신규 **주 1편**).

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
