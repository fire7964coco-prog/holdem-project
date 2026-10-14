# MA-542 hi 재동기화 — beginners · game-order · betting-actions (레인 hi-a)

- 날짜: 2026-10-14 · 로케일 hi · 마스터 = `lib/posts-en/<slug>.ts` 현 HEAD(EN `updated` 2026-10-13)
- 기준점(base) = `git rev-list -1 --before="<masterUpdated> 23:59" HEAD -- lib/posts-en/<slug>.ts`
  - beginners 07-12 → `ee9e7af8` · game-order 07-02 → `ce948ec2` · betting-actions 07-11 → `2cfd8daa`
- 방법: `git diff <base> HEAD`(word-diff)의 EN 덩어리마다 hi 현행을 대조. hi는 이미 여러 회차(fe93df0d·2e9bc644·6ef48e4e·9b04f781·60a1e91f·7263564a·9c08de94·10e5997b)로 **부분 전파**된 상태였다 → «이미 반영» 덩어리는 손대지 않고 아래 «이미 반영» 열에 기록.
- 프런트매터: 3편 모두 `masterUpdated: "2026-10-13"` · `updated: "2026-10-14"`.

## 1. texas-holdem-rules-for-beginners (본문 18자리)

| # | 위치(H2/문단) | 전(hi 원문 요약) | 후(hi 새 문장 요지) | EN 근거 |
|---|---|---|---|---|
| 1 | tldr | «चार betting राउंड के बाद सबसे अच्छा हैंड जीतता है» | «ज़्यादा से ज़्यादा चार betting राउंड … showdown पर … जब तक बाक़ी सब पहले ही fold न कर दें» | tldr L8 (up to four · unless everyone else folds) |
| 2 | 도입 3문단 뒤 | (없음) | 경험담 1문장 신설 «नीचे लिखी हर बात खेल को असल में चलाने से आई है …» | L34 신설 문장 |
| 3 | ज़रूरी बातें (Key facts) | «button हर हैंड में घूमता है … हर राउंड में बदलता है» | «आम तौर पर हर हैंड के बाद एक सीट आगे … उसके साथ खिसकते हैं» | L48 (normally moves one seat) |
| 4 | बुनियादी नियम 1문단 | blinds 설명 | «(सिर्फ़ दो खिलाड़ी हों तो button ख़ुद small blind लगाता है)» 괄호 추가 | L57 heads-up 괄호 |
| 5 | 퓰로 요약 강조문 | «हर नई स्ट्रीट पर एक और betting राउंड» | «… सिवाय तब के जब खिलाड़ी all-in हों और bet करने को कोई न बचा हो; तब बाक़ी कार्ड बस खोल दिए जाते हैं» | L100 (all-in run-out) |
| 6 | 인원 표 7–10 | Full ring (9-max) | Full ring (9-max या 10-max) | L116 |
| 7 | 포맷 표 NLHE | «अपने सारे chips तक कोई भी रक़म» | «big blind से लेकर अपने सारे chips तक» | L202 (NL 최소 bet = BB) |
| 8 | 포맷 문단 | «(जितना मन चाहे bet करो)» | «(big blind से लेकर अपने पूरे stack तक कुछ भी bet करो)» | L206 |
| 9 | Starting hand 표 Premium | «हर position, हर stack» | «… — पहले खेलें तो raise, एक raise के सामने re-raise» | L278 |
| 10 | Rule of 2 and 4 표 flop 행 | «flop पर (2 कार्ड बाक़ी)» | «flop पर, बिना किसी और bet के दोनों बचे कार्ड देखने हों (जैसे all-in)» | L309 |
| 11 | 표 아래 | (없음) | ⚠ ×4 한정 문단 신설 — 9 ÷ 47 = ~19% | L314 신설 |
| 12 | 표 아래 | (없음 — hi는 «इस तुलना से…» 고유 문단만 있었다) | «아는 확률 > pot odds 요구치면 call 이득 — flop 단발 call은 1장 수치(9 ÷ 47 = ~19%), ×4 아님. 낮으면 fold» 신설. hi 고유 문단(«इस तुलना से…»·3bet-pot 링크)은 EN 헤지와 모순 없어 **보존** | L316 |
| 13 | 실수 H2 직후 | (없음) | 경험담 도입 1문장 신설 | L362 신설 |
| 14 | ग़लती 2 | 규칙 2문장 | 경험담 1문장 추가(실물 dealer button → 한 orbit에 해결) | L370 |
| 15 | ग़लती 4 | «A♣4♦ … रोमांचक लगता है, पर» | 대시 삽입구 경험담 추가 | L378 |
| 16 | FAQ blinds | 강제 bet 설명 | «(सिर्फ़ दो खिलाड़ी हों तो button ख़ुद small blind लगाता है)» 추가 (all-in 괄호는 이미 있었음) | L423 |
| 17 | FAQ झटपट वर्शन | «… एक विजेता — या बँटा हुआ pot …» | «सबसे अच्छा हैंड pot ले जाता है — या बराबर면 split (side pot हो तो हर pot अलग से)» | L427 |
| 18 | FAQ no-limit | «अपने सारे chips तक … यही all-in» | «big blind से लेकर … — ऊपरी सिरा ही all-in» | L435 |
| 19 | आख़िरी बात | «चार betting राउंड» | «ज़्यादा से ज़्यादा चार betting राउंड» | L447 |

**이미 반영(손대지 않음)**: 토너먼트 re-entry 괄호 · NL/FL «main thing … 1 bet + 4 raise» · BB 행 «small blind के सामने छोड़कर» · pot $120/$140 · outs «likely winner» · One pair/High card 행 · FAQ 형식(**Q.**) · FAQ 핸드 시간 30초~2분 · FAQ quick version의 «up to four rounds (fewer …)» · `/hi/hand-chart`·`/hi/calculator` 링크.

**건너뜀**: seoTitle «Rules, Chips & Cheat Sheet → Rules & Cheat Sheet»(ⓒ SEO 카피 — hi seoTitle은 현지 키워드 «poker kaise khelte hain» 독자 카피, 대응 문구 없음) · 관련글 카드 `hsl()` 래핑(ⓓ 기계적 — hi 이미 hsl).

## 2. holdem-game-order (본문 20자리)

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | tldr | 진행 순서 + «कुल 4 betting राउंड» | «preflop은 BB 왼쪽이 먼저 bet · flop/turn/river은 button 왼쪽 첫 active(보통 SB) · (heads-up 반대) · … ज़्यादा से ज़्यादा 4 राउंड» | tldr L15 (4834860d·7263564a 계열) |
| 2 | button 문단 | «हर हैंड के बाद … एक सीट खिसक जाती है» | «आम तौर पर … (dead-button नियम इसका अपवाद है)» | L52 |
| 3 | blinds 표 아래 | (없음) | «सिर्फ़ दो खिलाड़ी हों तो button ख़ुद small blind लगाता है — नीचे उदाहरण도 이 셋업» 신설 | L65 신설 |
| 4 | Starting hand 목록 | मज़बूत: …A♠J♥, 10♠10♥ / स्थिति: 9♠9♥, … | मज़बूत: A♠K♥, A♠Q♥, 10♠10♥, 9♠9♥ / स्थिति: A♠J♥, 8♠8♥, K♠Q♥, K♠J♥ (EN 축어 동일) | L87–88 |
| 5 | Flop — check 문단 | «Flop से एक नया विकल्प भी खुलता है: check» | «Flop से check हर किसी के लिए खुल जाता है (preflop में सिर्फ़ वही जिसका अपना blind या straddle ही live bet हो)» | L105 |
| 6 | Showdown 규칙 muck | «हारने वाला … muck कर सकता है» | «आम तौर पर …» + 토너먼트 예외 2(TDA 2024 Rule 16 · WSOP 토너먼트 규칙 70 / TDA 2024 Rule 18-B) | L148 |
| 7 | «हर street पर पहले कौन खेलता है?» 직후 | (없음) | 굵은 직답 문단 신설(«पहले» 두 자리 · UTG / flop 뒤 button 왼쪽) + 다음 문장에 «इसलिए» | L157–159 |
| 8 | heads-up 문단 뒤 | (없음) | live straddle 문단 신설(straddler 왼쪽 시작 · straddler가 preflop 마지막 · WSOP Live Action Rule 165 · flop 뒤 정상) — «cash game में जहाँ इसकी इजाज़त हो» 한정 유지 | L176 신설 |
| 9 | H2 «7 betting एक्शन …» | 7 betting एक्शन | «टेबल पर आपकी 7 चालें, पूरी तरह समझाई गईं» | L265 «The 7 Moves You Can Make» |
| 10 | 액션 표 Fold | कभी भी | किसी भी street पर — अपनी बारी पर | L267 |
| 11 | 액션 표 All-in | कभी भी | किसी भी street पर — अपनी बारी पर, bet/call/raise 중 열린 것 | L273 |
| 12 | «ध्यान दें» 문단 | «सिर्फ़ big blind अकेला check …» | «अपनी post ही live bet … BB(raise·straddle 없을 때) + raise/re-straddle 안 된 live straddler (WSOP Live Action Rules 159 · 165)» | L277 |
| 13 | 족보 표 도입 | (없음) | «कितनी बार» 열 = 7장 중 베스트5 빈도 → high card < two pair 괄호 | L285 |
| 14 | 실수 H2 도입 | 1문장 | 경험담 1문장 추가 | L310 |
| 15 | 실수 1 | «… पक्का नुक़सान है।» | «— नए खिलाड़ी की पहली टेबल पर सबसे आम leak» | L314 |
| 16 | 실수 5 | 규칙 문장 | 경험담 1문장(straight라 믿고 깠는데 안 이어짐) | L330 |
| 17 | FAQ | (없음) | 신설 «पोकर में पहले कौन खेलता है?» | L358–360 |
| 18 | FAQ | (없음) | 신설 «flop के बाद पहले bet कौन करता है?» | L362–364 |
| 19 | FAQ | (없음) | 신설 «showdown पर पहले कार्ड कौन दिखाता है?» (TDA 16 · 18-B) | L366–368 |
| 20 | FAQ all-in | «जब stack अलग-अलग हों» | «… और आपके all-in के बाद भी दो या ज़्यादा खिलाड़ी bet करते रहें» | L390 |
| 21 | FAQ betting 라운드 | «चार: …» | «ज़्यादा से ज़्यादा चार … 일찍 끝나면 더 적다» | L394 |
| 22 | FAQ | (없음) | 신설 burn card FAQ(3장 · 이유) | L396–398 |
| 23 | याद रखने लायक 3 बातें ① | «चार betting राउंड» | «ज़्यादा से ज़्यादा चार» | L402 |

(표의 #는 23행이지만 #17~19·22는 FAQ 4문 신설 — FAQ 7 → 11문, EN 11문과 일치.)

**이미 반영**: 본문 히어로 중복 이미지 제거 · 카드 스테이지/쇼다운 이미지 alt·캡션 · turn 빨간 강조문(«value की पूरी एक street») · 핸드 예시 river «B: check» + «check-raise» · High card 행 «Two Pair से कम» · 실수 3 pot odds «जीतना, सिर्फ़ draw पूरा होना नहीं» · 실수 2 내부링크 · readnext 블록 · 첫 내부링크 thumb.

**건너뜀**:
- seoTitle·desc·tags(ⓒ) — EN 08-30 «who bets first» 재조준(라쿠 US 실측 근거). hi는 독자 카피·hi 키워드(«poker kaise khelte hain» 등)이고, 새 언어 축은 **SERP 실측 먼저**가 규율 → **헤드 판정 사항**으로 넘김.
- H2 «Who Acts First on Each Street?» → «Who Bets First in Texas Hold'em?»(ⓒ SEO) — hi H2 «हर street पर पहले कौन खेलता है?»는 hi 태그 «पोकर में पहले कौन खेलता है»와 맞물린 현지 표현이라 유지. 본문 직답 문단(#7)은 이식했다.
- turn/river «fourth street / fifth street» 슬랭(ⓒ 용어) — `docs/locale-intentional-diffs.md` 2026-08-14 행 선례(de·es·zh·ja·id 미도입 = «번 카드만»이 표준 해석). hi 볼륨 근거 없음.
- 표 정렬 마커 `|:---|` 변경(ⓓ) · 관련글 카드 `hsl()`(ⓓ, hi 이미 반영).

## 3. holdem-betting-actions (본문 6자리)

| # | 위치 | 전 | 후 | EN 근거 |
|---|---|---|---|---|
| 1 | «check कब कर सकते हैं?» 도입 | «ठीक दो हालात में» | «दो तरह के हालात में» | L74 (exactly 삭제) |
| 2 | 같은 목록 BB 항목 | «किसी ने raise नहीं किया» | «raise या straddle नहीं किया» + «(live straddle लगाने वाले पर भी यही — उसके बाद raise/re-straddle 없으면)» | L77 |
| 3 | min-raise 인포그래픽 title | «हर raise में कम से कम पिछले bet या raise जितना» | «raise में कम से कम आख़िरी पूरे bet या raise जितना …; सिर्फ़ all-in इससे छोटा हो सकता है» | L113 (B 175 예외) |
| 4 | raise 규칙 1 | «chips हिलाने से पहले "raise" बोलें।» | «… — और रकम भी।» | L132 |
| 5 | all-in 2문단 | main/side pot 설명 | 괄호 신설 «(더 짧은 스택이 있어도 그가 못 닿는 side pot은 계속 다툰다 — 각 all-in은 자기 층만 막는다)» | L156 |
| 6 | FAQ «all-in 뒤 raise?» | «… re-raise कर सकते हैं।» | «— बशर्ते all-in 아닌 상대가 최소 1명 남아 있을 때; all-in 상대와 heads-up이면 call/fold만» | L225 |

**이미 반영**: tldr · 표 «last full» · check 조건(live bet · straddle) 3자리 · call all-in 괄호 · fold «Rule 84 non-standard fold» · min-raise $10→$14→$24 예시 · straddle min-raise(Rule 165) · string bet 정의(Rule 90.d·103) · re-raise all-in 예외 · 자기 bet에 raise 금지 + preflop 예외(159·165) · FL cap 1 bet + 4 raise(100.b, heads-up 예외 반대 방향) · all-in «अपनी बारी पर» · 실수 1~4(90.a·90.b.1·90.d·97) · FAQ 자기 bet/라운드 수/preflop check/string bet(TDA 42~45·43-A).

**건너뜀**: category «초보 가이드»→«rules»(ⓓ, hi 이미 rules) · 관련글 카드 `hsl()`(ⓓ).

## 4. §13 검산
- 카드 이동은 game-order starting hand 목록(10♠10♥·9♠9♥ ↔ A♠J♥)뿐 — EN 축어와 1:1 대조, 핸드 평가 없음.
- game-order 핸드 예시(손대지 않음) 재확인: A = A♠K♥ + K♦9♠3♥2♣A♥ → A-A-K-K-9 two pair · B = 9♦9♣ + 9♠K♦A♥ → 9-9-9-A-K trips → B 승 ✓ · pot 12,000 → 28,000 → 58,000 → +30,000 +70,000 +40,000(call) = 198,000 ✓.
- 수치: 9 ÷ 47 = 0.191 → ~19% ✓ · 9 × 4 = 36 ✓ · $10 bet → $14 all-in → 최소 raise $24 ✓(기존). hi 코퍼스는 서양 숫자 — 새 문장도 서양 숫자.
- 규칙 번호: WSOP Live Action Rule 165 · Rules 159 · 165 · TDA 2024 Rule 16 · 18-B · WSOP 토너먼트 규칙 70 — EN과 동일.

## 5. 아스트라 교차검수 (codex exec gpt-6-astra · read-only · 스크래치 사본)
변경 문장 총 60행 판정: OK 54 · FIX 3 · NOTE 3. 숫자·카드·규칙 번호 전부 EN 일치 판정.

| # | 슬러그·위치 | 지적 | 판정 | 사유 |
|---|---|---|---|---|
| A1 | beginners · Starting hand 표 Premium | «पहले खेलें तो raise»는 «먼저 행동하면»으로 읽힌다 — first in = 아무도 안 들어온 팟 | **채택** | 원문 검증: EN «raise first in». 문구를 «आपसे पहले किसी ने call या raise न किया हो तो raise»로 |
| A2 | game-order · Showdown 규칙(diff 밖) | «pot आधा-आधा»는 2분할 단정, EN은 «evenly»(3인 이상 동률 포함) | **채택** | 규칙 불일치 — «बराबर-बराबर»로 최소 수정 |
| A3 | betting-actions · out-of-turn fold 2자리(diff 밖) | «जुर्माना»=벌금(금전) 함의, EN «penalize/penalty» | **채택** | TDA 벌칙은 핸드·라운드 정지 등 — «पेनल्टी»로 |
| A4 | beginners NLHE 표·문단·FAQ 3자리 (NOTE) | «big blind부터»가 BB 미만 all-in(합법)을 빠뜨린다 (WSOP Live Action Rule 174) | **기각(hi)** → **헤드 판정** | hi는 EN 축어 번역이 맞다. 고치려면 EN-먼저 사안 |

## 6. 게이트
- `npm run audit:hard -- --locale=hi --slug=<각 slug>` — 스크립트가 `--locale` 지정 시 hi 21편 전체를 돈다: **21/21 통과 · 🔴 0 · 🟠 0**. 커버리지: beginners «카드 문단 1» 미판정(A♣4♦ 문단 — 족보 시나리오 없음, 육안 확인) · game-order·betting-actions는 미판정 목록에 없음. 미러 드리프트(hi 꼬리) 9 — 이번 3편은 해소.
- `npm run check:intl-links` ✓ (729편 · 25언어)
- `npm run build` exit 0 · sitemap 74 blog + 729 intl — 빌드 산출물(sitemap·tsbuildinfo)은 되돌림. 아스트라 반영 후 audit:hard 21/21 🔴 0 · 재빌드 exit 0 재확인.
- 메모: 아스트라에 넘긴 사본 이후 game-order 실수 H2 도입문 1자리 어휘만 다듬음(«हरवाते» → «की वजह से … pot गँवाते»), 의미 동일.
