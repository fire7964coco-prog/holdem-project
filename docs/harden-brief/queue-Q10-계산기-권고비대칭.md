# 회차 Q10 브리프 — 계산기 EN 권고 비대칭·티어 역전 + 로케일 전파

> 작성 2026-09-21 · A 구간(Opus) 산출. 재료 정본 = `docs/harden-queue-진행.md` §1 Q10 행 ·
> `docs/harden-brief/calculator-landing-rewrite.md` §5. **B 구간은 이 파일 하나만 읽는다.**
> 🔴 이 회차는 «새 문장»이 거의 없다(EN `action` 6자리 · 각 10~15단어). 나머지는 **판정 · 티어 산술 · 11자리 전파**다.

---

## 0. 착수 실측 — 재료의 «전제»부터 (프로토콜 §3-0 / §3-0-B)

| 재료 | 진행 파일 기재 | 09-21 원문 실측 | 판정 |
|---|---|---|---|
| ① 88↔77 비대칭 | EN `dict.ts:557`↔`:565` | ✅ 현존. `88` «in EP **consider** calling a raise» ↔ `77` «in EP call a raise» | **열려 있다** |
| ② EP 첫 진입 미정의 | 같은 두 항목 | ✅ 현존. 단 🔴 **«림프로 빠진다»는 과장이다** — 두 항목 다 «never open-limp»를 이미 달고 있다. 진짜 결손은 **«그럼 EP 첫 진입에 무엇을 하나»가 비어 있는 것**(레이즈? 폴드?). 같은 표의 `AJs`·`KJs`·`KQo`는 그 자리를 «raise or fold»로 닫아 뒀다 | **열려 있다 · 심각도 하향(D유형 → 결손)** |
| ③ `44`(T5) ↔ `43s`(폴백 T4) 역전 | `calculator-tool.tsx:168`·`:193` | ✅ 현존. `[5,"44"],[5,"33"],[5,"22"]` ↔ `fallbackTier`는 **수티드 무조건 4** | **열려 있다** |
| ④ 수티드 커넥터 티어 내 역전 | `:580~591` | ✅ 현존. `98s` «Call/raise LP» · `87s` «Call LP» · `65s` «Call LP» · `54s` «Call LP, cheap multiway pots» ↔ **더 약한** `76s`만 «Raise first in from LP» | **열려 있다** |
| ④-b `55` 셋마이닝 조건 부재 | — | ✅ 현존. `66`·`44`는 «~15× the call behind» ↔ `55`는 없다 | **열려 있다** |
| ⑤ `outs.exactNote` 전파 | 「11로케일」 | 🔴 **10이다**(`app/{de,es,fr,hi,id,ja,ms,pt,zh,zh-hant}/calculator/dict.ts`). ko에는 이 문자열이 없다(확인) | **열려 있다 · 수 정정 11→10** |
| ⑥ `A3s` 전파 | 「12자리 = 로케일 9 + ko」 | 🔴 **11이다**(로케일 **10** + ko 1). 10곳 전부 폐기 문구(«수티드 에이스의 바닥»)를 들고 있다 | **열려 있다 · 수 정정 12→11** |
| ⑦ de 낡은 주석 2곳 | `app/de/solver/faq.ts:47` · `docs/keyword-bank/de-gto-solver.md:96` | ✅ 현존(둘 다 「de에 도구 페이지 없음」). 🪶 **ja 2곳은 이미 닫혀 있다** — `app/ja/solver/page.tsx:35`·`solver-client.tsx:64`가 「`/ja/calculator`는 2026-09-17에 신설됐다 — 낡은 서술 정정」을 달고 있다. **열지 마라** | **열려 있다(de 2) · ja 2는 종결 확인** |

🪶 **곁에서 나온 것 하나**(⑤ 검증 중 발견 · 아래 §4-⑤-b에 처방) — ko `app/calculator/calculator-client.tsx:336` 「위는 정밀 계산값」은
**모바일에서만 참이다.** 그 블록은 `flex flex-col … sm:flex-row`라 **≥640px에서는 정밀값이 «위»가 아니라 «왼쪽»**이다.
⑤와 **같은 유형**(렌더 위치·크기를 가리키는 지시어가 한쪽 뷰포트에서 거짓)이라 같은 회차에서 닫는다.

🪶 게이트 베이스라인(착수 시점) — `check:calc-parity` **10/10 PARITY OK**. 이 회차가 깨면 그건 이 회차 탓이다.

---

## 1. 렌더 근거 — «어느 숫자가 큰 글씨인가» (⑤ 판정의 1차 근거)

`components/calculator/calculator-tool.tsx:568~575` 실물:

- 정확값: `<p className="text-5xl sm:text-6xl font-black tabular-nums …">{pf(pct)}</p>`
- Rule of N 어림값: `<p className="text-foreground font-bold text-base">{outs} × {ruleN} = ~{pf(rule(...))}</p>`
- 그 아래: `<p className="text-primary/70 text-[10px]">{D.exactNote}</p>`

→ **정확값이 «활자가 큰 쪽»이다.** «값이 큰 쪽»이 아니다 — 방향은 아웃츠 수에 따라 뒤집힌다:
**9 아웃츠** rule 36% > 정확 34.97%(규칙이 크다) · **4 아웃츠** rule 16% < 정확 16.47%(정확값이 크다).
그래서 «큰 값»으로 옮긴 10로케일은 **한쪽 구간에서 반드시 거짓**이다. EN 주석(`dict.ts:477~481`)이 이미 이 근거를 적어 뒀다.

---

## 2. 티어 산술 — ③의 근거는 «감»이 아니다 (09-20 콤보 모델 그대로)

`calculator-tool.tsx:186~189` 주석 축어:

> `A ~50% button range is 663 combos: 78 pairs + 312 suited leaves 273 for offsuit, i.e. ~22 hand types`

- **78 pairs = 13개 페어 전부 × 6콤보.** 즉 이 모델은 **22·33·44를 버튼 레인지 «안»으로 이미 계산에 넣었다.**
- 그런데 표는 `[5,"44"],[5,"33"],[5,"22"]` = **🚫 Tier 5 «Weak / Usually fold»** 배지를 준다.
- 같은 모델이 **312 수티드 전부를 T4**로 주므로 `43s`·`32s`가 `44`보다 **한 단계 위**로 뜬다.
- 🔴 따라서 역전의 해법은 **«수티드에 바닥을 두는 것»이 아니다** — 그건 2026-09-20에 이미 기각됐다
  (`calculator-landing-rewrite.md` §5 「수티드에 «작은 쪽» 바닥을 두지 마라」). **페어를 T4로 올리는 쪽만 모델과 일치한다.**
- 09-20이 `K10o·Q10o·J10o`를 **같은 사유로 T5→T4**로 올렸다. ③은 그 작업의 **미처리 잔여**다.

**T4로 올린 뒤 새 역전이 생기나 — 전수 확인:**
- T4 최약체 = 폴백 수티드 `32s`. `22` vs `32s` → 페어가 위. **역전 없음.**
- T5에는 이제 **표 안 핸드가 0개**다(폴백 오프수트 잡패 전용). 라벨·축·진행바는 `tierNames[5]`를 그대로 쓰므로 **코드 변경 불요**.
- 🔴 **배지만 바뀐다 — 핸드별 `action` 문구(44 «~15× 뒤에 남았을 때만 콜» · 33·22 «멀티웨이 딥스택만»)는 그대로**다. 권고는 안 넓힌다.

---

## 3. 「완료 전에 사본을 세라」 — 자리 전수 (grep 실측 09-21)

| 명제 | EN(정본) | 로케일 dict 10 | ko 클라이언트 | 합 |
|---|---|---|---|---|
| ① `88` action | `components/calculator/dict.ts:557` | de209 es212 fr224 hi225 id210 ja195 ms202 pt212 zh205 zh-hant209 | `app/calculator/calculator-client.tsx:97` | **12** |
| ① `77` action | `:565` | de217 es220 fr235 hi233 id218 ja203 ms210 pt220 zh213 zh-hant217 | `:105` | **12** |
| ④ `98s` | `:579` | de230 es233 fr249 hi248 id231 ja216 ms223 pt233 zh226 zh-hant230 | `:119` | **12** |
| ④ `87s` | `:580` | de231 es234 fr250 hi250 id232 ja217 ms224 pt234 zh227 zh-hant231 | `:120` | **12** |
| ④ `65s` | `:590` | de241 es244 fr262 hi260 id242 ja227 ms234 pt244 zh237 zh-hant241 | `:130` | **12** |
| ④ `54s` | `:591` | de242 es245 fr263 hi261 id243 ja228 ms235 pt245 zh238 zh-hant242 | `:131` | **12** |
| ④-b `55` | `:568` | de220 es223 fr239 hi238 id221 ja206 ms213 pt223 zh216 zh-hant220 | `:108` | **12** |
| ③ `HAND_TABLE` 44·33·22 | `calculator-tool.tsx:168` | (코드 1곳 · 로케일 공유) | `calculator-client.tsx:121~123` | **2** |
| ③ `summary` 4·5행 | `dict.ts:541~542` | de es fr hi id ja ms pt zh zh-hant 각 2행 | `calculator-client.tsx:624~625` | **12** |
| ⑤ `outs.exactNote` | `dict.ts:483`(이미 정정됨) | de134 es131 fr142 hi125 id124 ja118 ms112 pt129 zh128 zh-hant131 | **없음**(대신 §4-⑤-b) | **10** |
| ⑥ `A3s` desc | `dict.ts:575`(이미 정정됨) | de226 es229 fr245 hi244 id227 ja212 ms219 pt229 zh222 zh-hant226 | `calculator-client.tsx:114` | **11** |
| ⑦ de 낡은 주석 | — | `app/de/solver/faq.ts:47` · `docs/keyword-bank/de-gto-solver.md:96` | — | **2** |

🔴 **id·ms·hi는 ④·④-b를 이미 «부분»으로 갖고 있다** — 자기 회차에서 EN보다 먼저 고쳤다.
id `87s` = «Raise first in … call raise kalau in position» · ms·hi `55`에 ~15× 조건 있음 · hi `87s`에 first-in 있음.
**그 자리는 되돌리지 말고 «이미 반영»으로 세라.** 편마다 문자열로 확인할 것.

---

## 4. 처방 — 자리별 축어

### ① + ② `88`·`77` — EN 축어 (신규 문장)

    "88": action → "Raise LP; in EP call a raise, and raise or fold when first in — never open-limp"
    "77": action → "Raise LP; in EP call a raise, and raise or fold when first in — never open-limp"

근거·판정:
- **두 문자열을 같게 만든다.** 88이 77보다 센 것은 **티어 배지(T2 ↔ T3)와 `desc`가 이미 말한다.**
  🔴 «88은 EP 오픈, 77은 raise-or-fold» 식으로 **새 기울기를 만들지 마라** — 이 표에 근거가 없는 전략 주장이다.
  같은 표에 동일 `action`을 쓰는 선례가 이미 있다(`A7s`·`A6s` 둘 다 «Play LP only»).
- **«raise or fold when first in»은 이 표의 기존 어휘다** — `KQo` 「in EP raise or fold when nobody has entered」 ·
  `AJs` 「from UTG raise or fold」 · `76s`·`55` 「raise first in」. **새 개념을 도입하지 않는다.**
- 길이 = **79자.** 이 표의 현행 최장 `KQo`(88자)보다 짧다 → 390px 조판 위험은 «현상 유지»다(그래도 C에서 캡처).

### ④ 수티드 커넥터 — EN 축어

    "98s": action → "Raise first in from LP; call a raise with position"
    "87s": action → "Raise first in from LP; call a raise with position"
    "76s": (무변경)  "Raise first in from LP; call a raise only with position and deep stacks"
    "65s": action → "Raise first in from LP; call a raise only with position and deep stacks"
    "54s": action → "Raise first in from LP; call a raise only in cheap multiway pots"

근거: ⓐ 「Call LP」 단독은 **오픈 림프로 읽힌다**(같은 표가 다른 자리에서 «never open-limp»를 외치는데 여기만 안 막는다 = D유형)
ⓑ 티어 내 역전 해소 — 98s ≥ 87s ≥ 76s ≥ 65s ≥ 54s 순으로 «레이즈에 대한 콜» 조건이 **좁아지기만** 한다
ⓒ 폴백 주석의 콤보 모델이 **수티드 312콤보 전부를 BTN 오픈**으로 잡으므로 「LP 첫 진입 레이즈」는 그 모델과 일치한다.

🔴 **2차 수리(렌즈 4종 뒤) — 위 ⓑ는 1차 산출물에서 성립하지 않았다**(딜러 D-1 · 교열 #7 독립 수렴).
`76s`·`65s`가 「only **with position** and deep stacks」인데 `54s`만 「only in cheap multiway pots」라
**포지션 조건이 빠져 더 약한 핸드가 더 넓어졌다**(블라인드에서 콜할 핑계가 된다). 정정:

    "54s": action → "Raise first in from LP; call a raise only with position in cheap multiway pots"

같은 패스에서 사다리의 **잔존 한 칸**도 닫았다 — `10-9s`(T3)만 옛 문구 「Raise/call in LP」로 남아
**T4인 `98s`보다 지시가 흐렸다**(딜러 D-4):

    "109s": action → "Raise first in from LP; call a single raise with position"

### ④-b `55` — EN 축어

    "55": action → "Call a single raise in LP with ~15× the call behind; raise first in from LP"

🔴 **«누구의 스택인가»는 이번에 건드리지 않는다.** EN `66`·`44`가 지금 「~15× the call behind」(주체 미명시)이고,
55만 «you and the raiser each»로 쓰면 **EN 안에서 세 항목이 갈린다.** 그 축은 `calculator-landing-rewrite.md` §5의
별도 🪶 항목(pt·fr·ms·hi는 이미 정밀형)이다 — **그 회차에서 66·44·55를 한꺼번에** 고친다. 이번엔 **각 로케일의 기존 66/44 문형을 그대로 승계**한다.

### ③ 티어 — 코드 2곳 + `summary` 12곳

    calculator-tool.tsx:168        [5,"44"],[5,"33"],[5,"22"]        → [4,"44"],[4,"33"],[4,"22"]
    calculator-client.tsx:121~123  [5,"44",…],[5,"33",…],[5,"22",…] → [4,…]

🔴 **두 파일을 같이 고친다**(ko 주석이 이미 「한쪽만 고치지 마라」라고 적어 뒀다). 사유 주석도 09-20 선례와 같은 형식으로 남긴다.

`summary` (EN 축어 · 로케일은 값 동일 · 문안 현지화):

    4행 hands: "66–55 A8s–A2s KJo QJo suited connectors"
            → "66–22 A8s–A2s KJo QJo A10o–J10o suited connectors"
    5행 hands: "44–22 weak offsuit hands"
            → "weak offsuit hands (J2o, 93o, 72o)"

- `A10o–J10o` 추가 = **09-20이 K10o·Q10o·J10o·A10o를 T4로 올리고 요약을 안 고친 잔여**다(같은 결함 유형 · 한 회차에서 닫는다).
- 5행 예시 3개는 **폴백 문구 `unknownAction`의 축어**(「Everything else (J2o, 93o, 72o): fold」)를 그대로 쓴다 — 새 창작이 아니다.
- `action` 열(「Selective in LP」·「Usually fold」)은 **무변경**.

🔴 **2차 수리 — 요약은 «3행»도 틀려 있었다**(딜러 D-7 · 수학 지적5 독립 수렴 · ①원본 · 커밋 `64c0fd9a` 이래):
코드 T3는 **9항**(`AJo KQo K10s QJs J10s 109s 77 A9s` **+ `Q10s`**)인데 요약 3행이 8항만 적었다.
1·2행이 전수 열거라 3행만 «대표 예시»로 읽히지 않는다 — **누락**이다. 🔴 `check:calc-parity`는
**12개 사본이 똑같이 틀려서** 원리상 못 잡는다(10/10 통과). 정정:

    3행 → "AJo KQo K10s Q10s QJs J10s 10-9s 77 A9s"

또 4행 말미의 「suited connectors」는 **3행이 이미 이름으로 든 J10s·10-9s까지 문자 그대로 덮었다**(수학 지적6).
범위 표기로 바꾸면 정확해지고 390px에서 **5줄 → 2줄**로 줄어든다(실측):

    4행 → "66–22 A8s–A2s KJo QJo A10o–J10o 98s–54s"

🔴 **`44`·`33`·`22`는 배지만 올리고 문구를 안 고치면 «배지 ↔ 문구» 모순이 남는다**(딜러 D-6).
승격 뒤 배지는 「⚠️ Marginal / Selective in LP」인데 문구엔 **레이즈가 한 줄도 없었고**, 같은 T4인
폴백 수티드는 「from the button open any suited hand」를 말한다 → 「32s는 오픈, 44는 오픈 금지」가 한 배지 아래 공존했다.
**배지를 올린 것이 이 모순을 만들었으므로 같은 회차에서 닫는다**(§5-⑤ 「수정이 새 모순을 만든다」):

    "44": "Raise first in from LP; call a single raise in LP with ~15× the call behind"   (= 55와 동일 · desc가 가른다)
    "33"·"22": "Raise first in from LP; otherwise multiway pots with deep stacks only"

🪶 이때 `55`도 어순을 44와 맞췄다(레이즈 절 먼저). 🔴 **EN `66`은 이번에도 안 건드렸다** — 주체 명시 축은 다음 회차다.
단 **ko `66`만 EN과 통째로 갈려 있어**(「팟 오즈 필요 / LP 콜·레이즈, 멀티웨이 팟 선호」 — ~15× 없음 ·
콜 대상 없음 · 🔴 **셋마이닝은 임플라이드 오즈지 팟 오즈가 아니다** = F유형) 그 자리는 EN에 맞췄다.

### ⑤ `outs.exactNote` 10로케일 — «활자 크기» 축으로

| 로케일 | 현행(거짓 가능) | 처방 |
|---|---|---|
| de | `Die große Zahl ist der exakte Wert` | `Die groß dargestellte Zahl ist der exakte Wert` |
| es | `El número grande es la cifra exacta` | `La cifra mostrada en tamaño grande es la exacta` |
| fr | `Le grand chiffre est la valeur exacte` | `Le chiffre affiché en grand est la valeur exacte` |
| hi | `बड़े अंकों में दिख रहा आँकड़ा सटीक है` | `बड़े फ़ॉन्ट में दिख रहा आँकड़ा सटीक है` |
| id | `Angka besar itu nilai persisnya` | `Angka yang ditampilkan dalam ukuran besar itu nilai persisnya` |
| ja | `大きい数字が正確な値です` | `大きく表示されている数字が正確な値です` |
| ms | `Nombor besar itu ialah angka yang tepat` | `Nombor yang dipaparkan bersaiz besar itu ialah angka yang tepat` |
| pt | `O número grande é o valor exato` | `O número exibido em tamanho grande é o valor exato` |
| zh | `那个大数字就是精确值` | `以大字号显示的那个数字就是精确值` |
| zh-hant | `那個大數字就是精確值` | `以大字級顯示的那個數字就是精確值` |

🔴 **번역 함정**: «크다»의 수식 대상이 **숫자의 값**이 아니라 **활자**임이 문장에서 드러나야 한다.
`große Zahl`·`大きい数字`처럼 형용사가 명사에 바로 붙으면 값으로 읽힌다 → **«표시/조판» 동사를 끼운다.**

### ⑤-b ko 「위는 정밀 계산값」 — 뷰포트 의존 지시어

    app/calculator/calculator-client.tsx:336
    "위는 정밀 계산값"  →  "큰 글씨 쪽이 정밀 계산값"

근거 = 같은 파일 `:327`의 `flex flex-col gap-3 sm:flex-row …` — **≥640px에서 정밀값은 «위»가 아니라 «왼쪽»**이다.
`:330`이 `text-5xl sm:text-6xl`, `:335`가 `text-base`라 **«큰 글씨»는 두 뷰포트 다 참**이다(EN 정본과 같은 축).

### ⑥ `A3s` 11자리 — EN 정본 = `Nut flush draw with a wheel card, a notch above A2s` / `BTN/SB only`

로케일 용어는 **각 파일의 `A5s`·`A4s`·`A2s`가 이미 쓰는 말을 승계**한다(wheel = de `Wheel` · es `rueda` · fr `roue` ·
hi·id·ms `wheel` · ja `ホイール` · pt `wheel` · zh `轮子顺` · zh-hant `輪子` · ko `휠`). `action`(「BTN/SB만」)은 **무변경 — desc만 고친다.**

🪶 **B 구간 정련**: 10개 사전은 전부 **자기 파일 `A2s`의 «X + Y» 문형을 그대로 승계**시켰다
(A2s de 「Wheel + Nut-Flush, aber schwach」 · zh 「轮子顺 + 坚果同花，但整体偏弱」 …).
EN만 산문형(「Nut flush draw with a wheel card」)이고 로케일은 각자 옆 항목과 붙는 쪽이 자연스럽다. ko만 산문형을 유지했다(ko A3s 이웃도 산문형).

| 로케일 | 처방 desc (실제 적용값) |
|---|---|
| de | `Wheel-Karte + Nut-Flush-Draw, eine Spur über A2s` |
| es | `Carta de rueda + proyecto de color al nuts, un escalón por encima de A2s` |
| fr | `Carte de roue + tirage couleur max, un cran au-dessus de A2s` |
| hi | `Wheel card + nut flush draw, A2s से एक पायदान ऊपर` |
| id | `Kartu wheel + nut flush draw, setingkat di atas A2s` |
| ja | `ホイールカード + ナッツフラッシュドロー。A2sより一段上` |
| ms | `Kad wheel + nut flush draw, setingkat di atas A2s` |
| pt | `Carta de wheel + draw de flush nuts, um degrau acima de A2s` |
| zh | `轮子顺牌张 + 坚果同花听牌，比 A2s 高一档` |
| zh-hant | `輪子牌張 + 堅果同花聽牌，比 A2s 高一檔` |
| ko | `휠 카드를 낀 너트 플러시 드로우, A2s보다 한 단계 위` |

### ⑦ de 낡은 주석 2곳

    app/de/solver/faq.ts:47
      "③ 계산기(`poker rechner` 260) → de에 도구 페이지가 없고 앱 내 Equity-Rechner 언급으로만."
    → "③ 계산기(`poker rechner` 260) → /de/calculator(2026-09-17 신설)가 소유. 이 FAQ는 앱 내 Equity-Rechner 언급으로만."

    docs/keyword-bank/de-gto-solver.md:96
      "| `poker rechner` | 260 | 계산기 축 — de에 도구 페이지 없음. 앱 내 Equity-Rechner 언급으로만 |"
    → "| `poker rechner` | 260 | 계산기 축 — 🔴 /de/calculator(2026-09-17 신설)가 소유. 솔버 FAQ는 앱 내 Equity-Rechner 언급으로만 |"

🔴 **주변 「되찾아 오지 마라」 문장은 지우지 마라** — 카니발 금지 규율 자체는 유효하다. 바뀐 것은 «누가 소유하나»뿐이다.

---

## 5. 이 회차에서 하지 말 것

- 🔴 **수티드 핸드에 «작은 쪽» 바닥을 두지 마라**(09-20 기각 · `calculator-landing-rewrite.md` §5). ③의 해법은 페어 승격뿐이다.
- 🔴 **`44`·`33`·`22`의 `action` 문구를 넓히지 마라** — 배지 티어만 올린다.
- 🔴 **EN `66`·`44`의 «~15×» 주체 명시는 이 회차가 아니다**(§4-④-b).
- 🔴 **ja `app/ja/solver/*` 주석은 이미 정정됐다 — 다시 만지지 마라.**
- 🔴 **`A3s`·`A2s`의 `action`은 무변경**(BTN/SB only ↔ BTN only — 의도된 차이다).
- 🔴 로케일 사전 키 삭제 · 수치 재계산 · 경험담 추가 · 탭 신설(`calculator-landing-rewrite.md` §4 「하지 마라」).
- 🔴 `check:calc-parity` 10/10을 깨지 마라 — 값·개수·플레이스홀더·인용부호·`percentGap` 축을 본다.

## 6. §13 자리 — C 구간 손검산 대상

이 회차에 **카드 조합·베스트5 판정은 없다.** 수치 검산 대상은 셋뿐:

1. **콤보 산술** 663 = 78 + 312 + 273 · 오프수트 273 ≈ 22타입 = 에이스 12 + K9o+ 4 + Q9o+ 3 + J9o+ 2 + 10-9o (§2)
2. **Rule of N 오차 방향** 9아웃츠 36 vs 34.97(규칙↑) · 4아웃츠 16 vs 16.47(정확값↑) — ⑤ 판정 근거 (§1)
3. **티어 승격 후 역전 전수** — T4 최약체 `32s` ↔ `22` (§2)
