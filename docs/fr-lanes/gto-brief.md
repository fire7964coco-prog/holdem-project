# fr-gto 브리프 — 🅶 GTO 예제 13편 (레인 A · 2026-10-07)

> **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)뿐이다.** 웹·MCP·다른 로케일 파일(de·es·pt 번역본 포함)은 B에서 열지 않는다(ms 규격 §3 🟢). 사실·수치·카드의 출처는 EN 축어뿐.
> 정본: `docs/fr-cluster-plan.md` §3-A(고정문·용어 — **판단 없이 따른다**) · §3-B(소유표) · §5(ms→fr 치환표) + `docs/ms-translation-lanes.md` §5(B 규격).
> EN 기준 해시 **`a54b5f3d`** — 13편 모두 그 뒤 EN 변경 0(`git diff --stat a54b5f3d..HEAD -- lib/posts-en/<13편>` 실측 10-07 = 빈 출력). `masterUpdated` = 아래 각 편 EN `updated`(11편 2026-10-02 · donk-bet·3bet-pot-bet-sizing 2026-09-26).
> 키워드·SERP 출처 = `docs/keyword-bank/fr-serp/L-G-gto.md`(0-2 · DataForSEO 2250/fr · 2026-10-07) + `fr-core-volumes.md` §2 🅶 — 레인 A는 재조사하지 않았다(계획 §2-①). 볼륨은 그 문서 축어.
> 앱 축어 = **`docs/solver-app-verbatim-fr-2026-10-07.md`**(이 레인 A가 라이브에서 다시 뜸 · 계획 §2-⑨) — 필요한 라벨은 아래 §0-5에 옮겨 놓았다. B는 그 파일을 열 필요가 없다.
> 🔴 **확정 카피(title·seoTitle·desc·tldr·tags·H2 세트·FAQ 문항)는 B·C가 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 13편 공통 — B가 매 편 지킬 것

### 0-0. 🔴 이 시리즈만의 예외 (GTO 예제 = 솔버 증거 자료 · `settled-decisions` §1-E · de 선례 10-02)
- **지어낸 1인칭 경험담 금지.** 다른 레인(🅰~🅵)의 «EN 1인칭을 프랑스 맥락으로 재저작» 규칙은 여기 적용하지 않는다. 이 13편은 우리 솔버 데이터의 재현 가능한 분석이다 — 생생함은 «명확한 프랑스어 + 독자가 내릴 구체적 결정»에서 온다. EN에 있는 1인칭(«my entire range likes this flop» 같은 레인지 화법 · FAQ의 «I»)은 그대로 1인칭으로 옮기면 된다.
- **새 전략 명제 금지 · 일반 글로 재작성 금지 · 요약 금지.** 자연스러운 번역 ≠ 요약. 길이를 줄이려고 예시·단서를 자르지 않는다. 키워드 때문에 주장을 더하지 않는다.
- EN의 H2 수·순서, 실질 하위 절, 근거 문단, **모든 표와 행 순서**, 수치, 카드·무늬, 부등호, 부정·한정어를 보존한다. 디렉티브 종류·순서, `==하이라이트==` 수, FAQ 수, 링크 자리를 보존한다. H2 문구와 FAQ 질문은 확정 카피대로 현지화하고 대응 답·사실은 보존한다.
- 모든 퍼센트는 올바른 **자리·분모·액션·솔브**를 가진다. ①~⑦ caller(BB)의 리드 = **donk bet / lead**(«c-bet de la BB» 금지). ⑧~⑩ 3-betteur의 첫 플랍 벳은 c-bet일 수 있다. ⑪~⑬ SB = 오프너라 첫 벳이 c-bet이 맞다. **IP 결과 화면 = 레인지/에퀴티 정보이지 IP 액션 전략이 아니다.**
- 출처 날짜(조건표 «Checked» 행·출처 문장)는 **계산 출처 날짜**다(2026-08-08/08-19/08-20). 발행일로 바꾸지 않는다.
- 고지를 범위째 보존: 플랍 첫 결정만 · 후속 반응 없음 · 해석 vs 계산 결과 · 화면 반올림 · rake 미반영 · 가정이 바뀌면 전략도 바뀜 · ⑦의 별도 재솔브.
- EN의 근사 표현은 근사로: about → environ / à peu près · almost → presque · this configuration → dans cette configuration. 표본을 보편 규칙으로, 결과를 EV·수익 약속으로 바꾸지 않는다.
- Equity · EV · EQR · fold equity를 구분한다. **EQR이 높다고 EV가 높은 것이 아니다**(⑨가 반례). 빈도 차이는 **points de pourcentage**(«points»)이지 상대 %가 아니다.
- 🔴 EN 본문에 없는 값(BTN 62,9 % · 재솔브 root Check 98,0 % · ⑨ 벳합 99,1 % · ⑩ 98,1 % · 본문에 없는 콤보 총계)은 spec·주석에만 있다 — **본문 문장으로 추가하지 않는다.** «4,06»은 ⑦ EN 본문에 **있으므로** 보존.

### 0-1. 고정문 (계획 §3-A ①)
| 자리 | 정본 |
|---|---|
| 직답 블록 라벨 | `> **Réponse rapide**` (EN «Quick answer» 자리 전부) |
| readnext | `:::readnext[À lire ensuite]` (EN `:::readnext[Keep reading]`) |
| FAQ H2 | `## FAQ` · 문항 `**Q. …**` + 빈 줄 + `A. …` (스키마 조건). EN에 FAQ H2가 없는 편은 만들지 않는다 |
| 관련 글 H2 | `## Articles liés` (EN «Related Posts»가 있는 편만) |
| 마무리 H2 | `## À retenir` (EN «Key Takeaways» 류가 있는 편만) |
| readTime | `"N min"` (EN 값 그대로) |
| 화자 | 1인칭 단수 · 남성형 일치 — 단 §0-0(지어낸 경험담 금지) |

### 0-2. 문체·조판 (§3-A ②)
- **tu** 전용 · 명령형 훅(«Regarde… / Compare… / Ouvre…») · vous 금지.
- 숫자: 천 단위 공백(`1 326`) · 소수점 쉼표(`98,2 %` · `5,5bb` · `2,09`) · **`%` 앞 공백**(산문) · 비율 `2,7:1` · 범위는 양끝에 % (`73,4 %–75,2 %` · `37,6 %–42,9 %`) · 내부 단위 값도 쉼표(`0,016bb` · `0,29 %`) — 🔴 **값은 EN 축어, 구분자만 바꾼다**.
  - **bb는 붙여 쓴 소문자** `5,5bb` · `97,5bb` · `22,5bb` (EN·앱 축어 · fr 코퍼스와 같다).
  - 🔴 앱 화면 값을 «화면에 이렇게 뜬다»로 인용할 때만 화면 축어(`98,2%` 붙임 · `Bet 4,1bb (75 % du pot)`)를 쓴다. 산문은 `98,2 %`.
  - X-to-1 = «X contre 1» · 빈도 «1 sur N» · EN이 `X:1` 비율로 쓴 자리는 그대로(H-4).
- 인용 `« … »`(안쪽 공백) · 아포스트로피 곧은 `'` 만 · `Texas Hold'em`.
- 카드: 영어 랭크 문자 + 무늬 기호(`A♠ K♥ 10♠`) — R/D/V 금지. 하이라이트 `==A♣K♦==` 그대로.
  - 🔴 **무늬 붙은 카드의 T는 `10`으로**(fr 코퍼스 `10♥` 49 · `T♠` 2 — 실측 10-07 · 🅳 strat와 같은 규칙 · continuation-bet·position-play fr가 이미 `Q♥10♥7♠`): `Q♠J♦T♠` → `Q♠J♦10♠` · `Q♥T♥7♠` → `Q♥10♥7♠` · `K♥T♦6♠` → `K♥10♦6♠` · `T♥`·`T♣` 등 개별 카드도 `10♥`·`10♣`.
  - 하이픈 보드 표기도 같은 원칙: `Q-J-T` → `Q-J-10` · `Q-T-7` → `Q-10-7` · `K-T-6` → `K-10-6`.
  - **핸드 클래스 표기 `ATs` · `KTo` · `TT` · `JT` · `T6s` · `T9s`는 그대로**(코퍼스 JTs·ATs·TT). C의 전사 대조 스크립트는 `T♠`↔`10♠`·`Q-T-7`↔`Q-10-7`을 같은 토큰으로 정규화한다.
  - ⚠ 앱 화면의 보드 줄은 `Q♠J♦T♠`로 뜬다 — 본문에서 «화면에 보이는 보드»를 축어로 인용하는 자리는 없으니(스팟 이름은 카드 없는 이름이다) 위 규칙만 따른다.
- `préflop`(붙여 씀).
- 🔴 금지: 백틱 · `**` 중첩 · tldr 안 마크다운 · content에 히어로 이미지 넣기(렌더러가 그린다) · slug·이미지 경로 변경 · 영어 직역투 · 시리즈 총편 수 하드코딩(«les 13 spots» 금지 — EN이 «this series»라고 쓴 자리는 «cette série»).

### 0-3. 용어 (§3-A ④ 발췌 + 이 클러스터 · 근거 = 계획 §3-A · `local-voice/fr-fr.md` §2 · 앱 fr 축어)
| EN | fr 본문 | 비고 |
|---|---|---|
| solver / solve | **solver**(«solveur» 병기는 하지 않는다) · résoudre un spot · «la résolution / le calcul» | «calculer une main»(직역투) 금지 |
| GTO | GTO | 🔴 헤드 조준 금지(§3-B ⑫) — 본문 사용은 자유 |
| range | **la range** (여성) · ranges | «éventail de mains» 상시 사용 금지 |
| open-raiser / opener | **ouvreur** (앱 축어) | — |
| caller | **caller** (앱 축어) | «payeur» 금지 · 동사 = payer / suivre (앱 «BTN paye») |
| 3-bettor | **3-betteur** (앱 축어) | — |
| BTN / BB / SB | bouton (BTN) · grosse blinde (BB) · petite blinde (SB) — 글마다 첫 등장 풀어 쓰기 | 앱 그룹 라벨은 «BB (caller)» 등 축어 |
| OOP / IP | «hors de position (OOP)» / «en position (IP)» — 글마다 첫 사용에 풀이 | — |
| check / bet / call / raise / fold | checker(«il checke») · miser / la mise · suivre / payer · relancer / la relance · **se coucher** · 구어 «folder» | 카피는 «fold» 허용 |
| c-bet | c-bet · 글마다 첫 등장 «c-bet (mise de continuation)» | — |
| donk bet / lead | **donk bet** (첫 등장 «donk bet (ou lead)» · 붙여 쓴 «donkbet»은 ④에서 1회 병기) · 동사 «donker»는 쓰지 않는다 → «faire un donk bet» / «miser en premier (lead)» | L-G §7 |
| check-raise | **check-raise** (동사 «faire un check-raise» / «check-raiser») | ⑦ 첫 정의에 «embuscade» 1회 병기 가능(Club Poker 동의어) |
| check back | «checker derrière» (check-back) | — |
| set / trips | **brelan servi (set)** = 포켓 페어 + 보드 1장 · **brelan (trips)** = 손 1장 + 보드 페어 · «brelan»은 상위 족보명 | 🔴 «set» 단독 제목·태그 금지(L-G §3-L 함정). 앱 행 `Set/Brelan`은 축어 인용, 산문에서 구분 |
| two pair / straight / flush / full house / quads | double paire · **quinte** · **couleur** · full · carré | 본문 «suite» 금지 |
| top pair / overpair / underpair / overcards | top paire · overpair (surpaire) · underpair · overcards | 앱 축어 «Top paire» · «Overpair» · «Underpair» · 용어집 «Overpair (surpaire)» |
| second pair / weak pair | deuxième paire · paire faible | 앱 축어 |
| ace-high / king-high | hauteur As / hauteur Roi (앱 행) · 산문 «as hauteur», «hauteur roi» 허용 | 앱 축어 |
| draws | tirage(s) · tirage couleur · tirage quinte bilatéral (OESD) · tirage ventral (gutshot) · tirage couleur backdoor · tirage combo · «runner-runner» | 앱 패널 «Mains / Tirages» |
| board textures | board **sec** · **connecté** · **pairé** · **monotone** (앱 라벨은 «monochrome» — 인용 시만) · **bicolore** (two-tone) · **rainbow** · humide (wet) · dynamique · statique | L-G §5 커뮤니티 표기 |
| pot / SPR / effective stack | le pot · **SPR** (stack-to-pot ratio) · stack effectif | 🔴 «tapis»는 스택 뜻 금지 |
| equity / EV / EQR | **équité** (앱 화면 열 이름 «EQ» · 앱 산문 «equity»는 인용 시만) · **EV** (espérance de valeur) · **réalisation d'équité (EQR)** | 계산기 «Équité» |
| range advantage / nut advantage | **avantage de range** · **avantage de nuts** | L-G §7-8 |
| polarized / merged | range **polarisée** · «être polarisé» · range **condensée (merged)** | L-G §7-5 |
| fold equity / MDF | fold equity · **fréquence de défense minimale (MDF)** | 첫 등장 풀이 |
| bet sizing / overbet / geometric | **sizing** (le sizing) · overbet · **sizing géométrique** | «taille de mise» 상시 사용 금지 |
| reverse implied odds | cotes implicites inversées | §3-A ④ cotes implicites |
| blocker | bloqueur | — |
| combos | **combos** (les combos) | 앱 축어 «combos» |
| rake | rake | — |
| percentage points | points (de pourcentage) | — |
| street / turn / river | street · **la turn · la river** (첫 등장 «la turn (le tournant)» · «la river (la rivière)») | §3-A ④ |
| blind vs blind | **blind contre blind (BvB)** · 앱 그룹 라벨 «Blind vs Blind — SB vs BB (ranges larges)» | L-G §7-9 |
| single raised pot / 3-bet pot | pot simplement relancé (single raised pot) · **pot 3-bet** (앱 «Pot 3-bet») | L-G §3-I |

### 0-4. 도구 링크 앵커 문구 (§3-A ⑤ — 고정)
- `/fr/solver` = **«solver poker gratuit»**(EN «free GTO solver» · «GTO solver» 자리 전부) — 문장 안에서 «le [solver poker gratuit](/fr/solver)».
- `/fr/calculator` = «calculateur poker» · 기능별 «calculateur d'équité / d'outs» · `/fr/hand-chart` = «tableau range poker» · `/fr/glossary` = «lexique du poker».
- 🔴 역방향 금지(H-25): 글로 가는 링크·카드 제목에 위 도구 앵커를 쓰지 않는다.

### 0-5. 앱 라벨 대응 (EN 본문의 앱 문구 → fr 앱 축어 · 2026-10-07 라이브)
| EN 본문 | fr (굵게·대괄호는 EN과 같은 모양으로) |
|---|---|
| Study Spots | **Spots d'étude** |
| [⚡ View results] | **[⚡ Voir les résultats]** |
| "Solve this spot yourself" (결과 화면) | « **Calcule ce spot toi-même** » (목록 버튼은 «Calculer toi-même») |
| GTO Trainer | **Trainer GTO** |
| EV loss (bb) | **Perte d'EV** (bb) |
| Daily Challenge | **Défi du jour** |
| «signing in … syncs your Study Spots and Daily Challenge history» | 앱 축어 뜻: «Ta progression est enregistrée uniquement sur cet appareil. Associe un compte HoldemMaster pour reprendre où tu en étais sur n'importe quel appareil.» |
| Hands / Draws panel | panneau « **Mains / Tirages** » |
| Summary · Bar Width | Résumé · Largeur des barres |
| Player: OOP / IP | « Joueur » : OOP / IP |
| All (요약 행) | Tout |
| 표 헤더 Hand · Strategy · Weight · EQ · EV (bb) · EQR | Main · Stratégie · Poids · EQ · EV (bb) · EQR |
| Custom Spot ①–⑤ | Spot personnalisé (①–⑤) · ① Range OOP · ② Range IP · ③ Board · ④ Bet sizes · ⑤ Calculer |
| 액션 칩 «Bet 4.1bb (75% pot)» | `Bet 4,1bb (75 % du pot)` · `Bet 1,8bb (33 % du pot)` · `Check` |
| 그룹 SRP | «Single Raised Pot — BTN vs BB (fondamentaux)» |
| 그룹 3-bet | «Pot 3-bet — BB 3-bet, BTN paye (SPR bas)» |
| 그룹 BvB | «Blind vs Blind — SB vs BB (ranges larges)» |

**스팟 이름(EN → fr 앱 축어)** — 재현 CTA·본문 인용에서 굵게 축어로:
| # | EN 스팟 이름 | fr 앱 축어 |
|---|---|---|
| ① | Dry Ace-High Board | **Board sec A-high** |
| ② | Dry King-High Board | **Board sec K-high** |
| ③ | Connected Broadway, Two-Tone | **Broadway connecté, bicolore** |
| ④ | Middle Connected, Two-Tone | **Board médian connecté, bicolore** |
| ⑤ | Monotone Board | **Board monochrome** |
| ⑥ | Paired Board | **Board pairé** |
| ⑦ | Low Rainbow Board | **Board bas rainbow** |
| ⑧ | Ace-High Board, 3-Bettor's Edge | **Board A-high, avantage du 3-betteur** |
| ⑨ | Dynamic Two-Tone Board | **Board dynamique bicolore** |
| ⑩ | Low Dry Board | **Board bas et sec** |
| ⑪ | King-High with a Ten | **Board K-high avec un T** (앱 축어 — 여기만 «T» 그대로) |
| ⑫ | Connected Low Board, Two-Tone | **Board bas connecté, bicolore** |
| ⑬ | Ace-Paired Board | **Board avec deux As** |

**앱 행 이름(EN 본문이 «row»라 부르는 것)**: Straight → `Quinte` · Flush → `Couleur` · Quads → `Carré` · Full House → `Full` · Trips/Set → `Set/Brelan` · Two Pair → `Double Paire` · Overpair → `Overpair` · Top Pair → `Top paire` · Second Pair → `Deuxième paire` · Weak Pair → `Paire faible` · Underpair → `Underpair` · Ace High → `Hauteur As` · King High → `Hauteur Roi` · No Made Hand → `Pas de main faite` / Combo Draw → `Tirage combo` · Flush Draw → `Tirage couleur` · OESD → `Tirage quinte bilatéral` · Gutshot → `Tirage ventral` · Backdoor FD → `Tirage couleur backdoor` · No Draw → `Aucun tirage`.

**재현 CTA 틀**: «Ouvre le [solver poker gratuit](/fr/solver), va dans **Spots d'étude → [스팟 이름] → [⚡ Voir les résultats]**.» — EN 링크 수에 맞춘다(자리 추가 금지). EN이 «[GTO solver](/en/solver)»·«[GTO Trainer](/en/solver)»처럼 같은 문단에 두 번 걸었으면 fr도 두 번(두 번째 앵커 = «Trainer GTO»).
🔴 **앱 목록의 스팟 설명문(축어 문서 §4)은 전략 출처가 아니다** — ①④⑥⑦⑧ 설명문에 폐기된 명제가 있다. 본문에 옮기지 않는다.

### 0-6. 조건표·액션표 라벨 (13편 통일)
| EN | fr |
|---|---|
| 표 머리 첫 열 Setting / Item / Situation / Category / Draw | **Réglage** / **Élément** / **Situation** / **Catégorie** / **Tirage** (EN이 쓴 그 단어에 1:1) |
| 조건표 행 Spot · OOP (acts first) · IP · Preflop · Ranges · Flop · Pot · stack · Effective stack · SPR · Bet sizes · Rake · Checked | Spot · OOP (parle en premier) · IP · Préflop · Ranges · Flop · Pot · stack · Stack effectif · SPR · Bet sizes · Rake · Vérifié le — EN에 실제 있는 행만 · 합쳐진 행을 쪼개지 않는다 |
| 지표 행 Equity · EV (bb) · Equity realization | Équité · EV (bb) · Réalisation d'équité |
| Big blind's first action / Small blind's first action | «Première action de la BB» / «… de la SB» — root만. ⑦ 후속 노드 = «BTN après le check» / «BB face à une mise de 1,8bb» |
| Frequency · Combos · Hand | Fréquence · Combos · Main |
| BB (OOP) · BTN (IP) · SB (OOP) · BB (IP) | 그대로 |
| stripe 라벨 Spot · Flop · Pot · Stack · Result | Spot · Flop · Pot · Stack · Résultat — EN 필드가 있는 곳만 |
| dead small blind | «les 0,5bb de la petite blinde couchée» (계산 근거 자리에서) |
| no rake / not included | «sans rake» |

### 0-7. 링크 규칙
- EN 내부링크는 **1:1**로 `/fr/blog/<같은 slug>` · 도구 `/en/solver` → `/fr/solver` · readnext·thumb 속성 형태 그대로. 13편 EN 링크 대상은 **전부 51편 + 도구 안**이다(추출 실측: 13편 링크 전수 ✅ · ❌ 0) → **링크 편차 0**.
- 시리즈 내부 링크(이전·다음·형제 스팟)의 앵커 문구는 대상 글 fr `title` 또는 그 보드(«[8-5-2](/fr/blog/3bet-pot-low-board)»)로 — EN 앵커 모양을 따른다.
- 🔴 **이미지**: fr 이미지 변형(`gto-<key>-oop-fr.webp` · `gto-<key>-ranges-fr.webp`)은 **아직 없다**(실측 10-07 · `public/images`에 `-fr` 0장). B는 **EN 경로(`-en.webp`)를 그대로** 쓴다 — `image` 필드·본문 ranges 이미지·thumb 전부. 헤드 요청에 «fr 캡처·차트 생성 후 `-en` → `-fr` 일괄 교체»를 올렸다(H-18 썸네일 포함). 스팟 장면 이미지(`-scene-`)는 de 시범 전용 — fr에 넣지 않는다(`check:gto:structure` SCENE_LOCALES).
- 이미지 alt·title(캡션)은 프랑스어로 재저작(보드·자리·화면을 구체적으로 · 키워드 나열 금지) · 경로 불변. 캡션의 수치·카드는 §0-2 규칙.

### 0-8. 구조 패리티
H2/H3·표 행·리스트·이미지·FAQ 수·디렉티브(`:::stripe` · `:::note[…]` · `:::compare` · `:::readnext`)·원시 HTML 줄·하이라이트 색(`==r:` · `==g:` 등)은 **EN과 같게**(많은 것 허용 · 적은 것 = 결손). 확정 카피의 «추가 H2»는 현지 추가로 허용. `:::note[…]` 대괄호 안 문장도 번역한다(대괄호 형태 유지).

### 0-9. EN 원문 계약 — 보존 논거·오탐 방지 (승계: `docs/de-gto-source-contract.md` §3~§6 · 10-02 · EN 해시 7db19780 기준)
> de 계약은 EN을 기준으로 쓴 «로케일 중립» 문서다. 그 뒤 EN 변경은 `4b353f92`(MB-151 · 10-02) 하나 — 문구 한정(«grades your action in big blinds lost» → «shows how many big blinds your action costs» · 조건표 Checked 날짜 세분 · ⑪ `3.32` → `3.318` · ⑫ «three times» → «three and a half times (42 combos to 12)» · ⑥ «defend far wider» → «do not fold just because you missed» · ⑬ «not that the board paired» → «less that the board paired than which card…» · 캡션 3곳 · 체크레이즈 단정 한정). **EN 현행이 이긴다** — 아래 표와 EN이 다르면 EN 축어.
> 편별 «보존 논거»는 각 편 «하지 말 것» 절에 옮겼다. 여기에는 13편 공통 규칙만.

- **숫자 가까움은 오류 근거가 아니다.** 한 글에 형제 스팟·반대 좌석·다른 지표가 함께 있다. 원문과 **주어·보드·노드·지표**를 대조한다.
- **98,4 %가 정본**(⑨) — 98,5 %로 되돌리지 않는다. Check 0,8 %도 벳합에서 빼서 0,9로 바꾸지 않는다. 체크를 `100 − 벳합`으로 재계산하지 않는다(표시값 반올림 때문에 합이 99,9 또는 100,1일 수 있다).
- **⑧ 0,0 %는 «화면값»이다**: 원시 잔여 41콤보·K♥K♦ 0,09 % 문장을 «0,0 %와 모순»이라며 지우지 않는다. «잔여가 있으니 0,1 %»로 반올림을 바꾸지도 않는다.
- **«prices out»은 한 장 odds 한정**(⑨): «38/40 드로우가 가격 밖»과 «38 중 30이 두 장 기준 28,5 % 초과»는 모순이 아니다. 둘 중 하나를 지우거나 «les fait se coucher»로 합치지 않는다.
- **trips 표기 자체는 오류 아님**: 앱 행 이름 `Set/Brelan`을 인용하면서 언페어 보드에서는 실제 set(brelan servi)라고 밝히는 구조가 정본.
- **missed 표현 자체는 오류 아님**: ⑥ «홀카드가 보드를 추가로 못 맞혔다»는 정상. ⑩에서 전체 3-bet 레인지에 overpair까지 없다고 만드는 것이 오류다.
- **fold ≠ no-made-hand ≠ miss.** made-hand와 draw는 다른 분류축이며 합집합으로 더하지 않는다. ②·⑬은 «미스/노메이드 비율 = 폴드율»을 MDF로 명시적으로 반박한다 — 그 괄호를 생략하지 않는다.
- **MDF는 자동 콜 빈도·실측 폴드율이 아니다.** pure-bluff 가정·이후 에퀴티 실현·후속 노드 미계산을 같이 보존. «MDF 60,2 % donc 58,3 % de folds» 같은 인과 금지. ⑨ MDF는 «상한»이 아니다.
- **EQR은 팟 점유율이 아니다.** 높은 EQR을 더 높은 EV로 자동 번역하지 않는다(⑨ 반례). ⑩ EQR 시소는 «에퀴티 고정일 때» 한정.
- **caller→raiser와 board를 함께 본다.** ④의 BB를 전체 레인지 우위로, ⑪의 높은 벳을 OOP 오프너라는 역할만으로 일반화하지 않는다(⑫가 같은 자리의 반례).
- **small bet의 선택과 옵션 제한은 다르다.** ⑦⑪⑫에 큰 사이즈가 없는 것은 솔버가 배제한 결과가 아니다(트리에 하나만 넣었다). ⑬의 33 %는 제공된 둘 중 작은 것.
- **후속 스트리트의 예시 산술은 후속 스트리트의 솔브가 아니다.** «this solve does not answer / is not in this solve» 문장은 전부 유지(fr «ce calcul ne le dit pas» · «ce n'est pas dans cette résolution» · «cet écran ne permet pas de le vérifier»).
- **블로커 «설명»은 ⑤·⑥에서 철회됐다** — 현재 EN 결론(«le tableau montre le mélange calculé sans isoler la cause» / «ce n'est pas une règle de bloqueurs»)만 옮긴다.
- **내부링크·이미지 경로는 언어 누수가 아니다.** 영문 slug를 프랑스어로 바꾸지 않는다.

**단서 문장 (의미 구분 보존 — 대상이 다르면 주어를 바꿔 쓴다)**
- 첫 액션만: «L'exemple précalculé ne va que jusqu'à la première décision au flop.»
- 이 솔브에 없음: «Ce calcul ne donne pas ce chiffre.»
- 이 페이지에 없음: «Ce chiffre n'est pas sur cette page.»
- 이 화면으로 확인 불가: «Cet écran ne permet pas de le vérifier.»
- 해석: «Cette section interprète les ranges ; ce n'est pas une fréquence calculée par le solver.»
- 반올림: «Les valeurs à l'écran sont arrondies.»
- 별도 솔브(⑦): «Cette section vient d'une résolution distincte, pas du résultat précalculé de l'exemple.» — 트리·이터레이션·exploitabilité·다른 root 결과까지 보존.

**조건 고정표 (대조용 · 마침표 소수 = 원천 숫자 · 독자 문자열은 쉼표)**
| # | 보드 | Check % | 작은 bet % | 큰 bet % | OOP EQ % | OOP EQR % | IP EQR % | pot / stack (bb) | 사이즈 | OOP / IP combos | OOP / IP EV |
|---|---|---:|---:|---:|---:|---:|---:|---|---|---|---|
| ① | A♥7♦2♣ | 98.2 | 1.0 | 0.9 | 45.1 | 84.0 | 113.1 | 5.5 / 97.5 | 1.8 (33%) · 4.1 (75%) | 464 / 463 | 2.09 / 3.41 |
| ② | K♠8♦3♣ | 99.8 | 0.1 | 0.1 | 46.3 | 80.7 | 116.7 | 5.5 / 97.5 | 1.8 · 4.1 | 474 / 480 | 2.06 / 3.44 |
| ③ | Q♠J♦T♠ | 99.9 | 0.1 | 0.0 | 46.7 | 77.9 | 119.4 | 5.5 / 97.5 | 1.8 · 4.1 | 453 / 458 | 2.00 / 3.50 |
| ④ | 9♥8♥7♣ | 76.2 | 16.8 | 6.9 | 48.5 | 93.2 | 106.4 | 5.5 / 97.5 | 1.8 · 4.1 | 462 / 472 | 2.48 / 3.02 |
| ⑤ | Q♠9♠2♠ | 88.8 | 8.0 | 3.2 | 47.7 | 90.4 | 108.8 | 5.5 / 97.5 | 1.8 · 4.1 | 468 / 474 | 2.37 / 3.13 |
| ⑥ | 6♣6♦3♥ | 97.0 | 1.0 | 2.0 | 47.2 | 83.7 | 114.5 | 5.5 / 97.5 | 1.8 · 4.1 | 486 / 502 | 2.17 / 3.33 |
| ⑦ | 6♠5♥2♦ | 96.8 | 3.2 | — | 48.3 | 84.3 | 114.7 | 5.5 / 97.5 | 1.8 (33%) 하나 | 487 / 503 | 2.24 / 3.26 |
| ⑧ | A♦K♠2♥ | 0.0 | 57.8 | 42.2 | 68.9 | 109.6 | 78.7 | 22.5 / 89 | 7.4 (33%) · 14.9 (66%) | 63 / 130 | 16.99 / 5.51 |
| ⑨ | Q♥T♥7♠ | 0.8 | 0.7 | 98.4 | 58.3 | 117.8 | 75.1 | 22.5 / 89 | 7.4 · 14.9 | 73 / 133 | 15.46 / 7.04 |
| ⑩ | 8♦5♣2♠ | 2.0 | 0.3 | 97.8 | 58.6 | 106.9 | 90.3 | 22.5 / 89 | 7.4 · 14.9 | 83 / 144 | 14.09 / 8.41 |
| ⑪ | K♥T♦6♠ | 32.6 | 67.4 | — | 55.3 | 103.1 | 96.1 | 6 / 97 | 2 (33%) 하나 | 538 / 525 | 3.42 / 2.58 |
| ⑫ | 7♦6♦5♣ | 90.4 | 9.6 | — | 49.6 | 85.3 | 114.4 | 6 / 97 | 2 (33%) 하나 | 572 / 534 | 2.54 / 3.46 |
| ⑬ | A♠A♥6♦ | 19.8 | 79.6 | 0.5 | 56.2 | 104.1 | 94.8 | 6 / 97 | 2 (33%) · 4.5 (75%) | 503 / 505 | 3.51 / 2.49 |
- 위 값은 앱 fr 라이브(10-07 · 축어 문서 §3)와 13/13 일치. 콤보 총계 일부(① IP 463 · ③ 453/458 · ④ 462/472 · ⑤ OOP 468 · ⑥ IP 502 · ⑦ IP 503)는 EN 본문에 없다 — **fr 본문에 새로 써 넣지 않는다.**
- 그룹: ①–⑦ BTN 2,5bb 오픈 → BB 콜 (pot = 2,5 + 2,5 + 죽은 SB 0,5) · ⑧–⑩ BB가 11bb로 3-bet → BTN 콜 (pot = 11 + 11 + 0,5 · SPR ≈ 4,0 · 큰 사이즈는 **66 %, 75 % 아님**) · ⑪–⑬ SB 3bb 오픈 → BB 콜 (pot = 3 + 3 · **죽은 블라인드 없음** · SPR ≈ 16,2). 전체 = heads-up · 100bb 온라인 표준 레인지 근사 · **rake 미반영**.

### 0-10. B 등록·게이트 (ms 규격 §5 + 계획 §5)
- 틀 = `lib/posts-fr/holdem-blind-meaning.ts`(필드 모양 · `masterUpdated` 필드) · `slug`·`category`·`emoji`·`keepImagesInBody` = EN 축어 · `image` = EN 경로(§0-7) · `date`·`updated` = 집필일(H-22: 배포가 늦으면 배포 회차에서 배포일로).
- 파일 머리 주석: 출처·키워드·알려진 한계만 짧게. EN의 긴 경위 주석 복사 금지 · 주석 안에도 백틱 금지.
- `lib/posts-fr/index.ts`의 **[fr-gto import 시작~끝] · [fr-gto 배열 시작~끝] 두 칸에만** 등록.
- 자기 게이트(편마다): `npm run audit:hard -- --locale=fr --slug=<slug>` 🔴 0 → 끝에 `npm run check:intl-links` · `npm run check:structure`(fr 행에서 내 슬러그 결손 0) · `npm run build`.
- GTO 전용 게이트 `node scripts/check-gto-numbers.mjs --locale=fr --slugs=…` · `node scripts/check-gto-structure.mjs --locale=fr`는 **아직 fr을 모른다**(숫자 정규화가 pt·id·de·tr만 · 구조 RULES에 fr 없음 — 실측 10-07). 헤드 요청을 올렸다 — 헤드가 fr을 넣기 전에는 B·C가 결과를 «미지원»으로 기록만 하고, §13 전사 대조는 C의 scratchpad 스크립트(ms 규격 §6-②)로 한다.

---

## 13편 공통 H2 (Fable 확정 · 13편 같은 문구)

> Source : dissect.md (méta EN verbatim) · L-G-gto.md §7–§9 · fr-cluster-plan.md §3-A/§3-B · solver-app-verbatim-fr §2–§3.
> Règles appliquées : tu partout · virgule décimale + espace avant % · cartes lettres EN + symbole · « … » · apostrophe droite · aucun chiffre hors EN.
> Longueurs = JS `.length` mesurées par script (entre parenthèses). seoTitle ≤60 · desc ≤160 · title ≤65.
> 🔴 ①–⑦ : le premier chiffre = première action de la BB (donk bet / lead) — jamais « c-bet de la BB ». ⑧–⑩ : 3-betteur. ⑪–⑬ : SB ouvreur → c-bet.
> 🔴 Sens « solver » dans 3 seoTitle (⑪⑫⑬ + ①) : « le solver mise / checke / selon le solver » = sujet d'un verbe dans une affirmation propre au spot, jamais adjacent à « poker », jamais « GTO » → ce n'est pas la tête « gto poker » (480) ni « solver poker / solveur poker » (320) qui appartiennent à /fr/solver (§3-B ⑫).

- `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- `## Check it yourself` → `## Vérifie toi-même`
- `## FAQ` → `## FAQ` — 🔧 Opus(A): ⑩–⑬ EN에는 FAQ H2가 없다(Q.가 «Check it yourself» 아래). **EN대로 FAQ H2를 만들지 않는다**(구조 패리티 · de 선례).
- `:::readnext[Keep reading]` → `:::readnext[À lire ensuite]`
- `## Related` (si présent) → `## Articles liés`
- Bloc direct `> **Quick answer**` → `> **Réponse rapide**`
- FAQ récurrente « Do these numbers hold at my stake? » → `Ces chiffres tiennent-ils à ma limite ?` · « Can I use these numbers at any stake? » → `Je peux utiliser ces chiffres à toutes les limites ?` · « Do these numbers hold at any stake? » → `Ces chiffres tiennent-ils à toutes les limites ?`
- H2 EQR récurrent « Why is EQR X against Y when equity is A against B? » → `Pourquoi l'EQR fait X contre Y quand l'équité fait A contre B ?`
- H2 récurrent « How do the two ranges differ? » → `En quoi les deux ranges diffèrent-elles ?`
- H2 récurrent « What does the button actually have? » → `Qu'a vraiment le bouton en main ?`

---


### 0-11. 확정 카피 읽는 법 (Fable 서브 1회 · 2026-10-07 · Opus 측정·조정)
- 각 편 «확정 카피»의 title·seoTitle·desc·tldr·tags = 필드에 **축어**(괄호 «(NN car.)»는 Opus가 잰 JS length — 필드에 넣지 마라). H2·FAQ 표는 EN 줄(L##)과 1:1 — 그 자리 헤딩·질문을 축어로 쓴다.
- «+ (ajout)» H2·FAQ = 현지 추가(허용). 답은 괄호에 적힌 EN 절의 내용만으로 쓴다(새 수치 금지). 괄호 속 주석(«placé avant …», «source …»)은 B에 대한 지시다 — 헤딩 텍스트에 넣지 마라.
- 🔢 Opus 재측정: seoTitle 53~60 · desc 147~159(≤160 전원) · tldr 마크다운 0 · tags에 «gto»·«solver»·«set» 단독 0.
- 🔧 Opus 조정 2건: ① ⑩~⑬ «FAQ H2 추가» 제안 **기각** — EN은 FAQ H2 없이 Q.를 «Check it yourself» 아래에 둔다 → fr도 그대로(구조 패리티 · de 선례 «원문에 FAQ H2가 없는 ⑩~⑬은 만들지 않는다»). ② 카드·보드의 T → 10(§0-2): broadway seoTitle·desc·tldr·FAQ 1 · bet-sizing tldr · blind-battle-cbet desc·tldr. 그 밖 Fable 출력 축어.
- ⑫ 헤드 확인(계획 §3-B ⑫ «레인 A가 확인»): EN seoTitle에 «GTO»가 든 3편 → fr «le solver c-bet 67,4 %»(⑪) · «texture de board selon le solver»(⑫) · «le solver mise 80 %»(⑬) + ① «le solver checke». 넷 다 «solver»가 문장의 주어/한정구이고 «solver poker»·«solveur poker»·«gto poker» 연쇄가 없다 → `/fr/solver` 헤드(gto poker 480 · solver poker 320) 조준이 아니다. tags에는 «solver»·«gto» 0.
- 공통 H2 3개는 13편 같은 문구(위 «13편 공통 H2»). 재현 CTA 절 이름 = «Vérifie toi-même».

---

## ① a-high-board-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Top Pair, Still Checking: A-7-2 C-Bet Frequencies",
seoTitle: "You Flop Top Pair, the Solver Checks — Dry Ace C-Bet",
desc: "You flop top pair on A-7-2 and want to lead. A solver checks 98.2% of the big blind's range — the exact c-bet frequencies, and why equity isn't the reason.",
tldr: "On A♥7♦2♣ after a button open and a big blind call, the big blind checks 98.2% of its range — top pair, two pair and sets included. Equity is nearly even at 45.1% against 54.9%; what splits the two seats is equity realization, 84.0% out of position against 113.1% in position.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "9 min",
emoji: "🅰️",
image: "/images/gto-srp-dry-ace-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a dry ace-high flop, the big blind's 13x13 grid almost entirely green for check",
tags: ["c bet percentage", "when to c bet", "dry board poker", "range advantage", "range advantage poker", "gto solver", "equity realization"],
# title 길이 49
# seoTitle 길이 52
# desc 길이 155
# tldr 길이 276
```

### 구조 (EN content L94~L236 · L## = EN 파일 줄)
#### 헤딩
- L109 ## What conditions produced these numbers?
- L125 ## What's a good c-bet percentage on a dry ace-high board?
- L139 ## Why does the big blind check top pair too?
- L151 ## What is a dry board, and why does this one favor the raiser?
- L174 ## What does range advantage mean if equity is nearly even?
- L188 ## When should the button c-bet a dry ace-high flop?
- L198 ## What changes at the table?
- L210 ## Check it yourself
- L216 ## FAQ

#### FAQ 5문항
- L218 **Q. Is A7 top pair on an A-7-2 board?**
- L222 **Q. Does 98.2% checking mean I should literally never bet?**
- L226 **Q. What is the difference between a wet board and a dry board?**
- L230 **Q. Can equity realization go above 100%?**
- L234 **Q. Do these numbers hold at any stake?**

#### 표 4개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L99 :::stripe
- L104 :::
- L155 ![Range composition infographic comparing the big blind and button hand categories on a dry ace-high board, green and gold bars side by side](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more …
- L196 :::note[The study spot pre-solves the flop's first action only, so the button's exact c-bet frequency is not one of the numbers on this page. To get it, open "Solve this spot yourself" and run the tree through.]:::
- L205 :::readnext[Keep reading]
- L208 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L96 /en/solver ✅ 도구
- L127 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L155 /images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more top pair, the big blind more ai img
- L186 /en/blog/holdem-equity ✅
- L186 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L194 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L212 /en/solver ✅ 도구

### 키워드 (DataForSEO 2250·fr · 2026-10-07 · 출처 L-G §1·§9 · fr-core-volumes §2 🅶)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| board sec poker | `-` (🔴 SERP 쓰레기 — L-G §3-K) | 산문 표기로만 · 제목 조준 효과 없음 |
| range advantage (poker) · avantage de range poker | 10 · `-` | H2·본문 «avantage de range» |
| c bet poker (110 · L-D 소유) | — | 🔴 헤드는 `holdem-continuation-bet` 몫 — 이 글은 «sur un board sec hauteur As» 한정어를 붙인다 |
| 함정 🚫 | — | «gto poker»·«solver poker»(⑫ → `/fr/solver`) · PAA «Qu'est-ce que le "cbet range" au poker ?»(L-D 몫 — 쓰지 않는다) |

### PAA·자동완성 (축어)
- PAA(avantage de range SERP): C'est quoi la range au poker ? · Qu'est-ce que le "cbet range" au poker ?(→ L-D 위임) · Quelle est la range d'ouverture au poker ? · Quel est le tableau des ranges au poker ?
- 자동완성: avantage de range poker · range advantage poker · board sec poker → board poker definition

### 현지 SERP (L-G §3-K·§5·§7-8 · 그룹 A = 스팟 고유 프랑스어 질문 없음)
- 상위: kill-tilt 포럼 «AVANTAGE DE RANGE» · nicocoachpoker.fr «Avantage de range au poker…» · pokerstars.fr «Ranges au Poker» · 코치 영상(ShiShi «Qu'est ce que l'avantage de range au Poker ?»). **솔버 수치 있는 프랑스어 글 0.**
- 우리가 더 줄 것: ① 98,2 % 체크라는 계산값 ② BB에 AA·AK·AQ가 없다는 콤보 근거 ③ «Vérifie toi-même» 앱 동선.
- 처방: H2 «What's a good c-bet percentage on a dry ace-high board?» → 한정어(«sur un board sec hauteur As») 유지 — L-D c-bet 글과 공존. 새 FAQ 없음(§1-E).

### 소유표 (계획 §3-B)
- 주인인 검색어: 없음(그룹 A · 솔버 증거 자료).
- 쓰면 안 되는 헤드(seoTitle·H1·tags): «gto poker»·«solver poker»·«gto solver»(⑫) · «c bet poker» 단독(→ holdem-continuation-bet) · «range poker»·«tableau range»(⑨ → `/fr/hand-chart`).
- 위임 앵커: c-bet 일반론 → `/fr/blog/holdem-continuation-bet`(EN 링크 자리 그대로).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Top paire, et pourtant check : le c-bet sur A-7-2 (49 car.)
seoTitle: Top paire floppée, le solver checke — c-bet sur board sec (57 car.)
desc: Top paire floppée sur A-7-2, tu veux miser. Le solver checke 98,2 % de la range de la grosse blinde : les fréquences exactes, et ce n'est pas l'équité. (151 car.)
tldr: Sur A♥7♦2♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 98,2 % de sa range, top paire, double paire et brelans servis compris. L'équité est presque à égalité, 45,1 % contre 54,9 % ; ce qui sépare les deux sièges, c'est la réalisation d'équité (EQR) : 84,0 % hors de position contre 113,1 % en position. (341 car.)
tags: ["pourcentage de c-bet", "quand c-bet", "board sec poker", "avantage de range", "avantage de range poker", "board sec a-high", "réalisation d'équité"]
#### H2 (EN → FR)
- L109 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L125 `## What's a good c-bet percentage on a dry ace-high board?` → `## Quel est un bon pourcentage de c-bet sur un board sec hauteur As ?`
- L139 `## Why does the big blind check top pair too?` → `## Pourquoi la grosse blinde checke-t-elle aussi top paire ?`
- L151 `## What is a dry board, and why does this one favor the raiser?` → `## C'est quoi un board sec, et pourquoi celui-ci favorise-t-il le relanceur ?`
- L174 `## What does range advantage mean if equity is nearly even?` → `## L'avantage de range, ça veut dire quoi si l'équité est presque égale ?`
- L188 `## When should the button c-bet a dry ace-high flop?` → `## Quand le bouton doit-il c-bet un flop sec hauteur As ?`
- L198 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L210 `## Check it yourself` → `## Vérifie toi-même`
- L216 `## FAQ` → `## FAQ`
- Forme question : 7/7 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Is A7 top pair on an A-7-2 board? → `A7, c'est top paire sur A-7-2 ?` (source : EN, formulation orale FR)
2. Does 98.2% checking mean I should literally never bet? → `98,2 % de check, ça veut dire que je ne dois jamais miser ?` (EN)
3. What is the difference between a wet board and a dry board? → `Quelle différence entre un board sec et un board humide ?` (EN · « board sec/humide » = usage communauté FR, L-G §3-K)
4. Can equity realization go above 100%? → `La réalisation d'équité peut-elle dépasser 100 % ?` (EN)
5. Do these numbers hold at any stake? → `Ces chiffres tiennent-ils à toutes les limites ?` (EN)
#### Mots-clés absorbés
- avantage de range poker (`-` · autocomplétion) → H2 L174 + tags
- board sec poker (SERP poubelle, §3-K) → prose/tag seulement, pas d'effet de ciblage attendu
- c-bet (propriété L-D holdem-continuation-bet) → uniquement avec qualificatif « sur un board sec hauteur As » (L125)
#### Notes
- PAA « Qu'est-ce que le "cbet range" au poker ? » non utilisée (L-D). Spot app : `Board sec A-high`.
- Le seoTitle garde l'accroche EN (top paire floppée / le solver checke) ; « c-bet sur board sec » = le c-bet du BTN dont parle l'EN, pas la mise de la BB.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L94 · L100 · L101 · L102 · L103 · L107 · L111 · L115 · L116 · L117 · L118 · L119 · L123 · L127 · L133 · L134 · L135 · L137 · L143 · L149 · L153 · L155 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L168 · L172 · L176 · L180 · L182 · L184 · L190 · L200 · L220 · L222 · L230 · L232 · L236

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L222: **Q. Does 98.2% checking mean I should literally never bet?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 **c벳 «머리말»은 가져오지 않는다** — `c-bet poker` 320 · `what is a c-bet in poker`는
- * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry Ace-High
- * 🔴 **벳하는 핸드를 「suited aces에 집중」이라고 쓸 뻔했다 (2026-08-19 검수에서 자기 검출).**
- *   인포그래픽 = HTML+Playwright 스크린샷(1200×675 · 26KB, §9-1 「글자 인포그래픽은 이미지 AI 금지」).
- * 🔴 2026-08-21 키워드 정정 — 되돌리지 마라 (EN ⑪ 착수 시 키워드 팩이 잡았다):
- *   ⚠ 이 태그는 ①의 것이다. A 하이 보드가 레인지 우위의 교과서 자리이고

### 하지 말 것 (EN 원문 계약 ① · EN 현행이 이긴다)
- 98,2 %는 **BB 레인지 전체**의 체크율이지 A9·top pair 단독 빈도가 아니다. A7/A2는 double paire(18콤보, 3,9 %). BB는 AA/AK/AQ가 없고 **AJ까지**(BTN은 AK·AQ 보유); brelan servi(set)는 77/22 총 6콤보, BTN은 AA 포함 9.
- 리드에 대한 레이즈를 버틸 수 있는 BB 핸드는 **24콤보뿐**(set 6 + double paire 18)이고 **레이즈 노드는 풀지 않았다**는 괄호를 보존.
- BTN c-bet 70–100 % 일반 가이드와 **이 예제의 정확한 BTN 결과는 없음**을 구분. 앱 ① 설명문(«BTN mise un petit c-bet après le check de BB»)은 폐기 명제 — 옮기지 않는다.
- «Checking is not check-folding» 불릿의 «A9 is a check-call» 유지.

---

## ② k-high-board-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The King-High Flop Where the Caller Checks 99.8%",
seoTitle: "The Flop Where the Big Blind Checks 99.8% — K-8-3 C-Bet",
desc: "On K-8-3 the big blind checks 99.8% — a purer range check than ace-high. One missing hand explains it, and equity realization does the rest.",
tldr: "On K♠8♦3♣ after a button open and a big blind call, the big blind checks 99.8% of its range — an even purer range check than the 98.2% on an ace-high flop. Two things cause it: the big blind holds no overpair here, because AA three-bets preflop, and equity realization splits 80.7% against 116.7%.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "9 min",
emoji: "👑",
image: "/images/gto-srp-dry-king-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a dry king-high flop, the big blind's 13x13 grid almost entirely green for check",
tags: ["should you always c bet", "check back range", "delayed c bet", "king high flop", "gto solver", "range check", "equity realization"],
# title 길이 48
# seoTitle 길이 55
# desc 길이 140
# tldr 길이 297
```

### 구조 (EN content L68~L230 · L## = EN 파일 줄)
#### 헤딩
- L85 ## What conditions produced these numbers?
- L101 ## How often does the big blind check on K-8-3?
- L113 ## Why is this check even purer than on an ace-high flop?
- L129 ## How do the two ranges differ?
- L149 ## Why is almost a third of both ranges ace high?
- L157 ## Why is EQR 81 against 117 when equity is 46 against 54?
- L173 ## Are there really no draws here?
- L184 ## Should you always c-bet a king-high flop?
- L192 ## What changes at the table?
- L204 ## Check it yourself
- L210 ## FAQ

#### FAQ 5문항
- L212 **Q. Why doesn't the big blind ever bet on K-8-3?**
- L216 **Q. Which is worse for the big blind, an ace-high flop or a king-high flop?**
- L220 **Q. What is a check-back range?**
- L224 **Q. How much is a backdoor flush draw worth?**
- L228 **Q. Can I use these numbers at any stake?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L75 :::stripe
- L80 :::
- L133 ![Range composition infographic comparing the big blind and button hand categories on a dry king-high board, green and gold bars side by side](/images/gto-srp-dry-king-ranges-en.webp "K♠8♦3♣ · category split — the top of the range…
- L169 :::note[The EQR figures in this series are the ones shown on the solver screen. Recomputing them from the rounded equity and EV on the same screen can land a tenth of a point off — that is rounding, not a contradiction.]:::
- L190 :::note[⚠ This section is a reading of the range composition, not a solved number. The study spot pre-solves only the flop's first action — the big blind's — so the button's exact c-bet frequency is not on this screen. Open "Solve…
- L199 :::readnext[Keep reading]
- L202 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L70 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L72 /en/solver ✅ 도구
- L133 /images/gto-srp-dry-king-ranges-en.webp "K♠8♦3♣ · category split — the top of the range belongs to the button" img
- L171 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L171 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L194 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L206 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§2·§9)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| delayed c bet poker (c bet poker 자동완성) | `-` | «c-bet retardé (delayed c-bet)» 병기 정도 — H2·태그 후보 |
| check back poker | 20 | 태그·본문 «checker derrière (check-back)» |
| 함정 🚫 | — | «should you always c bet»의 fr 대응 «toujours c-bet» = 앱 ④ 설명문 문구 — 이 글 카피에서 «c-bet 일반론» 헤드 조준 금지(L-D 몫) |

### PAA·자동완성 (축어)
- 자동완성: delayed c bet poker · c bet poker definition · c bet range poker · continuation bet poker · poker c bet strategy · c bet sizing poker (🔴 c-bet 계열은 L-D 몫 · 기록만)
- PAA: 스팟 고유 프랑스어 질문 없음(그룹 A).

### 현지 SERP (L-G §7-8 · 그룹 A)
- 처방 없음 — EN FAQ 질문을 프랑스어 질문형으로 옮긴다. «delayed c bet» 표현은 «c-bet retardé» 병기.
- 우리가 더 줄 것: ① A-7-2와 같은 메뉴판에서 99,8 % 체크 비교 ② BB의 최고 hauteur As가 AJ라는 콤보 근거 ③ MDF로 «노메이드 = 폴드 아님»을 보여 주는 단락.

### 소유표 (계획 §3-B)
- 주인인 검색어: 없음(그룹 A).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «c bet poker» 단독(L-D) · «range poker».

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Le flop hauteur Roi où le caller checke 99,8 % (46 car.)
seoTitle: Le flop où la grosse blinde checke 99,8 % — c-bet sur K-8-3 (59 car.)
desc: Sur K-8-3, la grosse blinde checke 99,8 % : un check de range plus pur encore que sur hauteur As. Une main absente l'explique, l'EQR fait le reste. (147 car.)
tldr: Sur K♠8♦3♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 99,8 % de sa range, un check de range encore plus pur que les 98,2 % du flop hauteur As. Deux causes : la grosse blinde n'a aucune surpaire ici, parce que AA 3-bet préflop, et la réalisation d'équité se partage 80,7 % contre 116,7 %. (328 car.)
tags: ["faut-il toujours c-bet", "check back poker", "c-bet retardé", "flop hauteur roi", "board sec k-high", "check de range", "réalisation d'équité"]
#### H2 (EN → FR)
- L85 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L101 `## How often does the big blind check on K-8-3?` → `## À quelle fréquence la grosse blinde checke-t-elle sur K-8-3 ?`
- L113 `## Why is this check even purer than on an ace-high flop?` → `## Pourquoi ce check est-il encore plus pur que sur un flop hauteur As ?`
- L129 `## How do the two ranges differ?` → `## En quoi les deux ranges diffèrent-elles ?`
- L149 `## Why is almost a third of both ranges ace high?` → `## Pourquoi près d'un tiers des deux ranges n'est-il que hauteur As ?`
- L157 `## Why is EQR 81 against 117 when equity is 46 against 54?` → `## Pourquoi l'EQR fait 81 contre 117 quand l'équité fait 46 contre 54 ?`
- L173 `## Are there really no draws here?` → `## Il n'y a vraiment aucun tirage ici ?`
- L184 `## Should you always c-bet a king-high flop?` → `## Faut-il toujours c-bet un flop hauteur Roi ?`
- L192 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L204 `## Check it yourself` → `## Vérifie toi-même`
- L210 `## FAQ` → `## FAQ`
- Forme question : 9/9 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Why doesn't the big blind ever bet on K-8-3? → `Pourquoi la grosse blinde ne mise-t-elle jamais sur K-8-3 ?` (EN)
2. Which is worse for the big blind, an ace-high flop or a king-high flop? → `Flop hauteur As ou hauteur Roi : lequel est pire pour la grosse blinde ?` (EN)
3. What is a check-back range? → `C'est quoi une range de check back ?` (autocomplétion « check back poker » 20)
4. How much is a backdoor flush draw worth? → `Combien vaut un tirage couleur backdoor ?` (EN)
5. Can I use these numbers at any stake? → `Je peux utiliser ces chiffres à toutes les limites ?` (EN)
#### Mots-clés absorbés
- check back poker (20) → tag + FAQ 3
- delayed c bet poker (autocomplétion, famille c bet) → tag « c-bet retardé » seulement (prescription §7-8 : pas d'H2)
#### Notes
- Groupe A (L-G §10) : aucune question FR propre au spot → FAQ EN simplement francisées, rien d'ajouté. Spot app : `Board sec K-high`.
- « caller » dans le title = verbatim app (🅶 autorisé, plan §3-A ④).

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L68 · L70 · L76 · L77 · L78 · L79 · L83 · L87 · L91 · L92 · L93 · L94 · L95 · L99 · L103 · L107 · L108 · L109 · L115 · L125 · L127 · L133 · L137 · L138 · L139 · L140 · L141 · L142 · L143 · L144 · L145 · L147 · L151 · L163 · L165 · L167 · L171 · L179 · L180 · L182 · L186 · L194 · L197 · L214 · L218 · L226 · L230

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L228: **Q. Can I use these numbers at any stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 ①편과 겹치지 않게 잡았다 — ①이 `good c bet percentage`·`dry board`·`range advantage`를 가져갔다.
- * 🔴 c벳 «머리말»(`c-bet poker` 320)은 `holdem-continuation-bet` 소유다. 침범하지 않는다.
- * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry King-High Board
- *   ⚠ BB에 Overpair 행이 없다 — 0%라 앱이 표시하지 않는다(KO 표의 0.0%와 같은 뜻).

### 하지 말 것 (EN 원문 계약 ②)
- BB overpair 0 대 BTN 1,3 %; brelan servi 6 대 9콤보. BB double paire 0,8 %는 BTN 0,4 %의 두 배지만 4콤보뿐이고 **overpair보다 높은 족보**다.
- hauteur As 27,0/30,0은 «Pas de main faite» 35,4/28,3과 다른 행.
- BB의 최고 hauteur As는 **AJ**(AQ는 프리플랍 3-bet) — «같은 AQ»라고 쓰지 않는다 · «Identical»이 아니라 «Similar cards» → «des cartes similaires».
- 노메이드 35,4 %는 «즉시 폴드»가 아니다 — 1/3팟에 균형 방어는 약 75 %(MDF)를 남기므로 일부는 계속하고, BB 반응 노드는 이 솔브에 없다. 72,2 % no-draw는 전체 레인지 분모.
- EQR 반올림 note 보존 · BTN 전략은 해석이며 정확한 c-bet 노드 없음.

---

## ③ broadway-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two-Thirds of the Range Has a Draw — and It Still Checks",
seoTitle: "68% Have a Draw, 99.9% Check — Q-J-T Nut Advantage",
desc: "On Q-J-T two-tone, 68% of the big blind's range holds a draw and it still checks 99.9%. Nut advantage — not range advantage — is what decides this flop.",
tldr: "On Q♠J♦T♠ after a button open and a big blind call, the big blind checks 99.9% — even though 68.4% of its range holds a draw. The cause is nut advantage: straights 10.5% against 7.1%, sets 2.0% against 0.7%, overpairs 2.6% against 0%. Equity realization splits 77.9% against 119.4%, the widest gap of the three dry-to-wet flops so far.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🎴",
image: "/images/gto-srp-broadway-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a connected broadway two-tone flop, the big blind's grid green for check with the draw panel on the right",
tags: ["nut advantage", "range advantage vs nut advantage", "dynamic board poker", "two tone board", "gto solver", "broadway flop", "equity realization"],
# title 길이 56
# seoTitle 길이 50
# desc 길이 152
# tldr 길이 335
```

### 구조 (EN content L72~L244 · L## = EN 파일 줄)
#### 헤딩
- L89 ## What conditions produced these numbers?
- L103 ## Why check 99.9% when the board is this wet?
- L115 ## What is nut advantage on this flop?
- L134 ## Range advantage vs nut advantage — what's the difference?
- L146 ## How much of each range is drawing?
- L165 ## Why is top pair dangerous here?
- L178 ## Why is EQR 78 against 119 when equity is 47 against 53?
- L200 ## How should the button bet a dynamic board like this?
- L208 ## What changes at the table?
- L220 ## Check it yourself
- L228 ## FAQ

#### FAQ 4문항
- L230 **Q. Which hands make a straight on Q-J-T?**
- L234 **Q. Isn't a wet board the place to semi-bluff lead?**
- L238 **Q. What is the difference between range advantage and nut advantage?**
- L242 **Q. Can I use these numbers at any stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L79 :::stripe
- L84 :::
- L150 ![Range composition infographic comparing the big blind and button hand categories on a connected broadway two-tone board](/images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · category split — the top four rows are where the flop is …
- L206 :::note[⚠ Everything above is solver output; this section is a reading of it. The study spot pre-solves only the big blind's first action, so the button's sizing split is not on this screen. Open "Solve this spot yourself" and run…
- L215 :::readnext[Keep reading]
- L218 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L74 /en/blog/a-high-board-cbet ✅
- L74 /en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp" ✅
- L76 /en/solver ✅ 도구
- L150 /images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · category split — the top four rows are where the flop is decided" img
- L163 /en/blog/holdem-drawing-odds ✅
- L188 /en/blog/k-high-board-cbet ✅
- L198 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L198 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L204 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L222 /en/solver ✅ 도구
- L236 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅

### 키워드 (출처 L-G §1·§7-8)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| nut advantage · range advantage | 10 · 10 | H2 «Avantage de range ou avantage de nuts : quelle différence ?» |
| avantage de range poker | `-` (자동완성) | H2·본문 |
| 함정 🚫 | — | «nuts poker»(210 · 주인 = `holdem-reading-the-board` · §3-B ④) — seoTitle·tags에 «nuts poker» 금지(«avantage de nuts»는 다른 구) |

### PAA·자동완성 (축어)
- 자동완성: avantage de range poker · range advantage meaning poker · nut advantage poker → nut advantage
- 코치 영상 제목: «Qu'est ce que l'avantage de range au Poker ?» (ShiShi) · «L'avantage de RANGE au POKER» (Nico Coach Poker)

### 현지 SERP (L-G §3-K·§7-8)
- 상위 = 프랑스 커뮤니티 포럼·코치 글(Kill Tilt · nicocoachpoker · PokerStars.fr «Ranges au Poker» · pokerlistings fr). 솔버 수치 0.
- 우리가 더 줄 것: ① 77,9 % 대 119,4 % EQR 계산값 ② 퀸트 콤보 48 대 32 근거 ③ 앱 «Mains / Tirages» 패널 동선.

### 소유표 (계획 §3-B)
- 주인인 검색어: «avantage de range / avantage de nuts» 질문형(볼륨 미미 — 표현만).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «nuts poker»(④ → reading-the-board).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Deux tiers de la range ont un tirage, et elle checke quand même (63 car.)
seoTitle: 68 % de tirages, 99,9 % de check — avantage de nuts Q-J-10 (58 car.)
desc: Sur Q-J-10 bicolore, 68 % de la range de la grosse blinde ont un tirage, et elle checke 99,9 %. L'avantage de nuts, pas celui de range, décide ce flop. (151 car.)
tldr: Sur Q♠J♦10♠, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 99,9 %, alors que 68,4 % de sa range ont un tirage. La cause est l'avantage de nuts : quintes 10,5 % contre 7,1 %, brelans servis 2,0 % contre 0,7 %, surpaires 2,6 % contre 0 %. La réalisation d'équité se partage 77,9 % contre 119,4 %, l'écart le plus large des trois flops vus jusqu'ici, du plus sec au plus humide. (412 car.)
tags: ["nut advantage", "avantage de nuts", "avantage de range ou avantage de nuts", "board dynamique poker", "board bicolore", "flop broadway", "réalisation d'équité"]
#### H2 (EN → FR)
- L89 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L103 `## Why check 99.9% when the board is this wet?` → `## Pourquoi checker 99,9 % sur un board aussi humide ?`
- L115 `## What is nut advantage on this flop?` → `## C'est quoi l'avantage de nuts sur ce flop ?`
- L134 `## Range advantage vs nut advantage — what's the difference?` → `## Avantage de range ou avantage de nuts : quelle différence ?`
- L146 `## How much of each range is drawing?` → `## Quelle part de chaque range est en tirage ?`
- L165 `## Why is top pair dangerous here?` → `## Pourquoi top paire est-elle dangereuse ici ?`
- L178 `## Why is EQR 78 against 119 when equity is 47 against 53?` → `## Pourquoi l'EQR fait 78 contre 119 quand l'équité fait 47 contre 53 ?`
- L200 `## How should the button bet a dynamic board like this?` → `## Comment le bouton doit-il miser un board dynamique comme celui-ci ?`
- L208 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L220 `## Check it yourself` → `## Vérifie toi-même`
- L228 `## FAQ` → `## FAQ`
- Forme question : 9/9 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Which hands make a straight on Q-J-T? → `Quelles mains font une quinte sur Q-J-10 ?` (EN · quinte = terme figé §3-A ③)
2. Isn't a wet board the place to semi-bluff lead? → `Un board humide, ce n'est pas justement l'endroit pour lead en semi-bluff ?` (EN)
3. What is the difference between range advantage and nut advantage? → `Quelle est la différence entre avantage de range et avantage de nuts ?` (autocomplétion « avantage de range poker » · vidéo coach « Qu'est ce que l'avantage de range au Poker ? »)
4. Can I use these numbers at any stake? → `Je peux utiliser ces chiffres à toutes les limites ?` (EN)
#### Mots-clés absorbés
- avantage de range poker (`-` · autocomplétion) + nut advantage (10) → H2 L134 + FAQ 3 + tags
- board bicolore (étiquette app `Broadway connecté, bicolore`) → tag
#### Notes
- « nuts » conservé tel quel (usage FR ; « avantage de nuts » calque usuel des coachs). Spot app : `Broadway connecté, bicolore`.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L72 · L74 · L80 · L81 · L82 · L83 · L87 · L91 · L95 · L96 · L97 · L98 · L99 · L103 · L109 · L110 · L111 · L113 · L121 · L122 · L123 · L124 · L130 · L141 · L148 · L150 · L154 · L155 · L156 · L157 · L158 · L159 · L161 · L167 · L169 · L173 · L174 · L176 · L184 · L186 · L188 · L194 · L195 · L196 · L198 · L202 · L204 · L211 · L212 · L216 · L224 · L232 · L236 · L240 · L244

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L242: **Q. Can I use these numbers at any stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 ①편이 `range advantage`를 **기초 개념**으로 가져갔다. 이 편은 **«둘의 차이»**를 잡는다 —
- * 🔴 수치 출처: 2026-08-19 `solver.holdemmaster.com/?lang=en` 「Study Spots → Connected Broadway,

### 하지 말 것 (EN 원문 계약 ③)
- Q♠J♦10♠는 **bicolore**. quinte는 AK/K9/98, BTN 48 대 BB 32콤보(7,1/10,5 %). BB에 AK가 없다. OESD 28,7/27,7과 made straight 분포를 섞지 않는다.
- 68,7 %는 «완성 핸드 위에 더하는» 값이 아니라 **겹치는 다른 축**.
- 큰 사이즈 근거는 «한쪽에 대부분»(BB quinte 7,1 % · brelan servi 0,7 %) — «전부 한쪽»으로 되돌리지 않는다.
- FAQ의 ④ 대비는 «23,7 % de lead contre presque rien».
- BTN sizing/check-raise 빈도는 이 예제에서 계산되지 않았다.
- 앱 ③ 설명문의 «des 13 spots»(하드코딩)를 옮기지 않는다.

---

## ④ donk-bet-strategy — EN updated 2026-09-26 · masterUpdated = "2026-09-26"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Flop Where Donk Betting Is Right — 9-8-7",
seoTitle: "The Board Where a Donk Bet Is Correct — 9-8-7 Poker Lead",
desc: "In poker a donk bet reads as a beginner mistake. On 9-8-7 a solver leads 23.7% — here is the board condition that makes leading correct, and the sizing.",
tldr: "On 9♥8♥7♣ after a button open and a big blind call, the big blind checks 76.2% and leads 23.7% — the first spot in this series where the lead is a real strategy rather than a rounding artifact. Range advantage has not flipped: equity is still 48.5% against 51.5%. What changed is the gap and where each side's strong hands sit.",
category: "strategy",
date: "2026-08-19",
updated: "2026-09-26",
keepImagesInBody: true,
readTime: "9 min",
emoji: "🎯",
image: "/images/gto-srp-middle-connected-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a middle connected two-tone flop, the big blind's grid mixing green checks with orange and pink bets",
tags: ["donk bet poker", "what is a donk bet", "when not to c bet", "lead bet", "gto solver", "middle connected board", "range advantage"],
# title 길이 44
# seoTitle 길이 56
# desc 길이 152
# tldr 길이 327
```

### 구조 (EN content L76~L290 · L## = EN 파일 줄)
#### 헤딩
- L97 ## What conditions produced these numbers?
- L111 ## How often does the big blind donk bet on 9-8-7?
- L132 ## What changed compared with the first three flops?
- L155 ## So does this flop favor the big blind?
- L210 ## Why are the button's overpairs vulnerable?
- L223 ## Why is the small size two-thirds of the lead?
- L231 ## When should you not c-bet? The 9-8-7 exception
- L241 ## What changes at the table?
- L254 ## Check it yourself
- L262 ## FAQ

#### FAQ 7문항
- L264 **Q. What is a donk bet in poker?**
- L268 **Q. Why do people say donk betting is bad?**
- L272 **Q. Does the big blind have the advantage on 9-8-7?**
- L276 **Q. When should you check instead of leading in poker?**
- L280 **Q. What happens if I lead and get raised?**
- L284 **Q. What size should I lead with?**
- L288 **Q. Do these lead frequencies hold at my stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L87 :::stripe
- L92 :::
- L159 ![Range composition infographic comparing the big blind and button hand categories on a middle connected two-tone board](/images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · category split — straights favor the big blind, ove…
- L239 :::note[The study spot pre-solves only the flop's first action — the big blind's. How far the button's c-bet frequency actually drops after a check is not on this screen. Open "Solve this spot yourself" and run the tree to see it.…
- L249 :::readnext[Keep reading]
- L252 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L78 /en/blog/a-high-board-cbet ✅
- L78 /en/blog/k-high-board-cbet ✅
- L78 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L84 /en/solver ✅ 도구
- L159 /images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · category split — straights favor the big blind, overpairs and ace-high img
- L219 /en/blog/holdem-drawing-odds ✅
- L233 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L243 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L256 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§3-D·§7-2 · fr-core-volumes §2 🅶)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| **donk bet poker** (= donk bet · donkbet poker — 같은 수요) | **140** | seoTitle 앞쪽 · 정의 H2 · tags · 본문 «donkbet» 1회 병기 |
| donk poker · donk bet poker definition | 20 · 20 | 정의 H2 직답 |
| donk bet definition · donk bet turn · lead poker | 10 · 10 · 10 | 태그 후보 · «lead» 병기 |
| donk bet c'est quoi · donk bet traduction | `-` (자동완성) | 정의 H2 표현 |
| 함정 🚫 | — | «donk bet» 단독은 오염(EN 머리 주석: donk beyonce·betboom) → **poker 앵커를 붙인다** · «donk bet turn/river» 새 H2 금지(§1-E ② · 볼륨 0~10) |

### PAA·자동완성 (축어)
- PAA: **Quelle est la définition de "donk" ?** · Que signifie "bet" au poker ? · Que signifie le terme "shove" au poker ? · Quel est le plus gros coup au poker ?
- 자동완성: donk bet poker · donk bet definition · donk bet turn · flop · river · traduction · **donk bet c'est quoi** · **c'est quoi un donk bet au poker** · donk bet signification · **donkbet poker** · donk bet au poker · donk lead
- SERP 1위 제목(reddit fr): «Pourquoi le donk est-il si mauvais ?» · 영상 «Pourquoi il ne faut pas donk bet au poker ?» · «1001 saveurs de donkbet : quand et comment donkbet ?»

### 현지 SERP (L-G §3-D·§4 ⑧⑨·§7-2)
- 상위: reddit 기계번역 · Poker Académie 영상·2012 포럼 «Donkbet ou pas» · 영어 용어집(pokercode). **프랑스어 텍스트 정의·전략 글 0.**
- 우리가 더 줄 것: ① 9-8-7 리드 23,7 %(작은 사이즈 16,8 %가 리드의 2/3)라는 계산값 ② quinte 24 대 20콤보(차이 = T6s 4콤보) ③ «언제 맞나»를 텍스트로 처음 준다.
- 처방: 첫 H2 앞(또는 FAQ 승격) «Donk bet : c'est quoi au poker ?» · FAQ «Pourquoi dit-on que le donk bet est mauvais ?».
- 차별화 재료: PokerStars.fr check-raise 글이 «9-8-7 = check-raise»라 하는 자리에서 우리 9-8-7은 리드 23,7 %(이름은 쓰지 않는다).

### 소유표 (계획 §3-B)
- 주인인 검색어: **donk bet poker 140**(§1-E 예외 «그 단어의 주인»).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «c bet poker» 단독(L-D).
- 위임 앵커: c-bet 일반론 → `/fr/blog/holdem-continuation-bet` · 드로우 확률 → `/fr/blog/holdem-drawing-odds`(EN 링크 자리).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Le flop où le donk bet est juste : 9-8-7 (40 car.)
seoTitle: Le board où le donk bet au poker est juste — lead sur 9-8-7 (59 car.)
desc: Au poker, le donk bet passe pour une erreur de débutant. Sur 9-8-7, le solver lead 23,7 % : voici la condition de board qui rend le lead correct, et le sizing. (159 car.)
tldr: Sur 9♥8♥7♣, après une ouverture du bouton suivie par la grosse blinde, la grosse blinde checke 76,2 % et lead 23,7 % : le premier spot de cette série où le lead est une vraie stratégie et non un artefact d'arrondi. L'avantage de range n'a pas basculé, l'équité reste à 48,5 % contre 51,5 %. Ce qui a changé, c'est l'écart, et l'endroit où se trouvent les mains fortes de chaque côté. (383 car.)
tags: ["donk bet poker", "donkbet poker", "donk bet c'est quoi", "quand ne pas c-bet", "lead poker", "board connecté", "avantage de range"]
#### H2 (EN → FR)
- + (ajout) `## Donk bet : c'est quoi au poker ?` — placé avant L97 (1 paragraphe de direct, 40–75 mots ; « donkbet » cité une fois dans le corps ; promotion de la FAQ EN « What is a donk bet in poker? » — prescription §7-2)
- L97 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L111 `## How often does the big blind donk bet on 9-8-7?` → `## À quelle fréquence la grosse blinde fait-elle un donk bet sur 9-8-7 ?`
- L132 `## What changed compared with the first three flops?` → `## Qu'est-ce qui a changé par rapport aux trois premiers flops ?`
- L155 `## So does this flop favor the big blind?` → `## Alors, ce flop favorise-t-il la grosse blinde ?`
- L210 `## Why are the button's overpairs vulnerable?` → `## Pourquoi les surpaires du bouton sont-elles vulnérables ?`
- L223 `## Why is the small size two-thirds of the lead?` → `## Pourquoi le petit sizing représente-t-il deux tiers des leads ?`
- L231 `## When should you not c-bet? The 9-8-7 exception` → `## Quand ne pas c-bet ? L'exception 9-8-7`
- L241 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L254 `## Check it yourself` → `## Vérifie toi-même`
- L262 `## FAQ` → `## FAQ`
- Forme question : 9/9 H2 de contenu (100 %) — l'ajout compris
#### FAQ (EN → FR)
1. What is a donk bet in poker? → **promue en H2** `## Donk bet : c'est quoi au poker ?` (autocomplétion « c'est quoi un donk bet au poker » · PAA « Quelle est la définition de "donk" ? ») — la FAQ commence donc à « Pourquoi… » (6 Q.)
2. Why do people say donk betting is bad? → `Pourquoi dit-on que le donk bet est mauvais ?` (SERP #1 reddit « Pourquoi le donk est-il si mauvais ? » · vidéo « Pourquoi il ne faut pas donk bet au poker ? »)
3. Does the big blind have the advantage on 9-8-7? → `La grosse blinde a-t-elle l'avantage sur 9-8-7 ?` (EN)
4. When should you check instead of leading in poker? → `Quand checker plutôt que lead au poker ?` (EN)
5. What happens if I lead and get raised? → `Et si je lead et que je me fais relancer ?` (EN)
6. What size should I lead with? → `Quel sizing pour mon lead ?` (EN · « sizing » = terme FR, L-G §3-F)
7. Do these lead frequencies hold at my stake? → `Ces fréquences de lead tiennent-elles à ma limite ?` (EN)
#### Mots-clés absorbés
- donk bet poker / donk bet / donkbet poker (140, une seule demande) → seoTitle + H2 ajout + tags
- donk bet c'est quoi (autocomplétion) → tag + H2 ajout
- lead poker (10) → seoTitle suffixe + tag
#### Notes
- « donk bet » seul est pollué (donk beyonce / betboom) → seoTitle garde « donk bet au poker » collés. Pas d'H2 « donk bet turn/river » (§1-E ②).
- 🔴 Rappel corps : la FAQ EN « Why do people say… » répond au mythe ; ne pas écrire « l'avantage de range est passé à la BB » (en-tête EN).

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L78 · L80 · L88 · L89 · L90 · L91 · L95 · L99 · L103 · L104 · L105 · L106 · L107 · L113 · L117 · L118 · L119 · L125 · L126 · L127 · L128 · L130 · L134 · L140 · L141 · L142 · L143 · L145 · L151 · L152 · L153 · L157 · L159 · L163 · L164 · L165 · L166 · L167 · L168 · L169 · L170 · L171 · L172 · L173 · L177 · L183 · L184 · L185 · L186 · L187 · L188 · L190 · L196 · L198 · L200 · L206 · L208 · L219 · L225 · L235 · L237 · L243 · L244 · L251 · L266 · L270 · L274 · L278 · L290

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L227: A small bet says "my entire range likes this flop." If only the strong hands bet, the range splits into "bet = strong, check = weak" and you…
- L280: **Q. What happens if I lead and get raised?**…
- L284: **Q. What size should I lead with?**…
- L288: **Q. Do these lead frequencies hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   ⚠ 초판 주석이 `should i always c-bet`을 §3-④로 적었으나 **그건 §3-②의 자리다**(SEO 렌즈가 잡았다).
- * 🔴 **「donk bet」 단독은 오염돼 있다** — 자동완성에 `donk beyonce`·`donk betboom`(브랜드)이 섞인다.
- * 🔴 ②편이 `should you always c bet`을 가져갔다 → ④는 **「when NOT to c-bet」·「when to check」** 쪽이다.
- * 🔴 수치 출처: 2026-08-19 `?lang=en` 「Study Spots → Middle Connected, Two-Tone」 OOP·IP 실측.
- *   ⚠ **BTN의 OESD가 23.7%인데 BB의 리드 빈도도 23.7%다.** 우연이고 다른 값이다 — 본문에서 섞지 마라.
- *     🔴 **차이가 정확히 T6s 4콤보다** — 빅블라인드라 싸게 방어한 한 칸이 너트 지분을 뒤집는다
- * ⚠ KO 파일 주석의 경고를 그대로 잇는다: **「레인지 우위가 BB로 넘어갔다」고 쓰지 마라.**

### 하지 말 것 (EN 원문 계약 ④)
- BB quinte 24콤보 대 BTN 20; 차이는 **T6s 4콤보**. 최상위 JT 16콤보는 양쪽 동일(본문 «nut J-T is 16 for each»)하므로 전체 quinte 우위를 JT 독점으로 바꾸지 않는다. «nuts» → «strongest hands»(«les mains les plus fortes»).
- double paire 2,8 % · brelan servi 1,9 % **동률**. 전체 EQ/EQR은 여전히 BTN 우위. no-pair BB 53,7 대 BTN 51,7 %이므로 BTN의 체크를 «미스가 더 많아서» 하나로 설명하지 않는다.
- BTN이 넓게 못 친다는 것은 «레인지 구성에서 읽은 해석 — BTN 벳 노드는 이 솔브에 없다».
- QQ(하트 없음) 위험 turn 23/47 ≈ 49 %, Q♥ 있으면 22/47 ≈ 47 %. 24 quinte 전부가 체크 레인지에 남는 것도 아님.
- ⚠ EN 머리 주석: **BTN의 OESD 23,7 %와 BB 리드 23,7 %는 우연히 같은 다른 값** — 본문에서 섞지 마라.
- 앱 ④ 설명문(«La fréquence de c-bet de BTN s'effondre»)은 폐기 명제(화면은 BB 첫 액션 · BB의 리드는 c-bet이 아니다) — 옮기지 않는다.

---

## ⑤ monotone-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Nut Flush That Checks Seven Times Out of Ten",
seoTitle: "The Nut Flush Checks 70% of the Time — Monotone Flop",
desc: "On a monotone flop the big bet nearly disappears — 3.2%. Even the nut flush checks 69.9% on average. Here is why size collapses when three suits match.",
tldr: "On Q♠9♠2♠, where all three flop cards share a suit, the big blind checks 88.8%, bets small 8.0% and bets big just 3.2%. The large size almost vanishes because the nuts are fixed: a made flush gets called by small bets anyway, and the bigger you bet without a flush, the more your callers narrow down to flushes. Even the nut flush checks 69.9% on average — and non-nut flushes check more, at 81.4%.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "♠️",
image: "/images/gto-srp-monotone-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a monotone spade flop, the big blind's grid mostly green for check with a few small bets mixed in",
tags: ["monotone flop", "monotone board poker", "how to play monotone flop", "nut flush", "bet sizing", "gto solver", "reverse implied odds"],
# title 길이 48
# seoTitle 길이 52
# desc 길이 151
# tldr 길이 398
```

### 구조 (EN content L73~L254 · L## = EN 파일 줄)
#### 헤딩
- L90 ## What is a monotone board in poker?
- L104 ## How does the big blind play a monotone flop?
- L118 ## Why does the big bet disappear on a monotone flop?
- L132 ## Why does the nut flush check?
- L157 ## Are non-nut flushes played differently?
- L170 ## Who holds more flushes here?
- L190 ## How does one spade change a hand's value?
- L200 ## Why is EQR 90 against 109 when equity is 48 against 52?
- L214 ## What changes at the table?
- L226 ## Check it yourself
- L234 ## FAQ

#### FAQ 5문항
- L236 **Q. What is a monotone flop?**
- L240 **Q. Should you always bet a made flush on a monotone board?**
- L244 **Q. Why does the big blind have more flushes than the button?**
- L248 **Q. How likely is it to flop a flush?**
- L252 **Q. Why does the A♠ matter so much if I'm not even holding a flush?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L80 :::stripe
- L85 :::
- L124 :::compare
- L128 :::
- L174 ![Range composition infographic comparing the big blind and button hand categories on a monotone spade board](/images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · category split — made flushes favor the big blind, overpairs and ace-h…
- L221 :::readnext[Keep reading]
- L224 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L77 /en/solver ✅ 도구
- L106 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L168 /en/blog/holdem-implied-odds ✅
- L174 /images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · category split — made flushes favor the big blind, overpairs and ace-h img
- L228 /en/solver ✅ 도구
- L250 /en/blog/holdem-drawing-odds ✅

### 키워드 (출처 L-G §1·§3-G·§7-7)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| monotone board poker | 10 | 첫 H2 «Board monotone au poker : c'est quoi ?» · tags |
| board monotone · flop monotone · monotone flop poker | `-` (자동완성) | 본문·태그 |
| monotone flop odds (자동완성) | — | FAQ «flush를 플랍할 확률» 유지 |
| 함정 🚫 | — | 앱 라벨 «monochrome»은 앱 인용 시만 · 프랑스어 영상 표기 «monocolor/monocolore»는 본문 1회 병기만 |

### PAA·자동완성 (축어)
- PAA(일반 · 그룹 A): Qu'est-ce qu'un flop au poker ? · Que signifie "tnt" au poker ? · Quel est le plus gros coup au poker ? · C'est quoi le stack au poker ?
- 자동완성: monotone board poker meaning · monotone boards poker · board poker definition · flop monotone → monotone flop poker · monotone flop odds
- 프랑스어 영상 제목: «Comment jouer sur un board monocolor ? (Solver !)» (Improve Your Poker)

### 현지 SERP (L-G §3-G·§4 ⑩⑪)
- 1페이지 전부 영어(upswing · GTO Wizard «Maximizing Value on Monotone Flops» · pokerstrategy) + 프랑스어 영상 1. **프랑스어 텍스트 0.**
- 우리가 더 줄 것: ① 큰 사이즈 3,2 % / 작은 8,0 % / 체크 88,8 % 계산값 ② 너트 플러시 콤보별 체크율(A♠J♠ 83,4 % · 8콤보 평균 69,9 %) ③ 턴·리버까지 가는 GTO Wizard와 달리 «플랍 첫 결정»으로 범위 명시.

### 소유표 (계획 §3-B)
- 주인인 검색어: «board monotone» 정의형(볼륨 10).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: La couleur max qui checke sept fois sur dix (43 car.)
seoTitle: La couleur max checke 70 % du temps — flop monotone poker (57 car.)
desc: Sur un flop monotone, la grosse mise tombe à 3,2 %. Même la couleur max checke 69,9 % en moyenne. Pourquoi le sizing s'effondre sur trois cartes assorties. (155 car.)
tldr: Sur Q♠9♠2♠, où les trois cartes du flop sont de la même enseigne, la grosse blinde checke 88,8 %, mise petit 8,0 % et mise gros seulement 3,2 %. Le gros sizing disparaît presque parce que les nuts sont figés : une couleur faite se fait payer par les petites mises de toute façon, et plus tu mises gros sans couleur, plus ceux qui te paient se réduisent à des couleurs. Même la couleur max checke 69,9 % en moyenne, et les couleurs non max checkent davantage, 81,4 %. (466 car.)
tags: ["flop monotone", "board monotone poker", "comment jouer un flop monotone", "couleur max", "sizing poker", "board monochrome", "cotes implicites inversées"]
#### H2 (EN → FR)
- L90 `## What is a monotone board in poker?` → `## Board monotone au poker : c'est quoi ?` (« monocolore » cité une fois dans le paragraphe — vidéo FR « board monocolor » ; « monochrome » seulement comme étiquette app)
- L104 `## How does the big blind play a monotone flop?` → `## Comment la grosse blinde joue-t-elle un flop monotone ?`
- L118 `## Why does the big bet disappear on a monotone flop?` → `## Pourquoi la grosse mise disparaît-elle sur un flop monotone ?`
- L132 `## Why does the nut flush check?` → `## Pourquoi la couleur max checke-t-elle ?`
- L157 `## Are non-nut flushes played differently?` → `## Les couleurs non max se jouent-elles autrement ?`
- L170 `## Who holds more flushes here?` → `## Qui a le plus de couleurs ici ?`
- L190 `## How does one spade change a hand's value?` → `## Comment un seul pique change-t-il la valeur d'une main ?`
- L200 `## Why is EQR 90 against 109 when equity is 48 against 52?` → `## Pourquoi l'EQR fait 90 contre 109 quand l'équité fait 48 contre 52 ?`
- L214 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L226 `## Check it yourself` → `## Vérifie toi-même`
- L234 `## FAQ` → `## FAQ`
- Forme question : 9/9 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. What is a monotone flop? → `C'est quoi un flop monotone ?` (autocomplétion « flop monotone / monotone flop poker »)
2. Should you always bet a made flush on a monotone board? → `Faut-il toujours miser une couleur faite sur un board monotone ?` (EN)
3. Why does the big blind have more flushes than the button? → `Pourquoi la grosse blinde a-t-elle plus de couleurs que le bouton ?` (EN)
4. How likely is it to flop a flush? → `Quelle est la probabilité de flopper une couleur ?` (autocomplétion « monotone flop odds »)
5. Why does the A♠ matter so much if I'm not even holding a flush? → `Pourquoi l'A♠ compte-t-il autant si je n'ai même pas couleur ?` (EN)
#### Mots-clés absorbés
- flop monotone (autocomplétion) · board monotone poker (10) · monotone flop odds → seoTitle + H2 L90 + FAQ 1/4 + tags
- sizing poker (70, partagé avec ⑨) → tag secondaire
#### Notes
- « couleur max » = nut flush (usage FR). Pour éviter couleur (flush) vs couleur (enseigne) : « enseigne » dans desc/tldr (§3-A ③). Spot app : `Board monochrome`.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L73 · L75 · L81 · L82 · L83 · L84 · L88 · L92 · L96 · L97 · L98 · L99 · L100 · L106 · L110 · L111 · L112 · L114 · L120 · L134 · L136 · L138 · L139 · L140 · L141 · L142 · L143 · L144 · L145 · L147 · L149 · L153 · L155 · L159 · L163 · L164 · L165 · L166 · L168 · L172 · L174 · L178 · L179 · L180 · L181 · L182 · L184 · L188 · L194 · L196 · L206 · L208 · L210 · L216 · L217 · L218 · L219 · L230 · L238 · L242 · L246 · L252 · L254

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L252: **Q. Why does the A♠ matter so much if I'm not even holding a flush?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 **「board」가 아니라 「flop」이 본선이다**(뱅크 §4-1 — board 시드 27개 vs flop 시드 116개).
- * 🔴 형제 편과 겹치지 않는다: ①c벳 빈도·드라이 / ②always c-bet·체크백 / ③너트 우위·다이나믹 /
- * 🔴 `holdem-flush-vs-straight`(족보 서열)·`holdem-drawing-odds`(드로우 확률)의 자리는 침범하지 않는다 —
- *   ⚠ 「플러시 드로우」는 **파생값**이다 — 화면의 Flush Draw + Combo Draw(스페이드 1장이 양쪽에 잡힌다).

### 하지 말 것 (EN 원문 계약 ⑤)
- A♠J♠ 한 콤보 체크 **83,4 %**, 너트 플러시 8콤보 평균 **69,9 %**(52,7–84,2 %), non-nut 25콤보 평균 **81,4 %**를 구분.
- 너트는 «A♠ 한 장»이 아니라 **A♠ + 스페이드 한 장 더**(A♠ 단독은 4장 couleur). A♠K♠는 BB 프리플랍에 없음. Q♠ 보드라 «couleur hauteur valet»라 부르면 틀림; J♠/10♠는 상대 couleur의 키커 슬롯을 차단.
- **블로커 논거는 폐기됐다**: «블로커가 콜링 레인지를 얇게 해 체크» 논리 금지 — BTN non-nut couleur 18콤보 기준 차단 수(J♠·10♠ 4 · 7♠ 6 · 8♠·6♠ 5 · 5♠ 4 · 4♠ 2 · 3♠ 0), 최대 블로커 A♠7♠가 오히려 44,0 % 벳(A♠4♠ 47,3 % 다음), A♠3♠ 79,7 % 체크, 너트 콤보마다 세 액션이 **0,05bb 이내** → «거의 같은 선택지 사이의 믹스이지 블로커 규칙이 아니다».
- BB 싸구려 수딧 예시는 **J4s, J5s, 85s**(74s 아님).
- Q♥J♦: 이미 뒤짐 12,0 %(BTN 전체 474 기준) / 키커 AQ·KQ 16콤보 = **428 중 3,7 %** / 합 **68/428 ≈ 15,9 %** — 분모 474와 428을 섞지 않는다. 키커 16콤보 중 4개는 29,2 %에도 포함(단순 합산 금지). flush draw 합 25,6/29,2는 couleur+combo 두 행을 더한 값.
- BB 큰 리드 3,2 %는 **BTN의 벳 빈도가 아님**. compare 행 «mostly by flushes and spade draws»; 원스페이드 핸드는 «더 높은 couleur 불가·러너러너(full 등) 필요».

---

## ⑥ paired-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "You Hold More Trips — and Still Check 97%",
seoTitle: "More Trips, Still Checking 97% — the 6-6-3 Paired Flop",
desc: "On 6-6-3 the caller holds more trips than the raiser — 26 combos against 20 — and checks 97% anyway. Here is what a paired flop actually rewards.",
tldr: "On the low paired flop 6♣6♦3♥ the big blind checks 97.0%. The odd part is that it holds more trips than the button: 26 six-x combos against 20. It checks anyway, because only 18.4% of its range has anything beyond the board's pair, and the other 81.6% is a high-card contest the button wins. What does gain value is any pocket pair above a six — TT is 76.0% equity here.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "👯",
image: "/images/gto-srp-paired-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a low paired flop, the big blind's grid almost entirely green with quads and full house rows in the panel",
tags: ["trips vs set", "paired flop strategy", "paired flop example", "pocket pairs", "gto solver", "minimum defense frequency"],
# title 길이 41
# seoTitle 길이 54
# desc 길이 145
# tldr 길이 370
```

### 구조 (EN content L113~L338 · L## = EN 파일 줄)
#### 헤딩
- L130 ## What conditions produced these numbers?
- L144 ## Trips vs a set — on a paired board it’s trips
- L159 ## How does the big blind play a low paired flop?
- L171 ## Why check when you hold more trips?
- L205 ## Equity is 47 against 53 — so why is EQR 84 against 115?
- L221 ## How strong are pocket pairs on 6-6-3?
- L245 ## How many quads and full houses are actually out there?
- L256 ## Why is the big bet more common than the small one?
- L278 ## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?
- L294 ## What changes at the table?
- L306 ## Check it yourself
- L314 ## FAQ

#### FAQ 6문항
- L316 **Q. Why is trips weaker than a set on a paired board?**
- L320 **Q. What do pocket pairs become on a 6-6-3 board?**
- L324 **Q. Why does the caller hold more trips than the raiser?**
- L328 **Q. What is minimum defense frequency?**
- L332 **Q. How often does the flop come paired?**
- L336 **Q. Do these numbers hold at my stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L120 :::stripe
- L125 :::
- L189 ![Range composition infographic comparing the big blind and button hand categories on a low paired board](/images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · category split — trips favor the caller, but two pair and ace-high favor the…
- L219 :::note[Every EQR in this series is the figure the solver displays. Dividing the rounded equity and EV yourself lands within a tenth of a point of it — that is rounding, not a discrepancy.]:::
- L292 :::note[MDF simplifies the opponent’s bet to a pure bluff. In practice the right frequency also depends on how well your hand realizes its equity on later streets, so use it as a starting point rather than a hard rule. The pot-odd…
- L301 :::readnext[Keep reading]
- L304 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L117 /en/blog/a-high-board-cbet ✅
- L117 /en/blog/k-high-board-cbet ✅
- L117 /en/solver ✅ 도구
- L146 /en/blog/holdem-hand-rankings ✅
- L169 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L169 /en/blog/monotone-board-strategy ✅
- L189 /images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · category split — trips favor the caller, but two pair and ace-high fav img
- L217 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L278 /en/blog/holdem-continuation-bet ✅
- L292 /en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp" ✅
- L292 /en/blog/holdem-3bet ✅
- L308 /en/solver ✅ 도구
- L310 /en/blog/3bet-pot-low-board ✅
- L310 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L318 /en/blog/holdem-hand-rankings ✅

### 키워드 (출처 L-G §1·§3-H·§3-L·§7-6)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| board pairé poker | `-` (프랑스 커뮤니티 정본 표기) | H2·tags·본문 |
| paired board poker | 10 | 태그 후보 |
| trips poker | 50 | H2 «Brelan sur un board pairé : trips ou set ?» |
| 🔴 set poker | 170 (**함정** — 칩 세트 쇼핑 SERP) | **제목·H2·태그에 «set poker»·«set» 단독 금지** · «set»은 괄호/«trips ou set» 짝으로만 |
| minimum defense frequency | 10 | 본문 «fréquence de défense minimale (MDF)» |

### PAA·자동완성 (축어)
- 포럼 제목(PA): **«Quelle est la probabilité de tomber sur un board pairé?»** → FAQ «How often does the flop come paired?» 자리에 대응
- 자동완성: board pairé poker → board poker · paired board poker · brelan ou set → brelan ou paire · ou couleur · ou carré · ou full («set»은 안 붙는다)
- PAA(일반): Quel est le plus gros coup au poker ? · Quel est l'ordre de parler au poker ? …(무관)

### 현지 SERP (L-G §3-H·§4 ⑫⑬·§7-6)
- 상위 = 전부 프랑스어(Kill Tilt 포럼 «Analyse d'un board pairé» · PA 포럼 · pokerqz.com/fr «Board pairé | Glossaire» · PokerStars.fr «Le C-Bet en 2020 – Quatrième Partie – Sizer Petit sur les Boards Statiques»).
- 통념: «Sur les boards statiques… petit sizing» · «bluffs avec un petit sizing de mise assez courants» → 우리 6-6-3은 **BB 체크 97 % · 큰 사이즈(2,0 %)가 작은 것(1,0 %)보다 많음** — 통념 반박 훅.
- 우리가 더 줄 것: ① trips 26 대 20콤보 계산 ② «같은 pairé인데 3,0 % vs 80,1 %»(⑬ 대비) ③ 확률 FAQ 수치(EN 값).

### 소유표 (계획 §3-B)
- 주인인 검색어: «board pairé»(표기) · «trips ou set» 짝 질문.
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «set poker»(함정).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Tu as plus de brelans (trips) et tu checkes quand même 97 % (59 car.)
seoTitle: Plus de brelans, et 97 % de check — board pairé 6-6-3 (53 car.)
desc: Sur 6-6-3, le caller a plus de brelans (trips) que le relanceur, 26 combos contre 20, et checke 97 % quand même. Ce qu'un board pairé récompense vraiment. (154 car.)
tldr: Sur le board pairé bas 6♣6♦3♥, la grosse blinde checke 97,0 %. Le plus étrange : elle a plus de brelans (trips) que le bouton, 26 combos de 6x contre 20. Elle checke quand même, parce que seulement 18,4 % de sa range ont mieux que la paire du board, et les 81,6 % restants sont un duel de cartes hautes que le bouton gagne. Ce qui gagne de la valeur, c'est toute paire servie au-dessus du 6 : TT a 76,0 % d'équité ici. (418 car.)
tags: ["trips ou set", "board pairé poker", "flop pairé", "paires servies", "fréquence de défense minimale", "paired board poker"]
#### H2 (EN → FR)
- L130 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L144 `## Trips vs a set — on a paired board it's trips` → `## Brelan sur un board pairé : trips ou set ?`
- L159 `## How does the big blind play a low paired flop?` → `## Comment la grosse blinde joue-t-elle un flop pairé bas ?`
- L171 `## Why check when you hold more trips?` → `## Pourquoi checker quand tu as plus de brelans ?`
- L205 `## Equity is 47 against 53 — so why is EQR 84 against 115?` → `## L'équité fait 47 contre 53, alors pourquoi l'EQR fait 84 contre 115 ?`
- L221 `## How strong are pocket pairs on 6-6-3?` → `## Que valent les paires servies sur 6-6-3 ?`
- L245 `## How many quads and full houses are actually out there?` → `## Combien de carrés et de fulls y a-t-il vraiment dans les ranges ?`
- L256 `## Why is the big bet more common than the small one?` → `## Pourquoi la grosse mise est-elle plus fréquente que la petite ?`
- L278 `## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?` → `## Faut-il se coucher avec hauteur As face à un [c-bet](/fr/blog/holdem-continuation-bet) ?`
- L294 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L306 `## Check it yourself` → `## Vérifie toi-même`
- L314 `## FAQ` → `## FAQ`
- Forme question : 10/10 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Why is trips weaker than a set on a paired board? → `Pourquoi les trips sont-ils plus faibles qu'un set sur un board pairé ?` (EN · couple trips/set autorisé)
2. What do pocket pairs become on a 6-6-3 board? → `Que deviennent les paires servies sur un board 6-6-3 ?` (EN)
3. Why does the caller hold more trips than the raiser? → `Pourquoi le caller a-t-il plus de brelans que le relanceur ?` (EN)
4. What is minimum defense frequency? → `C'est quoi la fréquence de défense minimale (MDF) ?` (volume « minimum defense frequency » 10)
5. How often does the flop come paired? → `Quelle est la probabilité d'avoir un board pairé au flop ?` (forum PA « Quelle est la probabilité de tomber sur un board pairé ? » — §7-6 ; valeur = EN L334, détection lane B)
6. Do these numbers hold at my stake? → `Ces chiffres tiennent-ils à ma limite ?` (EN)
#### Mots-clés absorbés
- board pairé poker (`-` · graphie communauté FR) + paired board poker (10) → seoTitle + H2 L144 + FAQ 5 + tags
- trips vs set (EN) → « trips ou set » tag + H2 L144
#### Notes
- 🔴 « set poker » (170) = SERP shopping → jamais « set » seul dans seoTitle/H2/tags ; « brelan » partout, « (trips) » en parenthèse, « trips ou set » en couple.
- Hook de différenciation (corps) : les glossaires FR disent « petit sizing sur board pairé » ; ici check 97 % et grosse mise > petite.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L113 · L115 · L117 · L121 · L122 · L123 · L124 · L128 · L132 · L136 · L137 · L138 · L139 · L140 · L148 · L150 · L161 · L165 · L166 · L167 · L169 · L173 · L175 · L179 · L180 · L181 · L182 · L183 · L189 · L193 · L194 · L195 · L196 · L197 · L198 · L199 · L201 · L211 · L213 · L215 · L227 · L228 · L229 · L230 · L231 · L232 · L233 · L237 · L239 · L249 · L250 · L254 · L260 · L262 · L263 · L264 · L265 · L266 · L268 · L272 · L274 · L276 · L280 · L282 · L284 · L288 · L296 · L297 · L298 · L299 · L310 · L318 · L322 · L326 · L330 · L334 · L338

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L336: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * ▶ 🔴 **서치가 뱅크를 뒤집었다** (2026-08-20 라쿠 English/US + 자동완성 + SERP)
- *   🔴 **`full house poker` 9,900은 조준 금지** — 족보 용어라 `holdem-hand-rankings` 소유다.
- *   🔴 **`quads poker` 6,600은 허수다** — 월별을 보면 2026-01에 **74,000** 한 번 튀고 나머지 달은
- * ═══ 적대 검수 4렌즈 (2026-08-20 · 병렬) — 되돌리지 마라 ═══
- * 🔴 **기계 게이트가 전부 통과시킨 뒤에 나온 결함들이다.** `check:gto` 🔴0 · `audit:hard` 🔴0인
- * ① 🔴 **「Only four combos beat trips」는 키커를 지운 유해 조언이었다.** 플랍 5장이라
- * ② 🔴 **「리드하는 핸드가 대부분 6x」는 자기 표가 반증했다.** 큰 벳 총량 9.6콤보 중
- * ③ 🔴 **EQR 100%를 «손익분기»로 오독했다.** EQR은 실현률이지 손익이 아니다 —
- * ④ 🔴 **갈림선은 6이 아니라 3이다.** 55(63.7%)·44(61.8%)는 6보다 낮은데도 제 몫을 다 실현한다.
- * ⑦ 🔴 **MDF 처방이 14%p 미달이었다.** 18.4 + A하이 26.3 + K하이 16.5 = **61.2% < 75.3%** →
- * ⑧ 🔴 **64.6%는 K하이 15.1%를 빠뜨린 값**이었다(정답 **79.7%** = 100−20.3).
- * 🔴 **①②③④⑦⑧은 한국어판에도 그대로 있었다 → 같은 커밋에서 KO도 고쳤다.** 개선은 양방향으로 흐른다.

### 하지 말 것 (EN 원문 계약 ⑥)
- 6♣6♦3♥에서 손에 6 한 장 = brelan(trips); 66은 carré(6♠6♥ 1콤보); 33은 full(3콤보). BB trips 26 대 BTN 20, 차이는 J6s/T6s/96s. 63은 두 레인지 모두 없음. 보드 페어를 넘는 핸드 18,4/20,3 %; TT는 double paire이며 EQ 76,0 %.
- 22: «두 번째 3이 턴이나 리버에» 떨어질 때 — **6-6-3-3-K에서 22는 보드 double paire를 플레이**(다른 스트리트에 2가 오면만 살아남음). 조건 없이 «3이 나오면»으로 일반화 금지.
- **키커 표 논거가 바뀌었다**: 옛 «J6s/T6s/96s는 BTN에 없어 trips를 안 막는다·K6/Q6는 콜링 레인지를 얇게 한다» 폐기 → 어느 6이든 BTN trips 20 중 **정확히 10**을 남기고 키커는 더 막지 않는다; **표는 계산된 믹스를 보여 줄 뿐 이 작은 차이의 원인을 분리하지 않는다**.
- 큰 벳 기여: six 26콤보가 약 9,6 중 **약 1,2(13,0 %, 1/8)** — «약 4분의 1»은 틀렸다; 나머지 대부분은 six 없는 핸드.
- six 리드 **6,8 %** — double paire·하이카드보다 높고 33 full 8,8 %·carré 9,6 %보다 낮다(«어느 클래스보다 높다» 금지).
- EQR 359,7 %(6♠6♥) 다음은 **⑩ BTN 88 346,0 %**, BB 쪽 2위가 ⑦ 6♥6♣ 318,9 %. MDF 75,3 %는 pure-bluff 가정의 기준이고 **실제 최적 방어가 그 위/아래인지는 여기서 모름**.
- EN 현행(4b353f92): «Every other single-raised flop…» → «On every unpaired flop in this series, three of a kind means a set» · Quick answer «do not fold just because you missed the board».
- 앱 ⑥ 설명문(«la part de bluffs augmente»)은 계산되지 않은 명제 — 옮기지 않는다.
- 확률 FAQ(EN «How often does the flop come paired?»)의 수치는 **EN 답의 값만**(L-G §7-6의 «16,9 % · 0,24 %»는 레인 B 검산용 참고 — EN에 없는 값이면 쓰지 않는다).

---

## ⑦ low-board-check-raise — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Neither Range Holds a Straight Here",
seoTitle: "Zero Straights Here — When to Check-Raise in Poker",
desc: "On 6-5-2 exactly one hand makes a straight and neither player holds it. So the big blind checks 96.8% — and saves all of its aggression for the check-raise.",
tldr: "On the low rainbow flop 6♠5♥2♦ the big blind checks 96.8% and leads just 3.2% — even though its 48.3% equity is the second highest of the seven spots where it defends. Only one hand makes a straight here, 4-3, and neither range holds it. Nobody has a top end, so nobody leads out of position. The action comes later: re-solve the same tree to see past the flop and the big blind check-raises a 1.8bb bet 14.9% of the time, mostly with draws.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "11 min",
emoji: "🌊",
image: "/images/gto-srp-low-rainbow-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a low rainbow flop, the big blind's 13x13 grid almost entirely green with a thin orange band of leads",
tags: ["check raise poker", "when to check raise", "wet board poker", "low rainbow flop", "gto solver", "gutshot"],
# title 길이 35
# seoTitle 길이 50
# desc 길이 156
# tldr 길이 441
```

### 구조 (EN content L125~L365 · L## = EN 파일 줄)
#### 헤딩
- L144 ## What conditions produced these numbers?
- L162 ## How often does the big blind check on 6-5-2?
- L173 ## Why does the big blind lead 3.2% here but 23.7% on 9-8-7?
- L197 ## How do the two ranges differ on 6-5-2?
- L223 ## Why is the equity 48.3% but the EQR only 84.3%?
- L239 ## When should you check-raise on this flop?
- L270 ## Which hands make up the check-raise?
- L309 ## Is 6-5-2 a wet board or a dry one?
- L319 ## What changes at the table?
- L331 ## Check it yourself
- L341 ## FAQ

#### FAQ 6문항
- L343 **Q. When should you check-raise in poker?**
- L347 **Q. Why doesn't the big blind bet first on a low board?**
- L351 **Q. Why is the strategy so different from 9-8-7 with almost the same equity?**
- L355 **Q. Which hands should you check-raise on 6-5-2?**
- L359 **Q. Is a check-raise allowed, and is it rude?**
- L363 **Q. Do these numbers hold at my stake?**

#### 표 9개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L134 :::stripe
- L139 :::
- L195 :::pull[One hand makes a straight on this board, and neither player was ever dealt it.]:::
- L201 ![Range composition on a low rainbow board, the big blind ahead on pairs and the button ahead on overpairs](/images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · range composition — the big blind ahead on pairs, the button ahead on…
- L243 :::note[⚠ **This section comes from a different solve.** The study spot published in the app is flop-only — it stops at the first decision and its action chips are not clickable, so the responses to a bet are not in it. To get the…
- L268 :::note[One honest caveat about that run: its **root** lead frequency came out at **2.0%** rather than the study spot's 3.2%, on 9.5 combos instead of 15.3. Everything else — the categories, the draws, equity, EV and EQR — matched…
- L326 :::readnext[Keep reading]
- L329 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L127 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L131 /en/solver ✅ 도구
- L187 /en/blog/monotone-board-strategy ✅
- L191 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L201 /images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · range composition — the big blind ahead on pairs, the button ahead on  img
- L235 /en/blog/a-high-board-cbet ✅
- L317 /en/blog/monotone-board-strategy ✅
- L317 /en/blog/holdem-continuation-bet ✅
- L333 /en/solver ✅ 도구
- L361 /en/blog/holdem-betting-actions ✅

### 키워드 (출처 L-G §1·§3-C·§7-1·§8 ⑤ · 계획 §3-B ⑤)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| **check raise poker** (= check raise · check-raise — 같은 수요) | **260** | 🔴 **이 글이 주인**(§3-B ⑤ · EN parity) — seoTitle 선두 · 첫 정의 H2 · tags |
| check raise definition · check raise poker definition | 10 · 10 | 정의 H2 직답 1문단(정의 깊이는 `/fr/glossary` «Check-raise»로 위임) |
| double check raise poker | `-` | — |
| 함정 🚫 | — | 자동완성의 클럽 브랜드(check raise ch · brisbane · dc poker) · «check raise poker strategy» 0 |

### PAA·자동완성 (축어)
- PAA(영어로 노출): What is a good check-raise percentage? · What is the raise rule in poker? · How to announce raise in poker? · How much is a raise in poker?
- 자동완성: check raise poker definition · double check raise · fold/call check raise · check vs raise · check raise sizing · flop · 프랑스어 질문형(«quand faire un check raise», «c'est quoi un check raise») = **결과 없음**
- 정의 축어(Club Poker): «Faire parole (check) dans l'idée de relancer (raise) une mise adverse.» · 동의어 «cr · Embuscade · c/r»

### 현지 SERP (L-G §3-C·§4 ①~④·§7-1)
- 1페이지: 브랜드 2 · **정의/용어집 4**(Wikipedia EN · Club Poker 2018 · PokerPro · Eurosport 2008) · **전략 1**(pokerstars.fr «Check-Raise au Poker : Stratégies de Valorisation et de Bluff» 2025 — 2위) · 포럼 1.
- PokerStars.fr 약점: 수치 **출처 없음 + 자기모순**(본문 «8 % et 12 %» vs FAQ «8 % à 15 %») · «9-8-7 = check-raise»라 함.
- 우리가 더 줄 것: ① 6-5-2 체크레이즈 14,9 %(별도 재솔브 · 노드 표) ② 9-8-7(④)은 리드 23,7 % → «같은 낮은 보드라도 다르다» ③ 레이즈 구성(set 9 · 65s · 드로우)과 사이즈 산술(7,3bb = raise-to · 60 % 팟).
- 처방: H2 «When should you check-raise on this flop?» → «Quand faire un check-raise ? — la réponse du solver sur 6-5-2» 계열 · 정의 H2 «Check-raise au poker : c'est quoi ?» 1개 추가(40~75단어 · «embuscade» 병기) · FAQ «Quel est un bon pourcentage de check-raise ?»(답 = 이 스팟 14,9 % + 일반 «8–12 %» 같은 수치는 출처 없는 경험칙이라는 한 줄 · **PokerStars 이름은 쓰지 않는다**) · EN «Is a check-raise allowed, and is it rude?» 유지(1문장 · L-A 규칙 축과 겹치지 않음).

### 소유표 (계획 §3-B ⑤)
- 주인인 검색어: **check raise poker 260** — seoTitle·첫 정의 H2. 정의 깊이는 `/fr/glossary` «Check-raise» 항목으로 앵커(«lexique du poker»). fr check-raise 필라가 생기면 그날 반납.
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫).
- 위임 앵커: c-bet 일반론 → holdem-continuation-bet(EN 링크 자리) · 정의 깊이 → `/fr/glossary`(앵커 «lexique du poker» · 🔴 EN에 없는 링크 1개 추가 = 현지 추가 — 진행 파일 «링크 편차»에 «추가 1» 기록).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Aucune des deux ranges n'a de quinte ici (40 car.)
seoTitle: Aucune quinte ici — quand faire un check-raise au poker (55 car.)
desc: Sur 6-5-2, une seule main fait quinte et aucun des deux joueurs ne l'a. Alors la grosse blinde checke 96,8 % et garde toute son agression pour le check-raise. (158 car.)
tldr: Sur le flop bas rainbow 6♠5♥2♦, la grosse blinde checke 96,8 % et lead seulement 3,2 %, alors que ses 48,3 % d'équité sont la deuxième valeur la plus haute des sept spots où elle défend. Une seule main fait quinte ici, 4-3, et aucune des deux ranges ne l'a. Personne n'a le haut du board, donc personne ne lead hors de position. L'action vient plus tard : résous le même arbre au-delà du flop et la grosse blinde check-raise une mise de 1,8bb 14,9 % du temps, surtout avec des tirages. (485 car.)
tags: ["check raise poker", "quand faire un check-raise", "check raise definition", "board humide poker", "flop bas rainbow", "gutshot"]
#### H2 (EN → FR)
- + (ajout) `## Check-raise au poker : c'est quoi ?` — placé avant L144 (1 paragraphe, 40–75 mots ; « embuscade » cité une fois comme synonyme FR ; profondeur de définition déléguée à /fr/glossary « Check-raise » — §7-1, §3-B ⑤)
- L144 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L162 `## How often does the big blind check on 6-5-2?` → `## À quelle fréquence la grosse blinde checke-t-elle sur 6-5-2 ?`
- L173 `## Why does the big blind lead 3.2% here but 23.7% on 9-8-7?` → `## Pourquoi la grosse blinde lead 3,2 % ici mais 23,7 % sur 9-8-7 ?`
- L197 `## How do the two ranges differ on 6-5-2?` → `## En quoi les deux ranges diffèrent-elles sur 6-5-2 ?`
- L223 `## Why is the equity 48.3% but the EQR only 84.3%?` → `## Pourquoi l'équité est-elle de 48,3 % mais l'EQR de seulement 84,3 % ?`
- L239 `## When should you check-raise on this flop?` → `## Quand faire un check-raise ? La réponse du solver sur 6-5-2`
- L270 `## Which hands make up the check-raise?` → `## Quelles mains composent le check-raise ?`
- L309 `## Is 6-5-2 a wet board or a dry one?` → `## 6-5-2, board humide ou board sec ?`
- L319 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L331 `## Check it yourself` → `## Vérifie toi-même`
- L341 `## FAQ` → `## FAQ`
- Forme question : 10/10 H2 de contenu (100 %) — l'ajout compris
#### FAQ (EN → FR)
1. When should you check-raise in poker? → `Quand faut-il check-raise au poker ?` (EN · seule formulation question FR, l'autocomplétion n'en a aucune)
2. Why doesn't the big blind bet first on a low board? → `Pourquoi la grosse blinde ne mise-t-elle pas en premier sur un board bas ?` (EN)
3. Why is the strategy so different from 9-8-7 with almost the same equity? → `Pourquoi la stratégie est-elle si différente de 9-8-7 avec presque la même équité ?` (EN)
4. Which hands should you check-raise on 6-5-2? → `Quelles mains check-raise sur 6-5-2 ?` (EN)
5. Is a check-raise allowed, and is it rude? → `Le check-raise est-il autorisé, et est-ce impoli ?` (EN · 1 phrase, lien holdem-betting-actions)
6. Do these numbers hold at my stake? → `Ces chiffres tiennent-ils à ma limite ?` (EN)
7. + (ajout) `Quel est un bon pourcentage de check-raise ?` (PAA, affichée en anglais « What is a good check-raise percentage? » — §7-1) — réponse = uniquement la valeur EN 14,9 % de ce spot (mise 1,8bb, surtout des tirages) + une phrase : un pourcentage « universel » n'existe pas, ça dépend du board. 🔴 Ne pas citer de chiffres externes (8–12 %) ni de site.
#### Mots-clés absorbés
- check raise poker / check raise (260, une seule demande) → seoTitle + H2 ajout + FAQ 1/7 + tags (§3-B ⑤ : EN parity, à rendre si un pilier check-raise FR naît)
- check raise definition (10) → tag + H2 ajout
- wet board poker (50 · partagé avec ⑨) → tag « board humide poker » + H2 L309
#### Notes
- Accroche EN « Zero straights » gardée (« Aucune quinte ici »). « check raise » seul (260) n'est jamais isolé dans le titre (pollution « cheek riser » notée côté EN) → toujours « check-raise au poker ».
- 🔴 Corps : deux solves distincts (3,2 % étude vs 2,0 % racine du re-solve) — garder la note EN L243/L268 telle quelle.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L125 · L127 · L129 · L135 · L136 · L137 · L138 · L146 · L150 · L151 · L152 · L153 · L154 · L158 · L160 · L164 · L168 · L169 · L171 · L173 · L179 · L180 · L181 · L182 · L183 · L184 · L185 · L187 · L189 · L191 · L201 · L205 · L206 · L207 · L208 · L209 · L210 · L211 · L212 · L213 · L214 · L216 · L220 · L221 · L223 · L229 · L231 · L233 · L235 · L241 · L243 · L249 · L250 · L254 · L256 · L257 · L258 · L260 · L264 · L266 · L268 · L278 · L279 · L280 · L281 · L282 · L283 · L284 · L289 · L294 · L296 · L302 · L303 · L304 · L305 · L307 · L315 · L317 · L321 · L322 · L323 · L324 · L327 · L345 · L349 · L353 · L361 · L365

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L345: A. When your range has hands that gain from a bigger pot and enough draws to balance them. On 6♠5♥2♦ that is 14.9% of the big blind's range …
- L363: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴🔴 **이 편은 두 개의 서로 다른 솔브를 쓴다. 절대 섞지 마라.**
- *   🔴 **②의 루트 리드 빈도는 2.0%(9.5콤보)로 ①의 3.2%와 다르다.** Hands·Draws·EQ·EV·EQR은 동일.
- * ▶ 🔴 **서치가 뱅크 §3-⑦을 다시 뒤집었다** (2026-08-20 라쿠 English/US 실측)
- *     셋이 월별까지 동일한 **한 덩어리**다. 더하지 마라)
- *   🔴 **`check raise` 단독 260을 제목에 쓰면 안 된다** — 소총 치크라이저(cheek riser) ·
- *   🔴 **`low board` · `low flop`은 검색이 아예 없다** — `low board poker` 데이터 없음,
- *   🔴 **라쿠 `suggest-keywords`의 metrics는 일본 DB다** — `check raise`에 880을 붙여 주지만
- *   🔴 단 **「체크레이즈가 합법인가」류는 `holdem-betting-actions`가 이미 축어로 답한다** —
- *   🔴 **「Straight」 행이 아예 없다** — 0%인 등급은 화면에 안 뜬다. 「데이터가 없다」로 쓰지 마라.
- *   · 🔴 **레이즈 7.3bb는 «팟 사이즈 레이즈»가 아니다** — 초판에서 내가 ✓로 통과시킨 오류다.

### 하지 말 것 (EN 원문 계약 ⑦ + §5 두 솔브 계약 — 전부 필수)
- **A. 앱 사전 계산 예제**: 화면 = Spots d'étude의 Voir les résultats. **플랍 첫 결정만 노출**하고 액션 칩을 눌러 후속 노드로 갈 수 없다. Root: BB check **96,8 % / 471,7콤보**, bet 1,8bb **3,2 % / 15,3콤보**, total 487. 이 출처에는 BTN 벳 뒤 BB의 check-raise 결과가 없다.
- **B. 2026-08-20 별도 재솔브**: flop bet 33 · raise 60 · pot 55 · stack 975(당시 내부 0,1bb 단위) · 190 iterations · exploitability = EN 현행 문장 «0.16 in the engine's internal units (tenths of a big blind) — 0.016bb, or 0.29% of the 5.5bb pot» → fr «0,16 en unités internes du moteur (dixièmes de big blind) — 0,016bb, soit 0,29 % du pot de 5,5bb»(«0,16 = 0,29 %»처럼 단위 없는 등식 금지).
- 노드: 재솔브 BB root Check 98,0 % (477,5) · Bet 1,8bb 2,0 % (9,5) / BB check 후 BTN Bet 1,8bb 63,0 % (316,5) · Check back 37,0 % (186,5) / BTN bet 1,8bb 후 BB Raise **to** 7,3bb 14,9 % (69,7) · Call 65,6 % (314,6) · Fold 19,5 % (93,2). 🔴 이 중 EN 본문에 없는 «98,0 %»·«62,9 %»는 본문 문장으로 추가하지 않는다(EN이 말하는 것만: 레이즈 노드 14,6/14,9 불일치 · root lead 2,0 %(9,5콤보) · BTN 63,0 %(316,5) · 4,06).
- 1. BTN/BB 후속표 **앞에** 다른 솔브라는 note가 있어야 한다. Root의 3,2/15,3을 재솔브의 2,0/9,5와 한 표로 합치지 않는다.
- 2. **표시 빈도와 콤보 역산이 다르다**: EN «69.7 ÷ 477.5 = 14.6%», 표시 14,9 % — 설명을 지우거나 표를 역산값으로 고치지 않는다.
- 3. 7,3bb는 **raise-to 총액**. 60 % 팟 레이즈이며 팟 사이즈 레이즈가 아니다. 콜 뒤 pot = 5,5 + 1,8 + 1,8 = 9,1; 팟 사이즈 raise-to = 10,9; 실제 (7,3 − 1,8) ÷ 9,1 ≈ 60 %. EN의 «5.5 + 1.8 = 7.3은 맞지만 거기서 팟 사이즈를 끌어내면 틀린다» 구조 보존. «a shade over four times the bet (7.3 ÷ 1.8 = 4.06)» 보존.
- 4. root lead 차이(3,2 vs 2,0)는 거의 무차별인 낮은-EV 액션의 수렴 차이 — 다른 지표가 소수점까지 같다는 설명도 보존.
- 5. set 66/55/22의 9콤보와 65s의 **6♦5♦·6♣5♣ 두 콤보**는 100 % raise. 64s는 세 중 **두 콤보**가 100 %. 98s EQ 35,8 %/raise 99 %+, 87s EQ 46,2 %/raise 80–83 %, J4s/Q4s 67–90 %, 54s 74–75 %. 거샷 행 ≈ 90콤보 > 레이즈 총 69,7콤보 — «거샷 그룹 전체가 레이즈»로 쓰지 않는다(EN 현행 «every hand at the top of this list holds a straight draw»).
- 6. continuing 80,5 %와 MDF 75,3 %는 서로 다른 값. ⑥·⑩의 미측정 후속 노드에 이 14,9 %를 옮기지 않는다.
- 7. 재현 CTA도 둘로: 사전 결과 열기(Spots d'étude → **Board bas rainbow** → [⚡ Voir les résultats]) → root/range 확인; check-raise는 **« Calcule ce spot toi-même »로 직접 계산 후 Check → Bet**. 사전 결과에서 칩을 누르면 되는 것처럼 쓰지 않는다.
- 4-3만 quinte를 만들지만 두 레인지에 없음. 87s만 **이 레인지에 들어 있는** OESD이지 보드가 허용하는 유일한 OESD가 아님(74도 OESD, 84는 double gutshot). 상위 raise 목록은 약 30/69,7콤보이며 전체 목록이 아님.
- FAQ: 체크레이즈는 «거의 모든 카지노·표준 온라인에서 허용, 사설 홈게임만 자체 규칙 가능» — «partout légal»로 되돌리지 않는다; «Nobody»가 아니라 «Few games».
- 앱 ⑦ 설명문(«Suis la barre d'actions du haut après une mise»)은 조작 지시가 틀렸다 — 옮기지 않는다.

---

## ⑧ 3bet-pot-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Nobody Checks This Flop",
seoTitle: "Nobody Checks This Flop — What Poker SPR 4 Really Does",
desc: "In this 3-bet pot every one of the 63 combos bets. Not because the range is strong, but because the caller has no pocket aces or kings left.",
tldr: "On A♦K♠2♥ in a 3-bet pot the big blind bets its whole range: checking rounds to 0.0%, and no combo out of 63 checks even 0.1% of the time. In the seven earlier spots its default was to check, between 76.2% and 99.9% of the time. What flipped is mainly the preflop action: the big blind three-bet instead of calling, so it owns the top of this flop while the button four-bet its pocket aces and kings away. And with an SPR of 4.0 there is no later street to defer to.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "12 min",
emoji: "🔥",
image: "/images/gto-3bp-ace-king-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for an ace-high 3-bet pot, the big blind's entire 13x13 grid colored for betting with check showing 0.0%",
tags: ["poker spr", "what is spr in poker", "effective stack poker", "spr poker meaning", "spr meaning poker", "gto solver"],
# title 길이 23
# seoTitle 길이 54
# desc 길이 140
# tldr 길이 466
```

### 구조 (EN content L110~L299 · L## = EN 파일 줄)
#### 헤딩
- L127 ## What conditions produced these numbers?
- L145 ## Is the check frequency really 0%?
- L161 ## Why doesn't a single combo check?
- L184 ## What is SPR in poker?
- L203 ## Why is the smaller size used more often?
- L215 ## What does the button actually have?
- L225 ## How does the button respond to a third-pot c-bet?
- L237 ## Why is the EQR 109.6% when the big blind is out of position?
- L253 ## What changes at the table?
- L267 ## Check it yourself
- L275 ## FAQ

#### FAQ 6문항
- L277 **Q. What does SPR mean in poker?**
- L281 **Q. How many bets can you make at an SPR of 4?**
- L285 **Q. Should the three-bettor always c-bet?**
- L289 **Q. Why does the button have no pocket aces or kings?**
- L293 **Q. Why is the small size used more than the big one?**
- L297 **Q. Do these numbers hold at my stake?**

#### 표 5개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L117 :::stripe
- L122 :::
- L182 :::note[⚠ This is the mirror image of the [ace-high flop in a single-raised pot](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). There the big blind was the **capped** one — no AA, AK or AQ, because it wou…
- L219 ![Range composition on an ace-high three-bet pot, the big blind holding every set combo while the button's range is bunched in middle pairs](/images/gto-3bp-ace-king-ranges-en.webp "A-K-2 three-bet pot · the big blind keeps the to…
- L235 :::note[⚠ MDF simplifies the bet to a pure bluff. It only means something when the opponent actually has bluffs — where the betting range is a pair or better all the way down, as it is here, the pure-bluff assumption stands on wea…
- L249 :::pull[Position magnifies an edge. It does not manufacture one.]:::
- L262 :::readnext[Keep reading]
- L265 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L110 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L114 /en/solver ✅ 도구
- L176 /en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp" ✅
- L180 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L182 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L209 /en/blog/3bet-pot-low-board ✅
- L219 /images/gto-3bp-ace-king-ranges-en.webp "A-K-2 three-bet pot · the big blind keeps the top of the board while the button img
- L251 /en/blog/holdem-position-play ✅
- L260 /en/blog/3bet-pot-low-board ✅
- L260 /en/blog/holdem-3bet ✅
- L269 /en/solver ✅ 도구
- L295 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅

### 키워드 (출처 L-G §1·§3-E·§7-3·§8 ⑥ · 계획 §3-B ⑥)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| **spr poker** | **210** (12개월 90~320 · 평시 ~140) | 🔴 **이 글이 주인**(§3-B ⑥ · EN parity) — seoTitle · H2 «Le SPR au poker, c'est quoi ?» · tags |
| spr poker c'est quoi · c'est quoi le spr au poker · le spr au poker · spr qu est ce que c est | `-` (자동완성) | 정의 H2·FAQ 표현 |
| 3bet pot · cbet 3bet pot | 10 · `-` | 본문 «pot 3-bet» |
| 함정 🚫 | — | «spr poker calculator/chart»(자동완성) — 조준 안 함(계산기 헤드 = «calculateur poker»만) |

### PAA·자동완성 (축어)
- 자동완성: spr poker definition · **spr poker c'est quoi** · calculator · explained · formula · chart · **c est quoi le spr au poker** · spr def poker · **le spr au poker** · **spr qu est ce que c est** · spr c quoi
- PAA: 무관(Comment puis-je bien miser au poker ? · Que signifie MTT au poker ? …)
- 3bet pot 자동완성: 3bet pot oop · 3bet pot ip · cbet in 3bet pots

### 현지 SERP (L-G §3-E·§3-I)
- 1페이지 = 영어·독·스·포 정의 글 + toolsofpoker.com/fr 도구 + 프랑스어 영상 2(Tuto-Poker «Le SPR» · Stop MyBroke «Le Stack to Pot Ratio - SPR»). **프랑스어 텍스트 SPR 글 0.**
- 프랑스어 커뮤니티 표기 = «pots 3bet» / «pot 3-bet»(앱 «Pot 3-bet»과 일치).
- 우리가 더 줄 것: ① 정의 + 공식(stack effectif ÷ pot) + 이 스팟 값(앱 «Pot 22,5bb · Stack 89bb» → 89 ÷ 22,5 ≈ 3,96 → «SPR ≈ 4» — EN 값 그대로) ② «SPR 낮음 = 작은 벳»이 아니라는 반례(⑨ 98,4 % · ⑩ 97,8 %) ③ 2/3팟 산술 FAQ.

### 소유표 (계획 §3-B ⑥)
- 주인인 검색어: **spr poker 210** — seoTitle·정의 H2. `/fr/glossary` «SPR» 항목은 짧은 정의 → 글이 «정의 + 계산 예시» 깊이(glossary → 글 앵커는 배포 회차 판정).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «calculateur»(⑧).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Personne ne checke ce flop (26 car.)
seoTitle: Personne ne checke ce flop — SPR poker, l'effet d'un SPR 4 (58 car.)
desc: Dans ce pot 3-bet, les 63 combos misent, tous. Pas parce que la range est forte : le caller n'a plus ni AA ni KK, et un SPR de 4 ne laisse rien à reporter. (155 car.)
tldr: Sur A♦K♠2♥ dans un pot 3-bet, la grosse blinde mise toute sa range : le check arrondit à 0,0 %, et aucun des 63 combos ne checke ne serait-ce que 0,1 % du temps. Dans les sept spots précédents, son réflexe était de checker, entre 76,2 % et 99,9 % du temps. Ce qui a basculé, c'est surtout l'action préflop : la grosse blinde a 3-bet au lieu de suivre, donc elle possède le haut de ce flop, pendant que le bouton a 4-bet ses paires d'as et de rois hors de sa range. Et avec un SPR de 4,0, il n'y a plus de street ultérieure à qui reporter la décision. (550 car.)
tags: ["spr poker", "spr poker c'est quoi", "stack effectif poker", "spr definition poker", "pot 3-bet", "c-bet pot 3-bet"]
#### H2 (EN → FR)
- L127 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L145 `## Is the check frequency really 0%?` → `## La fréquence de check est-elle vraiment de 0 % ?`
- L161 `## Why doesn't a single combo check?` → `## Pourquoi pas un seul combo ne checke-t-il ?`
- L184 `## What is SPR in poker?` → `## Le SPR au poker, c'est quoi ?` (définition + formule stack effectif ÷ pot + valeur du spot ; étiquette app « Pot 3-bet — BB 3-bet, BTN paye (SPR bas) » · Pot 22,5bb · Stack 89bb — calcul vérifié lane B)
- L203 `## Why is the smaller size used more often?` → `## Pourquoi le petit sizing est-il utilisé plus souvent ?`
- L215 `## What does the button actually have?` → `## Qu'a vraiment le bouton en main ?`
- L225 `## How does the button respond to a third-pot c-bet?` → `## Comment le bouton répond-il à un c-bet d'un tiers du pot ?`
- L237 `## Why is the EQR 109.6% when the big blind is out of position?` → `## Pourquoi l'EQR atteint-il 109,6 % alors que la grosse blinde est hors de position ?`
- L253 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L267 `## Check it yourself` → `## Vérifie toi-même`
- L275 `## FAQ` → `## FAQ`
- Forme question : 9/9 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. What does SPR mean in poker? → `Que veut dire SPR au poker ?` (autocomplétion « spr poker c'est quoi » · « c'est quoi le spr au poker » — §7-3)
2. How many bets can you make at an SPR of 4? → `Combien de mises peut-on faire avec un SPR de 4 ?` (EN)
3. Should the three-bettor always c-bet? → `Le 3-betteur doit-il toujours c-bet ?` (EN · « 3-betteur » = verbatim app)
4. Why does the button have no pocket aces or kings? → `Pourquoi le bouton n'a-t-il ni paire d'as ni paire de rois ?` (EN)
5. Why is the small size used more than the big one? → `Pourquoi le petit sizing est-il plus utilisé que le gros ?` (EN)
6. Do these numbers hold at my stake? → `Ces chiffres tiennent-ils à ma limite ?` (EN)
#### Mots-clés absorbés
- spr poker (210) + spr poker c'est quoi / c est quoi le spr au poker / le spr au poker (autocomplétion) → seoTitle + H2 L184 + FAQ 1 + tags (§3-B ⑥ : EN parity)
- pot 3-bet (étiquette app · « 3bet pot » 10) → tags
- 🚫 « spr poker calculator / chart » non visés (pas de SPR dans /fr/calculator)
#### Notes
- « SPR poker » juxtaposé dans le seoTitle = la tête réelle (210) ; le H2 L184 reprend la forme « Le SPR au poker, c'est quoi ? » (autocomplétion). Spot app : `Board A-high, avantage du 3-betteur`.
- 🔴 Corps : ne pas réintroduire le backdoor couleur 15,9 % (interdit en EN).

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L110 · L112 · L114 · L119 · L120 · L121 · L125 · L133 · L136 · L137 · L139 · L143 · L145 · L147 · L151 · L152 · L153 · L155 · L157 · L159 · L167 · L168 · L169 · L170 · L171 · L172 · L174 · L178 · L180 · L182 · L186 · L190 · L191 · L193 · L195 · L196 · L197 · L199 · L201 · L205 · L209 · L211 · L213 · L217 · L221 · L223 · L229 · L231 · L233 · L237 · L239 · L243 · L245 · L247 · L251 · L257 · L258 · L260 · L264 · L271 · L279 · L283 · L287 · L295

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L297: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 아래 넷은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
- *   🔴 **`poker spr` = `spr poker` = `spr in poker`는 24개월 배열이 완전히 같은 «한 클러스터»다.
- *      총합은 1,440이 아니라 480이다. 더하지 마라.**
- *   🔴 **`what is spr` 720은 포커가 아니다** — 자동완성이 spring water·sprinting·spreadsheet·
- *   🔴 **`stack to pot ratio` 50은 12개월 −59.3%로 반토막**이다. 풀네임을 제목에 넣을 근거가 없다 →
- *   🔴 **`3bet pot` 축은 US 볼륨 10이 상한**이다(17개 변형 중 나머지 전부 0).
- *      **볼륨 0 + 강자 정면 → 제목 조준 금지.** 본문 H2로만 쓴다.
- *   ⚠ `spr poker calculator` · `spr poker chart` · `stack to pot ratio calculator`는
- *   🔴 **차별화 필수 지점** — ①편(`a-high-board-cbet`)이 이미 A하이 보드에서
- *   🔴 **2026-08-21 정정 — `polarized range poker` 태그를 ⑩(`3bet-pot-low-board`)에 넘겼다. 되돌리지 마라.**
- *   🔴 **백도어 플러시 15.9%는 쓰지 않는다** — 콤보 검산이 10 대 11로 갈렸고 KO 본문도 인용하지 않는다.

### 하지 말 것 (EN 원문 계약 ⑧)
- BB 63콤보 전부 paire 이상. Check는 **화면값 0,0 %/0,0콤보**이고 원시 출력에는 41콤보에 잔여(최대 K♥K♦ 0,09 %, 합 0,01콤보 미만) — «솔버 노이즈, 0으로 읽는다». «단 한 콤보도 체크 안 함(완전 0)»·«à chaque fois»로 되돌리지 않는다(«chaque combo à plus de 99,9 %»).
- 작은 bet 57,8 %는 같은 SPR 4의 ⑨/⑩과 대비. **낮은 SPR 자체가 작은 사이징의 이유가 아님**(EN 현행 «Because of the shape of the range, not the depth of the stack»).
- FAQ 산술: 플랍·턴 2/3팟 = 14,9 → 34,5bb, **남은 39,6bb는 리버 팟의 약 1/3** → 세 번째 벳이 89bb 잔여 전부 — turn·river 계산값 아님.
- BTN 130콤보는 «이론적으로 옳은 방어»가 아니라 **이 솔브에 넣은 프리플랍 설정**.
- MDF 전제는 «성립하지 않는다»가 아니라 **«기반이 약하다»**(EN 현행 «stands on weak ground»); 작은 사이즈가 60콤보 미들 페어를 «가격에 맞게 한다»는 것도 **의심스럽다** — BB 전체 레인지 상대로 19,8 %를 넘는 건 QQ·JJ뿐, 99–33은 7,6–9,2 %. BTN 대응은 레인지 해석이며 no post-check node.
- 앱 ⑧ 설명문(«À SPR bas, les petites mises mettent la pression…»)은 RP-03 폐기 인과 — 옮기지 않는다.

---

## ⑨ 3bet-pot-bet-sizing — EN updated 2026-09-26 · masterUpdated = "2026-09-26"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two Sizes Offered, One Size Used",
seoTitle: "98.4% Bet One Size — Poker Bet Sizing on a Wet Board",
desc: "The solver had two bet sizes on this two-tone flop and put 98.4% of its range into one. Two thirds of the pot out-prices 38 of 40 draws on one-card odds.",
tldr: "On Q♥T♥7♠ in a 3-bet pot the big blind bets two thirds of the pot (14.9bb) 98.4% of the time. The small size gets 0.7% and checking 0.8% — together barely one combo out of 73. One board earlier, on A♦K♠2♥, the same range split its sizing 57.8/42.2. What collapsed the split is not strength but price. On a board this wet the size is decided by what it costs the caller to keep drawing, and the small bet does not charge enough.",
category: "strategy",
date: "2026-08-20",
updated: "2026-09-26",
keepImagesInBody: true,
readTime: "12 min",
emoji: "💧",
image: "/images/gto-3bp-dynamic-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on a Q-T-7 two-tone three-bet pot, the big blind's 13x13 grid almost entirely one color with the two-thirds size reading 98.4%",
tags: ["poker bet sizing", "wet board poker", "geometric bet sizing", "overbet poker", "how much to bet in poker", "gto solver"],
# title 길이 32
# seoTitle 길이 52
# desc 길이 153
# tldr 길이 427
```

### 구조 (EN content L141~L371 · L## = EN 파일 줄)
#### 헤딩
- L158 ## What conditions produced these numbers?
- L174 ## Does the range really use only one size?
- L195 ## Why does a wet board want one big size?
- L241 ## What is geometric bet sizing?
- L259 ## Why do hands with no pair bet here?
- L273 ## What does the button actually have?
- L299 ## Why is the EQR 117.8% when equity is 58.3%?
- L317 ## What changes at the table?
- L333 ## Check it yourself
- L343 ## FAQ

#### FAQ 7문항
- L345 **Q. How much should you bet in poker?**
- L349 **Q. Why bet big on a wet board?**
- L353 **Q. What is geometric bet sizing?**
- L357 **Q. Should I use an overbet instead?**
- L361 **Q. Can you bet A-K with no pair here?**
- L365 **Q. What if my opponent calls draws regardless of price?**
- L369 **Q. Do these numbers transfer to my game?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L148 :::stripe
- L153 :::
- L231 :::note[⚠ MDF treats the bet as a pure bluff holding no equity of its own. Most of what bets here is not that — 24.7% of the big blind's range is a gutshot, and a gutshot that gives up still had real equity when it fired. Treat 60…
- L237 :::pull[Your hand does not choose the size. What your opponent can afford to call does.]:::
- L239 :::note[⚠ Same texture, opposite conclusion — and both are right, because the seats are swapped. In a **single-raised pot** the top of a two-tone broadway flop belongs to the preflop raiser, and the big blind, who only called, che…
- L277 ![Range composition on a Q-T-7 two-tone three-bet pot, with overpairs only on the big blind's side and second pair only on the button's](/images/gto-3bp-dynamic-ranges-en.webp "Q-T-7 three-bet pot · the overpair row belongs to the…
- L315 :::note[Every EQR in this series is quoted as the solver displays it. Dividing the rounded equity and EV yourself can land a decimal off — that is rounding, not disagreement.]:::
- L328 :::readnext[Keep reading]
- L331 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L141 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L145 /en/solver ✅ 도구
- L210 /en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp" ✅
- L235 /en/blog/holdem-drawing-odds ✅
- L235 /en/blog/holdem-pot-odds ✅
- L239 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L239 /en/blog/holdem-continuation-bet ✅
- L277 /images/gto-3bp-dynamic-ranges-en.webp "Q-T-7 three-bet pot · the overpair row belongs to the big blind, the second-pai img
- L293 /en/blog/paired-board-strategy ✅
- L313 /en/blog/holdem-position-play ✅
- L322 /en/blog/3bet-pot-low-board ✅
- L335 /en/solver ✅ 도구
- L341 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L351 /en/blog/3bet-pot-low-board ✅

### 키워드 (출처 L-G §1·§3-F·§7-4 · fr-core-volumes)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| **sizing poker** | **70** (0-1) | seoTitle 후보 · FAQ «C'est quoi le sizing ?» · tags |
| overbet poker | 30 | FAQ «overbet» 문항(차용어 유지) |
| bet sizing poker · geometric bet sizing poker | 10 · 10 | FAQ «Qu'est-ce que le sizing géométrique ?» |
| comment faire les sizing au poker · que veut dire sizing au poker · sizing au poker | `-` (자동완성) | FAQ 표현 |
| 함정 🚫 | — | «taille de mise»·«mise géométrique» = 0 → 제목에 쓰지 않는다 · 프리플랍 사이징(open·3bet)은 L-D 몫 |

### PAA·자동완성 (축어)
- PAA: **C'est quoi le sizing ?** · Que signifie "cut off" au poker ? · Quand augmenter les blinds ? · Comment calculer les outs au poker ?
- 영상 제목: ShiShi «Comment choisir son sizing au Poker ?» · Kill Tilt «Trouver le SIZING PARFAIT pour bluff» · ALL IN «Quel SIZING choisir en VALUE ?»
- 자동완성: sizing poker definition · **comment faire les sizing au poker** · **que veut dire sizing au poker** · geometric bet sizing poker · mise géométrique poker

### 현지 SERP (L-G §3-F)
- sizing poker: 영상팩 + pokerstars.fr «Tells du Curseur de Mise» · 팟캐스트 · 포럼 — **사이징 전략 글 없음**. bet sizing poker = 전부 영어.
- 우리가 더 줄 것: ① 98,4 % 큰 사이즈(2/3팟) 계산값 ② 드로우 «한 장 odds»와 «두 장 에퀴티» 구분 ③ 기하 사이징 산술.

### 소유표 (계획 §3-B)
- 주인인 검색어: sizing poker 70(«pot 3-bet 플랍 · 보드 humide» 한정).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · 프리플랍 «sizing 3-bet / open»(L-D `holdem-3bet`).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Deux sizings proposés, un seul utilisé (38 car.)
seoTitle: 98,4 % sur un seul sizing — sizing poker sur board humide (57 car.)
desc: Deux sizings sur ce flop bicolore, et le solver met 98,4 % de sa range dans un seul. Deux tiers du pot, c'est trop cher pour 38 des 40 tirages à une carte. (155 car.)
tldr: Sur Q♥10♥7♠ dans un pot 3-bet, la grosse blinde mise deux tiers du pot (14,9bb) 98,4 % du temps. Le petit sizing reçoit 0,7 % et le check 0,8 %, à peine un combo sur 73 à eux deux. Un board plus tôt, sur A♦K♠2♥, la même range répartissait son sizing 57,8/42,2. Ce qui a écrasé la répartition, ce n'est pas la force mais le prix. Sur un board aussi humide, le sizing se décide d'après ce que ça coûte au caller de continuer à tirer, et la petite mise ne fait pas payer assez. (474 car.)
tags: ["sizing poker", "bet sizing poker", "board humide poker", "sizing géométrique", "overbet poker", "combien miser au poker", "pot 3-bet"]
#### H2 (EN → FR)
- L158 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L174 `## Does the range really use only one size?` → `## La range n'utilise-t-elle vraiment qu'un seul sizing ?`
- L195 `## Why does a wet board want one big size?` → `## Pourquoi un board humide réclame-t-il un seul gros sizing ?`
- L241 `## What is geometric bet sizing?` → `## Le sizing géométrique, c'est quoi ?`
- L259 `## Why do hands with no pair bet here?` → `## Pourquoi des mains sans paire misent-elles ici ?`
- L273 `## What does the button actually have?` → `## Qu'a vraiment le bouton en main ?`
- L299 `## Why is the EQR 117.8% when equity is 58.3%?` → `## Pourquoi l'EQR fait 117,8 % quand l'équité fait 58,3 % ?`
- L317 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L333 `## Check it yourself` → `## Vérifie toi-même`
- L343 `## FAQ` → `## FAQ`
- Forme question : 8/8 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. How much should you bet in poker? → `C'est quoi le sizing, et combien miser au poker ?` (PAA verbatim « C'est quoi le sizing ? » en tête + question EN — §7-4 ; la réponse ouvre sur la définition d'un mot, sizing = taille de la mise, puis reprend la réponse EN)
2. Why bet big on a wet board? → `Pourquoi miser gros sur un board humide ?` (EN)
3. What is geometric bet sizing? → `Qu'est-ce que le sizing géométrique ?` (volume « geometric bet sizing poker » 10 · autocomplétion « mise géométrique poker » = 0 → on garde « sizing »)
4. Should I use an overbet instead? → `Je devrais plutôt faire un overbet ?` (overbet poker 30)
5. Can you bet A-K with no pair here? → `Peut-on miser A-K sans paire ici ?` (EN)
6. What if my opponent calls draws regardless of price? → `Et si mon adversaire paie ses tirages quel que soit le prix ?` (EN)
7. Do these numbers transfer to my game? → `Ces chiffres se transposent-ils à mes parties ?` (EN)
#### Mots-clés absorbés
- sizing poker (70) + bet sizing poker (10) → seoTitle + tags + FAQ 1 ; « comment faire les sizing au poker » (autocomplétion) → absorbé par FAQ 1 (« combien miser »)
- overbet poker (30) → FAQ 4 + tag
- wet board poker (50 · partagé avec ⑦) → « board humide poker » tag + H2 L195
#### Notes
- « taille de mise » / « mise géométrique » = 0 recherche → « sizing » partout (emprunt = terme FR de référence, §3-F).
- Sizing préflop (open / 3-bet) = L-D : rien ici hors du flop en pot 3-bet. Spot app : `Board dynamique bicolore`.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L141 · L143 · L150 · L151 · L152 · L156 · L160 · L164 · L166 · L167 · L168 · L172 · L176 · L180 · L181 · L182 · L192 · L193 · L201 · L202 · L203 · L204 · L205 · L206 · L208 · L210 · L212 · L214 · L216 · L217 · L218 · L219 · L221 · L223 · L225 · L227 · L229 · L231 · L233 · L239 · L243 · L247 · L248 · L249 · L251 · L253 · L255 · L261 · L265 · L266 · L267 · L275 · L281 · L282 · L283 · L284 · L285 · L286 · L287 · L291 · L293 · L297 · L299 · L301 · L305 · L307 · L309 · L311 · L313 · L321 · L322 · L323 · L324 · L325 · L326 · L330 · L337 · L341 · L347 · L351 · L359

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L257: And it is why the big size is not only about this street. The by-the-river draw equities are all "if I get to see both cards" numbers, and a…
- L357: **Q. Should I use an overbet instead?**…
- L365: **Q. What if my opponent calls draws regardless of price?**…
- L369: **Q. Do these numbers transfer to my game?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 아래 다섯은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
- *     ⚠ **단 «최강 드로우»로 일반화하면 안 된다 — 아래 «2차 검수»가 그 부분을 뒤집었다.**
- * ▶ 🔴 **서치 — 뱅크의 ⑨ 배정이 필라와 충돌해 폐기했다** (2026-08-20 라쿠 English/US 실측)
- *   ★**`poker bet sizing` 110 · SEO난이도 8** — 주 키워드로 교체. 🔴 **`bet sizing poker`와 같은
- *     한 클러스터다**(15개 제출 → 14개 반환, 중복제거됨). **더하지 마라.** 12m −30% 하락 중.
- *   ★**`wet board poker` 50 · DA13** — 🔴 **`wet flop poker`는 볼륨 null.**
- * ▶ 카니발 — 🔴 **c벳 필라가 «거의 같은 보드»에 정반대 결론을 이미 싣고 있다**
- *     ⚠ 리버 39.6은 팟 121.3의 **32.6% ≈ 33%**라 「큰 벳 세 번」이 아니다
- * ═══ 2026-08-20 2차 검수 (적대 3렌즈 + 2차 교열 2편) — 되돌리지 마라 ═══
- * 🔴 **«이 보드의 최강 드로우 = 12아웃»이 거짓이었다.** 딜러 렌즈와 검산 렌즈가 **독립으로 수렴**했고
- * 🔴 **분모는 133이 아니라 «드로우 40콤보»다.** 「133콤보 중 2개」로 쓰면 완성 핸드까지 가격에서
- * 🔴 **「1/3은 모든 드로우가 넘는 가격」도 거짓이다.** 1/3(19.84%)을 넘는 건 **4콤보**뿐이고
- *    OESD 17.0% · 거트샷 8.5%는 못 넘는다. 「every draw clears 19.8%」로 되돌리지 마라.
- * 🔴 **84.1%(AK2 「드로우 없음」)를 뺐다** — ⑧편이 백도어 15.9%를 「콤보 검산 10 대 11」로 금지했는데
- *    ⚠ **「스트레이트 드로우도 불가능」이라고 쓰면 안 된다** — QJ는 T 한 장, 45는 휠 거트샷이다(2차 교열이 잡음).
- * 🔴 즉시 오즈만으로 값매기던 것을 바로잡았다(두 장 54.1 / 45.0 / 31.5 / 16.5% + 포지션·뒷돈·레이즈).
- *    ⚠ OESD 두 장 31.5%는 2/3 요구값을 넘으므로 **표의 ❌(한 장 기준)와 헷갈리지 않게 «한 장/두 장»을 명시할 것.**
- * 🔴 MDF 60.2%에 「순수 블러프 가정」 단서(:::note) · 레이즈 대응에 탑 페어 자리 · 하트 턴 양면 서술 추가.
- * 🪶 본문에 **🔴 이모지를 쓰지 마라** — 이 레포에서 헤더 주석 전용 마커다(★·⚠·🪶만 본문에 쓴다).

### 하지 말 것 (EN 원문 계약 ⑨)
- **98,4 %** 큰 사이즈와 **0,8 %** 체크 고정. 서로 배타적인 live draws 30,1 %와 backdoor를 구분.
- 백도어 정의는 «러너러너 하트»가 아니라 «같은 무늬 두 장 연속(하트 1장 보유 → 하트, 7♠ 옆 스페이드 2장 보유 → 스페이드)».
- BTN draw 40콤보 중 즉시 2/3 가격을 넘는 2콤보; 1/3에서는 4콤보. 이는 **한 장 odds**, river까지 공짜로 보는 equity 아님 — desc·Réponse rapide·소제목·FAQ에 이 구분이 전부 있다: 두 장 남은 상태로 BB 전체 레인지 상대 **38콤보 중 30콤보는 여전히 28,5 % 초과**, A-K 거샷 **37,6 %–42,9 %** → 큰 사이즈는 드로우를 «폴드시키는» 게 아니라 «비용을 물린다».
- BTN의 bare flush draw 0, 네 two-heart hand 모두 combo draw; bare 9아웃 tirage couleur는 1/3도 못 넘는다(**9 ÷ 47 = 19,1 %**) — 그런 핸드는 BB만 보유. BB two-heart 4콤보 전부 A♥ 포함.
- JJ quinte 경로 셋(K9 · AK · **98**); underpair는 «Q 아래», JJ만 두 브로드웨이 사이.
- A-K 개별 빈도: ⑩ 보드 **95,9 %–97,9 %**, 이 보드 **97,8 %–99,9 %** 큰 사이즈.
- MDF 60,2 %는 call 할당량이 아님(«상한»이라는 말도 쓰지 않는다).
- BB set 비율 8,2 %가 BTN 6,8 %보다 높아도 개수는 **6 대 9**. EQR 117,8 %가 ⑧보다 높지만 EV는 **15,46 < 16,99bb**.
- 🪶 EN-먼저 미판정 문구(de 계약 §6 말미): «32 combos of A-K and A-J» 1회 — B는 EN 축어대로 옮기고 판정하지 않는다.

---

## ⑩ 3bet-pot-low-board — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Three Combos Hit This Flop — and It Still Bets 97.8%",
seoTitle: "A Polarized Range Bets 97.8% on a Board It Missed",
desc: "In a 3-bet pot on 8-5-2, only three combos in the big blind's range paired the board — and it fires two-thirds pot 97.8% of the time. Here is why.",
tldr: "After a big blind three-bet and a button call, the flop 8♦5♣2♠ gets a two-thirds-pot bet 97.8% of the time. The odd part: of the big blind's 83 combos, exactly three paired this board — the A5s — and none of 88, 55 or 22 is in the range at all. The bet goes anyway because the range splits into 36 combos of overpairs and 40 combos of ace-high with almost nothing in between — only the three A5s. A polarized shape bets big.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🎲",
image: "/images/gto-3bp-low-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for an 8-5-2 rainbow flop in a three-bet pot, the big blind's grid almost entirely coloured for the large bet",
tags: ["polarized range poker", "dry board poker", "3-bet pot flop", "overpair strategy", "gto solver"],
# title 길이 52
# seoTitle 길이 49
# desc 길이 146
# tldr 길이 424
```

### 구조 (EN content L87~L243 · L## = EN 파일 줄)
#### 헤딩
- L104 ## What conditions produced these numbers?
- L120 ## How often does the three-bettor actually bet?
- L132 ## Did only three combos really pair this board?
- L149 ## Why bet big with a range that missed?
- L168 ## Why are all the sets on the other side?
- L190 ## Why does the caller realize more equity here than in the last two spots?
- L210 ## What changes at the table?
- L223 ## Check it yourself

#### FAQ 4문항
- L229 **Q. Should you c-bet A-K on a low board in a three-bet pot?**
- L233 **Q. What does a polarized range mean?**
- L237 **Q. Why does the three-bettor have no sets?**
- L241 **Q. Can these numbers go straight into a live game?**

#### 표 7개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L94 :::stripe
- L99 :::
- L172 ![Range composition infographic comparing the big blind and button hand categories on an 8-5-2 board in a three-bet pot](/images/gto-3bp-low-ranges-en.webp "8-5-2 in a three-bet pot · category split — trips only on the button, cle…
- L218 :::readnext[Keep reading]
- L221 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L91 /en/solver ✅ 도구
- L106 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L106 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅
- L130 /en/blog/3bet-pot-bet-sizing ✅
- L164 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L166 /en/blog/holdem-strategy ✅
- L172 /images/gto-3bp-low-ranges-en.webp "8-5-2 in a three-bet pot · category split — trips only on the button, clearly m img
- L215 /en/blog/3bet-pot-cbet ✅
- L215 /en/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp" ✅
- L225 /en/solver ✅ 도구
- L225 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§3-K·§7-5)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| polarized range poker · range polarisée | 10 · 10 | FAQ **«Qu'est-ce que signifie être polarisé au poker ?»**(PAA 축어 — 최소 «être polarisé» 연속열 유지) · tags |
| 3bet pot | 10 | 본문 «pot 3-bet» |
| 함정 🚫 | — | «range poker»·«tableau range»(⑨ → `/fr/hand-chart`) · 프리플랍 3bet 레인지 글(cours-et-fiches · L-D 몫) |

### PAA·자동완성 (축어)
- PAA(range polarisée SERP): **Qu'est-ce que signifie être polarisé au poker ?** · C'est quoi la range au poker ? · Qu'est-ce que le "cbet range" au poker ?(L-D) · Quelle est la range d'ouverture au poker ?
- 자동완성: polarized range poker (meaning) · range polarisée · range poker signification

### 현지 SERP (L-G §3-K)
- 상위: pokerstars.fr «Pourquoi vous devriez 3-bet plus souvent en cash game» · gtogecko.com/fr «Sizing des Mises au Poker» · poker-academie «Contrôler la range adverse» · fr.pokernews «Value Bluff : Dépolariser sa range…». 프리플랍 위주.
- 우리가 더 줄 것: ① 보드와 페어가 된 A5s 3콤보 vs 기존 오버페어 36콤보 구분 ② 큰 사이즈 97,8 % ③ EQR 시소의 조건(에퀴티 고정일 때).

### 소유표 (계획 §3-B)
- 주인인 검색어: «être polarisé / range polarisée» 질문형(볼륨 10).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · «range poker».

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Trois combos touchent ce flop, et la range mise quand même 97,8 % (65 car.)
seoTitle: Une range polarisée mise 97,8 % sur un board raté — 8-5-2 (57 car.)
desc: Pot 3-bet sur 8-5-2 : seuls trois combos de la range de la grosse blinde ont pairé le board, et elle mise deux tiers du pot 97,8 % du temps. Voici pourquoi. (156 car.)
tldr: Après un 3-bet de la grosse blinde suivi par le bouton, le flop 8♦5♣2♠ reçoit une mise de deux tiers du pot 97,8 % du temps. Le plus étrange : sur les 83 combos de la grosse blinde, exactement trois ont pairé ce board, les A5s, et ni 88, ni 55, ni 22 ne sont dans la range. La mise part quand même parce que la range se divise en 36 combos de surpaires et 40 combos de hauteur As avec presque rien entre les deux, seulement les trois A5s. Une forme polarisée mise gros. (469 car.)
tags: ["range polarisée poker", "range polarisée", "board sec poker", "flop pot 3-bet", "jouer une surpaire", "board bas et sec"]
#### H2 (EN → FR)
- L104 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L120 `## How often does the three-bettor actually bet?` → `## À quelle fréquence le 3-betteur mise-t-il vraiment ?`
- L132 `## Did only three combos really pair this board?` → `## Seuls trois combos ont vraiment pairé ce board ?`
- L149 `## Why bet big with a range that missed?` → `## Pourquoi miser gros avec une range qui a raté ?`
- L168 `## Why are all the sets on the other side?` → `## Pourquoi tous les brelans servis sont-ils de l'autre côté ?`
- L190 `## Why does the caller realize more equity here than in the last two spots?` → `## Pourquoi le caller réalise-t-il plus d'équité ici que dans les deux spots précédents ?`
- L210 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L223 `## Check it yourself` → `## Vérifie toi-même`
- (FAQ H2 없음 — EN대로 · Q.는 «Vérifie toi-même» 아래 그대로 · 🔧 Opus(A): Fable «ajouter si absent» 기각)
- Forme question : 7/7 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Should you c-bet A-K on a low board in a three-bet pot? → `Faut-il c-bet A-K sur un board bas dans un pot 3-bet ?` (EN)
2. What does a polarized range mean? → `Qu'est-ce que signifie être polarisé au poker ?` (PAA verbatim — §7-5)
3. Why does the three-bettor have no sets? → `Pourquoi le 3-betteur n'a-t-il aucun brelan servi ?` (EN)
4. Can these numbers go straight into a live game? → `Ces chiffres passent-ils tels quels en live ?` (EN)
#### Mots-clés absorbés
- range polarisée (10) / polarized range poker (10) → seoTitle + FAQ 2 + tags
- pot 3-bet (étiquette app) → tags + FAQ 1
#### Notes
- PAA gardée mot pour mot malgré sa syntaxe (« Qu'est-ce que signifie ») : c'est la suite « être polarisé » qui compte. Spot app : `Board bas et sec`.
- 🔴 Corps : les trois lignes de tirages sont mutuellement exclusives ; « 58,3 % ont raté » ≠ « 58,3 % se couchent » (en-tête EN).

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L87 · L89 · L96 · L97 · L98 · L102 · L110 · L112 · L113 · L114 · L118 · L122 · L126 · L127 · L128 · L134 · L138 · L139 · L140 · L141 · L142 · L143 · L145 · L147 · L153 · L155 · L162 · L164 · L166 · L172 · L176 · L177 · L178 · L179 · L180 · L181 · L182 · L188 · L192 · L196 · L198 · L202 · L203 · L204 · L206 · L208 · L212 · L213 · L214 · L216 · L219 · L220 · L227 · L231 · L235

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L212: - **Do not default to "I missed, so I check" on a low dry board.** In a three-bet pot your opponent missed too — **58.3%** of the button's r…
- L239: A. Because small pocket pairs like 88, 55 and 22 get called or folded preflop rather than three-bet. So all nine set combos on this board si…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 착수 조건이었던 «KO가 검수 종료 상태»는 충족됐다 — M-027 3차 재판정에서 D·F 대상 전건 해소.
- *     🔴 이 세 줄이 **상호배타**다. 「거트샷을 뺀 나머지가 78.3」으로 쓰지 마라 —
- *   🔴 **US 볼륨이 거의 안 잡힌다** — `3bet pot flop strategy`·`low flop 3bet pot`·`c bet dry flop`·
- *   🔴 **카니발 정리 — 키워드 팩이 실제로 하나 잡았다.**
- *   🔴 **상위글의 정설이 이 글과 정면으로 갈린다** — "On dry boards or in 3-bet pots, bet small with
- * 🔴 **2026-08-21 (검수장 M-032 §1) — readnext 둘째 카드를 ⑧ → ⑪로 되돌렸다. 다시 바꾸지 마라.**
- *   발행 당시 EN ⑪이 없어 ⑧으로 «대체»한 것이었는데 **⑪ 발행(`ecb07811`) 후 되돌리지 않았다.**
- *   🔴 **규율(검수장 제안 · 수용)**: **미발행 대체 링크는 «그 편이 발행되는 커밋»에서 되돌리고,
- * 🔴 KO ⑩이 세 회차 검수로 확정한 것 — 번역에서 떨어뜨리지 마라 (고지 문장 포함):
- *   ① 드로우 3행은 **상호배타**(위 참조). 여집합으로 흡수 금지.
- *   ④ 「58.3%가 못 맞았다」를 「58.3%가 접는다」로 **환산하지 마라**(대응 노드가 없다). 3사본 전부.

### 하지 말 것 (EN 원문 계약 ⑩)
- 보드와 직접 페어가 된 것은 A5s **3콤보**; 기존 포켓 overpair **36콤보**가 별도로 있어 «레인지 전체가 못 맞혔다»는 뜻 아님(«la range a complètement raté le board» 금지). EN 제목 «Three Combos Hit…»를 따르되 본문에서 반드시 구분.
- tldr «사이에 거의 아무것도 없다 — A5s 세 콤보뿐». hauteur As 40콤보, A4s gutshot 4콤보.
- A-K는 «페어도 드로우도 없음»이 아니라 **즉시 드로우 없음, 백도어만**(러너러너 roue + 수딧 3콤보의 백도어 couleur). draw 표 4,8 + 16,9 + 78,3 %.
- BTN brelan servi 9콤보 독점, AA/KK는 그것 외의 가치·블러프 구성에 별도 판단 필요. BTN 58,3 % missed ≠ 58,3 % folds; 반응 노드 없음.
- EQR 연동은 **«에퀴티가 고정일 때»만** 한쪽 이득 = 다른 쪽 손실 — «ici» 한 사실의 양면. BTN EQR 15,2 points 차이와 실제 EV/pot 점유율 차이 **6,1 points**를 구분.
- SPR 불릿: «플랍에 벳하는 순간 올인이 사실상 결정»은 폐기 — 남은 스택은 1–2벳 거리, **턴·리버는 이 솔브에 없고** 런아웃·상대가 답을 바꿀 수 있다.
- EN 현행 캡션(4b353f92): «overpairs nearly double» → «clearly more overpairs» · FAQ «puts 97.8% of the range into the large size».
- 🪶 «nearly double»은 EN 현행에 0회(4b353f92에서 정리됨 — 실측 10-07).

---

## ⑪ blind-battle-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Player With No Position Bets First — 67.4% of the Time",
seoTitle: "Blind vs Blind GTO: Out of Position, Betting 67.4%",
desc: "Blind vs blind on K-T-6, the small blind is first to act with no position — and bets 67.4%. Here is how a range edge drags equity realization past 100%.",
tldr: "After a small-blind open and a big-blind call, the K♥T♦6♠ flop gets a bet 67.4% of the time and a check 32.6%. In the seven single-raised pots earlier in this series the out-of-position player bet only 0.1% to 23.7% — and two things changed, not one. Here the out-of-position player is the raiser rather than the caller, and the board favors that range. Together they push the out-of-position equity realization to 103.1%.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "⚔️",
image: "/images/gto-sb-king-mid-oop-en.webp",
imageAlt: "HoldemMaster GTO solver showing the small blind's range on a K-T-6 rainbow flop, most of the grid coloured orange for the bet",
tags: ["blind vs blind poker", "small blind open", "king high flop", "equity realization", "gto solver"],
# title 길이 58
# seoTitle 길이 50
# desc 길이 152
# tldr 길이 422
```

### 구조 (EN content L110~L305 · L## = EN 파일 줄)
#### 헤딩
- L127 ## What conditions produced these numbers?
- L147 ## How often does the small blind actually bet?
- L171 ## Why does the out-of-position player lead here?
- L193 ## Why 67% here when a three-bet pot is 100%?
- L205 ## How do the two ranges differ?
- L242 ## Why is equity realization 103.1% without position?
- L272 ## What changes at the table?
- L285 ## Check it yourself

#### FAQ 4문항
- L291 **Q. Should the small blind always c-bet blind versus blind?**
- L295 **Q. Is being out of position always bad in poker?**
- L299 **Q. Why bet as small as a third of the pot?**
- L303 **Q. Why is 6-6 the big blind's only set on this board?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L117 :::stripe
- L122 :::
- L189 :::pull[Being out of position does not decide whether you bet first — how your range meets this particular board does most of the work.]:::
- L203 :::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 67.4% itself can move. Read it as "small and wide is the answer *under these conditions*…
- L209 ![Range composition infographic comparing the small blind and big blind hand classes on a K-T-6 board](/images/gto-sb-king-mid-ranges-en.webp "K-T-6 blind vs blind · class-by-class composition — the big blind holds about 10 points…
- L280 :::readnext[Keep reading]
- L283 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L110 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L114 /en/solver ✅ 도구
- L125 /en/blog/blind-battle-connected-board ✅
- L173 /en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp" ✅
- L173 /en/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp" ✅
- L185 /en/blog/blind-battle-connected-board ✅
- L191 /en/blog/blind-battle-connected-board ✅
- L201 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L209 /images/gto-sb-king-mid-ranges-en.webp "K-T-6 blind vs blind · class-by-class composition — the big blind holds about 1 img
- L266 /en/blog/blind-battle-connected-board ✅
- L270 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L274 /en/blog/blind-battle-connected-board ✅
- L275 /en/blog/ace-paired-board-strategy ✅
- L278 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L287 /en/solver ✅ 도구
- L287 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§3-J·§7-9)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| blind vs blind (poker) | 10 | 표기 «blind contre blind (BvB)» · 앱 «Blind vs Blind — SB vs BB (ranges larges)» · tags |
| 함정 🚫 | — | PAA가 전부 블라인드 규칙(L-A `holdem-blind-meaning` 몫) → **«C'est quoi les blindes au poker ?» FAQ 금지** · «position poker»(590 · ② → holdem-positions) |

### PAA·자동완성 (축어)
- PAA: C'est quoi les blindes au poker ? · Quelle est la valeur d'un blind au poker ? · Quand augmenter les blinds ? · C'est quoi une blind ? (🔴 전부 L-A 몫 — 쓰지 않는다)
- 자동완성: blind vs blind poker → small blind vs big blind in poker · blind contre blind poker = 결과 없음

### 현지 SERP (L-G §3-J)
- 영어 + fr.pokernews «Stratégie poker - Big Blind vs Small Blind»(2008) 1편. 그룹 A.
- 우리가 더 줄 것: ① SB 벳 67,4 %(1/3팟 하나) 계산값 ② ⑫ 9,6 %·⑬ 80,1 % 반례로 «자리가 보장하지 않는다» ③ EQR 103,1 % 역산.

### 소유표 (계획 §3-B)
- 주인인 검색어: 없음(그룹 A).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · EN seoTitle «Blind vs Blind GTO»의 «GTO» → «d'après le solver»류(헤드 조준 아님 — 확정 카피 참조) · «position poker»(②) · 블라인드 규칙 질문(L-A).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Le joueur sans position mise en premier, 67,4 % du temps (56 car.)
seoTitle: Blind vs blind : sans position, le solver c-bet 67,4 % (54 car.)
desc: Blind vs blind sur K-10-6 : la petite blinde parle en premier, sans position, et mise 67,4 %. Comment un avantage de range pousse l'EQR au-delà de 100 %. (153 car.)
tldr: Après une ouverture de la petite blinde suivie par la grosse blinde, le flop K♥10♦6♠ reçoit une mise 67,4 % du temps et un check 32,6 %. Dans les sept pots simplement relancés vus plus tôt dans cette série, le joueur hors de position ne misait que 0,1 % à 23,7 %, et deux choses ont changé, pas une. Ici, le joueur hors de position est le relanceur et non le caller, et le board favorise cette range. Ensemble, elles poussent la réalisation d'équité hors de position à 103,1 %. (477 car.)
tags: ["blind vs blind poker", "blind contre blind", "ouverture petite blinde", "flop hauteur roi", "réalisation d'équité", "c-bet hors de position"]
#### H2 (EN → FR)
- L127 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L147 `## How often does the small blind actually bet?` → `## À quelle fréquence la petite blinde mise-t-elle vraiment ?`
- L171 `## Why does the out-of-position player lead here?` → `## Pourquoi le joueur hors de position mise-t-il en premier ici ?`
- L193 `## Why 67% here when a three-bet pot is 100%?` → `## Pourquoi 67 % ici quand un pot 3-bet fait 100 % ?`
- L205 `## How do the two ranges differ?` → `## En quoi les deux ranges diffèrent-elles ?`
- L242 `## Why is equity realization 103.1% without position?` → `## Pourquoi la réalisation d'équité atteint-elle 103,1 % sans position ?`
- L272 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L285 `## Check it yourself` → `## Vérifie toi-même`
- (FAQ H2 없음 — EN대로 · Q.는 «Vérifie toi-même» 아래 그대로 · 🔧 Opus(A): Fable «ajouter si absent» 기각)
- Forme question : 7/7 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Should the small blind always c-bet blind versus blind? → `La petite blinde doit-elle toujours c-bet en blind contre blind ?` (EN)
2. Is being out of position always bad in poker? → `Être hors de position, est-ce toujours mauvais au poker ?` (EN)
3. Why bet as small as a third of the pot? → `Pourquoi miser aussi petit qu'un tiers du pot ?` (EN)
4. Why is 6-6 the big blind's only set on this board? → `Pourquoi 6-6 est-il le seul brelan servi de la grosse blinde sur ce board ?` (EN)
#### Mots-clés absorbés
- blind vs blind poker (10) → seoTitle + tags ; « blind contre blind (BvB) » = graphie alignée sur l'étiquette app `Blind vs Blind — SB vs BB (ranges larges)`
- 🚫 PAA « C'est quoi les blindes au poker ? » etc. = L-A holdem-blind-meaning, aucune FAQ ajoutée
#### Notes
- ⑫ Justification « solver » : l'EN disait « Blind vs Blind GTO » ; FR = « le solver c-bet 67,4 % » — « solver » est sujet d'un verbe dans une affirmation du spot, pas la locution « solver poker » ni « GTO » → pas de ciblage de la tête /fr/solver (§3-B ⑫).
- L171 : « lead » de l'EN rendu par « mise en premier » (la SB est ouvreuse → c'est un c-bet, pas un donk bet ; contrainte 5). Spot app : `Board K-high avec un T`.

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L110 · L112 · L114 · L118 · L119 · L120 · L121 · L125 · L133 · L136 · L137 · L143 · L145 · L149 · L153 · L154 · L160 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L169 · L173 · L181 · L182 · L183 · L185 · L187 · L191 · L193 · L195 · L197 · L199 · L203 · L213 · L214 · L215 · L216 · L217 · L218 · L219 · L220 · L221 · L223 · L225 · L229 · L230 · L231 · L232 · L236 · L240 · L242 · L248 · L250 · L252 · L258 · L259 · L260 · L261 · L262 · L263 · L264 · L266 · L268 · L270 · L274 · L275 · L276 · L278 · L281 · L282 · L293 · L297 · L301 · L305

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L275: - **The size is a third of the pot.** With the big blind defending 525 combos, small and wide is right. ⚠ Do not turn that into "betting big…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *    🔴 착수 조건(«KO가 검수 종료»)은 충족됐다 — M-023 8건 + M-025/027 전파를 받았다.
- *     🔴 **네 줄은 상호배타다.** 여집합으로 흡수하지 마라(⑩이 M-023에서 그렇게 틀렸다).
- *   🔴 **가져오면 안 되는 것들 (전부 임자가 있다)**:
- *   ⚠ 남은 것은 ⑬뿐이다. 아래는 당시 기록이다:
- * 🔴 **2026-08-21 (검수장 M-032 §2) — 유손실 산문화를 되돌렸다. 값을 지우지 마라.**
- * 🔴 KO ⑪이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ② tldr·바로 답을 「보드가 **아니라** 자리」로 단언하지 마라 — 본문은 「보드도 본다」고 이미 말한다.
- *   ④ **트리에 33% 하나뿐**이니 「크게 치면 값이 떨어진다」를 단언하지 마라.

### 하지 말 것 (EN 원문 계약 ⑪)
- SB 역할과 K-10-6의 레인지 적합성이 **함께** 67,4 %를 만든다. 동일 SB 자리의 ⑫ 9,6 / ⑬ 80,1이 반례.
- «필요조건이지 충분조건 아님» 문구는 폐기 — **시리즈의 다수 리드는 전부 이 자리에서 나왔지만 자리가 보장하는 건 없고, 콜러도 일부 리드한다(④ 23,7 %)**. «OOP라는 사실이 결정하지 않는다 — 이 보드와 레인지의 만남이 대부분을 한다». stripe «leads more often than not» → «mise plus souvent qu'il ne checke»(뜻 = 50 % 초과).
- 단일 33 % 옵션이므로 «큰 벳보다 우월함을 계산했다» 금지.
- QJ 16콤보는 8-outs OESD, live draw/backdoor/no-draw 서로 구분. SB set 9 대 BB 3. EQR 103,1 %와 «높은 EQR = 더 큰 이득» 주장을 분리.
- EN 현행(4b353f92): `6 × 55.3% = 3.318bb` · `3.42 ÷ 3.318 ≈ 103.1%` → fr `6 × 55,3 % = 3,318bb` · `3,42 ÷ 3,318 ≈ 103,1 %`.
- 🪶 EN-먼저 미판정: «362.1»(4회) — EN 축어대로(판정하지 않는다).
- 스팟 이름 «Board K-high avec un T»(앱 축어 — T 그대로).

---

## ⑫ blind-battle-connected-board — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Same Seat, Same Stack — and the Bet Falls from 67% to 9.6%",
seoTitle: "Board Texture Turns a 67% C-Bet Into 9.6% — GTO Solver",
desc: "Nothing changed but three cards. On 7-6-5 the small blind that bet 67.4% one board earlier now bets 9.6% — the clearest read on board texture in poker.",
tldr: "After a small-blind open and a big-blind call, the 7♦6♦5♣ flop gets a bet just 9.6% of the time and a check 90.4%. Pot, stack, SPR, bet size and both ranges are identical to the previous spot — only the three board cards changed, and the bet collapsed from 67.4% to 9.6%. The range edge won preflop was an edge in high cards, and a low connected board erases it outright. Equity flips to 49.6% against 50.4% and the out-of-position realization drops to 85.3%.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🪜",
image: "/images/gto-sb-connected-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on a 7-6-5 two-tone flop, the small blind's grid almost entirely green for the check",
tags: ["board texture poker", "connected board poker", "low connected flop", "poker overpair strategy", "gto solver"],
# title 길이 58
# seoTitle 길이 54
# desc 길이 151
# tldr 길이 459
```

### 구조 (EN content L108~L307 · L## = EN 파일 줄)
#### 헤딩
- L125 ## What conditions produced these numbers?
- L148 ## How often does the small blind bet here?
- L172 ## Why does 67.4% become 9.6% when nothing else changed?
- L189 ## Why does this board favor the big blind?
- L234 ## The opener is behind on equity — how?
- L261 ## So which hands make up the 9.6% that bets?
- L275 ## What changes at the table?
- L287 ## Check it yourself

#### FAQ 4문항
- L293 **Q. Why does the same range change value from board to board?**
- L297 **Q. You opened from the small blind and the flop comes low and connected. Now what?**
- L301 **Q. The small blind has three and a half times as many overpairs (42 combos to 12). Why is the bet only 9.6%?**
- L305 **Q. Which of the two spots is the blind-versus-blind default?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L115 :::stripe
- L120 :::
- L185 :::pull[The range edge is won preflop, but whether it gets realized is decided by three cards on the flop.]:::
- L193 ![Range composition infographic comparing the small blind and big blind hand classes on a 7-6-5 board](/images/gto-sb-connected-ranges-en.webp "7-6-5 blind vs blind · class-by-class composition — top pair runs 6.8% to 11.2% in the…
- L273 :::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 9.6% can move. Read it as "under these conditions there is almost nothing worth betting,…
- L282 :::readnext[Keep reading]
- L285 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L112 /en/solver ✅ 도구
- L193 /images/gto-sb-connected-ranges-en.webp "7-6-5 blind vs blind · class-by-class composition — top pair runs 6.8% to 11.2% img
- L271 /en/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-en.webp" ✅
- L271 /en/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp" ✅
- L278 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L280 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L289 /en/solver ✅ 도구
- L289 /en/solver ✅ 도구
- L303 /en/blog/blind-battle-cbet ✅
- L303 /en/blog/ace-paired-board-strategy ✅

### 키워드 (출처 L-G §1·§2·§7-9)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| texture de board poker · texture board poker | `-` (자동완성) | 표현만 — H2/본문 «texture de board» |
| blind vs blind | 10 | 본문 «blind contre blind (BvB)» |
| 함정 🚫 | — | 블라인드 규칙 PAA(L-A) · «position poker»(②) |

### PAA·자동완성 (축어)
- 자동완성: **texture de board poker** · board texture poker meaning · textured board poker
- PAA: 그룹 A — 스팟 고유 프랑스어 질문 없음.

### 현지 SERP (L-G §3-K «texture board poker»)
- 영어 6(pokerstars.uk «The Game Theory of Board Texture: Part 1 - Low Dry Flops» 등) + fr.pokernews «Stratégie Poker : analyser la texture du flop».
- 우리가 더 줄 것: ① 같은 SB 자리·같은 레인지인데 ⑪ 67,4 % → 이 보드 9,6 % ② BB가 SB 오버페어를 이미 이기는 42콤보 ③ 체크 90,4 %의 실제 이유(얇은 밸류 0,03bb 이내).

### 소유표 (계획 §3-B)
- 주인인 검색어: 없음(그룹 A).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · EN seoTitle «— GTO Solver» → «selon le solver»류(헤드 조준 아님) · «position poker»(②).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Même siège, même stack, et la mise tombe de 67 % à 9,6 % (56 car.)
seoTitle: 67 % de c-bet, puis 9,6 % — texture de board selon le solver (60 car.)
desc: Rien n'a changé sauf trois cartes : sur 7-6-5, la petite blinde qui misait 67,4 % juste avant ne mise plus que 9,6 %. La texture de board en une lecture nette. (159 car.)
tldr: Après une ouverture de la petite blinde suivie par la grosse blinde, le flop 7♦6♦5♣ ne reçoit une mise que 9,6 % du temps et un check 90,4 %. Pot, stack, SPR, sizing et les deux ranges sont identiques au spot précédent, seules les trois cartes du board ont changé, et la mise s'est effondrée de 67,4 % à 9,6 %. L'avantage de range gagné préflop était un avantage en cartes hautes, et un board bas connecté l'efface d'un coup. L'équité bascule à 49,6 % contre 50,4 % et la réalisation hors de position tombe à 85,3 %. (516 car.)
tags: ["texture de board poker", "board connecté poker", "flop bas connecté", "surpaire poker", "blind contre blind", "board bicolore"]
#### H2 (EN → FR)
- L125 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L148 `## How often does the small blind bet here?` → `## À quelle fréquence la petite blinde mise-t-elle ici ?`
- L172 `## Why does 67.4% become 9.6% when nothing else changed?` → `## Pourquoi 67,4 % deviennent-ils 9,6 % alors que rien d'autre n'a changé ?`
- L189 `## Why does this board favor the big blind?` → `## Pourquoi ce board favorise-t-il la grosse blinde ?`
- L234 `## The opener is behind on equity — how?` → `## L'ouvreur est derrière en équité : comment ?`
- L261 `## So which hands make up the 9.6% that bets?` → `## Alors, quelles mains composent les 9,6 % qui misent ?`
- L275 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L287 `## Check it yourself` → `## Vérifie toi-même`
- (FAQ H2 없음 — EN대로 · Q.는 «Vérifie toi-même» 아래 그대로 · 🔧 Opus(A): Fable «ajouter si absent» 기각)
- Forme question : 7/7 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. Why does the same range change value from board to board? → `Pourquoi la même range change-t-elle de valeur d'un board à l'autre ?` (EN)
2. You opened from the small blind and the flop comes low and connected. Now what? → `Tu as ouvert de petite blinde et le flop tombe bas et connecté. Tu fais quoi ?` (EN)
3. The small blind has three and a half times as many overpairs (42 combos to 12). Why is the bet only 9.6%? → `La petite blinde a trois fois et demie plus de surpaires (42 combos contre 12). Pourquoi la mise n'est-elle que de 9,6 % ?` (EN)
4. Which of the two spots is the blind-versus-blind default? → `Lequel des deux spots est la norme en blind contre blind ?` (EN)
#### Mots-clés absorbés
- texture de board poker (autocomplétion · `-`) → seoTitle + tags
- board connecté / bicolore (étiquette app `Board bas connecté, bicolore`) → tags
#### Notes
- ⑫ Justification « solver » : EN « — GTO Solver » → FR « texture de board selon le solver » : « selon le solver » qualifie l'affirmation, aucune locution « solver poker / solveur poker / gto » → pas la tête /fr/solver.
- 🔴 Corps : ne pas expliquer les 9,6 % par pot 6bb / stack 97bb / SPR 16,2 (constants en ⑪⑬) ; garder la ligne backdoor dans le tableau des tirages (en-tête EN).

---

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L108 · L112 · L116 · L117 · L118 · L119 · L123 · L131 · L133 · L134 · L137 · L138 · L142 · L146 · L150 · L154 · L155 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L168 · L170 · L172 · L174 · L178 · L181 · L182 · L183 · L187 · L193 · L197 · L198 · L199 · L200 · L201 · L202 · L203 · L204 · L205 · L206 · L207 · L211 · L212 · L213 · L215 · L217 · L219 · L223 · L224 · L225 · L226 · L227 · L228 · L230 · L232 · L236 · L240 · L242 · L244 · L246 · L248 · L252 · L253 · L254 · L255 · L256 · L257 · L259 · L261 · L267 · L268 · L269 · L271 · L273 · L277 · L278 · L279 · L280 · L283 · L284 · L295 · L299 · L301 · L303 · L307

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- (없음)

### EN 파일 머리 주석 중 경고 줄 (축어)
- *     🔴 **여섯 줄은 상호배타다. 「백도어 플러시」 행을 다시 빼지 마라** — M-023 축B가 잡은 결함이
- *   🔴 가져오면 안 되는 것: `wet board poker` 50 → **⑨·⑦이 이미 갖고 있다**(두 편이 겹친 상태다) ·
- * 🔴 KO ⑫가 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ① **드로우 표에서 백도어 행을 빼지 마라**(위 참조). 「드로우 없음」에서 끊어 읽게 하지 마라.
- *   ④ 🔴 **9.6%의 이유를 팟 6bb·스택 97bb·SPR 16.2에서 찾지 마라** — 셋 다 ⑪⑬에서 **상수**인데
- *      ⚠ 단 **개별 콤보 최다는 88이 아니다**(Q♠4♠ 54.7 · A♣7♣ 54.4 · T♣9♣ 52.2 > 8♦8♣ 47.1).
- *   ⑦ 「SB가 가진 몇 안 되는 값 있는 패」로 A7s·K7s를 설명하지 마라 — 실제 이유는

### 하지 말 것 (EN 원문 계약 ⑫)
- ⑪과 pot·stack·레인지·사이즈가 동일하며 **보드만 변경**. 양쪽 set 9콤보, 비율 1,6/1,7 차이는 분모 때문. BB의 set 9 + double paire 13 + quinte 20 = 42콤보는 SB overpair를 이미 이김.
- BB 우위 이유: «5-6-7 연결 콤보가 BB에만 남는다»가 아니라 **SB가 오픈하지 않는 BB 핸드(T7o, 97o, 87o, 76o, 74s, 43s 등)가 공통 보유분 위에 더해진다**. live draws SB 46,4 / BB 55,0 %.
- **클래스 평균** 88 bet 39,5 %와 **개별 콤보** Q♠4♠/Q♥4♥ 54,7 %를 구분(«top three»가 아니라 «top individual combos», 다음 10♣9♣ 52,2 %). 88 EQ 73,4 %–75,2 %, EQR 133 %–138 % 범위 보존.
- 90,4 % 체크 이유: «얇은 밸류로 리드 후 레이즈 맞으면 손해»는 폐기 → A♣7♣·K♣7♣ 같은 얇은 밸류는 **벳과 체크가 0,03bb 이내**라 체크로 잃는 게 거의 없다.
- hauteur As «대부분» 페어만(A4·A8 OESD, A♦x♦ tirage couleur 예외). 체크 이후 BB bet/SB check-raise 결과는 없음; ⑦과 좌석도 다름.
- EN 현행(4b353f92): FAQ «three and a half times as many overpairs (42 combos to 12)» → fr «trois fois et demie plus d'overpairs (42 combos contre 12)».

---

## ⑬ ace-paired-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two Aces on the Flop and the Bet Jumps to 80%",
seoTitle: "Trips on an Ace-Paired Board: Why It Bets 80% — GTO",
desc: "One paired flop gets a 3% bet and another gets 80.1%. On A-A-6 the ace belongs to the raiser — and the trips that beat you are missing from the caller's range.",
tldr: "After a small-blind open and a big-blind call, the A♠A♥6♦ flop gets a bet 80.1% of the time (79.6% at a third of the pot, 0.5% at three quarters, check 19.8%). That is the reverse of the 3.0% seen on the 6♣6♦3♥ paired board — and what split them is less that the board paired than which card paired and whose range it fits (the seats and ranges changed along with the board). Hands making trips with an ace run 88 combos to 66, and 16 of those combos, A-K and A-Q, are absent from the calling range entirely.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🅰️",
image: "/images/gto-sb-paired-ace-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on an A-A-6 flop, the small blind's grid almost entirely orange for the bet",
tags: ["trips poker", "what are trips in poker", "ace paired board", "poker bluff frequency", "gto solver"],
# title 길이 45
# seoTitle 길이 51
# desc 길이 159
# tldr 길이 508
```

### 구조 (EN content L118~L286 · L## = EN 파일 줄)
#### 헤딩
- L135 ## What conditions produced these numbers?
- L155 ## How often does the small blind bet here?
- L181 ## Two paired boards, 3.0% and 80.1% — what split them?
- L201 ## Who holds more trips?
- L236 ## Why is the large size almost never used?
- L246 ## Which hands make up the 19.8% that checks?
- L254 ## What changes at the table?
- L266 ## Check it yourself

#### FAQ 4문항
- L272 **Q. What are trips in poker, and how do they differ from a set?**
- L276 **Q. If you also bet with hands that missed, isn't that bluffing?**
- L280 **Q. On a board like A-A-6, how likely is the opponent to hold an ace?**
- L284 **Q. What is the conclusion running through this series?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L125 :::stripe
- L130 :::
- L197 :::pull[What sets the betting frequency is not how many combos your top class has. It is whether your whole range is better than theirs.]:::
- L205 ![Range composition infographic comparing the small blind and big blind hand classes on an A-A-6 board](/images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · class-by-class composition — hands that missed run 39.8% agai…
- L244 :::note[⚠ This study spot was solved with two size candidates, 33% and 75%. Add a smaller one — a fifth or a quarter of the pot — and the 79.6% could migrate there. Read it as "the small one of the sizes offered," not as "33% is t…
- L261 :::readnext[Keep reading]
- L264 :::

### 링크 (EN 축어 → fr은 /fr/blog/<같은 slug> · 도구 /fr/<tool>)
- L118 /en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp" ✅
- L122 /en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp" ✅
- L122 /en/solver ✅ 도구
- L205 /images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · class-by-class composition — hands that missed run 39.8% img
- L240 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L258 /en/blog/3bet-pot-low-board ✅
- L258 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅
- L259 /en/blog/low-board-check-raise ✅
- L268 /en/solver ✅ 도구
- L268 /en/solver ✅ 도구
- L286 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§3-L·§7-6)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| trips poker | 50 | FAQ «Trips et set : quelle différence ?» · tags |
| board pairé | `-` | 본문 표기 |
| 🔴 set poker | 170 (함정 — 쇼핑 SERP) | 제목·H2·태그에 «set poker»·«set» 단독 금지 |
| 함정 🚫 | — | «brelan ou set» 자동완성은 «brelan ou paire/couleur/carré/full»만 붙는다(«set» 안 붙음) |

### PAA·자동완성 (축어)
- 자동완성: brelan ou set → brelan ou paire · brelan ou couleur · brelan ou carré · brelan ou full · trips ou set = 곤충(thrips)뿐
- PAA: 프랑스어 질문형 없음(SERP 쇼핑 함정) → EN FAQ 질문 유지.

### 현지 SERP (L-G §3-H·§3-L·§7-6)
- «board pairé»는 프랑스 커뮤니티 정본 표기(PokerQZ · Kill Tilt · PA 포럼). 통념 «Sur les boards statiques… petit sizing».
- 우리가 더 줄 것: ① A-A-6 작은 사이즈 80,1 % vs ⑥ 6-6-3 3,0 % — «같은 pairé인데» ② trips 88 대 66콤보 ③ 블러프 손익분기 25 % 산술.

### 소유표 (계획 §3-B)
- 주인인 검색어: trips poker 50(«trips et set» 짝).
- 쓰면 안 되는 헤드: «gto poker»·«solver poker»·«gto solver»(⑫) · EN seoTitle «— GTO» → «d'après le solver»류(헤드 조준 아님) · «set poker»(함정).

### 확정 카피
> Fable 서브 1회(2026-10-07) 출력 축어 · 길이는 Opus 재측정(JS length) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Deux as au flop, et la mise grimpe à 80 % (41 car.)
seoTitle: Brelan d'as (trips) sur board pairé : le solver mise 80 % (57 car.)
desc: Un flop pairé reçoit 3 % de mise, un autre 80,1 %. Sur A-A-6, l'as appartient au relanceur, et les brelans qui te battent manquent dans la range du caller. (155 car.)
tldr: Après une ouverture de la petite blinde suivie par la grosse blinde, le flop A♠A♥6♦ reçoit une mise 80,1 % du temps (79,6 % à un tiers du pot, 0,5 % à trois quarts, check 19,8 %). C'est l'inverse des 3,0 % vus sur le board pairé 6♣6♦3♥, et ce qui les sépare tient moins au fait que le board est pairé qu'à la carte qui a pairé et à la range qu'elle sert (les sièges et les ranges ont changé en même temps que le board). Les mains qui font brelan avec un as comptent 88 combos contre 66, et 16 de ces combos, A-K et A-Q, sont totalement absents de la range du caller. (566 car.)
tags: ["trips poker", "trips ou set", "board pairé as", "fréquence de bluff poker", "blind contre blind", "board avec deux as"]
#### H2 (EN → FR)
- L135 `## What conditions produced these numbers?` → `## Quelles conditions ont produit ces chiffres ?`
- L155 `## How often does the small blind bet here?` → `## À quelle fréquence la petite blinde mise-t-elle ici ?`
- L181 `## Two paired boards, 3.0% and 80.1% — what split them?` → `## Deux boards pairés, 3,0 % et 80,1 % : qu'est-ce qui les sépare ?`
- L201 `## Who holds more trips?` → `## Qui a le plus de brelans ?`
- L236 `## Why is the large size almost never used?` → `## Pourquoi le gros sizing n'est-il presque jamais utilisé ?`
- L246 `## Which hands make up the 19.8% that checks?` → `## Quelles mains composent les 19,8 % qui checkent ?`
- L254 `## What changes at the table?` → `## Qu'est-ce que ça change à la table ?`
- L266 `## Check it yourself` → `## Vérifie toi-même`
- (FAQ H2 없음 — EN대로 · Q.는 «Vérifie toi-même» 아래 그대로 · 🔧 Opus(A): Fable «ajouter si absent» 기각)
- Forme question : 7/7 H2 de contenu (100 %)
#### FAQ (EN → FR)
1. What are trips in poker, and how do they differ from a set? → `Trips et set : quelle différence au poker ?` (trips poker 50 — §7-6 ; couple trips/set autorisé)
2. If you also bet with hands that missed, isn't that bluffing? → `Si tu mises aussi avec des mains qui ont raté, ce n'est pas du bluff ?` (EN)
3. On a board like A-A-6, how likely is the opponent to hold an ace? → `Sur un board comme A-A-6, quelle est la probabilité que l'adversaire ait un as ?` (EN)
4. What is the conclusion running through this series? → `Quelle conclusion traverse toute cette série ?` (EN)
#### Mots-clés absorbés
- trips poker (50) → seoTitle « (trips) » + FAQ 1 + tag
- board pairé (graphie FR) → seoTitle + tag ; 🚫 « trips vs set » (140 EN) appartient à ⑥, on ne le vise pas en titre
#### Notes
- ⑫ Justification « solver » : EN « — GTO » → FR « le solver mise 80 % » : le solver est sujet d'un verbe dans l'énoncé du spot, pas « solver poker » ni « GTO » → pas la tête /fr/solver.
- 🔴 « set poker » = shopping : « brelan d'as » en tête, « (trips) » en parenthèse, jamais « set » seul. Spot app : `Board avec deux As`.
- 🔴 Corps : « l'as est au relanceur » ≈ 1,3× (SB 95 vs BB 72), ne pas écrire « écrasant » ; pas de nombre d'épisodes en dur (en-tête EN).

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L118 · L120 · L122 · L126 · L127 · L128 · L129 · L133 · L139 · L141 · L143 · L145 · L146 · L147 · L151 · L153 · L157 · L161 · L162 · L163 · L169 · L170 · L171 · L172 · L173 · L174 · L175 · L176 · L177 · L181 · L183 · L185 · L188 · L189 · L190 · L191 · L193 · L195 · L199 · L203 · L205 · L209 · L210 · L211 · L212 · L213 · L214 · L218 · L219 · L220 · L222 · L228 · L230 · L232 · L234 · L238 · L240 · L242 · L244 · L246 · L248 · L250 · L252 · L256 · L258 · L262 · L263 · L274 · L278 · L282 · L286

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L278: A. Hand by hand, yes. But in GTO **bluffing is not "I am deceiving with this hand" — it is "what percentage of bluffs sits in my range."** T…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   ⚠ 「(the last)」·「thirteen spots」 류 **편 수 하드코딩을 넣지 마라** — 정본은 `lib/gto-series.ts`의
- *   🔴 **합계 검산**: SB 1+9+88+93+112+200 = **503** ✓ / BB 0+9+66+78+92+260 = **505** ✓
- *     🔴 **2026-08-21 (검수장 M-032 §3) 보완 — 열거에 Ax를 빠뜨렸다.** BB가 A를 들면
- *     🔴 ④의 「A 한 장에 뒤집힌다」를 이 보드에 이식하지 마라 — M-025 ⑫가 잡은 족보 오류다.
- *   🔴 **`trips poker` = `poker trips` = `trips in poker`는 월별 배열이 완전히 같은 «한 클러스터»다.
- *      210이지 630이 아니다. 더하지 마라.**
- *   🔴 가져오면 안 되는 것: `trips vs set` 140 → **⑥**(`paired-board-strategy`) ·
- * 🔴 KO ⑬이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ⑧ 「A는 공격한 쪽이 **압도적으로** 많이」로 과장하지 마라 — SB 95 대 BB 72로 **약 1.3배**다.

### 하지 말 것 (EN 원문 계약 ⑬)
- 79,6 % small + 0,5 % large = 80,1 %, check 19,8. ⑪/⑫와 달리 **두 사이즈가 실제 제공**됨. SB trips 88 / BB 66, AK+AQ 16콤보; SB 독점 상위 trips = A-K 8 + A-Q 8 + 오프수트 A-J 6 = **22콤보**(EN 축어). AA는 carré 1콤보 SB만; full은 양쪽 66 세 콤보 + A6 여섯 = 9.
- KK의 얇은 밸류 ≠ 약한 핸드는 전부 폴드. 원에이스 94콤보 체크 0,1 %–26,0 %, 평균 12,3 %, 0 % 체크 콤보 없음.
- BB 미스 51,5 %는 **«벳이 압박하는 풀»이지 폴드율이 아니다** — 1/3팟에 MDF 약 75 % 유지 → 균형 상대는 약 1/4만 폴드; **2bb 블러프 into 6bb 손익분기 폴드 25 %**; 97bb는 «절대 위험 없음»이 아니라 턴·리버에 걸릴 수 있다.
- «체크 후 노드는 이 스팟에 없다 — 시리즈 유일한 체크 후 벳 노드는 ⑦ 재솔브»(⑦ 링크 보존). bluff-catch 제안은 상대가 블러프를 섞는다는 **해석·가정**이며 후속 노드 결과가 아님.
- FAQ: 솔버는 핸드에 «블러프» 라벨을 붙이지 않고 **모든 핸드에 빈도를 정하며, 레인지 벳 빈도는 그 평균**.
- EN 현행(4b353f92): «what split them is **less that the board paired than which card paired and whose range…**» — 옛 «not that the board paired but whose card paired»로 되돌리지 않는다.
- 앱 ⑬ 설명문은 정정본(88 vs 66 · 80,1 %) — 수치 근거는 EN.

---
