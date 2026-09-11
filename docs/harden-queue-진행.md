# 🧰 queue — 헤드 잔여 작업 레인 진행 파일

> 규격 = `docs/hardening-protocol.md` §8 · 레인 규율 = **§7-F**(로케일 레인과 다른 점 전부). 여기엔 **상태·미결·되돌리지 마라·헤드 요청**만.
> 레인 = `Holdem-queue` / 브랜치 `harden-queue` / 담당 = 헤드가 하던 «글·이미지·게이트 손질» 전부(EN + ar·de·es·fr·id·pt + 이미지 + scripts).
> 🔴 **재료의 정본은 여기가 아니다** — `docs/en-first-queue.md`(EN-먼저 대기열) · `session-handoff.md` 미결 절 · `docs/settled-decisions.md` §1-B(결재 15건). 회차 표는 **그 재료를 어느 회차에 묶었나**만 적는다. 복사하면 갈라진다.
> 🔴 **회차 번호는 «Q»를 붙인다**(로케일 레인 회차와 헷갈리지 않게). 사장님 한 줄 = 「`HARDEN.md` 읽고 회차 Q1 시작해」.
> 🔴 **모델 열은 «작업 성격»으로 정했다**(`settled-decisions` §5-A-3 「문서에 적힌 분담을 작업 성격으로 다시 짜라」): 새 문장을 쓰는 구간만 Fable · 판정·치환·계산·코드·번역 QA는 Opus · 렌즈 4종은 Opus 서브. **세션 = `/clear` 1회.** 한 회차가 2세션이면 «-a / -b»로 갈라 각각 보고하고 멈춘다.

## 1. 회차 표

> 순서는 제안이다 — 사장님이 번호를 골라 연다. 끝난 회차는 ✅ + 커밋 해시. **닫힌 재료는 정본 쪽(en-first-queue · 핸드오프)에서 지운다**(헤드 몫 · §5에 «지워 달라» 요청).

| 회차 | 묶음 | 재료(정본 포인터) | 모델 · 세션 | 상태 | 커밋 | 렌즈 지적/반영 | 날짜 |
|---|---|---|---|---|---|---|---|
| **Q1** | **결재 실행 — 판정형 소품** | `settled-decisions` §1-B **결재 1**(`starting-hands-chart` #13 — EN 콤보 직접 세기 → 그쪽에 맞춤 · `en-first-queue` §1 ㉗과 한 판) · **결재 6·소품**(PDF 용지 A4 통일 · es 국기 · `app/home-client.tsx` 삭제 · 규칙 PDF pt·id · CAPT `buyin` + Pokermania XL) · 핸드오프 「결재 완료」 표 | **Opus 전 구간 · 1세션**(계산·파일 작업 · 새 문장 없음) | ⏳ | | | |
| **Q2** | **결재 7 — 사진 5장 신규 제작 → EN 교체 → 8로케일 전파** | `settled-decisions` §1-B 결재 7(40건 = 8로케일 × 같은 5건 · 뿌리 EN 1곳) · 핸드오프 「이미지·워터마크」 절(교차 클러스터 🟠 7건 판정 포함) · 카드 문구 창작 금지(§3-A) · 워터마크 `scripts/wm-*.mjs` · 게이트 `check:images`·`check:image-reuse` | **Opus · 2세션** — Q2-a: 5장의 자리·장면 스펙 + 생성 프롬프트(실사 = 생성 AI · 이미지 자체는 사장님이 커서/제미나이로 뽑는다 · 여기서 멈춤) / Q2-b: 워터마크 합성 → 압축 q82 → EN 교체 → 8로케일 전파 → 썸네일 → 게이트. Fable 불요(카드 문구는 승계·축어만) | ⏳ | | | |
| ~~Q3~~ | **EN 56편 `updated` 전수 대조** — ✅ **종결(신설 시점 실측 · 회차 불요)** | 실측 2026-09-11: EN 57파일 중 «마지막 커밋 > `updated`» 6 · **창(09-08 이후) 1 = `holdem-icm`**(구두점만 · `2c9012c7` · «올리지 않는다» 판정 이미 완료) · 창 밖 5 = `8d2aba44` CSS 수리 2 · `a069430a` tldr 별표 제거 2 · `index.ts`(포스트 아님) → **전부 §1-C «기계적 변경은 안 올린다»에 해당**. `en-first-queue` §3의 「이미 잡힌 6건」은 `fd8cafc0`로 닫혀 있다(현재 파일에 남은 어긋남 0). 재현 = 셸 한 줄(파일별 `git log -1 --date=short` ↔ `updated` 비교) — Q7에서 `check:stamp --locale=en` 게이트로 박는다. **§3 잔여(경쟁 페이지 언급 3곳 · EN↔pt FAQ 개수 · game-order 「who bets first」)는 Q4-a로 이관** | — | ✅ | (실측만 · 커밋 없음) | — | 09-11 |
| **Q4-a** | **EN-먼저 묶음 I — 미결·동형** | `en-first-queue` §2-D **J#8**(ept-barcelona €330 ↔ €825 · 공식 일정 축어 확보 후) · §2-E **X-1**(blind-meaning 「Nobody gets to skip their turn」 · WSOP Live Action §155~158 · Tournament §85) · 핸드오프 「대회·사실 판정」 절의 **EN 동형 30건**(M-089 §4 잔여 = bad-beat #12 ~62% · betting-actions 103조 두 요소 · flush-vs-straight SF 5장/7장 라벨 · 목록 `docs/reply-to-review-2026-09-04-m089.md` §2·§4) · `tiebreak-rules` L232 「Rule 85」 룰북 한정어 · **Q3 이관분**(경쟁 페이지 언급 3곳 · EN↔pt FAQ 개수 bubble·short-stack·tournament·icm · game-order title 「who bets first」) · 🆕 **ja 회차 13 §5-K 이관**(`harden-ja-진행` §5-K · 09-11 머지): **K1** `when-to-fold` 셀프체크 ⑤ 「(= a bluff-catcher)」 EN L141/L153 + 8로케일(D유형) · **K3** = J#8과 같은 자리(ept €330 H2·비교표 — 블록만 €825로 갈려 있다) · **K4** `tiebreak-rules`↔`kicker` «キッカーなし 족 개수» 5 vs 4 — 헤드 실측(09-11): **EN도 같다**(kicker FAQ L184 「Straights, flushes, full houses, and straight flushes」 = 4 · tiebreak 표 L84~89 = 로열 행 별도 5) → 로열 = 스트레이트플러시라 둘 다 참 · **결함 아님** · 통일은 선택(kicker FAQ에 「(royal included)」 한 마디 · 8로케일) · **K2**(bad-beat 63%) = 🔴 **결재 15 재론 금지**(≈63% 유지 · 65.0%/1.86으로 되돌리지 마라). 🔴 헤드 실측(09-11): 결재 15의 **행 문구 «nine outs plus live side cards»가 EN L92·ja L105에 아직 없다**(「9-out flush draw fills on the river」 그대로 · `en-first-queue` §1 ③과 같은 자리) → **결재 15 이행 = EN L92 행 문구 + 8로케일** | **A Opus(1차 출처 · WSOP 룰북 `docs/sources/`) → B Fable(EN 재서술 + 8로케일 전파 문장) → C Opus(렌즈 4종 · 게이트) · 1세션**(구간 경계에서 `/model`) | ⏳ | | | |
| **Q4-b** | **검수장 MA-118 요청 2 — es 대회 2편** | `como-entrar-al-wsop`·`wsop-2026-tournament-guide`(es) WRONG 15·RISKY 10·STALE 2 + **LISR 138조 웹 실측**(멕시코 소득세법 · 1차 출처) · 원장 = `홀덤검수-es/ledger/` · EN 동형이면 EN-먼저 | **Opus 전 구간 · 1세션**(번역 QA·법령 실측 = Opus · 새 문장은 원장 처방 이식) | ⏳ | | | |
| **Q5-a** | **EN-먼저 묶음 II — 세션 1 렌즈 38건 판정(전반)** | `en-first-queue` **§1 ①~㉑**(⑤ 3번 독립 재발견 = 우선) · 판정 뒤 EN 정정 → 8로케일 전파 · 기각은 사유와 함께 §1에서 지우기 요청 | **A Opus(전건 원문 판정) → B Fable(채택분 재서술) → C Opus · 1세션** | ⏳ | | | |
| **Q5-b** | **EN-먼저 묶음 II — (후반)** | `en-first-queue` **§1 ㉒~㊸**(㉟ 우선 · ㊲는 검수장 판정 산물이라 재론 절차 = MB 초안) | 위와 동일 · 1세션 | ⏳ | | | |
| **Q6** | **헤드 판정 묶음 — 로케일 표기·구조**(ja·zh·zh-hant 파일 포함 → §7-F «미커밋 겹침» 확인 먼저) | 핸드오프 「▶ 그밖에 열 수 있는 것」 zh 표기 통일 4갈래(`打公共牌`/`打公牌`/`打牌面` · 二四法则 3표기 · 劫机位/劫持位 · 인용부호 3갈래 + pot-odds 比率↔百分比 절 통합) · 헤드 판정 6건(ja 전각（） · 見出し 콜론 · `drawing-odds` `## FAQ` · zh-hant `快速解答` 상자 셋 · zh-hant probability FAQ 10:15:16 · 부분문자열 태그 쌍) · `check:mirror-pair` 실제 갈림 4(zh apt 3행 결손 · zh만 2 · zh-hant만 2) · ja 회차 10·11 판정 2(pot-odds L194 中黒 · showdown 「マック」 FAQ) · MA-136 RISKY 4 + 약 잔존(ja) · pt `holdem-strategy.ts:183` 용어표 | **Opus 전 구간 · 1~2세션**(표기 치환·판정·번역 QA = Opus · 네이티브 렌즈는 Opus 서브 zh/ja 각 1). 🔴 ja 레인 회차 중이면 ja 자리는 «머지 뒤 전파» | ⏳ | | | |
| **Q7-a** | **게이트 신설 I — 우편함·대회 수치·스탬프** | 핸드오프 「렌더·게이트·코퍼스」: ① `mailbox/out-본체.md` 검사(MB 행 수 = 고유 ID 수 · 헤더 1 · 아카이브 아래 MB 0 · 파이프 5~7) ② `lib/tournaments.ts`↔`tournaments-i18n.ts` **숫자 토큰 대조** ③ 🆕 `check:stamp`(Q3 재현 셸을 게이트로 · 창 09-08 이후 · EN 문턱 · 양방향) ④ 「따옴표 빠진 썸네일 링크」 검사 ⑤ `scan-mobile-fold.mjs` 첫 인자 버그 | **Opus · 1세션** · 게이트마다 `--selftest` + 첫 실행 전건 원문 판정(memory `gate-tuning-loop-is-the-work`) | ⏳ | | | |
| **Q7-b** | **게이트 신설 II — 직답 포인터·개수** | `check:answer-echo` 포인터·개수 검사(1차 신호 = «H2 개수어 N ↔ 블록 열거 수» · 브리지 정의 «마지막 한 문장 + H2 약속 항목 전부» · 명제 단위 중복 신호 · 🔴 첫 주사 42히트 중 29 오탐 → 셀프테스트 먼저) · 🆕 **ja §5-K 5 «셈의 단위»**(`cjkLen`이 표의문자만 세서 카타카나 18자 완전 축어가 🔴 0 — 카타카나·라틴·숫자 0.5자 또는 «원문 18자+문장 경계 무시» 신호 추가 · 실례 `betting-actions` 「ミス2 — …」) · 개수 신호 2차(블록 자체 선언 N — «H2에 개수어 없는» 결손 3자리) · `audit:hard --locale=ja` 형제 표 행 키 불일치 2건 | **Opus · 1세션** | ⏳ | | | |
| **Q8-a** | **로케일 용어·문체 분열 소급 — pt** | 핸드오프 「로케일 용어·문체 분열」 pt 행 전부(vazamento↔leak · dar raise↔aumentar · 홀카드 3종 · `masterUpdated` 부재 2편 · shc AJo 낡은 판 6로케일 · strategy 허브 표 목적지 · tvc 표 위치 = EN 패리티) | **Opus 전 구간 · 1세션**(번역 QA = Opus · 치환은 문장 단위 · 파일 치환 금지) | ⏳ | | | |
| **Q8-b** | **로케일 용어·문체 분열 소급 — id·de·es** | id cek/check·tangan/hand·meja/board · id-posting-reference §5 계수 재확인 · de 적대 QA 잔여 6(🔴 손대기 전 재grep) · es LATAM 보충은 **열지 않는다**(별도 트랙) · `blind-meaning` 결핍 타 로케일 | **Opus 전 구간 · 1세션** | ⏳ | | | |
| Q9 | **EN 56편 원장 검수** | 🔴 **queue 회차가 아니다** — 검수장 en 레인(`홀덤검수-en` · MA-123 개시)이 원장으로 판정하고 MA 요청으로 넘어온다. queue는 **이행**만(Q4-b 유형). EN «경화»는 이미 끝난 것으로 결재됐다(`settled-decisions` §1-B 「EN은 마스터다」) — 다시 열지 마라 | — | 검수장 | | | |

**합계(제안)**: Q1 1 · Q2 2 · Q4 2 · Q5 2 · Q6 1~2 · Q7 2 · Q8 2 = **12~13세션**. Fable이 필요한 세션은 **Q4-a · Q5-a · Q5-b 셋뿐**(그것도 B 구간만).

**착수점(2026-09-11 헤드 실측 · 레인 신설 시점)**: `check:drift --locale=ja/zh/zh-hant` 🔴 0 · 세 로케일 레인 회차 = zh·zh-hant 트랙 종결 · **ja 회차 13 진행 중**(워크트리 미커밋 13파일 · 브리프 `ja-회차13-개수열거.md`) → Q6·EN 전파에서 ja 13파일은 «머지 뒤». 우편함 미처리(본체 몫) 0. 핸드오프 30,258B(30KB 경계). EN 스탬프 어긋남(창 안) 1 = icm 판정 완료.

## 2. 미결 (해결될 때까지 유지)

- 🟢 **ja 레인 회차 없음**(회차 13 머지 09-11 ff `a9b5d549`). 회차 14가 열리면 그 브리프(`docs/harden-brief/ja-회차14-*.md`)의 대상 파일과 겹침을 §7-F 규칙대로 확인 — 회차 14 재료 = `harden-ja-진행` §2-M 7편(glossary · probability · positions · tiebreak-rules · straddle · outs · apt-incheon).
- 🟠 결재 5(EN 제목 보강 3편)는 **보류** — GSC 실측 먼저. 회차에 넣지 마라.

## 3. 되돌리지 마라

- `settled-decisions` §1-B 전건(결재 15 · 재론 금지). 특히 **15** bad-beat ≈63%(65.0%/1.86:1로 되돌리지 마라) · **11** KPM 「9/4 마감」 중립화 · **2-ⓑ** 문장 다듬기 안 함.
- `en-first-queue` §1 **②** apt «개막 전 마감» — EN이 틀렸다(3자리). EN을 따라 로케일을 되돌리지 마라.
- EN `updated`는 구두점·별표·태그만 바뀐 커밋이면 올리지 않는다(`en/holdem-icm` 실증 · §1-C). Q3 실측이 이 규율의 두 번째 실증이다(창 밖 5건 전부 기계적 변경).

## 4. 거울쌍 갈림

해당 없음(로케일 레인이 아니다). zh↔zh-hant 갈림은 Q6에서 **직접 판정**한다(`check:mirror-pair`).

## 5. 헤드 요청 (헤드가 처리하면 ✅)

> 회차마다 여기에 쌓는다: ① MB 통지 초안(EN 변경 슬러그·자리·되돌리지 마라·앵커 갱신) ② ja·zh·zh-hant 파일 목록(§6-0 통지용) ③ `locale-intentional-diffs`·`settled-decisions` 승격 ④ 정본(en-first-queue·핸드오프)에서 지울 항목.

- ✅ (신설 시점 · 헤드 자체 처리) `en-first-queue` §3 첫 불릿 「EN 56편 `updated` 전수 대조」 = 종결 표시(실측 근거 위 Q3 행).

## 6. 자산 축적 체크 (매 회차 마감 3종)

① 키워드뱅크 — 해당 회차만 ② 편차 판정 → §5 ③ 판정 정본 승격 → §5
