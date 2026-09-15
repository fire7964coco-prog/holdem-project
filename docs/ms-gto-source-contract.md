# MS GTO 해설 — 원문·검증 범위

작성일: 2026-09-15. 대상은 `lib/gto-series.ts`의 ①–⑬ 말레이어 해설이다. 이 문서는 집필 입력이며 발행 완료 기록이 아니다.

## 원문과 승계

- 본문은 현재 `lib/posts-en/<slug>.ts`의 평가된 Post 객체 전체를 따른다. 설명·표·예시·조건·한계 고지를 줄이지 않는다. MS 용어·메타·H2·링크는 [MS 공통 브리프](ms-gto-translation-brief.md)를 따른다.
- 2026-09-15 EN 13파일의 SHA-256을 직접 계산했다. 전부 [직전 원문 계약](id-gto-source-contract.md) §2의 해시와 일치했다. ①–⑫의 `masterUpdated`는 2026-09-02, ⑬은 2026-08-21이다. 전체 해시와 파싱 구조는 `tmp/ms-en-source-snapshot.json`에 기록했다.
- EN 원문 대응은 H2·FAQ·표·디렉티브 순서까지 확인한다. 원문 표는 헤더·구분행 포함 637행, FAQ는 67개다. ⑤에는 공통 조건 H2가 없고, ⑩–⑬에는 별도 FAQ H2가 없다. 형식을 맞추려고 절을 추가하지 않는다.
- 계산값은 [시리즈 규격](gto-solver-series-spec.md) §4-B·§4-B-2·§4-B-3, 승인된 좁은 정정은 [직전 원문 계약](id-gto-source-contract.md) **N01–N24·C01–C12 전체**를 승계한다. ID의 문체·소수 쉼표·버튼명은 승계하지 않는다.
- 개인 경험담은 이 시리즈의 필수 요소가 아니다(시리즈 규격 §1). 새 플레이 이력·새 전략·새 solver 실행을 지어내지 않는다. 역사적 관측 날짜와 이번 MS 제작 날짜를 구분한다.

## 이번 MS에서 별도로 확인할 것

1. 실제 MS 화면의 좌석·행동·분모·수치가 원문 정본과 일치하는지 확인한다. 원본 UI 카테고리와 그 뜻을 설명하는 산문을 구분한다.
2. 전체 range 빈도, 개별 hand 빈도, hand-class 비중, 실제 fold율은 다른 지표다. 소수점은 `2.5`, 천 단위는 `1,326`이다.
3. 사전 계산은 플랍 첫 결정만 제공한다. ⑦의 후속 check-raise는 **2026-08-20 별도 계산**이며, 두 root 결과와 집계 불일치 고지를 보존한다.
4. 구조·수치 게이트의 실제 13편 커버리지를 확인하고, 일반 hard 게이트가 판정하지 못한 카드·전략 문단을 별도 검수한다.
5. 새 이미지 26장은 MS 실제 OOP 화면과 range 비교 차트다. 파일명이 맞는지만 확인하지 말고 읽을 수 있는지 직접 연다.
6. 전편 완성 뒤 서로 다른 AI 검수 관점으로 전문을 확인하고, 판정·수정 뒤 변경 부분을 재교열한다. 현지 인간 감수를 주장하지 않는다.

## 현재 등록된 MS 링크로 바꾸는 원칙

MS의 기존 글은 입문 8편이다. EN에 있는 전문 해설 페이지를 MS에서도 있는 것처럼 연결하지 않는다. 아래 변경은 본문의 **기존 링크 자리**에 한하며 설명과 앵커도 실제 목적지의 범위에 맞춘다.

| EN 대상 | MS 대상 | 앵커가 약속할 범위 |
|---|---|---|
| holdem-continuation-bet · holdem-equity · holdem-implied-odds · holdem-strategy | `/ms/solver` | 관련 원리를 직접 확인하는 solver·학습 도구. 별도 전문 가이드라고 부르지 않는다 |
| holdem-position-play | `/ms/blog/holdem-game-order` | 행동 순서와 포지션의 기초 |
| holdem-drawing-odds · holdem-pot-odds | `/ms/blog/texas-holdem-rules-for-beginners` | draw 확률·pot odds의 입문 설명 |
| holdem-3bet | `/ms/blog/holdem-betting-actions` | raise·re-raise의 규칙과 기초 |

현재 EN 원문의 source slug와 링크 대상 자리만 게이트에 허용한다. 다른 로케일과 이후 추가 링크를 통째로 면제하지 않는다. readnext 카드는 별도다. 장수 2개를 유지하고 실제 MS 블로그 중 관련 대상을 고르며, 카드 제목·이미지는 목적지의 실제 Post 값과 맞춘다.

## 완료 기록

검증 결과와 공개 발행 여부는 `docs/ms-gto-publication-review-2026-09-15.md`에 기록한다. 이 문서의 원문 해시 일치는 MS 번역·전략·카드 검수가 끝났다는 뜻이 아니다.
