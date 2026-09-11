# 🧰 queue — 헤드 잔여 작업 레인 진행 파일

> 규격 = `docs/hardening-protocol.md` §8 · 레인 규율 = **§7-F**(로케일 레인과 다른 점 전부). 여기엔 **상태·미결·되돌리지 마라·헤드 요청**만.
> 레인 = `Holdem-queue` / 브랜치 `harden-queue` / 담당 = 헤드가 하던 «글·이미지·게이트 손질» 전부(EN + ar·de·es·fr·id·pt + 이미지 + scripts).
> 🔴 **재료의 정본은 여기가 아니다** — `docs/en-first-queue.md`(EN-먼저 대기열) · `session-handoff.md` 미결 절 · `docs/settled-decisions.md` §1-B(결재 15건). 회차 표는 **그 재료를 어느 회차에 묶었나**만 적는다. 복사하면 갈라진다.
> 🔴 **회차 번호는 «Q»를 붙인다**(로케일 레인 회차와 헷갈리지 않게). 사장님 한 줄 = 「`HARDEN.md` 읽고 회차 Q1 시작해」.

## 1. 회차 표

> 순서는 제안이다 — 사장님이 번호를 골라 연다. 한 회차 = `/clear` 1회 = 묶음 하나. 끝난 회차는 ✅ + 커밋 해시. **닫힌 재료는 정본 쪽(en-first-queue · 핸드오프)에서 지운다**(헤드 몫 · §5에 «지워 달라» 요청).

| 회차 | 묶음 | 재료(정본 포인터) | 모양 | 상태 | 커밋 | 렌즈 지적/반영 | 날짜 |
|---|---|---|---|---|---|---|---|
| **Q1** | **결재 실행 — 판정형 소품** | `settled-decisions` §1-B **결재 1**(`starting-hands-chart` #13 — EN 콤보 직접 세기 → 그쪽에 맞춤 · `en-first-queue` §1 ㉗과 한 판) · **결재 6·소품**(PDF 용지 A4 통일 · es 국기 · `app/home-client.tsx` 삭제 · 규칙 PDF pt·id · CAPT `buyin` + Pokermania XL) · 핸드오프 「결재 완료」 표 | 전 구간 Opus(판정형) | ⏳ | | | |
| **Q2** | **결재 7 — 사진 5장 신규 제작 → EN 교체 → 8로케일 전파** | `settled-decisions` §1-B 결재 7(40건 = 8로케일 × 같은 5건 · 뿌리 EN 1곳) · 핸드오프 「이미지·워터마크」 절(교차 클러스터 🟠 7건 판정 포함) · 카드 문구 창작 금지(§3-A) · 워터마크 `scripts/wm-*.mjs` · 게이트 `check:images`·`check:image-reuse` | A Opus → B Fable(카드 문구 있으면) → C Opus | ⏳ | | | |
| **Q3** | **EN 자체 정합 — 56편 `updated` 전수 대조 + §3 잔여** | `en-first-queue` **§3**(판별식 · 이미 잡힌 6건 · 「낱개로 고치지 마라」) · `settled-decisions` §1-C(EN 문턱 · 양방향) · `docs/stamp-drift-audit-2026-09-10.md` §0·§3(창 = 09-08 이후) · EN↔pt FAQ 개수 드리프트(§0-B와 한 판) · game-order 「who bets first」 · 경쟁 페이지 언급 3곳 | 전 구간 Opus | ⏳ | | | |
| **Q4** | **EN-먼저 묶음 I — 미결·동형** | `en-first-queue` §2-D **J#8**(ept-barcelona €330 ↔ €825 · 공식 일정 축어 확보 후) · §2-E **X-1**(blind-meaning 「Nobody gets to skip their turn」 · WSOP Live Action §155~158 · Tournament §85) · 핸드오프 「대회·사실 판정」 절의 **EN 동형 30건**(M-089 §4 잔여 = bad-beat #12 ~62% · betting-actions 103조 두 요소 · flush-vs-straight SF 5장/7장 라벨 · 목록 `docs/reply-to-review-2026-09-04-m089.md` §2·§4) · `tiebreak-rules` L232 「Rule 85」 룰북 한정어 · 검수장 **MA-118 요청 2**(es wsop 2편 WRONG 15·RISKY 10·STALE 2 + LISR 138조 웹 실측) | A Opus → B Fable → C Opus | ⏳ | | | |
| **Q5** | **EN-먼저 묶음 II — 세션 1 렌즈 38건 판정** | `en-first-queue` **§1** ①~㊸(⑤·㉟ 3번 독립 재발견 = 우선) · 판정 뒤 EN 정정 → 8로케일 전파 · 기각은 사유와 함께 §1에서 지우기 요청 | A Opus → B Fable → C Opus · 🔴 38건이라 **두 회차로 쪼개도 된다**(Q5-a ①~㉑ · Q5-b ㉒~㊸) | ⏳ | | | |
| **Q6** | **헤드 판정 묶음 — 로케일 표기·구조**(ja·zh·zh-hant 파일 포함 → §7-F «미커밋 겹침» 확인 먼저) | 핸드오프 「▶ 그밖에 열 수 있는 것」 zh 표기 통일 4갈래(`打公共牌`/`打公牌`/`打牌面` · 二四法则 3표기 · 劫机位/劫持位 · 인용부호 3갈래 + pot-odds 比率↔百分比 절 통합) · 헤드 판정 6건(ja 전각（） · 見出し 콜론 · `drawing-odds` `## FAQ` · zh-hant `快速解答` 상자 셋 · zh-hant probability FAQ 10:15:16 · 부분문자열 태그 쌍) · `check:mirror-pair` 실제 갈림 4(zh apt 3행 결손 · zh만 2 · zh-hant만 2) · ja 회차 10·11 판정 2(pot-odds L194 中黒 · showdown 「マック」 FAQ) · MA-136 RISKY 4 + 약 잔존(ja) · pt `holdem-strategy.ts:183` 용어표 | A Opus → B Fable(재서술 있음) → C Opus · 🔴 ja 레인 회차 중이면 ja 자리는 «머지 뒤 전파» | ⏳ | | | |
| **Q7** | **게이트 신설 — 셀프테스트 먼저** | 핸드오프 「렌더·게이트·코퍼스」 절: ① `mailbox/out-본체.md` 검사(MB 행 수 = 고유 ID 수 · 헤더 1 · 아카이브 아래 MB 0 · 파이프 5~7) ② `lib/tournaments.ts`↔`tournaments-i18n.ts` **숫자 토큰 대조** ③ `check:answer-echo` 포인터·개수 검사(1차 신호 = «H2 개수어 N ↔ 블록 열거 수» · 브리지 정의 · 명제 단위 중복 신호 · 🔴 첫 주사 42히트 중 29 오탐 → 셀프테스트 먼저) ④ 「따옴표 빠진 썸네일 링크」 검사 ⑤ `scan-mobile-fold.mjs` 첫 인자 버그 · `audit:hard --locale=ja` 형제 표 행 키 불일치 2건 | 전 구간 Opus · 새 게이트마다 `--selftest` + 첫 실행 전건 원문 판정(memory `gate-tuning-loop-is-the-work`) | ⏳ | | | |
| **Q8** | **로케일 용어·문체 분열 소급**(pt·id·de·es) | 핸드오프 「로케일 용어·문체 분열」 절 전부(pt vazamento↔leak · dar raise↔aumentar · 홀카드 3종 · `masterUpdated` 부재 2편 · shc AJo 낡은 판 6로케일 · id cek/check·tangan/hand·meja/board · de 적대 QA 잔여 6 🔴 손대기 전 재grep · `blind-meaning` 결핍 타 로케일) | A Opus → B Fable → C Opus | ⏳ | | | |
| **Q9** | **EN 56편 원장 레인 착수 = 검수·정합**(경화 아님) | `en-first-queue` §3 · `settled-decisions` §1-B 「EN은 마스터다」 — 착수 ① = Q3이 끝나야 열린다 ② 원장 주장 판정은 검수장 몫(MB 통지로 요청) | Q3 뒤 | ⏳ | | | |

**착수점(2026-09-11 헤드 실측 · 레인 신설 시점)**: `check:drift --locale=ja/zh/zh-hant` 🔴 0 · 세 로케일 레인 회차 = zh·zh-hant 트랙 종결 · **ja 회차 13 진행 중**(워크트리 미커밋 13파일 · 브리프 `ja-회차13-개수열거.md`) → Q6·EN 전파에서 ja 13파일은 «머지 뒤». 우편함 미처리(본체 몫) 0. 핸드오프 30,258B(30KB 경계).

## 2. 미결 (해결될 때까지 유지)

- 🔴 **ja 회차 13이 진행 중이다**(2026-09-11 실측 · 핸드오프 「착수 지시 대기」는 낡은 문장). 겹치는 파일 = `apt-incheon` · `3bet` · `bad-beat` · `betting-actions` · `cooler` · `fish` · `short-stack` · `starting-hands-chart` · `strategy` · `tournament-vs-cash-game` · `when-to-fold` · `texas-holdem-rules-for-beginners` · `wpt-australia`(13). **EN을 고쳐 ja로 전파할 때 이 13편은 §5에 「머지 뒤 전파」로 넘긴다.** 회차 13 머지 뒤 이 행을 지운다.
- 🟠 결재 5(EN 제목 보강 3편)는 **보류** — GSC 실측 먼저. 회차에 넣지 마라.

## 3. 되돌리지 마라

- `settled-decisions` §1-B 전건(결재 15 · 재론 금지). 특히 **15** bad-beat ≈63%(65.0%/1.86:1로 되돌리지 마라) · **11** KPM 「9/4 마감」 중립화 · **2-ⓑ** 문장 다듬기 안 함.
- `en-first-queue` §1 **②** apt «개막 전 마감» — EN이 틀렸다(3자리). EN을 따라 로케일을 되돌리지 마라.
- EN `updated`는 구두점·별표·태그만 바뀐 커밋이면 올리지 않는다(`en/holdem-icm` 실증 · §1-C).

## 4. 거울쌍 갈림

해당 없음(로케일 레인이 아니다). zh↔zh-hant 갈림은 Q6에서 **직접 판정**한다(`check:mirror-pair`).

## 5. 헤드 요청 (헤드가 처리하면 ✅)

> 회차마다 여기에 쌓는다: ① MB 통지 초안(EN 변경 슬러그·자리·되돌리지 마라·앵커 갱신) ② ja·zh·zh-hant 파일 목록(§6-0 통지용) ③ `locale-intentional-diffs`·`settled-decisions` 승격 ④ 정본(en-first-queue·핸드오프)에서 지울 항목.

- (신설 시점 — 없음)

## 6. 자산 축적 체크 (매 회차 마감 3종)

① 키워드뱅크 — 해당 회차만 ② 편차 판정 → §5 ③ 판정 정본 승격 → §5
