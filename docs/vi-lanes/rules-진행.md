# vi-rules 진행 — 🅰 규칙(기존 6편 재작업)

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-A-rules.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🅰는 신규가 아니라 **기존 7월판 6편을 EN 현행으로 다시 쓰는 것**이다 — slug·URL 그대로 · index.ts 안 건드림 · 🔴 제목·본문의 «Theo/Tố/Bỏ bài»·«Mù nhỏ/Mù lớn»·«Sảnh Thượng»·«bánh xe»를 §3-A 정본(call·raise·fold·blind·SB/BB·thùng phá sảnh hoàng gia·wheel)으로 교체(§3-D ②③) · betting-actions 액션 4종 H2 = «X trong poker là gì» 축어 · beginners에 «poker 2 lá vs 5 lá·xì tố» 1문단(§3-C 「레인 A로 넘기는 처리」).

## 상태 — A ✅(10-09 · 브리프 `docs/vi-lanes/rules-brief.md` · Fable 카피 1회) / B ✅(10-09 · 6편 · 자기 게이트 🔴 0 · 빌드 통과) / C ☐ · 커밋 (B WIP 커밋 — 아래 실행 기록)

> 실행 기록(AUTONOMY-LIMITS): A = 2026-10-09 13:50경 시작(정본·L-A·EN 6편 통독) · 14:08 브리프 집필 착수 · 14:30 Fable 카피 회수·재측정(6/6 한도 안 · 금지 헤드 0 · 본체 수정 2) · 마감 14:35 · 한도 90분 안 · 자식 = Fable 서브 1(카피 판정 · 종료 확인) · 사용량 지표 미관측(추정하지 않는다).
> B = 2026-10-09 16:07 시작(`git merge main` c003d6d6 · 정본 §3-A·§3-C·§5 · ms §5 · 브리프 §0 통독) · 16:08 집필 포크 6개 병렬 착수(편당 1 · 입력 = 브리프 해당 절 + EN + 기존 vi 7월판만) · 16:19 6편 회수 · 본체 게이트 = `audit:hard --locale=vi` 6/6 0err 0warn · `check:structure --locale=vi` 🅰 결손 0(🟠 2편은 🅱·🅴 몫) · `check:drift` 🅰 6편 ✅ · `npx next build` exit 0(919 페이지 · sitemap 미변경) · 금지 토큰 grep 0 · «tố/mù» 잔존 29건 = 전부 첫 등장 괄호 병기·구두 인용 1회 자리 · 마감 16:30경 · 한도 90분 안 · 자식 = fork 6(전부 종료 확인) · 사용량 미관측.
> 🔴 모델 메모: A·B 세션 모두 **Fable 5.1**로 돌았다(HARDEN.md 규격은 본체 Opus 5.5 · 카피 서브만 Fable). 사장님이 연 창의 모델이라 그대로 진행 — C는 규격대로 Opus 5.5 창에서 여는 것을 권한다(판단·§13 검산은 상위 모델이면 충분 · 비용만의 문제).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ | ✅ H2 17/16 · H3 8/8 · FAQ 13/12 · 링크 19/16 · 🔴 7장 예시 표(EN L77~81)는 게이트 미검사(헤더 «Bài của bạn | Board»를 홀카드 라벨로 못 잡음) → B 손검산 ✔(A-A-7-7-K 투페어 · 8-8-8-4-4 풀하우스 · 보드 로열) · C 재검산 | ☐ | 현지 추가 H2 1(poker là gì · 2 lá vs 5 lá · xì tố 고정문) · FAQ +1~2 · P0 = 2·4 법칙 조건(L309·L314) |
| holdem-game-order | ✅ | ✅ H2 17/17 · H3 13/13 · FAQ 13/11 · 링크 14/13 · 쇼다운 이미지·풀핸드 2문단 게이트 미검사 → B 손검산 ✔(A♥A♦ vs K♥K♣ on 10♣7♥J♦4♠9♣ = Át 승 · A♠K♥ 투페어 vs 9♦9♣ 세트 = 세트 승 · 팟 198.000) | ☐ | FAQ 11 복원(현 7) + 추가 2(dealer vs nút dealer · chia bài) · H2 4·5·6 «X trong poker là gì» 정의형 |
| holdem-betting-actions | ✅ | ✅ H2 12/12 · H3 5/5 · FAQ 10/8 · 링크 11/10(+glossary) · min-raise 산수 ✔($10+$10=$20 · $14+$10=$24) · «tố» 잔존 = 용어 1행·괄호·구두 인용 «hô "tố"» 1회 | ☐ | H2 4종 «X trong poker là gì» 축어 · FAQ +2(bet · cách tính min raise) · «tố» 74 → 교체 |
| holdem-blind-meaning | ✅ | ✅ H2 12/12 · H3 1/1 · FAQ 10/8 · 링크 16/16 · pot odds 검산 ✔(1,5/5,5 = 27%) · «mù» 잔존 5 = 괄호 병기 + FAQ 10 «cược "mù" (blind)» | ☐ | «mù» 146 → blind/SB/BB · FAQ +2(ai trả ante/BBA · vì sao gọi là blind) · 유일한 «Trả lời nhanh» 편 |
| holdem-all-in-rules | ✅ | ✅ H2 8/8 · H3 10/9 · FAQ 7/7 · 링크 1:1 · side pot 전건 손검산 ✔(3인 300/100 · 4인 400/300/600=1.300 · 현지 H3 200/200 반환 · 재오픈 $24 · 표 8✗/11✓/14✓) · P0 L65·Lỗi 1 반영 | ☐ | P0 = 무언 고액 칩 L65 갈라 쓰기 · Mistake 1 한정어 · H3 +1(2인 초과 칩 반환 100/300) |
| holdem-showdown-rules | ✅ | ✅ H2 11/10 · H3 4/4 · FAQ 9/7 · 링크 7/7 · 핸드 손검산 ✔(J♥10♥ SF Q-high vs K♣Q♦ · imageAlt K 원페어) · 체크다운 순서 SB→BB→BTN | ☐ | H2 +1(Showdown trong poker là gì?) · FAQ +2(thứ tự lật bài · lật bài tẩy) · «người chủ động cuối» 16 → last aggressor 정본 |

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
| one-chip rule | luật một chip (one-chip rule) | betting-actions EN L192 · 7월판 표기 승계 (B) |
| non-standard fold | "non-standard fold" 영어 유지 | betting-actions EN L105 · WSOP Rule 84 축어 (B) |
| capped pot | pot bị "cap" | betting-actions EN L148 · 7월판 승계 (B) |
| raise a raise | raise một cú raise | betting-actions EN L141 풀이 (B) |
| burn card | lá bài đốt (burn card) | beginners·game-order — 7월판 승계 · 두 편 표기 일치 여부 C 대조 (B) |
| live bet | cược sống (live bet) | blind-meaning (B) |
| "I want to see that hand" | «tôi muốn xem tay bài đó» (규칙 이름은 영어 축어) | showdown-rules (B) |

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

## 미결 (B → C)
- **C 전사 대조 정규화 대상**: vi 천 단위 마침표(`1.300` · `198.000` · `12.000` · `1.326` 등) · 소수 쉼표(`2,5 BB` · `43,8%` · `$0,50`) — 계획 §5 «§6-② 정규화» 그대로.
- **게이트 미검사 카드 문단 → C 손검산 재확인**: beginners 7장 예시 표(EN L77~81) · game-order 쇼다운 이미지 alt + 풀핸드 1판(A♠K♥ vs 9♦9♣) · showdown L107 예시(J♥10♥ vs K♣Q♦) · all-in-rules 보드 alt(홀카드 없음 — 검산 대상 아님).
- **확정 카피 조판 2건(문구 동일 · C 교열 판단)**: beginners FAQ 5 «sảnh nhỏ» 기요메 → 본문은 `"sảnh nhỏ"` 직선 따옴표 · game-order FAQ 11 «đốt» 기요메 그대로(베트남어 본문 관례는 "đốt") — 확정 카피라 B는 안 바꿈.
- **C 네이티브 렌즈 확인 자리**: beginners 포지션 표 «Range vừa phải / mở rộng range» + 카드 «range mở bài»(§3-A ④ range 정본 적용) · beginners 족보 치트시트 10행 전부 «vi (en)» 병기(«이후 vi 단독» 규칙 vs 참조용 표) · blind-meaning H2 7 heads-up 직답에 EN L127 재진술 1문장 추가(새 사실 없음) · burn card 표기 beginners·game-order 일치 여부.
- **B 재량으로 넣지 않은 것**: showdown 브리프 «현지 추가 4»(비교 2행 «Nhiều nơi viết…» vs TDA Rule 17) — 새 표 추가 + 출처 비지목 위험 · C가 필요하다고 보면 추가. game-order «straddle 상세 → holdem-straddle 앵커»(브리프 §0-4)는 EN에 링크가 없어 EN 1:1 유지(풀이 1회만).
- `audit:hard`가 6편 전부 «CLUSTERS 정의에 없다 → 형제 대조 미시도»로 찍는다(스크립트 = 헤드 소유).
