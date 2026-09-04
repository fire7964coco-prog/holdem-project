# M-089 — 본체 → 검수장 회신 (2026-09-04) · pt RISKY 40(20편 자기모순형) 판정·이행

> **대상**: M-073 §2 ②·M-076 §1 「나머지 RISKY 40행 — 자기모순형 · 정정 정본이 같은 글 안 · 수용 가능한 잔재(A안)로 닫을지 고칠지는 본체 몫」
> **판정 회차**: 사장님 지시로 Fable 회차(판정이 들어가는 작업). 이행 커밋 = `e3f5a3a2` · 배포 = `git push` 자동(Vercel)
> **게이트**: `audit:hard --locale=pt` 🔴 0 · 🟠 4(기존) · 빌드 70 blog + 525 intl 통과
> **렌즈**: 교열(diff) + 네이티브·딜러·수학 → 21건 → 17건 반영 · 3건 기각(근거 §3) · 1건 스코프 밖 → 2차 교열 (§5)

---

## §1. 총괄 — 40건 중 **36건 정정 · 4건 A안 유지(사유 명시)**

원장 42행 중 2행은 `holdem-positions` #2·#58의 요약 중복이라 **고유 40건·20편**이 맞다(핸드오프 수치와 일치).

| 판정 | 건수 | 내용 |
|---|---:|---|
| **정정** | 36 | 문장 단위. 검수장이 짚은 «같은 글 안의 정답 표현»을 우선 채택(RULES §5 자기모순 우선) — 37곳 문장 + 20편 `updated` 09-04 |
| **A안 유지 — §13 수치·8로케일 동시** | 1 | `holdem-bad-beat` #12 «~65% (2:1)» — §2-B |
| **A안 유지 — 사장님 판단 대기 #1과 같은 갈래** | 3 | `holdem-starting-hands-chart` #17·#24·#25(77/88/99 배치) — §2-C |

🔴 **검수장 지적 40건 중 오탐 0.** 40건 전부 «어긋난다»는 관찰 자체는 맞았다. 우리가 한 일은 **어느 쪽을 살릴지**와 **어떻게 좁힐지**였다.

---

## §2. 판정표 (40행 · EN 거울 상태 포함)

「EN」 열 = EN 마스터에 같은 문장이 있는가. **EN이 같으면 pt만 고쳐 pt가 «혼자 맞는» 상태가 됐다** — 그 목록을 §4에서 EN-먼저 트랙으로 넘긴다.

| # | 편 | 원장 # | 판정 | 조치(pt) | EN |
|---|---|---:|---|---|---|
| 1 | 3bet | 22 | 정정 | 폴라 예시 «AA-KK … flate QQ/AQ/TT» → **«QQ+ e AK + blefes tipo A5s; flate o meio JJ/AQ/TT»** — 결정표(Premium QQ+/AK = 밸류 3벳 IP·OOP)와 정합 | 동형(L98) |
| 2 | 3bet | 46 | 정정 | «recebe muito mais vezes» → «mais ou menos tantas vezes quanto» (보존 논증 수용 · 뒷절 중복은 2차 렌즈가 잡아 삭제) | 동형(L172) |
| 3 | 3bet | 51 | 정정 | 축 정렬: «continuar um terço = foldar no máximo uns 67% … 55% de fold … dentro desse teto» | 🔴 **드리프트** — EN은 08-27에 그 문장을 **삭제**했고 pt masterUpdated 08-26이 못 따라옴 |
| 4 | 3bet | 66 | 정정 | «Sem blockers, sem equity» → «Blockers fracos e pouca equity de reserva» | 동형(L216) |
| 5 | 3bet | 78 | 정정 | FAQ를 **EN 08-27 정정본으로 미러**(«mais largo do que a MDF pura … defender só cerca de um terço, ou seja, foldar até uns 67%») | 🔴 **드리프트**(EN L286은 이미 정정본) |
| 6 | all-in | 3 | 정정 | «quem está de all-in fica de fora» → «por um valor menor fica de fora» | 동형(L47) |
| 7 | bad-beat | 12 | **A안** | «~65% (2:1)» 유지 — §2-B | 동형 + **8로케일** |
| 8 | bad-beat | 29 | 정정 | «Isso é um jogador…» → «Na maioria das vezes, isso é…» | 동형(L142) |
| 9 | betting-actions | 20 | 정정 | 103조 두 요소 반영: «vários movimentos **que incluem um retorno à sua pilha** sem anunciar … — ou usar um gesto enganoso para provocar ação fora de vez» | 동형(L132) + 8로케일 |
| 10 | betting-actions | 42 | 정정 | FAQ 동일 | 동형(L229) |
| 11 | card-counting | 29 | 정정 | «out de sequência já no board = morto»(홀덤에서 불성립) → **9 밖에서 노출된 카드**(상대가 보여 준 손·잘못 뒤집힌 카드) = morto → 8. FAQ L160 «outs já visíveis no board»도 같이 | 동형(L96) |
| 12 | card-counting | 32 | 정정 | «na maioria das jurisdições» 복원 | 🔴 **pt 누락** — EN L104은 «in most jurisdictions»를 갖고 있었다 |
| 13 | drawing-odds | 25 | 정정 | 사건 정의를 «둘 다 셋을 플랍»으로(211행 FAQ 어법) | 동형(L86) |
| 14 | equity | 22 | 정정 | 19,6% → **19,1% (9 ÷ 47, do flop para o turn)** | 🔴 **pt 단독 문장** — EN L86에 없다 |
| 15 | equity | 32 | 정정 | «check-call também seria lucrativo» → 조건 명시(implied odds / 턴 체크로 프리카드) | 🔴 **pt 단독 문장** |
| 16 | flush-vs-straight | 51 | 정정 | «36 combinações entre as 2.598.960 mãos de cinco cartas (0,00139%; até o river no Hold'em, cerca de 0,028%)» — 37.260/133.784.560 검산 | 동형(L158) |
| 17 | hand-rankings | 48 | 정정 | «a pior … 7-2» → «a mais famosa das piores … (por equity vs mão aleatória, 3-2 offsuit é ainda pior; 7-2 é o pior entre as que nem sequência formam)». 🪶 렌즈 B가 MC 300만으로 독립 재검증(32o 32,36% · 72o 34,55%) — 검수장 값과 일치. shc L207 «a pior mão de verdade»도 «a mais famosa das piores»로 정합 | pt 단독(EN FAQ에 7-2 없음) |
| 18 | implied-odds | 30 | 정정 | «quatro cartas de flush à mostra» → «três cartas do naipe à mostra» | 동형(L112 «obvious four-flush») |
| 19 | implied-odds | 48 | 정정 | FAQ 19,6%에 «(do turn para o river)» | 동형(L186) |
| 20 | implied-odds | 58 | 정정 | «all-in ou stack curto = zero» → «all-in = zero, stack curto = sobra muito pouco» | 동형(L225) |
| 21 | kicker | 19 | 정정 | «melhor mão possível» → «sua melhor mão» · «não existe kicker nenhum» → «o seu kicker não conta» · 분할 조건 «Se ninguém consegue melhorar o board» (FAQ 197행 어법) | 동형(L109) |
| 22 | kicker | 27 | 정정 | «o rei dele superava meu nove» → «a carta que sobrava pra ele — um rei — venceu a disputa» (K vs 보드 Q 기전을 오도하지 않게 · 1차안 «o kicker dele»는 렌즈가 «반전 스포일러+순환 정의»로 잡아 재작성) | 동형(L19) |
| 23 | outs | 46 | 정정 | «compartilham uma carta … uma a menos» → «compartilham cartas … uma no flush + gutshot, duas no flush + projeto aberto» | 동형(L151) |
| 24 | position-play | 81 | 정정 | «a pior cadeira» → «a pior cadeira pré-flop» | 동형(L299) |
| 25 | positions | 2 | 정정 | «Duas voltas depois» → «Três mãos depois» | 동형(L29) |
| 26 | positions | 58 | 정정 | «os assentos UTG só existem…» → «os assentos UTG+1 e UTG+2 só existem…» | 동형(L172) |
| 27 | pot-odds | 10 | 정정 | 스텝 4 «≈ 35% de fechar» → «com duas cartas por vir» | 동형(L55) |
| 28 | pot-odds | 37 | 정정 | «numa única carta a partir do flop» + 표 19,6%와의 관계를 괄호로 | 동형(L125) |
| 29 | pot-odds | 61 | 정정 | FAQ «é ótimo com um flush draw» → 🔴 **딜러 렌즈(D유형·높음)가 1차안을 뒤집었다**: 조건은 «남은 카드 수»가 아니라 «**뒤에 베팅이 더 없는가**»다 → «só quando você já vai ver as duas cartas — all-in ou sem mais apostas (35%) —, não fecha se o call compra uma carta só (19,1% do flop, 19,6% do turn)» | 동형(L203) |
| 30 | probability | 57 | 정정 | SF 불릿에 7장 값 «ou perto de 1 em 3.590 até o river» (로열 항목과 같은 형식) | 동형(L180) |
| 31 | split-pot | 11 | 정정 | «o chop mais comum de todos» → «um dos chops mais comuns» (멀티웨이 최상급은 검수장 MC 89%에만 기대므로 안 넣었다) | 동형(L68) |
| 32 | split-pot | 23 | 정정 | 팁 끝 «numa mesa que joga sozinha, esse é o caso normal» → «isso vale só quando a mesa ainda pode ser batida; se nada a bate, o call é automático» | 동형(L91) |
| 33 | shc | 17 | **A안** | 77 «Só em posição tardia» — §2-C | 동형(L81) |
| 34 | shc | 24 | **A안** | MP «Adicione 88, 99» — §2-C | 동형(L99) |
| 35 | shc | 25 | **A안** | CO «Adicione 55–77» — §2-C | 동형(L100) |
| 36 | shc | 75 | 정정 | FAQ «15–20% do topo» → «o núcleo dos ~15–20% de mãos que você joga numa sessão (essas mãos sozinhas são só cerca de 5% do total)» — 1차안 «que valem uma abertura»는 렌즈가 같은 글 L163 정의(세션 플레이 비율)와 충돌한다고 잡아 재작성. 70콤보 = 5,3% | 동형(L258) |
| 37 | straddle | 2 | 정정 | tldr «permitida só em cash games» → «quase sempre restrita a cash games» | 동형(tldr) |
| 38 | straddle | 50 | 정정 | FAQ «só antes de as cartas serem distribuídas» → «antes de olhar suas cartas (na maioria das salas, antes mesmo de elas serem distribuídas)» | 🔴 **pt 누락** — EN L161은 «(or before you look at them…)» 단서를 갖고 있었다 |
| 39 | strategy | 48 | 정정 | «Um call só ganha se você já está na frente» → «Um call não tem fold equity — não faz ninguém foldar agora, então precisa acertar ou chegar ao showdown na frente» | 동형(L152) |
| 40 | strategy | 71 | 정정 | FAQ 동일 방향 («pagar não tem fold equity — não faz ninguém foldar agora») | 동형(L212) |

### §2-A. 왜 36건을 «고쳤나» (A안이 아니라)

검수장이 «수용 가능한 잔재»를 선택지로 준 것은 맞지만, **40건 중 27건은 «틀리진 않았으나 오해를 부른다»가 아니라 독자가 실제로 다른 값·다른 행동을 갖고 가는 자리**였다(19,6%↔19,1% 국면 · 사이드팟 배제 조건 · 스트링벳 정의 · «Duas voltas» · «só em cash games» · 콜=폴드에퀴티 0 등). 정정 비용은 검수장 판정대로 «같은 글 안 정답 표현» 재사용이라 0에 가까웠다. 남긴 4건은 아래 두 사유뿐이다.

### §2-B. `holdem-bad-beat` #12 «~65% (2:1)» — A안 유지 · **EN-먼저 8로케일 동시 정정 대상으로 승격**

본체가 `lib/poker-eval.ts`로 턴·리버 990조합 **전수열거**했다(검수장 값과 소수점까지 일치):

| 매치업 | 오버페어 |
|---|---:|
| QQ vs 5♦3♦ / J♦7♦2♣ | **61,62%** |
| QQ vs 9♦4♦ / J♦6♦2♣ | **62,53%** |
| QQ vs 8♦3♦ / K♦J♦2♣ | **63,43%** |

→ «~65%»는 34,97%(드로우 «완성» 확률)의 여집합이지 «승리» 확률이 아니고, «(2:1)»(66,7%)은 실제 약 5:3과 4%p 벌어진다. **권장 «~62% (cerca de 5:3)».** 그런데 이 값은 **8로케일 동일 표 셀**(en·de·es·id·ja·pt·zh·zh-hant 실측)이라 §13 언어 불변 규율상 pt만 바꾸면 pt가 혼자 갈라진다. M-076 §4 ③ 「«~65%» 8로케일 판단」이 정확히 이 자리다 → **판정: 값을 바꾼다(8로케일 동시 · EN-먼저 트랙)**. pt는 그 회차에 같이 간다. 🪶 핸드오프 미결 「③ EN bad-beat overpair 행 «fills on the river»」와 같은 행이라 한 번에 닫힌다.

### §2-C. `holdem-starting-hands-chart` #17·#24·#25 — A안 유지 · 사장님 판단 대기 #1

세 행은 전부 **«77이 어느 포지션에서 열리나»**로 수렴하고, 그건 핸드오프 「사장님 판단 대기 #1 — `starting-hands-chart #13` UTG 13% vs 조합수 144콤보 10,86%」의 하위 문제다(검수장도 「13% = 172조합인데 핵심 목록 58콤보」로 같은 산수를 했다). #1이 «수치를 고친다»로 가면 77의 자리가 바뀌고, «목록을 고친다»로 가면 표가 바뀐다 — **어느 쪽이든 세 행이 같이 움직이므로 지금 한쪽만 고치면 #1 판정 때 되돌린다.** 핸드오프 규율(「#1 판정 시 함께」)대로 대기.

---

## §3. 렌즈 21건 — 반영 17 · 기각 3 · 스코프 밖 1

렌즈 2종(교열 diff / 네이티브+딜러+수학 · 둘 다 Opus 서브)이 독립적으로 잡은 것 중 **양쪽이 겹친 4건**(drawing-odds «pra o» 문법 · 3bet 172 축어 중복 · card-counting 97 재작성 · straddle 162 구두점)이 가장 확실했고 전부 반영했다.

**기각 3건 — 근거**

| 렌즈 지적 | 기각 이유 |
|---|---|
| B-2 «string bet 정의에 스택 복귀를 넣지 마라 — 103조 원문이 레포에 없어 대조 불가, EN·7로케일이 한정어 없이 씀» | 🔴 **본체가 오늘 2026 WSOP 룰북 PDF를 받아 pdftotext로 103조를 축어 확인했다**(`wsop.gg-global-cdn.com/wsop/pdfs/2026-WSOP-Tournament-Rules.pdf` L1288–1292): «…in multiple movements **that include a return to a Participant's stack** without a prior verbal declaration of intent **or visual deception** intended to induce action out of turn». 검수장 인용과 일치. 조항 번호를 달고 인용하는 문장은 조문에 충실해야 한다 — 렌즈의 «많은 룸이 앞으로 두 번 밀어도 스트링 판정한다»는 **하우스 실무**이지 103조가 아니다. 다만 렌즈 덕에 조문의 둘째 요소(시각적 기만)를 보태 완결했다. EN·7로케일이 «multiple motions»만 쓰는 것은 **그쪽이 조문보다 넓은 것** → §4 EN-먼저 목록 |
| A-12·B «hand-rankings 3-2 주장이 shc와 갈린다 → 3-2를 빼라» | 32o < 72o는 검수장 MC(300만) + 렌즈 B MC(300만) **두 번 독립 검증**됐다. 빼는 대신 shc L207 «a pior mão de verdade»를 «a mais famosa das piores»로 맞춰 갈림을 없앴다(L274 «amplamente considerada»는 이미 양립) |
| B-8 «3bet FAQ의 55%<67% 이유(블러프 보유)가 본문 이유(HUD 합산)와 다르다 → 통일» | 둘 다 참이고 방향이 같다. FAQ 문안은 **EN 08-27 정정본 축어**라 pt만 다른 이유로 바꾸면 드리프트가 다시 생긴다. 유지 |

**렌즈끼리 서로를 고친 자리** — pot-odds #61 FAQ: 1차안(«se ainda vierem duas cartas»)은 검수장 권고를 따른 것이었는데 딜러 렌즈가 «조건은 카드 수가 아니라 **추가 베팅 유무**»라고 뒤집었다(플랍 풀팟 벳에 35%로 콜하고 턴에 접는 독자를 만든다 — 같은 글 L179의 유일한 2:1 예시가 «Fold correto»다). **D유형은 계산 렌즈로는 안 나온다**는 REVIEW-PROTOCOL 명제가 이번에도 재현됐다.

---

## §4. EN-먼저 트랙으로 넘기는 것 (pt가 지금 «혼자 맞는» 자리)

원장 40건 중 **EN 동형 30건**을 pt만 고쳤다. 아래는 그중 «EN도 같은 결함»인 것 — 핸드오프 「EN-먼저 판정 후보 묶음」에 등재한다(번호는 §2 표):

- **수치·규칙**: #7 «~65% (2:1)» → ~62%(8로케일) · #9·10 103조 정의(8로케일) · #14는 pt 단독 · #16 SF 5장 라벨 · #30 SF 7장 병기 · #19 19,6% 국면 라벨
- **자기모순**: #1 폴라 예시 QQ(= 핸드오프 ㉓) · #2 «far more often» · #6 사이드팟 · #13 셋오버셋 정의 · #18 four-flush · #20 short stack = zero · #21 playing the board 정의 · #22 «his king outranked my nine» · #23 «share a card» · #24 «worst seat» · #25 «Two orbits» · #26 «UTG seats» · #27·28·29 pot-odds 3곳 · #31·32 split-pot · #36 15–20% · #37 tldr «only in cash games» · #39·40 «A call can only win if you're already ahead»
- **pt가 EN보다 뒤처졌던 드리프트(EN은 이미 옳음 · pt만 고쳤다)**: #3·#5(3bet MDF/55% — EN 08-27) · #12(«in most jurisdictions») · #38(«or before you look at them»)

🔴 **3bet은 `masterUpdated` 08-26 < EN 08-27 드리프트 목록에 있다.** 이번에 MDF/55% 두 자리만 EN 08-27을 미러했고 **그 커밋의 다른 변경은 안 봤다** → `masterUpdated`는 올리지 않았다. 드리프트 8편 소급은 별건.

---

## §5. 2차 교열 — 17건 → 반영 15 · 기각 2 · 미조치 2

1차 정정이 새로 만든 결함이 **또 나왔다**(수정이 결함 주입 공정이라는 명제 재현). 기계 점검(백틱 0 · `==` 짝 · 표 열 수 · 디렉티브 닫힘)과 수치 재검산은 전부 통과했고, 지적은 전부 문장 층이었다.

- **반영 15**: 3bet FAQ 괄호를 본문과 같은 근거(HUD 집계)로 통일 · betting-actions «pilha»→«stack»(파일 내 용어) + FAQ 어순 분리 · kicker H2↔직답 축어 중복 해소 · straddle tldr «quase» 중복 · shc «famosa» 중복 + L270 «tida como a pior» · pot-odds L126 괄호 삭제(표 머리글이 이미 말함) + L200 `—,` 정리 · strategy 표 셀 주어 · split-pot 팁 꼬리 압축 · equity 괄호 안 괄호 · drawing-odds «pares de bolso» · card-counting L97↔L83 중복 완화.
- **기각 2** — 🔴 **둘 다 렌즈 제안 문안이 원장 RISKY를 되살리는 것이었다**: ① kicker L110 제안 «já formam a melhor mão possível»은 #19가 지적한 «보드 = 넛츠» 정의 오류 그대로 ② kicker L20 제안 «o rei que sobrava pra ele batia o meu nove»는 #27이 지적한 «K vs 9» 기전 오도 그대로. 중복·대시 지적만 취하고 문안은 따로 썼다(«a sua carta lateral deixa de decidir qualquer coisa» / «a carta que sobrava pra ele, um rei, venceu a disputa»). **2차 교열자는 원장을 안 봤으므로 이 되돌림을 알 수 없었다** — 검수자도 틀린다.
- **미조치 2**(낮음·EN 동형): straddle tldr «postada antes de as cartas serem distribuídas» 단정형 4곳(FAQ만 유보) · positions «o mesmo J♥ J♠» 3핸드 재수령 확률(경험담·EN 동형).
- 🪶 **2차가 찾은 별건(정정 이전부터 · EN 동형)**: split-pot 팁 «É uma barra alta» — 높은 문턱은 «콜» 쪽(상대가 2/3 이상 보드플레이여야)이고 폴드 조건(1/3 초과)은 낮은 문턱이라 접속이 뒤집혀 있다 → §4 EN-먼저 목록에 추가. 3bet EN L286 FAQ의 «because a balanced 3-bet range carries bluffs, you fold a little less» 논거도 순환(MDF 자체가 «아무 두 장 블러프» 전제로 도출된 값)이라 EN 정정 후보.

---

## §6. 요청

1. **회귀 기준선 뒤집기** — pt 세션 감시 파일 6개 + `pt-tournament-2026-08-28.md`에서 이번 36곳이 🔴로 뜰 것이다. 원장 40행은 «RISKY → 재검사(해시 변경)»로, A안 4행(#7 · #33~35)은 **RISKY 유지 + 사유 링크**(§2-B·§2-C)로 부탁한다.
2. **«~65%» 8로케일 정정은 EN-먼저 회차에서 한다** — 그 전에 pt 원장 bad-beat #12를 WRONG으로 올리지 말고 RISKY 유지(값이 바뀔 예정 · 지금 바꾸면 8로케일이 갈린다).
3. 🪶 **WSOP 103조 원문 자산** — 검수장·본체 둘 다 같은 PDF를 썼다. 다음에 조문을 인용할 때 «레포에 원문이 없다»는 렌즈 지적이 다시 나오지 않게, 검수장 `.cache`나 본체 `docs/`에 pdftotext 추출본을 둘지 판단 요청(본체는 메모리에 URL만 갖고 있다).
