# vi SERP 조사 — 0-2 공통 브리프 (2026-10-08 · vi 클러스터 0-2)

> 계획 정본 = `docs/vi-cluster-plan.md`(§2-① «0-2 산출물 없이 레인 A 금지»). 수요 정본 = `docs/keyword-bank/vi-core-volumes.md`(0-1) — **0-1에서 잰 볼륨은 다시 재지 않는다**(새 후보만).
> 산출물 = 같은 폴더 `L-A-rules.md` · `L-B-rank.md` · `L-C-prob.md` · `L-D-strat.md` · `L-E-tour.md` · `L-F-gloss.md` · `L-G-gto.md`. 커버리지 표 ✗ 0이 완료 조건.
> 선례(형식) = `docs/keyword-bank/fr-serp/`(00-brief · L-A-rules.md).
> 수행 모델: L-A·L-B·L-F = **아스트라(Codex gpt-6-astra · read-only · 본체가 DFS 원자료를 떠 준다)** · L-C·L-D·L-E·L-G = **Claude 서브(Opus 5.5)**. 교차 구조: 0-3에서 본체가 전 레인을 대조한다.

## 레인 배정

| 레인 | 글(EN 마스터 `lib/posts-en/<slug>.ts` · 기존 vi 8편은 `lib/posts-vi/`) | SERP를 볼 헤드(0-1) | 0-3 판정 재료 |
|---|---|---|---|
| L-A 규칙 | texas-holdem-rules-for-beginners(vi有) · holdem-game-order(vi有) · holdem-betting-actions(vi有) · holdem-blind-meaning(vi有) · holdem-all-in-rules(vi有) · holdem-showdown-rules(vi有) | luật poker · cách chơi poker · poker là gì · luật chơi poker · texas holdem · all in là gì · check là gì · call là gì · raise là gì · fold là gì · turn là gì · river là gì · flop là gì · blind là gì · showdown là gì · (경량) cách chơi poker 2 lá · muck là gì · under the gun · flop turn river · ante là gì | ③ fold 헤드 · ⑪ «X là gì» 정의형을 글이 받나 용어 글이 받나 |
| L-B 족보 | holdem-hand-rankings(vi有) · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board | poker hands · bài poker · thứ tự bài poker · poker hand rankings · thùng phá sảnh · thùng phá sảnh là gì · sảnh rồng · cù lũ · royal flush · tứ quý · (경량) kicker là gì · nuts là gì · thùng phá sảnh và tứ quý cái nào lớn hơn · split pot · hòa bài poker | ④ nuts · ⑫ 족보 번역어 정본(thùng/sảnh/cù lũ/sám cô/sảnh rồng) |
| L-C 확률 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting | xác suất poker · poker odds · pot odds · outs poker · cách tính bài poker · (경량) implied odds · equity poker · rule of 4 and 2 · đếm bài poker | 계산기 `/vi/calculator` 경계(`vi-tools.md` 승계) |
| L-D 전략 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold | chiến thuật poker · cách chơi poker giỏi · vị trí trong poker · under the gun · poker positions · cbet · 3 bet · 3bet poker · limp là gì · (경량) c bet là gì · bài khởi đầu poker · khi nào nên fold · poker strategy | ② positions↔position-play · ③ fold · 차트 도구 `/vi/hand-chart` 경계 · «3 bet» 27,100 정체 |
| L-E 토너먼트 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game(vi有) | poker tournament · giải poker · icm là gì · icm poker · bubble là gì · short stack · cash game poker · (경량) mtt poker · push fold · giải poker là gì | 일정 의도(관찰만 · `/vi/tournaments`) |
| L-F 용어 | holdem-glossary · holdem-fish · holdem-bad-beat · holdem-cooler · holdem-rake · holdem-straddle | thuật ngữ poker · fish là gì · tilt là gì · bluff là gì · rake là gì · straddle là gì · cooler là gì · bad beat · (경량) bluff poker · nuts là gì(L-B와 교차) · thuật ngữ trong poker | ① glossary 글 — 🔴 **vi엔 `/vi/glossary` 도구가 없다** · ⑪ «X là gì» 소유 |
| L-G GTO | GTO 13편(`vi-cluster-plan.md` §1 🅶) | gto poker · range poker · donk bet · check raise · c bet là gì · (경량) 3bet pot · blind vs blind · monotone board | `/vi/solver` 경계(`vi-gto-solver.md` 승계 — 재조사 금지 · 스팟 고유 질문만) |

«경량» = SERP 1회 + 자동완성 + PAA만(원문 정독은 상위 2편). 헤드가 없는 글도 **최소 자동완성 + PAA 1회**로 질문 표현을 확보한다.

## 레인마다 할 일 (각 항목을 산출물에 절로 남긴다)

0. 🔴 **오염 판정(vi 고유 · 먼저)**: 헤드마다 SERP 상위 10 중 **포커 결과 수**를 세서 «포커 몫 있음(≥7) / 섞임(3~6) / 없음(≤2)». 없음이면 그 헤드는 조준하지 않는다(볼륨 표기에 «오염» 표시). 0-1 §1·§3 목록이 대상.
1. **자동완성**: DFS `serp/google/autocomplete/live/advanced`(location_code **2704** · language_code **vi** · client chrome)로 헤드마다 + 와일드카드 변형(«* poker» · «poker * là gì» · «* trong poker là gì» · «cách * poker» · «luật * poker»). 목록 그대로.
2. **새 후보 볼륨**: 1·3에서 나온 질문형·롱테일 중 0-1 문서에 **없는 것만** `keywords_data/google_ads/search_volume/live`(2704 · vi)로 한 번에 묶어 잰다.
3. **SERP 상위 10 + PAA**: `serp/google/organic/live/advanced`(2704 · vi · depth 10 · desktop). 순위·URL·제목·유형(블로그/카지노·게임앱·실머니 제휴/위키/영상/포럼/뉴스) · PAA 질문 **원문** · featured snippet · AI overview 유무 · 동영상 팩.
4. **상위 글 원문 정독**(헤드마다 상위 실제 해설 글 3~5편 · 경량 2편): H1/H2/H3 **축어**, 분량, 표·이미지·FAQ·영상, 경험담·예시 유무, **§13 오류**(족보·확률·규칙이 틀린 곳 — 직접 검산해 축어 인용), 낡은 정보, **번역어 선택**(thùng/sảnh/cù lũ/sám cô/sảnh rồng/tố/theo/bỏ bài/mù — 어느 표기를 쓰는지 집계). 요약을 사실로 쓰지 않는다.
5. **장단점 표**: 상위 글 공통 강점 · 공통 약점(차별화 지점).
6. **우리 글 대조**: 기존 vi 8편은 현 vi 글의 seoTitle·desc·H1·H2·FAQ, 나머지는 EN 마스터의 H2·FAQ → 빠진 베트남 검색 의도·질문, 이미 이기는 점. vi 도구(`app/vi/calculator` · `app/vi/hand-chart` · `/vi/tournaments`)가 그 의도를 받는지도.
7. **처방(레인 A 브리프 재료)** — 글마다: 카피 **방향만**(주력어·훅 재료 — 🔴 최종 seoTitle·desc는 쓰지 않는다) · H2 후보(자동완성·PAA **축어**에 맞춤 · EN H2 중 개명/추가) · FAQ 후보(PAA 축어) + 답 방향 · 차별화(솔버 수치·7장 베스트5 예시·정확한 확률표·경험담·도구 링크) · 카니발 주의(«앵커 링크로 위임») · 우선순위(볼륨 × 갭).
8. **0-3 판정 재료**(배정된 것): 판정은 하지 않는다 — SERP 증거와 권고 1줄.

## 규율

- 🔴 사실은 원문에서만(CLAUDE.md §12-B) · 개수·목록은 직접 센다 · 검색 요약·AI overview를 사실로 옮기지 않는다.
- 🔴 **금지 축**: 실머니·사이트·앱 게임 추천(poker online · game bài · tải game · w88 · zing · x-poker · 888 · pokerist), 합법성(베트남 도박법·카지노 출입) — 조준하지 않는다. 경쟁 SERP에 이런 페이지가 많으면 «유형 집계»로만 남긴다. 대회 일정 의도는 관찰만.
- 🔴 다른 게임(poker 5 lá · 3 lá · 4 lá · xì tố · mậu binh · tiến lên · omaha · short deck)은 홀덤 의도와 갈라 적는다. «sảnh rồng»이 Tiến lên/Mậu binh 용어인지 포커 로열 플러시인지 SERP 축어로 판정.
- 🔴 **수정 금지** — 조사·처방 문서만. `lib/`·`app/` 편집 금지 · git 금지. 원자료는 레포 `tmp/vi/serp-<레인>-*.json`(gitignore) · 🔴 스크래치는 **레인별 하위 폴더**(fr 0-2에서 공용 scratchpad 덮어쓰기 사고).
- 산출물 끝에 **커버리지 표**: 검색어별 0~4 했는지(✅/✗+이유). 글별 «PAA·자동완성 질문 확보» ✅ 필수.
- 분량 목표: 레인당 25~55KB. 표·축어 위주, 서술 최소. 문서 언어 = 한국어(축어 인용은 원문 그대로).

---

## 0-2 결과 (2026-10-08 · 진행 중 — 5/7 완료)

| 레인 | 수행 | 산출물 | 크기 | 글별 질문 확보 | 메모 |
|---|---|---|---:|---|---|
| L-A 규칙 | 아스트라 | (실행 중) | | | |
| L-B 족보 | 아스트라 + 본체 보완 §10 | `L-B-rank.md` | 111KB | 2/6 엄격 ✅ · 4글 = vi 질문 축어 없음 → EN FAQ 이식 그룹(본체 판정) | sảnh rồng 2/10 · tứ quý 0/10 · nuts là gì 0/10 = 오염 |
| L-C 확률 | Opus 서브 | `L-C-prob.md` | 56KB | 7/7 ✅ | 상위 글 §13 오류 10건(GGPoker·Natural8) · 도구 경계 증거 |
| L-D 전략 | Opus 서브 | `L-D-strat.md` | 56KB | 8/8 ✅ | «3 bet» 27,100 = 도박 브랜드 · cbet·under the gun·limp là gì 오염 |
| L-E 토너먼트 | Opus 서브 | `L-E-tour.md` | 62KB | 5/5 ✅ | icm là gì·bubble là gì·mtt là gì 0/10 · 토너먼트 SERP = 합법성 기사 → EN 합법성 FAQ 삭제 권고 |
| L-F 용어 | 아스트라 | (실행 중) | | | |
| L-G GTO | Opus 서브 | `L-G-gto.md` | 50KB | 13/13 ✅ | 🔴 wikipoker가 13스팟을 vi로 이미 덮음(fr과 다름) · blind vs blind·spr là gì 오염 |

- 공통 관찰: vi 해설 SERP는 **reddit `?tl=vi`·구글 번역 프록시·운영사 번역(GGPoker·Natural8)·wikipoker**가 채운다 — 베트남어 원문 해설이 얇다. 검색 술어 = **영어 차용어 + «là gì» / «trong poker là gì»**(단독 «X là gì»는 대부분 포커 밖). 상위 글 §13 오류 다수(L-C 10 · L-D 4 · L-G 2+) = 차별화 재료.
