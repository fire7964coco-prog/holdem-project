# vi-tour 브리프 — 🅴 토너먼트 클러스터 5편 (A 구간 산출 · 2026-10-09)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(치환 = `docs/fr-cluster-plan.md` §5 → `docs/vi-cluster-plan.md` §5) · 용어 정본 = vi 계획 §3-A · 소유표 = §3-C · SERP 근거 = `docs/keyword-bank/vi-serp/L-E-tour.md`(B에서 다시 열 필요 없음 — 필요한 것은 여기 옮겼다).
> EN 기준 = 해시 **`b57cb658`**(워크트리 `harden-vi-tour` 착수 시점 · `git diff b57cb658..HEAD -- lib/posts-en/<5편>` = **변경 0** 확인 10-09 · fr 기준 `a54b5f3d`와도 diff 0 → fr 브리프의 EN L## 해부를 **라인 번호 그대로** 승계했다).
> EN `updated`: tournament **2026-10-01** · icm **2026-09-09** · bubble **2026-09-13** · short-stack **2026-09-24** · tournament-vs-cash-game **2026-09-13** → 각 글 `masterUpdated`는 이 값(헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤).
> 🔴 **카피(title·seoTitle·desc·tldr·tags·H2·H3·FAQ 문항)는 이 브리프 «확정 카피»가 최종이다.** B·C는 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청»(계획 §2-⑥).

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 브리프에는 메타·구조(L##)·링크·원시 HTML 줄·§13 자리·경험담·확정 카피를 실었다. 본문 산문·표·디렉티브는 EN 파일을 열어 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 열지 마라**(예외: 틀 복사용 `lib/posts-vi/holdem-blind-meaning.ts` 1편 — 🔴 **필드 모양만** · 문면은 7월판 «Mù» 표기라 복사 금지). 사실·수치·카드의 출처는 EN 축어 + 이 브리프 §1-G의 형제·도구 인용뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-vi/holdem-blind-meaning.ts`의 필드 모양(`masterUpdated` 포함) · `date`/`updated` = 집필일(🔴 vs-cash-game만 `date: "2026-06-11"` 원래 값 유지 · `updated` = 집필일 — 계획 §4-C ④) · `slug`·`image`·`emoji`·`category: "tournament"` = EN 그대로(category 번역 금지) · `readTime` = `"N phút"`(숫자 EN 그대로: tournament 14 · icm 13 · bubble 13 · short-stack 13 · vs-cash **18** — 현 vi판 «16 phút»은 버린다) · `imageAlt`는 베트남어로(수치 축어 · tournament «12,000/24,000» → «12.000/24.000») · 🔴 **content에 히어로 넣지 마라**(EN에도 없다 · 현 vi vs판 L36의 `![…](/images/tournament-table-action.webp …)` 본문 이미지는 EN에 없다 → **빼라**).
  - **플래그 필드는 EN 그대로**: tournament·icm·bubble·short-stack = `keepImagesInBody: true` · **vs-cash-game = `hideSummaryImageSlot: true`**(keepImagesInBody 없음).
- **EN 파일 꼬리**: icm · bubble · short-stack만 `export default POST;`가 있다 → vi도 그 세 편만 붙인다(tournament · vs-cash는 없다).
- **등록**: `lib/posts-vi/index.ts`의 `// [vi-tour import 시작]`~`끝` · `// [vi-tour 배열 시작]`~`끝` 두 칸에만. vs-cash-game import(`holdemTournamentVsCashGame`)는 **이미 칸 안에 있다** — 파일만 다시 쓴다. 새 import 이름 = `holdemTournament` · `holdemIcm` · `holdemBubble` · `holdemShortStack`. 칸 밖 금지.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=vi --slug=<slug>` 🔴 0 · 끝에 `npm run check:intl-links` · `npm run check:structure`(vi 행 내 슬러그 결손 0 — 링크 편차는 §1-D 기록분만) · vs-cash는 `npm run check:drift`(masterUpdated) · `npm run build`.

## 1. 공통 결정 (5편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)
| EN | vi |
|---|---|
| `:::readnext[Keep reading]` | `:::readnext[Đọc tiếp]` |
| `## FAQ` | `## Câu hỏi thường gặp` |
| `## Related Posts`(icm·bubble·short-stack·vs-cash) · `## Related Guides`(tournament) | `## Bài viết liên quan` (둘 다) |
| `## The 3 Things to Remember`(icm·bubble·short-stack·vs-cash) | `## Những điều cần nhớ` (번호 목록 3개 그대로 · 개수는 라벨에 넣지 않는다 — 현 vi vs판 «3 điều cần nhớ» 폐기) |
| FAQ 형식 | `**Q. …**` + 빈 줄 + `A. …` (EN과 동일 · 스키마 게이트) |
| readTime `"13 min"` | `"13 phút"` |
| `### At a Glance`(tournament) · `### ICM at a glance` · `### The bubble in one glance` · `### Short-stack rules at a glance` · `### The 15-second answer`(vs-cash) | 확정 카피 «H3» 표의 값 |

- 🔴 **`> **Trả lời nhanh**` 블록을 새로 만들지 마라.** EN 5편에는 Quick answer 블록이 **0개**다 — 대신 각 H2 첫 문장이 굵은 직답(`**…**`)이다(tournament는 L47·L49 평문+굵은 요약). vi도 **같은 자리에 굵은 직답 문장**(40~75단어 자기완결 단락의 첫 문장)을 둔다(구조 패리티 · ms·fr 선례). 🆕 현지 추가 H2·FAQ가 있으면 같은 모양으로.
- 화자: 1인칭 **tôi** · 독자 **bạn** · 존칭·anh/chị 금지(계획 §3-A ①).

### 1-B. 용어 (계획 §3-A ③④ 정본 + 이 레인 신규 🆕 — 진행 파일 «신규 용어»에 등재)

> 방향 원칙(계획 §3-A 머리): **족보 = 베트남어 정본 · 액션·구조 = 영어 차용어 정본 + 첫 등장 베트남어 풀이**. 이 레인은 족보가 거의 없고 구조어가 전부다 → 거의 전부 영어 차용어다. 🔴 «mù»·«tố»·«theo» 산문 금지(call·raise·blind 정본).

| EN | 본문 vi | 비고 |
|---|---|---|
| tournament · MTT · SNG | **giải đấu** 주력(첫 등장 «giải đấu (tournament)» · 이후 «giải đấu» · 영어 «tournament»는 복합어(«poker tournament là gì» H2·tags · «MTT») 안에서만) · **MTT**(첫 등장 «MTT (Multi-Table Tournament — giải nhiều bàn)») · **Sit & Go (SNG)** | 계획 §3-A ④ · L-E 코퍼스 giải đấu 352 : tournament 97 · 🔴 대문자 «Tournament» 금지(현 vi vs판 61회 → 전부 교체) |
| 구어 tour | **«đánh tour» / «out tour»** 1~2회/편 · 고정문 1회(§1-G ①) · 🔴 tour(APT·WPT 시리즈) ≠ tournament(단일 대회) 한 줄(§1-G ②) | 계획 §3-A ④ · 아스트라 B-16 · L-E §8-⑦(AC 4계열 · 코퍼스 69회) |
| cash game · ring game | **cash game**(소문자 · 첫 등장 «cash game (ván chơi tiền mặt — chip là tiền thật)» 허용) · ring game = «ring game» | 🔴 «trò chơi tiền mặt»(GG 직역) 금지 · 현 vi vs판 «Cash Game» 62회 → 소문자 |
| buy-in · fee · rake | **buy-in** · 운영 몫 = **phí (fee)** · rake = **rake**(첫 등장 «rake (phí sòng)») | §3-A ④ · «$100+$9» 설명 자리에서 «$9 = phí» |
| prize pool · payout(s) · payout structure · pay jump · min-cash | **prize pool**(첫 등장 «prize pool (quỹ thưởng)» · 이후 둘 다 허용 — 계산기 «quỹ thưởng» 축어) · **tiền thưởng** · **cơ cấu trả thưởng** · **pay jump**(첫 등장 «pay jump (bậc thưởng)») · **min-cash**(첫 등장 «min-cash (mức thưởng thấp nhất)») | 🆕 · 🔴 «cơ cấu giải»는 AC = 복권(Vietlott) 오염 → 쓰지 않는다 |
| ITM · in the money · cash (v.) | **ITM**(첫 등장 «ITM (In The Money — vào tiền)») · «vào tiền» 1회 · 동사 = «vào tiền / có tiền thưởng» | §3-A ④ · L-E ITM 94 : vào tiền 11 · wikipoker 축어 «được dịch ra là "Vào Tiền"» |
| GTD / guarantee | **GTD**(첫 등장 «GTD (guaranteed — quỹ thưởng đảm bảo)») · «đảm bảo» 1회 | §3-A ④ · 정의 출처 = §1-G ④ |
| starting stack · chip leader · big/medium/short stack · average stack | **stack khởi điểm** · **chip leader** · **big stack / medium stack / short stack**(영어 · 첫 등장 short stack «short stack (stack ngắn)» 1회) · **avg stack (stack trung bình)** | §3-A ④ «stack» · wikipoker H2 축어 «Short stack / Medium stack / Big stack» · L-E short stack 69 : stack ngắn 9 |
| effective stack | **stack hiệu dụng**(첫 등장 «stack hiệu dụng (effective stack — stack ngắn hơn trong hai stack)») | 계산기 사전 축어 «Effective stack (stack ngắn hơn trong hai stack)» · §3-A ④ 추가 용어 |
| shove · jam · push · first-in · push/fold | **shove**(산문 동사 «shove / all-in» · jam 허용 1~2회) · **first-in**(첫 등장 «first-in (người đầu tiên vào pot)») · **push/fold**(슬래시 — 계산기 «Push/Fold» 축어 · «push or fold»·«all in or fold»는 인용·FAQ 문항에서만) | §3-A ④ · 계산기 칩 «⚡ Push/Fold» · L-E push/fold 68 : tất tay 3 |
| all-in | **all-in**(하이픈) · 풀이 1회 «(tất tay)» | §3-A ④ · tags는 «all in» 띄어쓰기 허용 |
| blind level · structure sheet · clock · late reg · reg end · re-entry · rebuy · add-on | **level blind**(첫 등장 «level blind (mức blind)» · 이후 «level») · **bảng cấu trúc (structure sheet)** · **đồng hồ giải (clock)** · **late reg**(첫 등장 «late reg (đăng ký muộn)») · **reg end**(«hết hạn đăng ký») · **re-entry** · **rebuy** · **add-on** | 🆕 · wikipoker «Cấu trúc tăng blind» · AC «reg end trong poker là gì» |
| freezeout · bounty · PKO · mystery bounty · satellite · deepstack · turbo · hyper-turbo | **freezeout** · **bounty (KO)** · **PKO (Progressive Knockout — bounty tăng dần)** · **mystery bounty** · **satellite**(첫 등장 «satellite (giải vệ tinh)») · **deepstack** · **turbo / hyper-turbo** | 🆕 · 🔴 GG vi 오역 «Đóng băng»(freezeout)·«Mục tiêu Vệ tinh Ngăn xếp» 금지 — 영어 원어 + 풀이 |
| final table · bag · dinner break · seat card · tournament director · Day 1 | **bàn chung kết (final table)**(첫 등장 병기 · 이후 «bàn chung kết») · «đóng túi chip (bag)» · **giờ nghỉ ăn tối** · **thẻ chỗ ngồi (seat card)** · **tournament director (giám đốc giải)** · **Day 1** | wikipoker H4 «Bàn chung kết (Final Table)» · AC «tournament director là gì» |
| bubble · on the bubble · burst · pay the bubble · bubble boy · stone/soft bubble · money / final-table / satellite bubble · bust on the bubble | **bubble**(첫 등장 «bubble (giai đoạn ngay trước khi vào tiền)») · «on the bubble» = **«ở bubble / đang ở bubble»** · burst = **«bubble vỡ»** · «pay the bubble» = **«trả tiền cho bubble»** · **bubble boy** · **stone bubble (bubble cứng) · soft bubble** · **money bubble · bubble bàn chung kết · bubble vệ tinh (satellite bubble)** · 구어 bust on the bubble = **«out bubble»** 1~2회 | §3-A ④ bubble 149 : bong bóng 14 · GG «bong bóng» 금지 · AC «out bubble trong poker là gì» |
| hand-for-hand · stalling · time bank | **hand-for-hand**(첫 등장 «hand-for-hand (mọi bàn chơi từng ván cùng lúc)») · **stalling**(첫 등장 «stalling (câu giờ)») · **time bank** | 🆕 · 🔴 AC «bubble time» = hand-for-hand와 **동치 단정 금지**(원문 미확인 · L-E §6-2) — 쓰지 않는다 |
| bubble factor · risk premium · ICM tax | **bubble factor** · **risk premium**(첫 등장 «risk premium (phần bù rủi ro)») · **"thuế ICM" (ICM tax)** | 🆕 · 경쟁 코퍼스 0회(차별 재료) |
| ICM · chip EV · $EV · ICM deal · chip chop | **ICM**(첫 등장 «ICM (Independent Chip Model — mô hình chip độc lập)») · **chip EV** · **$EV** · **ICM deal** · **chip chop** | §3-A ④ · 계산기 «ICM deal»·«Chip chop» 축어 · 칩은 «chip», 돈만 «$»(경쟁 wikipoker «$3.000» 칩 표기 혼동 회피) |
| M-ratio · Harrington zones · orbit | **chỉ số M (M của Harrington)** · 존 = **🟢 Vùng xanh · 🟡 Vùng vàng · 🟠 Vùng cam · ⚠ Vùng đỏ · ⚫ Vùng chết**(이름 = 계산기 라벨 축어 · 이모지 = EN 표의 것) · orbit = **vòng**(첫 등장 «một vòng (orbit — mỗi người đặt blind một lần)») | 계산기 `app/vi/calculator/dict.ts` m.zones 축어 · 🔴 «vòng cược»(betting round)과 구별 — orbit은 «vòng bàn / một vòng» |
| fold equity · equity · pot odds · EV | **fold equity** · **equity**(첫 등장 «equity (phần pot kỳ vọng của bạn, tính cả khi chia pot)») · **pot odds (tỷ lệ pot)** · **EV (giá trị kỳ vọng)** | §3-A ④ · 🔴 «tỷ lệ thắng»은 win probability 자리에만 |
| bb/100 · hourly · ROI · cash rate · variance · downswing · bankroll · micro/low stakes | **bb/100** · **win rate theo giờ** · **ROI** · **tỷ lệ vào tiền (ITM)** · **variance** · **downswing** · **bankroll**(첫 등장 «bankroll (quỹ tiền chơi poker)») · **mức cược nhỏ (low stakes / micro stakes)** | 🆕 · 현 vi vs판 «win rate theo giờ» 유지 |
| reload · rack up · cage · rathole · hit-and-run | **reload (mua thêm chip)** · **xếp chip vào khay (rack up)** · **quầy đổi chip (cage)** · **ratholing (rút chip khỏi bàn)** · **hit and run** | 🆕 |
| buy-in (cash · 뱅크롤 단위) | **buy-in**(«20–40 buy-in») — 토너·캐시 둘 다 | 현 vi vs판 축어 |
| pocket jacks · ace-ten · ace-jack · pocket aces · AKo · AA · KK · 22 | **đôi J** · **A-10** · **A-J** · **đôi Át** · `AKo` `AA` `KK` `22` 축어 | §3-A ② «đôi Át»·«lá K» · «già/đầm/bồi» 금지 |
| 관련 글 카드 라벨 | Tournament(s) → **Giải đấu** · Deep Dive → **Phân tích sâu** · Strategy → **Chiến thuật** 🆕 · Free Tool → **Công cụ miễn phí** 🆕 · Short Stack → **Short stack** 🆕 · Blinds → **Blind** 🆕 · Positions → **Vị trí** 🆕 · Game Flow → **Trình tự ván bài** · Hand Rankings → **Thứ hạng tay bài** · Start Here → **Bắt đầu từ đây** | 계획 §3-A ⑥ + 🆕 5 |

### 1-C. 조판 (계획 §3-A ②)
- **bạn/tôi** · 곧은 `'`(Texas Hold'em) · 인용은 `"…"` 큰따옴표(EN과 같게).
- 숫자 베트남식: 천 단위 **마침표** `10.000` · `20.000` · `$4.592.000` · 소수 **쉼표** `33,9%` · `$38,39` · `1,5×` · `2,7:1` · 🔴 **`%` 앞 공백 없음**(fr과 다름) · `$` 앞붙임(₫ 환산 금지). **값은 EN 축어, 구분자만** 바꾼다(C 전사 대조가 정규화 후 비교 — 계획 §5 «천 단위 마침표 제거 · 소수 쉼표 → 마침표»).
  - 범위 하이픈·대시는 EN 그대로(`20–40` · `20-40` · `48-50%` → `48-50%`).
  - `5,000 / 3,000 / 2,000` → `5.000 / 3.000 / 2.000` · 블라인드 `500 / 1,000` → `500 / 1.000` · `12,000/24,000` → `12.000/24.000` · `$1,500` → `$1.500` · `$662,200` → `$662.200`.
  - bb 표기: `10bb`·`100BB+`·`9bb`·`20–25 BB` = EN 축어(단위 문자 그대로) · 산문 «big blinds»는 **«big blind»**(베트남어 복수 무표지).
- 시각(tournament Day 1 타임라인 L217~241): **24시간제** — `10:30am`→`10:30` · `12:00pm`→`12:00` · `12:40–2:40pm`→`12:40–14:40` · `~3:30pm`→`~15:30` · `~5:00pm`→`~17:00` · `6–9pm`→`18:00–21:00` · `9–11pm`→`21:00–23:00`. 🔴 시각의 **값**은 같고 표기만 바뀐다(C 전사 대조는 am/pm → 24h 변환 후 비교). 그리드 열 폭 `80px`는 EN 그대로.
- 하이라이트 색(`==g:` `==r:` `==b:` `==`) · `**굵게**` 위치는 EN과 같게. `**` 중첩 금지. bubble L43~45 «`==**On the bubble**==`»식(하이라이트 안 굵게)은 EN 형태 그대로 — 중첩 아님.
- 수식·변수(bubble L115 `c · BF ÷ (P + c · BF)` · `BF ÷ (1 + BF)` · short-stack L71 `M = …`)는 기호·변수명 축어, 단어만 번역(«your stack» → «stack của bạn»).
- 🔴 **성조 부호**는 §13급이다 — «Trả lời nhanh»·«Câu hỏi thường gặp»·«Những điều cần nhớ»·«giải đấu»·«bàn chung kết» 등 고정문을 복사해 쓰고 손으로 다시 치지 마라.

### 1-D. 링크 — **편차 2건(tournament)** · 나머지 4편 편차 0

| EN 대상 | 상태 | vi 처리 |
|---|---|---|
| holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game | 🅴 이 레인 | `/vi/blog/<slug>` |
| holdem-blind-meaning · texas-holdem-rules-for-beginners · holdem-game-order | 🅰 기존 vi(재작성 중) | 그대로 |
| holdem-hand-rankings | 🅱(기존 · 재작성 중) | 그대로 |
| holdem-equity · holdem-pot-odds · holdem-probability | 🅲 | 그대로(아직 없어도 건다 — 배포는 51편 뒤 1회) |
| holdem-starting-hands-chart · holdem-positions · holdem-3bet · holdem-when-to-fold | 🅳 | 그대로 |
| holdem-rake · holdem-glossary | 🅵 | 그대로 |
| `/en/calculator` | 도구 ✅ | `/vi/calculator` |
| 🔴 **apt-incheon-2026-guide**(tournament **L191** 본문 · **L321** readnext) | 제외 대회 가이드 | **L191 = 문장 대체** → «Muốn xem các giải sắp diễn ra ở gần bạn? Xem [lịch giải poker](/vi/tournaments).»(계획 §3-C ⑩ «글→보드 링크 1회» · 앵커 고정 §3-A ⑤) · **L321 = `/vi/blog/holdem-icm | <icm vi title> | /images/holdem-icm-hero.webp`로 대체**(readnext 3장 유지 · fr·ms 선례) → 진행 파일 «링크 편차» 2행 |

- 외부 링크 0 · 페이지 내 앵커 `(#…)` 0 · `<a id=` 0 · `<br/>` 0 (5편 grep 확인 10-09).
- 썸네일 인자 `"thumb:/images/…"` 그대로. 앵커 텍스트만 베트남어.
- **도구 앵커 문구 고정**(계획 §3-A ⑤): `/vi/calculator`로 가는 링크의 앵커는 EN «ICM calculator»·«ICM deal calculator»·«calculator» 자리 모두 **«máy tính ICM»**(short-stack L125·L141 «calculator» = «máy tính ICM» · 🆕 short-stack H2 2 끝 현지 추가 1문장은 «máy tính push/fold»). 🔴 «công cụ tính»·«phần mềm» 금지. 역방향(글로 가는 카드·앵커)에 «máy tính / bảng / chart / lịch giải» 금지(fr H-25).
- readnext·관련 글 카드의 **제목** = 대상 vi Post의 `title`(짧게 줄여도 됨):
  - 이 레인 5편 → 아래 확정 카피 `title`
  - 🅰·🅱 기존 vi(재작성 중 — 현 title은 «Mù»·«Theo/Tố» 7월판이라 **쓰지 마라**) · 🅲·🅳·🅵(A 시점 vi 브리프 없음) → B는 EN 카드 제목의 베트남어 직역을 **임시**로 쓰고 진행 파일 «미결»에 적는다(§3-A 용어로: «Luật Texas Hold'em cho người mới» · «Trình tự một ván Texas Hold'em» · «Blind trong poker là gì? Small blind và big blind» · «Thứ hạng tay bài poker» · «Equity trong poker» · «Pot odds» · «Xác suất poker» · «Khi nào nên fold» · «Bài khởi đầu nên chơi theo vị trí» · «Vị trí trong poker» · «3-bet» · «Rake trong poker» · «Thuật ngữ poker») → 🔴 C에서 머지된 파일의 title로 교체.
- 관련 글 그리드 카드의 대상 중 아직 vi가 없는 글도 **건다**(배포는 51편 머지 뒤 1회).

### 1-E. 원시 HTML 줄 (축어 · 스타일 문자열 한 글자도 바꾸지 마라)
- **관련 글 그리드**(`## Bài viết liên quan` 아래 `<div style="display:grid;…">`): href만 `/vi/blog/…`(도구는 `/vi/calculator`), 카드 안 글자(라벨·제목·설명 3줄)만 베트남어(라벨 사전 §1-B 마지막 행). `onmouseover`/`onmouseout` 그대로.
- **크림 박스**(`<div style="background:rgba(255,248,210,0.10);…">` … `</div>`): 여는 줄·닫는 줄·**앞뒤 빈 줄**까지 EN 그대로(빈 줄이 없으면 마크다운 표가 안 그려진다).
- **tournament Day 1 타임라인(L213~245)·체크리스트(L297~314)**: `rgba(255,248,210,0.06)` 카드 + 중첩 `<div>` — 태그·스타일·줄 수 축어, 사람이 읽는 글자만 베트남어(시각은 §1-C). 체크리스트 마지막 행의 주황 아이콘(`rgba(255,150,0,…)` · `!`) 그대로. 🔴 L302 «Casino loyalty card if required (e.g., Caesars Rewards for WSOP)» → **«Thẻ thành viên của phòng poker nếu được yêu cầu»**(운영사명·카지노 삭제 · 계획 §3-C 「레인 A로 넘기는 처리」).
- 디렉티브(`:::stripe` · `:::note[…]:::` · `:::readnext`) = 형식 그대로, 사람이 읽는 글자만 번역. `:::stripe`의 `|` 왼쪽 수치 칸은 숫자 형식만 베트남식(`10–15%` · `$100+$9` · `20–40 phút`).
- 이미지 줄 `![alt](path "title")`: path 축어, alt·title만 베트남어. icm L117·bubble L71·short-stack L67의 이미지는 **다음 H2 바로 위**(EN 위치 그대로). vs-cash L116·L187 본문 이미지 2장 = EN 위치 그대로(🔴 현 vi판의 `tournament-table-action.webp`·`icm-chips-not-money-real.webp`·`holdem-bubble-table.webp` 3장은 EN에 없다 → 버린다).

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩 · tldr 안 마크다운 · «tổng hợp đầy đủ / hướng dẫn chi tiết từ A-Z / giải thích đầy đủ» · slug·이미지 변경 · anh/chị · 대문자 «Tournament / Cash Game» · «mù»·«tố»·«theo»·«bong bóng»·«trò chơi tiền mặt»·«Đóng băng» · **베트남 카지노·클럽·대회·금액 창작**(EN 경험담에 장소가 없다 — «a Friday tournament»를 «một giải tối thứ Sáu» 이상으로 특정하지 마라 · ₫ 환산 금지) · **합법성·세금·실머니·운영사 추천 축**(tournament FAQ L342 · vs-cash FAQ L400은 확정 카피의 교체 문항으로 · 등록 절차의 운영사·앱 이름 삭제 §1-H) · 하이라이트 색 변경 · 경쟁사 이름(SERP 오류는 «흔한 오해»로도 새로 다루지 않는다 — EN에 없는 문단을 만들지 마라 · 단 §1-G ②의 tour≠tournament 1문장은 계획이 지시한 추가다) · 단독 «X là gì» 오염 헤드(icm·bubble·mtt·short stack·stack poker·cash game 단독)를 seoTitle·title·tags에.
- **ICM 정의 중복 금지**(계획 §3-C ⑧ · L-E §8-⑤): tournament · bubble · short-stack · vs-cash의 ICM 언급은 EN 분량 그대로 두되 **정의형 H2를 만들지 말고** 첫 등장에 `[ICM](/vi/blog/holdem-icm …)` 앵커. tags에 «icm» 금지(holdem-icm만 · 현 vi vs판 tag «ICM poker» → 버린다).
- **도구 헤드 위임**(§3-C ⑨): «push fold chart»·«push or fold»·«all in or fold»·«bảng Nash»·«máy tính …» 헤드는 tags·title·seoTitle에 쓰지 않는다(본문·H2 문구 일부·앵커는 허용).
- **보드 헤드 위임**(§3-C ⑩): «giải poker»·«poker tournament» 단독·장소·연도는 tags·title·seoTitle에 쓰지 않는다(결합형 «poker tournament là gì» 허용).

### 1-G. 형제·도구 인용 + 계획 지시 고정문 (같은 사이트 안 같은 사실 · 축어)
- ① **đánh tour 고정문**(계획 §3-A ④ · 5편 중 tournament·vs-cash에 1회씩 · 나머지는 «đánh tour» 어휘만): «Trong cách nói thông thường, đánh tour nghĩa là chơi giải đấu.»
- ② **tour ≠ tournament 한 줄**(HARDEN·계획 §3-C 「레인 A로 넘기는 처리」 · tournament H2 1 직답 단락 끝에 1문장): «Lưu ý: "tour" như APT hay WPT là một chuỗi giải tổ chức ở nhiều nơi, còn mỗi giải đấu (tournament) là một sự kiện riêng trong chuỗi đó.» — 경쟁 wikipoker «Poker Tour (viết đầy đủ: Poker Tournament)» 혼동(L-E §4-6 ⑤)을 **이름 없이** 바로잡는다.
- ③ **M 존 이름·경계**(short-stack H2 3 표): 도구 `app/vi/calculator/dict.ts` 축어 «💀 Vùng chết < 1 · 🔴 Vùng đỏ 1–5 · 🟠 Vùng cam 6–9 · 🟡 Vùng vàng 10–19 · 🟢 Vùng xanh 20+» · 캡션 «Chỉ số M (M của Harrington)» · 산식 «M = stack của bạn ÷ chi phí một vòng (mù nhỏ + mù lớn + toàn bộ ante)»(도구 문구 — 글에서는 §3-A ④에 따라 «small blind + big blind + toàn bộ ante»로 쓴다 · 도구 사전은 손대지 않는다). EN 표 L77~81(«20+ / 10 to under 20 / 6 to under 10 / 1 to under 6 / under 1»)과 **같은 경계**다 — vi 표의 존 이름은 도구 라벨 축어, 경계 표현은 EN의 «to under»를 살려 «từ 10 đến dưới 20»처럼(«10–19»로 줄이지 마라). 이모지는 EN 표의 것 그대로(🟢🟡🟠⚠⚫ — 도구의 💀·🔴와 다르면 **EN 쪽**).
- ④ **GTD 정의**(tournament 🆕 FAQ): EN `lib/posts-en/holdem-glossary.ts` L207 축어 «GTD (guaranteed) — A tournament's promised minimum prize pool, paid even if entries fall short.» → vi «GTD (guaranteed) là quỹ thưởng tối thiểu mà giải đấu cam kết trả, kể cả khi số người đăng ký không đủ để gom đủ số tiền đó.» **새 수치 금지.** 보드 링크는 L191 자리 1회만(FAQ에서 또 걸지 않는다).
- ⑤ **stack hiệu dụng 정의**(short-stack 🆕 FAQ «Stack trong poker là gì?» 안 1문장): 도구 사전 축어 «Effective stack (stack ngắn hơn trong hai stack)» → 글 «stack hiệu dụng (effective stack) là stack ngắn hơn trong hai stack đang đối đầu — đó mới là số chip bạn thực sự có thể thắng hoặc thua». EN L111의 «you risk 9bb» 가격 논리 안에서만. 새 수치 0.
- ⑥ **ICM 3인 예시**: icm(L67~93 · 5.000/3.000/2.000 · $50/$30/$20) · bubble(L53 «chips protecting a guaranteed cash» · 수치 없음) · vs-cash(L103~112 · 10명 × $100 · $500/$300/$200)는 서로 다른 예시다 — 섞지 마라. 계산기 ICM 가이드의 4인 예시(450.000/250.000/… · $2.300)도 **끌어오지 마라**.
- ⑦ **«chips ≠ money» 문장**: icm L21 · vs-cash L52·L56 · tournament L68이 같은 생각을 각자 말한다. 문장 축어 통일은 필요 없지만 **단어 선택은 같게**: «Chip trong giải đấu không phải là tiền.»(현 vi vs판 L32 «Trong Tournament, chip là mạng sống của bạn trong giải» 식의 비유는 EN L34 «your chips are your tournament life» 자리에서만).
- ⑧ **ICM 계산기 결과 열 이름**(icm H2 7 표 머리): 도구 축어 «Chip chop» · «ICM deal» · «Chênh lệch» — EN 표 L140 «Player | Chip chop | ICM deal | Difference» → «Người chơi | Chip chop | ICM deal | Chênh lệch». L85 «Player | Chip % | ICM value | ICM % | vs chips» → «Người chơi | Chip % | Giá trị ICM | ICM % | So với chip»(도구 th 축어 «Chip %»·«Giá trị ICM»·«ICM %»).

### 1-H. 삭제·일반화 (계획 §3-C 「레인 A로 넘기는 처리」 · 금지 축)
| 자리 | EN | vi 처리 |
|---|---|---|
| tournament FAQ L342 | «Is it legal to host a poker tournament at home?» | 🔴 **삭제** → 교체 문항은 확정 카피(«Buy in poker là gì?» · 답 = EN L57~68 사실만) |
| tournament H3 L169 | «Option A: Direct Buy-In at the Casino (Easiest)» + 절차 6단계 | «카지노» 삭제 → «Đăng ký trực tiếp tại quầy giải đấu» · 절차 6단계는 그대로(L170 «poker room registration desk» = «quầy đăng ký của phòng poker» 허용 — 카지노라는 단어만 쓰지 않는다) |
| tournament H3 L177 | «Option B: Online Pre-Registration» + L179 «(e.g., the WSOP LIVE app plus a Caesars Rewards account for WSOP, the "Events" and "Live" tabs in the PokerStars lobby for EPT/APPT events)» | 절차는 유지 · **괄호 운영사·앱 이름 전부 삭제** → «Tạo tài khoản trên ứng dụng hoặc trang đăng ký của giải» |
| tournament H3 L184 · L185 | «Find satellite tournaments online (PokerStars Power Path, GGPoker's WSOP satellites) or on-site» | 괄호 삭제 → «Tìm giải satellite trực tuyến hoặc tại chỗ» |
| tournament L191 | «Playing in Asia? See the [APT Incheon 2026 guide]…» | 보드 링크 문장으로 대체(§1-D) |
| tournament L302(체크리스트) | «Casino loyalty card if required (e.g., Caesars Rewards for WSOP)» | «Thẻ thành viên của phòng poker nếu được yêu cầu» |
| short-stack FAQ L174 | «It's also the name of a fast online format (GGPoker's All-in or Fold)…» | 운영사명 삭제 → «Đây cũng là tên một thể thức online tốc độ cao, nơi mọi quyết định preflop đúng nghĩa chỉ là shove hoặc fold.» |
| vs-cash FAQ L400 | «Do you get taxed on poker tournament winnings?» | 🔴 **삭제** → 교체 문항은 확정 카피(«Có thể rời bàn cash game bất cứ lúc nào không?» · 답 = EN L262~271 사실만) |
| 🪶 사실 인용(유지) | L78 WPT Australia 2026 60분 레벨 · L155 WSOP Main Event $10.000 · L260~264 WPT Seminole 2024 지급 사례 · bubble L139·L150 WSOP·TDA 규정 번호 | **그대로**(사실·규정 인용은 운영사 추천이 아니다 · 수치 축어) |

### 1-I. 카피 확정 경위 (A-⑥)
- Fable 서브 1회(Agent · model fable · 입력 = L-E 키워드 실측·AC·PAA 축어 · EN 메타/H2/H3/FAQ · §3-A 고정문·용어 · §3-C 금지 헤드 + §3-A ⑦ 오염 목록 · posting.mdc «SEO 카피» 절 · L-E §7 처방 · 합법성/세금 FAQ 교체 지시 · 운영사명 삭제 지시). 출력을 각 편 «확정 카피»에 실었고 **Opus 조정 1건**만 가했다: short-stack H2 4 «Shove đầu tiên» → «Shove first-in»(§1-B 용어 정본 · first-in은 영어 보존). Fable 판정 채택 3: tournament 선택 FAQ «Chip leader là gì?» 제외 · icm 무성조 태그 «icm poker la gi» 미등재 · vs-cash 구판 «chip ≠ tiền» 훅 폐기(icm 소유).
- 글자 수 Opus 재측정(String.length · 스크래치 `len.mjs`): seoTitle 55~59 / 60 · desc 136~153 / 160 · title 64~75 · tldr 160~445(EN tldr 길이에 맞춤 — EN tournament 254 · icm 404 · bubble 404 · short-stack 470 · vs-cash 140) · tags 8~9 — 초과 0. Fable이 «1~2자 초과면 줄여라»고 적어 둔 bubble desc(153)·tournament desc(150)·short-stack seoTitle(59)은 실측 상한 안 → 그대로.
- 훅 분리(5편 전부 상이): tournament = «lần đầu đánh tour + 칩을 안 잃었는데 200 BB → 10 BB» · icm = «nửa số chip = 38,4% tiền»(«chip ≠ tiền» 축은 icm만) · bubble = «còn 1 người out là ai cũng vào tiền» · short-stack = «dưới 8 BB vũ khí biến mất» · vs-cash = «cùng bộ bài, khác cuộc chơi».
- 소유표 자가 점검(Fable 보고 + Opus 대조): «icm» 태그 = holdem-icm에만 · «máy tính / bảng / push or fold / push fold chart / icm calculator» = 5편 title·seoTitle·tags 0(short-stack H2 6 문구 + 본문 앵커만) · 오염 헤드(icm là gì · bubble là gì · short stack 단독 · mtt là gì · stack poker · cash game 단독) 0 · 보드 몫(«giải poker» · «poker tournament» 단독 · 도시·연도) 0 · 합법성·세금·운영사명·카지노·poker online·bubble protection 0 · H2 개수 EN 1:1(12·9·10·8·12) · 질문형 75/89/80/75/83% · FAQ 11·9·10·10·10.
- 교체 FAQ 2건: tournament L342 합법성 → «Buy in poker là gì?»(답 = EN L57~68) · vs-cash L400 세금 → «Có thể rời bàn cash game bất cứ lúc nào không?»(답 = EN L262~271). 🆕 FAQ 5건: tournament GTD(§1-G ④ EN glossary) · MTT(EN L127·L130) · icm «ICM là viết tắt của từ gì?»(EN L21) · bubble «Out bubble trong poker là gì?»(EN L44) · short-stack «Stack trong poker là gì?»(EN L37 + §1-G ⑤). **모두 답 = EN 본문(또는 §1-G 형제·도구 정의) 사실만 · 새 수치 0.**

---
## holdem-tournament — EN updated 2026-10-01 · P2

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How Poker Tournaments Work — Buy-Ins, Formats & Day 1 |
| seoTitle | Never Played a Poker Tournament? Here's How It Works |
| desc | How do poker tournaments work? Buy-ins, blind structure, payout structure, freezeout vs PKO vs satellite formats, and a first-timer Day-1 checklist. |
| tldr | In a poker tournament you pay a fixed buy-in for chips, blinds increase on a timer until one player holds all chips. Top 10–15% of players cash. Formats include freezeout, PKO, satellite, and deepstack — enter via direct buy-in, satellite, or online pre-registration. |
| category · date · updated · readTime · emoji | tournament · 2026-06-16 · 2026-10-01 · 14 min · 🏆 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-tournament-hero.webp · Crowded live poker tournament floor with the blind clock showing 12,000/24,000 as players contest a hand |
| tags | how do poker tournaments work · poker tournament structure · poker tournament blind structure · poker tournament payout structure · types of poker tournaments · freezeout poker tournament · pko poker · satellite poker tournament · how to play tournament poker |

### 소유표 (계획 §3-C ⑩ · §3-A ⑦)
- **주인인 검색어**: poker tournament là gì 20(SERP 정의 글 **0** · FB 클럽 영상 7) · giải đấu poker là gì 10 · itm trong poker là gì 30 · itm poker là gì 30 · itm poker 20 · gtd trong poker là gì 30(정의 글 0) · buy in poker 30 · buy in poker là gì 20 · sit and go poker 20 · mtt poker là gì 10 · satellite / bounty / freezeout / deepstack / rebuy / add on / late reg / payout poker 각 10 · poker tournament strategy · cách chơi poker tournament · luật poker tournament · đánh tour poker · cách đánh tour poker · kinh nghiệm đánh tour poker 각 10 · AC «tour poker là gì» «đánh tour poker là gì» «reg end trong poker là gì» «chip leader (poker) là gì» «tournament director là gì».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «poker tournament» 210 단독 · «giải poker» 70 · «giải poker là gì» 40(합법성 6/10) · 도시·연도·«tour poker» 30·«vietnam poker tour»(→ `/vi/tournaments`) · «mtt là gì» 110(세금계산서) · «giải đấu poker online»(금지 축) · «poker tournament có hợp pháp không» · icm(→ holdem-icm) · push fold(→ 도구).

### 구조 (EN L## · 축어 목록 — 본문은 EN 파일에서) — 표 5 · 본문 이미지 0 · HTML 카드 2 + 그리드 · FAQ 9
- L29~33 경험담 도입 3단락 → `---`
```
L37 [H] ### At a Glance
L39 [DIR] :::stripe
L43 [DIR] :::
L45 [H] ## What Is a Poker Tournament? (30-Second Answer)
L55 [H] ## Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks
L59 [표] | $109 buy-in (written as "$100+$9") | Where it goes |
L74 [H] ## Poker Tournament Blind Structure — Levels, Antes, and the Clock
L80 [표] | Level | Blinds | Antes | Your 10k stack = |
L99 [H] ## The 4 Stages Every Tournament Goes Through
L101 [H] ### Stage 1 — Early Levels (100–200 BB deep)
L104 [H] ### Stage 2 — Middle Stages (30–60 BB)
L107 [H] ### Stage 3 — The Bubble
L110 [H] ### Stage 4 — Final Table
L115 [H] ## Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More
L117 [표] | Format | How it works | Best for |
L134 [H] ### What Is a Freezeout Poker Tournament?
L138 [H] ### What Is PKO Poker? (Progressive Knockout)
L142 [H] ### What Is a Deepstack Poker Tournament?
L150 [H] ## What Is a Satellite Poker Tournament?
L167 [H] ## How to Enter a Poker Tournament — 3 Ways
L169 [H] ### Option A: Direct Buy-In at the Casino (Easiest)   ← §1-H 일반화
L177 [H] ### Option B: Online Pre-Registration                   ← L179 운영사명 삭제
L184 [H] ### Option C: Satellite Qualifier                       ← L185 괄호 삭제
L195 [H] ## How to Play Tournament Poker — Strategy by Stage
L209 [H] ## What Happens on Day 1 — Hour by Hour
L213 [HTML] <div style="background:rgba(255,248,210,0.06);…"> (크림 카드 열기 · 줄 축어 복사 · 시각 24h)
L249 [H] ## Poker Tournament Payout Structure — Who Gets Paid What
L253 [표] | Field Size | Players Paid | Min-Cash (typical) | 1st Place (typical) |
L270 [H] ## Tournament Glossary — Terms You'll Hear on Day 1
L274 [표] | Term | What it means |
L295 [H] ## First Tournament Checklist
L297 [HTML] <div style="background:rgba(255,248,210,0.06);…"> (크림 카드 열기 · 줄 축어 복사 · L302 §1-H)
L318 [DIR] :::readnext[Keep reading]
L319 [CARD] /en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp
L320 [CARD] /en/blog/holdem-bubble | What Is the Bubble in Poker? | /images/holdem-bubble-hero.webp
L321 [CARD] /en/blog/apt-incheon-2026-guide | APT Incheon 2026 Guide | /images/apt-incheon-2026-guide-hero.webp   ← holdem-icm으로 대체
L322 [DIR] :::
L324 [H] ## FAQ
L326 [Q] **Q. How long does a poker tournament last?**
L330 [Q] **Q. What is the difference between PKO and bounty tournaments?**
L334 [Q] **Q. What are the rules on rebuys and add-ons?**
L338 [Q] **Q. How do poker tournaments make money?**
L342 [Q] **Q. Is it legal to host a poker tournament at home?**   ← 🔴 교체
L346 [Q] **Q. What does ITM mean in poker?**
L350 [Q] **Q. Can you join a poker tournament after it has started?**
L354 [Q] **Q. Can you leave a poker tournament early and keep your chips?**
L358 [Q] **Q. Are poker tournaments more luck or skill?**
L364 [H] ## Related Guides
L366 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L367 [GRID] /en/blog/holdem-tournament-vs-cash-game
L372 [GRID] /en/blog/holdem-starting-hands-chart
L377 [GRID] /en/blog/holdem-short-stack
L382 [GRID] /en/blog/texas-holdem-rules-for-beginners
L387 [GRID] /en/blog/holdem-blind-meaning
L392 [GRID] /en/blog/holdem-positions
```
- `:::stripe` 3행(L40~42): `10–15% | of the field typically gets paid` / `20–40 min | per blind level live (60+ at flagship Mains)` / `$100+$9 | how a typical buy-in splits — prize pool + fee` → 왼쪽 칸 `10–15%` · `20–40 phút` · `$100+$9`.
- 형식 표 L117 = 3열 · **10행** · 용어 표 L274 = 2열 · **16행**(`|------|` 구분선 형식 그대로 · 🆕 행 추가 금지 — GTD는 FAQ로) · L89·L163 `==g:…==` 강조 문단.
- L47~49 = 정의 평문 + «**One-sentence summary:**» 굵은 요약 → vi도 같은 모양(«**Tóm trong một câu:**»). H2 1 직답 단락 끝에 §1-G ② tour≠tournament 1문장 추가(현지 추가 · 진행 파일 기록).
- 🔴 L191 보드 문장 대체 · L321 readnext 대체(§1-D) · L169·L179·L185·L302 일반화(§1-H).

### 링크
- L51 holdem-tournament-vs-cash-game(thumb `/images/tournament-table-action.webp`) · L64 holdem-rake · L91 holdem-short-stack · L95 holdem-blind-meaning · L108 holdem-bubble · L111 holdem-icm(thumb) · 🔴 L191 apt-incheon → `/vi/tournaments`(«lịch giải poker») · L199 holdem-starting-hands-chart · L203 holdem-short-stack · L272 holdem-glossary
- readnext L319~321: tournament-vs-cash-game(`/images/tournament-table-action.webp`) · bubble(`/images/holdem-bubble-hero.webp`) · 🔴 apt-incheon → **holdem-icm**(`/images/holdem-icm-hero.webp`)
- 관련 글 그리드 L367~396(라벨 · 제목 · 설명): tournament-vs-cash-game(Deep Dive · Tournament vs Cash Game · Chip value, rising blinds, ICM — which format fits you) · starting-hands-chart(Strategy · Starting Hands Chart · Which hands to play in early levels → 🔴 vi 카드 제목에 «bảng/chart» 금지 → «Bài khởi đầu nên chơi theo vị trí») · short-stack(Short Stack · Short-Stack Strategy · Push-or-fold when the blinds close in) · texas-holdem-rules-for-beginners(Start Here · Texas Hold'em Rules for Beginners · Master the basics first) · blind-meaning(Blinds · What Are the Blinds in Poker? · Blind levels start here — SB, BB, and antes) · positions(Positions · Poker Table Positions Explained · Why your seat drives every tournament decision)

### 키워드·SERP 요지 (L-E §1·§3-0~3-1·§4-2·§7-2·§8-①②)
- «poker tournament» 210 = **일정·장소 의도**(유기 10/10 캘린더·클럽·여행사 · 해설 0) · «giải poker» 70 = 합법성 기사 4 + 일정 3 · «giải poker là gì» 40 = 합법성 6/10 → 헤드 정면 금지. 글은 «poker tournament là gì» 20 · ITM 30+30+20 · GTD 30 · buy in 30+20 · SNG 20 + 10짜리 용어 15개로 들어간다(정의 SERP 전부 **공석**).
- 상위 베트남어 글: wikipoker «Poker Tour là gì?»(3.530어 · 표 4 · 단계 4 Early/Middle/Bubble/FT · 비교표 · 🔴 tour=tournament 혼동) · thegioipoker(상점 블로그 · 헤딩 0) · GGPoker vi 형식표(«Đóng băng» 오역) · pokerbold 2018(Doug Polk 번역 · «Nỗi sợ bị out tour») · wikipoker ITM(«ITM tốt 14–18%» 출처 없음 — 인용 금지).
- **우리가 더 줄 것 3**: ① 1인칭 첫 대회 + 시간대별 Day 1 타임라인(경쟁 0) ② 블라인드 표로 «칩을 하나도 잃지 않았는데 200BB → 10BB» ③ 실제 지급 사례(WPT Seminole 2024) + 16개 용어표 + 체크리스트 + GTD·reg end·MTT 정의(SERP 0).
- 현지 표현(본문 재료): «đánh tour» · «out tour» · «vào tiền» · «late reg» · «bàn chung kết» · «chip leader» · «buy-in».

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (67) : Poker tournament là gì? Buy-in, cấu trúc blind, trả thưởng và Day 1
- **seoTitle** (57) : Lần đầu đánh tour poker — poker tournament là gì và Day 1
- **desc** (150) : Không thua chip mà 200 BB thành 10 BB — đó là giải đấu poker. Buy-in, cấu trúc blind, cơ cấu trả thưởng, freezeout, PKO, satellite và checklist Day 1.
- **tldr** (326) : Trong giải đấu poker (tournament), bạn trả một buy-in cố định để nhận chip, blind tăng theo đồng hồ cho đến khi một người giữ toàn bộ chip. Khoảng 10–15% người chơi đứng đầu được vào tiền. Các thể thức gồm freezeout, PKO, satellite và deepstack — tham gia bằng buy-in trực tiếp, qua giải vệ tinh hoặc đăng ký trước trực tuyến.
- **tags** (9) : "poker tournament là gì", "giải đấu poker là gì", "itm trong poker là gì", "buy in poker", "gtd trong poker là gì", "mtt poker là gì", "satellite poker", "cách đánh tour poker", "luật poker tournament"

#### H2 (질문형 9/12 = 75%)
| # | EN H2 (L##) | vi H2 | 형 |
|---|---|---|---|
| 1 | L45 What Is a Poker Tournament? (30-Second Answer) | Poker tournament là gì? (trả lời trong 30 giây) | Q |
| 2 | L55 Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks | Cấu trúc giải đấu: buy-in, phí và stack khởi điểm được tính thế nào? | Q |
| 3 | L74 Poker Tournament Blind Structure — Levels, Antes, and the Clock | Cấu trúc blind trong giải đấu poker: level, ante và đồng hồ chạy thế nào? | Q |
| 4 | L99 The 4 Stages Every Tournament Goes Through | 4 giai đoạn mà mọi giải đấu đều đi qua | – |
| 5 | L115 Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More | Có những loại giải đấu poker nào? Freezeout, PKO, satellite, deepstack… | Q |
| 6 | L150 What Is a Satellite Poker Tournament? | Satellite poker là gì? (giải vệ tinh) | Q |
| 7 | L167 How to Enter a Poker Tournament — 3 Ways | Đăng ký giải đấu poker bằng cách nào? 3 cách | Q |
| 8 | L195 How to Play Tournament Poker — Strategy by Stage | Cách chơi poker tournament theo từng giai đoạn thế nào? | Q |
| 9 | L209 What Happens on Day 1 — Hour by Hour | Day 1 diễn ra thế nào? Từng giờ của lần đầu đánh tour | Q |
| 10 | L249 Poker Tournament Payout Structure — Who Gets Paid What | Cơ cấu trả thưởng của giải đấu poker: ai nhận bao nhiêu? | Q |
| 11 | L270 Tournament Glossary — Terms You'll Hear on Day 1 | Thuật ngữ giải đấu bạn sẽ nghe ở Day 1 | – |
| 12 | L295 First Tournament Checklist | Checklist cho giải đấu đầu tiên | – |
| — | L324 FAQ · L364 Related Guides | ## Câu hỏi thường gặp · ## Bài viết liên quan | 고정 |

#### H3
| EN H3 | vi H3 |
|---|---|
| L37 At a Glance | Tóm tắt nhanh |
| L101 Stage 1 — Early Levels (100–200 BB deep) | Giai đoạn 1 — Level đầu (stack sâu 100–200 BB) |
| L104 Stage 2 — Middle Stages (30–60 BB) | Giai đoạn 2 — Giai đoạn giữa (30–60 BB) |
| L107 Stage 3 — The Bubble | Giai đoạn 3 — Bubble |
| L110 Stage 4 — Final Table | Giai đoạn 4 — Bàn chung kết |
| L134 What Is a Freezeout Poker Tournament? | Freezeout poker là gì? |
| L138 What Is PKO Poker? (Progressive Knockout) | PKO poker là gì? (Progressive Knockout — bounty tăng dần) |
| L142 What Is a Deepstack Poker Tournament? | Deepstack poker là gì? |
| L169 Option A: Direct Buy-In at the Casino (Easiest) | Cách A: Đăng ký trực tiếp tại quầy giải đấu (dễ nhất) — «카지노» 삭제(§1-H) |
| L177 Option B: Online Pre-Registration | Cách B: Đăng ký trước trực tuyến — 운영사명 없음(§1-H) |
| L184 Option C: Satellite Qualifier | Cách C: Qua giải vệ tinh (satellite) |

#### FAQ (EN 9 · 교체 1 · 🆕 2 = 11)
| # | EN Q (L##) | vi Q |
|---|---|---|
| 1 | L326 How long does a poker tournament last? | Giải đấu poker kéo dài bao lâu? |
| 2 | L330 What is the difference between PKO and bounty tournaments? | PKO và bounty poker khác nhau thế nào? |
| 3 | L334 What are the rules on rebuys and add-ons? | Rebuy và add-on trong poker là gì, luật thế nào? |
| 4 | L338 How do poker tournaments make money? | Ban tổ chức giải đấu thu tiền bằng cách nào? |
| 5 | L342 Is it legal to host a poker tournament at home? → 🔴 **교체** | Buy in poker là gì? — 답 = EN 본문 L57~68 사실만($109 = $100 quỹ thưởng + $9 phí · 큰 라이브 이벤트 8–10% · 작은 데일리는 더 높을 수 있다 · 스택은 현금 가치 없음). 합법성 문장 0 |
| 6 | L346 What does ITM mean in poker? | ITM trong poker là gì? |
| 7 | L350 Can you join a poker tournament after it has started? | Có thể tham gia khi giải đấu đã bắt đầu không? (đăng ký muộn) |
| 8 | L354 Can you leave a poker tournament early and keep your chips? | Có thể rời giải đấu sớm và giữ chip không? |
| 9 | L358 Are poker tournaments more luck or skill? | Giải đấu poker thiên về may mắn hay kỹ năng? |
| 🆕 10 | — (gtd trong poker là gì 30 · 정의 글 0) | GTD trong poker là gì? — 답 = §1-G ④ EN glossary L207 사실만 + «đảm bảo» 1회 · 새 수치 0 |
| 🆕 11 | — (mtt poker là gì 10 · mtt poker 50) | MTT poker là gì? — 답 = EN 형식 표 L127 «Multi-Table Tournament — large field across many tables · the most common format» + L130 «Freezeout MTT» 권고만. 마지막 문항 |
- «Chip leader là gì?» 선택 FAQ → **넣지 않는다**(Fable 판정 · Opus 동의: FAQ 11 상한 근접 · AC만 · 용어표 L280 행이 받는다).

#### 키워드 흡수
- poker tournament là gì(20) → seoTitle · title · H2 1 · tag · 🔴 «poker tournament» 단독·«giải poker» 0
- đánh tour poker(10) · cách đánh tour poker(10) · kinh nghiệm/chiến thuật đánh tour(AC) → seoTitle 훅 · H2 9 · tag · H2 8 본문 · 고정문 §1-G ①
- tour poker là gì / đánh tour poker là gì(AC) → H2 1 직답 끝 1문장(§1-G ② tour ≠ tournament)
- giải đấu poker là gì(10) → tag · desc «giải đấu poker»
- buy in poker(30) · buy in poker là gì(20) · buy in là gì trong poker(AC) → FAQ 5(교체) · H2 2 · tag
- itm trong poker là gì(30) · itm poker là gì(30) · itm poker(20) → FAQ 6 · tag · tldr «vào tiền»
- gtd trong poker là gì(30) → FAQ 🆕 10 · tag · mtt poker là gì(10) · mtt poker(50) → FAQ 🆕 11 · tag · H2 5 본문
- satellite poker (là gì)(10/AC) → H2 6 · H3 C · tag · freezeout/deepstack/bounty poker(10) → H3 · FAQ 2
- rebuy/add on poker(10) → FAQ 3 · late reg poker(10) → FAQ 7 · reg end(AC) → H2 11 용어표 «Late reg» 행 풀이
- cách chơi poker tournament(10) · poker tournament strategy(10) → H2 8 · luật poker tournament(10) · luật tour poker(AC) → tag · H2 3
- payout poker(10) → H2 10 · final table poker(10) → H3 Stage 4 · sit and go poker(20) → H2 5 본문 «Sit & Go (SNG)» · giải đấu poker kéo dài bao lâu(AC) → FAQ 1 · chip leader (poker) là gì(AC) → H2 11 용어표

### §13 자리 (C 전사 대조·손검산 — 카드 0 · 수치만 · 전건 재계산 ✅ 10-09)
- L29 $200 · 4시간(L31)
- L40~42 stripe 10–15% · 20–40 min · 60+ · $100+$9
- L59~64 $109 = $100 + $9 · 8–10% · «about 8.3%»(9/109 = 8,26 ✅) · L66 10.000~50.000칩 · 100–300 BB · L68 10.000칩 ≠ $10.000
- L78 20–40분 · 60분+ · WPT Australia 2026 60분 → 후반 90분(🔴 EN 시제 «ran» = 과거 — vi도 과거 «đã chạy»)
- L80~87 표: 25/50 → 200BB · 75/150(ante 150) → 67BB · 200/400(400) → 25BB · 500/1.000(1.000) → 10BB(검산 10.000/150 = 66,7 ✅)
- L89 20 / 15 / 10 big blind · L101~111 100–200 BB · 30–60 BB · 6–9명
- L140 PKO «around half» · 50/50 · L155~159 $10.000 · $500 × 20명 = 1석 ✅ · L161 $5 → $55 → $215 → $1.050
- L189 1–3시간 · L199~203 100BB+ · 30–60BB · under 20BB
- L211~245 $300 freezeout · 10.000칩 · 시각 7행(§1-C 24h) · 25/50 · 200BB · ~40% · 1시간
- L251~258 표 4행(100 → ~13 · 500 → ~60 · 2.000 → ~250 · 10.000 → ~1.200 · 배수·% 전부)
- L260~264 WPT Seminole Rock 'N' Roll Poker Open Championship 2024 · $3.500 · 1.435 entries · $4.592.000($3.200 × 1.435 = 4.592.000 ✅) · 180명(12,54% ✅ ~12,5%) · 1.83x → «1,83 lần» · $662.200(14,42% ✅ ~14%)
- L301 buy-in + 20% · L304 6–12시간 · L309 30–45분
- FAQ L328 4–8시간 · 4–6일 · L340 8–10% · L348 200명·25명·175명 탈락 ✅ · 1.5–2x → «1,5–2 lần» · L352 2~4시간
- tldr «Top 10–15%» · 🆕 FAQ GTD·MTT·buy-in 답에 **새 수치 0**(EN L57~68·L127·glossary L207 사실만)

### 경험담 자리 (EN 축어 → 베트남 독자 맥락으로 다시 쓰되 없는 사실 금지)
- **L29** I walked into my first live poker tournament with $200, a vague idea of how Texas Hold'em worked, and zero clue what a "blind level" or "bubble" meant.
- **L31** Four hours later I was out. But I knew exactly what every term meant, why I lost, and when to come back.
- **L33** This guide is everything I wish someone had told me before that day — how tournament structure actually works, which format you're entering, how to register without looking clueless, and what Day 1 feels like hour by hour.
→ vi: 1인칭 tôi · $200·4시간 그대로 · 장소 특정 금지(EN에 없다 — 베트남 클럽·도시 이름 금지) · «đánh tour» 어휘를 여기(L29 «my first live poker tournament» = «giải đấu live đầu tiên — lần đầu đi đánh tour») 1회 + §1-G ① 고정문은 H2 1 또는 용어표 근처 1회.

### 하지 말 것
- L140 «(A full PKO strategy guide is coming to this cluster soon.)» — EN 약속문. **그대로 옮긴다**(EN 패리티).
- L78·L155·L260 대회·운영사 **사실 인용**은 유지(§1-H 마지막 행) — 등록 절차(L179·L185·L302)의 **추천형 이름**만 지운다.
- FAQ L342 합법성 → 확정 카피의 교체 문항(답 = EN 본문 사실만). «poker có hợp pháp không» 류 문장 0.
- L274 용어표 «Shove / JAM» 행 → «Shove / jam — all-in toàn bộ stack»(jam 허용 자리) · «Bubble» 행 정의 = «ngay trước ITM — còn một người bị loại nữa là tất cả vào tiền»(GG «vài lần» 혼동 교정 · EN L277 축어).
- tldr «Top 10–15% of players cash» 수치 그대로(«10–15%»).
- 「4 stages」 = 4단계 유지. 경쟁 글의 5단계(ITM 단계)를 더하지 마라.
- «Freezeout» → 영어 그대로 + 풀이(«một buy-in, không rebuy») — «Đóng băng» 금지.

---
## holdem-icm — EN updated 2026-09-09 · P1

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | What Is ICM in Poker? The Independent Chip Model, Explained |
| seoTitle | Your Chips Aren't Worth Face Value — ICM in Poker |
| desc | In a tournament your chips aren't cash — winning only pays first. ICM (the Independent Chip Model) turns your stack into real prize money. Here's how it works. |
| tldr | ICM (Independent Chip Model) converts your tournament chip stack into its real prize-money value, using the payouts and everyone's stacks. Because you only win one first prize, doubling your chips never doubles your money — so the chip leader's stack is worth less than its chip share, and short stacks are worth more. That gap is why you fold hands on the bubble that would be easy calls in a cash game. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-09 · 13 min · 🏆 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-icm-hero.webp · Final-table poker chips stacked in front of a payout ladder, showing that a bigger chip stack does not convert one-to-one into a bigger share of the prize money |
| tags | poker icm · what is icm in poker · icm poker meaning · icm vs chip ev · icm deal · chip chop vs icm · how is icm calculated · icm poker strategy |

### 소유표 (계획 §3-C ⑧ · L-E §8-③)
- **주인인 검색어**: **icm poker 110**(유기 9 전부 외국어 · 베트남어 0 = 공석) · icm poker là gì 20 · icm poker la gi 20(같은 수요) · icm trong poker là gì 10 · icm poker strategy 10 · icm poker deal 10 · deal icm poker là gì 10 · icm deal 10 · chip ev 10 · AC «icm poker formula» · PAA «Icm poker là gì?» · «ICM là viết tắt của từ gì?»(비포커 SERP의 PAA지만 질문형은 유효).
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «icm là gì» 140(K-ICM 가수 8/10) · «icm calculator» 40 · «icm poker calculator / app / tool / online»(→ `/vi/calculator` · H2 «Cách tính ICM…»은 손계산법이라 허용) · push fold.
- 앵커: 본문 `/vi/calculator` 링크 4곳(L93 · L148 · L227 · 그리드)의 앵커 = «máy tính ICM»(§1-D). 도구 쪽 역앵커(icmGuide → holdem-icm «ICM là gì»)는 배포 회차(헤드 · 계획 §4-C ③).

### 구조 (EN L## · 축어 목록) — 표 3(전부 크림 박스 래퍼) · 본문 이미지 1 · FAQ 8
- L19 경험담 · L21 `==…==` 강조 도입 · L23 필라 링크 문장 → `---`
```
L27 [H] ### ICM at a glance
L29 [DIR] :::stripe
L33 [DIR] :::
L37 [H] ## What Is ICM in Poker?
L47 [H] ## Why Your Chips Aren't Worth Their Face Value in Money
L57 [H] ## How Is ICM Calculated? (The Malmuth–Harville Model)
L69 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L71 [표] | Finish | Leader (5,000 · 50%) | Middle (3,000 · 30%) | Short (2,000 · 20%) |
L83 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L85 [표] | Player | Chip % | ICM value | ICM % | vs chips |
L97 [H] ## ICM vs Chip EV — What's the Difference?
L107 [H] ## The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps
L117 [IMG] ![A medium tournament stack folding …](/images/holdem-icm-pressure.webp "ICM pressure: …")
L119 [H] ## Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls
L132 [H] ## ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool
L138 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L140 [표] | Player | Chip chop | ICM deal | Difference |
L152 [H] ## When Does ICM Matter Most — and When Should You Ignore It?
L170 [H] ## How Accurate Is ICM? Its Limitations
L182 [DIR] :::readnext[Keep reading]
L183 [CARD] /en/blog/holdem-tournament | Texas Hold'em Tournament Strategy | /images/holdem-tournament-hero.webp
L184 [CARD] /en/blog/holdem-equity | Poker Equity Explained | /images/holdem-equity-hero.webp
L185 [DIR] :::
L187 [H] ## FAQ
L189 [Q] **Q. What is ICM in poker?**
L193 [Q] **Q. How is ICM calculated?**
L197 [Q] **Q. What's the difference between ICM and chip EV?**
L201 [Q] **Q. What is an ICM deal, and how is it different from a chip chop?**
L205 [Q] **Q. Does ICM apply to cash games?**
L209 [Q] **Q. When should I ignore ICM?**
L213 [Q] **Q. What are the most common ICM mistakes?**
L217 [Q] **Q. Who invented ICM?**
L223 [H] ## The 3 Things to Remember
L233 [H] ## Related Posts
L235 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L236 [GRID] /en/blog/holdem-tournament
L241 [GRID] /en/blog/holdem-tournament-vs-cash-game
L246 [GRID] /en/blog/holdem-equity
L251 [GRID] /en/calculator
```
- `:::stripe` 3행(L30~32): `chips ≠ money | You win only one first prize` / `chip leader | worth LESS than their chip share` / `short stack | worth MORE than their chip share` → 왼쪽 칸 «chip ≠ tiền» · «chip leader» · «short stack».
- L57 H2 아래 불릿 3(L63~65 재귀 규칙) · 래퍼 표 L69~77(4열 · 3행) · L79 재귀 산식 단락 · 래퍼 표 L83~91(5열 · 3행 · `==$38.39==` `==r:−11.6==` `==g:+2.8==` `==g:+8.9==` → `==$38,39==` `==r:−11,6==` `==g:+2,8==` `==g:+8,9==`) · 래퍼 표 L138~146(4열 · 3행 · `==$618==` `==r:−$132==` `==g:+$35==` `==$397==` `==g:+$97==`) · 표 머리 = §1-G ⑧ 도구 축어.

### 링크
- L23 holdem-tournament(thumb `/images/holdem-tournament-hero.webp`) · L43 holdem-tournament-vs-cash-game(thumb `/images/tournament-table-action.webp`) · L93 `/vi/calculator`(«máy tính ICM») · L99 holdem-equity(thumb `/images/holdem-equity-hero.webp`) · L125 holdem-3bet · L148 `/vi/calculator` · L156 holdem-bubble(thumb) · L227 `/vi/calculator` · L229 holdem-tournament · holdem-equity · holdem-pot-odds
- readnext L183~184: holdem-tournament(`/images/holdem-tournament-hero.webp`) · holdem-equity(`/images/holdem-equity-hero.webp`) — 제목 = 대상 vi title(§1-D)
- 관련 글 그리드 L236~255: holdem-tournament(Tournament · Texas Hold'em Tournament Strategy · The pillar ICM belongs to) · holdem-tournament-vs-cash-game(Tournament · Tournament vs Cash Game · Why ICM never applies to cash) · holdem-equity(Strategy · Poker Equity Explained · Chip EV is just equity in chips) · `/vi/calculator`(Free Tool · ICM Calculator · Run your own stacks and deals) — 카드 제목 «ICM Calculator» → «Máy tính ICM» · 라벨 «Free Tool» → «Công cụ miễn phí»
- 🟡 EN-먼저 후보(ms·fr 선례 승계): readnext L183·그리드 L238의 «Texas Hold'em Tournament Strategy»는 대상 글 실제 title과 다르다 → vi는 대상 vi title로 쓴다(진행 파일 «EN-먼저 후보»).

### 키워드·SERP 요지 (L-E §0-2·§3-0~3-1·§4-1·§4-6 ①②·§5·§7-1)
- «icm poker» 110 = KG «Independent Chip Model» · 유기 9 = 영어 해설 4 · 앱 2 · 소프트웨어 1 · 외국어 2 → **베트남어 0**. «icm poker là gì» 20 · «icm trong poker là gì» 10 = 포커 결과지만 **ICM을 정의하는 글 0**. 베트남어 ICM 해설은 wikipoker 2편(서로 카니발 → 둘 다 SERP 미출현 · 계산 과정 0 «Chúng ta sẽ đơn giản hóa việc tính toán bằng một phần mềm!» · 칩을 «$3.000» 달러 표기 · 수치는 맞다 21,88% ✅).
- **우리가 더 줄 것 3**: ① $50/$30/$20 3인 재귀를 손으로 푼 표 2개(경쟁 0 · «người dẫn đầu về nhì 33,9%» 한 줄까지) ② ICM deal vs chip chop 금액 비교(+$97) ③ 1인칭 버블 실수 + «세금은 call에 붙는다» 교정. 칩은 «chip», 돈만 «$».
- 카니발: 계산 본체는 `/vi/calculator` ICM 탭 링크(EN 자리 그대로) · bubble/short-stack/vs/tournament의 ICM 단락은 이 글 앵커로 위임.

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (75) : ICM poker là gì? Mô hình chip độc lập (Independent Chip Model) và cách tính
- **seoTitle** (55) : Giữ nửa số chip, chỉ đáng 38,4% tiền — ICM poker là gì?
- **desc** (147) : Trong giải đấu, chip không phải là tiền — chỉ có một giải nhất. ICM đổi stack thành tiền thưởng thật: cách tính tay, chip EV, thuế ICM và deal ICM.
- **tldr** (418) : ICM (Independent Chip Model — mô hình chip độc lập) đổi stack chip của bạn trong giải đấu thành giá trị tiền thưởng thật, dựa trên cơ cấu trả thưởng và stack của mọi người. Vì chỉ có một giải nhất, gấp đôi chip không bao giờ gấp đôi tiền — nên stack của chip leader đáng ít hơn tỷ lệ chip của nó, còn short stack đáng nhiều hơn. Khoảng cách đó là lý do bạn fold ở bubble những hand mà trong cash game bạn call dễ dàng.
- **tags** (8) : "icm poker", "icm poker là gì", "icm trong poker là gì", "icm poker strategy", "icm deal", "deal icm poker là gì", "chip ev", "icm poker formula"
  («icm poker la gi» 무성조형은 같은 수요라 미등재 — 성조 빠진 태그는 품질 신호 손상 · Fable 판정 채택)

#### H2 (질문형 8/9 = 89%)
| # | EN H2 (L##) | vi H2 | 형 |
|---|---|---|---|
| 1 | L37 What Is ICM in Poker? | ICM trong poker là gì? | Q |
| 2 | L47 Why Your Chips Aren't Worth Their Face Value in Money | Vì sao 50% số chip chỉ đáng 38,4% tiền thưởng? | Q |
| 3 | L57 How Is ICM Calculated? (The Malmuth–Harville Model) | Cách tính ICM trong poker (mô hình Malmuth–Harville) — tính tay từng bước | – |
| 4 | L97 ICM vs Chip EV — What's the Difference? | ICM và chip EV khác nhau thế nào? | Q |
| 5 | L107 The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps | "Thuế ICM": vì sao mất chip đau hơn được chip? | Q |
| 6 | L119 Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls | Bubble factor và risk premium thay đổi shove và call của bạn ra sao? | Q |
| 7 | L132 ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool | Deal ICM là gì? ICM deal và chip chop khi chia quỹ thưởng bàn chung kết | Q |
| 8 | L152 When Does ICM Matter Most — and When Should You Ignore It? | Khi nào ICM quan trọng nhất — và khi nào nên bỏ qua? | Q |
| 9 | L170 How Accurate Is ICM? Its Limitations | ICM chính xác đến đâu? Hạn chế của ICM | Q |
| — | L187 FAQ · L223 The 3 Things to Remember · L233 Related Posts | ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan | 고정 |

- H2 2의 «50% → 38,4%»는 EN 본문 L93·L109 수치(새 사실 아님).

#### H3
| EN H3 | vi H3 |
|---|---|
| L27 ICM at a glance | Tóm tắt nhanh về ICM |

#### FAQ (EN 8 · 🆕 1 = 9)
| # | EN Q (L##) | vi Q |
|---|---|---|
| 1 | L189 What is ICM in poker? | ICM poker là gì? (PAA 축어) |
| 2 | L193 How is ICM calculated? | ICM được tính như thế nào? |
| 3 | L197 What's the difference between ICM and chip EV? | ICM và chip EV khác nhau ở điểm nào? |
| 4 | L201 What is an ICM deal, and how is it different from a chip chop? | ICM deal là gì và khác chip chop thế nào? |
| 5 | L205 Does ICM apply to cash games? | ICM có áp dụng cho cash game không? |
| 6 | L209 When should I ignore ICM? | Khi nào nên bỏ qua ICM? |
| 7 | L213 What are the most common ICM mistakes? | Những lỗi ICM phổ biến nhất là gì? |
| 8 | L217 Who invented ICM? | Ai phát minh ra ICM? |
| 🆕 9 | — (PAA «ICM là viết tắt của từ gì?») | ICM là viết tắt của từ gì? — 답 = «Independent Chip Model — mô hình chip độc lập»(EN L21) + 한 문장 정의. 새 수치 0 · 마지막 문항 |

#### 키워드 흡수
- icm poker(110) → seoTitle · title · tag · icm poker là gì(20) · PAA «Icm poker là gì?» → title · seoTitle · FAQ 1 · tag
- icm trong poker là gì(10) → H2 1 · tag · icm poker strategy(10) → tag · H2 6·8 본문
- icm poker deal(10) · deal icm poker là gì(10) · icm deal(10) → H2 7 · FAQ 4 · tags · chip ev(10) → H2 4 · FAQ 3 · tag
- icm poker formula(AC) → H2 3(«tính tay» = 경쟁 «phần mềm» 차별) · tag · PAA «ICM là viết tắt của từ gì?» → FAQ 🆕 9
- icm poker tool/calculator/app(AC) → 미사용(도구 몫) · 본문 앵커 «máy tính ICM»(/vi/calculator)만 · 🔴 icm là gì(140) → 어디에도 없음

### §13 자리 (카드 0 · 핸드 명칭 2 · 수치 · 전건 재계산 ✅ 10-09 `icm.mjs`)
- L19 «pocket jacks»(đôi J) vs «ace-ten»(A-10) · 4명 남음 · 3명 지급
- L49 $50 / $30 / $20 · $20 보장
- L63~65 재귀 규칙
- L67 $50 / $30 / $20 ($100 pool) · 표 L71~75: 5.000(50%) · 3.000(30%) · 2.000(20%) · 1st 50,0/30,0/20,0 · 2nd 33,9/37,5/28,6 · 3rd 16,1/32,5/51,4 (재계산 ✅ 전 칸)
- L79 30% · 5.000/7.000 = 71,4% · 0,30 × 0,714 = 21,4% · 20% · 5.000/8.000 = 62,5% · 0,20 × 0,625 = 12,5% · 합 33,9% ✅(0,3393)
- L85~89 표: $38,39 / 38,4% / −11,6 · $32,75 / 32,8% / +2,8 · $28,86 / 28,9% / +8,9 (재계산 ✅ 38.39 · 32.75 · 28.86)
- L93 half the chips ↔ 38,4% · 20% ↔ 28,9% · L109 50% vs 38,4% = 11,6포인트 · L111 40% → 48-50%(EN 하이픈 축어 → «48-50%»)
- L121 bubble factor 1,0 · 1,5 · 1,5×
- L136~144 $1.500 · $900/$400/$200 · 표 $750/$618/−$132 · $450/$485/+$35 · $300/$397/+$97 (재계산 ✅ 617,9 · 485,0 · 397,1) · L148 $97
- L175 3-big-blind stack · L178 «a large 2025 study» · FAQ L195 «your stack ÷ total chips»

### 경험담 자리 (EN 축어)
- **L19** The first time ICM cost me money, I didn't even know it existed. Four of us left, three getting paid, and I looked down at pocket jacks with a middling stack. I shoved, the chip leader called with ace-ten, and I busted on the bubble for nothing. ==For years I filed that away as proof the shove was wrong. It wasn't== — I just had no idea *where* a bubble actually charges you, and that turns out to be the single most important idea in tournament poker.
- **L103**(교정 회고) That is where I had those jacks backwards. The tax is charged on the *call*, and the mirror of that is what makes a bubble playable: because everyone's calling range tightens, your fold equity is worth **more** than it is in chips. First-in shoving is the middle stack's weapon on a bubble, not its leak — I ran into the one player who could call widest, which is variance, not a strategy error. ==Chip EV asks "will this build my stack?" ICM asks "will this build my bankroll?"== — and only the second one pays out.
→ vi: L19와 L103은 **한 이야기**다(«shove가 틀린 줄 알았다 → 아니었다, 세금은 call에 붙는다»). 🔴 두 자리의 결론을 뒤집지 마라 — «shove가 실수였다»로 옮기면 D유형. «I busted on the bubble» = «tôi out bubble»(구어 1회 자리). 이탤릭 `*…*` 유지.

### 하지 말 것 (되돌리지 마라 · EN 확정 문구)
- L101 괄호 «(the guaranteed minimum itself stays yours; on the bubble, where nothing is locked in yet, it costs everything)» — 버블 전/후 구분 단서. **빼지 마라.**
- L134·FAQ L203 «In its simplest form a chip chop…» + FAQ «middle version that first sets aside the payout each player has already locked up» — 뉘앙스 축어.
- L158·L164 «multi-seat satellite … (a winner-take-all satellite is played for first on chip EV)» · «Heads-up for the title, where only two prizes remain» — 조건 단서 유지.
- L175 괄호(3bb 버튼 vs BB 설명) 축어 · L178 «a large 2025 study … underestimate big stacks and overestimate short stacks» — 출처 링크 없음 · EN 그대로(보태지 마라).
- 계산기 ICM 가이드 4인 예시·«save-and-chop» 설명을 끌어오지 마라(§1-G ⑥) — EN에 없다.

---
## holdem-bubble — EN updated 2026-09-13 · P4

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Play the Bubble in Poker — Big, Medium & Short Stack Strategy |
| seoTitle | How to Play the Bubble in Poker (Stack by Stack) |
| desc | On the bubble, survival beats chips — so the right play flips. How to play a big, medium, or short stack, plus bubble factor, satellites, and hand-for-hand. |
| tldr | The bubble is the spot right before the money, where one more elimination pays everyone else. Because busting means winning nothing, survival is worth more than the chips you'd gain — so calling ranges tighten hard while shoving stays wide. Big stacks attack, medium stacks are the most trapped (not short stacks), and on a multi-seat satellite bubble you fold everything, even aces, once your seat is locked. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-13 · 13 min · 🫧 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-bubble-hero.webp · A short chip stack and a towering big stack across a tournament table on the money bubble, a payout ladder in the background — the moment survival becomes worth more than chips |
| tags | poker bubble · how to play the bubble · bubble strategy poker · bubble factor · short stack bubble · money bubble · satellite bubble · hand for hand poker |

### 소유표 (계획 §3-A ⑦ · §3-C ⑧)
- **주인인 검색어**: bubble poker 10(포커 7/8 · 1위 GG vi 수필) · bubble trong poker là gì 10(10/10 · 베트남어 7) · money bubble poker 10 · out bubble là gì 10 · out bubble trong poker là gì 10 · AC «bubble poker là gì» «poker bubble boy» «poker bubble factor» «stone bubble poker» «bubble poker tournament».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «bubble là gì» 1.000(포커 0/10 · 사전·K-pop 앱·버블티) · «bubble protection»(GG/Natural8 상품 · 언급도 금지) · icm(정의 H2 금지 — L51 H2는 «vì sao bubble thay đổi mọi thứ» 축) · máy tính ICM · push fold · «bubble time»(hand-for-hand와 동치 미확인 → 쓰지 않는다).
- 🪶 도구 icmGuide H2 «… ví dụ bubble trong 3 phút»(`/vi/calculator`)와는 축이 다르다(도구 = máy tính · 글 = 정의·전략) — 본문 L55·L131 `/vi/calculator` 앵커 «máy tính ICM».

### 구조 (EN L## · 축어 목록) — 표 1(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 · L23 ICM·tournament 링크 문장 → `---`
```
L27 [H] ### The bubble in one glance
L29 [DIR] :::stripe
L33 [DIR] :::
L37 [H] ## What Is the Bubble in Poker? (And "On the Bubble")
L51 [H] ## Why the Bubble Changes Everything: ICM in One Paragraph
L59 [H] ## The 3 Bubbles You'll Face: Money vs Final-Table vs Satellite
L71 [IMG] ![ICM pressure infographic …](/images/holdem-bubble-pressure.webp "On the bubble …")
L73 [H] ## How to Play a BIG Stack on the Bubble
L85 [H] ## How to Play a MEDIUM Stack on the Bubble
L99 [H] ## How to Play a SHORT Stack on the Bubble
L111 [H] ## Bubble Factor & Risk Premium: The Number That Tells You When to Fold
L117 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L119 [표] | Bubble factor | Losing hurts… | Equity you need (no dead money) |
L135 [H] ## Hand-for-Hand and Stalling: The Mechanics Nobody Explains
L145 [H] ## The Satellite Bubble: When to Fold Aces
L157 [H] ## The Biggest Bubble Mistake: Playing for the Min-Cash
L165 [DIR] :::readnext[Keep reading]
L166 [CARD] /en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp
L167 [CARD] /en/blog/holdem-when-to-fold | When to Fold in Poker | /images/holdem-when-to-fold-hero.webp
L168 [DIR] :::
L170 [H] ## FAQ
L172 [Q] **Q. What does "on the bubble" mean in poker?**
L176 [Q] **Q. Who is the bubble boy in poker?**
L180 [Q] **Q. What is a stone bubble vs a soft bubble?**
L184 [Q] **Q. What does it mean to "pay the bubble" or burst the bubble?**
L188 [Q] **Q. Should you fold on the bubble?**
L192 [Q] **Q. Do short stacks feel the most bubble pressure?**
L196 [Q] **Q. What is the bubble factor in poker?**
L200 [Q] **Q. What is hand-for-hand play?**
L204 [Q] **Q. Why would you fold aces on a satellite bubble?**
L210 [H] ## The 3 Things to Remember
L220 [H] ## Related Posts
L222 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L223 [GRID] /en/blog/holdem-icm
L228 [GRID] /en/blog/holdem-tournament
L233 [GRID] /en/blog/holdem-when-to-fold
L238 [GRID] /en/calculator
```
- `:::stripe` 3행(L30~32): `1 bust-out | pays everyone else — survival spikes in value` / `tighten calls | keep shoves wide` / `medium stack | the most trapped, not the short stack` → 왼쪽 칸 «1 người bị loại» · «call chặt hơn» · «medium stack».
- L37 H2 용어 불릿 3(`==**On the bubble**==` 식) · L59 불릿 3 · L73·L85·L99 각 불릿 3 · L115 산식 단락 · 래퍼 표 L117~127(3열 · 5행) · L135·L145 불릿 3.

### 링크
- L23 holdem-icm(thumb `/images/holdem-icm-hero.webp`) · holdem-tournament(thumb `/images/holdem-tournament-hero.webp`) · L55 `/vi/calculator`(«máy tính ICM») · holdem-icm · L77 holdem-3bet · L101 holdem-short-stack(thumb `/images/holdem-short-stack-hero.webp`) · L103 holdem-when-to-fold · L131 `/vi/calculator` · L216 holdem-icm · holdem-when-to-fold
- readnext L166~167: holdem-icm(`/images/holdem-icm-hero.webp`) · holdem-when-to-fold(`/images/holdem-when-to-fold-hero.webp`) — when-to-fold 제목은 §1-D 임시 규칙
- 관련 글 그리드 L223~242: holdem-icm(Tournament · ICM Explained · The math behind why the bubble matters) · holdem-tournament(Tournament · Tournament Strategy · The pillar the bubble belongs to) · holdem-when-to-fold(Strategy · When to Fold in Poker · The discipline the bubble demands) · `/vi/calculator`(Free Tool · ICM Calculator · Find your real bubble-factor number → «Máy tính ICM»)

### 키워드·SERP 요지 (L-E §1·§3-0·§4-3·§4-6 ⑧·§7-4)
- «bubble là gì» 1.000 = 포커 **0/10** → 조준 금지. 결합형 «bubble poker»·«bubble trong poker là gì» = 10/10 포커 · 1위 GG vi 블로그(«Khi Những Bong Bóng Bắt Đầu Vỡ» · 수치 0 · ICM 0회 · 🔴 «người chơi chỉ còn vài lần bị loại nữa là đến tiền thưởng» = 니어 버블 혼용) · 2위 wikipoker FT버블(3.900어 · 스택 4분할 · 실전 닉네임) · 3위 wikipoker money bubble(3.420어 · BIG/MEDIUM/SHORT = EN과 같은 구조 · bubble factor·risk premium **0회**) · pokerqz 용어집(«100 người … 20 người đứng đầu … 21 người chơi còn lại được gọi là bubble» ✅).
- **우리가 더 줄 것 3**: ① bubble factor → 필요 에퀴티 표 + 데드머니 보정(52,9% · 42,9%)(경쟁 0회) ② 버블 정의 «1명 더 탈락하면 전원 입상»(«top 27 → 28명 남을 때») + «out bubble» 구어 정의 ③ hand-for-hand 규정 번호(WSOP 126 · TDA RP-8) + 새틀 «AA 폴드».
- 표현(본문 재료): «out bubble» · «bubble vỡ» · «bubble boy» · «money bubble» · «bàn chung kết».

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (74) : Bubble trong poker là gì? Cách chơi theo từng cỡ stack: big, medium, short
- **seoTitle** (57) : Còn 1 người out là ai cũng vào tiền — bubble poker là gì?
- **desc** (153) : Ở bubble, sống sót đáng hơn chip — nước đi đúng đảo ngược. Cách chơi big, medium và short stack ở bubble, bubble factor, bubble vệ tinh và hand-for-hand.
- **tldr** (441) : Bubble là thời điểm ngay trước khi vào tiền: chỉ cần thêm một người bị loại là tất cả những người còn lại đều có thưởng. Vì out lúc này nghĩa là về tay trắng, sống sót đáng giá hơn số chip bạn có thể thắng thêm — nên range call thắt chặt mạnh trong khi range shove vẫn rộng. Big stack tấn công, medium stack mới là người bị kẹt nhất (không phải short stack), còn ở bubble vệ tinh nhiều vé, bạn fold mọi thứ, kể cả đôi Át, một khi vé đã chắc.
- **tags** (8) : "bubble poker", "bubble trong poker là gì", "money bubble poker", "out bubble trong poker là gì", "poker bubble factor", "stone bubble poker", "poker bubble boy", "bubble poker tournament"

#### H2 (질문형 8/10 = 80%)
| # | EN H2 (L##) | vi H2 | 형 |
|---|---|---|---|
| 1 | L37 What Is the Bubble in Poker? (And "On the Bubble") | Bubble trong poker là gì? ("on the bubble" và out bubble) | Q |
| 2 | L51 Why the Bubble Changes Everything: ICM in One Paragraph | Vì sao bubble thay đổi mọi thứ? ICM trong một đoạn | Q |
| 3 | L59 The 3 Bubbles You'll Face: Money vs Final-Table vs Satellite | 3 loại bubble bạn sẽ gặp: money bubble, bubble bàn chung kết và bubble vệ tinh | – |
| 4 | L73 How to Play a BIG Stack on the Bubble | Big stack chơi thế nào ở bubble? | Q |
| 5 | L85 How to Play a MEDIUM Stack on the Bubble | Medium stack chơi thế nào ở bubble? | Q |
| 6 | L99 How to Play a SHORT Stack on the Bubble | Short stack chơi thế nào ở bubble? | Q |
| 7 | L111 Bubble Factor & Risk Premium: The Number That Tells You When to Fold | Bubble factor và risk premium: con số nào bảo bạn khi nào nên fold? | Q |
| 8 | L135 Hand-for-Hand and Stalling: The Mechanics Nobody Explains | Hand-for-hand và câu giờ (stalling) hoạt động thế nào? | Q |
| 9 | L145 The Satellite Bubble: When to Fold Aces | Bubble vệ tinh: khi nào nên fold đôi Át? | Q |
| 10 | L157 The Biggest Bubble Mistake: Playing for the Min-Cash | Sai lầm lớn nhất ở bubble: chơi chỉ để min-cash | – |
| — | L170 FAQ · L210 The 3 Things to Remember · L220 Related Posts | ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan | 고정 |

- H2 1 본문에서 «out bubble» = **버블에서 탈락하다**(§1-B)를 첫 문단 안에 정의한다(EN 용어 불릿 «bubble boy» 설명에 «người này "out bubble"» 식으로 접는다 — 새 불릿 금지).

#### H3
| EN H3 | vi H3 |
|---|---|
| L27 The bubble in one glance | Tóm tắt nhanh về bubble |

#### FAQ (EN 9 · 🆕 1 = 10)
| # | EN Q (L##) | vi Q |
|---|---|---|
| 1 | L172 What does "on the bubble" mean in poker? | "On the bubble" trong poker nghĩa là gì? |
| 2 | L176 Who is the bubble boy in poker? | Bubble boy trong poker là ai? |
| 3 | L180 What is a stone bubble vs a soft bubble? | Stone bubble và soft bubble là gì? |
| 4 | L184 What does it mean to "pay the bubble" or burst the bubble? | "Pay the bubble" và "burst the bubble" nghĩa là gì? |
| 5 | L188 Should you fold on the bubble? | Có nên fold ở bubble không? |
| 6 | L192 Do short stacks feel the most bubble pressure? | Short stack có chịu áp lực bubble nhiều nhất không? |
| 7 | L196 What is the bubble factor in poker? | Bubble factor trong poker là gì? |
| 8 | L200 What is hand-for-hand play? | Hand-for-hand là gì? |
| 9 | L204 Why would you fold aces on a satellite bubble? | Vì sao lại fold đôi Át ở bubble vệ tinh? |
| 🆕 10 | — (out bubble (trong poker) là gì 10+10) | Out bubble trong poker là gì? — 답 = EN L44 bubble boy 정의(마지막 미지급 자리에서 탈락 = 상금 0) + «cách nói thông thường» 1문장. FAQ 2 다음에 둔다 |

#### 키워드 흡수
- bubble poker(10) · bubble poker là gì(AC) → seoTitle · tag · bubble trong poker là gì(10) → title · H2 1 · tag
- money bubble poker(10) → H2 3 · tag · out bubble là gì / out bubble trong poker là gì(10) → H2 1 괄호 · FAQ 🆕 10 · tag
- poker bubble factor(AC) → H2 7 · FAQ 7 · tag · stone bubble poker(AC) → FAQ 3 · tag · poker bubble boy(AC) → FAQ 2 · tag · bubble poker tournament(AC) → tag
- bubble time poker là gì(AC) → 쓰지 않는다(hand-for-hand와 동치 미확인) · 🔴 bubble là gì(1.000) · bubble protection → 어디에도 없음

### §13 자리 (카드 = 핸드 명칭만 · 수치 · 전건 재계산 ✅ 10-09)
- L19 «three players from the money» · «ace-jack»(A-J) 두 번 오픈폴드 · 14위 · min-cash
- L39·FAQ L174 top 27 지급 → 28명 남음
- L113 BF 1,0 · 1,5 · 1,5× · L115 산식 `c · BF ÷ (P + c · BF)` · `BF ÷ (1 + BF)` — 🔴 기호·변수명 축어
- L119~125 표: 1,0 → 50% · 1,3 → 57% · 1,5 → 60% · 1,7 → 63% · 2,0 → 67% (재계산 ✅ 56,5 · 60 · 63,0 · 66,7 반올림)
- L129 SB 10bb shove · call 9bb · pot 12bb · BF 1,5 → **52,9%** · no ICM → **42,9%** (재계산 ✅ 13,5/25,5 = 52,94 · 9/21 = 42,86)
- L131 4명 3지급 · BF ~3,0 · ~1,1 · ~1,9 · 6-handed final-table bubble 2,0+ · 1,5–1,7
- L139 2분 · WSOP Tournament Rule 126.a · 126.b · 126.c · TDA RP-8-A · RP-8-C · RP-8-D · L140 2분 · WSOP 126.a · 126.c
- L147·L149·FAQ L206 AA · KK · «pocket aces»(đôi Át)
- L150 WSOP Tournament Rule 80 · Rules 40, 113 and 114 · 인용문 «purposely depleting time banks to ladder up in the payout»(🔴 인용부호 안 **영어 원문 그대로** `"…"` + 바로 뒤에 베트남어 풀이 — 번역문을 원문처럼 인용하지 마라)
- FAQ L198 BF ÷ (1 + BF) · 60% · 10bb · 9bb · 12bb · 약 53% · 50%

### 경험담 자리 (EN 축어)
- **L19** The most disciplined I have ever played was three players from the money in a Friday tournament, everyone folding like the cards were on fire. I had a middle stack and open-folded ace-jack twice — hands I'd raise every time in a cash game. Two orbits later the short stack busted, I limped into the min-cash… and finished 14th for a payout barely above my buy-in. ==I "survived" my way out of any real money.== That's the bubble in one story: play it too scared and you lock up peanuts; play it right and it's where tournaments are actually won.
→ vi: «limped into the min-cash»는 액션 limp가 아니라 «겨우 기어 들어갔다»는 비유 — 베트남어 비유로(예: «tôi lết vào được min-cash») · 🔴 액션 «limp»로 오독되게 옮기지 마라. «Friday tournament» = «một giải tối thứ Sáu»까지만(장소 특정 금지). «Two orbits» = «hai vòng».

### 하지 말 것 (되돌리지 마라)
- L101·FAQ L194 «short stack bubble factor is lower than medium» — 방향 뒤집기 금지(D유형).
- L139 hand-for-hand 동시 탈락 규정: «같은 테이블 = 핸드 시작 시 칩이 적은 쪽이 낮은 순위 · 다른 테이블 = 공동 순위(126.b)·실무상 두 상금 분할 · 선언 순간 진행 중 핸드 = WSOP 126.c·TDA RP-8-A 공통 분할» — 🔴 조건 4개를 **하나도 빼거나 합치지 마라**.
- L140 «stalling은 핸드 수를 줄이지 못한다(각 핸드 2분 차감)» 논리 유지.
- L147·L151 새틀 예외(«winner-take-all 1석 = chip EV» · «내 자리가 여전히 보장될 때만 call»).
- FAQ L186 «pay the bubble»(위로금)과 «burst the bubble»(마지막 탈락 = «bubble vỡ») 구분 유지.
- L51 H2는 ICM 정의 H2가 되면 안 된다(§1-F) — 본문 분량은 EN 그대로 · 첫 ICM 등장에 holdem-icm 앵커(EN L23에 이미 있다).
- 「bubble = còn vài lần bị loại」(GG 혼용) 식으로 쓰지 마라 — EN L39 정의 «one more elimination».

---
## holdem-short-stack — EN updated 2026-09-24 · P5

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Play a Short Stack in Poker — Push/Fold Strategy by Stack Depth |
| seoTitle | How to Play a Short Stack in Poker (Push/Fold) |
| desc | Short-stacked in a tournament? Learn push/fold by stack depth — when to jam at 15, 10, and 5 big blinds, the M-ratio zones, and the ICM twist on the bubble. |
| tldr | A short stack (roughly under 20–25 big blinds) can't play normal postflop poker, and from about 15 big blinds down it switches to push/fold: move all-in first-in to keep your fold equity, and never open-limp or min-raise-then-fold. Shove wider from late position, keep your calling range tighter than your shoving range, and don't blind down to nothing 'waiting for a hand' — your fold equity is the weapon, and it fades hard below about 8 big blinds. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-24 · 13 min · 📉 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-short-stack-hero.webp · A short stack of tournament chips beside a large stack on green felt with a tournament clock behind — the moment a short-stacked player has to move all-in or fold |
| tags | short stack strategy · how to play a short stack · push fold strategy · push fold chart · M ratio poker · short stack poker · poker all in strategy · fold equity |

### 소유표 (계획 §3-C ⑨ · §3-A ⑦ · L-E §8-④)
- **주인인 검색어**: short stack poker 10(9/9 · 1위 mosesbet 베팅 제휴 · 베트남어 0) · short stack poker strategy 10 · stack trong poker là gì 10(정의 글 0) · short stack là gì 10 · AC «stack poker là gì» «avg stack trong poker là gì» «push fold là gì»(SERP = wikipoker·Natural8 차트 글) «short stack poker tournament strategy» «deep stack vs short stack poker».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «short stack» 390 단독(호주 밴드 · KG) · «stack poker»(앱 Stack Poker 7/15) · «push fold» 10 · «push fold chart» · «push or fold» · «all in or fold»(EN 태그 «push fold chart» → **버린다** · 도구 `/vi/calculator` Push/Fold «Bảng Nash» 몫) · «bảng …» · icm.
- 🔴 §3-C ⑨: 이 글 = **«push fold là gì» 정의 H2 + 도구 링크**. EN H2 2(L57)를 그 자리로 쓴다 + H2 2 마지막 단락 끝에 현지 추가 1문장 «Range push/fold theo stack và vị trí có sẵn trong [máy tính push/fold](/vi/calculator).»(진행 파일 «현지 추가» 기록 · EN 링크 3곳 L125·L141×2는 그대로 «máy tính ICM»).

### 구조 (EN L## · 축어 목록) — 표 2(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 + 3부작 링크 → `---`
```
L25 [H] ### Short-stack rules at a glance
L27 [DIR] :::stripe
L31 [DIR] :::
L35 [H] ## What Is a Short Stack in Poker? (And How Many Big Blinds)
L41 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L43 [표] | Stack | Mode of play | Your main weapon |
L57 [H] ## Why Short Stacks Play Push/Fold: Fold Equity Explained      ← vi «Push fold là gì» 정의 H2(§3-C ⑨)
L67 [IMG] ![A short chip stack pushed all-in …](/images/holdem-short-stack-shove.webp "Short-stack push/fold: …")
L69 [H] ## The M-Ratio (Harrington Zones): Green, Yellow, Orange, Red, Dead
L73 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L75 [표] | Zone | M-ratio | Roughly (no antes) | How to play |
L89 [H] ## When to Go All-In: First-In Shoving by Stack Depth and Position
L102 [H] ## Shoving vs. Calling a Shove: Two Different Ranges
L117 [H] ## How to Use a Push/Fold Chart (and Its Limits)
L131 [H] ## Short Stack on the Bubble: The ICM Twist
L145 [H] ## The 5 Short-Stack Mistakes That Kill Your Tournament
L157 [DIR] :::readnext[Keep reading]
L158 [CARD] /en/blog/holdem-bubble | How to Play the Bubble | /images/holdem-bubble-hero.webp
L159 [CARD] /en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp
L160 [DIR] :::
L162 [H] ## FAQ
L164 [Q] **Q. How many big blinds is a short stack?**
L168 [Q] **Q. What is push/fold strategy?**
L172 [Q] **Q. What does "all-in or fold" mean in poker?**   ← L174 운영사명 삭제(§1-H)
L176 [Q] **Q. How do you respond to an all-in shove?**
L180 [Q] **Q. Should you ever limp with a short stack?**
L184 [Q] **Q. Is min-raising ever right when short-stacked?**
L188 [Q] **Q. What is the M-ratio in poker?**
L192 [Q] **Q. What is fold equity and why does it shrink?**
L196 [Q] **Q. Is short-stack strategy different in cash games?**
L202 [H] ## The 3 Things to Remember
L212 [H] ## Related Posts
L214 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L215 [GRID] /en/blog/holdem-bubble
L220 [GRID] /en/blog/holdem-icm
L225 [GRID] /en/blog/holdem-when-to-fold
L230 [GRID] /en/calculator
```
- `:::stripe` 3행(L28~30): `shove first-in | keep your fold equity` / `call tighter | than you shove` / `~8bb | fold equity fades below here — act sooner` → 왼쪽 칸 «shove first-in» · «call chặt hơn» · «~8bb».
- 래퍼 표 L41~51(3열 · 5행: 25bb+ · 20bb · 15bb · 10bb · ≤5bb · 열 «Re-jam leverage» → «đòn re-shove» · «first-in jams» → «shove first-in») · 래퍼 표 L73~83(4열 · 5행 · 이모지 🟢🟡🟠⚠⚫ 축어 · 존 이름은 도구 라벨 §1-G ③) · L85 매핑 단락 · L89 불릿 4 · L102 불릿 2 · L111 가격 단락 · L117 불릿 3 · L127 이탤릭 괄호 단락 `*(…)*` · L131 불릿 3 · L145 번호 5.

### 링크
- L21 holdem-icm · holdem-bubble · holdem-tournament(전부 thumb) · L63 holdem-pot-odds · L111 holdem-when-to-fold · L123 holdem-bubble · L125 `/vi/calculator`(«máy tính ICM») · L133 holdem-bubble · L141 holdem-icm · `/vi/calculator` · L208 holdem-icm · holdem-bubble · 🆕 H2 2 끝 `/vi/calculator`(«máy tính push/fold» · §3-C ⑨)
- readnext L158~159: holdem-bubble(`/images/holdem-bubble-hero.webp`) · holdem-icm(`/images/holdem-icm-hero.webp`)
- 관련 글 그리드 L215~234: holdem-bubble(Tournament · How to Play the Bubble · Where your short-stack shoves matter most) · holdem-icm(Tournament · ICM Explained · Why survival can beat chips) · holdem-when-to-fold(Strategy · When to Fold in Poker · When the price says fold) · `/vi/calculator`(Free Tool · ICM Calculator · Compute your real shove/call spot → «Máy tính ICM»)

### 키워드·SERP 요지 (L-E §1·§3-0·§4-4·§4-6 ③④⑨⑩⑪·§7-5)
- «short stack» 390 = 밴드(0 포커 해설) → 결합형만. «short stack poker» 유기 = 영어·제휴 · «stack trong poker là gì» = FB 6 · reddit 3 · **정의 글 0**. «push fold là gì» = wikipoker(차트 10bb·15bb · «khoảng 15 big blinds (bb) trở xuống» · ICMIZER와 Chip EV) · Natural8 vi(Upswing 번역 · 「Conclusion」 미번역).
- 경쟁 결함(차별 재료 · 이름 없이): wikipoker «Short stack (≤40BB)»(캐시 바이인 기준)과 같은 사이트 «15BB trở xuống»이 충돌 · «Mẹo #4: Đừng shove all-in với quá nhiều big blinds» 아래 «all-in 25 big blinds … có thể là một lựa chọn tốt» 자기모순 · 레인지 미기재 에퀴티(«JTs … gần 40%»).
- **우리가 더 줄 것 3**: ① 스택 깊이별 5단 표 + M 5존(도구 라벨과 동일) + 캐시/토너 숏스택 정의 분리(EN FAQ L196이 받는다 — H2 승격은 하지 않는다 · EN 패리티) ② «shove 범위 ≠ call 범위» + BB 콜 가격 43,9% · 22 vs AKo 52,65% ③ 1인칭 «12bb에서 min-raise→fold 반복» 실수담.
- 차트 본체·«push or fold»·«all in or fold» = 도구 몫.

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (64) : Short stack poker là gì? Cách chơi khi còn 15, 10 và 5 big blind
- **seoTitle** (59) : Dưới 8 BB vũ khí của bạn biến mất — short stack poker là gì
- **desc** (136) : Còn ít chip trong giải đấu? Học push/fold theo độ sâu stack — khi nào all-in ở 15, 10 và 5 big blind, các vùng chỉ số M và ICM ở bubble.
- **tldr** (445) : Short stack (dưới khoảng 20–25 big blind) không thể chơi postflop bình thường, và từ khoảng 15 big blind trở xuống nó chuyển sang push/fold: all-in khi là người đầu tiên vào pot để giữ fold equity, không bao giờ open-limp hay min-raise rồi fold. Shove rộng hơn ở vị trí muộn, giữ range call chặt hơn range shove, và đừng để blind ăn dần stack về 0 trong lúc "chờ bài" — fold equity là vũ khí của bạn, và nó tan rất nhanh dưới khoảng 8 big blind.
- **tags** (8) : "short stack poker", "short stack poker strategy", "short stack poker tournament strategy", "stack trong poker là gì", "avg stack trong poker là gì", "deep stack vs short stack poker", "fold equity poker", "chỉ số m poker"
  (🔴 «short stack là gì»·«stack poker là gì» = 오염 헤드라 제외 · «push fold chart / push or fold / all in or fold / push fold» = 도구 몫이라 title·seoTitle·tags 0 · EN 태그 «push fold chart» 버림)

#### H2 (질문형 6/8 = 75%)
| # | EN H2 (L##) | vi H2 | 형 |
|---|---|---|---|
| 1 | L35 What Is a Short Stack in Poker? (And How Many Big Blinds) | Short stack trong poker là gì? Bao nhiêu big blind? | Q |
| 2 | L57 Why Short Stacks Play Push/Fold: Fold Equity Explained | Push fold là gì? Vì sao short stack phải chơi push/fold (fold equity) — §3-C ⑨ 정의 H2 + 끝에 «máy tính push/fold» 앵커 1문장(현지 추가) | Q |
| 3 | L69 The M-Ratio (Harrington Zones): Green, Yellow, Orange, Red, Dead | Chỉ số M của Harrington là gì? Vùng xanh, Vùng vàng, Vùng cam, Vùng đỏ, Vùng chết | Q |
| 4 | L89 When to Go All-In: First-In Shoving by Stack Depth and Position | Khi nào nên all-in? Shove first-in theo độ sâu stack và vị trí | Q |
| 5 | L102 Shoving vs. Calling a Shove: Two Different Ranges | Shove và call shove: vì sao là hai range khác nhau? | Q |
| 6 | L117 How to Use a Push/Fold Chart (and Its Limits) | Cách dùng bảng push/fold (và giới hạn của nó) | – |
| 7 | L131 Short Stack on the Bubble: The ICM Twist | Short stack ở bubble: ICM thay đổi gì? | Q |
| 8 | L145 The 5 Short-Stack Mistakes That Kill Your Tournament | 5 sai lầm của short stack giết chết giải đấu của bạn | – |
| — | L162 FAQ · L202 The 3 Things to Remember · L212 Related Posts | ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan | 고정 |

- H2 6의 «bảng push/fold»는 **H2 문구 일부**(계획 §3-C ⑨ 허용 · fr 선례) — tags·title·seoTitle엔 0회. Opus 조정 1: Fable H2 4 «Shove đầu tiên» → «Shove first-in»(§1-B 용어 정본).

#### H3
| EN H3 | vi H3 |
|---|---|
| L25 Short-stack rules at a glance | Tóm tắt nhanh: quy tắc short stack |

#### FAQ (EN 9 · 🆕 1 = 10)
| # | EN Q (L##) | vi Q |
|---|---|---|
| 1 | L164 How many big blinds is a short stack? | Short stack là bao nhiêu big blind? |
| 2 | L168 What is push/fold strategy? | Chiến thuật push/fold là gì và áp dụng từ bao nhiêu big blind? |
| 3 | L172 What does "all-in or fold" mean in poker? | "All-in or fold" trong poker nghĩa là gì? — 답 L174 운영사명 삭제(§1-H) |
| 4 | L176 How do you respond to an all-in shove? | Đối phó với một cú shove all-in thế nào? |
| 5 | L180 Should you ever limp with a short stack? | Short stack có bao giờ nên limp không? |
| 6 | L184 Is min-raising ever right when short-stacked? | Min-raise có bao giờ đúng khi short stack không? |
| 7 | L188 What is the M-ratio in poker? | Chỉ số M trong poker là gì? |
| 8 | L192 What is fold equity and why does it shrink? | Fold equity là gì và vì sao nó teo lại? |
| 9 | L196 Is short-stack strategy different in cash games? | Chiến thuật short stack trong cash game có khác không? |
| 🆕 10 | — (stack trong poker là gì 10 · stack poker là gì · avg stack(AC)) | Stack trong poker là gì? — 답 = «số chip bạn có trước mặt, đếm bằng big blind»(EN L37 «60 big blinds / 12 big blinds» 프레임) + stack hiệu dụng 1문장(§1-G ⑤) + avg stack 1구(«stack trung bình của bàn/giải»). 🔴 앱 «Stack Poker» 언급 금지 · 새 수치 0 |

#### 키워드 흡수
- short stack poker(10) → seoTitle · title · tag · H2 1 · short stack poker strategy(10) · short stack poker tournament strategy(AC) → tag · H2 4·5
- stack trong poker là gì(10) · stack poker là gì(AC) → FAQ 🆕 10 · tag · H2 1 본문(stack / stack hiệu dụng / avg stack) · avg stack trong poker là gì(AC) → tag · FAQ 10
- push fold là gì(AC) → H2 2(정의 · §3-C ⑨) · FAQ 2 · deep stack vs short stack poker(AC) → tag · H2 1 BB 구간 표
- fold equity · m ratio(볼륨 없음) → H2 2·3 · FAQ 7·8 · tags «chỉ số m poker»·«fold equity poker»
- all in or fold(도구 몫) → FAQ 3만 · push fold chart → H2 6 문구 + 본문 앵커만 · 🔴 short stack(390) 단독 → 어디에도 없음

### §13 자리 (핸드 2 · 수치 · 재계산 ✅ 10-09)
- L19 12-big-blind · 1.5 blinds/orbit → «một blind rưỡi mỗi vòng» · 4 big blinds · 두 명 콜
- L28~30 stripe ~8bb · L37 20–25 · 15 · 60 · 12 big blinds
- L45~49 표 25bb+ · 20bb · 15bb · 10bb · ≤5bb · L53 12-big-blind · 40-big-blind · ≤5bb
- L63 12–15 · 8–10 · 4–5 big blinds · L71 산식 `M = your stack ÷ (small blind + big blind + all antes per orbit)` 축어(단어만 번역 → `M = stack của bạn ÷ (small blind + big blind + toàn bộ ante mỗi vòng)`)
- L77~81 표: 20+ · ~30bb+ / 10 to under 20 · ~15–30bb / 6 to under 10 · ~9–15bb / 1 to under 6 · ~1.5–9bb → «~1,5–9bb» / under 1 · under ~1.5bb → «dưới ~1,5bb» (🔴 «to under» 경계를 «từ 10 đến dưới 20»처럼 살려라)
- L85 1.5 big blinds → «1,5 big blind» · M ≈ bb ÷ 1,5 · M 10 ≈ 15bb · M 5 ≈ 7–8bb
- L93~96 12–15bb · 10–15bb · ~6bb
- L111·FAQ L178 **10bb jam · 9bb risk · 20.5bb pot → «20,5bb» · 43.9% → «43,9%»**(재계산 9/20,5 = 43,90 ✅) · **22 vs AKo 52.65% → «52,65%»**(fr C에서 `lib/poker-eval.ts` 전수 52,649 ✓ — vi C도 대조)
- L127 10–15 big blinds · L150 ~8–10bb · L182 15 big blinds · FAQ L166 20–25 · 15 · 10 · ~15 · FAQ L190 20+ · 10 to under 20 · 6 to under 10 · 1 to under 6 · under 1 · ÷ 1,5 · FAQ L194 5 big blinds

### 경험담 자리 (EN 축어)
- **L19** The fastest I ever went from "still alive" to "out" was a night I kept min-raising a 12-big-blind stack, folding to the re-raise every time, and bleeding a blind and a half each orbit until I was too short to scare anyone. By the time I finally shoved, I had four big blinds and got called by two players. ==I didn't get unlucky — I played a short stack like it was a deep one.== Once your stack gets small, the entire game changes, and the players who know the new rules run the table.
→ vi: «re-raise» = «3-bet (re-raise)» 또는 «raise lại» 허용(§3-A ④) · 장소·대회 특정 금지.

### 하지 말 것 (되돌리지 마라)
- L111·FAQ L178 «small pairs and weak aces are the *core* of a BB calling range» · «The leak isn't the hand class» — 2026-09 EN 정정 문구. **«đôi nhỏ·Át yếu thì đừng call»로 되돌리지 마라**(D유형).
- L149 mistake 3 «in the big blind the dead small blind means a genuine flip already clears the chip-EV bar» — 축어 논리 유지.
- L174 «GGPoker's All-in or Fold» → 운영사명 삭제(§1-H) · 나머지 문장 유지.
- L96 «Under ~6bb … take the next reasonable spot» · L150 «commonly, before you drop under ~8–10bb» — 수치 범위 그대로.
- L37 «broadly under about 20–25 big blinds, with push/fold taking over from around 15» — 경쟁 «≤40BB» 캐시 기준으로 바꾸지 마라.
- FAQ L196(캐시 vs 토너 숏스택)은 EN 분량 그대로 — H2로 승격하지 않는다.

---
## holdem-tournament-vs-cash-game — EN updated 2026-09-13 · P3 · 🔴 기존 vi판 재작업(파일만 · import는 칸 안)

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Cash Game vs Tournament Poker |
| seoTitle | Your Chips Aren't Money — Cash Game vs Tournament Poker |
| desc | Cash game vs tournament poker — which fits you? Chip value, rising blinds, ICM, bankroll, which is harder and more profitable, and where beginners start. |
| tldr | In cash games, chips are real money and blinds stay fixed. In tournaments, chips are survival equity, blinds rise, and payouts depend on where you finish. |
| category · date · updated · readTime · emoji | tournament · 2026-06-11 · 2026-09-13 · 18 min · 🏆 · 🔴 `hideSummaryImageSlot: true`(keepImagesInBody **없음**) |
| image · imageAlt | /images/holdem-tournament-vs-cash-hero.webp · Side-by-side infographic comparing cash game and tournament poker — chip value, blind structure, and when you can leave |
| tags | cash game vs tournament poker · what is a cash game in poker · poker cash game rules · are cash games profitable · are cash games harder than tournaments · when to leave a cash game · poker bankroll management · ICM poker |

### 현 vi판(7월 · `lib/posts-vi/holdem-tournament-vs-cash-game.ts` · 270행) — 무엇을 버리나
- 메타: seoTitle «Chip không phải lúc nào cũng là tiền — Tournament hay Cash Game?» · title «Poker Tournament hay Cash Game: người mới nên chơi gì?» · desc «Cash Game và Tournament đều là Texas Hold'em, …» · readTime «16 phút» · updated 2026-06-11 · masterUpdated 없음 · tags에 «ICM poker»·«bubble poker».
- 구조: H2 10(EN 12) · FAQ 6(EN 10) · «## 3 điều cần nhớ» · 본문 이미지 3장(EN에 없는 경로) · 크림 박스 래퍼 0(EN 5) · «What Is a Cash Game in Poker?» H2 **없음** · 경험담 L28·L317 **없음** · `:::note` 없음 · readnext 없음.
- 표기: «Tournament» 61 · «Cash Game» 62 · «giải đấu» 6 → 🔴 전부 뒤집는다(giải đấu / cash game).
- → **EN 1:1 재집필**이다(기존 문장 재사용 금지 — 수치·표 값은 EN 축어). 살리는 것 = `slug`·`date: "2026-06-11"`·`image`·`emoji`·`category`·`hideSummaryImageSlot`.

### 소유표 (계획 §3-C ⑧ · §3-A ⑦)
- **주인인 검색어**: cash game poker 50(KG «Cash game» · 베트남어 1) · cash game là gì 10 · poker cash game là gì 10 · cash game vs tournament poker 10 · cash game vs tournament 10 · AC «cash game vs tournament poker strategy» · PAA(영어 SERP) «What is more profitable, cash or tournament poker?» · «What does a cash game mean in poker?».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «cash game» 40 단독(«cash games to earn money» 돈벌이 앱 → 반드시 «poker»/«giải đấu»와 짝) · «cash game poker online»(금지 축) · «ICM poker»(EN 태그 → **버린다** · holdem-icm 소유) · ICM 정의형 H2(L170은 «vì sao cash game không cần ICM» 축) · 세금·합법성 · «chip ≠ tiền» 훅(이번엔 icm이 가진다 — §1-I).

### 구조 (EN L## · 축어 목록) — 표 11(그중 5개 크림 박스 래퍼) · 본문 이미지 2 · 디렉티브 note 1 · FAQ 10
- L28 경험담 · L30~34 도입(L32 이탤릭 질문 `*"…"*` + `==…==`) · L36 링크 문단 → L38 H3 · 불릿 5(L40~44) → `---`
```
L38 [H] ### The 15-second answer
L48 [H] ## Cash Game vs Tournament Poker: The Core Difference
L60 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L62 [표] | Category | Cash Game | Tournament |
L77 [H] ## What Is a Cash Game in Poker? (Rules & How It Works)     ← 현 vi판에 없던 정의 H2 · 필수
L91 [DIR] :::note[This section covers the cash game essentials. We are expanding it into a full cash-game guide of its own — consider this the seed.]:::
L95 [H] ## Tournament Chips Are Not Money
L105 [표] | Finish | Prize |
L116 [IMG] ![Infographic: cash chips convert to money instantly …](/images/holdem-tournament-chips-not-money.webp "Tournament chip value and ICM in poker")
L120 [H] ## Fixed Blinds vs Rising Blinds
L128 [표] | Stage | Cash Game | Tournament |
L139 [H] ## Cash Game vs Tournament Strategy — What Actually Changes
L149 [H] ### Deep-Stack Poker vs Short-Stack Push/Fold
L155 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L157 [표] | Stack depth | More common in | Main skill |
L170 [H] ## ICM: The Tournament Concept Cash Games Do Not Have
L178 [표] | Decision factor | Cash Game | Tournament |
L187 [IMG] ![Infographic showing that doubling your tournament stack …](/images/holdem-tournament-icm-bubble.webp "Tournament bubble pressure and ICM decision-making")
L191 [H] ## Are Cash Games Harder Than Tournaments?
L199 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L201 [표] | Difficulty type | Cash Game | Tournament |
L214 [H] ## Are Cash Games More Profitable? bb/100 vs Tournament ROI
L222 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L224 [표] | Metric | Cash Game | Tournament |
L238 [H] ## Bankroll Management: Tournaments Need More Cushion
L246 [HTML] <div style="background:rgba(255,248,210,0.10);…"> (크림 박스 열기 · 줄 축어 복사)
L248 [표] | Format | Beginner bankroll guideline | Why |
L260 [H] ## When to Leave a Cash Game (and Why You Can't Leave a Tournament)
L273 [표] | Player situation | Better fit |
L285 [H] ## Which Should Beginners Play First?
L293 [표] | Goal | Better starting point |
L304 [H] ### Beginner Decision Framework
L308 [표] | Your situation | Start with |
L319 [H] ### Cash games may fit you better if:
L327 [H] ### Tournaments may fit you better if:
L339 [H] ## Live Poker Rooms: What Should You Ask First?
L345 [표] | Question | Why it matters |
L357 [DIR] :::readnext[Keep reading]
L358 [CARD] /en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
L359 [CARD] /en/blog/holdem-probability | Poker Odds & Probability Chart | /images/holdem-probability-hero.webp
L360 [DIR] :::
L362 [H] ## FAQ
L364 [Q] **Q. Are poker tournaments harder than cash games?**
L368 [Q] **Q. Are cash games profitable for beginners?**
L372 [Q] **Q. Should beginners start with cash games or tournaments?**
L376 [Q] **Q. Does ICM matter in cash games?**
L380 [Q] **Q. How many buy-ins do I need for cash games vs tournaments?**
L384 [Q] **Q. How many big blinds should you start with in a cash game vs a tournament?**
L388 [Q] **Q. How many chips do you need for a home cash game?**
L392 [Q] **Q. Do professional players play cash games or tournaments?**
L396 [Q] **Q. Is a re-entry tournament basically a cash game?**
L400 [Q] **Q. Do you get taxed on poker tournament winnings?**   ← 🔴 교체
L406 [H] ## The 3 Things to Remember
L416 [H] ## Related Posts
L418 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L419 [GRID] /en/blog/holdem-tournament
L424 [GRID] /en/blog/holdem-game-order
L429 [GRID] /en/blog/holdem-hand-rankings
L434 [GRID] /en/blog/holdem-blind-meaning
```
- 크림 박스 래퍼 = L60·L155·L199·L222·L246(나머지 표 L105·L128·L178·L273·L293·L308·L345는 **래퍼 없음** — EN 그대로).
- 표 구분선 형식이 표마다 다르다(`|------|` vs `|:---|:---:|`) — EN 줄 그대로 복사.
- L91 `:::note[…]:::` — 문장 전체가 디렉티브 인자다(한 줄 · 닫는 `:::` 같은 줄).
- 하이라이트(`==` · `==g:` · `==r:`)가 32줄에 있다(L32~L412) — 색 마커 종류·위치를 EN 줄 그대로.
- readnext 카드 제목 «Poker Odds & Probability Chart» → 🔴 vi 카드 제목에 «bảng/chart» 금지 → «Xác suất poker»(§1-D 임시 규칙).

### 링크
- L36 holdem-tournament(링크 텍스트 «how poker tournaments work — buy-ins, blind levels, and the Day-1 flow») · L43 holdem-icm(«ICM pressure» → «áp lực ICM») · L85 holdem-blind-meaning · L89 holdem-rake · L145 holdem-starting-hands-chart(앵커에 «bảng/chart» 금지 → «bài khởi đầu nên chơi») · L153 holdem-short-stack · L176 holdem-bubble · L185 holdem-icm · L302 holdem-game-order · holdem-hand-rankings · holdem-tournament(thumb `/images/holdem-tournament-hero.webp`)
- readnext L358~359: holdem-pot-odds(`/images/holdem-pot-odds-hero.webp`) · holdem-probability(`/images/holdem-probability-hero.webp`) — 🅲 제목은 §1-D 임시 규칙
- 관련 글 그리드 L419~438: holdem-tournament(Tournaments · How Poker Tournaments Work · Buy-ins, blind levels, formats, and a Day-1 checklist) · holdem-game-order(Game Flow · Texas Hold'em Order of Play · Preflop to showdown — the full hand flow step by step) · holdem-hand-rankings(Hand Rankings · Poker Hand Rankings — Best to Worst · All 10 hands with odds, examples, and board puzzles) · holdem-blind-meaning(Blinds · What Are the Blinds in Poker? · SB, BB, blind steal, and option — all explained)
- 편차 0 · `/vi/calculator` 링크 없음(EN에 없다 — 새로 만들지 마라).
- 🔴 현 vi판 L214의 game-order·hand-rankings 링크는 EN L302 자리와 같다 — EN 문장으로 다시 쓴다(+ tournament thumb 링크 추가 = EN 패리티).

### 키워드·SERP 요지 (L-E §1·§3-0·§4-5·§6-1·§7-3)
- «cash game poker» 50 = KG · 유기 9 = 영상 3 · reddit 2 · 영어 전략 1 · 칩 판매 1 → **정의 글 0** · «cash game là gì» 10 = Natural8 «Rush & Cash» 상품·비포커 앱 · «cash game vs tournament poker» 10 = 전부 영어. 베트남어 비교 글은 SERP에 **0**(exa로만: GG vi 2022 가이드 «Trò Chơi Tiền Mặt hay Giải Đấu» 직역 · choipoker 2026-09 «Cash game poker là gì?» 질문형 H2 5 · 수치 0 · ms8 도박 제휴 집계만 · wikipoker poker-tour 비교표 4).
- **우리가 더 줄 것 3**: ① 넓이 — 정의 H2 + ICM + bb/100 vs ROI + 뱅크롤 표 + 떠날 때 + 라이브 룸 질문표(경쟁 vi 글에 «떠날 때»·«라이브 룸» 0) ② 수치 정확성(뱅크롤 $200 → $4.000–$8.000 · 칩 세트 300 ÷ 8 등 EN 값) ③ 1인칭 첫 캐시 세션 vs 첫 대회.
- 현 vi판이 이미 이기는 점(유지): 질문형 FAQ · ICM H2 · 뱅크롤 H2 · live 룸 질문표 — 단 **EN 구조로 다시** 쓴다(정의 H2·래퍼·note·readnext·FAQ 4개 복원).
- 🔴 «… rentable/lời hơn» 류 수익성 질문 → EN H2 L214가 받는다(무출처 수치 추가 금지 — EN에 있는 «5 big blind trên 100 ván» 예시만).

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (70) : Cash game poker là gì? Cash game vs tournament: người mới nên chơi gì?
- **seoTitle** (59) : Cùng bộ bài, khác cuộc chơi — cash game vs tournament poker
- **desc** (145) : Cash game hay giải đấu hợp với bạn? So sánh giá trị chip, blind tăng dần, ICM, bankroll, bên nào khó hơn, lời hơn và người mới nên bắt đầu ở đâu.
- **tldr** (160) : Trong cash game, chip là tiền thật và blind cố định. Trong giải đấu, chip là cơ hội sống sót, blind tăng dần và tiền thưởng phụ thuộc vào thứ hạng bạn kết thúc.
- **tags** (8) : "cash game poker", "cash game là gì", "poker cash game là gì", "cash game vs tournament poker", "cash game vs tournament", "poker tournament hay cash game", "chiến thuật cash game", "quản lý bankroll poker"
  (구판 «ICM poker»·«bubble poker»·«giải đấu poker»·«poker tournament cho người mới» 제거 — 소유표 · EN 태그 «ICM poker» 버림)

#### H2 (질문형 10/12 = 83%)
| # | EN H2 (L##) | vi H2 | 형 |
|---|---|---|---|
| 1 | L48 Cash Game vs Tournament Poker: The Core Difference | Cash game vs tournament poker: khác biệt cốt lõi | – |
| 2 | L77 What Is a Cash Game in Poker? (Rules & How It Works) | Cash game poker là gì? (luật và cách hoạt động) | Q |
| 3 | L95 Tournament Chips Are Not Money | Vì sao chip trong giải đấu không phải là tiền? | Q |
| 4 | L120 Fixed Blinds vs Rising Blinds | Blind cố định hay blind tăng dần thay đổi điều gì? | Q |
| 5 | L139 Cash Game vs Tournament Strategy — What Actually Changes | Chiến thuật cash game vs giải đấu — điều gì thực sự thay đổi | – |
| 6 | L170 ICM: The Tournament Concept Cash Games Do Not Have | Vì sao giải đấu có ICM còn cash game thì không? | Q |
| 7 | L191 Are Cash Games Harder Than Tournaments? | Cash game có khó hơn giải đấu không? | Q |
| 8 | L214 Are Cash Games More Profitable? bb/100 vs Tournament ROI | Cash game hay giải đấu lời hơn? (bb/100 và ROI) | Q |
| 9 | L238 Bankroll Management: Tournaments Need More Cushion | Quản lý bankroll: vì sao giải đấu cần đệm dày hơn? | Q |
| 10 | L260 When to Leave a Cash Game (and Why You Can't Leave a Tournament) | Khi nào nên rời bàn cash game — và vì sao không thể rời giải đấu? | Q |
| 11 | L285 Which Should Beginners Play First? | Người mới nên chơi cash game hay giải đấu trước? | Q |
| 12 | L339 Live Poker Rooms: What Should You Ask First? | Lần đầu đến bàn poker live: nên hỏi gì trước? | Q |
| — | L362 FAQ · L406 The 3 Things to Remember · L416 Related Posts | ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan | 고정 |

#### H3
| EN H3 | vi H3 |
|---|---|
| L38 The 15-second answer | Trả lời trong 15 giây (🔴 «Trả lời nhanh» 라벨과 다르다 — 블록이 아니라 H3) |
| L149 Deep-Stack Poker vs Short-Stack Push/Fold | Deepstack vs push/fold của short stack |
| L304 Beginner Decision Framework | Khung quyết định cho người mới |
| L319 Cash games may fit you better if: | Cash game có thể hợp với bạn hơn nếu: |
| L327 Tournaments may fit you better if: | Giải đấu có thể hợp với bạn hơn nếu: |

#### FAQ (EN 10 · 교체 1)
| # | EN Q (L##) | vi Q |
|---|---|---|
| 1 | L364 Are poker tournaments harder than cash games? | Giải đấu poker có khó hơn cash game không? |
| 2 | L368 Are cash games profitable for beginners? | Cash game có lời cho người mới không? |
| 3 | L372 Should beginners start with cash games or tournaments? | Người mới nên bắt đầu với cash game hay giải đấu? |
| 4 | L376 Does ICM matter in cash games? | ICM có quan trọng trong cash game không? |
| 5 | L380 How many buy-ins do I need for cash games vs tournaments? | Cần bao nhiêu buy-in cho cash game so với giải đấu? |
| 6 | L384 How many big blinds should you start with in a cash game vs a tournament? | Nên bắt đầu với bao nhiêu big blind ở cash game và ở giải đấu? |
| 7 | L388 How many chips do you need for a home cash game? | Chơi cash game ở nhà với bạn bè cần bao nhiêu chip? |
| 8 | L392 Do professional players play cash games or tournaments? | Người chơi chuyên nghiệp chơi cash game hay giải đấu? |
| 9 | L396 Is a re-entry tournament basically a cash game? | Giải đấu re-entry có giống cash game không? |
| 10 | L400 Do you get taxed on poker tournament winnings? → 🔴 **교체** | Có thể rời bàn cash game bất cứ lúc nào không? — 답 = EN 본문 L262~271 사실만(규칙상 언제든 · 토너먼트는 칩이 남아 blind를 낸다 · ratholing 금지 · 곧 같은 게임에 돌아오면 떠날 때 금액 이상으로 재바이인 · 큰 pot 직후 떠나도 규칙 위반 아님). 세금·법 문장 0 |

#### 키워드 흡수
- cash game poker(50) → title · tag · H2 2 · cash game là gì(10) · poker cash game là gì(10) · PAA «What does a cash game mean» → H2 2 · tags
- cash game vs tournament poker(10) · cash game vs tournament(10) → seoTitle · title · H2 1 · tags · PAA «more profitable, cash or tournament» → H2 8 · FAQ 2
- poker tournament hay cash game(구판 태그) → tag 유지 · H2 11 · chiến thuật cash game → tag · H2 5 · quản lý bankroll poker → tag · H2 9
- 🔴 cash game 단독(40) · cash game poker online → 어디에도 없음(항상 poker/giải đấu와 짝) · «chip ≠ tiền» 훅은 icm 몫

### §13 자리 (카드 = AKo 1 · 수치 · 재계산 ✅ 10-09)
- L28 4시간 · L54 $200 · $450 · L56 $100 buy-in · 20.000칩 · $20.000 · L58 $1/$2 · $60 river bet · $50 tournament · 18 big blind
- L81 $1/$2 · $40 ~ $300 · L85 $1/$2 · L103 10명 × $100 = $1.000 pool · 표 L105~110 $500 / $300 / $200 / 4th-10th $0(합 1.000 ✅) · L112 10% → 20%
- L124 $1/$2 · L126 100 → 25 → 12 big blind · L151 100 big blind · L153 25 · 15 · 10 big blind
- 표 L157~162 100BB+ · 40-60BB · 15-25BB · 10BB or less · L176 AKo
- L216 5 big blinds per 100 hands → «5 big blind trên 100 ván»(🔴 «100 hand» = «100 ván» — ván bài 규칙 §3-A ④) · L218 20 or 30 events
- L242 20-40 buy-ins · $200 → $4.000-$8.000(✅) · L244 100+ · $50 vs $200 · 표 L250~252 20-40 · 40-60 · 100+
- L262 30 minutes · two hours
- FAQ L382 20-40 · 100+ · 40-60 · FAQ L386 $1/$2 → $200–$300 = 100–150 big blind(✅) · 20-40 · 100-300 big blind · 20 · 10 · FAQ L390 300-chip set · 6 players · 7-8 · 300 ÷ 8 = under 40(37,5 ✅) · 3-4 denominations · 500-chip set · 7-8 players

### 경험담 자리 (EN 축어)
- **L28** I still remember racking up after my first live cash session — those chips were money I could literally walk to the cage and pocket. My first tournament ended very differently: four hours of careful play, one lost flip, and a stack of chips that turned into exactly nothing on the way out. That gap is what this whole article is about.
- **L317** My default advice for a serious beginner is simple: play low-stakes cash games for repetition, then add small tournaments for experience. Cash games reveal leaks faster. Tournaments teach pressure, patience, and emotional control. Together, they build a more complete player.
→ vi: «the cage» = «quầy đổi chip» · 장소 특정 금지. L28의 «four hours»는 tournament L31(«Four hours later I was out»)과 같은 첫 대회 — 두 글의 숫자가 어긋나지 않게 그대로. §1-G ① «đánh tour» 고정문은 이 글 L36 링크 문단 또는 H2 1 직답에 1회.

### 하지 말 것 (되돌리지 마라)
- L91 `:::note[…]:::` «We are expanding it into a full cash-game guide of its own — consider this the seed.» — EN 약속문. **그대로 옮긴다**(EN 패리티).
- FAQ L386 «— with two conditions. Your bankroll has to carry it … buying in shorter is a legitimate choice, not a beginner mistake» — EN 정정 뉘앙스 축어(«항상 최대 바이인»으로 줄이지 마라 · D유형).
- FAQ L390 칩 세트 산수(300 ÷ 8 = under 40) 축어 · «in a cash game you shouldn't [deal out everything]» 논리 유지 · «home cash game» = «cash game tại nhà với bạn bè»(개최·합법성 문장 0).
- FAQ L400 세금 → 확정 카피의 교체 문항(답 = EN 본문 L262~271 사실만 · 베트남 세법 언급 금지).
- L176 «a call that prints money in a cash game can be a clear fold under ICM» — 조건부 문장(«can be») 유지.
- L174 ICM 정의 2문장은 그대로 두되 H2를 정의형으로 바꾸지 마라(§1-F) · 첫 ICM 등장(L43)에 holdem-icm 앵커 — EN에 이미 있다.
- 수익성 H2(L214~234): EN에 없는 ROI·bb/100 수치·SERP 수치를 보태지 마라.
- 현 vi판 문장(«chip là mạng sống của bạn trong giải» · «lớp học đầu tiên sạch hơn» 등)을 기억으로 재사용하지 마라 — EN 축어에서 다시 쓴다(겹쳐도 상관없다).
