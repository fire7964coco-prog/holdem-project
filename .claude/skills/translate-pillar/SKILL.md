---
name: translate-pillar
description: EN 마스터 포스트를 특정 언어×필라로 번역·경화한다. "JA rankings 번역", "es 재경화", 다국어 포스트를 현지 SERP 기준으로 저작·검수할 때 사용. 직역이 아니라 현지 맥락 재저작이며 §13(카드·확률·계산)만 불변.
---

# translate-pillar — 언어×필라 번역·경화 파이프라인

**원칙**: EN(`lib/posts-en/`, 42편)이 마스터. 번역은 **직역·미러링이 아니라 그 시장 네이티브가 쓴 글처럼 현지 맥락으로 재저작**([[translation-is-contextual-reposting]]). 단 **§13(핸드·카드·확률·계산)은 EN 그대로 불변**(언어 무관 [[translation-model-roles-workflow]]).

지원 언어(12): en / ja / zh / es / de / pt / ar / id / ms / vi / hi / tr. slug는 전 언어 동일(hreflang 보존).

## 1. 착수 전 — stale 진단 (필수)

각 대상 파일의 `masterUpdated` vs EN `updated` 비교:
- **masterUpdated < EN updated** → EN 07-19 경화(경험담·winnable FAQ·§13수정·도입부 링크)가 미반영된 **stale** → §14 전수 대조 필요 [[rehardening-stale-link-drift]]
- **pre-07-03 번역** = 에디토리얼 H2 전면 재설계(큼) / **07-11+ 번역** = 검색형 H2 대부분 보유, 감사동기화+미세보강(작음)
- ★재경화 시 **도입부 glossary 링크(+thumb) 누락**을 전수 점검(07-04~08 번역본 공통 결함)

## 2. 현지어 리서치 먼저 ([[translation-local-research-first]])

번역 착수 전 현지어로 실검색 — 착수 전 홀덤 구글 top10 중 실제 포스팅 5편 정독:
- **JA**: rakko MCP — `mcp__rakko__suggest-keywords`(볼륨·SEO難易度; 종종 null→SERP실측)·`question-search`·`related-keywords`·`headline`(경쟁 見出し=정답지) + WebSearch(SERP약점: 知恵袋/note/저DA 상위=winnable). 매 글 필수 [[lowfruits-xlsx-parse-workflow]] 대체.
- **그 외 언어**(es/pt/de/zh/id…): rakko `metadata-languages`/`metadata-locations`로 로케일 시도 or 현지 서제스트툴/WebSearch.
- 필라 착수 전마다 리서치 → 보고 → 다음.

## 3. H2 현지화 ([[translation-h2-localization-strategy]] · [[translation-ja-longtail-new-h2]])

- **EN 질문형 H2 직역 금지.** 본문 프로즈는 경화 EN 양질 번역 유지, **H2·title·seoTitle·tags만 현지 실검색 형태소로 교체**.
  - JA=명사구+とは/一覧/早見表/強い順/成立条件/どっちが強い/覚え方 (질문형 회피, 조사 생략)
- **★신규 H2 추가 허용**: 현지 툴에서 검색량 있고 경쟁 약하고(SERP실측) 기존 H2/FAQ 미커버인 winnable 롱테일 발견 시 **EN에 없어도** 신규 H2 섹션 추가(Q-A-E·§13정확). **억지 삽입 절대 금지 — 데이터가 뒷받침하는 진짜 gap만**.
- 표기 = 실검색 매치 [[ja-term-notation-search-match]]: 약어는 라틴+맥락앵커(GTO), 동음이의 함정 회피, 이중표기 괄호전술.

## 4. 구조 패리티 — EN 1:1 (count로 검증) ([[translation-link-structure-equals-en]])

번역이 재저작이라도 **구조·색칠은 EN 고정**. 대조 대상(존재여부 아닌 **개수**):
- 내부링크 대상·개수 / 하이라이트색(g/r/b) / thumb / 이미지 / 모든 `:::`디렉티브 / Related·readnext 카드 / FAQ 수
- 검증 universe = `lib/posts-en/` **실제 전체(42편)**, 큐레이팅 목록 금지
- ★이른 필라를 먼저 번역하면 당시 없던 글로의 링크를 strip하게 됨 → **전 언어 42편 완성 후 최종 링크정합 패스**로 복원

## 5. §13 감사 대조 (불변이되 대조는 필수)

카드·확률·계산은 EN 그대로. 단 **번역본이 공통 의역 오류**를 낼 수 있음(예: quad aces 족보 카테고리 오역이 es/pt/de/zh/id 전체에 있었음) → §13 **표현**도 EN과 대조. 감사포인트 예: implied-odds 공식 −(pot+call), outs 9/47=19.1%, 셋오버셋 11.76%/1.04%.

## 6. 숫자·표기 현지 규약

- 유럽식(de/es/pt/id): 천단위 마침표·소수점 콤마 / 통화 오독 방지 마침표
- zh: 영어식 숫자·전각「」인용부호(ASCII `"`는 TS ParseError) / 严格简体
- 비율 "1 in X"·"X-to-1"은 언어별 관습 확인. desc ≤160자.

## 7. 적대적 네이티브 검수 (필라 종료마다) ([[ja-adversarial-native-review]])

배치 종료 시 **현지 홀덤 전문가 페르소나**로 적대적 QA(Agent 툴, 2병렬): §13 수치 손계산·용어 자연스러움·신규 H2 사실성·§14 사실(라이브이벤트 날짜·바이인). 🔴 치명은 즉시 정합.

## 8. 배포

편집→`npm run build`(하드게이트: intl posts 수/언어 수 확인)→커밋(필라 단위)→푸시→보고. 필라 경계마다 보고 후 다음(사용자 규칙).

## 모델 분담 ([[translation-model-roles-workflow]])
EN 제작·검수·계산검증 = Fable5(§13은 EN 1회만). 번역·네이티브 QA = Opus(재계산 X). 정합 = 스크립트.
