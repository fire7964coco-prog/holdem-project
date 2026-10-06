# fr SERP 조사 — 0-2 공통 브리프 (2026-10-07 · fr 클러스터 0-2)

> 계획 정본 = `docs/fr-cluster-plan.md`(§2-① «0-2 산출물 없이 레인 A 금지»). 수요(볼륨) 정본 = `docs/keyword-bank/fr-core-volumes.md` — **0-1에서 잰 볼륨은 다시 재지 않는다.**
> 산출물 = 같은 폴더 `L-A-rules.md` · `L-B-rank.md` · `L-C-prob.md` · `L-D-strat.md` · `L-E-tour.md` · `L-F-gloss.md` · `L-G-gto.md`.
> 레인 A(집필 준비)는 SERP를 다시 조사하지 않고 이 문서들을 읽어 브리프에 옮긴다 → **빠뜨린 것은 나중에 재작업이 된다**(tr 보강 A~D의 원인). 커버리지 표 ✗ 0이 완료 조건.
> 선례 = `docs/keyword-bank/tr-serp/`(형식 참고 · L1-rules.md).

## 레인 배정

| 레인 | 글(EN 마스터 `lib/posts-en/<slug>.ts` · 🅰만 현 fr `lib/posts-fr/`) | SERP를 볼 헤드(0-1 §3) | 0-3 판정 재료 |
|---|---|---|---|
| L-A 규칙 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules | règles du poker · comment jouer au poker · all in poker · ante poker · flop turn river · (경량) fold poker · showdown poker | ③ fold 헤드 |
| L-B 족보 | holdem-hand-rankings · holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board | combinaison poker · ordre main poker · quinte flush royale · suite ou couleur · (경량) kicker poker · égalité poker · nuts poker | ④ nuts |
| L-C 확률 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting | probabilité poker · tableau probabilité poker · (경량) cote poker · gutshot poker · équité poker · compter les cartes au poker · implied odds | (계산기 도구 `/fr/calculator` 경계) |
| L-D 전략 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold | position poker · stratégie poker · comment gagner au poker · limp poker · (경량) 3bet poker · cbet poker · quelles mains jouer au poker | ② positions↔position-play · ③ fold 헤드 · 차트 도구 경계 |
| L-E 토너먼트 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game | icm poker · tournoi poker · cash game poker · (경량) mtt poker · bulle poker · short stack poker | 일정 의도 비중(§4 🪶 재료) |
| L-F 용어 | holdem-glossary · holdem-fish · holdem-bad-beat · holdem-cooler · holdem-rake · holdem-straddle | fish poker · lexique poker · rake poker · bad beat poker · (경량) termes poker · cooler poker · straddle poker | ① glossary 글↔`/fr/glossary` · ④ nuts |
| L-G GTO | GTO 13편(`fr-cluster-plan.md` §1 🅶) | gto poker · solver poker · check raise poker · donk bet poker · (경량) sizing poker · c-bet board monotone | ⑤ check raise ↔ low-board-check-raise · `/fr/solver` 경계(`fr-gto-solver.md` 승계) |

«경량» = SERP 1회 + 자동완성 + PAA만(원문 정독은 상위 2편). 헤드가 없는 글(볼륨 `-`~30)도 **최소 자동완성 + PAA 1회**로 질문 표현을 확보한다.

## 레인마다 할 일 (각 항목을 산출물에 절로 남긴다)

1. **자동완성**: DataForSEO `serp/google/autocomplete/live/advanced`(location_code **2250** · language_code **fr**)로 헤드마다 + 와일드카드 변형(«* poker» 앞/뒤 · «poker * c'est quoi» · «qu'est-ce que * poker» · «comment * poker»). 결과를 목록 그대로.
2. **새 후보 볼륨**: 1·3에서 나온 질문형·롱테일 중 0-1 문서에 **없는 것만** `keywords_data/google_ads/search_volume/live`(2250 · fr)로 한 번에 묶어 잰다. 🔴 같은 숫자가 여러 줄 = 한 수요(더하지 마라) · CPC 근거 금지.
3. **SERP 상위 10 + PAA**: `serp/google/organic/live/advanced`(2250 · fr · depth 10 · device desktop). 순위·URL·제목·유형(블로그/카지노·룸 제휴/위키/영상/포럼/앱/쇼핑) · `people_also_ask` 질문 **원문** · featured snippet 유무·문구 · AI overview 유무 · 동영상·이미지 팩.
4. **상위 글 원문 정독**(헤드마다 상위 실제 글 3~5편 · 경량은 2편): firecrawl 스크레이프(`firecrawl` CLI/스킬) 또는 WebFetch(**헤딩 축어 목록을 요구**) → H1/H2/H3 **축어**, 분량, 표·이미지·FAQ·영상 유무, 경험담·예시 유무, §13 오류(족보·확률·규칙이 틀린 곳 — 직접 검산), 낡은 정보. 요약을 사실로 쓰지 않는다.
5. **장단점 표**: 상위 글 공통 강점(갖춰야 할 것) · 공통 약점(차별화 지점).
6. **우리 글 대조**: L-A는 현 fr 글(`lib/posts-fr/`)의 seoTitle·desc·H1·H2·FAQ, 나머지는 EN 마스터의 H2·FAQ 구조 → 빠진 프랑스 검색 의도·질문, 이미 이기는 점. fr 도구 4종(`app/fr/calculator` · `app/fr/hand-chart` · `app/fr/glossary` · `app/fr/solver`)이 그 의도를 이미 받는지도 본다.
7. **처방(레인 A 브리프 재료)** — 글마다:
   - **카피 방향만**: 주력어(앞쪽 배치할 표현 · 프랑스 검색자가 실제 쓰는 형태 — 예: «suite» vs «quinte») + 훅 재료. 🔴 **최종 seoTitle·desc는 쓰지 않는다**(레인 A Fable 확정 · 계획 §2-⑥).
   - H2 후보(질문형 · 자동완성·PAA **축어**에 맞춤 · EN H2 중 어느 것을 개명/추가하는지 명시)
   - FAQ 후보(PAA 축어) + 답 방향
   - 차별화(우리 솔버 수치 · 7장 베스트5 검산 예시 · 정확한 확률표 · 경험담 · 도구 링크)
   - 카니발 주의: 다른 글/도구의 헤드텀을 빼앗는 처방 금지 → «앵커 링크로 위임». 소유 충돌 관찰은 «0-3 판정 재료» 절에 증거(SERP 유형·PAA)와 함께.
   - 우선순위(볼륨 × 갭)
8. **0-3 판정 재료**(배정된 것): 판정은 하지 않는다 — SERP 증거와 권고 1줄.

## 규율

- 🔴 사실은 원문에서만(CLAUDE.md §12-B) · 개수·목록은 직접 센다 · 검색 요약·AI overview를 사실로 옮기지 않는다(«있다/없다»와 문구 축어만).
- 합법성·실전 사이트 추천 의도(jouer au poker en ligne · site poker · argent réel)는 조준하지 않는다. 대회 일정 의도는 관찰만(§4 🪶).
- 🔴 **수정 금지** — 조사·처방 문서만 쓴다. `lib/`·`app/` 편집 금지 · git 금지. 원자료 JSON은 레포 `tmp/fr-serp-<레인>-*.json`(gitignore)에.
- 산출물 끝에 **커버리지 표**: 검색어별로 1~4를 했는지(✅/✗+이유). 글별로 «PAA·자동완성 질문 확보» ✅ 필수.
- 분량 목표: 레인당 25~55KB(tr 선례 50KB 안팎). 표·축어 위주, 서술 최소.

---

## 0-2 결과 (2026-10-07 · 7레인 완료)

| 레인 | 산출물 | 크기 | 글별 PAA·자동완성 질문 | 원문 정독 ✗ 사유 |
|---|---|---:|---|---|
| L-A 규칙 | `L-A-rules.md` | 62KB | 6/6 ✅ | PokerStars FR 학습 페이지(한국 IP 404) · clubpoker·joa·partypoker 블로그 Cloudflare 403 → 묶음마다 다른 원문 3편 이상 |
| L-B 족보 | `L-B-rank.md` | 56KB | 6/6 ✅ | royal flush·brelan/full/carré = 1페이지에 FR 가이드 없음(carré SERP 미조회 · H3 재료) · kicker·égalité·split = FR 가이드 0 |
| L-C 확률 | `L-C-prob.md` | 56KB | 7/7 ✅ | pot odds·implied·outs·cote du pot·tableau preflop = SERP가 영어·포럼·잡음 → «calcul outs poker»·«cotes implicites poker»로 대체 정독 |
| L-D 전략 | `L-D-strat.md` | 63KB | 8/8 ✅ | 0(clubpoker 403은 exa 대체 · pokerstars.fr 4건 근거 제외) |
| L-E 토너먼트 | `L-E-tour.md` | 63KB | 5/5 ✅ | clubpoker·partypoker 차단 · tournoi de poker·mtt·push or fold = 정독할 글 없음(유형 집계로 대체) |
| L-F 용어 | `L-F-gloss.md` | 56KB | 6/6 ✅ | pokerstars.fr 3건 404 · cooler PAA 무관 → 관련검색 축어 |
| L-G GTO | `L-G-gto.md` | 50KB | 13/13 ✅(그룹 A = 스팟 고유 FR 질문 없음 → EN FAQ 이식) | Kill Tilt 포럼 2건 → 같은 SERP 다른 FR 글 |

- 본체 대조: 새 볼륨 6개를 원자료 JSON에서 재확인 — suite poker 3,600 · royal flush 1,300 · flush poker 880 · straight poker 260(`tmp/fr-serp-B-vol-1.json`) · utg poker 260 · poker strategie 320(`tmp/fr-serp-D-vol.json`) · spr poker 210(`tmp/fr-serp-G-vol.json`).
- 공통 관찰: featured snippet·AI overview가 거의 없다(L-A 20쿼리 중 AIO 1 · L-C 18쿼리 0 · L-F 21쿼리 0). 프랑스어 해설 글이 0편인 SERP가 많다(limp·cbet·quand se coucher·suite ou couleur·égalité·split·bulle·mtt·nuts·donk·monotone). 상위 경쟁 글의 §13 오류를 레인마다 직접 검산해 축어로 남겼다(L-B 8 · L-C 15 · L-D 1 · L-E 4 · L-A 3) = 차별화 재료.
- 🔴 레인들이 scratchpad를 같이 써서 초반 스크립트 덮어쓰기가 있었다(L-B·L-D가 하위 폴더로 분리). 원자료는 `tmp/fr-serp-<레인>-*`로 레인별 접두라 섞이지 않았다. 다음 병렬 조사는 레인별 scratchpad 하위 폴더를 브리프에 박는다.

## 0-3에 넘기는 판정 재료 (판정은 0-3)

| # | 쟁점 | 레인 권고 | 근거 문서 |
|---|---|---|---|
| ① | «lexique/termes/vocabulaire poker» 글 ↔ `/fr/glossary` | 도구 소유 · 글은 «jargon/langage du poker + 영→불 대응» 각도 · 첫 화면 도구 링크 | L-F §8 |
| ② | positions ↔ position-play | «position(s) poker»·좌석명 = positions · position-play = «jouer en/hors de position · pourquoi importante» | L-D §8 |
| ③ | fold 헤드 | **L-A·L-D 일치**: «fold poker»·«se coucher» 정의 = betting-actions · «quand se coucher» = when-to-fold · 상호 앵커 1회 | L-A §8 · L-D §8 |
| ④ | «nuts poker» | 🔴 **레인 엇갈림**: L-B = 정의 의도 → `/fr/glossary` 도구(도구 meta에 «nuts poker signification» 이미 있음) · reading-the-board는 H2 «reconnaître les nuts»만 / L-F = FR 정보 글 0/8 + «avoir les nuts» 보드 의도 → reading-the-board | L-B §8 · L-F §8 |
| ⑤ | «check raise poker» 260 | low-board-check-raise가 받음(fr·EN 모두 check-raise 필라 없음 · EN seoTitle에 이미 있음) · 정의는 `/fr/glossary` | L-G §8 |
| ⑥ 신규 | «spr poker» 210 | 3bet-pot-cbet가 받음(같은 논리) | L-G §8 |
| ⑦ 신규 | «icm poker» 480 글 ↔ `/fr/calculator`(seo.title에 «… et ICM») | SERP 9자리 중 8 정보형 · PAA 3/4 정의 → 글 소유 후보 | L-E §8 |
| ⑧ 신규 | 확률 글 ↔ `/fr/calculator`(`fr-calculator.md` §0-A «fr 블로그가 생기면 재판정» 발동) | 글 = probabilité·tableau·comment calculer(손 계산) · 도구 = calcul·calculateur·simulateur · 글 제목에 «calcul(ateur)» 금지 · 계산기 faq 7문항과 같은 문장 피함 | L-C §8 |
| ⑨ 신규 | «mains de départ poker» 글 ↔ `/fr/hand-chart`(도구 keywords에 있음) | SERP는 글형 가이드 의도 → 판정 필요 | L-D §8 |
| ⑩ 용어 | 3-A 정본 재료 | 리그 공식 passe(fold)·parole(check)·tapis · «suite» > «quinte»(검색자 표기) · turn/river 표기 분열(river 210 vs rivière 50 · 기존 fr 글끼리 다름) · straddle = option/overblind · bad beat = sale coup | L-A · L-B · L-F |

- 레인 A로 넘길 판단 대기: EN rake FAQ «Is taking a rake illegal?» = fr에선 합법성 축 → 처리 결정(합법성 금지 범위) · 프랑스 과세 2 %·상한 1 €는 2차 출처뿐(Légifrance 원문 미확인 → 원문 없으면 쓰지 않는다).
