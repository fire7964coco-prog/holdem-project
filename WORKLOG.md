# 홀덤마스터 작업일지

> 목표: holdemmaster.com 구글 1페이지 달성
> 전략: 기술 SEO(SSG) + 블로그 50편 + 필라-클러스터 내부링크 구조

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

### 2. sitemap.xml 규칙 (절대 원칙)

**① 블로그 URL은 반드시 끝에 `/` 포함**
- 서버가 `/blog/slug` → `/blog/slug/` 로 **301 자동 리디렉션** 함 (curl로 직접 확인)
- 사이트맵에 `/` 없이 넣으면 → 구글이 리디렉션 오류로 판정
- ✅ 올바른 형식: `https://holdemmaster.com/blog/holdem-cbet-strategy/`
- ❌ 잘못된 형식: `https://holdemmaster.com/blog/holdem-cbet-strategy`

**② 사이트맵에는 실제 존재하는 포스트만 등록**
- 코드에 없는 포스트 URL 절대 추가 금지
- 새 포스트 발행 순서: 코드 작성 → 배포 → 사이트맵 추가 (이 순서 반드시 준수)

**③ 사이트맵 수정 후 할 일**
1. 배포
2. 서치 콘솔 → Sitemaps → `https://holdemmaster.com/sitemap.xml` 재제출

---

### 3. GSC(구글 서치 콘솔) 상태 해석

| 상태 | 의미 | 대응 |
|------|------|------|
| 리디렉션 오류 | URL이 다른 곳으로 301 이동됨 | 사이트맵 URL에 `/` 추가 |
| 발견됨 - 색인 생성되지 않음 | 구글이 찾았지만 아직 대기 중 | 색인 요청 또는 기다리기 |
| 실패함 | 유효성 검사 결과가 나쁨 (과거 기록) | 수정 후 유효성 검사 재시작 |

**"실패함"은 새 오류가 아니라 과거 검사 결과임. 수정 후 유효성 검사 다시 시작하면 됨.**

---

### 4. 새 포스트 발행 체크리스트

- [ ] `src/data/posts/새포스트.ts` 파일 작성
- [ ] `src/data/posts/index.ts` 에 import 추가
- [ ] `src/pages/blog/roadmap.tsx` 에 `published: true` 설정
- [ ] `public/sitemap.xml` 에 URL 추가 (끝에 `/` 필수)
- [ ] 배포
- [ ] 서치 콘솔 URL 검사 → 색인 생성 요청
- [ ] WORKLOG.md 발행 현황 업데이트

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
- 서치 콘솔 → `https://holdemmaster.com/sitemap.xml` 재제출
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
- sitemap.xml 제출: `https://holdemmaster.com/sitemap.xml`
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
