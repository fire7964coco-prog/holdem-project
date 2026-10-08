# L-E 토너먼트 — vi SERP 조사 (2026-10-08 · vi 클러스터 0-2)

> 브리프 = `00-brief.md` · 대상 5편(EN 마스터 `lib/posts-en/<slug>.ts` 대조): `holdem-tournament` · `holdem-icm` · `holdem-bubble` · `holdem-short-stack` · `holdem-tournament-vs-cash-game`(**vi판 있음** = `lib/posts-vi/holdem-tournament-vs-cash-game.ts`)
> 볼륨 정본 = `../vi-core-volumes.md`(0-1). 여기서는 **0-1에 없던 검색어만** 새로 쟀다(§1-B · 2회 · 95어).
> 도구: DataForSEO(2704 · vi) 자동완성 78회(시드 60 + 18) · SERP 26회(organic/live/advanced · depth 10 · desktop) · 볼륨 2회. 스크립트 = `tmp/vi/dfs.mjs`(수정 안 함).
> 원문 정독 = 레포 Node fetch로 HTML의 H1~H4 **DOM 축어 추출**(`tmp/vi/L-E/pages.mjs`) 21건 + exa web_fetch(GGPoker vi는 직접 fetch 시 403 «Access Denied» → exa 전문으로 읽음) · exa 검색 2회(ICM·cash vs tour 베트남어 글 탐색 — URL 찾기 전용).
> 원자료 = `tmp/vi/L-E/` 하위(`ac-out.*` · `ac2-out.*` · `serp-out.*` · `serp2-out.*` · `vol-out.*` · `vol2-out.*` · `pages-1/2/3.json`(본문 전문) · `icm.py`(검산)) — gitignore.
> 경쟁 글의 ICM 예시는 §4-6에서 Malmuth-Harville 재귀로 **다시 계산**했다.

## 0. 한 줄 결론

1. 🔴 **헤드 4개 중 3개가 오염이다**: «icm là gì» 140 = 포커 **0/10**(K-ICM 가수 8) · «bubble là gì» 1,000 = **0/10**(사전·K-pop 앱 Bubble·버블티) · «short stack» 390 = **2/10**(호주 밴드 Short Stack이 KG) · 덤으로 새로 잰 «mtt là gì» 110 = **0/10**(máy tính tiền 전자세금계산서). → 조준어는 **«X poker» · «X trong poker là gì»** 결합형으로 내려간다(전부 10~30).
2. **ICM 정의 SERP가 비어 있다(최대 기회)** — «icm poker»(110)는 유기 9 전부 영어·포르투갈어·프랑스어(베트남어 0), «icm poker là gì»(20)·«icm trong poker là gì»(10)는 포커 결과지만 **ICM을 정의하는 글이 상위 10에 0편**. 베트남어 ICM 해설 글은 wikipoker.net에 2편 있지만 어느 SERP에도 안 걸렸다. EN 마스터의 «3인 재귀 손계산 + ICM deal vs chip chop»이 그대로 무주공산.
3. **«poker tournament»(210)·«giải poker»(70)는 일정·장소 + 합법성 SERP** — «poker tournament» 유기 10 중 해설 0(대회 캘린더·클럽·여행사), «giải poker» 9 중 **합법성 기사 4** · 일정 3 · 해설 2, «giải poker là gì»(40) 10 중 **합법성 6**. 글은 헤드가 아니라 «poker tournament là gì»(20)·ITM(30+30+20)·GTD(30)·buy in(30)·«đánh tour poker» 롱테일로 들어간다. 🔴 EN FAQ «Is it legal to host a poker tournament at home?»는 vi에서 **삭제**(금지 축).
4. **베트남어 해설 SERP는 wikipoker.net 독주** — bubble·push/fold·ITM·poker tour 4 SERP에서 1위 또는 상위. 이 사이트 글은 길고(2,100~3,900어) 목차형이지만 **계산 과정이 거의 없고**, 숏스택 정의가 캐시게임 기준(«Short stack (≤40BB)»)이며 번역 자기모순 1건(§4-6). GGPoker vi 버블 글은 수치 0의 수필형, Freezeout을 «Đóng băng»(얼음)으로 오역.
5. **현지 표기 = 영어 차용어 + «giải đấu»**: 정독 21쪽 집계에서 bubble 149 vs bong bóng 14 · short stack 69 vs stack ngắn 9 · push/fold 68 vs tất tay 3 · ITM 94 vs vào tiền 11 · cash game 100 vs tiền mặt 15 · giải đấu 352 vs tournament 97 · 구어 **«tour»(đánh tour · out tour) 69회/7쪽**. 우리 vi 글(vs편)은 «Tournament» 61 vs «giải đấu» 6으로 **현지와 반대 비율**.

---

## 1. 볼륨

### 1-A. 0-1 값 (다시 재지 않음 · `vi-core-volumes.md` §2 🅴) + 이번 오염 판정

| slug | 헤드(0-1) | 0단계 판정(§3) | 롱테일(0-1) |
|---|---|---|---|
| holdem-tournament | poker tournament 210 · tournament poker 210(한 수요) | 포커 10/10 · **일정·장소 의도**(해설 0) | giải poker 70(포커 9/9 · 합법성 4·일정 3) · giải poker là gì 40(합법성 6/10) · mtt poker 50(포커 8/9 · 영어 포럼) · giải đấu poker 20 · giải poker thế giới 20 · giải poker lớn nhất thế giới 20 |
| holdem-icm | **icm là gì 140 → 🔴 오염(포커 0/10)** · icm poker 110(포커 9/9 · 베트남어 0) | | (icm calculator 40 = 도구 몫) |
| holdem-bubble | **bubble là gì 1,000 → 🔴 오염(포커 0/10)** | | bubble poker 10(포커 7/8 · 베트남어 4) |
| holdem-short-stack | **short stack 390 → 🔴 오염(포커 2/10 · KG=밴드)** | | push fold 10(포커 10/10 · 차트·도구) · short stack poker 10(포커 9/9 · 베트남어 0) |
| holdem-tournament-vs-cash-game | cash game poker 50(포커 9/9 · 베트남어 1) · cash game 40 | | cash game là gì 10(포커 8/10 · 정의 글 0) · tournament vs cash game 0 |

### 1-B. 새로 잰 것 (Google Ads · 2704 · vi · 2회 95어 · `vol-out.txt`·`vol2-out.txt`)

🔴 `-` = Ads 데이터 없음(≠ 0). 같은 숫자 여러 줄 = 한 수요일 수 있음(더하지 않는다).

| 검색어 | 볼륨 | 판정·몫 |
|---|---:|---|
| **mtt là gì** | 110 | 🔴 **오염** — SERP 포커 0/10(전자세금계산서 «hóa đơn máy tính tiền» = MTT) · 조준 금지 |
| giải poker việt nam · giải poker hà nội · vietnam poker tour | 50 · 50 · 40 | 🪶 일정·장소(관찰만 · `/vi/tournaments`) |
| **tour poker** | 30 | SERP = 일정·이벤트(WPT Vietnam · Royal Poker Tour · APT) — 🪶 · 단 «tour» = 현지 구어(§2-6) |
| **itm trong poker là gì · itm poker là gì · itm poker** | 30 · 30 · 20 | tournament H3/FAQ(ITM) — SERP 1위 wikipoker «ITM Poker là gì?» |
| **gtd trong poker là gì** | 30 | tournament H3/FAQ(guarantee) — SERP에 정의 글 0(인스타·FB·reddit) = 빈 SERP |
| **buy in poker** · buy in poker là gì | 30 · 20 | tournament H2(buy-in·fee) |
| sit and go poker | 20 | tournament H3(SNG) |
| **poker tournament là gì** | 20 | tournament 정의 H2 — SERP 10/10 포커지만 **정의 글 0**(FB 클럽 영상 7 · reddit 2 · YouTube 1) |
| **icm poker là gì · icm poker la gi** | 20 · 20(한 수요) | **holdem-icm 주력** — SERP 정의 글 0 |
| giải đấu poker tại việt nam 2026 | 20 | 🪶 일정 |
| icm trong poker là gì · icm poker strategy · icm poker deal · deal icm poker là gì · icm deal · icm poker calculator · chip ev | 각 10 | icm H2/FAQ · calculator는 도구 몫 |
| bubble trong poker là gì · money bubble poker · bubble protection poker · out bubble là gì · out bubble trong poker là gì | 각 10 | bubble H2/FAQ · 🔴 bubble protection = GG/Natural8 상품 기능(실머니 사이트) — 조준 금지 |
| stack trong poker là gì · stack poker · short stack là gì · short stack poker strategy | 각 10 | short-stack 정의 FAQ(«stack poker» = 앱 «Stack Poker» 섞임 — AC 축어 «stack poker app») |
| push or fold · push fold chart · all in or fold | 각 10 | 🔧 도구(`/vi/calculator` Push/Fold «Bảng Nash») 몫 |
| poker cash game là gì · cash game vs tournament(+poker) | 10 · 10 · 10 | vs 글 H2 |
| mtt poker là gì · sng poker · satellite poker · freezeout poker · final table poker · deepstack poker(+la gì) · bounty poker(+là gì) · rebuy poker · add on poker · late reg poker · payout poker | 각 10 | tournament H3(형식·용어) |
| poker tournament strategy · tournament poker strategy · cách chơi poker tournament · luật poker tournament · đánh tour poker · cách đánh tour poker · kinh nghiệm đánh tour poker | 각 10 | tournament «chiến thuật/cách chơi» H2 |
| giải đấu poker là gì · giải đấu poker online | 10 · 10 | tournament 정의(online = 금지 축) |
| giải poker triton · giải poker phú quốc · poker tournament vietnam | 각 10 | 🪶 일정 |
| re entry poker · short stack poker tournament strategy | 0 · 0 | — |
| **`-`(Ads 없음)** 25어: tournament poker là gì · tour poker là gì · đánh tour poker là gì · stack poker là gì · avg stack trong poker là gì · bubble poker là gì · bubble time poker là gì · poker bubble factor · poker bubble boy · chip leader là gì · satellite poker là gì · reg end poker là gì · push fold là gì · buy in là gì trong poker · chiến thuật đánh tour poker · cách chơi tour poker · … (전체 `vol-out.txt`) | — | 자동완성엔 뜸 → 질문 표현 재료 |

**판단**: 이 레인의 «X là gì» 헤드는 셋 다 포커가 아니다. 실제 포커 수요는 **10~110 자릿수 결합형**뿐이고, 글 하나가 받을 묶음 합(중복 제거 전 단순 나열)은 icm ≈ 110+20+10×5 · tournament ≈ ITM 30+30+20 · GTD 30 · buy in 30+20 · poker tournament là gì 20 + 10×15 · vs ≈ 50+40+10×4 · bubble ≈ 10×6 · short-stack ≈ 10×5.

---

## 2. 자동완성 (DFS · 2704 · vi · chrome · 원자료 `tmp/vi/L-E/ac-out.txt`·`ac2-out.txt` = 78시드 전체 목록)

> 여기엔 **베트남어 술어·포커 결합형만 축어**로 옮기고, 영어·외국어 변형(meaning · significado · near me · 도시명 등)은 개수만 적는다. 전체 목록은 원자료.

빈 결과(0개): icm là gì · cash game poker · tournament hay cash game · cash game hay tournament · nên chơi cash game hay tournament · mtt là gì · cách chơi giải poker · luật giải poker · chiến thuật giải (đấu) poker · * trong giải poker · all in hay fold · push fold là gì · short stack poker là gì · bàn chung kết poker · chip trong giải đấu poker · giải đấu poker kéo dài bao lâu → **베트남어 순수 조어엔 자동완성이 붙지 않는다**(0-1 결론과 같음).

| 시드 | 베트남어·포커 결합 축어 | 나머지 |
|---|---|---|
| icm poker | icm poker là gì · icm poker deal · icm poker calculator(+ app · online · chip calculator) · icm poker formula · icm poker tool | 영어 변형 7 |
| icm trong poker / icm poker là gì | icm trong poker là gì · icm poker là gì · icm poker la gi · icm poker strategy · **deal icm poker là gì** | — |
| icm * | — | icml · icmp · icmarket · K-ICM 등 **포커 0/15** |
| poker tournament | poker tournament là gì · poker tournament hà nội · poker tournament online · 🔴 poker tournament có hợp pháp không · poker tournament vietnam · poker tournament strategy | 장소·일정 영어 9 |
| giải poker | giải poker việt nam · hà nội · thế giới · tphcm · lớn nhất thế giới · online · hạ long · **là gì** · sài gòn · phú quốc 2025 · đà nẵng · triton · phú quốc · quốc tế · hải phòng | (15 중 장소·대회 13) |
| giải đấu poker | giải đấu poker tại việt nam 2026 / 2025 / 2024 · **giải đấu poker là gì** · miễn phí · thế giới · việt nam · tại việt nam · online · hà nội · lớn nhất thế giới · các giải đấu poker ở việt nam | (12 중 장소·연도 10) |
| giải poker là gì | giải đấu poker là gì · giải triton poker là gì · giải poker online · giải poker lớn nhất thế giới · giải poker ở việt nam | — |
| tournament là gì | **poker tournament là gì** · tournament là gì dịch · tournament director là gì | 축구·골프·체스 등 12 |
| cách chơi / chiến thuật / luật tournament poker | cách chơi poker tournament · **cách chơi tour poker** · tournament poker là gì · chiến thuật poker tournament · **chiến thuật đánh tour poker** · chiến thuật chơi tour poker · luật poker tournament · **luật tour poker** · luật chơi poker tour | — |
| tour poker / đánh tour poker | **tour poker là gì** · tour poker đà nẵng · tour poker club · tour poker sài gòn · **đánh tour poker là gì · cách đánh tour poker · luật đánh tour poker · kinh nghiệm đánh tour poker · chiến thuật đánh tour poker · cách đánh tour poker online** | poker tour + 지역 9 |
| mtt poker | **mtt poker là gì** · mtt poker strategy · mtt poker charts | 영어·web3 토큰 12 |
| itm poker / itm là gì | **itm poker là gì** · itm poker calculator · poker itm icm · **itm là gì poker** | «itm là gì» 15 중 포커 1(학교·회사·FO4 등) |
| buy in poker / buy in là gì | **buy in poker là gì · buy in là gì trong poker** · buy in poker tournament · buy in poker cash game | 금융·영어 22 |
| satellite · bounty · deepstack · re entry · chip leader | **satellite poker là gì · bounty poker là gì · deepstack poker la gì · reg end poker là gì · reg end trong poker là gì · chip leader là gì · chip leader poker là gì** | 영어 변형 다수 |
| sng · sit and go · freezeout · final table | — | 영어 변형만 |
| cơ cấu giải poker | — | 🔴 cơ cấu giải power · jackpot(복권 Vietlott) |
| bubble là gì · bubble * | — | 버블티·K-pop·사전·bubble sort 등 **포커 0/15 · 0/15** |
| bubble poker | **bubble poker là gì** · bubble poker tournament · poker bubble boy · poker bubble protection · poker bubble factor · poker bubble time · stone bubble poker · money bubble poker · bubble trong poker | 영어 6 |
| bubble trong poker / bubble poker là gì | **bubble trong poker là gì · out bubble trong poker · bubble time trong poker · bubble poker la gi · bubble time poker là gì · out bubble poker là gì** | — |
| out bubble | **out bubble trong poker là gì · out bubble là gì** | 비포커 13 |
| short stack / short stack * / short stack là gì | short stack poker | 팬케이크·체형·헤어·밴드 등 **포커 1/15** |
| short stack poker | short stack poker strategy · tournament strategy · ranges · chart · cash games · deep stack vs short stack poker | 영어 9 |
| stack poker / stack trong poker | **stack poker là gì · stack trong poker là gì · avg stack trong poker là gì** | 🔴 앱 «Stack Poker» 7/15 |
| push fold / push fold poker | push fold chart(+ 10bb · 15bb · mtt) · push fold ranges · push fold calculator · range push or fold poker | 🔴 git «push folder» 4 · 차트·계산기 의도 11/15 |
| cash game / cash game * | **cash game vs tournament poker** · cash games poker · cash game poker online | 🔴 «cash games to earn money» 류 돈벌이 앱 |
| cash game là gì | **poker cash game là gì** | — |
| cash game và tournament | cash game vs tournament (poker) (strategy) · holdem cash game vs tournament strategy · texas holdem cash game vs tournament | DFS·reddit 6 |

와일드카드(브리프 지정 · 축어 전체):
- **\* trong poker là gì**: fold · thùng · flush · ante · **gtd** · raise · check · call · **itm** · flop · sảnh · straddle · blind · rake · pot (+ «trong poker là gì») → 토너먼트 용어 2/15(gtd · itm) · icm·bubble·stack은 이 슬롯에 없음
- **poker \* là gì**: poker là gì · poker là gì trong bóng đá · poker là gì cách chơi · poker face là gì · chơi poker là gì · bài poker là gì · dealer poker là gì · cú poker là gì · flush poker là gì · poker là trò gì · phỉnh poker là gì · straddle poker là gì · môn poker là gì · **giải poker là gì** · **itm poker là gì**
- **cách \* poker**: 15개 중 토너먼트 0(cách chơi poker 2 lá · 5 lá · cơ bản · online · giỏi · texas holdem · cho người mới bắt đầu …)
- **luật \* poker**: 15개 중 토너먼트 1(**luật poker tournament**)
- **\* poker tournament · giải \* poker**: 장소·일정 15/15

**관찰**: 현지 구어 «**tour**»(= tournament)가 자동완성 4계열에 독립 술어로 뜬다(cách chơi / chiến thuật đánh / luật / kinh nghiệm đánh **tour** poker). 경쟁 글 본문도 «out tour»(탈락)·«đánh tour»(토너먼트를 뛰다)를 쓴다(pokerbold H2 축어 «Nỗi sợ bị out tour»).

---

## 3. SERP 상위 10 + PAA (2704 · vi · desktop · 원자료 `serp-out.txt`·`serp2-out.txt`)

### 3-0. 🔴 오염 판정표 (유기 결과 중 포커 결과 수)

| 헤드 | 볼륨 | 포커/유기 | 판정 | 비포커 내역 | 포커 결과의 유형 |
|---|---:|---:|---|---|---|
| poker tournament | 210 | 10/10 | **있음 — 일정·장소** | — | 대회 DB·캘린더 4(pokerdiscover ×2 · pokercalendar.asia · poker.com) · 투어 SNS 2(VPT 인스타 · CPT) · 여행사 1 · 무료 게임 1(casino.org replaypoker) · 영상 1 → **해설 0** |
| giải poker | 70 | 9/9 | **있음 — 합법성·일정** | — | 합법성 기사 4(baophapluat · chinhphu · laodong · FB 법률 그룹) · 대회 3(VPT FB · vietmy VPT · APT series) · 해설 2(thegioipoker 상점 블로그 · GGPoker vi 형식표) |
| **icm là gì** | 140 | **0/10** | 🔴 **없음** | K-ICM(가수) 8 · 수학(Tao ICM 강연) 1 · 물리(쿨롱) 1 | — |
| icm poker | 110 | 9/9 | **있음 — 베트남어 0** | — | 영어 해설 4(pokerlistings · pokercoaching · coinpoker · betus) · 앱 2(Google Play · App Store ICM Calculator) · 소프트웨어 1(icmizer) · 외국어 2(br.pokernews · pokerpro.fr) |
| **bubble là gì** | 1,000 | **0/10** | 🔴 **없음** | 사전 4 · K-pop «Bubble» 앱 3 · 과학 1 · 버블티 1 · 의료 «Double Bubble» 1 | — |
| **short stack** | 390 | **2/10** | 🔴 **없음** | 밴드 Short Stack 5(spotify · pinterest · sputnik · tvtropes · youtube) · amazon 출판사 1 · 아이콘 1 · hinative 1 · KG=밴드 | reddit r/poker(tl=vi) 1 · pokernews 1 |
| cash game poker | 50 | 9/9 | **있음 — 베트남어 1** | — | 영상·방송 3 · reddit 2 · 영어 전략 1 · 칩 판매 1 · 뉴스 1 · FB 1 · fr 1 → 정의 글 0 |
| mtt poker(경량) | 50 | 8/9 | **있음 — 영어 포럼** | FB «MTT SPORT LAOS» 1(불명) | reddit 5 · 2+2 2 · YouTube 1 → 정의 글 0 |
| push fold(경량) | 10 | 10/10 | **있음 — 차트·도구** | — | 차트 PDF 2(scribd) · 도구 1(pokeree) · 사전 1(clubpoker) · PokerStars Learn 1 · 포럼·reddit 2 · 외국어 2 · YouTube 1 → 베트남어 1(reddit tl=vi) |
| giải poker là gì(경량) | 40 | 10/10 | **있음 — 합법성 우세** | — | **합법성 6**(laodong · FB 보건신문 «Bộ Công an» · chinhphu · congan quangninh · congly · vtv) · 해설 3(thegioipoker · GGPoker vi · wikipoker «Poker Tour là gì?») · 칼럼 1(tuoitre) |
| **mtt là gì**(신규) | 110 | **0/10** | 🔴 **없음** | 전자세금계산서 «hóa đơn … máy tính tiền» 9 · 기업 mtt.com.vn 1 · AIO 있음(비동기 · 본문 미반환) | — |

대조군(결합형 · 포커/유기 · 베트남어 해설 글 수 · 메모):
- bubble poker 10 · 7/8 · 4(wikipoker · GG vi · Natural8 · pokerqz) · 영어 1·2위 pokernews·upswing / bubble trong poker là gì 10 · 10/10 · 7(1위 GG vi 블로그 · 2 wikipoker FT버블 · 7 wikipoker money bubble · Natural8·GG 헬프 = 상품)
- short stack poker 10 · 9/9 · 0(1위 mosesbet 🔴 베팅 제휴) / stack trong poker là gì 10 · 10/10 · **정의 글 0**(FB 6 · reddit 3) / push fold là gì `-` · 10/10 · 2(wikipoker 1위 · Natural8 3위)
- icm poker là gì 20 · 9/10 · **ICM 정의 0** / icm trong poker là gì 10 · 9/9 · **ICM 정의 0** / poker tournament là gì 20 · 10/10 · **정의 0**(FB 클럽 7) / gtd trong poker là gì 30 · 10/10 · **정의 0**(인스타·FB 7)
- itm trong poker là gì 30 · 10/10 · 3(1위 wikipoker «ITM Poker là gì?» · firststep 용어집 · ai-hay)
- cash game là gì 10 · 8/10 · 0(Natural8 «Rush & Cash» 상품 · 비포커 «Cash King» 앱·«Cash shop») / cash game vs tournament poker 10 · 10/10 · 0(전부 영어)
- chiến thuật poker tournament `-` · 9/10 · 토너 전략 글 0(룰북·용어집 · tripmap «tổ chức giải» ×2 🔴 홈게임 개최) / cách chơi poker tournament 10 · 8/10 · 1(pokerbold 2018) / tour poker 30 · 9/10 · 0(WPT Vietnam · Royal Poker Tour · APT → 🪶)

### 3-1. 헤드별 축어 (PAA·related·KG 축어 · 유기 제목 전체 = `serp-out.txt` · cash game poker·mtt poker·push fold = PAA 없음 · KG «Cash game»(cash game poker))

- **poker tournament** — PAA·AIO 없음 · related: Poker tournament simulator · Bratislava Poker Tournament 2026 · Vietnam Poker tournament 2026 · Poker Tournament Asia · Vietnam poker tournament 2025 · Poker tournaments worldwide · Europe Poker Tournament · Cambodia poker tournament 2025
- **giải poker** — PAA 없음 · 1위 baophapluat «Chơi Poker ở Việt Nam khi nào là hợp pháp ...» · related: Giải Poker Việt Nam · Giải đấu Poker tại Việt Nam 2026 · Giải Poker là gì · Poker online · Giải Poker TPHCM · Giải poker phú quốc 2025 · Cách chơi poker · Poker có hợp pháp tại Việt Nam không
- **icm là gì** — 대표 nhanvatshowbiz «K-ICM là ai? Tiểu sử, năm sinh, chiều cao K-ICM» · **PAA**: ICM là viết tắt của từ gì? · ICM là ai? · ICM là gì trong marketing? · Công ty ICM của ai? → 포커 0/4
- **icm poker** — **KG «Independent Chip Model»** · AIO·FS 없음 · 1위 pokerlistings «Step-by-Step Guide to Poker ICM for Tournament Players» · **PAA(1문): Icm poker là gì?**
- **bubble là gì** — PAA 없음 · 대표 Sharetea «Bong bóng trong trà sữa trân châu là gì?»
- **short stack** — KG·carousel = 밴드 · **PAA**: What does it mean to short stack? · What's the opposite of a short stack? · What height is a short stack? · What is another word for "shortstack"?
- **giải poker là gì** — 1 tuoitre «Poker là cái chi chi…» · 9 wikipoker «Poker Tour là gì? Hướng dẫn cấu trúc, chiến thuật & lưu ý ...» · 10 vtv «Poker hay cờ bạc: Khi nào người chơi bước qua lằn ranh ...» · **PAA**: Poker là gì trong bóng đá? · Poker là bao nhiêu bàn? · Làm cách nào để chơi poker giỏi? → 🔴 «poker» = 축구 한 경기 4골 오염 2/3 · related: Giải Poker Việt Nam · Cách chơi poker là gì · Poker là may bàn · Giải đấu Poker tại Việt Nam 2026 · Giải Poker Hà Nội · Poker có hợp pháp tại Việt Nam không · Poker là môn thể thao gì · Poker có phải cờ bạc không
- **대조군 PAA**: «cách chơi poker tournament» = Làm cách nào để chơi poker dễ hiểu? · Có câu lạc bộ poker nào ở Sài Gòn không? · Bài nào trong Xì tố lớn nhất? / «cash game vs tournament poker»(영어) = What is more profitable, cash or tournament poker? · What does a cash game mean in poker? · What is the best strategy for winning in cash game poker? · How often do good poker players cash in tournaments? / «mtt là gì» = MTT viết tắt của từ gì? · Làm cách nào để gửi hóa đơn lên cơ quan thuế? · Hóa đơn MTT là gì? · MTT Assay là gì? / related «itm trong poker là gì» = Dominate trong Poker là gì · Giải Poker là gì · Flip poker là gì · Cù lũ Poker là gì · Môn Poker là gì · Sảnh poker là gì · Sảnh rồng trong Poker là gì · Đồng chất trong Poker

**SERP 기능 집계(26회)**: featured snippet **0** · AIO 1(«mtt là gì» · 비포커) · KG 3 · PAA 7회(토너먼트 질문으로 쓸 만한 것 = «Icm poker là gì?» 1 + 영어 4) · 동영상 팩 6회.
→ 🔴 **vi PAA는 이 레인에서 거의 안 뜬다**(fr은 헤드마다 4문). 글별 질문 표현은 자동완성 «… là gì» 축어로 확보했다(§9).

---

## 4. 상위 글 원문 정독 (헤딩 = DOM 축어 · 공통 내비·추천글 헤딩 제외 · 분량 = 본문 단어 수 근사 · 원문 전문 `pages-1/2/3.json`)

### 4-1. ICM (vi SERP에 정의 글이 없어 exa로 찾은 베트남어 글 2편 · 영어 1위 pokerlistings는 fr 0-2 §4-1에서 정독·검산 완료 → 생략)

**wikipoker.net/icm-poker-la-gi/** — ~3,060어 · 2024-07-12 / 수정 2025-03-13 · 🔴 **어느 vi SERP 상위 10에도 없음**
- H1: ICM Poker là gì? Cách tính toán, Ứng dụng & Những sai lầm cần tránh · H2: ICM Poker là gì? (H3: Khái niệm ICM trong poker · Ví dụ tính toán ICM trong Poker) · H2: Các kết luận quan trọng rút ra từ việc tính toán ICM Poker là gì? (H3: Kết luận số 1. "Bạn được nhận thêm equity khi có đối thủ bị loại khỏi giải đấu" · Kết luận số 2. "Bạn không nhân đôi được equity bằng cách nhân đôi stack của bạn" · Kết luận số 3: "Khi đánh Heads up, không có sự khác biệt giữa tối đa hóa chip và tối đa hóa equity") · H2: Q&A – Những câu hỏi thường gặp về ICM poker (H3: ICM có áp dụng được trong cash game không? · Cách để luyện tập sử dụng hiệu quả ICM? · Hạn chế của ICM poker là gì?) · H2: Kết luận
- 예시 = ICMizer 스크린샷(§4-6 ① ✅) · **계산 과정 0** — 축어 «Chúng ta sẽ đơn giản hóa việc tính toán bằng một phần mềm!»

**wikipoker.net/poker-icm/** — ~3,440어 · 2026-01-26 · 🔴 SERP 미출현(같은 사이트 두 글이 같은 의도 = 자기 카니발)
- H1: Poker ICM là gì? Cách áp dụng Independent Chip Model để chơi MTT hiệu quả · H2: Poker ICM là gì? · ICM ảnh hưởng đến các quyết định trong giải đấu như thế nào? (H3: Mẹo ICM #1: Fold nhiều hơn · #2: Chơi nhiều pot nhỏ hơn · #3: Gây áp lực nhiều hơn) · Cách luyện tập Poker ICM · Những hạn chế của ICM · ICM sẽ giúp bạn trở thành người chơi tốt hơn · FAQ – Các câu hỏi thường gặp về Poker ICM
- 수치 예시 0

### 4-2. 토너먼트

**wikipoker.net/poker-tour/** («giải poker là gì» 9위) — ~3,530어 · 2024-06-19 / 수정 2025-11-16 · **표 4**
- H1: Poker Tour là gì? Hướng dẫn cấu trúc, chiến thuật & lưu ý cho người mới · H2: Poker Tour là gì? (H3: Đặc điểm chính của poker tour · Các loại giải đấu poker phổ biến) · H2: Cấu trúc của một Poker Tour (H3: Buy-in và tiền thưởng · Cấu trúc tăng blind · Các giai đoạn của giải đấu → H4: Vòng mở đầu (Early Stage) · Vòng giữa (Middle Stage) · Bong bóng tiền (Bubble) · Bàn chung kết (Final Table)) · H2: Sự khác biệt giữa Poker Tour và Poker Cash game (H4: Về Cấu trúc · Về Chiến thuật · Mức độ rủi ro và Phần thưởng có thể giành được · Kỹ năng cần thiết) · H2: Những lưu ý quan trọng khi tham gia Poker Tour (H3 5) · H2: Q&A – Một số câu hỏi thường gặp về poker tour · H2: Kết luận
- 경험담 0 · 계산 1(§4-6 ⑥ ✅) · 정의 혼동(§4-6 ⑤ 🔴)

**thegioipoker.vn** («giải poker» 6위) «Các Giải Đấu Poker – Poker Tournament» — ~1,060어 · 2023-09 · 본문 헤딩 **0**(H3 전부 상점 위젯 «Xu Dằn Bài …» «Hỗ trợ: 0981.714.999») = 포커 용품 상점 블로그
**GGPoker vi 형식 페이지** («giải poker» 7위 · 직접 fetch 403 → exa) — 🔴 운영사 · H3: Giải đấu đảm bảo · **Đóng băng** · Giải đấu N-Stack · Tiền Thưởng Tăng Dần · Giải đấu Mua lại · Vệ tinh · **Mục tiêu Vệ tinh Ngăn xếp** · Giải Đấu Turbo · Giải Đấu Shootout · Giải đấu riêng (§4-6 ⑦) · PKO 축어 «một nửa số tiền thưởng của người chơi đó sẽ được thêm vào tiền thưởng của người chơi đã loại họ. Nửa còn lại … dưới dạng tiền mặt ngay lập tức» ✅
**pokerbold.com** («cách chơi poker tournament» 5위) «Những Điều Bạn Nên Biết Trong Poker Tournament (Phần 1)» — ~2,010어 · **2018** · Doug Polk 번역 · H1 2개(구조 결함) · H2: Phân tích của Doug · **Nỗi sợ bị out tour** · KẾT · H3: Ví dụ: 2016 WSOP Main Event – Qui Nguyen versus Gordon Vayo · Ví dụ: 2017 WSOP One Drop – Doug Polk versus Martin Jacobson
**wikipoker.net/itm-poker-la-gi/** («itm trong poker là gì» 1위) — ~2,580어 · 수정 2026-08-30 · H2: ITM Poker là gì? · Cách tính %ITM trong poker · Thế nào là một chỉ số ITM tốt? · Các yếu tố ảnh hưởng đến chỉ số ITM poker là gì? · 5 Bí kíp giúp bạn cải thiện chỉ số ITM poker · Kết luận · 번역어 축어 «ITM là viết tắt của thuật ngữ "In The Money" … được dịch ra là "Vào Tiền"» · 예시 «100 người … 10 người chơi đầu tiên … ITM sẽ là 10%» ✅

### 4-3. 버블

**wikipoker.net/chien-thuat-giai-doan-money-bubble/** («bubble poker» 3위 · «bubble trong poker là gì» 7위) — ~3,420어 · 수정 2026-06-05 · 표 0
- H2: Giai đoạn money bubble – Nỗi ám ảnh của người chơi nghiệp dư, cơ hội của dân chuyên · Chiến thuật giai đoạn money bubble #1 – Short stack (H3: Làm sao để short stack chơi tốt trong giai đoạn này? → H4: Nắm lấy cơ hội double-up · Đừng quá hấp tấp) · #2 – Medium stack (H3: Tấn công quyết liệt khi đối thủ sợ hãi · Chơi chắc chắn hơn khi đối thủ hiếu chiến · Đừng để tâm lý chi phối quyết định) · #3 – Big stack · Tổng kết – Cái nhìn toàn cảnh về chiến lược giai đoạn money bubble trong poker
- 구조가 EN bubble(BIG/MEDIUM/SHORT)과 같다 · **bubble factor·risk premium 0회** · ICM 수치 0 · 축어 «chỉ còn lại 100 người chơi, và 99 trong số đó sẽ nhận được tiền thưởng!» ✅

**wikipoker.net/chien-thuat-giai-doan-bubble-final-table-poker/** (2위) — ~3,900어 · 2024-10-22 · H2: Bubble Final Table vs. Bubble ITM · 3 Lý do để chơi hổ báo hơn (H3: Khi chơi tight là đúng đắn) · Cách chơi ở giai đoạn Bubble Final Table với mỗi kích thước stack (H3: Stack ngắn (15BB trở xuống) – NestaRasta, 1BigAceHole · Stack trung bình (16-28BB) – … · Stack an toàn (30-39BB) – … · Chipleader (40+ BB) – …) · Tổng kết → 실전 닉네임 사례 = 경험 신호 · EN «3 Bubbles»와 겹침

**GGPoker vi 버블 블로그** (1위 · exa) — 2024-03-08 «3 min Read» · 🔴 운영사 · H2: Khi Những Bong Bóng Bắt Đầu Vỡ · Giải Phẫu Bong Bóng Giải Đấu Poker · Gần Tiền Đến Mức Nào Là Quá Gần? · Xây Dựng Chiến Lược Bong Bóng Của Bạn · Kiểm Soát Cảm Xúc (H3: Đọc Đối Thủ Của Bạn · Kích Thước Chip Quan Trọng: Chọn Trận Đấu Của Bạn · Thời Gian Là Tất Cả) · Kết Luận: Bong Bóng → **수치 0 · 예시 0 · ICM 0회**(§4-6 ⑧) = 가장 약한 1위
**pokerqz.com/vi 용어집** (6위) — ~350어 · 예시 «100 người tham gia, nơi 20 người đứng đầu nhận prize money, thì tình huống của 21 người chơi còn lại được gọi là bubble» ✅
**Natural8 vi «Bảo vệ Bubble …»** (3위) — 🔴 실머니 상품(«Thưởng Gửi Tiền Lần Đầu Lên tới 1.000 USD») · 유형 집계만

### 4-4. 숏스택 (헤드 오염 → «push fold là gì»·stack 쪽 베트남어 글)

**wikipoker.net/chien-luoc-push-fold/** («push fold là gì» 1위) — ~2,140어 · 수정 2025-09-01 · H2: Chiến Lược Push/Fold Là Gì? · ICMIZER và Chip EV · Biểu Đồ Push/Fold 10bb (H3 5위치) · Biểu Đồ Push/Fold 15bb (H3 5위치 + Quan Sát Từ Các Biểu Đồ Push/Fold) · Kết luận · 축어 «Push/fold nên được sử dụng khi stack của bạn trở nên nhỏ — khoảng 15 big blinds (bb) trở xuống» (§4-6 ⑨⑩)
**Natural8 vi push-fold** (3위) — ~2,220어 · 🔴 운영사(Upswing 번역 구조) · H2: Chiến lược Push - Fold là gì? · Tại sao nên sử dụng chiến lược Push - Fold? · Tại sao không chỉ đơn giản là tăng cược? · Chơi chiến lược Push - Fold đúng cách · Push - Fold ở giai đoạn Bubble · Biểu đồ Push - Fold · **Conclusion**(번역 누락) (§4-6 ⑪)
**wikipoker.net/meo-choi-short-stack-poker/** — ~2,790어 · H2: 7 mẹo chơi short stack poker hiệu quả (H3: Mẹo #1: Học về các range preflop của bạn · #2: Chú ý kỹ đến kích thước stack hiệu dụng · #3: Xem xét khả năng chơi ở postflop · #4: Đừng shove all-in với quá nhiều big blinds · #5: Đừng chơi quá thụ động · #6: Đừng bao giờ chọn chơi short stack · #7: Chuẩn bị bankroll cho sự biến động) (§4-6 ③ 🔴)
**wikipoker.net/stack-size/** — ~2,900어 · H2: Stack size là gì? Stack size phân chia làm mấy loại? · Stack size ảnh hưởng đến lối chơi của bạn như thế nào? · Tầm quan trọng của stack size trong việc đọc xu hướng của người chơi · Sự khác biệt trong áp dụng Stack Size giữa Cash Game và Giải đấu · Ví dụ thực tế về stack size · Kết luận (§4-6 ④ 🔴)

### 4-5. 캐시게임 vs 토너먼트 (베트남어 SERP 0 → exa로 찾은 글)

**GGPoker vi «Loạt Hướng Dẫn Cho Người Mới Bắt Đầu: Trò Chơi Tiền Mặt hay Giải Đấu»** — 2022-12-28 · 🔴 운영사 · 번역어 «trò chơi tiền mặt»(직역 — 현지 자동완성은 «cash game» 그대로) · 축어 «Khi chúng ta đạt đến điểm đó [dưới 20BB], chúng ta đang ở trong cái được gọi là 'push-or-fold'» · 경험담 «Cá nhân tôi thích MTT … tôi sẽ lập luận rằng MTT khó hơn»
**choipoker.info/cash-game-poker-la-gi/** — ~2,570어 · **2026-09-11** · 🟡 성격 불명(본문에 실머니 유도 없음) · H2: Cash game poker là gì? · Cash game khác gì so với tournament? (H3: 1. Chip có giá trị trực tiếp · 2. Có thể vào và rời bàn linh hoạt · 3. Mức blind cố định · 4. Chiến lược ổn định hơn) · Cách một bàn cash game hoạt động · Luật cơ bản cần nắm khi chơi cash game · Ưu điểm của cash game poker · Nhược điểm và rủi ro cần lưu ý · Quản lý vốn cash game: yếu tố sống còn · Chiến lược cơ bản cho người mới chơi cash game · Khi nào nên rời bàn cash game? · Những lỗi thường gặp khi chơi cash game poker · Cash game poker có phù hợp với người mới không? · Kết luận → 수치 0 · 질문형 H2 5 — 우리 vs 글의 정의 H2 부재(§6)를 찌르는 경쟁 글
**ms8.jpn.com «Poker Tournament vs Cash Game: Nên Chơi Loại Nào?»** — 2026-02 · 🔴 **도박 제휴(유형 집계만)** · H2에 «Đánh giá E-E-A-T: Lời khuyên từ chuyên gia» 노출 · 과장 축어 «Thắng cực lớn (Gấp 100 – 1000 lần vốn)»
**wikipoker poker-tour §비교표 4개** = SERP에 걸린 유일한 베트남어 비교 콘텐츠(«giải poker là gì» 9위)

### 4-6. 경쟁 글 수치·정의 검산 요약

| # | 글 | 축어 | 검산 | 판정 |
|---|---|---|---|---|
| ① | wikipoker icm-poker-la-gi | 10인 50/30/20 · 스택 «$3.000, $2.000, $500, $4.500 và $5.000» → 1번 «từ 10% lên 21,88%» · «$10,94» | Malmuth-Harville 재귀(`icm.py`): **21.88% / 15.82% / 4.34% / 28.16% / 29.79%** · 0.2188 × $50 = $10.94 | ✅ 수치 정확 · 🟡 칩을 «$3.000»으로 달러 표기(칩≠돈을 설명하는 글에서 칩에 $ — 독자 혼동) · 과정 0 |
| ② | EN 마스터 holdem-icm(대조) | 5,000/3,000/2,000 · $50/30/20 → $38.39 / $32.75 / $28.86 | 같은 스크립트 **38.39 / 32.75 / 28.86** | ✅ 우리 예시 정확(vi 이식 시 수치 그대로) |
| ③ | wikipoker meo-choi-short-stack | H3 «Mẹo #4: Đừng shove all-in với quá nhiều big blinds» 아래 «Việc all-in 25 big blinds từ vị trí MP với hand như A♠ 5♦ **có thể là một lựa chọn tốt**. Tuy nhiên, tỷ lệ R:R … là không tốt» | 제목(하지 마라)과 첫 문장(좋은 선택일 수 있다)이 반대 — 원문 «might seem like / could work» 류의 오역으로 보임 | 🔴 자기모순 |
| ④ | wikipoker stack-size | «Short stack (≤40BB) Medium stack (41–90BB) Big stack (91–200BB) Deep stack (200BB+)» | 캐시게임 바이인 기준 분류. 같은 사이트 push/fold 글은 «khoảng 15 big blinds trở xuống», FT버블 글은 «Stack ngắn (15BB trở xuống)» | 🔴 사이트 내부 정의 충돌(토너먼트 숏스택 정의 부재) → 우리 EN «under about 20–25 big blinds, with push/fold … from around 15» + 캐시/토너 구분 한 줄이 차별 |
| ⑤ | wikipoker poker-tour | «Poker Tour (viết đầy đủ: Poker Tournament) … là một chuỗi các sự kiện poker được tổ chức tại nhiều địa điểm» | tour(순회 시리즈) ≠ tournament(단일 대회) | 🔴 개념 혼동 |
| ⑥ | wikipoker poker-tour | 100명 × $1,000(900 상금 + 100 수수료) → «$90,000» | 100 × 900 = 90,000 | ✅ |
| ⑦ | GGPoker vi tournament-types | «Đóng băng»(Freezeout) · «Mục tiêu Vệ tinh Ngăn xếp»(Target Stack) | 오역 | 🔴 용어(§13 아님 · 번역어 함정) |
| ⑧ | GGPoker vi 버블 | «người chơi chỉ còn vài lần bị loại nữa là đến tiền thưởng» | 버블 = 다음 1명 탈락이면 전원 입상(pokerqz «21 người … 20 người đứng đầu» ✅ · wikipoker «100 … 99» ✅) | 🟡 니어 버블과 혼용 |
| ⑨ | wikipoker push-fold | «+0.20cEV mỗi hand … 20bb trên 100 hand» | 0.20 × 100 = 20 | ✅ |
| ⑩ | wikipoker push-fold | «JTs … gần 40% … A3o … khoảng 30%» vs «range khá mạnh» | 상대 레인지 미기재 | 🟡 검산 불가 — 우리는 레인지 명시 + 계산기 링크 |
| ⑪ | Natural8 vi push-fold | BTN·CO 10bb «gần 50% tay bài» | 앤티·참가자 수 미기재 · BTN/CO 합산 | 🟡 보류(차트 이미지 의존) |
| ⑫ | wikipoker ITM | «ITM tốt 14–18% · xuất sắc 18–22%» | 출처 없음 | 🟡 인용 금지 |

**요약**: 베트남어 상위 글의 ICM·상금 산수는 맞다(①⑥⑨). 틀린 곳은 **정의·번역**(③④⑤⑦⑧)이고, **계산 과정을 보여 주는 글은 0**이다. → 차별 = (a) 손으로 따라가는 ICM 재귀 1회 (b) 토너먼트 숏스택 BB 구간을 캐시게임과 갈라 명시 (c) 버블·니어 버블·FT 버블·위성 버블을 축어 정의로 분리 (d) 형식 이름 영어 원어 + 풀이.

---

## 5. 장단점 표

| 축 | 상위 글 공통 강점 | 공통 약점(= 우리 차별 지점) |
|---|---|---|
| ICM | wikipoker 2편이 Kết luận 3개(«không nhân đôi được equity…») · 팁형 H3 3개 · 한계 H2 | **SERP에 안 걸린다**(정의 SERP 공석) · 계산 과정 0(ICMizer 스크린샷) · ICM deal / chip chop 0 · bubble factor·risk premium 0 · 칩에 $ 표기 |
| 토너먼트 | wikipoker poker-tour = 단계 4(Early/Middle/Bubble/FT) · 비교표 4 · FAQ | tour/tournament 혼동 · 형식 오역(GG «Đóng băng») · ITM·GTD·late reg·re-entry 정의가 각 글에 흩어짐 · «poker tournament là gì»·«gtd trong poker là gì» 정의 글 **SERP 0** · 상위가 합법성 기사·클럽 SNS |
| 버블 | wikipoker 2편 = 스택별 3~4분할 · 실전 닉네임 사례 | 1위(GG vi)가 수치 0 수필 · bubble factor·risk premium **0회** · 위성 버블(AA 폴드) 0 · hand-for-hand·stalling 0 · «out bubble»(구어) 정의 0 |
| 숏스택 | push/fold 차트 2편(10bb·15bb · 위치별) | 숏스택 BB 정의 충돌(≤40BB vs ≤15BB) · 자기모순 1 · M-ratio 0 · «shove vs call 레인지 차이» 0 · 레인지 미기재 에퀴티 |
| vs | wikipoker 비교표 · GG vi 경험담 1줄 · choipoker 정의 H2 | 베트남어 비교 글이 SERP에 0(영어 SERP) · ICM을 «bỏ một đôi Q» 수준으로만 언급 · 뱅크롤 수치 출처 없음 · 제휴 사이트(ms8) 섞임 |
| 공통 | 베트남어 + 영어 차용어 혼용(현지 표기 정확) · 목차 · 길이 2,000~3,900어 | 표 0~1(wikipoker는 이미지 77~93장으로 대체) · 경험담 거의 0 · 수정일만 갱신 · featured snippet 0 = 직답 블록 경쟁 없음 |

---

## 6. 우리 글 대조

### 6-1. holdem-tournament-vs-cash-game (vi판 있음 · 현 메타·헤딩 축어)

- seoTitle: «Chip không phải lúc nào cũng là tiền — Tournament hay Cash Game?»
- desc: «Cash Game và Tournament đều là Texas Hold'em, nhưng giá trị chip, blind, bankroll, variance và áp lực ICM rất khác nhau. Đây là so sánh dễ hiểu cho người mới.»
- H1(title): «Poker Tournament hay Cash Game: người mới nên chơi gì?»
- H2: Khác biệt cốt lõi giữa Cash Game và Tournament · Chip trong Tournament không phải tiền mặt · Blind cố định hay blind tăng dần? · Thời gian và quyền rời bàn · Cấu trúc lợi nhuận và variance · Bankroll: Tournament cần đệm dày hơn · ICM: khái niệm Tournament mà Cash Game không có · Deep stack vs short stack push/fold · Người mới nên bắt đầu từ đâu? · Ở phòng poker live: hỏi gì trước? (+ H3 «Câu trả lời trong 15 giây»)
- FAQ 6: Tournament có khó hơn Cash Game không? · Tournament có lời hơn Cash Game không? · Người mới nên bắt đầu Cash Game hay Tournament? · ICM có quan trọng trong Cash Game không? · Re-entry Tournament có giống Cash Game không? · Cần bao nhiêu buy-in cho Cash Game và Tournament?

| 대조 | 판정 |
|---|---|
| EN H2 «What Is a Cash Game in Poker? (Rules & How It Works)» | 🔴 **vi에서 빠짐** — 자동완성 «poker cash game là gì»·«cash game là gì»(10)이 받는 정의 H2. SERP «cash game là gì»에 정의 글 0 → 질문형 H2로 복원 |
| EN H2 «Are Cash Games Harder…» · «More Profitable? bb/100 vs Tournament ROI» · «When to Leave…» | vi는 «Cấu trúc lợi nhuận và variance»·«Thời gian và quyền rời bàn»으로 압축 — 질문형이 아님(영어 PAA «What is more profitable, cash or tournament poker?»에 맞춰 질문형 개명 후보) |
| EN FAQ 10 vs vi FAQ 6 | 빠진 것: «How many big blinds should you start with…» · «How many chips do you need for a home cash game?»(🟡 홈게임 = 개최 의도 · 칩 개수 질문은 무해 → 선택) · «Do professional players play cash games or tournaments?» · «Do you get taxed…»(🔴 세금 = 법률 축 — vi 제외 유지) |
| 표기 | 본문 «Tournament» 61 vs «giải đấu» 6 — 현지 21쪽 집계 giải đấu 352 : tournament 97. 🔴 «giải đấu»를 병기·주력으로(«Tournament (giải đấu)») · 구어 «tour»/«đánh tour» 1회 이상 |
| 이미 이기는 점 | 질문형 FAQ 6 · ICM H2 · 뱅크롤 H2 · live 룸 질문 H2 = 베트남어 상위 글에 없는 구성 · 경쟁 vi 비교 글은 SERP에 없음 |

### 6-2. 나머지 4편 (EN 마스터 H2·FAQ ↔ 베트남 의도)

| slug | EN에 이미 있고 vi 의도와 맞는 것 | vi 의도인데 EN에 없는 것 | EN에 있지만 vi에서 빼거나 낮출 것 |
|---|---|---|---|
| holdem-icm | «What Is ICM in Poker?»(= icm poker là gì) · «How Is ICM Calculated? (The Malmuth–Harville Model)» · ICM vs Chip EV(chip ev 10) · ICM Deal vs Chip Chop(deal icm poker là gì 10 · icm deal 10) · Bubble Factor & Risk Premium · Limitations · FAQ «Does ICM apply to cash games?»(= wikipoker H3 «ICM có áp dụng được trong cash game không?») | «ICM là viết tắt của từ gì?»(PAA 축어 · 비포커 SERP지만 질문형은 그대로 유효) · 칩 ≠ 달러 표기 원칙 | — (오염 «icm là gì» 단독은 조준 안 함 · K-ICM 언급 금지) |
| holdem-tournament | 정의(30-Second Answer) · 구조(buy-in·fee·stack) · blind 구조 · 4단계 · 형식(Freezeout·PKO·Satellite·Deepstack) · ITM FAQ · 참가 방법 · Day 1 | **GTD**(gtd trong poker là gì 30 · EN 없음) · **late reg / reg end**(reg end poker là gì · AC) · **re-entry vs rebuy**(EN은 FAQ «rebuys and add-ons»만) · **SNG/sit and go**(20) · «chip leader là gì» · «avg stack» · tour vs tournament 구분 · «out tour»/«đánh tour» 구어 | 🔴 FAQ «Is it legal to host a poker tournament at home?» = **합법성 축 → 삭제** · «Option A: Direct Buy-In at the Casino»(카지노 출입 = 금지 축 인접 → 일반화 «tại phòng poker»/대회장 또는 축소) · «Option B: Online Pre-Registration»(온라인 = 사이트 축 인접 → 운영사명 없이) · 일정·장소는 `/vi/tournaments` 링크로 위임 |
| holdem-bubble | 정의(«On the Bubble») · 3 Bubbles(Money·FT·Satellite = wikipoker FT버블 글과 맞대응) · 스택별 3 H2 · Bubble Factor · Hand-for-Hand · Satellite AA 폴드 · FAQ bubble boy / stone bubble / burst | «out bubble là gì»(10 · 구어) · «bubble time»(AC «bubble time trong poker» = hand-for-hand의 현지 표현으로 보임 — 🟡 원문 확인 전 동치 단정 금지) · «money bubble»(10) | «bubble protection»(10)은 운영사 상품 → 언급 시 일반명사 한 줄, 조준 금지 |
| holdem-short-stack | 정의(«How Many Big Blinds») · Fold Equity · M-Ratio · 위치별 셔브 · Shove vs Call · Push/Fold 차트 사용법 · Bubble ICM Twist · 5 Mistakes · FAQ «What is push/fold strategy?» | «stack trong poker là gì»·«stack poker là gì»·«avg stack trong poker là gì»(정의 FAQ) · 숏스택 캐시 vs 토너 정의 차이(wikipoker ≤40BB 혼선 정면 처리 · EN FAQ «Is short-stack strategy different in cash games?»가 이미 받음 → H2급 승격 후보) | 차트 본체는 도구(`/vi/calculator` Push/Fold «Bảng Nash»)에 위임 |

### 6-3. vi 도구가 받는 의도

- `/vi/calculator`(9개 도구 · seo title «Poker Calculator — Máy tính xác suất poker: equity, pot odds» · desc에 «ICM deal và push/fold» · 칩 «📈 ICM» «⚡ Push/Fold» · ICM 가이드 H2 «Cách dùng máy tính ICM — ví dụ bubble trong 3 phút» · FAQ 3문 «Dùng máy tính ICM như thế nào?» «"Giá trị ICM" trong máy tính này nghĩa là gì?» «Khi nào nên dùng máy tính ICM?») → «icm poker calculator»·«icm calculator»·«push fold chart»·«push or fold»·«all in or fold»는 **도구 몫**.
- `/vi/tournaments`(metaTitle «Giải poker 2026 — {next} từ {mmdd}» / 폴백 «Lịch giải poker 2026 — Poker Tournament») → «giải poker»·«poker tournament»·«giải poker hà nội/việt nam»·«vietnam poker tour»·«tour poker»·«giải đấu poker tại việt nam 2026»은 **보드 몫**(관찰만).
- `/vi/hand-chart` → 이 레인 의도 없음(«push fold» 차트는 calculator Push/Fold 탭).

---

## 7. 처방 (레인 A 재료 — 카피는 방향만 · 최종 seoTitle·desc는 쓰지 않는다)

### 7-1. holdem-icm — 우선순위 **1** (icm poker 110 + là gì 20 × **베트남어 정의 SERP 공석**)
- 주력어: «icm poker» · «icm poker là gì» · «icm trong poker là gì». 🔴 «icm là gì» 단독 조준 금지(K-ICM).
- 훅 재료: «chip ≠ tiền» · «một nửa số chip nhưng chỉ 38,4% tiền thưởng»(EN 예시 수치 · 검산 ✅).
- H2 후보(축어 맞춤): «ICM poker là gì?» · «ICM là viết tắt của từ gì?»(PAA 축어 · 정의 직답 블록) · «Cách tính ICM trong poker (mô hình Malmuth–Harville)» · «ICM và chip EV khác nhau thế nào?» · «Deal ICM là gì? ICM deal và chip chop»(«deal icm poker là gì» 축어) · «Bubble factor và risk premium» · «ICM có áp dụng trong cash game không?»(wikipoker H3와 같은 질문 — FAQ로) · «Hạn chế của ICM».
- FAQ 후보: Icm poker là gì?(PAA 축어) · ICM là viết tắt của từ gì? · Deal ICM poker là gì? · ICM có áp dụng được trong cash game không? · Khi nào nên bỏ qua ICM?
- 차별: 3인 재귀를 «người dẫn đầu về nhì 33,9%» 한 줄까지 손으로 · 칩은 «chip», 돈만 «$»(경쟁 글 ① 혼동 회피) · ICM deal vs chip chop 표.
- 카니발: 계산 본체는 `/vi/calculator` ICM 탭 링크 · bubble/short-stack/vs/tournament 글의 ICM 단락은 앵커 위임(§8-⑤).

### 7-2. holdem-tournament — 우선순위 **2** (헤드는 일정·합법성 SERP · 정의·용어 롱테일 SERP 공석)
- 주력어: «poker tournament là gì»(20) · «giải đấu poker là gì»(10) · «cách chơi poker tournament»/«cách đánh tour poker»(10) + 용어 롱테일 ITM(30·30·20) · GTD(30) · buy in(30·20) · SNG(20).
- 훅 재료: 처음 «đánh tour» 하는 사람의 Day 1 · 바이인 1번으로 몇 시간.
- H2 후보: «Poker tournament là gì?» · «Cấu trúc giải đấu: buy-in, phí, stack khởi điểm» · «Cấu trúc blind trong giải đấu poker»(wikipoker H1 축어 계열) · «4 giai đoạn của một giải đấu» · «Các loại giải đấu: Freezeout, PKO, Satellite, Deepstack, Sit & Go» · «ITM trong poker là gì?»(H3/FAQ) · «GTD trong poker là gì?»(H3/FAQ · **EN 없음 → 추가**) · «Late reg, reg end, re-entry và rebuy»(**추가**) · «Chiến thuật đánh tour theo giai đoạn» · «Cơ cấu trả thưởng».
- FAQ 후보: ITM poker là gì? · GTD trong poker là gì? · Buy in poker là gì? · Reg end trong poker là gì? · Chip leader là gì? · Giải đấu poker kéo dài bao lâu?(AC 빈 결과지만 EN FAQ 축) · Tour poker và tournament khác nhau thế nào?
- 차별: 상금 구조 수치 예시(검산) · 형식 이름 영어 원어 + 풀이(GG «Đóng băng» 오역 대비) · tour/tournament 갈라 쓰기.
- 🔴 삭제/축소: 합법성 FAQ · 카지노 직접 바이인 · 온라인 사전등록 운영사명. 일정·장소 = `/vi/tournaments` 링크 1회.

### 7-3. holdem-tournament-vs-cash-game — 우선순위 **3** (vi 있음 · cash game poker 50 + cash game 40 · 베트남어 비교 SERP 0)
- 주력어: «cash game poker» · «cash game là gì»/«poker cash game là gì» · «cash game vs tournament».
- 훅 방향: 현 seoTitle 훅(«Chip không phải lúc nào cũng là tiền») 유지 가능 — 키워드 보강만(«cash game» 앞쪽 · «giải đấu» 병기).
- H2 후보(개명/추가): **추가** «Cash game poker là gì?»(EN «What Is a Cash Game in Poker?» 복원) · 개명 «Cấu trúc lợi nhuận và variance» → «Cash game hay tournament lời hơn? (bb/100 và ROI)» · 개명 «Thời gian và quyền rời bàn» → «Khi nào nên rời bàn cash game — và vì sao không thể rời tournament?» · 본문 «Tournament» 단독 → «Tournament (giải đấu)»/«giải đấu» 주력.
- FAQ 후보 추가: «Cash game là gì?» · «Nên bắt đầu với bao nhiêu big blind trong cash game và tournament?»(EN FAQ) · «Dân chuyên chơi cash game hay tournament?»(EN FAQ). 세금 FAQ는 계속 제외.
- 차별: 이미 우세(질문형 FAQ·ICM H2·live 룸 체크리스트). 정의 H2 하나가 빠진 갭.

### 7-4. holdem-bubble — 우선순위 **4** (결합형 10×6 · 1위가 수치 0 수필 = 이길 수 있는 SERP)
- 주력어: «bubble trong poker là gì» · «bubble poker» · «money bubble poker» · «out bubble là gì». 🔴 «bubble là gì» 단독 조준 금지.
- H2 후보: «Bubble trong poker là gì? ("on the bubble", out bubble)» · «Vì sao bubble thay đổi mọi thứ: ICM trong một đoạn» · «3 loại bubble: money bubble, bubble bàn chung kết, bubble vệ tinh»(wikipoker «Bubble Final Table vs. Bubble ITM» 대응) · «Big stack / Medium stack / Short stack ở giai đoạn bubble» · «Bubble factor và risk premium» · «Hand-for-hand» · «Vì sao fold AA ở bubble vệ tinh?».
- FAQ 후보: Bubble trong poker là gì? · Out bubble trong poker là gì? · Bubble boy là ai? · Có nên fold ở bubble không? · Hand-for-hand là gì?
- 차별: bubble factor 수치(경쟁 0회) · 버블 정의 «1명 더 탈락하면 전원 입상»(GG «vài lần» 혼동 교정) · 위성 버블 AA 폴드.
- 주의: bubble protection(운영사 상품) 비조준 · ICM 정의는 holdem-icm 앵커.

### 7-5. holdem-short-stack — 우선순위 **5** (헤드 오염 · push fold는 도구 몫 · 정의 질문만 남음)
- 주력어: «short stack poker»(10) · «stack trong poker là gì»(10) · «push fold là gì»(`-` · SERP는 vi 2편) · 보조 «short stack là gì».
- H2 후보: «Short stack trong poker là gì? Bao nhiêu big blind?» · «Stack trong poker là gì — stack, effective stack, avg stack»(AC «avg stack trong poker là gì») · «Vì sao short stack chơi push/fold: fold equity» · «Chỉ số M (vùng Harrington)» · «Khi nào all-in theo độ sâu stack và vị trí» · «Shove và call shove: hai range khác nhau» · «Short stack ở bubble» · «Short stack trong cash game khác giải đấu thế nào?»(wikipoker ≤40BB 혼선 정면).
- FAQ 후보: Short stack là bao nhiêu big blind? · Push fold là gì? · Stack poker là gì? · M-ratio là gì?
- 차별: BB 구간 표(캐시/토너 분리) · 레인지 명시한 에퀴티 · `/vi/calculator` Push/Fold 탭 링크.
- 카니발: 차트 = 도구 · ICM = holdem-icm 앵커.

---

## 8. 0-3 판정 재료 (판정 안 함 — 증거 + 권고 1줄)

### 8-① 일정 의도(관찰만 · `/vi/tournaments`)
- 증거: «poker tournament» 유기 10/10 일정·장소·클럽(해설 0) · related 8 중 7이 도시·연도·지역(«Vietnam Poker tournament 2026» 등) · 자동완성 «giải poker» 15 중 **장소·대회 13**(việt nam · hà nội · thế giới · tphcm · lớn nhất thế giới · hạ long · sài gòn · phú quốc 2025 · đà nẵng · triton · phú quốc · quốc tế · hải phòng) + online 1(금지) + là gì 1 · «giải đấu poker» 12 중 장소·연도 10 · «tour poker» 30 = WPT Vietnam·Royal Poker Tour·APT · 신규 볼륨 giải poker việt nam 50 · hà nội 50 · vietnam poker tour 40 · tour poker 30 · giải đấu poker tại việt nam 2026 20.
- **권고**: «giải poker»·«poker tournament»·장소·연도는 보드(현 metaTitle «Giải poker 2026 — …» 그대로) 소유, holdem-tournament는 «là gì»·구조·용어 롱테일만 — 글에서 보드로 링크 1회.

### 8-② 🔴 합법성 축이 토너먼트 SERP를 덮는다
- 증거: «giải poker» 9 중 4 · «giải poker là gì» 10 중 6 · related «Poker có hợp pháp tại Việt Nam không» «Poker có phải cờ bạc không» · 자동완성 «poker tournament có hợp pháp không».
- **권고**: 금지 축 유지 — EN holdem-tournament FAQ «Is it legal to host a poker tournament at home?» vi 삭제 · 카지노 바이인 단락 일반화. 이 SERP들은 조준하지 않는다(정의 롱테일로 우회).

### 8-③ ICM 소유: holdem-icm ↔ `/vi/calculator`
- 증거: 정의 SERP(«icm poker là gì» 20 · «icm trong poker là gì» 10)에 ICM 정의 글 0 · «icm poker»(110) 유기 중 계산기 앱 2 + 소프트웨어 1 · 자동완성 «icm poker» 15 중 계산기·앱·도구 7(calculator · calculator app · chip calculator · app · calculator online · tool · formula?) · calculator가 이미 ICM 탭 + «ví dụ bubble trong 3 phút» + FAQ 3.
- **권고**: «icm poker»·«là gì»·«deal» = 글, «icm (poker) calculator» = 도구. 글의 계산 예시 아래 도구 링크, 도구 ICM 가이드에서 글로 «ICM là gì» 앵커.

### 8-④ push/fold
- 증거: «push fold» 유기 10 = 차트 PDF·도구·사전, 베트남어 1 · «push fold poker» 자동완성 11/15 차트·계산기 · «push fold là gì» vi SERP = wikipoker·Natural8 차트 글.
- **권고**: 차트·«push or fold»·«all in or fold» = `/vi/calculator` Push/Fold 탭 소유 유지, short-stack 글은 «push fold là gì» 정의 H2 + 도구 링크만.

### 8-⑤ ICM 중복 정의
- 증거: EN 4편이 각자 ICM 설명(vs «ICM: The Tournament Concept Cash Games Do Not Have» · bubble «ICM in One Paragraph» · short-stack «The ICM Twist» · tournament 용어집) · vi vs판도 H2 «ICM: khái niệm Tournament mà Cash Game không có» 보유 · wikipoker는 ICM 글 2편이 서로 카니발되어 둘 다 SERP 미출현.
- **권고**: 네 글의 ICM 단락은 2~3문장 + holdem-icm 앵커, «ICM là gì» 정의형 H2 금지(fr §8-⑤ · tr L4와 같은 처방).

### 8-⑥ 오염 헤드 볼륨 표기
- 증거: icm là gì 140(0/10) · bubble là gì 1,000(0/10) · short stack 390(2/10) · mtt là gì 110(0/10) · itm là gì(자동완성 1/15) · cơ cấu giải poker(자동완성 = 복권).
- **권고**: `vi-core-volumes.md` 소유표에서 넷 다 «오염» 표기 · 우선순위 계산에서 제외(결합형 수치만 사용).

### 8-⑦ 구어 «tour»
- 증거: 자동완성 «cách chơi tour poker» «chiến thuật đánh tour poker» «luật tour poker» «kinh nghiệm đánh tour poker» · 정독 21쪽 «tour» 69회/7쪽 · pokerbold H2 «Nỗi sợ bị out tour» · 볼륨 cách đánh tour poker 10 · kinh nghiệm đánh tour poker 10.
- **권고**: 토너먼트 5편 vi 본문에 «đánh tour»/«out tour»를 현지 표현으로 1~2회 병기(H2 주력어는 «giải đấu»/«tournament» 유지) — 다국어 용어 사전(`multilingual-localization.mdc` vi) 등재 후보.

---

## 9. 커버리지 표

0 오염 판정 · 1 자동완성 · 2 새 볼륨 · 3 SERP+PAA · 4 원문 정독

| 검색어 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| **poker tournament** | ✅ 10/10 일정 | ✅ | ✅ 0-1 · là gì 20 | ✅ related | ✗ 해설 0(캘린더·클럽) → wikipoker poker-tour로 갈음 |
| **giải poker** | ✅ 합법성 4·일정 3 | ✅ | ✅ 장소형 5 | ✅ related | ✅ thegioipoker · GG vi 형식(exa) · 합법성 기사 = 집계만 |
| **icm là gì** | ✅ **0/10** | ✅ 빈 결과 | (0-1) | ✅ PAA 4 비포커 | ✗ 포커 글 0 → icm poker 계열로 대체 |
| **icm poker** (+ là gì · trong poker là gì) | ✅ 9/9 · 정의 글 0 | ✅ | ✅ 7어 | ✅ PAA 1 · KG | ✅ wikipoker 2편(exa · ① 검산) · pokerlistings = fr 승계 |
| **bubble là gì** | ✅ **0/10** | ✅ 비포커 15 | (0-1) | ✅ | ✗ 포커 글 0 → bubble poker 계열로 대체 |
| bubble poker · bubble trong poker là gì | ✅ 7/8 · 10/10 | ✅ | ✅ 6어 | ✅ 영상 | ✅ wikipoker 2 · GG vi(exa) · pokerqz · Natural8(집계만) |
| **short stack** | ✅ **2/10**(KG 밴드) | ✅ 포커 1/15 | (0-1) | ✅ PAA 4 비포커 | ✗ 포커 2 = 영어 → 아래로 대체 |
| short stack poker · stack trong poker là gì | ✅ 9/9 · 10/10 | ✅ | ✅ 6어 | ✅ | ✅ wikipoker 숏스택(🔴③) · stack-size(🔴④) |
| **cash game poker** (+ là gì · vs tournament) | ✅ 9/9 · 8/10 · 영어 | ✅ | ✅ 3어 | ✅ KG · PAA 영어 4 | ✅ GG vi 가이드(exa) · choipoker · ms8(집계만) · wikipoker 비교표 — 베트남어 비교 글 SERP 0 |
| mtt poker(경량) | ✅ 8/9 | ✅ | ✅ là gì 10 | ✅ | ✗ 정의 글 0(포럼) = 빈 SERP |
| **mtt là gì**(신규) | ✅ **0/10**(세금계산서) | ✅ 빈 결과 | ✅ 110 | ✅ AIO · PAA 비포커 | ✗ 포커 0 |
| push fold(경량) (+ là gì) | ✅ 10/10 차트 | ✅ | ✅ 4어 | ✅ | ✅ wikipoker · Natural8 vi |
| giải poker là gì(경량) | ✅ 합법성 6/10 | ✅ | ✅ 10 | ✅ PAA 3(축구 2) · related | ✅ wikipoker poker-tour(🔴⑤ ✅⑥) |
| itm · gtd · buy in · sng · satellite · bounty · freezeout · deepstack · reg end · chip leader · tour | ✅ itm 단독 오염 | ✅ | ✅ §1-B | ✅ itm · gtd · tour · cách chơi / chiến thuật poker tournament | ✅ wikipoker ITM · pokerbold · GG 형식(🔴⑦) — gtd 정의 글 0 |

### 글별 «PAA·자동완성 질문 확보»

| slug | 확보한 질문(축어) | 판정 |
|---|---|---|
| holdem-icm | Icm poker là gì?(PAA) · ICM là viết tắt của từ gì?(PAA) · icm trong poker là gì · icm poker la gi · deal icm poker là gì · icm poker strategy · ICM có áp dụng được trong cash game không?(wikipoker H3) | ✅ |
| holdem-tournament | poker tournament là gì · giải đấu poker là gì · giải poker là gì · tour poker là gì · đánh tour poker là gì · cách chơi poker tournament · cách đánh tour poker · luật poker tournament · itm trong poker là gì · gtd trong poker là gì · buy in poker là gì · satellite / bounty / mtt poker là gì · reg end trong poker là gì · chip leader là gì | ✅ |
| holdem-bubble | bubble trong poker là gì · bubble poker là gì · out bubble trong poker là gì · out bubble là gì · bubble time poker là gì · poker bubble boy · poker bubble factor · stone bubble poker · money bubble poker | ✅ |
| holdem-short-stack | short stack là gì · stack trong poker là gì · stack poker là gì · avg stack trong poker là gì · push fold là gì · short stack poker strategy / ranges / chart · deep stack vs short stack poker | ✅ |
| holdem-tournament-vs-cash-game | poker cash game là gì · cash game là gì · cash game vs tournament poker (strategy) · What is more profitable, cash or tournament poker?(PAA) · What does a cash game mean in poker?(PAA) | ✅ |

✗ 사유: 오염 헤드 4개는 포커 글 0(결합형으로 대체 정독) · «poker tournament»·«mtt poker»·«gtd»·«cash game là gì»는 상위에 정독할 해설 글 없음(빈 SERP = 기회) · GGPoker vi 직접 fetch 403 → exa 전문(✅) · Natural8 Bubble Protection·ms8은 실머니·제휴라 유형 집계만. **글별 질문 확보 ✗ 0.**
