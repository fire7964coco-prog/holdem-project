# 브리프 — queue 회차 Q13 · MA-147 ②③ (EN-먼저 glossary 묶음 + es 정정 3)

> 회차 = **Q13**(아래 §0에서 **Q13-a / Q13-b 두 세션으로 갈랐다**) · 원문 = `~/Downloads/홀덤검수/mailbox/out-검수장.md` **MA-147 ② ③**
> 원장 = `홀덤검수/ledger/es/` + `ledger/id/`(6편씩 · es 회차 6 ↔ id 회차 5 **독립 수렴** · id 단독 결함 0)
> 모델 = **전 구간 Opus**(§7-F 「회차 모양」 — 정정 문면이 대부분 «같은 글 안» 또는 «형제 de/pt 정본»이라 창작이 아니다)
> 1차 출처는 **본체 덤프 축어**(`docs/sources/`) + 실열람 2건을 §2에 실어 왔다 — B 구간이 룰북·외부 페이지를 다시 열지 않는다(프로토콜 §3-⑥).

> 🔴🔴 **Q13-a 마감 후 정정 (2026-09-21 C 구간) — 아래 §3의 처방 문면 하나가 틀렸다. 이 브리프를 근거로 인용하기 전에 읽어라.**
> **C2의 1차 처방** 「**Only the top end is a true cooler** — stacking off with the bottom end … is usually a leak」(de `fc404ca8` 96행 이식)은 **공집합을 가리킨다** — top end = 그 보드의 너츠라 «지는 쪽»이 될 수 없다(보드 `Q♠J♦T♥`: A-K 너츠 · K-9 중간 · **9-8 idiot end**). 실제 straight-over-straight 쿨러의 주인공은 **중간 스트레이트**다.
> **정본 = 「너츠에 가까운 스트레이트는 강해서 못 접는다 — 단 하단(idiot end)은 «대개» 폴드지 쿨러가 아니다」**(진행 파일 §3 「Q13-a」 1·2항). 🔴 **원장이 «정본»으로 든 de 문면 자체가 같은 오류였다** — 검수장 회신 = §5 Q13a-1.
> 🪶 그리고 **§1 자리 표의 «de·pt·id 정본 보유» 판정은 전건 맞았다**(교열 렌즈 8건 원문 재확인) — 반대로 **MA의 로케일 «개수»는 여섯 축에서 작았다**(§0-B).

## §0. 범위 — 왜 두 세션인가

MA-147 ②는 **앵커 21개**로 적혀 있다. 그 21개를 8로케일에 전수 대조하니 **자리가 약 210곳**으로 벌어졌다
(«한 명제 = 한 자리»가 아니라 **표 · 본문 · 직답 블록 · FAQ · tldr · desc · 요약** 여러 층에 산다 — 진행 파일 §3 「Q12-a」 마지막 🪶).

| 세션 | 편 | 앵커 | 자리(실측) | es ③ |
|---|---|---|---:|---|
| **Q13-a** | `holdem-cooler` · `holdem-bad-beat` · `holdem-fish` | C1~C5 · B1~B4 · F1~F2 | 약 100 | fish 「izquierda→derecha」(**WRONG**) · cooler FAQ 「~75%」 삭제 |
| **Q13-b** | `holdem-glossary` · `holdem-rake` · `holdem-straddle` | G1~G3 · R1~R5 · S1~S4 | 약 110 | rake FAQ 「Solo se cobra…」 |

🔴 **대상 로케일은 8이다**(실측): `en de es id ja pt zh zh-hant`. 이 6편은 **꼬리 17로케일에도 KO에도 없다**
(`lib/posts/`·`lib/posts.ts` 각각 0건). 결재 40 ②의 «꼬리 부채»가 이 회차엔 아예 생기지 않는다.

## §0-B. 🔴 전제 실측 — 앵커 축어를 그대로 믿지 마라

헤드 09-21 실측(「앵커 21개 중 고쳐진 것 0」)을 자리 단위로 다시 쟀다. **MA가 적은 로케일 개수가 실제보다 작다** — 아래가 정본이다.

| 앵커 | MA가 적은 것 | **실측** | 어긋난 이유 |
|---|---|---|---|
| C1 표머리 | 「In every case」 | **8/8**(문면은 「In every **one**」) | 축어가 틀렸다(헤드가 이미 지적) |
| B3 flush draw dead | en·es | **en·es·zh·zh-hant**(4) | zh 「毫无希望」 · zh-hant 「毫無指望」가 같은 명제 |
| B4 잭팟 재원 | en·es·id | **en·es·id·ja·zh·zh-hant**(6) | ja 「対象ハンドから」 · zh 「符合条件的牌里」 · zh-hant 「合格牌局裡」 |
| B2 「losing decisions」 | en·es·pt·de·id | **8/8** | ja·zh·zh-hant 요약 3항·FAQ에 동형 |
| R3 「+」 표기 | de·zh-hant **0** | **8/8**(zh-hant는 **전각 `＋`**) | ASCII `+` grep이 전각을 못 잡았다 |
| F1 「첫 오빗」 | en·es | **8/8 + zh는 desc까지 2자리** | 로케일마다 다른 표현(`primeira volta de mesa`·`orbit pertama`) |

🪶 규율 재확인 = 진행 파일 §3 「Q12-b」 10항 — **«한 낱말 패턴»이 아니라 «자리별 1행 표»로 센다.** 아래 §1이 그 표다.

## §1. 자리 표 (로케일:줄번호 · 2026-09-21 grep · `.ts` 기준)

### Q13-a

| 앵커 | 명제 | 자리 |
|---|---|---|
| **C1** | 표머리 「In every one, *both* hands are strong enough that folding would be a losing play」 = 6행 보편 단정인데 **스트레이트 행만 예외** | en:77 de:83(직답) es:78 id:78 ja:87 pt:78 zh:87 zh-hant:87 |
| **C2** | 스트레이트 행 「A made straight on a connected board is very hard to release」 — **하단(idiot end) 구분 없음** | en:88 es:89 id:89 ja:98 pt:89 zh:98 zh-hant:98 (**de:96 = 정본**) |
| **C3a** | KK 표행 「you're never folding kings preflop」 | en:83 de:91 es:84 id:84 ja:93 pt:84 zh:93 zh-hant:93 |
| **C3b** | KK FAQ 「no reasonable player folds pocket kings before the flop」 | en:166 de:186 es:171 id:167 ja:188 pt:167 zh:188 zh-hant:190 |
| **C3c** | KK 직답 블록(zh-hant 단독) 「翻牌前沒有人會蓋 KK」 | zh-hant:83 |
| **C4a** | cold deck 불릿 「a run of unavoidable losing hands」 | en:102 es:103 id:103 ja:115 pt:103 zh:115 zh-hant:117 (**de:113 = 정본**) |
| **C4b** | cold deck 직답 블록(같은 명제) | ja:109 zh:109 zh-hant:111 |
| **C5**(es ③) | es FAQ 「~75% o más」 ↔ 형제 `holdem-bad-beat` 「80% o más」 · **EN cooler엔 수치 없음** | es:159 |
| **B1a** | tldr 「you were ahead the whole way」 | 8/8 모두 `:8` |
| **B1b** | 스트라이프 값 「Ahead the whole way」 ↔ **같은 행 라벨** 「Where you stood when the money went in」 | en:28 de:29 es:29 id:29 ja:29 pt:29 zh:29 zh-hant:29 |
| **B2a** | 요약 3항 「losing decisions that pay you off」(무한정 등치) | en:207 de:231 es:216 id:208 ja:236 pt:208 zh:234 zh-hant:236 |
| **B2b** | FAQ 「A bad beat means you made the *correct* decision」(무한정) | en:199 de:223 es:200 id:200 ja:228 pt:200 zh:226 zh-hant:228 |
| **B3** | 「Your top pair had their flush draw **dead**」 — 9아웃 = **34.97%** | en:40 es:41 zh:44 zh-hant:44 (**de:42 · pt:41 · id:41 = 정본** · ja:44 「封じていた」 = 판정 필요) |
| **B4** | 잭팟 재원 「built from a small drop taken out of **qualifying hands**」 = 재원↔지급조건 혼선 | en:106 es:107 id:107 ja:120 zh:120 zh-hant:124 (**de:118 · pt:107 = 정본**) |
| **F1** | 도입 「how to spot a fish **in the first orbit**」 ↔ 본문·FAQ 「an orbit or two」 | en:21 de:22 es:22 id:22 ja:22 pt:22 zh:7(desc)·22 zh-hant:22 |
| **F2**(es ③) | 「la ballena … sentado a su **izquierda**」 = **WRONG**(액션 시계방향 → 고래는 **오른쪽**에 앉혀야 포지션을 잡는다) | es:26 |

### Q13-b

| 앵커 | 명제 | 자리 |
|---|---|---|
| **G1a** | 혼동표 「A check risks no chips (**only when no bet is live**)」 | en:44 de:46 es:45 id:45 ja:48 pt:45 zh:50 zh-hant:48 |
| **G1b** | Check 표행 「only possible when **no bet has been made this round**」 | en:67 de:72 es:68 id:68 ja:74 pt:68 zh:89 zh-hant:74 |
| **G1c** | Check FAQ 답(같은 명제) | en:269 de:311 es:270 id:270 ja:291 pt:274 zh:308 zh-hant:297 |
| **G2** | SB 행 「acts first postflop (worst postflop seat)」 — **헤즈업 반례**(A 87) | en:101 de:109 es:102 id:102 ja:111 pt:102 zh:127 zh-hant:111 |
| **G3** | No-limit/Limit 행 = **한 문장 두 결함**(① PL 정의 부재 ② **하한 = BB** 부재) | en:203 es:204 id:204 ja:222 pt:205(**PL 정본 보유**) zh:238 zh-hant:223 (**de: 행 없음**) |
| **R1** | desc 「the fee the house takes from **every** cash-game pot」 ↔ 같은 글 「no flop, no drop」 | en:7 es:7 id:7 ja:7 pt:7 zh:7 zh-hant:7 (**de:7 = 정본** 「aus den **meisten** Cashgame-Pots」) |
| **R2** | tldr 「takes from **each** pot」(같은 tldr 두 번째 문장이 반증) | 8/8 모두 `:8`(de 포함) |
| **R3a** | 본문 「A tournament buy-in **is split into two parts, shown with a "+" sign**」 | en:110 de:125 es:113 id:111 ja:126 pt:111 zh:139 zh-hant:126 |
| **R3b** | FAQ 「The fee **is added to** your buy-in and shown with a "+"」 | en:172 de:186·188 es:185 id:173 ja:203 pt:169 zh:204 zh-hant:208 |
| **R3c** | 표행 「Tournament fee / **Added to** the buy-in up front / … / **Every tournament**」 | en:57 de:64 es:58 id:58 ja:64 pt:58 zh:66 zh-hant:64 |
| **R4** | FAQ 레이크 절감 목록의 「preferring **high-stakes** time-charge games」 — 뱅크롤·에지 조건절이 **앞 절에만** 걸려 있다 | en:164 es:177 id:165 ja:195 zh:196 zh-hant:200 (pt·de: 해당 절 없음 — 착수 시 재확인) |
| **S1** | tldr 「the last action and the option to raise **preflop**」 — 국면어가 **문장 끝**이라 «마지막 액션»에 안 닿는다 | en:8 es:8 id:8 pt:8 (**de·ja·zh·zh-hant = 정본**: 한정어가 앞) |
| **S2** | 도입 하이라이트 「doubles the stakes and buys one player **the last word**」 — **국면 무한정** | en:19 · 나머지 7로케일 `:20` |
| **S3a** | 「Only in specific spots, and **never** as a pure profit play」 | en:130 de:143 es:131 id:131 ja:147 pt:131 zh:145 zh-hant:149 |
| **S3b** | FAQ 「… **never** as a way to make money」 | en:181 de:214 es:186 id:182 ja:198 pt:182 zh:215 zh-hant:200 |
| **S4** | 요약 3항 「Straddle **for the table image** or the entertainment, not the profit」 ↔ 본문이 이미지 목적을 **기각** | en:189 de:222 es:194 id:190 ja:210 pt:190 zh:223 zh-hant:208 |
| **R5**(es ③) | es rake FAQ 「**Solo** se cobra si la mano llega al flop」 ↔ 같은 글 3곳(L51·L144·L160)이 예외 명시 | es(rake) FAQ |

## §2. 1차 출처 — 축어 (B 구간은 이 절만 본다)

1. **WSOP A 5조 Fees**(`docs/sources/wsop-2026-tournament-rules.txt` L176–178) — 축어:
   「The payment required for participation in any WSOP Event is **the full amount of the Event's Buy-In, which includes an administrative fee** to cover necessary WSOP staffing, materials, and related administrative costs.」
   → **세계 최대 시리즈는 수수료를 바이인에 «포함»시키고 «+»로 따로 적지 않는다.** R3의 반례.
2. **WSOP A 87조 Button in Heads-Up Play**(같은 파일 L1030–1032) — 축어:
   「In heads-up play, the small blind is on the button and **acts first pre-flop and last on all other betting rounds**.」
   → G2의 반례(헤즈업에서 SB는 포스트플랍 **마지막**).
3. **WSOP A SECTION VIII — NO-LIMIT**(같은 파일 L1591–1593) — 축어:
   「a. The maximum amount a Participant can bet or raise is only limited by the amount of chips they have in their possession. **b. The minimum bet is equal to the amount of the Big Blind.**」
   **POT LIMIT**(L1597–1599): 「a. The maximum amount a Participant can bet or raise is **limited to the amount of the pot**. b. The minimum bet is equal to the amount of the Big Blind.」 → G3의 두 결함 모두.
4. **WSOP B 159조**(`wsop-2026-live-action-rules.txt` L777) — 축어:
   「When you post the big blind, it serves as your opening bet. **When it is your next turn to act, you have the option to raise.**」
   + **B 156조**(L767): 「A participant posting a blind in the game's regular structure **has the option of raising the pot at the first turn to act**.」 → G1(BB 프리플랍 체크 옵션)의 근거.
5. **WSOP B 165조**(같은 파일 L799–802) — 축어:
   「A live straddle bet is allowed in all blind games. **The player posting the straddle will have last action in the opening round of betting** and retains the option to raise. … A straddle may be posted from either Under the Gun (UTG) or the Button, **with the Button straddle taking precedence**.」
   → S1·S2의 국면 한정(「opening round of betting」 = 프리플랍)이 **룰북 문면 그대로**다.
6. **GTO Wizard 「Preflop Strategy in Straddled Pots」**(글이 스스로 링크한 출처 · 2026-09-21 본체 실열람) — 축어:
   「If the entire table agrees to straddle, then you are effectively raising the stakes (often without raising the rake) without taking on any disadvantage relative to your competition. **This will generally be to your advantage if you are among the best players at the table.**」
   그리고 「**Even though this is -EV in a vacuum**, straddling can be a wise long-term investment in keeping your seat in a good game.」
   → S3의 「never」 한 낱말이 **글이 인용한 출처와 어긋난다.** 🔴 「대부분에게 -EV」는 그대로 옳다(같은 출처: 「almost always a money-losing proposition」).
7. **Wiktionary 「cold deck」**(2026-09-21 본체 실열람) — 명사 뜻 전부:
   뜻1(포커) 「A hand where two or more players have very strong hands and one or more of them loses a lot of chips despite the strength of the hand(s) involved.」 / 뜻2(도박) 「A pre-shuffled deck of cards substituted for the real deck in order to cheat.」
   → **사전 어느 뜻도 «연속된 국면»이 아니다.** C4의 근거. (구어 «카드가 안 풀리는 시기» 용법은 실재 → 둘을 갈라 쓴다 = de 정본.)
8. **9아웃 플러시 드로우 = 플랍→리버 34.97%**(검수장 FACTS §2 · 같은 글 표가 「~63% (1.7:1)」로 이미 값매김) → B3의 근거.

## §3. 처방 문면 (EN 정본 · 로케일은 이 뜻을 자기 문체로)

- **C1** 「In every one」 → **「In almost every one」**(스트레이트 행이 예외를 달므로). de 직답 「Das Muster ist immer dasselbe」도 같은 층 — 같이 완화.
- **C2** de 정본 이식: 「**Only the top end is a true cooler** — stacking off with the bottom end (the "idiot end") is usually a leak, not a cooler.」
- **C3** 「never folding kings」 → **「almost never folding kings」** · FAQ 「no reasonable player folds」 → **「almost no reasonable player folds … barring the rare read that screams aces」**(같은 글 en:112 「Skilled players *can* occasionally lay down the second-best hand when the action screams the nuts」 이식).
- **C4** de 정본 이식: 「in the dictionary it's **the single unavoidable losing hand itself**; at the table people mostly use it for a stretch where the cards run against you; historically it also meant a cheating move (swapping in a pre-arranged "cold" deck).」
- **B1** tldr·스트라이프 값 → **「ahead when the money went in」**(같은 글 요약 1항이 이미 그 문면이다). 스트라이프 라벨은 중복을 피해 **「Where you stood, not how it finished」** 계열로.
- **B2** 같은 글 본문(en:144)의 **「Most of the time」**을 요약 3항·FAQ에 이식. FAQ는 「means you made the correct decision」 → **「means your money went in as the favorite — usually because the decision was right」** + 「being ahead isn't proof on its own」 한 구(사이징·ICM).
- **B3** de 정본 이식: 「had their flush draw dead」 → **「was well ahead of their flush draw」**.
- **B4** de·pt 정본 이식: 「a small drop taken out of qualifying hands」 → **「a small extra drop taken out of pots as they're played」**(재원 ≠ 지급조건).
- **F1** 도입 「in the first orbit」 → **「in an orbit or two」**(같은 글 본문·FAQ 문면).
- **G1** 「only possible when no bet has been made this round」 → **「only when there's no bet left for you to match」**(BB 프리플랍 옵션 포함 · B 156·159).
- **G2** SB 행 끝에 **「— except heads-up, where the small blind is on the button and acts last after the flop」**(A 87).
- **G3** 「bet anything up to your whole stack」 → **「bet anything from the big blind up to your whole stack」** + pt 정본 이식 **「(pot-limit, the PLO format, caps each bet at the size of the pot)」**.
- **R1·R2** 「every / each pot」 → **「most pots」**(de desc 정본 · 같은 글 「no flop, no drop」과 정합).
- **R3** 「is split into two parts, shown with a "+"」 → **「is usually split into two parts, shown with a "+"」** + 한 구 **「some series — the WSOP among them — quote one buy-in with the fee already inside」**(A 5조). 표행 「Added to the buy-in up front」 → **「Charged with the buy-in up front」** · 「Every tournament」 → **「Almost every tournament」**.
- **R4** 시간제 항목에 앞 절의 조건을 닿게 한다: 「preferring high-stakes time-charge games」 뒤에 **「— the same bankroll-and-edge caveat applies, since that too means moving up」**.
- **S1** 국면어를 앞으로: 「buys the straddler **the last action preflop** and the option to raise」(de 정본 어순).
- **S2** 도입 하이라이트에 국면어: 「buys one player **the last word before the flop**」. 🔴 zh 「最后一句话」·zh-hant 「最後一句話」 **역어는 건드리지 마라**(§4).
- **S3** 「never」 → **「almost never」** 2자리 + 「everyone already straddles」 불릿에 출처 축어를 한 구로: 「GTO Wizard's own analysis notes this **generally works in your favour if you're among the best players at the table**」.
- **S4** 요약 3항 → **「Straddle for the entertainment, not the image or the profit」**(본문 en:136 「an image edge that rarely materializes」와 정합).
- **C5**(es) FAQ 「(normalmente favorito claro, ~75% o más)」 → **수치 삭제**(형제 글 80%와 문턱이 갈린다 · EN엔 수치 없음).
- **F2**(es) 「sentado a su **izquierda**」 → **「a su derecha」**(같은 글 L143 「Actuar el último es una ventaja enorme」와 정합).
- **R5**(es) FAQ 「**Solo** se cobra si la mano llega al flop」 → 같은 글 L144 형(「Normalmente no … No es universal」).

## §4. 이 회차에서 하지 말 것

1. 🔴 **`bad-beat` 「~63% (1.7:1)」을 건드리지 마라** — 결재 15 고정(65.0%/1.86:1도, ~62%도 아니다).
2. 🔴 **`bad-beat` §13 예시의 「칩이 플랍에서 들어갔다」 한정어를 빼지 마라**(빼면 그 예시가 쿨러가 된다).
3. 🔴 **zh 「最后一句话」 / zh-hant 「最後一句話」은 그 파일의 기존 정본**이다(Q4-a 판정). 직역투로 보고 바꾸지 마라 — **더하는 것은 «국면 한정»뿐**이다.
4. 🔴 **`straddle` 각주 「only … when it is posted on the button」과 「the button keeps last action all the way down」은 일부러 그 문면**이다(Q4-a).
5. 🔴 **「대부분에게 -EV」를 흔들지 마라** — 출처가 「almost always a money-losing proposition」이다. 고치는 것은 **「never」 한 낱말**뿐.
6. 🔴 **es `holdem-glossary` 표제어 순서(「영어 (스페인어)」)를 뒤집지 마라**(Q5-a 판정).
7. 🔴 **형제 글 인용은 원문 복사**(메모리 `quote-sibling-posts-verbatim`) — 카드·수치·무늬를 기억으로 적지 마라.
8. 🔴 **`updated`는 올리고 `masterUpdated`는 올리지 않는다** — 이 회차는 EN 델타 전건 대조가 아니라 **EN-먼저 정정 + 동시 전파**다(프로토콜 §5-⑦-B · 진행 파일 §3 「스탬프 정직성」).
9. 🔴 **desc를 고치는 편**(R1 = rake 7로케일)은 **160자 상한**을 다시 잰다(`check:meta`).
10. 🔴 **백틱 금지**(§12-A) · slug·이미지 경로·readnext 대상 무변경.

## §5. 게이트(C 구간)

`audit:hard --slug=<slug> --locale=<loc>`(손댄 8로케일 전부) · `check:drift`(EN을 고치므로 같은 회차에 8로케일 전파해 0으로) ·
`check:structure` · `check:answer-echo`(직답 블록을 고치는 자리 C1·C3c·C4b) · `check:meta`(desc) · `check:cjk` · `check:hygiene` ·
`check:mirror-pair --slug=<slug>`(zh↔zh-hant) · `check:stamp`(커밋 뒤) · `npm run build`.
