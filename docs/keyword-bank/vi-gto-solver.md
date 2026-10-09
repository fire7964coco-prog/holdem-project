# vi 솔버 랜딩 키워드 뱅크 — `/vi/solver` (✅ 랜딩 신설 2026-10-09 · §7 조준안대로 · 라벨 = `docs/solver-app-verbatim-vi-2026-10-09.md`)

> 2026-10-07 실측. 플레이북 `docs/solver-landing-playbook.md` §2의 3~6단계(볼륨·질문 → 코퍼스 → SERP → 뱅크).
> 도구 = **DataForSEO** `keywords_data/google_ads/search_volume/live`(location 2704 · vi · 146개) +
> `serp/google/autocomplete/live/advanced`(2704 · vi · chrome · 시드 25) + `serp/google/organic/live/advanced`(2704 · vi · desktop · depth 30 · 11쿼리) +
> **라쿠 `search-volume-history`**(Vietnamese · Vietnam · 48개월 · requestId 1299804 · 39개) +
> **아스트라**(`codex exec gpt-6-astra` read-only · 상위 vi 페이지 원문 정독 — §5).
> 🟢 **두 벤더 볼륨 일치 — 양쪽에 숫자가 있는 키워드 전부**: `poker` 27,100 · `gto wizard` 880 · `gto poker` 170 · `gto là gì` 140 · `range poker` 70 · `poker bot` 70 · `chiến thuật poker` 50 · `poker equity calculator` 50 · `gto poker là gì` 30 · `piosolver` 30 · `poker solver` 20 · `gto solver` 10 · `solver poker` 10 …
> 원자료(스크래치 · 커밋 안 함): 자동완성 json · SERP json 11개 · 볼륨 out.json 2개.
> 🔴 앱 상태(10-07): 솔버 레포에 vi가 14번째 Locale로 들어가 있고 번역·4인 검수·최종 통일까지 커밋됨(`94fdd7e`) — **배포·통지(S-행) 전**. 랜딩 라벨은 배포본 축어로 다시 뜬다(플레이북 §4-8).

---

## 0. 한 줄 결론

**vi는 «솔버 수요»가 지금까지 연 로케일 중 가장 작고, 반대로 «베트남어로 직접 쓴 경쟁 글»도 거의 없다.**
① 헤드텀 = **`gto poker`/`poker gto` 170**(2024 고점 320 → 140~210 · yoy2y −35%). `poker solver` **20** · `solver poker` 10 · `gto solver` 10 — de(140)·tr보다도 작다.
② **베트남어 «솔버» 낱말이 없다.** `phần mềm giải poker`·`phần mềm gto poker`·`công cụ poker` = 볼륨 null(자동완성도 `phần mềm giải/học poker`·`công cụ poker` = 결과 없음). 검색자는 **영어 문자열 그대로** 친다 → 제목·H1의 검색어는 «GTO poker»·«solver poker»(라틴), 베트남어는 설명문에.
③ **SERP가 비어 있다**: `gto poker` top-10 = 앱스토어 6 · 스팸/리다이렉트 2 · 레딧 자동번역 1 · 영어 글 1 — **vi 직접 작성 글 0**. `solver poker`·`poker solver`도 vi 글 0(영어 글·레딧 자동번역). → 조준어가 작아도 **1페이지 진입 비용이 낮은 판**(ja «앱스토어가 실제 경쟁자» 판정과 동형 — 우리 것도 도구 페이지라 의도는 맞는다).
④ **오염어 3종**: `gto` 단독 = 애니 «GTO: Great Teacher Onizuka»·페라리 250 GTO·회사명 · `gto là gì` = 자동완성에 `đất odt/gto xe/gto trong kinh doanh` · `solver` 단독 = Excel Solver(AI 개요까지) · `equity là gì` 2,400 = 재무·브랜드 자본(포커 0/8).
⑤ 가장 큰 구조 문제는 키워드가 아니다 — **vi에는 랜딩이 링크할 자산이 없다**(§6). EN·tr 랜딩의 내부링크 목적지(GTO 예제 글 13편 · hand-chart · calculator · win-rate-quiz · strategy·equity·c-bet 글)가 vi에 **전부 0**.

---

## 1. 🔴 vi 고유 함정 (2026-10-07 실측)

### ① `gto` 단독 = 애니·자동차·회사 (es 과나후아토 · ja 드라마와 같은 유형)
SERP `gto`(2704): Netflix «GTO: Great Teacher Onizuka»(1위) · YouTube TV · 레딧 r/retroanime · 2game.vn·gamek.vn(애니 태그) · 페이스북 «Truyện GTO» · knowledge graph … 포커는 8위 gtogecko(vi 블로그) · 11위 Solver+ 앱스토어 · 27위 cornell 블로그뿐.
→ 🔴 **제목·H1·H2에서 `GTO`는 반드시 `poker`와 붙인다.**

### ② `gto là gì` 140 = 섞인 볼륨 — 포커 몫은 측정 불가
자동완성(축어): `gto là gì trong poker · gto wizard là gì · đất odt là đất gì · làm gto là gì · ký gto là gì · gto xe là gì · lệnh gto là gì · gto ở đức là gì · ký hiệu gto là gì · vải gto là vải gì · gto trong kinh doanh là gì` — 11개 중 포커 2.
앵커형 `gto là gì trong poker`·`gto trong poker là gì`·`gto trong poker` = 볼륨 null(두 벤더 다) · `gto poker là gì` **30**.
→ 140을 근거로 쓰지 마라. 단 **PAA에는 «GTO trong poker là gì?»가 `gto poker`·`gto poker là gì` 두 SERP에 다 뜬다** → 정의 H2/FAQ 1문항으로 받는다(볼륨 근거가 아니라 PAA 근거).

### ③ `solver` 단독 = Excel Solver (de·pt와 같다)
SERP `solver`: **AI 개요가 «Excel Solver là một công cụ bổ sung (Add-in) trong Microsoft Excel…»** · Solver AI Math 앱 · glosbe 사전 · Microsoft Solver Free · 영상 3개 전부 Excel. 포커 0/30.
→ `Solver`는 언제나 `poker`/`GTO`와 붙인다.

### ④ `equity là gì` 2,400 · `ev là gì` 880 · `equity` 5,400 = 포커가 아니다
`equity là gì` top-8 = wikinvest «Vốn chủ sở hữu (equity)» · azfin · brand equity 4건 · 사전 2건. PAA 4문항 전부 재무(«Equity trong kinh tế là gì?»…).
포커 앵커형: `equity poker` 30 · `poker equity calculator` 50 · `cách tính equity trong poker` 10 · `poker equity là gì` null.
→ 랜딩 FAQ에서 equity를 설명해도 **«equity là gì»를 조준 키워드로 세지 마라**([[keyword-volume-order-of-magnitude-trap]]).

### ⑤ 금지 축 — 실전 보조·실머니
자동완성에 그대로 올라온다(축어): `phần mềm hỗ trợ chơi poker`(10) · `ứng dụng hỗ trợ chơi poker` · `ứng dụng chơi poker tiền thật` · `phần mềm đánh poker` · `poker bot` 70(2026-03 단월 260 스파이크) · `gto poker bot` 10 · `rta poker` 10.
→ **어떤 각도로도 조준하지 않는다.** 랜딩 FAQ 한 문항으로 «공부 도구이고, 게임 도중 실시간 사용은 포커 룸 약관이 금지한다»(tr 판단 ③과 같은 문형 · 룸 이름·추천 없이). 베트남 도박 합법성 축은 열지 않는다(`settled-decisions` · 메모리 legality-ban-scope).

### ⑥ «게임» 의도
`poker simulator` 40 · `poker online miễn phí` 10 · `ứng dụng chơi poker` — 무료 게임 의도(de `simulator`와 같은 함정). 조준 금지.

---

## 2. 볼륨표 (Vietnam · DFS ↔ 라쿠 48개월)

### 조준 후보

| 키워드 | 월 | 추세(라쿠 월별) | 메모 |
|---|---:|---|---|
| **`gto poker` / `poker gto`** | **170** | 2024-03~10 고점 260~320 → 2025~26 110~210 | 🎯 **1순위 — 제목 편입.** 오염 없음(앵커 포함형) |
| **`range poker` / `poker range`** | **70** | 2023 140~260 → 2026 50~110 · yoy3y −50% | 🎯 **포스트플랍 한정**(프리플랍 차트 축은 vi에 아직 주인 없음 — §6) |
| `open range` | 70 | | ⚠ 프리플랍 오픈 레인지 의도 — 랜딩이 받을 축 아님(차트 쪽) |
| `flop turn river` | 50 | 2024-02 170 고점 | 🎯 2차축 — 단 vi `holdem-game-order` tags에 `preflop flop turn river`가 있다(§4) |
| `poker equity calculator` | 50 | 하강(−31% 12m) | ⚠ 계산기 의도 — vi에 계산기 없음. 앱 내 Equity 탭 언급으로만 |
| `gto poker là gì` | 30 | 2024 고점 110~210 → 20~40 | 🎯 정의 FAQ(PAA 근거와 합침) |
| `equity poker` | 30 | | 본문 흡수 |
| `piosolver` | 30 | | 브랜드 — 비교 문단에서 이름만(설치형 대비) |
| `c bet là gì` | 30 | | ⚠ c-bet 글 축(vi 없음) — 랜딩은 FAQ 링크 대상 없음 |
| **`poker solver`** | **20** | 2023 30~70 → 10~20 · −45% 12m | 🎯 어순 정본(대 `solver poker` 10) — de와 같은 방향 |
| `gto preflop` · `preflop chart` | 20 · 20 | | 프리플랍 차트 의도 |
| `ev poker` · `gto+` | 20 · 20 | | |
| `cách chơi poker giỏi` | 20 | | PAA «Làm cách nào để chơi poker giỏi?»와 짝 — 전략 글 축(vi 없음) |
| `solver poker` · `gto solver` · `solver poker free` · `poker solver free` · `gto poker free` · `gto solver free` · `solver poker là gì` · `poker trainer` · `gto trainer` · `poker trainer free` · `phần mềm poker` · `phần mềm tính xác suất poker` · `postflop` · `exploit poker` · `gto chart` · `gto poker solver` · `gto poker trainer` · `gto poker app` · `poker solver free online` · `online poker solver` · `solver poker online` · `gto solver online` | 10 | | 롱테일 묶음 — H2·FAQ가 흡수([[low-volume-longtail-aggregation]]) |

### 제외

| 키워드 | 월 | 왜 |
|---|---:|---|
| `poker` · `texas holdem` | 27,100 · 1,300 | 규칙 필라 축(`texas-holdem-rules-for-beginners`) — 랜딩 무관 |
| `equity` · `equity là gì` · `ev là gì` | 5,400 · 2,400 · 880 | 재무 의도(§1-④) |
| `gto wizard` (+ `price` 20 · `free`·`app`·`trainer` 10) | 880 | 브랜드 — SERP = gtowizard.com 다국어 공식(1·2위)·영상·자사 서비스. 이름 언급만(비교·우열 수치 금지) |
| `gto là gì` | 140 | 오염(§1-②) |
| `poker bot` · `rta poker` · `phần mềm hỗ trợ chơi poker` | 70 · 10 · 10 | 금지 축(§1-⑤) |
| `poker simulator` · `poker online miễn phí` | 40 · 10 | 게임 의도(§1-⑥) |
| `chiến thuật poker` | 50 | 전략 글 축 — 하강 중(−55% 12m). vi에 주인 없음 → 랜딩이 가져가지 않는다(나중 vi strategy 글 몫) |
| `học poker` · `khóa học poker` | 30 · 30 | 강의·코스 의도(SERP = 레딧 자동번역 7 · pokervietnam.net «khoá học») |
| null 확인(두 벤더): `phần mềm giải poker` · `phần mềm gto poker` · `công cụ poker` · `range poker là gì` · `gto trong poker là gì` · `solver poker miễn phí` · `gto wizard miễn phí` · `phần mềm poker miễn phí` · `range phân cực` · `range tuyến tính` · `phạm vi bài poker` · `luyện tập poker` · `app học poker` · `học gto poker` | — | 베트남어 조어는 검색어가 아니다(§0-②). 단 볼륨 0 ≠ 수요 0 — 산문에서 자연스럽게 쓴다 |

---

## 3. 자동완성 (Google VN · 축어 · 시드 25)

- `gto poker` → là gì · free · meaning · chart · solver · trainer · simplified · charts · book · strategy · calculator · app · bot · wizard · ranges
- `poker gto` → chart · solver · trainer · meaning · wizard · charts · calculator · solver free · practice · book · free · ranges · app · strategy · quiz
- `gto trong poker` → là gì · gto poker · gto poker là gì
- `solver poker` → free · online solver poker · app · gto · là gì · preflop · online free · open source · ai · api · android · gratuit · gratis · gratuito · en ligne
- `poker solver` → free · solvers · online solver poker · free online · app · github · ai · api · software · gto · open source · preflop · multiway · apk · android
- `gto solver` → poker · online · poker free · github · api · preflop · omaha · open source · reddit · app · ai · price · practice · python · mac
- `phần mềm poker` → icm · tính · gto · tính icm · tính xác suất · **hỗ trợ chơi**(금지) · **đánh**(금지)
- `range poker` → 6 max · pdf · calculator · preflop · 8 max · mtt · position · 9 max · utg · 6 max cash game · spin and go · online · gto poker range · 3 max · bb
- `poker range` → ranges · chart · calculator · builder · by position · chart by position · range poker · equity calculator · trainer · table · explained · tool · preflop · chart calculator · ranges preflop
- `bảng range poker` → bảng rank poker · range poker là gì · range poker · poker range open
- `chiến thuật poker` → tournament · đánh tour · cash game · trong poker · choi poker tournament
- `học poker` → chuyên nghiệp · nâng cao · cơ bản · học chơi poker · khoá học · **học gto poker** · sách · app · học dealer · học chia bài · tài liệu
- `poker trainer` → free · app · online free · apk · gto · app free · postflop · online · app reddit · reddit · se · ai · game · simulator · deutsch
- `luyện poker` → luyện tập poker · luyện poker face · luyện chơi poker · app luyện poker
- `gto wizard` → app · price · poker · blog · free · gto wizards · download · preflop charts · ai · prix · api · trainer · preflop · price per month · discord
- `tính equity poker` → app tính · cách tính equity trong poker · cách tính equity poker · poker equity là gì · equity poker online
- `tính xác suất poker` → app tính · cách tính · phần mềm tính · online · cách tính xác suất trong poker
- `ứng dụng poker` → ứng dụng x poker · **chơi poker tiền thật**(금지) · chơi poker · **hỗ trợ chơi poker**(금지)
- `app học poker` → phần mềm học poker · học poker online · app luyện poker
- 결과 없음(40102): `phần mềm giải poker` · `phần mềm học poker` · `công cụ poker`
- 🪶 관찰: 솔버 축 자동완성이 **영어 꼬리(free·app·online·preflop)**로 채워진다 — 검색자가 영어 문자열로 묻는다는 §0-② 판정과 같은 신호. «free»가 `gto poker`·`solver poker`·`poker solver`·`gto solver` 넷 다 상위 2~3위.

---

## 4. 카니발 — vi 8편 전수 grep (2026-10-07)

| 축 | 소유자 | 랜딩의 처리 |
|---|---|---|
| `gto poker`·`poker solver`·`range poker`·`gto poker là gì`·`poker trainer` | 🟢 **소유자 0** — 8편 seoTitle·title·tags 어디에도 없음(본문 `range` 언급 = game-order 1 · tournament-vs-cash 2) | **랜딩이 가져간다** |
| `preflop flop turn river` | `vi/holdem-game-order` tags | 랜딩은 «flop turn river» 단독형을 산문에만 · 순서 설명은 그 글 링크 |
| 족보·규칙 축 | hand-rankings · texas-holdem-rules-for-beginners | 무관 — 초심자 동선 링크 대상 |

---

## 5. SERP 실측 (google VN · desktop · 2026-10-07)

### 5-A. top-10 유형 집계 (직접 분류 · 스크립트 + 수동 정정 2건)

| 쿼리 | 앱스토어 | 레딧 자동번역(`?tl=vi`) | 영어·외국어 글 | 스팸/리다이렉트 | 영상 | **vi 직접 작성 글** |
|---|---:|---:|---:|---:|---:|---|
| `gto poker` | 6 | 1 | 1 | 2 | 0 | **0** |
| `gto poker là gì` | 0 | 5 | 3 | 0 | 1 | **0**(4위 wikipoker는 «GTD Poker» 글 — 오매칭) |
| `solver poker` | 1 | 2 | 6 | 0 | 1 | **0** |
| `poker solver` | 1 | 0 | 8 | 0 | 1 | **0** |
| `phần mềm gto poker` | 5 | 2 | 1 | 1 | 0 | 1(2위 gtogecko.com/vi 비교 블로그) · 19위 natural8/vi |
| `range poker` | 2 | 2 | 2 | 2 | 0 | 2(1위 wikipoker «Range phân cực và Range tuyến tính» · 2위 pokerqz.com/vi 용어집) |
| `học poker` | 2 | 7 | 0 | 0 | 0 | 1(3위 pokervietnam.net «Học Poker từ đầu») |

- **스팸/기생 SEO가 상위 10에 든다**: `pay.ptithcm.edu.vn`(5위 «gto poker là gì - Apps on Google Play») · `mgisc.com`(8위) · `rcgw.go.ke` · 해킹된 `*.gov.vn` 페이지. → 상위가 얇다는 직접 증거.
- **앱스토어 vi 리스팅이 GTO 축의 실제 경쟁자**: POKER Q'z(1위) · Red Chip Ranges · Poker Academy · NTPoker «GTO Huấn luyện Poker» · GTO Ranges+ · Preflop AI · GT_O · GTO Gecko · **«PreFlop GTO: Luyện Poker»** · **«PostFlop Học Poker Sau Flop»**(`học poker` 5·7위) — vi 제목을 단 앱이 늘고 있다.
- **vi 현지화한 경쟁 사이트**: pokerqz.com/vi(일본 CLOVIZ · 용어집이 `range poker` 2위 · `poker solver` 14위) · gtogecko.com/vi(블로그 · `phần mềm gto poker` 2위 · `gto` 8위 · «GTO Wizard 2026 리뷰») · natural8.com/vi · ggpoker.com/vi(«10 Công Cụ Poker Cần Thiết» · «Phạm vi Poker»).

### 5-B. PAA·관련검색 축어

- `gto poker` PAA: **GTO trong poker là gì?** / GTO là gì?
- `gto poker là gì` PAA: GTO là gì? / Chia bài poker gọi là gì? / **GTO trong poker là gì?** / **Làm cách nào để chơi poker giỏi?**
- `solver poker` 관련검색: GTO solver poker / Stud solver poker / Postflop solver / **Poker solver free** / **Online poker solver free** / GTO Wizard / GTO+ / Poker solver preflop
- `gto wizard` 관련검색: **Gto wizard là gì** / GTO Wizard app / download / prix / price / Poker GTO / **Poker GTO solver free** / GTO preflop · AI 개요 있음(«GTO Wizard là ứng dụng và công cụ hàng đầu…»)
- `gto poker`·`solver poker`·`poker solver`에는 AI 개요 없음 · `solver`·`equity là gì`·`gto wizard`에는 있음.

### 5-C. 상위 vi 페이지 원문 (아스트라 정독 → 본체 판정)

> 아스트라 보고 = 스크래치 `vi/astra/REPORT.md`(29KB · A~J 열람 9/10 · K 용례 6 · L 정의 4). 헤딩 전체 축어는 아스트라가 인용 한도로 미전재 →
> **본체가 4개 페이지를 직접 받아 헤딩·핵심 문장을 재확인했다**(✅ 표시). 나머지는 «아스트라 보고 · 본체 미확인».

**① 경쟁 페이지 구조** (아스트라 실측 · 공백 토큰 수)

| 페이지 | 주체 | 분량 | 구조 | 작성 |
|---|---|---:|---|---|
| natural8.com/vi «Solver Poker là gì và nó hoạt động như thế nào?» ✅ | 포커룸 블로그 | ~2,400 | H2 5 · H3 8 · FAQ 없음 | 영문판 대응 — 현지 원작 불확실 |
| gtogecko.com/vi «Đánh giá GTO Wizard 2026…» ✅ | 솔버 판매사(경쟁 제품 리뷰) | ~3,500 | H2 11 · FAQ 5(«GTO Wizard có bản miễn phí không?» · «…là solver hay trainer?» · «…có chạy trên iPhone không?») · 표 2 | 영문판 대응 |
| gtogecko.com/vi «GTO Gecko vs GTO Wizard» | 같음 | ~3,600 | H2 7 · H3 18 · FAQ 6 · 표 3 | 영문판 대응 |
| pokerqz.com/vi 용어집 Solver ✅ · Range bài | CLOViZ(일본) 학습 앱 | ~300 | H2 1 · H3 4(Định nghĩa cơ bản · Tình huống cụ thể · Những điểm quan trọng · Ví dụ…) + 앱 CTA | 다국어 용어집 |
| wikipoker.net «Range phân cực và Range tuyến tính» | vi 포커 매체 | ~1,900 | H2 6 · range 매트릭스 이미지 | 끝에 «Nguồn: Upswing Poker» — 번역 편집물 |
| wikipoker.net «GTO là gì?…» ✅ | 같음 | | H2 «Chiến thuật GTO là gì?» · «Khác biệt giữa lối chơi Exploit và lối chơi GTO là gì?» · «Các ưu và nhược điểm…» | |
| ggpoker.com/vi «10 Công Cụ Poker…» · «Phạm vi Poker…» | 포커룸 블로그 | ~1,200 | H2 12 / 6 | 영문판 대응 |
| facebook Quân Vũ «POKER SOLVER: CÂY KIẾM BÁU…» | 개인 코치(공유구독·코칭 판매) | ~760 | 소제목 없음 | 1인칭 — 현지 직접 작성 정황 |

→ **공통 강점**(우리가 갖춰야 할 것): «solver가 무엇이고 어떻게 도는가»(입력 = 양측 range·보드·사이즈 · 결과 = 빈도) · 한계(멀티웨이·입력 가정) · 학습용이지 실전용 아님 · GTO vs exploit 대비.
→ **공통 약점**(우리가 가를 것): ① **직접 돌려 볼 수 있는 무료 도구가 없다** — 글은 설명뿐, 도구는 구독형(GTO Wizard $49~279/월 ✅ · «Gói miễn phí … chỉ dùng được như bản demo» ✅)·앱 설치형 ② **구체 스팟 수치 0**(어느 글도 보드 하나를 풀어 빈도를 보여 주지 않는다) ③ 영문 번역 편집물이 대부분 — 현지 경험 문장이 드물다 ④ 아래 개념 오류.

**② 경쟁 페이지 사실 오류** (§13 · 우리 랜딩이 같은 함정을 밟지 않도록)
- wikipoker «GTO là gì?» ✅: «GTO là viết tắt của **Game Theory Optimize**» — 오기(정답 Optimal). vi 상위 정의 글이 약어 풀이부터 틀렸다.
- natural8/vi «Các hạn chế khác» ✅(부분): «Giả định thông tin hoàn hảo — … giả định tất cả người chơi đều có quyền truy cập vào kiến thức hoàn hảo về trò chơi …» — 솔버가 «완전정보»를 가정한다는 서술(아스트라: 이어지는 문장이 상대 실제 홀카드까지 안다고 씀). 솔버 입력은 **양측 range**이지 실제 패가 아니다 → 우리 FAQ «솔버는 상대 패를 맞히나?»로 정면 정정할 자리.
- ggpoker/vi «Phạm vi Poker» H3 «Ví Dụ 1: Check-Raise Bất Ngờ»(아스트라 · 본체 미확인): 먼저 체크한 행동 없이 벳·콜·콜 뒤 레이즈를 «check-raise»로 부름.
- wikipoker range 글(아스트라 · 불확실): 선형 range에 «range condensed»를 동의어로 병기 — 확정 오류로 올리지 않음.

**③ «무료·브라우저·무설치·무가입» 선점 여부** (아스트라 판독 + 본체 확인 2건)
- gtogecko: «miễn phí»(제한 플랜) · «Chỉ trình duyệt, chỉ online» ✅ — 단 경쟁 제품 GTO Wizard의 **약점**으로 쓴 H3(«브라우저뿐, 온라인뿐 · 네이티브 앱·오프라인 없음»).
- pokerqz: «Bắt đầu miễn phí» · «Bắt đầu trên web» ✅ — 앱 학습(퀴즈) 시작 CTA이지 솔버 계산 무료가 아님.
- natural8·ggpoker·wikipoker·Quân Vũ: 무료 솔버 주장 없음.
→ **«설치 없음 + 가입 없음 + 무료로 직접 계산»을 함께 내세운 vi 페이지 0.** 훅 후보(§7) 유지. ⚠ «trình duyệt»를 «오프라인 안 됨»으로 읽히지 않게 — 우리 앱은 PWA·오프라인 학습이 된다(사실 시트 확인 후 문구).

**④ RTA(게임 중 사용) 문형 — 현지 축어**
- pokerqz ✅: «Việc sử dụng solver thường bị cấm trong lúc chơi thực tế, và chúng chủ yếu phù hợp cho việc học tập và review»
- natural8 ✅: «hầu hết các trang web đánh bạc trực tuyến coi đó là gian lận»
- ggpoker(아스트라): «không thể sử dụng chúng khi chơi»
→ 우리 FAQ도 같은 결(«공부·복기용, 게임 중 실시간 사용은 룸 약관 위반»). «đánh bạc» 같은 도박 어휘는 쓰지 않는다(합법성 축 차단).

**⑤ 현지 «solver» 호칭 (K · 아스트라)**
- 직접 작성 정황 있는 용례 3건 전부 **영어 차용어 «Solver/solver» 그대로**: Quân Vũ «Solver là một cỗ máy kỳ diệu…» · «Tư duy hiệu quả nhất mà tôi học được từ Solver là:» · Jul Trần 독자 Q&A «anh đánh giá sao về Rocket Solver ạ?»
- propokervn.com «Học poker bằng solver»(캡션 «solver poker») · pokervietnam.net «bằng "solver", phần mềm chạy hàng triệu ván giả lập» — 따옴표 + 베트남어 풀이 병기 패턴.
- «phần mềm giải poker»·«công cụ GTO»는 현지 원작 용례 미확보(없다는 뜻은 아님) — 볼륨 null(§2)과 같은 방향.
→ **산문 호칭 = «solver»(첫 등장에 «phần mềm tính chiến lược GTO» 류 풀이 1회)**. 볼륨·용례 둘 다 같은 결론.

**⑥ «GTO là gì» 현지 정의 (L · 아스트라)** — 공통 요지 «tối ưu theo lý thuyết trò chơi» + «cách chơi cân bằng … đối thủ không thể tận dụng điểm yếu» + «không thể bị khai thác lâu dài». 현지 직접 작성 확인 1편(Jul Trần · 게임 예제로 균형 vs exploit). → 정의 H2는 «Lý thuyết trò chơi tối ưu (Game Theory Optimal)» + 균형·착취 불가 + **도구 관점**(«solver가 그 균형을 스팟마다 계산한다»)으로 좁힌다.

---

## 6. 🔴 구조 문제 — 랜딩이 링크할 vi 자산이 없다

| EN 랜딩 링크 목적지 | vi |
|---|---|
| GTO 예제 글 13편(시리즈 · `item.slug` 동적 링크) | ❌ 0편 — `settled-decisions` §1-E «ar·vi·tr 시리즈는 사장님 판단 전 착수 금지»(tr은 4편 열림) |
| `/hand-chart` ×4 | ❌ (`docs/tools-locale-rollout-plan.md` — ar·vi·tr 없음) |
| `/calculator` ×2 | ❌ (같은 계획 §3 회차 4 «(선택) 계산기 ar·vi» ⏸) |
| `/win-rate-quiz` ×2 | ❌ (ko·en뿐) |
| `holdem-strategy` · `holdem-equity` · `holdem-continuation-bet` | ❌ vi 없음 |

→ 지금 vi 랜딩을 열면 내부링크는 **앱 진입 + vi 규칙 글 8편**뿐이다(초심자 동선: rules-for-beginners · hand-rankings · game-order · betting-actions). EN 구조 동일 원칙([[translation-link-structure-equals-en]])을 못 지킨다.
→ 결정 필요(사장님): ⓐ 링크 빈자리를 안고 랜딩만 먼저(hi 선례 — hi도 «독립 HI hand-chart/calculator·13개 해설 글 없음»으로 열었다) ⓑ 계산기·핸드차트 vi를 먼저(공용 컴포넌트 + 사전 · 계획 회차 4) ⓒ GTO 예제 글 vi 일부 먼저(§1-E 해제 필요).

---

## 7. 조준 확정안 (랜딩 작성 시 · 앱 vi 배포 후)

- **1차**: `gto poker`/`poker gto`(170) — 제목·H1 · `range poker`(70) — H2, **플랍 이후 한정** · `poker solver`(20) — 제목 보조·어순 정본
- **2차**: `gto poker là gì`(30) + PAA «GTO trong poker là gì?» — 정의 H2/FAQ(도구 관점으로 좁힘) · `flop turn river`(50) · `equity poker`(30)/`poker equity calculator`(50) — 앱 Equity 탭 문단 · `solver poker free`·`poker solver free`·`online poker solver free`(관련검색) — 무료·브라우저 문단 · `poker trainer`·`gto trainer`(10) — 트레이너 절 · `piosolver`·`gto wizard`(이름만 · 설치형/구독형과의 방식 차이 · 우열·가격 수치 금지)
- **FAQ 방어 문항**: 실시간 사용(RTA) 금지 1문항 · «화면이 베트남어인가»(앱 vi 배포 후 축어로) · 계정 동기화 범위(플레이북 머리 «FAQ 동기화 보완»)
- **표기**: 검색어형(라틴 «GTO poker»·«solver poker»)은 제목·H2와 «같은 것을 부르는 여러 이름» 문단에 축어로 · 산문은 베트남어 + 용어 병기(`docs/translation-terms-vi.md`: bạn체 · 숫자 1.326 / 0,35% · check 그대로) · 라벨은 앱 vi 축어가 정본
- **훅 후보**: «miễn phí · ngay trên trình duyệt · không cần cài đặt · không cần đăng ký» — 경쟁자(앱스토어·설치형·구독형)가 못 내세우는 조합. ⚠ 경쟁 페이지가 이미 무엇을 내세우는지는 §5-C(아스트라)로 확정
- **제외**: §2 제외표 전부

---

## 8. 커버리지

| 단계 | 상태 |
|---|---|
| 볼륨(DFS 146 · 라쿠 39 교차) | ✅ |
| 자동완성 시드 25 | ✅(결과 없음 3 = 40102) |
| SERP top-30 + PAA 11쿼리 | ✅(`gto`·`solver`·`equity là gì`·`gto wizard`·`học poker`는 오염·의도 판정용) |
| 상위 페이지 원문 | 🟡 아스트라 9/10 열람 · 본체 4편 직접 재확인 · 헤딩 전체 축어는 본체 확인 4편만 |
| 자사 코퍼스 grep | ✅ vi 8편 |
| 앱 `?lang=vi` 라이브 대조 | ✅ 2026-10-09(S-049 라이브 당일 · Playwright 2회 · `docs/solver-app-verbatim-vi-2026-10-09.md` · presets titleVi/categoryVi 일치) |
| 랜딩 작성·검수 | ✅ 2026-10-09 — 3파일 + 등록 6곳 + hreflang 14세트 · 렌즈 4종 + 아스트라 · 경위 WORKLOG 10-09 (5). 🪶 §6 구조 문제는 hi 선례 ⓐ(링크 빈자리 안고 랜딩 먼저)로 열었다 — GTO 13편(🅶)·strategy·equity·c-bet이 vi로 발행되면 SPOT_GROUPS `slug`·결과 화면 문단 링크를 채운다 |
| 라쿠 발굴계 도구 | ✗ 의도적 — Japan 고정(`rakko-playbook` §8) |
