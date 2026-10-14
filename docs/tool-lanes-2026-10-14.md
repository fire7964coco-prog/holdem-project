# 도구 레인 3개 — zh-hant 시뮬레이터 · fr·ru 대회 보드 · ar 도구 (2026-10-14 사장님 지시)

> **누가 읽나**: 레인 창 3개(각 워크트리의 비추적 `HARDEN.md`가 이 파일을 가리킨다) + 헤드(본체 main `Holdem_Project`).
> **왜 생겼나**: 사장님 10-14 — *«그동안 못했던 큰 작업을 레인창을 띄워서라도 진행 · 레인창을 띄워서 작업을 해도 품질저하가 일어나면 안 됨 · 아스트라도 적극 활용»*. 범위 = 사장님이 고른 ①②③(hi·tr = 검수 폴더가 전수 검수 중이라 제외).
> 🔴 **헤드 = 본체 main.** 레인은 만들고 검수하고 커밋까지. **머지·빌드 확정·push·배포·우편함·WORKLOG·핸드오프 = 헤드.** 머지가 곧 승인이다.

---

## 0. 레인 표

| 레인 | 폴더 · 브랜치 | 범위 | 선례 커밋(파일 목록 = `git show --stat <해시>`) |
|---|---|---|---|
| 🅰 zh-hant 시뮬레이터 | `../Holdem-wrq-zhhant` · `lane-wrq-zhhant` | `/zh-hant/win-rate-quiz` 1페이지 | zh `7f9dcb59`(ja·zh·es·de) · ru `7efdcdd3`(L1 마지막 · 9파일) |
| 🅱 fr·ru 대회 보드 | `../Holdem-tour-frru` · `lane-tour-frru` | `/fr/tournaments` · `/ru/tournaments` | pt·tr `11eb349d` · hi·ar `88dc428e` |
| 🅲 ar 도구 | `../Holdem-ar-tools` · `lane-ar-tools` | **회차 1** `/ar/calculator` + `/ar/hand-chart` → **회차 2** `/ar/win-rate-quiz` | vi `5b4b9b50`(계산기+차트) · ru `7efdcdd3`(시뮬레이터) |

🔴 **범위 밖(하지 마라)**: `/ar/solver`(솔버 앱에 ar UI가 없다 — `solver/src/solver-feedback.ts` LOCALES 15에 ar 없음 · 랜딩 CTA가 영어 앱으로 떨어진다 → 헤드가 솔버에 문의할지 사장님 판단) · `/ar/glossary`(정의 정본인 ar `holdem-glossary` 글이 없다 — 도구 확장 계획 §3 회차 2 원칙) · 퀴즈 · 대회 **데이터 추가**(`lib/tournaments.ts` 행 추가·수정 금지 — 보드는 기존 행을 그 언어로 보여 주는 것) · 09-29 잔여(buyin·venue 표기 규칙) · 다른 로케일 문구 손질.

---

## 1. 품질 장치 — 세 레인 공통 (이것을 빼면 머지하지 않는다)

한 레인 = **세션 3구간 A → `/clear` → B → `/clear` → C**(`docs/ms-translation-lanes.md` §3과 같은 모양). 구간 끝마다 멈추고 다음 한 줄을 사장님께 말한다. 🅰·🅱처럼 작으면 A·B를 한 세션에 이어도 된다 — **단 C는 반드시 `/clear` 뒤 새 맥락**(쓴 사람의 맥락으로 검수하면 맹점이 겹친다).

### A 준비 (Opus) — «무엇을 쓸지»를 원문으로 확정

1. `git merge main` → 이 파일 통독 → 선례 커밋 `git show --stat` + 선례 로케일 파일 통독(구조·등록 자리 목록을 표로).
2. **용어 정본** 순서: `docs/translation-terms-<loc>.md` → 그 로케일 기존 글 코퍼스 grep(`lib/posts-<loc>/`) → `.cursor/rules/multilingual-localization.mdc`. 표에 없는 용어 = 진행 파일 «신규 용어» 표(EN | 채택 | 근거 URL·grep 줄).
3. **숫자 표기 = 코퍼스 실측**(천 단위·소수점·% 위치·공백) — 선례 사전의 `numberLocale`·`decimalComma`·`percentPrefix`·`percentGap` 키 의미를 확인하고 그 로케일 글에서 실제로 세라. 추측 금지.
4. **헤드텀 실측**(도구가 주인인 검색어): DataForSEO `dataforseo_labs` 볼륨 + `serp/google/organic/live/advanced` 1~2건(🔴 태스크 1개씩 · location은 `locations_and_languages`로 확인) + 구글 자동완성 → `docs/keyword-bank/<loc>-<도구>.md`. 🔴 CPC는 근거 금지(`docs/rakko-playbook.md`). 라쿠 suggest·related 류는 Japan 고정이라 쓰지 마라.
5. 🤖 **아스트라 A-교차(필수)**: 용어표·숫자 표기·헤드텀 후보를 스크래치 폴더에 복사 → 현지 편집자 페르소나로 «이 표기를 현지 독자가 실제로 쓰나 · 1차 출처 URL 축어로» 반박시킨다(§3 명령). 결과는 본체가 원문 재확인 후 채택/기각 → 브리프에 출처 구분해 적는다.
6. **브리프** `docs/tool-lanes/<id>-brief.md` — 파일 목록(만들 것·고칠 것 L##) · 용어표 · 숫자 규칙 · 확정 카피 · 링크 대상(실재 슬러그만 — `ls lib/posts-<loc>/`) · §13 자리 · 하지 말 것.
7. 🪶 **Fable 서브 1회 — 카피만**(`Agent` · `model: "fable"`): 입력 = EN 메타·H1·FAQ 질문 목록 + 헤드텀 실측표 + posting.mdc «SEO 카피» 절 축어. 출력 = title(~55자)·description(≤160자)·H1. 🔴 새 사실·수치 금지. 글자 수는 Opus가 다시 잰다.

### B 작성 (Opus) — 브리프 하나만 입력

- 선례 로케일 파일을 **틀로 복사**하고 문구만 바꾼다(구조·키·마크업 = 선례와 동일 · 사전 키를 지우거나 추가하지 마라 — 전 로케일 타입이 깨진다).
- 🔴 **§13 불변**: 카드·확률·수치·범위 데이터는 EN 축어(표기 변환만 3항 규칙대로). 계산기·차트·시뮬레이터 «값»은 공용 엔진이 낸다 — 사전에 숫자를 손으로 적는 자리는 FAQ·예시뿐이고 그건 EN 값 그대로.
- 🔴 «솔버가 계산한 차트»라 쓰지 마라(차트 = 공개 자료 합의 레인지 · `docs/solver-factsheet.md`).
- 등록 자리는 **자기 로케일 한 줄씩만**(hreflang alternates · `lib/hub-routes.ts` · `components/side-rail.tsx` · `scripts/generate-sitemap.mjs` · 선례가 건드린 그 밖의 자리). 🔴 `public/sitemap.xml`은 **커밋하지 마라**(빌드가 다시 만든다 · 세 레인이 같은 파일을 만져 충돌만 낸다 — 헤드가 최종 빌드로 만든다).
- 백틱 금지(문자열 템플릿 안) · 다른 로케일 파일 수정 금지(오류를 봤으면 진행 파일 «헤드 요청»에).
- 자기 게이트: 선례 커밋 메시지의 «검증:» 줄 전부 + `npx tsc --noEmit -p .`에서 **내 파일 오류 0**(기존 오류는 무시) + `npm run build` exit 0.

### C 마감 (Opus · 새 맥락) — 게이트 → 기계 대조 → 렌즈 + 아스트라 → 2차 교열

1. 게이트 전건 재실행(B와 같은 목록) + `npm run check:hreflang` · `check:intl-links` · `check:meta-lang`(postbuild에 포함).
2. **기계 대조**: 내 사전 vs EN 사전을 스크립트로(scratchpad `.mjs`) — ① 키 집합 동일 ② 문자열 안 숫자·카드 토큰(`[2-9TJQKA][♠♥♦♣shdc]` · `\d+([.,]\d+)?%?`) 집합이 EN과 같은가(표기 정규화 후) ③ 빈 문자열·영어 잔존(라틴 3단어 이상 연속 — ar·ru·zh-hant) ④ 링크 대상 파일 실재. 불일치 전건 판정.
3. **렌즈 3종 병렬**(한 메시지 · `model: "opus"` 명시 · 공통 문구 «문제없으면 없다고 써라 · 오탐보다 오통과가 나쁘다 · 확신도 필수 · EN에도 같은 문장이면 EN-먼저로 표기»):
   - **현지 편집자**(네이티브 자연스러움 · 용어 일관 · 존칭/2인칭 · 직역 냄새)
   - **딜러·수학**(§13 · FAQ 수치 · 도구 UI가 말하는 계산과 실제 엔진 동작 일치 — 화면에서 직접 돌려 보고)
   - **SEO·UI**(title·desc 길이 · 헤드텀 위치 · 카니발(같은 로케일 글과 헤드텀 충돌) · 버튼 라벨 잘림)
4. 🤖 **아스트라 C-교차(필수 · 렌즈와 같은 시점에 백그라운드)**: 내 새 파일 + EN 정본 사전 + 브리프를 스크래치 사본으로 → «현지 원어민 + 포커 코치» 페르소나 · §13 독립 검산 · 1차 출처 축어 · «오탐이 미탐보다 나쁘다». 렌즈 결과와 **출처를 구분한 한 판정표**로 합친다(채택 / 기각 + 이유).
5. **화면 실측**(`screen-review` 스킬 · 레포 Playwright · `npm run build` 뒤 `npx next start -p <빈 포트>`): **390 · 1440 두 폭** · 넘침 0 · 잘림 0 · 콘솔 오류 0 · 실제 조작 1회(시뮬레이터 1판 끝까지 · 계산기 입력 1회 · 차트 포지션 전환 · 보드 필터). 🔴 **ar = RTL**: 카드·숫자·범위 격자·차트 축은 LTR로 읽혀야 한다(선례 `/ar/tournaments` 처리 확인 · 격자가 뒤집히면 결함). 띄운 서버는 **PID 대조 후 내가 끈다**(이름 일괄 종료 금지 · AUTONOMY-LIMITS).
6. 반영 → **2차 교열**(고친 줄만 렌즈 1개 재판정 — 반영이 새 오류를 만들었나).
7. 커밋(`git add` = 내 파일만 · 메시지 «feat(<도구>): <loc> … (tool-lanes 🅰/🅱/🅲)» · 끝에 Co-Authored-By 줄) → 진행 파일 «보고» 절 → 멈추고 말한다: 「▶ 헤드 창에 «<id> 끝났어, 머지해»」.

### 멈춤 규칙 (`AUTONOMY-LIMITS.md` — 레인도 같다)

- 한 실행 최대 90분(마지막 5분 = 진행 파일 저장) · 진척 없음 20분이면 중단 · 같은 원인 오류는 원인 수정 후 재시도 1회 · `git push`·`git stash`·`git checkout main` 금지.
- 🔴 **15:00 사용량 리셋 전**: 14:45가 되면 구간 중간이라도 진행 파일에 «어디까지 · 다음 첫 명령»을 적고 멈춘다. **반쯤 된 것은 커밋하지 않는다**(헤드도 머지하지 않는다).

---

## 2. 레인별 특이점

### 🅰 zh-hant 시뮬레이터 (독자 = 대만)
- 틀 = `app/zh/win-rate-quiz/{page.tsx,win-rate-quiz-client.tsx}`(간체) → 번체로 **현지 재저작**(글자 변환이 아니다 — 대만 어휘: 簡體 «概率/胜率»류 ↔ 대만 실사용 표기는 코퍼스 `lib/posts-zh-hant/` grep으로 정한다 · 예: 勝率·機率·底池賠率가 실제 쓰이는지 센다).
- 거울쌍: 숫자·카드·구조는 zh와 바이트 동일이어야 한다(`npm run check:mirror-pair`가 이 페이지를 보는지 확인 — 안 보면 C-2 기계 대조로 대신).
- 등록 = ru `7efdcdd3` 9파일과 같은 자리(`lib/win-rate-quiz-alternates.ts` `"zh-Hant"` 줄 · hub-routes · side-rail · generate-sitemap · `app/zh-hant/solver/solver-client.tsx`의 시뮬레이터 링크 한 줄 · `docs/keyword-bank/win-rate-quiz-ltr.md`에 zh-hant 행).
- 퍼센트 표기: zh-hant = «35.4%»(en과 같음 · 10-13 `ba808d72` 판단) — 사전 키 확인.

### 🅱 fr·ru 대회 보드
- 본체 = `lib/tournaments-i18n.ts`에 fr·ru `BoardStrings` + FIELD/PAREN/CITY/COUNTRY/NAME_OVERRIDE/SCHEMA_DESC/MONTH(선례 `11eb349d`·`88dc428e` 그대로) + `app/{fr,ru}/tournaments/page.tsx` + `lib/tournaments-hreflang.ts` + `scripts/check-tournaments-i18n.mjs` `BOARD_LOCALES`에 fr·ru 추가(게이트가 새 로케일을 보게 · 🔴 게이트 «완화»는 금지 — 목록 추가만).
- 🔴 **대회명·도시·장소의 현지 표기는 1차 출처만**(대회 공식 사이트의 그 언어판 · 없으면 원어 유지 · §12-B — WebSearch 요약 금지 · WebFetch는 축어 인용 요구). 각 표기마다 진행 파일에 URL.
- 🔴 ru = **합법성 축을 열지 않는다**(NOTE 비움 · «러시아에서 합법인가»류 문장·FAQ 금지 — `legality-ban-scope-topic-vs-tangent`). fr도 같다(ARJEL/ANJ 언급 금지).
- 날짜·월 이름: fr «12 oct.» 류 · ru 생격(«12 октября») — 선례 MONTH 구조가 격변화를 담는지 확인하고, 못 담으면 숫자 날짜로(헤드 요청에 적기).
- 숫자 = fr 고정공백 «1 000» · ru 공백 «1 000» + 쉼표 소수 — 코퍼스 실측.

### 🅲 ar 도구 (독자 = 아랍권 · MSA)
- **회차 1** = 계산기 + 핸드차트(vi `5b4b9b50`의 19파일에서 vi 고유 링크·글 수정은 빼고 같은 자리). **회차 2** = 시뮬레이터(🅰와 같은 자리 · 🅰가 먼저 머지되면 `git merge main` 후 그 위에).
- 🔴 **RTL**: `dir` 처리는 선례 `/ar/tournaments`와 공용 컴포넌트가 이미 하는 것을 먼저 읽는다 — 공용 컴포넌트(`components/calculator`·`components/hand-chart`·`app/win-rate-quiz/_*.tsx`)를 고쳐야만 RTL이 맞는다면 **고치지 말고 헤드 요청**(공용 파일 = 전 로케일 영향 · EN SSR 바이트 동일 게이트가 필요하다).
- 숫자: 아랍 코퍼스(`lib/posts-ar/` 7편)가 서양 숫자(0-9)인지 아랍-인도 숫자(٠-٩)인지 **센다** · % 위치 · 소수점(٫ vs .) — 엔진 출력과 사전 문자열이 같은 체계여야 한다.
- 링크 = ar 글 7편뿐(`ls lib/posts-ar/`) — EN 슬러그를 베끼면 404(`check:calc-parity`의 F항이 본다). 없는 글로 가는 quickRef link는 비운다(tr 회차 2 선례).
- 용어: `docs/translation-terms-ar.md` → ar 7편 grep. 포커 용어를 음차(بوكر·فلوب)하는지 번역(القائمة…)하는지 코퍼스 다수결.

---

## 3. 아스트라 실행 꼴 (레인이 직접 · 쓰기 불가 구성)

```
# 1) 스크래치 사본 (레포 경로를 -C로 주지 마라)
mkdir <scratchpad>/astra-<id>-<A|C> && cp <대상 파일들> <그 폴더>/  + PROMPT.md 작성
# 2) 백그라운드 실행 (ChatGPT 인증 · API 과금 없음)
codex exec -m gpt-6-astra -s read-only -C <그 폴더> --skip-git-repo-check -c 'web_search="live"' - < PROMPT.md > REPORT.md 2> REPORT.err
```
- PROMPT 필수 문단: 페르소나(대만 출판 편집자+라이브 포커 코치 / 파리·모스크바 포커 매체 편집자 / 걸프·이집트 포커 코치 겸 아랍어 교정자) · 서치 규율(1차 원문 직접 열람 · 축어 인용 · 개수는 직접 계수 · 못 열면 판정 금지) · «의도적으로 뺀 것»(§0 범위 밖 목록) · «오탐이 미탐보다 나쁘다 · 문제없으면 없다고 써라» · 출력 = 표(자리 | 판정 WRONG/RISKY/OK | 근거 축어 | 처방).
- 보고를 그대로 믿지 마라 — 본체(레인)가 원문 재확인 후 채택/기각(09-29 첫 실행: 8건 중 1건 오독).
- 아스트라가 DFS·레포 쓰기를 못 하니 «볼륨 측정 요청»은 레인이 DFS로 메운다.

---

## 4. 헤드(본체 main)가 하는 것

1. 레인 «끝났어, 머지해» → `git log --oneline main..lane-<id>` · `git diff --stat main...lane-<id>`(🔴 범위 밖 파일이 섞였으면 돌려보냄) · 진행 파일 «보고»·판정표 통독(렌즈·아스트라 채택/기각이 다 있나).
2. 머지 순서 = 끝난 순서 · 공용 등록 파일 충돌은 헤드가 «양쪽 줄 모두» 남겨 푼다. 머지 뒤 `npm run build` exit 0 · 라이브 전 로컬 1폭 스폿 확인.
3. push → Vercel → 라이브 Playwright(새 URL 200 · robots «index, follow» · hreflang 세트) → **MB 1행**(커밋 해시 · URL · 판정 요청 범위) → `npm run indexnow -- --since 2026-10-14` → 사장님 GSC 수동 색인 목록을 핸드오프 «사장님 몫»에.
4. `lane:sync` 대상이 아니므로 다음 회차 레인은 `git merge main`으로 받는다(🅲 회차 2는 🅰 머지 뒤).
5. 마감: 워크트리 정리(미커밋 확인 먼저 · `node_modules` 정션은 `rmdir`로 링크만) · WORKLOG · 핸드오프 · 이 파일 «상태» 칸.

## 5. 상태

| 레인 | A | B | C | 머지 | 배포 |
|---|---|---|---|---|---|
| 🅰 zh-hant 시뮬레이터 | ✅ 11:02 | ✅ 11:12 | ✅ 11:40 | ✅ `4a26acb9` | ✅ 10-14 라이브 200 · MB-323 · IndexNow |
| 🅱 fr·ru 대회 보드 | | | | | |
| 🅲 ar 회차 1 계산기+차트 | ✅ | ✅ | ✅ | ✅ `a600e042` + 헤드 H-1 RTL `27d5bc7c` | ✅ 10-14 라이브 200 · MB-324 · IndexNow |
| 🅲 ar 회차 2 시뮬레이터 | | | | | |
