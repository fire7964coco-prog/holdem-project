# fr-tour 브리프 — 🅴 토너먼트 클러스터 5편 (A 구간 산출 · 2026-10-07)

> **B 구간의 입력이다.** 정본 절차 = `docs/ms-translation-lanes.md` §5(치환 = `docs/fr-cluster-plan.md` §5) · 용어 정본 = 계획 §3-A · 소유표 = 계획 §3-B · SERP 근거 = `docs/keyword-bank/fr-serp/L-E-tour.md`(B에서 다시 열 필요 없음 — 필요한 것은 여기 옮겼다).
> EN 기준 = 해시 **`a54b5f3d`**(브랜치 `harden-fr-tour` 착수 시점 = main `058a9718`, `git diff a54b5f3d..HEAD -- lib/posts-en/<5편>` = **변경 0** 확인 10-07).
> EN `updated`: tournament **2026-10-01** · icm **2026-09-09** · bubble **2026-09-13** · short-stack **2026-09-24** · tournament-vs-cash-game **2026-09-13** → 각 글 `masterUpdated`는 이 값(헤드가 머지 때 델타 스윕 후 갱신 · 계획 §2-⑤).
> 🔴 **카피(title·seoTitle·desc·tldr·tags·H2·H3·FAQ 문항)는 이 브리프 «확정 카피»가 최종이다.** B·C는 바꾸지 않는다 — 바꿔야 하면 진행 파일 «헤드 요청»(계획 §2-⑥).
> 🪶 선례: ms 레인 `docs/ms-lanes/tour-brief.md`(같은 4편 · 09-26)의 EN 해부를 **라인 번호 대조 후** 승계했다(EN 4편은 그 뒤 tournament L78 한 단어 «runs→ran»만 바뀜 · 라인 이동 0). vs-cash-game은 이번에 새로 해부했다.

## 0. B가 이 브리프를 쓰는 법

- **입력 = 이 브리프 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)**. 브리프에는 메타·구조(L##)·링크·원시 HTML 줄·§13 자리·경험담·확정 카피를 실었다. 본문 산문·표·디렉티브는 EN 파일을 열어 옮긴다. 🔴 **웹·MCP·다른 로케일 파일은 열지 마라**(예외: 틀 복사용 `lib/posts-fr/holdem-blind-meaning.ts` 1편). 사실·수치·카드의 출처는 EN 축어 + 이 브리프 §1-G의 형제·도구 인용뿐이다.
- **순서**(정본 §5): 구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크.
- **틀**: `lib/posts-fr/holdem-blind-meaning.ts`의 필드 모양(`masterUpdated` 포함) · `date`/`updated` = 집필일 · `slug`·`image`·`emoji`·`category: "tournament"` = EN 그대로 · `readTime` = `"N min"`(숫자 EN 그대로: tournament 14 · icm 13 · bubble 13 · short-stack 13 · vs-cash 18) · `imageAlt`는 프랑스어로(수치 축어 · tournament «12,000/24,000» → «12 000/24 000») · 🔴 **content에 히어로 넣지 마라**(EN에도 없다).
  - **플래그 필드는 EN 그대로**: tournament·icm·bubble·short-stack = `keepImagesInBody: true` · **vs-cash-game = `hideSummaryImageSlot: true`**(keepImagesInBody 없음).
- **EN 파일 꼬리**: icm · bubble · short-stack만 `export default POST;`가 있다 → fr도 그 세 편만 붙인다(tournament · vs-cash는 없다).
- **등록**: `lib/posts-fr/index.ts`의 `// [fr-tour import 시작]`~`끝` · `// [fr-tour 배열 시작]`~`끝` 두 칸에만. import 이름 = `holdemTournament` · `holdemIcm` · `holdemBubble` · `holdemShortStack` · `holdemTournamentVsCashGame`. 칸 밖 금지.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=fr --slug=<slug>` 🔴 0 · 끝에 `npm run check:intl-links` · `npm run check:structure`(fr 행 내 슬러그 결손 0 — 링크 편차는 §1-D 기록분만) · `npm run build`.

## 1. 공통 결정 (5편 전부)

### 1-A. 고정문 (계획 §3-A ① · 판단하지 말고 그대로)
| EN | fr |
|---|---|
| `:::readnext[Keep reading]` | `:::readnext[À lire ensuite]` |
| `## FAQ` | `## FAQ` |
| `## Related Posts`(icm·bubble·short-stack·vs-cash) · `## Related Guides`(tournament) | `## Articles liés` (둘 다) |
| `## The 3 Things to Remember`(icm·bubble·short-stack·vs-cash) | `## À retenir` (번호 목록 3개 그대로) |
| FAQ 형식 | `**Q. …**` + 빈 줄 + `A. …` (EN과 동일) |
| readTime `"13 min"` | `"13 min"` |
| `### At a Glance`(tournament) · `### ICM at a glance` · `### The bubble in one glance` · `### Short-stack rules at a glance` · `### The 15-second answer`(vs-cash) | 확정 카피 «H3» 표의 값 |

- 🔴 **`> **Réponse rapide**` 블록을 새로 만들지 마라.** EN 5편에는 Quick answer 블록이 **0개**다 — 대신 각 H2 첫 문장이 굵은 직답(`**…**`)이다. fr도 **같은 자리에 굵은 직답 문장**(40~75단어 자기완결 단락의 첫 문장)을 둔다(구조 패리티 · ms 선례). 🆕 현지 추가 H2가 있으면 그 H2도 같은 모양(굵은 첫 문장 직답)으로.
- 화자: 1인칭 단수 · 남성형 일치(«je me suis retrouvé éliminé»).

### 1-B. 용어 (계획 §3-A ③④ 정본 + 이 레인 신규 🆕 — 진행 파일 «신규 용어»에 등재)

| EN | 본문 fr | 비고 |
|---|---|---|
| tournament · MTT · SNG | **tournoi (de poker)** · MTT (첫 등장 «MTT (tournoi multi-tables)») · sit & go (SNG) | 🆕 MTT 풀이 |
| buy-in · fee · rake | **buy-in** (첫 등장 «le buy-in (droit d'entrée)») · la part de la salle = **les frais** · rake = rake | 🆕 · PokerStars.fr «buy-in, également appelé frais d'entrée» → 우리는 «frais»를 salle 몫(EN «fee»)으로만 쓴다(«$100+$9»의 $9). 혼동 막기 |
| prize pool · payout(s) · payout structure | **prize pool** (첫 등장 «le prize pool (la cagnotte)») · **gains** · **structure des gains** | 🆕 |
| pay jump · ladder up | **palier de gains (pay jump)** · «grimper les paliers» | `local-voice` §2 «paliers (de paiement)» · «sauts de paie» 금지 |
| min-cash · ITM · in the money · cash (v.) | **min-cash** · **ITM** (첫 등장 «ITM (In The Money — dans l'argent)») · «finir dans l'argent / dans les places payées» | 🆕 |
| starting stack · chip leader · big/medium/short stack | **stack de départ** · **chip leader** · **gros stack** / **stack moyen** / **short stack** | 계획 §3-A ④ «stack» · PokerStars.fr bulle «Gros stacks / Stacks moyens / Petits stacks» · 🆕 |
| 🔴 tapis | **all-in 뜻에만**(«faire tapis», «partir à tapis») | §3-A ④ · 예외 두 곳만: short-stack 첫 정의 «short stack (« petit tapis »)» 병기 1회 · «stack effectif (le « tapis effectif »)» 병기 1회(PAA 표기 · §1-G) |
| shove · jam · push · first-in | **shove / faire tapis** · 🔴 «jam» 산문 금지(EN «jams/jam» 전부 → «fait tapis / shove») · **push or fold**(도구 정본 표기 · EN «push/fold» 대신) · **first-in** (첫 등장 «first-in (premier à entrer dans le coup)») | 도구 계산기 «Push or Fold» · «first-in» |
| blind level · structure sheet · clock · late reg · re-entry · rebuy · add-on | **niveau de blindes** · **feuille de structure** (코퍼스 축어) · **horloge** · **inscription tardive (late reg)** · **réentrée (re-entry)** · **recave (rebuy)** · **add-on** | 코퍼스 «feuilles de structure» · 🆕 réentrée·recave |
| freezeout · bounty · PKO · mystery bounty · satellite · deepstack · turbo · hyper-turbo | freezeout · bounty · **PKO (KO progressif)** · mystery bounty · satellite · deepstack · turbo · hyper-turbo | SERP «poker ko progressif» · 🆕 |
| final table · bag (chips) · dinner break · seat card · tournament director | **table finale** · «mettre ses jetons en sac (bag)» · **pause dîner** · **carte de placement (seat card)** · **directeur de tournoi** | 🆕 |
| bubble · on the bubble · burst · pay the bubble · bubble boy · stone/soft bubble · money / final-table / satellite bubble | **la bulle** · «sur la bulle» · **«la bulle éclate»**(burst) · «payer la bulle» · bubble boy · **bulle stone (stone bubble)** · soft bubble · **bulle des places payées** · **bulle de la table finale** · **bulle de satellite** | 위키 «La bulle éclate» · reddit «bulle stone» · 🆕 |
| bust on the bubble (관용) | **«faire la bulle»** = 버블에서 탈락하다 | Winamax «C'est quoi faire la bulle ?» · 자동완성 · 🆕 — 🔴 «faire la bulle»를 «버블을 만들다/버블에 도달하다» 뜻으로 쓰지 마라 |
| hand-for-hand · stalling · time bank | **hand-for-hand** (첫 등장 «hand-for-hand (main par main)») · **stalling** (첫 등장 «stalling (jouer la montre)») · time bank | 🆕 |
| bubble factor · risk premium · ICM tax | bubble factor · **risk premium** (첫 등장 «risk premium (prime de risque)») · **taxe ICM** (첫 등장 «taxe ICM (ICM tax)») | 🆕 |
| ICM · chip EV · $EV · ICM deal · chip chop | **ICM** (첫 등장 «ICM (Independent Chip Model)») · **chip EV (cEV)** · **$EV** · **deal ICM** · **chip chop** | 도구 계산기 «Deal ICM»·«Chip chop» · SERP «cEV / $EV» |
| M-ratio · Harrington zones · green/yellow/orange/red/dead | **valeur M** (첫 등장 «valeur M (le M de Harrington, ou ratio M)») · **Zone verte / Zone jaune / Zone orange / Zone rouge / Zone morte** | 도구 계산기 라벨 축어 · 🆕 «ratio M» 병기 |
| orbit · effective stack · fold equity | **orbite** · **stack effectif** · **fold equity** | 도구 «orbite» · 코퍼스 fold equity 4 |
| cash game · ring game · rake · rack up · reload · rathole · hit-and-run | **cash game** (첫 등장 «cash game (ou « partie libre »)») · ring game · rake · «ramasser ses jetons» · «se recaver» · **ratholing** · hit and run | PokerStars.fr «partie libre» · 🆕 |
| buy-in (cash · bankroll 단위) | **cave** («20 à 40 caves») · 토너먼트 단위는 «buy-ins» 그대로 | 코퍼스 cave 5 · 🆕 |
| bb/100 · hourly · ROI · cash rate · variance · downswing · bankroll · micro stakes | bb/100 · **taux horaire** · ROI · **taux d'ITM** · variance · downswing · bankroll · **micro-limites** | 🆕 |
| pocket jacks · ace-ten · ace-jack · pocket aces | **paire de valets** · **as-dix** · **as-valet** · **paire d'as** | §3-A ② 카드 풀어 쓰기 소문자 |
| AKo · AA · KK · 22 | 축어 (`AKo` · `AA` · `KK` · `22`) | 랭크 문자 R/D/V 금지 |

### 1-C. 조판 (계획 §3-A ②)
- **tu** 전용 · 곧은 `'` · `« … »`(안쪽 공백) · `Texas Hold'em`.
- 숫자 프랑스식: `10 000` · `20 000` · `$4 592 000` · `33,9 %` · `$38,39` · `1,5×` · `2,7:1` · `10–15 %` · `$` 앞붙임(€ 환산 금지). **값은 EN 축어, 구분자만** 바꾼다(C 전사 대조가 정규화 후 비교).
  - 범위 하이픈·대시는 EN 그대로(`20–40`, `20-40`, `48-50%` → `48-50 %`).
  - `5,000 / 3,000 / 2,000` → `5 000 / 3 000 / 2 000` · 블라인드 `500 / 1,000` → `500 / 1 000` · `12,000/24,000` → `12 000/24 000`.
  - bb 표기: `10bb`·`100BB+`·`9bb` = EN 축어(단위 문자 그대로) · 산문 «big blinds»는 «big blinds» 유지(«grosses blindes»로 풀지 마라 — 단위 표현).
- 시각(tournament Day 1 타임라인): **24시간제**로 — `10:30am`→`10 h 30` · `12:00pm`→`12 h` · `12:40–2:40pm`→`12 h 40 – 14 h 40` · `~3:30pm`→`~15 h 30` · `~5:00pm`→`~17 h` · `6–9pm`→`18 h – 21 h` · `9–11pm`→`21 h – 23 h`. 🔴 시각의 **값**은 같고 표기만 바뀐다(C 전사 대조 스크립트는 am/pm → 24h 변환 후 비교할 것). 그리드 열 폭 `80px`는 EN 그대로 — 글자가 넘치면 C에서 화면 확인 후 «헤드 요청».
- 하이라이트 색(`==g:` `==r:` `==b:` `==`) · `**굵게**` 위치는 EN과 같게. `**` 중첩 금지. bubble L39~ «`==**On the bubble**==`»식(하이라이트 안 굵게)은 EN 형태 그대로 — 중첩 아님.
- 수식·변수(bubble L115 `c · BF ÷ (P + c · BF)` · `BF ÷ (1 + BF)` · short-stack L71 `M = …`)는 기호·변수명 축어, 단어만 번역(«your stack» → «ton stack»).

### 1-D. 링크 — **편차 2건(tournament)** · 나머지 4편 편차 0

| EN 대상 | 상태 | fr 처리 |
|---|---|---|
| holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack · holdem-tournament-vs-cash-game | 🅴 이 레인 | `/fr/blog/<slug>` |
| holdem-blind-meaning · texas-holdem-rules-for-beginners · holdem-game-order | 🅰 기존 fr(재작성 중) | 그대로 |
| holdem-hand-rankings | 🅱 | 그대로 |
| holdem-equity · holdem-pot-odds · holdem-probability | 🅲 | 그대로 |
| holdem-starting-hands-chart · holdem-positions · holdem-3bet · holdem-when-to-fold | 🅳 | 그대로 |
| holdem-rake · holdem-glossary | 🅵 | 그대로 |
| `/en/calculator` | 도구 ✅ | `/fr/calculator` |
| 🔴 **apt-incheon-2026-guide**(tournament **L191** 본문 · **L321** readnext) | 제외 대회 가이드 | **L191 = 문장째 빼기**(링크 하나를 위한 안내문 «Playing in Asia? See the …» — 링크를 빼면 문장이 빈다 · 대체할 51편 없음) · **L321 = `/fr/blog/holdem-icm | <icm fr title> | /images/holdem-icm-hero.webp`로 대체**(readnext 3장 유지 · ms 선례) → 진행 파일 «링크 편차» 2행 |

- 외부 링크 0 · 페이지 내 앵커 `(#…)` 0 · `<a id=` 0 · `<br/>` 0 (5편 grep 확인).
- 썸네일 인자 `"thumb:/images/…"` 그대로. 앵커 텍스트만 프랑스어.
- **도구 앵커 문구 고정**(계획 §3-A ⑤): `/fr/calculator`로 가는 링크의 앵커는 EN «ICM calculator»·«ICM deal calculator»·«calculator» 자리 모두 **«calculateur ICM»**(또는 «calculateur poker» — 문맥상 ICM이 아닐 때). 🔴 «calculatrice»·«simulateur» 금지.
- readnext·관련 글 카드의 **제목** = 대상 fr Post의 `title`(짧게 줄여도 됨):
  - 이 레인 5편 → 아래 확정 카피 `title`
  - 기존 fr(🅰 재작성 중): blind-meaning «Les blindes au poker : petite blinde et grosse blinde» · texas-holdem-rules-for-beginners «Comment jouer au Texas Hold'em quand on débute» · game-order «Comment jouer au Texas Hold'em : l'ordre du jeu» (🔴 C에서 🅰 머지 파일의 현재 title과 대조)
  - 🅱 hand-rankings «Combinaisons au poker : l'ordre des mains et qui bat quoi»(rank 브리프 확정 카피)
  - 🅲·🅳 (equity · pot-odds · probability · when-to-fold · starting-hands-chart · positions): A 시점 fr 브리프 없음 → B는 EN 카드 제목의 프랑스어 직역을 **임시**로 쓰고 진행 파일 «미결»에 적는다 → 🔴 C에서 머지된 파일의 title로 교체.
- 관련 글 그리드 카드의 대상 중 아직 fr이 없는 글도 **건다**(배포는 51편 머지 뒤 1회).

### 1-E. 원시 HTML 줄 (축어 · 스타일 문자열 한 글자도 바꾸지 마라)
- **관련 글 그리드**(`## Articles liés` 아래 `<div style="display:grid;…">`): href만 `/fr/blog/…`(도구는 `/fr/calculator`), 카드 안 글자(라벨·제목·설명 3줄)만 프랑스어. `onmouseover`/`onmouseout` 그대로.
- **크림 박스**(`<div style="background:rgba(255,248,210,0.10);…">` … `</div>`): 여는 줄·닫는 줄·**앞뒤 빈 줄**까지 EN 그대로(빈 줄이 없으면 마크다운 표가 안 그려진다).
- **tournament Day 1 타임라인(L213~245)·체크리스트(L297~314)**: `rgba(255,248,210,0.06)` 카드 + 중첩 `<div>` — 태그·스타일·줄 수 축어, 사람이 읽는 글자만 프랑스어(시각은 §1-C). 체크리스트 마지막 행의 주황 아이콘(`rgba(255,150,0,…)` · `!`) 그대로.
- 디렉티브(`:::stripe` · `:::note[…]:::` · `:::readnext`) = 형식 그대로, 사람이 읽는 글자만 번역. `:::stripe`의 `|` 왼쪽 수치 칸은 숫자 형식만 프랑스식(`10–15 %` · `$100+$9` · `20–40 min`).
- 이미지 줄 `![alt](path "title")`: path 축어, alt·title만 프랑스어. icm L117·bubble L71·short-stack L67의 이미지는 **다음 H2 바로 위**(EN 위치 그대로).

### 1-F. 모든 편 공통 금지
백틱 · `**` 중첩 · tldr 안 마크다운 · «guide complet / tout savoir / définition complète» · slug·이미지 변경 · vous · 본문 «suite» 단독 · **«tapis»를 stack 뜻으로**(§1-B 예외 2곳 외) · 산문 «jam» · **프랑스 카지노·대회·금액 창작**(EN 경험담에 장소가 없다 — «a Friday tournament»를 «un tournoi du vendredi» 이상으로 특정하지 마라 · € 환산 금지) · **합법성·세금 축**(tournament FAQ L342 · vs-cash FAQ L400은 확정 카피의 교체 문항으로) · 하이라이트 색 변경 · 경쟁사 이름(SERP 오류는 «흔한 오해»로도 새로 다루지 않는다 — EN에 없는 문단을 만들지 마라).
- **ICM 정의 중복 금지**(계획 §3-B ⑦): tournament · bubble · short-stack · vs-cash의 ICM 언급은 EN 분량 그대로 두되 **정의형 H2를 만들지 말고** 첫 등장에 `[ICM](/fr/blog/holdem-icm …)` 앵커. tags에 «icm» 금지(holdem-icm만).
- **도구 헤드 위임**(§3-B ⑪): «push or fold»·«tableau» 헤드는 tags·title·seoTitle에 쓰지 않는다(본문·H2 문구 일부·앵커는 허용).

### 1-G. 형제·도구 인용 (같은 사이트 안 같은 사실 · 축어)
- **stack effectif 정의**(short-stack 🆕 FAQ — 확정 카피에 있으면): 도구 `app/fr/calculator/dict.ts` L272 축어 «Tapis effectif (le plus petit des deux tapis)» → 글에서는 «le stack effectif (le « tapis effectif ») — le plus petit des deux stacks engagés»로. **새 수치 금지.**
- **M 존 이름·경계**: 도구 `dict.ts` L578~582(«💀 Zone morte < 1 · 🔴 Zone rouge 1–5 · 🟠 Zone orange 6–9 · 🟡 Zone jaune 10–19 · 🟢 Zone verte 20+»)와 short-stack EN 표 L77~81(«20+ / 10 to under 20 / 6 to under 10 / 1 to under 6 / under 1»)은 **같은 경계**다 — fr 표의 존 이름은 도구 라벨 축어, 경계 표현은 EN의 «to under»를 살려 «de 10 à moins de 20»처럼(«10–20»으로 줄이지 마라). 이모지는 EN 표의 것 그대로(EN 🟢🟡🟠⚠⚫ — 도구의 💀·🔴와 다르면 **EN 쪽**).
- **ICM 3인 예시**: icm(L67~93) · bubble(L53 «chips protecting a guaranteed cash»)·vs-cash(L103~112 $500/$300/$200)는 서로 다른 예시다 — 섞지 마라.
- **«chips ≠ money» 문장**: icm L21 · vs-cash L52·L56 · tournament L68이 같은 생각을 각자 말한다. 문장 축어 통일은 필요 없지만 **«jetons ≠ argent»의 단어 선택은 같게**(«Les jetons de tournoi ne sont pas de l'argent»).

### 1-H. 카피 확정 경위 (A-⑥)
- Fable 서브 1회(입력 = L-E 키워드 실측·PAA·자동완성 축어 · EN 메타/H2/H3/FAQ · §3-A 고정문·용어 · §3-B 금지 헤드 · posting.mdc «SEO 카피» 절 · L-E §7 처방 · 합법성/세금 FAQ 교체 지시). 출력을 각 편 «확정 카피»에 실었고 **Opus 조정 4건**만 가했다:
  1. icm tags «bubble factor poker» → «icm poker signification» (bubble factor 헤드는 holdem-bubble FAQ 7·H2 7 몫 — 태그 카니발 회피)
  2. icm tags «chip chop» → «chip chop poker» («chip chop» 단독 = 도구 계산기 열 이름 · 짝 토큰)
  3. bubble tags «risk premium poker» → «stratégie bulle poker» (risk premium 태그는 holdem-icm 하나로)
  4. tournament FAQ 🆕 «Que signifie MTT au poker ?» 유지 판정 — Fable은 «EN에 MTT 정의 없으면 빼라»고 조건을 달았으나 EN L127 형식 표 MTT 행이 있다(답 근거 확인)
- 글자 수 Opus 재측정(String.length): seoTitle 55~59 / 60 · desc 150~153 / 160 · title 66~74 · tldr 209~471(EN tldr 길이를 따른다 — EN bubble 404 · short-stack 470 · icm 404) · tags 9×5 — 초과 0.
- 훅 분리(Fable 공통 메모 축어 요지): tournament = «premier tournoi» · icm = «jetons ≠ ce qu'ils affichent» · bubble = «Ne fais plus la bulle» + «stack par stack» · short-stack = «Short stack en tournoi ?» + «15, 10 et 5 BB» · vs-cash = «Mêmes cartes, autre jeu». EN에서 겹치던 «chips ≠ money»(icm·vs-cash)는 icm만 가진다 — vs-cash는 H2 3에만 «jetons ≠ argent».
- 소유표 자가 점검: «icm» 태그 = holdem-icm에만 · «calcul(ateur)» = icm title·seoTitle·tags 0 · «push or fold / tableau» = 5편 seoTitle·title·tags 0(short-stack H2 2·6 · vs-cash H3 문구 일부만) · «tournoi de poker» 단독 헤드 0 · 도시·연도·freeroll·lexique 0 · 합법성·세금 0.
- 교체 FAQ 2건: tournament L342 합법성 → «Quel est le prix d'entrée pour un tournoi de poker ?»(PAA) · vs-cash L400 세금 → «Peut-on quitter une table de cash game à tout moment ?»(EN 본문 L262~271). 🆕 FAQ 4건: tournament MTT · bubble «faire la bulle» · short-stack «stack» · «tapis effectif». **모두 답 = EN 본문(또는 §1-G 도구 정의) 사실만.**

---
## holdem-tournament — EN updated 2026-10-01 · P2

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How Poker Tournaments Work — Buy-Ins, Formats & Day 1 |
| seoTitle | Never Played a Poker Tournament? Here's How It Works |
| desc | How do poker tournaments work? Buy-ins, blind structure, payout structure, freezeout vs PKO vs satellite formats, and a first-timer Day-1 checklist. |
| tldr | In a poker tournament you pay a fixed buy-in for chips, blinds increase on a timer until one player holds all chips. Top 10–15% of players cash. Formats include freezeout, PKO, satellite, and deepstack — enter via direct buy-in, satellite, or online pre-registration. |
| category · date · updated · readTime · emoji | tournament · 2026-06-16 · 2026-10-01 · 14 min · 🏆 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-tournament-hero.webp · Crowded live poker tournament floor with the blind clock showing 12,000/24,000 as players contest a hand |
| tags | how do poker tournaments work · poker tournament structure · poker tournament blind structure · poker tournament payout structure · types of poker tournaments · freezeout poker tournament · pko poker · satellite poker tournament · how to play tournament poker |

### 소유표 (계획 §3-B ⑩⑪⑦)
- **주인인 검색어**: PAA 4문(«Comment se déroule / fonctionne un tournoi de poker ?» · «Comment participer à un tournoi de poker ?» · «Quel est le prix (d'entrée) d'un tournoi de poker ?») · mtt poker 210 · itm poker 170 · bounty poker 90 · freezeout poker 50 · deepstack 30 · sng 30 · structure tournoi poker 20 · satellite poker 20 · table finale poker 20 · combien de temps dure un tournoi de poker(자동완성 7변형).
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «tournoi poker» 단독 정면(일정 의도 · SERP 81 % 비콘텐츠) · 도시·연도·calendrier·«près de»·freeroll · «organiser un tournoi de poker»(홈게임 개최) · icm(→ holdem-icm) · push or fold / tableau range tournoi(→ 도구) · lexique / termes(→ `/fr/glossary`) · 합법성.

### 구조 (EN L## · 축어 목록 — 본문은 EN 파일에서) — 표 5 · 본문 이미지 0 · HTML 카드 2 + 그리드 · FAQ 9
- L29~33 경험담 도입 3단락 → `---`
```
L37 [H] ### At a Glance
L39 [DIR] :::stripe
L43 [DIR] :::
L45 [H] ## What Is a Poker Tournament? (30-Second Answer)
L55 [H] ## Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks
L59 [표] | $109 buy-in (written as "$100+$9") | Where it goes |
L74 [H] ## Poker Tournament Blind Structure — Levels, Antes, and the Clock
L80 [표] | Level | Blinds | Antes | Your 10k stack = |
L99 [H] ## The 4 Stages Every Tournament Goes Through
L101 [H] ### Stage 1 — Early Levels (100–200 BB deep)
L104 [H] ### Stage 2 — Middle Stages (30–60 BB)
L107 [H] ### Stage 3 — The Bubble
L110 [H] ### Stage 4 — Final Table
L115 [H] ## Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More
L117 [표] | Format | How it works | Best for |
L134 [H] ### What Is a Freezeout Poker Tournament?
L138 [H] ### What Is PKO Poker? (Progressive Knockout)
L142 [H] ### What Is a Deepstack Poker Tournament?
L150 [H] ## What Is a Satellite Poker Tournament?
L167 [H] ## How to Enter a Poker Tournament — 3 Ways
L169 [H] ### Option A: Direct Buy-In at the Casino (Easiest)
L177 [H] ### Option B: Online Pre-Registration
L184 [H] ### Option C: Satellite Qualifier
L195 [H] ## How to Play Tournament Poker — Strategy by Stage
L209 [H] ## What Happens on Day 1 — Hour by Hour
L213 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L249 [H] ## Poker Tournament Payout Structure — Who Gets Paid What
L253 [표] | Field Size | Players Paid | Min-Cash (typical) | 1st Place (typical) |
L270 [H] ## Tournament Glossary — Terms You'll Hear on Day 1
L274 [표] | Term | What it means |
L295 [H] ## First Tournament Checklist
L297 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L318 [DIR] :::readnext[Keep reading]
L319 [CARD] /en/blog/holdem-tournament-vs-cash-game | Tournament vs Cash Game | /images/tournament-table-action.webp
L320 [CARD] /en/blog/holdem-bubble | What Is the Bubble in Poker? | /images/holdem-bubble-hero.webp
L321 [CARD] /en/blog/apt-incheon-2026-guide | APT Incheon 2026 Guide | /images/apt-incheon-2026-guide-hero.webp
L322 [DIR] :::
L324 [H] ## FAQ
L326 [Q] **Q. How long does a poker tournament last?**
L330 [Q] **Q. What is the difference between PKO and bounty tournaments?**
L334 [Q] **Q. What are the rules on rebuys and add-ons?**
L338 [Q] **Q. How do poker tournaments make money?**
L342 [Q] **Q. Is it legal to host a poker tournament at home?**
L346 [Q] **Q. What does ITM mean in poker?**
L350 [Q] **Q. Can you join a poker tournament after it has started?**
L354 [Q] **Q. Can you leave a poker tournament early and keep your chips?**
L358 [Q] **Q. Are poker tournaments more luck or skill?**
L364 [H] ## Related Guides
L366 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L367 [GRID] /en/blog/holdem-tournament-vs-cash-game
L372 [GRID] /en/blog/holdem-starting-hands-chart
L377 [GRID] /en/blog/holdem-short-stack
L382 [GRID] /en/blog/texas-holdem-rules-for-beginners
L387 [GRID] /en/blog/holdem-blind-meaning
L392 [GRID] /en/blog/holdem-positions
```
- `:::stripe` 3행(L40~42): `10–15% | of the field typically gets paid` / `20–40 min | per blind level live (60+ at flagship Mains)` / `$100+$9 | how a typical buy-in splits — prize pool + fee`
- 형식 표 L117 = 3열 · **10행** · 용어 표 L274 = 2열 · **16행**(`|------|` 구분선 형식 그대로) · L89·L163 `==g:…==` 강조 문단.
- 🔴 L191 문장 삭제 · L321 readnext 대체(§1-D).

### 링크
- L51 holdem-tournament-vs-cash-game(thumb `/images/tournament-table-action.webp`) · L64 holdem-rake · L91 holdem-short-stack · L95 holdem-blind-meaning · L108 holdem-bubble · L111 holdem-icm(thumb) · 🔴 L191 apt-incheon(삭제) · L199 holdem-starting-hands-chart · L203 holdem-short-stack · L272 holdem-glossary
- readnext L319~321: tournament-vs-cash-game(`/images/tournament-table-action.webp`) · bubble(`/images/holdem-bubble-hero.webp`) · 🔴 apt-incheon → **holdem-icm**(`/images/holdem-icm-hero.webp`)
- 관련 글 그리드 L367~396(라벨 · 제목 · 설명): tournament-vs-cash-game(Deep Dive · Tournament vs Cash Game · Chip value, rising blinds, ICM — which format fits you) · starting-hands-chart(Strategy · Starting Hands Chart · Which hands to play in early levels) · short-stack(Short Stack · Short-Stack Strategy · Push-or-fold when the blinds close in) · texas-holdem-rules-for-beginners(Start Here · Texas Hold'em Rules for Beginners · Master the basics first) · blind-meaning(Blinds · What Are the Blinds in Poker? · Blind levels start here — SB, BB, and antes) · positions(Positions · Poker Table Positions Explained · Why your seat drives every tournament decision)

### 키워드·SERP 요지 (L-E §1·§3-2~3-5·§4-2·§7-2·§8-①)
- «tournoi (de) poker» 1 900 = **일정 의도**(자동완성 30/30 도시·연도 · 유기 16자리 중 콘텐츠 3) → 헤드 정면이 아니라 **PAA 문장**으로 들어간다. PAA 8문 중 4문이 구조형.
- 상위 콘텐츠(PokerStars.fr 구조 글 · PokerPro 8 conseils · GG 단계별 · PokerNews 단계): 구조 6요소 · 5단계 표 · 형식 종류는 있으나 **등록 방법·Day 1·체크리스트 0편** · 지급 구조 수치 0 · PokerStars 구조 글 블라인드 «50/1 000» 오기 · GG 자동번역 문체.
- **우리가 더 줄 것 3**: ① 1인칭 첫 대회 + 시간대별 Day 1 타임라인(경쟁 0) ② 블라인드 표로 «칩을 잃지 않았는데 200BB → 10BB» ③ 실제 지급 사례(WPT Seminole 2024) + 16개 용어표 + 체크리스트.
- 흔한 표현(본문 용어 재료): «inscription tardive» · «réinscription/réentrée» · «overlay» · «cagnotte» · «primes progressives» · 레벨 «turbo · hyper turbo».

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (66) : Comment fonctionne un tournoi de poker ? Buy-in, formats et Jour 1
- **seoTitle** (58) : Ton premier tournoi de poker ? Voici comment ça se déroule
- **desc** (152) : Ton premier tournoi approche ? Buy-in, blindes, paliers de gains, freezeout, PKO, satellite : comment se déroule un tournoi de poker, du Jour 1 à l'ITM.
- **tldr** (371) : Dans un tournoi de poker, tu paies un buy-in fixe (le droit d'entrée) contre des jetons, puis les blindes montent à l'horloge jusqu'à ce qu'un seul joueur ait tous les jetons. Seuls 10–15 % des joueurs finissent dans l'argent (ITM). Les formats vont du freezeout au PKO, au satellite et au deepstack ; tu t'inscris par buy-in direct, par satellite ou en ligne à l'avance.
- **tags** (9) : "comment se déroule un tournoi de poker", "comment fonctionne un tournoi de poker", "comment participer à un tournoi de poker", "structure tournoi poker", "mtt poker", "itm poker", "freezeout poker", "bounty poker", "satellite poker"

#### H2 (질문형 10/12 = 83 %)
| # | EN H2 (L##) | fr H2 | 형 |
|---|---|---|---|
| 1 | L45 What Is a Poker Tournament? (30-Second Answer) | Comment se déroule un tournoi de poker ? (réponse en 30 secondes) | Q |
| 2 | L55 Poker Tournament Structure — Buy-Ins, Fees, and Starting Stacks | Quel est le prix d'un tournoi de poker ? Buy-in, frais et stack de départ | Q |
| 3 | L74 Poker Tournament Blind Structure — Levels, Antes, and the Clock | Comment lire la feuille de structure ? Niveaux de blindes, antes et horloge | Q |
| 4 | L99 The 4 Stages Every Tournament Goes Through | Quelles sont les 4 phases d'un tournoi de poker ? | Q |
| 5 | L115 Types of Poker Tournaments — Freezeout, PKO, Satellite, Deepstack & More | C'est quoi un MTT ? Freezeout, KO progressif (bounty), satellite, deepstack… | Q |
| 6 | L150 What Is a Satellite Poker Tournament? | C'est quoi un satellite au poker ? | Q |
| 7 | L167 How to Enter a Poker Tournament — 3 Ways | Comment participer à un tournoi de poker ? 3 façons de s'inscrire | Q |
| 8 | L195 How to Play Tournament Poker — Strategy by Stage | Comment bien jouer un tournoi de poker ? La stratégie phase par phase | Q |
| 9 | L209 What Happens on Day 1 — Hour by Hour | Que se passe-t-il le Jour 1 ? Heure par heure | Q |
| 10 | L249 Poker Tournament Payout Structure — Who Gets Paid What | Que signifie être ITM au poker ? Structure des gains et paliers | Q |
| 11 | L270 Tournament Glossary — Terms You'll Hear on Day 1 | Les mots du tournoi que tu entendras dès le Jour 1 | – |
| 12 | L295 First Tournament Checklist | Ta checklist pour un premier tournoi | – |
| — | L324 FAQ · L364 Related Guides | ## FAQ · ## Articles liés | 고정 |

#### H3
| EN H3 | fr H3 |
|---|---|
| L37 At a Glance | En bref |
| L101 Stage 1 — Early Levels (100–200 BB deep) | Phase 1 — Les premiers niveaux (100–200 BB de profondeur) |
| L104 Stage 2 — Middle Stages (30–60 BB) | Phase 2 — Le milieu de tournoi (30–60 BB) |
| L107 Stage 3 — The Bubble | Phase 3 — La bulle |
| L110 Stage 4 — Final Table | Phase 4 — La table finale |
| L134 What Is a Freezeout Poker Tournament? | C'est quoi un tournoi freezeout ? |
| L138 What Is PKO Poker? (Progressive Knockout) | C'est quoi un PKO (KO progressif) ? |
| L142 What Is a Deepstack Poker Tournament? | C'est quoi un tournoi deepstack ? |
| L169 Option A: Direct Buy-In at the Casino (Easiest) | Option A : le buy-in direct au casino (le plus simple) |
| L177 Option B: Online Pre-Registration | Option B : l'inscription en ligne à l'avance |
| L184 Option C: Satellite Qualifier | Option C : la qualification par satellite |

#### FAQ (EN 9 · 교체 1 · 🆕 1)
| # | EN Q (L##) | fr Q |
|---|---|---|
| 1 | L326 How long does a poker tournament last? | Combien de temps dure un tournoi de poker ? |
| 2 | L330 What is the difference between PKO and bounty tournaments? | Quelle est la différence entre un PKO et un tournoi bounty ? |
| 3 | L334 What are the rules on rebuys and add-ons? | Quelles sont les règles des recaves (rebuy) et des add-ons ? |
| 4 | L338 How do poker tournaments make money? | Comment la salle gagne-t-elle de l'argent sur un tournoi de poker ? |
| 5 | L342 Is it legal to host a poker tournament at home? → 🔴 **교체** | Quel est le prix d'entrée pour un tournoi de poker ? — 답 = EN 본문 L59~66 사실만($109 = $100 prize pool + $9 frais · 큰 라이브 이벤트 8–10 % · 일일 토너먼트는 더 높을 수 있다 · 스택은 현금 가치 없음). 합법성 문장 0 |
| 6 | L346 What does ITM mean in poker? | Que veut dire ITM au poker ? |
| 7 | L350 Can you join a poker tournament after it has started? | Peut-on rejoindre un tournoi de poker déjà commencé ? |
| 8 | L354 Can you leave a poker tournament early and keep your chips? | Peut-on quitter un tournoi de poker en cours et garder ses jetons ? |
| 9 | L358 Are poker tournaments more luck or skill? | Gagner un tournoi de poker, c'est de la chance ou du skill ? |
| 🆕 | — (PAA «Que signifie MTT au poker ?» · mtt poker 210) | Que signifie MTT au poker ? — 답 = EN 형식 표 L127 «Multi-Table Tournament — large field across many tables · the most common format» + L130 «Freezeout MTT» 권고만. 마지막 문항으로 |

#### 키워드 흡수
- PAA «se déroule / fonctionne / participer / prix» → seoTitle · title · H2 1·2·7 · FAQ 5 · tags 3 · 🔴 «tournoi de poker» 단독 헤드 0
- mtt poker 210 · mtt definition 20 → H2 5 · FAQ 🆕 · tag · itm poker 170 → H2 10 · FAQ 6 · desc · tag · bounty 90 · ko progressif → H2 5 · H3 PKO · FAQ 2 · tag
- freezeout 50 · deepstack 30 · satellite 20 → H3 · H2 6 · tags · structure tournoi poker 20 → H2 3 · tag · table finale 20 → H3 Phase 4
- stratégie tournoi poker 20 · comment bien jouer / gagner 10 → H2 8 · FAQ 9 · combien de temps dure(자동완성 7변형) → FAQ 1 축어 · rebuy / re-entry → FAQ 3

### §13 자리 (C 전사 대조·손검산 — 카드 0 · 수치만)
- L29 $200 · 4시간(L31)
- L40~42 stripe 10–15% · 20–40 min · 60+ · $100+$9
- L59~64 $109 = $100 + $9 · 8–10% · L66 10,000~50,000칩 · 100–300 BB · L68 10,000칩 ≠ $10,000
- L78 20–40분 · 60분+ · WPT Australia 2026 60분 → 후반 90분(🔴 EN 시제 «ran» = 과거 — fr도 과거)
- L80~87 표: 25/50 → 200BB · 75/150(ante 150) → 67BB · 200/400(400) → 25BB · 500/1,000(1,000) → 10BB (검산 10 000/150 = 66,7 ✅)
- L89 20 / 15 / 10 big blinds · L101~111 100–200 BB · 30–60 BB · 6–9명
- L140 PKO 50/50 · L155~159 $10,000 · $500 × 20명 = 1석 ✅ · L161 $5 → $55 → $215 → $1,050
- L189 1–3시간 · L199~203 100BB+ · 30–60BB · under 20BB
- L211~245 $300 freezeout · 10,000칩 · 시각 7행 · 25/50 · 200BB · ~40% · 1시간
- L251~258 표 4행 (100 → ~13 · 500 → ~60 · 2,000 → ~250 · 10,000 → ~1,200 · 배수·% 전부)
- L260~264 WPT Seminole Rock 'N' Roll Poker Open Championship 2024 · $3,500 · 1,435 entries · $4,592,000 ($3,200 × 1,435 = 4 592 000 ✅) · 180명(12,54 % ✅ ~12,5 %) · 1.83x · $662,200(14,42 % ✅ ~14 %)
- L301 buy-in + 20% · L304 6–12시간 · L309 30–45분
- FAQ L328 4–8시간 · 4–6일 · L340 8–10% · L348 200명·25명·175명 탈락 ✅ · 1.5–2x · L352 2~4시간
- tldr «Top 10–15%»

### 경험담 자리 (EN 축어 → 프랑스 독자 맥락으로 다시 쓰되 없는 사실 금지)
- **L29** I walked into my first live poker tournament with $200, a vague idea of how Texas Hold'em worked, and zero clue what a "blind level" or "bubble" meant.
- **L31** Four hours later I was out. But I knew exactly what every term meant, why I lost, and when to come back.
- **L33** This guide is everything I wish someone had told me before that day — how tournament structure actually works, which format you're entering, how to register without looking clueless, and what Day 1 feels like hour by hour.
→ fr: 1인칭 유지 · $200·4시간 그대로 · 장소 특정 금지(EN에 없다 — 프랑스 카지노 이름 금지).

### 하지 말 것
- L140 «(A full PKO strategy guide is coming to this cluster soon.)» — EN 약속문. **그대로 옮긴다**(EN 패리티).
- L179·L185 브랜드·앱 이름(WSOP LIVE · Caesars Rewards · PokerStars «Events»·«Live» 탭 · Power Path · GGPoker) 축어 — 프랑스 이용 가능성 논평(ANJ 등)을 붙이지 마라.
- FAQ L342 합법성 → 확정 카피의 교체 문항(답 = EN 본문 사실만).
- L274 용어표 «Shove / JAM» 행 → «Shove / faire tapis» — 산문에서 jam 금지.
- tldr «Top 10–15% of players cash» 수치 그대로(«10–15 %»).
- 「4 stages」 = 4단계 유지. SERP 경쟁 글의 5단계(ITM 단계)를 더하지 마라.

---
## holdem-icm — EN updated 2026-09-09 · P1

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | What Is ICM in Poker? The Independent Chip Model, Explained |
| seoTitle | Your Chips Aren't Worth Face Value — ICM in Poker |
| desc | In a tournament your chips aren't cash — winning only pays first. ICM (the Independent Chip Model) turns your stack into real prize money. Here's how it works. |
| tldr | ICM (Independent Chip Model) converts your tournament chip stack into its real prize-money value, using the payouts and everyone's stacks. Because you only win one first prize, doubling your chips never doubles your money — so the chip leader's stack is worth less than its chip share, and short stacks are worth more. That gap is why you fold hands on the bubble that would be easy calls in a cash game. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-09 · 13 min · 🏆 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-icm-hero.webp · Final-table poker chips stacked in front of a payout ladder, showing that a bigger chip stack does not convert one-to-one into a bigger share of the prize money |
| tags | poker icm · what is icm in poker · icm poker meaning · icm vs chip ev · icm deal · chip chop vs icm · how is icm calculated · icm poker strategy |

### 소유표 (계획 §3-B ⑦)
- **주인인 검색어**: **icm poker 480**(정의·개념) · icm poker def 40 · icm au poker 30 · risk premium poker 30 · icm poker deal 10 · 자동완성 «icm poker signification / définition / c est quoi l icm poker / qu est ce que l icm poker» · PAA «Que signifie ICM au poker ?» «Comment calculer l'ICM au poker ?» «C'est quoi l'ICM ?».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «calculateur ICM» · «calcul icm poker» · «icm poker calculator»(→ `/fr/calculator` · H2 «Comment calculer l'ICM au poker ?»는 손계산법이라 허용) · push or fold · «tableau ICM».
- 앵커: 본문 `/fr/calculator` 링크 4곳(L93 · L148 · L227 · 그리드)의 앵커 = «calculateur ICM»(§1-D). 도구 쪽 역앵커(icmGuide → holdem-icm)는 배포 회차(헤드).

### 구조 (EN L## · 축어 목록) — 표 3(전부 크림 박스 래퍼) · 본문 이미지 1 · FAQ 8
- L19 경험담 · L21 `==…==` 강조 도입 · L23 필라 링크 문장 → `---`
```
L27 [H] ### ICM at a glance
L29 [DIR] :::stripe
L33 [DIR] :::
L37 [H] ## What Is ICM in Poker?
L47 [H] ## Why Your Chips Aren't Worth Their Face Value in Money
L57 [H] ## How Is ICM Calculated? (The Malmuth–Harville Model)
L69 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L71 [표] | Finish | Leader (5,000 · 50%) | Middle (3,000 · 30%) | Short (2,000 · 20%) |
L83 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L85 [표] | Player | Chip % | ICM value | ICM % | vs chips |
L97 [H] ## ICM vs Chip EV — What's the Difference?
L107 [H] ## The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps
L117 [IMG] ![A medium tournament stack folding to a big stack's shove on the money bubble, chips and a payout ladder in view — the moment ICM pressure turns a normal call into a fol…
L119 [H] ## Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls
L132 [H] ## ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool
L138 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L140 [표] | Player | Chip chop | ICM deal | Difference |
L152 [H] ## When Does ICM Matter Most — and When Should You Ignore It?
L170 [H] ## How Accurate Is ICM? Its Limitations
L182 [DIR] :::readnext[Keep reading]
L183 [CARD] /en/blog/holdem-tournament | Texas Hold'em Tournament Strategy | /images/holdem-tournament-hero.webp
L184 [CARD] /en/blog/holdem-equity | Poker Equity Explained | /images/holdem-equity-hero.webp
L185 [DIR] :::
L187 [H] ## FAQ
L189 [Q] **Q. What is ICM in poker?**
L193 [Q] **Q. How is ICM calculated?**
L197 [Q] **Q. What's the difference between ICM and chip EV?**
L201 [Q] **Q. What is an ICM deal, and how is it different from a chip chop?**
L205 [Q] **Q. Does ICM apply to cash games?**
L209 [Q] **Q. When should I ignore ICM?**
L213 [Q] **Q. What are the most common ICM mistakes?**
L217 [Q] **Q. Who invented ICM?**
L223 [H] ## The 3 Things to Remember
L233 [H] ## Related Posts
L235 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L236 [GRID] /en/blog/holdem-tournament
L241 [GRID] /en/blog/holdem-tournament-vs-cash-game
L246 [GRID] /en/blog/holdem-equity
L251 [GRID] /en/calculator
```
- `:::stripe` 3행(L30~32): `chips ≠ money | You win only one first prize` / `chip leader | worth LESS than their chip share` / `short stack | worth MORE than their chip share`
- L57 H2 아래 불릿 3(L63~65 재귀 규칙) · 래퍼 표 L69~77(4열 · 3행) · L79 재귀 산식 단락 · 래퍼 표 L83~91(5열 · 3행 · `==$38.39==` `==r:−11.6==` `==g:+2.8==` `==g:+8.9==`) · 래퍼 표 L138~146(4열 · 3행 · `==$618==` `==r:−$132==` `==g:+$35==` `==$397==` `==g:+$97==`)

### 링크
- L23 holdem-tournament(thumb `/images/holdem-tournament-hero.webp`) · L43 holdem-tournament-vs-cash-game(thumb `/images/tournament-table-action.webp`) · L93 `/fr/calculator`(«calculateur ICM») · L99 holdem-equity(thumb `/images/holdem-equity-hero.webp`) · L125 holdem-3bet · L148 `/fr/calculator` · L156 holdem-bubble(thumb) · L227 `/fr/calculator` · L229 holdem-tournament · holdem-equity · holdem-pot-odds
- readnext L183~184: holdem-tournament(`/images/holdem-tournament-hero.webp`) · holdem-equity(`/images/holdem-equity-hero.webp`) — 제목 = 대상 fr title(§1-D)
- 관련 글 그리드 L236~255: holdem-tournament(Tournament · Texas Hold'em Tournament Strategy · The pillar ICM belongs to) · holdem-tournament-vs-cash-game(Tournament · Tournament vs Cash Game · Why ICM never applies to cash) · holdem-equity(Strategy · Poker Equity Explained · Chip EV is just equity in chips) · `/fr/calculator`(Free Tool · ICM Calculator · Run your own stacks and deals) — 카드 제목 «ICM Calculator» → «Calculateur ICM» · 라벨 «Free Tool» → «Outil gratuit»
- 🟡 EN-먼저 후보(ms 선례 승계): readnext L183·그리드 L238의 «Texas Hold'em Tournament Strategy»는 대상 글 실제 title과 다르다 → fr은 대상 fr title로 쓴다(진행 파일 «EN-먼저 후보»).

### 키워드·SERP 요지 (L-E §1·§3-1·§4-1·§7-1·§8-②)
- «icm poker» 480 = **정보형 SERP**(유기 9 중 정보형 8 · 계산기 1) · AIO·FS 없음 · KG «Independent Chip Model» · 상위 제목 7 중 6이 «ICM au poker».
- 상위 글: PokerStars.fr(결과 표 · Cash vs Tournoi 대비표 · Bubble Factor·Payjump(palier de gains) 용어 · FAQ 5 · **계산 과정 0**) · 위키(수식 전개 유일 · 칩 50/30/20 · 지급 70/30) · PokerPro(예시 결과 숫자 **누락**) · PokerListings(결과만 · «calculateur» 위임).
- **우리가 더 줄 것 3**: ① $50/$30/$20 3인 재귀를 손으로 푼 표 2개(경쟁 0) ② deal ICM vs chip chop 금액 비교(+$97) ③ 1인칭 버블 실수 + «세금은 call에 붙는다» 교정.
- 🪶 선택(B 판단 · 넣으면 1줄): «위키와 같은 칩 분포(50/30/20 %)라도 지급이 70/30 두 자리면 45,18 / 32,25 / 22,57로 바뀐다 — 지급 구조가 값을 정한다». 값은 A에서 Malmuth–Harville로 검산 ✅(P2 리더 0,3393 · 미들 0,375). 넣으면 진행 파일 «현지 추가»에 적는다. 출처 링크 없음(위키 이름도 쓰지 않는다).

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (74) : ICM au poker : l'Independent Chip Model expliqué, avec l'exemple à la main
- **seoTitle** (59) : Tes jetons ne valent pas ce qu'ils affichent — ICM au poker
- **desc** (153) : Doubler ton stack en tournoi ne double jamais tes gains. L'ICM au poker (Independent Chip Model) traduit tes jetons en argent réel : le calcul à la main.
- **tldr** (448) : L'ICM (Independent Chip Model) convertit ton stack de tournoi en sa vraie valeur en argent, à partir de la structure des gains et des stacks de chaque joueur. Comme il n'y a qu'une première place à gagner, doubler tes jetons ne double jamais tes gains : le stack du chip leader vaut moins que sa part de jetons, et les short stacks valent plus. C'est cet écart qui te fait coucher sur la bulle des mains que tu paierais sans réfléchir en cash game.
- **tags** (9) : "icm poker", "icm au poker", "icm poker définition", "icm poker signification", "independent chip model", "icm vs chip ev", "deal icm", "chip chop poker", "risk premium poker"

#### H2 (질문형 9/9 = 100 %)
| # | EN H2 (L##) | fr H2 | 형 |
|---|---|---|---|
| 1 | L37 What Is ICM in Poker? | Que signifie ICM au poker ? | Q |
| 2 | L47 Why Your Chips Aren't Worth Their Face Value in Money | Pourquoi tes jetons ne valent pas leur valeur faciale en argent ? | Q |
| 3 | L57 How Is ICM Calculated? (The Malmuth–Harville Model) | Comment calculer l'ICM au poker ? (le modèle Malmuth–Harville) | Q |
| 4 | L97 ICM vs Chip EV — What's the Difference? | ICM ou chip EV (cEV vs $EV) : quelle différence ? | Q |
| 5 | L107 The "ICM Tax": Why Losing Chips Hurts More Than Winning Helps | Pourquoi perdre des jetons fait plus mal que d'en gagner ? La « taxe ICM » | Q |
| 6 | L119 Bubble Factor & Risk Premium: How ICM Changes Your Shoves and Calls | Bubble factor, risk premium et payjump (palier de gains) : comment l'ICM change tes shoves et tes calls ? | Q |
| 7 | L132 ICM Deal vs Chip Chop: How to Split a Final-Table Prize Pool | Deal ICM ou chip chop : comment partager le prize pool d'une table finale ? | Q |
| 8 | L152 When Does ICM Matter Most — and When Should You Ignore It? | Quand l'ICM compte-t-il le plus, et quand peux-tu l'ignorer ? | Q |
| 9 | L170 How Accurate Is ICM? Its Limitations | L'ICM est-il fiable ? Ses limites | Q |
| — | L187 FAQ · L223 The 3 Things to Remember · L233 Related Posts | ## FAQ · ## À retenir · ## Articles liés | 고정 |

- H2 6의 «payjump (palier de gains)»는 EN 본문 «pay jump»(L121 «spikes right before every pay jump») 자리에서 받는다 — 새 사실 아님.

#### H3
| EN H3 | fr H3 |
|---|---|
| L27 ICM at a glance | L'ICM en bref |

#### FAQ (EN 8)
| # | EN Q (L##) | fr Q |
|---|---|---|
| 1 | L189 What is ICM in poker? | C'est quoi l'ICM au poker ? |
| 2 | L193 How is ICM calculated? | Comment se calcule l'ICM ? |
| 3 | L197 What's the difference between ICM and chip EV? | Quelle est la différence entre l'ICM et le chip EV ? |
| 4 | L201 What is an ICM deal, and how is it different from a chip chop? | C'est quoi un deal ICM, et en quoi diffère-t-il d'un chip chop ? |
| 5 | L205 Does ICM apply to cash games? | L'ICM s'applique-t-il en cash game ? |
| 6 | L209 When should I ignore ICM? | Quand faut-il ignorer l'ICM ? |
| 7 | L213 What are the most common ICM mistakes? | Quelles sont les erreurs ICM les plus fréquentes ? |
| 8 | L217 Who invented ICM? | Qui a inventé l'ICM ? |

#### 키워드 흡수
- icm poker 480 · icm au poker 30 → seoTitle 꼬리 · title 머리 · H2 1·3 · tags
- icm poker def 40 · signification / définition / c est quoi(자동완성) → H2 1 «Que signifie» · FAQ 1 «C'est quoi» · tags «définition»·«signification»(세 어형 분산)
- risk premium poker 30 → H2 6 · tag (bubble factor 태그는 holdem-bubble 몫) · icm poker deal 10 → H2 7 · FAQ 4 · tags «deal icm»·«chip chop poker»
- icm calcul 10 → H2 3(PAA 축어 · 손계산) · desc «le calcul à la main» — 🔴 title·seoTitle·tags «calcul(ateur)» 0회(도구 소유)
- independent chip model → title · desc · tag

### §13 자리 (카드 0 · 핸드 명칭 2 · 수치)
- L19 «pocket jacks»(paire de valets) vs «ace-ten»(as-dix) · 4명 남음 · 3명 지급
- L49 $50 / $30 / $20 · $20 보장
- L63~65 재귀 규칙
- L67 $50 / $30 / $20 ($100 pool) · 표 L71~75: 5,000(50%) · 3,000(30%) · 2,000(20%) · 1st 50.0/30.0/20.0 · 2nd 33.9/37.5/28.6 · 3rd 16.1/32.5/51.4 (재계산 ✅ 전 칸)
- L79 30% · 5,000/7,000 = 71.4% · 0.30 × 0.714 = 21.4% · 20% · 5,000/8,000 = 62.5% · 0.20 × 0.625 = 12.5% · 합 33.9% ✅
- L85~89 표: $38.39 / 38.4% / −11.6 · $32.75 / 32.8% / +2.8 · $28.86 / 28.9% / +8.9 (재계산 ✅)
- L93 half the chips ↔ 38.4% · 20% ↔ 28.9% · L109 50% vs 38.4% = 11.6포인트 · L111 40% → 48-50%(EN 하이픈 축어 → «48-50 %»)
- L121 bubble factor 1.0 · 1.5 · 1.5×
- L136~144 $1,500 · $900/$400/$200 · 표 $750/$618/−$132 · $450/$485/+$35 · $300/$397/+$97 (재계산 ✅ 617,9 · 485,0 · 397,1) · L148 $97
- L175 3-big-blind stack · L178 «a large 2025 study» · FAQ L195 «your stack ÷ total chips»

### 경험담 자리 (EN 축어)
- **L19** The first time ICM cost me money, I didn't even know it existed. Four of us left, three getting paid, and I looked down at pocket jacks with a middling stack. I shoved, the chip leader called with ace-ten, and I busted on the bubble for nothing. ==For years I filed that away as proof the shove was wrong. It wasn't== — I just had no idea *where* a bubble actually charges you, and that turns out to be the single most important idea in tournament poker.
- **L103**(교정 회고) That is where I had those jacks backwards. The tax is charged on the *call*, and the mirror of that is what makes a bubble playable: because everyone's calling range tightens, your fold equity is worth **more** than it is in chips. First-in shoving is the middle stack's weapon on a bubble, not its leak — I ran into the one player who could call widest, which is variance, not a strategy error. ==Chip EV asks "will this build my stack?" ICM asks "will this build my bankroll?"== — and only the second one pays out.
→ fr: L19와 L103은 **한 이야기**다(«shove가 틀린 줄 알았다 → 아니었다, 세금은 call에 붙는다»). 🔴 두 자리의 결론을 뒤집지 마라 — «shove가 실수였다»로 옮기면 D유형. «I busted on the bubble» = «j'ai fait la bulle»(§1-B 관용) 사용 가능. 이탤릭 `*…*` 유지.

### 하지 말 것 (되돌리지 마라 · EN 확정 문구)
- L101 괄호 «(the guaranteed minimum itself stays yours; on the bubble, where nothing is locked in yet, it costs everything)» — 버블 전/후 구분 단서. **빼지 마라.**
- L134·FAQ L203 «In its simplest form a chip chop…» + FAQ «middle version that first sets aside the payout each player has already locked up» — 뉘앙스 축어.
- L158·L164 «multi-seat satellite … (a winner-take-all satellite is played for first on chip EV)» · «Heads-up for the title, where only two prizes remain» — 조건 단서 유지.
- L175 괄호(3bb 버튼 vs BB 설명) 축어 · L178 «a large 2025 study … underestimate big stacks and overestimate short stacks» — 출처 링크 없음 · EN 그대로(보태지 마라).

---
## holdem-bubble — EN updated 2026-09-13 · P4

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Play the Bubble in Poker — Big, Medium & Short Stack Strategy |
| seoTitle | How to Play the Bubble in Poker (Stack by Stack) |
| desc | On the bubble, survival beats chips — so the right play flips. How to play a big, medium, or short stack, plus bubble factor, satellites, and hand-for-hand. |
| tldr | The bubble is the spot right before the money, where one more elimination pays everyone else. Because busting means winning nothing, survival is worth more than the chips you'd gain — so calling ranges tighten hard while shoving stays wide. Big stacks attack, medium stacks are the most trapped (not short stacks), and on a multi-seat satellite bubble you fold everything, even aces, once your seat is locked. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-13 · 13 min · 🫧 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-bubble-hero.webp · A short chip stack and a towering big stack across a tournament table on the money bubble, a payout ladder in the background — the moment survival becomes worth more than chips |
| tags | poker bubble · how to play the bubble · bubble strategy poker · bubble factor · short stack bubble · money bubble · satellite bubble · hand for hand poker |

### 소유표 (계획 §3-B ⑦)
- **주인인 검색어**: bulle poker 20 · bubble poker 10 · faire la bulle poker 10 · bubble factor poker 10 · 자동완성 «bulle tournoi poker / bulle poker c est quoi / faire la bulle au poker / poker bulle definition / poker bubble boy» · PAA «Qu'est-ce que la bulle au poker ?».
- **쓰면 안 되는 헤드**: icm(정의 H2 금지 — L51 H2는 «pourquoi la bulle change tout» 축) · calculateur ICM · push or fold.
- 🪶 도구 icmGuide H2 «… un exemple de bulle en 3 minutes»(`/fr/calculator`)와는 축이 다르다(도구 = calculateur · 글 = 정의·전략) — 본문 L55·L131 `/fr/calculator` 앵커 «calculateur ICM».

### 구조 (EN L## · 축어 목록) — 표 1(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 · L23 ICM·tournament 링크 문장 → `---`
```
L27 [H] ### The bubble in one glance
L29 [DIR] :::stripe
L33 [DIR] :::
L37 [H] ## What Is the Bubble in Poker? (And "On the Bubble")
L51 [H] ## Why the Bubble Changes Everything: ICM in One Paragraph
L59 [H] ## The 3 Bubbles You'll Face: Money vs Final-Table vs Satellite
L71 [IMG] ![ICM pressure infographic — a towering big chip stack looms over a short stack on the money bubble](/images/holdem-bubble-pressure.webp "On the bubble ICM pressure lets …
L73 [H] ## How to Play a BIG Stack on the Bubble
L85 [H] ## How to Play a MEDIUM Stack on the Bubble
L99 [H] ## How to Play a SHORT Stack on the Bubble
L111 [H] ## Bubble Factor & Risk Premium: The Number That Tells You When to Fold
L117 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L119 [표] | Bubble factor | Losing hurts… | Equity you need (no dead money) |
L135 [H] ## Hand-for-Hand and Stalling: The Mechanics Nobody Explains
L145 [H] ## The Satellite Bubble: When to Fold Aces
L157 [H] ## The Biggest Bubble Mistake: Playing for the Min-Cash
L165 [DIR] :::readnext[Keep reading]
L166 [CARD] /en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp
L167 [CARD] /en/blog/holdem-when-to-fold | When to Fold in Poker | /images/holdem-when-to-fold-hero.webp
L168 [DIR] :::
L170 [H] ## FAQ
L172 [Q] **Q. What does "on the bubble" mean in poker?**
L176 [Q] **Q. Who is the bubble boy in poker?**
L180 [Q] **Q. What is a stone bubble vs a soft bubble?**
L184 [Q] **Q. What does it mean to "pay the bubble" or burst the bubble?**
L188 [Q] **Q. Should you fold on the bubble?**
L192 [Q] **Q. Do short stacks feel the most bubble pressure?**
L196 [Q] **Q. What is the bubble factor in poker?**
L200 [Q] **Q. What is hand-for-hand play?**
L204 [Q] **Q. Why would you fold aces on a satellite bubble?**
L210 [H] ## The 3 Things to Remember
L220 [H] ## Related Posts
L222 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L223 [GRID] /en/blog/holdem-icm
L228 [GRID] /en/blog/holdem-tournament
L233 [GRID] /en/blog/holdem-when-to-fold
L238 [GRID] /en/calculator
```
- `:::stripe` 3행(L30~32): `1 bust-out | pays everyone else — survival spikes in value` / `tighten calls | keep shoves wide` / `medium stack | the most trapped, not the short stack`
- L37 H2 용어 불릿 3(`==**On the bubble**==` 식) · L59 불릿 3 · L73·L85·L99 각 불릿 3 · L115 산식 단락 · 래퍼 표 L117~127(3열 · 5행) · L135·L145 불릿 3

### 링크
- L23 holdem-icm(thumb `/images/holdem-icm-hero.webp`) · holdem-tournament(thumb `/images/holdem-tournament-hero.webp`) · L55 `/fr/calculator`(«calculateur ICM») · holdem-icm · L77 holdem-3bet · L101 holdem-short-stack(thumb `/images/holdem-short-stack-hero.webp`) · L103 holdem-when-to-fold · L131 `/fr/calculator` · L216 holdem-icm · holdem-when-to-fold
- readnext L166~167: holdem-icm(`/images/holdem-icm-hero.webp`) · holdem-when-to-fold(`/images/holdem-when-to-fold-hero.webp`) — when-to-fold 제목은 §1-D 임시 규칙
- 관련 글 그리드 L223~242: holdem-icm(Tournament · ICM Explained · The math behind why the bubble matters) · holdem-tournament(Tournament · Tournament Strategy · The pillar the bubble belongs to) · holdem-when-to-fold(Strategy · When to Fold in Poker · The discipline the bubble demands) · `/fr/calculator`(Free Tool · ICM Calculator · Find your real bubble-factor number)

### 키워드·SERP 요지 (L-E §1·§3-6·§4-3·§7-4)
- «bulle poker»: **버블 전략 본문 글 0/8**(사전 · 영상 기사 · reddit 자동번역 · 동명 선수 · 포럼) = 빈 SERP. AIO 첫 문장 «Au poker, la bulle désigne le moment critique d'un tournoi où il ne reste qu'une seule élimination … avant d'atteindre les places payées, appelées In The Money (ITM).»
- PokerStars.fr «Stratégie sur la bulle»: «Petits stacks / Stacks moyens / Gros stacks» 3분할(EN과 같음) · 수치·예시·FAQ 0 · 정의 «Dans les petits tournois, la bulle désigne généralement le fait qu'il ne reste qu'un seul joueur à éliminer avant l'argent. Dans les grands tournois multi-tables (MTT), la bulle peut survenir alors qu'il reste encore plusieurs joueurs…» · 위키 «« La bulle éclate »» · «bubble boy».
- 표현: «faire la bulle»(Winamax 제목 · 자동완성) · «la bulle éclate» · «bulle stone»(reddit) · «avant-bulle»(포럼).
- **우리가 더 줄 것 3**: ① 스택별 플레이북(big · medium · short) ② bubble factor → 필요 에퀴티 표 + 데드머니 보정(52,9 % · 42,9 %) ③ hand-for-hand 규정 번호(WSOP 126 · TDA RP-8) + 새틀 «AA 폴드».

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (72) : Comment jouer la bulle au poker ? Gros stack, stack moyen et short stack
- **seoTitle** (58) : Ne fais plus la bulle — la bulle au poker, stack par stack
- **desc** (153) : Sur la bulle, survivre vaut plus que les jetons : la bonne décision s'inverse. Comment jouer la bulle au poker en gros stack, stack moyen ou short stack.
- **tldr** (471) : La bulle, c'est le moment juste avant les places payées : une élimination de plus et tout le monde est dans l'argent. Comme sauter ne rapporte rien, survivre vaut plus que les jetons à gagner, donc tes ranges de call se resserrent fort alors que tes shoves restent larges. Les gros stacks attaquent, les stacks moyens sont les plus coincés (pas les short stacks), et sur la bulle d'un satellite à plusieurs places, tu couches tout, même les as, une fois ton siège assuré.
- **tags** (9) : "bulle poker", "faire la bulle poker", "bulle tournoi poker", "bubble poker", "stratégie bulle poker", "bubble factor poker", "bubble boy poker", "main par main poker", "bulle satellite poker"

#### H2 (질문형 9/10 = 90 %)
| # | EN H2 (L##) | fr H2 | 형 |
|---|---|---|---|
| 1 | L37 What Is the Bubble in Poker? (And "On the Bubble") | C'est quoi la bulle au poker ? (et « faire la bulle ») | Q |
| 2 | L51 Why the Bubble Changes Everything: ICM in One Paragraph | Pourquoi la bulle change tout ? L'ICM en un paragraphe | Q |
| 3 | L59 The 3 Bubbles You'll Face: Money vs Final-Table vs Satellite | Quelles sont les 3 bulles que tu vas croiser ? Argent, table finale et satellite | Q |
| 4 | L73 How to Play a BIG Stack on the Bubble | Comment jouer un GROS stack sur la bulle ? | Q |
| 5 | L85 How to Play a MEDIUM Stack on the Bubble | Comment jouer un stack MOYEN sur la bulle ? | Q |
| 6 | L99 How to Play a SHORT Stack on the Bubble | Comment jouer un SHORT stack sur la bulle ? | Q |
| 7 | L111 Bubble Factor & Risk Premium: The Number That Tells You When to Fold | Bubble factor et risk premium : le chiffre qui te dit quand te coucher | – |
| 8 | L135 Hand-for-Hand and Stalling: The Mechanics Nobody Explains | Hand-for-hand (main par main) et stalling : comment « la bulle éclate » vraiment à table ? | Q |
| 9 | L145 The Satellite Bubble: When to Fold Aces | Bulle de satellite : pourquoi coucher les as ? | Q |
| 10 | L157 The Biggest Bubble Mistake: Playing for the Min-Cash | Pourquoi jouer pour le min-cash est la pire erreur sur la bulle ? | Q |
| — | L170 FAQ · L210 The 3 Things to Remember · L220 Related Posts | ## FAQ · ## À retenir · ## Articles liés | 고정 |

- H2 1 본문에서 «faire la bulle» = **버블에서 탈락하다**(§1-B)를 첫 문단 안에 정의한다(EN 용어 불릿 «bubble boy» 자리 옆 — 새 불릿을 만들지 말고 «bubble boy» 불릿 설명에 «c'est lui qui « fait la bulle »» 식으로 접는다).

#### H3
| EN H3 | fr H3 |
|---|---|
| L27 The bubble in one glance | La bulle en bref |

#### FAQ (EN 9 · 🆕 1)
| # | EN Q (L##) | fr Q |
|---|---|---|
| 1 | L172 What does "on the bubble" mean in poker? | Que veut dire « être sur la bulle » au poker ? |
| 2 | L176 Who is the bubble boy in poker? | Qui est le bubble boy au poker ? |
| 3 | L180 What is a stone bubble vs a soft bubble? | Quelle différence entre une bulle stone et une bulle soft ? |
| 4 | L184 What does it mean to "pay the bubble" or burst the bubble? | Que signifie « payer la bulle » ou « la bulle éclate » ? |
| 5 | L188 Should you fold on the bubble? | Faut-il se coucher sur la bulle ? |
| 6 | L192 Do short stacks feel the most bubble pressure? | Les short stacks subissent-ils la plus forte pression sur la bulle ? |
| 7 | L196 What is the bubble factor in poker? | C'est quoi le bubble factor au poker ? |
| 8 | L200 What is hand-for-hand play? | C'est quoi le main par main (hand-for-hand) ? |
| 9 | L204 Why would you fold aces on a satellite bubble? | Faut-il vraiment coucher les as sur la bulle d'un satellite ? |
| 🆕 | — (Winamax «C'est quoi faire la bulle ?» · 자동완성 «faire la bulle au poker») | C'est quoi faire la bulle au poker ? — 답 = EN 사실만(버블 = 돈 직전 · 그 자리에서 탈락 = 상금 0 = bubble boy · L19 경험담의 «14th» 이야기와 구분). FAQ 2 다음에 둔다 |

#### 키워드 흡수
- bulle poker 20 · bulle tournoi poker · poker bulle definition → H2 1 · seoTitle · title · tags
- faire la bulle (au) poker 10 → seoTitle 훅 «Ne fais plus la bulle» · H2 1 괄호 · FAQ 🆕 · tag
- bubble poker 10 · poker bubble boy → tags · FAQ 2 · bubble factor poker 10 → H2 7 · FAQ 7 · tag (risk premium 태그는 holdem-icm 몫 — H2 7 문구에만)
- «la bulle éclate» · «bulle stone» → H2 8 · FAQ 3·4 · PokerStars.fr 3분할 → H2 4·5·6 · title
- AIO 첫 문장 구조 → tldr 첫 문장

### §13 자리 (카드 = 핸드 명칭만 · 수치)
- L19 «three players from the money» · «ace-jack»(as-valet) 두 번 오픈폴드 · 14위 · min-cash
- L39·FAQ L174 top 27 지급 → 28명 남음
- L113 BF 1.0 · 1.5 · 1.5× · L115 산식 `c · BF ÷ (P + c · BF)` · `BF ÷ (1 + BF)` — 🔴 기호·변수명 축어
- L119~125 표: 1.0 → 50% · 1.3 → 57% · 1.5 → 60% · 1.7 → 63% · 2.0 → 67% (재계산 ✅ 56,5 · 60 · 63,0 · 66,7 반올림)
- L129 SB 10bb shove · call 9bb · pot 12bb · BF 1.5 → **52.9%** · no ICM → **42.9%** (재계산 ✅ 13,5/25,5 = 52,94 · 9/21 = 42,86) — EN «jams» → «fait tapis»
- L131 4명 3지급 · BF ~3.0 · ~1.1 · ~1.9 · 6-handed final-table bubble 2.0+ · 1.5–1.7
- L139 2분 · WSOP Tournament Rule 126.a · 126.b · 126.c · TDA RP-8-A · RP-8-C · RP-8-D · L140 2분 · WSOP 126.a · 126.c
- L147·L149·FAQ L206 AA · KK · «pocket aces»(paire d'as)
- L150 WSOP Tournament Rule 80 · Rules 40, 113 and 114 · 인용문 «purposely depleting time banks to ladder up in the payout»(🔴 인용부호 안 **영어 원문 그대로** `« … »` + 바로 뒤에 프랑스어 풀이 — 번역문을 원문처럼 인용하지 마라)
- FAQ L198 BF ÷ (1 + BF) · 60% · 10bb · 9bb · 12bb · 약 53% · 50%

### 경험담 자리 (EN 축어)
- **L19** The most disciplined I have ever played was three players from the money in a Friday tournament, everyone folding like the cards were on fire. I had a middle stack and open-folded ace-jack twice — hands I'd raise every time in a cash game. Two orbits later the short stack busted, I limped into the min-cash… and finished 14th for a payout barely above my buy-in. ==I "survived" my way out of any real money.== That's the bubble in one story: play it too scared and you lock up peanuts; play it right and it's where tournaments are actually won.
→ fr: «limped into the min-cash»는 액션 limp가 아니라 «겨우 기어 들어갔다»는 비유 — 프랑스어 비유로(예: «je me suis traîné jusqu'au min-cash») · 🔴 액션 «limper»로 오독되게 옮기지 마라. «Friday tournament» = «un tournoi du vendredi»까지만(장소 특정 금지).

### 하지 말 것 (되돌리지 마라)
- L101·FAQ L194 «short stack bubble factor is lower than medium» — 방향 뒤집기 금지(D유형).
- L139 hand-for-hand 동시 탈락 규정: «같은 테이블 = 핸드 시작 시 칩이 적은 쪽이 낮은 순위 · 다른 테이블 = 공동 순위(126.b)·실무상 두 상금 분할 · 선언 순간 진행 중 핸드 = WSOP 126.c·TDA RP-8-A 공통 분할» — 🔴 조건 4개를 **하나도 빼거나 합치지 마라**.
- L140 «stalling은 핸드 수를 줄이지 못한다(각 핸드 2분 차감)» 논리 유지.
- L147·L151 새틀 예외(«winner-take-all 1석 = chip EV» · «내 자리가 여전히 보장될 때만 call»).
- FAQ L186 «pay the bubble»(위로금)과 «burst the bubble»(마지막 탈락 = «la bulle éclate») 구분 유지.
- L51 H2는 ICM 정의 H2가 되면 안 된다(§1-F) — 본문 분량은 EN 그대로.

---
## holdem-short-stack — EN updated 2026-09-24 · P5

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | How to Play a Short Stack in Poker — Push/Fold Strategy by Stack Depth |
| seoTitle | How to Play a Short Stack in Poker (Push/Fold) |
| desc | Short-stacked in a tournament? Learn push/fold by stack depth — when to jam at 15, 10, and 5 big blinds, the M-ratio zones, and the ICM twist on the bubble. |
| tldr | A short stack (roughly under 20–25 big blinds) can't play normal postflop poker, and from about 15 big blinds down it switches to push/fold: move all-in first-in to keep your fold equity, and never open-limp or min-raise-then-fold. Shove wider from late position, keep your calling range tighter than your shoving range, and don't blind down to nothing 'waiting for a hand' — your fold equity is the weapon, and it fades hard below about 8 big blinds. |
| category · date · updated · readTime · emoji | tournament · 2026-07-09 · 2026-09-24 · 13 min · 📉 · `keepImagesInBody: true` |
| image · imageAlt | /images/holdem-short-stack-hero.webp · A short stack of tournament chips beside a large stack on green felt with a tournament clock behind — the moment a short-stacked player has to move all-in or fold |
| tags | short stack strategy · how to play a short stack · push fold strategy · push fold chart · M ratio poker · short stack poker · poker all in strategy · fold equity |

### 소유표 (계획 §3-B ⑦⑪)
- **주인인 검색어**: short stack poker 20 · short stack poker strategy 10 · m ratio poker 10 · push fold poker 10(본문) · **stack poker 170**(PAA «C'est quoi un stack au poker ?» — 🔴 앱 «Stack Poker» 섞임 → «stack au poker»로) · PAA «Qu'est-ce que le tapis effectif au poker ?» · 자동완성 «short stack tournoi».
- **쓰면 안 되는 헤드(seoTitle·H1·tags)**: «push or fold» 70 · «tableau push fold» · «push fold chart»(EN 태그 → 버린다 · 도구 몫) · «tableau range tournoi»(→ `/fr/hand-chart`) · icm · «tapis court / petit tapis» 단독(매트 상품).

### 구조 (EN L## · 축어 목록) — 표 2(래퍼) · 본문 이미지 1 · FAQ 9
- L19 경험담 · L21 `==…==` 도입 + 3부작 링크 → `---`
```
L25 [H] ### Short-stack rules at a glance
L27 [DIR] :::stripe
L31 [DIR] :::
L35 [H] ## What Is a Short Stack in Poker? (And How Many Big Blinds)
L41 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L43 [표] | Stack | Mode of play | Your main weapon |
L57 [H] ## Why Short Stacks Play Push/Fold: Fold Equity Explained
L67 [IMG] ![A short chip stack pushed all-in across the felt while a bigger stack decides whether to call, tournament clock glowing behind](/images/holdem-short-stack-shove.webp "S…
L69 [H] ## The M-Ratio (Harrington Zones): Green, Yellow, Orange, Red, Dead
L73 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L75 [표] | Zone | M-ratio | Roughly (no antes) | How to play |
L89 [H] ## When to Go All-In: First-In Shoving by Stack Depth and Position
L102 [H] ## Shoving vs. Calling a Shove: Two Different Ranges
L117 [H] ## How to Use a Push/Fold Chart (and Its Limits)
L131 [H] ## Short Stack on the Bubble: The ICM Twist
L145 [H] ## The 5 Short-Stack Mistakes That Kill Your Tournament
L157 [DIR] :::readnext[Keep reading]
L158 [CARD] /en/blog/holdem-bubble | How to Play the Bubble | /images/holdem-bubble-hero.webp
L159 [CARD] /en/blog/holdem-icm | ICM Explained — Why Chips Aren't Money | /images/holdem-icm-hero.webp
L160 [DIR] :::
L162 [H] ## FAQ
L164 [Q] **Q. How many big blinds is a short stack?**
L168 [Q] **Q. What is push/fold strategy?**
L172 [Q] **Q. What does "all-in or fold" mean in poker?**
L176 [Q] **Q. How do you respond to an all-in shove?**
L180 [Q] **Q. Should you ever limp with a short stack?**
L184 [Q] **Q. Is min-raising ever right when short-stacked?**
L188 [Q] **Q. What is the M-ratio in poker?**
L192 [Q] **Q. What is fold equity and why does it shrink?**
L196 [Q] **Q. Is short-stack strategy different in cash games?**
L202 [H] ## The 3 Things to Remember
L212 [H] ## Related Posts
L214 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L215 [GRID] /en/blog/holdem-bubble
L220 [GRID] /en/blog/holdem-icm
L225 [GRID] /en/blog/holdem-when-to-fold
L230 [GRID] /en/calculator
```
- `:::stripe` 3행(L28~30): `shove first-in | keep your fold equity` / `call tighter | than you shove` / `~8bb | fold equity fades below here — act sooner`
- 래퍼 표 L41~51(3열 · 5행: 25bb+ · 20bb · 15bb · 10bb · ≤5bb · 열 «Re-jam leverage» → «re-shove», «first-in jams» → «shoves first-in») · 래퍼 표 L73~83(4열 · 5행 · 이모지 🟢🟡🟠⚠⚫ 축어 · 존 이름은 도구 라벨 §1-G) · L85 매핑 단락 · L89 불릿 4 · L102 불릿 2 · L111 가격 단락 · L117 불릿 3 · L127 이탤릭 괄호 단락 `*(…)*` · L131 불릿 3 · L145 번호 5

### 링크
- L21 holdem-icm · holdem-bubble · holdem-tournament(전부 thumb) · L63 holdem-pot-odds · L111 holdem-when-to-fold · L123 holdem-bubble · L125 `/fr/calculator`(«calculateur ICM») · L133 holdem-bubble · L141 holdem-icm · `/fr/calculator` · L208 holdem-icm · holdem-bubble
- readnext L158~159: holdem-bubble(`/images/holdem-bubble-hero.webp`) · holdem-icm(`/images/holdem-icm-hero.webp`)
- 관련 글 그리드 L215~234: holdem-bubble(Tournament · How to Play the Bubble · Where your short-stack shoves matter most) · holdem-icm(Tournament · ICM Explained · Why survival can beat chips) · holdem-when-to-fold(Strategy · When to Fold in Poker · When the price says fold) · `/fr/calculator`(Free Tool · ICM Calculator · Compute your real shove/call spot)
- 🪶 도구 앵커 추가 없음(EN에 이미 `/calculator` 3곳). «push or fold» 계산기 탭으로 가는 새 링크를 만들지 마라(EN에 없다).

### 키워드·SERP 요지 (L-E §1·§3-7~3-9·§4-4·§7-5)
- «short stack poker» SERP = 프랑스어 글 **1/10**(2009 포럼) → 프랑스어 결과는 «short stack **tournoi**»에서만. 제목 표기 9개: «short stack» 단독 4 · «short stack / petit tapis» 병기 3 · «shortstack» 2.
- 상위 프랑스어 글: PokerStars.fr «7 Stratégies»(**tu 2인칭** · 경험담형 도입 · 구간표 · 셔브표 = 강점 / 🔴 에퀴티·범위 % 오류 2건) · PokerListings(예시 히어로 31bb = 숏스택 아님) · PokerNews(낡음) · Poker Académie · PokerPro(«Envisager une stratégie de Limp» — 우리 FAQ L180과 반대 측).
- **우리가 더 줄 것 3**: ① 스택 깊이별 5단 표 + M 5존(도구 라벨과 동일) ② «shove 범위 ≠ call 범위» + BB 콜 가격 43,9 % · 22 vs AKo 52,65 % ③ 1인칭 «12bb에서 min-raise→fold 반복» 실수담.
- «push or fold» SERP = 프랑스어 콘텐츠 0 · PAA 영어 4 → 도구 몫(헤드 금지 · 본문 표기는 «push or fold»).

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (74) : Comment jouer un short stack au poker ? Stratégie tournoi à 15, 10 et 5 BB
- **seoTitle** (56) : Short stack en tournoi de poker ? Jouer à 15, 10 et 5 BB
- **desc** (152) : Short stack en tournoi de poker ? Voici quand faire tapis à 15, 10 et 5 big blinds, les zones de la valeur M de Harrington et le piège ICM sur la bulle.
- **tldr** (443) : Un short stack (en gros sous 20–25 big blinds) ne joue plus un poker postflop normal : vers 15 big blinds, il passe en push or fold. Fais tapis first-in pour garder ta fold equity, sans limper ni min-raiser pour folder ensuite. Shove plus large en position tardive, garde une range de call plus serrée que ta range de shove, et ne fonds pas « en attendant une main » : ta fold equity est ton arme, et elle s'effondre sous 8 big blinds environ.
- **tags** (9) : "short stack poker", "short stack tournoi", "short stack poker strategy", "stratégie short stack poker", "m ratio poker", "valeur m de harrington", "fold equity poker", "tapis effectif poker", "all in poker tournoi"

#### H2 (질문형 7/8 = 88 %)
| # | EN H2 (L##) | fr H2 | 형 |
|---|---|---|---|
| 1 | L35 What Is a Short Stack in Poker? (And How Many Big Blinds) | C'est quoi un short stack au poker ? (et combien de big blinds) | Q |
| 2 | L57 Why Short Stacks Play Push/Fold: Fold Equity Explained | Push or fold : pourquoi le short stack fait tapis ou se couche ? La fold equity | Q |
| 3 | L69 The M-Ratio (Harrington Zones): Green, Yellow, Orange, Red, Dead | Comment lire la valeur M de Harrington ? Zones verte, jaune, orange, rouge, morte | Q |
| 4 | L89 When to Go All-In: First-In Shoving by Stack Depth and Position | Quand faire tapis ? Le shove first-in selon la profondeur de stack et la position | Q |
| 5 | L102 Shoving vs. Calling a Shove: Two Different Ranges | Shove ou call d'un shove : pourquoi deux ranges différentes ? | Q |
| 6 | L117 How to Use a Push/Fold Chart (and Its Limits) | Comment utiliser un tableau push or fold (et ses limites) ? | Q |
| 7 | L131 Short Stack on the Bubble: The ICM Twist | Que change l'ICM pour un short stack sur la bulle ? | Q |
| 8 | L145 The 5 Short-Stack Mistakes That Kill Your Tournament | Les 5 erreurs de short stack qui tuent ton tournoi | – |
| — | L162 FAQ · L202 The 3 Things to Remember · L212 Related Posts | ## FAQ · ## À retenir · ## Articles liés | 고정 |

- H2 2·6의 «push or fold»·«tableau push or fold»는 **H2 문구 일부**(계획 §3-B ⑪ 허용) — tags·title·seoTitle엔 0회.

#### H3
| EN H3 | fr H3 |
|---|---|
| L25 Short-stack rules at a glance | Les règles du short stack en bref |

#### FAQ (EN 9 · 🆕 2)
| # | EN Q (L##) | fr Q |
|---|---|---|
| 1 | L164 How many big blinds is a short stack? | Un short stack, c'est combien de big blinds ? |
| 2 | L168 What is push/fold strategy? | C'est quoi la stratégie push or fold ? |
| 3 | L172 What does "all-in or fold" mean in poker? | Que veut dire « all-in ou fold » au poker ? |
| 4 | L176 How do you respond to an all-in shove? | Comment réagir quand un adversaire fait tapis ? |
| 5 | L180 Should you ever limp with a short stack? | Faut-il parfois limper en short stack ? |
| 6 | L184 Is min-raising ever right when short-stacked? | Le min-raise est-il parfois correct en short stack ? |
| 7 | L188 What is the M-ratio in poker? | C'est quoi la valeur M (M de Harrington) au poker ? |
| 8 | L192 What is fold equity and why does it shrink? | C'est quoi la fold equity, et pourquoi diminue-t-elle ? |
| 9 | L196 Is short-stack strategy different in cash games? | La stratégie short stack est-elle différente en cash game ? |
| 🆕 | — (PAA ×2 · stack poker 170) | C'est quoi un stack au poker ? — 답 = «les jetons que tu as devant toi», compté en big blinds (EN H2 1 L37~39의 «60 big blinds / 12 big blinds» 프레임만). 🔴 앱 «Stack Poker» 언급 금지 |
| 🆕 | — (PAA 축어) | Qu'est-ce que le tapis effectif au poker ? — 답 = §1-G 도구 정의 «le plus petit des deux stacks engagés» + «c'est lui qui compte quand tu fais tapis»(EN L111 «you risk 9bb» 가격 논리 안에서만). 새 수치 0. 본문 용어는 «stack effectif» |

#### 키워드 흡수
- short stack poker 20 · short stack tournoi · strategy/meaning(자동완성) → seoTitle «Short stack en tournoi de poker» · title · H2 1 · tags
- stack poker 170 → FAQ 🆕 1만(헤드 금지) · tapis effectif(PAA) → FAQ 🆕 2 · tag
- push or fold 70(도구) · push fold poker 10 → H2 2·6 문구 일부 · FAQ 2 · tldr — seoTitle·title·tags 0회
- m ratio poker 10 → H2 3 · FAQ 7 · tags «m ratio poker»·«valeur m de harrington» · fold equity → H2 2 · FAQ 8 · tag
- EN desc 15/10/5 BB → seoTitle · title · desc 훅

### §13 자리 (핸드 2 · 수치)
- L19 12-big-blind · 1.5 blinds/orbit · 4 big blinds · 두 명 콜
- L28~30 stripe ~8bb · L37 20–25 · 15 · 60 · 12 big blinds
- L45~49 표 25bb+ · 20bb · 15bb · 10bb · ≤5bb · L53 12-big-blind · 40-big-blind · ≤5bb
- L63 12–15 · 8–10 · 4–5 big blinds · L71 산식 `M = your stack ÷ (small blind + big blind + all antes per orbit)` 축어(단어만 번역)
- L77~81 표: 20+ · ~30bb+ / 10 to under 20 · ~15–30bb / 6 to under 10 · ~9–15bb / 1 to under 6 · ~1.5–9bb / under 1 · under ~1.5bb (🔴 «to under» 경계를 «de 10 à moins de 20»처럼 살려라)
- L85 1.5 big blinds · M ≈ bb ÷ 1.5 · M 10 ≈ 15bb · M 5 ≈ 7–8bb
- L93~96 12–15bb · 10–15bb · ~6bb
- L111·FAQ L178 **10bb jam · 9bb risk · 20.5bb pot · 43.9%**(재계산 9/20,5 = 43,90 ✅) · **22 vs AKo 52.65%**(C에서 `lib/poker-eval.ts` 전수 대조)
- L127 10–15 big blinds · L150 ~8–10bb · L182 15 big blinds · FAQ L166 20–25 · 15 · 10 · ~15 · FAQ L190 20+ · 10 to under 20 · 6 to under 10 · 1 to under 6 · under 1 · ÷ 1.5 · FAQ L194 5 big blinds

### 경험담 자리 (EN 축어)
- **L19** The fastest I ever went from "still alive" to "out" was a night I kept min-raising a 12-big-blind stack, folding to the re-raise every time, and bleeding a blind and a half each orbit until I was too short to scare anyone. By the time I finally shoved, I had four big blinds and got called by two players. ==I didn't get unlucky — I played a short stack like it was a deep one.== Once your stack gets small, the entire game changes, and the players who know the new rules run the table.

### 하지 말 것 (되돌리지 마라)
- L111·FAQ L178 «small pairs and weak aces are the *core* of a BB calling range» · «The leak isn't the hand class» — 2026-09 EN 정정 문구. **«작은 페어·약한 에이스는 콜하지 마라»로 되돌리지 마라**(D유형).
- L149 mistake 3 «in the big blind the dead small blind means a genuine flip already clears the chip-EV bar» — 축어 논리 유지.
- L174 «GGPoker's All-in or Fold» 상품명 축어.
- L96 «Under ~6bb … take the next reasonable spot» · L150 «commonly, before you drop under ~8–10bb» — 수치 범위 그대로.
- EN desc·본문의 «jam/jams/re-jam» → 산문 «fait tapis / shove / re-shove»(§1-B).
- «tapis»를 stack 뜻으로 쓰지 마라 — 예외는 첫 정의 «short stack (« petit tapis »)»와 FAQ «stack effectif (« tapis effectif »)» 각 1회(§1-B · §1-G).

---
## holdem-tournament-vs-cash-game — EN updated 2026-09-13 · P3

### 메타 (EN 축어)
| 필드 | EN |
|---|---|
| title | Cash Game vs Tournament Poker |
| seoTitle | Your Chips Aren't Money — Cash Game vs Tournament Poker |
| desc | Cash game vs tournament poker — which fits you? Chip value, rising blinds, ICM, bankroll, which is harder and more profitable, and where beginners start. |
| tldr | In cash games, chips are real money and blinds stay fixed. In tournaments, chips are survival equity, blinds rise, and payouts depend on where you finish. |
| category · date · updated · readTime · emoji | tournament · 2026-06-11 · 2026-09-13 · 18 min · 🏆 · 🔴 `hideSummaryImageSlot: true`(keepImagesInBody **없음**) |
| image · imageAlt | /images/holdem-tournament-vs-cash-hero.webp · Side-by-side infographic comparing cash game and tournament poker — chip value, blind structure, and when you can leave |
| tags | cash game vs tournament poker · what is a cash game in poker · poker cash game rules · are cash games profitable · are cash games harder than tournaments · when to leave a cash game · poker bankroll management · ICM poker |

### 소유표 (계획 §3-B ⑦)
- **주인인 검색어**: cash game poker 320 · bankroll poker 70 · cash game ou tournoi(+ «tournoi ou cash game») 10 · stratégie cash game 10 · cash game poker c'est quoi 10 · cash game poker règle 10 · 자동완성 «cash game définition / explication / comment jouer · cash game ou tournoi poker rentable» · PAA «Quelle est la différence entre un cash game et un tournoi ?»(**4개 SERP 반복 — 레인 최다**).
- **쓰면 안 되는 헤드**: «ICM poker»(EN 태그 → **버린다** · holdem-icm 소유) · ICM 정의형 H2 · «cash game» 단독(«candy cash game»·중고 게임 매장 오염 → 반드시 «poker»/«tournoi»와 짝) · 세금·합법성.

### 구조 (EN L## · 축어 목록) — 표 11(그중 5개 크림 박스 래퍼) · 본문 이미지 2 · 디렉티브 note 1 · FAQ 10
- L28 경험담 · L30~34 도입(L32 이탤릭 질문 `*"…"*` + `==…==`) · L36 링크 문단 → L38 H3 · 불릿 5(L40~44) → `---`
```
L38 [H] ### The 15-second answer
L48 [H] ## Cash Game vs Tournament Poker: The Core Difference
L60 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L62 [표] | Category | Cash Game | Tournament |
L77 [H] ## What Is a Cash Game in Poker? (Rules & How It Works)
L91 [DIR] :::note[This section covers the cash game essentials. We are expanding it into a full cash-game guide of its own — consider this the seed.]:::
L95 [H] ## Tournament Chips Are Not Money
L105 [표] | Finish | Prize |
L116 [IMG] ![Infographic: cash chips convert to money instantly while tournament chips have no cash value until you reach a paid finish](/images/holdem-tournament-chips-not-money.we…
L120 [H] ## Fixed Blinds vs Rising Blinds
L128 [표] | Stage | Cash Game | Tournament |
L139 [H] ## Cash Game vs Tournament Strategy — What Actually Changes
L149 [H] ### Deep-Stack Poker vs Short-Stack Push/Fold
L155 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L157 [표] | Stack depth | More common in | Main skill |
L170 [H] ## ICM: The Tournament Concept Cash Games Do Not Have
L178 [표] | Decision factor | Cash Game | Tournament |
L187 [IMG] ![Infographic showing that doubling your tournament stack grows your prize equity by less than double — the core of ICM pressure](/images/holdem-tournament-icm-bubble.web…
L191 [H] ## Are Cash Games Harder Than Tournaments?
L199 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L201 [표] | Difficulty type | Cash Game | Tournament |
L214 [H] ## Are Cash Games More Profitable? bb/100 vs Tournament ROI
L222 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L224 [표] | Metric | Cash Game | Tournament |
L238 [H] ## Bankroll Management: Tournaments Need More Cushion
L246 [HTML] <div style="background:rgba(255,248,210,…"> (크림 박스 열기 · 줄 축어 복사)
L248 [표] | Format | Beginner bankroll guideline | Why |
L260 [H] ## When to Leave a Cash Game (and Why You Can't Leave a Tournament)
L273 [표] | Player situation | Better fit |
L285 [H] ## Which Should Beginners Play First?
L293 [표] | Goal | Better starting point |
L304 [H] ### Beginner Decision Framework
L308 [표] | Your situation | Start with |
L319 [H] ### Cash games may fit you better if:
L327 [H] ### Tournaments may fit you better if:
L339 [H] ## Live Poker Rooms: What Should You Ask First?
L345 [표] | Question | Why it matters |
L357 [DIR] :::readnext[Keep reading]
L358 [CARD] /en/blog/holdem-pot-odds | How to Calculate Pot Odds | /images/holdem-pot-odds-hero.webp
L359 [CARD] /en/blog/holdem-probability | Poker Odds & Probability Chart | /images/holdem-probability-hero.webp
L360 [DIR] :::
L362 [H] ## FAQ
L364 [Q] **Q. Are poker tournaments harder than cash games?**
L368 [Q] **Q. Are cash games profitable for beginners?**
L372 [Q] **Q. Should beginners start with cash games or tournaments?**
L376 [Q] **Q. Does ICM matter in cash games?**
L380 [Q] **Q. How many buy-ins do I need for cash games vs tournaments?**
L384 [Q] **Q. How many big blinds should you start with in a cash game vs a tournament?**
L388 [Q] **Q. How many chips do you need for a home cash game?**
L392 [Q] **Q. Do professional players play cash games or tournaments?**
L396 [Q] **Q. Is a re-entry tournament basically a cash game?**
L400 [Q] **Q. Do you get taxed on poker tournament winnings?**
L406 [H] ## The 3 Things to Remember
L416 [H] ## Related Posts
L418 [HTML] <div style="display:grid;…"> (관련 글 그리드)
L419 [GRID] /en/blog/holdem-tournament
L424 [GRID] /en/blog/holdem-game-order
L429 [GRID] /en/blog/holdem-hand-rankings
L434 [GRID] /en/blog/holdem-blind-meaning
```
- 크림 박스 래퍼 = L60·L155·L199·L222·L246(나머지 표 L105·L128·L178·L273·L293·L308·L345는 **래퍼 없음** — EN 그대로)
- 표 구분선 형식이 표마다 다르다(`|------|` vs `|:---|:---:|`) — EN 줄 그대로 복사.
- L91 `:::note[…]:::` — 문장 전체가 디렉티브 인자다(한 줄 · 닫는 `:::` 같은 줄).
- 하이라이트(`==` · `==g:` · `==r:`)가 32줄에 있다(L32~L412) — 색 마커 종류·위치를 EN 줄 그대로.

### 링크
- L36 holdem-tournament(링크 텍스트 «how poker tournaments work — buy-ins, blind levels, and the Day-1 flow») · L43 holdem-icm(«ICM pressure») · L85 holdem-blind-meaning · L89 holdem-rake · L145 holdem-starting-hands-chart · L153 holdem-short-stack · L176 holdem-bubble · L185 holdem-icm · L302 holdem-game-order · holdem-hand-rankings · holdem-tournament(thumb `/images/holdem-tournament-hero.webp`)
- readnext L358~359: holdem-pot-odds(`/images/holdem-pot-odds-hero.webp`) · holdem-probability(`/images/holdem-probability-hero.webp`) — 🅲 제목은 §1-D 임시 규칙
- 관련 글 그리드 L419~438: holdem-tournament(Tournaments · How Poker Tournaments Work · Buy-ins, blind levels, formats, and a Day-1 checklist) · holdem-game-order(Game Flow · Texas Hold'em Order of Play · Preflop to showdown — the full hand flow step by step) · holdem-hand-rankings(Hand Rankings · Poker Hand Rankings — Best to Worst · All 10 hands with odds, examples, and board puzzles) · holdem-blind-meaning(Blinds · What Are the Blinds in Poker? · SB, BB, blind steal, and option — all explained)
- 편차 0 · `/fr/calculator` 링크 없음(EN에 없다 — 새로 만들지 마라).

### 키워드·SERP 요지 (L-E §1·§3-10~3-11·§4-5·§7-3)
- «cash game poker» 320 · KG «Cash game» · 위키 #1 · AIO 없음. «cash game ou tournoi»: #1 = **PokerStars.fr 2026-09-22 신작**(«Tournoi ou cash game : quel format choisir pour débuter au poker ?» · 첫 문단 직답 + 6행 표 + 4기준) · cours-et-fiches(표 5 · FAQ · 🔴 ICM 근사 오차 · 수익성 무출처) · PokerListings 1인칭 칼럼(무출처 «1 tournoi sur 40») · partypoker.fr(제목은 «règles»인데 규칙 거의 없음).
- 용어 축어(PokerStars.fr): «On peut parfois rencontrer le terme français de « partie libre », mais on parle plus généralement de « cash game »» · «micro-limites» · «Spin & Go».
- **우리가 더 줄 것 3**: ① 넓이 — ICM · bb/100 vs ROI · 뱅크롤 표 · 떠날 때 · 라이브 룸 질문표(경쟁 글에 «떠날 때»·«라이브 룸» 0) ② 수치 정확성(뱅크롤 $200 → $4 000–$8 000 · 칩 세트 300 ÷ 8 등 EN 값) ③ 1인칭 첫 캐시 세션 vs 첫 토너먼트.
- 🔴 «… rentable» 자동완성 = 수익성 질문 → EN H2 L214가 받는다(무출처 수치 추가 금지 — EN에 있는 «5 big blinds per 100 hands» 예시만).

### 확정 카피
#### 메타 (Fable → Opus 글자 수 재측정 · String.length)
- **title** (67) : Cash game ou tournoi au poker : quelle différence, lequel choisir ?
- **seoTitle** (55) : Mêmes cartes, autre jeu — cash game ou tournoi au poker
- **desc** (150) : Cash game ou tournoi au poker : lequel est fait pour toi ? Valeur des jetons, blindes, ICM, bankroll, le plus dur, le plus rentable et par où débuter.
- **tldr** (209) : En cash game, les jetons sont de l'argent réel et les blindes restent fixes. En tournoi, tes jetons représentent ta survie, pas de l'argent : les blindes montent et les gains dépendent de ta place à l'arrivée.
- **tags** (9) : "cash game ou tournoi", "tournoi ou cash game poker", "cash game poker", "cash game poker c'est quoi", "cash game poker règles", "cash game ou tournoi rentable", "stratégie cash game", "bankroll poker", "quitter une table de cash game"

#### H2 (질문형 12/12 = 100 %)
| # | EN H2 (L##) | fr H2 | 형 |
|---|---|---|---|
| 1 | L48 Cash Game vs Tournament Poker: The Core Difference | Quelle est la différence entre un cash game et un tournoi ? | Q |
| 2 | L77 What Is a Cash Game in Poker? (Rules & How It Works) | C'est quoi un cash game au poker ? (règles et fonctionnement) | Q |
| 3 | L95 Tournament Chips Are Not Money | Pourquoi les jetons de tournoi ne sont pas de l'argent ? | Q |
| 4 | L120 Fixed Blinds vs Rising Blinds | Blindes fixes ou blindes qui montent : qu'est-ce que ça change ? | Q |
| 5 | L139 Cash Game vs Tournament Strategy — What Actually Changes | Stratégie cash game ou tournoi : qu'est-ce qui change vraiment ? | Q |
| 6 | L170 ICM: The Tournament Concept Cash Games Do Not Have | L'ICM existe-t-il en cash game ? Le concept propre au tournoi | Q |
| 7 | L191 Are Cash Games Harder Than Tournaments? | Le cash game est-il plus dur que le tournoi ? | Q |
| 8 | L214 Are Cash Games More Profitable? bb/100 vs Tournament ROI | Cash game ou tournoi : lequel est le plus rentable ? bb/100 vs ROI | Q |
| 9 | L238 Bankroll Management: Tournaments Need More Cushion | Gestion de bankroll : pourquoi le tournoi demande-t-il plus de marge ? | Q |
| 10 | L260 When to Leave a Cash Game (and Why You Can't Leave a Tournament) | Quand quitter une table de cash game (et pourquoi tu ne peux pas quitter un tournoi) ? | Q |
| 11 | L285 Which Should Beginners Play First? | Cash game ou tournoi pour débuter au poker : par quoi commencer ? | Q |
| 12 | L339 Live Poker Rooms: What Should You Ask First? | Salle de poker live : que demander en arrivant ? | Q |
| — | L362 FAQ · L406 The 3 Things to Remember · L416 Related Posts | ## FAQ · ## À retenir · ## Articles liés | 고정 |

#### H3
| EN H3 | fr H3 |
|---|---|
| L38 The 15-second answer | La réponse en 15 secondes |
| L149 Deep-Stack Poker vs Short-Stack Push/Fold | Poker deepstack contre push or fold en short stack |
| L304 Beginner Decision Framework | Le cadre de décision pour débutant |
| L319 Cash games may fit you better if: | Le cash game te convient mieux si : |
| L327 Tournaments may fit you better if: | Le tournoi te convient mieux si : |

#### FAQ (EN 10 · 교체 1)
| # | EN Q (L##) | fr Q |
|---|---|---|
| 1 | L364 Are poker tournaments harder than cash games? | Les tournois de poker sont-ils plus durs que le cash game ? |
| 2 | L368 Are cash games profitable for beginners? | Le cash game est-il rentable pour un débutant ? |
| 3 | L372 Should beginners start with cash games or tournaments? | Un débutant doit-il commencer par le cash game ou le tournoi ? |
| 4 | L376 Does ICM matter in cash games? | L'ICM compte-t-il en cash game ? |
| 5 | L380 How many buy-ins do I need for cash games vs tournaments? | Combien de caves faut-il en cash game et en tournoi ? |
| 6 | L384 How many big blinds should you start with in a cash game vs a tournament? | Avec combien de big blinds commence-t-on en cash game et en tournoi ? |
| 7 | L388 How many chips do you need for a home cash game? | Combien de jetons faut-il pour un cash game entre amis ? |
| 8 | L392 Do professional players play cash games or tournaments? | Les pros jouent-ils plutôt en cash game ou en tournoi ? |
| 9 | L396 Is a re-entry tournament basically a cash game? | Un tournoi re-entry, c'est en fait du cash game ? |
| 10 | L400 Do you get taxed on poker tournament winnings? → 🔴 **교체** | Peut-on quitter une table de cash game à tout moment ? — 답 = EN 본문 L262~271 사실만(규칙상 언제든 · 토너먼트는 칩이 남아 블라인드를 낸다 · ratholing 금지 · 곧 같은 게임에 돌아오면 떠날 때 금액 이상으로 재바이인 · 큰 팟 직후 떠나도 규칙 위반 아님). 세금·법 문장 0 |

#### 키워드 흡수
- cash game poker 320 → seoTitle · title · desc «cash game ou tournoi au poker» · H2 2 · tags (🔴 «cash game» 단독 0 — 늘 poker/tournoi 동반)
- cash game ou tournoi · tournoi ou cash game · … rentable → seoTitle 꼬리 · H2 1(PAA 축어 · 레인 최다)·8·11 · tags
- cash game poker c'est quoi · définition · règle → H2 2 · tags · bankroll poker 70 → H2 9 · desc · tag · stratégie cash game 10 → H2 5 · tag
- «partie libre» → 본문 첫 등장 병기 1회 · PAA «Comment fonctionne un tournoi ?» → holdem-tournament 몫(L36 내부링크로)

### §13 자리 (카드 = AKo 1 · 수치)
- L28 4시간 · L54 $200 · $450 · L56 $100 buy-in · 20,000칩 · $20,000 · L58 $1/$2 · $60 river bet · $50 tournament · 18 big blinds
- L81 $1/$2 · $40 ~ $300 · L85 $1/$2 · L103 10명 × $100 = $1,000 pool · 표 L105~110 $500 / $300 / $200 / 4th-10th $0(합 1 000 ✅) · L112 10% → 20%
- L124 $1/$2 · L126 100 → 25 → 12 big blinds · L151 100 big blinds · L153 25 · 15 · 10 big blinds
- 표 L157~162 100BB+ · 40-60BB · 15-25BB · 10BB or less · L176 AKo
- L216 5 big blinds per 100 hands · L218 20 or 30 events
- L242 20-40 buy-ins · $200 → $4,000-$8,000(✅) · L244 100+ · $50 vs $200 · 표 L250~252 20-40 · 40-60 · 100+
- L262 30 minutes · two hours
- FAQ L382 20-40 · 100+ · 40-60 · FAQ L386 $1/$2 → $200–$300 = 100–150 big blinds(✅) · 20-40 · 100-300 big blinds · 20 · 10 · FAQ L390 300-chip set · 6 players · 7-8 · 300 ÷ 8 = under 40(37,5 ✅) · 3-4 denominations · 500-chip set · 7-8 players

### 경험담 자리 (EN 축어)
- **L28** I still remember racking up after my first live cash session — those chips were money I could literally walk to the cage and pocket. My first tournament ended very differently: four hours of careful play, one lost flip, and a stack of chips that turned into exactly nothing on the way out. That gap is what this whole article is about.
- **L317** My default advice for a serious beginner is simple: play low-stakes cash games for repetition, then add small tournaments for experience. Cash games reveal leaks faster. Tournaments teach pressure, patience, and emotional control. Together, they build a more complete player.
→ fr: «the cage» = «la caisse» · 장소 특정 금지. L28의 «four hours»는 tournament L31(«Four hours later I was out»)과 같은 첫 대회 — 두 글의 숫자가 어긋나지 않게 그대로.

### 하지 말 것 (되돌리지 마라)
- L91 `:::note[…]:::` «We are expanding it into a full cash-game guide of its own — consider this the seed.» — EN 약속문. **그대로 옮긴다**(EN 패리티).
- FAQ L386 «— with two conditions. Your bankroll has to carry it … buying in shorter is a legitimate choice, not a beginner mistake» — EN 정정 뉘앙스 축어(«항상 최대 바이인»으로 줄이지 마라 · D유형).
- FAQ L390 칩 세트 산수(300 ÷ 8 = under 40) 축어 · «in a cash game you shouldn't [deal out everything]» 논리 유지.
- FAQ L400 세금 → 확정 카피의 교체 문항(답 = EN 본문 L262~271 사실만 · 프랑스 세법·ANJ 언급 금지).
- L176 «a call that prints money in a cash game can be a clear fold under ICM» — 조건부 문장(«can be») 유지.
- L174 ICM 정의 2문장은 그대로 두되 H2를 정의형으로 바꾸지 마라(§1-F).
- 수익성 H2(L214~234): EN에 없는 ROI·bb/100 수치·«1 tournoi sur 40»류 SERP 수치를 보태지 마라.

