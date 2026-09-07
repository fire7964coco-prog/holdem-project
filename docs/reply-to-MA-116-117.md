# 회신 MB-001 — MA-116 · MA-117 · M-115 (2026-09-07 · 헤드)

## MA-116
- **요청 1 ✅** `docs/audit-lanes.md`를 포인터로 축약(`lanes/WORKFLOW.md` · 운영 계획 · `LANE.md` · `lane-check`). 경화 레인 정본(`docs/hardening-protocol.md`)만 본체가 갖는다.
- **요청 2 = M-115 답 ✅ 예.** 재경화 커밋은 **클러스터 단위**다 — 프로토콜 §5-⑧이 「`harden(<locale>): <클러스터> N편 — 회차 K`」 한 커밋으로 못 박았다. 실물: 🇨🇳 회차 1 = `da382f90`(규칙 6편) → 헤드 머지 `29aa0480`. 이후 회차도 동일(족보 6 → 확률 7 → 전략 8 → 토너먼트 9 → 용어 6). zh 레인 착수 트리거는 **클러스터별 머지 통지**(이 발신함)로 보낸다 — 6/6 완결까지 기다릴 필요 없다면 클러스터 단위로 열어도 된다(사장님 09-06 「경화 끝나면」의 해석은 본부 몫).
- ④ 재판정(본체가 옳다) 접수. ⑤ 번호 정리 접수 — 본체 문서의 「검수장 M-114」는 M-115로 읽는다.

## MA-117 — 접수 · 이행은 다음 헤드 회차
- 요청 1(WRONG 3 · 셋 다 같은 글 안 재료) · 요청 2(103조 정의 3자리 한 커밋) · 요청 3(es 드리프트 14편 + card-counting masterUpdated) — **대상 커밋이 아직 없다.** 이행 커밋 해시를 다음 MB 행에 적는다.
- 🪶 요청 2와 같은 결함(103조 「사전 구두 선언 없이」 누락)이 **EN·7로케일 `holdem-betting-actions` FAQ**에도 있다(검수 발췌 L43) — 헤드 미결로 등재했고 es 3자리와 **같은 회차**에 EN-먼저로 닫는 것을 검토한다.

## 통지 — 🇨🇳 zh 회차 1 머지·배포 (검수 lane-zh 트리거 · 회귀 앵커 갱신 필요)
| 무엇 | 해시 |
|---|---|
| 레인 커밋(규칙 6편: beginners·game-order·betting-actions·blind-meaning·all-in·showdown) | `da382f90` · `e5874772` |
| 헤드 머지 | `29aa0480` |
| 헤드 요청 이행 + 배포 | `a069430a` (라이브 도착 09-07 14:15 · `page.content()` 앵커 5/5 ✅) |

🔴 **회귀 앵커가 깨질 자리(검수장 원장 de·pt·ja 등)**:
1. `holdem-betting-actions` 소제목 「Mistake 2 — **The string raise**」 → 「"I call... actually, raise!"」로 **EN + ar·de·es·fil·fr·id·ms·pt·tr·vi·zh-hant 12로케일** 변경(zh는 레인 선정정). 근거 = EN L132·FAQ가 「"call" 뒤 추가는 string bet 아님(90.d)」이라 소제목이 자기모순. 본문에 `Rule 90.d` 인용 1문장 추가(로케일 관례 표기).
2. `texas-holdem-rules-for-beginners` zh·zh-hant 「弱 A … 较小的一对」 → 「对 A 却踢脚太小 · 第二好的一对」(EN 관용구 정확 · 오역 2로케일만).
3. `ace-paired-board-strategy`·`blind-battle-connected-board` en·ja·zh·zh-hant **tldr에서 `**` 제거**(렌더러가 파서 없이 출력 → 별표 노출).
4. zh `快速答案` → `快速回答` 3편(ept·reading-the-board·split-pot) · zh showdown FAQ 死牌 서술 TDA 14조 정본화(레인 커밋).
5. 🆕 게이트 `npm run check:mirror-pair`(zh↔zh-hant 언어 불변 토큰) — 검수장 lane-zh가 거울쌍 판정에 써도 된다(집합 비교 · URL 마스킹 · 셀프테스트 16/16).
