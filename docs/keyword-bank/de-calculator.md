# de 키워드 뱅크 — `/de/calculator` (계산기 랜딩 · 2026-09-18)

> 실측 2026-09-18. 권역 = **DACH**(`docs/local-voice/de-dach.md` · 용어 정본 `docs/translation-terms-de.md` · 씬 `docs/market-profile/de.md`).
> 도구 = DFS `keywords_data/google_ads/search_volume/live`(location **2276 Germany** · 105시드 · 🔴 `language_code` 생략 — language는 볼륨을 안 나눈다 · 스크립트 `tmp/de-calc-vol.mjs`) ·
> **구글 자동완성**(`suggestqueries.google.com` · `client=firefox` · `hl=de` × `gl=DE/AT/CH` 3지역 교차 · 62시드 · `tmp/de-calc-suggest.mjs` → `tmp/de-calc-suggest.json`) ·
> DFS SERP `serp/google/organic/live/advanced`(mobile · language `de` · Germany · «poker rechner» · «poker wahrscheinlichkeiten rechner» · «icm rechner poker») ·
> 상위 페이지 구조 = 서브에이전트(sonnet) 2개가 Playwright DOM에서 title/H1~H3/table th/FAQ/위젯 라벨을 프로그램으로 추출(요약 금지 · §12-B · 원본 `tmp/de-calc-extract-{a,b}.json`).
> 라쿠는 쓰지 않았다(DFS와 같은 Google Ads 원천). 질문검색은 ja 전용.
> EN 정본 = `en-calculator.md` · 선례 = `ja/zh/zh-hant/es/pt-calculator.md`. 수치·표 행 개수는 EN과 동일(§13) — 이 파일은 «문안·형태소·제목» 근거만 담는다.

## 1. 볼륨 (월 · DFS Germany · 2026-09-18)

| 키워드 | 볼륨 | 판정 |
|---|--:|---|
| **poker odds calculator**(영문) | **590** | 🔴 **영문이 자국어 머리어의 2.3배** — es·pt(동급)보다 한 단계 더 세다. 제목에 «Odds» 토큰 필수 |
| poker wahrscheinlichkeiten · wahrscheinlichkeit poker | 480 · 480 | 🔴 정보형 = `holdem-probability` 소유(그 글 title = «Poker Wahrscheinlichkeiten **Tabelle**») |
| poker calculator(영문) · equilab · poker simulator · poker kalkulator | 390 | 영문·브랜드·게임 의도 — 미채택(«kalkulator»는 🔴 폴란드어 오염, §2) |
| **poker rechner** | **260** | ✅ **자국어 머리어**(도구 명사) · 12개월 140~480 · 자동완성 10/10 생존 |
| **poker wahrscheinlichkeiten rechner** | **210** | ✅ 제목 둘째 토큰 — 🟢 형제 글이 «Tabelle»를 소유하고 «Rechner»는 **아무 형제도 안 쓴다**(§6 확인) → 계산기가 가져간다 |
| poker equity calculator(영문) | 210 | ✅ 제목 «Equity» |
| poker odds | 210 | 탭·본문 |
| **icm poker** | **110** | ✅ 제목 «ICM» · 정의형 반은 `holdem-icm` 소유 |
| poker wahrscheinlichkeiten tabelle · poker starthände | 110 · 110 | 🔴 형제 글 소유(probability · starting-hands-chart) |
| pot odds · chip chop · poker starthände tabelle | 90 | 탭·표·FAQ |
| equity poker · poker equity | 70 · 70 | ✅ 설명 |
| poker odds rechner · pot odds berechnen · outs poker · holdem calculator · poker hand rechner · poker hände rechner · poker tools | 50 | 🟠 **승인 CTA «Poker-Odds-Rechner» = 50**(0은 아니다 · §3-E 선례와 다름) |
| icm rechner · poker wahrscheinlichkeiten berechnen · spr poker · poker mathematik | 40 | |
| pot odds rechner · pot odds calculator · poker outs berechnen · texas holdem calculator · pokerstove | 30 | |
| icm calculator(영문) · poker odds berechnen · poker odds tabelle · push fold chart · implied odds (poker) · poker rechner app · poker blinds rechner · bubble poker · poker chancen rechner · texas holdem wahrscheinlichkeiten | 20 | «poker blinds rechner»·«poker chips verteilung rechner»는 🔴 의도 다름(홈게임 칩 분배 — 로컬보이스 §2) |
| odds rechner poker · equity rechner (poker) · poker equity rechner · icm poker rechner/calculator · icm deal (rechner/calculator) · poker pot odds rechner · pot odds tabelle · outs rechner · outs berechnen · poker outs chart/tabelle · texas holdem rechner · holdem rechner · gewinnchance poker · m ratio poker · push fold poker · chip chop poker · poker rechner online · aa vs kk · nash chart/range · push fold tabelle · poker outs rechner · odds und outs · poker odds chart · poker preisgeld rechner · stack to pot ratio poker · hand equity poker · gewinn(wahrscheinlichkeit) poker · poker quoten (berechnen) | 10 | 롱테일 바닥값 — 본문·표·FAQ |
| **null**: icm rechner poker · poker icm rechner · outs rechner poker · poker outs faustregel · spr berechnen · m wert poker · harrington m poker · push fold rechner · implied odds rechner · poker equity berechnen · poker rechner wer gewinnt · starthände poker tabelle · wer gewinnt beim poker · welche hand gewinnt poker · blase poker · preisgeld aufteilen poker · poker turnier rechner · chip chop rechner · turnier deal rechner · icm erklärung · icm turnier · poker hände vergleichen · effektiver stack poker | | 근거로 쓰지 마라(null ≠ 수요 없음 — 자동완성·PAS로 교차) |

### 🔴 「Quotenrechner」 오염 (de 고유 함정 · 채택 금지)

- «quotenrechner» **210** ↔ «poker quotenrechner» **0** · «quoten poker» null. 210은 **스포츠베팅 배당 계산기**다(메모리 「키워드 자릿수 함정」 동형).
- 그런데 SERP 1위 888poker.de가 FAQ에서 «Texas Holdem **Quotenrechner**»·«Wie zuverlässig sind **Quotenrechner**?»를 쓴다 — 🔴 **영어 odds → Quoten 직역의 번역체 잔재**이지 검색어가 아니다(로컬보이스 §3이 PokerZeit를 「번역체 잔재 · 반면교사」로 적어둔 것과 같은 결).
- → **우리는 «Odds»를 그대로 쓴다**(코퍼스도 Odds). 「Quoten」은 제목·H2·FAQ 어디에도 넣지 않는다.

## 2. 자동완성 (hl=de · gl=DE/AT/CH 3지역 교차 · 62시드)

🟢 **62시드 중 «push fold chart»·«poker starthände» 2개만 지역차**(그것도 순서 차이) — DACH 3국은 계산기 축에서 사실상 동일하다. 권역 분리 근거 없음.

### 살아 있는 축
| 시드 | 확장(DE) | 대응 |
|---|---|---|
| **poker rechner** | app · online · **wer gewinnt** · omaha · 888 · chips · **wahrscheinlichkeiten rechner** · **odds rechner** · **hand rechner** · blinds rechner | 머리어 확정 · «wer gewinnt» → Equity/Hand-Ranking 탭 · omaha·chips·blinds = §7 미채택 |
| poker wahrscheinlichkeiten | **rechner** · tabelle · berechnen formel · pdf · berechnen · starthände · hände · **faustregel** · im kopf berechnen | 제목 둘째 토큰 · pdf·tabelle = 형제 글 |
| pot odds | **berechnen** · poker · calculator · tabelle · **rechner** · berechnen übungen · and equity · trainer · table | 팟오즈 탭 · FAQ |
| outs poker | calculator · berechnen · meaning · chart · **poker outs faustregel** · outs odds chart · table · trainer | 아웃츠 탭 · 3표 |
| **icm poker** | **rechner** · bedeutung · explained · app · tournament strategy · calculator free · charts · **deal** · trainer | 🟢 오염 0 |
| **icm rechner** | **icm rechner poker** · **icm deal rechner** | 🟢 오염 0 — §2-A |
| **icm calculator** | poker · mtt · gto wizard · push fold · hrc · online free · formula · free | 🟢 전부 포커 |
| icm deal | **icm deal rechner** · poker · calculator · meaning · icm poker deal calculator · icm final table deals | ICM Deal H2 · 코퍼스 «ICM Deal» 10 |
| poker equity | calculator · **rechner** · **berechnen** · calculator range · online · trainer · table · app · plo | Equity 탭 |
| equity poker | **bedeutung** · **definition** · calculator online · **deutsch** · berechnen · table · hands · formula | «bedeutung/definition» = `holdem-equity` 소유 |
| implied odds (poker) | poker · **erklärung** · **deutsch** · calculator · meaning · formula · training · coaching | 팟오즈 탭 토글 · 정의형은 `holdem-implied-odds` |
| chip chop poker | **chip chop poker calculator** · chip chop survivor poker | ICM Deal H2 · chop 열 |
| aa vs kk | odds · **preflop odds** · **equity** · vs qq odds calculator · preflop · vs qq vs jj · preflop percentage | quickRef 1표 · FAQ 2 |
| poker odds | **calculator** · **rechner** · **berechnen** · tabelle · calculator app · omaha · camera · trainer | |
| poker gewinnchance | gewinnchancen · **gewinnchancen rechner** · gewinnchancen berechnen · hände gewinnchancen | 설명 후보(볼륨 10) |
| starthände poker | **tabelle** · gewinnwahrscheinlichkeit · **pdf** · ranking · reihenfolge · wahrscheinlichkeiten · namen · position | 🔴 전부 `holdem-starting-hands-chart` 소유 — 탭 라벨로만 |
| push fold (chart) | charts · poker · mtt · tournament · heads up · **15bb** · nash · **3 handed** · **6 handed** | push/fold 탭(HU·6-max·9-max 실재 수요) |
| m ratio poker | **m ratio calculator poker** | M 탭 |
| spr poker | calculator · explained · meaning · chart · term | 탭·5표(제목 훅 금지 = settled §1) |

### 🔴 오염·사망 시드
- **«harrington m» → 10/10 무관**(Harrington Marke/Muster/Merc — 재킷 브랜드·지명). 🔴 **M 값을 «Harringtons M»으로 앵커한 검색어는 없다** — 탭·표 안에서만 쓰고 제목·H2에 올리지 않는다(현 사전 `mCaption` 「M-Ratio (Harringtons M)」는 탭 내부라 유지).
- **«chip chop» 단독 → 10/10 무관**(chip chop ham · inc · diva · chopsticks). 반드시 **«Chip Chop Poker»**로 앵커.
- **«equity rechner» 단독 → trading · private equity · equity curve** 오염. 반드시 «Poker-Equity» 또는 «Equity-Rechner **fürs Poker**» 앵커.
- **«ak vs» → 소총(AK vs AR/AKM/AP Stihl)** — es·pt와 동일.
- **«poker kalkulator» 390 → 폴란드어**(kalkulator szans · prawdopodobieństwo · 888 poker kalkulator). 독일어 검색어가 아니다.
- **«quotenrechner» → 스포츠베팅**(§1-A).
- 죽음(확장 0): «odds rechner poker» · «equity rechner poker» · «icm rechner poker» · «poker starthände chart» · «regel der 4 und 2» · **«4 2 regel poker»** · «vierer zweier regel poker» · «welche hand gewinnt poker» · «handstärke poker» · «asse gegen könige» · «preisgeld aufteilen poker» · «blase poker» · «gewinnchance poker berechnen» · **«darf man einen rechner beim poker benutzen»** · «poker wahrscheinlichkeiten tabelle».
  - 🔴 **«Regel der 4 und 2» 계열은 자동완성 전멸** — 독일어 검색자는 **«Faustregel»**로 친다(«poker outs faustregel» · «poker wahrscheinlichkeiten faustregel» 둘 다 PAS 실재 · §3). 코퍼스도 **Faustregel 33 · 「Regel der 2 und 4」 6 : 「der 4 und 2」 2**이고 `holdem-outs` H2가 축어로 「Outs im Kopf umrechnen: die Faustregel」 + 「Die **Faustregel** (auch „Regel der 2 und 4")」다. → **본문·표·FAQ는 «Faustregel» 우선, 병기는 «Regel der 2 und 4»**(EN의 4→2 순서를 따르지 않는다).

## 3. SERP · PAA · PAS (DFS 모바일 · de · Germany · 2026-09-18)

| 쿼리 | 1~10 | 특징 |
|---|---|---|
| **poker rechner** | **888poker.de** «Texas Hold'em Poker Odds Rechner» · **poker.de** «Poker Wahrscheinlichkeiten: Bester Rechner für Poker Odds» · microsoft.com 앱 · 앱 팩 · **cardplayer.com(영어)** | 독일어 도구 페이지 **2곳뿐**, 나머지는 앱스토어·영어 |
| poker wahrscheinlichkeiten rechner | 888poker.de · 앱 팩 3 · **PAA 2** · apps.microsoft · cardplayer(영어) · pokerlistings.de(팟오즈 글) · **pokernews.com(영어)** · YouTube · win2day.at · 888poker.de 매거진 | 1페이지에 **영어 3 + 앱 4** |
| **icm rechner poker** | icmizer(영어) · **pokerfirma.com «ICM-Dealrechner»** · holdemresources(영어) · gipsyteam(영어) · mttdb(영어) · icmizer · 앱 · **pokerlistings.de «ICM-Erklärung»** · evenbeter(영어) · amazon.de | 🟢 **독일어 ICM 도구는 PokerFirma 1곳** · 10자리 중 **8자리가 영어** |

**PAA(실제 질문 · «poker wahrscheinlichkeiten rechner»)**: «Wie berechnet man die Wahrscheinlichkeit beim Poker?» · «Wie hoch ist die Wahrscheinlichkeit, einen Royal Flush zu bekommen?» → 🔴 둘 다 정의·확률표 의도 = `holdem-probability` 소유. **계산기 FAQ로 가져오지 않는다.**

**PAS 합집합**: Poker Wahrscheinlichkeiten Rechner · Poker Rechner App · Poker gewinn rechner · Poker Wahrscheinlichkeiten Tabelle · Poker Wahrscheinlichkeiten berechnen Formel · **Poker Wahrscheinlichkeiten Faustregel** · **Poker Outs berechnen** · Poker wahrscheinlichkeiten pdf · Poker Wahrscheinlichkeiten Starthände · Poker wahrscheinlichkeiten preflop · Poker outs tabelle · Poker wahrscheinlichkeiten royal flush · Omaha poker wahrscheinlichkeiten · Poker Rechner Online · Poker hände wahrscheinlichkeiten — (ICM 쿼리) **Poker turnier rechner** · ICM solver · ICMIZER · **Poker icm trainer** · Poker blinds rechner · Poker Odds Rechner · **Chip Chop Poker** · Poker Chips Verteilung Rechner · Blindstruktur Poker · **Poker hand evaluator** · Poker Solver online · Icm ranges.

## 4. 상위 페이지 구조 (원문 추출 · `tmp/de-calc-extract-{a,b}.json`)

| 페이지 | 단어 | 구조 |
|---|---:|---|
| 888poker.de «Poker Rechner – Texas Hold'em Poker Odds Rechner» (odds #1) | 701 | **표 0** · 위젯은 JS(DOM 라벨 0) · H2 9 = 사용법 2 + **FAQ 6**(«Was ist ein Texas Holdem Quotenrechner?» · «Wie berechnet man Quoten im Poker?» · «Funktionieren Poker Rechner?» · «Funktionieren Poker Rechner für alle Arten von Pokerspielen?» · «Wie zuverlässig sind Quotenrechner?» · «Kannst du den Poker Rechner beim Online-Poker verwenden?») |
| poker.de «Poker Wahrscheinlichkeiten berechnen: Anleitung und Poker Odds Rechner» (odds #2) | 1,806 | **표 2**(「Ihre Hand/Community Cards/Vermutliche Hand des Gegners/Outs」 3행 · 「Ihre Hand/Outs/Odds (nach Flop)/Odds (nach Turn)」 **9행**) · H3 「**Faustregel:**」 · **FAQ 8** · 위젯 라벨 축어 = 게임 6종 · 플레이어 «2~10» · **«? Zufällige Karten»** · «Zurücksetzen» · «Fertig» |
| 888poker.de 매거진 «Poker Wahrscheinlichkeiten» | 970 | 표 2(족보 빈도 11행 · 무헤더 5행) · H3 **「Poker Wahrscheinlichkeiten Rechner – Die 2x & 4x Regel」** · FAQ는 아코디언이라 h1~h3로 미검출(🔴 미판정 — 추측 채움 금지) |
| pokerlistings.de «Pot-Odds einfach berechnen für Anfänger (plus **Faustregeln**)» | 1,441 | 표 2(무헤더 6행 · 「**Zahl der Outs / % auf River**」 **21행**) · H2 「Eine Faustregel für Omaha und Texas Hold'em」 · FAQ 1 |
| win2day.at | — | 🔴 **403 봇 차단**(2회 시도 · networkidle 8초도 동일) — 구조 판정 불가 |
| **pokerfirma.com «ICM-Dealrechner»** (icm #2) | 307(껍데기) + **9**(위젯) | 🔴 겉 페이지의 H1~H3는 **전부 사이드바 카지노 글 제목**(「Casinos ohne LUGAS 2026…」) — 계산기는 `<iframe src="/dealrechner/deal.html">` 안에 있고 **산문 0 · 표 헤더 3 · FAQ 0**. 축어 = «**Chipstände** / **Preisgelder** / **Geld nach Deal**» + 행 «Restgeld für Sieger:» · «Summen» · 입력 10행(`chipsI`·`preisI`·`dealpreisI`) |
| pokerlistings.de «ICM-Erklärung» (icm #9) | 1,931 | 기사(도구 아님) · H2 5 = 「Warum solltest du ein ICM-Berechner werden?」·「Was ist ein Chip bei einem Pokerturnier wert?」·「Wie ICM im Poker funktioniert」… · **표 1**(5행) th 축어 = 「Spieler / **Stacks nach dem Fold** / **ICM-EV** / Stacks nach Call und Gewinn / ICM-EV / Stacks nach Call und Verlust / ICM-EV」 · FAQ 0 |
| icmizer.com (icm #1) | 221 | 🔴 **H 태그 0개** · 표 0(계산 후 생성) · 라벨 «1st payout»~«15th payout» · «Stack #1»~«Stack #15» · «Number of players / Payouts / Stacks / Results / CALCULATE» — **전부 영어** |
| holdemresources.net (icm #3) | 83 | h3 「ICM Calculator」 + h4 «Stacks»·«Prizes»만 · 표 0 · 산문 1문단 |
| mttdb.com (icm #5) | — | 🔴 **Cloudflare 챌린지**(20초 대기도 통과 못 함) — 판정 불가 |

**공통형 = 도구 + (표 0~2) + FAQ**. 독일어 SERP에 **없는 것**: 스트리트 3열 아웃츠 표 · 수트 가중 프리플롭 매치업 표 · ICM Deal vs Chip Chop **병렬 열** · SPR 구간표 · M 존표 · AA vs N명 표.
→ de 차별점 = **도구 9 + 표 6 + FAQ 18 + 열거/Monte Carlo 명시 + Chip-Chop 열 + TDA 2024 Rule 5 FAQ**(pt와 동형).
🔴 경쟁 FAQ는 «Was ist…?/Wie berechnet man…?» **정의형이 지배**한다 — 그 자리는 형제 글이 이미 갖고 있다(§6). 우리 FAQ는 **계산기형**으로 튼다.

## 5. GSC (`/de/calculator` · 90일)

09-17 신설 · 노출 0 · 쿼리 0. 다음 28일 창(10/15경)에서 쿼리 단위 첫 판독(«poker rechner» · «poker wahrscheinlichkeiten rechner» · «icm rechner» 축).

## 6. 형제 글 소유권 (grep 실측 · 카니발 경계)

| 자리 | 소유 글 | 축어 |
|---|---|---|
| «Poker Wahrscheinlichkeiten **Tabelle**» | `holdem-probability` | title 축어 · desc 「…alles in einer Tabelle」 |
| «Pot Odds **berechnen**» | `holdem-pot-odds` | title · H2 「Pot Odds berechnen (Schritt für Schritt)」 · FAQ 「Wie berechnet man Pot Odds schnell?」 |
| «**Faustregel**» 개념 | `holdem-outs` · `holdem-probability` · **`holdem-pot-odds`**(09-18 SEO 렌즈가 찾은 3번째) | H2 「Outs im Kopf umrechnen: die Faustregel」 · 「…im Kopf berechnen: die Faustregel」 · **「Outs in Equity umrechnen: die Faustregel」(L151)** |
| «Faustregel **정확도**» | 🔴 `holdem-probability` **FAQ** | FAQ L251 「Wie genau ist die Faustregel bei vielen Outs?」 — **근거 수치 60% ↔ 54,1%가 우리 것과 동일**이었다 |
| «ICM vs Chip EV» | 🔴 `holdem-icm` **FAQ + H2** | FAQ L225 「Was ist der Unterschied zwischen ICM und Chip EV?」 · H2 L107 |
| «Chip Chop vs ICM Deal» | 🔴 `holdem-icm` **FAQ** | FAQ L229 「Was ist ein ICM Deal, und wie unterscheidet er sich von einem Chip Chop?」 — 답의 «save-and-chop 중간형» 순서까지 동일 |
| «버블에서 폴드» | 🔴 `holdem-bubble` **FAQ** | FAQ L219 「Solltest du an der Bubble folden?」 |
| «Wie viel Equity zum Callen» | 🔴 `holdem-pot-odds` **H2 + 표** | H2 L86 + 7행 표(L96~106) — 우리 quickRef[3] 9행 표의 **부분집합** |
| «Wie wird ICM **berechnet**?» | `holdem-icm` | H2 + FAQ 축어 2곳 |
| «**Brauche ich einen Equity-Rechner?**» | `holdem-equity` | 🔴 FAQ 축어 — 계산기 FAQ가 이 질문을 반복하면 정면 충돌 |
| «Equity **berechnen**» · Fold Equity | `holdem-equity` | seoTitle 「…Equity berechnen Poker」 · 「Fold Equity」 60회 |
| 족보·Starthände 표 | `holdem-hand-rankings` · `holdem-starting-hands-chart` | 탭 라벨로만 |

🔴 **이 표의 처음 판(09-18 오전)은 title·H2만 봤다가 위 🔴 5행을 통째로 놓쳤다.** SEO 렌즈가 형제 FAQ를 전수 대조해 잡았다.
→ **소유권은 «title·H2·FAQ» 셋으로 잰다.** 계산기 FAQ 18문항은 형제 글 FAQ 100+문항과 경쟁한다(§9 인계).

🟢 **«Rechner»를 title에 쓰는 형제 글은 0건**(렌즈 재검증: **H2까지 넓혀도 0** — `grep -nE '^## .*(Rechner|Calculator)' lib/posts-de/*.ts` 0건) → 계산기가 «Poker-Rechner»·«Wahrscheinlichkeiten Rechner» 축을 온전히 가져간다.
🟢 **역방향 누수 없음**: de 형제 글은 계산기 의도를 이미 `/de/calculator`로 보낸다(**16곳 = 마크다운 앵커 13 + HTML CTA 카드 3** · 9편 — bubble 3 · icm 4 · short-stack 3 · drawing-odds · equity · implied-odds · outs · pot-odds · rules-for-beginners). `/de/solver` 링크는 **0건**이다(렌즈 실측) — pt의 «/solver로 샌다» 문제는 de에 **없다**. 앵커 축어 13 = 「Poker-Rechner」 5 · 「ICM-Rechner」 4 · 「ICM-Deal-Rechner」 1 · 「Poker-Odds-Rechner」 1 · 「Rechner」 2.
  - 🪶 **첫 판은 「14곳」이라 적었는데 자기 나열의 합이 16이었다**(3+4+3+1×6). 집계 수와 나열을 같이 적을 땐 더해서 맞춰라.

## 7. 값이 없어 쓰지 않은 것 (창작 금지)

| 항목 | 왜 |
|---|---|
| **Omaha 계산기**(«poker rechner omaha» · «poker odds calculator omaha» · PAS «Omaha poker wahrscheinlichkeiten» · poker.de 위젯은 6종 지원) | 🟠 **미구현 수요**(es·pt와 동일) — FAQ에 «못 한다»로 넣지 않는다 |
| **«Poker Chips Verteilung Rechner» · «poker rechner chips» · «poker blinds rechner» 20**(PAS) | 🔴 **의도 다름** = 홈게임 칩 분배·블라인드 구조(로컬보이스 §2 「홈게임 실무 수요」). 카니발 금지 규율 §1(BB) |
| **«poker wahrscheinlichkeiten pdf» · «zum ausdrucken»**(PAS 2회 · 로컬보이스 §2 「인쇄물 문화」) | 🟠 실재 수요지만 **우리에게 PDF가 없다** — 만들지 않았으므로 쓰지 않는다(후속 후보) |
| «Quotenrechner» 210 | 스포츠베팅 오염(§1-A) |
| «poker kalkulator» 390 | 폴란드어 |
| equilab 390 · pokerstove 30 | 브랜드 |
| poker simulator 390 | 게임 의도 |
| equity/icm/implied odds «Bedeutung/Definition/Erklärung» | 정의형 = 각 블로그 소유(§6) |
| 경쟁 FAQ «Kannst du den Poker Rechner beim **Online**-Poker verwenden?» | 사이트 약관 문제 — EN 뱅크 §3 규율대로 다루지 않는다(우리 고유 FAQ는 **라이브 테이블**의 TDA 축) |
| 경쟁 FAQ «Was ist die Wahrscheinlichkeit einen Royal Flush zu bekommen?»(PAA) | 정의·확률표 = `holdem-probability` |

## 8. 채택 (2026-09-18)

- **제목** `Poker-Odds-Rechner – Equity, Wahrscheinlichkeiten & ICM`(55자 · 브랜드 포함 70)
  - 앞머리 = 승인 CTA **«Poker-Odds-Rechner»**(50 · §3-E의 «CTA 볼륨 0» 사례와 달리 **살아 있다**)를 유지하되, 그 안에 머리어 «poker rechner» 260 + 영문 머리어 «poker **odds** calculator» 590의 토큰이 둘 다 들어간다.
  - 둘째 토큰 «Wahrscheinlichkeiten» = «poker wahrscheinlichkeiten rechner» 210. 🔴 형제 글이 소유한 것은 «Wahrscheinlichkeiten **Tabelle**»이지 «Rechner»가 아니다(§6) — 분리 성립.
  - 🔴 **«Quoten»·«Kalkulator»·«Harringtons M»·«SPR»·«Faustregel» 단독은 제목 금지**(오염 · settled §1 · 형제 소유).
- **설명**(157자) — «Kostenloser Poker-Rechner» 선두 + 9도구 나열 + «ohne Anmeldung».
- **Equity 탭** «Equity»(sub «Hand gegen Hand») · 결과 열 «Spieler / Hand / Sieg / Split / Equity» — 🔴 코퍼스 «Split Pot» 20 · «Gleichstand» 19 · «unentschieden» 15 중 **표 헤더는 짧은 «Split»**, 본문 결과는 «Split Pot».
- **«Runouts»는 코퍼스 축어**(「den einen Runout geliefert」·「solcher Runouts」) → Monte Carlo 설명에 그대로. 🔴 **«Runden»으로 옮기지 않는다** — 코퍼스 「Runde」 100+는 전부 **베팅 라운드/오빗**이다(pt «rodada» 함정 §3-G 동형, de에서 회피 성공).
- **아웃츠 3스트리트** «Flop → River / Flop → Turn / Turn → River»(코퍼스 원어 Flop·Turn·River).
- **4/2 규칙** = **«Faustregel»**(검색어 · 코퍼스 33 · PAS 2회) · 병기 «Regel der 2 und 4»(코퍼스 6:2). quickRef 3표 열 이름 = «Faustregel 4 · 2».
- **ICM 입력 라벨은 코퍼스를 따른다** — PokerFirma 위젯이 «**Chipstände**»를 쓰지만 우리 코퍼스는 **0건**이고 «Chipstack(s)» 19 · «Stacks» 149다(pokerlistings 기사도 독일어 산문에 «Stacks»를 섞어 쓴다). → 현행 «Chipstacks der Spieler» 유지. 「한 경쟁사의 표기 = 시장 표준」이 아니다. 다만 «**Preisgelder**»는 양쪽이 일치해 그대로 두고, «Geld nach Deal»은 우리 결과 열(«ICM Deal»)과 의미가 같아 채택하지 않는다.
- **용어**(terms-de + 코퍼스 grep): Equity 314 · Bubble 171(🔴 «Blase» 0) · Pay Jumps 19 · Preispool 25(«Preisgeldtopf» 0) · Final Table 21 · Coinflip 12 · Underdog 9(«Außenseiter» 0) · Matchup 10 · Chip Chop 10 · ICM Deal 10 · Split Pot 20 · Runout · Fold Equity 60(🔴 «Faltrate»류 역어 금지 — §3-E 교훈) · Board(«Tisch»와 충돌 없음 — es «mesa» 함정 회피) · 족보는 terms §1 독일어(Paar·Zwei Paare·Drilling·Straße·Vierling) + 영어(Flush·Full House·Straight Flush·Royal Flush·High Card).
- **숫자** = de-DE(`numberLocale: "de-DE"` · 소수 콤마 · 천단위 점). 🔴 **코퍼스 실측 = 소수 콤마 3,399 : 점 179**(pt 1,637 : 0과 같은 결) → `check:calc-parity`의 `numL` 정규화 경로.
- **FAQ 8 → 18**: EN 17 명제 + de 고유 1 = **«Darf man am Pokertisch einen Rechner benutzen?»**(1차 출처 `docs/sources/tda-2024-rules-v1.txt` Rule 5-A·5-C·5-D · es·zh-hant·pt 선례 · 경쟁 FAQ 축은 «온라인»이지만 그건 약관 문제라 §7대로 제외하고 **라이브 테이블**로 튼다 · 합법성 축 금지).
  - 형제 글 FAQ와 충돌 회피(§6): «Wie wird ICM berechnet?»(holdem-icm) → **«Wie benutze ich den ICM-Rechner?»** · «Brauche ich einen Equity-Rechner?»(holdem-equity) → 그 질문은 **쓰지 않는다**, 대신 «Wie rechnet ein Poker-Odds-Rechner?» · «Wie berechnet man Pot Odds schnell?»(holdem-pot-odds) → **«Welche Formel benutzt der Pot-Odds-Rechner?»** · «die Faustregel»(holdem-outs·probability H2) → **«Wie genau ist die Faustregel?»**.
- **ICM Deal 새 예시**(EN 동형 · 45/25/18/12 · $2.300) — 옛 예시(50/30/20 · $1.500 · 618/485/397)는 `lib/posts-de/holdem-icm.ts` 「ICM Deal vs Chip Chop」 절과 표까지 동일(카니발 · 그 글 L170이 축어 「$97 mehr」).
- **딜러 렌즈 EN 정정 12항** 동반 + 브리프 §5 회灌(orHigher · ×2 오차 서술 · 가중 평균 · 오버카드 정의 · save-and-chop «next payout» · «Raise callen» 명시) · 관련 글 6 → 8(holdem-icm · holdem-short-stack · holdem-implied-odds 편입, holdem-tournament 제외).

## 9. 다음 로케일 인계 (fr)

- 🟢 **ICM 약어 오염은 로케일마다 «없을 수도» 있다** — es=IMC(BMI) · pt=ICMS(세금)+IMC였지만 **de는 0**(자동완성 3시드 30개 전부 포커). 독일어 BMI는 «BMI»라 충돌이 없다. fr는 «ICM»이 무엇에 덮이는지 **자동완성으로 먼저**(프랑스어 BMI = «IMC» → es와 같은 결일 가능성 높다).
- 🔴 **오염은 약어에만 오는 게 아니다** — de는 «Quotenrechner»(스포츠베팅) · «chip chop»(햄) · «equity rechner»(금융) · «harrington m»(재킷 브랜드) · «poker kalkulator»(폴란드어)로 **5갈래**가 샜다. 시드마다 «확장 10개가 내 업종인가»를 본다.
- 🔴 **경쟁사 표기를 검색어로 착각하지 마라** — SERP 1위가 쓰는 말(«Quotenrechner»)이 볼륨 0일 수 있다. 번역체 시장(로컬보이스가 「번역체 잔재」를 적어둔 곳)일수록 더 그렇다.
- 🔴 **영문 머리어가 자국어의 2배 이상일 수 있다**(de 590 : 260). 제목은 자국어 명사 + 영문 토큰(«Odds»)의 합성 compound로 둘을 한 번에 먹는다.
- 🪶 4/2 규칙처럼 **EN 이름을 직역한 형태가 자동완성 전멸**일 수 있다 — 그 나라의 «rule of thumb» 단어(de «Faustregel»)를 PAS·코퍼스로 찾아라.
