# L-G GTO 13 — vi SERP 조사·처방 (2026-10-08 · vi 클러스터 0-2)

> 규격 = `00-brief.md` «레인마다 할 일» 0~8. 대상 = `vi-cluster-plan.md` §1 🅶 13편(EN 마스터 `lib/posts-en/<slug>.ts` 대조) + `/vi/solver`(미작성) 경계.
> 측정: DataForSEO `tmp/vi/dfs.mjs`(location_code **2704** · language_code **vi** · 2026-10-08). 0-1에서 잰 볼륨(`vi-core-volumes.md` §2 🅶)과 솔버 축(`vi-gto-solver.md` — `gto poker` 170 · `range poker` 70 · `gto poker là gì` 30 · SERP·PAA)은 **다시 재지 않았다** — 여기 볼륨은 새 후보만. `-` = Google Ads 데이터 없음(≠ 수요 0).
> 원자료(gitignore · `tmp/vi/L-G/`): `ac*-out.json`(시드 116) · `vol*-out.json`(117개) · `serp*-out.json`·`serp*.txt`(34 SERP) · `page-*.txt`(원문 31편) · `wikipoker-urls.txt`(사이트맵 842) · `heads.mjs`.
> 🔴 §1-E: 13편은 «검색 유입 글»이 아니라 **솔버 증거 자료**다. 처방은 실측된 질문 표현이 있는 자리만 넣고, 남의 헤드텀은 빌리지 않는다. `gto poker`·`range poker`·`poker solver`의 주인은 `/vi/solver`(`vi-gto-solver.md` 승계).

---

## 0. 한 줄 결론

1. **수요는 전부 10~20이다.** 새 후보 117개 중 10을 넘는 건 `spr poker` 20 · `set poker` 30(🔴 칩 쇼핑) · `spr là gì` 110(🔴 포커 0/10) · `hồi mã thương` 390(🔴 무협·축구) · `thùng/flush trong poker là gì` 50/40(L-B)뿐. fr의 «주인 없는 실수요»(check raise 260 · spr poker 210)가 **vi에는 없다** → 0-3 재료는 «EN parity» 논리만 남는다(§8).
2. 🔴 **fr과 결정적으로 다른 점: vi 텍스트 경쟁자가 13편 스팟을 거의 1:1로 덮었다.** `wikipoker.net`(사이트맵 842편)에 donk · check-raise · A-cao/bài-cao/저보드 c-bet · mặt bài chập · board đồng chất · blind đối đầu blind · 3-bet pot c-bet · SPR · range phân cực · size bet lũy tiến · lợi thế nut/range가 전부 있다(§4-C). 대부분 Upswing·Pokercoaching·PeakGTO·Lucid **번역 편집물** — 수치는 스크린샷 이미지.
3. **그러나 영어 헤드 SERP 1페이지에 wikipoker가 드는 건 3곳뿐**(donk bet 1위 · check raise 4위 · nut advantage poker 5위). 나머지 헤드는 1페이지 전부 영어 원본 + `.gov.*` 기생 스팸 — vi 글 0.
4. **vi 질문 표현 = «영어 차용어 + là gì / trong poker»뿐**: `donk bet (poker) là gì` · `check raise là gì` · `check raise trong poker` · `spr poker là gì` · `spr trong poker là gì` · `range trong poker là gì` · `set trong poker` · `set poker là gì` · `over pair poker là gì` · `bet size trong poker` · `size bet là gì`. 베트남어 조어(`cược donk` · `lợi thế range` · `board đồng chất` · `mặt bài chập` · `kết cấu mặt bài` · `range phân cực`)는 **자동완성·볼륨 0** — 산문 표기 전용.
5. **PAA는 vi 로케일인데도 영어로 뜬다**: «What is a good check-raise percentage?» · «What is geometric bet sizing in poker?» · «What is a polarized range in poker?» · «What is the difference between nut advantage and range advantage in poker?» · «What does the term "wet board" mean in poker?» · «What is a monotone board in poker?» → FAQ는 이를 vi 질문형으로 옮긴다(§7).
6. **오염 3개**: `blind vs blind` 포커 **0/10** · `spr là gì` 0/10 · `set poker` 쇼핑 — 제목·태그 단독 사용 금지. **§13**: vi 1위 donk 글에 존재 불가 콤보 «7♣7♣»·스트레이트 아닌 «6♣3♣»(§4-D ①).

---

## 1. 오염 판정 (브리프 0단계 · SERP 상위 10 중 포커 결과 수 · 34 SERP)

| 헤드 | 볼륨 | 포커/전체 | 판정 | vi 직접 작성 글 · 메모 |
|---|---:|---|---|---|
| donk bet | 10 | 8/8 | 🟢 | **2** — 1위 wikipoker «Donk bet là gì? Khi nào nên dùng…» · 6위 natural8/vi «Cược Donk…» |
| donk bet là gì · donk bet poker | 10 · 10 | 8/10 · 10/10 | 🟢 | 0 — 1위 둘 다 reddit `?tl=vi` 자동번역(«Cược Donk là gì?») |
| check raise | 10 | 8/8 | 🟢 | 1 — 4위 wikipoker «Check-Raise trong Poker là gì?…» · PAA 영어 |
| check raise là gì | 10 | 6/9 | 🟡 섞임 | 0 — LinkedIn g88club(🔴 도박 홍보) · itqnaso «…Từ BetVisa»(🔴 기생) · 비포커 3(Python raise · «Raise a toast») |
| check raise poker · trong poker | 10 · `-` | 10/10 · 7/10 | 🟢 | 0(영어 · reddit `?tl=vi`) |
| c bet là gì (L-D 공유) | 30 | 5/6 | 🟡 | **0** — cbet.lt(🔴 베팅) · reddit `?tl=hr`·`?tl=fa` · 태국어 FB · 결과 6개뿐 |
| 3bet pot · 3 bet pot | 10 · 10 | 10/10 · 9/9 | 🟢(영어) | 0 · AIO 1 |
| **blind vs blind** | 10 | **0/10** | 🔴 **오염** | 장님 체스 영상팩 · kenh14 «Man Utd chiêu mộ Blind» · nature.com · AIO(비포커) |
| monotone board · flop monotone | `-`(poker형 10) | 6/9 · 10/10 | 🟡 · 🟢 | 0 — slideteam·pinterest 비포커 · `.cfd` 스팸 |
| spr poker | 20 | 8/8 | 🟢(얇음) | 0 — 1위 ulifestyle «Xso99 – SPR Poker là gì…»(🔴 도박 기생) · `.gov.*` 스팸 2 |
| **spr là gì** | 110 | **0/10** | 🔴 **오염** | 전략비축유 · SOLID · 플라즈몬 공명 · 금리 |
| spr poker là gì · spr trong poker là gì | 10 · `-` | 10/10 · 6/10 | 🟢 · 🟡 | 0 — reddit `?tl=vi` 10(SPR 무관) = **완전 빈 SERP** |
| paired board · bet sizing · polarized range · range/nut advantage · board texture · overbet · trips | 각 10 | 전부 ≥8 | 🟢(영어) | nut advantage poker 5위 wikipoker «Lợi thế Nut…» 외 vi 0 |
| bet size trong poker | `-` | 8/10 | 🟢 | wikipoker 태그 페이지 · Quora 스팸 |
| range trong poker (là gì) | `-` | 9/10 · 10/10 | 🟢 | 용어집형(studocu · firststep · ggpoker/vi · pokerqz/vi) + 프리플랍 차트 의도 → `/vi/hand-chart`·`/vi/solver` |
| **set poker** | 30 | **0/10** | 🔴 **함정** | FB «Set phỉnh Poker 200 chip…» · lazada · amazon(쇼핑) |
| set trong poker | `-` | 10/10 | 🟢 | **3** — wikipoker «hit set tươi» · natural8/vi «Cách chơi bộ ba…» 2편 |
| over pair poker là gì | `-` | 8/10 | 🟢 | 0(정의 글 없음) |
| (승계) gto poker · range poker | 170 · 70 | `vi-gto-solver.md` §5 | — | 재조사 안 함 |

추가 오염(자동완성·볼륨): `hồi mã thương` 390(무협·축구 — wikipoker check-raise H1 병기) · `mdf là gì`(합판) · `polarized là gì`(편광) · `sizing là gì`(CSS) · `board khô/ướt`(가전) · `range phân cực`(통계).

---

## 2. 새 후보 볼륨 (DFS search_volume · 2704 · vi · 0-1에 없던 것만 · 117개 · 전문 = `vol1/vol2.txt`)

| 검색어 | 월 | 비고 |
|---|---:|---|
| `hồi mã thương` | 390 | 🔴 오염(무협·축구) |
| `spr là gì` | 110 | 🔴 오염(포커 0/10) |
| `thùng trong poker là gì` · `flush trong poker là gì` | 50 · 40 | L-B 몫 |
| `set poker` | 30 | 🔴 함정(칩 세트 쇼핑) |
| `spr poker` · `pot trong poker là gì` | 20 · 20 | |
| 영어형 스팟어 43개(`donk bet poker` · `check raise poker` · `c bet poker là gì` · `cbet là gì` · `3 bet pot` · `monotone board poker` · `paired board poker` · `board texture poker` · `wet/dry board poker` · `spr poker là gì` · `range/nut advantage (poker)` · `polarized range (poker)` · `bet sizing poker` · `sizing poker` · `geometric bet sizing` · `overbet poker` · `trips poker` · `poker trips vs set` · `over pair (poker)` · `mdf poker` · `equity realization` · `backdoor flush draw` · `delay cbet` · `size bet (poker)` …) | 각 10 | 롱테일 — H2·FAQ 문구로만 |
| `blind vs blind poker` · `wet vs dry board poker` | 0 | |
| vi 질문형 28개(`donk bet poker là gì` · `check raise trong poker` · `spr trong poker là gì` · `range trong poker là gì` · `set trong poker` · `set poker là gì` · `over pair poker là gì` · `bet size trong poker` · `size bet là gì` · `3 bet pot là gì` …) | `-` | 자동완성에는 뜬다(§3) — 질문 표현 재료 |
| **베트남어 조어 전부**(`cược donk` · `mặt bài chập` · `mặt bài có đôi` · `board đồng chất` · `kết cấu mặt bài` · `blind đối đầu blind` · `lợi thế range/nut` · `range phân cực/tuyến tính` · `tần suất phòng ngự tối thiểu` · `phòng thủ big blind` · `flop a cao` …) | `-` | 🔴 검색어가 아니다 — 산문 표기(§4-E)로만 |

→ 0-1 결론(«검색 술어는 영어 차용어 + là gì») 재확인 · GTO 축 예외 0.

---

## 3. 자동완성 (DFS autocomplete · 2704 · vi · chrome · 시드 116 · 전문 = `tmp/vi/L-G/ac*-out.json`)

> 영어 꼬리(meaning · definition · strategy · reddit · que es …)·무관어는 생략. **베트남어 질문형은 굵게.**

| 축 | 자동완성(축어 발췌) | 결과 없음·무관 |
|---|---|---|
| donk | donk bet → **donk bet là gì** · donk bet poker · donk betting · turn · example / donk bet là gì → **donk bet poker là gì** · **donk bet la gi** / donk poker → term · slang · poker donk lead | `cược donk` · `cược donk là gì` · `cược donk poker` |
| check-raise | check raise → poker · meaning · **check raise poker queensland/brisbane · room · check raise.ch**(클럽 브랜드) / check raise là gì → **check raise trong poker** · check or raise / check raise poker → poker check raise size · check vs raise poker | `khi nào check raise` · `hồi mã thương poker` · 🔴 `hồi mã thương` → «đòn hồi mã thương» · 노래 · 축구 |
| c-bet(L-D) | c bet là gì → **c bet poker là gì** / c bet trong poker → **c bet trong poker là gì** / cbet poker → delay cbet poker · cbet sizing · frequency | 🔴 `cbet là gì` → «bet là gì trong bóng đá/slang» · `khi nào nên c bet` · `cược tiếp tục` |
| 3bet pot | 3bet pot / 3 bet pot → oop · ip · strategy · meaning · cbet in 3bet pots · **3 bet poker là gì** · **3 bet trong poker** | `pot 3 bet là gì` · `c bet trong 3 bet pot` |
| blind vs blind | 🔴 blind vs blind → «and deaf cane» · «photo lineup» · «double blind» · (poker · strategy) / blind vs blind poker → **blind poker là gì** · **blind trong poker là gì**(L-A) / small blind vs big blind → **small blind big blind là gì**(L-A) | `blind đối đầu blind` → «blind dắt blind» · `mù nhỏ và mù lớn` |
| 보드 텍스처 | monotone flop → **monotone flop odds** · probability of monotone flop / paired board → what is a paired board / board texture · wet board · dry board → wet vs dry · static · dynamic | `board đồng chất` · `board cùng chất` · `flop đồng chất` · `mặt bài chập`(→ «bài tập cơ mặt») · `mặt bài có đôi` · `kết cấu mặt bài` · `flop a cao` · `board khô/ướt`(가전) |
| 레인지·어드밴티지 | range poker là gì → **range trong poker là gì** / range advantage → vs nut advantage / polarized range → linear vs polarized · polarized 3bet range | `lợi thế range/nut` · `range phân cực (là gì)`(→ 통계·포토샵) · `range tuyến tính` · `phạm vi poker` |
| SPR·사이징 | spr poker → **spr poker là gì** · chart · calculator · formula / spr trong poker → **spr trong poker là gì** / sizing poker → **sizing trong poker** · geometric sizing poker / size bet là gì → **bet size là gì** · **bet size trong poker** / bet size là gì → bet size và stack ratio / overbet poker → turn · river · jam | 🔴 `spr là gì` → ngân hàng · lãi suất spr · spr 6m · `mdf là gì`(합판) · `polarized là gì`(편광) · `sizing là gì`(CSS) · `overbet là gì` |
| 트립스·셋 | trips poker → **poker trips vs set** · trips or set / set trong poker là gì → **set trong poker** · **set poker là gì** / overpair là gì → **over pair poker là gì** / sám cô poker → **sám cô trong poker**(L-B) | 🔴 `set poker` → amazon · chips · gucci · louis vuitton · `trips và set` → «trips là gì»(여행) |
| 와일드카드 | «poker * là gì»(flush · straddle · itm · 🔴 «poker là gì trong bóng đá») · «* trong poker là gì»(fold · thùng · flush · gtd · pot …) · «cách * trong poker»(raise · bluff · **tính ev** …) | GTO 스팟 0 — L-A·L-B·L-F 몫 |
| gto poker | `vi-gto-solver.md` §3과 동일 — 재기록 안 함 | |

---

## 4. SERP 상위 10 + PAA · 상위 글 원문

### 4-A. PAA·AIO·관련검색 축어 (34 SERP 중 PAA가 뜬 것 전부)

| 쿼리 | PAA(축어 · 순서대로) | 기타 |
|---|---|---|
| check raise | Why is it called the flop? · **What is a good check-raise percentage?** · How do I say "I raise" in poker? · What is check-call in poker? | 관련: Check raise bad etiquette · Check-raise bluff · 지식패널 |
| check raise poker | **Can you raise after a check in poker?** · **What is a good check-raise percentage?** · What does see and raise mean in poker? · How do I say "I raise" in poker? | |
| bet sizing poker | What is the 15/25/35 rule in poker? · **What does bet size mean?** · **What is geometric bet sizing in poker?** | |
| polarized range poker | **What is a polarized range in poker?** · What does range bet mean in poker? | |
| nut advantage poker | **What is the difference between nut advantage and range advantage in poker?** · What does "nut low" mean in poker? · What does "nut straight" mean in poker? | |
| board texture poker | Why is the flop called the flop? · What is the 15/25/35 rule in poker? · **What does the term "wet board" mean in poker?** · **What is a monotone board in poker?** | 관련: Dynamic board poker · What is a dry board in poker · Types of flops in Poker 외 5 |
| donk bet | (PAA 없음) | 관련: Donk bet example · **Why is a donk bet bad** · Donk lead poker · (Donk cars·music 무관) |
| set trong poker | (PAA 없음) | 관련: **Thùng trong poker là gì** · Trong Poker chất nào to nhất 외 6(L-B 몫) |
| range trong poker là gì | (PAA 없음) | 관련: Raise/Check/Fold/Call trong Poker là gì · Thuật ngữ trong Poker 외(L-A·L-F 몫) |
| (재사용) gto poker · gto poker là gì | **GTO trong poker là gì?** · GTO là gì? · Làm cách nào để chơi poker giỏi? | `vi-gto-solver.md` §5-B |

- **featured snippet = 34개 SERP 전부 0.** AI overview = `blind vs blind`(비포커) · `3 bet pot` 2건뿐.
- 영상팩: donk bet · check raise · 3bet pot · monotone · bet sizing · polarized · range/nut advantage · board texture — **전부 영어, vi 영상 0.**

### 4-B. SERP 상위 요지

유형·순위·vi 글 여부는 §1 표에 통합(상위 URL·제목 축어 전문 = `tmp/vi/L-G/serp*.txt`). 요점만: donk bet 1위 wikipoker · 6위 natural8/vi · check raise 4위 wikipoker · nut advantage poker 5위 wikipoker · spr poker 1위 = 도박 기생 «Xso99 – SPR Poker là gì» · set trong poker = wikipoker·natural8/vi 3편 · 나머지 헤드 1페이지 = 영어 원본(upswing · gtowizard glossary · pokercoaching · crushlive · runitonce · reddit) + `.gov.*` 기생 스팸.

### 4-C. vi 경쟁 허브 — wikipoker.net 13편 대응표 (사이트맵 842 URL에서 직접 추출)

| 우리 글 | wikipoker 대응 URL(슬러그 축어) | SERP 노출 |
|---|---|---|
| donk-bet-strategy | `/donk-bet-la-gi/` · `/donk-bet-o-flop/` · `/cach-doi-pho-voi-donk-bet/` | donk bet 1위 |
| monotone-board-strategy | `/flop-monotone/`(2021) · `/cach-choi-board-dong-chat-trong-poker/`(2025) · `/mat-bai-co-thung-o-turn/` | 0 |
| broadway-board-strategy | `/loi-the-nut-trong-poker/` · `/loi-the-range-trong-poker/` · `/c-bet-tren-flop-bai-cao/` | nut advantage poker 5위 |
| a-high-board-cbet | `/c-bet-tren-flop-a-cao/` · `/phong-thu-big-blind-tren-mat-bai-a-cao/` | 0 |
| k-high-board-cbet | `/c-bet-tren-flop-bai-cao/` · `/phong-thu-big-blind-tren-flop-bai-cao/` · `/meo-delay-c-bet/` | 0 |
| ace-paired-board-strategy | `/c-bet-tren-mat-bai-co-doi/`(«Luôn c-bet trên các board AAx») | 0 |
| paired-board-strategy | `/mat-bai-chap/` · `/3-vi-du-tiet-lo-cach-tiep-can-toi-uu-khi-gap-mat-bai-co-doi/` · `/mat-bai-co-2-doi/` | 0 |
| low-board-check-raise | `/check-raise/` · `/chien-thuat-check-raise-poker/` · `/phong-thu-big-blind-tren-mat-bai-thap/` · `/c-bet-tren-mat-bai-thap/` · `/bet-hay-check-raise/` | check raise 4위 |
| blind-battle-cbet · blind-battle-connected-board | `/blind-doi-dau-blind/` · `/meo-choi-o-small-blind/` · `/ket-cau-mat-bai-poker/` | 0 |
| 3bet-pot-cbet | `/c-bet-o-flop-trong-3-bet-pot/` · `/spr-la-gi/` · `/single-raised-pot-va-3-bet-pot/` · `/20-quy-tac-khi-choi-3-bet-pot/` | 0 |
| 3bet-pot-bet-sizing | `/bet-sizing/`(2021) · `/size-bet-luy-tien/`(geometric) · `/overbet/` · `/size-bet-nho-va-size-bet-lon/` | 0 |
| 3bet-pot-low-board | `/range-phan-cuc-va-range-tuyen-tinh/` · `/mat-flop-co-a-trong-3-bet-pot-poker/` · `/3-bet-pot-poker-khong-co-vi-tri/` | range poker 1위(재사용) |

→ **vi 텍스트 경쟁은 «없다»가 아니라 «있는데 순위가 안 잡힌다»**. 베트남 검색자가 영어 헤드로 검색하면 영어 원본(Upswing·GTO Wizard·Pokercoaching)이 이기고, wikipoker 번역본은 donk·check-raise·nut advantage에서만 이긴다.

### 4-D. 상위·대응 글 원문 정독 (본체 직접 수집 `heads.mjs` → `page-*.txt` · 헤딩 축어는 H1·H2 위주, 전체 = 원자료)

> wikipoker 공통: 본문 1,900~3,800토큰(근사) · `<table>` 0(수치는 **이미지**) · 이미지 70~100 · FAQ는 SPR 1편 · 경험담 0(번역물 «Nguồn: Upswing Poker / Pokercoaching»).

| # | URL · 날짜 | 헤딩 축어 | 수치·예시 | §13·사실 점검 |
|---|---|---|---|---|
| ① | wikipoker `/donk-bet-la-gi/` · 2025-04-30 | H1 «Donk bet là gì? 3 Mẹo chuyên sâu giúp bạn khai thác tối đa chiến lược Poker ít người dùng» · H2 «Donk bet là gì?» · H2 «3 Mẹo sử dụng Donk bet hiệu quả trong poker»(H3 «Mẹo #3: Khi bạn donk bet, hãy chọn sizing nhỏ» 외 2) | Lucid: BTN vs BB · **7♣ 6♦ 4♣** · «BB nên donk bet 41% số lần với sizing 1.65bb (tương đương 33% pot)» · BB 스트레이트 2.19% + 셋 2.14% vs BTN 0.06% + 1.7% | 🔴 **§13 오류 2건(축어)**: ① «2.14% là bộ (set) (**7♣7♣, 6♦6♦, 4♣4♣**)» — 같은 카드 두 장, 존재 불가 콤보. ② «sảnh (các combo như 8♣5♣ hoặc **6♣3♣** suited)» — 7장 검산: 6♣3♣ + 7♣6♦4♣ → 3-4-6-6-7 = **원페어(6) + 클럽 4장 드로**, 5가 없어 스트레이트 아님(정답 5x: 5-3 → 3-4-5-6-7). 🟢 4.33 ÷ 1.76 ≈ 2.46 → «gấp đôi» 수용 |
| ② | natural8.com/vi «Cược Donk…» | H2 «Donk Bet là gì?» · «Ứng dụng chiến lược của Cược Donk» · «Tần suất và phạm vi đặt cược» · «Những cạm bẫy tiềm ẩn» 외 3 | 수치·보드 0 · 어원 «"donkey" (kẻ chơi kém)» | 일반론뿐(오류 없음) · 영문판 번역 |
| ③ | wikipoker `/check-raise/` · 2021-05-01 | H1 «Check raise (Hồi mã thương) – Cách đánh Poker tối ưu value đơn giản mà hiệu quả bất ngờ!» · H2 «Check-raise trong Poker là gì?» · «Tại sao bạn nên check-raise?» · «Cách sử dụng check-raise hiệu quả» · «Lưu ý khi sử dụng chiến thuật Check-Raise trong Poker»(H3 «Khi nào nên sử dụng Check-raise?» 외) | 정의 «Check-raise là hành động bạn check khi đến lượt mình, với ý định raise nếu đối thủ bet.» · BB 7♣8♣ · 6♠6♦9♥ · «đối thủ bet 5$ vào pot 10$, thì bạn nên re-raise lên 15$» | 🟢 7♣8♣ = 6-7-8-9 양방향 드로 ✓. 🔴 **자기 예시와 산수 모순**: «Check-raise … hiệu quả hơn trong pot nhỏ… số tiền mà đối thủ phải bỏ ra để xem lá bài tiếp theo sẽ lớn hơn kích thước của pot» — 같은 예시에서 콜 10 < 팟 30(10+5+15). 솔버 수치 0 |
| ④ | wikipoker `/phong-thu-big-blind-tren-mat-bai-thap/` · 2025-08-28 | H1 «Phòng thủ Big Blind trên mặt bài thấp: Bí quyết check-raise đúng lúc» · H2 «Phòng thủ Big Blind trên mặt bài thấp và khô – 9♠5♥2♣» · «C-bet trên mặt bài thấp và nhiều liên kết khi OOP – 8♥7♥5♦» | «BTN chỉ nên c-bet khoảng 1/3 … khoảng 31% pot» · «fold khoảng 26%» · «call hơn 53% hand và check-raise gần 21%» · vs 2/3 pot «check-raise … khoảng 11%» | 🟢 26+53+21 = 100 ✓. 🎯 우리 6-5-2 체크레이즈 14.9%와 같은 축 — vi 독자가 비교할 유일한 수치 |
| ⑤ | wikipoker `/loi-the-nut-trong-poker/` · 2025-07-08 | H1 «Lợi thế Nut trong Poker: Vũ khí bí mật giúp bạn áp đảo đối thủ» · H2 «Lợi thế nut trong poker là gì?» · «Phân biệt Lợi thế nut vs. Lợi thế range» · H3 «Tình huống #1: UTG vs BB – Flop 8♠ 7♦ 6♣» | 정의 «Range Advantage (Lợi thế range): Range của ai có equity trung bình cao hơn trên board. Nut Advantage (Lợi thế nut): Ai có nhiều combo thuộc nhóm bài mạnh nhất hơn.» | 🟡 같은 예시 무늬 불일치: 본문 «8♣ 7♠ 6♠» vs H3 «8♠ 7♦ 6♣». 수치 0 |
| ⑥ | wikipoker `/c-bet-tren-mat-bai-co-doi/` · 2025-06-12 | H1 «C-bet trên mặt bài có đôi: Chiến lược tối ưu theo GTO» · H2 «… khi có vị trí (IP)» · «… khi không có vị trí (OOP)» · «Tổng kết» | IP «6♠ 6♥ 2♣ … c-bet khoảng 60% range với sizing nhỏ» · «Luôn c-bet trên các board AAx, dùng sizing nhỏ» / OOP «6♦ 6♥ 2♠ : chỉ bet khoảng 35%» · «ưu tiên sử dụng sizing lớn» | 🟢 출처 표기. 🎯 A-A-6 작은 사이즈 80.1%와 방향 일치 · 6-6-3(BB 선행 체크 97%)은 행위자가 달라 직접 비교 금지 |
| ⑦ | wikipoker `/mat-bai-chap/` · 2024-11-11 | H1 «Làm chủ mặt bài chập trong Poker với 5 mẹo từ pro» · H2 «Mặt bài chập ở Flop là gì?» · «5 Mẹo chơi trên các mặt bài chập ở Flop» | «khoảng 17% các flop là bài chập» · 8♥8♦4♣ vs 33% c-bet «call với 30% range … và check-raise với 30% range còn lại» | 🟢 17%: 13 × C(4,2) × 48 / C(52,3) = 3,744/22,100 ≈ 16.9% ✓. 🟡 «30% … còn lại» 문구 모호(이미지 미확인 · 오류 확정 안 함) |
| ⑧ | wikipoker `/flop-monotone/` · 2021-09-25 / `/cach-choi-board-dong-chat-trong-poker/` · 2025-04-15 | H1 «Flop monotone là gì? Xây dựng chiến thuật chơi Poker trên mặt Flop monotone» · H2 «Mặt Flop monotone là gì?» · «Size bet trên mặt Flop monotone» / H1 «Cách chơi board đồng chất trong Poker: Chiến lược tối ưu từ Solver» | «tần suất bet giảm từ 62% xuống còn 51%» · «c-bet với tần suất 50%, và size bet khoảng 25-33% pot» | 낡음(2021) · 플러시 확률 미기재. «board đồng chất» = 2025년 표기 |
| ⑨ | wikipoker `/c-bet-tren-flop-a-cao/` · 2025-05-16 · `/c-bet-tren-flop-bai-cao/` · 2025-06-04 | H1 «Giải mã chiến lược C-bet trên Flop A-cao: Size Bet, Tần Suất và Vị Trí» · H2 «C-bet trên Flop A-cao khi có vị trí – So sánh As9h3c và As9d8d» · «… khi không có vị trí – So sánh As9h4c và Ad9s8s» / bài-cao 글 = 같은 구조(Jh6d2s·Kh7c6c / Kh6s2d·KsQs9d) | BTN As9h3c «c-bet 57% tổng range» · 연결 «bet khoảng 37%» · OOP «check back khoảng 95%» | 🟡 표기 불일치 H2 «As9d8d» vs H3 «Ah9d8d». 🎯 우리 a-high 98.2%는 **BB 체크** 비율 — 행위자 구분 필수 |
| ⑩ | wikipoker `/blind-doi-dau-blind/` · 2024-07-23 | H1 «Làm chủ tình huống blind đối đầu blind trong Poker với 6 mẹo chơi hiệu quả» · H2 «Tình huống blind đối đầu blind là gì?» · «Mẹo … số #5: Hãy dùng size c-bet nhỏ» 외 5 | SB 오픈 «47.51%» · «bet nhỏ 100% số lần trên những mặt bài rainbow, hoặc two-tone với 9-cao trở lên … check 100% số lần trên Flop đồng chất (monotone), hoặc Flop từ 8-cao trở xuống» | 🟢 우리 K-high 67.4% · 저연결 9.6%와 방향 일치 — «100% 단순화»를 수치로 보정하는 자리 |
| ⑪ | wikipoker `/c-bet-o-flop-trong-3-bet-pot/` · 2024-06-27 | H1 «C-bet ở Flop trong 3-bet Pot: Bí quyết khai thác lợi thế và tối đa hóa lợi nhuận Poker» · H2 «C-bet ở flop trong 3-bet pot là gì?» · «Chiến thuật c-bet ở flop trong 3-bet pot khi có vị trí» / «… không có vị trí» | PioSolver BU vs CO Q♥J♥8♠ «C-bet hơn 95% số lần với size bet 33% pot» · equity 48% · SB vs BU J♠T♠7♥ 51.5% | 레인지 문자열 축어 · 오류 확인 안 됨. 🎯 3bet-pot-cbet(체크 0%)·bet-sizing(98.4%) 비교 재료 |
| ⑫ | wikipoker `/spr-la-gi/` · 2024-07-29 | H1 «SPR là gì trong Poker và tại sao bạn phải luôn quan tâm đến nó?» · H2 «Định nghĩa SPR trong Poker» · «Công thức tính SPR» · «FAQ – Những câu hỏi thường gặp về SPR trong Poker» | «SPR là tỷ lệ giữa effective stack size chia cho size của pot ở Flop.» · «SPR = 94 / 15 = 6.3» | 🟢 팟 6+6+1+2 = 15 · 94/15 = 6.27 ✓. 🔴 `spr poker` SERP 1페이지에 **없다** |
| ⑬ | wikipoker `/range-phan-cuc-va-range-tuyen-tinh/` · 2024-10-23 · `/size-bet-luy-tien/` · 2024-08-05 | H2 «Range phân cực là gì?» · «Range tuyến tính (Merged) là gì?» · «Khi nào range của bạn nên phân cực?» / H1 «Size bet lũy tiến: Hướng dẫn chi tiết cách chọn sizing xây pot hiệu quả» · H2 «Size bet lũy tiến là gì?» | 에퀴티 분포 설명 | 🟢 개념 정상 · «lũy tiến» = geometric의 vi 산문 표기 |
| ⑭ | wikipoker `/ti-le-phong-thu-toi-thieu-mdf/` · 2024-08-07 | H1 «Tần suất phòng ngự tối thiểu (MDF) và pot odds» · H2 «MDF là gì?» · «Cách tính toán MDF» | «MDF = size của pot / (size của pot + size cú bet)» · «$75 / ($75+$37.5)=0.67» | 🟢 공식·팟 진행(13 → 30 → 75) ✓ · 오타 «MB bet» |
| ⑮ | natural8.com/vi «Cách chơi bộ ba trong poker» · «Cách chơi bộ ba (set) trong poker» | H2 «Trip hay là set?» / «Set trong poker là gì?» | «Bộ ba trong poker đề cập đến ba lá bài có cùng giá trị. Và tùy thuộc vào cách nó được hình thành, nó có thể được gọi là "set" hoặc "trip".» | 🎯 **vi 고유 함정**: «bộ ba»가 set·trips를 둘 다 덮는다 → 차용어 병기 필수 |

정독 생략: reddit `?tl=vi` 자동번역 · 기생 스팸(`*.gov.*` · ulifestyle · itqnaso · Quora) · 영어 원본(fr L-G §4 일부 정독 · 판정 영향 없음).

### 4-E. vi 번역어 집계 (경쟁 글 실제 표기 · 산문 정본 후보)

| 개념 | 경쟁 글 표기(축어) | 검색어로서 |
|---|---|---|
| donk bet | «Donk bet»(wikipoker) · «Cược Donk»(natural8 · reddit `?tl=vi` «Cược Donk là gì?») | `donk bet (là gì)` ✅ · `cược donk` ✗ |
| check-raise | «Check-raise»/«Check raise (Hồi mã thương)»(wikipoker) · «check-tăng cược»(natural8 set 글 H3) | `check raise (là gì / trong poker)` ✅ · `hồi mã thương` 🔴 오염 |
| monotone | «Flop monotone»(2021) · «board đồng chất»(2025) · «Monotone (Board đồng chất)»(kết cấu 글) | `monotone flop/board` 10 · vi 조어 ✗ |
| paired board | «mặt bài chập» · «mặt bài có đôi» · «Paired Dry (Board khô có đôi)» | `paired board poker` 10 · vi 조어 ✗ |
| range/nut advantage | «Lợi thế range» · «Lợi thế nut» | 영어형 10 · vi ✗ |
| polarized/linear | «Range phân cực» · «Range tuyến tính (Merged)» | 영어형 10 · vi ✗ |
| geometric sizing | «Size bet lũy tiến» | 영어형 10 · vi ✗ |
| sizing | «size bet» · «sizing» · «bet sizing» | `bet size trong poker` · `size bet là gì` 자동완성 ✅ |
| SPR | «SPR»(Stack-to-Pot Ratio) · «Tỷ lệ giữa stack và pot (SPR)» | `spr poker (là gì)` ✅ · `spr là gì` 🔴 |
| BvB | «blind đối đầu blind» | `blind vs blind` 🔴 0/10 |
| set/trips | «bộ ba (set)» · «trip» · «hit set tươi» | `set trong poker` ✅ · `set poker` 🔴 쇼핑 |

→ 레인 A 표기 규칙 후보: **검색어 자리(제목·H2 질문)는 영어 차용어 + «là gì / trong poker»**, 산문 첫 등장에 wikipoker식 베트남어 풀이 1회 병기(«board đồng chất (monotone)» · «mặt bài chập (paired board)» · «lợi thế nut» · «range phân cực»). `docs/translation-terms-vi.md`에는 이 축 용어가 아직 없다 — 0-3에서 용어표 추가 후보.

---

## 5. 장단점 표 (vi 상위·대응 글 공통)

| 갖춰야 할 것(공통 강점) | 차별화 지점(공통 약점) |
|---|---|
| 첫 H2 = 정의형 «X là gì?»(donk · check-raise · SPR · range phân cực · mặt bài chập · flop monotone) | **번역 편집물** — 경험·현지 맥락 0 |
| 솔버 수치를 문장으로 옮김(41% · 57% · 95% · 21%) + IP/OOP·건조/연결 «So sánh» 구조 | 수치가 **이미지**(표 0) · 조건(스택·레이크·트리) 명시 거의 없음 · 콤보 수 0 |
| «Bài học rút ra» 요약 블록 · 개념↔스팟 내부링크 | **§13 오류**(«7♣7♣» · «6♣3♣») · 무늬 불일치 2 · 팟 산수 모순 |
| 차용어 + «là gì» 제목 | 영어 헤드·vi 질문형 SERP 대부분에서 탈락 · «직접 열어 보기» 동선 0(우리 «Check it yourself»가 유일) |

---

## 6. 우리 글 대조 (EN 마스터 · vi 도구)

- 13편 공통 골격(EN): «What conditions produced these numbers?» → 스팟 질문 H2 → «What changes at the table?» → «Check it yourself» → FAQ 4~7. wikipoker 대응 글보다 **조건 명시·콤보 수·텍스트 수치** 면에서 깊다 → 구조 변경 불요. 바꿀 것은 H2·FAQ의 **vi 질문 표현**과 행위자(누가 c-bet 하나) 구분 문장.
- EN 태그·seoTitle이 이미 잡은 검색어: 🔴 **low-board «check raise poker · when to check raise»(seoTitle «When to Check-Raise in Poker»)** · **3bet-pot-cbet «poker spr · what is spr in poker»(seoTitle «What Poker SPR 4 Really Does»)** · donk «donk bet poker · what is a donk bet» · blind-battle «blind vs blind poker»(🔴 vi 단독형 오염) · 나머지는 스팟 수식어(monotone · nut advantage · dry board · trips vs set · geometric · polarized).
- EN seoTitle에 «GTO» 단독이 든 3편: ace-paired «— GTO» · blind-battle-cbet «Blind vs Blind GTO» · connected «— GTO Solver» → vi에서 `gto poker`(170 · `/vi/solver` 몫)를 끌어오는 것처럼 보이지 않게 «solver» 문구로(fr 선례).
- vi 도구: `/vi/calculator` · `/vi/hand-chart` · `/vi/tournaments`만 있다(`app/vi/`). 🔴 **`/vi/glossary` 없음 · `/vi/solver` 미작성** → fr처럼 «정의 깊이는 glossary로 앵커 위임»이 불가능. 정의는 각 글 1문단 직답 + vi 규칙 글(`holdem-betting-actions` = check/raise · `holdem-blind-meaning` = SB/BB)로 링크.

---

## 7. 처방 (레인 🅶 A 브리프 재료 · 글마다)

> 카피는 **방향만**(최종 seoTitle·desc = 레인 A). 표기: 검색어 자리는 영어 차용어 + «là gì / trong poker» · 산문 첫 등장에 vi 풀이 1회(§4-E) · bạn체 · 숫자 쉼표 소수(`docs/translation-terms-vi.md`).
> 공통 차별화: 텍스트 수치(경쟁은 이미지) + 조건 명시 + 콤보 수 + 7장 베스트5 검산 예시 + «Tự kiểm tra» 앱 동선 + 행위자 구분 1문장(«số liệu này là của người check trước, không phải người c-bet»).
> 🔴 경쟁 글의 §13 오류(§4-D ①③⑤⑨)를 본문에서 지적하지 않는다(타사 비방 금지) — 우리 예시가 맞게 쓰는 것으로 충분.

### 7-1. donk-bet-strategy — 🔴 우선 1 (donk bet 10 · §1-E 예외 «그 단어의 주인» · vi 경쟁 2편)
- 주력어: **«donk bet»**(seoTitle 앞쪽) · 산문 «cược donk» 1회 병기(natural8·reddit 번역 표기) · «lead» 병기.
- H2: 첫 H2 앞 정의 직답 **«Donk bet là gì?»**(자동완성 `donk bet là gì` · `donk bet poker là gì` · wikipoker·natural8 첫 H2와 같은 질문 — 우리는 40~75단어 직답 + 9-8-7 수치로 바로 넘어간다).
- FAQ: EN «What is a donk bet in poker?» → «Donk bet trong poker là gì?» · EN «Why do people say donk betting is bad?» → **«Vì sao donk bet bị coi là cách chơi tệ?»**(관련검색 «Why is a donk bet bad» · natural8 «"donkey" (kẻ chơi kém)» 어원 · wikipoker H2 «Tại sao donk bet là cách chơi không tối ưu?» 대응) · 나머지 5문항 질문형 유지.
- 차별화: 경쟁 1위 글의 예시(7-6-4 · BB 리드 41%)는 Lucid 스크린샷 + 콤보 표기 오류. 우리는 9-8-7 리드 23.7%·작은 사이즈 2/3을 **텍스트 표**로, 스트레이트 콤보는 7장 검산해 적는다(레인 B: 9-8-7에서 스트레이트 = T-6 · J-T · 6-5 — 7장 베스트5 확인).
- 하지 않는 것: `donk bet turn/river`(자동완성有 · 볼륨 0) 새 H2 — §1-E ②.

### 7-2. low-board-check-raise — 🟠 우선 2 (check raise 10 · 0-3 판정 대기)
- 주력어(0-3 승인 시): **«check-raise»** 선두 + EN 훅 «Zero straights» 유지. 0-3 «불가»면 seoTitle에서 빼고 «6-5-2» 훅만.
- H2: 첫 H2 앞 정의 직답 후보 **«Check-raise trong poker là gì?»**(자동완성 `check raise trong poker` · `check raise là gì` · wikipoker 4위 첫 H2 축어 «Check-raise trong Poker là gì?» — 경쟁과 같은 질문을 1문단으로 받고 곧장 수치로) · EN «When should you check-raise on this flop?» → «Khi nào nên check-raise trên flop 6-5-2?»(wikipoker H3 «Khi nào nên sử dụng Check-raise?» 대응).
- FAQ: PAA(영어) «What is a good check-raise percentage?» → **«Tỷ lệ check-raise bao nhiêu là hợp lý?»** — 답 = 이 스팟 14.9% + «vs c-bet nhỏ trên 9-5-2 gần 21%» 같은 수치는 스팟·사이즈마다 다르다는 한 줄(타사 이름 없이) · PAA «Can you raise after a check in poker?» → **«Check rồi có được raise không?»**(규칙 질문 — 1문장 «được» + `holdem-betting-actions` 링크) · EN «Is a check-raise allowed, and is it rude?» 와 합쳐 1문항으로.
- 차별화: vi 독자가 이미 본 수치(9♠5♥2♣ BB 체크레이즈 ~21% vs 소형 c-bet)와 우리 6-5-2 14.9%·리드 3.2%를 **조건 차이(사이즈·보드)로 설명**하는 문장 1개 — 같은 «저보드 체크레이즈»에서 숫자가 왜 다른가가 이 글의 가치.
- 🔴 «hồi mã thương» 표기 금지(검색량 390은 무협·축구).

### 7-3. 3bet-pot-cbet — 🟠 우선 3 (spr poker 20 · spr poker là gì 10 · 0-3 판정 대기)
- 주력어(0-3 승인 시): **«SPR»**(EN seoTitle «Poker SPR 4» parity). `spr poker là gì` SERP = reddit 번역 10개로 **완전히 빈 자리**.
- H2: EN «What is SPR in poker?» → **«SPR trong poker là gì?»**(자동완성 `spr trong poker là gì` · `spr poker là gì`) — 정의 + 공식(stack hiệu dụng ÷ pot ở flop) + 이 스팟 값(레인 B: EN 본문 팟·스택으로 SPR ≈ 4 재검산).
- FAQ: EN «What does SPR mean in poker?» → «SPR là viết tắt của gì trong poker?»(🟡 PAA «SPR là viết tắt của từ gì?»는 비포커 SERP지만 질문 형태는 같다 — «trong poker» 꼬리 필수) · EN «How many bets can you make at an SPR of 4?» 유지.
- 🔴 «spr là gì» 단독형을 제목·태그에 쓰지 마라(포커 0/10).
- 카니발: vi에 SPR 필라 없음 · `/vi/glossary` 없음 → 이 글이 정의까지 받는다(0-3 ⑥).

### 7-4. 3bet-pot-bet-sizing — 🟢 (bet sizing poker 10 · size bet 10)
- 주력어: **«bet sizing / size bet»**(vi 정본 = 차용어 · «kích thước cược»는 natural8류 번역체).
- FAQ: EN «How much should you bet in poker?» → **«Bet size trong poker là gì và chọn thế nào?»**(자동완성 `bet size trong poker` · `size bet là gì` · PAA «What does bet size mean?») · EN «What is geometric bet sizing?» → **«Geometric bet sizing (size bet lũy tiến) là gì?»**(PAA «What is geometric bet sizing in poker?» · wikipoker 표기 «lũy tiến» 병기) · EN «Should I use an overbet instead?» → «overbet» 차용어 유지(overbet poker 10 · wikipoker «Overbet trong poker là gì?»).
- 카니발: 프리플랍 사이징(open·3bet)은 L-D — 이 글은 «3-bet pot · board ướt» 한정.

### 7-5. paired-board-strategy · ace-paired-board-strategy — 🟢 (set trong poker · trips poker 10 · 🔴 set poker 함정)
- 🔴 vi 고유: «bộ ba»가 set·trips를 둘 다 뜻한다(natural8 «Trip hay là set?») → H2 «Trips vs a set — on a paired board it's trips» → **«Trips hay set? Trên mặt bài chập (paired board) là trips»**(«bộ ba» 단독 사용 금지 · «set»·«trips» 차용어 필수).
- paired FAQ: EN «How often does the flop come paired?» → «Flop ra đôi (mặt bài chập) bao nhiêu phần trăm?»(wikipoker «khoảng 17% các flop là bài chập» — 레인 B: 정확히 한 쌍 3,744/22,100 ≈ 16,9% · 트립스 보드 52/22,100 ≈ 0,24% · EN 값 대조) · EN «What is minimum defense frequency?» → «MDF (tần suất phòng ngự tối thiểu) là gì?»(wikipoker 표기 · `mdf poker` 10).
- ace-paired FAQ: EN «What are trips in poker, and how do they differ from a set?» → **«Trips và set trong poker khác nhau thế nào?»**(자동완성 `set trong poker` · `set poker là gì` · `poker trips vs set`).
- 차별화: wikipoker 결론 «Luôn c-bet trên các board AAx, dùng sizing nhỏ»와 우리 A-A-6 작은 사이즈 80.1%는 **같은 방향** → «solver xác nhận» 문장으로 신뢰 연결 · 6-6-3(체크 97%)은 행위자(BB 선행)가 달라 «IP c-bet 60%»와 직접 비교하지 않는다.
- 금지: «set poker» 태그·제목.

### 7-6. monotone-board-strategy — ⚪ 그룹 A (monotone 10 · vi 질문형 없음)
- H2 첫 «What is a monotone board in poker?» → **«Board monotone (đồng chất) là gì?»**(PAA «What is a monotone board in poker?» · wikipoker «Mặt Flop monotone là gì?» · «board đồng chất» 병기).
- FAQ «How likely is it to flop a flush?» 유지(자동완성 `monotone flop odds` · 레인 B 검산) · 정의 깊이는 L-B `thùng trong poker là gì`(50)·`flush trong poker là gì`(40) 쪽 글로 링크만(족보 정의 흡수 금지).

### 7-7. broadway-board-strategy — ⚪ (nut/range advantage 10)
- H2 «Range advantage vs nut advantage — what's the difference?» → **«Lợi thế range và lợi thế nut khác nhau thế nào?»**(PAA «What is the difference between nut advantage and range advantage in poker?» · wikipoker H2 «Phân biệt Lợi thế nut vs. Lợi thế range»).
- 차별화: wikipoker 예시 8-7-6 / A-K-2는 수치 0 → 우리 Q-J-T «68% có draw, 99,9% check»가 유일한 수치.

### 7-8. a-high-board-cbet · k-high-board-cbet — ⚪ 그룹 A
- a-high H2 «What is a dry board, and why does this one favor the raiser?» → «Board khô là gì…»(PAA «What does the term "wet board" mean in poker?» · 관련검색 «What is a dry board in poker») · FAQ «What is the difference between a wet board and a dry board?» → «Board ướt và board khô khác nhau thế nào?».
- 🔴 «c bet là gì»(30 · L-D)는 받지 않는다 — H2·FAQ는 «c-bet trên flop A-cao» 한정어 유지(wikipoker 표기 «Flop A-cao»).
- 행위자 문장 필수: wikipoker A-cao 57%는 **BTN이 c-bet** 하는 비율, 우리 98,2%는 **BB가 체크**하는 비율.
- k-high: 처방 없음(«delay c-bet» 표기만 — wikipoker «delay c-bet»).

### 7-9. blind-battle-cbet · blind-battle-connected-board — ⚪ 그룹 A (🔴 blind vs blind 오염)
- 🔴 `blind vs blind` 단독형 = 포커 0/10 → seoTitle·태그에 쓰려면 반드시 «poker»·«SB vs BB» 결합. 산문 표기 «blind đối đầu blind (SB vs BB)»(wikipoker 표기).
- 새 FAQ 없음 — 자동완성 질문(`blind poker là gì` · `small blind big blind là gì`)은 L-A `holdem-blind-meaning` 몫.
- 차별화: wikipoker 단순화 규칙(«bet nhỏ 100% … 9-cao trở lên · check 100% … 8-cao trở xuống»)을 우리 두 편 수치(K-high 67,4% · 저연결 9,6%)가 **보정**한다 — «100%가 아니라 67%/10%» 한 문장.

### 7-10. 3bet-pot-low-board — ⚪ (polarized range 10)
- FAQ EN «What does a polarized range mean?» → **«Range phân cực (polarized) là gì?»**(PAA «What is a polarized range in poker?» · wikipoker H3 «Range phân cực là gì?»).
- 🔴 «range poker»(70)·«range trong poker là gì»는 `/vi/solver`·`/vi/hand-chart` 몫 — 제목에 «range» 단독 금지.

---

## 8. 0-3 판정 재료

### ⑤ «check raise» (10 · check raise là gì 10 · check raise poker 10) ↔ `low-board-check-raise`
**SERP 증거**: `check raise` 1페이지 = 위키(EN) · 호주 클럽 · reddit · **wikipoker vi 4위**(정의+일반 전략 · 솔버 수치 0 · 팟 산수 모순) · pokernews · thepokerbank · stackexchange · blackrain79. `check raise là gì` = 섞임 6/9 · 정의 글 없음 · 도박 홍보·기생 스팸 포함. PAA 영어 «What is a good check-raise percentage?». vi 51편·EN에 check-raise 필라 없음 · `/vi/glossary` 없음.
**fr과 차이**: fr은 260 실수요였고 vi는 10 — «주인 없는 실수요» 근거는 약하다. 남는 근거는 **EN parity**(EN seoTitle «When to Check-Raise in Poker»)와 vi 1페이지가 얇다는 것.
**권고 1줄**: EN parity로 «check-raise»를 seoTitle·첫 정의 H2에 유지하되 정의는 1문단 직답 + `holdem-betting-actions` 링크로 끝내고(glossary 위임 불가), vi check-raise 필라가 생기면 그날 반납한다.

### ⑥ «spr poker» (20 · spr poker là gì 10 · 🔴 spr là gì 110 오염) ↔ `3bet-pot-cbet`
**SERP 증거**: `spr poker` 1위 = 도박 기생 «Xso99 – SPR Poker là gì» · 나머지 영어 + `.gov` 스팸 · `spr poker là gì` = reddit 번역 10개(SPR 무관) — **vi 정의 글 0**(wikipoker `/spr-la-gi/`는 존재하지만 1페이지에 없음). `spr là gì` = 석유 비축·SOLID·금리(포커 0/10).
**권고 1줄**: ⑤와 같은 EN parity 논리로 «SPR trong poker là gì?» H2를 이 글이 받되, «spr là gì» 단독형은 어디에도 쓰지 않고 «spr calculator/chart» 의도는 `/vi/calculator`에 SPR이 없으므로 조준하지 않는다.

### «c bet là gì» (30) ↔ `holdem-continuation-bet`(L-D) — 경계만
**SERP 증거**: 결과 6개 · vi 글 0(cbet.lt 리투아니아 베팅 · reddit 크로아티아어·페르시아어 번역 · 태국어 FB · myclubgg · casinoedge). `c bet poker là gì` = reddit 번역·wikipoker «hand mua bán» 등, c-bet 정의 글 0.
**권고 1줄**: 정의형 «c bet là gì»는 L-D `holdem-continuation-bet` 단독 소유 — 13편(a-high·k-high·blind-battle·3bet-pot 3편)은 «c-bet trên …/trong 3-bet pot» 한정어만 쓰고 정의는 그 글로 링크한다.

### `/vi/solver` 경계 (미작성 · `vi-gto-solver.md` 승계)
- `gto poker` 170 · `gto poker là gì` 30 · PAA «GTO trong poker là gì?» · `range poker` 70 · `poker solver` 20 · `range trong poker là gì`(용어집·차트 SERP) → **전부 `/vi/solver`(+ 차트 의도는 `/vi/hand-chart`) 몫.** 13편은 제목·H1·태그에 «GTO poker»·«range poker»를 쓰지 않는다(EN seoTitle «GTO» 단독 3편 → «solver» 문구).
- 🔴 `/vi/solver`가 없는 동안 13편 «Check it yourself» 절의 링크 목적지 = 솔버 앱 직접(앱 vi 배포 여부는 `vi-gto-solver.md` 머리 «S-행 전» 상태 — 0-3에서 확인). 랜딩 «Đọc thêm» 13링크는 랜딩 작성 회차에(계획 §1 «같은 회차 묶음» 판정).
- 13편이 생기면 `vi-gto-solver.md` §6 «랜딩이 링크할 vi 자산 0» 문제가 절반 풀린다(GTO 예제 13편 = EN 랜딩 링크 목적지) — 0-3에서 «13편 먼저 → 랜딩» 순서의 근거로 쓸 수 있다.

---

## 9. 처방 요약

| 순위 | 글 | 수요(실측) | vi 텍스트 경쟁 | 핵심 처방 | 카니발 주의 |
|---|---|---|---|---|---|
| 1 | donk-bet-strategy | donk bet 10 | 있음 — wikipoker 1위(§13 오류 2) · natural8 6위(수치 0) | 정의 H2 «Donk bet là gì?» · FAQ «Vì sao donk bet bị coi là cách chơi tệ?» · 텍스트 수치 표 | — |
| 2 | low-board-check-raise | check raise 10 | 있음 — wikipoker 4위(수치 0 · 산수 모순) · `/phong-thu-big-blind-tren-mat-bai-thap/`(21%) | (0-3 ⑤ 승인 시) 정의 H2 «Check-raise trong poker là gì?» · FAQ «Tỷ lệ check-raise bao nhiêu là hợp lý?» · 21% vs 14,9% 조건 설명 | 정의는 1문단 + `holdem-betting-actions` |
| 3 | 3bet-pot-cbet | spr poker 20 · là gì 10 | SERP 0(wikipoker 글은 순위 밖) | (0-3 ⑥ 승인 시) H2 «SPR trong poker là gì?» | 🔴 «spr là gì» 금지 |
| 4 | 3bet-pot-bet-sizing | bet sizing 10 · size bet 10 | SERP 0 | FAQ «Bet size trong poker…» · «Geometric bet sizing (size bet lũy tiến) là gì?» | 프리플랍 사이징 L-D |
| 5 | paired · ace-paired | trips 10 · set trong poker `-`(SERP vi 3) | 있음(용어·set 글) | «Trips hay set?» H2 · «bộ ba» 단독 금지 · 확률·MDF FAQ | 🔴 «set poker» 금지 |
| 6 | broadway · 3bet-pot-low-board | 10 | 영어만 | «Lợi thế range và lợi thế nut khác nhau thế nào?» · «Range phân cực là gì?» | «range» 단독 = `/vi/solver` |
| — | monotone · a-high · k-high · blind-battle 2편 | 0~10 | 영어만(wikipoker 대응 글은 순위 밖) | 그룹 A — EN FAQ를 vi 질문형으로 이식 · 행위자 구분 문장 | «c bet là gì» L-D · 블라인드 정의 L-A · 🔴 «blind vs blind» 단독 금지 |

---

## 10. 커버리지 표 (브리프 «할 일» 0~4)

| 검색어 | 0 오염 | 1 자동완성 | 2 볼륨 | 3 SERP+PAA | 4 원문 정독 |
|---|---|---|---|---|---|
| gto poker (→ /vi/solver) | ✅ 승계 | ✅ 승계 | ➖ 170(뱅크) | ✅ 승계(PAA «GTO trong poker là gì?») | ✅ 승계(뱅크 §5-C) |
| range poker (→ /vi/solver) | ✅ 승계 + range trong poker 2 SERP | ✅ | ➖ 70 · vi형 `-` | ✅ | ✅ ⑬ |
| donk bet | ✅ 8/8 · 8/10 · 10/10 | ✅ | ✅ | ✅ 3 SERP | ✅ ① ② |
| check raise | ✅ 8/8 · 6/9 · 10/10 · 7/10 | ✅ | ✅ | ✅ 4 SERP · PAA 2세트 | ✅ ③ ④ |
| c bet là gì (L-D 공유) | ✅ 5/6 · vi 0 | ✅ | ✅ | ✅ 3 SERP | ➖ vi 정의 글 0(L-D 몫) |
| 3bet pot | ✅ 10/10 · 9/9 | ✅ | ✅ | ✅ 2 SERP | ✅ ⑪ |
| blind vs blind | ✅ **0/10 오염** | ✅ | ✅ | ✅ | ✅ ⑩(SERP 밖 대응 글) |
| monotone board | ✅ 6/9 · 10/10 | ✅ | ✅ | ✅ 2 SERP | ✅ ⑧ |
| spr poker | ✅ 8/8 · spr là gì **0/10** · 10/10 · 6/10 | ✅ | ✅ | ✅ 4 SERP | ✅ ⑫(SERP 밖) |
| paired board | ✅ 10/10 | ✅ | ✅ | ✅ | ✅ ⑥ ⑦ |
| bet sizing · geometric · overbet | ✅ 9/9 · 8/10 · 9/9 | ✅ | ✅ | ✅ 3 SERP · PAA 3 | ✅ ⑬ + bet-sizing·overbet 헤딩 |
| polarized range | ✅ 11/11 | ✅ | ✅ | ✅ PAA 2 | ✅ ⑬ |
| range/nut advantage | ✅ 10/10 · 10/10 | ✅ | ✅ | ✅ 2 SERP · PAA 3 | ✅ ⑤ |
| board texture · wet/dry | ✅ 10/10 | ✅ | ✅ | ✅ PAA 4 | ✅ kết cấu mặt bài 헤딩(11종) |
| A-high · K-high (c-bet 스팟) | ✅(board texture·c bet 행) | ✅ | ✅ | ✅ | ✅ ⑨ |
| trips · set | ✅ 8/10 · **set poker 함정** · 10/10 | ✅ | ✅ | ✅ 3 SERP | ✅ ⑮ |
| overpair · MDF · EQR · backdoor | ✅ | ✅ | ✅ | ✅ 2 SERP | ✅ ⑭ · ➖ EQR·backdoor = 본문 용어 |

**글별 «PAA·자동완성 질문 확보»** — 13/13 ✅

| 글 | 출처(축어) |
|---|---|
| donk-bet-strategy | 자동완성 «donk bet là gì» · «donk bet poker là gì» · 관련 «Why is a donk bet bad» |
| low-board-check-raise | 자동완성 «check raise là gì» · «check raise trong poker» · PAA «What is a good check-raise percentage?» · «Can you raise after a check in poker?» |
| 3bet-pot-cbet | 자동완성 «spr poker là gì» · «spr trong poker là gì» |
| 3bet-pot-bet-sizing | 자동완성 «bet size trong poker» · «size bet là gì» · PAA «What does bet size mean?» · «What is geometric bet sizing in poker?» |
| 3bet-pot-low-board | PAA «What is a polarized range in poker?» |
| paired-board-strategy | 자동완성 «set trong poker» · «poker trips vs set» |
| ace-paired-board-strategy | 자동완성 «set poker là gì» · natural8 H2 «Trip hay là set?» |
| broadway-board-strategy | PAA «What is the difference between nut advantage and range advantage in poker?» |
| monotone-board-strategy | PAA «What is a monotone board in poker?» · 자동완성 «monotone flop odds» — 그룹 A |
| a-high-board-cbet | PAA «What does the term "wet board" mean in poker?» · 관련 «What is a dry board in poker» — 그룹 A |
| k-high-board-cbet | 자동완성 «delay cbet poker» — 그룹 A |
| blind-battle-cbet | 자동완성 «blind poker là gì» · «small blind big blind là gì»(→ L-A) — 그룹 A |
| blind-battle-connected-board | 관련 «Dynamic board poker» · «Types of flops in Poker» — 그룹 A |

**그룹 A(스팟 고유 vi 질문 없음 → EN FAQ 이식)**: monotone · a-high · k-high · blind-battle 2편(+ 3bet-pot-low-board 반쯤). 새 FAQ를 만들지 않는다(§1-E).

✗ 0건. (➖ = 정독 대상 vi 글 없음 또는 뱅크 승계 — 이유 표기.)
