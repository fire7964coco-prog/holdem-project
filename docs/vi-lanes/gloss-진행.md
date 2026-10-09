# vi-gloss 진행 — 🅵 용어

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-F-gloss.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🔴 `/vi/glossary` 도구가 **배포 회차에 같이 신설된다**(§3-D ①) → holdem-glossary는 처음부터 seoTitle·H1·tags에 «thuật ngữ poker»를 쓰지 않고 «X trong poker là gì — 영→베 대응 + 쓰이는 자리» 각도 + 첫 화면 도구 링크(앵커 «thuật ngữ poker» · 링크 `/vi/glossary`). rake 합법성 FAQ → 운영 질문으로(세율·법령 안 씀 · §12-B) · tilt H2는 bad-beat(⑱) · bad beat jackpot = 구조만(⑲) · 단독 «X là gì» 전부 오염 → 조준어 «X poker là gì / X trong poker là gì».

## 상태 — A ✅ (10-09 · 브리프 `docs/vi-lanes/gloss-brief.md` · Fable 카피 1회 → Opus 재측정·수정 6자리) / B ✅ (10-09 · 집필 6편 · 자기 게이트 🔴 0) / C ✅ (10-09 · 게이트 전건 · §13 전사 대조 · 렌즈 4종 + 2차 교열 · 아스트라 교차) · 커밋 = C 마감 커밋

C 산출(2026-10-09 · 모델 = Fable 5.1 본체 · 렌즈·2차 교열 = Opus 서브 · 교차 = codex gpt-6-astra read-only 스크래치 사본): `git merge main` ✅(e686b1e5) · 게이트 = `audit:hard --locale=vi` 6편 🔴 0 🟠 0 · `check:intl-links` 미번역 대상 경고만(다른 레인 몫) · `check:structure` 내 6편 결손 0 · `check:meta` 초과 0 · `check:seo-sync` 🔴 0 · `npx next build` exit 0(/vi/blog 14편 HTML · 6편 포함) · §13 전사 대조(스크래치 `s13cmp.mjs`·`s13ctx.mjs` · vi 구분자 정규화 · rgba 노이즈 제거) = 카드 토큰 6편 EN=vi 완전 일치 · 숫자 차이는 전부 설명됨(EN 철자 숫자 sevens/fives/one의 숫자화 · 현지 추가 표·FAQ · «The 3 Things» 정본 라벨 · fish readnext «10 giây» 창작 1 → «Cách tính pot odds»로 교체) · 미판정 카드 문단 4(bad-beat 2 · cooler 2) 손검산 ✓(잭팟 AAJJ vs JJJJ 플랍 완성 · 마부치 턴 Broadway→리버 로열 vs 쿼드 · AA vs 77 set · 777QJ vs JJJQ7 아웃 7♠ 1) · 계산기 «Tay bài vs tay bài» equity 탭 실존 → bad-beat «máy tính equity» 앵커 유지. 렌즈 지적 = 딜러·수학 3(§13 오류 0 · 전사 차이 0 · D유형 0) · 네이티브 51 · SEO/GEO 17 · 교열 18 = **89** → 반영 **85자리**(치환 스크립트 `apply.mjs` · 매치 1회 검증) · 기각·보류 = 확정 카피(title·seoTitle·H2·FAQ 문항·tldr·tags — fr §2-⑥) → 헤드 요청 / EN-먼저 → 아래 표 / 문체(«của bạn» 22회 · 대구 1) 기각. 2차 교열(diff만 · Opus) = 중간 3 · 낮음 2 → 4 반영(straddle UTG 풀이 중복 제거 · blind 첫 등장 «mù lớn, cược bắt buộc» · cooler «gần như» 중복 · rake Dealt 머리 축약) · 1 기각(glossary Blind (mù) 축약형 — 뜻 손실 없음). 아스트라 교차 = codex gpt-6-astra를 스크래치 사본으로 띄웠으나 **26분 만에 시스템 메모리 부족으로 Claude Code가 프로세스를 종료**(REPORT.md 0B · 재시작은 사장님 지시 때만). 중간 메모(stderr)에서 건진 것 3: ① fish L51 «thân thiện với chính người đang bị họ lấy stack» = EN «the person stacking them» 뒤집힘 → «người vừa lấy stack của họ»로 정정(렌즈 4종이 전부 놓친 자리) ② straddle «15–20% fewer»는 GTO Wizard 원표로 상대 감소율을 계산하면 약 13,3–16,5%(표의 변화율이 감소 후 값을 분모로 씀) → EN-먼저 후보(본체 원문 미확인) ③ fish VPIP·PFR 설명의 측정 범위가 EN부터 불명확 → EN-먼저 낮음. 반영 주요 = 의미 정정 4(fish «dễ bị khai thác» · bad-beat 잭팟 «được trả khi…» · bad-beat «lối chơi có lãi» · glossary FAQ 11 순서 문장) + straddle «mù» 산문 7자리 → blind/«khi chưa thấy bài» + 족보·차용어 첫 등장 병기 16자리(+뒤쪽 중복 병기 4 삭제) + 직역투 12자리 + «đôi A»→«đôi Át» 7(tldr 제외) + rake tags «rake là gì»(§3-A ⑦ 오염) → «rake poker meaning».

B 산출(2026-10-09 · 🔴 모델 = Fable 5.1 — HARDEN은 Opus 5.5 지정이나 사장님 지시 «B 시작»으로 그대로 진행 · C에서 렌즈·아스트라 교차로 보강): `git merge main` ✅ · 6편 `lib/posts-vi/<slug>.ts` 신규 · `index.ts` vi-gloss 칸 두 곳 등록 · 브리프 확정 카피 축어(seoTitle·desc·H1·tldr·tags·H2·FAQ 문항 전부) · 구조 EN 1:1(표 행 115+현지 11 · 박스·이미지·디렉티브·== 색 동일) · 현지 추가 = glossary H2 #3 영→베 표 11행 + FAQ 9~11 + 링크 6(`/vi/glossary` 1 · reading-the-board 2 · bad-beat 1 · strategy 1 · 3bet 1) · bad-beat `/vi/calculator` 앵커 «máy tính equity» 1 넣음(선택 → C 확인 대상) · rake FAQ 8 «Tại sao phòng poker thu rake?» 교체(Molly's Game·합법성 0) · §13 값·카드 EN 축어(구분자만 §1-B). 자기 게이트: `audit:hard --locale=vi` 6편 전부 🔴 0 🟠 0(커버리지 ⚠ bad-beat·cooler 카드 문단 2씩 미판정 → C 손검산) · `check:intl-links` = 대상 미번역 경고만(다른 레인 몫 · 정상) · `check:structure --tail` = 내 6편 결손 0(vi 결손 4편은 기존 8편 = 🅰·🅱·🅴 몫) · `npx next build` exit 0 · `/vi/blog/` 14편 HTML(6편 생성 확인) · sitemap·tsbuildinfo 복구.

A 산출(2026-10-09): `git merge main` ✅(b5a0a6ca) · EN 6편 기준 해시 뒤 변경 0(diff 빈 출력) · 해부 스크립트(스크래치 `dissect.mjs` · `s13.mjs`) = 메타 코드포인트 · H2/이미지/디렉티브/FAQ L## · 링크 전수(대상 20종 전부 51편 안 · `<a id>` 0 · 외부 1 gtowizard) · 카드 라벨/제목/설명 축어 · §13 후보 줄 100행. 손검산 4자리 통과(잭팟 AAJJ vs JJJJ · 마부치 쿼드 vs 로열 · set over set 777QJ vs JJJQ7 · AA vs KK/77 비율) + 수치 재계산(1/96 · 1 trên 8,5 · one-outer 96% = 플랍 기준). Fable 서브 1회(입력 = EN 메타·H2·FAQ + 키워드·PAA 축어 + §3-A·§3-C·⑦ + posting.mdc SEO 카피) → 6편 카피 · 길이 전부 한도 안(seoTitle 49~55 · desc 144~151 · H1 65~74) · Opus 수정 = glossary tags 2(ante·buy-in → 몫 밖) · bad-beat tags 1(all-in) · 인용부호 «» → 곧은 " 3편 · Where to Go Next 라벨 채택.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-glossary | ✅ | ✅ | ✅ | 현지 추가 H2 1(영→베 대응 표) · 첫 화면 `/vi/glossary` 앵커 · FAQ +3(Blind·Buy in·chơi giỏi — PAA) · 추가 앵커 5(nuts 2 · tilt · bluff · 3-bet) |
| holdem-bad-beat | ✅ | ✅ | ✅ | H2 #9 = 정본 «Tilt là gì — làm gì ngay sau một bad beat?» + tilt 정의 1~2문장 · `/vi/calculator` «máy tính equity» 선택 1 |
| holdem-cooler | ✅ | ✅ | ✅ | 1:1 · H2 #3 AC «poker cooler vs bad beat» 축어 |
| holdem-fish | ✅ | ✅ | ✅ | 1:1 · readnext·카드 제목 «chart/bảng» 금지(§3-C ⑥) |
| holdem-rake | ✅ | ✅ | ✅ | FAQ L166 합법성 → «Tại sao phòng poker thu rake?» 교체 · «nhà cái» 금지 |
| holdem-straddle | ✅ | ✅ | ✅ | 1:1 · FAQ 1에 PAA «Straddle nghĩa là gì?» 포커 문맥 흡수 |

## 신규 용어
| EN | 채택 vi | 근거 |
|---|---|---|
| The X, at a glance (H3) | ### Tóm tắt nhanh | 레인 결정(§3-A에 자리 없음 · 6편 동일) |
| Where to Go Next (glossary) | ## Nên đọc gì tiếp? | 레인 결정 |
| 카드 라벨 Rules / Strategy | Luật chơi / Chiến thuật | §3-A ⑥에 없음 → 레인 결정 · 🔴 다른 레인과 대조 필요(기존 vi 8편은 15종으로 갈림) |
| 카드 라벨 Glossary / Hand Rankings / Odds &amp; Math / Tournament | Thuật ngữ / Thứ hạng tay bài / Xác suất &amp; toán / Giải đấu | §3-A ⑥ 축어 |
| suckout | suckout «(lá bài may mắn của đối thủ lật ngược ván bài)» · 동사 «bị suck out» | 레인 결정 |
| favorite / underdog | favorite «(bên có cơ hội thắng cao hơn)» / underdog «(bên yếu thế)» | 레인 결정 · «tỷ lệ thắng»은 win probability에만(§3-A) |
| bad beat 첫 등장 풀이 | «(thua ngược khi bạn đang nắm lợi thế áp đảo)» | §3-A는 영어만 지정 → 풀이는 레인 |
| cooler 첫 등장 풀이 · coolered | «(tay bài quá mạnh để fold nhưng vẫn thua tay mạnh hơn)» · «bị cooler» | 레인 결정 |
| setup · cold deck | setup «(như bị sắp bài để thua)» · cold deck «(bộ bài đã xếp sẵn — nghĩa gốc là gian lận)» | 레인 결정 |
| shark · whale · nit · donkey · calling station · reg · grinder · maniac · mark | 영어 + 풀이 1회(cá mập · cá voi · người chơi quá chặt · người chơi tệ · người chỉ biết call · regular · người cày volume · người chơi quá hung hăng · con mồi) | 레인 결정 · «cá» 용어 채택 안 함(L-F §4-M) |
| tilt 첫 등장 풀이 | «(mất kiểm soát cảm xúc rồi chơi sai)» · 동사 «bị tilt» | AC «bị tilt là gì» |
| rake cap · time charge · dead drop · no flop no drop | cap «(mức trần rake)» · time charge «(thu phí theo giờ)» · dead drop «(nút dealer trả rake cố định mỗi ván)» · "no flop, no drop" «(không có flop thì không thu rake)» | 레인 결정 |
| tournament fee / juice / vig · rakeback | phí đăng ký (fee) · «juice»/«vig» 인용 · rakeback «(hoàn rake)» | 레인 결정 |
| cardroom / house / home game | phòng poker · nhà · ván bài tại nhà (home game) · 🔴 «nhà cái» 금지 | 기존 vi «phòng poker» 2 · 실머니 뉘앙스 회피 |
| pocket pair · overpair · top pair | pocket pair (đôi trên tay) · overpair «(đôi trên tay cao hơn mọi lá trên board)» · top pair | §3-A ③ set 정의 문장의 «đôi trên tay» 승계 |
| suited / offsuit | cùng chất / khác chất | 기존 vi 8편 13 · 5 |
| orbit · variance · bankroll | một vòng bàn (orbit) · variance · bankroll «(quỹ tiền chơi poker)» | 기존 vi 8편 2 · 11 · 9 |
| straddler · live blind · option · house rules · floor | người straddle · live blind «(blind còn quyền hành động)» · option «(quyền raise sau cùng)» · luật riêng của phòng (house rules) · floor «(người quản lý sàn)» | 레인 결정 · «option»을 straddle 이름으로 쓰지 않음 |
| act (동사) | act(구어 차용) + «hành động» 병기 1회 | 카피 Fable 제안 · 코퍼스 «act trước/act cuối» |
| idiot end | đầu thấp của sảnh (idiot end) | 레인 결정 |
| "Don't tap the glass" | 영어 인용 + «(đừng gõ vào bể cá — đừng chê người chơi yếu)» | 레인 결정 |
| aces full of jacks | cù lũ ba Át kèm đôi J («đầy J» 폐기) | C 네이티브 — 기존 vi rules 표 «ba lá 8 kèm đôi 4» 승계 |
| stakes | stakes (mức cược) 첫 등장 병기 · 이후 stakes | C 네이티브 — §3-A에 없음 |
| drawing dead · turbo · micro-stakes | drawing dead (hết đường thắng) · turbo (blind tăng nhanh) · micro-stakes (mức cược siêu nhỏ) | C 네이티브 |
| set 정의(경험담 자리) | «set K (đôi K trên tay trúng thêm một lá K ở flop)» | §3-A ③ 정의 고정문의 산문형 |
| rule of thumb · even money · seed the pot | nguyên tắc chung · gần như 50/50 · góp vào pot / tạo pot ban đầu | C 네이티브 — 직역 폐기 |
| coolered(동사) | 본문 «bị cooler» · 인용·FAQ 문항만 «coolered» | 레인 결정 재확인 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (6편 전부) | 전부 51편 안 · 외부 gtowizard 1 | **편차 0** · 현지 추가 = glossary `/vi/glossary` 1 + reading-the-board 2 + bad-beat 1 + strategy 1 + holdem-3bet 1 · bad-beat `/vi/calculator` 선택 1 · **C 실측 = glossary 현지 추가 8**(§1-D 6 + FAQ 9 blind-meaning + FAQ 11 strategy — 브리프 §1-D «그 밖엔 없다»와 어긋남 · 내용 문제 없음) |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `holdem-bad-beat.ts:L94` | one-outer «~96%»에 스트리트 조건 없음(플랍 기준 95,6% · 턴 기준 97,7%) | L-F §6-B · vi는 EN 값 유지
- `holdem-glossary.ts` | 표에 없는 용어 — Monster draw · Flip(coinflip 명사) · Snap call은 있음 · ITM·GTD 있음 | «bluff poker là gì» related 축어(L-F §11-2) · vi에 추가하지 않음
- `holdem-cooler.ts` L53 | suckout 시점 «on the turn or river» vs bad-beat L40 «on the flop, turn or river» — 프리플랍 올인이면 플랍 suckout도 bad beat(cooler L69 자기 예시) | C 교열 · vi는 EN 축어 유지
- `holdem-fish.ts` FAQ 1 vs FAQ 3 | grinder가 «중간»(FAQ 1)과 «fish의 반대»(FAQ 3)로 갈린다 | C 교열
- `holdem-straddle.ts` L181 | FAQ «higher stakes can favor the stronger players»에 본문 L133 단서(«shallower effective stacks can reduce their edge») 없음 | C 교열
- `holdem-bad-beat.ts` L100 | «a 4-to-1 lock» — 80%를 lock이라 부르며 같은 문단 «not a certainty»와 어긋남 | C 네이티브
- `holdem-glossary.ts` H2 #4~#9 직후 · tldr · «full guide» 앵커 ×4 | H2 직답 없음(15~34단어 도입문뿐) · tldr이 질문에 답하지 않음 · 서술 없는 앵커 | C SEO/GEO
- `holdem-bad-beat.ts` H2 #4 · `holdem-rake.ts` H2 #7 | 첫 문단에 기준 수치(80%)·직답 없음 | C SEO/GEO
- `holdem-rake.ts` H2 #5=FAQ 6 · H2 #6=FAQ 9 · `holdem-straddle.ts` H2 #6=FAQ 8 | EN부터 H2↔FAQ 문항 동일·근접 | C 교열
- `holdem-straddle.ts` L126 | «15–20% fewer»(GTO Wizard 인용) — 아스트라 중간 메모: 원표 상대 감소율 ≈ 13,3–16,5% · 🔴 본체 원문 미확인(§12-B 원문 직접 열람 후 판정) | 아스트라(중단 전 메모)
- `holdem-fish.ts` L30·L59·L130 | VPIP·PFR 범위(40–70% · 15–22%)의 측정 조건(게임 형식·인원) 명시 없음 | 아스트라 메모 · 낮음

## 헤드 요청
1. **카드 라벨 Rules → «Luật chơi» · Strategy → «Chiến thuật»** 레인 결정 — 머지 때 다른 레인(🅰·🅳)과 대조해 통일 요청(§3-A ⑥에 두 라벨이 없다).
2. **«thuật ngữ» 단어 자체를 glossary seoTitle·H1·tags에서 금지**로 보수 해석했다(§3-C ①은 «thuật ngữ poker» 구만 명시). 다른 해석이면 카피 재판정 필요 — 현 카피는 «từ poker tiếng Anh» 각도.
3. **«Buy in poker là gì?» 20** — §3-C에 주인 없음(L-F §2는 L-E 잠정 인계). glossary FAQ 10으로 흡수했다(1줄 정의 + 대회 fee 구조). 🅴가 정의 H2를 세우면 glossary는 앵커로 바꾼다.
4. **rake tags «rake là gì» → «rake poker meaning»으로 C가 교체했다**(확정 카피 변경 1) — 브리프 키워드표 «rake là gì 390(섞임) → tags만»이 §3-A ⑦(«rake là gì» 오염 · 어디에도 조준 금지)·§1-F와 충돌 → 정본 우선. 되돌리려면 헤드 판단.
5. **확정 카피 재판정 후보**(B·C 불변 규칙으로 손대지 않음): bad-beat title «Khi cầm 80% thắng» · seoTitle «Thắng 80% mà vẫn thua» = «80%를 이겼다»로 오독 가능(네이티브 중간) → 제안 «Dẫn 80% mà vẫn mất cả stack — Bad beat poker là gì?» · glossary H2 #4 «Check, bet, call, raise, fold trong poker là gì?» = §3-C ② betting-actions 소유 정의형과 겹침 · glossary H2 #5·FAQ 2 «vị trí trong poker / UTG» = positions 소유(낮음) · fish H2 #8 = FAQ 7 축어 동일(EN은 근접) · glossary tags «Texas Hold'em» 범용 · cooler tldr «đôi K gặp đôi A»(본문은 «đôi Át»로 통일 — tldr만 남음).
6. **카드 라벨·용어 대조 추가**: «stakes (mức cược)» · «cù lũ ba Át kèm đôi J» 표기를 다른 레인(🅱 hand-rankings · 🅰 rules)과 맞출 것.

## 미결
- 🔴 **아스트라 교차 미완**(메모리 부족으로 프로세스 종료 · 보고서 없음) — 재실행은 사장님 지시 때. 중간 메모 3건은 C 산출 문단에 반영/등재했다. 네이티브 자연스러움 전수는 아스트라 몫이 비었으니 헤드 머지 단계 «51편 용어 스윕»(§3-B)에서 이 6편을 포함해 달라.
- `/vi/glossary` 도구 링크(glossary 도입부 앵커 «thuật ngữ poker»)는 배포 회차 ① 신설 전까지 intl-links가 경고할 수 있음(정상).
- glossary 본문에서 «thuật ngữ» 단어 = 도입부 앵커 1회뿐(헤드 요청 2와 일관).
- fish 표 «Fish» 행 머리 풀이 «(nghĩa đen là "cá")»는 설명 열에 두었다(머리 괄호 1개 규칙) · fish 본문 «"sở thú" tiếng lóng»은 EN «the whole zoo» 축어라 유지.
