# 🇯🇵 ja(일본어) 경화 진행 파일

> 규격 = `docs/hardening-protocol.md` §8. 절차 본체는 그 파일(ja 부록 = §7-E) — 여기엔 **상태·미결·갈림·요청**만.
> 레인 = `Holdem-ja` / 브랜치 `harden-ja` / 담당 `lib/posts-ja/` 42편(대상 밖 15편 = GTO 13 · wsop-2026 · japan-poker-tournaments-guide).

## 1. 회차 표

| 회차 | 클러스터 | 편수 | 상태 | 커밋 | 렌즈 지적/반영 | 날짜 |
|---|---|---:|---|---|---|---|
| 1 | 규칙 | 6 | ⏳ 다음 | | | |
| 2 | 족보 | 6 | | | | |
| 3 | 확률 | 7 | | | | |
| 4 | 전략 | 8 | | | | |
| 5 | 토너먼트 | 9 | | | | |
| 6 | 용어 | 6 | | | | |

**착수점(2026-09-07 헤드 실측)**: `audit:hard --locale=ja` 57/57 🔴 0 · 🟠 2 · §13 미검사 26편 · `check:drift` 🔴 **14**(3bet · betting-actions · card-counting · continuation-bet · fish · game-order · glossary · kicker 외 6) · 직답 라벨 정본 `先に結論` **16개**(42편 중 대부분 직답 0 — zh 회차 1과 같은 «작업량의 8할» 예상).

## 2. 미결

- 🟠 ja 07-20 경화는 **편별 커밋**이라 클러스터 커밋 경계가 없다 → 클러스터는 §7-A 표(zh 경계)를 그대로 쓴다.
- 🟠 08-27 세션 3/9(`f8d9b2bd`)가 15편의 드리프트를 먼저 소급했다(apt·ept·bubble·tournament·tvc·bad-beat·rake·straddle·fish·glossary·3bet·shc·when-to-fold·implied-odds·limping). **그 파일들은 A 구간에서 그 커밋 diff를 먼저 보고** «이미 반영» 분류.
- 🟠 `docs/keyword-bank/`에 ja 클러스터별 뱅크가 없다(tag-volumes·tournament·gto만) → 회차마다 `ja-<클러스터>.md` 신설(ラッコ suggest+question+headline · ~7.5크레딧/허브).
- 🪶 `japan-poker-tournaments-guide`는 ja 고유 글(09-02)이라 masterUpdated가 없다 — 대상 밖, 손대지 마라.

## 3. 되돌리지 마라 (헤드가 넘긴 것)

- `holdem-3bet` A5s 블로커 대상 = **AA·AK**(KK 아님) · A5s 4-bet 블러프 비율 ja는 **30%**(08-27 세션 3/9에서 이미 정정본).
- `holdem-3bet`·`holdem-pot-odds`·`holdem-split-pot-rules`는 **2026-09-06 EN 역이식(`4522532a`)** 반영본 — 회차 2·3·4 A 구간에서 «이미 반영»으로 분류.
- `apt-incheon` 「開幕当日/開幕日」은 EN 「before the festival」을 **일부러 안 따른** 편차(`locale-intentional-diffs.md` 08-27 행) — 되돌리지 마라.
- `holdem-tournament-vs-cash-game` readTime **16分 유지**(EN 18min 미추종 · zh·de·es 선례).
- 경험담은 **현지화하지 않는다**(`local-voice/ja-jp.md` §3) — EN 1인칭 경험 그대로 번역.
- H2는 `[카타카나 용어]+[接尾辞]` 검색형 — EN 질문형 직역 금지(`translation-terms-ja.md` §H2).
- GTO 13편 · wsop-2026 · japan-poker-tournaments-guide는 대상 밖.

## 4. 거울쌍 갈림

해당 없음(ja는 거울쌍이 없다).

## 5. 헤드 요청

(없음)

## 6. 자산 축적 체크 (회차 마감마다)

| 회차 | ① 키워드뱅크 | ② 편차 판정 요청 | ③ voice/판정 정본(`local-voice/ja-jp.md` · `translation-terms-ja.md`) |
|---|---|---|---|
| 1 | | | |
