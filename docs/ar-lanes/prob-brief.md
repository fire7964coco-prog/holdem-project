# ar-prob 브리프 — 🅲 확률·대회 4편 (A 산출 · 2026-10-14)

> **B의 유일한 입력** = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격·§13 축어 복사용 · 기준 해시 `e30fde28` — 10-14 확인: `git diff e30fde28 HEAD -- lib/posts-en` 변경 0).
> 🔴 B에서 웹·MCP·다른 로케일 파일·SERP 문서를 열지 않는다. 사실·수치·카드의 출처는 **EN 축어뿐**. 이 브리프가 EN과 다르게 지시한 자리(링크 편차·삭제 FAQ·용어)만 EN과 달라진다.
> 정본 순서: `docs/ar-cluster-plan.md` §5 표 > 이 브리프 > `docs/ms-translation-lanes.md` §5.

---

## 0. 공통 — 4편 모두

### 0-A. 고정문 (ar 8편 코퍼스 실측 · 10-14)

| 자리 | 정본 | 실측 근거 | 쓰지 마라 |
|---|---|---|---|
| 직답 블록 라벨 (EN `> **Quick answer**`) | `> **الإجابة السريعة**` (다음 줄 `> 본문`) | blind-meaning L26 — 코퍼스 1/1 | إجابة سريعة · الجواب السريع · خلاصة |
| readnext | `:::readnext[تابع القراءة]` | 6/6 | اقرأ أيضًا |
| FAQ H2 | `## الأسئلة الشائعة` | 7/8 (vs-cash 현재 «## FAQ» = 고친다) | FAQ |
| 관련 글 H2 | `## مقالات ذات صلة` | 8/8 | |
| «기억할 3가지» H2 (EN «The 3 … to Remember») | `## أهم 3 أشياء تذكرها` (vs-cash 현행 승계 · probability는 «## 3 أرقام احفظها عن ظهر قلب» 처럼 «أرقام»으로 바꿔도 된다) | 코퍼스 2종 갈림(hand-rankings «ثلاثة أمور يجب تذكّرها») | |
| FAQ 정형 | `**Q. …؟**` + 빈 줄 + `A. …` | 전 편 | `### Q1.` |
| readTime | `"N دقيقة"` | 8/8 | |
| category | **EN 값 그대로** — probability·pot-odds `"odds"` · tournament·vs-cash `"tournament"` | | 번역 금지 |
| 2인칭 | أنت (남성 단수 기본 · 코퍼스와 같게) | | |
| 숫자 | 서양 숫자 0-9 · 천 단위 콤마 `30,940` · 소수 마침표 `43.8%` · **% 붙임**(코퍼스 붙임 35 / 띄움 0) · 비율 = EN «3-to-1» → `3 إلى 1`(코퍼스 2) 또는 `3:1`(1) — 한 글 안에서 하나로(권장 `3 إلى 1` · 표 칸은 `3:1` 허용) | | ٠١٢ 동부 숫자 · «٪»(코퍼스 2회뿐 — 쓰지 않는다) |
| 카드 | 라틴 `A♥ K♥` `10♥` · 랭크 표기 `A-K` 등 EN 그대로 | | 아랍어 랭크명으로 카드 쓰기 |
| 부호 | 아랍 쉼표 «،» · 물음표 «؟» · 직선 따옴표 `"` | | 백틱 |
| `keepImagesInBody: true` | probability·pot-odds·tournament = EN에 있음 → 넣는다 · vs-cash = EN에 없음(`hideSummaryImageSlot: true`) → EN대로 | | |
| 히어로 | content에 넣지 않는다(렌더러가 그림 · 코퍼스 8/8 = 0) | | |
| `masterUpdated` | 편별 EN `updated` (아래) | | |
| `date` | 신규 3편 = `"2026-10-14"`(🪶 헤드가 배포일로 다시 맞춘다 · 계획 §4-A ①) · vs-cash = 원래 `"2026-06-11"` 유지 | | |
| `updated` | `"2026-10-14"` | | |

### 0-B. 용어 (계획 §3-A 정본 + 이 레인 신규 — 진행 파일 «신규 용어»에도 적었다)

- **§3-A 그대로**: «الريفر (النهر)» 첫 등장 후 «الريفر» · «الطي (فولد)» + «الانسحاب من اليد» · «السمول بلايند (SB)» / «البيغ بلايند (BB)» · «رويال فلاش (الفلاش الملكي)» 첫 등장 후 «رويال فلاش» · «المواجهة (الشوداون — Showdown)» · «الآس»(굴절형 «الآسات») · «الموقع»(🔴 대회 순위 «المركز النهائي»는 그대로) · UTG 라틴 · «البلف» · **«البوت»**(«القدر» 단독 0회 — «ليلة القدر» 충돌) · **«احتمالات البوت (Pot Odds)»** 첫 등장 후 «احتمالات البوت» · «الأوتس (Outs)» · «الإكويتي (Equity)»(ك) · «الكاش جيم» · «أول إن» · «البوت الجانبي».
- **족보명(코퍼스 실측 · rank 레인과 같은 꼴)**: رويال فلاش · ستريت فلاش · فور أوف كايند · فول هاوس · فلاش · ستريت · ثلاثية · زوجان · زوج واحد · الورقة العالية.
- **스트리트**: ما قبل الفلوب (40) · الفلوب · التيرن · الريفر.
- **레인 신규(이 브리프가 정한다)**:

| EN | ar | 근거 |
|---|---|---|
| probability / odds (개념) | الاحتمالات · «احتمالات البوكر» | SERP 헤드(L4 단계 0 · 아랍어 8/9) |
| implied odds / reverse | «الاحتمالات الضمنية (Implied Odds)» / «الاحتمالات الضمنية العكسية» | `/ar/calculator` 섹션명 «بوت أودز والاحتمالات الضمنية»(dict) |
| Rule of 2 and 4 / Rule of 4 and 2 | «قاعدة 2 و4» / «قاعدة 4 و2» (EN 글마다의 어순 그대로) | L4 7-1·7-2 |
| set / set mining | «السيت (Set)» / «صيد السيت (Set Mining)» | 코퍼스 «سيت» 4 · L4 P6 «مجموعة (Set)»은 직역이라 미채택 |
| flush draw / open-ended straight draw / gutshot / combo draw | «فلاش درو (Flush Draw)» · «ستريت درو مفتوح الطرفين (Open-Ended)» · «الغتشوت (Gutshot — ستريت داخلي)» · «درو مركّب (Combo Draw)» | L4 7-2 FAQ 후보 «فلاش درو» · 🔴 L4 #8·#9: 경쟁 글이 OESD를 거트샷으로 오분류 — 분류명은 EN 그대로 |
| clean / dirty (tainted) outs | «أوتس نظيفة» / «أوتس ملوّثة» | 직관 표현(외부 근거 없음 — C 렌즈 확인) |
| overcards | «أوراق أعلى (Overcards)» | |
| nuts | «النتس (Nuts — أقوى يد ممكنة)» — 🔴 단독 «نتس»는 오염(§2 ⑧) → 본문 풀이형만 | |
| cooler / bad beat | «الكولر (Cooler)» / «الباد بيت (Bad Beat)» | |
| buy-in | «الباي-إن (Buy-in)» | 코퍼스 «باي-إن» 22 |
| rake / house fee | «عمولة البيت (Rake)» | 코퍼스 «Rake» 1 · 풀이형 |
| starting stack / stack | «الستاك الافتتاحي» / «الستاك» | 코퍼스 «الستاك» 21 |
| blind level / ante / BB ante | «مستوى البلايندز» / «الأنتي (Ante)» / «أنتي البيغ بلايند (BB Ante)» | 코퍼스 «الأنتي» 5 |
| structure sheet | «ورقة هيكل البطولة (Structure Sheet)» | 아스트라 #14(«ورقة الهيكل» 대상 누락 직역) |
| bubble / ITM / min-cash / final table / chip leader / short stack | «الفقاعة (Bubble)» 첫 등장 후 «الفقاعة» · ITM(+ «داخل منطقة الجوائز») · «الحد الأدنى للجائزة (Min-cash)» · «الطاولة النهائية» · «متصدر الرقائق» · «الستاك القصير (Short Stack)» | L4 4-D «الفقاعة» 8회 · 계획 7-4 «الفقاعة (Bubble)» 병기 1회 |
| formats | Freezeout · Rebuy / Re-entry · Bounty / KO · PKO · Deepstack · Satellite · Turbo / Hyper-Turbo · Mystery Bounty · MTT · SNG (Sit & Go) = **라틴 + 첫 등장 아랍어 풀이** | L4 3행: 직역(«اجلس وانطلق»·«الأقمار الصناعية»)은 검색형 아님 → 라틴 괄호가 안전 |
| late reg / add-on / shove | «التسجيل المتأخر (Late Reg)» · Add-on(+ «شراء إضافي لمرة واحدة») · «الدفع بكل الرقائق (Shove / Jam)» | |
| ICM | ICM + 첫 등장 «نموذج الرقائق المستقل (Independent Chip Model)» | L4 4-D ICM 라틴 36회 · 풀이 2종 중 «الرقائق»(코퍼스 59)로 |
| bb/100 · ROI · EV | 라틴 그대로 + 첫 등장 풀이 | |
| cash game / ring game | «الكاش جيم» · ring game = «ويُسمّى أيضًا Ring Game» 풀이 1회(«لعبة الحلقة» 금지) | 계획 §3-A · 아스트라 #20 |
| bankroll | «البانكرول» | 코퍼스 7 |

### 0-C. 링크 대상 (계획 §5) — ar에 있는 것만

`/ar/blog/` + texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions · holdem-blind-meaning · holdem-all-in-rules · holdem-showdown-rules · holdem-hand-rankings(`#kicker` 앵커는 🅱이 새로 만든다) · holdem-probability · holdem-pot-odds · holdem-tournament · holdem-tournament-vs-cash-game · holdem-strategy · holdem-positions · holdem-continuation-bet · holdem-glossary · 도구 `/ar/calculator` · `/ar/hand-chart` · `/ar/win-rate-quiz` · `/ar/tournaments`(도구 링크는 앵커·thumb 없이 — 코퍼스 꼴).
🔴 없는 것: `/ar/solver` · `/ar/glossary` · holdem-tiebreak-rules · holdem-outs · holdem-equity · holdem-implied-odds · holdem-drawing-odds · holdem-starting-hands-chart · holdem-flush-vs-straight · holdem-reading-the-board · holdem-position-play · holdem-rake · holdem-short-stack · holdem-bubble · holdem-icm · apt-incheon-2026-guide.
- 링크 문법: 본문 `[텍스트](/ar/blog/<slug>)` (EN의 `"thumb:/images/…"` 꼬리표는 **같은 대상일 때만** 유지) · 관련 글 그리드 `<a href="/ar/blog/<slug>" …>` = EN 마크업 축어 + 대상만 교체 · readnext 줄 `/ar/blog/<slug> | <ar 제목> | <이미지>`.
- 🔴 **빼기의 한계(아스트라 #41)**: 개념 문장은 살리되 **없는 글을 가리키는 안내 문구(«see the full guide» · «is covered in» · «deserves its own guide» · «the … guides linked above»)는 지우거나 축약**한다 — 링크만 걷고 «자세한 가이드는 …» 문장을 남기면 없는 자료를 약속한다.
- 편마다 처리(빼기 = 문장은 살리고 링크만 걷는다 · 대체 = 같은 문맥의 ar 대상)는 아래 각 절 «링크» 표 — 진행 파일 «링크 편차»와 같다.

### 0-D. 금지 (4편 공통)

합법성·종교 판단(«حرام/حلال/حكم» · «هل البوكر قمار») · 실머니·사이트·앱 추천 · «حاسبة»를 seoTitle·H1·H2에(→ `/ar/calculator` 몫) · 연도·일정·장소어 «بطولات البوكر 2026»(→ `/ar/tournaments`) · 음차 단독 seoTitle/desc 헤드(بوت أودز · اوتس · كاش جيم · ايكويتي · short stack · فيش · نتس) · 영어 검색어를 제목 주력어로 · 본문 백틱 · `**` 중첩 · tldr 안 마크다운 · 없는 경험(아랍권 카지노·대회·금액 창작 금지 — **EN 1인칭만** 아랍 독자에게 자연스럽게 옮긴다) · §13 값 변경 · 슬러그·이미지 경로 변경.

---

## 1. holdem-probability — EN `updated` 2026-10-01 → `masterUpdated: "2026-10-01"` · 신규

### 메타 (EN 축어)
- title «Poker Odds & Probability Chart — Every Hand's Real Odds in Hold'em» · seoTitle «How Often Do You Actually Hit? — Poker Odds & Probability Chart» · desc «The real odds of every poker hand, flop, and draw in Texas Hold'em — plus the Rule of 2 and 4 and pot odds made simple, in one complete probability chart.» · tldr «By the river you'll make one pair 43.8% of the time, two pair 23.5%, a flush 3.0%, and a full house 2.6% — while a royal flush shows up just once in about 31,000 hands.» · category odds · readTime 13 min · emoji 🎲 · image `/images/holdem-probability-hero.webp` · imageAlt «Overhead view of an active Texas Hold'em table with five community cards, scattered chip stacks and players mid-hand» · tags 8(poker odds · poker probability chart · poker hand odds · odds of flopping a set · rule of 2 and 4 · pot odds · poker outs chart · texas holdem odds).

### 구조 (EN L## — B는 이 순서·레벨 그대로)
- L19 경험담 도입(1인칭) · L21 도입 · `---` · L25 H3 «The numbers that matter most» + L27 `:::stripe` 5행 · `---`
- L37 H2 Hand Odds Chart → L39 Quick answer · L42-43 불릿 2 · L45 `<div style=…>` 금색 박스 + 표1(10행 × 3열) `</div>` · L62 인용 블록 «The stat that surprises everyone» · L65 문단(링크 hand-rankings) · L67 `:::quiz:::`
- L71 H2 Starting Hand → Quick answer · L76 이미지 `/images/holdem-probability-starting-hands.webp` · 표2(5행) · L88 문단(링크)
- L92 H2 Flopping → Quick answer · `<div>` + 표3(7행 × 4열) · L111 문단(앵커 `[pot odds](#pot-odds)` + 링크)
- L115 H2 Drawing Odds → Quick answer · `<div>` + 표4(8행 × 4열) · L135 · L137 문단
- L141 H2 How to Calculate → Quick answer · `:::steps` 3행 · L152 Worked example · L154 `:::tip[…]:::` · L156 문단(링크 2)
- `---` · **L160 원시 HTML `<a id="pot-odds"></a>` — 축어로 옮긴다**(L111 페이지 내 앵커의 대상)
- L162 H2 Pot Odds → Quick answer · L167 이미지 `/images/holdem-probability-pot-odds.webp` · L169 Worked example · `:::steps` 5행 · L179 문단(링크 2)
- L183 H2 Royal Flush → Quick answer · L188 이미지 `/images/holdem-probability-royal-flush.webp` · 불릿 2 · L193 문단 · `:::note` 블록(L195-197)
- L201 H2 Long-Shot → Quick answer · 표5(4행) · L213 문단(링크)
- `---` · L217 `:::readnext` 2줄 · L222 H2 FAQ — **15문**(L224~L280) · `---` · L286 H2 «The 3 Numbers…» 번호 3 + L292 문단(링크 2) · `---` · L296 H2 Related Posts + 그리드(EN 5카드)

### 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| L65 | holdem-hand-rankings (thumb) | 유지 `/ar/blog/holdem-hand-rankings` (thumb 유지) |
| L88 | holdem-starting-hands-chart | 대체 → `/ar/hand-chart` (시작 핸드 차트 = 도구 주인 §3-C) |
| L111 | `#pot-odds` | 유지(페이지 내) |
| L111 | holdem-drawing-odds (thumb) | 대체 → `/ar/calculator` — 앵커 약속을 **드로 계산으로 한정**(예 «جرّب حساب احتمالات إكمال الدرو بأرقامك») · «모든 행 유도» 약속 금지(아스트라 #42 · 표에 플롭 조건부 행이 섞여 있다) |
| L156 | holdem-equity (thumb) | 대체 → `/ar/calculator` («الإكويتي» 계산) |
| L156 | holdem-outs (thumb) | 빼기 (문장 유지 · 링크만 제거) |
| L179 | holdem-implied-odds (thumb) | 빼기 (용어는 «الاحتمالات الضمنية (Implied Odds)»로 살린다) |
| L179 | holdem-pot-odds | 유지 |
| L213 | holdem-tiebreak-rules | 대체 → `/ar/blog/holdem-hand-rankings#kicker` |
| L218 readnext | holdem-hand-rankings | 유지 (`/images/holdem-hand-rankings-hero.webp`) |
| L219 readnext | holdem-starting-hands-chart | 대체 → `/ar/blog/holdem-pot-odds` · `/images/holdem-pot-odds-hero.webp` |
| L262 FAQ | holdem-pot-odds (thumb) | 유지 |
| L292 | holdem-starting-hands-chart | 대체 → `/ar/hand-chart` |
| L292 | holdem-flush-vs-straight | 대체 → `/ar/blog/holdem-hand-rankings` (같은 문맥 «왜 플러시가 스트레이트를 이기나» = 족보 순위) |
| 그리드 | hand-rankings · starting-hands-chart · flush-vs-straight · reading-the-board · position-play | hand-rankings 유지 · 나머지 4 → **holdem-pot-odds · holdem-positions · /ar/win-rate-quiz는 그리드에 넣지 않는다(블로그 카드만)** → 최종 3카드: hand-rankings · pot-odds · positions (라벨·설명은 ar 대상 글 주제로 · 새 사실 금지) |
| (추가 허용) | — | 도구 `/ar/win-rate-quiz`를 L67 `:::quiz:::` 뒤 한 줄로 걸어도 된다(L4 7-2 «차별화») — 선택 |

### 키워드 (L4 · 0-1 실측 · 2026-10-14 · 재조사 안 함)
- 주력 = **«احتمالات البوكر»**(SA·EG 상위 아랍어 8/9·9/10 — L4 유일한 «아랍어 원문 있음» 헤드 · 자동완성 헤드) + «جدول»(GG H3 «جدول احتمالات البوكر» · poker odds chart/table · probability chart 각 10).
- 보조: «حساب الاحتمالات في البوكر»(SERP 10/10 아랍어 — GG 1 + 구글 번역 프록시 9 = 원문 수요 신호) · «احتمالات تكساس هولدم» · «كيف تحسب احتمالات البوكر» · 영어 tags(poker odds 10 · poker probability 10 · poker math 10 · poker hands probability 10).
- winnable → 자리: H2-1(§5 확정형 · 5장·7장 두 기준) · H2 «كيف تحسب احتمالات البوكر» · FAQ «كيف تعرف الاحتمالات في البوكر؟»(PAA «How to know odds in poker?» — EN FAQ에 없음 → **현지 추가 FAQ 1문 허용**: 답 = EN L141 절 요지(아웃 세기 → 2와 4 규칙 → 가격 비교)만 · 새 수치 금지).
- 함정: «حاسبة احتمالات البوكر»(도구) · «ترتيب»(L2) · «مخطط الأيدي الافتتاحية»(hand-chart) · «احتمالات القدر»(«ليلة القدر») · «اوتس»(엘리베이터·속옷 0/8) · «ايكويتي»(증권사).

### 현지 SERP (L4 단계 3·4·5)
- 상위가 주는 것: GG/ar(#1 · 운영사) 5장 확률표 + FAQ 11 · pokeracademyar 입문 518단어 · statisticseasily 통계 블로그 · calcbe/holdemcalc 계산기 · poker-place·poker.md 카지노 제휴(하단 가입 박스).
- 우리가 더 줄 것 3: ① **표마다 기준 줄**(5장 vs 7장 · 플롭 시점 조건부 · 1장 vs 2장) — GG #1은 홀덤 글에 5장 값·«4.164 : 1» 표기(= 4,164:1) ② **손 예시 정확 분류**(OESD 8아웃 · 오버카드 6 · 콜 포함 분모) ③ 1인칭 경험담(경쟁 0/16).
- PAA(축어): 아랍어 확률 PAA **0** · 영어 «How to know odds in poker?» · «What does the 80/20 rule mean in poker?»(🟡 정의 갈림 — 쓰지 않는다).
- GG FAQ 축어 «ما هي احتمالات AA مقابل KK؟» → 🔴 EN에 AA vs KK 수치가 없다 → **쓰지 않는다**(새 수치 금지 · EN-먼저 후보로만 기록).

### 확정 카피 — (Fable 서브 · 아래 §5에 붙인다)

### §13 자리 (EN 축어 · B는 숫자 형식만 0-B대로 · 값 변경 0)
- L8 tldr 43.8 · 23.5 · 3.0 · 2.6 · «about 31,000»
- L19 «1 in 8.5» · L28-32 stripe 43.8% · 23.5% · 3.0% · 2.6% · 1 in 30,940
- L40 43.8 · 23.5 · 표1 L49-58 전 칸(649,740 / 0.000154% / 30,940 / 0.0032% · 72,193 / 0.00139% / 3,590 / 0.0279% · 4,165 / 0.0240% / 595 / 0.168% · 694 / 0.144% / 39 / 2.60% · 509 / 0.197% / 33 / 3.03% · 255 / 0.392% / 22 / 4.62% · 47 / 2.11% / 21 / 4.83% · 21 / 4.75% / 4.3 / 23.5% · 2.4 / 42.3% / 2.3 / 43.8% · 2.0 / 50.1% / 5.7 / 17.4%) · L63 50.1 · 17.4 · 43.8 · 23.5 · L65 43.8
- L74 221 · 17 · 1,326 · 23.5% · 0.30% · 표2 L82-86(221 / 0.45% · 17 / 5.9% · 332 / 0.30% · 83 / 1.2% · 4.3 / 23.5%) · L78 1,326 · L88 221 · 17
- L95 11.8% · 0.84% · 10.9% · 표3 L101-107(11.8% ~7.5 to 1 · 0.84% ~118 to 1 · 10.9% ~8 to 1 · 8-7 1.3% ~76 to 1 · 2.0% ~49 to 1 · 0.98% ~101 to 1 · 0.245% ~407 to 1) · L111 7.5 to 1 · 15–20×
- L118 35% · 19.6% · 표4 L124-131(15: 54.1/32.6 · 12: 45.0/26.1 · 9: 35.0/19.6 · 8: 31.5/17.4 · 6: 24.1/13.0 · 4: 16.5/8.7 · 2: 8.4/4.3 · 7(flop)/10(turn): 33.4/21.7) · L135 29.1% · 19.6% · L137 35% · 31.5% · 19.6%
- L148-149 ×4 · ×2 · L152 9 outs · 13 − 4 · 9 × 4 = 36% · 35.0% · 9 × 2 = 18% · 19.6% · L154 7 outs · 15-out · 60% · 54%
- L167 이미지 alt «$100 pot · $25 call · 25 ÷ 125 · 20%» · L169-176 $100 + $50 = $150 · $50 · $200 · 50 ÷ 200 = 25% · 35% · 9 × 4 = 36% · L179 35% · 25% · 9 ÷ 47 = 19.1%
- L186 30,940 · 3,590 · L188 alt 카드 **A♥ K♥ + 10♥ J♥ Q♥ → A-K-Q-J-10** · L190 649,740 · 30,940 · L191 72,193 · 3,590 · L193 4 ways · 1,302,540 · L196 «ten specific cards … nine»
- L204 408 · 221 · 표5 L208-211(221 · 408 · 54s–JTs ~4,900 · 30,940) · L213 11.8%
- FAQ: L226 30,940 · 649,740 · L230 72,193 · 3,590 · L234 595 · 0.168% · 4,165 · 7,700 · 57% · L238 3.0% / 33 · 4.6% / 22 · 2.6% / 39 · L242 35% · 19.6% · L246 11.8% · 8.5 · 7.5-to-1 · 15–20× · **L250 A♥ K♥ + Q♥ J♥ 10♥ · 19,600** · L254 221 / 0.45% · 17 / 5.9% · L258 ×4 36% · 35.0% · ×2 18% · 19.6% · L262 $50 · $150 · 50 ÷ 200 = 25% · L266 11.8% · L274 85% · L278 32% · «two flops out of three»
- L288 ~12% (1 in 8.5) · L289 35% · 9 × 4 = 36%
- (아스트라 #30 보충) L21 «two seconds» · L40-43 **5장 열 / 7장 열 기준 정의 2불릿** · L74 «a particular pair is only six of them» · L76 이미지 alt «ace of spades and ace of hearts» · 표2 L82 «A-A» · L84-85 «A-K»
- 손검산(A 구간 확인 ✓): L250 1/C(50,3) = 1/19,600 ✓ · L152 13 − 4 = 9 ✓ · L179 9/47 = 19.15 ✓ · L174 50/200 ✓.

### 경험담 자리 (EN 1인칭 — 이것만)
- L19 «라이브 게임에서 5 페어로 셋마이닝 → 플롭 셋 · 옆 사람 "what are the odds?" · 1 in 8.5» → 도입 첫 문단(라이브 테이블이라는 것만 · 장소·도시 창작 금지).

### 하지 말 것
- AA vs KK 수치 추가 금지(EN에 없음) · L274 «about 85%»를 다른 값으로 바꾸지 마라(L4 #4 경쟁 80/20 모순 — 우리는 EN 85%) · «حاسبة»를 H2에 · 표 열 순서를 바꾸지 마라(RTL에서 열이 오른쪽부터 렌더되는 것은 정상).
- EN-먼저 후보: 없음(A 구간 검산에서 EN 오류 미발견).

---

## 2. holdem-pot-odds — EN `updated` 2026-10-06 → `masterUpdated: "2026-10-06"` · 신규

### 메타 (EN 축어)
- title «How to Calculate Pot Odds in Poker — The 10-Second Method» · seoTitle «Is This Call Actually Profitable? — How to Calculate Pot Odds» · desc «Stop calling on hope. How to calculate pot odds in ten seconds — the ratio-to-percentage shortcut, a bet-size cheat sheet, and where implied odds fit in.» · tldr «To calculate pot odds, divide the amount you must call by the total pot after your call. Calling $50 into a $150 pot = 50 ÷ 200 = 25% — so you need at least 25% equity to make the call profitable.» · category odds · readTime 12 min · emoji 🧮 · image `/images/holdem-pot-odds-hero.webp` · imageAlt «A player's hand pushing chips toward the center pot on green felt — the moment a pot-odds decision is made» · tags 8(pot odds · how to calculate pot odds · poker pot odds · pot odds chart · implied odds · pot odds vs equity · rule of 4 and 2 · required equity to call).

### 구조
- L19 경험담 도입 · L21 · L23 문단(링크 probability) · `---` · L27 H3 «Pot odds at a glance» + `:::stripe` 3행 · `---`
- L37 H2 What Are Pot Odds (Quick answer **없음** — EN대로 · 첫 문단 굵은 직답이 그 역할) · 문단 3
- L47 H2 Step by Step → Quick answer · `:::steps` 4행 · L59 · L61 인용 블록 «The one rule that removes all confusion»
- L66 H2 Ratio vs Percentage → Quick answer · L71 · 표1(7행)
- L87 H2 How Much Equity → Quick answer · L92 이미지 `/images/holdem-pot-odds-required-equity.webp` · `<div>` + 표2(7행 × 3열) · L110
- L114 H2 Pot Odds Chart → Quick answer · L119 문단(링크) · `<div>` + 표3(5행 × 4열) · L133
- L137 H2 Pot Odds vs Equity vs Implied → Quick answer · `:::compare` 4행 · L149(링크 2) · L151(링크)
- L155 H2 Rule of 4 and 2 → Quick answer · 불릿 2 · L163 · L165 `:::tip[…]:::` · L167(링크)
- L171 H2 Mistakes → Quick answer · L176 · `:::card` 5행 · **L187 H3 «A real hand, start to finish»** · L189 · L191
- `---` · L195 readnext 2줄 · L200 H2 FAQ — **11문**(L202~L244) · `---` · L248 H2 «The 3 Things to Remember» 번호 3 · L254(링크 2) · `---` · L258 Related + 그리드(EN 4카드)

### 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| L23 · L167 · L254 | holdem-probability | 유지 |
| L119 | holdem-outs (thumb) | 빼기 («[Count your outs]» → 굵게만) |
| L149 | holdem-equity (thumb) | 대체 → `/ar/calculator` |
| L149 | holdem-implied-odds (thumb) | 빼기 |
| L151 | holdem-starting-hands-chart («nut flush draw … baby one») | 대체 → `/ar/hand-chart` — 이유 설명(넛 드로가 왜 비싼가)은 본문 문장으로 하고, 링크 앵커는 도구 기능에 맞게(예 «اختر أيدي البداية المناسبة لكل موقع») (아스트라 #44) |
| L254 | holdem-starting-hands-chart | 대체 → `/ar/hand-chart` |
| L196 readnext | holdem-probability | 유지 (`/images/holdem-probability-hero.webp`) |
| L197 readnext | holdem-starting-hands-chart | 대체 → `/ar/blog/holdem-strategy` · `/images/holdem-strategy-hero.webp` |
| 그리드 | probability · starting-hands-chart · reading-the-board · tournament-vs-cash-game | probability · tournament-vs-cash-game 유지 · 나머지 2 → holdem-strategy 1카드로 → 3카드 |
| (추가 허용) | — | `/ar/calculator` 한 줄을 표3 아래 또는 FAQ 직전에(«احسبها على أرقامك» — 도구 명 «حاسبة»는 링크 텍스트로만 · 제목·H2 금지) |

### 키워드
- 주력 = **«احتمالات البوت (Pot Odds)»** + «كيف تحسب»(pot odds 10 · formula 10 · related «How to calculate pot odds quickly»). 🔴 L4 처방의 «احتمالات القدر»는 계획 §3-A·§3-D가 **«احتمالات البوت»으로 뒤집었다** — 정본은 «البوت».
- 영어 related(축어): Pot odds formula · Pot odds example · Pot odds to percentage · Pot odds vs outs · How to calculate pot odds quickly · How to calculate pot odds and equity · 자동완성 pot odds vs equity · explained · meaning · vs implied odds.
- winnable → 자리: H2 «ما هي احتمالات البوت (Pot Odds) في البوكر؟» · H2 «كيف تحسب احتمالات البوت خطوة بخطوة؟» · H2 «من النسبة إلى النسبة المئوية» · H2 «احتمالات البوت مقابل الإكويتي مقابل الاحتمالات الضمنية» · FAQ «هل تُحسب مجاراتك ضمن البوت؟»(EN L206 축).
- 함정: «بوت أودز» 단독(텔레그램 성인 스팸 9/9) · «احتمالات القدر» · «حاسبة»(도구 h1Sub «حاسبة احتمالات البوكر: الإكويتي وبوت أودز وICM في مكان واحد») · PAA «What is the 50% rule in poker?» = 정의 갈림 → 쓰지 않는다.

### 현지 SERP
- 상위: pot odds SA = 영어 9/9 · 아랍어 원문 = pokeracademyar «حساب البوت أودز» 1편(860단어) — 그 1편에 ✗(#8 OESD를 Gutshot 4아웃 · #12 플롭 1회 베트에 2장 확률 35% 대조).
- 우리가 더 줄 것 3: ① **«이 콜이 사는 카드 수»** 로 1장/2장 열을 고르는 논리(EN L133·L165·L179 — 아랍어 원문 0) ② 배팅 크기별 가격표 7행(EN 표2) ③ 1인칭 실전 핸드 A♥K♥(EN L189-191).
- PAA 아랍어 0.

### 확정 카피 — (Fable 서브 · §5)

### §13 자리
- L8 tldr $50 · $150 · 50 ÷ 200 = 25% · L19 $50 · $150 · 25% · L30-32 stripe 25% · 33%
- L41 $150 · $50 · 3-to-1 · L43 25%
- L53-56 steps $100 + $50 + $50 = $200 · $50 ÷ $200 = 0.25 · 25% · 9 clean outs ≈ 35% · 25%
- L69 4-to-1 · 20% · L71 X-to-1 → 1 ÷ (X + 1) · 표1 L75-81(1:1 50% · 2:1 33% · 2.5:1 28.6% · 3:1 25% · 4:1 20% · 5:1 16.7% · 6:1 14.3%)
- L90 25% · 33% · 40% · L92 alt 25% · 33% · 40% · 표2 L100-106(¼ 5:1 16.7% · ⅓ 4:1 20% · ½ 3:1 25% · ⅔ 2.5:1 28.6% · ¾ 2.3:1 30% · pot 2:1 33% · 2× 1.5:1 40%) · L110 40%
- 표3 L125-129(15: 32.6/54.1 · 9: 19.6/35.0 · 8: 17.4/31.5 · 6: 13.0/24.1 · 4: 8.7/16.5) — 🔴 열 순서가 probability 표4와 **반대**(여기는 1장 열이 먼저) · EN대로
- L133 25% · 35% · 9 ÷ 47 · 19.1% · L149 25% · 19.6% · L163 9 × 4 = 36% · 35.0% · 9 × 2 = 18% · 19.6%
- **L189 A♥ K♥ / Q♥ 7♥ 2♣ · 9 outs · $100 · $50 · 3-to-1 · 25% · ~35% · 19.1%**
- **L191 3♠ · $200 · $200 · 2-to-1 · 33% · 19.6% · 9 hearts · 2♥ · 3♥ · 7 clean outs · 7 of 46 ≈ 15.2% · 7 ÷ 44 ≈ 15.9%**
- FAQ L204 $50 · $150 · 50 ÷ 200 = 25% · L208 $50 · $150 · $200 · 25% · L212 $100 · $50 · $50 · $200 · L216 5-to-1 16.7% · 2-to-1 33% · 35% · 19.1% · 19.6% · L220 3:1 = 1 ÷ 4 = 25% · 4:1 = 1 ÷ 5 = 20% · L228 2:1 33% · 3:1 25% · 1.5:1 40% · 3× ~43% · 5× ~45% · 50% · L232 3:1 25% · 2:1 33% · ⅓ · L236 ×4 · ×2 · 36% · 18% · L240 25% · 33% · L244 25% · 35%
- L250 25% · 33%
- (아스트라 #32 보충) L21 «five minutes» · «10-second method» · L92 alt «Three bars» · «2× pot bet 40%»
- 손검산(A ✓): L189 A♥K♥ + Q♥7♥2♣ = 하트 4장 → 남은 하트 13 − 4 = 9 ✓ · 9/47 = 19.15 ✓ · L191 턴 3♠ 후 미지 46 → 9/46 = 19.57 ✓ · 상대 셋(예 QQ·77·22 계열)일 때 보드 페어를 만드는 하트 2♥(보드 2♣ 짝) · 3♥(턴 3♠ 짝) = 풀하우스 허용 → 9 − 2 = 7 ✓ · 7/46 = 15.22 ✓ · 7/44 = 15.91 ✓ · 3× 오버벳 = 3/(1+3+3)=42.9 ✓ · 5× = 5/11 = 45.5 ✓.

### 경험담 자리
- L19 «첫 해 턴 콜로 칩을 흘림 · $50 into $150 깨달음 · 25%» · L176 «I made every one of these before they made me broke» · L189-191 실전 핸드(1인칭 «I'm holding»).

### 하지 말 것
- 표3·probability 표4 열 순서 통일 금지(EN이 다르다 · 각자 EN대로) · «القدر» 0회 · seoTitle에 «حاسبة» · «بوت أودز» 앞머리.
- EN-먼저 후보: 없음.

---

## 3. holdem-tournament — EN `updated` 2026-10-01 → `masterUpdated: "2026-10-01"` · 신규

### 메타 (EN 축어)
- seoTitle «Never Played a Poker Tournament? Here's How It Works» · title «How Poker Tournaments Work — Buy-Ins, Formats & Day 1» · desc «How do poker tournaments work? Buy-ins, blind structure, payout structure, freezeout vs PKO vs satellite formats, and a first-timer Day-1 checklist.» · tldr «In a poker tournament you pay a fixed buy-in for chips, blinds increase on a timer until one player holds all chips. Top 10–15% of players cash. Formats include freezeout, PKO, satellite, and deepstack — enter via direct buy-in, satellite, or online pre-registration.» · category tournament · readTime 14 min · emoji 🏆 · image `/images/holdem-tournament-hero.webp` · imageAlt «Crowded live poker tournament floor with the blind clock showing 12,000/24,000 as players contest a hand» · tags 9(how do poker tournaments work · poker tournament structure · poker tournament blind structure · poker tournament payout structure · types of poker tournaments · freezeout poker tournament · pko poker · satellite poker tournament · how to play tournament poker).
- 🔴 EN 본문 이미지 = **0장**(히어로만) — B도 0장.

### 구조
- L29·L31·L33 경험담 도입(1인칭) · `---` · L37 H3 «At a Glance» + `:::stripe` 3행
- L45 H2 What Is (30-Second Answer) · L47 · L49 굵은 요약 · L51(링크 vs-cash) · `---`
- L55 H2 Structure — Buy-Ins · 표1(2행) · L64(링크 rake) · L66 · L68 · L70 · `---`
- L74 H2 Blind Structure · L76 · L78 · 표2(4행 × 4열) · L87 · L89 하이라이트 · L91(링크) · L93 · L95(링크) · `---`
- L99 H2 4 Stages · H3 ×4(L101 · L104 · L107(링크 bubble) · L110(링크 icm)) · `---`
- L115 H2 Types · 표3(10행 × 3열) · L130 · L132 · H3 ×3(L134 Freezeout · L138 PKO · L142 Deepstack) · L146 · `---`
- L150 H2 Satellite · L152 · 불릿 3 · L159 · L161 · L163 하이라이트 · `---`
- L167 H2 How to Enter — 3 Ways · H3 L169 Option A(번호 6) · H3 L177 Option B(불릿 4) · H3 L184 Option C(불릿 3) · L189 · **L191(링크 apt-incheon)** · `---`
- L195 H2 Strategy by Stage · L197 · 굵은 머리 문단 4(L199 링크 · L201 · L203 링크 · L205) · `---`
- L209 H2 Day 1 Hour by Hour · L211 · **L213-245 원시 HTML 타임라인 `<div>` 7행 — 마크업 축어 · 글자만 번역**(시각 «10:30am» 등은 숫자 유지 · am/pm은 ar «ص/م» 대신 **EN 표기 그대로 두거나 24시간제 «10:30»** 중 하나로 통일 — 권장: 24시간제 10:30 · 12:00 · 12:40–14:40 · ~15:30 · ~17:00 · 18–21 · 21–23 → 🔴 이건 값 변경이 아니라 표기 변환이다 · C 전사 대조에서 예외로 표기) · `---`
- L249 H2 Payout Structure · L251 · 표4(4행 × 4열) · L260 실제 예 불릿 4 · L266 · `---`
- L270 H2 Tournament Glossary · L272(링크 glossary) · 표5(**16행**) · `---`
- L295 H2 First Tournament Checklist · **L297-314 원시 HTML 체크리스트 2블록(5행 + 4행) — 마크업 축어**
- `---` · L318 readnext 3줄 · L324 H2 FAQ — EN 9문 → **ar 8문**(L342 합법성 FAQ 삭제) · `---` · L364 H2 «Related Guides» + 그리드(EN 6카드)

### 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| L51 | holdem-tournament-vs-cash-game (thumb `/images/tournament-table-action.webp`) | 유지 |
| L64 | holdem-rake | 빼기 |
| L91 | holdem-short-stack | 빼기 |
| L95 | holdem-blind-meaning | 유지 |
| L108 | holdem-bubble | 빼기 |
| L111 | holdem-icm (thumb) | 대체 → `/ar/blog/holdem-tournament-vs-cash-game` (ICM H2가 있다 · thumb 꼬리표는 제거) |
| L191 | apt-incheon-2026-guide | 대체 → `/ar/tournaments` (문장 = «실제 대회의 일정·바이인은 대회 일정 페이지» — APT 인천 고유 정보 문장은 빼고 일반화 · 일정 의도 = 도구 주인) |
| L199 | holdem-starting-hands-chart | 대체 → `/ar/hand-chart` |
| L203 | holdem-short-stack | 빼기 |
| L272 | holdem-glossary | 유지 (🅳 레인이 쓰는 중 — 계획 §5 «다른 레인이 쓰는 중이어도 건다») |
| L319 readnext | holdem-tournament-vs-cash-game | 유지 (`/images/tournament-table-action.webp`) |
| L320 readnext | holdem-bubble | 대체 → `/ar/blog/holdem-blind-meaning` · `/images/holdem-blind-meaning-hero.webp` |
| L321 readnext | apt-incheon-2026-guide | 빼기 → readnext 2줄 |
| 그리드 | vs-cash · starting-hands-chart · short-stack · rules-for-beginners · blind-meaning · positions | vs-cash · rules-for-beginners · blind-meaning · positions 유지 · 2 빼기 → 4카드 |
| (추가) | — | `/ar/tournaments` 한 번 더 — L45 30초 답 절 끝이나 L167 절 끝에 «جدول البطولات القادمة» 한 줄 허용(L4 7-3) |

### 키워드
- 주력 = **«بطولة البوكر»(단수) + «كيف تعمل»** · 자동완성 «ما هي بطولة البوكر»(SA·EG · SERP 10/10 = 구글 번역 프록시 = 아랍어 원문 0 → 직답 자리가 비어 있다) · «بطولات بوكر تكساس هولدم».
- 보조(영어 tags): poker tournament 10 · sit and go poker(meaning · rules) 10 · icm poker meaning 10 · freezeout · rebuy · satellite · bounty · deep stack 각 10.
- winnable → 자리: H2 «ما هي بطولة البوكر؟ (الإجابة في 30 ثانية)» · H2 «أنواع بطولات البوكر: Freezeout وPKO وSatellite وDeepstack…» · H2 «هيكل البلايندز في البطولة» · FAQ «ما معنى ITM في البوكر؟»(EN L346).
- 함정: «بطولات البوكر 2026»·연도·장소·«جدول البطولات» 제목(→ `/ar/tournaments`) · «wsop»(브랜드·앱 SERP) · «short stack» 단독(SaaS·속어) · PAA «هل البوكر هو القمار؟»(🔴 합법성 · 조준 금지) · «bubble» 단독(일반 영단어 8,100).

### 현지 SERP
- 상위: «بطولة البوكر» = 유튜브 영어 영상 8 + 영어 사이트 · 아랍어 해설 0 · 사이트맵에서만 pokeracademyar P11 «بطولات البوكر: الدليل الشامل»(714단어 · 형식 6종 · PKO·Bounty·Deepstack·Re-entry **없음** · 상금 구조·블라인드 표·Day 1 없음).
- 우리가 더 줄 것 3: ① 블라인드 표 + «칩은 그대로인데 BB가 줄어든다» 산수(EN 표2) ② 형식 10종 표 + Day 1 시간표 + 체크리스트(아랍어 0) ③ 실제 상금 사례(WPT Seminole 2024 · EN 축어) + 1인칭 첫 대회 경험.
- PAA: «من هو لاعب البوكر؟» · «ما هي لعبة تكساس بوكر؟»(규칙 레인 몫) · 🔴 «هل البوكر هو القمار؟» 제외.

### 확정 카피 — (Fable 서브 · §5)

### §13·사실 자리 (EN 축어)
- L8 tldr 10–15% · L29 $200 · L31 Four hours · L40-42 stripe 10–15% · 20–40 min · 60+ · $100+$9
- L59-62 표1 $109 · $100+$9 · $100 · $9 · L64 8–10% · $9 / $109 ≈ 8.3% · L66 10,000–50,000 · 100–300 BB · L68 10,000 · $10,000
- L78 20–40 min · 60 min · **WPT Australia 2026 · 60-minute levels · 90 later days** · 표2 L82-85(1: 25/50 — 200 BB · 3: 75/150 · ante 150 · 67 BB · 6: 200/400 · 400 · 25 BB · 9: 500/1,000 · 1,000 · 10 BB) · L87 200BB → 10BB · L89 20 · 15 · 10 BB · L93 «big blind ante = one big blind»
- L101 100–200 BB · L104 30–60 BB · L110 6–9 players
- L144 100–200 BB · L155-159 $10,000 · $500 · 20 players · 1 seat · 19 · L161 $5 → $55 → $215 → $1,050
- L189 1–3 hours · L199 100BB+ · L201 30–60BB · L203 under 20BB
- L211 $300 · 12pm · 타임라인 L214 «$300 Freezeout, 10,000 Starting Chips» · 10:30am · 12:00pm · 25/50 · 200BB · 12:40–2:40pm · Levels 2–4 · Level 3 · ~3:30pm · ~5:00pm · 1 hour · ~40% · 6–9pm · 9–11pm
- L251 10–15% · 표4 L255-258(100: ~13 · 1.5–2x · 25–30% · 500: ~60 · 1.5–2x · 20–25% · 2,000: ~250 · 1.7–2.2x · 13–18% · 10,000: ~1,200 · 1.5–2x · 8–12%)
- **L260-264 WPT Seminole Rock 'N' Roll Poker Open Championship 2024 · $3,500 · 1,435 entries · $4,592,000 · $3,200 · 180 · ~12.5% · 1.83x · $662,200 · ~14%** (검산 ✓: 1,435 × 3,200 = 4,592,000 · 180/1,435 = 12.54% · 662,200/4,592,000 = 14.42%)
- L272 «These 16 terms» = 표5 16행(개수 일치 필수) · L301 «Buy-in + 20% extra» · L304 6–12 hours · L309 30–45 min
- FAQ L328 4–8 hours · 4–6 days · «close to two weeks» · L340 «+$9» · «$100+$9» · 8–10% · L348 200-player · 25 spots · 175 · 1.5–2x · L352 «two to four hours»
- (아스트라 #34 보충) imageAlt «12,000/24,000» · L80 표 머리 «Your 10k stack =» · L128 SNG «usually 6–9 players» · **L140 «around half» · «50/50 is common but not universal»**
- 검산 ✓: 10,000/50 = 200 · /150 = 66.7 → 67 · /400 = 25 · /1,000 = 10 · 20 × 500 = 10,000 · 200 − 25 = 175.

### 경험담 자리
- L29-33 «첫 라이브 토너먼트 $200 · 블라인드 레벨·버블을 몰랐다 · 4시간 뒤 탈락 · 용어·패인은 알게 됨» → 도입 3문단(장소 창작 금지).

### 삭제·변경 (EN과 다른 자리 — 진행 파일·C에 그대로 보고)
- 🔴 **FAQ L342-344 «Is it legal to host a poker tournament at home?» 삭제**(계획 §5 금지 승계 · 합법성 축) → FAQ 8문.
- L179 Option B의 «WSOP LIVE app · Caesars Rewards · PokerStars lobby "Events"/"Live" tabs» · L185 Option C의 «PokerStars Power Path · GGPoker's WSOP satellites»: 🔴 운영사·앱 이름 = 실머니·앱 추천으로 읽힐 수 있다 → **일반화**(«منصة الفعالية الرسمية» · «البطولات التأهيلية عبر الإنترنت أو في موقع الحدث»(🔴 «الأقمار» 직역 금지 · 아스트라 #51)) · L302 «Caesars Rewards for WSOP» → «بطاقة الولاء إن طلبها الكازينو» 일반형. 새 사실 0 · 축소만. (L4 7-3 «사이트명·가입 안내 없이»)
- L140 «(A full PKO strategy guide is coming to this cluster soon.)» → ar엔 그 글 계획이 없다 → 빼기. 🔴 바로 앞 «50/50 is common but not universal» 설명은 **남긴다**(아스트라 #34).
- L205 «the bubble and ICM guides linked in the stages section above» → 링크를 뺐으므로 «راجع شرح الفقاعة وICM في قسم مراحل البطولة أعلاه» 꼴로(아스트라 #41).
- L91·L203 숏스택 가이드 안내 · L64 «is covered in how poker rake works» → 안내 문구째 축약(#41).
- L191 APT 인천 문장 → `/ar/tournaments` 일반화(위 링크 표).

### 하지 말 것
- 일정·연도 제목 · 운영사 가입 안내 · 합법성 한 줄도(«지역마다 다르다» 한 줄조차 이 글엔 EN에 없으니 넣지 않는다).
- EN-먼저 후보: 없음.

---

## 4. holdem-tournament-vs-cash-game — EN `updated` 2026-09-13 → `masterUpdated: "2026-09-13"` · **기존 ar 재작업**

### 현 ar 상태 (2026-10-14 실측)
- 파일 `lib/posts-ar/holdem-tournament-vs-cash-game.ts`(39KB) · title «بطولات البوكر أم الكاش جيم: ماذا يلعب المبتدئ؟» · seoTitle «رقائقك ليست دائمًا مالًا — بطولة أم كاش جيم؟»(44자) · desc 139자 · `masterUpdated` **없음** · `date` 2026-06-11 · `updated` 2026-09-13 · readTime «16 دقيقة».
- EN과 다른 점: ① **EN L28 1인칭 도입 없음** ② H2 순서·구성이 EN 현행과 다름(ar «حرية الخروج» · «هيكل الربح» · «دليل القرار السريع» 독립 H2 · EN «When to Leave a Cash Game» 절 없음 · ICM H2가 Strategy보다 뒤) ③ FAQ H2 «## FAQ» ④ 본문 이미지 3장이 EN 2장과 다른 파일(`tournament-table-action.webp` · `icm-chips-not-money-real.webp` · `holdem-bubble-table.webp`) ⑤ FAQ 10문(EN 10문 중 세금 FAQ 없음 · «هل البطولات أكثر ربحًا» 추가).
- → **B는 EN 현행 구조로 다시 쓴다.** 기존 ar 문장 중 EN 현행과 뜻이 같은 것은 **용어만 §3-A로 고쳐 재사용해도 된다**(우리 코퍼스 · 이미 검수됨). 기존에만 있고 EN에 없는 문장은 버린다.

### 유지 결정 (되돌리지 마라)
- 🔴 **세금 FAQ(EN L400-402) 만들지 않는다** — `docs/locale-intentional-diffs.md` L78(헤드 판정 09-10: 아랍권 세제 1차 출처 없음) → ar FAQ = EN 10문 − 1 = **9문**.
- H3 레벨: EN H3 «Deep-Stack Poker vs Short-Stack Push/Fold» · «Beginner Decision Framework» · «Cash games may fit you better if:» · «Tournaments may fit you better if:»는 **`###`**(같은 파일 L79 · 09-10 레벨 정정 선례).
- seoTitle 훅 «رقائقك ليست دائمًا مالًا — …» 유지(§17 훅 보존 · EN «Your Chips Aren't Money» 대응) — Fable은 뒷부분 키워드만 손댄다.
- `hideSummaryImageSlot: true` 유지 · `keepImagesInBody` 넣지 않는다(EN에 없음).

### 메타 (EN 축어)
- title «Cash Game vs Tournament Poker» · seoTitle «Your Chips Aren't Money — Cash Game vs Tournament Poker» · desc «Cash game vs tournament poker — which fits you? Chip value, rising blinds, ICM, bankroll, which is harder and more profitable, and where beginners start.» · tldr «In cash games, chips are real money and blinds stay fixed. In tournaments, chips are survival equity, blinds rise, and payouts depend on where you finish.» · readTime 18 min · emoji 🏆 · image `/images/holdem-tournament-vs-cash-hero.webp` · imageAlt «Side-by-side infographic comparing cash game and tournament poker — chip value, blind structure, and when you can leave» · tags 8(cash game vs tournament poker · what is a cash game in poker · poker cash game rules · are cash games profitable · are cash games harder than tournaments · when to leave a cash game · poker bankroll management · ICM poker).
- 현 ar tldr «… يعتمد على مركزك النهائي» — «المركز» = 순위 문맥이라 그대로 가능(§3-A).

### 구조 (EN)
- L28 경험담 도입 · L30-36 도입(L36 링크 holdem-tournament) · L38 H3 «The 15-second answer» 불릿 5(L43 링크 icm) · `---`
- L48 H2 Core Difference · L52 굵은 하이라이트 · L54 · L56 · L58 · `<div>` 표1(6행) · L73 · `---`
- L77 H2 What Is a Cash Game · L79 · 굵은 머리 문단 5(L81 · L83 · L85 링크 blind-meaning · L87 · L89 링크 rake) · L91 `:::note[…]:::` — 🔴 «We are expanding it into a full cash-game guide» 예고는 빼고 «يغطي هذا القسم أساسيات الكاش جيم.»만(아스트라 #53 · PKO 예고와 같은 처리) · `---`
- L95 H2 Tournament Chips Are Not Money · L97-101 · L103 · 표2(4행) · L112 · L114 · **L116 이미지 `/images/holdem-tournament-chips-not-money.webp`** · `---`
- L120 H2 Fixed vs Rising · L122-126 · 표3(4행) · L135 · `---`
- L139 H2 Strategy · L141-147 · **H3 L149** · L151 · L153(링크 short-stack) · `<div>` 표4(4행) · L166 · `---`
- L170 H2 ICM · L172-176(링크 bubble) · 표5(4행) · L185(링크 icm) · **L187 이미지 `/images/holdem-tournament-icm-bubble.webp`** · `---`
- L191 H2 Harder? · L193-197 · `<div>` 표6(4행) · L210 · `---`
- L214 H2 Profitable? bb/100 vs ROI · L216-220 · `<div>` 표7(5행) · L234 · `---`
- L238 H2 Bankroll · L240-244 · `<div>` 표8(3행) · L256 · `---`
- L260 H2 When to Leave · L262-264 · 불릿 4 · L271 · 표9(5행) · L281 · `---`
- L285 H2 Beginners First · L287-291 · 표10(6행) · L302(링크 3) · **H3 L304** · L306 · 표11(6행) · L317 · **H3 L319** 불릿 5 · **H3 L327** 불릿 5 · L335 · `---`
- L339 H2 Live Poker Rooms · L341-343 · 표12(5행) · L353 · `---`
- L357 readnext 2줄 · L362 H2 FAQ(→ «الأسئلة الشائعة») **9문** · `---` · L406 H2 «The 3 Things» 번호 3 · L412 · `---` · L416 Related + 그리드 4카드
- 🔴 이미지: **EN 2장 경로로 맞춘다**(구조 패리티 · 현 ar 3장은 다른 파일 — `tournament-table-action.webp`는 도입 이미지로 EN에 없으므로 빼고, 나머지 두 자리는 EN 경로로 교체). alt는 EN alt를 ar로.

### 링크
| EN L | EN 대상 | ar 처리 |
|---|---|---|
| L36 · L302 | holdem-tournament (L302 thumb) | 유지 (신규 · 같은 레인) |
| L43 | holdem-icm | 빼기 |
| L85 · 그리드 | holdem-blind-meaning | 유지 |
| L89 | holdem-rake | 빼기 |
| L145 | holdem-starting-hands-chart | 대체 → `/ar/hand-chart` |
| L153 | holdem-short-stack | 빼기 |
| L176 | holdem-bubble | 빼기 |
| L185 | holdem-icm | 대체 → `/ar/calculator` (ICM 탭이 있는 계산기 · L4 7-4) — 문장 «الأمثلة الكاملة» → «احسب ICM على أرقامك» 쪽으로 · 새 사실 0 |
| L302 · 그리드 | holdem-game-order · holdem-hand-rankings | 유지 |
| L358-359 readnext | holdem-pot-odds · holdem-probability | 유지(신규 · 같은 레인) |
| 그리드 | tournament · game-order · hand-rankings · blind-meaning | 4카드 전부 유지 |

### 키워드
- 현 seoTitle 결합형 «بطولة أم كاش جيم» 유지(단독 «كاش جيم» = KASH 앱 0/9 · 단독 «cash game» = 현금 보상 앱 1/9).
- 흡수 후보(L4 7-4 · 판단 = 이 브리프): **«أيهما أفضل»** — 경쟁 H1 «كاش جيمز مقابل البطولات - أيهما أفضل لك؟» · 프록시 «بطولات البوكر مقابل ألعاب الكاش: أيهما أفضل؟» → ✅ **H2 하나에 흡수**: EN L285 «Which Should Beginners Play First?» → «الكاش جيم أم البطولات: أيهما أفضل للمبتدئ؟»(Fable이 최종) · 훅(seoTitle)은 건드리지 않는다.
- «الفقاعة (Bubble)» 병기 1회(현 ar «Bubble» 14 · «الفقاعة» 0).
- PAA(축어) 3/4 이미 대응: «What is a cash game in poker?» ↔ H2 L77 · «How many big blinds should you start with in a cash game?» ↔ FAQ L384 · «Does Daniel Negreanu play cash games?» ↔ FAQ L392(고유명 넣지 않는다).
- 함정: «كاش جيمز»(경쟁 복수형 — 우리 «الكاش جيم» 70 유지) · «اللعب النقدي»(0회) · 실머니 related(«real money»).

### 확정 카피 — (Fable 서브 · §5)

### §13·사실 자리 (EN 축어)
- L54 $200 · $450 · L56 $100 · 20,000 · $20,000 · L58 $1/$2 · $60 · $50 · 18 big blinds
- L81 $1/$2 · $40 · $300 · L85 $1/$2 · L103 10-player · $100 · $1,000 · 표2 L107-110($500 · $300 · $200 · $0) · L112 10% → 20%
- L124 $1/$2 · L126 100 → 25 → 12 BB · L151 100 BB · L153 25 · 15 · 10 BB · 표4 L159-162(100BB+ · 40-60BB · 15-25BB · 10BB or less)
- L176 AKo · L216 5 big blinds per 100 · L218 20 or 30 events
- L242 20-40 buy-ins · $200 · $4,000-$8,000 · L244 100+ · $50 · $200 · 표8 L250-252(20-40 · 40-60 · 100+)
- L262 30 minutes · two hours · L310 1-2 hours
- FAQ L382 20-40 · 100+ · 40-60 · L386 $1/$2 · $200–$300 · 100–150 BB · 20-40 · 100-300 BB · 20 · 10 · L390 300-chip · 6 players · 7-8 · 300 ÷ 8 · 40 · 3-4 denominations · 500-chip · 7-8
- (아스트라 #36 보충) L34 «two hole cards, five community cards, and four betting rounds» · L85 «five hours later» · L124 «One hour later … Three hours later» · 표2 순위 «1st / 2nd / 3rd / 4th-10th» · L160 «3-bet» · L197 «hour eight»
- 검산 ✓: 300/8 = 37.5 < 40 · 200 × 20 = 4,000 · × 40 = 8,000 · $200–$300 / $2 = 100–150 · 500+300+200 = 1,000.

### 경험담 자리
- L28 «첫 라이브 캐시 세션 후 칩을 캐시 창구에서 현금화 · 첫 토너먼트 = 4시간 · 한 번의 플립 패배 · 칩이 0» → 도입 첫 문단(신규 삽입 · 현 ar엔 없음) · L317 «My default advice for a serious beginner» 1인칭.

### 하지 말 것
- 세금 FAQ · 운영사·앱 이름 · «أيهما أفضل»을 seoTitle에(훅 보존) · 현 ar의 EN에 없는 FAQ «هل البطولات أكثر ربحًا من الكاش جيم؟» 유지(→ 버린다 · 같은 내용이 H2 «bb/100 vs ROI»에 있다).
- EN-먼저 후보: 없음.

---

## 5. 확정 카피 (A-⑥ Fable 서브 1회 · 10-14 · 글자 수 = Opus가 [...s].length로 재측정 · B·C는 카피 불변)

> 🔴 B는 아래 seoTitle·desc·tldr·title·H2 문구를 **그대로** 쓴다. Opus 조정 2건: tournament H2-2 «رسوم الدخول (Buy-in)…الرقائق الابتدائية» → 코퍼스 용어 «الباي-إن (Buy-in)…الستاك الافتتاحي»(§0-B · 코퍼스 «باي-إن» 22 · «الستاك» 21). desc 안의 일반어 «رسوم الدخول»은 풀이로 유지.

### holdem-probability
- title «جدول احتمالات البوكر: كم مرة تصيب كل يد في تكساس هولدم؟» (55)
- seoTitle «كم مرة تصيب فعلًا؟ — جدول احتمالات البوكر في تكساس هولدم» (56)
- desc «تشعر أن الفلاش لا يأتي أبدًا؟ الأرقام أصدق من الإحساس. جدول احتمالات البوكر لكل يد وفلوب وسحب في تكساس هولدم، مع قاعدة 2 و4 وحساب الاحتمالات.» (141)
- tldr «بحلول الريفر تصنع زوجًا واحدًا بنسبة 43.8%، وزوجين 23.5%، وفلاش 3.0%، وفول هاوس 2.6%. أما الرويال فلاش فيظهر مرة واحدة تقريبًا كل 30,940 يدًا بسبع أوراق.» (EN «about 31,000» → 표의 정확값 30,940 · EN 표 L49 축어)
- H2: 1 «جدول احتمالات البوكر: كل يد بخمس أوراق وبسبع أوراق»(🪶 Opus 조정 — Fable «…بسبع أوراق»만 쓰면 5장 열이 있는 표 전체를 7장으로 오독 · 아스트라 #57) · 2 «ما احتمال أن تُوزَّع عليك كل يد بداية؟» · 3 «ما احتمال أن تصيب كل يد على الفلوب؟» · 4 «احتمالات السحب: كم فرصتك لإكمال الفلاش أو الستريت حتى الريفر؟» · 5 «كيف تحسب احتمالات البوكر؟ عدّ الأوتس (Outs) وقاعدة 2 و4» · 6 «احتمالات البوت (Pot Odds): متى تجاري ومتى تنسحب؟» · 7 «ما مدى ندرة الرويال فلاش؟ (والستريت فلاش أيضًا)» · 8 «احتمالات نادرة: الكولر (Cooler) والفور أوف كايند والباد بيت (Bad Beat)» · «الأسئلة الشائعة» · «أهم 3 أرقام تذكرها» · «مقالات ذات صلة»
- H3 «The numbers that matter most» → «الأرقام الأهم»
- [현지 추가 FAQ] «كيف أعرف احتمالات يدي في البوكر؟» — 답 = EN L141 절 요지만(아웃 세기 → قاعدة 2 و4 → 가격 비교) · 새 수치 금지 · FAQ 16문
- 흡수: احتمالات البوكر·جدول → seoTitle·title·desc·H2-1 / احتمالات تكساس هولدم → seoTitle·title·desc / حساب الاحتمالات → desc / كيف تحسب احتمالات البوكر → H2-5 / قاعدة 2 و4 → desc·H2-5 / احتمالات البوت → H2-6 / 기준 줄(بسبع أوراق) → H2-1·tldr

### holdem-pot-odds
- title «احتمالات البوت (Pot Odds): كيف تحسبها في 10 ثوانٍ قبل أن تجاري؟» (63)
- seoTitle «هل مجاراتك مربحة فعلًا؟ — كيف تحسب احتمالات البوت (Pot Odds)» (60)
- desc «توقف عن المجاراة على الأمل. كيف تحسب احتمالات البوت (Pot Odds) في 10 ثوانٍ: اختصار النسبة إلى مئوية، جدول حسب حجم الرهان، ومكان الاحتمالات الضمنية.» (147)
- tldr «لحساب احتمالات البوت، اقسم المبلغ الذي يجب أن تجاريه على إجمالي البوت بعد مجاراتك. مجاراة 50 دولارًا في بوت 150 دولارًا = 50 ÷ 200 = 25%، أي تحتاج إكويتي (Equity) 25% على الأقل لتكون المجاراة مربحة.»
- H2: 1 «ما هي احتمالات البوت (Pot Odds) في البوكر؟» · 2 «كيف تحسب احتمالات البوت خطوة بخطوة؟» · 3 «كيف تحوّل احتمالات البوت من نسبة إلى نسبة مئوية؟» · 4 «كم إكويتي (Equity) تحتاج لتجاري؟» · 5 «جدول احتمالات البوت: أي سحب يتغلب على أي رهان؟» · 6 «ما الفرق بين احتمالات البوت والإكويتي والاحتمالات الضمنية؟» · 7 «قاعدة 4 و2: حوّل الأوتس (Outs) إلى احتمالات بسرعة»(🪶 EN 이 글은 «Rule of 4 and 2» 어순 → Fable «2 و4»를 EN 어순으로 · FAQ L234도 «قاعدة 4 و2») · 8 «أخطاء شائعة يقع فيها المبتدئون في احتمالات البوت» + H3 «يد حقيقية من البداية إلى النهاية» · «الأسئلة الشائعة» · «أهم 3 أشياء تذكرها» · «مقالات ذات صلة»
- H3 «Pot odds at a glance» → «احتمالات البوت في لمحة»
- 흡수: احتمالات البوت → seoTitle·title·desc·H2-1 / كيف تحسب → seoTitle·desc·H2-2 / to percentage → H2-3 / vs equity → H2-4·6 / vs implied → H2-6·desc / quickly → title·H2-7 / example → H3

### holdem-tournament
- title «ما هي بطولة البوكر وكيف تعمل؟ رسوم الدخول والبلايندز ويومك الأول» (64)
- seoTitle «لم تلعب بطولة بوكر من قبل؟ — كيف تعمل بطولة البوكر وأنواعها» (59)
- desc «أول بطولة بوكر لك؟ هكذا تعمل: رسوم الدخول، هيكل البلايندز، توزيع الجوائز، أنواع Freezeout وPKO وSatellite، وقائمة يومك الأول في بطولات بوكر تكساس هولدم.» (152)
- tldr «في بطولة البوكر تدفع رسوم دخول ثابتة مقابل رقائق، وترتفع البلايندز بمؤقت حتى يجمع لاعب واحد كل الرقائق. يحصل أفضل 10–15% من اللاعبين على جوائز. الأنواع تشمل Freezeout وPKO وSatellite وDeepstack، وتدخل بشراء مباشر أو عبر Satellite أو بالتسجيل المسبق أونلاين.»
- H2: 1 «ما هي بطولة البوكر؟ (الجواب في 30 ثانية)» · 2 «هيكل بطولة البوكر: الباي-إن (Buy-in) والعمولة والستاك الافتتاحي» · 3 «كيف يعمل هيكل البلايندز في البطولة؟ المستويات والأنتي (Ante) والمؤقت» · 4 «ما المراحل الأربع التي تمر بها كل بطولة؟» · 5 «ما أنواع بطولات البوكر؟ Freezeout وPKO وSatellite وDeepstack وغيرها» · 6 «ما هي بطولة Satellite في البوكر؟» · 7 «كيف تدخل بطولة بوكر؟ 3 طرق» · 8 «كيف تلعب بوكر البطولات؟ استراتيجية لكل مرحلة» · 9 «ماذا يحدث في اليوم الأول؟ ساعة بساعة» · 10 «هيكل جوائز بطولة البوكر: من يحصل على ماذا؟» · 11 «مصطلحات البطولة التي ستسمعها في يومك الأول» · 12 «قائمة تحضير لأول بطولة لك» · «الأسئلة الشائعة»(8문) · «مقالات ذات صلة»
- H3(EN 축 · B가 옮김): «At a Glance» → «في لمحة» · Stage 1~4 · «What Is a Freezeout/PKO/Deepstack…» → «ما هي بطولة Freezeout؟» 꼴 · Option A~C
- 흡수: بطولة البوكر → seoTitle·title·desc·tldr·H2-1·2·10 / كيف تعمل → seoTitle·title·desc / ما هي بطولة البوكر → title·H2-1 / بطولات بوكر تكساس هولدم → desc / 형식명 → desc·tldr·H2-5·6

### holdem-tournament-vs-cash-game
- title «بطولة البوكر أم الكاش جيم: الفرق وما يلعبه المبتدئ أولًا» (56)
- seoTitle «رقائقك ليست دائمًا مالًا — بطولة أم كاش جيم في البوكر» (53 · 훅 축어 유지)
- desc «الكاش جيم والبطولة تبدوان كتكساس هولدم نفسها، لكن قيمة الرقائق والبلايندز وICM والبانكرول تختلف تمامًا. أيهما أصعب وأكثر ربحًا، ومن أين يبدأ المبتدئ.» (149)
- tldr «في الكاش جيم الرقائق مال حقيقي والبلايندز ثابتة. في البطولة الرقائق هي حقك في البقاء، والبلايندز ترتفع، والجوائز تعتمد على مركزك النهائي.»
- H2: 1 «الكاش جيم أم بطولة البوكر: ما الفرق الجوهري؟» · 2 «ما هو الكاش جيم في البوكر؟ (القواعد وطريقة اللعب)» · 3 «لماذا رقائق البطولة ليست مالًا؟» · 4 «بلايندز ثابتة أم بلايندز ترتفع؟» · 5 «ماذا يتغير فعلًا في الاستراتيجية بين الكاش جيم والبطولة؟» + H3 «ستاك عميق في الكاش جيم مقابل Push/Fold بالستاك القصير في البطولة» · 6 «ICM والفقاعة (Bubble): المفهوم الذي لا يوجد في الكاش جيم» · 7 «هل الكاش جيم أصعب من البطولات؟» · 8 «هل الكاش جيم أكثر ربحًا؟ bb/100 مقابل ROI البطولات» · 9 «إدارة البانكرول: لماذا تحتاج البطولات وسادة أكبر؟» · 10 «متى تغادر طاولة الكاش جيم؟ (ولماذا لا تستطيع مغادرة البطولة)» · 11 «أيهما أفضل للمبتدئ: الكاش جيم أم البطولة؟» + H3 «إطار قرار المبتدئ» · «الكاش جيم قد يناسبك أكثر إذا:» · «البطولات قد تناسبك أكثر إذا:» · 12 «غرف البوكر الحية: ماذا تسأل أولًا؟» · «الأسئلة الشائعة»(9문) · «أهم 3 أشياء تذكرها» · «مقالات ذات صلة»
- H3 «The 15-second answer» → 현 ar «الإجابة في 15 ثانية» 유지
- 흡수: بطولة أم كاش جيم + في البوكر → seoTitle / أيهما أفضل → H2-11만 / الفقاعة (Bubble) → H2-6 1회 / What is a cash game → H2-2 / ICM·البانكرول → desc·H2

## 6. 아스트라 A-교차 반영 (10-14 · codex gpt-6-astra read-only · 스크래치 `astra-ar-prob-A` · 페르소나 «걸프·이집트 포커 코치 겸 아랍어 교정자» · 반박 전용)

- 61행: **OK 49 · RISKY 11 · WRONG 1** → 본체가 EN 원문 대조 후 **12건 전부 채택**(기각 0). 손검산 4편 독립 재계산 전부 ✓ · 기록 수치 전사 오류 0.
- WRONG #51: «الأقمار التأهيلية» → «البطولات التأهيلية» (§3 삭제·변경).
- RISKY 채택: #14 structure sheet → «ورقة هيكل البطولة» · #20 ring game 풀이형 · #30·#32·#34·#36 §13 목록 보충(누락 = 목록 완전성 · 값 오류 아님) · #41 «빼기» 때 없는 글 안내 문구도 지움(§0-C) · #42 calculator 앵커 범위 한정 · #44 hand-chart 앵커 문구 · #53 vs-cash 캐시 가이드 예고 삭제 · #57 probability H2-1 = 5장·7장 두 기준.
- 아스트라 실사용 확인(원문 축어 인용 · 근거로 채택): GG/ar «الكولر» · «جائزة الباد بيت» · «متصدر الرقائق» · «فلوش درو» · pokeracademyar «أوتك نظيفة» · «نموذج الشيبز المستقل».
- 미확인으로 남김(C 렌즈·화면 실측 몫): RTL 화면(%·비율·산식·카드·시간 범위) · «صيد السيت»·«الغتشوت»·«أوتس ملوّثة»·«عمولة البيت» 실사용 빈도 · `/ar/calculator` 드로/ICM 탭 실물. 이미지 2장(`holdem-tournament-chips-not-money.webp` · `holdem-tournament-icm-bubble.webp`) 존재는 본체가 `public/images`에서 확인 ✅.
