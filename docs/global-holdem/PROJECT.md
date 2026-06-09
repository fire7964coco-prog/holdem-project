# 홀덤 전략 다국어 블로그 — PROJECT (PRD)

> 이 사이트의 마스터 문서. 무엇을·왜·어떻게 만드는지 정의한다.
> 목적: **`홀덤 전략` / `poker strategy` 계열 키워드를 언어별로 발행해, 각 나라 구글 검색 1페이지에 해당 언어 페이지를 노출한다.**
> 함께 보는 문서: `SEO-COPYWRITING-GUIDE.md`(카피 규칙), `PILLAR-CLUSTER-ROADMAP.md`(콘텐츠 구조·발행 순서).

---

## 1. 한 줄 소개

전 세계 포커 플레이어가 **자국어로** 텍사스 홀덤 전략을 읽는 **구글 SEO 최적화 다국어 블로그**.

- 두 축: ① **필라-클러스터 콘텐츠 구조**(토픽 권위), ② **다국어 hreflang 동시 발행**(언어별 검색 점유).
- **범위**: 블로그 콘텐츠 + 다국어 SEO **만**. 게임·커뮤니티·회원·포인트 등 부가기능은 **만들지 않는다**.

---

## 2. 목표 & KPI

| 구분 | 목표 |
|------|------|
| 1차 (0~3개월) | 경쟁 약한 롱테일 클러스터 30~50편을 한국어→영어로 발행, 색인 안정화 |
| 2차 (3~6개월) | 영어 기반 주요 언어(4~8개) 확장, 필라 글로 내부링크 묶기 |
| 3차 (6~12개월) | 18개 언어 전체 확장 |
| 핵심 KPI | 글별 평균순위 1페이지(10위 이내) → **5위 이내**, CTR **5%+**, 체류 **2분+** |

---

## 3. 타깃 & 검색 의도

- **타깃**: 입문~중급 텍사스 홀덤 플레이어 (온라인·라이브·홈게임).
- **검색 의도**: "어떻게 플레이해야 이기나" — 전략·확률·상황 판단.
- **콘텐츠 성격**: 전략·교육 정보. 실제 베팅/도박 알선·환전과 무관하게 포지셔닝.

---

## 4. 언어 체계 & 발행 워크플로우

```text
원본(검수) : 한국어(ko)   ← 운영자가 직접 작성하고 검수하는 품질 게이트
마스터     : 영어(en)     ← 한국어 기반으로 만드는 번역의 단일 기준 원본
번역 발행  : 영어 마스터 기반으로 나머지 16개 언어
```

```text
1. 한국어(ko) 초안 작성 → 직접 검수
        ↓ (검수 통과)
2. 영어(en) 마스터 생성 (직역 X, 영어 SERP 톤으로 현지화)
        ↓ (확정)
3. 영어 마스터 기반 16개 언어 번역 발행
```

### 권장 18개 언어 (포커 트래픽 기준)

```text
ko (원본/검수), en (마스터),
es, pt-BR, de, fr, ru, ja, zh-Hans,
it, pl, tr, vi, th, id, hi, ar, uk
```

- 1차 확장: `es, pt-BR, de, ru`
- 2차 확장: `ja, fr, it, pl, tr`
- 3차 확장: `vi, th, id, hi, ar, uk, zh-Hans`
- `ar`는 RTL 레이아웃 대응 필요(후순위).

---

## 5. 기술 스택

- **Frontend**: Next.js 14 (App Router) — SSG/SSR로 색인·i18n 최적화.
- **다국어 라우팅**: `/[lang]/...` **서브디렉터리** (서브도메인 X) → 봇이 언어별 독립 페이지로 인식.
- **콘텐츠 저장 (택1)**:
  - **A안 (정적, 초기 권장)**: `lib/posts/*.ts` 또는 MD/MDX + 언어별 필드. 빌드 타임 SSG, 서버 비용 0, Core Web Vitals 최상.
  - **B안 (동적, 확장기)**: Supabase + `translations` JSONB(언어별 title/content/description). 신규 언어 INSERT만으로 확장.
- **Styling**: Tailwind CSS (무거운 플러그인 금지, CWV 우선).
- **배포**: Vercel (글로벌 CDN).
- **사이트맵**: 빌드/등록 시 언어별 URL 자동 생성 + hreflang 포함.

### 콘텐츠 스키마 (B안 채택 시)

```sql
create table strategy_posts (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,              -- 영어 슬러그 (전 언어 공유)
  pillar text not null,                   -- 예: 'preflop'
  cluster text,                           -- 예: 'button-position'
  origin_lang text default 'ko' not null,
  translations jsonb not null default '{}'::jsonb,
  -- { "ko": {title,content,description}, "en": {...}, "es": {...}, ... }
  updated_at timestamptz default now() not null,
  created_at timestamptz default now() not null
);
create index strategy_posts_translations_gin on strategy_posts using gin (translations);
alter table strategy_posts
  add constraint strategy_posts_en_required check (translations ? 'en'); -- 마스터(en) 필수
```

---

## 6. URL & hreflang 규칙

```text
/{lang}/strategy/{pillar}/{slug}      예: /en/strategy/preflop/button-position
/{lang}/strategy/{pillar}             필라 허브 페이지
```

- **슬러그는 영어로 고정** (전 언어 공유). 본문·메타만 언어별 번역. 번역해도 URL은 안 바꾼다(색인·링크 유지).
- 모든 페이지에 `hreflang` 상호 링크 + `x-default`(en) 지정.
- `canonical`은 같은 언어 자기 자신.
- 언어 전환 드롭다운은 같은 글의 다른 언어 URL로 이동.

```html
<link rel="alternate" hreflang="ko" href="https://site.com/ko/strategy/preflop/button-position" />
<link rel="alternate" hreflang="en" href="https://site.com/en/strategy/preflop/button-position" />
<link rel="alternate" hreflang="es" href="https://site.com/es/strategy/preflop/button-position" />
<link rel="alternate" hreflang="x-default" href="https://site.com/en/strategy/preflop/button-position" />
```

---

## 7. ⚠️ 중요 메모 / 주의사항

- **Core Web Vitals 최우선**: 무거운 플러그인·라이브러리 금지. 이미지 WebP/AVIF, LCP 최적화, 모바일 우선.
- **AI 정형문 인트로 금지**: "오늘은 ~알아보겠습니다", "본 포스팅에서는…" 사용 X.
- **과장 금지**: 호기심 훅이 본문 약속을 못 지키면 이탈↑ → 순위↓.
- **이미지**: 텍스트 중심 SEO 레이아웃. 생성 이미지는 WebP 변환 + 자체 로고 워터마크로 브랜딩, 저작권 회피.
- **모든 콘텐츠는 오리지널**: 다른 사이트 글을 복사·번역해 옮기지 않는다(중복 콘텐츠 = 검색 점수 하락). 경쟁 글은 분석 대상일 뿐 복제 대상이 아니다.
- **사전적 의미의 기계적 번역 발행 금지**: 원본이 영어이므로 번역이 어색하거나 마땅한 현지어가 없으면 **영어 그대로 쓰면 된다**. 피해야 하는 건 맥락을 무시한 1:1 단어 치환이다. 기준은 하나: "이 언어를 쓰는 포커 플레이어가 읽었을 때 자연스러운가?" (자세히는 SEO 가이드).
- **언어별 직역 금지**: 각 언어 SERP 톤으로 현지화 (자세히는 SEO 가이드).
- **운영 문서는 복잡해도 되지만, 유저 화면은 단순하게.**

---

## 8. 상태 라벨 (로드맵 관리용)

| Status | 의미 |
|---|---|
| Idea | 주제만 있음 |
| Google checked | 공개 SERP 확인 완료 |
| Brief ready | 제목·H2·표·예시 설계 완료 |
| Draft (ko) | 한국어 검수 초안 |
| Master (en) | 영어 마스터 완성 |
| Published | 발행 완료 |
| Translated | 우선 언어 번역 완료 |
| GSC tracking | Search Console 추적 중 |
| Needs update | 정보 재확인 필요 |
