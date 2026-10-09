# vi-gloss 브리프 — 🅵 용어 클러스터 6편 (A 구간 산출 · 2026-10-09)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(fr 치환 = `docs/fr-cluster-plan.md` §5 → vi 차이 표 = `docs/vi-cluster-plan.md` §5) · 용어·소유 정본 = `docs/vi-cluster-plan.md` §3-A·§3-C · SERP 근거 = `docs/keyword-bank/vi-serp/L-F-gloss.md` + `vi-core-volumes.md` §2·§4(다시 조사하지 않았다 · 계획 §2-①).
> EN 기준 해시 `b57cb658` · EN 6편 `updated` 전부 **2026-10-06** → vi `masterUpdated: "2026-10-06"`. 기준 해시 뒤 EN 변경 **0건**(`git diff b57cb658..HEAD -- lib/posts-en/<6편>` 빈 출력 · 10-09).
> 선례 = `docs/fr-lanes/gloss-brief.md`(10-07 · 같은 6편 · 형식을 그대로 따랐다).

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 🔴 웹·MCP·다른 로케일 파일(fr 포함)·다른 vi 레인 파일은 B에서 열지 않는다. 사실·수치·카드의 출처는 EN 축어뿐.
- **순서**(ms §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-vi/holdem-blind-meaning.ts`의 **필드 모양만**(🔴 문면은 7월판 «Mù» 표기라 한 글자도 복사하지 마라 · 계획 §5). 필드 = slug · title · seoTitle · desc · tldr · category(`"glossary"` — EN 값 그대로) · date/updated(= 집필일 `"2026-10-09"` · 🔴 배포 때 헤드가 date를 배포일로 맞춘다 · 계획 §4-C ④) · masterUpdated(`"2026-10-06"`) · keepImagesInBody: true · readTime(`"N phút"` — 숫자는 EN 그대로: 12·11·10·10·11·10) · emoji(EN 그대로) · image(EN 경로 그대로) · imageAlt(베트남어) · tags · content.
- 🔴 **content에 히어로 이미지를 넣지 않는다**(렌더러가 그린다). 본문 이미지 경로는 EN 그대로, alt·캡션만 베트남어.
- **등록**: `lib/posts-vi/index.ts`의 `// [vi-gloss import 시작]`~`끝` · `// [vi-gloss 배열 시작]~끝` 칸에만. 변수명 `holdemGlossary` · `holdemBadBeat` · `holdemCooler` · `holdemFish` · `holdemRake` · `holdemStraddle`.
- **화자**: 1인칭 **tôi** · 독자 **bạn** · 명령형 훅 허용(«Hãy nhìn… / So sánh… / Thử…») · 존칭·anh/chị 금지 · 딱딱한 직역 금지.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=vi --slug=<slug>` 🔴 0 → 끝에 `npm run check:intl-links` · `npm run check:structure`(vi 행 · 내 6편 결손 0 · 링크 편차 = §1-D 기록분만) · `npx next build`(prebuild의 intl-links·calc-parity 실패는 다른 레인 전까지 정상 · 계획 §4-A) · `git checkout -- public/sitemap.xml`.

## 1. 공통 결정 (6편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)

| 자리 | EN | vi 정본 |
|---|---|---|
| 요약 H3 (stripe 바로 위 · 6편 L25) | ### The X, at a glance | `### Tóm tắt nhanh` (레인 결정 · 6편 동일 · «신규 용어» 등재) |
| 직답 블록 | (EN 6편엔 `Quick answer` 블록 0개 — 직답은 각 H2 첫 문단의 **굵은 첫 문장**) | 형태 그대로 옮긴다. 블록을 새로 넣는다면 라벨은 `> **Trả lời nhanh**`뿐 |
| readnext | :::readnext[Keep reading] | `:::readnext[Đọc tiếp]` |
| FAQ H2 | ## FAQ | `## Câu hỏi thường gặp` (문항 = `**Q. …**` + 빈 줄 + `A. …` 쌍 그대로 — 스키마 조건) |
| 마무리 H2 | ## The 3 Things to Remember (5편) | `## Những điều cần nhớ` (개수는 라벨에 넣지 않는다) |
| glossary 마무리 | ## Where to Go Next | `## Nên đọc gì tiếp?` (레인 결정 · Fable 제안 채택) |
| 관련 글 H2 | ## Related Posts | `## Bài viết liên quan` |
| readTime | "N min" | `"N phút"` (숫자 EN 그대로) |
| 하이라이트 | `==…==` · `==g:…==` | 같은 문장에 유지(편마다 g 1곳 · bad-beat·cooler·fish·rake는 == 1 + g 1 · straddle은 == 3 + g 1 · glossary는 g 1만) |
| 디렉티브 | :::stripe · :::steps · :::compare · :::pull · :::card | 줄 구조·구분자(`\|`) 그대로, 셀 텍스트만 베트남어 |

### 1-B. 조판 (계획 §3-A ②)
- 숫자: 천 단위 **마침표**(`1.326` · `$2.000`) · 소수 **쉼표**(`2,5` · `11,8%`) · 🔴 **% 붙여 씀**(`80%` · `43,8%` — fr과 다르다) · 범위 `40–70%` · 비율 `4:1` · «4-to-1» → `4:1` · «4.5:1» → `4,5:1` · «1 in 96» → «1 trên 96» · «1 in 8.5» → «1 trên 8,5». 🔴 §13 **값**은 EN 축어, 구분자만 바꾼다.
- 화폐 = **`$` 앞붙임**(`$1/$2` · `$4` · `$100 + $9`) — ₫ 환산 금지.
- 카드 = 영어 랭크 문자 + 무늬 기호 그대로(`A♠A♥` · `7♣7♦` · `J♦ 7♥ 2♣`). EN의 `7‑7`·`A‑K`(논브레이킹 하이픈) 표기도 그대로. 보드 카드 **10**(`10♦`). 풀어 쓸 때 «đôi Át» · «đôi K» · «lá 7»(«già/đầm/bồi» 금지). 무늬 이름 chuồn · rô · cơ · bích.
- `preflop` · `postflop` 붙여 씀 · flop·turn·river 문중 소문자 · 족보명 문중 소문자(«cù lũ», «thùng») · 표·H2에서만 머리글자 대문자.
- `Texas Hold'em` 곧은 아포스트로피 · «Holdem» 금지 · «Hold'em» 단독 허용.
- 인용 부호 = 곧은 큰따옴표 `"…"`(기존 vi 8편 관행) · «» 금지.

### 1-C. 용어 (계획 §3-A ③④ + 레인 결정 — 레인 결정분은 진행 파일 «신규 용어»에 올렸다)

**방향(🔴 섞지 마라)**: 족보 = **베트남어 정본 + 첫 등장 (en) 병기** · 액션·구조·용어 = **영어 정본 + 첫 등장 (vi 풀이) 병기** · 이후 영어 단독.

| EN | vi 본문 | 규칙 |
|---|---|---|
| bad beat | **bad beat** | 첫 등장 «bad beat (thua ngược khi bạn đang nắm lợi thế áp đảo)» · 이후 bad beat · 복수 «những bad beat» |
| suckout / suck out | **suckout** · 동사 «bị suck out» 허용 | 첫 등장 «suckout (lá bài may mắn của đối thủ lật ngược ván bài)» |
| favorite / underdog | **favorite** · **underdog** | 첫 등장 «favorite (bên có cơ hội thắng cao hơn)» · «underdog (bên yếu thế)» · 수치 문장 «favorite khoảng 80%» · «80% cơ hội thắng». 🔴 «tỷ lệ thắng»은 win probability에만 — equity(지분)에 쓰지 마라(계획 §3-A ④) |
| cooler | **cooler** | 첫 등장 «cooler (tay bài quá mạnh để fold nhưng vẫn thua tay mạnh hơn)» · 동사형 «bị cooler» · EN 인용 «"coolered"» 1회 |
| setup · cold deck | **setup** · **cold deck** | 영어 + 풀이 1회(«setup (như bị sắp bài để thua)» · «cold deck (bộ bài đã xếp sẵn — nghĩa gốc là gian lận)») |
| fish · shark · whale · nit · donkey (donk) · calling station · reg · grinder · maniac · LAG / TAG · mark | **영어 그대로** | 첫 등장 풀이 1회: fish «(người chơi yếu — nghĩa đen là "cá")» · shark «(cá mập — người chơi mạnh)» · whale «(cá voi — fish nhiều tiền)» · nit «(người chơi quá chặt)» · donkey «(donk — người chơi tệ)» · calling station «(người chỉ biết call)» · reg «(regular — người chơi thường xuyên)» · grinder «(người cày volume)» · maniac «(người chơi quá hung hăng)» · LAG/TAG «(loose-aggressive / tight-aggressive)» · mark «(con mồi)». 🔴 «cá» 를 용어로 채택하지 마라(L-F §4-M · «cá» 11회 = 혼용) |
| tilt | **tilt** | 첫 등장 «tilt (mất kiểm soát cảm xúc rồi chơi sai)» · 동사 «bị tilt» 허용(AC «bị tilt là gì» 관측) |
| bluff / semi-bluff / value bet / hero call / snap call | **영어 그대로** | «tố lừa» 금지 · value bet 첫 등장 «(bet để được call bởi tay yếu hơn)» |
| rake | **rake** «(phí sòng)» | 계획 §3-A ④ 축어 · 산문 «tiền rake»(AC 축어) · «phí rake» 허용 · 동사 = «thu rake»(AC «cắt rake»는 구어 — 1회 인용만) |
| rake cap | **cap** «(mức trần rake)» → 이후 «cap» | — |
| time charge · dead drop · no flop, no drop | **time charge** «(thu phí theo giờ)» · **dead drop** «(nút dealer trả rake cố định mỗi ván)» · **"no flop, no drop"** «(không có flop thì không thu rake)» | 영어 보존 + 풀이 1회 |
| tournament fee / juice / vig | **phí đăng ký (fee)** · «juice»/«vig» 인용 | — |
| rakeback | **rakeback** «(hoàn rake)» | 🔴 룸 추천·비교·가입 유도 금지(EN L104 «affiliate-driven» 경고 문장은 유지) |
| cardroom · house · casino · room | **phòng poker** · «nhà» (the house) · «sòng» 은 «phí sòng» 안에서만 · casino → «sòng bài» 는 EN이 casino를 명시한 자리(cooler FAQ 10 · fish L19)만 | 🔴 «nhà cái» 금지(실머니 뉘앙스) · 베트남 장소·클럽 이름 창작 금지 |
| home game | **ván bài tại nhà (home game)** | — |
| pocket pair · overpair · top pair · set · trips | **pocket pair (đôi trên tay)** · **overpair** «(đôi trên tay cao hơn mọi lá trên board)» · **top pair** · **set** · **trips** | §3-A ③: set = «cầm đôi trên tay + 1 lá trên board» · trips = «1 lá trên tay + board có đôi» — 첫 등장에서 이 정의 문장으로 가른다 · set over set = «set đụng set lớn hơn (set over set)» |
| quads · straight flush · royal flush · full house (boat) · flush · straight · three of a kind · two pair · one pair · high card | **tứ quý** · **thùng phá sảnh** · **thùng phá sảnh hoàng gia** · **cù lũ** · **thùng** · **sảnh** · **sám cô (bộ ba)** · **hai đôi** · **một đôi** · **mậu thầu (bài cao)** | 첫 등장 «vi (en)» 병기 · 🔴 «Sảnh Thượng»·«sảnh rồng»·«bánh xe» 금지 · wheel = «sảnh thấp nhất A-2-3-4-5 (the wheel)» · Broadway = «sảnh Broadway (10-J-Q-K-A)» · nut flush = «thùng nuts» · «boat» = 영어 별칭 1회 + «cù lũ» |
| suited / offsuit · suited connectors | **cùng chất / khác chất** · **hai lá bài liên tiếp cùng chất** | 기존 vi 8편 cùng chất 13 · khác chất 5 |
| hole cards · community cards · board · hand · a hand(판) | **bài tẩy** · **bài chung (board)** · «board» 허용 · **tay bài** · **ván bài** | 계획 §3-A ④ · «100 hands» = «100 ván» |
| check · bet · call · raise · fold · all-in · limp · 3-bet · 4-bet · c-bet · check-raise · donk bet · min-raise · jam/shove · string bet | **영어 그대로** | 첫 등장 병기: «call (theo)» · «raise (tố)» · «fold (bỏ bài)» · «all-in (tất tay)» · «3-bet (re-raise, tố lại)» · «c-bet (cược tiếp tục)» · 🔴 산문 동사: «theo / bỏ bài / cược» 허용 · **«tố» 산문 금지**(구두 선언 인용 «hô "tố"»만) · «check» 풀이 없음(«kiểm tra» 금지) · «hồi mã thương» 금지 |
| blind · SB · BB · ante · big blind ante · straddle | **blind** · **small blind (SB)** · **big blind (BB)** · **ante** · **big blind ante** · **straddle** | 첫 등장 «blind (mù — cược bắt buộc)» · «small blind (mù nhỏ)» · «big blind (mù lớn)» → 이후 SB·BB · straddle 첫 등장 «straddle (blind tự nguyện thứ ba, thường gấp đôi big blind)» · 🔴 «mù» 단독 산문 금지 |
| straddler · live blind · option · UTG/Mississippi/button/sleeper/re-straddle · house rules · floor | **người straddle** · **live blind** «(blind còn quyền hành động)» · **option** «(quyền raise sau cùng)» · 유형명 영어 그대로 · **luật riêng của phòng (house rules)** · **floor** «(người quản lý sàn)» | — |
| button · dealer · UTG · CO · HJ · LJ · early/middle/late · in/out of position | **nút dealer (BTN)** · **dealer** «(người chia bài)» · **UTG** 첫 등장 «Under the Gun (UTG)» · CO · HJ · LJ · **vị trí sớm / giữa / muộn** · **in position (IP) / out of position (OOP)** «có vị trí / không có vị trí» 1회 | 계획 §3-A ④ |
| flop · turn · river · street · preflop · postflop · showdown · muck · chop/split pot | **flop · turn · river** · 베팅 라운드 = **vòng cược** · **preflop · postflop** · **showdown** «(lật bài)» · **muck** «(úp bài bỏ)» · **chia pot (split pot)** · «chop» 1회 | 🔴 sảnh(족보) ≠ vòng(스트리트) |
| pot · side pot · stack · chip · buy-in · bankroll · stakes | **pot** · **side pot (pot phụ)** · **stack** · **chip** · **buy-in** · **bankroll** «(quỹ tiền chơi poker)» · stakes = **mức cược** («bàn $1/$2») | «hũ» 금지 · «phỉnh» = 병기 1회만(beginners 몫 — 이 레인 0회) |
| cash game · tournament · freezeout · GTD · hand-for-hand · bounty · SNG · MTT · ICM · heads-up · variance · orbit · run it twice | **cash game** · **giải đấu (tournament)** · **freezeout** · **GTD** «(đảm bảo)» · **hand-for-hand** · **bounty (knockout)** · **Sit & Go (SNG)** · **MTT** · **ICM** «(Independent Chip Model — mô hình chip độc lập)» · **heads-up** · **variance** · **một vòng bàn (orbit)** · **run it twice** «(chia phần board còn lại hai lần)» | 기존 vi 8편: cash game 100 · variance 11 · heads-up 7 · vòng bàn 2 · 대문자 «Tournament/Cash Game» 금지 |
| equity · pot odds · implied odds · EV · outs · draw · gutshot · open-ender · backdoor · runner-runner · overcard · kicker · nuts · range · GTO · VPIP · PFR · RFI | **equity** «(phần pot kỳ vọng của bạn, tính cả khi chia pot)» · **pot odds** «(tỷ lệ pot)» + 정의 1문장 «pot : số tiền phải call» · **implied odds** «(tỷ lệ cược ngầm)» · **EV** «(giá trị kỳ vọng)» · **outs** · **draw (bài chờ)** · **gutshot «(sảnh hở giữa)»** · **open-ender «(sảnh hở hai đầu — OESD)»** · **backdoor** · **runner-runner** · **overcard** · **kicker (lá phụ)** · **nuts** «(tay bài mạnh nhất có thể trên board này)» · **range** · **GTO** · VPIP · PFR · RFI | 계획 §3-A ④ 축어 · «cửa chờ»·«dải bài» 금지 · «rule of 2 and 4» = «quy tắc 4 và 2» |
| "Don't tap the glass" · slow roll · tell · splash the pot · string bet | 영어 인용 + 풀이 1회 | «"Don't tap the glass" (đừng gõ vào bể cá — đừng chê người chơi yếu)» |

### 1-D. 링크 — **편차 0**
6편의 EN 내부링크 대상은 전부 계획 §1의 51편 안이다(대회 가이드 5편으로 가는 링크 0 · 해부 스크립트 10-09). → **EN 링크를 전부 그대로** `/vi/blog/<slug>`로 건다. 썸네일 인자 `"thumb:/images/…"`도 그대로. 앵커 텍스트만 베트남어.
- 외부 링크 1건: straddle L126 `https://blog.gtowizard.com/preflop-strategy-in-straddled-pots/` — URL 그대로.
- 페이지 내 앵커 `(#…)`·`<a id=…>`: 6편 모두 0(해부 스크립트).
- **현지 추가 링크(계획 §3-A ⑤ 앵커 정본 · 각 편 절에 적은 것만)**: glossary 첫 화면 `[thuật ngữ poker](/vi/glossary)` 1개(🔴 필수 · 도구는 배포 회차에 신설된다 — 링크를 건다 · 계획 §1) · glossary nuts → `/vi/blog/holdem-reading-the-board` 2(표 행 + FAQ) · glossary tilt → `/vi/blog/holdem-bad-beat` 1(표 행) · glossary bluff → `/vi/blog/holdem-strategy` 1(표 행) · glossary 3-bet FAQ → `/vi/blog/holdem-3bet` 1 · bad-beat Classic Examples 절 끝 `[máy tính equity](/vi/calculator)` 1(선택). 그 밖엔 없다. 🔴 역방향 금지(§3-A ⑤): 글로 가는 링크·카드 제목에 «máy tính …» · «bảng bài khởi đầu / hand chart» · «lịch giải» · «solver» 구를 쓰지 않는다.

### 1-E. 관련 글 카드 · readnext
- `## Bài viết liên quan` 아래 HTML 그리드: 구조·스타일·`onmouseover`/`onmouseout` 문자열 **한 글자도 바꾸지 마라.** href만 `/vi/blog/…`, 카드 안 라벨·제목·설명 3줄만 베트남어.
- 카드 라벨(계획 §3-A ⑥ + 레인 결정): `Glossary` = **Thuật ngữ** · `Rules` = **Luật chơi**(레인) · `Hand Rankings` = **Thứ hạng tay bài** · `Strategy` = **Chiến thuật**(레인) · `Odds &amp; Math` = **Xác suất &amp; toán** · `Tournament` = **Giải đấu**. (🔴 기존 vi 8편 라벨은 15종으로 갈려 있다 — 승계하지 말고 이 표를 쓴다 · 헤드가 머지 때 다른 레인과 대조)
- 본문 강조 박스 `<div style="background:rgba(255,248,210,0.10)…">`(표를 감싸는 것): 여는·닫는 줄 축어 · 빈 줄 위치 그대로.
- readnext 카드 제목은 짧은 베트남어 라벨(대상 글 title이 아님 — EN도 짧은 라벨) · 이미지 경로 그대로 · 🔴 카드 제목에 도구 의도 구 금지(§1-D).

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩(굵은 직답 안 강조는 `"…"`나 `==…==`) · tldr 안 마크다운 · «tổng hợp / đầy đủ nhất / từ A đến Z / tất tần tật / chi tiết nhất» · slug·이미지 변경 · 존칭·anh/chị · «mù»·«tố»(산문) · «Sảnh Thượng»·«sảnh rồng» · Tiến lên·Mậu binh·xì tố 족보 용어 · ₫ 환산 · **베트남 카지노·클럽·대회·금액 창작**(경험담의 장소·금액은 EN에 있는 것만) · **합법성·세율·법령·실머니·앱·사이트 추천 문장 추가**(계획 §3-C ⑤·«레인 A로 넘기는 처리» · `legality-ban-scope`) · 룸 이름 추가(EN에 있는 GGPoker·WSOP·GTO Wizard·PokerNews만 EN 문맥 그대로) · 트래커·HUD·앱 소개 · 계획 §3-A ⑦ 오염 헤드(각 편 «소유표») · 단독 «X là gì» 를 seoTitle·H1·tags에.

### 1-G. 카피 판정 경위
«확정 카피»는 Fable 서브 1회(입력 = EN 메타·H2·FAQ + 키워드·PAA 축어(L-F·vi-core-volumes) + §3-A 고정문·용어 + §3-A ⑦ 오염 헤드 + §3-C 소유표 + posting.mdc «SEO 카피» 규칙)의 출력을 **Opus가 글자 수(node 코드포인트)를 재고 손본 것**이다. 손본 자리는 각 편 «확정 카피» 끝에 적었다. 🔴 **B·C는 카피를 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

### 1-H. §13 검산 — A에서 손으로 확인한 것 (C가 다시 센다)
- bad-beat L124: A♠A♥ + A♣ J♠ J♦ 7♥ 2♣ → 베스트 5 = A-A-A-J-J(cù lũ Át đầy J) · J♥J♣ + 같은 보드 → J-J-J-J-A(tứ quý) · 플랍 A♣J♠J♦에서 둘 다 완성 → 리버에 suckout 없음 → EN 판정 «cooler» ✓
- bad-beat L132: 턴 보드 A♥ 9♣ Q♦ 10♦ + K♦J♦ → A-K-Q-J-10 sảnh Broadway ✓ · 리버 A♦ → 마부치 AA + A♥ A♦ = tứ quý Át ✓ · K♦J♦ + Q♦ 10♦ A♦ = thùng phá sảnh hoàng gia rô ✓ · 로열 > 쿼드 ✓
- cooler L92: 7♣7♦ + J♦ 7♥ 2♣ 5♠ Q♦ → 7-7-7-Q-J · J♠J♥ + 같은 보드 → J-J-J-Q-7 · sám cô J > sám cô 7 ✓ · 7의 아웃 = 7♠ 1장 ✓
- 수치: AA vs 77 ≈ 80% (4:1) ✓ · KK vs AA ≈ 4,5:1 ✓ · AKo vs QQ ≈ 43% · AKs ≈ 46% ✓ · 두 pocket pair가 둘 다 플랍 set = 180/17.296 = 1,04% ≈ 1 trên 96 ✓ · pocket pair가 플랍 set = 1 − 17.296/19.600 = 11,76% ≈ 1 trên 8,5 ✓ · $100 + $9 → fee $9 ✓ · $3 + $0,30 = 10% ✓ · $1/$2 straddle $4 → min-raise $8 ✓ · $200 = 100 BB = 50 đơn vị straddle $4 ✓ · one-outer «~96%» = 플랍 기준(2장 남음 · 1 − 2/45 = 95,6%) — 턴 기준이면 43/44 = 97,7% → B는 EN 값 «~96%» 유지(EN-먼저 후보에 올렸다)

---

## holdem-glossary — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "Texas Hold'em Glossary: Every Poker Term You'll Hear at the Table" (65)
- seoTitle: "From the Nuts to the Fish — The Texas Hold'em Glossary" (54)
- desc: "Every poker term you'll hear at the table, explained simply and grouped by situation: betting, positions, hands, slang, and the terms people always mix up." (155)
- tldr: "This is a plain-English glossary of the poker terms that actually come up in a Texas Hold'em game, grouped by how you'll meet them — betting actions, positions, hands and board, player types, money, and table situations. Start with the 'most confused' terms below (check vs call, set vs trips, cooler vs bad beat), then browse by category. Terms with a deeper guide link straight to it." (386)
- category "glossary" · readTime "12 min" → `"12 phút"` · emoji "📖" · image "/images/holdem-glossary-hero.webp" · imageAlt(EN): "A Texas Hold'em table with chips, the dealer button, and community cards spread on green felt, representing the language of poker" · date "2026-07-05" · updated "2026-10-06"
- tags(EN): ["poker terms", "poker glossary", "texas holdem terms", "poker slang", "poker terminology", "poker vocabulary", "poker words", "what does it mean in poker"]

### 구조 (EN L## · 이미지 경로 그대로, alt·캡션만 베트남어)
L19 1인칭 훅(경험담 · 아래) · L21 둘째 문단(==g:== 1 · 🔴 여기에 `[thuật ngữ poker](/vi/glossary)` 1개 추가 — 문장 예: «…Nếu bạn chỉ cần tra nhanh một từ, [thuật ngữ poker](/vi/glossary) có bản tra cứu theo chữ cái; bài này thì xếp theo ==g:tình huống bạn gặp chúng==…» · 그 밖에 추가 링크는 §1-D 목록만)
L25 ### The glossary, at a glance → `### Tóm tắt nhanh`
L27–32 :::stripe 4행(6 | … / 90+ | … / 8 | … / → | …) — 숫자 그대로
L36 ## The Terms People Mix Up Most → H2 #2 · L40–53 강조 박스 + 표 8행(«These get mixed up | The difference»)
**현지 추가 H2 #3**(L55 `---` 뒤 · L57 이미지 앞): 짧은 단락 1~2문장 + 표 ≤12행(«Tiếng Anh | Tiếng Việt | Ghi chú») — 🔴 §1-C에 있는 대응만: Royal flush → thùng phá sảnh hoàng gia · Straight flush → thùng phá sảnh · Four of a kind → tứ quý · Full house → cù lũ · Flush → thùng · Straight → sảnh · Three of a kind → sám cô (bộ ba) · Two pair → hai đôi · One pair → một đôi · High card → mậu thầu (bài cao) · 마지막 행 «Check · call · raise · fold · all-in · blind» → «dùng nguyên tiếng Anh — theo, bỏ bài, tất tay là cách nói, không phải tên gọi». 단락에 고정문 1회: «Tên gọi xì tố/xì phé được dùng không thống nhất; bài này chỉ nói về Texas Hold'em, mỗi người nhận hai lá bài tẩy.»(계획 §3-A ②). 어원·역사 주장 금지. `/vi/glossary` 앵커는 도입부 1개 — 여기서 반복하지 않는다
L57 ![…](/images/holdem-glossary-categories.webp "…") · L59 ## Betting Actions → H2 #4 · L61 문단(betting-actions 썸네일 링크) · L63–88 박스 + 표 20행
L92 ## Positions → H2 #5 · L94 문단(position-play 링크) · L96–110 박스 + 표 9행 · L112 문단(positions 썸네일 링크)
L116 ## Hands & the Board → H2 #6 · L118 ![…](/images/holdem-button-dealer-board.webp "…") · L120 문단(game-order 링크) · L122–152 박스 + 표 25행 · L154 문단(hand-rankings 링크)
L158 ## Player Types & Slang → H2 #7 · L160 ![…](/images/holdem-glossary-player-types.webp "…") · L162 문단(fish 링크) · L164–180 박스 + 표 11행
L184 ## Money & the Game → H2 #8 · L186 문단(tournament-vs-cash-game 썸네일 링크) · L188–215 박스 + 표 22행
L219 ## Situations, Stats & Etiquette → H2 #9 · L221 문단 · L223–248 박스 + 표 20행
L252–255 :::readnext[Keep reading] 2행(cooler · fish) → `:::readnext[Đọc tiếp]` · 카드 제목 짧은 vi 라벨(«Cooler và bad beat» · «Fish trong poker là gì?»)
L257 ## FAQ → `## Câu hỏi thường gặp` · L259–289 Q 8개(아래 확정 카피 FAQ 1~8) + 추가 3개
L293 ## Where to Go Next → `## Nên đọc gì tiếp?` · L295 문단 · L297–300 불릿 4(링크 13개 · 전부 그대로) · L302 마무리 문단
L306 ## Related Posts → `## Bài viết liên quan` · L308–329 카드 4: L309 fish(Glossary→Thuật ngữ / What Is a Fish? / The player types, decoded) · L314 cooler(Thuật ngữ / Cooler vs Bad Beat / The two losses everyone confuses) · L319 betting-actions(Rules→Luật chơi / Betting Actions / Check, bet, call, raise, fold) · L324 hand-rankings(Hand Rankings→Thứ hạng tay bài / What Beats What / The full hand ranking order)
- 마크다운 표 7(+ 현지 1) · 강조 박스 7 · 이미지 3 · 표 행 합계 115(8+20+9+25+11+22+20) — 🔴 행 수·순서 그대로

### 링크 — 편차 0 (대상 : EN 줄 · * = 썸네일 인자 · h = 카드 href · rn = readnext)
- holdem-cooler : 19*,47,149,253rn,300,314h · holdem-fish : 21*,162,254rn,300,309h · holdem-bad-beat : 47,150,213,300 · holdem-pot-odds : 49,233,299 · holdem-betting-actions : 61*,297,319h · holdem-all-in-rules : 72 · holdem-position-play : 94 · holdem-positions : 112* · holdem-game-order : 120 · holdem-tiebreak-rules : 130,298 · holdem-outs : 141,299 · holdem-hand-rankings : 154,298,324h · holdem-tournament-vs-cash-game : 186* · holdem-blind-meaning : 192 · holdem-rake : 199,300 · holdem-straddle : 201,300 · holdem-showdown-rules : 227 · holdem-split-pot-rules : 229 · holdem-probability : 235,299 · texas-holdem-rules-for-beginners : 297
- **현지 추가 6**: L21 `/vi/glossary`(앵커 «thuật ngữ poker» 축어) · L129 nuts 행 끝 `[đọc board](/vi/blog/holdem-reading-the-board)` · FAQ nuts 답 끝 같은 글 1 · L231 tilt 행 끝 `[bad beat](/vi/blog/holdem-bad-beat)` · L80 bluff 행 끝 `[chiến thuật](/vi/blog/holdem-strategy)` · FAQ 3-bet 답 끝 `[3-bet](/vi/blog/holdem-3bet)`

### 소유표 (계획 §3-C)
- **이 글이 주인**: «X trong poker là gì» 묶음 중 **헷갈리는 쌍**(check/call · set/trips · cooler/bad beat · value bet/bluff · pot odds/implied odds · VPIP/PFR · 3-bet 셈법) + 영→베 대응 + 플레이어 유형 1줄 정의 + «Buy in poker là gì?» 20(FAQ · 배정 없는 PAA · 헤드 요청에 대조 요청) · AC «thuật ngữ poker tiếng việt / tiếng anh»의 **의도**(단어는 안 쓴다).
- 🔴 **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «thuật ngữ poker» 140 · «thuật ngữ trong poker» 50 · «thuật ngữ» 단어 · «từ điển» → 주인 `/vi/glossary`(§3-C ① · 보수 해석 — 헤드 요청에 올림). nuts(reading-the-board ④) · UTG(positions ⑤) · 3-bet(holdem-3bet ⑮) · c-bet(⑭) · bluff(strategy ⑰) · tilt(bad-beat ⑱) · ante·blind(blind-meaning ②) · dealer poker là gì 170(⑳) · «poker là môn thể thao gì» 30(beginners 몫 · 미사용).
- **처리**: 다른 글 몫 항목은 EN처럼 표 1~2줄 정의 + 링크(§1-D 추가 6개만). H2·본문에서 «thuật ngữ»를 쓰는 것은 허용(제목·태그만 금지) — 단 도입부 앵커가 그 단어를 이미 쓰니 본문 반복은 최소.

### 키워드 (0-1·0-2 실측 · DataForSEO 2704/vi · 2026-10-08 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| thuật ngữ poker · thuật ngữ trong poker | 140 · 50 | 🔴 도구 몫 — 도입부 앵커 1개로 위임 |
| thuật ngữ poker tiếng việt · tiếng anh | 30 · 10 | 의도만 H2 #3(영→베 대응 표) · seoTitle «Từ poker tiếng Anh» |
| «poker * nghĩa là gì» AC(nut · gtd · itm · ante · bluff trong poker nghĩa là gì · flush nghĩa là gì poker) | — | seoTitle 꼬리 «nghĩa là gì» · H2 #6 · FAQ 7 문형 |
| PAA(«thuật ngữ trong poker» SERP): Blind trong poker là gì? · Buy in poker là gì?(20) · Làm cách nào để chơi poker giỏi? | — · 20 · — | FAQ 9·10·11(1줄 + 앵커) |
| related(«bluff poker là gì»): Jam trong poker là gì · Monster draw poker là gì · Snap call là gì · Flip poker là gì · Call trong Poker là gì | — | 표 행 정의 첫 문장(Jam/Shove L84 · Snap call L85 · Call L69) · Monster draw·Flip은 EN에 없음 → EN-먼저 후보 |
| 🔴 버림 | | dealer poker là gì 170(직업 혼합 · L-A 몫) · phỉnh poker là gì 40(상품) · poker là môn thể thao gì 30 · 단독 «X là gì» 전부 |

### 현지 SERP (L-F §3·§4 축어)
- «thuật ngữ poker» 1페이지 = reddit `?tl=vi` 7 · 게임·제휴 계열 2(gamebaidoithuong «Thuật ngữ poker quan trọng mọi người chơi cần biết» 정의 10개 · 족보 서열에서 two pair 누락 E1) · Natural8 용어집(알파벳 198항 · counterfeit·OESD·side pot 오류 E2~E4) · WikiPoker «111+ Thuật ngữ Poker»(LAG = «chậm chạp và do dự» 오류 E6).
- **우리가 더 줄 것 3가지**: ① 상황별 분류 + 표 115행 전부 **영어 용어 + 베트남어 풀이**(§1-C에 있는 대응만) ② «헷갈리는 쌍» 8개를 표로(경쟁 0 · E1·E6 같은 오류 없음 — set/trips 정의는 §3-A 문장) ③ 1인칭 «테이블이 외국어 같았다» 경험담(경쟁 0).

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (65): Ở bàn poker họ đang nói gì? Từ poker tiếng Anh và các cặp dễ nhầm

**seoTitle** (55): Ở bàn poker họ nói gì? — Từ poker tiếng Anh nghĩa là gì

**desc** (148): Ván live đầu tiên, tôi gật đầu như hiểu hết dù chẳng hiểu gì. Từ poker tiếng Anh nghĩa là gì, tiếng Việt gọi sao, cặp nào dễ nhầm — theo tình huống.

**tldr** (평문):
Đây là bảng giải nghĩa những từ poker tiếng Anh thật sự xuất hiện trong một ván Texas Hold'em, xếp theo cách bạn gặp chúng: hành động bet, vị trí, bài và board, kiểu người chơi, tiền và tình huống ở bàn. Hãy bắt đầu từ các cặp dễ nhầm nhất (check với call, set với trips, cooler với bad beat), rồi lướt theo từng nhóm. Từ nào có bài hướng dẫn sâu hơn sẽ dẫn thẳng tới bài đó.

**tags** (8): ["từ poker tiếng Anh", "tiếng lóng poker", "cách gọi ở bàn poker", "check và call khác nhau", "set và trips", "từ poker tiếng Việt", "các từ dễ nhầm trong poker", "Texas Hold'em"]

**H2 세트** (EN → vi):
1. ### Tóm tắt nhanh ← The glossary, at a glance
2. ## Cặp từ nào trong poker dễ nhầm nhất? Check/call, set/trips, cooler/bad beat ← The Terms People Mix Up Most
3. ## Thùng, sảnh, cù lũ… từ poker tiếng Anh tiếng Việt gọi là gì? ← **현지 추가**(위 구조 절)
4. ## Check, bet, call, raise, fold trong poker là gì? ← Betting Actions
5. ## UTG, cutoff, button… vị trí trong poker là gì? ← Positions
6. ## Bài và board: nuts, kicker, set, trips nghĩa là gì? ← Hands & the Board
7. ## Fish, shark, nit, reg… người ta gọi kiểu người chơi ở bàn poker là gì? ← Player Types & Slang
8. ## Buy-in, rake, stack, bankroll: tiền trong poker gọi là gì? ← Money & the Game
9. ## Cooler, bad beat, VPIP, tilt: tình huống và cách cư xử ở bàn poker ← Situations, Stats & Etiquette
10. ## Câu hỏi thường gặp · ## Nên đọc gì tiếp? · ## Bài viết liên quan
(내용 H2 8개 중 질문형 7 = 88%)

**FAQ** (11 = EN 8 + 추가 3):
1. Người mới cần biết những từ poker nào trước? ← most common terms
2. UTG trong poker là gì? ← UTG
3. Check và call trong poker khác nhau ở đâu? ← check vs call
4. Set và trips khác nhau thế nào? ← set vs trips
5. Cooler và bad beat khác nhau ở đâu? ← cooler vs bad beat
6. 3-bet trong poker là gì, sao không gọi là 1-bet? ← 3-bet (답 끝 → `/vi/blog/holdem-3bet` 앵커)
7. Nuts trong poker nghĩa là gì? ← the nuts (답 끝 → `/vi/blog/holdem-reading-the-board` 앵커)
8. VPIP và PFR là gì? ← VPIP/PFR
9. Blind trong poker là gì? ← **추가**(PAA 축어 · 답 = EN L45·L192 정의 1~2문장 + `/vi/blog/holdem-blind-meaning` 앵커 · SB/BB 풀이 «mù nhỏ/mù lớn» 병기 1회)
10. Buy in poker là gì? ← **추가**(PAA 20 · 답 = EN L198 «The amount needed to enter a game or tournament» + 대회는 상금 풀 + 수수료로 갈린다(EN rake L113 «$100 + $9» 축어 가능) · 베트남 금액 창작 금지)
11. Làm cách nào để chơi poker giỏi? ← **추가**(PAA · 답 = 1~2문장: 이 글의 «Nên đọc gì tiếp?» 순서(규칙 → 족보 → 수학 → 포지션) + `/vi/blog/holdem-strategy` 앵커 · 약속형 «luôn thắng» 금지)

**흡수**: thuật ngữ poker tiếng việt/anh 의도 → seoTitle «Từ poker tiếng Anh» · H2 #3 · tags 1·6 / «poker * nghĩa là gì» → seoTitle 꼬리 · H2 #6 · FAQ 7 / «thuật ngữ poker là gì · các thuật ngữ cơ bản» → FAQ 1(단어 없이) / PAA 3 → FAQ 9~11 / related «Call trong Poker là gì» → H2 #4 · «Snap call» · «Jam» → 표 행 / nuts·UTG·3-bet·bluff·tilt·fish → seoTitle 0.

**손본 자리**: Fable 원안 → Opus 수정 2곳: ① tags «ante trong poker nghĩa là gì»(ante = blind-meaning 몫 §3-C ②) · «buy in poker là gì»(배정 미확정) 삭제 → «từ poker tiếng Việt» · «các từ dễ nhầm trong poker» ② Where to Go Next 라벨 «Nên đọc gì tiếp?» 채택(§1-A 갱신). 길이 전부 한도 안(seoTitle 55 · desc 148 · H1 65).

### §13 자리 — 카드·확률·계산·표 수치 (EN 축어 · B는 값·카드를 한 글자도 바꾸지 않는다 · 구분자만 §1-B)
L28–31 stripe «6 | …» · «90+ | …» · «8 | …» · «→ | …»
L44 | **Check vs Call** | A check risks **no chips** (only when you have no outstanding bet to match); a call **matches** an existing bet. |
L46 | **Set vs Trips** | Both are three of a kind — a **set** uses a pocket pair; **trips** uses one hole card + a board pair. |
L50 | **VPIP vs PFR** | VPIP = how often you **play**; PFR = how often you **raise**. PFR can never exceed VPIP. |
L51 | **The 3-bet count** | Blinds are bet 1, the open-raise is bet 2, so the **re-raise is the 3-bet** (not the first raise). |
L101 | **Small blind (SB)** | With three or more players, the forced bet left of the button; acts first postflop (worst postflop seat). Heads-up, the SB is on the button and acts last postflop. |
L102 | **Big blind (BB)** | … stakes are named by the blind sizes ($1/$2), and one big blind is the standard unit for measuring stacks. |
L118 ![…K♦ 7♣ 2♠ flop…](/images/holdem-button-dealer-board.webp "…")
L141 | **Gutshot** | An inside straight draw needing one middle rank (4 [outs](…)). | · L142 | **Open-ender** | … (8 outs). |
L146 | **Suited connectors** | Two consecutive same-suit cards (e.g. 8♥9♥). |
L147 | **Broadway** | The 10-J-Q-K-A straight, the highest straight. | · L148 | **The wheel** | The A-2-3-4-5 straight, the **lowest** straight (ace plays low). |
L201 | **Straddle** | An optional blind (usually 2× BB) buying last preflop action — … |
L203 | **No-limit (NLH) / Limit** | In no-limit, an opening bet can range from one big blind to your whole stack … Pot-limit, the PLO format, caps bets and raises at the pot size. … | · L204 | **PLO** | … four hole cards and must use exactly two … |
L233 | **Pot odds** | The ratio of the pot to the cost of a call — … | · L234 | **Implied odds** | … | · L235 | **Equity** | Your percentage share of the pot right now … | (→ vi 풀이 §1-C: equity = «phần pot kỳ vọng…» · pot odds + «pot : số tiền phải call»)
L265 A. UTG is the seat immediately to the left of the big blind, so that player is first to act before the flop. …
L273 A. … A set is a pocket pair that hits a matching card on the board (you hold 7‑7, a 7 comes). Trips is one hole card matching a pair already on the board (you hold A‑7, and 7‑7 is on the board). …
L281 A. A 3-bet is the first re-raise before the flop. The counting includes the blinds: the big blind is treated as the first bet, the opening raise is the second bet ("2-bet"), so the next raise is the third — the 3-bet. A re-raise on top of that is a 4-bet. …

### 경험담 자리 — EN 1인칭 (현지 맥락으로 다시 쓰되 장소·금액·사건은 EN에 있는 것만)
L19 The first time I sat in a live game, the table might as well have been speaking another language. Someone was "under the gun," another guy "three-bet the cutoff," the dealer asked if I wanted to "run it twice," and when I lost with kings I was told it "wasn't even a bad beat, just a [cooler](/en/blog/holdem-cooler "thumb:/images/holdem-cooler-hero.webp")." I nodded like I understood. I did not.
→ vi: «ván live đầu tiên» 그대로 · 영어 은어 4개(under the gun · 3-bet the cutoff · run it twice · cooler)를 **영어 그대로 인용** · 장소·스테이크 창작 금지.

### 하지 말 것
- 🔴 **표 115행의 행 수·순서 그대로.** 용어 머리 = **영어 그대로** + (§1-C에 풀이가 있을 때만) 괄호 베트남어: `**Fold** (bỏ bài)` · `**Call** (theo)` · `**Raise** (tố)` · `**All-in** (tất tay)` · `**Blinds** (mù — cược bắt buộc)` · `**Check**`(풀이 없음) · `**Quads**` → 설명 열 «tứ quý» · `**Boat / Full boat**` → 설명 열 «cù lũ». EN 머리에 이미 있는 괄호(`Button (BTN)` 등)는 유지하고 베트남어를 덧붙이지 마라(한 머리에 괄호 1개 — 설명 열에서 풀어 쓴다).
- EN에 없는 용어(Monster draw · Flip · ITM · GTD는 있음 · squeeze · flat)를 **추가하지 마라** → 진행 파일 «EN-먼저 후보».
- «Người ta gọi kiểu người chơi…»(H2 #7)는 fish 글 H2 #5와 문장이 겹치지 않게 유지(현 문구 OK) — 플레이어 유형 **비교**는 fish가 주인 · glossary는 표 1줄 + 링크.
- 다른 글 몫 항목(all-in·blind·showdown·hand rankings·positions·nuts·tilt·bluff·3-bet)은 EN처럼 1~2줄 정의 + 링크로 끝낸다. «tố»는 `**Raise** (tố)` 병기 1회 외 산문 금지.

---

## holdem-bad-beat — EN updated 2026-10-06

### 메타 (EN 축어 · 괄호 = 코드포인트 수)
- title: "What Is a Bad Beat in Poker? When Being the Favorite Isn't Enough" (65)
- seoTitle: "You Were 80% to Win — and Lost. What Is a Bad Beat?" (51)
- desc: "A bad beat is losing as a big favorite when your opponent gets lucky. How it differs from a cooler, the bad beat jackpot, and why it's usually a good sign." (155)
- tldr: "A bad beat is when you get your money in as a heavy favorite — usually 80% or more — and lose because your opponent hits a lucky card to 'suck out' on you. Unlike a cooler in the strict sense, you were ahead when the money went in; the deck just betrayed you at the end. It stings, but a steady stream of bad beats usually means opponents are putting money in behind — the kind of game you want to be in." (404)
- category "glossary" · readTime "11 min" → `"11 phút"` · emoji "💔" · image "/images/holdem-bad-beat-hero.webp" · imageAlt(EN): "A poker player clutching his head in anguish after losing a big pot he was a huge favorite to win, his chips stacked on the green felt" · date "2026-07-05" · updated "2026-10-06"
- tags(EN): ["bad beat", "what is a bad beat in poker", "bad beat vs cooler", "bad beat jackpot", "poker suckout", "getting your money in good", "how to deal with bad beats"]

### 구조 (EN L##)
L19 경험담(== 1) · L21 정의 문단(==g:suck out== · glossary·cooler 썸네일 링크)
L25 ### The bad beat, at a glance → `### Tóm tắt nhanh` · L27–32 stripe 4행(«Ahead going in | …» · «80%+ | …» · «The suckout | …» · «Usually a good sign | …»)
L36 ## What Is a Bad Beat in Poker? → H2 #2 · L38 굵은 첫 문장 직답 · L40 문단(fish 링크)
L44 ## Bad Beat vs Cooler: The Difference That Matters → H2 #3 · L46 ![…](/images/holdem-bad-beat-litmus.webp "…") · L48 문단 · L50–60 박스 + 표 5행(«| | Bad Beat | Cooler (strict sense) |») · L62 문단(cooler 링크 · 🔴 set over set 함정 단락 뉘앙스 그대로)
L66 ## How Big a Favorite Makes It a "Real" Bad Beat? → H2 #4 · L68 ![…](/images/holdem-bad-beat-suckout.webp "…") · L70 문단 · L72–74 불릿 3 · L76 문단(pot-odds 썸네일 링크)
L80 ## Classic Bad Beat Examples (With the Odds) → H2 #5 · L82 ![…](/images/holdem-bad-beat-aces-vs-set.webp "…") · L84 문단 · L86–96 박스 + 표 5행(«The beat | You had | You were | How it happens») · L98 이탤릭 단락(borderline) · L100 문단(cooler 링크) · (선택) 절 끝 `[máy tính equity](/vi/calculator)` 1문장
L104 ## What Is a Bad Beat Jackpot? → H2 #6 · L106 문단 · L108 문단 · L110–112 불릿 3 · L114–122 박스 + 표 3행(«Who | Typical share») · L124 굵은 판정 문단(A♠A♥ vs J♥J♣) · L126 caveat(40/30/30 변형 — 운영사 이름 없음 ✓)
L130 ## The Most Famous Bad Beat in Poker → H2 #7 · L132 문단(2008 WSOP · Mabuchi · Phillips · PokerNews 인용) · L134 이탤릭 판정(🔴 그대로) · L136 문단
L140 ## Why Bad Beats Are Actually Good for You → H2 #8 · L142·L144·L146 문단(🔴 L146 «as long as getting it in really was good» 조건절 유지)
L150 ## How to Deal With a Bad Beat → H2 #9 **«Tilt là gì — làm gì ngay sau một bad beat?»**(정본 축어 · 계획 §3-C ⑱) · L152 문단 앞에 tilt 정의 1~2문장 추가(출처 = EN glossary L231 «Emotionally-driven bad play, usually after a loss» → «tilt (mất kiểm soát cảm xúc rồi chơi sai)») · L154–158 번호 목록 5
L162–165 readnext 2행(cooler · fish) → «Cooler trong poker là gì?» · «Fish trong poker là gì?»
L167 ## FAQ · L169–199 Q 8개
L203 ## The 3 Things to Remember → `## Những điều cần nhớ` · L205–207 번호 3 · L209 문단(fish 링크)
L213 ## Related Posts · 카드 4: L216 cooler(Thuật ngữ / What Is a Cooler? / The loss with no suckout — in the strict sense, no bad beat) · L221 fish(Thuật ngữ / What Is a Fish? / The player whose suckouts pay your bills) · L226 pot-odds(Xác suất &amp; toán / How to Calculate Pot Odds / Know when you're the favorite in the first place) · L231 tiebreak-rules(Thứ hạng tay bài / Who Wins at Showdown / How the winning hand is actually decided)
- 마크다운 표 3 · 박스 3 · 이미지 3 · == 1 · ==g: 1

### 링크 — 편차 0
- holdem-glossary : 21* · holdem-cooler : 21*,62,100,163rn,216h · holdem-fish : 40,164rn,209,221h · holdem-pot-odds : 76*,226h · holdem-tiebreak-rules : 231h
- 현지 추가(선택 1): H2 #5 절 끝 `[máy tính equity](/vi/calculator)`(앵커 정본 §3-A ⑤ · L-F §7-B 처방 · 계산기가 핸드 vs 핸드 equity를 지원함 = `vi-tools.md` · 다른 문구 금지).

### 소유표 (계획 §3-C)
- **주인인 검색어**: bad beat 50(섞임 · tags) · bad beat là gì 10 · bad beat poker là gì 10 · bad beat poker meaning/hand/rules 10·10·10 · **tilt**(⑱ · tilt poker 40 · tilt poker là gì 10 · tilt poker meaning/term 10·10) → H2 #9 정본 + FAQ 7.
- 🔴 쓰면 안 되는 헤드(seoTitle·H1·tags): 단독 «tilt là gì» 880 · «bad beat jackpot» 계열(⑲ 운영사 상품 · FAQ 1문 구조만 · 운영사 이름·금액 없음 — EN L126 그대로) · all-in(all-in-rules) · xác suất/máy tính(확률 글·도구).
- cooler와의 경계: «cooler vs bad beat» H2는 양쪽 글에 있다(EN 동형) — 서로 첫 화면 링크(EN L21·L62 그대로).

### 키워드 (실측 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| bad beat poker là gì · bad beat là gì | 10 · 10 | seoTitle·tags·FAQ 1(결합형만) |
| bad beat | 50(섞임 5/10) | tags만 |
| bad beat poker hand · rules · meaning | 10 · 10 · 10 | tags · H2 #5 · H2 #4 · H2 #2 직답 영어 병기 |
| tilt poker · tilt poker là gì · meaning · term | 40 · 10 · 10 · 10 | tags · H2 #9 정본 · FAQ 7 |
| 🔴 버림 | | tilt là gì 880(1/10) · bad beat jackpot 계열(상품) · «bad beat» 단독 seoTitle |

### 현지 SERP (L-F §3-A ⑧ · §4-F · §11-2 축어)
- «bad beat» 1페이지 = en.wikipedia · Natural8 vi «Cách xử lý các lần thất bại bad beat»(AA vs 65 «19.21%» — 무늬 없음 · 재현 불가) · GGPoker 잭팟 FAQ · 음악 3 · The Athletic(스포츠베팅) · PokerNews 용어집. «bad beat poker là gì» = facebook 5 · reddit 4 · PAA 없음.
- WikiPoker «Badbeat poker là gì?» H2 «7 mẹo đối phó với bad beat trong poker».
- **우리가 더 줄 것 3가지**: ① 확률 표(~80% · ~85% · ~63% · ~90%+ · ~96%)와 «진짜 bad beat 기준선»(경쟁 0) ② 잭팟 = 상품명이고 litmus와 다르다는 판정(L124 · 경쟁 0) ③ Mabuchi vs Phillips를 EN의 엄밀 판정(suckout은 턴)으로.

### 확정 카피 (Fable 서브 → Opus 재측정·수정)
**title (H1)** (70): Bad beat trong poker là gì? Khi cầm 80% thắng vẫn chưa đủ để giữ stack

**seoTitle** (54): Thắng 80% mà vẫn thua cả stack — Bad beat poker là gì?

**desc** (149): AA all-in, đối thủ 55 call, river ra con 5 — tôi mất cả stack dù dẫn hơn 4:1. Bad beat poker là gì, khác cooler ở đâu và vì sao nó thường là tin tốt.

**tldr** (평문):
Bad beat là khi bạn đẩy tiền vào pot với lợi thế rất lớn, thường từ 80% trở lên, rồi thua vì đối thủ trúng đúng lá bài may mắn ở cuối. Khác với cooler theo nghĩa chặt, lúc tiền vào pot bạn đang dẫn trước; chỉ là bộ bài phản bội bạn ở lá cuối. Cảm giác rất đau, nhưng nếu bad beat đến đều đặn thì thường là đối thủ đang bỏ tiền vào khi đã thua thế — đúng kiểu bàn bạn muốn ngồi.

**tags** (8): ["bad beat poker là gì", "bad beat", "bad beat poker hand", "bad beat poker rules", "bad beat poker meaning", "tilt poker", "tilt poker là gì", "cooler và bad beat"]

**H2 세트**:
1. ### Tóm tắt nhanh
2. ## Bad beat trong poker là gì? ← What Is a Bad Beat in Poker?
3. ## Bad beat khác cooler ở đâu — và vì sao phải phân biệt? ← Bad Beat vs Cooler
4. ## Dẫn bao nhiêu phần trăm thì mới gọi là bad beat "thật"? ← How Big a Favorite…
5. ## Những bad beat kinh điển ở bàn poker — tỷ lệ thắng thực tế là bao nhiêu? ← Classic Examples
6. ## Bad beat jackpot là gì và khi nào được tính? ← What Is a Bad Beat Jackpot?
7. ## Bad beat nổi tiếng nhất lịch sử poker là ván nào? ← The Most Famous Bad Beat
8. ## Vì sao bad beat lại là tin tốt cho bạn? ← Why Bad Beats Are Actually Good
9. ## Tilt là gì — làm gì ngay sau một bad beat? ← How to Deal With a Bad Beat (정본 축어)
10. ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan
(내용 H2 8/8 질문형)

**FAQ** (8 = EN):
1. Bad beat poker là gì? ← what is a bad beat
2. Bad beat và cooler khác nhau ở đâu? ← difference
3. Thua một ván coinflip (50/50) có tính là bad beat không? ← coinflip (A‑K vs Q‑Q 43%/46% 축어)
4. Bad beat jackpot là gì, ván nào mới đủ điều kiện? ← jackpot (구조만 · EN L183 축어)
5. Bad beat tệ nhất trong lịch sử poker là ván nào? ← worst in history
6. Chơi poker online có gặp bad beat nhiều hơn không? ← online
7. Làm sao để không tilt sau một bad beat? ← how to deal
8. Bad beat có đồng nghĩa với chơi dở không? ← playing badly

**흡수**: bad beat poker là gì → seoTitle·tags·FAQ 1 / bad beat 50 → tags / hand·rules·meaning → tags·H2 #5·#4·#2 / tilt poker 40 · tilt poker là gì → tags·H2 #9·FAQ 7 / jackpot → H2 #6·FAQ 4 구조만.

**손본 자리**: Fable 원안 → Opus 수정 2곳: ① tags «poker all-in»(all-in-rules 몫) → «bad beat poker meaning»(10) ② H2 #4 인용부호 «"thật"»로(§1-B 곧은 따옴표). 길이 한도 안(seoTitle 54 · desc 149 · H1 70).

### §13 자리 (EN 축어 · 값·카드 불변 · 구분자만)
L19 …I had pocket aces, got it all in against a player who called with pocket fives, and watched one of the last two fives slam onto the river. … My money went in as better than a 4-to-1 favorite, and I still lost the whole stack to ==one of the two cards in the deck that could beat me==.
L29 80%+ | How big a favorite it usually takes
L54 | **Who led when chips went in** | **You** were the favorite (often 80%+) | You were **behind** | · L57 | **Classic example** | AA loses when 7‑7 spikes a set | KK runs into AA |
L62 …**flopped set over flopped set is not a bad beat.** When your set of queens loses to a set of kings made on the same flop… (If the kings only found their set on the turn or river *after* the money was in, the test says suckout — that one *is* a bad beat. …)
L68 ![…an 80 percent favorite…](/images/holdem-bad-beat-suckout.webp "…~80% favorite…")
L72 **~80% or more, and you lose to a suckout** … Your aces (a ~4-to-1 favorite over a lower pair) … A **one-outer** … · L73 **60–70% favorite losing** … · L74 **A coinflip is never a bad beat.** Losing A‑K to Q‑Q (about 43/57 offsuit, 46/54 suited) …
L90 | **Aces cracked by a set** | AA vs a lower pair (e.g. 7‑7) | ~80% (4:1) | … | · L91 | **Aces vs a random hand** | AA all-in preflop | ~85% | … | · L92 | **Overpair vs a flush draw (borderline)** | Overpair on the flop | ~63% (1.7:1) | Their nine flush outs, plus backdoor two pair or straight… | · L93 | **Runner-runner** | … | ~90%+ | … | · L94 | **The one-outer** | A near-locked hand | ~96% | … |
L98 *…at ~63%, it's more variance than a "true" bad beat — but it's what the table calls it anyway.*
L100 …pocket aces all in preflop against pocket sevens — you're roughly an 80% favorite, a 4-to-1 lock … there are two more sevens in the deck … only an ace or a rare runout (a flush, a straight, or trips on the board) saves you. Four times out of five…
L110 **"aces full of jacks or better, beaten by four of a kind or better."** · L118–120 | Loser ~50% | Winner ~25% | Others ~25% (split evenly) | · L126 …some use 40/30/30…
L124 …you hold A♠A♥ on a board of A♣ J♠ J♦ 7♥ 2♣ for aces full of jacks, and your opponent holds J♥J♣ for four jacks. Both hands were complete on the flop…
L132 **2008 World Series of Poker Main Event** · **Motoyuki Mabuchi** · quad aces · board A♥ 9♣ Q♦ 10♦ · **Justin Phillips** (K♦ J♦) · Broadway A-K-Q-J-10 on the turn · river **A♦** · royal flush 10‑J‑Q‑K‑A of diamonds · PokerNews: Mabuchi checked, Phillips bet, Mabuchi announced "gamble!" and moved all in, Phillips called instantly.
L134 *…Phillips had already passed Mabuchi's set when the turn 10♦ completed his straight, so the big river all-in went in with Phillips ahead. The suckout came a street earlier.…*
L179 …A‑K versus Q‑Q (A‑K wins only about 43% of the time offsuit, 46% suited)…

### 경험담 자리
L19 AA vs 55 · 리버 5 · «better than a 4-to-1 favorite» → «dẫn hơn 4:1» · 카드·수치 축어 · 장소 없음(그대로 없음).
L58 | **The feeling** | "I got outdrawn" | "I never had a chance" | · L154 "I got it in good, nothing I could do"

### 하지 말 것
- Jackpot 절: 금액·룸·지역 추가 금지 — EN의 분배 비율(~50/25/25 · 40/30/30 변형)과 판정 규칙만. 운영사 이름 0(GGPoker는 이 글에 없다).
- L134 이탤릭(Mabuchi 엄밀 판정)·L98(borderline)·L62(set over set 함정) **뉘앙스 그대로** — 강화·삭제 금지.
- L146 «Getting your money in good and losing is still a winning decision … as long as …» 조건절 유지.
- «tilt» 정의는 H2 #9 머리 1~2문장만 — tilt 관리 전체 글로 키우지 마라(EN 분량).

---

## holdem-cooler — EN updated 2026-10-06

### 메타 (EN 축어)
- title: "What Is a Cooler in Poker? The Unavoidable Loss — and Why It's Not a Bad Beat" (77)
- seoTitle: "The Hand You Couldn't Fold If You Tried — What Is a Cooler?" (59)
- desc: "A cooler is when your monster hand runs into a bigger one and folding was never an option — and why, strictly, it's not a bad beat, with classic examples." (154)
- tldr: "A cooler is a hand where you lose a big pot with a very strong holding you could almost never correctly fold — like pocket kings running into aces, or a set losing to a bigger set. In the strict sense used in this guide, you were behind when the money went in and no lucky card 'sucked out' on you: you played it right and still lost. It's poker's most honest kind of disaster." (377)
- category "glossary" · readTime "10 min" → `"10 phút"` · emoji "🧊" · image "/images/holdem-cooler-hero.webp" · imageAlt(EN): "A stunned poker player with his hand on his head after losing a big pot, watching his opponent pull a tall stack of chips across the green felt" · date "2026-07-05" · updated "2026-10-06"
- tags(EN): ["cooler", "what is a cooler in poker", "cooler vs bad beat", "poker cooler meaning", "poker setup", "got coolered", "set over set", "cooler hand examples"]

### 구조 (EN L##)
L19 경험담(== 1) · L21 정의 문단(==g:folding was never a real option== · glossary 썸네일 링크)
L25 ### The cooler, at a glance → `### Tóm tắt nhanh` · L27–32 stripe 4행
L36 ## What Is a Cooler in Poker? → H2 #2 · L38 ![…](/images/holdem-cooler-collision.webp "…") · L40 굵은 직답 · L42 문단(setup · coolered · fish 썸네일 링크)
L46 ## Cooler vs Bad Beat: The Difference Everyone Gets Wrong → H2 #3 · L48 ![…A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠…](/images/holdem-cooler-vs-badbeat.webp "…") · L50 문단 · L52–53 불릿 2 · L55 문단 · L57–67 박스 + 표 5행 · L69 문단(A♠A♥ vs 7♣7♦ 양면 · pot-odds 썸네일 링크)
L73 ## Classic Cooler Examples (The Whole Family) → H2 #4 · L75 ![…](/images/holdem-cooler-stacks-collide.webp "…") · L77 문단 · L79–90 박스 + 표 6행(«Cooler | The clash | Why you can't fold») · L92 문단(set over set 7♣7♦ vs J♠J♥ · tiebreak 링크)
L96 ## Is a Cooler the Same as a "Setup"? And What Does "Coolered" Mean? → H2 #5 · L98 문단 · L100–102 불릿 3(Setup · Coolered · Cold deck) · L104 문단(myth: not always all-in)
L108 ## Can You Actually Avoid Coolers? → H2 #6 · L110·L112 문단(position-play 링크)
L116 ## When "It Was a Cooler" Is Just an Excuse → H2 #7 · L118 문단 · L120 문단 · L122–124 :::pull(litmus 질문) · L126 문단(fish 링크)
L130 ## How to Recover From a Cooler → H2 #8 · L132 문단 · L134–137 번호 4
L141–144 readnext 2행(fish · tiebreak-rules) → «Fish trong poker là gì?» · «Ai thắng khi showdown?»
L146 ## FAQ · L148–186 Q 10개
L190 ## The 3 Things to Remember · L192–194 번호 3 · L196 문단(fish 링크)
L200 ## Related Posts · 카드 4: L203 fish(Thuật ngữ / What Is a Fish? / The player who calls a cooler a bad beat) · L208 tiebreak-rules(Thứ hạng tay bài / Who Wins at Showdown / How ties and second-best hands are decided) · L213 straddle(Thuật ngữ / What Is a Straddle? / The bet that builds bigger, cooler-prone pots) · L218 pot-odds(Xác suất &amp; toán / How to Calculate Pot Odds / Tell a cooler from a call you should fold)
- 표 2 · 박스 2 · 이미지 4 · pull 1 · == 1 · ==g: 1

### 링크 — 편차 0
- holdem-glossary : 21* · holdem-fish : 42*,126,142rn,196,203h · holdem-pot-odds : 69*,218h · holdem-tiebreak-rules : 92,143rn,208h · holdem-position-play : 112 · holdem-straddle : 213h
- 현지 추가 0(bad-beat로 가는 링크는 EN에 없다 — fr C가 1개 신설했으나 vi는 EN 1:1 유지 · 필요하면 C가 판단).

### 소유표 (계획 §3-C)
- **주인인 검색어**: cooler poker 10 · cooler poker hand/meaning/term 10·10·10 · poker cooler vs bad beat 10 · AC «cooler poker là gì» · «cooler trong poker».
- 🔴 쓰면 안 되는 헤드: 단독 «cooler là gì» 170(0/10 · 냉각기) · PAA(«cooler poker là gì» SERP) «Limp poker là gì?»(limping ⑯) · «Call poker là gì?»(betting-actions ②) → 이 글 FAQ에 넣지 않는다.
- bad-beat와의 경계: 비교 H2 양쪽(EN 동형) · 정의 깊이는 각자.

### 키워드 (실측 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| cooler poker là gì · cooler trong poker(AC) | — | seoTitle·H1·tags·H2 #2·FAQ 1 |
| cooler poker · cooler poker hand | 10 · 10 | tags · H2 #4 |
| poker cooler vs bad beat | 10 | H2 #3 축어 · tags |
| cooler poker meaning · term | 10 · 10 | H2 #2·#5 직답 영어 병기 |
| 🔴 버림 | | cooler là gì 170 |

### 현지 SERP (L-F §4-G · §11-2 축어)
- «cooler poker là gì» 1페이지 = 프록시 2(«Thuật ngữ Poker») · wikipoker · energycasino 용어집 · Natural8 vi «Hướng dẫn về cooler là gì trong poker»(H2 «Cooler có khác với Bad Beat không?» · 9번 +100 / 1번 −200 = 평균 +70 ✓) · reddit · facebook 3 · studocu. PokerNews·PokerStars EN(«For the Loser, It's Called a Cooler»).
- 경쟁은 cooler를 엄밀히 한 기준으로 정의하지 않는다 → EN의 «strict sense this guide uses» 선언을 **그대로** 옮긴다(«theo nghĩa chặt mà bài này dùng»).
- **우리가 더 줄 것 3가지**: ① 7장 → 베스트 5를 보여 주는 set over set 예시(L92 · 경쟁 0) ② «cooler 핑계» litmus(L122) ③ 가족표 6행 + 「straight over straight은 idiot end면 fold」 caveat.

### 확정 카피 (Fable 서브 → Opus 재측정)
**title (H1)** (73): Cooler poker là gì? Ván không thể fold — và vì sao nó không phải bad beat

**seoTitle** (54): Set K gặp set A, không fold được — Cooler poker là gì?

**desc** (150): Tôi flop set K, all-in ở turn, định kéo pot thì đối thủ lật set A. Cooler poker là gì, khác bad beat ở đâu, có tránh được không — kèm ví dụ kinh điển.

**tldr** (평문):
Cooler là ván bạn thua một pot lớn với tay bài rất mạnh mà gần như không bao giờ fold đúng được — như đôi K gặp đôi A, hay set thua set lớn hơn. Theo nghĩa chặt dùng trong bài này, bạn đã bị dẫn ngay lúc tiền vào pot và không có lá bài may mắn nào lật ngược thế cờ: bạn chơi đúng mà vẫn thua. Đó là kiểu thảm họa trung thực nhất của poker.

**tags** (8): ["cooler poker là gì", "cooler poker", "cooler trong poker", "cooler poker hand", "poker cooler vs bad beat", "set over set", "KK gặp AA", "coolered"]

**H2 세트**:
1. ### Tóm tắt nhanh
2. ## Cooler trong poker là gì? ← What Is a Cooler in Poker?
3. ## Poker cooler vs bad beat: khác nhau ở đâu mà ai cũng nhầm? ← Cooler vs Bad Beat
4. ## Những ván cooler kinh điển — cả "gia đình" cooler gồm những gì? ← Classic Cooler Examples
5. ## Cooler có giống "setup" không, và "coolered" nghĩa là gì? ← Setup / Coolered
6. ## Có thật sự tránh được cooler không? ← Can You Actually Avoid Coolers?
7. ## Khi nào "cooler thôi" chỉ là lời bao biện? ← When "It Was a Cooler" Is Just an Excuse
8. ## Làm gì để gượng lại sau một cooler? ← How to Recover From a Cooler
9. ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan
(내용 H2 7/7 질문형)

**FAQ** (10 = EN):
1. Cooler poker là gì? · 2. Cooler và bad beat khác nhau ở đâu? · 3. Cooler là do xui hay do chơi dở? · 4. "Setup" có giống cooler không? · 5. KK gặp AA có phải cooler không? · 6. Set gặp set lớn hơn xảy ra bao lâu một lần? · 7. "Bị coolered" nghĩa là gì? · 8. Cooler có luôn phải là all-in không? · 9. Làm sao vượt qua một cooler? · 10. Cooler trong casino có cùng nghĩa với cooler trong poker không?

**흡수**: cooler poker là gì · cooler trong poker → seoTitle·H1·tags·H2 #2·FAQ 1 / cooler poker · hand → tags·H2 #4 / poker cooler vs bad beat → H2 #3·tags / meaning·term → 직답 영어 병기.

**손본 자리**: Fable 원안 → Opus 수정 1곳: H2·FAQ의 «» 인용부호 → 곧은 `"…"`(§1-B). 길이 한도 안(seoTitle 54 · desc 150 · H1 73).

### §13 자리 (EN 축어)
L48 ![Infographic of A♠ A♦ versus K♥ K♦ on a K♠ 7♦ 2♣ 8♥ 3♠ runout …](… "One collision, two labels: preflop, kings against aces is the textbook cooler for the kings — and when the king spikes, the very same hand becomes a bad beat for the aces")
L64 | **Classic example** | KK runs into AA | AA cracked when 7‑7 spikes a set |
L69 **Bad beat:** you hold A♠A♥, get it all in preflop against 7♣7♦, and a **7** hits the board — your aces were a ~4‑to‑1 favorite (about 80%) and got outdrawn. **Cooler:** flip it around — you hold the **7♣7♦**, flop a set of sevens, and stack off against a set drawn from a bigger pair.…
L83 | **Kings vs Aces** | KK all-in preflop against AA | KK is a ~4.5:1 dog to AA… | · L84 set over set · L85 K‑high flush vs A‑high flush · L86 full house over full house · L87 aces full vs four of a kind · L88 straight over straight («idiot end» caveat)
L92 …you hold **7♣7♦** and the flop comes **J♦ 7♥ 2♣** … your opponent holds **J♠J♥** … By the river on a **J♦ 7♥ 2♣ 5♠ Q♦** board, your best five cards are 7‑7‑7‑Q‑J and theirs are J‑J‑J‑Q‑7 … your only escape was the single remaining seven in the deck.
L166 …Kings are roughly a 4.5-to-1 underdog to aces preflop… satellite bubble where ICM can make even kings a fold…
L170 …they will *both* flop a set only about 1% of the time (roughly 1 in 96). Flopping a set at all happens about 11.8% of the time — around 1 in 8.5…
L186 …the 2003 film *The Cooler*…

### 경험담 자리
L19 I still remember the hand that taught me the word. I flopped a set of kings, got it all in on the turn, and turned my cards over already reaching for the pot — then watched my opponent flip up a set of aces.… → 카드(set K vs set A) · 스트리트(turn all-in) 축어 · 장소 없음.

### 하지 말 것
- «strict sense this guide uses» 선언(L40·L50·L52) 그대로 — 넓은 용례도 인정하는 문장(L40 «plenty of players use the word more loosely…») 삭제 금지.
- L104 «a cooler does not have to be all-in» 유지 · L112 «unavoidable has a small asterisk» 뉘앙스 유지.
- FAQ 10(casino 뜻 · 영화 *The Cooler* 2003 · cold deck 역사) = EN 사실만 · 베트남 카지노 언급 금지(«sòng bài»는 이 FAQ에서만).
- «idiot end» = «đầu thấp của sảnh (idiot end)» 1회.

---

## holdem-fish — EN updated 2026-10-06

### 메타 (EN 축어)
- title: "What Is a Fish in Poker? How to Spot One — and Make Sure It Isn't You" (69)
- seoTitle: "If You Can't Spot the Fish, It's You — What Is a Poker Fish?" (60)
- desc: "A fish is the weak player the whole table profits from. How to spot one, the shark/whale/nit/donkey slang decoded, and how to make sure the fish isn't you." (155)
- tldr: "A 'fish' is poker slang for a weak, losing player the stronger players ('sharks') make their money from. Fish play too many hands, call too much, and can't fold — and the famous line warns that if you can't spot the fish at your table, you're it. It's the single most important read in the game: find the fish, or become one." (325)
- category "glossary" · readTime "10 min" → `"10 phút"` · emoji "🐟" · image "/images/holdem-fish-hero.webp" · imageAlt(EN): "A relaxed recreational player at a poker table pushing a big stack of chips into the pot while sharper opponents quietly watch" · date "2026-07-05" · updated "2026-10-06"
- tags(EN): ["fish", "what is a fish in poker", "poker fish meaning", "how to spot a fish in poker", "fish vs shark", "am i the fish", "poker player types", "how to stop being a fish"]

### 구조 (EN L##)
L19 경험담(== 1) · L21 정의 문단(==g:how to spot a fish== · glossary 썸네일 링크)
L25 ### The fish, at a glance → `### Tóm tắt nhanh` · L27–32 stripe 4행(«Weak / losing | …» · «Shark | …» · «40–70% | …» · «"Don't tap the glass" | …»)
L36 ## What Does "Fish" Mean in Poker? → H2 #2 · L38 굵은 직답 · L40 문단
L44 ## Why Are Bad Players Called "Fish"? → H2 #3 · L46 ![…K♦ 7♣ 2♠ 9♥ 3♦ board…](/images/holdem-pub-players-table.webp "…") · L48 문단 · L50 문단("Don't tap the glass")
L54 ## How to Spot a Fish: 8 Telltale Signs → H2 #4 · L56 문단 · L58–67 :::stripe 8행 · L69 문단(starting-hands-chart 썸네일 링크)
L73 ## The Poker Zoo: Fish vs Shark vs Whale vs Nit vs Donkey → H2 #5 · L75 ![…](/images/holdem-fish-food-chain.webp "…") · L77 문단 · L79–94 박스 + 표 10행(«Term | What it means | How they play | How you beat them») · L96 문단 · L98–100 불릿 3
L104 ## "If You Can't Spot the Sucker…": The Famous Line, Corrected → H2 #6 · L106 ![…](/images/holdem-starting-hands-weak-ace-trap.webp "…") · L108 문단 · L110 문단 · L112–114 :::pull(Rounders 인용 영어 축어 유지) · L116 문단(Amarillo Slim 2005 · Warren Buffett) · L118 문단
L122 ## Am I the Fish? An Honest Self-Check → H2 #7 · L124 문단 · L126–134 박스 + 표 3행(«| | VPIP | PFR | The read |») · L136 문단 · L138–141 불릿 4 · L143 문단
L147 ## How to Stop Being a Fish → H2 #8 · L149 문단 · L151–156 번호 6(starting-hands-chart · pot-odds 썸네일 · position-play 링크) · L158 문단
L162–165 readnext 2행(starting-hands-chart · pot-odds) → 🔴 카드 제목에 «bảng/chart» 금지 → «Nên chơi bài gì theo vị trí?» · «Pot odds trong 10 giây»
L167 ## FAQ · L169–199 Q 8개
L203 ## The 3 Things to Remember · L205–207 · L209 문단(starting-hands-chart · pot-odds 링크)
L213 ## Related Posts · 카드 4: L216 starting-hands-chart(Strategy→Chiến thuật / Starting Hands Chart → 🔴 «chart» 금지 → «Bài khởi đầu nên chơi theo vị trí» / The fastest way to stop being the fish) · L221 pot-odds(Xác suất &amp; toán / How to Calculate Pot Odds / Stop chasing draws without a price) · L226 position-play(Chiến thuật / Playing Your Position / The edge fish throw away every hand) · L231 straddle(Thuật ngữ / What Is a Straddle? / The bet that bloats the pot for the fish)
- 표 2 · 박스 2 · 이미지 4 · stripe 2 · pull 1 · == 1 · ==g: 1

### 링크 — 편차 0
- holdem-glossary : 21* · holdem-starting-hands-chart : 69*,151,163rn,209,216h · holdem-pot-odds : 153*,164rn,209,221h · holdem-position-play : 155,226h · holdem-straddle : 231h
- 현지 추가 0. 🔴 starting-hands-chart 앵커 텍스트 = «bài khởi đầu nên chơi theo vị trí»류(§3-C ⑥ · 글 몫) — «bảng bài khởi đầu»·«hand chart»는 도구 앵커라 금지.

### 소유표 (계획 §3-C)
- **주인인 검색어**: fish poker 10 · fish poker meaning/term 10·10 · fish poker player · **플레이어 유형 비교**(shark·whale·nit·donkey·calling station·reg·grinder·TAG/LAG) · Rounders 인용 교정.
- 🔴 쓰면 안 되는 헤드: 단독 «fish là gì» 1.000(0/10 · 물고기) · bluff(strategy ⑰ — fish 글은 «bluff catcher» 문맥만) · «bảng bài khởi đầu/hand chart»(도구 ⑥) · VPIP 수치를 범용 합격선처럼(L-F §6-B) — EN이 이미 «No single sign is proof»(L69) · «working read»로 한정 → 그 한정 문장 유지.

### 키워드 (실측 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| fish poker · fish poker là gì(AC 없음 · 결합형 조어) | 10 · — | seoTitle·H1·tags·H2 #2 |
| fish poker meaning · term · player | 10 · 10 · 0 | tags · FAQ 1 · H2 #5 |
| 🔴 버림 | | fish là gì 1.000 · «cá trong poker» `-` |

### 현지 SERP (L-F §4-C · §11-2)
- «fish poker» 1페이지 = **전부 영어**(youtube 2 · poker-academie fr · hand2note · clipart 2 · 앱 · 선수명 Darryll Fish · assopoker it) → vi 정면 해설 0 = 첫 글 자리. 보충 vi 원문 WikiPoker «Cách nhận biết Fish trong Poker»(참여 빈도·패배 반응·놓지 못하는 패 · VPIP 문턱 없음).
- **우리가 더 줄 것 3가지**: ① 유형 10행 비교표(경쟁 2~3종) ② 자기 점검 VPIP/PFR 표 + 한정 문장 ③ Rounders «sucker» 원문 교정 + Amarillo Slim/Buffett 귀속(경쟁 0).

### 확정 카피 (Fable 서브 → Opus 재측정)
**title (H1)** (74): Fish poker là gì? Cách nhận ra fish ở bàn — và chắc rằng đó không phải bạn

**seoTitle** (54): Không thấy fish ở bàn? Chính là bạn — Fish poker là gì

**desc** (151): 6 tháng sau tôi mới hiểu: fish ở bàn đó chính là tôi. Fish poker là gì, dấu hiệu nhận ra, shark/whale/nit/donkey là ai và cách để bạn không thành fish.

**tldr** (평문):
"Fish" là tiếng lóng poker chỉ người chơi yếu, thua đều, nguồn tiền của những người chơi mạnh hơn ("shark"). Fish chơi quá nhiều tay bài, call quá nhiều và không fold được — câu nói nổi tiếng cảnh báo rằng nếu bạn không nhận ra fish ở bàn, thì fish chính là bạn. Đó là cái read quan trọng nhất trong poker: tìm ra fish, hoặc trở thành fish.

**tags** (8): ["fish poker là gì", "fish poker", "fish poker meaning", "fish poker player", "shark poker", "whale poker", "nit poker", "donkey poker"]

**H2 세트**:
1. ### Tóm tắt nhanh
2. ## Fish trong poker là gì? ← What Does "Fish" Mean in Poker?
3. ## Vì sao người chơi dở lại bị gọi là "fish"? ← Why Are Bad Players Called "Fish"?
4. ## Nhận ra fish ở bàn poker bằng 8 dấu hiệu nào? ← How to Spot a Fish: 8 Telltale Signs
5. ## Fish, shark, whale, nit, donkey trong poker khác nhau ở đâu? ← The Poker Zoo
6. ## "Không thấy sucker ở bàn thì chính là bạn" — câu nói nổi tiếng, sửa cho đúng ← The Famous Line, Corrected
7. ## Bạn có phải là fish không? Tự soi lại cho thật lòng ← Am I the Fish?
8. ## Làm sao để không còn là fish? ← How to Stop Being a Fish
9. ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan
(내용 H2 7개 중 질문형 6 = 86%)

**FAQ** (8 = EN):
1. Fish poker nghĩa là gì? · 2. Gọi ai là fish có phải là chê không? · 3. Ngược lại với fish trong poker là gì? · 4. Fish và whale khác nhau ở đâu? · 5. Fish và donkey khác nhau ở đâu? · 6. Làm sao biết một người chơi là fish? · 7. Làm sao để không còn là fish? · 8. Ai là người nói câu "nếu không thấy sucker ở bàn thì chính là bạn"?

**흡수**: fish poker · fish poker là gì → seoTitle·H1·tags·H2 #2 / meaning → tags·FAQ 1 / term·player → tags·H2 #5 / shark·whale·nit·donkey → desc·tags·H2 #5·FAQ 3~5 / bluff → 0.

**손본 자리**: Fable 원안 → Opus 수정 1곳: «» 인용부호 → `"…"`. 길이 한도 안(seoTitle 54 · desc 151 · H1 74). tldr의 "Fish"·"shark" 따옴표 = 곧은 큰따옴표.

### §13 자리 (EN 축어)
L30 40–70% | A fish's typical VPIP (hands played)
L46 ![…K♦ 7♣ 2♠ 9♥ 3♦ board…](/images/holdem-pub-players-table.webp "…")
L59 Plays too many hands | Sees flops with any two cards — a VPIP of 40–70% vs a solid player's 15–22%
L69 …No single sign is proof — even good players limp occasionally… when you see three or four of these from the same player, you've probably found the fish — treat it as a working read and keep updating it.…
L130 | **Solid player** | 15–22% | 12–18% (never higher than their VPIP) | … | · L131 | **Fish** | 40–70% | under 10% | … | · L132 | **Nit** | under 12% | under 8% | … |
L136 …you're playing 45% of hands but raising only 5% of all hands dealt.…
L138 - Do you call preflop raises with hands like K‑7 offsuit or Q‑9 because "they're sort of playable"? · L141 - After a bad beat, does your next 20 minutes get *worse*?
L110–116 Rounders 1998 · Matt Damon · "If you can't spot the sucker in your first half hour at the table, then you are the sucker." · Amarillo Slim *Play Poker to Win* 2005 revised edition · Warren Buffett "and a million other fellows"

### 경험담 자리
L19 The first time someone at a casino table quietly called me a fish, I didn't even know I'd been insulted.… Six months and a lot of lost buy-ins later I understood: I *was* the fish.… → «casino table» = «một bàn poker live»로 옮겨도 된다(장소 창작 금지 · 베트남 카지노 이름 금지) · «6 tháng» · «nhiều buy-in» 축어.

### 하지 말 것
- VPIP/PFR 수치는 EN 표 그대로 + L69·L100 한정 문장 유지(«단일 수치로 fish 판정 금지» L-F §6-B — EN이 이미 하고 있다 · 추가 조건 창작 금지).
- Rounders 인용은 **영어 원문 그대로** pull 블록에 + 베트남어 번역 1줄 뒤에(EN 구조 유지 · «sucker» ≠ «fish» 교정 핵심).
- «cá»를 용어로 쓰지 마라 — fish 첫 등장 풀이 1회만. 조롱 톤 금지(L-F §7-F · EN 톤 유지).
- readnext·카드 제목에 «bảng/chart» 금지(§3-C ⑥).

---

## holdem-rake — EN updated 2026-10-06

### 메타 (EN 축어)
- title: "What Is Rake in Poker? How the House Gets Paid — and How Much You Really Pay" (76)
- seoTitle: "The Fee Quietly Eating Your Winnings — What Is Poker Rake?" (58)
- desc: "Rake is the fee the house takes from most cash-game pots. How pot rake, time charges and tournament fees work, what you really pay, and what rakeback returns." (158)
- tldr: "Rake is the small cut the cardroom takes from most pots to host the game — usually 2.5–10% up to a cap of a few dollars. Most rooms take nothing if everyone folds before the flop ('no flop, no drop'). It hits low-stakes and short-handed players hardest, and rakeback returns a slice of it to regulars." (301)
- category "glossary" · readTime "11 min" → `"11 phút"` · emoji "🏦" · image "/images/holdem-rake-hero.webp" · imageAlt(EN): "A dealer pulling a small stack of chips from the center pot into the rake drop slot on a green felt table" · date "2026-07-04" · updated "2026-10-06"
- tags(EN): ["rake", "what is a rake in poker", "poker rake explained", "rakeback", "poker rake cap", "time rake", "tournament rake", "how does rake work in poker"]

### 구조 (EN L##)
L19 경험담(== 1) · L21 문단(==g:how much you actually pay a session== · glossary 썸네일 링크)
L25 ### Rake at a glance → `### Tóm tắt nhanh` · L27–32 stripe 4행(«2.5–10% | …» · «$3–$6 | …» · «No flop, no drop | …» · «20–40% | …»)
L36 ## What Is Rake in Poker? → H2 #2 · L38 굵은 직답 · L40 문단(tournament-vs-cash-game 썸네일 링크)
L44 ## How Is Rake Taken? Pot Rake, Time Charge & Dead Drop → H2 #3 · L46 ![…](/images/holdem-rake-drop.webp "…") · L48 문단 · L50–59 박스 + 표 4행(«Type | How it's taken | Typical amount | Where you'll see it») · L61 문단 · L63–66 불릿 4(L63 GGPoker 언급 = EN 사실 그대로)
L70 ## How Much Rake Do You Actually Pay? → H2 #4 · L72 ![…](/images/holdem-rake-lowstakes.webp "…") · L74 문단 · L76 문단($1/$2 · 10% cap $5 · 30 hands/h · $100+/h) · L78 문단(NL50 예시 · «illustrative») · L80–87 박스 + 표 2행 · L89 문단(pot-odds 링크)
L93 ## What Is Rakeback? → H2 #5 · L95 문단 · L97 문단 · L99–102 :::compare(Contributed | Dealt) · L104 문단(🔴 «affiliate-driven» 경고 유지)
L108 ## Do Tournaments Have Rake? → H2 #6 · L110 문단 · L112–114 :::pull($100 + $9) · L116 문단(5–20% · $3 + $0.30 · turbo · tournament-vs-cash-game 링크)
L120 ## Online vs Live Rake: Which Is Higher? → H2 #7 · L122 문단 · L124–125 불릿 2 · L127 문단
L131–134 readnext 2행(straddle · tournament-vs-cash-game) → «Straddle trong poker là gì?» · «Giải đấu hay cash game?»
L136 ## FAQ · L138–180 Q 11개 — 🔴 **L166 «Is taking a rake illegal? Why is taking a rake in poker illegal?» 삭제 → «Tại sao phòng poker thu rake?»**(답 = EN L38·L40 내용: 하우스는 베팅하지 않는다 · 딜러·테이블·칩·보안 비용 · 팟에서 조금씩 · 대회는 buy-in에 포함 — 3~4문장 · 🔴 L168의 Molly's Game·home game 문장은 쓰지 않는다)
L184 ## The 3 Things to Remember · L186–188 · L190 문단(pot-odds · straddle 링크)
L194 ## Related Posts · 카드 4: L197 tournament-vs-cash-game(Tournament→Giải đấu / Tournament vs Cash Game / Why the two charge you completely differently) · L202 straddle(Thuật ngữ / What Is a Straddle? / The extra blind that bloats the pot — and the rake) · L207 pot-odds(Xác suất &amp; toán / How to Calculate Pot Odds / Read your pot after the house takes its cut) · L212 tournament(Giải đấu / How Poker Tournaments Work / Where the buy-in fee really goes)
- 표 2 · 박스 2 · 이미지 3 · compare 1 · pull 1 · == 1 · ==g: 1

### 링크 — 편차 0
- holdem-glossary : 21* · holdem-tournament-vs-cash-game : 40*,116,133rn,197h · holdem-pot-odds : 89,190,207h · holdem-straddle : 132rn,190,202h · holdem-tournament : 212h
- 현지 추가 0 · 🔴 `/vi/calculator`에 «rake 계산» CTA 금지(L-F §7-D · 미검증 기능).

### 소유표 (계획 §3-C · «레인 A로 넘기는 처리»)
- **주인인 검색어**: rake poker 20 · rake trong poker là gì 20 · rake poker là gì 20 · rake poker meaning 10 · AC «rake là gì trong poker» · «rakeback là gì» · «tiền rake là gì» · «cắt rake là gì» · rake là gì 390(섞임 4/10 → tags만).
- 🔴 쓰면 안 되는 것: **합법성 FAQ(L166) 삭제** · related «illegal» 축 전부 · 세율·법령 · 사이트 비교·앱·rakeback 추천 · 「2026년 베트남 일반 요율」로 EN 달러 수치를 번역하지 마라(EN 수치는 «thường» · «ví dụ» 한정어 유지 — L78 «illustrative» 그대로) · 단독 «rake là gì» seoTitle·H1.
- glossary에는 rake 정의 1줄만(§3-C) · pot odds·EV 수식은 L-C 글 몫(링크).

### 키워드 (실측 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| rake trong poker là gì | 20 | seoTitle·tags·H2 #2 |
| rake poker là gì · rake poker | 20 · 20 | H1·tags·FAQ 1 |
| rake là gì | 390(섞임) | tags만 |
| rake poker meaning · AC rake là gì trong poker · tiền rake là gì · cắt rake là gì · rakeback là gì | 10 · — | tags · H2 #2·#3·#5 직답 |
| 🔴 버림 | | related «why is taking a rake illegal / Molly's game / poker rake calculator / Natural8 rake structure» 전부 |

### 현지 SERP (L-F §3-A ⑤ · §4-H · §11-2)
- «rake là gì» = MMO4ME 포럼 «Rake là gì? Tại sao grinder quan tâm rake đến vậy?» · reddit · 사전 · 지질학 · U Lifestyle 제휴 · 카지노 홍보형 1. «rake poker là gì» 1페이지 = **전부 영어·외국어**(Natural8 EN · 888poker · masterclass · fr.pokernews · youtube) → vi 정면 해설 0~1편 = 첫 글 자리.
- EN 대체 원문: PokerNews(pot·시간제·대회 fee 구분 · 30분당 $10 × 5시간 = $100 ✓) · PokerStars 2023(109 = 100 + 9 · 55 = 50 + 5 ✓) · BetMGM. 세 글 모두 요율은 날짜 있는 사례 → 우리도 «thường»·«ví dụ».
- **우리가 더 줄 것 3가지**: ① 수수료 4종 표 + «no flop, no drop»·cap 규칙 ② NL50 «rake trap» 표(cap $2 vs $4 · bb/100 — illustrative 한정어 유지) ③ 1인칭 «한 달 본전» 경험담 + 운영 질문 FAQ(합법성 0).

### 확정 카피 (Fable 서브 → Opus 재측정)
**title (H1)** (74): Rake poker là gì? Phòng poker thu tiền cách nào, bạn thật sự trả bao nhiêu

**seoTitle** (52): Cả tháng hòa vốn mà vẫn lỗ? — Rake trong poker là gì

**desc** (150): Cả tháng hòa vốn: tôi thắng đối thủ nhưng thua phần phòng poker cắt. Rake poker là gì, thu kiểu nào, bạn thật sự trả bao nhiêu và rakeback trả lại gì.

**tldr** (평문):
Rake là phần nhỏ phòng poker cắt từ hầu hết các pot để tổ chức ván chơi — thường 2,5–10% và có mức cap vài đô la mỗi pot. Hầu hết phòng không thu gì nếu mọi người fold trước flop ("no flop, no drop"). Rake ăn nặng nhất vào người chơi stakes thấp và bàn ít người, còn rakeback trả lại một phần cho người chơi thường xuyên.

**tags** (8): ["rake trong poker là gì", "rake poker là gì", "rake poker", "rake là gì", "tiền rake là gì", "cắt rake là gì", "rakeback là gì", "pot rake"]

**H2 세트**:
1. ### Tóm tắt nhanh
2. ## Rake trong poker là gì? ← What Is Rake in Poker?
3. ## Rake được thu kiểu nào: pot rake, time charge và dead drop khác gì? ← How Is Rake Taken?
4. ## Bạn thật sự trả bao nhiêu rake? ← How Much Rake Do You Actually Pay?
5. ## Rakeback là gì? ← What Is Rakeback?
6. ## Giải đấu có rake không? ← Do Tournaments Have Rake?
7. ## Rake online và rake live, bên nào cao hơn? ← Online vs Live Rake
8. ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan
(내용 H2 6/6 질문형)

**FAQ** (11 = EN · 8번 교체):
1. Rake poker là gì? · 2. Rake được tính như thế nào? · 3. Ai là người trả rake? · 4. Mọi người fold hết trước flop thì có bị thu rake không? · 5. Bàn live $1/$2 thu rake bao nhiêu? · 6. Rakeback là gì? · 7. Làm sao để trả ít rake hơn?(답 = EN L164 축어 — 룸 «player-friendly caps» 일반 표현만 · 사이트명 0) · 8. **Tại sao phòng poker thu rake?**(교체 · 위 구조 절) · 9. Giải đấu có rake không? · 10. Rake ảnh hưởng tới win rate thế nào? · 11. Rake online hay rake live cao hơn?

**흡수**: rake trong poker là gì → seoTitle·tags·H2 #2 / rake poker là gì · rake poker → H1·tags·FAQ 1 / rake là gì(섞임) → tags / tiền rake·cắt rake·rakeback là gì(AC) → tags·H2 #3·#5 / illegal 축 → 0.

**손본 자리**: Fable 원안 → Opus 수정 1곳: tldr «("no flop, no drop")» 곧은 따옴표 확인. tags «cắt rake là gì»는 AC 축어라 유지(본문 동사는 «thu rake» · «cắt rake» 1회 인용). 길이 한도 안(seoTitle 52 · desc 150 · H1 74).

### §13 자리 (EN 축어 · 값 불변 · 구분자 §1-B: 2.5 → 2,5)
L28 2.5–10% | Typical pot rake range · L29 $3–$6 | Common live rake cap · L31 20–40% | Typical rakeback deal
L54 | **Pot rake (scaled)** | % of eligible pots, up to a cap | 2.5–10%, capped $1–$6 | … | · L55 | **Time charge** | Flat fee per player, every 30 min | ~$10–$15 per hour | High-stakes live ($10/$20+)… | · L56 Dead drop · L57 | **Tournament fee** | … | ~5–20% of buy-in | … |
L63 **No flop, no drop.** … (Not universal: a few sites, notably GGPoker, do rake some preflop pots…) · L64 **The rake cap.** … commonly **$3–$6 live** and **$1–$3 online**. … (a heads-up pot might be capped at $1). · L65 …$10–$15 an hour per player, taken every half-hour. … against a $3–$6 cap, a $2,000 pot was only ever giving up a few dollars.
L76 **A live $1/$2 game.** With 10% rake capped at $5 and roughly 30 hands dealt an hour… **$100+ an hour**… · L78 …online NL50 (illustrative…) … $2 is inside the $1–$3 most rooms post, $4 is above it.
L84 | Room with a **$2 cap** | ~5 bb/100 | +8 bb/100 win rate stays a **winner (+3)** | · L85 | Room with a **$4 cap** | ~8–9 bb/100 | +8 bb/100 breaks even or turns into a **loser (0 to −1)** |
L95 …A 30% rakeback deal simply means you get back 30 cents of every dollar you rake. · L104 …the gap between a 20% and a 40% deal…
L113 A **$100 + $9** tournament means $100 goes into the prize pool and **$9 is the house's fee.** · L116 …**5–20% of the buy-in**… (a $3 + $0.30 sit-and-go is 10%)…
L124 **Live rake** … (often 10%) with a higher cap ($3–$6) … ~30 hands an hour · L125 **Online rake** … (3–5%) with a smaller cap ($1–$3) … 250+ hands an hour…
L140 …(2.5–10%)… · L156 …10% of the pot capped at around $5 … $100 or more per hour… · L160 …often 20–40%… · L172 …$100 + $9 … 5–20%… · L176 …+8 bb/100…

### 경험담 자리
L19 It took me a depressing month of "break-even" sessions to figure out where my money was actually going. I wasn't losing to the other players — I was beating them, slightly. I was losing to the ==house's cut on every pot I won.== … → «một tháng hòa vốn» · 장소·스테이크 없음(그대로 없음).
L74 Here's the part that changed how I think about the game.…

### 하지 말 것
- 🔴 FAQ 8 교체 외 **합법성 문장 0** — L168 전체(Molly's Game 포함) 폐기. «nhà cái» 금지 · «phòng poker».
- EN 달러 요율·cap을 베트남 요율로 바꾸거나 ₫로 환산하지 마라 · «thường / ví dụ / illustrative» 한정어 유지.
- rakeback 절: 룸 이름·«đăng ký»·제휴 링크 0 · L104 경고 문장 유지.
- GGPoker 언급(L63·L152) = EN 사실 그대로 1회씩 · 추가 룸 이름 금지.

---

## holdem-straddle — EN updated 2026-10-06

### 메타 (EN 축어)
- title: "What Is a Straddle in Poker? Rules, Types, and Whether You Should" (65)
- seoTitle: "The Bet That Doubles the Stakes — What Is a Poker Straddle?" (59)
- desc: "A straddle is a voluntary blind that doubles the stakes before cards are dealt. The rules, every straddle type, who acts first, and whether it's profitable." (156)
- tldr: "A straddle is an optional blind bet — usually twice the big blind — posted before the cards are dealt. It buys the straddler the last action preflop and the option to raise, doubling the stakes. In almost every case it's a -EV play, and outside cash games it's almost never allowed." (282)
- category "glossary" · readTime "10 min" → `"10 phút"` · emoji "💰" · image "/images/holdem-straddle-hero.webp" · imageAlt(EN): "An under-the-gun player posting an extra blind bet of two chips in front of the big blind before the cards are dealt" · date "2026-07-04" · updated "2026-10-06"
- tags(EN): ["straddle", "what is a straddle in poker", "poker straddle rules", "mississippi straddle", "button straddle", "sleeper straddle", "is straddling profitable", "utg straddle"]

### 구조 (EN L##)
L19 경험담(== 1) · L21 문단(glossary 썸네일 링크 · ==g:should you actually do it?==)
L25 ### Straddle at a glance → `### Tóm tắt nhanh` · L27–32 stripe 4행(«2× BB | …» · «Last | …» · «Cash only | …» · «-EV | …»)
L36 ## What Is a Straddle in Poker? → H2 #2 · L38 굵은 직답($1/$2 · $4 · «$1/$2/$4») · L40 문단 · L42–43 불릿 2(live blind · posted blind) · L45 문단(blind-meaning 썸네일 링크 — blind 정의는 여기로 위임)
L49 ## How a Straddle Works: Who Acts First and Last → H2 #3 · L51 ![…$4 UTG straddle over $1/$2 blinds — UTG+1 acts first… minimum raise doubles to $8](/images/holdem-straddle-action-order.webp "…") · L53 문단 · L55–61 :::steps 5행 · L63 문단(🔴 «preflop only» 유지)
L67 ## Types of Straddle (UTG, Mississippi, Button & Sleeper) → H2 #4 · L69 ![…](/images/holdem-straddle-button.webp "…") · L71 문단 · L73–83 박스 + 표 5행(«Type | Who posts it | Action starts | Last to act | Buys the option?» · 🔴 이 표만 구분선이 `|------|` 형식 — 그대로) · L85 각주(==on the button==) · L87–91 불릿 5 · L93 ⚠️ 문단(house rules)
L97 ## How Much Is a Straddle? → H2 #5 · L99 문단($4 · $10 in $2/$5) · L101 문단 · L103–104 불릿 2($4 → $8 → $16) · L106 문단(pot-odds 링크)
L110 ## Is Straddling Allowed in Tournaments? → H2 #6 · L112 문단 · L114 문단(tournament-vs-cash-game 링크)
L118 ## Is Straddling Profitable? Should You Straddle? → H2 #7 · L120 ![…](/images/holdem-straddle-bloated-pot.webp "…") · L122 문단(GTO Wizard 인용 «a massive disadvantage» · «still almost always a money-losing proposition» — 영어 인용 유지 + vi 번역) · L124–128 :::card 3행(🎯 · 📉(외부 링크 gtowizard) · 💸(rake 링크)) · L130 문단 · L132–134 불릿 3 · L136 문단(position-play 링크)
L140–143 readnext 2행(blind-meaning · position-play) → «Blind trong poker là gì?» · «Vị trí thay đổi mọi thứ thế nào?»
L145 ## FAQ · L147–181 Q 9개
L185 ## The 3 Things to Remember · L187–189(🔴 L188 ==from the button== 유지) · L191 문단(blind-meaning · position-play · betting-actions 링크)
L195 ## Related Posts · 카드 4: L198 blind-meaning(Rules→Luật chơi / What Are the Blinds in Poker? / The small and big blinds a straddle builds on) · L203 position-play(Chiến thuật / How Position Changes Everything / Why a straddle's position matters more than its size) · L208 betting-actions(Luật chơi / Betting Actions: Check, Call, Raise / How the price resets after a straddle) · L213 tournament-vs-cash-game(Giải đấu / Tournament vs Cash Game / Why straddles are a cash-game-only thing)
- 표 1 · 박스 1 · 이미지 4 · steps 1 · card 1 · == 3 · ==g: 1

### 링크 — 편차 0
- holdem-glossary : 21* · holdem-blind-meaning : 45*,141rn,191,198h · holdem-pot-odds : 106 · holdem-tournament-vs-cash-game : 114,213h · holdem-rake : 127 · holdem-position-play : 136,142rn,191,203h · holdem-betting-actions : 191,208h · 외부 L126 gtowizard 그대로
- 현지 추가 0.

### 소유표 (계획 §3-C)
- **주인인 검색어**: straddle poker 30 · straddle poker là gì 30 · straddle poker meaning/rules/definition/term 10×4 · AC «straddle là gì trong poker» · PAA «Straddle nghĩa là gì?»(포커 문맥 표시 · FAQ 1).
- 🔴 쓰면 안 되는 헤드: 단독 «straddle là gì» 320(1/10 · 금융 옵션·자세) · blind 기본 정의(blind-meaning ② — L45 링크로 위임) · 포지션 전략(position-play) · «hand chart»를 straddle 전용 레인지로 소개(L-F §7-C) · PAA «Tư thế straddle là gì?» 제외.
- 🔴 L-F §7-C 처방: **적용 규칙을 먼저 선언**(SB $1 · BB $2 · UTG straddle $4 = EN L53 «standard $1/$2 game where UTG straddles to $4» — 이미 EN 구조) · 유형 4종을 같은 규칙처럼 묶지 않는다(EN 표 + L93 ⚠️ 유지).

### 키워드 (실측 · 재조사 안 함)
| 검색어 | 월(VN) | 자리 |
|---|---:|---|
| straddle poker là gì · straddle poker | 30 · 30 | seoTitle·H1·tags·H2 #2 |
| straddle poker rules · meaning · definition · term | 10 ×4 | tags · H2 #3 · H2 #2 직답 |
| straddle là gì trong poker(AC 1위) · straddle poker explained(AC) | — | tags · FAQ 1 · H2 #3 |
| PAA Straddle nghĩa là gì? · related Straddling là gì | — | FAQ 1(포커 문맥) · H2 #7 직답 |
| 🔴 버림 | | straddle là gì 320 · Tư thế straddle · long/short straddle(금융) |

### 현지 SERP (L-F §3-A ⑥ · §4-I · §11-2)
- «straddle là gì» = Cambridge·soha 사전 · 금융 옵션(coin98 · bybit · vietnambiz · fibo) · reddit r/poker 1. «straddle poker là gì» 1페이지 = reddit 3 · wikipoker(«Tiếp cận pot có straddle» — UTG/Button straddle · preflop SPR 1.000/15 ≈ 66,7 ✓) · help.ggpoker · natural8 · wptglobal · 앱 · voz · facebook — **straddle 해설 제목 0** → 첫 vi 정면 해설.
- EN 원문: PokerNews(정의·2배·순서) · Upswing(버튼 straddle 시작 위치 = 하우스 룰 · 300/3 = 100 BB · straddle 6 기준 50 ✓).
- **우리가 더 줄 것 3가지**: ① 좌석별 액션 순서 steps 5행(규칙 선언 → UTG+1 먼저 → straddler 마지막) ② 유형 5행 표 + «preflop only» 함정 ③ -EV 판정 3이유(GTO Wizard 인용 · 유효 깊이 100 BB → 50).

### 확정 카피 (Fable 서브 → Opus 재측정)
**title (H1)** (70): Straddle poker là gì? Luật, các kiểu straddle và có nên straddle không

**seoTitle** (49): Ném $4 trước khi chia bài — Straddle poker là gì?

**desc** (144): UTG ném $4 trước khi chia bài — tôi tưởng đó là bet của người giàu. Straddle poker là gì, luật, các kiểu straddle, ai act trước và có lời không.

**tldr** (평문):
Straddle là một blind tự nguyện — thường gấp đôi big blind — đặt trước khi bài được chia. Đổi lại, người straddle được act cuối cùng ở preflop và có quyền raise, còn stakes của ván coi như tăng gấp đôi. Trong gần như mọi trường hợp đây là nước đi -EV, và ngoài cash game thì hầu như không nơi nào cho phép.

**tags** (8): ["straddle poker là gì", "straddle poker", "straddle poker rules", "straddle poker meaning", "straddle là gì trong poker", "UTG straddle", "Mississippi straddle", "sleeper straddle"]

**H2 세트**:
1. ### Tóm tắt nhanh
2. ## Straddle trong poker là gì? ← What Is a Straddle in Poker?
3. ## Straddle vận hành thế nào: ai act trước, ai act cuối? ← How a Straddle Works
4. ## Có những kiểu straddle nào: UTG, Mississippi, button và sleeper? ← Types of Straddle
5. ## Straddle bao nhiêu tiền? ← How Much Is a Straddle?
6. ## Giải đấu có cho straddle không? ← Is Straddling Allowed in Tournaments?
7. ## Straddle có lời không — bạn có nên straddle? ← Is Straddling Profitable?
8. ## Câu hỏi thường gặp · ## Những điều cần nhớ · ## Bài viết liên quan
(내용 H2 6/6 질문형)

**FAQ** (9 = EN):
1. Straddle nghĩa là gì trong poker? · 2. Straddle thường là bao nhiêu? · 3. Có straddle thì ai act trước? · 4. Ai được phép straddle? · 5. Straddle có tính là raise không? · 6. Mississippi straddle là gì? · 7. Sleeper straddle là gì? · 8. Giải đấu có cho straddle không? · 9. Straddle có lời không?

**흡수**: straddle poker là gì · straddle poker → seoTitle·H1·tags·H2 #2 / rules·meaning·definition·term → tags·H2 #3·#2 / straddle là gì trong poker(AC) → tags·FAQ 1 / PAA → FAQ 1 / explained → H2 #3 / straddle là gì 320 → 0.

**손본 자리**: Fable 원안 그대로(수정 0). 길이 한도 안(seoTitle 49 · desc 144 · H1 70). «act» 동사 = 베트남 포커 구어 차용(코퍼스 «act trước/act cuối») — 산문에서 «hành động» 병기 1회.

### §13 자리 (EN 축어)
L19 …$1/$2 table… tossed out $4 before the cards came… · L28 2× BB | Standard straddle size
L38 …In a $1/$2 game the under-the-gun player (immediately left of the big blind) can drop $4 "on the straddle," and the game instantly plays like a $1/$2/$4 table for that hand.
L51 ![Preflop action order with a $4 UTG straddle over $1/$2 blinds — UTG+1 acts first, the straddler acts last, and the minimum raise doubles to $8](…)
L56 UTG posts the straddle | … $4 (2× the $2 big blind) … · L58 … Everyone must call $4 (not $2) … the minimum raise is now $8, double the straddle… · L59 … facing the $4 price
L63 …for a **UTG straddle, the last-action privilege is preflop only.** … the small blind acts first…
L77–81 표 5행(UTG · Mississippi · Button · Sleeper · Re-straddle — 열 값 그대로) · L85 *A Mississippi straddle is last after the flop only when it is posted ==on the button==…*
L91 …($4 → $8 → $16)… · L99 **exactly 2× the big blind** — $4 in a $1/$2 game, $10 in a $2/$5 game. · L104 …$4, then $8, then $16…
L122 GTO Wizard … "a massive disadvantage" … "still almost always a money-losing proposition."
L125 🎯 … at $1/$2 a $200 stack is 100 big blinds, but with a $4 straddle on, the same stack plays like 50 · L126 📉 … (UTG straddles to 2bb), the button opens **fewer** hands — around 15–20% fewer — not more · L127 💸 … until the cap is reached…
L153 …2× the big blind — $4 in a $1/$2 game… ($4, $8, $16, and so on). · L188 …==from the button==…

### 경험담 자리
L19 The first time someone straddled at my $1/$2 table, I had no idea why the guy under the gun tossed out $4 before the cards came — and why the dealer suddenly started the action one seat further along. I called it "the rich-guy bet" for about a month… → «$1/$2» · «$4» · «một tháng» 축어 · 장소 없음.

### 하지 말 것
- 표 5행(L77–81)·각주(L85)·⚠️(L93) = 하우스 룰 단서 그대로 — 유형을 한 규칙으로 뭉치지 마라.
- GTO Wizard 인용·링크·«15–20% fewer» = EN 축어(재현 주장 금지 — EN이 인용으로 쓴다 · L-F §6-B).
- blind 정의는 L45 링크 1문장 위임 — blind-meaning 내용 복제 금지. «option»은 «quyền raise sau cùng (option)»으로 — straddle의 이름으로 쓰지 마라.
- «-EV» 그대로(«EV âm» 병기 1회 허용).

---

## 레인 A 산출 요약
- 브리프 = 이 파일 · 진행 파일 `docs/vi-lanes/gloss-진행.md` A ✅ · 신규 용어 표 등재 · 헤드 요청 3건.
- ▶ `/clear` → 「HARDEN.md 읽고 B 시작해」
