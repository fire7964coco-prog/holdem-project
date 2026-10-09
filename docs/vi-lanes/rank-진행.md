# vi-rank 진행 — 🅱 족보

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-B-rank.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> hand-rankings는 **기존 편 재작업**(import는 이미 [vi-rank] 칸 안 · 파일만 다시 쓴다 · `check:drift`). 나머지 5편 신규. 족보 = 베트남어 정본 + 첫 등장 영어 병기(§3-A ③) · «sảnh rồng»은 별칭 1회·헤드 금지 · «Thùng phá sảnh là gì — khác … hoàng gia» H2 + «có lớn hơn tứ quý không» FAQ · nuts H2는 reading-the-board(§3-C ④) · Tiebreaker 카드 = «So bài cùng hạng».

## 상태 — A ☑(10-09) / B ☐ / C ☐ · 커밋 —

- A 산출 = **`docs/vi-lanes/rank-brief.md`**(B의 유일한 입력 + EN 마스터 읽기 전용). 키워드 파일(`docs/keyword-bank/vi-rank.md`)은 만들지 않았다 — 실측치·AC·PAA 전부 브리프 각 편 «키워드 흡수» 표에 들어갔다(fr 선례).
- 카피 = Fable 서브 1회 → Opus 조정 3건(브리프 §1-H) · 글자 수 재측정 초과 0(seoTitle 54~58 · desc 147~156).
- EN 6편 = fr 기준 `a54b5f3d`와 flush-vs-straight L68 한 문장만 다름 → 구조 L##는 EN grep으로 전건 재확인.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-hand-rankings | ☑ | ☐ | ☐ | 재작업 · H2 12(🆕 2) · FAQ 23(🆕 3) · `check:drift` |
| holdem-flush-vs-straight | ☑ | ☐ | ☐ | H2 8(🆕 1) · FAQ 12(🆕 4) |
| holdem-kicker | ☑ | ☐ | ☐ | H2 7 · FAQ 14(🆕 1) · `export default` |
| holdem-tiebreak-rules | ☑ | ☐ | ☐ | H2 8 · FAQ 14 · tiebreak 10행 = hand-rankings 축어 |
| holdem-split-pot-rules | ☑ | ☐ | ☐ | H2 7 · FAQ 14(🆕 1) · desc 160→151 조정 |
| holdem-reading-the-board | ☑ | ☐ | ☐ | H2 10 · FAQ 12(🆕 1) · nuts H2 고정 |

## 신규 용어 (계획 §3-A에 없는 것 · 헤드가 머지 때 대조)
| EN | 채택 vi | 근거 |
|---|---|---|
| odd chip | **chip lẻ (odd chip)** · 이후 chip lẻ | 코퍼스 0 → 서술형 · Fable 동일 제안(«lẻ» = chia không đều 뜻) |
| dominated ace | **lá A bị dominate (dominated ace)** · 이후 bị dominate | 영어 차용 원칙(§3-A ④ 방향) · Fable 제안(현장 «bị dominate/domi») · 코퍼스 미확인 |
| playing the board | **chơi theo bài chung (playing the board)** 첫 등장 → **chơi theo board** | 코퍼스 0 → 서술형 · kicker·reading·split 세 편 같은 형 |
| full house 읽기(«queens full of fives») | **cù lũ Q kèm 5 (QQQ55)** | 코퍼스 0 · 랭크 문자열은 축어 |
| steel wheel | **thùng phá sảnh thấp nhất A-2-3-4-5 (steel wheel)** | wheel 고정문(§3-A ③)의 SF 판 |
| nut flush | **thùng nuts (nut flush)** | nuts 고정문 파생 |
| paired board | **board có đôi (paired board)** | §3-A ④ 🅶 정본 «mặt bài có đôi»와 같은 뜻 — 🅶 레인과 갈리면 헤드가 통일 |
| tiebreaker(카드 라벨 외 산문) | **phân định khi hòa** · «so bài cùng hạng» | §3-A ⑥ 카드 라벨 승계 |
| Hand Matchup / Board Reading / Starting Hands(카드 라벨) | **So sánh tay bài / Đọc bài chung / Bài khởi đầu** | §3-A ⑥ 사전에 없던 EN 라벨 3종 — Fable 제안 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (6편 전부) | 51편 안 + 도구 | **편차 0** · 🆕 도구 앵커 `/vi/calculator` 2(hand-rankings · reading-the-board · 도구 FAQ 축어) · 🆕 hand-rankings FAQ 23 → `/vi/blog/holdem-probability` |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `holdem-kicker.ts:118` «TDA 2024 Rule 19» · `holdem-split-pot-rules.ts:116` «TDA 2024 Rule 20» · `holdem-reading-the-board.ts:174` «TDA 2024 Rule 12» | TDA 현행 판본은 **2026 Rules v1.0(2026-09-07)**이고 번호가 바뀌었다(playing the board 19→20 · odd chip 20→21 · cards speak 12→13 · side pots 21→23) | L-B §6-5(아스트라 10-08 · pokertda.com 원문 직접 열람). 규칙 내용은 같다 — vi는 EN 인용 축어로 옮기고, EN 갱신 여부는 헤드 판정.

## 헤드 요청
- (없음 — 위 EN-먼저 후보는 머지 때 판정만)

## 미결
- 카피 열어둔 판단 2(브리프 §1-H ⑥): hand-rankings desc «xác suất từng tay» 구(🅲 레인 이의 시 삭제) · seoTitle 뒷부 «Thứ tự bài poker mạnh nhất» 확정.
- «board có đôi» vs 🅶 «mặt bài có đôi» 표기 통일 = 헤드 머지 때.
