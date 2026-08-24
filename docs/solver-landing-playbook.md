# 다국어 솔버 랜딩 플레이북 — `/{locale}/solver` 신설·유지보수 정본

> **승격 2026-08-24** — session-handoff.md에 쌓여 있던 ja·es·pt·de·zh 다섯 회차의 확정 규율을
> 여기로 옮겼다(원문 = `docs/handoff-archive/2026-08-24-session-handoff.md`).
> **새 랜딩을 열거나 기존 랜딩을 손댈 때 이 파일을 먼저 통독한다.**
>
> 상태(2026-08-24): 랜딩 **ko en ja es pt de zh 7개** · 앱은 8개 언어(`ko en ja es pt de zh zh-hant`).
> 남은 것 = **zh-hant 하나** — 그 착수 인계분은 `session-handoff.md` START HERE에 있다.

---

## 1. 자산 지도 — 다시 만들지 마라

| 자산 | 위치 |
|---|---|
| 키워드 뱅크 (실측 수치·SERP·카니발 판정) | `docs/keyword-bank/{es,pt,de,zh}-gto-solver.md` — **수치는 로케일마다 재실측, «방법»만 재사용** |
| 앱 화면 축어 8개 언어 | `docs/solver-app-verbatim-5langs-2026-08-24.md`(ko·en·de·zh·zh-hant) + ja·es·pt 기납품 |
| 수치 정본 (13스팟 8지표) | `docs/gto-solver-series-spec.md` **§4-B 확정표** — 앱 화면이 아니라 이것이 심판 |
| 폐기 명제 목록 (착수 체크리스트) | `홀덤검수/reports/폐기명제목록-2026-08-23.md`(19행+) + regression — 회귀 77/77 |
| 번체 검색 관습 | `docs/zh-hant-search-behavior-report.md` · `docs/translation-terms-zh-hant.md` §7-C |
| 도구 운영 규칙 (라쿠·DataForSEO·lowfruits) | `docs/rakko-playbook.md` — **키워드 조사 전 필독** |

## 2. 착수 순서 12단계 (ja 회차 확립 — 전 로케일 동일)

1. 라이브 `?lang=<locale>` 확인 → 2. `app/<locale>/` 실재 라우트 세기 → 3. 볼륨+질문 실측 →
4. 자사 코퍼스 전수 grep(카니발) → 5. SERP 6쿼리 top-30 + 상위 페이지 원문 → 6. 뱅크 작성 →
7. 3파일 작성 → 8. 등록 6곳 → 9. 빌드+게이트 → 10. **적대검수 4렌즈** → 11. 반영+2차 교열 → 12. 배포

## 3. 등록 6곳 + hreflang — 하나라도 빠지면 «조용히» 실패한다

`lib/hub-routes.ts` · `lib/hub-i18n.ts`(**항목 없으면 셸·사이드바가 통째로 영어/한국어로 떨어진다** —
pt에서 실제로 걸렸다) · `components/side-rail.tsx` · `components/solver-promo.tsx`(COPY 한 곳) ·
`scripts/generate-sitemap.mjs` · **각 랜딩의 `alternates.languages`**.

- 🔴 **hreflang은 «전 랜딩 파일이 완전히 같은 문자열 세트»여야 게이트를 통과한다.**
  현재 세트(7파일): `ko-KR en-US ja-JP es-ES pt-BR de-DE zh-Hans`. 새 랜딩 하나를 열면
  **기존 파일 전부에 새 코드를 같이** 단다(zh-hant를 열면 여덟 파일 = `zh-Hant` 추가).
- 캡처 스크립트 3종(`capture-solver-spots.mjs`·`make-solver-range-charts.mjs`·
  `convert-solver-captures.mjs`)은 `--lang` 지원 — 새 로케일은 **화면 문자열 사전을 라이브에서 직접
  읽어** 채워라. 안 갈면 에러가 아니라 **«조용히 0건»**. 원본 PNG는 커밋 금지(`.solver-captures-*/`).

## 4. 공통 규율 — 물려받는 것은 «규율»이지 «값»이 아니다 (5개 언어 연속 실증)

1. 🔴 **«가진 것»부터 세어라.** 도구 라우트(`hand-chart`·`calculator`·`win-rate-quiz`)는 로케일마다
   있고 없고가 다르다 — EN 링크를 그대로 옮기면 404다. 없으면 그 로케일 블로그 글로 간다.
2. 🔴 **번역하지 말고 실측하라.** «solver»가 그 언어에서 쓰이는 말인지부터:
   ja는 `ソルバー`가 죽은 표기(22배 차), es·pt는 살아 있고, zh는 라틴 문자열(`gto poker`)이 지배.
   **어순도 언어마다 반대다**(es `solver poker` 우세 ↔ de `poker solver` 우세). **표기 변형(악센트·
   움라우트·자형)은 방향이 일정하지 않으니 표기마다 재라** — 단 간체/번체 자형은 볼륨을 안 가른다
   (구글이 한 시리즈로 정규화 · 번체 페이지가 간체 SERP에 그대로 랭크).
3. 🔴 **오염어(동음이의)는 언어마다 다시 찾아라.** es `GTO`=과나후아토 · ja `ジーティーオー`=드라마 ·
   pt `solver`=엑셀 · de `Solver`=엑셀(GTO는 깨끗) · zh `GTO` 단독=자동차·아니메, `solver` 단독=수학 솔버.
4. 🔴 **의도가 다른 볼륨을 조준하지 마라.** SERP로 의도를 실측한다 — es `simulador de poker`(무료 게임) ·
   de `simulator`·`ohne anmeldung`(게임) · TW `勝率計算器` 1,900(게임 승률 계산기 · 포커 0/10).
5. 🔴 **«볼륨 0 = 수요 0»으로 읽지 마라.** de `kostenlos` 롱테일이 전부 null인데 SERP(Reddit)로 수요는
   실재했다. 산문은 읽히게 쓰고 **검색어형은 「같은 것을 부르는 여러 이름」 문단에만** 축어로 놓는다
   (제품명·앱 타이틀 ≠ 검색어 — 층이 다르다).
6. 🔴 **차별화 훅은 «경쟁자가 이미 뭐라고 쓰나»를 SERP에서 센 뒤 정한다.** ja는 「無料」가 이미 6/10이라
   「登録不要・インストール不要」로 갔고, zh는 경쟁자(TexasSolver 등)가 전부 설치형이라 「브라우저에서
   바로」가 갈랐다.
7. 🔴 **카니발 — 자사 코퍼스 전수 grep 후에 축을 정한다.** 가져가도 되는 축은 «자사 0편» 확인 후에만.
   프리플랍 레인지표 축은 `holdem-starting-hands-chart` 소유 — 랜딩은 **포스트플랍으로 가른다**.
8. 🔴🔴 **앱 화면 축어는 «보드»에만 쓰고 «해설»에는 쓰지 마라.** 판정 기준은 앱이 아니라 스펙 §4-B.
   ja에서 앱 문구를 옮긴 사실오류 3건이 나왔다(하나는 EN이 전날 철회한 문장). 라벨(용어)은 반대로
   **앱 축어가 정본**이다 — 화면을 먼저 떠서 대조하라.
9. 🔴 **폐기 명제 목록(19행+)을 착수 체크리스트로 쓴다.** de가 첫 사례 — 신설 시점에 앱 결함 ①④⑦⑧을
   전부 회피했다.
10. 🔴 **코퍼스 정본을 먼저 찾는다** — `holdem-glossary` 보유 로케일(`de en es id ja pt zh zh-hant` 8곳)은
    용어 정본이 이미 있다. 있으면 재량이 아니다.
11. 🔴 **적대검수 4렌즈 병렬**(현지 네이티브 · §13 산수 · SEO 카니발 · 정합성) + **반영 후 2차 교열 패스**.
    프롬프트에 「의도적 제외 목록 · 통과 항목 나열 금지 · 커버리지 한 줄」. 지적은 전건 원문 판정 후 반영.
12. 🔴 **검수 청구는 «신설 + 기존 랜딩 전수 횡단»이 규칙이다**(M-046 §5-③).
13. **정렬·우선순위는 볼륨으로.** SD는 엔드포인트를 밝혀 참고로만(같은 벤더 두 엔드포인트가 다른 SD를
    재현성 있게 준다) · **CPC는 근거 금지**(벤더 간 30배). 본체 = `docs/rakko-playbook.md`.
14. **정정 주석이 폐기 문구 원문을 인용하면 회귀 앵커를 재도입한다 → 주석 인용은 의역으로**(M-047).
15. **개수 하드코딩 금지**(RP-08 계급) — «drei der Lernspots»류. zh처럼 «专门有一组»식 표현으로 회피.

## 5. 도구 함정 (실증된 것만)

- 🔴🔴 **라쿠 Taiwan location은 죽은 소스다**(2023-03 이후 월별 0 · `gto wizard` 라쿠 10 대 DFS 4,400).
  **대만 볼륨은 DataForSEO로만**(location 2158 · `language_name: "Chinese (Traditional)"` —
  ⚠ `language_code`는 400 에러). HK는 라쿠 유효(두 벤더 일치 실증).
- **firecrawl 키리스 `/v2/search`는 비ASCII 쿼리를 망가뜨린다** — 순위는 라쿠 순위체크, 본문은 firecrawl로 분리.
  google 직접 크롤은 429/캡차.
- **라쿠 `question-search`의 `相対需要`는 그 결과 안의 순위**이지 검색량이 아니다 — 볼륨과 같은 표에 놓지 마라.
  MCP는 크레딧 1.5배.
- **bash `grep -n` 라인번호가 어긋나는 파일이 있다**(ja solver-client에서 12줄) — `awk`/`sed`로 확인.
- DataForSEO `keyword_suggestions`는 **요청당 태스크 1개만**(배열은 조용히 실패) · `keyword_ideas`는 노이즈 심함.

## 6. 랜딩 공통 사양 (확정)

- 훅·H2는 실측 검색어로, 질문형 H2 다수 + FAQ 20문항± (로케일 고유 방어 문항 포함).
- 도구 링크는 실재 라우트만 · 내부링크는 EN과 구조 동일(개수까지 — `translation-link-structure-equals-en`).
- 게이트: `npm run build` + hreflang 세트 검사 + `check:meta-lang` + directives 짝 · robots `index,follow` ·
  사이트맵 등재 확인.
- 완료 후: WORKLOG 기록 · 뱅크에 다음 로케일 인계분 동봉 · 검수 청구(신설+횡단).
