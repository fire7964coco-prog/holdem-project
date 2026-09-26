# 우편함 수신 실사 — MA-144 · 153~157 · 167 · 174~178 (2026-09-25)

> **무엇**: 검수장이 09-16~24에 보낸 요청 MA 11건이 본체에서 대기열로 옮겨지지 않은 채 묵어 있었다(`docs/mailbox-protocol.md` §6 끊김 ③).
> HEAD `326728ed` 기준으로 항목마다 «해소 / 잔존 / 판단 필요»를 grep 실측했다(읽기 전용 4갈래 병렬 · 판정 근거 = 검수장 보고서 원문 좌표).
> 🔴 **줄번호는 09-25 HEAD 기준이다** — 착수 시 문구로 다시 찾아라. 로케일 «사본 수»는 숫자 앵커로만 셌다(문장형은 로케일별 grep 필요).
> 회신 = MB-083. 🔴 **MA-172(EN 34편)·cooler 정의는 여기 없다** — 검수장 EN 재검증(`03d2046`) 최종 MA를 받은 뒤 등재한다.

## 0. 처리 방침

| 묶음 | 처리 | 이유 |
|---|---|---|
| **L-1 로케일 고유** (§1) | ✅ **채택 · 바로 착수 가능** | EN과 무관 · 정답형이 같은 글 안에 있다(문안 창작 불요) |
| **L-2 EN-먼저** (§2) | ⏸ **보류 → MA-172 최종 MA와 한 묶음** | 검수장이 09-24 EN 5클러스터를 재검증했다 — 지금 EN을 고치면 그 판정이 낡는다(09-24 겹침 사고 재발) |
| **L-3 계산기 잔여** (§3) | 문구 5종 ✅ 채택 · 레인지 3건 ⏸ 사장님 결정 | 문구는 정답이 판정문에 있다 · 레인지는 검수장도 «범위 밖»으로 넘김 |
| **L-4 판단 필요** (§4) | ⏸ 표시한 주체가 판정 | — |

## 1. L-1 로케일 고유 — 채택(착수 가능)

**es** (MA-144 ② · MA-174 ② · MA-176 ①) — ✅ **es 고유 10자리 이행 `14845d6f`(09-26 · MB-085)**. EN 동형(drawing L100·표 4행 · probability L214 · card-counting L119 · betting L230 · equity L144·L171 · implied L195 · flush L69·L157·L159)은 **L-2로 이월** — EN 원장이 같은 결함을 잡고 있다(EN implied L194 «all-in or short-stacked» · equity L170 등)
- strategy L138 «pagar es más o menos rentable» → 손익분기
- continuation-bet FAQ L265 «fuera de posición bajas al 30–45%» → 같은 글 L229 한정
- starting-hands-chart L199 «Hacen pareja de segundas» · FAQ L287 11.8% «en el flop»
- 3bet-pot-cbet desc L31 «ases ni reyes» → 본문 «servidos»
- showdown-rules L203 «una carta de la mesa deshace el empate» (WRONG)
- flush-vs-straight FAQ L225 «Solo la bate una escalera real.» (WRONG · L229 정답형) — 본문 L157·L159는 EN L156·L158 동형 → L-2
- hand-rankings tldr L8 5장 한정 · implied FAQ L195 «mano a mano» · all-in FAQ L275 언콜드 반환 · equity L171 벳 문턱(L104·L215 정답) · equity L144 «el único punto»
- drawing-odds L100 «Los tres cálculos…» (+ 보고서 §2 drawing #13·#15·#57·#86 = L46·L48·L152·L229)
- probability L214 varianza · card-counting L119 «accidente» · L130 · flush L69 «toda la jerarquía» · betting FAQ L230 «La misma regla» (→ A 103 명시)
- 🪶 L119·L214·L100·L230은 EN 동형도 있다(§2) — es만 먼저 고치면 EN과 갈린다. **EN 정정 때 같이**가 원칙, es 고유 문면만 먼저.

**zh** (MA-144 ③ · MA-175 · MA-177 · MA-178) — ✅ **25자리 이행 `b19932db`(09-26 · MB-086)** · equity L187 벳 문턱만 EN L170 동형이라 L-2 이월
- implied steps «减掉已经在那里的底池» (WRONG) · implied 직답 L172 «短筹码…不存在»
- card-counting 직답 L89 A♠ 조건 · L114 «牌房只抽水»
- drawing L124 «后门顺子大约 4.4%» · outs tldr L8 «转牌单张 19.1%» · probability tldr L8 ×4 전제 · pot-odds 직답 L52·L123
- straddle «属于强制盲注这一家族» · rake «每小时交的抽水反而更多» · rake «两倍上下» · fish «光第一条就足以…» · fish «这个词不是骂人» ↔ FAQ 자기모순
- tiebreak L243 «从荷官左手边（按钮位左侧）» (WRONG · MA-126 ③ 재요청) · betting L84 «翻前除了大盲，谁都不能过牌» · all-in L131 · kicker L184 «缺一张 10» · equity L187 벳 문턱 · equity FAQ L245 «总胜率 = 摊牌胜率 + 弃牌率»
- game-order L87–88 A♠J♥ ↔ 9♠9♥ 자리 뒤바뀜 · split-pot L44 ↔ L278 자기모순 · reading L62 «几乎没别的»
- pot-odds L239 «Correct fold» 근거 이식(EN L191)

**zh-hant** (MA-144 ③ · MA-175 · MA-177 · MA-178) — ✅ **31자리 이행 `9a991e37`(09-26 · MB-087)** · equity L192 벳 문턱만 EN L170 동형이라 L-2 이월
- outs L168 «少一張» (WRONG · EN L139 이식) · outs tldr L8 «變成大牌» · outs L41 «三張同花時…你還是輸»
- drawing «打 100 手還成不了»(L116) · «8 倍 補不回»(L63) · L67·L201 «整個基礎» · probability L269 «多人時更低» · L153·FAQ L273 4-2 «9 張以內» 한정 복원
- implied «小同花（K花那種）» · card-counting «牌靴式»
- bad-beat 快速回答 «每一次爆冷門…長期虧錢的決定» (WRONG) · 코치 박스 «§13 紅線» 내부 규칙 노출 삭제 · fish «「魚」不是罵人»·«幾乎總是成群»
- betting FAQ L240 «只有這一輪還沒人下注時» (WRONG) · betting L82 · all-in L63 · showdown L39 «全部三種情況» · equity L192 벳 문턱
- game-order L97 · L306 · beginners L203 · L361 · split-pot L39↔L224 · L105 · L161 · reading L120 · L264 · blind FAQ L177
- pot-odds L201 «正確蓋牌» 근거 이식

## 2. L-2 EN-먼저 — 보류(MA-172 최종 MA와 합친다)

- **MA-144 ⓐ beginners**: L198 «The only thing that changes…» · L423 «must at least match the big blind»(24사본 · MA-148 B174 동일) · L190 «one fixed entry» · L303 outs 정의
- **MA-144 ⓑ strategy**: position-play L101 king · L216·L277 · L196 · L214 · FAQ L273 · limping «can't win the pot preflop» 4자리 · c-bet L158 floats · L105 «two boards»(+position-play L212) · L65 · L168 · L129 · L198 · 3bet FAQ L286 66.6%(7로케일) · L130↔L290 · L161 · starting-hands 7-2o(32o가 최약) L205·L268·L272 · L138 · positions L221·L42 · strategy L103 27% · when-to-fold L40·L249
- **MA-144 ⓒ odds**: probability L131 «Set → full house 33.4%»(7로케일) · drawing 표 L47 1.3% · implied L202↔L122 · equity 단계표 L170 pure bluff(zh·zh-hant 동형)
- **MA-167**: fish «orbit or two» L21·L56·L191(8사본)
- **MA-174**: paired-board «roughly a quarter» → **13.0%(약 1/8 · 66 쿼즈 포함 14.0%)** — 🔴 **ko 원본 «약 23%»도 틀렸다**(ko+EN+8로케일 = 10사본) · monotone «J5s, 85s y 74s»(10사본 · 74s 0콤보) · «sixes lead most»(8사본 · id·hi는 성립) · «history stays in your browser» 4편 × en·es·ja·zh·zh-hant = 20사본(hi·id·ms·pt 문안이 본보기)
- **MA-175 통지**: straddle «solvers open fewer hands» L181 · rake «percentage times how often» L127 · rake 결미 L190 · string bet glossary L83(6사본 · de·pt 정답형)
- **MA-176~178 통지**: probability L111 15–20× · L213 varianza · drawing L99 · L224 1/4,900 · L228 full table · card-counting L118 · betting L229 same rule(24) · showdown L174 caller may ask(24) · tiebreak L196 K-K-9-9-5 · equity L143 one spot · implied L112 · hand-rankings L138 two ways(12) · reading L207·L227 · outs L145·L231 보정식 · flush L56·L184·L123·L156·L158

## 3. L-3 계산기 잔여 (MA-153~157)

EN 22자리 중 **해소 14**(4849f3c8 · 789c194b · 3db98e3f · 685c152a). 로케일 고유 12건 중 해소 9.
- ✅ **채택 · 문구**(EN `components/calculator/dict.ts` → 10로케일): A55 슬라이더 국면(fr «Couleur» 단독) · A81 HU «big-blind ante equivalent» · A85 MW «small pairs fold» 앤티 OFF 한정 · B22 «about a point»(+2.4pt) · B111 콜 차트 HU 한정
- ✅ **채택 · 로케일**: `pot.orHigher` ja L127·zh L137·zh-hant L140 → 엄격 초과 · spr.low «대부분» ja L245·id L260·ms L250 → «큰 부분»(de 참고)
- ✅ **레인지 3건 = Claude 권고안 채택**(사장님 09-25 위임: «잘 모르겠어, 너의 권고대로») — 원칙 = **«지배하는 핸드가 지배당하는 핸드보다 좁게 권고되지 않는다»(단조성)** · 표준 오픈 레인지와 어긋나지 않는 최소 변경:
  ① **K10o → «CO·BTN 오픈»** · J10o → «BTN only»(Q10o와 같은 급) · **폴백 2분기(K9o·10-9o 등) → «가끔 BTN»** — 약한 쪽이 강한 쪽보다 넓어지는 역전 0
  ② **A10s → «어느 포지션이든 퍼스트 인 레이즈»**(id 문안이 정본 · 요약행 «Raise most positions»와 일치)
  ③ **88 → «퍼스트 인이면 전 포지션 레이즈 · 레이즈 앞에선 콜»**(77과 분리 · 요약행과 일치). 3db98e3f «88=77 동문» 설계는 폐기 — 검수장에 소명 불요
  🔴 착수 시: 표 전체(169종)의 지배 쌍을 스크립트로 훑어 **역전 0**을 확인(폴백 포함) · EN → 10로케일 · 티어 배지와 문구 충돌 없는지
  ✅ **이행 `104fac47`(09-25)** — 지배 = «한 장 공유 + 다른 한 장이 높다»(커넥터 예외) · 페어 서열 · 수티드 > 같은 숫자 오프수트. 지배 쌍 1,168 · 역전 5 → 0.
  권고안에서 **바꾼 두 자리**: ① 폴백 2분기 «가끔 BTN» 강등은 **안 한다** — 폴백 콤보 모델(49.32%)이 K9o·Q9o·J9o·10-9o를 버튼 오픈으로 세고, K10o·J10o 승격만으로 역전 0 ② A10s·88은 «전 포지션»이 아니라 **AJs·99와 같은 급**(«전 포지션»이면 AQs·KQs·99 «대부분»보다 넓어지는 새 역전).
  **추가 발견·정정**: A3s «BTN/SB만»·A2s «BTN만» < 폴백 «CO: 수티드 K»(K3s·K2s) → A4s와 같은 «LP만».
  ✅ **문구 이행 `0932f093`(09-25)** — B22 66.0%는 1,712,304보드 전수 재검산(65.955%). ko 계산기 동형 3자리(A55·A81·A85) 동시 정정. 슬라이더 라벨 390px 정렬 수정.

## 4. L-4 판단 필요

- MA-167 ① cooler FAQ KK 폴드 예외(위성·ICM) — cooler 정의와 맞닿음 → **검수장 작업 범위인지 먼저 확인**
- MA-175 통지 bad-beat «ahead when the money went in, played it right» 요약문 — cooler 경계
- MA-144 H outs «a higher spade»(검수장 등급 낮음) — EN 문면 판단
- MA-144 ④ id strategy «melepas c-bet» — 네이티브 판단
- MA-176 통지 2 es 퀴즈 링크 `/en/quiz` — **판정 완료: 의도**(`7fae5a72` 404 재조준 · `/es/quiz` 라우트 없음) → 회신만

## 5. 이미 해소(재작업 금지)

MA-144: position-play «direction is universal»·limping tldr·es/ja 3bet 포지션(3cfabdc6) · zh probability 超牌·zh card-counting 관할·zh-hant TDA 5조(66705ba8) · zh-hant probability AK 범위(abdc7a21).
