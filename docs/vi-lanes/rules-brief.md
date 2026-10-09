# vi-rules 브리프 — 🅰 규칙 6편 (기존 7월판 → EN 현행 재작성)

> 레인 A 산출물(2026-10-09). **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 골격 복사용)뿐.** 웹·MCP·다른 로케일 파일은 B에서 열지 않는다.
> 정본 = `docs/vi-cluster-plan.md` §3-A(고정문·용어) · §3-C(소유표) · §5(fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §5. 이 파일과 §3-A가 어긋나면 §3-A가 이긴다.
> EN 기준 해시 `b57cb658` — 6편 모두 이후 변경 0(`git diff --stat b57cb658..HEAD -- lib/posts-en/<6편>` = 빈 출력 · 10-09 14:05 확인). EN L##은 이 해시의 줄 번호다.
> SERP 근거 = `docs/keyword-bank/vi-serp/L-A-rules.md`(이하 «L-A») · 볼륨 = `vi-core-volumes.md`(0-1) + L-A §10-1(새 후보 45) · 오염 판정 = `vi-core-volumes.md` §4.
> 🔴 **«확정 카피» 칸(title·seoTitle·desc·tldr·tags·H2 세트·FAQ 문항)은 B·C가 바꾸지 않는다**(계획 §2-⑥). 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 6편 공통 — B가 매 편 지키는 것

### 0-1. 작업 방식 = 재작성(새로 쓰기)
- 기존 `lib/posts-vi/<slug>.ts`(7월판)는 **덮어쓴다.** 구조 골격은 **EN 현행 1:1**(H2/H3 · 표 행 · 리스트 · 이미지 · 디렉티브 `:::stripe`·`:::readnext` · `<div>` 카드 · 하이라이트 `==r:`/`==g:`/`==…==` 위치 · `<a>`·`<br/>` 원시 HTML 줄). 7월판 문장은 «괜찮은 표현이 있으면 가져와도 되는 참고»일 뿐이다 — 단 §3-A와 다른 표기(**Theo/Tố/Bỏ bài** 산문 · **mù / mù nhỏ / mù lớn** 단독 · **Sảnh Thượng** · **bánh xe** · **người chủ động cuối** · **nước cược** · **Check-tố** · **tố lại** · 대문자 «Flop/Turn/River» 문중 · «pre-flop» · «## FAQ» · «Chốt lại» · «3 Điều Cần Nhớ» · 제목 단어마다 대문자)는 가져오지 않는다.
- 필드: `slug`·`category`·`date`·`image`·`keepImagesInBody`·`emoji`는 **현 vi 파일 값 유지**(= EN과 같다). `updated` = 집필일 · `masterUpdated` = 아래 각 절의 «EN updated»(기준 해시 시점 EN `updated` · 헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤) · `readTime` = EN 값 그대로(«N phút»). `imageAlt` = EN alt를 베트남어로(카드는 축어).
- 🔴 히어로 이미지는 content에 넣지 않는다(렌더러가 그린다). 본문 이미지(`![…](/images/…)`)는 EN 경로 그대로, alt·title만 베트남어.
- `index.ts`는 건드리지 않는다(6편 모두 등록돼 있다 · 🅰는 칸 없음).

### 0-2. 고정문 (계획 §3-A ① 축어)
| 자리 | 정본 |
|---|---|
| 직답 블록 | `> **Trả lời nhanh**` (EN «Quick answer» 자리 — blind-meaning L25만 · 각 H2 직후 40~75단어 직답은 일반 단락으로) |
| EN «Quick summary» · «The core numbers» · «How to play … in 30 seconds» · «One hand in 15 seconds» 류 H3 | 같은 자리 H3를 베트남어로 — 확정 카피(§6′)의 문구 |
| 라벨 «Note» · «The golden rule» | `> **Lưu ý:**` · `> **Quy tắc vàng:**` (직답 라벨 아님) |
| readnext | `:::readnext[Đọc tiếp]` · 카드 줄 = `/vi/blog/<slug> \| <베트남어 카드 제목> \| <EN 이미지 경로>` |
| FAQ | `## Câu hỏi thường gặp` · 문항 = `**Q. …**` + 빈 줄 + `A. …` (스키마 조건 · «## FAQ» 금지) |
| 관련 글 | `## Bài viết liên quan` · `<div>` 카드 그리드 EN 축어 · href `/vi/blog/…` · 카드 안 3줄(라벨·제목·설명) 베트남어 — 라벨 사전 §0-5 |
| 마무리 H2 | `## Những điều cần nhớ` (EN «Final Takeaway» · «The 3 Things to Remember» · «The Takeaways» 자리 · 개수는 라벨에 넣지 않는다) |

### 0-3. 문체·조판 (§3-A ②)
- 화자 **tôi** · 독자 **bạn** · 존칭·anh/chị 금지 · 명령형 훅(«Hãy nhìn… / So sánh… / Thử…») · 딱딱한 직역 금지.
- 숫자 = **베트남식**: 천 단위 **마침표**(`1.326` · `12.000` · `198.000` · `1.300`) · 소수 **쉼표**(`2,5 BB` · `43,8%` · `$0,01`) · **% 붙여 씀**(`19%` · `43,8%` — 공백 없음) · 비율 `6:1` · `2,7:1` · 화폐 **`$` 앞붙임**(`$1/$2` · `$10` · `$2.000`) — ₫로 바꾸지 않는다. 🔴 §13 **값**은 EN 축어, **구분자만** 바꾼다.
- 카드 = 영어 랭크 + 무늬 기호(`A♠ K♥ Q♦ J♣ 10♠`) · 보드·무늬 붙은 카드는 **10**, 핸드 클래스 이름은 **T**(`JTs` · `TT`) · 풀어 쓸 때 «đôi Át» · «lá K» («già/đầm/bồi» 금지) · 무늬 = chuồn · rô · cơ · bích.
- `Texas Hold'em` 곧은 아포스트로피 · «Hold'em» 단독 허용 · «Holdem» 금지 · **preflop · postflop** 붙여 씀 · 문중 **flop · turn · river 소문자** · 족보명 문중 소문자(«một đôi» · «thùng») — 표·H2·카드 라벨에서만 머리글자 대문자.
- 🔴 백틱 금지 · 굵은 단락 안 `**` 중첩 금지 · tldr 평문(마크다운 0) · 성조 부호 누락 = §13급 오류.

### 0-4. 용어 (§3-A ③④에서 이 6편에 나오는 것만 — 첫 등장 병기는 **글마다** 한 번)
| EN | 본문 정본 | 첫 등장 병기 · 비고 |
|---|---|---|
| check | **check** | 풀이 없음(«kiểm tra» 금지) |
| bet | **bet** · 동사 «cược / đặt cược» 허용 · 명사 «mức cược» | — |
| call | **call** · 동사 «theo / theo bài» 허용(목적어·조건절 있는 문장) | «call (theo)» |
| raise / re-raise | **raise** · **3-bet · 4-bet** | «raise (tố)» · «3-bet (re-raise, tố lại)» · 🔴 산문 «tố» 금지 — 라이브 구두 선언 인용 «hô "tố"» 1회만 허용 |
| min-raise · full raise | **min-raise** · **raise đủ mức (full raise)** | «min-raise (mức raise tối thiểu)» · full raise는 신규 용어 표에 등재 |
| fold | **fold** · 동사 «bỏ bài» 허용 | «fold (bỏ bài)» |
| all-in | **all-in**(하이픈) | «(tất tay)» 1회 · 구어 push/shove/jam 영어 |
| blind | **blind** | «blind (mù — cược bắt buộc)» · 이후 «mù» 단독 금지 |
| small blind / big blind | **small blind (SB) · big blind (BB)** · 이후 SB·BB 허용 | «small blind (mù nhỏ)» · «big blind (mù lớn)» |
| ante · big blind ante | **ante · big blind ante** | «ante (cược bắt buộc chung)» 1회 허용 |
| straddle | **straddle** | «straddle (blind tự nguyện)» 1회 · 상세는 holdem-straddle 앵커 |
| dealer button / dealer | **nút dealer (BTN)** · 사람 = **dealer** | «dealer (người chia bài)» · «nút Dealer» 대문자 금지 |
| UTG · HJ · CO · BTN · SB · BB | 약어 그대로 | 첫 등장 풀어 쓰기 «Under the Gun (UTG)» · «Cutoff (CO)» |
| position | **vị trí** · in position (IP) / out of position (OOP) | «có vị trí / không có vị trí» 1회 |
| preflop · flop · turn · river · street | **preflop · flop · turn · river · postflop** · 베팅 라운드 = **vòng cược** | 🔴 «sảnh»(족보) ≠ «vòng»(스트리트) · «street»를 베트남어로 옮기지 않고 «vòng cược»로 |
| board / community cards · hole cards | **bài chung** · 이후 «board» 허용 · **bài tẩy** | «bài chung (board)» |
| hand · one hand(판) | 패·조합 = **tay bài** · 한 판 = **ván bài** | «100 hand» = «100 ván» · 일괄 치환 금지 |
| pot · main pot · side pot · uncalled bet | **pot · main pot · side pot** · «cược không ai theo (uncalled bet)» | «side pot (pot phụ)» · «main pot (pot chính)» · «hũ» 금지 |
| split pot · chop | **chia pot (split pot)** · «chop» 1회 | — |
| showdown · muck | **showdown** · 동사 «lật bài» 허용 · **muck** | «showdown (lật bài)» · «muck (úp bài bỏ)» |
| last aggressor | **người bet hoặc raise cuối cùng (last aggressor)** + «ở vòng cược cuối» | 🔴 «người chủ động cuối»·«người cược cuối cùng» 금지(콜한 사람까지로 오독) |
| cards speak · slow roll · tank · string bet · table stakes · run it twice · show one show all | 영어 그대로 + 첫 등장 짧은 풀이 | «"cards speak" (bài tự nói)» · «slow roll (cố tình lật bài chậm)» · «tank (suy nghĩ lâu)» · «string bet (đẩy chip nhiều nhịp)» · «table stakes (chỉ được cược số chip trên bàn)» · «run it twice (chia phần bài còn lại hai lần)» |
| stack · chip · buy-in · effective stack | **stack · chip · buy-in** · **stack hiệu dụng (effective stack)** | «chip (phỉnh)» 1회(beginners만) · «chồng chip» 금지 |
| tournament · cash game | **giải đấu** · **cash game**(소문자) | «giải đấu (tournament)» · 구어 «đánh tour» 1~2회 허용 |
| tournament director · floor | **giám đốc giải đấu (tournament director, TD)** · **floor (người quản lý sàn)** | 신규 용어 표에 등재 |
| kicker · nuts · set · trips | **kicker** · **nuts** · **set · trips** 영어 | «kicker (lá phụ)» · «nuts (tay bài mạnh nhất có thể trên board này)» · set/trips 정의 «set = cầm đôi trên tay + 1 lá trên board · trips = 1 lá trên tay + board có đôi» |
| draw · flush draw · outs · pot odds · rule of 2 and 4 | **draw · flush draw · outs · pot odds** · **quy tắc 4 và 2** | «draw (bài chờ)» · «flush draw (chờ thùng)» · «pot odds (tỷ lệ pot)» + 계산 정의 1문장 «pot : số tiền phải call» · «cửa chờ» 폐기 |
| Royal Flush … High Card(족보 표가 있는 편: beginners · game-order) | **thùng phá sảnh hoàng gia · thùng phá sảnh · tứ quý · cù lũ · thùng · sảnh · sám cô · hai đôi · một đôi · mậu thầu** | 첫 등장 «vi (en)» 병기: «thùng phá sảnh hoàng gia (royal flush)» · «sám cô (bộ ba, three of a kind)» · «mậu thầu (bài cao, high card)» · 🔴 «Sảnh Thượng»·«sảnh rồng» 헤드 금지(별칭 1회 «(còn gọi là sảnh rồng, sảnh chúa — 10-J-Q-K-A cùng chất)» 허용) · «Xám» 폐기 |
| wheel · small straight | **sảnh thấp nhất A-2-3-4-5 (the wheel)** · 이후 «wheel» | 🔴 «bánh xe» 금지 · «Sảnh nhỏ» FAQ 질문형은 검색 표기로만 |
| Big Slick · pocket aces | «Big Slick» 영어 유지 · «đôi Át (pocket aces)» | — |
| limp · check-raise · c-bet · bluff | **limp · check-raise · c-bet · bluff** | «check-raise» 정의 1문장까지만(low-board-check-raise 소유) · «hồi mã thương» 금지 |

새 용어가 필요하면 진행 파일 «신규 용어» 표에 `EN | 채택 vi | 근거`로.

### 0-5. 도구·카드 라벨 (§3-A ⑤⑥ 축어)
| EN 링크 | vi 링크 · 앵커 |
|---|---|
| `/en/calculator` | `/vi/calculator` · «máy tính xác suất poker» (기능별 «máy tính equity / outs / pot odds») |
| `/en/hand-chart` | `/vi/hand-chart` · «bảng bài khởi đầu theo vị trí» |
| (EN에 없음 · 추가 허용 1회) | `/vi/glossary` · «thuật ngữ poker» — 배포 회차에 신설 예정, 링크 건다(계획 §1) |
| `/downloads/texas-holdem-rules-for-beginners.pdf` | vi PDF 없음(`public/downloads/`에 de·id·ja·ko·pt·zh만) → EN PDF 유지 + 앵커에 «(PDF tiếng Anh)» |

카드 라벨 사전(Related `<div>` 1행): Pillar → **Kiến thức nền tảng** · Beginner Guide → **Hướng dẫn người mới** · Game Flow → **Trình tự ván bài** · Order of Play → **Thứ tự hành động** · Blinds → **Blind** · Positions → **Vị trí** · Tournaments → **Giải đấu** · Hand Rankings → **Thứ hạng tay bài** · Betting → **Hành động cược** · Showdown → **Showdown** · All-In → **All-in** · Split Pot → **Chia pot** · Tiebreaker → **So bài cùng hạng**. 카드 2행(제목)은 EN 제목의 베트남어 — 도구 의도 구(«máy tính» · «bảng bài khởi đầu» · «hand chart» · «lịch giải» · «solver») 금지(§3-A ⑤ 역방향).

### 0-6. 소유표 공통 (§3-C · §3-A ⑦)
- 이 6편의 **seoTitle · title(H1) · tags**에 쓰면 안 되는 헤드: **thuật ngữ**(`/vi/glossary`) · **bảng / chart / hand chart / range**(`/vi/hand-chart`) · **máy tính / tính / app / phần mềm / calculator**(`/vi/calculator`) · **solver / GTO** · **thứ tự bài poker · xếp hạng bài**(hand-rankings) · **vị trí trong poker**(positions) · **khi nào nên fold / bỏ bài**(when-to-fold) · **bài khởi đầu**(starting-hands-chart) · **nuts**(reading-the-board) · **ICM · push fold**(holdem-icm · 계산기) · **straddle**(holdem-straddle) · **limp**(holdem-limping) · **check raise**(low-board-check-raise) · **3bet / cbet / 4bet**(🅳 · 오염) · **lịch giải / giải poker**(`/vi/tournaments`).
- 🔴 **오염 헤드 = 단독 «X là gì» 전부 어디에도 조준하지 않는다**(§3-A ⑦ · `vi-core-volumes.md` §4): all in là gì 5.400 · check là gì 3.600 · call là gì 2.900 · raise là gì 1.900 · fold là gì 880 · turn là gì 880 · river là gì 720 · flop là gì 6.600 · blind là gì 720 · ante là gì 50 · muck là gì 70 · under the gun 170 · dealer poker là gì 170 · phỉnh poker là gì 40 · luật chơi poker là gì(합법성 혼입). **조준어는 «X trong poker là gì» / «X poker (là gì)» 결합형.** 🟡 «showdown là gì» 390(섞임)만 tags까지 허용.
- 본문 앵커 문구로는 쓸 수 있다(예: «bài khởi đầu nên chơi theo vị trí» → starting-hands-chart).
- 합법성 축 열지 않음(베트남 도박법·카지노 출입·«hợp pháp» 언급 금지) · 실머니·사이트·앱 추천 없음(poker online · pokerist · w88 · game bài 금지) · 외부 출처 인용은 규정(TDA·WSOP) 축어만. 외부 사이트를 «틀렸다»고 지목하지 않는다(«Nhiều nơi viết rằng…» → 정확한 규칙).
- 다른 게임(poker 5 lá · 4 lá · 3 lá · xì tố · mậu binh · tiến lên · omaha)은 **범위 밖**임을 밝히는 자리에만 이름을 쓴다(§2-⑪ · beginners 현지 추가 1). 족보 용어(sảnh rồng 등)를 들여오지 않는다.

### 0-7. 링크 대상 (계획 §1 · ms §0-A)
EN 6편의 내부링크 대상은 **전부 51편 + 도구 안**이다(점검 10-09: blind-meaning · reading-the-board · hand-rankings · flush-vs-straight · game-order · tournament-vs-cash-game · positions · betting-actions · starting-hands-chart · tiebreak-rules · split-pot-rules · showdown-rules · when-to-fold · strategy · all-in-rules · limping · pot-odds · position-play · tournament · straddle · texas-holdem-rules-for-beginners · `/en/calculator` · `/en/hand-chart`). → **EN 1:1로 `/vi/…`에 건다**(아직 안 쓰인 글도 건다 — 배포는 51편 머지 뒤 1회 · prebuild `check:intl-links`는 그때까지 실패가 정상 → B는 `npx next build` 단독으로 컴파일 확인). 링크 편차 0이 목표.
- 예외 2건: ① beginners L326 PDF(§0-5) ② game-order L343 `https://en.wikipedia.org/wiki/Texas_hold_%27em` — vi 위키 대응 페이지 확인 안 됨(vi.wikipedia는 «Xì tố» 문서 — 다른 게임 이름) → EN 링크 유지 + «(tiếng Anh)». 둘 다 진행 파일 «링크 편차».
- `"thumb:…"` 링크 제목은 EN 축어로 옮긴다(경로 그대로).

### 0-8. 현지 추가 규칙
- «현지 추가»(EN에 없는 H2/H3/FAQ)는 **아래 각 절에 문구·사실·출처가 적힌 것만**. 새 사실·수치 금지 — 수치는 EN 값 또는 아래에 적힌 출처 축어만. 하노이·호찌민 클럽·대회·금액 일화 창작 금지(경험담은 EN에 있는 것만 현지 독자 맥락으로).
- 🔴 vi 고정문(§3-A ②) — beginners에서만 1회: «Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold'em, mỗi người nhận hai lá bài tẩy.»
- H2 직후 40~75단어 직답은 EN 첫 단락과 겹치지 않게(fr C 교열에서 가장 많이 걸린 결함).

---

## 1. texas-holdem-rules-for-beginners — EN updated 2026-10-04 (필라 · 우선 1 · 정확성 P0)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em for Beginners — Rules, Chips, Hands, and First Strategy
- seoTitle: How to Play Texas Hold'em for Beginners — Rules & Cheat Sheet
- desc: Never played before? How to play Texas Hold'em step by step — blinds, chip setup, hand rankings, and a printable cheat sheet even dummies can follow.
- tldr: Texas Hold'em gives each player 2 hole cards and 5 shared community cards. There are up to four betting rounds, and the best 5-card poker hand wins at showdown — unless everyone else folds first.
- tags(EN): texas holdem rules for beginners · how to play texas holdem for beginners · texas holdem basic rules · who goes first in texas holdem · texas holdem cheat sheet · poker chips for beginners · how many players in texas holdem · no limit texas holdem
- category rules · readTime 14 min → «14 phút» · image `/images/rules-texas-holdem.webp` · imageAlt L16 → 베트남어 · date 2026-06-11
- 현 vi: seoTitle «Cách chơi Texas Hold'em cho người mới — luật, chip & bảng tóm tắt» · masterUpdated 2026-07-12 · updated 2026-10-04 · 🔴 desc·FAQ의 «mù» · H3 «Sảnh nhỏ» · «bánh xe» · «Xám» · «Sảnh Thượng» 2 · 마무리 «Chốt lại» → 전부 교체 대상(L-A §6-A)

### 구조 (EN L##)
- 도입 L28~34(경험 L34) · H3 «How to play Texas Hold'em in 30 seconds» L36(번호 7 + Key facts 3)
- H2: L53 Basic Rules(`<div>` 표 L61~71 · 7장 예시 표 L77~81) → L87 Beginner Flow Summary(표 L91~98 · 이미지 L102) → L108 How Many Players(표 L112~116) → L126 Who Goes First(표 L130~135) → L145 What Chips(표 L151~155 · `<div>` 표 L159~168) → L174 How Much Money(표 L182~186) → L196 No-Limit/Limit/Pot-Limit(표 L200~204) → L210 How to Deal(번호 10 L216~225 · 이미지 L229) → L235 Position(표 L239~246) → L252 Strategy for Beginners(`<div>` 표 L258~268 · `<div>` 4티어 표 L272~285) → L291 Pot Odds(H3 L295 · H3 L301 · `<div>` 표 L305~312 · ⚠ L314) → L322 Printable Cheat Sheet(PDF L326 · 표 L328~339 · 족보 표 L343~354) → L360 Common Beginner Mistakes(H3 ×5 L364~380) → readnext L386(game-order · hand-rankings) → FAQ L391(12문) → L443 Final Takeaway → L453 Related Posts(카드 6: game-order · hand-rankings · positions · betting-actions · showdown-rules · all-in-rules)
- FAQ 12: step by step · who goes first · what chips · how much money · small straight · how many starting hands · dummies simplest · dummies blinds · quick version · how many players · no-limit · how long one hand
- 표 개수(16) · 이미지 2(L102 · L229) · 디렉티브(readnext 1) · 하이라이트 위치 = EN 그대로.

### 링크
EN 대상(L57 blind-meaning · L73 reading-the-board · L83 hand-rankings·flush-vs-straight · L89·L104 game-order · L122·L190 tournament-vs-cash-game · L141·L248 positions · L206·L287 betting-actions · L287 starting-hands-chart · L356 tiebreak-rules·split-pot-rules · L449 hand-rankings·`/en/hand-chart`·`/en/calculator` · readnext game-order·hand-rankings · Related 6) → 전부 `/vi/` 1:1.
- 앵커 지정: L287 starting-hands-chart → «bài khởi đầu nên chơi theo vị trí»(«bảng» 금지 — 그건 도구 앵커) · L449 `/vi/hand-chart` → «bảng bài khởi đầu theo vị trí» · `/vi/calculator` → «máy tính xác suất poker» · L83 flush-vs-straight → «thùng và sảnh cái nào lớn hơn»(AC 축어).
- 편차: PDF L326(§0-5).

### 키워드 (0-1 · L-A §10-1 · DFS 2704/vi · 2026-10-08)
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| luật poker | 3.600 | 🔴 seoTitle 앞쪽 · title · H2 1 · tags |
| cách chơi poker | 2.900 | title 또는 desc · H2 2 · tags |
| poker là gì | 1.900(9/10 ✅) | 현지 추가 H2(정의 입구) · tags |
| luật chơi poker | 1.600 | desc · tags |
| poker rules · texas holdem | 1.300 · 1.300 | title «Texas Hold'em» · tags «texas holdem» |
| chơi poker · poker cách chơi · poker luật | 880 · 720 · 590 | (같은 수요 · 본문 자연 등장) |
| cách chơi bài poker · texas holdem poker · hướng dẫn chơi poker | 320 · 320 · 260 | desc «hướng dẫn» · 도입 1회 |
| bài poker là gì | 210 | 현지 추가 H2 본문 1회(«bài poker» = 포커 게임/카드 — 족보 글 헤드와 충돌 금지) |
| luật chơi poker cơ bản · luật poker cơ bản · cách chơi poker cơ bản | 170 · 70 · 70 | H2 1 «cơ bản» · tags |
| cách chơi poker 2 lá | 110(8/8 ✅) | 현지 추가 H2 · tags |
| luật chơi bài poker · poker texas holdem | 110 · 170 | 본문 |
| texas holdem rules · luật poker tiếng việt · luật poker quốc tế | 50 ×3 | FAQ·본문 1회(«luật poker quốc tế» = «luật chuẩn quốc tế» 표현으로 H2 1 직답) |
| cách chơi poker cho người mới (bắt đầu) · cách chơi poker đơn giản · poker là gì cách chơi · cách chơi poker chip | 10 ×5 | seoTitle «cho người mới» · FAQ «đơn giản» · H2 5 «chip» |
| 칩 related: Cách tính chip trong poker · 1 chip poker bằng bao nhiêu tiền · 1000 chip poker bằng bao nhiêu tiền | — | H2 5 본문 1문장: 칩 **개수**(40 chip)와 **총 액면**(200)은 다르다(EN L166) — 실제 환전·실머니 환산은 쓰지 않는다 |
- 함정: «luật poker 5 lá / 4 lá / 3 lá / 7 lá / xì tố / mậu binh / liar bar / short deck»(다른 게임) → 현지 추가 H2로만 받고 seoTitle·H1·tags 금지 · «poker online / apk / pokerist / cybergame» 금지 축 · «cách chơi poker luôn thắng / cách đánh poker luôn thắng» 약속형 금지(§3-C 「레인 A」 🅳 동형) · «mẹo chơi poker» 40 = strategy 몫(본문 앵커만) · «phỉnh poker là gì» 40 = 칩 상품 → «chip (phỉnh)» 병기 1회만 · «dealer poker là gì» 170 = 직업 혼합 → game-order FAQ 몫 · «luật chơi poker là gì» = 합법성 기사 2/9 → 조준 안 함 · «Poker là môn thể thao gì?»(PAA) = 법률·행정 분류 → 답하지 않는다.

### 현지 SERP (L-A §0-B · §3-A · §3-B · §4-B · §5 · §6-A · §7-A · §10-3)
- 상위: wikipoker(W1 «Luật chơi Poker No-Limit Hold'em cập nhật mới nhất» H2 4 · 표 0 · FAQ 0 · Turn 문단 순번 오기) · W2 «Poker là gì? Hướng dẫn toàn tập…»(948단위 · FAQ 3) · thuthuatchoi T1(2.882단위 · 🔴 «1 lá trên tay và 5 là chung» = 6장 오류 · all-in 지분을 «시점»으로 설명) · vietgameindex V1(Hold'em·Omaha·Xì Tố 구분 · 0·1·2장 사용 명료) · calameo 문서 · AI Hay 답변 · ulifestyle UI 페이지. «luật poker» SERP에 RDR2·게임 위키·심리 글 혼입 · «cách chơi poker»에 Indian Poker·Badugi 2 · «luật chơi poker»에 4장 포커·운영사·제휴 혼재. FS 기록 없음 · AIO 없음(입문 4헤드).
- 우리가 더 줄 것 3: ① **0+5 / 1+4 / 2+3 홀카드 사용 + 7장 예시 표 3행**(EN L77~81 · 경쟁 T1은 6장 오류) ② **검산된 칩 배분 표**(EN L159~168 · 20×1+16×5+4×25 = 200 · 상위 글 표 0) ③ **조건 명시된 2·4 법칙**(EN L309·L314 — 현 vi가 조건을 빠뜨린 자리 · L-A §6-A P0) + 경험담.
- PAA(축어): Làm cách nào để chơi poker dễ hiểu? · Làm cách nào để chia bài trong poker? · Thùng trong poker là gì? · Luật chơi poker là gì? · Poker nghĩa là gì? · Làm cách nào để chơi poker giỏi? · Chia bài poker gọi là gì?(→ game-order) · Poker là môn thể thao gì?(답하지 않음) · Poker là bao nhiêu bàn?(의미 불명 → 쓰지 않음).
- AC(축어): luật poker cơ bản · luật poker quốc tế · luật poker texas holdem · luật poker 2 lá · luật poker tiếng việt · cách chơi poker 2 lá · cách chơi poker cơ bản · cách chơi poker đơn giản · cách chơi poker cho người mới (bắt đầu) · cách chơi poker 2 người · cách chơi poker texas holdem · poker là gì cách chơi · chơi poker là gì · bài poker là gì.

### 현지 추가
1. **H2 «Poker là gì — và poker 2 lá (Texas Hold'em) khác poker 5 lá, xì tố ở đâu?»**(문구는 §6′ 확정 카피) — H2 1(Basic Rules) 바로 뒤 · 3~5문장 · 표 없음. 사실(이것만): «poker»는 여러 변형의 통칭이고 이 글은 **Texas Hold'em** — 각자 **2 lá bài tẩy** + **5 lá bài chung**, 베스트 5장 — 만 다룬다(EN tldr) · 베트남에서 «poker 5 lá / 4 lá»처럼 숫자로 부르는 변형은 **각자 받는 카드 수가 달라** 족보 이름은 같아도 진행·베팅이 이 글과 다르다(이름만 언급 · 그 게임들의 규칙은 서술하지 않는다) · 고정문 «Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold'em, mỗi người nhận hai lá bài tẩy.»(§3-A ②) · «cách chơi poker 2 lá»로 검색해 들어온 독자에게 «2 lá = 홀카드 2장이지 최종 비교가 2장이라는 뜻이 아니다»(L-A §6-A · 베스트 5장 재강조). 출처 = L-A §4-B V1(Hold'em·Omaha·Xì Tố 구분) · §10-2 AC(luật chơi poker 5 lá·2 lá·4 lá·7 lá) · 계획 §3-A ②. 링크 없음.
2. **FAQ «Làm cách nào để chơi poker dễ hiểu?»**(PAA 축어) = EN FAQ 7(«dummies — simplest version» L417~419)의 답을 이 질문으로 받는다(새 FAQ가 아니라 EN FAQ 7의 vi 질문형 · «cho người mới hoàn toàn / đơn giản nhất» 검색형 유지).
3. **FAQ «Thùng trong poker là gì?»**(PAA 축어) — 답 1~2문장: «thùng (flush) = 5 lá cùng chất» + 족보 순위는 `/vi/blog/holdem-hand-rankings` · «thùng và sảnh cái nào lớn hơn»은 `/vi/blog/holdem-flush-vs-straight` 앵커. 정의 1줄 + 앵커(🅱 소유 · §3-C ② 동형) — 수치 없음.
4. **FAQ «Luật chơi poker là gì?»**는 만들지 않는다(합법성 혼입 헤드 · §0-6). 대신 EN FAQ 9 «quick version»(L425)을 «Luật chơi poker cơ bản — phiên bản rút gọn là gì?» 검색형으로.
5. **칩 H2(EN L145) 본문**: «chip (phỉnh)» 병기 1회 + 칩 개수 vs 총 액면 1문장(§키워드 표 related 행 · EN L166 «40 chips / 200»).
- 선택(권장): H2 1 직답에 «luật chuẩn quốc tế»(AC «luật poker quốc tế») 표현 1회 — 내용은 EN 그대로(TDA·WSOP 규정을 따른다는 뜻으로 쓰지 않는다 · «표준 규칙»의 뜻).

### 확정 카피 — (§6′-1)

### 소유표
- 주인: «luật poker» · «cách chơi poker» · «poker là gì» · «luật chơi poker (cơ bản)» · «texas holdem» · «cách chơi poker 2 lá» · «cách chơi poker cho người mới» · «cách chơi poker chip / bao nhiêu chip» · «cách chia bài poker» 110(H2 8 «Cách chia bài Texas Hold'em» — EN 1:1로 배분 순서 10단계가 이 글에 있다 · L-A §7-B는 game-order 주력어로 적었으나 내용 위치가 이 글이라 여기가 주인 · game-order는 FAQ 1문 + 이 H2 앵커).
- 쓰면 안 되는 헤드(seoTitle·H1·tags): §0-6 공통 + «poker 5 lá / xì tố / mậu binh»(본문 H2만) · «thứ tự bài poker»(hand-rankings — 족보 표 H2는 «Thứ hạng tay bài cơ bản» 형 · 본문 앵커 1회) · «quy tắc 4 và 2»(H3 제목 금지 — drawing-odds·계산기 몫 · 본문 1회 + `/vi/calculator` «máy tính outs» 앵커 허용) · «vị trí trong poker»(positions — H2 9는 «Vị trí trong Texas Hold'em — …» EN 축어 형은 허용 · seoTitle·tags 금지) · «bài khởi đầu»(앵커만).

### §13 자리 (C 전사 대조 + 손검산)
EN L79~81(7장 예시 표 3행 — 🔴 손검산 10-09: A♠K♠ + A♦7♣7♥2♠9♣ = 베스트5 A♠A♦7♣7♥K♠ 투페어 A·7 키커 K ✔ / 8♠8♦ + K♣8♥4♠4♦J♣ = 8♠8♦8♥4♠4♦ 풀하우스 8 풀 오브 4 ✔ / 2♣3♦ + A♠K♠Q♠J♠10♠ = 보드 로열 플러시(홀카드 0장) ✔) · L153~155(100 · 200 · 1.000–2.000 · 1/2 · 2/4 · 10/20) · L163~166(20·16·4 = 40 chip · 20+80+100 = 200 ✔) · L170(100 BB) · L184~186($0,01/$0,02 → $2–$5 · $0,05/$0,10 → $10–$20 · $0,10/$0,25 → $25–$50) · L229(플롭 A♠K♦8♥) · L241~246(9-max 순서) · L278~283(4티어 핸드 목록 · «top 5%») · L297~299($100 pot · $20 bet → $120:$20 = 6:1 · 1/7 ≈ 14% ✔) · L309~310(9×4 = 36% · 9×2 = 18%) · L314·L316(9 ÷ 47 ≈ 19% — 🔴 ×4 조건 «river까지 추가 베팅 없이» 축어 필수 · L-A §6-A P0) · L345~354(족보 빈도 표 10행 — «7장 중 베스트 5 기준» L341 문장 필수 · 5장 확률표로 오인 금지) · L378(A♣4♦) · FAQ L403(200 · 1/2 · 20·16·4) · L407($2–$5 · $0,01/$0,02) · L411(A-2-3-4-5 · J-Q-K-A-2 불가) · L415(1.326 · 169) · L431(2~10명 · 4~6명) · L439(30초~2분).

### 경험담 자리 (EN에 있는 것만 · 베트남 독자 맥락으로 다시 쓰되 없는 사실 금지)
L34(키친 테이블·홈게임·카드룸 — «bàn ăn ở nhà · ván chơi với bạn bè · phòng bài») · L362(홈게임 주최 · 같은 실수 5개) · L370(처음 딜한 홈게임 · 순서 착각 → 실물 nút dealer로 해결) · L378(약한 Át로 칩 잃는 초보).

### 하지 말 것
- 파일 머리 주석 없음(동결 지시 없음). · 2·4 법칙 조건(L309 «no further bet» · L314 ⚠ 단락 · L316 «one-card figure») 축어 — 빼면 L-A §6-A P0 재발 · 족보 정의를 길게 늘리지 않는다(hand-rankings 몫 · EN 분량 그대로) · 실머니 시작 금액 H2·FAQ를 검색 훅으로 키우지 않는다(학습용 칩 단위로 · L-A §6-A) · 다른 게임 규칙 서술 금지.

---

## 2. holdem-game-order — EN updated 2026-10-01 (우선 2)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em: The Order of Play From Blinds to Showdown
- seoTitle: Who Bets First in Texas Hold'em? — The Order of Play
- desc: Whose turn is it — and who bets first? The full Texas Hold'em order of play: blinds, preflop, flop, turn, river, showdown, and who acts first on every street.
- tldr: Preflop, the player to the left of the big blind bets first. On the flop, turn and river it is the first live player to the left of the button — usually the small blind. (Heads-up flips this.) The hand itself runs blinds → hole cards → preflop → flop → turn → river → showdown, with up to four betting rounds.
- tags(EN): who bets first in texas holdem · who goes first in poker · poker betting order · texas holdem order of play · poker order of play · who acts first in poker · preflop flop turn river · poker showdown
- readTime 16 min → «16 phút» · image `/images/blog-holdem-game-flow.webp` · date 2026-06-10
- 현 vi: seoTitle «Không Biết Khi Nào Cược? — Trình Tự Chơi Texas Hold'em» · masterUpdated 2026-07-02 · updated 2026-09-21 · 🔴 FAQ 7 vs EN 11(who goes first · who bets first after the flop · who shows first · burn card 4문 누락) · H2 «Who Bets First» 재정렬 미반영 · 제목 단어마다 대문자 · «Mù» · «Lật Bài» · «Nước Cược» · «Xám» 7 · «## FAQ» · «3 Điều Cần Nhớ»(L-A §6-B)
- EN 머리 주석 L6~12(«who bets first» 축 재조준 · 근거 = US 볼륨) → vi에선 측정된 «ai đi trước poker» 수요가 **없다**(AC 0건 · L-A §1-B — «확인된 질문»으로 적지 마라). 그래서 vi 축 = «flop turn river»·«trình tự»·«ai hành động trước»(훅) + «chia bài poker gọi là gì». 주석은 vi 파일에 옮기지 않는다.

### 구조 (EN L##)
- 도입 L26~28 · H3 «One hand in 15 seconds» L32(L34 한 문장)
- H2: L40 What Is Texas Hold'em? → L48 Before the Deal(`<div>` 표 L56~63 · L65 HU) → L71 Stage 1 Preflop(리스트 4 L77~80 · H3 L84 starting hands L86~88) → L94 Stage 2 Flop(이미지 L103) → L109 Stage 3 Turn → L123 Stage 4 River → L137 Stage 5 Showdown(이미지 L141 · 리스트 5 L145~149) → L155 Who Bets First(굵은 직답 L157 · `<div>` 표 L161~170 · L174 HU · L176 straddle) → L180 Whole Order at a Glance(`<div>` 표 L182~193 · H3 L195 «⚡ one-line memory hook» 리스트 5) → L205 Follow One Full Hand(이미지 L207 · H3 Preflop L216 · Flop L221 · Turn L229 · River L237 · Showdown L246) → L257 The 7 Moves(이미지 L259 · `<div>` 표 L263~275) → L283 10 Hand Rankings(`<div>` 표 L287~302) → L308 5 Mistakes(H3 ×5 L312~330) → L334 How to Start Playing Today(리스트 4 · L343 위키 링크) → readnext L347(rules-for-beginners · betting-actions) → FAQ L352(11문) → L400 The 3 Things to Remember → L410 Related Posts(카드 3: rules-for-beginners · hand-rankings · positions)
- FAQ 11: exact order · who goes first in poker · who bets first after the flop · who shows first at showdown · preflop vs flop · checking vs calling · both hole cards · pot odds · when all-in · how many betting rounds · why burn a card

### 링크
EN: L28 rules-for-beginners(thumb) · L54 blind-meaning · L90 starting-hands-chart · L151 showdown-rules · L172·L318 positions · L279 betting-actions · L304 hand-rankings · L343 en.wikipedia · L388 all-in-rules · readnext rules-for-beginners·betting-actions · Related 3 → 전부 `/vi/` 1:1. L90 앵커 «bài khởi đầu nên chơi theo vị trí» 형(«bảng» 금지). L343 위키 = §0-7 편차 ②(EN 링크 유지 + «(tiếng Anh)»).
- 현지 추가 앵커 1: FAQ «Làm cách nào để chia bài trong poker?» → `/vi/blog/texas-holdem-rules-for-beginners`(H2 «Cách chia bài» 10단계).

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| flop turn river | 50(5/6 ✅) | seoTitle 또는 desc · H2 4·5·6 · tags |
| người chia bài trong poker gọi là gì · PAA «Chia bài poker gọi là gì?» | 70 · — | 현지 추가 FAQ(dealer ↔ nút dealer) · tags |
| flop trong poker là gì · river trong poker là gì | 20 · 10 | H2 4(«Flop trong poker là gì?») · H2 6(«River trong poker là gì?») · tags |
| cách chia bài poker · luật chia bài poker | 110 · 20 | 🔴 beginners H2 8 소유 → 이 글은 FAQ 1문 + 앵커(tags 금지) |
| preflop flop turn river · dealer button | 10 · 10 | H3 «15초» · H2 2 «nút dealer» · tags «preflop flop turn river» |
| trình tự chơi poker · vòng cược poker(현 vi tags) | `-`(미측정) | seoTitle 훅 재료로만 — 볼륨 주장 금지 |
| turn trong poker là gì · flop turn river là gì · poker cách chia bài | `-` | H2 5 «Turn trong poker là gì?»(수요 없어도 H2 소제목으로 — L-A §10-1) |
- 함정: «turn là gì» 880 · «river là gì» 720 · «flop là gì» 6.600(SNS 속어) · «under the gun» 170(음악·영화 · positions 몫) · «dealer poker là gì» 170(직업·카지노 딜러 혼합 → FAQ 1문만 · 조준 안 함) · «ai đi trước poker» AC 0 → 측정 질문으로 기록 금지 · «thứ tự bài poker» 590 = hand-rankings seoTitle 축어 → H2 12 족보 표는 «10 thứ hạng tay bài…» 형(«thứ tự bài» 금지).

### 현지 SERP (L-A §0-B · §3-A · §3-B · §4-B W1·T1·V1 · §6-B · §7-B · §10-3)
- «flop turn river» 상위 = reddit 영어 포럼·경주마·문학·포커 책·Etsy 셔츠 — 베트남어 해설 0 · «flop/river trong poker là gì» SERP = facebook 5·youtube 3·wikipoker 2·ggpoker·natural8 번역 → 베트남어 원문 진행 해설이 얇다. W1(wikipoker 규칙)은 Turn 문단에서 «vòng cược thứ 4» 순번 오기(L-A §4-D) · HU 예외 생략 · 전략이 길게 섞임(§5).
- 더 줄 것 3: ① 프리플랍/포스트플랍 «ai hành động trước / sau» 표(EN L161~170 · SERP 0) ② 한 핸드 전체 추적 + pot 누적 12.000 → 28.000 → 58.000 → 198.000(EN L205~ · 현 vi 검산 일치 · L-A §6-B) ③ HU 예외 + burn 카드 + dealer vs nút dealer 구별.
- PAA(축어): Chia bài poker gọi là gì? · Làm cách nào để chia bài trong poker? · (EN PAA · flop turn river) Do you burn a card before the flop turns and river? · What is it called after the flop in poker? · (존재만 기록 · 쓰지 않음) What is the 15/25/35 rule in poker?
- AC(축어): flop turn river là gì · flop trong poker là gì · river trong poker là gì · river là gì poker · preflop flop turn river · luật poker thứ tự(= 족보 의도 · 쓰지 않음).
- related(river trong poker là gì): Raise/Check/Call trong Poker là gì(→ betting-actions 앵커) · Dominate trong Poker là gì(쓰지 않음).

### 현지 추가
1. **FAQ «Chia bài poker gọi là gì? Dealer và nút dealer khác nhau thế nào?»**(PAA 축어 + §3-C ⑳ 1문) — 답: 사람 = **dealer (người chia bài)** · 원반 = **nút dealer (BTN)** — 하우스 딜러가 있어도 버튼이 베팅 순서를 정하고 매 판 시계방향으로 한 자리 이동(EN L52 축어 · dead-button 예외 언급). 직업·카지노 딜러 의미는 다루지 않는다.
2. **FAQ «Làm cách nào để chia bài trong poker?»**(PAA 축어) — 답 3문장: 버튼 왼쪽부터 시계방향으로 1장씩 두 바퀴 → preflop 베팅 → burn 1 + flop 3 → burn 1 + turn 1 → burn 1 + river 1(EN L73 · L96 · L111 · L125 · L396 근거) + `/vi/blog/texas-holdem-rules-for-beginners` «cách chia bài 10 bước» 앵커.
3. H2 4·5·6 제목을 «Giai đoạn N — Flop/Turn/River trong poker là gì?» 정의형으로(AC 축어 · 확정 카피 따름) — 본문은 EN 1:1 · 어원·«fourth street / fifth street» 영어 별칭은 EN L111·L125 그대로 «(còn gọi là fourth street)».
4. EN FAQ 2·3·4·11(who goes first · after the flop · who shows first · burn) = 현 vi 누락분 — EN 1:1로 당연히 복원(현지 추가 아님 · 기록만).

### 확정 카피 — (§6′-2)

### 소유표
- 주인: «flop turn river» · «flop / turn / river trong poker là gì» · «chia bài poker gọi là gì»(dealer vs nút dealer) · «preflop flop turn river» · burn 카드 · «ai hành động trước ở mỗi vòng»(측정 없음 · 훅) · 한 핸드 전체 진행.
- 금지 헤드: §0-6 + «thứ tự bài poker»(hand-rankings) · «cách chia bài poker»(beginners H2 8 — 앵커만) · «under the gun»(positions · 오염) · «dealer poker là gì»(직업 혼합) · «vị trí trong poker»(positions).

### §13 자리
L60~61(SB 1.000 · BB 2.000) · L82·L314(15–25%) · L86~88(시작 핸드 목록 — 카드 축어 · «Big Slick» 유지) · L103(K♥7♦2♣ · 9♠ · Q♥) · L141(10♣7♥J♦4♠9♣ · A♥A♦ vs K♥K♣ — 🔴 손검산 10-09: A♥A♦ = A·A·J·10·9 원페어 Át / K♥K♣ = K·K·J·10·9 원페어 K → Át 승 · 보드 4-7-9-10-J에 8·Q 없음 → 스트레이트 없음 ✔) · L165~168(순서 표) · L186~191(카드 수 0·0·3·4·5·5) · L211~251(풀핸드: SB 1.000/BB 2.000 · A♠K♥ vs 9♦9♣ · raise 6.000 → pot 12.000 · 플롭 K♦9♠3♥ bet 8.000 → 28.000 · 턴 2♣ bet 15.000 → 58.000 · 리버 A♥ bet 30.000 → check-raise 70.000 → call → 198.000 — 🔴 손검산: 12.000+8.000×2 = 28.000 ✔ · +15.000×2 = 58.000 ✔ · +70.000×2 = 198.000 ✔ · A = A♠A♥K♥K♦9♠ 투페어 Át·K / B = 9♦9♣9♠A♥K♦ 사모코(세트) 9 → B 승 ✔) · L291~300(족보 표 10행 · 예시 카드 축어 · L285 «best five out of seven» 문장 필수) · L322(100.000 pot · call 50.000 → 33%) · L384(100.000 · 20.000 → 120.000 · 6:1) · L396(burn 3장).

### 경험담 자리
L26(«Wait — whose turn is it…» 첫 게임의 질문) · L117~119(턴 설명 — 경험 아님 · 전략 서술 그대로) · L310(«I've watched each one cost a beginner») · L314(첫 테이블 최대 leak) · L330(투페어 착각 · 연결 안 된 스트레이트 공개 — 테이블이 조용해지는 장면).

### 하지 말 것
- 족보 표 수치·카드 변경 금지 · pot 누적 숫자 변경 금지 · «Xám» 금지(사모코 → «sám cô (bộ ba)» · 풀핸드 showdown에서 «set» 영어 + 정의 1회) · TDA 2024 Rule 16·18-B · WSOP Tournament Rule 70 · Live Action Rule 165 번호 유지 · 위키 링크는 EN 유지.

---

## 3. holdem-betting-actions — EN updated 2026-10-06 (우선 3 · 트래픽 3순위)

### 메타 (EN 축어)
- title: Texas Hold'em Betting Actions: Check, Call, Raise, Fold
- seoTitle: Check, Call or Fold? — Poker Betting Actions & Raise Rules
- desc: Action's on you and your mind goes blank? Learn what a check, call, raise and fold mean in poker, the min-raise rule, and how many times you can re-raise.
- tldr: Texas Hold'em has 5 betting actions: check (pass for free), bet (open the round), call (match a bet), raise (increase it — the minimum raise equals the last full bet or raise), and fold. You can only check when there is no live bet in front of you — preflop that normally means only the big blind (or whoever posted a live straddle).
- tags(EN): poker betting actions · what is a check in poker · what is a call in poker · min raise poker rules · how many times can you raise in poker · can you raise after checking · string bet
- readTime 9 min → «9 phút» · image `/images/holdem-betting-actions-hero.webp` · date 2026-06-14
- 현 vi: H1 «Các hành động cược trong Texas Hold'em: Check, Theo, Tố, Bỏ Bài» · seoTitle «Check, theo hay bỏ bài? — Các hành động cược trong poker» · masterUpdated 2026-07-11 · updated 2026-09-07 · 🔴 «tố» 74회 · «theo» 35회 · tldr에 straddle 괄호 누락(EN 현행엔 있음) · «pre-flop» FAQ(L-A §6-C · §3-D ③)

### 구조 (EN L##)
- 도입 L27~31(경험 L27·L29 · L31 rules-for-beginners thumb) · H3 «Quick summary» L35 + `:::stripe` L37~42(4행)
- H2: L44 5 Betting Actions(표 L48~54 · L56 all-in · L58 ==r:) → L62 What Is a Check → L72 When Can You Check(리스트 2 L76~77 · L79 check-raise) → L85 What Is a Call (Check vs Call)(표 L91~95 · 예시 L97) → L101 What Is a Fold — Any Time?(L105 Rule 84 · L107 out of turn) → L111 Min-Raise(이미지 L113 · 리스트 3 L117~119 · 표 L123~126 · L128 · 번호 2 L132~133 · L135) → L139 How Many Times Can You Raise(L141 · 리스트 2 L145~146 · L148 Rule 100.b) → L152 All-In → L162 Knowing the Actions Is Step One(리스트 3 L166~168 · L170) → L174 Live Betting Mistakes I See Every Week(H3 ×4 L178~192) → readnext L196(all-in-rules · strategy) → FAQ L201(8문) → Related L237(카드 3: rules-for-beginners · game-order · blind-meaning)
- 🔴 이 글엔 마무리 H2가 없다(EN에 없음) — «Những điều cần nhớ»를 추가하지 않는다.
- FAQ 8: raise after checking · raise your own bet · how many times · fold out of turn · check preflop · raise after all-in · string bet · limp

### 링크
L31·L81 game-order(thumb) · L107 when-to-fold · L135·L166 strategy · L158 all-in-rules·split-pot-rules · L167 hand-rankings · L168 positions · L233 limping · readnext all-in-rules·strategy · Related 3 → `/vi/` 1:1.
- 🔴 L107 when-to-fold 앵커 = «khi nào nên bỏ bài» 형(§3-C ③ 상호 앵커 1 · 이 글 제목엔 «khi nào nên fold/bỏ bài» 금지) · L233 limping 앵커 «vì sao limp làm bạn mất tiền» · L79 check-raise = 정의 1문장 + (링크 없음 · EN에 없음).

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| fold trong poker là gì · PAA «Fold poker là gì?» | 50 | H2 5 «Fold poker là gì?» 축어 · tags |
| check trong poker là gì | 30 | H2 2 «Check trong poker là gì?» 축어 · tags |
| call trong poker là gì · PAA «"Call" trong poker có nghĩa là gì?» | 30 | H2 4 축어 · tags |
| raise trong poker là gì · luật raise trong poker · min raise trong poker | 30 · 10 · 10 | H2 6 «Raise trong poker là gì — min-raise tính thế nào?» · tags «luật raise trong poker» |
| fold poker · bet poker · check poker · call poker · raise poker | 50 · 30 · 20 ×3 | seoTitle «Check, call hay fold?» 형 · desc |
| AC: khi nào được check trong poker · cách tính min raise trong poker · luật min raise trong poker · lệnh check/call/raise/fold trong poker | `-` | H2 3 «Khi nào được check trong poker?» · 현지 추가 FAQ «cách tính min raise» · «lệnh» = 온라인 버튼 뜻 → 본문 1회 «nút/lệnh Check trên bàn online» 허용 |
| related: Bet trong Poker là gì · Thuật ngữ trong Poker | — | 현지 추가 FAQ «Bet trong poker là gì?» · thuật ngữ → `/vi/glossary` 앵커 1회(§0-5) |
- 함정: 단독 «check/call/raise/fold là gì»(영어 학습 · 0/8) 전부 조준 금지 · «call any / call lu / cold call trong poker»(AC) = 다른 글·전략(쓰지 않음) · «4bet» 40 오염 · «3 bet» 27.100 도박 브랜드 → «3-bet·4-bet»은 본문 L141 축어만.

### 현지 SERP (L-A §0-B · §3-B · §4-B W3·E2 · §4-D · §4-E · §6-C · §7-C · §10-3)
- «check trong poker là gì» 10 = 구글번역 프록시 3·natural8·energycasino·propokervn·hunter.poker·wikipoker 1·reddit 1 — PAA 없음 · «raise trong poker là gì» = wikipoker 2(«Các hành động trên bàn poker…» · «Check-Raise…») · reddit «Min raise hoạt động kiểu gì vậy?» · youtube «CÁCH TÍNH MIN RAISE TRONG POKER» · «fold trong poker là gì» = reddit `?tl=vi` 5·facebook 4 → **정면 경쟁자 없음**: 액션 4종을 한 글에 «X trong poker là gì» H2 4개 + §13 예시로 묶는다(L-A §10-3 관찰).
- W3(wikipoker 액션)은 «tất nhiên là bạn được quyền Check»(첫 행동자면 항상 체크 가능 — 조건 누락 · L-A §4-D) · 반면 min-raise 예시(1BB → 2,5BB open → 다음 최소 4BB · 1k/2k A10k B10k C올인15k 재오픈 안 됨)는 맞다. 우리 차별화 = **«맞춰야 할 베팅 유무» 기준 허용 액션 표**(EN L48~54) + min-raise 산수(EN L123~128) + 칩 한 장 사례(L192).
- PAA(축어): Fold poker là gì? · "Call" trong poker có nghĩa là gì? · (related) Bet trong Poker là gì · Blind trong poker là gì?(→ blind-meaning 앵커) · Flush trong poker là gì?(→ 🅱 · 쓰지 않음).
- AC(축어): raise trong poker là gì · luật raise trong poker · min raise trong poker · lệnh raise trong poker · cách raise trong poker · luật min raise trong poker · cách tính min raise trong poker · check trong poker là gì · lệnh check trong poker · khi nào được check trong poker · call trong poker là gì · lệnh call trong poker · fold trong poker là gì · lệnh fold trong poker.

### 현지 추가
1. **H2 2·3·4·5 제목 = «X trong poker là gì» 축어**(§3-C 「레인 A」 확정): «Check trong poker là gì?» · «Khi nào được check trong poker?» · «"Call" trong poker có nghĩa là gì? Check và call khác nhau ở đâu» · «Fold poker là gì — có được fold bất cứ lúc nào không?» · H2 6 «Raise trong poker là gì — min-raise tính thế nào?»: 직답 첫 문장에 raise 정의(EN L54 표 «At least the size of the last full bet or raise on top» + L118) 1문장 — L-A §6-C «raise 정의가 min-raise 속에 묻힌다» 처방 · 새 규칙 없음.
2. **FAQ «Bet trong poker là gì?»**(related 축어) — 답: EN L53 «First wager of the round · minimum = 1 big blind» + 동사 «cược / đặt cược» 풀이 + all-in은 별개 액션이 아니다(L56).
3. **FAQ «Cách tính min raise trong poker?»**(AC 축어) — 답 = EN L123~128 표 요지(bet $6 → raise đến ít nhất $12 · preflop blind $1/$2 raise đến $6 = tăng $4 → re-raise tối thiểu đến $10 · «full» = $10 bet + $14 all-in → 최소 $24) — 숫자 EN 축어.
4. **용어 1행**: H2 1 표 아래 또는 도입에 «Ở bàn Việt Nam bạn sẽ nghe cả tiếng Anh lẫn tiếng Việt: call = theo, raise = tố, fold = bỏ bài, all-in = tất tay — bài này dùng tên tiếng Anh vì đó là cách bạn tìm kiếm và nghe ở bàn.» 1문장(§3-A ④ 병기 통합 · 코퍼스 call 133 : theo cược 1 근거 — 수치는 쓰지 않는다). 🔴 그 뒤 산문은 check·bet·call·raise·fold 영어.

### 확정 카피 — (§6′-3)

### 소유표
- 주인(§3-C ②③): «check / call / raise / fold trong poker là gì» · «khi nào được check trong poker» · «min raise · luật raise trong poker» · «bet trong poker là gì» · «string bet» · «được raise bao nhiêu lần».
- 금지 헤드: §0-6 + «khi nào nên fold / bỏ bài»(when-to-fold) · «check raise»(low-board-check-raise — 본문 정의 1문장까지만) · «limp»(holdem-limping — FAQ 8은 EN 축어 1줄 + 앵커) · «3bet / 4bet / cbet» · 단독 «X là gì» 4종.

### §13 자리
L31 · L38~41(stripe: 5 · 1 BB · = last full raise · No cap) · L50~54(표) · L87($10) · L97(K♠8♦ · $10 · $20) · L113(이미지 alt: $6 → $12 · $6 → $10) · L117~119(1 BB) · L125~126(min-raise 표 — 🔴 손검산 10-09: bet $6 → 최소 raise $6 더 = $12 ✔ / preflop $1/$2 raise to $6 = BB $2 위 증가분 $4 → 최소 re-raise $4 더 = $10 ✔) · L128($10 bet + $14 all-in → 증가분 기준 $10 → 최소 $24 ✔ · 최소 오픈 = 2 BB) · L135(2,5x · 3x) · L141(raise → 3-bet → 4-bet → 5-bet) · L148(one bet + four raises · Rule 100.b) · L188 · L192($10 bet · $100 chip) · L209(50% · TDA 47-B) · L213 · L221(Rules 159 · 165) · L229(TDA 44–45 · 43-A 50% · 42 · 103 · 90.d).

### 경험담 자리
L27~29(첫 라이브 «action is on you»에 얼어붙음 · «Check? Call? Raise?») · L174~176(주간 로우스테이크 라이브) · L180(조용히 칩을 민 초보 — Rule 90.a·90.b.1) · L184(«I call... actually, raise!» · Rule 90.d — 구두 선언은 영어 «"Call"… à không, "raise"!»로 · 또는 «hô "tố"» 1회 허용) · L188(BB가 공짜 플롭을 폴드) · L192($100 칩 한 장).

### 하지 말 것
- TDA/WSOP 조항 번호 변경 금지(L105 Rule 84 · L132 Rule 90.d·103 · L148 Rule 100.b · L180 Rule 90.a·90.b.1 · L192 Rule 97 · L209 TDA 2024 Rule 47-B · L221 Live Action Rules 159·165 · L229 Rules 42~45·43-A·103·90.d) · 판본 «TDA 2024»는 EN 축어 유지(2026판 대조는 EN-먼저 후보 · L-A §4-D 「규정의 현행성」 — vi가 단독으로 판본을 바꾸지 않는다).
- «tố»를 본문 기본어로 쓰지 않는다(§0-4) · «theo»는 동사 용법만 · 전략 조언(언제 폴드·레이즈 사이즈)을 늘리지 않는다(L135·L170 EN 분량).

---

## 4. holdem-blind-meaning — EN updated 2026-10-06 (수정 효율 1순위 · 트래픽 4순위)

### 메타 (EN 축어)
- title: What Are Blinds in Poker? Small Blind vs Big Blind, Explained Simply
- seoTitle: Chips In Before Cards? — Small Blind vs Big Blind in Poker
- desc: Two players pay before a card is dealt — why? What the small blind and big blind are, who posts them, SB vs BB amounts, the big blind ante, and heads-up rules.
- tldr: Blinds are forced bets posted before cards are dealt. The small blind sits left of the dealer button and the big blind to their left (heads-up, the button itself posts the small blind); the big blind — usually double the small blind — is the table's betting unit.
- tags(EN): what is a blind in poker · what is the big blind · what is the small blind · small blind vs big blind · big blind small blind rules · big blind ante · texas holdem blinds
- readTime 9 min → «9 phút» · image `/images/holdem-blind-meaning-hero.webp` · date 2026-06-13
- 현 vi: H1 «Mù trong poker là gì? Mù nhỏ và mù lớn, giải thích dễ hiểu» · seoTitle «Chưa thấy bài đã phải cược? — Mù nhỏ và mù lớn trong poker» · masterUpdated 2026-07-11 · updated 2026-07-13 · 🔴 **«mù» 146회 · tags 전부 «mù …»**(검색 표기 blind/big blind/small blind와 불일치 — L-A §6-D 「가장 분명한 현지화 불일치」 · §3-D ③) · tldr에 HU 괄호 누락 · 문중 «Flop/Turn/River» 대문자 18 · 이 편만 «Trả lời nhanh» 블록 있음(필드 모양 선례 · 문면은 복사 금지 · 계획 §5)

### 구조 (EN L##)
- 도입 L19~21(경험 L19 · L21 rules-for-beginners) · `> **Quick answer**` L25~26 → `> **Trả lời nhanh**` · H3 «The core numbers» L30 + `:::stripe` L32~36(3행)
- H2: L40 What Is a Blind — Why Exist(L42 예외 2 · L44 ==r:/==g:) → L48 Small Blind(L50 $1/$2 · L52 HU 예외) → L56 Big Blind(L58 option · L60 · `<div>` 표 L62~72 · L74) → L78 Rules: Who Posts, When(L80 · 표 L82~87 · `> **Note:**` L89) → L93 How Big Are the Blinds(L95 Rule 104 · `<div>` 표 L97~110 · `> **The golden rule:**` L108 · 리스트 2 L112~113) → L117 Big Blind Ante (Plus Straddle)(L119 · L121 straddle) → L125 Heads-Up → L131 Miss Your Blind (Dead Blinds)(Rules 104.a) → L137 How to Play From the Blinds(이미지 L139 · L141 · 리스트 3 L143~145) → readnext L149(rules-for-beginners · position-play) → FAQ L154(8문) → L190 The Takeaways(번호 3 · L196 링크 3) → Related L200(카드 3: positions · game-order · tournament)
- FAQ 8: why pay before cards · BB or SB first · SB exactly half · BB just check · fold after posting · heads-up who posts · miss your blind · "big blind" vs "the blinds"

### 링크
L21 rules-for-beginners · L58 betting-actions · L89 game-order·positions · L112 tournament-vs-cash-game · L113·L119 tournament · L121 straddle(thumb) · L144 pot-odds · L145 position-play · L196 rules-for-beginners(thumb)·game-order·positions · readnext rules-for-beginners·position-play · Related 3 → `/vi/` 1:1. L121 straddle 앵커 «straddle là gì và có nên đặt không».

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| big blind là gì · small blind là gì | 30 · 10 | H2 3 «Big blind là gì?» · H2 2 «Small blind là gì?» · tags |
| blind trong poker là gì · AC «blind trong poker là gì» | 20 | H2 1 «Blind trong poker là gì — và vì sao phải có?» · tags |
| ante trong poker là gì · ante poker là gì · ante poker | 30 · 20 · 20 | H2 6 «Ante trong poker là gì? Big blind ante …» · 현지 추가 FAQ · tags |
| big blind · small blind · blind poker · reddit 제목 «Small blind và big blind trong Texas Hold'em là gì?» | 20 · 20 · 20 | seoTitle «Small blind và big blind» · desc · tags «small blind big blind» |
| AC: big blind trong poker là gì · small blind trong poker · big blind ante là gì · ante là gì poker | `-` | H2 6 «big blind ante» · FAQ |
| related: Small Blind Big blind là gì · Rules of blinds in poker · Big blind small blind rules · Why is it called blind in poker · Các vị trí trong poker(→ positions 앵커) · Poker blinds calculator(도구 · 조준 안 함) | — | H2 4 «Luật small blind và big blind: ai đặt, khi nào» · 현지 추가 FAQ «Vì sao gọi là blind?» |
- 함정: «blind là gì» 720(1/9 · blind box·blind date) · «ante là gì» 50(0/10 · 사전·Balatro) 단독 금지 · «heads up poker» 조준 안 함 · «straddle» 헤드 금지(holdem-straddle) · «mù» 단독은 검색 표기가 아니다(«mù lớn là gì»·«mù trong poker là gì» 전부 `-`) → 첫 등장 병기만.

### 현지 SERP (L-A §0-B · §3-B · §3-E · §4-B W4·B1·G1·W6 · §4-D · §4-E · §6-D · §7-D · §10-3)
- «blind trong poker là gì» 10 = natural8 2 · wikipoker 3 · ggpoker 1 · en.wikipedia 1 · reddit 1 · facebook·youtube 2 — PAA 없음. W4(wikipoker stack·blind·ante · ante 합계 예시 6×10+5+10 = 75 맞음 · 전통 ante vs BBA 구분 약함) · B1(wikipoker big blind · «trong mỗi vòng cược» = BB를 매 베팅 라운드 내는 것처럼 읽힘 — 내부 충돌 · HU 순서·pot odds 예시 있음) · G1(GGPoker «Giải Thích Về Blinds…» 영어 차용어 중심 · HU·BBA 예외 약함) · W6(wikipoker 블라인드 구조 — 온라인=개인 ante·라이브=BBA 구분을 보편 규칙으로 쓰면 안 됨). 코퍼스 blind 110 : mù 19 · B1 37:2 · W4 37:3(§4-E).
- 더 줄 것 3: ① 캐시 vs 토너먼트 레벨 표(EN L99~106) ② 전통 ante(모두) vs big blind ante(BB 한 명이 테이블 몫) 비교(EN L119 — 경쟁 글 공통 약점) ③ HU에서 BTN = SB + dead blind(EN L125~133).
- PAA(보충 · 축어): Blind có nghĩa là gì?(일반어 혼입 → 쓰지 않음) · Fold poker là gì?(→ betting-actions 앵커). reddit 제목(축어): Small blind và big blind trong Texas Hold'em là gì? · BB ante hoạt động kiểu gì vậy? · Lú quá, luật big blind ante là sao ấy nhỉ · Ý nghĩa của Small Blind là gì?.
- AC(축어): blind trong poker là gì · big blind trong poker là gì · big blind trong poker · small blind trong poker · blind poker là gì · blind poker · big blind là gì · ante là gì poker · big blind ante là gì · ante trong poker là gì.

### 현지 추가
1. **FAQ «Ai phải trả ante trong poker — ante và big blind ante khác nhau thế nào?»**(AC «ante trong poker là gì» + reddit «BB ante hoạt động kiểu gì») — 답 = EN L119 문장만: 전통 ante = 모든 플레이어가 매 판 조금씩 · big blind ante = BB 한 명이 테이블 몫(보통 1 BB)을 대신 내 게임을 빠르게 · 언제 시작하는지는 `/vi/blog/holdem-tournament` 앵커. 수치(ante 크기·레벨 시간) EN 밖 금지.
2. **FAQ «Vì sao gọi là blind?»**(related «Why is it called blind in poker») — 답 1~2문장 = EN L42 «betting "blind," sight unseen»(카드를 보기 전에 «mù» = 눈 감고 거는 베팅이라 blind) · «mù» 풀이가 여기서 자연스럽게 1회 더 등장(§0-4 병기 규칙 안).
3. **EN FAQ 4 «If no one raises, can the big blind just check?»** → vi 질문형 «Không ai raise thì big blind có được check không — và có được raise không?»(답에 option = check 또는 raise · EN L58·L170 축어). 합치지 않고 EN 8문 + 추가 2문 = 10문.
- «mù» 처리(L-A §7-D «mù를 지우는 처방이 아니다»): 첫 등장 «blind (mù — cược bắt buộc)» · «small blind (mù nhỏ)» · «big blind (mù lớn)» · FAQ 2 답 1회 — 그 밖 산문은 blind·SB·BB.

### 확정 카피 — (§6′-4)

### 소유표
- 주인: «blind trong poker là gì» · «small blind / big blind là gì» · «luật small blind big blind» · «ante trong poker là gì» · «big blind ante» · «blind heads-up» · «dead blind / lỡ blind».
- 금지 헤드: §0-6 + «straddle»(holdem-straddle — H2 6 괄호·앵커만) · «heads up poker» · «vị trí trong poker»(positions) · «poker blinds calculator» · 단독 «blind là gì» · «ante là gì» · «mù lớn / mù nhỏ»(검색 표기 아님 · 병기만).

### §13 자리
L21(«2BB raise» · «20BB stack») · L26(직답 · double) · L33~35(stripe: 2 · 1/2 · 1 BB) · L50($1/$2 · $1) · L58($2) · L64~70(BB 표: 2BB → $4 · 20BB → $40 · 3BB → $6 · BB defense $2 → $6 → $4 더 · 100BB → $200) · L84~87(SB/BB 표) · L95(4-8 limit → $4 · Rule 104) · L99~106(레벨 표: $0,5/$1 → $0,50·$1 · $60–$100 / $1/$2 · $100–$300 / $2/$5 · $200–$500 / $5/$10 · $500–$2.000 / 25/50 · 100/200 chip) · L108($1/$3 · $2/$3) · L113(25/50 → 50/100 → 100/200) · L119(1 BB ante) · L121(2x BB) · L144(2,5 BB open · SB fold → call 1,5 BB into 4 BB pot = 2,7:1 ≈ 27% — 🔴 손검산 10-09: 1,5/(4+1,5) = 1,5/5,5 = 27,27% ✔ · «break even» 문장 뉘앙스 EN 축어) · L166($1/$3 · $2/$5) · L192~193.

### 경험담 자리
L19(첫 라이브 핸드 «Small blind, please.» — 12년·수천 시간 · 베트남 테이블에선 딜러가 영어로 «small blind» 또는 «mù nhỏ»라 부른다는 식의 추가 사실 금지 · EN 장면만) · L141~143(블라인드에서 조금씩 새는 초보 · SB에서 가장 많이 잃는다).

### 하지 말 것
- Rule 104·104.a 번호 유지 · 레벨 예시 숫자 변경 금지 · BB 옵션(L58)·HU 반전(L127)·dead blind(L133) 규칙 문장은 EN 축어 · B1류 «매 베팅 라운드마다 BB를 낸다» 오독 유발 표현 금지(«mỗi ván» · «trước khi chia bài»로).

---

## 5. holdem-all-in-rules — EN updated 2026-10-06 (정확성 P0 · 트래픽 5순위)

### 메타 (EN 축어)
- title: Texas Hold'em All-In Rules: Side Pots, Re-Raises & Showdown
- seoTitle: Went All-In and Confused? — Hold'em All-In Rules & Side Pots
- desc: Shoved all your chips and not sure what you can win? Texas Hold'em all-in rules — table stakes, side pots, re-raise eligibility, and showdown order.
- tldr: Going all-in means betting every chip you have. You can only win what you matched from each opponent (the main pot). Extra chips that two or more bigger stacks bet beyond that form a side pot only they can win; a lone extra bet is simply returned. In no-limit and pot-limit, an all-in for less than a full raise does NOT reopen the betting for a player who already acted — unless several short all-ins add up to at least a full raise over what that player has already put in.
- tags(EN): texas holdem all in rules · poker all in rules · side pot poker explained · does all in reopen betting poker · poker all in showdown rules
- readTime 10 min → «10 phút» · image `/images/holdem-all-in-rules-hero.webp` · date 2026-06-15
- 현 vi: seoTitle «All-in xong không biết mình thắng gì? — Luật all-in & side pot» · masterUpdated 2026-08-12 · updated 2026-09-22 · 🔴 tldr에 «lone extra bet returned»·«several short all-ins add up» 누락(EN 현행엔 있음) · «tố» 37 · 🔴 **P0**: 무언 고액 칩 문장 «dealer sẽ chỉ tính đúng giá trị chip đó, chứ không phải cả stack của bạn»(베팅 있으면 call·없으면 그 칩 액면 bet로 갈라야 함 — EN L65) · Mistake 1 «người all-in có thể thắng pot phụ» 일반화가 자체 4인 표와 충돌(L-A §6-E)

### 구조 (EN L##)
- 도입 L25~31(경험 L29 · L31 rules-for-beginners thumb)
- H2: L33 What Does "All-In" Mean(L35 · L37 table stakes · `<div>` 용어 표 L39~49 · L51 ==g:) → L55 How to Declare(번호 2 L59~61 · TDA 45-A/45-B/44 · WSOP 92 · 이미지 L63 · L65 ==r:) → L69 How Do Side Pots Work(L71 · 이미지 L73 · H3 3-Player L75 표 L77~81 · L83·L85·L87 · H3 4-Player L89 표 L93~98 · `<div>` 표 L100~109 · L111) → L115 Does Going All-In Reopen the Betting?(L117 ==r: · L119 Rule 47-B · 이미지 L121 · 예시 L125~133 Rules 176·175 · `<div>` 표 L135~142 · L144 · H3 Advanced Case L146 Rule 47 · 예시 L152~160 · `<div>` 표 L162~170 · L172 · H3 Quick Decision Guide L174 · `<div>` 표 L178~188 Rule 48) → L192 All-In Showdown Rules(번호 4 L196~199 Rule 149 · L201 · L203) → L207 5 Mistakes(H3 ×5 L211~224 · Rule 16) → readnext L228(rules-for-beginners · showdown-rules) → FAQ L233(7문) → Related L265(카드 3: rules-for-beginners · split-pot-rules · showdown-rules)
- 🔴 마무리 H2 없음 — 추가하지 않는다.
- FAQ 7: less than BB · win all-in lose side pot · expose hand · run it twice · table stakes · different amounts who shows · tournament vs cash

### 링크
L31 rules-for-beginners(thumb) · L119 betting-actions · L196 showdown-rules · readnext rules-for-beginners·showdown-rules · Related 3 → `/vi/` 1:1. L119 앵커 «raise đủ mức (full raise)».

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| all in poker | 170(AC = 영화·클럽·상품 혼입 · 베트남 규칙 수요로 확정 안 함) | seoTitle «all-in» · tags «all in poker» |
| all in trong poker là gì · natural8 제목 «All-in trong poker nghĩa là gì?» | 10 | H2 1 «All-in trong poker là gì?» 축어 · tags |
| luật all in poker · all in poker rules · reddit 제목 «Giải thích rõ hơn về Luật All-in cho người mới chơi» | 10 · 10 | 🔴 seoTitle·title «luật all-in» · tags |
| side pot · side pot poker · side pot poker rules · side pot texas holdem · AC «side pot meaning poker» | 10 ×4 | H2 3 «Side pot trong poker hoạt động thế nào?» · tags «side pot poker» · «pot phụ» 병기 |
| all in poker meaning | 10 | H2 1 직답 |
| (`-`) pot phụ · side pot là gì | — | 본문 병기만 |
- 함정: «all in là gì» 5.400 = 0/10(학업·연애·주식·all in one) 절대 조준 금지 · «side pot calculator» = 도구 의도(조준 안 함) · «push fold»·«all in or fold» = 계산기 몫(§3-C ⑨) · PAA «Buy in poker là gì?» = 🅴 교차(여기선 쓰지 않음) · PAA «Thuật ngữ all in là gì? · Chơi all in là gì?» = 비포커 원헤드 → 질문 형식 참고만(포커 PAA 수요 확인됐다고 쓰지 않음).

### 현지 SERP (L-A §0-B · §3-A · §4-B P1·D1·T1 · §4-D · §6-E · §7-E · §10-3)
- «all in trong poker là gì» 10 = natural8 2 · reddit 1 · wikipoker·ggpoker 2 · 주식·일반 3 · facebook 2 — PAA 없음 · «side pot poker» = 영어 6 + reddit 영어 2 + pokerqz 용어집 1 + 앱 1 → 베트남어 side pot 산수 해설 사실상 0.
- 경쟁 §13 오류(L-A §4-D · 축어 근거): **T1** «tính tới thời điểm tất tay»(올인 시점 팟으로 지분 고정 — 실제는 누적 기여액 기준 · A 100 올인 뒤 B·C 각 100 콜이면 A도 300을 겨룬다) · **D1** «Số chip dư sẽ tạo thành side pot»(2인 200 vs 100이면 side pot이 아니라 100 반환) · **P1** FAQ «Không, họ chỉ tranh main pot»(모든 올인 플레이어를 최단 스택처럼 일반화 — A100/B200/C500/D500이면 B도 올인이면서 side pot 1에 참가). P1의 30·90·90 예시(main 90 · side 120)는 맞다.
- 더 줄 것 3: ① **2인 반환 → 3인 side pot → 4인 다중 pot → 복수 숏 올인** 순서(EN L71 · L77~87 · L93~109 · L152~170 — 경쟁 글은 3인 예시만) ② 재오픈 결정표(EN L178~188 · SERP 0) ③ 무언 고액 칩·선언 규정(EN L61·L65).
- PAA(축어 · 형식 참고만): Thuật ngữ all in là gì? · Chơi all in là gì?. related(all in trong poker là gì): Luật chơi poker 2 lá · Luật chơi Poker cơ bản · Luật raise trong poker(→ betting-actions 앵커) · Allin Poker.
- AC(축어): all in poker rules · all in poker meaning · all in poker chart(도구 · 쓰지 않음) · side pot poker · side pot poker rules · side pot texas holdem · side pot calculator(쓰지 않음) · side pot meaning poker.

### 현지 추가
1. **H3 «Hai người all-in lệch stack: phần chip dư được trả lại»**(H2 3 안 · 3인 예시 앞) — 사실 = EN L71 마지막 문장(«If just one player is above the cap, there is nobody to contest a side pot and the excess comes straight back to them as an uncalled bet») + tldr «a lone extra bet is simply returned» + FAQ L237. 숫자는 EN 3인 표의 스택만 재사용: A 100 all-in, B 300이 300을 밀어 넣어도 **겨루는 pot = 100 × 2 = 200**, B의 **200은 그대로 돌려받는다**(side pot 아님 — 겨룰 상대가 없다). 출처 = EN L71·L237 + L-A §4-D(D1 교정 검산 «200 대 100이면 200이 경합 팟, 매칭되지 않은 100은 반환»). 사이트 이름 지목 금지(«Nhiều bài viết gọi phần dư này là side pot — không đúng» 톤까지만).
2. **Mistake 1(L211~212) 직답 한정어**: «người all-in với stack ngắn nhất» 또는 «phần vượt mức all-in của bạn» — EN 4인 표 L104~106에서 B(200 올인)가 side pot 1에 참가하는 것과 모순되지 않게(L-A §6-E) · 새 규칙 없음 · EN L156(betting-actions) «each all-in caps only its own layer» 문장 재사용 허용.
3. **L65 무언 고액 칩**: EN 축어로 갈라 쓴다 — «đối diện một mức bet → chỉ là call · chưa có bet → là bet đúng mệnh giá lá chip đó» (P0 · 현 vi 문장 폐기).
4. FAQ 추가 없음(측정된 vi 질문 없음 · EN 7문 유지).

### 확정 카피 — (§6′-5)

### 소유표
- 주인: «all in poker» · «all in trong poker là gì» · «luật all in poker» · «side pot (pot phụ)» · «table stakes» · «mở lại vòng cược» · «all-in showdown».
- 금지 헤드: §0-6 + «push fold / all in or fold»(계산기 ⑨) · «side pot calculator» · «buy in»(🅴) · 단독 «all in là gì» · «thuật ngữ all in».

### §13 자리
L43~47(용어 표) · L61(TDA 45-A·45-B·44 · WSOP 92) · L63(K♠10♣7♦4♥2♣ 보드 이미지) · L77~87(3인: 100·300·300 · main 100×3 = 300 · side 50×2 = 100 ✔) · L93~109(4인: 100·200·500·500 → main 100×4 = 400 · side1 100×3 = 300 · side2 300×2 = 600 · 합 1.300 — 🔴 손검산 10-09: 400+300+600 = 1.300 ✔ · 기여 합 100+200+500+500 = 1.300 ✔) · L119(47-B · half a bet) · L125~133($1/$2 · bet $10 · all-in $14 = +$4 < full raise $20 · C 최소 $14+$10 = $24 · Rules 176·175) · L137~140 · L148(Rule 47) · L152~160($10 · $14(+$4) · $21(+$7) → $11 ≥ $10 재오픈 · 중간 콜러는 $7만) · L164~168(표: $14/$18 → $8 ✗ · $14/$21 → $11 ✓ · $15/$24 → $14 ✓ — 🔴 손검산: $18−$14 = $4 · 4+4 = 8 ✔ / 21−14 = 7 · 4+7 = 11 ✔ / 15−10 = 5 · 24−15 = 9 · 5+9 = 14 ✔) · L180~186(Rule 48) · L196(Rule 149) · L218($80 · $400) · L221(Rule 16) · L237(Rule 154) · L245(Rule 149) · L249(Rules 210·211) · L257(Rule 149 · TDA 16·17) · L261.
- 현지 추가 1 수치(100 vs 300 → pot 200 · 반환 200)도 C 전사 대조 대상.

### 경험담 자리
L25~31(숏스택 쇼브 → 콜 → 리레이즈 → 딜러가 칩을 두 더미로 — 첫 라이브 캐시 올인에서 무엇을 이길 수 있는지 몰랐다) · L117(재오픈 규칙으로 두 사람이 5분 언쟁 · 둘 다 틀렸다) · L221(side pot 쇼다운에 지자마자 카드를 던진 숏스택 — main pot은 아직 그의 것이었다).

### 하지 말 것
- TDA 2024 Rule 44·45-A·45-B·47·47-B·48·16 · WSOP Tournament Rule 92 · Live Action Rule 149·154·175·176·210·211 번호 유지 · 재오픈 표·복수 숏 올인 표 수치 변경 금지 · «tố» 금지(«raise» · «re-raise» = «raise lại» 허용) · «pot phụ»를 본문 기본어로 쓰지 않는다(side pot 정본 · 병기 1회).

---

## 6. holdem-showdown-rules — EN updated 2026-10-06 (트래픽 6순위 · 정의 입구)

### 메타 (EN 축어)
- title: Texas Hold'em Showdown Rules: Who Shows First, Mucking, and Slow Rolling
- seoTitle: Who Flips First? Texas Hold'em Showdown Rules & Mucking
- desc: Who shows cards first at showdown? Can you muck without showing? Hold'em showdown rules — last aggressor, cards speak, slow roll, and all-in rules explained.
- tldr: In a non-all-in tournament showdown, the last river aggressor shows first; if the river checks through, the first active player left of the button does. With an all-in, all remaining hands must be shown once betting is complete. A river caller who retains or tables their cards can request the last aggressor's hand. Cash games follow house rules for showing and mucking.
- tags(EN): texas holdem showdown rules · who shows cards first poker · can you muck at showdown poker · slow roll poker · all in showdown rules
- readTime 10 min → «10 phút» · image `/images/holdem-showdown-rules-hero.webp` · date 2026-06-15
- 현 vi: seoTitle «Ai lật bài trước? Luật showdown & muck trong Poker» · masterUpdated 2026-07-12 · updated 2026-10-04 · 🔴 «người chủ động cuối» 16(→ «người bet hoặc raise cuối cùng (last aggressor)») · «theo» 37(동사 용법은 허용 · «Bị theo (call)» FAQ 질문형은 «Bị call» 로) · 첫 H2가 곧바로 «누가 먼저»라 showdown 정의 입구 없음(L-A §6-F)

### 구조 (EN L##)
- 도입 L25~31(«This exact standoff…» · L31 ==…==)
- H2: L33 Who Has to Show First(L35 game-order thumb · `<div>` 표 L37~45 · 이미지 L47 · L49 ==g:) → L53 Can You Muck Without Showing(L55 · 리스트 2 L58~59 TDA 16 · L61 ==r: TDA 18 · Live Action 147 · L63 WSOP 72) → L67 Checked River Order(L69 · L71 예시 · L73 ==g:) → L77 All-In Showdown(L79 TDA 16 · Live Action 149 · `<div>` 표 L81~89 WSOP 143 · L91 · L93 링크 2) → L97 Cards Speak(이미지 L99 · L101 · L103 · L105 TDA 14 · L107 예시) → L111 Slow Rolling(L113 · L115 WSOP 47 · TDA 70 · 이미지 L117 · L119 ==r: · L121 tanking) → L125 Win Without Showdown(L127 ==g: · L129 · L131) → L135 Etiquette(H3 ×4 L139~153 · TDA 14 · WSOP 109·110 · TDA 18-A·18-B · WSOP 109 · WSOP 117) → readnext L157(game-order · all-in-rules) → FAQ L162(7문) → Related L194(카드 3: rules-for-beginners · split-pot-rules · tiebreak-rules)
- 🔴 마무리 H2 없음 — 추가하지 않는다.
- FAQ 7: who shows first · must show if called · muck without showing · slow roll why bad · all-in who shows first · cards speak · win without showdown

### 링크
L35 game-order(thumb) · L93 all-in-rules·split-pot-rules · readnext game-order·all-in-rules · Related 3(rules-for-beginners · split-pot-rules · tiebreak-rules — 카드 라벨 «So bài cùng hạng» §0-5) → `/vi/` 1:1.

### 키워드
| 검색어 | 볼륨 | 어디에 |
|---|---:|---|
| showdown là gì | 390(🟡 섞임 · organic 0/8 · PAA-S «Showdown là gì?» 보충) | 🔴 seoTitle·H1 금지 · **tags 허용**(섞임 규칙) · 결합형 «showdown poker là gì»가 H2 0(현지 추가) |
| so bài poker | 30 | seoTitle 또는 desc «so bài» · tags |
| showdown poker · lật bài poker | 10 · 10 | title «showdown (lật bài)» · tags |
| muck là gì · muck trong poker là gì | 70(🔴 오염 0/7) · 0 | H2 2 «Có được muck không lật bài khi showdown không?» · tags «muck trong poker là gì»(결합형) |
| slow roll | 40(포커 확정 안 함) | H2 6 «Slow roll trong poker là gì?» · tags «slow roll poker» |
| AC: thứ tự lật bài poker · lật bài tẩy là gì · lật bài poker trên dưới · showdown poker rules · showdown poker meaning | `-` | H2 1 «Ai phải lật bài trước khi showdown?» · 현지 추가 FAQ «Thứ tự lật bài poker…» · «Lật bài tẩy là gì» |
- 함정: «showdown là gì» = rap·Pokemon Showdown·Hunt: Showdown·LCK → 단독은 tags까지만 · «showdown poker» AC = 프라하 클럽·룸·칩 상품 → «rules/meaning» 의도만 · «muck là gì» = 생존 게임 Muck → 단독 금지 · «luật bài poker»(AC) = 족보 의도(hand-rankings) · «kicker»·«chia pot» 헤드 = 🅱 몫.

### 현지 SERP (L-A §0-B · §3-E · §4-B W5·P2·E1 · §4-D · §6-F · §7-F · §10-1)
- «showdown là gì» organic 0/8 포커 · 보충 «showdown poker là gì» PAA = Showdown là gì? · Chia bài poker gọi là gì?(→ game-order) · Poker là môn thể thao gì?(제외). W5(wikipoker «Show hand là gì?» · 오픈 순서·muck·예절·전략 묶음 · 🔴 «bạn có quyền yêu cầu xem bài họ đã muck» = 열람권 범위 누락 — TDA는 자기 카드 보유·공개한 river caller의 last aggressor 열람권만 보장) · P2(pokervietnam showdown 3.451단위 · 베스트5·키커 예시 구체 · 🔴 «thùng nhỏ nhất có thể» 오류: 보드 K♠Q♠8♠2♠J♦ + A♠7♥ = A-high 플러시 · 고객 프로그램 홍보 이미지) · E1(en.wikipedia Showdown · Robert's Rules — 현행 TDA 대체로 쓰지 않음).
- 더 줄 것 3: ① 체크다운 순서 = 버튼 왼쪽 첫 생존자(EN L67~73) ② cards speak 예시(EN L107 · §13) ③ muck·열람 요청 조항(TDA 14·16·18·18-A·18-B · WSOP 72·109·117·143·147·149)을 **토너먼트 / 캐시(하우스 룰)** 로 갈라 적기 — 경쟁 글 공통 약점(§5).
- PAA(보충 · 축어): Showdown là gì?. AC(축어): thứ tự lật bài poker · lật bài poker trên dưới · lật poker · lật bài tẩy là gì · muck trong poker là gì · showdown poker rules · showdown poker meaning.

### 현지 추가
1. **H2 «Showdown trong poker là gì?»**(첫 H2 앞 · 짧은 정의 입구 · L-A §7-F) — 3~5문장 = river 베팅이 끝난 뒤 2명 이상 남았을 때 패를 비교하는 단계(EN game-order L139 문장) + tldr 4문장 재서술(새 규칙 없음) + «showdown (lật bài)» 첫 병기 자리.
2. **FAQ «Thứ tự lật bài poker là gì — ai lật trước, ai lật sau?»**(AC 축어) — 답 = EN H2 1·3 요지(last aggressor → 콜러 · 체크다운이면 버튼 왼쪽 첫 생존자부터 시계방향) 2~3문장 · 토너먼트 올인은 FAQ 5로.
3. **FAQ «Lật bài tẩy là gì — khi nào bạn phải lật bài tẩy?»**(AC 축어) — 답 = showdown에서만 의무(last aggressor · 콜된 river bet · 토너먼트 올인 TDA 16) + 모두 폴드하면 안 보여도 된다(EN L127~129).
4. **H2 1 표 아래 또는 H2 3 안 비교 2행**(fr 동형 · B 재량 · 표 추가 시 진행 파일 기록): «Nhiều nơi viết: người raise cuối ở vòng trước lật trước» vs «Luật TDA 2024 (Rule 17): người còn bài đầu tiên bên trái nút dealer» — 출처 사이트 이름 쓰지 않는다.

### 확정 카피 — (§6′-6)

### 소유표
- 주인: «showdown poker (là gì)» · «thứ tự lật bài poker» · «lật bài poker / so bài poker» · «ai lật bài trước» · «muck trong poker là gì» · «slow roll poker» · «cards speak» · «lật bài tẩy».
- 금지 헤드: §0-6 + «chia pot / split pot»(split-pot-rules — 앵커만) · «kicker / so bài cùng hạng»(tiebreak-rules — 카드 라벨만) · «luật bài poker»(족보) · 단독 «muck là gì» · «showdown là gì»는 tags 1자리까지.

### §13 자리
L23(imageAlt: 4♥7♣Q♦K♠2♥ · A♠K♥ = 원페어 K · 키커 A — 🔴 손검산 10-09: A♠K♥ + 4♥7♣Q♦K♠2♥ = K♥K♠A♠Q♦7♣ 원페어 K 키커 A·Q·7 ✔ · 스트레이트·플러시 없음 ✔) · L41~43(표 · TDA 16 · Live Action 149) · L47(J♥9♠4♦2♠K♥ 이미지) · L59·L61·L63(TDA 16·18 · Live Action 147 · WSOP 72) · L71(SB → BB → BTN 순서) · L79·L85~87(Live Action 149 · WSOP 143) · L99(8♠9♣10♥J♦Q♠ 보드 = 보드 스트레이트 Q-high — 이미지 문맥만 · 본문 주장 그대로) · L105(TDA 14) · L107(🔴 손검산 10-09: J♥10♥ + Q♥9♥8♥2♣5♦ = Q♥J♥10♥9♥8♥ 스트레이트 플러시 Q-high / K♣Q♦ = Q♦Q♥K♣9♥8♥ 원페어 Q → J♥10♥ 승 ✔) · L115(WSOP 47 · TDA 70) · L145(TDA 14 · WSOP 109·110) · L149(TDA 18-A·18-B · WSOP 109) · L153(WSOP 117) · L166~190(FAQ 조항: TDA 17-B · 16 · 18 · 18-B · 14 · WSOP 72 · 47 · TDA 70 · Live Action 149).

### 경험담 자리
L25~31(river 콜 뒤 서로 기다리는 정적 · 딜러가 번갈아 본다 · 테이블이 한숨) · L137(«the four I end up correcting most often») · L141(«You show first» — 콜러를 땀 흘리게 해 한 바퀴 동안 분위기가 식은 친선 게임).

### 하지 말 것
- TDA 2024 Rule 14·16·17·17-B·18·18-A·18-B·70 · WSOP Tournament Rule 47·72·109·110·117 · Live Action Rule 143·147·149 번호 유지 · «cash games follow house rules» 뉘앙스 유지(토너먼트 규칙을 캐시에 일반화하지 않는다) · «người chủ động cuối» 금지 · 판본(2024)은 EN 축어 — 2026판 대조는 EN-먼저 후보(L-A §4-D).

---

## 6′. 확정 카피 (Fable 서브 1회 · 2026-10-09 · 글자 수 = String.length 재측정)

> B·C는 이 절의 문구를 바꾸지 않는다(계획 §2-⑥). H2 문구는 그대로 쓰고, H2 직후 40~75단어 직답을 붙인다. «현지 추가»는 위 각 절 «현지 추가»의 사실·출처 범위 안에서만. 각 절의 «### 확정 카피 — (§6′-N)» 자리 = 이 절.

> 본체(Fable 세션) 수정 2건: ① all-in tldr 셋째 문장 «Phần chip dư mà từ hai stack…» → «Phần chip dư do hai stack lớn hơn trở lên cược vượt mức đó…»(문장 구조 · 사실 불변) ② game-order desc «Trọn trình tự» → «Toàn bộ trình tự»(어휘 · 151자 · 한도 안). 그 밖 서브 출력 축어.

### 6′-1. texas-holdem-rules-for-beginners
- title: Luật poker và cách chơi Texas Hold'em cho người mới: chip, tay bài và chiến thuật
- seoTitle: Luật poker dễ hơn bạn nghĩ — cách chơi Texas Hold'em từ số 0
- desc: Chưa từng chơi poker? Hướng dẫn cách chơi poker Texas Hold'em từng bước: luật chơi poker cơ bản, blind, chip, thứ hạng tay bài, bảng tóm tắt in được.
- tldr: Trong Texas Hold'em, mỗi người nhận 2 lá bài tẩy và dùng chung 5 lá bài chung. Một ván có tối đa bốn vòng cược; tay bài 5 lá mạnh nhất thắng ở showdown — trừ khi tất cả đối thủ đã fold trước đó.
- tags: luật poker · cách chơi poker · poker là gì · luật chơi poker cơ bản · texas holdem · cách chơi poker 2 lá · cách chơi poker cho người mới · luật poker cơ bản

| EN | vi H2/H3 |
|---|---|
| H3 How to play Texas Hold'em in 30 seconds | ### Cách chơi Texas Hold'em trong 30 giây |
| 1 Texas Hold'em Basic Rules | ## Luật chơi poker Texas Hold'em cơ bản là gì? |
| (현지 추가 1 · H2 1 직후) | ## Poker là gì — và poker 2 lá (Texas Hold'em) khác poker 5 lá, xì tố ở đâu? |
| 2 Beginner Flow Summary | ## Cách chơi poker Texas Hold'em: một ván diễn ra thế nào? |
| 3 How Many Players | ## Texas Hold'em chơi được bao nhiêu người? |
| 4 Who Goes First | ## Ai hành động trước trong Texas Hold'em? |
| 5 What Chips Do You Start With | ## Bắt đầu Texas Hold'em với bao nhiêu chip và chia chip thế nào? |
| 6 How Much Money | ## Nên bắt đầu Texas Hold'em với bao nhiêu tiền? |
| 7 No-Limit, Limit, or Pot-Limit | ## No-limit, limit hay pot-limit — bạn đang chơi loại Texas Hold'em nào? |
| 8 How to Deal | ## Cách chia bài Texas Hold'em |
| 9 Position — Why Where You Sit Changes Everything | ## Vị trí trong Texas Hold'em — vì sao chỗ ngồi thay đổi tất cả? |
| 10 Strategy for Beginners | ## Chiến thuật Texas Hold'em cho người mới nên bắt đầu từ đâu? |
| 11 Pot Odds | ## Pot odds — khái niệm toán duy nhất giúp người mới đỡ mất tiền |
| H3 How pot odds work (one example) | ### Pot odds hoạt động thế nào? (một ví dụ) |
| H3 The Rule of 2 and 4 | ### Ước tính nhanh xác suất trúng bài chờ — đường tắt cho người mới («quy tắc 4 và 2»는 H3 제목 금지 → 본문 1회 + `/vi/calculator` «máy tính outs» 앵커) |
| 12 Printable Cheat Sheet | ## Bảng tóm tắt luật Texas Hold'em in được |
| 13 Common Beginner Mistakes | ## Người mới chơi poker hay mắc lỗi gì? |
| H3 Mistake 1~5 | ### Lỗi 1: Nghĩ rằng phải dùng cả hai lá bài tẩy · ### Lỗi 2: Quên rằng thứ tự hành động thay đổi · ### Lỗi 3: Call vì «biết đâu bài sẽ về» · ### Lỗi 4: Chơi mọi lá Át · ### Lỗi 5: Bỏ qua vị trí |
| readnext · FAQ · Final Takeaway · Related | (자리) · ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan |

FAQ(13): 1 Chơi Texas Hold'em từng bước như thế nào? · 2 Ai hành động trước trong Texas Hold'em? · 3 Bắt đầu Texas Hold'em với bao nhiêu chip? · 4 Bắt đầu chơi Texas Hold'em với bao nhiêu tiền? · 5 Có «sảnh nhỏ» trong Texas Hold'em không — A-2-3-4-5 tính thế nào? · 6 Texas Hold'em có bao nhiêu tay bài khởi đầu khác nhau? · 7 Làm cách nào để chơi poker dễ hiểu — phiên bản đơn giản nhất cho người mới hoàn toàn? (= EN FAQ 7 · PAA 축어) · 8 Blind trong Texas Hold'em nghĩa là gì — giải thích cho người mới hoàn toàn? · 9 Luật chơi poker cơ bản — phiên bản rút gọn là gì? (= EN FAQ 9) · 10 Cần bao nhiêu người để chơi Texas Hold'em? · 11 No-limit trong Texas Hold'em nghĩa là gì? · 12 Một ván Texas Hold'em kéo dài bao lâu? · 13 [추가] Thùng trong poker là gì? (정의 1줄 + hand-rankings·flush-vs-straight 앵커)
- 1~12 = EN FAQ 1~12 순서 대응. FAQ 5 답의 본문 표기 «sảnh thấp nhất A-2-3-4-5 (the wheel)»(질문만 «sảnh nhỏ» 검색형).
- 흡수: luật poker → seoTitle 선두·title·tags / cách chơi poker → desc·title·H2 2·tags / poker là gì → 현지 추가 H2·tags / luật chơi poker (cơ bản) → desc·H2 1·FAQ 9·tags / texas holdem → title·seoTitle·tags / hướng dẫn chơi poker → desc / cách chơi poker 2 lá → 현지 추가 H2·tags / cách chia bài poker → H2 8 / cho người mới · đơn giản → tags·FAQ 7 / chip · 1 chip bằng bao nhiêu → H2 5(40 chip vs 200 1문장) / luật poker quốc tế → H2 1 직답 «luật chuẩn quốc tế» 1회 / PAA dễ hiểu → FAQ 7 · Thùng → FAQ 13 · chia bài → H2 8 본문.

### 6′-2. holdem-game-order
- title: Cách chơi Texas Hold'em: trình tự một ván từ blind đến showdown
- seoTitle: Đến lượt ai cược? — Trình tự chơi poker: flop, turn, river
- desc: Đến lượt ai — và ai cược trước? Toàn bộ trình tự chơi Texas Hold'em: blind, preflop, flop, turn, river, showdown và ai hành động trước ở mỗi vòng cược.
- tldr: Ở preflop, người ngồi bên trái big blind hành động trước. Ở flop, turn và river, người còn bài đầu tiên bên trái nút dealer đi trước — thường là small blind (heads-up thì đảo ngược). Một ván chạy theo thứ tự blind → bài tẩy → preflop → flop → turn → river → showdown, với tối đa bốn vòng cược.
- tags: flop turn river · trình tự chơi poker · preflop flop turn river · flop trong poker là gì · river trong poker là gì · người chia bài trong poker gọi là gì · ai hành động trước trong poker

| EN | vi H2/H3 |
|---|---|
| H3 One hand in 15 seconds | ### Một ván bài trong 15 giây: preflop, flop, turn, river, showdown |
| 1 What Is Texas Hold'em? | ## Texas Hold'em là gì? |
| 2 Before the Deal: The Button and the Blinds | ## Trước khi chia bài: nút dealer và blind đặt ở đâu? |
| 3 Stage 1 — Preflop | ## Giai đoạn 1 — Preflop: quyết định đầu tiên định hình cả ván |
| H3 Solid starting hands for beginners | ### Người mới nên chơi những bài tẩy nào ở preflop? |
| 4 Stage 2 — The Flop | ## Giai đoạn 2 — Flop trong poker là gì? Ba lá bài chung đầu tiên |
| 5 Stage 3 — The Turn | ## Giai đoạn 3 — Turn trong poker là gì? Bức tranh rõ dần |
| 6 Stage 4 — The River | ## Giai đoạn 4 — River trong poker là gì? Lá cuối, quyết định cuối |
| 7 Stage 5 — Showdown | ## Giai đoạn 5 — Showdown: tay bài 5 lá mạnh nhất thắng |
| 8 Who Bets First in Texas Hold'em? | ## Ai cược trước trong Texas Hold'em? |
| 9 The Whole Order at a Glance | ## Toàn bộ trình tự chơi poker gói trong một bảng trông thế nào? |
| H3 ⚡ A one-line memory hook for each street | ### ⚡ Một câu để nhớ cho mỗi vòng cược |
| 10 Follow One Full Hand, Step by Step | ## Theo dõi trọn một ván bài, từng bước một |
| H3 Preflop / Flop: K♦ 9♠ 3♥ / Turn: 2♣ / River: A♥ / Showdown | ### Preflop · ### Flop: K♦ 9♠ 3♥ · ### Turn: 2♣ · ### River: A♥ · ### Showdown |
| 11 The 7 Moves You Can Make | ## 7 hành động bạn có thể làm trong poker là gì? |
| 12 The 10 Poker Hand Rankings | ## 10 thứ hạng tay bài poker bạn cần thuộc |
| 13 5 Mistakes Every Beginner Must Avoid | ## 5 lỗi nào người mới phải tránh? |
| H3 1~5 | ### 1. Chơi gần như mọi ván · ### 2. Bỏ qua vị trí · ### 3. Đuổi theo draw bất chấp pot odds · ### 4. Bất ngờ bluff river bằng tay bài yếu · ### 5. Đọc sai tay bài của mình ở showdown |
| 14 How to Start Playing Today | ## Bắt đầu chơi ngay hôm nay thế nào? |
| readnext · FAQ · 3 Things to Remember · Related | (자리) · ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan |

- 🔴 H2 8 직답 첫 문장: EN L157 굵은 단락을 받아 «người ngồi ngay bên trái big blind — gọi là Under the Gun (UTG) — hành động trước ở preflop»(용어 라벨만 추가 · 새 규칙 없음).

FAQ(13): 1 Trình tự chơi Texas Hold'em chính xác là gì? · 2 Ai hành động trước trong poker? · 3 Sau flop, ai cược trước? · 4 Ở showdown, ai lật bài trước? · 5 Preflop và flop khác nhau thế nào? · 6 Check và call khác nhau ở đâu? · 7 Có bắt buộc dùng cả hai lá bài tẩy khi showdown không? · 8 Pot odds là gì? · 9 Khi nào nên all-in? · 10 Một ván bài có bao nhiêu vòng cược? · 11 Vì sao dealer phải «đốt» (burn) một lá trước flop, turn, river — và đốt bao nhiêu lá? · 12 [추가] Chia bài poker gọi là gì? Dealer và nút dealer khác nhau thế nào? · 13 [추가] Làm cách nào để chia bài trong poker? (3문장 + beginners H2 8 앵커)
- 1~11 = EN FAQ 1~11 순서 대응.
- 흡수: flop turn river → seoTitle·H2 4·5·6·tags / flop·river·turn trong poker là gì → H2 4·6·5·tags / preflop flop turn river → H3 15초·desc·tags / người chia bài … gọi là gì · PAA chia bài gọi là gì → FAQ 12·tags / PAA chia bài → FAQ 13 / dealer button → H2 2 / trình tự chơi poker(미측정) → seoTitle·desc·tags(볼륨 주장 없음) / ai hành động trước(훅) → desc·H2 8·FAQ 2·3·tags / EN PAA burn → FAQ 11 / thứ tự bài poker → H2 12 «thứ hạng» 형(헤드 0).

### 6′-3. holdem-betting-actions
- title: Các hành động cược trong Texas Hold'em: check, call, raise, fold
- seoTitle: Check, call hay fold? — Luật raise và hành động cược poker
- desc: Đến lượt bạn mà đầu óc trống rỗng? Check, call, raise, fold trong poker là gì, luật min-raise tính thế nào và bạn được raise lại bao nhiêu lần.
- tldr: Texas Hold'em có 5 hành động cược: check (nhường lượt không mất chip), bet (mở vòng cược), call (trả bằng mức cược), raise (tăng cược — mức raise tối thiểu bằng khoản bet hoặc raise đủ mức gần nhất) và fold (bỏ bài). Bạn chỉ được check khi trước mặt không có khoản cược nào đang mở — ở preflop, thường chỉ big blind (hoặc người đã đặt straddle còn hiệu lực) được check.
- tags: check trong poker là gì · call trong poker là gì · raise trong poker là gì · fold trong poker là gì · luật raise trong poker · min raise trong poker · khi nào được check trong poker · string bet

| EN | vi H2/H3 |
|---|---|
| H3 Quick summary | ### Tóm tắt nhanh |
| 1 What Are the 5 Betting Actions | ## 5 hành động cược trong Texas Hold'em là gì? |
| 2 What Is a Check in Poker? | ## Check trong poker là gì? |
| 3 When Can You Check in Poker? | ## Khi nào được check trong poker? |
| 4 What Is a Call in Poker? (Check vs Call) | ## "Call" trong poker có nghĩa là gì? Check và call khác nhau ở đâu |
| 5 What Is a Fold — Can You Fold at Any Time? | ## Fold poker là gì — có được fold bất cứ lúc nào không? |
| 6 What Is a Min-Raise? Bet & Raise Rules | ## Raise trong poker là gì — min-raise tính thế nào? (직답 첫 문장 = raise 정의 · EN L54·L118) |
| 7 How Many Times Can You Raise | ## Được raise bao nhiêu lần trong poker? |
| 8 What Does Going All-In Mean? | ## Đi all-in nghĩa là gì? |
| 9 Knowing the Actions Is Step One | ## Biết hành động mới là bước một — chọn hành động nào là chiến thuật |
| 10 Live Betting Mistakes I See Every Week | ## Những lỗi cược ở bàn live tôi gặp mỗi tuần |
| H3 Mistake 1~4 | ### Lỗi 1 — Call trong khi có thể check · ### Lỗi 2 — "Call"... à không, "raise"! · ### Lỗi 3 — Big blind fold một flop miễn phí · ### Lỗi 4 — Một lá chip đẩy ra trong im lặng |
| readnext · FAQ · Related | (자리) · ## Câu hỏi thường gặp · ## Bài viết liên quan (마무리 H2 없음 — 추가 금지) |

FAQ(10): 1 Đã check rồi có được raise trong poker không? · 2 Có được raise chính khoản bet của mình không? · 3 Được raise bao nhiêu lần trong Texas Hold'em? · 4 Fold khi chưa đến lượt có được không? · 5 Ở preflop có được check không? · 6 Có được raise sau khi một người đã all-in không? · 7 String bet trong poker là gì? · 8 Limp trong poker nghĩa là gì? (EN 1줄 + limping 앵커) · 9 [추가] Bet trong poker là gì? · 10 [추가] Cách tính min raise trong poker như thế nào? (EN L123~128 숫자 축어)
- 1~8 = EN FAQ 1~8 순서 대응. 본문 용어: H2·FAQ의 check/call/raise/fold = 검색 표기이자 본문 정본(§0-4) — 첫 등장 병기 «call (theo)» · «raise (tố)» · «fold (bỏ bài)»는 H2 1 표 또는 용어 1행(현지 추가 4)에서.
- 흡수: fold trong poker là gì · PAA Fold poker là gì → H2 5·tags / check trong poker là gì → H2 2·tags · khi nào được check → H2 3·FAQ 5·tags / call … · PAA "Call" → H2 4·tags / raise … · luật raise · min raise → H2 6·seoTitle·tags / check·call·raise·fold poker → seoTitle·desc / AC cách tính min raise → FAQ 10 · related Bet → FAQ 9 · thuật ngữ → `/vi/glossary` 앵커 1회 / lệnh X → 본문 1회 / được raise bao nhiêu lần → H2 7·FAQ 3 / string bet → FAQ 7·tags / 단독 X là gì · 3bet/4bet/cbet · check raise · khi nào nên fold → 헤드 0.

### 6′-4. holdem-blind-meaning
- title: Blind trong poker là gì? Small blind và big blind, giải thích dễ hiểu
- seoTitle: Chưa thấy bài đã cược? — Small blind, big blind trong poker
- desc: Hai người mất chip trước khi thấy bài — vì sao? Small blind và big blind là gì, ai đặt, SB so với BB, big blind ante và luật blind khi heads-up.
- tldr: Blind là khoản cược bắt buộc đặt trước khi bài được chia. Small blind ngồi ngay bên trái nút dealer, big blind ngồi bên trái small blind (khi chơi heads-up, chính người cầm nút dealer đặt small blind). Big blind — thường gấp đôi small blind — là đơn vị cược của cả bàn.
- tags: blind trong poker là gì · big blind là gì · small blind là gì · small blind big blind · ante trong poker là gì · big blind ante · blind texas holdem

| EN | vi H2/H3 |
|---|---|
| `> **Quick answer**` L25 | `> **Trả lời nhanh**` |
| H3 The core numbers | ### Những con số cốt lõi |
| 1 What Is a Blind — and Why Does It Exist? | ## Blind trong poker là gì — và vì sao phải có? |
| 2 What Is the Small Blind? | ## Small blind là gì? |
| 3 What Is the Big Blind? | ## Big blind là gì? |
| 4 Small Blind and Big Blind Rules: Who Posts, When | ## Luật small blind và big blind: ai đặt, khi nào? |
| 5 How Big Are the Blinds? Cash & Tournaments | ## Blind lớn bao nhiêu? Mức cược trong cash game và giải đấu |
| 6 What Is a Big Blind Ante? (Plus the Straddle) | ## Ante trong poker là gì? Big blind ante (và straddle) hoạt động thế nào |
| 7 Who Posts the Blinds in Heads-Up? | ## Ai đặt blind khi chơi heads-up? |
| 8 What Happens If You Miss Your Blind? (Dead Blinds) | ## Lỡ lượt blind thì sao? (dead blind) |
| 9 How to Play From the Blinds — 30-Second Version | ## Chơi từ vị trí blind thế nào — phiên bản 30 giây |
| readnext · FAQ · The Takeaways · Related | (자리) · ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan |

FAQ(10): 1 Vì sao phải trả blind trước khi thấy bài? · 2 Big blind hay small blind hành động trước? · 3 Small blind có luôn đúng bằng một nửa big blind không? · 4 Không ai raise thì big blind có được check không — và có được raise không? · 5 Đã đặt blind rồi có được fold không? · 6 Ai đặt blind khi chơi heads-up? · 7 Lỡ lượt blind thì chuyện gì xảy ra? · 8 «Big blind» có giống «the blinds» (các blind) không? · 9 [추가] Ai phải trả ante trong poker — ante và big blind ante khác nhau thế nào? · 10 [추가] Vì sao gọi là blind? («mù» 풀이 자리)
- 1~8 = EN FAQ 1~8 순서 대응(4 = EN «can the BB just check» + option 답).
- 흡수: blind trong poker là gì → H2 1·title·tags / big blind là gì · small blind là gì → H2 3·H2 2·tags / small blind · big blind · blind poker · reddit 제목 → seoTitle·desc·tags / ante trong poker là gì · ante poker · big blind ante là gì → H2 6·FAQ 9·tags / related rules → H2 4 · why blind → FAQ 10 · BB ante → FAQ 9 / heads-up → H2 7·FAQ 6(헤드 0) / dead blind → H2 8·FAQ 7 / straddle → H2 6 괄호 + 앵커만 / Các vị trí → positions 앵커 / 단독 blind·ante là gì · mù lớn/nhỏ → 0.

### 6′-5. holdem-all-in-rules
- title: Luật all-in trong Texas Hold'em: side pot, raise lại và showdown
- seoTitle: All-in rồi thắng được gì? — Luật all-in poker và side pot
- desc: Đẩy hết chip vào giữa mà không rõ thắng được gì? Luật all-in Texas Hold'em: table stakes, side pot, khi nào được raise lại và thứ tự showdown.
- tldr: All-in nghĩa là cược toàn bộ chip bạn đang có. Bạn chỉ thắng được từ mỗi đối thủ đúng phần mình đã bỏ vào ngang họ (main pot). Phần chip dư do hai stack lớn hơn trở lên cược vượt mức đó tạo thành side pot chỉ họ được tranh; nếu chỉ một người cược dư thì phần đó được trả lại. Trong no-limit và pot-limit, một cú all-in nhỏ hơn một raise đủ mức KHÔNG mở lại vòng cược cho người đã hành động — trừ khi nhiều cú all-in ngắn cộng lại đạt ít nhất một raise đủ mức so với số chip người đó đã bỏ vào.
- tags: luật all in poker · all in poker · all in trong poker là gì · side pot poker · side pot texas holdem · all in poker rules · table stakes

| EN | vi H2/H3 |
|---|---|
| 1 What Does "All-In" Mean in Texas Hold'em? | ## All-in trong poker là gì? (직답에 «all in poker meaning» 의도) |
| 2 How to Declare All-In | ## Tuyên bố all-in thế nào cho đúng luật? |
| 3 How Do Side Pots Work? (Why the All-In Player Gets Capped) | ## Side pot trong poker hoạt động thế nào? (Vì sao người all-in bị giới hạn) |
| (현지 추가 1 · 3인 예시 앞) | ### Hai người all-in lệch stack: phần chip dư được trả lại |
| H3 3-Player Example (Standard) | ### Ví dụ 3 người (tiêu chuẩn) |
| H3 4-Player Multi-Stack Example | ### Ví dụ 4 người, nhiều mức stack |
| 4 Does Going All-In Reopen the Betting? | ## All-in có mở lại vòng cược không? — Luật nhiều người hiểu sai nhất |
| H3 Advanced Case: Multiple Short All-Ins | ### Trường hợp nâng cao: nhiều người cùng all-in ngắn thì sao? |
| H3 Quick Decision Guide | ### Bảng quyết định nhanh — cú all-in này có mở lại vòng cược không? |
| 5 All-In Showdown Rules | ## Luật showdown khi có all-in |
| 6 What Happens If You Go All-In Wrong? — 5 Mistakes | ## All-in sai thì chuyện gì xảy ra? — 5 lỗi cần tránh |
| H3 Mistake 1~5 | ### Lỗi 1: Nghĩ rằng người all-in stack ngắn nhất có thể thắng side pot (한정어 · 현지 추가 2) · ### Lỗi 2: Không biết luật được raise lại · ### Lỗi 3: Lấy thêm chip từ túi giữa ván · ### Lỗi 4: Muck bài quá vội · ### Lỗi 5: All-in vì cay cú |
| readnext · FAQ · Related | (자리) · ## Câu hỏi thường gặp · ## Bài viết liên quan (마무리 H2 없음 — 추가 금지) |

FAQ(7 · 추가 없음): 1 Có được all-in ít hơn big blind không? · 2 Thắng phần all-in nhưng thua side pot thì sao? · 3 All-in có buộc phải lật bài không? · 4 Có được run it twice khi all-in trong poker không? · 5 Luật «table stakes» chính xác là gì? · 6 Hai người all-in với số chip khác nhau thì ai lật bài trước? · 7 Luật all-in trong giải đấu và cash game có khác nhau không?
- 흡수: luật all in poker · all in poker rules · reddit 제목 → seoTitle·title·tags / all in poker → seoTitle·tags / all in trong poker là gì · natural8 제목 · meaning → H2 1·tags / side pot 4종 → H2 3+H3·tags(«pot phụ» 병기 1회) / 재오픈 → H2 4+H3 2 / table stakes → FAQ 5·tags / all-in showdown → H2 5·FAQ 3·6 / 현지 추가 1 → H3(100 vs 300 → pot 200 · 반환 200) / 단독 all in là gì · push fold · side pot calculator · buy in → 0.

### 6′-6. holdem-showdown-rules
- title: Luật showdown (lật bài) trong Texas Hold'em: ai lật trước, muck và slow roll
- seoTitle: Ai lật bài trước? — Luật showdown poker, so bài và muck
- desc: Ai lật bài trước khi showdown? Có được muck mà không lật không? Luật so bài Hold'em: last aggressor, cards speak, slow roll và luật all-in.
- tldr: Ở showdown trong giải đấu không có all-in, người bet hoặc raise cuối cùng ở river lật trước; nếu river check hết, người còn bài đầu tiên bên trái nút dealer lật trước. Khi có all-in, mọi tay bài còn lại phải được lật sau khi vòng cược kết thúc. Người đã call ở river và còn giữ hoặc đã ngửa bài có quyền yêu cầu xem bài của người bet hoặc raise cuối cùng. Cash game áp dụng luật nhà về lật bài và muck.
- tags: showdown poker · luật showdown poker · so bài poker · lật bài poker · muck trong poker là gì · slow roll poker · thứ tự lật bài poker · showdown là gì

| EN | vi H2/H3 |
|---|---|
| (현지 추가 1 · 첫 H2 앞) | ## Showdown trong poker là gì? |
| 1 Who Has to Show Cards First at Showdown? | ## Ai phải lật bài trước khi showdown? |
| 2 Can You Muck Without Showing? | ## Có được muck không lật bài khi showdown không? |
| 3 Showdown Order When Everyone Checked the River | ## Cả bàn check ở river thì ai lật bài trước? |
| 4 All-In Showdown Rules — Does the All-In Player Show First? | ## Luật showdown khi có all-in — người all-in có phải lật trước không? |
| 5 What Is the "Cards Speak" Rule? | ## Luật «cards speak» (bài tự nói) là gì? |
| 6 What Is Slow Rolling in Poker? | ## Slow roll trong poker là gì? |
| 7 Do You Have to Show If You Win Without Showdown? | ## Thắng mà không cần showdown thì có phải lật bài tẩy không? |
| 8 Showdown Etiquette — What Beginners Get Wrong | ## Phép lịch sự khi showdown — người mới hay sai ở đâu? |
| H3 Mistake 1~4 | ### Lỗi 1: Chờ người call lật trước · ### Lỗi 2: Muck trước khi dealer đọc bài · ### Lỗi 3: Đòi xem mọi tay bài đã bị call · ### Lỗi 4: Không biết mình được lật sớm |
| readnext · FAQ · Related | (자리) · ## Câu hỏi thường gặp · ## Bài viết liên quan (마무리 H2 없음 — 추가 금지) |

FAQ(9): 1 Ai lật bài trước khi showdown poker? · 2 Bị call ở showdown thì có phải lật bài không? · 3 Có được muck ở showdown mà không lật bài không? · 4 Slow roll trong poker là gì và vì sao bị ghét? · 5 Khi có all-in, ai lật bài trước? · 6 «Cards speak» trong poker nghĩa là gì? · 7 Thắng mà không có showdown thì có phải lật bài không? · 8 [추가] Thứ tự lật bài poker là gì — ai lật trước, ai lật sau? · 9 [추가] Lật bài tẩy là gì — khi nào bạn phải lật bài tẩy?
- 1~7 = EN FAQ 1~7 순서 대응. 본문 첫 등장 «showdown (lật bài)»은 현지 추가 H2 0에서 — 이후 showdown/lật bài 혼용 허용(동사).
- 흡수: showdown poker (là gì) · AC rules/meaning → H2 0·title·seoTitle·tags / showdown là gì(섞임) → tags 1자리만 / so bài poker → seoTitle·desc·tags / lật bài poker → title·seoTitle·tags / AC thứ tự lật bài poker → FAQ 8·tags · lật bài tẩy là gì → FAQ 9 · ai lật bài trước → H2 1·FAQ 1 / muck trong poker là gì → H2 2·FAQ 3·tags / slow roll → H2 6·FAQ 4·tags / cards speak → H2 5·FAQ 6 / 체크다운 → H2 3 / all-in → H2 4·FAQ 5 / chia pot · kicker → 앵커·카드 라벨만.

### 6′-7. 글자 수 (본체 재측정 · `String.length`)
| slug | title | seoTitle | desc | tldr | tags |
|---|---:|---:|---:|---:|---:|
| rules-for-beginners | 81 | 60 | 149 | 194 | 8 |
| game-order | 63 | 58 | 151 | 293 | 7 |
| betting-actions | 64 | 58 | 143 | 369 | 8 |
| blind-meaning | 69 | 59 | 144 | 269 | 7 |
| all-in-rules | 64 | 57 | 142 | 493 | 7 |
| showdown-rules | 76 | 55 | 139 | 402 | 8 |
- 전부 seoTitle ≤ 60 · desc ≤ 151(한도 160) · tldr 마크다운 0 · seoTitle·title·tags 금지 헤드(오염 «X là gì» 단독 · 소유표 헤드 · mù/tố/theo/bỏ bài/pot phụ · Sảnh Thượng/bánh xe/sảnh rồng · Holdem) 0 — 스크립트 대조(10-09 14:30). tldr 길이는 EN과 같은 비율(EN all-in tldr 자체가 길다) — 조정하지 않음.
