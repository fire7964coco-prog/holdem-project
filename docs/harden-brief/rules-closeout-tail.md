# Rules closeout tail — A 브리프

기준: 2026-09-22, main `603deb7a`. 담당 `q13b_rules_review`. 본체 승인 범위는 포스트 41편과 이 브리프다. 본체의 기존 `public/sitemap.xml` 수정은 소유 범위 밖이다.

> **중단 인계(2026-09-22): 사용자 새 세션 이관 지시로 구현 중단. 포스트 21편은 미커밋 초안이며 최종 검증·독립 검수 전이다. 재개 전 §6을 먼저 읽는다.**

## 1. 승인 범위와 현재 상태

- tail 16언어 `bn/fa/fil/fr/he/hi/it/ms/pl/ro/ru/sw/th/tr/uk/vi` × `holdem-all-in-rules`·`holdem-showdown-rules` = 32편.
- core 9언어 `en/ar/de/es/id/ja/pt/zh/zh-hant`의 `holdem-showdown-rules` **tldr만** = 9편. ID에 한해 본체 추가 승인한 Q8-b 액션 용어 6개 본문 줄도 포함한다(§6).
- 모든 파일은 `lib/posts-{locale}/{slug}.ts`. KO는 제외한다.
- tail은 기존 §13 규칙 미결만 정정한다. SEO·문체·구조 전면 개선, 제목/설명/키워드 재조준은 하지 않는다.
- tail showdown tldr 16개도 같은 규칙의 하위 사본으로 포함한다. core tldr 9개는 기존 알려진 부채다. EN tldr의 무조건 muck 가능 문구도 같은 범위에서 정합화한다.
- tail game-order/betting/straddle, 다른 포스트, 전역 TDA 판본 전환은 제외한다.
- A 브리프 저장 후 구현 승인 수신. 본체의 `603deb7a` 빌드 완료 이후 소스만 수정하며, 담당은 commit/build/push를 실행하지 않는다.

## 2. 기존 미결 및 정본

- `docs/en-first-queue.md` §2-A~C: showdown 공개·muck·플레이어별 누적 재오픈 미결.
- `docs/harden-queue-진행.md` Q12-a 및 Q13-b 후속: all-in 공개 조건은 먼저 고쳤으나 tail showdown 및 누적 재오픈은 미결. core showdown tldr의 무조건 순서 단정도 미결.
- `docs/settled-decisions.md` §3-M: 본문·표·FAQ·메타·형제 글의 반복 위치를 별도로 센다. 일부 반영을 전체 동기화로 표시하지 않는다.
- `docs/harden-brief/rules-closeout-core-ar.md`: 직전 core 38편의 적용 조건과 출처. 같은 명제를 tail에 규칙 한정으로 전파한다.
- 집필 전 `CLAUDE.md`, `.cursor/rules/posting.mdc`, `REVIEW-PROTOCOL.md`, 해당 언어 `docs/translation-terms-{locale}.md`를 적용한다.

### 2-1. 1차 출처 및 판본

| 명제 | 이번 문안의 명시 판본 | 확인한 현행 의미 |
|---|---|---|
| 식별·회수 가능한 live hand와 죽은 hand 구별 | TDA 2024 Rule 14 | 2026 v1.1 Rule 15와 동일 |
| tournament all-in + 모든 베팅 종료 → 남은 모든 hand 즉시 공개, muck 불가 | TDA 2024 Rule 16 | 2026 Rule 17 및 부록 17과 동일 |
| non-all-in 공개 순서 | TDA 2024 Rule 17 | 2026 Rule 18과 동일 |
| river caller의 요청권: 자기 카드를 보유하거나 table해야 함 | TDA 2024 Rule 18 | 2026 Rule 19와 동일 |
| 누적 short all-in의 재오픈은 각 플레이어가 직면한 증가분으로 판단 | TDA 2024 Rule 47-A | 2026 Rule 49-A와 동일 |
| cash 공개 순서·side pot 우선·NL의 river 전 betting 종료 예외 | WSOP 2026 Live Action B149 | side-pot 참여자 우선, NL이고 river 전에 betting이 끝났을 때 all-in한 사람 우선 |
| cash 공개 요구 | WSOP 2026 Live Action B147 | house/floor·collusion 의심 맥락, tournament caller 권리를 일반화하지 않음 |
| 무조건 muck=회수 불가 아님 | WSOP 2026 Tournament 109/110 | 식별 가능성과 floor 판단, dealer 오류 관련 예외 |
| 진행 중 노출의 penalty와 dead hand 구별 | WSOP 2026 Tournament 117 | tournament 규정임을 명시, cash의 보편 규정으로 쓰지 않음 |

로컬 `docs/sources/tda-2024-rules-v1.txt`와 WSOP 2026 원문을 대조했다. 현행 TDA 공식 페이지에서 연결한 `2026 Poker TDA Rules DOCX Longform Vers 1.1 final.docx`(2026-09-21)를 메모리 추출하여 위 해당 조문과 부록을 직접 확인했다. **번호는 바뀌었으므로 이번에 쓰는 구번호는 2024판이라고 명시한다.**

- [TDA 공식 규정](https://www.pokertda.com/poker-tda-rules/)
- [WSOP 2026 Live Action 원문](https://assets.wsopcdn.com/wsop/853ee602-e1e9-4019-a0cf-381419d805c6.pdf)
- [WSOP 2026 Tournament 원문](https://assets.wsopcdn.com/wsop/1a72ba28-781c-409d-a9c3-5ca13c4c5718.pdf)

## 3. tail 반복 위치와 최소 처방

아래는 기준 커밋의 **검사 위치**다. 473개를 결함 수나 완료 수로 간주하지 않는다. 한 문단에 이미 맞는 조건은 유지하고 누락·모순만 고친다. 수정 후 줄번호는 달라질 수 있다.

### 3-1. all-in: 언어당 8자리

| ID | 기본 줄 | 최소 처방 |
|---|---:|---|
| A1 | 149 | 누적 증가분이 full bet/raise에 이르렀는지 **각자 마지막 행동 금액 대비** 판단 |
| A2 | 151 | 위 규칙 출처를 TDA 2024 47-A로 명시 |
| A3 | 161 | A의 10→21은 +11로 재오픈, 중간 14 caller는 +7이라 재오픈 아님을 구별 |
| A4 | 184 | 판단표의 누적 short-all-in 항목에도 플레이어별 조건 적용 |
| A5 | 195 | tournament all-in 공개와 cash B149의 side pot/NL river 전 종료 조건 분리 |
| A6 | 242 또는 247 | 공개 FAQ에서 동일 조건 보존·정합 |
| A7 | 254 또는 259 | 두 all-in FAQ: tournament는 betting 종료 후 전원 즉시 공개; cash는 B149 조건 |
| A8 | 258 또는 263 | cash/tournament 차이 FAQ의 공개 순서에 동일 조건 적용 |

### 3-2. showdown: 언어당 21자리

| ID | 기본 줄 | 최소 처방 |
|---|---:|---|
| S1 | 8 | tldr의 순서·muck·요청권에 tournament/non-all-in/cash 조건 |
| S2 | 42 | 첫 표 river aggressor 순서에 non-all-in 조건 |
| S3 | 44 | 첫 표 all-in 공개를 tournament + betting 종료에 한정; cash와 구별 |
| S4 | 60 | muck 예외의 tournament all-in + betting 종료 조건 |
| S5 | 62 | 요청권 본문에서 tournament와 cash 권한 구별 |
| S6 | 64 | river caller라도 자기 카드 보유/table 조건 필요 |
| S7 | 80 | all-in 본문의 무조건 공개를 tournament에 한정, cash B149 구별 |
| S8 | 86 | 두 번째 표 prior all-in 공개 조건 |
| S9 | 87 | river all-in의 tournament 동시 공개와 cash 순서 구별 |
| S10 | 88 | 여러 all-in의 모든 hand 공개를 tournament betting 종료에 한정 |
| S11 | 92 | 지급 순서와 공개 순서를 혼동하지 않도록 tournament 즉시 공개/cash side-pot 우선 구별 |
| S12 | 106 | cards-speak 본문: 단순 face-down으로 자동 dead 아님, 식별·회수 및 dealer muck 조건 |
| S13 | 144 | muck 사례의 무조건 dead 단정만 조건화 |
| S14 | 148 | 회수 불가능 단정 대신 식별 가능성과 floor 판단 |
| S15 | 152 | WSOP 117 인용에 2026 Tournament 판본/맥락 명시 |
| S16 | 169 | 요청권 FAQ: river caller·자기 카드 보유/table 조건 |
| S17 | 173 | muck FAQ: tournament all-in 공개 의무 예외 |
| S18 | 181 | all-in FAQ: betting 종료 후, side-pot betting 진행 중에는 아직 의무 공개 아님; cash B149 조건 |
| S19 | 185 | cards-speak FAQ: muck의 자동 패배/무조건 권리 상실 단정 정합 |
| S20 | 50 | 첫 강조문도 non-all-in tournament 및 river caller의 카드 보유/table 조건 |
| S21 | 165 | 첫 순서 FAQ도 non-all-in tournament/cash/all-in 조건 분리 |

### 3-3. 언어별 정확한 위치 고정

- A 공통 앞 5자리 = `149/151/161/184/195`.
- A-α FAQ = `242/254/258`; A-β FAQ = `247/259/263`.
- S 공통 21자리 = `8/42/44/50/60/62/64/80/86/87/88/92/106/144/148/152/165/169/173/181/185`.
- S-he 21자리 = `8/42/44/50/60/62/64/80/86/87/88/92/104/142/146/150/163/167/171/179/183`. Hebrew의 -2 오프셋은 92 뒤부터이며 앞부분에는 적용하지 않는다.

| 언어 | all-in 검사 자리 | showdown 검사 자리 | 계 |
|---|---|---|---:|
| bn | A 공통 + A-α | S 공통 | 29 |
| fa | A 공통 + A-α | S 공통 | 29 |
| fil | A 공통 + A-α | S 공통 | 29 |
| fr | A 공통 + A-β | S 공통 | 29 |
| he | A 공통 + A-β | S-he | 29 |
| hi | A 공통 + A-α | S 공통 | 29 |
| it | A 공통 + A-β | S 공통 | 29 |
| ms | A 공통 + A-β | S 공통 | 29 |
| pl | A 공통 + A-β | S 공통 | 29 |
| ro | A 공통 + A-β | S 공통 | 29 |
| ru | A 공통 + A-β | S 공통 | 29 |
| sw | A 공통 + A-α | S 공통 | 29 |
| th | A 공통 + A-α | S 공통 | 29 |
| tr | A 공통 + A-β | S 공통 | 29 |
| uk | A 공통 + A-β | S 공통 | 29 |
| vi | A 공통 + A-β | S 공통 | 29 |

tail은 32편·464검사 자리. 별도 `>` 직답은 현재 32편 모두 0개다. FAQ는 각 7문항이며 질문·개수는 보존한다. Bengali/Persian의 117은 현지 숫자로 쓰여 있으므로 ASCII 검색 부재를 미존재로 판단하지 않는다.

## 4. core tldr 9자리

`en/ar/de/es/id/ja/pt/zh/zh-hant`의 showdown은 모두 L8 tldr 한 자리씩, 총 9자리다. tail과 합쳐 41편·473검사 자리다.

EN 의미 정본은 다음 조건을 짧게 보존한다: non-all-in tournament는 river 마지막 aggressor 우선(체크로 끝나면 버튼 왼쪽 첫 active player), tournament all-in은 betting 종료 후 전원 즉시 공개, river caller의 마지막 aggressor hand 요청권은 자기 카드를 보유/table한 경우, cash는 house rule. 무조건 muck 가능 문구를 두지 않는다. 본문·FAQ의 직전 완료 변경은 건드리지 않는다.

## 5. 보존·게이트·인계

- tail `masterUpdated`는 all-in `2026-08-12`, showdown `2026-07-12`를 유지한다. 이번은 §13 부분 전파이며 EN 전체 동기화가 아니다. 실제 내용 수정된 글의 `updated`만 `2026-09-22`로 한다.
- core tldr는 실제 EN tldr 동형 조건만 맞춘다. 기존 최신 날짜에서 불필요한 변경은 하지 않는다.
- 제목·description·keywords·slug·이미지·카드·팟 예제·URL·FAQ 질문/개수는 보존한다. 숫자 신규 델타는 필요한 조문/판본 및 검산 가능한 재오픈 반례에만 한정한다.
- 재오픈 반례: A=10, 최종=21 → 11≥10; 중간 caller=14 → 7<10. 기존 single-short-all-in의 최소 raise 예제를 임의 변경하지 않는다.
- 언어별 실제 수정문과 반복 29자리의 일치 여부를 확인한다. audit 결과는 검사된 범위와 시나리오 미검사 여부를 분리한다.
- AST/카드/링크/FAQ·메타 보존, 날짜·판본·누적 증가분, all-in/cash/side-pot 조건, 변경 파일 41개 경계를 검증한다.
- 자기 검증을 독립 검수로 부르지 않는다. 최종 diff와 미결을 본체/독립 검수 담당에 넘기고, 본체가 통합 build/commit/push를 맡는다.

## 6. 세션 이관 — 구현 중단 시점

사용자의 새 세션 이관 요청으로 추가 포스트 수정은 중단했다. 직전 TR 2편 패치는 승인 검토에서 중단 지시 때문에 거절되어 **실행되지 않았다**. 우회·재시도하지 않았고 TR 원문 L149와 git 변경 목록으로 미실행을 확인했다.

### 6-1. 완료된 준비 / 저장된 초안

- **A 준비 완료:** 41편 범위·출처·판본·반복 자리 고정. 구현 중 같은 명제의 S20/S21 사본을 추가로 확인하여 tail 464 + core tldr 9 = 473검사 자리로 정정했다. ID 추가 용어 6줄은 별도 하위 범위다.
- **core 초안 9편:** en/ar/de/es/id/ja/pt/zh/zh-hant의 showdown tldr L8 수정. non-all-in tournament 순서, all-in 공개, river caller 카드 보유/table 조건, cash house rule 구별. 완료·검수 통과로 표시하지 않는다.
- **tail 초안 12편:** fr/it/ro/pl/ru/uk의 all-in·showdown 각 2편. all-in 8줄, showdown 21줄과 updated 1줄을 바꿨다. 줄 수·구조를 유지하여 위 앵커가 그대로 유효하다.
- **ID 추가 승인:** showdown L32/43/68/70/72/167에서 포커 액션 cek→check. L8의 기존 cek는 새 tldr에서 check로 이미 교체되어, 실제 diff는 tldr 1줄+본문 6줄이다. verify 뜻의 cek나 다른 파일은 건드리지 않았다.
- **현재 소유 변경:** 포스트 21개 + 미추적 신규 브리프 1개. 본체 문서·sitemap·다른 agent 변경은 소유하지 않는다. 본체의 sitemap 변경은 중단 시점 status에서 더 이상 보이지 않았지만 담당이 건드린 것이 아니다.

| 상태 | 언어 | 정확한 파일 |
|---|---|---|
| 초안, 미검사 | en/ar/de/es/id/ja/pt/zh/zh-hant | 각 lib/posts-{locale}/holdem-showdown-rules.ts |
| 초안, 미검사 | fr/it/ro/pl/ru/uk | 각 lib/posts-{locale}/holdem-all-in-rules.ts 및 holdem-showdown-rules.ts |
| 미착수 20편 | bn/fa/fil/he/hi/ms/sw/th/tr/vi | 각 lib/posts-{locale}/holdem-all-in-rules.ts 및 holdem-showdown-rules.ts |

### 6-2. 수행한 확인과 미수행 게이트

- 수행: 원문 해당 문단·언어 정본 읽기, 직접 문안 작성, 패치 성공 반환, git status/numstat 실제 21파일 확인. 재오픈 산술 21−10=11≥10 및 21−14=7<10 직접 계산. 이 확인은 **최종 보존 검사나 독립 검수 통과가 아니다**.
- fr/it/ro/pl/ru/uk 언어 규칙을 전문 읽고 해당 원문 자리를 읽었다. tr/ms도 규칙과 대상 원문을 읽었으며 MS 상위 정본 docs/keyword-bank/ms-posting-reference.md까지 전문 읽었다. bn/fa/fil/he/hi/sw/th/vi의 이번 구현용 언어 규칙/전체 대상 자리 읽기는 아직 남았다.
- **미수행:** 이번 21편 AST 메타/FAQ/URL/카드 보존 검사, 언어별 audit, 문면 소멸·누락 재검색, 숫자 델타 판정, 최종 자기 교열, 독립 검수. 이전 core38의 audit 통과를 이번 tail 초안의 결과로 가져오면 안 된다.
- **날짜 마감 미완료:** fr all-in은 기존 updated 09-22. it/ro/pl/ru/uk all-in은 아직 기존 09-21이다. 수정한 showdown 6편의 updated는 09-22. tail masterUpdated는 all-in 08-12/showdown 07-12를 그대로 유지했다. 다음 세션에서 내용 게이트 이후 미완료 updated를 맞춘다.
- 카드·URL·FAQ 질문을 보존하도록 작성했지만 기계 대조는 아직 안 했다. 새 조문·판본·반례 숫자는 의도된 델타로 별도 확인해야 한다.
- 작성자가 AI로 번역·교열한 초안이며 실제 현지 인간 감수 이력을 만들지 않는다. 특히 나머지 언어 전파 전에 EN/FR 조건을 독립 검수받고, 번역별 확신이 낮은 표현은 인계에 따로 표시한다.
- 본 담당은 commit/build/push를 하지 않았다. 본체의 앞선 603deb7a 빌드는 **이 미커밋 변경을 포함하지 않는다**.

### 6-3. 다음 정확한 행동

1. 사용자 새 지시와 main CLAUDE/핸드오프/status를 읽고, 21편 미커밋 초안과 이 브리프를 보존한다. 무조건 41편 새 작업을 처음부터 다시 시작하지 않는다.
2. EN tldr + FR 두 글의 규칙 조건을 독립 확인한다. 현재 6언어 tail 초안의 판본·문장 반복·기존 문체 보존과 S20/S21을 포함한 누락 여부를 확인한다. 자기가 쓴 번역을 독립 검수로 보고하지 않는다.
3. 미착수 bn/fa/fil/he/hi/ms/sw/th/tr/vi 20편을 해당 언어 규칙을 읽고 진행한다. 재개 순서는 이미 읽은 tr/ms부터 가능하나 사용자 재개 승인 전에는 쓰지 않는다. TR 직전 패치는 거절되어 파일에 없으므로 적용됐다고 가정하지 않는다. MS는 손패=tangan, 카드=kad, 액션=check 등 영어, 문중 anda가 정본이다.
4. 41편 구현 후 날짜 마감, AST/URL/카드/FAQ·메타 보존, 숫자 델타, audit 및 자기 교열을 수행한다. 예: node scripts/audit-hardening.mjs --locale=fr --slug=holdem-all-in-rules 및 showdown, 각 실제 수정 언어/slug별 반복. 시나리오 미검사·기존 경고는 분리해서 보고한다.
5. 독립 검수 결과와 실제 게이트를 이 브리프에 기록해 본체에 인계한다. build/commit/push는 본체 담당이며, 현재 브리프가 있다는 이유만으로 발행 승인으로 간주하지 않는다.

## 7. 2026-09-22 두 번째 이관 체크포인트

§6의 “21편만 초안·20편 미착수” 상태에서 작업을 이어 갔으며, 아래 상태가 최신이다. §6의 과거 파일 수와 TR 미실행 설명은 경위로만 남기고 현재 상태 판단에는 이 절을 우선한다.

### 7-1. 현재 반영 범위

- git status 기준 포스트 **38편 수정**, diff stat 439 insertions / 439 deletions. sitemap은 수정되지 않았다.
- 기존 21편은 보존했다.
  - core showdown tldr 9편: en/ar/de/es/id/ja/pt/zh/zh-hant.
  - tail 12편: fr/it/pl/ro/ru/uk의 all-in·showdown.
- all-in 10편 bn/fa/fil/he/hi/ms/sw/th/tr/vi는 A1~A8과 updated 2026-09-22를 반영했다.
- showdown 7편 bn/fa/fil/hi/he/ms/sw는 S1~S21과 updated 2026-09-22를 반영했다.
- th/tr/vi showdown 3편은 아직 미착수다.

### 7-2. 검증 상태와 품질 주의

- 이번 추가 문안은 언어별 용어 정본을 읽고 직접 작성했지만 **자기 번역 초안**이다. 독립 검수나 현지 인간 감수로 표시하지 않는다.
- 전체 41편 audit, AST/메타·FAQ·URL·카드 보존 대조, 숫자 델타 검사, 전체 diff 교열, build는 아직 실행하지 않았다.
- 이번 세션의 he/ms/sw showdown 3편만 대상 줄 재독, `git diff --check`, 22 additions/22 deletions 확인, 고정 메타·tags·FAQ 질문 7개·heading·로케일 URL·이미지 경로·카드 보존 자동 대조를 통과했다. 이는 전체 게이트나 독립 검수를 대신하지 않는다.
- 기존 §6의 날짜 미결도 남아 있다. it/ro/pl/ru/uk all-in이 2026-09-21이면 최종 내용 게이트 뒤 2026-09-22로 변경한다.
- 새 문안은 source distinction을 명시하도록 작성했다: tournament all-in 즉시 공개는 모든 betting 종료 후, cash는 house rule/WSOP 2026 B149, river caller 요청권은 카드 보유/table 조건, face-down hand는 identifiable/retrievable 조건, Rule 117은 penalty이지 자동 dead가 아니다.
- 패치 과정에서 Windows apply_patch 샌드박스 오류가 있어 codex apply-patch 실행 파일에 UTF-8 patch argument를 직접 전달했다. 모든 호출은 Success를 반환했지만 이것은 내용 검증을 대신하지 않는다.

### 7-3. 재개 순서

1. th/tr/vi showdown 각 21자리와 updated를 완성한다.
2. 41편 파일 경계와 보존 필드, 날짜·판본·산술·조건을 기계 대조한다.
3. 각 locale/slug audit와 최종 문면 교열을 하고, 오류를 사실 오류·번역 누락·용어/구조·자기회귀로 나눠 기록한다.
4. build 후 브리프·WORKLOG·handoff를 마감하고 로컬 커밋한다. 0c74affa가 아직 미배포이므로 push는 별도 사용자 확인 없이 하지 않는다.

## 8. 2026-09-22 최종 마감

§7의 미착수 th/tr/vi showdown 3편까지 완성해 계획한 **41편**을 모두 구현했다. core showdown tldr 9편, tail all-in 16편, tail showdown 16편이며 실제 내용이 바뀐 모든 대상의 `updated`는 2026-09-22다. tail `masterUpdated`는 all-in 2026-08-12, showdown 2026-07-12로 유지했다.

### 8-1. 최종 교정

- th/tr/vi는 언어 정본에 맞춰 last aggressor, betting complete, river caller, button/Dealer 표현을 교정했다.
- 독립 규칙 검수에서 rich tail 6언어(fr/it/pl/ro/ru/uk)의 B149 표가 “side pot 다음 river aggressor”라는 직렬 순서로 오기된 것을 확인했다. **side-pot 참가자 → main-pot-only 참가자**가 1차 그룹 순서이고, 공개 중인 각 그룹 안에서 final-round last aggressor가 먼저라는 계층으로 전부 수정했다.
- Rule 117의 `will incur a penalty`를 가능형으로 약화한 13언어(bn/fa/fil/fr/he/hi/it/ms/pl/ro/ru/sw/uk)를 확정형으로 수정했다. hand가 자동 dead가 아니라는 조건은 그대로 보존했다.
- 최종 독립 재검수에서 16개 tail showdown의 B149/Rule 117 잔여 문제 0, th/tr/vi 자연어·용어·caller 조건 잔여 문제 0을 확인했다.

### 8-2. 보존 및 의미 검산

- 41파일 경계, slug/title/seoTitle/desc/category/date/masterUpdated/keepImagesInBody/readTime/emoji/tags/image/imageAlt, FAQ 질문·개수, heading, URL, 이미지, 카드, template literal, plain tldr를 HEAD와 자동 대조했다. heading 차이는 승인된 ID `Cek`→`Check`만 허용했고 전부 통과했다.
- 변경량은 core showdown 1/1(ID 7/7), tail all-in 9/9(fr 8/8), tail showdown 22/22로 계획과 일치했다.
- showdown 예시는 자동 감사기가 시나리오를 파싱하지 못해 직접 검산했다. Hero J♥10♥ + board Q♥9♥8♥2♣5♦는 Q♥J♥10♥9♥8♥의 queen-high straight flush이고, Villain K♣Q♦의 Q-Q-K-9-8 one pair를 이긴다.
- 사이트맵의 대상 41 URL은 모두 2026-09-22다. diff 36개 중 대상은 31개, 나머지 대상 10개는 이미 최신이었다. 범위 밖 5개는 앞선 미배포 PT 커밋 `0c74affa`의 생성기 반영이다.

### 8-3. 게이트

- 25로케일 hard audit: 전부 exit 0, 빨강 0, 주황 0. showdown이 CLUSTERS에 없어 형제 대조를 시도하지 않은 점과 카드 예시 자동 미검사 범위는 별도 확인했다.
- 보존 검사: 41/41 통과. `git diff --check` 통과.
- 정적 검사: intl-links, meta, structure, hangul, number-format, hygiene, directives 통과. FAQ schema 575/575.
- 전역 진단의 선재 비차단 출력은 분리했다: structure tail 결손 40, answer-echo 기타 40, mirror-pair 갈림 28.
- `npm run build` 성공: 773 static pages. sitemap 70 blog + 577 intl + 81 static + 25 locale homes. postbuild hreflang 0, directive 0, meta-lang 0.

### 8-4. 발행 상태

사용자의 명시적 배포 승인 뒤 미배포 5커밋(`086161eb..1c22b5c6`, 앞선 PT `0c74affa` 포함)을 `origin/main`에 push했다. Vercel 프로덕션 배포 `dpl_8ErKhGhM2T4xJPVF9mJ3eGVyihoG`가 Ready이고 `www.holdemmaster.com` 별칭에 연결된 것을 확인했다.

- 규칙 대상 41편은 라이브에서 HTTP200·canonical·dateModified 2026-09-22·FAQ 293/293·390px overflow0·마크업 누출0·히어로 존재를 확인했다. core9는 현재 tldr 축어, tail32는 TDA 2024/B149 및 showdown Rule117·all-in Rule47 문면을 대조했다.
- MS/TH/TR/VI 모바일 상단을 직접 열어 제목·히어로·태그·Quick Answer 배치를 확인했다. VI 첫 캡처에서 히어로가 안 보인 것은 디코딩 전 캡처였고, 재검사에서 naturalWidth389·표시 358×201로 정상임을 확인했다.
- 함께 배포된 PT 9편도 새 문면·HTTP200·canonical·dateModified·FAQ 97/97·390px overflow0으로 9/9 통과했다.
- IndexNow는 당일 다른 URL의 중복 제출을 피하려 `--since`를 쓰지 않았다. 이번 push의 변경 포스트만 계산한 고유 49 URL을 한 번 제출해 HTTP200을 받았다. 이는 색인 완료가 아니다. GSC 수동 요청은 기존 사용자 보류 결정을 유지했다.
