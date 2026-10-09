# vi-rules 진행 — 🅰 규칙(기존 6편 재작업)

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-A-rules.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🅰는 신규가 아니라 **기존 7월판 6편을 EN 현행으로 다시 쓰는 것**이다 — slug·URL 그대로 · index.ts 안 건드림 · 🔴 제목·본문의 «Theo/Tố/Bỏ bài»·«Mù nhỏ/Mù lớn»·«Sảnh Thượng»·«bánh xe»를 §3-A 정본(call·raise·fold·blind·SB/BB·thùng phá sảnh hoàng gia·wheel)으로 교체(§3-D ②③) · betting-actions 액션 4종 H2 = «X trong poker là gì» 축어 · beginners에 «poker 2 lá vs 5 lá·xì tố» 1문단(§3-C 「레인 A로 넘기는 처리」).

## 상태 — A ✅(10-09 · 브리프 `docs/vi-lanes/rules-brief.md` · Fable 카피 1회) / B ✅(10-09 · 6편 · 자기 게이트 🔴 0 · 빌드 통과) / C ✅(10-09 · 렌즈 4종 + 아스트라 + 2차 교열 · 게이트 전건 🔴 0 · 빌드 통과) · 커밋 = 이 파일을 담은 커밋(헤드 머지 대기)

> 실행 기록(AUTONOMY-LIMITS): A = 2026-10-09 13:50경 시작(정본·L-A·EN 6편 통독) · 14:08 브리프 집필 착수 · 14:30 Fable 카피 회수·재측정(6/6 한도 안 · 금지 헤드 0 · 본체 수정 2) · 마감 14:35 · 한도 90분 안 · 자식 = Fable 서브 1(카피 판정 · 종료 확인) · 사용량 지표 미관측(추정하지 않는다).
> B = 2026-10-09 16:07 시작(`git merge main` c003d6d6 · 정본 §3-A·§3-C·§5 · ms §5 · 브리프 §0 통독) · 16:08 집필 포크 6개 병렬 착수(편당 1 · 입력 = 브리프 해당 절 + EN + 기존 vi 7월판만) · 16:19 6편 회수 · 본체 게이트 = `audit:hard --locale=vi` 6/6 0err 0warn · `check:structure --locale=vi` 🅰 결손 0(🟠 2편은 🅱·🅴 몫) · `check:drift` 🅰 6편 ✅ · `npx next build` exit 0(919 페이지 · sitemap 미변경) · 금지 토큰 grep 0 · «tố/mù» 잔존 29건 = 전부 첫 등장 괄호 병기·구두 인용 1회 자리 · 마감 16:30경 · 한도 90분 안 · 자식 = fork 6(전부 종료 확인) · 사용량 미관측.
> C = 2026-10-09 16:46 시작(`git merge main` b5cfd180 · ms §6 · vi §3-A·§3-B·§5 · REVIEW-PROTOCOL 3층) · ① 게이트 전건(audit 6/6 0err · structure 🅰 결손 0 · drift ✅ 6 · meta·seo-sync 0 · intl-links 26건 = 전부 51편 안 미번역 대상 · `npx next build` exit 0) · ② §13 전사 대조 스크립트(카드·수치 집합 · vi 구분자 정규화) 불일치 0 — vi-only 수치는 전부 직답·현지 추가 FAQ 재진술 · 손검산 재확인 6자리 ✔ · ③ 17:00 렌즈 4종 병렬(Opus) + 아스트라(codex gpt-6-astra read-only · 스크래치 사본) · ④ 판정·반영 17:05~17:12(치환 ≈126건 · 3배치) · ⑤ 2차 교열(반영 diff) 지적 10 → 전건 반영 · 게이트 재통과 · 마감 17:2x · 한도 90분 안 · 자식 = Opus 서브 5(렌즈 4 + 2차 교열 1) + codex 1(전부 종료 확인) · 사용량 미관측.
> 🔴 모델 메모: A·B·C 세션 모두 **Fable 5.1**로 돌았다(HARDEN.md 규격은 본체 Opus 5.5 · 카피 서브만 Fable). 사장님이 연 창의 모델이라 그대로 진행 — C는 규격대로 Opus 5.5 창에서 여는 것을 권한다(판단·§13 검산은 상위 모델이면 충분 · 비용만의 문제). C도 Fable 창에서 돌았다.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ | ✅ H2 17/16 · H3 8/8 · FAQ 13/12 · 링크 19/16 · 🔴 7장 예시 표(EN L77~81)는 게이트 미검사(헤더 «Bài của bạn | Board»를 홀카드 라벨로 못 잡음) → B 손검산 ✔(A-A-7-7-K 투페어 · 8-8-8-4-4 풀하우스 · 보드 로열) · C 재검산 | ✅ 직답↔EN 중복 9자리 해소 · showdown/kicker/range 병기 보강 · «hung hãn»→«hung hăng» · «đôi hạng nhì»→«đôi Át thua kicker» · 7장 표 재검산 ✔ | 현지 추가 H2 1(poker là gì · 2 lá vs 5 lá · xì tố 고정문) · FAQ +1~2 · P0 = 2·4 법칙 조건(L309·L314) |
| holdem-game-order | ✅ | ✅ H2 17/17 · H3 13/13 · FAQ 13/11 · 링크 14/13 · 쇼다운 이미지·풀핸드 2문단 게이트 미검사 → B 손검산 ✔(A♥A♦ vs K♥K♣ on 10♣7♥J♦4♠9♣ = Át 승 · A♠K♥ 투페어 vs 9♦9♣ 세트 = 세트 승 · 팟 198.000) | ✅ 오역 1(«hành động trước khi flop đã ra»→«đầu tiên sau khi») · «cầm cái» 3→0 · 직답↔EN 중복 7자리 · 족보 표 영어 병기 소문자 · 카드 제목 통일 · 풀핸드 재검산 ✔ | FAQ 11 복원(현 7) + 추가 2(dealer vs nút dealer · chia bài) · H2 4·5·6 «X trong poker là gì» 정의형 |
| holdem-betting-actions | ✅ | ✅ H2 12/12 · H3 5/5 · FAQ 10/8 · 링크 11/10(+glossary) · min-raise 산수 ✔($10+$10=$20 · $14+$10=$24) · «tố» 잔존 = 용어 1행·괄호·구두 인용 «hô "tố"» 1회 | ✅ 직답 WSOP 과장 1(«mỗi lỗi»→«phần lớn») · check 조건 정합(«chưa ai bet»→«không có cược đang mở») · 직답↔EN 중복 5자리 · «lá chip»→«chip» 3 · 직역투 2 · min-raise FAQ 재검산 ✔ | H2 4종 «X trong poker là gì» 축어 · FAQ +2(bet · cách tính min raise) · «tố» 74 → 교체 |
| holdem-blind-meaning | ✅ | ✅ H2 12/12 · H3 1/1 · FAQ 10/8 · 링크 16/16 · pot odds 검산 ✔(1,5/5,5 = 27%) · «mù» 잔존 5 = 괄호 병기 + FAQ 10 «cược "mù" (blind)» | ✅ 지적 최소(동사 «nhận straddle»→«đặt» · FAQ 따옴표 · limp 풀이 · EN 밖 문장 1 삭제) · pot odds 2,7:1 재검산 ✔ | «mù» 146 → blind/SB/BB · FAQ +2(ai trả ante/BBA · vì sao gọi là blind) · 유일한 «Trả lời nhanh» 편 |
| holdem-all-in-rules | ✅ | ✅ H2 8/8 · H3 10/9 · FAQ 7/7 · 링크 1:1 · side pot 전건 손검산 ✔(3인 300/100 · 4인 400/300/600=1.300 · 현지 H3 200/200 반환 · 재오픈 $24 · 표 8✗/11✓/14✓) · P0 L65·Lỗi 1 반영 | ✅ 직답 «người all-in chỉ tranh main pot» 일반화 → «stack ngắn nhất» 한정 · Rule 16 조건 «vòng cược hoàn tất»→«mọi hành động cược của những người còn lại đã kết thúc» 2자리 · «lá chip»→«chip» 3 · 직답↔EN 중복 4자리 · side pot 전건 재검산 ✔ | P0 = 무언 고액 칩 L65 갈라 쓰기 · Mistake 1 한정어 · H3 +1(2인 초과 칩 반환 100/300) |
| holdem-showdown-rules | ✅ | ✅ H2 11/10 · H3 4/4 · FAQ 9/7 · 링크 7/7 · 핸드 손검산 ✔(J♥10♥ SF Q-high vs K♣Q♦ · imageAlt K 원페어) · 체크다운 순서 SB→BB→BTN | ✅ 오역 1(«lật trước khi bị call»→«khi bị call, bạn phải lật trước») · 금지어 변형 1(FAQ «hành động cược chủ động cuối cùng»→정본) · L67 muck 권리 «biến mất»→«bị thu hẹp» · Rule 16 조건 L41 · 직답 3자리 축약 · 핸드 재검산 ✔ | H2 +1(Showdown trong poker là gì?) · FAQ +2(thứ tự lật bài · lật bài tẩy) · «người chủ động cuối» 16 → last aggressor 정본 |

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
- lib/posts-en/texas-holdem-rules-for-beginners.ts:299 | «win at least 1 in 7 times (about 14%) for this call to be profitable» — 정확히 1/7은 손익분기(120×1/7 − 20×6/7 = 0), «이익»은 «그보다 많이» | 아스트라 C · vi L328은 EN 축어 유지.
- lib/posts-en/holdem-all-in-rules.ts tldr · Mistake 1 | «an all-in player can only win the main pot» 일반화 — L71 본문은 «stack 한도까지»로 맞게 썼다(4인 표의 B는 200 all-in으로 side pot 1 참가) | SEO·아스트라 C · vi 직답은 «stack ngắn nhất»로 한정했고 tldr(확정 카피)은 EN 축어.
- lib/posts-en/holdem-game-order.ts:368 FAQ | «when someone is all-in, every hand gets tabled (TDA 2024 Rule 16)» — 본문 L156은 «and betting is complete» 한정어가 있고 FAQ만 빠짐 | 딜러 C · vi FAQ도 EN 1:1.
- lib/posts-en/holdem-blind-meaning.ts H2 4개(small/big blind 루틴 · ante · dead blind · 블라인드 플레이) · holdem-showdown-rules.ts cards speak H2 | H2 직후 40~75단어 직답 없이 긴 단락(117~136단어) 또는 이미지로 시작 — vi는 EN 구조 1:1 유지(직답을 더 넣으면 중복 결함 재생산) | SEO C.
- lib/posts-en/holdem-game-order.ts:358 | «most poker apps and sites have a free-play mode» — vi 브리프 «앱 추천 금지»와 긴장(EN 축어라 유지) | 교열 C.
- lib/posts-en/* 6편 | TDA 판본 «2024» 인용 | L-A §4-D: TDA 공식 페이지 현행 = 2026 Rules v1.0(2026-09-07) · §17·§18·§19·§45·§46·§49·§50 대조 필요 — vi는 EN 축어 유지, 판본 갱신은 EN-먼저(헤드 판단).

## 헤드 요청
- vi PDF 생성(`scripts/generate-beginner-pdf.mjs` · 헤드 소유) — 생기면 beginners 앵커 «(PDF tiếng Anh)» 삭제 · game-order 도입·Related 카드 «PDF in được» 정합.
- `/vi/glossary` 신설(계획 §4-C ①) — betting-actions 본문 앵커 «thuật ngữ poker» 1회가 이를 전제로 걸린다.
- 머지 순서: 🅰 6편은 미번역 링크 때문에 단독 머지 시 prebuild(check:intl-links) 실패 — 51편 머지 뒤 빌드(계획 §4-A).
- (판단) 이 세션 모델 = Fable 5.1(규격 Opus 5.5) — A·B·C 전부 Fable 창에서 돌았다.
- **클러스터 표기 판정 3건(🅰 6편 안에서도 갈림 · 51편 용어 스윕 때 한 번에)**: ① 조항 표기 «TDA 2024 Rule 16» vs «Luật 16 của TDA 2024» vs «TDA 2024, Luật 16» — 🅰 안에서는 글 단위 일관만 맞췄다(all-in·betting·game-order = Rule · showdown·blind = Luật) ② live bet = «cược sống / straddle sống»(game-order·blind) vs «còn hiệu lực»(betting) ③ 인용 부호 — showdown 본문 «» · 나머지 5편 곧은 따옴표(FAQ Q도 글 관례를 따랐다 · §6′ 기요메 2건은 곧은 따옴표로 조정 · 문구 불변).
- `scripts/audit-hardening.mjs` CLUSTERS에 betting-actions · all-in-rules · showdown-rules 등재(형제 대조 미시도 경고 3편).

## 미결 (C → 헤드)
- **렌즈 기각 목록(재론 방지)**: showdown FAQ «Bạn chỉ bắt buộc lật khi còn tranh pot…»(조건절이 이미 한정) · blind/showdown 직답 추가(EN 구조 · 위 EN-먼저) · FAQ 따옴표 §6′ 기요메 복귀(글 내 관례 우선) · all-in L66 «vừa đủ để call»(EN «every chip needed» 뉘앙스 — 축어 범위) · «đều như đồng hồ»·«luật nhà»·«muck (úp bài bỏ)» 명사 자리 · «$0,5/$1»(EN 축어) · blind H2 7 «trước flop/preflop» 혼용(낮음) · game-order L157/L159 직답↔«No-Limit không có mức trần»(보완이지 중복 아님).
- 아스트라 보고 원문 = 스크래치(세션 종료 시 소멸) — 요지는 위 EN-먼저·편별 열에 옮겼다. 보고 끝 «검산한 자리 목록»은 B 손검산과 전건 일치(카드 10 · 사이드팟 4 · min-raise 4 · pot odds 3 · 족보 빈도 10).
