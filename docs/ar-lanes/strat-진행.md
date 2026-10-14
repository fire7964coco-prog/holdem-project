# ar-strat 진행 — 🅳 전략·용어

> 정본 = `docs/ar-cluster-plan.md`(§1 범위 · §2 장치 · §3-A 용어 · §3-C 소유표 · **§5 레인 운영 차이 표** · §5-A 특이점) + `docs/vi-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `e30fde28`.
> SERP 입력 = `docs/keyword-bank/ar-serp/L5-strategy-gto.md` + `L3-terms.md` + `00-brief.md` + `ar-core-volumes.md` — 다시 조사하지 않는다(계획 §2 ①).
> 브리프 = `docs/ar-lanes/strat-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> strategy = «استراتيجية البوكر»·«البلف في البوكر»·«هل البوكر حظ ام مهارة» 주인 · positions 제목 = 단수 «الموقع» 또는 «مقاعد طاولة البوكر»(«المواقع في البوكر» 제목 금지 §2 ⑨) · c-bet = «الرهان الاستمراري (C-Bet)»(단독 헤드 금지) · glossary = 글이 주인(«مصطلحات البوكر» 제목 가능 · 도구는 나중 · 판정 ②) · GTO 글로 가는 EN 링크는 빼기(보류).

## 상태 — A ✅(10-14) / B ✅(10-14) / C ✅(10-14) · 커밋 = 이 파일과 같은 커밋(«ar(strat): 전략·용어 4편 신규»)

- A 실행: 2026-10-14 14:31 시작 · Opus 5.5 본체 · EN 4편 `e30fde28` 뒤 변경 0 확인.
- 아스트라 A-교차 1회(codex gpt-6-astra read-only · 스크래치 `astra-ar-strat-A`): 39행 WRONG 8 · RISKY 8 · OK 23 → 16건 전부 원문 대조 후 채택(브리프 §6).
- Fable 카피 서브 1회: 4편 title·seoTitle·desc·tldr·tags·H2·FAQ → Opus 조정 🔧 다수(용어 정본 البورد·الأنواع·المؤجل · c-bet 훅 주어 · positions 복수 «المواقع» 회피) · 메타 12필드 글자 수 node 실측 일치(seoTitle 59~63 · desc 146~151).
- 브리프 `docs/ar-lanes/strat-brief.md` 72KB · 커밋은 C에서(내 파일만).
- B 실행: 2026-10-14 14:52 시작 · Opus 5.5 본체 + Opus 서브 4(편당 1 · 입력 = 브리프 + EN 마스터만) · index.ts 내 칸 2곳 등록.
- B 자기 게이트: `audit:hard --locale=ar` 12/12 🔴 0 · 🟠 0(커버리지 밖 카드 문단 = strategy 2 · c-bet 7 → C 손검산 대상 · 서브가 c-bet 경험담 2핸드·strategy A♣K♣/5♠5♦ 셋 손검산 완료) · `check:intl-links` 내 4편 미해결 = 🅲 prob 대상(pot-odds·probability)뿐(머지 전 정상) · `check:structure` 내 4편 결손 0 · `npx next build` ✅(ar 4편 HTML 생성) · 확정 카피 title·seoTitle·desc 브리프 축어 일치(스크립트).
- C 실행: 2026-10-14 15:06 시작 · Opus 5.5 본체 · `git merge main`(19a061b4 · ff · 충돌 0).
- C 게이트 전건: audit:hard --locale=ar 12/12 🔴 0 🟠 0 · check:meta ✅ · check:seo-sync ✅ · check:structure 내 4편 결손 0(ar 🔴 6은 🅰 rules 글이 이제 생긴 내 글로 링크 안 거는 것 = 헤드 머지 뒤 몫) · check:intl-links 내 4편 미해결 = 🅲 pot-odds·probability뿐 · 클린 `npx next build` ✅(ar 4편 HTML).
- §13 전사 대조 스크립트(카드·수치 집합 · 천 단위 콤마 제거): 카드 ar만 = 10♣·10♥(T→10 표기만) · 수치 ar만 = strategy 블러프 표·35.0%·19.6%(브리프 지시 신설 · 재계산 ✓) · EN만 = c-bet 삭제 자리(L65 98.2·45.1·54.9 · L226 98.4 · L67 100bb · tldr 97%)뿐 → 불일치 0. 손검산 = strategy A♣K♣/2♥7♦9♠ · 5♠5♦/5♣K♠2♦ · c-bet A♣K♦/K♠7♦2♣ · A♥Q♥/7♠6♠5♦ · 플러시 9아웃 1−(38/47)(37/46)=34.97% · 9/46=19.57% · 블러프 B/(P+B) 4행 ✓.
- 렌즈 3종(Opus 서브 · 한 메시지): ① 딜러·수학 WRONG 0 · RISKY 5 → 반영 4 · 기각 1(«كيف تحترف» FAQ = 브리프 결정) ② 아랍어 네이티브 3인 39건(WRONG 9) → 반영 33 · 기각 6(겹괄호 L113 · L170 «بعد» 반복 · J♥J♠ 재등장·T‑T 풀이 = EN-먼저 · «راهن كبيرًا» 전반 문체 · «البرميل» 유지) ③ SEO/GEO+교열 WRONG 1 · RISKY 11 → 반영 9 · 기각 3(L86 hand-chart 앵커 = EN 1:1 · L170 위치 이동 · 태그 겹침 = 관찰). 겹친 지적(ازِد · «اسم ثابت» · لتوقع · متتاليتين · مقعد/توجد)은 한 번만 셈.
- 🤖 아스트라 C-교차 1회(codex gpt-6-astra read-only · 스크래치 `astra-ar-strat-C`): WRONG 3 · RISKY 6 · OK 2 → 반영 7(«سحق» 반의 오독 4자리 → «يخدم … بقوة» · Float·Fold Equity·Overpair·Trips·Set 첫 등장 풀이 · مقاعد/توجد) · EN-먼저 1(Trips «kicker control») · RTL 2 = 화면 실측으로 판정.
- 반영 합계 약 60곳 → 🔴 2차 교열(반영 word-diff만 · Opus 서브 1): 깨짐 0 · 다듬기 3(낮음) 전부 반영(HJ 괄호 · smash 동사 통일 · run-it-twice 주어).
- 화면 실측(로컬 dev · 390·1440 · RTL): 4편 × 2폭 가로 넘침 0 · 콘솔 오류 0(Supabase 자리값 DNS 제외) · positions 인원별 표 화살표 사슬 LTR 덩어리로 정상 · readnext 화살표 RTL 정상 · 🟠 수식 «0.33 ÷ 1.33 = 24.8%»가 RTL 문단·표에서 «24.8% = 1.33 ÷ 0.33»으로 보임(아랍어 독자 오른쪽→왼쪽 읽기엔 순서가 맞음 · 마크업 꼼수 금지 → 헤드 요청).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-strategy | ✅ | ✅ | ✅ | 신규 · 현지 H2 2(البلف · حظ أم مهارة) · FAQ 1 대체 |
| holdem-positions | ✅ | ✅ | ✅ | 신규 · 현지 FAQ 2 · BB-OOP 1문장 |
| holdem-continuation-bet | ✅ | ✅ | ✅ | 신규 · GTO 역링크 3자리 삭제(tr 선례) |
| holdem-glossary | ✅ | ✅ | ✅ | 신규 · «فيش» 동음이의 주석 · FAQ 1 추가 · stripe «100+»(실측 하한) |

## 신규 용어 (계획 §3-A에 없던 것 · 헤드가 4레인 대조)
| EN | 채택 ar | 근거 |
|---|---|---|
| limp | «الدخول بالمجاراة (Limp)» → 이후 «الليمب» 허용 | ar 코퍼스 «الدخول بالمجاراة» 1 · «الليمب» 2 |
| value bet | «رهان القيمة (Value Bet)» | 설명형 MSA · 경쟁 원문 미집계(L5 §5-E에 항목 없음) |
| check-raise | «التشيك ريز (Check-Raise)» | L5 §5-E «تشيك ريز» 2 · 라틴 4 · 단독 헤드 금지(자동완성 = 음식점) |
| float | «المجاراة للمناورة (Float)» + 첫 등장 풀이 «أي المجاراة بقصد البلف في جولة لاحقة» | C: 네이티브·아스트라 둘 다 RISKY(현장어 아님) → 이름 유지 + 풀이(GGPoker ar 정의 «بنية الخداع في جولة المراهنة اللاحقة») · 헤드 4레인 대조 때 «المجاراة بنية السرقة» 대안 검토 |
| delayed c-bet · double/triple barrel | «C-Bet المؤجَّل» · «البرميل المزدوج/الثلاثي» | L5 §3 자동완성 «delayed cbet» · 설명형 |
| range · range/nut advantage | «النطاق (Range)» · «أفضلية النطاق» · «أفضلية النتس» | L5 §5-E النطاق 12 vs رينج 1 |
| implied odds · fold equity | «الاحتمالات الضمنية» · «إكويتي الطي» | §3-A «احتمالات البوت»·«الإكويتي»와 같은 축 |
| set · trips | «السِت (Set)» · «التريبس (Trips)» | ar 코퍼스 سِت 6 · سيت 4 · تريبس 0(신규) |
| tight-aggressive | «اللعب الضيق العدواني (TAG)» | L5 P2 H2 «اللعب الضيق العدواني (Tight-Aggressive)» 축어 |
| board texture · dry · wet | «نسيج البورد» · «بورد جاف» · «بورد رطب» | 설명형 · C 네이티브 렌즈 확인 대상 |
| multiway | «بوت متعدد اللاعبين (Multiway)» | L5 §9-C 축어 «بوت متعدد اللاعبين» |
| seat (물리 좌석) | «المقعد» | L5 §5-E المقعد 4편/26 · clubgg «أسماء المقاعد» |
| fish | «الفيش (Fish — اللاعب الضعيف)» + 칩 동음이의 주석 | L3 §4-D · §7-4 |
| all-in (glossary 표) | «أول إن (All-in)» | §3-A 묶음 행 · B 서브 결정 |
| string bet | «الرهان المتقطع» | C: 네이티브·아스트라 OK(정의 동반) |
| splash the pot | «بعثرة الرقائق في البوت» | C: «رمي» = 일반 베팅과 구별 안 됨(네이티브 RISKY) → 교체 · 아스트라 대안과 같음 |
| boat / full boat | 표제 «Boat / Full Boat (القارب)» + «لا علاقة لها بالبوت» 주석 | C: «فول بوت» = «풀 팟»으로 오독(네이티브 RISKY 중상) → 교체 |

## 링크 편차 (EN 대상이 ar에 없음 → 빼기/대체 · 상세 줄 번호 = 브리프 §1-3·§2-3·§3-3·§4-3)
| slug | EN 링크 대상 | 처리 |
|---|---|---|
| holdem-strategy | holdem-position-play ×3(L46·62·248) + readnext + 카드 | → holdem-positions |
| holdem-strategy | holdem-starting-hands-chart ×4(L47·78·87·248) | → /ar/hand-chart |
| holdem-strategy | holdem-starting-hands-chart(readnext · 카드) | → holdem-continuation-bet |
| holdem-strategy | holdem-limping L48 · 카드 | → holdem-betting-actions(L48) · holdem-pot-odds/probability(카드 재배치) |
| holdem-strategy | holdem-limping L97 · holdem-3bet L103 · holdem-when-to-fold L129 | 빼기 |
| holdem-strategy | holdem-betting-actions L49(결정표 4행) | → holdem-continuation-bet(ar 개선 · 결정 4 = C-Bet) |
| holdem-positions | holdem-position-play L83·136·236 · readnext · 카드 | → holdem-strategy |
| holdem-positions | holdem-position-play L113·186 · starting-hands-chart L186·236 · readnext | → /ar/hand-chart(L186 한 문장 두 링크 → 1개로 합침) · readnext 2번째 → holdem-game-order |
| holdem-continuation-bet | a-high-board-cbet L65 · solver hand-review L67 · 3bet-pot-bet-sizing L226 | **문단·블록 삭제**(EN 머리 주석 · tr 선례 · GTO 보류) |
| holdem-continuation-bet | /en/solver L101 | 링크 없이 평문 |
| holdem-continuation-bet | low-board-check-raise L182 · donk-bet-strategy L184 | 해당 절·문장 삭제 |
| holdem-continuation-bet | holdem-position-play L200·234 | 링크 빼기 · L237·371·카드 → holdem-positions |
| holdem-continuation-bet | holdem-3bet readnext · L371 · 카드 | readnext → holdem-pot-odds · L371 빼기 · 카드 → holdem-probability |
| holdem-continuation-bet | tldr 괄호 «as the OOP 3-bettor … over 97% on the three boards we solved» | 삭제(근거 글 없음) — 본문 L200 셀 수치는 유지 |
| holdem-glossary | holdem-cooler ×4 · holdem-bad-beat ×3 · holdem-fish ×3 · holdem-rake · holdem-straddle | 빼기(readnext·카드 → holdem-positions·holdem-strategy · «Where to go next» 4행 → 전략 3편) |
| holdem-glossary | holdem-tiebreak-rules L130·298 · holdem-split-pot-rules L229 | → holdem-hand-rankings#kicker(🅱 rank가 앵커 신설) |
| holdem-glossary | holdem-outs L141·299 | → holdem-probability(L299는 빼기 — 같은 줄에 probability 있음) |
| holdem-glossary | holdem-position-play L94 | → holdem-strategy |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-glossary.ts:L135·L273` | Trips 정의 «weaker kicker control»이 모호 — 핵심은 «상대가 같은 트립스에 더 높은 키커를 가질 수 있다» | 아스트라 C #4(PokerStars 족보 강의 축어 «one of your opponents could have the same hand with a better kicker») · ar는 EN 1:1 유지
- `lib/posts-en/holdem-positions.ts:L29` | 경험담 «Three hands later … with the same J♥ J♠» — 3핸드 뒤 무늬까지 같은 J♥J♠(한 핸드 약 1/1326)라 아는 독자가 지어낸 얘기로 의심 | 네이티브 C #13 · «with pocket jacks again»(무늬 생략)이 안전 · ar는 EN 1:1 유지
- `lib/posts-en/holdem-strategy.ts:L82` | «A‑A down to T‑T»의 T 표기 풀이 없음(초심자) | 네이티브 C #39 · 낮음
- `lib/posts-en/holdem-strategy.ts:L78`(tight-aggressive 앵커 → starting-hands-chart) | 앵커 «타이트-어그레시브 스타일»과 대상 «시작 핸드 차트» 불일치 | SEO 렌즈 C #9 · 낮음 · ar도 /ar/hand-chart로 1:1

## 헤드 요청
- `holdem-hand-rankings#kicker` 앵커는 🅱 rank 레인이 새로 만든다(계획 §3-D) — glossary 2곳이 이 앵커로 링크한다. 머지 순서상 rank가 먼저 안 들어오면 intl-links가 앵커 미존재로 잡을 수 있음.
- 🟠 RTL 수식 표시: «0.33 ÷ 1.33 = 24.8%»(strategy 블러프 표 · c-bet L180 · strategy «1.5 ÷ 5.5 = 27%»)가 아랍어 문단·표에서 시각적으로 «24.8% = 1.33 ÷ 0.33»으로 보인다(그림 `tmp/screen/strat-bluff-390.png` · 비추적). 오른쪽→왼쪽으로 읽는 아랍어 독자에게는 순서가 맞고 사실오류는 아님. 마크업 꼼수 금지라 레인은 손대지 않았다 → 4레인 공통 정책(그대로 둘지 · 렌더러에서 `==수식==`·표 셀 수식을 `dir=ltr` 처리할지) 헤드 판정.
- 신규 용어 대조 때 볼 것: Float «المجاراة للمناورة»(네이티브·아스트라 둘 다 RISKY · 풀이로 버팀) · splash «بعثرة الرقائق» · boat «Boat / Full Boat (القارب)»로 C에서 바뀜(위 표).
- 관찰(배포 뒤 GSC 쿼리 단위): positions 태그·H2 «من يتصرف أولًا في البوكر» ↔ 🅰 game-order «من يبدأ اللعب في البوكر» · glossary FAQ «تشيك/كول» ↔ 🅰 betting-actions — 소유표 위반은 아님(SEO 렌즈 C #12).

## 미결
- (없음 — B 판단 자리 ①~⑧ C에서 확인: ①②③⑥ 렌즈 지적 0 · ④ RTL 화면 정상 · ⑤ readnext 라벨 letter-spacing = 기존 ar 글 공통 렌더러 스타일(내 파일 밖) · ⑦ Fish 주석 = 브리프 문안 유지(구두점만 정리) · ⑧ 직답 보강 문단 = 렌즈 3종이 새 사실 0 확인 · 중복 5자리 정리)
