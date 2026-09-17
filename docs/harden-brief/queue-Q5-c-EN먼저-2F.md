# 🧰 queue 회차 Q5-c 브리프 — EN-먼저 §2-F 4건 (Q6c#1~#4) · 2026-09-17

> 재료 정본 = `docs/en-first-queue.md` §2-F. 이 파일은 «판정 근거 + 편집 자리»만 담는다.
> 판정 방법 = §13 직접 계산(전수 열거 · MC 아님) + 1차 출처 축어(WSOP 2026 룰 PDF 원문 `docs/sources/`).

## 1. Q6c#1 🔴 AK vs 작은 포켓페어 «coin flip» 명제 — 전수 열거 결과

**방법**: 보드 C(48,5)=1,712,304장 전수 × 홀카드 수트 패턴(동형류)별 가중. 스크립트 `equity-enum.mjs`(세션 scratchpad · 검산 AA vs KK **81.95%** = 공지된 정확값 일치).
에퀴티 = 승 + 무승부/2. (zh-hant §5-17 렌즈의 MC 수치 46.9·44.3·42.7·42.9는 «승률만»이라 0.3~0.5p 낮다 — 방향은 동일.)

| AK vs | 22 | 33 | 44 | 55 | 66 | 77 | 88 | 99 | TT | JJ | QQ |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| **AKo** | 47.35 | 46.62 | 45.97 | 45.38 | 45.01 | 45.02 | 44.84 | 44.73 | 43.12 | 43.15 | 43.24 |
| **AKs** | 49.89 | 49.21 | 48.59 | 48.03 | 47.69 | 47.69 | 47.52 | 47.42 | 45.94 | 45.96 | 46.05 |
| 수티드 차 | +2.54 | +2.59 | +2.62 | +2.65 | +2.68 | +2.67 | +2.68 | +2.69 | +2.82 | +2.81 | +2.81 |

**판정**
- ❌ 「coin flip against **every** smaller pocket pair」 — AKo는 22에도 47.35%, TT–QQ엔 43%. «모든 작은 페어에 동전 던지기»는 거짓.
- ❌ zh-hant 「22～99 ≈ 47%」 — 47%는 22 하나. 55–99는 45%대.
- ✅ 「43–46% against QQ」 — AKo 43.24 / AKs 46.05. **정확** → 유지(새 문안에 흡수).
- ✅ `holdem-equity` 「22 vs AK ~52/48 · The true coin flip」 — AK 수티드+오프수트 96콤보 가중 평균 = **52.0 / 48.0** (72×52.65 + 24×50.11)/96. 「QQ vs AK ~57/43」은 본문이 «offsuit · suited ~54/46»으로 명시. **equity 글은 손대지 않는다**(zh-hant 렌즈 ⓓ 판단 일치).
- 🪶 KO `posts.ts` probability 표 「AA vs AK(수티드) **87%**」 — 전수 87.86%(승률만 87.23). «승률 vs 에퀴티» 표기 규약 문제 · 이 회차 범위 밖 → §5에 기록만.

**새 문안(EN · 밴드 = 반올림 정확)**: 오프수트 22–44 «46–47%» · 55–99 «45%» · TT–QQ «43%» · 수티드 «+2.5–3p» · AKs vs 22 «약 50%(유일한 진짜 코인플립)».

**편집 자리**: EN shc L65 · de L66 · es L68 · id L72 · pt L69 · ja L72 · zh L72 · zh-hant L65 · **zh-hant probability L267 FAQ**(회차 3 문안 — §3 잠금은 「every smaller pair 되살리지 마라」이므로 새 문안은 잠금과 충돌하지 않는다 · 헤드에 잠금 문구 갱신 요청).

## 2. Q6c#2 🟠 kicker «각 족보 킥커 수» 표 — High card 행 부재

L55 표(「High card | Yes — all five compared in order | up to 4」)와 L79 표(one pair 3 · trips 2 · two pair 1 · quads 1)가 같은 글에서 갈린다. 산식 «조합 + 킥커 = 5»에 High card = **1 + 4**.
→ 행 `| High card | 1 | 4 | ✅ |` 추가 + 직답 굵은 문장에 「High card uses four kickers」 선두 삽입. 8로케일 동형(용어는 각 로케일 L55 표 축어 승계: de High Card · es/pt Carta alta · id High card · ja ハイカード · zh/zh-hant 高牌).

## 3. Q6c#3 🟠 glossary stripe 「"Most confused" pairs」

표 8행 중 7행은 «X vs Y» 쌍, 8행 「The 3-bet count」는 쌍이 아니다 → 「terms」. pt(「Confusões mais comuns」)·ja(「項目」)는 이미 쌍 표현이 아니라 무변경. de·es·id·zh·zh-hant 전파.

## 4. Q6c#4 🪶 hand-rankings 「often A-6-7-8-9 counts as a straight」

**1차 출처(레포 사본 · 축어)**:
- `docs/sources/wsop-2026-tournament-rules.txt` L1634–1635: *"The deck consists of thirty-six (36) cards. The Twos, Threes, Fours and Fives are removed. An Ace is still both the highest and lowest card in rank. Therefore, the holding of 9-8-7-6-A is a Straight."* + 족보 순서 Royal · SF · Quads · **Flush · Full House** · **Straight · Three of a Kind** · Two Pair · One Pair · High Card.
- `docs/sources/wsop-2026-live-action-rules.txt` Rule 366·369 동문.
- (운영사 페이지 PokerStars·GGPoker·Triton은 이 세션에서 404/타임아웃 — WebFetch·Playwright 모두. Wikipedia는 2차라 근거로 안 쓴다.)

→ «often»은 약하다: A-low 스트레이트는 규칙의 정의(A는 최고이자 최저)이지 «가끔»이 아니다. 새 문안: 「A-6-7-8-9 is the lowest straight (the ace plays low because the 2s–5s are gone)」. 꼬리 로케일(ar·hi·ms·tr·vi)은 「sometimes(कभी-कभी·kadangkala·bazen·đôi khi)」로 **더 틀리게** 번역돼 있어 §13급(족보 규칙)으로 보고 같이 고친다. ja L305·zh L415 사본 동시. zh-hant는 변형 표 없음(`locale-intentional-diffs` 09-09 행 · 의도적) → masterUpdated만.

## 5. 스탬프

손댄 파일 `updated` = 2026-09-17 · 로케일 `masterUpdated` = 2026-09-17(EN 4편 바뀜). pt·ja glossary와 zh-hant hand-rankings는 델타를 이미 갖고 있어 **masterUpdated만**(프로토콜 §5-⑦-B 🪶). zh-hant probability는 EN 무변경이라 `updated`만.

## 6. 하지 말 것

- `holdem-equity` 8로케일 — 정확하므로 손대지 않는다.
- EN shc L280 FAQ 「Suited adds about 2 percentage points … (AKs 67% vs random; AKo 65%)」 — 랜덤 핸드 기준 +1.7p라 그대로 옳다.
- KO `posts.ts` probability 표 — 범위 밖(기록만).
