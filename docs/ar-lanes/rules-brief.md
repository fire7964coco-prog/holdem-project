# ar-rules 브리프 — 🅰 규칙 6편 (기존 ar → EN 현행 재작성)

> 레인 A 산출물(2026-10-14). **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 골격 복사용)뿐.** 웹·MCP·다른 로케일 파일은 B에서 열지 않는다(기존 `lib/posts-ar/<slug>.ts`는 «덮어쓸 대상 + 표현 참고»로만 연다 — §0-1).
> 정본 = `docs/ar-cluster-plan.md` §3-A(용어) · §3-C(소유표) · §5(차이 표 — 이게 이긴다) · §5-A. 이 파일과 §3-A가 어긋나면 §3-A가 이긴다.
> EN 기준 해시 `e30fde28` — 6편 모두 이후 변경 0(`git diff --stat e30fde28 HEAD -- lib/posts-en/<6편>` = 빈 출력 · 10-14 확인). **EN L##은 이 해시의 줄 번호다.**
> SERP 근거 = `docs/keyword-bank/ar-serp/L1-rules.md`(«L1» · 필라·game-order·betting) · `L3-terms.md`(«L3» · blind·all-in) · `L2-rankings.md`(«L2» · showdown) · 볼륨 = `ar-core-volumes.md`(0-1 · SA/EG). 다시 조사하지 않았다(계획 §2 ① · DFS 직접 0회).
> 🔴 **«확정 카피» 칸(title·seoTitle·desc·tldr·tags·H2 세트·FAQ 문항)은 B·C가 바꾸지 않는다**(계획 §2 ⑥). 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 6편 공통 — B가 매 편 지키는 것

### 0-1. 작업 방식 = 재작성
- 기존 ar 6편은 **구조가 이미 EN과 1:1**이다(10-14 A 실측 — H2/H3·FAQ 수·표 행 수 동일). 그러나 **문면은 낡은 용어**(§0-4 «금지» 열)와 **EN 10-11~10-13 갱신 이전 본문**(masterUpdated 10-01~10-06)이다. → B는 **EN 현행을 골격으로 새로 쓴다.** 기존 ar 문장은 «§0-4와 충돌하지 않으면 가져와도 되는 참고»일 뿐 — EN과 문장 단위로 대조해 EN에 없는 주장·빠진 문장이 없게.
- 필드: `slug`·`category`·`date`·`image`·`keepImagesInBody`·`emoji`는 **현 ar 값 유지**(= EN). `updated` = 집필일 · `masterUpdated` = 각 절 머리의 «EN updated» · `readTime` = EN 분 수 + §0-2 형식(3~10 «دقائق» · 11+ «دقيقة»). `imageAlt` = EN alt를 아랍어로(카드는 축어).
- 🔴 히어로 이미지는 content에 넣지 않는다(렌더러가 그린다). 본문 이미지 `![…](/images/…)`는 EN 경로 그대로, alt·title만 아랍어.
- `index.ts`는 건드리지 않는다(🅰 = 칸 없음 · 6편 모두 등록됨).

### 0-2. 고정문 (ar 8편 코퍼스 실측 · 10-14)
| 자리 | 정본 | 실측 근거 |
|---|---|---|
| 직답 블록(EN «Quick answer» — blind L25만) | `> **الإجابة السريعة**` | 8편 중 1(blind) · «إجابة سريعة» 0 |
| 라벨 «Note» · «The golden rule» | `> **ملاحظة:**` · `> **القاعدة الذهبية:**` | blind 기존 |
| H3 «Quick summary» | `### ملخص سريع` | betting 기존 |
| readnext | `:::readnext[تابع القراءة]` · 카드 줄 = `/ar/blog/<slug> \| <아랍어 카드 제목> \| <EN 이미지 경로>` | 6/6 |
| FAQ H2 | `## الأسئلة الشائعة` · 문항 = `**Q. …؟**` + 빈 줄 + `A. …` | 7/7 |
| 관련 글 H2 | `## مقالات ذات صلة` · `<div>` 카드 그리드 = EN 축어 HTML · href `/ar/blog/…` · 카드 안 라벨·제목·설명만 아랍어 | 8/8 |
| 마무리 H2 | EN 자리마다 기존 ar 문구 유지: 필라 «الخلاصة النهائية» · game-order «الأمور الثلاثة التي يجب أن تتذكرها» · blind «الخلاصة» | 기존 |
| readTime | 🔴 **3~10분 = `"N دقائق"`(복수) · 11분 이상 = `"N دقيقة"`** — 이 6편: rules «14 دقيقة» · order «16 دقيقة» · betting·blind «9 دقائق» · all-in·showdown «10 دقائق» | 코퍼스는 8/8 «N دقيقة»지만 MSA 수사 일치 규칙상 3~10 뒤 명사는 복수(아스트라 A #11 채택 · 헤드 요청으로 타 레인 통일) |

### 0-3. 문체·조판
- MSA · 2인칭 **أنت**(남성형 일관) · 1인칭 화자 «أنا» · 명료체(고전체·직역투 금지) · 중립·교육 톤.
- 숫자 = **서양 숫자 0-9**(동부 ٠-٩ 0회 — 코퍼스 실측) · 천 단위 콤마 `1,326` · `1,300` · 소수 마침표 `2.5 BB` · `0.003%` · **% 붙여 씀** `14%`(코퍼스 «N %» 0 · «N%» 35) · 비율 `6:1` · `2.7:1` · 화폐 `$` 앞붙임 `$1/$2` · `$10`. 🔴 §13 **값**은 EN 축어 — 변환하지 않는다.
- 문장부호 = 아랍 쉼표 «،» · 물음표 «؟»(코퍼스: 편당 «،» 90~150 · «؟» 16~24). 표·카드 줄 안의 라틴 구간은 그대로.
- 카드 = 라틴 랭크 + 무늬 기호 `A♠ K♥ Q♦ J♣ 10♠`(보드·무늬 붙은 카드는 **10**) · 핸드 클래스는 EN 그대로(`TT` · `AKs`) · 산문 풀이는 «آس» · «ملك» · «زوج آسات».
- 🔴 백틱 금지 · 굵은 단락 안 `**` 중첩 금지(강조는 `«»` 또는 `==…==`) · tldr = 평문(마크다운 0).
- 🔴 RTL: 마크업 제어문자(LRM·RLM 등) 삽입 금지 — 라틴 토큰 순서 결함은 C가 화면 실측으로 판정(계획 §5 RTL 행).

### 0-4. 용어 — 계획 §3-A 정본에서 이 6편에 나오는 것 (첫 등장 병기는 **글마다** 한 번)
| EN | 본문 정본 | 첫 등장 병기 · 비고 | 🔴 금지(기존 ar 잔존 — 10-14 실측 횟수) |
|---|---|---|---|
| river | **الريفر** | «الريفر (النهر)» | «النهر» 단독(rules 16 · order 36 · showdown 22 · all-in 9 · betting 3 · blind 1) |
| turn · flop · preflop | التيرن · الفلوب · ما قبل الفلوب | — | — |
| small blind · big blind | **السمول بلايند (SB)** · **البيغ بلايند (BB)** | 풀이 «الرهان الإجباري الصغير/الكبير» 1회 | «الرهان الصغير/الكبير» 단독(blind 99 · rules 31 · order 23 · all-in 2 · betting 2 · showdown 2) · «البليند الكبير»(betting 2) |
| blinds | **البلايندز** · 단수 «البلايند» | — | «الرهانات العمياء» |
| pot · main pot · side pot | **البوت** · البوت الرئيسي · **البوت الجانبي** | 사이드팟 첫 등장 «البوت الجانبي (Side Pot)» | «القدر»(order 17 · blind 2) · «القدر الجانبي» |
| pot odds | **احتمالات البوت (Pot Odds)** | 이후 «احتمالات البوت» | «بوت أودز» 단독 제목·H2(rules H2 L292) · «احتمالات القدر»(order 3 · blind 2) |
| ace | **الآس** · 복수 الآسات · 쌍수 «آسان»(주격)/«آسَين»(목적·속격) — 격에 맞춘다 | — | «الإيس»·«إيس»(showdown alt «كيكر إيس») |
| royal flush | **رويال فلاش** | «رويال فلاش (الفلاش الملكي)» | «الفلاش الملكي» 단독 |
| showdown | **المواجهة** | «المواجهة (الشوداون — Showdown)» · 풀이 «كشف الأوراق» — showdown 글 필수 · 나머지 글은 «المواجهة»만으로 충분 | «الشودان»(showdown 2) · «شودان» 단독 |
| position | **الموقع** · 복수 «المواقع» 본문 허용 | — | «المركز»(order 4 — L60·L309·L397 + blind 4 — L146 «المراكز المتأخرة» 등 **이 6편에선 전부 포지션 문맥** → 교체) |
| UTG | **UTG** 라틴 | 첫 등장 «UTG — المقعد الذي يتصرف أولًا قبل الفلوب» | «تحت المدفع»(rules 2 · order 1) |
| bluff | **البلف** | — | «بلاف»(showdown 2 · rules 1) · «الخداع»(order 2 · all-in 1) |
| fold | **الطي (فولد)** | 첫 등장 «الطي (فولد) — أي الانسحاب من اليد» | — |
| check · call · raise · bet | **التمرير (تشيك)** · **المجاراة (كول)** · **الزيادة (رايز)** · **الرهان (بت)** | 첫 등장 괄호 음차 · 음차 표기는 «رايز»(SERP 다수 · «ريز» 금지) | — (🆕 신규 용어 표 참조 — §3-A 미정 자리를 코퍼스 + L1 §4-D로 확정) |
| all-in | **أول إن** · 정관사형 «الأول إن» | 첫 등장 «أول إن (All-in)» | — |
| equity | الإكويتي | — | — |
| heads-up · straddle · ante · big blind ante | الهيدز أب · السترادل · الأنتي · أنتي البيغ بلايند (BB Ante) | — | «أنتي الرهان الكبير» |
| muck | **رمي الأوراق دون كشفها** | showdown 글 첫 등장 «(الماك — Muck)» | — |
| kicker | الكيكر | — | — |
| button · dealer · cutoff | الزر · الموزع · الكت أوف | — | — |
| Texas Hold'em | **تكساس هولدم** | — | «تيكساس هولديم»(위키 철자 — 쓰지 않는다) |

### 0-5. 독립 노출 문구 규칙 (계획 §2 ⑦⑧⑨)
- ⑦ 영어 일반 검색어(poker rules · how to play poker · texas holdem poker · all in · side pot · showdown)는 **seoTitle·H1·desc 주력어 금지** — tags·본문 첫 등장 괄호 병기까지만. 전문 약어(SB·BB·UTG)는 제목 안에서도 쓴다.
- ⑧ 음차 단독형(بلايند · البلايندز · اول ان · شودان · كيكر · فولد · كول · ريز · بوت أودز)을 seoTitle·desc·tags에 **단독으로** 쓰지 않는다 — «… في البوكر» 결합형으로. 본문·문맥 있는 소제목은 허용.
- ⑨ «المواقع في البوكر»를 제목·tags에 쓰지 않는다(포커 사이트 SERP).
- «بوكر تكساس»(앱 브랜드 헤드) · «اون لاين / تحميل / حرام / حلال / حكم / قمار» 계열 조준 금지 · PAA «هل البوكر هو القمار؟»·«ما حكم …» 계열은 **답하지도 언급하지도 않는다**.

### 0-6. 링크 대상 (계획 §1 · §5)
- 걸어도 되는 ar 글 = 15편: texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings · holdem-probability · holdem-pot-odds · holdem-tournament · holdem-tournament-vs-cash-game · holdem-strategy · holdem-positions · holdem-continuation-bet · holdem-glossary + 도구 `/ar/calculator` · `/ar/hand-chart` · `/ar/win-rate-quiz` · `/ar/tournaments`. (아직 안 쓴 글도 건다 — 배포는 4레인 머지 뒤 1회.)
- 🔴 없는 것 = `/ar/solver` · `/ar/glossary` · tiebreak · split-pot · reading-the-board · flush-vs-straight · starting-hands-chart · when-to-fold · limping · straddle · position-play · GTO 4편. 처리는 각 절 «링크» 표(진행 파일 «링크 편차»에 같은 내용 기록).
- 🔴 `holdem-hand-rankings#kicker` = **🅱 rank 레인이 새로 만드는 앵커**(`<a id="kicker"></a>` · 계획 §3-D). 이 레인은 그 앵커를 믿고 건다 — 헤드 요청에 «rank 레인이 id="kicker"를 실제로 만드는지 머지 때 확인» 등록.
- 링크 형태 = `/ar/blog/<slug>` (끝 `/` 금지) · 인라인 썸네일 `"thumb:/images/…"`는 EN에 있는 자리만 EN 경로 그대로.

### 0-7. 이 6편의 «현지 추가» 공통 원칙
- 새로 넣는 H2·FAQ는 **EN에 있는 사실만** 쓴다(답의 근거 EN L##을 각 절에 적었다). 숫자·카드는 새로 만들지 않는다.
- 새 FAQ는 FAQ 블록 끝(EN FAQ 뒤)에 붙인다 · 새 H2는 지정한 자리에.

---

## 1. texas-holdem-rules-for-beginners — EN updated **2026-10-13** (필라 · 우선 1)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em for Beginners — Rules, Chips, Hands, and First Strategy
- seoTitle: How to Play Texas Hold'em for Beginners — Rules & Cheat Sheet
- desc: Never played before? How to play Texas Hold'em step by step — blinds, chip setup, hand rankings, and a printable cheat sheet even dummies can follow.
- tldr: Texas Hold'em gives each player 2 hole cards and 5 shared community cards. There are up to four betting rounds, and the best 5-card poker hand wins at showdown — unless everyone else folds first.
- tags(EN): texas holdem rules for beginners · how to play texas holdem for beginners · texas holdem basic rules · who goes first in texas holdem · texas holdem cheat sheet · poker chips for beginners · how many players in texas holdem · no limit texas holdem
- category rules · readTime 14 min → «14 دقيقة» · image `/images/rules-texas-holdem.webp` · date 2026-06-11
- 현 ar seoTitle «كيف تلعب تكساس هولدم للمبتدئين — القواعد والرقائق وورقة مرجعية» · desc «لم تلعب البوكر من قبل؟ …» — 🔴 **«لعبة البوكر»·«قوانين»·«طريقة لعب» 0회**(L1 §0-1) → 카피 교체의 핵심.

### 구조 (EN L##)
- 도입 L28~34(경험 L34) · H3 «How to play Texas Hold'em in 30 seconds» L36
- H2: L53 Basic Rules(`<div>` L61~71 · 7장 예시 표 L77~81) → L87 Beginner Flow Summary(이미지 L102) → L108 How Many Players → L126 Who Goes First → L145 What Chips(`<div>` L159~168) → L174 How Much Money → L196 No-Limit/Limit/Pot-Limit → L210 How to Deal(이미지 L229) → L235 Position → L252 Strategy for Beginners(`<div>` L258~268 · L272~285) → L291 Pot Odds(H3 L295 · H3 L301 · `<div>` L305~312) → L322 Printable Cheat Sheet(PDF L326 · 족보 빈도 표 L343~354) → L360 Common Beginner Mistakes(H3 ×5) → readnext L386 → FAQ L391(12문) → L443 Final Takeaway → L453 Related Posts(카드 6)
- 표 행 89 · 이미지 2 · `<div>` 카드 5 · readnext 1.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L57 | holdem-blind-meaning | 1:1 |
| L73 | holdem-reading-the-board | 🔴 없음 → **빼기**(문장 유지) |
| L83 | holdem-hand-rankings | 1:1 |
| L83 | holdem-flush-vs-straight | 🔴 없음 → **빼기**(같은 문장의 hand-rankings 링크로 충분) |
| L89 · L104 | holdem-game-order | 1:1 |
| L122 · L190 | holdem-tournament-vs-cash-game | 1:1 |
| L141 · L248 | holdem-positions | 🟢 **복원**(기존 ar는 대상이 없어 뺐다 — 이제 🅳가 쓴다) |
| L206 · L287 | holdem-betting-actions | 1:1 |
| L287 | holdem-starting-hands-chart | 🔴 없음 → **대체 `/ar/hand-chart`**(앵커 «جدول الأيدي الافتتاحية حسب الموقع» — §3-C 도구 주인) |
| L326 | /downloads/texas-holdem-rules-for-beginners.pdf | 그대로(ar PDF 없음 · 기존 ar와 같음 · 링크 문구에 «(بالإنجليزية)» 병기) |
| L356 | holdem-tiebreak-rules · holdem-split-pot-rules | 🔴 없음 → **하나로 합쳐 `/ar/blog/holdem-hand-rankings#kicker`**(«الكيكر والتعادل وتقسيم البوت») |
| L449 | holdem-hand-rankings · /en/hand-chart · /en/calculator | 1:1 (`/ar/…`) |
| readnext L386 | game-order · hand-rankings | 1:1 |
| Related 6 | game-order · hand-rankings · positions · betting-actions · showdown-rules · all-in-rules | 🟢 **positions 카드 복원**(기존 ar 5장) |
| 현지 추가 | — | `/ar/win-rate-quiz` 1회(«연습 출구» — L1 §6-4 · 마무리 L443 절 또는 FAQ «كيف تلعب خطوة بخطوة» 답 끝) |

### 키워드 (0-1 `ar-core-volumes` · L1 §2 · SA/EG · 2026-10-14)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| **لعبة البوكر**(= لعبة بوكر) | 720/480 | 🔴 seoTitle · title · desc · 첫 문단 · H2 1 · tags |
| قوانين البوكر | 90/40 | seoTitle 또는 title · H2 1 · tags |
| ما هي لعبة البوكر | 50/70 | 현지 추가 H2(정의 입구) · tags |
| طريقة لعب البوكر(= طريقة لعب بوكر) | 40/50 | desc · H2 2 · tags |
| تكساس هولدم · تكساس هولدم بوكر · لعبة البوكر تكساس | 20~40 | title «تكساس هولدم» 유지 |
| كيف تلعب البوكر · كيف تلعب بوكر | 20/20 | 본문·FAQ |
| 학습형 롱테일 21개(تعلم البوكر للمبتدئين · شرح لعبة البوكر بالتفصيل · قوانين البوكر بالصور · قوانين البوكر بالعربي · كيفية لعب البوكر للمبتدئين · قواعد لعب البوكر …) | 각 ~10 | 본문 자연 등장 1회씩(H2 직답·FAQ) — «بالصور»는 이미지 2장 있는 H2 2 직답에 · «بالعربي»는 도입 또는 desc |
| poker rules · how to play poker · texas holdem poker(영) | 320 · 210/260 · — | 🔴 제목 금지(아랍어 0/27) · tags 1~2 · 본문 첫 등장 «قوانين البوكر (Poker rules)» |
- 함정: «بوكر تكساس»(앱 15/15) · «لعبة البوكر حلال ام حرام / اون لاين / zynga / 1xbet» · «البوكر فيس» · «البوكر العربية»(부커상) · «طريقة لعب البوكر 31 الكوتشينة»(다른 게임 가능성) → 전부 쓰지 않는다. 이집트 방언형(«ازاي العب البوكر» 10/10)은 제목 불필요 — MSA.

### 현지 SERP (L1 §3·§4·§5·§6-1·§7-1)
- 상위 = ar.wikipedia «بوكر»(본문 거의 없음) · pokerist rules(앱 · ✗ BB 체크 불가 · ✗ 앤티 오정의) · kayftal3ab(675단어 · ✗ 프리플롭 라운드 누락) · GGPoker ar(기계번역 «الستائر») · pokeracademyar(556단어) · 제휴 카지노 3(✗ «개인 5장»). 해설 칸 4~5 · 앱 4. 경험담 0편 · 「بالصور」 수요에 실제 단계 그림 0.
- 우리가 더 줄 것 3: ① **라운드 4개 + BB 옵션 + 공용 5장을 정확히**(경쟁 ✗ 1·2·3 정면 — EN L53·L126 표·FAQ L397) ② **7장 → 베스트 5 예시 표 3행**(EN L77~81 · 손검산 완료 ↓) ③ **기준 밝힌 족보 빈도 표**(EN L341 «7장 중 베스트 5» 문장 + L345~354 — 경쟁은 5장 기준을 표기 없이 씀) + 경험담 + `/ar/win-rate-quiz` 연습 출구.
- PAA(축어): ما هي قواعد لعبة البوكر؟ · ما هي ألعاب البوكر؟ · ما هي لعبة تكساس بوكر؟ · ما معنى كلمة البوكر؟ · (영) Is poker 5 or 7 cards? · How is poker played step by step? / 🔴 هل البوكر هو القمار؟ · ما حكم … · هل يجوز … = 다루지 않음.
- related(축어): قواعد لعبة البوكر بالصور · أنواع لعبة البوكر · مصطلحات لعبة البوكر(→ glossary 몫) · قوانين البوكر بالعربي · تعلم البوكر PDF · طريقة لعب بوكر تكساس · شرح لعبة تكساس هولدم.

### 현지 추가
1. **H2 «ما هي لعبة البوكر؟ …»**(문구 = 확정 카피) — 도입 H3(30초) 뒤 · EN L53 Basic Rules **앞** · 3~5문장 · 표 없음. 사실(이것만): «البوكر» = 여러 변형의 통칭이고 이 글은 **تكساس هولدم**(가장 널리 쓰이는 변형이라는 표현은 EN에 없으므로 쓰지 않는다) — 각자 홀카드 2장 + 공용 5장, 7장 중 베스트 5장(EN tldr · L53~) · 최대 4 베팅 라운드(EN tldr) · 오마하는 EN L204(«standard for Omaha (PLO)»)에만 나오므로 이름 언급까지만. PAA «ما هي لعبة تكساس بوكر؟»를 이 H2 직답이 받는다.
2. **FAQ «هل البوكر 5 أوراق أم 7؟»**(영어 PAA «Is poker 5 or 7 cards?» 아랍어화) — 답: 7장(홀 2 + 공용 5)을 보고 그중 베스트 **5장**으로 비교 · 홀카드 0·1·2장 어느 조합이든 가능(EN L53~83 · Mistake 1 L364).
3. **FAQ «هل يستطيع البيغ بلايند أن يمرّر (تشيك) قبل الفلوب؟»** — 답: 🔴 아무도 레이즈하지 않았고 **라이브 스트래들이 없을 때만** 가능(BB 옵션 — 자기 포스트가 모두가 맞춰야 할 «살아 있는 베팅»이므로) · 스트래들 팟에선 BB도 콜·레이즈·폴드 · 레이즈가 있으면 콜·레이즈·폴드 · SB의 절반 포스트는 해당 없음(EN betting L221 축어 범위)(EN 근거 = holdem-betting-actions FAQ «Can you check on the preflop?» L219 · holdem-blind-meaning FAQ L168 — 같은 클러스터 EN). 경쟁 ✗ 3(pokerist) 정면.
4. **EN FAQ «quick version»(L425)** 질문을 PAA 축어 **«ما هي قواعد لعبة البوكر؟»**로 받는다(새 FAQ 아님 · 질문만 검색형).
- 쓰지 않는 것: «ما معنى كلمة البوكر؟»(어원 — EN에 없음 · 원문 출처 미확보) · «ما هي ألعاب البوكر؟»(변형 목록 — EN에 없음) · «الكوتشينة 52장»(EN에 덱 장수 없음).

### 확정 카피 — (§6-1)

### 소유표 (§3-C)
- 주인: لعبة البوكر · قوانين البوكر · طريقة لعب البوكر · ما هي لعبة البوكر · كيف تلعب البوكر · شرح لعبة البوكر · قوانين البوكر بالعربي/بالصور · تكساس هولدم.
- 금지 헤드(seoTitle·H1·tags): «ترتيب البوكر / ترتيب اوراق البوكر»(hand-rankings — 족보 표 H2는 EN 축어형 «ترتيب الأيدي» 수준 · 본문 앵커) · «جدول الأيدي الافتتاحية»(→ `/ar/hand-chart` 앵커만) · «حاسبة»(→ `/ar/calculator`) · «احتمالات البوت» 제목(pot-odds 몫 — H2 L291은 «احتمالات البوت (Pot Odds) — …» EN 축어형 허용 · seoTitle·tags 금지) · «المواقع في البوكر» · «مصطلحات البوكر»(glossary) · «بوكر تكساس».

### §13 자리 (C 전사 대조 + 손검산)
EN L79~81 7장 예시 — 🔴 손검산(10-14 A): ① A♠K♠ + A♦7♣7♥2♠9♣ → 베스트5 A♠A♦7♣7♥K♠ = 투페어 A·7 키커 K ✔ ② 8♠8♦ + K♣8♥4♠4♦J♣ → 8♠8♦8♥4♠4♦ = 풀하우스 8 풀 오브 4 ✔ ③ 2♣3♦ + A♠K♠Q♠J♠10♠ → 보드 로열 플러시(홀카드 0장) ✔ · L153~155·L163~166(칩 배분 — 숫자 축어) · L184~186($0.01/$0.02 → $2 to $5 · $0.05/$0.10 → $10 to $20 · $0.10/$0.25 → $25 to $50) · L229(플롭 A♠K♦8♥) · L239~246(9-max 순서) · L278~283(4티어 · «TT and above, plus AK and AQ … top 5%») · L297~299($100 pot · $20 bet → $120 to $20 = 6 to 1 → 1 in 7 ≈ 14% ✔ 산수: 20/140 = 14.3%) · L309~310(9 × 4 = ~36% · 9 × 2 = ~18%) · 🔴 L314·L316(×4 조건 «river까지 추가 베팅 없이 — 실전에선 거의 all-in일 때만» 축어 필수 · 한 장 수치 사용) · L341 + L345~354(족보 빈도 10행 — **«7장 중 베스트 5 기준»** 문장 필수) · L378(A♣4♦) · FAQ L407($2 to $5 at $0.01/$0.02) · L411(A-2-3-4-5 · 랩어라운드 불가) · L415(1,326 · 169) · L431(2~10명).

### 경험담 자리 (EN에 있는 것만 · 아랍 독자 맥락으로 다시 쓰되 없는 사실 금지)
L34(키친 테이블·홈게임·카드룸을 직접 운영한 경험) · L362(홈게임 주최 · 매번 보는 실수 5개) · L370(처음 딜한 홈게임 · 순서 착각) · L378(약한 آس로 칩 잃는 초보). 🔴 사우디·이집트·걸프의 장소·클럽·금액을 지어내지 않는다.

### 하지 말 것
- 파일 머리 주석 없음(동결 지시 없음). · 2·4 법칙 조건(L309 · L314 ⚠ · L316) 축약 금지 · 족보 정의를 늘리지 않는다(hand-rankings 몫) · 실머니 시작 금액 H2(L174)를 검색 훅으로 키우지 않는다 · 다른 게임 규칙 서술 금지 · «حرام/قمار» PAA 미수록.

---

## 2. holdem-game-order — EN updated **2026-10-13** (우선 2 · 헤드 없음 → 필라 내부링크 대상)

### 메타 (EN 축어)
- title: How to Play Texas Hold'em: The Order of Play From Blinds to Showdown
- seoTitle: Who Bets First in Texas Hold'em? — The Order of Play
- desc: Whose turn is it — and who bets first? The full Texas Hold'em order of play: blinds, preflop, flop, turn, river, showdown, and who acts first on every street.
- tldr: Preflop, the player to the left of the big blind bets first. On the flop, turn and river it is the first live player to the left of the button — usually the small blind. (Heads-up flips this.) The hand itself runs blinds → hole cards → preflop → flop → turn → river → showdown, with up to four betting rounds.
- tags(EN): who bets first in texas holdem · who goes first in poker · poker betting order · texas holdem order of play · poker order of play · who acts first in poker · preflop flop turn river · poker showdown
- category rules · readTime 16 min · image `/images/blog-holdem-game-flow.webp` · date 2026-06-10
- EN 머리 주석 L6~12 = 08-30 «who bets first» 재조준 기록(US 볼륨 근거) — ar에 그대로 옮기지 않는다(근거 시장이 다름). ar의 같은 축은 «من يبدأ أولاً في البوكر»(L1 §3-0 보조 SERP 아랍어 공급 1/10).
- 현 ar tldr은 **EN 10-13 tldr과 다르다**(순서 요약만 있고 «누가 먼저» 문장 없음) → EN 현행으로.

### 구조 (EN L##)
- 도입 L26~28(경험 L26) · H3 «One hand in 15 seconds» L32
- H2: L40 What Is Texas Hold'em? → L48 Before the Deal(`<div>` L56~63) → L71 Stage 1 Preflop(H3 L84 starting hands) → L94 Stage 2 Flop(이미지 L103) → L109 Stage 3 Turn → L123 Stage 4 River → L137 Stage 5 Showdown(이미지 L141) → L155 Who Bets First(`<div>` L161~170) → L180 Whole Order at a Glance(`<div>` L182~193 · H3 L195) → L205 Follow One Full Hand(이미지 L207 · H3 ×5 L216~246) → L257 The 7 Moves(이미지 L259 · `<div>` L263~275) → L283 10 Hand Rankings(`<div>` 표 L287~302) → L308 5 Mistakes(H3 ×5) → L334 How to Start Playing Today → readnext L347 → FAQ L352(11문) → L400 The 3 Things to Remember → L410 Related Posts(카드 3)
- 표 행 36 · 이미지 5.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L28 | texas-holdem-rules-for-beginners | 1:1 |
| L54 | holdem-blind-meaning | 1:1 |
| L90 | holdem-starting-hands-chart | 🔴 없음 → **대체 `/ar/hand-chart`** |
| L151 | holdem-showdown-rules | 1:1 |
| L172 · L318 | holdem-positions | 🟢 **복원** |
| L279 | holdem-betting-actions | 1:1 |
| L304 | holdem-hand-rankings | 1:1 |
| L388 | holdem-all-in-rules | 1:1 |
| readnext L347 | rules-for-beginners · betting-actions | 1:1 |
| Related 3 | rules-for-beginners · hand-rankings · positions | 🟢 **positions 카드 복원**(기존 ar 2장) |

### 키워드 (L1 §2 · §3-0 · §7-2)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| مراحل لعبة البوكر(+بالصور·بالعربي) | `-` (SERP 포커 8/8 · 아랍어 해설 6) | 🔴 seoTitle 또는 title · H2 «Whole Order at a Glance» 자리 · tags |
| من يبدأ أولاً في البوكر | `-` (SERP 아랍어 1/10 = hootpoker) | 🔴 seoTitle 훅 · H2 L155 · FAQ L358 · tags |
| جولات المراهنة في البوكر · كم عدد جولات المراهنة | `-` | FAQ L390 |
| الفلوب والتيرن والريفر | `-` (단독 SERP 오염 0/8) | H2 본문·FAQ L370 질문형 재료만 · tags 결합형 «الفلوب والتيرن والريفر في البوكر» |
| (영) who bets first in texas holdem 등 | 아랍어 0 | tags 1 |
- 🔴 함정: **«ترتيب اللعب في البوكر»를 제목 주력어로 쓰지 않는다** — SERP 10/10 중 족보 의도 8(구글이 «ترتيب»을 족보로 읽는다 · L1 §6-2). 현 ar seoTitle «… — ترتيب اللعب في تكساس هولدم …»는 교체 대상(본문 1회는 허용). «ترتيب أيدي البوكر» H2(L283)는 hand-rankings 몫 — EN 축어 H2 유지하되 본문 짧게 + 앵커.

### 현지 SERP (L1 §4-A P15·P12·P7 · §6-2)
- 아랍어 정조준 경쟁 = hootpoker «قواعد تكساس هولدم: الأوراق وترتيب اللعب وجولات الرهان»(H2 «من يبدأ قبل الفلوب؟ · من يبدأ بعد الفلوب؟ · الاستثناء عند اللعب بين شخصين») · a7labet «مراحل جولة البوكر الأربعة» · pokerstar.co.il «مراحل اليد الخمس — خطوة بخطوة». 경쟁 ✗: kayftal3ab 프리플롭 라운드 누락 · gamblingngo «딜러 왼쪽이 먼저»(자기모순).
- 우리가 더 줄 것 3: ① **스트리트별 «누가 먼저» 표 + 헤즈업 예외**(EN L155~170 `<div>` · tldr) ② **한 핸드 전 과정**(L205~249 · 7장 → 베스트5 명시 ✔) ③ 라운드 수 «최대 4»를 FAQ로 정면(경쟁 ✗ 1).
- PAA·경쟁 H2(축어): ما هي قواعد لعبة البوكر؟(مراحل SERP) · من يبدأ قبل الفلوب؟ · من يبدأ بعد الفلوب؟ · مراحل جولة البوكر الأربعة · مراحل اليد الخمس — خطوة بخطوة.

### 현지 추가
- 새 H2 없음(EN H2 L155 «Who Bets First»가 이미 hootpoker의 두 질문을 받는다 — 확정 카피에서 H2 문구를 «من يبدأ أولاً قبل الفلوب وبعده؟» 형으로 · 헤즈업 예외는 그 H2 안 `<div>` 표 + 헤즈업 1문장(EN L161~172 표 · **L174** 헤즈업 · **L176** 라이브 스트래들 예외도 보존)).
- H2 L180 «Whole Order at a Glance» → 확정 카피에서 **«مراحل لعبة البوكر …»** 질문/명사형으로(키워드 표 1행).

### 확정 카피 — (§6-2)

### 소유표
- 주인: مراحل لعبة البوكر · من يبدأ أولاً في البوكر · جولات المراهنة · (영) poker order of play.
- 금지 헤드: «ترتيب اللعب في البوكر»(족보로 읽힘 — 제목·tags 금지 · 본문 1회) · «ترتيب أيدي البوكر»(hand-rankings) · «قوانين البوكر / لعبة البوكر»(필라 — 본문 링크 문구로만) · «أفعال/إجراءات الرهان»(betting-actions — H2 L257은 EN 축어형 + 앵커).

### §13 자리
L86~88(시작 핸드 3티어 카드 축어) · L103 이미지 alt(K♥7♦2♣ · 9♠ · Q♥) · L141 alt(보드 10♣7♥J♦4♠9♣ · A♥A♦ > K♥K♣ — 손검산 ✔ 스트레이트 불가 · 원페어 A > K) · 🔴 L213~249 전 핸드: A♠K♥ vs 9♦9♣ · 플롭 K♦9♠3♥ · 턴 2♣ · 리버 A♥ → A = A♠A♥K♥K♦9♠ 투페어 A·K ✔ · B = 9♦9♣9♠A♥K♦ 트립스 9 ✔ → **B 승** ✔ · L291~300(족보 예시 10행 카드 축어) · 전 핸드 팟 12,000 → 28,000 → 58,000 → 198,000 · 🔴 리버 레이즈 «총액 70,000»을 추가액으로 옮기지 않기(아스트라 A #36) · L314(15–25%) · FAQ L384(100,000 · 20,000 · 120,000 · 6:1).

### 경험담 자리
L26(첫 게임 «누구 차례?» — 일반 화자 경험) · L310(실수 5개를 실시간으로 본 경험) · L314(새 플레이어 첫 테이블의 누수) · L330(«투페어!»라 했는데 원페어 · 스트레이트 착각).

### 하지 말 것
- EN 머리 주석(US 볼륨) 옮기지 않기 · L283 족보 절을 키우지 않기(앵커) · L257 액션 절을 키우지 않기(betting-actions 앵커) · «القدر» 0 · «النهر» 단독 0.

---

## 3. holdem-betting-actions — EN updated **2026-10-13** (우선 3 · 헤드 오염 → 용어형 의도)

### 메타 (EN 축어)
- title: Texas Hold'em Betting Actions: Check, Call, Raise, Fold
- seoTitle: Check, Call or Fold? — Poker Betting Actions & Raise Rules
- desc: Action's on you and your mind goes blank? Learn what a check, call, raise and fold mean in poker, the min-raise rule, and how many times you can re-raise.
- tldr: Texas Hold'em has 5 betting actions: check (pass for free), bet (open the round), call (match a bet), raise (increase it — the minimum raise equals the last full bet or raise), and fold. You can only check when there is no live bet in front of you — preflop that normally means only the big blind (or whoever posted a live straddle).
- tags(EN): poker betting actions · what is a check in poker · what is a call in poker · min raise poker rules · how many times can you raise in poker · can you raise after checking · string bet
- category rules · readTime 9 min · image `/images/holdem-betting-actions-hero.webp` · date 2026-06-14
- 현 ar tldr에 «… ما دام لا ينقصه مبلغ لمجاراة الرهان القائم» — EN tldr에 없는 조건 → EN 현행으로.

### 구조 (EN L##)
- 도입 L27~31(경험 L27·L29) · H3 «Quick summary» L35(`:::stripe` L37~42)
- H2: L44 5 Betting Actions(표) → L62 Check → L72 When Can You Check → L85 Call (Check vs Call · 표) → L101 Fold → L111 Min-Raise(이미지 L113 · 표 L123~126 · L128) → L139 How Many Times Raise → L152 All-In → L162 Choosing Them Is Strategy → L174 Live Betting Mistakes(H3 ×4) → readnext L196 → FAQ L201(8문) → L237 Related Posts(카드 3)
- 표 행 13 · 이미지 1.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L31 | rules-for-beginners | 1:1 |
| L81 | holdem-game-order | 1:1 |
| L107 | holdem-when-to-fold | 🔴 없음 → **대체 `/ar/blog/holdem-strategy`**(«متى تطوي يدك» 문맥 — strategy가 받는 의도) |
| L135 · L166 | holdem-strategy | 🟢 **복원** |
| L158 | holdem-all-in-rules | 1:1 |
| L158 | holdem-split-pot-rules | 🔴 없음 → **대체 `/ar/blog/holdem-hand-rankings#kicker`** |
| L167 | holdem-hand-rankings | 1:1 |
| L168 | holdem-positions | 🟢 **복원** |
| L233 | holdem-limping | 🔴 없음 → **빼기**(문장 유지) |
| readnext L196 | all-in-rules · strategy | 🟢 **strategy 카드 복원**(기존 ar 1장) |
| Related 3 | rules-for-beginners · game-order · blind-meaning | 1:1 |
| 기존 ar 고유 | showdown-rules(ar L67) · blind-meaning(ar L221) | 유지 가능(많은 것은 허용) |

### 키워드 (L1 §2 · §6-3 · §7-3 · `ar-core-volumes`)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| معنى فولد | 20/10 (단독 SERP = 영어 사전 0/8) | 결합형으로만 — seoTitle «معنى فولد وكول وتشيك ورايز في البوكر» 형 · tags |
| معنى ريز | 20/10 (포커 여부 미확인 · «ريز»=이름) | 쓰지 않음(표기는 «رايز») |
| تشيك في البوكر · كول في البوكر · الطي/المجاراة/الزيادة في البوكر | `-` | H2 질문형(경쟁 H3 축어) · tags 결합형 |
| مصطلحات لعبة البوكر | 10 | 🔴 glossary 몫 — 제목·tags 금지 |
| (영) poker betting actions · min raise poker rules | 10 이하 | tags 1 |
- 🔴 함정: «كول ريز فولد» SERP = Motorola Razr Fold(0/10) · «التمرير في البوكر» 자동완성 = 축구 패스 · «الرفع» = 문법·기도 → 이 표면형들을 제목에 단독으로 쓰지 않는다. 현 ar seoTitle «تمرير أم مجاراة أم طي؟»는 SERP 소수 표기(L1 §4-D: fold = انسحاب 18 · call = مساواة 8 · raise = زيادة 18) → **음차를 앞으로**(L1 §7-3) + 아랍어 병기.

### 현지 SERP (L1 §4-A P16·P6·P11 · §4-C ⑤ · §6-3)
- 아랍어 정조준 경쟁 = hootpoker «مصطلحات البوكر بالعربي: معنى فولد وكول وتشيك ورايز»(H3 «متى يمكنني اختيار تشيك؟ · ما الفرق بين كول ورايز؟ · ما الفرق بين Bet وRaise؟ · ماذا يحدث للرقائق عندما أختار فولد؟») · pokeracademyar «خيارات المراهنة (فولد (Fold) · تشيك (Check) · كول (Call) · رايز (Raise) · أول إن (All-in) · بت (Bet))» · pokerclub «إجراءات الرهان في البوكر». 경쟁 ✗: pokerist «최소 레이즈 = BB 이상»(증분 규칙 누락) · «프리플롭엔 아무도 체크 못 함».
- 우리가 더 줄 것 3: ① **최소 레이즈 증분 계산 표**(EN L123~128 · $6 → $12 · $6 → $10 · $14 all-in → $24) ② **WSOP 조문 인용 실전 실수**(L174~194 · 1칩 룰·구두 선언) ③ 프리플롭 체크 = BB(·라이브 스트래들) 정확히(tldr · FAQ L219).
- 질문 축어(경쟁 H3 · pokeracademyar/faq): ما الفرق بين كول ورايز؟ · متى يجب أن أطوي أوراقي؟ · متى يمكنني اختيار تشيك؟ · ماذا يحدث للرقائق عندما أختار فولد؟

### 현지 추가
- 새 H2 없음. 확정 카피에서 EN H2를 경쟁 질문 축어에 맞춘다: L62 «ما معنى تشيك (التمرير) في البوكر؟» 형 · L85 «ما معنى كول (المجاراة) — وما الفرق بين التمرير والمجاراة؟» · L101 «ما معنى فولد (الطي) — وهل يمكنك الطي في أي وقت؟» · L111 «الحد الأدنى للزيادة (مين-رايز) …».
- **FAQ «ما الفرق بين كول ورايز؟»**(경쟁 축어 · 새 FAQ) — 답: 콜 = 이미 낸 칩을 포함해 현재 베팅 **총액에 맞춘다**(모자라면 남은 칩으로 올인 콜 — EN L87) · 레이즈 = 그 위로 올림, 최소 = 직전 풀 베팅/레이즈 **증분**(EN L128) · 금액 표현은 총액 «إلى» / 증분 «بمقدار»를 구별.
- 🔴 game-order L257 «The 7 Moves»와 이 글의 «5 actions»는 충돌이 아니다 — 기본 액션은 5개(EN L31·L56 «올인은 별도 여섯째 액션이 아님»), 7은 리레이즈·올인을 포함한 설명 목록. 두 글 모두 이 구별을 지킨다. EN FAQ 뒤에 붙인다.

### 확정 카피 — (§6-3)

### 소유표
- 주인: معنى فولد/كول/تشيك/رايز في البوكر · الحد الأدنى للزيادة · كم مرة يمكن الزيادة · سترينغ بت.
- 금지 헤드: «مصطلحات (لعبة) البوكر»(glossary) · «قواعد الأول إن / البوت الجانبي»(all-in — L152 H2는 EN 축어 + 앵커) · «ترتيب اللعب»(order).

### §13 자리
L39(1 BB 최소 오픈 베팅) · L87($10 → $10 · $10 미만 남으면 올인 콜) · L97(K♠8♦ · $10 → 콜 $10 · 레이즈 $20+) · L113 이미지 alt($6 → $12 · $6 → $10) · 🔴 L123~128(플롭 $6 → +$6 = $12 · 프리플롭 $1/$2 · $6 레이즈(+$4) → +$4 = $10 · $10 베팅 + $14 올인 → 최소 $24 · 프리플롭 최소 오픈 = 2BB · 스트래들 2배 — WSOP Live Action Rule 165) · L184(Tournament Rule 90.d) · L192($10 베팅 · $100 칩 1개 = 콜 · Tournament Rule 97) · FAQ L209(BB·스트래들 예외).

### 경험담 자리
L27(첫 라이브 «action is on you»에 얼어붙음) · L29 · L176(주간 로우스테이크 라이브 게임 — 반복되는 실수) · L182~192(실수 4종 장면).

### 하지 말 것
- WSOP·TDA 조문 번호 축어(60a1e91f «룰북 접두» — 「WSOP Tournament Rule 90.d」 형식 유지) · 현 ar tldr의 추가 조건 문구 · «تمرير/مجاراة/طي»만으로 된 제목.

---

## 4. holdem-blind-meaning — EN updated **2026-10-06** (용어 교체 효율 1순위)

### 메타 (EN 축어)
- title: What Are Blinds in Poker? Small Blind vs Big Blind, Explained Simply
- seoTitle: Chips In Before Cards? — Small Blind vs Big Blind in Poker
- desc: Two players pay before a card is dealt — why? What the small blind and big blind are, who posts them, SB vs BB amounts, the big blind ante, and heads-up rules.
- tldr: Blinds are forced bets posted before cards are dealt. The small blind sits left of the dealer button and the big blind to their left (heads-up, the button itself posts the small blind); the big blind — usually double the small blind — is the table's betting unit.
- tags(EN): what is a blind in poker · what is the big blind · what is the small blind · small blind vs big blind · big blind small blind rules · big blind ante · texas holdem blinds
- category rules · readTime 9 min · image `/images/holdem-blind-meaning-hero.webp` · date 2026-06-13
- 현 ar = **«الرهان الصغير/الكبير» 99회가 주 용어**(L3 §6-1 — SERP «الرهان الكبير في البوكر» 9/9가 «큰 베팅») → **전면 교체가 이 글의 본체.** 현 seoTitle 훅 «تدفع قبل أن ترى أوراقك؟»는 유지 후보(CTR 훅 단독 교체 금지).

### 구조 (EN L##)
- 도입 L19~21(경험 L19) · `> **Quick answer**` L25 · H3 «The core numbers» L30(`:::stripe`)
- H2: L40 What Is a Blind → L48 Small Blind → L56 Big Blind(BB 표현 표 L64~70) → L78 SB/BB Rules(표 · `> Note` L89) → L93 How Big(표 L99~104 · `> The golden rule` L108 · 캐시/토너 L112~113) → L117 BB Ante (+Straddle) → L125 Heads-Up → L131 Dead Blinds → L137 How to Play From the Blinds(이미지 L139 · L141~145) → readnext L149 → FAQ L154(8문) → L190 The Takeaways → L200 Related Posts(카드 3)
- 표 행 19 · 이미지 1.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L21 · L196 | rules-for-beginners | 1:1 |
| L58 | holdem-betting-actions | 1:1 |
| L89 · L196 | holdem-game-order · holdem-positions | 🟢 positions **복원** |
| L112 | holdem-tournament-vs-cash-game | 1:1 |
| L113 · L119 | holdem-tournament | 🟢 **복원**(🅲가 쓴다) |
| L121 | holdem-straddle | 🔴 없음 → **빼기** |
| L144 | holdem-pot-odds | 🟢 **복원**(🅲) |
| L145 | holdem-position-play | 🔴 없음 → **대체 `/ar/blog/holdem-positions`** |
| readnext L149 | rules-for-beginners · position-play | position-play → **positions**(기존 ar는 betting-actions로 대체했었다 — positions로) |
| Related 3 | positions · game-order · tournament | 🟢 EN대로 **positions · game-order · tournament**(기존 ar = betting-actions · game-order · vs-cash) |

### 키워드 (`ar-core-volumes` · L3 §2·§3-1·§6-1·§7-1)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| بلايند | 140/40 (단독 SERP 0/8 오염) | 🔴 단독 금지 · 결합형 «البلايندز في البوكر» · «ما هو البلايند في البوكر» |
| البلايندز في البوكر · ما هو البلايند في البوكر | `-` (SERP = 번역 프록시·영어) | 🔴 seoTitle · title · H2 1 · tags |
| سمول بلايند · بيغ بلايند · بيج بلايند | `-` | title · desc · H2 2·3 · tags «السمول بلايند والبيغ بلايند في البوكر» |
| big blind · small blind (영) | 10 · 10 | tags 1 · 첫 등장 병기 |
| الرهان الكبير في البوكر | — (SERP 9/9 = «큰 베팅») | 🔴 제목·tags 금지 · 본문 풀이 1회만 |
| big blind ante meaning (AC) | — | H2 L117 «ما هو أنتي البيغ بلايند (BB Ante)؟» |

### 현지 SERP (L3 §3-1 · §4-C · §6-1 · §7-1)
- 블라인드 단독 아랍어 원작 글 **0** — SERP = google.com/goto 번역 프록시 4 · reddit tl=ar · 영어 해설 · blindvalet(타이머 도구 · 조준 안 함). 경쟁 ✗: pokerist «الرهان الكبير دائماً ضعف الرهان الصغير»(1/3·2/5 반례 — EN FAQ L164~166이 정답) · pokerist «앤티 = 신규 착석 포스트»(오정의) · pokerstar.co.il «BB가 최소 잔류 금액»(단순화).
- 우리가 더 줄 것 3: ① 블라인드 «완결판»(헤즈업·데드 블라인드·BB 앤티·스트래들 한 글) ② **BB 디펜스 산수**(L144: 2.5BB 오픈 · SB 폴드 → 1.5BB 콜로 4BB 팟 · 약 2.7:1 · 손익분기 약 27%) ③ «항상 2배가 아니다» 정답(FAQ L164).
- PAA·related(영 · 아랍어화 재료): Why are there two blinds in poker · Does the small blind have to match the big blind · Does big blind become small blind? · Is big blind a good position? · What do SB and BB mean in poker? · Is The big blind first to act? · Can you fold if you are big blind?

### 현지 추가
- **FAQ 2개**(EN FAQ 뒤):
  1. «ماذا يعني SB وBB في البوكر؟»(PAA) — 답: SB = السمول بلايند(**일반적인 3인 이상 테이블에서** 버튼 바로 왼쪽 · 보통 BB의 절반) · BB = البيغ بلايند(SB 왼쪽 · 테이블의 베팅 단위) · 헤즈업에선 버튼이 SB(EN L50 · L58 · tldr).
  2. «هل البيغ بلايند موقع جيد؟»(PAA «Is big blind a good position?») — 답: 프리플롭엔 (라이브 스트래들이 없으면) 마지막에 행동하지만(L89) 플롭부터는 일찍 행동하고, 이미 1BB를 냈기에 더 싸게 넓게 방어한다(L144) — 수치는 L144 축어만.
- H2 문구 조정(확정 카피): L40 → «ما هي البلايندز في البوكر — ولماذا تُفرض؟»(EN L40~46 범위 — «왜 정확히 두 개인가»는 EN에 없으므로 묻지 않는다 · 아스트라 A #27) · L78 → SB/BB가 «누가 언제 내나 · 매 핸드 왼쪽으로 이동»(PAA «Does big blind become small blind?» → EN L80 «버튼이 매 핸드 시계방향 1칸 · 오빗마다 두 블라인드 1회씩»으로 직답).
- (선택) L56 BB H2 직답에 «هل يجب على السمول بلايند أن يكمل إلى البيغ بلايند؟» 의도 1문장 — EN FAQ L174 «SB는 완성(complete) 대신 포기 가능» 축어 범위.

### 확정 카피 — (§6-4)

### 소유표
- 주인: البلايندز في البوكر · ما هو البلايند · السمول بلايند والبيغ بلايند · أنتي البيغ بلايند · (영) big blind/small blind.
- 금지 헤드: «الرهان الكبير / الرهان الصغير»(단독 — 큰 베팅 SERP) · 블라인드 레벨·토너먼트 구조(holdem-tournament 앵커) · 포지션별 방어 레인지(→ `/ar/hand-chart` 앵커).

### §13 자리
L34~35(1/2 · 1 BB) · L50($1/$2 → SB $1) · L58($2) · 🔴 L64~70(BB 표현 표: 2BB = $4 · 20BB = $40 · 3BB = $6 · BB 디펜스 $2 posted · $6 raise → $4 more · 100BB = $200) · L95 · L99~104(스테이크 표 4행: $0.5/$1 → $0.50 · $1 · $60–$100 / $1/$2 → $100–$300 / $2/$5 → $200–$500 / $5/$10 → $500–$2,000) · L108($1/$3 · $2/$3) · L112 · 🔴 L144(2.5 BB · 1.5 BB · 4 BB · 2.7-to-1 · 27% — 산수 ✔: 팟 2.5+0.5+1 = 4 · 1.5/(4+1.5) = 27.3%) · FAQ L166($1/$3 · $2/$5).

### 경험담 자리
L19(첫 라이브 핸드 «Small blind, please»에 얼어붙음) · L141(블라인드에서 초보가 매 오빗 조금씩 흘리는 장면).

### 하지 말 것
- «الرهان الكبير/الصغير» 단독 잔존 0(풀이 «الرهان الإجباري …» 1회만) · 블라인드 타이머·대회 일정 의도 조준 금지 · 스트래들 정의를 늘리지 않기(링크 대상 없음 — EN 문장 범위).

---

## 5. holdem-all-in-rules — EN updated **2026-10-11** (우선 1(L3) · 용어 + FAQ 3 + H2 1)

### 메타 (EN 축어)
- title: Texas Hold'em All-In Rules: Side Pots, Re-Raises & Showdown
- seoTitle: Went All-In and Confused? — Hold'em All-In Rules & Side Pots
- desc: Shoved all your chips and not sure what you can win? Texas Hold'em all-in rules — table stakes, side pots, re-raise eligibility, and showdown order.
- tldr: Going all-in means betting every chip you have. You can only win what you matched from each opponent (the main pot). Extra chips that two or more bigger stacks bet beyond that form a side pot only they can win; a lone extra bet is simply returned. In no-limit and pot-limit, an all-in for less than a full raise does NOT reopen the betting for a player who already acted — unless several short all-ins add up to at least a full raise over what that player has already put in.
- tags(EN): texas holdem all in rules · poker all in rules · side pot poker explained · does all in reopen betting poker · poker all in showdown rules
- category rules · readTime 10 min · image `/images/holdem-all-in-rules-hero.webp` · date 2026-06-15
- 현 ar: 표기 «أول إن»·«البوت الجانبي» = 현지 다수형과 **일치**(L3 §4-D) · 경험담 있음(경쟁 24편 0) · 계산기 dict가 이 글로 링크. 현 seoTitle 훅 «دخلت أول إن ولا تعرف ماذا تربح؟» = 유지 후보.

### 구조 (EN L##)
- 도입 L29~31(경험 L29)
- H2: L33 What Does All-In Mean(`<div>` table stakes) → L55 How to Declare(이미지 L63) → L69 How Side Pots Work(이미지 L73 · H3 L75 3인 예 표 · H3 L89 4인 예 표 + `<div>` 팟 표 L102~111) → L115 Does All-In Reopen(이미지 L121 · 예 L125~133 · 표 L137~139 · H3 L146 다중 숏 올인 예 L152~160 + 표 L164~168 · H3 L174 결정 가이드 `<div>` 표) → L192 All-In Showdown Rules(번호 4 · Special case L203) → L207 5 Mistakes(H3 ×5) → readnext L228 → FAQ L233(7문) → L265 Related Posts(카드 3)
- 표 행 36 · 이미지 3.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L31 | rules-for-beginners | 1:1 |
| L119 | holdem-betting-actions | 1:1 |
| L196 | holdem-showdown-rules | 1:1 |
| (본문·Related) | holdem-split-pot-rules | 🔴 없음 → **대체 `/ar/blog/holdem-hand-rankings#kicker`**(«تقسيم البوت عند التعادل») · Related 카드도 hand-rankings로 |
| readnext L228 | rules-for-beginners · showdown-rules | 1:1 |
| Related 3 | rules-for-beginners · split-pot → **hand-rankings** · showdown-rules | 🟢 3장으로(기존 ar 2장) |

### 키워드 (`ar-core-volumes` · L3 §2·§3-2·§6-2·§7-2)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| قواعد الأول إن · أول إن في البوكر | `-` (원어 전용 글 SERP 0/10) | 🔴 seoTitle · title · tags(태그는 «قواعد الأول إن في البوكر» 완성형 — 아스트라 A #19) |
| اول ان(무함자 검색 표면형) | 20/10 (단독 SERP 0/9 향수) | tags 결합형 «اول ان في البوكر» 1개만 · 본문 표기는 «أول إن» |
| البوت الجانبي في البوكر | `-` (hootpoker 계산기 1위) | title · desc · H2 L69 · tags |
| all in · all in meaning · side pot (영) | 320/590 · 110/90 · 10 | 🔴 제목 금지(사전·쇼핑몰) · tags 1 · 첫 등장 «أول إن (All-in)» · «البوت الجانبي (Side Pot)» |
| who wins side pot poker · main vs side pot poker (AC) | — | H3 신설(아래) |

### 현지 SERP (L3 §3-2 · §4-C · §6-2)
- 올인 전용 아랍어 글 SERP 0 · 원어 경쟁 = hootpoker(사이드팟 계산기 · 재개방 · 반환 · 폴더 칩 — 검산 전부 일치 · 10월 선점 중). 경쟁 ✗: pokerist «초과분은 2위 핸드와 나눈다»(오해) · poker-place «Drawing Dead» 조건 누락.
- 우리가 더 줄 것 3: ① **4인 다중 스택 팟 표**(L89~111 · 400+300+600 = 1,300) ② **재개방 숫자 예 + 누적 숏 올인 표**(L125~168 · WSOP Live Action Rule 175·176) ③ 경험담(L29 · L117).
- hootpoker 질문(축어 · FAQ 재료): «هل الرقائق التي أدفعها فوق رصيد الخصم تُفقد؟» · «هل يوجد بوت جانبي بين لاعبين فقط؟» · «هل تدخل رقائق اللاعب المنسحب في الحساب؟» · «كيف يُقسم الوعاء إذا تعادل لاعبون؟» / 영어 PAA «What does it mean if someone is all in?» · «How does split the pot work?»

### 현지 추가 (계획 §1 «FAQ 3~4 + H2 1»)
1. **새 H2 «ماذا يحدث للرقائق التي لم يجارِها أحد؟ (الرهان غير المُجارى)»** — 자리 = L69 사이드팟 H2 끝(4인 예 «The rule» 문장 L113 뒤) · L115 재개방 H2 **앞**. 사실(이것만): 반환되는 것은 전체 베팅이 아니라 «الجزء الزائد» · 한 명만 건 초과분은 사이드팟이 아니라 **그 사람에게 반환**(EN tldr · L212 «go straight back to that player as an uncalled bet») · 사이드팟은 «둘 이상의 큰 스택이 건 초과분»일 때만(tldr · L71) · 3인 예(L75~87 — B·C 둘이 맞춘 50은 사이드팟이 되는 «대비» 사례로만 · 스택 100·300·300 ≠ 투입 100·150·150 혼동 금지)로 짧게 대비 — 새 숫자 예 금지(EN 예의 숫자만).
2. **새 H3 «من يفوز بالبوت الجانبي؟ وماذا لو تعادل لاعبان؟»** — 자리 = L192 «All-In Showdown Rules» 번호 목록 뒤. 사실: 각 팟은 **그 팟 자격자 중** 베스트 핸드(L198 «Cards speak» · L199 «Multiple winners») · 사이드팟부터 판정(L197) · 동점 분배 세부는 `/ar/blog/holdem-hand-rankings#kicker`로 위임(숫자 없음).
3. **FAQ 3개**(EN 7문 뒤):
   - «ماذا يعني أن يكون اللاعب أول إن؟»(PAA) — EN L35 축어 범위(모든 칩 · 추가 불가 · 폴드 강요 불가).
   - «هل يتكوّن بوت جانبي إذا كانت اليد بين لاعبَين فقط منذ البداية؟» — 🔴 질문을 «처음부터 둘만 참여한 핸드»로 한정(아스트라 A #30 — 여럿이 만든 사이드팟은 나중에 둘이 남아도 유지된다 · L71·L203). 답: 없다 · 큰 스택의 초과분(«الجزء الزائد»)은 콜할 상대가 없어 반환(tldr · L212).
   - «هل تبقى رقائق اللاعب الذي طوى أوراقه في البوت؟» — 답: 남는다 · 그 칩은 팟에 남고 그 플레이어만 자격을 잃는다(L71 «a player who has since folded included, because chips that went in stay in the pot»).

### 확정 카피 — (§6-5)

### 소유표
- 주인: قواعد الأول إن · أول إن في البوكر · البوت الجانبي في البوكر · هل الأول إن يعيد فتح الرهان.
- 금지 헤드: «حاسبة البوت الجانبي»(우리 계산기는 에퀴티 — 글이 «손 계산 절차»로 받는다 · «حاسبة» 단어 제목 금지) · 쇼다운 순서 일반(showdown-rules 앵커) · 스플릿 세부(hand-rankings#kicker).

### §13 자리
L63 이미지 alt(보드 K♠10♣7♦4♥2♣) · 🔴 L75~87(3인: 100·300·300 → 메인 100×3 = 300 · 사이드 50×2 = 100 ✔) · 🔴 L89~111(4인: 100·200·500·500 → 400 + 300 + 600 = 1,300 ✔ = 스택 합 100+200+500+500) · 🔴 L125~133($1/$2 · A $10 · B 올인 $14(+$4 · 풀레이즈는 $20 이상) → A 재개방 없음 · C 최소 레이즈 총액 $14 + $10 = $24 · Live Action Rule 176 · 올인은 최소 미만 가능 Rule 175) · 🔴 L152~168($10 · $14(+$4) · $21(+$7) → $11 ≥ $10 → 재개방 ✔ / 표: 14·18 → $8 ❌ · 14·21 → $11 ✅ · 15·24 → $14 ✅ — 산수 ✔) · L218($80) · L221(TDA 2024 Rule 16) · FAQ L237(WSOP Live Action Rule 154).

### 경험담 자리
L29(첫 라이브 캐시 올인 — 무엇을 이길 수 있는지 몰랐음) · L117(재개방 규칙으로 두 플레이어가 5분 다툰 장면 — 둘 다 틀림) · L221(토너 vs 캐시 — 머크 서두르지 말 것).

### 하지 말 것
- 조문 번호 축어(WSOP Live Action Rule 154·175·176 · TDA 2024 Rule 16) · 새 숫자 예 금지 · «الوعاء الجانبي» 병기는 선택 1회까지(정본 «البوت الجانبي») · «القدر الجانبي» 0.

---

## 6. holdem-showdown-rules — EN updated **2026-10-13** (우선 2(L2) · 링크·용어 통일)

### 메타 (EN 축어)
- title: Texas Hold'em Showdown Rules: Who Shows First, Mucking, and Slow Rolling
- seoTitle: Who Flips First? Texas Hold'em Showdown Rules & Mucking
- desc: Who shows cards first at showdown? Can you muck without showing? Hold'em showdown rules — last aggressor, cards speak, slow roll, and all-in rules explained.
- tldr: In a non-all-in tournament showdown, the last river aggressor shows first; if the river checks through, the first active player left of the button does. With an all-in, all remaining hands must be shown once betting is complete. A river caller who retains or tables their cards can request the last aggressor's hand. Cash games follow house rules for showing and mucking.
- tags(EN): texas holdem showdown rules · who shows cards first poker · can you muck at showdown poker · slow roll poker · all in showdown rules
- category rules · readTime 10 min · image `/images/holdem-showdown-rules-hero.webp` · date 2026-06-15
- 현 ar = masterUpdated 10-13(가장 최신 · e30fde28 MA-509·510 반영본) — 본문 사실은 EN과 가깝다. 이 글의 일은 **용어(«الشودان»→§0-4 · «النهر» 22 · «إيس») + 족보 글 링크 신설 + EN 링크 편차 처리.** 현 seoTitle «من يكشف أوراقه أولًا؟ …» = 영어 related «Poker showdown who shows first»와 일치 → 훅 유지 후보.

### 구조 (EN L##)
- H2: L33 Who Shows First(이미지 L47) → L53 Muck Without Showing → L67 Everyone Checked the River → L77 All-In Showdown → L97 Cards Speak(이미지 L99 · 예 L107) → L111 Slow Rolling(이미지 L117) → L125 Win Without Showdown → L135 Etiquette(H3 ×4) → readnext L157 → FAQ L162(7문) → L194 Related Posts(카드 3)
- 표 행 8 · 이미지 3.

### 링크
| EN L## | EN 대상 | ar 처리 |
|---|---|---|
| L35 | holdem-game-order | 1:1 |
| L93 | holdem-all-in-rules | 1:1 |
| L93 | holdem-split-pot-rules | 🔴 없음 → **대체 `/ar/blog/holdem-hand-rankings#kicker`** |
| readnext L157 | game-order · all-in-rules | 1:1 |
| Related 3 | rules-for-beginners · split-pot · tiebreak | split-pot → **hand-rankings** · tiebreak → 🔴 없음(같은 대상 중복) → **all-in-rules 카드로 대체**(쇼다운 문맥) — 3장 유지(기존 ar 1장) |
| 🆕 현지 추가 | holdem-hand-rankings | L97 «Cards Speak» 직답 또는 L33 직답에 «الفائز = أفضل خمس أوراق» 앵커 1회(L2 §8-C «족보 글 연결 부재») |

### 키워드 (`ar-core-volumes` · L2 §0·§2-B·§5-E·§7-B·§8-C)
| 검색어 | SA/EG | 어디에 |
|---|---:|---|
| شودان | 210/210 (SERP 포커 0 — Shodan·수단) | 🔴 단독 금지 · 본문 괄호 «المواجهة (الشوداون — Showdown)» 1회 |
| المواجهة في البوكر · قواعد المواجهة في البوكر | `-` (포커 6/10 · 아랍어 1~2) | 🔴 seoTitle · title · tags |
| من يكشف أوراقه أولا في البوكر | `-` | seoTitle 훅 · H2 L33 · FAQ L164 · tags |
| muck · muck poker (AC: poker muck or show · poker muck vs fold · whats a muck poker) | 590/720 오염 · — | H2 L53 «رمي الأوراق دون كشفها (الماك — Muck)» · tags 결합형 «الماك في البوكر» |
| showdown (영) | 720/480 (섞임) | 🔴 제목 금지 · tags 1 |

### 현지 SERP (L2 §5-E)
- 쇼다운 아랍어 원문 공급 공백: casinoalarabi(«كشف الأوراق أو قلب الأوراق (The Showdown)» · ✗ «리버 전원 체크 시 버튼 오른쪽부터 공개») · GGPoker(«المواجهة النهائية» · muck = «الماك») · pokeracademyar(H4 «الشوداون») · pokerist(«شـوداون»). **아무도 안 다룬 것** = 머크 규칙 · 올인 강제 공개 · 슬로롤 · «الأوراق تتحدث» · 무쇼다운 공개 의무 → 우리 H2 전부가 이 공백.
- 우리가 더 줄 것 3: ① **리버 전원 체크 = 버튼 «왼쪽» 첫 액티브부터**(L67 · 경쟁 ✗ 정면 — 직답에 «يسار الزر، وليس يمينه» 명시) ② Cards speak 예(L107 J♥10♥ 스트레이트 플러시 ✔) ③ 올인 쇼다운 공개 규칙 + 리버 콜러의 요청권(tldr · L61).

### 현지 추가
- **FAQ «ما معنى الماك (Muck) في البوكر؟»**(선택 · 권장 — AC «whats a muck poker · poker muck vs fold» · GG 표기 «الماك») — 답: 패를 보여 주지 않고 버리는 것 · 🔴 패가 죽는 시점은 «딜러가 머크로 밀어 넣었을 때 또는 더는 식별·회수할 수 없을 때» — 엎어 놓았다고 자동으로 죽지 않는다(L105 · L186 · TDA 2024 Rule 14 축어 범위) · 올인 토너먼트에선 베팅 종료 뒤 전원 공개 의무(L57 · TDA 2024 Rule 16) · 폴드와의 차이는 «베팅 중 포기(폴드) vs 쇼다운에서 공개 없이 버림» 한 문장(EN L53~ 범위에서).
- 위 «링크» 표의 hand-rankings 앵커 1회.

### 확정 카피 — (§6-6)

### 소유표
- 주인: قواعد المواجهة في البوكر · من يكشف أوراقه أولا · رمي الأوراق دون كشف (الماك) · السلو رول.
- 금지 헤드: «شودان»·«كيكر» 단독(오염) · «ترتيب البوكر» · 키커·무승부·스플릿(hand-rankings#kicker 앵커 위임).

### §13 자리
hero alt(보드 4♥7♣Q♦K♠2♥ · A♠K♥ = K K A Q 7 → 킹 원페어 · 키커 آس ✔ — 🔴 alt의 «كيكر إيس» → «كيكر الآس») · L47 alt(J♥9♠4♦2♠K♥) · L99 alt(보드 8♠9♣10♥J♦Q♠ = 퀸 하이 스트레이트 ✔) · 🔴 L107(J♥10♥ + Q♥9♥8♥2♣5♦ → Q♥J♥10♥9♥8♥ 스트레이트 플러시 ✔ vs K♣Q♦ → Q 원페어 ✔) · FAQ L186.

### 경험담 자리
L61(리버 콜 → 상대 패 요청 장면) · L103(«페어»라 말했는데 스트레이트) · L137~141(쇼다운 매너 — 내가 매번 고쳐 주는 4가지).

### 하지 말 것
- 이 글 본문 사실은 e30fde28(MA-509·510 · 126.g «콜러 포함 전원» 범위) 반영본 — **기존 ar의 해당 문장을 EN과 대조해 범위를 줄이지 않는다** · TDA 조문 축어 · «يمين الزر» 표현 금지(왼쪽).

---

## 6-확정 카피 (Fable 서브 1회 출력 → Opus 글자 수 재측정 · §6-1~§6-6)

> Fable 서브 1회(10-14 · `model: fable`) 출력 → Opus 재측정·정정. 🔴 B·C는 이 문구를 바꾸지 않는다.
> 글자 수(Opus 측정 · 공백 포함): rules seoTitle 59 · desc 147 · title 67 / order 55 · 144 · 65 / betting 54 · 145 · 71 / blind 59 · 149 · 65 / all-in 58 · 142 · 69 / showdown 59 · 142 · 73 — 전부 seoTitle ≤ 60 · desc ≤ 160 · title ≤ 75 ✅.
> Opus 정정 4(아스트라 A 반영): blind L40 H2 «ولماذا تُفرض؟» · all-in 🆕 FAQ «… منذ البداية؟» · all-in tag «قواعد الأول إن في البوكر» · showdown FAQ «سيئ» 철자.
> 🔴 답 쪽 조건(§7 아스트라 기록 · 각 절 «현지 추가»)이 이 칸보다 앞선다: 필라 FAQ «هل البوكر 5 أوراق أم 7؟» 답은 «في تكساس هولدم…»으로 시작 · BB 체크 FAQ 답 = 스트래들 없을 때만.
> 아래 H2/H3 줄의 백틱은 이 문서의 표기일 뿐 — 🔴 포스트 본문엔 백틱을 쓰지 않는다(§0-3).

> 규칙 적용: §0-4 용어 정본 · §0-5 독립 노출 금지(영어 일반어·음차 단독형·«المواقع في البوكر»·«ترتيب اللعب» 주력어) · 새 사실·새 숫자 0 · 훅 유지 후보(blind·all-in·showdown)는 훅 보존 + 키워드만 교체.
> 마크다운 표기: H2 = `## ` · H3 = `### ` · FAQ = `**Q. …؟**`. tldr는 평문.

### §6 확정 카피 — texas-holdem-rules-for-beginners
- title: لعبة البوكر للمبتدئين — قوانين البوكر وتكساس هولدم والرقائق والأيدي
- seoTitle: لم تلعب من قبل؟ — قوانين لعبة البوكر وتكساس هولدم للمبتدئين
- desc: لم تلعب البوكر من قبل؟ طريقة لعب البوكر خطوة بخطوة بالعربي: قوانين لعبة البوكر تكساس هولدم، البلايندز، الرقائق، ترتيب الأيدي، وورقة مرجعية للطباعة.
- tldr: تمنحك لعبة البوكر تكساس هولدم ورقتَين خاصتَين (أوراق اليد) وخمس أوراق مشتركة على الطاولة. تمر اليد بأربع جولات مراهنة كحد أقصى، ويفوز في المواجهة صاحب أفضل خمس أوراق من بين السبع — إلا إذا طوى الجميع أوراقهم قبل ذلك.
- tags: ["قوانين البوكر", "لعبة البوكر للمبتدئين", "طريقة لعب البوكر", "ما هي لعبة البوكر", "قوانين البوكر بالعربي", "تكساس هولدم للمبتدئين", "poker rules", "how to play texas holdem"]
- H2/H3 세트:
  - L36 `### How to play Texas Hold'em in 30 seconds` → `### كيف تلعب تكساس هولدم في 30 ثانية`
  - 🆕 (자리: L36 H3 뒤 · L53 H2 앞) → `## ما هي لعبة البوكر؟ وما علاقتها بتكساس هولدم؟`
  - L53 `## Texas Hold'em Basic Rules` → `## ما هي قوانين البوكر الأساسية في تكساس هولدم؟`
  - L87 `## How to Play Texas Hold'em — Beginner Flow Summary` → `## ما هي طريقة لعب البوكر خطوة بخطوة؟ ملخص المبتدئ (بالصور)`
  - L108 `## How Many Players Can Play Texas Hold'em?` → `## كم عدد اللاعبين في تكساس هولدم؟`
  - L126 `## Who Goes First in Texas Hold'em?` → `## من يبدأ أولاً في تكساس هولدم؟`
  - L145 `## What Chips Do You Start With in Texas Hold'em?` → `## ما الرقائق التي تبدأ بها في تكساس هولدم؟`
  - L174 `## How Much Money Do You Start With in Texas Hold'em?` → `## بأي مبلغ تبدأ اللعب في تكساس هولدم؟`
  - L196 `## No-Limit, Limit, or Pot-Limit? Which Texas Hold'em Are You Playing?` → `## نو-ليمت أم ليمت أم بوت-ليمت؟ أي نسخة من تكساس هولدم تلعب؟`
  - L210 `## How to Deal Texas Hold'em` → `## كيف توزّع أوراق تكساس هولدم؟`
  - L235 `## Position in Texas Hold'em — Why Where You Sit Changes Everything` → `## الموقع في تكساس هولدم — لماذا يغيّر مقعدك كل شيء؟`
  - L252 `## Texas Hold'em Strategy for Beginners` → `## استراتيجية تكساس هولدم للمبتدئين: بأي أيدٍ تلعب؟`
  - L291 `## Pot Odds — The One Math Concept That Saves Beginners Money` → `## احتمالات البوت (Pot Odds) — المفهوم الحسابي الوحيد الذي يحفظ رقائق المبتدئ`
  - L295 `### How pot odds work (one example)` → `### كيف تعمل احتمالات البوت؟ (مثال واحد)`
  - L301 `### The Rule of 2 and 4 — instant probability shortcut` → `### قاعدة 2 و4 — اختصار فوري لحساب الاحتمالات`
  - L322 `## Printable Texas Hold'em Rules Cheat Sheet` → `## ورقة مرجعية لقوانين تكساس هولدم قابلة للطباعة`
  - L360 `## Common Beginner Mistakes` → `## ما أكثر أخطاء المبتدئين شيوعاً في لعبة البوكر؟`
  - L364 `### Mistake 1: Thinking you must use both hole cards` → `### الخطأ 1: الاعتقاد بأنك مضطر لاستخدام ورقتَي يدك معاً`
  - L368 `### Mistake 2: Forgetting that action order changes` → `### الخطأ 2: نسيان أن ترتيب التصرف يتغيّر`
  - L372 `### Mistake 3: Calling because "it might come"` → `### الخطأ 3: المجاراة لأن الورقة «قد تأتي»`
  - L376 `### Mistake 4: Playing any ace` → `### الخطأ 4: اللعب بأي آس`
  - L380 `### Mistake 5: Ignoring position` → `### الخطأ 5: تجاهل الموقع`
  - L391 `## FAQ` → `## الأسئلة الشائعة`
  - L443 `## Final Takeaway` → `## الخلاصة النهائية`
  - L453 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 12/14)
- FAQ 문항:
  - L393 How do you play Texas Hold'em step by step? → **Q. كيف تلعب البوكر تكساس هولدم خطوة بخطوة؟**
  - L397 Who goes first in Texas Hold'em? → **Q. من يبدأ أولاً في تكساس هولدم؟**
  - L401 What chips do you start with in Texas Hold'em? → **Q. بأي رقائق تبدأ في تكساس هولدم؟**
  - L405 How much money do you start with in Texas Hold'em? → **Q. بأي مبلغ تبدأ في تكساس هولدم؟**
  - L409 Is there a small straight in Texas Hold'em? → **Q. هل يوجد ستريت صغير في تكساس هولدم؟**
  - L413 How many possible starting hands are in Texas Hold'em? → **Q. كم عدد الأيدي الافتتاحية الممكنة في تكساس هولدم؟**
  - L417 What are Texas Hold'em rules for dummies — the simplest version? → **Q. ما أبسط صورة لقوانين البوكر لمن يبدأ من الصفر؟**
  - L421 Texas Hold'em rules for dummies — what do the blinds mean? → **Q. ماذا تعني البلايندز في تكساس هولدم للمبتدئ؟**
  - L425 What is the quick version of Texas Hold'em rules? → **Q. ما هي قواعد لعبة البوكر؟** (PAA 축어 · 질문만 검색형)
  - L429 How many players do you need to play Texas Hold'em? → **Q. كم لاعباً تحتاج للعب تكساس هولدم؟**
  - L433 What does no-limit mean in Texas Hold'em? → **Q. ماذا يعني «نو-ليمت» (بلا حد) في تكساس هولدم؟**
  - L437 How long does one hand of Texas Hold'em take? → **Q. كم تستغرق اليد الواحدة في تكساس هولدم؟**
  - 🆕 (FAQ 끝) → **Q. هل البوكر 5 أوراق أم 7؟**
  - 🆕 (FAQ 끝) → **Q. هل يستطيع البيغ بلايند أن يمرّر (تشيك) قبل الفلوب؟**
- 흡수 키워드:
  - لعبة البوكر → seoTitle · title · desc · H2 🆕 · H2 L360 · tags
  - قوانين البوكر → title · seoTitle(«قوانين لعبة البوكر») · H2 L53 · FAQ L417 · tags
  - طريقة لعب البوكر → desc · H2 L87 · tags
  - ما هي لعبة البوكر → H2 🆕 · tags
  - كيف تلعب البوكر → FAQ L393
  - تكساس هولدم → title · seoTitle · desc
  - قوانين البوكر بالعربي → desc(«بالعربي») · tags
  - قوانين البوكر بالصور → H2 L87(«بالصور»)
  - ما هي قواعد لعبة البوكر؟ (PAA) → FAQ L425
  - ما هي لعبة تكساس بوكر؟ (PAA) → H2 🆕 직답
  - Is poker 5 or 7 cards? (PAA) → FAQ 🆕
  - poker rules · how to play texas holdem (영) → tags

---

### §6 확정 카피 — holdem-game-order
- title: كيف تلعب تكساس هولدم: مراحل لعبة البوكر من البلايندز إلى المواجهة
- seoTitle: من يبدأ أولاً في البوكر؟ — مراحل لعبة البوكر خطوة بخطوة
- desc: على من الدور؟ ومن يراهن أولاً؟ مراحل لعبة البوكر كاملة — البلايندز، ما قبل الفلوب، الفلوب، التيرن، الريفر، المواجهة — ومن يبدأ أولاً في كل جولة.
- tldr: قبل الفلوب يراهن أولاً اللاعب الذي يجلس يسار البيغ بلايند. وعلى الفلوب والتيرن والريفر يبدأ أول لاعب ما زال في اليد يسار الزر — وهو عادةً السمول بلايند (وينعكس ذلك في الهيدز أب). أما اليد نفسها فتجري بهذا الترتيب: البلايندز ثم أوراق اليد ثم ما قبل الفلوب ثم الفلوب ثم التيرن ثم الريفر ثم المواجهة، بأربع جولات مراهنة كحد أقصى.
- tags: ["مراحل لعبة البوكر", "من يبدأ أولاً في البوكر", "جولات المراهنة في البوكر", "الفلوب والتيرن والريفر في البوكر", "مراحل اليد في تكساس هولدم", "من يراهن أولاً في تكساس هولدم", "poker order of play"]
- H2/H3 세트:
  - L32 `### One hand in 15 seconds` → `### يد واحدة في 15 ثانية`
  - L40 `## What Is Texas Hold'em?` → `## ما هي تكساس هولدم؟`
  - L48 `## Before the Deal: The Button and the Blinds` → `## ماذا يحدث قبل التوزيع؟ الزر والبلايندز`
  - L71 `## Stage 1 — Preflop: The First Decision Sets the Tone` → `## المرحلة 1 — ما قبل الفلوب: كيف يحدد القرار الأول نغمة اليد؟`
  - L84 `### Solid starting hands for beginners` → `### أيدٍ افتتاحية قوية للمبتدئين`
  - L94 `## Stage 2 — The Flop: Three Community Cards` → `## المرحلة 2 — الفلوب: ما الأوراق الثلاث المشتركة؟`
  - L109 `## Stage 3 — The Turn: The Picture Sharpens` → `## المرحلة 3 — التيرن: ماذا يتغير مع الورقة الرابعة؟`
  - L123 `## Stage 4 — The River: The Last Card, the Last Decision` → `## المرحلة 4 — الريفر: كيف تتخذ القرار الأخير مع آخر ورقة؟`
  - L137 `## Stage 5 — Showdown: Best Five Cards Wins` → `## المرحلة 5 — المواجهة: كيف تفوز أفضل خمس أوراق؟`
  - L155 `## Who Bets First in Texas Hold'em?` → `## من يبدأ أولاً في البوكر — قبل الفلوب وبعده؟`
  - L180 `## The Whole Order at a Glance` → `## ما هي مراحل لعبة البوكر؟ الترتيب الكامل في لمحة`
  - L195 `### ⚡ A one-line memory hook for each street` → `### ⚡ جملة واحدة تحفظ بها كل مرحلة`
  - L205 `## Follow One Full Hand, Step by Step` → `## كيف تجري يد كاملة خطوة بخطوة؟`
  - L216 `### Preflop` → `### ما قبل الفلوب`
  - L221 `### Flop: K♦ 9♠ 3♥` → `### الفلوب: K♦ 9♠ 3♥`
  - L229 `### Turn: 2♣` → `### التيرن: 2♣`
  - L237 `### River: A♥` → `### الريفر: A♥`
  - L246 `### Showdown` → `### المواجهة`
  - L257 `## The 7 Moves You Can Make, Fully Explained` → `## ما الحركات السبع التي يمكنك القيام بها؟`
  - L283 `## The 10 Poker Hand Rankings You Must Know` → `## ما هو ترتيب الأيدي العشر في البوكر الذي يجب أن تعرفه؟`
  - L308 `## 5 Mistakes Every Beginner Must Avoid` → `## 5 أخطاء يجب أن يتجنبها كل مبتدئ`
  - L312 `### 1. Playing almost every hand` → `### 1. اللعب بكل يد تقريباً`
  - L316 `### 2. Ignoring position` → `### 2. تجاهل الموقع`
  - L320 `### 3. Chasing draws blindly` → `### 3. مطاردة السحب (الدرو) بلا حساب`
  - L324 `### 4. Bluffing the river with a weak hand out of nowhere` → `### 4. البلف على الريفر بيد ضعيفة من العدم`
  - L328 `### 5. Misreading your hand at showdown` → `### 5. قراءة يدك خطأ في المواجهة`
  - L334 `## How to Start Playing Today` → `## كيف تبدأ اللعب اليوم؟`
  - L352 `## FAQ` → `## الأسئلة الشائعة`
  - L400 `## The 3 Things to Remember` → `## الأمور الثلاثة التي يجب أن تتذكرها`
  - L410 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 13/14 · 새 H2 없음)
- FAQ 문항:
  - L354 What is the exact order of play in Texas Hold'em? → **Q. ما هو الترتيب الدقيق لمراحل اليد في تكساس هولدم؟**
  - L358 Who goes first in poker? → **Q. من يبدأ أولاً في البوكر؟**
  - L362 Who bets first after the flop? → **Q. من يراهن أولاً بعد الفلوب؟**
  - L366 Who shows their cards first at showdown? → **Q. من يكشف أوراقه أولاً في المواجهة؟**
  - L370 What's the difference between preflop and the flop? → **Q. ما الفرق بين ما قبل الفلوب والفلوب؟**
  - L374 What's the difference between checking and calling? → **Q. ما الفرق بين التمرير (تشيك) والمجاراة (كول)؟**
  - L378 Do I have to use both of my hole cards at showdown? → **Q. هل يجب أن أستخدم ورقتَي يدي معاً في المواجهة؟**
  - L382 What are pot odds? → **Q. ما هي احتمالات البوت (Pot Odds)؟**
  - L386 When should I go all-in? → **Q. متى أدخل أول إن؟**
  - L390 How many betting rounds are there in a hand? → **Q. كم عدد جولات المراهنة في اليد الواحدة؟**
  - L394 Why does the dealer burn a card, and how many are burned? → **Q. لماذا يحرق الموزع ورقة، وكم ورقة تُحرق؟**
  - (🆕 없음)
- 흡수 키워드:
  - مراحل لعبة البوكر → seoTitle · title · desc · H2 L180 · tags
  - من يبدأ أولاً في البوكر → seoTitle(훅) · H2 L155 · FAQ L358 · tags
  - من يبدأ قبل الفلوب؟ / من يبدأ بعد الفلوب؟ (hootpoker H2) → H2 L155 · FAQ L362
  - جولات المراهنة في البوكر · كم عدد جولات المراهنة → FAQ L390 · tags
  - الفلوب والتيرن والريفر → desc · H2 L94/L109/L123 · FAQ L370 · tags(결합형)
  - مراحل اليد الخمس — خطوة بخطوة (경쟁 H2) → seoTitle(«خطوة بخطوة») · H2 L205
  - poker order of play (영) → tags
  - 금지 확인: «ترتيب اللعب» seoTitle/title/tags 0회 · «ترتيب أيدي البوكر» H2 L283은 EN 축어형만

---

### §6 확정 카피 — holdem-betting-actions
- title: أفعال الرهان في تكساس هولدم: تشيك وكول ورايز وفولد والحد الأدنى للزيادة
- seoTitle: تجمدت عند دورك؟ — معنى فولد وكول وتشيك ورايز في البوكر
- desc: جاء دورك وتجمّد ذهنك؟ معنى تشيك وكول ورايز وفولد في البوكر (التمرير والمجاراة والزيادة والطي)، وقاعدة الحد الأدنى للزيادة، وكم مرة يمكنك الزيادة.
- tldr: في تكساس هولدم خمسة أفعال رهان: التمرير (تشيك) أي تمرير الدور مجاناً، والرهان (بت) أي افتتاح الجولة، والمجاراة (كول) أي مطابقة الرهان، والزيادة (رايز) أي رفعه بحيث يساوي الحد الأدنى للزيادة آخر رهان أو زيادة كاملة، والطي (فولد). ولا يمكنك التمرير إلا إذا لم يكن أمامك رهان قائم — وقبل الفلوب يعني ذلك عادةً البيغ بلايند فقط (أو من وضع سترادل حياً).
- tags: ["معنى فولد في البوكر", "معنى كول في البوكر", "معنى تشيك في البوكر", "معنى رايز في البوكر", "الحد الأدنى للزيادة في البوكر", "كم مرة يمكن الزيادة في البوكر", "poker betting actions", "min raise poker rules"]
- H2/H3 세트:
  - L35 `### Quick summary` → `### ملخص سريع`
  - L44 `## What Are the 5 Betting Actions in Texas Hold'em?` → `## ما هي أفعال الرهان الخمسة في تكساس هولدم؟`
  - L62 `## What Is a Check in Poker?` → `## ما معنى تشيك (التمرير) في البوكر؟`
  - L72 `## When Can You Check in Poker?` → `## متى يمكنك التمرير (تشيك) في البوكر؟`
  - L85 `## What Is a Call in Poker? (Check vs Call)` → `## ما معنى كول (المجاراة) في البوكر — وما الفرق بين التمرير والمجاراة؟`
  - L101 `## What Is a Fold in Poker — Can You Fold at Any Time?` → `## ما معنى فولد (الطي) في البوكر — وهل يمكنك الطي في أي وقت؟`
  - L111 `## What Is a Min-Raise? Texas Hold'em Bet & Raise Rules` → `## ما هو الحد الأدنى للزيادة (مين-رايز)؟ قواعد الرهان والزيادة في تكساس هولدم`
  - L139 `## How Many Times Can You Raise in Poker?` → `## كم مرة يمكنك الزيادة في البوكر؟`
  - L152 `## What Does Going All-In Mean?` → `## ماذا يعني الدخول أول إن؟`
  - L162 `## Knowing the Actions Is Step One — Choosing Them Is Strategy` → `## معرفة الأفعال خطوة أولى — واختيارها هو الاستراتيجية`
  - L174 `## Live Betting Mistakes I See Every Week` → `## أخطاء الرهان الحي التي أراها كل أسبوع`
  - L178 `### Mistake 1 — Calling when you could check` → `### الخطأ 1 — المجاراة بينما يمكنك التمرير`
  - L182 `### Mistake 2 — "I call... actually, raise!"` → `### الخطأ 2 — «كول… لا، رايز!»`
  - L186 `### Mistake 3 — The big blind folding a free flop` → `### الخطأ 3 — البيغ بلايند يطوي فلوباً مجانياً`
  - L190 `### Mistake 4 — The silent single chip` → `### الخطأ 4 — الرقاقة الواحدة الصامتة`
  - L201 `## FAQ` → `## الأسئلة الشائعة`
  - L237 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 8/10 · 마무리 H2 없음(EN과 동일) · 새 H2 없음)
- FAQ 문항:
  - L203 Can you raise after checking in poker? → **Q. هل يمكنك الزيادة (رايز) بعد التمرير (تشيك) في البوكر؟**
  - L207 Can you raise your own bet? → **Q. هل يمكنك الزيادة على رهانك أنت؟**
  - L211 How many times can you raise in Texas Hold'em? → **Q. كم مرة يمكنك الزيادة في تكساس هولدم؟**
  - L215 Can you fold out of turn? → **Q. هل يمكنك الطي (فولد) خارج دورك؟**
  - L219 Can you check on the preflop? → **Q. هل يمكنك التمرير (تشيك) قبل الفلوب؟**
  - L223 Can you raise after someone goes all-in? → **Q. هل يمكنك الزيادة بعد أن يدخل أحدهم أول إن؟**
  - L227 What is a string bet in poker? → **Q. ما هو السترينغ بت (String Bet) في البوكر؟**
  - L231 What does it mean to limp in poker? → **Q. ما معنى الليمب (Limp) في البوكر؟**
  - 🆕 (FAQ 끝) → **Q. ما الفرق بين كول ورايز؟**
- 흡수 키워드:
  - معنى فولد / كول / تشيك / رايز في البوكر → seoTitle · desc · H2 L62/L85/L101 · tags
  - الحد الأدنى للزيادة → title · desc · H2 L111 · tags
  - كم مرة يمكن الزيادة → desc · H2 L139 · FAQ L211 · tags
  - متى يمكنني اختيار تشيك؟ (경쟁 H3) → H2 L72 · FAQ L219
  - ما الفرق بين كول ورايز؟ (경쟁 H3) → FAQ 🆕
  - متى يجب أن أطوي أوراقي؟ (경쟁) → H2 L101
  - سترينغ بت → FAQ L227
  - poker betting actions · min raise poker rules (영) → tags
  - 금지 확인: «مصطلحات البوكر» 0 · «ريز» 0(«رايز») · «الرفع» 0 · 음차 단독 tags 0(모두 «في البوكر» 결합)

---

### §6 확정 카피 — holdem-blind-meaning
- title: ما هي البلايندز في البوكر؟ السمول بلايند والبيغ بلايند بشرح مبسّط
- seoTitle: تدفع قبل أن ترى أوراقك؟ — ما هو البلايند في البوكر (SB وBB)
- desc: لاعبان يدفعان قبل توزيع أي ورقة — لماذا؟ ما هو السمول بلايند والبيغ بلايند في البوكر، من يدفعهما، مبلغ كل منهما، أنتي البيغ بلايند، وقواعد الهيدز أب.
- tldr: البلايندز رهانات إجبارية تُدفع قبل توزيع الأوراق. يجلس السمول بلايند يسار زر الموزع والبيغ بلايند يساره (وفي الهيدز أب يدفع الزر نفسه السمول بلايند). والبيغ بلايند — وهو عادةً ضعف السمول بلايند — هو وحدة الرهان على الطاولة.
- tags: ["البلايندز في البوكر", "ما هو البلايند في البوكر", "السمول بلايند والبيغ بلايند في البوكر", "أنتي البيغ بلايند", "قواعد البلايندز في تكساس هولدم", "البلايندز في الهيدز أب", "big blind", "small blind"]
- H2/H3 세트:
  - L30 `### The core numbers` → `### الأرقام الأساسية`
  - L40 `## What Is a Blind in Poker — and Why Does It Exist?` → `## ما هي البلايندز في البوكر — ولماذا تُفرض؟`
  - L48 `## What Is the Small Blind?` → `## ما هو السمول بلايند؟`
  - L56 `## What Is the Big Blind?` → `## ما هو البيغ بلايند؟`
  - L78 `## Small Blind and Big Blind Rules: Who Posts Them, and When` → `## قواعد السمول بلايند والبيغ بلايند: من يدفعهما ومتى، وكيف ينتقلان كل يد؟`
  - L93 `## How Big Are the Blinds? Stakes in Cash Games and Tournaments` → `## ما حجم البلايندز؟ المستويات في ألعاب الكاش والبطولات`
  - L117 `## What Is a Big Blind Ante? (Plus the Straddle)` → `## ما هو أنتي البيغ بلايند (BB Ante)؟ (وما السترادل)`
  - L125 `## Who Posts the Blinds in Heads-Up Poker?` → `## من يدفع البلايندز في الهيدز أب؟`
  - L131 `## What Happens If You Miss Your Blind? (Dead Blinds)` → `## ماذا يحدث إذا فوّتَّ بلايندك؟ (البلايندز الميتة)`
  - L137 `## How to Play From the Blinds — the 30-Second Version` → `## كيف تلعب من البلايندز؟ نسخة الثلاثين ثانية`
  - L154 `## FAQ` → `## الأسئلة الشائعة`
  - L190 `## The Takeaways` → `## الخلاصة`
  - L200 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 9/9 · 새 H2 없음)
- FAQ 문항:
  - L156 Why do you have to pay blinds before seeing your cards? → **Q. لماذا تدفع البلايندز قبل أن ترى أوراقك؟**
  - L160 Does the big blind or small blind go first? → **Q. من يتصرف أولاً: البيغ بلايند أم السمول بلايند؟**
  - L164 Is the small blind always exactly half the big blind? → **Q. هل السمول بلايند دائماً نصف البيغ بلايند بالضبط؟**
  - L168 If no one raises, can the big blind just check? → **Q. إذا لم يزد أحد، هل يستطيع البيغ بلايند أن يمرّر (تشيك) فقط؟**
  - L172 Can you fold after posting a blind? → **Q. هل يمكنك الطي (فولد) بعد دفع البلايند؟**
  - L176 Who posts the blinds in heads-up poker? → **Q. من يدفع البلايندز في الهيدز أب؟**
  - L180 What happens if you miss your blind? → **Q. ماذا يحدث إذا فوّتَّ بلايندك؟**
  - L184 Is "the big blind" the same as "the blinds"? → **Q. هل «البيغ بلايند» هو نفسه «البلايندز»؟**
  - 🆕 (FAQ 끝) → **Q. ماذا يعني SB وBB في البوكر؟**
  - 🆕 (FAQ 끝) → **Q. هل البيغ بلايند موقع جيد؟**
- 흡수 키워드:
  - ما هو البلايند في البوكر → seoTitle · tags
  - البلايندز في البوكر → title · H2 L40 · tags
  - السمول بلايند · البيغ بلايند → title · desc · H2 L48/L56/L78 · tags(결합형)
  - أنتي البيغ بلايند (BB Ante) → desc · H2 L117 · tags
  - Why are there two blinds (related) → H2 L40
  - Does big blind become small blind? (PAA) → H2 L78
  - What do SB and BB mean in poker? (PAA) → seoTitle(«SB وBB») · FAQ 🆕
  - Is big blind a good position? (PAA) → FAQ 🆕
  - Does the small blind have to match the big blind (PAA) → FAQ L164 · (선택) H2 L56 직답
  - big blind · small blind (영) → tags
  - 금지 확인: «الرهان الكبير/الصغير» title·seoTitle·desc·tags 0회 · «بلايند» 단독 tags 0

---

### §6 확정 카피 — holdem-all-in-rules
- title: قواعد الأول إن في تكساس هولدم: البوت الجانبي وإعادة الزيادة والمواجهة
- seoTitle: دخلت أول إن ولا تعرف ماذا تربح؟ — قواعد الأول إن في البوكر
- desc: راهنت بكل رقائقك ولا تعرف ماذا تربح؟ قواعد الأول إن في تكساس هولدم: رهان الطاولة، البوت الجانبي في البوكر، متى تُعاد الزيادة، وترتيب المواجهة.
- tldr: الدخول أول إن يعني أن تراهن بكل رقائقك. ولا يمكنك أن تربح من كل خصم إلا ما جاريته من رقائقه (البوت الرئيسي)؛ أما الرقائق الزائدة التي يراهن بها لاعبان أو أكثر من أصحاب الأرصدة الأكبر فتشكّل بوتاً جانبياً لا يفوز به غيرهم، بينما يُرَدّ الرهان الزائد إلى صاحبه إذا كان وحيداً. وفي النو-ليمت والبوت-ليمت لا يعيد الأول إن الأقل من زيادة كاملة فتح الرهان أمام لاعب تصرف بالفعل — إلا إذا تراكمت عدة دخولات أول إن قصيرة حتى بلغت زيادة كاملة فوق ما وضعه ذلك اللاعب.
- tags: ["قواعد الأول إن في البوكر", "أول إن في البوكر", "البوت الجانبي في البوكر", "هل الأول إن يعيد فتح الرهان", "اول ان في البوكر", "رهان الطاولة في البوكر", "side pot poker explained"]
- H2/H3 세트:
  - L33 `## What Does "All-In" Mean in Texas Hold'em?` → `## ماذا يعني «أول إن» في تكساس هولدم؟`
  - L55 `## How to Declare All-In` → `## كيف تعلن الدخول أول إن؟`
  - L69 `## How Do Side Pots Work in Poker? (Why the All-In Player Gets Capped)` → `## كيف يعمل البوت الجانبي في البوكر؟ (ولماذا يُحدّ ما يربحه لاعب الأول إن)`
  - L75 `### 3-Player Example (Standard)` → `### مثال بثلاثة لاعبين (الحالة المعتادة)`
  - L89 `### 4-Player Multi-Stack Example` → `### مثال بأربعة لاعبين وأرصدة مختلفة`
  - 🆕 H2 (자리: L113 «The rule» 문장 뒤 · L115 H2 앞) → `## ماذا يحدث للرقائق التي لم يجارِها أحد؟ (الرهان غير المُجارى)`
  - L115 `## Does Going All-In Reopen the Betting? — The Rule Most Players Get Wrong` → `## هل يعيد الدخول أول إن فتح الرهان؟ — القاعدة التي يخطئ فيها أكثر اللاعبين`
  - L146 `### Advanced Case: What If Multiple Players Go All-In Short?` → `### حالة متقدمة: ماذا لو دخل عدة لاعبين أول إن بمبالغ قصيرة؟`
  - L174 `### Quick Decision Guide — Does This All-In Reopen Betting?` → `### دليل القرار السريع — هل يعيد هذا الأول إن فتح الرهان؟`
  - L192 `## All-In Showdown Rules` → `## قواعد المواجهة بعد الأول إن`
  - 🆕 H3 (자리: L192 번호 목록(1~4 + Special case) 뒤 · L207 H2 앞) → `### من يفوز بالبوت الجانبي؟ وماذا لو تعادل لاعبان؟`
  - L207 `## What Happens If You Go All-In Wrong? — 5 Mistakes to Avoid` → `## ماذا يحدث إذا أخطأت في الأول إن؟ — 5 أخطاء تجنّبها`
  - L211 `### Mistake 1: Thinking the all-in player can win the side pot` → `### الخطأ 1: الاعتقاد بأن لاعب الأول إن يمكنه الفوز بالبوت الجانبي`
  - L214 `### Mistake 2: Not knowing the re-raise eligibility rule` → `### الخطأ 2: عدم معرفة قاعدة أهلية إعادة الزيادة`
  - L217 `### Mistake 3: Adding chips from your pocket mid-hand` → `### الخطأ 3: إضافة رقائق من جيبك في منتصف اليد`
  - L220 `### Mistake 4: Mucking your hand too quickly` → `### الخطأ 4: رمي أوراقك دون كشفها بسرعة زائدة`
  - L223 `### Mistake 5: Going all-in out of frustration` → `### الخطأ 5: الدخول أول إن بدافع الإحباط`
  - L233 `## FAQ` → `## الأسئلة الشائعة`
  - L265 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 6/7 · 마무리 H2 없음(EN과 동일))
- FAQ 문항:
  - L235 Can you go all-in for less than the big blind? → **Q. هل يمكنك الدخول أول إن بأقل من البيغ بلايند؟**
  - L239 What happens if you win the all-in but lose the side pot? → **Q. ماذا يحدث إذا فزت بالأول إن وخسرت البوت الجانبي؟**
  - L243 Does going all-in expose your hand? → **Q. هل يكشف الدخول أول إن أوراقك؟**
  - L247 Can you run it twice in a poker all-in? → **Q. هل يمكنك «تشغيلها مرتين» (Run It Twice) في أول إن البوكر؟**
  - L251 What is the "table stakes" rule exactly? → **Q. ما هي قاعدة «رهان الطاولة» (Table Stakes) بالضبط؟**
  - L255 If two players go all-in for different amounts, who shows first? → **Q. إذا دخل لاعبان أول إن بمبلغَين مختلفَين، فمن يكشف أولاً؟**
  - L259 Are all-in rules different in tournaments vs. cash games? → **Q. هل تختلف قواعد الأول إن بين البطولات وألعاب الكاش؟**
  - 🆕 (FAQ 끝) → **Q. ماذا يعني أن يكون اللاعب أول إن؟**
  - 🆕 (FAQ 끝) → **Q. هل يتكوّن بوت جانبي إذا كانت اليد بين لاعبَين فقط منذ البداية؟**
  - 🆕 (FAQ 끝) → **Q. هل تبقى رقائق اللاعب الذي طوى أوراقه في البوت؟**
- 흡수 키워드:
  - قواعد الأول إن → seoTitle · title · desc · tags
  - أول إن في البوكر → seoTitle · tags
  - اول ان (무함자 표면형) → tags 결합형 1개(«اول ان في البوكر») · 본문 표기는 «أول إن»
  - البوت الجانبي في البوكر → title · desc · H2 L69 · tags
  - هل الأول إن يعيد فتح الرهان → H2 L115 · H3 L174 · tags
  - who wins side pot poker · main vs side pot poker (AC) → H3 🆕
  - What does it mean if someone is all in? (PAA) → FAQ 🆕 ①
  - هل يوجد بوت جانبي بين لاعبين فقط؟ (hootpoker) → FAQ 🆕 ②
  - هل تدخل رقائق اللاعب المنسحب في الحساب؟ (hootpoker) → FAQ 🆕 ③
  - هل الرقائق التي أدفعها فوق رصيد الخصم تُفقد؟ (hootpoker) → H2 🆕
  - كيف يُقسم الوعاء إذا تعادل لاعبون؟ (hootpoker) → H3 🆕(hand-rankings#kicker 위임)
  - side pot (영) → tags
  - 금지 확인: «حاسبة» 0 · «القدر» 0 · «إعادة الرفع» → «إعادة الزيادة»

---

### §6 확정 카피 — holdem-showdown-rules
- title: قواعد المواجهة في البوكر: من يكشف أولاً، ورمي الأوراق دون كشف، والسلو رول
- seoTitle: من يكشف أوراقه أولاً؟ — قواعد المواجهة في البوكر والسلو رول
- desc: من يكشف أوراقه أولاً في المواجهة؟ وهل يمكنك رميها دون كشف؟ قواعد المواجهة في البوكر — آخر مُعتدٍ، «الأوراق تتحدث»، السلو رول، وحالات الأول إن.
- tldr: في مواجهة البطولات من دون أول إن، يكشف أولاً آخر من راهن أو زاد على الريفر؛ وإذا مرّ الجميع على الريفر فيكشف أول لاعب ما زال في اليد يسار الزر. ومع وجود أول إن يجب كشف كل الأيدي المتبقية بعد انتهاء الرهان، ويحق لمن جارى على الريفر واحتفظ بأوراقه أو كشفها أن يطلب رؤية يد آخر مُعتدٍ. أما ألعاب الكاش فتتبع قواعد البيت في الكشف ورمي الأوراق.
- tags: ["قواعد المواجهة في البوكر", "من يكشف أوراقه أولاً في البوكر", "المواجهة في تكساس هولدم", "الماك في البوكر", "السلو رول في البوكر", "المواجهة بعد الأول إن", "showdown poker"]
- H2/H3 세트:
  - L33 `## Who Has to Show Cards First at Showdown?` → `## من يكشف أوراقه أولاً في المواجهة؟`
  - L53 `## Can You Muck Without Showing at Showdown?` → `## هل يمكنك رمي الأوراق دون كشفها (الماك — Muck) في المواجهة؟`
  - L67 `## Showdown Order When Everyone Checked the River` → `## من يكشف أولاً إذا مرّ الجميع على الريفر؟`
  - L77 `## All-In Showdown Rules — Does the All-In Player Show First?` → `## قواعد المواجهة بعد الأول إن — هل يكشف لاعب الأول إن أولاً؟`
  - L97 `## What Is the "Cards Speak" Rule?` → `## ما هي قاعدة «الأوراق تتحدث» (Cards Speak)؟`
  - L111 `## What Is Slow Rolling in Poker?` → `## ما هو السلو رول (Slow Roll) في البوكر؟`
  - L125 `## Do You Have to Show Your Hole Cards If You Win Without Showdown?` → `## هل يجب أن تكشف أوراقك إذا فزت من دون مواجهة؟`
  - L135 `## Showdown Etiquette — What Beginners Get Wrong` → `## آداب المواجهة — ما يخطئ فيه المبتدئون`
  - L139 `### Mistake 1: Waiting for the caller to show first` → `### الخطأ 1: انتظار أن يكشف المُجاري أولاً`
  - L143 `### Mistake 2: Mucking before the dealer reads the hand` → `### الخطأ 2: رمي الأوراق قبل أن يقرأ الموزع اليد`
  - L147 `### Mistake 3: Demanding to see every called hand` → `### الخطأ 3: المطالبة برؤية كل يد تمت مجاراتها`
  - L151 `### Mistake 4: Not knowing you can show early` → `### الخطأ 4: عدم معرفة أنه يمكنك الكشف مبكراً`
  - L162 `## FAQ` → `## الأسئلة الشائعة`
  - L194 `## Related Posts` → `## مقالات ذات صلة`
  - (H2 질문형 7/8 · 새 H2 없음 · 마무리 H2 없음(EN과 동일))
- FAQ 문항:
  - L164 Who shows cards first at poker showdown? → **Q. من يكشف أوراقه أولاً في البوكر؟**
  - L168 Do you have to show your cards if you get called at showdown? → **Q. هل يجب أن تكشف أوراقك إذا جاراك أحد حتى المواجهة؟**
  - L172 Can you muck at showdown without showing? → **Q. هل يمكنك رمي أوراقك دون كشف في المواجهة؟**
  - L176 What is slow rolling in poker and why is it bad? → **Q. ما هو السلو رول في البوكر ولماذا هو سيئ؟**
  - L180 In an all-in situation, who shows their cards first? → **Q. في حالة الأول إن، من يكشف أوراقه أولاً؟**
  - L184 What does "cards speak" mean in poker? → **Q. ماذا تعني «الأوراق تتحدث» في البوكر؟**
  - L188 Do you have to show your cards if you win without a showdown? → **Q. هل يجب أن تكشف أوراقك إذا فزت من دون مواجهة؟**
  - 🆕 (FAQ 끝) → **Q. ما معنى الماك (Muck) في البوكر؟**
- 흡수 키워드:
  - قواعد المواجهة في البوكر → title · seoTitle · desc · tags
  - المواجهة في البوكر → seoTitle · desc · tags(«المواجهة في تكساس هولدم»)
  - من يكشف أوراقه أولا في البوكر → seoTitle(훅) · H2 L33 · FAQ L164 · tags
  - muck · whats a muck poker · poker muck vs fold (AC) → H2 L53 · FAQ 🆕 · tags(«الماك في البوكر»)
  - السلو رول → seoTitle · title · desc · H2 L111 · FAQ L176 · tags
  - الأوراق تتحدث (Cards Speak) → desc · H2 L97 · FAQ L184
  - 리버 전원 체크 = 버튼 왼쪽(경쟁 ✗ 정면) → H2 L67(직답에 «يسار الزر، وليس يمينه»)
  - showdown (영) → tags
  - 금지 확인: «شودان» 단독 0(본문 1회 «المواجهة (الشوداون — Showdown)») · «كيكر» 단독 0 · «الطي» 제목 제거(현 seoTitle «… والطي في هولدم» 교체)

---

## 7. 아스트라 A-교차 기록 (10-14 · codex gpt-6-astra read-only · 스크래치 `astra-ar-rules-A` · «걸프·이집트 포커 코치 겸 아랍어 교정자» 반박 전용)

- 40행: OK 29 · RISKY 7 · WRONG 4 → 본체가 EN 원문 대조(betting L221 · all-in L71·L203·L212 · showdown L105·L186 · order L174·L176·L241) 후 **WRONG 4 전부 채택 · RISKY 7 중 6 채택 반영(#21 확정 카피 공란 = 이 구간에서 채움)** · 기각 0.
- WRONG: #11 readTime 3~10 → «دقائق»(§0-2) · #23 BB 체크 = 스트래들 없을 때만(§1 현지 추가 3) · #30 «둘만 남은» → «처음부터 둘만»(§5 FAQ) · #31 머크 = 딜러가 밀어 넣거나 식별 불가일 때 죽음(§6 FAQ).
- RISKY 반영: #7 쌍수 격 · #19 태그 완성형 · #24 헤즈업 근거 L174 + 스트래들 L176 · #25 콜 = 총액 맞춤 · #26 SB/BB FAQ 조건 · #27 H2 «لماذا تُفرض» · #28 3인 예 = 대비 · #36 리버 «총액 70,000» · #40 5 actions vs 7 moves.
- 🔴 C가 지킬 것: 이 기록의 정정은 «확정 카피»보다 앞선다(카피 문구가 이 조건과 충돌하면 헤드 요청).
