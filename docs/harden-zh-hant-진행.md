# 🇹🇼 zh-hant(번체·대만) 경화 진행 파일

> 규격 = `docs/hardening-protocol.md` §8. 절차 본체는 그 파일 — 여기엔 **상태·미결·갈림·요청**만.
> 레인 = `Holdem-zh-hant` / 브랜치 `harden-zh-hant` / 담당 `lib/posts-zh-hant/` 42편(대상 밖 13+1+1편은 프로토콜 §7-A).

## 1. 회차 표

| 회차 | 클러스터 | 편수 | 상태 | 커밋 | 렌즈 지적/반영 | 날짜 |
|---|---|---:|---|---|---|---|
| 1 | 규칙 | 6 | ⏳ 다음 | | | |
| 2 | 족보 | 6 | | | | |
| 3 | 확률 | 7 | | | | |
| 4 | 전략 | 8 | | | | |
| 5 | 토너먼트 | 9 | | | | |
| 6 | 용어 | 6 | | | | |

**착수점(2026-09-06 헤드 실측)**: `audit:hard --locale=zh-hant` 57/57 🔴 0 · 🟠 2(C2 행 키 불일치 — flush-vs-straight↔game-order · continuation-bet↔when-to-fold) · `check:drift` 🔴 14 · 🟠 0 · §13 미검사 26편. 질문형 H2 비율이 42편 대부분 0~40%인데 **이건 결함이 아니다**(명사형이 대만 실검색 — 프로토콜 §7-C).

## 2. 미결

- 🟠 C2 형제 대조 2쌍 자동 대조 불가 → 회차 1(game-order)·회차 4(cbet·when-to-fold)에서 육안 대조.
- 🟠 `docs/local-voice/zh-tw.md` 없음 → 회차 1 A 구간에서 신설(프로토콜 §7-C).
- 🟠 08-27 세션 2/9 교열 렌즈가 남긴 **잔여 드리프트 8편** = betting-actions · card-counting · continuation-bet · game-order · kicker · showdown-rules · marathon · beginners — 회차 1·2·3·4·5에 각각 걸린다. A 구간 diff 실물로 확인.
- 🪶 `holdem-hand-rankings`는 09-01 `99111d90`(規則 4,400 축 보강 · FAQ 4문 편입)으로 이미 한 번 손댔다 — 회차 2에서 그 diff 먼저.

## 3. 되돌리지 마라 (헤드가 넘긴 것)

- `holdem-3bet` A5s 블로커 대상 = **AA·AK**(KK 아님) — `1c0dc8dc`(2026-09-06) 정정본.
- `holdem-3bet`·`holdem-pot-odds`·`holdem-split-pot-rules`는 **2026-09-06 EN 역이식(`4522532a`)** 반영본 — 회차 2·3·4 A 구간에서 «이미 반영»으로 분류.
- `apt-incheon` 「開幕當日」은 EN 「before the festival」을 **일부러 안 따른** 편차 — 되돌리지 마라.
- 「四二法則」이 도착 글 정본(zh의 「二四法则」과 다른 게 정상).
- `texas-holdem-rules-for-beginners`는 `德州撲克規則` 4,400 축 주인으로 09-01 확정·보강됨(`zh-hant-tag-volumes.md` §1) — 회차 1에서 제목·태그 축을 바꾸지 마라.
- GTO 13편·wsop-2026·taiwan-poker-clubs-guide는 대상 밖.

## 4. 거울쌍 갈림 (🇨🇳가 받을 것)

(없음 — 회차 1 마감 때부터 기록)

## 5. 헤드 요청

(없음)

## 6. 자산 축적 체크 (회차 마감마다)

| 회차 | ① 키워드뱅크 | ② 편차 판정 요청 | ③ voice/판정 정본 |
|---|---|---|---|
| 1 | | | |
