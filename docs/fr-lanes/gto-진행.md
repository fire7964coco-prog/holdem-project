# fr-gto 진행 — 🅶 GTO 13

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-G-gto.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

> 🔴 **🅰~🅵 머지 뒤 헤드의 «시작» 신호 전에는 A도 하지 않는다.** A 앞에 계획 §2-⑨ 솔버 앱 fr 축어 재추출.

## 상태 — A ✅ 10-07 / B ✅ 10-07 / C ✅ 10-07 · 커밋 56ac05b6

- C 산출(10-07): ⓪ `fr-integration` 머지(`84870c51` · 러닝맵 FR_CLUSTERS·용어집 Check-raise 링크 수신) · ① 게이트 전건 · ② §13 전사 대조 · ③ 렌즈 9개(딜러 3 · 네이티브 2 · SEO 1 · 교열 3 — 13편 288KB라 렌즈 종류별로 편을 나눔) · ④ 판정·반영 · ⑤ 2차 교열 1회 → 반영.
- C 게이트(최종): audit:hard fr 51/51 🔴 0 🟠 0 · check:intl-links ✅ · check:structure fr 🔴 0 · 🟠 1 = donk faq −1(의도) · check:faq-schema fr 51 성립 · check:meta·seo-sync·meta-lang·directives 🔴 0(meta 🟠 blind-battle-cbet «마지막 문장 숫자»는 EN·de·es 공통) · check:number-format 🔴 1 = **tr**/a-high-board-cbet(이 레인 밖) · `npm run build` ✅ 686 intl(sitemap.xml 원복).
- §13 전사 대조(scratchpad · 주석 제외 · fr 구분자·T↔10 정규화): 13편 불일치 22토큰 전건 원문 판정 → **전사 오류 0**. 전부 표기 차이(«98 %–100 %» 단위 반복 · `10♠`의 «10» 숫자 토큰 · imageAlt/tldr 보드에 무늬 추가 «K♥10♦6♠» · «6x» · «3-bettent» · «Sous 1 %»=EN «Below one percent»). 커버리지 밖 카드 문단 = 딜러 렌즈 3개가 13편 전건 손검산(7장→베스트5·콤보·아웃츠·블로커·EQR·SPR·MDF) — 오류 0.
- 렌즈 집계: 지적 104(중복 포함) · 반영 ≈100자리 + readnext 5장 · 2차 교열 지적 11 → 반영 12(OOP 풀이 문단 중복 삽입 2곳 제거 포함) · 기각·보류는 아래 «미결»과 «EN-먼저 후보» · 카피 잠금 6건은 «헤드 요청 5».
- C에서 정한 통일(13편): ① readnext 카드 = **EN 라벨 번역**(EN 라벨이 대상 title과 다르면 라벨을 옮긴다 · 5장 정정) ② 조건표 Spot 행 = «Le bouton (BTN) ouvre à 2,5bb → la BB paye (heads-up)»(4편 정정) ③ 무늬 뜻이 플러시 «couleur»와 겹치는 자리 = **enseigne**(⑨ 3 · ⑥ 2) ④ 본문 = **surpaire**(표·앱 라벨 «Overpair»는 축어 · 첫 등장 «overpairs (surpaires)» ③④) ⑤ fire/barrel ≠ «tirer»(드로우와 충돌) → miser·envoyer des barrels(④⑩⑪) ⑥ «big blinds» → grosses blindes(⑦⑪) ⑦ break-even → seuil de rentabilité(«équilibre»는 GTO 균형과 충돌 · ⑦⑬) ⑧ showdown 본문 = abattage + 첫 병기(④⑩) ⑨ ②③에 OOP/IP 산문 풀이 1문장(첫 OOP/IP 표 위).

- A 산출: `docs/fr-lanes/gto-brief.md`(13편 · Fable 카피 1회 · Opus 재측정·조정 2건) · `docs/solver-app-verbatim-fr-2026-10-07.md`(앱 fr 축어 재추출 · 13/13 수치 spec §4-B 일치 · Trainer 화면 포함). `docs/keyword-bank/fr-gto.md`는 만들지 않았다(브리프에 다 넣음 · 계획 §5).
- A는 커밋하지 않는다(커밋 = C · ms 규격 §6-⑥). 미추적 2파일 + 이 진행 파일이 B의 입력이다.
- B 산출(10-07): 13편 `lib/posts-fr/<slug>.ts` + `index.ts` [fr-gto] 두 칸 등록(de 순서·이름). 집필 = Opus 서브 6개 병렬(편당 브리프 §0 + 담당 절 + EN 마스터만) · 본체가 등록·통일·게이트.
- B 자기 게이트: audit:hard fr 51/51 🔴 0 🟠 0 · check:intl-links ✅ · check:structure fr 핵심 결손 0 · 🟠 꼬리 1 = donk-bet-strategy faq −1(브리프 의도 — FAQ 1문항을 정의 H2로 승격) · `npm run build` ✅(sitemap 686 intl · sitemap.xml 원복).
- GTO 게이트 2종 = **미지원**(헤드 요청 2 그대로): check-gto-structure fr 지적은 전부 예상분(-en.webp 잔존·image -oop-fr 아님 13편 · donk h2+1/faq−1 · low-board h2+1/faq+1/glossary 링크+1) · check-gto-numbers는 fr 구분자 미정규화로 대조 불가 → §13 전사 대조는 C scratchpad 스크립트로.
- B에서 본체가 통일한 것: ① 하이픈 **핸드 클래스**의 T는 T 그대로(K-T·T-6·T-T·J-T·A-T — ⑦⑪⑩에서 10으로 바뀐 5자리 되돌림 · 보드·5장 런 K-Q-J-10·J-J-10-10-Q·턴 카드 나열 «10, J, 6, 5»는 10) ② 조건표 Rake 행 = «Sans rake» 13편 통일(3변형 있었음) ③ ⑫ 앱 라벨 «SB (ouvreur)» 소문자(앱 축어 문서 L86).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| donk-bet-strategy | ✅ | ✅ | ✅ | 정의 H2 추가 · FAQ 7→6(1문항 H2 승격) |
| monotone-board-strategy | ✅ | ✅ | ✅ | |
| broadway-board-strategy | ✅ | ✅ | ✅ | |
| a-high-board-cbet | ✅ | ✅ | ✅ | |
| k-high-board-cbet | ✅ | ✅ | ✅ | |
| ace-paired-board-strategy | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |
| paired-board-strategy | ✅ | ✅ | ✅ | |
| low-board-check-raise | ✅ | ✅ | ✅ | 정의 H2 추가 · FAQ +1 · glossary 링크 +1 |
| blind-battle-cbet | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |
| blind-battle-connected-board | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |
| 3bet-pot-cbet | ✅ | ✅ | ✅ | SPR 정의 H2(EN H2 현지화) |
| 3bet-pot-bet-sizing | ✅ | ✅ | ✅ | |
| 3bet-pot-low-board | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| donk bet / lead | donk bet (첫 등장 «donk bet (ou lead)» · ④에서 «donkbet» 1회) · «faire un donk bet» / «lead» | L-G §3-D·§7-2 (140 · 코치 영상 «donkbet») |
| check-raise | check-raise · «faire un check-raise» · ⑦ 정의에 «embuscade» 1회 | §3-B ⑤ · Club Poker 동의어 |
| range / nut advantage | avantage de range · avantage de nuts | L-G §7-8 자동완성 |
| polarized / merged range | range polarisée · «être polarisé» · range condensée (merged) | L-G §7-5 PAA |
| MDF | fréquence de défense minimale (MDF) | Fable 카피 축어(paired FAQ·tag) |
| bet sizing / geometric | sizing · sizing géométrique («taille de mise» 상시 금지) | L-G §3-F |
| nut flush | couleur max | Fable 카피(monotone) |
| set / trips | brelan servi (set) · brelan (trips) · «trips ou set» 짝 | §3-A ③ · L-G §3-L «set poker» 함정 |
| check back / delayed c-bet | checker derrière (check-back) · c-bet retardé | L-G §7-8 |
| two-tone · rainbow · monotone · paired · dry · wet | bicolore · rainbow · monotone(앱 «monochrome») · pairé · sec · humide | 앱 fr 라벨 · L-G §5 |
| equity realization (EQR) | réalisation d'équité (EQR) | — |
| blocker | bloqueur | — |
| opener · caller · 3-bettor | ouvreur · caller · 3-betteur | 앱 축어 · local-voice §2 |
| stake («at my stake») | limite («à ma limite») | Fable 카피 |
| percentage points | points (de pourcentage) | — |
| Metric(지표표 첫 열) | Indicateur | B 신규 · ①~⑤ |
| Not modeled(Rake 행) | Sans rake | 브리프 §0-6 · 13편 통일 |
| 하이픈 핸드 클래스 T | 그대로(K-T · T-T · A-T) | 브리프 §0-2 «핸드 클래스는 T» · ⑬ 선례 |
| 카드 T | 무늬 붙은 카드·하이픈 보드 = 10(Q♥10♥7♠ · Q-J-10) · 핸드 클래스·앱 스팟 이름은 T | 코퍼스 49:2 · 헤드 요청 3 |
| suit(무늬 · 플러시 «couleur»와 겹치는 자리) | enseigne | C 렌즈 · §3-A ③ · 코퍼스 drawing-odds «de ton enseigne» |
| overpair(본문) | surpaire · 표·앱 라벨은 «Overpair» 축어 · 첫 등장 «overpairs (surpaires)» | C 렌즈 · 잠긴 tldr·H2·FAQ «surpaires» |
| fire / barrel | miser · envoyer des barrels(«tirer» 금지 — 드로우와 충돌) | C 네이티브 렌즈 |
| break even | seuil de rentabilité · rentable(«équilibre» 금지 — GTO 균형과 충돌) | C 렌즈 |
| big blinds(단위 산문) | grosses blindes(값 표기 «bb»는 그대로) | C 렌즈 · 시리즈 다수 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (13편 공통) | EN 링크 전수 = 51편 + `/en/solver` 안(A 추출 실측 · ❌ 0) | 빼기·대체 0 |
| low-board-check-raise | — | **추가 1**: 정의 H2 직답에서 `/fr/glossary`(«lexique du poker») — 계획 §3-B ⑤ «정의 깊이는 glossary로 앵커 위임» |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- lib/posts-en/3bet-pot-bet-sizing.ts:L176 | «**Effectively, no — it uses one.**» — 자기 H2 «Does the range really use only one size?»와 극성 모순 → «Effectively, yes» | 렌즈 3개 일치(높음) · fr은 «oui»로 맞게 옮김
- lib/posts-en/k-high-board-cbet.ts:L147 | «because there is none of it» — 바로 앞 «four hands»와 모순 → «almost none» | 교열(중간) · fr «presque pas»
- lib/posts-en/ace-paired-board-strategy.ts:L248 | «offsuit broadways» 예시에 Q-9o·J-9o(9는 broadway 아님) | 네이티브(중간) · fr은 «hauteurs dame et valet dépareillées»로 고침
- lib/posts-en/ace-paired-board-strategy.ts:L250 · L274 | «nothing … beats that card»(카드가 아니라 핸드) · trips 정의 «board shows two … and you hold one of them» 엉성 | 딜러·교열(낮음) · fr은 고쳐 옮김
- lib/posts-en/paired-board-strategy.ts | «four ranges out of five»(= 각 레인지의 4/5) | 네이티브(중간) · fr «les quatre cinquièmes de chaque range»
- lib/posts-en/low-board-check-raise.ts:L220 | «Nine combos each»(핸드당으로 오독) · «that edge» 선행사 없음 | 딜러·교열(낮음) · fr «Neuf combos pour chacun des deux joueurs»
- lib/posts-en/donk-bet-strategy.ts:L169 | 표 행 «Third pair or lower» ≠ 앱 라벨 «Weak Pair» | 딜러(낮음) · fr은 EN 패리티 유지
- lib/posts-en/3bet-pot-cbet.ts | «underpairs … blocked by the ace and king»(blocker 개념과 혼동) | 네이티브(낮음) · fr «ont l'as et le roi au-dessus d'elles»
- ⑩⑪⑫⑬ EN | «link an account …» 직후 «no account» | 네이티브(낮음) · fr EN 패리티 유지
- (A 신규 없음) · de 계약 §6 말미의 미판정 3건(3bet-pot-bet-sizing «32 combos of A-K and A-J» 1회 · blind-battle-cbet «362.1» 4회 · 3bet-pot-low-board «nearly double» = 10-07 EN에 0회)은 판정하지 않고 EN 축어로 옮긴다.

## 헤드 요청
1. **fr 이미지 26장 + 썸네일** — `public/images/gto-<key>-oop-fr.webp`(히어로) · `gto-<key>-ranges-fr.webp`(본문 차트) 13쌍이 없다(실측 10-07 · `-fr` 0장). 레인은 `scripts/`·`public/images/`를 못 고친다 → 헤드가 `capture-solver-spots.mjs` L10N에 `fr` 한 줄(축어 = `docs/solver-app-verbatim-fr-2026-10-07.md` §5 · scratchpad에서 13/13 통과 확인) + `make-solver-range-charts.mjs` CHART_L10N `fr`(쉼표 소수 · `%` 앞 공백) 추가 후 생성. B는 그때까지 `-en.webp` 경로를 쓴다 → 생성 뒤 13편 `image`·본문 ranges·thumb와 🅳 strat 4자리(H-18 · continuation-bet ①⑨ · position-play ⑦ · 3bet ⑧) 썸네일을 `-fr`로 일괄 교체.
2. **GTO 게이트 2종 fr 지원** — `scripts/check-gto-numbers.mjs` `normalizeNumericText`가 pt·id·de·tr만 정규화한다 → fr 추가(소수 쉼표 · **`%` 앞 공백** `98,2 %` · 천 단위 공백 `1 326` · 카드 `10♠`↔`T♠` · 하이픈 보드 `Q-10-7`↔`Q-T-7`). `scripts/check-gto-structure.mjs` RULES에 `fr` 없음 → `quick: > **Réponse rapide**` · `readnext: :::readnext[À lire ensuite]` · `readTime: "N min"` · 마침표 소수 % 결함 탐지. 없으면 B·C는 «미지원»으로 기록만 하고 §13 전사 대조는 C scratchpad 스크립트로 한다.
3. **카드 T → 10 규칙 확인** — 브리프 §0-2: 무늬 붙은 카드·하이픈 보드의 T는 `10`(fr 코퍼스 49 : 2 · 🅳 continuation-bet·position-play가 이미 `Q♥10♥7♠`) · 핸드 클래스(`T6s`·`JT`·`TT`)는 그대로 · 앱 스팟 이름 «Board K-high avec un T»만 축어 T. 13편이 이 규칙으로 쓰인다 — 다르게 원하면 B 전에.
4. (배포 회차 · 기록) `/fr/solver` 랜딩 «Pour aller plus loin» 13링크 · 러닝맵 fr 노드 · 필라 역링크 · `/fr/glossary` «Check-raise»·«SPR» 항목 → 글 앵커(계획 §3-B ⑤⑥) — 계획 §1·§3-B대로 헤드 몫.
5. **잠긴 카피 6자리(C 렌즈 · 고치려면 헤드)** — ① 3bet-pot-bet-sizing desc «trop cher pour 38 des 40 tirages à une carte» → «… sur la carte suivante»(«한 장짜리 드로우»로 읽혀 EN «on one-card odds» 조건이 빠짐 · 렌즈 2개 · 160자 내) ② low-board-check-raise tldr «Personne n'a le haut du board» → «Personne n'a le haut de range»(EN «top end» 오역 · 본문은 «haut de range» · 중간) ③ low-board FAQ «Quand faut-il check-raise au poker ?» → «Quand faut-il faire un check-raise au poker ?» ④ low-board FAQ «Quelles mains check-raise sur 6-5-2 ?» → «Avec quelles mains faire un check-raise sur 6-5-2 ?» ⑤ broadway FAQ «l'endroit pour lead en semi-bluff ?» → «l'endroit pour faire un lead en semi-bluff ?» ⑥ donk FAQ «Quand checker plutôt que lead au poker ?» → «Quand checker plutôt que faire un lead au poker ?»(③~⑥ 동사 자리 원형 «check-raise/lead» · 정본 «faire un …» · 낮음~중간). 참고: k-high H2 «… n'est-il que hauteur As ?»는 네이티브 «문법 OK» vs SEO «qu'à hauteur As» 권고로 갈림 — 유지.

## 미결
- (헤드 · 신규 용어 대조) C에서 정한 enseigne·surpaire·barrels·seuil de rentabilité·grosses blindes가 🅰~🅵 38편과 갈리는지 — 이 레인은 13편 안만 통일했다.
- (참고 · 기각) monotone «monocolore» 1회 병기(브리프 의도 · 앱·태그 «monochrome») · 계정 동기화 문장 4편(⑩⑪⑫⑬ — ⑧은 EN에도 없음) 의역 변형(앱 축어 뜻 유지 · SEO 무해) · 13편 태그 중복(tags = keywords 메타·목록 필터만 · 잠긴 카피) · «cold-caller» 풀이(선택) · ⑬ «deuxième des trois»(EN 같은 모호함 · 틀리지 않음).
- (헤드) donk-bet-strategy faq −1 · low-board-check-raise h2/faq/glossary +1을 `docs/locale-intentional-diffs.md`에 등재(레인 소유 파일 아님).
