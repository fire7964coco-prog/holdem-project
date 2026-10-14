# 🅲 ar 도구 회차 2 브리프 — `/ar/win-rate-quiz` (2026-10-14 A 구간)

> 정본 = `docs/tool-lanes-2026-10-14.md` §1·§2 🅲. **B 구간은 이 파일 하나만 입력으로 쓴다.** 진행 = `docs/tool-lanes/ar-tools-진행.md`.
> 출처 표기: 〔실측〕 레인이 직접 센 값 · 〔코퍼스〕 `lib/posts-ar/` 8편 + `app/ar/{calculator,hand-chart}/{dict,faq}.ts` grep(10-14) · 〔R1〕 회차 1 브리프·C 판정표에서 확정된 표기 · 〔DFS〕 · 〔아스트라〕 A-교차 채택분(본체 재확인) · 〔Fable〕 카피 서브(글자 수 = Opus 재측정).
> 상태: **확정 (A 끝 · 2026-10-14)** — 🟠 표시 행은 §7 아스트라 판정(본체 원문 재확인)으로 확정됐다.

## 0. 틀

| 무엇 | 틀 | 이유 |
|---|---|---|
| 사전 문구의 원천 | `app/en/win-rate-quiz/win-rate-quiz-client.tsx` `EN_UI` · `app/en/win-rate-quiz/page.tsx` | §13 — 수식·분기·인자·숫자는 EN 바이트 그대로 |
| 수 일치·포맷 함수의 틀 | `app/ru/win-rate-quiz/win-rate-quiz-client.tsx`(`pl()`·`n()` 헬퍼 꼴) | 굴절 언어 선례 |
| 파일 골격·등록 자리 | `4a26acb9`(zh-hant · 10파일) = `7efdcdd3`(ru) 자리 | 최신 선례 |
| 용어 | 〔R1〕 `docs/tool-lanes/ar-tools-r1-brief.md` §2·§5 + `ar-tools-진행.md` C 판정표 + `app/ar/calculator/dict.ts` | 같은 독자가 계산기 → 시뮬레이터로 넘어온다 — 같은 낱말이어야 한다 |

## 1. 만들 것 · 고칠 것

| 할 일 | 파일 | 자리 |
|---|---|---|
| 신설 | `app/ar/win-rate-quiz/page.tsx` | 틀 = zh-hant page · canonical/og url `/ar/win-rate-quiz` · og locale **`ar_AR`**(`lib/intl.ts` · R1과 같음) · jsonLd `inLanguage: "ar"` · 브레드크럼 1 = `${SITE}/ar` «الرئيسية» · `HubPage locale="ar"` · 머리 주석에 DFS 근거(§4) |
| 신설 | `app/ar/win-rate-quiz/win-rate-quiz-client.tsx` | 틀 = EN client — 키·분기·인자·JSX 구조 동일 · 컴포넌트명 `WinRateQuizClientAr` · `AR_NAMES`/`AR_UI` · 🔴 **`solverLang: "en"`**(§6) · 퍼센트 키(decimalComma·percentPrefix·percentGap) **넣지 않는다** · 숫자 `toLocaleString("en-US")` |
| 1줄 | `lib/win-rate-quiz-alternates.ts` | LOCALES 끝에 `"ar"` + `"ar": \`${SITE}/ar/win-rate-quiz\`` — 🔴 코드 = 지역 없는 **«ar»**(R1 `lib/calculator-alternates.ts`와 같게 · 주석 한 줄) |
| 1줄 | `lib/hub-routes.ts` L120 | `ar` 배열 **끝**에 `"/ar/win-rate-quiz"`(vi·hi 선례 = 맨 뒤) + 주석 한 줄 «★2026-10-14 tool-lanes 🅲 회차 2» |
| 1줄 | `components/side-rail.tsx` L387~392 | ar 블록에 `{ href: "/ar/win-rate-quiz", icon: "📈", label: <HubPage title 축어> }` — hand-chart 뒤 · tournaments 앞(vi L348 선례) + 주석 한 줄 |
| 1줄 | `scripts/generate-sitemap.mjs` | `{ path: "/ar/win-rate-quiz", priority: "0.7", changefreq: "monthly" }`(zh-hant 줄 뒤) |
| ✖ 없음 | 솔버 랜딩 «어느 도구» 행 | `/ar/solver`가 없다(범위 밖) — zh-hant·ru의 `solver-client.tsx` 한 줄에 해당하는 자리 없음 |
| 완료 | `docs/keyword-bank/ar-tools.md` §5 | A에서 작성 |
| 🔴 금지 | `public/sitemap.xml` 커밋 · 다른 로케일 · 공용 `_simulator.tsx`·`_engine`·`_equity`·`_solver-link` · `lib/posts-ar/*` | RTL 결함은 §8 헤드 요청으로 |

## 2. 용어표 (EN UI → ar)

R1 확정분은 그대로 상속(fold «الطي/اطوِ» · call «المجاراة/جارِ» · raise «الزيادة» · check «التمرير» · all-in «أول إن» · equity «الإكويتي» · outs «الأوتس» · pot «البوت» · pot odds «بوت أودز» · implied odds «الاحتمالات الضمنية (Implied Odds)» · range «نطاق» · combo «تركيبة/تركيبات» · board «البورد» · hole cards «ورقتاك الخاصتان» · stack «الستاك» · chips «الرقائق» · draw «درو» · semi-bluff «نصف خداع (Semi-bluff)» · bluff «خداع» · set «سيت» · positions 라틴 약어 · 2인칭 «أنت» · «،» «؟»).

| EN | 채택 | 근거 |
|---|---|---|
| streets | **ما قبل الفلوب · الفلوب · التيرن · النهر** | 〔코퍼스〕 44 · 226 · 63 · 106(الريفر 13) |
| street(s) 일반명 | **الجولة**(«كل جولة» · «جولة بعد جولة») | 〔코퍼스〕 الجولة 18 · جولة الرهان 5 ↔ الشارع 3 · الشوارع 0 |
| You | أنت | R1 |
| Folded (좌석 상태) | **طوى** | 〔코퍼스〕 동사형 «طوى الجميع» · R1 차트 «إذا طوى الجميع قبلك» |
| Raise · Call · Check · All-in (액션 배지) | زيادة · مجاراة · تمرير · أول إن | 〔코퍼스〕 R1 |
| opponent(s) | **الخصم / الخصوم** | 〔코퍼스〕 13 · 17(+خصوم 19) ↔ المنافس 3 |
| players | لاعب / لاعبون·لاعبين | 〔코퍼스〕 «6 لاعبين» 3 · «9 لاعبين» 2 |
| 6-max / 9-handed | **6-max / 9-max** 라틴 | 〔코퍼스〕 6-max 5 · R1 `sixMax: "6-max"` |
| Opponent style | أسلوب الخصوم | — |
| Normal · Tight · Loose · Aggro | 🟠 **عادي · متشدد · متساهل · عدواني** | 〔코퍼스〕 عادي 2 · متشدد 1(«حين يكون الخصوم متشددين») · عدواني 10(«تصرف عدواني» = aggressive action) · متساهل 0 → 아스트라 판정(§7) |
| Win · Tie · Lose | فوز · تعادل · خسارة | 〔코퍼스〕 R1 |
| showdown | **المواجهة**(첫 등장 «المواجهة (الشوداون)») | 〔코퍼스〕 المواجهة 90 · «المواجهة (الشوداون)» 1 |
| split pot | **تقسيم البوت** / «يتقاسمون البوت» | 〔코퍼스〕 2 · يتقاسم 5 |
| mucked | «تُرمى أوراقه دون كشفها» | 〔코퍼스〕 «الرمي» · «كشف» |
| overcard | **ورقة أعلى من كل أوراق البورد (Overcard)** | R1 «ورقتان أعلى من البورد (Overcards)» 꼴 |
| top pair · overpair | **أعلى زوج** · «زوج في اليد أعلى من كل أوراق البورد (Overpair)» | 〔코퍼스〕 أعلى زوج 4 |
| set or trips | «ثلاثية (سيت أو تريبس)» 🟠 | 〔코퍼스〕 سيت 16 «ثلاثية مكوّنة من زوج باليد» · تريبس 0 → 아스트라 |
| flush draw · straight draw | درو فلاش · درو ستريت | 〔코퍼스〕 6 · 4 · 계산기 사전 |
| overbet | «رهان أكبر من البوت (Overbet)» | 코퍼스 0 → 풀이형 |
| half-pot bet · pot-sized raise | «رهان بنصف البوت» · «زيادة بحجم البوت» | 〔코퍼스〕 حجم البوت 6 · نصف البوت 1 |
| opener · defended | «فتح» · «دافع» (배지) / 산문 «صاحب الافتتاح» · «المدافعون» | 〔코퍼스〕 افتتاح 42 · الفتح 16 · دفاع 7 |
| 3-bet · check-raise | 3-bet 라틴 · «تمرير ثم زيادة (Check-raise)» | 〔코퍼스〕 3-bet 8 |
| %p (percentage points) | 🟠 **نقطة مئوية** | 〔코퍼스〕 «بفارق 6.7 نقطة مئوية»(계산기 사전) — 좁은 칸은 C 화면 판정 |
| pts (quiz score) | «النقاط: {n}» 라벨형 | 수 일치 회피(§3) |
| Review | **المراجعة** | 〔코퍼스〕 «يمكنك مراجعة قرار…» 1 · 🟠 아스트라 |
| Quiz | **اختبار** | 〔코퍼스〕 2(일반 의미) · 🟠 |
| slider | **شريط التمرير** | 🟠 «التمرير» = check와 겹침 → 아스트라(대안 «المؤشر») |
| standard error | الخطأ المعياري | 통계 표준어 |
| random seed (fixed) | «بذرة عشوائية ثابتة» | 풀이 |
| log in · account · link · copy · browser · device | تسجيل الدخول · حسابك · الرابط · نسخ · المتصفح · الجهاز | 〔코퍼스〕 رابط 2 · نسخ 11 |
| GTO solver | **سولفر GTO** · 제품명 «HoldemMaster GTO solver» | 〔코퍼스〕 سولفر 2(R1 차트 노트) |
| solver menu «Flop study» | **Flop study** 라틴 그대로 | 앱에 ar UI가 없어 화면이 영어(§6) — 화면에 보이는 라벨 축어 |
| 족보 9종 (`AR_NAMES.categories`) | **ورقة عالية · زوج · زوجان · ثلاثية · ستريت · فلاش · فول هاوس · فور أوف آ كايند · ستريت فلاش** | `app/ar/calculator/dict.ts` L145~146 축어(로열 플러시 제외 9종 = EN_NAMES 순서) |
| `drawingDead` · `flushDraw` · `straightDraw` | «لا فرصة (Drawing dead)» · «درو فلاش» · «درو ستريت» | 〔실측〕 `_simulator.tsx` L1213·1215가 `describeHand(…, false, …)`로만 부른다 → drawingDead 화면 미노출(키는 타입상 필수) · flushDraw·straightDraw는 족보 옆에 붙어 나온다(`_equity.ts` describeHand) |

## 3. 숫자 · 수 일치 · 방향

- 〔실측 R1〕 서양 숫자 4,432 : 아랍-인도 0 · «%» 36 : «٪» 2 → `toLocaleString("en-US")` · 퍼센트 «35.4%» · 퍼센트 키 없음(공용 `pct()`가 en 형을 낸다).
- 🔴 §13: `formulaExpr`·`100 − 4 × …`·`25%p` 수치·`2/4`·`0.25–0.35`·`25/50/75%`·`150%`·`{ANTE}`·`{STACK}`·`SAMPLES` 인자 = EN 바이트 그대로(낱말만 아랍어).
- **수 일치**(아랍어 명사 수: 1 · 2(쌍수) · 3–10(복수 소유격) · 11–99(단수 대격 تمييز) · 100·1000 «바로 뒤»만 단수 소유격 — 🔴 복합수(103·111…)는 끝자리 규칙을 따른다 «103 أوراق» · «111 ورقةً» 〔아스트라 WRONG 채택〕 → 넓은 범위는 아래 라벨형으로 피한다) — `pl()` 헬퍼 하나로:
  - `playersBtn(k)` k=2..6 → 2 «لاعبان» · 3–6 «{k} لاعبين»
  - `vsOpponents(n)` n=0..5 → 0 «لم يبقَ أحد» · 1 «ضد خصم واحد» · 2 «ضد خصمين» · 3–5 «ضد {n} خصوم»
  - `outsLabel(n)` n=1..~21 → 1 «ورقة واحدة تُكمل يدك أو تحسّنها» · 2 «ورقتان تُكملان يدك أو تُحسّنانها»(동사 둘 다 쌍수 〔아스트라〕) · 3–10 «{n} أوراق تُكمل…» · 11+ «{n} ورقة تُكمل…»
  - 수가 변수이고 범위가 넓은 자리(`quizStats` hands·points · `quizResult` points · `rangeCombos` · `reviewInvested` · `wonByFold`)는 **라벨형** «الأيدي: {n}» · «النقاط: {n}» · «التركيبات: {n}»으로 명사 굴절을 피한다(R1 «handsCount» 판단의 일반화).
  - 소수(`gap` · `err` · `avgErr`) + «نقطة مئوية»는 단수 그대로(«3.5 نقطة مئوية» — 코퍼스 «6.7 نقطة مئوية»).
- 화살표: EN «→»(다음으로) = ar «←»(R1 계산기 사전 «تحتاج الخامسة ←» 꼴 · RTL 진행 방향). `revealBtn` · `customStart` · 푸터 링크.
- `reviewMistake(street)`: EN은 `street.toLowerCase()` — ar은 «في مرحلة {street}»(«في مرحلة ما قبل الفلوب»이 자연스럽게 읽히도록).
- 사전 문자열에 LRM·RLM 등 제어문자 넣지 않는다(R1 판단 · 공용 컴포넌트가 문자열을 그대로 찍는다). bidi 결함은 C 화면 → §8.

## 4. 카피

- 머리어 = 영어 **Poker Simulator**(SA 10 · EG 10) + 아랍어 앵커 **محاكي البوكر**(SERP 스니펫 실사용형) + «تدرّب».
- 🔴 «حاسبة»·«احتمالات البوكر»·«نسبة الفوز»(계산기 소유) · «طريقة لعب»·«تعلم»(입문 글 소유) · «اون لاين»·«مجاني» 머리 · «ترتيب» 금지.

〔Fable〕 2안 → **안 A** 채택(Fable 추천 · 안 B는 키워드 나열형 + desc 158자 · 라벨 «محاكي الإكويتي»는 SERP 흔적 0). Opus 조정 1: desc «العب يد» → «العب يدًا»(목적어 대격). 글자 수 = Opus `.length` 재측정.

| 자리 | 확정 카피 | 길이 |
|---|---|--:|
| title 본체(+ « | HoldemMaster» = R1 계산기 page.tsx L18 꼴 · og·twitter 같음) | Poker Simulator — محاكي البوكر: تدرّب واعرف متى تطوي | 52 (접미 포함 67) |
| description | هل كنت ستطوي في الوقت الصحيح؟ العب يدًا 6-max دون رؤية أوراق الخصوم، شاهد الإكويتي في كل جولة وبوت أودز من الفلوب، ثم راجع أين كان الطي هو القرار الصحيح. | 153 (≤160) |
| H1 | Poker Simulator 🃏 (vi·hi 선례 · R1 «H1 = 영어 머리어»와 같은 판단 — Fable 안 «محاكي البوكر 🃏»은 HubPage 라벨로) | |
| H1 부제(sm 이상) | العب اليد دون رؤية أوراق الخصوم، ثم اكتشف أين كان عليك الطي | 59 |
| HubPage title = 사이드 레일 = jsonLd name = 브레드크럼 2 | محاكي البوكر | 12 |
| jsonLd featureList(EN 4줄 재저작 · 새 사실 없음) | «العب يدًا على طاولة 6-max أو 9-max دون رؤية أوراق الخصوم، جولة بعد جولة (2–6 لاعبين)» · «الإكويتي لديك في كل جولة» · «بوت أودز المطلوبة للمجاراة من الفلوب» · «مراجعة بعد اليد لنقطة الطي الصحيحة» | |

## 5. 링크 대상 (실재 확인 10-14 · `ls lib/posts-ar/`)

- 푸터(EN 3링크 꼴 · ru 선례 = pot odds·포지션 글이 없을 때): `/ar/blog/texas-holdem-rules-for-beginners` «كيف تعمل بوت أودز ←»(그 글 H2 «بوت أودز — المفهوم الرياضي…» · H3 «كيف تعمل بوت أودز» 축어) · `/ar/blog/holdem-betting-actions` «تمرير أم مجاراة أم طي؟»(seoTitle 머리 축어) · `/ar/calculator` «حاسبة احتمالات البوكر»(HubPage title 축어).
- 로그인 링크·솔버 링크 = 공용 컴포넌트가 만든다(사전엔 문구만).

## 6. 솔버 링크 판단

- 공용 `_solver-link.ts`가 `lang=${ui.solverLang}`을 붙인다. 솔버 앱 `solver/src/i18n.ts` L64~87 〔실측〕: `lang`이 15개 값 밖이면 **무시**하고 저장값 → 브라우저 언어 → 기본 «en». `ar`은 목록에 없다.
- → `solverLang: "ar"`은 «무시 → 이전에 저장된 다른 언어(예: ko)로 열림» 위험 · **`"en"`을 명시**해 영어 화면으로 확정한다.
- 그래서 «영어 화면» 안내는 **`solverOpen`** 에 넣는다: «افتح قسم Flop study في السولفر (بالإنجليزية)» — `gto` 문장은 `case "spot"`에서만 쓰여 notReady·multiway·table9 진입에선 안 보인다 〔아스트라 RISKY 채택 · EN 원문 L101~112 본체 확인〕. 키 추가 없음.

## 7. 아스트라 A-교차 🟠

gpt-6-astra · 10-14 12:03~12:10 · read-only 스크래치 `astra-ar-tools-r2-A` · 18행: OK 16 · WRONG 1 · RISKY 1.

| 자리 | 아스트라 | 본체 판정 |
|---|---|---|
| 스타일 «عادي · متشدد · متساهل · عدواني» | OK — GGPoker ar «الخصوم متشددين، أو متساهلين، أو عدوانيين، أو سلبيين» | ✅ 채택 — 본체 WebFetch 축어 재확인(https://ggpoker.com/ar/blog/the-cutoff/ 12번 문장 일치 · «اللاعبين المتساهلين» 4번 문장) |
| «ثلاثية (سيت أو تريبس)» | OK — rangecraftpoker ar lexicon «سِت مقابل تريبس» | 채택(유지) |
| «نقطة مئوية» + 소수 단수 | OK — IMF ar «أقل بمقدار 0.1 نقطة مئوية» | 채택(유지) · 정수 단수 고정으로 넓히지 않는다 |
| «المراجعة» · «اختبار» · «شريط التمرير» · «طوى» · «الجولة» | OK(각 원문 축어 제시) | 채택(유지) · 슬라이더 안내는 «حرّك شريط التمرير…»로 동사를 붙여 check와 혼동을 끊는다 |
| «لا فرصة (Drawing dead)» | OK(중) | 유지 — 화면 미노출(§2 실측) |
| 수 일치 1·2·3–10·11–99 예문 | OK(알자지라 문법) | 채택 · 쌍수 동사 둘 다 맞춤 |
| «100+ → 단수 소유격» 일반 규칙 | **WRONG** — «مئة وتسعة وخمسون لترا» | ✅ 채택 — §3 수정(복합수는 끝자리 규칙 · 넓은 범위는 라벨형) |
| 화살표 «←» | OK(Carbon·Apple RTL 지침) | 유지 |
| 머리어 | OK(표현) / 중(검색 적합성) | 유지 · 근거 표기 «게시 원문 실사용»(Play 스토어 페이지) |
| 솔버 영어 안내를 `gto`에만 | **RISKY** — spot 분기에만 나온다 | ✅ 채택 — `solverOpen`으로 이동(§6) |

## 8. RTL — 공용 시뮬레이터 예상 결함 (코드 판독 · C 화면에서 확정 → 헤드 요청)

`_simulator.tsx`에는 locale·rtl 입력이 없다(QuizUI뿐) → 레인이 고칠 수 없다(공용 · 키 추가 금지).
| # | 자리 | 예상 |
|---|---|---|
| R-1 | L666 카드 선택기(✍️ Set hand) `repeat(13)` grid | 랭크 순서가 오른쪽부터(A가 오른쪽) — R1 H-1 계산기 카드 선택기와 같은 증상 |
| R-2 | L710 상대 레인지 13×13 grid(«Show opponent range») | 거울상(suited/offsuit 삼각형 반전) |
| R-3 | L1635·1640 퀴즈 슬라이더 표식 `left:%` vs 네이티브 `<input type=range>` | RTL에서 range 입력은 오른쪽이 0 → 표식(정답·필요 에퀴티·내 추정)과 손잡이가 **반대편** — 🔴 퀴즈 판정 화면이 틀린 그림이 됨 |
| R-4 | L1779 `text-left` 표 머리 · L520 `ml-auto` · L1589/1666 `text-right` | 정렬 어긋남(경미) |
| R-5 | L476 SVG 에퀴티 차트 | SVG 좌표는 dir 무관 → 왼쪽=프리플랍 유지(결함 아님 예상) · 범례 줄 L516~520 flex 순서만 확인 |
→ R1 H-1 처방 꼴(`dir="ltr"`을 격자·슬라이더 래퍼에만 · rtl 로케일일 때만)을 헤드가 판단. 그러려면 공용에 rtl 신호가 필요하다(예: `QuizUI`에 선택 키 `rtl?: true` — 다른 로케일 바이트 불변). 🔴 R-3이 확정되면 배포 차단 조건(R1 H-1과 같은 급).

## 9. 하지 말 것

`/ar/solver`·`/ar/glossary` · 공용 파일 · 다른 로케일 · 사전 키 추가/삭제 · 백틱 · `public/sitemap.xml` 커밋 · push·stash·checkout main · «솔버가 계산한 차트»(레인지 = 공개 자료 합의 레인지).
