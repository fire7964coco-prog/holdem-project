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
| **Q1** | **결재 실행 — 판정형 소품** | `settled-decisions` §1-B **결재 1**(`starting-hands-chart` #13 — EN 콤보 직접 세기 → 그쪽에 맞춤 · `en-first-queue` §1 ㉗과 한 판) · **결재 6·소품**(PDF 용지 A4 통일 · es 국기 · `app/home-client.tsx` 삭제 · 규칙 PDF pt·id · CAPT `buyin` + Pokermania XL) · 핸드오프 「결재 완료」 표 | **Opus 전 구간 · 1세션**(계산·파일 작업 · 새 문장 없음) | ✅ | (아래 §1-Q1) | 렌즈 4종 = 지적 26 · 반영 21 · 기각 3 · 이관 2 | 09-11 |
| **Q2-a** | **결재 7 — 이미지 40건 판정 + 슬롯 스펙** | `settled-decisions` §1-B 결재 7(40건 = 8로케일 × 같은 5건 · 뿌리 EN 1곳) · 핸드오프 「이미지·워터마크」 절 · 카드 문구 창작 금지(§3-A) · 게이트 `check:images`·`check:image-reuse` → **산출 = 브리프 `docs/harden-brief/queue-Q2-이미지.md`**(아래 §1-Q2-a) | **Opus 전 구간 · 1세션**(판정형 · 새 문장 없음) | ✅ | (아래 §1-Q2-a) | — (판정 회차 · 렌즈는 Q2-b) | 09-11 |
| **Q2-b** | **결재 7 — 이미지 10장 제작 → EN 교체 → 8로케일 전파** | **브리프가 본체**(`queue-Q2-이미지.md` §4 슬롯 10 · §6 실행 순서 · §7 하지 말 것) | **Opus 전 구간 · 1세션** | ✅ | (아래 §1-Q2-b) | 렌즈 4종+2차 교열 = 지적 51(중복 5 제거 후 **46**) · 반영 33 · 기각 5 · 이관 4 · 기록만 4 | 09-11 |
| **Q2-c** | **결재 7 잔여 — T2 3자리(이미지↔캡션 무관)** | 브리프 `queue-Q2-이미지.md` **§8**: `limping:64`(리밍의 비용 인포 or 삭제) · `limping:116`(아이솔레이트 레이즈 인포 or 삭제) · `drawing-odds:58`(셋마이닝 11.8% · 7.5:1 인포) — 8로케일 동형(+3장 · +24행). 규격·팔레트·«값을 말하지 않는다» 규율은 Q2-b 그대로 | **Opus 전 구간 · 1세션** | ⏳ | | | |
| ~~Q3~~ | **EN 56편 `updated` 전수 대조** — ✅ **종결(신설 시점 실측 · 회차 불요)** | 실측 2026-09-11: EN 57파일 중 «마지막 커밋 > `updated`» 6 · **창(09-08 이후) 1 = `holdem-icm`**(구두점만 · `2c9012c7` · «올리지 않는다» 판정 이미 완료) · 창 밖 5 = `8d2aba44` CSS 수리 2 · `a069430a` tldr 별표 제거 2 · `index.ts`(포스트 아님) → **전부 §1-C «기계적 변경은 안 올린다»에 해당**. `en-first-queue` §3의 「이미 잡힌 6건」은 `fd8cafc0`로 닫혀 있다(현재 파일에 남은 어긋남 0). 재현 = 셸 한 줄(파일별 `git log -1 --date=short` ↔ `updated` 비교) — Q7에서 `check:stamp --locale=en` 게이트로 박는다. **§3 잔여(경쟁 페이지 언급 3곳 · EN↔pt FAQ 개수 · game-order 「who bets first」)는 Q4-a로 이관** | — | ✅ | (실측만 · 커밋 없음) | — | 09-11 |
| **Q4-a** | **EN-먼저 묶음 I — 미결·동형** | `en-first-queue` §2-D **J#8**(ept-barcelona €330 ↔ €825 · 공식 일정 축어 확보 후) · §2-E **X-1**(blind-meaning 「Nobody gets to skip their turn」 · WSOP Live Action §155~158 · Tournament §85) · 핸드오프 「대회·사실 판정」 절의 **EN 동형 30건**(M-089 §4 잔여 = bad-beat #12 ~62% · betting-actions 103조 두 요소 · flush-vs-straight SF 5장/7장 라벨 · 목록 `docs/reply-to-review-2026-09-04-m089.md` §2·§4) · `tiebreak-rules` L232 「Rule 85」 룰북 한정어 · **Q3 이관분**(경쟁 페이지 언급 3곳 · EN↔pt FAQ 개수 bubble·short-stack·tournament·icm · game-order title 「who bets first」) · 🆕 **ja 회차 13 §5-K 이관**(`harden-ja-진행` §5-K · 09-11 머지): **K1** `when-to-fold` 셀프체크 ⑤ 「(= a bluff-catcher)」 EN L141/L153 + 8로케일(D유형) · **K3** = J#8과 같은 자리(ept €330 H2·비교표 — 블록만 €825로 갈려 있다) · **K4** `tiebreak-rules`↔`kicker` «キッカーなし 족 개수» 5 vs 4 — 헤드 실측(09-11): **EN도 같다**(kicker FAQ L184 「Straights, flushes, full houses, and straight flushes」 = 4 · tiebreak 표 L84~89 = 로열 행 별도 5) → 로열 = 스트레이트플러시라 둘 다 참 · **결함 아님** · 통일은 선택(kicker FAQ에 「(royal included)」 한 마디 · 8로케일) · **K2**(bad-beat 63%) = 🔴 **결재 15 재론 금지**(≈63% 유지 · 65.0%/1.86으로 되돌리지 마라). 🔴 헤드 실측(09-11): 결재 15의 **행 문구 «nine outs plus live side cards»가 EN L92·ja L105에 아직 없다**(「9-out flush draw fills on the river」 그대로 · `en-first-queue` §1 ③과 같은 자리) → **결재 15 이행 = EN L92 행 문구 + 8로케일** · 🆕 **ja 회차 14 §5-L 이관**: **L1** `holdem-straddle` EN L88·L169·히어로 캡션 L69 「buys the last action」 프레이밍 — 버튼은 원래 포스트플롭 마지막이라 버튼 스트라들이 사는 건 **프리플랍** 마지막 액션뿐(EN L188만 정확) → 한 줄 한정 + 8로케일 · **L2** `holdem-outs` 표 15행(플러시+OESD) 도출 「9 + 8 − 2」 — EN 같은 칸이 산문이면 동형 + 7로케일(ja는 이미 고침) | **Opus 전 구간 · 1세션** — 🔴 재료 실측 후 재조정(§5-A-3): EN 쪽이 «짧은 한정어 10자리»로 줄어 새 문장 집필 구간이 없었다 | ✅ | (아래 §1-Q4-a) | 렌즈 4종+2차 교열 = 지적 **59** · 반영 **43** · 기각 **6** · 이관 **7** · 기록만 **3** | 09-12 |
| **Q4-b** | **검수장 MA-118 요청 2 — es 대회 2편** | `como-entrar-al-wsop`·`wsop-2026-tournament-guide`(es) WRONG 15·RISKY 10·STALE 2 + **LISR 138조 웹 실측**(멕시코 소득세법 · 1차 출처) · 원장 = `홀덤검수-es/ledger/` · EN 동형이면 EN-먼저 | **Opus 전 구간 · 1세션**(번역 QA·법령 실측 = Opus · 새 문장은 원장 처방 이식) | ⏳ | | | |
| **Q5-a** | **EN-먼저 묶음 II — 세션 1 렌즈 38건 판정(전반)** | `en-first-queue` **§1 ①~㉑**(⑤ 3번 독립 재발견 = 우선) · 판정 뒤 EN 정정 → 8로케일 전파 · 기각은 사유와 함께 §1에서 지우기 요청 | **A Opus(전건 원문 판정) → B Fable(채택분 재서술) → C Opus · 1세션** | ⏳ | | | |
| **Q5-b** | **EN-먼저 묶음 II — (후반)** | `en-first-queue` **§1 ㉒~㊸**(㉟ 우선 · ㊲는 검수장 판정 산물이라 재론 절차 = MB 초안) | 위와 동일 · 1세션 | ⏳ | | | |
| **Q6** | **헤드 판정 묶음 — 로케일 표기·구조**(ja·zh·zh-hant 파일 포함 → §7-F «미커밋 겹침» 확인 먼저) | 핸드오프 「▶ 그밖에 열 수 있는 것」 zh 표기 통일 4갈래(`打公共牌`/`打公牌`/`打牌面` · 二四法则 3표기 · 劫机位/劫持位 · 인용부호 3갈래 + pot-odds 比率↔百分比 절 통합) · 헤드 판정 6건(ja 전각（） · 見出し 콜론 · `drawing-odds` `## FAQ` · zh-hant `快速解答` 상자 셋 · zh-hant probability FAQ 10:15:16 · 부분문자열 태그 쌍) · `check:mirror-pair` 실제 갈림 4(zh apt 3행 결손 · zh만 2 · zh-hant만 2) · ja 회차 10·11 판정 2(pot-odds L194 中黒 · showdown 「マック」 FAQ) · MA-136 RISKY 4 + 약 잔존(ja) · pt `holdem-strategy.ts:183` 용어표 · 🆕 **Q1-10 `lib/tournaments-i18n.ts` NOTE_JA·ZH·HANT·ES·DE 오스트리아 6행**(EN만 채워져 있어 비KO 보드가 「€36~€230」 범위형 바이인을 해설 없이 그린다 — 로케일별 재저작) · 🆕🔴 **ja 잔여 묶음 = `harden-ja-진행` §2-N 전건**(ja 소급 회차는 14로 종료 · 사장님 결재 09-11 · 이제 queue가 ja 파일을 직접 고친다): 개수 열거 결손 5(rake L105 2通り↔1 · glossary L240 3범주↔2 · position-play L273 4↔2+수치 0 · kicker L82 ハイカード · rake L50 호명어) · positions L75 존 매핑 삼중 · straddle L76 「2点」 · probability↔L57 명제 겹침 · apt AREX ₩4,750·約60分 1차 출처 재실측 · glossary stripe L31 「ペア」 · outs 화살표 표기 · 🆕 **Q2b-4·6**: zh `holdem-outs` `开口顺` 14곳 ↔ 코퍼스 `两头顺` · zh-hant `holdem-outs` `中洞` 6곳 ↔ `卡順`(파일 안은 일관 — 캡션만 바꾸지 말 것) · ja `holdem-glossary:89` 표제어 `ミニマムレイズ` ↔ 본문 `最低レイズ`(병기 권고) | **Opus 전 구간 · 1~2세션**(표기 치환·판정·번역 QA = Opus · 네이티브 렌즈는 Opus 서브 zh/ja 각 1). 🔴 ja 레인 회차 중이면 ja 자리는 «머지 뒤 전파» | ⏳ | | | |
| **Q7-a** | **게이트 신설 I — 우편함·대회 수치·스탬프** | 핸드오프 「렌더·게이트·코퍼스」: ① `mailbox/out-본체.md` 검사(MB 행 수 = 고유 ID 수 · 헤더 1 · 아카이브 아래 MB 0 · 파이프 5~7) ② `lib/tournaments.ts`↔`tournaments-i18n.ts` **숫자 토큰 대조** ③ 🆕 `check:stamp`(Q3 재현 셸을 게이트로 · 창 09-08 이후 · EN 문턱 · 양방향) ④ 「따옴표 빠진 썸네일 링크」 검사 ⑤ `scan-mobile-fold.mjs` 첫 인자 버그 · 🆕 **Q1-7** ⑥ PDF `.page` 치수 ↔ `@page size` 불일치 검사(de가 6mm 잘려 있었다 · PDF는 어떤 게이트도 안 본다) ⑦ `/hand-chart` 「UTG 약 12%」 = 핸드 타입 비율(21/169) ↔ 블로그 13% = 콤보 비율 — 도구 라벨에 기준 병기 · 🆕 **Q2b-5** ⑧ `lib/render-markdown.ts:200` `height="630"` ↔ 실제 675(CLS 예약 높이 오기) | **Opus · 1세션** · 게이트마다 `--selftest` + 첫 실행 전건 원문 판정(memory `gate-tuning-loop-is-the-work`) | ⏳ | | | |
| **Q7-b** | **게이트 신설 II — 직답 포인터·개수** | `check:answer-echo` 포인터·개수 검사(1차 신호 = «H2 개수어 N ↔ 블록 열거 수» · 브리지 정의 «마지막 한 문장 + H2 약속 항목 전부» · 명제 단위 중복 신호 · 🔴 첫 주사 42히트 중 29 오탐 → 셀프테스트 먼저) · 🆕 **ja §5-K 5 «셈의 단위»**(`cjkLen`이 표의문자만 세서 카타카나 18자 완전 축어가 🔴 0 — 카타카나·라틴·숫자 0.5자 또는 «원문 18자+문장 경계 무시» 신호 추가 · 실례 `betting-actions` 「ミス2 — …」) · 개수 신호 2차(블록 자체 선언 N — «H2에 개수어 없는» 결손 3자리) · `audit:hard --locale=ja` 형제 표 행 키 불일치 2건 | **Opus · 1세션** | ⏳ | | | |
| **Q8-a** | **로케일 용어·문체 분열 소급 — pt** | 핸드오프 「로케일 용어·문체 분열」 pt 행 전부(vazamento↔leak · dar raise↔aumentar · 홀카드 3종 · `masterUpdated` 부재 2편 · shc AJo 낡은 판 6로케일 · strategy 허브 표 목적지 · tvc 표 위치 = EN 패리티) | **Opus 전 구간 · 1세션**(번역 QA = Opus · 치환은 문장 단위 · 파일 치환 금지) | ⏳ | | | |
| **Q8-b** | **로케일 용어·문체 분열 소급 — id·de·es** | id cek/check·tangan/hand·meja/board · id-posting-reference §5 계수 재확인 · de 적대 QA 잔여 6(🔴 손대기 전 재grep) · es LATAM 보충은 **열지 않는다**(별도 트랙) · `blind-meaning` 결핍 타 로케일 | **Opus 전 구간 · 1세션** | ⏳ | | | |
| Q9 | **EN 56편 원장 검수** | 🔴 **queue 회차가 아니다** — 검수장 en 레인(`홀덤검수-en` · MA-123 개시)이 원장으로 판정하고 MA 요청으로 넘어온다. queue는 **이행**만(Q4-b 유형). EN «경화»는 이미 끝난 것으로 결재됐다(`settled-decisions` §1-B 「EN은 마스터다」) — 다시 열지 마라 | — | 검수장 | | | |

### §1-Q1. 회차 Q1 판정 — 결재 1(shc #13) · 결재 6·소품 5건 (2026-09-11)

**🔴 결재 1 «UTG 13% vs 핸드 목록» — 판정 = «13%를 살리고 목록의 «지위»를 고친다».** 근거는 직접 센 콤보다(§13):

| 자리 | 문면 | 콤보 | 1,326 대비 |
|---|---|---:|---:|
| 표 UTG 행 「TT+, AJs+, AKo, KQs」 | 8로케일 전부 동일 | **58** | 4.37% |
| 본문 core 리스트(+AQo) | TT+ · AKs/AQs/AJs/KQs · AKo | 58 (70) | 4.37% (5.28%) |
| 본문 「full ~13% range widens to…」 | core + 77–99 + 수딧 브로드웨이 + AQo | **112** | 8.45% |
| 표 라벨 | — | (172) | **~13%** |

- 🔴 **구 메모의 「144콤보 = 10.86%」는 재현되지 않는다.** 144 = 위 112 + A2s~A9s(32)인데, **같은 글이 A2s–A7s를
  «UTG 폴드»로 명시**하므로 그 8핸드를 넣은 셈이다. 검수장이 같은 자리를 「13% = 172조합인데 핵심 목록 58콤보」로
  적은 쪽(58·172)이 재현된다. 앞으로 이 자리를 인용할 땐 **58 / 112 / 172**를 써라.
- **왜 13%를 살렸나**: ① 13%는 코퍼스 앵커다 — `lib/range-chart.ts` RANGE_CHART_SEATS · 게이트
  `check:rangechart` · 8로케일 본문 표 · tldr · 6-max 절 · 세션평균 절(EN만 6자리) ② 사이트 자체 169핸드 그리드
  (`app/hand-chart/hand-chart-client.tsx` tier 1)를 직접 세면 **132콤보 = 9.95%**로 같은 자릿수다 ③ 4.4% UTG 오픈은
  어떤 출처로도 지지되지 않는다. **즉 결함은 숫자가 아니라 «짧은 목록을 레인지 전부로 읽히게 둔 틀»이었다.**
- **처방**: 표 바로 아래에 문단 1개 신설 — 「퍼센트는 1,326 콤보 대비 비율(~13% ≈ **172**)이고, 그건 **잘 치는 레귤러가
  UTG에서 여는 폭**이지 이 페이지가 초보에게 요구하는 폭이 아니다. 각 좌석 옆 핸드는 **core**이고(UTG 행 = 58콤보),
  아래 행들은 그 좌석이 **더하는 것만** 적는다. 완전한 ~13%까지의 마지막 구간은 뒤의 GTO 절 몫이다.」
  EN + 7로케일 동시. **표·tldr·6-max·rangechart 수치는 한 자도 안 건드렸다.**
- 🔴 **1차안은 렌즈에 깨졌다 — 이 경위를 남긴다.** 처음 쓴 문단은 「나머지 ~13%는 아래의 미들페어·브로드웨이**다**」라는
  **등식**이었는데, 수학·딜러 렌즈가 독립으로 반증했다: core 58 + 77~99(18) + 나머지 수딧 브로드웨이(24) + AQo(12)
  = **112콤보 = 8.45%**로 172에 **60이 빈다.** 그 60을 채우려면 같은 글이 «늦은 포지션 전용»이라 못박은 22~66·A2s~A9s를
  UTG에서 열어야 한다 → 초보 유해(D유형). **핵심 교훈: «13%»는 이 글의 어떤 핸드 목록으로도 구성되지 않는다.**
  그래서 «구성»을 말하지 않고 **«누구의 폭인가»로 층을 가르는** 쪽이 정답이었다.
- 🔴 **AJo는 결국 «삭제»가 정답이었다**(1차안은 EN에 AJo를 «추가»했다가 되돌렸다). 같은 글 퀴즈(「AJo는 UTG 컷에 못
  든다」)와 6-max 비교표가 AJo를 9max UTG 폴드로 못박고, 특히 **6-max 절은 AJo·KQo를 9max/6max를 가르는 기준 핸드로**
  쓴다 — 넣는 순간 그 절의 근거가 무너진다. 구 대기 지시(`posts-id` 헤더)도 문자 그대로 「AJo 삭제(EN은 «AQo»만)」였다.
  → **8로케일 전부 「AQo」로 일치**(de·es·id·pt에서 삭제 · en·ja·zh·zh-hant는 무추가). `posts-id` 헤더 주석도 갱신.
- 🪶 이 판정으로 **하위 문제 3건이 같이 닫힌다** — pt 원장 #17·#24·#25(「77이 어느 포지션에서 열리나」 ·
  `docs/reply-to-review-2026-09-04-m089.md` §2-C가 «#1 판정 때 함께»로 대기시켜 둔 것). 77·88은 **UTG ~13%의
  바깥 가장자리**이고, 표의 「MP: Add 88, 99」·「CO: Add 55–77」은 **core가 넓어지는 지점**이라 충돌하지 않는다.
- 🪶 **덤으로 닫힌 드리프트 1건**: de·es·id·pt만 「AQo/AJo」이고 en·ja·zh·zh-hant는 「AQo」 단독이었다
  (`lib/posts-id/...ts` L16 주석이 「판단 대기 #1과 같은 갈래라 임의 소급 금지」로 묶어 둔 자리). **EN에 AJo를 더해**
  8로케일을 맞췄다 — 172콤보 레인지에 AJo가 없을 수 없다.

**🔬 렌즈 4종(Opus 서브 · 병렬) — 내 1차안의 결함 5건을 잡았다**

| 렌즈 | 잡은 것(반영) | 값어치 |
|---|---|---|
| 수학·§13 | ① 등식 거짓(112 vs 172) ② AJo 자기모순 ③ 「170」↔두 줄 뒤 「169」 층 혼동 → **172**로 | 산수는 **한 렌즈만** 잡는다 |
| 딜러·전략 | ④ 「core = 매번 연다」에 first-in 한정 부재 + MP·CO·BTN 칸은 core가 아니라 **증분**(`Add …`) ⑤ 「가장자리를 먼저 버린다」가 **실전 순서 반대**(셋마이닝 되는 77·88보다 지배당하는 오프수트가 먼저 나간다) ⑥ **제펠트 범위화가 오히려 메인 가격을 지웠다** ⑦ **T5 9/27 그라츠 스타팅데이 누락** ⑧ T1 비KO 보드 note 미표시 ⑨ **T3·T4 de 포스트 사실오류 2건** | 유일하게 **대회 데이터**까지 봤다 |
| 네이티브 | ⑩ **ja·zh 글이 자기 PDF를 두고 영어 PDF를 건다**(zh는 표기조차 없었다) ⑪ pt 부제 「Cheat sheet」 → **「Cola」**(pt 코퍼스 cheat sheet 0회·cola 5회 · 이 PDF를 거는 H2가 「Cola de regras…」) ⑫ id PDF가 원본의 완화어 「hampir selalu」를 지웠다 | 코퍼스 실측이 근거 |
| 교열·diff | ⑬ **축어 중복**(새 문단 끝 절 ↔ 10줄 뒤 기존 불릿 · 7로케일 · ja는 15자 완전 일치) ⑭ **zh-hant `約 6.5%`**(나머지 7로케일·같은 파일 2곳은 6.4%) ⑮ 「창작 0」 주석이 id에 대해 거짓 ⑯ `overflow:hidden` 기전 귀속 오류 ⑰ **en PDF diff = 타임스탬프 8바이트뿐** ⑱ ROUTE_SOURCES가 936B 래퍼만 가리킴 | **다른 렌즈가 원리상 못 보는 자리** |

🔴 **⑭는 이 회차가 만들 뻔한 거짓말이었다** — zh-hant `masterUpdated`를 09-11로 올려 「EN과 대조 완료」를 선언했는데
파일 안엔 EN과 다른 값이 남아 있었다. **스탬프를 올리는 회차는 그 파일의 언어 불변 항목을 한 번 훑어야 한다.**

**기각 3 · 렌즈도 틀린다**
- 🔴 **es 천단위** — 수학·교열 렌즈가 「새 문단의 `1.326`이 맞고 나머지 두 곳이 틀렸다」고 했다. **코퍼스 실측은 반대다**:
  es는 `1,326`이 4개 파일 **11곳**(`drawing-odds` 6 · `probability` 2 · `shc` 2 · `beginners` 1)이고 내 문단만 이탈이었다.
  → **내 쪽을 고쳤다.** 교훈 = «그 언어의 관습»과 «이 코퍼스의 관습»이 갈리면 코퍼스가 이긴다(한 글 안의 일관이 먼저다).
- **pt·id PDF 대시 혼용** — 네이티브 렌즈가 「`line`의 em dash가 블록 안에서 튄다」고 했으나 실측하면 **en·ko·ja·zh·pt·id
  6블록이 전부 `—`**이고 de만 `–`다. pt·id가 다수 선례를 따랐다. 무변경.
- **「AQo/AJo 패리티 8/8 ✓」**(교열 렌즈) — 패리티는 맞지만 **값이 틀렸다.** 딜러 렌즈가 이겼다(위 AJo 판정).

**이관 2**(이번 회차 범위 밖 · §5로)
- `render-markdown.ts`의 PDF 카드 크롬이 영어 하드코딩(`PDF Cheat Sheet` · `Printable PDF · quick table reference`) —
  `renderMarkdown(content, locale?)`에 locale 인자가 **이미 있는데 안 쓴다.**
- EN `:126` 「77·88이 가장 먼저 떨어진다」의 실전 순서 뒤집힘(딜러 ⑤의 나머지 절반 · 기존 문장이라 별도 판정 필요).

**결재 6·소품 5건 — 전건 이행**

| 소품 | 이행 | 실측·근거 |
|---|---|---|
| PDF 용지 A4 | ko·ja·zh → A4(en은 Letter 유지 = 미국 규격) | 🔴 **부수 결함 1건 발견·수리**: `.page` 박스가 8.5in×11in로 **하드코딩**돼 있어 A4를 쓰던 **de PDF가 오른쪽 6mm를 잃고 있었다**(렌더 대조로 확증 — 구판은 RIVER 상자가 우측 여백을 먹는다). `PAGE_DIMS` 로 `@page` 와 연동 |
| es 국기 | 🇪🇸 → **🇲🇽** | 같은 맵의 `pt: "🇧🇷"`(포르투갈 아닌 브라질) 선례 = 「출신국이 아니라 주 시장」. 🟠 **사장님 확인 대기** — 대안은 🌎(§5-1) |
| `app/home-client.tsx` 삭제 | 50,876B 제거 | `app/page.tsx`는 `./community/community-home`을 그린다. 유일한 참조였던 `generate-sitemap.mjs` ROUTE_SOURCES를 실제 렌더 파일로 교체 |
| 규칙 PDF pt·id | 신규 2종(A4·2p) | 문안은 **각 로케일 글에서 축어 이식**(창작 0). 🔴 id 글은 **영어 PDF를 인니어 라벨로** 걸고 있었다 — de가 2026-08-10에 고친 것과 같은 결함 |
| CAPT `buyin` + Pokermania XL | 제펠트 `€550` → **`€550~€1,100`** · `pokermania-xl-velden` 행 신설 | 1차 출처 재실측(casinos.at은 봇에 403 → r.jina.ai): Velden 포커 페이지 「vom 29.9. bis 4.10.2026」·「50.000 Euro」 + 공식 캘린더 7항목 전건 열거(29.9 메가새틀 「€ 30 + 6」 · 1A~1E 「€ 200 + 30」). 🟠 **방향은 사장님 확인 대기**(§5-2) |

🔴 **되돌리지 마라 — 2025판 PDF 함정**: `.../09_Pokermania_XL/turnierplan-pokermania-web.pdf`는 **2025년판**이다
(「30. SEPTEMBER BIS 04. OKTOBER 2025」 · Published 2025-09-01). 날짜가 하루씩 어긋나므로 그쪽으로 되돌리지 마라.

### §1-Q2-a. 회차 Q2-a 판정 — 결재 7 이미지 40건 (2026-09-11)

> 🔴 **본체는 브리프다** — `docs/harden-brief/queue-Q2-이미지.md`. 여기엔 «무엇이 뒤집혔나»만 남긴다(복사 금지).

- 🔴 **「사진 5장」은 «10장»이다.** 「5」는 **게이트 지적 건수**(이미지 5종)였고, 필요한 장수는 «한 이미지를 몇 편이 나눠 쓰는가»로 정해진다 — `holdem-button-dealer-board` 한 종만 **7편**이 쓰므로 그 종만 4자리를 갈아야 한다. 자리별 내역 = 브리프 §3·§4.
- 🔴 **10장 중 8장은 사장님이 뽑을 필요가 없다.** 교체 대상 5종 중 **4종이 «글자가 박힌 인포그래픽»**이고(육안 확인), `CLAUDE.md` §9-1 = 글자 든 인포그래픽은 **이미지 AI 금지 → HTML/CSS + Playwright**. 레포에 `scripts/gen-*.html` **143개** + `render-gen-final.mjs`(q82) 파이프라인이 이미 있다. **사장님 몫은 «글자 없는 실사 2장»뿐**(브리프 §4 ①·⑥에 프롬프트).
- 🔴 **재사용보다 큰 결함 2종을 새로 찾았다**(브리프 §2): ⓐ 두 «벽지» 이미지에 **영어 문장이 박혀 있고**(「The button acts last on every postflop street.」 · 「Texas Hold'em at the Pub」) 그 글자가 붙은 **11자리 중 10자리에서 캡션과 어긋난다** — 그리고 그 영어가 ja·zh·zh-hant·pt·de·es·id 본문에 그대로 실려 있다 ⓑ **F유형**: `holdem-reading-straight-example`은 «완성된 8하이 스트레이트» 그림인데 `outs:65`·`drawing-odds:120`이 그걸 «straight **draw** · 8 아웃츠»라고 캡션한다 → 재사용이 아니라 **사실 불일치**라 두 자리 다 교체 대상이다.
- 🪶 **keeper 배정 원칙**: 이미지 이름·내용이 가리키는 «주인» 글이 남는다. 예외 하나 — 허브 `holdem-strategy`는 본문 이미지 **3장이 전부 남의 것**이었어서 셋 다 갈고, 부채는 작은 클러스터 글(`holdem-limping`)로 옮겨 §8 T2로 드러내 뒀다(숨기지 않는다).
- **예측**: 조치 후 `check:image-reuse --all` 🔴 **40 → 0** · 🟠는 로케일당 4(기존 2 + 신규 2).

**합계(제안)**: Q1 1 · Q2 2 · Q4 2 · Q5 2 · Q6 1~2 · Q7 2 · Q8 2 = **12~13세션**. Fable이 필요한 세션은 **Q4-a · Q5-a · Q5-b 셋뿐**(그것도 B 구간만). 🪶 Q2-b는 «카드·수치가 전부 본문 축어»라 **Fable 불요**로 확정됐다(Q2-a 판정).

**착수점(2026-09-11 헤드 실측 · 레인 신설 시점)**: `check:drift --locale=ja/zh/zh-hant` 🔴 0 · 세 로케일 레인 회차 = zh·zh-hant 트랙 종결 · **ja 회차 13 진행 중**(워크트리 미커밋 13파일 · 브리프 `ja-회차13-개수열거.md`) → Q6·EN 전파에서 ja 13파일은 «머지 뒤». 우편함 미처리(본체 몫) 0. 핸드오프 30,258B(30KB 경계). EN 스탬프 어긋남(창 안) 1 = icm 판정 완료.

### §1-Q2-b. 회차 Q2-b 산출 — 이미지 10장 제작·교체·전파 (2026-09-11)

**🔴 §2-C 썸네일 선례 판정 = «의도 아님, 정정».** `git log -S holdem-button-position-hero -- lib/posts-en/`는
**최초 발행 커밋 4건뿐**이고 「왜 안 바꿨는지」 메시지가 없다. 결정적 근거는 **날짜**다 — 드리프트 3자리는
2026-07-05·07-06 발행 때 붙었는데 올바른 대상(`holdem-position-play-hero` 06-18 · `holdem-positions-hero` 06-13)은
**그때 이미 존재했다.** 「대안이 없어서」가 아니다. → `locale-intentional-diffs` 등재 없이 **24자리 전건 정정**
(22자리 변경 + zh-hant 2자리는 이미 올바름).

**산출 = 이미지 10장**(실사 2 = 사장님 생성분 워터마크 합성 · 인포 8 = `scripts/gen-*.html` → `render-gen-final.mjs` q82).
전부 1200×675 · 12~60KB. **반영 = 80행**(슬롯 10 × 로케일 8) + 썸네일 22행.

🔴 **「사진 5장」이 10장이 된 이유는 Q2-a가 이미 적었다. 이 회차가 새로 안 것은 «언어 중립»의 경계다:**
- **통화 기호는 언어 중립이 아니다.** 스트래들 그림에 `$1/$2/$4/$8`을 박았는데 **de 본문만 €**(48곳)다.
  alt를 €로 고치면 그림과 어긋나고 $로 두면 본문과 어긋난다 → **그림에서 `$`를 뺐다**(`SB 1 / BB 2 / 4` · `4 × 2 = 8`).
  🪶 그릇된 층에서 고치면 딜레마가 남는다 — 값이 로케일마다 다르면 **그림이 값을 말하지 말아야 한다.**
- **분모 없는 배수를 그리지 마라.** `15–20×`는 본문이 「**콜 금액의** 15–20배」인데 그림·alt 8곳이 한정어를 잃어
  「15–20bb 스택」으로 읽혔다 — 그건 **본문이 «누수»라 경고하는 깊이**라 결론이 뒤집힌다(D유형).
  → 본문 축어 **`11.8%`**(분모가 필요 없는 수)로 교체. 수학·딜러 두 렌즈가 독립 재발견했다.
- **등호는 스플릿으로 읽힌다.** 쿨러 패널의 `A A = A A`가 「찹」·「쿼드」로 오독 → **취소선 화살표 + 흐린 `A A`**로.
- **색은 두 축을 겹치지 마라.** SHARK를 초록 강조했더니 캡션의 「누구를 노리나」와 정반대로 안내했다 → 강조 제거,
  ▲▼ 글리프만 남겨 «승패 방향»만 말하게 했다.
- **본문에 없는 약어를 그림이 가르치지 마라.** `IP`는 코퍼스에 65회 있으나 **전부 GTO 솔버 UI 라벨**이고
  `holdem-strategy`엔 7로케일 전부 0회 → 글자를 빼고 좌석 도트 `○ ○ ▸ ●`로.

🔴 **2차 교열이 «1차 반영이 만든 새 결함» 4건을 잡았다 — 이 절차가 값을 한 실증이다:**
- 캡션에서 뺀 숫자가 **alt로 옮겨갔을 뿐**이었다. `lib/render-markdown.ts:200`이 **`alt=`와 `<figcaption>`을 둘 다**
  내보내므로 중복은 그대로였다. → **「중복을 없앴다」고 말하기 전에 렌더러가 무엇을 내보내는지 보라.**
- alt와 캡션이 **같은 3항목을 같은 순서로** 반복(8로케일). → alt는 «그림 묘사», 캡션은 «주장»으로 역할을 갈랐다.
- zh-hant `跟跛`는 코퍼스에 없다(정본은 `跟跛入` 16곳). **새로 쓴 두 자리가 전부였다.**
- 신설 내부링크가 앵커를 약화시켰다(`位置專篇` → `牌桌位置指南`).

🪶 **네이티브 렌즈가 브리프의 가정 하나를 뒤집었다**: es 세 번째 예외는 `buscar trío`가 아니라 **`set-mining`**이다
(같은 글 104행이 예외 3개를 세는데 둘은 축어 일치인데 셋째만 달랐다). `buscar trío`는 es 코퍼스에서 **항상 괄호 주석**이다.
같은 유형으로 zh `开口顺`→`两头顺`(drawing-odds 한정) · zh-hant `中洞`→`卡順`(drawing-odds 한정)을 되돌렸다 —
🔴 **두 용어는 파일마다 정본이 다르다**(zh: outs=开口顺 / drawing-odds=两头顺). 파일을 보고 골라라.
그리고 `4 比 1`은 **zh에선 틀리고 zh-hant에선 맞다**(zh는 `N:N` 116회 / zh-hant는 `N比N` 98회) — **같으면 안 되는 자리**다.

**기각 2건(사유 기록)**
- ⑩ 하단 `31.5% ≈ 2 × 16.5%`를 지우라 — **기각**. `≈`가 근사를 명시하고 본문 자체가 「double / half」라는 같은
  근사를 주장한다. 지우면 그 글의 결론이 그림에서 사라진다.
- ④ 캡션이 FAQ와 6그램 일치 — **기각**. 158줄 떨어진 다른 섹션이고 그 문장은 이 글의 핵심 리트머스다.
  상단·하단 반복은 «중복»이 아니라 «강화»다(5-A/5-C는 2~6줄 거리라 성격이 다르다).

**이관 1건** → zh `holdem-outs`의 `开口顺`(14곳) vs 코퍼스 다수파 `两头顺` = **Q6**(로케일 표기 통일)로.
지금 캡션만 바꾸면 6줄 아래 표와 어긋난다.


### §1-Q4-a. 회차 Q4-a 산출 — EN-먼저 묶음 I (미결 · 동형) (2026-09-12)

> 브리프 = `docs/harden-brief/queue-Q4-a-EN먼저.md`(전건 재판정표 + 1차 출처 축어가 거기 있다 · 여기 복사하지 않는다)
> 모델 = **전 구간 Opus**. 재료를 실측해 보니 EN 쪽이 «짧은 한정어 수정 10자리»로 줄고 나머지가 전부 판정·번역 QA라
> 「문서에 적힌 분담을 작업 성격으로 다시 짜라」(`settled-decisions` §5-A-3)에 따라 Fable 구간을 두지 않았다.

**🔴 이 회차의 첫 산출은 «재료가 낡아 있었다»는 실측이다**
Q4-a의 뼈대였던 **M-089 §4 「EN 동형 30건」을 EN 현행 원문으로 전건 재판정** → **이미 닫힘 27 · 열림 2 · 기각 1**.
Q3 이관분도 3건 중 **2건이 이미 닫혀 있었다**(pt FAQ 개수 드리프트 = `check:structure --only=faq --locale=pt` 핵심 결손 0 ·
`en/holdem-game-order` seoTitle이 이미 「Who Bets First in Texas Hold'em?」 · `updated: 2026-09-11`).
→ **규율 후보(§5 Q4-6)**: 「남은 것 N건」 형태의 미결 행은 **재료를 옮길 때가 아니라 회차 A 구간에서 다시 센다.**

**고친 자리 (EN 11파일 + 9로케일 · 90파일 · +338/−328)**

| # | 자리 | 무엇을 | 전파 |
|---|---|---|---|
| 1 | `holdem-positions` L29 | 「Two orbits later」 → 「Three hands later」(§13급 좌석 산수) | 6(pt 기보유) |
| 2 | `holdem-bad-beat` 본문 | 「That's a player…」에 「Most of the time」 한정 | 6(pt 기보유) |
| 3 | `holdem-bad-beat` 표 4열 | 🔴 **결재 15 이행** — 수치 ~63%(1.7:1) 불변 · 행 문구만 | 7(pt 포함) |
| 4 | `holdem-blind-meaning` | 「Nobody gets to skip their turn.」 단정 해소(X-1) | 9 |
| 5 | `holdem-when-to-fold` 셀프체크 도입문 | D유형 — 블록만 읽으면 「블러프캐처=폴드」 오독(ja §5-K 1) | 7 |
| 6 | `holdem-straddle` 5자리 | 「buys last action postflop」 → 버튼은 원래 갖고 있다(ja §5-L 1) | 7 |
| 7 | `holdem-outs` 표 | 15아웃 행에 도출 「9 + 8 − 2」(ja §5-L 2) **+ 표 순서 15→12→9→8** | 7 |
| 8 | `holdem-tiebreak-rules` | 「Rule 85」 → 「Tournament Rule 85」 | 4(de·id·pt 기보유) |
| 9 | `ept-barcelona-2026-guide` | **J#8 종결** — €330 행 신설 + 예산표 하한·총액 재계산 + 최저가 주장 4자리 정합 | 7 |
| 10 | `rake`·`tournament`·`3bet`·`straddle`·`ept` | 경쟁 페이지 **배타 주장** 제거(완화형 「most guides」류는 유지) | 보유 로케일만 |

**J#8 = 1차 출처로 종결.** 공식 일정(`pokerstarslive.com/ept/barcelona/schedule/`) DOM을 레포 Playwright로 렌더 후
`document.body.innerText` 직독 → **이벤트 행 131건 전수 파싱**(2026-09-12). **#76 · Aug 29 · 12:00 · 「€330 Deep Stack –
Unlimited Re-Entry」 · 스택 50,000** 실재 확인 → 처방 ①(본문에 행) 채택 · 처방 ②(H2·비교표를 €825로) **기각**.
덤으로 일정표 7행 전건 대조 = **전부 일치**(이 글 미결이던 「공식 일정 전수 대조」가 닫혔다).
🔴 **ja가 「미검증 신호」로 남긴 「EPT Mystery Bounty €1,650 Aug 27–28」은 오독이었다** — 공식에는 Mystery Bounty가 **둘**이다:
`EPT Mystery Bounty (€1,000 Mystery Bounty)` **€3,250**(#48 · Aug 25–27 · **우리 표**)와 별개의 `Mystery Bounty (€500)` **€1,650**(#64 · Aug 27–28).
**우리 표가 맞다 — 되돌리지 마라.** §12-B 「요약을 근거로 쓰지 마라」의 실물(요약이 두 이벤트를 합쳤다).

**§13 손검산 — 내 자신의 문안을 하나 뒤집었다**
결재 15 이행 문구를 처음에 「nine flush outs + **live side cards that can pair**」로 썼는데, **990조합 전수열거**로 반증했다:
`QQ vs 5♦3♦ / J♦7♦2♣` = **61.62%**(플러시 34.95% + 스트레이트 1.82% + 투페어 0.91% + 트립스 0.61%) — **페어의 기여가 0**이다.
사이드카드가 진짜 살아 있는 형태(`QQ vs A♦K♦`)는 오버페어가 **45.56%**로 63%와 전혀 다른 자리가 된다.
→ 「plus backdoor two pair or straight」로 고쳤다. 🪶 **M-089 §2-B의 61.62 / 62.53 / 63.43을 소수점까지 독립 재현**했다(결재 15의 근거가 재확인됐다).

**렌즈 4종 + 2차 교열** — 지적 **59** · 반영 **43** · 기각 **6** · 이관 **7** · 기록만 **3**
독립 수렴 4건(딜러·수학 ↔ SEO ↔ 교열이 같은 자리를 잡았다): ① bad-beat 「pair」 문안(내 손검산과 동일 결론)
② blind-meaning 단정형이 같은 글 FAQ 「Alternatively, you can wait…」와 충돌 ③ straddle 각주·**alt**가 옛 프레이밍 잔존
④ 경쟁 배타 주장이 **이번 회차가 손댄 파일 안에** 사본으로 남음.
🔴 **기각 6 중 하나는 렌즈가 틀린 자리다** — SEO 렌즈가 bad-beat를 「overcards」로 고치라 했는데, 오버카드가 살아 있으면
오버페어는 45.6%다(위 전수열거). 딜러·수학 렌즈가 독립적으로 같은 반례(`QQ vs A♠K♠`)를 들어 **렌즈끼리 갈렸고 원문 계산이 갈랐다.**

**🔴 2차 교열이 «반영이 만든 새 모순» 3종을 잡았다**(「수정이 결함 주입 공정이다」 재현):
① **개수 주장** — 경쟁 문구를 지우면서 straddle을 「Here's how the **four** types compare」로 바꿨는데 **표는 5행**(Re-straddle 포함)이고,
   de `rake`는 「**vier** Methoden」인데 de 표만 **5행**(Jackpot Drop)이다. → 둘 다 **개수를 빼는 쪽**으로 철회(7+1로케일).
② 🔴 **새 최상급이 1차 출처에 반증됐다** — €330 충돌을 풀려고 「€825 = 최저가 **복수일**」을 만들었는데,
   공식 일정 파싱본(149행)에 **€550 복수일 이벤트가 셋**(#12 In the Money at 180,000 Aug 17–18 · #63 Women's Aug 27–28 · #72 Aug 28–29) 있다.
   → 최상급을 걷어내고 「2일제 · 상금 실재 · 초심자 필드」라는 **검증 가능한 서술**로 교체(8로케일).
   🪶 반면 **「€330 = 단독 이벤트 최저가」는 참**이다 — 그 아래는 새틀라이트(#2 €190 · #68 €175)와 €0 사교 행사(요가·퀴즈·카라오케)뿐이다.
③ **EN만 고치고 5로케일이 갈렸다** — `ept`의 「경쟁사가 안 알려준다」가 de·es·id·ja·zh-hant에 그대로 남아 있었다(pt·zh는 원래 깨끗).

**🔴 스탬프 4건이 거짓 주장이었다** — §3 「스탬프 정직성」으로 승격. 되돌린 뒤 `check:drift` 🔴가 **5 → 6**(정직한 ar 부채)으로,
🟠 추적불가가 **7 → 9**로 돌아왔다. **숫자가 나빠 보이는 쪽이 참이다.**

**게이트** — `audit:hard` 10로케일 전부 🔴 0 · `check:drift` 🔴 6(**전부 ar 기존 부채** · 이 회차가 만든 드리프트 **0** · 🟠 추적불가 9) ·
`check:structure` 핵심 결손 0 · `check:meta` 0 · `check:cjk` 0 · `check:hangul` 0 · `check:seo-sync` 0 ·
`check:answer-echo` 🔴 echo 0(ja·zh·zh-hant·ko) · 자체 기계 점검(백틱·`==`짝·표 열 수) 90/90파일 0건 · `npm run build` 성공(70 + 525).


## 2. 미결 (해결될 때까지 유지)

- 🟠 **`lib/render-markdown.ts:200`이 모든 이미지에 `width="1200" height="630"`을 박는다 — 실제는 1200×675**(종횡비 예약이 7% 어긋나 CLS). 591장 **전체**에 걸린 기존 문제이고 어떤 게이트도 안 본다. → **Q7 게이트/정정 후보**(2차 교열 렌즈 발견 · 2026-09-11).
- 🟠 **`check:drift` 🔴 6건(ar)은 회차들 이전부터 있던 부채다** — 2026-09-12 실측 = all-in-rules · betting-actions · **blind-meaning** · game-order · showdown-rules · texas-holdem-rules-for-beginners. **Q4-a가 만든 드리프트 0**(ar blind-meaning은 Q4-a가 X-1 한 문장을 이식했지만 **EN 09-11 델타 전체를 대조하지는 않았으므로** `masterUpdated`를 올리지 않았다 — §3 「스탬프 정직성」 참조).
- 🟠 **`check:answer-echo` 🟠 length가 zh 33 · zh-hant 10 · es/en 다수** — Q4-a 착수 전부터 있던 부채다(예: zh `holdem-blind-meaning` 직답 152자 ↔ 규격 60~130). 🔴 echo는 전 로케일 **0**. → **Q7-b**(셈의 단위 · 개수 신호)와 한 판.
- 🟠 **`check:structure` 🟠 꼬리 39편** — 꼬리 17로케일 몫. 핵심 8로케일은 **0편**이다.
- 🟠 결재 5(EN 제목 보강 3편)는 **보류** — GSC 실측 먼저. 회차에 넣지 마라.

## 3. 되돌리지 마라

- `settled-decisions` §1-B 전건(결재 15 · 재론 금지). 특히 **15** bad-beat ≈63%(65.0%/1.86:1로 되돌리지 마라) · **11** KPM 「9/4 마감」 중립화 · **2-ⓑ** 문장 다듬기 안 함.
- `en-first-queue` §1 **②** apt «개막 전 마감» — EN이 틀렸다(3자리). EN을 따라 로케일을 되돌리지 마라.
- EN `updated`는 구두점·별표·태그만 바뀐 커밋이면 올리지 않는다(`en/holdem-icm` 실증 · §1-C). Q3 실측이 이 규율의 두 번째 실증이다(창 밖 5건 전부 기계적 변경).
- **Q2-b 이미지 10장의 설계 판정**(§1-Q2-b): 스트래들 그림에 **통화 기호를 되살리지 마라**(de만 €라 공용 이미지가 값을 말하면 안 된다) ·
  `15–20×`를 이미지에 **되살리지 마라**(분모 없이는 「15–20bb」로 읽혀 본문 결론을 뒤집는다 — `11.8%`가 그 자리의 답이다) ·
  쿨러 패널에 **등호를 쓰지 마라**(스플릿으로 읽힌다) · SHARK에 **초록 강조를 되살리지 마라**(캡션의 target/avoid와 반대다).
- **alt와 캡션은 역할이 다르다**: alt = «그림에 무엇이 보이나» · 캡션 = «그 그림이 무엇을 주장하나».
  🔴 둘 다 HTML로 나간다(`render-markdown.ts:200`이 `alt=`와 `<figcaption>`을 함께 내보낸다) — **한쪽에서 뺀 문장을 다른 쪽에 옮기면 중복은 그대로다.**
- **로케일 용어는 파일마다 정본이 다르다**: zh `holdem-outs`=`开口顺` / `holdem-drawing-odds`=`两头顺` ·
  zh-hant `holdem-outs`=`中洞` / `holdem-drawing-odds`=`卡順` · **`4:1`은 zh, `4 比 1`은 zh-hant.** 코퍼스 전체가 아니라 **그 파일**을 보고 골라라.
- es 세 번째 예외는 **`set-mining`**이다(`buscar trío` 아님 — 그건 항상 괄호 주석이다). 되돌리지 마라.

- **Q4-a 판정 6건**(§1-Q4-a): `bad-beat` **~63% (1.7:1)** 수치는 결재 15로 고정 — **~62%로도 65.0%/1.86:1로도 되돌리지 마라** ·
  그 행 문구를 **「overcards」로 바꾸지 마라**(오버카드가 살아 있으면 오버페어는 **45.6%**다 · 990조합 전수열거 · 63%를 만드는 건 백도어다) ·
  EPT **Mystery Bounty €3,250 Aug 25–27**(공식 #48)을 **€1,650으로 내리지 마라**(€1,650은 별개 이벤트 #64 · 요약이 둘을 합친 오독이었다) ·
  `straddle` **각주 「only … when it is posted on the button」**과 **「the button keeps last action all the way down」**은 일부러 그 문면이다 ·
  zh·zh-hant `straddle` **「最后一句话 / 最後一句話」**은 그 파일의 기존 정본이다(직역투로 보고 바꾸지 마라) ·
  「**most guides / almost every article**」류 **완화형은 남긴다** — 지운 것은 「no other page / no single competitor / competitors don't tell you」 같은 **검증 불가 배타 주장**뿐이다.
- **`holdem-outs` 표 정렬은 15 → 12 → 9 → 8이다**(내림차순). 본문이 「the two combo draws **at the top**」이라 적기 때문이다 —
  9·8을 위로 올리지 마라. 🪶 바로 아래 «Outs to Odds» 변환표는 **오름차순(2→15)이 정상**이다(다른 표다).

- 🔴 **스탬프 정직성 — `masterUpdated`는 «전파한 날»이 아니라 «EN 어느 판을 전건 대조했나»다**(Q4-a 2차 교열 발견 · 2026-09-12).
  Q4-a가 한 문장만 이식한 `ar`·`fr`의 `holdem-blind-meaning`에 `masterUpdated: 2026-09-12`를 찍었다가 **되돌렸다**(ar 09-09 · fr 2026-07-11 복원).
  올렸다면 **그 두 파일은 `check:drift`를 영구히 ✅로 통과**한다 — EN이 07-11~09-11에 쌓은 델타를 아무도 다시 안 본다.
  같은 이유로 `de`·`id` `ept-barcelona`에 **신설했던 `masterUpdated`를 지웠다**(원래 «추적불가»였던 것이 정직한 상태다 · 🟠 추적불가 7 → **9로 되돌림**).
  🪶 **판정식**: «편집 전 `masterUpdated` ≥ 편집 전 EN `updated`»이면 그 사이 EN 델타가 내 편집뿐이므로 올려도 정직하다. Q4-a 79파일 중 **75가 정직 · 4가 거짓**이었다.
  🔴 **`updated`는 올린다** — 내용이 실제로 바뀌었으므로(`settled-decisions` §1-C). **두 필드는 같이 움직이지 않는다.**

## 4. 거울쌍 갈림

해당 없음(로케일 레인이 아니다). zh↔zh-hant 갈림은 Q6에서 **직접 판정**한다(`check:mirror-pair`).

## 5. 헤드 요청 (헤드가 처리하면 ✅)

> 회차마다 여기에 쌓는다: ① MB 통지 초안(EN 변경 슬러그·자리·되돌리지 마라·앵커 갱신) ② ja·zh·zh-hant 파일 목록(§6-0 통지용) ③ `locale-intentional-diffs`·`settled-decisions` 승격 ④ 정본(en-first-queue·핸드오프)에서 지울 항목.

- 🟠 **Q1-1 사장님 확인 2건**(둘 다 한 줄짜리라 되돌리기 쉽다 — 결재는 났는데 «어느 쪽»이 안 적혀 있었다):
  ① **es 국기 🇲🇽**(대안 🌎 — LATAM은 pt의 브라질처럼 대표 1개국이 자명하지 않다)
  ② **CAPT `buyin` 규약 = «범위»**로 읽고 제펠트를 `€550~€1,100`으로 넓혔다. 반대 읽기(「전부 단일값(메인)」)면
     그라츠를 `€60~€550` → `€550`으로 **좁혀야** 하고, 그때는 M-102 §6의 라이브 앵커 「€60~€550」이 무효가 된다.
- 🔴 **Q1-2 검수장 통지 — 회귀 앵커 재조준**: M-102 §6이 `/tournaments`의 **0-감시 문자열로 「€30+6」**을 걸어 뒀는데
  (그라츠 구값), 신설된 **벨덴 메가새틀이 진짜 €30+6**이라 배포 후 그 앵커는 더는 0이 아니다.
  → 앵커를 **「capt-graz 카드 안의 €30+6」으로 좁혀** 달라. 「€36~€550」 0-감시와 「€60~€550」 ✅는 그대로 유효하다.
- 🔴 **Q1-3 MB 초안**(EN 변경 = MA-123 요청 1 상시 통지):
  > EN `holdem-starting-hands-chart` 1편 변경(+ 7로케일 전파). ① 포지션 표 바로 아래 **신규 문단 1개** —
  > 「퍼센트는 1,326 콤보 대비 · 표 옆 핸드는 core(58콤보)이지 레인지 전부가 아니다」 ② 본문 「a few offsuit hands
  > like AQo」 → 「AQo and AJo」. **표·tldr·6-max·세션평균의 수치는 무변경**(~13% / ~17% / ~27% / ~43% 그대로).
  > 🔴 되돌리지 마라: 「UTG 13%」를 핸드 목록에 맞춰 내리는 방향은 **결재 1로 기각**됐다(콤보 실측 58 / 112 / 172).
  > 앵커 갱신: EN·8로케일에 「1,326」·「58」 신규 등장.
- 🟠 **Q1-4 정본에서 지워 달라**(닫혔다): `session-handoff.md` 「결재 완료」 표의 **결재 1 행**·**결재 6·소품 행** ·
  `docs/en-first-queue.md` §1 **㉗**(shc UTG 13% 3중 충돌) · `docs/settled-decisions.md` §1-B의 결재 **1**·**6**·**소품**은
  «재론 금지»로 남기되 「실행 완료(Q1)」 표기. `docs/reply-to-review-2026-09-04-m089.md` §2-C의 A안 대기 3건도 해제.
- 🟠 **Q1-5 `locale-intentional-diffs` 등재 요청 없음** — 이번 회차가 만든 «일부러 다른» 자리는 0이다.
- 🪶 **Q1-6 다른 레인 파일 안 만짐** — ja·zh·zh-hant 워크트리 전부 clean(실측), `posts-ja/zh/zh-hant`의
  `holdem-starting-hands-chart` 1편씩만 만졌다. 🔴 **ja 회차 13(`5708d2a8`·harden-ja)이 같은 파일을 만졌다** —
  다만 자리가 다르다(회차 13 = L50 「10選」 직답 블록 / queue = 포지션 표 아래). 머지 순서에 따라 충돌 가능.
- 🟠 **Q1-10 NOTE_* 오스트리아 6행 — EN만 채웠다.** `lib/tournaments-i18n.ts`의 `NOTE_JA·ZH·HANT·ES·DE`에도
  같은 6행이 필요하다(로케일별 재저작이라 이 회차에서 안 했다). 🔴 그전까지 **비KO 보드는 오스트리아 대회의 note를
  아예 안 그려** 「€36~€230」 같은 범위형 바이인이 해설 없이 뜬다 — 하한이 새틀라이트 가격이라 오도한다.
- 🟠 **Q1-11 EN-먼저 신규 2건**(`docs/en-first-queue.md` §1에 등재 요청):
  ① EN `holdem-starting-hands-chart:126` 「77·88이 테이블이 셀 때 **가장 먼저** 떨어지는 페어」 — 실전 순서가 뒤집혔다
     (셋마이닝 플랜이 있는 77·88보다 **지배당하는 오프수트·얇은 수딧 브로드웨이**가 먼저 나간다). 8로케일 동형.
  ② `lib/render-markdown.ts:213,215` PDF 카드 크롬 영어 하드코딩 — `locale` 인자가 이미 있는데 안 쓴다. 전 로케일 노출.
- 🪶 **Q1-12 이번 회차가 «덤으로» 닫은 것 3건**(정본에서 지워도 된다): M-082 제펠트·브레겐츠 판정의 **de 포스트 미이행**
  (8일째 살아 있던 F유형 2건) · ja·zh 글의 «영어 PDF 링크» · zh-hant `holdem-starting-hands-chart` 6.5%↔6.4% 자기모순.
- 🟠 **Q1-8 정본 한 줄 삽입 요청**(핸드오프 「결재 완료」 표의 🪶 행 — 이번 회차가 처리할 자리가 없었다):
  `docs/hardening-protocol.md` 브리프 규격에 **「전파 서브에게는 «파일 상단 주석의 동결 지시를 먼저 읽어라»를
  브리프에 넣는다」** 한 줄. 프로토콜은 두 레인이 같이 읽는 정본이라 레인이 직접 안 고치고 요청으로 올린다.
- 🪶 **Q1-9 생성 문서 재생성**: `app/home-client.tsx` 삭제로 `docs/color-token-debt.md`의 63건 행이 유령이 됐다.
  그 문서는 `scripts/scan-color-debt.mjs` 산출물이라 **손으로 고치지 말고** 헤드가 머지 뒤 한 번 돌리면 된다.
- 🪶 **Q1-7 게이트 후보 2건**(Q7로): ① `.page` 치수 ↔ `@page size` 불일치 검사(이번에 de가 6mm 잘려 있었다 —
  **PDF는 어떤 게이트도 안 보는 자리**다) ② `/hand-chart` 도구의 「UTG 약 12%」는 **핸드 «타입» 비율**(21/169)인데
  블로그의 13%는 **콤보 비율**이다. 같은 화면에 두 기준이 섞여 있다 — 도구 라벨은 이번 회차 범위 밖이라 안 건드렸다.
- ✅ (신설 시점 · 헤드 자체 처리) `en-first-queue` §3 첫 불릿 「EN 56편 `updated` 전수 대조」 = 종결 표시(실측 근거 위 Q3 행).

### Q2-a (2026-09-11 · 이 회차는 **판정만** — 글·이미지 파일은 한 자도 안 고쳤다)

- 🟠 **Q2-1 사장님 판단 2건 — Q2-b 착수 전에 필요하다**:
  ① **실사 2장을 뽑아 주셔야 한다**(글자 없는 사진 · 프롬프트는 브리프 §4 ①·⑥에 그대로 있다):
     `holdem-strategy-button-seat.webp`(버튼에 앉은 플레이어 · 어깨 너머) · `holdem-cooler-stacks-collide.webp`(두 스택이 가운데서 부딪히는 순간).
     🪶 나머지 **8장은 레인이 HTML+Playwright로 직접 렌더**한다 — 기다릴 필요 없다.
  ② **언어 중립 1장 vs 로케일별 9장**: 새 인포 8장의 라벨을 «숫자·기호 + 라틴 포커 용어»로만 짜면 9개 언어가 한 장을
     공유할 수 있다(기본안). 완전 현지화를 원하시면 GTO 시리즈 방식으로 **8 × 9 = 72장**이 된다. 브리프 §5.
- 🟠 **Q2-2 T2 3자리 판단**(브리프 §8): `limping:64`·`limping:116`·`drawing-odds:58` — 🔴는 아니지만 **이미지에 박힌 영어가 캡션과 무관**하다.
  Q2-b에 얹으면 +3장·+24행. 얹을지 별도 회차로 뺄지.
- 🔴 **Q2-3 MB 초안**(EN 변경 예고 · MA-123 요청 1 · **발신은 Q2-b 커밋 뒤**):
  > EN 이미지 10자리 교체 예정(+ 8로케일 전파). 글 7편 — `holdem-strategy`(3자리) · `holdem-bad-beat`(2) ·
  > `holdem-cooler`·`holdem-straddle`·`holdem-glossary`·`holdem-outs`·`holdem-drawing-odds`(각 1).
  > **본문 문장은 안 바뀐다** — 바뀌는 것은 이미지 경로·alt와 **캡션 2자리**(`outs:65`·`drawing-odds:120` —
  > 지금 캡션이 «완성된 스트레이트» 그림을 «straight draw»라고 부른다 = F유형 정정).
  > 🔴 되돌리지 마라: `reading-the-board:114`는 **그 자리만 이미지와 캡션이 맞다** — 건드리지 않는다.
  > 앵커 갱신: 새 파일명 10개가 EN·8로케일에 등장한다.
- 🟠 **Q2-4 `locale-intentional-diffs` 판정 요청 1건** — **썸네일 드리프트 3가족 × 8로케일**(브리프 §2-C):
  `glossary:112`·`limping` readnext·`strategy:62`가 링크 대상(`holdem-positions` / `holdem-position-play`)의 히어로가 아니라
  `holdem-button-position-hero.webp`를 가리킨다. 대조군은 **7 대 1**로 «대상 글 히어로»다.
  🔴 Q2-b 첫 작업이 `git log -S holdem-button-position-hero`로 **선례 파기**다 — 의도적이면 등재, 아니면 24자리 정정.
- 🔴 **Q2-5 ja 레인 §6-0 통지 대상(예고)**: Q2-b가 ja 3편(`holdem-glossary`·`holdem-outs`·`holdem-straddle`)을
  **건너뛴다**(ja 회차 14가 미커밋 중). 회차 14 머지 뒤 이 3편만 따로 전파해야 한다 — 헤드가 머지 순서를 잡을 때 기억해 달라.
- 🪶 **Q2-6 이번 회차는 다른 레인 파일·공용 파일을 하나도 안 만졌다.** 만진 것 = `docs/harden-brief/queue-Q2-이미지.md`(신규) ·
  이 진행 파일. 🔴 EN·로케일 포스트와 `public/images/`는 **무변경**이라 `check:drift`·`check:image-reuse` 수치도 그대로다.
- 🪶 **Q2-7 정본에서 지워도 되는 것 없음** — 핸드오프 「이미지·워터마크」 절은 Q2-b가 닫는다. 단 그 절의
  「🟠 `check:image-reuse` 🟠 7건 «교차 클러스터» 판정 대기」는 **KO 수치**이고 이번 판정 대상(EN 뿌리)과 다른 층이다 — 섞지 말 것.

### Q2-b (2026-09-11 · 이미지 10장 제작·교체·전파 — **배포가 걸린 회차다**)

- 🔴 **Q2b-1 MB 발신**(Q2-a의 Q2-3 초안을 **실측으로 갱신** — 그 초안은 「본문 문장은 안 바뀐다」라고 적었으나 **바뀌었다**):
  > EN 이미지 **10자리 교체 + 썸네일 3자리 재조준**(+7로케일 전파 = 총 80 + 22행). 글 7편 —
  > `holdem-strategy`(3) · `holdem-bad-beat`(2) · `holdem-cooler`·`holdem-straddle`·`holdem-glossary`·`holdem-outs`·`holdem-drawing-odds`(각 1) + `holdem-limping`(썸네일만).
  > **새 파일명 10개**가 EN·8로케일에 등장한다 — 앵커 갱신 필요: `holdem-strategy-button-seat` ·
  > `holdem-strategy-raise-or-fold` · `holdem-strategy-fold-ace-high` · `holdem-bad-beat-litmus` ·
  > `holdem-bad-beat-aces-vs-set` · `holdem-cooler-stacks-collide` · `holdem-straddle-action-order` ·
  > `holdem-glossary-player-types` · `holdem-outs-nine-and-eight` · `holdem-drawing-odds-oesd-vs-gutshot`.
  > **캡션 4자리 교체**(예고는 2자리였다): `outs`·`drawing-odds`(F유형 정정 — 「완성된 스트레이트」를 「draw」라 불렀다) +
  > `strategy:93`·`bad-beat:46`(새 그림에 맞춰). **본문 문장 2곳도 바뀌었다** — `ja/holdem-drawing-odds`의
  > `ちょうど半分`→`およそ半分`(16.5/31.5 = 52.4%라 「정확히」가 거짓) · `zh-hant/holdem-glossary:122`에 **내부링크 신설**.
  > 🔴 되돌리지 마라: §3의 Q2-b 항목 전건.
- 🟠 **Q2b-2 `locale-intentional-diffs` 등재 요청 1건**: `zh-hant/holdem-glossary`가 이제 `holdem-positions`를
  **본문 + FAQ 두 곳**에서 가리킨다(다른 7로케일은 본문 1곳). 원인 = zh-hant만 본문 링크가 결손이고 FAQ로 대신하고 있었다.
  본문 쪽을 신설해 EN 자리 패리티를 맞췄고 FAQ 링크는 그 답변의 기능이라 남겼다 → **의도적 편차로 등재**해 다음 회차가 또 집지 않게 해 달라.
  🪶 `check:structure`는 «슬러그 집합» 기준이라 1 vs 2를 **원리상 못 본다**.
- 🟠 **Q2b-3 `settled-decisions` 한 줄 승격 요청**: 「**공용 이미지는 값을 말하지 않는다**」 —
  통화 기호·로케일마다 다른 수치는 그림에 박지 말고 캡션·본문에 맡긴다. 단 **`$ $ $`처럼 «액수»가 아니라
  «돈이 많다»는 픽토그램은 예외**(`holdem-glossary-player-types` WHALE 타일). 이 구분을 안 박으면 다음 회차가 또 집는다.
- 🟠 **Q2b-4 Q6 재료 2건**(로케일 표기 통일 묶음): ① zh `holdem-outs`의 `开口顺` 14곳 ↔ 코퍼스 다수파 `两头顺`
  ② zh-hant `holdem-outs`의 `中洞` 6곳 ↔ 코퍼스 `卡順`. 둘 다 **파일 안에서는 일관**하므로 캡션만 바꾸면 안 된다.
- 🟠 **Q2b-5 Q7 재료 1건**: `lib/render-markdown.ts:200`의 `height="630"` ↔ 실제 675 (§2 미결 참조).
- 🟠 **Q2b-6 Q8 재료 1건**: `lib/posts-ja/holdem-glossary.ts:89` 표제어가 `ミニマムレイズ`인데 본문은 전부 `最低レイズ`다
  (용어사전 표제어라 오류는 아니다 — `ミニマムレイズ（最低レイズ）` 병기가 낫다).
- 🪶 **Q2b-7 다른 레인 파일**: ja·zh·zh-hant 워크트리 **전부 clean**(실측) · 미머지 커밋 0 → **겹침 없음**.
  단 `lib/posts-ja/`·`posts-zh/`·`posts-zh-hant/`의 8슬러그를 만졌으므로 **머지 때 각 레인 `HARDEN.md`에 §6-0 통지**가 필요하다.
  🔴 Q2-a가 예고한 「ja 3편 건너뜀」은 **실행되지 않았다** — ja 회차 14가 이미 머지돼 워크트리가 비어 있었다(착수 시 재실측). 전파 완료.
- 🪶 **Q2b-8 정본에서 지워 달라**: 핸드오프 「이미지·워터마크」 절의 **결재 7 행**(40건 = 8로케일 × 5건) — 🔴 **0으로 닫혔다**.
  `settled-decisions` §1-B 결재 7은 「실행 완료(Q2-b)」 표기. Q2-a의 §5 항목 Q2-1·Q2-3·Q2-4·Q2-5도 전부 닫혔다.
- 🟠 **Q2b-9 Q2-c는 아직 열려 있다**(T2 3자리 — `limping:64`·`limping:116`·`drawing-odds:58`). 이 회차는 손대지 않았다.

### Q4-a (2026-09-12 · EN 11파일 + 9로케일 · **배포가 걸린 회차다**)


> 🔵 **헤드 처리 (2026-09-12 (20) · 머지 `5d8f1be0` · sitemap `149b35b6` · 라이브 앵커 4종 실측 OK · IndexNow 85 URL 200)** — **Q4-1 = MB-044 발신** ✅ · **Q4-2 = 정본 4곳 정리** ✅(`en-first-queue` J#8·X-1 종결 + §3 세 항목 종결 · `session-handoff` 「EN 동형 30건」·「tiebreak L232」 행 삭제 · `harden-ja-진행` §5-K·§5-L에 이행 완료 표기) · **Q4-3 = ja·zh·zh-hant 세 레인에 §6-0 통지** ✅(`lane:sync -- --apply`와 함께) · **Q4-7 = `en-first-queue` §1에 ㊻㊼로 등재** ✅ · **Q4-8 게이트 후보 2건은 Q7 재료로 남는다**(표 정렬 방향 ↔ 본문 서술 · 같은 글 안 최상급·최저가 주장 2개 이상) · **Q4-9·Q4-10 확인**(기각 6건은 재제안 금지).

- 🔴 **Q4-1 MB 초안**(EN 변경 = MA-123 요청 1 상시 통지):
  > EN **11편** 변경 + 9로케일 전파. ① `holdem-positions` 도입 경험담 「Two orbits later」 → **「Three hands later」**(좌석 산수 — UTG는 버튼+3석이라 3핸드 뒤 버튼이다 · 2오빗이면 다시 UTG) ② `holdem-bad-beat` 표 행 문구 = **결재 15 이행**(🔴 수치 **~63% (1.7:1)은 불변** · 「9-out flush draw fills」 → 「nine flush outs, plus backdoor two pair or straight, get there by the river」) + 본문에 「Most of the time」 한정 ③ `holdem-blind-meaning` 「Nobody gets to skip their turn.」 → **either/or**(WSOP Live-Action **Rule 160** 축어 · 같은 글 FAQ 「Alternatively, you can wait…」와 정합) ④ `holdem-when-to-fold` 셀프체크 도입문(D유형) ⑤ `holdem-straddle` **5자리**(캡션·**alt**·각주·본문 불릿·FAQ) — 버튼 스트라들이 포스트플롭 포지션을 «사는» 게 아니라 «원래 갖고 있다» ⑥ `holdem-outs` 15아웃 도출 「9 + 8 − 2」 + **표 순서 15→12→9→8**(본문 「the two combo draws at the top」과 맞췄다 · de가 이미 옳던 배치) ⑦ `holdem-tiebreak-rules` 「Rule 85」 → 「**Tournament** Rule 85」 ⑧ `ept-barcelona-2026-guide` **€330 Deep Stack (#76 · Aug 29) 행 신설** + 예산표 하한 €825→€330 · 총액 **€7,280–€11,550**(ja는 항공권 제외판 €7,130) + 최저가 주장 4자리 정합 ⑨ `rake`·`tournament`·`3bet`·`straddle`·`ept`에서 **경쟁 페이지 배타 주장** 제거.
  > 🔴 **되돌리지 마라**: bad-beat **~63%(1.7:1)**(결재 15) · EPT **Mystery Bounty €3,250 Aug 25–27**(공식 #48 — €1,650은 별개 이벤트 #64다) · straddle **L85 각주·「the button keeps last action」**은 일부러 그 문면을 쓴다 · 「most guides / almost every article」류 **완화형은 유지**가 판정이다.
  > 앵커 갱신: EN·로케일에 **「€330 Deep Stack」·「#76」·「Tournament Rule 85」·「backdoor two pair」** 신규 등장. **「€825」 최저가 주장은 이제 전부 「multi-day」 한정**이다.

- 🟠 **Q4-2 정본에서 지워 달라**(닫혔다):
  ① `docs/en-first-queue.md` **§2-D J#8**(€330 = 공식 #76로 실재 확인 · 처방 ① 이행) · **§2-E X-1**(blind-meaning)
  ② `docs/en-first-queue.md` **§3**의 「EN 경쟁 페이지 언급 3곳」 · 「EN↔pt FAQ 개수 드리프트(bubble·short-stack·tournament·icm)」 **= 실측 0** · 「en `holdem-game-order`가 「who bets first」를 못 받는다」 **= 낡았다**(seoTitle이 이미 그 축이고 `updated: 2026-09-11`)
  ③ `session-handoff.md` 「대회·사실 판정」의 **「🔴 EN 동형 30건(M-089 §4)」 행** — 전건 재판정 결과 **이미 닫힘 27 · 이번 회차 처리 2 · 기각 1로 종결**. 같은 절의 **「EN `holdem-tiebreak-rules` L232 룰북 한정어」 행**도 종결
  ④ `docs/harden-ja-진행.md` **§5-K 1**(when-to-fold) · **§5-L 1·2**(straddle · outs) — queue가 이행 완료(K3 = J#8과 함께 닫힘 · K4는 «결함 아님»으로 이미 종결)

- 🔴 **Q4-3 ja·zh·zh-hant 파일을 만졌다**(§6-0 통지용 목록 · 착수 시 세 워크트리 전부 clean 실측):
  `lib/posts-ja/` = `holdem-positions` · `holdem-bad-beat` · `holdem-blind-meaning` · `holdem-when-to-fold` · `holdem-straddle` · `holdem-outs` · `holdem-tiebreak-rules` · `holdem-tournament` · `holdem-3bet` · `ept-barcelona-2026-guide` (10편)
  `lib/posts-zh/` = 위와 같은 10편 · `lib/posts-zh-hant/` = `holdem-3bet`·`holdem-tournament`을 뺀 **8편** + `holdem-rake`
  🪶 ja `holdem-outs`는 **본문 무변경**(도출은 이미 있었다) — 표 행 순서만 옮겼고 `masterUpdated`만 올렸다.

- 🟠 **Q4-4 `settled-decisions` 표기 요청**: **결재 15 = 「실행 완료(Q4-a)」**(≈63% 유지는 재론 금지로 그대로 두고 «행 문구» 부분만 이행 표시).

- 🟠 **Q4-5 `locale-intentional-diffs` 등재 요청 없음** — 이번 회차가 만든 «일부러 다른» 자리는 0이다.
  🪶 단 **실측으로 드러난 «잉여» 1건**: `pt/holdem-tournament` FAQ가 **10문 ↔ EN 9문**이다(결손이 아니라 하나 더 갖고 있어 `check:structure`가 원리상 못 본다). 의도인지 판정해 등재하거나 지워 달라.

- 🟠 **Q4-6 프로토콜 한 줄 삽입 요청**(두 레인이 같이 읽는 정본이라 레인이 직접 안 고친다):
  `docs/hardening-protocol.md` §3 A 준비에 — **「「남은 것 N건」 형태의 미결 행은 재료를 옮길 때가 아니라 그 회차 A 구간에서 다시 센다. 회차 표에 적힌 재료 수는 «가설»이다.」**
  근거 = 이번 회차 실측(M-089 §4 30건 중 **27건이 이미 닫혀 있었다** · 그 행이 낡은 채 여러 회차를 넘어왔다). 프로토콜 ③-0 「브리프의 전제도 실측하라」의 **재료 층 버전**이다.
  ② 같은 §5-⑦(스탬프)에 — **「`masterUpdated`는 «EN 어느 판을 전건 대조했나»다. 한 문장만 이식했으면 올리지 마라 — 올리는 순간 그 파일은 `check:drift`를 영구히 ✅로 통과한다. 판정식 = «편집 전 masterUpdated ≥ 편집 전 EN updated»일 때만 올린다. `updated`는 내용이 바뀌었으면 올린다(두 필드는 같이 움직이지 않는다).」**
  근거 = Q4-a 79파일 실측(**정직 75 · 거짓 4**) · 2차 교열 발견 · 상세는 §3 「스탬프 정직성」.

- 🟠 **Q4-7 EN-먼저 신규 등재 2건**(`docs/en-first-queue.md` §1):
  ① 🔴 **`holdem-tiebreak-rules` 「The only suit order in the tournament rulebook belongs to stud and razz」는 틀렸다** — 같은 룰북 **용어집 `DEALER BUTTON`** 축어: *"At the start of a new game each Participant will receive a card; **the highest card by rank and suit** to determine the initial position of the Dealer Button."* 스터드·라즈가 아닌 자리에서 무늬 서열을 쓴다. 같은 문단이 바로 앞에서 그 드로를 설명하고 있어 **자기모순**이기도 하다. 이번 회차 범위 밖(①원본 유래)이라 손대지 않았다 · 8로케일 동형.
  ② 🟠 `holdem-when-to-fold` — 「bluff-catcher」가 본문 3회뿐이고 **H2·FAQ·tags 어디에도 없다**. 같은 글 L153에 **1.5x 오버벳 37.5%** 계산이 이미 있어 FAQ 1문 흡수 비용이 0에 가깝다(저볼륨 롱테일 집합전략).

- 🟠 **Q4-8 Q7 게이트 후보 2건**:
  ① **「표의 정렬 방향이 본문 서술과 어긋나는가」** — `holdem-outs`가 「the two combo draws **at the top**」이라 적고 표는 15→9→8→**12**였다(de만 옳았다). 8로케일이 같은 자리에서 갈렸는데 **어떤 게이트도 안 봤다.**
  ② **「같은 글 안 최상급·최저가 주장이 둘 이상인가」** — EPT에 €330 행을 넣자 「cheapest」 주장이 표·팁·FAQ·예산표 **4자리**에서 갈렸다. 값이 든 최상급은 기계로 셀 수 있다.

- 🪶 **Q4-9 이번 회차가 «덤으로» 닫은 것 3건**(정본에서 지워도 된다): EPT 일정표 **7행 공식 전수 대조**(이 글 검수 미결) ·
  ja가 남긴 「Mystery Bounty €1,650」 미검증 신호(= 오독으로 종결) · `de`·`id` `ept-barcelona`의 **`masterUpdated` 부재**(신설해 «추적불가»를 9 → 7로 줄였다).

- 🪶 **Q4-10 기각 기록**(다음 회차가 다시 제안하지 않게):
  ① bad-beat를 「overcards」로 — **기각**(오버카드가 살아 있으면 오버페어는 45.6%다 · 전수열거) ② `ept` 「Budget Scenario: PokerStars Cup (€825)」 제목 개명 — **기각**(그 절은 «여행 플랜» 셋 중 최저가이고 €330은 하루짜리 단일 이벤트다) ③ zh·zh-hant straddle 「最后一句话/最後一句話」 — **기각**(그 파일의 기존 정본이다 · 5회·1회 선례) ④ `zh-hant` blind-meaning 편집을 직답 → 본문으로 이동 — **기각**(단정이 있던 자리가 직답이다) ⑤ 「most guides / almost every article」류 완화형 제거 — **기각**(차별점 서술 · E-E-A-T 목소리) ⑥ EPT 「PokerStars Cup」 → 공식명 「PokerStars **Open** Cup」 개명 — **범위 밖으로 보류**(공식 일정 DOM에서 확인은 했다 · EN 4자리 + 8로케일).

## 6. 자산 축적 체크 (매 회차 마감 3종)

① 키워드뱅크 — 해당 회차만 ② 편차 판정 → §5 ③ 판정 정본 승격 → §5

**Q4-a**: ① 키워드뱅크 — **해당 없음**(정합·사실 정정 회차 · 키워드 축을 안 건드렸다) ② 편차 판정 → §5 **Q4-5**(pt tournament FAQ 잉여 1건) ③ 판정 정본 승격 → §5 **Q4-4**(결재 15 이행 표기) · **Q4-6**(프로토콜 §3 한 줄) · **Q4-7**(EN-먼저 2건)
