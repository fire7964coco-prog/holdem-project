# L-2 EN-먼저 intake — MA-172를 MA-179로 거른 착수표 (2026-09-26)

> **무엇**: `docs/en-first-queue.md` §2-L «L-2 EN-먼저»의 착수 정본. 선행 intake = `mailbox-intake-2026-09-25.md` §2(옛 L-2 목록).
> **기준**: 검수장 EN 원장 `홀덤검수/ledger/en/` 46편 — 판정 `f8afaf6b` → 델타 `814133ae` → MA-179 잣대 통일 반영본.
> 본체 HEAD `4ccdb2b6`에서 `814133ae..HEAD -- lib/posts-en` **델타 0**(그 사이 커밋은 계산기 `104fac47`·`0932f093`뿐) → 원장 행은 전부 살아 있다.
> 🔴 **줄번호를 적지 않는다** — 원장 «원문» 축어로 찾는다(한 커밋마다 줄이 밀린다).

## 0. 거르는 규칙 — 원장이 정본이다

MA-172(09-23 · 요청 4 · 원장 881행)는 MA-179(09-25 · **EN 재검증 최종 MA** — MA-180 ⓐ 확인)로 일부 철회·강등됐다.
검수장이 그 결과를 **원장에 이미 반영**했으므로, MA-172 문면이 아니라 **현행 원장의 WRONG/RISKY 행**을 범위로 삼는다.

| MA-179 | 원장 실측(09-26 · 행 원문 grep) | 처리 |
|---|---|---|
| ① 철회(→ OK) — strategy «Always raise» · shc «hands 1–5» · when-to-fold «that's a call» · 3bet «first re-raise» · probability 2.0% · glossary 15 · odds 11 · gto 2 | 표본 10문구 전부 **미결 행 0**(OK로 닫힘) | **손대지 않는다** |
| ② 강등(WRONG → RISKY · 정정 요청은 유지) — c-bet two-thirds · floats · calling station · positions BB · blind-battle necessary · card-counting «no longer have» · low-board «Legal everywhere» | c-bet #2·#11·#20 · limping #4·#54 · positions #9 · card-counting #23 · low-board #18 = **RISKY** | 정정(한정어) |
| ③ 요청 1 cooler 한정절 | cooler 19 · bad-beat 22 · glossary 6 중 정의 계열 | L-2a — **재작성 아님, 한정절** |
| ④ 요청 2 신설 WRONG/RISKY | 재검증 보고서 6편 §2 = 원장 행 | 각 묶음 |
| ⑤ 요청 3 TDA 판 접두 | 글의 «TDA Rule 12/13-A/19/20» | L-2e(규칙) · 🔴 2026 v1.0 원문 본체 미열람 → **판 접두(2024 v1) 명시**가 기본, 2026 번호 갱신은 원문 확보 뒤 |

**범위 = 원장 미결 262행(WRONG 64 · RISKY 198) · 42편.** 검수장 원장 요약 합계 261과 1 차이 = `holdem-game-order` 요약칸 0 ↔ 실제 RISKY 행 1(요약칸 낡음 · MB로 통지).
UNVERIFIABLE 행은 **자동 재작성 대상이 아니다**(MA-172·179 명시).

## 1. 옛 L-2 목록(MA-144·167·174~178 · L-1 이월) 대조

로케일 원장에서 올라온 «EN 동형» 자리를 EN 원장에 대보았다.

- **원장에 미결 행으로 있음 → 그 행으로 처리**: beginners «only thing that changes»(#27)·«match the big blind»(#68 · 24사본)·«one fixed entry»(#25)·outs 정의(#77) · limping «win the pot preflop» 3 · c-bet two boards(#11) · 3bet 66.6%(#73) · SHC 7-2o(#54·#60) · strategy 27%(#6) · implied 9행 · fish orbit(#27) · paired «quarter»·«sixes»(#11·#63 WRONG) · monotone 74s(#9·#53 WRONG) · rake «how often»(#34) · drawing 1/4,900(#40·#41) · card-counting 9행 · tiebreak K-K-9-9-5(#57·#58) · equity one spot(#26) · hand-rankings two ways(#42 WRONG) · reading 7행 · flush royal(#41) · SHC «Late position only»·«moves up»(#12)
- **EN 원장은 OK/UNV로 판정 → EN은 고치지 않는다**(MA-179가 최종 잣대): probability «Set → full house 33.4%» · drawing 1.3%(#65 OK) · betting «same rule»(#73 OK) · showdown «caller may ask»(#58 OK) · probability 15–20×(#75 UNV·#103 OK) · fish «orbit or two» 첫 자리(#7 UNV). 로케일 쪽 결함이 **로케일 고유 문면**이면 해당 로케일 회차에서 처리 · 검수장에 판정 갈림으로 통지(MB 요청)
- **원장 밖(게시물 원장 없음)**: paired-board **ko 원본 «약 23%»**(MA-174 · 정답 13.0% · 66 쿼즈 포함 14.0%) → L-2b에서 EN과 같이 · solver «history stays in your browser» = EN 4편(3bet-pot-low-board·ace-paired·blind-battle-cbet·blind-battle-connected) 본문 → L-2b · 계산기 AQo↔KQo 지배 역전(MA-183 ① · EN-먼저 12표기) → **L-2f**(계산기는 게시물 원장 밖 · 104fac47 169쌍 스크립트 재사용)
- **L-1 이월**(es ~10 · zh·zh-hant equity 벳 문턱): EN 대응 행 정정 뒤 **로케일 전파 단계**에서 함께

## 2. 회차 분할 (한 회차 = 한 묶음 · EN 지점 정정 → 빌드 → 배포 → MB)

| 회차 | 묶음 | 원장 미결 | 동반 | 상태 |
|---|---|---:|---|---|
| **L-2a** | 용어 6 — cooler · bad-beat · glossary · fish · straddle · rake | 58 (W28) | MA-179 요청 1 cooler 한정절 + **형제 7로케일 ≈45자리**(보고 §3-3 · 행별 재확인) · MA-182 de cooler Kurze Antwort 3문장 · MA-180 ⓒ KK 폴드 FAQ가 한정절 자리와 겹치면 한 커밋 · bad-beat AA vs 77 승자 단정(§13 검산) | ✅ `18b8eaf9`(MB-089) · 정의 계열 밖 EN 변경의 7로케일 전파는 L-2g |
| **L-2b** | GTO 13 | 68 (W29) | paired-board 13.0% **ko+EN+8로케일 10사본** · monotone 74s 10사본 · «sixes lead most» 8사본 · history 문장 4편 × 5로케일 · 원시 캡처 `.solver-captures/data.json` 대조 | ✅ `1bbe1bfe`(MB-090) · 원시 재검산 · 렌즈 반영 10 · ko 원본 동형 결함 동반 정정 · 동반 밖 EN 변경의 로케일 전파는 L-2g |
| **L-2c** | 전략 8 | 56 (W0) | MA-144 ⓑ · SB «3-bet or fold» 라벨 차이 = 의도(MA-179 ⑥ · 손대지 않음) | ✅ `a879e603`(MB-091) · 채택 55 · 기각 1(3bet #79 재라벨 누락) · MA-187 ① 동반 · 로케일 전파 L-2g |
| **L-2d** | 확률·아웃츠 7 | 52 (W5) | L-1 이월(es·zh·zh-hant equity 벳 문턱 등) · MA-188 ① Set→FH 8로케일 | ✅ `7d2a0822`(MB-092) · 채택 52 · 기각 0 · 동반 밖 로케일 전파 L-2g |
| **L-2e** | 족보·규칙 8 | 28 (W2) | **MA-188 ② betting «The same rule also bans» EN #73 → «Rule 103 also bans…»(es·zh·zh-hant 동반) · ③ showdown FAQ «caller who paid may ask» EN #81 신설 RISKY(zh #87·zh-hant #86 동반 · es OK)** · MA-179 요청 3 TDA 판 접두 · MA-182 통지 2(de TDA 14행 · all-in «Rule 174») · beginners «match the big blind» 24사본 | ✅ `10e5997b`(MB-093) · 채택 27 · 기각 1(game-order #17) · 동반 밖 로케일 전파 L-2g |
| **L-2f** | 계산기 AQo↔KQo | — | MA-183 ① · EN + 10로케일 + ko · 169쌍 역전 0 재확인 | ✅ `4acd45c5`(MB-094) · 쌍 1,234 역전 1→0(커넥터 예외 = 수티드 한정) · MA-190 요청 1 동반 |
| **L-2g** | 로케일 전파 | — | EN 정정분을 12로케일로 · 레인별(`docs/audit-lanes.md`) · MB-080 형제 무효(es 5 · de 19 · ja 21 · pt 20 · id 10)와 합침 · MA-190 ② 목록(작업판 L-2f 절) | ▶ 다음 |

**회차 규율**: ① 원장 행마다 채택/기각을 판정하고 기각은 이유를 남긴다(MB 회신 재료) ② 핸드·수치는 §13 검산 ③ 한 회차 = 커밋 1~2 · MB 1행(규율 B) ④ 로케일 동반 자리는 **같은 커밋**(두 번 고치지 않는다).

## 3. 부록 — 원장 미결 262행 스냅숏

→ `l2-en-open-rows-2026-09-26.md`(묶음별 · 원문 앞 110자 · «처리» 칸은 회차마다 채운다). 재추출 = 원장 `| # | 유형 | 원문 | 판정 |` 표에서 판정 WRONG/RISKY(굵게 포함 · `\|` 이스케이프 처리).
