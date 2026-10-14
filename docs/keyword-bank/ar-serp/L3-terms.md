# L3 규칙 단편·용어 — ar SERP 조사 (ar 클러스터 0-2 · 2026-10-14)

> 브리프 = `00-brief.md` · 대상 3편: **holdem-blind-meaning**(ar有) · **holdem-all-in-rules**(ar有) · **holdem-glossary**(신규 · 🔴 `/ar/glossary` 도구 없음).
> 볼륨 정본 = `ar-core-volumes.md`(재측정 안 함 · 신규 58개만 §2).
> 도구: DFS 자동완성(2682·2818 · ar · chrome · 1차 63시드 + 2차 31시드) · 볼륨(2682·2818 · 신규 58) · organic SERP(desktop · depth 10 · **SA 36쿼리 + EG 6쿼리** = 헤드 11 + 오염 판정 4 + 아랍어 결합형 21 · 일부 재실행) · 원문 = node fetch로 H1~H4 **프로그램 추출**(축어) 24편 + GGPoker ar 용어집은 403이라 exa 전문(12K자).
> 원자료 = `tmp/ar/L3/`(ac-*·ac2-*·vol-*·serp*-out.json·pages/·pages1~3.json·ev.mjs·tally.mjs).
> 🔴 SERP 변동: 볼륨 `-` 아랍어 결합형은 **같은 날 재실행에서 상위가 바뀐다**(«البوت الجانبي في البوكر» 1회차 hootpoker #1 → 2회차 hootpoker 없음 · «ما هو الآنتي في البوكر» 1회차 ante 해설 3편 → 2회차 0편). 아래 표는 기록된 회차를 명시한다.

---

## 0. 한 줄 결론 (레인 A가 먼저 읽을 것)

1. **L3 헤드는 아랍어 단독형 전부 «포커 없음»**: بلايند(0/8 · Blind Date Show·버거집)·البلايندز(0/9 · 블라인드 커튼)·اول ان(0/9 · 향수 «all in all»)·تيلت(0/9 · 초콜릿 가게)·نتس(0/8 · 견과)·فيش(0/8 · 🔴 **전기 플러그 · 이집트 범죄경력증명서** — 그리고 «فيش بوكر» = **포커 칩 상품** 7/8, fish(약한 플레이어) 아님)·all in / all in meaning(0/9 · 사전·쇼핑몰)·ante(1/9). → **0-1 볼륨 140·110·320·9,900은 전부 포커 몫이 아니다.**
2. 포커 몫이 있는 건 **«… في البوكر» 결합형과 영어 결합형뿐**(big blind 8/8 · small blind big blind 8/8 · side pot poker 9/9 · poker terms 10/10)인데 볼륨은 **전부 10~20 또는 `-`** · 영어 결합형 SERP의 아랍어 페이지는 **0**. 아랍어 결합형 SERP를 채우는 것은 **구글 번역 프록시(google.com/goto) · reddit `?tl=ar` · 이스라엘 ClubGG 클럽 모집 페이지 · 카지노 제휴 · 게임앱(pokerist)** — 처음부터 아랍어로 쓴 정확한 해설은 사실상 **hootpoker.com 하나**(2026-10-10 신생 · 무료 연습 포커 게임 · 규칙 정확 · 사이드팟 계산기 보유).
3. **표기 집계(§4-D)**: 블라인드 = 음차가 이긴다(«سمول بلايند / بيغ بلايند» 또는 hootpoker «البلاند الصغير/الكبير»), 우리 ar 글의 **«الرهان الصغير / الرهان الكبير»(99회)는 경쟁 10개 사이트 중 2곳(pokeracademyar 2회 · pokerist 앱)뿐** · 올인 = **아랍 문자로 쓰는 3개 사이트(hootpoker·poker-place·pokeracademyar · 13페이지) 전부 «أول إن»(함자형)** · 나머지는 라틴 «All-In» · «اول ان»(무함자)은 본문 0이지만 검색 표면형 · 사이드팟 = **«البوت الجانبي»**(+ «الوعاء الجانبي» 병기 hootpoker) · «القدر الجانبي» 0.
4. **§13 경쟁 오류**: poker-place «Drawing Dead» 예시(AA vs AK · 플롭 A-4-6 → «AK 승산 0») = 무늬에 따라 **3.64 %** 생존(전수 990) · pokerist «آنتي» 정의 = 사실은 **신규 착석 포스팅**(앤티 아님) · pokerist «الرهان الكبير دائماً ضعف الرهان الصغير» · 최소 레이즈 «BB 이상» 축약. hootpoker는 사이드팟·누적 숏 올인 재개방 예시 **전부 검산 일치**.
5. **glossary 판정 재료**: «مصطلحات البوكر بالعربي» SERP 10/10이 아랍어 **사전형**(pokeracademyar 176항목·카테고리/알파벳 필터 · GG ar 알파벳 · poker-place 104항목 · hootpoker «مرجع للمراجعة والطباعة») — tr·vi 선례(«용어는 도구로») 그대로 **도구 주인 + 글은 «X في البوكر» 각도**가 증거와 맞는다. 단 수요는 poker terms 20/20 · poker terminology 20/20 · مصطلحات لعبة البوكر 10 — **유입 글로서 가치는 낮고, 클러스터 완결·앵커 허브 몫**.

---

## 0-A. 오염 판정 (브리프 0단계 · 상위 유기 결과 중 «포커» 수 / «이 글 의도» 수 · 아랍어 페이지 수)

| 검색어 | 볼륨 SA/EG(0-1) | 시장 | 유기 n | 포커 | 의도 일치 | 아랍어 페이지 | 판정 | 오염원(축어 제목) |
|---|---|---|---|---|---|---|---|---|
| بلايند | 140/40 | SA | 8 | 0 | 0 | 5 | **없음** | «أعمى (مسلسل كوري جنوبي)» · «منيو مطعم بلايند» · «The Blind Date Show 2 - Episode 11» · KG «مطعم بلايند - Blind Burger» |
| بلايند | | EG | 8 | 0 | 0 | 3 | **없음** | «The Blind Date Show» · «Blind (TV Series 2022)» · masrawy 기사 |
| البلايندز | `-` | SA | 9 | 0 | 0 | 6 | **없음** | «البلايندز العصرية - AMSilks» · «بلايندز فينيسي في قطر» · «بيكي فوكنج بلايندز» |
| big blind | 10/10 | SA | 8 | 8 | 8 | 0 | 있음(영어만) | KG 설명만 아랍어: «الرهانات المبدئية هي رهانات قسرية…» |
| small blind big blind | 신규 10/10 | SA | 8 | 8 | 8 | 0 | 있음(영어만) | — |
| سمول بلايند بيج بلايند | `-` | SA | 9 | 0 | 0 | 0 | **없음** | Blind Date Show 9/9 · KG «بلايند برقر» |
| البلايند في البوكر | 신규 `-` | SA | 8 | 8 | 8 | 4 | 있음(번역 프록시) | goto 2 · reddit tl=ar 1 · blindvalet ar 1 |
| ما هو البلايند في البوكر | 신규 `-` | SA | 9 | 9 | 9 | 5 | 있음(번역 프록시) | goto 4 · reddit tl=ar 1 · 원어 아랍어 0 |
| البلايندز في البوكر | 신규 `-` | SA | 10 | 10 | 10 | 0 | 있음(영어·포어) | — |
| الرهان الأعمى في البوكر | 신규 `-` | SA | 8 | 5 | 1 | 1 | 섞임 | pinterest · 스포츠북 «shadowexch9 / rpexch» |
| الرهان الكبير في البوكر | 신규 `-` | SA | 9 | 9 | 0 | 0 | 의도 공백 | pinterest «Poker Actions…» 7 |
| اول ان | 20/10 | SA | 9 | 0 | 0 | 6 | **없음** | «معطر الشعر خصلة اول ان اول» 5 · «OilinCar» |
| اول ان في البوكر | `-` | SA | 8 | 4 | 0 | 2 | 의도 공백 | wikidata · youtube · pinterest |
| ما هو الأول إن في البوكر | 신규 `-` | SA | 10 | 10 | 0 | 7 | 의도 공백(족보 글이 대신 뜸) | ar.wiki «بوكر» · pokerist · GG ar 족보 · reddit tl=ar 2 |
| all in | 320/590 | SA·EG | 9·9 | 0·0 | 0 | 2·1 | **없음** | «ALL IN KSA - متجر شامل» · «All In - بيع واشتر» · AEW All In(EG) |
| all in meaning | 110/90 | SA·EG | 9·8 | 0·0 | 0 | 0 | **없음** | Collins «ALL-IN-ONE» · drdishbasketball · Cambridge — EG related에 «All in meaning in poker» |
| all in poker | 신규 10/10 | SA | 9 | 9 | 9 | 0 | 있음(영어만) | — |
| side pot | 10/10 | SA | 10 | 3 | 2 | 0 | **없음~섞임** | «Sidepot Casino Review» · «Sidepot Promo Code» 등 스윕스테이크 카지노 7 |
| side pot poker | 신규 10/10 | SA | 9 | 9 | 8 | 0 | 있음(영어만) | gov.br 스팸 1 |
| البوت الجانبي | `-` | SA | 9 | 1 | 1 | 9 | **없음** | «حذاء بوت ولادي» · «عقد البوت B.O.T» · «بوتات التداول» — 단 #3 hootpoker |
| البوت الجانبي في البوكر | 신규 `-` | SA | 10 | 10/7 | 1/0 | 6/2 | 🔴 변동 | 1회차 #1 hootpoker 계산기 · 2회차 Shanky Poker Bots·pinterest |
| مصطلحات البوكر | `-` | SA | 8 | 8 | 7 | 1 | 있음(영어 사전) | #1 clubggpoker.co.il ar |
| مصطلحات لعبة البوكر | 10/10 | SA | 10 | 9 | 8 | 1 | 있음(영어 사전) | kvile 스팸 1 |
| مصطلحات البوكر بالعربي | `-`(0-1) | SA | 10 | 10 | 8 | 10 | **있음(아랍어)** | almaany·langeek(어학) |
| poker terms | 20/20 | SA | 10 | 10 | 10 | 0 | 있음(영어만) | — |
| poker glossary | 10/10 | SA | 10 | 10 | 10 | 0 | 있음(영어만) | — |
| تيلت | 110/40 | SA | 9 | 0 | 0 | 7 | **없음** | «Tilt \| تيلت👨🏻‍🍳🍫» · «مصنع تشوكلت جديد في أبها» · «تيلت اند ترن» 창호 · KG «تيلت TiLt» |
| تيلت | | EG | 7 | 0 | 0 | 0 | **없음** | «Tartil - Episode 07» · music.youtube «TILT» |
| تيلت في البوكر | 신규 `-` | SA | 10 | 10 | 3 | 10 | 있음(대부분 프록시·Full Tilt) | goto 5(«لعبة تيلت (بوكر) - ويكيبيديا»·«فضيحة فول تيلت بوكر») · pokeracademyar · pokerist |
| معنى تيلت في البوكر | 신규 `-` | SA | 10 | 10 | 4 | 10 | 있음(프록시) | goto «ما هو مصطلح "الميل" في لعبة البوكر؟» · pokergg.co.il |
| ante | 260/320 | SA·EG | 9·9 | 1·1 | 1 | 1 | **없음** | ANTE BERLIN · «Ante — A self-contained coding agent» · ante.finance |
| ما هو الآنتي في البوكر | 신규 `-` | SA | 10 | 9 | 0 | 8 | 🔴 변동·의도 공백 | 2회차: ar.wiki · goto 5(족보·범위) · pokerist |
| نتس | 170/260 | SA | 8 | 0 | 0 | 6 | **없음** | KG «مكسرات» · «Nuts Group» · «نتس اند سبايسس» |
| النتس في البوكر | 신규 `-` | SA | 8 | 6 | 0 | 2 | 의도 공백 | wikiwand · youtube shorts · nasro omaha |
| the nuts poker | 신규 10/10 | SA | 9 | 9 | 8 | 0 | 있음(영어만) | KG 아랍어 기계번역 «عقرب الجوز هو أقوى يد» |
| فيش | 9,900/4,400 | SA·EG | 8·8 | 0·0 | 0 | 7·8 | **없음** | SA: «أفياش ومفاتيح كهرباء» · «فيش مزدوج 13 أمبير» / EG: «طلب إصدار صحيفة حالة جنائية مميكنة» · «فيش جنائى مستعجل» |
| فيش بوكر | 신규 20/20 | SA | 8 | 8 | 0(fish 의도) | 8 | 🔴 **칩 상품** | «بوكر تكساس شحن رخيص»(haraj) · «علبة بوكر … 300 فيشة chips» · «فيش البوكر المميز»(aliexpress) · noon «طقم لعبة البوكر ٣٠٠ قطعة» |

**영어 질의 판정(참고 · 브리프 0단계 + 0-1 §3 ①)**: L3 영어 결합형 7쿼리(big blind · small blind big blind · side pot poker · poker terms · poker glossary · the nuts poker · all in poker) 유기 63개 중 **아랍어 페이지 0**(KG 설명 2건만 아랍어 기계번역). → 영어 머리어는 tags·본문 괄호 병기까지.

**AI overview**: 오염 헤드에 주로 등장(بلايند · البلايندز · اول ان · all in · all in meaning · البوت الجانبي · ante · نتس · فيش · البلايند في البوكر · سمول بلايند بيج بلايند · فيش بوكر) — 내용은 사실로 옮기지 않음. 포커 결합형(«ما هو البلايند في البوكر» · «تيلت في البوكر» · «مصطلحات البوكر بالعربي»)에는 **AIO 없음**.
**Featured snippet**: 42쿼리 전부 **0**.

---

## 1. 자동완성 (DFS · ar · chrome · SA 2682 / EG 2818 · 94시드 · 전체 = `tmp/ar/L3/ac-*.txt`·`ac2-*.txt` · 잡음은 대표만)

| 시드(묶음) | 결과(축어 · 대표) | 포커 |
|---|---|---|
| بلايند · البلايند · البلايندز · معنى بلايند | «بلايند سبوت · بلايند بوكس · بلايند ديت شو · بلايند برجر …» · «انواع البلايند · عصابة البلايندرز» · «معنى بلايند ديت · معنى بلايندرز» | 0 |
| البلايند في البوكر · البلايندز في البوكر · ما هي البلايندز · كيف تعمل البلايندز · مين يدفع البلايند(EG형) · بلايند بوكر | 잡음(«البلاينير · البلاي ستيشن …») 또는 빈 목록 | 🔴 0 |
| سمول بلايند · بيج/بيغ بلايند | «سمول بلانت …» · «بيج بلايندرز · مسلسل بيج بلايندرز» · «ليتل بيغ بلانت» | 0 |
| الرهان الأعمى · الرهانات العمياء · الرهان الجانبي | «الرهان العربية · الرهان الاسلامي · **الرهان المحرم · الرهان الحرام** · الرهان ابن باز» · «الرهان الجائز · الرهان يجوز» | 🔴 종교 축(유형만) |
| اول ان · أول إن · الاول ان · معنى اول ان · اول ان في البوكر · ما هو اول ان في البوكر · كل الرقائق | «اول انسان …» · «اول انمي» · «معنى اول انكلوسف» · 빈 목록 | 🔴 0 |
| all in · all in يعني · معنى all in · all in في البوكر | «all in one · all inclusive · all inclusive معنى …» | 0 |
| البوت الجانبي · القدر الجانبي · سايد بوت · البوت في البوكر | «البوتكس الجبهه …» · «القدر يجمع · القدر جابني» · «سبيد بوت للبيع …» | 0 |
| مصطلحات البوكر · مصطلحات لعبة البوكر · مصطلحات بوكر · قاموس البوكر · كلمات البوكر · شرح مصطلحات البوكر | «مصطلحات بوكر · مصطلحات البوربوينت …» · «مصطلحات لعب **البلوت** · (EG) مصطلحات لعبة **القمار**» · 빈 목록 3 | 1(재진술) · 다른 게임 섞임 |
| تيلت · معنى تيلت · تيلت يعني · تيلت في البوكر · تيلت بوكر | «تليتبيز · تيلتونيكا … · تيلت صناع الشوكولاته» · «وش يعني تيل» | 0 |
| نتس · النتس · نتس بوكر | «نتشي · نتساءل …» · nuts poker league 15 | 0 |
| فيش · فيش في البوكر | SA «فيش كهرباء · فيش شاحن …» / EG «**فيش جنائي · فيش وتشبيه**» | 0 |
| 🔴 **فيش بوكر** | «**فيش بوكر تكساس الاحترافية · فيش بوكر مجانا · فيش بوكر للبيع · فيش بوكر تكساس · فيش بوكر تكساس بويا** · fish in poker · fish poker term · fish poker meaning» | 칩 상품 + 앱 칩 매매(«بويا» = Boyaa · 금지 축) |
| ante · انتي · آنتي في البوكر · انتي بوكر | «antenna · anterior …» · «انتيكا …» · «anti poker · ante poker face · ante poker buy in» | 0 |
| (영) big blind · small blind big blind · big blind meaning · blinds poker | «**big blind and small blind in poker · big blind vs small blind** · big blind ante · **big blind small blind rules · … order**» · «**what is small and big blind** · … poker rules · … dealer order · … explained» · «big blind meaning poker · **big blind ante meaning · defend big blind meaning · wait for big blind meaning**» · «blinds poker … timer · rules · order · calculator · tournament» | ✅ |
| (영) all in meaning · all in poker | «… in hindi · **… poker** · **… in gambling** · … slang · … in buying car» · «all in poker movie · league · chips · **rules · meaning** · pokerstars» | 2/15 · ✅ |
| (영) side pot · side pot poker | «side pot casino · side potato recipes · … · side pot calculator · side pot rules» · «**side pot poker explained** · … meaning · **side pot calculator poker · main pot side pot poker · main vs side pot poker · who wins side pot poker · all in side pot poker · how to do side pot poker**» | 섞임 · ✅ |
| (영) poker terms · poker glossary · poker slang | «**poker terms for beginners · poker terms slang · poker terms list** · … explained · **… and meanings** · … flop river turn» · «poker glossary pdf · … wikipedia · **poker game شرح · poker شرح لعبة** · (EG) **poker معنى · poker in arabic**» · «poker slang … nit · cooler · fish» | ✅ |
| (영) tilt meaning · tilt poker · ante meaning · ante poker · the nuts | «tilt meaning in urdu · **in gaming · in arabic** …» · «tilt poker room(인도 포커룸 8) · **tilt poker meaning · definition · term**» · «ante meaning **poker** · balatro · **in arabic** · medical» · «ante poker meaning · term · texas holdem · tournament» · «the nutshack · the nuts supermarket llc دبي · the nuts poker league» | 섞임 |
| 와일드 «* البوكر» = «البوكر *» | «البوكر العربية · البوكر فيس · البوكر العربية 2026 · … · البوكر جائزة · **البوكر لعبة** · البوكر للرواية العربية · **البوكر حرام**» | 1/15(부커상 9) |
| «ما هو * في البوكر» · «معنى * في البوكر» · «ما معنى * في البوكر» | «ما هو البوكر · ما هو البوكر فيس · ما هو وجه البوكر في علم النفس · **ما هو لعب البوكر**» · «معنى البوكر فيس · **ما معنى لعبة البوكر**» | 용어형 0 |
| «كيف * البوكر» · «قوانين * البوكر» | «كيف تلعب البوكر (باحتراف) · كيف اتعلم البوكر · كيف تفوز/تربح في البوكر · (EG) كيف تحترف البوكر» · «قوانين البوكر بالعربي · بالصور · (EG) قوانين بوكر تكساس · قواعد البوكر» | → L1·L5 몫 |
| 🔵 방언 «يعني ايه * في البوكر» · «ازاي * البوكر» · «شرح البوكر» | SA 빈 목록 / EG «**يعني ايه بوكر**» · «**ازاي العب البوكر · ازاي تلعب البوكر · ازاي العب بوكر** · البوكر شرح · البوكر قوانين» · EG «**شرح البوكر فى كونكر**»(다른 게임) | 용어형 방언 0 |
| معنى بوكر · معنى كلمة بوكر · poker معنى | «معنى بوكر فيس · معنى بوكر توف(히브리어) · **معنى بوكر بالعربي** · معنى poker face» | 단어 뜻 의도 |

> **요약**: L3 **아랍어 질문형 자동완성 = 사실상 0**. 질문 재료는 영어 자동완성(«what is small and big blind» · «who wins side pot poker» · «main vs side pot poker» · «poker terms for beginners» · «tilt poker meaning» · «big blind ante meaning»)과 §3 PAA·경쟁 FAQ에서 가져온다.

---

## 2. 신규 후보 볼륨 (0-1에 없던 58개 · DFS · SA / EG · `tmp/ar/L3/vol-merged.txt`)

| 묶음 | 검색어 (SA / EG) |
|---|---|
| 블라인드(영) | small blind big blind 10/10 · big blind small blind 10/10 · blinds poker 10/10 · poker blinds 10/10 · big blind meaning 10/10 · big blind poker 10/10 · what is big blind in poker 10/10 · big blind ante 10/10 |
| 블라인드(아) | البلايند في البوكر `-` · ما هو البلايند في البوكر `-` · الرهان الكبير في البوكر `-` · الرهان الصغير في البوكر `-` · الرهانات العمياء `-` · الرهان الأعمى `-` · الرهان الاعمى `-` · بلايند بوكر `-` |
| 올인·사이드팟(영) | all in poker 10/10 · all in meaning poker 10/10 · all in poker rules 10/10 · all in rules poker 10/10 · side pot poker 10/10 · side pot rules 0/0 · main pot side pot `-` · how do side pots work 0/`-` |
| 올인·사이드팟(아) | ما هو الأول إن في البوكر `-` · البوت الجانبي في البوكر `-` · القدر الجانبي `-` · كل الرقائق `-` |
| 용어집 | poker terms for beginners 10/10 · poker terms list 10/10 · poker slang 10/10 · poker terms slang 10/10 · **poker terminology 20/20** · مصطلحات بوكر `-` · معنى كلمة بوكر 10/10 · **معنى بوكر 40/10**(포커 페이스·히브리어 섞임) · poker معنى 10/20 |
| 틸트 | **tilt meaning 390/260**(🔴 게이밍·일반 · 자동완성 «in gaming / in urdu …») · tilt meaning in arabic 10/30 · tilt poker meaning 10/10 · what is tilt in poker 10/0 · تيلت في البوكر `-` · معنى تيلت `-` |
| 앤티 | **ante meaning 50/40**(사전 · balatro·medical 섞임) · ante meaning in arabic 10/10 · ante meaning poker 10/10 · ante poker 10/10 · انتي في البوكر `-` · الآنتي `-` |
| 너츠·피시·기타 | the nuts poker 10/10 · what is the nuts in poker 10/10 · النتس في البوكر `-` · fish in poker 10/10 · **فيش بوكر 20/20 · افياش بوكر 20/10**(🔴 칩 상품) · فيش البوكر `-` · rake poker meaning 10/0 · straddle in poker 10/10 |

→ **신규 58개 중 포커 의도로 20을 넘는 것 = 0**(poker terminology 20 · فيش بوكر 20은 칩 상품). 0-1과 같은 판: L3 3편은 **검색 유입 글이 아니라 클러스터 완결 + 계산기·필라에서 오는 내부 유입 몫**.

---

## 3. SERP 상위 10 + PAA (DFS · desktop · depth 10 · 원본 `tmp/ar/L3/serp*-out.json`)

> 유형 약어: **해** 해설 블로그 · **카** 카지노·실머니 제휴(클럽 모집 포함) · **앱** 게임앱 · **위** 위키 · **영** 영상 · **포** 포럼(reddit·quora·stackexchange) · **뉴** 뉴스 · **번** 기계번역 프록시(google.com/goto · reddit tl=ar) · **사** 사전·어학 · **잡** 비포커.

### 3-1. 블라인드 축
- **«ما هو البلايند في البوكر»**(AIO 없음 · 유기 9): 번 4(goto «لعبة البوكر (اللعبة العمياء) - ويكيبيديا» · «ما هو الرهان الكبير؟ | بوكر نيوز» · «هل يمكنك شرح ما هو الرهان الإلزامي في لعبة البوكر وكيف يعمل ...» · «كيفية اللعب من الرهانات العمياء - الدليل الوحيد الذي تحتاجه») · 번 reddit «r/poker - سؤال غبي. إيه هو الـ 25/.25 blind»(tl=ar · 이집트 구어) · 해 lodge · pokerskill · pokercopilot · 카 ACR — PAA «ما هي قواعد لعبة البوكر؟ · ما معنى البوكر فيس؟» · 동영상 PokerNews «WHAT ARE BLINDS IN POKER?» · Chipy · Alec Torelli · related «**Why are there two blinds in poker** · Does the small blind have to match the big blind · Big blind small blind who starts · Does small blind Go first · Poker blinds chart»
- **«البلايند في البوكر»**(AIO 있음 · 8): 번 2(goto 위키·PokerNews) · 번 reddit «إزاي أقرر مبلغ البيج بلايند للعبة البوكر اللي بلعبها في ...» · 도구 blindvalet ar «إدارة بطولات البوكر»(블라인드 타이머) · 영어 해설 4
- **«big blind»**(8/8 영어): Wikipedia «Blind (poker)» · reddit · pokernews · lodge · sfpokertour · stackexchange «What's the difference between ante and blinds?» · pokerskill · 888 «Big Blind vs Small Blind: Key Differences Explained» — PAA «**Is big blind a good position? · Does big blind become small blind? · Is The big blind first to act? · Can you fold if you are big blind?**» · related «Can the big blind fold · Does the small blind have to match the big blind · Is big blind last to act»
- **«small blind big blind»**(8/8 영어): PAA «**What do SB and BB mean in poker?** · Can you fold if you are big blind? · **Does it go small blind big blind?** · Is big blind a good position?»
- **«البلايندز في البوكر»** 10/10 영어·포어(아랍어 0) · **«الرهان الأعمى في البوكر»** = pinterest·pokerstarslearn·카 pokerstar.co.il·🔴 스포츠북 2 · **«الرهان الكبير في البوكر»** = pinterest «Poker Actions…» 7 + 영상 — 🔴 **«الرهان الكبير»는 «큰 베팅»으로 읽힌다**(블라인드 결과 0/9)

### 3-2. 올인·사이드팟 축
- **«ما هو الأول إن في البوكر»**(10): ar.wiki «بوكر» · 영 «تعلم البوكر من الألف الى الياء» · 앱 pokerist «القواعد» · 카 GG ar «تصنيفات أيدي البوكر» · pokeracademyar 족보 · kayftal3ab «كيف تلعب لعبة بوكر؟» · reddit tl=ar 2 · ar.wiki 족보 — PAA «من هو لاعب البوكر؟ · ما معنى كلمة البوكر؟» · related «… مصطلحات لعبة البوكر · تنزيل لعبة البوكر(🔴) · بوكر تكساس» → **올인 전용 아랍어 글 0/10**
- **«all in poker»**(9/9 영어): reddit «How does "all in" work in poker?» · pokerskill «All-in in Poker: What It Means and What Happens Next» · pokerstrategy · quora «… If someone only had $1 left …» — PAA(2회) «**What does it mean if someone is all in? · What does it mean when you go all in?**» / «**What does "All In" mean in poker?** · Is poker 100% luck? · What are the general rules of poker? · How many cards does everyone have in poker?»
- **«side pot poker»**(9 영어): help.ggpoker «Understanding Main Pots and Side Pots» · reddit «How the hell do side pots even work …» · pokercode · gipsyteam · stackexchange «How many side pots possible …» · 888 · 🔴 gov.br 스팸 — PAA «… · **How does split the pot work?** · …» · 동영상 Chipy «How Side Pots Work in Poker (ft. Ashley Adams)»
- **«البوت الجانبي»**: 잡 8(부츠·«عقد البوت B.O.T»·트레이딩봇) + **#3 hootpoker «شرح البوت الجانبي بالأمثلة - حوت بوكر»** — PAA 4(전부 «봇»: «ما هو البوت وكيف يعمل؟ …»)
- **«البوت الجانبي في البوكر»** 🔴 변동: 1회차 **#1 hootpoker «حاسبة البوت الجانبي بالعربي: المساهمات والأهلية والاسترداد»** + goto 5(«ما هو رهان الالتزام بالبوت …» · «اطلع على قواعد وإجراءات وملحق لعبة بوكر TDA» · «فهم قواعد لعبة البوكر "بومب بوت" | بوكر نيوز» …) / 2회차 «Shanky … Poker Bots for Sale» · pinterest · pokerstar.co.il 2 — PAA «ما هي ألعاب البوكر؟ · ما هو ال poker face؟ · ما معنى كلمة البوكر؟ · هل البوكر هو القمار؟»

### 3-3. 용어집·틸트·앤티·너츠 축
- **«مصطلحات البوكر بالعربي»**(10/10 아랍어 · AIO 없음): 사 langeek «مصطلحات البوكر بالإنجليزية» · 카 GG «تعلم مصطلحات البوكر وابدأ مع GGPoker» · 카/해 pokeracademyar «قاموس مصطلحات البوكر - دليلك الشامل لفهم لغة ... - بوكر أونلاين» · 카 viparabclub8 · 사 almaany · 카 poker-place «قاموس البوكر – المصطلحات والتعبيرات الأساسية للمبتدئين» · 카 pokerclub.co.il «مصطلحات البوكر العامية — 60 مصطلحاً وأسماء أيدي» · reddit tl=ar · pokerelarab · 영상 — PAA «**ما معنى البوكر فيس؟ · هل البوكر هو القمار؟ · هل يجوز لعب البوكر بدون مال؟**(🔴 종교)» / 2회차 «… · ما هي قواعد لعبة البوكر؟ · ما هي لعبة تكساس بوكر؟»
- **«مصطلحات البوكر»**: #1 카 clubggpoker.co.il «قواعد البوكر بالعربية: تكساس هولدم وأوماها وترتيب الأيادي» + 영어 사전 7 — PAA «**ما هي قواعد لعبة البوكر؟ · بوكر فيس يعني ماذا؟ · ماذا تعني كلمة بوكر؟**» · **«مصطلحات لعبة البوكر»** 영어 사전 8 + clubggpoker — PAA «… · **ما هو ال poker face؟** · ما هي لعبة تكساس بوكر؟» · **«poker terms»** 10/10 영어 — PAA «What does the slang term "poker face" mean? · What are the 10 types of hands in poker? · What are common tells in poker? · What is the name of normal poker?»
- **«تيلت في البوكر»**: goto 5(«لعبة تيلت (بوكر) - ويكيبيديا» · «ما الذي تفتقده في لعبة بوكر فول تيلت؟» · «فضيحة فول تيلت بوكر عام 2011» · «ما هو TILT - كيف ولماذا يحدث TILT …» · «أنواع لاعبي البوكر …») · 앱 «Tilt: Poker Tracker & Manager» · pokeracademyar «اللعبة الذهنية في البوكر» · pokerist · GG — 🔴 «تيلت»이 **Full Tilt Poker(운영사)**와 섞인다 · **«معنى تيلت في البوكر»**: goto «ما هو مصطلح "الميل" في لعبة البوكر؟ - كورا»(🔴 tilt를 «الميل(기울기)»로 직역) · goto «أصل عبارة "on tilt"» · 카 pokergg.co.il «اللعبة الذهنية في البوكر — التيلت، التباين والانضباط» — PAA «… · هل يجوز لعب البوكر بدون مال؟ · …»
- **«ما هو الآنتي في البوكر»** 🔴 변동: 1회차 gaming.net ar · somuchpoker «Ante in Poker? Rules, BBA & Winning Strategy» · pokerlistings «Ante Definition in Poker» / 2회차 ar.wiki · goto 5(족보·범위) · pokerist → ante 의도 0 · «ante» 단독 PAA «ما معنى كلمة "ante"؟»
- **«the nuts poker»**(9/9 영어): PAA «**Why is checking the nuts illegal? · Who owns the nuts poker League? · Why is the hand called "the nuts"? · What do nuts mean in slang?**» · KG «في لعبة البوكر ، فإن عقرب الجوز هو أقوى يد في موقف معين»(🔴 기계번역)

### 3-4. 유형 집계 (아랍어 결합형 13쿼리 · 유기 123개)

| 유형 | 개수 | 비고 |
|---|---|---|
| 번 기계번역 프록시(goto · reddit tl=ar) | **31** | 아랍어 결과의 최대 공급원 |
| 카 실머니·클럽 모집·카지노 제휴(GG ar · pokerstar/pokerclub/clubggpoker/pokergg.co.il · poker-place · viparabclub8 · pokeracademyar · 스포츠북) | 22 | 🔴 유형 집계만 |
| 앱 게임앱(pokerist · Tilt tracker · hootpoker 도구) | 8 | 🔴 pokerist = 금지 축(유형만) |
| 위 위키(ar.wiki «بوكر»·«ترتيب إيدي البوكر» · wikiwand · wikidata) | 9 | 일반 문서 |
| 영 영상 | 14 | 아랍어 영상 «تعلم البوكر من الألف الى الياء» 반복 |
| 해 원어 아랍어 해설(hootpoker · pokerelarab · kayftal3ab · gaming.net ar) | **6** | hootpoker 2 |
| 사 사전·어학 | 3 | |
| 잡·영어 해설·pinterest | 30 | pinterest «Poker Actions» 반복 |

---

## 4. 상위 글 원문 정독 (24편 · H1~H4 프로그램 추출 축어 · «단어» = main 텍스트 공백 분할 대략치 · 원본 `tmp/ar/L3/pages*.json`)

### 4-A. 헤딩 축어 (요약 · 전체 H1~H4 = `pages1~3.json`)

| # | 페이지(유형 · 단어 · 표/이미지 · 기타) | H1 / 주요 H2·H3 축어 | 메모 |
|---|---|---|---|
| ① | hootpoker.com/ar/learn/side-pots/ (앱/해 · 1,179 · 표 4/1 · 「نُشر: 10 أكتوبر 2026 · آخر مراجعة للنص: 12 أكتوبر 2026」 · 출처 PokerStars·«Poker TDA 2026 … Rule 23») | H1 «شرح البوت الجانبي: حساب الأوعية وتوزيع الرقائق بالأمثلة» · H2 «الفرق بين البوت الرئيسي والبوت الجانبي» · «مثال: ثلاثة لاعبين بمساهمات 80 و210 و350» · «لماذا قد يفوز لاعبان ببوتين مختلفين في اليد نفسها؟» · «هل تدخل رقائق اللاعب المنسحب في الحساب؟» · «طريقة الحساب اليدوي» · «كيف يُقسم الوعاء إذا تعادل لاعبون؟» | FAQ 5 축어: «هل صاحب أقل رقائق يمكنه الفوز بكل البوت؟» · «هل يوجد بوت جانبي بين لاعبين فقط؟» · «هل يجب أن يخسر اللاعب الأول إن إذا لم يستطع مجاراة المبلغ كاملًا؟» · «هل أستخدم رصيد اللاعب أم مجموع رهاناته؟» · 경험담 0 · 예시 3 전부 검산 일치(§4-C) |
| ② | hootpoker …/tools/side-pot-calculator/ (도구 · 995 · 표 4) | H1 «حاسبة البوت الجانبي بالعربي: المساهمات والأهلية والاسترداد» · H2 «ما مساهمة كل لاعب في هذه اليد؟» · «معادلة تقسيم الطبقات» · «مثال مباشر: 65 و180 و290» · «مثال يتضمن لاعبًا منسحبًا» · «حدود هذه الطريقة» | 사이드팟 계산 의도 주인 |
| ③ | hootpoker …/learn/minimum-raise/ (1,384 · 표 1) | H1 «الحد الأدنى للرايز: إجمالي الرفع والأول إن الذي يعيد فتح الرهان» · H2 «مقدار الزيادة ليس إجمالي الرهان» · «**لماذا لا أستطيع الرفع بعد أول إن صغير؟**» · «**هل عدة أول إن صغيرة قد تعيد فتح الرهان؟**» · «التشيك ثم الرفع: متى يكون مسموحًا؟» | FAQ «هل للبيغ بلاند حق الرفع إذا جارى الجميع فقط؟» · «**هل كلمة «أول إن» تعيد فتح الرهان دائمًا؟**» · «هل الرقائق التي أدفعها فوق رصيد الخصم تُفقد؟» |
| ④ | hootpoker …/learn/uncalled-bet-return/ (1,477) | H1 «الرهان غير المجارى: لماذا تعود الزيادة قبل توزيع الأوعية؟» · H2 «لاعبان:170 مقابل 430» · «ثلاثة باقين وواحد انسحب: لا تُعد رقائقه كلها» · «أقوى يد لا تستلم الإعادة» | 우리 all-in 글 공백 주제 |
| ⑤ | hootpoker …/poker-glossary/ (1,677 · 표 3) | H1 «مصطلحات البوكر بالعربي: معنى فولد وكول وتشيك ورايز» · H2 «أزرار القرار الخمسة» · «All-in والبوت والرصيد» · «المواقع والرهانات الإلزامية» · «مراحل اليد وأوراقها» · «كلمات تسمعها في شرح الاستراتيجية» · «مرجع للمراجعة والطباعة» | 정의 축어 «All-in : أول إن: وضع كامل الرصيد المتاح لك في اليد…» · «Side Pot : بوت جانبي: … لا يستحقه لاعب لم يساهم فيه.» · «Small Blind / SB : البلاند الصغير» · «Big Blind / BB : البلاند الكبير» |
| ⑥~⑨ | hootpoker tournament-antes · tournament-blind-levels · heads-up · texas-holdem-rules (1,048~1,962) | «الأنتي في البوكر: تكلفة الدور والفرق عن البلاند» · «ارتفاع البلاند في البطولة: كيف تخطط قبل المستوى التالي؟»(H2 «هل تتغير البلاندات في منتصف اليد؟») · «قواعد بوكر لاعبين اثنين: من يبدأ في الهيدز أب؟»(H2 «هل السمول بلاند يبدأ بعد الفلوب؟») · 규칙 H2 «زر الموزع والبلاندات» · «كشف الأوراق والتعادل والبوت الجانبي» | 🔵 hootpoker = 2026-10 신생 · sitemap 143 URL(`/ar/` 120+) · 무료 연습 게임(«الرقائق بلا قيمة نقدية») · 국가 랜딩(`/ar/poker-saudi-arabia/` …) · **블라인드·올인 «단독» 글은 없음** |
| ⑩ | pokeracademyar.com/glossary (카/해 · 2,236 · **H3 176항목** · 12카테고리+A~Z 필터 · FAQPage) | H1 «قاموس مصطلحات البوكر» · 항목 = 음차 H3 + 영어 + 분류 + 한 줄: «أول إن / All-In / رهانات / رهان جميع الرقائق المتبقية لدى اللاعب في الوعاء» · «بيج بلايند / … الرهان الإجباري الأكبر الذي يدفعه اللاعب الثاني على يسار الموزع» · «فيش / Fish / … لاعب ضعيف يخسر أمواله باستمرار» · «نتس / Nuts / … أقوى يد ممكنة في الموقف الحالي» · «تيلت / Tilt / نفسية / اللعب العاطفي والمتهور بعد الخسارة» | 🔴 **Side Pot 항목 없음** · 사이트에 casino-comparison·bcgame 리뷰(제휴) |
| ⑪~⑮ | pokeracademyar articles/poker-terms(674 · 「القاموس الشامل 2024」) · lesson/betting-options(622) · mental-game-hub(950) · lesson/avoiding-tilt(589) · poker-rules(561) | «مصطلحات لعبة البوكر: القاموس الشامل»(H3 All-In · Small Blind · … **라틴 표제**) · H3 «أول-إن (All-In)» 「وضع كل شيبزك في البوت … متى تول-إن؟」 · H2 «ما هو التيلت؟»(H3 «تيلت الغضب · تيلت اليأس · تيلت النشوة · تيلت الملل») · H1 «تجنب الـ Tilt» · H3 «1. البلايندز» 「يضع لاعبان رهانات إجبارية (البلايند الصغير والكبير) لبدء الجولة」 | |
| ⑯ | poker-place.com/ar/poker-dictionary/ (카 · lang he-IL · 2,777 · 항목 104) | H1 «قاموس مصطلحات البوكر للاعبين المبتدئين والمتقدمين» · H2 «مصطلحات البوكر الأساسية:» · «مراتب يد البوكر:» · «المواضع على الطاولة:» · «للاعبي البوكر المتقدمين:» · «مصطلحات البوكر للاعبين أون لاين:» | 「بلايندز (Blinds) – رهانات إلزامية … في جولات بطولات البوكر ترتفع قيمة البلايندز」 · 「أول إن (All In) – عندما يراهن اللاعب على جميع رقاقاته في الوعاء」 · 오류 2(§4-C) |
| ⑰ | ggpoker.com/ar/poker-basics/poker-terms/ (카 · 403 → exa 12K자 · 영문 A~Z 표제 + 기계번역) | 「Blind — المصطلح العام للرهان الإجباري الكبير أو الرهان الإجباري الصغير」 · 「All-in — عندما يراهن اللاعب بجميع رقائقه」 · 「Active player — … إذا كانت هناك **رهانات جانبية**」 · 「Center pot — **الوعاء الرئيسي**」 · 「Cap game — … في وضع **الكل في**」 | 직역투(«نداء»=call · «التحقق»=check · «محطة الاتصال») |
| ⑱ | pokerclub.co.il/ar/poker-slang (카 · 388 렌더분 · FAQPage) | H1 «مصطلحات البوكر — قاموس غير رسمي» · H2 «20 اسم أيدي» · «أنواع اللاعبين» · «الحركات والإجراءات» · «مواقف اللعب» · H3 «لماذا AK تسمى Big Slick؟» · «ما هو Cooler؟» · «ما هو Nit؟» · H2 «جاهز للانضمام إلى النادي؟» | 클럽 모집 |
| ⑲⑳ | pokerstar.co.il/ar/poker-rules (974 · FAQPage) · /ar/poker (972) | H2 «البلايندز في البوكر — ما هي ولماذا؟»(H3 «سمول بلايند» · «بيغ بلايند») · «قاموس مصطلحات الرهان» · /poker H2 «الرهانات العمياء — وقود اللعبة» | 「بيغ بلايند — الرهان الأكبر — ضِعف الصغير … البيغ بلايند هو الحد الأدنى للبقاء في اليد」 · 끝 「… Club ID 975671」 |
| ㉑ | pokerelarab.com (해/? · 1,691 · 2018 게시·2026-09 수정) | H2 «الرهانات الأساسية في لعبة البوكر»(H3 «Small Blind» · «Big Blind» · «Ante») · «أهم مصطلحات البوكر»(H3 … «All-In») — **표제 라틴** | 「All-In — … لكنه لا يعني ضمان الفوز」 |
| ㉒ | pokergg.co.il/ar/blog/poker-mental-game-tilt (카 · 556 · 2026-06-20) | H1 «اللعبة الذهنية في البوكر — التيلت، التباين والانضباط» · H2 «التيلت — أكبر أعدائك» · «أنواع التيلت — التعرف عليه نصف الحل» · «تقنيات احترافية لمنع التيلت» · «كيف تتعامل مع ضربة سيئة كبيرة» | 출처 없는 통계(§4-C) |
| ㉓ | pokerist.com/ar/rules/ (앱 · 🔴 금지 축 · 유형·오류만) | H1 «مراهنات» · H2 «مراهنات إجبارية» · «آنتي» · «الحد الأدنى لرفع الرهان» · «رهان بكامل المبلغ» · «تقسيم البنك» | 오류 4(§4-C) · «فيش» = 칩 |
| ㉔ | viparabclub8.com/blog/poker-terms-and-slang-… (카 · 1,509) | H1 «المصطلحات والعبارات العامية في لعبة البوكر التي يجب أن يعرفها كل عشاق البوكر» · H2 «شروط البوكر الأساسية»(🔴 terms→«شروط» 직역) · «عبارات عامية شائعة في لعبة البوكر» · «آداب البوكر اون لاين» | |

### 4-B. 공통 구조 관찰
- **블라인드 단독 아랍어 해설 글 = 0편**(상위 어디에도 «ما هو البلايند» 전용 원어 글 없음). 블라인드는 규칙 글의 한 절(pokerstar.co.il · hootpoker · pokeracademyar · pokerelarab) 또는 용어집 1줄. 우리 ar 글(26.7KB · H2 9 · FAQ 8)은 분량·범위에서 이미 혼자다.
- **올인 단독 아랍어 해설 글 = 0편** · 재개방(re-opening) 규칙을 아랍어로 다루는 곳 = hootpoker ③ 하나. 우리 ar 글(H2 «هل يعيد الأول إن فتح الرهان؟ — القاعدة التي يخطئ فيها معظم اللاعبين» + 다중 숏 올인 H3)과 같은 깊이.
- **사이드팟** = hootpoker ①② 독점(계산기까지) · 용어집 176항목에도 없음 · GG는 «رهانات جانبية»(기계번역).
- **용어집** = 4 사전형(pokeracademyar 176 · poker-place 104 · GG 알파벳 · pokerclub 60 슬랭) + hootpoker 범주형(«أزرار القرار الخمسة» → 실제 앱 버튼 설명). 공통: **음차 표제 + 영어 병기 + 한 줄 정의**, 예시 거의 0, 경험담 0, 이미지 0~8.
- **경험담** 24편 전부 0(1인칭 테이블 경험 없음). hootpoker는 «فريق حوت بوكر» 팀 서명 + 검토일 + 출처 블록(TDA·PokerStars).
- **표·이미지**: hootpoker 표 1~4 · 나머지 표 0. 영상 임베드 0.
- **FAQPage 스키마**: pokeracademyar glossary·poker-rules · pokerstar.co.il 2 · pokerclub · pokergg — 클럽/제휴 쪽이 스키마를 챙긴다.
- **낡은 정보**: pokeracademyar terms 제목 «القاموس الشامل 2024» · pokerelarab 2018 원문.

### 4-C. 🔴 §13·규칙 검산 (경쟁 글 · 직접 계산 / TDA·WSOP 표준과 대조)

| # | 출처 | 축어 | 검산 | 판정 |
|---|---|---|---|---|
| 1 | hootpoker ① | 「أ 80 · ب 210 · ج 350 … الوعاء الرئيسي 80 × 3 = 240 (أ، ب، ج) · الوعاء الجانبي (210 − 80) × 2 = 260 (ب، ج) · الجزء غير المجارى 350 − 210 = 140 يُعاد إلى ج」 | 합 640 = 240+260+140 ✓ · B가 올인 210이므로 C의 초과 140은 콜 상대가 없어 반환(TDA «uncalled bet returned») ✓ | ✅ 일치 |
| 2 | hootpoker ① | 보드 「2♥ 5♦ 8♣ J♠ K♦」 · A♠A♥ / Q♠Q♥ / 10♣10♦ → 「أ … يفوز بالوعاء الرئيسي: 240 … يفوز ب بالوعاء الجانبي: 260」 | 7장 베스트5: A = A A K J 8 · B = Q Q K J 8 · C = 10 10 K J 8 → A > B > C · 메인 A · 사이드(B,C) B ✓ | ✅ |
| 3 | hootpoker ① | 「أ=70، ب=160، ج=250، د=100، ثم انسحب د … 280 (أ،ب،ج) · 90 (ب،ج) · 120 (ب،ج) · 90 استرداد إلى ج … 280 + 210 + 90 = 580」 | 층: 0~70 ×4 = 280 · 70~100 ×3(B·C·D) = 90 · 100~160 ×2 = 120 · 160~250 ×1 = 90 반환 · 합 580 = 70+160+250+100 ✓ · 폴드한 D의 칩은 팟에 남고 자격만 잃음(TDA·RRoP 표준) ✓ | ✅ |
| 4 | hootpoker ③ | 「أ يراهن 120 · ب يدخل أول إن إلى 175؛ زيادة 55 · ج يجاري 175 · د يدخل أول إن إلى 245؛ زيادة 70 · هـ يجاري 245 · يعود الدور إلى أ: … 125 … فيعود له حق الرفع؛ أدنى إجمالي جديد 365 … ج … 70 … فلا يعود لج حق الرفع」 | TDA 표준(«Re-Opening the Bet»): 이미 행동한 플레이어는 **자기 행동 이후 누적으로 풀 레이즈 이상**을 마주할 때만 재개방. A: 245−120 = 125 ≥ 120 → 재개방 ✓ · 최소 리레이즈 245+120 = 365 ✓ · C: 245−175 = 70 < 120 → 불가 ✓ | ✅ |
| 5 | hootpoker ③ | 「القاعدة 45 … القاعدة 49 في Poker TDA 2026」 | 규칙 **번호**는 2026판 원문 미확인(조사 범위 밖) — 내용은 표준과 일치 | ⚪ 번호 미검증 |
| 6 | poker-place ⑯ | 「دروينغ ديد (Drawing Dead) … (آس-آس) مقابل لاعب يحمل آس-ملك من نوعين مختلفين. يفتح الفلوب آس-4-6 اللاعب الذي يحمل آس-ملك خسر فرصة الفوز وهو في وضع Drawing Dead」 | 남은 에이스 0 → AK의 페어 개선 불가 · 스트레이트 불가(A-2-3-4-5는 2·3·5 세 장 필요) · **런너-런너 플러시는 무늬에 따라 산다**: A♠A♦ vs A♣K♥ · 플롭 A♥4♥6♣ → 턴·리버 하트 2장(6♥ 포함 시 AA 풀하우스) = **36/990 = 3.64 %** (전수 · `ev.mjs`) · 레인보 플롭(A♥4♦6♣)이면 0/990 | 🔴 **조건 누락 오류**(«무늬 무관 드로잉 데드»는 거짓) |
| 7 | poker-place ⑯ | 「بريك (Break) – … ورقتي آس … ضد … الملك، وعلى الطاولة … ملك-ولد-7-6-2. يفوز اللاعب الذي يحمل ورقتي الملك」 | KK = K K K J 7(셋) > AA = A A K J 7 ✓ — 수치는 맞지만 이 상황의 통용어는 **bad beat/cooler**이고 «Break»는 토너먼트 휴식(GG ⑰도 «Break — أثناء البطولة، استراحة») | 🟠 용어 오정의 |
| 8 | pokerist ㉓ | 「آنتي: في حال إنضمام اللاعب إلى طاولة في منتصف اللعبة و لم يكن الدور عليه لعمل مراهنة إجبارية كبيرة سيتم إقتطاع رهان إجباري إسمه "آنتي" مساوٍ للرهان الإجباري الكبير」 | 이것은 **신규 착석 포스팅(post a blind to enter)** 규칙이다. 앤티 = 모든 플레이어(또는 BB 앤티 형식에서 BB 1인)가 내는 **소액** 강제 베팅(GG ⑰ «رهان إجباري مطلوب من جميع اللاعبين») | 🔴 정의 오류 |
| 9 | pokerist ㉓ | 「الرهان الكبير دائماً ضعف الرهان الصغير」 | 1/3 · 2/5 · 25/50(×2) 혼재 — «보통»이지 «항상» 아님 | 🔴 전칭 오류 |
| 10 | pokerist ㉓ | 「لا يجوز رفع الرهان بقيمة أقل من قيمة الرهان الإجباري الكبير」 | NL 최소 레이즈 = **같은 라운드 직전 베팅·레이즈 증분 이상**(TDA). BB는 첫 오픈의 하한일 뿐(hootpoker ③ 「140 + 100 = 240」 예시가 맞는 쪽) | 🟠 축약 오류 |
| 11 | pokerist ㉓ | 「رهان بكامل المبلغ … في حال وجود رهانات أكبر سيتم تقسيم البنك بينكم و بين اللاعب الذي يملك ثاني أقوى تركيبة」 | 올인자가 받는 것은 **자기 기여분까지의 메인 팟**. 초과분은 «나눠 갖는» 게 아니라 **사이드팟 자격자 중 최고 핸드**가 가진다(올인자가 최강일 때만 결과적으로 «2위 핸드») · 올인자가 지면 메인도 못 받음 | 🟠 오해 소지 |
| 12 | pokerstar.co.il ⑲ | 「البيغ بلايند هو الحد الأدنى للبقاء في اليد」 | 프리플롭 콜 하한 = BB(레이즈 없을 때) — 레이즈가 있으면 하한은 그 금액 | 🟡 단순화 |
| 13 | pokeracademyar ⑩ | 「سترادل … رهان إجباري اختياري」 | «강제»+«선택» 자기모순 — 스트래들 = 자발적 블라인드 베팅(보통 BB 2배) | 🟡 표현 오류 |
| 14 | GG ⑰ | 「Check — للمراهنة على لا شيء」 · 「Calling station — لاعب يراهن بشكل متكرر، لكنه نادراً ما يرفع」 | 기계번역 — 콜링 스테이션 = 자주 **콜**하고 드물게 레이즈 · «يراهن»(베팅) 오역 | 🟡 번역 오류 |
| 15 | pokergg ㉒ | 「تشير الإحصاءات إلى أن 70% من خسائر لاعبي الكاش …」 | 출처 없는 통계 · Tendler «7 types» 목록은 원서 대조 안 함 | ⚪ 미검증(인용 금지 재료) |

> 결론: **사이드팟·재개방을 정확히 쓰는 아랍어 원어 경쟁자는 hootpoker뿐** · 나머지(실머니·앱)는 앤티·최소 레이즈·드로잉 데드에서 틀린다. 우리 차별점 = «7장 베스트5를 적은 예시 + 무늬까지 지정한 확률 + TDA 기준 재개방».

### 4-D. 번역어 선택 집계 (main 텍스트 정규식 · `tally.mjs` · 아랍어 포커 페이지 23편 = **10개 사이트**(hootpoker 9편은 1곳) + GG 부분)

**블라인드**
| 표기 | 쓰는 곳(회수) | 비고 |
|---|---|---|
| **البلايندز**(복수) | pokerstar.co.il 9 · poker-place 4 · pokeracademyar(용어집 3 · rules 2 · lesson 1) | 4곳 |
| البلايند(단수) / «البلايند الصغير/الكبير» | poker-place 8 · pokeracademyar 1~2 | 2곳 |
| **سمول بلايند / بيغ·بيج بلايند**(음차) | pokerstar.co.il 7 · pokeracademyar 용어집 3 · poker-place 2 | 3곳 |
| **بلاند / البلاند الصغير·الكبير / البيغ بلاند / البلاندات** | hootpoker 9편 합 164 | 1곳(최다 회수) |
| الرهانات العمياء / الرهان الأعمى | pokerstar.co.il/poker 3 · GG(«Dead blind — رهان أعمى غير نشط») | 2곳 · 검색 AC는 종교어(«الرهان المحرم»)로 끌림 |
| 🔴 **الرهان الصغير / الرهان الكبير** | pokeracademyar terms 2 · pokerist(«الرهان الكبير دائماً ضعف…») | 2곳 · **우리 ar blind 글 99회(46+53)** |
| الرهان الإجباري 계열(정의어) | 9곳(GG «الرهان الإجباري الكبير» · pokerist «مراهنة إجبارية صغيرة/كبيرة» · hootpoker «الرهانات الإلزامية») | 정의 설명어로 공통 |
| 라틴 Small/Big Blind · SB/BB | pokerelarab(표제 전부 라틴) · pokeracademyar terms · GG 표제 | 3곳 |

**올인**
| 표기 | 쓰는 곳 |
|---|---|
| **أول إن**(함자) | hootpoker 8편(합 64) · poker-place 5 · pokeracademyar 4편 = **아랍 문자 표기 사이트 3/3 · 13페이지** (pokerelarab·pokerstar.co.il·pokerclub·pokergg·viparabclub8은 라틴 «All-In»만 또는 미언급) |
| أول-إن / «تول-إن»(동사화) | pokeracademyar lesson(「متى تول-إن؟」) |
| اول ان(무함자) | 본문 **0** — 검색 표면형(0-1 20/10)일 뿐 |
| «جميع/كل الرقائق» 풀이 | 9곳(정의 문장) |
| الكل في(직역) | GG 1 |
| رهان بكامل المبلغ | pokerist(앱) |
| 라틴 All-in | 12곳(병기) · pokerelarab·pokeracademyar terms는 표제가 라틴 |

**사이드팟·팟**
| 표기 | 쓰는 곳 |
|---|---|
| **البوت الجانبي / بوت جانبي** | hootpoker 27 · (우리 all-in 글 20) |
| الوعاء الجانبي | hootpoker 15(병기) |
| رهانات جانبية | GG(기계번역) |
| القدر الجانبي | **0** |
| 라틴 Side pot | hootpoker 5 · poker-place 1 · pokerstar.co.il 1(«Side Pot و String Bet و All-in جزئي») |
| 팟 일반 = البوت / الوعاء / القدر / البنك | البوت 우세(hootpoker·pokeracademyar·pokerist «البنك»은 앱) · الوعاء = poker-place 11·pokeracademyar 11·hootpoker · القدر = pokerstar.co.il 5·pokeracademyar mental 4 |

**기타 용어**: 틸트 = «تيلت / التيلت»(pokeracademyar · pokergg 17 · poker-place) vs «الـ Tilt»(pokeracademyar lesson) vs 🔴 goto «الميل» · 너츠 = «نتس»(pokeracademyar) · «ناتس»(poker-place) vs KG «عقرب الجوز» · 피시 = «فيش»(pokeracademyar 용어집) — 🔴 SERP·AC에서 «فيش» = 칩(pokerist 「لم يكن لديكم فيش كافية」 = 칩) · 앤티 = «أنتي»(hootpoker 50 · pokeracademyar) / «آنتي»(pokerist).
**숫자 표기**: 서양 숫자 0-9 = 10/10 사이트 · 동부 ٠-٩ 혼용 = pokerstar.co.il/poker(9) · pokerclub(6) · noon 상품명(«٣٠٠ قطعة») → 우리 관습(0-9) 유지가 다수와 일치.

---

## 5. 장단점 표

| | 공통 강점 | 공통 약점(= 차별화 지점) |
|---|---|---|
| hootpoker(최강 원어 경쟁자) | 정확한 층 계산·재개방 예시 · 표 · 검토일·출처(TDA·PokerStars) · 사이드팟 계산기 · 아랍어 FAQ 축어 | 블라인드·올인 단독 글 없음 · 경험담 0 · 7장 베스트5 «예시 해설»은 짧음 · 신생(색인·권위 약함) · 문장이 기술적(«الجزء غير المجارى») |
| 사전형(pokeracademyar · poker-place · GG · pokerclub) | 항목 수(104~176) · 카테고리/알파벳 필터(도구형) · 음차+영어 병기 | 사이드팟 항목 없음 · 정의 1줄·예시 0 · 기계번역투(GG) · 오정의(poker-place Break·Drawing Dead · pokeracademyar 스트래들) · 카지노/클럽 유도 |
| 클럽·제휴(pokerstar/pokergg/pokerclub.co.il) | FAQPage 스키마 · 짧고 명료한 블라인드 절 | «Club ID 975671» 가입 유도 · 단순화(«BB = 최소 생존») · 출처 없는 통계 |
| 번역 프록시·reddit tl=ar | 질문형 제목(«ما هو الرهان الكبير؟») · 상위 점유 | 기계번역(«الميل» · «عقرب الجوز») · 원문 링크 이탈 |
| 앱(pokerist) | 규칙 페이지 상위 노출 | 앤티 정의 오류 · «دائماً ضعف» · 최소 레이즈 오류 — 🔴 금지 축 |

---

## 6. 우리 글 대조

### 6-1. holdem-blind-meaning (ar有 · 26.7KB)
- 현 ar: seoTitle 「تدفع قبل أن ترى أوراقك؟ — البلايندز في البوكر (SB وBB)」 · desc 「لاعبان يدفعان قبل توزيع أي ورقة — لماذا؟ ما هو الرهان الصغير والرهان الكبير، من يدفعهما، أحجامهما، أنتي الرهان الكبير، وقواعد الهيدز أب.」 · H1(title) 「ما هي البلايندز في البوكر؟ الرهان الصغير والرهان الكبير بشرح مبسّط」 · H2 9: «ما هو البلايند في البوكر — ولماذا وُجد أصلاً؟» · «ما هو الرهان الصغير؟» · «ما هو الرهان الكبير؟» · «قواعد الرهان الصغير والرهان الكبير: من يدفعهما ومتى» · «كم حجم البلايندز؟ …» · «ما هو أنتي الرهان الكبير؟ (وما هو السترادل)» · «من يدفع البلايندز في الهيدز أب …؟» · «ماذا يحدث إذا فوّتّ دورك في البلايند؟ (البلايندز الميتة)» · «كيف تلعب من مقاعد البلايندز …» · FAQ 8.
- **이미 이기는 점**: 블라인드 단독 원어 아랍어 글이 SERP에 0 · 헤즈업·데드 블라인드·BB 앤티·스트래들까지 한 글 · PAA «Can you fold if you are big blind?»(=FAQ «هل يمكنك الطي بعد دفع البلايند؟») · «Is The big blind first to act?»(=FAQ «من يتصرّف أولاً…») 이미 보유.
- **빠진 것**: ① 🔴 **«الرهان الصغير / الرهان الكبير»가 주 용어**(99회)인데 경쟁 10개 사이트 중 2곳만 쓰고 SERP «الرهان الكبير في البوكر»는 **«큰 베팅»으로 읽힌다**(9/9 베팅 액션 결과) — 음차 «سمول بلايند / بيغ بلايند»(3곳)·«البلاند الصغير/الكبير»(hootpoker)가 현지 표준. ② PAA «Does the small blind have to match the big blind?»(related 2회) · «What do SB and BB mean in poker?» · «Does big blind become small blind?» · «Is big blind a good position?» 직답 없음(일부 본문). ③ «Why are there two blinds in poker»(related) — H2 1에 흡수돼 있으나 질문형 직답 없음. ④ 토너먼트 블라인드 레벨(«في جولات بطولات البوكر ترتفع قيمة البلايندز» poker-place · hootpoker 별도 글) — 우리 H2 «كم حجم البلايندز؟»에 있음.
- ar 도구: `/ar/calculator`·`/ar/hand-chart`·`/ar/win-rate-quiz`·`/ar/tournaments` 중 블라인드 의도 주인 없음(블라인드 타이머 의도 = blindvalet ar · 조준 안 함).

### 6-2. holdem-all-in-rules (ar有 · 31.2KB)
- 현 ar: seoTitle 「دخلت أول إن ولا تعرف ماذا تربح؟ — قواعد الأول إن والبوت الجانبي」 · desc 「راهنت بكل رقائقك والموزع يفصل الرقائق إلى كومتين؟ …」 · H1 「قواعد الأول إن في تكساس هولدم: البوت الجانبي وإعادة الرفع والمواجهة」 · H2 «ماذا يعني «أول إن» في تكساس هولدم؟» · «كيف تعلن الأول إن؟» · «كيف يعمل البوت الجانبي في البوكر؟ …»(H3 3인·4인 예시) · «هل يعيد الأول إن فتح الرهان؟ …»(H3 다중 숏 올인 · 결정 가이드) · «قواعد المواجهة مع الأول إن» · «ماذا يحدث إن أخطأت في الأول إن؟ — 5 أخطاء» · FAQ 7.
- **이미 이기는 점**: 올인 단독 원어 글 SERP 0 · 사이드팟+재개방+쇼다운 순서+경험담(「لقد جلست على تلك الطاولة …」 — 경쟁 24편 경험담 0) · 표기 «أول إن»·«البوت الجانبي» = 현지 다수형과 **일치** · 계산기 dict가 이미 이 글로 링크(「دليلنا لقواعد الأول إن والبوت الجانبي」).
- **빠진 것**: ① hootpoker가 가진 **«غير المجارى»(uncalled bet 반환) 질문** — 「هل الرقائق التي أدفعها فوق رصيد الخصم تُفقد؟」 · 「هل يوجد بوت جانبي بين لاعبين فقط؟」 → FAQ 후보. ② **폴드한 플레이어 칩이 사이드팟에 남는가**(hootpoker H2 「هل تدخل رقائق اللاعب المنسحب في الحساب؟」) — 우리 4인 예시에 폴더가 있는지 레인 A 확인. ③ 영어 PAA «What does it mean if someone is all in?» · «who wins side pot poker»(AC) · «main vs side pot poker»(AC) · «How does split the pot work?»(PAA · 사이드팟 내 스플릿 → hootpoker 「كيف يُقسم الوعاء إذا تعادل لاعبون؟」). ④ 사이드팟 **계산** 의도 = hootpoker 계산기 · 우리 `/ar/calculator`는 에퀴티 계산기라 사이드팟 분배 기능 없음(경계: 글이 «손 계산 3단계»로 받는다 · 새 도구 제안은 판정 재료 §8).
- 표기: 사이드팟 «البوت الجانبي» 유지 · 첫 등장에 «(Side Pot)» 병기(hootpoker·pokerstar.co.il 관습) · «الوعاء الجانبي» 병기 1회는 선택.

### 6-3. holdem-glossary (신규 · EN 마스터 25.6KB)
- EN H2: «The Terms People Mix Up Most» · «Betting Actions» · «Positions» · «Hands & the Board» · «Player Types & Slang» · «Money & the Game» · «Situations, Stats & Etiquette» · FAQ 8(«What are the most common poker terms every beginner should know?» · «What does UTG …» · «… check and a call?» · «… set and trips?» · «… cooler and a bad beat?» · «What is a 3-bet …» · «What does "the nuts" mean in poker?» · «What do VPIP and PFR mean …»).
- **SERP 대비 이기는 점**: 경쟁 사전 전부 «한 줄 정의·예시 0» · 우리 EN은 «혼동 쌍»(set/trips · cooler/bad beat) 절을 가짐 — poker-place가 바로 이 혼동(Break=bad beat)에서 틀림 · pokerclub H3 「ما هو Cooler؟」와 같은 질문을 FAQ로 이미 보유.
- **빠진 아랍 의도**: ① PAA 3회 반복 「ما هو ال poker face؟ / بوكر فيس يعني ماذا؟ / ما معنى البوكر فيس؟」(용어 SERP 4쿼리 · 위치는 «Player Types & Slang») — 단 «البوكر فيس» 단독은 Lady Gaga 오염(0-1) → FAQ 1문으로만. ② 「ماذا تعني كلمة بوكر؟ / ما معنى كلمة البوكر؟」(PAA 4쿼리) — 어원 1문단. ③ **«فيش» 동음이의**: 아랍 구어 «فيش» = 칩 — fish(약한 플레이어) 항목에 «فيش(칩)과 다르다» 주석 필요(현지만의 함정). ④ 사이드팟 항목(경쟁 176항목에도 없음).
- ar 도구: 🔴 `/ar/glossary` 없음 → §8.

---

## 7. 처방 (레인 A 브리프 재료 · 🔴 최종 seoTitle·desc는 쓰지 않는다)

### 7-1. holdem-blind-meaning — 우선순위 **2**(재경화 · 볼륨 전부 10/`-` · 갭 = 용어 표기)
- **카피 방향**: 주력어 «البلايندز في البوكر» + 음차 «سمول بلايند وبيغ بلايند» · 🔴 «الرهان الصغير/الكبير»를 **주 용어에서 내리고 1회 풀이 병기**로(«سمول بلايند (الرهان الصغير)») — SERP가 «الرهان الكبير»를 «큰 베팅»으로 읽는다(§3-1) · 훅 재료 = 현 seoTitle 「تدفع قبل أن ترى أوراقك؟」 유지(CTR 훅 단독 교체 금지 규칙).
- **H2 후보**(질문형 · PAA/related 축어 정렬): «ما هي البلايندز في البوكر ولماذا يوجد بلايندان؟»(related «Why are there two blinds in poker») · «من يدفع السمول بلايند والبيغ بلايند؟ (وهل يتحرك البلايند كل يد؟)»(PAA «Does big blind become small blind?») · «هل يجب على السمول بلايند أن يكمل إلى البيغ بلايند؟»(related 2회) · 기존 «أنتي الرهان الكبير»→«ما هو أنتي البيغ بلايند (BB Ante)؟»(AC «big blind ante meaning»).
- **FAQ 후보**: «هل البيغ بلايند موقع جيد؟»(PAA «Is big blind a good position?» → 답: 프리플롭 마지막 · 포스트플롭 아웃오브포지션 · 할인 가격으로 넓게 방어) · «ماذا يعني SB وBB في البوكر؟»(PAA) · «هل البيغ بلايند آخر من يتصرف؟»(related «Is big blind last to act» → 프리플롭만).
- **차별화**: 블라인드 단독 원어 글 0 → «완결판» · 경험담(한국어·EN 마스터 경험 승계) · 블라인드 비용 산수(라운드당 1.5BB) 표 · pokerist류 오류(«دائماً ضعف») 대비 «1/3·2/5» 실제 예.
- **카니발**: 블라인드 레벨·토너먼트 구조 → holdem-tournament(L4) 앵커 · 포지션별 방어 레인지 → `/ar/hand-chart` 앵커(도구 주인).

### 7-2. holdem-all-in-rules — 우선순위 **1**(재경화 · 원어 경쟁자 hootpoker가 같은 롱테일을 10월에 선점 중)
- **카피 방향**: 주력어 «قواعد الأول إن» + «البوت الجانبي» 유지(표기 현지 다수형과 일치) · 영어 병기 «All-in · Side Pot» 1회 · 훅 = 현 seoTitle 「دخلت أول إن ولا تعرف ماذا تربح؟」 유지.
- **H2 후보**: 기존 H2 유지 + 신설 1 «ماذا يحدث للرقائق التي لم يجارِها أحد؟ (الرهان غير المجارى)»(hootpoker ④ 주제 · 우리 공백) · 기존 «كيف يعمل البوت الجانبي» 아래 H3 «من يفوز بالبوت الجانبي؟ وماذا لو تعادل لاعبان؟»(AC «who wins side pot poker» · PAA «How does split the pot work?»).
- **FAQ 후보**(경쟁 FAQ·PAA 축어 정렬): «هل يوجد بوت جانبي إذا كان هناك لاعبان فقط؟»(hootpoker FAQ · 답: 없음 · 초과분 반환) · «هل تبقى رقائق اللاعب المنسحب في البوت الجانبي؟»(hootpoker H2 · 답: 남고 자격만 상실) · «ماذا يعني أن يكون اللاعب أول إن؟»(PAA «What does it mean if someone is all in?»).
- **차별화**: 사이드팟 예시에 **7장 베스트5 명시**(hootpoker도 베스트5 표는 짧음) · 재개방은 TDA 기준 숫자 예시(우리 H3 이미 있음 — 숫자 재검산) · 경험담(경쟁 0) · 우리 계산기 → 이 글 링크 기존.
- **카니발**: 사이드팟 «계산기» 의도는 우리 도구에 없음 → 글이 손 계산 절차로 받는다(도구 신설은 §8) · 쇼다운 순서 → holdem-showdown-rules(L2) 앵커 · 스플릿 → holdem-tiebreak-rules(L2) 앵커.

### 7-3. holdem-glossary — 우선순위 **3**(신규 · 수요 최저 · 클러스터 허브)
- **카피 방향**: 주력어 «مصطلحات البوكر» + «بالعربي»(SERP 10/10 아랍어 = 이 표면형) · 영어 «poker terms» 병기 · 🔴 `/ar/glossary` 도구가 생기면 tr·vi 선례대로 **도구가 «مصطلحات البوكر» 헤드 주인** → 글은 «معنى X في البوكر» 각도(«المصطلحات التي يخلطها الجميع» 혼동 쌍 절을 앞세움).
- **H2 후보**: EN 카테고리 구조 유지(`settled-decisions`: glossary H2 질문형 비율 집계 제외) — «المصطلحات التي يخلط بينها اللاعبون أكثر» · «أفعال الرهان» · «المواقع» · «الأيدي والطاولة» · «أنواع اللاعبين والمصطلحات العامية» · «المال واللعبة» · «مواقف وإحصاءات وآداب الطاولة».
- **FAQ 후보**(PAA 축어): «ما هو البوكر فيس (Poker Face)؟»(PAA 4쿼리) · «ماذا تعني كلمة بوكر؟»(PAA 4쿼리 · 어원) · EN FAQ 8 승계 중 «ما الفرق بين الكولر والباد بيت؟»(pokerclub 「ما هو Cooler؟」) · «ماذا تعني النتس (the nuts)؟»(PAA «Why is the hand called "the nuts"?»).
- **차별화**: 항목마다 «음차 + 영어 + 한 줄 + 실제 쓰이는 문장/예시» · 🔴 «فيش(Fish) ≠ فيش(رقائق)» 주석(현지 함정) · 사이드팟·재개방·앤티 항목에서 해당 규칙 글 앵커(정의 H2는 규칙 글에만 — vi 선례 ②) · 경쟁 오류 쌍(Break/Bad beat · Drawing dead 조건)을 정확히.
- **카니발**: blind·all-in·side pot·ante 정의는 L3 두 글이 주인(1줄 + 앵커) · tilt·bad beat·nuts는 해당 글 유무를 레인 A가 ar 대상 목록과 대조.

### 7-4. 표기 권고 (3편 공통 · 레인 A·`translation-terms-ar.md` 갱신 재료 — 판정은 0-3)
| 개념 | 현 ar 사전 | SERP·경쟁 다수형 | 권고 |
|---|---|---|---|
| Small/Big Blind | الرهان الصغير/الكبير · سمول/بيغ بلايند | 음차 3곳+hootpoker «البلاند» · «الرهان الكبير» 2곳 · SERP에서 «큰 베팅» 오독 | 음차 주(«سمول بلايند / بيغ بلايند»), 풀이 1회 |
| Blinds | البلايندز/الرهانات العمياء | البلايندز 4곳 · العمياء 2곳 | «البلايندز» 유지 |
| All-in | أول إن | 아랍 문자 표기 3/3 사이트 «أول إن» | 유지 · tags에 «اول ان»(검색 표면형) 1개 |
| Side pot | البوت الجانبي | البوت الجانبي(+الوعاء الجانبي) · القدر الجانبي 0 | 유지 |
| Fish | (없음) | فيش = 칩 동음 | «فيش (Fish — اللاعب الضعيف)»으로 첫 등장 풀이 |

---

## 8. 계획 판정 재료 (판정하지 않음 · 증거 + 권고 1줄)

| # | 쟁점 | SERP 증거 | 권고 1줄 |
|---|---|---|---|
| ① | **`/ar/glossary` 도구 vs 글** | «مصطلحات البوكر بالعربي» 상위 10 중 사전형 4(pokeracademyar 176항목 + 12카테고리·A~Z 필터 = 사실상 도구 UI · poker-place 104 · GG 알파벳 · pokerclub 60) + hootpoker «مرجع للمراجعة والطباعة» · «مصطلحات البوكر» #1 clubggpoker 규칙 허브 · 수요 poker terms 20/20 · poker terminology 20/20 · مصطلحات لعبة البوكر 10/10 · مصطلحات البوكر `-` · 아랍어 용어 질문형 AC 0 | tr·vi(«용어는 도구로») 선례와 증거가 같은 방향 — **도구 주인 + 글은 «معنى X» 각도**가 맞지만, 수요가 최저라 «도구 신설을 ar 배포 회차에 포함할지»는 비용 대비로 0-3에서 판정(글만 먼저 내고 도구는 후속도 가능) |
| ② | blind·all-in 재경화 범위 | 두 헤드 모두 원어 아랍어 단독 경쟁 글 0 · 아랍어 단독 헤드는 전부 오염(§0-A) · 결합형 볼륨 `-` | 전면 재작성 불필요 — **표기(블라인드 음차)·FAQ 3~4문·H2 1 신설** 수준의 경화 |
| ③ | 사이드팟 계산 의도 | hootpoker 계산기가 «البوت الجانبي في البوكر» 1회차 #1 · 우리 `/ar/calculator`는 에퀴티 전용 · 볼륨 `-`·10 | 새 도구는 근거 부족(볼륨) — all-in 글 안 «손 계산 3단계 + 표»로 흡수 |
| ④ | 헤드 오염 확정 목록(0-1 §1 갱신) | بلايند · البلايندز · اول ان · all in · all in meaning · تيلت · نتس · فيش · ante · side pot(카지노) · البوت الجانبي(부츠·봇) · tilt meaning 390 | 전부 **조준 금지** · 0-1 «확인» 표기(بلايند·تيلت)를 «오염 확정»으로 |
| ⑤ | hootpoker 경쟁 감시 | 2026-10-10 신생 · 120+ ar 글 · 국가 랜딩 · 규칙 정확 | 0-3 계획에 «ar 원어 경쟁자 = hootpoker» 1줄 · 30일 뒤 같은 결합형 SERP 재측정(update-calendar 후보) |

---

## 9. 커버리지 표

### 9-A. 검색어별 (0 오염 · 1 자동완성 · 2 볼륨 · 3 SERP·PAA · 4 원문 정독)
| 검색어 | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| بلايند (헤드 · SA+EG) | ✅ 없음 | ✅ SA·EG | ✅ 0-1 140/40 | ✅ PAA 4/2 · KG · related 8 | ✅ 오염이라 의도 대체: «البلايند في البوكر»·«ما هو البلايند…» 결합형으로 pokerstar.co.il ⑲⑳ · hootpoker ⑧⑨ · pokeracademyar ⑮ · pokerelarab ㉑ · poker-place ⑯ |
| البلايندز (헤드) | ✅ 없음 | ✅ | ✅ 0-1 `-` | ✅ AIO만 | ✅ 위와 같음(결합형 정독) |
| big blind (헤드) | ✅ 있음(영어) | ✅ +meaning · +small blind | ✅ 0-1 10 · 신규 8 | ✅ PAA 4 · related 8 · 동영상 | ✅ 아랍어 0 → 아랍어 결합형 정독으로 대체(위) |
| اول ان (헤드) | ✅ 없음 | ✅ +أول إن·معنى·في البوكر·بوكر | ✅ 0-1 20/10 · 신규 | ✅ +في البوكر · +ما هو الأول إن(PAA 2·related) | ✅ hootpoker ③④⑤ · pokeracademyar ⑩⑫ · poker-place ⑯ · pokerelarab ㉑ · pokerist ㉓(유형) |
| all in meaning (헤드 · SA+EG) | ✅ 없음 | ✅ | ✅ 0-1 110/90 · +poker 신규 | ✅ PAA 4+4 · related | ✅ 영어 사전뿐 → 「all in poker」 SERP·아랍어 정독으로 대체 |
| all in (오염 판정 · SA+EG) | ✅ 없음 | ✅ | ✅ 0-1 320/590 | ✅ | — 조준 안 함 |
| side pot / البوت الجانبي (헤드) | ✅ 없음~섞임 / 없음 | ✅ +poker · 아랍어 5변형 | ✅ 0-1 10·`-` · 신규 5 | ✅ PAA 4(봇) · +side pot poker PAA 4 · +في البوكر 2회 | ✅ hootpoker ①②④ · GG ⑰ |
| مصطلحات البوكر (헤드) | ✅ 있음(영어 사전) | ✅ +لعبة · +بوكر · 빈칸 4 | ✅ 0-1 `-`·10 · 신규 3 | ✅ PAA 3+3 · +بالعربي PAA 4+4 | ✅ pokeracademyar ⑩⑪ · poker-place ⑯ · GG ⑰ · pokerclub ⑱ · hootpoker ⑤ · viparabclub8 ㉔ |
| poker terms (헤드) | ✅ 있음(영어) | ✅ +glossary · +slang | ✅ 0-1 20/20 · 신규 5 | ✅ PAA 4 · glossary related 6 | ✅ 아랍어 0 → 위 아랍어 사전 정독으로 대체 |
| تيلت (헤드 · SA+EG) | ✅ 없음 | ✅ +معنى·يعني·في البوكر·بوكر | ✅ 0-1 110/40 · 신규 6 | ✅ KG · +في البوكر PAA 3 · +معنى تيلت PAA 3 | ✅ pokeracademyar ⑬⑭ · pokergg ㉒ · poker-place 항목 |
| ante (경량 · SA+EG) | ✅ 없음 | ✅ +poker·meaning·아랍어 3 | ✅ 0-1 260/320 · 신규 6 | ✅ PAA 1 · related · +ما هو الآنتي(2회 · 변동) | ✅ hootpoker ⑥ · pokerist ㉓(오류) · GG ⑰ 항목 |
| نتس (경량) | ✅ 없음 | ✅ +nuts poker · the nuts | ✅ 0-1 170/260 · 신규 3 | ✅ KG · +النتس(1회 서버오류 → 재시도 1회 성공) · +the nuts poker PAA 4 | ✅ pokeracademyar ⑩ · poker-place ⑯ 항목(경량 2편) |
| فيش (오염 판정 · SA+EG) | ✅ 없음 · 🔴 칩 | ✅ +في البوكر · +بوكر | ✅ 0-1 9,900 · 신규 3 | ✅ PAA 4+4 · +فيش بوكر | — 조준 안 함(용어집 주석 재료) |
| 보조 아랍어 결합형 13(البلايند في البوكر · ما هو البلايند… · البلايندز في البوكر · الرهان الأعمى… · الرهان الكبير… · سمول بلايند بيج بلايند · اول ان في البوكر · ما هو الأول إن… · البوت الجانبي في البوكر · مصطلحات البوكر بالعربي · تيلت في البوكر · معنى تيلت… · ما هو الآنتي…) | ✅ | ✅ | ✅ 신규 `-` | ✅ | ✅ 위 정독에 포함 |
| 와일드카드 6종 + 방언 2종 | — | ✅ SA·EG | — | — | — |

### 9-B. 글별 «PAA·자동완성 질문 확보»
| 글 | PAA·SERP 질문 축어 | 자동완성 질문형 | 판정 |
|---|---|---|---|
| holdem-blind-meaning | PAA «Is big blind a good position? · Does big blind become small blind? · Is The big blind first to act? · Can you fold if you are big blind? · What do SB and BB mean in poker? · Does it go small blind big blind?» · related «Why are there two blinds in poker · Does the small blind have to match the big blind · Is big blind last to act» · reddit tl=ar «إزاي أقرر مبلغ البيج بلايند…» · pokerstar.co.il FAQ «ما هي البلايندز في البوكر؟» | what is small and big blind · small blind big blind order · big blind ante meaning · defend big blind meaning · wait for big blind meaning (아랍어 0) | ✅ |
| holdem-all-in-rules | PAA «What does it mean if someone is all in? · What does it mean when you go all in? · What does "All In" mean in poker? · How does split the pot work?» · hootpoker FAQ «هل يوجد بوت جانبي بين لاعبين فقط؟ · هل صاحب أقل رقائق يمكنه الفوز بكل البوت؟ · هل كلمة «أول إن» تعيد فتح الرهان دائمًا؟» · H2 «لماذا لا أستطيع الرفع بعد أول إن صغير؟» | who wins side pot poker · main vs side pot poker · how to do side pot poker · side pot poker explained · all in poker rules (아랍어 0) | ✅ |
| holdem-glossary | PAA «ما هو ال poker face؟ · بوكر فيس يعني ماذا؟ · ماذا تعني كلمة بوكر؟ · ما معنى كلمة البوكر؟ · What does the slang term "poker face" mean? · Why is the hand called "the nuts"?» · pokerclub H3 «ما هو Cooler؟ · ما هو Nit؟ · لماذا AK تسمى Big Slick؟» | poker terms for beginners · poker terms and meanings · tilt poker meaning · poker معنى · poker in arabic · ما معنى لعبة البوكر | ✅ |

✗ **0**. 대체 처리 5건(이유 명기): بلايند·البلايندز·big blind·poker terms·all in meaning의 «원문 정독»은 헤드 SERP에 아랍어 포커 글이 없어(오염 또는 영어만) **같은 의도의 아랍어 결합형 SERP 정독으로 대체**했다. SERP 서버오류(40101) 2건은 재시도 1회로 회수(«النتس في البوكر» 성공 · «معنى تيلت…»·«ما هو الآنتي…»는 재실행 회차로 대체) — 결합형 상위가 회차마다 바뀌는 변동은 §3에 회차별로 남겼다.
