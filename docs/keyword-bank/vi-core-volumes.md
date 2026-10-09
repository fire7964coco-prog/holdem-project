# vi 키워드 뱅크 — 51편 수요 실측 (vi 클러스터 0-1 · 2026-10-08)

> 계획 정본 = `docs/vi-cluster-plan.md`. 이 문서는 **0-1 산출물**이다 — 0-2(SERP)·0-3(소유표)·레인 A 브리프가 여기서 수치를 가져간다. 레인은 볼륨을 다시 재지 않는다(새 후보만 잰다).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2704 Vietnam** · language vi · 시드 216 · 응답 216) + DFS Labs `keyword_suggestions`(2704 · vi · 시드 35 · KD 포함). 원자료 = `tmp/vi/core-vol.json`·`core-vol.txt` · `tmp/vi/core-sugg.json`·`core-sugg.txt`(gitignore). 스크립트 = `tmp/vi/dfs.mjs`(모드 vol·sugg·ac·serp).
> 이미 잰 도구·솔버 축은 다시 재지 않았다 = `vi-tools.md`(계산기·차트) · `vi-gto-solver.md`(솔버·GTO).
> 🔴 CPC는 근거로 쓰지 않는다. 볼륨 `-` = Google Ads 데이터 없음(≠ 수요 0). 같은 숫자가 여러 줄 = 한 수요(더하지 마라).

## 0. 한 줄 결론

- 수요는 **규칙**(luật poker 3,600 · cách chơi poker 2,900 · poker là gì 1,900 · luật chơi poker 1,600 · poker rules 1,300)과 **족보**(poker hand(s) 2,900 · bài poker 1,900 · poker ranking(s) 1,600 · poker hand rankings 1,000 · thứ tự (bài) poker 1,000/590 · thùng phá sảnh 1,000)에 몰려 있다 — fr·tr과 같은 모양, 자릿수는 fr의 1/10 안팎.
- **«X là gì» 정의형이 vi의 특징이다**: all in là gì 5,400 · check là gì 3,600 · call là gì 2,900 · raise là gì 1,900 · bubble là gì 1,000 · fish là gì 1,000 · fold là gì 880 · tilt là gì 880 · turn là gì 880 · blind là gì 720 · nuts là gì 720 · river là gì 720 · bluff là gì 390 · rake là gì 390 · showdown là gì 390 · straddle là gì 320 · cooler là gì 170 · limp là gì 170 · icm là gì 140 · kicker là gì 140. 🔴 대부분 **포커 밖 의미가 섞였을 수 있다**(§1) → 0-2 SERP로 포커 몫을 판정한다.
- 베트남어 조어(pot phụ · mù lớn mù nhỏ · bài khởi đầu · đếm bài · tỷ lệ poker 등)는 대부분 `-`/10 — **검색 술어는 영어 차용어 + «là gì»**, 베트남어 풀이는 본문 표기(vi-tools §1과 같은 결론).
- 전략·확률·토너먼트·GTO는 10~170. 예외 후보 = gto poker 170 · under the gun 170 · short stack 390(오염 의심) · icm poker 110 · bluff poker 110 · 3bet poker 90.

## 1. 🔴 함정 (볼륨이 포커가 아니다 · 0-2에서 SERP로 판정)

| 표면 | 볼륨 | 의심 | 처리 |
|---|---:|---|---|
| 3 bet · 3bet | 27,100 | 포커 3벳이 이 자릿수일 수 없다(«3bet poker» 90 · «3bet là gì» 10) — 다른 뜻·스팸 | **«3bet poker» 90**을 기준 · SERP 확인 |
| outs | 33,100 | 영어 일반어(call-outs · ins and outs) | «outs poker» 10 |
| full house · straight · flush | 9,900 · 5,400 · 1,600 | 영어 일반어·드라마·제품 | «full house poker» 260 · «flush poker» 170 · «straight poker» 70 |
| thùng · sảnh · thú · tứ quý | 5,400 · 1,600 · 4,400 · 2,900 | 상자 · 로비(«sảnh chung cư») · 동물 · 과일/꽃 품종(«xoài tứ quý» 12,100 · «mai tứ quý») · **Tiến lên 족보**(«tứ quý chặt heo») | 포커 결합형만: «thùng phá sảnh» 1,000 · «thùng phá sảnh là gì» 480 · «thùng phá sảnh và tứ quý cái nào lớn hơn» 90 |
| sảnh rồng | 1,000 | 🔴 **Tiến lên/Mậu binh의 «드래곤 스트레이트»(3~A 13장)일 가능성** — 포커 로열 플러시가 아닐 수 있다 | SERP 판정 전 로열 플러시 번역어로 쓰지 마라 |
| kicker | 2,400 | 축구 키커·브랜드 | «kicker poker» 10 · «kicker là gì» 140(SERP 확인) |
| nuts · showdown · tilt · rake · limp · straddle · bluff | 9,900 · 8,100 · 3,600 · 1,900 · 1,600 · 1,900 · 1,600 | 견과류 · 포켓몬/게임 · 구글 tilt·골반 · 영화 Tyler Rake · Limp Bizkit · 일반어 | 포커 결합형·«là gì»만 후보 |
| all in · check | 6,600 · — | «all in one» PC · check in/out/var/legit 등 | «all in là gì» 5,400 · «check là gì» 3,600 — 🔴 포커 몫 비율 SERP 확인 |
| flop · flop là gì | 5,400 · 6,600 | 🔴 베트남 인터넷 속어 «flop»(망하다 · «flop quá thì ghi tên anh vào») · flip-flop(전자) | 포커 의도 거의 없을 것 — SERP 확인 |
| icm | 720 | «K-ICM»(가수) · 기관 | «icm poker» 110 · «icm là gì» 140(확인) |
| short stack | 390 | 개발자 «stack» 등? | SERP 확인 |
| bubble là gì · fish là gì | 1,000 · 1,000 | 일반어(거품·물고기 · «bubble tea» 등) | SERP 확인 |
| poker online 5,400 · game poker online · x-poker · 888 poker · zynga · w88 · zing · pokerist · tải game bài | — | 🔴 **금지 축** — 실머니·앱 게임·사이트 | 조준하지 않는다 |
| luật poker 5 lá · 2 lá · 3 lá · 4 lá · mậu binh · xì tố · liar bar · omaha · short deck | 10~140 | **다른 게임**(베트남 «poker 5 lá» = 5장 포커/xì tố 계열) | 텍사스 홀덤만 · 다만 «2 lá»(= 홀덤 홀카드 2장)는 홀덤 의도일 수 있다 → L-A 확인 |
| giải poker hà nội · hải phòng · giải đấu poker tại việt nam 2025/2026 · saigon poker room · hanoi poker cash game | 10~4,400 | 대회 일정·장소 의도 | 이번 범위 밖(관찰만 · `/vi/tournaments`가 받는다) |

## 2. 글별 후보 (볼륨 · 원자료 `core-vol.txt`·`core-sugg.txt`)

> 🔴 «오염»·«섞임» 표기 = 0-2 SERP 판정(§4 · 2026-10-09 0-4에서 이 표에 옮겨 적음). 오염 헤드는 seoTitle·H1·tags 어디에도 쓰지 않는다 · 섞임은 결합형 우선, 단독형은 tags까지. 정본 = `vi-cluster-plan.md` §3-A ⑦.

### 🅰 규칙 (기존 vi 6편 재작업)

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| texas-holdem-rules-for-beginners | **luật poker 3,600 · cách chơi poker 2,900 · poker là gì 1,900 · luật chơi poker 1,600** · poker rules 1,300 · texas holdem 1,300 · chơi poker 880 · poker cách chơi 720 · poker luật 590 | cách chơi bài poker 320 · texas holdem poker 320 · hướng dẫn chơi poker 260 · bài poker là gì 210 · luật chơi poker cơ bản 170 · poker texas holdem 170 · luật chơi bài poker 110 · cách chơi poker 2 lá 110 · luật poker cơ bản 70 · cách chơi poker cơ bản 70 · poker rules texas holdem 70 · luật poker tiếng việt 50 · luật poker quốc tế 50 · texas holdem rules 50 · cách chơi poker vn 50 · mẹo chơi poker 40 · cách chơi poker texas holdem 20 · học chơi poker 20 · cách chơi poker cho người mới 10 |
| holdem-game-order | (헤드 후보 = turn là gì 880 · river là gì 720 — 오염 확인) | flop turn river 50 · cách chia bài poker 110 · người chia bài trong poker gọi là gì 70 · luật chia bài poker 20 · under the gun 170 · preflop flop turn river 10 · dealer button 10 |
| holdem-betting-actions | **check là gì 3,600 · call là gì 2,900 · raise là gì 1,900 · fold là gì 880**(전부 오염 확인) | bet poker 30 · check/call/raise poker 20 · fold poker 50 · luật raise trong poker 10 · 4bet 40 |
| holdem-blind-meaning | blind là gì 720(🔴 오염 1/9) | ante là gì 50 · big blind là gì 30 · blind trong poker là gì 20 · big blind 20 · small blind 20 · blind poker 20 · ante poker 20 · small blind là gì 10 |
| holdem-all-in-rules | **all in là gì 5,400**(🔴 오염 0/10) | all in poker 170 · luật all in poker 10 · side pot 10 · (pot phụ · side pot là gì `-`) |
| holdem-showdown-rules | showdown là gì 390(🟡 섞임 · PAA 보충) | muck là gì 70 · slow roll 40 · showdown poker 10 · lật bài poker 10 · so bài poker 30 |

### 🅱 족보

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-hand-rankings | **poker hand(s) 2,900 · bài poker 1,900 · poker ranking(s) 1,600 · poker hand ranking(s) 1,000 · thứ tự poker 1,000** | thứ tự bài poker 590 · xếp hạng bài poker 210 · bộ bài poker 140 · thứ tự bài trong poker 140 · thứ tự bài mạnh trong poker 110 · bài poker đẹp 110 · thùng phá sảnh 1,000 · thùng phá sảnh là gì 480 · cù lũ 480 · royal flush 390 · full house poker 260 · straight flush 140 · sám cô 90 · xám cô 50 · mậu thầu 50 · một đôi 50 · hand bài poker 50 · thứ tự bài poker tiếng việt 50 · các hand bài poker 40 · trong poker bài nào to nhất 40 · các loại bài trong poker 30 · thứ hạng bài poker 30 · texas holdem hands 50 · two pair 20 · hai đôi 10 |
| holdem-flush-vs-straight | (헤드 없음) | thùng phá sảnh và tứ quý cái nào lớn hơn 90 · thùng phá sảnh nào lớn nhất 90 · tứ quý và thùng phá sảnh 20 · flush vs straight 20 · thùng và sảnh cái nào lớn hơn 10 |
| holdem-kicker | kicker là gì 140(🟡 섞임 3/10) | kicker poker 10 · (hai người cùng sảnh · hòa bài poker `-`) |
| holdem-tiebreak-rules | (헤드 없음) | (luật hòa poker · hòa bài poker `-`) → 0-2 자동완성으로 표현 확보 |
| holdem-split-pot-rules | (헤드 없음) | split pot 10 · chia pot 10 · chop pot 10 |
| holdem-reading-the-board | nuts là gì 720(🔴 오염 0/10) | the nuts 90 · nuts poker 10 · board poker 20 · (đọc bài poker `-`) |

### 🅲 확률

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-probability | (헤드 없음) | xác suất poker 10 · xác suất trong poker 10 · odds poker / poker odds 50 · cách tính bài poker 40 · phần mềm tính xác suất poker 10(→ 계산기 도구 몫) |
| holdem-pot-odds | (헤드 없음) | pot odds 20 · pot odds poker calculator 10(도구 몫) · (pot odds là gì `-`) |
| holdem-outs | (헤드 없음) | outs poker 10 · (outs là gì · cách tính outs `-`) |
| holdem-drawing-odds | (헤드 없음) | rule of 4 and 2 10 · (quy tắc 2 và 4 `-`) |
| holdem-implied-odds | (헤드 없음) | implied odds 10 |
| holdem-equity | (헤드 없음) | equity poker 30 · (equity là gì 2,400 = 금융 · 제외) |
| holdem-card-counting | (헤드 없음) | card counting poker 10 · (đếm bài poker `-`) |

### 🅳 전략

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-strategy | (헤드 없음 · 하강 중) | chiến thuật poker 50 · poker strategy 50 · mẹo chơi poker 40 · cách chơi poker chuyên nghiệp 30 · cách chơi poker giỏi 20 · chiến thuật chơi poker 10 · cách thắng poker 10 · bí quyết chơi poker 10 · texas holdem ultimate strategy 10 |
| holdem-positions | under the gun 170(🔴 오염 1/8) | vị trí trong poker 70 · poker positions 70 · position poker 70 · các vị trí trong poker 50 · vị trí poker 20 · utg poker · cutoff poker · hijack poker · button poker 각 10 |
| holdem-position-play | (헤드 없음) | (positions와 갈라 먹기 — 0-3) |
| holdem-starting-hands-chart | (헤드 없음) | poker starting hands 10 · starting hands poker 10 · (bài khởi đầu poker · những tay bài nên chơi `-`) → 차트 도구 `/vi/hand-chart` 경계 |
| holdem-limping | limp là gì 170(🔴 오염) | limp poker 20 · limp poker là gì 10 · limp trong poker là gì 10 · open limp 0 |
| holdem-3bet | 3bet poker 90 | 4bet 40(🔴 오염) · 3bet là gì 10 · (3 bet 27,100 = 🔴 오염 · 도박 브랜드 §1) |
| holdem-continuation-bet | **cbet 1,300**(🔴 오염 · 카지노·토큰) | c bet là gì 30 · c bet poker 10 · cbet poker 10 · continuation bet 10 · cbet meaning poker 10 |
| holdem-when-to-fold | (헤드 없음) | (khi nào nên fold · khi nào nên bỏ bài `-`) |

### 🅴 토너먼트

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-tournament | poker tournament 210 · tournament poker 210 | giải poker 70 · giải poker là gì 40 · mtt poker 50 · giải đấu poker 20 · giải poker thế giới 20 · giải poker lớn nhất thế giới 20 |
| holdem-icm | icm là gì 140(🔴 오염 0/10) · icm poker 110 | (icm calculator 40 = 계산기 도구 몫 · vi-tools) |
| holdem-bubble | bubble là gì 1,000(🔴 오염 0/10) | bubble poker 10 |
| holdem-short-stack | short stack 390(🔴 오염 2/10) | push fold 10 · short stack poker 10 |
| holdem-tournament-vs-cash-game | cash game 40 · cash game poker 50 | cash game là gì 10 · tournament vs cash game 0 |

### 🅵 용어

| slug | 헤드 후보 | 롱테일 후보 |
|---|---|---|
| holdem-glossary | thuật ngữ poker 140 | (từ ngữ trong poker `-`) · «X là gì» 정의형 묶음(§0) — 🔴 `/vi/glossary` 도구가 **없다**(도구 확장 회차 1·2에 vi 미포함) → 0-3 판정 |
| holdem-fish | fish là gì 1,000(🔴 오염 0/10) | fish poker 10 · fish poker meaning/term 10 · (cá trong poker `-`) |
| holdem-bad-beat | bad beat 50 | bad beat là gì 10 |
| holdem-cooler | cooler là gì 170(🔴 오염 0/10) | cooler poker 10 |
| holdem-rake | rake là gì 390(🟡 섞임 4/10) | rake poker 20 · rake trong poker là gì 20 |
| holdem-straddle | straddle là gì 320(🔴 오염 1/10) | straddle poker 30 · straddle poker là gì 30 |
| (관련 · 소속 = 0-3 §3-C ⑰⑱: bluff → strategy · tilt → bad-beat) | tilt là gì 880(🔴 오염 1/10) · bluff là gì 390(🔴 오염 2/10) · bluff poker 110 | tilt poker 40 · bluff trong poker 50 · bluff trong poker la gì 40 · semi bluff 20 · value bet 20 |

### 🅶 GTO 13편

- 스팟 키워드 = 검색량 0 계열(`settled-decisions` §1-E와 같음). 축 수치는 `vi-gto-solver.md` §2 승계: gto poker 170 · gto poker là gì 30 · c bet là gì 30 · range poker 70 · donk bet 10 · donk bet là gì 10 · check raise 10 · check raise là gì 10 · 3bet pot 10 · blind vs blind 10 · (monotone board · paired board `-`).

## 3. 0-2로 넘기는 SERP 필수 판정(헤드 중 오염 의심)

all in là gì · check là gì · call là gì · raise là gì · fold là gì · turn là gì · river là gì · flop là gì · blind là gì · showdown là gì · kicker là gì · nuts là gì · sảnh rồng · thùng phá sảnh · tứ quý(단독) · cbet · 3 bet · bubble là gì · fish là gì · tilt là gì · short stack · icm là gì · rake là gì · straddle là gì · cooler là gì · limp là gì · bluff là gì → **SERP 상위 10 중 포커 결과 수**로 «포커 몫 있음/없음/섞임» 판정.

## 4. 0-2 SERP 판정 결과 — 🔴 «오염» 헤드는 어디에도 조준하지 않는다 (2026-10-08 (6) · 정본 = `vi-cluster-plan.md` §3-A ⑦)

판정 = 2704·vi·desktop 1페이지 organic 중 **포커 결과 수**(≥7 포커 몫 있음 · 3~6 섞임 · ≤2 없음). 근거 절 = 각 레인 §0.

| 판정 | 헤드(볼륨) | 조준어 대체 |
|---|---|---|
| ✅ 포커 몫 있음 | luật poker 3,600(8/8) · cách chơi poker 2,900(10/10) · poker là gì 1,900(9+1) · luật chơi poker 1,600(10/10) · texas holdem 1,300(9+1) · cách chơi poker 2 lá 110(8/8) · poker hands 2,900(9/10) · bài poker 1,900(10/10) · thứ tự bài poker 590(9/10) · poker hand rankings 1,000(10/10) · thùng phá sảnh 1,000(10/10) · thùng phá sảnh và tứ quý cái nào lớn hơn 90(10/10) · split pot 10(9/10) · thuật ngữ poker 140(9/10) · thuật ngữ trong poker 50(8/8) · bluff poker 110(9/9) · flop turn river 50(5/6) · «X trong poker là gì» 결합형 전부(L-A §10-3) | 그대로 |
| 🟡 섞임 | thùng phá sảnh là gì 480(6/10) · cù lũ 480(5/10) · royal flush 390(3/10) · kicker là gì 140(3/10) · hòa bài poker(4/10) · bad beat 50(5/10) · rake là gì 390(4/10) · showdown là gì 390(0/8이나 PAA «Showdown là gì?» 보충 · L-A) | 결합형 우선(«cù lũ trong poker là gì» 40 · «kicker trong poker là gì» · «rake poker là gì» 20 · «showdown poker là gì») · 단독형은 tags까지만 |
| 🔴 오염(없음) | all in là gì 5,400(0/10) · check là gì 3,600(0/8) · call là gì 2,900(0/8) · raise là gì 1,900(0/8) · fold là gì 880(0/7) · turn là gì 880(0/8) · river là gì 720(0/8) · flop là gì 6,600(0/6 · 속어) · blind là gì 720(1/9) · muck là gì 70(0/7) · ante là gì 50(0) · under the gun 170(1/8) · nuts là gì 720(0/10) · tứ quý 2,900(0/10 · Tiến lên) · sảnh rồng 1,000(2/10 · Tiến lên/Mậu binh) · bubble là gì 1,000(0/10) · fish là gì 1,000(0/10) · tilt là gì 880(1/10) · short stack 390(2/10) · icm là gì 140(0/10) · mtt là gì 110(0/10) · straddle là gì 320(1/10) · cooler là gì 170(0/10) · bluff là gì 390(2/10) · limp là gì 170(오염 · L-D) · cbet 1,300(카지노·토큰) · 3 bet 27,100(도박 브랜드) · 4bet 40 · spr là gì 110(0/10) · blind vs blind 10(0/10) · equity là gì 2,400 · range là gì 1,600 · gto 단독 · solver 단독 · dealer poker là gì 170(직업 혼합) · phỉnh poker là gì 40(칩 상품) · luật chơi poker là gì(합법성 혼입) | «X trong poker là gì» / «X poker (là gì)» 결합형(L-A §10-1 · L-F §10 · L-E §0 · L-G §8) — 단독형은 seoTitle·H1·tags 어디에도 쓰지 않는다 · 우선순위 계산에서 제외 |
