# vi SERP — L-F 용어 (L-F-gloss.md) (2026-10-08 · 아스트라)

**우선순위 권고:** `thuật ngữ poker` 중심 용어 글 → bad beat → straddle → rake → cooler·fish. `bluff poker`는 수요가 상대적으로 크지만 소유 글은 0-3에서 정한다. `fish là gì`, `tilt là gì`, `bluff là gì`, `straddle là gì`, `cooler là gì`의 큰 볼륨을 포커 수요로 가져오면 안 된다.

**조사 범위:** 제공 SERP 10개 검색어·자연검색 행 92개, 자동완성 11개 시드·140개 제안, 해설 본문 26편, 추가 부분 열람 1편. 기존 볼륨은 재측정하지 않았다. 파일 생성·수정 및 git 작업은 하지 않았다.

**완료 제한:** `nuts là gì`의 지정 조건 SERP가 없고, 일부 검색어는 자연검색 결과가 8~9개만 제공됐다. 자동완성도 대부분 원래 헤드 대신 `poker` 결합형이다. 따라서 브리프의 **커버리지 ✗ 0 완료 조건은 아직 충족하지 않았다.** 신규 볼륨은 요청 목록으로 인계한다.

---

## 0. 오염 판정 — 원자료 직접 집계

### 0-A. 집계 기준

- 원문: `raw/serp-F-serp.txt`. Google VN 2704·vi·desktop 조건은 사용자 제공 설명을 따른다.
- 원자료의 숫자는 SERP 요소가 섞인 순번이다. 예를 들어 R2가 영상 팩이면 다음 자연검색 행은 R3이다. 이를 자연검색 2위로 바꾸지 않았다.
- 포커 여부는 **제공 SERP의 제목·URL에 표시된 주제**로 분류했다. 해당 페이지의 내용 정확성이나 실제 운영 상태를 보증하는 판정은 아니다.
- AIO·이미지·PAA·영상 팩을 자연검색 결과 한 편으로 더하지 않았다.
- 아래 `n/10`은 제공 자료에서 포커로 식별한 수다. 누락된 자연검색 행을 비포커로 간주하지 않았다. 관측 분모와 가능한 범위를 함께 적었다.
- SERP 결과 비중을 검색량에 곱해 “포커 검색량”을 추정하지 않는다.

| 헤드 | 포커 결과 n/10 | 관측 자연검색 | 판정 | 근거·주의 |
|---|---:|---:|---|---|
| thuật ngữ poker | **9/10** | 10 | **포커 몫 있음** | 포커 포럼 7, 포커 용어 페이지 2. 영어 관용구 제목의 Google 중계 결과 1은 보수적으로 제외 |
| fish là gì | **0/10** | 8 | **없음·오염** | 물고기·영어 표현. 미수신 2개가 모두 포커여도 ≤2 |
| tilt là gì | **1/10** | 10 | **없음·오염** | R9 r/poker만 명시적 포커. 나머지는 기울기·센서·촬영·영어 |
| bluff là gì | **2/10** | 10 | **없음·오염** | WikiPoker LinkedIn 게시물, 호텔 도메인의 포커 해설 제목. 별도 카드게임 Bluff는 포커로 세지 않음 |
| rake là gì | **4/10** | 10 | **섞임** | MMO4ME·r/poker·U Lifestyle·Flickr의 포커 주제. 카지노 홍보형 결과 1은 포커 여부 불명으로 제외 |
| straddle là gì | **1/10** | 10 | **없음·오염** | r/poker 1. 사전·자세·금융 전략 중심 |
| cooler là gì | **0/10** | 8 | **없음·오염** | 냉각기·냉방·사전. 미수신 2개가 모두 포커여도 ≤2 |
| bad beat | **5/10** | 9 | **섞임** | 포커 표방 5, 음악 3, 스포츠베팅 1. 포커 앱 표방 행을 제외하면 4/10이며 판정은 같음 |
| bluff poker — 경량 | **9/10** | 9 | **포커 몫 있음** | 관측 9개 모두 포커. 나머지 1개 미수신 |
| nuts là gì — 경량 | **산정 불가** | 0 | **판정 보류** | F 원자료에 없음. 영어 해설 열람으로 VN SERP 판정을 대신하지 않음 |
| thuật ngữ trong poker — 경량 | **8/10** | 8 | **포커 몫 있음** | 제목상 용어 의도 8. 이 중 Google 중계 5개는 도착지 열람 실패 |

`thuật ngữ trong poker`의 8개는 **서로 다른 실제 원문 8편이 검증됐다는 뜻이 아니다.** 중계 URL의 중복·도착 도메인은 확인하지 못했다.

### 0-B. 0-1 볼륨 승계와 조준 방향

| 글·관련 의도 | 0-1 수치 그대로 | 이번 조사에 따른 사용 |
|---|---|---|
| glossary | `thuật ngữ poker` **140**; `từ ngữ trong poker` **—** | 주력 후보. `thuật ngữ trong poker`와 `từ ngữ trong poker`를 같은 측정어로 취급하지 않음 |
| fish | `fish là gì` **1,000**; `fish poker` **10**; `fish poker meaning/term` **10** | 1,000은 오염 표시. 결합형 수요로 판단. meaning/term 수치를 합산하지 않음 |
| bad beat | `bad beat` **50**; `bad beat là gì` **10** | 혼합 헤드이므로 도입부·제목 방향에 poker 문맥 명시 |
| cooler | `cooler là gì` **170**; `cooler poker` **10** | 170은 오염. 결합형 정의·bad beat 비교 중심 |
| rake | `rake là gì` **390**; `rake poker` **20**; `rake trong poker là gì` **20** | 390 전체를 포커 수요로 보지 않음. 결합형 중심 |
| straddle | `straddle là gì` **320**; `straddle poker` **30**; `straddle poker là gì` **30** | 320은 오염. 결합형과 진행 순서 설명 중심 |
| tilt — 소속 미정 | `tilt là gì` **880**; `tilt poker` **40** | 880은 오염. 포커 감정·의사결정 의도로 한정 |
| bluff — 소속 미정 | `bluff là gì` **390**; `bluff poker` **110**; `bluff trong poker` **50**; `bluff trong poker la gì` **40**; `semi bluff` **20**; `value bet` **20** | 390은 오염. **110의 결합형은 별도 검토 가치가 큼** |
| nuts — L-B 교차 | `nuts là gì` **720**; `the nuts` **90**; `nuts poker` **10**; `board poker` **20** | 720은 이번 레인에서 포커 몫 미검증. L-B 결과와 합쳐 판단 |

원자료의 `bluff trong poker la gì`는 `la`가 무성조로 적혀 있다. 이를 성조를 고친 별도 검색어의 실측값으로 바꾸지 않았다. `—` 역시 0이 아니다.

---

## 1. 자동완성 — 제공 목록 그대로

원문: `raw/serp-F-ac.txt`. **11개 시드, 비어 있지 않은 시드 10개, 총 140개 제안**이다. 금지 축·외국어·제품명이 섞인 제안도 원자료 기록을 위해 남기되, 타깃이나 볼륨 요청으로 자동 승격하지 않는다.

| 시드 | 개수 | 자동완성 원문 |
|---|---:|---|
| rake poker | 15 | rake poker meaning · rake pokerstars · rake poker meaning illegal · rake poker là gì · rake pokerstars cash game · rake poker calculator · rake pokerking · rake poker significado · rake poker é ilegal · rake poker term · rake poker sites · rake poker cos'è · rake poker traduction · rake poker game · rake poker bedeutung |
| straddle poker | 15 | straddle poker là gì · straddle poker meaning · straddle poker rules · straddle poker strategy · straddle poker texas holdem · straddle poker terms · straddle poker significado · straddle poker bedeutung · straddle poker term · straddle poker explained · straddle poker definition · straddle poker que es · straddle poker o que é · straddle poker club · straddle poker co to |
| thuật ngữ poker | 7 | thuật ngữ poker tiếng việt · thuật ngữ poker tiếng anh · thuật ngữ poker là gì · thuật ngữ trong poker · thuật ngữ chơi poker · cách thuật ngữ trong poker · thuật ngữ poker tournament |
| poker * nghĩa là gì | 13 | poker nghĩa là gì · poker face nghĩa là gì · cú poker nghĩa là gì · poker nghĩa tiếng việt là gì · gtd trong poker nghĩa là gì · bluff trong poker nghĩa là gì · nut trong poker nghĩa là gì · ante trong poker nghĩa là gì · itm trong poker nghĩa là gì · flush nghĩa là gì poker · poker có nghĩa là gì · poker là j · poker có nghĩa là j |
| bad beat poker | 15 | bad beat poker jackpot · bad beat poker meaning · bad beat poker room · bad beat poker playground · bad beat poker là gì · bad beat poker hand · bad beat poker payout · bad beat poker club · bad beat poker definition · bad beat poker rules · bad beat poker significado · bad beat poker room angleton · bad beat poker casino montreal · bad beat poker gippsland · bad beat poker lac leamy |
| cooler poker | 15 | cooler poker meaning · cooler poker term · cooler poker là gì · cooler poker hand · cooler significado poker · cooler poker slang · cooler poker significato · cooler pokerkoffer · cooler poker reddit · cooler in poker means · cooler trong poker · poker cooler vs bad beat · cooler no.poker · cooler nel poker · frat cooler poker chips |
| bluff poker | 15 | bluff poker game · bluff poker meaning · bluff poker là gì · bluff poker club · bluff poker meme · bluff poker jeans · bluff poker mongolia · bluff poker significado · bluff poker zilina · bluff poker player · bluff poker rules · bluff poker jeans price · bluff poker online · bluff poker definition · bluff poker card game |
| * poker là gì | 15 | poker là gì · poker là gì trong bóng đá · poker là gì cách chơi · poker face là gì · chơi poker là gì · bài poker là gì · dealer poker là gì · cú poker là gì · flush poker là gì · poker là trò gì · phỉnh poker là gì · straddle poker là gì · môn poker là gì · giải poker là gì · itm poker là gì |
| tilt poker | 15 | tilt poker room · tilt poker room gurgaon · tilt poker room bangalore · tilt poker meaning · tilt poker room lucknow photos · tilt poker room gurgaon reviews · tilt poker gurgaon · tilt poker room by owner · tilt poker show · tilt poker room photos · tilt poker room gurgaon photos · tilt poker là gì · tilt poker definition · tilt poker club · tilt poker term |
| fish poker | 15 | fish poker term · fish poker meaning · fish poker pops · fish poker room · fish poker player · fish poker app · fiches poker professionali · poker fish amazon · fish poker png · fish poker valore · fish pokerstars · fish poker online · fish poker personalizzate · fish poker come si scrive · fish poker da stampare |
| từ lóng poker | 0 | 제공 파일에 제안 없음 |

### 1-A. 해석과 결손

| 관찰 | 편집상 의미 |
|---|---|
| glossary에 `tiếng việt`·`tiếng anh` 동시 등장 | 영어 표제어와 자연스러운 베트남어 대응어를 나란히 제공할 근거 |
| cooler에 `poker cooler vs bad beat` | 두 글 사이 비교·앵커 이동 필요 |
| straddle에 rules·explained·definition·strategy | 정의만으로 끝내지 말고 실제 액션 순서와 규모 변화까지 설명 |
| tilt에 지역 poker room 제안 다수 | 자동완성 전체를 포커 심리 수요로 해석하면 안 됨 |
| fish에 meaning·term·player | 정의·플레이어 유형 표현 확보. **`fish poker là gì`는 이번 AC에 없음** |
| wildcard에 `nut trong poker nghĩa là gì` | 단수 `nut` 검색 표현 관측. `nuts là gì` 직접 AC를 조회한 것은 아님 |
| `từ lóng poker` 0개 | 이번 응답이 비었다는 뜻. 수요 0의 증거가 아님 |

직접 헤드 AC가 있는 것은 `thuật ngữ poker`, `bluff poker`다. 나머지는 결합형·와일드카드 대체 자료이며, 브리프에 열거된 다른 와일드카드 시드는 제공되지 않았다.

---

## 2. §볼륨 측정 요청

**미측정 신규 후보 53개.** 아래 문자열은 AC·PAA·related에서 얻었으며 `vi-core-volumes.md` 전체와 대조했다. 여기에는 추정 볼륨을 붙이지 않는다. 본체가 VN 2704·vi 조건으로 묶어 측정하고, Google Ads가 근접 변형을 묶는 경우 중복 수요로 합산하지 않아야 한다.

| 묶음 | 개수 | 요청 검색어 |
|---|---:|---|
| glossary | 6 | thuật ngữ poker tiếng việt · thuật ngữ poker tiếng anh · thuật ngữ poker là gì · thuật ngữ trong poker · thuật ngữ chơi poker · thuật ngữ poker tournament |
| fish | 1 | fish poker player |
| bad beat | 5 | bad beat poker meaning · bad beat poker là gì · bad beat poker hand · bad beat poker definition · bad beat poker rules |
| cooler | 7 | cooler poker meaning · cooler poker term · cooler poker là gì · cooler poker hand · cooler poker slang · cooler trong poker · poker cooler vs bad beat |
| rake | 3 | rake poker meaning · rake poker là gì · rake poker term |
| straddle | 8 | straddle poker meaning · straddle poker rules · straddle poker strategy · straddle poker texas holdem · straddle poker terms · straddle poker term · straddle poker explained · straddle poker definition |
| tilt | 4 | tilt poker meaning · tilt poker là gì · tilt poker definition · tilt poker term |
| bluff | 7 | bluff poker meaning · bluff poker là gì · bluff poker player · bluff poker rules · bluff poker definition · bluff trong poker nghĩa là gì · How to tell if someone is bluffing in poker |
| 교차 레인 | 12 | nut trong poker nghĩa là gì · flush nghĩa là gì poker · flush poker là gì · gtd trong poker nghĩa là gì · ante trong poker nghĩa là gì · itm trong poker nghĩa là gì · itm poker là gì · dealer poker là gì · phỉnh poker là gì · Buy in poker là gì? · Làm cách nào để chơi poker giỏi? · Poker là môn thể thao gì? |

교차 후보의 잠정 인계: nuts·flush → L-B, ante·dealer·기본 정의 → L-A, GTD·ITM·buy-in → L-E, 실력 향상 → L-D. 이는 소유 판정이 아니다.

기존 측정어인 `blind trong poker là gì`, `straddle poker là gì`, `fish poker meaning/term` 등은 재요청하지 않았다. 사이트·앱·room·법률·잭팟 지급액 후보는 제외했다. `rake poker calculator`도 현재 도구가 수수료 계산을 지원한다는 근거가 없어 이번 요청에서 보류했다.

---

## 3. SERP 상위 결과·PAA·특수 요소

### 3-A. 결과 목록

제목은 **제공 원자료 축어**다. 원자료 자체의 `...`도 유지했다. `[P]`는 제목·URL상 포커, `[?]`는 주제 또는 도착지 불명이다. 링크가 있다는 이유만으로 본문을 열람했다고 간주하지 않는다.

#### ① thuật ngữ poker

| 원자료 R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Trợ giúp thuật ngữ Poker](https://www.reddit.com/r/poker/comments/eu1ap/poker_term_help/?tl=vi) | 포럼 [P] |
| 2 | [Thành ngữ Poker – Những hiểu biết sâu sắc về tiếng Anh](https://google.com/goto?url=CAESvgEB6zswFVf8muR2_io0IyW3TijNI6wye_XTp3ELaZnGo2NZo3i6u6G5uNq3EOsu1txOc5QCRNiqMME9Lq5nDayO23BWfbeOvbFtGGwb5LOz8_rSXq7Y_qS0xuVvzISbCszmqJ-QZragyFC-tbAuwLDz8VxlWqNlJZk-C_jHRE3Q-49q5CAWAFxOv4_cv6E0qN5vL7GOA6vHJP8JXffMxQfpmaPJ5dpqh8IaZ4Wl7jqlLIhQWIPwvsUmtzq5FVzj) | Google 중계·영어 관용구 [?] |
| 3 | [Bạn nói các thuật ngữ poker bằng ngôn ngữ của mình như ...](https://www.reddit.com/r/poker/comments/1otl3ag/how_do_you_say_poker_terms_in_your_language/?tl=vi) | 포럼 [P] |
| 4 | [Thuật ngữ Poker trong các giải đấu.](https://www.reddit.com/r/poker/comments/15m4wtp/poker_terminology_at_tournaments/?tl=vi) | 포럼 [P] |
| 5 | [Thuật ngữ Poker phổ biến nhất hiện nay \| NhacaiUytin6](https://nhacaiuytin.lawyer/thuat-ngu-poker/) | 제휴·게임 계열 [P] |
| 6 | [Thuật ngữ poker quan trọng mọi người chơi cần biết](https://gamebaidoithuong2019.com/thuat-ngu-poker/) | 게임 계열 해설 [P] |
| 7 | [Thuật ngữ poker, có lẽ bạn không biết nhỉ?](https://www.reddit.com/r/poker/comments/130jaa0/poker_lingo_maybe_you_dont_know/?tl=vi) | 포럼 [P] |
| 8 | [Giúp đỡ với Thuật ngữ và Tiếng lóng Poker](https://www.reddit.com/r/poker/comments/1iwg70p/help_with_poker_terms_and_slang/?tl=vi) | 포럼 [P] |
| 9 | [Thuật ngữ Poker: Gambit. Chơi một ván bài nằm ngoài ...](https://www.reddit.com/r/poker/comments/120hbvr/poker_term_gambit_to_play_a_hand_out_of_your/?tl=vi) | 포럼 [P] |
| 10 | [Tân binh Poker. Cần giúp đỡ về thuật ngữ. 4 cái này nghĩa ...](https://www.reddit.com/r/poker/comments/yowmls/poker_newbie_need_help_with_terminology_what_do/?tl=vi) | 포럼 [P] |

**유형 집계:** 포럼 7, 게임·제휴 계열 2, 중계·의도 불명 1. 베트남어 제목과 `?tl=vi`가 있는 Reddit 결과를 베트남어 원저작물로 세지 않는다.

#### ② fish là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 2 | [fish species - Anh Việt](https://vdict.com/fish%20species,1,0,0.html) | 사전 |
| 3 | [fish là gì vậy](https://olm.vn/cau-hoi/fish-la-gi-vay.4745702449656) | 학습 Q&A |
| 4 | [Ngành đánh bắt cá bền vững là gì?](https://google.com/goto?url=CAES0AEB6zswFSDNomg1ph7CdD31Fps6yH4RsQDQE3TdXmmVHO8gGBjlzVJW1RvpQZo6zqImN1Zp3SYj5B3lfMeBxmuY3PgCqI2FkqEbqVQWg7WZ5AOs_9I09dmmarzwIwLkqqE0wLwh2nN1HCEk3d29fvE1UWDe8xQinNv767qQbJFfANdldWw1o0MSdX0-hIdhc4TRrWN_piofdi4k51mWq_tCqOpOxDoONuAp44cWc4MEXw3HigZCH22VcfZsJD82QQxOoQNmrRddM1hDjpRz0iqY) | 어업 설명·중계 |
| 5 | [Fish-serving là gì? \| Từ điển Anh Việt](https://dictionary.zim.vn/anh-viet/fish-serving) | 사전 |
| 6 | [ground-fish - Anh Việt](https://vdict.com/ground-fish,1,0,0.html) | 사전 |
| 8 | [Thành ngữ Fish Out là gì? Ý nghĩa và cách dùng trong ...](https://englishteststore.net/lesson/vi/english-idioms/fish-out-idiom-meaning-and-example-usage-in-sentences/) | 영어 학습 |
| 9 | [I Like Fish Là Gì](https://www.tiktok.com/discover/i-like-fish-l%C3%A0-g%C3%AC) | 영상·발견 페이지 |
| 10 | [Đâu là sự khác biệt giữa "I like fish." và "I like a fish." ?](https://vi.hinative.com/questions/15939288) | 언어 Q&A |

R1 AIO, R7 이미지. 자연검색은 8개다.

#### ③ tilt là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Tilt one's head là gì? \| Từ điển Anh Việt](https://dictionary.zim.vn/anh-viet/tilt-one-s-head) | 사전 |
| 2 | [Chức năng nghiêng (tilt) là gì vậy? : r/stylus](https://www.reddit.com/r/stylus/comments/zyjf3i/what_exactly_is_a_tilt_function/?tl=vi) | 기기 포럼 |
| 3 | [Câu ví dụ,định nghĩa và cách sử dụng của"Tilt"](https://vi.hinative.com/dictionaries/tilt) | 언어 Q&A |
| 4 | [Cảm biến nghiêng tilt sensor là gì? Ứng dụng cho xe nâng và ...](https://aumi.com.vn/cam-bien-nghieng-tilt-sensor/) | 센서 해설 |
| 5 | [tilt-top table - Anh Việt](https://vdict.com/tilt-top%20table,1,0,0.html) | 사전 |
| 6 | ["To tilt at windmills" có nghĩa là gì?](https://google.com/goto?url=CAESugEB6zswFRQnAr8cL9YJUfyp23M20O6UDMX33zcnZnJG4aFCSQqzxLkJVSNwYSdZj1xO3HAqCyCxTQ2w_MW1gqUPYlsSssjHVyB8PjkrnWuZtSfUku7yfR-vPyip63oN5qvEXomhi4HFnmoNhkPhXabsrFW7raH4K1iJrZ3a2xu-0p12rCG_tO-rKTknWYJV2uXC5EiFzdNlmEzhqUmAAkCFXHvITNUIqyZ5YW6JYmu3ASfzphZoGC-OKZc) | 영어 표현·중계 |
| 7 | [Thành ngữ Full Tilt là gì? Ý nghĩa và cách dùng trong tiếng ...](https://englishteststore.net/lesson/vi/english-idioms/full-tilt-idiom-meaning-and-example-usage-in-sentences/) | 영어 학습 |
| 8 | [Kỹ thuật nâng cao cho quay phim hiệu ứng Tilt-Shift](https://google.com/goto?url=CAES_gEB6zswFQ-9wXj9AZH_MpRrX4IZH0BP7DIIiD4bRHJ5Cyjf1gIdGeeWkIwA64Lr60Fq-0tiLE2gUOeLydh63kjncJJOSW7UjhEcXDJIlsH6OKEacTprP-FH_iWkIImSlNvEqEd0NVHOhh0Fc89boAjG-16iG5hRmLNLUZFOFKzTM81gnO5vwy2fNIObCt9q_KNQmdZQ3wl57EfzdWy0mXCNgwVDrfKPTy99cEOwwsLg4wgmcOl5RZe3BDrnQ6pjVll7JqqB5Be66PO18LA8ynySGegAIbtEWjJDWRSwlxohg_eltBjPewWo2wc70i4sN7lyreY8sZDuCMYQy4H3rA) | 촬영 해설·중계 |
| 9 | [Nguồn gốc của "Tilt" : r/poker](https://www.reddit.com/r/poker/comments/1n4l2ji/the_origin_of_tilt/?tl=vi) | 포럼 [P] |
| 10 | [Tilt-Shift là gì? Cách sử dụng ống kính Tilt-Shift để chụp ảnh](https://mayanhhoangto.com/tilt-shift-la-gi/?srsltid=AU7gw4WUcNbRZOP80hQ-bNHsHwx5M3sh2rxcXA4v9UXuRWYUt3Gy5PLm) | 촬영 해설 |

#### ④ bluff là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [bluffness nghĩa là gì? Từ điển Anh Việt](https://vdict.com/bluffness,1,0,0.html) | 사전 |
| 2 | [Khác biệt giữa "nói dối" và "chơi xỏ" là gì?](https://www.reddit.com/r/explainlikeimfive/comments/1wqdo0/whats_the_difference_between_lying_and_bluffing/?tl=vi) | 일반 Q&A |
| 3 | [Cách chơi trò Bluff: Luật chơi đầy đủ và các biến thể](https://google.com/goto?url=CAESowEB6zswFT8jeU_4-3obMfpPxpQ9lQ8Dl9R1BQGF70TDOPLTXL1RAsI2LhgPdg-sUejq_gjQklO-KwMNP7QNEdWxNzIn-E1UzPUgEFazAzQBaQjW5Of5b-5AUwa4AqwWKwj-yn4nBo7RNOQPUjTnfh_OZoPiqKR4vaEbXhX32cywfyy2E8-Sb7F1OjQTy6QE-hdw-Sn_qshLV87uthqFzRArqWhv) | 별도 카드게임·중계 [?] |
| 5 | [Bluff là gì? Nghĩa, phát âm, IPA và ví dụ - Jupi](https://jupi.vn/en-vi/dictionary/bluff) | 사전 |
| 6 | [Trong địa lý, "lừa đảo" là gì? - Giải thích đầy đủ](https://google.com/goto?url=CAESugEB6zswFV1DxpYgv8JNhAnQOpiiqTqDcUJLSKlshlAE2yZ3Zs2Whul-R5SKHOc74X8_aAF0gqxzfnZM2GObrIJSO3acC4RzWN1KvPVDAbLiSST0JiHB_QgrVNF-sTThfjWjTkHJww8wyp0ig5XXafffyK1Vcy-8295PH7bgXlyDPA0p7nayDKVuRLhnvaZFrt3yL57xbKkZx5hDhL7kGC9vanv5VqZi7qu61hT4HrPYYpUGr7JuvA6Azn4) | 지리 설명·중계 |
| 7 | [Wiki Poker Bài đăng](https://www.linkedin.com/posts/wikipokernet_bluff-l%C3%A0-g%C3%AC-gi%E1%BA%A3i-m%C3%A3-k%E1%BB%B9-n%C4%83ng-mang-t%E1%BA%A7m-ngh%E1%BB%87-activity-7195740399783534593--Tfs) | 소셜 [P] |
| 8 | ['Bluff' nghĩa là gì?](https://blauberry.app/dictionary/Bluff) | 사전 |
| 9 | [To bluff nghĩa là gì? Cách dùng & ví dụ - Daisy Việt](https://daisyviet.com/tu-vung/to-bluff) | 영어 학습 |
| 10 | [Top 3 kỹ thuật bluff thần thánh giúp bạn làm chủ bàn poker](https://hanoihotel.com.vn/vi/huong-dan/top-3-ky-thuat-bluff-than-thanh-72e7176/) | 해설 표방 [P]·현재 404 |
| 11 | [Double bluff là gì, Nghĩa của từ Double bluff \| Từ điển Anh](https://rung.vn/en_vi/double-bluff) | 사전 |

R4는 PAA다. R3의 게임 규칙은 열람되지 않았으므로 홀덤이라고 판정하지 않았다.

#### ⑤ rake là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Rake là gì? Tại sao grinder quan tâm rake đến vậy? - MMO4ME](https://mmo4me.com/threads/rake-la-gi-tai-sao-grinder-quan-tam-rake-den-vay.375316/) | 포럼 [P] |
| 2 | [Giải thích Rake trong Sòng bạc trực tiếp : r/poker](https://www.reddit.com/r/poker/comments/teerlo/explain_rake_in_live_casinos/?tl=vi) | 포럼 [P] |
| 3 | [rake nghĩa là gì trong tiếng Anh](https://mochidictionary.net/tu-dien-anh-viet/rake) | 사전 |
| 5 | [Trong địa chất học, "pitch" và "rake" có nghĩa là gì?](https://google.com/goto?url=CAESuQEB6zswFTwNz0hhOpmefDJ5eHht-Cibgb6mKd8qO5c87E51AOkKpXNdKmj_GTuSqD1xkqHTxhQBS_dTTNbMjQ2wlha-9KJY9QfF8Jlof4iyC1090bbNoLjXyEETT8mxjyx28gGnf7Bs0u2G1WIBByWt_CFdCbFS0ysaZEEY-2gvhDak7kIEFnNDnFD-uO5Ab9LDmnTbAfHsTQz2MX6A4GVJ-TwZXcM6NWh70McdjRP0-UzMUZkkhT8E2w) | 지질학·중계 |
| 6 | [Rake là gì? Sức ảnh hưởng của Rake lên những người chơi ...](https://blog.ulifestyle.com.hk/article/onbetfan/4252618/rake-l%C3%A0-g%C3%AC-s%E1%BB%A9c-%E1%BA%A3nh-h%C6%B0%E1%BB%9Fng-c%E1%BB%A7a-rake-l%C3%AAn-nh%E1%BB%AFng-ng%C6%B0%E1%BB%9Di-ch%C6%A1i-poker) | 사용자 블로그·제휴 계열 [P] |
| 7 | [Rake là gì? Những thông tin về Rake trong Poker cần nắm ...](https://www.flickr.com/photos/v9betuytin/52086338374/) | 이미지·소셜 [P] |
| 8 | [Working back rake](https://rung.vn/en_vi/working-back-rake) | 사전 |
| 9 | [rake là gì Trang web cờ bạc trực tuyến lớn nhất Việt Nam ...](https://tuyensinhkh.cep.edu.vn/truy-cap/rake-l%C3%A0-g%C3%AC-Trang-web-c%E1%BB%9D-b%E1%BA%A1c-tr%E1%BB%B1c-tuy%E1%BA%BFn-l%E1%BB%9Bn-nh%E1%BA%A5t-Vi%E1%BB%87t-Nam%2C-%5B12345.COM%5D%2C-%C4%91%C3%A1nh-nhau-v%E1%BB%9Bi-g%C3%A0-tr%E1%BB%91ng%2C-b%E1%BA%AFn-c%C3%A1-v%C3%A0-baccarat%2C-v%C3%A0-gi%C3%A0nh-%C4%91%C6%B0%E1%BB%A3c-h%C3%A0ng-ch%E1%BB%A5c-tri%E1%BB%87u-gi%E1%BA%A3i-th%C6%B0%E1%BB%9Fng-m%E1%BB%97i-ng%C3%A0y.-C%E1%BB%9D-vua/) | 카지노 홍보형 제목 [?] |
| 10 | ["rake" có nghĩa là gì? - Câu hỏi về Tiếng Anh (Mỹ)](https://vi.hinative.com/questions/18750038) | 언어 Q&A |
| 11 | [rake là gì? Nghĩa, phát âm, ví dụ và cách học](https://cvocab.app/vi/dictionary/rake) | 사전 |

R9는 제목·경로가 홍보형이라는 관찰만 남긴다. 해킹·악성 페이지 여부나 실제 내용은 판정하지 않았다.

#### ⑥ straddle là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [STRADDLE \| Định nghĩa trong Từ điển tiếng Anh Cambridge](https://dictionary.cambridge.org/vi/dictionary/english/straddle) | 사전 |
| 2 | [Nghĩa của từ Straddle - Từ điển Anh - Việt](http://tratu.soha.vn/dict/en_vn/Straddle) | 사전 |
| 3 | [1. Straddle nghĩa là đứng hoặc ngồi dạng hai chân ra, kẹp ...](https://www.facebook.com/minvocab/posts/1-straddle-ngh%C4%A9a-l%C3%A0-%C4%91%E1%BB%A9ng-ho%E1%BA%B7c-ng%E1%BB%93i-d%E1%BA%A1ng-hai-ch%C3%A2n-ra-k%E1%BA%B9p-qua-hai-b%C3%AAn-m%E1%BB%99t-v%E1%BA%ADt-stra/1148278727291932/) | 어휘 소셜 |
| 5 | [Straddle là gì? Chiến lược Straddle trong giao dịch Crypto](https://coin98.net/straddle) | 금융 해설 |
| 6 | [Straddle Và Strangle Là Gì? Chiến Lược Biến Động Giá](https://hanghoaphaisinh.com/straddle-va-strangle-la-gi/?srsltid=AU7gw4WEYHhDklqrVNFNblr05d9tHUtLzZ6ZKVsbTk-hFyXmbi1rNOjE) | 금융 해설 |
| 7 | [Chiến lược Short Straddle là gì? Nội dung liên quan](https://vietnambiz.vn/chien-luoc-short-straddle-la-gi-noi-dung-lien-quan-20191230154417479.htm) | 금융 해설 |
| 8 | [Straddle là gì vậy? : r/poker](https://www.reddit.com/r/poker/comments/bp2btt/whats_a_straddle/?tl=vi) | 포럼 [P] |
| 9 | [Chiến Lược Quyền Chọn Straddle: Cách Kiếm Lợi Nhuận ...](https://www.bybit.com/vi-VN/learn/options/what-is-a-straddle) | 금융 해설 |
| 10 | [straddle nghĩa là gì? Từ điển Anh Việt](https://vdict.com/straddle,1,0,0.html) | 사전 |
| 11 | [Thang máy" là gì \| Thuật ngữ ngoại hối - Fibo Group](https://www.fibovn.com/products/clients/glossary/straddle/) | 금융 용어 |

#### ⑦ cooler là gì

| R | 제목·URL | 유형 |
|---:|---|---|
| 3 | ["cooler" được dùng thế nào trong đề thi IELTS?](https://mochidictionary.net/context-of-word/cooler) | 영어 학습 |
| 4 | [Air cooler là gì? Máy làm mát air cooler giá bao nhiêu?](https://quatcongnghiepviet.com/air-cooler-la-gi-may-lam-mat-air-cooler-gia-bao-nhieu/?srsltid=AU7gw4WTKw9GVAbtoywygb4AM5FXo40xMIjbPwiwR9Mqe28IWqz8qome) | 냉방 제품 해설 |
| 5 | [Các từ đồng nghĩa và trái nghĩa của cooler trong tiếng Anh](https://dictionary.cambridge.org/vi/thesaurus/cooler) | 사전 |
| 6 | [Sự khác biệt giữa máy làm lạnh làm mát bằng nước và máy ...](https://vn.vrcoolerar.com/news/what-is-the-difference-between-water-cooled-ch-72353397.html) | 냉각 장비 |
| 7 | [Air Cooler là gì? Cấu tạo và nguyên lý làm mát](https://nextfan.vn/air-cooler-la-gi/) | 냉방 제품 해설 |
| 8 | [Một hệ thống HVAC khô mát là gì? -Tin tức](https://vn.vrcoolerar.com/news/what-is-a-dry-cooler-hvac-system-13108576.html) | 냉각 장비 |
| 9 | [Máy làm lạnh lưu trữ lạnh là gì? - Tin tức](https://vn.vrcoolerar.com/news/what-is-a-cold-storage-evaporator-11032101.html) | 냉각 장비 |
| 10 | [Cooler là gì - Kiến thức - Wuxi TECFREE](https://vn.tecfree-radiator.com/info/what-is-cooler-95295502.html) | 냉각 장비 |

R1 AIO, R2 이미지. 포커 해설은 관측되지 않았다.

#### ⑧ bad beat

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Bad beat](https://en.wikipedia.org/wiki/Bad_beat) | 위키 [P] |
| 3 | [Cách xử lý các lần thất bại bad beat](https://www.natural8.com/vi/blog/how-to-deal-with-bad-beats) | 운영사 해설 [P] |
| 4 | [Bad Beat](https://open.spotify.com/artist/6hMPWgUWDIgcQuR1kVl36b) | 음악 |
| 5 | [Giải Jackpot Bad Beat - Các Câu Hỏi Thường Gặp](https://help.ggpoker.com/vi/article/Bad-Beat-Jackpot---Frequently-Asked-Questions) | 운영사 잭팟 지원 [P] |
| 6 | [BAD BEAT (@badbeatmi)](https://www.instagram.com/badbeatmi/) | 음악 소셜 |
| 7 | [bad beat poker - Apps on Google Play](https://maihongphuc.vn/store/bad-beat-poker/) | 앱 표방 [P]·내용 미검증 |
| 8 | [What is a bad beat in sports betting? - The Athletic](https://www.nytimes.com/athletic/2545239/2022/01/26/bad-beats-sports-betting/) | 스포츠베팅 뉴스 |
| 9 | [Bad Beat - ManfroP - tải mp3 download \| lời bài hát](https://www.nhaccuatui.com/bai-hat/bad-beat-manfrop.AWGyIsCK3xRQ.html) | 음악 |
| 10 | [What is a Bad Beat in Poker?](https://www.pokernews.com/pokerterms/bad-beat.htm) | 포커 매체 용어집 [P] |

#### ⑨ bluff poker — 경량

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Bluff (poker)](https://en.wikipedia.org/wiki/Bluff_(poker)) | 위키 [P] |
| 2 | [Cách thực hiện bluff thành công trong poker](https://www.natural8.com/vi/blog/poker-bluff) | 운영사 해설 [P] |
| 4 | [How do I bluff? : r/poker](https://www.reddit.com/r/poker/comments/1ccywhf/how_do_i_bluff/) | 포럼 [P] |
| 5 | [Cách biến đôi nhỏ thành Bluff: Chiến thuật Poker nâng cao ...](https://wikipoker.net/bien-doi-nho-thanh-bluff/) | 전문 해설 [P] |
| 6 | [Nghệ Thuật Bluffing](https://ggpoker.com/vi/blog/the-art-of-bluffing/) | 운영사 해설 [P] |
| 7 | [Top 5 Amazing BLUFFS \| Poker Highlights \| partypoker](https://www.youtube.com/watch?v=Noo4Ua7Jmc0) | 영상 [P] |
| 8 | [Bluff Definition \| What is a Bluff in Poker?](https://www.pokernews.com/pokerterms/bluff.htm) | 매체 용어집 [P] |
| 9 | [https://www.facebook.com/TriTruongDarkHorse/posts/...](https://www.facebook.com/TriTruongDarkHorse/posts/bluff-k%E1%BB%B9-n%C4%83ng-t%E1%BA%A5n-c%C3%B4ng-t%C3%A0-%C4%91%E1%BA%A1o-trong-poker-%C4%91%C3%A2y-l%C3%A0-b%C3%A0i-tr%C3%AD-vi%E1%BA%BFt-l%C3%BAc-4g-s%C3%A1ng-d%E1%BB%B1a-tr/122270914460197996/) | 소셜 [P] |
| 10 | [How to Bluff in Poker](https://www.winstar.com/blog/how-to-bluff-in-poker-and-successfully-pull-it-off/) | 운영사 해설 [P] |

#### ⑩ thuật ngữ trong poker — 경량

| R | 제목·URL | 유형 |
|---:|---|---|
| 1 | [Từ điển thuật ngữ poker](https://google.com/goto?url=CAEStgEB6zswFTXLcyD2pfj4-SC4g8-6wLykucR61NvjMJQMFjdmDtIzu1mtTu6Cg5Q2pxqgOazod0pshXnp5mvYb6rset6fHPjYXlp5FXFZIRMOJ5Zrjql3Tpg3LVxrxB4EONsyzmUyezsN6msP5pgZ6UKFdCPrrUFL985CBbDKjq3xz5A1WGQgPk8H17K0wjUFc84VUz20XXIwG66IY2bK2j54bWbRlNuxK-Vl01l68uDVcIBRrPFwLQ) | Google 중계 [P] |
| 2 | [Thuật ngữ Poker](https://google.com/goto?url=CAESxwEB6zswFa4W_94rjncGd5nlizdNBGLZaIWjGlKjP2rEm2uJy6YHW9dGchpbnUq_Az7-lFtWjZb-yqdkv72OqOjT-4WcR1ccnvcEFt3sdl1F3eikDnS1jrGiZRvDXuaOwPA47_d1IB8-VSNUv6PE9nXvSpmnUlhw6q1yW4sjBSin-FFP_srhk5XHPa18kRnZ6hFjQ5td48ivZfJyBtv1DJEgkUY64a0vw_s1xkyE6ZmBWD-PbbXnKUjueiRwlnqajoVmIs0j-lvr) | Google 중계 [P] |
| 3 | [Thuật ngữ Poker - Các cụm từ thông dụng và ý nghĩa](https://google.com/goto?url=CAESrgEB6zswFdIV7QRnbmDWL_eGeCb3q-Lc1cWBYHncyEC2aEefajN8WdHNRF5RxVcATfDFNn-O2F-aKheGc3SSi9zsWaCuGWXzkKkwfp-XGV2vwjkRyy4MZLf-O_32M53iN3QolWioMLSl0RkOm0hmWVvI2XIOekLIDi1lqkt-UafdFIo7CKK8912Wa3jlMgk4vDTkAHffAF3lpqYi3X-iENTbOhzIlH6N54waEpTpeRw) | Google 중계 [P] |
| 4 | [Thuật ngữ Poker](https://google.com/goto?url=CAESowEB6zswFelNB8hWaZPkhLV08InYaNO5hh0zgQ3WL4QORWQAwVgSkc7ZJ_oIg8EsCAl0_0Qu_QnjhUEXD4gnVtBXI0HHzilp1fWEt_Xc598ZWU1ADwcRwQY7KsNmltcX5BJx5fBx-Y82K6q74zapJQvyEWx6njZJu8kPxqxB54gR5bqTvLSn9ilx1VnZY--LwTr6Czx9CNu3B1U4CJ8mG7GqbKVE) | Google 중계 [P] |
| 5 | [Thuật ngữ poker?](https://www.reddit.com/r/poker/comments/1gf7ml0/poker_terms/?tl=vi) | 포럼 [P] |
| 6 | [các thuật ngữ và ý nghĩa thông dụng trong poker](https://google.com/goto?url=CAESvQEB6zswFahWyjT1uDRnp9TLpanDdr5-n4lODCGN0jgsya51wwaGZSZM9BBAtHZPh1v-1Dt7X86tMzmgaiEI4Ll9h7foEhUUWCLYGfb9dA3wxpDl6jziHsHhyCLa46YQdoLw-w8JXPa4HCJ1FdG0UQ5E-Bcq_JG-WCU2e6lbrUBdZKKhAUhUuVFCMBjFEOaecjyxl523IwTmbkPLi95G3nXe7baP9WSfWe1NXMFMu4n18hFN9vH_NHHOYhZYawk) | Google 중계 [P] |
| 7 | [Thuật ngữ poker, có lẽ bạn không biết nhỉ?](https://www.reddit.com/r/poker/comments/130jaa0/poker_lingo_maybe_you_dont_know/?tl=vi) | 포럼 [P] |
| 8 | [Còn mấy bạn, thuật ngữ poker nào làm ...](https://www.reddit.com/r/poker/comments/wm29vf/what_poker_term_did_you_misunderstand_for_the/?tl=vi) | 포럼 [P] |

5개 중계 URL 모두 열람 실패했다. 제목만으로 특정 운영사·용어집과 연결하지 않았다.

#### ⑪ nuts là gì — 경량

지정 조건 원자료 없음. §4의 nuts 해설 두 편은 **내용 비교용 보충 원문**이다. Google VN 순위·오염 수·PAA를 복원하는 자료로 사용하지 않는다.

### 3-B. PAA — 11개 원문

| 검색어 | PAA 원문 | 채택 여부 |
|---|---|---|
| bluff là gì | `Call someone's bluff là gì?` | 영어 관용구. 포커 FAQ로 그대로 채택하지 않음 |
| rake là gì | `Rake in là gì?` | 영어 구동사·제외 |
| rake là gì | `Rake leaves là gì?` | 낙엽 긁기·제외 |
| rake là gì | `Cái cào tiếng Anh là gì?` | 도구 명칭·제외 |
| rake là gì | `Drake có nghĩa là gì?` | 다른 단어·제외 |
| straddle là gì | `Straddle nghĩa là gì?` | 포커 한정 설명으로 사용할 경우 문맥 표시 |
| straddle là gì | `Tư thế straddle là gì?` | 자세 의도·제외 |
| thuật ngữ trong poker | `Làm cách nào để chơi poker giỏi?` | 짧게 답하고 L-D로 위임 |
| thuật ngữ trong poker | `Blind trong poker là gì?` | glossary 요약 → L-A blind |
| thuật ngữ trong poker | `Buy in poker là gì?` | glossary 요약 → 포맷·토너먼트 글 |
| thuật ngữ trong poker | `Poker là môn thể thao gì?` | 기본 정의 범위에서 L-A와 조정 |

나머지 제공 검색어에서는 PAA 행이 관측되지 않았다. 이는 **Google에 질문이 전혀 없다는 판정이 아니다.** 경쟁 글의 FAQ도 Google PAA로 바꾸어 기록하지 않았다.

### 3-C. 특수 요소·related

| 요소 | 직접 센 결과 |
|---|---|
| AIO | 2개 검색어: fish·cooler. 존재만 기록, 내용은 사실 근거로 사용하지 않음 |
| Featured snippet | 제공 원자료에 표식 없음 |
| 이미지 팩 | fish·cooler 각 1 |
| 영상 팩 | bad beat·bluff poker 각 1, 영상 항목 총 6 |
| Knowledge graph | bluff poker에 `Bluff` 1 |
| PAA | 4개 검색어, 질문 11개 |
| Related | straddle·bad beat·bluff poker 3개 검색어 |

**영상 팩 원문**

- bad beat: `YouTube · PokerNews: WHAT IS A BAD BEAT IN POKER?` / `YouTube · Poker Perfected: The Rarest Bad Beats In Poker History` / `YouTube · xBrutalYouth666x: Bad Beat - ST LP 2025 (Full Album)`
- bluff poker: `YouTube · Jonathan Little - Poker Coaching: How To Bluff PERFECTLY` / `YouTube · UpswingPoker: Top 5 Spots to Bluff in Poker | Upswing Poker Level-Up` / `YouTube · GTO4OMC: Bluff Here, Not There: A Beginner's Guide to Poker Bluffs`

6개 중 제목상 포커 5, 음악 1이다. 영상을 재생·분석한 결과가 아니다.

**Related 원문**

| 검색어 | 원문 |
|---|---|
| straddle là gì | Straddle poker là gì · Straddling là gì · Straddle the line là gì · Straddle trong logistics là gì · Community straddling là gì |
| bad beat | Bad Beat poker jackpot · Bad beat poker payout · Bad Beat jackpot |
| bluff poker | Bluff poker game · Bluff là gì · How to bluff in real life · What is a bluff in geography · How to tell if someone is bluffing in poker · Bluff Casino · Bluff vs lie · Turn Poker |

---

## 4. 상위 해설 원문 정독

### 4-A. 방법·열람 실패

**원문 26편을 읽었다.** 원래 헤드에 포커 해설이 없거나 접근할 수 없으면 결합형 검색으로 실제 해설을 찾았다. 이 보충 글을 지정 VN SERP의 “상위 3위”처럼 표기하지 않는다.

외부 저작물의 H1/H2/H3는 **출처별 짧은 축어 발췌**만 싣고, 전체 구조는 한국어 요약과 직접 센 헤딩 수로 남긴다. `…`는 발췌 표시이며 원문에 없는 문구를 헤딩으로 만들지 않았다. 전체 헤딩의 축어 전재본은 아니다.

분량은 열람한 교육 본문에서 메뉴·목차 중복·광고를 가능한 범위에서 제거한 **공백 단위 어절 수의 근사치**다. 베트남어 언어학적 단어 수가 아니다. 이미지 수는 본문·대표 이미지의 식별 가능한 위치를 세고, 동일 이미지의 반응형 중복 표시는 한 번으로 처리했다. `0`은 추출된 본문에서 관측되지 않았다는 뜻이다.

| 실패·제한 대상 | 실제 상태 | 대체 |
|---|---|---|
| thuật ngữ poker R5, nhacaiuytin.lawyer | 도구에서 접근 불가 | G2·G3 |
| thuật ngữ trong poker 중계 R1·2·3·4·6 | 모두 도착지 접근 불가 | G1·G2·G3의 실제 원문 |
| MMO4ME rake | 타임아웃 | R1·R2·R3 |
| U Lifestyle rake | HTTP 403 | R1·R2·R3 |
| Hanoi Hotel bluff | HTTP 404 | B1·B2·B3 |
| WikiPoker 종합 용어집 | 첫 열람에서 A~L 본문 일부 확인, 후속 요청 타임아웃 | 부분 자료 G4로만 사용 |
| Natural8 rake 계열 | 미러 타임아웃, 정식 경로에서는 해설 본문 확보 실패 | R2·R3 |
| 추가 fish·rake 후보 일부 | 타임아웃 | Pokerology·BetMGM의 열리는 본문으로 대체 |

실패한 글에는 내용 오류·분량·용어 빈도를 부여하지 않았다. 운영사·제휴 사이트는 교육 본문만 검토했으며 추천·가입·합법성 부분은 타깃 분석에서 제외했다.

### 4-B. glossary — 3편 + 부분 열람 1편

| ID·원문 | H1/H2/H3 축어 발췌 | 구조·분량·매체 | 직접 관찰 |
|---|---|---|---|
| **G1** [Gamebaidoithuong 원문](https://gamebaidoithuong2019.com/thuat-ngu-poker/) — 원자료 R6 | H1 `Thuật ngữ poker quan trọng mọi người chơi cần biết`; H2 `Kết luận`; H3 `Thuật ngữ hành động` | 약 1,250어절; H2 4·H3 2; 이미지 3; 표·FAQ·영상 0 | 기본 설명→액션→기타 용어→필요성. **정의 항목 10개**: 액션 5, 기타 5. 짧고 접근하기 쉽지만 광범위한 사전은 아님. 족보 누락 E1 확인 |
| **G2** [Natural8 용어집](https://www.natural8.com/vi/poker-terms-definitions) — 보충 | H1 `Thuật ngữ Poker`…; H2 `C`; H3 없음 | 약 5,300어절; H2 23개 A~W; **불릿 정의 198개**; 본문 표·이미지·FAQ·영상 0 | 알파벳 탐색과 폭넓은 항목은 강점. Hold’em 외 게임 항목도 섞임. 번역 품질 편차와 카드·사이드팟 오류 E2~E4 확인 |
| **G3** [Stake 용어 해설](https://stake.com/vi/blog/poker-slang-terms-glossary) — 보충 | H1 `Giải Thích Thuật Ngữ Lóng Trong Poker`; H2 `Một Số Cụm Từ`…; H3 `Board` / `Cooler` / `On Tilt` | 약 900어절; H1 2; 교육부 H2 1·H3 11; 이미지 1; 표·FAQ·영상 0 | 보드·버튼·드로·tilt·shark 등 **11개**의 짧은 해설. cooler의 강한 패 충돌 사례 있음. 뒤의 홍보 섹션은 분석에서 분리 |
| **G4** [WikiPoker 용어집](https://wikipoker.net/thuat-ngu-poker/) — 부분 | H1 `111+ Thuật ngữ Poker`…; H3 `L` | 전체 분량·전체 항목 수 판정 안 함 | A~L 열람 구간에 영문·베트남어 대응어와 카드 예시. LAG 설명의 용어 오류 E6 확인. 전체 정독 3편에 포함하지 않음 |

**경험·예시:** G1은 일반 설명 중심이다. G2는 카드 랭크 예시가 있으나 정확성 문제가 있다. G3는 상황형 예시가 있지만 실제 핸드 기록은 아니다. G4의 열람 구간에는 구체적인 카드 조합이 있다. 이를 베트남 현장 경험의 검증된 기록으로 해석하지 않았다.

### 4-C. fish — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **F1** [WikiPoker fish](https://wikipoker.net/cach-nhan-biet-fish-trong-poker-low-stakes/) — 보충 vi | H1 `Cách nhận biết Fish trong Poker`…; H2 `3 Cách nhận biết Fish trong poker dễ nhất`; H3 `Quan sát số lượng hand mà đối thủ chơi` | 약 1,050어절; H2 2·H3 3; 이미지 4; 표·FAQ·영상 0 | 참여 빈도·패배 반응·놓지 못하는 패로 설명. 단일 VPIP 문턱보다 행동 관찰 중심. 구체적 확률 검산 대상은 적음 |
| **F2** [PokerNews fish](https://www.pokernews.com/pokerterms/fish.htm) — 보충 EN | H1 `Fish`; H2 `Fish Definition: What is a Fish in Poker?`; H3 `Bet big v. fish` | 약 2,800어절; H2 6·H3 5; FAQ 4; 본문 표·이미지·영상 0 | 식별·대응·donkey 비교·예절·자기 개선까지 연결. 블라인드가 마지막 행동이라는 설명은 스트리트 한정이 필요 |
| **F3** [Pokerology fish](https://www.pokerology.com/poker/rules/fish/) — 보충 EN | H1 `What Is a Fish in Poker: Identifying and Exploiting Weak Players`; H2 `Identifying Fish in Poker`; H3 `Pre-Flop Tendencies` | 약 1,750어절; H2 9·H3 17; **표 1·데이터 3행**; FAQ·영상 0 | 계산과 행동을 연결하지만 VPIP의 최적 범위를 포맷 조건 없이 제시. 드로 표의 스트리트·실현 조건 및 장기 EV 산출 전제가 부족 |

F3의 `20/(30+20+20)=28.57%` 필요 equity 계산은 맞다. 그러나 드로 확률과 10,000핸드 EV 영향은 발생 빈도·추가 비용·범위가 없어 재현되지 않는다. 인용 연구도 구체 논문 대신 저널 링크가 제시되어 **연구 내용은 미검증**이다. 허위 연구라고 단정하지 않는다.

### 4-D. tilt — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **T1** [WikiPoker tilt](https://wikipoker.net/tilt-la-gi-poker/) — 보충 vi | H1 `Tilt là gì trong Poker?`…; H2 `Những dấu hiệu nhận biết tilt là gì?`; H3 `Khó tập trung` | 약 3,200어절; H2 8·H3 17; 이미지 5; FAQ·표·영상 0 | 정의·사례·영향·징후·원인·관리·이점. 관리 소제목은 8개지만 번호 `#7`이 두 번 등장. 이는 편집 오류이지 포커 규칙 오류가 아님 |
| **T2** [Natural8 tilt](https://www.natural8.com/en/blog/understanding-tilt-in-poker) — 보충, EN으로 열림 | H1 `Understanding Poker Tilt And Top Tips To Reduce Its Effects`; H2 `What is Tilting?`; H3 `Positive Attitude` | 약 2,200어절; H2 6·H3 9; 이미지 6; FAQ 2 | 자기 관찰·핸드 분석·휴식·중단 기준. 1% 사건을 100번에 한 번으로 설명한 부분은 평균과 보장을 구분해 읽어야 함 |
| **T3** [PokerNews tilt](https://www.pokernews.com/pokerterms/tilt.htm) — 보충 EN | H1 `Tilt`; H2 `What is Tilt in Poker?` / `Managing Tilt`; H3 없음 | 약 400어절; H2 5; FAQ 4; 표·이미지·영상 0 | 정의를 빠르게 찾기 좋음. 상세한 행동 기록·회복 절차는 짧음 |

세 글 모두 실제로 읽은 포커 본문이다. 심리·생리학적 설명을 의학적으로 검증한 자료는 아니며, 그런 주장을 우리 글의 핵심 근거로 승계하지 않는다.

### 4-E. bluff — 3편; `bluff poker` 경량 정독도 충족

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **B1** [Natural8 bluff](https://www.natural8.com/vi/blog/poker-bluff) — bluff poker R2 | H1 `Cách thực hiện bluff thành công trong poker`; H2 `Bluff trong poker là gì?`; H3 `Số chip tương đối` | 약 2,500어절; H2 9·H3 5; 이미지 4; FAQ·표·영상 0 | 정의·필요성·상대·히스토리·칩·semi-bluff. A-K를 Q-J-6에서 설명하는 드로 예시 있음. 무늬·액션 조건이 빠진 사례는 정확한 equity로 재사용 불가 |
| **B2** [WikiPoker 작은 페어 bluff](https://wikipoker.net/bien-doi-nho-thanh-bluff/) — R5 | H1 `Cách biến đôi nhỏ thành Bluff`…; H2 `Biến đôi nhỏ thành bluff ở River`; H3 `Ví dụ 2:`… | 약 1,900어절; H2 6·H3 3; 이미지 위치 6; FAQ 2; 표·영상 0 | BTN 대 BB, 특정 보드·사이즈와 솔버 이미지가 있음. **이미지·솔버 언급 존재는 확인**, 수치의 독립 재현은 미완료 |
| **B3** [GGPoker bluff](https://ggpoker.com/vi/blog/the-art-of-bluffing/) — R6 | 사이트 H1 `GGPOKER`; 글 제목은 H2 `Nghệ Thuật Bluffing`; H2 `Khi Nào Nên Bluff`; 글 H3 없음 | 약 1,050어절; 글 H2 7; 이미지 3; 표·FAQ·영상 0 | 읽기 쉬운 상대 관찰·타이밍 설명. 제목을 H1이라고 잘못 기록하면 안 됨. 정량적 예시는 부족 |

B2는 작은 페어를 semi-bluff에 쓰는 이유를 설명한다. 아웃이 적다는 이유만으로 “semi-bluff가 아니다”라고 지적하지 않았다. 다만 제시된 equity를 우리 솔버의 결과로 옮기려면 범위·스택·레이크·게임트리가 필요하다.

### 4-F. bad beat — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **D1** [Natural8 bad beat](https://www.natural8.com/vi/blog/how-to-deal-with-bad-beats) — 원자료 R3 | H1 `Cách xử lý các lần thất bại bad beat`; H2 `Kết luận`; H3 `Hỏi: Tại sao nó được gọi là bad beat?` | 약 2,550어절; H2 8·H3 4; 이미지 3; FAQ 4; 표·영상 0 | 감정 대응과 정의가 함께 있음. AA 대 65의 **19.21%**는 무늬가 없어 독립적으로 같은 수치를 재현할 조건이 부족. 오류로 확정하지 않음 |
| **D2** [WikiPoker bad beat](https://wikipoker.net/bad-beat-poker-la-gi/) — 보충 vi | H1 `Badbeat poker là gì?`…; H2 `7 mẹo đối phó với bad beat trong poker`; H3 `Mẹo #2: Hãy “hít thở”` | 약 1,650어절; H2 3·H3 7; 이미지 3; FAQ·표·영상 0 | 일관된 대처 흐름과 사례. 승률만으로 액션이 옳았는지 결론내리는 문장은 가격·ICM 등 조건 보완 필요 |
| **D3** [PokerNews bad beat](https://www.pokernews.com/pokerterms/bad-beat.htm) — R10 | H1 `Bad Beat`; H2 `Understanding Bad Beat`; H3 없음 | 약 500어절; H2 3; FAQ 5; 영상 임베드 1; 표·본문 이미지 0 | 간결한 정의·온라인/라이브 구분. 잭팟 조건은 운영 규정에 따라 달라지는 사례로 읽어야 함 |

잭팟 관련 문단·FAQ가 존재한다는 사실과, 그 내용을 SEO 타깃으로 삼는 판단은 별개다. 이번 처방은 일반 용어와 잭팟 상품명의 차이를 짧게 설명하는 범위다.

### 4-G. cooler — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **C1** [Natural8 cooler](https://www.natural8.com/vi/blog/what-is-a-cooler-in-poker) — 보충 vi | H1 `Hướng dẫn về cooler là gì trong poker`; H2 `Cooler có khác với Bad Beat không?`; H3 없음 | 약 1,300어절; H2 5; 이미지 4; FAQ·표·영상 0 | 비교·회피·회복 설명. 동일 확률로 9번 +100, 1번 −200이라는 가정이면 평균 **+70**, 계산은 맞음 |
| **C2** [PokerNews cooler](https://www.pokernews.com/pokerterms/cooler.htm) — 보충 EN | H1 `Cooler`; H2 `Understanding Cooler`; H3 `Cooler FAQs` | 약 400어절; H2 4·H3 1; FAQ 4; 교육 본문 표·이미지·영상 0 | 큰 패끼리의 충돌을 간결하게 설명. 광고·결제 로고는 본문 이미지 수에서 제외 |
| **C3** [PokerStars cooler](https://www.pokerstars.com/poker/learn/lesson/for-the-loser-its-called-a-cooler/) — 보충 EN | H1 `For the Loser, It’s Called a Cooler`; 추출 본문 H2·H3 없음 | 약 650어절; 이미지 1; 표·FAQ·영상 0 | 스택 깊이에 따라 상황이 달라진다는 설명. 중간 문구를 임의로 H2로 승격하지 않음 |

세 원문은 cooler를 엄밀하게 하나의 공식 기준으로 정의하지 않는다. “항상 all-in”, “반드시 특정 족보 이상” 같은 절대 기준은 채택하지 않는다. C3의 추가 분석이 필요 없다는 취지는 편집 관점이며 게임 규칙의 사실·오류 판정 대상과 분리한다.

### 4-H. rake — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **R1** [PokerNews rake](https://www.pokernews.com/pokerterms/rake.htm) — EN 대체 | H1 `Rake`; H2 `Rake Explained`…; H3 `How is Rake Calculated in Poker?` | 검토 교육부·FAQ 약 1,450어절; 해당 범위 H2 5·H3 7; FAQ 8 | pot·시간제·대회 수수료를 구분. 30분당 10을 5시간 적용하면 100으로 계산이 맞음. 중간 사이트 비교·추천부는 유형만 기록 |
| **R2** [PokerStars rake](https://www.pokerstars.com/poker/learn/news/what-is-rake-in-poker/) — EN 대체 | H1 `What is rake in poker?`; H2 `How does rake work in poker?`; H3 `Pot rake` / `Dead drop` / `Timed collection` / `Tournament fees` | 약 850어절; H2 3·H3 5; 이미지 3; FAQ·표·영상 0 | 수수료 유형을 나누고 장소별 차이를 명시. 109=100+9, 55=50+5 예시는 맞음 |
| **R3** [BetMGM rake](https://poker.betmgm.com/en/blog/poker-guides/what-is-rake-in-poker/) — EN 대체 | H1 `What Is the Rake In Poker?`; H2 `Calculating the Rake`; H3 `Time Collections` | 법률·제휴부 제외 약 1,000어절; 검토부 H2 5·H3 3; 이미지 3; FAQ·표·영상 0 | 비율·상한·징수 방식 설명. 동일 H1이 추출에 두 번 나타남. 필요한 추가 equity의 솔버 수치는 설정이 없어 재현 불가 |

세 글의 수수료 사례는 **2026년 베트남의 일반 요율**을 증명하지 않는다. R2는 2023년 글이며, 요율·상한·운영별 규정은 날짜가 있는 사례로만 취급해야 한다. no-flop-no-drop도 모든 포커 게임의 보편 규칙으로 쓰지 않는다.

### 4-I. straddle — 3편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 강점·제한 |
|---|---|---|---|
| **S1** [WikiPoker straddle](https://wikipoker.net/pot-straddle-pot-3-blind-poker/) — 보충 vi | H1 `Tiếp cận pot có straddle`…; H2 `UTG straddle` / `Button straddle`; H3 `SPR preflop thay đổi để thích ứng` | 약 1,450어절; H2 5·H3 4; 이미지 4; FAQ·표·영상 0 | 베트남어로 스택·사이즈·포지션을 연결. 1,000/15≈66.7, 1,000/35≈28.6은 맞음. 여기의 preflop SPR를 표준 postflop SPR와 혼동하지 않도록 설명 필요 |
| **S2** [PokerNews straddle](https://www.pokernews.com/pokerterms/straddle.htm) — 보충 EN | H1 `Straddle`; H2 `What is a Straddle in Poker?` / `Example of "Straddle"`; H3 없음 | 약 500어절; H2 5; FAQ 5; 표·이미지·영상 0 | 정의·2배 예시·행동 순서. FAQ에서 UTG와 허용 변형을 구분하므로 도입 문장만 잘라 “누구나 가능” 오류로 판정하지 않음 |
| **S3** [Upswing straddle](https://upswingpoker.com/what-is-a-straddle/) — 보충 EN | H1 `What is a Poker Straddle? And Should You Ever Straddle?`; H2 `Button Straddles & Mississippi Straddles`; H3 없음 | 약 1,250어절; H2 6; YouTube 링크 1; 표·FAQ 0 | 버튼 straddle의 시작 위치가 하우스 룰에 따라 달라짐을 설명. 300/3=100BB, straddle 6 기준 50단위로 얕아지는 예시가 정확 |

S1의 버튼 straddle 설명은 특정 진행 방식으로 읽을 수 있다. 다른 방식을 소개하지 않았다는 이유만으로 규칙 오류를 확정하지 않는다. 다만 입문 글이라면 **적용할 하우스 룰을 먼저 선언**해야 한다.

### 4-J. nuts — 경량 2편

| ID·원문 | 헤딩 축어 발췌 | 구조·분량·매체 | 검산 |
|---|---|---|---|
| **N1** [PokerNews nuts](https://www.pokernews.com/pokerterms/nuts.htm) — 보충 EN | H1 `Nuts`; H2 `What is the Nuts?`; H3 없음 | 약 500어절; H2 5; FAQ 4; 표·이미지·영상 0 | 넛의 정의·변화 설명은 유용하지만 FAQ의 승리 보장 표현은 E5 반례로 수정 필요 |
| **N2** [PokerStars nuts·blockers](https://www.pokerstars.com/poker/games/rules/hand-rankings/the-nuts-and-blockers/) — 보충 EN | H1 `The Nuts and Blockers in Poker`; H2 `Examples`; H3 `Example two: a flush board` | 약 700어절; H2 5·H3 3; FAQ 4; 표·이미지·영상 0 | 페어 보드·플러시 보드·블로커 예시를 직접 검산. 아래 설명처럼 제기했던 스트레이트 플러시 의심은 **기각** |

N2의 보드는 **A♠ T♠ 6♠ 3♥ 2♠**다. 3이 하트이므로 4♠5♠는 스트레이트 플러시가 아니다. K♠를 가진 플레이어의 플러시가 상대에게 패하지 않는다는 설명은 맞다. 가능한 홀카드 1,081조합의 베스트 5도 열거해 확인했다. 이 지적은 오류 목록에서 제외했다.

### 4-K. §13 검산 — 확정 오류와 정답

카드 반례는 7장 중 가능한 5장 조합 21개를 비교했다. 무늬가 없는 원문에는 반례 검산용 무늬를 별도로 지정했다.

| ID | 원문 축어 발췌 | 직접 검산·정답 | 확신 |
|---|---|---|---|
| **E1 · G1 족보 누락** | `sảnh, sám, đôi và mậu thầu` | 전체 서열 목록에서 **two pair가 빠졌다.** 해당 구간은 straight > trips > **two pair** > one pair > high card. 보드 K♠7♦2♣9♥3♠, K♥7♣의 베스트 5는 KK779로 A♣A♦의 AAK97을 이김 | 높음 |
| **E2 · G2 counterfeit** | `quân bài cao hơn 7 sẽ đánh bại` | 원문은 77, 보드 Q-8-7-A-8을 설명한다. 이는 **77788 풀하우스**다. 예시 무늬 Q♦8♣7♦A♥8♠ + 7♠7♥. 상대 K♠9♣는 88AKQ 원페어라 패함. “7보다 높은 카드가 있으면 이긴다”는 설명은 틀림 | 높음 |
| **E3 · G2 open-ended draw** | `đã hoàn thành một ván bài sảnh` | 9T + 7-8-K는 아직 스트레이트가 아니다. 7·8·9·T 네 연속 랭크이며, **6 또는 J**가 필요. 알려진 다섯 카드 기준 스트레이트를 만드는 다음 카드 8장. 이 8장이 항상 승리 아웃이라는 뜻은 아님 | 높음 |
| **E4 · G2 side pot** | `đủ điều kiện cho side pot` | 원문은 all-in 플레이어가 side pot에만 자격 있다고 설명. A=50 all-in, B=C=100이면 main pot=150, side pot=100. **A는 main pot에만 자격**, B·C는 둘 다 경쟁. 일반 규칙은 자기 납입액으로 커버한 팟에만 자격이 있다는 것 | 높음 |
| **E5 · N1 nuts** | `you're guaranteed to win the hand with the nuts` | 넛이어도 단독 승리를 보장하지 않음. 보드 A♠K♠Q♠J♠T♠에서는 2♣3♦와 4♣5♦ 모두 같은 로열 플러시를 사용해 분할. 이전 스트리트의 넛은 이후 바뀔 수도 있음 | 높음 |
| **E6 · G4 LAG 정의** | `Một người chơi chậm chạp và do dự` | 포커 플레이 스타일의 **LAG는 loose-aggressive**다. 느리고 우유부단한 플레이어라는 설명과 다르다. 로컬 EN glossary의 LAG 정의와도 대조됨 | 높음·용어 오류 |

E6은 족보·확률 계산 오류가 아닌 **용어 정의 오류**로 구분한다. G2의 긴 원문은 인용 범위 제한 때문에 핵심 오류 구절만 제시했다.

### 4-L. 오류로 확정하지 않은 항목

| 항목 | 판단 |
|---|---|
| N2의 K♠ 넛 플러시 | **오탐 기각.** 3♥를 3♠로 읽으면 생기는 잘못된 반례였다 |
| T2의 `once every 100 situations` | 장기 평균의 설명이면 타당. 매 100회마다 반드시 한 번이라는 뜻이면 부정확. 독립 1% 사건의 100회 내 최소 1회 확률은 `1−0.99¹⁰⁰=63.40%`. **문장 의도에 대한 오류 확신 낮음** |
| D1의 AA 대 65, 19.21% | 무늬·승리와 equity 구분이 없어 같은 값 재현 불가. 오답 확정 안 함 |
| F2의 9아웃 약 36% | rule of 4 근사로는 가능. 두 장을 볼 조건 없이 턴 한 장의 확률처럼 쓰면 안 됨 |
| F3의 “최적 VPIP” | 인원·포맷·스택·전략에 따라 다름. 전제 누락이며 특정 숫자가 모든 상황에서 틀렸다는 판정은 안 함 |
| B2·R3의 솔버 수치 | 입력 조건 부족으로 재현 불가. 수치가 허위라는 판정 안 함 |
| S1의 preflop SPR | 나눗셈은 맞음. 용어 사용과 실제 postflop SPR의 차이를 설명할 필요 |
| cooler의 넓은 정의 | EN 마스터가 택한 엄격한 정의와 다르다고 경쟁 글을 규칙 오류로 판정하지 않음 |

독립 확률 확인: 상대 홀카드가 미지인 일반적인 9아웃 드로에서 두 장 중 적어도 한 번 맞을 확률은 `1−(38/47×37/46)=34.97%`, 턴에서 리버 한 장은 `9/46=19.57%`다. 이는 **핸드 전체 승률이 아니라 지정 아웃을 맞힐 확률**이다.

### 4-M. 베트남어 번역어 빈도 — 12개 vi 본문 표본

표본은 G1·G2·G3·F1·T1·B1·B2·B3·D1·D2·C1·S1이다. EN 글과 부분 열람 G4는 제외했다. Unicode를 정규화하고 단어 경계를 적용했다. 표제어·교육 본문을 포함하고 메뉴·목차 중복·광고를 제외했다.

`thùng`, `sảnh`는 긴 표현 안의 출현도 포함한다. 따라서 행별 횟수를 더해 독립 용어 총수로 사용하면 안 된다.

| 표기 | 출현 문서/12 | 출현 수 | 해석 |
|---|---:|---:|---|
| thùng | 7 | 20 | 플러시·플러시 드로 및 복합 족보 표현 |
| sảnh | 7 | 20 | 스트레이트·드로 및 복합 족보 표현 |
| cù lũ | 3 | 4 | G1·G3·C1에서 확인 |
| sám cô | 0 | 0 | 이 표본에서 미관측. 베트남 전체에서 안 쓴다는 뜻 아님 |
| xám cô | 0 | 0 | 같은 제한 |
| sám | 1 | 1 | G1의 족보 목록 |
| sảnh rồng | 0 | 0 | 완전 열람 12편에서는 미관측 |
| thùng phá sảnh | 2 | 2 | G1·D1 |
| thùng sảnh | 1 | 1 | G3 |
| bỏ bài | 4 | 26 | fold 설명에 사용 |
| call | 8 | 43 | 차용어가 여러 글에서 유지됨 |
| raise | 5 | 13 | 차용어 사용 |
| fold | 6 | 23 | 차용어 사용 |
| blind | 4 | 35 | 포지션·강제 베팅 표현 |
| cược mù | 1 | 1 | G2 |
| mù — 문자열 전체 | 2 | 6 | 아래 의미 검수 필요 |
| xì tố | 0 | 0 | 미관측. Hold’em 동의어로 채택할 근거 없음 |
| xì phé | 1 | 7 | G2의 폭넓은 poker 번역 문맥 |
| bluff | 7 | 155 | 번역으로 대체하지 않고 차용어를 유지하는 사례 다수 |
| tilt | 5 | 83 | T1 반복이 많으므로 횟수만으로 전체 선호를 판단하지 않음 |

**일반어와 겹치는 항목은 문맥을 다시 읽었다.**

| 문자열 | 기계 집계 | 의미 검수 후 |
|---|---:|---|
| tố | 7문서·17회 | **포커 액션 용법은 G2의 3회**. 나머지 14회는 `yếu tố` 등 일반어 |
| theo | 10문서·36회 | **call 의미로 명시적인 것은 G1의 2회**. 그중 `theo cược` 1회. 나머지는 ‘따라’, ‘다음’ 등 |
| cá | 5문서·11회 | 이 11회를 fish 별칭 사용으로 세면 안 됨. 개인·베팅·상어 표현 등이 섞임 |
| mù | 2문서·6회 | G2의 `người mù` 3회는 blind의 어색한 직역. S1은 bet와 결합한 표현. 6회 전부를 권장 표기로 삼지 않음 |

부분 열람 G4에서는 `sảnh rồng`과 flush·full house의 베트남어 대응어가 보였다. 그러나 **이 F 자료만으로 `sảnh rồng`이 Hold’em royal flush의 표준어인지, 다른 게임 용어인지 확정할 수 없다.** 해당 검색어의 SERP 판정은 L-B가 담당해야 한다.

**편집 권고**

- 최초 등장: **영어 표제어 + 짧은 베트남어 풀이**, 이후 자연스러운 차용어를 유지한다.
- `call — theo cược`, `fold — bỏ bài`, `raise — tăng mức cược`처럼 액션과 의미를 연결한다. `tố` 사용 여부는 L-A 정본과 맞춘다.
- `blind`는 강제 베팅이라는 설명을 붙인다. 사람을 뜻하는 직역은 피한다.
- `thùng / sảnh / cù lũ`는 실제 본문에서 확인됐지만, 빈도가 곧 정확성을 뜻하지 않는다.
- `sám cô/xám cô`, `sảnh rồng`, `xì tố`는 F 표본의 빈도만으로 정본을 결정하지 않는다.
- NLHE 용어집에 다른 게임의 규칙을 섞을 때에는 별도 표시한다. G2에 Omaha 등의 항목이 있다는 사실을 “모든 설명이 Hold’em에 적용된다”로 옮기지 않는다.

---

## 5. 상위 해설의 장단점과 차별화 지점

| 축 | 관측 강점 | 관측 약점 | 우리 글의 차별화 |
|---|---|---|---|
| glossary | 알파벳 탐색, 짧은 정의, 많은 항목 | 항목 수가 많아도 번역·카드 예시가 틀릴 수 있음 | 상황별 분류 + 영문/vi 대응 + 검산된 혼동어 비교 |
| fish | 행동 징후·자기 점검·예절까지 확장 | 단일 VPIP 문턱, 상대를 단정하는 설명 | 포맷·표본 수를 명시하고 한 번의 플레이로 낙인찍지 않기 |
| bad beat | 감정 대응이 구체적이고 읽기 쉬움 | 정확한 카드·시점 없는 확률, 잭팟 의도 혼합 | 돈이 들어간 시점과 그때의 equity를 분리해 표시 |
| cooler | 비교 의도와 강한 패 충돌을 빠르게 설명 | “못 피한다”가 무조건 콜하라는 뜻으로 읽힐 수 있음 | 스택·액션 조건과 잘못 플레이한 경우의 반례 |
| rake | 유형·비율·상한·시간제 설명 | 특정 요율의 일반화, 추천·법률로 흐르기 쉬움 | 추상 칩 예시로 계산 구조와 분모 차이 설명 |
| straddle | 정의를 포지션·스택 깊이와 연결 | 버튼·Mississippi 순서가 하우스 룰에 좌우됨 | 적용 규칙을 선언한 좌석별 액션 표 |
| bluff | 결합형 SERP의 실제 교육 콘텐츠가 풍부 | 정의·전략·하이라이트가 섞임; 일부 솔버 수치 재현 불가 | 정의와 전략을 분리하고 예시의 입력 조건 공개 |
| nuts | 짧은 정의와 보드 예시가 강함 | 단독 승리·현재 넛·최종 넛을 혼동할 여지 | 7장 베스트 5, 블로커, 보드 플레이·분할 반례 |

“경험담이 있다”는 이유만으로 우위로 잡지 않는다. 실제 핸드 기록이 없다면 **설명용 예시**라고 적고, 베트남 클럽에서 직접 겪은 일처럼 꾸미지 않는다.

---

## 6. 우리 글 대조 — EN 6편

제공 `vi/` 폴더에는 파일이 없었다. 따라서 이 레인의 여섯 글은 **EN 마스터 기준으로 대조**했다. 프로젝트 전체에 vi 글이 없다는 뜻은 아니다. 제공되지 않은 현 vi seoTitle·description·H1·FAQ는 추정하지 않았다.

### 6-A. H2·FAQ 구조와 검색 의도 갭

| EN 마스터 | 확인한 핵심 H2 축어 | FAQ 직접 집계·범위 | 이미 강한 점 | 베트남어판에서 필요한 보강 |
|---|---|---|---|---|
| `holdem-glossary.ts` | `The Terms People Mix Up Most`; `Betting Actions`; `Positions`; `Hands & the Board`; `Player Types & Slang`; `Money & the Game`; `Situations, Stats & Etiquette` | **8개**: 입문 용어·UTG·check/call·set/trips·cooler/bad beat·3-bet·nuts·VPIP/PFR | 표제어 행 **107개**: 20+9+25+11+22+20. 별도 혼동어 비교 **8개**. 상황 분류와 내부 연결이 좋음 | AC의 tiếng Việt/tiếng Anh 요구, 원문 PAA의 blind·buy-in, vi 대응어 정본. 107은 행 수이며 고유어 중복 제거 수는 아님 |
| `holdem-fish.ts` | `What Does "Fish" Mean in Poker?`; `Why Are Bad Players Called "Fish"?`; `How to Spot a Fish: 8 Telltale Signs`; `The Poker Zoo: Fish vs Shark vs Whale vs Nit vs Donkey`; `Am I the Fish? An Honest Self-Check`; `How to Stop Being a Fish` | **8개**: 뜻·모욕 여부·반대말·whale/donkey 비교·식별·개선·유명 인용 출처 | 유형 비교와 자기 점검이 F1보다 넓음. 예절 질문도 있음 | `fish poker` 의미 검색을 먼저 해결. VPIP 40~70 대 15~22 등의 비교에는 인원·포맷·표본 조건 보완 |
| `holdem-bad-beat.ts` | `What Is a Bad Beat in Poker?`; `Bad Beat vs Cooler: The Difference That Matters`; `How Big a Favorite Makes It a "Real" Bad Beat?`; `Classic Bad Beat Examples (With the Odds)`; `What Is a Bad Beat Jackpot?`; `How to Deal With a Bad Beat` | **8개**: 정의·cooler·coinflip·잭팟·유명 사례·온라인 빈도·대처·bad play 차이 | 칩이 들어간 시점과 suckout을 분리하는 비교가 좋음 | 80%를 공식 경계로 제시하지 않기. one-outer의 약 96%는 스트리트·알려진 카드 조건 명시. 잭팟 지급 비율은 일반 규칙으로 번역하지 않기 |
| `holdem-cooler.ts` | `What Is a Cooler in Poker?`; `Cooler vs Bad Beat: The Difference Everyone Gets Wrong`; `Classic Cooler Examples (The Whole Family)`; `Can You Actually Avoid Coolers?`; `When "It Was a Cooler" Is Just an Excuse`; `How to Recover From a Cooler` | **10개**: 정의·비교·운/실수·setup·KK/AA·set over set·coolered·all-in·대처·카지노 의미 | 엄격한 정의를 글의 기준으로 선언하고 넓은 용례도 인정. 핑계와 실제 불가피한 충돌을 구분 | AC `poker cooler vs bad beat` 전면화. “강한 패니까 절대 fold 불가”로 단순화하지 않기 |
| `holdem-rake.ts` | `What Is Rake in Poker?`; `How Is Rake Taken? Pot Rake, Time Charge & Dead Drop`; `How Much Rake Do You Actually Pay?`; `What Is Rakeback?`; `Do Tournaments Have Rake?`; `Online vs Live Rake: Which Is Higher?` | **11개**: 정의·계산·납부자·preflop·요율·rakeback·비용 줄이기·법률·대회·win rate·온라인/라이브 | pot·시간제·대회 수수료 구분과 예외 설명 | 법률·사이트 추천 의도 제외. EN의 달러 요율·상한을 VN 표준으로 번역하지 않기. rakeback은 용어 정의만 |
| `holdem-straddle.ts` | `What Is a Straddle in Poker?`; `How a Straddle Works: Who Acts First and Last`; `Types of Straddle (UTG, Mississippi, Button & Sleeper)`; `How Much Is a Straddle?`; `Is Straddling Allowed in Tournaments?`; `Is Straddling Profitable? Should You Straddle?` | **9개**: 정의·크기·순서·주체·raise와 차이·Mississippi·sleeper·대회·수익성 | live blind의 옵션, preflop/postflop 차이, 하우스 룰, 유효 깊이 설명 | 2BB를 설명용 표준 사례로 제시. 버튼·Mississippi 표와 본문의 하우스 룰 단서를 일치시켜야 함 |

추가 H2로 glossary에는 후속 읽기·관련 글, 다른 다섯 글에는 FAQ·기억할 점·관련 글이 있다. fish에는 유명 인용 교정, bad beat에는 유명 사례·장기 해석, cooler에는 setup/coolered 설명도 확인했다.

### 6-B. EN에서도 그대로 승계하면 안 되는 부분

| 항목 | 처방 |
|---|---|
| bad beat의 “80% 이상” | 설명용 기준·통상적 예시임을 명시. 공식 규칙처럼 경계선을 고정하지 않음 |
| bad beat의 one-outer 확률 | 특정 카드와 스트리트를 제시한 검산값으로 교체 |
| fish의 VPIP 기준 | 단일 숫자로 fish 판정 금지. 인원·포맷·표본 수·포지션 고려 |
| cooler의 엄격한 정의 | 이 글의 비교 기준이라고 밝히고 실제 용례의 폭을 인정 |
| rake의 요율·상한 | 추상 예시 또는 출처·시점이 있는 사례로만 사용 |
| straddle의 솔버 주장 | 구체 시뮬레이션을 재현하지 않았다면 보편적 수치로 내세우지 않음 |
| EN의 1인칭 체험 | 베트남 현장 경험으로 각색하지 않음. 저자 기록이 확인되지 않으면 설명용 서술로 전환 |

### 6-C. 도구 경계

| 경로 | 이 레인에서의 역할 | 제한 |
|---|---|---|
| **`/vi/glossary`** | 없음 | 브리프가 부재를 명시. 존재하는 도구처럼 링크·CTA를 만들지 않음 |
| `/vi/calculator` | 특정 핸드의 equity 확인으로 연결할 후보 | 이번 폴더에서 실제 UI·지원 기능을 검증하지 않음. rake 계산기처럼 소개하지 않음 |
| `/vi/hand-chart` | fish 글에서 시작 패·포지션 학습 연결 후보 | fish 판별기나 straddle 전용 범위표라고 소개하지 않음 |
| `/vi/tournaments` | 일정 의도의 관찰·인계 | 용어 정의나 straddle 규칙의 소유 페이지로 보지 않음 |
| `/vi/solver` | 본 조사 범위에서 재조사 안 함 | 숫자가 필요하면 특정 스팟·입력 조건으로 별도 검증 |

---

## 7. 글별 처방 — 최종 SEO 제목·설명 작성 아님

표시 규칙: **AC/PAA**는 원자료 축어, **편집 후보**는 이 조사에서 제안한 문구다. Google에서 관측되지 않은 질문을 PAA라고 표시하지 않는다. 아래 앵커는 구현 시 붙일 제안이며 현재 존재 여부를 주장하지 않는다.

### 7-A. holdem-glossary — 우선 1

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `thuật ngữ poker` 140. 영어 용어를 베트남어로 이해하고, 비슷해 보이는 용어를 구분하는 실용 사전 |
| H2 기점 — AC | `thuật ngữ poker tiếng việt`; `thuật ngữ poker tiếng anh`; `thuật ngữ poker tournament` |
| EN 유지·개명 | 혼동어 비교를 앞에 유지. 액션·포지션·보드·플레이어·게임 비용·상황별 분류를 vi 대응어와 함께 구성 |
| 추가 구조 — 편집 후보 | 영어 표제어 / vi 풀이 / 짧은 사례 / 자세히 읽기. 동일 개념의 표기 변형을 한 항목에서 찾게 함 |
| PAA FAQ | `Blind trong poker là gì?` → 강제 베팅·SB/BB를 짧게 설명; `Buy in poker là gì?` → 참가 금액과 상금 풀·수수료 구분; `Làm cách nào để chơi poker giỏi?` → 공부 방향 요약 후 전략으로 위임; `Poker là môn thể thao gì?` → 기본 게임 정의 범위에서 답 |
| 차별화 | check/call, set/trips, bad beat/cooler, nuts/강한 패를 카드·상황으로 비교. E2 같은 counterfeit 오해를 베스트 5로 방지 |
| 카니발 방지 | `#fish`, `#bad-beat`, `#cooler`, `#rake`, `#straddle`에서 1~2문장 정의 후 각 상세 글에 앵커 링크로 위임 |
| 도구 | `/vi/glossary` CTA 금지. 실제 blog 글이 탐색 허브 역할을 하도록 제안 |

`Poker là môn thể thao gì?`에는 법률·공식 스포츠 지위 주장을 덧붙이지 않는다. 그런 사실은 이번 원문 조사로 검증하지 않았다.

### 7-B. holdem-bad-beat — 우선 2

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `bad beat` 50 + `bad beat là gì` 10. “졌다는 사실”보다 **칩이 들어갈 때 앞섰는가**를 설명 |
| H2 기점 — AC | `bad beat poker là gì`; `bad beat poker hand`; `bad beat poker rules` |
| EN 유지·보강 | cooler 비교 유지. 확률 예시를 프리플롭·플롭·턴으로 구분하고 승률·아웃 확률을 섞지 않기 |
| FAQ 상태 | Google PAA 미관측. EN의 정의·coinflip·cooler·대처 질문을 **편집 FAQ**로 유지 가능 |
| FAQ 답 방향 | coinflip 패배를 자동 bad beat로 부르지 않되, 80%를 공식 규정처럼 제시하지 않음. 잭팟은 별도 상품명이라고 짧게 구분 |
| 차별화 | 아래의 정확한 one-outer 예시와 44개 리버 검산. “실제 경험” 대신 설명용 핸드라고 표시 |
| 카니발 방지 | 비교 요약은 두 글에 짧게 두고, `#cooler-vs-bad-beat`의 상세 범위를 0-3에서 조정. 감정 관리 전체는 tilt 소유 글로 위임 |
| 도구 | `/vi/calculator`가 해당 입력을 지원하는지 확인 후 동일 카드로 연결 |

**검산된 예시:** A♠A♥ 대 7♥7♦, 턴 보드 A♦7♠2♣9♥. 알려진 카드 8장으로 남은 리버는 44장이다. A의 패배는 **7♣ 한 장뿐**, `1/44=2.2727%`; 승리는 `43/44=97.7273%`, 무승부 0. 무조건 “one-outer는 약 4%”라고 쓰지 않는다.

### 7-C. holdem-straddle — 우선 3

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `straddle poker` 30, `straddle poker là gì` 30. “누가 먼저 행동하고, 누가 옵션을 갖는가” |
| H2 기점 — AC | `straddle poker là gì`; `straddle poker rules`; `straddle poker explained`; 전략은 정의·순서 뒤 |
| PAA | `Straddle nghĩa là gì?`를 포커 문맥으로 답. `Tư thế straddle là gì?`는 제외 |
| EN 유지·보강 | 액션 순서 H2 유지. UTG·button·Mississippi·sleeper를 같은 규칙처럼 묶지 않음 |
| 편집 FAQ | UTG straddle 뒤 첫 행동자, preflop과 postflop 차이, raise 옵션, 버튼 변형의 하우스 룰 |
| 차별화 | SB=1, BB=2, UTG live straddle=4라는 **적용 규칙을 먼저 선언**. 미레이즈 상황에서 UTG+1부터 행동하고 straddler가 옵션을 갖는 표 |
| 수치 예시 | 200칩은 원래 100BB, straddle 4 기준 50단위. blind 단위 변화와 실제 칩 수를 분리 |
| 카니발 방지 | blind 기본 의미→L-A, 일반 포지션 전략→L-D, 수수료 변화→rake로 앵커 위임 |
| 주의 | 일반 hand-chart를 straddle 전용 솔버 범위로 제시하지 않음 |

### 7-D. holdem-rake — 우선 4

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `rake poker` 20, `rake trong poker là gì` 20. 팟에서 무엇이 얼마나 빠지는지 이해 |
| H2 기점 — AC | `rake poker là gì`; `rake poker meaning`; `rake poker term` |
| EN 유지·보강 | pot rake·시간제·대회 fee 구분 유지. 계산에 비율·cap·적용 여부를 먼저 제시 |
| FAQ 상태 | 원자료 PAA 4개는 비포커라 채택하지 않음. 정의·계산·cap·no-flop-no-drop는 **편집 FAQ** |
| 차별화 | 가상 조건 `rake=min(0.05×pot,3)`이면 pot 40→2, pot 80→3. 사이트별 실제 요율로 오인되지 않게 표시 |
| 추가 계산 | 참가비 100+10에서 fee는 상금 기여액 대비 10%, 총 지급액 대비 약 9.09%. 분모를 명시 |
| 카니발 방지 | glossary에는 정의만. pot odds·EV 수식 상세는 L-C, 대회 구조는 L-E로 위임 |
| 제외 범위 | 합법성·사이트 비교·앱·rakeback 추천. 기존 EN FAQ라고 자동 승계하지 않음 |
| 도구 | 수수료 계산 기능을 검증하지 않은 `/vi/calculator`에 “rake 계산” CTA를 붙이지 않음 |

### 7-E. holdem-cooler — 우선 5

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `cooler poker` 10. 강한 패의 불가피한 충돌과 단순한 오판을 구분 |
| H2 기점 — AC | `cooler poker là gì`; `cooler poker hand`; `poker cooler vs bad beat`; `cooler trong poker` |
| EN 유지·보강 | 엄격한 비교 기준과 넓은 용례를 함께 설명. setup/coolered를 짧은 어휘 상자로 정리 |
| FAQ 상태 | Google PAA 미관측. EN의 정의·all-in 필요 여부·운/실수·KK/AA를 **편집 FAQ**로 사용 |
| 차별화 | 각 플레이어 7장→베스트 5를 표시한 set-over-set 예시. 결과만으로 플레이의 정당성을 확정하지 않음 |
| 검산 예시 | 보드 J♦7♥2♣5♠Q♦. 7♣7♦는 777QJ, J♠J♥는 JJJQ7. 세트라는 명칭과 최종 five-card hand를 함께 보여 줌 |
| 카니발 방지 | bad beat 비교는 공통 기준으로 맞추고 상세 설명을 앵커 링크로 위임. tilt의 전체 관리법 반복 금지 |
| 경험담 | 확인된 저자 핸드가 없으면 익명 실전담으로 꾸미지 않고 설명용 사례 사용 |

### 7-F. holdem-fish — 우선 6

| 항목 | 처방 |
|---|---|
| 주력어·훅 방향 | `fish poker` 10, meaning/term 계열. 1,000의 `fish là gì`를 타깃 규모로 쓰지 않음 |
| H2 기점 — AC | `fish poker meaning`; `fish poker term`; `fish poker player` |
| EN 유지·보강 | 8가지 징후·유형 비교·자기 점검 유지. 정의 답변을 첫 화면에 배치 |
| FAQ 상태 | Google PAA 미관측. 모욕 여부·whale/donkey 차이·자기 개선은 EN에서 가져온 **편집 FAQ** |
| 차별화 | 한 번의 limp·bad beat·콜로 플레이어를 단정하지 않음. 관측 표본과 포맷·포지션을 먼저 확인 |
| 수치 사용 | VPIP를 범용 합격선처럼 제시하지 않음. 계산 사례는 비용·pot·드로 스트리트를 완전하게 명시 |
| 카니발 방지 | 용어 비교는 이 글, bluff 세부 전략은 소유 글, 시작 패 학습은 L-D/hand-chart로 위임 |
| 톤 | 상대를 조롱하는 표현보다 구체적 행동과 자기 점검 중심. `cá`를 일괄 번역어로 강제할 근거는 부족 |

### 7-G. tilt·bluff·nuts — 소속 미정 처방 재료

| 항목 | 확보 증거 | 권고 방향 |
|---|---|---|
| tilt | bare head 1/10, 결합형 40, AC에 meaning·definition·là gì | glossary에서 짧게 정의하고, bad beat 글에는 즉시 할 행동만. 별도 관리 글의 필요성은 0-3에서 결정 |
| bluff | bare head 2/10, 결합형 관측 9/9, 볼륨 110 | glossary 정의만으로 전략 의도를 모두 받기 어렵다. bluff/semibluff/value bet 구분 후 전략 소유 글로 연결하는 안 검토 |
| nuts | F의 VN SERP 없음, wildcard 단수 `nut` 관측, 원문 2편 검산 | glossary 정의와 L-B reading-the-board의 카드 판정을 분리하는 안 검토. 단독 승리 보장 표현 금지 |
| sảnh rồng | F 완전 표본 0, 부분 용어집에서만 관측 | royal flush 대응어로 확정하지 말고 L-B의 해당 SERP·원문 근거에 따름 |

---

## 8. 0-3 판정 재료 — 결정하지 않고 인계

| 판정 항목 | SERP·원문 증거 | 한 줄 권고 |
|---|---|---|
| **① glossary 글과 도구** | `thuật ngữ poker` 140, 포커 9/10, AC에 vi/EN 대응 요구. vi glossary 도구는 부재 | **blog 용어 글을 탐색 허브로 검토하되 `/vi/glossary` 도구가 있다는 전제는 사용하지 말 것** |
| **⑪ “X là gì” 소유** | fish·tilt·bluff·straddle·cooler의 bare head는 포커 ≤2/10 | **글의 첫 정의는 결합형 의도에 맞추고, glossary 요약→상세 글 앵커 위임 구조를 검토할 것** |
| bluff 소유 | `bluff poker` 110, 관측 9개 모두 포커, 실제 전략 글 다수 | **정의와 전략을 한 용어 항목으로 모두 흡수할지 별도 글로 나눌지 우선 검토할 것** |
| **④ nuts 교차** | F에는 지정 SERP 없음; 원문에서는 넛·블로커·분할 사례가 핵심 | **L-B가 상세 보드 판정을 소유하고 glossary가 정의를 연결하는 안을 검토하되 SERP 확인 후 결정할 것** |
| **⑫ 족보 번역어 정본** | 12편 표본에서 thùng·sảnh·cù lũ 관측; sám cô·sảnh rồng은 정본 결정에 충분하지 않음 | **L-B와 합쳐 표기를 정하고, F의 빈도만으로 표준어를 확정하지 말 것** |
| 도구 경계 | 계산 의도와 정의 의도는 다름. rake 계산 기능은 미검증 | **도구는 검증된 계산·학습 동작에만 연결하고 용어 글의 정의 답변을 대체하지 말 것** |

우선순위는 **오염되지 않은 기존 볼륨과 직접 관찰한 콘텐츠 갭**의 정성 비교다. 신규 53개 볼륨이 들어오면 조정할 수 있으며, 서로 겹치는 검색어의 볼륨을 합산한 시장 규모는 제시하지 않는다.

---

## 9. 커버리지 표

### 9-A. 검색어별 0~4단계

기호: ✅ 수행, △ 대체·부분 수행, ✗ 결손. 2단계의 요청서 작성은 완료했지만 **볼륨 실측 완료 표시와 구분**한다.

| 검색어 | 0 오염 | 1 AC | 2 새 볼륨 | 3 SERP·PAA | 4 원문 |
|---|---|---|---|---|---|
| thuật ngữ poker | ✅ 9/10 | ✅ 직접 7개 | 요청 완료·실측 본체 | ✅ 10개·PAA 행 없음 | ✅ G1~G3 3편; G4 부분 별도 |
| fish là gì | ✅ 0/10·미수신 고려해도 없음 | △ fish poker 15개; 원헤드 없음 | 요청 완료·실측 본체 | △ 8개·PAA 행 없음; **자연검색 2개 결손** | ✅ 결합형 보충 F1~F3 |
| tilt là gì | ✅ 1/10 | △ tilt poker 15개 | 요청 완료·실측 본체 | ✅ 10개·PAA 행 없음 | ✅ 결합형 보충 T1~T3 |
| bluff là gì | ✅ 2/10 | △ bluff poker·wildcard 대체 | 요청 완료·실측 본체 | ✅ 10개·PAA 1 | ✅ B1~B3; 404 대체 |
| rake là gì | ✅ 4/10 | △ rake poker 15개 | 요청 완료·실측 본체 | ✅ 10개·PAA 4 | ✅ R1~R3 EN 대체; vi 접근 실패 기록 |
| straddle là gì | ✅ 1/10 | △ straddle poker 15개 | 요청 완료·실측 본체 | ✅ 10개·PAA 2 | ✅ S1~S3 |
| cooler là gì | ✅ 0/10·미수신 고려해도 없음 | △ cooler poker 15개 | 요청 완료·실측 본체 | △ 8개·PAA 행 없음; **2개 결손** | ✅ C1~C3 |
| bad beat | ✅ 5/10 표방·보수적 4도 섞임 | △ bad beat poker 15개 | 요청 완료·실측 본체 | △ 9개·PAA 행 없음; **1개 결손** | ✅ D1~D3 |
| bluff poker — 경량 | ✅ 관측 9/9 | ✅ 직접 15개 | 요청 완료·실측 본체 | △ 9개·PAA 행 없음; **1개 결손** | ✅ B1~B3, 최소 2편 초과 |
| nuts là gì — 경량 | **✗ 원자료 없음** | △ wildcard의 nut 표현만 | 요청 완료·실측 본체 | **✗ 지정 SERP·PAA 없음** | ✅ 보충 N1~N2; VN 순위 근거 아님 |
| thuật ngữ trong poker — 경량 | ✅ 관측 8/8 | △ glossary AC에 제안으로 등장 | 요청 완료·실측 본체 | △ 8개·PAA 4; **2개 결손** | ✅ G1~G3 대체; 중계 5개 실패 |

**4단계 범위 주의:** 원문 정독·검산은 수행했으나, 외부 글의 전체 헤딩을 축어로 전재하지는 않았다. 짧은 발췌·구조 요약·실측 개수로 기록했다.

### 9-B. 글별 AC·PAA 질문 표현 확보

| 글 | AC 표현 확보 | PAA 조회 자료·질문 확보 상태 | EN 대조 | 처방 |
|---|---|---|---|---|
| holdem-glossary | ✅ 직접·wildcard | ✅ 관련 PAA 4개 확보 | ✅ H2·FAQ 8·표 행 직접 집계 | ✅ |
| holdem-fish | ✅ meaning·term·player | ✅ 제공 SERP에 PAA 행 없음 확인; **직접 PAA 질문은 미확보** | ✅ H2·FAQ 8 | ✅ 편집 FAQ로 구분 |
| holdem-bad-beat | ✅ là gì·meaning·hand 등 | ✅ 제공 SERP에 PAA 행 없음 확인; **직접 PAA 질문은 미확보** | ✅ H2·FAQ 8 | ✅ |
| holdem-cooler | ✅ là gì·vs bad beat 등 | ✅ 제공 SERP에 PAA 행 없음 확인; **직접 PAA 질문은 미확보** | ✅ H2·FAQ 10 | ✅ |
| holdem-rake | ✅ là gì·meaning·term | ✅ PAA 4개 확보했으나 전부 비포커·미채택 | ✅ H2·FAQ 11 | ✅ |
| holdem-straddle | ✅ là gì·rules·explained | ✅ PAA 2개, 포커 문맥으로 쓸 수 있는 일반 정의 질문 1 | ✅ H2·FAQ 9 | ✅ |

PAA가 없거나 비포커인 글에 **“포커 PAA 질문 확보 ✅”를 허위로 붙이지 않았다.** AC·EN·경쟁 글의 질문은 출처가 다른 편집 재료로 구분했다.

### 9-C. 본체 인계 — 남은 데이터 작업

| 필요한 자료·작업 | 이유 |
|---|---|
| `nuts là gì`의 VN 2704·vi·desktop SERP·PAA·AC | 0단계 오염과 L-B 교차 소유 판단의 핵심 결손 |
| fish·cooler·bad beat·bluff poker·thuật ngữ trong poker의 자연검색 10개 전체 | 현재 제공 자연검색은 각각 8·8·9·9·8개 |
| 원헤드 AC와 미제공 와일드카드 | 현재 결합형 대체 자료와 직접 헤드 조회를 구분해야 함 |
| §2 신규 53개 일괄 볼륨 | 본 조사 환경에서 측정 불가; 기존 측정어 재측정 제외 |
| 포커 결합형에서의 추가 PAA 확보 여부 확인 | fish·bad beat·cooler 등에 포커 PAA 질문이 실제로 있는지 확인 |
| L-B의 nuts·sảnh rồng·sám cô 자료 합류 | 용어 표기와 소유 판정의 단일 레인 과잉 해석 방지 |

**현재 상태: 조사·검산·EN 대조·처방 인계 완료, 지정 원자료 결손에 따른 최종 커버리지 완료 판정은 보류.**

---

## 10. 본체 보완 — §2 새 후보 53개 볼륨 (2026-10-08 · 2704·vi · 원자료 `tmp/vi/L-AF2/L-F-gloss*`)

dealer poker là gì 170 · flush poker là gì 50 · thuật ngữ trong poker 50 · phỉnh poker là gì 40 · itm poker là gì 30 · poker là môn thể thao gì 30 · thuật ngữ poker tiếng việt 30 · buy in poker là gì 20 · rake poker là gì 20 · bad beat poker hand 10 · bad beat poker là gì 10 · bad beat poker meaning 10 · bad beat poker rules 10 · bluff poker là gì 10 · bluff poker meaning 10 · cooler poker hand 10 · cooler poker meaning 10 · cooler poker term 10 · how to tell if someone is bluffing in poker 10 · poker cooler vs bad beat 10 · rake poker meaning 10 · straddle poker definition 10 · straddle poker meaning 10 · straddle poker rules 10 · straddle poker term 10 · thuật ngữ poker tiếng anh 10 · tilt poker là gì 10 · tilt poker meaning 10 · tilt poker term 10 · ante trong poker nghĩa là gì - · bluff poker player - · bluff trong poker nghĩa là gì - · cooler poker là gì - · cooler poker slang - · cooler trong poker - · flush nghĩa là gì poker - · gtd trong poker nghĩa là gì - · itm trong poker nghĩa là gì - · làm cách nào để chơi poker giỏi - · nut trong poker nghĩa là gì - · straddle poker strategy - · straddle poker terms - · straddle poker texas holdem - · thuật ngữ chơi poker - · thuật ngữ poker là gì - · thuật ngữ poker tournament - · bad beat poker definition 0 · bluff poker definition 0 · bluff poker rules 0 · fish poker player 0 · rake poker term 0 · straddle poker explained 0 · tilt poker definition 0 · 

- 살아 있는 것: **dealer poker là gì 170**(→ L-A game-order/beginners 교차) · flush poker là gì 50(→ L-B) · thuật ngữ trong poker 50 · phỉnh poker là gì 40(칩 «phỉnh») · itm poker là gì 30(→ L-E) · thuật ngữ poker tiếng việt 30 · buy in poker là gì 20 · rake poker là gì 20. 나머지 10 이하.
- 남은 보완(다음 세션): 지정 헤드 원형 AC · nuts là gì SERP(L-B §10에 AC만 있음) · organic 8~9개 헤드 재조회 여부.
