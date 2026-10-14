# ar-strat 브리프 — 🅳 전략·용어 4편 (레인 A · 2026-10-14)

> **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)뿐이다.** 웹·MCP·다른 로케일 파일(tr·vi·fr 등)·기존 ar 글의 «문장»은 B에서 열지 않는다(ms 규격 §3 🟢). 사실·수치·카드의 출처는 EN 축어뿐. 기존 ar 글은 **필드 모양 확인용**으로만 연다(아래 §0-1 실측이 이미 끝났다).
> 정본: `docs/ar-cluster-plan.md` §2 ⑦⑧⑨ · §3-A(용어 — **판단 없이 따른다**) · §3-C(소유표) · **§5 차이 표(이게 이긴다)** · §5-A + `docs/ms-translation-lanes.md` §5(B 규격).
> EN 기준 해시 **`e30fde28`** — 4편 모두 그 뒤 EN 변경 0(`git diff --stat e30fde28 -- lib/posts-en/<4편>` 10-14 실측 · 빈 출력). `masterUpdated` = 아래 각 편 EN `updated`.
> 키워드·SERP 출처 = `docs/keyword-bank/ar-serp/L5-strategy-gto.md`(strategy·positions·c-bet) + `L3-terms.md`(glossary) + `00-brief.md` + `ar-core-volumes.md` — 레인 A는 재조사하지 않았다(계획 §2 ①). 볼륨·SERP는 그 문서 축어(DFS · 2682 SA / 2818 EG · 2026-10-14).
> 🔴 **확정 카피(seoTitle·desc·tldr·title·tags·H2 세트·FAQ 문항)는 B·C가 바꾸지 않는다**(계획 §2 ⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 4편 공통 — B가 매 편 지킬 것

### 0-1. 고정문 (ar 기존 8편 실측 · 10-14 · `grep` 횟수)
| 자리 | 정본 | 실측 |
|---|---|---|
| 직답 블록 라벨 | `> **الإجابة السريعة**` (EN «Quick answer» 자리 · 다른 라벨 금지) | 1/1 (blind-meaning) |
| readnext | `:::readnext[تابع القراءة]` | 6/6 |
| FAQ H2 | `## الأسئلة الشائعة` · 문항 `**Q. …؟**` + 빈 줄 + `A. …` (Q·A는 **라틴 문자 그대로** — 스키마 조건) · 「FAQ」 단독 H2 금지 | 7/7 · Q. 형식 8/8 |
| 관련 글 H2 | `## مقالات ذات صلة` + EN과 같은 `<div style="display:grid…">` 카드 그리드(href만 `/ar/blog/…`) | 8/8 |
| 마무리 H2 | 편마다 §1~§4의 확정 H2(코퍼스가 «ثلاثة أمور يجب تذكّرها»·«أهم 3 أشياء تذكرها»·«الخلاصة النهائية»로 갈려 있어 정본 없음 → 확정 카피를 따른다) | — |
| readTime | `"N دقيقة"` (EN 숫자 그대로: 14·12·18·12) | 8/8 |
| category | **EN 값 그대로**(`"strategy"` · `"glossary"`) — 번역 금지. `npx tsc`의 «not assignable to Category»는 전 로케일 기존 오류(무시) | — |
| 링크 꼴 | `[앵커](/ar/blog/<slug>)` · 썸네일 `[앵커](/ar/blog/<slug> "thumb:/images/<img>.webp")` · 도구 `[앵커](/ar/hand-chart)` · 끝 `/` 금지 | 코퍼스 동일 |
| 필드 순서 | `slug · title · seoTitle · desc · tldr · category · date · updated · (빈 줄) masterUpdated · keepImagesInBody: true · readTime · emoji · image · imageAlt · tags · content` (`lib/posts-ar/holdem-hand-rankings.ts` 머리 모양) | — |
| date·updated | 4편 모두 **신규** → `date` = `updated` = 집필일(B 당일). 헤드가 배포일로 다시 맞춘다(계획 §4-A ①) | — |
| 화자 | 1인칭 단수(أنا · «لعبتُ» · «رأيتُ») · 독자 **أنت**(단수 남성형 기본 · «أنتم» 금지) | translation-terms-ar «문체» |

### 0-2. 문체·조판
- **MSA**(현대 표준 아랍어) · 명료한 교육 톤 · 고전체·과한 수사 금지 · 직역 냄새(«في نهاية اليوم» 같은 영어 관용구 직역) 금지. 이집트·걸프 방언 어휘 금지(«ازاي» 등은 SERP 표면형일 뿐).
- 숫자 = **서양 숫자 0-9**(동부 ٠-٩ 금지) · 천 단위 콤마 `22,100` · `1,755` · 소수 마침표 `54.7%` · **`%`는 숫자 뒤 붙임**(`11.8%` — 코퍼스 35/35) · 범위 `55–70%` · `25–35%`(EN의 en dash 그대로) · `~80%` · `≈1` 그대로 · 화폐 `$` 앞붙임(`$14` · `$30` · `$1/$2`) · 빅블라인드 단위 = **EN 토큰 그대로**(`2.5bb` · `1bb` · `100bb`) · 배수 `15–20×` · `2× BB` 그대로. 🔴 **값은 EN 축어** — 변환·반올림 금지.
- 비율: EN «4-to-1» → «4 إلى 1» · «1-in-5» → «1 من 5» · «1 in 8.5» → «1 من 8.5» (코퍼스 «7 إلى 1» 선례).
- 문장부호: 아랍어 쉼표 **«،»** · 물음표 **«؟»** · 세미콜론 «؛» · 인용 = **«…»**(코퍼스 다수) · 표·디렉티브의 구분자 `|`는 그대로.
- 카드: 라틴 랭크 + 무늬 기호 `A♠ K♥ Q♦ J♣ 10♠`. 🔴 **무늬 붙은 카드의 T는 `10`으로**(코퍼스 `T♠` 0회 · `10♠` 17회): c-bet EN L125 `T♣9♦7♣`→`10♣9♦7♣` · `T♥6♦2♣`→`10♥6♦2♣`. 무늬 없는 랭크 나열(`K‑7‑2` · `A‑8‑3` · `7‑6‑5` · `Q‑J‑T`)과 핸드 클래스(`A‑K` · `K‑J` · `J‑4`)는 **EN 그대로**(하이픈 종류 포함 — non-breaking hyphen `‑` 유지). `==A♣K♣==` 하이라이트 그대로.
- RTL: 문장 안 라틴 토큰(카드·약어·숫자)은 그냥 쓴다 — **제어문자·`<span dir>` 삽입 금지**(계획 §5 RTL). 뒤집혀 보이면 C가 화면 실측으로 판정한다.
- 🔴 금지: 백틱 · `**` 중첩(굵은 단락 안 강조는 «» 또는 `==…==`) · **tldr 안 마크다운** · content에 히어로 이미지 · slug·이미지 경로 변경 · 합법성·종교 판단(«حلال/حرام/حكم/قمار» 축) · 실머니·사이트·앱 추천 · 대회 일정.

### 0-3. 용어 (계획 §3-A 정본 + 이 클러스터에서 처음 정한 것 = 「🆕」 — 진행 파일 «신규 용어»에 같은 표)
| EN | ar 본문 | 비고 |
|---|---|---|
| position (일반) | **الموقع** · in position = «في الموقع (IP)» · out of position = «خارج الموقع (OOP)» | 🔴 복수 «المواقع»는 본문 정상 사용 OK · **seoTitle·desc·H1·태그 단독 헤드 금지**(§2 ⑨ = 포커 사이트 SERP) · 대회 순위 «المركز»와 혼동 금지 |
| seat (물리 좌석) | **المقعد** · Seat 1 = «المقعد رقم 1 (Seat 1)» | positions 글 핵심 대비(«المقعد عنوان، والموقع وظيفة») |
| UTG · UTG+1 · UTG+2 · LJ · HJ · CO · BTN · SB · BB · EP · MP · LP | 약어 **라틴 그대로**. 첫 등장 풀이: «UTG (Under the Gun — المقعد الذي يتصرف أولًا قبل الفلوب)» · «اللوجاك (LJ)» · «الهايجاك (HJ)» · «الكت أوف (CO)» · «الزر (BTN)» · «السمول بلايند (SB)» · «البيغ بلايند (BB)» · zone = «المواقع المبكرة (EP) / الوسطى (MP) / المتأخرة (LP)» | 🔴 «تحت المدفع»·«تحت البندقية»·«الخاطف»·«القطع» 금지(§3-A · 경쟁 기계번역). «أندر ذا غن» 음차는 positions 글 UTG 절에서 **1회 병기만** 허용(경쟁 2곳 표기) |
| dealer / dealer button | 사람 = **الموزع** · 원판 = **«زر الموزع (Dealer Button)»** · 좌석 = **الزر (BTN)** | 코퍼스 الزر 71 · الموزع 36 |
| blinds / small blind / big blind / ante | **البلايندز** · **«السمول بلايند (SB)»** · **«البيغ بلايند (BB)»** · 첫 등장 풀이 «الرهان الإجباري الصغير/الكبير» · **«الأنتي»** · BB ante = «أنتي البيغ بلايند (BB Ante)» | 🔴 «الرهان الصغير/الكبير» 단독 금지(§3-A) |
| check / bet / call / raise / fold | **التمرير (تشيك)** · **الرهان** · **المجاراة (كول)** · **الزيادة (ريز)**(동사 «يزيد/يرفع» 허용) · **«الطي (فولد)»** + 설명형 «الانسحاب من اليد» 1회 병기 | 첫 등장만 괄호 · 코퍼스 التمرير 45 · المجاراة 64 · الزيادة 57 · الطي 48 |
| open-raise / limp / open-limp / over-limp | **الافتتاح بزيادة (Open-Raise)** · 🆕 **«الدخول بالمجاراة (Limp)»**(코퍼스 1회 선례) · open-limp = «الافتتاح بالمجاراة (Open-Limp)» · over-limp = «المجاراة خلف لاعب دخل بالمجاراة (Over-Limp)» | 이후 «الليمب» 허용(코퍼스 2) |
| 3-bet / 4-bet | **3-bet · 4-bet** 라틴(첫 등장 «3-bet (إعادة الزيادة)») | 코퍼스 3-bet 3 |
| c-bet / delayed c-bet / double·triple barrel | **«الرهان الاستمراري (C-Bet)»** 첫 등장 → 이후 **«C-Bet»** 라틴 또는 «الرهان الاستمراري» · «رهان المتابعة» 1회 병기 허용 · 🆕 delayed = «C-Bet المؤجَّل (Delayed C-Bet)» · double barrel = «البرميل المزدوج (Double Barrel)» · triple barrel = «البرميل الثلاثي (Triple Barrel)» | 🔴 seoTitle·desc·H1에서 «الرهان الاستمراري» **단독 금지** — 반드시 «في البوكر» 또는 «C-Bet» 동반(§3-A · 종교 SERP) · «سي بت» 금지 |
| bluff / semi-bluff / value bet / check-raise / donk bet / float | **البلف** · «نصف بلف (Semi-Bluff)» · 🆕 «رهان القيمة (Value Bet)» · 🆕 «التشيك ريز (Check-Raise)» · «دونك بيت (Donk Bet)» · 🆕 float = «المجاراة للمناورة (Float)» | 🔴 «بلاف»·«الخداع» 단독 금지(«البلف (الخداع)» 첫 등장 병기만) · «تشيك ريز» 단독 헤드 금지(자동완성 = 음식점) |
| flop / turn / river / preflop / postflop / street | **الفلوب · التيرن · «الريفر (النهر)»**(첫 등장 후 «الريفر») · **ما قبل الفلوب · بعد الفلوب** · street = «الجولة» | 🔴 «النهر» 단독 반복 금지(§3-A) |
| board / community cards / hole cards | **البورد**(첫 등장 «البورد (الأوراق المشتركة)») · 홀카드 = **«ورقتاك الخاصتان»**/«الأوراق الخاصة» | 코퍼스 البورد 20 · الأوراق المشتركة 14 |
| range / range advantage / nut advantage | 🆕 **«النطاق (Range)»** 첫 등장 → «النطاق» · «أفضلية النطاق (Range Advantage)» · «أفضلية النتس (Nut Advantage)» | L5 원문 집계 النطاق 12 vs رينج 1 |
| pot / pot odds / implied odds / equity / EV / fold equity / outs / draw | **البوت** · **«احتمالات البوت (Pot Odds)»** · 🆕 «الاحتمالات الضمنية (Implied Odds)» · **«الإكويتي (Equity)»** · «القيمة المتوقعة (EV)» · 🆕 «إكويتي الطي (Fold Equity)» · **الأوتس** · draw = «الدرو» · flush draw = «درو الفلاش» · OESD = «درو ستريت مفتوح الطرفين» · gutshot = «الغت شوت (Gutshot)» · backdoor = «باكدور» | 🔴 «القدر» 단독 금지(«ليلة القدر») · «بوت أودز» 단독 헤드 금지 |
| set / trips / top pair / overpair / kicker / nuts | 🆕 **«السِت (Set)»** · 🆕 **«التريبس (Trips)»** · «التوب بير (Top Pair)» · «الأوفر بير (Overpair)» · **الكيكر** · **«النتس (The Nuts)»** | 족보명 = §3-A·hand-rankings 정본(رويال فلاش · ستريت فلاش · فور أوف آ كايند · فول هاوس · فلاش · ستريت · ثلاثية · زوجان · زوج · ورقة عالية) |
| ace | **الآس** (굴절형까지) | 🔴 «الإيس» 금지 |
| stack / effective stack / chips / buy-in / bankroll | **الستاك** · «الستاك الفعّال (Effective Stack)» · **الرقائق** · «الباي إن (Buy-in)» · «البانكرول (Bankroll)» | 코퍼스 الستاك 21 · الرقائق 59 |
| tight-aggressive (TAG) / LAG / nit / calling station / fish / shark / whale / reg / maniac | 🆕 **«اللعب الضيق العدواني (TAG)»** · «الفضفاض العدواني (LAG)» · «النِت (Nit)» · «الكولينغ ستيشن (Calling Station)» · **«الفيش (Fish — اللاعب الضعيف)»** · «الشارك (Shark)» · «الحوت (Whale)» · «الريغ (Reg)» · «المانياك (Maniac)» | 🔴 **«فيش» 동음이의**: 아랍 구어 «فيش» = 포커 칩(L3 §4-D) → glossary Fish 행에 «وليست "الفيش" بمعنى الرقائق» 주석 |
| tilt / tell / slow roll / muck | **«التيلت (Tilt)»** · «التِل (Tell)» · «السلو رول (Slow Roll)» · «المك (Muck)» | 🔴 «الميل»(기계번역) 금지 |
| showdown | **«المواجهة (الشوداون — Showdown)»** 첫 등장 → «المواجهة» | §3-A |
| solver / GTO / exploit | **«السولفر (Solver)»** · **GTO** 라틴(첫 등장 «GTO (Game Theory Optimal — الاستراتيجية المتوازنة نظريًا)») · «اللعب الاستغلالي (Exploitative)» | — |
| cash game / tournament / heads-up / 6-max / full ring / multiway | **الكاش جيم** · **البطولة** · **«هيدز أب (Heads-Up)»** · «6-Max» · «الطاولة الكاملة (Full Ring)» · 🆕 multiway = «بوت متعدد اللاعبين (Multiway)» | 코퍼스 هيدز أب 19 |
| board texture / dry / wet / rainbow / two-tone / monotone / paired / connected | 🆕 «نسيج البورد (Board Texture)» · «بورد جاف (Dry)» · «بورد رطب (Wet)» · «Rainbow (ثلاثة أنواع مختلفة)» · «Two-Tone (ورقتان من نوع واحد)» · «Monotone (الأوراق الثلاث من نوع واحد)» · «بورد مزدوج (Paired)» · «بورد متصل (Connected)» | 무늬 = «النوع»(بستوني · كبة(قلوب) · ديناري · سباتي는 쓰지 말고 기호로) |
| VPIP / PFR / HUD / RFI / ICM / MTT / SNG / GTD / NLH / PLO | 라틴 약어 그대로 + 첫 등장 한 줄 풀이 | — |

### 0-4. 도구 링크 (계획 §1 · §3-C)
- `/ar/hand-chart` = **시작 핸드 차트의 주인**. 앵커 = «جدول الأيدي الافتتاحية حسب الموقع» · 보조 «مخطط الأيدي (Hand Chart)». 🔴 시작 핸드 차트어를 글 제목·H2 주력어로 쓰지 않는다.
- `/ar/calculator` = 계산 의도 주인. 앵커 = «حاسبة احتمالات البوكر». 🔴 «حاسبة»를 글 제목에 쓰지 않는다.
- `/ar/win-rate-quiz` = 연습 의도 주인. 앵커 = «اختبار نسبة الفوز».
- 🔴 없는 것: `/ar/solver` · `/ar/glossary` · GTO 4편(`donk-bet-strategy`·`monotone-board-strategy`·`broadway-board-strategy`·`a-high-board-cbet`) · `3bet-pot-bet-sizing` · `low-board-check-raise` · `holdem-tiebreak-rules`(→ `holdem-hand-rankings#kicker` — 🅱 rank 레인이 앵커를 새로 만든다) · 그 밖의 EN 글 전부(position-play · starting-hands-chart · limping · 3bet · when-to-fold · cooler · fish · bad-beat · outs · rake · straddle · split-pot-rules).
- ar 걸 수 있는 글 15편 = texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings · holdem-probability · holdem-pot-odds · holdem-tournament · holdem-tournament-vs-cash-game · holdem-strategy · holdem-positions · holdem-continuation-bet · holdem-glossary.
- 썸네일 이미지(존재 확인 10-14): `holdem-<slug>-hero.webp`는 betting-actions·blind-meaning·all-in-rules·showdown-rules·hand-rankings·probability·pot-odds·tournament·strategy·positions·continuation-bet·glossary 有 · rules = `/images/rules-texas-holdem.webp` · game-order = `/images/blog-holdem-game-flow.webp` · vs-cash = `/images/tournament-table-action.webp`.

- 🔴 **대체 링크의 약속 수준을 대상에 맞춘다**(아스트라 #24): EN이 «position-play(자리별 레인지·수치·IP/OOP 운영)»를 약속하던 문장을 `holdem-strategy`로 돌릴 때는 앵커·주변 문장을 «أساسيات استراتيجية الموقع»(포지션 기본 원리) 수준으로 낮춘다 — 자리별 수치·완전한 운영법을 약속하지 않는다(그건 `/ar/hand-chart`·EN 전용).
- 🔴 **readnext·관련 글 카드를 교체할 때는 URL·이미지·제목·부제를 «동시에» 새 대상에 맞게 다시 쓴다**(아스트라 #25) — 목적지만 바꾸고 EN 라벨(«Starting Hands Chart by Position»·«Playing Your Position» 등)을 번역해 남기면 잘못된 안내다.

### 0-5. 하지 말 것 (공통)
- EN에 없는 사실·수치·카드·인물·장소·금액(특히 걸프·이집트 카지노·대회·클럽) 금지. 현지 추가 H2/FAQ는 **아래 각 편에 적힌 내용만**(수치는 레인 A가 검산해 축어로 준 것만).
- «80/20 rule»·«50% rule»·«72 rule»(영어 PAA 반복)은 **쓰지 않는다** — 정의가 출처마다 다르고 EN 근거 없음(L5 §9-A 🟡).
- «كيف تربح في البوكر»(돈벌기 SERP 0/8) · «المواقع في البوكر» · «الرهان الاستمراري»(단독) · «كيف تربح المال» 류를 seoTitle·desc·H1·tags에 쓰지 않는다.
- «poker face» 어원·«بوكر» 단어 어원(PAA 반복이지만 EN 근거 없음) — glossary FAQ에서 **정의만** 다루고 어원 주장은 하지 않는다.

---

## 1. holdem-strategy — EN updated 2026-10-12 · `masterUpdated: "2026-10-12"`

### 1-1. 메타 (EN 축어)
- title: Texas Hold'em Strategy: The 5 Decisions Behind Every Winning Hand
- seoTitle: Why Poker 'Tips' Never Stuck — Texas Holdem Strategy in 5 Decisions
- desc: Winning poker isn't ten disconnected tips — it's the same five decisions every hand: position, hand selection, raise-or-fold, c-betting, and when to let go.
- tldr: (EN L8 — 5개 질문 · TAG ~80% fold preflop)
- tags: texas holdem strategy · poker strategy · poker strategy for beginners · how to win at texas holdem · tight aggressive · when to fold in poker · when to bluff · when to 3-bet · c-bet strategy
- category `strategy` · readTime `14 دقيقة` · emoji `♠️` · image `/images/holdem-strategy-hero.webp` · imageAlt = EN 의미 그대로 아랍어(«لاعب بوكر يفكر في قراره على طاولة تكساس هولدم خضراء، أمامه الرقائق والأوراق المشتركة في منتصف اليد»)

### 1-2. 구조 (EN 1:1 — 많은 것 허용 · 적은 것 결손)
- 도입 2문단(L19·L21 · **1인칭 경험담**) → `---` → `### ` stripe 머리(L25) + `:::stripe` 4행(L27–32) → H2 × 9(L36·58·74·91·107·121·133·143·164) + **현지 추가 2**(아래) → readnext → FAQ 14(+현지 추가 1) → 마무리 H2(L240 · 번호 목록 5) → 관련 글 H2 + 카드 4.
- 표 2(L42–52 결정표 `<div style=…>` 래퍼 축어 · L147–158 실수 6행표 래퍼 축어) · 이미지 3: L60 `/images/holdem-strategy-button-seat.webp` · L93 `/images/holdem-strategy-raise-or-fold.webp` · L123 `/images/holdem-strategy-fold-ace-high.webp` — alt·title 아랍어로(내용 축어 · 카드·숫자 그대로).
- 🆕 **현지 추가 H2 ①** «البلف»(L5 §1 — «البلف في البوكر» SERP 8/8 아랍어 · 우리 ar 클러스터에 bluff 단독 글 없음 → 이 글이 수용처) — 위치 = Decision 5 다음, «The Math» 앞. 내용 = EN FAQ «When should you bluff?»(L202–204)의 논지(믿을 만한 이야기 · 상대가 접을 수 있을 때 · 세미블러프 · IP · 1명 · 레인지에 유리한 보드 · 멀티웨이 순수 블러프 금지) + **브레이크이븐 표**(레인 A 검산 · 공식 = 베팅 ÷ (베팅 전 팟 + 베팅)):

  | 베팅 크기(팟 대비) | 순수 블러프의 손익분기 폴드율(상대가 이 비율 이상 접어야 본전 — 콜 받으면 베팅을 잃는 단순 모델) |
  |---|---|
  | 33% | 0.33 ÷ 1.33 = 24.8% |
  | 50% | 0.5 ÷ 1.5 = 33.3% |
  | 75% | 0.75 ÷ 1.75 = 42.9% |
  | 100%(팟 사이즈) | 1 ÷ 2 = 50% |

  33%·75% 행은 EN c-bet L182와 같은 값(클러스터 일관). 세미블러프 한 줄 = «9아웃 플러시 드로가 **플러시를 완성할** 확률은 플롭에서 리버까지 두 장을 다 볼 때 ==35.0%==, 턴에서 리버 한 장이면 ==19.6%==» — 🔴 «완성 확률 ≠ 승리 확률»이고 «35.0%는 리버까지 두 장을 다 보는 경우(지금 콜 한 번이 두 장을 보장하지 않음)»라는 조건을 문장에 남긴다(아스트라 #12)(레인 A 검산: 1 − 38/47 × 37/46 = 0.3497 · 9/46 = 0.1957). 🔴 «2의 법칙 18%» 같은 근사를 정확값처럼 쓰지 않는다(경쟁 오류 L5 §6 ⑥). 링크 → `/ar/blog/holdem-pot-odds`·`/ar/calculator`.
- 🆕 **현지 추가 H2 ②** «هل البوكر حظ أم مهارة؟»(L5 §1 — SERP 9/10 · 아랍어 8) — 위치 = TAG 절 다음, readnext 앞. 내용 = EN FAQ L226–228 논지만(한 핸드는 운 큼 · 수십만 핸드에서 실력 우위 · 분산이 고르게 됨 · «덱으로 하는 실력 게임»). 🔴 종교·합법·«قمار» 언급 0 · 새 통계 0. EN FAQ 문항도 FAQ에 그대로 남긴다(짧게).
- 🆕 **현지 추가 FAQ** «كيف تحترف البوكر؟»(EG 자동완성 «كيف تحترف البوكر») — 답 = EN FAQ «How do you get better at poker?»(L234–236) 논지 재사용(새 사실 0). EN «How do you get better» 문항은 이것으로 **대체**(문항 수 14 유지 · 진행 파일 기록).

### 1-3. 링크 (EN → ar · 진행 파일 «링크 편차»와 동일)
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| 46 | holdem-position-play | → `holdem-positions` |
| 47 · 78 · 87 · 248 | holdem-starting-hands-chart | → `/ar/hand-chart`(L78은 thumb 빼고 일반 링크) |
| 48 | holdem-limping | → `holdem-betting-actions` |
| 49 | holdem-betting-actions | → `holdem-continuation-bet`(결정 4 = c-bet · 표 칸 정합 · ar 개선) |
| 50 · 129 · 137 · 248 | holdem-pot-odds | 그대로(L129 thumb `holdem-pot-odds-hero`) |
| 62 | holdem-position-play (thumb) | → `holdem-positions` thumb `/images/holdem-positions-hero.webp` |
| 70 | holdem-blind-meaning | 그대로 |
| 97 | holdem-limping | 링크 빼기(낱말 유지) |
| 103 | holdem-3bet (thumb) | 링크 빼기 |
| 109 · 113 · 224 | holdem-continuation-bet | 그대로(L109 thumb) |
| 117 | holdem-betting-actions | 그대로 |
| 129 | holdem-when-to-fold (thumb) | 링크 빼기(문장 유지 · 같은 문단의 pot-odds 링크가 남는다) |
| 139 | holdem-probability | 그대로 |
| 137 | (추가) | 문장 끝에 `/ar/calculator` 앵커 1개(«حاسبة احتمالات البوكر») — L5 §9-A 도구 링크 |
| 236 → 현지 FAQ | (추가) | `/ar/win-rate-quiz` 앵커 1개(연습 의도) |
| 176–177 readnext | position-play · starting-hands-chart | → `holdem-positions`(img `holdem-positions-hero`) · `holdem-continuation-bet`(img `holdem-continuation-bet-hero`) |
| 254–275 카드 4 | position-play · starting-hands-chart · limping · pot-odds | → `holdem-positions` · `holdem-continuation-bet` · `holdem-pot-odds` · `holdem-probability`(카드 라벨·부제는 아랍어로 새로 — 대상 글 내용에 맞게) |
| 248 | holdem-position-play | → `holdem-positions` |

### 1-4. 키워드 (L5 §1·§2·§3 축어 · DFS 2682/2818 · 10-14)
| 검색어 | 볼륨 SA/EG | SERP | 어디에 |
|---|---|---|---|
| استراتيجية البوكر | `-`/`-` | 🟢 10/10 · 아랍어 9 | **주력어** — seoTitle·H1·첫 H2·tags |
| كيف تفوز في البوكر | (자동완성) | P20 vibe H1 | H2 또는 FAQ 문구 · tags |
| البلف في البوكر | `-` | 🟢 8/8 · 아랍어 8 | 현지 H2 ① · tags |
| هل البوكر حظ ام مهارة | `-` | 🟢 9/10 · 🔴 related 종교 2 | 현지 H2 ② (판단 축 금지) |
| كيف تلعب البوكر باحتراف | `-` | 포커 8/9 · 아랍어 1(pokerstar.co.il/ar) | 현지 FAQ 표현 재료 |
| كيف تحترف البوكر | `-` (EG 자동완성) | (SERP 미측정) | 현지 FAQ ⑭ |
| البوكر للمبتدئين | 10/10 | — | FAQ «للمبتدئين» 문항 · tags |
| اسرار البوكر | 10/10 | 🟡 아랍어 0 | tags만 |
| poker strategy · texas holdem strategy · poker strategy for beginners | 10/10 | 영어만 · 아랍어 0 | tags·본문 괄호 병기만(§2 ⑦) |
| 🔴 كيف تربح في البوكر | 0/10 | 0/8 돈벌기 | **금지**(제목·desc·tags) |

### 1-5. 현지 SERP — 우리가 더 줄 것
- 상위 = 제휴 아카데미(pokeracademyar «أفضل 10 استراتيجيات للفوز في البوكر 2025» · /casino·/lp 보유) · 앱 운영사 블로그(vibe-poker/ar · clubggpoker/ar) · DW 2015 과장 기사 · 실머니 «Top 4 Online Poker Casinos». 경험담 0/22 · 카드 예시 거의 0 · 근거 없는 통계.
- 더 줄 것: ① «10개 팁»이 아니라 «5개 결정» 구조(경쟁 제목과 정면 대비) ② 1인칭 실전 핸드(A♣K♣ 폴드)와 정확 수치(27% · 11.8% · 브레이크이븐 표) ③ 제휴·보너스·앱 0 + 도구 3개 링크.
- PAA(아랍어 SERP · 축어): «ما هي ألعاب البوكر؟» · «هل البوكر هو القمار؟»(🔴 조준 금지) · «ما هو البوكر فيس؟» · «ما معنى كلمة البوكر؟» — 전략 질문 아랍어 PAA 0. 영어 PAA «What is the best strategy in poker?» → FAQ 1번 문항이 받는다.

### 1-6. 확정 카피 → §5-1

### 1-7. §13 자리 (EN L## · 축어 — C가 전사 대조·손검산)
- L28–31 stripe: `5` · `~80%` · `11.8%` · `≈1 in 8.5` · `0%`.
- L78 · L216 · L243: `roughly 80%` / `about one in five`.
- L82–85 핸드 클래스: `A‑A down to T‑T` · `A‑K` · `A‑Q` · `K‑Q, A‑J suited` · `J‑4, Q‑7, K‑3` (`T‑T`는 무늬 없음 → 그대로) · L70 `K‑J`.
- L93 이미지 alt: `1.5 ÷ 5.5` · `27%` · `11.8%` · «pair of fives».
- L103: `2.5bb open` · `1bb already posted` · `calling 1.5bb into a 4bb pot` · `==1.5 ÷ 5.5 = 27%==` (검산: 2.5+1+0.5 = 4bb 팟 · 콜 1.5 → 5.5 · 1.5/5.5 = 27.3% ✓).
- L113–117: `K‑7‑2` · `9‑8‑7` · `less than half` · `25–35%` · `65%+` (FAQ L224 동일).
- L127 **경험담 핸드**: `A♣K♣` · flop `2♥ 7♦ 9♠` · «ace-high, no pair, no draw»(검산: 클럽 0장 보드 → 백도어 플러시 불가 · A‑K + 9‑7‑2 → 스트레이트 드로 없음 ✓) · «set of nines»(9♠ 보드 + 9‑9 ✓).
- L137: `4-to-1` · `about 1-in-5`.
- L139: `11.8%` · `1 in 8.5` · flop `5♣ K♠ 2♦` + `5♠5♦` = 셋(카드 중복 없음 ✓) · `~88%` · `~15–20×`.
- 현지 H2 ①의 표·35.0%·19.6%(위 1-2 · 레인 A 검산).

### 1-8. 경험담 자리 (EN 1인칭만 · 새 사실 금지)
- L19(팁 리스트 2년 · 계속 짐) · L21(5결정 깨달음) · L127(A♣K♣ 체크레이즈 폴드 · «2년 전이면 콜해서 9 셋에 다 줬다»). 걸프·이집트 현장으로 바꾸지 않는다(장소 미상 그대로).

### 1-9. 하지 말 것
- GTO FAQ(L230–232)는 정의만 · 솔버 링크 없음. «Hand selection» 절에 포지션별 오픈 레인지 표를 새로 만들지 않는다(`/ar/hand-chart` 주인).
- 팟오즈 절을 길게 늘리지 않는다(`holdem-pot-odds` 주인 · 요약+링크).

---

## 2. holdem-positions — EN updated 2026-09-28 · `masterUpdated: "2026-09-28"`

### 2-1. 메타 (EN 축어)
- title: Poker Positions: Every Seat Name & Chart
- seoTitle: Your Seat Changes Names Every Hand — Poker Positions Chart
- desc: The names move with the button, not the chairs. Every poker position name — UTG, hijack, cutoff, button — plus seat numbers, 6-max map, and who acts first.
- tldr: (EN L8 — 버튼 기준 이름 · 매 핸드 시계방향 이동 · 프리플랍 UTG 첫/BB 끝 · 포스트플랍 SB 첫/버튼 끝 · 헤즈업 예외 · 좌석 번호는 고정)
- tags: poker positions · poker position names · poker seat numbers · poker positions chart · hijack lojack poker · position poker table · who acts first poker
- category `strategy` · readTime `12 دقيقة` · emoji `🎯` · image `/images/holdem-positions-hero.webp` · imageAlt = EN 의미(«منظر علوي لطاولة بوكر احترافية تظهر عليها 9 مواقع للاعبين مع أكوام الرقائق وزر الموزع الذهبي»)

### 2-2. 구조
- 도입 3문단(L27·29·31 · **1인칭 경험담** J♥J♠) → `---` → `> **الإجابة السريعة**` 블록(L35–36 · `==…==` 2개 축어 위치) → H2 × 9(L40·66·87·107·117·130·140·153·170) → readnext → FAQ 7(+현지 추가 2) → 마무리 H2(L229 · 번호 4) → 관련 글 카드 4.
- 표: L48–58(9행 좌석표) · L70–79(약어 8행) · `:::compare` L95–101(4행) · L157–160(행동 순서 2행) · L174–182(인원별 7행). `> **Live table note:**`(L62) · `> **Naming caveat:**`(L188) 인용 블록 → 라벨 «> **ملاحظة من الطاولة الحية:**» · «> **تنبيه حول التسميات:**».
- 이미지 1: L46 `/images/holdem-button-position-hero.webp`(alt 아랍어 · «D» 그대로).
- 🆕 **현지 추가 문장**(L5 §6 ③ 경쟁 오류의 정답 — 새 사실 아님, EN 표에서 직접 따라 나옴): «Who acts first» 절 끝에 한 문장 — «على طاولة من 3 لاعبين أو أكثر، يتصرف البيغ بلايند بعد الفلوب بعد السمول بلايند وقبل كل المقاعد الأخرى، لذلك يكون **دائمًا خارج الموقع** أمام الكت أوف أو الزر (وفي الهيدز أب يتصرف البيغ بلايند أولًا بعد الفلوب أمام الزر الذي هو السمول بلايند)»(검산: 3인+ 포스트플랍 SB → BB → UTG … BTN · 헤즈업 BB 먼저 = EN L184 ✓ · 아스트라 #13 반영).
- 🆕 **현지 추가 FAQ 2**(L5 §4 related «What does co mean in poker?» · «What is cutoff in poker» · «What does BTN mean in poker» · pokeracademyar FAQ «ما هو أفضل موقع على طاولة البوكر؟»):
  - «ما هو الكت أوف (CO) في البوكر؟» — 답 = EN L132 내용(버튼 오른쪽 한 자리 · 레이트 포지션 · 이름 유래 두 설 «블라인드 스틸을 가로챈다 / 홈게임에서 덱을 컷한 자리» — EN이 «둘 다 전해지는 이야기»로 쓴 톤 유지).
  - «ما هو أفضل موقع على طاولة البوكر؟» — 답 = EN L134–136 내용(버튼 BTN = 모든 포스트플랍 스트리트 마지막 행동 · 가장 수익성 높은 자리로 여겨짐 · 블라인드는 포스트플랍 먼저 행동). 새 수치 0.

### 2-3. 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| 31 | texas-holdem-rules-for-beginners | 그대로(thumb `/images/rules-texas-holdem.webp` 허용) |
| 83 · 136 | holdem-position-play | → `holdem-strategy`(«كيف تلعب من كل موقع» = 결정 1 · 앵커는 그 뜻으로) |
| 113 · 186(앞) | holdem-position-play(UTG·6-max 레인지 수치) | → `/ar/hand-chart`(오픈 레인지 = 도구 주인 · §3-C) |
| 149 | holdem-blind-meaning | 그대로 |
| 166 | holdem-showdown-rules · holdem-game-order | 그대로 |
| 186(뒤) | holdem-starting-hands-chart | → `/ar/hand-chart`(같은 문장에 두 번이면 한 번으로 합친다 — 결손 아님 · 진행 파일 기록) |
| 193–194 readnext | position-play · starting-hands-chart | → `holdem-strategy`(img `holdem-strategy-hero`) · `holdem-game-order`(img `/images/blog-holdem-game-flow.webp`) |
| 236 | position-play (thumb) · starting-hands-chart · hand-rankings | → `holdem-strategy` thumb `holdem-strategy-hero` · `/ar/hand-chart` · `holdem-hand-rankings` |
| 242–263 카드 4 | rules · position-play · game-order · blind-meaning | rules · **`holdem-strategy`** · game-order · blind-meaning |

### 2-4. 키워드 (L5 §1·§2·§3)
| 검색어 | 볼륨 SA/EG | SERP | 어디에 |
|---|---|---|---|
| الموقع في البوكر | (변형) | 🟡 6/8 · 아랍어 1(clubgg 3위) | **주력어**(단수) — seoTitle·H1·첫 H2 |
| مقاعد طاولة البوكر / أسماء المقاعد على الطاولة | `-` | clubgg H2 축어 | 부주력 — seoTitle 또는 H2 |
| UTG | 110/70 | 🔴 단독 0/9 | 제목 안 약어로만(§2 ⑦ 예외) · 단독 헤드·태그 단독 금지 → 태그는 «UTG في البوكر» |
| under the gun | 50/20 | 🔴 0/7 K-드라마 | 본문 병기만 |
| poker positions · poker position names · poker positions chart | 10 | 영어만 | tags·괄호 병기 |
| 🔴 المواقع في البوكر · مواقع البوكر | `-` | 포지션 0 · 실머니 사이트 | **금지**(제목·desc·tags) |

### 2-5. 현지 SERP — 우리가 더 줄 것
- 상위: clubgg «الموقع في البوكر: لماذا يغيّر مكانكم على الطاولة كل قرار»(285단어 · 좌석표 1) · vibe «المواقع في البوكر: «الزر» والبلايندز…»(3인 테이블 중심) · pokeracademyar(«Blinds (الستائر)» 오역 · 근거 없는 통계) · gtogecko(기계번역 «الخاطف»·«القطع» · BB «مع الموقع» 규칙 오류).
- 더 줄 것: ① **좌석 번호(Seat 1) ≠ 포지션** 절(경쟁 0) ② 프리플랍/포스트플랍 행동 순서 표 + 인원별(2~10) 표 ③ 올바른 아랍어 좌석명 + BB는 포스트플랍에서 CO·BTN 상대로 항상 OOP(경쟁 오류 정정 · 3인+ 기준).
- PAA(아랍어 SERP 축어): «ما هو البوكر فيس؟» · «هل البوكر هو القمار؟»(🔴) · «من هو لاعب البوكر؟» · «ما هي لعبة تكساس؟» — 포지션 PAA 0. 영어 related: «What does co mean in poker?» · «What is Lojack and hijack in poker» · «What does BTN mean in poker» · «What is cutoff in poker».

### 2-6. 확정 카피 → §5-2

### 2-7. §13 자리
- L48–58 좌석표 9행 × 프리플랍/포스트플랍 순번(UTG 1st/3rd … BB 9th/2nd) — 숫자 축어(서수는 «الأول / الثالث …» 또는 «1 / 3»으로 — 표 안은 숫자 `1` · `3` + «الأخير»가 읽기 쉽다: 형식 자유 · 값 불변).
- L62 «three seats left of the button». L74–79 «Three/Two/One seat(s) to the right of the button» · «First/Second seat left of the button».
- L91 «Seat 9 or 10». L111 «three under the gun seats». L119 «two / three to the right». L132 «one to the right».
- L157–160 행동 순서표 · L174–182 인원별 7행(2·3·4·5·6·9·10) · L186 «6-max UTG faces five opponents, not eight».
- L27–29 경험담 핸드: `J♥ J♠` · «won $14».
- FAQ L217 «three early seats» · L221 «exactly once».

### 2-8. 경험담 자리
- L27(첫 라이브 캐시게임 UTG · J♥J♠ · 3벳 맞고 3스트리트 출혈) · L29(버튼 같은 핸드 · $14) · L31(«자리 이름을 몰랐다»). 장소 지어내지 않는다.

### 2-9. 하지 말 것
- 포지션별 오픈 레인지·%를 새로 쓰지 않는다(hand-chart 주인). Hijack/Lojack 어원은 EN처럼 «전해지는 이야기»로만(단정 금지).
- «تحت المدفع» 금지 · «الخاطف»·«القطع» 금지.

---

## 3. holdem-continuation-bet — EN updated 2026-10-13 · `masterUpdated: "2026-10-13"`

### 3-1. 메타 (EN 축어)
- title: Continuation Bet (C-Bet): When to Fire the Flop, How Much, and When to Check
- seoTitle: Why 'C-Bet Every Flop' Bleeds Chips — Continuation Bet Strategy
- desc: What a continuation bet is, which flops to c-bet and which to check, exact sizing — small on dry boards, big on wet — and how often to fire in position.
- tldr: (EN L8 — 🔴 «(as the out-of-position 3-bettor it flipped to over 97% on the three boards we solved)» 괄호는 **ar에서 뺀다**: 그 근거 문단(EN L200 표 셀의 3bet 부분)은 남지만 «we solved» 3보드 글이 ar에 없다 → **괄호만 삭제**하고 그 뒤 «and much less multiway»(멀티웨이에서 훨씬 덜)는 유지 · 확정 문안 = §5-3. 진행 파일 기록)
- tags: continuation bet · c-bet poker · what is a c-bet · c-bet sizing · c-bet frequency · when to c-bet · when not to c-bet · c-bet out of position · multiway c-bet · delayed c-bet
- category `strategy` · readTime `18 دقيقة` · emoji `🔥` · image `/images/holdem-continuation-bet-hero.webp` · imageAlt = EN 의미 아랍어
- 🔴 EN 파일 머리 주석(L11–12): «range advantage 절의 a-high-board-cbet 역링크 문단은 번역본에 전파하지 않는다 — 의도적 차이» → **ar도 그 문단(L65)을 넣지 않는다**(tr 회차 4 선례 · `locale-intentional-diffs` 2026-10-06 행: «링크 없는 솔버 수치 문단은 근거가 끊긴다»).

### 3-2. 구조
- 도입 2문단(L21 · **1인칭 경험담** · L23) → `---` → `### ` stripe 머리 + `:::stripe` 4행(L29–34) → H2 × 12(L38·54·71·97·190·212·230·241·249·261·274·286) → readnext → FAQ 12 → 마무리 H2(L363 · 번호 5) → 관련 글 카드 4.
- 🔴 **뺄 것 3자리**(GTO 보류 · `/ar/solver` 없음 · 근거 글 없음): ① L65 A-7-2 98.2% 문단 전체 ② L67 «Review your own hand» 솔버 핸드리뷰 인용 블록 전체(솔버 앱 ar UI 없음) ③ L226 Q♥T♥7♠ 98.4% 문단 전체. → 진행 파일 «링크 편차» 3행.
- **남길 것**: L97–186 솔버 표 절 전부(H3 4 · 표 6 · 인용 2) — 수치는 EN 축어. L101 «How these numbers were calculated» 인용 = **링크 없이** «HoldemMaster GTO solver»를 평문으로(«نتائج من سولفر HoldemMaster لـ GTO …»). L182 끝 절 «— for one low-board check-raise … see [when the big blind check-raises a low flop](…)» **절만 빼고** 앞 문장 유지. L184 마지막 문장 «The exception boards … [donk bet guide]» **빼고** 앞 두 문장(2.4% · 1.7% · 0.7% · 7.2% · 92.8% · 9.2%) 유지. L200 셀의 «see the [position guide]» 링크 빼기(3-bettor 수치 문장은 유지 — 단 «on all three boards we solved»는 «في ثلاثة بوردات حسبناها بالسولفر»로 사실 그대로). L234 «(… see the [position guide])» 괄호 안 링크 빼기(문장 유지).
- 표: L77–87 텍스처 5행(래퍼 div 축어) · L107–115 · L119–127 · L133–139 · L145–152 · L160–168 · L172–180 · L194–204(빈도 5행 · 래퍼) · L288–300(실수 7행 · 래퍼). 이미지 2: L73 `/images/holdem-cbet-dry-board.webp` · L232 `/images/holdem-cbet-oop.webp`.
- 인용 블록 라벨: L101 «> **كيف حُسبت هذه الأرقام** —» · L186 «> **كيف تقرأ هذه الجداول** —».

### 3-3. 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| 23 · 307 · 371 · 카드 | holdem-strategy (thumb) | 그대로 |
| 50 | holdem-betting-actions | 그대로 |
| 65 | a-high-board-cbet | **문단 삭제**(위) |
| 67 | solver hand-review(외부) | **블록 삭제** |
| 101 | /en/solver | 링크 없이 평문 |
| 182 | low-board-check-raise | 절 삭제 |
| 184 | donk-bet-strategy | 문장 삭제 |
| 200 · 234 | holdem-position-play | 링크 빼기 |
| 226 | 3bet-pot-bet-sizing | **문단 삭제** |
| 237 | holdem-position-play (thumb) | → `holdem-positions` thumb `holdem-positions-hero`(앵커 «الموقع») |
| 308 readnext | holdem-3bet | → `holdem-pot-odds`(img `holdem-pot-odds-hero` · 라벨 «لماذا يفرض C-Bet الكبير ثمنًا على الدرو»류) |
| 371 | holdem-3bet · holdem-position-play | 3bet 링크 빼기(낱말 유지) · position → `holdem-positions` |
| 377–397 카드 4 | strategy · 3bet · position-play · pot-odds | strategy · **`holdem-positions`** · **`holdem-probability`** · pot-odds |
| (추가 안 함) L182 | — | 🔴 `/ar/calculator`는 에퀴티 계산기라 «폴드율 문턱» 문장에 걸지 않는다(아스트라 #26) |

### 3-4. 키워드 (L5 §1·§2·§3)
| 검색어 | 볼륨 SA/EG | SERP | 어디에 |
|---|---|---|---|
| الرهان الاستمراري في البوكر | `-` | 🟡 6/8 · c-bet 해설 0 | **주력어**(반드시 «في البوكر» 동반) |
| C-Bet (라틴) | — | 원문 9편 라틴 | 제목 안 약어로(§2 ⑦ 예외) |
| رهان المتابعة | `-` | vibe 3편 | 본문 1회 병기 · tags 1 |
| cbet poker meaning · sizing · frequency · delayed cbet · cbet oop · cbet range · cbet percentage | 10 / (자동완성) | 영어만 | H2·FAQ 질문 표현 재료 · tags(영어 병기 허용 — 기존 EN tags 유지) |
| 🔴 الرهان الاستمراري (단독) | `-` | 0/10 종교 판단 | **금지** |
| 🔴 cbet | 40/70 | SA 0/9 · EG 0/10(CBET 자격증) | **금지** |
| 🔴 سي بت | `-`/`-` | (자동완성 = 피자·해변) | **금지** |

### 3-5. 현지 SERP — 우리가 더 줄 것
- 아랍어 SERP top10에 c-bet 해설 **0**(빈자리) · 10위 밖 gtogecko(기계번역 «استدعاء»=call · «الوعاء» · 솔버 수치 출처 없음) · vibe(정확하나 짧음 559단어).
- 더 줄 것: ① 1,755 플롭 솔버 빈도표(조건·출처 명시) ② 사이즈별 브레이크이븐(24.8% · 42.9%)과 BB 폴드율 대비 ③ 실전 두 핸드 베스트5 명시.
- PAA(아랍어 SERP의 PAA는 «ما هو البوكر فيس؟»·«ما معنى كلمة البوكر؟»·«ما هي قواعد لعبة البوكر؟» = **c-bet 전용 아랍어 PAA 0** · 영어 축어): «What is a CBet in poker?» · «How often should you CBet poker?» · «What should my CBet percentage be?» → EN FAQ 1·4·12번이 이미 받는다. vibe FAQ 축어 «لماذا سُمّي رهان المتابعة بهذا الاسم؟» ↔ EN FAQ 2 «Why is it called…» 일치.

### 3-6. 확정 카피 → §5-3

### 3-7. §13 자리
- L30–33 stripe: `~2 in 3` · `⅓ pot` · `55–70%`.
- L42: `about two-thirds of the time (67.6%)`(검산: 두 홀카드 랭크가 플롭 3장에 하나도 안 나올 확률 = C(44,3)/C(50,3) = 13,244/19,600 = 67.6% ✓).
- L65·L226 = 삭제분 — 전사 대조의 «정상 결손»은 **삭제 문단 안의 출현에만** 한정한다(L65: 98.2% · 45.1% · 54.9% · `A-7-2` / L226: 98.4% · `Q♥T♥7♠`). 🔴 54.9%(L149 표)·`Q♥T♥7♠`(L200 셀 → `Q♥10♥7♠`)는 보존 자리에도 있으니 그 출현은 검사 대상이다(아스트라 #29).
- L81–85 텍스처 예시: `K‑7‑2, A‑8‑3` · `7‑6‑5, 9‑8‑6` · `8‑8‑3, 5‑5‑2` · `K♠9♠4♠` · `Q♥J♥7♣`.
- L99: `54.7%` · `43.5%` · `67.8%` · `1,755`. L101: `1,755 flops` · `100bb` · `33%/75%` · `60%` · `0.3%`.
- L105: `22,100` · `23.5%` · `43.5%`. 표 L109–115(7행 × 4값) · L121–127(7행 · 카드 14 · `T♣9♦7♣`→`10♣9♦7♣` · `T♥6♦2♣`→`10♥6♦2♣`) · L129(`K♥7♦2♣ 90.2%` · `K♣Q♣2♣ 32.5%` · `60.6% of the 67.8%` · `27.2% vs 16.3%` · `25.9% vs 18.8%`) · L135–139(5행) · L141(`58.8% → 52.6% → 44.2%` · «highest minus lowest is 4 or less» · `A-2-4` · `A-7-2`) · L147–152(6행 × 3) · L154(`63.3%` · `54.9%` · `8.4-point` · `K♥9♠6♣` · `K♥9♥6♣` · `59.1%` · `57.6%`) · L162–168 · L174–180(7행 × 3).
- L182: `==0.33 ÷ 1.33 = about 24.8%==` · `32.1%` · `==0.75 ÷ 1.75 = about 42.9%==` · `48.1%` · `18.0%` · `17.6%` · `9.1%`.
- L184: `2.4%` · `1.7%` · `0.7%` · `7.2%` · `92.8%` · `9.2%`.
- L198–202: `70–100%` · `~50–60%` · `~30–45%` · `over 97%` · `Q♥T♥7♠`→`Q♥10♥7♠` · `8♦5♣2♠` · `A♦K♠2♥ (57.8%)` · `~50% or less`.
- L206: `55–70%` · `~85%` · `~40%`. L208: `54.7%` · `28.5% (A-9-2 monotone)` · `97.1% (7-7-7)`.
- L219–222: `$30` · `$10` · `$20`. L224 «half pot».
- L236 «only a quarter of the time».
- L278 **경험담 핸드 1**: `A♣K♦` · flop `K♠ 7♦ 2♣` · best five `K♦ K♠ A♣ 7♦ 2♣` ✓(탑페어 탑키커).
- L280 **경험담 핸드 2**: `A♥Q♥` · flop `7♠ 6♠ 5♦` · «ace-high with no pair and no draw (no hearts on the board, so not even a backdoor flush)» ✓.
- FAQ L327 · L331 · L359 수치(본문과 같음).

### 3-8. 경험담 자리
- L21(처음 2년 «c-bet = 유일한 플랜» · 망치처럼 휘둘렀다) · L278–282(같은 세션 두 스팟) · L280 «Two years earlier…».

### 3-9. 하지 말 것
- 솔버 표 수치를 반올림·재계산하지 않는다(EN 축어). «솔버 앱에서 직접 확인하라» 류 CTA 금지(ar UI 없음).
- 토너먼트 사이즈 문장(L224)에 새 대회 정보 넣지 않는다.

---

## 4. holdem-glossary — EN updated 2026-10-13 · `masterUpdated: "2026-10-13"`

### 4-1. 메타 (EN 축어)
- title: Texas Hold'em Glossary: Every Poker Term You'll Hear at the Table
- seoTitle: From the Nuts to the Fish — The Texas Hold'em Glossary
- desc: Every poker term you'll hear at the table, explained simply and grouped by situation: betting, positions, hands, slang, and the terms people always mix up.
- tldr: (EN L8 — 6 카테고리 · «most confused» 먼저 · 깊은 가이드 링크)
- tags: poker terms · poker glossary · texas holdem terms · poker slang · poker terminology · poker vocabulary · poker words · what does it mean in poker
- category `glossary` · readTime `12 دقيقة` · emoji `📖` · image `/images/holdem-glossary-hero.webp` · imageAlt = EN 의미 아랍어

### 4-2. 구조
- 도입 2문단(L19 · **1인칭 경험담** · L21) → `---` → `### ` stripe 머리 + `:::stripe` 4행(L27–32) → H2 × 7(L36·59·92·116·158·184·219) → readnext → FAQ 8(+현지 추가 1) → «Where to Go Next» H2(L293 · 목록 4) → 관련 글 카드 4.
- 표 7: L42–51(혼동 8쌍) · L67–86(20행) · L100–108(9행) · L126–150(25행) · L168–178(11행) · L192–213(22행) · L227–246(20행) = 용어 행 20+9+25+11+22+20 = **107**(혼동표 8행 별도 · 아스트라 #8 정정)(EN stripe «90+»). 🔴 stripe 둘째 행 = ar 실제 표 행 수를 B가 세어 **하한**으로(`locale-intentional-diffs` 2026-08-28: «각 로케일이 표 행 수를 실측해 하한»): 107행 전부 옮기면 «100+». 행을 줄이지 않는다(결손).
- 이미지 3: L57 `/images/holdem-glossary-categories.webp` · L118 `/images/holdem-button-dealer-board.webp` · L160 `/images/holdem-glossary-player-types.webp`.
- 표 «용어» 칸 형식: **«아랍어 표기 (English)»** — 예 «التمرير (Check)» · «النتس (The Nuts)» · «الفيش (Fish)». 라틴 약어 항목은 «UTG (Under the Gun)»처럼 라틴 먼저. 경쟁 사전(pokeracademyar 176항목)의 «음차 + 영어» 관습과 같은 방향.
- 🆕 **현지 추가 ①** Fish 행(L168) 정의 끝: «— وانتبه: "فيش" في العامية العربية تعني أيضًا رقائق البوكر، وهذا معنى مختلف تمامًا»(L3 §4-D · §6-3 ③ · SERP «فيش بوكر» = 칩 상품 7/8).
- 🆕 **현지 추가 ②** FAQ «ما معنى البوكر فيس (Poker Face)؟»(L3 §3-3 PAA 4쿼리 반복) — 답 = «감정·생각을 얼굴에 드러내지 않는 무표정 · 상대에게 텔(Tell)을 주지 않기 위해» + 표의 Tell(L232) 항목으로 연결. 🔴 어원·노래·드라마 언급 0. ⚠ «무표정» 정의는 EN에 없는 **현지 용어 정의 추가**(일반 정의 · 숫자·인물·출처 주장 없음)로 명시해 둔다(아스트라 #31).
- 🆕 Range(L240)·Equity(L235) 행에 도구 앵커 각 1(`/ar/hand-chart` · `/ar/calculator`) 허용.

### 4-3. 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| 19 | holdem-cooler (thumb) | 링크 빼기(«الكولر» 낱말 유지) |
| 21 | holdem-fish (thumb) | 링크 빼기 |
| 47 · 149 · 150 · 213 | holdem-cooler · holdem-bad-beat | 링크·«full guide» 꼬리 빼기 |
| 49 · 233 | holdem-pot-odds | 그대로 |
| 61 | holdem-betting-actions (thumb) | 그대로 |
| 72 | holdem-all-in-rules | 그대로 |
| 94 | holdem-position-play | → `holdem-strategy`(«كيف تستخدم الموقع») |
| 112 | holdem-positions (thumb) | 그대로 |
| 120 | holdem-game-order | 그대로 |
| 130 | holdem-tiebreak-rules | → `holdem-hand-rankings#kicker` |
| 141 | holdem-outs | → `holdem-probability` |
| 154 | holdem-hand-rankings | 그대로 |
| 162 | holdem-fish | 문장의 링크 빼기(«… في دليل مخصص» 꼬리 삭제) |
| 186 | holdem-tournament-vs-cash-game (thumb `/images/tournament-table-action.webp`) | 그대로 |
| 192 | holdem-blind-meaning | 그대로 |
| 199 · 201 | holdem-rake · holdem-straddle | 링크·꼬리 빼기 |
| 227 | holdem-showdown-rules | 그대로 |
| 229 | holdem-split-pot-rules | → `holdem-hand-rankings#kicker` |
| 235 | holdem-probability | 그대로 |
| 253–254 readnext | cooler · fish | → `holdem-positions`(img `holdem-positions-hero`) · `holdem-strategy`(img `holdem-strategy-hero`) |
| 297–300 목록 4 | rules · betting · hand-rankings · tiebreak · pot-odds · outs · probability · fish · cooler · bad-beat · straddle · rake | 1행 rules·betting 그대로 · 2행 hand-rankings + `#kicker` · 3행 pot-odds · probability(outs 빼기) · **4행 교체** = «الاستراتيجية: [استراتيجية البوكر](/ar/blog/holdem-strategy) و[الموقع](/ar/blog/holdem-positions) و[الرهان الاستمراري](/ar/blog/holdem-continuation-bet)» |
| 308–329 카드 4 | fish · cooler · betting · hand-rankings | **`holdem-strategy`** · **`holdem-positions`** · betting · hand-rankings |

### 4-4. 키워드 (L3 §0-A·§2·§3-3 · DFS · 10-14)
| 검색어 | 볼륨 SA/EG | SERP | 어디에 |
|---|---|---|---|
| مصطلحات البوكر | `-` | 8/8 포커 · 영어 사전 7 + clubgg 1 | **주력어** — seoTitle·H1(판정 ② · 도구 생기기 전까지 글이 주인) |
| مصطلحات البوكر بالعربي | `-` | 🟢 10/10 아랍어 · 사전형 4 | seoTitle 또는 desc·tags |
| مصطلحات لعبة البوكر | 10/10 | 9/10 | tags · 본문 1회 |
| poker terms · poker terminology | 20/20 | 영어만 · 아랍어 0 | tags·괄호 병기만 |
| 🔴 تيلت 110/40 · نتس 170/260 · فيش 9,900/4,400 · بلايند 140/40 · اول ان 20/10 (단독) | (왼쪽 SA/EG) | 전부 오염 0/8~0/9 | 단독 헤드·태그 금지 — 본문 표 안에서만 |
| ما معنى البوكر فيس / بوكر فيس يعني ماذا | (PAA) | — | 현지 FAQ ② |

### 4-5. 현지 SERP — 우리가 더 줄 것
- 상위 아랍어 사전형: pokeracademyar «قاموس مصطلحات البوكر»(176항목 · 한 줄 정의 · 제휴) · poker-place(104항목 · Break=bad beat 혼동 오류) · GG ar(알파벳) · pokerclub «مصطلحات البوكر العامية — 60 مصطلحاً» · hootpoker «مصطلحات البوكر بالعربي: معنى فولد وكول وتشيك ورايز». 공통 약점 = 예시 0 · 혼동 쌍 없음.
- 더 줄 것: ① «가장 많이 헷갈리는 8쌍» 표를 맨 앞에(set/trips · cooler/bad beat — 경쟁 오류 정면) ② 상황별 6분류(알파벳 벽 아님) ③ 규칙 글·도구로 가는 링크 + «فيش» 동음이의 주석(현지만의 함정).
- PAA(축어): «ما هو ال poker face؟» · «بوكر فيس يعني ماذا؟» · «ماذا تعني كلمة بوكر؟»(→ 어원은 쓰지 않음) · «ما هي قواعد لعبة البوكر؟»(→ 도입부 rules 링크로 충분).

### 4-6. 확정 카피 → §5-4

### 4-7. §13 자리
- L28–31 stripe: `6` · `90+`(→ ar 실측 하한) · `8`.
- L44–51: «PFR can never exceed VPIP» · 3-bet 카운트(블라인드=1 · 오픈=2 · 리레이즈=3).
- L141 `4 outs` · L142 `8 outs` · L146 `8♥9♥` · L147 `10-J-Q-K-A` · L148 `A-2-3-4-5` · L118 alt `K♦ 7♣ 2♠`.
- L101 «Heads-up, the SB is on the button and acts last postflop» · L102 `$1/$2` · L201 `2× BB` · L203 no-limit 정의.
- FAQ L273: `7‑7` · `A‑7` · `7‑7 is on the board`. L281 3-bet 카운트.

### 4-8. 경험담 자리
- L19(첫 라이브: under the gun · three-bet the cutoff · run it twice · 킹으로 지고 «쿨러» 소리 들음). «쿨러» 링크만 빠진다.

### 4-9. 하지 말 것
- 정의 H2를 규칙 글처럼 늘리지 않는다(blind·all-in·side pot·ante = 각 규칙 글 주인 · 1줄 + 링크).
- 항목 수를 줄이지 않는다 · 경쟁 사전처럼 알파벳 재정렬하지 않는다(EN 순서 유지).
- 🔴 «فيش» · «تيلت» · «نتس»를 seoTitle·desc·tags 단독으로 쓰지 않는다.

---

## 5. 확정 카피 (Fable 서브 1회 · 10-14 · 글자 수는 Opus가 잼)

> 출처 = Fable 서브 1회(10-14 · 입력 = EN 메타·H2·FAQ + 키워드 표 + 금지 헤드 + 용어 정본). Opus 조정은 «🔧»로 표시(이유 한 줄). 글자 수 = JS `.length`(node 실측 · 🔧 반영 후).
> H2 문구는 아래 그대로 쓴다. «★» = 현지 추가 · «←EN L##» = 대응 EN 줄. FAQ 문항도 순서·문구 고정.

### 5-1. holdem-strategy
- title (66): استراتيجية البوكر: القرارات الخمسة وراء كل يد رابحة في تكساس هولدم
- seoTitle (63): لماذا تنسى النصائح على الطاولة؟ — استراتيجية البوكر في 5 قرارات
- desc (151): نصائح كثيرة ورقائقك تتسرب؟ استراتيجية البوكر ليست قائمة نصائح بل 5 قرارات في كل يد: الموقع، اختيار اليد، الزيادة أو الطي، الرهان على الفلوب، ومتى تطوي.
- tldr: كل قرار رابح في تكساس هولدم يُختزل في 5 أسئلة تتكرر في كل يد: أين أجلس (الموقع)، هل تستحق هذه اليد اللعب، هل أزيد أم أطوي بدل الدخول بالمجاراة فقط، هل أواصل الرهان على الفلوب، ومتى أترك اليد؟ اللاعب الضيق العدواني (TAG) الذي يجيب عن هذه الأسئلة الخمسة جيدًا يطوي نحو 80% من أيديه قبل الفلوب، ويلعب ما تبقى بعدوانية، ويتفوق على معظم الطاولات الهاوية دون أن يحفظ أي قائمة نصائح.
- tags: استراتيجية البوكر · البوكر للمبتدئين · اسرار البوكر · كيف تفوز في البوكر · اللعب الضيق العدواني (TAG) · متى تطوي في البوكر · البلف في البوكر · texas holdem strategy · poker strategy
- H3 stripe ←L25: ### ما الذي يفصل الرابحين عن بقية اللاعبين فعلًا؟
- H2 (순서 고정):
  1. ←L36 ## هل استراتيجية البوكر قائمة نصائح؟ لا — بل 5 قرارات تتكرر في كل يد
  2. ←L58 ## القرار 1 — أين أجلس على الطاولة؟ (الموقع)
  3. ←L74 ## القرار 2 — هل تستحق هذه اليد اللعب أصلًا؟ (اختيار اليد)  🔧 «اختيار اليدين» → «اختيار اليد»
  4. ←L91 ## القرار 3 — الزيادة أو الطي: لماذا لا تكتفي بالمجاراة قبل الفلوب؟
  5. ←L107 ## القرار 4 — هل أواصل الرهان على الفلوب؟ (الرهان الاستمراري C-Bet)
  6. ←L121 ## القرار 5 — متى أطوي؟ القرار الذي يوفر أكبر قدر من الرقائق
  7. ★ ## متى يكون البلف في البوكر مربحًا؟ حساب نقطة التعادل  (내용 = §1-2 현지 H2 ①)
  8. ←L133 ## الحسابات التي لا يمكنك تجاوزها: احتمالات البوت (Pot Odds) والأوتس
  9. ←L143 ## التسريبات الـ6 الأكثر كلفة للمبتدئين — وكيف تُصلحها
  10. ←L164 ## اللعب الضيق العدواني (TAG): الأسلوب الوحيد الذي تبدأ به
  11. ★ ## هل البوكر حظ أم مهارة؟  (§1-2 현지 H2 ②)
  12. ## الأسئلة الشائعة
  13. ←L240 ## القرارات الخمسة مرة أخيرة
  14. ## مقالات ذات صلة
- FAQ (14): ① ما أفضل استراتيجية للعب تكساس هولدم؟ ② ما أفضل استراتيجية بوكر للمبتدئين؟ ③ كيف تفوز في البوكر على طاولة تكساس هولدم؟ ④ متى يجب أن تطوي في البوكر؟ ⑤ متى تراهن ومتى تمرر في البوكر؟ ⑥ متى يجب أن تبلف في البوكر؟ ⑦ متى يجب أن تعيد الزيادة (3-Bet)؟ ⑧ متى تزيد بدلًا من المجاراة؟ ⑨ كم عدد الأيدي التي يجب أن تلعبها في تكساس هولدم؟ ⑩ ماذا يعني اللعب الضيق العدواني (TAG)؟ ⑪ كم مرة يجب أن تقوم بالرهان الاستمراري (C-Bet)؟ ⑫ هل البوكر لعبة مهارة أم حظ؟ ⑬ ما هو GTO في البوكر؟ ⑭ ★ كيف تحترف البوكر؟ (EN «How do you get better at poker?» 자리 · 답은 학습·복기 논지만 — 직업·수입 보장으로 확대 금지)
  🔧 ⑪ «تلعب الرهان الاستمراري» → «تقوم بالرهان الاستمراري»(연어)
- 흡수: استراتيجية البوكر → seoTitle·title·desc·H2 1·FAQ ①② / كيف تفوز في البوكر → FAQ ③·tag / البلف في البوكر → H2 7·FAQ ⑥·tag / حظ أم مهارة → H2 11·FAQ ⑫ / كيف تحترف → FAQ ⑭ / للمبتدئين → FAQ ②·tag / اسرار البوكر → tag / PAA «What is the best strategy in poker?» → FAQ ①

### 5-2. holdem-positions
- title (75): الموقع في البوكر: أسماء مقاعد الطاولة من UTG إلى الزر (BTN) ومن يتصرف أولًا
- seoTitle (63): اسم مقعدك يتغيّر كل يد — الموقع في البوكر من UTG إلى الزر (BTN)
- desc (151): الأسماء تتحرك مع الزر لا مع الكراسي. كل موقع في البوكر — UTG والهايجاك والكت أوف والزر — مع أرقام المقاعد وخريطة 6-max ومن يتصرف أولًا، في خريطة واحدة.
- tldr: أسماء المقاعد في البوكر تُقاس من زر الموزّع — UTG واللوجاك والهايجاك والكت أوف والزر والبلايندز — وتتحرك عادة مقعدًا واحدًا باتجاه عقارب الساعة في كل يد. قبل الفلوب يتصرف UTG أولًا والبيغ بلايند أخيرًا، وبعد الفلوب يتصرف السمول بلايند أولًا والزر أخيرًا (وفي الهيدز أب يكون الزر هو السمول بلايند: الأول قبل الفلوب والأخير بعده). أرقام المقاعد الفعلية لا تتحرك أبدًا، أما المواقع فتتحرك.
  🔧 첫머리 «المواقع على طاولة البوكر هي…» → «أسماء المقاعد في البوكر تُقاس…»(tldr = JSON-LD abstract · 복수 «المواقع» 헤드형 첫머리 회피 §2 ⑨)
- tags: الموقع في البوكر · مقاعد طاولة البوكر · أسماء المقاعد على الطاولة · UTG في البوكر · الكت أوف في البوكر · الهايجاك واللوجاك في البوكر · من يتصرف أولًا في البوكر · poker positions · poker positions chart
- H2 (순서 고정):
  1. ←L40 ## ما هو الموقع في البوكر؟ خريطة مقاعد الطاولة الكاملة
  2. ←L66 ## ما أسماء مقاعد البوكر واختصاراتها؟ UTG وLJ وHJ وCO وBTN وSB وBB  🔧 «أسماء المواقع في البوكر» → «أسماء مقاعد البوكر»(§2 ⑨ 표면형 회피)
  3. ←L87 ## أرقام المقاعد مقابل المواقع — لماذا ليس المقعد 1 موقعًا؟
  4. ←L107 ## ما هو UTG في البوكر؟
  5. ←L117 ## الهايجاك (HJ) واللوجاك (LJ) — ولماذا سُمّيا بهذين الاسمين؟
  6. ←L130 ## الكت أوف (CO) والزر (BTN) — موقع الموزّع
  7. ←L140 ## البلايندز: مقعدا السمول بلايند (SB) والبيغ بلايند (BB)
  8. ←L153 ## من يتصرف أولًا في البوكر؟ قبل الفلوب مقابل بعده (هل تبدأ البلايندز؟)  (★ 절 끝 BB 문장 · §2-2 — 3인+/헤즈업 구분)
  9. ←L170 ## كم عدد المواقع حسب عدد اللاعبين؟ من الهيدز أب إلى 10 لاعبين (6-max مقابل الطاولة الكاملة)
  10. ## الأسئلة الشائعة
  11. ←L229 ## الخلاصة
  12. ## مقالات ذات صلة
- FAQ (9): ① ماذا يعني UTG في البوكر؟ ② ما هو الهايجاك (HJ) في البوكر؟ ③ ما هو اللوجاك (LJ) في البوكر؟ ④ ★ ما هو الكت أوف (CO) في البوكر؟ ⑤ من يتصرف أولًا: السمول بلايند أم البيغ بلايند؟ ⑥ كم عدد المواقع في طاولة 6-max؟ ⑦ هل تتغير مواقع اللاعبين في كل يد؟ ⑧ ما هو المقعد 1 في البوكر؟ ⑨ ★ ما هو أفضل موقع على طاولة البوكر؟
- 흡수: الموقع في البوكر → seoTitle·title·desc·H2 1·tag / مقاعد·أسماء المقاعد → title·H2 1·2·tags / UTG → seoTitle·H2 4·FAQ ①·tag / related co·cutoff → FAQ ④ · Lojack/hijack → H2 5·FAQ ②③ · BTN → H2 6 / 경쟁 «أفضل موقع» → FAQ ⑨

### 5-3. holdem-continuation-bet
- title (71): الرهان الاستمراري (C-Bet) في البوكر: متى تراهن على الفلوب وكم ومتى تمرر
- seoTitle (62): C-Bet على كل فلوب يستنزف رقائقك؟ — الرهان الاستمراري في البوكر  🔧 Fable «ينزف رقائقك كل فلوب؟» = 주어 불명 → EN 훅 논지(«매 플랍 C-Bet이 칩을 흘린다»)
- desc (146): تراهن على كل فلوب لأنك زدت قبله؟ الرهان الاستمراري (C-Bet) في البوكر: أي فلوب تراهن عليه، بأي حجم على البورد الجاف والرطب، ومتى يكون التمرير أقوى.  🔧 «اللوحة الجافة والمترابطة» → «البورد الجاف والرطب»(용어 정본 · EN «small on dry, big on wet»)
- tldr: الرهان الاستمراري (C-Bet) هو رهان على الفلوب يقوم به اللاعب الذي زاد قبل الفلوب. القاعدة الحديثة ليست «راهن على كل فلوب»، بل راهن كثيرًا وبحجم صغير على الفلوبات التي تخدم نطاقك (البوردات العالية الجافة مثل K-7-2)، ومرّر على الفلوبات التي تخدم خصمك (البوردات المنخفضة المتصلة مثل 7-6-5). اجعل الحجم صغيرًا — نحو ثلث البوت — على البورد الجاف، وكبيرًا — ثلثا البوت أو أكثر — على البورد الرطب، وقلّل الرهان الاستمراري خارج الموقع عندما تكون صاحب الزيادة الوحيد قبل الفلوب، وقلّله أكثر بكثير في البوتات متعددة اللاعبين.
  🔧 «اللوحات» → «البوردات» · «المترابطة» → «المتصلة» · «المزيد الوحيد» → «صاحب الزيادة الوحيد قبل الفلوب» · EN 97% 괄호만 없음 · 멀티웨이 꼬리 유지(아스트라 #28)
- tags: الرهان الاستمراري في البوكر · رهان المتابعة · C-Bet في البوكر · حجم الرهان الاستمراري (C-Bet) · متى تراهن على الفلوب · الرهان الاستمراري خارج الموقع (C-Bet OOP) · الرهان الاستمراري المؤجل (Delayed C-Bet) · continuation bet · c-bet poker  🔧 «المتأخر» → «المؤجل»(§0-3)
- H3 stripe ←L27: ### الرهان الاستمراري (C-Bet) بالأرقام
- H2/H3 (순서 고정):
  1. ←L38 ## ما هو الرهان الاستمراري (C-Bet) في البوكر؟
  2. ←L54 ## لماذا أصبحت نصيحة «راهن على كل فلوب» خاطئة؟ وما الذي تغيّر؟
  3. ←L71 ## على أي فلوب تقوم بـ C-Bet؟ الأمر كله في نسيج البورد
  4. ←L97 ## كم مرة يقوم السولفر بـ C-Bet على كل نوع من البوردات؟
     - ←L103 ### حسب الورقة الأعلى — C-Bet الزر بعد تمرير البيغ بلايند
     - ←L131 ### حسب الأنواع والاتصال — الحساب نفسه على محور آخر
     - ←L143 ### الورقة الأعلى × الأنواع — إجمالي C-Bet
     - ←L156 ### كيف يرد البيغ بلايند على الـ C-Bet؟
  5. ←L190 ## كم مرة يجب أن تقوم بـ C-Bet؟ (التكرار)
  6. ←L212 ## ما الحجم المناسب للرهان الاستمراري (C-Bet)؟
  7. ←L230 ## هل تقوم بـ C-Bet خارج الموقع (OOP)؟
  8. ←L241 ## هل تقوم بـ C-Bet في البوت متعدد اللاعبين؟
  9. ←L249 ## ما هو الـ C-Bet المؤجَّل (Delayed C-Bet)؟
  10. ←L261 ## متى لا تقوم بـ C-Bet؟ التمرير سلاح لا راية بيضاء
  11. ←L274 ## يد حقيقية بالـ C-Bet من البداية إلى النهاية
  12. ←L286 ## أخطاء الـ C-Bet السبعة الأكثر شيوعًا
  13. ## الأسئلة الشائعة
  14. ←L363 ## خطة الـ C-Bet باختصار
  15. ## مقالات ذات صلة
  🔧 Fable «اللوحة/الألوان/الترابط» → «البورد/الأنواع/الاتصال»(§0-3) · «تراهن رهانًا استمراريًا» 반복형 → «تقوم بـ C-Bet»(경쟁 원문 다수 라틴 C-Bet 9편 · 반복 피로)
- FAQ (12): ① ما هو الرهان الاستمراري في البوكر؟ ② لماذا سُمّي الرهان الاستمراري (رهان المتابعة) بهذا الاسم؟ ③ هل يجب أن تقوم بـ C-Bet على كل فلوب؟ ④ كم مرة يجب أن تقوم بـ C-Bet؟ ⑤ ما الحجم المناسب للـ C-Bet؟ ⑥ هل تقوم بـ C-Bet خارج الموقع؟ ⑦ هل تقوم بـ C-Bet في بوت متعدد اللاعبين؟ ⑧ ما هو الـ C-Bet المؤجَّل؟ ⑨ متى يجب ألا تقوم بـ C-Bet؟ ⑩ هل الـ C-Bet بلف؟ ⑪ ما هو رهان القيمة في البوكر؟ ⑫ ما النسبة الجيدة للـ C-Bet على HUD البوكر؟
- 흡수: الرهان الاستمراري في البوكر → seoTitle·title·desc·H2 1·FAQ ①·tag / C-Bet → 전반 / رهان المتابعة → FAQ ②·tag / sizing → H2 6·FAQ ⑤ / frequency → H2 5·FAQ ④ / delayed → H2 9·FAQ ⑧ / oop → H2 7·FAQ ⑥ / percentage → FAQ ⑫

### 5-4. holdem-glossary
- title (70): مصطلحات البوكر بالعربي: من النتس إلى الفيش، كل كلمة تسمعها على الطاولة
- seoTitle (59): تسمع كلمات على الطاولة ولا تفهمها؟ — مصطلحات البوكر بالعربي
- desc (147): كلمات تسمعها على الطاولة ولا تجرؤ على السؤال عنها؟ قاموس مصطلحات البوكر بالعربي حسب الموقف: الرهان، المواقع، الأيدي، العامية، وما يخلط بينه الجميع.
- tldr: هذا قاموس مبسّط لمصطلحات البوكر التي تسمعها فعلًا في لعبة تكساس هولدم، مرتبة حسب الموقف الذي ستصادفها فيه: أفعال الرهان، المواقع، الأيدي والبورد، أنواع اللاعبين، الرقائق والمال، ومواقف الطاولة. ابدأ بالمصطلحات «الأكثر التباسًا» أدناه (التمرير مقابل المجاراة، السِت مقابل التريبس، الكولر مقابل الباد بيت)، ثم تصفّح حسب الفئة. المصطلحات التي لها دليل أعمق تحيلك إليه مباشرة.  🔧 «الأيدي واللوحة» → «الأيدي والبورد»
- tags: مصطلحات البوكر · مصطلحات البوكر بالعربي · مصطلحات لعبة البوكر · قاموس البوكر · معاني كلمات البوكر · مصطلحات تكساس هولدم · عامية البوكر · poker terms · poker glossary
- H3 stripe ←L25: ### القاموس في لمحة
- H2 (범주형 · 질문형 비율 예외 · 순서 고정): ←L36 ## المصطلحات التي يخلط بينها اللاعبون أكثر من غيرها · ←L59 ## أفعال الرهان: التمرير والمجاراة والزيادة والطي · ←L92 ## المواقع على الطاولة · ←L116 ## الأيدي والبورد 🔧 · ←L158 ## أنواع اللاعبين والعامية · ←L184 ## الرقائق والمال وشكل اللعبة · ←L219 ## المواقف والإحصاءات وآداب الطاولة · ## الأسئلة الشائعة · ←L293 ## إلى أين تذهب بعد ذلك؟ · ## مقالات ذات صلة
- FAQ (9): ① ما أهم مصطلحات البوكر التي يجب أن يعرفها كل مبتدئ؟ ② ماذا يعني UTG (Under the Gun) في البوكر؟ ③ ما الفرق بين التمرير (تشيك) والمجاراة (كول)؟ ④ ما الفرق بين السِت (Set) والتريبس (Trips)؟ ⑤ ما الفرق بين الكولر (Cooler) والباد بيت (Bad Beat)؟ ⑥ ما هو الـ 3-Bet في البوكر، ولماذا لا تُسمّى الزيادة الأولى «1-Bet»؟ ⑦ ماذا يعني «النتس» (The Nuts) في البوكر؟ ⑧ ماذا يعني VPIP وPFR في إحصاءات البوكر؟ ⑨ ★ ما معنى البوكر فيس (Poker Face)؟
- 흡수: مصطلحات البوكر·بالعربي → seoTitle·title·desc·FAQ ①·tags / PAA poker face → FAQ ⑨(어원 없음) / 경쟁 대비 강점(혼동 8쌍·6분류·100+) → H2 1·구조·desc 꼬리

---

## 6. 아스트라 A-교차 (10-14 · codex gpt-6-astra read-only · 스크래치 `astra-ar-strat-A` · «걸프·이집트 포커 코치 겸 아랍어 교정자» 반박 전용)

- 39행: **WRONG 8 · RISKY 8 · OK 23** → 본체가 EN·L3·L5 원문 대조 후 **WRONG·RISKY 16건 전부 채택**해 위 본문에 반영(«아스트라 #N» 표시).
- WRONG: #1 §5 미기입(→ 이 절로 해소) · #7 c-bet 핸드 2 축어 · #8 glossary 표 행 수(26·24·22 → 25·22·20) · #13 BB 문장의 헤즈업 예외 누락 · #33 «باحتراف» SERP 수치 오독 · #34 cbet/سي بت 볼륨 혼합 · #35 «아랍어 PAA 0» 과장 · #37 오염어 볼륨 범위 오기.
- RISKY: #10 브레이크이븐 = «순수 블러프» 한정 · #12 «완성 확률 ≠ 승리 · 두 장 조건» · #24 strategy 대체 링크의 약속 수준 · #25 카드·readnext 교체 시 라벨 동시 교체 · #26 계산기 링크(에퀴티 도구)를 폴드율 문장에서 철회 · #28 tldr 멀티웨이 꼬리 유지 · #29 정상 결손 토큰을 삭제 문단 출현에만 한정 · #31 «البوكر فيس» = 현지 정의 추가로 명시.
- OK 중 «현장 통용 미확인»(중간 확신): Float «المجاراة للمناورة» · «نسيج البورد / بورد جاف·رطب» · «السِت/التريبس» · «إكويتي الطي» · «البرميل المزدوج/الثلاثي» → **C 네이티브 렌즈 재확인 대상**(진행 파일 «신규 용어»).
