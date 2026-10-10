# vi(베트남어) 클러스터 완결 계획 — 2026-10-08 사장님 결정

> 정본. 핸드오프에는 링크만 둔다. 단계가 끝나면 §4 표의 상태 칸만 고친다.
> 선례 = **`docs/fr-cluster-plan.md`**(10-07 · 51편 · 같은 날 배포까지 완주). 레인 운영 규격(A 준비 → B 집필 → C 마감 · 진행 파일 · 헤드 머지)은 `docs/ms-translation-lanes.md` §3~§9 + fr 계획 §4-A~§5를 그대로 쓴다 — 여기엔 «vi라 다른 점»만 적는다.

## 0. 결정 (사장님 10-08)

- 축어: *«fr처럼 50편으로 가자 · 서치와 키워드실측 잘해서 vi에 맞춤 고품질 포스팅작업하자 · 진행해»* → tr(20편 축소판)이 아니라 **fr과 같은 EN 기준 51편 완결**.
- 축어: *«아스트라도 활용을 하면서 작업하자 · 시킬거있으면 시켜 · 아스트라도 최상위 모델이니까»* → 아스트라(Codex `gpt-6-astra`)를 **조사 레인·교차 검수의 상시 한 축**으로 쓴다(§3-B). 이 계획 회차 한정 지시 — 다른 작업에 자동 적용하지 않는다(메모리 astra-subreview).
- fr 판단 3건을 그대로 승계: ① GTO 예제 13편 포함(마지막 레인 · `settled-decisions` §1-E — GSC 수동 색인 요청 안 함) ② 대회 가이드 5편 제외(apt-incheon · ept-barcelona · wpt-australia · korea-poker-marathon · wsop-2026) ③ 0단계 = 본체 · 레인 = 워크트리 병렬.
- 🔴 vi GTO 13편 포함은 «ar·vi·tr 시리즈는 사장님 판단 전 착수 금지»(`settled-decisions` §1-E 운영 메모)를 **사장님 «fr처럼 50편» 지시로 해제**한 것으로 읽었다 — 0-3 보고 때 한 줄 재확인한다.

## 1. 범위 — 51편 · 레인 7개 (fr §1과 같은 슬러그)

| 레인 | 편수 | 슬러그 | 기존 vi |
|---|---:|---|---|
| 🅰 규칙(기존 재작업) | 6 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules | 6편 전부 있음 → EN 현행으로 다시 쓴다(slug·URL 그대로) |
| 🅱 족보 | 6 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board | hand-rankings 1편 있음(재작업) |
| 🅲 확률 | 7 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting | — |
| 🅳 전략 | 8 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold | — |
| 🅴 토너먼트 | 5 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game | tournament-vs-cash 1편 있음(재작업) |
| 🅵 용어 | 6 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle | — |
| 🅶 GTO 13 | 13 | donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet · k-high-board-cbet · ace-paired-board-strategy · paired-board-strategy · low-board-check-raise · blind-battle-cbet · blind-battle-connected-board · 3bet-pot-cbet · 3bet-pot-bet-sizing · 3bet-pot-low-board | — |

- 링크가 «걸려도 되는» vi 대상 = 위 51편 + vi 도구(`/vi/calculator` · `/vi/hand-chart` · `/vi/tournaments`) + **`/vi/glossary`(배포 회차에 신설 · §3-D ① · 레인은 생길 것으로 보고 링크를 건다 — 앵커 §3-A ⑤)** + (생기면) `/vi/solver`.
- 🅶은 마지막 레인. `/vi/solver` 랜딩은 솔버 vi 배포 통지 뒤 별도 회차(§3-D ⑧) — 🅶 «Check it yourself» 링크는 솔버 앱 직접.

## 2. 재작업 방지 장치 (fr §2 ①~⑨ 승계 + vi 추가)

| # | 장치 | vi 적용 |
|---|---|---|
| ① | 0-2 SERP 51편 전부 완료 전 레인 A 금지 | `docs/keyword-bank/vi-serp/` 7레인 · 커버리지 ✗ 0 |
| ② | 0-3 소유표 먼저 | 도구가 주인인 의도(차트·계산·솔버)는 글 제목·H1·태그에 쓰지 않는다 |
| ③ | 처음부터 EN 링크 1:1 · 배포 1회 | 51편 동시 진행 |
| ④ | 0-3 고정문·용어 정본 | vi 족보·액션 번역어(thùng/sảnh/cù lũ/sám cô · tố/theo/bỏ bài · mù) = 0-2 상위 글 집계 + 기존 vi 8편 + `lib/intl.ts` vi 블록 + vi 도구 사전 |
| ⑤ | EN 기준 해시 고정 → 헤드 머지 때 diff 1회 | **`b57cb658`**(0-4 착수 10-09 · EN 51편 마지막 변경 = `628b9a52` 10-07 포함) → 헤드 머지 때 `git diff b57cb658..HEAD -- lib/posts-en/<51편>` 1회 · `masterUpdated` = 그 시점 EN `updated` |
| ⑥ | 카피는 레인 A 브리프에서 확정 | B·C는 카피 불변 |
| ⑦ | 착수 공지 MB에 «vi는 배포 해시로 한 번에» | 0-4 |
| ⑧ | 기존 vi 8편 = 이번 파이프라인 안 | 🅰 6 + 🅱 1 + 🅴 1 |
| ⑨ | 솔버 앱 vi 축어 | ✅ **솔버 vi 라이브(S-049 · 2026-10-09)** — 🅶 레인 A 전에 앱 라이브 `?lang=vi` 축어 재추출(§5 «🅶 A 앞» 행) · 영어 라벨 대체 경로는 폐기 |
| 🆕 ⑩ | **vi 오염 판정** | 0-1에서 «X là gì»·족보 이름 볼륨 다수가 포커 밖(과일·로비·속어·Tiến lên). 0-2 0단계에서 SERP 포커 결과 수로 판정하고, 오염 헤드는 카피에 쓰지 않는다 |
| 🆕 ⑪ | **다른 게임 혼동** | 베트남 «poker 5 lá·xì tố·mậu binh·tiến lên» 족보 용어(sảnh rồng 등)를 홀덤 족보 번역어로 들여오지 않는다 — 0-3 용어 정본에서 확정 |

## 3. 소유표·고정문 (✅ 0-3 확정 · 2026-10-09 · 사장님 판정 §3-D 10건 = 본체 권고 채택)

> 레인은 이 절을 **판단 없이 따른다**(§2-④). 여기 없는 용어가 필요하면 진행 파일 «신규 용어» 표에 적고 헤드가 머지 때 대조한다.
> 근거 실측(10-08): 기존 vi 8편 전문 집계(스크래치 `vi-term-usage.md` · 43개 불일치) · `lib/intl.ts` vi 블록 · 도구 2종 사전(`app/vi/{calculator,hand-chart}`) · `docs/translation-terms-vi.md`(번역 브리프 — 🔴 아래 ③④와 어긋나는 자리는 이 절이 이긴다 · 레인 A 전 브리프를 이 절에 맞춰 고친다) · 0-1 볼륨 · 0-2 L-A §4-E·§8·§10 · L-B §4-6·§8 · L-C §8 · L-D §5-A·§10 · L-E §0·§8 · L-F §4-M·§8·§11 · L-G §4-E·§8.
> ⚠ 코퍼스 빈도의 한계(아스트라 B-17): 운영사 번역판(Natural8·GGPoker vi)·reddit 자동번역·facebook을 같은 층위로 합산했고 번역 품질은 가르지 않았다 — 빈도는 «검색 표기» 판정의 보조 근거이고, 정본 결정의 1차 근거는 **볼륨(검색자가 치는 형)**이다.
> 🔴 **vi 고유 원칙 — «검색 표기»와 «본문 표기»를 나눈다**(fr §3과 같은 틀 · 방향은 반대): 검색자는 **영어 차용어**를 치고(0-1·0-2: «fold trong poker là gì» 50 · «big blind là gì» 30 · «showdown là gì» 390 / «mù»·«tố»·«theo»·«bỏ bài» 결합형 전부 `-`), 베트남어 해설 코퍼스도 액션·구조어는 영어가 우세(L-A 12편 blind 110 : mù 19 · L-D 20편 big blind 57 : mù lớn 0 · call 133 : theo cược 1). **족보만 베트남어 고유명이 코퍼스·검색 양쪽에서 표준**(thùng·sảnh·cù lũ 9/9 · «thùng phá sảnh» 1,000). 그래서 **족보 = 베트남어 정본 + 영어 병기 · 액션·구조 = 영어 정본 + 베트남어 풀이 병기**.

### 3-A. 고정문·표기

**① 구조 고정문**

| 자리 | 정본 | 근거 |
|---|---|---|
| 직답 블록 라벨 | `> **Trả lời nhanh**` | `lib/intl.ts` vi `quickAnswer` · 기존 8편 1(나머지 «Quy tắc vàng:»·«Lưu ý:» 등 임의 라벨 4 → 🅰에서 통일) |
| readnext 라벨 | `:::readnext[Đọc tiếp]` | 8편 중 6 |
| FAQ H2 | `## Câu hỏi thường gặp` | 8편 중 6(«## FAQ» 2 → 통일) · 스키마는 H2 문구와 무관 |
| 관련 글 H2 | `## Bài viết liên quan` | `intl.related` · 8편 중 5 |
| 마무리 H2 | `## Những điều cần nhớ` | 8편 1(«3 điều cần nhớ» 2 → 통일 · 개수는 라벨에 넣지 않는다) |
| readTime | `"N phút"` | 8편 전부 |
| 화자 | 1인칭 **tôi** · 독자 **bạn**(브리프 §문체) · 존칭·anh/chị 금지 | 8편 일치 |

**② 문체·조판**
- **bạn**체 명령형 훅(«Hãy nhìn… / So sánh… / Thử…») · 딱딱한 직역 금지(브리프).
- 숫자: 천 단위 **마침표**(`1.326` · `20.000`) · 소수점 **쉼표**(`2,5 BB` · `43,8%`) · **% 앞 공백 없음**(8편 «43,8%»·«23,5%» 일치) · 비율 `2,7:1`. §13 값은 불변, 구분자만 바꾼다. 계산기 사전과 동일(`19,6%`).
- 화폐 = **`$` 앞붙임**(`$1/$2` · `$14`) — ₫로 바꾸지 않는다(§13 보존 · 8편 일치).
- 카드 = 영어 랭크 문자 + 무늬 기호(`A♠ K♥ Q♦ J♣ 10♠`) · 풀어 쓸 때 «đôi Át», «lá K»(«già/đầm/bồi» 금지 — 코퍼스 0). 무늬 이름 = **chuồn · rô · cơ · bích**(L-C 코퍼스).
- 카드 T = 보드·무늬 붙은 카드 **10**(`Q♥10♥7♠` · `Q-J-10`) · 핸드 클래스·앱 스팟 이름 **T**(`JT` · `T6s`) — fr H-20과 같다.
- **preflop · postflop**(붙여 씀 · 8편 preflop 53 : pre-flop 9 → 🅰에서 통일) · 문중 **flop · turn · river 소문자**(blind-meaning만 대문자 18 → 통일).
- 족보명 = **문중 소문자**(«một đôi», «thùng») · 표·H2·카드 라벨에서만 머리글자 대문자. 8편은 `Một Đôi` 11 : `một đôi` 15로 갈렸다.
- Texas Hold'em = 곧은 아포스트로피 `'` · «Hold'em» 단독 허용 · «Holdem» 금지. 게임 이름은 **poker / Texas Hold'em**. **«xì tố»·«xì phé»는 베트남에서 포커 전반·5장 변형에 두루 쓰여 일대일 대응이 없다**(wikipoker «Poker No Limit Hold'em là một biến thể xì tố phổ biến» — 아스트라 A-2) → «다른 게임»이라 단정하지 말고 1회 고정문 «Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold'em, mỗi người nhận hai lá bài tẩy.» · 5장 변형(poker 5 lá)은 따로 명시(L-A §4-E · 0-2 «luật chơi poker» AC = 5 lá·2 lá·4 lá 변종 제안 다수).

**③ 족보** (본문 = 베트남어 정본 · 첫 등장 «vi (en)» 병기 · 이후 vi 단독 · 검색 표기는 오른쪽)

| EN | 본문 정본 | 검색 표기·병기 규칙 · 근거 |
|---|---|---|
| Royal Flush | **thùng phá sảnh hoàng gia** (royal flush) | hand-rankings 11 · 계산기 `rankNames` 축어. 🔴 **«Sảnh Thượng» 폐기**(브리프 권고였으나 beginners 2·game-order 1뿐 · 코퍼스 0/9 — wikipoker의 «thùng phá sảnh thượng»은 단독 «Sảnh Thượng»의 근거가 아니다 · 아스트라 B-2) · «sảnh rồng»·«sảnh chúa» = 별칭 1회 + 의미 고정 «(còn gọi là sảnh rồng, sảnh chúa — 10-J-Q-K-A cùng chất)»(홀덤 royal 용례 있음: wikipoker H2 «Royal Flush – Sảnh Rồng» · 그러나 «sảnh rồng» SERP 2/10 = Tiến lên/Mậu binh 13장 → **헤드 조준 금지** · §2-⑪) · 검색 «royal flush» 영어(0-1) |
| Straight Flush | **thùng phá sảnh** (straight flush) | 🔴 «thùng phá sảnh»(1,000 · «là bài gì» 140 · «poker» 110)는 코퍼스에서 SF와 royal 양쪽에 쓰인다(L-B 7/9) → hand-rankings H2 «Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu?»가 구성 조건(5장 연속 + 같은 무늬 · A-high만 royal)으로 가른다 |
| Four of a Kind | **tứ quý** (four of a kind / quads) | 단독 «tứ quý» SERP 0/10(Tiến lên) → 조준 금지 · 본문·병기만 · «thùng phá sảnh có lớn hơn tứ quý không» 20 = FAQ 축어 |
| Full House | **cù lũ** (full house) | 7/9 · «cù lũ trong poker là gì» 40 · «cù lũ poker» 30 · PAA «Cù lũ trong poker là gì?» 축어 |
| Flush | **thùng** (flush) | 9/9 · «flush poker là gì» 50 → 첫 등장 병기 필수(족보 2편) · 드로는 **«flush draw»** 영어(계산기 축어 · 글에선 «flush draw (chờ thùng)» 1회 병기) |
| Straight | **sảnh** (straight) | 9/9 · «thùng và sảnh cái nào lớn hơn» AC → flush-vs-straight H2 축어. 🔴 **sảnh(족보) ≠ vòng(스트리트)**(브리프) |
| Three of a Kind | **sám cô** (three of a kind) · 첫 등장 «sám cô (bộ ba, three of a kind)» · 산문 «bộ ba» 허용 · «xám» = 인정 별칭 1회 | hand-rankings 21 · 계산기 축어 · 0-1 sám cô 90 : xám cô 50. «xám»은 실제 용어(wikipoker «Xám (bộ 3)» — 아스트라 B-1)라 오자가 아니라 **스타일 통일**: 정본 sám cô · game-order 7·beginners 1은 🅰 교체 · **set · trips = 영어 그대로** + 정의 고정(«set = cầm đôi trên tay + 1 lá trên board · trips = 1 lá trên tay + board có đôi» — wikipoker «Trip và Set đều là bộ ba» · 아스트라 A-3: bộ ba도 sám cô도 set/trips를 가르지 못하니 정의 문장이 가른다) |
| Two Pair | **hai đôi** (two pair) | 8편·계산기 일치 |
| One Pair | **một đôi** / đôi | 8편·계산기 일치 |
| High Card | **mậu thầu** (bài cao / high card) | hand-rankings 11 · 계산기 축어 · 코퍼스는 bài cao 8/9 → 풀이로 «bài cao» 허용 |
| wheel | **sảnh thấp nhất A-2-3-4-5 (the wheel)** · 이후 «wheel» | hand-rankings 5 · 계산기 «Sảnh wheel» · 🔴 «bánh xe» 금지(beginners 1 → 교체) |
| Broadway / 높이 | «sảnh Broadway (10-J-Q-K-A)» · 그 밖 «sảnh cao nhất là X» («sảnh đến K») | hand-rankings 선례 |
| kicker | **kicker** · 첫 등장 «kicker (lá phụ)» | 8편 kicker 46 : lá phụ 3 · «kicker trong poker là gì» AC 축어 |
| nuts | **nuts** · 첫 등장 «nuts (tay bài mạnh nhất có thể trên board này)» | 단독 «nuts là gì» 720 = 0/10 오염 → 조준 금지 · «nuts trong poker là gì» AC 축어 → reading-the-board H2 |
| 7장 베스트 5 | «5 lá mạnh nhất trong 7 lá» | §13 검산 문장 고정 |

**④ 액션·구조·개념** (본문 = 영어 정본 · 첫 등장 «en (vi 풀이)» 병기 · 이후 영어 · 베트남어 동사 서술은 «허용» 칸만)

| EN | 본문 정본 | 규칙·근거 |
|---|---|---|
| check | **check** | 풀이 없음(«kiểm tra» 금지 — 8편 0 · 브리프 일치) · 검색 «check trong poker là gì» 30 |
| call | **call** · 첫 등장 «call (theo)» · 산문 동사 **«theo / theo bài» 허용**(목적어·조건절이 있는 문장) | 코퍼스 call 133 : theo cược 1(L-D) · 8편 «theo» 다수 → 정본은 call로 🅰 교체. 아스트라 A-1 채택: 동사 용법 자체는 자연스럽다(thegioipoker «Nếu họ không dám theo … họ sẽ Bỏ Bài») — 금지가 아니라 «정본 call + 동사 허용» |
| raise | **raise** · 첫 등장 «raise (tố)» · 라이브 구두 선언 인용 «hô "tố"» 허용 | 🔴 **«tố» 산문 금지 유지**(8편 175회 → 🅰 교체): 코퍼스에서 tố = bet·raise 겸용(wikipoker 같은 글 «tố (bet)»·«tố thêm (raise)» — 아스트라 B-3 확인) · 액션 구분이 핵심인 글에서 혼동 · 검색 «raise trong poker là gì» 30 · min-raise = «min-raise» |
| bet | **bet** · 산문 동사 **«cược / đặt cược» 허용** | 8편 cược 300 · 코퍼스 «đặt cược» · 명사 «mức cược»(계산기 «mức bet»는 손대지 않음) |
| fold | **fold** · 첫 등장 «fold (bỏ bài)» · 산문 동사 **«bỏ bài» 허용** | L-D bỏ bài 75 : fold 46 — 둘 다 산다 · 검색 «fold trong poker là gì» 50 · PAA «Fold poker là gì?» 축어 |
| all-in | **all-in**(하이픈) · 풀이 1회 «(tất tay)» | 8편 149 : «all in» 3 → 통일 · 검색은 «all in» 띄어쓰기 허용(tags) |
| re-raise / 3-bet / 4-bet | **3-bet · 4-bet** · 첫 등장 «3-bet (re-raise, tố lại)» | 코퍼스 3-bet 177 · 8편 «tố lại» 25 → 교체 · 🔴 «3 bet» 27,100 = 도박 브랜드(L-D §10-D) → 글 수요 = «3bet poker» 90 |
| limp / c-bet / check-raise / donk bet | **limp · c-bet · check-raise · donk bet** · 첫 등장 «c-bet (cược tiếp tục)» · «check-raise (hồi mã thương 금지 — 오염)» | L-D·L-G 코퍼스 · 8편 «Check-tố» 1 → 교체 |
| bluff / semi-bluff | **bluff · semi-bluff** | 코퍼스 bluff 155(L-F) · «tố lừa» 폐기(8편 1) |
| blind | **blind** · 첫 등장 «blind (mù — cược bắt buộc)» | 🔴 8편 mù 245 → 🅰 blind-meaning 재작성 때 교체. 근거는 **검색 표기**(«blind trong poker là gì» 20 · «big blind là gì» 30 / «mù lớn là gì»·«mù trong poker là gì» `-`)와 해설 코퍼스(blind 110 : mù 19)뿐 — 구어 우세는 입증하지 않았다(아스트라 B-3 · GGPoker vi는 «mù nhỏ và mù lớn»을 쓴다) |
| small blind / big blind | **small blind (SB) · big blind (BB)** · 첫 등장 «small blind (mù nhỏ)» · «big blind (mù lớn)» · 이후 SB·BB 약어 허용 | L-D big blind 57 : mù lớn 0 · 핸드차트 «Small Blind (SB)» 축어 |
| ante / big blind ante | **ante · big blind ante** | AC «ante là gì poker» · «big blind ante là gì» |
| dealer button | **nút dealer (BTN)** · 사람 = **dealer** · 첫 등장 «dealer (người chia bài)» | 8편 nút Dealer 42 → 소문자 «nút dealer» 통일 · 핸드차트 «Button (BTN)» 축어는 자리명 표에만 · «dealer poker là gì» 170 = 직업 의도 섞임 → 조준 금지 |
| flop / turn / river / preflop / street | **flop · turn · river · preflop · postflop** · 베팅 라운드 = **vòng cược** | 8편 vòng cược 48 · 계산기 «street»는 도구 사전이라 손대지 않음 · «flop turn river» 50 = game-order tags 유지 |
| board / community · hole cards | **bài chung** · 첫 등장 «bài chung (board)» · 이후 «board» 허용 · hole cards = **bài tẩy** | 8편 bài chung 41 · board 16 |
| hand | **tay bài** · 족보 순위 = **thứ hạng tay bài** | 8편 tay bài 126 · intl.ts · 도구 «Xếp hạng bài»는 도구 사전(손대지 않음) · 검색 «thứ tự bài poker» 590 = hand-rankings seoTitle·tags 축어 |
| pot / side pot / main pot | **pot** · **side pot** · 첫 등장 «side pot (pot phụ)» · «main pot (pot chính)» | 8편 side pot 32 : pot phụ 29 · 검색 «side pot poker» 10 영어 · «hũ» 금지(0) |
| split pot | **chia pot (split pot)** · «chop» 1회 | 8편 chia pot 10 · 계산기 «Chia pot» |
| showdown / muck | **showdown** · 첫 등장 «showdown (lật bài)» · 산문 동사 «lật bài» 허용 · **muck** · 첫 등장 «muck (úp bài bỏ)» | 8편 showdown 71 : lật bài 62 · 검색 «showdown là gì» 390(섞임) · «lật bài poker» 10 |
| position · 자리 약어 | **vị trí** · UTG · HJ · CO · BTN · SB · BB(첫 등장 풀어 쓰기 «Under the Gun (UTG)») | L-D vị trí 251 · 핸드차트 축어 · «vị trí trong poker» 70 |
| in / out of position | **in position (IP) · out of position (OOP)** · 풀이 «có vị trí / không có vị trí» 1회 | L-D 10·10 |
| stack / chip / buy-in | **stack** · **chip** · **buy-in** | 8편 stack 49 : chồng chip 6 · «phỉnh» = 칩 상품 의도(L-A §10-3) → 병기 1회만 · «buy in poker là gì» 20 = FAQ 축어 |
| short stack / push-fold / shove | **short stack · push/fold · shove**(jam 허용) | L-E stack ngắn 9 : short stack 69 · push/fold 68 : tất tay 3 |
| tournament / cash game | **giải đấu** 주력 · 첫 등장 «giải đấu (tournament)» · 구어 **«đánh tour / out tour»** 1~2회 허용(고정문 «Trong cách nói thông thường, đánh tour nghĩa là chơi giải đấu.» · 고유명 Tour(APT·WPT = 시리즈)와는 그 문맥에서만 구별 — 아스트라 B-16) · **cash game**(소문자) | 🔴 L-E 코퍼스 giải đấu 352 : tournament 97 · vs편은 Tournament 67 : giải đấu 57로 반대 → 🅴 재작성 때 교체 · 대문자 «Tournament/Cash Game» 금지 · «đánh tour» 69회/7쪽 |
| bubble / ITM / GTD / MTT / SNG / freezeout / re-entry | **bubble · ITM(«vào tiền» 1회) · GTD(«đảm bảo» 1회) · MTT · Sit & Go · freezeout · re-entry · rebuy** | L-E bubble 149 : bong bóng 14 · ITM 94 : vào tiền 11 · GG «Đóng băng» 오역 회피 |
| ICM / chip EV | **ICM** · 첫 등장 «ICM (Independent Chip Model — mô hình chip độc lập)» · **chip EV** | L-E · 계산기 «ICM» 축어 · 칩은 «chip», 돈만 «$»(경쟁 글 ① 혼동 회피) |
| outs / draw | **outs** · **draw** · 첫 등장 «draw (bài chờ)» · flush draw · **OESD «sảnh hở hai đầu (OESD)»** · **gutshot «gutshot (sảnh hở giữa)»** · backdoor | 계산기 사전 축어(«Sảnh hở hai đầu (OESD)» · «Gutshot (sảnh hở giữa)») · 8편 bài chờ 8 : cửa chờ 5 → «cửa chờ» 폐기 |
| equity / pot odds / implied / EV | **equity** «(phần pot kỳ vọng của bạn, tính cả khi chia pot)» — 🔴 «tỷ lệ thắng»은 win probability에만 · **pot odds** «(tỷ lệ pot)» + 계산 정의 1문장 필수(«pot : số tiền phải call») · **implied odds** «(tỷ lệ cược ngầm)» + «tiền có thể thắng thêm ở các vòng sau» · **EV** «(giá trị kỳ vọng)» · fold equity | L-C §8 · 8편 pot odds 12 : tỷ lệ pot 3 · 아스트라 A-4(무승부 지분 누락 — 항상 chop이면 equity 50%)·B-6(번역어보다 계산 정의) 채택 · 🔴 «equity là gì» 2,400 = 금융 오염 → 조준 금지 |
| rule of 2 and 4 | **quy tắc 4 và 2** | 계산기 정본 · GG 동일 |
| range / GTO / solver | **range**(«dải bài»·«khoảng bài» 폐기) · **GTO** — 🔴 제목·H1·H2에서 반드시 «GTO poker»로 붙임(단독 GTO = 애니·자동차) · **solver** | L-G · `vi-gto-solver.md` §1-① · 8편 range 표기 3종 → 통일 |
| GTO 용어(🅶 정본) | donk bet («donk bet (lead)») · lợi thế range / lợi thế nut · range phân cực (polarized) · **range tuyến tính (linear)** · **merged range** 영어 보존 + 정의(아스트라 B-7: linear≠merged) · **geometric sizing** «(size bet lũy tiến — giữ cùng tỷ lệ cược so với pot qua các vòng)»(B-8: 원리 병기) · «bet size / sizing» · **SPR («SPR — stack hiệu dụng chia cho pot»)**(A-5: effective 필수) · board đồng chất (monotone) · mặt bài có đôi (paired board) · 구어 «chập mặt» 허용 · board khô / ướt (dry / wet) · rainbow · bicolor = «hai chất» · MDF («tần suất phòng thủ tối thiểu (MDF)») · blocker · **check-back** 영어 + «check sau khi đối thủ đã check» 설명(B-9) · delayed c-bet («c-bet trì hoãn») · overpair · set / trips 영어 · «blind đối đầu blind (blind vs blind)» — 🔴 «blind vs blind» 단독 헤드 금지(0/10) | L-G §4-E(wikipoker 축어) · 솔버 앱 라벨 = 앱 vi 배포본 축어(§2-⑨ · 미배포면 영어 라벨) |
| rake / straddle / cooler / bad beat / fish / tilt | **rake** «(phí sòng)» · **straddle** · **cooler** · **bad beat** · **fish** «(người chơi yếu)» · **tilt** | L-F 코퍼스 차용어 유지 · 단독 «X là gì» 전부 오염 → 검색 표기는 «X poker là gì / X trong poker là gì» |
| heads-up / last aggressor / action | **heads-up** · **«người bet hoặc raise cuối cùng (last aggressor)»** + 적용 범위 «ở vòng cược cuối» 명시 · 액션 명사 = **hành động cược** | 8편 heads-up 7 : đấu tay đôi 4 · showdown «người chủ động cuối» 16 → 교체 · game-order «nước cược» → 교체 · 아스트라 A-6 채택(«người cược cuối cùng»은 마지막 bet만·콜한 사람까지로 오독) |
| hand / ván bài | 패·조합 = **tay bài** · **한 판 = ván bài** | 아스트라 B-9 채택 — 일괄 치환 금지(«100 hand» = «100 ván») |
| limp / c-bet / check-raise 별칭 | check-raise 별칭 «hồi mã thương» = 1회 허용(wikipoker 제목 축어) · 검색 표기·정본 아님 | 아스트라 B-4: «오염»이 아니라 문체·검색 표기 선택 — 사유 정정 |
| 추가 용어(아스트라 C · wikipoker·wikiboardgame 축어) | effective stack = **stack hiệu dụng** · value bet / thin value · set mining = **mua set** · flush draw 구어 **mua thùng / draw thùng** · combo = **combo (tổ hợp bài)** · capped range = **range bị giới hạn** · board coverage = **độ phủ mặt bài** · exploit = **khai thác đối thủ** · bankroll = **bankroll (quỹ tiền chơi poker)** · suited connectors = **hai lá bài liên tiếp cùng chất** · OESD 별칭 «sảnh hai đầu» · gutshot 별칭 «sảnh khe»(정본은 계산기 축어 «sảnh hở hai đầu»·«sảnh hở giữa» — 같은 사이트 일치 우선 · B-5 보류 기각) | 51편 산문에서 첫 등장 병기용 |
| premium / cold call / slow roll | **premium · cold call · slow roll** | 8편·핸드차트 «Tier 1 — Premium» |

**⑤ 도구 링크 앵커 문구 고정**(도구가 헤드의 주인임을 앵커로 알린다 · 3-C와 짝)

| 도구 | 앵커 정본 |
|---|---|
| `/vi/calculator` | «máy tính xác suất poker» · 기능별 «máy tính equity / outs / pot odds / ICM / push-fold» |
| `/vi/hand-chart` | «bảng bài khởi đầu theo vị trí» · «Poker Hand Chart» |
| `/vi/tournaments` | «lịch giải poker» |
| `/vi/solver`(생기면) | «GTO poker solver miễn phí» — 그 전엔 솔버 앱 이름만(링크 없음) |

- 🔴 역방향도 금지(fr H-25): **글로 가는 링크·카드 제목에 도구 의도 구(«máy tính …» · «bảng bài khởi đầu / bảng range / hand chart» · «lịch giải» · «solver»)를 쓰지 않는다.** 단어 «bảng» 자체는 금지가 아니다 — 족보표·확률표를 실제로 싣는 글은 «bảng xếp hạng bài»·«bảng xác suất» 허용(아스트라 A-8 · 경쟁 의도만 제한). hand-chart 보조 앵커 «bảng range preflop theo vị trí» 허용(도구 = 포지션별 오픈 레인지 차트 · B-12). starting-hands-chart 글 = «bài khởi đầu nên chơi theo vị trí» · holdem-glossary 글 = «thuật ngữ poker» 각도(3-C ① 판정에 따름).

**⑥ 카드 라벨 사전**(같은 EN 라벨 = 같은 vi 라벨 · 레인 A가 기존 8편 카드와 대조) — Pillar → **Kiến thức nền tảng** · Beginner Guide → Hướng dẫn người mới(`intl.category` 축어) · Start Here → Bắt đầu từ đây · Split Pot → Chia pot · Glossary → Thuật ngữ · Hand Rankings → Thứ hạng tay bài · Tiebreaker → **So bài cùng hạng**(«Luật hòa bài»는 무승부 규칙으로 읽힌다 — 같은 trips도 kicker로 갈린다 · 아스트라 A-7 · 실제 무승부·팟 분배 = «Hòa bài và chia pot» = Split Pot 카드) · Game Flow → Trình tự ván bài · Order of Play → Thứ tự hành động · Tournament(s) → Giải đấu · Deep Dive → Phân tích sâu · Odds & Math → **Xác suất & toán**(B-11).

**⑦ 오염 헤드 — 어디에도 조준하지 않는다**(`vi-core-volumes.md`에 «오염» 표기 · 0-4 전 본체 1회): fold là gì 880 · all in là gì · check là gì · call là gì · raise là gì · turn/river/flop là gì · blind là gì 720 · showdown là gì 390(섞임) · nuts là gì 720 · tứ quý · sảnh rồng · icm là gì 140 · bubble là gì 1,000 · short stack 390 · mtt là gì 110 · spr là gì 110 · blind vs blind · equity là gì 2,400 · range là gì 1,600 · «3 bet» 27,100 · cbet 1,300 · 4bet 40 · fish/tilt/bluff/rake/straddle/cooler là gì · gto(단독) · solver(단독) · dealer poker là gì 170(직업) · phỉnh poker là gì 40(상품) · luật chơi poker là gì(합법성 혼입).

### 3-B. 아스트라 활용 지도 (10-08 사장님 지시)

| 단계 | 아스트라 몫 | Claude 몫 |
|---|---|---|
| 0-2 SERP | L-A 규칙 · L-B 족보 · L-F 용어(본체가 DFS 원자료를 떠 주고 원문 정독·처방) | L-C · L-D · L-E · L-G(Opus 서브 · DFS 직접) |
| 0-3 판정 | 판정 재료 교차(본체 판정 초안을 «베트남 현장 코치» 페르소나로 반박) | 본체 판정 |
| 레인 B 집필 | — (쓰기 불가 구성 · 레포 쓰기 금지) | 집필 |
| 레인 C 검수 | **교차 렌즈 1종 상시**(레인마다 · 스크래치 사본 · 네이티브 자연스러움 + §13 독립 검산) | 렌즈 4종 + 2차 교열 |
| 헤드 판정 | 51편 전수 용어 일관성 스윕(사본) | 머지·빌드·배포 |

### 3-C. 카니발 소유표

**원칙**: fr ①②③ 승계 — ① 목록·도구형 헤드(thuật ngữ · bảng/chart · máy tính/tính · solver/GTO)는 도구가 주인 ② 단일 용어·개념 헤드는 그 개념을 다루는 글이 주인 ③ 주인 아닌 쪽은 seoTitle·H1·tags에 그 헤드를 쓰지 않고 앵커로 위임. vi 추가 — ④ **오염 헤드(단독 «X là gì» 포커 ≤2/10)는 아무도 조준하지 않는다**(§3-A ⑦) · 조준어는 «X trong poker là gì» / «X poker» 결합형 ⑤ 금지 축(합법성·실머니·앱 추천)은 SERP에 많아도 조준하지 않는다.

| # | 검색어(볼륨) | 주인 | 주인 아닌 쪽의 처리 | 판정 근거 |
|---|---|---|---|---|
| ① | thuật ngữ poker 140 · thuật ngữ trong poker 50 · thuật ngữ poker tiếng việt 30 · tiếng anh 10 | ✅ **`/vi/glossary` 도구 신설(배포 회차 §4-C에 포함) → 도구가 주인**(사장님 10-09 §3-D ①) | holdem-glossary = «thuật ngữ poker: X trong poker là gì — 영→베 대응 + 쓰이는 자리» 각도 · 🔴 **🅵 레인은 처음부터** seoTitle·H1·tags에 «thuật ngữ poker»를 쓰지 않는다(도구가 같은 배포로 나간다) · 첫 화면 도구 링크 앵커 «thuật ngữ poker»(fr ① · tr «용어는 도구로») | L-F §8 ① · 원칙① · 11개 로케일 중 vi만 glossary 도구 부재(도구 확장 회차 1·2 선례) |
| ② | «X trong poker là gì» 정의형(fold 50 · check·call·raise·ante 30 · flop·blind 20 · river·all in 10 · side pot 10) | **해당 규칙 글** — betting-actions(check·call·raise·fold·bet·min-raise) · blind-meaning(blind·SB·BB·ante·big blind ante) · game-order(flop·turn·river·dealer·burn) · all-in-rules(all-in·side pot) · showdown-rules(showdown·muck·slow roll) | holdem-glossary(또는 도구 사전) = 1줄 정의 + 그 글 앵커 · 정의 H2는 규칙 글에만 | L-A §8-B · §10-1 · L-D §10-B |
| ③ | fold 정의(fold trong poker là gì 50 · PAA «Fold poker là gì?») | **holdem-betting-actions**(H2 «Fold poker là gì?» 축어 · 기존 H2 유지) | holdem-when-to-fold = «khi nào nên bỏ bài trong poker» · AA 폴드 · 정의는 앵커 · 상호 앵커 1 | L-A §8-A · L-D §10-B |
| ④ | nuts(nuts poker 10 · «nuts trong poker là gì» AC) | **holdem-reading-the-board** — H2 «Nuts trong poker là gì?» + FAQ | holdem-glossary = 1줄 + 앵커 · «nuts là gì» 720은 아무도(0/10) | L-B §8-1 · L-F §7-G · fr ④ 동형 |
| ⑤ | vị trí trong poker 70 · poker positions 70 · position poker 70 · utg poker là gì 20 · 좌석명 10종 | **holdem-positions** | holdem-position-play = «in position / out of position» · «vị trí tốt nhất» · «bảo vệ big blind» 롱테일 · positions 첫 내부링크 · seoTitle 선두 «vị trí trong poker» 금지 | L-D §10-A · fr ② |
| ⑥ | poker hand chart 50 · preflop chart 20 · poker range chart 10 · «bảng bài khởi đầu» | **`/vi/hand-chart`** | holdem-starting-hands-chart = «best starting hands / bài khởi đầu mạnh nhất / nên chơi bài gì theo vị trí» 해설 + 도구 CTA · 글 title·H1에 «chart / bảng» 금지 | L-D §10-C · `vi-tools.md` §4 · fr ⑨ |
| ⑥′ | poker chart 70 · bảng xếp hạng bài · cheat sheet 170(족보 포스터 의도) | **holdem-hand-rankings** | 도구는 조준 안 함(vi-tools 확정) | `vi-tools.md` §2 |
| ⑦ | xác suất poker · bảng xác suất poker · cách tính(손) · là gì | **확률 글 7편** | `/vi/calculator` = «máy tính / app / phần mềm / tính … online / calculator» · 글 title·H1에 «máy tính·app·phần mềm·calculator» 금지 · 계산기 FAQ 7문항(L-C §6)과 같은 문장 금지 · 배포 회차에 계산기 quickRef `link` 4자리(equity→holdem-equity · outs→holdem-outs · pot odds→holdem-pot-odds · AA vs N명→holdem-probability) + related 7편 추가 | L-C §8 · fr ⑧ |
| ⑧ | icm poker 110 · icm poker là gì 20 · icm trong poker là gì 10 · deal icm | **holdem-icm**(🪶 `vi-tools.md» «ICM 글 = 사장님 판단» → 사장님 «fr처럼 51편» 지시로 해소) | `/vi/calculator` = «icm calculator 40 / máy tính ICM» · 도구 ICM 가이드에서 글로 «ICM là gì» 앵커(배포 회차) · bubble·short-stack·tournament·vs의 ICM 단락 = 2~3문장 + 앵커(정의 H2 금지) · «icm là gì» 140 = 아무도 | L-E §8-③·⑤ · fr ⑦ |
| ⑨ | push fold · push or fold · all in or fold · push fold chart | **`/vi/calculator` Push/Fold 탭** | holdem-short-stack = «push fold là gì» 정의 H2 + 도구 링크 | L-E §8-④ · fr ⑪ |
| ⑩ | giải poker 70 · poker tournament 210 · 장소·연도(giải poker việt nam 50 · hà nội 50 · vietnam poker tour 40) | **`/vi/tournaments`**(현 metaTitle 유지) · 조준 안 함 | holdem-tournament = «poker tournament là gì» 20 · ITM·GTD·buy-in·SNG 롱테일 · 글→보드 링크 1회 · 🔴 EN FAQ «Is it legal to host…» 삭제 · 카지노 바이인 단락 일반화 | L-E §8-①·② · fr ⑩ · `legality-ban-scope` |
| ⑪ | gto poker 170 · gto poker là gì 30 · range poker 70 · poker solver 20 · PAA «GTO trong poker là gì?» | **`/vi/solver`**(미작성 · 솔버 vi 배포 통지 후) | GTO 13편 seoTitle·H1·tags에 «GTO poker»·«range poker» 금지 · EN seoTitle «GTO» 단독 3편(ace-paired · blind-battle-cbet · blind-battle-connected) → «solver» 문구 · «Check it yourself» 링크 = 랜딩 생기기 전엔 솔버 앱 직접 | L-G §8 · `vi-gto-solver.md` §4·§7 · fr ⑫ |
| ⑫ | check raise 10 · check raise là gì 10 | **low-board-check-raise**(EN parity · «Check-raise trong poker là gì?» 정의 H2) | 정의 1문단 + `holdem-betting-actions` 링크(glossary 위임 불가) · vi check-raise 필라가 생기면 반납 · «hồi mã thương» 금지 | L-G §8 ⑤ · `settled-decisions` §1-E ③ |
| ⑬ | spr poker 20 · spr poker là gì 10 | **3bet-pot-cbet**(EN parity · «SPR trong poker là gì?» H2) | «spr là gì» 110 = 아무도 · «spr calculator» 조준 안 함 | L-G §8 ⑥ |
| ⑭ | c bet là gì 30 · c bet poker là gì 10 | **holdem-continuation-bet** | 13편(a-high · k-high · blind-battle · 3bet-pot 3)은 «c-bet trên … / trong 3-bet pot» 한정어만 · 정의는 링크 | L-G §8 · L-D §11 |
| ⑮ | 3bet poker 90 · 3 bet trong poker là gì 20 · 3bet light/range 10 | **holdem-3bet** | «3 bet» 27,100 · cbet 1,300 · 4bet 40 = 도박 브랜드 오염 → 볼륨 표기 «오염» · 3bet-pot 3편은 «3-bet pot» 한정어만 | L-D §10-D |
| ⑯ | limp poker 20 · limp trong poker là gì 10 · PAA «Limp poker là gì?» | **holdem-limping** | betting-actions 기존 FAQ «Limp trong poker nghĩa là gì?» → 1줄 + limping 앵커(🅰 재작성 때) | L-D §8 · L-F §11-2 |
| ⑰ | bluff poker 110 · bluff poker là gì 10 · semi bluff là gì(AC) | **holdem-strategy** H2 «Bluff trong poker là gì — khi nào nên bluff?»(필라 흡수 · 51편에 bluff 글 없음) | holdem-glossary = 1줄 + 앵커 · fish·cooler 글은 «bluff catcher» 문맥만 | L-F §7-G·§8 · `settled-decisions` §1-E ② |
| ⑱ | tilt poker 40 · tilt poker là gì 10 | **holdem-bad-beat** H2 «Tilt là gì — làm gì ngay sau một bad beat?» | holdem-glossary = 1줄 + 앵커 | L-F §7-G |
| ⑲ | bad beat jackpot 계열(AC 6종) | 조준 안 함(운영사 상품) | holdem-bad-beat FAQ «Bad beat jackpot là gì?» 1문 — 구조만 · 운영사 이름·금액 없음 | L-F §11-1 |
| ⑳ | dealer poker là gì 170 · phỉnh poker là gì 40 · luật chơi poker là gì · «poker online / game bài / w88 …» | 조준 안 함 | game-order FAQ «Dealer và nút dealer trong poker là gì?» 1문 · beginners «chip (phỉnh)» 병기 1회 · 합법성·실머니는 언급도 하지 않는다 | L-A §10-3 · 브리프 금지 축 |

**레인 A로 넘기는 처리 확정**
- 🅴 holdem-tournament: EN FAQ «Is it legal to host a poker tournament at home?» **삭제** · 카지노 직접 바이인·온라인 사전등록 운영사명 삭제 · tour ≠ tournament 한 줄(wikipoker 혼동).
- 🅵 holdem-rake: EN FAQ «Is taking a rake illegal?» = 합법성 축 → **빼고** «Tại sao phòng poker thu rake?»류 운영 질문으로(fr 동형 · L-F §11-2 related 전부 «illegal»). 베트남 세율·법령은 **쓰지 않는다**(§12-B).
- 🅳 holdem-strategy: «mẹo chơi poker luôn thắng» 약속형 금지 — 훅은 «왜 mẹo가 안 통하나»(L-D §8).
- 🅰 beginners: «Poker 2 lá (Texas Hold'em)와 5 lá·xì tố의 차이» 1문단(AC 변종 다수 · §3-A ②) · «phỉnh (chip)» 1회.
- 🅰 betting-actions: 액션 4종 H2를 «X trong poker là gì» 축어로(«Check trong poker là gì?» · «"Call" trong poker có nghĩa là gì?» · «Raise trong poker là gì — min-raise tính thế nào?» · «Fold poker là gì?») — L-A §10-3 PAA.
- 🅱 hand-rankings: «Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu?» H2 + «Thùng phá sảnh có lớn hơn tứ quý không?» FAQ(20) · «sảnh rồng» 별칭 1회(헤드 금지).
- 🅶: 솔버 vi 앱 라벨 = 라이브 `?lang=vi` 축어(✅ 2026-10-09 배포 · S-049 · S-043 판정은 검수장 진행 중 — 판정 뒤 라벨이 바뀌면 헤드가 한 줄 교체 · §2-⑨).
- ✅ 0-4에서 끝낸 것(10-09): `docs/translation-terms-vi.md`를 §3-A에 맞춰 갱신(«Sảnh Thượng»·«mù nhỏ/mù lớn»·«tố» 권고 → §3-A 포인터) · `vi-core-volumes.md` §2 글별 표에 «오염» 표기.
- 🪶 범위 밖(자동 착수 금지): 계산기 사전 «street»·«Xếp hạng bài»·«mức bet»(도구 사전 — 손대지 않음 · 배포 회차 뒤 별도).

### 3-D. 사장님 판정 — ✅ 10-09 확정 (0-3 보고 10-08 (6) → 사장님 «§3-D 결과 반영하고 0-4 착수» · 본체 권고 10건 전부 채택)

> 규칙이 된 것은 §3-A·§3-C·§4-C로 승격했다. 이 표는 판정 기록이다.

| # | 쟁점 | 판정(= 본체 권고) | 이행 자리 |
|---|---|---|---|
| ① | `/vi/glossary` 도구 부재 → «thuật ngữ poker» 140의 주인 | **도구 신설을 이번 배포 회차에 포함 → 도구가 주인** · 글은 «X trong poker là gì» 각도(아스트라 B-13 대안은 기각 — 사장님 10-06 «용어는 도구로») | §3-C ① · §4-C ①(도구 신설 = 헤드 몫 · fr `/fr/glossary` 구조 + vi 사전) |
| ② | 족보 번역어 | **hand-rankings·도구 표기 채택**(thùng phá sảnh hoàng gia · sám cô) · «Sảnh Thượng» 폐기 · sảnh rồng = 별칭 1회·헤드 금지 | §3-A ③ · 🅰 beginners·game-order 교체 |
| ③ | 액션·블라인드 = 영어 차용어 정본 | **채택** — 기존 6편 «Theo/Tố/Bỏ bài»·«Mù nhỏ/Mù lớn» 제목·본문은 🅰 재작성 때 교체(slug·URL 불변) · 베트남어 동사(bỏ bài·cược·lật bài·theo)는 산문 허용 | §3-A ④ · `translation-terms-vi.md` 갱신(0-4 ✅) |
| ④ | positions ↔ position-play | positions = 헤드 · position-play = in/out of position 롱테일 | §3-C ⑤ |
| ⑤ | 확률 7편 ↔ `/vi/calculator` | §3-C ⑦ · 배포 회차에 계산기 quickRef 링크 4자리 | §4-C ② |
| ⑥ | ICM 글 소유 | holdem-icm 포함 · 도구는 «icm calculator» | §3-C ⑧ · §4-C ③(도구 ICM 가이드 → 글 앵커) |
| ⑦ | 합법성 FAQ | tournament EN FAQ 삭제 + rake 합법성 FAQ 삭제 | §3-C 「레인 A로 넘기는 처리」 |
| ⑧ | GTO 13 ↔ `/vi/solver` 순서 | **13편 먼저(🅶) → 랜딩은 솔버 vi 배포 통지 뒤 별도 회차** | §4 단계 2 · 🅶 «Check it yourself» = 솔버 앱 직접 링크 |
| ⑨ | GTO 13 포함 재확인 | **포함**(`settled-decisions` §1-E 운영 메모의 vi 금지는 사장님 «fr처럼 51편»으로 해제 · GSC 수동 색인 요청 안 함) | §1 🅶 · §4-C ⑧ 목록에서 제외 |
| ⑩ | 아스트라 교차 반영 | ✅ §3-E | — |

### 3-E. 아스트라 교차 결과 (10-08 (6) · codex gpt-6-astra read-only · 스크래치 사본 · «베트남 현장 코치» 반박 전용 · 인용 7건 중 5 원문 직접 확인 · equity·SPR 정의 2건은 표준 정의로 판정)

- **반박 8 → 채택 8**(A-8은 범위 축소): A-1 «theo» 동사 허용 · A-2 xì tố 단정 철회(고정문 교체) · A-3 bộ ba 허용 + set/trips 정의 문장 · A-4 equity 풀이(«tỷ lệ thắng» ✗ → 무승부 지분 포함) · A-5 SPR = stack hiệu dụng/pot · A-6 last aggressor = «người bet hoặc raise cuối cùng» · A-7 Tiebreaker 카드 «So bài cùng hạng» · A-8 «bảng» 단어 금지 → 도구 의도 구만 금지.
- **보류 17 → 채택 9**(B-1 xám 별칭 · B-2 sảnh rồng 의미 고정 · B-4 hồi mã thương 사유 정정 · B-6 pot odds 계산 정의 · B-7 linear/merged 분리 · B-8 geometric 원리 병기 · B-9 tay bài/ván bài · B-11 «Xác suất & toán»·«Kiến thức nền tảng» · B-16 đánh tour 고정문) · **부분 3**(B-3 tố 금지 유지·구두 인용 허용·blind «구어 우세» 단정 삭제 · B-12 hand-chart 보조 앵커 추가 · B-17 코퍼스 층위 한계 = 이 절 머리 근거에 «합산 빈도는 번역 품질을 가르지 않았다» 명시) · **기각 2**(B-5 OESD/gutshot = 계산기 축어 유지 · B-10 숫자 조판 = 사이트 규칙) · **판정 보류 3**(B-13 → §3-D ① 대안에 병기 · B-14 nuts 유지 · B-15 GTO 정의 소유 = `settled-decisions` §1-E ③·fr 선례 유지).
- **추가 용어 11 → 전부 등재**(§3-A ④ 마지막 행).
- 🪶 아스트라가 든 Natural8 공식 용어집의 직역 오류(«một người mù nhỏ» · «Một bộ đồ thẳng của cùng một bộ đồ») = 경쟁 약점 재료(레인 A 브리프) — 우리 코퍼스 집계에서 Natural8 번역문은 «자연스러운 용례»로 세지 않는다.

## 4. 단계 (한 실행 = 한 단계 · AUTONOMY-LIMITS 90분)

| 단계 | 내용 | 선행 조건 | 상태 |
|---|---|---|---|
| 0-1 | 수요 실측 → `docs/keyword-bank/vi-core-volumes.md` | — | ✅ 10-08 |
| 0-2 | SERP 7레인 → `docs/keyword-bank/vi-serp/`(00-brief + L-A~L-G) · 본체 대조 · 새 후보 볼륨 일괄 측정 | 0-1 | ✅ 10-08 (6) · 7/7 + 커버리지 ✗ 0(00-brief 결과표 · 보완 = L-A §10 · L-B §10-3 · L-F §11) |
| 0-3 | 소유표·고정문·용어 정본(§3) + 아스트라 교차 → 사장님 보고(쟁점 판정) | 0-2 | ✅ 10-08 (6) 초안 → **10-09 사장님 판정 10건 채택(§3-D)** |
| 0-4 | 착수 공지 MB · 레인 워크트리 · EN 기준 해시 · 번역 브리프 갱신 · 오염 표기 | 0-3 승인 | ✅ 10-09 (MB-207 · 워크트리 7 + HARDEN.md · 진행 파일 7 · index 칸 6 · lane-sync vi 7레인 · EN `b57cb658` · §5 치환표) |
| 1 | 레인 🅰~🅵 병렬(A 준비 → B 집필 → C 마감) | 0-4 | ✅ 10-09 — 6레인 C 마감 · `vi-integration` 머지(§4-A 기록) |
| 2 | 🅶 GTO 13(랜딩은 별도 회차 · §3-D ⑧) | 1 머지(헤드 «시작» 신호) | ✅ 10-10 `a5dd9cfe` → vi-integration ff 머지(10-10 (8)) |
| 3 | 헤드 판정 → `/vi/glossary` 신설 → 배포 1회 → MB · IndexNow · 사장님 GSC 수동 색인 목록 | 2 | ✅ 10-10 (8) — 판정 = queue §2-AS · 배포 기록 §4-C 끝 |

- 모델·라쿠·통합 브랜치는 fr §4 끝 두 줄 + §4-A를 그대로 쓴다: 본체·레인 = Opus 5.5 · 카피 판정 = Fable 서브 1회/레인 · 렌즈 = Opus 서브 · 교차 = 아스트라(§3-B · 레인 C마다 1종 상시 + 헤드 51편 1회) · 0-1·0-2를 본체에서 끝냈으니 레인은 라쿠·DFS가 필요 없다.

## 4-A. 헤드 머지 = 통합 브랜치 `vi-integration` (fr §4-A 승계)

- 🔴 **레인은 main이 아니라 `vi-integration`(폴더 `Holdem-vi-head` · 첫 레인 C가 끝날 때 헤드가 만든다)에 머지한다.** main에 넣으면 그때부터 main을 push할 수 없다(반쪽 vi + 끊긴 링크가 라이브). 배포 회차에 `vi-integration` → main 머지 1회.
- 통합 트리 빌드 = `npx next build`(prebuild의 intl-links·calc-parity는 전 레인 + 계산기 사전 전까지 실패가 정상). 🔴 `Holdem-vi-head`에 `.env.local` 복사(로컬 Supabase 클라이언트 오류 회피 · 정리 때 같이 삭제).
- 머지 기록(10-09 · 통합 트리 `Holdem-vi-head`): ✅ 🅰 rules `9e78d88a` · ✅ 🅱 rank `1c8f80d6` · ✅ 🅲 prob `00d1317a` · ✅ 🅳 strat `5fb7f3e6` · ✅ 🅵 gloss `ccef36ff` · ✅ 🅴 tour `8a3f8538`(충돌 0 · vi 38편) · 게이트 오탐 2 수정 `7944acb1`(audit:hard 숫자 사이 쉼표·콜론 보존 → «N:1» 비대조 규칙 부활 · vi «hai đôi» 별칭 · 셀프테스트 84/84 · 15로케일 전후 = vi 🔴 2 → 0만 변화) · 통합 트리 audit vi 38/38 🔴 0 · check:structure vi 결손 0 · `npx next build` exit 0 · ▶ **🅶 시작 신호 ✅** (`harden-vi-gto` ← vi-integration ff `7944acb1` — 38편이 보인다 · HARDEN.md «/vi/solver 링크» 갱신)

### 4-C. 배포 회차 체크리스트 (🅶 머지 뒤 · fr §4-C 순서 + vi 전용 ①~③)

1. 🔴 **`/vi/glossary` 도구 신설**(§3-D ①) — `app/fr/glossary` 구조 복제 + vi 사전(용어 = §3-A ③④ 축어 · 항목 → 글 링크: Nuts → reading-the-board · ICM → holdem-icm · Check-raise → low-board-check-raise · fr `GlossaryTerm.link` 선례) · 도구 확장 회차 1·2의 등록 자리(로케일 목록 · hreflang · sitemap · 러닝맵)를 fr과 같게 · 🅵 holdem-glossary 글 첫 화면 앵커 «thuật ngữ poker» 확인.
2. 계산기 사전 quickRef 링크 4자리(equity → holdem-equity · outs → holdem-outs · pot odds → holdem-pot-odds · AA vs N명 → holdem-probability) + related 7편(§3-C ⑦) · hand-chart related = EN 4글 + 계산기 · `check:calc-parity:all`.
3. 도구 ICM 가이드에서 글로 «ICM là gì» 앵커(§3-C ⑧) · 러닝맵 `VI_CLUSTERS`(fr 구조) · 데스크톱 레일 솔버 버튼 문구는 `/vi/solver` 생기기 전까지 fr 선례의 «랜딩 없음» 분기 확인.
4. 🔴 date: 신규 43편(🅰 6 + 🅱 hand-rankings + 🅴 vs-cash 기존 8편 제외) `date` = 배포일 · 기존 8편은 원래 date(fr H-22).
5. main → vi-integration 머지(문서 충돌 = main 쪽) → `npm run build` 전체(sitemap vi 51 확인) → vi-integration → main ff → push.
6. 라이브 확인(Playwright): `/vi/blog` 51 · 글 1편 레일 · `/vi/glossary` 링크 3 · `/vi/calculator` related.
7. MB 1행(커밋 해시 · vi 51 슬러그 · 도구) + **검수장에 배포 해시로 vi 1회 요청**(§2-⑦ · MB-207 요청 1 이행 신호).
8. `npm run indexnow -- --since <배포일>`.
9. 사장님 GSC 수동 색인 요청 목록 = fr §4-C ⑧의 38 슬러그를 `/vi/blog/`로 + `/vi/glossary`(GTO 13 제외 · 필라 6편부터).
10. 마감: WORKLOG · 핸드오프 · 워크트리 7개 + `Holdem-vi-head` 정리(미커밋 확인 먼저 · node_modules 정션은 `rmdir`로 링크만 끊기).

**배포 기록 (10-10 (8) · 헤드)**: 🅶 ff 머지 → main 머지 → ① `/vi/glossary`(46용어 · 글 축어 42 + 번역 4 · 링크 3 · 등록 4곳 hreflang vi-VN) ② 계산기 quickRef **EN 6링크 전부**(계획은 4라 적었으나 fr 선례대로 EN 대응: ①표 → probability ②AA vs N → equity ③outs ④pot-odds ⑤SPR → short-stack ⑥vs) + deal → holdem-icm(«ICM poker là gì?») + related EN 8 · hand-chart related EN 4글 + 계산기 ③ `VI_CLUSTERS` + `GTO_SERIES_I18N.vi`(랜딩 SPOT_GROUPS 축어) · `/vi/solver` SPOT_GROUPS slug 13 + 결과 문단 equity·c-bet 링크 + 기초 읽기 strategy 복원 ④ date 신규 43 = 10-10(10-09 30편 수정 · 기존 8편 원래 date) · 헤드 판정 = queue §2-AS(이월 3: vi 이미지 · check-gto vi · verbatim 행) · donk faq −1 = `locale-intentional-diffs` 등재.

## 5. 레인 운영 — fr §5 치환표를 vi로 읽는 «차이 표» (0-4 · 10-09)

> 레인은 `docs/ms-translation-lanes.md` §3~§9를 따르되 **fr 계획 §5 치환표**를 먼저 적용하고, 아래 표의 자리만 vi로 바꿔 읽는다. 표에 없는 자리는 fr §5 → ms 규격 순.

| fr §5 자리 | vi에서는 |
|---|---|
| 폴더·파일 이름 `fr-` | `vi-` — 진행 `docs/vi-lanes/<id>-진행.md` · 브리프 `docs/vi-lanes/<id>-brief.md` · 키워드 `docs/keyword-bank/vi-<id>.md`(선택) |
| §0 링크 대상 | 이 문서 §1(51편 + 도구 `/vi/calculator` · `/vi/hand-chart` · `/vi/tournaments` · **`/vi/glossary`(배포 회차 신설 예정 — 링크 건다)** · `/vi/solver`는 없음 → 솔버 앱 직접 링크) |
| §1-A 고정문 · §1-B 용어 | **이 문서 §3-A**(정본 · `translation-terms-vi.md`·`local-voice`와 어긋나면 §3-A가 이긴다). 🔴 vi 최대 위험 = ① **족보는 베트남어(thùng·sảnh·cù lũ·sám cô) · 액션·구조는 영어 차용어(call·raise·fold·blind·SB/BB)** — 방향을 섞지 마라 ② 성조 부호 누락·오타(§13급) ③ 다른 게임(Tiến lên·Mậu binh·xì tố) 용어 유입(§2-⑪) ④ 단독 «X là gì» 오염 헤드를 seoTitle·H1·tags에 쓰기(§3-A ⑦) |
| 숫자 = 프랑스식 | 🔴 **vi = 베트남식**(§3-A ②): 천 단위 **마침표** `1.326` · 소수 **쉼표** `2,5 BB` · **`43,8%` 붙임**(공백 없음 — fr과 다름) · 비율 `2,7:1` · 화폐 `$` 앞붙임 · 카드 = 영어 랭크 + 무늬 기호 |
| §4-③·④ 조사 금지 | 입력 = `docs/keyword-bank/vi-serp/<레인>.md`(L-A-rules · L-B-rank · L-C-prob · L-D-strat · L-E-tour · L-F-gloss · L-G-gto) + `00-brief.md` + `vi-core-volumes.md`(§4 오염 판정 포함) · DFS 직접은 1회(**2704 Vietnam · vi**) |
| §4-⑤ 브리프 «소유표» 줄 | 이 문서 §3-C에서 그 글이 주인인 검색어 · 금지 헤드 + **§3-A ⑦ 오염 헤드** |
| §5 B 틀 | 필드 모양 = `lib/posts-vi/holdem-blind-meaning.ts`(Trả lời nhanh · Đọc tiếp · Câu hỏi thường gặp · Những điều cần nhớ 전부 있는 유일한 편 — 🔴 **문면은 7월판 «Mù» 표기라 복사 금지 · 필드 모양만**) · `masterUpdated` = 기준 해시 `b57cb658` 시점 EN `updated` |
| §5 등록 | `lib/posts-vi/index.ts`의 **자기 레인 칸 두 곳**(`[vi-<id> import 시작]~끝` · `[vi-<id> 배열 시작]~끝`). 🅰 rules는 칸 없음(위 6편 재작업) · 🅱의 hand-rankings · 🅴의 tournament-vs-cash-game은 **기존 import를 자기 칸 안으로 옮겨 두었다** — 파일만 다시 쓴다 |
| §5·§6 게이트 | `--locale=vi` · `check:structure`는 vi 행 · 🅰·🅱 hand-rankings·🅴 vs-cash는 추가로 `check:drift`(masterUpdated) |
| §6-② 전사 대조 정규화 | vi 구분자 정규화 = 천 단위 마침표 제거(vi 소수점은 쉼표뿐이라 `1.326` → `1326` 안전) · 소수 쉼표 → 마침표 · `%` 그대로 — 안 하면 전부 불일치로 뜬다 |
| §6-③ 네이티브 렌즈 페르소나 | 호찌민 클럽 레귤러(Natural8·GGPoker vi 용어 · 영어 차용어 구어 · 「이 문장을 테이블에서 쓰나」) · 출판 교정자(bạn/tôi 일관 · 성조 부호 · 조판 §3-A ②) · 지방 초심자(영어 차용어가 막는 자리 → 첫 등장 풀이가 있나 · Tiến lên 용어로 오독하지 않나) · **아스트라 교차 1종**(§3-B · 스크래치 사본 · 네이티브 자연스러움 + §13 독립 검산) |
| §6-⑥ 커밋 | `git add lib/posts-vi/<내 슬러그>.ts lib/posts-vi/index.ts docs/vi-lanes/<id>-*` · 메시지 «vi(<id>): …» |
| §7 헤드 | 머지 대상 = `vi-integration`(§4-A) · 배포는 🅰~🅶 전부 뒤 1회 · 🅶은 🅰~🅵 머지 뒤 헤드 «시작» 신호 |
| 🅶 A 앞 | §2-⑨: 솔버 vi ✅ 배포됨(2026-10-09 · S-049) → ✅ **축어 추출 완료 = `docs/solver-app-verbatim-vi-2026-10-09.md`**(10-09 (5) · 사이드바·단계·Spot mẫu 13·결과 화면·Hướng dẫn) · ✅ **`/vi/solver` 신설(같은 회차)** → 🅶 «Check it yourself» 링크는 `/vi/solver`로(앱 직접 링크 대체 · 글 꼴 = «Spot mẫu → <titleVi> → [⚡ Xem kết quả]»). S-043 판정으로 라벨이 바뀌면 verbatim 문서·랜딩·헤드를 같이 한 줄 교체 |
