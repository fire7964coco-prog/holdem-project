# vi-strat 진행 — 🅳 전략

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-D-strat.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = `docs/vi-lanes/strat-brief.md`(A 산출 · B의 유일한 입력 + EN 마스터 읽기 전용).

> positions = «vị trí trong poker» 헤드 · position-play = IP/OOP 롱테일(§3-C ⑤) · starting-hands-chart title·H1에 «chart/bảng» 금지(⑥ · 도구 CTA «bảng bài khởi đầu theo vị trí») · strategy에 bluff H2(⑰) · when-to-fold는 정의 앵커만(③) · «3 bet»·«cbet»·«limp là gì»·«under the gun» 단독 = 오염 · «mẹo chơi poker luôn thắng» 약속형 금지.

## 상태 — A ✅ (10-09 · 브리프 123KB + Fable 카피 1회 · 글자수 초과 0 · Opus 조정 7건) / B ✅ (10-09 · 8편 집필·등록 · `audit:hard --locale=vi` 8편 🔴 0 · `check:structure` 내 8편 결손 0 · `check:intl-links` 미번역 대상 12건 = 다른 레인 슬러그(정상 · §0-5) · `npx next build` 통과) / C ✅ (10-09 · 게이트 전건: `audit:hard --locale=vi` 🔴 0 · `check:intl-links` vi 19 = 전부 다른 레인 슬러그 · `check:structure` 내 8편 결손 0(vi 6 = 기존 글→내 8편 미링크 · 헤드 요청 ⑥) · `check:meta` 0 · `check:seo-sync` 🔴 0 · `npx next build` 927/927 ✅ · §13: 스크립트 전사 대조 카드 토큰 8편 집합 일치 · 숫자 토큰 차이 전건 판정 = 표기 차이뿐(철자 숫자→숫자 · $1/$2 · readTime) · 손검산 55자리 일치(딜러 렌즈 독립 재산 포함) · 렌즈 4종 지적 81(중복 포함 · 딜러 7 · 교열 19 · 네이티브 48 · SEO 8) · 반영 73 · 미반영 8 = 잠금 카피 2(헤드 요청 ⑧ⓑⓒ) + 기각·유지 6(«hoàn thành SB» 잠금 tldr 일관 · steal/squeeze 풀이 · ×/x 혼용 EN 유래 · 링크 초과 = §0-5 허용 · limping L70 현지 보강 유지 · pp H2 giải đấu 병기 위치) · EN-먼저 후보 2 · 2차 교열(반영 diff만) 지적 13 · 반영 12 · 기각 1 · **아스트라 교차 1종**(codex gpt-6-astra · 16:51~17:21 · 1차 렌즈 반영 **전** 사본 기준 · 카드 154자리 순서까지 EN 일치 · 지적 31 = 이미 반영 8 · 잠금 카피 2(헤드 요청 ⑧ⓐⓓ) · H2 «GTO» 단독 2 = 잠금 H2(⑧ⓔ) · EN-먼저 5(아래 표) · 채택 18(«AK hầu như không bao giờ» 완화 · «đôi thứ nhì»→«cùng đôi Át thua kicker» · set vs 플러시 «cù lũ hoặc tứ quý» · «nghiền nát»→«trúng đậm» · «chúng tôi»→비인칭 · pp SB 3-bet/fold 주어 명시 · 직역 6 · «bài không khí»→«bài chưa có gì (air)» · **§3-A 첫 등장 병기 전수 보강** 8편 ≈45자리) · 기각 0) · 3차 교열(아스트라 반영 diff만) 지적 13 · 반영 13(«một đôi tẩy»를 족보 one pair로 오인한 병기 2 · equity 풀이 «của bạn»이 상대 몫 자리에 붙은 3 · 굵은 구 안 병기 2 · 겹친 풀이·직역 잔존 6) · 반영분은 본체가 줄 단위 육안 확인(괄호 중첩 0 · `==`·`**` 짝 0 · 카드 집합 8편 일치) · 재게이트 audit vi 🔴 0 · build 927/927 exit 0) · 커밋 d822ca36 → 아스트라 반영 커밋 (아래 해시)

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-strategy | ✅ | ✅ | ✅ | EN updated 2026-10-05 · 추가 H2 2(bluff ⑰ · cash/tour 앵커만) · FAQ 13 GTO 각도 변경 · C: cash/tour 본문을 브리프 처방(≤80단어·일반 진술+앵커)으로 축약 — «결정 2·5/3이 더 중요» D유형 주장 삭제 · overpair 풀이 · «luôn»→«thường» |
| holdem-positions | ✅ | ✅ | ✅ | EN updated 2026-09-28 · EN tags 없음 → vi 10개 신설 · C: 직답 «button 다음 판 = hijack» → cutoff(L86과 모순) · showdown 선공개 규칙에 «ở vòng cược cuối (last aggressor)» · «mù»(정보 없이) 재표현 |
| holdem-position-play | ✅ | ✅ | ✅ | EN updated 2026-10-06 · L194 check-raise 링크 연다 · 추가 H3 BB 방어 · EN tags 없음 → 8개 신설 · C: «c-bet gần như mọi flop»에 «trên các board chúng tôi đã chạy» 단서 · «Lead (donk bet)»→«Donk bet (lead)» · ICM·bubble 풀이 |
| holdem-starting-hands-chart | ✅ | ✅ | ✅ | EN updated 2026-10-01 · PDF·/en/quiz «(tiếng Anh)» · title·tags «chart/bảng» 0 · EN tags 없음 → 8개 신설 · C: 상위 10핸드 요약 순서 AKs→AKo→AQs(표와 일치) · «Hợp nhất với»→«Phù hợp nhất với» · glossary 글 앵커에서 도구 헤드 «thuật ngữ poker» 제거 · 카드 «Kicker và so bài cùng hạng» |
| holdem-limping | ✅ | ✅ | ✅ | EN updated 2026-10-06 · C: 직답 끝 «limp là gì trong poker» 삽입절 삭제(오염 헤드 근접) · fish 풀이 첫 등장으로 · 직역투 4(nhà·dễ thương·cả nhà·어순) |
| holdem-3bet | ✅ | ✅ | ✅ | EN updated 2026-10-06 · L301 3bet-pot-cbet 링크 연다 · C: «Chỉ bao giờ 3-bet value» 비문 · linear(merged) 동일시 해제(§3-A B-7 · EN-먼저 후보) · «chân không» 직역 2 |
| holdem-continuation-bet | ✅ | ✅ | ✅ | EN updated 2026-10-06 · L65·L129 GTO 문단 연다(thumb `-en.webp`) · C: OOP 레이저 절의 «donk bet (lead)» 삽입구 삭제(IP 상대는 donk 불가) · «Ở giải đấu cỡ lớn» 오독 · «sizing … thôi» 오독 · «kết cấu board» 통일 · 직답 끝 «c bet poker là gì» 메타 문장 재구성 |
| holdem-when-to-fold | ✅ | ✅ | ✅ | EN updated 2026-10-06 · 정의는 betting-actions 앵커 · C: «Không lớn hơn âm»(EN «Zero beats negative») 오역 · «là không»→«là bằng 0» ×2 · «quy tắc 2 và 4»→«4 và 2» · «9 đầy» 직역 · 직역투 5 |

## 신규 용어
| EN | 채택 vi | 근거 |
|---|---|---|
| 관련 글 카드 라벨 Strategy · Odds · Position Strategy · Positions · Starting Hands · Blinds | Chiến thuật · Xác suất · Chiến thuật vị trí · Vị trí · Bài khởi đầu · Blind | §3-A ⑥에 없는 라벨 6종 — 이 레인 값(브리프 §0-6). 기존 vi 8편 «Bài trụ cột / Trụ cột / Mù (Blinds) / Thứ tự chơi / Nước Cược»은 🅰 정리 대상 · 다른 레인과 대조 필요 |
| 카드 `T♥`(무늬 붙은 10) | `10♥` (핸드 클래스 `TT`·`ATs`·`JTs`·`T9s`는 그대로) | §3-A ② · fr H-20 동형 · position-play L196·L213 · continuation-bet L105·L129 |
| over-limp / iso-raise / limper | over-limp (limp theo sau) · iso-raise (raise cô lập) · limper | §3-A ④ limp 행 확장 · 브리프 §0-3 |
| delayed c-bet / double·triple barrel / float / bluff-catcher | delayed c-bet (c-bet trì hoãn) · double barrel · triple barrel · float · bluff-catcher | §3-A ④ GTO 행의 «c-bet trì hoãn» 승계 · 나머지 영어 보존 |
| equity realization / top pair / overpair / sunk cost / laydown / hero call | mức equity thực hiện được (equity realization) · top pair (đôi cao nhất) · overpair (đôi trên board) · chi phí chìm (sunk cost) · laydown (bỏ bài lớn) · hero call | 정본 없음 — 이 레인 값 · 🅵·🅶과 대조 필요 |
| tight-aggressive (TAG) / LAG / nit / calling station / reg | tight-aggressive (TAG) + «chơi chặt – đánh mạnh» 풀이 1회 · LAG · nit · calling station · reg | 영어 보존 · 🅵 fish 글과 대조 |
| board texture / dry / wet / two-tone | kết cấu board (board texture) · board khô / ướt · hai chất (two-tone) | §3-A ④ GTO 행(«board khô / ướt» · «bicolor = hai chất») 승계 · C: «kết cấu bài chung» 혼용 → «kết cấu board» 통일 |
| **overpair** (C 정정) | overpair (đôi tẩy cao hơn mọi lá trên board) | 🔴 브리프 §3-A 발췌의 «overpair (đôi trên board)»는 «보드에 깔린 페어»로 읽혀 뜻이 반대(렌즈 3종 일치) — 3편 교체. `vi-cluster-plan.md` §3-A ④ GTO 행 «overpair»에 풀이가 없으니 헤드가 이 값을 정본에 올리면 🅶·🅲 재발 방지 |
| complete the SB | hoàn thành small blind | 네이티브 렌즈 «직역» 지적(«bù small blind cho đủ big blind (complete)» 제안) — 🔴 limping 잠금 tldr이 이 표기라 본문도 유지(일관성). 헤드 판정 자리 |
| stab / family pot / run over / bleed chips | bet cướp pot (stab) · pot nhiều người (family pot) · lấn át · rỉ chip | C 직역투 교체 — «đâm vào»·«pot cả nhà»·«cán qua»·«chảy máu chip» 폐기 · 🅵 fish 글과 대조 |
| in a vacuum / nines-full / one-stop | trên lý thuyết thuần túy · cù lũ 9 · (phiên bản) trọn gói | C 직역투 교체 — «trong chân không»·«9 đầy»·«một-điểm-dừng» 폐기 |
| 액션 첫 등장 병기 | 편마다 1회 «call (theo)» «raise (tố)» «fold (bỏ bài)» | §3-A ④ — B는 strategy·when-to-fold 일부만 달았다 → C가 8편 전부 첫 본문 등장에 보강 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (전 편) | 8편 EN 링크 전부 51편+도구 안(스크립트 추출 실측 10-09) | **편차 0** — B 실측: EN 링크 대상은 1:1로 전부 걸었다(`check:structure` vi 행 내 8편 link·linkn·cardn 결손 0) |
| holdem-starting-hands-chart | `/downloads/poker-starting-hands-chart.pdf` · `/en/quiz` | 유지 + 앵커 «(tiếng Anh)» (vi PDF·퀴즈 없음) — 대상 동일이라 편차 아님 |
| holdem-continuation-bet · position-play · 3bet | GTO 역링크 4(a-high-board-cbet · 3bet-pot-bet-sizing · low-board-check-raise · 3bet-pot-cbet) | **열었다**(🅶 같은 배포) · thumb `-en.webp` 그대로 |
| **추가**(§0-5 · EN에 없는 앵커 — «많은 것은 허용») | — | strategy 첫 문단 → `texas-holdem-rules-for-beginners`(🅰 규칙 앵커 1) · strategy 결정 1 → `holdem-positions` · strategy 결정 2 → `/vi/hand-chart` · strategy 추가 H2 cash/tour → `holdem-tournament-vs-cash-game` · strategy FAQ 4 → `holdem-when-to-fold` · positions L186 → `/vi/hand-chart` · position-play 첫 문단 → `holdem-positions` · position-play L166 표 아래 → `/vi/hand-chart` · position-play 추가 H3 BB 방어 → `holdem-blind-meaning` · when-to-fold 첫 문단 → `holdem-betting-actions` · when-to-fold L75 절 → `/vi/calculator` |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- (A에서 발견 없음 — fr 🅳 C가 올린 3건(continuation-bet:181 «charges» · position-play:128 AK/AQ ↔ starting-hands:121 · continuation-bet:105 «over 97% on all three» 범위 표현)은 EN이 그대로라 vi B는 EN대로 쓰고 C가 재판정 → **C 재판정: 셋 다 EN 그대로 둔다** — 181 «charges»는 «bắt trả giá»로 자연 번역 · 128 AK/AQ는 «코어» 서술이라 121 «AKo (and sometimes AQo)»와 모순 아님 · 105 «over 97% on all three»는 position-play:213의 «두 보드 ⅔ + A-K-2는 ⅓ 57.8%»와 합산 표현이라 정합(네이티브 렌즈도 EN 축어 확인))
- `lib/posts-en/holdem-3bet.ts:95` 표 머리 «Linear (merged)» · `:266` FAQ «A linear (merged) range» | linear과 merged를 동일시 | `vi-cluster-plan.md` §3-A ④ GTO 행(아스트라 B-7: linear ≠ merged — merged는 중간 핸드까지 포함하는 별개 구성). vi는 «range tuyến tính (linear)»로 끊었다. EN·다른 로케일은 헤드 판정(용어 정의 수준이라 §13급 전파 대상은 아님)
- `lib/posts-en/holdem-positions.ts` showdown 선공개 규칙 문장(«last bet or raise shows first») | 적용 범위 «마지막 베팅 라운드» 미명시 | §3-A ④ heads-up/last aggressor 행(아스트라 A-6: 콜한 사람까지로 오독). vi는 «ở vòng cược cuối (last aggressor)» 추가. EN은 헤드 판정
- (아스트라 C 10-09) `holdem-starting-hands-chart.ts:65` «AK is never the favorite against a pocket pair» | 전수 계산 A♥K♥ vs 2♠2♣ = AK 50,08%(852.207승/849.322패/10.775무 · 1.712.304 보드) → «never»는 거짓 | vi는 «hầu như không bao giờ»로 완화. EN은 «almost never»로
- (아스트라 C 10-09) `holdem-when-to-fold.ts:112·117` «fills up ~34%» · «fills up on the seven obvious outs (the case nine…)» | case nine은 풀하우스가 아니라 **쿼드**(990 런아웃 중 FH 297 = 30% · 쿼드 44 = 4,4%) | vi는 «cù lũ hoặc tứ quý» + «— hoặc tứ quý với lá 9 còn lại —». EN «fills up»도 정확히는 «improves to a full house or quads»
- (아스트라 C 10-09 · D유형) `holdem-when-to-fold.ts:117` «On the flop that's a call … folding sets on the flop costs far more over time» | 가격·잔여 스택 무시 — pot $100에 상대 $200 올인이면 필요 에퀴티 40% > 34,4% → 콜 EV −$27,78 · 올인에는 implied odds가 없다 | vi는 EN대로 둠. EN이 «against a normal-sized bet with stacks behind»류 조건을 붙여야 함
- (아스트라 C 10-09 · D유형) `holdem-position-play.ts:297` «facing a raise from the small blind, 3-bet or fold almost every time» | «from the small blind»가 «SB가 레이즈한 것을 BB가 맞는다»로 읽혀 BB의 정당한 콜 레인지를 버리라는 조언이 됨 · 의도는 «SB에 앉아 남의 레이즈를 맞을 때» | vi는 «khi bạn ở small blind và gặp một cú raise»로 주어 명시. EN은 «when you are in the small blind facing a raise»로
- (아스트라 C 10-09 · D유형) `holdem-strategy.ts:216` «more than about one in five hands, you're almost certainly playing too many» | 테이블 인원 조건 없이 절대 진술 — 같은 사이트 when-to-fold는 6-max 20~25% 참여를 허용 | vi는 EN대로 둠. EN이 «at a full-ring table»로 범위를 적어야 함

## 헤드 요청
- ① GTO 썸네일 `gto-srp-dry-ace-oop-en.webp` · `gto-3bp-dynamic-oop-en.webp`(continuation-bet L65·L129 thumb)는 영어 오버레이 — `-vi` 변형 없음(10-09 실측 · `-en`만). B는 `-en`을 쓴다 → 🅶 레인이 `-vi` 변형을 만들면 헤드가 교체. 같은 건으로 EN continuation-bet 파일 머리 주석(«7개 번역본에는 전파하지 않는다») 갱신 여부 판정.
- ② 관련 글 카드 라벨 6종(신규 용어 표) — 다른 vi 레인 값과 대조해 하나로.
- ③ vi 퀴즈(`/vi/quiz`)·vi 시작 핸드 PDF 없음 — starting-hands-chart는 영어 자료 링크 + «(tiếng Anh)». 도구 확장 회차 후보로만 기록.
- ④ 솔버 vi 랜딩 없음 → strategy FAQ 13(GTO)은 솔버 이름만(링크 없음 · §3-A ⑤). `/vi/solver` 생기면 한 줄 교체 자리.
- ⑤ (B 10-09) `audit:hard` H5가 **베트남어 족보명을 하나도 인식하지 않는다**(`HAND_ALIASES`에 vi 별칭 없음 → vi 글의 «5장 족보 예시» 커버리지 0). when-to-fold L148에서 영어 «trips»만 잡혀 «hai đôi» 문장을 트리플 주장으로 오판(🔴 1건) → 본문을 «sám cô 9»로 바꿔 통과시켰다(§3-A 족보=베트남어와도 합치). 헤드가 `scripts/audit-hardening.mjs`에 vi 별칭(thùng phá sảnh · thùng · sảnh · cù lũ · tứ quý · sám cô/bộ ba · hai đôi · một đôi/đôi cao nhất/overpair · bài cao/lá cao)을 넣으면 🅱·🅲 글까지 커버리지가 생긴다. **C는 그전까지 §13 전사 대조 + 손검산으로 메운다.**
- ⑥ (B 10-09) `check:structure` 🟠 vi 6건은 전부 **🅰·🅱·🅴 기존 글**이 이제 존재하는 내 8편으로 링크를 안 거는 것(betting-actions→when-to-fold·strategy·positions / blind-meaning→positions·position-play / game-order→starting-hands-chart·positions / hand-rankings→starting-hands-chart / tournament-vs-cash-game→blind-meaning·starting-hands-chart / rules→positions·starting-hands-chart). 그 레인 재작성 때 걸린다 — 이 레인은 손대지 않았다.
- ⑦ (B 10-09) `check:intl-links` vi 12건 = pot-odds · probability · equity · outs · glossary · fish · GTO 4편 — 전부 다른 레인 슬러그(🅲·🅵·🅶). 배포 1회 원칙(계획 §1)대로 걸어 두었다. `npm run build`의 prebuild는 이 때문에 막히므로 **헤드 머지 뒤 전 레인 합쳐서** 통과 확인. (C 10-09 재실측: intl-links vi 19건 — 8편 등록 후 수치 · 전부 다른 레인 슬러그 · `npx next build` exit 0)
- ⑧ (C 10-09) **잠금 카피 3자리 — B·C 변경 금지(계획 §2-⑥)라 손대지 않았다. 헤드 판정:** ⓐ continuation-bet **tldr**이 EN 괄호절 «(as the out-of-position 3-bettor it flipped to over 97% on the three boards we solved)»를 뺐다(Fable 카피 단계 누락 · EN c91cbe98부터 있던 §13급 수치) — 넣으려면 «; còn khi bạn là người 3-bet ở OOP thì ngược lại — hơn 97% trên cả ba board chúng tôi đã solve» 한 절(tldr 422→~500자). ⓑ positions FAQ ↔ position-play FAQ 질문 **축어 동일** «**Q. Small blind hay big blind hành động trước?**»(EN은 두 글이 달랐다 · FAQPage 스키마에 같은 Q가 두 URL) → position-play 쪽을 «**Q. Sau flop, small blind hay big blind hành động trước — và vì sao button luôn đi cuối?**»로. ⓒ strategy FAQ ↔ continuation-bet FAQ·H2 «**Q. Nên c-bet thường xuyên đến mức nào?**» 동일(주인 = c-bet ⑭) → strategy 쪽을 «**Q. Người mới nên c-bet ở flop thường xuyên đến mức nào?**»로. ⓓ (아스트라) starting-hands-chart **desc** «GTO so với cách người mới»(불완전) · **tldr** «chỉ một lát mỏng ở trên cùng»(slice 직역) → «bảng GTO so với bảng cho người mới» · «chỉ một nhóm nhỏ những tay bài mạnh nhất». ⓔ (아스트라) 잠금 **H2** 2곳이 §3-A «GTO poker» 붙임 규칙 위반 — limping «## Limp ở bàn live cược nhỏ và online/GTO khác gì?» → «…online/GTO poker…» · starting-hands-chart «## Bảng GTO preflop hay bảng cho người mới…» → «## Bảng GTO poker preflop…».
- ⑨ (C 10-09) **§3-A 정본 보강 요청**: overpair 풀이(신규 용어 표) · «complete the SB» 표기 · glossary **글**(`holdem-glossary`) 링크 앵커는 도구 헤드 «thuật ngữ poker»를 쓰면 안 되는데(§3-A ⑤ 역방향 금지) B가 2편에서 썼다 → C가 «giải thích từ vựng ở bàn poker»로 교체. 다른 레인도 같은 꼴일 가능성 → 헤드 용어 스윕 항목.
- ⑩ (C 10-09) `audit:hard` 커버리지: 내 8편 중 6편이 «시나리오를 못 잡은 글»(vi 족보 별칭 없음 · ⑤와 같은 건) → C는 스크립트 전사 대조(카드 토큰 8편 전부 EN과 집합 일치 · 숫자 토큰 개수 차이 전건 판정 = 철자 숫자→숫자·$1/$2·readTime뿐) + 손검산 55자리(딜러 렌즈 독립 재산 포함)로 메웠다.

## 미결
- (없음)
