# vi-rules 진행 — 🅰 규칙(기존 6편 재작업)

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-A-rules.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🅰는 신규가 아니라 **기존 7월판 6편을 EN 현행으로 다시 쓰는 것**이다 — slug·URL 그대로 · index.ts 안 건드림 · 🔴 제목·본문의 «Theo/Tố/Bỏ bài»·«Mù nhỏ/Mù lớn»·«Sảnh Thượng»·«bánh xe»를 §3-A 정본(call·raise·fold·blind·SB/BB·thùng phá sảnh hoàng gia·wheel)으로 교체(§3-D ②③) · betting-actions 액션 4종 H2 = «X trong poker là gì» 축어 · beginners에 «poker 2 lá vs 5 lá·xì tố» 1문단(§3-C 「레인 A로 넘기는 처리」).

## 상태 — A ✅(10-09 · 브리프 `docs/vi-lanes/rules-brief.md` · Fable 카피 1회) / B ☐ / C ☐ · 커밋 —

> 실행 기록(AUTONOMY-LIMITS): A = 2026-10-09 13:50경 시작(정본·L-A·EN 6편 통독) · 14:08 브리프 집필 착수 · 14:30 Fable 카피 회수·재측정(6/6 한도 안 · 금지 헤드 0 · 본체 수정 2) · 마감 14:35 · 한도 90분 안 · 자식 = Fable 서브 1(카피 판정 · 종료 확인) · 사용량 지표 미관측(추정하지 않는다).
> 🔴 모델 메모: 이 A 세션은 **Fable 5.1**로 돌았다(HARDEN.md 규격은 본체 Opus 5.5 · 카피 서브만 Fable). 사장님이 연 창의 모델이라 그대로 진행 — B·C는 규격대로 Opus 5.5 창에서 여는 것을 권한다(판단·§13 검산은 상위 모델이면 충분 · 비용만의 문제).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ | ☐ | ☐ | 현지 추가 H2 1(poker là gì · 2 lá vs 5 lá · xì tố 고정문) · FAQ +1~2 · P0 = 2·4 법칙 조건(L309·L314) |
| holdem-game-order | ✅ | ☐ | ☐ | FAQ 11 복원(현 7) + 추가 2(dealer vs nút dealer · chia bài) · H2 4·5·6 «X trong poker là gì» 정의형 |
| holdem-betting-actions | ✅ | ☐ | ☐ | H2 4종 «X trong poker là gì» 축어 · FAQ +2(bet · cách tính min raise) · «tố» 74 → 교체 |
| holdem-blind-meaning | ✅ | ☐ | ☐ | «mù» 146 → blind/SB/BB · FAQ +2(ai trả ante/BBA · vì sao gọi là blind) · 유일한 «Trả lời nhanh» 편 |
| holdem-all-in-rules | ✅ | ☐ | ☐ | P0 = 무언 고액 칩 L65 갈라 쓰기 · Mistake 1 한정어 · H3 +1(2인 초과 칩 반환 100/300) |
| holdem-showdown-rules | ✅ | ☐ | ☐ | H2 +1(Showdown trong poker là gì?) · FAQ +2(thứ tự lật bài · lật bài tẩy) · «người chủ động cuối» 16 → last aggressor 정본 |

## 신규 용어
| EN | 채택 vi | 근거 |
|---|---|---|
| full raise | raise đủ mức (full raise) | all-in-rules · betting-actions — §3-A ④에 없음 · 브리프 §0-4 |
| uncalled bet | cược không ai theo (uncalled bet) | all-in-rules L71·L237 |
| effective stack | stack hiệu dụng (effective stack) | §3-A ④ 추가 용어 행(아스트라 C) — 등재 확인용 |
| tournament director (TD) | giám đốc giải đấu (tournament director, TD) | showdown-rules TDA 18-B «director's discretion» |
| floor | floor (người quản lý sàn) | all-in-rules L221 · showdown L145 |
| tank / tanking | tank (suy nghĩ lâu) | showdown L121 |
| string bet | string bet (đẩy chip nhiều nhịp) | betting-actions L132·L229 |
| table stakes | table stakes (chỉ được cược số chip trên bàn) | all-in-rules L37 |
| run it twice | run it twice (chia phần bài còn lại hai lần) | all-in-rules L249 |
| show one, show all | «show one, show all» (cho một người xem là cả bàn được xem) | showdown L61 |
| dead button / dead blind | nút dealer chết (dead button) · blind chết (dead blind) | blind-meaning L42·L131 · game-order L52 |
| blind steal / re-steal | blind steal (cướp blind) · re-steal | blind-meaning L145 |
| Big Slick | Big Slick(영어 유지) | game-order L87·L218 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| texas-holdem-rules-for-beginners | /downloads/texas-holdem-rules-for-beginners.pdf | EN PDF 유지 + 앵커 «(PDF tiếng Anh)» (vi PDF 없음 · `public/downloads/`에 de·id·ja·ko·pt·zh만 · 브리프 §0-5) |
| holdem-game-order | https://en.wikipedia.org/wiki/Texas_hold_%27em | EN 링크 유지 + «(tiếng Anh)» — vi.wikipedia 대응 문서는 «Xì tố»(다른 게임 이름)라 대체 안 함 |
| 6편 공통 | 51편 안 미번역 대상(🅱~🅶 머지 전) | EN 1:1로 `/vi/…`에 건다 · prebuild `check:intl-links`는 51편 머지 전 실패가 정상 → B는 `npx next build` 단독 |
| (추가 링크) | beginners FAQ «Thùng trong poker là gì?» → hand-rankings · flush-vs-straight · game-order FAQ «chia bài» → beginners H2 8 · betting-actions «thuật ngữ» → `/vi/glossary`(배포 회차 신설 예정) · blind FAQ ante → tournament | 브리프 각 편 «현지 추가» 앵커 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- (A에서 발견 없음 · fr 레인 후보 2건은 EN 축어 유지: beginners L353 «43,8% at showdown» · game-order L119 «turn check → river bet = weakness») — C에서 vi 네이티브 렌즈가 더 찾으면 추가.
- lib/posts-en/* 6편 | TDA 판본 «2024» 인용 | L-A §4-D: TDA 공식 페이지 현행 = 2026 Rules v1.0(2026-09-07) · §17·§18·§19·§45·§46·§49·§50 대조 필요 — vi는 EN 축어 유지, 판본 갱신은 EN-먼저(헤드 판단).

## 헤드 요청
- vi PDF 생성(`scripts/generate-beginner-pdf.mjs` · 헤드 소유) — 생기면 beginners 앵커 «(PDF tiếng Anh)» 삭제 · game-order 도입·Related 카드 «PDF in được» 정합.
- `/vi/glossary` 신설(계획 §4-C ①) — betting-actions 본문 앵커 «thuật ngữ poker» 1회가 이를 전제로 걸린다.
- 머지 순서: 🅰 6편은 미번역 링크 때문에 단독 머지 시 prebuild(check:intl-links) 실패 — 51편 머지 뒤 빌드(계획 §4-A).
- (판단) 이 세션 모델 = Fable 5.1(규격 Opus 5.5) — B·C 창 모델 선택은 사장님 몫.

## 미결
- (B가 채움)
