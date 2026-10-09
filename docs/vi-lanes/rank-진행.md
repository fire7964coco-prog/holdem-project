# vi-rank 진행 — 🅱 족보

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-B-rank.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> hand-rankings는 **기존 편 재작업**(import는 이미 [vi-rank] 칸 안 · 파일만 다시 쓴다 · `check:drift`). 나머지 5편 신규. 족보 = 베트남어 정본 + 첫 등장 영어 병기(§3-A ③) · «sảnh rồng»은 별칭 1회·헤드 금지 · «Thùng phá sảnh là gì — khác … hoàng gia» H2 + «có lớn hơn tứ quý không» FAQ · nuts H2는 reading-the-board(§3-C ④) · Tiebreaker 카드 = «So bài cùng hạng».

## 상태 — A ☑(10-09) / B ☑(10-09 · 6편 · 자기 게이트 🔴 0) / C ☑(10-09) · 커밋 — (아래 «C 산출» 참조 · 헤드 머지 대기)

- C 산출(10-09 · 본체 Fable 5.1 · 렌즈 4종 = Opus 서브 · 아스트라 교차 1종 = codex gpt-6-astra read-only 스크래치 사본): ① 게이트 전건 `audit:hard --locale=vi` 13/13 🔴 0 · `check:intl-links` ✖ 8 = 전부 다른 레인 대상(B와 동일) · `check:structure` 내 6편 결손 0 · `check:meta` 초과 0 · `check:seo-sync` 🔴 0 · `check:drift` vi ✅ 6 · `--schema --locale=vi` 전편 일치 · `npx next build` ✅ ② §13 전사 대조(scratch `s13-compare.mjs` · vi 구분자 정규화) 불일치 후보 = 전부 🆕 절·조판 유래(hand-rankings 🆕 SF H2 보드 8♥7♥6♥Q♠3♦ · 로열 확률 FAQ · 명칭표 · flush FAQ 예시 반복 · 날짜 조각) → 판정 완료 0건 오류 · 🆕 절 손검산 9자리(hand-rankings SF H2·명칭표·FAQ 21~23 · flush 🆕 H2·FAQ 9~12 · kicker FAQ 14 · split FAQ 14 · reading FAQ 12) 전건 통과 ③ 렌즈 4종: 딜러 지적 3(반영 1 · EN-먼저 2) · 네이티브 34+교차 5(반영 27 · 겹침 9 · EN-먼저 2 · 헤드 판정 2) · SEO 11(반영 7 · 보류 4) · 교열 8(반영 7 · 겹침 1) · 아스트라 41(§13 불일치 0 · 숫자 불일치 0 · 반영 36 · 기각 3(«bad beat» 유지 · «board chơi cho cả bàn» 네이티브 통일형 유지 · K H3 «Kicker trong một cái nhìn»은 확정 카피라 헤드 판정) · EN-먼저 1) ④ 2차 교열 2회(1차 반영 diff → 지적 10 · 반영 9 / 아스트라 반영 diff → 파손 0 · 뜻 변질 0 · 문체 4+참고 1 전부 반영) · 최종 `audit:hard --locale=vi` 🔴 0 · 본문 백틱 0 · 빌드 ✅ ⑤ 반영 합계 약 95곳 · 확정 카피 변경 1(hand-rankings tldr «Cùng hạng thì so tổ hợp chính trước rồi đến kicker» — §13 정밀화 · 아스트라 C-1).

- B 산출(10-09) = `lib/posts-vi/<6편>.ts` + `index.ts` [vi-rank] 칸 두 곳에 5편 추가(hand-rankings는 재작업·import 불변). 본체 = **Fable 5.1**(사장님이 이 창을 Fable로 띄움 — HARDEN «본체 Opus 5.5»와 다름) · 집필 = hand-rankings 본체 직접 + 5편 Fable fork 병렬(편당 1 · 입력 = 브리프 §0·§1 + 담당 절 + EN 마스터 + 본체가 쓴 hand-rankings vi).
- B 자기 게이트(10-09): `audit:hard --locale=vi` 13/13 🔴 0 🟠 0(커버리지 «시나리오 못 잡은 글» 내 5편 = hand-rankings·kicker·tiebreak·split·reading → fork 보고의 손검산 7장→베스트5 전건 통과 · C에서 전사 대조 재확인) · `--schema --locale=vi` 전편 소스=산출물 일치 · `check:drift` vi ✅ 6 · `check:structure` 내 6편 결손 0 · `check:meta` 초과 0 · `check:seo-sync` 🔴 0 · **`check:intl-links` ✖ 8 = 전부 다른 레인 대상**(probability 3 · starting-hands-chart 3 · icm 1 · glossary 1 — 계획 §1-D «아직 vi 없는 글도 건다» · fr/ms 선례대로 prebuild가 막히므로 `npx next build` 직접 = ✅ 924 페이지 · 전 레인 머지 뒤 헤드 빌드에서 0 확인).
- B에서 고친 것: fork가 쓴 «anh ta»(대명사) 4곳 → «đối thủ»(kicker 3 · split 1).
- C가 볼 자리(fork 판단 메모): ① flush-vs-straight — 브리프는 `:::compare`를 🆕 H2 아래로 옮기라 했으나 H2 4 직답으로 남김(cù lũ 예시·tiebreak 링크만 🆕 H2로) · Short Deck FAQ 11 답에 EN L171 한 절 추가 ② kicker — 그리드 tiebreak 카드 라벨 EN «Hand Rankings» 승계 «Thứ hạng tay bài»(브리프 지시) ③ tiebreak — WSOP Rule 73 영어 원문 « » 이탤릭 + 베트남어 풀이(§1-G) ④ reading — «texture (kết cấu board)» 1회 풀이 · 인트로 끝 «không phải đọc bài đối thủ» 한정문.
- A 산출 = **`docs/vi-lanes/rank-brief.md`**(B의 유일한 입력 + EN 마스터 읽기 전용). 키워드 파일(`docs/keyword-bank/vi-rank.md`)은 만들지 않았다 — 실측치·AC·PAA 전부 브리프 각 편 «키워드 흡수» 표에 들어갔다(fr 선례).
- 카피 = Fable 서브 1회 → Opus 조정 3건(브리프 §1-H) · 글자 수 재측정 초과 0(seoTitle 54~58 · desc 147~156).
- EN 6편 = fr 기준 `a54b5f3d`와 flush-vs-straight L68 한 문장만 다름 → 구조 L##는 EN grep으로 전건 재확인.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-hand-rankings | ☑ | ☑ | ☑ | 재작업 · H2 12(🆕 2) · FAQ 23(🆕 3) · `check:drift` · C 수리 ~22(kicker 정의 «tổ hợp chính» · 원칙 문장 선두 · 직역투) |
| holdem-flush-vs-straight | ☑ | ☑ | ☑ | H2 8(🆕 1) · FAQ 12(🆕 4) · `:::compare`는 H2 4에 둠(브리프 편차 · SEO 렌즈도 현행 권고) · C 수리 ~12 |
| holdem-kicker | ☑ | ☑ | ☑ | H2 7 · FAQ 14(🆕 1) · `export default` · C 수리 ~16(FAQ 5 답 순서 · L129 보드 문장 좁힘) |
| holdem-tiebreak-rules | ☑ | ☑ | ☑ | H2 8 · FAQ 14 · tiebreak 10행 = hand-rankings 축어 · C 수리 ~16(«chia ra»→«xuất hiện» 뜻 역전 교정 · 직답 재작성) |
| holdem-split-pot-rules | ☑ | ☑ | ☑ | H2 7 · FAQ 14(🆕 1) · desc 160→151 조정 · C 수리 ~10(H2 2 직답 «Pot bị chia khi…») |
| holdem-reading-the-board | ☑ | ☑ | ☑ | H2 10 · FAQ 12(🆕 1) · nuts H2 고정 · C 수리 ~14(glossary 앵커 «giải nghĩa các thuật ngữ trong poker» · 은유 직역 교정) |

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
| counterfeit(ed) (tiebreak) | **bị counterfeit** · 첫 등장 «bị counterfeit (đôi của bạn bị board làm mất giá trị)» | B fork · 영어 차용 원칙(§3-A ④) · 코퍼스 미확인 |
| board texture (reading) | **texture (kết cấu board)** 1회 풀이 · 이후 texture | B fork · 코퍼스 미확인 |
| floor (split · reading FAQ) | **floor** «(người quản lý sàn)» 1회 풀이 | B fork · §3-A ④ 방향 |
| top pair · top set (reading) | 영어 그대로(풀이 없음 · EN 용법) | B fork · 🅳 레인 표기와 갈리면 헤드가 통일 |
| flush draw (flush · reading) | **flush draw (chờ thùng)** 1회 병기 | §3-A ③ 축어 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (6편 전부) | 51편 안 + 도구 | **편차 0** · 🆕 도구 앵커 `/vi/calculator` 2(hand-rankings · reading-the-board · 도구 FAQ 축어) · 🆕 hand-rankings FAQ 23 → `/vi/blog/holdem-probability` · B 실측: `check:intl-links` 미번역 대상 8건(probability·starting-hands-chart·icm·glossary) = 다른 레인 몫 · 빼지 않는다 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `holdem-kicker.ts:118` «TDA 2024 Rule 19» · `holdem-split-pot-rules.ts:116` «TDA 2024 Rule 20» · `holdem-reading-the-board.ts:174` «TDA 2024 Rule 12» | TDA 현행 판본은 **2026 Rules v1.0(2026-09-07)**이고 번호가 바뀌었다(playing the board 19→20 · odd chip 20→21 · cards speak 12→13 · side pots 21→23) | L-B §6-5(아스트라 10-08 · pokertda.com 원문 직접 열람). 규칙 내용은 같다 — vi는 EN 인용 축어로 옮기고, EN 갱신 여부는 헤드 판정.

- `holdem-hand-rankings.ts:222` «Always check whether your flush cards are also *consecutive* before you assume a straight flush.» | 퍼즐 요지(플러시인 줄 알았는데 SF)와 교훈 문장 방향이 거꾸로 — «…before you assume it's just a flush» | 딜러·네이티브 렌즈 일치(중간). vi는 «trước khi mặc định đó chỉ là thùng»으로 바로잡아 옮겼다(EN과 갈림).
- `holdem-hand-rankings.ts:384` FAQ «worst possible hand is 7-5-4-3-2» | 5장 기준으로는 맞으나 홀덤 7장 리버 베스트5 최악은 9-8-7-5-4 | 딜러 렌즈(낮음 · 렌즈 밖). vi는 EN 축어 유지.
- `holdem-kicker.ts:128` «Board A♦ 7♣ 2♥ Q♠ 4♦, no straight or flush out there» | 3♣5♣이면 휠(A-2-3-4-5) 가능 — «no flush possible»만 참 | 아스트라 B1(높음). vi는 «không thể có thùng và chẳng ai trong hai chúng tôi có sảnh»로 좁혔다.
- `holdem-kicker.ts` 관련 글 그리드 카드 2(→ tiebreak-rules) 라벨 «Hand Rankings» | 대상이 tiebreak 글인데 라벨이 hand-rankings — 다른 5편은 «Tiebreaker» | 네이티브 렌즈 A-34(낮음). vi는 브리프 지시(EN 라벨 승계)대로 «Thứ hạng tay bài» 유지 — EN을 «Tiebreaker»로 고치면 vi도 «So bài cùng hạng»으로.
- `holdem-split-pot-rules.ts:89` «If not, the board plays and you're likely chopping.» | 내가 보드를 못 넘어도 상대가 넘으면 chop이 아니다 — reading-the-board L96 예시(KQ vs A/77)와 같은 글 안에서 상충 | 아스트라 C-2(높음). vi는 «trừ khi một đối thủ cải thiện được board» 조건절을 붙였다.

## 헤드 요청
- (없음 — 위 EN-먼저 후보는 머지 때 판정만)
- 용어 통일 판정 2(네이티브 A-28·A-32): ① 액션 첫 등장 병기 «call (theo)»·«raise (tố)»·«fold (bỏ bài)»를 **족보 6편에서도** 편마다 적용할지(이 레인은 «dealer (người chia bài)»만 6편 전부 적용 · 액션 병기는 미적용) ② 족보 영어 병기를 편마다 할지(kicker·flush-vs-straight는 첫 문단 일괄 병기 없음 · 나머지 4편은 있음).
- kicker H3 «Kicker trong một cái nhìn»(«Kickers at a glance» 확정 카피) — 아스트라·네이티브 모두 직역투 지적. 확정 카피라 손대지 않았다 → 헤드가 «Tóm tắt về kicker»로 바꿀지 판정.

## 미결
- 카피 열어둔 판단 2(브리프 §1-H ⑥): hand-rankings desc «xác suất từng tay» 구(🅲 레인 이의 시 삭제) · seoTitle 뒷부 «Thứ tự bài poker mạnh nhất» 확정.
- «board có đôi» vs 🅶 «mặt bài có đôi» 표기 통일 = 헤드 머지 때.
- hand-rankings H2 10 «Thứ hạng tay bài…» — 브리프 흡수표는 «thứ hạng bài poker»(30)를 H2 10에 흡수한다고 적었으나 확정 카피에 그 구가 없다(SEO 렌즈 · 낮음 · 볼륨 30이라 조치 불요 가능).
- «the board plays» 번역형 = «board chơi cho cả bàn»(kicker·split 통일 · 네이티브 B-1) vs 아스트라 «mọi người đều chơi theo board» 권고 — 현행 유지. 헤드 용어 스윕에서 재판정 가능.
