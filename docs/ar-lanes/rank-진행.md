# ar-rank 진행 — 🅱 족보

> 정본 = `docs/ar-cluster-plan.md`(§1 범위 · §2 장치 · §3-A 용어 · §3-C 소유표 · **§5 레인 운영 차이 표** · §5-A 특이점) + `docs/vi-cluster-plan.md` §5 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `e30fde28`.
> SERP 입력 = `docs/keyword-bank/ar-serp/L2-rankings.md` + `00-brief.md` + `ar-core-volumes.md` — 다시 조사하지 않는다(계획 §2 ①).
> 브리프 = `docs/ar-lanes/rank-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> 우선순위 1 · 헤드 «ترتيب البوكر»(현재 0회) · 🔴 tiebreak 흡수(판정 ①) — `#kicker` 앵커 절을 **새로 만든다**(현 파일에 없음 · §3-D) · 키커·무승부·스플릿 · 7장 기준 확률표 · 순위표 이미지 1장 · §13 핸드 예시 베스트 5장 전수 검산 · «جدول/صورة ترتيب البوكر»는 이 글 몫(시작 핸드 차트어는 `/ar/hand-chart`).

## 상태 — A ✅ 10-14(브리프 확정 · Fable 카피 1회 + Opus 조정 6 · 아스트라 A 21행 WRONG 0 · 채택 3) / B ✅ 10-14(1편 집필 · 순위표 이미지 생성 · 자기 게이트 🔴 0) / C ✅ 10-14(렌즈 3종 + 아스트라 C · 지적 반영 18 · 2차 교열 ✓ · 화면 390·1440) · 커밋 — (아래 «C 기록»)

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-hand-rankings | ✅ | ✅ | ✅ | tiebreak 흡수 = `#kicker` H2 + H3 6 · FAQ 20+6 · 순위표 이미지 신규(§7) |

## 신규 용어
| EN | 채택 ar | 근거 |
|---|---|---|
| counterfeit(ing) | التزييف (Counterfeit) + 풀이 | 브리프 §1-C · 0-2 SERP 사용례 없음(설명형) |
| odd chip | الرقاقة الفردية | L2 §8-B 처방 축어 |
| play the board | اللعب بالطاولة | 기존 코퍼스 «الطاولة»=board |
| Full House 별명 Boat | «بالإنجليزية Boat»(구판 «"بوت"» 삭제) | pot=«البوت»(§3-A)과 충돌 |
| One Pair 라벨 | زوج واحد | L2 §5-B 6쪽 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-hand-rankings | holdem-kicker (HR L51) | 대체 → `#kicker` |
| holdem-hand-rankings | holdem-tiebreak-rules · holdem-split-pot-rules (HR L198 · readnext · 그리드) | 빼기(같은 글 `#kicker` 절로 흡수) · readnext·그리드는 대체 |
| holdem-hand-rankings | holdem-flush-vs-straight (HR L328 · readnext · 그리드) | 빼기 · readnext/그리드 대체 → holdem-showdown-rules · holdem-probability |
| holdem-hand-rankings | holdem-starting-hands-chart (HR L404 · 그리드 · TB L75) | 대체 → `/ar/hand-chart` |
| holdem-hand-rankings | holdem-reading-the-board (그리드 · TB L175) | 빼기 · 그리드 대체 → holdem-game-order / `/ar/calculator` |
| holdem-hand-rankings | (추가) | holdem-showdown-rules · `/ar/calculator` · `/ar/win-rate-quiz`(선택) |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거

## B 기록 (10-14)
- 산출: `lib/posts-ar/holdem-hand-rankings.ts`(덮어씀 · index.ts 무수정) · `public/images/holdem-hand-rankings-chart-ar.webp`(1200×675 · q82 · 54KB · Noto Kufi Arabic HTML→Playwright · Read 육안 확인: 아랍어 연결·RTL 거울 배치·카드 10행·% HR 축어 일치 · 생성 HTML은 scratchpad만 — 레포에 안 넣음).
- 자기 게이트: audit:hard --locale=ar --slug 🔴 0 🟠 0 · check:structure ar/holdem-hand-rankings 결손 0(처음 li −1 = 브리프 §4-α가 HR 4단계 목록을 TB 표로 대체한 탓 → 무늬 4종을 목록으로 바꿔 +4 · 많은 쪽 허용) · check:images ✅ · check:image-reuse 🔴 0 · `npx next build` exit 0 · 산출 HTML: `id="kicker"` 1 · 히어로 img 1(중복 없음) · FAQPage Question 26 · 잔존 `**` 0.
- 금지어 grep 0: قدر · الإيس/إيس · "بوت" · الشودان · المركز · تحت المدفع · الرهان الكبير · 본문 백틱. «الفلاش الملكي» 1 · «النهر» 1 = 첫 등장 병기뿐.
- §13: audit 커버리지가 이 글을 못 잡음(카드 문단 38 · 미검사) → B에서 scratchpad `ev.mjs`로 본문 핸드 23건(퍼즐 1~3 변형 포함 · 같은 페어 · 트립스 · 투페어 · 카운터핏 · 휠 · 5th · 보드 플레이 · 찹) 베스트5 재계산 → 전부 본문 결론과 일치. C에서 렌즈와 함께 재확인.
- C가 볼 자리: fold 첫 등장 병기 «الطي (فولد)»는 본문에 fold 문맥이 없어 미사용(그리드 부제 «الطيّ»만 · 카피 불변) · showdown 첫 등장 = #10 하이카드 절 «المواجهة (الشوداون — Showdown)» · H2-1 앞 영어 병기는 브리프 §1-B 첫 등장형.

## C 기록 (10-14)
- ⓪ «git merge main» → 19a061b4 ff(충돌 0).
- ① 게이트: audit:hard --locale=ar --slug 🔴 0 🟠 0 · check:structure ar/holdem-hand-rankings 결손 0 · check:meta 초과 0 · check:faq-schema 🔴 0 · check:seo-sync 🔴 0 · check:number-format ar ✅ · check:intl-links 1건 = «/ar/blog/holdem-probability»(🅲 prob 레인 글 · 통합 전 실패가 정상 · 계획 §4-A) · 반영 뒤 «npx next build» 재실행.
- ② 전사 대조(scratchpad «tx.mjs» · EN HR+TB @e30fde28 ↔ ar · 천 단위 콤마 제거): 카드 ar에만 7♣ = 허용 사실 ③(A♥7♣) · EN에만 3♦ = TB FAQ «higher straight»(의도적 미채택 · 브리프 §3) · 숫자 ar에만 649,740·2,598,960·1,712,304·71.10% = 허용 사실 ①③ · EN에만 12·14(readTime)·85(TB 무늬 FAQ 미채택) → 불일치 0. 손검산 23건 재실행 일치.
- ③ 렌즈 3종(Opus 서브 · 한 메시지): 딜러·수학(예시 60건 + 이미지 10세트 · 불일치 0 · RISKY 1) · ar 네이티브 3인(걸프 G · 이집트 E · 마그레브 M · WRONG 2 · RISKY 9 · 금지어 잔존 0) · SEO/GEO+교열 diff(WRONG 0 · RISKY 6 · 메타·FAQ 26/26·링크·앵커·이미지 7/7 캡션 ✓). 🤖 아스트라 C(스크래치 «astra-ar-rank-C» · gpt-6-astra read-only · WRONG 3 · RISKY 5 · OK 2 · §13 31회 불일치 0 · Rule 73 p.18 원문 확인 · 71.0981%).
- ④ 반영 18(중복 지적 합침): 쌍수 «زُيِّفتا» · desc «العشرة→العشر»(명백한 문법 — 카피 예외) · 표 «الفئة نفسها؟» · FAQ22 «أعلى ورقة خاصة بين اللاعبين» · FAQ11·#9 «الزوج نفسه»(«زوجان»=투페어명 오독) · «البلف (الخداع) ولا تكتمل يدك» · «لأنّ أحدًا» · «فينقلب ترتيب يدين…» · «إكويتي (حصة متوقعة من البوت)» · 첫 등장 풀이 الفلوب·التيرن · «يُسمّى الآس والأوراق المصوّرة»(A≠그림 카드) · «الكُبّة (القلب)» 2곳(걸프 가독 · القلب=MSA) · H3-f 직답을 이미지 위로(§4-α 형식) · 🔴 tldr «عند تساوي نوع اليد يحسم الكيكر» → «تُقارَن أوراقها أولًا ثم الكيكر … إن وُجد»(사실 과잉일반화 — 풀하우스·스트레이트 키커 없음 · 확정 카피지만 §13급이라 C가 고침) · «الأزواج المربكة→المقارنات المربكة» 4곳(EN confusing pairs = 헷갈리는 족보 쌍).
- 기각·보류: 그리드 부제 «ومتى يحق لك الطيّ»(렌즈 3종 공통 — fold 첫 등장 풀이 없음 · 확정 카피라 C 불변 → 헤드 요청) · «نوع اليد»(L195·L523)는 복합어라 명확 → 유지 · 딜러 렌즈 참고 2(L383 원리 근거 약함 · L347 문장 방향 — EN 축어 · 오류 아님) · 2차 교열 «اليد» 반복 취향 → 유지.
- ⑤ 2차 교열(반영 diff 17 hunk만 · Opus 서브): 17/17 ✓ · 새 결함 0.
- 용어 관용성(미결 해소): 카드명 4종 OK(3렌즈 일치) · البستوني·الديناري·السباتي OK · الكُبّة = 걸프 RISKY → «(القلب)» 병기로 해소 · التزييف·الرقاقة الفردية·اللعب بالطاولة = 풀이 동반 조건으로 OK(아스트라: 걸프·이집트 구어 관용성 자체는 «미확인»).
- 화면(로컬 dev · 가짜 Supabase 값 · «tmp/screen/ar-rank-C2/»): 390 높이 28,128 · 1440 높이 22,767 · 가로 넘침 0 · 콘솔 오류 = 가짜 Supabase 주소뿐 · 순위표 이미지·:::hand·:::tiebreak·표 RTL 정상. 🔴 본문 문단 안 라틴 카드열 RTL 결함 → 헤드 요청.

## 헤드 요청
- 🔴 RTL 카드열 표시(렌더러 단 · 모든 ar 글 공통 추정): 아랍어 문단 안 «A♣ A♥ 7♦ 5♣ 2♠»가 «2 ♠5 ♦7 ♥A …»처럼 무늬가 앞에 붙어 보이고, «A-A-K مقابل A-A-Q»·«A-A-A-J-7»(하이라이트 낀) 하이픈 묶음이 줄 끝에서 «A-A-» / «Q»로 쪼개진다(390 «tmp/screen/ar-rank-C2/390/seg-14.png» · 1440 overview-2). 표·:::hand·:::tiebreak 안은 정상. 계획 §5 «마크업 꼼수 금지»라 글은 그대로 → 처방 후보 = «lib/render-markdown.ts»가 RTL 로케일에서 카드 토큰·카드열을 «<bdi dir="ltr">»(또는 unicode-bidi:isolate span)로 감싸기 · 다른 ar 레인 글도 같은 영향.
- ✏ 그리드 부제 «ومتى يحق لك الطيّ»(확정 카피) — 글 안 fold 첫 등장인데 «الطي (فولد)» 풀이 없음 · 문맥상 muck. 후보: «ومتى يحق لك رمي أوراقك دون كشفها» — 헤드 판정.
- 🖼 ✅ 순위표 이미지 커밋 포함 — 10-14 사장님 승인(C 커밋).

## 미결
- A §13 손검산 19건 일치(scratchpad `ev.mjs`) · KK(K♠K♦) vs A♥7♣ 전수 1,712,304 보드 = 승 1,215,038 · 무 4,755 · 패 492,511 → **71.10%**(L2 §5-C 값 재현).
