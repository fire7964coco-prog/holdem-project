# fr-prob 진행 — 🅲 확률

> 정본 = `docs/fr-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 ms→fr 치환표) + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `a54b5f3d`.
> SERP 입력 = `docs/keyword-bank/fr-serp/L-C-prob.md` + `00-brief.md` — 다시 조사하지 않는다(계획 §2-①).

## 상태 — A ✅(10-07) / B ✅(10-07) / C ✅(10-07) · 커밋 — (아래 C 산출 · 해시는 보고)

- A 산출 = `docs/fr-lanes/prob-brief.md`(공통 결정 + 편별 확정 카피 · 키워드 · 현지 SERP · 소유표 · EN 해부 L## · 경험담 축어 · §13 줄 목록). `keyword-bank/fr-prob.md`는 만들지 않았다(브리프에 다 넣음 · 계획 §5).
- EN 델타: `git diff a54b5f3d..HEAD -- lib/posts-en/<7편>` = 0(10-07).
- 카피: Fable 서브 1회 → Opus 글자 수 실측(seoTitle 57~60 · desc 146~152) · 조정 6자리(probability seoTitle 훅 · 형제 글 헤드 태그 4 · drawing-odds «trips»→brelan · outs FAQ 7).
- B 산출(10-07): `lib/posts-fr/` 7편 + index.ts [fr-prob] 칸 두 곳. 집필 = Opus 서브 7개 병렬(편당 1 · 입력 = 브리프 1~82행 + 편 절 + 계획 §3-A + EN 마스터 + 틀 blind-meaning). 본체 후처리 3: card-counting FAQ 2 답 첫 문장(«Oui, au sens des règles de salle» → «n'a rien d'une triche : les règles de salle l'admettent» — 합법성 판정 꼴 제거) · probability «cooler ultime» → «par excellence»(금지어) · hole cards «cartes privatives» 4곳 → «cartes fermées»(코퍼스 game-order·showdown 정본).
- 자기 게이트: audit:hard fr 13/13 🔴 0 🟠 0 · check:structure 내 7편 결손 0 · EN↔fr 카드 토큰 7편 순서까지 일치 · 수치 차이 = 전부 비전사(EN «X to 1» 하이픈 없음 · «C(50,3)» 쉼표 · 확정 카피 H2/desc의 값 · «À retenir»의 3 · «stud à 7 cartes»의 7) · intl-links ✖ 12 = 전부 다른 레인 대상(starting-hands-chart 6 · hand-rankings · tiebreak-rules · flush-vs-straight · reading-the-board · position-play · 3bet → §0-A대로 건 링크) · 빌드 = prebuild에서 intl-links·calc-parity 빼고 전부 exit 0 + `next build` 879페이지 ✅ + postbuild 3종 ✅ · 산출물 FAQ Question 16/11/10/11/10/11/9 = 원문 FAQ 수 · `id="pot-odds"` 실재(probability) · content 히어로 0 · sitemap 원복.
- C 산출(10-07): ⓪ main 058a9718 머지(내 파일·EN 7편 델타 0) · ① 게이트 = audit:hard fr 13/13 🔴0 🟠0(커버리지 «시나리오 못 잡은 글» 내 5편 → ② 손검산은 딜러 렌즈 전건 재계산으로 대체) · meta 초과 0 · seo-sync 🔴0 · structure 내 7편 행 0 · intl-links ✖12(전부 다른 레인 대상 · B와 동일) · 빌드 879페이지 ✅(prebuild는 intl-links·calc-parity 빼고) · ② 전사 대조 = 카드 7편 순서 일치 · 수치 불일치 전건 비전사(🆕 FAQ·H2의 EN 값 · C(n,k) · «stud à 7 cartes») · ③ 렌즈 4종 = 딜러 0(EN-먼저 low 2 · 기각) · 네이티브 20+미결 판정 7 · SEO 3(전부 잠긴 카피 → 헤드 요청) · 교열 16+편간 불일치 12 → ④ 반영 46자리(아래) · ⑤ 2차 교열 1회(41자리 검사 · 39 ok · 2 추가 반영 = outs «un **couleur + gutshot**» 굵게로 갈려 치환이 놓친 1자리 + drawing «1 fois sur 153» 표기 맞춤 → 총 48).
- 반영 요지: si+futur 5 · demi-pot 성 3 · 문법 2(card-counting) · 의미 드리프트 4(drawing «avant la river»→«d'ici» · equity 공식 일반화 → «Dans ce spot à tapis» · pot-odds «petite couleur»→«petit tirage couleur» · 경험담 «à chaque session» 삭제) · EN에 없는 문장 2 삭제(implied 66 · probability «bad beat (sale coup)» 절 — set over set은 cooler지 bad beat 아님) · EN 누락 1 복원(probability nuts FAQ 괄호 정의 — EN 축어) · «cartes invisibles»→«non vues» 9 · street 통일 6 · série→séquence 3 · privative→fermée 2 · suit couleur→enseigne(card-counting) · 기타 어색 표현 6.
- 기각: 네이티브 17번 칼크 목록(값 동일·의미 정상 · 취향) · «&amp;» 통일(FR이 EN 표기를 축어로 따름 · 렌더 동일) · card-counting «admis» 완화(합법성 판정 금지 정책 · 의도) · 딜러 low 2(EN-먼저 · 거짓 아님).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-probability | ✅ | ✅ | ✅ | masterUpdated 2026-10-01 · FAQ 🆕 1 |
| holdem-pot-odds | ✅ | ✅ | ✅ | masterUpdated 2026-10-06 |
| holdem-outs | ✅ | ✅ | ✅ | masterUpdated 2026-09-28 · H2 🆕 gutshot · FAQ 🆕 1 |
| holdem-drawing-odds | ✅ | ✅ | ✅ | masterUpdated 2026-10-05 |
| holdem-implied-odds | ✅ | ✅ | ✅ | masterUpdated 2026-10-06 |
| holdem-equity | ✅ | ✅ | ✅ | masterUpdated 2026-10-06 · H2 🆕 «Équité et EV» |
| holdem-card-counting | ✅ | ✅ | ✅ | masterUpdated 2026-10-06 · FAQ 🆕 1 |

## 신규 용어
| EN | 채택 fr | 근거 |
|---|---|---|
| X-to-1 · 1 in N | **X contre 1** · **1 sur N**(빈도 강조 «1 fois sur N») · EN이 X:1이면 X:1 | FR SERP 관행(PokerStars.fr «5 contre 1» · L-C §5 «4 contre 1 / 1 fois sur 5») · 계획 §3-A ②는 «2,7:1»만 규정 |
| open-ended straight draw | tirage quinte bilatéral | fr.wikipedia «Tirage Quinte Bilatéral» (L-C §4-A ②) |
| clean / dirty outs | outs propres / outs « sales » (dirty outs) | L-C §6 · §7-3 |
| equity realization | réalisation d'équité | L-C §7-6 |
| EV | EV (espérance de gain) | 자동완성 «espérance de gain poker» 생존(L-C §2) · 계산기 FAQ «l'EV en jetons» |
| blockers · card removal · dead cards | bloqueurs · effet de retrait (card removal) · cartes mortes | L-C §7-7 |
| Seven Card Stud | stud à 7 cartes | — |
| suited / offsuit | assorties (s) / dépareillées (o) | 계획 §3-A에 없음 · 코퍼스 관행 확인은 헤드 대조 때 |
| overcard | overcard (첫 등장 «carte plus haute que le board») | — |
| nut flush | couleur max (nut flush) | — |
| (B) hole cards · up-cards(stud) | cartes fermées · cartes ouvertes | 코퍼스 game-order 10+ · showdown — B 서브 1편이 «privatives»를 써서 본체가 통일 |
| (B) suit(무늬) | enseigne | 계획 §3-A ③ «couleur 혼동 시 enseigne» |
| (B) top pair · overpair · nut straight · nut flush draw | top paire · overpair · quinte max · tirage couleur max | couleur max에 맞춤 |
| (B) brick | carte neutre (brick) | pot-odds |
| (B) set over set | brelan servi contre brelan servi (set over set) | drawing-odds |
| (B) coin flip | coin flip (pile ou face) 첫 등장 병기 · 산문은 pile ou face 허용 | C 판정: 현행 유지 |
| (B) street | **street** · «tour d'enchères / tours de mise»만 tour | C 판정: street 통일(6자리 정정) |
| (B) break-even | seuil de rentabilité | probability |
| (B) monotone / paired board | board monocolore / board apparié | implied-odds · outs |
| (B) run of cards | **séquence (de cartes)** | C 판정: série 3자리 정정 |
| (B) shoe · stub · running count · croupier(blackjack) | sabot · talon · comptage courant · croupier | card-counting(포커 dealer는 donneur 유지) |
| (B) matchup · edge · pure bluff · equity raw | confrontation · edge · bluff pur · équité brute | equity |
| (B) 관련 글 카드 라벨 Odds & Math · Strategy · Starting Hands | Cotes & maths · Stratégie · Mains de départ | C 판정: EN 표기 축어 유지(outs·drawing만 &amp; = EN과 같음) · 렌더 동일 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (없음) | 7편 내부링크·카드 href 전부 fr 51편 안 · 외부 2(card-counting PokerStars·TDA)는 URL 그대로 | — |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- 없음(A 해부에서 발견 0).

## 헤드 요청
- (판단 기록) 소유표 §3-B ⑧ «calcul(ateur)» 금지를 **명사·도구어**로 읽었다 — 동사 «calculer»는 H2·FAQ 허용(L-C §8 «comment calculer = 손 계산법은 글»), 단 title·seoTitle·tags에는 동사형도 넣지 않았다. 다르게 읽으면 알려 달라.
- equity «équité ≠ égalité» 구분 문장은 넣되 tiebreak 링크는 추가하지 않았다(링크 수 = EN). 앵커가 필요하면 헤드 판단. (B: 위치 = 브리프 L997대로 H2 «Qu'est-ce que l'équité» 첫 단락 끝 — 1-G «첫 단락»과 문구가 달라 더 구체적인 쪽을 따랐다)
- 🔴 ① **`app/fr/calculator` 사전(레인 밖) — `check:calc-parity:all` fr 🔴 16**: 확률 글이 fr에 생기자 quickRef 링크 4(표1 probability · 표2 equity · 표3 outs · 표4 pot-odds)와 related 5(equity · pot-odds · outs · probability · implied-odds · related 6→8)가 EN과 같아야 한다. ms-prob 선례와 같은 자리 · 계획 §3-B ⑧ «계산기 related에 7편 추가(배포 회차)». **이 레인 머지 시점부터 main 빌드 prebuild가 여기서 멈춘다** → 머지와 같이 사전을 맞추거나 배포 회차에.
- ② intl-links가 prebuild를 막는다(ms 레인 선례 그대로) — 12건 전부 다른 레인 대상 · 전 레인 머지 후 0인지 헤드 빌드에서 확인.
- ③ 정본 충돌 «suite»: 계획 §3-A ③은 본문 첫 등장 «quinte (suite)» 병기, 브리프 1-C는 «이 레인 본문에 suite 쓰지 않는다». B는 브리프를 따랐다(probability만 족보표 행에 «Quinte (suite)» 1회 — 계획 쪽 병기). 레인 간 통일 판정 부탁.
- ④ «double gutshot»: 브리프 1-G «수치 금지(EN에 없음)»인데 EN outs FAQ 5(L208)에 «A double gutshot also has 8»이 실제로 있다 → EN 자리에만 옮기고 🆕 H2·FAQ에는 넣지 않았다(금지 = «새로 만들지 말라»로 읽음).

## 헤드 요청 (C 추가 · 잠긴 카피라 레인이 못 고침)
- ⑤ SEO 렌즈 카니발 중: probability FAQ 6 «Quelle est la probabilité de flopper un brelan avec une paire servie ?» = drawing-odds H2 축어 동일(EN은 FAQ끼리만 겹침 · 브리프 유래) → probability 쪽을 «…un brelan au flop avec une paire servie ?» 등으로 바꿀지.
- ⑥ 태그 «règle du 2 et du 4» 3편(probability·pot-odds·outs) + 같은 FAQ 3편 — 볼륨 null이라 저위험 · outs만 남길지.
- ⑦ 근접 태그 «set mining poker»(drawing)/«set mining»(implied) · «compter ses outs au poker»(outs)/«compter ses outs»(card-counting) — 동일 아님 · 참고.
- ⑧ implied-odds tldr «te dirait de coucher» — 재귀 «se coucher» 규칙상 «te dirait de te coucher»/«lâcher» (잠긴 카피 · 문법).

## 미결
- C 해소: bad beat 괄호 절 삭제(위) · «ton call» 명사 유지(§3-A ④는 동사만 규정) · card-counting FAQ 2 프레임 유지(렌즈 무지적) · «150 contre 50, soit 3 contre 1» 유지 · 편마다 갈림 3건 판정(신규 용어 표).
- (참고) probability «bad beat»는 이제 H2에만 남는다 — EN도 H2(L201)에만 있어 같은 모양 · 2차 교열 «병기 불필요» 판정.
- (C 이후 남김 · 형제 글 제목 불일치 — 카드 문구라 SEO 대상 아님 · 브리프 1-E대로 맞추지 않음) starting-hands-chart·reading-the-board·probability 카드 제목 편마다 다름 → 헤드 교차 렌즈 때 일괄.
- C에 넘김: probability set-over-set 단락의 «le bad beat (sale coup)»는 EN 본문에 없는 단어(H2에 bad beat가 있어 첫 등장 병기용으로 B가 넣음 · 사실 추가 아님) — 유지/삭제 판정 · probability 명사 «call»(«ton call») 잔존 — §3-A ④ suivre와 맞출지 · card-counting FAQ 2 답 프레임(룸 규칙) 렌즈 확인 · implied-odds «150 contre 50»(EN «150-to-50») 자연스러움 · 위 신규 용어 «편마다 갈림» 3건.
