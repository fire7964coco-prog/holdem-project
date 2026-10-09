# vi-strat 브리프 — 🅳 전략 8편 (레인 A · 2026-10-09)

> **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)뿐이다.** 웹·MCP·다른 로케일 파일(fr·ms·id 포함)은 B에서 열지 않는다(ms 규격 §3 🟢). 사실·수치·카드의 출처는 EN 축어뿐.
> 정본: `docs/vi-cluster-plan.md` §3-A(고정문·용어 — **판단 없이 따른다**) · §3-C(소유표) · §5(fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §5(B 규격).
> EN 기준 해시 **`b57cb658`** — 8편 모두 그 뒤 EN 변경 0(`git diff --stat b57cb658..HEAD -- lib/posts-en/<8편>` 실측 10-09 · 빈 출력). `masterUpdated` = 아래 각 편 EN `updated`.
> 키워드·SERP 출처 = `docs/keyword-bank/vi-serp/L-D-strat.md`(0-2 · DataForSEO 2704/vi · 2026-10-08) + `vi-core-volumes.md` §2 🅳·§4 — 레인 A는 재조사하지 않았다(계획 §2-①). 볼륨은 그 문서 축어.
> 🔴 **확정 카피(seoTitle·desc·tldr·title·tags·H2 세트·FAQ 문항)는 B·C가 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 8편 공통 — B가 매 편 지킬 것

### 0-1. 고정문 (계획 §3-A ①)
| 자리 | 정본 |
|---|---|
| 직답 블록 라벨 | `> **Trả lời nhanh**` (EN «Quick answer» 자리 전부 · 다른 라벨 금지) |
| readnext | `:::readnext[Đọc tiếp]` |
| FAQ H2 | `## Câu hỏi thường gặp` · 문항 `**Q. …**` + 빈 줄 + `A. …` (스키마 조건 · 「FAQ」 단독 금지) |
| 관련 글 H2 | `## Bài viết liên quan` |
| 마무리 H2 | `## Những điều cần nhớ` (EN «Takeaways / Playbook, In Short / One More Time / 3 Things to Remember» 자리 전부 · 개수 라벨 금지) |
| readTime | `"N phút"` (EN 숫자 그대로) |
| 화자 | 1인칭 **tôi** · 독자 **bạn** · 존칭·anh/chị 금지 |

### 0-2. 문체·조판 (§3-A ②)
- **bạn**체 명령형 훅(«Hãy nhìn… / So sánh… / Thử…») · 딱딱한 직역 금지 · 포커 커뮤니티가 실제 쓰는 표현.
- 숫자 = **베트남식**: 천 단위 마침표(`1.326`) · 소수점 쉼표(`2,5 BB` · `11,8%` · `19,6%`) · **`%` 붙임(공백 없음)** · 비율 `2,7:1` · `3:1` · 화폐 `$` 앞붙임(`$1/$2` · `$14`) — 🔴 **값은 EN 축어, 구분자만 바꾼다.** `~80%` · `≈1 trong 8,5` · `4:1`.
- 카드: 영어 랭크 문자 + 무늬 기호(`A♠ K♥ Q♦ J♣ 10♠`). 하이라이트 `==A♣K♣==` 그대로. 풀어 쓸 때 «đôi Át», «lá K», «đôi 9»(«già/đầm/bồi» 금지). 무늬 이름 = chuồn · rô · cơ · bích.
  - 🔴 **무늬 붙은 카드의 T는 `10`으로**(`T♠` → `10♠` · §3-A ②). EN에 `T♥`가 있는 편: position-play L196·L213(`Q♥T♥7♠`) · continuation-bet L105·L129(`Q♥T♥7♠`). **핸드 클래스 표기 `ATs` · `KTo` · `TT` · `JTs` · `T9s` · `T8s`는 그대로.** C의 전사 대조 스크립트는 `T♠`↔`10♠`를 같은 토큰으로 정규화한다. 보드 범위 표기 `A‑8‑3`·`7‑6‑5`·`K‑7‑2`는 EN 그대로(하이픈 종류 포함).
- **preflop · postflop**(붙여 씀) · 문중 flop · turn · river 소문자 · 족보명 문중 소문자(«một đôi», «thùng») · `Texas Hold'em`(곧은 아포스트로피) · «Holdem» 금지.
- 🔴 금지: 백틱 · `**` 중첩 · tldr 안 마크다운 · content에 히어로 이미지 넣기(렌더러가 그린다) · slug·이미지 경로 변경 · 영어 직역투 · 성조 부호 누락 · «xì tố/xì phé»로 게임 지칭.

### 0-3. 용어 (§3-A ④ 발췌 — 이 클러스터에 나오는 것 · 본문 = 영어 정본 · 첫 등장 «en (vi 풀이)» · 이후 영어)
| EN | vi 본문 | 비고 |
|---|---|---|
| position / in position / out of position | **vị trí** · **in position (IP)** · **out of position (OOP)** · 풀이 1회 «có vị trí / không có vị trí» | 첫 등장 약어 병기 |
| UTG · UTG+1 · LJ · HJ · CO · BTN · SB · BB · EP · MP · LP | 약어 그대로 · 첫 등장 풀어 쓰기 «Under the Gun (UTG)» · «lojack (LJ)» · «hijack (HJ)» · «cutoff (CO)» · «button (BTN)» · «small blind (SB)» · «big blind (BB)» · «vị trí sớm (EP) / giữa (MP) / muộn (LP)» | 🔴 tightpoker 오역(«Người cầm súng» · «Người cầm cờ thứ hai») 금지 — 좌석명은 영어 |
| dealer / dealer button | 사람 = **dealer**(«người chia bài» 1회) · **nút dealer (BTN)** | 소문자 «nút dealer» |
| blind / small blind / big blind / ante | **blind**(첫 등장 «blind (mù — cược bắt buộc)») · **small blind (SB)**(«mù nhỏ» 1회) · **big blind (BB)**(«mù lớn» 1회) · 이후 SB·BB · **ante** | «mù» 단독 금지 |
| check / bet / call / raise / fold | **check**(«kiểm tra» 금지) · **bet**(동사 «cược / đặt cược» 허용) · **call**(첫 등장 «call (theo)» · 동사 «theo / theo bài» 허용) · **raise**(첫 등장 «raise (tố)» · 🔴 산문 «tố» 금지) · **fold**(첫 등장 «fold (bỏ bài)» · 동사 «bỏ bài» 허용) | 액션 구분이 핵심인 글이라 «tố» 혼용 금지 |
| open-raise / first-in / flat / cold-call | **open-raise** · «mở raise» 허용 · **flat (call)** · **cold call** | — |
| re-raise / 3-bet / 4-bet / 5-bet / squeeze | **3-bet · 4-bet · 5-bet**(첫 등장 «3-bet (re-raise, tố lại)» 1회만 — 이후 «tố lại» 금지) · **squeeze** | 🔴 «3 bet» 띄어쓰기 단독 = 브랜드 → 본문도 «3-bet» 하이픈 |
| limp / open-limp / over-limp / limp-reraise / iso-raise / limper | **limp · open-limp · over-limp (limp theo sau) · limp-reraise · iso-raise (raise cô lập)** · 사람 = **limper** | — |
| c-bet / delayed c-bet / double·triple barrel / value bet / check-raise / donk bet | **c-bet**(첫 등장 «c-bet (continuation bet — cược tiếp tục)») · **delayed c-bet (c-bet trì hoãn)** · **double barrel · triple barrel** · **value bet** · **check-raise**(«hồi mã thương» 금지) · **donk bet (lead)** | — |
| bluff / semi-bluff / bluff-catcher / float | **bluff · semi-bluff · bluff-catcher · float** | «tố lừa» 금지 |
| all-in / shove / jam / push-fold | **all-in**(«tất tay» 1회) · **shove**(jam 허용) · **push/fold** | — |
| flop / turn / river / street / preflop / postflop | **flop · turn · river · preflop · postflop** · 베팅 라운드 = **vòng cược** · «street» = **vòng** 허용 | 🔴 sảnh(족보) ≠ vòng(라운드) |
| board / community cards / hole cards | **bài chung**(첫 등장 «bài chung (board)» · 이후 «board» 허용) · **bài tẩy** | — |
| hand / starting hand / range | 패 = **tay bài** · 한 판 = **ván bài** · 시작 핸드 = **bài khởi đầu** · **range**(«dải bài»·«khoảng bài»·«phạm vi» 금지) | «100 hand» = «100 ván» |
| pot / pot odds / implied odds / equity / EV / fold equity / equity realization / outs / draw | **pot · pot odds (tỷ lệ pot) · implied odds (tỷ lệ cược ngầm) · equity («phần pot kỳ vọng của bạn» — «tỷ lệ thắng»은 win probability에만) · EV (giá trị kỳ vọng) · fold equity · «mức equity thực hiện được (equity realization)» · outs · draw (bài chờ) · flush draw · OESD «sảnh hở hai đầu (OESD)» · gutshot «gutshot (sảnh hở giữa)» · backdoor** | 첫 등장 1회 풀이 |
| set / trips / two pair / top pair / overpair / kicker / nuts | **set · trips**(정의 «set = đôi trên tay + 1 lá trên board») · **hai đôi** · **top pair (đôi cao nhất)** · **overpair (đôi trên board)** · **kicker (lá phụ)** · **nuts** | 족보는 베트남어: thùng · sảnh · cù lũ · tứ quý · sám cô(bộ ba) |
| stack / effective stack / chip / buy-in / bankroll / SPR | **stack · stack hiệu dụng (effective stack) · chip · buy-in · bankroll (quỹ tiền chơi poker) · SPR («SPR — stack hiệu dụng chia cho pot»)** | — |
| tight-aggressive (TAG) / LAG / nit / calling station / fish / donk / reg | **tight-aggressive (TAG)** · «chơi chặt – đánh mạnh» 풀이 1회 · **LAG · nit · calling station · fish (người chơi yếu) · donk · reg** | fish 헤드 = holdem-fish 소유 |
| solver / GTO / exploit / MDF / blocker / linear·polarized·merged range | **solver · GTO**(H2·본문에서 «GTO poker»로 붙임) · **khai thác đối thủ (exploit)** · **MDF («tần suất phòng thủ tối thiểu (MDF)»)** · **blocker** · **range tuyến tính (linear) · range phân cực (polarized) · merged range**(linear≠merged — 정의 병기) | 헤드 조준 금지(§3-C ⑪) |
| cash game / tournament / 6-max / full ring / heads-up / bubble / ICM | **cash game · giải đấu (tournament)**(«đánh tour» 1~2회 허용) · **6-max · full ring (bàn 9 người)** · **heads-up** · **bubble · ICM** | 대문자 «Tournament/Cash Game» 금지 |
| board texture / dry / wet / connected / rainbow / monotone / paired / two-tone | **kết cấu board (board texture)** · **board khô (dry) / ướt (wet)** · «liên kết (connected)» · **rainbow** · **board đồng chất (monotone)** · **mặt bài có đôi (paired board)** · «hai chất (two-tone)» | — |
| sunk cost / laydown / hero call | **chi phí chìm (sunk cost)** · **laydown (bỏ bài lớn)** · **hero call** | — |

### 0-4. 도구 링크 앵커 문구 (§3-A ⑤ — 고정 · 도구가 헤드의 주인임을 앵커로 알린다)
- `/vi/hand-chart` = «bảng bài khởi đầu theo vị trí» · 보조 «bảng range preflop theo vị trí» · «Poker Hand Chart»
- `/vi/calculator` = «máy tính xác suất poker» · 기능별 «máy tính equity / outs / pot odds»
- `/vi/glossary`(배포 회차 신설 — 링크 건다) = «thuật ngữ poker»
- `/vi/solver` = **없다**. 솔버는 이름만(«solver của HoldemMaster» · 링크 없음 · §3-A ⑤). 🅶 GTO 글로 가는 링크는 §0-5.
- 🔴 역방향 금지: 글로 가는 링크·카드 제목에 «máy tính …» · «bảng bài khởi đầu / bảng range / hand chart» · «solver» 구를 쓰지 않는다. 단어 «bảng» 자체는 실제 표가 있는 자리(«bảng xếp hạng», «bảng xác suất»)에서 허용.

### 0-5. 링크 규칙
- EN 내부링크는 **1:1**로 `/vi/blog/<같은 slug>` · 도구 `/en/<tool>` → `/vi/<tool>` · readnext·thumb 속성 그대로(`"thumb:/images/…"`).
- 8편의 EN 링크 대상은 **전부 51편 + 도구 안**이다(추출 실측 10-09 · 아래 각 편 «링크» 절) → 링크 편차 0이 기본. 예외 둘:
  - starting-hands-chart `/downloads/poker-starting-hands-chart.pdf`(영어 PDF) · `/en/quiz`(vi 퀴즈 없음 — `app/vi/`에 quiz 없음 실측): **대상 그대로 두고 앵커에 «(tiếng Anh)»** 를 붙인다(fr 선례 · 편차 아님 · 진행 파일에 기록).
  - GTO 역링크(continuation-bet L65 `a-high-board-cbet` · L129 `3bet-pot-bet-sizing` · position-play L194 `low-board-check-raise` · 3bet L301 `3bet-pot-cbet`): **vi는 🅶 13편이 같은 배포에 나가므로 연다**(fr 선례 · continuation-bet 파일 머리 주석 «7개 번역본에는 전파하지 않는다»는 fr 이후 선례로 해제 — 진행 파일 «헤드 요청»에 명시). 문단은 vi 문맥으로 재저작 · 수치 불변(vi 구분자: `98,2%` · `98,4%` · `45,1%` · `54,9%` · `57,8%`).
  - 🔴 GTO 썸네일 `gto-srp-dry-ace-oop-en.webp` · `gto-3bp-dynamic-oop-en.webp`는 영어 오버레이다 — `-vi` 변형 없음(실측 10-09 · `-en`만 존재). B는 **`-en.webp`를 그대로 쓰고**, 진행 파일 «헤드 요청»에 «🅶 레인이 `-vi` 변형을 만들면 교체» 1행(이미 기재).
- 같은 클러스터 상호 앵커(§3-C): **positions ↔ position-play 첫 문단 1개씩**(position-play 첫 문단에 «các vị trí trong poker» → positions 앵커 추가 · EN L32 strategy 링크는 유지) · **when-to-fold → holdem-betting-actions** 정의 첫 등장 1개(«fold (bỏ bài) trong poker là gì» 앵커 · §3-C ③) · **strategy Decision 2 → `/vi/hand-chart`** «bảng bài khởi đầu theo vị trí» 1개(EN L87 starting-hands-chart 링크는 유지 · 도구 CTA 추가) · **limping 정의 H2 → 없음**(🅰 betting-actions가 limp FAQ를 1줄+앵커로 줄인다 · 이 글이 정의 주인).
- 🔴 링크 앵커 텍스트는 베트남어 · 대상 slug의 vi 글이 아직 없어도 건다(배포 1회 · 계획 §1).

### 0-6. 구조 패리티
H2/H3·표 행·리스트·이미지·FAQ 수·디렉티브(`:::stripe` · `:::compare` · `:::tip[…]:::` · `:::stat[…]:::` · `:::steps` · `:::rangechart:::` · `:::quiz:::` · `:::readnext`)·원시 HTML 줄(`<div style=…>` 카드 · `</div>`)·하이라이트 색(`==r:` · `==g:` · 색 없음 `==…==`)은 **EN과 같게**(많은 것 허용 · 적은 것 = 결손). 확정 카피의 «(추가)» H2는 현지 추가로 허용.
이미지 alt·title(캡션)은 베트남어로 재저작 · 경로 불변 · 히어로는 content에 넣지 않는다.
«Bài viết liên quan» 카드 그리드(`<div style="display:grid…">`)의 제목·부제는 베트남어로, **카테고리 라벨**은 아래 사전으로 통일(§3-A ⑥ + 이 레인 신설 → 진행 파일 «신규 용어» 등재 · 기존 vi 8편의 «Bài trụ cột / Trụ cột / Mù (Blinds) / Thứ tự chơi» 등은 🅰이 정리):

| EN 라벨 | vi | | EN 라벨 | vi |
|---|---|---|---|---|
| Strategy | Chiến thuật | | Odds | Xác suất |
| Position Strategy | Chiến thuật vị trí | | Positions | Vị trí |
| Starting Hands | Bài khởi đầu | | Hand Rankings | Thứ hạng tay bài |
| Glossary | Thuật ngữ | | Blinds | Blind |
| Order of Play | Thứ tự hành động | | Beginner Guide | Hướng dẫn người mới |
| Pillar | Kiến thức nền tảng | | Tournament | Giải đấu |

**GEO 직답**: 각 H2 직후 40~75단어 자기완결 단락(EN이 짧은 자리는 vi에서 EN 내용 범위 안에서 채운다 · 새 사실 금지). 필요한 자리엔 `> **Trả lời nhanh**`.

### 0-6-A. 확정 카피 읽는 법
- 각 편 «확정 카피»의 title·seoTitle·desc·tldr·tags = 필드에 **축어**. H2/FAQ 표는 EN 줄(L##)과 1:1 — 그 자리 헤딩·질문을 축어로 쓴다.
- «(추가)» H2는 표시된 자리에 넣고, 본문은 괄호에 적힌 EN 절의 내용만으로 쓴다(새 수치 금지). «🔧 Opus 조정» 표시는 A에서 이미 반영된 최종값이다.
- 괄호 속 주석(«앵커 …», «… 금지»)은 B에 대한 지시다 — 헤딩 텍스트에 넣지 마라.

### 0-7. B 등록·게이트 (ms 규격 §5 + 계획 §5)
- 틀 = `lib/posts-vi/holdem-blind-meaning.ts`(**필드 모양만** — 🔴 문면은 7월판 «Mù» 표기라 문장 복사 금지) · `slug`·`image`·`category`·`emoji`·`keepImagesInBody` = EN 축어 · `date`·`updated` = 집필일 · `masterUpdated` = 각 편 EN `updated` · `readTime: "N phút"`.
- `lib/posts-vi/index.ts`의 **[vi-strat import 시작~끝] · [vi-strat 배열 시작~끝] 두 칸에만** 등록(import 이름 = camelCase: holdemStrategy · holdemPositions · holdemPositionPlay · holdemStartingHandsChart · holdemLimping · holdem3bet · holdemContinuationBet · holdemWhenToFold).
- 자기 게이트(편마다): `npm run audit:hard -- --locale=vi --slug=<slug>` 🔴 0 → 끝에 `npm run check:intl-links` · `npm run check:structure`(vi 행에서 내 슬러그 결손 0) · `npm run build`(prebuild의 intl-links·calc-parity는 다른 레인 전까지 실패가 정상 → `npx next build`로 확인 · fr-rank 선례).
- 멈춘다: 「**집필 8편 완료 · 자기 게이트 🔴 0** — ▶ `/clear` → 「HARDEN.md 읽고 C 시작해」」

---

## holdem-strategy — EN updated 2026-10-05 · masterUpdated = "2026-10-05"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Texas Hold'em Strategy: The 5 Decisions Behind Every Winning Hand",
seoTitle: "Why Poker 'Tips' Never Stuck — Texas Holdem Strategy in 5 Decisions",
desc: "Winning poker isn't ten disconnected tips — it's the same five decisions every hand: position, hand selection, raise-or-fold, c-betting, and when to let go.",
tldr: "Every winning Texas Hold'em decision reduces to five repeatable questions: where am I sitting (position), is this hand worth playing, do I raise or fold rather than open-limp, do I keep betting on the flop, and when do I let go? A tight-aggressive player who answers those five well folds ~80% of hands preflop, plays them aggressively when they do, and beats almost every casual game — no memorized tip list required.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-05",
keepImagesInBody: true,
readTime: "14 min",
emoji: "♠️",
image: "/images/holdem-strategy-hero.webp",
imageAlt: "A focused poker player weighing a decision at a green-felt Texas Hold'em table, chips and community cards in front of them mid-hand",
tags: ["texas holdem strategy", "poker strategy", "poker strategy for beginners", "how to win at texas holdem", "tight aggressive", "when to fold in poker", "when to bluff", "when to 3-bet", "c-bet strategy"],
# title 길이 65
# seoTitle 길이 67
# desc 길이 156
# tldr 길이 418
```

### 구조 (EN content L19~L275 · L## = EN 파일 줄)
#### 헤딩
- L25 ### What actually separates winners from everyone else
- L36 ## Poker Strategy Isn't a List of Tips — It's Five Decisions
- L58 ## Decision 1 — Where Am I Sitting? (Position)
- L74 ## Decision 2 — Is This Hand Even Worth Playing? (Hand Selection)
- L91 ## Decision 3 — Raise or Fold. Don't Just Limp.
- L107 ## Decision 4 — Do I Keep Betting on the Flop? (The C-Bet)
- L121 ## Decision 5 — When Do I Fold? (The Decision That Saves the Most Money)
- L133 ## The Math You Can't Skip
- L143 ## The 6 Leaks That Cost Beginners the Most — and the Fix
- L164 ## Tight-Aggressive: The One Style to Start With
- L180 ## FAQ
- L240 ## The Five Decisions, One More Time
- L252 ## Related Posts

#### FAQ 14문항
- L182 **Q. What is the best strategy for Texas Hold'em?**
- L186 **Q. What is the best poker strategy for beginners?**
- L190 **Q. How do you win at Texas Hold'em?**
- L194 **Q. When should you fold in poker?**
- L198 **Q. When should you bet vs. check in poker?**
- L202 **Q. When should you bluff in poker?**
- L206 **Q. When should you 3-bet?**
- L210 **Q. When should you raise vs. call?**
- L214 **Q. How many hands should you play in Texas Hold'em?**
- L218 **Q. What does tight-aggressive (TAG) mean?**
- L222 **Q. How often should you continuation bet (c-bet)?**
- L226 **Q. Is poker a game of skill or luck?**
- L230 **Q. What is GTO poker?**
- L234 **Q. How do you get better at poker?**

#### 표 2개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L44 (6행) | # | The decision | The question you're really asking | Deep dive |
- L149 (7행) | The leak | Why it bleeds chips | The fix |

#### 디렉티브 · 하이라이트 색 {(색 없음)}
- L27 :::stripe
- L32 :::
- L175 :::readnext[Keep reading]
- L178 :::

#### 이미지 3 (경로 불변 · alt·캡션은 베트남어 재저작)
- L60 ![A player sitting on the dealer button with two face-down hole cards and a chip stack, the seat that acts last on every postflop street](/images/holdem-strategy-button-seat.webp "The button acts last on every postflop street — the single most profitable seat at the table")
- L93 ![Three numbered tiles under a RAISE / FOLD headline — OVER-LIMP with chips and a seat marker, BIG BLIND with 1.5 ÷ 5.5 and 27%, SET-MINING with a pair of fives and 11.8%](/images/holdem-strategy-raise-or-fold.webp "Raise or fold first-in — the main discounts are over-limping in position, a 27% big-blind defence, and set-mining")
- L123 ![Infographic of A♣ K♣ against a rainbow 2♥ 7♦ 9♠ flop, met by a check-raise and answered with a gold FOLD banner](/images/holdem-strategy-fold-ace-high.webp "The most profitable move in poker is the one nobody notices — folding a beaten hand before it costs you a stack")

#### 원시 HTML 22줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L42 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L52 </div>
- L147 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L158 </div>
- L254 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L255   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L256     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L257     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L258     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why the button prints money</div>
- L260   <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-r…
- L261     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L262     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L263     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The 80% you should be folding</div>
- L265   <a href="/en/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;te…
- L266     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L267     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Why Limping Costs You</div>
- L268     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise or fold — the case against just calling</div>
- L270   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L271     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L272     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L273     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The 10-second math behind every fold</div>
- L275 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L46 /en/blog/holdem-position-play [md] ✅51
- L47 /en/blog/holdem-starting-hands-chart [md] ✅51
- L48 /en/blog/holdem-limping [md] ✅51
- L49 /en/blog/holdem-betting-actions [md] ✅51
- L50 /en/blog/holdem-pot-odds [md] ✅51
- L60 /images/holdem-strategy-button-seat.webp "The button acts last on every postflop street — the single most profitable seat at the table" [img] img(경로 불변)
- L62 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" [md] ✅51
- L70 /en/blog/holdem-blind-meaning [md] ✅51
- L78 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" [md] ✅51
- L87 /en/blog/holdem-starting-hands-chart [md] ✅51
- L93 /images/holdem-strategy-raise-or-fold.webp "Raise or fold first-in — the main discounts are over-limping in position, a 27% big-blind defence, and set-mining" [img] img(경로 불변)
- L97 /en/blog/holdem-limping [md] ✅51
- L103 /en/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp" [md] ✅51
- L109 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" [md] ✅51
- L113 /en/blog/holdem-continuation-bet [md] ✅51
- L117 /en/blog/holdem-betting-actions [md] ✅51
- L123 /images/holdem-strategy-fold-ace-high.webp "The most profitable move in poker is the one nobody notices — folding a beaten hand before it costs you a stack" [img] img(경로 불변)
- L129 /en/blog/holdem-when-to-fold "thumb:/images/holdem-when-to-fold-hero.webp" [md] ✅51
- L129 /en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp" [md] ✅51
- L137 /en/blog/holdem-pot-odds [md] ✅51
- L139 /en/blog/holdem-probability [md] ✅51
- L176 /en/blog/holdem-position-play [readnext] ✅51
- L177 /en/blog/holdem-starting-hands-chart [readnext] ✅51
- L224 /en/blog/holdem-continuation-bet [md] ✅51
- L248 /en/blog/holdem-starting-hands-chart [md] ✅51
- L248 /en/blog/holdem-position-play [md] ✅51
- L248 /en/blog/holdem-pot-odds [md] ✅51
- L255 /en/blog/holdem-position-play [html] ✅51
- L260 /en/blog/holdem-starting-hands-chart [html] ✅51
- L265 /en/blog/holdem-limping [html] ✅51
- L270 /en/blog/holdem-pot-odds [html] ✅51

### 키워드 (DataForSEO google_ads 2704·vi · 2026-10-08 · 출처 vi-core-volumes §2 🅳 + L-D §1-B · `-` = 데이터 없음)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| bluff poker | 110 | 🔴 소유표 ⑰ — 이 글이 받는다 → (추가) H2 «Bluff trong poker là gì — khi nào nên bluff?» + tags |
| chiến thuật poker | 50 | seoTitle · H1 · tags |
| poker strategy | 50 | tags · 본문 1회 |
| bluff trong poker · bluff trong poker la gì | 50 · 40 | 추가 H2 · FAQ 6 |
| mẹo chơi poker | 40 | 훅 대비 재료(«mẹo không phải chiến thuật») · tags |
| cách chơi poker chuyên nghiệp | 30 | tags · 본문 |
| cách chơi poker giỏi | 20 | FAQ 14 · tags |
| semi bluff | 20 | 추가 H2 본문(EN FAQ 6 «semi-bluff» 축어) |
| chiến thuật chơi poker · cách thắng poker · bí quyết chơi poker · poker strategy for beginners · cách chơi poker hiệu quả · cách chơi poker hay · bí quyết chơi poker giỏi · tight aggressive poker · tag poker | 각 10 | tags·FAQ 문구 재료 |
| chiến thuật poker cash game · chiến thuật poker tournament · chiến thuật đánh tour poker(자동완성) | `-` | FAQ 1문 또는 (추가) H2(EN 수치 없음 → 앵커 `holdem-tournament-vs-cash-game`) |
| 함정 🚫 | — | «mẹo chơi poker luôn thắng» 10 = 약속형 금지 · «cách chơi poker» 2,900 · «luật poker» = 🅰 규칙 소유(첫 문단 «규칙을 아는 사람 대상» + `texas-holdem-rules-for-beginners` 앵커 1) · «poker strategy chart» = 도구 · «Chơi Poker có hợp pháp không»(related · 합법성) 조준 금지 · «What does the 80/20 rule mean»(PAA · 정의 원문 미확인) 쓰지 않는다 |

### PAA·자동완성 (축어)
- PAA(«mẹo chơi poker» · «poker strategy»): «Làm thế nào để chơi bài poker?» · «Có những kiểu người chơi poker nào?» · «What is the best strategy in poker?» · «Is poker mostly luck or skill?» · «What does the 80/20 rule mean in poker?»(🔴 사용 금지) · «What is the 7/2 rule in poker?»(= starting-hands FAQ 소유). «cách chơi poker giỏi» related: «Làm cách nào để chơi poker giỏi?».
- 자동완성: chiến thuật poker tournament · chiến thuật đánh tour poker · chiến thuật poker cash game · chiến thuật trong poker · chiến thuật chơi poker tour · mẹo chơi poker giỏi · chơi poker giỏi bạn không nên · cách chơi poker hiệu quả · cách chơi poker hold em · bí kíp chơi poker · cách thắng trong poker.

### 현지 SERP (L-D §3 «chiến thuật poker»·«cách chơi poker giỏi»·«mẹo chơi poker» · §5 정독)
- 상위: thegioipoker «Mẹo chơi Poker»(장비몰) · congly «Chơi Poker thế nào là hợp pháp?»(🔴 합법성 · 3위) · natural8 «10 mẹo nhanh…»(2,300단어 · H2 «#2 Tăng cược lần 3 ( 3-bet)…» · «#5 Đừng đặt cược tiếp theo với 100% tay bài»·«#6 Bỏ bài khi đến vòng river») · natural8 «Cách chơi Poker giỏi hơn»(Bước 1~10 · FAQ «Bluff có thực sự cần thiết…») · propokervn «Chiến Thuật Poker Cho Người Mới»(H2 5개 · 표 0 · 경험담 0) · wikipoker «10 Mẹo cho người mới chơi Poker đánh đâu thắng đó»(이미지 37) · ggpoker «Đừng Chơi Mọi Ván Bài…»(H3 8개).
- 그들이 주는 것: 팁 10개 목록 · «Đừng …» 금지형 나열 · 룸 CTA. 빠진 것: **결정 순서(골격)** · 수치(VPIP ~80% 폴드 · 11,8% 셋 · 27% BB 방어) · 1인칭 핸드 · 무출처 «solver … khoảng 50%»(natural8) 대비 설정 명시된 수치.
- 우리가 더 줄 것: ① «팁 10개가 아니라 결정 5개» 골격(EN 승계) ② 결정마다 수치 + 심화 글 앵커 ③ 1인칭 A♣K♣ 폴드 핸드(L127) ④ bluff H2(소유표 ⑰ · 51편에 bluff 글 없음).
- H2 처방(L-D §9-2): 첫 H2 → «chiến thuật poker ≠ mẹo» 훅 · «Chiến thuật poker cash game và tournament khác nhau thế nào?»(자동완성 3종 · 앵커로만) · «Những kiểu người chơi poker»(PAA) → TAG H2 안에서 · «Poker là may rủi hay kỹ năng?»(PAA = FAQ 12).

### 소유표 (계획 §3-C)
- 주인인 검색어: chiến thuật poker · poker strategy · mẹo chơi poker(훅 대비) · cách chơi poker giỏi/chuyên nghiệp · **bluff poker · bluff trong poker (là gì) · semi bluff**(⑰).
- 쓰면 안 되는 헤드(seoTitle·H1·tags): «vị trí trong poker»(⑤→positions) · «bảng / chart / hand chart»(⑥→`/vi/hand-chart`) · «GTO poker»·«range poker»·«solver»(⑪ — EN FAQ 13 «What is GTO poker?»는 유지하되 각도 = «GTO vs khai thác — 초심자는 어디서?» · 답 1~2문장 + 솔버 이름만) · «fold trong poker là gì»(③→betting-actions) · «máy tính»(⑦) · «poker tournament / giải đấu»(⑩) · «cách chơi poker / luật poker»(🅰).
- 위임 앵커: 결정 1 → holdem-position-play(EN L46·L62) + positions 1회 · 결정 2 → holdem-starting-hands-chart + **`/vi/hand-chart` «bảng bài khởi đầu theo vị trí»**(§0-5) · 결정 3 → holdem-limping · holdem-3bet · 결정 4 → holdem-continuation-bet · 결정 5 → holdem-when-to-fold · 수학 → holdem-pot-odds · holdem-probability.

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 2건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 72 · seoTitle 55(≤60) · desc 155(≤160) · tldr 416 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (72): Chiến thuật poker Texas Hold'em: 5 quyết định đứng sau mọi ván bài thắng
**seoTitle** (55): Vì sao mẹo chơi poker không ăn thua — chiến thuật poker
**desc** (155): Đọc cả chục mẹo chơi poker mà vẫn thua? Thắng không nằm ở mẹo mà ở 5 quyết định lặp lại mỗi ván: vị trí, chọn bài, raise hay fold, c-bet, bỏ bài — 14 phút.
**tldr** (416): Mọi quyết định thắng trong Texas Hold'em đều quy về 5 câu hỏi lặp lại: tôi đang ngồi ở vị trí nào, tay bài này có đáng chơi không, raise hay fold thay vì open-limp, có tiếp tục cược ở flop (c-bet) không, và khi nào nên bỏ bài. Người chơi tight-aggressive trả lời tốt 5 câu đó sẽ bỏ khoảng 80% tay bài preflop, chơi mạnh tay khi đã vào pot và thắng gần như mọi bàn chơi vui — không cần học thuộc danh sách mẹo nào cả.
**tags**: ["chiến thuật poker", "poker strategy", "mẹo chơi poker", "cách chơi poker giỏi", "cách chơi poker chuyên nghiệp", "tight aggressive poker", "bluff poker", "bluff trong poker", "chiến thuật chơi poker", "cách thắng poker"]
#### H2 (EN L## → vi)
- L25 `### What actually separates winners from everyone else` → `### Điều gì thực sự tách người thắng khỏi phần còn lại?`
- L36 `## Poker Strategy Isn't a List of Tips — It's Five Decisions` → `## Vì sao chiến thuật poker không phải danh sách mẹo mà là 5 quyết định?`
- L58 `## Decision 1 — Where Am I Sitting? (Position)` → `## Quyết định 1 — Tôi đang ngồi ở vị trí nào trong poker?`
- L74 `## Decision 2 — Is This Hand Even Worth Playing? (Hand Selection)` → `## Quyết định 2 — Tay bài này có đáng chơi không? (Chọn bài khởi đầu)`
- L91 `## Decision 3 — Raise or Fold. Don't Just Limp.` → `## Quyết định 3 — Raise hay fold? Đừng chỉ limp`
- L107 `## Decision 4 — Do I Keep Betting on the Flop? (The C-Bet)` → `## Quyết định 4 — Có tiếp tục cược ở flop không? (C-bet)`
- L121 `## Decision 5 — When Do I Fold? (The Decision That Saves the Most Money)` → `## Quyết định 5 — Khi nào nên bỏ bài? (Quyết định tiết kiệm nhiều tiền nhất)`
- L133 `## The Math You Can't Skip` → `## Phần toán nào bạn không thể bỏ qua?`
- L143 `## The 6 Leaks That Cost Beginners the Most — and the Fix` → `## 6 lỗ hổng khiến người mới mất tiền nhiều nhất — và cách sửa`
- L164 `## Tight-Aggressive: The One Style to Start With` → `## Có những kiểu người chơi poker nào — và vì sao nên bắt đầu với tight-aggressive (TAG)?`
- (추가) `## Bluff trong poker là gì — khi nào nên bluff?` — bluff poker 110 · bluff trong poker 50 · bluff trong poker la gì 40 · semi bluff 20 (소유표 ⑰ · EN FAQ 6 승격 · 새 수치 없음)
- (추가) `## Chiến thuật poker cash game và tournament khác nhau ở đâu?` — AC «chiến thuật poker cash game» · «chiến thuật poker tournament» · «chiến thuật đánh tour poker» (🔧 Opus 조정: 본문 ≤ 80단어 · «같은 5결정 · 차이는 stack 깊이·ICM» 일반 진술 + holdem-tournament-vs-cash-game 앵커만 · 수치 금지)
- L180 `## FAQ` → `## Câu hỏi thường gặp`
- L240 `## The Five Decisions, One More Time` → `## Những điều cần nhớ`
- L252 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 11/12
#### FAQ (EN → vi)
1. What is the best strategy for Texas Hold'em? → `Chiến thuật poker Texas Hold'em tốt nhất là gì?` (PAA «What is the best strategy in poker?»)
2. What is the best poker strategy for beginners? → `Người mới nên bắt đầu với chiến thuật poker nào?` (poker strategy for beginners 10)
3. How do you win at Texas Hold'em? → `Làm cách nào để chơi poker giỏi và thắng nhiều hơn?` (PAA «Làm cách nào để chơi poker giỏi?» · cách thắng poker 10)
4. When should you fold in poker? → `Trong poker, khi nào nên bỏ bài thay vì call?` (🔧 Opus 조정: when-to-fold FAQ 1 축어와 중복 회피 · 답에 holdem-when-to-fold 앵커)
5. When should you bet vs. check in poker? → `Khi nào nên cược, khi nào nên check?`
6. When should you bluff in poker? → `Khi nào nên bluff trong poker?` (bluff trong poker 50)
7. When should you 3-bet? → `Khi nào nên 3-bet?`
8. When should you raise vs. call? → `Khi nào nên raise thay vì call?`
9. How many hands should you play in Texas Hold'em? → `Nên chơi bao nhiêu phần trăm tay bài trong Texas Hold'em?`
10. What does tight-aggressive (TAG) mean? → `Tight-aggressive (TAG) trong poker nghĩa là gì?` (tight aggressive poker 10 · tag poker 10)
11. How often should you continuation bet (c-bet)? → `Nên c-bet thường xuyên đến mức nào?`
12. Is poker a game of skill or luck? → `Poker là trò chơi may rủi hay kỹ năng?` (PAA «Is poker mostly luck or skill?»)
13. What is GTO poker? → `GTO hay khai thác đối thủ (exploit) — người mới nên bắt đầu từ đâu?` (§4 각도 변경 · «GTO poker» 헤드 조준 안 함)
14. How do you get better at poker? → `Làm thế nào để tiến bộ nhanh hơn ở poker?` (AC «mẹo chơi poker giỏi»)
#### 흡수 키워드
- chiến thuật poker(50) → seoTitle/H1/tags/H2 L36
- poker strategy(50) → tags
- mẹo chơi poker(40) → seoTitle/desc/tags
- cách chơi poker chuyên nghiệp(30) → tags
- cách chơi poker giỏi(20) → tags/FAQ 3
- chiến thuật chơi poker(10) → tags
- cách thắng poker(10) → tags/FAQ 3
- bí quyết chơi poker(10) · bí quyết chơi poker giỏi(10) → FAQ 14 (bí kíp 형태소 본문)
- poker strategy for beginners(10) → FAQ 2
- cách chơi poker hiệu quả(10) · cách chơi poker hay(10) → H2 L143 본문
- tight aggressive poker(10) · tag poker(10) → tags/H2 L164/FAQ 10
- bluff poker(110) · bluff trong poker(50) · bluff trong poker la gì(40) · semi bluff(20) → tags/추가 H2/FAQ 6
- chiến thuật poker cash game · tournament(AC) → 추가 H2
- Có những kiểu người chơi poker nào?(PAA) → H2 L164
- Is poker mostly luck or skill?(PAA) → FAQ 12
- mẹo chơi poker luôn thắng(10) → 조준 안 함(약속형 금지 · 훅 «không ăn thua»로만)

### 하지 말 것
- EN FAQ 13 «What is GTO poker?» — vi 문항은 확정 카피대로 · 답은 EN 축어 논지(GTO = 균형 전략 · 저스테이크는 exploit · TAG부터) 1~2문장 + «solver của HoldemMaster» 이름만(링크 없음 · `/vi/solver` 없음).
- «mẹo chơi poker luôn thắng»·«đánh đâu thắng đó» 류 약속 문구 금지(훅은 «왜 mẹo가 안 통하나»).
- 합법성(congly 기사) · 실머니 · 운영사명(natural8·GGPoker) 언급 금지.
- 추가 H2 bluff는 **EN FAQ 6 답 + L202 범위 안의 내용만**(새 빈도·수치 금지).
- 공통: §0 전부 · 확정 카피 변경 금지 · EN-먼저 후보는 진행 파일로.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L29 · L30 · L31 · L70 · L78 · L82 · L83 · L85 · L93 · L103 · L113 · L114 · L117 · L123★ · L127★ · L137 · L139★ · L145 · L151 · L184 · L208 · L216 · L224 · L236 · L243

★ 카드가 든 줄 축어:
- L123: ![Infographic of A♣ K♣ against a rainbow 2♥ 7♦ 9♠ flop, met by a check-raise and answered with a gold FOLD banner](/images/holdem-strategy-fold-ace-high.webp "The most profitable move in poker is the one nobody notices — folding a beaten hand before it costs you a stack")
- L127: Here's a concrete one from a hand I played. I raised ==A♣K♣== and got one caller. The flop came ==2♥ 7♦ 9♠== — a total miss. I have ace-high, no pair, no draw. I fire a c-bet (Decision 4, in position, dry board), and my opponent check-**raises** me. At that point the math is simple: I have the best possible high card and nothing else, and a check-raise on that board is almost never a bluff at low stakes. So I fold ace-high and lose the minimum. Two years earlier I'd have "just called to see" — and paid off a set of nines every time.
- L139: **Set-mining odds** explain why small pairs are speculative. Call a raise with pocket fives hoping to flop a set — three-of-a-kind — and you'll connect only about **11.8% of the time, roughly 1 in 8.5.** When it works it's gorgeous: flop ==5♣ K♠ 2♦== holding ==5♠5♦== and you've got a hidden set that stacks an overpair. But because you miss ~88% of flops, set-mining is only profitable when the effective stacks are deep enough to pay you off when you hit — a rough guide is **at least ~15–20× the size of the call.** Shallow stacks? That speculative call becomes a leak. The full [odds and probability chart](/en/blog/holdem-probability) has every number you'll ever need.

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L19: For my first two years I did what everyone does: I read the tip lists. "Ten quick tips." "Nine essential rules." I could recite them all — play fewer …
- L21: What finally made me a winning player wasn't a longer list. It was realizing that **every hand of Texas Hold'em is the same five decisions, asked over…
- L127: Here's a concrete one from a hand I played. I raised ==A♣K♣== and got one caller. The flop came ==2♥ 7♦ 9♠== — a total miss. I have ace-high, no pair,…
- L137: **Pot odds** tell you whether a call is profitable: compare the price of the call to the size of the pot, then to your chance of hitting a winning car…

---

## holdem-positions — EN updated 2026-09-28 · masterUpdated = "2026-09-28"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Poker Positions: Every Seat Name & Chart",
seoTitle: "Your Seat Changes Names Every Hand — Poker Positions Chart",
desc: "The names move with the button, not the chairs. Every poker position name — UTG, hijack, cutoff, button — plus seat numbers, 6-max map, and who acts first.",
tldr: "Poker positions are seat names measured from the dealer button — UTG, lojack, hijack, cutoff, button, and the blinds — and they normally move one seat clockwise every hand. Preflop, UTG acts first and the big blind last; postflop, the small blind acts first and the button last (heads-up the button is the small blind: first to act preflop, last postflop). Physical seat numbers never move; positions do.",
category: "strategy",
date: "2026-06-13",
updated: "2026-09-28",
keepImagesInBody: true,
readTime: "12 min",
emoji: "🎯",
image: "/images/holdem-positions-hero.webp",
imageAlt: "Top-down view of a professional poker table showing 9 player positions with chip stacks and a gold dealer button",
tags: (EN 없음 → 확정 카피의 tags 신설),
# title 길이 40
# seoTitle 길이 58
# desc 길이 155
# tldr 길이 404
```

### 구조 (EN content L27~L263 · L## = EN 파일 줄)
#### 헤딩
- L40 ## What Are the Positions at a Poker Table? (Full Seat Map)
- L66 ## Poker Position Names & Abbreviations: UTG, LJ, HJ, CO, BTN, SB, BB
- L87 ## Poker Seat Numbers vs Positions — Seat 1 Is Not a Position
- L107 ## What Is UTG in Poker?
- L117 ## The Hijack and Lojack — and Why They're Called That
- L130 ## The Cutoff and the Button (Dealer Position)
- L140 ## The Blinds: SB and BB Seats
- L153 ## Who Acts First in Poker — Preflop vs Postflop (Do the Blinds Go First?)
- L170 ## Poker Positions by Player Count: Heads-Up to 10-Handed (6-Max vs Full Ring)
- L197 ## FAQ
- L229 ## The Takeaways
- L240 ## Related Posts

#### FAQ 7문항
- L199 **Q. What does UTG stand for in poker?**
- L203 **Q. What is the hijack in poker?**
- L207 **Q. What is the lojack in poker?**
- L211 **Q. Who goes first, the small blind or the big blind?**
- L215 **Q. How many positions are there in 6-max poker?**
- L219 **Q. Do poker positions change every hand?**
- L223 **Q. What is Seat 1 in poker?**

#### 표 4개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L48 (10행) | Seat | Abbr | Zone | Preflop | Postflop |
- L70 (9행) | Abbr | Full name | Group | What it refers to |
- L157 (3행) | Street | First to act | Last to act |
- L174 (8행) | Players | Preflop acting order (first → last) |

#### 디렉티브 · 하이라이트 색 {(색 없음)}
- L95 :::compare
- L101 :::
- L192 :::readnext[Keep reading]
- L195 :::

#### 이미지 1 (경로 불변 · alt·캡션은 베트남어 재저작)
- L46 ![Nine-handed poker table with chip stacks at every seat and the dealer button marked D in front of one player](/images/holdem-button-position-hero.webp "The dealer button sets every seat's position and the order of play")

#### 원시 HTML 18줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L242 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L243   <a href="/en/blog/texas-holdem-rules-for-beginners" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);bor…
- L244     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Beginner Guide</div>
- L245     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Texas Hold'em Rules for Beginners</div>
- L246     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">How a full hand works from deal to showdown</div>
- L248   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L249     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Position Strategy</div>
- L250     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">In vs Out of Position Strategy</div>
- L251     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Opening ranges and what to do from every seat</div>
- L253   <a href="/en/blog/holdem-game-order" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px…
- L254     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Order of Play</div>
- L255     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Order of Play in Texas Hold'em</div>
- L256     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Preflop → flop → turn → river action sequence</div>
- L258   <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L259     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blinds</div>
- L260     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small Blind & Big Blind Explained</div>
- L261     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why they exist and how to play them correctly</div>
- L263 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L31 /en/blog/texas-holdem-rules-for-beginners [md] ✅51
- L46 /images/holdem-button-position-hero.webp "The dealer button sets every seat's position and the order of play" [img] img(경로 불변)
- L83 /en/blog/holdem-position-play [md] ✅51
- L113 /en/blog/holdem-position-play [md] ✅51
- L136 /en/blog/holdem-position-play [md] ✅51
- L149 /en/blog/holdem-blind-meaning [md] ✅51
- L166 /en/blog/holdem-showdown-rules [md] ✅51
- L166 /en/blog/holdem-game-order [md] ✅51
- L186 /en/blog/holdem-position-play [md] ✅51
- L186 /en/blog/holdem-starting-hands-chart [md] ✅51
- L193 /en/blog/holdem-position-play [readnext] ✅51
- L194 /en/blog/holdem-starting-hands-chart [readnext] ✅51
- L236 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" [md] ✅51
- L236 /en/blog/holdem-starting-hands-chart [md] ✅51
- L236 /en/blog/holdem-hand-rankings [md] ✅51
- L243 /en/blog/texas-holdem-rules-for-beginners [html] ✅51
- L248 /en/blog/holdem-position-play [html] ✅51
- L253 /en/blog/holdem-game-order [html] ✅51
- L258 /en/blog/holdem-blind-meaning [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| vị trí trong poker | 70 | seoTitle · H1 · tags · 첫 H2 |
| poker positions · position poker | 70 · 70 | tags(영어 술어 병기 — 영어 쿼리 SERP는 영어 독식이라 seoTitle에 «poker positions» 1회 허용) |
| các vị trí trong poker | 50 | 첫 H2 축어 · tags |
| vị trí poker | 20 | tags |
| utg poker là gì | 20 | H2 L107 축어 · FAQ 1 |
| utg poker · cutoff poker · hijack poker · button poker · lojack poker | 각 10 | H2 L117·L130 · FAQ 2·3 |
| poker position names · poker positions explained · poker positions 6 max · position poker 6 max · under the gun poker · under the gun meaning | 각 10 | H2 L66 · L170 · FAQ 5 |
| poker positions chart · utg poker range | 각 10 | «chart»·«range» = 도구 의도 → 본문 `/vi/hand-chart` 앵커로만(H1·tags 금지) |
| 🔴 오염 | — | under the gun 170(1/8) · under the gun là gì 70(0/10) · utg là gì 30(OTG 교정) → seoTitle·H1·tags 금지 · 포커 결합형 «under the gun poker là gì»·«utg poker là gì»만 |

### PAA·자동완성 (축어)
- PAA(«poker positions»): «What are the names of the different positions on a poker table?» · «What does LJ stand for in poker?» · «What is co in poker?» · «What are the different poker games called?»(무관). «under the gun» PAA: «Under the gun nghĩa là gì?». related(«vị trí trong poker»): «Check trong poker là gì»·«Raise trong Poker là gì»(🅰 소유) · «Utg là gì Poker» · «Under the gun trái nghĩa»(→ 답 = button / vị trí cuối). related(«utg poker»): «Why is it called under the gun in poker» · «UTG+1 poker» · «HJ poker» · «MP poker» · «Button poker».
- 자동완성: vị trí utg trong poker · vị trí ngồi trong poker · vị trí dealer trong poker · vị trí hj trong poker · vị trí button trong poker · vị trí mp trong poker · vị trí co trong poker · cut off trong poker · vị trí trong bàn poker · vị trí đẹp/tốt trong poker(→ position-play) · vị trí bàn poker 8 người · vị trí trên bàn poker · poker positions explained / on table / 6 players / 6 max / 6 handed / diagram / 8 max / chart / names / 9 handed / ranked / table / 9 max / strategy / utg / meaning / mp · poker position names 9 players · utg poker là gì · under the gun poker · under the gun meaning poker · under the gun poker là gì · button trong poker là gì · dead button poker.

### 현지 SERP (L-D §3 «vị trí trong poker» · §5 propokervn · §7)
- 🔴 «vị trí trong poker» 1페이지 6건 중 4건이 Google 자동번역(tightpoker «Người cầm súng đầu tiên (UTG), Người cầm cờ thứ hai (HJ), Người cắt (CO)» 오역 · Quora · wikiHow UTG · WinStar) + reddit tl=vi 3 · natural8 hijack·BB 방어 2. **베트남어 원문 포지션 글이 1페이지에 0** — 우선순위 1(L-D §11).
- propokervn «Vị Trí Trong Poker: Bí Quyết Khai Thác Lợi Thế…»(SERP 밖 · 1,720단어 · H2 «Vị Trí Trong Poker Là Gì?» · «Phân Loại Các Vị Trí…» EP/MP/LP/Blinds · «Bảng Range Tay Bài Theo Vị Trí» · 표 0 · E4 오류 «AA, KK, QQ, JJ, AKs, AQs = 12-15%»).
- 그들이 주는 것: EP/MP/LP 분류 · 일반론. 빠진 것: **좌석 지도 표**(약어 + 베트남어 풀이 · 6/8/9/10인) · 행동 순서표(preflop vs postflop) · 좌석 번호 ≠ 포지션 · 하이잭/로잭 어원 · heads-up 예외 · 라이브 경험담.
- 우리가 더 줄 것: ① EN 표 4개 전부(9-max 지도 · 약어표 · 행동 순서 · 인원별) ② tightpoker 오역 대비 «좌석명은 영어 약어 + 베트남어 풀이» ③ J♥J♠ UTG vs 버튼 경험담(L27~31) ④ `/vi/hand-chart` 포지션 탭 앵커.
- H2 처방(L-D §9-1): «Các vị trí trong poker gồm những vị trí nào? (sơ đồ bàn 6 và 9 người)» · «Vị trí UTG trong poker là gì — vì sao gọi là under the gun?» · «Vị trí HJ, LJ, MP…» · «Vị trí CO (cut off) và button…» · «Vị trí dealer…» · «Vị trí ngồi trong poker: ghế số 1 không phải là một vị trí» · «Vị trí bàn poker 8 người / 6 max». FAQ: «CO là gì trong poker?»(PAA) · «LJ trong poker là gì?»(PAA) · «Utg là gì Poker»(related) · «Under the gun trái nghĩa»(related).

### 소유표 (계획 §3-C ⑤)
- 주인인 검색어: vị trí trong poker · poker positions · position poker · các vị trí trong poker · utg poker là gì · 좌석명 10종(utg·hj·lj·co·button·dealer·mp·sb·bb·ngồi).
- 쓰면 안 되는 헤드: «in position / out of position» · «vị trí tốt nhất / đẹp nhất» · «bảo vệ big blind»(⑤→position-play) · «bảng range / hand chart / poker positions chart»(⑥→`/vi/hand-chart` · «sơ đồ bàn / sơ đồ vị trí» 허용) · «under the gun» 단독(오염).
- 위임 앵커: 플레이 전략 전부 → holdem-position-play(EN L83·L113·L136·L186·L236 그대로) · 블라인드 금액·방어 → holdem-blind-meaning · 쇼다운 순서 → holdem-showdown-rules · 핸드 → `/vi/hand-chart` «bảng bài khởi đầu theo vị trí»(L186 starting-hands-chart 링크 옆에 도구 CTA 1개 추가).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 1건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 49 · seoTitle 57(≤60) · desc 154(≤160) · tldr 394 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (49): Vị trí trong poker: tên gọi từng ghế và sơ đồ bàn
**seoTitle** (57): Ghế đổi tên mỗi ván — các vị trí trong poker và sơ đồ bàn
**desc** (154): Tên vị trí đi theo nút dealer, không theo cái ghế. Mọi vị trí trong poker — UTG, hijack, cutoff, button — số ghế, sơ đồ bàn 6 người, ai đi trước: 12 phút.
**tldr** (394): Vị trí trong poker là tên ghế tính từ nút dealer — UTG, lojack, hijack, cutoff, button và hai blind — và thường dịch một ghế theo chiều kim đồng hồ sau mỗi ván. Preflop, UTG hành động trước và big blind cuối cùng; postflop, small blind đi trước và button đi cuối (heads-up thì button chính là small blind: đi trước preflop, đi cuối postflop). Số ghế vật lý không bao giờ đổi, chỉ có vị trí đổi.
**tags**: ["vị trí trong poker", "các vị trí trong poker", "poker positions", "position poker", "utg poker là gì", "vị trí poker", "cutoff poker", "hijack poker", "button poker", "poker positions 6 max"]
#### H2 (EN L## → vi)
- L40 `## What Are the Positions at a Poker Table? (Full Seat Map)` → `## Các vị trí trong poker gồm những gì? (Sơ đồ bàn đầy đủ)`
- L66 `## Poker Position Names & Abbreviations: UTG, LJ, HJ, CO, BTN, SB, BB` → `## Tên và viết tắt các vị trí poker: UTG, LJ, HJ, CO, BTN, SB, BB`
- L87 `## Poker Seat Numbers vs Positions — Seat 1 Is Not a Position` → `## Vị trí ngồi và số ghế khác nhau thế nào — vì sao ghế số 1 không phải là một vị trí?`
- L107 `## What Is UTG in Poker?` → `## Vị trí UTG trong poker là gì — vì sao gọi là under the gun?`
- L117 `## The Hijack and Lojack — and Why They're Called That` → `## Vị trí HJ (hijack) và LJ (lojack) là gì — vì sao có tên đó?`
- L130 `## The Cutoff and the Button (Dealer Position)` → `## Vị trí CO (cut off) và nút dealer (button) có gì đặc biệt?`
- L140 `## The Blinds: SB and BB Seats` → `## Vị trí small blind (SB) và big blind (BB) hoạt động ra sao?`
- L153 `## Who Acts First in Poker — Preflop vs Postflop (Do the Blinds Go First?)` → `## Ai hành động trước trong poker — preflop và postflop khác nhau thế nào?`
- L170 `## Poker Positions by Player Count: Heads-Up to 10-Handed (6-Max vs Full Ring)` → `## Vị trí bàn poker từ heads-up đến 10 người khác nhau ra sao? (6-max và full ring)`
- L197 `## FAQ` → `## Câu hỏi thường gặp`
- L229 `## The Takeaways` → `## Những điều cần nhớ`
- L240 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 8/9
#### FAQ (EN → vi)
1. What does UTG stand for in poker? → `UTG trong poker là gì?` (utg poker là gì 20 · related «Utg là gì Poker»)
2. What is the hijack in poker? → `Hijack trong poker là gì?` (hijack poker 10)
3. What is the lojack in poker? → `LJ trong poker là gì?` (PAA «What does LJ stand for in poker?»)
4. Who goes first, the small blind or the big blind? → `Small blind hay big blind hành động trước?`
5. How many positions are there in 6-max poker? → `Bàn poker 6-max có bao nhiêu vị trí?` (poker positions 6 max 10)
6. Do poker positions change every hand? → `Vị trí trong poker có đổi sau mỗi ván không?`
7. What is Seat 1 in poker? → `Ghế số 1 trong poker có phải là một vị trí không?` (🔧 Opus 조정: PAA «What is co in poker?»는 H2 L130 «Vị trí CO (cut off)…»가 받는다 — FAQ 병합 해제)
#### 흡수 키워드
- vị trí trong poker(70) → H1/tags/tldr/H2 L40
- các vị trí trong poker(50) → seoTitle/tags/H2 L40
- poker positions(70) · position poker(70) → tags
- vị trí poker(20) → tags/H2 L66
- utg poker là gì(20) · utg poker(10) → tags/H2 L107/FAQ 1
- cutoff poker(10) · hijack poker(10) · button poker(10) · lojack poker(10) → tags/H2 L117·L130/FAQ 2·3·7
- poker positions 6 max(10) · position poker 6 max(10) → tags/H2 L170/FAQ 5
- poker position names(10) · poker positions explained(10) → H2 L66
- under the gun poker(10) · under the gun meaning(10) · Under the gun nghĩa là gì?(PAA) → H2 L107 (단독 «under the gun» 카피 금지)
- vị trí ngồi trong poker · vị trí utg trong poker · vị trí hj · vị trí co · vị trí button · cut off trong poker(AC) → H2 L87·L107·L117·L130
- vị trí bàn poker 8 người · vị trí trên bàn poker(AC) → H2 L170
- What is co in poker?(PAA) → H2 L130 (🔧 Opus 조정)
- under the gun(170) · under the gun là gì(70) · utg là gì(30) → 오염 · 조준 안 함

### 하지 말 것
- 포지션 이름을 베트남어로 번역하지 마라(«Người cầm súng» 금지) — 영어 약어 + 괄호 풀이 1회.
- «under the gun» 단독·«utg là gì» 단독을 seoTitle·H1·tags에 쓰지 마라(오염).
- «chart»를 title·tags에 쓰지 마라(⑥) — 좌석 지도는 «sơ đồ bàn».
- 전략(레인지 %·스틸)은 쓰지 않는다 → position-play 앵커(EN과 동일).
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L27★ · L29★

★ 카드가 든 줄 축어:
- L27: My first live cash game, I was seated in what I'd later learn was UTG. I looked down at J♥ J♠ and raised. The hijack called. The cutoff called. The button called. The big blind 3-bet. I had no idea what to do — I called and bled chips across three streets.
- L29: Three hands later I was on the button with the same J♥ J♠. I raised. Everyone folded. I won $14 without ever seeing a flop.

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L27: My first live cash game, I was seated in what I'd later learn was UTG. I looked down at J♥ J♠ and raised. The hijack called. The cutoff called. The bu…
- L29: Three hands later I was on the button with the same J♥ J♠. I raised. Everyone folded. I won $14 without ever seeing a flop.
- L31: Same hand. Completely different result. The only thing that changed was my seat — and that night I realized I didn't actually know what the seats were…

---

## holdem-position-play — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Position Strategy: In vs Out of Position",
seoTitle: "Position Beats Cards — In vs Out of Position Poker Strategy",
desc: "Two players, same cards, opposite results — the seat did it. In position vs out of position, why position matters, and opening ranges from UTG to the button.",
tldr: "Being in position means you act last — you see every opponent's decision before spending a chip. Solver examples show that position usually improves equity realization, but neither seat is mechanically locked above or below 100%: ranges, board, and action can reverse the usual pattern. That's why UTG opens ~13% of hands and the button ~43% — and why position rewrites every c-bet, bluff, and pot-control decision postflop.",
category: "strategy",
date: "2026-06-18",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "🎯",
image: "/images/holdem-position-play-hero.webp",
imageAlt: "Top-down view of a professional poker table with 9 labeled positions and dealer button highlighting the button and cutoff seats as profit zones",
tags: (EN 없음 → 확정 카피의 tags 신설),
# title 길이 40
# seoTitle 길이 59
# desc 길이 157
# tldr 길이 424
```

### 구조 (EN content L28~L329 · L## = EN 파일 줄)
#### 헤딩
- L41 ## What Does "In Position" Mean in Poker?
- L60 ## What Is "Out of Position" (OOP) — and Why Acting First Costs You
- L78 ## Why Is Position So Important in Poker Strategy?
- L97 ## The Best Position in Poker — and the Worst
- L122 ## Under the Gun: What It Means and How to Play UTG
- L136 ## Is It Better to Limp or Raise UTG?
- L150 ## Early Position vs Late Position Strategy (Stealing the Blinds)
- L166 ## Opening Ranges by Position: The Strategy Chart
- L190 ## How to Play Out of Position (When You Can't Avoid It)
- L206 ## How Does Position Affect C-Bet Frequency?
- L222 ## Small Blind Strategy: Why 3-Bet or Fold?
- L236 ## 6-Max vs Full Ring — and Tournaments vs Cash
- L249 ## FAQ
- L293 ## The Takeaways
- L306 ## Related Posts

#### FAQ 10문항
- L251 **Q. What does out of position mean in poker?**
- L255 **Q. Who acts first — the small blind or the big blind?**
- L259 **Q. Why does position matter so much in poker?**
- L263 **Q. What is the most profitable position in poker?**
- L267 **Q. What is the weakest position in poker?**
- L271 **Q. Is the small blind an early position?**
- L275 **Q. Is it better to limp or raise from UTG?**
- L279 **Q. How wide should I open from UTG vs the button?**
- L283 **Q. How does position affect c-bet frequency?**
- L287 **Q. Should you always 3-bet from the small blind?**

#### 표 5개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L49 (5행) | Zone | Seats (9-max) | Default posture |
- L82 (3행) | Situation | Equity realized (approx.) | Why |
- L107 (7행) | Seat | Typical long-run result (database averages) | Why |
- L170 (10행) | Position | Open range (approx.) | Rationale |
- L210 (4행) | Situation | Typical solver c-bet frequency (flop) |

#### 디렉티브 · 하이라이트 색 {r, g, (색 없음)}
- L66 :::compare
- L72 :::
- L244 :::readnext[Keep reading]
- L247 :::

#### 이미지 3 (경로 불변 · alt·캡션은 베트남어 재저작)
- L89 ![IP vs OOP comparison — Button (IP) acts last, while ranges, board, and action determine each seat's exact equity realization](/images/holdem-position-play-ip-vs-oop.webp)
- L160 ![A late-position player on the button pushing a raise forward while both blinds fold — a textbook blind steal](/images/holdem-position-play-blind-steal.webp "Stealing the blinds from the button when it folds around")
- L182 ![9-handed poker table showing opening ranges widening from UTG (~13%, tight red) to the Button (~43%, wide green)](/images/holdem-position-play-opening-range.webp "Opening range by position — UTG opens ~13%, the button ~43%")

#### 원시 HTML 18줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L308 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L309   <a href="/en/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;…
- L310     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
- L311     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Seat Names & Table Map</div>
- L312     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">UTG, Lojack, Hijack, Cutoff, Button — every seat explained</div>
- L314   <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-r…
- L315     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Starting Hands</div>
- L316     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart by Position</div>
- L317     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Which hands to play from each seat — printable reference chart</div>
- L319   <a href="/en/blog/holdem-blind-meaning" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L320     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Blinds</div>
- L321     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Small Blind & Big Blind Strategy</div>
- L322     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why the discounted seats are the hardest to profit from</div>
- L324   <a href="/en/blog/holdem-tournament-vs-cash-game" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);borde…
- L325     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Tournament</div>
- L326     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Tournament vs Cash Game Strategy</div>
- L327     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">How position decisions change when ICM applies</div>
- L329 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L32 /en/blog/holdem-strategy [md] ✅51
- L56 /en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp" [md] ✅51
- L80 /en/blog/holdem-equity [md] ✅51
- L89 /images/holdem-position-play-ip-vs-oop.webp [img] img(경로 불변)
- L128 /en/blog/holdem-starting-hands-chart [md] ✅51
- L146 /en/blog/holdem-limping [md] ✅51
- L160 /images/holdem-position-play-blind-steal.webp "Stealing the blinds from the button when it folds around" [img] img(경로 불변)
- L179 /en/blog/holdem-limping [md] ✅51
- L182 /images/holdem-position-play-opening-range.webp "Opening range by position — UTG opens ~13%, the button ~43%" [img] img(경로 불변)
- L186 /en/blog/holdem-starting-hands-chart [md] ✅51
- L194 /en/blog/low-board-check-raise [md] ✅51(🅶 GTO — 연다 · thumb는 `-en.webp` 그대로 · §0-5)
- L218 /en/blog/holdem-continuation-bet [md] ✅51
- L232 /en/blog/holdem-blind-meaning [md] ✅51
- L240 /en/blog/holdem-tournament-vs-cash-game [md] ✅51
- L245 /en/blog/holdem-positions [readnext] ✅51
- L246 /en/blog/holdem-starting-hands-chart [readnext] ✅51
- L302 /en/blog/holdem-positions [md] ✅51
- L302 /en/blog/holdem-starting-hands-chart [md] ✅51
- L302 /en/blog/holdem-blind-meaning [md] ✅51
- L309 /en/blog/holdem-positions [html] ✅51
- L314 /en/blog/holdem-starting-hands-chart [html] ✅51
- L319 /en/blog/holdem-blind-meaning [html] ✅51
- L324 /en/blog/holdem-tournament-vs-cash-game [html] ✅51

### 키워드 (출처 L-D §1-B·§8 · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| in position poker · out of position poker | 10 · 10 | seoTitle · H1 · tags · H2 L41·L60 |
| vị trí đẹp trong poker · vị trí tốt trong poker(자동완성) | `-` | H2 L97 «Vị trí đẹp nhất trong poker…» · tags |
| position poker strategy(자동완성) | `-` | tags |
| natural8 «bảo vệ Big Blind»(«vị trí trong poker» 9위) | — | H2 L190 안 소절 또는 (추가) H2 «Cách bảo vệ big blind khi không có vị trí»(EN L190~L204 «How to Play Out of Position» + L222 SB 내용 범위 · 새 수치 금지) |
| 🔴 주인 아님 | — | vị trí trong poker 70 · poker positions 70(⑤→positions · seoTitle 선두 금지 · tags 금지) · «bảng range / chart»(⑥ · L166 H2에 «chart» 금지 · 오프닝 레인지 % 표는 본문 유지 + `/vi/hand-chart` 앵커) · «under the gun»(오염 · L122 H2는 «Vị trí UTG: chơi thế nào…»로 포지션 글과 분담 — 정의는 positions 앵커) |

### PAA·자동완성 (축어)
- positions PAA 공유 · related «Under the gun trái nghĩa» · 자동완성: vị trí đẹp trong poker · vị trí tốt trong poker · position poker strategy · in position poker · out of position poker · poker positions strategy.

### 현지 SERP (L-D §3·§5 natural8 hijack·BB 방어 · §8)
- natural8 «Ý nghĩa chiến lược của vị trí hijack» · «Cách bảo vệ Big Blind»(H2 «Khi nào nên bảo vệ Big Blind?» · «Xây dựng một phạm vi bài» · «Chiến lược bảo vệ đối với các chồng chip có kích thước khác nhau») — 베트남어 원문 2편뿐 · 수치 0 · 1인칭 0.
- 우리가 더 줄 것: ① K♥Q♥ BB vs 버튼 경험담(L28~32) ② 오프닝 레인지 표(~13% → ~43% · 콤보 산수 정합 — propokervn E4 반면교사) ③ 솔버 수치(OOP 3-bettor 97%+ · A♠A♥6♦ 79,6% · 57,8%)를 설정 명시 ④ SB 3-bet-or-fold.
- H2 처방(L-D §9-6): EN 승계 + «Cách bảo vệ big blind khi không có vị trí» + «Vị trí đẹp nhất trong poker là vị trí nào?».

### 소유표 (계획 §3-C ⑤·⑥·⑫)
- 주인인 검색어: in position poker · out of position poker · vị trí đẹp/tốt (nhất) trong poker · position poker strategy · bảo vệ big blind.
- 쓰면 안 되는 헤드: seoTitle 선두 «vị trí trong poker» · «poker positions»(⑤) · «chart / bảng range»(⑥) · «check raise là gì»(⑫→low-board-check-raise · L194 링크로 위임) · «GTO / solver»(⑪).
- 위임 앵커: 좌석 정의 → holdem-positions(EN L56 + **첫 문단 1개 추가** «các vị trí trong poker») · 핸드 → holdem-starting-hands-chart(L128·L186) + `/vi/hand-chart` «bảng range preflop theo vị trí» 1개(L166 표 아래) · 체크레이즈 → low-board-check-raise(L194 · 🅶 연다) · c-bet → holdem-continuation-bet · 블라인드 → holdem-blind-meaning · 토너 → holdem-tournament-vs-cash-game.

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 1건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 62 · seoTitle 59(≤60) · desc 159(≤160) · tldr 440 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (62): Chiến thuật vị trí: in position và out of position trong poker
**seoTitle** (59): Vị trí hơn cả lá bài — in position và out of position poker
**desc** (159): Cùng bài, kết quả ngược nhau — do chỗ ngồi. In position và out of position là gì, vì sao vị trí quan trọng, vị trí đẹp nhất, mở bài từ UTG đến button: 16 phút.
**tldr** (440): In position nghĩa là bạn hành động sau cùng, thấy mọi đối thủ quyết định rồi mới phải bỏ ra một chip. Ví dụ solver cho thấy có vị trí thường giúp hiện thực hóa equity tốt hơn, nhưng không ghế nào bị khóa cứng trên hay dưới 100%: range, bài chung và diễn biến cược có thể đảo ngược quy luật. Đó là lý do UTG chỉ mở khoảng 13% tay bài còn button mở khoảng 43% — và vì sao vị trí viết lại mọi quyết định c-bet, bluff và kiểm soát pot sau flop.
**tags**: ["in position poker", "out of position poker", "vị trí đẹp trong poker", "vị trí tốt trong poker", "vị trí tốt nhất trong poker", "position poker strategy", "chiến thuật vị trí poker", "bảo vệ big blind"]
#### H2 (EN L## → vi)
- L41 `## What Does "In Position" Mean in Poker?` → `## In position trong poker nghĩa là gì?`
- L60 `## What Is "Out of Position" (OOP) — and Why Acting First Costs You` → `## Out of position (OOP) là gì — vì sao hành động trước khiến bạn mất tiền?`
- L78 `## Why Is Position So Important in Poker Strategy?` → `## Vì sao vị trí quan trọng đến vậy trong chiến thuật poker?`
- L97 `## The Best Position in Poker — and the Worst` → `## Vị trí đẹp nhất trong poker là ghế nào — và ghế tệ nhất?`
- L122 `## Under the Gun: What It Means and How to Play UTG` → `## Chơi ở Under the Gun (UTG) thế nào khi bạn phải hành động đầu tiên?`
- L136 `## Is It Better to Limp or Raise UTG?` → `## Ở UTG nên limp hay raise?`
- L150 `## Early Position vs Late Position Strategy (Stealing the Blinds)` → `## Chiến thuật vị trí sớm và vị trí muộn (cướp blind)`
- L166 `## Opening Ranges by Position: The Strategy Chart` → `## Mở bao nhiêu % tay bài từ mỗi vị trí?`
- L190 `## How to Play Out of Position (When You Can't Avoid It)` → `## Chơi out of position thế nào khi không thể tránh?`
- (추가 · 🔧 Opus 조정 = H3로 L190 절 안) `### Bảo vệ big blind thế nào khi không có vị trí?` — natural8 «bảo vệ Big Blind»가 «vị trí trong poker» 9위 · 본문 ≤ 80단어 = EN L170 BB 행(«Defends wide vs steals — closing action + pot odds») + L176 ⑤(junk으로 EP 오픈 방어 = 자초) + L228 FAQ 1 범위만 · 새 수치 금지 · holdem-blind-meaning 앵커
- L206 `## How Does Position Affect C-Bet Frequency?` → `## Vị trí ảnh hưởng đến tần suất c-bet ra sao?`
- L222 `## Small Blind Strategy: Why 3-Bet or Fold?` → `## Chiến thuật small blind: vì sao nên 3-bet hoặc fold?`
- L236 `## 6-Max vs Full Ring — and Tournaments vs Cash` → `## Bàn 6-max và full ring — giải đấu và cash game khác gì?`
- L249 `## FAQ` → `## Câu hỏi thường gặp`
- L293 `## The Takeaways` → `## Những điều cần nhớ`
- L306 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 12/13
#### FAQ (EN → vi)
1. What does out of position mean in poker? → `Out of position trong poker nghĩa là gì?` (AC «out of position poker»)
2. Who acts first — the small blind or the big blind? → `Small blind hay big blind hành động trước?`
3. Why does position matter so much in poker? → `Vì sao vị trí quan trọng đến vậy trong poker?`
4. What is the most profitable position in poker? → `Vị trí nào kiếm được nhiều tiền nhất trong poker?` (AC «vị trí tốt trong poker»)
5. What is the weakest position in poker? → `Vị trí nào yếu nhất trong poker?`
6. Is the small blind an early position? → `Small blind có phải là vị trí sớm không?`
7. Is it better to limp or raise from UTG? → `Ở UTG nên limp hay raise?`
8. How wide should I open from UTG vs the button? → `Nên mở bao nhiêu % tay bài ở UTG so với button?`
9. How does position affect c-bet frequency? → `Vị trí ảnh hưởng đến tần suất c-bet như thế nào?`
10. Should you always 3-bet from the small blind? → `Có nên luôn 3-bet từ small blind không?`
#### 흡수 키워드
- in position poker(10) → seoTitle/H1/tags/H2 L41
- out of position poker(10) → seoTitle/H1/tags/H2 L60/FAQ 1
- vị trí đẹp trong poker · vị trí tốt trong poker(AC) → tags/H2 L97/FAQ 4
- position poker strategy(AC) → tags/H2 L78
- bảo vệ Big Blind(natural8 SERP) → tags/추가 H2
- Under the gun trái nghĩa(related) → H2 L150 본문(vị trí sớm ↔ muộn)
- vị trí trong poker(70) → 조준 안 함(positions 소유 · seoTitle 선두 금지 준수)

### 하지 말 것
- seoTitle·H1·tags에 «vị trí trong poker»를 선두로 두지 마라(positions 소유) — 이 글의 헤드는 «in position / out of position» · «vị trí đẹp nhất».
- L166 H2·tags에 «chart / bảng range» 금지 — 표는 본문에 두고 도구 앵커.
- 솔버 수치(L196·L213: 79,6% · 57,8% · 97%+ · Q♥10♥7♠ · 8♦5♣2♠ · A♦K♠2♥ · A♠A♥6♦)는 **축어 + «trong các spot chúng tôi đã solve»** 문맥 유지 — 일반화 금지.
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L28★ · L30★ · L32★ · L37 · L85 · L91★ · L99 · L101★ · L128 · L129 · L132 · L156 · L157 · L162 · L172 · L173 · L174 · L175 · L176 · L177 · L178 · L179 · L182 · L184 · L186 · L196★ · L212 · L213★ · L214 · L216 · L228 · L230 · L238 · L240 · L261 · L265 · L281 · L285 · L289 · L295 · L296 · L300

★ 카드가 든 줄 축어:
- L28: Last spring at my regular 1/2 game I played K♥Q♥ twice in the same session — once from the big blind, once from the button — and those two hands taught me more about position than any training video ever did.
- L30: From the big blind, I called a button raise and flopped top pair on Q♠8♦4♣. Acting first on every street, I check-called the flop, check-called the turn, and when a third barrel came on the river I stared at the felt and folded. Maybe he had it, maybe he didn't — ==r:out of position, I paid two streets to learn nothing.==
- L32: An hour later, same K♥Q♥, this time on the button. I raised, the big blind called and checked the J♠7♦3♣ flop. I checked behind. The turn Q♦ gave me top pair; he checked again, I bet, he called — and paid off my river bet with a worse hand. ==g:Same cards. Opposite seats. Opposite results.== That's position — the first of the [five decisions](/en/blog/holdem-strategy) that make up a winning Texas Hold'em strategy, and the one everything else is built on.
- L91: Take 8♥7♥ on a K♥4♠2♥ flop. In position, your flush draw plays beautifully: call a bet cheaply, take a free card when checked to, or bluff when they show weakness twice. Out of position, the same draw leaks: bet and face a raise, or check and watch them charge you the maximum — or worse, check and fold the very card that would have completed you. Same nine outs, very different price.
- L101: Here's the button edge in one concrete hand. You open A♦9♦ on the button, the big blind calls, and the flop comes **K♦7♠2♥** — a dry board that hits almost nobody. The big blind checks — which tells you almost nothing here, because he checks nearly his whole range on this board. The information is elsewhere: a king hits your opening range far more often than his calling range. ==g:A bet here wins far more often than it loses==, and when he folds, ace-high took the pot without a showdown. Now reverse the seats: OOP with the same A♦9♦, you check, he bets, and you're folding the best hand some meaningful share of the time. Same cards; the seat did all the work.
- L196: **2. Give every bet a job — and size it for the spot.** There is no single out-of-position size. In the single-raised pots we solved, the OOP player who bet mostly chose about a third of the pot (79.6% of the small blind's range took that size on A♠A♥6♦, a paired-ace board that heavily favors the raiser). In 3-bet pots the OOP 3-bettor still preferred the small size on A♦K♠2♥ (57.8%) but switched to two-thirds pot on Q♥T♥7♠ and 8♦5♣2♠. The bigger size is for denying the free cards and cheap floats that position would otherwise let your opponent take; the small one lets you bet a wide range cheaply. What loses is betting without a plan — every extra street you drift through favors the player acting last.
- L213: | OOP as the 3-bettor (3-bet pots from the blinds) | Very high — in our solver runs the big blind c-bets over 97% of the time on both Q♥T♥7♠ and 8♦5♣2♠ — at the two-thirds-pot size; the one-third size got under 1% (on A♦K♠2♥ the one-third size led instead, 57.8%) |

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L28: Last spring at my regular 1/2 game I played K♥Q♥ twice in the same session — once from the big blind, once from the button — and those two hands taugh…
- L30: From the big blind, I called a button raise and flopped top pair on Q♠8♦4♣. Acting first on every street, I check-called the flop, check-called the tu…
- L32: An hour later, same K♥Q♥, this time on the button. I raised, the big blind called and checked the J♠7♦3♣ flop. I checked behind. The turn Q♦ gave me t…
- L118: > **Live game tip:** At a 1/2 live game, players regularly limp the button because "I don't have a great hand." That's leaving the most valuable real …

---

## holdem-starting-hands-chart — EN updated 2026-10-01 · masterUpdated = "2026-10-01"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Poker Starting Hands Chart & Best Hands",
seoTitle: "Fold 80% of Your Hands? — Best Poker Starting Hands Chart",
desc: "Most hole cards lose money. The best and good starting hands in poker, the full chart by position and 6-max, plus GTO vs beginner charts — in 10 minutes.",
tldr: "Of the 169 starting hand types, only a small top slice — about 15–20% of the hands you're dealt — is profitable for a beginner. Big pairs (AA–TT) and AK raise from any seat; the later you act, the wider you open — from ~13% under the gun to ~43% on the button (wider again in 6-max). Start with a simplified chart, add GTO preflop charts once raise-or-fold is automatic.",
category: "strategy",
date: "2026-06-14",
updated: "2026-10-01",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🂡",
image: "/images/holdem-starting-hands-chart-hero.webp",
imageAlt: "Texas Hold'em starting hands chart showing Premium (AA KK QQ JJ AK), Strong (TT 99 AQ KQ) and Fold groups by position UTG to button",
tags: (EN 없음 → 확정 카피의 tags 신설),
# title 길이 39
# seoTitle 길이 57
# desc 길이 153
# tldr 길이 370
```

### 구조 (EN content L25~L306 · L## = EN 파일 줄)
#### 헤딩
- L35 ### Starting hands, by the numbers
- L46 ## The 10 Best Starting Hands in Poker, Ranked
- L71 ## What Counts as a Good Starting Hand in Poker?
- L88 ## Poker Starting Hands Chart by Position (Full 9-Max Chart)
- L113 ### Early position (UTG): the tightest range
- L129 ### Late position (cutoff and button): the widest range
- L142 ## 6-Max Starting Hands: How the Chart Changes
- L159 ## What Percentage of Starting Hands Should You Play?
- L171 ## GTO Preflop Charts vs Beginner Charts: Which to Use?
- L190 ## The Worst Starting Hands (That Look Playable)
- L209 ## Printable Starting Hands Chart (PDF Cheat Sheet)
- L228 ## Test Yourself: Preflop Hand Quiz
- L252 ## FAQ
- L288 ## Related Posts

#### FAQ 8문항
- L254 **Q. What is the best starting hand in poker?**
- L258 **Q. What are good starting hands in poker?**
- L262 **Q. How many starting hands are there in poker?**
- L266 **Q. What is the 7-2 rule in poker?**
- L270 **Q. What is the worst starting hand in poker?**
- L274 **Q. Should beginners use GTO preflop charts?**
- L278 **Q. Does being suited really matter?**
- L282 **Q. Should I always fold small pocket pairs like 22 or 33?**

#### 표 4개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L50 (11행) | Rank | Hand | Why it's strong |
- L77 (5행) | Tier | Examples | How to play it |
- L96 (5행) | Position | Open range | Key hands to play |
- L194 (5행) | Hand type | Why it loses | What beginners think |

#### 디렉티브 · 하이라이트 색 {(색 없음), g, r}
- L37 :::stripe
- L42 :::
- L84 :::tip[The tier is only half the answer. A speculative hand is "good" on the button and bad under the gun — which is why the real chart is o…
- L109 :::rangechart:::
- L146 :::compare
- L153 :::
- L163 :::stat[15–20%] of dealt hands — a healthy beginner range at 9-max:::
- L177 :::compare
- L184 :::
- L217 :::steps
- L222 :::
- L241 :::quiz:::
- L247 :::readnext[Keep reading]
- L250 :::

#### 이미지 2 (경로 불변 · alt·캡션은 베트남어 재저작)
- L63 ![Four premium Texas Hold'em starting hands — pocket aces, pocket kings, pocket queens, and ace-king suited — glowing gold on dark green felt](/images/holdem-starting-hands-premium.webp "The premium tier — hands you can raise from any position")
- L201 ![Weak ace trap in Texas Hold'em — A♣ 4♦ outlined in red as a losing hand, dominated by A♠ K♦ in gold](/images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop")

#### 원시 HTML 14줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L290 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L291   <a href="/en/blog/holdem-hand-rankings" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L292     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Pillar</div>
- L293     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Hand Rankings — Best to Worst</div>
- L294     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">All 10 hands explained with odds and examples</div>
- L296   <a href="/en/blog/holdem-positions" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;…
- L297     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Positions</div>
- L298     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Positions: UTG to Button</div>
- L299     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why position changes which hands to play</div>
- L301   <a href="/en/blog/holdem-tiebreak-rules" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:…
- L302     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Hand Rankings</div>
- L303     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Kicker and Tie-Breaker Rules</div>
- L304     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Same pair but different result — kicker decides</div>
- L306 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L29 /en/blog/holdem-strategy [md] ✅51
- L63 /images/holdem-starting-hands-premium.webp "The premium tier — hands you can raise from any position" [img] img(경로 불변)
- L67 /en/blog/holdem-glossary [md] ✅51
- L67 /en/blog/holdem-hand-rankings [md] ✅51
- L111 /en/hand-chart [md] ✅도구 → /vi/hand-chart
- L111 /en/blog/holdem-positions "thumb:/images/holdem-positions-hero.webp" [md] ✅51
- L155 /en/blog/holdem-position-play [md] ✅51
- L167 /en/blog/holdem-probability [md] ✅51
- L186 /en/blog/holdem-equity "thumb:/images/holdem-equity-hero.webp" [md] ✅51
- L201 /images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop" [img] img(경로 불변)
- L213 /downloads/poker-starting-hands-chart.pdf [md] ⚠️ 영어 자료 — 대상 유지 + 앵커 «(tiếng Anh)» (§0-5)
- L220 /en/blog/holdem-limping [md] ✅51
- L243 /en/quiz [md] ⚠️ 영어 자료 — 대상 유지 + 앵커 «(tiếng Anh)» (§0-5)
- L248 /en/blog/holdem-hand-rankings [readnext] ✅51
- L249 /en/blog/holdem-probability [readnext] ✅51
- L264 /en/blog/holdem-probability [md] ✅51
- L291 /en/blog/holdem-hand-rankings [html] ✅51
- L296 /en/blog/holdem-positions [html] ✅51
- L301 /en/blog/holdem-tiebreak-rules [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| poker starting hands · starting hands poker | 10 · 10 | tags(영어) |
| best starting hands poker | 10 | seoTitle(영어 술어 허용 · «chart» 없이) · tags |
| bài khởi đầu poker · tay bài khởi đầu poker · những tay bài nên chơi(자동완성·번역 표준어) | `-` | H1 · tags · H2 L88 «nên chơi bài gì theo vị trí» |
| texas holdem hands | 50 | tags 1개(«các tay bài texas holdem nên chơi» 형) |
| starting hands poker ranked / odds / worst / top / strong / percentages(자동완성) | — | H2 L46(ranked) · L159(percentages) · L190(worst) 형태소 |
| 🔴 도구 소유(⑥) | — | poker hand chart 50 · preflop chart 20 · poker range chart 10 · starting hands poker chart 10 · «bảng bài khởi đầu» → **title·H1·tags에 «chart / bảng» 금지** · 본문 도구 CTA «bảng bài khởi đầu theo vị trí»(L111) |

### PAA·자동완성 (축어)
- PAA(«bài khởi đầu poker» — 규칙 의도 · 무관): «Poker có những bộ bài nào?» · «Làm thế nào để chơi bài poker?» · «Làm cách nào để chơi bài poker 5 lá?»(🔴 다른 게임). 시작 핸드 의도 PAA 없음 · 베트남어 자동완성 빈 응답.
- 자동완성(영어): starting hands poker chart · ranked · odds · best · good · worst · top · strong · percentages · starting poker hands to play.

### 현지 SERP (L-D §3 «bài khởi đầu poker» · §5 · §10-C)
- 상위 = 카지노 제휴(cff 404 · reina «Hướng Dẫn Chơi Poker Cơ Bản…» 시작 핸드 해설 아님) · YouTube 3 · pokerprofessor 번역(«Bài khởi đầu trong Poker: Chơi theo xác suất…» · 표 3·이미지 18 · «Starting Hand Groups»). 영어 «poker starting hands» = 핀터레스트 포스터 4 + PDF.
- 빈자리: 베트남어로 «왜 이 핸드가 강한가»(랭킹 이유) · 흔한 실수(약한 에이스) · 6-max 차이 · GTO vs 초심자 차트 판정 · 퀴즈. 차트 **그 자체**는 `/vi/hand-chart`가 받는다(계획 §3-C ⑥ · `vi-tools.md`).
- 우리가 더 줄 것: ① 10 Best 표 + 이유 ② A♣4♦ 경험담(L25~27) ③ 6-max compare ④ 도구 CTA.

### 소유표 (계획 §3-C ⑥)
- 주인인 검색어: best starting hands poker · bài khởi đầu poker(해설) · những tay bài nên chơi theo vị trí · starting hands ranked/worst/percentages.
- 쓰면 안 되는 헤드(title·H1·tags): «chart» · «bảng» · «hand chart» · «preflop chart» · «range chart» · «bảng bài khởi đầu»(⑥) · «GTO poker»(⑪ — L171 H2는 «GTO preflop»·«bảng người mới» 비교라 H2에는 허용 · tags 금지) · «xác suất poker»(⑦ — L159 % 절은 레인지 비율이지 확률 글 아님 · 앵커).
- 위임 앵커: 차트 본체 → **`/vi/hand-chart` «bảng bài khởi đầu theo vị trí»**(L111 · 첫 화면 가까이 1회 더 허용) · 포지션 정의 → holdem-positions(L111) · 플레이 → holdem-position-play(L155) · 핸드 vs 핸드 승률 → holdem-probability(L167·L264) · equity → holdem-equity(L186) · 림프 → holdem-limping(L220) · 족보 → holdem-hand-rankings(L67) · 용어 → holdem-glossary(L67).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 0건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 64 · seoTitle 56(≤60) · desc 152(≤160) · tldr 385 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (64): Bài khởi đầu poker: tay bài mạnh nhất và nên chơi gì theo vị trí
**seoTitle** (56): Bỏ 80% tay bài được chia? — bài khởi đầu poker mạnh nhất
**desc** (152): Phần lớn bài tẩy bạn nhận đều lỗ. Tay bài khởi đầu mạnh nhất trong poker, nên chơi bài gì theo vị trí và bàn 6-max, GTO so với cách người mới — 10 phút.
**tldr** (385): Trong 169 loại bài khởi đầu, chỉ một lát mỏng ở trên cùng — khoảng 15–20% số tay bài bạn được chia — là có lời với người mới. Đôi lớn (AA–TT) và AK raise từ mọi ghế; bạn hành động càng muộn thì mở càng rộng — từ khoảng 13% ở under the gun đến khoảng 43% ở button (bàn 6-max còn rộng hơn). Hãy bắt đầu với một bảng rút gọn, rồi thêm bảng GTO preflop khi raise-hay-fold đã thành phản xạ.
**tags**: ["best starting hands poker", "poker starting hands", "starting hands poker", "bài khởi đầu poker", "tay bài khởi đầu", "bài khởi đầu mạnh nhất", "starting hands poker ranked", "nên chơi bài gì theo vị trí"]
#### H2 (EN L## → vi)
- L35 `### Starting hands, by the numbers` → `### Bài khởi đầu qua những con số`
- L46 `## The 10 Best Starting Hands in Poker, Ranked` → `## 10 tay bài khởi đầu mạnh nhất trong poker được xếp hạng thế nào?`
- L71 `## What Counts as a Good Starting Hand in Poker?` → `## Thế nào là một tay bài khởi đầu tốt trong poker?`
- L88 `## Poker Starting Hands Chart by Position (Full 9-Max Chart)` → `## Nên chơi bài gì theo vị trí ở bàn 9 người?`
- L113 `### Early position (UTG): the tightest range` → `### Vị trí sớm (UTG): range chặt nhất`
- L129 `### Late position (cutoff and button): the widest range` → `### Vị trí muộn (cutoff và button): range rộng nhất`
- L142 `## 6-Max Starting Hands: How the Chart Changes` → `## Bàn 6-max thì bài khởi đầu khác gì?`
- L159 `## What Percentage of Starting Hands Should You Play?` → `## Nên chơi bao nhiêu phần trăm tay bài khởi đầu?`
- L171 `## GTO Preflop Charts vs Beginner Charts: Which to Use?` → `## Bảng GTO preflop hay bảng cho người mới — nên dùng cái nào?`
- L190 `## The Worst Starting Hands (That Look Playable)` → `## Tay bài khởi đầu tệ nhất nào trông có vẻ chơi được?`
- L209 `## Printable Starting Hands Chart (PDF Cheat Sheet)` → `## Tải tài liệu PDF bài khởi đầu in được (tiếng Anh) ở đâu?`
- L228 `## Test Yourself: Preflop Hand Quiz` → `## Thử sức với quiz preflop: bạn raise hay bỏ bài?`
- L252 `## FAQ` → `## Câu hỏi thường gặp`
- L288 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 9/12
#### FAQ (EN → vi)
1. What is the best starting hand in poker? → `Tay bài khởi đầu mạnh nhất trong poker là gì?` (AC «starting hands poker best»)
2. What are good starting hands in poker? → `Những tay bài khởi đầu nào được xem là tốt trong poker?` (AC «starting hands poker good»)
3. How many starting hands are there in poker? → `Poker có bao nhiêu tay bài khởi đầu?`
4. What is the 7-2 rule in poker? → `Quy tắc 7-2 trong poker là gì?` (PAA «What is the 7/2 rule in poker?»)
5. What is the worst starting hand in poker? → `Tay bài khởi đầu tệ nhất trong poker là gì?` (AC «starting hands poker worst»)
6. Should beginners use GTO preflop charts? → `Người mới có nên dùng bảng GTO preflop không?`
7. Does being suited really matter? → `Bài đồng chất (suited) có thực sự quan trọng không?`
8. Should I always fold small pocket pairs like 22 or 33? → `Có nên luôn bỏ đôi nhỏ như 22 hay 33 không?`
#### 흡수 키워드
- best starting hands poker(10) → tags/H2 L46/FAQ 1
- poker starting hands(10) · starting hands poker(10) → tags
- bài khởi đầu poker · tay bài khởi đầu(번역 표준어) → seoTitle/H1/tags
- starting hands poker ranked · top · strong(AC) → H2 L46/tags
- starting hands poker good(AC) → H2 L71/FAQ 2
- starting hands poker worst(AC) → H2 L190/FAQ 5
- starting hands poker percentages · odds(AC) → H2 L159
- What is the 7/2 rule in poker?(PAA) → FAQ 4
- poker hand chart(50) · preflop chart(20) · starting hands poker chart(10) · bảng bài khởi đầu → 조준 안 함(도구 `/vi/hand-chart` 소유 · 본문 CTA 앵커만)

### 하지 말 것
- title·H1·tags에 «chart / bảng / bảng bài khởi đầu» 금지 — 도구 소유. H2 L88·L142·L209의 «chart»는 «nên chơi bài gì theo vị trí» · «bàn 6 người thì khác gì» · «tài liệu in (PDF)»로.
- `/downloads/poker-starting-hands-chart.pdf` · `/en/quiz` = 영어 자료 → 링크 유지 + 앵커 «(tiếng Anh)» · vi PDF·퀴즈를 새로 만들지 않는다(헤드 요청에 «vi 퀴즈·PDF 없음» 기록).
- «7-2 rule»은 EN FAQ 4 축어(하우스 사이드 게임) — «luật» 아님.
- 콤보 산수(L105: ~13% ≈ 172/1.326 · UTG 코어 58 콤보)는 축어 — 베트남식 구분자 `1.326`.
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L25★ · L29 · L38 · L39 · L40 · L41 · L52 · L53 · L54 · L55 · L56 · L57 · L58 · L59 · L60 · L61 · L65 · L79 · L80 · L81 · L82 · L98 · L99 · L100 · L101 · L105 · L107 · L117 · L119 · L120 · L121 · L125 · L126 · L127 · L133 · L134 · L135 · L136 · L144 · L149 · L150 · L151 · L161 · L163 · L165 · L167 · L175 · L179 · L192 · L196 · L198 · L199 · L201★ · L203★ · L205 · L232★ · L233 · L235★ · L236 · L238★ · L256 · L260 · L264 · L266 · L268 · L272 · L280 · L282 · L284

★ 카드가 든 줄 축어:
- L25: My first live session, I picked up A♣ 4♦ and thought "an ace, how bad can it be?"
- L201: ![Weak ace trap in Texas Hold'em — A♣ 4♦ outlined in red as a losing hand, dominated by A♠ K♦ in gold](/images/holdem-starting-hands-weak-ace-trap.webp "Weak aces look strong but stay dominated — fold them preflop")
- L203: The ==r:most expensive mistake beginners make is calling raises with weak aces== like the A♣ 4♦ from the intro. When you finally hit your pair of aces, you're often second-best to A♠ K♦ or A♥ Q♦ — and you lose a big pot convinced you have top pair. You do. So do they, with a better kicker.
- L232: **1. 9-max, you're UTG with A♠ J♦ (offsuit).** Raise or fold?
- L235: **2. Button, everyone folds to you, 7♠ 6♠.** Raise or fold?
- L238: **3. 6-max, the cutoff raises, you're on the button with A♦ 4♣.** Call, raise, or fold?

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L25: My first live session, I picked up A♣ 4♦ and thought "an ace, how bad can it be?"
- L27: I called a raise, missed the flop, called again, missed the turn. By the river I'd lost 40 big blinds with nothing.
- L173: I keep solver outputs open when I study, and I still hand every beginner a simplified chart first. These are two different tools, and knowing which on…

---

## holdem-limping — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Limping in Poker: Why 'Just Calling' Preflop Usually Costs You",
seoTitle: "Why 'Just Calling' Preflop Quietly Costs You — Poker Limping",
desc: "Limping means just calling the big blind preflop. Why it's usually a mistake, the spots where it's actually fine, and how good players punish limpers.",
tldr: "Limping is entering a pot preflop by just calling the big blind instead of raising or folding. Open-limping (being first in) is almost always a mistake — a limp can't win the blinds uncontested, you give up initiative, and good players punish you. But limping isn't always wrong: completing the small blind, over-limping speculative hands behind other limpers, and some live and short-stacked tournament spots are legitimate exceptions.",
category: "strategy",
date: "2026-07-05",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "11 min",
emoji: "🚶",
image: "/images/holdem-limping-hero.webp",
imageAlt: "A poker player quietly sliding chips forward to just call the big blind preflop while other players wait, illustrating a passive limp",
tags: ["limping", "what is a limp in poker", "limping in poker", "open limping", "over-limping", "limp reraise", "why is limping bad", "when is limping ok"],
# title 길이 62
# seoTitle 길이 60
# desc 길이 150
# tldr 길이 436
```

### 구조 (EN content L19~L212 · L## = EN 파일 줄)
#### 헤딩
- L25 ### Limping, at a glance
- L36 ## What Does "Limping" Mean in Poker?
- L44 ## Open-Limp vs Over-Limp: Not the Same Thing
- L62 ## Why Limping Is Usually a Mistake (4 Reasons)
- L73 ## Why Raising First-In Beats Limping
- L83 ## So When Is Limping Actually OK?
- L104 ## What Is a Limp-Reraise?
- L112 ## Is Limping a "Fish" Tell? How Good Players Punish It
- L126 ## Limping in Live Low-Stakes vs Online / GTO
- L139 ## FAQ
- L179 ## The 3 Things to Remember
- L189 ## Related Posts

#### FAQ 9문항
- L141 **Q. What does it mean to limp in poker?**
- L145 **Q. Why is limping bad in poker?**
- L149 **Q. Is limping ever a good strategy?**
- L153 **Q. What is the difference between open-limping and over-limping?**
- L157 **Q. What is a limp-reraise?**
- L161 **Q. Should you ever open-limp preflop?**
- L165 **Q. Is it okay to limp in the small blind?**
- L169 **Q. What is the difference between a limper and a calling station?**
- L173 **Q. What is a player who limps a lot called?**

#### 표 2개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L50 (4행) | | Open-limp | Over-limp (limp behind) |
- L91 (5행) | Spot | Why limping is fine here |

#### 디렉티브 · 하이라이트 색 {r}
- L27 :::stripe
- L32 :::
- L134 :::readnext[Keep reading]
- L137 :::

#### 이미지 3 (경로 불변 · alt·캡션은 베트남어 재저작)
- L75 ![A visual guide showing three options — RAISE highlighted in gold with a check mark, LIMP marked in red with a warning, and FOLD in neutral grey](/images/holdem-limping-raise-or-fold.webp "The default that keeps you ahead of the field: raise or fold first-in, and treat the open-limp as the option to avoid")
- L87 ![Several players have limped into the same hand, so multiple small stacks of chips sit pushed forward around the green felt in a cheap multiway pot](/images/holdem-limping-multiway.webp "Over-limping behind other players into a cheap multiway pot is where speculative hands like small pairs can actually pay off")
- L114 ![Six-seat table diagram — the seat marked in red has limped for a single chip, four seats are folded and crossed out with the blinds' posted chips left behind, and the button answers in gold with a much larger stack, an arrow aimed back at the limper](/images/holdem-limping-isolation-raise.webp "One chip buys you in — and the player on the button decides what the pot is going to cost you")

#### 원시 HTML 22줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L48 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L56 </div>
- L89 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L98 </div>
- L191 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L192   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L193     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L194     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L195     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why limping out of position hurts most</div>
- L197   <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-r…
- L198     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L199     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L200     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">What's worth raising in the first place</div>
- L202   <a href="/en/blog/holdem-fish" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-…
- L203     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Glossary</div>
- L204     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">What Is a Fish?</div>
- L205     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The passive habits that mark a weak player</div>
- L207   <a href="/en/blog/holdem-glossary" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L208     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Glossary</div>
- L209     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Poker Terms A-Z</div>
- L210     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Every bit of table vocabulary, explained</div>
- L212 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" [md] ✅51
- L40 /en/blog/holdem-glossary [md] ✅51
- L67 /en/blog/holdem-continuation-bet [md] ✅51
- L75 /images/holdem-limping-raise-or-fold.webp "The default that keeps you ahead of the field: raise or fold first-in, and treat the open-limp as the option to avoid" [img] img(경로 불변)
- L79 /en/blog/holdem-starting-hands-chart [md] ✅51
- L87 /images/holdem-limping-multiway.webp "Over-limping behind other players into a cheap multiway pot is where speculative hands like small pairs can actually pay off" [img] img(경로 불변)
- L100 /en/blog/holdem-pot-odds [md] ✅51
- L114 /images/holdem-limping-isolation-raise.webp "One chip buys you in — and the player on the button decides what the pot is going to cost you" [img] img(경로 불변)
- L122 /en/blog/holdem-fish "thumb:/images/holdem-fish-hero.webp" [md] ✅51
- L135 /en/blog/holdem-position-play [readnext] ✅51
- L136 /en/blog/holdem-starting-hands-chart [readnext] ✅51
- L185 /en/blog/holdem-starting-hands-chart [md] ✅51
- L185 /en/blog/holdem-position-play [md] ✅51
- L192 /en/blog/holdem-position-play [html] ✅51
- L197 /en/blog/holdem-starting-hands-chart [html] ✅51
- L202 /en/blog/holdem-fish [html] ✅51
- L207 /en/blog/holdem-glossary [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B·§2 · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| limp poker | 20 | seoTitle · tags |
| limp trong poker là gì | 10 | H1 · 첫 H2 L36(PAA 축어 «Limp trong poker là gì?») · tags |
| limp poker là gì | 10 | FAQ 1(PAA 축어 «Limp poker là gì?») · tags |
| limp poker meaning | 10 | tags |
| limp call là gì · poker limp pot · poker limp raise · what is open limp in poker · poker limp strategy(자동완성) | `-` | H2 L44(open-limp vs over-limp) · L104(limp-reraise) · FAQ 4·5 · «limp pot» 1회 본문 |
| open limp | 0 | 본문 «open-limp» |
| 🔴 오염 | — | limp là gì 170(0/10 · 의료·limp mode) · limping là gì 110(1/10) → seoTitle·H1·tags 금지 · 결합형 «limp trong poker là gì»·«limp poker là gì»만 |

### PAA·자동완성 (축어)
- PAA(«limp poker»): «Limp trong poker là gì?» · «Poker là gì trong bóng đá?»(무관) · «Chia bài poker gọi là gì?»(🅰) · «Call trong poker là gì?»(🅰). PAA(«limp trong poker là gì»): «Limp poker là gì?».
- 자동완성: limp là gì poker · limp trong poker là gì · limping là gì · limp call là gì · what is open limp in poker · poker limp pot · poker limp raise · poker limp strategy.
- pokernews 번역 스니펫(1위): «Trong poker, Limp nghĩa là theo cược lớn (big blind) trước khi chia bài, thay vì tăng cược (raise) hoặc bỏ bài (fold).» — 정의 문장 재료(우리 정의는 «call đúng bằng big blind khi chưa ai raise»로 더 정확히).

### 현지 SERP (L-D §3 «limp poker»·«limp trong poker là gì» · §5 natural8·wikipoker·ggpoker)
- natural8 «Cách chơi hiệu quả khi đối đầu với người chơi chiến thuật limp»(2,130단어 · FAQ «Có nên chơi chiến thuật limp trong poker không?» · «Tại sao open - limp là lối chơi yếu và thụ động?» · «Nếu mọi người đều chơi chiến thuật limp…») · wikipoker «Cách chơi Limp Pot hiệu quả: 4 mẹo…»(2,720 · E5 SPR 10.7 경미 오류) · ggpoker «Limping»(900 · 🔴 D1 «AA/KK ở vị trí đầu, limping có thể rất hiệu quả» = 유해 조언) · pokerqz 사전 «Limping đề cập đến hành động call số chip bằng với big blind (BB) ở pre-flop…».
- 그들이 주는 것: «limp = 약함» 일반론 + 림퍼 상대법. 빠진 것: **open-limp vs over-limp 구분표** · «언제 OK인가» 표(SB 컴플리트 · 오버림프 셋마이닝 11,8% · 숏스택 토너) · limp-reraise 투명성 · 1인칭.
- 우리가 더 줄 것: ① EN 표 2개 ② D1 반박(AA/KK UTG 오픈림프는 멀티웨이로 승률을 깎는다 — EN L62~79 논지로 · 새 수치 없음) ③ «chiến thuật limp»(natural8 표기)를 «limp» 영어 정본으로.
- H2 처방(L-D §9-4): «Limp trong poker là gì?»(PAA) · «Open-limp và over-limp khác nhau thế nào?» · «Limp-reraise là gì?» · «Khi nào limp là hợp lý?» · FAQ «Limp poker là gì?» · «Tại sao open-limp là lối chơi yếu?».

### 소유표 (계획 §3-C ⑯)
- 주인인 검색어: limp poker · limp trong poker là gì · limp poker là gì · limp poker meaning · open limp · limp call · limp pot · limp raise.
- 쓰면 안 되는 헤드: «limp là gì»·«limping là gì» 단독(오염) · «call trong poker là gì»(🅰) · «fish là gì»(🅵 → L122 앵커만).
- 위임: vi betting-actions 기존 FAQ «Limp trong poker nghĩa là gì?»는 🅰 재작성 때 1줄 + 이 글 앵커로 줄인다(계획 §3-C ⑯ · 이 레인은 손대지 않는다).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 3건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 69 · seoTitle 59(≤60) · desc 159(≤160) · tldr 426 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (69): Limp trong poker: vì sao 'chỉ theo' preflop thường khiến bạn mất tiền
**seoTitle** (59): Chỉ theo preflop âm thầm ngốn chip — limp trong poker là gì
**desc** (159): Limp là chỉ call big blind trước flop thay vì raise. Vì sao đó thường là sai lầm, chỗ nào limp thật sự ổn, cao thủ trừng phạt người hay limp thế nào — 11 phút.
**tldr** (426): Limp là vào pot trước flop bằng cách chỉ call big blind thay vì raise hoặc bỏ bài. Open-limp (là người đầu tiên vào pot) gần như luôn là sai lầm — limp không thể thắng blind ngay lập tức, bạn nhường thế chủ động và người chơi giỏi sẽ trừng phạt bạn. Nhưng limp không phải lúc nào cũng sai: hoàn thành small blind, over-limp bài đầu cơ sau những người đã limp, và vài tình huống live hay giải đấu stack ngắn là ngoại lệ hợp lý.
**tags**: ["limp poker", "limp trong poker là gì", "limp poker là gì", "limp poker meaning", "open limp poker", "over-limp", "limp trong poker", "poker limp strategy", "limp raise poker"]
#### H2 (EN L## → vi)
- L25 `### Limping, at a glance` → `### Limp trong nháy mắt`
- L36 `## What Does "Limping" Mean in Poker?` → `## Limp trong poker là gì?`
- L44 `## Open-Limp vs Over-Limp: Not the Same Thing` → `## Open-limp và over-limp khác nhau thế nào?`
- L62 `## Why Limping Is Usually a Mistake (4 Reasons)` → `## Vì sao limp thường là sai lầm? (4 lý do)`
- L73 `## Why Raising First-In Beats Limping` → `## Vì sao raise khi vào pot đầu tiên tốt hơn limp?`
- L83 `## So When Is Limping Actually OK?` → `## Vậy khi nào limp thật sự ổn?`
- L104 `## What Is a Limp-Reraise?` → `## Limp-reraise là gì?`
- L112 `## Is Limping a "Fish" Tell? How Good Players Punish It` → `## Limp có phải dấu hiệu của "fish"? Cao thủ trừng phạt limp pot thế nào?`
- L126 `## Limping in Live Low-Stakes vs Online / GTO` → `## Limp ở bàn live cược nhỏ và online/GTO khác gì?`
- L139 `## FAQ` → `## Câu hỏi thường gặp`
- L179 `## The 3 Things to Remember` → `## Những điều cần nhớ`
- L189 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 8/9
#### FAQ (EN → vi)
1. What does it mean to limp in poker? → `Limp poker là gì?` (PAA 축어)
2. Why is limping bad in poker? → `Vì sao limp bị xem là xấu trong poker?` (natural8 «Tại sao open - limp là lối chơi yếu và thụ động?»)
3. Is limping ever a good strategy? → `Có nên limp trong poker không — limp có bao giờ là chiến thuật tốt?` (🔧 Opus 조정: natural8 «chiến thuật limp» 번역투 회피 · AC «poker limp strategy»)
4. What is the difference between open-limping and over-limping? → `Open-limp và over-limp khác nhau ở điểm nào?` (AC «what is open limp in poker»)
5. What is a limp-reraise? → `Limp-reraise là gì?`
6. Should you ever open-limp preflop? → `Có bao giờ nên open-limp preflop không?`
7. Is it okay to limp in the small blind? → `Limp ở small blind có ổn không?`
8. What is the difference between a limper and a calling station? → `Limper và calling station khác nhau ở đâu?` (🔧 Opus 조정: «limp call là gì»는 limp 후 call 뜻 — EN에 그 내용이 없어 약속하지 않는다)
9. What is a player who limps a lot called? → `Người hay limp được gọi là gì?`
#### 흡수 키워드
- limp poker(20) → seoTitle/H1/tags
- limp trong poker là gì(10) → seoTitle/tags/H2 L36 (PAA 축어)
- limp poker là gì(10) → tags/FAQ 1 (PAA 축어)
- limp poker meaning(10) → tags
- limp là gì poker(AC) → H2 L36 본문
- limp call là gì(AC) → 조준 안 함(🔧 EN에 limp-call 내용 없음)
- what is open limp in poker(AC) → H2 L44/FAQ 4
- poker limp pot(AC) → H2 L112
- poker limp raise(AC) → tags/H2 L73
- poker limp strategy(AC) → tags/FAQ 3
- limp là gì(170) · limping là gì(110) → 오염 · 조준 안 함

### 하지 말 것
- «chiến thuật limp»(natural8 번역투) 대신 «limp» 영어 정본 · 사람 = «limper».
- 마무리 H2 «The 3 Things to Remember» → `## Những điều cần nhớ`(개수 라벨 금지).
- D1 반박은 EN 논지(L62~79) 범위 안 — 새 승률 수치 금지.
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L29 · L96 · L100 · L108 · L128 · L159

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L19: When I started playing, I limped into almost every pot. It felt safe — I got to see a flop cheaply, I wasn't risking much, and I "kept my options open…

---

## holdem-3bet — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "3-Betting in Poker: When to 3-Bet, How Much, and How to Face One",
seoTitle: "The 3-Bet Guide That Shows the Math — When, How Much, vs What",
desc: "What a 3-bet is and why it's called that, when to 3-bet for value or as a light bluff, the exact sizing math, and how to respond when someone 3-bets you.",
tldr: "A 3-bet is the first re-raise before the flop — called a 3-bet because the big blind is the first bet, the open-raise the second, and your re-raise the third. Value-3-bet a tight core (QQ+, AK) plus a few suited blocker bluffs like A5s, size it around 3x the open in position and 4x out of position, and keep your overall 3-bet frequency near 6–10%. When you're the one facing a 3-bet, 4-bet your premiums, call the hands that play well, and fold the rest — folding more than 'balanced' against low-stakes players who never bluff.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "♦️",
image: "/images/holdem-3bet-hero.webp",
imageAlt: "A poker player sliding a stack of chips forward for a re-raise while the original raiser looks on, a preflop 3-bet confrontation on the green felt",
tags: ["3 bet poker", "what is a 3-bet", "3-bet sizing", "3-bet range", "light 3-bet", "3-bet bluff", "when to 3-bet", "squeeze play", "facing a 3-bet", "linear vs polarized range"],
# title 길이 64
# seoTitle 길이 61
# desc 길이 153
# tldr 길이 530
```

### 구조 (EN content L19~L330 · L## = EN 파일 줄)
#### 헤딩
- L25 ### The 3-bet, by the numbers
- L36 ## What Is a 3-Bet in Poker?
- L50 ## Why 3-Bet At All? What a 3-Bet Actually Does
- L63 ## When Should You 3-Bet? Value Hands vs. Light Bluffs
- L89 ## Linear vs. Polarized 3-Bet Ranges
- L109 ## How Much Should You 3-Bet? (Sizing, With the Math)
- L134 ## 3-Bet, Flat, or Fold? A Decision Table
- L154 ## The Squeeze Play: 3-Betting a Raiser *and* a Caller
- L168 ## Facing a 3-Bet: Do You Call, 4-Bet, or Fold?
- L194 ## A Real 3-Bet Hand, Start to Finish
- L206 ## The 6 Most Common 3-Betting Mistakes
- L230 ## FAQ
- L294 ## The 3-Bet Playbook, In Short
- L307 ## Related Posts

#### FAQ 15문항
- L232 **Q. What is a 3-bet in poker?**
- L236 **Q. Why is it called a 3-bet?**
- L240 **Q. What is the difference between a 3-bet and a 4-bet?**
- L244 **Q. What hands should you 4-bet with, and how much?**
- L248 **Q. When should you 5-bet in poker?**
- L252 **Q. What hands should you 3-bet?**
- L256 **Q. When should you 3-bet vs. just call (flat)?**
- L260 **Q. What is a light 3-bet?**
- L264 **Q. What is the difference between a linear and a polarized 3-bet range?**
- L268 **Q. How much should you 3-bet?**
- L272 **Q. What is a good 3-bet percentage?**
- L276 **Q. What is a squeeze play?**
- L280 **Q. How do you respond to a 3-bet?**
- L284 **Q. What is a good fold-to-3-bet percentage?**
- L288 **Q. Should you 3-bet or 4-bet all-in with a short stack in a tournament?**

#### 표 6개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L77 (4행) | Light 3-bet hand | Why it's a great bluff |
- L95 (4행) | | Linear (merged) | Polarized |
- L115 (4행) | Situation | Size | 3bb open becomes… | Why |
- L140 (6행) | Your hand | In position (e.g. button vs a steal) | Out of position (small blind — the big blind flats wider,
- L182 (4행) | Villain's fold-to-3-bet stat | What it tells you | Your adjustment |
- L210 (7행) | The mistake | Why it costs you | The fix |

#### 디렉티브 · 하이라이트 색 {(색 없음), g}
- L27 :::stripe
- L32 :::
- L225 :::readnext[Keep reading]
- L228 :::

#### 이미지 3 (경로 불변 · alt·캡션은 베트남어 재저작)
- L65 ![A dark, on-brand grid infographic splitting 3-bet hands into two columns — VALUE 3-BETS like pocket aces, kings, queens and ace-king, and LIGHT 3-BETS like suited wheel aces and suited connectors](/images/holdem-3bet-range-grid.webp "A healthy 3-bet range has two parts: a value core you want called, and a few suited blocker bluffs you're happy to fold to a 4-bet")
- L156 ![Three players' chip stacks pushed toward the middle of the green felt as one player slides a larger re-raise forward, squeezing an open-raiser and a caller](/images/holdem-3bet-squeeze.webp "A squeeze punishes an open-raiser and a flat-caller at once — the extra dead money raises the payoff of even a light 3-bet")
- L170 ![A poker player staring down a preflop re-raise with a hand resting on their chips, weighing whether to call, 4-bet, or fold to a 3-bet](/images/holdem-3bet-facing.webp "The half of 3-betting nobody teaches: when someone re-raises you, most of your range should simply fold — especially against players who never bluff")

#### 원시 HTML 30줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L75 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L83 </div>
- L93 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L101 </div>
- L113 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L121 </div>
- L138 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L148 </div>
- L180 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L188 </div>
- L208 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L219 </div>
- L309 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L310   <a href="/en/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L311     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L312     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L313     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where 3-betting fits in a winning game</div>
- L315   <a href="/en/blog/holdem-limping" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;te…
- L316     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L317     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Why Limping Costs You</div>
- L318     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Raise or fold — don't just call</div>
- L320   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L321     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L322     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L323     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why 3-bets work better in position</div>
- L325   <a href="/en/blog/holdem-starting-hands-chart" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-r…
- L326     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L327     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Starting Hands Chart</div>
- L328     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Which hands are worth raising at all</div>
- L330 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" [md] ✅51
- L21 /en/blog/holdem-limping [md] ✅51
- L46 /en/blog/holdem-betting-actions [md] ✅51
- L65 /images/holdem-3bet-range-grid.webp "A healthy 3-bet range has two parts: a value core you want called, and a few suited blocker bluffs you're happy to fold to a 4-bet" [img] img(경로 불변)
- L85 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" [md] ✅51
- L150 /en/blog/holdem-position-play [md] ✅51
- L156 /images/holdem-3bet-squeeze.webp "A squeeze punishes an open-raiser and a flat-caller at once — the extra dead money raises the payoff of even a light 3-bet" [img] img(경로 불변)
- L170 /images/holdem-3bet-facing.webp "The half of 3-betting nobody teaches: when someone re-raises you, most of your range should simply fold — especially against players who never bluff" [img] img(경로 불변)
- L226 /en/blog/holdem-strategy [readnext] ✅51
- L227 /en/blog/holdem-position-play [readnext] ✅51
- L301 /en/blog/3bet-pot-cbet [md] ✅51(🅶 GTO — 연다 · thumb는 `-en.webp` 그대로 · §0-5)
- L303 /en/blog/holdem-starting-hands-chart [md] ✅51
- L303 /en/blog/holdem-position-play [md] ✅51
- L303 /en/blog/holdem-strategy [md] ✅51
- L310 /en/blog/holdem-strategy [html] ✅51
- L315 /en/blog/holdem-limping [html] ✅51
- L320 /en/blog/holdem-position-play [html] ✅51
- L325 /en/blog/holdem-starting-hands-chart [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B·§2 · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| 3bet poker | 90 | seoTitle · tags(«3bet poker» 붙여쓰기 그대로) |
| 3 bet trong poker là gì | 20 | H1 · 첫 H2 L36 · tags |
| 3 bet là gì | 20 | 섞임(3/10) → **tags만** |
| 3bet là gì · 3bet poker là gì(자동완성) | 10 | tags |
| 3bet range · 3bet light | 각 10 | H2 L63·L89 · tags |
| squeeze poker | 10 | H2 L154 · tags |
| 4bet poker | 10 | FAQ 3·4 · tags(«4bet poker» 결합형만) |
| 3 bet 4 bet là gì · 3 bet là sao · 3 bet light poker · 3bet pot poker · poker 3bet size(자동완성) | `-` | FAQ 3 · H2 L109(size) · L294 ⑥(3-bet pot) |
| 🔴 오염 | — | «3 bet»·«3bet» 27,100 = 도박 브랜드(3bet.cards) · «4bet» 40(4bet365) → 단독 태그·단독 헤드 금지 · 본문 표기는 «3-bet» 하이픈 |

### PAA·자동완성 (축어)
- PAA 없음. related(«3bet poker»): 3bet help · Range 3bet · Bet3 · X-Poker(🔴 금지 축). related(«vị trí trong poker»): «Raise trong Poker là gì»(🅰).
- 자동완성: 3 bet là gì · 3 bet trong poker là gì · 3 bet light poker · 3bet poker là gì · 3 bet 4 bet là gì · 3 bet là sao · 3bet range · 3bet light · 3bet pot poker · poker 3bet 4bet · poker 3bet size.

### 현지 SERP (L-D §3 «3bet poker» · §5 natural8·wikipoker·ggpoker · §6 E1·E3·✓1·✓2)
- natural8 «3-Bet trong poker: Định nghĩa và cách dùng»(2,710 · H2 «3-bet là gì trong poker?» · «Các loại phạm vi 3-Bet» · H3 «Phạm vi phân cực»·«Phạm vi hợp nhất (Merged Range)» · 🔴 E3 «lần tăng cược đầu tiên được biết đến là cược Big Blind» — BB는 강제 1벳이지 raise가 아니다) · wikipoker «Đối mặt với 3-bet ở preflop khi có và không có vị trí»(4,600 · Equilab 캡처 45 · ✓1 팟오즈 5.5/17.5 = 31%) · ggpoker «3-Betting và 4-Betting»(650 · 🔴 E1 «Một sảnh đánh bại một thùng» 족보 역전).
- 그들이 주는 것: 정의 · 레인지 유형 · 사이징 예시($8 → $24). 빠진 것: **«왜 3인가»의 정확한 설명(BB = bet 1)** · 사이징 산수 표(3x/4x/squeeze) · 3-bet/flat/fold 결정표 · 페이싱 3-bet(MDF 산수) · 실전 핸드 7장(A♠Q♠ · Q♦8♣4♥) · 6 실수 표.
- 우리가 더 줄 것: ① E3 정답 H2 «vì sao gọi là 3-bet» ② 표 6개 전부 ③ «phạm vi» 대신 **range** 정본 ④ 블로커 콤보 산수(AA 6→3 · AK 16→12) 축어.
- H2 처방(L-D §9-3): «3-bet trong poker là gì — vì sao gọi là "3"?» · «3-bet và 4-bet khác nhau thế nào?» · «3-bet light là gì?» · «Range 3-bet theo vị trí» · «Chơi 3-bet pot thế nào?»(→ 3bet-pot-cbet 앵커 · L301).

### 소유표 (계획 §3-C ⑮)
- 주인인 검색어: 3bet poker · 3 bet trong poker là gì · 3bet là gì · 3 bet là gì(tags) · 3bet light · 3bet range · squeeze poker · 4bet poker · 3 bet 4 bet là gì.
- 쓰면 안 되는 헤드: «3 bet»·«3bet»·«4bet» 단독(브랜드 오염) · «raise trong poker là gì»(🅰) · «3-bet pot» 스팟 헤드(🅶 3bet-pot 3편 — 이 글은 L294 ⑥ 1문단 + 앵커만) · «GTO/solver»(⑪).
- 위임 앵커: 액션 기초 → holdem-betting-actions(L46) · 핸드 → holdem-starting-hands-chart(L85·L303) · 포지션 → holdem-position-play(L150·L303) · 3-bet pot 플랍 → 3bet-pot-cbet(L301 · 🅶 연다) · 전략 허브 → holdem-strategy(L21·L303).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 0건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 66 · seoTitle 56(≤60) · desc 158(≤160) · tldr 448 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (66): 3-bet trong poker: khi nào nên 3-bet, bao nhiêu và đối phó thế nào
**seoTitle** (56): Đừng 3-bet theo cảm tính — 3bet poker khi nào, bao nhiêu
**desc** (158): Bị 3-bet là lúng túng? 3-bet trong poker là gì, vì sao gọi là '3', khi nào 3-bet value hay light, sizing kèm phép tính và cách đáp trả khi bị 3-bet — 16 phút.
**tldr** (448): 3-bet là lần re-raise đầu tiên trước flop — gọi là 3-bet vì big blind là cược thứ nhất, open-raise là thứ hai và re-raise là thứ ba. 3-bet value với lõi chặt (QQ+, AK) cộng vài bluff có blocker như A5s, size khoảng 3 lần open khi có vị trí và 4 lần khi không, giữ tần suất 3-bet quanh 6–10%. Khi bị 3-bet, hãy 4-bet bài premium, call bài chơi tốt postflop và bỏ phần còn lại — bỏ nhiều hơn mức 'cân bằng' trước đối thủ cược nhỏ không bao giờ bluff.
**tags**: ["3bet poker", "3 bet trong poker là gì", "3bet là gì", "3 bet là gì", "3bet light", "3bet range", "squeeze poker", "4bet poker", "3-bet sizing", "3 bet light poker"]
#### H2 (EN L## → vi)
- L25 `### The 3-bet, by the numbers` → `### 3-bet qua những con số`
- L36 `## What Is a 3-Bet in Poker?` → `## 3-bet trong poker là gì — vì sao gọi là "3"?`
- L50 `## Why 3-Bet At All? What a 3-Bet Actually Does` → `## Vì sao phải 3-bet? 3-bet thực sự làm được gì?`
- L63 `## When Should You 3-Bet? Value Hands vs. Light Bluffs` → `## Khi nào nên 3-bet? Bài value và 3-bet light`
- L89 `## Linear vs. Polarized 3-Bet Ranges` → `## Range 3-bet tuyến tính (linear) và phân cực (polarized) khác nhau thế nào?`
- L109 `## How Much Should You 3-Bet? (Sizing, With the Math)` → `## 3-bet bao nhiêu là đủ? (Sizing kèm phép tính)`
- L134 `## 3-Bet, Flat, or Fold? A Decision Table` → `## 3-bet, call hay fold? Bảng quyết định`
- L154 `## The Squeeze Play: 3-Betting a Raiser *and* a Caller` → `## Squeeze là gì — 3-bet khi có cả người raise và người call?`
- L168 `## Facing a 3-Bet: Do You Call, 4-Bet, or Fold?` → `## Bị 3-bet thì call, 4-bet hay fold?`
- L194 `## A Real 3-Bet Hand, Start to Finish` → `## Một ván 3-bet thực tế từ đầu đến cuối`
- L206 `## The 6 Most Common 3-Betting Mistakes` → `## 6 sai lầm 3-bet phổ biến nhất là gì?`
- L230 `## FAQ` → `## Câu hỏi thường gặp`
- L294 `## The 3-Bet Playbook, In Short` → `## Những điều cần nhớ`
- L307 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 9/11
#### FAQ (EN → vi)
1. What is a 3-bet in poker? → `3bet poker là gì?` (AC «3bet poker là gì»)
2. Why is it called a 3-bet? → `Vì sao gọi là 3-bet?` (AC «3 bet là sao»)
3. What is the difference between a 3-bet and a 4-bet? → `3-bet và 4-bet khác nhau thế nào?` (AC «3 bet 4 bet là gì»)
4. What hands should you 4-bet with, and how much? → `Nên 4-bet với bài gì và bao nhiêu?`
5. When should you 5-bet in poker? → `Khi nào nên 5-bet trong poker?`
6. What hands should you 3-bet? → `Nên 3-bet với những bài nào?`
7. When should you 3-bet vs. just call (flat)? → `Khi nào nên 3-bet thay vì chỉ call (flat)?`
8. What is a light 3-bet? → `3-bet light là gì?` (AC «3 bet light poker»)
9. What is the difference between a linear and a polarized 3-bet range? → `Range 3-bet linear và polarized khác nhau ở đâu?` (AC «3bet range»)
10. How much should you 3-bet? → `Nên 3-bet bao nhiêu?` (AC «poker 3bet size»)
11. What is a good 3-bet percentage? → `Tỷ lệ 3-bet bao nhiêu là tốt?`
12. What is a squeeze play? → `Squeeze trong poker là gì?` (squeeze poker 10)
13. How do you respond to a 3-bet? → `Phản ứng thế nào khi bị 3-bet?`
14. What is a good fold-to-3-bet percentage? → `Tỷ lệ fold khi bị 3-bet bao nhiêu là tốt?`
15. Should you 3-bet or 4-bet all-in with a short stack in a tournament? → `Stack ngắn trong giải đấu nên 3-bet hay 4-bet all-in?`
#### 흡수 키워드
- 3bet poker(90) → seoTitle/tags/FAQ 1
- 3 bet trong poker là gì(20) → desc/tags/H2 L36
- 3 bet là gì(20 · 섞임) → tags만
- 3bet là gì(10) → tags
- 3bet range(10) → tags/H2 L89/FAQ 9
- 3bet light(10) · 3 bet light poker(AC) → tags/H2 L63/FAQ 8
- squeeze poker(10) → tags/H2 L154/FAQ 12
- 4bet poker(10) · poker 3bet 4bet(AC) → tags/H2 L168/FAQ 3·4
- 3 bet là sao · 3 bet 4 bet là gì(AC) → H2 L36/FAQ 2·3
- poker 3bet size(AC) → tags(3-bet sizing)/H2 L109/FAQ 10
- 3bet pot poker(AC) → H2 L194 본문
- 3 bet(27.100) · 3bet(단독) · 4bet(40 단독) → 오염 · 조준 안 함

### 하지 말 것
- «3 bet» 띄어쓰기 단독·«4bet» 단독을 tags·seoTitle에 쓰지 마라 — 브랜드 수요. 본문은 «3-bet / 4-bet / 5-bet» 하이픈.
- «phạm vi»(natural8 번역투) 금지 → **range** · «tố lại» 첫 등장 괄호 1회만.
- MDF 산수(L161: 4,5bb ÷ (4,5 + 9) ≈ 33%) · 블로커 콤보(6→3 · 16→12) · 사이징 표($18 · $24~27 · $30~33) · 팟 2,6× · SPR 4,7 = 축어 + vi 구분자.
- 실전 핸드(L196~202): A♠Q♠ · Q♦8♣4♥ · 베스트5 Q♠ Q♦ A♠ 8♣ 4♥ · $6/$18/$39/$48 = 축어.
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L19 · L29 · L30 · L31 · L70 · L71 · L79 · L80 · L81 · L85 · L98 · L103 · L111 · L115 · L117 · L118 · L119 · L123 · L125 · L127 · L130 · L142 · L143 · L145 · L162 · L164 · L174 · L178 · L184 · L185 · L186 · L196 · L198★ · L199★ · L202 · L212 · L213 · L216 · L246 · L250 · L254 · L262 · L270 · L274 · L282 · L286 · L290 · L297 · L298 · L301

★ 카드가 든 줄 축어:
- L198: - **Preflop:** A loose cutoff opens to ==$6== (3bb). I'm on the button with ==A♠Q♠==. This is a clear **value 3-bet** against a wide late-position open, and I'm in position, so I make it ==$18== (3x). The blinds fold; the cutoff calls. Pot is $39.
- L199: - **Flop:** ==Q♦ 8♣ 4♥.== I flop **top pair, top kicker** — my A♠Q♠ makes a pair of queens with the best possible kicker (the ace). Best five cards: Q♠ Q♦ A♠ 8♣ 4♥ = one pair (queens) with the ace kicker. Against his range of worse queens, eights, and floats, I'm way ahead.

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L19: The hand that taught me what a 3-bet is really *for* went like this: a loose player opened, I looked down at A-K, and — like every beginner — I just c…
- L174: - **4-bet** — for value with your premiums (QQ+, AK), plus the occasional blocker bluff (an A5s-type hand). A value 4-bet says "I'm not going anywhere…
- L198: - **Preflop:** A loose cutoff opens to ==$6== (3bb). I'm on the button with ==A♠Q♠==. This is a clear **value 3-bet** against a wide late-position ope…
- L199: - **Flop:** ==Q♦ 8♣ 4♥.== I flop **top pair, top kicker** — my A♠Q♠ makes a pair of queens with the best possible kicker (the ace). Best five cards: Q…
- L200: - **The point:** because I 3-bet preflop, the pot is already big and I have the betting lead, so I bet again for value and get paid by worse queens an…
- L202: Now flip it: if I'd 3-bet a **light** hand like A5s there and the cutoff had **4-bet** to $48 (about 2.7x — a touch over the in-position 2.2–2.5x, bec…

---

## holdem-continuation-bet — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check",
seoTitle: "Why 'C-Bet Every Flop' Bleeds Chips — Continuation Bet Strategy",
desc: "What a continuation bet is, which flops to c-bet and which to check, exact sizing — small on dry boards, big on wet — and how often to fire in position.",
tldr: "A continuation bet (c-bet) is a bet on the flop by the player who raised preflop. The modern rule isn't 'c-bet every flop' — it's to bet the flops that favor your range (high, dry boards like K-7-2) small and often, and check the ones that favor your opponent (low, connected boards like 7-6-5). Size small — about one-third pot — on dry boards, big — two-thirds or more — on wet ones, c-bet less out of position when you were the single raiser (as the out-of-position 3-bettor it flipped to over 97% on the three boards we solved), and much less multiway.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "15 min",
emoji: "🔥",
image: "/images/holdem-continuation-bet-hero.webp",
imageAlt: "A poker player betting chips onto a freshly dealt flop after raising preflop, the classic continuation bet moment on the green felt",
tags: ["continuation bet", "c-bet poker", "what is a c-bet", "c-bet sizing", "c-bet frequency", "when to c-bet", "when not to c-bet", "c-bet out of position", "multiway c-bet", "delayed c-bet"],
# title 길이 76
# seoTitle 길이 63
# desc 길이 152
# tldr 길이 556
```

### 구조 (EN content L21~L301 · L## = EN 파일 줄)
#### 헤딩
- L27 ### The c-bet, by the numbers
- L38 ## What Is a Continuation Bet (C-Bet)?
- L54 ## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed
- L69 ## Which Flops to C-Bet: It's All About Board Texture
- L95 ## How Often Should You C-Bet? (Frequency)
- L115 ## How Much Should You C-Bet? (Sizing)
- L133 ## C-Betting Out of Position
- L144 ## C-Betting in Multiway Pots
- L152 ## The Delayed C-Bet
- L164 ## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)
- L177 ## A Real C-Bet Hand, Start to Finish
- L189 ## The 7 Most Common C-Bet Mistakes
- L214 ## FAQ
- L266 ## The C-Bet Playbook, In Short
- L278 ## Related Posts

#### FAQ 12문항
- L216 **Q. What is a continuation bet in poker?**
- L220 **Q. Why is it called a continuation bet?**
- L224 **Q. Should you c-bet every flop?**
- L228 **Q. How often should you c-bet?**
- L232 **Q. How much should you c-bet?**
- L236 **Q. Should you c-bet out of position?**
- L240 **Q. Should you c-bet in a multiway pot?**
- L244 **Q. What is a delayed c-bet?**
- L248 **Q. When should you NOT c-bet?**
- L252 **Q. Is a c-bet a bluff?**
- L256 **Q. What is a value bet in poker?**
- L260 **Q. What is a good c-bet percentage on a poker HUD?**

#### 표 3개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L77 (6행) | Flop type | Example | Who it favors | In position | Why |
- L101 (6행) | Situation | Rough c-bet frequency | Note |
- L193 (8행) | The mistake | Why it costs you | The fix |

#### 디렉티브 · 하이라이트 색 {(색 없음)}
- L29 :::stripe
- L34 :::
- L209 :::readnext[Keep reading]
- L212 :::

#### 이미지 2 (경로 불변 · alt·캡션은 베트남어 재저작)
- L71 ![A dry, disconnected J-7-2 rainbow flop on the green felt with a small stack of chips bet in front, the kind of high-card board that belongs to the preflop raiser](/images/holdem-cbet-dry-board.webp "High, dry, disconnected flops like this J-7-2 favor the preflop raiser — the classic small, high-frequency c-bet boards")
- L135 ![A poker player acting first out of position, fingers on the felt beside their chips with an opponent waiting in the shadows behind](/images/holdem-cbet-oop.webp "Out of position you act first with no information, so you check far more and c-bet a tighter, stronger range")

#### 원시 HTML 24줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L75 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L85 </div>
- L99 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L109 </div>
- L191 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L203 </div>
- L280 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L281   <a href="/en/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L282     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L283     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L284     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where the c-bet fits in a winning game</div>
- L286   <a href="/en/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-…
- L287     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L288     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting Explained</div>
- L289     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">C-betting starts in 3-bet pots too</div>
- L291   <a href="/en/blog/holdem-position-play" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:1…
- L292     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L293     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">Playing Your Position</div>
- L294     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why c-bets work better in position</div>
- L296   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L297     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L298     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L299     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Why a big c-bet charges the draws</div>
- L301 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L23 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" [md] ✅51
- L50 /en/blog/holdem-betting-actions [md] ✅51
- L65 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" [md] ✅51(🅶 GTO — 연다 · thumb는 `-en.webp` 그대로 · §0-5)
- L71 /images/holdem-cbet-dry-board.webp "High, dry, disconnected flops like this J-7-2 favor the preflop raiser — the classic small, high-frequency c-bet boards" [img] img(경로 불변)
- L105 /en/blog/holdem-position-play [md] ✅51
- L129 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" [md] ✅51(🅶 GTO — 연다 · thumb는 `-en.webp` 그대로 · §0-5)
- L135 /images/holdem-cbet-oop.webp "Out of position you act first with no information, so you check far more and c-bet a tighter, stronger range" [img] img(경로 불변)
- L137 /en/blog/holdem-position-play [md] ✅51
- L140 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" [md] ✅51
- L210 /en/blog/holdem-strategy [readnext] ✅51
- L211 /en/blog/holdem-3bet [readnext] ✅51
- L274 /en/blog/holdem-3bet [md] ✅51
- L274 /en/blog/holdem-position-play [md] ✅51
- L274 /en/blog/holdem-strategy [md] ✅51
- L281 /en/blog/holdem-strategy [html] ✅51
- L286 /en/blog/holdem-3bet [html] ✅51
- L291 /en/blog/holdem-position-play [html] ✅51
- L296 /en/blog/holdem-pot-odds [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B·§2 · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| c bet là gì | 30 | seoTitle · tags(섞임 5/7이나 베트남어 원문 0 · 포커 결합형 «c bet» 자체가 포커 술어 → 허용) |
| c bet poker là gì | 10 | H1 · FAQ 1 · tags |
| c bet poker · cbet poker · continuation bet · cbet meaning poker | 각 10 | tags |
| c-bet trong poker · continuation bet là gì(자동완성) | `-` | 첫 H2 L38 «C-bet trong poker là gì?» · tags |
| continuation bet sizing · delayed continuation bet(자동완성) | `-` | H2 L115 · L152 «Delayed c-bet là gì?» |
| 🔴 오염 | — | cbet 1,300(0/8 · cbet.lt 카지노·CBET 토큰) → 단독 «cbet» 태그·헤드 금지 |

### PAA·자동완성 (축어)
- PAA 없음. related: C-bet meaning poker · What is a 3-bet/4-bet in poker · What is a donk bet in poker · What is a value bet in poker · What is range in poker.
- 자동완성: c bet là gì · c bet trong poker là gì · c bet poker là gì · continuation bet sizing · delayed continuation bet · (🔴 cbeta · bet88 · cbet app · kubets = 금지 축).

### 현지 SERP (L-D §3 c-bet 4쿼리 · §5 wikipoker · §8 · §9-5)
- 🔴 organic 38건 중 **베트남어 원문 0**(영·체코·네덜란드·이탈리아·덴마크·페르시아 + reddit tl=vi 1 «Chiến lược Cbet Flop Đơn giản» + 기생 1). SERP 밖 유일한 vi 원문 = wikipoker «5 Tình huống không nên c-bet trong poker»(2,620 · 솔버 캡처 42 · 무출처 «donk 26% · check 71% · c-bet 55%»).
- 그들이 주는 것: 스팟 5개(BTN vs BB 7♦6♦5♥ 등). 빈자리: **c-bet 정의·«왜 continuation인가»·보드 텍스처 표·빈도 표·사이징 산수($30 → $10/$20)·OOP·멀티웨이·delayed·실수 7표** 전부 베트남어로 없음.
- 우리가 더 줄 것: ① 정의 글 각도(소유표 ⑭ · L-G 13편은 한정어만) ② 설정 명시된 솔버 수치(97%+ · 57,8% · 98,2% · 98,4% · 45,1/54,9) ③ 실전 2스팟(A♣K♦ on K♠7♦2♣ · A♥Q♥ on 7♠6♠5♦).
- H2 처방: «C-bet trong poker là gì?» · «Khi nào không nên c-bet?» · «C-bet bao nhiêu là đủ?» · «Delayed c-bet là gì?».

### 소유표 (계획 §3-C ⑭)
- 주인인 검색어: c bet là gì · c bet poker là gì · c bet poker · cbet poker · continuation bet (là gì) · c-bet trong poker · delayed c-bet · c-bet sizing.
- 쓰면 안 되는 헤드: «cbet» 단독(오염) · «donk bet»·«check raise»(🅶 소유 · 본문 언급만) · «value bet»은 FAQ 11로 받되 헤드 조준 안 함 · «GTO/solver»(⑪).
- 위임 앵커: 액션 → holdem-betting-actions(L50) · 포지션 → holdem-position-play(L105·L137·L140·L274) · 3-bet → holdem-3bet(L211·L274) · 팟오즈 → holdem-pot-odds(카드) · GTO 스팟 → a-high-board-cbet(L65) · 3bet-pot-bet-sizing(L129) — **🅶 연다**(§0-5 · thumb `-en.webp`).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 0건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 73 · seoTitle 57(≤60) · desc 158(≤160) · tldr 422 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (73): Continuation bet (c-bet): khi nào cược ở flop, bao nhiêu và khi nào check
**seoTitle** (57): Vì sao c-bet mọi flop ngốn chip — c bet là gì trong poker
**desc** (158): Cứ raise là cược tiếp ở flop? Continuation bet là gì, flop nào nên c-bet hay check, sizing nhỏ ở flop khô, lớn ở flop ướt, và tần suất khi có vị trí: 15 phút.
**tldr** (422): Continuation bet (c-bet) là cược ở flop của người đã raise preflop. Quy tắc hiện đại không phải 'c-bet mọi flop' mà là cược nhỏ và thường ở flop có lợi cho range của bạn (bài chung cao, khô như K-7-2), check ở flop có lợi cho đối thủ (thấp, liên kết như 7-6-5). Size khoảng 1/3 pot ở flop khô, 2/3 trở lên ở flop ướt; c-bet ít hơn khi không có vị trí nếu bạn là người raise duy nhất, và ít hơn nhiều trong pot nhiều người.
**tags**: ["c bet là gì", "c bet poker là gì", "c bet poker", "cbet poker", "continuation bet", "c-bet trong poker", "continuation bet là gì", "delayed c-bet", "c-bet sizing"]
#### H2 (EN L## → vi)
- L27 `### The c-bet, by the numbers` → `### C-bet qua những con số`
- L38 `## What Is a Continuation Bet (C-Bet)?` → `## C-bet trong poker là gì?`
- L54 `## The Old "C-Bet Every Flop" Advice Is Wrong — Here's What Changed` → `## Vì sao lời khuyên cũ "c-bet mọi flop" đã sai — điều gì thay đổi?`
- L69 `## Which Flops to C-Bet: It's All About Board Texture` → `## Flop nào nên c-bet? Tất cả nằm ở kết cấu bài chung`
- L95 `## How Often Should You C-Bet? (Frequency)` → `## Nên c-bet thường xuyên đến mức nào? (Tần suất)`
- L115 `## How Much Should You C-Bet? (Sizing)` → `## C-bet bao nhiêu là đủ? (Sizing)`
- L133 `## C-Betting Out of Position` → `## Có nên c-bet khi không có vị trí?`
- L144 `## C-Betting in Multiway Pots` → `## C-bet trong pot nhiều người thì sao?`
- L152 `## The Delayed C-Bet` → `## Delayed c-bet là gì?`
- L164 `## When NOT to C-Bet (Checking Is a Weapon, Not a White Flag)` → `## Khi nào KHÔNG nên c-bet? (Check là vũ khí, không phải cờ trắng)`
- L177 `## A Real C-Bet Hand, Start to Finish` → `## Một ván c-bet thực tế từ đầu đến cuối`
- L189 `## The 7 Most Common C-Bet Mistakes` → `## 7 sai lầm c-bet phổ biến nhất là gì?`
- L214 `## FAQ` → `## Câu hỏi thường gặp`
- L266 `## The C-Bet Playbook, In Short` → `## Những điều cần nhớ`
- L278 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 10/12
#### FAQ (EN → vi)
1. What is a continuation bet in poker? → `C bet poker là gì?` (AC «c bet poker là gì» 10)
2. Why is it called a continuation bet? → `Vì sao gọi là continuation bet?`
3. Should you c-bet every flop? → `Có nên c-bet mọi flop không?`
4. How often should you c-bet? → `Nên c-bet thường xuyên đến mức nào?`
5. How much should you c-bet? → `Nên c-bet bao nhiêu?` (AC «continuation bet sizing»)
6. Should you c-bet out of position? → `Có nên c-bet khi không có vị trí không?`
7. Should you c-bet in a multiway pot? → `Có nên c-bet trong pot nhiều người không?`
8. What is a delayed c-bet? → `Delayed c-bet là gì?` (AC «delayed continuation bet»)
9. When should you NOT c-bet? → `Khi nào không nên c-bet?`
10. Is a c-bet a bluff? → `C-bet có phải là bluff không?`
11. What is a value bet in poker? → `Value bet trong poker là gì?` (related «What is a value bet in poker»)
12. What is a good c-bet percentage on a poker HUD? → `Tỷ lệ c-bet bao nhiêu là tốt trên HUD poker?`
#### 흡수 키워드
- c bet là gì(30) → seoTitle/tags
- c bet poker là gì(10) → tags/FAQ 1
- c bet poker(10) · cbet poker(10) → tags
- continuation bet(10) · continuation bet là gì → H1/desc/tags/FAQ 2
- cbet meaning poker(10) · C-bet meaning poker(related) → H2 L38
- c bet trong poker là gì(AC) · c-bet trong poker → tags/H2 L38
- continuation bet sizing(AC) → tags/H2 L115/FAQ 5
- delayed continuation bet(AC) → tags/H2 L152/FAQ 8
- What is a value bet in poker(related) → FAQ 11
- What is a donk bet in poker(related) → H2 L133 본문
- cbet(1.300 단독) → 오염 · 조준 안 함

### 하지 말 것
- «cược tiếp tục»(natural8 번역투)는 첫 등장 괄호 1회 — 본문 정본은 **c-bet**.
- L65·L129 GTO 문단은 **연다**(§0-5) — 파일 머리 주석의 «7개 번역본 전파 안 함»은 fr 선례로 해제(헤드 요청 기록). 수치 98,2% · 45,1% · 54,9% · 98,4% 축어.
- 보드 표기 `K‑7‑2` · `7‑6‑5` 등 하이픈 축어 · 표 L77 카드 K♠9♠4♠ · Q♥J♥7♣ 축어 · L105 `Q♥T♥7♠` → `Q♥10♥7♠`.
- 사이징 산수($30 → $10 · $20) · 67,6% · 55~70% · 85% · 40% = 축어 + vi 구분자.
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L30 · L32 · L42 · L65 · L71 · L79 · L80 · L81 · L82★ · L83★ · L91 · L103 · L104 · L105★ · L106 · L111 · L122 · L124 · L125 · L129★ · L168 · L181★ · L183★ · L199 · L226 · L230 · L262 · L271

★ 카드가 든 줄 축어:
- L82: | **Monotone** | K♠9♠4♠ | Mixed — caution | Bet **less, smaller** | A made flush caps both ranges; go cheap |
- L83: | **Two-tone & wet** | Q♥J♥7♣ | Caller-leaning | **Polarize:** big with value/draws, check air | Tons of draws — charge them or get out |
- L105: | **Out of position, heads-up (single-raised pot, you were the raiser)** | **~30–45%** | Check far more to protect your checking range. As the OOP *3-bettor* it flips: over 97% on all three boards we solved, almost all of it at two-thirds pot on Q♥T♥7♠ and 8♦5♣2♠ but mostly at one-third pot on A♦K♠2♥ (57.8%); see the [position guide](/en/blog/holdem-position-play) |
- L129: Want to see how far the "big on wet boards" gear actually goes? A solver handed two sizes on Q♥T♥7♠ in a three-bet pot puts [98.4% of its range into the two-thirds bet](/en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp") — and the reason is a price you can calculate, not a feel.
- L181: **Spot 1 — a textbook c-bet.** I raise ==A♣K♦== and the big blind calls. Flop: ==K♠ 7♦ 2♣.== That's a high, dry, disconnected board that belongs to my range — and I've flopped **top pair, top kicker**: my K♦ pairs the K♠, with the ace as the best possible kicker (best five = K♦ K♠ A♣ 7♦ 2♣). I bet **one-third pot** as a range bet: it charges all his missed hands and keeps worse kings and pairs in. Easy, profitable c-bet.
- L183: **Spot 2 — a textbook check.** Same session, I raise ==A♥Q♥== and the big blind calls. Flop: ==7♠ 6♠ 5♦.== This board crushes the exact hands he called with — suited connectors, small pairs, and straights — while I have only ace-high with no pair and no draw (no hearts on the board, so not even a backdoor flush). Two years earlier I'd have "continued" out of habit and gotten raised. Now I **check and give up.** If a safe turn comes and I pick up equity, a delayed c-bet is available; if not, I've lost the minimum.

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L21: For my first couple of years, "c-bet" was the only flop plan I had. I raised preflop, so I bet the flop. Every time. Ace-high board, I bet. Board full…
- L73: This is the heart of c-betting. Before you think about sizing or frequency, ask one question: **did this flop hit my range, or my opponent's?** Here's…
- L181: **Spot 1 — a textbook c-bet.** I raise ==A♣K♦== and the big blind calls. Flop: ==K♠ 7♦ 2♣.== That's a high, dry, disconnected board that belongs to my…
- L183: **Spot 2 — a textbook check.** Same session, I raise ==A♥Q♥== and the big blind calls. Flop: ==7♠ 6♠ 5♦.== This board crushes the exact hands he calle…

---

## holdem-when-to-fold — EN updated 2026-10-06 · masterUpdated = "2026-10-06"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "When to Fold in Poker: The Skill That Quietly Wins the Most",
seoTitle: "Why You Can't Lay Down a Good Hand — When to Fold in Poker",
desc: "Folding is the most underrated winning skill. When to fold preflop and on every street, the pot-odds threshold, and how to lay down a big hand without tilting.",
tldr: "Folding is the most underrated skill in poker — a fold's worst outcome is zero, while a losing call bleeds chips over time. A solid player folds around 75–85% of hands before the flop, releases missed hands and weak draws that don't meet their pot odds after it, and — hardest of all — lays down strong-but-beaten hands when a passive opponent's line screams value. Most players don't call too much because they can't read hands; they call because the chips already in the pot feel like theirs. They aren't.",
category: "strategy",
date: "2026-07-06",
updated: "2026-10-06",
keepImagesInBody: true,
readTime: "16 min",
emoji: "🛡️",
image: "/images/holdem-when-to-fold-hero.webp",
imageAlt: "A poker player sliding their cards face-down into the muck under the table lights, choosing to fold rather than pay off a bet",
tags: ["when to fold in poker", "when to fold preflop", "when to fold a good hand", "folding discipline", "sunk cost poker", "laying down a big hand", "fold to a river raise", "pot odds fold"],
# title 길이 59
# seoTitle 길이 58
# desc 길이 159
# tldr 길이 507
```

### 구조 (EN content L19~L282 · L## = EN 파일 줄)
#### 헤딩
- L25 ### Why folding wins
- L36 ## What Folding Really Is (and Why It's the Most Underrated Skill)
- L46 ## When to Fold Before the Flop
- L61 ## When to Fold After the Flop — Street by Street
- L75 ## The Math of Folding: The Pot-Odds Threshold
- L99 ## The Hardest Fold: Letting Go of a Good Hand
- L123 ## The Psychology of Folding: Sunk Cost, Ego, and Fear
- L139 ## "Should I Fold?" — A 30-Second Self-Check
- L157 ## A Real Laydown, Hand by Hand
- L170 ## The 7 Most Common Folding Mistakes
- L195 ## FAQ
- L247 ## The Folding Playbook, In Short
- L259 ## Related Posts

#### FAQ 12문항
- L197 **Q. When should you fold in poker?**
- L201 **Q. Do you lose money when you fold in poker?**
- L205 **Q. How often should you fold preflop?**
- L209 **Q. When should you fold a good hand?**
- L213 **Q. Should you ever fold pocket aces?**
- L217 **Q. When should you fold top pair?**
- L221 **Q. What is the sunk cost fallacy in poker?**
- L225 **Q. Should I fold or call when I'm unsure?**
- L229 **Q. How do you know when to fold to a river raise?**
- L233 **Q. Is folding a sign of weakness?**
- L237 **Q. Can you fold too much in poker?**
- L241 **Q. When should you fold an overpair?**

#### 표 3개 (헤더 축어 · 데이터 행 수 — B는 행 수를 맞춘다)
- L81 (5행) | Bet size (into the pot) | Pot odds you get | Equity you need to call | Fold if you have less |
- L107 (6행) | Hand you're clinging to | The trap | Why you should fold |
- L174 (8행) | The mistake | Why it costs you | The fix |

#### 디렉티브 · 하이라이트 색 {(색 없음), r, g}
- L27 :::stripe
- L32 :::
- L143 :::steps
- L149 :::
- L190 :::readnext[Keep reading]
- L193 :::

#### 이미지 2 (경로 불변 · alt·캡션은 베트남어 재저작)
- L65 ![A full five-card board on the green felt beside a large pile of chips as a player holds two face-down cards, weighing whether to fold on a later street](/images/holdem-fold-board.webp "Each street changes the question: on the flop you ask if you connected, by the river you ask only whether you can beat a value bet")
- L127 ![A poker player deep in thought with a hand to his chin, agonizing over whether to call or fold, chips and face-down cards in the foreground](/images/holdem-fold-psychology.webp "The hardest folds are lost to emotion, not math — the pull to 'see it', to be right, and to not let go of chips that already feel like yours")

#### 원시 HTML 24줄 (🔴 축어로 옮긴다 · 카드 제목·부제만 베트남어 · 라벨은 §0-6 사전)
- L79 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L88 </div>
- L105 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L115 </div>
- L172 <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0">
- L184 </div>
- L261 <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin:24px 0">
- L262   <a href="/en/blog/holdem-strategy" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L263     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L264     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The 5 Decisions Framework</div>
- L265     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">Where folding fits in a winning game</div>
- L267   <a href="/en/blog/holdem-pot-odds" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;t…
- L268     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Odds</div>
- L269     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">How to Calculate Pot Odds</div>
- L270     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">The threshold behind every fold</div>
- L272   <a href="/en/blog/holdem-3bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radius:12px;text-…
- L273     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L274     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">3-Betting Explained</div>
- L275     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">When to fold to a re-raise</div>
- L277   <a href="/en/blog/holdem-continuation-bet" style="display:block;padding:16px 18px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.10);border-radiu…
- L278     <div style="font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:hsl(var(--primary));margin-bottom:6px">Strategy</div>
- L279     <div style="font-size:14px;font-weight:700;color:hsl(var(--foreground));line-height:1.4">The Continuation Bet</div>
- L280     <div style="font-size:12px;color:hsl(var(--muted-foreground));margin-top:4px">When to fold to a c-bet</div>
- L282 </div>

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /vi/<tool>)
- L21 /en/blog/holdem-strategy "thumb:/images/holdem-strategy-hero.webp" [md] ✅51
- L52 /en/blog/holdem-starting-hands-chart "thumb:/images/holdem-starting-hands-chart-hero.webp" [md] ✅51
- L55 /en/blog/holdem-3bet [md] ✅51
- L65 /images/holdem-fold-board.webp "Each street changes the question: on the flop you ask if you connected, by the river you ask only whether you can beat a value bet" [img] img(경로 불변)
- L90 /en/blog/holdem-outs "thumb:/images/holdem-outs-hero.webp" [md] ✅51
- L127 /images/holdem-fold-psychology.webp "The hardest folds are lost to emotion, not math — the pull to 'see it', to be right, and to not let go of chips that already feel like yours" [img] img(경로 불변)
- L191 /en/blog/holdem-strategy [readnext] ✅51
- L192 /en/blog/holdem-pot-odds [readnext] ✅51
- L255 /en/blog/holdem-pot-odds [md] ✅51
- L255 /en/blog/holdem-3bet [md] ✅51
- L255 /en/blog/holdem-strategy [md] ✅51
- L262 /en/blog/holdem-strategy [html] ✅51
- L267 /en/blog/holdem-pot-odds [html] ✅51
- L272 /en/blog/holdem-3bet [html] ✅51
- L277 /en/blog/holdem-continuation-bet [html] ✅51

### 키워드 (출처 vi-core-volumes §2 🅳 + L-D §1-B·§2·§10-B · 2026-10-08)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| bỏ bài trong poker | 10 | H1 · tags |
| khi nào nên bỏ bài trong poker(자동완성) | `-` | seoTitle · H1 · 첫 H2 · tags |
| khi nào nên bỏ bài khi có đôi Át(natural8 노출) | — | FAQ 5 축어 «Khi nào nên bỏ bài khi có đôi Át (AA) trong poker?» · tags «bỏ đôi Át» |
| fold poker hands(자동완성) | — | tags «khi nào nên fold trong poker»(결합형 허용) |
| 🔴 주인 아님(③) | — | fold trong poker là gì 50 · fold poker là gì · fold là gì 880(오염) · PAA «Fold poker là gì?» → **holdem-betting-actions** · 이 글은 정의 H2 금지 · 첫 등장 «fold (bỏ bài)» + betting-actions 앵커 1 |
| 🔴 오염 | — | khi nào nên fold = Galaxy Z Fold(0/9) → 단독 금지 · «khi nào nên bỏ bài poker» = 섞임(합법성 기사 2 · 조준은 «trong poker» 결합형) |

### PAA·자동완성 (축어)
- PAA(«fold trong poker là gì»): «Fold poker là gì?»(🅰 소유) · «Blind trong poker là gì?»(🅰) · «Flush trong poker là gì?»(🅱) · «"Call" trong poker có nghĩa là gì?»(🅰). PAA(«khi nào nên bỏ bài trong poker»): «Làm cách nào để chia bài trong poker?»(🅰) · «Làm cách nào để chơi poker giỏi?»(strategy FAQ 14).
- 자동완성: fold poker là gì · fold poker hands · fold poker meaning · khi nào nên bỏ bài trong poker · bỏ bài trong poker · (khi nào nên fold = Galaxy Fold · khi nào nên bỏ bài = bỏ bú 등 비포커 — 빈 응답).

### 현지 SERP (L-D §3 «khi nào nên bỏ bài poker/trong poker»·«fold trong poker là gì» · §5 natural8 · §6 E2)
- «fold trong poker là gì» 50 = 포커 10/10인데 **정의 글 0**(FB 커뮤 5 «Top Hit nhưng anh vẫn lựa chọn Fold» · «Call hay fold?» · reddit push/fold) — 정의는 🅰 betting-actions가 받는다.
- natural8 «Khi nào nên bỏ bài khi có đôi Át trong poker?»(1,710 · H2 «Pot có nhiều người chơi» · «Khi các lá bài chung trên bàn có sự liên kết rõ ràng» · «Đọc sức mạnh của đối thủ» · 🔴 E2 «sảnh, thùng … tất cả đều đánh bại tay bài cù lũ» 두 겹 오류 — 서열 역전 + AA on 8-9-10은 원페어) · natural8 postflop «Nghệ thuật của việc bỏ bài» · propokervn «Các Vòng Cược…»(🅰 영역) · vtv·laodong 합법성 2(금지 축).
- 그들이 주는 것: AA 폴드 상황 나열. 빈자리: **팟오즈 임계표(25% · 29% · 33% · 37,5%)** · 스트리트별 질문 · 셋 vs 플러시 34% 산수 · 체크리스트 · 1인칭 A♥K♣ 레이다운 7장 · 7 실수 표 · 심리(sunk cost).
- 우리가 더 줄 것: ① 임계표 + 9/46 ≈ 19,6% 예시 ② EN L161~166 레이다운(베스트5 K♣ K♦ 9♠ 9♥ A♥) ③ FAQ 5 AA 문항을 natural8 축어로(E2는 EN 답으로 정정됨 — 새 예시 추가 금지) ④ `/vi/calculator` «máy tính pot odds» 앵커 1(L75 절).
- H2 처방(L-D §9-7): EN 승계 + «Khi nào nên bỏ đôi Át (AA)?»(FAQ 5) · «Bỏ bài trước flop / sau flop».

### 소유표 (계획 §3-C ③)
- 주인인 검색어: khi nào nên bỏ bài trong poker · bỏ bài trong poker · khi nào nên fold trong poker(결합형) · bỏ đôi Át · laydown · sunk cost poker.
- 쓰면 안 되는 헤드(seoTitle·H1·tags): «fold trong poker là gì» · «fold poker là gì» · «fold là gì»(③→betting-actions · 오염) · «khi nào nên fold» 단독(Galaxy) · «pot odds»(🅲 holdem-pot-odds — L75 H2는 «ngưỡng pot odds để bỏ bài» 한정어로) · «máy tính»(⑦).
- 위임 앵커: 정의 → **holdem-betting-actions**(첫 등장 «fold (bỏ bài)» · 추가 1) · 핸드 → holdem-starting-hands-chart(L52) · 3-bet → holdem-3bet(L55·L255) · 아웃츠 → holdem-outs(L90) · 팟오즈 → holdem-pot-odds(L255·카드) + **`/vi/calculator` «máy tính pot odds»** 1(L75 절 · 추가) · 전략 → holdem-strategy(L21·L255).

### 확정 카피
> Fable 서브 1회(2026-10-09) 출력 축어 · 🔧 Opus 조정 0건(해당 줄에 표기) · desc 분 수치 = EN readTime으로 정정 · 🔢 Opus 재측정(JS length): title 64 · seoTitle 54(≤60) · desc 158(≤160) · tldr 440 · 🔴 B·C 변경 금지(계획 §2-⑥)

**title** (64): Khi nào nên bỏ bài trong poker: kỹ năng âm thầm thắng nhiều nhất
**seoTitle** (54): Bỏ không nổi bài tốt? — khi nào nên bỏ bài trong poker
**desc** (158): Chip đã vào pot cứ như của bạn — nhưng không phải. Khi nào nên bỏ bài preflop và từng vòng cược, ngưỡng pot odds, cách bỏ tay bài lớn mà không tilt — 16 phút.
**tldr** (440): Bỏ bài là kỹ năng bị đánh giá thấp nhất trong poker — cú fold tệ nhất cũng chỉ bằng 0, còn cú call thua rỉ chip dần. Người chơi vững bỏ khoảng 75–85% tay bài trước flop, buông bài hụt và draw yếu không đủ pot odds sau flop, và — khó nhất — buông cả bài mạnh đã bị qua mặt khi đường cược của đối thủ thụ động hét lên 'value'. Người ta call quá nhiều không phải vì không đọc được bài, mà vì chip trong pot cứ như là của họ — nhưng không phải.
**tags**: ["khi nào nên bỏ bài trong poker", "bỏ bài trong poker", "khi nào nên fold trong poker", "fold poker hands", "bỏ bài khi có đôi Át", "kỷ luật bỏ bài", "sunk cost poker", "fold trước river raise", "pot odds fold"]
#### H2 (EN L## → vi)
- L25 `### Why folding wins` → `### Vì sao bỏ bài lại thắng?`
- L36 `## What Folding Really Is (and Why It's the Most Underrated Skill)` → `## Vì sao bỏ bài là kỹ năng bị đánh giá thấp nhất trong poker?`
- L46 `## When to Fold Before the Flop` → `## Khi nào nên bỏ bài trước flop?`
- L61 `## When to Fold After the Flop — Street by Street` → `## Khi nào nên bỏ bài sau flop — theo từng vòng cược?`
- L75 `## The Math of Folding: The Pot-Odds Threshold` → `## Toán của việc bỏ bài: ngưỡng pot odds là bao nhiêu?`
- L99 `## The Hardest Fold: Letting Go of a Good Hand` → `## Cú fold khó nhất: làm sao buông một tay bài tốt?`
- L123 `## The Psychology of Folding: Sunk Cost, Ego, and Fear` → `## Tâm lý khi bỏ bài: sunk cost, cái tôi và nỗi sợ`
- L139 `## "Should I Fold?" — A 30-Second Self-Check` → `## "Tôi có nên bỏ bài không?" — bài tự hỏi 30 giây`
- L157 `## A Real Laydown, Hand by Hand` → `## Một cú laydown thực tế, từng vòng cược`
- L170 `## The 7 Most Common Folding Mistakes` → `## 7 sai lầm bỏ bài phổ biến nhất là gì?`
- L195 `## FAQ` → `## Câu hỏi thường gặp`
- L247 `## The Folding Playbook, In Short` → `## Những điều cần nhớ`
- L259 `## Related Posts` → `## Bài viết liên quan`
- 질문형 비율: 8/10
#### FAQ (EN → vi)
1. When should you fold in poker? → `Khi nào nên bỏ bài trong poker?` (AC 축어)
2. Do you lose money when you fold in poker? → `Bỏ bài có bị mất tiền không?`
3. How often should you fold preflop? → `Nên bỏ bài bao nhiêu phần trăm trước flop?`
4. When should you fold a good hand? → `Khi nào nên bỏ một tay bài tốt?`
5. Should you ever fold pocket aces? → `Khi nào nên bỏ bài khi có đôi Át (AA) trong poker?` (natural8 축어)
6. When should you fold top pair? → `Khi nào nên bỏ top pair?`
7. What is the sunk cost fallacy in poker? → `Ngụy biện chi phí chìm (sunk cost) trong poker là gì?`
8. Should I fold or call when I'm unsure? → `Khi không chắc thì nên bỏ bài hay call?`
9. How do you know when to fold to a river raise? → `Làm sao biết khi nào nên bỏ bài trước một cú raise ở river?`
10. Is folding a sign of weakness? → `Bỏ bài có phải là dấu hiệu yếu không?`
11. Can you fold too much in poker? → `Có thể bỏ bài quá nhiều không?`
12. When should you fold an overpair? → `Khi nào nên bỏ overpair?`
#### 흡수 키워드
- bỏ bài trong poker(10) → seoTitle/H1/tags/H2 L46
- khi nào nên bỏ bài trong poker(AC) → seoTitle/H1/tags/FAQ 1
- fold poker hands(AC) → tags
- Khi nào nên bỏ bài khi có đôi Át trong poker?(natural8) → tags/FAQ 5
- khi nào nên fold trong poker(결합형) → tags만
- Làm cách nào để chơi poker giỏi?(PAA) → 조준 안 함(strategy FAQ 3 소유)
- fold trong poker là gì(50) · fold poker là gì · Fold poker là gì?(PAA) → 조준 안 함(betting-actions 소유)
- khi nào nên fold(Galaxy Fold 오염) → 조준 안 함

### 하지 말 것
- 정의 H2(«Fold là gì») 금지 — L36 H2는 «Vì sao bỏ bài là kỹ năng…» 각도(확정 카피).
- E2 정정용 새 핸드 예시(AA vs 8-9-10)를 **추가하지 마라** — EN FAQ 5 답(캐시 프리플랍 AA 거의 안 폴드 · 플랍 후 오버페어는 위험 보드에서 가능 · 토너 버블 예외)이 정답이다.
- 임계표(3:1 · 2,5:1 · 2:1 · ~1,7:1 · 25% · ~29% · ~33% · ~37,5%) · 9 ÷ 46 ≈ 19,6% · 4:1 · $100/$50/$150/$25/$125 · 16,7% · 34% · 32% · 16% = 축어 + vi 구분자.
- L117 셋 vs 플러시(9♠9♣ on 9♥5♥2♥ vs A♥K♥ · 3♥4♥) · L161~166 레이다운 = 카드 축어(C 손검산 대상).
- 공통: §0 전부 · 확정 카피 변경 금지.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 + vi 구분자 · C는 전사 대조 + 커버리지 밖 손검산)
L28 · L30 · L48 · L52 · L53 · L54 · L83 · L84 · L85 · L86 · L90 · L92 · L93 · L110 · L112 · L117★ · L153 · L159 · L161★ · L162★ · L163★ · L164★ · L166★ · L207 · L250 · L251

★ 카드가 든 줄 축어:
- L117: The set row is the one that needs its street named, because folding it too early costs more than folding it too late. Hold 9♠9♣ on a 9♥5♥2♥ flop against a made A♥K♥ flush and the set still wins ==34%== of the time — and no made flush holds it far below that (the floor is about 32%, against 3♥4♥ with its straight-flush outs): it fills up on the seven obvious outs (the case nine, three fives, three deuces) *and* whenever the turn and river pair each other. On the flop that's a call — not because the next card alone gets there often enough (seven outs is about 16%, short of most bet prices), but because when the board pairs you win everything a flush will pay, and folding sets on the flop costs far more over time than the bets you save. Only once the draw is home does the row above apply.
- L161: - **My hand:** ==A♥K♣.== I raise, the big blind — a tight, passive player — calls.
- L162: - **Flop:** ==K♦ 9♠ 4♥.== I've got top pair, top kicker. I bet, he calls. Standard.
- L163: - **Turn:** ==7♣.== A blank. I bet again for value, he calls again. Still looks fine.
- L164: - **River:** ==9♥.== The board pairs, now reading ==K♦ 9♠ 4♥ 7♣ 9♥==, and the passive player suddenly **check-raises** me big.
- L166: Let's count it out. My best five cards are ==K♣ K♦ 9♠ 9♥ A♥== — two pair, kings and nines, ace kicker. It *feels* huge. But a tight, passive player who has called down and now raises a river that paired the nine is telling a very specific story: he has a nine — trip nines, or a full house like nines-full — and almost never a bluff. Against his raising range, my two pair is almost always beaten. I fold. It stung; it was also worth more than the pot, because that same discipline saves a stack every session. **The hand was strong. The situation wasn't.**

### 경험담 자리 (EN 1인칭 줄 — EN에 있는 경험만 베트남 독자 맥락으로 재저작 · 없는 장소·금액·대회·카지노 금지)
- L19: The most expensive hand of my first year wasn't one I lost — it was one I refused to lose. I flopped top two pair, a passive old-timer raised me on a …
- L67: **Flop — "Did this board help me, or them?"** When you miss and face a bet on a board that fits your opponent's range, let it go. Ace-high with no dra…
- L71: **River — pure bluff-catching.** You're no longer drawing to anything; the only question is *"can my hand beat the hands they'd bet for value here?"* …
- L129: **Sunk cost — "I've already put so much in."** This is the big one. The chips you bet earlier are *no longer yours* — they belong to the pot. Every de…
- L131: **Ego — "I have to know if he's bluffing."** Calling to satisfy curiosity, or to avoid the sting of *maybe* being bluffed, is paying the maximum for i…
- L144: Can I name the worse hands they'd bet this way? | If the only hands that bet like this beat me, I'm paying off value.
- L145: Do I clear the pot-odds threshold? | If my equity is below the number in the table, the price says fold.
- L147: Am I only calling to "see it"? | Curiosity and ego are not reasons; they're the sunk-cost trap talking.
- L148: Would I bet this hand for value here myself? | If not, I'm holding a bluff-catcher — the question becomes how often they bluff, not whether I'm ahead.…
- L153: Note what that last question is *not*. A value bet has to beat their **calling** range; a call only has to beat their **betting** range, bluffs includ…
- L159: Here's a fold I'm proud of, spelled out so you can check it yourself. $1/$2 cash, 100bb deep.
- L161: - **My hand:** ==A♥K♣.== I raise, the big blind — a tight, passive player — calls.
- L162: - **Flop:** ==K♦ 9♠ 4♥.== I've got top pair, top kicker. I bet, he calls. Standard.
- L163: - **Turn:** ==7♣.== A blank. I bet again for value, he calls again. Still looks fine.
- L164: - **River:** ==9♥.== The board pairs, now reading ==K♦ 9♠ 4♥ 7♣ 9♥==, and the passive player suddenly **check-raises** me big.
- L166: Let's count it out. My best five cards are ==K♣ K♦ 9♠ 9♥ A♥== — two pair, kings and nines, ace kicker. It *feels* huge. But a tight, passive player wh…

---
