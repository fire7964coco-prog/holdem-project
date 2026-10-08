# vi SERP — L-A 규칙 (L-A-rules.md) (2026-10-08 · 아스트라)

> 대상: `texas-holdem-rules-for-beginners` · `holdem-game-order` · `holdem-betting-actions` · `holdem-blind-meaning` · `holdem-all-in-rules` · `holdem-showdown-rules`.
>
> 기준: `00-brief.md`. 볼륨은 `vi-core-volumes.md`의 0-1 측정값을 승계했다. 파일 작성·수정, 볼륨 재측정은 하지 않았다.
>
> SERP 정본은 제공된 `raw/serp-A-serp.txt`, 자동완성 정본은 `raw/serp-A-ac.txt`다. 웹 검색은 실제 해설 원문 확보와 보충 질문 관찰에 사용했다. 보충 검색 결과에 원자료의 순위를 부여하지 않았다.
>
> **완료 범위의 제한:** SERP 원자료에는 organic 결과가 총 167개 있으며, 20개 헤드 중 14개가 10개 미만이다. 누락 결과를 비포커로 계산하지 않았다. 외부 글의 헤딩은 인용 한도 내 축어 발췌와 한국어 구조 요약으로 기록했다. 따라서 **전체 H1/H2/H3 축어 재현까지 완료한 문서는 아니다.** 마지막 커버리지 표에 이 차이를 남겼다.

## 0. 오염 판정과 우선 결론

1. **입문 규칙 수요가 가장 확실하다.** `luật poker` 3,600, `cách chơi poker` 2,900, `poker là gì` 1,900, `luật chơi poker` 1,600은 포커 주제 결과가 우세하다. 다만 포커 결과 안에도 다른 변형 게임, 게임 속 포커, 전략 글, 제휴·앱 페이지가 섞인다. ‘포커 결과’와 ‘홀덤 입문 해설’을 같은 것으로 세면 안 된다.
2. **큰 숫자의 단독 정의형은 조준 근거가 없다.** `all in là gì` 5,400, `check là gì` 3,600, `call là gì` 2,900, `raise là gì` 1,900은 제공된 organic 결과에서 포커가 0개다. `flop là gì` 6,600도 관측된 6개가 모두 포커 밖이다. `poker` 결합형을 제목·정의 H2의 기준으로 삼는 편이 타당하다.
3. **현재 vi의 우선 수정은 정확성 두 곳과 표기 한 곳이다.** 입문 글의 2·4 법칙 조건, all-in 글의 무언 고액 칩 처리를 먼저 고친다. blind 글은 현재 `mù` 중심인 제목·H2에 검색 표현인 `blind`, `small blind`, `big blind`를 복원할 근거가 있다.

### 0-A. 계수 기준

- organic 항목만 분모에 넣었다. PAA·AIO·영상 팩·이미지 팩은 제외했다.
- 원자료의 숫자는 **SERP 블록 위치**다. PAA가 사이에 끼므로 organic 순위와 다르다.
- 포커 주제 판별은 원자료의 제목·URL에서 확인되는 범위다. 페이지 본문에 대한 사실 판단은 별도의 직접 열람 기록에서만 했다.
- 다른 포커 변형·포커 상품·포커 소재 콘텐츠는 넓은 ‘포커 주제’에는 포함하되, 홀덤 규칙 의도와 구분했다.
- `n/10`은 **확인된 포커 결과의 하한**이다. 10개 미만인 헤드는 관측 분모와 가능한 범위를 병기했다.
- 분류 기준: ≥7 ‘포커 몫 있음’, 3~6 ‘섞임’, ≤2 ‘없음’. 누락으로 경계를 넘을 수 있으면 확정하지 않았다.

### 0-B. 헤드별 직접 계수

| 헤드 | 0-1 볼륨 | 포커 결과 n/10 | 실제 관측 | 미확인 반영 | 판정·처리 |
|---|---:|---:|---:|---|---|
| luật poker | 3,600 | **8/10 이상** | 8/8 | 8~10 | 포커 몫 있음. RDR2·게임 위키·심리 글 포함 |
| cách chơi poker | 2,900 | **10/10** | 10/10 | 완전 관측 | 포커 몫 있음. Indian Poker·Badugi 2개를 홀덤과 분리 |
| poker là gì | 1,900 | **9/10 확실** | 9 확실+사전 1 | 9~10 | 포커 몫 있음. VDict의 포커 의미 범위는 본문 확인 실패 |
| luật chơi poker | 1,600 | **10/10** | 10/10 | 완전 관측 | 포커 몫 있음. 4장 포커·운영사·제휴 혼재 |
| texas holdem | 1,300 | **9/10 확실** | 9 확실+Spotify 1 | 9~10 | 포커 몫 있음. 게임·앱 3개, Spotify 본문 정체 미확정 |
| all in là gì | 5,400 | **0/10** | 0/10 | 완전 관측 | 없음·오염. 단독 헤드 조준 제외 |
| check là gì | 3,600 | **0/10 확인** | 0/8 | 0~2 | 없음·오염 |
| call là gì | 2,900 | **0/10 확인** | 0/8 | 0~2 | 없음·오염 |
| raise là gì | 1,900 | **0/10 확인** | 0/8 | 0~2 | 없음·오염. related의 포커 질문은 별도 증거 |
| fold là gì | 880 | **0/10 확인** | 0/7 | 0~3 | 관측분 포커 없음. 완전한 10개 기준 분류는 유보 |
| turn là gì | 880 | **0/10 확인** | 0/8 | 0~2 | 없음·오염 |
| river là gì | 720 | **0/10 확인** | 0/8 | 0~2 | 없음·오염 |
| flop là gì | 6,600 | **0/10 확인** | 0/6 | 0~4 | 관측분 포커 없음. SNS 속어 우세, 단독 헤드 보류 |
| blind là gì | 720 | **1/10 확인** | 1/9 | 1~2 | 없음·오염. 포커는 r/poker의 Small Blind 질문 1개 |
| showdown là gì | 390 | **0/10 확인** | 0/8 | 0~2 | 없음·오염 |
| cách chơi poker 2 lá | 110 | **8/10 이상** | 8/8 | 8~10 | 포커 몫 있음. double-board PLO 1개, ‘2 lá=홀덤’ 자동 등치 금지 |
| muck là gì | 70 | **0/10 확인** | 0/7 | 0~3 | 관측분 포커 없음. 생존 게임·영어 표현 |
| under the gun | 170 | **1/10 확인** | 1/8 | 1~3 | 관측분 대부분 음악·영화·관용구. 단독 헤드 보류 |
| flop turn river | 50 | **5/10 이상** | 5/6 | 5~9 | 관측분 섞임. 포럼·책·소설·셔츠 포함, 해설 의도 비율은 더 낮음 |
| ante là gì | 50 | **0/10 확인** | 0/10 | 사전·언어 수업 본문 일부 미확인 | 원자료에 명확한 포커 해설 결과 없음. 단독 헤드 제외 |

`flop turn river`의 Etsy 두 결과는 같은 상품 ID의 지역별 URL이다. **SERP 결과 수로는 2개**, 고유 상품으로는 1개다. Rumpus는 실제 원문에 포커 장면이 있는 문학 작품이므로 포커 소재로 세었지만, 규칙 해설로 세지 않았다.

**이 비율을 볼륨에 곱해 ‘포커 검색량’을 추정하지 않는다.** 서로 다른 키워드의 볼륨도 합산하지 않는다.

## 1. 검색어와 자동완성

### 1-A. 0-1 볼륨 승계

| 글 | 유효한 수요 기준 | 큰 숫자지만 제외·유보할 헤드 | 방향 |
|---|---|---|---|
| beginners | luật poker 3,600 · cách chơi poker 2,900 · poker là gì 1,900 · luật chơi poker 1,600 · texas holdem 1,300 | texas holdem의 앱·상품 의도는 분리 | 포커 정의→이 글에서 다루는 Hold’em 범위→쉬운 규칙 |
| game-order | cách chia bài poker 110 · người chia bài trong poker gọi là gì 70 · flop turn river 50 · luật chia bài poker 20 · preflop flop turn river 10 | turn 880 · river 720 · flop là gì 6,600 · under the gun 170 | 배분·진행 순서와 누가 먼저 행동하는지 |
| betting-actions | fold poker 50 · bet poker 30 · check/call/raise poker 각 20 · luật raise trong poker 10 | check 3,600 · call 2,900 · raise 1,900 · fold 880 | 다섯 액션의 뜻·허용 조건·min-raise |
| blind-meaning | big blind là gì 30 · blind trong poker là gì 20 · blind poker 20 · ante poker 20 · small blind là gì 10 | blind là gì 720 · ante là gì 50 | 차용어를 앞세우고 베트남어 풀이 병기 |
| all-in-rules | all in poker 170 · luật all in poker 10 · side pot 10 | all in là gì 5,400 | 팟 지분·초과 칩 반환·재오픈 조건 |
| showdown-rules | so bài poker 30 · showdown poker 10 · lật bài poker 10 | showdown là gì 390 · muck là gì 70 | 오픈 순서·muck·all-in 예외 |

`slow roll` 40은 0-1 승계값이지만, 이번 자료로 그 검색량 전체가 포커라고 확정하지 않았다. `pot phụ`, `side pot là gì`의 `-`는 데이터 없음이며 수요 0이 아니다.

### 1-B. 자동완성 원문 전체

제공된 **20개 시드 응답**, 제안 **232개**, 완전히 같은 문자열을 합친 고유 제안 **196개**를 직접 셌다. 같은 제안의 반복 노출은 별도 검색량이 아니다. 금지 축과 다른 게임도 원자료 보존을 위해 아래에는 남기되 처방 대상으로 삼지 않았다.

| 시드 | 제안 원문 |
|---|---|
| raise trong poker | raise trong poker là gì · luật raise trong poker · min raise trong poker · lệnh raise trong poker · cách raise trong poker · luật min raise trong poker · cách tính min raise trong poker · raise poker là gì · raise poker |
| poker * là gì | poker là gì · poker là gì trong bóng đá · poker là gì cách chơi · poker face là gì · chơi poker là gì · bài poker là gì · dealer poker là gì · cú poker là gì · flush poker là gì · poker là trò gì · phỉnh poker là gì · straddle poker là gì · môn poker là gì · giải poker là gì · itm poker là gì |
| preflop | preflop charts · preflop range · preflop poker · preflop academy · preflop gto · preflop poker charts · preflop trainer · preflop range chart · preflop ranges · preflop wizard · preflop charts 6 max · preflop range chart by position · preflop equity calculator · preflop range poker · preflop gto charts |
| luật * poker | luật poker · luật poker 5 lá · luật poker thứ tự · luật poker cơ bản · luật poker quốc tế · luật poker 2 lá · luật poker tiếng việt · luật poker thế giới · luật poker mỹ · luật poker texas holdem · luật poker 2 đôi · luật poker 4 lá · luật poker texas · luật poker việt nam · luật poker tournament |
| * trong poker là gì | fold trong poker là gì · thùng trong poker là gì · flush trong poker là gì · ante trong poker là gì · gtd trong poker là gì · raise trong poker là gì · check trong poker là gì · call trong poker là gì · itm trong poker là gì · flop trong poker là gì · sảnh trong poker là gì · straddle trong poker là gì · blind trong poker là gì · rake trong poker là gì · pot trong poker là gì |
| texas holdem | texas holdem poker · texas holdem poker pokerist · texas holdem poker apk · texas holdem poker cybergame · texas holdem poker online · texas holdem poker pokerist apk · texas hold'em hands · texas holdem rules · texas holdem online · texas holdem online free · texas holdem poker hands · texas holdem cheat sheet · texas holdem poker rules · texas holdem poker free · texas holdem free |
| cách chơi poker | cách chơi poker 2 lá · cách chơi poker 5 lá · cách chơi poker cơ bản · cách chơi poker online · cách chơi poker là gì · cách chơi poker đơn giản · cách chơi poker cho người mới · cách chơi poker texas holdem · cách chơi poker luôn thắng · cách chơi poker chip · cách chơi poker giỏi · cách chơi poker 2 người · cách chơi poker 3 lá · cách chơi poker texas · cách chơi poker hiệu quả |
| cách * poker | poker cách chơi · poker cách tính · poker cách tính điểm · poker cách chia bài · poker cách thắng · cách chơi poker 2 lá · cách chơi poker 5 lá · cách chơi poker cơ bản · cách chơi poker online · cách chơi poker giỏi · cách chơi poker texas holdem · cách chơi poker cho người mới bắt đầu · cách chơi poker texas · cách chơi poker là gì · cách đánh poker luôn thắng |
| luật poker | luật poker 2 lá · luật poker 5 lá · luật poker quốc tế · luật poker thế giới · luật poker texas holdem · luật poker 4 lá · luật poker tournament · luật poker thứ tự · luật poker sảnh · luật poker tiếng việt · luật poker thùng phá sảnh · luật poker liar bar |
| all in poker | all in poker movie · all in poker club · gif poker all in · all in poker chips · all in poker rules · all in poker meaning · all in poker chip · meme all in poker · all in poker button · all in – poker face 2006 · all in poker chart · all in poker sunglasses · all in poker league · all in poker lotto winning numbers · all in poker significado |
| flop turn river | flop turn river hole · flop turn river order · flop turn river meaning · flop turn river poker · flop turn river poker terms · flop turn river là gì · flop turn river nyt · flop turn river significado · flop turn river origin · flop turn river connections · flop turn river español · flop turn river etymology · flop turn river bust · did flop turn river · flop turn river en francais |
| call trong poker | call trong poker là gì · call any trong poker là gì · lệnh call trong poker · call lu trong poker · cold call trong poker là gì · call poker là gì · call poker · call poker meaning |
| check trong poker | check trong poker là gì · lệnh check trong poker · khi nào được check trong poker · check poker là gì · check poker · check poker meaning |
| fold trong poker | fold trong poker là gì · lệnh fold trong poker · fold trong poker la gi · fold poker là gì · fold poker |
| blind trong poker | blind trong poker là gì · big blind trong poker là gì · big blind trong poker · small blind trong poker · blind poker là gì · blind poker · blind poker meaning |
| lật bài poker | thứ tự lật bài poker · lật bài poker trên dưới · lật poker · lật bài tẩy là gì · luật bài poker |
| poker là gì | poker là gì trong bóng đá · poker là gì cách chơi · poker face là gì · chơi poker là gì · bài poker là gì · dealer poker là gì · cú poker là gì · flush poker là gì · poker là trò gì · phỉnh poker là gì · straddle poker là gì · môn poker là gì · giải poker là gì · itm poker là gì · gto poker là gì |
| showdown poker | showdown poker prague · showdown poker palace · showdown poker rules · showdown poker club · showdown poker chodov · showdown poker chips · showdown poker tour · showdown poker zürich · showdown poker club noida · showdown poker room · showdown poker game · showdown poker club reviews · showdown poker alpharetta · showdown poker parma · showdown poker meaning |
| ai đi trước poker | **응답 제안 0개** |
| side pot | side pot poker · side potato recipes · side potato dishes · side potatoes · side pot poker rules · sid portal · side pot texas holdem · side pots for plants · side pot calculator · side pot rules · side potatoes for steak · side portrait · side pot meaning · side pot fishing · side pot meaning poker |

해석:

- 액션 시드에서는 `trong poker là gì`, `lệnh`, `khi nào được`, `cách tính min raise`가 실제로 관측된다. 정의만 나열하는 사전보다 **사용 조건과 계산 예시를 갖춘 규칙 글**에 맞는 표현이다.
- `all in poker`, `showdown poker` 자동완성에는 영화·클럽·상품·외국어가 많이 섞인다. 자동완성이 있다는 이유만으로 베트남 규칙 수요를 확정하지 않는다.
- `ai đi trước poker`는 제안이 없었다. 이 표현을 “자동완성에서 확인된 질문”으로 기록하면 안 된다.
- `turn là gì`, `river là gì`, `muck là gì`, `under the gun` 각각의 정확한 자동완성 시드는 제공 파일에 없다. `flop turn river`의 제안을 개별 시드 측정으로 바꾸어 표기하지 않았다.

## 2. §볼륨 측정 요청

아래는 **측정 요청 목록**이다. 숫자를 추정하거나 0으로 채우지 않았다. 0-1의 기존 표현 및 축약 묶음에 이미 포함된 `luật poker 2 lá` 등은 재측정 후보에서 제외했다.

| 묶음 | 새 후보 검색어 | 발견 근거 |
|---|---|---|
| 쉬운 입문 | poker là gì cách chơi · cách chơi poker đơn giản · cách chơi poker 2 người · cách chơi poker cho người mới bắt đầu · cách chơi poker chip | 자동완성 |
| 배분·진행 | poker cách chia bài · flop turn river là gì · flop trong poker là gì | 자동완성 |
| 체크 | check trong poker là gì · khi nào được check trong poker · lệnh check trong poker · check poker là gì | 자동완성 |
| 콜 | call trong poker là gì · lệnh call trong poker · call poker là gì | 자동완성 |
| 레이즈 | raise trong poker là gì · min raise trong poker · luật min raise trong poker · cách tính min raise trong poker · lệnh raise trong poker · raise poker là gì | 자동완성 |
| 폴드 | fold trong poker là gì · lệnh fold trong poker · fold poker là gì | 자동완성 |
| 블라인드·앤티 | big blind trong poker là gì · ante trong poker là gì · ante poker là gì | 자동완성·보충 related |
| 공개 순서 | thứ tự lật bài poker · lật bài tẩy là gì | 자동완성 |
| 올인·팟 | all in poker rules · all in poker meaning · side pot poker · side pot poker rules · side pot texas holdem | 자동완성. 영어 표현이므로 vi 수요 해석 주의 |
| 질문형 | Làm cách nào để chơi poker dễ hiểu? · Làm cách nào để chia bài trong poker? · Luật chơi poker là gì? | 제공 PAA |

`cold call trong poker là gì`, `straddle poker là gì`, `flush poker là gì`는 관측했지만 각각 다른 레인과 대조해야 한다. `side pot calculator`는 도구 의도 후보이므로 L-A 글 수요와 합치지 않는다. `ai đi trước poker`는 자동완성 0건이어서 위 관측 후보 목록에 넣지 않았다.

## 3. SERP 상위 결과·PAA·검색 기능

### 3-A. 결과 위치·제목·유형 인덱스

원문 URL과 원래 제목의 전수 정본은 [SERP 원자료](<C:/Users/하봄/AppData/Local/Temp/claude/C--Users----Downloads-Holdem-Project/54bd9530-538a-4bab-99e4-8f1d236a1ebf/scratchpad/astra-A/raw/serp-A-serp.txt>)다.

아래 숫자는 **원자료 블록 위치**이며, 제목의 `…`는 축약이다. `G`는 원자료에 실제로 기록된 `google.com/goto?url=…` 중계 URL이다. 목적지를 확인하지 못한 G를 추측한 사이트 주소로 치환하지 않았다. 긴 중계·Facebook URL은 이 인덱스에 재전사하지 않았으므로, **URL·제목 전체 재현은 링크한 원자료를 참조해야 한다.**

| 헤드·원자료 위치 | 관측된 organic 결과: 블록 번호 / 도메인 / 제목·유형 |
|---|---|
| **luật poker**, 2행 | 1 G / Cách chơi Poker Đối Đầu… — 해설 표제, 목적지 미확인; 2 G / Hướng dẫn chơi Poker \| Đêm Poker tại Inventory Wiki \| Fandom — 게임 위키; 3 G / Showdown (poker) — 위키 표제; 4 ggpoker / Kỷ luật trong Poker — 운영사 심리 글; 5 reddit / Luật Thùng theo luật và quy định cơ bản nhất — 포럼; 6 calameo / Cách Chơi Poker Online Từ A Z V1 0 — 문서; 7 facebook / ae nào rành luật poker trong rdr2… — 게임 포럼; 8 ulifestyle / Luật chơi Poker – Hướng dẫn cách chơi bài Poker quốc tế — 블로그 |
| **cách chơi poker**, 12행 | 1 wikipoker / cách chơi — 태그 목록; 2 G / Luật chơi đầy đủ của trò Indian Poker… — 다른 게임; 3 ggpoker / Chiến Lược Poker: Cách Chơi Bài Liên Kết Cùng Chất — 전략; 4 wikipoker / Badugi Poker… — 다른 변형; 5 reddit / Làm sao để thắng poker?… — Watch Dogs 포럼; 6 stake / Cách Chơi Poker Trực Tuyến – Hướng Dẫn & Mẹo — 운영사; 7 calameo / Cách Chơi Poker Online Từ A Z V1 0 — 문서; 8 ggpoker / Cách Tính Cách Người Chơi Poker Ảnh Hưởng Đến… — 플레이 스타일; 9 wikipoker / Cách chơi Nit trong Poker… — 전략; 10 reddit / Phong cách chơi poker của Fedor Holz á? — 포럼 |
| **poker là gì**, 24행 | 1 facebook/VTV / Poker hay cờ bạc… — 법률·뉴스 축, 제외; 3 ai-hay / Hướng dẫn chơi poker — AI 답변; 4 vdict / poker nghĩa là gì? — 사전; 5 G / Các vị trí trong Poker… — 포지션 해설 표제; 6 G / Poker 101: Tỷ lệ cược trong Poker… — 확률 해설 표제; 7 reddit / Những điều cơ bản của poker… — 포럼; 8 G / Kickers trong Poker… — 키커 해설 표제; 9 youtube / Poker là gì? Luật chơi poker No-Limit Hold'em cho người mới — 영상; 10 calameo / Cách Chơi Poker Online Từ A Z V1 0 — 문서; 11 reddit / thuật ngữ poker nào làm… — 용어 포럼 |
| **luật chơi poker**, 37행 | 1 G / Cách chơi Poker Đối Đầu… — 해설 표제; 2 G / Các Loại Poker: Phân tích chi tiết 12 loại Poker – 2026 — 변형 묶음; 3 G / Hướng dẫn sử dụng chip poker \| Sòng bạc… — 카지노 표제; 4 natural8 / Cách chơi Poker giỏi hơn — 운영사 전략; 5 G / Bài Poker Bốn Lá là gì?… — 다른 게임; 6 calameo / Cách Chơi Poker Online Từ A Z V1 0 — 문서; 7 youtube / Poker là gì? Luật chơi poker No-Limit Hold'em cho người mới — 영상; 8 ulifestyle / Luật chơi Poker… — 블로그; 9 hitclub1 / Học luật chơi Poker chuẩn quốc tế ghi nhớ trong 5 phút — 홍보형; 10 gameservers / Luật Chơi Poker Online Chi Tiết Nhất… — 홍보형 표제 |
| **texas holdem**, 50행 | 1 G / Cách chơi Texas Hold'em \| Luật Poker; 2 G / Hướng dẫn chơi Texas Hold'Em: Luật chơi & Chiến lược; 3 G / đến texas hold'em; 4 G / Năm cách để cải thiện chiến lược chơi Texas Hold 'Em…; 5 App Store / Texas Hold'em Poker: Pokerist+ — 앱; 6 Google Play / Holdem or Foldem – Texas Poker — 앱; 7 Yandex / Texas Hold'em Poker — 웹게임; 8 YouTube / New to BGA: Texas Hold'em — 영상; 9 G / 21 Mẹo Chơi Texas Holdem… — 전략 표제; 10 Spotify / How To Win At Texas Hold'em Poker — 음원·오디오 목록, 본문 미확정 |
| **all in là gì**, 62행 | 1 reddit / DC all in… — 만화; 3 HiNative / all in vain — 영어; 4 maxhubvietnam / Màn Hình LED All In One Là Gì? — 제품; 5 reddit / All inclusive — 여행; 6 ZIM / All-terms — 사전; 7 reddit / CDJ và All in One — DJ 장비; 8 ZIM / Have it all — 사전; 9 HiNative / Play in all its rich variety — 영어; 10 ILTS / All the same — 영어; 11 ZIM / Tell all — 사전 |
| **check là gì**, 75행 | 2 ai-hay / Check in — AI 답변; 4 ZIM / Check and balance — 사전; 5 seguros-viajes / Check-in — 여행; 6 thuvienphapluat / Sao kê tiếng anh… Check var… — 일반 정보; 8 emagia / eCheck — 결제; 9 HiNative / check in — 영어; 10 ai-hay / Check-in — AI 답변; 11 ZIM / Mic check — 사전 |
| **call là gì**, 88행 | 2 Soha / Nghĩa của từ Call — 사전; 3 Cambridge / CALL — 사전; 4 Toomva / Nghĩa của từ call — 사전; 5 ELSA / Call đi với giới từ gì? — 영어; 6 TikTok / 4 Cụm Động Từ Với CALL… — 영어 영상; 8 StudyTiengAnh / Cấu Trúc và Cách Dùng CALL… — 영어; 9 ILA / Call for… — 영어; 10 TiengAnhMoiNgay / Cấu trúc của từ CALL — 영어 |
| **raise là gì**, 101행 | 3 Cambridge / RAISE — 사전; 5 Soha / Nghĩa của từ Raise — 사전; 6 Facebook / RISE và RAISE… — 영어; 7 Prep / Raise và Rise… — 영어; 8 Study4 / Phân biệt raise và rise… — 영어; 9 Pantado / Cách Phân Biệt RAISE Và RISE… — 영어; 10 StudyTiengAnh / Cấu Trúc và Cách Dùng từ Raise… — 영어; 11 bab.la / RAISE — 사전 |
| **fold là gì**, 115행 | 2 Cambridge / FOLD — 유의어 사전; 3 Facebook / Có thể bạn chưa biết nghĩa này của từ FOLD! — 영어; 6 Mochi / below-the-fold — 사전; 7 reddit / fold… khi làm bánh — 요리; 8 TikTok / Fold Là Gì — 영상 목록; 9 Facebook / gấp chăn fold your arms… — 영어; 10 bab.la / FOLD DOWN — 사전 |
| **turn là gì**, 127행 | 2 G / Máy chủ TURN… — 서버; 3 ZIM / Turn over — 사전; 4 reddit / turn hay turns? — 문법; 6 EnglishTestStore / Turn sth round — 영어; 7 HiNative / Take your turn! — 영어; 8 LingoSpeak / Turn Up — 영어; 9 reddit / Vòng dây (TURN) trong transformer… — 변압기; 10 BrightChamps / Turn Out — 영어 |
| **river là gì**, 139행 | 2 VDict / east river; 3 ZIM / River-rock-water; 5 VDict / pearl river; 6 VietnamBiz / River Crossing Terminal — 교통; 7 Facebook / Cry me a river — 영어; 8 VDict / yangtze river; 9 TienDienTu / River (RIVER)… satUSD — 암호자산; 10 VDict / mekong river |
| **flop là gì**, 151행 | 4 TikTok / Flop Nghĩa Là Gì?… — 속어 영상; 5 HoangHaMobile / Flop là gì? Nguyên nhân bị Flop TikTok?… — SNS; 8 Logico / Flop TikTok… — SNS; 9 ThuvienPhapLuat / Flop là gì — 태그 목록; 10 BBCosplay / Flop… Tiktok, Facebook — SNS; 11 Dinos / Flop trên Tiktok, Facebook… — SNS |
| **blind là gì**, 164행 | 2 VDict / word-blind — 사전; 3 reddit / so blind và sp blind — 성격 유형; 4 HiNative / Blind — 영어; 5 ZIM / Color-blind — 사전; 6 TimViec365 / Blind hiring — 채용; 7 Cambridge / DOUBLE-BLIND — 발음; 8 VDict / window blind — 사전; **9 reddit / Ý nghĩa của Small Blind là gì? — 포커**; 10 QuanTriMang / Smart Blind — 스마트 커튼 |
| **showdown là gì**, 176행 | 4 ZIM / Cuộc đối đầu tiếng Anh… — 사전; 5 reddit / Champions… Showdown — 포켓몬; 6 Facebook / HYBE… Showdown — 방송; 7 G / Showdown (Cheers) — TV; 8 reddit / Chuyện gì đang xảy ra với Showdown… — 포켓몬; 9 reddit / Hunt: Showdown… — 게임; 10 TikTok / Wild Bounty Showdown — 게임 영상; 11 reddit / Hunt Showdown… — 게임 |
| **cách chơi poker 2 lá**, 189행 | 1 G / Hướng dẫn cách chơi Poker: trò chơi bài – Fournier — 해설 표제; 2 AI Hay / Hướng dẫn chơi poker — AI 답변; 3 reddit / Cái kiểu chơi hai bảng… — double-board PLO; 4 G / người chơi tố với bất kỳ hai lá… — 전략 표제; 5 Calameo / Cách Chơi Poker Online Từ A Z V1 0 — 문서; 6 Facebook / PHỈNH… Texas Hold'em cơ… — 홍보; 7 Google Forms / Hướng dẫn cách chơi Poker Online… — 폼·홍보 표제; 8 Ulifestyle / Luật chơi Poker… — 블로그 |
| **muck là gì**, 200행 | 5 Glosbe / Phép dịch muck… — 사전; 6 reddit / Vật liệu… Muck — 생존 게임; 7 EnglishTestStore / Muck sth out — 영어; 8 YouTube / MUCK tập cuối… — 게임; 9 YouTube / This Survival Game Is Not Difficult \| Muck — 게임; 10 reddit / Hướng dẫn chơi Muck — 게임; 11 Download.com.vn / Game Muck… — 게임 |
| **under the gun**, 213행 | 4 G / Under the Gun (Sisters of Mercy) — 음악; 5 RottenTomatoes / Under the Gun (2016) — 영화; 6 Filmweb / Under the Gun (1951) — 영화; 7 Spotify / Jesse Aycock — 음악; 8 SaveWordly / Under the gun — 관용구; 9 NhacCuaTui / Little Steven — 음악; **10 G / Cách chơi ở vị trí Under the Gun (UTG) trong Poker — 포커**; 11 UDN / Under the Gun – Kenny… — 영어 블로그 |
| **flop turn river**, 228행 | 1 reddit / What does it mean to flop/turn/river equity? — 포커 포럼; 4 Punters / Flop Turn River — 경주마; 5 Rumpus / Rumpus Exclusive: “Flop, Turn, River” — 문학; 6 Amazon / Flop, Turn, River: A Hand-By-Hand Analysis… — 포커 책; 7 Etsy / Flop Turn River Poker Shirt… — 상품; 8 Etsy / Buy Flop Turn River Poker Shirt… — 같은 상품의 다른 지역 URL |
| **ante là gì**, 238행 | 1 VDict / ante up — 사전; 2 Facebook / Ante Café — 카페; 3 reddit / …học xong tiếng… — 영어 학습; 5 Toomva / ante-room — 사전; 6 Google Play / ssdd clock — 앱; 7 ZIM / Ante-date — 사전; 8 Forvo / ante meridiem — 발음; 9 Strava / Ante — 커뮤니티; 10 LopNgoaiNgu / LESSON 225 – English American Style — 영어 수업; 11 bab.la / ante meridiem… — 발음 |

**유형상 확인되는 혼입:** `texas holdem`에 게임·앱 3개, `cách chơi poker`에 명시적인 다른 포커 변형 2개, `luật chơi poker`에 4장 포커 1개, `cách chơi poker 2 lá`에 double-board PLO 1개가 있다. 이것을 사이트·앱 추천이나 다른 게임용 콘텐츠 제작으로 연결하지 않는다.

### 3-B. 제공 PAA 원문

11개 헤드에서 **40개 질문**을 셌다. 나머지 9개는 원자료에 PAA가 기록되지 않았다.

| 헤드 | PAA 원문 |
|---|---|
| poker là gì | Poker là môn thể thao gì? · Poker là gì trong bóng đá? · Poker nghĩa là gì? · Chia bài poker gọi là gì? |
| all in là gì | Thuật ngữ all in là gì? · Chơi all in là gì? · All in là gì trong tình yêu? · Go all in là gì? |
| check là gì | Check var nghĩa là gì? · Check có nghĩa là gì? · Check là gì trong ngân hàng? · Check in nghĩa tiếng Việt là gì? |
| raise là gì | Raise khác gì rise? · Raise nghĩa tiếng Việt là gì? · Raise trong công việc là gì? · Raise question là gì? |
| flop là gì | "flop" trên TikTok có nghĩa là gì? · Lốp là gì trên TikTok? · Flop bài là gì? · Phim flop là gì? |
| showdown là gì | Showdown là gì trong rap? · Pokemon Showdown là gì? · Shout down nghĩa là gì? · Showout là gì? |
| cách chơi poker 2 lá | Làm cách nào để chơi poker dễ hiểu? · Làm cách nào để chia bài trong poker? · Thùng trong poker là gì? · Luật chơi poker là gì? |
| muck là gì | Cách chơi game Muck như thế nào? · Schmuck nghĩa là gì? · Muck out là gì? · Muck là game gì? |
| under the gun | Under the gun nghĩa là gì? |
| flop turn river | What is the 15/25/35 rule in poker? · Do you burn a card before the flop turns and river? · What is it called after the flop in poker? |
| ante là gì | Up the ante là gì? · Ex ante là gì? · Anterior là gì? · Antedate là gì? |

`Poker là gì trong bóng đá?`, 연애·은행·SNS·포켓몬·생존 게임 질문은 포커 FAQ로 흡수하지 않는다. `What is the 15/25/35 rule in poker?`는 질문의 존재만 기록했다. 그 수치 규칙의 타당성을 검증한 것은 아니다.

### 3-C. Related searches 원문

| 헤드 | 원문 |
|---|---|
| luật chơi poker | Cách tính chip trong poker · 1 chip poker bằng bao nhiêu tiền · 1000 chip poker bằng bao nhiêu tiền |
| call là gì | Call đọc la gì · Call la gì trên Facebook · Call là gì trong tiếng Anh · Call là gì trên Zalo · Video call Tiếng Việt là gì · Cskh Call là gì · Gối Tiếng Anh là gì · Call me đọc Tiếng Anh là gì |
| raise là gì | Rise là gì · Raise money là gì · Raise là gì tiếng Anh · Raised là gì · **Raise là gì trong Poker** · Raise là từ loại gì · Raise for · Raise children là gì |
| under the gun | **Under the gun poker** · Under the gun meaning · Under the Gun kdrama · Under the Gun - song · Under The Gun zespół · Under the Gun Alpena MI · Under the Gunn · Cast of Under the Gun |

칩 관련 질문은 **칩 개수와 총액 단위의 차이**를 설명하는 재료로만 사용한다. 실제 화폐 환전·실머니 입문을 겨냥하지 않는다.

### 3-D. AIO·스니펫·영상

| 기능 | 직접 센 결과 | 해석 |
|---|---|---|
| AI Overview | **10/20**: check, call, raise, fold, turn, river, flop, showdown, muck, under the gun | 존재 표지만 기록. 내용은 사실 근거로 사용하지 않음 |
| Featured snippet | 해당 유형 표지 **기록 없음** | “실제 Google에 절대 없었다”는 뜻이 아님 |
| 영상 팩 | **4개 헤드** | fold 3개 영어 영상; flop 4개 SNS 속어 영상; muck 4개 생존 게임 영상; flop turn river 2개 포커 전략 영상 |
| Shorts | **3개 헤드**, 각 5개 표제 | call·fold·flop. 포커 수요로 계산하지 않음 |
| Related | **4개 헤드** | 위 표 |
| Knowledge graph | under the gun | 포커 정의 패널로 단정하지 않음 |

`flop turn river`의 영상 팩 표제는 다음과 같다.

- `9 FLOP, TURN, RIVER Poker Tips For Beginners (Just Do This!)`
- `FLOAT the FLOP, FLOAT the TURN, RAISE the RIVER... It ...`

영상 자체를 시청·검증한 것은 아니므로 영상 속 전략을 사실로 인용하지 않았다.

### 3-E. 보충 브라우저 관찰

2026-10-08, Google 검색 화면에서 `hl=vi`, `gl=vn`, desktop으로 관찰했다. **DFS location 2704 원자료와 동일한 수집 조건·시점이라고 간주하지 않는다.**

| 보충 쿼리 | 직접 관찰한 PAA | 용도 |
|---|---|---|
| check trong poker la gi | PAA 블록 관찰되지 않음 | Poker.org·Wikipoker 등 실제 해설 발견에 사용 |
| blind trong poker là gì | Blind có nghĩa là gì? · Phiên âm của từ "blind" là gì? · Fold poker là gì? | 첫째도 일반어 질문이라 약한 증거. 발음은 제외, fold는 액션 글 참고 |
| showdown poker là gì | Showdown là gì? · Poker là môn thể thao gì? · Pokemon Showdown là gì? · Chia bài poker gọi là gì? | 정의 질문 확보. 포켓몬 질문 제외 |

보충 related에서 `Ante trong poker là gì`, `Ante poker là gì`, `Small Blind Big blind là gì`를 관찰했다. 이를 PAA로 잘못 표시하지 않았다.

## 4. 실제 해설 원문 정독

### 4-A. 헤드별 정독 대응

동일한 원문이 여러 헤드의 실제 해설 역할을 하면 재사용했다. 중복을 새로운 글로 세지 않았다. 원자료에 적합한 해설이 부족하거나 열람이 실패한 경우 검색으로 찾은 관련 해설을 대체 표본으로 사용했다.

| 헤드 | 정독한 글 ID | 편수·비고 |
|---|---|---|
| luật poker | W1 · W2 · T1 · V1 | 4, 보충 해설 표본 |
| cách chơi poker | W1 · W2 · T1 · V1 | 4, 태그 목록·다른 게임 제외 |
| poker là gì | W2 · W1 · T1 · V1 | 4, AI 답변은 독립 해설에서 제외 |
| luật chơi poker | W1 · W2 · T1 · V1 | 4 |
| texas holdem | W1 · W2 · T1 · V1 | 4, 앱·게임 제외 |
| all in là gì | W3 · P1 · D1 | 3, 포커 결합 의도 대체 |
| check là gì | W3 · T1 · E2 | 3, E2는 영어 원문 |
| call là gì | W3 · T1 · V1 | 3 |
| raise là gì | W3 · T1 · V1 | 3 |
| fold là gì | W3 · T1 · V1 | 3 |
| turn là gì | W1 · T1 · V1 | 3 |
| river là gì | W1 · T1 · V1 | 3 |
| flop là gì | W1 · T1 · V1 | 3 |
| blind là gì | W4 · B1 · G1 | 3 |
| showdown là gì | W5 · P2 · E1 | 3, E1은 영어 원문 |
| cách chơi poker 2 lá | W1 · T1 | 경량 2 |
| muck là gì | W5 · P2 | 경량 2 |
| under the gun | U1 · W1 | 경량 2, 위치 정의·행동 순서 |
| flop turn river | W1 · T1 | 경량 2 |
| ante là gì | W4 · W6 | 경량 2 |

**이 표는 정독 편수표다.** 각 헤드의 원래 Google VN organic 1~4위가 이 글들이라는 의미는 아니다.

### 4-B. 원문 헤딩·분량·구성

외부 원문의 전체 헤딩을 재배포하지 않고 **짧은 축어 발췌**와 구조를 기록했다. `…` 뒤는 생략이다. H2/H3 개수는 본문에서 직접 세었으며 목차·메뉴는 제외했다.

분량은 읽은 본문 구간의 **공백 구분 단위 수**다. 베트남어의 언어학적 ‘단어 수’가 아니다. 이미지 수는 추출 본문의 이미지 표시 행 수이며 실제 DOM의 고유 이미지 개수와 같다고 보장하지 않는다. 영상은 본문 추출에서 확인되지 않았다고만 기록한다.

| ID·직접 열람 URL | 헤딩 축어 발췌·구조 | 본문 분량·형식 | 예시·경험·품질 관찰 |
|---|---|---|---|
| **W1** [Wikipoker 규칙](https://wikipoker.net/luat-choi-poker/) | H1 `Luật chơi Poker No-Limit Hold’em cập nhật mới nhất`; H2 `Luật chơi Poker cơ bản`; H3 `Vòng cược thứ 3…`. H2 4개, H3 5개: 기본 규칙→4개 스트리트·showdown→족보→용어→결론 | 약 2,121단위; 이미지 표시 2행; 독립 FAQ 0; 본문 표 0 | 0·1·2장 홀카드 사용과 족보를 설명. Turn 문단의 순번 오류 확인 |
| **W2** [Wikipoker 포커 정의](https://wikipoker.net/poker-la-gi/) | H1 `Poker là gì? Hướng dẫn toàn tập từ luật chơi đến chiến thuật cho người mới`; H2 `Poker chơi như thế nào?`. H2 8개, H3 0 | 약 948단위; 이미지 3행; FAQ 3개 | 정의·플레이·족보·액션·변형을 짧게 묶음. 법률 성격 섹션은 처방에서 제외 |
| **W3** [Wikipoker 액션](https://wikipoker.net/cac-hanh-dong-tren-ban-poker/) | H1 `Giải thích cơ bản…`; H2 `5 hành động…`; H3 `Check`, `Bet`, `Call`, `Raise`, `Fold`. H2 5개, H3 8개 | 약 1,931단위; 이미지 2행; 독립 FAQ 0; 표 0 | min-raise·짧은 all-in 재오픈 사례가 구체적. 체크 설명의 앞뒤 조건 충돌 |
| **W4** [Wikipoker stack·blind·ante](https://wikipoker.net/stack-blind-ante-poker/) | H1 `Stack, blind và ante là gì trong Poker?…`; H2 `Mối quan hệ…`; H3 `Ante là gì trong poker?`. H2 4개, H3 3개 | 약 1,304단위; 이미지 5행; FAQ 3개; 표 0 | ante 합계 예시가 유용. 전통적인 개인 ante 설명과 BBA 구분 보강 여지 |
| **W5** [Wikipoker show hand](https://wikipoker.net/show-hand-la-gi/) | H1 `Show hand là gì?…`; H2 `“Muck” là gì trong poker?`; H3 `Định nghĩa “muck”`. H2 6개, H3 6개 | 약 1,245단위; 이미지 4행; 독립 FAQ 0 | 오픈 순서·muck·예절·전략을 묶음. 요청 열람권의 적용 규정이 충분히 좁혀지지 않음 |
| **B1** [Wikipoker big blind](https://wikipoker.net/big-blind-poker/) | H1 `Big blind trong Poker…`; H2 `Big Blind là gì…`; H3 `Blind trong game heads-up…`. H2 5개, H3 9개 | 약 1,770단위; 이미지 3행; 독립 FAQ 0 | heads-up 순서와 pot odds 예시가 있음. 초반 강제 납부 주기 표현과 후반 설명 충돌 |
| **T1** [Thủ Thuật Chơi 입문](https://thuthuatchoi.com/huong-dan-cach-choi-poker-xi-to-co-ban.html) | H1 `Hướng dẫn…`; H3 `Poker Chip`. H2 추출은 빈 `##` 뒤에 별도 장 번호·제목이 나오는 구조. 표시상 8부, H3 27개 | 약 2,882단위; 이미지 표시 15행; FAQ 0 | 장비·족보·액션·진행을 폭넓게 다룸. 실제 5장 조합과 all-in 지분 설명 오류 |
| **V1** [VietGameIndex Hold’em](https://vietgameindex.com/tro-choi/poker-texas-holdem/) | H1 `Poker là gì? Luật Texas Hold’em, thứ tự bài và bốn vòng cược`; H2 `Tóm tắt trước…`; H3 `Flop, turn và river`. H2 6개, H3 9개 | 약 1,114단위; 본문 이미지 표시 0; FAQ 5개; 비교형 구획 있음 | Hold’em·Omaha·Xì Tố 구분, 0·1·2장 사용, all-in 후 남은 베팅 조건이 명료. 하단 홍보 문맥은 별도 |
| **P1** [PokerVietnam side pot](https://pokervietnam.net/thuat-ngu-poker/side-pot/) | H1 `Pot phụ (side pot)…`; H2 `Ví dụ thực tế`. H2 10개, H3 0 | 약 809단위; 표 2개; FAQ 3개; 측정 본문 이미지 0 | 30·90·90 기여액 예시는 맞음. FAQ에서 모든 all-in 플레이어를 최단 스택처럼 일반화 |
| **P2** [PokerVietnam showdown](https://pokervietnam.net/cach-choi-poker/showdown/) | H1 `Cách chơi Showdown…`; H2 `Thứ tự lật bài…`; H3 `Kicker…`. H2 7개, H3 4개 | 약 3,451단위; 표 2개; 이미지 표시 2행; FAQ 4개 | 베스트5·키커 예시가 구체적. 네 장 동일 수트 보드의 플러시 강도 설명 오류. 고객 프로그램 홍보 이미지 포함 |
| **D1** [Dezhoupuke all-in](https://dezhoupuke.org/vi/term/all-in) | H1 `All-in trong poker là gì?`; H2 `Quyết định sau khi all-in`; H3 `All-in là raise hay call?`. H2 5개, H3 6개 | 약 785단위; 표 1개; FAQ 6개; 이미지 0 | 짧은 정의·질문 구조. 두 명의 불균등 all-in에서 초과분 반환을 side pot과 혼동 |
| **G1** [GGPoker blinds](https://ggpoker.com/vi/blog/poker-blinds-explained-small-and-big-blind-essentials/) | 사이트 H1 `GGPOKER`; 글 제목은 H2 `Giải Thích Về Blinds Trong Poker…`; 하위 H2 `Small Blind`, `Big Blind`. 글 제목 외 본문 H2 7개, H3 0 | 측정 구간 약 1,164단위; 이미지 표시 2행; 별도 커버 이미지 있음 | 영어 차용어 중심. 기본 역할 설명은 있으나 HU·BBA 같은 예외가 약함 |
| **U1** [Wikipoker positions](https://wikipoker.net/vi-tri-trong-poker/) | H1 `Các vị trí trong Poker – Sự khác biệt lớn giữa thắng hay thua 1 hand`; H2 `Các vị trí trong Poker`; H3 `Early Position (EP)`. H2 8개, H3 3개, H4 3개 | 약 2,141단위; 이미지 3행; 독립 FAQ 0 | UTG·SB·BTN·CO를 설명하고 KJo 사례·VPIP 그림을 제시. 전략 단정을 규칙으로 옮기지 않음 |
| **W6** [Wikipoker blind structure](https://wikipoker.net/cau-truc-blind-trong-giai-dau-poker/) | H1 `Cấu trúc Blind trong giải đấu Poker…`; H2 `Thời gian tăng blind…`. H2 6개, H3 0 | 약 1,337단위; blind 구조 표 1개; 이미지 1행; FAQ 0 | 시작 스택과 BB 환산 사례. 온라인=개인 ante, 라이브=BBA 구분은 모든 형식의 보편 규칙으로 쓰면 안 됨 |
| **E1** [Wikipedia Showdown](https://en.wikipedia.org/wiki/Showdown_(poker)) | H1 `Showdown (poker)`; H2 `References`; 설명 본문 H2/H3 0 | 본문 약 371영어 단어; 표·본문 이미지·FAQ 0 | Robert’s Rules와 열람권의 하우스 룰 차이를 설명. 현행 TDA의 대체 규정집으로 사용하지 않음 |
| **E2** [Poker.org Check](https://www.poker.org/poker-strategy/poker-for-beginners/what-does-check-mean-in-poker-aeGq13H9UyyM/) | H1 `What does check mean in poker?`; H2 `When you can and can't check`; H3 `1. When you have a bad hand`. H2 4개, H3 6개 | 본문 약 849영어 단어; FAQ 0; 본문 중 광고 이미지 표시 있음 | 프리플롭 BB 예외를 명시. 전략 조언을 모든 보드·레인지의 정답으로 취급하지 않음 |

**시각 자료의 한계:** 이미지 표시는 셌지만 모든 이미지 내부의 숫자·카드까지 검증한 것은 아니다. 이미지 표지만으로 ‘정확한 확률표’나 ‘실전 경험 증거’라고 평가하지 않았다.

### 4-C. 열람 실패·제외 기록

| 대상 | 실제 결과 | 처리 |
|---|---|---|
| Calameo 문서 | 502 오류 | 내용 판정 안 함. T1·W1 등 대체 |
| Ulifestyle 규칙 글 | 글 본문 없이 게시 UI·이미지 중심의 짧은 응답 | 본문 정독으로 세지 않음 |
| TheGioiPoker 입문 글 | 403 | 내용 판정 안 함 |
| Hunter Hold’em 입문 | timeout | V1·T1 등 대체 |
| ICCCFTU flop/turn/river | timeout | W1·T1로 대체 |
| Natural8 `poker-actions` | 지역 제한 안내, 해당 본문 확보 실패 | W3·E2로 대체 |
| PokerQz showdown | 접근 불가 | W5·P2·E1로 대체 |
| `texas holdem`의 Google 중계 1·2 | 도구에서 접근 불가 | 목적지 추정 안 함 |
| VDict poker·ante up | 도구에서 접근 불가 | 사전 본문의 의미 범위 판정 안 함 |
| LopNgoaiNgu LESSON 225 | 접근 불가 | 영어 수업이라는 원자료 유형만 기록 |
| AI Hay 입문 | 실제 페이지는 열림, AI가 여러 출처를 묶은 답변 | 독립 해설·규칙 사실 근거에서 제외 |
| Wikipoker `tag/cach-choi` | 실제 페이지는 글 목록 | 단일 해설 1편으로 세지 않음 |
| GGPoker discipline | 실제 본문은 규율·심리 | 게임 규칙 설명과 구분 |
| Natural8 better-at-poker | 본문 열람 가능 | 전략 글. actions URL의 실패를 도메인 전체 실패로 확대하지 않음 |

### 4-D. §13 오류: 축어 근거와 직접 검산

오류의 강도는 **확정 오류**, **조건 누락·내부 충돌**, **판정 보류**로 나눴다. 예시 하나가 맞다고 글 전체를 승인하지 않았고, 표현 하나가 불명확하다고 글 전체를 틀렸다고 하지 않았다.

| 원문·분류 | 짧은 축어 근거 | 직접 검산·정답 | 편집상 조치 |
|---|---|---|---|
| **T1 — 확정, 카드 수** | `1 lá trên tay và 5 là chung` | 1+5=6장이다. Hold’em의 최종 핸드는 5장. 가능한 홀카드·보드 조합은 **0+5, 1+4, 2+3**이다. 7장 중 5장 조합은 C(7,5)=21 | 7장 전체와 최종 5장을 색으로 분리한 예시 |
| **T1 — 확정, all-in 지분** | `tính tới thời điểm tất tay` | 올인한 ‘시점’의 팟으로 지분이 고정되지 않는다. A가 100 올인한 뒤 B·C가 각각 100 콜하면 A도 그 **300**을 놓고 경쟁한다 | 시간 기준 대신 각 플레이어의 누적 기여액 기준으로 설명 |
| **D1 — 확정, 초과 칩** | `Số chip dư sẽ tạo thành side pot` | FAQ는 두 사람의 다른 스택을 묻는다. 다른 기여금이 없는 200 대 100이면 **200이 경합 팟, 매칭되지 않은 100은 반환**이다. 초과분을 겨룰 상대가 없어 side pot이 아님 | HU 반환 예시와 3인 side pot을 나란히 배치 |
| **P1 — FAQ 일반화 오류** | `Không, họ chỉ tranh main pot` | 모든 all-in 플레이어가 main pot만 겨루는 것은 아니다. A100/B200/C500/D500이면 B도 올인이면서 **side pot 1에 참가**한다 | “가장 짧은 all-in 스택”과 “all-in 상태 전체”를 구별 |
| **P2 — 확정, 플러시 강도** | `Bạn có thùng, nhưng là thùng nhỏ nhất có thể` | 네 장 동일 수트 보드에서 그 수트 한 장을 가졌다고 최저 플러시가 되지 않는다. 보드 K♠Q♠8♠2♠J♦, 홀카드 A♠7♥이면 **A♠K♠Q♠8♠2♠**의 A-high 플러시 | 보드·홀카드가 모두 명시된 반례로 교정 |
| **W1 — 확정, 문단 순번** | `vòng cược thứ 4` | Turn을 설명한 문단에서 다음 River로 넘어가는 대목이다. 베팅 라운드는 preflop1→flop2→turn3→river4 | 오기 한 곳으로 기록. 글 전체가 라운드 수를 모른다고 확대하지 않음 |
| **B1 — 내부 표현 충돌** | `trong mỗi vòng cược` | BB의 강제 납부를 매 베팅 라운드처럼 읽히게 한다. 표준 Hold’em에서는 핸드 시작 전에 낸다. 후반 설명은 그 구조와 맞음 | 첫 정의에서 ‘각 핸드’와 ‘베팅 라운드’ 구별 |
| **W3 — 조건 누락·내부 충돌** | `tất nhiên là bạn được quyền Check` | 첫 행동자라고 항상 체크할 수는 없다. 프리플롭 UTG는 live BB를 상대한다. 이 글 뒤쪽에는 UTG가 체크할 수 없다는 올바른 설명도 있음 | “맞춰야 할 베팅이 없을 때”를 정의에 넣음 |
| **W5 — 규정 범위 누락** | `bạn có quyền yêu cầu xem bài họ đã muck` | 열람권은 규정·상황에 따라 다르다. 현행 TDA는 자신의 카드를 보유·공개한 river caller의 마지막 공격자 열람권과 그 밖의 TD 재량을 구분 | 모든 카지노에서 틀렸다고 단정하지 않음. 적용 규정 명시 |

위 오류 판정은 각각 [T1](https://thuthuatchoi.com/huong-dan-cach-choi-poker-xi-to-co-ban.html), [D1](https://dezhoupuke.org/vi/term/all-in), [P1](https://pokervietnam.net/thuat-ngu-poker/side-pot/), [P2](https://pokervietnam.net/cach-choi-poker/showdown/), [W1](https://wikipoker.net/luat-choi-poker/), [B1](https://wikipoker.net/big-blind-poker/), [W3](https://wikipoker.net/cac-hanh-dong-tren-ban-poker/), [W5](https://wikipoker.net/show-hand-la-gi/)의 직접 열람 본문에 근거한다.

#### 검산한 정상 사례

| 사례 | 계산·판정 |
|---|---|
| W3의 1BB→2.5BB open 이후 min-raise | 직전 인상분 1.5BB, 다음 최소 총액 **4BB**. 맞음 |
| W3의 blind 1k/2k, A10k, B콜10k, C올인15k | 직전 full raise 증가분 8k, C의 증가는 5k. 이미 행동한 A·B에게 full raise 재오픈이 되지 않는 예시는 맞음 |
| W4의 6명 ante10, SB5, BB10 | 6×10+5+10=**75**. 맞음 |
| P1의 30·90·90 | main 30×3=**90**, side 60×2=**120**. 맞음 |
| B1의 현재 pot100, 추가 call50 | pot odds 100:50=**2:1**, 필요한 지분 50/150=**33.33%**. 현재 팟에 상대 베팅이 포함된 예시이므로 상대 베팅을 다시 더하지 않음 |
| P2의 보드 A♠K♦9♣6♥2♠, A♥Q♣ 대 A♣J♦ | AAKQ9 대 AAKJ9. Q 키커 승리. 맞음 |
| P2의 족보 표 9행 | Royal Flush를 Straight Flush 범주에 포함한 분류. **9행이라는 이유로 족보 누락 오류가 아님** |
| T1의 Royal Flush·Straight Flush 명칭 차이 | 현지 표기 차이는 있으나 해당 순서가 뒤집혔다고 판정하지 않음 |

#### 규정의 현행성

직접 확인한 Poker TDA 공식 페이지는 **2026 Rules, Version 1.0, 2026-09-07**이다. 현재 우리 글의 2024판 인용을 업데이트할 때 다음 조문을 다시 대조할 수 있다.

- §17: all-in이 있고 모든 베팅이 끝났을 때 살아 있는 핸드 공개.
- §18: non-all-in showdown 순서.
- §19: 다른 사람의 핸드를 보도록 요구할 권리.
- §45: 최소 raise 금액.
- §46: 무언 고액 칩 한 장.
- §49: 재오픈.
- §50: raise 횟수 제한.

기존 글이 2024판 번호를 정확히 인용했다면 **번호가 달라졌다는 이유만으로 오인용이라고 하지 않는다.** 판본과 내용을 함께 갱신해야 한다. [Poker TDA 공식 규정](https://www.pokertda.com/view-poker-tda-rules/)

### 4-E. 번역어 사용 빈도

고정 표본은 **W1·W2·W3·W4·W5·B1·T1·V1·P1·P2·D1·G1, 12편**이다. U1·W6·영어 2편은 이 집계에서 제외했다.

방법: 본문 구간에서 메뉴·목차·푸터를 제외하고 NFC 정규화·소문자화를 적용했다. 헤딩과 본문 캡션은 포함하고 링크 마커는 제거했다. 유니코드 문자 경계로 검색했다. `thùng`·`sảnh`는 합성어 내부 사용도 포함한다.

| 표기 | 총 출현 | 사용 문서/12 | 해석 |
|---|---:|---:|---|
| thùng | 17 | 5 | 족보를 설명한 표본에서 반복 |
| sảnh | 24 | 5 | 합성어 포함. 단독 족보명 빈도와 동일하지 않음 |
| cù lũ | 6 | 5 | 여러 해설에서 일치 |
| sám cô | 2 | 2 | W2·P2에서 관측 |
| sam | 2 | 1 | T1의 무성조 표기 |
| xám | 0 | 0 | 이 표본에서 관측되지 않음 |
| sảnh rồng | 0 | 0 | Royal Flush의 정본으로 채택할 근거 없음 |
| tố | 39 | 7 | `xì tố`, 일반어 `yếu tố` 등이 포함될 수 있음 |
| theo | 68 | 11 | 일반 동사 사용도 포함. 전부 Call 번역이라고 볼 수 없음 |
| bỏ bài | 16 | 6 | Fold의 설명어로 관측 |
| mù | 19 | 6 | 일부는 일반 의미. G1의 1회는 눈먼 다람쥐 비유 |
| xì tố | 11 | 4 | 포커 별칭·게임 구분 문맥이 섞임 |
| blind | 110 | 8 | 차용어가 강하게 유지됨 |
| check | 46 | 10 | 차용어 중심 |
| call | 69 | 9 | 차용어 중심 |
| raise | 96 | 10 | W3의 규칙 설명에서 특히 반복 |
| fold | 54 | 11 | 베트남어 풀이와 병기되는 차용어 |

핵심 표본별 대조:

| 표본 | blind / mù | check / call / raise / fold | 현지화 시사점 |
|---|---:|---:|---|
| W3 액션 | 2 / 1 | 22 / 29 / 58 / 21 | 액션 이름은 영어를 유지하고 규칙을 베트남어로 설명 |
| W4 stack·blind·ante | 37 / 3 | 0 / 0 / 0 / 0 | `mù`만으로 제목을 구성할 근거가 약함 |
| B1 big blind | 37 / 2 | 0 / 6 / 4 / 4 | 검색·본문 모두 Big Blind 중심 |
| T1 입문 | 6 / 11 | 4 / 3 / 2 / 3 | 베트남어 풀이 비중이 높은 다른 스타일도 존재 |
| V1 입문 | 11 / 0 | 2 / 2 / 2 / 2 | 차용어와 변형 게임 구별을 함께 사용 |

이 빈도는 **12편의 텍스트 빈도**이며 베트남 전체 커뮤니티의 말하기 빈도, 선호도 조사, 검색량이 아니다.

편집 권고는 다음과 같다.

- `Check`, `Call (theo)`, `Raise (tố)`, `Fold (bỏ bài)`처럼 검색·테이블에서 접하는 이름을 먼저 보여준다.
- `Blind`, `Small Blind`, `Big Blind`를 제목·첫 정의·핵심 H2에 사용하고 `mù`는 풀이로 병기한다.
- `Xì Tố`를 Hold’em과 무조건 같은 게임으로 정의하지 않는다. 독자가 해당 표현으로 들어와도 이 글의 규칙 범위가 Texas Hold’em임을 밝힌다.
- `sám cô`, `sam`, 기존 vi의 `Xám`, Royal 계열 명칭은 L-B로 넘긴다. **`sảnh rồng`이 이 표본에 없다는 사실만으로 다른 게임에서의 뜻까지 판정하지 않는다.**

## 5. 공통 강점·약점과 차별화

| 축 | 직접 읽은 글의 강점 | 확인된 약점·공백 | 우리 글의 차별화 재료 |
|---|---|---|---|
| 초보 진입 | 짧은 정의→액션→라운드→족보 구조가 익숙함 | 포커 전체와 Hold’em, Xì Tố·다른 변형의 구분이 일정하지 않음 | 첫 화면에서 게임 범위와 2장+5장 구조 명시 |
| 진행 설명 | flop·turn·river별 설명·그림이 있음 | 라운드 순번 오기, HU 예외 생략, 진행 글에 전략이 길게 섞임 | 누가 먼저 행동하는지까지 포함한 한 핸드 진행표 |
| 액션 | 영어 액션명이 자연스럽게 유지됨 | “첫 행동자면 체크 가능”처럼 조건이 빠진 정의 | 맞춰야 할 베팅 유무를 기준으로 한 허용 액션 표 |
| all-in | 단순 3인 main/side pot 예시는 많음 | 모든 all-in을 최단 스택처럼 설명, HU 초과분 혼동 | 2인 반환→3인 side pot→4인 다중 pot 순서 |
| showdown | 오픈 순서·muck·예절을 함께 다룸 | cash·tournament 규칙과 하우스 룰이 섞임 | 적용 판본, all-in 여부, 베팅 완료 여부를 분리 |
| 족보·확률 | 입문 글에 기본 족보·예시가 있음 | 숫자나 카드가 없는 단정은 검산하기 어려움 | 7장 중 최종 5장을 직접 표시하고 산식 제공 |
| 현지어 | 차용어와 베트남어 풀이를 혼용 | 직역 중심 제목은 실제 질문 표현과 어긋날 수 있음 | 차용어 우선·베트남어 설명 병기 |
| 경험 증거 | 손패·chip 예시는 다수 | 저자 소개·1인칭 문장만으로 실전 경험을 검증할 수 없음 | 실제 제공 가능한 경험만 사용. 하노이·호치민 일화 창작 금지 |

검색 화면에서 AIO가 많다는 사실만으로 특정 답변 길이가 순위·스니펫을 보장한다고 주장하지 않는다. 짧은 직답은 독자 이해를 위한 구조 처방이다.

## 6. 기존 vi 및 EN 마스터 대조

아래 `H1`은 제공된 `.ts`의 **`title` 필드**를 뜻한다. 실제 발행 페이지의 DOM·렌더링 H1을 검사한 것은 아니다. H2와 FAQ는 소스에서 직접 추출했다.

### 6-A. `texas-holdem-rules-for-beginners`

**현재 카피**

- H1: `Cách chơi Texas Hold'em cho người mới — luật, chip, thứ hạng bài và chiến thuật đầu tiên`
- seoTitle: `Cách chơi Texas Hold'em cho người mới — luật, chip & bảng tóm tắt`
- desc: `Chưa từng chơi poker? Học cách chơi Texas Hold'em từng bước: mù, chia chip, thứ hạng bài và bảng tóm tắt in được — người mới hoàn toàn cũng theo kịp.`
- vi updated: 2026-10-04.

**현재 H2, 16개**

`Luật cơ bản của Texas Hold'em` · `Cách chơi Texas Hold'em — tóm tắt trình tự cho người mới` · `Texas Hold'em chơi được mấy người?` · `Ai đi trước trong Texas Hold'em?` · `Bắt đầu Texas Hold'em với bao nhiêu chip?` · `Bắt đầu Texas Hold'em với bao nhiêu tiền?` · `No-Limit, Limit hay Pot-Limit? Bạn đang chơi loại Texas Hold'em nào?` · `Cách chia bài Texas Hold'em` · `Vị trí trong Texas Hold'em — vì sao chỗ ngồi thay đổi tất cả` · `Chiến thuật Texas Hold'em cho người mới` · `Pot odds — khái niệm toán duy nhất giúp người mới đỡ mất tiền` · `Bảng tóm tắt luật Texas Hold'em in được` · `Những lỗi thường gặp của người mới` · `Câu hỏi thường gặp` · `Chốt lại` · `Bài viết liên quan`

**현재 FAQ, 12개**

`Chơi Texas Hold'em từng bước như thế nào?` · `Ai đi trước trong Texas Hold'em?` · `Bắt đầu Texas Hold'em với bao nhiêu chip?` · `Bắt đầu Texas Hold'em với bao nhiêu tiền?` · `Texas Hold'em có Sảnh nhỏ không?` · `Texas Hold'em có bao nhiêu tay bài khởi đầu?` · `Luật Texas Hold'em cho người mới hoàn toàn — phiên bản đơn giản nhất là gì?` · `Luật Texas Hold'em cho người mới — mù nghĩa là gì?` · `Phiên bản rút gọn của luật Texas Hold'em là gì?` · `Cần bao nhiêu người để chơi Texas Hold'em?` · `No-limit nghĩa là gì trong Texas Hold'em?` · `Một ván Texas Hold'em kéo dài bao lâu?`

**이미 이기는 부분**

- 0·1·2장 홀카드 사용 표, 7장 중 베스트5, 1,326개 조합과 169개 시작 핸드 유형을 다룬다.
- chip 배분 예시는 20×1+16×5+4×25=200으로 맞다. 실물 칩은 40개, 총 액면은 200이라는 구분이 가능하다.
- 족보 확률표는 7장 중 베스트5 기준을 명시한다. 이를 5장 포커 확률표로 오인해 오류라고 하면 안 된다.
- `/vi/hand-chart`, `/vi/calculator` 링크가 이미 있다. “도구 링크 전무”가 아니다.
- PDF는 본문에서 영어 자료로 안내한다. 베트남어 PDF가 있다고 표현하면 안 된다.

**검색 의도 공백·정확성**

- 포커의 뜻을 묻는 사람에게 첫 답이 Hold’em 진행으로 바로 시작한다. `poker là gì`와 `cách chơi poker`를 연결하는 범위 설명이 필요하다.
- `2 lá`는 ‘홀카드가 2장’이라는 뜻과 ‘최종 비교도 2장’이라는 오해를 분리해야 한다.
- **EN→VI 누락:** EN은 flop에서 ×4를 쓸 때 river까지 추가 베팅 없이 두 장을 본다는 조건을 명시한다. VI 표에는 그 조건이 빠졌고, 뒤 문장이 이를 즉시 call 수익성 판단으로 연결한다.
- 깨끗한 9 outs의 드로 완성 확률은 flop→다음 한 장 **9/47=19.15%**, flop→river 두 장 **1−C(38,2)/C(47,2)=34.97%**, turn→river **9/46=19.57%**다. 36%·18%는 근사법 자체의 오류가 아니라 **사용 조건과 적중 확률·승률 구분**이 문제다.
- 실머니 시작 금액 H2·FAQ를 검색 훅으로 강화하지 않는다. 학습용 칩 단위로 정리한다.

### 6-B. `holdem-game-order`

**현재 카피**

- H1: `Cách Chơi Poker Texas Hold'em: Trình Tự Chơi Từ Mù Đến Lật Bài`
- seoTitle: `Không Biết Khi Nào Cược? — Trình Tự Chơi Texas Hold'em`
- desc: `Đơ người ở ván Hold'em vì 'tới lượt ai?' Đây là toàn bộ trình tự chơi — preflop, flop, turn, river, lật bài — kèm một ván bài thật đi từng bước.`
- vi updated: 2026-09-21.

**현재 H2, 17개**

`Texas Hold'em Là Gì?` · `Trước Khi Chia Bài: Nút Dealer và Mù` · `Giai Đoạn 1 — Preflop: Quyết Định Đầu Tiên Định Ra Nhịp Ván` · `Giai Đoạn 2 — Flop: Ba Lá Bài Chung` · `Giai Đoạn 3 — Turn: Bức Tranh Rõ Nét Hơn` · `Giai Đoạn 4 — River: Lá Cuối Cùng, Quyết Định Cuối Cùng` · `Giai Đoạn 5 — Lật Bài: Bộ 5 Lá Tốt Nhất Thắng` · `Ai Ra Quyết Định Trước Ở Mỗi Vòng?` · `Toàn Bộ Trình Tự Trong Một Cái Nhìn` · `Theo Trọn Một Ván, Từng Bước Một` · `7 Nước Cược, Giải Thích Đầy Đủ` · `10 Thứ Hạng Bài Poker Bạn Phải Biết` · `5 Sai Lầm Mọi Người Mới Phải Tránh` · `Cách Bắt Đầu Chơi Ngay Hôm Nay` · `FAQ` · `3 Điều Cần Nhớ` · `Bài Viết Liên Quan`

**현재 FAQ, 7개**

`Trình tự chơi chính xác trong Texas Hold'em là gì?` · `Preflop và flop khác nhau thế nào?` · `Check và theo khác nhau thế nào?` · `Ở lật bài tôi có bắt buộc dùng cả hai lá bài tẩy không?` · `Tỷ lệ pot (pot odds) là gì?` · `Khi nào tôi nên all-in?` · `Một ván có bao nhiêu vòng cược?`

**이미 이기는 부분**

- 한 핸드를 처음부터 끝까지 따라가며 pot을 누적한다.
- 직접 검산한 pot은 **12,000→28,000→58,000→198,000**이다.
- 보드 K♦9♠3♥2♣A♥에서 AK는 AAKK9, 99는 999AK다. **99의 세트 승리가 맞다.**
- 단계 5 showdown을 베팅 라운드 5개라고 혼동하지 않는다. TLDR는 네 번의 베팅을 명시한다.

**EN 대조·검색 공백**

EN FAQ 11개 중 다음 4개가 VI FAQ에서 빠졌다.

- `Who goes first in poker?`
- `Who bets first after the flop?`
- `Who shows their cards first at showdown?`
- `Why does the dealer burn a card, and how many are burned?`

행동 순서는 VI 본문에 이미 있으므로 ‘내용 전체 누락’은 아니다. 검색 질문의 입구가 FAQ에서 사라진 것이다. burn-card 질문은 실제 영어 PAA와도 연결된다.

입문·액션·족보를 길게 반복하는 H2는 축약 후 형제 글로 위임할 여지가 있다. 이 글의 중심은 **진행 순서·각 단계 카드 수·행동 순서**다.

### 6-C. `holdem-betting-actions`

**현재 카피**

- H1: `Các hành động cược trong Texas Hold'em: Check, Theo, Tố, Bỏ Bài`
- seoTitle: `Check, theo hay bỏ bài? — Các hành động cược trong poker`
- desc: `Đến lượt bạn mà đầu óc trống rỗng? Tìm hiểu check, theo (call), tố (raise) và bỏ bài (fold) là gì, luật tố tối thiểu và bạn được tố lại bao nhiêu lần.`
- vi updated: 2026-09-07.

**현재 H2, 12개**

`5 hành động cược trong Texas Hold'em là gì?` · `Check trong poker là gì?` · `Khi nào bạn được check trong poker?` · `Call (theo) trong poker là gì? Check vs call` · `Fold (bỏ bài) trong poker là gì — bạn có thể bỏ bài bất cứ lúc nào không?` · `Min-raise là gì? Luật cược và tố trong Texas Hold'em` · `Được tố bao nhiêu lần trong poker?` · `All-in nghĩa là gì?` · `Biết các hành động là bước một — chọn hành động nào mới là chiến thuật` · `Những lỗi cược ở bàn live tôi thấy mỗi tuần` · `Câu hỏi thường gặp` · `Bài viết liên quan`

**현재 FAQ, 8개**

`Có được tố sau khi đã check trong poker không?` · `Có thể tự tố khoản cược của chính mình không?` · `Được tố bao nhiêu lần trong Texas Hold'em?` · `Có được bỏ bài trước lượt không?` · `Có được check ở pre-flop không?` · `Có được tố sau khi có người all-in không?` · `String bet trong poker là gì?` · `Limp trong poker nghĩa là gì?`

**이미 이기는 부분**

- check와 call, BB의 프리플롭 체크, out-of-turn fold, string bet, 무언 고액 칩을 다룬다.
- bet6 이후 최소 raise-to12, BB2에서 open6 이후 최소 raise-to10 계산이 맞다.
- 자동완성에 실제로 나온 질문 다수가 이미 본문 H2와 거의 일치한다.

**공백**

- H1의 액션 이름이 `Theo, Tố, Bỏ Bài` 중심이다. 검색 표현 `Call, Raise, Fold`를 명시적으로 병기할 근거가 있다.
- 독립적인 `raise trong poker là gì` 정의가 min-raise 설명 속에 묻힌다.
- 액션의 뜻·가능 여부와 “어떤 선택이 최적 전략인가”를 구분할 필요가 있다.
- EN의 H2·FAQ 구조를 대체로 유지한다. 전면 재작성보다 용어와 정의 순서를 고치는 편이 적합하다.
- WSOP·TDA 조문을 다시 쓸 때 판본을 명시한다. 판본 확인 없이 기존 번호 자체를 오류로 선언하지 않는다.

### 6-D. `holdem-blind-meaning`

**현재 카피**

- H1: `Mù trong poker là gì? Mù nhỏ và mù lớn, giải thích dễ hiểu`
- seoTitle: `Chưa thấy bài đã phải cược? — Mù nhỏ và mù lớn trong poker`
- desc: `Hai người chơi phải bỏ tiền trước khi bài được chia — vì sao? Mù nhỏ và mù lớn là gì, ai đặt, mức cược SB/BB, big blind ante và luật mù khi chơi heads-up.`
- vi updated: 2026-07-13.

**현재 H2, 12개**

`Mù trong poker là gì — và vì sao nó tồn tại?` · `Mù nhỏ là gì?` · `Mù lớn là gì?` · `Luật mù nhỏ và mù lớn: ai đặt, và khi nào` · `Mù to cỡ nào? Mức cược trong cash game và giải đấu` · `Big blind ante là gì? (Và cả straddle)` · `Ai đặt mù khi chơi heads-up?` · `Lỡ lượt mù thì sao? (Mù chết)` · `Chơi từ hai ghế mù thế nào — phiên bản 30 giây` · `Câu hỏi thường gặp` · `Những điều cần nhớ` · `Bài viết liên quan`

**현재 FAQ, 8개**

`Vì sao phải trả mù trước khi nhìn bài?` · `Mù lớn hay mù nhỏ hành động trước?` · `Mù nhỏ có luôn bằng đúng một nửa mù lớn không?` · `Nếu không ai tố, mù lớn có được check không?` · `Đã đặt mù rồi có được bỏ bài không?` · `Ai đặt mù khi chơi heads-up?` · `Lỡ lượt mù thì chuyện gì xảy ra?` · `"Mù lớn" có giống với "mù" nói chung không?`

**이미 이기는 부분**

- HU에서 BTN=SB, 프리플롭 먼저·포스트플롭 나중이라는 예외를 설명한다.
- BBA와 dead blind를 이미 다룬다. 경쟁 글에 없다는 이유로 새 내용인 것처럼 중복 추가할 필요가 없다.
- BB에서 open2.5BB를 상대하고 SB가 폴드한 예시의 추가 call1.5, 현재 pot4, 필요 지분 1.5/5.5=**27.27%**는 산술적으로 맞다. 이것이 postflop 수익성을 자동 보장한다는 뜻은 아니다.

**공백**

- **가장 분명한 현지화 불일치:** 자동완성과 원문 사용은 `blind`, `big blind`, `small blind`가 중심인데 H1·seoTitle·주요 H2는 `mù` 중심이다.
- 개인 ante와 BBA의 차이를 앞에서 정의하면 좋다.
- BBA와 straddle을 한 H2에 묶기보다 straddle 상세는 L-F로 위임한다.
- EN 구조는 대부분 유지한다. 내용 확장보다 명명·배열 개선 우선이다.

### 6-E. `holdem-all-in-rules`

**현재 카피**

- H1: `Luật all-in trong Texas Hold'em: pot phụ (side pot), tố lại và showdown`
- seoTitle: `All-in xong không biết mình thắng gì? — Luật all-in & side pot`
- desc: `Đẩy hết chip vào giữa mà không rõ mình thắng được gì? Luật all-in Texas Hold'em: table stakes, pot chính, pot phụ (side pot), quyền tố lại và thứ tự showdown.`
- vi updated: 2026-09-22.

**현재 H2, 8개**

`All-in trong Texas Hold'em nghĩa là gì?` · `Cách tuyên bố all-in` · `Side pot trong poker hoạt động thế nào? (Vì sao người all-in bị giới hạn)` · `All-in có mở lại vòng cược không? — Luật mà hầu hết người chơi hiểu sai` · `Luật showdown khi có all-in` · `All-in sai thì sao? — 5 sai lầm cần tránh` · `Câu hỏi thường gặp` · `Bài viết liên quan`

**현재 FAQ, 7개**

`Có thể all-in với số chip ít hơn big blind không?` · `Thắng cú all-in nhưng thua pot phụ thì sao?` · `All-in có bắt buộc phải lật bài không?` · `Có được "run it twice" trong một cú all-in poker không?` · `Luật "table stakes" chính xác là gì?` · `Hai người all-in với số chip khác nhau, ai lật bài trước?` · `Luật all-in ở giải đấu và cash game có khác nhau không?`

**이미 이기는 부분**

- A100/B200/C500/D500 표는 main400, side1 300, side2 600, 합계 **1,300**으로 맞다.
- 여러 short all-in의 누적 재오픈을 다룬다. A10→B14→C21이면 A는 11을 더 상대하므로 full raise10 이상을 맞는다. 중간에14를 낸 플레이어는 증가분7만 상대하므로 상황이 다르다.
- 단순 3인 사례만 있는 경쟁 글보다 구체적이다.

**우선 교정**

현 VI 문장:

> `dealer sẽ chỉ tính đúng giá trị chip đó, chứ không phải cả stack của bạn`

EN은 이를 **베팅을 상대하면 call, 베팅이 없으면 그 칩 액면의 bet**으로 구분한다. 예컨대 bet10에 말없이 100칩 한 장을 내면 일반적인 overchip 규칙상 100 bet가 아니라 10 call이다. 현행 TDA §46에서도 확인된다. [TDA 규정](https://www.pokertda.com/view-poker-tda-rules/)

또한 다음 두 부분을 고친다.

- `Sai lầm 1: nghĩ người all-in có thể thắng pot phụ`처럼 모든 all-in 플레이어의 side pot 권리를 부정하는 일반화는 **자체 4인 표와 충돌**한다. 최단 스택 A에 한정하거나 각 pot의 기여액으로 설명해야 한다.
- **매칭되지 않은 초과 칩 반환**을 별도 예시로 추가한다. 다른 플레이어가 기여했던 pot을 이기는 것과 자기 미매칭 칩을 돌려받는 것은 다르다.

### 6-F. `holdem-showdown-rules`

**현재 카피**

- H1: `Luật lật bài (showdown) trong Texas Hold'em: ai lật trước, muck và slow roll`
- seoTitle: `Ai lật bài trước? Luật showdown & muck trong Poker`
- desc: `Ai phải lật bài trước khi showdown? Có được muck không lật? Luật showdown Hold'em — người cược cuối, bài tự nói, slow roll và all-in, giải thích rõ ràng.`
- vi updated: 2026-10-04.

**현재 H2, 10개**

`Ai phải lật bài trước khi showdown?` · `Có được bỏ bài úp (muck) không cần lật khi showdown không?` · `Thứ tự lật bài khi tất cả đều check ở river` · `Luật showdown khi all-in — người all-in có phải lật trước không?` · `Luật "cards speak" (bài tự nói) là gì?` · `Slow roll trong poker là gì?` · `Thắng mà không cần showdown thì có phải lật bài tẩy không?` · `Văn hóa ứng xử khi showdown — những lỗi người mới hay mắc` · `Câu hỏi thường gặp` · `Bài viết liên quan`

**현재 FAQ, 7개**

`Ai lật bài trước khi showdown trong poker?` · `Bị theo (call) khi showdown thì có bắt buộc lật bài không?` · `Có được muck khi showdown mà không lật bài không?` · `Slow roll trong poker là gì và vì sao bị ghét?` · `Trong tình huống all-in, ai lật bài trước?` · `"Cards speak" (bài tự nói) nghĩa là gì trong poker?` · `Thắng mà không có showdown thì có phải lật bài không?`

**이미 이기는 부분**

- tournament non-all-in, all-in 후 베팅 완료, cash house rules를 구분한다.
- river caller의 요청 열람권을 자기 카드 보유·공개 조건과 함께 설명한다.
- 비공개로 내려놓은 카드가 무조건 즉시 죽는다는 식으로 단정하지 않고, 식별·회수 가능성과 floor 판단을 설명한다.
- 이 부분은 경쟁 글의 포괄적인 muck 설명보다 정밀하다.

**공백**

- 첫 H2가 곧바로 ‘누가 먼저’다. `showdown`의 짧은 정의를 앞에 두면 보충 PAA의 입구를 받을 수 있다.
- 기존 2024판 인용은 2026판과 대조하되, 최신 EN·VI 내용을 문장 단위로 비교해야 한다. 날짜만 보고 한쪽을 무조건 복사하지 않는다.
- slow roll의 전략·예절 설명이 정의·공개 순서보다 앞서지 않도록 유지한다.

### 6-G. 도구가 받을 의도

| 의도 | 경계·현재 확인 수준 |
|---|---|
| 카드 승률·드로 확률 계산 | `/vi/calculator`로 연결 가능. 이번에는 제공 소스의 링크 존재를 확인했으며 실제 도구 기능·화면을 재조사하지 않음 |
| 위치별 시작 핸드 선택 | `/vi/hand-chart` 역할. 입문 글의 시작 핸드 문단에서 문맥 링크를 앞당길 여지 |
| 베팅 가능 여부·min-raise·muck 권리 | 규칙 글이 설명해야 할 의도. 계산기로 위임할 문제가 아님 |
| 대회 일정 | `/vi/tournaments` 경계. 이번 L-A에서 일정·장소 검색 조준 안 함 |
| 용어 검색 | 브리프상 **`/vi/glossary` 도구 없음**. 존재하는 도구인 것처럼 링크 금지 |
| solver | 이번 규칙 설명에 필요한 솔버 수치를 만들지 않음. 베스트5·팟 산술·규정 예시로 충분 |

## 7. 글별 처방 — 레인 A 브리프 재료

아래는 방향·질문·구조 후보이며 **최종 seoTitle·desc가 아니다.**

근거 표기: **AC**=제공 자동완성, **PAA-R**=제공 PAA, **PAA-S**=보충 브라우저 PAA, **편집**=정독·EN 대조에서 도출한 후보. 편집 후보를 관측 질문으로 꾸미지 않았다.

### 7-A. beginners

| 항목 | 처방 |
|---|---|
| 주력어 | `luật poker`, `cách chơi poker`, `poker là gì`, `luật chơi poker`; Hold’em 범위를 함께 명시 |
| 훅 재료 | 두 장을 받고도 최종 승부는 다섯 장, 30초 규칙, 첫 핸드를 따라가기 |
| H2 후보 | **AC** `poker là gì cách chơi`를 정의→플레이 연결 재료로 사용; **AC** `cách chơi poker đơn giản`; **AC** `cách chơi poker 2 lá`; **편집** 기존 배분·인원·chip 표는 유지 |
| FAQ 후보 | **PAA-R** `Làm cách nào để chơi poker dễ hiểu?` → 한 핸드의 짧은 단계; `Luật chơi poker là gì?` → 게임 범위를 밝힌 2+5·베스트5·네 라운드; `Thùng trong poker là gì?` → 짧은 정의 후 L-B |
| 차별화 | 0+5/1+4/2+3 표, 검산된 chip 표, 조건을 명시한 드로 확률 |
| 위임 | 전체 족보→L-B, 상세 진행→game-order, 액션→betting-actions, 시작 핸드→hand-chart |
| 우선순위 | **트래픽 1순위, 정확성 P0**. 유효한 큰 수요와 정의 입구 공백 |

`Poker là môn thể thao gì?`는 관측 질문이지만 법률·행정상 분류를 입문 글에서 단정하는 답은 추가하지 않는다.

### 7-B. game-order

| 항목 | 처방 |
|---|---|
| 주력어 | `cách chia bài poker`, `flop turn river`, `preflop flop turn river` |
| 훅 재료 | 지금 어떤 단계인지, 다음 카드는 몇 장인지, 누가 먼저인지 |
| H2 후보 | **AC** `flop turn river là gì`; **AC** `flop trong poker là gì`; **PAA-R** `Làm cách nào để chia bài trong poker?`; **편집** 각 라운드의 행동 순서·HU 예외 |
| FAQ 후보 | **PAA-R** `Chia bài poker gọi là gì?` → dealer와 button 역할 구별; `Do you burn a card before the flop turns and river?` → 통상적인 live Hold’em 절차를 설명. 게시 시 베트남어 번역은 원문 PAA와 구분 |
| EN 복원 후보 | 선행 행동자·flop 이후 선행자·showdown 선행자·burn-card FAQ |
| 차별화 | 기존 한 핸드 예시와 12k→28k→58k→198k pot 검산 유지 |
| 위임 | 액션 7개 상세→betting-actions, 족보 10개 상세→L-B, 공개 권리→showdown |
| 우선순위 | **트래픽 2순위**. 입문보다 수요는 작지만 배분·진행 질문이 명료 |

### 7-C. betting-actions

| 항목 | 처방 |
|---|---|
| 주력어 | `check trong poker là gì`, `call trong poker là gì`, `raise trong poker là gì`, `fold trong poker là gì`, `luật raise trong poker` |
| 훅 재료 | 액션 뜻과 지금 허용되는 행동을 한눈에 구분 |
| H2 후보 | **AC** 위 네 정의 질문; **AC** `khi nào được check trong poker`; **AC** `cách tính min raise trong poker` |
| FAQ 후보 | **PAA-S** `Fold poker là gì?` → 현재 pot에 대한 권리를 포기하는 액션의 정의. 기존 체크 후 raise·BB option·out-of-turn FAQ는 유지하되 PAA 출처로 오표기하지 않음 |
| 차별화 | 미납 베팅 없음/있음 표, raise ‘추가분’과 ‘총액’ 구별, 칩 한 장 사례 |
| 위임 | 언제 폴드하는 게 좋은가→L-D, check-raise 전략→관련 전략/GTO 글, 재오픈 상세→all-in |
| 우선순위 | **트래픽 3순위**. 이미 구조가 좋아 정의·표기 보완 중심 |

원래 `check là gì`, `raise là gì`의 PAA는 영어 학습 질문이다. 이를 포커 FAQ 수요로 세지 않는다.

### 7-D. blind-meaning

| 항목 | 처방 |
|---|---|
| 주력어 | `blind trong poker là gì`, `big blind là gì`, `small blind là gì`, `ante poker` |
| 훅 재료 | 카드를 보기 전 누가 내는가, blind와 ante가 어떻게 다른가 |
| H2 후보 | **AC** `blind trong poker là gì`; **AC** `big blind trong poker là gì`; **AC** `ante trong poker là gì`; **편집** Small Blind 정의와 HU 순서 |
| FAQ 후보 | **PAA-S** `Blind có nghĩa là gì?`는 일반어 혼입이 있어 낮은 우선순위. 본문 문맥을 포커로 한정할 때만 짧게 사용 |
| 차별화 | 개인 ante/BBA 비교, HU에서 BTN=SB 도식, 기존 dead blind 설명 |
| 위임 | blind에서의 전략→positions·position-play, straddle 상세→L-F |
| 우선순위 | **수정 효율 1순위 / 트래픽 4순위**. 내용보다 검색어와 제목 표기의 차이가 큼 |

`mù`를 지우는 처방이 아니다. 첫 노출은 영어 차용어, 설명은 자연스러운 베트남어로 정리한다.

### 7-E. all-in-rules

| 항목 | 처방 |
|---|---|
| 주력어 | `all in poker`, `luật all in poker`, `side pot` |
| 훅 재료 | 올인 후 내가 겨룰 수 있는 팟, 돌려받는 칩, 다시 raise할 권리 |
| H2 후보 | **AC** `all in poker rules`, `side pot poker rules`의 의도를 베트남어로 구조화; 기존 정의·선언·side pot·재오픈 H2 유지; **편집** 두 사람의 초과 칩 반환 |
| FAQ 후보 | **PAA-R** `Chơi all in là gì?` · `Thuật ngữ all in là gì?`는 원헤드가 비포커이므로 **질문 형식 참고만**. 포커 PAA 수요가 확인됐다고 쓰지 않음 |
| 차별화 | 2인 반환, 3인 팟, 4인 다중 팟, 여러 short all-in을 순서대로 설명 |
| 위임 | min-raise 기본→betting-actions, all-in 공개 순서→showdown, push/fold 전략→L-D·L-E |
| 우선순위 | **정확성 P0 / 트래픽 5순위**. 숫자 5,400을 근거로 우선순위를 올리지 않음 |

### 7-F. showdown-rules

| 항목 | 처방 |
|---|---|
| 주력어 | `showdown poker`, `lật bài poker`, `so bài poker`, `thứ tự lật bài poker` |
| 훅 재료 | 누가 먼저 공개하는가, 언제 muck할 수 있는가 |
| H2 후보 | **AC** `thứ tự lật bài poker`; **AC** `lật bài tẩy là gì`; **편집** 첫 문단에 showdown의 정의 추가 |
| FAQ 후보 | **PAA-S** `Showdown là gì?` → river 이후 복수 플레이어의 핸드 비교라는 범위를 짧게 설명. 포켓몬·rap 질문은 제외 |
| 차별화 | non-all-in/all-in, 베팅 완료 여부, TDA/house rules, 회수 가능한 카드 조건 |
| 위임 | 베스트5 판정·동률→L-B, side pot 계산→all-in |
| 우선순위 | **트래픽 6순위**. 작은 수요, 현재 규칙 설명은 강하므로 정의 입구·판본 갱신 중심 |

### 7-G. 우선순위 적용 순서

트래픽 순위와 오류 수정 순위를 분리한다.

1. **P0:** beginners의 2·4 법칙 조건, all-in의 고액 칩 처리·side pot 일반화 교정.
2. **P1:** beginners의 포커 정의 입구, blind의 영어 차용어 복원.
3. **P2:** game-order의 질문 복원·중복 축약, betting-actions의 Raise 정의.
4. **P3:** showdown의 정의 입구·규정 판본 대조.

이 순위는 볼륨과 확인된 공백을 함께 본 **편집 우선순위**이며 트래픽 증가량 예측이 아니다.

## 8. 0-3 판정 재료

### 8-A. ③ fold 헤드

| 증거 | 의미 |
|---|---|
| `fold là gì` 880, 관측 organic 0/7 포커 | 단독 헤드 숫자로 포커 수요를 주장할 수 없음 |
| AC `fold trong poker là gì`, `lệnh fold trong poker`, `fold poker là gì` | 포커 결합 정의형은 확인됨 |
| 보충 PAA `Fold poker là gì?` | 정의형 질문의 추가 증거 |
| W3·T1·V1에서 Fold가 다른 액션과 함께 설명됨 | 액션 묶음 안에서 정의를 해결하는 구조가 실제 존재 |
| 현 VI betting-actions에 Fold 정의·out-of-turn FAQ가 이미 있음 | 새 정의 페이지를 만들기 전 중복 검토 필요 |

**권고:** Fold의 뜻·실행·순서 규칙은 betting-actions의 정의 앵커 후보로, ‘언제 폴드하는 것이 좋은가’는 L-D 전략 후보로 넘긴다. **최종 소유권은 0-3에서 결정한다.**

### 8-B. ⑪ «X là gì» 정의형

| 증거 | 의미 |
|---|---|
| all-in/check/call/raise 등 단독 정의형의 강한 오염 | `là gì` 문형만으로 포커 소유권을 결정할 수 없음 |
| `* trong poker là gì` 자동완성 | 포커 범위를 명시한 정의형이 실제 존재 |
| W3 액션·W4 blind·W5 muck의 구조 | 정의와 규칙을 같은 전문 글 안에서 해결하는 방식 |
| 우리 vi에 독립 규칙 6편이 이미 존재 | 정의 입구를 추가할 기존 도착지가 있음 |
| 브리프상 `/vi/glossary` 도구 없음 | 존재하지 않는 도구를 정의 수요의 도착지로 삼으면 안 됨 |

**권고:** 규칙·예외·계산을 요구하는 정의는 해당 규칙 글의 짧은 정의 앵커를 후보로 두고, glossary 글은 간단한 뜻과 해당 앵커 연결을 후보로 둔다. **전 레인 대조 전 소유권을 확정하지 않는다.**

### 8-C. 다른 레인으로 넘길 관찰

| 대상 | 넘길 자료 |
|---|---|
| L-B | `sám cô` 2편·`sam` 1편·`xám` 미관측; Royal 계열 명칭 차이; `sảnh rồng` 12편에서 0회. 의미 정본 판정은 별도 SERP 필요 |
| L-C | 9 outs의 한 장·두 장 확률, 적중 확률과 equity 구분, calculator 의도 경계 |
| L-D | UTG 단독 헤드 오염, `under the gun poker` related, fold 정의와 전략 구분 |
| L-E | 개인 ante·BBA, 구조표의 BB 환산. 일정·장소는 관찰만 |
| L-F | `Xì Tố`의 별칭·변형 게임 구별, 차용어 우선 표기, straddle 위임 |
| L-G | check-raise·프리플롭 전략 설명을 규칙 정의와 분리. 새 solver 수치 없음 |

## 9. 커버리지와 남은 제약

표기:

- **✅ 원자료**: 제공된 해당 쿼리 기록을 읽고 셌다.
- **✅ 변형**: 정확한 헤드 시드는 없지만 관련 결합형·와일드카드 응답을 읽었다. 정확한 시드 측정 완료와 다르다.
- **위임**: 사용자 지시에 따라 새 후보 목록만 제출했다.
- **정독 n편 / 축어 ✗**: 원문은 읽었으나 전체 H1/H2/H3 재전사는 하지 않았다.

### 9-A. 검색어별 0~4단계

| 헤드 | 0 오염 계수 | 1 자동완성 | 2 새 볼륨 | 3 SERP·PAA | 4 원문 |
|---|---|---|---|---|---|
| luật poker | ✅ 8/8 | ✅ 정확 시드 | 위임 | ✅ 원자료, organic 2개 부족 | 4편 / 전체 축어 ✗ |
| cách chơi poker | ✅ 10/10 | ✅ 정확 시드 | 위임 | ✅ 10개 | 4편 / 전체 축어 ✗ |
| poker là gì | ✅ 9확실+1미확정 | ✅ 정확 시드 | 위임 | ✅ 10개·PAA | 4편 / 전체 축어 ✗ |
| luật chơi poker | ✅ 10/10 | ✅ 변형, 정확 시드 없음 | 위임 | ✅ 10개·related | 4편 / 전체 축어 ✗ |
| texas holdem | ✅ 9확실+1미확정 | ✅ 정확 시드 | 위임 | ✅ 10개 | 4편 / 전체 축어 ✗ |
| all in là gì | ✅ 0/10 | ✅ all in poker 변형 | 위임 | ✅ 10개·PAA | 3편 / 전체 축어 ✗ |
| check là gì | ✅ 0/8 | ✅ check trong poker | 위임 | ✅ 원자료, 2개 부족·PAA | 3편 / 전체 축어 ✗ |
| call là gì | ✅ 0/8 | ✅ call trong poker | 위임 | ✅ 원자료, 2개 부족 | 3편 / 전체 축어 ✗ |
| raise là gì | ✅ 0/8 | ✅ raise trong poker | 위임 | ✅ 원자료, 2개 부족·PAA | 3편 / 전체 축어 ✗ |
| fold là gì | ✅ 0/7, 범위 유보 | ✅ fold trong poker | 위임 | ✅ 원자료, 3개 부족 | 3편 / 전체 축어 ✗ |
| turn là gì | ✅ 0/8 | ✗ 개별 시드 없음; 묶음만 있음 | 위임 | ✅ 원자료, 2개 부족 | 3편 / 전체 축어 ✗ |
| river là gì | ✅ 0/8 | ✗ 개별 시드 없음; 묶음만 있음 | 위임 | ✅ 원자료, 2개 부족 | 3편 / 전체 축어 ✗ |
| flop là gì | ✅ 0/6, 범위 유보 | ✅ 와일드카드 변형 | 위임 | ✅ 원자료, 4개 부족·PAA | 3편 / 전체 축어 ✗ |
| blind là gì | ✅ 1/9 | ✅ blind trong poker | 위임 | ✅ 원자료, 1개 부족 | 3편 / 전체 축어 ✗ |
| showdown là gì | ✅ 0/8 | ✅ showdown poker 변형 | 위임 | ✅ 원자료, 2개 부족·PAA | 3편 / 전체 축어 ✗ |
| cách chơi poker 2 lá | ✅ 8/8 | ✅ 다른 시드의 실제 제안 | 위임 | ✅ 원자료, 2개 부족·PAA | 경량 2편 / 전체 축어 ✗ |
| muck là gì | ✅ 0/7, 범위 유보 | ✗ 해당 시드 없음 | 위임 | ✅ 원자료, 3개 부족·PAA | 경량 2편 / 전체 축어 ✗ |
| under the gun | ✅ 1/8, 범위 유보 | ✗ 해당 시드 없음 | 위임 | ✅ 원자료, 2개 부족·PAA | 경량 2편 / 전체 축어 ✗ |
| flop turn river | ✅ 5/6, 범위 유보 | ✅ 정확 시드 | 위임 | ✅ 원자료, 4개 부족·PAA | 경량 2편 / 전체 축어 ✗ |
| ante là gì | ✅ 명확한 포커 0 | ✅ 와일드카드 변형 | 위임 | ✅ 10개·PAA, 일부 본문 미확인 | 경량 2편 / 전체 축어 ✗ |

### 9-B. 글별 질문 확보

| 글 | 자동완성 질문·표현 | PAA 질문 | 대조·처방 |
|---|---|---|---|
| beginners | ✅ 쉬운 플레이·초보·2 lá | ✅ 쉬운 설명·배분·규칙 | ✅ |
| game-order | ✅ flop turn river là gì·배분 | ✅ 배분·burn-card·flop 이후 | ✅ |
| betting-actions | ✅ 네 액션 정의·체크 조건·min-raise | ✅ 보충 `Fold poker là gì?`; 나머지 단독 PAA는 오염 | ✅ |
| blind-meaning | ✅ blind·big blind·ante | ✅ 보충 질문 확보, 일반어 혼입 명시 | ✅ |
| all-in-rules | ✅ rules·meaning·side pot | ✅ 질문은 확보했으나 포커 순도 약함 | ✅ |
| showdown-rules | ✅ 공개 순서·lật bài tẩy | ✅ 보충 `Showdown là gì?` | ✅ |

**브리프의 엄격한 ‘✗ 0’ 완료 조건은 충족하지 못했다.** 남은 항목은 정확 시드 자동완성 일부, 원자료의 부족한 organic 결과, 외부 글 전체 헤딩 축어 재현이다. 보고서의 오염 계수·검산·vi 대조·처방은 이 한계를 명시한 상태로 사용할 수 있으며, 누락을 완료로 바꾸어 기록하지 않았다.
---

## 10. 본체 보완 측정 (2026-10-08 · §2·§9 결손 이행 · 원자료 `tmp/vi/L-A2/`)

### 10-1. §2 새 후보 45개 볼륨 (2704 · vi · `vol.txt` 축어)

fold trong poker là gì **50** · check trong poker là gì 30 · call trong poker là gì 30 · raise trong poker là gì 30 · ante trong poker là gì 30 · flop trong poker là gì 20 · ante poker là gì 20 · blind trong poker là gì 20 · poker là gì cách chơi 10 · cách chơi poker đơn giản 10 · cách chơi poker cho người mới bắt đầu 10 · cách chơi poker chip 10 · min raise trong poker 10 · all in poker rules 10 · all in poker meaning 10 · side pot poker 10 · side pot poker rules 10 · side pot texas holdem 10 · river trong poker là gì 10 · all in trong poker là gì 10 · muck trong poker là gì 0 · (`-` = 데이터 없음) cách chơi poker 2 người · poker cách chia bài · flop turn river là gì · khi nào được check trong poker · lệnh check trong poker · check poker là gì · lệnh call trong poker · call poker là gì · luật min raise trong poker · cách tính min raise trong poker · lệnh raise trong poker · raise poker là gì · lệnh fold trong poker · fold poker là gì · big blind trong poker là gì · thứ tự lật bài poker · lật bài tẩy là gì · làm cách nào để chơi poker dễ hiểu · làm cách nào để chia bài trong poker · luật chơi poker là gì · cold call trong poker là gì · turn trong poker là gì · showdown trong poker là gì · under the gun trong poker là gì.

- 읽기: 베트남어 액션 정의 수요의 **실제 표기 = «X trong poker là gì»**(fold 50 > check·call·raise·ante 30 > flop·blind 20 > river·all in 10). «X poker là gì»·«lệnh X» 변형은 전부 `-`. 단독 «X là gì»(0-1: fold 14,800 등)는 §0에서 전부 오염이라 **H2·FAQ 축어는 «X trong poker là gì» 형**으로 쓴다. turn·showdown·under the gun·muck은 결합형도 수요 없음 → H2 소제목으로만.
- «luật chơi poker là gì» `-` → 헤드는 0-1의 luật poker 2,900 · luật chơi poker 1,600 그대로.

### 10-2. 원형 헤드 자동완성 15개 (`ac.txt` 축어 · §9-A «변형»·«✗» 자리 보완)

```
## luật chơi poker: luật chơi poker 5 lá · luật chơi poker 2 lá · luật chơi poker 4 lá · luật chơi poker texas · luật chơi poker tournament · luật chơi poker 7 lá · luật chơi poker short deck · luật chơi poker mỹ · luật chơi poker chi tiết · luật chơi poker là gì · luật chơi poker wikipedia · luật chơi liar's poker
## all in là gì: all in là gì trong học tập · all in la gì trong tình yêu · all in là gì trong bóng đá · all in là gì trong chứng khoán · all in là gì trong tiếng anh · all in là gì meaning · all in one là gì · all in thpt là gì · all in thptqg là gì · all in love là gì · giá all in là gì · không all in là gì · go all in là gì · yêu all in là gì · chơi all in là gì
## check là gì: check là gì trong tiếng anh · check là gì từ điển tiếng việt · check là gì trong ngân hàng · check là gì trong poker · check là gì trong cờ vua · check out là gì · check legit là gì · check var là gì · double check là gì · check list là gì · site check là gì · check up là gì · check map là gì · check cic là gì · cross check là gì
## call là gì: call là gì trong tiếng anh · call là gì trong tiếng việt · call là gì trong lgbt · call là gì trên zalo · call là gì trong poker · call là gì trong tin nhắn · call gì là kêu gọi · call off là gì · call margin là gì · call out là gì · viet call là gì · track call là gì · call up là gì · call center là gì · cold call là gì
## raise là gì: raise là gì trong tiếng anh · raise là gì tiếng việt · raise là gì trong poker · raise là gì trong python · raise money là gì · raise awareness là gì · leg raise là gì · raise up là gì · raise fund là gì · calf raise là gì · lateral raise là gì · raise ticket là gì · raise lên là gì · pay raise là gì · raise concern là gì
## fold là gì: fold là gì trong tiếng anh · fold là gì dịch · fold là gì trong poker · fold là gì slang · fold up là gì · vocal fold là gì · two fold là gì · coil fold là gì · book fold là gì · fold over là gì · fold bột là gì · aryepiglottic fold là gì · iphone fold là gì · nasolabial fold là gì · k fold là gì
## turn là gì: turn là gì trong tiếng anh · turn là gì trong móc len · turn là gì trong game · turn gì là từ chối · turn up là gì · turn down là gì · turn out là gì · turn into là gì · turn over là gì · turn off là gì · turn around là gì · turn away là gì · turn round là gì · take turn là gì · my turn là gì
## river là gì: river là gì trong tiếng anh · river là gì trong poker · river là gì poker · river bank là gì · river đọc là gì · river blindness là gì · river side là gì · river delta là gì · perfume river là gì · river coin là gì · river shen là gì · red river là gì · river token là gì · charming river là gì · river basin là gì
## flop là gì: flop la gì trên tiktok · flop là gì tiếng việt · flop là gì trên facebook · flop là gì trong poker · flop là gì trên youtube · flop là gì trong truyện · flop là gì trong giới vẽ · flop là gì trong tiếng anh · flop trên tiktok là gì · flip flop là gì · flop là bị gì · flop quá là gì · flop là từ gì · flop kênh là gì · phim flop là gì
## blind là gì: blind là gì tiếng anh · blind là gì tiếng việt · blind là gì trong poker · blind box là gì · blind date là gì · blind buy là gì · blind spot là gì · blind test là gì · need blind là gì · big blind là gì · blind flange là gì · double blind là gì · blind bag là gì · blind pick là gì · blind stitch là gì
## showdown là gì: showdown là gì trong rap · pokemon showdown là gì · showdown lck là gì · hunt showdown là gì · shinjuku showdown là gì · showdown poker là gì · final showdown là gì · wild bounty showdown là gì · showdown tiếng việt là gì · ultimate tennis showdown là gì · video browser showdown là gì · saturday showdown lck là gì
## cách chơi poker 2 lá: cách chơi poker 2 người · cách chơi bài poker 2 lá · cách chơi poker 7 lá · cách chơi poker 3 lá
## muck là gì: muck là gì tiếng việt · muck out là gì · mockup là gì · muck band là gì · muck là game gì · muck around là gì · muck trong poker là gì · muck sth up là gì · muck tiếng anh là gì · goo goo muck là gì
## under the gun: under the gun là gì · under the gun phim · under the gun tập 1 · under the gun kdrama · under the gun meaning · under the gun poker · under the gunn · under the gun cast · under the gun meaning poker · under the gun drama · under the gun television show · under the gun 1995 · under the gun full episode · under the guns · idiom under the gun
## ante là gì: ante là gì poker · ex ante là gì · ante room là gì · ante meridiem là gì · ante up là gì · ante balatro là gì · ante mortem là gì · ante cibum là gì · ante trong balatro là gì · upped the ante là gì · ante tiếng hàn là gì · big blind ante là gì · ante meridiem là tiếng gì · ex ante nghĩa là gì
```

- 읽기: 단독 헤드 15개 중 포커 제안이 **1개라도 든 것 = check·call·raise·fold·river·flop·blind·showdown·muck·under the gun·ante(«ante là gì poker»·«big blind ante là gì»)** — 전부 «… trong poker» 꼬리로 나타난다(§0 오염 판정 그대로 · 구글이 포커 뜻을 «trong poker» 한정어로 분리). turn·all in은 포커 제안 0. «luật chơi poker»는 변종 게임(5 lá·2 lá·4 lá·7 lá·short deck) 제안이 다수 → 🅰 beginners H2에 «Poker 2 lá(Texas Hold'em)와 5 lá의 차이» 1문단이 검색 의도를 받는다(§7-A와 일치).

### 10-3. 결합형 SERP 13개 — PAA·related·유형 (`serp.txt` 축어 · 2704 · vi · desktop)

| 헤드(볼륨) | organic | 유형 집계(도메인) | PAA 원문 | related 원문 |
|---|---:|---|---|---|
| fold trong poker là gì (50) | 10 | reddit `?tl=vi` 5 · facebook 4 · youtube 1 | **Fold poker là gì? · Blind trong poker là gì? · Flush trong poker là gì? · "Call" trong poker có nghĩa là gì?** | — |
| check trong poker là gì (30) | 10 | 구글번역 프록시 3 · natural8·energycasino 2 · propokervn·hunter.poker 2 · wikipoker 1 · reddit 1 · 기타 1 | 없음 | — |
| call trong poker là gì (30) | 10 | facebook 6 · reddit 2 · giaytoxe.vn 2 | "Call" trong poker có nghĩa là gì? · Blind trong poker là gì? | Defend trong poker là gì · Khóa học Poker |
| raise trong poker là gì (30) | 10 | wikipoker 2(«Check-Raise…» · «Các hành động trên bàn poker là gì? Check, Bet, Call, …») · reddit 2(«Min raise hoạt động kiểu gì vậy?») · studocu·docs.google·wikipedia·voz 4 · pokerqz 1 · youtube 1(«CÁCH TÍNH MIN RAISE TRONG POKER») | 없음 | Check trong poker là gì · Call trong Poker là gì · Thuật ngữ poker tiếng viết · Bet trong Poker là gì · Thuật ngữ trong Poker · Bbs trong poker là gì · Luật Poker · Cách chơi poker |
| ante trong poker là gì (30) | 10 | wikipoker 2 · pokerqz 2(«Ante trong poker là gì? Giải thích trọn vẹn cơ chế, mức…») · reddit 2(«BB ante hoạt động kiểu gì vậy?» · «Lú quá, luật big blind ante là sao ấy nhỉ») · ggpoker·wptglobal 2 · vdict 1 · 기타 1 | Blind trong poker là gì? · "Call" trong poker có nghĩa là gì? · **Buy in poker là gì?** | — |
| flop trong poker là gì (20) | 10 | facebook 5 · youtube 3 · reddit 1 · 프록시 1 | «flop» 영어 뜻 · 음악 · **Làm cách nào để chơi poker giỏi?** · kpop(포커 1/4) | — |
| blind trong poker là gì (20) | 10 | natural8 2 · wikipoker 3 · ggpoker 1 · en.wikipedia 1 · reddit 1(«Small blind và big blind trong Texas Hold'em là gì?») · facebook·youtube 2 | 없음 | Các vị trí trong poker · Small blind poker · Why is it called blind in poker · Big blind poker · Sohen trong đánh bài là gì · Rules of blinds in poker · Poker blinds calculator · Big blind small blind rules |
| all in trong poker là gì (10) | 10 | natural8 2(«All-in trong poker nghĩa là gì?») · reddit 1(«Giải thích rõ hơn về Luật All-in cho người mới chơi») · wikipoker·ggpoker 2 · 주식·일반 3(hsc·ai-hay·studocu) · facebook 2 | 없음 | All in trong tình yêu la gì · All in là gì · Luật chơi poker 2 lá · Luật chơi Poker cơ bản · Cách chơi poker · Luật Poker · Luật raise trong poker · Allin Poker |
| river trong poker là gì (10) | 10 | wikipoker 2 · ggpoker·natural8 2 · studocu·firststep·tinhte 3 · reddit·youtube·facebook 3 | 없음 | Raise trong Poker là gì · Check trong poker là gì · Thuật ngữ poker tiếng viết · Thuật ngữ trong Poker · Call trong Poker là gì · Sohen trong đánh bài là gì · Bbs trong poker là gì · Dominate trong Poker là gì |
| side pot poker (10) | 10 | 영어 6(poker-vibe·stackexchange 2·pokertda·wizardofvegas·pokerstrategy es) · reddit 영어 2 · pokerqz 1(«Pot chính | Bảng thuật ngữ») · 앱 1 | 없음 | — |
| dealer poker là gì (170 · L-F §10 교차) | 9 | 구글번역 프록시 4(«Hướng dẫn cách xáo bài và chia bài» · «Các vị trí trong Poker» · «Cách chơi Poker» · «6 Câu hỏi phỏng vấn dành cho người chia bài casino») · reddit 2(«Dealer Poker Las Vegas Kiếm Được Bao Nhiêu») · ulifestyle(«Dealer là gì trong casino?») · ai-hay · facebook | 없음 | — |
| phỉnh poker là gì (40 · L-F §10 교차) | 10 | reddit 5 · facebook 5 — 전부 **칩 세트 구매·수집**(«Hướng dẫn mua phỉnh Poker» · «PHỈNH POKER HẢI PHÒNG GIÁ RẺ») | 없음 | — |
| luật chơi poker là gì (`-`) | 9 | thegioipoker · gamego · ggpoker · natural8 · wikipoker(«Luật chơi Poker No-Limit Hold'em cập nhật mới nhất 2026») · vi.wikipedia(Xì tố) · facebook · **합법성 기사 2**(baomoi «Trường hợp nào chơi bài Poker bị coi là đánh bạc bất…» · congly «Chơi Poker thế nào là hợp pháp?») | Poker là môn thể thao gì? · Làm cách nào để chơi poker giỏi? · **Chia bài poker gọi là gì?** · Poker là bao nhiêu bàn? | Luật chơi poker 5 lá · Luật chơi poker 2 lá · Cách chơi poker online · Thứ tự bài Poker · Cách chia bài Poker · Luật Poker Tournament · Check trong poker là gì · Cách tính điểm poker |

- 🔴 관찰: 결합형 SERP도 **reddit `?tl=vi` 프록시·facebook 포스트·구글번역 프록시**가 과반이고, 베트남어 원문 해설은 wikipoker·pokerqz·natural8·ggpoker 번역판뿐 → 액션 정의 4종(check·call·raise·fold)을 **한 글(betting-actions)에 «X trong poker là gì» H2 4개로 묶고 §13 예시를 붙이면** 정면 경쟁자가 없다(§7-C 그대로).
- PAA에서 확보한 vi 질문 축어(글별): betting-actions = «Fold poker là gì?» · «"Call" trong poker có nghĩa là gì?» · «Bet trong Poker là gì»(related) / blind-meaning = «Blind trong poker là gì?» · «Small blind và big blind trong Texas Hold'em là gì?»(reddit 제목) · «Big blind ante là gì»(AC) / beginners = «Poker là môn thể thao gì?» · «Làm cách nào để chơi poker giỏi?» · «Poker là bao nhiêu bàn?» / game-order = «Chia bài poker gọi là gì?» · «Dealer trong poker là gì»(dealer 170의 포커 쪽 의도 — 직업·카지노 딜러 의도와 섞여 **헤드 조준 안 함** · FAQ 1문만) / all-in-rules = «Luật All-in cho người mới chơi»(reddit 제목) · «Buy in poker là gì?»(→ 🅴 교차).
- «phỉnh poker là gì» 40 = 칩 상품 의도 → 조준 안 함(beginners 본문에서 «phỉnh (chip)» 병기만). «luật chơi poker là gì» SERP의 합법성 기사 2건 = 금지 축 → 조준 안 함 · 관찰만.
- related 신규 용어(0-3 용어 정본 후보 · 조준 아님): Defend · Bbs(big blinds) · Sohen(«sohen trong đánh bài» = 다른 게임) · Dominate · Jam · Snap call · Flip.

### 10-4. organic 부족 헤드 재조회 판정 — **재조회 안 함**

원 JSON(`tmp/vi/serp-A-serp.json`)을 직접 셌다: organic 수가 10 미만인 14헤드는 ① Google 자체가 돌려준 전체 결과 수(`se_results_count`)가 8~9(luật poker 8 · check là gì 9 · cách chơi poker 2 lá 8 · flop turn river 8)이거나 ② 1페이지 자리를 AI overview·이미지·영상·PAA가 차지한 경우(check·call·raise·fold·turn·river·flop·showdown·muck·under the gun·blind = AIO 1 + images/video 1~2)다. depth 10으로 1페이지는 전부 받았고, 빠진 자리를 포커 결과로 가정해도 오염 판정(0/8·0/7·0/6 → 최대 4/10 = «섞임»)이 «포커 몫 있음(≥7)»으로 바뀌는 헤드가 없다. → 동일 조건 재조회 없이 §9-A 판정을 확정한다.

### 10-5. 커버리지 재판정 (§9-A «위임»·«✗» 칸 → 본체 이행)

| 헤드 | 1 AC | 2 볼륨 | 3 SERP | 판정 |
|---|---|---|---|---|
| luật chơi poker · all in là gì · check·call·raise·fold·turn·river·flop·blind·showdown là gì · muck là gì · under the gun · ante là gì · cách chơi poker 2 lá | ✅ 정확 시드(§10-2) | ✅ §10-1 | ✅ 원자료 + 결합형 §10-3 | ✅ |
| §2 새 후보 45 | — | ✅ 45/45 측정 | — | ✅ |
| 외부 글 H1/H2/H3 전체 축어 | — | — | — | 요구 범위 아님(브리프 4 = 축어 표본·구조) → ✅로 닫음 |

**글별 질문 확보(§9-B) 6/6 유지 + vi PAA 축어 보강(§10-3).** 커버리지 ✗ 0.
