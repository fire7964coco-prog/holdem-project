# 🅲 ar 도구 회차 1 브리프 — `/ar/calculator` + `/ar/hand-chart` (2026-10-14 A 구간)

> 정본 = `docs/tool-lanes-2026-10-14.md` §1·§2 🅲. **B 구간은 이 파일 하나만 입력으로 쓴다.** 진행 = `docs/tool-lanes/ar-tools-진행.md`.
> 출처 구분 표기: 〔실측〕= 레인이 직접 센 값 · 〔코퍼스〕= `lib/posts-ar/` 8편 grep · 〔DFS〕= DataForSEO · 〔아스트라〕= A-교차 채택분(본체 재확인 후) · 〔Fable〕= 카피 서브(글자 수는 Opus 재측정).

## 0. 틀 (구조·키 = 선례 그대로)

| 무엇 | 틀 | 이유 |
|---|---|---|
| 사전 문구의 원천 | `components/calculator/dict.ts` `CALC_DICT_EN` · `app/en/calculator/faq.ts` · `components/hand-chart/dict.ts` `HAND_CHART_DICT_EN` · `app/en/hand-chart/faq.ts` | §13 — 수치·카드는 EN 축어. 10-06 이후 EN·공용 변경 0건(`git log --since=2026-10-06`) |
| 링크 구조의 틀 | `git show a7e5279d:app/tr/calculator/dict.ts` · `git show a7e5279d:app/tr/hand-chart/dict.ts` | 🔴 **tr 회차 2 당시 tr 글 8편 = 지금 ar 8편과 슬러그가 정확히 같다.** quickRef ①~⑤ link 비움 · ⑥만 `holdem-tournament-vs-cash-game` · deal.linkLead/link 생략 · shortStackLink = `holdem-all-in-rules` · related = 실재 8편 전수 · 차트 related = 실재 글 4 + 계산기 1 · 솔버 = 이름만(링크 없음) |
| 파일 골격 | `app/ru/calculator/page.tsx`(10-13 · 최신) · `app/vi/hand-chart/page.tsx` | page.tsx 메타·JSON-LD 구조 |
| 문체 참고 | `app/hi/calculator/dict.ts`(비라틴 + `en-US` 숫자 선례) | |

## 1. 만들 것 · 고칠 것

| 파일 | 일 |
|---|---|
| `app/ar/calculator/dict.ts` | 신설 `CALC_DICT_AR: CalcDict` |
| `app/ar/calculator/faq.ts` | 신설 `CALCULATOR_FAQ_AR` — EN 17문항 그대로(질문·답 수치 EN 축어) |
| `app/ar/calculator/page.tsx` | 신설 — locale `ar` · openGraph locale `ar_AR` · inLanguage `ar` · Breadcrumb «الرئيسية» → `/ar` |
| `app/ar/hand-chart/dict.ts` · `faq.ts` · `page.tsx` | 신설 — EN FAQ 5문항 |
| `lib/calculator-alternates.ts` | `CALCULATOR_LOCALES`에 `"ar"` · `"ar": \`${SITE}/ar/calculator\`` — 🔴 hreflang 코드 = 지역 없는 **«ar»**(`lib/tournaments-hreflang.ts`가 `ar` 그대로 · 독자 = 아랍권 전체라 «ar-SA» 같은 한 나라 코드를 붙이지 않는다 · 다른 줄의 vi-VN·tr-TR과 모양이 다른 이유를 주석 한 줄로) · openGraph locale = `ar_AR`(`lib/intl.ts` L41) |
| `lib/hand-chart-alternates.ts` | 같은 방식 |
| `lib/hub-routes.ts` L117~119 | `ar: ["/ar/calculator", "/ar/hand-chart", "/ar/tournaments"]` + 주석 «⚠ solver·calculator 없음» 갱신(solver만 없음) |
| `components/side-rail.tsx` L378~387 | ar 배열에 🧮 계산기 · 📊 차트 2줄(라벨 = 각 HubPage title 축어) + 주석 갱신 |
| `components/intl-blog-post-client.tsx` `CALC_CTA_LABELS` | `ar: { title: <HubPage title>, subtitle: "الإكويتي والأوتس وبوت أودز فورًا" }`(형제 부제 «Equity, outs and pot odds instantly»의 세 용어를 §2 표기로) |
| `scripts/generate-sitemap.mjs` | `/ar/calculator`(0.7) · `/ar/hand-chart`(0.7) 각 한 줄 |
| `docs/keyword-bank/ar-tools.md` | A에서 작성 완료 |
| 🔴 **하지 않음** | `public/sitemap.xml` 커밋 · 다른 로케일 파일 · 공용 컴포넌트(`components/calculator/*`·`components/hand-chart/*`) · `lib/posts-ar/*` 본문(§6 헤드 요청) |

## 2. 용어표 (도구 화면·FAQ 공통)

| EN | 채택 | 근거 |
|---|---|---|
| poker calculator (도구 이름) | **حاسبة احتمالات البوكر** | 〔코퍼스〕 `texas-holdem-rules-for-beginners.ts` L450 앵커 축어 |
| starting hand chart | **مخطط الأيدي الافتتاحية** | 〔코퍼스〕 같은 줄 앵커 · «الأيدي الافتتاحية» 10 : «الأيدي الابتدائية» 0 · «مخطط» 2 |
| starting hands | الأيدي الافتتاحية | 〔코퍼스〕 10 |
| equity | **الإكويتي** (첫 등장 «الإكويتي (Equity)») · 표 머리·칩은 Equity 라틴 허용 | 〔코퍼스〕 الإكويتي/إكويتي 3 · 표 안 라틴 «Equity» 4 |
| outs | **الأوتس** | 〔코퍼스〕 8 : outs 1 |
| pot odds | **بوت أودز** (FAQ 첫 등장 «بوت أودز (احتمالات القدر)») | 〔코퍼스〕 8 : 5 · H2 «بوت أودز — …» |
| pot | **البوت** | 〔코퍼스〕 117 : القدر 33 |
| implied odds | 🆕 → §5 신규 용어(아스트라 판정 대기) | 코퍼스 0 |
| chips | الرقائق | 〔코퍼스〕 59 : الفيشات 0 |
| stack | الستاك | 〔코퍼스〕 21 : الرصيد 7 |
| position | **المركز / المراكز** (المراكز المبكرة/المتأخرة) | 〔코퍼스〕 المركز 13 · المراكز 10(«حسب المركز» · «المراكز المتأخرة») |
| suited / offsuit | «من النقش نفسه (suited)» / «من نقشين مختلفين (offsuit)» · 표·버튼은 suited/offsuit 라틴 | 〔코퍼스〕 각 1 (169 설명 문장) |
| pocket pair | زوج (أزواج) | 〔코퍼스〕 زوج 95 |
| range | نطاق / نطاقات | 〔코퍼스〕 12 · 6 · رينج 0 |
| combo(s) | تركيبة / تركيبات | 〔코퍼스〕 تركيبة 3 · كومبو 0 |
| bubble | Bubble (라틴) | 〔코퍼스〕 라틴 14 : الفقاعة 0 |
| ICM deal · chip chop | 🆕 §5 | 코퍼스 0 |
| win · tie | فوز · تعادل | 〔코퍼스〕 الفوز 20 · تعادل 21 |
| random hand | يد عشوائية | 〔코퍼스〕 1 |
| fold · call · raise · check · all-in | الطي · المجاراة · الزيادة · التمرير · أول إن | 〔코퍼스〕 48 · 64 · 57 · 45 · 181 |
| flop · turn · river · preflop | الفلوب · التيرن · **النهر** · ما قبل الفلوب | 〔코퍼스〕 187 · 42 · 87(الريفر 13) · 40 |
| board | البورد / الأوراق المشتركة | `docs/translation-terms-ar.md` |
| kicker | الكيكر | 〔코퍼스〕 25 |
| heads-up | الهيدز أب | 〔코퍼스〕 19 |
| button | الزر (BTN) | 〔코퍼스〕 71 |
| tournament · cash | البطولة · الكاش | 〔코퍼스〕 43·75 · 100 |
| 족보 이름 | `docs/translation-terms-ar.md` 족보 줄 그대로(رويال فلاش … ورقة عالية) | 용어 정본 |
| ICM · SPR · M · BB · UTG · HJ · CO · BTN · SB · GTO | 라틴 그대로 | 용어 정본 «포지션 약어는 영어 그대로» |
| 2인칭 | أنت | 용어 정본 · 〔코퍼스〕 46 |
| 문장부호 | 아랍어 쉼표 «،» · 물음표 «؟» | 용어 정본 |

## 3. 숫자 규칙

- 〔실측〕 서양 숫자 4,432 : 아랍-인도 숫자 0 · «%» 36 : «٪» 2 · «٫» 0 · 소수 «.»(43.8% · 23.5%) · 천단위 «,»(1,326 · 198,000).
- → `numberLocale: "en-US"`(hi 선례 — 🔴 Node 실측: `"ar-SA"`·`"ar-EG"` = «١٬٣٢٦٫٥» · `"ar"` = «1,326.5»지만 기본 숫자 체계가 ICU/CLDR 판마다 달라 서버(SSR)와 브라우저가 갈릴 수 있다 → 하이드레이션 불일치 위험이 없는 `en-US`) · `percentGap`·`percentPrefix` **키 없음**(«35.4%»).
- 배당 비율 = «2.7:1»(용어 정본) — 코퍼스 «2.7 إلى 1»도 있으니 FAQ 산문은 EN이 «to 1»이면 «إلى 1», «:1»이면 «:1».
- 카드 = 라틴+무늬 기호(A♠ K♥ 10♦) · 핸드 코드(AKs·T9s·QJo) EN 그대로.
- RTL 안의 숫자·카드는 브라우저 bidi가 LTR로 읽는다 — 문자열 안에 LRM 등 제어문자를 넣지 마라(C에서 화면으로 판정).

## 4. 확정 카피

〔Fable〕 2안씩 → Fable 추천 조합 채택. 글자 수 = Opus `.length` 재측정(UTF-16 = 코드포인트 동일).

| 자리 | `/ar/calculator` | `/ar/hand-chart` |
|---|---|---|
| seo.title (= page.tsx metadata · check:seo-sync) | «Poker Calculator — حاسبة احتمالات البوكر وبوت أودز وICM» **55** | «Poker Hand Chart — مخطط الأيدي الافتتاحية حسب المركز» **52** |
| seo.description | «كم مرة تربح يدك فعلًا؟ احسب الإكويتي وبوت أودز والأوتس وSPR وICM في مكان واحد — حاسبة احتمالات البوكر مجانية بـ9 أدوات، بلا تسجيل.» **130** | «أي يد تفتح من مقعدك؟ مخطط تفاعلي لكل الأيدي الافتتاحية الـ169 ملوّن حسب المركز من UTG إلى SB — اضغط على مركزك لتظهر أيدي الفتح وحدها.» **133** |
| hero.h1 | «Poker Odds Calculator»(EN 축어 · vi «Poker Calculator» 선례와 달리 EN H1 유지) | «Poker Hand Chart»(실측 머리어 20·30 · vi 선례) |
| h1Sub / lead 첫 문장 | «حاسبة احتمالات البوكر: الإكويتي وبوت أودز وICM في مكان واحد» | «كل الأيدي الافتتاحية الـ169 ملوّنة حسب المركز (من UTG إلى SB).» + «اضغط على مركز لتُبرز أيدي الفتح من ذلك المقعد فقط.» |
| HubPage title = 사이드 레일 라벨 = 글 CTA title | «حاسبة احتمالات البوكر» | «مخطط الأيدي الافتتاحية» |
| openGraph.title | «حاسبة احتمالات البوكر — HoldemMaster» | «مخطط الأيدي الافتتاحية — HoldemMaster» |
| hand-chart `seo.keywords` | — | poker hand chart · poker starting hand chart · preflop chart · مخطط الأيدي الافتتاحية · الأيدي الافتتاحية في البوكر (🔴 GTO 넣지 않음) |

- Fable 메모 반영: desc의 «رهان»(bet)은 코퍼스 정본(الرهان 250)이라 유지 가능하나 채택안에는 없다 · «نطاق»도 코퍼스형(§2).
- seo.title의 «وICM»·«وSPR»처럼 아랍 접속사 و가 라틴에 붙는 형태는 코퍼스 «وICM»(tournament-vs-cash-game desc) 선례 — C에서 렌즈가 재판정.

## 5. 신규 용어 (코퍼스 0)

| EN | 채택 | 근거 |
|---|---|---|
| implied odds | الاحتمالات الضمنية (첫 등장 «(Implied Odds)») | GGPoker ar 블로그 제목 〔아스트라〕 |
| ICM deal | صفقة ICM | GGPoker ar final table 축어 〔아스트라 · 본체 재확인〕 |
| chip chop | Chip Chop + 첫 등장 «تقسيم الجوائز بحسب حصص الرقائق» | 아랍어 표기 실증 없음 → 라틴 〔아스트라〕 |

첫 등장 풀이(새 수치 없음 · 〔아스트라〕 처방 채택): equity «حصتك المتوقعة من البوت، مع احتساب التعادل»(🔴 equity를 «نسبة الفوز»라고만 부르지 마라 — 무승부 몫이 빠진다) · pot odds «نسبة حجم البوت إلى المبلغ المطلوب للمجاراة» · Bubble «المرحلة السابقة مباشرة لدخول المراكز المدفوعة» · SPR «نسبة الستاك إلى البوت» · M «مؤشر M» · board 첫 등장 «الأوراق المشتركة (البورد)» · suited/offsuit는 «اللون»으로 풀지 마라(색이 같은 두 무늬가 있다).
- 표의 «win» 열 = «الفوز», «tie» = «التعادل», «equity» 열 = «Equity» 라틴(EN 표 머리와 같은 칸 폭 — C에서 잘림 판정).

## 6. 링크 대상 (실재 슬러그만 · `ls lib/posts-ar/`)

`holdem-all-in-rules` · `holdem-betting-actions` · `holdem-blind-meaning` · `holdem-game-order` · `holdem-hand-rankings` · `holdem-showdown-rules` · `holdem-tournament-vs-cash-game` · `texas-holdem-rules-for-beginners` — 8편. title/desc는 각 글 title·seoTitle·desc 축어 범위 안(settled §3-A).
- 계산기: quickRef ①~⑤ link 비움(note는 자립 문장으로 끝낸다) · ⑥ `holdem-tournament-vs-cash-game` · `deal.linkLead/link` 생략(ar에 holdem-icm 없음) · `shortStackLink` = `holdem-all-in-rules` · related = 8편 전수.
- 차트: related = `texas-holdem-rules-for-beginners` · `holdem-hand-rankings` · `holdem-betting-actions` · `holdem-game-order` + `/ar/calculator` · 솔버 문장 = 이름만(`/ar/solver` 없음 — 범위 밖).

## 7. §13 자리

- 계산기 FAQ 17 · quickRef 표 · ICM 예시 · 차트 FAQ 5(«42%» BTN · 169 · 1,326) — **전부 EN 값 축어.** 엔진 출력은 공용 컴포넌트가 낸다.
- 🔴 차트를 «솔버가 계산한»·«GTO»로 부르지 마라(EN 문자열에 남은 «GTO»는 상속 결함 — `components/hand-chart/dict.ts` L12~14). EN notes «GTO-based approximations»는 tr 회차 2처럼 «공개 자료 기반 표준 오픈 레인지 추정»으로.

## 8. 하지 말 것

`/ar/solver`·`/ar/glossary` · 공용 컴포넌트 수정(RTL 격자 포함 — 진행 파일 «헤드 요청» H-1) · 다른 로케일 · 사전 키 추가/삭제 · 백틱 · `public/sitemap.xml` 커밋 · push·stash·checkout main.
