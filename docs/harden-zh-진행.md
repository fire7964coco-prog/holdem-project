# 🇨🇳 zh(간체) 경화 진행 파일

> 규격 = `docs/hardening-protocol.md` §8. 절차 본체는 그 파일 — 여기엔 **상태·미결·갈림·요청**만.
> 레인 = `Holdem-zh` / 브랜치 `harden-zh` / 담당 `lib/posts-zh/` 42편(대상 밖 13+1편은 프로토콜 §7-A).

## 1. 회차 표

| 회차 | 클러스터 | 편수 | 상태 | 커밋 | 렌즈 지적/반영 | 날짜 |
|---|---|---:|---|---|---|---|
| 1 | 규칙 | 6 | ⏳ 다음 | | | |
| 2 | 족보 | 6 | | | | |
| 3 | 확률 | 7 | | | | |
| 4 | 전략 | 8 | | | | |
| 5 | 토너먼트 | 9 | | | | |
| 6 | 용어 | 6 | | | | |

**착수점(2026-09-06 헤드 실측)**: `audit:hard --locale=zh` 56/56 🔴 0 · 🟠 2(C2 행 키 불일치 — game-order↔flush-vs-straight · 3bet↔continuation-bet, 육안 대조 필요) · `check:drift` 🔴 13 · 🟠 1(card-counting `masterUpdated` 없음) · §13 미검사 27편.

## 2. 미결

- 🟠 `holdem-card-counting`에 `masterUpdated` 필드가 없다 → 회차 3에서 EN diff 실물 대조 후 필드 신설.
- 🟠 C2 형제 대조 2쌍이 «행 키 불일치»로 자동 대조 불가 → 회차 1(game-order)·회차 4(3bet·cbet)에서 육안 대조.
- 🟠 `docs/local-voice/zh*.md` 없음 → 회차 1 A 구간에서 신설(프로토콜 §7-B).
- 🪶 용어6 신마 변이 재점검(2026-07-24 사장님 지시 · `translation-terms-zh.md` §0.5)은 회차 6 몫.

## 3. 되돌리지 마라 (헤드가 넘긴 것)

- `holdem-3bet` A5s 블로커 대상 = **AA·AK**(KK 아님) — `1c0dc8dc`(2026-09-06) 정정본. 「AA 和 KK」로 되돌리지 마라.
- `holdem-3bet`·`holdem-pot-odds`·`holdem-split-pot-rules`는 **2026-09-06 EN 역이식(`4522532a`)**이 이미 들어가 있다 — 회차 2·3·4 A 구간에서 그 커밋 diff를 먼저 보고 «이미 반영»으로 분류.
- `apt-incheon` 「개막 당일 수관」은 EN 「before the festival」을 **일부러 안 따른** 편차(08-27 세션 2/9 · `locale-intentional-diffs.md`) — EN으로 되돌리지 마라.
- 2·4법칙 링크 앵커는 도착 글 표기 「二四法则」로 통일돼 있다.
- GTO 13편·wsop-2026은 대상 밖.

## 4. 거울쌍 갈림 (🇹🇼가 받을 것)

(없음 — 회차 1 마감 때부터 기록)

## 5. 헤드 요청

(없음)

## 6. 자산 축적 체크 (회차 마감마다)

| 회차 | ① 키워드뱅크 | ② 편차 판정 요청 | ③ voice/판정 정본 |
|---|---|---|---|
| 1 | | | |
