# ar-rules 진행 — 🅰 규칙

> 정본 = `docs/ar-cluster-plan.md`(§1 범위 · §2 장치 · §3-A 용어 · §3-C 소유표 · **§5 레인 운영 차이 표** · §5-A 특이점) + `docs/vi-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `e30fde28`.
> SERP 입력 = `docs/keyword-bank/ar-serp/L1-rules.md` + `00-brief.md` + `ar-core-volumes.md` — 다시 조사하지 않는다(계획 §2 ①).
> 브리프 = `docs/ar-lanes/rules-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> 6편 전부 기존(slug·date 불변 · EN 현행으로 다시 쓴다) · 필라 = «لعبة البوكر»·«قوانين البوكر»·«طريقة لعب البوكر» 주인(§3-C) · game-order·betting = 순서·액션 롱테일만 · all-in > blind(용어 교체 + FAQ 3~4 + H2 1) · showdown = 링크·용어 통일(«المواجهة (الشوداون — Showdown)») · index 칸 없음.

## 상태 — A ✅ (10-14 14:31~14:50 · 브리프 `rules-brief.md` 70KB · 아스트라 A 40행 반영 · Fable 카피 1회) / B ✅ (10-14 14:52~15:05 · 6편 재작성 · 자기 게이트 🔴 0 · build ✅) / C ✅ (10-14 15:04~15:40 · 렌즈 3종 + 아스트라 C 교차 · 반영 51 · 2차 교열 반영 10) · 커밋 = 이 진행 파일이 실린 «ar(rules)» 커밋(A·B·C 산출물 한 커밋)
- B 방식: 편당 Opus 서브 1개 병렬 집필(입력 = 브리프 + EN + 기존 ar 표현 참고) → 본체가 조문 표기 통일 · 게이트 · 빌드
- B 게이트: audit:hard --locale=ar 8/8 🔴 0 🟠 0 · 드리프트 🔴 0 · check:structure ar 결손 0 · intl-links 실패 = 전부 미작성 레인 대상(positions·strategy·tournament·pot-odds — 예상) · `npx next build` ✅ 984 · 히어로 content 0 · 카드·숫자 토큰 전사 대조 6편 불일치 2(blind «30»=확정 카피 H2 «الثلاثين» · all-in «150»=브리프 지정 대비 투입액) = 정상
- C ⓪ `git merge main`(19a061b4 · 충돌 0) ① 게이트: audit:hard --locale=ar 8/8 🔴 0 🟠 0 · check:structure ar 핵심 결손 0(남은 ar 행 = 미작성 레인 대상 링크 — 예상) · check:meta·seo-sync ar 0 · check:drift ar 🔴 0(masterUpdated 없음 1 = vs-cash · 🅲 몫) · `npx next build` ✅(3회 — 수리 전·후)
- C ② 전사 대조 스크립트(카드·%·$·비율 · 천 단위 콤마 정규화): 6편 «ar에만» = all-in «150»(브리프 지정 투입액 · 100+150+150=400 = 300+100 검산) · «EN에만» = blind «30»(확정 카피 «الثلاثين») · 횟수차 = 직답 단락의 반복 언급 → 전건 정상 · 커버리지 밖 카드 문단 7개 손검산(7장→베스트5) 불일치 0
- C ③ 렌즈(Opus · 한 메시지): 딜러·수학 = 결함 0 · 문구 3(반영 2) / 아랍어 네이티브 3인 = 25행(반영 19 · 기각 6) / SEO·GEO+교열(diff) = 확정 카피 문자 단위 일치 · 메타 desc 142~149 · seoTitle 54~59 · 15행(반영 6 · 기각·헤드 요청 9) / 🤖 아스트라 C(`astra-ar-rules-C` · gpt-6-astra read-only) = OK 4 · RISKY 1 · WRONG 3(반영 3 · 기각 1)
  - 🔴 실결함(반영): all-in FAQ «폴드한 플레이어는 승리 권리만 잃고 칩은 잃지 않는다»로 읽히던 문장 → «يفقد حقه في الفوز بالبوت، ولا يسترد الرقائق»(아스트라 · EN L71) · all-in 언콜드 벳 문장 조건 없는 «لا تضيع» 단정 → 조건문 · 2인칭 쌍수·복수(«تبدآن»·«قارنوا»·«تنتقلون»·«أنتما») → 단수 · «لعبة نقدية» 5곳 → «الكاش»·«بطولات البوكر أم الكاش جيم» 앵커(§3-A «الكاش جيم») · win-rate-quiz 앵커 «اختبار نسبة الفوز» → 도구 실제 이름 «محاكي البوكر»
  - 통일: draw «سحب (درو)»(texas «مشروع» 6곳) · no-limit «نو-ليمت»/«بوت-ليمت»(betting·blind·showdown) · showdown «من دخل أول إن» · Q «ملكة» · limp «الليمب» · 조문 라틴 3곳 · 음차 첫 등장 풀이(سترادل · السلو رول · بيغ سليك · street) · UTG 풀이 «على يسار البيغ بلايند»(스트래들 문맥 모순 해소 · B 미결 «대시 2연속» 해소) · 직답 축어 중복 2곳 삭제(showdown)
  - 기각: «آخر مُعتدٍ»(확정 카피 desc가 씀 → 헤드 요청) · «مرّ الجميع بالتمرير»(«بالتمرير»가 의미 고정) · 3-bet·탄윈·«للـ BB» 조판(낮음) · string bet 표기(all-in은 서술형 · 낮음) · 직답과 다음 문단 겹침 4곳(order 322 · betting 74 · all-in H3 · showdown 84 — 자기완결 직답 규격상 의도된 반복) · all-in «150»(정상)
- C ⑤ 2차 교열(반영 diff만 · Opus): 10행 → 전부 반영(수리가 덜 바꾼 «مشروع» 3 · «No-Limit» 1 · 중복 1 · 괄호·전치사 조판 5)
- C ⑥ 화면: 390·1440 overflow 0(6편 × 2폭) · RTL = 레이아웃 래퍼 `<div dir="rtl">` · 라틴 조문(«TDA 2024 Rule 16») 표시 정상. 🪶 워크트리에 `.env.local`이 없어 클라이언트가 Supabase 초기화에서 죽는다(dev·start 모두) → JS 끈 Playwright로 SSG HTML 촬영(`.env.local` 복사는 권한 거부 — 우회 안 함). 🔴 결함 1 → 헤드 요청
- ▶ 다음: 헤드 창에 «ar-rules 끝났어, 머지해»

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| texas-holdem-rules-for-beginners | ✅ | ✅ | ✅ | |
| holdem-game-order | ✅ | ✅ | ✅ | |
| holdem-betting-actions | ✅ | ✅ | ✅ | |
| holdem-blind-meaning | ✅ | ✅ | ✅ | |
| holdem-all-in-rules | ✅ | ✅ | ✅ | |
| holdem-showdown-rules | ✅ | ✅ | ✅ | |

## 신규 용어
| EN | 채택 ar | 근거 |
|---|---|---|
| check · call · raise · bet | التمرير (تشيك) · المجاراة (كول) · الزيادة (رايز) · الرهان (بت) — 첫 등장 괄호 음차 · 음차 철자 «رايز»(«ريز» 금지) | §3-A 미정 자리 · ar 8편 코퍼스(التمرير·المجاراة·الزيادة 주표기) + L1 §4-D(헤딩 «تشيك (Check)»·«كول (Call)»·«رايز (Raise)» 다수 · «ريز»=이름 오염) · betting-actions 제목만 음차 앞세움(L1 §7-3) |
| fold 풀이 | «الطي (فولد) — أي الانسحاب من اليد» 첫 등장 | §3-A «الانسحاب من اليد» 병기 지시의 문구 확정 |
| muck | رمي الأوراق دون كشفها · 첫 등장 «(الماك — Muck)» | L2 §5-E(GG «الماك») · 기존 ar «رمي الأوراق دون كشف» |
| uncalled bet | الرهان غير المُجارى | L3 §4-C ①(hootpoker «الجزء غير المجارى») |
| big blind ante | أنتي البيغ بلايند (BB Ante) | §3-A blinds 행에서 파생(«أنتي الرهان الكبير» 폐기) |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| texas-holdem-rules-for-beginners | reading-the-board (L73) | 빼기 |
| texas-holdem-rules-for-beginners | flush-vs-straight (L83) | 빼기(같은 문장 hand-rankings 링크 유지) |
| texas-holdem-rules-for-beginners | starting-hands-chart (L287) | 대체 → `/ar/hand-chart` |
| texas-holdem-rules-for-beginners | tiebreak-rules · split-pot-rules (L356) | 하나로 합쳐 대체 → `holdem-hand-rankings#kicker` |
| holdem-game-order | starting-hands-chart (L90) | 대체 → `/ar/hand-chart` |
| holdem-betting-actions | when-to-fold (L107) | 대체 → `holdem-strategy` |
| holdem-betting-actions | split-pot-rules (L158) | 대체 → `holdem-hand-rankings#kicker` |
| holdem-betting-actions | limping (L233) | 빼기 |
| holdem-blind-meaning | straddle (L121) | 빼기 |
| holdem-blind-meaning | position-play (L145 · readnext) | 대체 → `holdem-positions` |
| holdem-all-in-rules | split-pot-rules (본문 · Related) | 대체 → `holdem-hand-rankings#kicker` · 카드는 hand-rankings |
| holdem-showdown-rules | split-pot-rules (L93 · Related) | 대체 → `holdem-hand-rankings#kicker` · 카드는 hand-rankings |
| holdem-showdown-rules | tiebreak-rules (Related) | 대체 → all-in-rules 카드(hand-rankings 중복 회피) |
| (복원 — 편차 해소) | positions(rules L141·L248 · order L172·L318 · betting L168 · blind L89·L196 · Related 3편) · strategy(betting L135·L166 · readnext) · tournament(blind L113·L119 · Related) · pot-odds(blind L144) | 기존 ar는 대상이 없어 뺐다 → EN대로 복원 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `lib/posts-en/holdem-betting-actions.ts` tldr | «the minimum raise equals the last full bet or raise» — «증분»이 빠져 총액으로 읽힌다(본문 L118·L128은 정확) | C 렌즈 딜러·SEO 둘 다(확신도 낮음) · ar tldr도 같은 문면(확정 카피라 못 고침)

## 헤드 요청
- 🅱 rank 레인이 `holdem-hand-rankings`에 `<a id="kicker"></a>` 앵커를 **실제로** 만드는지 머지 때 확인 — 이 레인 4편(rules · betting · all-in · showdown)이 `#kicker`로 건다.
- `/ar/calculator` dict의 all-in 글 링크 문구(«دليلنا لقواعد الأول إن والبوت الجانبي»)는 도구 화면이라 손대지 않음 — 제목이 바뀌어도 의미 일치(확인만).

- 🔴 readTime 문법: 아스트라 A #11 채택 — 3~10분은 «N دقائق»(복수) · 11+ «N دقيقة». 이 레인 4편(9·10분)은 «دقائق»로 쓴다. ar 코퍼스 8편·타 레인(rank·prob·strat) 브리프는 «N دقيقة» 고정 → 헤드가 전 레인 통일 판정(머지 때 스윕 또는 레인 공지).

- 🔴 **RTL 카드 토큰 줄바꿈(C 화면 실측)**: 390px 표 칸에서 카드 줄이 접히면 무늬 기호(bidi 중립)가 반대편에 붙는다 — texas 7장 예시 표 «A♠ K♠» → «A♠ / ♠K» · «8♠ 8♦» → «♦8 ♠8» 꼴. 기존 ar 글에도 같은 표가 있어 렌더러 공통 결함(이 레인 문면 밖) → 렌더러에서 카드 토큰을 LTR 격리(예: 렌더러가 카드 패턴을 «bdi» 요소나 «unicode-bidi: isolate» 스팬으로 감싸기) 판정 요청. 🔴 본문에 제어문자를 넣지 않았다(계획 §5 RTL 행).
- «آخر مُعتدٍ»(last aggressor): 네이티브 렌즈 = «가해자» 뉘앙스 · 테이블 말 아님(확신도 중간) → 확정 카피(showdown desc)가 쓰고 있어 본문만 바꾸면 갈린다 → 유지. 바꾸려면 카피·본문 함께(대안 «آخر لاعب هجومي (آخر من راهن أو زاد)»).
- game-order title 앞머리 «كيف تلعب تكساس هولدم» = 필라 주인어와 겹침(SEO 렌즈 · 낮음~중간 · EN-먼저 — EN 두 글도 같은 머리) → 확정 카피라 그대로 · 헤드 판정.
- 레인 경계 용어(헤드 스윕 후보): no-limit «نو-ليمت»·pot-limit «بوت-ليمت» · draw «سحب (درو)» · string bet «السترينغ بت» · 3-bet «3-بت»/«ثري-بت» 혼재(betting 135·141 · order 70·258 라틴) — §3-A에 없는 자리라 다른 레인과 대조 필요.

## 미결
- (없음 — B→C 인계 8건은 C에서 전부 판정: 조문 라틴 통일 · 직답 중복 2곳 삭제 · UTG 대시 해소 · «اللمب»→«الليمب» · 머크 정의 구절 렌즈 통과 · all-in «---»·#kicker 카드 확인 · win-rate-quiz 이름 정정 · positions 링크 문구 §2 ⑨ 위반 0)
