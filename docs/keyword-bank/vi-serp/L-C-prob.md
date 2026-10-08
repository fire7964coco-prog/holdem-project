# L-C 확률 — vi SERP 조사 (vi 클러스터 0-2 · 2026-10-08)

> 브리프 = `00-brief.md` · 대상 7편(vi 신규 · EN 마스터 `lib/posts-en/<slug>.ts`): probability · pot-odds · outs · drawing-odds · implied-odds · equity · card-counting.
> 볼륨 정본 = `vi-core-volumes.md`(재측정 안 함) · 계산 의도 정본 = `vi-tools.md`(`/vi/calculator` 경계 승계 → §8).
> 도구: DFS 자동완성(2704 · vi · chrome · 55시드) · 볼륨(2704 · vi · 신규 87) · organic SERP(2704 · vi · desktop · depth 10 · **29쿼리** = 헤드 9 + 보조 8 + 오염 판정 6 + 베트남어 구문 6) · 원문 = node fetch로 H1~H4 **프로그램 추출**(축어) + GGPoker 2편은 지역 차단(403)이라 exa 전문.
> 경쟁 글 수치는 **전부 다시 계산** — 매치업은 보드 1,712,304개 전수 열거(지정 수트 1조합 · 에퀴티 = 승 + 무/2), 플롭 이후는 남은 보드 전수(990 / 44), 아웃츠는 조합식. 원자료 = `tmp/vi/L-C/`(ac · vol · serp · serp2 · serp3 · pages-1 · eq.mjs).

---

## 0. 한 줄 결론 (레인 A가 먼저 읽을 것)

1. **vi 확률 SERP는 «베트남어 원문 공급이 거의 없다».** 상위의 상당수가 **기계번역 대체물** — reddit `?tl=vi` 자동번역(«tỷ lệ thắng poker» 7/10 · «equity poker» 4/8)과 구글 번역 프록시 `google.com/goto`(«pot odds trong poker» **7/9**). 베트남어 해설 글은 GGPoker·Natural8(운영사 번역) · pokerbold(2022 · 표 전부 이미지) · wikipoker(pokercoaching 번역) · pokerqz(일본 앱 번역)뿐 → **처음부터 베트남어로 쓴 정확한 글 자리가 비어 있다.**
2. **볼륨은 7편 전부 10~50이다**(0-1 승계: poker odds 50 · equity poker 30 · pot odds 20 · 나머지 10). 이번 신규 87개도 포커 결합형은 전부 10~50 · null. 큰 숫자 3개(**draw là gì 1,900 · drawing hand 1,000 · ev là gì 880**)는 SERP 포커 **0/10**(사전·그림·전기차·전자볼트) → 오염 확정. «equity là gì» 2,400도 포커 0(금융 10/10 · AI overview «vốn chủ sở hữu») · «pocket pair» 260 = Palworld 개발사 · «card counting» 70 = 블랙잭 10/10.
3. **검색 술어 = 영어 머리어 + «là gì / trong poker / cách tính»**(vi-tools §1과 같은 결론). 베트남어 풀이어(«tỷ lệ cược ngầm» · «quy tắc 2 và 4» · «đếm bài trong poker» · «xác suất ra thùng phá sảnh»)는 볼륨 null. 단 **자동완성이 베트남어 질문형을 준다**: «cách tính xác suất poker» · «bảng xác suất poker» · «pot odds là gì / pot odd là gì» · «equity poker là gì / equity trong poker là gì» · «cách tính equity trong poker» · «ev là gì trong poker» · «cách đếm bài poker» · «tỷ lệ thắng trong poker» — 이게 H2·FAQ 재료다.
4. **1위권 경쟁 글에 §13 오류**(§4-C ✗ 10): «xác suất poker» #1 **GGPoker** 4건(5장 확률을 «Tỷ lệ Thắng» 아래 기준 없이 · AA 85 %/80 % 자기모순 · «hơi tốt hơn 2:1» 실제 29,0 % · «4.164 : 1» 표기) · #4 **Natural8** 4건(팟오즈 분모에서 **자기 콜을 빼 40 %** → 실제 28,6 % · «$5 vào pot $25 = 20%» → 14,3 % · «flop … 1/50 hoặc 2%» → 6 %) · GG 블로그 2건(5:1 → 6:1 · EV 손실항 = 팟). 반대로 holdemcalc · wikipoker/giaytoxe · pokerqz 수치는 전수 계산과 일치 → 차별점은 **«기준을 밝힌 표 + 분모를 맞힌 팟오즈»**.
5. **헤드 오염 판정**: 포커 몫 있음 = xác suất poker · poker odds · pot odds · equity poker · rule of 4 and 2 · (경량) implied odds **poker** · **섞임/의도 없음** = outs poker(포커 의도 1/7 · KG «Out») · cách tính bài poker(포커 10/10이지만 **족보·점수 계산 의도** → L-B) · đếm bài poker(포커 9/9이지만 **카드 카운팅 글 0** — 족보·액션 글이 대신 뜬다) · **없음** = implied odds 단독(스포츠 베팅 · 유기 1개) · equity là gì.

---

## 1. 자동완성 (DFS · 2704 · vi · chrome · 55시드 · 전체 = `tmp/vi/L-C/ac-out.txt` · 잡음은 생략 표시)

- **xác suất poker(␣ · * poker · trong poker · tính …)** — 베트남어 확률 질문은 이 10개가 전부: tính xác suất poker · **bảng xác suất poker** · app tính xác suất poker · **cách tính xác suất (trong) poker** · phần mềm tính xác suất poker · xác suất bài poker · xác suất thống kê trong poker · tính xác suất poker online · xac suat poker
- **xác suất thùng phá sảnh / ra tứ quý**: xác suất ra thùng phá sảnh · thùng phá sảnh trong poker / xác suất rút ra (được) tứ quý át · xác suất rút ra tứ quý («xác suất ra sảnh · ra thùng · bài poker xác suất» = 빈 목록)
- **tỷ lệ (thắng) poker**: tính tỷ lệ poker · app tính tỷ lệ poker · tỷ lệ bảo hiểm poker(올인 보험 — 운영사 기능) · **tỷ lệ thắng trong poker** · tỷ lệ pot trong poker · tỷ lệ trong poker · **tỷ lệ thắng của các hand bài trong poker** · tỉ lệ thắng poker
- **cách tính (bài) poker / tính bài poker**: cách tính điểm bài poker · cách tính bài trong poker · bảng tính bài poker · luật tính bài poker · tính điểm poker → 🔴 «tính bài / tính điểm» = **족보 점수 의도**(L-B)
- **cách tính * poker**(와일드): … · **cách tính equity poker** · **cách tính odds poker** · cách tính icm poker · **cách tính ev poker** · cách tính tiền/chip/điểm/gap/min raise … · «cách tính xác suất»(poker 없이) = 학교 수학·vietlott·số đề·xóc đĩa 15/15 → 🔴 «poker» 필수
- **poker odds / odds poker**: calculator · chart · app · table · preflop · explained · of winning …(영·서·독만)
- **pot odds(␣ · poker · là gì)**: calculator · formula · explained · **pot odds vs equity** · **pot odds and equity** · **pot odds là gì** · chart · practice … / pot odds là gì → **pot odds poker là gì · pot odds trong poker · pot odd là gì · pot odd trong poker · pot odd la gi**(🔴 단수 «pot odd» 3개) / «odds là gì» → … **pot odds là gì** · betting odds là gì · **implied odds là gì** …
- **outs poker**: calculator · meaning · definition · chart · count outs poker · poker outs odds chart · trainer …(영·독만) / **outs là gì** = try-outs · time outs · call outs · ins and outs …(포커 0) / **outs trong poker · cách tính outs · tính outs poker · quy tắc 2 và 4 · quy tắc 4 và 2 poker** = 빈 목록
- **rule of 4 and 2**: rule of 4 and 2 poker · poker odds rule of 4 and 2 · texas holdem rule of 4 and 2 (+ 법조문·나눗셈 잡음 12)
- **flush draw**: flush draw poker · meaning (poker) · **odds** · odds after flop · on flop odds · equity (+ 가구 잡음 5) / **straight draw**: poker · odds (+ «straight draw prediction(s) for today» 축구 베팅 4 · 의류) / **gutshot**: in poker · meaning (poker) · straight draw (+ 영화·MTG·시럽 잡음 11) / **draw poker** = 5장 드로·비디오 포커 기계(다른 게임) / **poker draw là gì**: draw poker là gì · **monster draw poker là gì** · lucky draw poker là gì
- **equity poker / trong poker**: **equity poker là gì** · **equity trong poker là gì · cách tính equity trong poker** · calculator · preflop · chart … / **equity là gì**: 포커 1/15(«equity là gì trong poker») — 나머지 tài chính·kế toán·forex·brand equity …
- **ev poker / ev là gì poker / tính ev poker**: **ev poker là gì · ev là gì trong poker · cách tính ev (trong) poker · công thức tính ev poker** · ev pokerogue(게임 잡음)
- **implied odds**: calculator · implied odds poker · meaning · **to american odds · converter · betting · from moneyline · sports betting**(🔴 절반이 스포츠 베팅) / **implied odds poker**: **what is implied odds in poker** · **reverse implied odds poker** · implied pot odds · **implied odds vs pot odds poker** …
- **đếm bài poker**: **cách đếm bài poker · đếm bài trong poker · cách đếm bài trong poker** · xem bài poker / **đếm bài␣** = blackjack · **đếm bài là gì** · xì dách · 노래 · 유아 교재 9 / **card counting poker**: texas holdem · movie · **card counting vs poker** · **is card counting in poker illegal** · techniques · app
- **와일드카드(브리프 5종)**: «* poker» = poker hands · face(노래) · online(🔴) · rules · cheat sheet · chips … 확률 0 · «poker * là gì» = poker là gì · … trong bóng đá(축구 4골) · flush poker là gì · straddle · itm … 확률 0 · «* trong poker là gì» = fold · thùng · flush · ante · gtd · raise · check · call · itm · flop · sảnh · straddle · blind · rake · **pot** — 확률 0 · «cách * poker» = cách chơi … · **poker cách tính** · cách đánh poker luôn thắng · «luật * poker» = 규칙 15(L-A)

→ **판독**: 베트남어 확률 질문은 «xác suất / tỷ lệ thắng / cách tính …» 세 갈래뿐, 개념어(pot odds · equity · ev · implied odds · outs)는 **영어 + «là gì / trong poker / cách tính»**로만 나온다. 아웃츠·2와4 규칙·카드 카운팅은 베트남어 자동완성이 사실상 비어 있다.

---

## 2. 신규 후보 볼륨 (0-1·vi-tools에 없던 것만 · DFS 2704 · 87개 · `tmp/vi/L-C/vol-out.txt`)

| 볼륨 | 검색어 | 판정 |
|---:|---|---|
| 1,900 | draw là gì | 🔴 오염(SERP 포커 0/8 · 사전·동사 활용 · PAA «Draw là gì trong bóng đá?») |
| 1,000 | drawing hand | 🔴 오염(손 그리기 · 포커 0/7) |
| 880 | ev là gì | 🔴 오염(전기차·전자볼트·카메라 노출 · 포커 0/9 · 관련검색 «Ev là gì Pokemon») |
| 260 | pocket pair | 🔴 오염(Palworld 개발사 Pocketpair 9/9) |
| 70 | card counting | 🔴 블랙잭 10/10(PAA «Is card counting illegal?» 등) → card-counting 글은 비교 H2로만 흡수 |
| 50 | equity poker calculator | 계산기 도구 몫(vi-tools «poker equity calculator» 50과 같은 수요) |
| 40 | cách tính poker | 족보 점수 의도 섞임(«cách tính bài poker» SERP = 족보) |
| 20 | ev poker · expected value poker · poker probability · semi bluff · đếm bài blackjack | ev poker → equity 글 FAQ · poker probability → probability · semi bluff → L-F/L-D |
| 10 | 30개 — pot odds poker/calculator/formula/vs equity · poker outs · rule of 4 and 2 poker · rule of 2 and 4 · implied odds poker · reverse implied odds · flush draw (poker) · straight draw poker · gutshot (poker) · set mining · fold equity · equity realization · poker odds chart · poker math · cách tính xác suất (trong) poker · cách tính equity trong poker · cách đếm bài · app tính tỷ lệ poker · tỷ lệ thắng của các hand bài trong poker … | 롱테일 묶음(각 글 H2·FAQ 흡수) |
| `-` | 44개 — 자동완성 질문형 전부(bảng xác suất poker · tỷ lệ thắng trong poker · pot odds là gì · pot odd là gì · outs trong poker là gì · cách tính outs (trong) poker · implied odds là gì · quy tắc 2 và 4 poker · equity (trong) poker là gì · cách tính equity poker · ev (là gì trong) poker · cách tính ev poker · công thức tính ev poker · monster draw poker là gì · đếm bài trong poker · cách đếm bài poker …) + 베트남어 풀이어(tỷ lệ cược ngầm · tỷ lệ pot trong poker · toán poker · xác suất ra thùng phá sảnh …) | Google Ads 데이터 없음(≠ 0) — 자동완성에 뜨는 것은 실제 질문형으로 쓴다 |

→ 7편 합산 수요(0-1 + 신규, 중복 제외) ≈ **probability 120 · pot-odds 60 · equity 110(ev 포함) · drawing-odds 50 · outs 40 · implied-odds 20 · card-counting 10~20**. 전부 롱테일 — 우선순위는 볼륨보다 **SERP 갭**(§7-8).

---

## 3. SERP 상위 10 + PAA (DFS · 2704 · vi · desktop · 원본 `tmp/vi/L-C/serp*-out.json` · tl=vi = reddit 자동번역 · goto = 구글 번역 프록시)

### 3-0. 🔴 오염 판정 (브리프 0단계 · 상위 유기 결과 중 «포커» 수 / «이 글 의도» 수)

| 헤드 | 볼륨(0-1) | 유기 n | 포커 | 의도 | 판정 | 비고 |
|---|---:|---:|---:|---:|---|---|
| xác suất poker | 10 | 10 | 10 | 9 | **있음** | 베트남어 8 · 도구/앱 3 |
| poker odds | 50 | 10 | 10 | 10 | **있음** | 영어 10 · 계산기 6 |
| pot odds | 20 | 8 | 8 | 8 | **있음** | KG(기계번역 정의) · 영상 팩 |
| outs poker | 10 | 7 | 5 | **1** | **섞임** | out of position · «Poker Face» · KG «Out» |
| cách tính bài poker | 40 | 9 | 9 | **1** | **의도 오염** | 족보 7 → **L-B 소유** |
| implied odds (경량) | 10 | 1 | 0 | 0 | **없음** | 기생 스팸 1 + AIO + PAA 베팅 4 |
| implied odds poker | 신규 10 | 10 | 10 | 10 | **있음** | 영어 10 |
| equity poker | 30 | 8 | 8 | 8 | **있음** | tl=vi 4 · 앱 4 |
| rule of 4 and 2 | 10 | 8 | 8 | 8 | **있음** | 영어 8 · 숏폼 |
| đếm bài poker | `-` | 9 | 9 | **0** | **있음·의도 공백** | 카드 카운팅 글 0 |
| equity là gì | 2,400 | 8 | 0 | 0 | **없음** | AIO «vốn chủ sở hữu» · PAA 금융 4 |
| draw là gì · drawing hand · ev là gì · pocket pair · card counting | 1,900 · 1,000 · 880 · 260 · 70 | 7~9 | 0 | 0 | **없음** | §2 |

### 3-1. 확률 축
- **xác suất poker**: 1 ggpoker.com/vi «Biểu đồ Tỷ lệ và Xác suất Tay Bài Poker»(운영사) · 2 pokerbold «Xác suất khi chơi bài Poker» · 3 tl=vi «Một câu hỏi về xác suất toán học thú vị trong poker» · 4 natural8/vi «Cách tính tỷ lệ pot odds khi chơi poker»(운영사) · 5 holdemcalc/vi «Máy Tính Xác Suất Poker»(도구) · 6~7 App Store·Google Play · 8 tl=vi «Xác suất để có được tứ quý trong Texas Hold'Em là bao ...» · 9 tl=vi «Xếp hạng bài poker và xác suất» · 10 YouTube. PAA·FS·AIO **없음** · 관련 «Phần mềm tính xác suất poker · Luật Poker · Cách chơi poker · Tool poker · Thứ tự Poker · Poker bài · Các poker · Phản mềm tính Poker»
- **cách tính xác suất poker**(신규 10): GG · pokerbold · tl=vi «Cách tính tổng xác suất ra một kiểu bài poker» · tl=vi · natural8 · holdemcalc · tl=vi · Google Play · GG 족보 · 🔴 hackmd pho88 «Cách tính xác suất Poker: Công thức tính Outs & Odds (Rất dễ)». 관련 «… **Cách tính tỉ lệ thắng trong poker** · App tính tỷ lệ poker · Tính Poker …»
- **tính xác suất poker**: 계산기 6(gamblingcalc · 888 · pokernews · pokerlistings …) · YouTube · 🔴 TOP88 제휴 · PAA «Bài nào trong Xì tố lớn nhất? || Làm cách nào để chơi poker giỏi?» → **도구 의도**(§8)
- **tỷ lệ thắng poker**: pokerqz «【Dân chơi giải đấu nhất định phải đọc】Cách ước tính tỷ…» · 🔴 pokercheat8(치트 툴) · tl=vi ×7(«Làm thế nào để tính Outs trong Poker?» · «Poker! Tỷ lệ thay đổi khi có nhiều người chơi trên bàn ...» · «Công thức tính tỷ lệ cược ngầm là gì?» · «Tỷ lệ thắng ở 100 nl»(윈레이트) …)
- **poker odds**: 영어 10(계산기 6 · wikipedia «Poker probability» · partypoker «20 poker odds and probabilities you should know» …) · 베트남어 0

### 3-2. 팟오즈·아웃츠·2와4
- **pot odds**: tl=vi «Ý nghĩa của pot odds là gì vậy? : r/poker» · pokerbankrollapp · espn «Forget pot odds» · 영상 팩 4 · SplitSuit · YouTube · reddit · tl=vi «Tính toán tỷ lệ pot odds trên bàn chơi» · cardplayer. **PAA «What is the 15/25/35 rule in poker? || How often flops a 2 pair?»** · **KG «Pot odds»** 축어: «Trong poker, tỷ lệ cược tiền cược là tỷ lệ giữa kích thước hiện tại của tiền cược với chi phí của một cuộc gọi dự tính. Tỷ lệ cược nồi được so sánh với tỷ lệ thắng một ván bài …»(🔴 기계번역 · «cuộc gọi»=call · «nồi»=pot)
- **pot odds là gì**: 포·폴·태·중·헝·이 글 9 + **pokerslate/vi «Máy tính pot odds»**(유일한 베트남어 · 도구) → 베트남어 정의 글 **0**
- **pot odds trong poker**: **goto 7/9**(ggpoker «Bảng tỷ lệ và xác suất các bộ bài Poker» · wikihow · thepokerbank · winstar · pokercoaching · cornell «BÃ i Poker…»(깨짐) · upswing «Xác suất hòa trong Poker là bao nhiêu?») + tl=vi 2
- **outs poker**: goto→casino.org(position) · reddit «Leading Out Of Position» · FB Triton · time.com · YouTube «poker face» · businessinsider · tl=th. **KG «Out»** 축어: «… một lá bài ra là bất kỳ lá bài nào không nhìn thấy được, nếu được rút ra, sẽ cải thiện ván bài … Biết được số lần xuất trận của một người chơi …»(🔴 «số lần xuất trận» 오역)
- **cách tính outs trong poker**: tl=vi ×4 · viblo side pot · **YouTube «Cách tính xác suất trong Poker: Out, Odds, Pot Odd...»** · goto→cardplayer · FB 2. PAA 4 전부 무관(«Trong poker, chất nào mạnh nhất?» …)
- **outs trong poker là gì**: FB · 영상 팩 · 🔴 pho88 · 🔴 danhbai.asia «Poker Online: Xác Suất Tay Bài, Outs Và Pot Odds» · reddit 앱 · 무관 3 → 베트남어 아웃츠 정의 글 **0**
- **rule of 4 and 2**: 영어 8(thepokerbank · pokerskill · pokerstrategy · 2+2 …) + 영상 팩 · PAA «How rare is 4 of a kind? || How often flops a 2 pair?» · 베트남어 0
- **quy tắc 2 và 4 poker**(null): wikipoker BalugaWhale · ggpoker 초보 시리즈 · natural8 레인지 · wikipoker «mua set» · tl=vi … → 규칙을 제목으로 다룬 베트남어 글 **0**. 표기 = natural8 «quy tắc 2 và 4 / 2/4» · GG 블로그 «quy tắc 4 và 2» · pokerqz «Quy tắc 2%/4%» · **계산기 정본 «quy tắc 4 và 2»**

### 3-3. 에퀴티·EV·임플라이드·카드 카운팅
- **equity poker**: tl=vi «Làm sao để mình bắt đầu hiểu được những thứ như equity ...» · App «Equity Lab» · tl=vi «Máy tính Pot Odds, Equity & Outs…» · App OmahaCalc · tl=vi · App · **PAA «Equity poker là gì? || Equity gồm những gì?»** · tl=vi «Tính Toán Equity (Giá Trị Vốn Có)»(🔴 오역) · App
- **equity poker là gì**: goto→tightpoker(스니펫 «Equity là phần chia của bạn trong pot dựa trên xác suất thắng ván bài…») · goto→pokernews · tl=vi 2 · Instagram · **LinkedIn wikipoker «Deny Equity là gì trong poker?»** · FB 3(**OnPokerVN «GTO Series 10: Implied Odds trong Poker là gì?»**) · 무관 1
- **equity trong poker**: 영어 5 · 영상 팩 · **PAA «Equity có nghĩa là gì? || Equity poker là gì? || Equity stake là gì? || Equity là gì trong luật?»** · ggpoker/vi 용어집. 관련 «… Thuật ngữ Poker tiếng Việt · **Fold equity poker** …»
- **ev poker là gì**: tl=vi «Có ai giải thích đơn giản về equity và EV …» · **giaytoxe «Equity và EV là gì? | Khóa học Poker From The Ground Up»**(🔴 자동차 서류 사이트에 wikipoker 복제) · **ggpoker/vi «Toán học Poker: Tính toán Tỷ lệ Pot và Giá trị Kỳ vọng ngay ...»** · tl=vi · wikipoker value bet · ai-hay · **pokerqz «EV | Bảng thuật ngữ»** · FB · 🔴 pho88 · natural8 용어
- **implied odds**: 유기 1(gov.br 기생 스팸) · AIO · **PAA «What are the implied odds? || What is +200 implied probability? || What are the types of odds? || What does +7500 odds mean?»** → 스포츠 베팅. 조준 금지
- **implied odds poker**: 영어 10(thepokerbank · GTO Wizard · pokernews · splitsuit · upswing …) · **PAA «What are implied odds in poker? || What is the 15/25/35 rule in poker? || What is the 4-2 rule in poker? || What is +200 implied probability?»** · 베트남어 0
- **implied odds trong poker**: 언급만 하는 글 10 → 주제 글 **0**(FB OnPokerVN만 정면)
- **đếm bài poker**: 족보·액션·용어 글 9 → **카드 카운팅 결과 0**
- **đếm bài trong poker**: **tl=vi «Giải thích cho người 5 tuổi: Đếm bài trong poker hoạt động ...»** · **tl=vi «Tại sao "Đếm bài" trong Poker lại bị coi là gian lận?»** · wikihow.vn «Cách để Đếm bài»(블랙잭) · GG · vi.wikipedia «Xì tố» · 블랙잭 3. 관련 «Đếm bài Blackjack · Cách chơi blackjack thắng …»
- **card counting**(70): 블랙잭 10/10 · PAA «Is card counting illegal? || Does card counting actually work? || Is card counting possible anymore? || Is card counting difficult to learn?»

---

## 4. 상위 글 원문 정독

### 4-A. 헤딩 축어 (H1~H3 · 프로그램 추출/exa · «단어» = 본문 대략치 · 원본 `tmp/vi/L-C/pages-1.json`)

**① ggpoker.com/vi/poker-basics/poker-hands-odds/** («xác suất poker» #1 · «cách tính xác suất poker» #1 · 운영사 · 지역 차단 → exa · ~1,600단어 · 표 2 · 경험담 0 · 🔴 «chơi poker trực tuyến» CTA)
- H3 «Tỷ lệ Thắng của Các Tay Bài Poker» · «Cách Hoạt Động Của Tỷ Lệ Cược» · «Biểu Đồ Tỷ Lệ Poker»(H5 족보 10: «Một Đôi … Thùng Phá Sảnh Hoàng Gia») · «Tỷ lệ Thường gặp của Các Tay Bài Poker»(«Bài đợi sảnh hai đầu (4.8:1) · Bốn lá đồng chất (4.1:1) · Sảnh lọt khe (10.5:1) · Một đôi thành hai đôi hoặc bộ ba (8.2:1) · Bài cao (6.7:1) · Rút bài để có bộ (22:1)») · «Xác suất bài tẩy»(표 17행)
- FAQ 13(질문 축어 발췌): «Tỷ lệ AA so với KK là bao nhiêu? · Tỷ lệ thắng với đôi Át là bao nhiêu? · Bạn thường xuyên có bộ ba trên flop như thế nào? · Outs trong poker là gì? · Pot equity là gì? · Tỷ lệ để có một bộ bài chờ thùng sau khi lật bài là bao nhiêu?» 외 7

**② pokerbold.com/xac-suat-khi-choi-bai-poker/** (#2 · 2022-12-29 · ~940단어 · 표 0 — **전부 이미지 48장** · iframe 4 · FAQ 0 · 구어체 «đợi thùng đợi sản mãi chẳng ra»)
- H2 9: «Xác suất được chia ra những lá bài đặc biệt (AA, KK, 27o) ở Preflop …» · «Xác Suất gặp A kicker to hơn khi cầm AX hand» · «Khả năng ra set flop, ra trip flop, ra 2 pair tại ngay flop, ra thùng ngay flop, ra sảnh ngay flop» · «Khả năng các cửa đợi từ flop hit tại turn …» · «Cuối cùng là bảng đợi từ flop thì khả năng hit ở river là bao nhiêu %.» 외

**③ natural8.com/vi/blog/how-to-calculate-pot-odds-when-playing-poker** (#4 · GG 계열 · «Dominic Field» · ~3,400단어 · 표 1 · 🔴 «dịch vụ của chúng tôi không khả dụng tại quốc gia bạn đang sống» 배너)
- H1 «Cách tính tỷ lệ pot odds khi chơi poker» · H2 «Xác suất trong poker» · «Tỷ lệ pot odds là gì?» · «Ví dụ về tỷ lệ pot odds» · «Cách sử dụng tỷ lệ pot odds» · «Tính toán các lá bài out (những lá bài còn lại có thể mang lại chiến thắng) và equity (tỷ lệ thắng)» · «Tính tỷ lệ pot odds» · «Các lá bài Antiout và Blocker» · «Tính toán tỷ lệ pot odds trong poker Texas Hold'em» · «Các ví dụ về tỷ lệ pot odds có lợi và không có lợi» · «Tỷ lệ implied ddds»(오타 원문) · «Kết luận» · «Câu hỏi thường gặp về xác suất thắng trong poker»
- FAQ 5(«Hỏi: …»): 계산 가능 여부 · 가장 쉬운 계산법 · 인원수에 따른 변화 · 최고 승률 · «Quy tắc 2/4 trong poker là gì?» · §13 오류 4

**④ holdemcalc.com/vi** (#5 · 도구 + 참고표 · 표 5 · 🔴 GTO Wizard 제휴 배너)
- H2 «Máy Tính Xác Suất Poker Miễn Phí Tốt Nhất» · «Equity Khi Đối Đầu Preflop»(H3 «Pair vs Pair · Pair vs Overcards · Suited Connectors · Domination») · «Tham Khảo Nhanh»(H3 «Bảng Xác Suất Flop (Hold'em) · Bảng Xác Suất Turn (Hold'em) · Thống Kê Bài Cùng Chất (Flop) · … Suited Connector … · … Pocket Pair (Flop)») · FAQ 7(도구 사용법) — 수치 정확 · 단 플롭·턴 표 열 이름이 모두 «Khả Năng Trúng Ở River»라 2장/1장 기준이 열에 안 보인다

**⑤ ggpoker.com/vi/blog/poker-math-…** («ev poker là gì» #3 · 2025-09-17 · ~700단어 · 표·FAQ 0): H2 «Toán học Poker: Tính toán Tỷ lệ Pot và Giá trị Kỳ vọng ngay lập tức» · «Sức mạnh của Pot Odds» · «Giá trị kỳ vọng: Tính toán tương lai» · «Tính toán nhanh chóng» · «Kết luận» · §13 오류 2

**⑥ giaytoxe.vn/bai-1-equity-va-ev-la-gi-…** (#2 · 2021 · 🔴 wikipoker 강좌 복제): H1 «Bài 1: Equity và EV là gì? | Khóa học Poker From The Ground Up» · H2 «EV in Poker là gì?» · «Equity và EV liên quan với nhau như thế nào?» · «Implied Odds in Poker là gì?» · 예시 4개 정확

**⑦ pokerqz.com/vi/blog/flop-equity** («tỷ lệ thắng poker» #1 · 2026-08-11 · ~1,550단어 · 일본 앱 번역): H2 «Quy tắc 2%/4% là gì?» · «Tại sao cần tính cả backdoor?» · «Xác suất của backdoor draw là bao nhiêu?» · «Cách dùng quy tắc thực dụng như thế nào?» · «Ví dụ 1: A cao và BD flush» · «Ví dụ 2: K cao và BD straight 3 tổ hợp» · «Quy tắc thực dụng có những lưu ý gì?» · «Câu hỏi thường gặp về tỷ lệ thắng ở flop»(Q 4) · «Tổng kết» — 질문형 H2 5/10 · 수치 정확

**⑧ wikipoker.net/ev-trong-poker/** («Cậu Vàng Chơi Poker» · «Nguồn: Pokercoaching»): H1 «EV trong Poker là gì? Cách tính toán, Ví dụ & Ứng dụng thực tế» · H2 «Giá trị kỳ vọng – EV trong Poker là gì?» · «Cách EV hoạt động trong Poker» · «Cách tính EV trong Poker»(H3 «Ví dụ tính EV cụ thể») · «Bluff để tạo EV & Các yếu tố cần xem xét» · «EV trong Poker chỉ có ý nghĩa về lâu dài» · «Tổng kết …» · 공식 «EV = (%W × $W) – (%L × $L)» · 예시 정확

**⑩ 🔴 실머니 제휴(유형 집계만 · 조준·링크 금지)**: hackmd pho88 · nutritiousnation TOP88 · danhbai.asia · ulifestyle pho88 ×2 · pokercheat8 · facialacademy → 확률 SERP에 제휴·기생 **7건**(남의 도메인 기생 4).

### 4-B. 공통 구조 관찰
- **번역어 집계**(`tmp/vi/L-C/terms.mjs` + GG 수작업): flush «thùng»(natural8 21 · hackmd 11 · GG) ≫ «flush»(holdemcalc 16 · pokerqz 9) · straight «sảnh» · draw «tiềm năng»(natural8 19) / «đợi thùng·đợi sảnh»(구어) / «bài chờ»(GG·giaytoxe) / «draw»(holdemcalc 15 · pokerqz 17) · OESD «sảnh hai đầu» · gutshot «Sảnh lọt khe / sảnh trong»(GG) · «sảnh khe»(hackmd) · «sảnh lửng»(pokerqz) · outs «outs»(hackmd 23 · pokerqz 13) / «lá bài out»(natural8 30) / «lá bài cải thiện»(GG) · pot odds «tỷ lệ pot odds»(natural8 이중어) / «Tỷ lệ Pot»(GG 블로그) · equity «equity (tỷ lệ thắng)» / «Giá Trị Vốn Có»(오역) · EV «Giá trị kỳ vọng» · implied «xác suất thắng ngụ ý»(natural8) / «tỷ lệ cược ngầm»(reddit) · odds «tỷ lệ cược» · set «bộ»(GG) / «set» · royal «Thùng Phá Sảnh Hoàng Gia»(GG) · «sảnh chúa»(GG PAA 답) · 수트 «chuồn · rô · cơ · bích».
- 숫자 표기: GG = 소수점 «.»(«0.995 : 1 · 1.37 : 1») + 천 단위도 «.»(«4.164 : 1 · 72.192 : 1 · 649.739 : 1») **혼용** · FAQ에선 «1 trong 30,940»(쉼표 천 단위) · Natural8 «2,12% · 0,20»(쉼표 소수) → **경쟁 글 안에서조차 표기 통일 없음**.
- 질문형 H2: natural8 3/12 · pokerqz 5/10 · wikipoker 1/7 · GG 0(FAQ에만 질문) · pokerbold 0.
- 경험담·1인칭: 0/9(pokerbold 구어체 1편 제외). 영상: pokerbold iframe 4 · natural8 1. 확률표 텍스트: holdemcalc · GG만(pokerbold는 이미지).
- 최신성: pokerbold 2022 · giaytoxe 2021 · GG 블로그 2025-09 · pokerqz 2026-08 · natural8 날짜 없음.

### 4-C. 🔴 §13 검산 — 경쟁 글의 확률·에퀴티 (직접 계산)

매치업 = 지정 수트 1조합 전수(`tmp/vi/L-C/eq.mjs` · 자체 검증 AhAd vs KsKc 81,26 % · AsAh vs KsKh 82,64 % · AKs vs QQ 46,2 % — 공개값과 일치). 플롭 이후 = 남은 보드 전수. 아웃츠 = 조합식 · 2장 남음 P = 1 − (47−o)(46−o)/2,162.

| # | 글(순위) | 원문 축어 | 실제 | 판정 |
|---|---|---|---|---|
| 1 | GGPoker 확률표(«xác suất poker» #1) | H3 «Tỷ lệ Thắng của Các Tay Bài Poker» 아래 «Một Đôi … 42.2569%» · «Hai Đôi … 4.7539%» · «Bộ ba … 2.1128%» · «Sảnh … 0.3925%» | 이 값들은 **5장 핸드가 나올 확률**(42,26 %는 5장 기준 원페어 정확). 홀덤 7장 기준은 원페어 **43,8 %** · 투페어 **23,5 %** · 트립스 4,83 % · 스트레이트 4,62 % — 그리고 «승률»이 아니다 | ✗ 기준 미표기 + 라벨 오류(메모리 «족보 확률 5장 vs 7장») |
| 2 | GGPoker FAQ | «Đôi Át thắng 85% thời gian khi đối đầu với một đối thủ duy nhất» ↔ 같은 페이지 «Mặc dù bài Át tạo thành một tay bài thắng 80% thời gian, chúng vẫn sẽ thua 20% thời gian» | AA vs 무작위 1핸드 = **85,2 %**(80 %는 AA vs KK급) | ✗ 자기모순 |
| 3 | GGPoker FAQ | «… bất kỳ người chơi nào có lá bài cao hơn cùng chất với thùng của bạn có cơ hội hơi tốt hơn 2:1 để có thêm lá bài khác ở turn hoặc river để đánh bại bạn.» | 플롭 플러시 메이드 후 상대(같은 수트 상위 1장) 아웃 = 13 − 5 − 1 = 7장 / 미지 45장 → 1 − (38·37)/(45·44) = **29,0 %(2,45:1)** — «2:1보다 낫다(>33 %)»가 아니라 **더 나쁘다** | ✗ |
| 4 | GGPoker 표기 | «Tứ Quý … Tỷ lệ cược : 4.164 : 1» · «Thùng Phá Sảnh … 72.192 : 1» (같은 표에 «Một Đôi … 1.37 : 1») | 4,164:1 · 72,192:1(천 단위) — 같은 표에서 «.»가 소수점과 천 단위를 겸해 **«4.164 : 1» = 약 4:1로 읽힌다** | ✗ 표기 오독 위험 |
| — | GGPoker FAQ | «Tỷ lệ AA so với KK là bao nhiêu?» → 답 = AA가 배당될 확률 220:1 · 상대 KK 205:1 · 9명 21.8:1 | 수치는 대략 맞음(KK 6/1,225 = 203:1 · 9명 ≈ 4,4 %) 🔴 **질문(AA vs KK 승률 = 약 82 %)에 답하지 않는다** | 🟠 의도 미충족(차별 재료) |
| 5 | Natural8(«xác suất poker» #4) | «xác suất để một lá bài cụ thể xuất hiện ở vòng flop là 1/50 hoặc 2%» | 플롭 3장 중 특정 1장 = **3/50 = 6 %**(1/50은 «플롭 첫 장» 한 자리) · 이어서 «ở vòng turn, có 3 bài đã biết (vòng flop) … 1/47» — 아는 카드는 홀카드 포함 **5장**(47 = 52 − 5) | ✗ |
| 6 | Natural8 | «nếu bạn đối mặt với một cược $5 vào một pot có $25: Kích thước pot tổng cộng = $25 · 5 / 25 = 0,20 · 0,20 * 100 = 20%» (직전 지시문 «Tính toán kích thước pot tổng cộng sau khi bạn thực hiện call») | 콜 후 총팟 = 25 + 5 + 5 = 35 → 필요 에퀴티 **5/35 = 14,3 %**($25에 베팅이 포함됐다고 봐도 5/30 = 16,7 %) — 자기 지시문과도 모순 | ✗ |
| 7 | Natural8 «Tỷ lệ pot odds có lợi» | «8-9. Flop có 6-7-J … Đối thủ đặt cược $20 vào một pot có $30 … chia … ($20) cho kích thước pot tổng cộng ($50 …). Điều này cho bạn tỷ lệ pot odds là 40%.» | 콜 포함 총팟 = 30 + 20 + 20 = 70 → **20/70 = 28,6 %**. 결론(콜)은 그대로지만 기준 수치가 틀렸다 | ✗ |
| 8 | Natural8 같은 예 | «Bạn có 15 lá bài out (bốn lá 5, bốn lá 10, và bốn lá bích), cho bạn xác suất khoảng 54%» | 4 + 4 + 4 = 12 ≠ 15. 정답 내역 = 스트레이트 8 + **스페이드 9** − 겹침 2(5♠·10♠) = 15 · 15아웃 2장 = 1 − (32·31)/2,162 = **54,1 %** ✅ | ✗ 내역 오기 |
| — | Natural8 «không có lợi» | «Q-J. Flop có 9-10-A … 8 lá bài out (bốn lá 8 và bốn lá K) … 16% … pot odds là 40%» | 8아웃 ✅(8 → Q-J-10-9-8 · K → A-K-Q-J-10) · 1장 = 8/47 = **17,0 %** · 필요 에퀴티 **28,6 %**(#7과 같은 분모 오류 반복) | ✗(#7 반복 · 결론 폴드는 유지) |
| 9 | GGPoker 블로그(«ev poker là gì» #3) | «nếu bạn có bốn lá bài để tạo thành flush sau flop, và có $100 trong pot, một cược $20 từ đối thủ của bạn, pot odds sẽ là 5-đến-1 ($100/$20)» | 상대 베팅 포함 팟 120 : 콜 20 = **6:1**(필요 에퀴티 20/140 = 14,3 %) | ✗ |
| 10 | GGPoker 블로그 | «nếu bạn có 30% cơ hội thắng một pot $100 và 70% cơ hội thua, giá trị kỳ vọng … sẽ là $30 (0.30 * $100) – $70 (0.70 * $100) = -$40» | 지면 잃는 것은 **내 콜 금액**이지 팟 전체가 아니다. 콜 금액이 없어 식이 성립하지 않음(예: 팟 $100에 $50 콜 → EV = 0,3·150 − 0,7·50 = **+$10**) | ✗ 모형 오류 |
| — | hackmd pho88(🔴 제휴 · 유형만) | 표 머리 «Odds vòng kế tiếp (Flop-River) · Odds 2 vòng tiếp theo (Flop-Turn/ Turn-River)» 아래 «1 · 46:1 · 22.5:1» | 46:1은 **1장 남음**(47장 중 1) · 22,5:1은 2장 남음 → **열 이름이 뒤바뀜**. 본문 «Trong trường hợp chỉ có thể tạo thành đôi … thì không được gọi là Outs»도 오버카드 아웃(GG «Bài cao … sáu outs»)과 모순 | ✗(유형 기록) |
| — | pokerbold(#2) | 확률표 전부 이미지 | 텍스트 수치만 검산: «khả năng ra set là 12% … 88:12 7,3: 1» ✅(7,33) · «Đôi K gặp đôi A nếu còn 9 người … (4,39%)» ✅(≈ 9 × 6/1,225 − 겹침) | 🟠 이미지 표 미검산 |

✅ **맞게 확인한 것**(같은 방식): holdemcalc 매치업 14행 전부 ±1 %p(예 AsAh–KsKh 82 → 실 82,64 · JsJh–AdKc 57 → 57,25 · AsKh–AdQs 75 → 74,75 · KsKh–AsKd 70 → 69,82) · 플롭/턴 아웃츠표 18행 · 수티드·셋·87s 플롭 분포 / giaytoxe(wikipoker) AdKd vs JhTs 65 %(65,05) · 플롭 JdTc2h 22 %(21,82) · 턴 Qs 91 %(90,91) · AhKc vs 5s6s on Ks7d4s 43 %(43,23) · EV −6,6 · +30,3 / pokerqz Ad4d vs KcJh on Jc5h2d 31,21 %(31,21) · Kh8s vs AsQs on Qh9d6h 20,87 %(20,91) / wikipoker QhJh on AhKd7h vs AA·KK 33 %(32,93) · AK 40 %(39,60) · AQ 45 %(46,11) · EV 1,154 · «35 %여도 이익»(손익분기 28,7 %) / GG 홀카드 표 17행 · 드로 6종 · 로열 1/30,940 · SF 0,0279 % / Natural8 Limit 5:1→6:1→7:1 · 15아웃 54 % / pokerslate 공식.

→ **레인 A 메모**: ① 표마다 **«기준(5장/7장 · 1장/2장 남음 · 오프/수티드)»을 표 머리에** ② 팟오즈는 **«총팟 = 팟 + 상대 베팅 + 내 콜»**을 그림으로 — vi 1위권 3편 중 2편(Natural8 · GG 블로그)이 분모를 틀렸다 → «흔한 실수» H2/FAQ 재료(경쟁사 실명 비판 금지 · 오류 «유형»만) ③ 숫자 표기 하나로 통일(vi 관례 = 소수 쉼표 «28,6 %»·천 단위 점 «1.712.304» — 기존 vi 8편·계산기 표기와 맞춰라: 레인 A 확인 항목) ④ 5장/7장 확률을 «승률»로 부르지 않는다.

---

## 5. 장단점 표

| 공통 강점(상위 글) | 근거 |
|---|---|
| GG·holdemcalc가 **텍스트 확률표**를 갖췄다(홀카드 17행 · 플롭/턴 9행 · 매치업 14행) | §4-A ①④ · 수치 대부분 정확 |
| 운영사 도메인(ggpoker·natural8) 권위 + 베트남어 | «xác suất poker» #1·#4 |
| EV·equity 예시는 wikipoker 계열이 정확·구체(카드·스택·팟 명시) | §4-C ✅ |
| pokerqz가 «2와4 규칙 + 백도어 보정»이라는 한 단계 위 내용을 질문형 H2로 | §4-A ⑦ |
| 영상 팩·숏폼이 pot odds·rule of 4 and 2에 붙는다 | §3-2 · §3-6 |

| 공통 약점(= 차별화 지점) | 근거 |
|---|---|
| 🔴 **베트남어 원문 공급 부족**(자동번역이 상위를 채움) | §0-1 |
| 🔴 **팟오즈 분모 오류**(Natural8 ×3 · GG 블로그 ×1) — «내 콜 포함 총팟»을 안 쓴다 | §4-C #6·#7·#9 |
| 5장/7장 기준 미표기 · «승률» 라벨 오용(GG #1) | §4-C #1 |
| «AA vs KK» 같은 실제 질문에 답하지 않는 FAQ(GG) | §4-C — |
| 아웃츠·임플라이드·카드 카운팅·2와4 규칙을 **제목으로 다룬 베트남어 글 0** | §3-3·3-4·3-6·3-7 |
| 경험담 0/9 · 실전 핸드 서술 0(예시는 전부 교과서형) | §4-B |
| 표기 혼란(«.» 소수/천 단위 혼용 · «tỷ lệ pot odds» 이중어 · KG «số lần xuất trận») | §4-B |
| 표를 이미지로만(pokerbold) · 운영사 글은 «chơi poker trực tuyến» CTA와 베트남 차단 배너 공존 | §4-A ②③ |
| SERP에 실머니 제휴 기생 7건 → 깨끗한 정보 글이 상대적으로 돋보인다 | §4-A ⑩ |

---

## 6. 우리 글 대조 (EN 마스터 H2·FAQ ↔ vi 의도) + vi 도구

| 글 | EN이 이미 이기는 점 | vi 의도 중 EN에 빠진 것 |
|---|---|---|
| probability | 7장 기준 확률 · H2 8 · FAQ 12 | «bảng xác suất poker» · «tỷ lệ thắng của các hand bài trong poker» · «xác suất ra thùng phá sảnh» · «xác suất rút ra tứ quý át» · 멀티웨이 승률(Natural8 FAQ) · «AA so với KK»(GG FAQ) |
| pot-odds | FAQ «Do you count your call in the pot odds?» 🟢 — vi 상위 2편이 틀린 바로 그 지점 | «pot odds là gì / pot odd là gì» · «pot odds trong poker» · «pot odds vs equity» |
| outs | 콤보 드로 «9 + 8 isn't 17» · 더티 아웃 | «outs trong poker là gì» · «cách tính outs» · gutshot 베트남어명 |
| drawing-odds | «Why 7.5-to-1 but also 1 in 8?» 🟢 | flush/straight draw 영어 머리어 · «monster draw poker là gì» · 백도어(pokerqz) |
| implied-odds | «all-in이면 임플라이드 0» 🟢 | «implied odds là gì» · «reverse implied odds» · 스포츠 베팅 «implied probability»와 구분 한 줄 |
| equity | fold equity · realization · EV FAQ | «equity (trong) poker là gì» · «Equity gồm những gì?» · «cách tính equity / ev trong poker» · «công thức tính ev» · «deny equity» |
| card-counting | 블랙잭 비교 · 블로커 · 스터드 | «đếm bài trong poker» · reddit «… lại bị coi là gian lận?» · xì dách/blackjack 비교 |

**vi 도구** `/vi/calculator`(9종): 참고표 H2 «Bảng equity tham khảo — các cặp đối đầu all-in preflop» · «Bảng outs tham khảo — xác suất draw theo số outs» · «Bảng pot odds tham khảo — equity cần có để call» · FAQ 18 중 이 레인과 같은 의미 **7문항**: «Poker odds calculator hoạt động thế nào?» · «AA gặp KK thắng bao nhiêu phần trăm?» · «AK gặp một đôi có thật là coin flip không?» · «Quy tắc 4 và 2 trong poker là gì?» · «Flush draw trúng thường xuyên đến mức nào?» · «Tính pot odds như thế nào?» · «Cần pot odds bao nhiêu để call với flush draw?» → 글 FAQ에서 **같은 문장 금지**(§8). `/vi/hand-chart`·`/vi/tournaments`는 무관.

---

## 7. 처방 (레인 A 브리프 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다)

공통: 신설·개명 H2 직후 `> **바로 답**` 40~75단어 · 영어 머리어 + 베트남어 풀이 첫 등장 1회 병기 · 용어는 계산기·vi hand-rankings 표기 승계(«quy tắc 4 và 2» · «Thùng» · «Sảnh») · 신규 수치는 §13 재계산 · 제목·H1에 «máy tính / app / phần mềm / calculator» 금지(§8). 「←」 = 대응 EN H2, 🆕 = 신설.

### 7-1. holdem-probability — 우선순위 **1**(xác suất 10 + cách tính 10 + poker odds 50 + poker probability 20 · 1위 GG 오류 4)
- **주력어**: «xác suất poker» + «bảng xác suất poker» · 보조 «poker odds» · 훅: «1 lần trong N ván» · «Thùng Phá Sảnh Hoàng Gia 1/30.940 (7 lá) vs 1/649.740 (5 lá)» — GG가 섞은 지점.
- **H2**: «Bảng xác suất poker: mỗi tay bài trên 7 lá» ← Hand Odds Chart(표 머리 기준 명시) · «Xác suất được chia từng loại bài tẩy là bao nhiêu?» ← Dealt · «Xác suất ra set, thùng, sảnh ngay ở flop» ← Flopping(pokerbold H2 표현) · «Xác suất hoàn thành thùng hoặc sảnh đến river» ← Drawing(→ drawing-odds 앵커) · «Cách tính xác suất poker: đếm outs và quy tắc 4 và 2» ← How to Calculate(자동완성 축어) · «Pot odds: biến xác suất thành quyết định» ← Pot Odds(→ 앵커) · «Xác suất ra thùng phá sảnh và thùng phá sảnh hoàng gia» ← Royal · «Xác suất tứ quý, cooler và bad beat» ← Long-Shot
- **FAQ**: EN 12 개명 + «Tỷ lệ thắng của các hand bài trong poker là bao nhiêu?»(자동완성 축어 · 3~5행 + equity 앵커) · «Xác suất thắng có thay đổi khi có nhiều người chơi hơn không?»(Natural8 질문 · 계산기 «Đôi A gặp tay bài ngẫu nhiên» 표와 수치 일치). 🔴 «AA gặp KK …»는 계산기 FAQ 문장 → 바꾸거나 앵커.
- **차별화**: 5장 vs 7장 한 표(«Một đôi 42,3 % (5 lá) / 43,8 % (7 lá)») · «xác suất ≠ tỷ lệ thắng» 한 줄 · EN 경험담.
- **카니발**: 족보 순서 = `holdem-hand-rankings`(vi有 · desc에 «xác suất thực») → 확률표 전체는 이 글, hand-rankings에서 앵커. «cách tính bài poker»(족보 점수) 조준 안 함.

### 7-2. holdem-pot-odds — 우선순위 **2**(pot odds 20 + poker 10 · 베트남어 정의 글 0 · 상위 2편 분모 오류)
- **주력어**: «pot odds» + «pot odds là gì»(단수 «pot odd» 본문 1회) · 풀이 «tỷ lệ pot» · 훅 = «equity cần có = tiền call ÷ (pot + cược của đối thủ + tiền call)».
- **H2**: «Pot odds là gì trong poker?» ← What Are · «Cách tính pot odds từng bước» ← How to · «Pot odds dạng tỷ lệ và phần trăm: 3:1 = 25 %» ← Ratio vs % · «Cần bao nhiêu equity để call?» ← How Much · «Bảng pot odds theo kích thước cược» ← Chart · «Pot odds vs equity vs implied odds» ← vs(자동완성 축어) · «Quy tắc 4 và 2» ← Rule(→ outs 앵커로 축소) · «Những lỗi tính pot odds người mới hay mắc» ← Mistakes(첫 항목 = **«quên cộng tiền call của mình vào pot»** · §4-C #6·#7·#9 유형)
- **FAQ**: EN 11(«Có tính tiền call của mình vào pot không?» 🟢) + «Pot odds là gì?» · 🔴 계산기 «Tính pot odds như thế nào?» · «Cần pot odds bao nhiêu để call với flush draw?»와 같은 문장 금지.

### 7-3. holdem-equity — 우선순위 **3**(equity poker 30 + ev 20 + expected value 20 · PAA «Equity poker là gì?» 2개 SERP)
- **주력어**: «equity poker» / «equity trong poker là gì» · 🔴 제목에 «poker / trong poker» 필수(«equity là gì» = 금융) · 보조 «EV trong poker».
- **H2**: «Equity trong poker là gì?» ← What Is · «Cách tính equity trong poker nhanh» ← Estimate · «Equity và pot odds» ← vs · «Fold equity» ← Fold Equity · «Equity realization: vì sao 40 % equity không có nghĩa thắng 40 %» ← Realization · «Equity khi all-in» · «Equity trong pot nhiều người» · 승격 «EV là gì trong poker và khác equity thế nào?»(자동완성 «ev là gì trong poker · cách tính ev poker · công thức tính ev poker» · SERP 상위 = giaytoxe·GG·wikipoker)
- **FAQ**: «Equity poker là gì?» · «Equity gồm những gì?»(PAA 축어 → raw · fold · realization) · «Cách tính EV trong poker?» · EN 11.
- **차별화·카니발**: EV에서 «지면 잃는 것 = 내 콜»(§4-C #10) · 매치업 o/s 분리 · 표 전체는 계산기 «Bảng equity tham khảo» → 글은 5~8행 + 링크 · 계산기 FAQ «AA gặp KK» · «AK … coin flip» 문장 회피.

### 7-4. holdem-outs — 우선순위 **4**(outs poker 10 + poker outs 10 + gutshot 10 · 오염 SERP)
- **주력어**: «outs trong poker»(🔴 «outs»·«outs là gì» 단독 = 영어 일반어) · «cách tính outs».
- **H2**: «Outs trong poker là gì?» ← What Are(KG 오역 정정) · «Cách tính outs từng bước» ← How to Count · «Bảng outs: mọi loại draw» ← Chart(«gutshot (sảnh lọt khe)») · «Đổi outs thành xác suất» ← Outs to Odds(🔴 열 «còn 1 lá / còn 2 lá» 명시 — hackmd 유형) · «Quy tắc 4 và 2» ← Rule(**rule of 4 and 2 소유**) · «Draw kép: vì sao 9 + 8 không phải 17» ← Combo(«monster draw» 1회) · «Outs bẩn» ← Dirty
- **FAQ**: EN 9 · 🔴 계산기 «Quy tắc 4 và 2 trong poker là gì?» 대신 «Quy tắc 4 và 2 sai lệch bao nhiêu so với xác suất thật?»(15아웃 60 % vs 54,1 %).
- **카니발**: outs = 세는 법·2와4 / drawing-odds = 플롭 출현·완성률 / pot-odds = 가격.

### 7-5. holdem-drawing-odds — 우선순위 **5**(flush draw 10 · straight draw poker 10 · gutshot poker 10)
- **주력어**: «flush draw» · «straight draw» · «xác suất ra thùng / ra sảnh» · 🔴 «draw poker»(다른 게임) · «draw là gì»(사전) · «straight draw prediction»(베팅) → «poker» 결합 필수.
- **H2**: «Vòng đời của flop: một bảng» ← Lifecycle · «Xác suất ra set ở flop và set mining» ← Set · «Thùng: flop ra thùng, ra flush draw, và hoàn thành» ← Flush · «Sảnh: sảnh hai đầu và sảnh lọt khe» ← Straight(GG 표기) · «Flop hiếm: tứ quý, bộ ba, cù lũ, thùng phá sảnh» ← Rare · «Xác suất được chia từng tay bài» ← Dealt(축소) · 🆕 후보 «Backdoor draw đáng bao nhiêu phần trăm?»(4,2 %)
- **FAQ**: EN 11 · «Vì sao nói 7,5 ăn 1 mà cũng nói 1 trong 8 lần?» 🟢(pokerbold·GG 혼동) · «Monster draw là gì?»(→ outs 앵커).

### 7-6. holdem-card-counting — 우선순위 **6**(card counting poker 10 · đếm bài poker `-` · SERP 공백)
- **주력어**: «đếm bài trong poker» · «cách đếm bài poker» · 🔴 «đếm bài» 단독·«card counting» 70 = 블랙잭 → 비교 H2로만.
- **H2**: «Có đếm bài được trong poker không?» · «Vì sao đếm bài kiểu blackjack không dùng được trong poker» · «Đếm bài: poker so với blackjack» · «"Đếm bài" thật sự trong poker: outs, blocker, lá bài chết» · «Đếm bài trong poker có bị coi là gian lận không?»(reddit 축어 · 🔴 phòng bài 규칙 정보로만 — 베트남 도박법·카지노 출입으로 넓히지 않는다) · «Seven Card Stud»
- **FAQ**: EN 8 + «Đếm bài trong poker hoạt động như thế nào?»(reddit ELI5 축어).

### 7-7. holdem-implied-odds — 우선순위 **7**(implied odds poker 10 · reverse 10 · 영어 SERP)
- **주력어**: «implied odds trong poker» / «implied odds là gì» · 🔴 단독은 스포츠 베팅 → 제목에 «poker» · 풀이 «tỷ lệ cược ngầm»(«xác suất thắng ngụ ý»는 혼동 · 비권장).
- **H2**: «Implied odds trong poker là gì?» · «Implied odds khác pot odds thế nào?»(자동완성) · «Cách tính implied odds» · «Ví dụ: flush draw ở turn» · «Cần bao nhiêu implied odds cho từng loại draw?» · «Set mining: đôi nhỏ và implied odds» · «Reverse implied odds» · «Khi nào không nên trông vào implied odds»
- **FAQ**: EN 10(«Đối thủ all-in thì còn implied odds không?» 🟢) · 계산기 «Dùng máy tính implied odds …» 표현 겹침 금지.

### 7-8. 우선순위 요약
1 probability → 2 pot-odds → 3 equity → 4 outs → 5 drawing-odds → 6 card-counting → 7 implied-odds. 🔴 7편 모두 볼륨 10~50 — 순서 근거는 «내부링크 허브»(probability·pot-odds가 나머지 5편의 앵커 목적지)가 볼륨보다 크다.

---

## 8. 0-3 판정 재료 — `/vi/calculator` 경계 (판정하지 않음 · 증거 + 권고 1줄)

**승계 문서**: `vi-tools.md` §4 — 계산기 seo.title «Poker Calculator — Máy tính xác suất poker: equity, pot odds» · desc «… tính xác suất poker, equity giữa các tay bài, pot odds, outs, SPR, M, ICM deal và push/fold — 9 công cụ.» · quickRef `link`은 «vi 코퍼스 8편뿐 → 비움»(현재 SPR·M 표만 `holdem-tournament-vs-cash-game` 링크) · related = vi 8편 전수.

| 증거 | 값 |
|---|---|
| SERP 유형 | «xác suất poker» 글 3(GG·pokerbold·natural8) + 도구 1(holdemcalc #5) + 앱 2 + reddit 3 = **글 우세** · «cách tính xác suất poker» 글 4 + 도구 1 + 앱 1 = 글 우세 · «tính xác suất poker» **도구 6/7** · «poker odds» **도구 6/10** · «pot odds là gì» 베트남어 결과 = pokerslate **도구 1**(정의 글 0) · «equity poker» 앱 4 + reddit 4 |
| 동사형 vs 명사형 | «tính / app / phần mềm tính xác suất poker» → 도구 · «cách tính / bảng xác suất poker» → 글 |
| 관련검색 | «xác suất poker» → «Phần mềm tính xác suất poker · Tool poker · Phản mềm tính Poker» = 구글이 도구를 이웃으로 본다 |
| 계산기 FAQ 겹침 | 7문항(§6) — 이 레인 글 FAQ와 같은 의미 |
| 계산기 desc | «tính xác suất poker»를 이미 품었다(vi-tools 조준) — 글이 같은 동사형을 쓰면 정면 카니발 |

**권고(1줄)**: 글 = **«xác suất / bảng / là gì / cách tính(손 계산법)»**, 계산기 = **«máy tính / app / phần mềm / tính … (online) / calculator»** — 글 title·H1에 «máy tính·app·phần mềm·calculator»를 쓰지 않고, 계산기 FAQ 7문항과 같은 문장을 글 FAQ에서 피하며(의미가 같으면 문장을 바꾸거나 계산기 앵커), 7편 발행 시 계산기 quickRef `link`(equity 표 → holdem-equity · outs 표 → holdem-outs · pot odds 표 → holdem-pot-odds · AA vs N명 → holdem-probability)와 related에 추가해 «링크할 곳이 없다» 상태를 해소한다.

용어 정본 재료(0-3): 2와4 = **«quy tắc 4 và 2»**(계산기 정본 · GG 블로그 동일 · 경쟁 «2 và 4 / 2/4 / 2%/4%» — 전부 볼륨 null) · gutshot = «gutshot (sảnh lọt khe)»(GG · 경쟁 «sảnh trong / khe / lửng») · OESD = «sảnh hai đầu» · draw = «draw (bài chờ)» · set «set» / trips «bộ ba» · implied 풀이 «tỷ lệ cược ngầm» · EV «EV (giá trị kỳ vọng)» · pot odds 풀이 «tỷ lệ pot»(«tỷ lệ cược nồi» 직역 회피) · 숫자 표기는 기존 vi 8편·계산기와 일치 확인.

---

## 9. 커버리지 표

### 9-A. 검색어별 (0 오염 · 1 자동완성 · 2 볼륨 · 3 SERP·PAA · 4 원문 정독)
| 검색어 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| xác suất poker (헤드) | ✅ 있음 | ✅ | ✅ 10 | ✅ PAA 없음 · 관련 8 | ✅ GG · pokerbold · natural8 · holdemcalc |
| poker odds (헤드) | ✅ 있음 | ✅ | ✅ 50 | ✅ 관련 8 | ✗ 베트남어 글 0(영어 계산기 6) → probability 정독으로 대체 |
| pot odds (헤드) | ✅ 있음 | ✅ +là gì | ✅ 20 · 신규 4 | ✅ PAA 2 · KG · +là gì · +trong poker | ✅ natural8 · GG 블로그 · pokerslate |
| outs poker (헤드) | ✅ 섞임 | ✅ +là gì · trong(빈칸) | ✅ 10 · 신규 1 | ✅ KG · 보조 2쿼리 PAA 4 | ✅ natural8 «lá bài out» 절 · GG FAQ · hackmd(유형) |
| cách tính bài poker (헤드) | ✅ 의도 오염 | ✅ | ✅ 40 | ✅ 관련 8 | ✗ 족보 글 → L-B(조준 안 함) |
| implied odds (경량) | ✅ 없음(베팅) · +poker 있음 | ✅ | ✅ 10 · 신규 2 | ✅ PAA 4+4 · +trong poker | ✅ natural8 · giaytoxe 해당 절 |
| equity poker (경량) | ✅ 있음 | ✅ +trong · là gì | ✅ 30 · 신규 3 | ✅ PAA 2+4 · ev poker là gì | ✅ giaytoxe · wikipoker · pokerqz · GG 블로그 |
| rule of 4 and 2 (경량) | ✅ 있음 | ✅ +quy tắc(빈칸) | ✅ 10 · 신규 2 | ✅ PAA 2 · +quy tắc 2 và 4 | ✅ pokerqz · natural8 FAQ |
| đếm bài poker (경량) | ✅ 의도 공백 | ✅ +card counting poker | ✅ `-` · 신규 4 | ✅ 관련 8 · +trong poker · +card counting PAA 4 | ✗ 카드 카운팅 글 0 — 공백 자체가 결과 |
| equity là gì · draw là gì · drawing hand · ev là gì · pocket pair · card counting | ✅ 전부 없음 | ✅ | ✅ | ✅ | — 조준 안 함 |
| 보조 6(cách tính xác suất poker · tính xác suất poker · tỷ lệ thắng poker · cách tính outs trong poker · ev poker là gì · implied odds poker) | ✅ 있음 | ✅ | ✅ | ✅ | ✅ pokerqz · wikipoker |
| 와일드카드 5종 + 추가 3종 | — | ✅ | — | — | — |

### 9-B. 글별 «PAA·자동완성 질문 확보»
| 글 | PAA·SERP 질문 축어 | 자동완성 질문형 | 판정 |
|---|---|---|---|
| probability | GG FAQ «Tỷ lệ AA so với KK là bao nhiêu?» · Natural8 «Xác suất thắng trong poker có thay đổi khi có nhiều người chơi hơn không?» · reddit «Xác suất để có được tứ quý trong Texas Hold'Em là bao ...» | cách tính xác suất (trong) poker · bảng xác suất poker · tỷ lệ thắng của các hand bài trong poker | ✅ |
| pot-odds | reddit «Ý nghĩa của pot odds là gì vậy?» · PAA «What is the 15/25/35 rule in poker?»(근거 미확인 → 받지 않음) | pot odds là gì · pot odd là gì · pot odds trong poker · pot odds vs equity | ✅ |
| outs | GG FAQ «Outs trong poker là gì?» · reddit «Làm thế nào để tính Outs trong Poker?» | (베트남어 빈칸) → 영어 count outs poker · SERP 제목형 «cách tính outs trong poker» | ✅ |
| drawing-odds | GG FAQ «Tỷ lệ để có một bộ bài chờ thùng sau khi lật bài là bao nhiêu?» · PAA «How often flops a 2 pair?»(×3) | monster draw poker là gì · flush draw odds · gutshot meaning poker | ✅ |
| implied-odds | PAA «What are implied odds in poker? · What is the 4-2 rule in poker?» · reddit «Công thức tính tỷ lệ cược ngầm là gì?» | implied odds là gì · reverse implied odds poker · implied odds vs pot odds poker | ✅ |
| equity | PAA «Equity poker là gì? · Equity gồm những gì?» · GG «Pot equity là gì?» | equity (trong) poker là gì · cách tính equity trong poker · ev là gì trong poker · công thức tính ev poker | ✅ |
| card-counting | reddit «Giải thích cho người 5 tuổi: Đếm bài trong poker hoạt động ...» · «Tại sao "Đếm bài" trong Poker lại bị coi là gian lận?» · PAA «Is card counting illegal?» | cách đếm bài poker · đếm bài trong poker · is card counting in poker illegal | ✅ |

✗ 2건(«poker odds»·«cách tính bài poker» 원문 정독)은 이유 명기 — 전자는 베트남어 글 부재(probability 정독으로 대체), 후자는 L-B 의도. 글별 질문 확보 ✗ **0**.
