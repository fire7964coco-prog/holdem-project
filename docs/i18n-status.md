# 다국어(i18n) 발행 현황 메모

> 마지막 업데이트: 2026-06-10
> 목표: 핵심 글을 18개 언어로 다국어화 (현재 **12개 번역** 완료)

## 1. 발행된 번역 현황

현재 다국어화된 글은 **`holdem-hand-rankings`(홀덤 족보 순위)** 1편이며, 아래 12개 언어로 발행됨.

| # | 언어 | 로케일 | URL 경로 | hreflang | 비고 |
|---|------|--------|----------|----------|------|
| — | 한국어(원본) | ko | `/blog/holdem-hand-rankings` | ko | 기준 원본 |
| 1 | 영어 | en | `/en/blog/...` | en | x-default |
| 2 | 일본어 | ja | `/ja/blog/...` | ja | |
| 3 | 스페인어 | es | `/es/blog/...` | es | |
| 4 | 중국어(간체) | zh | `/zh/blog/...` | zh-Hans | |
| 5 | 아랍어 | ar | `/ar/blog/...` | ar | **RTL(우→좌)** |
| 6 | 포르투갈어(브라질) | pt | `/pt/blog/...` | pt-BR | |
| 7 | 인도네시아어 | id | `/id/blog/...` | id | |
| 8 | 말레이어 | ms | `/ms/blog/...` | ms | id와 중복 회피 위해 별도 작성 |
| 9 | 베트남어 | vi | `/vi/blog/...` | vi | |
| 10 | 힌디어 | hi | `/hi/blog/...` | hi | 데바나가리 + 영어 핸드명 |
| 11 | 독일어 | de | `/de/blog/...` | de | |
| 12 | 터키어 | tr | `/tr/blog/...` | tr | |

### 아직 안 한 언어 (후보, 18개 목표까지 6개 남음)
프랑스어(fr), 러시아어(ru), 이탈리아어(it), 태국어(th), 타밀(ta)/텔루구(te)/벵골(bn), 폴란드어(pl) 등

## 2. 아키텍처 요약 (새 언어 추가 시 참고)

- **로케일 설정**: `lib/intl.ts`
  - `SECONDARY_LOCALES` 배열에 코드 추가
  - `OG_LOCALE`, `HTML_LANG`, `CHROME`(헤더/푸터 문구), `POST_LABELS`(블로그 UI 라벨) 추가
  - RTL 언어는 `RTL_LOCALES`에 추가 → `dirForLocale()`가 `dir="rtl"` 적용
- **콘텐츠 저장**: `lib/posts-<locale>/holdem-hand-rankings.ts` + `lib/posts-<locale>/index.ts`
- **집계 연결**: `lib/intl-posts.ts`의 `POSTS_BY_LOCALE`에 등록
- **라우트**: `app/<locale>/blog/[slug]/page.tsx` + `app/<locale>/blog/page.tsx` (제네릭 팩토리 사용)
- **자동 처리** (추가 작업 불필요):
  - hreflang 상호 링크: `lib/intl-blog-page.tsx`가 `POSTS_BY_LOCALE` 기준 자동 생성
  - sitemap: `scripts/generate-sitemap.mjs`가 `SECONDARY_LOCALES` 기준 자동 생성
  - 관련글·이전/다음글: 같은 언어에 글 2편 이상이면 자동 상호 링크

## 3. 번역 작성 규칙 (중요)

- **기계 번역 금지.** 각 언어 포커 커뮤니티의 실제 용어로 현지화 (예: vi=Cù Lũ, de=Vierling, tr=Kare).
- **언어가 가까운 경우 중복 콘텐츠 주의.** id↔ms처럼 어휘가 비슷하면 문장 구조까지 다르게 새로 작성 (near-duplicate SEO 페널티 회피).
- **본문 내부 링크는 반드시 `/<locale>/blog/슬러그`.** `/blog/...`(언어 코드 없음)나 다른 언어 경로면 빌드가 막힘 → `scripts/check-intl-links.mjs` (prebuild에서 자동 실행).
- 숫자 표기: 언어권 관례 반영 (예: de/tr/vi 소수점 쉼표, en/hi/ms 마침표).
- 공통 쇼다운 이미지(`/images/holdem-hand-rankings-showdown.webp`)는 "kicker/타이브레이크" 섹션 직후에 삽입.

## 4. 한국어 원본 글 목록 (다국어화 후보 풀)

| slug | 주제 |
|------|------|
| holdem-hand-rankings | 족보 순위 ✅ (12개 언어 완료) |
| holdem-game-order | 게임 진행 6단계 (프리플랍~쇼다운) |
| holdem-starting-hand-range | 스타팅 핸드 169개 4등급 |
| holdem-pot-odds-calculation | 팟오즈 계산 |
| holdem-outs-calculation | 아웃츠 계산 (Rule of 2 and 4) |
| holdem-probability | 홀덤 확률 종합 |
| holdem-blind-meaning | 블라인드 뜻 |
| position-is-everything-in-holdem | 포지션 중요성 |
| bluffing-strategy-when-and-how | 블러핑 타이밍 |
| holdem-flush-vs-straight | 플러시 vs 스트레이트 |
| holdem-tiebreak-rules | 동일 족보 타이브레이크 |
| holdem-split-pot-rules | 스플릿 팟 |
| when-to-fold-preflop-holdem | 프리플랍 폴드 기준 |
| holdem-3bet-strategy | 3벳 전략 |
| holdem-overbet-strategy | 오버벳 전략 |
| holdem-beginner-mistakes-10 | 초보 실수 10가지 |
| holdem-vs-7poker-hand-rankings | 홀덤 vs 7포커 족보 |
| holdem-hand-rankings-confusing | 헷갈리는 족보 TOP7 |
| holdem-odds-calculator | 확률 계산 (아웃츠·팟오즈) |
| wsop-2025-tournament-guide | WSOP 2025 (시의성, 다국어화 부적합) |
| apt-jeju-classic-2026-guide | APT 제주 (지역성, 다국어화 부적합) |
