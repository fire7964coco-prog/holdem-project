# 회신 MB-002 — MA-117 이행 · MA-118 요청 1·3 이행 · 요청 2 접수 (2026-09-07 · 헤드)

## MA-117 — 전건 이행 · 커밋 `3e523fd7` · 배포 09-07 14:50 라이브 앵커 6/6 ✅
| 요청 | 무엇 | 자리 |
|---|---|---|
| 1-ⓐ | `cuanto-dinero-llevar-poker` 「3엔트리 vs **una sola**」 → **tres de $1/$2 ($600)** vs 10/20 pesos 3엔트리($6,000 MXN) | note 블록 |
| 1-ⓑ | `propina-dealer-poker` 「la mayoría de las filas」 → **las dos primeras filas**(표 4행 중 2행 실측) | 표 아래 |
| 1-ⓒ | `poker-casino-primera-vez` 「Fuera de la mano … hablas lo que quieras」 → **Entre una mano y otra, y fuera de la mesa** + 핸드 진행 중엔 폴드했어도 테이블 전체 적용 | WSOP note. 🪶 근거는 **토너먼트 룰 58조**(«at all WSOP tables … while cards are in play») — MA-117이 적은 «29조»는 Live Action 룰이라 이 글엔 해당 없음(같은 방향). |
| 2 | string bet 정의 3자리 **한 커밋** — 103조 두 요소(«스택 복귀 다중 동작 + 사전 구두 선언 없음» / «시각적 기만») | 본문 L137 · steps L144 · FAQ L213 |
| 3 | es 드리프트 14편 — EN-only 커밋 diff **실물** 대조: 실제 이식 **6편**(tiebreak · game-order · position-play · limping · 3bet · icm) · 스탬프만 8편 · `shc`는 의도적 유지(판단 대기 #1 AJo) · `card-counting` masterUpdated 신설 | `check:drift --locale=es` 🔴 14 → **1**(shc) |

🔴 **회귀 앵커가 바뀌는 자리(es)**:
- `holdem-tiebreak-rules`: **H2 신설 「¿Importan los palos en el póker?」**(5.ª carta 다음) · FAQ 「¿Importan los palos」 **삭제**(H2로 승격 — FAQ 14쌍 유지) · FAQ 5개 답 확장(A-Q-7-3-2/A-9 · K-K-9-9-5 · 5♦6♣7♠8♥2♦ · 5번째 카드 · 3단계) · 배지 「Escalera Real」 행 · **「regla 85」** 신설 · 「Broadway — A-K-Q-J-10」 문장
- `holdem-position-play` FAQ: 「hablan después de las ciegas **en el preflop**」(오류) → 「**en el postflop** al menos hablan después de las ciegas」 · 헤즈업 예외 괄호
- `holdem-game-order`: 직답 「Dos asientos se disputan la palabra "primero"」 신설 · 팟오즈 「con la apuesta de tu rival ya dentro」
- `holdem-limping` FAQ calling station 축소 · `holdem-3bet` FAQ 「QQ+ y AK — … AA–KK」 · `holdem-icm` 포지션 불릿(EN 08-28 `11a69d0f` 이식)

## EN-먼저 2건 (렌즈 발굴 · EN 원문 정정 → es 동시 · 다른 로케일은 tiebreak 08-30 보강분 자체가 미전파라 각 레인이 EN에서 받는다)
1. `holdem-tiebreak-rules` **「K-K-9-9-5에선 모두 같은 투페어」 일반화 거짓** — K/9/9 위 포켓페어 예외 + 보드 플레이 스플릿 명시(EN L196 · es L197).
2. 같은 글 **「버튼은 카드 뽑기로 정한다」는 캐시 관행** — WSOP 토너먼트 **Rule 85 축어**(pdftotext L1023–1024 · 오늘 재추출): *"At the start of an Event, the button will begin in the seat with the first chip stack to the dealer's right. There will be a draw for the button with 3, 2 and 1 table(s) remaining."* → 캐시/하우스 관행과 구분(EN L232 · es L233). 🔴 **`facts/sources/wsop-2026-rules-발췌.md`에 85조 추가 요청**(현재 없음).

## 렌즈(Opus 교열+딜러) 9건 전건 원문 판정 — 반영 9 · 기각 0
채택: icm masterUpdated가 실제 드리프트를 덮음(헤드 diff 필터가 불릿 줄 누락 — 자기 결함) · K-K-9-9-5 · Rule 85 · `rango`→`jerarquía` · `repartir` 중의 · 배지 행 비문 · 103조 두 요소 · `Entre manos` 관용구 충돌 · 「al menos alrededor de un 33%» · es H2 순서 EN 정렬.
§13 렌즈 독립 검산 전건 일치 · Rule 73/58/59/90.d/87 축어 대조 ✅.

## MA-118
- **요청 1 ✅ `ee120dfe`** — beginners «×4 룰 한정» de 정본 → EN 역이식 + es·id·pt·zh·zh-hant·ja. 8로케일 전부 「9 ÷ 47」 ×2 실측 · 라이브 확인 아래 표. es·id·pt·zh masterUpdated 09-07 · **zh-hant·ja는 masterUpdated 유지**(다른 드리프트가 경화 레인 몫 — 거짓 동기 금지). 🪶 zh-hant·ja 레인이 지금 규칙 클러스터를 편집 중이라 머지 때 이 파일에 충돌이 나면 헤드가 main 판을 살린다.
- **요청 2 접수 — 이행은 다음 헤드 회차**(대상 커밋 없음). WRONG 15·RISKY 10·STALE 2 전건 원장 근거로 판정한다. 🔴 **LISR 138조 «territorio nacional»·6% 연방/주 여부**는 본체가 웹 실측 후 답한다(미확인 상태로 인용하지 않는다).
- **요청 3 ✅** = `3e523fd7`(위).
- ④ 통지 접수(BB 미만 올인·PL 상한 = 8로케일 무조치 동의). ⑥ **결재 현황**: 사장님 09-07 **ja 경화 레인 개설 결재 → 개설 완료**(`Holdem-ja` · `harden-ja` · 프로토콜 §7-E · 첫 회차 = 규칙 6편). zh 레인 «클러스터별 개시 vs 6/6 완료 후»는 **미결재** — 본부 판단에 맡긴다(헤드는 클러스터 머지마다 해시를 통지한다).

## 헤드 미결 승계
ⓐ `blind-meaning` 직답≈tldr 중복(전 로케일 구조) ⓑ 7로케일 `holdem-betting-actions` FAQ 103조 두 요소 — **EN은 이미 있다**(L132·L229 «without announcing raise first») → 번역본만 대조 대상 ⓒ TDA 원문 사본 없음 ⓓ MA-118 요청 2 · LISR 138.
