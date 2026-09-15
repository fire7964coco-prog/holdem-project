# 다음 세션: ID 솔버 예제 해설 발행

## 사용자 지시와 현재 범위

- 2026-09-15 사용자: “다음새션에서는 id작업하자 핸드오프정리해주고 새새션에서봐”. **다음 세션의 우선 작업은 인도네시아어(Bahasa Indonesia) GTO 예제 해설 시리즈다.** 일반 queue Q6-b보다 이 명시적 지시를 먼저 따른다.
- PT에서 요청한 고품질 해설 수준을 이어간다. 이번 세션은 인계만 정리하고 ID 조사·집필·캡처·발행은 시작하지 않았다.
- 시리즈 순서와 slug는 `lib/gto-series.ts`가 정본. 인계 시점 파일·파싱 확인: ID 시리즈 파일/등록 0, `app/id/solver/solver-client.tsx` 존재. 다음 시작 때 git 상태와 최신 등록 여부를 다시 확인한다.

## 직전 PT 작업의 기준점

- 콘텐츠 `b8b4269e`, sitemap `82b93235`, 검증 기록 `87ba5d1d`; 모두 main에 push했다. 본문 운영 검증은 2026-09-15 11:56:32 KST 완료.
- 완료 언어의 당시 실측과 검증 결과는 `WORKLOG.md` 맨 위 PT 발행 항목과 `docs/pt-gto-publication-review-2026-09-15.md`에 있다. PT를 다시 집필하거나 이미 제출한 PT URL을 IndexNow에 재제출할 필요는 없다.
- PT에는 실제 앱 화면·레인지 차트, 계산 조건·실전 적용·FAQ까지 들어 있다. **최신 EN을 번역 원문으로 삼고, PT 검수 기록에 남긴 원문 오류 정정을 함께 반영한다.** PT 문장이나 검색어를 ID의 정본으로 복사하지 않는다.

## 읽을 자료

1. `CLAUDE.md`, `session-handoff.md`; 포스트 작업 전 `.cursor/rules/posting.mdc`와 `REVIEW-PROTOCOL.md`.
2. `docs/settled-decisions.md`의 GTO 전파 절차, `docs/gto-solver-series-spec.md` §4-B, 최신 `lib/posts-en/<slug>.ts`.
3. ID 언어·시장: `docs/keyword-bank/id-posting-reference.md` §5·§8, `docs/keyword-bank/id-core-volumes.md`, `docs/id-solver-landing-brief.md`.
4. `docs/translation-terms-id.md`는 **초기 브리프**이며 머리의 최신 정본 라우팅을 따른다. `docs/solver-app-verbatim-id-2026-09-04.md`도 날짜가 있는 과거 자료다. 앱 UI·키워드·검색 의도는 새 작업 때 갱신한다.
5. PT 재사용 근거: `docs/pt-gto-source-contract.md`, `docs/pt-gto-series-translation-brief.md`, `docs/pt-gto-publication-review-2026-09-15.md`. 제목·직답·CTA·표 헤더는 ID 조사 결과로 새로 고정한다.

현재 ID reference §5·§5-A의 확정 표기: **Anda, range, equity, board, hand, 행동은 check / 확인은 cek, readTime은 mnt, readnext는 Lanjut membaca**. 초기 브리프의 cek·menit 지침을 복원하지 않는다. 카드·앱 표시도 실제 원문을 따른다. 같은 reference에 남은 “/id/solver 404” 기록은 랜딩 신설 전 이력이며 현재 파일 상태와 다르다.

## 다음 세션 진행 순서

1. Git 상태, 시리즈 ID 등록 여부, 최신 EN의 updated와 내용 확인. 날짜·masterUpdated는 PT 날짜를 복사하지 말고 실제 기준을 쓴다.
2. 기존 ID 검색 자료·코퍼스와 새 검색을 대조해 시리즈별 의도·제목·메타·용어를 정한다. 측정하지 않은 검색량·top10·PAA를 측정했다고 쓰지 않는다. Anda체, 인도네시아어와 말레이어의 구별, 기존 용어 분열을 먼저 확인한다.
3. 실제 `https://solver.holdemmaster.com/?lang=id`의 UI와 예제 값을 확인하고, ID 화면과 차트를 준비한다. **앱의 설명 노트는 전략 정본이 아니다.** 출력값·§4-B·검수된 원문을 기준으로 해설한다.
4. 공통 브리프와 제목/카드 라벨을 먼저 고정한 뒤 **①–④ / ⑤–⑧ / ⑨–⑬의 4/4/5 배치**로 집필한다. 배치별 기계 검사는 즉시, 언어·SEO·전략·수치 전체 검수는 전량 완료 후 1회, 수정 후 교열 1회, 콘텐츠 배포 1회다.
5. `lib/posts-id/index.ts` 등록, ID 랜딩의 시리즈 링크, 기존 ID 관련 글 역링크를 연결한다. `docs/locale-intentional-diffs.md`의 미발행 면제는 대상 글이 생기면 해소한다. 정확한 연결 위치는 해당 ID 글을 읽고 결정한다.
6. 전체 빌드·브라우저·라이브 확인·sitemap·변경 URL만 IndexNow 제출까지 완료한다. 로컬 문서에 검증 결과를 남긴다. 별도 앱 개편이나 다른 언어 소급 작업으로 범위를 넓히지 않는다.

## PT에서 확인한 재발 방지 사항

- **원문의 좁은 오류 정정 목록을 반드시 읽는다.** 예: BB의 AJ 보유, nuts와 완성 스트레이트 구분, suited 6x의 추가 trips 블로커 오류, equity와 실제 팟 승리 빈도 구분, 0% 액션만으로 EV 차이를 단정하지 않기, Q-T-7에서 JJ의 underpair·AJ의 overcard 설명.
- ⑦은 기본 예제와 **별도 후속 노드 계산**이 있다. root lead 3.2%와 별도 solve 2.0%, check-raise 14.9%의 출처·분모를 섞지 않는다. 역사적 exploitability 0.16은 당시 내부 단위이며 0.016bb = 약 0.29% pot이라는 설명을 유지한다.
- ⑨의 큰 베팅 98.4%는 총 베팅 빈도가 아니다. 반올림값 합, MDF 전제, 한 장/두 장 드로우 확률, 후속 액션의 미계산 범위를 지킨다.
- UI의 옵션·라벨은 실제 ID로 확인한다. 블로그 본문 숫자는 ID 표기와 일관되게 쓰되 숫자값 자체를 바꾸지 않는다. 실제 화면 인용이 본문 규약과 다르면 그 차이를 브리프에 명시한다.
- 이미지 q82와 가독성을 지킨다. PT 캡처는 화면 비율을 보존했고, 차트는 1200×675였다. 본문의 자체 히어로 중복을 피한다.

## 재사용 가능한 코드와 검사상의 한계

- 미디어: `scripts/capture-solver-spots.mjs`의 L10N과 `scripts/make-solver-range-charts.mjs`의 CHART_L10N에는 **인계 시점 ID가 없다**. 실제 ID UI 확인 후 필요한 지원을 추가한다. PT의 쉼표 처리·실패 감지·차트 selftest를 참고한다. `scripts/convert-solver-captures.mjs`의 기본값은 q76이므로 **`--quality=82`를 명시**한다. 일반 ID 글의 과거 “공용 이미지·alt만 번역”을 이번 GTO 화면/차트 제작에 그대로 적용하지 않는다.
- 수치/구조: `scripts/check-gto-numbers.mjs`의 소수 쉼표 정규화는 **PT 전용**이며, `scripts/check-gto-structure.mjs`에도 ID 전용 규칙은 아직 없다. 그대로 실행한 0건을 완전한 ID 검증으로 오해하지 않는다. 지원 확장 시 selftest와 기존 언어 기준선을 함께 확인한다.
- `audit-hardening --locale`의 오류 0은 미판정 카드 문단이나 GTO 형제 표까지 봤다는 뜻이 아니다. 수치 집합뿐 아니라 행별 값·카드·분모·노드·해설을 검증한다.
- 임시 PT 검사 예시: `tmp/pt-series-audit.mjs`, `tmp/pt-release-check.mjs`, `tmp/verify-pt-series-render.mjs`, `tmp/verify-pt-live.mjs`. **tmp는 Git 미추적이므로 파일이 없을 수 있다.** 있다면 구조를 참고하되 PT 경로·표기 정규화·제목 기대값을 ID에 맞게 바꾼다. Jiti는 캐시 없이 파싱한다.
- `npm run build` 전체 로그를 파일로 보관한다. `build:vercel`만으로는 sitemap이 생성되지 않는다. 정적 URL lastmod는 Git 커밋일 기준이므로 콘텐츠 커밋 후 sitemap을 다시 생성해 함께 push한다.
- FAQ JSON-LD는 `@graph` 안에 있다. live sitemap은 XML 원문으로 읽는다. 모바일 가로 넘침·본문 이미지·canonical·ID 언어·hreflang·FAQ·시리즈/역링크를 확인한다. IndexNow 접수와 색인 완료는 구분한다.

## 다음 세션 첫 요청 예시

“session-handoff.md와 docs/id-gto-next-session.md를 읽고, PT와 같은 품질로 ID 솔버 해설 13편 작업을 시작해.”
