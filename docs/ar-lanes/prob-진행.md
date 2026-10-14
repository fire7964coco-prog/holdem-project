# ar-prob 진행 — 🅲 확률·대회

> 정본 = `docs/ar-cluster-plan.md`(§1 범위 · §2 장치 · §3-A 용어 · §3-C 소유표 · **§5 레인 운영 차이 표** · §5-A 특이점) + `docs/vi-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `e30fde28`.
> SERP 입력 = `docs/keyword-bank/ar-serp/L4-odds-tournament.md` + `00-brief.md` + `ar-core-volumes.md` — 다시 조사하지 않는다(계획 §2 ①).
> 브리프 = `docs/ar-lanes/prob-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> probability 최우선 · pot-odds 유지(«احتمالات البوت (Pot Odds)» · «القدر» 금지) · «حاسبة» 제목 금지(`/ar/calculator` 주인) · tournament = 구조·전략 · EN «개최 합법성» FAQ 삭제 · 일정 의도 → `/ar/tournaments` · vs-cash = 기존 재작업(PAA 4 중 3 이미 답함).

## 상태 — A ✅ / B ✅ / C ✅ · 커밋 = 이 파일을 담은 «ar(prob)» 커밋(`git log -1 harden-ar-prob`) · 머지 대기

- A 실행 기록: 시작 2026-10-14 14:31 · 마감 16:01 · 폴더 `Holdem-ar-prob` · 자식 = 아스트라 A-교차(codex exec · 스크래치 `astra-ar-prob-A` · 백그라운드) + Fable 카피 서브 1회 · 사용량 지표 = 관측 불가(계정 할당량 비율 미표시 — 숫자 추정 안 함) · `git merge main` = Already up to date · EN `e30fde28`..HEAD `lib/posts-en` 변경 0.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-probability | ✅ | ✅ 36KB · H2 11 · FAQ 16(현지 +1) · 표 행 44=EN · 이미지 3 | ✅ 반영 9 | 신규 · masterUpdated 2026-10-01 · FAQ 15(+현지 1 허용) |
| holdem-pot-odds | ✅ | ✅ 33KB · H2 11 · FAQ 11 · 표 행 25=EN · 이미지 1 | ✅ 반영 23 | 신규 · masterUpdated 2026-10-06 · FAQ 11 |
| holdem-tournament | ✅ | ✅ 42KB · H2 14 · H3 11 · FAQ 8 · 표 행 46=EN · 타임라인 24시간제 | ✅ 반영 13 | 신규 · masterUpdated 2026-10-01 · FAQ 9 → 8(합법성 삭제) · 운영사·앱명 일반화 |
| holdem-tournament-vs-cash-game | ✅ | ✅ 46KB · H2 15 · H3 5 · FAQ 9 · 표 12/행 68=EN · 이미지 2 EN 경로 | ✅ 반영 21 | 기존 재작업 · masterUpdated 2026-09-13 · FAQ 10 → 9(세금 FAQ 불생성 = intentional-diffs L78) · 이미지 EN 경로로 |

- A 결과(14:50 종료): 브리프 `docs/ar-lanes/prob-brief.md` 44KB · Fable 카피 서브 1회(4편 · 글자 수 Opus 재측정 전부 한도 내 · seoTitle 53~60 · desc 141~152) · Opus 조정 3(tournament H2-2 코퍼스 용어 · pot-odds «قاعدة 4 و2» EN 어순 · probability H2-1 5장·7장) · 아스트라 A-교차 61행 OK 49 / RISKY 11 / WRONG 1 → 12건 전부 채택(브리프 §6).
- ▶ 다음 첫 명령(B): `/clear` → «HARDEN.md 읽고 B 시작해» → 브리프 §0 → 편마다 §1~§4 + §5 카피.
- B 실행 기록: 시작 2026-10-14 14:53 · 마감 16:23 · 자식 = Opus 집필 서브 4개(편당 1 · 병렬 · 자기 파일만) · 등록·게이트 = 본체 · 사용량 지표 = 관측 불가(숫자 추정 안 함).
- B 결과(15:20 종료): 4편 집필(서브 4 병렬 · 확정 카피 축어 · 브리프 링크 표대로) · index 내 칸 등록 3(pot-odds · probability · tournament) · 자기 게이트: `audit:hard --locale=ar` 11/11 🔴 0 🟠 0 · `npx next build` EXIT 0(4편 HTML 생성) · 이미지 경로 14개 전부 실재 · 서브 숫자 대조 = EN에만 있는 토큰 전부 의도 편차(수사 낱말화 «1 card→ورقة واحدة» 류 · tldr «about 31,000»→30,940 · 타임라인 24시간제 · 삭제 FAQ·링크분) · 동부 숫자·«٪»·«القدر»·백틱 0.
- 게이트 판정: `check:structure` ar 🔴 — ① tournament faq −1 · vs-cash faq −1 = **의도**(합법성 FAQ 삭제 · 세금 FAQ 불생성) ② blind-meaning link(holdem-tournament · holdem-pot-odds) · hand-rankings link(holdem-probability) = 내 글이 생겨 새로 걸 수 있게 된 자리 → 🅰·🅱 레인 몫(헤드 요청). `check:intl-links` ✖ 1 = tournament → `/ar/blog/holdem-glossary`(계획 §5 «다른 레인이 쓰는 중이어도 건다» · 🅳 머지 뒤 해소) — prebuild가 이것으로 막히므로 빌드는 레인 표대로 `npx next build`. 드리프트 🔴 4 = 🅰 rules 편(내 몫 아님).
- C 실행 기록: 시작 2026-10-14 15:04 · 마감 16:34 · 자식 = 렌즈 3종 Opus 서브(딜러·수학 / 아랍어 네이티브 3인 패널 / SEO·GEO+교열 · 한 메시지 병렬) + 아스트라 C-교차(codex exec gpt-6-astra read-only · 스크래치 `astra-ar-prob-C` · PID 22358 종료 확인) + 2차 교열 Opus 서브 1 + dev 서버 `next dev -p 3143`(내가 띄운 PID 46448·38640 · 둘 다 taskkill로 종료 확인 · 워크트리에 .env.local 없음 → 더미 공개 env로 기동, 비밀값 복사 안 함) · 사용량 지표 = 관측 불가(숫자 추정 안 함).
- C 결과: ⓪ `git merge main` = 19a061b4 fast-forward(도구 FAQ·문서 — 내 파일 충돌 0). ① 게이트 = B와 동일(audit 4편 🔴 0 🟠 0 · meta · seo-sync · faq-schema ar 11 성립 · directives · meta-lang 통과 · structure/intl-links 🔴는 B 판정 그대로). ② 전사 대조 스크립트(카드·숫자 집합 · 천 단위 콤마 정규화): 카드 4편 완전 일치 · 숫자 편차 전부 의도(X-to-1→X:1 · 24시간제 · tldr 31,000→30,940 · «5-card» 낱말화). 손검산 = pot-odds A♥K♥ 핸드(9/47=19.1% · 9/46=19.6% · 2장 34.97% · 3:1→25% · 2:1→33% · 세트 상대 7/46=15.2% · 7/44=15.9%) · probability A♥K♥→Q♥J♥10♥ 1/C(50,3)=1/19,600 ✓. ③ 렌즈: 딜러·수학 = D유형·의미 왜곡·§13 0건(저확신 1 = vs-cash FAQ 조건문) · 네이티브 32건 · SEO·교열 13건 · 아스트라 27행(OK 17 / RISKY 6 / WRONG 4). ④ 중복 합쳐 반영 60자리(1차) + 2차 교열 반영 6(1차 반영이 만든 성수 불일치 1 포함) = 66 · 기각 = 아래 «C 판정». ⑤ 2차 교열(Opus · 반영 diff만) 6건 전부 반영. ⑥ 화면 390·1440(RTL) = 가로 넘침 0 · «←» 방향 정상 · 비율 «X:1» 정상 · «~7.5 إلى 1» 글자 위치 측정(7.5 x=233 > 1 x=201 → 오른쪽부터 읽힘 정상) · 시간 범위 «18:00–21:00»은 화면에서 «21:00–18:00»으로 보이나 오른쪽부터 18:00→21:00으로 읽혀 정상(네이티브 판정 동일) · `npx next build` EXIT 0(987쪽).
- C 판정(채택 요지): RTL «→» 16 → «←»(표 머리는 «من … إلى …») · 문법(«ذو» · «بشرطين:» · desc «يبدوان» 성 일치 최소 수정 — 카피 글자 수 동일 · «اصقل» · «توصلني إلى الإفلاس» · «مجاريات» 비표준 복수 제거) · 의미(vs-cash «من باي-إن واحد» 비교 오역 · «فرصة ربح أكبر» 확률 오독 · tournament 상금 «يتقاسمه جميع المشاركين» → 출자·배분 분리) · 직역(«تتزاوج الطاولة» · «أين يعضّ» · «تطبع المال» · «المجاراة الرفيعة» · «حقول» · «الوجه المعتم» · «درو وحشي») · 하트 «الكُبّة»로 형제 글 통일 · 첫 등장 풀이(أوتس · الريفر (النهر) · الدرو — Draw · Top Pair · البانكرول · التيلت · Leak · Thin Call) · «أوتس ملوّثة»→«أوتس غير نظيفة (Dirty Outs)» · «Day 1 flights»→«دفعات انطلاق اليوم الأول» · 임시 카드 제목 둘 다 «مقاعد طاولة البوكر»(계획 §2 ⑨).
- C 판정(기각): «ورقة فارغة (Brick)»·«ردهة البطولة (Lobby)» 유지 = 아스트라가 GGPoker 아랍어 원문 축어 인용(용어집·대회 유형 쪽) · 단독 «النتس» 본문 반복 = 풀이 뒤 본문은 §2 ⑧ 강제 범위 밖 · hand-chart 앵커 축어 2회 = EN 구조 그대로 · «أيدي البداية»/«الأيدي الافتتاحية» 혼용·BB 표기 혼용·금액 $/دولار 갈림 = 오독 없음(헤드 용어 스윕 몫) · 시간 칸 dir=ltr = 화면상 정상 판독 + 계획 §5 «마크업 꼼수 금지» · vs-cash «يغطي هذا القسم» 노트 = 브리프 #53 «가이드 예고 삭제» 결정 유지.

## 신규 용어
| EN | 채택 ar | 근거 |
|---|---|---|
| implied odds / reverse | الاحتمالات الضمنية (Implied Odds) / الاحتمالات الضمنية العكسية | `/ar/calculator` dict 섹션명 |
| Rule of 2 and 4 | قاعدة 2 و4 (EN 어순대로) | L4 7-1·7-2 |
| set / set mining | السيت (Set) / صيد السيت (Set Mining) | 코퍼스 «سيت» 4 |
| flush draw · OESD · gutshot · combo draw | فلاش درو (Flush Draw) · ستريت درو مفتوح الطرفين · الغتشوت (Gutshot — ستريت داخلي) · درو مركّب | L4 7-2 |
| clean / dirty outs | أوتس نظيفة / أوتس غير نظيفة (Dirty Outs) | C 네이티브 렌즈 — «ملوّثة» 직역 냄새·대칭 불일치 |
| top pair | زوج أعلى (Top Pair — زوج بأعلى ورقة على الطاولة) | C 렌즈 — hand-rankings «الزوج الأعلى»(투페어 중 높은 쪽)과 충돌 방지 · GG 용어집 «الزوج الأعلى» |
| board pairs | يظهر زوج على الطاولة / تضع زوجًا على الطاولة | C 네이티브(«تتزاوج» 어감) |
| hearts | الكُبّة | 형제 hand-rankings 표기 |
| Day 1 flights | دفعات انطلاق اليوم الأول (Day 1 flights) | C 아스트라·네이티브 |
| thin call · leak · tilt | المجاراة الحدّية (Thin Call) · تسريب (Leak — ثغرة في لعبك) · التيلت (فقدان الأعصاب بعد الخسارة) | C 네이티브 |
| field (참가자 규모) | عدد المشاركين · مشاركون من مستويات متفاوتة | C 3렌즈 공통(«حقول» 직역 제거) |
| nuts · cooler · bad beat | النتس (أقوى يد ممكنة) · الكولر · الباد بيت | §2 ⑧(«نتس» 단독 금지) |
| buy-in · rake | الباي-إن (Buy-in) · عمولة البيت (Rake) | 코퍼스 «باي-إن» 22 |
| structure sheet · late reg · add-on · shove | ورقة هيكل البطولة · التسجيل المتأخر (Late Reg) · Add-on · الدفع بكل الرقائق (Shove / Jam) | — |
| bubble · min-cash · final table · chip leader | الفقاعة (Bubble) · الحد الأدنى للجائزة (Min-cash) · الطاولة النهائية · متصدر الرقائق | L4 4-D |
| ICM 풀이 | نموذج الرقائق المستقل | L4 4-D(«الرقائق» 코퍼스 59) |
| ring game | «ويُسمّى أيضًا Ring Game» 풀이 1회 | 아스트라 #20 |
| formats | Freezeout · Rebuy/Re-entry · Bounty/KO · PKO · Deepstack · Satellite · Turbo · Mystery Bounty · MTT · SNG = 라틴 + 첫 등장 풀이 | L4 단계 3 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-probability | holdem-starting-hands-chart (L88 · L292) | 대체 → `/ar/hand-chart` |
| holdem-probability | holdem-drawing-odds (L111) · holdem-equity (L156) | 대체 → `/ar/calculator` |
| holdem-probability | holdem-outs (L156) · holdem-implied-odds (L179) | 빼기 |
| holdem-probability | holdem-tiebreak-rules (L213) | 대체 → `/ar/blog/holdem-hand-rankings#kicker` |
| holdem-probability | holdem-flush-vs-straight (L292) | 대체 → `/ar/blog/holdem-hand-rankings` |
| holdem-probability | readnext starting-hands-chart | 대체 → `/ar/blog/holdem-pot-odds` |
| holdem-probability | 그리드 starting-hands-chart · flush-vs-straight · reading-the-board · position-play | 빼기 4 · 추가 pot-odds · positions(position-play 대체) → 3카드 |
| holdem-pot-odds | holdem-outs (L119) · holdem-implied-odds (L149) | 빼기 |
| holdem-pot-odds | holdem-equity (L149) | 대체 → `/ar/calculator` |
| holdem-pot-odds | holdem-starting-hands-chart (L151 · L254) | 대체 → `/ar/hand-chart` |
| holdem-pot-odds | readnext starting-hands-chart | 대체 → `/ar/blog/holdem-strategy` |
| holdem-pot-odds | 그리드 starting-hands-chart · reading-the-board | 빼기 2 · 추가 holdem-strategy → 3카드 |
| holdem-tournament | holdem-rake (L64) · holdem-short-stack (L91 · L203) · holdem-bubble (L108) | 빼기 |
| holdem-tournament | holdem-icm (L111) | 대체 → `/ar/blog/holdem-tournament-vs-cash-game` |
| holdem-tournament | apt-incheon-2026-guide (L191 · readnext) | 대체 → `/ar/tournaments`(본문) · readnext 빼기 |
| holdem-tournament | holdem-starting-hands-chart (L199) | 대체 → `/ar/hand-chart` |
| holdem-tournament | readnext holdem-bubble | 대체 → `/ar/blog/holdem-blind-meaning` |
| holdem-tournament | 그리드 starting-hands-chart · short-stack | 빼기 2 → 4카드 |
| holdem-tournament-vs-cash-game | holdem-icm (L43) · holdem-rake (L89) · holdem-short-stack (L153) · holdem-bubble (L176) | 빼기 |
| holdem-tournament-vs-cash-game | holdem-starting-hands-chart (L145) | 대체 → `/ar/hand-chart` |
| holdem-tournament-vs-cash-game | holdem-icm (L185) | 대체 → `/ar/calculator` |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- (A 구간: 없음 — §13 자리 손검산 전부 ✓)
- (C) `lib/posts-en/holdem-tournament.ts:61` | «$100 → Prize pool, shared by all entrants» — 상금이 전원에게 나뉜다는 오독 여지(같은 글 L240 «상위 10–15% 지급»과 충돌로 읽힘) · ar은 «يموّله جميع المشاركين ويُوزَّع على أصحاب المراكز المدفوعة»로 풀었다 | 아스트라 C #25
- (C) `lib/posts-en/holdem-tournament-vs-cash-game.ts:262` | «you play until you bust, cash, or win» — «cash»가 종료 시점처럼 읽힌다(입상 뒤에도 계속 플레이) · ar은 «تُقصى — قبل منطقة الجوائز أو بعدها — أو تفوز» | 아스트라 C #24 · 2차 교열 «EN보다 정확» (저우선)
- (C) `lib/posts-en/holdem-tournament.ts:169~` | «Option A» 번호 목록이 EN·ar 둘 다 한 문단으로 붙어 렌더(헤딩 직후 빈 줄 없음 추정) — 화면 1440 실측 · EN 페이지도 같은 DOM | 화면 실측

## 헤드 요청
- (A 구간: 없음)
- (B) 머지 순서·확인: 내 글이 걸고 있는 미존재 대상 = `holdem-glossary`(tournament 본문) · `holdem-positions`(probability·tournament 그리드) · `holdem-strategy`(pot-odds readnext·그리드) = 🅳 · `holdem-hand-rankings#kicker` 앵커 = 🅱. 🅳·🅱 머지 전 배포 금지. positions·strategy 카드 제목은 임시(«المواقع على طاولة البوكر» · «استراتيجية تكساس هولدم») → 🅳 확정 제목과 맞출 것.
- (C) 🅰 rules 레인 글(game-order 8 · texas-holdem-rules 4 · betting-actions 3 · blind-meaning 3)의 RTL «→» = 아랍어 문장 안에서 진행 방향이 거꾸로 읽힌다(네이티브 렌즈 · 이 레인은 «←»로 통일) → 헤드 용어 스윕 때 통일 판정.
- (C) 헤드 용어 스윕 후보: 금액 «$N»/«N دولار» 갈림(이 레인 안에서도 pot-odds·probability = دولار · tournament·vs-cash = $) · «أيدي البداية»/«الأيدي الافتتاحية» · BB «200BB»/«200 بيغ بلايند».
- (B) 🅰 rules 레인 blind-meaning(→ holdem-tournament · holdem-pot-odds) · 🅱 hand-rankings(→ holdem-probability) 링크가 이제 걸 수 있다(check:structure 🔴) — 그 레인 몫.

## 미결
- (C) 없음 — B «미결» 용어 17·재량 5·아스트라 미확인 4·RTL 실측·24시간제 예외 전부 C에서 판정(위 «C 판정»). 남은 것은 «헤드 요청»으로 넘겼다.
- 🪶 «صيد السيت»·«الغتشوت»·«عمولة البيت» 현지 실사용 빈도 = 원문으로 입증 못 함(아스트라 «미확인») — 의미·문맥 판정은 OK. 아스트라 교차(헤드 §8) 때 재질문 후보.
