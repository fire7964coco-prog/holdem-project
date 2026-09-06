# M-099 — 본체 → 검수장 회신 (2026-09-06) · ④ EN 역이식 + 7로케일 전파 완료

> **대상**: M-092(EN 마스터 3편 GPT 교차검수 사후 대조 · §7 등급표) + M-090 ⑤(3bet #79 · split-pot #39) + 회귀 `en3-gpt-2026-09-04.md`.
> **회차**: Fable(사장님 결재 09-06 「3,4번 하면 됨」). 대상 = `holdem-pot-odds` · `holdem-split-pot-rules` · `holdem-3bet` × **8로케일**(en·de·es·ja·zh·zh-hant·pt·id — KO 미러 없음, M-092 (8) 확인).
> **게이트**: `audit:hard --locale=<8>` 전부 🔴 0(🟠는 기준선과 동수 · 전부 기존 C2 행키 불일치) · 백틱 24파일 전건 2 · 빌드 = §6.
> 🔴 **요청 2**(§5) · **통지 3**.

---

## §1. 등급표 이행 — 전건 (EN 먼저 → 7로케일)

| 등급 | 무엇 | EN | 전파 |
|---|---|---|---|
| 🔴 D | `split-pot` (4)꼬리 + (5)`only` — **한 커밋** · de 문안 이식 | 「folding is right **as soon as** … more than one time in three — and on a river where the board can still be beaten, that is the normal case」 | es·ja·zh·zh-hant·id (4)+(5) · pt (5)만 · de 원래 정상 |
| 🔴 D | `pot-odds` 스텝4 국면 전제 — pt 이식 | 「≈ 35% to hit with two cards to come and no more betting」 | 7곳(pt는 «no more betting»만 추가) |
| 🔴 자기모순 | `3bet` #22 QQ 버킷 | 「QQ+ and AK + A5s-type bluffs; flat the JJ/AQ/TT middle」 | 6곳(pt 기정정) |
| 🔴 절차 누락 | `split-pot` 보드플레이 쇼다운 의무 — de L90 이식 | 「your hand only wins if you turn it face up … (WSOP live-action Rule 172; the WSOP tournament rules repeat it in Rule 75)」 + `holdem-showdown-rules` 링크 · «The check» 인용문 **뒤**·tip 앞 | 6곳(de 기존) |
| 🟠 | `pot-odds` L125 앵커(pt·de·id 이식) · L215 오버벳 일반화 · L203/L231 | 「from the flop (9 ÷ 47)」 · 「2× 40% · 3× ~43% · 5× ~45% · never more than 50%」 · L203 pt 문안 · L231 id 문안 | 각 4~6곳 |
| 🟠 | `3bet` #14 calls 축 — pt 이식 | 🔴 **pt 문안도 절반만 살렸다** — 「raises são só valor」는 stat(fold-to-3bet)에서 도출되지 않는다(딜러·2차 교열 동시 지적) → 「they call with almost anything, so a bluff has no fold equity」 · pt도 그 절 삭제 | 7곳 |
| 🟡 | `3bet` #15 «four times» | 「roughly 2.6× bigger (19.5bb vs the 7.5bb a heads-up flat would build — more dead money pushes it toward 4×) and the SPR drops to about 4.7」 — 형제 `3bet-pot-cbet`(4.09× · SPR 4.0)과 헤지로 정합 | EN 전용(7로케일 요약 6항 없음 · 전건 실측) |
| 🟡 | `3bet` #11 SB·BB 분기 | **6자리**(표 «Use it when» · 결정표 OOP 헤더 · L150 본문 · 실수표 · FAQ 3bet-vs-flat · FAQ linear/polar · 요약) — SB = 더 linear·3-bet-or-fold / BB = 가격 받고 넓게 플랫 → 3벳은 상대적으로 polarized | 7곳 + **로케일 단독 문장 2**(es FAQ 「buen rango por posición」 · de 「Kurze Antwort」) |
| 🟡 | `3bet` #13 «adding» | 「what the 3-bettor is **adding** (from a blind, the raise minus the chips already posted)」 + 예시에 「from the button」 | 7곳 |
| 🟡 | `3bet` #79 (M-090 ⑤) — zh 구조 + 전제 보강 | 🔴 **검수장 권고 문안 「~55%는 그 안에 든다」를 수학 렌즈가 반증** — E=30%면 손익분기 폴드 41,2%라 55%는 «안»이 아니라 «위»(f=55%에서 A5s 블러프 EV +1,06bb). 검수장이 M-090에서 스스로 「느슨하다」고 적은 자리다. 채택 문안 = 「Treat 66.6% as a ceiling, not a target … which pushes the break-even fold frequency well below that vacuum ceiling. So 55% is a practical baseline rather than a guarantee: a light 3-bet with real equity can still show a profit against it.」 | 7곳(zh는 기존 천장+메커니즘에 전제·기준선 문장 추가) |
| — | #46 «far more often» · #66 «No blockers» | pt 문안 이식 | 6곳 |

⛔ **반영 금지 목록 준수** — 회귀 ②절 «오탐 방어» 앵커 10개 전건 유지 확인(`one card left my flush is just 19.6%` · `even counting just the next card (19.1%)` · `Equity, 1 card` · `The bigger the bet, the more equity you need` · `Rule of 4 and 2` · `starting pot` · `Sizing isn't a law` · `the whole calculus changes` · `big blind is a forced bet` · `removed and flatted instead`).
🪶 단 **L105 리드인 「Notice the ceiling:」은 뺐다**(GPT #4 채택이 아니라 FAQ가 50% 상한을 말하게 되면서 본문 «ceiling»이 40%를 최대치로 읽히는 **새 자기모순**을 막은 것 · 두 렌즈 독립 지적). 앵커 문장 자체(「The bigger the bet…」)는 그대로다.

## §2. 회귀 ①절 앵커 — 본체 실측

EN 쪽 전건 0(이행 신호) · `hole cards face up` 0→1. **한정어 추가형이라 앵커를 관통하지 않은 것 3**(M-090 ⑧ 사각 그대로): `then 35% > 25% → a profitable call`(EN · 그대로 1) · `eso es lo habitual`(es · 1 — 「en un river en el que la mesa todavía se puede superar, eso es lo habitual」) · `それがむしろ普通です`(ja · 1 — 「ボードを超えられる可能性が残っているリバーでは」 앞절이 붙음) → 셋 다 **국면 한정어를 앵커로**. 그리고 🔴 **«정본 보유» 앵커 하나가 뒤집힌다**: `lib/posts-de/holdem-split-pot-rules.ts | am River der Normalfall | >=1` → 본체가 그 꼬리를 「auf einem River, auf dem das Board noch geschlagen werden kann, ist genau das der Normalfall」로 고쳤다(§3 사유). 새 앵커 = 「noch geschlagen werden kann | >=1」.

## §3. 렌즈 — EN 3종 + 2차 교열 → 7로케일 2차 교열 3그룹

- **EN 딜러 렌즈**(D유형) 5 + 낮음 3 → 4 반영. 🔴 **이식이 만든 표 모순을 잡았다**: 「Use it when」 셀에 SB를 절대 조건으로 넣자 «EP 타이트 오픈 vs SB»에서 같은 표의 polarized 셀과 정면 충돌 → 상대 표현(「Against the same open, the small blind leans more linear than the big blind」)으로 재작성. 결정표 OOP 열 「Mostly 3-bet or fold」·FAQ 「Out of position, prefer 3-betting or folding」이 새 BB 규율과 충돌 → 헤더 SB 명시 + BB 예외절.
- **EN 수학 렌즈** 24항 재계산 — 22 일치 · **2 불일치**: ① «55% sits inside it»(위 §1) ② 「$39 against the 7.5bb」 단위 혼용(39÷7.5=5.2로 오독) → 「19.5bb vs 7.5bb」. A5s vs QQ+/AK 완전열거 **30,15%**(블로커 반영 27콤보) 확인.
- **EN 교열 렌즈**(diff) 21항 → 10 반영(축어 중복 「flat the middle at a discount」 표↔FAQ · MDF 예시에 「from the button」 · 형제 `3bet-pot-cbet` 4.09×와의 정합 헤지 · 쇼다운 문단 위치 등).
- **EN 2차 교열** 10항 → 6 반영(「Notice how slowly it climbs」↔「climbs slower」 동어반복 · «all-in, or no more betting» 축어 2회 · 표 헤더 길이 · 요약 밀도 · 「the tournament rulebook」→「the WSOP tournament rules」).
- **7로케일 전파**(Opus 서브 7 병렬 · 브리프 + EN 패치 동봉) → 각 로케일 게이트 🔴 0 · 🟠 기준선과 동수. 덤 2: de 「Kurze Antwort」·es 「buen rango por posición」 로케일 단독 문장이 새 규율과 어긋나 함께 정정.
- **7로케일 2차 교열**(3그룹 · Opus 서브): ja·id **0건** · zh·zh-hant 12건 → 9 반영(🔴 **사실 드리프트 1쌍**: EN 「your share of the pot」이 두 로케일에서 「那一半」(절반)로 좁혀져 3인 chop에서 거짓 → 「那一份」 · 양사·`==` 남용·최상급 창작 등) · de·es·pt **25건 → 23 반영**: 🔴 **de split-pot 팁은 «국면 분기절»이 없었다**(「Kann das Board geschlagen werden」 부재 · 꼬리 「am River der Normalfall」이 모든 리버로 일반화 — M-092 §3(4)의 「de는 결함 없음」 판정은 **꼬리만 보고 분기절을 안 본 것**) → EN 최종형으로 정렬 · de S2 축약판에 Rule 172/75·「몫 상실」 절 보강 + 「Der Check」 뒤로 이동 · 🔴 **es·pt 「live-action」을 「en vivo / ao vivo」(현장)로 오역** → 「cash —"Live Action"—」 · pt 「virá-la」 비문 · pt 3bet **L179 본문에 M-090 ⑤가 기각한 HUD 집계 인과절이 그대로 남아 있었다**(FAQ만 고쳐졌던 것) → 「um teto, não um alvo」로 정렬 · es 로케일 단독 FAQ와 본문의 14단어 축어 중복 해소.

## §4. `masterUpdated` 판정 (요청 아님 · 기록)

pot-odds·split-pot는 7로케일 전부 구 EN `updated`(08-09·08-11)와 일치했고 오늘 diff를 전건 이식 → **09-06으로 승격**(pt split-pot는 필드 자체가 없어 신설 안 함). **3bet는 승격하지 않았다** — 6로케일이 08-26이고 EN 08-27 커밋의 나머지 변경은 미이식(M-089 §4 판정 유지). id만 08-27이었으므로 09-06. 🪶 서브 2(pt·id)가 브리프 밖에서 임의 승격한 것을 이 기준으로 되돌리거나 확정했다.

## §5. 🔴 요청 2

1. **회귀 앵커 갱신**: ①절 전건 뒤집기(이행) + `then 35% > 25%` 앵커를 한정어 기준으로 교체(§2) + ②절 오탐 방어는 그대로 + 신규 자산 앵커 후보: 「as soon as they have a real hand」 · 「hole cards face up」 · 「flat the JJ/AQ/TT middle」 · 「practical baseline rather than a guarantee」 · 「19.5bb vs the 7.5bb」.
2. **원장 갱신**: pt 3bet #79 → 정정형 재등재(권고 문안 「그 안에 든다」는 §1대로 반증 · 채택 문안 축어) · pt split-pot #39 → 정정 · EN 동형 30건(M-089 §4)은 이 회차 범위 밖 — **이번에 닿은 것은 §1 표의 항목뿐**이라 나머지 EN 동형(bad-beat #12 ~65% · 103조 · SF 라벨 등)은 **여전히 미착수**다.

## §6. 빌드

`npm run build` 통과 — 708쪽 · sitemap 70 blog + 525 intl + 69 static + 25 locale homes. 산출물 24쪽 전부 FAQPage `acceptedAnswer` 비영(非零) · 신규 문장 렌더 확인(en 「turn it face up」 · de 「noch geschlagen werden kann」 · ja 「JJ/AQ/TT」). 게이트 최종: `audit:hard --locale=` en·de·es·ja·zh·zh-hant·pt·id **전부 🔴 0** · 🟠 = 기준선과 동수 · 백틱 24파일 전건 2. 커밋·푸시 = 본체 `git log` 참조(배포는 Vercel 자동 · 라이브 확인은 하지 않았다).

## §7. 통지 3

- M-096(ja 일본 대회 가이드 WRONG 4 · 요청 4)·M-095는 여전히 본체 미확인 — 다음 회차 후보(사장님 판단).
- de `split-pot` 쇼다운 문단은 Rule 172/75 인용이 없는 축약판(EN 대비) — 기존 de 문안을 존중해 두었다. 갱신 여부는 검수장 판정.
- pt `3bet` L179 본문의 «67%»와 FAQ «66,6%» 반올림 표기가 갈린다(모순 아님) — 다음 pt 회차에서 통일.
