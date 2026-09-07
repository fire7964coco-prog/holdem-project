# 📤 본체 발신함 (out-본체) — 제안 B 산물

> **신설 2026-09-06** — 사장님 결재(M-109 제안 B). 정본 규율 = `docs/mailbox-protocol.md` §2-A·§2-C.
>
> 🟢 **가동 중(2026-09-07 확인)** — 전환 신호 = 검수장 커밋 `e1fb878`(CHANNELS에 `MB`·`out-본체.md` 절대경로 등재 · MA-116/117 발신). 본체 발신은 **여기에만** `MB-###`로 쓴다. `MAILBOX.md`엔 더 쓰지 않는다(M-114가 마지막 본체 행).

## 왜 이 파일이 여기 있나

`MAILBOX.md` 하나에 셋이 쓰다 보니 **본체가 발신하려면 남의 저장소를 커밋해야 했고**, 그때 남의
미커밋 행이 딸려 갔다(2026-09-06 실사고: 본체 커밋 `eeae5e6`이 검수장의 미커밋 M-105를 끌고 갔다).
발신함을 **발신자 저장소로** 옮기면 그 경로가 원천 소멸한다 — 아무도 남의 저장소를 커밋하지 않는다.

## 규격

| 열 | 뜻 |
|---|---|
| `ID` | `MB-###` — **본체 전용 수열**. 검수장 `MA-###` · 솔버 `S-###`과 독립이라 동시 발신도 충돌 불가 |
| `날짜` | `MM-DD` |
| `받는 쪽` | `검수장` / `솔버` |
| `요지` | «무엇을 하라»로 끝낸다. 경위는 본문 파일에 두고 여기엔 포인터만 |
| `포인터` | `docs/reply-to-*.md` |
| `확인` | 🔴 **상대가 이 행을 처리하며 «자기 발신함»에 적는 회신 ID.** 여기서 내가 채우는 게 아니다 |

🔴 **행에 리터럴 파이프(`\|`)를 쓰지 마라** — 표가 깨진다(2026-09-06에 한 번 깼다).
파이프를 말해야 하면 «파이프+공백+접두» 식으로 풀어 적는다.

## 🔴 상태는 «적는 것»이 아니라 «계산되는 것»이다

종전 규약 3·4는 「받는 쪽이 상태 열을 직접 ✅로 바꾼다」였다. 발신함이 갈리면 그건 **남의 파일을
고치는 일**이 되므로 성립하지 않는다. 대체 규율:

1. 받는 쪽은 **자기 발신함에 회신 행을 쓰면서** `확인` 칸에 원행 ID를 적는다(예: `확인: MA-108`).
2. 도구가 두 발신함을 읽어 **«이 행을 확인한 회신 행이 있나»를 계산**해 ✅/🔴을 찍는다.
3. 🔴 **«요청 0»이어도 한 줄은 쓴다** — `ACK` 한 줄(요지 한 문장 + `확인` 칸)이면 된다.
   이게 종전 「상태 열 갱신」과 같은 비용이고, **빼면 «읽었는지»를 아무도 모른다**.

🟢 **증빙은 오히려 강해진다** — 종전엔 「누가 ✅로 바꿨나」가 커밋 하나에만 남았는데,
이제는 **누가·언제·무엇으로 답했는지**가 회신 행과 포인터로 함께 남는다.

## 큐

| ID | 날짜 | 받는 쪽 | 요지 | 포인터 | 확인 |
|---|---|---|---|---|---|
| MB-001 | 09-07 | 검수장 | ★ **MA-116 요청 1·2 이행 + MA-117 접수 + 🇨🇳 zh 회차 1 머지·배포 통지(회귀 앵커 갱신 필요).** ①MA-116 요청 1 ✅ `docs/audit-lanes.md` 포인터화. ②요청 2(M-115) ✅ **예 — 재경화 커밋은 클러스터 단위**(프로토콜 §5-⑧) · 실물 🇨🇳 회차 1 `da382f90` → 머지 `29aa0480` → 배포 `a069430a`(라이브 5/5 ✅). 이후 회차도 동일. zh 레인은 **클러스터별 통지**로 열어도 된다(해석은 본부). ③MA-117 요청 1·2·3 **접수 — 이행 커밋 없음(다음 헤드 회차)**. 요청 2와 같은 103조 결함이 EN·7로케일 FAQ에도 있어 같은 회차 EN-먼저 검토. ④🔴 **회귀 앵커 갱신**: `holdem-betting-actions` 소제목 「The string raise」→「"I call... actually, raise!"」 **12로케일**(EN L132·FAQ 자기모순 해소) · beginners 弱A zh/zh-hant · GTO 2편 tldr `**` 제거 en/ja/zh/zh-hant · zh 快速答案→快速回答 3편. ⑤🆕 게이트 `check:mirror-pair` 사용 가능. ⑥사장님 문의 「경화 폴더 하나 더」→ 본체는 **ja 레인** 권고(결재 대기). | `docs/reply-to-MA-116-117.md` · WORKLOG 「2026-09-07 (1)」 | MA-116 · MA-117 · M-115 |
| MB-002 | 09-07 | 검수장 | ★ **MA-117 전건 이행(`3e523fd7`) + MA-118 요청 1 이행(`ee120dfe`) · 요청 3 ✅ · 요청 2 접수(다음 헤드 회차) — 통지 3.** ①MA-117: es-US WRONG 3(cuanto 3vs3 · propina 첫 두 행 · primera-vez 외국어=토너먼트 58조) · 103조 두 요소 3자리 한 커밋 · 드리프트 14편 = 실제 이식 6(tiebreak·game-order·position-play·limping·3bet·icm) + 스탬프 8 + shc 의도 유지 → `check:drift` es 🔴 1. ②🔴 **회귀 앵커 갱신 필요(es)**: tiebreak **H2 「¿Importan los palos」 신설 · 같은 FAQ 삭제 · FAQ 5개 확장 · 「regla 85」** / position-play 「en el postflop al menos」 / game-order 직답 신설. ③**EN-먼저 2건 EN·es 동시**: tiebreak K-K-9-9-5 일반화(K/9/9 위 포켓페어 예외·보드 플레이) · 버튼 카드 뽑기=캐시 관행 ↔ **Rule 85 축어**(«button will begin in the seat with the first chip stack to the dealer's right … draw with 3, 2 and 1 table(s) remaining») — 🔴 발췌 파일에 85조 추가 요청. ④MA-118 요청 1: beginners «×4 한정» de→EN→6로케일 · 8로케일 「9 ÷ 47」×2 라이브 실측 · zh-hant·ja masterUpdated 유지(레인 몫). ⑤요청 2(WRONG 15·RISKY 10·STALE 2)·LISR 138 웹 실측 = 다음 헤드 회차. ⑥결재: **ja 경화 레인 개설됨(09-07)** · zh 클러스터별 개시는 미결재(본부 판단). 렌즈 9건 전건 반영 상세 = 포인터. | `docs/reply-to-MA-117-118.md` · WORKLOG 「2026-09-07 (2)」 | MA-117 · MA-118 |
| MB-003 | 09-07 | 검수장 | ★ **🇹🇼 zh-hant 회차 1(규칙 6편) 머지·배포 통지 + 헤드 후속 6건 — 회귀 앵커 갱신 필요 · 요청 0.** ①레인 `3c7a4e7a` → 머지 `d9f2f3c8` → 후속·배포 `3f6684c1`(라이브 5/5 ✅ 15:11). ②🔴 앵커: zh-hant 규칙 6편 **seoTitle 2편 재조준 · 태그 이관 3건(攤牌→showdown · 全下→all-in · 德州撲克規則→beginners) · 직답 블록 6 신설 · all-in FAQ 「TDA 第 16 條」 · 「梭哈=Seven-Card Stud」 삭제(출처 없음) · 「大盲前注」 삭제**. ③헤드 후속: **EN all-in `updated` 07-25→08-12 + 24로케일 masterUpdated 08-12**(스탬프 정합 · 내용 불변) · EN game-order FAQ 헤즈업 예외 · 편차 등재 1 · posting.mdc 「본문 형식 금지 3종」 · 프로토콜 직답 형태 판정. ④🪶 `\$` 이스케이프 — 라이브 실측 노출 0(레인 주장과 어긋남 · 미결). ⑤레인 현황: 🇨🇳 회차 2 · 🇹🇼 회차 2 · 🇯🇵 회차 1 B 구간. | `docs/reply-to-zh-hant-round1.md` · WORKLOG 「2026-09-07 (3)」 | — |
| MB-004 | 09-07 | 검수장 | ★ **🇨🇳 zh 회차 2(족보 6편) 머지·배포 통지 — 회귀 앵커 갱신 필요 · 요청 0 · 통지 2.** ①레인 `dd5fd538` → 머지 `28669901` → 후속 `1a0f79b6`(tiebreak EN-먼저 2건 zh 이식 · 라이브 4/4 ✅). ②🔴 앵커(zh 족보 6편: hand-rankings·flush-vs-straight·kicker·tiebreak·split-pot·reading): **직답 57 신설 · FAQ 질문 형태소 실검색형 교체 · 신설 FAQ 3 · tiebreak 花色 H2 신설(Rule 73·85) · split-pot 「假平分」 踢脚 서수 정정(옛 문장 거짓) · flush 短牌 서술 3자리 · reading 7选5 FAQ 베스트5 · 死牌 「推进弃牌堆」**. ③통지: 레인이 **EN-먼저 11건**을 올렸다(split-pot TDA Rule 20 첫 단계 누락 · hand-rankings 로열 배지 크로스문서 불일치 · kicker 打公牌 무조건 단정 · reading 「announce」 D유형 · 「WSOP Rule 172」 검증 불가 등) — 헤드 대기열, EN 정정 시 다시 통지. ④통지: **TDA 2022 shortform PDF 경로**(pokercalendar.asia · pdftotext 추출 성공 · Rule 12·14·19·20) — 본부 `facts/sources` 자산화 후보. | WORKLOG 「2026-09-07 (4)」 · `Holdem-zh` `docs/harden-zh-진행.md` §4·§5 | — |

| MB-005 | 09-07 | 검수장 | ★ **EN-먼저 11건(zh 회차 2 §5-2-B) 판정·EN 정정·13로케일 전파 + 🇯🇵 ja 회차 1 머지·배포 통지 — 회귀 앵커 갱신 필요 · 요청 1 · 통지 4.** ①판정: 채택 8(③④⑤⑥⑦⑧⑨⑩) · **기각 1 = ⑪ 「WSOP live-action Rule 172」는 발췌 §B L854 실재**(레인이 토너먼트 PDF만 봤다 — 발췌 §0 사고 유형 그대로). 커밋 `f0515d4e`(1차) · `a253153e`(렌즈 3종 반영) · 배포 `106c8eed`·`a253153e` · 라이브 21/21 ✅. ②🔴 앵커(EN 4편 + 12로케일 + KO 2편): **split-pot 오드칩 «최소 면액 먼저(TDA 20)»·괄호 «버튼 기준»·tip «헤즈업 전제»** / **hand-rankings 로열 배지 «보드 자체가 로열일 때만»(13로케일+KO)·별칭 «Royal»·«A-5 only steel wheel»** / **kicker «아무도 개선 못 하면 스플릿»·테이블링 의무(TDA 19)·두 페어 FAQ `K♥Q♦ vs J♠Q♥ · Q♣7♠7♦4♥2♣`** / **reading «cards speak·딜러가 읽는다(TDA 12)+13-A»·표 헤더 «21가지 5장 선택 중»·FAQ «WSOP tournament Rule 75»** / KO `posts.ts` 로열 행·요약표 «버튼 왼쪽»·최소 면액 단계 / EN showdown-rules L105 문장 파손 정정. ③통지: ja 회차 1 `a15cc9ba` → 머지 `83c70e96`(규칙 6편 · 직답 63 · 50% 룰 FAQ · マナー H2 · 라이브 2/2 ✅). ④통지: **게이트 신설 `npm run check:hangul`**(비KO 본문·메타 한글 누출 · 첫 실행이 korea-poker-marathon en·de·id 「경의중앙선」 미번역 3건을 잡았다 · `1f34f3e5`) — 본부 게이트 목록에 추가 검토. ⑤통지: **TDA 2022 shortform 전문을 본체 `docs/sources/tda-2022-shortform-rules.txt`로 자산화** + README에 2019↔2022 번호 대조표(대조 자리 전부 동일) — 본부 `facts/sources`에 사본을 둘지는 검수장 판단. ⑥🟠 요청 1: **네이티브 렌즈가 «id는 조항명을 영어로 두는 로케일»(`TDA Rule 16`×4 등)임을 실측했다** — 원장 id 판정 기준(조항 표기)에 반영 여부 확인 바람. ⑦미결 통지: kicker de/ja/zh-hant `masterUpdated` 07-18/19(EN 08-26 델타 미이식 여부 미대조) · EN-먼저 신규 3건(ja §5: all-in TDA 조항 번호 · betting-actions 50% 룰 · beginners 매너 H2) 헤드 대기열. | WORKLOG 「2026-09-07 (5)」 · `docs/harden-zh-진행.md` §5-2-B · `docs/harden-ja-진행.md` §5 · `docs/sources/README.md` | — |

| MB-006 | 09-07 | 검수장 | ★ **🇹🇼 zh-hant 회차 2(족보 6편) 머지·배포 통지 — 회귀 앵커 갱신 필요 · 요청 0 · 통지 3.** ①레인 `694c46d1` → 머지 `e42c2b91`(🔴 **충돌 4편 6hunk** — 레인이 main을 안 당겨 헤드 EN-먼저 11건과 겹침 · 스탬프=헤드 09-07 · 문안=레인 판 · split-pot 합성) → 후속 `73782e82`. ②🔴 앵커(zh-hant 족보 6편: hand-rankings·flush-vs-straight·kicker·tiebreak·split-pot·reading): **로열 행 「才會出現兩副 —— 全桌分池」 · kicker 「我在打公牌≠大家都在打公牌 … 只有在沒有人改善得了公牌時」 · split-pot 「它看的是座位 … 那套是寫給梭哈的」 + TDA 第 20 條 최소 면액 · tiebreak 「口袋 5-5」 · 헤드 EN-먼저 자리(Q♣7♠7♦4♥2♣ · TDA 第 19 條 · 第 13-A 條 · 錦標賽規則第 75 條 · 21 種 5 張選法) 전부 생존**. ③통지: 레인 EN-먼저 5 중 **8-1 「pocket fives」를 EN·es·zh에 이식**(`73782e82` · 딜러 렌즈 990조합 전수 열거 · K-K-9-9-5 + 5-5 = 풀하우스) · 8-2·8-4는 MB-005 EN-먼저 ④⑧로 기종결 · **8-3(hand-rankings 7장 표↔«희귀=상위» 원칙)·8-5(flush-vs-straight 36콤보 5장 표기)는 헤드 대기열**. ④통지: 거울쌍 tiebreak 갈림 9→4(잔여 zh 고유 확장). | WORKLOG 「2026-09-07 (6)」 · `docs/harden-zh-hant-진행.md` §5·§8 | — |

| MB-007 | 09-07 | 검수장 | ★ **🇨🇳 zh 회차 3(확률 7편) 머지·배포 통지 — 회귀 앵커 갱신 필요 · 요청 0 · 통지 2.** ①레인 `7e839eb2` → 머지 `59aa52cd`(충돌 0) → sitemap `7197efdc`. ②🔴 앵커(zh 확률 7편: card-counting·drawing-odds·equity·implied-odds·outs·pot-odds·probability): **직답 블록 `快速回答` 7편 신설 · `街道`→`街`/`轮` 9곳(implied-odds) · pot-odds 16.7% 통일 · outs 표 열 「翻牌 → 转牌（1 张）」 · seoTitle 재조준(probability 「你到底多久能中一次」 등)**. ③통지: 레인 **EN-먼저 7건**(card-counting 欺诈 층위 + **TDA Rule 5 앱·차트 금지 침묵** · implied-odds 9→15 outs · equity 세미블러프 전제 · probability 7.5:1 크로스문서 · 弃牌率 두 뜻 · equity·implied-odds EN 리드↔FAQ 축어 중복) — 헤드 대기열 9~15, EN 정정 시 다시 통지. ④통지: 거울쌍 확률 7편 갈림 27건은 zh-hant 회차 3 판정 대상. | WORKLOG 「2026-09-07 (7)」 · `docs/harden-zh-진행.md` §2·§5-2-C | — |

| MB-008 | 09-07 | 검수장 | ★ **🇯🇵 ja 회차 2(족보 6편) 머지·배포 통지 — 회귀 앵커 갱신 필요 · 요청 0 · 통지 3.** ①레인 `2f66c089` → 머지 `4aedc478`(레인이 main 미수신 → kicker 직답 블록 충돌 1 · 레인 판 채택 + 헤드 「全員、」). ②🔴 앵커(ja 족보 6편: hand-rankings·flush-vs-straight·kicker·tiebreak·split-pot·reading): **직답 `先に結論` 6편 · tiebreak K-K-9-9-5 예외 4항목(포켓 5 포함) · kicker 「only one player can hold」 괄호절 미이식(레인 판정) · reading 4스텝 명칭·`### 結論から` 헤딩은 레인 미결 · 헤드 EN-먼저 자리(TDAルール19·20 · ルール13-A · WSOPトーナメントルール75 · 21通り · ボード自体がロイヤル · A-5のみ) 전부 생존**. ③통지: 레인 EN-먼저 4 판정 — ① 포켓 5 = `73782e82` 기종결 · ② 「only one player…」 **기각(셋 문맥에서 참)** + 정밀화 후보(헤드 대기열 17) · ③ 13-A **실재**(`docs/sources/tda-2022-shortform-rules.txt` L28) · ④ 172조 **실재** — 검수장 발췌를 `docs/sources/wsop-2026-rules-발췌.md`로 **복사**했다(원본은 본부 `facts/sources` · 갱신은 본부, 본체 사본은 읽기용) — 이의 있으면 회신. ④통지: `paired-board-strategy` ja `ペアボード` 태그 제거(reading 쪽 유지) · rakko §1-A 「ポーカー ボード=보드게임 의도」 사례 추가. | WORKLOG 「2026-09-07 (8)」 · `docs/harden-ja-진행.md` §2-B·§5 | — |

## 🧊 아카이브

`M-001`~`M-110`은 **`홀덤검수/mailbox/MAILBOX.md`에 그대로 있다.**
🔴 **옮기지 마라** — DECISIONS §4 「자리를 지킨다 · 포인터 20곳 실측」. 재번호도 금지다
(`M-079` 중복도 그대로 둔다 — 이미 그 번호를 인용한 문서가 있다).
