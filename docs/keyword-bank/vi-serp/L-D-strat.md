# L-D 전략 — vi SERP 조사·처방 (vi 클러스터 0-2 · 2026-10-08)

> 규격 = `00-brief.md` 0~8. 대상 8편(새 vi · EN 마스터 `lib/posts-en/<slug>.ts` 대조): holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold.
> 측정: DataForSEO `serp/google/organic/live/advanced`(2704 · vi · desktop · depth 10) **37쿼리** · `serp/google/autocomplete/live/advanced`(2704 · vi · chrome) **40시드** · `keywords_data/google_ads/search_volume/live`(2704 · vi) **새 후보 82개 1회** — 2026-10-08. 0-1 볼륨(`vi-core-volumes.md`)은 재측정 안 함.
> 원자료(gitignore) = `tmp/vi/L-D/` — `serp-out.json/.txt`(20쿼리) · `serp2-out.json/.txt`(12) · `serp3-out.json`(5) · `ac-out.json/.txt` · `vol-in.json`·`vol-out.json/.txt` · `p1-out.json`·`p2-out.json`·`p3-out.json`(정독 본문 14,000자·H1~H3).
> 정독 = 레포 Node fetch로 H1~H3 **DOM 축어** + 단어 수·표·이미지·FAQ 신호 · ggpoker.com/vi는 403 → exa 원문 캐시. Google 자동번역 결과(`google.com/goto?url=…`)는 breadcrumb으로 원 URL을 복원했다.
> 🔴 SERP 제목·PAA·헤딩·자동완성은 **원문 축어**(베트남어·영어 그대로). AI overview는 유무만. 금지 축(실머니·카지노·앱·합법성) 결과는 **유형 집계로만** 남긴다.

---

## 0. 결론 5줄

1. 🔴 **«3 bet» 27,100은 포커가 아니다.** 자동완성 «3 bet app · 3 bet casino», SERP «3bet» 1위 = `3bet.cards`(«Trang Nhà Cái Cá Cược Thể Thao, Đá Gà & Live Casino») · x.com «3BET – Cổng Game Chính Thức» · facebook «3BET LTD» → **도박 브랜드명(금지 축)**. 포커 몫 = «3bet poker» 90 + 새로 잰 «3 bet là gì» 20 · «3 bet trong poker là gì» 20.
2. 🔴 **«cbet» 1,300도 포커가 아니다**(SERP 포커 0/8 — 리투아니아 카지노 cbet.lt ×4 · CBET 토큰 · 페루 앱). **«under the gun» 170 = 영화·노래·드라마**(포커 1/8 · PAA «Under the gun nghĩa là gì?»), **«limp là gì» 170 = 절뚝거림·limp mode**(포커 0/10), **«khi nào nên fold» = Galaxy Z Fold**(0/9). 이 넷은 조준하지 않는다.
3. 살아 있는 포커 헤드는 전부 **두 자릿수**: vị trí trong poker 70 · poker positions 70 · position poker 70 · 3bet poker 90 · chiến thuật poker 50 · poker strategy 50 · mẹo chơi poker 40 · fold trong poker là gì 50(새) · limping là gì 110(새 · 🔴 오염 1/10). 전략 축은 볼륨이 아니라 **갭**으로 먹는다.
4. **vi 전략 SERP의 정체 = 기계번역 + 포커룸 블로그.** «vị trí trong poker» 상위 6건 중 4건이 Google 자동번역(tightpoker·Quora·wikiHow·WinStar), reddit `?tl=vi` 번역이 거의 모든 SERP에 1~4건. 베트남어 원문 해설은 natural8.com/vi · ggpoker.com/vi(포커룸) · wikipoker.net · propokervn.com · thegioipoker.vn(장비 쇼핑몰)뿐 → **베트남어 원문 + 정확한 수치 + 경험담**이 그대로 빈자리.
5. 상위 원문에서 **§13 오류 4건 확인**: ggpoker «Một sảnh đánh bại một thùng» · natural8 «sảnh, thùng … tất cả đều đánh bại tay bài cù lũ» · natural8 «lần tăng cược đầu tiên được biết đến là cược Big Blind» · propokervn EP «AA, KK, QQ, JJ, AKs, AQs» = «12-15%»(실제 2.4%). §6 참조.

---

## 1. 볼륨

### 1-A. 0-1 승계 (`vi-core-volumes.md` §2 🅳 · 재측정 안 함)

수치는 0-1 표 그대로. 이 레인이 바꾼 것은 표기뿐: **3 bet·3bet 27,100 = 브랜드(오염)** · **cbet 1,300 = 오염** · **under the gun 170 = 오염** · **limp là gì 170 = 오염**(§2). 살아 있는 0-1 헤드 = 3bet poker 90 · vị trí trong poker / poker positions / position poker 각 70 · chiến thuật poker 50 · poker strategy 50 · các vị trí trong poker 50 · mẹo chơi poker 40 · c bet là gì 30 · cách chơi poker chuyên nghiệp 30 · limp poker 20.

### 1-B. 새 후보 (82개 1회 · `-` = Google Ads 데이터 없음 ≠ 0 · CPC 미사용)

| 검색어 | 볼륨 | 배정 / 비고 |
|---|---:|---|
| limping là gì | 110 | limping — 🔴 SERP 포커 1/10(«què quặt»·«khập khiễng») → **오염** |
| under the gun là gì | 70 | positions — 🔴 SERP 포커 0/10(영어 숙어 사전) → **오염** |
| **fold trong poker là gì** | **50** | 🔴 0-3 ③ — SERP 10/10 포커(정의 글 없음 · PAA «Fold poker là gì?») |
| utg là gì | 30 | positions — 🔴 SERP = «OTG» 오타 교정(포커 2/10) → **오염** |
| utg poker là gì | 20 | positions(자동완성 «utg poker là gì») |
| 3 bet là gì | 20 | 3bet — SERP 포커 3/10(나머지 골프·바카라·평발 «bàn chân bẹt») → 섞임 |
| 3 bet trong poker là gì | 20 | 3bet(포커 결합형 · 순수) |
| fold là gì trong poker · cbet poker · continuation bet poker · c bet poker là gì · 4bet poker · 3bet range · 3bet light · squeeze poker · tight aggressive poker · tag poker | 각 10 | 해당 글 |
| poker positions chart · poker positions 6 max · position poker 6 max · poker position names · poker positions explained · utg poker range · lojack poker · in position poker · out of position poker | 각 10 | positions / position-play(in/out of position) |
| under the gun poker · under the gun meaning | 각 10 | positions |
| starting hands poker chart · best starting hands poker | 각 10 | starting-hands-chart(🔴 차트 도구 경계 §10-C) |
| poker strategy for beginners · poker strategy chart · mẹo chơi poker luôn thắng · cách chơi poker hiệu quả · cách chơi poker hay · bí quyết chơi poker giỏi | 각 10 | strategy |
| bỏ bài trong poker | 10 | when-to-fold / betting-actions |
| limp poker meaning | 10 | limping |
| `-` 44개(vị trí X trong poker 12 · chiến thuật/chiến lược/cách thắng 14 · khi nào nên fold/bỏ bài · 3bet poker là gì · 3 bet 4 bet là gì · c bet trong poker là gì · button trong poker là gì · limp call là gì · tay bài khởi đầu · bài tẩy poker 등) | `-` | 자동완성엔 있으나 Ads 무데이터 — 목록은 `vol-out.txt` |

→ 0-1과 같은 형: **검색 술어 = 영어 차용어(3bet·limp·fold·utg·position) + «là gì / trong poker»**. 베트남어 풀이어(vị trí ~ trong poker · bài khởi đầu · bỏ bài)는 자동완성엔 뜨지만 Ads 데이터가 거의 없다.

---

## 2. 0단계 — 오염 판정 (SERP 상위 organic 중 **포커 결과 수**)

| 헤드 | 볼륨 | 포커/organic | 판정 | 비포커 정체(축어) |
|---|---:|---|---|---|
| **3 bet** | 27,100 | 7/10(전부 영·포·라·이탈리아어 · 베트남어 0) | 🔴 **볼륨은 브랜드** | 자동완성 «3 bet app · 3 bet casino», 동형 «3bet» SERP 1위 `3bet.cards` «3BET - Trang Nhà Cái Cá Cược Thể Thao, Đá Gà & Live Casino» · 8위 x.com «3BET – Cổng Game Chính Thức 3bet.com Link Mới»| Login» → 27,100은 **도박 브랜드 수요**(금지 축). |
| 3bet | (=27,100) | 4/8 섞임 | 🔴 브랜드 | 위와 같음 · reddit «Hiểu % 3bet?»(tl=vi) · wikipoker tag «3 bet» · LinkedIn «3-bet là gì? Hướng dẫn chi tiết cho người mới chơi Poker» |
| **3bet poker** | 90 | 9/9 | ✅ 포커 몫 있음 | 3위 Google Play «3Bet Poker»(앱 · 금지 축 유형) |
| 3 bet là gì | 20 | 3/10 | 섞임 | 골프 «3-Ball» · 바카라 · craps · «BÀN CHÂN BẸT Ở TRẺ» ×2 · «Góc bẹt» |
| 3bet là gì | 10 | 8/10 | ✅ (단 베트남 포커 커뮤니티 FB 포스트 위주 · «Đà Nẵng triệt phá tụ điểm Poker» 단속 뉴스 1) | — |
| **cbet** | 1,300 | **0/8** | 🔴 **없음 · 조준 금지** | cbet.lt ×4(«kazino lošimai internetu») · coinmarketcap «CBET Token» · Google Play «CBET»(페루 전자세금 앱) · softonic «Cbet mobile version» · x.com «Cbet (@Cbetgg)». 자동완성 «cbeta · bet88 · kubets · kubet bị triệt phá» |
| c bet là gì | 30 | 5/7(전부 외국어: reddit tl=el/uk/fa · 태국 FB · myclubgg · casinoedge) | 섞임 · **베트남어 0** | 1위 cbet.lt «betting-rules» |
| c bet poker | (10) | 8/9(영·노르웨이어) | ✅ 포커 · 베트남어 0 | gobh.pbh.gov.br «C Bet Poker - Apps on Google Play»(기생 스팸) |
| c-bet trong poker · continuation bet là gì | `-` | 10/10 · 10/10 | ✅ 포커 · **베트남어 0**(체코·네덜란드·이탈리아·덴마크·페르시아) | — |
| **under the gun** | 170 | **1/8** | 🔴 **없음** | 노래(Sisters of Mercy) · 영화 2016/1951 · Spotify · 사전 · udn 블로그 · AIO(사전 출처) · 자동완성 «under the gun phim · kdrama» |
| under the gun là gì | 70 | 0/10 | 🔴 없음 | wordreference·linguee·artisanenglish·idiom 쇼츠 · AIO 있음 |
| utg là gì | 30 | 2/10 | 🔴 없음 | «OTG là gì» ×6(Google이 OTG로 교정) · UTG App |
| utg poker | 10 | 10/10 | ✅ (영어 전부) | — |
| **vị trí trong poker** | 70 | 10/10 | ✅ 있음 | — (상위 6 중 4 = Google 자동번역 · §3) |
| poker positions · position poker | 70 · 70 | 8/8 · 10/10 | ✅ 있음 · 영어 독식 | — |
| **limp là gì** | 170 | **0/10** | 🔴 **없음** | «đi khập khiễng»(의료) · limp mode(BMW·Can-Am) · 사전 · 자동완성 «limp mode là gì · limp hair» |
| limping là gì | 110 | 1/10 | 🔴 없음 | «Què quặt tiếng Anh là gì» · «Cà thọt» · vov 마피아 기사 · 반려견 FB |
| limp poker · limp trong poker là gì | 20 · 10 | 2/2 · 10/10 | ✅ 있음 | — |
| **khi nào nên fold** | `-` | **0/9** | 🔴 없음 | Galaxy Z Fold 7/8 · iPhone Fold · 빵 반죽 «coil fold». AIO 있음 |
| fold là gì | 880(0-1 · L-A 소관) | 0/9 | 🔴 없음(사전 9건) | 관련 검색 «Fold là gì trong Poker» |
| fold trong poker là gì | 50 | 10/10 | ✅ 있음 | — |
| khi nào nên bỏ bài poker | `-` | 7/10 | 섞임 | vi.wikipedia «Xì tố» · vtv·laodong **합법성 기사 2**(금지 축) · pioneerdj 스팸 |
| chiến thuật poker · cách chơi poker giỏi · mẹo chơi poker · chiến lược poker · poker strategy | 50·20·40·`-`·50 | 9/9 · 9/9 · 8/8 · 9/9 · 10/10 | ✅ 있음 | chiến thuật 3위 congly.vn «Chơi Poker thế nào là hợp pháp?»(합법성 · 금지 축) |
| bài khởi đầu poker · tay bài khởi đầu poker | `-` · `-` | 5/5 · 3/3 | ✅ 저품질 | cff.us.com «…tại 8DAY»(카지노 제휴 · 현재 404) · reina.de.com(Live Casino 카테고리) · YouTube |
| poker starting hands | 10 | 10/10 | ✅ 영어 · 핀터레스트 ×4 | — |

**판정 요약**: 오염(조준 금지·볼륨 표기에 «오염») = **3 bet/3bet 27,100 · cbet 1,300 · under the gun 170 · under the gun là gì 70 · utg là gì 30 · limp là gì 170 · limping là gì 110 · khi nào nên fold**. 조준 가능 헤드 = 포커 결합형(«… poker» · «… trong poker là gì»)뿐.

---

## 3. SERP 상위 10 + PAA (2704 · vi · desktop) — 오염 확정 헤드는 §2로 갈음

유형: [번역]=Google 자동번역 결과(원 URL 복원) · [룸]=natural8·ggpoker · [커뮤]=wikipoker·propokervn · [쇼핑]=thegioipoker(장비몰) · [제휴]=카지노·도박 제휴/기생 · [법]=합법성 기사 · [rd]=reddit `?tl=vi` 기계번역.

| 헤드 | SERP 기능 | 상위 organic (순위 · 유형 · 제목 축어) | PAA / related 축어 |
|---|---|---|---|
| chiến thuật poker (50) | video 2 · AIO✗ | 1 [쇼핑] «Mẹo chơi Poker» · 3 [법] congly «Chơi Poker thế nào là hợp pháp?» · 4·5 [룸] natural8 «Khoa học kết hợp trong Poker…» · «10 mẹo nhanh và dễ dàng cho người mới bắt đầu chơi poker» · 6 poker-place «Từ Điển Poker…» · 7 [커뮤] propokervn «Chiến Thuật Poker Cho Người Mới: Cách Làm Chủ Bàn Chơi» · 9 [제휴] infoser.in | related: Cách chơi poker · Poker luật · Poker online · Poker là gì · Thứ tự bài Poker · Chơi Poker là gì · Chơi Poker có hợp pháp không · Luật chơi poker 5 lá |
| cách chơi poker giỏi (20) | video 3 | 1 [룸] ggpoker «Mẹo & Chiến Lược Poker cho Người Mới Bắt Đầu» · 2 [rd] «Làm sao để chơi poker giỏi vậy? (Mới chơi lắm)» · 3 [쇼핑] «Ba kĩ năng quan trọng…»(2017) · 5 FB WPTVN «MẸO CHƠI POKER BỎ TÚI» · 6 [커뮤] wikipoker «10 Mẹo cho người mới chơi Poker đánh đâu thắng đó» · 7·9 [룸] natural8 «Cách chơi Poker giỏi hơn» · «…như một người chuyên nghiệp» | related: Cách chơi poker cơ bản · Cách chơi Poker 2 lá · Cách dành poker chuyên nghiệp · Cách chơi Poker Night |
| mẹo chơi poker (40) | — | [번역] wikiHow ×2 · instructables · howstuffworks · [rd] ×2 · docs.google 폼[제휴] | **PAA: «Làm thế nào để chơi bài poker?» · «Có những kiểu người chơi poker nào?»** |
| **vị trí trong poker (70)** | AIO✗ · PAA✗ | 1 [번역] tightpoker «Các vị trí trong Poker» · 2 [번역] Quora · 3 [번역] wikiHow «Cách chơi ở vị trí Under the Gun (UTG) trong Poker» · 4 [번역] WinStar · 5·8·10 [rd] · 6 [번역] liveabout(2018) · 7·9 [룸] natural8 «…vị trí hijack…» · «…bảo vệ Big Blind…» | related: **Check trong poker là gì · Raise trong Poker là gì · Utg là gì Poker · Under the gun trái nghĩa** |
| poker positions (70) | PAA · video · shorts | billiardsdirect · partypoker · liveabout · upswing · somuchpoker · quora — 전부 영어 | **PAA: «What are the names of the different positions on a poker table?» · «What does LJ stand for in poker?» · «What is co in poker?» · «What are the different poker games called?»** |
| position poker (70) | video 4 · KG | en/fr.wikipedia «Position (poker)» · pokercode · pokertrainer · pokerprofessor — 영어 | related: Position poker 6-max · 9-max · 8 max · Position table poker · Hijack Poker · Poker range |
| utg poker (10) | — | thelodge · pokernews «Under the Gun (UTG) in Poker \| What it is and How to Play» · splitsuit «Hands To Play UTG In Live Poker In 2026» · pokerstrategy «UTG Pre-flop Ranges» — 영어 | related: UTG+1 poker · UTG poker chart · **Why is it called under the gun in poker** · HJ poker · MP poker · Button poker |
| vị trí button trong poker (-) | PAA | [커뮤] propokervn «Vị Trí Trong Poker: Bí Quyết Khai Thác Lợi Thế Để Tăng Tỷ Lệ …» · ghiensaigon «Poker Vị Trí Button Có Lợi Gì…»[제휴 링크팜] · riyadh.dev «…U888» · smartcity.vsqi.gov.vn «789K…»[기생] | PAA: «"Call" trong poker có nghĩa là gì?» · «Flush trong poker là gì?» · «Blind trong poker là gì?» |
| **3bet poker (90)** | video 3 | 1 winstar · **2 [룸] natural8 «3-Bet trong poker: Định nghĩa và cách dùng»** · 3 Google Play «3Bet Poker»[앱] · 4 pokertrainer.se · **5 [커뮤] wikipoker «Đối mặt với 3-bet ở preflop khi có và không có vị trí»** · **8 [룸] ggpoker «3-Betting và 4-Betting»** | related: 3bet help · Range 3bet · Bet3 · X-Poker(금지) |
| limp poker (20) | PAA | 1 [번역] pokernews «Định nghĩa Limp \| Limp trong Poker là gì?» — 스니펫 «Trong poker, Limp nghĩa là theo cược lớn (big blind) trước khi chia bài, thay vì tăng cược (raise) hoặc bỏ bài (fold).» · 2 [rd] «Limp trong Poker Về Nguyên Tắc Là Được.» (organic 2건뿐) | **PAA: «Limp trong poker là gì?» · «Poker là gì trong bóng đá?» · «Chia bài poker gọi là gì?» · «Call trong poker là gì?»** |
| limp trong poker là gì (10) | PAA | 1 [룸] natural8 «Cách chơi hiệu quả khi đối đầu với người chơi chiến thuật …» · 2 [커뮤] wikipoker «Cách chơi Limp Pot trong Poker…» · 3 FB «Limp là gì? 7 Bí quyết huỷ diệt các Limper…» · 4 pokerqz «Limp \| Bảng thuật ngữ» · 7 [룸] ggpoker «Limping» · 888poker · quora | **PAA: «Limp poker là gì?»** + 위 3개 |
| c-bet 4쿼리(c bet là gì · c bet poker · c-bet trong poker · continuation bet là gì) | video(c bet poker) | organic 38건 중 **베트남어 원문 0**(영·체코·네덜란드·이탈리아·덴마크 · [rd] 1 «Chiến lược Cbet Flop Đơn giản») · 기생 1(gobh.pbh.gov.br) | related: C-bet meaning poker · What is a 3-bet/4-bet in poker · What is a donk bet in poker · What is a value bet in poker · What is range in poker |
| bài khởi đầu poker (-) | PAA · video | cff.us.com «…tại 8DAY»[제휴 · 404] · reina.de.com[제휴 · Live Casino] · YouTube ×3 | PAA: «Poker có những bộ bài nào?» · «Làm thế nào để chơi bài poker?» · «Làm cách nào để chơi bài poker 5 lá?»(규칙·다른 게임) |
| cách chơi tay bài khởi đầu poker (-) | — | [번역] pokerprofessor «Bài khởi đầu trong Poker: Chơi theo xác suất…» · [번역] thesprucecrafts «5 bộ bài khởi đầu tệ nhất…» · [룸] natural8 ×3 | → «bài khởi đầu» = 번역 표준어 |
| **fold trong poker là gì (50)** | PAA | [rd] Push/Fold · YouTube «7 cách Bet Poker tại 3 vòng cược…» · FB 베트남 포커 커뮤 ×5(«Top Hit nhưng anh vẫn lựa chọn Fold» · «Call hay fold?») — **정의 글 0** | **PAA: «Fold poker là gì?» · «Blind trong poker là gì?» · «Flush trong poker là gì?» · «"Call" trong poker có nghĩa là gì?»** |
| khi nào nên bỏ bài poker (-) | related | [쇼핑] · [rd] «Chơi poker mà bỏ bài thì có ý nghĩa gì?» · vi.wikipedia «Xì tố» · [룸] ggpoker · **[룸] natural8 «Khi nào nên bỏ bài khi có đôi Át trong poker?»** · vtv·laodong [법] ×2 · 스팸 1 | related: … · Poker bài nào lớn nhất · Cách chia bài Poker |
| khi nào nên bỏ bài trong poker (-) | PAA | propokervn «Các Vòng Cược Trong Poker…» · oneliving[기생] · [rd] ×2 | PAA: «Làm cách nào để chia bài trong poker?» · «Làm cách nào để chơi poker giỏi?» |
| poker strategy (50) | PAA · video 3 | pokerstrategy.com · brilliant · reddit · wikipedia · upswing «10 Quick Poker Strategy Tips…» · blackrain79 — 영어 | **PAA: «What is the best strategy in poker?» · «Is poker mostly luck or skill?» · «What does the 80/20 rule mean in poker?» · «What is the 7/2 rule in poker?»** |

🔴 «vị trí trong poker» 1위 tightpoker 번역 스니펫 축어: «Người cầm súng đầu tiên (UTG), Người cầm cờ thứ hai (HJ), Người cắt (CO)» — 포지션명 기계 오역. **베트남어 원문 포지션 글이 1페이지에 0.**

---

## 4. 자동완성 (2704 · vi · 축어 · 포커 무관·외국어는 생략 · 전체 `ac-out.txt`)

| 시드 | 자동완성 축어(포커 관련만) |
|---|---|
| chiến thuật (chơi) poker | chiến thuật poker tournament · chiến thuật đánh tour poker · chiến thuật poker cash game · chiến thuật trong poker · chiến thuật chơi poker tour |
| cách chơi poker giỏi / hay · mẹo · bí quyết | mẹo chơi poker giỏi · chơi poker giỏi bạn không nên · cách chơi poker hiệu quả · cách chơi poker hold em · mẹo chơi poker luôn thắng · mẹo chơi poker hay · bí quyết chơi poker giỏi · bí kíp chơi poker · cách chơi thắng poker · cách thắng trong poker |
| poker strategy | chart · equilab · books · pdf · reddit · calculator · texas holdem · tournament · cash game · for beginners |
| vị trí trong poker / vị trí poker | **vị trí utg · ngồi · dealer · hj · button · mp · co · cut off trong poker · vị trí trong bàn poker · vị trí đẹp/tốt trong poker · vị trí bàn poker 8 người · vị trí trên bàn poker** |
| poker positions / position poker | explained · on table · 6 players · 6 max · 6 handed · diagram · 8 max · chart · names · 9 handed · ranked / table · 9 max · strategy · utg · meaning · mp · poker position names 9 players |
| utg · under the gun · cutoff/button poker | **utg poker là gì** · **under the gun là gì · under the gun poker · under the gun meaning poker · under the gun poker là gì** (+ phim · kdrama · cast) · cutoff poker position/range/chart · **button trong poker là gì** · dead button poker |
| 3 bet · 3bet · 3bet là gì · 3bet poker | **3 bet là gì · 3 bet trong poker là gì · 3 bet light poker · 3bet poker là gì · 3 bet 4 bet là gì · 3 bet là sao** · 3bet range · 3bet light · 3bet pot poker · poker 3bet 4bet · poker 3bet size · (🔴 3 bet app · 3 bet casino · http://3bet.com · 3bet apostas · 3bet login) |
| 4bet | (🔴 4bet prediction today · 4bet365 casino · 4bet app download) · 4bet poker |
| cbet · c bet · c bet là gì · continuation bet | (🔴 cbeta · bet88 · cbet app · kubets) · **c bet là gì · c bet trong poker là gì · c bet poker là gì** · continuation bet sizing · **delayed continuation bet** |
| limp · limp là gì · limp poker | **limp là gì poker · limp trong poker là gì · limping là gì · limp call là gì · what is open limp in poker · poker limp pot · poker limp raise · poker limp strategy** (+ limp mode · limp bizkit · limp hair) |
| fold poker | **fold poker là gì** · fold poker hands · fold poker meaning |
| khi nào nên fold · bài khởi đầu poker · bài nên chơi poker | **빈 응답** · «khi nào nên bỏ bài» = bỏ cuộc · bỏ bú cho bé(비포커) |
| starting hands poker | chart · ranked · odds · best · good · worst · top · strong · percentages · starting poker hands to play |

→ **포지션 축만 베트남어 자동완성이 풍부**(«vị trí X trong poker» 10종 = 좌석별 정의 수요). 시작 핸드·폴드는 베트남어 자동완성이 비어 있다.

---

## 5. 원문 정독 (H1~H3 축어 · 단어 수는 본문 추출 근사치 · 사이드바 관련글 헤딩 제외)

| 글 | URL · 유형 · 갱신 | 분량 · 표/이미지/FAQ | H1/H2/H3 축어 |
|---|---|---|---|
| strategy | propokervn.com/chien-thuat-poker-cho-nguoi-moi/ · 커뮤 · 2026-04-11 | ~1,320 · 0/5/✗ | H1 Chiến Thuật Poker Cho Người Mới: Cách Làm Chủ Bàn Chơi / H2 Tư Duy Đúng Đắn Khi Bắt Đầu Hành Trình Poker · Nghệ Thuật Lựa Chọn Vị Trí Và Quản Lý Vòng Cược · Kỹ Năng Đọc Vị Đối Thủ Và Kiểm soát Tâm Lý · Quản Lý Vốn Và Tầm Quan Trọng Của Kỷ Luật · Không Ngừng Học Hỏi Để Nâng Tầm Kỹ Năng · Kết Luận |
| strategy | natural8.com/vi/blog/poker-tips-for-beginners · 룸 | ~2,300 · 0/5/✓ | H2 #1 Đừng chỉ call với số tiền cược tối thiểu ở vòng trước flop · #2 Tăng cược lần 3 ( 3-bet) với phạm vi tay bài rộng ở vòng trước flop · #3 Đừng call khi ở vị trí small blind · #4 Đừng chơi chậm khi có tay bài mạnh ở vòng trước flop · #5 Đừng đặt cược tiếp theo với 100% tay bài của bạn · #6 Bỏ bài khi đến vòng river · #7 Lấn lướt những người chơi yếu hơn · #8 Check và tăng cược nhiều hơn khi ở vị trí big blind · #9 Hãy để cho những người chơi hiếu chiến sử dụng bluff · #10 Đừng chơi những tay bài tiềm năng yếu |
| strategy | natural8.com/vi/blog/how-to-get-better-at-poker · 룸 | ~1,990 · 0/2/✓ | H2 Bước 1: Nắm vững luật chơi và thứ hạng tay bài · Bước 2: Chơi chặt chẽ, đừng chơi rộng (lúc đầu) · Bước 3: …toán học trong Poker · Bước 4: Quan sát đối thủ · Bước 5: Quản lý vốn… · … · Bước 8: Biết khi nào nên bỏ bài và khi nào nên bắt bluff · Bước 9 · Bước 10 / H3(FAQ) 1. Mất bao lâu để trở thành người chơi poker giỏi hơn? · 3. Bluff có thực sự cần thiết để chơi poker giỏi không? |
| strategy | wikipoker.net/meo-cho-nguoi-moi-choi-poker/ · 커뮤(필명 «Cậu Vàng Chơi Poker») · 2024-08 / 수정 2026-09-22 | ~2,800 · 0/37/✓ | H1 10 Mẹo cho người mới chơi Poker đánh đâu thắng đó / H2 Mẹo … #1: Lựa chọn hand khởi đầu một cách cẩn thận · #2: Đừng nên bluff quá nhiều · #3: Luôn nghĩ về bài của đối phương · #4: Chơi với người chơi tệ hơn bạn · #5: Chọn vị trí hợp lý khi chơi · #7: Chơi đúng mức blind phù hợp với bankroll · #9: Đừng nên ảo tưởng vào những hand đồng chất · #10: Biết rõ luật chơi |
| strategy | ggpoker.com/vi/poker-basics/basic-poker-strategy-tips/ · 룸(exa) | ~1,100 | H3 Đừng Chơi Mọi Ván Bài · Chú ý đến các lá bài trên bàn · Chú ý đến những người chơi khác · Đừng tiếp tục chơi chỉ vì bạn đã đặt cược chip · Đừng Bluff cho đến khi bạn hiểu cách Bluff · Đừng Chơi Poker Khi Tâm Trạng Xấu · Đừng Chơi Khi Say · Chơi ở Mức Phù Hợp Với Bạn |
| positions | propokervn.com/vi-tri-trong-poker-ty-le-thang/ · 커뮤 · 2026-05-20 | ~1,720 · 0/6/✗ | H1 Vị Trí Trong Poker: Bí Quyết Khai Thác Lợi Thế Để Tăng Tỷ Lệ Thắng / H2 Vị Trí Trong Poker Là Gì? · Phân Loại Các Vị Trí Trong Poker Texas Hold'em · Cách Khai Thác Lợi Thế Vị Trí Trong Poker · Bảng Range Tay Bài Theo Vị Trí · Sai Lầm Phổ Biến Liên Quan Đến Vị Trí / H3 1. Early Position (EP) – Vị Trí Sớm · 2. Middle Position (MP) – Vị Trí Giữa · 3. Late Position (LP) – Vị Trí Muộn · 4. Blinds (SB và BB) – Vị Trí Đặc Biệt · Steal Blinds Từ Late Position · Isolation Raise · Continuation Bet (C-Bet) Hiệu Quả · Float Play |
| position-play | natural8.com/vi/blog/hijack-in-poker · how-to-defend-your-big-blind · 룸 | ~1,100 · ~1,630 | H2 Ý nghĩa chiến lược của vị trí hijack · Những sai lầm thường gặp cần tránh · Chiến lược chơi hiệu quả ‖ H2 Thay đổi chiến lược Big Blind · Khi nào nên bảo vệ Big Blind? · Xây dựng một phạm vi bài · Chiến lược bảo vệ đối với các chồng chip có kích thước khác nhau · Bảo vệ BB khi đấu với nhiều người chơi |
| 3bet | natural8.com/vi/blog/what-is-a-3-bet-in-poker · 룸 | ~2,710 · 0/3/✓ | H2 3-bet là gì trong poker? · Khi nào xảy ra tăng cược lần thứ ba? · Tại sao bạn nên 3-bet? · Các loại phạm vi 3-Bet · 3-Bet nhẹ để cân bằng phạm vi của bạn · Làm sao để chọn kích thước 3-Bet phù hợp? / H3 Phạm vi mạnh · Phạm vi phân cực · Phạm vi hợp nhất (Merged Range) · Ví dụ … khi bạn ở vị trí thuận lợi · … không thuận lợi · Thời điểm nên sử dụng 3-Bet |
| 3bet | wikipoker.net/co-vi-tri/ · 커뮤 · 2024-07 / 2025-03 | ~4,600 · 0/45(Equilab 캡처)/✓ | H1 Đối mặt với 3-bet ở preflop khi có và không có vị trí / H2 Lợi ích của hành động 3-bet · Những yếu tố cần xem xét khi đối mặt với 3-bet · Đối mặt với 3-bet khi có vị trí · Đối mặt với 3-bet khi không có vị trí / H3 Khuynh hướng chơi của nhà 3-bet · Size 3-bet · Xem xét giữa equity thô và equity thực tế · Lựa chọn hand để chơi khi đối mặt với 3-bet từ Big Blind · 4-bet khi không có vị trí |
| 3bet | ggpoker.com/vi/blog/3-betting-and-4-betting/ · 룸 · 2025-09-08(exa) | ~650 | H2 Hiểu về Sự Tấn Công Preflop · Nghệ Thuật của 3-Bet · 4-Bet: · Nâng Cao Trò Chơi Poker Của Bạn |
| limping | natural8.com/vi/blog/how-to-play-against-limpers · 룸 | ~2,130 · ✓ | H2 Người chơi chiến thuật limp là gì? · Cách phản ứng với người chơi open - limp · 5 mẹo để đánh bại người chơi chiến thuật limp / H3(FAQ) **Có nên chơi chiến thuật limp trong poker không? · Tại sao open - limp là lối chơi yếu và thụ động? · Nếu mọi người đều chơi chiến thuật limp, bạn nên làm gì?** |
| limping | wikipoker.net/limp-pot/ · 커뮤 · 수정 2026-04-03 | ~2,720 · 0/35/✓ | H1 Cách chơi Limp Pot hiệu quả: 4 mẹo "hốt bạc" từ người chơi yếu / H2 Limp pot là gì trong poker? · Sự khác nhau giữa limp pot và single raise pot (pot có 1 lần raise) · Mẹo … #1: Over-limp với những hand quá yếu để raise và quá mạnh để fold · #2: Donk bet với hai đôi hoặc mạnh hơn · #3: Chơi tight hơn khi gặp bet lớn ở flop · #4: Khi đối thủ check back, hãy tấn công turn và tiếp tục ở river · FAQ – Những câu hỏi thường gặp về Limp pot |
| limping | ggpoker.com/vi/blog/limping/ · 룸 · 2024-05-23(exa) ‖ pokerqz glossary | ~900 · ~280 | H2 Hiểu về Limping trong Poker: Một Cái Nhìn Sâu Sắc · Limping Có Bao Giờ Là Một Chiến Lược Tốt? · Các Cân Nhắc Chiến Lược cho Limping · Xây Dựng Chiến Lược Limping (소제목 영어: Small Blind Completes · Monster Hands in Early Position · Playing from the Button · In Progressive Knockout (PKO) Tournaments) ‖ «Limping đề cập đến hành động call số chip bằng với big blind (BB) ở pre-flop để tham gia ván chơi.» |
| when-to-fold | natural8.com/vi/blog/fold-pocket-aces-in-poker · 룸 | ~1,710 · ✓ | H2 Nhận diện các yếu tố rủi ro: Pot có nhiều người chơi · Khi các lá bài chung trên bàn có sự liên kết rõ ràng: Các lá bài cùng chất và liên tiếp · Đọc sức mạnh của đối thủ: Đặt cược mạnh và tăng cược · Vai trò của kích thước pot… · Đánh giá vị trí: Rủi ro khi ở vị trí big blind và small blind · Học cách tiếp cận có kỷ luật khi có đôi Át: Lợi ích của việc bỏ bài |
| when-to-fold | natural8 …/postflop-strategies ‖ propokervn …/cac-vong-cuoc-trong-poker/(2026-05-20 · 표1) | ~1,730 · ~1,370 | H2 … **Nghệ thuật của việc bỏ bài: Sự khôn ngoan khi rút lui** … ‖ H1 Các Vòng Cược Trong Poker: Hướng Dẫn Chi Tiết Từng Giai Đoạn / H2 Bảng Tổng Hợp Các Vòng Cược Trong Poker · Các Lựa Chọn Hành Động Trong Mỗi Vòng Cược (→ L-A game-order 영역) |
| c-bet | wikipoker.net/tinh-huong-khong-nen-c-bet-trong-poker/ · 커뮤 · 2025-11-21 · **SERP 밖 유일한 vi 원문** | ~2,620 · 0/42(솔버 캡처)/✓ | H1 5 Tình huống không nên c-bet trong poker – Những sai lầm "đốt" EV mà người chơi hay mắc / H3 Tình huống #1 – Button vs Big Blind – Single-raised pot – Flop 7♦ 6♦ 5♥ · #2 – Small Blind vs Big Blind – Single-raised pot – Flop 8♦ 6♦ 4♠ · #3 – Button vs Lojack – 3-bet pot – Flop A♠ 8♠ 7♥ · #4 – Big Blind vs Button – 3-bet pot – Flop 9♥ 8♥ 5♠ · #5 – Cutoff vs Button – 4-bet pot – Flop A♣ T♦ 6♦ |
| starting hands | reina.de.com/poker/ · 제휴(Live Casino) · 2025-07 ‖ pokerprofessor(번역 원문 · 2026-06 · 표3·이미지18) | ~1,140 · ~2,420 | H1 Hướng Dẫn Chơi Poker Cơ Bản Cho Người Mới Bắt Đầu Thắng — **시작 핸드 해설 아님**(규칙·족보) ‖ H1 Poker Starting Hands: Play the Odds, Not Just the Cards / H2 Starting Hand Groups · Poker Starting Hand Charts · Quick Reference · Starting Hand Examples · How much should I Raise? · How much should I Re-Raise? |

fetch 실패(SERP 번역 제목만 사용): tightpoker(JS) · wikiHow UTG(Client Challenge) · liveabout(402) · WinStar when-to-fold(404) · cff.us.com(404) · bk8a.it.com(접속 실패).
무출처 수치 축어(인용 금지 · 검산 불가): natural8 «Theo các phần mềm solver, hầu hết tình huống có tỷ lệ đặt cược tiếp theo được khuyến nghị là khoảng 50%» · wikipoker c-bet «Solver cho Big Blind donk 26% số lần với sizing 30% pot» · «check khoảng 71% range» · «chỉ c-bet khoảng 55% số lần» · infoser «nên duy trì từ 40-60% vốn dự phòng» · ggpoker «Nếu bạn tham gia vào hơn một nửa số ván bài bạn được chia, có lẽ bạn đang chơi quá nhiều ván.»

### 5-A. 번역어 집계 (베트남어 원문 20편 · 본문 출현 수 · «tố»는 «yếu tố» 혼입으로 측정 불가)

| 개념 | 집계 | 관찰 |
|---|---|---|
| fold | **bỏ bài 75** · fold 46 · gấp bài 0(ggpoker 번역문에만) | natural8 = bỏ bài · 커뮤 = fold |
| raise | **tăng cược 82** · raise 64 | natural8 = tăng cược · 커뮤 = raise |
| call | call 133 · theo cược 1 | 🔴 전략 글은 «theo»를 거의 안 쓴다 |
| big blind | big blind 57 · mù lớn **0** | 전략 글 = big blind / BB |
| position | vị trí 251 · position 35 | 좌석명은 영어 약어 |
| c-bet · 3-bet · limp · range | c-bet 43(đặt cược tiếp theo 12 · natural8) · 3-bet 177 · limp 132 · range 103 / phạm vi 98(natural8) | 영어 술어가 기본 |

→ vi 전략 글 문체 = **영어 술어 + 베트남어 서술**. 전략 8편은 영어 술어 1차 + 첫 등장 시 베트남어 괄호 병기(«fold (bỏ bài)» · «3-bet (tăng cược lần ba)»). 규칙 6편의 «Theo/Tố/Bỏ bài» 체계와의 정본 결정은 0-3/L-F에 위임.

---

## 6. §13 검산 (상위 원문 오류 · 축어 + 정답)

| # | 출처 | 축어 | 판정 · 정답 |
|---|---|---|---|
| E1 | ggpoker.com/vi/blog/3-betting-and-4-betting/ (H2 «3-Betting và 4-Betting» 도입) | «Một sảnh đánh bại một thùng, và một cù lũ có thể mua cả một quán rượu.» | ❌ **thùng(flush) > sảnh(straight)**. 7장 검산: 보드 10♥ J♣ Q♦ 2♥ 3♥ · A=9♥8♥ → 7장 중 하트 5장 9♥8♥10♥2♥3♥ = **10-하이 플러시**(스트레이트 8-9-10-J-Q도 있으나 플러시가 상위) · B=K♣9♣ → 9-10-J-Q-K **스트레이트**. 베스트5 비교 → **A(플러시) 승**. 문장 그대로면 족보가 뒤집힌다 |
| E2 | natural8.com/vi/blog/fold-pocket-aces-in-poker (H2 «Khi các lá bài chung trên bàn có sự liên kết rõ ràng…») | «nếu bạn có đôi Át và bàn chơi có 8 9 10, khả năng cao là đối thủ đang sở hữu một tay bài sảnh, thùng, hoặc thậm chí là sảnh cùng chất, tất cả đều đánh bại tay bài cù lũ.» | ❌ 두 겹 오류. ① 스트레이트·플러시는 풀하우스(cù lũ)를 **이기지 못한다**(서열: sảnh < thùng < cù lũ < tứ quý < thùng phá sảnh). ② AA + 보드 8-9-10(플롭)이면 내 패는 **원페어 A**(A-A-10-9-8)지 풀하우스가 아니다. 정답 문장 = «…tất cả đều đánh bại đôi Át». 또 «thùng»은 보드 3장이 같은 무늬일 때만(무늬 미표기). 같은 글 «bàn chơi lật ra 6 7 8. Các lá bài này … có khả năng tạo ra thùng»도 무늬 미표기 |
| E3 | natural8.com/vi/blog/what-is-a-3-bet-in-poker (H2 «3-bet là gì trong poker?») | «Trong Omaha và Texas Hold'em, lần tăng cược đầu tiên được biết đến là cược Big Blind.» | ⚠️ 용어 오류. 빅블라인드는 **강제 첫 베팅(1-bet)**이지 «tăng cược»(레이즈)가 아니다. 순서 = BB(1벳) → 오픈 레이즈(2벳) → 리레이즈(**3벳**). «3벳이 왜 3인가»(EN FAQ «Why is it called a 3-bet?»)의 정답 재료 |
| E4 | propokervn.com/vi-tri-trong-poker-ty-le-thang/ (H3 «1. Early Position (EP) – Vị Trí Sớm») | «Chỉ chơi với những tay bài mạnh như AA, KK, QQ, JJ, AKs, AQs.» + «Tỷ lệ bàn tay bạn nên raise từ EP thường chỉ khoảng 12-15% range tốt nhất.» | ❌ 내부 모순. 나열 핸드 = 페어 4종×6콤보 24 + 수티드 2종×4콤보 8 = **32콤보 / 1,326 = 2.4%**. 12~15%는 159~199콤보. MP도 «+TT, 99, AJs, KQs, AQo»(6+6+4+4+12=32) → 누적 64콤보 = **4.8%** vs 본문 «18-22%». 예시 목록과 % 중 하나가 틀렸다(EN 마스터 positions/position-play의 %표는 콤보 산수로 맞춰 둘 것) |
| E5 | wikipoker.net/limp-pot/ (H2 «Sự khác nhau giữa limp pot và single raise pot…») | «có một nhà raise lên 3bb và 2 nhà call, có 9bb trong pot và 97bb còn lại nên SPR sẽ là 10.7.» | ⚠️ 경미. 97 ÷ 9 = **10.78 → 10.8**(버림 10.7). 또 블라인드 데드머니(SB 0.5·BB 1)를 빼고 셌다 — 블라인드 둘 다 폴드면 팟 10.5bb, SPR ≈ 9.2. 같은 문단 «5bb … còn 99bb. SPR là 19.8» = 99÷5 ✓ |
| ✓1 | wikipoker.net/co-vi-tri/ | «HJ raise lên $2.5, CO 3-bet lên $8, BN và BB fold. Chúng ta cần call $5.5 cho một pot mà nếu chúng ta call là $17.5. Vậy 5.5/17.5 = 0.31» | ✓ 팟 = 0.5+1+2.5+8 = 12 → +5.5 = 17.5 · 5.5/17.5 = 31.4% |
| ✓2 | natural8 3-bet 사이징 예시 | «cut-off tăng cược $8 … 3-bet, tức là $24» · «Đối thủ đặt cược $6 … Bạn đặt cược $24 (thay vì $18)» | ✓ IP 3배($24) · OOP 4배($24, 3배면 $18). 단 IP 예시는 «đối thủ còn lại bỏ bài» 뒤에 «tiếp tục tăng cược»가 오는 서술 모순 |
| D1 | ggpoker.com/vi/blog/limping/ | «Monster Hands in Early Position: Nếu bạn đang giữ một bài mạnh như pocket aces hoặc kings ở vị trí đầu, limping có thể rất hiệu quả.» | ⚠️ D유형(전략적 유해 조언) — 저스테이크 라이브에서 AA/KK 오픈림프는 팟을 멀티웨이로 키워 승률을 깎는다. 같은 글 «Small Blind Completes … Đây không phải là limping theo nghĩa kỹ thuật» — SB 컴플리트는 통상 «SB limp»로 부른다(EN 마스터 FAQ «Is it okay to limp in the small blind?»와 대비 재료) |

---

## 7. 장단점 표

| 공통 강점 | 공통 약점(= 차별화 지점) |
|---|---|
| natural8·ggpoker가 거의 모든 전략 헤드에 1편씩 — 도메인 신뢰도 | 🔴 §13 오류 4건(E1~E4) · 예시 목록과 %가 어긋남 |
| wikipoker = 솔버 캡처·Equilab 이미지 다수(이미지 35~45장) · 2026 갱신 표기 | 실제 핸드를 **7장·베스트5**로 끝까지 따라가는 예시가 없다 |
| propokervn = 베트남어 구조(H2/H3) 정돈 · EP/MP/LP/Blinds 분류 | 포지션 글에 **좌석 지도 표·인원별(6max/9max) 표 없음**(표 0) — 자동완성 «vị trí bàn poker 8 người · poker positions 6 max»가 받는 자리 |
| 포커룸 글 FAQ 블록 보유 | PAA 축어(«Fold poker là gì?» · «Limp trong poker là gì?» · «What is co in poker?» · «What does LJ stand for in poker?»)에 정면 답하는 H2/FAQ가 없다 |
| — | 🔴 «vị trí trong poker» 1페이지 6건이 Google 번역 · tightpoker 오역(«Người cầm cờ thứ hai (HJ)») — **베트남어 원문 포지션 글이 사실상 부재** |
| — | c-bet·시작 핸드는 베트남어 해설이 SERP에 **0** |
| — | 경험담 0(필명 «Cậu Vàng» 외 1인칭 사례 없음) · 다수가 «CHƠI NGAY»·앱 유도(포커룸 상업성) · 제휴 사이트는 하단 도박 링크 팜 |
| — | 솔버 수치는 출처·설정 미표기(«Theo các phần mềm solver … khoảng 50%») → 우리 솔버의 **재현 가능한 수치**가 그대로 차별화 |

---

## 8. 우리 글 대조 (EN 마스터 → vi 의도 · EN H2/FAQ 목록은 §9 «EN 승계»)

| slug | 빠진 vi 의도(축어) | vi 도구 |
|---|---|---|
| holdem-positions | **«vị trí X trong poker» 10종**(utg·ngồi·dealer·hj·button·mp·co·cut off·đẹp/tốt) · «vị trí bàn poker 8 người» · PAA «What is co in poker?» · «What does LJ stand for in poker?» · related «Under the gun trái nghĩa» · «Why is it called under the gun in poker» | `/vi/hand-chart`(포지션 탭 UTG·HJ·CO·BTN·SB)에 링크 |
| holdem-position-play | «in position poker» 10 · «out of position poker» 10 · «vị trí đẹp/tốt trong poker»(-) · natural8 «bảo vệ Big Blind»(BB 방어 H2 없음) | 오프닝 레인지 표는 `/vi/hand-chart` 위임 |
| holdem-strategy | «chiến thuật poker cash game / tournament»(자동완성 3종) · «mẹo chơi poker luôn thắng»(🔴 «luôn thắng» 약속은 금지 — 훅은 «왜 mẹo가 안 통하나») · PAA «Is poker mostly luck or skill?» · «What is the 7/2 rule in poker?»(EN 이미 FAQ) · «Có những kiểu người chơi poker nào?» | — |
| holdem-starting-hands-chart | 베트남어 시작 핸드 수요는 Ads `-` · 자동완성 빈 응답 → «best starting hands poker» 10 · «bài khởi đầu»(번역 표준어) | 🔴 차트 본체 = `/vi/hand-chart`(«Poker Hand Chart — Bảng bài khởi đầu theo vị trí») · §10-C |
| holdem-limping | PAA «Limp trong poker là gì?» / «Limp poker là gì?» · 자동완성 «limp call · poker limp pot · what is open limp in poker · poker limp raise» · natural8 FAQ «Tại sao open - limp là lối chơi yếu và thụ động?» · wikipoker «limp pot» | — |
| holdem-3bet | «3 bet trong poker là gì» 20 · «3 bet là sao»(자동완성) · «3 bet 4 bet là gì» · «3bet light» 10 · «3bet range» 10 · «3bet pot poker» | 3벳 레인지 = 솔버(`/vi/solver` 미개설 · 이름만) |
| holdem-continuation-bet | «c bet là gì» 30 · «c bet poker là gì» · «c bet trong poker là gì» · «delayed continuation bet» — 🔴 L-G 헤드 «c bet là gì»와 교차 | 솔버 |
| holdem-when-to-fold | «khi nào nên bỏ bài trong poker»(-) · natural8 «Khi nào nên bỏ bài khi có đôi Át…» · «bỏ bài trong poker» 10 · PAA «Làm cách nào để chơi poker giỏi?» | 계산기 `/vi/calculator`(팟오즈 임계) |

vi 기존 글 교차: `lib/posts-vi/holdem-betting-actions.ts` = H2 «Fold (bỏ bài) trong poker là gì — bạn có thể bỏ bài bất cứ lúc nào không?» + FAQ «Limp trong poker nghĩa là gì?» → **fold·limp 정의 축을 이미 갖고 있다**(§10-B·카니발 주의).

---

## 9. 처방 (레인 A 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다)

| 순 | slug | 카피 방향(주력어 · 훅 재료) | H2 후보(자동완성·PAA 축어 맞춤 · EN 개명/추가) | FAQ 후보(PAA 축어) | 차별화 | 카니발 주의 |
|---|---|---|---|---|---|---|
| 1 | holdem-positions | «vị trí trong poker» + «poker positions» · 훅 = «좌석 이름이 매 판 바뀐다»(EN 승계) · 🔴 «under the gun» 단독 머리어 금지 | «Các vị trí trong poker gồm những vị trí nào? (sơ đồ bàn 6 và 9 người)» · «Vị trí UTG trong poker là gì — vì sao gọi là under the gun?» · «Vị trí HJ, LJ, MP trong poker» · «Vị trí CO (cut off) và button trong poker» · «Vị trí dealer trong poker» · «Vị trí ngồi trong poker: ghế số 1 không phải là một vị trí» · «Vị trí bàn poker 8 người / 6 max» | «CO là gì trong poker?»(PAA «What is co in poker?») · «LJ trong poker là gì?»(PAA) · «Utg là gì Poker»(related) · «Under the gun trái nghĩa»(related → 답 = button/vị trí cuối) · EN FAQ 7 | 좌석 지도 **표**(6/8/9/10인 · 약어 + 베트남어 풀이 — tightpoker 오역 «Người cầm cờ thứ hai (HJ)» 대비) · 행동 순서표 · 라이브 경험담 · `/vi/hand-chart` | 플레이 전략은 position-play 앵커 |
| 2 | holdem-strategy | «chiến thuật poker» + «cách chơi poker giỏi»·«mẹo chơi poker» 흡수 · 훅 = «mẹo가 왜 안 통하나 — 5가지 결정» · 🔴 «luôn thắng» 약속 금지 | EN 5 Decisions 유지 + «Chiến thuật poker cash game và tournament khác nhau thế nào?»(자동완성 3종) · «Những kiểu người chơi poker»(PAA «Có những kiểu người chơi poker nào?») · «Poker là may rủi hay kỹ năng?»(PAA) | «Làm cách nào để chơi poker giỏi?» · «What is the 7/2 rule in poker?»(EN 이미) · «80/20 rule»(🔴 정의 원문 확인 후만) | 룸 블로그의 무출처 수치(«solver … khoảng 50%» · «hơn một nửa số ván») 대신 VPIP·c-bet 빈도를 솔버 재현값으로 · 경험담 | 규칙(L-A «cách chơi poker»)과 경계 — 첫 문단 «규칙 아는 사람 대상» + 앵커 |
| 3 | holdem-3bet | «3bet poker» + «3 bet trong poker là gì» · 🔴 «3 bet» 단독 = 브랜드 → 결합형만 | «3-bet trong poker là gì — vì sao gọi là "3"?»(E3 정답: BB = 1벳) · «3-bet và 4-bet khác nhau thế nào?»(«3 bet 4 bet là gì») · «3-bet light là gì?» · «Range 3-bet theo vị trí» · «Chơi 3-bet pot thế nào?» | «3 bet là sao?»(자동완성) · EN FAQ 15 | 콤보 산수로 맞춘 레인지 %(E4 반면교사) · 실전 핸드 7장 베스트5 · 사이징 표 | 레인지 시각화는 솔버(`/vi/solver` 미개설 · 이름만) |
| 4 | holdem-limping | «limp trong poker là gì» + «limp poker» · 🔴 «limp là gì»·«limping là gì» 단독 오염 | «Limp trong poker là gì?»(PAA 축어) · «Open limp và over limp khác nhau thế nào?» · «Limp call là gì?» · «Limp pot chơi thế nào?» · «Limp-raise là gì?» | «Limp poker là gì?» · «Tại sao open-limp là lối chơi yếu?»(natural8 FAQ 대응) · EN FAQ 9 | ggpoker «AA/KK UTG 림프 rất hiệu quả»(D1) 반박을 수치로 · 라이브 저스테이크 경험담 | vi betting-actions FAQ «Limp trong poker nghĩa là gì?»와 중복 — §10 |
| 5 | holdem-continuation-bet | «c-bet trong poker / c bet là gì» · 🔴 «cbet» 단독 오염 | «C-bet trong poker là gì?» · «Khi nào không nên c-bet?» · «C-bet bao nhiêu là đủ?» · «Delayed c-bet là gì?»(자동완성) | «C bet poker là gì?» · EN FAQ 12 | **베트남어 원문 0** · 솔버 빈도·사이징을 설정 명시해 재현(wikipoker 무출처 26%·71%·55% 대비) · board texture 표 | 🔴 L-G GTO 헤드 «c bet là gì»와 같은 키워드 — 권고: 정의·기본 = 이 글, 스팟 = GTO 글 |
| 6 | holdem-position-play | «in position / out of position poker» · «chơi có vị trí» | EN 승계 + «Cách bảo vệ big blind khi không có vị trí»(natural8 SERP 노출) · «Vị trí đẹp nhất trong poker là vị trí nào?»(자동완성 «vị trí đẹp/tốt») | EN FAQ 10 | 오프닝 레인지는 `/vi/hand-chart` 위임 | 좌석 정의는 positions 앵커 |
| 7 | holdem-when-to-fold | «khi nào nên bỏ bài trong poker» · 🔴 «khi nào nên fold» 단독 = Galaxy Fold | EN 승계 + «Khi nào nên bỏ đôi Át (AA)?»(natural8 SERP 노출 · E2 정정 기회) · «Bỏ bài trước flop / sau flop» | «Should you ever fold pocket aces?»(EN) · «Làm cách nào để chơi poker giỏi?» | E2를 정확한 7장 예시로(AA vs 보드 8-9-10 · 상대 J-Q 스트레이트) · 팟오즈 임계표(`/vi/calculator`) | «fold là gì / fold trong poker là gì» 정의 = betting-actions |
| 8 | holdem-starting-hands-chart | «best starting hands poker» · «bài khởi đầu mạnh nhất» | EN 승계(10 Best · Worst · % · suited) · 표는 요약만 | EN FAQ 8 | 랭킹 이유·흔한 실수 + 도구 CTA | 🔴 «chart/bảng» 머리어 = 도구(§10-C) |

---

## 10. 0-3 판정 재료 (판정 안 함 · 증거 + 권고 1줄)

### 10-A. ② positions ↔ position-play
- 증거: 자동완성 «vị trí trong poker» 10종 전부 **좌석명 정의**(utg·hj·mp·co·cut off·button·dealer·ngồi·trong bàn) · «poker positions» 15종 전부 좌석 지도(6/8/9 max·names·chart·diagram) · related «Utg là gì Poker · Under the gun trái nghĩa». position-play 쪽 수요 = «in position poker»·«out of position poker» 각 10 · «vị trí đẹp/tốt trong poker»(`-`) · natural8 BB 방어 글이 «vị trí trong poker» 9위.
- 권고: **헤드(vị trí trong poker · poker positions · position poker) = holdem-positions** · position-play = «in/out of position · vị trí tốt nhất · bảo vệ big blind» 롱테일 + positions 첫 내부링크.

### 10-B. ③ fold 헤드 (betting-actions «fold là gì» vs when-to-fold)
- 증거: «fold là gì»(880) SERP = 영어 사전 9/9(포커 0) · 관련 «Fold là gì trong Poker» · **«fold trong poker là gì» 50 = 포커 10/10인데 정의 글이 1페이지에 0** · PAA «Fold poker là gì?» · «khi nào nên fold» = Galaxy Fold 0/9 · «khi nào nên bỏ bài poker» = 섞임(합법성 기사 2) · vi betting-actions에 이미 H2 «Fold (bỏ bài) trong poker là gì — …».
- 권고: **정의형(fold trong poker là gì · fold poker là gì) = betting-actions**(H2를 PAA 축어 «Fold poker là gì?»에 맞춤) · when-to-fold = «khi nào nên bỏ bài trong poker» + AA 폴드 · 상호 앵커.

### 10-C. 차트 도구 경계 (`/vi/hand-chart`)
- 증거: 베트남어 «bài khởi đầu poker»·«tay bài khởi đầu poker»·«những tay bài nên chơi trong poker» Ads `-` · 자동완성 빈 응답 · SERP 상위 = 카지노 제휴(1건 404) · 영어 «poker starting hands» SERP = 핀터레스트 포스터 4 + PDF · `vi-tools.md` 결론 «차트 머리어 = Poker Hand Chart / vi 앵커 bảng bài khởi đầu» · 도구 H1 «Poker Hand Chart — Bảng bài khởi đầu theo vị trí»(dict.ts).
- 권고: **«chart·bảng» 머리어 = 도구** · 글 = «best starting hands / bài khởi đầu mạnh nhất» 랭킹·해설 + 도구 CTA · 글 제목에 «chart/bảng» 금지.

### 10-D. «3 bet» 27,100 정체
- 증거: §2 표(자동완성 «3 bet app · 3 bet casino» · «3bet» SERP 1위 3bet.cards 도박 «Nhà Cái» · x.com «3BET – Cổng Game» · FB «3BET LTD» · «3bet» 자동완성 «http://3bet.com · 3bet apostas · 3bet login») · 포커 결합형 = 3bet poker 90 · 3 bet là gì 20 · 3 bet trong poker là gì 20 · 3bet là gì 10.
- 권고: **27,100은 금지 축 브랜드 수요 → 볼륨 표기 «오염»** · holdem-3bet 수요 = «3bet poker» 90 기준. 같은 판정을 **«cbet» 1,300(카지노·토큰) · «4bet» 40(«4bet prediction · 4bet365 casino» 섞임)**에도 적용.

---

## 11. 우선순위 (볼륨 × 갭)

| 순 | slug | 살아 있는 볼륨(포커 몫) | 갭 | 비고 |
|---|---|---|---|---|
| 1 | holdem-positions | vị trí trong poker 70 · poker positions 70 · position poker 70 · utg poker là gì 20 · 롱테일 10×6 | 🔴 베트남어 원문 0(번역 4/6) | 자동완성 10종 |
| 2 | holdem-strategy | chiến thuật 50 · poker strategy 50 · mẹo 40 · cách chơi chuyên nghiệp 30 · giỏi 20 | 중 — 룸 블로그만 | 금지 축 인접(합법성 3위) |
| 3 | holdem-3bet | 3bet poker 90 · 3 bet là gì 20 · 3 bet trong poker là gì 20 | 중 — natural8 E3·ggpoker E1 | 브랜드 오염 주의 |
| 4 | holdem-limping | limp poker 20 · limp trong poker là gì 10 | 중 | 정의 소유 0-3 |
| 5 | holdem-continuation-bet | c bet là gì 30 · c bet poker là gì 10 | 🔴 베트남어 0 | L-G 교차 |
| 6 | holdem-position-play | in/out of position 10·10 | 중 | positions 하위 |
| 7 | holdem-when-to-fold | bỏ bài trong poker 10 | 중 — natural8 E2 | 정의는 betting-actions |
| 8 | holdem-starting-hands-chart | best starting hands 10 | 저 — 도구가 주인 | 도구 CTA |

---

## 12. 커버리지 표

### 12-A. 검색어별 (0 오염 · 1 자동완성 · 2 새 볼륨 · 3 SERP+PAA · 4 원문 정독)

| 검색어 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| chiến thuật poker · cách chơi poker giỏi · poker strategy | ✅ | ✅ | ✅ | ✅ | ✅ propokervn·natural8 ×2·wikipoker·ggpoker·infoser·thegioipoker(7편) |
| vị trí trong poker · poker positions | ✅ | ✅ | ✅ | ✅ | ✅ propokervn·natural8 ×2·ghiensaigon·pokerqz (번역 원문 3편 fetch 실패 → SERP 제목만) |
| under the gun | ✅ 오염 | ✅ | ✅ | ✅ | ✗ 오염(포커 1/8 = wikiHow 번역 · fetch 차단) — positions 원문으로 갈음 |
| cbet | ✅ 오염 | ✅ | —(0-1) | ✅ | ✗ 오염(포커 0) |
| 3 bet · 3bet poker | ✅ 브랜드/있음 | ✅ | ✅ | ✅ | ✅ natural8·wikipoker ×2·ggpoker |
| limp là gì | ✅ 오염 | ✅ | ✅ | ✅(+limp poker·limp trong poker là gì) | ✅ natural8·wikipoker·ggpoker·pokerqz |
| (경량) c bet là gì | ✅ 섞임 | ✅ | ✅ | ✅(4쿼리) | ✅ wikipoker c-bet 1편 — SERP 내 vi 원문 0이라 2편 미달(존재하지 않음) |
| bài khởi đầu poker | ✅ | ✅(빈 응답) | ✅ | ✅(+3 변형) | ✅ reina·pokerprofessor(번역 원문) · cff 404 |
| khi nào nên fold | ✅ 오염 | ✅(빈 응답) | ✅ | ✅(+bỏ bài 3 변형 · fold trong poker là gì) | ✅ natural8 ×2·propokervn |
| (추가) fold là gì · utg là gì · utg poker · mẹo chơi poker · chiến lược poker · position poker · 3bet là gì · 3 bet là gì | ✅ | ✅ | ✅ | ✅ | —(헤드 원문 공유) |

### 12-B. 글별 «PAA·자동완성 질문 확보»

| slug | PAA 축어 | 자동완성 질문형 | 확보 |
|---|---|---|---|
| holdem-strategy | «Làm thế nào để chơi bài poker?» · «Có những kiểu người chơi poker nào?» · «What is the best strategy in poker?» · «Is poker mostly luck or skill?» · «What does the 80/20 rule mean in poker?» · «What is the 7/2 rule in poker?» · «Làm cách nào để chơi poker giỏi?» | chiến thuật poker cash game/tournament · mẹo chơi poker giỏi · cách chơi poker hiệu quả | ✅ |
| holdem-positions | «What are the names of the different positions on a poker table?» · «What does LJ stand for in poker?» · «What is co in poker?» · «Under the gun nghĩa là gì?» | vị trí utg/hj/mp/co/cut off/button/dealer/ngồi trong poker · utg poker là gì · under the gun poker là gì · button trong poker là gì | ✅ |
| holdem-position-play | (positions PAA 공유) · related «Under the gun trái nghĩa» | vị trí đẹp/tốt trong poker · position poker strategy | ✅ |
| holdem-starting-hands-chart | «Poker có những bộ bài nào?» · «Làm thế nào để chơi bài poker?»(시작 핸드 의도 PAA 없음) | best/worst/good starting hands poker · starting hands poker chart · (베트남어 빈 응답) | ✅(영어 질문형으로 확보) |
| holdem-limping | «Limp trong poker là gì?» · «Limp poker là gì?» · «Call trong poker là gì?» · «Chia bài poker gọi là gì?» | limp là gì poker · limp call là gì · what is open limp in poker · limp trong poker là gì · poker limp raise | ✅ |
| holdem-3bet | (PAA 없음) · related «Raise trong Poker là gì» | 3 bet là gì · 3 bet trong poker là gì · 3bet poker là gì · 3 bet 4 bet là gì · 3 bet là sao · 3 bet light poker | ✅ |
| holdem-continuation-bet | (PAA 없음) · related «C-bet meaning poker · What is a donk bet in poker · What is a value bet in poker» | c bet là gì · c bet poker là gì · c bet trong poker là gì · delayed continuation bet | ✅ |
| holdem-when-to-fold | «Fold poker là gì?» · «"Call" trong poker có nghĩa là gì?» · «Làm cách nào để chơi poker giỏi?» | fold poker là gì · (khi nào nên fold/bỏ bài 빈 응답·비포커) | ✅ |

미완 0건 — ✗ 2칸(under the gun·cbet 원문 정독)은 **오염 판정으로 정독 대상 없음**이 사유.
