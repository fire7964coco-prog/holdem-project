# vi-rank 브리프 — 🅱 족보 클러스터 6편 (A 구간 산출 · 2026-10-09)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(치환 = `docs/fr-cluster-plan.md` §5 → `docs/vi-cluster-plan.md` §5 «차이 표») · 용어 정본 = 계획 **§3-A** · 소유표 = 계획 **§3-C** · SERP 근거 = `docs/keyword-bank/vi-serp/L-B-rank.md`(B에서 다시 열 필요 없음 — 필요한 것은 여기 옮겼다).
> EN 기준 = 해시 **`b57cb658`**(브랜치 `harden-vi-rank` 착수 시점 · `git diff b57cb658..HEAD -- lib/posts-en/<6편>` = 변경 0 확인 10-09). fr 기준 `a54b5f3d`와의 차이는 flush-vs-straight **L68 한 문장**뿐(«rarer always wins» → «among hand types, the rarer one always ranks higher») — 그래서 아래 구조 L##는 fr 브리프와 같고, 전부 EN 파일에서 grep으로 **재확인**했다.
> EN `updated`: hand-rankings · kicker · tiebreak-rules = **2026-10-06** · split-pot-rules · reading-the-board = **2026-10-05** · flush-vs-straight = **2026-09-28** → 각 글 `masterUpdated`는 이 값(헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤).
> 🔴 **카피(title·seoTitle·desc·tldr·tags·H2·H3·FAQ 문항)는 이 브리프 «확정 카피»가 최종이다.** B·C는 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청»(계획 §2-⑥).

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 브리프에는 메타·구조(L##)·링크·원시 HTML 줄·§13 자리·경험담·확정 카피를 실었다. 본문 산문·표·디렉티브는 EN 파일을 열어 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 열지 마라**(예외 둘: 틀 복사용 `lib/posts-vi/holdem-blind-meaning.ts` — **필드 모양만**, 문면은 7월판 «Mù» 표기라 복사 금지 · 재작업 대상 `lib/posts-vi/holdem-hand-rankings.ts` — 아래 §1-I). 사실·수치·카드의 출처는 EN 축어 + 이 브리프 §1-G의 형제 글 인용뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어(값 불변 · 구분자만 베트남식) → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `holdem-blind-meaning.ts`의 필드 순서(`slug · title · seoTitle · desc · tldr · category · date · updated · masterUpdated · keepImagesInBody · readTime · emoji · image · imageAlt · tags · content`). `masterUpdated` = 위 EN `updated` · `updated` = 집필일 · `date` = **신규 5편은 집필일**(배포 회차에 헤드가 배포일로 바꾼다 · 계획 §4-C ④) · **hand-rankings는 기존 `date: "2026-06-09"` 유지** · `slug`·`image`·`keepImagesInBody: true`·`emoji`·`category: "hand-rankings"` = EN 그대로 · `readTime` = `"N phút"`(숫자는 EN 그대로: 14 · 11 · 10 · 12 · 12 · 11) · `imageAlt`는 베트남어(카드 토큰 축어) · 🔴 **content에 히어로 넣지 마라**(EN에도 없다).
- **EN 파일 꼬리**: kicker만 `export default POST;`(L243)가 있다 → vi도 그 편만 붙인다.
- **등록**: `lib/posts-vi/index.ts`의 `// [vi-rank import 시작]`~`끝`(L14~16) · `// [vi-rank 배열 시작]~끝`(L50~52) 두 칸에만. hand-rankings import(`holdemHandRankings`)는 이미 칸 안에 있다 — 나머지 5편을 그 아래 추가. import 이름 = camelCase(`holdemFlushVsStraight` · `holdemKicker` · `holdemTiebreakRules` · `holdemSplitPotRules` · `holdemReadingTheBoard`). 칸 밖 금지.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=vi --slug=<slug>` 🔴 0 · 끝에 `npm run check:intl-links` · `npm run check:structure`(vi 행 내 슬러그 결손 0) · **hand-rankings는 `npm run check:drift`**(masterUpdated) · `npm run build`.

## 1. 공통 결정 (6편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)
| EN | vi |
|---|---|
| `> **Quick answer**`(flush-vs-straight L33 · split-pot L25 · reading-the-board L41) | `> **Trả lời nhanh**` |
| `:::readnext[Keep reading]` | `:::readnext[Đọc tiếp]` |
| `## FAQ` | `## Câu hỏi thường gặp` |
| `## Related Posts` | `## Bài viết liên quan` |
| `## The Takeaways` · `## The 3 Things to Remember` | `## Những điều cần nhớ` (번호 목록 3개는 그대로 · 라벨에 개수 금지) |
| `### The Short Answer` · `### Kickers at a glance` · `### Tie-breaks at a glance` · `### The core numbers` | 확정 카피 H3 표가 정한 문구(§2~§7) |
| readTime `"14 min"` | `"14 phút"` |
| FAQ 형식 | `**Q. …**` + 빈 줄 + `A. …` (EN과 동일 · 기존 vi 8편 관례 확인) |
| `> **The one rule that wins arguments**`(hand-rankings L50) · `> **The most common cooler**`(L109) · `> **The check:**`(split L89) | 굵은 라벨만 번역(`> **Quy tắc kết thúc mọi tranh cãi**`(기존 vi 축어) · `> **Cooler phổ biến nhất**` · `> **Phép thử:**`) — 인용 블록 모양 유지 |
| 화자 | 1인칭 **tôi** · 독자 **bạn** · 존칭·anh/chị 금지 · 명령형 훅 허용(«Hãy nhìn…», «So sánh…») |

### 1-B. 용어 (계획 §3-A ③④ 정본 + 이 레인 신규 🆕 — 진행 파일 «신규 용어» 표에 등재)
| EN | 본문 vi | 비고 |
|---|---|---|
| Royal Flush · Straight Flush · Four of a Kind · Full House · Flush · Straight · Three of a Kind · Two Pair · One Pair · High Card | **thùng phá sảnh hoàng gia · thùng phá sảnh · tứ quý · cù lũ · thùng · sảnh · sám cô · hai đôi · một đôi(đôi) · mậu thầu** | 첫 등장 병기: «thùng phá sảnh hoàng gia (royal flush)» · «thùng phá sảnh (straight flush)» · «tứ quý (four of a kind)» · «cù lũ (full house)» · «thùng (flush)» · «sảnh (straight)» · «sám cô (bộ ba, three of a kind)» · «hai đôi (two pair)» · «một đôi (one pair)» · «mậu thầu (bài cao, high card)». 이후 vi 단독. 🔴 **문중 소문자**(«một đôi», «thùng») · 표·H2·`:::hand[]` 라벨·`:::tiebreak` 행 머리에서만 머리글자 대문자(계산기 `rankNames` 축어 «Thùng Phá Sảnh Hoàng Gia» 등 — 표에서는 이 형). 기존 vi 편의 산문 «Thùng Phá Sảnh Hoàng Gia»·«Cù Lũ» 대문자는 **전부 소문자로 교정** |
| «Royal» · «Steel wheel» · «Quads» · «Boat» · «Trips / Set»(서열표 «Also called» 열 L35~44) | «Royal» · «Steel wheel» (chỉ A-5) · «Quads» · «Boat» / «Full boat» · «Trips» / «Set» — **영어 별칭 그대로** + 🆕 royal 행에만 «sảnh rồng, sảnh chúa» 추가 | 🔴 **«sảnh rồng»·«sảnh chúa»는 이 표 1칸 + #1 H3 본문 1회**(«còn gọi là sảnh rồng, sảnh chúa — 10-J-Q-K-A cùng chất»)뿐 · H2·seoTitle·tags·desc 금지(§3-A ③ · SERP 2/10 = Tiến lên/Mậu binh) |
| full house 읽기(«queens full of fives» · «nines full of kings») | **«cù lũ Q kèm 5» (QQQ55)** · «cù lũ 9 kèm K» | 🆕 코퍼스 0 → 서술형 고정 · 랭크 문자열 `QQQ55`·`KKK-AA`·`K-K-K-Q-Q`는 **축어** |
| trips / set / board trips | **trips · set** 영어 + 정의 고정문 1회: «set = cầm đôi trên tay + 1 lá trên board · trips = 1 lá trên tay + board có đôi» · «sám cô nằm trên board» | §3-A ③ · 산문 «bộ ba» 허용 · «xám» 별칭은 hand-rankings #7 H3 1회만(«còn gọi là xám») |
| wheel · steel wheel · Broadway | **«sảnh thấp nhất A-2-3-4-5 (the wheel)»** → 이후 «wheel» · 🆕 **«thùng phá sảnh thấp nhất A-2-3-4-5 (steel wheel)»** · **«sảnh Broadway (10-J-Q-K-A)»** → 이후 «Broadway» | 🔴 «bánh xe» 금지 · «sảnh cao nhất là X» («sảnh đến K») |
| board · community cards · hole cards | **bài chung** · 첫 등장 «bài chung (board)» · 이후 **board** 허용(혼용 OK · 한 문단 안에서는 한 표기) · hole cards = **bài tẩy** | §3-A ④ · 🔴 «bàn»(테이블)과 «board»를 섞지 마라 — 기존 vi 편의 «bàn» = board 용법은 **전부 «board / bài chung»으로 교정**(«trên bàn» → «trên board») |
| playing the board | 🆕 **«chơi theo bài chung (playing the board)»** 첫 등장 · 이후 **«chơi theo board»** | 코퍼스 0 → 서술형 · Fable 제안 채택(§1-H) · 세 편(kicker H2 5 · reading H2 3·tldr · split H3 2)에서 같은 형 |
| best five (cards) | **«5 lá mạnh nhất trong 7 lá»** · 짧게 «5 lá mạnh nhất» · «tay bài 5 lá tốt nhất» | §3-A ③ 고정문 |
| hand · 한 판 | **tay bài** · **ván bài** | §3-A ④ · 일괄 치환 금지 |
| tie · break a tie · tiebreaker · same hand | **hòa** · **phân định (khi hòa)** · 🆕 **«so bài cùng hạng»**(카드 라벨 §3-A ⑥ · 아스트라 A-7) · «cùng hạng tay bài» | «luật hòa bài»는 «무승부 규칙»으로 읽혀 카드 라벨에는 금지 · 산문에서 «thế hòa» 허용 |
| split pot · chop · chopped pot | **chia pot (split pot)** · «chop» 1회 병기 · «pot được chia» | §3-A ④ · 🔴 **«chia bài»(카드 배분)와 혼동 금지** |
| odd chip | 🆕 **«chip lẻ (odd chip)»** · 이후 «chip lẻ» | 코퍼스 0 → 서술형 · Fable 동일 제안(«lẻ» = 나머지·홀수 → «chia không đều» 뜻이 바로 선다 · «chip dư» 불채택) |
| side pot · main pot | **side pot** «(pot phụ)» · **main pot** «(pot chính)» | §3-A ④ |
| kicker · side card · first/second/third kicker · outkick | **kicker** · 첫 등장 «kicker (lá phụ)» · «kicker thứ nhất / thứ hai / thứ ba» · «thua kicker» | §3-A ③ · 🔴 «lá lẻ» 금지 |
| dominated (ace) | 🆕 **«lá A bị dominate (dominated ace)»** · 이후 «bị dominate» | 코퍼스 미확인 · 영어 차용 원칙(§3-A ④ 방향)에 맞춰 Fable 제안 채택 — «Át bị áp đảo» 번역어는 쓰지 않는다 |
| the nuts · nut flush | **nuts** · 첫 등장 «nuts (tay bài mạnh nhất có thể trên board này)» · 🆕 «thùng nuts (nut flush)» | §3-A ③ · 단독 «nuts là gì» 0/10 → 헤드 금지 · H2는 «Nuts trong poker là gì?» |
| paired board · dry / wet board · rainbow | **board có đôi (paired board)** · **board khô / board ướt (dry / wet)** · rainbow | §3-A ④ 🅶 정본 «mặt bài có đôi»와 같은 뜻 — 이 레인은 «board có đôi»로 통일(🅶 레인과 갈리면 헤드가 머지 때 맞춘다 · 진행 파일 «신규 용어») |
| muck · table (v.) · showdown | **muck** «(úp bài bỏ)» · «lật bài / ngửa bài» · **showdown** «(lật bài)» | §3-A ④ |
| dealer · 여성 딜러(reading L27 «she») | **dealer** «(người chia bài)» · 베트남어는 성 중립 → «dealer» 그대로(대명사 없이) | — |
| suit · 무늬 이름 | **chất** · bích · cơ · rô · chuồn | §3-A ② |
| rule citations | «(Luật TDA 2024, điều 20)» · «điều 73 Luật giải WSOP 2026» · «(Luật giải WSOP, điều 109)» | EN 인용 축어 유지(판본·번호 바꾸지 마라 — EN-먼저 후보 §1-J) |
| action 동사 | call · raise · fold · check · bet 영어 정본 · 산문 동사 «bỏ bài»·«cược»·«theo» 허용 · 🔴 «tố» 산문 금지(기존 vi «tố lừa» → **bluff**) | §3-A ④ |

### 1-C. 조판 (계획 §3-A ②)
- 숫자 베트남식: 천 단위 **마침표** `10.200` · `2.598.960` · 소수 **쉼표** `3,03%` · `0,0032%` · `~0,197%` · `1,5×` · **% 앞 공백 없음** · 비율 `2,7:1` · `$` 앞붙임. **값은 EN 축어, 구분자만** 바꾼다(C 전사 대조가 정규화 후 비교).
- 카드 토큰(`A♠ K♥ 10♦`)과 랭크 문자열(`A-K-Q-J-10` · `QQQ55` · `K-K-K-Q-Q`)은 **축어**. 풀어 쓸 때만 «đôi Át», «lá K», «ba lá Q»(«già/đầm/bồi» 금지).
- EN 산문의 `T-9`(flush-vs-straight L96) 같은 T 표기는 `10-9`로(§3-A ② — 보드·무늬 카드는 10). `:::hand[…]` 안의 `10♠`는 그대로.
- 하이라이트 색(`==g:` `==r:` `==b:` `==`) · `**굵게**` 위치는 EN과 같게. `**` 중첩 금지 · 백틱 금지.
- Texas Hold'em 곧은 `'` · «Hold'em» 단독 허용 · «Holdem» 금지 · poker 소문자.

### 1-D. 링크 — **편차 0**
6편의 EN 내부링크 대상은 전부 계획 §1 «51편» 안이다: hand-rankings · flush-vs-straight · kicker · tiebreak-rules · split-pot-rules · reading-the-board(🅱 이 레인) · texas-holdem-rules-for-beginners · showdown-rules · all-in-rules(🅰 기존 vi) · probability(🅲) · starting-hands-chart(🅳) · icm · tournament-vs-cash-game(🅴) · glossary(🅵 — 글 `holdem-glossary`). 제외 대회 가이드 5편 링크 **0** · 외부 링크 0 · 페이지 내 앵커 `(#…)` 0 · `<a id=` 0(6편 grep 확인).
→ **EN 링크를 전부 그대로** `/vi/blog/<slug>`로. 썸네일 인자 `"thumb:/images/…"` 그대로. 앵커 텍스트만 베트남어.
- 🆕 **도구 앵커**(현지 추가 · 계획 §3-A ⑤ 문구 고정 · fr H-25 선례): hand-rankings(«1-Second Hand-Reading Routine» 절 끝 1문장)와 reading-the-board(«Board Reading Mistakes» 절 끝 1문장)에 각 1개 — `[máy tính xác suất poker](/vi/calculator)`. 문장은 도구 FAQ 축어로 만든다: «**khi board đủ, máy cho biết người thắng và tay bài thắng, hoặc báo chia pot**» (`app/vi/calculator/faq.ts` L42) · 보조로 «đặt 5–7 lá vào tab "Xếp hạng bài", máy sẽ tự tìm tổ hợp năm lá tốt nhất»(같은 줄). 다른 4편에는 넣지 않는다.
- readnext 카드 줄 = `/vi/blog/<slug> | <vi 제목> | <이미지 그대로>` — 제목은 이 레인 6편이면 확정 카피 `title`을 짧게 줄인 것, all-in-rules(split-pot readnext)는 «Luật all-in & side pot»(🅰가 재작성 중이라 현 제목에 묶이지 않는다).
- 관련 글 그리드 카드의 대상 중 아직 vi가 없는 글(starting-hands-chart · probability · glossary · icm)도 **건다**(배포는 51편 머지 뒤 1회).
- 카드 11px 라벨(§3-A ⑥ 사전 + 이 레인 🆕): Hand Rankings → **Thứ hạng tay bài** · Tiebreaker → **So bài cùng hạng** · Split Pot → **Chia pot** · Pillar → **Kiến thức nền tảng** · Beginner Guide → **Hướng dẫn người mới** · Kicker → **Kicker** · Hand Matchup / Board Reading / Starting Hands → 확정 카피 «카드 라벨» 절(§1-H). 같은 EN 라벨 = 같은 vi 라벨(6편 교차).

### 1-E. 원시 HTML 줄 (축어 · 스타일 문자열 한 글자도 바꾸지 마라)
- **관련 글 그리드**(`## Bài viết liên quan` 아래 `<div style="display:grid;…">`): href만 `/vi/blog/…`, 카드 안 글자(라벨·제목·설명)만 베트남어. `onmouseover`/`onmouseout` 그대로.
- **크림 박스**(`<div style="background:rgba(255,248,210,0.10);…">` … `</div>`): 여는 줄·닫는 줄·**앞뒤 빈 줄**까지 EN 그대로(빈 줄이 없으면 마크다운 표가 안 그려진다). padding 값이 편마다 다르다(`4px 20px 20px` / `16px 20px`) — 각 EN 줄을 그대로 복사.
- 디렉티브(`:::stripe` · `:::tip[…]:::` · `:::note[…]:::` · `:::hand[카드] 라벨:::` · `:::compare` · `:::steps` · `:::tiebreak` · `:::quiz:::`) = 형식 그대로, 사람이 읽는 글자만 번역. `:::hand[…]`의 카드 목록 **축어**, 라벨 «Board (5 cards)» → **«Board (5 lá)»** · «Board (4 cards, turn)» → **«Board (4 lá, turn)»**. `|` 개수 보존. `:::quiz:::`(hand-rankings L53)는 그대로 둔다(로케일 페이지에선 렌더러가 지운다).
- 이미지 줄 `![alt](path "title")`: path 축어, alt·title만 베트남어(카드 토큰 축어). reading-the-board 이미지 3장 중 2장은 title 없음(L114 · L143 · L205) → vi도 title 없이.

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩 · tldr 안 마크다운 · «tổng hợp / đầy đủ nhất / từ A đến Z» 류 · slug·이미지 변경 · 존칭·anh/chị · 족보 영어 단독(«flush»만 쓰고 «thùng» 없음) · 액션 베트남어 정본(«tố»·«mù») · «bàn» = board · «Sảnh Thượng»·«bánh xe»·«lá lẻ»·«kiểm tra»(check) · **베트남 카지노·클럽·대회·금액 창작**(EN 경험담에 장소·금액이 없다 — 없는 채로 옮겨라. «cash game live»·«buy-in»은 EN에 있으니 허용) · 합법성·실머니·앱 추천 · 하이라이트 색 변경 · 경쟁사 이름(SERP 오류는 «cách giải thích hay gặp»으로만) · 다른 게임 용어(Tiến lên «chặt heo»·Mậu binh «sảnh rồng 13 lá»·xì tố 족보)를 홀덤 족보에 들여오기 · 단독 «X là gì» 오염 헤드를 seoTitle·H1·tags에.

### 1-G. 형제 글 인용 (같은 사이트 안 같은 사실 · 축어로)
- **`:::tiebreak` 10행**: hand-rankings(L185~196)를 먼저 쓰고, tiebreak-rules(L83~94)는 **hand-rankings vi 행을 축어 복사**한다(두 번역이 갈리지 않게). EN 1행만 다르다(hand-rankings «Tie only when the board itself is the royal — everyone chops» vs tiebreak «Two of them only happens when the board is the royal — everyone chops») — 뜻이 같으니 tiebreak도 hand-rankings vi 1행을 그대로 쓴다. 기존 vi 10행(«Thùng Phá Sảnh Hoàng Gia|Chỉ hòa khi chính bàn là thùng phá sảnh hoàng gia — mọi người chia pot|-Không kicker» …)을 §1-B로 교정해 재사용(«bàn» → «board» · 라벨 `+Kicker` / `-No kicker` → `+Dùng kicker` / `-Không kicker`(기존 vi 축어)).
- **로열 플러시 확률**(hand-rankings FAQ 🆕 «xác suất thùng phá sảnh hoàng gia» 답 · EN `holdem-probability` L49 축어): «Royal Flush | 1 in 649,740 (0.000154%) | 1 in 30,940 (0.0032%)» → 5장 = 1 trên 649.740 (0,000154%) · 리버까지 7장 = 1 trên 30.940 (0,0032%) + `[xác suất poker](/vi/blog/holdem-probability)` 앵커. hand-rankings EN L83 «roughly once in 31,000 hands»와 같은 값(반올림)이다 — 본문 L83은 EN대로 «khoảng một lần mỗi 31.000 ván».
- **flush vs straight 수치**는 두 편에서 같은 값: 5장 5.108 / 10.200 · 7장 3,03% / 4,62%(hand-rankings L256 · flush-vs-straight 전편).
- **odd chip**: split-pot L114~122(TDA 2024 Rule 20 · 버튼 왼쪽 첫 승자)와 tiebreak L157(WSOP 2026 Rule 73 인용)은 같은 규칙 — 두 편의 vi 문장이 서로 모순되지 않게. WSOP 인용은 **영어 원문을 « » 이탤릭으로 그대로 두고** 바로 뒤에 베트남어로 풀어 쓴다(번역문을 원문처럼 인용하지 않는다).
- **보드 플레이·muck**: kicker L118(TDA 2024 Rule 19) · split-pot L91(WSOP Rule 109) · reading L174(TDA 2024 Rule 12 cards speak) — 같은 취지(«úp bài(muck)하면 chia pot 몫도 잃는다») · 세 편 문장 일치.
- **set/trips 정의**: hand-rankings L140~142 · FAQ L366 · reading L151~161 — §1-B 고정문 한 가지로.

### 1-H. 카피 확정 경위 (A-⑥)
- Fable 서브 1회(입력 = 0-1·0-2 볼륨·AC·PAA·related 축어 · EN 메타/H2/H3/FAQ 축어 · §3-A ①~⑦ 고정문·용어·오염 헤드 · §3-C 소유표 · posting.mdc «SEO 카피» 절 축어 · 기존 vi hand-rankings 카피). 출력 그대로 각 편 «확정 카피»에 실었고, **Opus 조정 3건**만 가했다:
  1. split-pot desc 160자(하드리밋 정각) → «Có — đây là khi nào chia pot: … , và chop …» 을 «Có — chia pot khi 5 lá giống hệt nhau, khi bài chung …, luật chip lẻ và chop …»으로 **151자**(키워드 보존).
  2. hand-rankings FAQ 23(로열 확률) 앵커: Fable은 `/vi/calculator`로 적었으나 §1-D 도구 앵커는 편당 1개(«1-Second Routine» 절)이고 확률 수치의 형제 출처는 `holdem-probability`(§1-G) → **`[xác suất poker](/vi/blog/holdem-probability)`**로 교체.
  3. 용어 3건을 §1-B에 승격: «lá A bị dominate (dominated ace)» · «chơi theo bài chung (playing the board)» → «chơi theo board» · «chip lẻ (odd chip)»(일치).
- 글자 수 Opus 재측정(String.length · node): seoTitle 54~58 / 60 · desc 147~156 / 160 · tldr 248~320 · title 62~69 — 초과 0.
- Fable 판단 메모(축어 요지):
  1. **훅 6종 상호 비겹침** — hand-rankings «Tưởng thắng mà lại thua pot?»(기존 유지 · 키워드부만 «thứ hạng tay bài» → «thứ tự bài poker» 590) · flush «Vì sao thùng lại ăn sảnh?»(유일한 vì sao) · kicker «A9 thua AK ở lá nào?» · tiebreak «Cùng một đôi, ai thắng?»(EN의 «Same pair» 중복을 여기로만) · split «Thắng ván mà chỉ nhận nửa pot?» · reading «5 lá nào được tính?».
  2. **오염 회피** — 단독 «X là gì»·«nuts là gì»·«tứ quý»·«sảnh rồng»은 어느 헤드에도 없다. «royal flush»·«kicker là gì»·«hòa bài poker»는 tags까지만. «thùng phá sảnh là gì»는 §3-C가 축어 지정한 hand-rankings H2 1곳만. 도구 의도 구는 title/H1/tags 0건.
  3. **레인 간 소유** — 같은 EN FAQ가 두 편에 걸리는 9쌍(flush 정의 · what beats · ace as 1 · both hole cards · same hand · playing the board · suits · both flush · tie possible)은 전부 문장을 갈랐다(각 편 FAQ 표에 «변형» 표시). flush-vs-straight는 thùng phá sảnh 결합형 헤드를 쓰지 않음(H2 6 개명). tiebreak는 chia pot·kicker 선두 없음 · split은 «hòa … ai thắng» 선두 없음 · reading은 thứ tự 선두 없음.
  4. **카드 라벨** — Hand Matchup → **So sánh tay bài** · Board Reading → **Đọc bài chung** · Starting Hands → **Bài khởi đầu**(11px 라벨 · 도구 앵커 «bảng bài khởi đầu theo vị trí»와 다른 자리라 허용).
  5. **«so bài» / «hòa» 용법** — «so bài» = 패 비교 행위(tiebreak 소유 · 헤드 선두에 사용) · «hòa» = 결과 상태 · «hòa bài poker»는 tags 전용 · split-pot은 결과를 «chia pot»으로만 말하고 «hòa»는 desc·tldr 1회.
  6. **열어둔 판단**(헤드 머지 때 보라): ① hand-rankings desc의 «xác suất từng tay»(헤드 아님 · 서열표 Odds 열 근거) — 🅲 레인이 이의 있으면 그 구만 빼면 된다(약 133자). ② hand-rankings seoTitle 뒷부 «Thứ tự bài poker mạnh nhất»(AC 군 수용) vs «… đầy đủ»(더 자연) — 전자로 확정.

### 1-I. hand-rankings 재작업 지침 (기존 vi 편 → EN 현행 1:1)
- 기존 `lib/posts-vi/holdem-hand-rankings.ts`(2026-09-27 · masterUpdated 09-07)는 EN 09-07판 기준이라 **FAQ 8 vs EN 20**, H2 문구가 EN 10-06판과 다르고, 용어가 §3-A 이전 표기(대문자 족보 · «bàn» · «tố lừa» · «Steel wheel» 영어 그대로)다. → **EN 10-06판 골격으로 다시 쓴다.** 기존 문장 중 §13 검산을 통과한 자리(3 퍼즐 답 · 서열표 · tiebreak 10행 · 매치업 표)는 §1-B 교정만 하고 **재사용해도 된다**(L-B §6-1 «기존 원고를 버릴 이유 없음»).
- 기존 편의 좋은 자산: `> **Quy tắc kết thúc mọi tranh cãi**` 라벨 · 퍼즐 답 3개 · «Hai Đôi … KK99-A thắng QQJJ-A» 서술 · Short Deck 설명. 기존 편의 교정 대상: «Thùng Phá Sảnh Hoàng Gia»(산문) → 소문자 · «bàn» → «board/bài chung» · «tố lừa bị theo» → «bluff bị call» · «lá phụ (kicker)» → «kicker (lá phụ)» · «Steel wheel» → §1-B · «3 điều cần nhớ» → «Những điều cần nhớ» · «Set ăn được nhiều chip hơn» 류 전략 수사는 EN 분량만 · «90% lỗi của người mới»(L288 EN «90%»)는 EN 축어라 유지.
- `slug`·`date: "2026-06-09"`·`image`·`emoji` 불변 · `masterUpdated: "2026-10-06"` · `updated` = 집필일 · tags·seoTitle·desc·title = 확정 카피.

### 1-J. EN-먼저 후보 (A에서 발견 · 진행 파일 «EN-먼저 후보»에 등재 · B는 EN대로 옮긴다)
- **TDA 조항 번호 판본 드리프트** — EN kicker L118 «TDA 2024 Rule 19» · split-pot L116 «TDA 2024 Rule 20» · reading L174 «TDA 2024 Rule 12». L-B §6-5(아스트라 10-08 · TDA 공식 원문 직접 열람 «2026 Rules, Version 1.0, Sept 7, 2026»)에 따르면 현행 판본은 playing the board = 20 · odd chip = 21 · cards speak = 13 · side pots = 23. **규칙 내용은 같다** → vi는 EN 인용(2024 · 19/20/12)을 축어로 옮기고, 헤드에 «EN 4편(kicker·split·reading + tiebreak L157은 WSOP라 별도) 인용을 TDA 2026으로 올릴지» 판정 요청. 번역에서 임의로 번호를 바꾸지 마라(출처 판본과 번호가 짝이다).

---
## holdem-hand-rankings — EN updated 2026-10-06 · P1 · 기존 편 재작업

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Poker Hand Rankings in Texas Hold'em — Best to Worst, With the Odds |
| seoTitle | Thought You Won but Lost the Pot? — Poker Hand Rankings & Ties |
| desc | Flopped a flush and still lost the pot? Here are all 10 poker hand rankings best to worst, the real odds behind each, and how kickers and ties decide it. |
| tldr | Poker hand rankings from best to worst are: Royal Flush, Straight Flush, Four of a Kind, Full House, Flush, Straight, Three of a Kind, Two Pair, One Pair, and High Card. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-09 · 2026-10-06 · 14 min · 🃏 |
| image | /images/holdem-hand-rankings-hero.webp |
| imageAlt | Royal Flush — 10 J Q K A of spades on a poker table with chip stacks and dealer button |
| tags | "poker hand rankings", "texas holdem hands", "poker hands order", "what beats what in poker", "poker kicker", "poker tie breaker", "best poker hands", "holdem hand chart" |

### 소유표 (계획 §3-C ⑥′ · L-B §7-1)
- **주인인 검색어**: poker hands 2.900(9/10) · bài poker 1.900(족보 의도만 — 시작 패·배분은 🅳·🅰) · poker ranking(s) 1.600 · poker hand rankings 1.000(10/10) · thứ tự poker 1.000 · **thứ tự bài poker 590(9/10 · vi 주력 표현)** · thùng phá sảnh 1.000(10/10) · thùng phá sảnh là bài gì 140 · thùng phá sảnh poker 110 · xếp hạng bài poker 210 · thứ tự bài trong poker 140 · thứ tự bài mạnh trong poker 110 · full house poker 260 · straight flush 140 · sám cô 90 · thứ tự bài poker tiếng việt 50 · 족보 이름 결합형 전부 · poker chart 70 · bảng xếp hạng bài · cheat sheet 170(족보 포스터 의도 · 도구는 조준 안 함).
- 🔴 **필수 축어**(계획 §3-C «레인 A로 넘기는 처리»): H2 «**Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu?**» + FAQ «**Thùng phá sảnh có lớn hơn tứ quý không?**»(20) · «sảnh rồng» 별칭 1회(헤드 금지).
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: nuts(→ reading-the-board) · xác suất / tính xác suất / máy tính(→ 🅲·`/vi/calculator` · FAQ 1문항 + 앵커만) · bài khởi đầu / chart / bảng range / hand chart(→ 🅳·`/vi/hand-chart` — EN 태그 «holdem hand chart»는 **버린다**) · thuật ngữ(→ `/vi/glossary`) · «thùng và sảnh cái nào lớn hơn» 선두(→ flush-vs-straight · 여기서는 FAQ 변형 + 앵커) · «so bài / hòa» 선두(→ tiebreak) · 단독 «tứ quý»·«sảnh rồng»·«royal flush»·«cù lũ»(섞임 → 결합형만).

### 구조 (EN L## · 축어 목록 — 본문은 EN 파일에서 · 10-09 grep 재확인)
```
L27 [H] ## What Are the Poker Hand Rankings, Best to Worst?
L31 [HTML] <div style="background:rgba(255,248,210,0.10);border:1px solid rgba(255,240,180,0.35);border-radius:14px;padding:4px 20px 20px;margin:24px 0"> (크림 박스 열기)
L33 [표1] | # | Hand | Also called | What it is | Odds (by river) |   (L35~44 10행)
L46 [HTML] </div>
L50 [BOX] > **The one rule that wins arguments**  (L51 «roughly 61%»)
L51 [LINK] /en/blog/holdem-kicker  thumb=/images/holdem-kicker-hero.webp
L53 [DIR] :::quiz:::
L57 [H] ## Card Strength: The 30-Second Foundation
L61 [H] ### Rank order (high to low)
L67 [H] ### Suits don't rank
L73 [H] ## What Are the 10 Poker Hands? (Each One Explained)
L77 [H] ### #1 — Royal Flush
L79 [DIR] :::hand[A♠,K♠,Q♠,J♠,10♠] Royal Flush — A-K-Q-J-10, all spades:::
L85 [H] ### #2 — Straight Flush
L87 [DIR] :::hand[9♥,8♥,7♥,6♥,5♥] Straight Flush — five hearts in sequence:::
L93 [H] ### #3 — Four of a Kind (Quads)
L95 [DIR] :::hand[8♣,8♦,8♥,8♠,K♥] Four of a Kind — four eights + kicker:::
L101 [H] ### #4 — Full House (Boat)
L103 [DIR] :::hand[Q♠,Q♥,Q♦,5♣,5♠] Full House — three queens + two fives:::
L109 [BOX] > **The most common cooler**
L112 [H] ### #5 — Flush
L114 [DIR] :::hand[A♦,J♦,8♦,6♦,2♦] Flush — five diamonds:::
L120 [H] ### #6 — Straight
L122 [DIR] :::hand[7♠,6♥,5♣,4♦,3♠] Straight — five in a row, mixed suits:::
L132 [H] ### #7 — Three of a Kind (Trips / Set)
L134 [DIR] :::hand[J♣,J♠,J♥,A♦,4♠] Three of a Kind — three jacks + kickers:::
L146 [H] ### #8 — Two Pair
L148 [DIR] :::hand[10♠,10♥,8♣,8♦,A♠] Two Pair — tens and eights + ace kicker:::
L154 [H] ### #9 — One Pair
L156 [DIR] :::hand[K♠,K♦,9♥,6♣,2♠] One Pair — kings + three kickers:::
L162 [H] ### #10 — High Card
L164 [DIR] :::hand[A♣,Q♠,9♥,5♦,3♣] High Card — no combination:::
L172 [H] ## How Do Kickers and Ties Work in Poker?
L174 [IMG] ![Poker showdown — comparing two players' best five-card hands](/images/holdem-kicker-showdown-neutral.webp "At showdown, the best five-card hand takes the pot")
L185 [DIR] :::tiebreak   (L186~195 10행)
L196 [DIR] :::
L198 [LINK] /en/blog/holdem-tiebreak-rules , /en/blog/holdem-split-pot-rules
L202 [H] ## Read the Board: 3 Live Puzzles
L204 [IMG] ![K-K-K-A-2 board on a poker table — can you spot the full house before the dealer does?](/images/holdem-hand-rankings-board-puzzle.webp "Poker board reading puzzle — find your best five-card hand")
L208 [H] ### Puzzle 1 — The hidden full house
L210 [DIR] :::hand[A♠,A♦,K♥,K♣,Q♠] Board (5 cards):::
L216 [H] ### Puzzle 2 — The flush that's actually better
L218 [DIR] :::hand[7♥,8♥,9♥,10♥,J♠] Board (5 cards):::
L224 [H] ### Puzzle 3 — When you have to share
L226 [DIR] :::hand[K♠,K♦,K♥,A♠,2♠] Board (5 cards):::
L234 [H] ## What Beats What in Poker? The Matchups People Argue About
L238 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:24px 0"> (크림 박스 열기)
L240 [표2] | Matchup | Winner | Why |   (L242~248 7행)
L250 [HTML] </div>
L254 [H] ## Why Does a Flush Beat a Straight?
L256 [LINK] /en/blog/holdem-probability  thumb=/images/holdem-probability-hero.webp
L262 [H] ## The 1-Second Hand-Reading Routine
L264 [IMG] ![Infographic of a paired 9♥ Q♥ 9♠ 8♣ 7♠ community board — reading the pairs and possible straights to find your best five cards](/images/holdem-hand-rankings-board-read.webp "How to read a poker board fast — …")
L278 [H] ## How Do You Memorize Poker Hands Fast?
L282 [표3] | Step | What to do | Time |
L292 [H] ## Are Poker Hand Rankings the Same in Every Game?
L296 [표4] | Game | Hand rankings | Key difference |
L307 [DIR] :::readnext[Keep reading]
L308 /en/blog/holdem-flush-vs-straight | Does a Flush Beat a Straight? | /images/holdem-flush-vs-straight-hero.webp
L309 /en/blog/holdem-tiebreak-rules | Kicker & Tie-Breaker Rules | /images/holdem-tiebreak-hero.webp
L310 [DIR] :::
L312 [H] ## FAQ   (L314~390 **Q.** 20개 · L328 FAQ 4 안 /en/blog/holdem-flush-vs-straight)
L396 [H] ## The 3 Things to Remember
L404 [LINK] /en/blog/holdem-starting-hands-chart
L408 [H] ## Related Posts
L410 [HTML] <div style="display:grid …> (관련 글 그리드 · 카드 6)
L441 [HTML] </div>
```
- 표 **4**(L33 서열 10행 · L240 매치업 7행 · L282 암기 3단계 · L296 게임별 4행) · 본문 이미지 **3**(kicker-showdown-neutral · hand-rankings-board-puzzle · hand-rankings-board-read) · 디렉티브 quiz·hand×13·tiebreak·readnext · FAQ **20**.

### 링크
EN 내부링크 = kicker(L51 thumb) · tiebreak-rules · split-pot-rules(L198) · probability(L256 thumb) · flush-vs-straight(L328 FAQ) · starting-hands-chart(L404) + readnext 2(flush-vs-straight · tiebreak) + 그리드 6(flush-vs-straight «Hand Matchup» · tiebreak «Tiebreaker» · split-pot «Split Pot» · texas-holdem-rules-for-beginners «Beginner Guide» · starting-hands-chart «Starting Hands» · reading-the-board «Board Reading»). **편차 0** · 🆕 도구 앵커 1(`/vi/calculator` «máy tính xác suất poker» — «1-Second Routine» 절 끝 1문장 · §1-D) · 🆕 FAQ 로열 확률 답의 holdem-probability 앵커(§1-G).

### 키워드·SERP 요지 (L-B §0·§3-2~3-7·§5·§6-1·§7-1)
- SERP: 베트남어 원문 해설이 얇다 — 상위는 영어 글의 번역 제목(GLD·WPF·Sporting News) · reddit `?tl=vi` · 운영사(Natural8·GGPoker) · wikipoker · ai-hay. «thùng phá sảnh» 1,000(10/10)인데 상위 글이 SF·royal·flush·flush draw를 한 단어에 섞어 쓴다 → **첫 화면에서 세 개념을 가른다**(H2 «Thùng phá sảnh là gì — khác … hoàng gia ở đâu?»).
- **우리가 더 줄 것 3**: ① 7장 퍼즐 3개(EN L202~232) + «5 lá mạnh nhất trong 7 lá» 명시 ② 서열표 «리버까지 확률» 열 + FAQ에서 5장 기준 대비(§1-G) · 경쟁 확률표 오기(«1 trên 1,36») 반면교사 ③ 경험담 4자리(아래).
- 흔한 오해(차별화 재료 · 경쟁사 이름 없이 «cách giải thích hay gặp»으로만): «thùng phá sảnh = royal»(✗ — A-high만 royal) · «sảnh = 5 lá liên tiếp» 정의에 «cùng chất» 누락으로 SF와 혼동(✗) · «sám cô thắng sảnh»(✗) · «board có cù lũ thì luôn chia pot»(✗ — 포켓 페어가 tứ quý). EN 본문에 이미 반박 근거가 있다(L35~44 표 · L85~91 · L112~118 · L226~230 퍼즐 3) — 새 문단을 만들지 말고 해당 H3 안 1문장으로.
- 레딧 실재 질문(훅 재료): «족보를 어떻게 외우나» → H2 «How Do You Memorize» 절이 답 · «보드 두 페어 + 홀카드 한 장으로 cù lũ 되나» → 퍼즐 1·3이 답.

### 확정 카피 (Fable 서브 1회 → Opus 글자 수 재측정)
#### 메타
- **title** (69) : Thứ tự bài poker Texas Hold'em — 10 tay bài từ mạnh nhất đến yếu nhất
- **seoTitle** (57) : Tưởng thắng mà lại thua pot? — Thứ tự bài poker mạnh nhất
- **desc** (153) : Có thùng (flush) mà vẫn thua pot? Thứ tự bài poker đầy đủ: 10 tay bài từ mạnh nhất đến yếu nhất, xác suất từng tay và cách kicker quyết định người thắng.
- **tldr** (320) : Thứ tự bài poker từ mạnh nhất đến yếu nhất: thùng phá sảnh hoàng gia (royal flush), thùng phá sảnh (straight flush), tứ quý (four of a kind), cù lũ (full house), thùng (flush), sảnh (straight), sám cô (three of a kind), hai đôi, một đôi và mậu thầu (high card). Cùng hạng thì so kicker (lá phụ); chất bài không xếp hạng.
- **tags** (9) : "thứ tự bài poker", "thứ tự bài mạnh trong poker", "xếp hạng bài poker", "poker hand rankings", "poker hands", "bài poker mạnh nhất", "thùng phá sảnh poker", "texas holdem hands", "royal flush"
- imageAlt(vi) : Thùng phá sảnh hoàng gia — 10 J Q K A chất bích trên bàn poker cùng các chồng chip và nút dealer

#### H2 (질문형 10/12 = 83%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| 1 | What Are the Poker Hand Rankings, Best to Worst? | Thứ tự bài poker từ mạnh nhất đến yếu nhất như thế nào? | Q |
| 2 | Card Strength: The 30-Second Foundation | Độ mạnh lá bài: nền tảng trong 30 giây | – |
| 3 | What Are the 10 Poker Hands? (Each One Explained) | 10 tay bài poker gồm những gì? Giải thích từng tay | Q |
| 🆕 | — (3 뒤 · #10 H3 다음) | Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu? | Q |
| 🆕 | — (위 🆕 뒤) | Thứ tự bài poker tiếng Việt và tiếng Anh: tên nào ứng với tên nào? | Q |
| 4 | How Do Kickers and Ties Work in Poker? | Kicker (lá phụ) và thế hòa trong poker quyết định ra sao? | Q |
| 5 | Read the Board: 3 Live Puzzles | Đọc bài chung (board): 3 bài toán thực chiến | – |
| 6 | What Beats What in Poker? The Matchups People Argue About | Trong poker bài nào to nhất, bài nào ăn bài nào? | Q |
| 7 | Why Does a Flush Beat a Straight? | Vì sao thứ tự bài poker lại xếp như vậy? | Q |
| 8 | The 1-Second Hand-Reading Routine | Làm sao nhìn ra tay bài trong 1 giây? | Q |
| 9 | How Do You Memorize Poker Hands Fast? | Làm sao nhớ thứ tự bài poker nhanh nhất? | Q |
| 10 | Are Poker Hand Rankings the Same in Every Game? | Thứ hạng tay bài có giống nhau ở mọi thể thức poker không? | Q |

🆕 메모: 「Thùng phá sảnh là gì — …」는 H3 #2를 대체하지 않는다 — H3 #2는 서열 안 정의, 🆕 H2는 경쟁 글 공통 약점(SF·royal 혼용)을 정면으로 가르는 자리(구성 조건: 5 lá liên tiếp + cùng chất · A-high만 royal · «thùng phá sảnh» 한 단어가 두 족보에 쓰이는 사정). 「tiếng Việt và tiếng Anh」는 §1-B 명칭 10쌍을 2열 표로(새 수치 0). H2 7은 «thùng và sảnh cái nào lớn hơn» 선두 금지라 개명 — 본문 첫 링크 = flush-vs-straight(L256 EN 링크는 probability thumb — 둘 다 건다).

#### H3
| EN H3 | vi H3 |
|---|---|
| Rank order (high to low) | Thứ tự từ cao xuống thấp |
| Suits don't rank | Chất bài không xếp hạng |
| #1 — Royal Flush | #1 — Thùng phá sảnh hoàng gia (royal flush) |
| #2 — Straight Flush | #2 — Thùng phá sảnh (straight flush) |
| #3 — Four of a Kind (Quads) | #3 — Tứ quý (four of a kind) |
| #4 — Full House (Boat) | #4 — Cù lũ (full house) |
| #5 — Flush | #5 — Thùng (flush) |
| #6 — Straight | #6 — Sảnh (straight) |
| #7 — Three of a Kind (Trips / Set) | #7 — Sám cô (three of a kind: trips / set) |
| #8 — Two Pair | #8 — Hai đôi (two pair) |
| #9 — One Pair | #9 — Một đôi (one pair) |
| #10 — High Card | #10 — Mậu thầu (high card) |
| Puzzle 1 — The hidden full house | Bài toán 1 — cù lũ ẩn |
| Puzzle 2 — The flush that's actually better | Bài toán 2 — thùng lớn hơn bạn tưởng |
| Puzzle 3 — When you have to share | Bài toán 3 — khi phải chia pot |

#### FAQ (EN 20 + 🆕 3)
| # | EN Q | vi Q |
|---|---|---|
| 1 | What is a flush in poker? | Thùng (flush) gồm những lá nào? (변형 — «thùng trong poker là gì»는 flush-vs-straight 몫) |
| 2 | What is a full house in poker? | Cù lũ trong poker là gì? (PAA 축어) |
| 3 | What is a straight in poker? | Sảnh (straight) gồm những lá nào? (변형) |
| 4 | Does a flush beat a straight in poker? | Thùng xếp trên hay dưới sảnh trong thứ tự bài poker? (변형 · 답 안 flush-vs-straight 앵커 L328) |
| 5 | Does a full house beat a flush? | Có cù lũ gặp thùng thì ai thắng? (변형 — «cù lũ ăn thùng không»은 flush 글 몫) |
| 6 | What beats a straight in poker? | Bài nào lớn hơn sảnh trong poker? |
| 7 | What beats a flush in poker? | Trên thùng còn những tay bài nào? |
| 8 | What beats a full house in poker? | Bài nào lớn hơn cù lũ trong poker? |
| 9 | What beats a royal flush in poker? | Có bài nào lớn hơn thùng phá sảnh hoàng gia không? |
| 10 | What beats a straight flush in poker? | Thùng phá sảnh nào lớn nhất? (AC · 90) |
| 11 | What is a kicker? | Kicker (lá phụ) dùng để làm gì? (변형 — 정의형은 kicker 글 몫) |
| 12 | Can two players have the same hand? | Hai người có thể có tay bài giống hệt nhau không? |
| 13 | Do you have to use both of your hole cards? | Có bắt buộc dùng cả hai lá bài tẩy không? |
| 14 | What's the difference between a set and trips? | Set và trips khác nhau ở đâu? |
| 15 | What is the highest hand in poker? | Bài mạnh nhất trong poker là gì? (AC · 10) |
| 16 | Is three of a kind better than two pair? | Sám cô với 2 đôi cái nào lớn hơn? (AC) |
| 17 | Does a straight flush beat four of a kind? | Thùng phá sảnh có lớn hơn tứ quý không? (축어 · 필수 · 20) |
| 18 | What is the lowest (worst) hand in poker? | Bài yếu nhất trong poker là gì? |
| 19 | Can you have three pairs in poker? | Trong poker có 3 đôi không? |
| 20 | Can you use an ace as a 1 in poker? | Lá A có thể tính là 1 không? |
| 🆕21 | — (PAA) | Cù lũ tiếng Anh là gì? |
| 🆕22 | — (AC) | Sám cô ăn sảnh không? |
| 🆕23 | — (허용 1문항 · §1-G) | Xác suất ra thùng phá sảnh hoàng gia là bao nhiêu? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| thứ tự bài poker (590) | title · seoTitle · desc · tldr · H2 1·7·9 · tags |
| thứ tự bài mạnh trong poker (110) / thứ tự bài mạnh poker (AC) | seoTitle 변형 · tags |
| xếp hạng bài poker (210) · thứ hạng bài poker (30) | tags · H2 10 |
| poker hands (2.900) · poker hand rankings (1.000) · texas holdem hands (50) | tags |
| thùng phá sảnh (1.000) · thùng phá sảnh poker (110) · thùng phá sảnh trong poker là gì (30) | H3 #2 · 🆕 H2 · tags |
| thùng phá sảnh nào lớn nhất (90) | FAQ 10 |
| thùng phá sảnh có lớn hơn tứ quý không (20) · thùng phá sảnh và tứ quý (20) · 비교문 (90) | FAQ 17 |
| thứ tự bài poker tiếng việt (50) · thùng phá sảnh tiếng anh (30) · cù lũ tiếng anh là gì (10) | 🆕 H2 명칭 대조 · FAQ 21 |
| cù lũ trong poker là gì (40) | FAQ 2 |
| trong poker bài nào to nhất (40) · bài mạnh nhất trong poker (10) · bài poker mạnh nhất (10) | H2 6 · FAQ 15 · tags |
| sám cô (90) · sám cô với 2 đôi · sám cô ăn sảnh không (AC) | H3 #7 · FAQ 16·22 |
| royal flush (390 · 섞임) | tags까지만 |
| mậu thầu (50) · một đôi (50) · hai đôi (10) | tldr · H3 |
| 레딧 «족보 외우는 법» | H2 9 |

#### 카드 라벨(이 편 그리드 6)
Hand Matchup → So sánh tay bài · Tiebreaker → So bài cùng hạng · Split Pot → Chia pot · Beginner Guide → Hướng dẫn người mới · Starting Hands → Bài khởi đầu · Board Reading → Đọc bài chung

### §13 자리 (C 손검산·전사 대조 대상 · 10-09 grep)
- 카드 L: 79 81 · 87 89 · 95 97 · 103 105 · 114 116 · 122 124 · 134 136 140 142 · 148 150 · 156 158 · 164 166 · **퍼즐 210 212 214 · 218 220 222 · 226 228 230** · 264(이미지 alt 9♥ Q♥ 9♠ 8♣ 7♠) · 316(FAQ A♦ J♦ 8♦ 6♦ 2♦)
- 수치 L: 35~44(서열표 «Odds (by river)» 0.0032% · 0.0279% · 0.168% · 2.60% · 3.03% · 4.62% · 4.83% · 23.5% · 43.8% · 17.4%) · 51(«roughly 61%») · 83(«once in 31,000 hands») · 107(QQQ55 > JJJ99) · 256(3.03% · 4.62%) · 288(«90%»)
- 표 L240~248 매치업(«A-2-3-4-5 vs 10-J-Q-K-A» · «Same pair, K kicker vs J kicker» 등 7행) · `:::tiebreak` L185~196 전체 · 서열 «A > K > … > 2»(L63) · Short Deck «A-6-7-8-9»(L296 표).
- 🔴 퍼즐 3 답(L230) 검산 고정: 보드 K♠ K♦ K♥ A♠ 2♠ + A♥ 3♣ = KKK-AA cù lũ · 이기는 것 둘뿐 = A-A(AAA-KK) · K♣(tứ quý K). 기존 vi 답과 같다.

### 경험담 자리 (EN 축어 → 베트남 독자 맥락으로 다시 쓰되 없는 사실 금지)
- L23: «I've spent more nights than I can count watching that exact "I thought I won" face across a table, and it almost always traces back to one missed detail on the board. …»
- L110: «> In twelve years around the felt, "my nut flush lost to a boat" is the single most frequent beat I hear players groan about. Any time the board pairs, check for a full house *before* you commit with a flush or a straight.»
- L214(퍼즐 1 답 안): «The first home game I ever dealt, I watched two different players muck this exact hand thinking "AAKK + Q is just two pair" — it isn't.»
- L274: «I still run this exact scan — flush, then straight, then pairs — on every single board, no matter how many hours I've been sitting there. …»

### 현지 추가 (확정 카피의 🆕 H2·FAQ를 채우는 법 — 새 사실 금지)
- 🆕 H2 «Thùng phá sảnh là gì — khác thùng phá sảnh hoàng gia ở đâu?»: 3~5문장 + 카드 2줄. 재료는 EN #1(L79~83)·#2(L87~91)·flush-vs-straight L158~163(8♥ 7♥ 6♥ Q♠ 3♦ 보드에서 K♥ 2♥ = thùng · 10♥ 9♥ = thùng phá sảnh — 형제 글 축어 허용)뿐. 요지: ① 5 lá liên tiếp **và** cùng chất(둘 다) ② A-K-Q-J-10 cùng chất만 «hoàng gia» ③ 베트남어로는 한 단어 «thùng phá sảnh»이 두 족보에 두루 쓰이니 «hoàng gia»를 붙여 가른다 ④ 둘이 만나면 높은 쪽(L89). 새 핸드 금지.
- 🆕 H2 «Thứ tự bài poker tiếng Việt và tiếng Anh»: §1-B 명칭 10쌍 2열 표(«Thùng phá sảnh hoàng gia | Royal flush» … «Mậu thầu | High card») + «sám cô = bộ ba = xám» · «mậu thầu = bài cao» 별칭 1줄 · «sảnh rồng/sảnh chúa»는 **이 표에 넣지 않는다**(#1 H3 본문 1회로 끝). 새 사실 0.
- 🆕 FAQ 21 «Cù lũ tiếng Anh là gì?»: «full house» + «boat / full boat» 별칭(EN L38 «Also called») + 읽는 법 «cù lũ Q kèm 5 (QQQ55)»(§1-B).
- 🆕 FAQ 22 «Sám cô ăn sảnh không?»: 아니다 — sảnh(#6)가 sám cô(#7) 위(EN L240 표 «Straight vs Three of a Kind | Straight» 근거). 2문장.
- 🆕 FAQ 23 «Xác suất ra thùng phá sảnh hoàng gia là bao nhiêu?»: §1-G 수치(5 lá 1 trên 649.740 = 0,000154% · 7 lá đến river 1 trên 30.940 = 0,0032%) + `[xác suất poker](/vi/blog/holdem-probability)` 앵커. L83 «khoảng một lần mỗi 31.000 ván»과 같은 값임을 한 줄.
- FAQ 1·3·5·7·11 «변형» 문항의 답은 EN 답 축어(문항만 바뀐다).
- 도구 앵커 1문장(«1 giây» 절 끝 · §1-D 축어).

### 하지 말 것
- EN 태그 «holdem hand chart» 승계 금지(§3-C ⑥). «Same in Every Game?» 절에서 베트남 변형(xì tố·mậu binh·tiến lên) **서술 금지** — EN 표 L296의 게임만(§3-A ② 고정문 «Tên gọi xì tố/xì phé …»는 🅰 beginners 몫이라 여기선 쓰지 않는다).
- «sảnh rồng» = 서열표 1칸 + #1 H3 1회뿐. 
- EN-먼저 후보: 없음(이 편).

---
## holdem-flush-vs-straight — EN updated 2026-09-28 · P2 · 신규

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Does a Flush Beat a Straight? The Math and the Misreads |
| seoTitle | Does a Flush Beat a Straight? Yes — and What Beats a Flush |
| desc | Slid a straight forward — and a flush took the pot? A flush always beats a straight. Here's the math, what beats a flush, and 3 boards that fool players. |
| tldr | A flush (five cards of one suit — ~0.197% of five-card deals) always beats a straight (five in sequence, ~0.392%) in Texas Hold'em — because a flush is rarer: across all seven cards to the river, 3.03% versus 4.62% for the straight. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-09-28 · 11 min · ⚡ |
| image | /images/holdem-flush-vs-straight-hero.webp |
| imageAlt | Infographic: ace-high flush A♠ J♠ 9♠ 6♠ 2♠ beside a nine-high straight with a gold FLUSH WINS badge explaining why a flush ranks higher |
| tags | "does a flush beat a straight", "flush vs straight", "what beats a flush", "what is a straight flush", "why does a flush beat a straight", "flush vs full house", "higher flush", "flush and straight difference" |

### 소유표 (L-B §1-1·§7-2)
- **주인**: «thùng và sảnh cái nào lớn hơn» 10(AC) · «thùng và sảnh trong poker»·«thùng và sảnh là gì»(AC) · related «Thùng với sảnh nào lớn hơn» · flush vs straight 20 · «cù lũ với thùng cái nào lớn hơn» 30 · «cù lũ ăn thùng không» 10 · «cù lũ với sảnh cái nào lớn hơn» 10 · «thùng phá sảnh và cù lũ cái nào lớn hơn»(AC) · PAA «Flush trong poker là gì?» · flush poker là gì 50 · «thùng trong poker là gì»·«sảnh trong poker là gì»(AC) · straight flush 140(SF 절 보조).
- **금지 헤드**: «thứ tự bài poker»·«poker hands» 선두(→ hand-rankings) · «thùng phá sảnh có lớn hơn tứ quý không» H2 축어(hand-rankings FAQ 몫 — 여기선 변형 «… và tứ quý» 비교 절 + 앵커) · xác suất(제목·태그 — 본문 수치는 OK) · nuts · máy tính.

### 구조
```
L25 [H] ### The Short Answer
L27 [DIR] :::stripe   (L28~30 · 5,108 vs 10,200 · ~2×)
L31 [DIR] :::
L33 [BOX] > **Quick answer**
L38 [H] ## Does a Flush Beat a Straight? Where the Two Hands Sit
L42 [표1] | Rank | Hand | Example |   (L44~48 5행 · 카드)
L50 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L54 [H] ## Why Does a Flush Beat a Straight? The Math
L58 «2,598,960»
L60 [표2] | Hand | Combinations | Probability | Verdict |   (L62~66)
L68 [LINK] /en/blog/holdem-probability  thumb=/images/holdem-probability-hero.webp   (🔴 L68 = fr 기준과 다른 유일한 문장 — «among hand types, the rarer one always ranks higher»)
L70 [H] ### Why this feels backwards
L74 [DIR] :::tip[If you hold a flush draw and your opponent is drawing to a straight, you win the collision — …]:::
L78 [H] ## 3 Board Spots That Still Fool Players
L80 [IMG] ![Board showing 8♥ 7♥ 6♥ 5♠ A♣ — …](/images/holdem-flush-vs-straight-board.webp "Three suited cards on board — …")
L82 [LINK] /en/blog/holdem-reading-the-board
L84 [H] ### Spot 1 — You make a straight, but the board is three of a suit
L86 [DIR] :::hand[8♥,7♥,6♥,5♠,A♣] Board (5 cards):::
L90 [H] ### Spot 2 — A made straight with a flush draw on top
L92 [DIR] :::hand[8♥,7♥,6♠,2♣] Board (4 cards, turn):::
L98 [H] ### Spot 3 — You have the flush, they table a straight
L100 [DIR] :::hand[J♠,9♠,7♠,4♣,2♦] Board (5 cards):::
L106 [H] ## What Beats a Flush in Poker?
L110 [DIR] :::compare   (L111~116)
L117 [DIR] :::
L121 [DIR] :::hand[K♠,9♠,9♥,4♠,2♦] Board (5 cards):::
L125 [LINK] /en/blog/holdem-tiebreak-rules
L129 [H] ## Flush vs Flush, Straight vs Straight — Who Wins the Tie?
L133 [표3] | Player | Flush | Result |   (L135~136)
L145 [표4] | Player | Straight | Result |   (L147~148 Q-J-10-9-8 vs J-10-9-8-7)
L150 [LINK] /en/blog/holdem-split-pot-rules
L154 [H] ## What Is a Straight Flush? When Both Happen at Once
L156 [IMG] ![9♥ 8♥ 7♥ 6♥ 5♥ — a straight flush in hearts, the #2 hand in poker](/images/holdem-flush-vs-straight-sf.webp "Straight flush — …")
L169 [H] ## Are Poker Hands Ranked Differently in Short Deck?
L175 [DIR] :::readnext[Keep reading]
L176 /en/blog/holdem-tiebreak-rules | Kicker & Tie-Breaker Rules | /images/holdem-tiebreak-hero.webp
L177 /en/blog/holdem-split-pot-rules | When Is a Pot Split? | /images/holdem-split-pot-hero.webp
L178 [DIR] :::
L180 [H] ## FAQ   (L182~210 **Q.** 8개 · L200 FAQ 5 안 /en/blog/holdem-hand-rankings)
L216 [H] ## The Takeaways
L222 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules , /en/blog/texas-holdem-rules-for-beginners
L226 [H] ## Related Posts
L228 [HTML] <div style="display:grid …> (그리드 · 카드 3: hand-rankings «Hand Rankings» · tiebreak «Tiebreaker» · split-pot «Split Pot»)
L244 [HTML] </div>
```
- 표 **4**(L42 서열 · L60 조합·확률 · L133 thùng vs thùng · L145 sảnh vs sảnh) · 본문 이미지 **2**(flush-vs-straight-board · -sf) · 디렉티브 stripe·tip·hand×4·compare·readnext · FAQ **8**.

### 링크
hand-rankings(L50 thumb · L200) · probability(L68 thumb) · reading-the-board(L82) · tiebreak-rules(L125) · split-pot-rules(L150) · takeaways L222(hand-rankings · tiebreak · texas-holdem-rules-for-beginners) · readnext 2(tiebreak · split-pot) · 그리드 3. **편차 0**.

### 키워드·SERP 요지 (L-B §1·§3-14·§7-2·§10-1)
- 전용 비교 글 0 — «thùng và sảnh cái nào lớn hơn»는 AC 1위인데 1페이지가 규칙 글·운영사·레딧 번역으로 채워진다. «cù lũ» AC 15개 중 비교 질문이 6개(thùng·tứ quý·sảnh) → EN `:::compare`(L110~117) + L119~123 풀하우스 예시가 이미 답한다.
- **우리가 더 줄 것 3**: ① 조합 수 10.200 vs 5.108 + 5장/7장 두 기준(상위 글은 5장 빈도와 드로 완성 확률을 섞는다) ② 3장 동무늬 보드 7장 예시 3개(L84~102) ③ 페어드 보드 풀하우스 예시(L119~123 · 경험담).
- 흔한 오해: «sảnh khó hơn thùng nên phải mạnh hơn»(✗ — L54~68) · «thùng phá sảnh = sảnh + thùng cộng lại»(✗ — L160~163 같은 5장이어야).

### 확정 카피
#### 메타
- **title** (62) : Thùng và sảnh cái nào lớn hơn? Toán học và 3 board dễ đọc nhầm
- **seoTitle** (57) : Vì sao thùng lại ăn sảnh? — Thùng và sảnh cái nào lớn hơn
- **desc** (151) : Lật sảnh ra mà bị thùng lấy pot? Thùng luôn lớn hơn sảnh. Phép toán đằng sau, bài nào ăn thùng, cù lũ với thùng cái nào lớn hơn và 3 board dễ đọc nhầm.
- **tldr** (268) : Thùng (flush — 5 lá cùng chất, khoảng 0,197% số bộ 5 lá) luôn lớn hơn sảnh (straight — 5 lá liên tiếp, khoảng 0,392%) trong Texas Hold'em, vì thùng hiếm hơn: tính trên cả 7 lá đến river, thùng ra 3,03% còn sảnh 4,62%. Trên thùng còn có cù lũ, tứ quý và thùng phá sảnh.
- **tags** (8) : "thùng và sảnh cái nào lớn hơn", "thùng và sảnh trong poker", "flush vs straight", "flush poker là gì", "cù lũ với thùng cái nào lớn hơn", "cù lũ ăn thùng không", "thùng trong poker là gì", "sảnh trong poker là gì"
- imageAlt(vi) : Đồ họa: thùng A cao A♠ J♠ 9♠ 6♠ 2♠ bên cạnh sảnh 9 cao với huy hiệu vàng FLUSH WINS giải thích vì sao thùng xếp cao hơn

#### H2 (질문형 7/8 = 88%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| (H3) | The Short Answer | Trả lời ngắn | – |
| 1 | Does a Flush Beat a Straight? Where the Two Hands Sit | Thùng và sảnh cái nào lớn hơn? Hai tay bài nằm ở đâu trong thứ tự | Q |
| 2 | Why Does a Flush Beat a Straight? The Math | Vì sao thùng lớn hơn sảnh? Phép toán đằng sau | Q |
| 3 | 3 Board Spots That Still Fool Players | 3 board vẫn đánh lừa người chơi | – |
| 4 | What Beats a Flush in Poker? | Bài nào lớn hơn thùng trong poker? | Q |
| 🆕 | — (4 뒤) | Cù lũ với thùng cái nào lớn hơn — còn cù lũ với sảnh? | Q |
| 5 | Flush vs Flush, Straight vs Straight — Who Wins the Tie? | Thùng gặp thùng, sảnh gặp sảnh — ai thắng? | Q |
| 6 | What Is a Straight Flush? When Both Happen at Once | Khi vừa thùng vừa sảnh thì thành gì? Thùng phá sảnh (straight flush) | Q |
| 7 | Are Poker Hands Ranked Differently in Short Deck? | Short Deck xếp thùng và sảnh khác không? | Q |

🆕 메모: 「Cù lũ với thùng …」는 EN `:::compare`(L110~117) + L119~123 풀하우스 예시가 이미 답한 것을 H2로 승격(30+10+10 · AC 군 7개) — 본문은 2문장 + 기존 블록 재배치, 새 수치 0. H2 6은 «thùng phá sảnh là bài gì»(140 · hand-rankings 소유) 헤드를 피해 «Khi vừa thùng vừa sảnh…»로 — 본문에서 hand-rankings 🆕 SF H2로 앵커.

#### H3
| EN H3 | vi H3 |
|---|---|
| The Short Answer | Trả lời ngắn |
| Why this feels backwards | Vì sao thấy ngược đời |
| Spot 1 — You make a straight, but the board is three of a suit | Board 1 — bạn có sảnh, nhưng board có 3 lá cùng chất |
| Spot 2 — A made straight with a flush draw on top | Board 2 — sảnh đã thành, nhưng còn flush draw bên trên |
| Spot 3 — You have the flush, they table a straight | Board 3 — bạn có thùng, đối thủ lật sảnh |

#### FAQ (EN 8 + 🆕 4)
| # | EN Q | vi Q |
|---|---|---|
| 1 | Does a flush beat a straight in poker? | Thùng có lớn hơn sảnh không? |
| 2 | Does a straight beat a flush? | Sảnh có bao giờ ăn được thùng không? |
| 3 | Why does a flush beat a straight? | Vì sao thùng lại lớn hơn sảnh? |
| 4 | What beats a flush in poker? | Những tay bài nào ăn được thùng? |
| 5 | What beats a straight in poker? | Những tay bài nào ăn được sảnh? |
| 6 | Can you have a higher flush than another player? | Thùng của tôi có thể lớn hơn thùng của đối thủ không? |
| 7 | Does the suit of a flush matter? | Chất của thùng (cơ, rô, chuồn, bích) có quan trọng không? |
| 8 | Can a flush and a straight ever tie or split the pot? | Thùng và sảnh có bao giờ hòa hay chia pot không? |
| 🆕9 | — (PAA) | Flush trong poker là gì? |
| 🆕10 | — (AC) | Thùng và sảnh trong poker là gì? |
| 🆕11 | — (AC · 10) | Cù lũ ăn thùng không? |
| 🆕12 | — (10) | Cù lũ với sảnh cái nào lớn hơn? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| thùng và sảnh cái nào lớn hơn (10 · AC · related «Thùng với sảnh nào lớn hơn») | title · seoTitle · H2 1 · tags |
| thùng và sảnh trong poker / là gì (AC) | tags · FAQ 10 |
| flush vs straight (20) | tags |
| flush poker là gì (50) · PAA «Flush trong poker là gì?» | tags · FAQ 9 |
| thùng trong poker là gì · sảnh trong poker là gì (AC) | tags · FAQ 9·10 답 |
| cù lũ với thùng cái nào lớn hơn (30) · cù lũ ăn thùng không (10) · cù lũ với sảnh cái nào lớn hơn (10) · cù lũ hơn/và thùng (AC) | desc · 🆕 H2 · FAQ 11·12 · tags |
| thùng phá sảnh và cù lũ cái nào lớn hơn (AC) | 🆕 H2 본문 1줄 + hand-rankings 앵커 |
| 5.108 / 10.200 / 2.598.960 · 0,197% · 0,392% · 3,03% · 4,62% · 36 tổ hợp (EN 수치) | tldr · H2 2 |

#### 카드 라벨(그리드 3)
Hand Rankings → Thứ hạng tay bài · Tiebreaker → So bài cùng hạng · Split Pot → Chia pot

### §13 자리
- 카드 L: 16(imageAlt) · 44~48(표1 예시) · 80(이미지 alt) · 86 88 · 92 94 96 · 100 102 · 121 123 · 135~136(표3) · 147~148(표4 랭크 문자열) · 156 158 160 162~163
- 수치 L: 8(tldr ~0.197% · ~0.392% · 3.03% · 4.62%) · 29(stripe 5,108 vs 10,200 · ~2×) · 58(2,598,960) · 62~66(표2 624 · 3,744 · 5,108 · 10,200 · 54,912 · 0.024% · 0.144% · 0.197% · 0.392% · 2.11%) · 68(1.5× · 4.62% · 3.03% · 2× ways) · 158(«36 combinations» SF) · 188 · 192 · 219
- 🔴 L96 «anyone holding T-9» → vi «10-9»(§1-C).

### 경험담 자리
- L19: «The first big pot I ever lost in a live cash game went exactly like this: I rivered a ten-high straight, slid it forward like it was gold — and a quiet regular flipped over two hearts. ==r:The dealer pushed the pot the other way==, and I replayed that hand the whole drive home.»
- L119: «I've paid off more paired-board boats holding a pretty nut flush than I'd like to admit, so the danger sign I watch for now is simple: a **paired board**.»

### 현지 추가
- 🆕 H2 «Cù lũ với thùng cái nào lớn hơn — còn cù lũ với sảnh?»: EN `:::compare`(L110~117)와 L119~123(K♠ 9♠ 9♥ 4♠ 2♦ 보드 · A♠ 5♠ thùng nuts vs K♦ 9♦ cù lũ 9 kèm K)을 그 H2 아래로 옮기고 서열 문장 2개(cù lũ > thùng > sảnh > sám cô · tứ quý > cù lũ — EN L42 표 순서)만 덧붙인다. «thùng phá sảnh và cù lũ»는 1줄(SF가 더 위) + hand-rankings 🆕 SF H2 앵커. 새 확률·조합 수 금지.
- 🆕 FAQ 9 «Flush trong poker là gì?»: 5 lá cùng chất(순서 무관) · SF는 별도 상위 족보 — EN FAQ L182·hand-rankings FAQ L316 축어 뜻. 🆕 FAQ 10 «Thùng và sảnh trong poker là gì?»: 두 정의 1문장씩 + 서열 한 줄. 🆕 FAQ 11·12: 답 = «không / cù lũ lớn hơn»(compare 블록 근거) 2문장.
- H2 6 본문 첫 문단에서 «thùng phá sảnh» 한 단어가 royal에도 쓰인다는 사정은 **hand-rankings 앵커 1문장**으로만(정의 본체는 저쪽).

### 하지 말 것
- Short Deck 절(L169~171)은 EN 축어(«flush beats a full house» in 6+) — 베트남 룸·앱 이름 추가 금지.
- EN-먼저 후보: 없음.

---
## holdem-kicker — EN updated 2026-10-06 · P3 · 신규

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | What Is a Kicker in Poker — Rules, Counting & the Dominated Ace |
| seoTitle | What Is a Kicker in Poker? The Side Card That Wins Pots |
| desc | A kicker is the side card that breaks ties in poker — which hands have one and how many, why A9 loses to AK, and the quads exception most guides get wrong. |
| tldr | A kicker is the highest side card that isn't part of your main hand — it breaks ties when two players share the same rank. High card uses 4 kickers, one pair 3, two pair 1, trips 2; straights, flushes, full houses, and straight flushes have none. It's why AK beats AQ when the board pairs an ace. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-07-08 · 2026-10-06 · 10 min · 🃏 |
| image | /images/holdem-kicker-hero.webp |
| imageAlt | Two players turning over A-K and A-Q at showdown with an ace on the board — the king kicker deciding who wins the pot |
| tags | "poker kicker", "what is a kicker in poker", "kicker rules", "does a flush have a kicker", "playing the board", "dominated ace", "kicker card", "does four of a kind have a kicker" |

### 소유표 (L-B §3-12·§7-3·§10-2)
- **주인**: «kicker trong poker là gì»(AC · 볼륨 `-`) · «kicker poker là gì»(AC) · kicker poker 10 · «poker kicker rule»·«poker ace kicker»·«top kicker poker»(AC 영어) · kicker là gì 140(3/10 섞임 · 건설 «kicker bê tông» 오염 → **tags까지만**, seoTitle·H1 금지).
- **금지 헤드**: «so bài / hòa» 선두(→ tiebreak) · «bài khởi đầu»(→ 🅳 · L133 앵커만) · «chơi bài chung» 선두(→ reading-the-board — EN 태그 «playing the board»는 보조로 승계 가능 · 확정 카피 따름) · thuật ngữ.
- vi PAA 없음(건설 PAA뿐) → EN FAQ 13 이식 + AC 정의형 축어(계획 §4 커버리지 판정).

### 구조
```
L23 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L27 [H] ### Kickers at a glance
L29 [DIR] :::stripe   (L30~33 · 4 · 3 · 1 · 0)
L34 [DIR] :::
L38 [H] ## What Is a Kicker in Poker?
L48 [H] ## Which Poker Hands Have a Kicker — and Which Don't
L52 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:24px 0"> (크림 박스 열기)
L54 [표1] | Hand | Has a kicker? | Kicker cards |
L66 [HTML] </div>
L70 [LINK] /en/blog/holdem-tiebreak-rules  thumb=/images/holdem-tiebreak-hero.webp   («Flushes are the asterisk» 문단)
L74 [H] ## How Many Kickers Does Each Hand Use?
L78 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:24px 0"> (크림 박스 열기)
L80 [표2] | Hand | Combination | + Kickers | = 5 cards |
L88 [HTML] </div>
L94 [H] ## AK vs AQ: How a Kicker Decides the Winner
L105 [DIR] :::note[Notice both hands share the 9 and 7 from the board. Kickers can come from the board too: …]:::
L109 [H] ## Playing the Board: When Your Kicker Doesn't Play
L118 [LINK] /en/blog/holdem-reading-the-board   («TDA 2024 Rule 19» 같은 문장)
L122 [H] ## Why Does A9 Lose to AK? (The Dominated Ace)
L126 [IMG] ![Two starting hands side by side on green felt — A-K next to A-9 — …](/images/holdem-kicker-dominated.webp "Same ace, different fate: …")
L133 [LINK] /en/blog/holdem-starting-hands-chart  thumb=/images/holdem-starting-hands-chart-hero.webp
L137 [H] ## Does Four of a Kind Have a Kicker?
L145 [DIR] :::readnext[Keep reading]
L146 /en/blog/holdem-hand-rankings | Poker Hand Rankings (Full Order) | /images/holdem-hand-rankings-hero.webp
L147 /en/blog/holdem-tiebreak-rules | How Ties Are Broken in Poker | /images/holdem-tiebreak-hero.webp
L148 [DIR] :::
L150 [H] ## FAQ   (L152~200 **Q.** 13개)
L206 [H] ## The 3 Things to Remember
L212 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules
L216 [H] ## Related Posts
L218 [HTML] <div style="display:grid …> (그리드 · 카드 4: hand-rankings «Hand Rankings» · tiebreak «Hand Rankings»(EN 라벨 그대로) · starting-hands-chart «Starting Hands» · reading-the-board «Board Reading»)
L239 [HTML] </div>
L243 export default POST;
```
- 표 **2**(L54 키커 유무 · L80 키커 개수) · 본문 이미지 **1**(kicker-dominated) · 디렉티브 stripe·note·readnext · FAQ **13** · 파일 끝 `export default POST;`.

### 링크
hand-rankings(L23 thumb · L212) · tiebreak-rules(L70 thumb · L212) · reading-the-board(L118) · starting-hands-chart(L133 thumb) · readnext 2(hand-rankings · tiebreak) · 그리드 4. **편차 0**.

### 키워드·SERP 요지 (L-B §3-12·§4-5·§7-3·§10-2)
- vi kicker 해설 1페이지 = 운영사 1편(R24 · 보드 풀하우스 «무조건 chia pot» 오류) + 레딧 번역 2 + 사전·미식축구·건설. «kicker là gì» 140의 포커 몫 3/10.
- 레딧 실재 질문(훅 재료 · 출처명 없이): 보드 3 5 8 J K, 홀카드 3-K vs 3-Q를 «kicker 문제»로 오해 → 답은 **먼저 족보가 같은지**(KK33J hai đôi vs 33KQJ một đôi) 확인 — EN H2 1(«What Is a Kicker»)의 «kicker는 같은 족보끼리만» 문장에 1문장으로 흡수(새 핸드 금지 — 레딧 카드를 본문에 쓰지 않는다).
- 경쟁 오류(차별화): 키커 비교가 최고 키커 1장에서 멈춤(✗ — EN L98~101 AK vs AQ · L128~131에서 둘째 키커까지 비교) · 보드 cù lũ면 무조건 chia(✗ — reading-the-board L96~101이 반박 · 여기선 앵커).
- **우리가 더 줄 것 3**: ① 족보별 «키커 유무·개수» 표 2개 ② 7장 예시 3개(AK vs AQ · 보드 Broadway · 경험담 A9 vs AK) ③ «tứ quý의 kicker» 예외(L137~141).

### 확정 카피
#### 메타
- **title** (62) : Kicker trong poker là gì — luật, cách đếm và vì sao A9 thua AK
- **seoTitle** (56) : A9 thua AK ở lá nào? — Kicker (lá phụ) trong poker là gì
- **desc** (147) : Kicker (lá phụ) là lá phá thế hòa khi hai người cùng hạng: tay nào có kicker, đếm mấy lá, vì sao A9 thua AK, và ngoại lệ tứ quý nhiều nơi viết sai.
- **tldr** (276) : Kicker (lá phụ) là lá cao nhất không thuộc phần chính của tay bài — nó phá thế hòa khi hai người cùng hạng. Mậu thầu dùng 4 kicker, một đôi 3, hai đôi 1, sám cô 2; sảnh, thùng, cù lũ và thùng phá sảnh không có kicker. Đó là lý do AK thắng AQ khi bài chung (board) có một lá A.
- **tags** (8) : "kicker trong poker là gì", "kicker poker là gì", "kicker poker", "kicker là gì", "poker kicker rule", "poker ace kicker", "top kicker poker", "high kicker poker"
- imageAlt(vi) : Hai người chơi lật A-K và A-Q khi showdown với một lá A trên board — kicker K quyết định ai thắng pot

#### H2 (질문형 7/7 = 100%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| (H3) | Kickers at a glance | Kicker trong một cái nhìn | – |
| 1 | What Is a Kicker in Poker? | Kicker trong poker là gì? | Q |
| 2 | Which Poker Hands Have a Kicker — and Which Don't | Tay bài nào có kicker, tay nào không? | Q |
| 3 | How Many Kickers Does Each Hand Use? | Mỗi tay bài đếm bao nhiêu kicker? | Q |
| 4 | AK vs AQ: How a Kicker Decides the Winner | AK gặp AQ: kicker quyết định người thắng thế nào? | Q |
| 5 | Playing the Board: When Your Kicker Doesn't Play | Khi nào kicker của bạn không được tính? Chơi theo bài chung (playing the board) | Q |
| 6 | Why Does A9 Lose to AK? (The Dominated Ace) | Vì sao A9 thua AK? Lá A bị dominate (dominated ace) | Q |
| 7 | Does Four of a Kind Have a Kicker? | Tứ quý có kicker không? | Q |

🆕 H2 없음 — vi kicker SERP가 비어 있어(해설 1편) EN 구조로 충분. AC·레딧은 H2 1·FAQ 1·14에 흡수.

#### H3
| EN H3 | vi H3 |
|---|---|
| Kickers at a glance | Kicker trong một cái nhìn |

#### FAQ (EN 13 + 🆕 1)
| # | EN Q | vi Q |
|---|---|---|
| 1 | What is a kicker in poker? | Kicker poker là gì? (AC 축어 · H2 1과 표기 분리) |
| 2 | Does a flush have a kicker? | Thùng có kicker không? |
| 3 | Does a straight have a kicker? | Sảnh có kicker không? |
| 4 | Does a full house have a kicker? | Cù lũ có kicker không? |
| 5 | Does four of a kind have a kicker? | Tứ quý nằm trên bài chung thì ai thắng? (H2 7과 분리 · 답은 EN L168~170 축어 — 보드 tứ quý면 5번째 카드) |
| 6 | Does the kicker matter with three of a kind? | Sám cô có so kicker không? |
| 7 | Do two pairs have a kicker? | Hai đôi có kicker không? |
| 8 | Does the kicker have to be in your hand? | Kicker có bắt buộc nằm trong bài tẩy không? |
| 9 | How many kickers are in a poker hand? | Một tay bài có tối đa bao nhiêu kicker? |
| 10 | What is a good kicker in poker? | Kicker thế nào là tốt? |
| 11 | What is an ace kicker (or a king kicker)? | Ace kicker (hay king kicker) nghĩa là gì? |
| 12 | What does "playing the board" mean? | Chơi theo bài chung (playing the board) nghĩa là gì? (변형 — reading-the-board FAQ 3과 문장 분리) |
| 13 | Do kickers matter in Texas Hold'em? | Kicker có quan trọng trong Texas Hold'em không? |
| 🆕14 | — (레딧 오해 · 편집) | So hạng bài trước hay so kicker trước? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| kicker trong poker là gì (AC · `-`) | title · seoTitle · H2 1 · tags |
| kicker poker là gì (AC) | FAQ 1 · tags |
| kicker poker (10) | tags |
| kicker là gì (140 · 3/10 섞임) | tags까지만 |
| poker kicker rule · poker ace kicker · top kicker poker · high kicker poker (AC) | tags · FAQ 10·11 |
| 레딧 «투페어를 키커로 오해» | FAQ 14 |
| A9 vs AK · dominated ace (EN) | seoTitle · desc · H2 6 |

#### 카드 라벨(그리드 4)
Hand Rankings → Thứ hạng tay bài(hand-rankings 카드 · tiebreak 카드 둘 다 EN 라벨이 «Hand Rankings») · Starting Hands → Bài khởi đầu · Board Reading → Đọc bài chung

### §13 자리
- 카드 L: 19(경험담 A♠ 9♣ vs A♥ K♦) · 98 100~101(AK vs AQ · 보드 A♣ 9♦ 5♠ 2♥ 7♣) · 113 115~116(Broadway 보드 10♠ J♦ Q♣ K♥ A♠) · 128 130~131(A9 vs AK · 보드 A♦ 7♣ 2♥ Q♠ 4♦) · 141(tứ quý) · 174(FAQ K♣ K♥ 7♦ 5♣ 2♠) · 178(FAQ K♥ Q♦ vs J♠ Q♥ / Q♣ 7♠ 7♦ 4♥ 2♣)
- 표 L54 · L80 · stripe L29~33(4 · 3 · 1 · 0) · tldr(4 · 3 · 1 · 2 · 0).
- 🔴 L118 «TDA 2024 Rule 19» → «(Luật TDA 2024, điều 19)» 축어(§1-J).

### 경험담 자리
- L19: «The hand that finally taught me what a kicker is cost me a full buy-in. I had ==b:A♠ 9♣==, the board paired my ace, and I shoved thinking top pair was gold. He flipped ==b:A♥ K♦== — same pair of aces, but his king outkicked me, and the pot slid his way. I hadn't lost to a better *hand*; I'd lost to a better ==side card.== …»
- L128~133: «Back to my buy-in. …» · «Same pair again — and my 9 never even got a vote. …»(상대 = EN «He» → vi «anh ta / đối thủ»)

### 현지 추가
- 🆕 FAQ 14 «So hạng bài trước hay so kicker trước?»: 답 = 항상 **hạng bài 먼저** — kicker는 같은 족보끼리만(EN H2 1 L38~46 원리 + L98~101 AK vs AQ 예시 재참조). 레딧 카드(3-5-8-J-K 보드)는 **본문에 쓰지 않는다**(EN 예시만). 2~3문장.
- H2 1 본문에 1문장 추가 허용: «kicker chỉ được so khi hai tay bài cùng hạng — hai đôi với một đôi không phải chuyện kicker»(새 사실 아님 · EN 정의의 재진술).
- «bài khởi đầu» 언급은 H2 6 본문 L133 앵커 1회(`[bài khởi đầu nên chơi theo vị trí](/vi/blog/holdem-starting-hands-chart "thumb:…")`).

### 하지 말 것
- dominated ace **전략**(어떤 A-x를 오픈하나)으로 넓히지 마라 — 🅳 starting-hands-chart 몫(L133 앵커).
- EN-먼저 후보: §1-J(TDA 2024 Rule 19 → 2026 Rule 20).

---
## holdem-tiebreak-rules — EN updated 2026-10-06 · P3 · 신규

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How Ties Are Broken in Poker — Same Hand, Who Wins? |
| seoTitle | Same Hand, Same Pair — Who Wins? Poker Tie-Breaker Rules |
| desc | Same pair at showdown and still lost? How ties are broken in poker — who wins with the same pair or two pair, when the 5th card matters, and when pots split. |
| tldr | Ties are broken in a fixed order: hand rank first, then the cards that make the hand, then kickers from highest to lowest. Same pair → higher first kicker wins; identical five cards → split pot. Suits never decide a tie. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-10-06 · 12 min · ⚖️ |
| image | /images/holdem-tiebreak-hero.webp |
| imageAlt | Poker showdown: A♠ K♦ vs A♥ 9♣ with board A♦ Q♠ 7♥ 3♣ 2♦ — same pair of aces, kicker decides the winner |
| tags | "poker tie breaker rules", "how are ties broken in poker", "who wins same pair poker", "two pair tie poker", "does the 5th card matter in poker", "do suits matter in poker", "highest straight in poker", "poker kicker", "texas holdem ties" |

### 소유표 (L-B §3-16·§7-4·§10-2)
- **주인**: 동률 판정 전반 — «hai người cùng đôi / cùng sảnh trong poker» 류(AC 빈 응답 → 편집 표현 · AC 축어로 표시 금지) · «thứ tự chất bài poker»·«thứ tự chất trong poker»·«thứ tự chất poker»(AC · 답 = 무늬 서열 없음) · related «Trong Poker chất nào to nhất» · «thứ tự sảnh poker»(AC · wheel~Broadway) · so bài poker 30 · hòa bài poker(`-` · 4/10 섞임 → **tags까지만**).
- **금지 헤드**: «chia pot / split pot» 선두(→ split-pot) · «kicker» 선두(→ kicker · EN 태그 «poker kicker»는 보조 승계 가능 · 확정 카피 따름) · «thứ tự bài poker» 선두(→ hand-rankings).
- vi PAA 없음 → EN FAQ 14 이식 + AC(chất·sảnh) 축어.

### 구조
```
L21 [LINK] /en/blog/holdem-hand-rankings   (경험담 문단)
L23 [LINK] /en/blog/holdem-kicker  thumb=/images/holdem-kicker-hero.webp
L27 [H] ### Tie-breaks at a glance
L29 [DIR] :::stripe   (L30~32 · 3 · 1 · 0)
L33 [DIR] :::
L37 [H] ## How Are Ties Broken in Poker? The 3-Step Order
L41 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:24px 0"> (크림 박스 열기)
L43 [표1] | Step | Compare | Detail |
L49 [HTML] </div>
L51 [LINK] /en/blog/holdem-split-pot-rules
L55 [H] ## Who Wins if Two Players Have the Same Pair?
L61 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:16px 20px;margin:20px 0"> (크림 박스 열기 · padding 다름)
L63~64 Player A/B · Board
L66 [표2] | Player | Best Five | Kickers | Result |   (L68~69)
L71 [HTML] </div>
L75 [LINK] /en/blog/holdem-starting-hands-chart
L79 [H] ## Poker Tie-Breaker Rules for Every Hand
L83 [DIR] :::tiebreak   (L84~93 10행 = hand-rankings vi 행 축어 복사 · §1-G)
L94 [DIR] :::
L100 [LINK] /en/blog/holdem-flush-vs-straight
L104 [H] ## Who Wins if Both Players Have Two Pair?
L112 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:16px 20px;margin:20px 0"> (크림 박스 열기)
L114~116 You/Opponent · Flop · Turn/river
L118 [표3] | Player | Best Five | Hand |   (L120~121)
L123 [HTML] </div>
L129 [H] ## Can You Have a Higher Straight? (Where the Wheel Ranks)
L137 [LINK] /en/blog/holdem-flush-vs-straight
L141 [H] ## Does the 5th Card Matter in Poker?
L151 [H] ## Do Suits Matter in Poker?
L157 WSOP 2026 Rule 73 인용(이탤릭 영어 원문 — §1-G)
L163 [H] ## When Your Kicker Doesn't Play — and the Pot Splits
L165 [IMG] ![Infographic: the board A-K-Q-J-10 is the best five for everyone, …](/images/holdem-tiebreak-best5.webp "Best five of seven: …")
L173 [IMG] ![Infographic: on an A-K-Q-J-9 board, A-3 and A-2 both play A-A-K-Q-J, …](/images/holdem-tiebreak-split.webp "When best fives match rank for rank, …")
L175 [LINK] /en/blog/holdem-reading-the-board , /en/blog/holdem-split-pot-rules  thumb=/images/holdem-split-pot-hero.webp
L179 [DIR] :::readnext[Keep reading]
L180 /en/blog/holdem-kicker | What Is a Kicker in Poker? | /images/holdem-kicker-hero.webp
L181 /en/blog/holdem-split-pot-rules | When Is a Pot Split? | /images/holdem-split-pot-hero.webp
L182 [DIR] :::
L184 [H] ## FAQ   (L186~238 **Q.** 14개 · L236 FAQ 13 안 /en/blog/holdem-split-pot-rules)
L244 [H] ## The Takeaways
L250 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-kicker , /en/blog/holdem-split-pot-rules
L254 [H] ## Related Posts
L256 [HTML] <div style="display:grid …> (그리드 · 카드 4: kicker «Kicker» · hand-rankings «Hand Rankings» · flush-vs-straight «Hand Matchup» · split-pot «Split Pot»)
L277 [HTML] </div>
```
- 표 **3**(L43 3단계 · L66 같은 페어 · L118 투페어 역전) · 본문 이미지 **2**(tiebreak-best5 · tiebreak-split) · 크림 박스 3(L41 · L61 · L112 — padding 서로 다름) · 디렉티브 stripe·tiebreak·readnext · FAQ **14**.

### 링크
hand-rankings(L21 · L250) · kicker(L23 thumb · L250) · split-pot-rules(L51 · L175 thumb · L236 · L250) · starting-hands-chart(L75) · flush-vs-straight(L100 · L137) · reading-the-board(L175) · readnext 2(kicker · split-pot) · 그리드 4. **편차 0**.

### 키워드·SERP 요지 (L-B §3-16·§4-5·§5·§7-4)
- «hòa bài poker» SERP = 영어 시작 패·무늬 글 번역 + 마술·뉴스 → **vi 동률 해설이 비어 있다.** AC가 준 실재 표현은 «thứ tự chất bài poker»(무늬 서열을 묻는다)와 «thứ tự sảnh poker»(wheel~Broadway) 둘 — H2 7(«Do Suits Matter»)·H2 5(«Higher Straight»)가 축어로 받는다.
- 경쟁 오류(차별화): 키커 비교가 최고 1장에서 멈춤 · 보드 sảnh이면 «홀카드 무관 chia»(✗ — EN L169 9♥ 7♠ K-Q-J-10-9가 더 낮은 sảnh · L212 FAQ) · 보드 cù lũ 무조건 chia(✗).
- **우리가 더 줄 것 3**: ① 3단계 순서표 + 족보별 `:::tiebreak` ② 족보별 «ai thắng» 7장 예시(같은 페어 · 투페어 역전 · 트립스 · 휠 · 5번째 카드 · 보드 플레이) ③ WSOP 2026 원문 인용(L157).

### 확정 카피
#### 메타
- **title** (62) : So bài poker khi cùng hạng — cùng đôi, cùng sảnh thì ai thắng?
- **seoTitle** (58) : Cùng một đôi, ai thắng? — So bài poker và luật phá thế hòa
- **desc** (154) : Cùng đôi rồi vẫn mất pot? Poker so bài theo thứ tự cố định: hạng bài, lá tạo tay, rồi kicker. Ai thắng khi cùng đôi, cùng sảnh, và lá thứ 5 có tính không.
- **tldr** (262) : Poker phá thế hòa theo thứ tự cố định: so hạng bài trước, rồi so các lá tạo nên tay bài, cuối cùng so kicker (lá phụ) từ cao xuống thấp. Cùng đôi thì kicker đầu cao hơn thắng; giống hệt 5 lá thì chia pot (split pot). Chất bài không bao giờ quyết định thắng thua.
- **tags** (8) : "so bài poker", "hòa bài poker", "thứ tự chất bài poker", "thứ tự chất trong poker", "thứ tự sảnh poker", "hai người cùng đôi trong poker", "hai người cùng sảnh poker", "poker tie breaker rules"
- imageAlt(vi) : Showdown poker: A♠ K♦ gặp A♥ 9♣ với board A♦ Q♠ 7♥ 3♣ 2♦ — cùng đôi A, kicker quyết định người thắng

#### H2 (질문형 7/8 = 88%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| (H3) | Tie-breaks at a glance | Tóm tắt luật so bài | – |
| 1 | How Are Ties Broken in Poker? The 3-Step Order | So bài poker khi hòa theo thứ tự nào? 3 bước cố định | Q |
| 2 | Who Wins if Two Players Have the Same Pair? | Hai người cùng đôi trong poker thì ai thắng? | Q |
| 3 | Poker Tie-Breaker Rules for Every Hand | Luật so bài cho từng tay bài | – |
| 4 | Who Wins if Both Players Have Two Pair? | Cùng hai đôi thì so thế nào? | Q |
| 5 | Can You Have a Higher Straight? (Where the Wheel Ranks) | Thứ tự sảnh poker: sảnh nào lớn hơn, sảnh A-2-3-4-5 đứng ở đâu? | Q |
| 6 | Does the 5th Card Matter in Poker? | Lá thứ 5 có tính trong poker không? | Q |
| 7 | Do Suits Matter in Poker? | Trong poker chất nào to nhất — có thứ tự chất bài không? | Q |
| 8 | When Your Kicker Doesn't Play — and the Pot Splits | Khi nào kicker không được tính và phải chia pot? | Q |

🆕 H2 없음 — AC(«thứ tự chất bài poker» · «thứ tự sảnh poker»)와 related(«Trong Poker chất nào to nhất»)는 H2 5·7 개명으로 흡수. H2 7 답 = «없다 — 무늬 서열은 없다»(경쟁 글이 Tiến lên 무늬 서열을 포커로 끌어오는 오류를 정면으로). H2 8 선두어는 «Khi nào»(kicker·chia pot 선두 아님) · 본문 첫 링크 = kicker 글, 끝 링크 = split-pot.

#### H3
| EN H3 | vi H3 |
|---|---|
| Tie-breaks at a glance | Tóm tắt luật so bài |

#### FAQ (EN 14 + 🆕 0)
| # | EN Q | vi Q |
|---|---|---|
| 1 | How are ties broken in poker? | So bài poker khi hòa như thế nào? |
| 2 | Who wins if two players have the same pair? | Hai người cùng đôi thì ai thắng? |
| 3 | Who wins if both players have two pair? | Cả hai cùng có hai đôi thì ai thắng? |
| 4 | Who wins if two players have the same three of a kind? | Hai người cùng sám cô thì ai thắng? |
| 5 | Does the 5th card matter in poker? | Lá thứ 5 có quan trọng không? |
| 6 | Can you use an ace as a 1 in poker? | Lá A có tính là 1 trong sảnh không, và sảnh đó lớn cỡ nào? |
| 7 | Can you have a higher straight than another player? | Sảnh nào lớn hơn sảnh nào? |
| 8 | Who wins if two players have the same straight? | Hai người cùng sảnh poker thì ai thắng? |
| 9 | Who wins if two players both have a flush? | Hai người cùng có thùng thì ai thắng? |
| 10 | Who wins if two players have the same full house? | Hai người cùng cù lũ thì so thế nào? |
| 11 | What happens if two players both have a straight flush? | Hai người cùng thùng phá sảnh thì sao? |
| 12 | Do suits ever break a tie in Texas Hold'em? | Chất bài có bao giờ phân thắng thua trong Texas Hold'em không? |
| 13 | What happens if both players have the exact same hand? | Hai tay bài giống hệt nhau đến lá cuối thì sao? |
| 14 | Is a tie (split pot) possible in poker? | Hòa trong poker có xảy ra không? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| so bài poker (30) | title · seoTitle · H2 1·3 · FAQ 1 · tags |
| hòa bài poker (`-` · 4/10 섞임) | tags까지만 |
| hai người cùng đôi trong poker · hai người cùng sảnh poker (AC 빈 응답 · 편집 표현) | H2 2 · FAQ 8 · tags |
| thứ tự sảnh poker (AC) | H2 5 · tags |
| thứ tự chất bài poker · thứ tự chất trong poker (AC) · related «Trong Poker chất nào to nhất» | H2 7 · tags |
| poker tie breaker rules (EN) | tags |
| 5번째 카드 · chia pot (EN desc/tldr) | desc · H2 6·8 · FAQ 5·13·14 |

#### 카드 라벨(그리드 4)
Kicker → Kicker · Hand Rankings → Thứ hạng tay bài · Hand Matchup → So sánh tay bài · Split Pot → Chia pot

### §13 자리
- 카드 L: 16(imageAlt) · 63~64 · 68~69(표2 A♠ A♦ K♦ Q♠ 7♥ vs A♥ A♦ Q♠ 9♣ 7♥) · 98(트립스 키커 A♠ J♠ vs A♦ 10♦) · 108(투페어 K♠ Q♦ vs K♥ J♥ / K♦ 9♣ 9♠ 5♦ 2♥) · 114~116 · 120~121(표3 역전 9♠ 9♥ 5♠ 5♦ K♣ vs K♦ K♣ 9♠ 9♥ A♣) · 133(휠 A♠ 5♠ vs 6♥ 5♥ / 4♦ 3♣ 2♠ K♦ Q♥) · 145(5번째 카드 A♠ 8♠ vs A♦ 7♦ / A♥ K♣ Q♦ 4♣ 2♥) · 169 · 171(보드 플레이 A♠ K♥ Q♣ J♦ 10♠ · A♥ K♣ Q♦ J♠ 9♥) · 204 · 212(FAQ 5♦ 6♣ 7♠ 8♥ 2♦ · 9♣ 4♠)
- `:::tiebreak` L83~94 = hand-rankings vi 행 축어(§1-G) · stripe L29~33(3 · 1 · 0) · 표1 L43~48.
- L157 WSOP 2026 Rule 73 인용 → §1-G 처리 · L232 버튼 드로(«card draws») 무늬 서열은 **좌석 추첨 문맥**이라 쇼다운 규칙과 섞지 마라(EN 분량 그대로).

### 경험담 자리
- L21: «I have watched that exact moment stall more games than any other rule: someone half-stands, the dealer taps the felt, and the whole table waits for an explanation. Here it is. …»
- (L159는 1인칭 아님 — «"my spades beat your hearts"»는 인용 대사 → «"bích của tôi lớn hơn cơ của anh"» 식 대사 유지)

### 현지 추가
- 🆕 없음. H2 7 «Trong poker chất nào to nhất»의 답은 EN L151~159 축어(무늬 서열 없음 · 좌석 추첨 L232는 별개) — 새 핸드 금지. H2 5 «Thứ tự sảnh poker»는 EN L129~137(wheel 최저 · 랩어라운드 금지 · Broadway 최고) 축어.
- 2007식 오해(«Át을 들고 있으면 이긴다»)는 vi SERP에 없으니 훅으로 쓰지 않는다(fr과 다름).

### 하지 말 것
- Hi-Lo·Omaha 동률로 넓히지 마라. 좌석 추첨(L232)은 EN 분량만.
- EN-먼저 후보: 없음(WSOP 2026 인용은 현행).

---
## holdem-split-pot-rules — EN updated 2026-10-05 · P4 · 신규

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | When Is a Pot Split? Hold'em Chop Rules |
| seoTitle | Won the Hand but Got Half? — Poker Split Pot & Chop Rules |
| desc | Can you tie in poker? Yes — here's exactly when pots split: identical five-card hands, the board playing for everyone, the odd chip rule, and side-pot chops. |
| tldr | Yes — poker hands can tie. A pot is split (a chop) when two or more players show down the identical best five-card hand. Suits never break the tie, and any leftover odd chip goes to the first tied player left of the dealer button. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-13 · 2026-10-05 · 12 min · 🃏 |
| image | /images/holdem-split-pot-hero.webp |
| imageAlt | Poker split pot — board 8♠ 8♥ 8♦ A♣ K♠ with J♠ 10♥ vs 5♣ 2♦, chips divided by a gold line since neither hand beats the board |
| tags | "split pot poker", "can you tie in poker", "chopped pot", "when is a pot split", "odd chip rule poker", "board plays", "texas holdem chop" |

### 소유표 (L-B §3-15·§7-5·§10-3)
- **주인**: split pot 10(9/10) · split pot poker 10 · chia pot 10 · chop pot 10 · «poker split pot examples» 10 · related «Split pot poker»·«Poker split pot examples» · «cách chia pot poker»(편집 — AC는 «chia bài» 배분뿐).
- **금지 헤드**: «hòa / so bài … ai thắng» 선두(→ tiebreak) · side pot **계산** 헤드(→ 🅰 all-in-rules · L140 앵커) · ICM / deal(→ 🅴 · L207 앵커만) · 🔴 «chia bài»(카드 배분)를 카피에 쓰지 마라.
- vi PAA 없음(«Làm cách nào để chia bài trong poker?»는 배분 질문 — 채택 안 함) → EN FAQ 13 이식.

### 구조
```
L25 [BOX] > **Quick answer**
L30 [H] ### The core numbers
L32 [DIR] :::stripe   (L33~35)
L36 [DIR] :::
L40 [H] ## What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?)
L44 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L48 [H] ## Can You Tie in Poker? The 5 Situations That Split the Pot
L52 [H] ### 1. Identical best five cards
L55 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:20px 0"> (크림 박스 열기 · margin 20px)
L57 [표1] | | Player A | Player B |   (L59~60 Hole · Board)
L63 [HTML] </div>
L67 [H] ### 2. The board plays
L70 [H] ### 3. The same straight
L73 [H] ### 4. The same flush
L78 [H] ### 5. Identical down to the last kicker
L79 [LINK] /en/blog/holdem-tiebreak-rules  thumb=/images/holdem-tiebreak-hero.webp
L83 [H] ## Can Two Players Win the Same Pot? When the Board Plays
L89 [BOX] > **The check:** … [LINK] /en/blog/holdem-reading-the-board
L91 [LINK] /en/blog/holdem-showdown-rules   («WSOP Tournament Rule 109» 같은 문장)
L93 [DIR] :::tip[If the board plays and someone bets the river, **folding on autopilot is the mistake**. …]:::
L97 [H] ## 3 Things That Never Break a Tie in Poker
L99 [IMG] ![Board K♦ K♣ Q♥ Q♦ J♠ with K♠ 7♣ on the left and K♥ 2♦ on the right, …](/images/holdem-split-pot-suit-equals.webp "…")
L103 [H] ### ❌ "My suit is higher, so I win"
L106 [H] ### ❌ "My hole cards are higher, so I win"
L107 [LINK] /en/blog/holdem-kicker
L109 [H] ### ❌ "I used both my cards and they used one"
L114 [H] ## Who Gets the Extra Chip? The Odd Chip Rule   (L116 «TDA 2024 Rule 20» · L118 인용 블록)
L124 [H] ## Do Side Pots Split Too? Ties When Someone Is All-In
L130 [HTML] <div style="background:rgba(255,248,210,0.10) …padding:4px 20px 20px;margin:20px 0"> (크림 박스 열기)
L132 [표2] | Player | Hole | Best five | Result |   (L134~136)
L138 [HTML] </div>
L140 [LINK] /en/blog/holdem-all-in-rules
L144 [H] ## Is the Pot Ever Split Half High, Half Low?
L150 [DIR] :::readnext[Keep reading]
L151 /en/blog/holdem-reading-the-board | How to Read the Board & Find Your Best 5 | /images/holdem-reading-the-board-hero.webp
L152 /en/blog/holdem-all-in-rules | All-In Rules & Side Pots Explained | /images/holdem-all-in-rules-hero.webp
L153 [DIR] :::
L155 [H] ## FAQ   (L157~205 **Q.** 13개 · L207 FAQ 13 안 /en/blog/holdem-icm , /en/blog/holdem-tournament-vs-cash-game)
L211 [H] ## The Takeaways
L217 [LINK] /en/blog/holdem-hand-rankings , /en/blog/holdem-tiebreak-rules , /en/blog/holdem-flush-vs-straight
L221 [H] ## Related Posts
L223 [HTML] <div style="display:grid …> (그리드 · 카드 3: hand-rankings «Hand Rankings» · tiebreak «Tiebreaker» · flush-vs-straight «Hand Matchup»)
L239 [HTML] </div>
```
- 표 **2**(L57 같은 풀하우스 · L132 사이드팟 분할) · 본문 이미지 **1**(split-pot-suit-equals) · 디렉티브 stripe·tip·readnext · FAQ **13**.

### 링크
hand-rankings(L44 thumb · L217) · tiebreak-rules(L79 thumb · L217) · reading-the-board(L89) · showdown-rules(L91) · kicker(L107) · all-in-rules(L140) · icm · tournament-vs-cash-game(L207) · flush-vs-straight(L217) · readnext 2(reading-the-board · all-in-rules) · 그리드 3. **편차 0**.

### 키워드·SERP 요지 (L-B §3-15·§4-5·§7-5)
- «split pot» SERP = 영어·독일어·네덜란드어 해설 + 레딧 ELI5 번역 → vi 전담 글 0. «chia pot» AC는 chia 푸딩뿐(포커 질문 0) · 수요 증거는 약하지만 클러스터 완결·링크 허브 역할(tiebreak·all-in·reading이 전부 여기로 보낸다).
- 경쟁 오류: odd chip 방향 불명(R25 하우스 룰 차이만) · 보드 sảnh «홀카드 무관 chia»(✗ — EN L107 «❌ My hole cards are higher» 절이 **같은 보드 9-8-7-6-5로 정답(chia)**을 보여주고, tiebreak L169가 «더 높은 sảnh» 반례).
- **우리가 더 줄 것 3**: ① 5가지 분할 상황 각각 7장 예시 ② 남는 칩 규칙(TDA 2024 Rule 20 · 버튼 왼쪽) ③ 사이드팟 분할 실례 표(100/300/300 → main 300 · side 400 → A 150 · B 550 · C 0 · 합 700 보존).

### 확정 카피
#### 메타
- **title** (64) : Khi nào chia pot trong poker? Luật split pot và chop pot Hold'em
- **seoTitle** (58) : Thắng ván mà chỉ nhận nửa pot? — Chia pot, split pot poker
- **desc** (151 · Opus 조정 1) : Poker có thể hòa không? Có — chia pot khi 5 lá giống hệt nhau, khi bài chung chơi cho cả bàn, luật chip lẻ và chop khi có pot phụ. Kèm ví dụ split pot.
- **tldr** (279) : Có — poker có thể hòa. Pot được chia (chia pot, split pot hay chop) khi hai người trở lên lật bài (showdown) ra cùng một tay bài 5 lá mạnh nhất giống hệt nhau. Chất bài không bao giờ phá thế hòa, và chip lẻ (odd chip) còn dư thuộc về người hòa đầu tiên bên trái nút dealer (BTN).
- **tags** (7) : "split pot", "split pot poker", "chia pot", "chia pot poker", "chop pot", "poker split pot examples", "cách chia pot poker"
- imageAlt(vi) : Chia pot poker — board 8♠ 8♥ 8♦ A♣ K♠ với J♠ 10♥ gặp 5♣ 2♦, chip được chia bởi một vạch vàng vì không tay nào thắng được board

#### H2 (질문형 6/7 = 86%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| (H3) | The core numbers | Những con số cốt lõi | – |
| 1 | What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?) | Split pot trong poker là gì — chia pot và chop có giống nhau không? | Q |
| 2 | Can You Tie in Poker? The 5 Situations That Split the Pot | Khi nào chia pot trong poker? 5 ví dụ split pot | Q |
| 3 | Can Two Players Win the Same Pot? When the Board Plays | Hai người cùng thắng một pot được không? Khi bài chung (board) chơi cho cả bàn | Q |
| 4 | 3 Things That Never Break a Tie in Poker | 3 điều không bao giờ phá thế hòa trong poker | – |
| 5 | Who Gets the Extra Chip? The Odd Chip Rule | Chip lẻ thuộc về ai? Luật chip lẻ (odd chip) | Q |
| 6 | Do Side Pots Split Too? Ties When Someone Is All-In | Pot phụ (side pot) có chia không? Hòa khi có người all-in | Q |
| 7 | Is the Pot Ever Split Half High, Half Low? | Có khi nào pot chia nửa cao nửa thấp không? | Q |

🆕 H2 없음 — H2 2를 EN «Can You Tie in Poker?»가 아니라 «Khi nào chia pot…»로 연 이유: «hòa … ai thắng» 선두는 tiebreak 몫, 이 글의 소유어는 chia pot/split pot. «poker split pot examples»(10)는 H2 2 부제 «5 ví dụ split pot»으로(5개 H3가 예시).

#### H3
| EN H3 | vi H3 |
|---|---|
| The core numbers | Những con số cốt lõi |
| 1. Identical best five cards | 1. 5 lá mạnh nhất giống hệt nhau |
| 2. The board plays | 2. Bài chung chơi cho cả bàn |
| 3. The same straight | 3. Cùng một sảnh |
| 4. The same flush | 4. Cùng một thùng |
| 5. Identical down to the last kicker | 5. Giống nhau đến kicker cuối cùng |
| ❌ "My suit is higher, so I win" | ❌ «Chất của tôi cao hơn nên tôi thắng» |
| ❌ "My hole cards are higher, so I win" | ❌ «Bài tẩy của tôi cao hơn nên tôi thắng» |
| ❌ "I used both my cards and they used one" | ❌ «Tôi dùng cả 2 lá, họ chỉ dùng 1» |

#### FAQ (EN 13 + 🆕 1)
| # | EN Q | vi Q |
|---|---|---|
| 1 | When is a pot split in poker? | Khi nào pot bị chia trong poker? |
| 2 | How is the pot split in poker? | Chia pot trong poker như thế nào? |
| 3 | Do you split the pot if both players have the same hand? | Hai người cùng tay bài thì có chia pot không? |
| 4 | Do you split the pot on a full house, a straight, or two pair? | Cù lũ, sảnh hay hai đôi giống nhau thì có chia pot không? |
| 5 | What does "chopped pot" mean in poker? | Chop pot nghĩa là gì? |
| 6 | Does suit ever decide who wins a split? | Chất bài có quyết định ai thắng khi chia pot không? |
| 7 | Who gets the odd chip when a pot can't divide evenly? | Chip lẻ không chia đều được thì thuộc về ai? |
| 8 | Can more than two players split a pot? | Hơn hai người có thể cùng chia pot không? |
| 9 | How are split pots handled when someone is all-in? | Có người all-in thì chia pot thế nào? |
| 10 | How do you calculate a side pot? | Pot phụ (side pot) tính như thế nào? (짧게 + all-in-rules 앵커 — 계산 본체는 그쪽) |
| 11 | Who is eligible for a side pot? | Ai được ăn pot phụ? |
| 12 | Can you win both the main pot and a side pot? | Có thể thắng cả pot chính lẫn pot phụ không? |
| 13 | Is a tournament chop the same as a split pot? | Chop deal trong giải đấu có giống split pot không? |
| 🆕14 | — (편집 · 혼동 방지) | Chia pot và chia bài khác nhau ở đâu? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| chia pot (10) · chia pot poker · cách chia pot poker (편집) | title · seoTitle · H2 2 · FAQ 2 · tags |
| split pot (10) · split pot poker (10) · related «Split pot poker» | seoTitle · H2 1·2 · tags |
| chop pot (10) | title · H2 1 · FAQ 5 · tags |
| poker split pot examples (10) · related | H2 2 부제 · tags |
| odd chip (EN) → chip lẻ | H2 5 · FAQ 7 · tldr |

#### 카드 라벨(그리드 3)
Hand Rankings → Thứ hạng tay bài · Tiebreaker → So bài cùng hạng · Hand Matchup → So sánh tay bài

### §13 자리
- 카드 L: 16(imageAlt) · 19(경험담 J♠ 10♥ vs 5♣ 2♦ / 8♠ 8♥ 8♦ A♣ K♠) · 59~60(표1 K♠ 7♣ vs K♥ 2♦ / K♦ K♣ Q♥ Q♦ J♠) · 71(9♠ 8♠ vs 9♥ 8♦ / 7♣ 6♦ 5♥ K♠ 2♣) · 74 · 76(3♠ · K-J-8…) · 79(A♠ K♦ vs A♥ K♣ / A♦ Q♠ 9♣ 6♥ 2♠) · 87 · 99(이미지 alt) · 107(A♠ K♦ vs 2♣ 3♥ / 9♠ 8♦ 7♣ 6♥ 5♠) · 128 · 134~136(표2 A♠ Q♦ · A♣ Q♥ · K♦ K♠ → A-A-Q-J-7 · K-K-A-J-7)
- 수치: L116(101 chip = 50+50+1 · 25 → 5×5) · L128(all-in 100 · 300 · main 300 = 100×3 · side 400 = 200+200) · L134~136(150 · 150+400 · 0) · stripe L32~36.
- 🔴 L116 «TDA 2024 Rule 20» · L91 «WSOP Tournament Rule 109» 축어(§1-J).

### 경험담 자리
- L19: «Early in my poker days I led every street — raised preflop, bet the flop and turn, got called on the river. I flipped over J♠ 10♥. My opponent turned over **5♣ 2♦**. "I win, right?" The dealer said nothing and pointed at the board: ==**8♠ 8♥ 8♦ A♣ K♠**==. …»
- L68 · L87: «that's the 8-8-8-A-K pot from my story» · «That's my 8-8-8-A-K hand: …»(도입 일화 회수 — vi도 같은 자리에서 회수)

### 현지 추가
- 🆕 FAQ 14 «Chia pot và chia bài khác nhau ở đâu?»: «chia bài» = dealer가 카드를 나누는 행위(🅰 game-order 앵커 `/vi/blog/holdem-game-order`) · «chia pot» = 쇼다운 뒤 칩을 나누는 것(이 글). 2문장 · 새 사실 없음.
- H3 «❌ …» 3개는 인용 대사 형식(« ») 유지 — 확정 카피 H3 표 축어.

### 하지 말 것
- 사이드팟 계산 절차를 넓히지 마라(EN L124~140 분량 그대로 · 상세는 all-in-rules 앵커). Hi-Lo 절(L144~148)은 EN 분량 그대로.
- 대회 chop(deal) 절차·ICM 수치 추가 금지(L205~207 앵커만).
- EN-먼저 후보: §1-J(TDA 2024 Rule 20 → 2026 Rule 21).

---
## holdem-reading-the-board — EN updated 2026-10-05 · P3 · 신규

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Read the Board in Hold'em: Your Best 5 Cards From 7 |
| seoTitle | Which 5 Cards Play? — How to Read the Board in Hold'em |
| desc | River's out and you still can't tell what you have? Read any Hold'em board fast: your best 5 cards from 7, board straights and flushes, and playing the board. |
| tldr | In Texas Hold'em you always play the best 5-card hand from 7 (2 hole cards + 5 community cards) — using both hole cards, one, or none at all (playing the board). Scan all 7 cards in a fixed order: flush → straight → paired ranks → high card. |
| category · date · updated · readTime · emoji | hand-rankings · 2026-06-15 · 2026-10-05 · 11 min · 🃏 |
| image | /images/holdem-reading-the-board-hero.webp |
| imageAlt | Texas Hold'em board reading — 5 community cards on dark felt with gold arrows showing which cards combine for best 5-card hand |
| tags | "how to read the board in poker", "best 5 card hand from 7 cards", "playing the board texas holdem", "can you have a flush and a pair", "the nuts in poker", "wet board vs dry board", "paired board poker" |

### 소유표 (계획 §3-C ④ · L-B §3-13·§7-6·§8-1·§10-3)
- **주인**: **nuts**(🔴 고정: H2 «**Nuts trong poker là gì?**» + FAQ nuts 정의 1문항) · nuts poker 10 · the nuts 90 · «nuts trong poker là gì»·«nut poker là gì»·«nuts poker hand»(AC) · board poker 20 · «cách đọc bài trong poker»·«đọc bài trong poker»(AC — 🔴 «đọc bài đối thủ»(상대 패 읽기)와 갈라 «đọc bài chung (board)»로 한정) · «5 lá mạnh nhất trong 7 lá» · chơi bài chung.
- **금지 헤드**: «nuts là gì» 단독(720 · 0/10) · 족보 순서 선두(→ hand-rankings) · board texture **전략**(wet/dry에서의 c-bet·사이즈 → 🅶) · thuật ngữ(L182 glossary 링크는 글 `holdem-glossary`로 그대로).
- vi PAA 없음(nuts PAA는 전부 일반어·식품) → EN FAQ 11 이식 + 🆕 nuts 정의 FAQ.

### 구조
```
L33 [H] ### The Short Answer
L35 [DIR] :::stripe   (L36~38)
L39 [DIR] :::
L41 [BOX] > **Quick answer**
L42 [LINK] /en/blog/holdem-hand-rankings  thumb=/images/holdem-hand-rankings-hero.webp
L46 [H] ## How to Make the Best 5-Card Hand From 7 Cards
L50 [표1] | How many hole cards you use | What it looks like | Of the 21 possible 5-card picks |   (L52~54 · 10 · 10 · 1 of 21)
L60 [표2] | Your hole cards | Board | Best 5 cards | Hand |   (L62~64)
L66 [LINK] /en/blog/holdem-kicker
L70 [H] ## How to Read the Board in 4 Steps
L74 [DIR] :::steps   (L75~78)
L79 [DIR] :::
L81~86 워크스루 A♥ 5♥ / A♦ 7♦ 4♠ 10♣ 2♠
L88 [DIR] :::tip[You always play exactly 5 cards — if you made a straight AND hold a pair, the straight is your hand. Poker never adds them together.]:::
L92 [H] ## What Does "Playing the Board" Mean in Poker?
L98 [LINK] /en/blog/holdem-split-pot-rules  thumb=/images/holdem-split-pot-hero.webp
L108 [H] ## How to Spot a Straight on the Board
L114 [IMG] ![8-high straight in Texas Hold'em — 7 cards spread with 8-7-6-5-4 highlighted in gold showing the made straight](/images/holdem-reading-straight-example.webp)   (title 없음)
L116 [표3] | Hold | Board | Straight? |   (L118~121 4행)
L128 [LINK] /en/blog/holdem-tiebreak-rules
L132 [H] ## How to Spot a Flush on the Board
L136 [표4] | Suited cards on board | What it means |   (L138~141)
L143 [IMG] ![NOT A FLUSH — holding A♠ with only 3 spades on the board does not make a flush in Texas Hold'em](/images/holdem-reading-flush-draw-mistake.webp)   (title 없음)
L147 [LINK] /en/blog/holdem-flush-vs-straight
L151 [H] ## What Happens When the Board Pairs? Trips, Boats, and Quads
L155 Board: K♣ K♦ 7♠ 3♥ 2♣
L157 [표5] | You hold | Your best 5 | Hand |   (L159~161)
L169 [H] ## Can You Have a Flush and a Pair at the Same Time?
L176 [LINK] /en/blog/holdem-hand-rankings   («three pairs» 문장)
L180 [H] ## What Is the Best Possible Hand? Reading the Nuts
L182 [LINK] /en/blog/holdem-glossary
L184~192 넛 스캔 Q♣ 9♥ 6♣ 5♦ 2♠ 3단계
L194 [H] ## Wet Board vs Dry Board: Reading the Texture
L198 [DIR] :::compare   (L199 Dry K♠ 7♦ 2♣ | Wet J♥ 10♥ 8♣)
L203 [DIR] :::
L205 [IMG] ![Dry board vs wet board in Texas Hold'em — K72 rainbow (dry) vs JT8 two-tone (wet) with flush and straight draw arrows](/images/holdem-reading-dry-vs-wet-board.webp)   (title 없음)
L211 [H] ## Board Reading Mistakes That Cost Real Money
L213 [H] ### Mistake 1 — Missing a straight you already made
L217 [H] ### Mistake 2 — Counting four suited cards as a flush
L221 [H] ### Mistake 3 — Forgetting the board is shared
L225 [H] ### Mistake 4 — Ignoring the boat on a paired board
L231 [DIR] :::readnext[Keep reading]
L232 /en/blog/holdem-tiebreak-rules | Kicker & Tie-Breaker Rules | /images/holdem-tiebreak-hero.webp
L233 /en/blog/holdem-split-pot-rules | When Is a Pot Split? | /images/holdem-split-pot-hero.webp
L234 [DIR] :::
L236 [H] ## FAQ   (L238~278 **Q.** 11개)
L284 [H] ## The Takeaways
L290 [LINK] /en/blog/texas-holdem-rules-for-beginners , /en/blog/holdem-hand-rankings
L294 [H] ## Related Posts
L296 [HTML] <div style="display:grid …> (그리드 · 카드 3: hand-rankings «Pillar» · tiebreak «Tiebreaker» · split-pot «Split Pot»)
L312 [HTML] </div>
```
- 표 **5**(L50 홀카드 사용 · L60 예시 · L116 스트레이트 판별 · L136 동무늬 개수 · L157 페어드 보드) · 본문 이미지 **3**(reading-straight-example · reading-flush-draw-mistake · reading-dry-vs-wet-board — **3장 다 title 없음**) · 디렉티브 stripe·steps·tip·compare·readnext · FAQ **11**.

### 링크
hand-rankings(L42 thumb · L176 · L290) · kicker(L66) · split-pot-rules(L98 thumb) · tiebreak-rules(L128) · flush-vs-straight(L147) · glossary(L182 → `/vi/blog/holdem-glossary` 🅵) · texas-holdem-rules-for-beginners(L290) · readnext 2(tiebreak · split-pot) · 그리드 3. **편차 0** · 🆕 도구 앵커 1(`/vi/calculator` «máy tính xác suất poker» — «Board Reading Mistakes» 절 끝 1문장 · §1-D 축어 «khi board đủ, máy cho biết người thắng và tay bài thắng, hoặc báo chia pot» + «Xếp hạng bài» 탭).

### 키워드·SERP 요지 (L-B §3-13·§4-2 R30·R31·§7-6·§8-1·§10-2)
- «nuts là gì» 720 = 0/10(hinative 영어 표현·견과류·부품) · AIO 1 — **조준 금지**, 포커 의도는 «nuts trong poker là gì»·«nuts poker hand»(AC)로만. vi 보드 판독 해설 1페이지 0 → EN L180~192(Q♣ 9♥ 6♣ 5♦ 2♠ 3단계 스캔)가 그대로 1위 재료.
- «cách đọc bài trong poker» AC는 «đọc bài đối thủ»(핸드 리딩)와 섞인다 → H2·desc에서 «đọc bài chung / đọc board»로 한정어를 붙인다.
- 경쟁 오류(차별화): 보드 cù lũ «무조건 chia»(✗ — L96~101 AAA77 보드에서 A♥ = tứ quý Át · 7♠ 7♣ = tứ quý 7) · 보드 sảnh «홀카드 무관»(✗) · 4장 동무늬를 thùng으로(✗ — L143·L217).
- **우리가 더 줄 것 3**: ① 4단계 스캔(steps) + 21조합 표 ② wheel·랩어라운드 직답(L120 · L126 «K-A-2-3-4 is not a straight») ③ 넛 스캔 예시 + 흔한 실수 4개 + 도구 검증 앵커.

### 확정 카피
#### 메타
- **title** (67) : Cách đọc bài chung (board) trong Hold'em: 5 lá mạnh nhất trong 7 lá
- **seoTitle** (54) : 5 lá nào được tính? — Cách đọc bài chung trong Hold'em
- **desc** (156) : River đã lật mà vẫn chưa biết mình có gì? Đọc nhanh board Hold'em: chọn 5 lá mạnh nhất trong 7 lá, nhận ra sảnh và thùng trên bài chung, và nuts là tay nào.
- **tldr** (248) : Trong Texas Hold'em bạn luôn chơi tay bài 5 lá mạnh nhất trong 7 lá (2 lá bài tẩy + 5 lá bài chung) — dùng cả hai lá tẩy, một lá, hoặc không lá nào (chơi theo board). Quét cả 7 lá theo một thứ tự cố định: thùng → sảnh → các lá trùng hạng → bài cao.
- **tags** (8) : "cách đọc bài trong poker", "đọc bài chung poker", "board poker", "5 lá mạnh nhất trong 7 lá", "nuts poker", "the nuts", "nuts poker hand", "playing the board"
- imageAlt(vi) : Đọc bài chung Texas Hold'em — 5 lá bài chung trên nỉ tối với mũi tên vàng chỉ các lá kết hợp thành tay bài 5 lá mạnh nhất

#### H2 (질문형 9/10 = 90%)
| # | EN H2 | vi H2 | 형 |
|---|---|---|---|
| (H3) | The Short Answer | Trả lời ngắn | – |
| 1 | How to Make the Best 5-Card Hand From 7 Cards | Làm sao chọn 5 lá mạnh nhất trong 7 lá? | Q |
| 2 | How to Read the Board in 4 Steps | Cách đọc bài chung (board) trong poker: 4 bước | – |
| 3 | What Does "Playing the Board" Mean in Poker? | «Chơi theo board» (playing the board) trong poker là gì? | Q |
| 4 | How to Spot a Straight on the Board | Làm sao nhận ra sảnh trên board? | Q |
| 5 | How to Spot a Flush on the Board | Làm sao nhận ra thùng trên board? | Q |
| 6 | What Happens When the Board Pairs? Trips, Boats, and Quads | Board có đôi thì sao? Trips, cù lũ và tứ quý | Q |
| 7 | Can You Have a Flush and a Pair at the Same Time? | Có thể vừa thùng vừa đôi cùng lúc không? | Q |
| 8 | What Is the Best Possible Hand? Reading the Nuts | Nuts trong poker là gì? Đọc tay bài mạnh nhất có thể | Q |
| 9 | Wet Board vs Dry Board: Reading the Texture | Board ướt (wet) và board khô (dry) khác nhau ở đâu? | Q |
| 10 | Board Reading Mistakes That Cost Real Money | Những lỗi đọc board nào khiến bạn mất tiền thật? | Q |

🆕 H2 없음 — «cách đọc bài trong poker»(AC)는 상대 패 읽기와 섞여 **tags에만 축어**, H1·H2·본문은 «đọc bài chung (board)». 본문 첫 문단에 «Bài này nói về đọc bài chung (board), không phải đọc bài đối thủ.» 1문장. H2 8 = 계획 §3-C ④ 고정 축어 + 보조구. H2 9는 «khác nhau ở đâu»(식별)로만 — 텍스처 **전략** 금지.

#### H3
| EN H3 | vi H3 |
|---|---|
| The Short Answer | Trả lời ngắn |
| Mistake 1 — Missing a straight you already made | Lỗi 1 — bỏ sót sảnh bạn đã có |
| Mistake 2 — Counting four suited cards as a flush | Lỗi 2 — đếm 4 lá cùng chất thành thùng |
| Mistake 3 — Forgetting the board is shared | Lỗi 3 — quên rằng bài chung là của cả bàn |
| Mistake 4 — Ignoring the boat on a paired board | Lỗi 4 — bỏ qua cù lũ khi board có đôi |

#### FAQ (EN 11 + 🆕 1)
| # | EN Q | vi Q |
|---|---|---|
| 1 | How do you figure out your best 5-card hand from 7 cards? | Làm sao tìm ra 5 lá mạnh nhất trong 7 lá? |
| 2 | Do you have to use both of your hole cards in Texas Hold'em? | Trong Texas Hold'em, phải dùng cả 2 lá bài tẩy hay chỉ 1? (변형 — hand-rankings FAQ 13과 분리) |
| 3 | What does "playing the board" mean in Texas Hold'em? | Playing the board trong Texas Hold'em là gì? (변형 — kicker FAQ 12와 분리) |
| 4 | Can the board be the best hand for everyone? | Bài chung có thể là tay bài mạnh nhất cho cả bàn không? |
| 5 | Can you have a flush and a pair at the same time? | Vừa có thùng vừa có đôi thì tính thế nào? |
| 6 | Can you use an ace in a straight? | Lá A có đứng đầu lẫn đứng cuối sảnh được không? (변형 — hand-rankings FAQ 20·tiebreak FAQ 6과 분리) |
| 7 | Can a straight wrap around in poker? | Sảnh có được nối vòng (Q-K-A-2-3) không? |
| 8 | How do you know if a flush is possible on the board? | Làm sao biết board có thể ra thùng? |
| 9 | If there is a flush on the board, who wins? | Board là thùng sẵn thì ai thắng? (답 끝 split-pot 앵커) |
| 10 | If there is a straight on the board, who wins? | Board là sảnh sẵn thì ai thắng? (답 끝 split-pot 앵커) |
| 11 | Does a pair on the board count as part of your hand? | Đôi trên board có tính vào tay bài của tôi không? |
| 🆕12 | — (nuts 정의 · 필수 · the nuts 90 · nuts poker hand AC) | The nuts trong poker nghĩa là gì — nuts poker hand là tay nào? |

#### 키워드 흡수
| 검색어(볼륨) | 자리 |
|---|---|
| cách đọc bài trong poker · đọc bài trong poker (AC) | tags 축어 · H1·H2 2는 «đọc bài chung (board)» 한정 |
| 5 lá mạnh nhất trong 7 lá (고정문) | title · tldr · H2 1 · FAQ 1 · tags |
| nuts trong poker là gì (AC) | H2 8 축어 |
| the nuts (90) · nuts poker (10) · nuts poker hand (AC) | FAQ 12 · desc · tags |
| board poker (20) · bài chung | H2 2·4·5·6 · tags |
| playing the board (EN tag) | H2 3 · FAQ 3 · tags |
| EN PAA «What happens if you tie a poker hand?» | FAQ 9·10 답 끝 split-pot 앵커 |

#### 카드 라벨(그리드 3)
Pillar → Kiến thức nền tảng · Tiebreaker → So bài cùng hạng · Split Pot → Chia pot

### §13 자리
- 카드 L: 62~64(표2 A♠ K♥ / 9♥ 9♦ / 7♦ 2♣ + 보드) · 81 85(워크스루 A♥ 5♥ / A♦ 7♦ 4♠ 10♣ 2♠) · 96 100~101(보드 플레이 A♠ A♦ A♣ 7♥ 7♦ · K♣ Q♣ · A♥ · 7♠ 7♣) · 112(8♦ 6♣ / 7♥ 5♠ 4♣ K♦ 2♠) · 118~121(표3 4행) · 126(랩어라운드 A♦ 2♦ / K♠ Q♥ 3♣ 4♦ 9♠) · 143(이미지 alt) · 145(A♠ 4♦ / 2♠ 5♠ 9♥ J♥ 10♠) · 155 159~161(표5 K♣ K♦ 7♠ 3♥ 2♣ · K♥ 9♦ · 7♥ 7♦ · A♠ Q♦) · 173~174(A♠ K♠ / Q♠ 7♠ 2♠ K♦ 3♣ · 8♥ 8♦ / 7♣ 6♦ 5♠ 4♥ K♦) · 184 186(넛 스캔 Q♣ 9♥ 6♣ 5♦ 2♠) · 199(compare K♠ 7♦ 2♣ | J♥ 10♥ 8♣) · 207 · 219(9♠ 6♠ 3♠ Q♠ J♦ / A♥ K♥) · 272(FAQ)
- 수치: 표1 L50~56(21가지 5장 조합 분포 10 · 10 · 1 — «7 choose 5» 설명 L56 그대로).
- 🔴 L174 «TDA 2024 Rule 12» 축어(§1-J) · L205 이미지 alt «JT8» = 이미지 파일 alt라 **«J-10-8»로**(§1-C T → 10).

### 경험담 자리
- L27: «The first time a dealer read my hand better than I did, I was tabling what I thought was ace high. "Straight," she announced, pushing me a pot I had mentally given up — my 8-6 had quietly connected with three board cards while I was busy mourning a missed flush draw.»(딜러 성별 대명사 없이 «dealer» · 인용 대사 «"Sảnh," dealer nói»)
- L72: «This is the exact scan I run on every river, in this order — from the hardest hand to spot down to the easiest:»

### 현지 추가
- 🆕 FAQ 12 «The nuts trong poker nghĩa là gì — nuts poker hand là tay nào?»: 정의 1~2문장(«tay bài mạnh nhất có thể trên board này, tính cả bài tẩy đối thủ có thể cầm» — EN L182 축어 뜻) + H2 8의 Q♣ 9♥ 6♣ 5♦ 2♠ 스캔 참조 · «nuts ở flop không bảo đảm thắng ở river» 1문장(EN L188~192 취지). 어원(«why is it called the nuts»)은 EN에 없으니 쓰지 않는다.
- 본문 첫 문단 한정 문장(«Bài này nói về đọc bài chung (board), không phải đọc bài đối thủ.») — 새 사실 아님.
- 도구 앵커 1문장(«Những lỗi đọc board» 절 끝 · §1-D 축어 — «Xếp hạng bài» 탭이 5~7장에서 베스트 5를 찾아 준다).

### 하지 말 것
- monotone·paired 보드 **전략**(베팅 사이즈·c-bet)으로 넓히지 마라 — 🅶 13편 몫. wet/dry 절은 EN 분량 그대로.
- nuts 정의를 길게 늘이지 마라(정의 깊이는 `/vi/glossary` 도구 — 배포 회차 신설 · 글에서는 «tay bài mạnh nhất có thể trên board này» 1~2문장 + 스캔 예시).
- EN-먼저 후보: §1-J(TDA 2024 Rule 12 → 2026 Rule 13).
