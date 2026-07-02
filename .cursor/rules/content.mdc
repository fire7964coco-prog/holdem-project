---
description: 이미지 규칙, 글쓰기 기준, JSON-LD 구조화 데이터, 다국어 현지화 원칙
globs: lib/posts/**, public/images/**
alwaysApply: false
---

# 콘텐츠·이미지 기준 — 홀덤마스터

> ⚠️ 이 파일의 규칙은 **`.cursor/rules/posting.mdc`(통합 마스터)에 병합됨**. 포스트 작업 시 posting.mdc를 우선 기준으로 삼고, 이 파일은 보조 참고용으로 둔다.

## 🖼️ 이미지 절대 원칙

### 형식·용량
| 항목 | 기준 |
|------|------|
| 형식 | **webp 전용** (png/jpg 절대 금지) |
| 해상도 | 1200×675 |
| quality | 65 (기본), 80KB 초과 시 60 |
| 파일 크기 | ≤ 60KB (복잡한 이미지 ≤ 80KB) |
| 글당 합계 | ≤ 200KB |

### LCP 최적화 (필수)
- 본문 **첫 번째 이미지**에 `priority={true}` 자동 적용 (keepImagesInBody: true 시)
- `next/image`의 width/height 명시
- `next.config.mjs`에 `minimumCacheTTL: 31536000` 유지

### 접근성 (alt 태그)
- 구체적 상황 묘사 필수 — 키워드 나열 금지
- ✅ "강남 홀덤펍에서 AK로 3-bet 콜 상황, 보드 J92"
- ❌ "홀덤 전략 이미지"

### 이미지 종류
- **사용**: 실제 포커 테이블 사진, 실사 플레이 장면, 칩·카드 클로즈업
- **금지**: 인포그래픽, 일러스트, 차트형 설명 이미지 (텍스트+표로 대체)

### 압축 명령어
```bash
npm run compress:images          # public/images 전체 압축 + 반영
npm run compress:images:preview  # .compressed 폴더에만 저장 (미리보기)
```

---

## ✅ 글쓰기 DO vs DON'T

### DO
- 문단 2~3줄에서 엔터
- 경험담 구체적으로 ("AK 들고 3-bet 콜 받았더니...")
- 표로 원리 설명
- 키워드 자연스럽게 반복

### DON'T
- AI 백과사전식 글 ❌
- 이미지 없이 텍스트만 나열 ❌
- 5줄 이상 긴 문단 ❌
- 키워드 억지 삽입 ❌
- 영어 섞어쓰기 (한국어 독자 대상) ❌

---

## 📐 JSON-LD 구조화 데이터 (모든 포스트 자동 포함)

### 1. Article 스키마
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[포스트 title]",
  "description": "[포스트 description]",
  "datePublished": "[date]",
  "dateModified": "[updated]",
  "author": { "@type": "Organization", "name": "홀덤마스터" },
  "image": "https://holdemmaster.com[image 경로]"
}
```

### 2. FAQPage 스키마 (FAQ 섹션 있을 때)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Q. 질문]",
    "acceptedAnswer": { "@type": "Answer", "text": "[A. 답변]" }
  }]
}
```

### 3. BreadcrumbList 스키마
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://holdemmaster.com/" },
    { "@type": "ListItem", "position": 2, "name": "블로그", "item": "https://holdemmaster.com/blog/" },
    { "@type": "ListItem", "position": 3, "name": "[포스트 title]" }
  ]
}
```

---

## 🌐 다국어 포스트 현지화 원칙 (직역 금지)

다국어 포스트는 기계적 번역이 아니라 **해당 언어권 포커 커뮤니티가 실제로 쓰는 표현**으로 현지화한다.

- 현지어가 자연스럽고 검색량이 있으면 현지어 우선
- 어색하거나 의미 흐려지면 영어 원단어 그대로 쓰거나 병기
- 포커 전문 용어 과번역 금지: `ICM`, `bubble`, `short stack`, `buy-in`, `bankroll` 등

### 언어별 핵심 용어 예시
| 언어 | 현금게임 | 토너먼트 | 바이인 | 버블 |
|------|---------|---------|--------|------|
| 일본어 | キャッシュゲーム | トーナメント | バイイン | バブル |
| 중국어(간체) | 现金局 | 锦标赛 | 买入 | 泡沫期 |
| 스페인어 | cash games | torneos | buy-in | burbuja |
| 인도네시아어 | cash game | turnamen | buy-in | bubble |
| 독일어 | Cash Game | Turnierpoker | Buy-in | Bubble |
| 포르투갈어(BR) | cash game | torneio | buy-in | bolha |

### 다국어 포스트 필수 규칙
- `slug`는 모든 언어에서 동일하게 유지 (hreflang 보존)
- `seoTitle` / `desc` / `tldr` / H2 / FAQ는 각 언어 SERP 기준으로 별도 작성
- 경로: `/[locale]/blog/[slug]` (locale: en/ja/zh/es/de/pt/ar/id/ms/vi/hi/tr)

---

## ⚠️ 포커 핸드 예시 검산 프로토콜

AI가 핸드 예시를 생성할 때 사실 오류가 발생하는 경우가 있음.
**핸드 예시가 나오면 반드시**: 홀카드 + 보드 = 7장 → 베스트 5장 조합 명시 → 승자/스플릿 직접 검산

예: A♠2♦ vs K♠K♦, 보드 Q♣J♥10♦9♠8♥
→ A-K-Q-J-10 (A하이 스트레이트, A 사용) vs K-Q-J-10-9 (K하이 스트레이트, K 사용) → 스플릿? ❌
→ 실제로는 A-K-Q-J-10이 더 높음 → A측 단독 승리
→ 진짜 스플릿은 보드 10-9-8-7-6 같이 누구도 연결 안 되는 경우
