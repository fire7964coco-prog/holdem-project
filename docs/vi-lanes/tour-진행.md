# vi-tour 진행 — 🅴 토너먼트

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`(10-09 diff 0 확인 · fr 기준 `a54b5f3d`와도 0).
> SERP 입력 = `docs/keyword-bank/vi-serp/L-E-tour.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).
> 브리프 = **`docs/vi-lanes/tour-brief.md`**(A 산출 · 120KB · B의 유일한 입력 + EN 마스터 읽기 전용 + 틀 `lib/posts-vi/holdem-blind-meaning.ts` 필드 모양만).

> tournament-vs-cash-game은 **기존 편 재작업**(import는 이미 [vi-tour] 칸 안 · 파일만 · «Tournament/Cash Game» 대문자 → giải đấu/cash game). tournament EN FAQ «Is it legal to host…» 삭제 · 카지노 바이인·운영사명 삭제 · tour ≠ tournament 한 줄 · ICM 정의 H2는 holdem-icm만(⑧) · short-stack «push fold là gì» H2 + 도구 링크(⑨) · «bubble là gì»·«short stack»·«icm là gì»·«mtt là gì» 단독 = 오염.

## 상태 — A ✅(10-09 · 브리프 + Fable 카피 1회 · Opus 조정 1) / B ✅(10-09 · 5편 집필·등록 · 자기 게이트 🔴 0) / C ✅(10-09 · 게이트 전건 · §13 전사 대조 · 렌즈 4종 + 아스트라 · 2차 교열) · 커밋 = git log «vi(tour): C 마감»

## C 결과 (10-09 · 16:46~ · AUTONOMY 90분 안 · 본체 Fable 5.1 · 렌즈 Opus 서브 4 + 2차 교열 Opus 서브 1 · 아스트라 codex 1)
- ⓪ `git merge main` 충돌 0(tr 솔버 커밋 2개 유입 · 내 파일 무관).
- 게이트: `audit:hard --locale=vi` 내 5편 0err 0warn(반영 전·후 2회) · `check:structure` vi 결손 = 🅰·🅱 구판 3편뿐(내 5편 0) · `check:meta` vi 0 · `check:seo-sync` 🔴 0 · `check:drift` 내 5편 ✅ · `check:intl-links` 14건 = 전부 다른 레인 «미번역»(B와 동일 · 설계대로) · 백틱 파일당 2 · `npx next build` ✅(반영 전 exit 0 · 반영 후 아래 커밋 직전 재확인).
- §13 전사 대조(스크래치 `s13-compare.mjs` · vi 구분자 정규화 = 천 단위 마침표 제거 · 소수 쉼표→마침표 · rgba·style·날짜·이미지 경로 제거): **카드 토큰 5편 EN과 완전 일치**(두 쪽 다 무늬 카드 0 — 이 클러스터는 핸드명만) · 숫자 잔차 전건 설명됨(24h 시각 7행 · 현지 FAQ 5의 수치 재진술 · title·seoTitle 수치 · readTime). 본체 독립 재계산(`icm.mjs`): ICM 표 9칸·EV 38,39/32,75/28,86·딜 618/485/397·BF 표 57/60/63/67·52,9/42,9·43,9·Seminole 14,42/12,54/4.592.000 전부 ✓. 딜러 렌즈 별도 재산 ~75자리(22 vs AKo 전수 52,649% 포함) 불일치 0.
- 렌즈 4종(Opus): 딜러·수학 4(vi 유래 1 채택 · EN-먼저 3) · vi 네이티브 ~45(성조·오타 0 · 금지어 0 · 다른 게임 어휘 0) · SEO/GEO 11(카피 잠금 위반 **0** · FAQ 정형 51/51 · desc 150/147/153/136/145 · 태그 카니발 0 · 오염 헤드 0) · 교열 21(구조·메타·링크·백틱 깨짐 0 · ①EN 유래 3 · ②번역 유래 18) → 중복 합쳐 **반영 86자리**(1차) + 2차 교열 결함 10 → **반영 22자리**(2차 · 복귀 2 = vs-cash FAQ 단서 복원 · tournament «mạng sống» 복귀). 기각·보류는 아래 «EN-먼저 후보»·«헤드 요청».
- 반영 요지: ① 의미 — tournament «Regular prize money» → «Tiền thưởng chính (không tính bounty)»(«thường»=대개 오독) · «đôi Át bị lật» → «bị thua ngược» · icm «đánh giá cao» → «đánh giá quá cao»(과대평가) · vs-cash L211 주어 전도 수정 · «ván dài» → «cuộc chơi dài»(ván=한 판 정본) ② 어휘 — «đánh bạc» 4자리 → liều/chấp nhận rủi ro(도박죄 법률어) · «nhà cái» → phòng poker(베팅업자 어휘) · «điểm»(spot) 9자리 → spot + 첫 등장 풀이 · «hand» 5자리 → tay bài · «middle stack» 3 → medium stack · «call phẳng» → flat call · 관용구 직역 8(ngón tay cái·mặt gương·sạch sẽ·cắn·hai thế giới·mang tính cá nhân·sống sót ra khỏi) ③ 중복 — FAQ 답 본문 복붙 4자리 압축(tournament Buy-in·MTT · icm 약어 · vs-cash rời bàn) · bubble hand-for-hand 이중 풀이 삭제 · tournament «(tournament)» 병기 2→1 ④ 첫 등장 풀이 이동·추가 — big blind (mù lớn) · MTT (giải nhiều bàn) · orbit(bubble·short-stack) · showdown (lật bài) · rake (phí sòng) · pot odds 계산 정의 · bankroll · giải đấu (tournament) ⑤ 소유표 — tournament L273 앵커 «thuật ngữ poker» → «bài giải thích từng thuật ngữ»(§3-C ① 도구 몫 헤드 회피 · 대상은 EN대로 글) · short-stack «Push fold là gì?» 직답 앞에 정의문 1(FAQ 2 사실 재사용 · 새 수치 0) ⑥ 카드 — readnext = 대상 vi title 축어 · 그리드 = «X là gì?» 축약으로 5편 통일(fr 선례 = readnext 전체 제목) · 카드 설명 «Bài trụ cột mà X thuộc về» 직역 2 교체 ⑦ 조판 — vs-cash 숫자 범위 하이픈 15 → en dash · icm 48–50%.
- 🔴 카피 잠금 예외 1(헤드 판정): icm **tldr** «những hand mà» → «những tay bài mà»(§3-A ④ 정본 · 1단어 · 브리프 축어에서 벗어남 — 되돌리려면 그 1단어만).
- 아스트라 교차(§3-B · codex gpt-6-astra read-only · 스크래치 사본 = B판 · 축 = §13 독립 검산 + 네이티브 + 의미 왜곡 + D유형): 지적 28(§13 5 · 네이티브·풀이 10 · 의미 5 · D유형 8) → **EN-먼저 15**(아래 표에 등재 · vi는 EN 충실 유지) · **채택 10**(tournament BB 약어·push/fold 풀이·EV 풀이·GTD FAQ «총 buy-in» → «수수료 제외 기여분» · icm FAQ «ở bàn» → «tất cả người chơi còn lại trong giải» · bubble BF 표 1,0행 «bằng với thắng giúp» → «thiệt khi thua bằng lợi khi thắng» · open-fold 풀이 · vs-cash variance·equity·ROI 풀이) · **이미 반영 5**(sạch·cắn·mặt gương·ván·call phẳng) · 보류 3(기본 액션어 풀이 = 헤드 요청 · bubble L20 대안 = 본체 문장 유지 · BF 3,0/1,1 = 검증 불가 판정 동의). 독립 재계산 전건 일치(ICM 표·딜·BF·22 vs AKo 52,6491645%·43,9). 🪶 codex 프로세스는 보고 작성 직후 시스템 메모리 부족으로 강제 종료됐다(REPORT.md 24KB는 완성 · 재실행 안 함). 채택 10은 본체가 원문 재확인 후 자기 교열(렌즈 추가 호출 없음 — 메모리 부족).

## B 결과 (10-09 · 집필 5편 · 입력 = 브리프 + EN 5편 + 틀 1편 필드 모양만 · 웹·MCP·다른 로케일 0)
- 파일: `lib/posts-vi/holdem-tournament.ts`(신규) · `holdem-icm.ts`(신규 · export default) · `holdem-bubble.ts`(신규 · export default) · `holdem-short-stack.ts`(신규 · export default) · `holdem-tournament-vs-cash-game.ts`(EN 1:1 재집필 · `date` 2026-06-11 유지 · `hideSummaryImageSlot` · 구판 본문 이미지 3장·«3 điều cần nhớ» 폐기) · `index.ts` [vi-tour] 칸 두 곳만(import 4 추가 · 배열 4 추가).
- 메타: 확정 카피 축어(title·seoTitle·desc·tldr·tags·H2·H3·FAQ 문항 변경 0) · `date`/`updated` = 2026-10-09 · `masterUpdated` = 브리프 EN updated(10-01 · 09-09 · 09-13 · 09-24 · 09-13) · readTime 14/13/13/13/18 phút · imageAlt 베트남어(12.000/24.000).
- 구조 패리티(grep 대조 · EN = vi): H2 14/12/13/11/15 · H3 11/1/1/1/5 · 본문 이미지 0/1/1/1/2 · 표 5/3/1/2/12 · 하이라이트 마커 4/50/68/38/78 전부 EN과 동일 · FAQ 11/9/10/10/10(= EN 9+2 · 8+1 · 9+1 · 9+1 · 10 교체 1).
- 자기 게이트: `audit:hard --locale=vi` 5편 전부 0err 0warn(통과 12/12 · 🔴 0 · 🟠 0 · 단 CLUSTERS에 tournament·icm·bubble·short-stack 미등재라 형제 대조 미시도 · vs-cash는 표 12개 짝 0 = 미검증 → C ②·③) · `check:structure` vi 내 5편 결손 0(🟠 3건은 🅰·🅱 몫 blind-meaning·game-order·hand-rankings) · `check:drift` 내 5편 ✅(vi 7 드리프트는 전부 🅰 rules·🅱 rank 구판) · `check:meta` vi 0 · `check:seo-sync` 🔴 0 · `check:cjk`·`check:hsl`·`check:rangechart`·`check:tournaments-i18n`·`check:image-dims` 0 · 백틱 0(파일당 템플릿 리터럴 2개뿐) · 금지어 grep(mù·tố·theo cược·bong bóng·trò chơi tiền mặt·Đóng băng·대문자 Tournament/Cash Game·anh/chị) 0 — 남은 매치는 «Multi-Table Tournament»·«mù — cược bắt buộc» 첫 등장 풀이·«đóng băng giải đấu»(동사 freeze)뿐.
- `check:intl-links` exit 1 = **14건 전부 다른 레인 대상 «미번역»**(rake · starting-hands-chart · glossary · equity · 3bet · pot-odds · when-to-fold) — 계획 §2 설계대로(51편 머지 뒤 0 · fr tour B 선례와 같은 모양). 그래서 빌드는 `npx next build`로 prebuild 없이 직접 돌렸다(나머지 prebuild 검사는 위처럼 개별 exit 0 · calc-parity만 아래 헤드 요청).
- 모델: 본체 Opus 5.5 · 서브 0 · 자식 프로세스 = next build 1(종료 확인) · AUTONOMY 90분 안.

## A 결과 (10-09 · 14:05~15:05 · AUTONOMY 90분 안)
- 입력 통독: HARDEN · 계획 §1~§5 · ms §3~§9 · fr §5 · L-E 전문 · 00-brief · vi-core-volumes · EN 5편 전문 · 현 vi vs판 · fr tour 브리프(형식·EN L## 승계) · 계산기 vi 사전(M 존·ICM 라벨) · EN glossary L207(GTD).
- EN 해부 5편(L## 구조·링크·원시 HTML·§13·경험담) · §13 수치 전건 재계산(스크래치 `icm.mjs`: ICM 38,39/32,75/28,86 · 리더 2위 33,93% · deal 617,9/485,0/397,1 · BF 표 · 52,94/42,86 · 43,90 · Seminole 4.592.000/12,54%/14,42%) — EN 오류 0.
- 카피: Fable 서브 1회(Agent model fable · 5편) → Opus 재측정(초과 0) · 조정 1(short-stack H2 4 «first-in») · Fable 판정 채택 3 · 브리프 §1-I.
- 모델: 본체 Opus 5.5 · Fable 서브 1(카피) · 자식 프로세스 0(node 스크립트만).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-tournament | ✅ | ✅ | ✅ | 링크 편차 2 ✅ · FAQ 합법성 → «Buy in poker là gì?» 교체 ✅ · 🆕 FAQ GTD·MTT ✅(답 = glossary L207 · EN L127·L130·타임라인 «bàn gộp» 사실만) · H3 Option A 카지노 삭제 ✅ · L179·L185·L302 운영사명 삭제 ✅ · H2 1 직답 끝 tour≠tournament 1문장 ✅ · «đánh tour» 고정문 = 용어표 도입 문장 1회 · 시각 24h 7행 ✅ |
| holdem-icm | ✅ | ✅ | ✅ | 🆕 FAQ «ICM là viết tắt của từ gì?» ✅(마지막) · L19↔L103 «shove는 틀리지 않았다 · 세금은 call에» 결론 보존 · 표 머리 = 도구 축어(Chip % · Giá trị ICM · ICM % · Chênh lệch) |
| holdem-bubble | ✅ | ✅ | ✅ | 🆕 FAQ «Out bubble trong poker là gì?» ✅(FAQ 2 다음) · «out bubble» 정의는 bubble boy 불릿 안에 접음(새 불릿 0) · L139 조건 4개 보존 · WSOP Rule 80 인용 = 영어 원문 "…" + 베트남어 풀이 · «limped into» = «lết vào» |
| holdem-short-stack | ✅ | ✅ | ✅ | H2 2 = «Push fold là gì? …» + 끝 «máy tính push/fold» 앵커 1문장 ✅ · 🆕 FAQ «Stack trong poker là gì?» ✅(마지막 · stack hiệu dụng·avg stack 1문장씩 · 새 수치 0) · FAQ L174 운영사명 삭제 ✅ · EN 태그 «push fold chart» 버림 ✅ · M 존 = 도구 라벨 + «từ 10 đến dưới 20» 경계 |
| holdem-tournament-vs-cash-game | ✅ | ✅ | ✅ | EN 1:1 재집필 ✅(`date` 2026-06-11 · readTime 18 · masterUpdated 09-13) · FAQ 세금 → «Có thể rời bàn cash game bất cứ lúc nào không?» 교체 ✅(답 = L262~271 사실만) · EN 태그 «ICM poker» 버림 ✅ · 구판 이미지 3장·«3 điều cần nhớ» 폐기 ✅ · «đánh tour» 고정문 = L36 단락 끝 1회 · `:::note[…]:::` 1줄 ✅ |

## 신규 용어 (브리프 §1-B 🆕 · 헤드 머지 때 다른 레인과 대조)
| EN | 채택 vi | 근거 |
|---|---|---|
| MTT | MTT (첫 등장 «Multi-Table Tournament — giải nhiều bàn») | mtt poker là gì 10 · EN L127 |
| prize pool · payout structure · pay jump · min-cash | prize pool (quỹ thưởng) · cơ cấu trả thưởng · pay jump (bậc thưởng) · min-cash (mức thưởng thấp nhất) | 계산기 «quỹ thưởng» 축어 · L-E §7-2 · «cơ cấu giải» = 복권 오염 회피 |
| fee | phí (fee) — rake는 §3-A ④ «rake (phí sòng)» | EN «$100+$9» 자리 |
| GTD | GTD (guaranteed — quỹ thưởng đảm bảo) · «đảm bảo» 1회 | §3-A ④ · EN glossary L207 |
| starting / big / medium / short / avg stack | stack khởi điểm · big stack · medium stack · short stack (stack ngắn 1회) · avg stack (stack trung bình) | wikipoker H2 축어 · L-E 69:9 |
| effective stack | stack hiệu dụng (effective stack — stack ngắn hơn trong hai stack) | 계산기 사전 축어 · §3-A ④ |
| first-in | first-in (người đầu tiên vào pot) | 영어 보존 |
| blind level · structure sheet · clock | level blind (mức blind) → «level» · bảng cấu trúc (structure sheet) · đồng hồ giải (clock) | wikipoker «Cấu trúc tăng blind» |
| late reg · reg end · re-entry · rebuy · add-on | late reg (đăng ký muộn) · reg end (hết hạn đăng ký) · re-entry · rebuy · add-on | AC «reg end trong poker là gì» |
| freezeout · bounty · PKO · mystery bounty · satellite · deepstack · turbo | 영어 원어 + 풀이 · satellite (giải vệ tinh) · PKO (Progressive Knockout — bounty tăng dần) | GG «Đóng băng» 오역 회피 |
| final table · bag · dinner break · seat card · tournament director | bàn chung kết (final table) · đóng túi chip (bag) · giờ nghỉ ăn tối · thẻ chỗ ngồi (seat card) · tournament director (giám đốc giải) | wikipoker H4 «Bàn chung kết (Final Table)» |
| burst · pay the bubble · stone/soft bubble · money/FT/satellite bubble · bust on the bubble | bubble vỡ · trả tiền cho bubble · stone bubble (bubble cứng) · soft bubble · money bubble · bubble bàn chung kết · bubble vệ tinh · «out bubble»(구어) | AC «out bubble trong poker là gì» · pokerbold «out tour» |
| hand-for-hand · stalling · time bank | hand-for-hand (mọi bàn chơi từng ván cùng lúc) · stalling (câu giờ) · time bank | 🆕 · «bubble time» 동치 단정 금지 |
| bubble factor · risk premium · ICM tax | bubble factor · risk premium (phần bù rủi ro) · "thuế ICM" (ICM tax) | 경쟁 코퍼스 0 |
| M zones · orbit | 🟢 Vùng xanh · 🟡 Vùng vàng · 🟠 Vùng cam · ⚠ Vùng đỏ · ⚫ Vùng chết(이름 = 계산기 · 이모지 = EN) · orbit = «vòng (orbit)» — «vòng cược»(street)과 구별 | 계산기 m.zones 축어 |
| bb/100 · hourly · cash rate · low/micro stakes | bb/100 · win rate theo giờ · tỷ lệ vào tiền (ITM) · mức cược nhỏ | 현 vi vs판 축어 |
| reload · rack up · cage · rathole · hit-and-run | reload (mua thêm chip) · xếp chip vào khay · quầy đổi chip (cage) · ratholing (rút chip khỏi bàn) · hit and run | 🆕 |
| pocket jacks · ace-ten · ace-jack · pocket aces | đôi J · A-10 · A-J · đôi Át | §3-A ② |
| spot | **spot** (첫 등장 «spot (tình huống ra quyết định)») — «điểm»은 point 뜻에만 | C 네이티브 렌즈(테이블 구어) · 3편 9자리 · 🔴 다른 레인 대조 |
| flat call · call off | **flat call** («chỉ call thường» 1회) · «call off» 영어 보존 | C 렌즈 · «call phẳng» 직역 폐기 |
| orbit | «vòng (orbit — mỗi người đặt blind một lần)» 첫 등장 · 이후 «vòng» | 이 표 M zones 행 보강 · bubble·short-stack·icm 3편 동일 |
| gamble(동사) | **liều / chấp nhận rủi ro** — 🔴 «đánh bạc» 금지(도박죄 법률어 · 합법성 원칙) | C 네이티브 렌즈 · 4자리 교체 |
| house(rake 주체) | **phòng poker / nhà tổ chức** — 🔴 «nhà cái» 금지(베팅업자 어휘) | C SEO·네이티브 렌즈 |
| rule of thumb · worst of both worlds · feels personal · clean(er) | nguyên tắc chung · «cách tệ nhất: …» 풀어 쓰기 · «căng thẳng như chuyện sống còn» · ổn định / ít biến số(«sạch» 금지) | C 교열 · 관용구 직역 금지 |
| 카드 규칙 | readnext = 대상 vi title **축어** · 그리드 카드 = «X là gì?» **축약**(첫 절) | fr tour readnext 선례 · 2차 교열 표 |
| 카드 라벨 | Strategy → Chiến thuật · Free Tool → Công cụ miễn phí · Short Stack → Short stack · Blinds → Blind · Positions → Vị trí | §3-A ⑥ 미등재 5 |

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| holdem-tournament | L191 `/en/blog/apt-incheon-2026-guide`(본문) | 문장 대체 → `/vi/tournaments`(«lịch giải poker» · 계획 §3-C ⑩ 보드 링크 1회) |
| holdem-tournament | L321 `/en/blog/apt-incheon-2026-guide`(readnext) | 대체 → `/vi/blog/holdem-icm`(readnext 3장 유지 · fr·ms 선례) |

## 현지 추가 (B 확인 ✅ 10-09)
- tournament H2 1 직답 끝 tour≠tournament 1문장(브리프 §1-G ② 축어) ✅ · 고정문 «Trong cách nói thông thường, đánh tour nghĩa là chơi giải đấu.» = tournament 용어표 도입 문장 1회 + vs-cash L36 단락 끝 1회 ✅ · 🆕 FAQ 5(tournament GTD·MTT · icm 약어 · bubble out bubble · short-stack stack) ✅ 전부 마지막(bubble만 FAQ 2 다음) · short-stack H2 2 끝 «Range push/fold theo stack và vị trí có sẵn trong [máy tính push/fold](/vi/calculator).» ✅.
- 🪶 B 재량 자리(C 렌즈가 본다): tournament H2 2 «$9 → phí (fee) … tức rake (phí sòng)» 한 셀에 fee·rake 병기 · tournament 글로서리 «Late reg» 행 끝에 «cho đến reg end (hết hạn đăng ký)» 풀이 추가(AC «reg end» 흡수 · 브리프 키워드 흡수 표 지시) · short-stack FAQ 2 답 끝 «Nó lên nắm quyền từ khoảng 15 big blind trở xuống.»(문항이 «từ bao nhiêu big blind»를 물어서 · 수치 EN L37) · vs-cash 관련 글 카드 blind-meaning 설명 «— tất cả trong một bài»(EN «all explained» · 금지구 «giải thích đầy đủ» 회피).

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- holdem-tournament.ts:L109 | 3단계 버블 «Short stack đứng hình. Big stack bắt nạt.» — 형제 2편(bubble L88·FAQ · short-stack L134)이 «오해»라 반박하는 주장(가장 갇힌 자리 = medium stack) | 딜러 렌즈 · 확신 중간 · vi는 EN 충실 유지
- holdem-tournament.ts:L204·L90 | «dưới 20BB push/fold lên ngôi» vs short-stack L47(20bb = raise-or-fold + re-shove)·L38(push/fold ≈15bb부터) | 딜러 렌즈 · 확신 낮음~중간 · fr tour도 미처리
- holdem-bubble.ts:L102 | «never limp or call off» 절대 표현 vs short-stack BB 콜 산수(43,9% · 22 핵심) | 딜러 렌즈 · 확신 낮음 · fr tour C에서도 같은 지적(미처리)
- holdem-tournament.ts · holdem-tournament-vs-cash-game.ts | H2 직후 40~75단어 직답 대부분 부재(첫 단락 7~27단어 · 브리프 §1-A «평문» 패리티) | SEO 렌즈 · §14-A ② EN 개선 후보
- holdem-tournament.ts:L262~263 | WPT Seminole RRPO 2024 «180 paid» — 아스트라: 버블 공동 탈락 2인이 $3.200씩 받아 실제 수령 181명(주최사 결과·라이브 업데이트 p.16 인용) · min-cash $6.400 = 1,83× | 아스트라 · 확신 높음 · 🔴 §12-B 원문 직접 확인 필요(헤드) · vi는 EN 축어 유지
- holdem-tournament.ts:L61·L68 | «prize pool shared among all entrants» · «only thing that matters = more chips than others when paid places arrive» — 상금은 ITM만 받고, ITM 조건은 칩 우위가 아니다 | 아스트라 · 확신 높음
- holdem-icm.ts:L21 | «doubling never doubles your real value» — winner-take-all 예외($EV ∝ chip) | 아스트라 · 확신 높음(낮은 영향)
- holdem-icm.ts:L109·L111 | 칩%−ICM% 차이(11,6)를 call의 risk premium과 연결 — 동량 3인 반례(차이 0인데 콜 임계 57,14%) | 아스트라 · 확신 높음 · D유형
- holdem-icm.ts:L175 | «3BB at BB → forced all-in in a hand or two» — 앤티 없으면 성립 안 함 | 아스트라
- holdem-icm.ts:L103·L126 | «tax lands on the call · open-shove range stays aggressive» — 버블 오픈셔브도 축소(GTO Wizard 8bb HJ 30%→12%) | 아스트라 · D유형
- holdem-bubble.ts:L55 | «call much tighter, but shove still wide» 무조건 지침 | 아스트라 · D유형(위와 같은 근거)
- holdem-bubble.ts:L55 | «you don't need to run the math at the table — our ICM calculator does it» = 실시간 사용 안내로 읽힘(Natural8 SEP §4 실시간 보조 소프트웨어 금지) | 아스트라 · 확신 중간
- holdem-short-stack.ts:L39 | «antes push every band a bit lower» — 같은 M이면 앤티가 있을수록 BB 기준 경계는 **올라간다**(L86과 충돌) | 아스트라 · 확신 높음
- holdem-short-stack.ts:L61 | «call with your tournament or fold» — 상대가 커버하면 상대 생명은 안 걸린다(fold equity 과대) | 아스트라
- holdem-short-stack.ts:L123~124 | «standard Nash tables ignore antes and ICM / heads-up two-blind model» — HRC 앤티 HU 표·Nash ICM 다인 계산기 존재 | 아스트라
- holdem-short-stack.ts:L148·L204 | min-raise/fold·SB limp 절대 금지 — 10~15bb에서도 유효 전략(GTO Wizard) | 아스트라 · D유형
- holdem-tournament-vs-cash-game.ts:L262 | «play until you bust, cash, or win» — ITM은 종료 조건이 아니다 | 아스트라
- holdem-tournament-vs-cash-game.ts:L269 | «no rule says you must stay» — Natural8 SEP §21·GGPoker SEP §11 hit-and-run 규정 존재(라이브 관행을 온라인 규칙으로 확장) | 아스트라 · 확신 높음
- holdem-icm.ts:L183·L238 | readnext·그리드 카드 제목 «Texas Hold'em Tournament Strategy» ≠ 대상 글 title «How Poker Tournaments Work…» | ms·fr 선례 승계 · vi는 대상 vi title로 씀

## 헤드 요청
- 🟠 **카피 잠금 예외 1** — icm tldr «hand» → «tay bài»(§3-A ④ · 1단어). 되돌릴지 판정.
- 🟠 **기본 액션어 첫 등장 풀이 정책** — 5편 전체에 «call (theo)»·«fold (bỏ bài)»·«small blind (mù nhỏ)» 풀이가 없다(토너먼트 클러스터라 B가 생략 · «big blind (mù lớn)»만 C에서 tournament에 1회 추가). §3-A ④ «첫 등장 병기»를 **글마다**로 읽을지 **클러스터 입구 글(rules)에서만**으로 읽을지 — fr·ms 선례와 맞춰 판정 뒤 일괄(네이티브 렌즈 패턴 B · 확신 중간).
- 🟠 tournament L273 glossary 링크 — 앵커는 «bài giải thích từng thuật ngữ»(«thuật ngữ poker» 회피)로 바꿨고 **대상은 EN대로 글**(/vi/blog/holdem-glossary). «từ A đến Z»는 도구 성격이라 대상을 `/vi/glossary`(배포 회차 신설)로 돌릴지 헤드 판정(fr은 글 유지).
- 🔴 **`check:calc-parity:all` vi 불일치 6**(B 등록 직후 발생 · fr tour B와 같은 원인 · `app/`은 헤드 소유 · 계획 §4-C ③ «도구 쪽 역앵커 = 배포 회차»): vi에 holdem-icm·holdem-short-stack이 생겨 `app/vi/calculator/dict.ts`가 EN대로 요구한다 — ① A 표5 link slug `holdem-short-stack`(현 undefined) ② C related slug `holdem-icm` ③ C related slug `holdem-short-stack` ④~⑥ D `icmGuide.deal.linkLead` · `link.slug: "holdem-icm"` · `link.text`(= vi title «ICM poker là gì? Mô hình chip độc lập (Independent Chip Model) và cách tính» 또는 줄임). 모양은 `app/fr/calculator/dict.ts` L450~451·L580 축어(fr 10-07 헤드 회차 주석 «holdem-icm이 생겨 EN대로 linkLead/link를 걸었다»). **머지 전 처리 안 하면 prebuild가 막힌다.**
- 머지 때 신규 용어 표 대조(아래 표 · 🆕 15행 + C 추가 7행: spot · flat call · orbit 풀이 · liều · phòng poker · 관용구 · 카드 규칙).
- 🔴 EN-먼저 후보가 **21건**(딜러 3 · SEO 2 · 아스트라 15 · 기존 1)으로 불었다 — fr·ms tour에서 같은 자리가 미처리였다. 이번 로케일 배포와 별개로 EN tour 5편 재검수 회차를 `docs/en-first-queue.md`에 등재할지 판정(아스트라 D유형 4건은 조언 방향 자체가 걸려 있다).

## 미결
- C에서 확인: 머지된 다른 레인 vi 파일은 아직 7월판(«Mù»·«Theo, Tố» 제목)이라 교체하지 않았다 → 헤드가 🅰·🅱 머지 뒤 교체. B: 다른 레인 글 카드 제목은 **임시**(브리프 §1-D 목록 그대로: «Luật Texas Hold'em cho người mới» · «Trình tự một ván Texas Hold'em» · «Blind trong poker là gì? Small blind và big blind» · «Thứ hạng tay bài poker» · «Equity trong poker» · «Pot odds» · «Xác suất poker» · «Khi nào nên fold» · «Bài khởi đầu nên chơi theo vị trí» · «Vị trí trong poker» · «Thuật ngữ poker») → C에서 머지된 vi 파일 title로 교체(없으면 그대로 두고 헤드에 넘긴다).
- 신규 4편 `date`는 B 집필일(2026-10-09) → 헤드가 배포 회차에 배포일로(계획 §4-C ④).
- short-stack FAQ L174 운영사명(GGPoker «All-in or Fold») 삭제 = 레인 판단(§3-C 운영사명 삭제 원칙 확대 적용) — 헤드가 머지 때 다른 레인 처리와 맞춘다.
- audit:hard CLUSTERS에 vi 토너먼트 4편(tournament·icm·bubble·short-stack) 미등재 → 형제 대조 미시도(`scripts/`는 헤드 소유 · fr도 같은 상태였는지 헤드 확인). C ③ 딜러 렌즈가 형제 모순(ICM 3인 예시 3종 혼용 · chips≠money 단어 선택)을 손으로 본다.
