# ms-tour 진행 — 🅳 토너먼트 4편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ✅ / B ☐ / C ☐ · 커밋 —

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ☐ | ☐ | 링크 편차 2(APT) · 필라 |
| holdem-icm | ✅ | ☐ | ☐ | 표 3 수치 재계산 ✅ |
| holdem-bubble | ✅ | ☐ | ☐ | BF 표·데드머니 재계산 ✅ |
| holdem-short-stack | ✅ | ☐ | ☐ | 22 vs AKo 52.65% → C에서 poker-eval 대조 |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| tournament | tournament (kejohanan 안 씀) | 코퍼스 90 : 35 · tvc · 말레이어형 볼륨 null |
| blind level | blind level | tvc 3 (blind-meaning «tahap blind» 1) |
| clock (blind 시계) | jam | blind-meaning L114 «jam kejohanan» · shove ≠ jam |
| structure sheet | helaian struktur | blind-meaning L114 |
| starting stack | stack permulaan | — |
| big / medium / short stack | 영어 3종 · medium 첫 등장 «(stack sederhana)» | tvc «stack sederhana» · 검색 표면 |
| ITM | ITM + «kedudukan berbayar (in the money)» | tvc |
| bust / eliminated | tersingkir | tvc |
| ICM tax | «ICM tax» + «(cukai ICM)» 병기 | — |
| burst the bubble | bubble pecah | — |
| stalling | stalling + «(sengaja melengahkan masa)» | — |
| seat card · loyalty card · photo ID | kad tempat duduk · kad keahlian · ID bergambar | — |
| orbit | pusingan meja | `/ms/calculator` |
| M-ratio zones | Nilai M · Zon hijau/kuning/oren/merah/mati | `/ms/calculator` 축어 |
| pay ladder · ladder up | tangga payout · naik tangga payout | — |
| card room | bilik poker | — |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| holdem-tournament | L191 본문 apt-incheon-2026-guide | 빼기 — 문장째 삭제(링크 하나를 위한 안내문) |
| holdem-tournament | L321 readnext apt-incheon-2026-guide | 대체 → holdem-icm |

## EN-먼저 후보

- lib/posts-en/holdem-icm.ts:L183 · L238 | readnext·관련글 카드 라벨 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work — Buy-Ins, Formats & Day 1» | 라벨이 낡음(ms는 대상 title 사용)

## 헤드 요청

- 태그 카니발: 기존 ms `holdem-tournament-vs-cash-game` 태그 «ICM poker» ↔ 이 레인 holdem-icm(«icm poker»). 기존 편 태그 정리 판단(queue 회차).
- 용어 통일: 기존 ms `holdem-blind-meaning` L114·`/ms/calculator`는 «kejohanan», 이 레인·tvc는 «tournament». 5레인 대조(§7-③) 때 판정.
- 현지 대회 의도(genting poker tournament 70 · poker tournament malaysia 40)는 EN에 사실이 없어 이 레인이 못 받는다 → «나라별 홀덤대회 트랙» 후보로만 기록.

## 미결

- when-to-fold(strat 레인) ms title 미정 → B는 임시 «Bila Patut Fold dalam Poker», C에서 교체.
