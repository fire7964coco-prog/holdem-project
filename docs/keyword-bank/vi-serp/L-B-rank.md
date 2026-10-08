# vi SERP — L-B 족보 (L-B-rank.md) (2026-10-08 · 아스트라)

> 기준: `00-brief.md` · 수요: `vi-core-volumes.md` 0-1 수치 승계 · SERP/자동완성: 제공된 `raw/serp-B-serp.txt`, `raw/serp-B-ac.txt`.
>
> **우선 작업은 기존 족보 글의 베트남어 검색 표현 보강과 EN 최신판 반영이다.** `nuts là gì`, `tứ quý`, `sảnh rồng`의 표면 볼륨을 홀덤 수요로 합산하면 안 된다. 경쟁 원문에는 실제 규칙·확률 오류가 있지만, 정확한 표와 보드 예시를 갖춘 글도 있다.
>
> 파일 수정·생성, 볼륨 재측정, git 작업은 하지 않았다. 외부 원문의 제목은 짧은 축어 인용과 구조 요약으로 제시한다. 출처별 인용 한도 때문에 **모든 H1/H2/H3의 전문 전재는 하지 않았다.** 원자료의 누락과 질문 미확보도 마지막 커버리지 표에 그대로 남겼다.

## 0. 오염 판정

### 0-1. 집계 기준

- 분모는 요청대로 **10**이다. 다만 제공 파일에는 15개 SERP 합계 **organic 139건**만 있다. 누락된 11칸을 비포커 결과로 확정하지 않는다.
- 포커 설명·포커 토론·포커용 카드/족보 자료는 포커 결과로 센다. 포커 인물의 범죄 뉴스, 카드 모양 음식, 이름만 같은 노래·식물·음식은 제외했다.
- 제목에 포커가 명시된 홍보성·앱 표방 결과도 **주제 집계에는 포함**한다. 유효한 해설 글이라는 뜻은 아니다.
- 문맥이 불분명한 결과는 별도 미확정으로 남긴다. 아래 `n/10`은 그런 결과를 포커로 추정하지 않은 **확인 하한**이다.
- 순위는 raw의 번호를 보존한다. PAA·영상 등이 끼어 있어 organic 마지막 번호가 11 또는 14여도 organic 11·14건이라는 뜻이 아니다.

| 헤드 | 0-1 볼륨 | 반환 organic | 포커 결과 | 미확정 | 판정·사용 |
|---|---:|---:|---:|---:|---|
| poker hands | 2,900¹ | 9 | **9/10** | 누락 1 | 포커 몫 있음. 족보·별명·훈련 앱 혼재 |
| bài poker | 1,900 | 10 | **10/10** | 0 | 포커 몫 있음. 완성 패·시작 패·실물 카드·규칙을 분리 |
| thứ tự bài poker | 590 | 9 | **9/10** | 누락 1 | 포커 몫 있음. L-B의 명확한 베트남어 주력 표현 |
| poker hand rankings | 1,000¹ | 10 | **10/10** | 0 | 포커 몫 있음. 그중 Three Card Poker 자료 1건은 홀덤과 분리 |
| thùng phá sảnh | 1,000 | 10 | **10/10** | 0 | 포커 몫 있음. 번역어 대응이 페이지마다 다름 |
| thùng phá sảnh là gì | 480 | 10 | **6/10** | 4 | 확인분 기준 섞임. 미확정까지 포함한 실제 비율은 6~10/10 |
| sảnh rồng | 1,000 | 10 | **2/10** | 게임·서비스 정체 불명 일부 | **오염·조준하지 않음**. 확인 포커 2건 중 1건도 키워드 랜딩 |
| cù lũ | 480 | 7 | **5/10** | 누락 3 | 섞임. `cù lũ poker` 결합형과 비교 질문 우선 |
| royal flush | 390 | 10 | **3/10** | 이미지 2·앱 1 | 섞임. 확인 범위 3~6/10; 단독 수요 전량 사용 금지 |
| tứ quý | 2,900 | 8 | **0/10** | 누락 2 | **오염·조준하지 않음** |
| kicker là gì | 140 | 10 | **3/10** | 0 | 섞임. 3건 중 1건은 앱 표방 랜딩; 실제 토론 2건 |
| nuts là gì | 720 | 8 | **0/10** | 누락 2 | **오염·조준하지 않음** |
| thùng phá sảnh và tứ quý cái nào lớn hơn | 90 | 10 | **10/10** | 0 | 포커 몫 있음. 명확한 완성 패 비교 의도 |
| split pot | 10 | 9 | **9/10** | 누락 1 | 포커 몫 있음. 영어·독일어·네덜란드어 자료 중심 |
| hòa bài poker | `-` | 9 | **4/10** | 마술 영상 1·누락 1 | 섞임. 직접적인 동률 판정 글은 적음 |

¹ 0-1에서 단·복수 묶음으로 제시한 값. `poker hand(s)` 또는 `poker hand ranking(s)`의 여러 표기를 합산하지 않는다. `-`는 Ads 데이터 없음이지 수요 0이 아니다.

`thùng phá sảnh là gì`의 확정 포커 결과는 raw 1·2·3·4·5·7번이다. 6·8·9·10번은 게임명·본문을 확인하지 못해 포커로 확정하지 않았다. `royal flush`는 Cambridge·PokerQz·Playing Cards Pinterest 3건만 확정했다. 두 이미지 검색 페이지와 앱의 내용은 제목만으로 단정하지 않았다.

### 0-2. 다른 게임과의 경계

| 표현 | raw에서 확인한 문맥 | L-B 처리 |
|---|---|---|
| sảnh rồng | `sảnh rồng trong mậu binh`, `sảnh rồng trong tiến lên miền nam`, `chơi tá lả sảnh rồng`, `Tài xỉu Sảnh rồng` | 단독 헤드 포기. 로열 플러시의 별칭 설명에서만 문맥 한정 |
| sảnh rồng poker | AC에 실제 등장 | 로열 플러시와의 대응을 설명할 후보. 볼륨·소유 확정 전 |
| poker 5 lá | `bài poker` AC 및 관련검색에 등장 | 5장 게임 규칙은 L-B 홀덤 족보에 합치지 않음 |
| Three Card Poker | `poker hand rankings` raw 8번 | 홀덤의 10개 족보와 분리 |
| xì tố | 규칙 원문에서 poker의 넓은 번역어로도 사용 | 등장했다고 곧바로 다른 게임으로 단정하지 않되, 홀덤의 완전한 동의어로 고정하지 않음 |
| Omaha·Short Deck·hi-lo | 비교 글·규칙 글의 변형 설명 | 홀덤 규칙을 먼저 제시하고 예외 경고로만 분리 |

0-1의 `sảnh rồng` 설명에 있는 **“3~A 13장”은 그대로 승계하면 안 된다.** 3부터 A까지는 12개 랭크다. 이번 raw는 다른 게임 의도가 섞인다는 증거이지, 그 게임의 정확한 드래곤 성립 조건까지 검증한 자료는 아니다.

## 1. 자동완성 — 제공 원자료 전량

**15개 요청, 제안 165개, 빈 응답 2개.** 다음 목록은 순서·표기를 보존했다. 검색어를 편집해 질문으로 바꾸지 않았다.

| 요청 | 개수 | 자동완성 원문 |
|---|---:|---|
| sám cô | 15 | sám cô là gì · sám công cha · sám cô hồn · sám cô trong tiến lên · sám cô ăn sảnh không · sám cô poker · sám cô ăn thú không · sám cô với 2 đôi · sám cô trong tiến lên là gì · 4 sám cô là gì · mua sám công · 3 sám cô là gì · ongame sám cô · bái sám công đức vong giả sanh đao lợi · sám hối công đức thù thắng hạnh |
| cù lũ | 15 | cù lũ là gì · cù lũ poker · cù lũ là sao · cù lũ miền tây · cù lũ trong poker là gì · cù lũ với thùng cái nào lớn hơn · cù lũ nhí là ai · cù lũ tiếng anh là gì · cù lũ và thùng · cù lũ ăn thùng không · cù lũ hơn thùng · cù lũ với tứ quý · cù lũ nhí · cù lũ lớn hơn thùng · cù lũ với sảnh cái nào lớn hơn |
| thùng và sảnh | 9 | thùng và sảnh cái nào lớn hơn · thùng và sảnh trong poker · thùng và sảnh là gì · thùng phá sảnh và tứ quý · thùng phá sảnh và sảnh rồng · thùng phá sảnh và cù lũ cái nào lớn hơn · thùng và thùng phá sảnh · thùng và tứ quý · thùng và hộp khác nhau như thế nào |
| thùng phá sảnh | 12 | thùng phá sảnh là gì · thùng phá sảnh nào lớn nhất · thùng phá sảnh poker · thùng phá sảnh là bài gì · thùng phá sảnh tiếng anh · thùng phá sảnh trong poker là gì · thùng phá sảnh rồng · thùng phá sảnh và cù lũ cái nào lớn hơn · thùng phá sảnh rồng là gì · thùng phá sảnh lớn · thùng phá sảnh và tứ quý · thùng phá sảnh có lớn hơn tứ quý không |
| chia pot | 15 | chia pot c1 · chia pots recipe · chia pots for breakfast · chia potassium · chia potasio · chia potassium content · chia potato head · chia pot recipe overnight · chia pottery · chia pot plant · chia pots with coconut milk · chia pot calories · chia pot ratio · chia potato · chia pote |
| kicker poker | 15 | kicker poker meaning · kicker poker texas hold em · kicker poker rules · kicker poker significato · kicker poker significado · kicker poker definition · kicker poker que es · kicker poker term · kicker poker rdr2 · kicker poker texas · poker kicker rule · poker ace kicker · top kicker poker · kicker trong poker là gì · high kicker poker |
| sảnh rồng | 14 | sảnh rồng là gì · sảnh rồng bạch kim · sảnh rồng poker · sảnh rồng trong tiến lên miền nam · sảnh rồng có tới trắng không · sảnh rồng tiến lên · sảnh rồng tới trắng · sảnh rồng g family · sảnh rồng trong tiến lên · sảnh rồng trong poker là gì · sảnh rồng có cần heo không · sảnh rồng sâm · sảnh rồng là số mấy · sảnh rồng trong sâm là gì |
| nuts poker | 15 | nuts poker league · nuts poker league scotland · nuts poker league east anglia · nuts poker league venues · nuts poker league edinburgh · nuts poker wrexham · nuts poker league norwich · nuts poker league dragons den · nuts poker hand · nuts poker verona · nuts poker league points system · nuts poker league online · nuts poker club · nuts poker league regional finals · nuts poker edinburgh |
| bài nào mạnh nhất poker | 3 | bài mạnh nhất poker · bài mạnh nhất trong poker · bài mạnh poker |
| tay bài poker | 7 | các tay bài poker · thứ tự tay bài poker · xếp hạng tay bài poker · bộ bài tây poker · tay poker · tay chơi poker · bài tây poker |
| thứ tự * poker | 15 | thứ tự poker · thứ tự poker tiếng việt · thứ tự trong poker · thứ tự bài poker tiếng việt · bảng thứ tự poker · thứ tự chơi poker · thứ tự đánh poker · xếp thứ tự poker · thứ tự điểm poker · thứ tự luật poker · thứ tự sảnh poker · số thứ tự poker · thứ tự mạnh poker · thứ tự chất poker · thứ tự chất trong poker |
| hòa bài poker | 0 | 빈 응답 |
| bài poker | 15 | bài poker là gì · bài poker cách chơi · bài poker luật chơi · bài poker chơi sao · bài poker online · bài poker thứ tự · bài poker 5 lá · bài poker game · bài poker đẹp · bài poker luật · bài poker mạnh nhất · bài poker texas · bài poker nhựa · bài poker tiếng việt · bài poker tiếng việt là gì |
| thứ tự bài poker | 15 | thứ tự bài poker tiếng việt · thứ tự hand bài poker · thứ tự bài mạnh poker · thứ tự chia bài poker · thứ tự bài lớn poker · thứ tự tay bài poker · thứ tự chất bài poker · thứ tự chơi bài poker · thứ tự lật bài poker · thứ tự bài cao poker · thứ tự bài thắng poker · xếp hạng thứ tự bài poker · thứ tự độ lớn bài poker · thứ tự các bộ bài poker · thứ tự bài lớn nhỏ trong poker |
| poker * cái nào lớn hơn | 0 | 빈 응답 |

### 1-1. 자동완성에서 얻은 편집 판단

| 관찰 | 해석·처리 |
|---|---|
| `thứ tự bài poker` 제안 15개 중 족보 외에 chia/chơi/lật 순서도 등장 | 족보 글 첫 화면에서 “완성 패의 강약 순서”를 명시. 진행·배분·쇼다운 순서는 L-A 앵커 링크 |
| `cù lũ`에 thùng·tứ quý·sảnh 비교가 반복 | 정의만으로 끝내지 말고 비교와 동률 판정을 붙임 |
| `kicker poker`에서 베트남어 질문 1개 확보 | `kicker trong poker là gì`가 직접 쓸 수 있는 H2 근거 |
| `chia pot`의 제안 15개가 포커 질문을 제공하지 않음 | `chia pot` 볼륨 10을 근거로 베트남어 질문 수요가 검증됐다고 쓰지 않음 |
| `nuts poker` 제안은 리그·지역명 중심 | `nuts poker hand` 외에 보드 판독 질문을 확보했다고 볼 수 없음 |
| `sám cô`에는 종교·다른 게임·서비스가 혼재 | `sám cô poker` 등 결합형만 검토 |
| `hòa bài poker`와 비교 와일드카드가 빈 응답 | 편집 질문을 만들 수는 있지만 AC에서 나왔다고 표시하면 안 됨 |

**브리프 필수 와일드카드**인 `* poker`, `poker * là gì`, `* trong poker là gì`, `cách * poker`, `luật * poker`의 응답은 제공 파일에 없다. `thứ tự * poker`와 `poker * cái nào lớn hơn`가 이를 대체하지 않는다.

## 2. §볼륨 측정 요청

아래 **37개는 제공된 0-1 문서에 없는 정확한 검색 문자열**이다. AC 또는 related에서 확보했으며, 이번 조사에서는 측정하지 않았다. 의미상 가까운 기존 키워드와 Ads가 묶어 반환할 수 있으므로 응답 후 합산하지 않는다.

| 묶음 | 본체에 넘길 새 후보 |
|---|---|
| 족보·강약 순서 11 | `thứ tự hand bài poker` · `thứ tự bài mạnh poker` · `thứ tự bài lớn poker` · `thứ tự tay bài poker` · `thứ tự chất bài poker` · `thứ tự bài cao poker` · `thứ tự bài thắng poker` · `xếp hạng thứ tự bài poker` · `thứ tự độ lớn bài poker` · `thứ tự các bộ bài poker` · `thứ tự bài lớn nhỏ trong poker` |
| 가장 강한 패 3 | `bài poker mạnh nhất` · `bài mạnh nhất poker` · `bài mạnh nhất trong poker` |
| 스트레이트 플러시 6 | `thùng phá sảnh poker` · `thùng phá sảnh là bài gì` · `thùng phá sảnh tiếng anh` · `thùng phá sảnh trong poker là gì` · `thùng phá sảnh và cù lũ cái nào lớn hơn` · `thùng phá sảnh có lớn hơn tứ quý không` |
| 풀하우스 7 | `cù lũ poker` · `cù lũ trong poker là gì` · `cù lũ tiếng anh là gì` · `cù lũ với thùng cái nào lớn hơn` · `cù lũ ăn thùng không` · `cù lũ với tứ quý` · `cù lũ với sảnh cái nào lớn hơn` |
| 플러시·스트레이트 2 | `thùng và sảnh trong poker` · `thùng và sảnh là gì` |
| 트리플 2 | `sám cô poker` · `sám cô với 2 đôi` |
| 로열 별칭 확인 2 | `sảnh rồng poker` · `sảnh rồng trong poker là gì` |
| 키커·넛 2 | `kicker trong poker là gì` · `nuts poker hand` |
| 분할 팟 2 | `split pot poker` · `poker split pot examples` |

제외: 앱·사이트·게임 다운로드, 다른 게임 규칙, nuts 리그·지역명, chia 음식 제안. 계산기 관련어는 이미 조사된 도구 축과 겹칠 수 있어 이 신규 볼륨 묶음에 넣지 않았다.

## 3. SERP 상위 결과·PAA·특수 영역

### 3-1. URL 표기와 유형

아래 제목은 **raw에 기록된 제목 또는 그 앞부분**이다. `…`는 생략 표시이며 H1으로 취급하지 않는다.

- **해설**: 원문을 읽고 교육 본문을 확인한 페이지.
- **홍보형**: 카지노·사업자·제휴 매체의 교육 글 또는 홍보성 랜딩. 교육 본문만 검토했다.
- **앱 표방**: raw 제목이 앱이라고 주장하는 페이지. 실제 앱인지 검증하지 않았다.
- **미열람**: 주제 집계 외 본문 품질·정확성 판정 없음.
- Google `goto`가 풀린 것은 최종 URL을 적었다. 풀리지 않은 것은 **원파일의 검색어+순위**를 URL 식별자로 남겼다. 목적지 URL을 추측하지 않았다.

### 3-2. `poker hands`

| raw 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Xếp hạng các bộ bài Poker](https://gldproducts.com/blogs/all/poker-hand-rankings) — Google 리디렉션 해제 | EN 해설·용품 사업자 |
| 2 | [Poker Hand Ranking](https://www.pinterest.com/ideas/poker-hand-ranking/941531839461/) | 이미지 모음 |
| 3 | Poker Hand Rankings — `google.com/goto`, raw `poker hands#3` | 목적지 열람 실패, 403 |
| 4 | [Bảng xếp hạng bài Poker](https://worldpokerfederation.org/poker/how-to-play-poker/poker-hand-rankings/) — 리디렉션 해제 | EN 해설 |
| 5 | [Biệt danh cho các bộ bài Poker](https://www.888poker.com/magazine/strategy/poker-hand-nicknames) — 리디렉션 해제 | 사업자 콘텐츠·별명 |
| 6 | Biệt danh cho các bộ bài Poker trong Texas Holdem — `google.com/goto`, raw `poker hands#6` | 목적지 열람 실패, 402 |
| 7 | [Types of poker hands exercise part 1](https://www.blairenglish.com/exercises/card_games/exercises/poker_hands/poker_hands.html) | EN 어휘 학습·퀴즈 |
| 8 | [Poker Hands Order - Basic Poker Knowledge](https://cdn2.f-cdn.com/files/download/104727732/Poker%20Hands%20Order.pdf) | PDF·미열람 |
| 9 | [REG Poker Hands Trainer](https://play.google.com/store/apps/details?id=com.boardanalysis.game&hl=vi) | 앱·유형만 |
| 10 | 원자료에 organic 없음 | 미관측 |

**의도:** 완성 패 순서가 중심이지만 별명·도표·훈련 앱이 섞인다. 베트남어 SERP 제목이 곧 베트남어 본문이라는 뜻은 아니다. 1·4번은 실제로 영어 원문이다.

### 3-3. `bài poker`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | 10 bộ bài khởi đầu tốt nhất… — `google.com/goto`, raw `bài poker#1` | 시작 패·목적지 402 |
| 2 | [Hướng dẫn cách xáo bài và chia bài Texas Hold 'em…](https://www.wikihow.com/Shuffle-and-Deal-Texas-Holdem) | 배분 규칙·JS 챌린지 |
| 3 | Bài khai cuộc poker - Huấn luyện viên Poker — `google.com/goto`, raw `bài poker#3` | 시작 패·목적지 455 |
| 4 | [Bài tây chơi poker loại nào ngon nhất?](https://www.reddit.com/r/poker/comments/a9cvue/best_poker_playing_cards_to_get/?tl=vi) | 실물 카드 토론 |
| 5 | [Trong trò chơi Texas Hold 'Em Poker, bài nào là bài tệ nhất?](https://www.winstar.com/blog/what-is-the-worst-hand-in-texas-hold-em-poker/) | EN 시작 패 해설·사업자 |
| 6 | [Hướng dẫn chơi poker](https://ai-hay.vn/huong-dan-choi-poker-pN1UmIv_c5K) | AI 답변 페이지 |
| 7 | [Năm loại poker mang đến một khía cạnh giải trí mới](https://www.skrill.com/en/skrill-news/poker/five-types-of-poker-that-bring-a-new-dimension-of-fun/) | EN 변형 소개 |
| 8 | [Thứ Tự Bài Poker \| Các Biến Thể Xếp Hạng Tay Bài](https://docs.google.com/forms/d/1kKv-TIekS58N_a5bqcBJshLj4wcgrXL2MVJPzadYoOE/preview) | Google Forms·미열람 |
| 9 | [Vấn đề Monty Hall và Bài Poker?](https://www.reddit.com/r/mathematics/comments/blpik3/monty_hall_problem_and_poker_hands/?tl=vi) | 수학 포럼 |
| 10 | [Lá bài tẩy trong Poker…](https://ai-hay.vn/la-bai-tay-trong-poker-yeu-to-then-chot-quyet-dinh-chien-thang-pN1UmHBvGMG) | AI 답변·미열람 |

**경계:** `bài poker` 1,900 전체를 족보 수요로 잡을 수 없다. 프리플롭 시작 패는 L-D와 `/vi/hand-chart`, 배분·진행은 L-A로 위임한다.

### 3-4. `thứ tự bài poker`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Hướng dẫn cực chất về các bộ bài trong Poker](https://www.reddit.com/r/coolguides/comments/15erkum/a_cool_guide_to_different_poker_hands/?tl=vi) | 포럼·도표 |
| 2 | [Tứ quý nào mạnh nhất trong Poker…](https://ai-hay.vn/tu-quy-nao-manh-nhat-trong-poker-va-dac-diem-van-ban-thuyet-minh-pN1UmH5zJZC) | AI 답변·열람 실패 |
| 3 | [Giải thích về lịch sử và nguồn gốc của chất bài poker](https://www.natural8.com/vi/blog/poker-suits-explained) | VI 해설·사업자 |
| 4 | [Thứ tự Poker: Xếp hạng những hand bài mạnh nhất trong Poker](https://blog.ulifestyle.com.hk/article/pho88one/4222794/thứ-tự-poker-xếp-hạng-những-hand-bài-mạnh-nhất-trong-poker) | 블로그·403 |
| 5 | [Thứ Tự Bài Poker Bí Quyết Ghi Nhớ Nhanh Cho Người Chơi](https://bffx.io/thu-tu-bai-poker/) | 해설형 제목·열람 실패 |
| 6 | [Cần giúp nhớ thứ tự các kiểu bài poker?](https://www.reddit.com/r/poker/comments/14c53x5/help_remembering_the_ranking_of_poker_hands/?tl=vi) | 토론·직접 열람 |
| 7 | [Cách Chơi Poker Online Từ A Z V1 0](https://www.calameo.com/books/005510290984af323b3e4) | 문서·홍보형 |
| 8 | [Luật chơi Poker – Hướng dẫn cách chơi bài Poker quốc tế](https://blog.ulifestyle.com.hk/article/pho88online/4222769/luật-chơi-poker-hướng-dẫn-cách-chơi-bài-poker-quốc-tế) | 블로그·미열람 |
| 9 | [Vấn đề Monty Hall và Bài Poker?](https://www.reddit.com/r/mathematics/comments/blpik3/monty_hall_problem_and_poker_hands/?tl=vi) | 수학 포럼 |
| 10 | 원자료에 organic 없음 | 미관측 |

실제 원문 토론은 **족보를 기억하는 방법**을 묻는다. 다만 `?tl=vi` 페이지에 번역 표시가 있으므로 그 표현을 베트남 현장 용어의 정본으로 사용하지 않는다. [해당 토론](https://www.reddit.com/r/poker/comments/14c53x5/help_remembering_the_ranking_of_poker_hands/?tl=vi)

### 3-5. `poker hand rankings`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Complete poker hand rankings: Order of strength for Texas…](https://www.sportingnews.com/us/tsn/news/complete-poker-hand-rankings-texas-holdem-best-hands-worst/b13846244fa483a6690ae53f) | EN 매체 해설 |
| 3 | [Poker Hand Ranking: The Best Hands You Should Learn](https://www.capitol-casino.com/poker-hand-ranking-the-best-hands-you-should-learn/) | EN 사업자 해설 |
| 4 | [Poker Hand Rankings - Beginner Guide](https://www.gamblingzone.com/uk/poker/hands/) | EN 제휴 매체 해설 |
| 5 | [Poker Hand Rankings Explained](https://www.youtube.com/watch?v=Qw9CwJHiRVo) | 영상 |
| 6 | [Poker Hand Rankings and Win Percentages](https://www.scribd.com/document/833673359/equidades) | 문서 |
| 7 | [Understanding Poker Hand Rankings](https://www.skysports.com/watch/video/10243745/understanding-poker-hand-rankings) | 영상 |
| 8 | [Three Card Poker Rules](https://www.pinterest.com/pin/814588651323711537/) | 이미지·다른 게임 |
| 9 | [Poker Hand Rankings Casino Diagram…](https://www.amazon.com/clp/B0B1JB1TNS) | 상품 |
| 10 | [Poker Hand Ranking](https://www.etsy.com/au/market/poker_hand_ranking) | 상품 |
| 11 | [Stupell Industries Poker Hand Rankings Card Casino…](https://www.walmart.com/ip/Stupell-Industries-Poker-Hand-Rankings-Card-Casino-Visual-Game-Chart-13-x-30-Design-by-Cindy-Jacobs/1961797758) | 상품 |

PAA는 raw 2번. **영어 교육 글·영상·인쇄 도표 의도**가 함께 나타난다. 카드 도식은 필요하지만 상품 구매 의도까지 블로그가 소유하는 것으로 해석하지 않는다.

### 3-6. `thùng phá sảnh`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Texas hold 'em – Wikipedia tiếng Việt](https://vi.wikipedia.org/wiki/Texas_hold_%27em) | 위키 |
| 2 | [Hướng dẫn đầy đủ về Luật chơi Poker Texas Hold'em](https://www.natural8.com/vi/blog/guide-to-texas-holdem-rules) | VI 사업자 해설 |
| 3 | [Những khái niệm cơ bản trong Poker](https://vpsgaming.net/blogs/poker-lesson/15329329-nh-ng-khai-ni-m-c-b-n-trong-poker) | VI 용품업체 해설 |
| 4 | [Thùng vs. Cù Lũ](https://www.reddit.com/r/poker/comments/1eln9z8/flush_vs_full_house/?tl=vi) | 포럼 |
| 5 | [Luật chơi Poker No-Limit Hold'em cập nhật mới nhất 2026](https://wikipoker.net/luat-choi-poker/) | VI 해설 |
| 6 | Tìm Hiểu Về Thùng Phá Sảnh Trong Bài Poker Tại HitClub… — `espacedehitclub.quora.com`, raw 해당 헤드 #6 | 홍보형·유형만 |
| 7 | [Poker Hands là gì? Cách xếp hạng & So sánh khi trùng hand](https://wikipoker.net/poker-hands/) | VI 해설 |
| 8 | [Luật chơi poker cơ bản - Thứ hạng sức mạnh hand bài…](https://mmo4me.com/threads/luat-choi-poker-co-ban-thu-hang-suc-manh-hand-bai-trong-poker.415419/) | 포럼·열람 실패 |
| 9 | [Thùng phá sảnh là gì? Ý nghĩa của…](https://tudomuaban.com/chi-tiet-rao-vat/2065845/thung-pha-sanh-la-gi-y-nghia-cua-thung-pha-sanh-trong-bai-poke.html) | 게시형 콘텐츠·열람 실패 |
| 10 | [Cách chơi tay bài thùng (flush) trong poker…](https://www.natural8.com/vi/blog/how-to-play-a-flush-in-poker) | VI 사업자 해설 |

**확인된 문제:** 같은 검색어에 straight flush 정의, royal flush 번역, 일반 flush 설명이 함께 나온다. 검색어의 의미를 단순히 영어 하나에 고정하면 원문 차이를 놓친다.

### 3-7. `thùng phá sảnh là gì`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Cách chơi khi có flush (thùng) ở vòng flop](https://www.natural8.com/vi/blog/how-to-play-a-flopped-flush) | VI 사업자 해설 |
| 2 | [Thùng phá sảnh là gì? Ý nghĩa của…](https://tudomuaban.com/chi-tiet-rao-vat/2065845/thung-pha-sanh-la-gi-y-nghia-cua-thung-pha-sanh-trong-bai-poke.html) | 열람 실패 |
| 3 | Tìm Hiểu Về Thùng Phá Sảnh Trong Bài Poker Tại HitClub… — `espacedehitclub.quora.com`, raw #3 | 홍보형·유형만 |
| 4 | [Loạt Hướng Dẫn Cho Người Mới Bắt Đầu…](https://ggpoker.com/vi/blog/the-beginners-guide-series-how-to-play-a-flush-draw/) | VI 사업자 해설·flush draw |
| 5 | [Luật thùng phá sảnh poker](https://sin88betday.weebly.com/luat-thung-pha-sanh.html) | 홍보형 제목·미열람 |
| 6 | [Cách chơi thùng phá sảnh trong game bài thú vị nhất](https://durkop43640665.wixsite.com/mcw19/post/cach-choi-thung-pha-sanh) | 게임 불명·미열람 |
| 7 | [Thùng Phá Sảnh Trong Poker Chiến Thuật Tối Ưu Tỷ Lệ…](https://paulvendel.nl/vi-vn/thung-pha-sanh-trong-poker/) | 키워드 랜딩·미열람 |
| 8 | Thùng Phá Sảnh X8 – Bộ Bài Đỉnh Cao Trong Game Bài… — `x8market.quora.com`, raw #8 | 게임 불명·홍보형 |
| 9 | [Thùng Phá Sảnh - Một Trong Những Tổ Hợp Mạnh Nhất…](https://nanachan.tv/thung-pha-sanh/) | 게임 불명·미열람 |
| 10 | [Thùng Phá Sảnh Có Gì Mà Nhiều Tay Bài Săn Lùng Đến Vậy?](https://ambauto.co/thung-pha-sanh/) | 게임 불명·미열람 |

1번은 완성된 flop flush, 4번은 flush draw 글이다. **검색어와 본문 주제가 정확히 맞지 않는 상위 결과**가 확인된다. 이를 근거로 새 글을 만들기보다 기존 족보 글에서 straight flush·flush·flush draw를 명료하게 구분하는 것이 먼저다.

### 3-8. `sảnh rồng`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Sảnh Rồng](http://sanhrong.com/sanh-rong.tag) | 서비스·게임명, 세부 미판정 |
| 2 | [Sảnh Rồng ĐỒ THẾ GIỚI, Trận Đấu Như Mơ…](https://www.youtube.com/watch?v=1OAClh3DMFk) | 영상·세부 미판정 |
| 3 | [sảnh rồng trong mậu binh - Apps on Google Play](https://www.mgisc.com/review?name=sảnh-rồng-trong-mậu-binh) | 다른 게임·앱 표방 |
| 4 | [Sảnh rồng là một thuật ngữ trong poker có ý nghĩa](https://rapidapi.com/fggamebaidoithuong/api/sanh-rong-la-mot-thuat-ngu-trong-poker-co-y-nghia-88jg8w) | 포커 키워드 랜딩 |
| 5 | [Bạn đã bao giờ thấy một sảnh rồng trong một ván bài chưa?](https://www.reddit.com/r/poker/comments/1my219f/have_you_ever_seen_a_royal_flush_in_a_game/?tl=vi) | 포커 토론·번역 |
| 6 | [sảnh rồng trong tiến lên miền nam](https://testonline.cep.edu.vn/truy-cap/sảnh-rồng-trong-tiến-lên-miền-nam/) | 다른 게임·앱 표방 |
| 7 | [tải game đánh bài sảnh rồng](https://mbbank-jcb100nhahang.cc-c.vn/truy-cap/tải-game-đánh-bài-sảnh-rồng/) | 앱 표방 |
| 8 | [Tài xỉu Sảnh rồng và những điều cần biết](https://tktg.vn/casino/tai-xiu-sanh-ab8aa-rong/) | 다른 게임 |
| 9 | [chơi tá lả sảnh rồng](https://www.mgisc.com/article?post=chơi-tá-lả-sảnh-rồng) | 다른 게임·앱 표방 |
| 10 | [sảnh rồng tiến lên miền nam](https://dayhoc.hoccunggaia.edu.vn/huong-dan/sảnh-rồng-tiến-lên-miền-nam/) | 다른 게임·앱 표방 |

단독 헤드로 홀덤 로열 플러시 글을 만들 근거가 약하다. 5번에는 실제 이용자의 경험담이 있지만 **진술의 사실성·발생 빈도는 검증하지 않았다.** 번역된 토론을 현지 고유 용례로 집계하지 않는다.

### 3-9. `cù lũ`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Trong cờ cù lũ có những nước đi mà AI…](https://www.reddit.com/r/backgammon/comments/1jz5rzi/are_there_moves_in_backgammon_that_ai_cant_really/?tl=vi) | 백개먼·비포커 |
| 4 | Kết quả tìm kiếm cho từ khoá “cù lũ là gì…” — `moitruongxaydungvn.vn/tim-kiem.html`, raw #4 | 키워드 삽입형 검색 URL |
| 5 | Ai có bài thắng trong Texas Hold'em… — `google.com/goto`, raw `cù lũ#5` | 포커 질의·403 |
| 6 | [Theo bạn, thứ hạng bài nào đã mang lại…](https://www.reddit.com/r/poker/comments/1qbah1m/which_hand_rank_do_you_think_has_won_you_the_most/?tl=vi) | 포커 토론 |
| 7 | [Cù Lũ gặp Cù Lũ！！！ Bạn tránh được không?](https://www.youtube.com/shorts/a-oCs0KodBU) | 포커 영상 |
| 8 | [Nếu bạn có 2 đôi trong các lá bài chung…](https://www.reddit.com/r/poker/comments/1in09uu/if_you_have_2_pairs_in_the_community_cards_is/?tl=vi) | 포커 규칙 토론·직접 열람 |
| 9 | [Khám phá sức mạnh cù lũ poker…](https://formula55.bet/vi-vn/cu-lu-poker/) | 홍보형·유형만 |

원자료에는 organic 7건이다. 8번은 보드의 두 페어와 홀카드 한 장으로 풀하우스가 되는지 묻는다. 이는 **정의 다음에 best-five 예시가 필요한 직접적인 독자 질문**이다. PAA와는 별개다.

### 3-10. `royal flush`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Significato di royal flush in inglese](https://dictionary.cambridge.org/it/dizionario/inglese/royal-flush) | 사전·카드 의미 확인 |
| 2 | [Royal Flush là gì? Ý nghĩa và luật poker](https://pokerqz.com/vi/tools/glossary/royal-flush) | VI 용어 해설 |
| 3 | [Royal Flush](https://play.google.com/store/apps/details?id=com.davidbarile.royalflush&hl=vi) | 앱·내용 미확정 |
| 4 | Cocktail Royal Flush — `google.com/goto`, raw #4 | 음료·목적지 406 |
| 5 | [Royal flush Vector](https://www.magnific.com/vn/vector/royal-flush) | 이미지·내용 미확정 |
| 6 | [Playing Cards Royal Flush](https://www.pinterest.com/ideas/playing-cards-royal-flush/905278310518/) | 카드 이미지 |
| 7 | [Royal Flush - Vipershawty](https://open.spotify.com/intl-vi/track/2lqlb9o6cDghtX57s6jF0x) | 음악 |
| 8 | [Royal Flush Board Game Café](https://www.facebook.com/p/Royal-Flush-Board-Game-Café-61577500328138/) | 카페 |
| 9 | [Hình ảnh Royal flush](https://www.magnific.com/vn/hinh-anh-vector-mien-phi/royal-flush) | 이미지·내용 미확정 |
| 10 | [Royal Flush – DPZ](https://open.spotify.com/intl-vi/album/1EYEBSmkxyrNI1OJEDXM07) | 음악 |

Knowledge graph는 존재하지만 그 내용을 규칙 근거로 사용하지 않았다. 단독 헤드의 교육 의도는 혼합이며, 족보 글의 로열 설명 앵커가 적절한 출발점이다.

### 3-11. `tứ quý`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 6 | [tứ quý nghĩa là gì?](https://loigiaihay.com/tu-dien-tv/tu-quy-e4UbyPrwFhyoH.html) | 사전·사계절/식물 의미 |
| 8 | [CÁCH CHƠI MAI TỨ QUÍ ĐÓN XUÂN](https://www.youtube.com/watch?v=SPenJMRvy2U) | 식물 영상 |
| 9 | [chanh tứ quý](https://thanhnien.vn/chanh-tu-quy-tags1029360.html) | 식물 뉴스 |
| 10 | XOÀI TỨ QUÝ TÂY NINH… — `facebook.com/thegioinongsan.net`, raw #10 | 농산물 |
| 11 | [“Tứ Quý” Tùng Cúc Trúc Mai…](https://www.dnse.com.vn/senses/tin-tuc/tu-quy-tung-cuc-truc-mai-va-khat-vong-kien-tao-di-san-truong-ton-33643430) | 문화·상품 관련 기사 |
| 12 | [Độc đáo bình sen tứ quý](https://baohaiphong.vn/doc-dao-binh-sen-tu-quy-408876.html) | 공예 기사 |
| 13 | [Nghệ thuật đắp tứ quý Tùng, Cúc, Trúc, Mai](https://www.youtube.com/watch?v=c4dZjn6PKHs) | 공예 영상 |
| 14 | [Tứ Quý Hà Nội](https://zingmp3.vn/album/Tu-Quy-Ha-Noi-Various-Artists/ZWZAOD0O.html) | 음악 |

**0/10.** 사전 원문도 열어 확인했으며 해당 페이지는 카드의 포카드를 설명하지 않았다. bare `tứ quý` 2,900은 L-B 우선순위 계산에서 제외한다.

### 3-12. `kicker là gì`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Đang tìm hiểu cách kicker hoạt động trong poker](https://www.reddit.com/r/poker/comments/1qz0eln/trying_to_learn_how_kickers_work_in_poker/?tl=vi) | 포커 토론·직접 열람 |
| 2 | [Non-kicker là gì?](https://dictionary.zim.vn/anh-viet/non-kicker) | 일반 사전 |
| 3 | [Dốc nhảy (kicker) (Kicker Ramp) là gì?](https://wetrek.vn/bai-viet/doc-nhay-kicker-la-gi.htm) | 스포츠 시설 |
| 4 | [Kicker và Đội phòng thủ/Đội đặc biệt](https://www.reddit.com/r/DynastyFF/comments/1k3o7jy/kickers_and_defensespecial_teams/?tl=vi) | 미식축구 |
| 5 | [“Here's the kicker” có nghĩa là gì?](https://vi.hinative.com/questions/16081463) | 영어 관용어 |
| 6 | […kèo thơm cho một kicker nghĩa…](https://www.reddit.com/r/fantasyfootball/comments/186xywg/basic_question_but_what_does_it_mean_to_have_a/?tl=vi) | 미식축구 |
| 8 | […cách thức hoạt động của kicker trong Hold'em](https://www.reddit.com/r/poker/comments/85shiy/a_question_about_how_kickers_work_in_holdem/?tl=vi) | 포커 토론·직접 열람 |
| 9 | [kicker trong bai poker - Apps on Google Play](https://maharah.edu.sa/page?name=kicker-trong-bai-poker) | 포커 키워드·앱 표방 |
| 10 | [Top-kicker tiếng Trung là gì?](https://dictionary.zim.vn/anh-trung/top-kicker-tieng-trung-la-gi) | 사전 |
| 11 | [Ngày tập chân Tuần 8…](https://www.reddit.com/r/fantasyfootball/comments/1odiu2l/leg_day_week_8_how_to_actually_use_these_kicker/?tl=vi) | 미식축구 |

1번의 실제 질문은 보드 `3 5 8 J K`, 홀카드 `3 K`와 `3 Q`를 키커 문제로 오해한다. 답변의 핵심은 먼저 **KK33J라는 투페어와 33KQJ라는 원페어를 구분**하는 것이다. 우리 글도 “키커를 비교하기 전에 족보가 같은지 확인”을 앞세워야 한다.

### 3-13. `nuts là gì`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 4 | [“i'm nuts” có nghĩa là gì?](https://vi.hinative.com/questions/5177953) | 영어 표현 |
| 5 | [Deez Nuts có nghĩa là gì?](https://www.reddit.com/r/AskReddit/comments/pcy2vb/what_does_deez_nuts_mean/?tl=vi) | 속어 |
| 6 | [Cap Nuts Là Gì?](https://phukiensongtoan.com/cap-nuts-la-gi-cac-ung-dung-va-dac-diem/) | 체결 부품 |
| 7 | [“That's nuts” có nghĩa là gì?](https://vi.hinative.com/questions/2056661) | 영어 표현 |
| 8 | [“He's nuts.” có nghĩa là gì?](https://vi.hinative.com/questions/8314751) | 영어 표현 |
| 9 | [Hộp Mix Nuts - Hạt Dinh Dưỡng](https://nongsandungha.com/thuc-pham/hop-mix-nuts/) | 식품 |
| 10 | [Ngũ cốc, hạt, đậu và các loại quả hạch…](https://www.prb.co.id/en/news-detail/grains-seeds-beans-and-nuts-are-they-the-same) | 식품 해설·리디렉션 해제 |
| 11 | [“are you nuts” có nghĩa là gì?](https://vi.hinative.com/questions/19733472) | 영어 표현 |

**0/10.** AIO는 존재한다는 사실만 기록했다. AIO의 정의를 포커 의미의 근거로 사용하지 않았다.

### 3-14. `thùng phá sảnh và tứ quý cái nào lớn hơn`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Luật chơi Poker No-Limit Hold'em…](https://wikipoker.net/luat-choi-poker/) | VI 해설 |
| 2 | [Thùng Vs Cù Lũ](https://www.reddit.com/r/poker/comments/k1cbel/flush_vs_full_house/?tl=vi) | 포럼 |
| 3 | [Hướng dẫn đầy đủ về Luật chơi Poker Texas Hold'em](https://www.natural8.com/vi/blog/guide-to-texas-holdem-rules) | VI 사업자 해설 |
| 4 | [Bạn trúng tay bài thùng ở vòng turn?…](https://www.natural8.com/vi/blog/flush-poker-on-the-turn) | VI 사업자 해설·미열람 |
| 5 | [Tứ quý 6 so với Tứ quý 6 so với Sảnh Thùng](https://www.reddit.com/r/poker/comments/1nbe0sz/quads_vs_quads_vs_straight_flush/?tl=vi) | 포럼 |
| 6 | [Thứ tự Poker: Xếp hạng những hand bài mạnh nhất…](https://blog.ulifestyle.com.hk/article/pho88one/4222794/thứ-tự-poker-xếp-hạng-những-hand-bài-mạnh-nhất-trong-poker) | 블로그·403 |
| 7 | [Xếp hạng bài Poker](https://www.reddit.com/r/coolguides/comments/8yso0o/poker_hand_rankings/?tl=vi) | 포럼·도표 |
| 8 | [Sòng bạc - Poker](https://help.ggpoker.com/vi/article/Sòng-bạc---Poker-vi) | 카지노 도움말·유형만 |
| 9 | [Luật chơi poker cơ bản…](https://mmo4me.com/threads/luat-choi-poker-co-ban-thu-hang-suc-manh-hand-bai-trong-poker.415419/) | 포럼·열람 실패 |
| 10 | [Các loại trò chơi poker khác nhau…](https://www.natural8.com/vi/blog/different-types-of-poker-games) | 변형 소개·미열람 |

비교 질문은 명확하지만 상위 페이지가 그 질문만을 전담하지는 않는다. **족보 글의 직접 답변과 비교 글의 확장 설명을 앵커로 연결**할 여지가 있다.

### 3-15. `split pot`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [What is a Split Pot in Poker?](https://www.pokernews.com/poker-hands/split-pot.htm) | EN 해설·제휴 매체 |
| 2 | [What does it mean to have a Split Pot?](https://orangegames.helpshift.com/hc/en/4-governor-of-poker-3/faq/14-what-does-it-mean-to-have-a-split-pot-how-does-it-work/?s=gameplay) | 게임 앱 도움말·유형만 |
| 3 | [Split Pot](https://de.wikipedia.org/wiki/Split_Pot) | 독일어 위키 |
| 4 | [Giải thích đơn giản: Chia pot trong poker](https://www.reddit.com/r/explainlikeimfive/comments/5fe3w3/eli5_splitting_the_pot_in_poker/?tl=vi) | 포럼 |
| 5 | [How split pots work](https://replayhelp.casino.org/hc/en-us/articles/360001874493-How-split-pots-work) | 게임 도움말·유형만 |
| 6 | [split pot](https://en.wiktionary.org/wiki/split_pot) | 사전 |
| 7 | [Split pot \| Poker termen uitgelegd](https://www.onkpoker.nl/poker-termen/split-pot) | 네덜란드어 해설 |
| 8 | [All in split pot](https://www.pokerchipforum.com/threads/all-in-split-pot.100888/) | 포럼 |
| 10 | [What Does Chop Mean in Poker?](https://www.pokerskill.com/poker-glossary/chop-pot/) | 용어 해설·미열람 |

### 3-16. `hòa bài poker`

| 순위 | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Xếp hạng các bộ bài khởi đầu trong Texas Hold 'Em](https://www.winstar.com/blog/texas-hold-em-starting-hands-ranked/) | EN 시작 패 해설 |
| 2 | [Trong bài Poker, chất bài nào là chất cao nhất?](https://upswingpoker.com/what-is-the-highest-suit-in-poker/) | EN 문양·동률 해설 |
| 3 | [Luật chơi Texas Hold'em](https://www.clubpierrecharron.com/en/poker/poker-rules/the-rules-of-no-limit-texas-holdem) | EN 사업자 규칙 |
| 4 | [Ảo thuật cùng J Hướng dẫn tìm bộ set bài Poker](https://www.youtube.com/watch?v=h25xqHMGfLo) | 마술 영상·경계 |
| 5 | bài tây nhựa poker hồ chí minh… — `facebook.com/chippokerphinhpoker`, raw #5 | 실물 카드 판매 |
| 6 | [Bắt kẻ trộm tài sản của 'thần bài Poker thế giới'…](https://www.youtube.com/watch?v=4pZ6_ClTBCg) | 사건 뉴스 |
| 7 | [Bài poker cũng có thể ăn được à?…](https://www.youtube.com/shorts/_pZ6r9_ld1I) | 음식 영상 |
| 8 | [BÌNH THUẬN BẮT KẺ TRỘM KIM CƯƠNG…](https://www.youtube.com/watch?v=PKEK_gBXLLI) | 사건 뉴스 |
| 9 | [Tại Sao Giới Tinh Hoa Sợ Bức Tranh Này?…](https://www.youtube.com/watch?v=qVyOArL8Ok0) | 미술·영상 |

상위 세 리디렉션의 실제 본문은 영어다. “베트남어 동률 해설이 없다”는 전역 결론까지는 낼 수 없지만, **이 표본에서 직접 맞는 VI 해설이 약하다**는 판단은 가능하다.

### 3-17. PAA — 원문 20개

| 출현 헤드 | PAA 축어 | L-B 사용 |
|---|---|---|
| poker hand rankings | What is the rank of hands in poker? | 족보 개요 |
| 동일 | Why are 2 and 7 the worst hand? | 시작 패 의도·L-D |
| 동일 | Is a 7 and a 2 a good hand in poker? | 시작 패 의도·L-D |
| 동일 | What are the 10 best hands in poker? | 완성 패/시작 패 뜻을 먼저 구분 |
| cù lũ | Cù lũ trong poker là gì? | 족보 정의 FAQ |
| 동일 | Cù lũ tiếng Anh là gì? | full house 대응 |
| 동일 | Poker nghĩa là gì? | L-A 또는 L-F 정의 |
| 동일 | Flush trong poker là gì? | 족보 또는 비교 글의 정의 |
| tứ quý | Tứ quý là gì? | 단독 문맥 오염. 포커 PAA로 확정 불가 |
| 동일 | Tại sao lại gọi là Mai Tứ Quý? | 식물·제외 |
| 동일 | Tứ quý 1 nghĩa là gì? | 의미 불명·제외 |
| 동일 | 4 loại cây tứ quý là gì? | 식물·제외 |
| kicker là gì | Kicker là gì trong xây dựng? | 건설·제외 |
| nuts là gì | Nuts tiếng lóng là gì? | 일반 속어·제외 |
| 동일 | Nuts dịch sang tiếng Việt là gì? | 일반 번역·포커 질문으로 간주 금지 |
| 동일 | Nuts là quả gì? | 식품·제외 |
| 동일 | Nuts là gì trong tiếng Anh? | 일반 영어·포커 질문으로 간주 금지 |
| hòa bài poker | Làm cách nào để chia bài trong poker? | **카드 배분** 질문·팟 분할과 다름 |
| 동일 | Làm thế nào để chơi bài poker? | L-A 규칙 |
| 동일 | Bài nào trong Xì tố lớn nhất? | 게임 문맥 확인 필요 |

나머지 9개 SERP에는 PAA 항목이 기록되지 않았다. “PAA 없음”과 “관련 PAA 질문 확보”는 구분한다.

### 3-18. Related 원문 24개

| 헤드 | 원문 |
|---|---|
| thùng phá sảnh | Thùng phá sảnh là gì · Thùng phá sảnh Poker · Luật Poker · Cách chơi poker · Luật Poker thứ tự · Cách chơi poker cơ bản · Cách chia bài Poker · Thùng phá sảnh ăn bao nhiều chi |
| 비교 질문 | Thứ tự bài Poker · Luật Poker · Thùng phá sảnh Poker · Thùng với sảnh nào lớn hơn · Luật Poker cơ bản · Luật chơi poker 5 lá · Thùng phá sảnh là gì · Luật Poker 2 lá |
| split pot | Split pot poker · Poker split pot examples · Split-pot poker dq11 · Split pot cooking · Split Pot Yogurt · Poker split pot Calculator · Split pot hotpot · Split Pot beispiele |

`ăn bao nhiều chi`, `poker 5 lá`, `dq11`, cooking/yogurt/hotpot는 이번 홀덤 족보 글의 목표 질문에서 제외한다.

### 3-19. 특수 영역 집계

| 항목 | 원자료에서 직접 센 결과 |
|---|---|
| PAA | 6/15 SERP, 질문 20개 |
| Featured snippet | **기록 0/15**. 현재 Google 전체에서 없다는 뜻은 아님 |
| AI overview | `nuts là gì` 1/15. 내용은 근거로 사용하지 않음 |
| 영상 팩 | 3개 SERP, 영상 항목 11개 |
| `cù lũ` 영상 팩 | Facebook Thai Pham · Chuyện ma Chú 3 Duy · YouTube Việt Di Trú News · Facebook Cù Lũ Nhí — 4개 |
| `tứ quý` 영상 팩 | nhãn/mai/tứ quý 재배 관련 YouTube — 4개 |
| `split pot` 영상 팩 | Poker Pro Academy 2개 · truepokerdealer의 quarter 설명 1개 — 3개 |
| 이미지 영역 | `tứ quý`, `nuts là gì` |
| Local pack | `tứ quý`에서 업체 3개 |
| Knowledge graph | `royal flush`에서 1개 |
| Related | 3개 SERP, 항목 24개 |

영상 제목·팩 존재만 조사했다. 영상을 재생·검증한 것으로 표시하지 않는다.

## 4. 상위 원문 정독

### 4-1. 읽기 범위와 계수 방법

원문 페이지를 웹 열람 또는 읽기 전용 HTTP GET으로 열었다. 검색 결과 요약·AIO는 내용 판단에 쓰지 않았다. 같은 원문이 여러 헤드에 반복 출현하면 한 번 정독하고 해당 헤드에 연결했다.

- `분량`은 선택한 본문 DOM의 **공백 구분 토큰 수**다. 베트남어의 언어학적 단어 수가 아니다.
- `표/이미지/영상`은 본문 컨테이너의 HTML 요소 수다. 이미지 중복·퀴즈 UI·저자 사진이 포함될 수 있다.
- 제목 수는 비어 있지 않은 본문 H2/H3 기준이다. 저자·관련 글 등은 별도 표시했다.
- `미집계`를 0으로 바꾸지 않았다.
- 외부 제목의 축어 표본에서 `…`는 인용 생략이다. 뒤의 구조 설명은 한국어 요약이다.

### 4-2. 주요 원문: 구조·분량·편집 품질

| ID·원문 | H1/H2/H3 축어 표본 | 계수·구조·관찰 |
|---|---|---|
| **R1 [GLD](https://gldproducts.com/blogs/all/poker-hand-rankings)** | H1 `Poker Hand Rankings` / H2 `Poker Hands Ranked` / H3 `Lowest to Highest Value Hands`, `Unique Cases and Fun Facts` | 681토큰, H2 1·H3 2, 표0·이미지2·영상0. 낮은 순서부터 설명. wild card의 five of a kind를 조건부로 추가하여 항목 11개. 홀덤 10개 표와 그대로 동일시하면 안 됨. 최저 straight flush 오류는 §4-5 |
| **R2 [WPF](https://worldpokerfederation.org/poker/how-to-play-poker/poker-hand-rankings/)** | H1 `Poker Hand Rankings` / H2 `Poker hand rankings chart with odds` / H3 `Short Deck (Six Plus Hold’em)` | 2,051토큰, H2 8·H3 12, 표3·이미지20·영상0. 족보10개, 5장/7장 확률, 키커·동률, 예시, FAQ6, 다른 게임, 다운로드 자료. 베트남어 본문은 아님. 강한 비교 기준 |
| **R3 [Blair English](https://www.blairenglish.com/exercises/card_games/exercises/poker_hands/poker_hands.html)** | H1 `Types of poker hands exercise part 1` / H2 `Poker Hands: The best to the worst`, `Quiz:`, `Practice` | 2,922토큰, H2 3·H3 0, HTML 표24·이미지54·영상0. 실제 퀴즈 번호 12개. 표·이미지 다수는 학습 UI여서 족보표 24개라는 뜻이 아님. 영어 어휘 학습 목적 |
| **R4 [Sporting News](https://www.sportingnews.com/us/tsn/news/complete-poker-hand-rankings-texas-holdem-best-hands-worst/b13846244fa483a6690ae53f)** | H1 `Complete poker hand rankings…` / H2 `Texas Hold'em Game Structure` / H3 `Straight (1 in 132)` | 1,887토큰, H2 6·내용 H3 20, 저자 H3 1 별도. 표0·이미지1·영상0. 규칙→10개 목록→10개 확률 설명→시작 패→다른 게임. 확률 오류 확인. 게시 2025-03-20·수정 2025-04-23 |
| **R5 [Capitol](https://www.capitol-casino.com/poker-hand-ranking-the-best-hands-you-should-learn/)** | H1 `Poker Hand Ranking: The Best Hands You Should Learn` | 845토큰, 본문 H2/H3 **0**, 표0·이미지11·영상0. 10개 족보를 본문·이미지로 설명. 굵은 글씨를 H2로 오인하면 안 됨. 변형 설명 혼재 |
| **R6 [Gamblingzone](https://www.gamblingzone.com/uk/poker/hands/)** | H1 `Poker Hand Rankings` / H2 `What are Ties and Kickers?` / H3 `Absolute Value vs Relative Value of Poker Hands` | 원문 직접 열람. 덱→10개 족보→다른 게임→제휴 영역→키커→결론. 10개 족보 그림 존재. 본문 DOM 정량은 미집계. 키커 설명이 단순하고 광고 영역이 큼. 수정 표기 2026-06-24 |
| **R7 [AI Hay](https://ai-hay.vn/huong-dan-choi-poker-pN1UmIv_c5K)** | H1 `Hướng dẫn chơi poker` | 원문 열람. 답변 본문에 규칙·10개 족보·진행 단계가 묶임. 열람본에서 내용 H2/H3는 확인되지 않음. 독립적인 규칙 권위로 인용하지 않고 SERP 콘텐츠 형태만 평가 |
| **R8 [WinStar 최약 시작 패](https://www.winstar.com/blog/what-is-the-worst-hand-in-texas-hold-em-poker/)** | H1 `What Is the Worst Hand in Texas Hold ‘Em Poker` / H2 `Common Traits of Bad Starting Hands` / H3 `2. 8-2 Offsuit` | 914토큰, H2 6·H3 10, 표0·이미지0·영상0. 나쁜 시작 패 항목 6개, 공통 특성·대응. 완성 패 순위 글과 다른 의도 |
| **R9 [Skrill 변형 소개](https://www.skrill.com/en/skrill-news/poker/five-types-of-poker-that-bring-a-new-dimension-of-fun/)** | H1 `Five types of poker that bring a new dimension of fun` / H3 `1. Texas Hold'em`, `2. Omaha` | 822토큰, 표0·이미지6·영상0. 홀덤·오마하·스터드·드로·High Low Chicago 5종. 변형/결제 홍보 문맥은 유형만 기록. 족보 전담 경쟁 글로 세지 않음 |
| **R10 [Natural8 문양](https://www.natural8.com/vi/blog/poker-suits-explained)** | H1 `Giải thích về lịch sử và nguồn gốc của chất bài poker` / H2 `Chất bài trong các trò chơi bài khác` | 1,630토큰, H2 5·H3 0, 표0·이미지3·영상0. 역사→현대 문양→포커에서의 역할→다른 게임→결론. 쇼다운 강약과 절차상 문양 사용을 구분함 |
| **R11 [Natural8 규칙](https://www.natural8.com/vi/blog/guide-to-texas-holdem-rules)** | H1 `Hướng dẫn đầy đủ về Luật chơi Poker Texas Hold'em` / H2 `Vòng cược` / H3 `Blind (Cược mù)` | 3,612토큰, H2 8·H3 11, 표0·이미지5·영상0. 개요·학습 이유·버튼/블라인드·4라운드·승자·족보·전략·FAQ. FAQ H3 2개. 0장 홀카드 사용 설명 있음 |
| **R12 [VI Wikipedia](https://vi.wikipedia.org/wiki/Texas_hold_%27em)** | H1 `Texas hold 'em` / H2 `Luật chơi` / H3 `Bộ bài` | 5,847토큰, H2 7·H3 17, 표1·이미지3·영상0. 목표·역사·인기·규칙·8단계 진행·변형·참고문헌. 긴 역사/참고문헌까지 포함한 분량. straight flush 정의의 조건 누락 확인 |
| **R13 [VPS Gaming](https://vpsgaming.net/blogs/poker-lesson/15329329-nh-ng-khai-ni-m-c-b-n-trong-poker)** | H1 `Những khái niệm cơ bản trong Poker` / H2 `Luật chơi:` | 679토큰, H2 1·H3 0, 표1·이미지1·영상0. 족보10개를 낮은 순서부터 표로 정리. Royal은 `Sảnh chúa`. 2014 글·2015 홍보 흔적. 오래됐다는 이유만으로 기본 족보를 오류 처리하지 않음 |
| **R14 [WikiPoker 규칙](https://wikipoker.net/luat-choi-poker/)** | H1 `Luật chơi Poker No-Limit Hold’em cập nhật mới nhất` / H2 `Luật chơi Poker cơ bản` / H3 `Showdown…` | 2,398토큰, H2 4·H3 5, 표0·이미지4·영상0. 규칙·라운드·족보·행동 용어. 0~2장 홀카드 사용 설명. 같은 사이트의 R15와 royal/SF 번역 대응이 다름 |
| **R15 [WikiPoker hands](https://wikipoker.net/poker-hands/)** | H1 `Poker Hands là gì?…` / H3 `Có bao nhiêu poker hands?` | 1,180토큰, H2 5·H3 6, 표0·이미지4·영상0. 정의·전략·일반 질문·FAQ3·결론. 동률 설명이 최고 키커 한 장에서 멈추는 문제 확인 |
| **R16 [Natural8 flush](https://www.natural8.com/vi/blog/how-to-play-a-flush-in-poker)** | H1 `Cách chơi tay bài thùng…` / H2 `Thùng (flush) trong poker là gì?` / H3 `…Xem xét tỷ lệ pot odds…` | 2,291토큰, H2 5·H3 5, 표0·이미지4·영상0. 정의·강도·확률·드로 전략5개. 5장 빈도와 드로 완성 확률을 다룸. Short Deck 제거 랭크 오류 확인 |
| **R17 [Natural8 flopped flush](https://www.natural8.com/vi/blog/how-to-play-a-flopped-flush)** | H1 `Cách chơi khi có flush (thùng) ở vòng flop` / H2 `Xem xét vị trí của bạn` / H3 `Check-tăng cược hay check-call?` | 1,345토큰, H2 4·H3 4, 표0·이미지1·영상0. flop 확률·포지션·체크레이즈/체크콜·상대 유형. 0.8% 근사 자체는 오류로 보지 않음 |
| **R18 [GGPoker flush draw](https://ggpoker.com/vi/blog/the-beginners-guide-series-how-to-play-a-flush-draw/)** | 페이지 H1 `GGPOKER`; 기사 제목은 H2 `…Cách Chơi Bài Chờ Thùng` / H2 `Bài Chờ Mạnh`, `Bài Chờ Yếu` | 웹 열람본 본문 확인. 기사 제목 자체가 H2. 강한/약한 드로·주의사항·결론. 직접 GET은 404였지만 웹 도구의 원문 열람본은 확보. 현재 HTTP 상태와 읽은 내용은 구분 |
| **R19 [WikiPoker 족보](https://wikipoker.net/thu-hang-poker-hand/)** | H1 `Giải thích thứ hạng Poker Hand…` / H2 `Cách ghi nhớ…` / H3 `Royal Flush` | 2,213토큰, H2 5·H3 20, 표1·이미지30·영상0. 족보10개·암기법·확률표·FAQ5·결론. 카드 예시·동률 설명이 있으나 확률과 odds against 혼동 |
| **R20 [WikiPoker full house](https://wikipoker.net/cu-lu-la-gi-poker/)** | H2 `Cù Lũ (Full House) là gì trong Poker?` / H3 `Quy tắc so bài…` | 1,516토큰, H2 6·H3 4, 표0·이미지6·영상0. 정의·강약·동률 예시·Mậu Binh 구분·전략·Q&A. 읽은 비교 예시는 타당. 전략 표현만으로 수학적 오류라 판정하지 않음 |
| **R21 [Thế Giới Poker full house](https://thegioipoker.net/cach-choi-poker/thu-tu-bai-poker/cu-lu/)** | H1 `Cù lũ trong Poker` / H2 `Hai cù lũ gặp nhau thì ai thắng` / H3 `Cù lũ thua những gì?` | 열람본 H2 6·H3 9, 표6·이미지6, FAQ8. 5장/7장 확률 분리와 비교표가 강점. 보드 풀하우스 예외를 둘로 한정한 오류. 수정 표기 `10/08/2026` |
| **R22 [PokerQz royal](https://pokerqz.com/vi/tools/glossary/royal-flush)** | H1/H2 `Royal Flush` / H3 `Định nghĩa cơ bản`, `Tình huống cụ thể`, `Những điểm quan trọng` | 311토큰, H2 3·H3 4, 표0·이미지0·영상0. 정의·상황·중요점·사용 예시 뒤 퀴즈 CTA. 짧은 정의형 페이지 |
| **R23 [PokerVietnam 족보](https://pokervietnam.net/luat-poker/thu-tu-bai-poker/)** | H1 `Thứ tự bài Poker: 10 hạng bài từ mạnh đến yếu` / H3 `Sám / Bộ ba (Three of a Kind)` | 웹 원문 열람. H2 7·H3 10, 족보 표·카드 예시·키커 설명·FAQ. `Thùng phá sảnh Hoàng gia` 표기도 확인. 직접 GET 403과 웹 열람 성공을 구분 |
| **R24 [Natural8 kicker](https://www.natural8.com/vi/blog/what-is-a-kicker-in-poker)** | H1 `Kicker trong poker là gì?` / H3 `Ví dụ 2…` | 1,089토큰, 내용 H2 6+빈 H2 1·H3 3, 표0·이미지2·영상0. 정의·작동·예시3·오해·의미·결론. 보드 풀하우스 무조건 분할 오류 |
| **R25 [PokerNews split](https://www.pokernews.com/poker-hands/split-pot.htm)** | H1 `Split Pot in Poker: What are Split Pots & How do They Work?` / H2 `Split Pot FAQs` / H3 `Split Pot - Identical Hands` | 1,775토큰, H2 5·H3 3, 표0·이미지3·영상1. 동률3유형·퀴즈·칩 분배 예시·FAQ5. odd chip 방향은 명확하지 않지만 하우스 룰 차이를 언급 |
| **R26 [ONK split](https://www.onkpoker.nl/poker-termen/split-pot)** | H1 `Split pot` / H2 `Waneer is het een split pot in poker?`, `Hoe wordt een split pot verdeeld?` | 404토큰, 내용 H2 2+CTA H2 1, 저자 H3 1. 표0·이미지6·영상1. 동률 설명이 지나치게 단순. 보드 스트레이트 반례 확인 |
| **R27 [Upswing 문양](https://upswingpoker.com/what-is-the-highest-suit-in-poker/)** | H1 `What is the Highest Suit in Poker?` / H2 `Do suits break ties in poker hands?` | 원문 직접 열람. 내용 H2 9, 비교/절차 표1. 쇼다운·버튼 추첨·스터드·odd chip을 구분. 같은 예시에 3♥가 양쪽 홀카드로 중복됨 |
| **R28 [Club Pierre Charron 규칙](https://www.clubpierrecharron.com/en/poker/poker-rules/the-rules-of-no-limit-texas-holdem)** | H1 `THE RULES OF NO LIMIT TEXAS HOLD'EM` / H2 `1. THE AIM OF THE GAME`, `3. WINNING HAND` | 790토큰, H2 9·H3 0, 표1·이미지0·영상0. 게임 목표·라운드·승자·족보. 0~2장 홀카드 사용과 같은 5장일 때 분할 설명 |
| **R29 [WinStar 시작 패](https://www.winstar.com/blog/texas-hold-em-starting-hands-ranked/)** | H1 `Texas Hold ‘Em Starting Hands Ranked` / H2 `Importance of Starting Hands` / H3 `Pocket Aces (AA)` | 1,500토큰, H2 11·H3 20, 표0·이미지0·영상0. 강도별 시작 패·포지션·게임 조건·FAQ. `hòa bài` 검색에 나왔지만 동률 전담 글은 아님 |
| **R30 [PokerStars nuts](https://www.pokerstars.com/poker/games/rules/hand-rankings/the-nuts-and-blockers/)** | H1 `The Nuts and Blockers in Poker` / H2 `What Is the Nuts in Poker?` / H3 `Example one: a paired board` | 보충 영어 원문. 정의·블로커·보드 예시3·실전 의미·FAQ4. 일반어 nuts와 포커 nuts 분리용. VI SERP 상위 글로 계산하지 않음 |
| **R31 [PokerNews nuts](https://www.pokernews.com/poker-hands/nuts.htm)** | H1 `The Nuts in Poker: Definition and Examples of Nutted Hands` | 보충 영어 원문. 넛·effective nuts·nut straight/flush/full house·flop/river·퀴즈·FAQ 구조. 전략 확장과 정의/보드 읽기의 경계를 확인하는 자료 |

### 4-3. 헤드별 정독 연결

`R`은 위 정독 ID다. **보충 원문을 원래 상위 10위에 있었던 것으로 바꾸지 않았다.**

| 헤드 | raw에서 읽은 관련 원문 | 대체·보충 | 정독 충족 해석 |
|---|---|---|---|
| poker hands | R1·R2·R3 | — | 실제 해설 3편 |
| bài poker | R7·R8, R9는 변형 의도 확인 | R11 | 홀덤 관련 해설 3편 확보, 보충 1 포함 |
| thứ tự bài poker | R10, Reddit 암기 질문 | R19·R23 | 실제 해설 3편, 보충 2 포함 |
| poker hand rankings | R4·R5·R6 | — | 실제 해설 3편 |
| thùng phá sảnh | R11·R12·R13·R14·R15, 추가 R16 | — | 요구 3~5편 충족, 관련 추가 열람 |
| thùng phá sảnh là gì | R17·R18 | R15·R19 | 관련 해설 4편, 원래 상위에서는 2편 |
| sảnh rồng | Reddit royal 경험담 | R12·R19·R22 | 별칭 대조 3편. 단독 헤드 상위 해설 3편은 확보 불가 |
| cù lũ | Reddit 보드 두 페어 질문 | R19·R20·R21 | 실제 해설 3편을 대체 확보 |
| royal flush | R22·Cambridge | R2·R19 | 사전과 해설 3편. 원래 상위 해설은 R22 중심 |
| tứ quý | 비포커 사전 원문 | R12·R19·R23 | 의미 대조만. **오염 헤드의 상위 포커 해설 3편은 없음** |
| kicker là gì, 경량 | Reddit 1·8번 | R24 | 원문 토론 2편+해설 1편. 상위 독립 해설 2편 조건과는 구분 |
| nuts là gì, 경량 | 포커 원문 없음 | R30·R31 | 보충 포커 해설 2편. 해당 VN SERP 상위 2편으로 세지 않음 |
| 비교 질문, 경량 | R14·R11 | R19 | 상위 실제 해설 2편 충족 |
| split pot, 경량 | R25·R26 | TDA 규정 | 상위 실제 해설 2편 충족 |
| hòa bài poker, 경량 | R27·R28, 추가 R29 | — | 상위 관련 해설 2편 충족 |

### 4-4. 열람 실패와 대체

| 실패 대상 | 확인한 실패 상태 | 대체·처리 |
|---|---|---|
| Google goto: poker hands #3 | HTTP 403 | R1·R2·R3로 정독 |
| Google goto: poker hands #6 | HTTP 402 | 별명 글의 품질 판정 안 함 |
| Google goto: bài poker #1 | HTTP 402 | R8·R29로 시작 패 의도만 확인 |
| bài poker #2 → wikiHow | Client Challenge·JS 필요 | R11 규칙 원문으로 대체 |
| Google goto: bài poker #3 | HTTP 455 | 목적지 추정 안 함 |
| Google goto: cù lũ #5 | HTTP 403 | R20·R21로 대체 |
| Google goto: royal flush #4 | HTTP 406 | raw의 cocktail 유형만 기록 |
| AI Hay의 tứ quý/설명문 혼합 페이지 | 원문 fetch 실패 | 정확성 판정 제외, R19·R23 대체 |
| uLifestyle 족보 글 | HTTP 403 | R19·R23 대체 |
| bffx 족보 글 | 접근 실패 | 본문·오류 판정 제외 |
| MMO4ME·Tudomuaban 해당 글 | 웹 원문 접근 실패 | R11~R15의 성공 원문 사용 |
| Natural8 kicker | 웹 도구 첫 요청 timeout | 읽기 전용 GET 성공, 실패 상태 해소 |
| Upswing | 첫 DOM 선택자에 본문 없음 | 웹 원문 재열람 성공, 실패 상태 해소 |
| Thế Giới·PokerVietnam | 직접 GET 403 | 웹 도구 원문 열람 성공. 내용 판정은 확보한 열람본 기준 |
| GGPoker flush draw | 직접 GET 404 | 웹 원문 열람본 확보. 현재 직접 HTTP 상태는 별도 기록 |

실패한 페이지를 “오류가 많은 글”, “AI 글”, “불법 사이트”로 판정하지 않았다.

### 4-5. §13 오류 — 직접 검산한 지적

**확신 높음**은 원문 문장과 반례·조합 계산이 직접 대응하는 경우다. 생략·번역 차이·근사치는 별도로 구분했다.

| 원문·축어 | 판정 | 검산·정답 |
|---|---|---|
| R1 GLD: `the weakest straight flush, 2♠-3♠-4♠-5♠-6♠` | **규칙 오류·높음** | 최저는 A♠2♠3♠4♠5♠, 5-high SF. 인용한 조합은 6-high로 더 강함. 5장 평가기로 각각 `(SF,5)`, `(SF,6)` 확인 |
| R4 Sporting News: `Straight (1 in 132)` | **확률 오류·높음** | 정확히 5장, SF 제외 스트레이트는 10,200/2,598,960 = **0.3924647%, 1/254.8**. 7장 중 best five 기준 약 4.62%와도 다름 |
| R19 WikiPoker 확률표: `1 trên 1.36`, `1 trên 0.99` | **확률/odds 표기 오류·높음** | 표의 원페어·하이카드 값. 정확한 확률은 **42.2569%, 50.1177%**. `1 in`은 각각 약 **2.3665**, **1.9953**. 1.3665·0.9953은 odds against 쪽 값. 1/0.99는 100% 초과 |
| R15 WikiPoker: `Nếu kicker cũng trùng, pot sẽ được chia đều (split pot).` | **설명 누락으로 잘못된 판정 유도·높음** | 앞 문맥이 가장 높은 키커 한 장 비교에 그침. 보드 A♠ K♦ 8♣ 4♥ 2♠, A♥Q♣ 대 A♦J♣: 둘 다 최고 키커 K지만 **AAKQ8 > AAKJ8**. 다음 키커까지 비교해야 함 |
| R24 Natural8: `nếu cù lũ được tạo hoàn toàn từ bài chung, pot sẽ được chia đều` | **무조건화 오류·높음** | 보드 9♠9♥9♦3♠3♥, 홀카드 3♦3♣은 **33339 포카드**. 보드의 99933 풀하우스를 이김. 보드가 풀하우스여도 각자의 best five 재평가 필요 |
| R21 Thế Giới: `chỉ hai thứ phá được thế hòa` | **예외 목록 누락·높음** | 본문은 더 높은 포켓페어·트리플 랭크 마지막 장의 두 경우만 제시. 위 보드에서 **보드 페어와 같은 33**도 포카드를 만들어 무승부를 깸 |
| R26 ONK: `ongeacht de specifieke kaarten in hun handen` | **보드 스트레이트 일반화 오류·높음** | 문맥은 보드 5-6-7-8-9에서 홀카드와 무관하게 분할한다는 설명. 보드 5♠6♦7♣8♥9♠, T♣2♦는 **T-high**, A♥K♣는 **9-high**. T를 가진 쪽 승리 |
| R12 Wikipedia: `Straight Flush (thùng phá sảnh): 5 lá bài có giá trị tăng dần liên tiếp` | **정의 조건 누락·높음** | 정의 문장에 **같은 문양** 조건이 빠짐. 연속성만으로 SF가 되지 않음. 혼합 문양 5-6-7-8-9는 straight |
| R16 Natural8: `từ 2 đến 6` | **Short Deck 덱 설명 오류·높음** | 해당 문맥은 제거하는 랭크. 2~6을 제거하면 52−5×4=**32장**. 통상 6+의 36장은 2~5 제거: 52−4×4=36. 홀덤 본문과 예외란을 분리 |
| R27 Upswing: `A♥3♥`, `K♥3♥` | **예시 카드 중복·높음** | 같은 보드에서 맞붙는 두 플레이어 예시에 3♥가 양쪽에 등장. 서열 취지는 옳지만 단일 덱의 동시 핸드 예시로 불가능. 한쪽 보조 하트를 다른 미사용 하트로 교체해야 함 |

근거 원문: [GLD](https://gldproducts.com/blogs/all/poker-hand-rankings), [Sporting News](https://www.sportingnews.com/us/tsn/news/complete-poker-hand-rankings-texas-holdem-best-hands-worst/b13846244fa483a6690ae53f), [WikiPoker 확률표](https://wikipoker.net/thu-hang-poker-hand/), [WikiPoker 키커 문맥](https://wikipoker.net/poker-hands/), [Natural8 kicker](https://www.natural8.com/vi/blog/what-is-a-kicker-in-poker), [Thế Giới full house](https://thegioipoker.net/cach-choi-poker/thu-tu-bai-poker/cu-lu/), [ONK](https://www.onkpoker.nl/poker-termen/split-pot), [VI Wikipedia](https://vi.wikipedia.org/wiki/Texas_hold_%27em), [Natural8 flush](https://www.natural8.com/vi/blog/how-to-play-a-flush-in-poker), [Upswing](https://upswingpoker.com/what-is-the-highest-suit-in-poker/).

#### 확률 검산

52장·조커 없음·**정확히 5장을 무작위로 받는 표본**이다. 각 족보는 상위 족보를 제외한 배타적 분류다.

| 족보 | 조합 수 | 확률 |
|---|---:|---:|
| Royal flush | 4 | 0.0001539077% |
| Straight flush, royal 제외 | 36 | 0.0013851695% |
| Four of a kind | 624 | 0.0240096038% |
| Full house | 3,744 | 0.1440576230% |
| Flush, SF 제외 | 5,108 | 0.1965401545% |
| Straight, SF 제외 | 10,200 | 0.3924646782% |
| Three of a kind | 54,912 | 2.1128451381% |
| Two pair | 123,552 | 4.7539015606% |
| One pair | 1,098,240 | 42.2569027611% |
| High card | 1,302,540 | 50.1177394035% |
| **합계** | **2,598,960 = C(52,5)** | **100%** |

검산식 예:

- Full house: `13 × C(4,3) × 12 × C(4,2) = 3,744`.
- Flush: `4 × [C(13,5) − 10] = 5,108`.
- Straight: `10 × (4⁵ − 4) = 10,200`.
- One pair: `13 × C(4,2) × C(12,3) × 4³ = 1,098,240`.
- `1 in N`의 N은 `전체/성공`; odds against는 `(전체−성공)/성공`. 둘 사이에는 1 차이가 있다.

보드 반례는 각 플레이어의 7장에서 `C(7,5)=21`개 조합을 모두 평가했다. 같은 카드가 두 번 등장하는지도 검사했다. 솔버 전략 결과를 규칙 판정처럼 사용하지 않았다.

#### 오류로 확정하지 않은 항목

| 항목 | 처리 |
|---|---|
| Natural8의 suited 홀카드에서 flop flush 약 0.8% | `C(11,3)/C(50,3)=0.8418367%`이므로 반올림 범위. SF 포함 여부는 표본 정의로 구분 |
| Natural8의 9-out draw가 river까지 약 34.97% | `1−C(38,2)/C(47,2)=34.9676226%`로 타당 |
| GGPoker의 turn 미완성 후 river 18% | 단순 9-out 모델은 9/46=19.5652%. **수치가 거친 것은 확인**되나 할인 outs·근사 의도를 명시하지 않아 치명적 규칙 오류와 같은 등급으로 세지 않음 |
| Natural8 문양 글의 문양 순서 | 쇼다운 승패와 절차를 원문에서 구분한다. 제목만 보고 “문양으로 승자를 정한다”는 오탐 금지 |
| GLD의 five of a kind | wild card 조건을 명시. 표준 홀덤에 적용하면 안 되지만 조건부 설명 자체를 오류로 판정하지 않음 |
| PokerNews의 odd chip | 하우스 룰 차이를 명시. 방향이 불명확하다는 편집 약점이며, 모든 게임에 틀렸다고 단정하지 않음 |
| Reddit 번역의 이상한 족보 표현 | 번역 표시·댓글 수정·농담이 섞임. 베트남어 원저자의 전문성 오류로 전가하지 않음 |
| 오래된 VPS 글 | 연식은 확인하되, 기본 족보가 틀렸다는 근거는 아님 |
| “항상 베팅”, “강한 풀하우스는 폴드하기 어렵다” 등 | 구체적인 스택·레인지·액션이 없으면 솔버 오차를 계산할 수 없음. **확신 낮음**, 오류 목록 제외 |

### 4-6. 번역어 빈도

고정 표본은 **R10~R17 중 8편과 R24**, 즉 Natural8 규칙·키커·문양·flush·flopped flush, WikiPoker hands·규칙, VI Wikipedia, VPS의 **VI 본문 9편**이다. 비교 가능한 본문 추출이 완료된 표본만 사용했다.

NFC 정규화·대소문자 무시·문자 경계로 셌다. 합성어 안의 `thùng`, `sảnh`도 센다. 그러므로 아래 행은 서로 배타적이지 않으며 합산하지 않는다.

| 표기 | 등장 문서/9 | 문자열 출현 | 해석 |
|---|---:|---:|---|
| thùng | 9 | 108 | flush 설명 글의 반복이 큰 비중 |
| sảnh | 9 | 38 | straight와 합성 명칭 모두 포함 |
| cù lũ | 7 | 15 | full house의 안정적인 대응 |
| thùng phá sảnh | 7 | 11 | royal 또는 SF로 대응이 갈림 |
| royal flush | 6 | 9 | 영어 병기가 실제로 사용됨 |
| sảnh rồng | 2 | 6 | VI Wikipedia·WikiPoker hands에서 royal 의미 |
| sảnh chúa | 1 | 1 | VPS의 royal 표기 |
| sám cô | 1 | 1 | 표본에서는 VI Wikipedia |
| xám cô | 0 | 0 | 표본 미등장이지 베트남어 전체에서 미사용이라는 뜻은 아님 |
| bộ ba | 6 | 22 | three of a kind의 설명형 표기로 널리 등장 |
| bài cao | 8 | 26 | high-card 및 카드 비교 문맥 |
| mậu thầu | 0 | 0 | 이 9편 밖 R19·R23에서는 확인됨 |
| thùng phá sảnh hoàng gia | 0 | 0 | 이 표본 밖 R23에서는 확인됨 |
| tố | 6 | 21 | `yếu tố`, `xì tố`까지 포함된 문자열 값 |
| theo | 8 | 38 | 일반 전치사·`tiếp theo` 포함 |
| bỏ bài | 4 | 9 | fold 계열 표현 |
| mù | 3 | 14 | 블라인드 설명 문맥 |
| xì tố | 2 | 3 | 포커의 넓은 명칭으로도 등장 |

**행동어는 문맥을 다시 세었다.** `tố` 21회 중 포커 행동을 가리키는 출현은 **7회/2문서**이며 `nhường tố`, `tố thêm`도 포함한다. `theo` 38회 중 call 의미는 **6회/5문서**다. 문자열 빈도를 그대로 “현장에서 bet·call을 이렇게 말하는 비율”로 해석하면 안 된다.

| 개념 | 원문에서 확인된 대응 | 편집상 문제 |
|---|---|---|
| Royal flush | `sảnh rồng`, `sảnh chúa`, `thùng phá sảnh`, 별도 보충 글의 `thùng phá sảnh Hoàng gia` | 별칭만 제시하면 SF와 혼동 가능 |
| Straight flush | `thùng phá sảnh`, `sảnh đồng chất` | royal과 같은 번역을 쓰는 글 존재 |
| Three of a kind | `bộ ba`, `sám cô`, 보충 글의 `xám`·`Sám` | 검색 표기와 초보자 풀이를 함께 두는 편이 안전 |
| Bet / Raise | `tố`, `tố thêm`, `đặt cược`, `tăng cược` | 같은 사이트도 tố를 bet와 raise에 사용. 영어 행동명 병기 필요 |
| Call | `theo`, `theo cược`, `call` | `theo` 단독 문자열 집계는 오염이 큼 |
| Fold | `bỏ`, `bỏ bài`, `bỏ cuộc`, `rút lui`, `fold` | 본문에 자연스러운 VI 풀이+영어 병기 |
| Blind | `Blind`, `cược mù`, `tiền mù` | 검색 헤드와 설명 문구를 구분 |
| Poker | `poker`, `xì phé`, `xì tẩy`, `xì tố` | 다른 게임과의 경계를 흐리지 않도록 Texas Hold’em 명시 |

표본의 사용 사실이지 베트남 전체 플레이어의 언어 빈도 조사는 아니다. 하노이·호치민 전체의 구어 관습으로 일반화하지 않는다.

## 5. 상위 글의 강점·약점

| 축 | 확인된 강점 | 확인된 약점·우리의 기회 |
|---|---|---|
| 첫 답변 | R19·R22·R23은 정의·족보를 빠르게 제시 | `thùng phá sảnh là gì` 상위에 flush/flush draw 글이 노출. 세 개념을 첫 화면에서 분리 |
| 도표 | R2·R13·R19·R21·R23에 표·비교 구조 | “경쟁 글에 표가 없다”는 주장 불가. 우리 표는 **7장/5장 표본·royal 제외 여부**에서 차별화 |
| 카드 예시 | R19·R20·R21 및 Reddit에 실제 비교 질문 | 보드 풀하우스·보드 스트레이트의 예외 누락. 같은 보드에서 두 플레이어의 best five를 나란히 제시 |
| 키커 | R24는 예시3개로 설명 | 최고 키커 다음 카드, 보드 키커, 포카드의 다섯째 카드가 축약됨 |
| 확률 | R2·R21은 5장과 7장을 구분 | R4·R19는 잘못된 숫자·odds 표기. 수학 부록과 표본 캡션 필요 |
| 용어 | VI+영어 병기가 흔함 | royal/SF 대응 불일치. 영어를 기준점으로 삼아 별칭을 묶을 필요 |
| 암기 | R19의 암기 절, Reddit의 직접적인 암기 질문 | 단순 암기 문구보다 10개 순위→인접 비교→보드 적용의 순서가 유용 |
| FAQ | R2·R19·R21·R25에 질문형 구조 | PAA와 사이트 자체 FAQ를 혼동하기 쉬움. 증거 출처를 분리해야 함 |
| 경험 | Reddit에는 사용자 경험·혼동 사례 | 익명 경험담은 발생 확률의 근거가 아님. 검증 가능한 카드 예시로 재구성 |
| 언어 | VI 원문도 있고 영어의 상세 자료도 있음 | 번역 SERP 제목·Reddit 기계번역을 현지 원저작으로 오인할 위험 |
| 분할 팟 | R25는 분배·all-in 예시와 영상·퀴즈 제공 | VI 답변과 TDA 적용 조건, 참가 자격별 side pot 표로 개선 가능 |
| 최신성 | 일부 원문은 2026 갱신 | 날짜만 새롭다고 정확하지 않음. 우리 EN의 TDA 2024 조항도 점검 대상 |

## 6. 우리 글 대조

### 6-1. 현재 VI: `holdem-hand-rankings`

로컬 `vi/holdem-hand-rankings.ts` 기준이다.

| 필드 | 현재 값 |
|---|---|
| seoTitle | `Tưởng thắng mà lại thua pot? — Thứ hạng tay bài poker` |
| desc | `Đã có Thùng (flush) mà vẫn thua pot? Đây là 10 tay bài poker từ mạnh nhất đến yếu nhất, xác suất thực của từng tay, và cách kicker quyết định người thắng.` |
| title/H1 | `Thứ hạng các tay bài poker trong Texas Hold'em — từ mạnh nhất đến yếu nhất, kèm xác suất` |
| updated | `2026-09-27` |
| masterUpdated | `2026-09-07` |
| 대조 EN updated | `2026-10-06` |

**현재 H2 12개 — 축어**

1. `Thứ hạng tay bài poker: danh sách đầy đủ`
2. `Độ mạnh của lá bài: nền tảng trong 30 giây`
3. `Giải thích 10 tay bài poker`
4. `Kicker và thế hòa thực sự hoạt động ra sao`
5. `Đọc bàn: 3 bài toán thực tế`
6. `Câu trả lời nhanh cho những trận đối đầu hay gây tranh cãi`
7. `Vì sao thứ tự lại như vậy`
8. `Quy trình 1 giây đọc bàn`
9. `Ghi nhớ trong 3 bước`
10. `Thứ hạng tay bài theo thể thức`
11. `Câu hỏi thường gặp`
12. `3 điều cần nhớ`

**현재 FAQ 8개 — 축어**

| 질문 | 현재 커버리지 |
|---|---|
| Thùng có thắng Sảnh trong poker không? | 있음 |
| Cù Lũ có thắng Thùng không? | 있음 |
| Kicker là gì? | 있음, 포커 한정 표현 보강 여지 |
| Hai người chơi có thể có cùng tay bài không? | 있음 |
| Có bắt buộc dùng cả hai lá của mình không? | 있음 |
| Set và trips khác nhau ra sao? | 있음 |
| Tay bài mạnh nhất trong poker là gì? | 있음 |
| Sám Cô có mạnh hơn Hai Đôi không? | 있음 |

#### 이미 경쟁력이 있는 부분

- 10개 족보와 카드 예시, 키커·동률 비교, 7장 기준 확률을 한 글에 묶었다.
- 세 보드 문제의 핵심 결과를 직접 검산했다.

| 기존 VI 문제 | 검산 결과 |
|---|---|
| 보드 A-A-K-K-Q, 홀카드 Q-Q | Q-Q-Q-A-A 풀하우스. 보드 투페어에 머물지 않음 |
| 보드 7♥8♥9♥T♥J♠, 홀카드 6♥2♣ | 6♥7♥8♥9♥T♥, T-high straight flush |
| 보드 K♠K♦K♥A♠2♠, 홀카드 A♥3♣ | K-K-K-A-A. 상대도 A를 쓰고 더 강한 조합이 없으면 분할 |

- “홀카드를 반드시 두 장 써야 한다”는 오해를 이미 다룬다.
- `Thùng Phá Sảnh Hoàng Gia`와 `Thùng Phá Sảnh`를 구분해 쓰고 있어, royal/SF를 같은 단어로 부르는 경쟁 글보다 명확하다.
- 기존 원고를 버리고 짧은 일반 족보 글로 다시 만들 이유가 없다.

#### 빠진 VI 검색 표현·내용

| 갭 | 근거 | 개정 방향 |
|---|---|---|
| 핵심 검색 표현 | `thứ tự bài poker` 590, 정확 AC 다수 | H1/H2·첫 답변에 자연스럽게 반영. 기존 `thứ hạng tay bài`만 반복하지 않음 |
| 정의형 질문 | PAA `Cù lũ trong poker là gì?`, `Cù lũ tiếng Anh là gì?`, `Flush trong poker là gì?` | 각 족보 앵커 또는 FAQ에 명시 |
| 비교 질문 | SF 대 quads 90, AC의 full house 대 flush 반복 | 기존 일반 “논쟁” 절을 구체적인 질문으로 노출 |
| 최강 패 표현 | AC `bài mạnh nhất trong poker` | royal 정의와 보드 royal의 분할 가능성을 함께 설명 |
| EN 최신 FAQ | EN20 대 VI8 | 추가 12문항 중 VI 수요와 겹치는 것 우선 |
| 번역어 별칭 | raw에서 sảnh rồng의 오염, 원문에서 royal 별칭 확인 | 별칭 안내는 하되 단독 헤드 조준 금지 |
| 과도한 수치형 수사 | 초보자 오류의 “90%” 등 | 조사·데이터 출처가 없으면 정량 표현 완화 |
| 확률의 해석 | 무작위 패 빈도와 실제 승리 팟 빈도는 다름 | 원페어·하이카드가 흔하다는 표만으로 “대부분의 팟을 이긴다”를 증명하지 않음 |

**EN에 있고 현재 VI FAQ에 없는 12개 주제:** flush 정의, full house 정의, straight 정의, straight를 이기는 패, flush를 이기는 패, full house를 이기는 패, royal을 이기는 패, SF를 이기는 패, SF 대 quads, 최약 패, 세 페어 가능 여부, A를 1로 쓰는 경우.

모든 문항을 같은 길이의 FAQ로 복사할 필요는 없다. 족보 정의는 해당 H3, 비교는 비교 절, 동률은 전담 글로 나누고 핵심 질문만 FAQ에 남긴다.

### 6-2. 미발행 VI 5편: EN H2 대조

아래는 로컬 EN 마스터의 내용 H2다. 공통 후미의 FAQ·요점·관련 글 절은 별도다.

| slug | EN H2 축어 |
|---|---|
| holdem-flush-vs-straight | `Does a Flush Beat a Straight? Where the Two Hands Sit` · `Why Does a Flush Beat a Straight? The Math` · `3 Board Spots That Still Fool Players` · `What Beats a Flush in Poker?` · `Flush vs Flush, Straight vs Straight — Who Wins the Tie?` · `What Is a Straight Flush? When Both Happen at Once` · `Are Poker Hands Ranked Differently in Short Deck?` |
| holdem-kicker | `What Is a Kicker in Poker?` · `Which Poker Hands Have a Kicker — and Which Don't` · `How Many Kickers Does Each Hand Use?` · `AK vs AQ: How a Kicker Decides the Winner` · `Playing the Board: When Your Kicker Doesn't Play` · `Why Does A9 Lose to AK? (The Dominated Ace)` · `Does Four of a Kind Have a Kicker?` |
| holdem-tiebreak-rules | `How Are Ties Broken in Poker? The 3-Step Order` · `Who Wins if Two Players Have the Same Pair?` · `Poker Tie-Breaker Rules for Every Hand` · `Who Wins if Both Players Have Two Pair?` · `Can You Have a Higher Straight? (Where the Wheel Ranks)` · `Does the 5th Card Matter in Poker?` · `Do Suits Matter in Poker?` · `When Your Kicker Doesn't Play — and the Pot Splits` |
| holdem-split-pot-rules | `What Is a Split Pot in Poker? (And Is a "Chop" the Same Thing?)` · `Can You Tie in Poker? The 5 Situations That Split the Pot` · `Can Two Players Win the Same Pot? When the Board Plays` · `3 Things That Never Break a Tie in Poker` · `Who Gets the Extra Chip? The Odd Chip Rule` · `Do Side Pots Split Too? Ties When Someone Is All-In` · `Is the Pot Ever Split Half High, Half Low?` |
| holdem-reading-the-board | `How to Make the Best 5-Card Hand From 7 Cards` · `How to Read the Board in 4 Steps` · `What Does "Playing the Board" Mean in Poker?` · `How to Spot a Straight on the Board` · `How to Spot a Flush on the Board` · `What Happens When the Board Pairs? Trips, Boats, and Quads` · `Can You Have a Flush and a Pair at the Same Time?` · `What Is the Best Possible Hand? Reading the Nuts` · `Wet Board vs Dry Board: Reading the Texture` · `Board Reading Mistakes That Cost Real Money` |

### 6-3. EN FAQ 대조 목록

사용자가 제공한 로컬 마스터의 질문이므로 축어로 정리한다. 이 목록 자체는 **VI PAA 증거가 아니다.**

| 글 | FAQ 원문 |
|---|---|
| flush-vs-straight, **8개** | Does a flush beat a straight in poker? · Does a straight beat a flush? · Why does a flush beat a straight? · What beats a flush in poker? · What beats a straight in poker? · Can you have a higher flush than another player? · Does the suit of a flush matter? · Can a flush and a straight ever tie or split the pot? |
| kicker, **13개** | What is a kicker in poker? · Does a flush have a kicker? · Does a straight have a kicker? · Does a full house have a kicker? · Does four of a kind have a kicker? · Does the kicker matter with three of a kind? · Do two pairs have a kicker? · Does the kicker have to be in your hand? · How many kickers are in a poker hand? · What is a good kicker in poker? · What is an ace kicker (or a king kicker)? · What does "playing the board" mean? · Do kickers matter in Texas Hold'em? |
| tiebreak-rules, **14개** | How are ties broken in poker? · Who wins if two players have the same pair? · Who wins if both players have two pair? · Who wins if two players have the same three of a kind? · Does the 5th card matter in poker? · Can you use an ace as a 1 in poker? · Can you have a higher straight than another player? · Who wins if two players have the same straight? · Who wins if two players both have a flush? · Who wins if two players have the same full house? · What happens if two players both have a straight flush? · Do suits ever break a tie in Texas Hold'em? · What happens if both players have the exact same hand? · Is a tie (split pot) possible in poker? |
| split-pot-rules, **13개** | When is a pot split in poker? · How is the pot split in poker? · Do you split the pot if both players have the same hand? · Do you split the pot on a full house, a straight, or two pair? · What does "chopped pot" mean in poker? · Does suit ever decide who wins a split? · Who gets the odd chip when a pot can't divide evenly? · Can more than two players split a pot? · How are split pots handled when someone is all-in? · How do you calculate a side pot? · Who is eligible for a side pot? · Can you win both the main pot and a side pot? · Is a tournament chop the same as a split pot? |
| reading-the-board, **11개** | How do you figure out your best 5-card hand from 7 cards? · Do you have to use both of your hole cards in Texas Hold'em? · What does "playing the board" mean in Texas Hold'em? · Can the board be the best hand for everyone? · Can you have a flush and a pair at the same time? · Can you use an ace in a straight? · Can a straight wrap around in poker? · How do you know if a flush is possible on the board? · If there is a flush on the board, who wins? · If there is a straight on the board, who wins? · Does a pair on the board count as part of your hand? |

### 6-4. EN의 강점과 VI 전환 시 보강점

| 글 | 이미 이기는 부분 | VI에서 필요한 보강 |
|---|---|---|
| flush-vs-straight | 정확한 조합 논리·보드3개·동일 족보 비교·SF 구분 | 실제 AC의 `thùng và sảnh cái nào lớn hơn`를 앞세우고 SF 대 quads는 별도 앵커 |
| kicker | 족보별 키커 수·보드 플레이·quads 예외 | `kicker trong poker là gì`와 `lá phụ/lá lẻ` 풀이. 최고 키커가 같아도 다음 카드 비교 |
| tiebreak | 족보별 비교표·wheel·다섯째 카드·문양 배제 | 검색어를 억지로 `hòa bài poker`만으로 통일하지 않음. VI 질문 재조회 필요 |
| split | true tie·odd chip·side pot 자격·대회 chop 구분 | `chia bài`와 `chia pot` 혼동 방지. 현행 TDA 판본과 적용 조건 명시 |
| board | 7장 best five·0/1/2장 사용·보드 straight/flush/full house 예외 | `nuts`를 단독 정의 헤드로 쓰지 않고 보드 읽기 안에서 설명. 초보자 풀이 `bài chung` 우선 |

EN board 글에는 보드 A-A-A-7-7에서 **77 포켓페어의 포카드**까지 이미 들어 있다. 또 K♠6♠5♠4♠3♠에서 2♠가 A♠ flush보다 강한 SF를 만든다는 예외도 있다. 이 강점을 VI로 옮기는 것이 경쟁 원문의 오류를 반복하지 않는 방법이다.

### 6-5. 규정 판본 점검

직접 연 [TDA 공식 원문](https://www.pokertda.com/view-poker-tda-rules/)은 **2026 Rules, Version 1.0, Sept 7, 2026**이다. 로컬 EN 일부는 TDA 2024 조항 번호를 인용한다.

| 주제 | EN에 등장하는 구판 번호 | 현재 열람한 2026 번호 |
|---|---:|---:|
| Cards speak | 12 | 13 |
| 모든 홀카드 공개 | 13 | 14 |
| Playing the board | 19 | 20 |
| Odd chip | 20 | 21 |
| Side pots | 21 | 23 |
| 분쟁 제기 시한 | 22 | 24 |

번호가 달라졌다는 이유로 규칙 내용 전체가 바뀌었다고 주장하지 않는다. 번역 시 **판본·번호·인용 문맥을 함께 갱신**해야 한다. WSOP 인용은 이번에 원문 판본까지 검증하지 않았으므로 TDA 확인 결과로 대신 인증하지 않는다.

### 6-6. 도구 경계

| 의도 | 글/도구 경계 |
|---|---|
| 10개 족보의 순서·정의 | 족보 글. 계산기가 정적 설명을 대신하지 않음 |
| 지금 가진 7장의 best five | board·tiebreak 글의 설명과 예시. 도구의 실제 지원 범위 확인 후 검증 링크 |
| 상대 패·남은 카드에 따른 승률 | `/vi/calculator`와 연결 가능. 무조건 족보 빈도와 다른 계산임을 설명 |
| 프리플롭 어떤 두 장으로 시작할지 | L-D 시작 패 글·`/vi/hand-chart` |
| 분할 팟의 칩 배분·side pot 자격 | split 글·L-A all-in 글. 일반 equity 계산기에 없는 기능을 있다고 쓰지 않음 |
| 대회 일정 | `/vi/tournaments` 범위지만 이번 L-B에는 직접 필요 없음 |
| 특정 보드에서 베팅 전략 | L-G·`/vi/solver` 경계. 단순 승패 판정에 솔버 수치를 붙일 필요 없음 |
| 용어 정의 | `/vi/glossary` **도구는 없음**. L-F 글의 앵커를 검토 |

이번 폴더에는 도구 구현이 없어 실제 기능·렌더링을 테스트하지 않았다. 위 표는 브리프의 경계에 따른 연결 방향이다.

## 7. 여섯 글 처방

표기: **[AC]** 제공 자동완성 축어, **[PAA]** 제공 PAA 축어, **[관련]** related 축어, **[편집안]** 조사 후 만든 문구. 최종 seoTitle·desc는 작성하지 않는다.

### 7-1. `holdem-hand-rankings` — 우선순위 P1

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | `thứ tự bài poker`, `poker hand rankings`, `poker hands`. “내가 더 강하다고 생각했는데 왜 졌나” 훅은 유지하되, 첫 답변은 10개 순서와 best five 규칙 |
| H2 개명 후보 | **[AC] `thứ tự bài poker tiếng việt`** → 현재 완전 목록 절. **[AC] `bài mạnh nhất trong poker`** → 최강 패 설명. **[AC] `thùng phá sảnh trong poker là gì`** → SF 정의·royal 구분. **[AC] `cù lũ với thùng cái nào lớn hơn`** → 비교 답변 |
| H2 보강 | [편집안] “7장 중 가장 강한 5장을 고르는 방법”은 기존 보드 문제와 연결. 일반적인 “논쟁” 제목을 구체적인 비교 표현으로 개명 |
| PAA FAQ 후보 | `Cù lũ trong poker là gì?` → 3+2, 트리플 먼저 비교. `Cù lũ tiếng Anh là gì?` → full house, 별칭은 보조. `What is the rank of hands in poker?` → VI 자연어로 현지화하되 원증거는 영어로 기록 |
| FAQ 경계 | `Why are 2 and 7 the worst hand?`는 시작 패 질문. 짧게 구분하고 L-D로 위임 |
| 차별화 | 10개 카드 도식·7장 확률표·5장 확률과 차이·세 보드 문제 유지. SF/royal/flush/draw의 별도 라벨 |
| 카니발 | 모든 동률을 이 글에서 끝내지 않음. 키커 정의→kicker 앵커, 동일 족보 비교→tiebreak, 실제 칩 분배→split |
| 볼륨×갭 | 2,900·1,000·590의 확인된 족보 축. **합산하지 않음**. 이미 VI가 있으므로 개정 효율이 가장 높음 |

### 7-2. `holdem-flush-vs-straight` — 우선순위 P2

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | **`thùng và sảnh cái nào lớn hơn`**. 동질 5장과 연속 5장의 차이를 카드로 보여주고 즉답 |
| H2 후보 | **[AC] `thùng và sảnh cái nào lớn hơn`** → 첫 답. **[AC] `thùng và sảnh là gì`** → 두 정의. **[AC] `thùng phá sảnh có lớn hơn tứ quý không`** → SF 비교 앵커. **[AC] `thùng phá sảnh và cù lũ cái nào lớn hơn`** → 짧은 비교 확장 |
| EN에서 유지 | 정확한 수학·보드3개·동일 flush/straight 비교·Short Deck 분리 |
| PAA FAQ 후보 | **`Flush trong poker là gì?`** → 같은 문양 5장, SF는 별도 상위 조합. 이 PAA는 `cù lũ` SERP에서 얻었다고 명시 |
| 편집 FAQ 후보 | [편집안] “둘 다 thùng이면 어느 카드까지 비교하나?”, “보드가 sảnh이면 항상 나누나?” — PAA 확보로 표시하지 않음 |
| 차별화 | flush 5,108 대 straight 10,200의 5장 조합 비교. “드로 완성 확률”과 “완성 패 빈도” 표를 섞지 않음 |
| 카니발 | SF 정의 전체는 족보 앵커로 위임. 동일 족보의 상세 판정은 tiebreak. FD 전략은 L-C/L-D |
| 볼륨×갭 | 직접 비교 10, 인접 SF 대 quads 90. 90이 flush-vs-straight와 완전히 같은 의도는 아니므로 확장 절에 한정 |

### 7-3. `holdem-kicker` — 우선순위 P3

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | **`kicker poker`**, **`kicker trong poker là gì`**. “같은 페어인데 왜 다른 사람이 이기는가”와 “홀카드가 실제 5장에 들어가는가” |
| H2 후보 | **[AC] `kicker trong poker là gì`** → EN 정의 개명. **[AC] `poker kicker rule`** → 규칙 의도 근거이며 그대로 VI 제목으로 쓰지는 않음. **[AC] `poker ace kicker`**, `top kicker poker` → 높은 키커의 뜻을 설명하는 보조 절 |
| 편집 H2 | [편집안] 족보별 키커 수, 보드 키커, 두 번째·세 번째 키커, quads의 다섯째 카드 |
| PAA FAQ | 제공 PAA는 건설 질문뿐. **포커 PAA 후보 미확보**. 경쟁 사이트 FAQ나 EN 문항을 PAA로 바꾸지 않음 |
| 편집 FAQ | [편집안] straight/flush/full house에 별도 키커가 있는가, quads의 키커는 언제 중요한가, 키커가 보드에 있어도 되는가 |
| 차별화 | AAKQ8 대 AAKJ8 반례, 보드 quads의 마지막 카드, 포카드·풀하우스의 키커 유무 비교표 |
| 경험 자료 | Reddit의 “투페어를 키커 문제로 오해” 사례를 익명 질문 유형으로 재구성. 실제 수업 경험처럼 꾸미지 않음 |
| 카니발 | 같은 족보의 모든 판정은 tiebreak, 동률 확인 뒤 칩 배분은 split. dominated ace 전략은 L-D |
| 볼륨×갭 | `kicker là gì` 140은 혼합. 유효 결합형 10과 원문 오류의 교육적 갭을 기준으로 P3 |

### 7-4. `holdem-tiebreak-rules` — 우선순위 P3

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | 동률처럼 보이는 두 패의 **승자 판정**. bare `hòa bài poker`의 볼륨은 `-`, 검색도 혼합이므로 큰 독립 수요로 포장하지 않음 |
| H2 근거 | **[AC] `thứ tự chất bài poker`**, `thứ tự chất trong poker` → 문양이 쇼다운 승패를 가르지 않는다는 답. **[AC] `thứ tự sảnh poker`** → wheel과 더 높은 straight |
| 편집 H2 | [편집안] 같은 페어/투페어/풀하우스 비교 순서, 다섯째 카드, 5장이 같을 때의 진짜 무승부 |
| PAA FAQ | `hòa bài poker` PAA는 배분·일반 규칙·Xì tố 질문. **직접 동률 PAA 미확보** |
| 편집 FAQ | [편집안] 같은 두 페어인데 누가 이기는가, 두 full house에서 pair가 더 높으면 이기는가, 같은 straight에 키커가 있는가 |
| 차별화 | 족보→핵심 랭크→잔여 카드의 순서. 승자와 실제 사용 5장을 동시에 표시 |
| 카니발 | 키커 정의·개수는 kicker로 위임. 이 글에서 승자/동률만 확정하고 칩 배분은 split |
| 볼륨×갭 | 확정 볼륨은 약하지만 AC의 문양·straight 질문과 경쟁 오류가 있음. P3는 교육적 필수 연결 역할을 반영 |

### 7-5. `holdem-split-pot-rules` — 우선순위 P4

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | `split pot`, `chop pot`, VI 풀이 `chia pot`. “똑같은 5장인데 칩은 어떻게 나누나” |
| H2 근거 | **[관련] `Poker split pot examples`** → 분배 예시. **[관련] `Split pot poker`** → 개념. 해당 표현은 PAA/AC가 아님 |
| 편집 H2 | [편집안] 동률인 사람만 분배, 보드가 모두에게 최선인 경우, odd chip, main/side pot별 자격 |
| PAA FAQ | **미확보.** `Làm cách nào để chia bài trong poker?`는 카드 배분이라 채택하지 않음 |
| 편집 FAQ | [편집안] 세 명도 나눌 수 있는가, all-in한 사람이 side pot을 받을 수 있는가, odd chip은 누구에게 가는가 |
| 차별화 | 100/300/300 기여 예시: main300·side400. A/B가 main 동률이고 B가 side 승리하면 A150·B550·C0, 총700 보존 |
| 규정 | TDA 채택 토너먼트라면 2026 §21의 버튼 왼쪽 순서, §23의 side pot 개별 분할을 명시. 모든 하우스 룰로 일반화하지 않음 |
| 카니발 | 판정 과정은 tiebreak, side pot 생성·all-in 행동은 L-A all-in, 대회 상금 chop은 L-E |
| 볼륨×갭 | split/chia/chop 각10을 더하지 않음. 영어·외국어 상위 대비 VI 설명 기회는 있으나 질문 증거 보강 필요 |

### 7-6. `holdem-reading-the-board` — 우선순위 P3

| 항목 | 처방 |
|---|---|
| 주력어·카피 방향 | `board poker`와 `bài chung`을 이용한 설명. “내 7장에서 어느 5장이 실제로 플레이되는가” |
| H2 근거 | **[AC] `nuts poker hand`**는 넛 개념의 보조 근거만 제공. 보드 판독 질문을 확보한 것은 아님 |
| 편집 H2 | [편집안] 7장에서 5장 선택, 0/1/2장 홀카드, 보드 straight/flush/full house, 현재 가능한 최강 패, river에서 넛이 바뀌는 경우 |
| PAA FAQ | **관련 질문 미확보.** `nuts là gì`의 일반 영어·견과류 PAA는 제외 |
| 편집 FAQ | [편집안] 보드에 full house면 항상 나누는가, 보드 flush보다 낮은 카드가 더 강한 패를 만들 수 있는가, 로열이 보드에 있으면 어떻게 되는가 |
| 차별화 | EN의 77 포카드 예외와 2♠ SF 예외 유지. 매 예시마다 사용한 5장을 강조하고 버린 2장을 흐리게 표시 |
| 용어 | nuts는 “현재 보드와 알려진 카드에서 만들 수 있는 최강 패”로 설명. flop nuts가 river 승리를 보장하지 않음 |
| 카니발 | 짧은 정의는 L-F 후보 앵커, 보드별 판독은 이 글, wet/dry에서의 베팅 전략은 L-G |
| 볼륨×갭 | bare nuts720은 제외. board20·nuts poker10을 각각 참고. 경쟁 원문의 보드 오독을 해소하는 클러스터 역할로 P3 |

### 7-7. 우선순위 해석

P1→P2 이후 P3 세 편은 내부 링크와 예시를 함께 설계하고, split은 질문 증거를 보강해 이어가는 방향이다. 이는 검증되지 않은 볼륨을 더해 만든 점수가 아니다.

| 단계 | 글 | 이유 |
|---|---|---|
| P1 | 기존 VI rankings 개정 | 유효한 큰 족보 축+이미 있는 좋은 원고+EN 업데이트 갭 |
| P2 | flush-vs-straight | 실제 VI 비교 표현과 즉답 기회 |
| P3 | kicker | 작은 결합형 수요지만 실제 오해·경쟁 오류가 구체적 |
| P3 | tiebreak | 문양·straight·동일 족보 비교를 분리하는 연결 역할 |
| P3 | reading-the-board | best-five 오독을 해결하고 다른 세 글의 예시 기반 제공 |
| P4 | split-pot-rules | 명확한 기능 분리, 낮은 볼륨과 VI 질문 증거 부족 |

## 8. 0-3 판정 재료

이 절은 **소유 확정이 아니라 증거와 권고**다.

### 8-1. ④ nuts

| 증거 | 0-3에 넘길 권고 |
|---|---|
| `nuts là gì`: 포커 0/10, PAA4개 모두 일반 영어·식품 계열 | bare 헤드는 L-B/L-F 어느 글도 조준하지 않는 방향 |
| 0-1 `nuts poker`10, `board poker`20. AC는 리그·지역명 중심 | 이 숫자로 큰 정의형 검색 시장을 주장하지 않음 |
| R30·R31의 원문은 정의와 보드별 최강 패 설명을 모두 포함 | **짧은 정의는 L-F 용어 앵커 후보, 보드별 판독은 L-B board 후보**로 대조 |
| 기존 EN board에 nuts H2와 보드 예외가 이미 있음 | 새 nuts 전담 글을 먼저 만드는 것보다 기존 구조 활용 검토 |
| `/vi/glossary` 도구 없음 | 없는 도구 URL로 정의 의도를 위임하지 않음 |

**권고 한 줄:** `nuts`의 소유는 L-F의 짧은 정의와 L-B의 보드 판독을 연결하는 방향으로 검토하되, `nuts là gì` 720을 소유 판단의 유효 포커 볼륨으로 쓰지 않는다.

### 8-2. ⑫ 족보 번역어 정본

| 개념 | 확인한 증거 | 정본 후보·주의 |
|---|---|---|
| Flush | 고정 표본9/9에서 thùng | **thùng (flush)** 후보 |
| Straight | 표본9/9에서 sảnh 계열 | **sảnh (straight)** 후보 |
| Full house | cù lũ 7/9, 질문형 AC/PAA 확인 | **cù lũ (full house)** 후보 |
| Three of a kind | bộ ba 6/9, sám cô 1/9; 0-1 sám cô90/xám cô50 | **sám cô / bộ ba (three of a kind)**를 함께 설명하고 xám cô는 별칭 검토 |
| Straight flush | thùng phá sảnh가 SF와 royal 양쪽에 사용 | **thùng phá sảnh (straight flush)**와 구성 조건을 고정하는 방향 |
| Royal flush | sảnh rồng·sảnh chúa·thùng phá sảnh·Hoàng gia 병존 | 현 VI의 **thùng phá sảnh hoàng gia (royal flush)**를 유지하는 후보. 영어 기준점 필수 |
| Sảnh rồng | bare SERP2/10·다른 게임 다수, 일부 포커 원문은 royal 별칭 | “포커에서 쓰이는 별칭”으로 제한 설명. 단독 대표 헤드로 쓰지 않는 방향 |
| High card | bài cao가 표본에 많고 mậu thầu는 보충 원문에 있음 | **mậu thầu (bài cao / high card)** 후보. 현 원고와 독자 풀이 연결 |
| 행동어 | tố가 bet·raise·check 합성어에 걸쳐 등장 | 영어 행동명을 기준으로 VI 풀이를 붙이고 L-A/L-F와 공동 정리 |

**권고 한 줄:** 순베트남어 하나로 밀어붙이기보다 **영어 개념명+명확한 VI 대표어+별칭**을 묶고, 특히 royal/SF와 sảnh rồng의 경계를 정본에 명시한다.

## 9. 커버리지와 본체에 남기는 정확한 요청

### 9-1. 검색어별 0~4

`✅`는 해당 자료에서 실제 수행한 범위다. `✗`는 누락·부족이다. 2단계는 사용자 지시에 따라 측정 대신 요청 목록으로 대체했다.

| 검색어 | 0 오염 | 1 정확 헤드 AC | 2 새 볼륨 요청 | 3 raw SERP/PAA | 4 실제 원문 |
|---|---|---|---|---|---|
| poker hands | ✅9/10 | ✗ 정확 요청 없음 | ✅§2 | ✅ organic9·PAA 기록 없음 | ✅상위 해설3 |
| bài poker | ✅10/10 | ✅15개 | ✅§2 | ✅10·PAA 기록 없음 | ✅해설3, 보충1 포함 |
| thứ tự bài poker | ✅9/10 | ✅15개 | ✅§2 | ✅9·PAA 기록 없음 | ✅해설3, 보충2 포함 |
| poker hand rankings | ✅10/10 | ✗ 정확 요청 없음 | ✅§2 | ✅10·PAA4 | ✅상위 해설3 |
| thùng phá sảnh | ✅10/10 | ✅12개 | ✅§2 | ✅10·PAA 기록 없음 | ✅상위 해설5 이상 |
| thùng phá sảnh là gì | ✅6/10 하한 | ✗ 부모 헤드 AC만 있음 | ✅§2 | ✅10·PAA 기록 없음 | ✅관련 해설4, 보충2 포함 |
| sảnh rồng | ✅2/10 | ✅14개 | ✅§2 | ✅10·PAA 기록 없음 | ✗상위 포커 해설3 없음. 별칭 보충 대조3 |
| cù lũ | ✅5/10 | ✅15개 | ✅§2 | ✅7·PAA4 | ✅대체 해설3+상위 토론 |
| royal flush | ✅3/10 하한 | ✗ 정확 요청 없음 | ✅§2 | ✅10·PAA 기록 없음 | ✅사전·해설 대조, 보충 포함 |
| tứ quý | ✅0/10 | ✗ 정확 요청 없음 | ✅기존값 재측정 제외 | ✅8·PAA4 | ✗상위 포커 해설 없음. 사전·보충 족보 대조 |
| kicker là gì | ✅3/10 | ✗ `kicker poker` 변형만 | ✅§2 | ✅10·PAA1 | ✗상위 독립 해설2는 없음. 토론2+보충 해설1 |
| nuts là gì | ✅0/10 | ✗ `nuts poker` 변형만 | ✅§2 | ✅8·PAA4 | ✗상위 포커 해설 없음. 보충 EN2 |
| SF 대 quads 비교문 | ✅10/10 | ✗ 부모 AC·다른 와일드카드만 | ✅§2 | ✅10·PAA 기록 없음 | ✅상위 해설2 |
| split pot | ✅9/10 | ✗ `chia pot` 변형만 | ✅§2 | ✅9·PAA 기록 없음 | ✅상위 해설2 |
| hòa bài poker | ✅4/10 | ✅빈 응답 확인 | ✅§2 | ✅9·PAA3 | ✅상위 관련 해설2 |

**4단계 형식 제한:** 모든 원문의 H1/H2/H3 전체 전문을 재현하지 않고, 축어 표본·계수·한국어 구조 요약으로 제공했다. 이를 전량 축어 납품 완료로 표시하지 않는다.

### 9-2. 글별 PAA·자동완성 질문 확보

| 글 | AC 질문·표현 | 관련 PAA 질문 | 엄격한 “둘 다 확보” |
|---|---|---|---|
| rankings | ✅ `thứ tự bài poker tiếng việt`, `thùng phá sảnh trong poker là gì` 등 | ✅ `Cù lũ trong poker là gì?`, `Cù lũ tiếng Anh là gì?` 등 | ✅ |
| flush-vs-straight | ✅ `thùng và sảnh cái nào lớn hơn` 등 | ✅ `Flush trong poker là gì?` — cù lũ SERP에서 확보 | ✅ |
| kicker | ✅ `kicker trong poker là gì` | ✗ 건설 PAA만 존재 | ✗ |
| tiebreak | ✅ 문양·straight 순서 표현, 직접 동률 질문은 부족 | ✗ 직접 동률 PAA 없음 | ✗ |
| split | ✗ chia AC는 포커 질문 없음; related 예시는 있음 | ✗ 직접 분할 팟 PAA 없음 | ✗ |
| reading-the-board | ✗ `nuts poker hand`는 표현만, 질문 없음 | ✗ 포커 nuts/board PAA 없음 | ✗ |

### 9-3. 보완할 DFS 요청

**기존 볼륨 재측정 없이**, 다음을 본체의 동일 조건 DFS에 요청한다.

| 작업 | 요청 |
|---|---|
| 빠진 정확 AC | `poker hands` · `poker hand rankings` · `thùng phá sảnh là gì` · `royal flush` · `tứ quý` · `kicker là gì` · `nuts là gì` · `thùng phá sảnh và tứ quý cái nào lớn hơn` · `split pot` |
| 필수 wildcard AC | `* poker` · `poker * là gì` · `* trong poker là gì` · `cách * poker` · `luật * poker` |
| 포커 한정 보완 SERP/PAA | `kicker trong poker là gì` · `kicker poker` · `split pot poker` · `chia pot poker` · `nuts poker hand` · `board poker` |
| 질문 발견용 편집 시드 | `hai người cùng đôi trong poker` · `hai người cùng sảnh poker` · `cách chia pot poker` · `cách đọc bài chung poker` |
| 신규 Ads 볼륨 | §2의 37개만. 편집 시드는 아직 AC/PAA에서 발견한 문자열로 표시하지 않음 |
| 누락 organic 확인 | 9개 이하만 기록된 헤드는 원 JSON에 추가 organic이 있는지 먼저 확인. 없으면 동일 조건 재조회 여부를 본체가 결정 |

**완료 상태:** 제공 raw의 오염·SERP·특수 영역 집계, 원문 정독과 오류 검산, VI/EN 대조, 여섯 글 처방, 0-3 권고는 수행했다. **브리프의 “커버리지 ✗ 0” 조건은 아직 충족하지 않는다.** 남은 이유는 정확 헤드/필수 와일드카드 AC 누락, 네 글의 관련 PAA·AC 질문 부족, 오염 SERP에서 요구 수만큼의 상위 포커 해설을 확보할 수 없는 점이다. 이를 추정 질문이나 보충 영어 자료로 완료 처리하지 않았다.

---

## 10. 본체 보완 측정 (2026-10-08 14:3x · §9-3 요청 이행 · 원자료 `tmp/vi/L-B2/`)

### 10-1. §2 새 후보 37개 볼륨 (2704 · vi)

thùng phá sảnh là bài gì 140 · thùng phá sảnh poker 110 · cù lũ trong poker là gì 40 · cù lũ poker 30 · cù lũ với thùng cái nào lớn hơn 30 · sảnh rồng poker 30 · thùng phá sảnh tiếng anh 30 · thùng phá sảnh trong poker là gì 30 · sảnh rồng trong poker là gì 20 · thứ tự hand bài poker 20 · thùng phá sảnh có lớn hơn tứ quý không 20 · bài mạnh nhất trong poker 10 · bài poker mạnh nhất 10 · cù lũ ăn thùng không 10 · cù lũ tiếng anh là gì 10 · cù lũ với sảnh cái nào lớn hơn 10 · poker split pot examples 10 · split pot poker 10 · bài mạnh nhất poker - · cù lũ với tứ quý - · kicker trong poker là gì - · nuts poker hand - · sám cô poker - · sám cô với 2 đôi - · thứ tự bài cao poker - · thứ tự bài lớn nhỏ trong poker - · thứ tự bài lớn poker - · thứ tự bài mạnh poker - · thứ tự bài thắng poker - · thứ tự các bộ bài poker - · thứ tự chất bài poker - · thứ tự độ lớn bài poker - · thứ tự tay bài poker - · thùng phá sảnh và cù lũ cái nào lớn hơn - · thùng và sảnh là gì - · thùng và sảnh trong poker - · xếp hạng thứ tự bài poker - · 

→ 살아 있는 것: **thùng phá sảnh là bài gì 140 · thùng phá sảnh poker 110** · cù lũ trong poker là gì 40 · cù lũ poker 30 · cù lũ với thùng cái nào lớn hơn 30 · sảnh rồng poker 30 · thùng phá sảnh tiếng anh 30 · thùng phá sảnh trong poker là gì 30 · sảnh rồng trong poker là gì 20 · thứ tự hand bài poker 20 · thùng phá sảnh có lớn hơn tứ quý không 20. «thứ tự …» 변형 10종은 전부 `-`(0-1의 thứ tự bài poker 590이 대표).

### 10-2. 빠진 자동완성 + 와일드카드 (축어)

```
## cách * poker: poker cách chơi · poker cách tính · poker cách tính điểm · poker cách chia bài · poker cách thắng · cách chơi poker 2 lá · cách chơi poker 5 lá · cách chơi poker cơ bản · cách chơi poker online · cách chơi poker giỏi · cách chơi poker texas holdem · cách chơi poker cho người mới bắt đầu · cách chơi poker texas · cách chơi poker là gì · cách đánh poker luôn thắng
## cách chia pot poker: cách chia poker · cách chia bài poker chuẩn · cách chia chip poker · cách chia bài poker của dealer · cách chia bài poker
## nuts là gì: nuts là gì trong tiếng anh · nuts là gì tiếng lóng · nuts là gì slang · tree nuts là gì · go nuts là gì · nuts là quả gì · pine nuts là gì · cashew nuts là gì · brazil nuts là gì · nuts là hạt gì · nuts model là gì · betel nuts là gì · ảnh nuts là gì · nuts talk là gì · ginkgo nuts là gì
## poker * là gì: poker là gì · poker là gì trong bóng đá · poker là gì cách chơi · poker face là gì · chơi poker là gì · bài poker là gì · dealer poker là gì · cú poker là gì · flush poker là gì · poker là trò gì · phỉnh poker là gì · straddle poker là gì · môn poker là gì · giải poker là gì · itm poker là gì
## * trong poker là gì: fold trong poker là gì · thùng trong poker là gì · flush trong poker là gì · ante trong poker là gì · gtd trong poker là gì · raise trong poker là gì · check trong poker là gì · call trong poker là gì · itm trong poker là gì · flop trong poker là gì · sảnh trong poker là gì · straddle trong poker là gì · blind trong poker là gì · rake trong poker là gì · pot trong poker là gì
## poker hand rankings: poker hand rankings chart · poker hand rankings in order · poker hand rankings from best to worst · poker hand rankings cheat sheet · poker texas hold'em hand rankings · poker hand rankings preflop · poker hand rankings card · poker hand rankings chart pre flop · poker hand rankings for beginners · poker hand rankings starting · poker hand rankings 3 card · poker hand rankings short deck · poker hand rankings all · poker hand rankings printable · poker hand rankings pdf
## poker hands: poker hands ranking · poker hands chart · poker hands in order · poker hands cheat sheet · poker hands by rank · poker hands texas holdem · poker hands calculator · poker hands probability · poker hands list · poker hands names · poker hands hierarchy · poker hands to play · poker hands strength · poker hands in order of strength · poker hands rules
## thùng phá sảnh là gì: thùng phá sảnh là gì trong poker · thùng phá sảnh là bài gì · thùng phá sảnh rồng là gì · thùng phá sảnh là j · thùng phá sảnh là như nào
## split pot: split pot yogurt · split pot poker · split pot yoghurt lidl · split pots aldi · split potato · split pot lottery · split pot yogurt aldi · split pot for hotpot · split pot hot pot · split potato recipe · split pothos plant · split pots lidl · split pot fryer · split pothos · split pottery apron
## kicker trong poker: kicker trong poker là gì · kicker poker là gì · kicker poker
## luật * poker: luật poker · luật poker 5 lá · luật poker thứ tự · luật poker cơ bản · luật poker quốc tế · luật poker 2 lá · luật poker tiếng việt · luật poker thế giới · luật poker mỹ · luật poker texas holdem · luật poker 2 đôi · luật poker 4 lá · luật poker texas · luật poker việt nam · luật poker tournament
## royal flush: royal flush là gì · royal flush poker · royal flush iron soul · royal flush tiếng việt là gì · royal flush coffee and games · royal flush balatro · royal flush drink · royal flush gin price · royal flush odds · royal flush meaning · royal flush gang · royal flush vape · royal flush cards · royal flush card · royal flush vs quad aces
## tứ quý: tứ quý có chặt được đôi heo không · tứ quý có chặt được 4 đôi thông không · tứ quý có chặt được ba đôi thông không · tứ quý trà · tứ quý có chặt được đôi 2 không · tứ quý ngư · tứ quý chặt được gì · tứ quý auto · tứ quý có chặn được đôi 2 không · tứ quý chặt được mấy con heo · tứ quý là gì · tứ quý vương · tứ quý có chặn được đôi heo không · tứ quý có bắt được đôi 2 không · tứ quý care
## hai người cùng sảnh poker: 
## thùng phá sảnh và tứ quý cái nào lớn hơn: 
## * poker: poker hands · poker face · poker face lyrics · poker online · poker rules · poker hands ranking · pokert 4 · poker cheat sheet · poker set · poker chips · poker now · poker table · poker game · poker face lady gaga · poker hand
## cách đọc bài chung poker: cách đọc bài trong poker · cách đọc bài đối thủ poker · đọc bài trong poker
## nuts trong poker: nuts trong poker là gì · nuts poker · nut poker là gì
## kicker là gì: kicker là gì trong xây dựng · đổ kicker là gì · gờ kicker là gì · chân kicker là gì · kicker chân tường là gì · kicker bê tông là gì · kicker trong poker là gì · here's the kicker là gì · mặt bằng kicker là gì · tire kicker là gì
## hòa trong poker: 
## hai người cùng đôi trong poker: 
```

- 🔴 **«* trong poker là gì» 와일드카드 = 정의형 질문 축어 15개**(fold · thùng · flush · ante · gtd · raise · check · call · itm · flop · sảnh · straddle · blind · rake · pot) — L-A·L-F·0-3 쟁점 ⑪(정의형 소유)의 핵심 재료.
- kicker: «kicker là gì»는 건설 용어 오염(«kicker bê tông») → 포커는 **«kicker trong poker là gì»**(볼륨 `-`) 표현만 확보. tứ quý 단독 = Tiến lên(«chặt heo») 확정. royal flush AC에 «royal flush tiếng việt là gì».
- 동률·split 질문형(«hai người cùng sảnh/đôi», «hòa trong poker») = 자동완성 빈 응답 → EN FAQ 이식 + 축어 없는 표현은 본문용.

### 10-3. 보완 SERP (PAA·related)

```
######## kicker trong poker là gì | status 20000 | types: organic
######## kicker poker | status 20000 | types: organic
######## split pot poker | status 20000 | types: organic
######## chia pot poker | status 20000 | types: organic,video,related_searches
11. [related] Thứ tự bài mạnh trong Poker · Thứ tự bài trong Poker · Luật Poker · Trong Poker chất nào to nhất · Cách chia bài Poker chuẩn · Cách chơi poker · Thứ tự bài Poker tiếng Việt · Luật chơi poker 5 lá
######## nuts poker hand | status 20000 | types: organic,people_also_ask,video,related_searches
2. [PAA] What's the luckiest hand in poker? || What is a dirty diaper in poker? || What happens if you tie a poker hand? || What does "nut low" mean in poker?
12. [related] Why is it called the nuts in poker · Poker hands
######## board poker | status 20000 | types: organic,related_searches
11. [related] Poker hands · Poker Table · Poker Mat · Poker Set
```

- kicker·split·nuts 포커 한정 SERP에도 vi PAA는 없다(nuts poker hand PAA = 영어). → 커버리지 ✗ 4글(kicker·tiebreak·split·reading-the-board)은 «vi 질문 축어 없음 → EN FAQ 이식 + AC 정의형 축어» 그룹으로 닫는다(fr L-G 그룹 A 선례). 본체 판정.
