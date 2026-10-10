# vi-gto 브리프 — 🅶 GTO 예제 13편 (레인 A · 2026-10-10)

> **B의 입력 = 이 파일 + EN 마스터 `lib/posts-en/<slug>.ts`(읽기 전용 · 본문 골격 복사용)뿐이다.** 웹·MCP·다른 로케일 파일(fr·de·es 번역본 포함)은 B에서 열지 않는다(ms 규격 §3 🟢). 사실·수치·카드의 출처는 EN 축어뿐.
> 정본: `docs/vi-cluster-plan.md` §3-A(고정문·용어 — **판단 없이 따른다**) · §3-C(소유표) · §5(fr→vi 차이 표) → `docs/fr-cluster-plan.md` §5 → `docs/ms-translation-lanes.md` §5(B 규격).
> EN 기준 해시 **`b57cb658`** — 13편 모두 그 뒤 EN 변경 0(`git diff --stat b57cb658..HEAD -- lib/posts-en/<13편>` 실측 10-09 = 빈 출력). 🪶 fr 기준 `a54b5f3d` → `b57cb658` 사이에도 13편 EN 변경 0(실측) → **EN 해부(메타·구조·링크·§13 자리·경험담·머리 주석·원문 계약)는 fr 브리프(`docs/fr-lanes/gto-brief.md`) 축어를 그대로 옮겼다**(L## 동일). `masterUpdated` = 각 편 EN `updated`(11편 2026-10-02 · donk-bet·3bet-pot-bet-sizing 2026-09-26).
> 키워드·SERP 출처 = `docs/keyword-bank/vi-serp/L-G-gto.md`(0-2 · DataForSEO 2704/vi · 2026-10-08) + `vi-core-volumes.md` §2 🅶·§4 — 레인 A는 재조사하지 않았다(계획 §2-①). 볼륨은 그 문서 축어.
> 앱 축어 = **`docs/solver-app-verbatim-vi-2026-10-09.md`**(본체 10-09 라이브 추출) + 솔버 소스 `hand-categories.ts` `MADE_LABELS_VI`·`DRAW_LABELS_VI`(행 이름 · 이 레인 A가 읽음) — 필요한 라벨은 아래 §0-5에 옮겼다. B는 그 파일들을 열 필요가 없다.
> 🔴 **확정 카피(title·seoTitle·desc·tldr·tags·H2 세트·FAQ 문항)는 B·C가 바꾸지 않는다**(계획 §2-⑥) — 바꿔야 하면 진행 파일 «헤드 요청».

---

## 0. 13편 공통 — B가 매 편 지킬 것

### 0-0. 🔴 이 시리즈만의 예외 (GTO 예제 = 솔버 증거 자료 · `settled-decisions` §1-E · de 선례 10-02 · fr 승계)
- **지어낸 1인칭 경험담 금지.** 다른 레인(🅰~🅵)의 «EN 1인칭을 베트남 맥락으로 재저작» 규칙은 여기 적용하지 않는다. 이 13편은 우리 솔버 데이터의 재현 가능한 분석이다 — 생생함은 «명확한 베트남어 + 독자가 내릴 구체적 결정»에서 온다. EN에 있는 1인칭(레인지 화법 · FAQ의 «I»)은 그대로 1인칭(tôi)으로 옮긴다.
- **새 전략 명제 금지 · 일반 글로 재작성 금지 · 요약 금지.** 자연스러운 번역 ≠ 요약. 길이를 줄이려고 예시·단서를 자르지 않는다. 키워드 때문에 주장을 더하지 않는다.
- EN의 H2 수·순서, 실질 하위 절, 근거 문단, **모든 표와 행 순서**, 수치, 카드·무늬, 부등호, 부정·한정어를 보존한다. 디렉티브 종류·순서, `==하이라이트==` 수, FAQ 수, 링크 자리를 보존한다. H2 문구와 FAQ 질문은 확정 카피대로 현지화하고 대응 답·사실은 보존한다.
- 모든 퍼센트는 올바른 **자리·분모·액션·솔브**를 가진다. ①~⑦ caller(BB)의 리드 = **donk bet / lead**(«c-bet của BB» 금지). ⑧~⑩ 3-bettor(BB)의 첫 플랍 벳은 c-bet일 수 있다. ⑪~⑬ SB = 오프너라 첫 벳이 c-bet이 맞다. **IP 결과 화면 = 레인지/에퀴티 정보이지 IP 액션 전략이 아니다.**
- 출처 날짜(조건표 «Checked» 행·출처 문장)는 **계산 출처 날짜**다(2026-08-08/08-19/08-20 등 EN 축어). 발행일로 바꾸지 않는다. 날짜 표기 = EN 축어 ISO(`2026-08-19`) 그대로(표·문장 모두).
- 고지를 범위째 보존: 플랍 첫 결정만 · 후속 반응 없음 · 해석 vs 계산 결과 · 화면 반올림 · rake 미반영 · 가정이 바뀌면 전략도 바뀜 · ⑦의 별도 재솔브.
- EN의 근사 표현은 근사로: about → khoảng · almost → gần như · this configuration → trong cấu hình này. 표본을 보편 규칙으로, 결과를 EV·수익 약속으로 바꾸지 않는다.
- Equity · EV · EQR · fold equity를 구분한다. **EQR이 높다고 EV가 높은 것이 아니다**(⑨가 반례). 빈도 차이는 **điểm phần trăm**(«điểm»)이지 상대 %가 아니다.
- 🔴 EN 본문에 없는 값(BTN 62,9% · 재솔브 root Check 98,0% · ⑨ 벳합 99,1% · ⑩ 98,1% · 본문에 없는 콤보 총계)은 spec·주석에만 있다 — **본문 문장으로 추가하지 않는다.** «4,06»은 ⑦ EN 본문에 **있으므로** 보존.
- 🔴 **EN 원문 결함 — EN을 그대로 옮기지 말고 정정 뜻으로 쓴다**(검수장 MA-392 · `docs/en-first-queue.md` §2-AO · EN은 나중에 고친다 · C 보고에 «EN과 의도적으로 다름(§2-AO 선반영)»):
  - **AO-2** ⑨ `3bet-pot-bet-sizing` EN L229 «those underpairs put the money in surrounded by two overcards» → JJ는 **Q만** 오버카드다 — 같은 글 EN L275 «except JJ, which sits between them» 뜻으로(«các underpair này bỏ tiền vào khi phía trên có overcard — riêng JJ chỉ có Q ở trên, nằm giữa hai lá» 꼴).
  - **AO-3** ⑥ `paired-board-strategy` EN L219 note «lands within a tenth of a point» → 실제 차이 0,11~0,17pp라 **«lệch trong vòng vài phần mười điểm»** 꼴.
  - 참고(오역 주의): ⑬ `ace-paired-board-strategy` EN L199 «holds **more** of»는 **비교급**(BB 대비)이 맞다 — 최상급 «nhiều nhất»으로 쓰지 마라(fr AO-1이 그렇게 틀렸다).
- 🔴 **fr 레인이 찾은 EN 결함(EN-먼저 후보 · `docs/fr-lanes/gto-진행.md`) — vi도 정정 뜻으로 쓴다**(EN 축어를 옮기면 틀린 문장이 된다):
  - ⑨ EN L176 «**Effectively, no — it uses one.**» — 자기 H2 «Does the range really use only one size?»와 극성 모순 → **«Thực tế là có — chỉ dùng một size.»**
  - ② EN L147 «because there is none of it» — 바로 앞 «four hands»와 모순 → «gần như không có».
  - ⑬ EN L248 «offsuit broadways» 예시에 Q-9o·J-9o(9는 broadway 아님) → «các tay Q-x, J-x khác chất» 꼴로 옮긴다(«broadway» 단어 빼기).
  - ⑬ EN L250 «nothing … beats that card» → «không tay nào thắng được tay đó»(카드가 아니라 핸드) · L274 trips 정의 → 계획 §3-A ③ 정의 고정문(«trips = 1 lá trên tay + board có đôi»).
  - ⑥ «four ranges out of five» → «bốn phần năm của mỗi range».
  - ⑦ EN L220 «Nine combos each»(핸드당으로 오독) → «mỗi bên chín combo» · «that edge» 선행사를 명시.
  - ⑧ «underpairs … blocked by the ace and king» → blocker 개념과 혼동 — «có A và K nằm phía trên».
  - (EN 축어 유지 — 판정하지 않는다: ④ 표 행 «Third pair or lower»(EN 패리티) · ⑩⑪⑫⑬ «link an account…» 직후 «no account» · ⑨ «32 combos of A-K and A-J» · ⑪ «362.1» · `en-first-queue` §2-AE AE-11 «every set combo»·AE-12 «same eight outs»·AE-13 «two live cards»는 fr과 같이 EN 축어 유지.)

### 0-1. 고정문 (계획 §3-A ①)
| 자리 | 정본 |
|---|---|
| 직답 블록 라벨 | `> **Trả lời nhanh**` (EN «Quick answer» 자리 전부) |
| readnext | `:::readnext[Đọc tiếp]` (EN `:::readnext[Keep reading]`) |
| FAQ H2 | `## Câu hỏi thường gặp` (EN «## FAQ») · 문항 `**Q. …**` + 빈 줄 + `A. …` (스키마 조건). EN에 FAQ H2가 없는 편(⑩⑪⑫⑬)은 만들지 않는다 — Q.는 EN 자리 그대로 |
| 관련 글 H2 | `## Bài viết liên quan` (EN «Related…»가 있는 편만) |
| 마무리 H2 | `## Những điều cần nhớ` (EN «Key Takeaways» 류가 있는 편만) |
| readTime | `"N phút"` (EN 값의 N 그대로) |
| 화자 | 1인칭 **tôi** · 독자 **bạn** · 존칭·anh/chị 금지 — 단 §0-0(지어낸 경험담 금지) |

### 0-2. 문체·조판 (§3-A ②)
- **bạn**체 · 명령형 훅(«Hãy nhìn… / So sánh… / Mở…») · 딱딱한 직역 금지.
- 숫자: 천 단위 **마침표**(`1.326`) · 소수점 **쉼표**(`98,2%` · `5,5bb` · `2,09`) · **`%` 앞 공백 없음** · 비율 `2,7:1` · 범위는 양끝에 % (`73,4%–75,2%` · `37,6%–42,9%`) · 내부 단위 값도 쉼표(`0,016bb` · `0,29%`) — 🔴 **값은 EN 축어, 구분자만 바꾼다**.
  - **bb는 붙여 쓴 소문자** `5,5bb` · `97,5bb` · `22,5bb`(EN·앱 조건 줄 축어 · 형제 vi 38편 다수형 «Nbb» 61). «BB»(대문자)는 **자리 이름 big blind만**.
  - 앱 화면 값을 «화면에 이렇게 뜬다»로 인용할 때도 같은 모양(`98,2%` · `Bet 4,1bb (75% pot)` — 앱 vi 축어가 원래 % 붙임).
  - X-to-1 = «X:1» 그대로(공백 없음 · 🅲 prob 신규 용어) · 빈도 «1 trong N».
  - 퍼센트포인트 = **«điểm phần trăm»**(짧게 «điểm»).
- 인용 = 곧은 큰따옴표 `"…"` · 아포스트로피 곧은 `'` 만 · `Texas Hold'em`.
- 카드: 영어 랭크 문자 + 무늬 기호(`A♠ K♥ 10♠`) — «già/đầm/bồi» 금지. 하이라이트 `==A♣K♦==` 그대로. 풀어 쓸 때 «đôi Át», «lá K». 무늬 이름 = chuồn · rô · cơ · bích.
  - 🔴 **무늬 붙은 카드의 T는 `10`으로**(계획 §3-A ② · 🅲·🅳 vi가 이미 `Q♥10♥7♠`): `Q♠J♦T♠` → `Q♠J♦10♠` · `Q♥T♥7♠` → `Q♥10♥7♠` · `K♥T♦6♠` → `K♥10♦6♠` · `T♥`·`T♣` 등 개별 카드도 `10♥`·`10♣`.
  - 하이픈 보드 표기도 같은 원칙: `Q-J-T` → `Q-J-10` · `Q-T-7` → `Q-10-7` · `K-T-6` → `K-10-6`. 5장 런·턴 카드 나열(«K-Q-J-10» · «10, J, 6, 5»)도 10.
  - **핸드 클래스 표기 `ATs` · `KTo` · `TT` · `JT` · `T6s` · `T9s` · 하이픈 핸드 `K-T` · `T-T` · `J-T` · `A-T`는 그대로 T**(fr B 통일 ①). C의 전사 대조 스크립트는 `T♠`↔`10♠`·`Q-T-7`↔`Q-10-7`을 같은 토큰으로 정규화한다.
  - 앱 스팟 이름은 vi 앱이 이미 «10»이다(⑪ «Board K-high có lá 10»).
- `preflop`·`postflop`(붙여 씀 · 소문자) · 문중 flop · turn · river 소문자.
- 족보명 문중 소문자(«sảnh», «thùng») · 표·카드 라벨에서만 머리글자 대문자. 앱 행 이름 인용은 앱 축어(«Xám» · «Hai Đôi»).
- 🔴 금지: 백틱 · `**` 중첩 · tldr 안 마크다운 · content에 히어로 이미지 넣기(렌더러가 그린다) · slug·이미지 경로 변경 · 영어 직역투 · 시리즈 총편 수 하드코딩(«13 spot» 금지 — EN이 «this series»라고 쓴 자리는 «loạt bài này») · 경쟁 사이트 언급 · 합법성·실머니.

### 0-3. 용어 (§3-A ③④ 발췌 + 이 클러스터 · 근거 = 계획 §3-A · 앱 vi 축어 · 형제 vi 레인 «신규 용어» 표)
> 🔴 방향: **족보 = 베트남어(첫 등장 «vi (en)» 병기) · 액션·구조 = 영어 차용어(첫 등장 «en (vi 풀이)» 병기)**. 첫 등장 병기는 **편마다 1회**(13편은 따로 읽힌다).

| EN | vi 본문 | 비고 |
|---|---|---|
| solver / solve | **solver** · «giải spot» · «lời giải / kết quả tính» | «tính một tay bài» 직역 금지 |
| GTO | GTO | 🔴 헤드 조준 금지(§3-C ⑪) — 본문 사용은 자유 · 제목·H2에 쓰면 반드시 «GTO poker»가 아닌 문맥(이 시리즈 H2에는 쓰지 않는다) |
| range | **range** | «dải bài»·«khoảng bài» 금지(앱 Hướng dẫn의 «(dải bài)»는 인용 금지) |
| open-raiser / opener | **bên open** (앱 «BTN (bên open)») · 산문 «người open» 허용 | — |
| caller | **bên call** (앱 «BB (bên call)») · 산문 «người call» | — |
| 3-bettor | **bên 3-bet** (앱 «BB (bên 3-bet)») | — |
| BTN / BB / SB | 편마다 첫 등장 «button (BTN)» · «big blind (BB — mù lớn)» · «small blind (SB — mù nhỏ)» · 이후 약어 | 계획 §3-A ④ · 앱 그룹 라벨은 축어 |
| OOP / IP | 편마다 첫 등장 «out of position (OOP — không có vị trí)» / «in position (IP — có vị trí)» · 이후 OOP/IP | 🅳 position-play 축어 |
| check / bet / call / raise / fold | **check** · **bet**(동사 «bet / cược» 허용) · **call**(첫 등장 «call (theo)» · 동사 «theo» 허용) · **raise**(첫 등장 «raise (tố)» — 🔴 산문 «tố» 금지) · **fold**(첫 등장 «fold (bỏ bài)» · 동사 «bỏ bài» 허용) | §3-A ④ · 🅳 «편마다 1회» 보강 선례 |
| c-bet | **c-bet** · 편마다 첫 등장 «c-bet (cược tiếp tục)» | §3-A ④ |
| donk bet / lead | **donk bet** · 첫 등장 «donk bet (lead — bet trước vào người đã raise preflop)» · «cược donk»는 ④에서만 1회 병기 | §3-A ④ GTO 행 · L-G §4-E |
| check-raise | **check-raise** · 🔴 «hồi mã thương» 전면 금지(HARDEN · §3-C ⑫) | ⑦ 정의 H2가 주인 |
| check back | **check-back** · 첫 등장 «check-back (check lại sau khi đối thủ đã check)» | §3-A ④ B-9 |
| delayed c-bet | «delayed c-bet (c-bet trì hoãn)» | §3-A ④ · 🅳 |
| set / trips | **set** · 첫 등장 «set (cầm đôi trên tay + 1 lá trên board)» · **trips** · 첫 등장 «trips (1 lá trên tay + board có đôi)» · 족보 이름 = **sám cô (three of a kind)** · 🔴 «bộ ba» 단독 금지(⑥⑬) | §3-A ③ 정의 고정문 · 앱 행 «Xám»은 인용 시만 |
| two pair / straight / flush / full house / quads / straight flush | **hai đôi** · **sảnh** · **thùng** · **cù lũ** · **tứ quý** · **thùng phá sảnh** — 편마다 첫 등장 «sảnh (straight)» 꼴 | §3-A ③ · 🔴 sảnh(족보) ≠ vòng(스트리트) |
| top pair / overpair / underpair / overcards | **top pair** · **overpair** · 첫 등장 «overpair (đôi tẩy cao hơn mọi lá trên board)» · **underpair** · 첫 등장 «underpair (đôi tẩy thấp hơn lá cao nhất trên board)» · **overcard** «(lá cao hơn board)» | 🅳 C 정정(«đôi trên board» 금지 — 뜻이 반대) · 🅲 overcard |
| second pair / weak pair | **second pair** · **đôi yếu** (앱 축어 «Second pair» · «Đôi yếu») | 앱 축어 |
| ace-high / king-high | **A-high** · **K-high** (앱 축어 행 · 보드 형용 «flop A-high») | 앱 «Board A-high khô» |
| no made hand | **chưa thành bài** (앱 «Chưa thành bài») | 앱 축어 |
| draws | **draw** · flush draw (첫 등장 «flush draw (chờ thùng)») · **OESD «sảnh hở hai đầu (OESD)»** · **gutshot «gutshot (sảnh hở giữa)»** · backdoor flush draw · **draw kép (combo draw)** · runner-runner | §3-A ③④ · 계산기 축어 · 🅲 combo draw |
| board textures | **board khô** (dry) · **board ướt** (wet) · **board liền nhau** (connected · 앱 «liền nhau») · **board có đôi** (paired · 앱 «Board có đôi» · 구어 «chập mặt» 1회 허용) · **board monotone** · 첫 등장 «board monotone (đồng chất — cả 3 lá cùng chất)» · **hai chất** (two-tone) · **rainbow** «(3 lá khác chất)» · **board động** (dynamic) · **board tĩnh** (static) | 앱 축어 · 🅳 «board khô 29»·«board có đôi 41» · 🔴 계획 §3-A ④의 «mặt bài có đôi»가 아니라 **board có đôi**(형제 41회 · 앱 라벨) — 신규 용어 표에 기록 |
| pot / SPR / effective stack | pot · **SPR** · 첫 등장 «SPR — stack hiệu dụng chia cho pot» · **stack hiệu dụng** | §3-A ④ A-5(effective 필수) |
| single raised pot / 3-bet pot | **pot raise đơn (single raised pot)** · **pot 3-bet** (앱 «Pot 3-bet») | 🅳 «pot raise đơn» 11 |
| equity / EV / EQR | **equity** · 첫 등장 «equity (phần pot kỳ vọng của bạn, tính cả khi chia pot)» · **EV** «(giá trị kỳ vọng)» · **EQR** · 첫 등장 «equity realization (EQR — phần equity bạn thực sự thu về)» | §3-A ④ · 🅲 «equity realization» 풀이(🅳 «mức equity thực hiện được»와 갈림 → 헤드 대조) · «tỷ lệ thắng»은 win probability에만 |
| range advantage / nut advantage | **lợi thế range** · **lợi thế nut** | §3-A ④ GTO 행 |
| polarized / linear / merged | **range phân cực (polarized)** · **range tuyến tính (linear)** · **merged range** 영어 + 정의 | §3-A ④ B-7(linear ≠ merged) |
| fold equity / MDF | fold equity · **MDF** · 첫 등장 «tần suất phòng thủ tối thiểu (MDF)» | §3-A ④ |
| bet sizing / overbet / geometric | **sizing** · 산문 «cỡ bet» · **overbet** · **geometric sizing** · 첫 등장 «geometric sizing (size bet lũy tiến — giữ cùng tỷ lệ cược so với pot qua các vòng)» | §3-A ④ B-8 · 🅲 «cỡ bet» · 앱 단계 라벨 «Cỡ cược»는 인용 시만 |
| reverse implied odds | implied odds ngược (reverse implied odds) | §3-A ④ implied odds |
| blocker | **blocker** | — |
| combos | **combo** · 첫 등장 «combo (tổ hợp bài)» | §3-A ④ 추가 용어 · 앱 «combo» |
| rake | **rake** «(phí sòng)» | §3-A ④ |
| street / turn / river | vòng cược · flop · turn · river | §3-A ④ |
| blind vs blind | **blind đối đầu blind (blind vs blind)** · 앱 그룹 라벨 «Blind vs blind — SB vs BB (range rộng)» | 🔴 «blind vs blind» 단독 헤드 금지 |
| spot | **spot** · 첫 등장 «spot (tình huống ra quyết định)» | 🅴 C 네이티브 |
| exploitability | exploitability | 앱 «exploitability» |
| heads-up | heads-up | §3-A ④ |

### 0-4. 도구 링크 앵커 문구 (§3-A ⑤ — 고정)
- `/vi/solver` = **«GTO poker solver miễn phí»**(EN «free GTO solver» · «GTO solver» 자리 전부) — 문장 안에서 «[GTO poker solver miễn phí](/vi/solver)». 🔴 이 앵커는 **링크 텍스트로만** 쓴다(앵커가 도구를 주인으로 알리는 자리 · seoTitle·H1·tags·H2에는 금지).
- EN이 같은 문단에 `/en/solver`를 두 번 걸었으면(«GTO solver» + «GTO Trainer») vi도 두 번: 두 번째 앵커 = «Trainer GTO».
- `/vi/calculator` = «máy tính xác suất poker» · 기능별 «máy tính equity / outs / pot odds» · `/vi/hand-chart` = «bảng bài khởi đầu theo vị trí»(EN이 걸었을 때만).
- 🔴 역방향 금지: 글로 가는 링크·카드 제목에 위 도구 앵커(«máy tính…» · «bảng range» · «solver»)를 쓰지 않는다.

### 0-5. 앱 라벨 대응 (EN 본문의 앱 문구 → vi 앱 축어 · 2026-10-09 라이브 + 소스)
| EN 본문 | vi (굵게·대괄호는 EN과 같은 모양으로) |
|---|---|
| Study Spots | **Spot mẫu** |
| [⚡ View results] | **[⚡ Xem kết quả]** |
| "Solve this spot yourself" (결과 화면) | «**Tự giải spot này**» (목록 버튼은 «Tự giải») |
| GTO Trainer | **Trainer GTO** |
| EV loss (bb) | **EV mất** (bb) |
| Daily Challenge | **Thử thách hôm nay** |
| «signing in … syncs your Study Spots and Daily Challenge history» | 앱 축어 뜻: «Đăng nhập tài khoản HoldemMaster để lưu vào tài khoản và học tiếp trên thiết bị khác — đăng nhập là tùy chọn, mọi tính năng đều dùng được khi không đăng nhập» |
| Hands / Draws panel | bảng «**Tay bài / Draw**» |
| Summary · Bar Width | Tóm tắt · Độ rộng thanh |
| Player: OOP / IP | «Người chơi:» OOP / IP |
| All (요약 행) | Tất cả |
| 표 헤더 Hand · Strategy · Weight · EQ · EV (bb) · EQR | Tay bài · Chiến lược · Trọng số · EQ · EV (bb) · EQR |
| Custom Spot ①–⑤ | Spot tùy chỉnh (①–⑤) · ① Range OOP · ② Range IP · ③ Board · ④ Cỡ cược · ⑤ Chạy solver |
| 액션 칩 «Bet 4.1bb (75% pot)» | `Bet 4,1bb (75% pot)` · `Bet 1,8bb (33% pot)` · `Check` |
| «Flop strategy only» 머리 | «Chỉ có chiến lược flop.» |
| 그룹 SRP | «Single raised pot — BTN vs BB (cơ bản)» |
| 그룹 3-bet | «Pot 3-bet — BB 3-bet, BTN call (SPR thấp)» |
| 그룹 BvB | «Blind vs blind — SB vs BB (range rộng)» |
| 결과 화면 OOP/IP 선택 | «OOP (BB (bên call))» / «IP (BTN (bên open))» |

**스팟 이름(EN → vi 앱 축어 `titleVi`)** — 재현 CTA·본문 인용에서 굵게 축어로:
| # | EN 스팟 이름 | vi 앱 축어 |
|---|---|---|
| ① | Dry Ace-High Board | **Board A-high khô** |
| ② | Dry King-High Board | **Board K-high khô** |
| ③ | Connected Broadway, Two-Tone | **Board broadway liền nhau, hai chất** |
| ④ | Middle Connected, Two-Tone | **Board tầm trung liền nhau, hai chất** |
| ⑤ | Monotone Board | **Board monotone (cả 3 lá cùng chất)** |
| ⑥ | Paired Board | **Board có đôi** |
| ⑦ | Low Rainbow Board | **Board thấp rainbow (3 lá khác chất)** |
| ⑧ | Ace-High Board, 3-Bettor's Edge | **Board A-high, lợi thế của bên 3-bet** |
| ⑨ | Dynamic Two-Tone Board | **Board động, hai chất** |
| ⑩ | Low Dry Board | **Board thấp khô** |
| ⑪ | King-High with a Ten | **Board K-high có lá 10** |
| ⑫ | Connected Low Board, Two-Tone | **Board thấp liền nhau, hai chất** |
| ⑬ | Ace-Paired Board | **Board đôi A** |

**앱 행 이름(EN 본문이 «row»라 부르는 것 · `MADE_LABELS_VI`·`DRAW_LABELS_VI` 축어)**: Straight Flush → `Thùng Phá Sảnh` · Quads → `Tứ Quý` · Full House → `Cù Lũ` · Flush → `Thùng` · Straight → `Sảnh` · Trips/Set → `Xám` · Two Pair → `Hai Đôi` · Overpair → `Overpair` · Top Pair → `Top pair` · Second Pair → `Second pair` · Weak Pair → `Đôi yếu` · Underpair → `Underpair` · Ace High → `A-high` · King High → `K-high` · No Made Hand → `Chưa thành bài` / Combo Draw → `Combo draw` · Flush Draw → `Flush draw` · OESD → `OESD` · Gutshot → `Gutshot` · Backdoor FD → `Backdoor FD` · No Draw → `Không draw`.
- 🔴 행 이름 `Xám`은 set과 trips를 함께 담는다(앱 주석). 산문에서는 **set / trips를 구분**하고 족보 이름은 «sám cô»(앱 «Xám»은 인용할 때만 — 계획 §3-A ③ «xám = 인정 별칭»).

**재현 CTA 틀**: «Mở [GTO poker solver miễn phí](/vi/solver), vào **Spot mẫu → [스팟 이름] → [⚡ Xem kết quả]**.» — EN 링크 수에 맞춘다(자리 추가 금지).
🔴 **앱 목록의 스팟 해설문은 전략 출처가 아니다**(축어 문서 §3 🔴 · 예 9♥8♥7♣ «"luôn c-bet" là sai» · A♠A♥6♦ «Xám không hiếm») — 본문에 옮기지 않는다. 수치·결론은 EN 축어만.

### 0-6. 조건표·액션표 라벨 (13편 통일)
| EN | vi |
|---|---|
| 표 머리 첫 열 Setting / Item / Situation / Category / Draw / Metric | **Thiết lập** / **Mục** / **Tình huống** / **Nhóm** / **Draw** / **Chỉ số** (EN이 쓴 그 단어에 1:1) |
| 조건표 행 Spot · OOP (acts first) · IP · Preflop · Ranges · Flop · Pot · stack · Effective stack · SPR · Bet sizes · Rake · Checked | Spot · OOP (hành động trước) · IP · Preflop · Range · Flop · Pot · Stack · Stack hiệu dụng · SPR · Cỡ bet · Rake · Kiểm tra ngày — EN에 실제 있는 행만 · 합쳐진 행을 쪼개지 않는다 |
| 열 머리 Value · Who is out of position · OOP bet frequency · OOP equity | Giá trị · Ai không có vị trí · Tần suất bet của OOP · Equity của OOP |
| Preflop 행 값 «BTN opens 2.5bb · BB calls · everyone else folds» 꼴 | «BTN open 2,5bb · BB call · những người còn lại fold» — 13편 같은 꼴(같은 EN 문구 = 같은 vi 문구) |
| Rake 행 Not modeled / not included | **«Không tính rake»** — 13편 통일 |
| Checked 행 값 «2026-08-19, study spot output» | «2026-08-19, kết quả Spot mẫu» (날짜 ISO 축어) |
| 지표 행 Equity · EV (bb) · Equity realization | Equity · EV (bb) · Equity realization (EQR) |
| Big blind's first action / Small blind's first action | «Hành động đầu tiên của BB» / «… của SB» — root만. ⑦ 후속 노드 = «BTN sau khi BB check» / «BB trước cú bet 1,8bb» |
| Frequency · Combos · Hand | Tần suất · Combo · Tay bài |
| BB (OOP) · BTN (IP) · SB (OOP) · BB (IP) | 그대로 |
| stripe 라벨 Spot · Flop · Pot · Stack · Result | Spot · Flop · Pot · Stack · Kết quả — EN 필드가 있는 곳만 |
| dead small blind | «0,5bb của small blind đã fold» (계산 근거 자리에서) |

### 0-7. 링크 규칙
- EN 내부링크는 **1:1**로 `/vi/blog/<같은 slug>` · 도구 `/en/solver` → **`/vi/solver`**(10-09 신설 · HARDEN) · readnext·thumb 속성 형태 그대로. 13편 EN 링크 대상은 **전부 vi 51편 + 도구 안**이다(이 레인 A 실측 10-10: 대상 23종 전부 `lib/posts-vi/` 또는 13편 · `/en/solver` 31회) → **빼기·대체 0**.
- 추가 1(⑦): 정의 H2 직답 안 `holdem-betting-actions` 링크(계획 §3-C ⑫) — 진행 파일 «링크 편차»에 기록.
- 시리즈 내부 링크(이전·다음·형제 스팟)의 앵커 문구는 대상 글 vi `title` 또는 그 보드(«[8-5-2](/vi/blog/3bet-pot-low-board)»)로 — EN 앵커 모양을 따른다.
- 🔴 **이미지**: vi 이미지 변형(`gto-<key>-oop-vi.webp` · `gto-<key>-ranges-vi.webp`)은 **아직 없다**(실측 10-10 · `public/images`에 `gto-*-vi` 0장 · `-en` 26장). B는 **EN 경로(`-en.webp`)를 그대로** 쓴다 — `image` 필드·본문 ranges 이미지·thumb 전부. 헤드 요청에 «vi 캡처·차트 생성 후 `-en` → `-vi` 일괄 교체»를 올린다. 스팟 장면 이미지(`-scene-`)는 de 시범 전용 — vi에 넣지 않는다.
- 이미지 alt·title(캡션)은 베트남어로 재저작(보드·자리·화면을 구체적으로 · 키워드 나열 금지) · 경로 불변. 캡션의 수치·카드는 §0-2 규칙.

### 0-8. 구조 패리티
H2/H3·표 행·리스트·이미지·FAQ 수·디렉티브(`:::stripe` · `:::note[…]` · `:::compare` · `:::readnext`)·원시 HTML 줄·하이라이트 색(`==r:` · `==g:` 등)은 **EN과 같게**(많은 것 허용 · 적은 것 = 결손). 확정 카피의 «+ (thêm)» H2·FAQ는 현지 추가로 허용. `:::note[…]` 대괄호 안 문장도 번역한다(대괄호 형태 유지).

### 0-9. EN 원문 계약 — 보존 논거·오탐 방지 (승계: `docs/de-gto-source-contract.md` §3~§6 · fr 브리프 §0-9 · EN 현행이 이긴다)
> de 계약은 EN을 기준으로 쓴 «로케일 중립» 문서다. 그 뒤 EN 변경은 `4b353f92`(MB-151 · 10-02) 하나 — 문구 한정(«grades your action in big blinds lost» → «shows how many big blinds your action costs» · 조건표 Checked 날짜 세분 · ⑪ `3.32` → `3.318` · ⑫ «three times» → «three and a half times (42 combos to 12)» · ⑥ «defend far wider» → «do not fold just because you missed» · ⑬ «not that the board paired» → «less that the board paired than which card…» · 캡션 3곳 · 체크레이즈 단정 한정). **EN 현행이 이긴다** — 아래 표와 EN이 다르면 EN 축어(§0-0 정정 자리 제외).
> 편별 «보존 논거»는 각 편 «하지 말 것» 절에 옮겼다. 여기에는 13편 공통 규칙만.

- **숫자 가까움은 오류 근거가 아니다.** 한 글에 형제 스팟·반대 좌석·다른 지표가 함께 있다. 원문과 **주어·보드·노드·지표**를 대조한다.
- **98,4%가 정본**(⑨) — 98,5%로 되돌리지 않는다. Check 0,8%도 벳합에서 빼서 0,9로 바꾸지 않는다. 체크를 `100 − 벳합`으로 재계산하지 않는다(표시값 반올림 때문에 합이 99,9 또는 100,1일 수 있다).
- **⑧ 0,0%는 «화면값»이다**: 원시 잔여 41콤보·K♥K♦ 0,09% 문장을 «0,0%와 모순»이라며 지우지 않는다. «잔여가 있으니 0,1%»로 반올림을 바꾸지도 않는다.
- **«prices out»은 한 장 odds 한정**(⑨): «38/40 드로우가 가격 밖»과 «38 중 30이 두 장 기준 28,5% 초과»는 모순이 아니다. 둘 중 하나를 지우거나 «khiến chúng fold»로 합치지 않는다(큰 사이즈는 드로우를 «fold시키는» 게 아니라 «비용을 물린다» = «bắt draw trả giá»).
- **trips 표기 자체는 오류 아님**: 앱 행 이름 `Xám`을 인용하면서 언페어 보드에서는 실제 set이라고 밝히는 구조가 정본.
- **missed 표현 자체는 오류 아님**: ⑥ «홀카드가 보드를 추가로 못 맞혔다»는 정상. ⑩에서 전체 3-bet 레인지에 overpair까지 없다고 만드는 것이 오류다.
- **fold ≠ no-made-hand ≠ miss.** made-hand와 draw는 다른 분류축이며 합집합으로 더하지 않는다. ②·⑬은 «미스/노메이드 비율 = 폴드율»을 MDF로 명시적으로 반박한다 — 그 괄호를 생략하지 않는다.
- **MDF는 자동 콜 빈도·실측 폴드율이 아니다.** pure-bluff 가정·이후 에퀴티 실현·후속 노드 미계산을 같이 보존. «MDF 60,2% nên 58,3% fold» 같은 인과 금지. ⑨ MDF는 «상한»이 아니다.
- **EQR은 팟 점유율이 아니다.** 높은 EQR을 더 높은 EV로 자동 번역하지 않는다(⑨ 반례). ⑩ EQR 시소는 «에퀴티 고정일 때» 한정.
- **caller→raiser와 board를 함께 본다.** ④의 BB를 전체 레인지 우위로, ⑪의 높은 벳을 OOP 오프너라는 역할만으로 일반화하지 않는다(⑫가 같은 자리의 반례).
- **small bet의 선택과 옵션 제한은 다르다.** ⑦⑪⑫에 큰 사이즈가 없는 것은 솔버가 배제한 결과가 아니다(트리에 하나만 넣었다). ⑬의 33%는 제공된 둘 중 작은 것.
- **후속 스트리트의 예시 산술은 후속 스트리트의 솔브가 아니다.** «this solve does not answer / is not in this solve» 문장은 전부 유지(vi 단서 문장 아래).
- **블로커 «설명»은 ⑤·⑥에서 철회됐다** — 현재 EN 결론(«bảng chỉ cho thấy tỷ lệ pha trộn đã tính, không tách riêng nguyên nhân» / «đây không phải quy tắc blocker»)만 옮긴다.
- **내부링크·이미지 경로는 언어 누수가 아니다.** 영문 slug를 베트남어로 바꾸지 않는다.

**단서 문장 (의미 구분 보존 — 대상이 다르면 주어를 바꿔 쓴다)**
- 첫 액션만: «Ví dụ tính sẵn chỉ đi đến quyết định đầu tiên ở flop.»
- 이 솔브에 없음: «Lần tính này không cho ra con số đó.»
- 이 페이지에 없음: «Con số đó không có trên trang này.»
- 이 화면으로 확인 불가: «Màn hình này không cho phép kiểm chứng điều đó.»
- 해석: «Phần này là cách đọc range; đây không phải tần suất do solver tính ra.»
- 반올림: «Các giá trị trên màn hình đã được làm tròn.»
- 별도 솔브(⑦): «Phần này đến từ một lần giải riêng, không phải kết quả tính sẵn của ví dụ.» — 트리·이터레이션·exploitability·다른 root 결과까지 보존.

**조건 고정표 (대조용 · 마침표 소수 = 원천 숫자 · 독자 문자열은 쉼표)**
| # | 보드 | Check % | 작은 bet % | 큰 bet % | OOP EQ % | OOP EQR % | IP EQR % | pot / stack (bb) | 사이즈 | OOP / IP combos | OOP / IP EV |
|---|---|---:|---:|---:|---:|---:|---:|---|---|---|---|
| ① | A♥7♦2♣ | 98.2 | 1.0 | 0.9 | 45.1 | 84.0 | 113.1 | 5.5 / 97.5 | 1.8 (33%) · 4.1 (75%) | 464 / 463 | 2.09 / 3.41 |
| ② | K♠8♦3♣ | 99.8 | 0.1 | 0.1 | 46.3 | 80.7 | 116.7 | 5.5 / 97.5 | 1.8 · 4.1 | 474 / 480 | 2.06 / 3.44 |
| ③ | Q♠J♦T♠ | 99.9 | 0.1 | 0.0 | 46.7 | 77.9 | 119.4 | 5.5 / 97.5 | 1.8 · 4.1 | 453 / 458 | 2.00 / 3.50 |
| ④ | 9♥8♥7♣ | 76.2 | 16.8 | 6.9 | 48.5 | 93.2 | 106.4 | 5.5 / 97.5 | 1.8 · 4.1 | 462 / 472 | 2.48 / 3.02 |
| ⑤ | Q♠9♠2♠ | 88.8 | 8.0 | 3.2 | 47.7 | 90.4 | 108.8 | 5.5 / 97.5 | 1.8 · 4.1 | 468 / 474 | 2.37 / 3.13 |
| ⑥ | 6♣6♦3♥ | 97.0 | 1.0 | 2.0 | 47.2 | 83.7 | 114.5 | 5.5 / 97.5 | 1.8 · 4.1 | 486 / 502 | 2.17 / 3.33 |
| ⑦ | 6♠5♥2♦ | 96.8 | 3.2 | — | 48.3 | 84.3 | 114.7 | 5.5 / 97.5 | 1.8 (33%) 하나 | 487 / 503 | 2.24 / 3.26 |
| ⑧ | A♦K♠2♥ | 0.0 | 57.8 | 42.2 | 68.9 | 109.6 | 78.7 | 22.5 / 89 | 7.4 (33%) · 14.9 (66%) | 63 / 130 | 16.99 / 5.51 |
| ⑨ | Q♥T♥7♠ | 0.8 | 0.7 | 98.4 | 58.3 | 117.8 | 75.1 | 22.5 / 89 | 7.4 · 14.9 | 73 / 133 | 15.46 / 7.04 |
| ⑩ | 8♦5♣2♠ | 2.0 | 0.3 | 97.8 | 58.6 | 106.9 | 90.3 | 22.5 / 89 | 7.4 · 14.9 | 83 / 144 | 14.09 / 8.41 |
| ⑪ | K♥T♦6♠ | 32.6 | 67.4 | — | 55.3 | 103.1 | 96.1 | 6 / 97 | 2 (33%) 하나 | 538 / 525 | 3.42 / 2.58 |
| ⑫ | 7♦6♦5♣ | 90.4 | 9.6 | — | 49.6 | 85.3 | 114.4 | 6 / 97 | 2 (33%) 하나 | 572 / 534 | 2.54 / 3.46 |
| ⑬ | A♠A♥6♦ | 19.8 | 79.6 | 0.5 | 56.2 | 104.1 | 94.8 | 6 / 97 | 2 (33%) · 4.5 (75%) | 503 / 505 | 3.51 / 2.49 |
- 위 값은 fr 레인 A가 앱 fr 라이브(10-07)와 13/13 대조한 표다 · vi 앱 결과 화면(①)도 «Tất cả 464,0 · 45,1% · 2,09 · 84,0%»로 일치(축어 문서 §4). 콤보 총계 일부(① IP 463 · ③ 453/458 · ④ 462/472 · ⑤ OOP 468 · ⑥ IP 502 · ⑦ IP 503)는 EN 본문에 없다 — **vi 본문에 새로 써 넣지 않는다.**
- 그룹: ①–⑦ BTN 2,5bb 오픈 → BB 콜 (pot = 2,5 + 2,5 + 죽은 SB 0,5) · ⑧–⑩ BB가 11bb로 3-bet → BTN 콜 (pot = 11 + 11 + 0,5 · SPR ≈ 4,0 · 큰 사이즈는 **66%, 75% 아님**) · ⑪–⑬ SB 3bb 오픈 → BB 콜 (pot = 3 + 3 · **죽은 블라인드 없음** · SPR ≈ 16,2). 전체 = heads-up · 100bb 온라인 표준 레인지 근사 · **rake 미반영**.

### 0-10. B 등록·게이트 (ms 규격 §5 + 계획 §5)
- 틀 = `lib/posts-vi/holdem-blind-meaning.ts`(**필드 모양만** · 문면은 7월판 «Mù» 표기라 복사 금지) · `masterUpdated` 필드 · `slug`·`category`·`emoji`·`keepImagesInBody` = EN 축어 · `image` = EN 경로(§0-7) · `date`·`updated` = 집필일(배포 회차에 헤드가 배포일로 · 계획 §4-C ④ «신규 43편 date = 배포일»).
- 파일 머리 주석: 출처·키워드·알려진 한계만 짧게. EN의 긴 경위 주석 복사 금지 · 주석 안에도 백틱 금지.
- `lib/posts-vi/index.ts`의 **[vi-gto import 시작~끝] · [vi-gto 배열 시작~끝] 두 칸에만** 등록(칸 밖 수정 금지 — 일곱 레인 충돌).
- 자기 게이트(편마다): `npm run audit:hard -- --locale=vi --slug=<slug>` 🔴 0 → 끝에 `npm run check:intl-links` · `npm run check:structure`(vi 행에서 내 슬러그 결손 0) · `npm run build`(빌드 뒤 `git checkout -- public/sitemap.xml`).
- GTO 전용 게이트 `node scripts/check-gto-numbers.mjs --locale=vi --slugs=…` · `node scripts/check-gto-structure.mjs --locale=vi`는 **아직 vi를 모른다**(숫자 정규화 `normalizeNumericText`가 pt·id·de·tr·fr만 · 구조 `RULES`에 vi 없음 — 실측 10-10). 헤드 요청을 올린다 — 헤드가 vi를 넣기 전에는 B·C가 결과를 «미지원»으로 기록만 하고, §13 전사 대조는 C의 scratchpad 스크립트(ms 규격 §6-② · vi 구분자 정규화 = 천 단위 마침표 제거 → 소수 쉼표 → 마침표 · `T♠`↔`10♠`)로 한다.

---

## 13편 공통 H2·고정 카피 (Fable 확정 · 13편 같은 문구)



Ba H2 lặp lại ở mọi bài — dùng đúng một câu, không biến thể:
- «What conditions produced these numbers?» → `## Những con số này đến từ điều kiện nào?`
- «What changes at the table?» → `## Ra bàn thật thì chơi khác gì?`
- «Check it yourself» → `## Tự kiểm tra` (đoạn này dẫn vào app: **Spot mẫu** → chọn spot → **[⚡ Xem kết quả]**)

Mẫu H2 EQR (②③⑤⑥ dùng nguyên khung, chỉ thay số):
- «Why is EQR X against Y when equity is A against B?» → `## Vì sao EQR là X so với Y khi equity là A so với B?`
- Biến thể một phía (⑦⑧⑨⑪ — EN cũng khác khung): `Vì sao equity 48,3% mà EQR chỉ có 84,3%?` · `Vì sao EQR là 109,6% khi big blind không có vị trí?` · `Vì sao EQR là 117,8% khi equity là 58,3%?` · `Vì sao không có vị trí mà equity realization vẫn 103,1%?`

FAQ lặp lại:
- «Do these numbers hold at my stake / at any stake?» (①②③④⑥⑦⑧) → `Những con số này có đúng ở stake tôi đang chơi không?` — một câu duy nhất, kể cả ④ («lead frequencies») cũng dùng câu này.
- ⑨ «transfer to my game» → `Những con số này có mang sang ván tôi chơi được không?` · ⑩ «go straight into a live game» → `Có thể bê nguyên những con số này ra bàn live không?` (EN đặt câu khác hẳn, giữ nghĩa riêng).

Chuỗi cố định (quy tắc 8): nhãn trả lời trực tiếp `> **Trả lời nhanh**` · heading FAQ `## Câu hỏi thường gặp` (chỉ ở bài EN có `## FAQ`: ①–⑨; ⑩⑪⑫⑬ không có heading, chỉ dịch dòng Q.) · readnext `Đọc tiếp`.

Câu phân biệt người hành động (bài ①②, đặt trong đoạn số liệu đầu tiên, không tên/URL bên thứ ba): `Con số này là của người hành động trước (big blind), không phải tần suất c-bet của button.`

Tag thay cho EN «gto solver» ở cả 13 bài: `ví dụ solver` («gto» đơn lẻ và «poker solver» bị cấm; «solver» đơn lẻ không được làm tag).

Số liệu: dấu phẩy thập phân, không cách trước % (`98,2%` · `5,5bb` · `14,9bb`) · «so với» cho «against» · board có T viết 10 (`Q♠J♦10♠` · `K♥10♦6♠` · `Q♥10♥7♠` · `Q-J-10` · `K-10-6` · `Q-10-7`), hand class giữ T (`TT`, `JT`).

---

### 0-11. 확정 카피 읽는 법 (Fable 서브 1회 · 2026-10-10 · Opus 측정·조정)
- 각 편 «확정 카피»의 title·seoTitle·desc·tldr·tags = 필드에 **축어**(괄호 «(NN ký tự)»는 Opus가 잰 길이 — 필드에 넣지 마라). H2·FAQ 표는 EN 줄(L##)과 1:1 — 그 자리 헤딩·질문을 축어로 쓴다.
- «+ (thêm)» H2·FAQ = 현지 추가(허용 · ④⑦⑧만). 답은 괄호에 적힌 EN 절의 내용만으로 쓴다(새 수치 금지). 괄호 속 주석(«đặt TRƯỚC …», «nguồn …»)은 B에 대한 지시다 — 헤딩 텍스트에 넣지 마라.
- 🔢 Opus 재측정: title 23~54 · seoTitle 52~59 · desc 149~158(≤160 전원) · tldr 마크다운 0 · 금지 헤드(gto poker · range poker · poker solver · c bet là gì · cbet · 3bet poker · spr là gì 단독 · set poker · blind vs blind 단독 · hồi mã thương · tố · mù) 0 · 마침표 소수 0 · 보드 T 0.
- 🔧 Opus 조정 2건: ① «A-cao»·«K-cao»(Fable · wikipoker 표기) → **«A-high»·«K-high»**(앱 스팟 이름 «Board A-high khô»·«Board K-high khô» · §0-3 · 형제 vi 표기와 일치) — ①② seoTitle·H2·FAQ·tldr 일괄. ② ⑬ desc 끝 문장 다듬기(«…những trips đánh bại bạn vắng mặt…» 어순 → «còn những trips thắng được bạn lại vắng khỏi range người call» · 156자).
- Fable 판단 기록(채택): EN 태그 «gto solver» 13편 → **«ví dụ solver»**(단독 gto·solver 금지) · ⑩ 태그 «polarized range»(«range poker» 부분 문자열 회피) · ⑨⑩ 판돈 FAQ는 EN 질문이 달라 문구 변형 유지 · ⑪ seoTitle «SB vs BB theo solver»(«blind vs blind» 단독·«GTO» 회피) · ③ 태그 8개(EN 7 + 1) · ⑦ desc 질문형 끝(키워드 «khi nào nên check-raise trong poker»).
- ⑫ 헤드 확인(계획 §3-C ⑪): EN seoTitle에 «GTO»가 든 3편 → ⑪ «SB vs BB theo solver» · ⑫ «Board texture poker»(«GTO Solver» 삭제) · ⑬ «Trips poker theo solver». 넷째 ① «solver vẫn check»도 «solver»가 문장 주어 — «gto poker»·«poker solver» 연쇄 없음 → `/vi/solver` 헤드 조준 아님. tags에 «gto»·«solver» 단독 0.

---

## ① a-high-board-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Top Pair, Still Checking: A-7-2 C-Bet Frequencies",
seoTitle: "You Flop Top Pair, the Solver Checks — Dry Ace C-Bet",
desc: "You flop top pair on A-7-2 and want to lead. A solver checks 98.2% of the big blind's range — the exact c-bet frequencies, and why equity isn't the reason.",
tldr: "On A♥7♦2♣ after a button open and a big blind call, the big blind checks 98.2% of its range — top pair, two pair and sets included. Equity is nearly even at 45.1% against 54.9%; what splits the two seats is equity realization, 84.0% out of position against 113.1% in position.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "9 min",
emoji: "🅰️",
image: "/images/gto-srp-dry-ace-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a dry ace-high flop, the big blind's 13x13 grid almost entirely green for check",
tags: ["c bet percentage", "when to c bet", "dry board poker", "range advantage", "range advantage poker", "gto solver", "equity realization"],
# title 길이 49
# seoTitle 길이 52
# desc 길이 155
# tldr 길이 276
```

### 구조 (EN content L94~L236 · L## = EN 파일 줄)
#### 헤딩
- L109 ## What conditions produced these numbers?
- L125 ## What's a good c-bet percentage on a dry ace-high board?
- L139 ## Why does the big blind check top pair too?
- L151 ## What is a dry board, and why does this one favor the raiser?
- L174 ## What does range advantage mean if equity is nearly even?
- L188 ## When should the button c-bet a dry ace-high flop?
- L198 ## What changes at the table?
- L210 ## Check it yourself
- L216 ## FAQ

#### FAQ 5문항
- L218 **Q. Is A7 top pair on an A-7-2 board?**
- L222 **Q. Does 98.2% checking mean I should literally never bet?**
- L226 **Q. What is the difference between a wet board and a dry board?**
- L230 **Q. Can equity realization go above 100%?**
- L234 **Q. Do these numbers hold at any stake?**

#### 표 4개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L99 :::stripe
- L104 :::
- L155 ![Range composition infographic comparing the big blind and button hand categories on a dry ace-high board, green and gold bars side by side](/images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more …
- L196 :::note[The study spot pre-solves the flop's first action only, so the button's exact c-bet frequency is not one of the numbers on this page. To get it, open "Solve this spot yourself" and run the tree through.]:::
- L205 :::readnext[Keep reading]
- L208 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L96 /en/solver ✅ 도구
- L127 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L155 /images/gto-srp-dry-ace-ranges-en.webp "A♥7♦2♣ · category split — the button holds more top pair, the big blind more ai img
- L186 /en/blog/holdem-equity ✅
- L186 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L194 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L212 /en/solver ✅ 도구

### 키워드 (DataForSEO 2704·vi · 2026-10-08 · 출처 L-G §1·§2·§7-8 · vi-core-volumes §2 🅶)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| board texture poker · wet board poker · dry board poker | 각 10 | H2 «Board khô là gì…»·FAQ 문구로만 |
| range advantage (poker) | 10 | H2 «lợi thế range» 산문 |
| c bet là gì (30 · 🔴 L-D 소유) | — | 헤드는 `holdem-continuation-bet` 몫 — 이 글은 «trên flop A-high khô» 한정어만 |
| 함정 🚫 | — | «board khô/ướt» 단독(가전 오염 · L-G §1) · «gto poker»·«range poker»·«poker solver»(§3-C ⑪ → `/vi/solver`) · «cbet» 1,300(카지노·토큰) |

### PAA·자동완성 (축어)
- PAA(board texture poker · vi 로케일인데 영어로 뜬다): What does the term "wet board" mean in poker? · What is a monotone board in poker?(→ ⑤)
- 관련검색: What is a dry board in poker · Dynamic board poker · Types of flops in Poker
- 자동완성: board texture · wet board · dry board → wet vs dry · static · dynamic(베트남어 «board khô»·«flop a cao» = 결과 없음)

### 현지 SERP (L-G §4-C·§4-D ⑨ · 그룹 A = 스팟 고유 vi 질문 없음)
- vi 대응 글: wikipoker `/c-bet-tren-flop-a-cao/`(2025-05-16 · H1 «Giải mã chiến lược C-bet trên Flop A-cao…» · BTN As9h3c «c-bet 57% tổng range» · OOP «check back khoảng 95%» · 수치 = 스크린샷 이미지) · `/phong-thu-big-blind-tren-mat-bai-a-cao/` — **둘 다 1페이지 밖**. 영어 헤드 1페이지 = 영어 원본 + `.gov.*` 스팸 · vi 글 0.
- 우리가 더 줄 것: ① 98,2% 체크라는 텍스트 수치 + 조건표 ② BB에 AA·AK·AQ가 없다는 콤보 근거 ③ «Tự kiểm tra» 앱 동선.
- 🔴 행위자 구분(L-G §7-8): vi 독자가 본 «57%»류는 **BTN의 c-bet 빈도**, 우리 98,2%는 **BB의 체크 빈도** — 본문 첫 수치 문단에서 «con số này là của người hành động trước (BB), không phải tần suất c-bet của BTN» 꼴 1문장(타사 이름·URL 없이).
- 처방: H2 «What is a dry board…» → «Board khô là gì…» · FAQ «wet vs dry» → «Board ướt và board khô khác nhau thế nào?» · 새 FAQ 없음(§1-E).

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(그룹 A · 솔버 증거 자료).
- 쓰면 안 되는 헤드(seoTitle·H1·tags): «gto poker»·«range poker»·«poker solver»(⑪) · «c bet là gì»·«c bet poker» 단독(⑭ → holdem-continuation-bet) · «board khô»·«board ướt» 단독(오염).
- 위임 앵커: c-bet 일반론 → `/vi/blog/holdem-continuation-bet`(EN 링크 자리 그대로).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Có top pair vẫn check: tần suất c-bet trên flop A-7-2 (53 ký tự)
seoTitle: Dính top pair mà solver vẫn check — C-bet flop A-high khô (57 ký tự)
desc: Bạn dính top pair trên A-7-2 và muốn bet ngay. Solver lại check 98,2% range của big blind — tần suất c-bet cụ thể, và vì sao equity không phải lý do. (149 ký tự)
tldr: Trên A♥7♦2♣ sau khi button open và big blind call, big blind check 98,2% range của mình — kể cả top pair, hai đôi và set. Equity gần như ngang nhau, 45,1% so với 54,9%; thứ tách hai ghế ra là equity realization: 84,0% khi không có vị trí so với 113,1% khi có vị trí. (266 ký tự)
tags: ["tần suất c-bet", "khi nào nên c-bet", "dry board poker", "range advantage poker", "lợi thế range", "equity realization", "ví dụ solver"]
#### H2 (EN → VI)
- L109 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L125 `## What's a good c-bet percentage on a dry ace-high board?` → `## Trên flop A-high khô, c-bet bao nhiêu phần trăm là hợp lý?`
- L139 `## Why does the big blind check top pair too?` → `## Vì sao big blind check cả top pair?`
- L151 `## What is a dry board, and why does this one favor the raiser?` → `## Board khô là gì, và vì sao board này nghiêng về người raise?`
- L174 `## What does range advantage mean if equity is nearly even?` → `## Equity gần ngang nhau thì lợi thế range nghĩa là gì?`
- L188 `## When should the button c-bet a dry ace-high flop?` → `## Khi nào button nên c-bet trên flop A-high khô?`
- L198 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L210 `## Check it yourself` → `## Tự kiểm tra`
- L216 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. Is A7 top pair on an A-7-2 board? → `A7 trên board A-7-2 có phải top pair không?`
2. Does 98.2% checking mean I should literally never bet? → `Check 98,2% nghĩa là tôi không bao giờ được bet sao?`
3. What is the difference between a wet board and a dry board? → `Board ướt và board khô khác nhau thế nào?`
4. Can equity realization go above 100%? → `Equity realization có thể vượt 100% không?`
5. Do these numbers hold at any stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- dry board poker (10) → tag + H2 L151 «Board khô là gì…»
- wet board poker (10) → FAQ 3 «Board ướt và board khô…»
- range advantage poker (10) → tag + H2 L174 (văn xuôi «lợi thế range»)
- board texture poker (10) → văn xuôi; «c bet là gì» KHÔNG dùng làm head (thuộc holdem-continuation-bet) — bài này chỉ dùng hạn định «trên flop A-high khô»
#### Ghi chú
- Bet của big blind ở đây là donk bet / lead, không bao giờ viết «c-bet của big blind»; chèn câu phân biệt người hành động (khối chung) vào đoạn số liệu đầu.
- Link c-bet tổng quát → `/vi/blog/holdem-continuation-bet` đúng chỗ EN đặt link; «board khô»/«board ướt» chỉ trong H2/FAQ/văn xuôi, không làm tag.
- Cơ sở combo: big blind không có AA·AK·AQ (đã 3-bet preflop) — lấy từ thân EN, không thêm số.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L94 · L100 · L101 · L102 · L103 · L107 · L111 · L115 · L116 · L117 · L118 · L119 · L123 · L127 · L133 · L134 · L135 · L137 · L143 · L149 · L153 · L155 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L168 · L172 · L176 · L180 · L182 · L184 · L190 · L200 · L220 · L222 · L230 · L232 · L236

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L222: **Q. Does 98.2% checking mean I should literally never bet?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 **c벳 «머리말»은 가져오지 않는다** — `c-bet poker` 320 · `what is a c-bet in poker`는
- * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry Ace-High
- * 🔴 **벳하는 핸드를 「suited aces에 집중」이라고 쓸 뻔했다 (2026-08-19 검수에서 자기 검출).**
- *   인포그래픽 = HTML+Playwright 스크린샷(1200×675 · 26KB, §9-1 「글자 인포그래픽은 이미지 AI 금지」).
- * 🔴 2026-08-21 키워드 정정 — 되돌리지 마라 (EN ⑪ 착수 시 키워드 팩이 잡았다):
- *   ⚠ 이 태그는 ①의 것이다. A 하이 보드가 레인지 우위의 교과서 자리이고

### 하지 말 것 (EN 원문 계약 ① · EN 현행이 이긴다)
- 98,2%는 **BB 레인지 전체**의 체크율이지 A9·top pair 단독 빈도가 아니다. A7/A2는 hai đôi(18콤보, 3,9%). BB는 AA/AK/AQ가 없고 **AJ까지**(BTN은 AK·AQ 보유); set는 77/22 총 6콤보, BTN은 AA 포함 9.
- 리드에 대한 레이즈를 버틸 수 있는 BB 핸드는 **24콤보뿐**(set 6 + hai đôi 18)이고 **레이즈 노드는 풀지 않았다**는 괄호를 보존.
- BTN c-bet 70–100% 일반 가이드와 **이 예제의 정확한 BTN 결과는 없음**을 구분. 앱 ① 해설문은 폐기 명제 — 옮기지 않는다.
- «Checking is not check-folding» 불릿의 «A9 is a check-call» 유지.
- 행위자 구분 1문장(§키워드 처방): 이 98,2%는 **BB의 체크**이지 BTN의 c-bet 빈도가 아니다 — 타사 이름·수치 없이.

---

## ② k-high-board-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The King-High Flop Where the Caller Checks 99.8%",
seoTitle: "The Flop Where the Big Blind Checks 99.8% — K-8-3 C-Bet",
desc: "On K-8-3 the big blind checks 99.8% — a purer range check than ace-high. One missing hand explains it, and equity realization does the rest.",
tldr: "On K♠8♦3♣ after a button open and a big blind call, the big blind checks 99.8% of its range — an even purer range check than the 98.2% on an ace-high flop. Two things cause it: the big blind holds no overpair here, because AA three-bets preflop, and equity realization splits 80.7% against 116.7%.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "9 min",
emoji: "👑",
image: "/images/gto-srp-dry-king-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a dry king-high flop, the big blind's 13x13 grid almost entirely green for check",
tags: ["should you always c bet", "check back range", "delayed c bet", "king high flop", "gto solver", "range check", "equity realization"],
# title 길이 48
# seoTitle 길이 55
# desc 길이 140
# tldr 길이 297
```

### 구조 (EN content L68~L230 · L## = EN 파일 줄)
#### 헤딩
- L85 ## What conditions produced these numbers?
- L101 ## How often does the big blind check on K-8-3?
- L113 ## Why is this check even purer than on an ace-high flop?
- L129 ## How do the two ranges differ?
- L149 ## Why is almost a third of both ranges ace high?
- L157 ## Why is EQR 81 against 117 when equity is 46 against 54?
- L173 ## Are there really no draws here?
- L184 ## Should you always c-bet a king-high flop?
- L192 ## What changes at the table?
- L204 ## Check it yourself
- L210 ## FAQ

#### FAQ 5문항
- L212 **Q. Why doesn't the big blind ever bet on K-8-3?**
- L216 **Q. Which is worse for the big blind, an ace-high flop or a king-high flop?**
- L220 **Q. What is a check-back range?**
- L224 **Q. How much is a backdoor flush draw worth?**
- L228 **Q. Can I use these numbers at any stake?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L75 :::stripe
- L80 :::
- L133 ![Range composition infographic comparing the big blind and button hand categories on a dry king-high board, green and gold bars side by side](/images/gto-srp-dry-king-ranges-en.webp "K♠8♦3♣ · category split — the top of the range…
- L169 :::note[The EQR figures in this series are the ones shown on the solver screen. Recomputing them from the rounded equity and EV on the same screen can land a tenth of a point off — that is rounding, not a contradiction.]:::
- L190 :::note[⚠ This section is a reading of the range composition, not a solved number. The study spot pre-solves only the flop's first action — the big blind's — so the button's exact c-bet frequency is not on this screen. Open "Solve…
- L199 :::readnext[Keep reading]
- L202 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L70 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L72 /en/solver ✅ 도구
- L133 /images/gto-srp-dry-king-ranges-en.webp "K♠8♦3♣ · category split — the top of the range belongs to the button" img
- L171 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L171 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L194 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L206 /en/solver ✅ 도구

### 키워드 (출처 L-G §2·§3·§7-8)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| delay cbet poker | 10 | 본문 «delayed c-bet (c-bet trì hoãn)» 표기 |
| board texture · dry board poker | 각 10 | 산문 |
| 함정 🚫 | — | «c bet là gì» 30(L-D) · «cbet» 1,300 · «gto poker»·«range poker» |

### PAA·자동완성 (축어)
- 자동완성: «delay cbet poker» · cbet poker → delay cbet poker · cbet sizing · frequency(🔴 «cbet là gì» → «bet là gì trong bóng đá/slang»)

### 현지 SERP (L-G §4-C·§7-8 · 그룹 A)
- vi 대응 글: wikipoker `/c-bet-tren-flop-bai-cao/`(2025-06-04 · Kh6s2d·KsQs9d · 수치 이미지) · `/phong-thu-big-blind-tren-flop-bai-cao/` · `/meo-delay-c-bet/` — 순위 밖. 1페이지 = 영어 원본.
- 우리가 더 줄 것: ① 99,8% 체크 + 콤보 근거(overpair 0 대 1,3%) ② 노메이드 35,4% ≠ 폴드율(MDF) 설명 ③ 앱 동선.
- 처방: 행위자 구분 1문장(①과 같은 꼴) · 새 FAQ 없음.

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(그룹 A).
- 쓰면 안 되는 헤드: «gto poker»·«range poker»·«poker solver» · «c bet là gì»/«c bet poker» 단독 · «cbet» 단독.

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Flop K-high nơi người call check 99,8% (38 ký tự)
seoTitle: Flop khiến big blind check tới 99,8% — C-bet trên K-8-3 (55 ký tự)
desc: Trên K-8-3 big blind check 99,8% — một range check còn sạch hơn flop A-high. Một tay bài vắng mặt giải thích điều đó, phần còn lại là equity realization. (153 ký tự)
tldr: Trên K♠8♦3♣ sau khi button open và big blind call, big blind check 99,8% range — một range check còn thuần hơn cả mức 98,2% trên flop A-high. Hai nguyên nhân: big blind không có overpair nào ở đây, vì AA đã 3-bet từ preflop, và equity realization chia 80,7% so với 116,7%. (272 ký tự)
tags: ["có nên luôn c-bet", "check back range", "delay cbet poker", "flop K-high", "range check", "equity realization", "ví dụ solver"]
#### H2 (EN → VI)
- L85 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L101 `## How often does the big blind check on K-8-3?` → `## Big blind check bao nhiêu phần trăm trên K-8-3?`
- L113 `## Why is this check even purer than on an ace-high flop?` → `## Vì sao cú check này còn thuần hơn trên flop A-high?`
- L129 `## How do the two ranges differ?` → `## Hai range khác nhau ở đâu?`
- L149 `## Why is almost a third of both ranges ace high?` → `## Vì sao gần một phần ba cả hai range đều là ace-high?`
- L157 `## Why is EQR 81 against 117 when equity is 46 against 54?` → `## Vì sao EQR là 81 so với 117 khi equity là 46 so với 54?`
- L173 `## Are there really no draws here?` → `## Ở đây thật sự không có draw nào sao?`
- L184 `## Should you always c-bet a king-high flop?` → `## Có nên luôn c-bet trên flop K-high không?`
- L192 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L204 `## Check it yourself` → `## Tự kiểm tra`
- L210 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. Why doesn't the big blind ever bet on K-8-3? → `Vì sao big blind không bao giờ bet trước trên K-8-3?`
2. Which is worse for the big blind, an ace-high flop or a king-high flop? → `Flop A-high hay flop K-high tệ hơn cho big blind?`
3. What is a check-back range? → `Check back range là gì?`
4. How much is a backdoor flush draw worth? → `Backdoor flush draw đáng giá bao nhiêu?`
5. Can I use these numbers at any stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- delay cbet poker (10) → tag + văn xuôi «delayed c-bet (c-bet trì hoãn)» ở đoạn nói về button check back
- board texture poker · dry board poker (10) → văn xuôi
#### Ghi chú
- Chèn câu phân biệt người hành động (khối chung); bet của big blind là lead/donk bet, không «c-bet của big blind».
- Giữ cặp overpair 0 so với 1,3% và «35,4% chưa dính gì ≠ tỷ lệ fold (MDF)» đúng như thân EN; không thêm FAQ.
- Không dùng «cbet» hay «c bet là gì» làm head.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L68 · L70 · L76 · L77 · L78 · L79 · L83 · L87 · L91 · L92 · L93 · L94 · L95 · L99 · L103 · L107 · L108 · L109 · L115 · L125 · L127 · L133 · L137 · L138 · L139 · L140 · L141 · L142 · L143 · L144 · L145 · L147 · L151 · L163 · L165 · L167 · L171 · L179 · L180 · L182 · L186 · L194 · L197 · L214 · L218 · L226 · L230

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L228: **Q. Can I use these numbers at any stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 ①편과 겹치지 않게 잡았다 — ①이 `good c bet percentage`·`dry board`·`range advantage`를 가져갔다.
- * 🔴 c벳 «머리말»(`c-bet poker` 320)은 `holdem-continuation-bet` 소유다. 침범하지 않는다.
- * 🔴 수치 출처: 2026-08-19에 `solver.holdemmaster.com/?lang=en` 「Study Spots → Dry King-High Board
- *   ⚠ BB에 Overpair 행이 없다 — 0%라 앱이 표시하지 않는다(KO 표의 0.0%와 같은 뜻).

### 하지 말 것 (EN 원문 계약 ②)
- BB overpair 0 대 BTN 1,3%; set 6 대 9콤보. BB hai đôi 0,8%는 BTN 0,4%의 두 배지만 4콤보뿐이고 **overpair보다 높은 족보**다.
- A-high 27,0/30,0은 «Chưa thành bài» 35,4/28,3과 다른 행.
- BB의 최고 A-high는 **AJ**(AQ는 프리플랍 3-bet) — «같은 AQ»라고 쓰지 않는다 · «Identical»이 아니라 «Similar cards» → «những lá tương tự».
- 노메이드 35,4%는 «즉시 폴드»가 아니다 — 1/3팟에 균형 방어는 약 75%(MDF)를 남기므로 일부는 계속하고, BB 반응 노드는 이 솔브에 없다. 72,2% no-draw는 전체 레인지 분모.
- EQR 반올림 note 보존 · BTN 전략은 해석이며 정확한 c-bet 노드 없음.
- EN L147 «because there is none of it» → §0-0 정정(«gần như không có»).

---

## ③ broadway-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two-Thirds of the Range Has a Draw — and It Still Checks",
seoTitle: "68% Have a Draw, 99.9% Check — Q-J-T Nut Advantage",
desc: "On Q-J-T two-tone, 68% of the big blind's range holds a draw and it still checks 99.9%. Nut advantage — not range advantage — is what decides this flop.",
tldr: "On Q♠J♦T♠ after a button open and a big blind call, the big blind checks 99.9% — even though 68.4% of its range holds a draw. The cause is nut advantage: straights 10.5% against 7.1%, sets 2.0% against 0.7%, overpairs 2.6% against 0%. Equity realization splits 77.9% against 119.4%, the widest gap of the three dry-to-wet flops so far.",
category: "strategy",
date: "2026-08-19",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🎴",
image: "/images/gto-srp-broadway-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a connected broadway two-tone flop, the big blind's grid green for check with the draw panel on the right",
tags: ["nut advantage", "range advantage vs nut advantage", "dynamic board poker", "two tone board", "gto solver", "broadway flop", "equity realization"],
# title 길이 56
# seoTitle 길이 50
# desc 길이 152
# tldr 길이 335
```

### 구조 (EN content L72~L244 · L## = EN 파일 줄)
#### 헤딩
- L89 ## What conditions produced these numbers?
- L103 ## Why check 99.9% when the board is this wet?
- L115 ## What is nut advantage on this flop?
- L134 ## Range advantage vs nut advantage — what's the difference?
- L146 ## How much of each range is drawing?
- L165 ## Why is top pair dangerous here?
- L178 ## Why is EQR 78 against 119 when equity is 47 against 53?
- L200 ## How should the button bet a dynamic board like this?
- L208 ## What changes at the table?
- L220 ## Check it yourself
- L228 ## FAQ

#### FAQ 4문항
- L230 **Q. Which hands make a straight on Q-J-T?**
- L234 **Q. Isn't a wet board the place to semi-bluff lead?**
- L238 **Q. What is the difference between range advantage and nut advantage?**
- L242 **Q. Can I use these numbers at any stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L79 :::stripe
- L84 :::
- L150 ![Range composition infographic comparing the big blind and button hand categories on a connected broadway two-tone board](/images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · category split — the top four rows are where the flop is …
- L206 :::note[⚠ Everything above is solver output; this section is a reading of it. The study spot pre-solves only the big blind's first action, so the button's sizing split is not on this screen. Open "Solve this spot yourself" and run…
- L215 :::readnext[Keep reading]
- L218 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L74 /en/blog/a-high-board-cbet ✅
- L74 /en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp" ✅
- L76 /en/solver ✅ 도구
- L150 /images/gto-srp-broadway-ranges-en.webp "Q♠J♦T♠ · category split — the top four rows are where the flop is decided" img
- L163 /en/blog/holdem-drawing-odds ✅
- L188 /en/blog/k-high-board-cbet ✅
- L198 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L198 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L204 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L222 /en/solver ✅ 도구
- L236 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅

### 키워드 (출처 L-G §2·§4-D ⑤·§7-7)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| nut advantage poker · range advantage poker | 각 10 | H2 «Lợi thế range và lợi thế nut khác nhau thế nào?» |
| board texture poker | 10 | 산문 |
| 함정 🚫 | — | «lợi thế range/nut» = 자동완성·볼륨 0(산문 표기 전용) · «gto poker»·«range poker» |

### PAA·자동완성 (축어)
- PAA(nut advantage poker): What is the difference between nut advantage and range advantage in poker? · What does "nut low" mean in poker? · What does "nut straight" mean in poker?
- 자동완성: range advantage → vs nut advantage

### 현지 SERP (L-G §4-D ⑤·§7-7)
- `nut advantage poker` 5위 = wikipoker `/loi-the-nut-trong-poker/`(2025-07-08 · H2 «Phân biệt Lợi thế nut vs. Lợi thế range» · 정의 «Range Advantage (Lợi thế range): Range của ai có equity trung bình cao hơn trên board. Nut Advantage (Lợi thế nut): Ai có nhiều combo thuộc nhóm bài mạnh nhất hơn.» · 예시 8-7-6 · **수치 0**). 나머지 = 영어 원본.
- 우리가 더 줄 것: ① Q-J-10 «68,7% có draw · 99,9% check»라는 유일한 수치 ② 사ảnh 콤보 48 대 32 ③ 앱 동선.
- 처방: H2 «Range advantage vs nut advantage — what's the difference?» → vi 질문형(PAA 축어 뜻).

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(롱테일 «nut advantage poker» 10을 H2로 흡수만).
- 쓰면 안 되는 헤드: «gto poker»·«range poker»·«poker solver».

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Hai phần ba range có draw — mà vẫn check (40 ký tự)
seoTitle: 68% có draw mà vẫn check 99,9% — Lợi thế nut trên Q-J-10 (56 ký tự)
desc: Trên Q-J-10 hai chất, 68% range của big blind có draw mà vẫn check 99,9%. Thứ quyết định flop này là lợi thế nut, không phải lợi thế range — và vì sao. (151 ký tự)
tldr: Trên Q♠J♦10♠ sau khi button open và big blind call, big blind check 99,9% — dù 68,4% range của mình có draw. Nguyên nhân là lợi thế nut: sảnh 10,5% so với 7,1%, set 2,0% so với 0,7%, overpair 2,6% so với 0%. Equity realization chia 77,9% so với 119,4%, khoảng cách rộng nhất trong ba flop từ khô đến ướt tính tới giờ. (317 ký tự)
tags: ["nut advantage poker", "lợi thế nut", "range advantage vs nut advantage", "dynamic board poker", "board hai chất", "flop broadway", "equity realization", "ví dụ solver"]
#### H2 (EN → VI)
- L89 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L103 `## Why check 99.9% when the board is this wet?` → `## Board ướt thế này, vì sao vẫn check 99,9%?`
- L115 `## What is nut advantage on this flop?` → `## Lợi thế nut trên flop này là gì?`
- L134 `## Range advantage vs nut advantage — what's the difference?` → `## Lợi thế range và lợi thế nut khác nhau thế nào?`
- L146 `## How much of each range is drawing?` → `## Mỗi range có bao nhiêu phần trăm đang draw?`
- L165 `## Why is top pair dangerous here?` → `## Vì sao top pair ở đây lại nguy hiểm?`
- L178 `## Why is EQR 78 against 119 when equity is 47 against 53?` → `## Vì sao EQR là 78 so với 119 khi equity là 47 so với 53?`
- L200 `## How should the button bet a dynamic board like this?` → `## Button nên bet thế nào trên một board dynamic như thế này?`
- L208 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L220 `## Check it yourself` → `## Tự kiểm tra`
- L228 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. Which hands make a straight on Q-J-T? → `Những tay bài nào làm sảnh trên Q-J-10?`
2. Isn't a wet board the place to semi-bluff lead? → `Board ướt chẳng phải là chỗ để lead semi-bluff sao?`
3. What is the difference between range advantage and nut advantage? → `Range advantage và nut advantage khác nhau ở điểm nào?`
4. Can I use these numbers at any stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- nut advantage poker (10) → tag + H2 L115/L134
- range advantage poker (10) → H2 L134 (dạng Việt) + FAQ 3 (dạng loanword, bắt đúng chuỗi PAA «difference between nut advantage and range advantage»)
- board texture poker (10) → văn xuôi
#### Ghi chú
- Sảnh trên Q-J-10: liệt kê combo đúng như thân EN (48 so với 32) sau khi tự kiểm 7 lá; không tự tính lại.
- Bet của big blind = lead, không «c-bet»; «lợi thế range/nut» chỉ là cách viết trong văn xuôi (volume 0), head vẫn là «nut advantage poker».
- Tag có 8 (EN 7 + 1) để giữ cả dạng loanword lẫn dạng Việt của «nut advantage».

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L72 · L74 · L80 · L81 · L82 · L83 · L87 · L91 · L95 · L96 · L97 · L98 · L99 · L103 · L109 · L110 · L111 · L113 · L121 · L122 · L123 · L124 · L130 · L141 · L148 · L150 · L154 · L155 · L156 · L157 · L158 · L159 · L161 · L167 · L169 · L173 · L174 · L176 · L184 · L186 · L188 · L194 · L195 · L196 · L198 · L202 · L204 · L211 · L212 · L216 · L224 · L232 · L236 · L240 · L244

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L242: **Q. Can I use these numbers at any stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 ①편이 `range advantage`를 **기초 개념**으로 가져갔다. 이 편은 **«둘의 차이»**를 잡는다 —
- * 🔴 수치 출처: 2026-08-19 `solver.holdemmaster.com/?lang=en` 「Study Spots → Connected Broadway,

### 하지 말 것 (EN 원문 계약 ③)
- Q♠J♦10♠는 **hai chất**. sảnh은 AK/K9/98, BTN 48 대 BB 32콤보(7,1/10,5%). BB에 AK가 없다. OESD 28,7/27,7과 완성 sảnh 분포를 섞지 않는다.
- 68,7%는 «완성 핸드 위에 더하는» 값이 아니라 **겹치는 다른 축**.
- 큰 사이즈 근거는 «한쪽에 대부분»(BB sảnh 7,1% · set 0,7%) — «전부 한쪽»으로 되돌리지 않는다.
- FAQ의 ④ 대비는 «23,7% donk bet so với gần như không có».
- BTN sizing/check-raise 빈도는 이 예제에서 계산되지 않았다.
- 앱 ③ 해설문의 총편 수 하드코딩을 옮기지 않는다.

---

## ④ donk-bet-strategy — EN updated 2026-09-26 · masterUpdated = "2026-09-26"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Flop Where Donk Betting Is Right — 9-8-7",
seoTitle: "The Board Where a Donk Bet Is Correct — 9-8-7 Poker Lead",
desc: "In poker a donk bet reads as a beginner mistake. On 9-8-7 a solver leads 23.7% — here is the board condition that makes leading correct, and the sizing.",
tldr: "On 9♥8♥7♣ after a button open and a big blind call, the big blind checks 76.2% and leads 23.7% — the first spot in this series where the lead is a real strategy rather than a rounding artifact. Range advantage has not flipped: equity is still 48.5% against 51.5%. What changed is the gap and where each side's strong hands sit.",
category: "strategy",
date: "2026-08-19",
updated: "2026-09-26",
keepImagesInBody: true,
readTime: "9 min",
emoji: "🎯",
image: "/images/gto-srp-middle-connected-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a middle connected two-tone flop, the big blind's grid mixing green checks with orange and pink bets",
tags: ["donk bet poker", "what is a donk bet", "when not to c bet", "lead bet", "gto solver", "middle connected board", "range advantage"],
# title 길이 44
# seoTitle 길이 56
# desc 길이 152
# tldr 길이 327
```

### 구조 (EN content L76~L290 · L## = EN 파일 줄)
#### 헤딩
- L97 ## What conditions produced these numbers?
- L111 ## How often does the big blind donk bet on 9-8-7?
- L132 ## What changed compared with the first three flops?
- L155 ## So does this flop favor the big blind?
- L210 ## Why are the button's overpairs vulnerable?
- L223 ## Why is the small size two-thirds of the lead?
- L231 ## When should you not c-bet? The 9-8-7 exception
- L241 ## What changes at the table?
- L254 ## Check it yourself
- L262 ## FAQ

#### FAQ 7문항
- L264 **Q. What is a donk bet in poker?**
- L268 **Q. Why do people say donk betting is bad?**
- L272 **Q. Does the big blind have the advantage on 9-8-7?**
- L276 **Q. When should you check instead of leading in poker?**
- L280 **Q. What happens if I lead and get raised?**
- L284 **Q. What size should I lead with?**
- L288 **Q. Do these lead frequencies hold at my stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L87 :::stripe
- L92 :::
- L159 ![Range composition infographic comparing the big blind and button hand categories on a middle connected two-tone board](/images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · category split — straights favor the big blind, ove…
- L239 :::note[The study spot pre-solves only the flop's first action — the big blind's. How far the button's c-bet frequency actually drops after a check is not on this screen. Open "Solve this spot yourself" and run the tree to see it.…
- L249 :::readnext[Keep reading]
- L252 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L78 /en/blog/a-high-board-cbet ✅
- L78 /en/blog/k-high-board-cbet ✅
- L78 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L84 /en/solver ✅ 도구
- L159 /images/gto-srp-middle-connected-ranges-en.webp "9♥8♥7♣ · category split — straights favor the big blind, overpairs and ace-high img
- L219 /en/blog/holdem-drawing-odds ✅
- L233 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L243 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L256 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§2·§3·§7-1 · vi-core-volumes §2 🅶)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| donk bet · donk bet là gì · donk bet poker | 각 10 | 🔴 **이 글이 주인**(§1-E 예외 «그 단어의 주인») — seoTitle 앞쪽 «donk bet» · 첫 H2 앞 정의 직답 «Donk bet là gì?» · FAQ |
| donk bet poker là gì · donk bet la gi | `-`(자동완성) | 정의 H2 문구 |
| cược donk | `-`(자동완성 0) | 산문 1회 병기(natural8·reddit 번역 표기) |
| 함정 🚫 | — | «donk bet turn/river»(자동완성有·볼륨 0) 새 H2 금지 · «gto poker» |

### PAA·자동완성 (축어)
- 자동완성: donk bet → **donk bet là gì** · donk bet poker · donk betting · turn · example / donk bet là gì → **donk bet poker là gì** · **donk bet la gi** / donk poker → term · slang · poker donk lead
- 관련검색(donk bet): Donk bet example · **Why is a donk bet bad** · Donk lead poker
- PAA: 없음

### 현지 SERP (L-G §1·§4-D ①②·§7-1)
- `donk bet` 1위 = wikipoker `/donk-bet-la-gi/`(2025-04-30 · H1 «Donk bet là gì? 3 Mẹo chuyên sâu…» · H2 «Donk bet là gì?» · Lucid BTN vs BB **7♣6♦4♣** «BB nên donk bet 41%… sizing 1.65bb (33% pot)» · 🔴 §13 오류 2건 — 존재 불가 콤보 «7♣7♣» · 스트레이트 아닌 «6♣3♣») · 6위 natural8/vi «Cược Donk…»(H2 «Donk Bet là gì?» · 수치 0 · 어원 «"donkey" (kẻ chơi kém)»). `donk bet là gì`·`donk bet poker` 1위 = reddit `?tl=vi` 자동번역.
- 우리가 더 줄 것: ① 9-8-7 리드 23,7%·작은 사이즈 2/3을 **텍스트 표**로 ② 스트레이트 콤보를 7장 검산해 적는다(9-8-7에서 스트레이트 = J-10 · 10-6 · 6-5) ③ 앱 동선.
- 🔴 경쟁 글 §13 오류를 본문에서 지적하지 않는다(L-G §7 머리 · 타사 비방 금지).
- 처방: 정의 직답 H2 «Donk bet là gì?»를 첫 H2 앞에 추가(fr 선례 = FAQ 1문항 승격 · EN FAQ «What is a donk bet in poker?»를 H2로 올리고 FAQ에서 뺀다) · FAQ «Why do people say donk betting is bad?» → «Vì sao donk bet bị coi là cách chơi tệ?».

### 소유표 (계획 §3-C)
- 주인인 검색어: **donk bet · donk bet là gì · donk bet poker (là gì)**.
- 쓰면 안 되는 헤드: «gto poker»·«range poker»·«poker solver» · «c-bet»을 BB 리드에 붙이기(«c-bet của BB» 금지 — 리드는 donk bet).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Flop mà donk bet là nước đúng — 9-8-7 (37 ký tự)
seoTitle: Donk bet là gì và khi nào lead mới đúng — Board 9-8-7 (53 ký tự)
desc: Donk bet thường bị xem là lỗi của người mới. Nhưng trên 9-8-7 solver lead 23,7% — điều kiện board nào khiến lead thành nước đúng, và sizing bao nhiêu. (150 ký tự)
tldr: Trên 9♥8♥7♣ sau khi button open và big blind call, big blind check 76,2% và lead 23,7% — spot đầu tiên trong series mà lead là một chiến lược thật chứ không phải sai số làm tròn. Lợi thế range chưa đổi chiều: equity vẫn là 48,5% so với 51,5%. Thứ thay đổi là khoảng cách, và vị trí những tay bài mạnh của mỗi bên. (313 ký tự)
tags: ["donk bet", "donk bet là gì", "donk bet poker", "khi nào không nên c-bet", "lead bet", "board liền nhau tầm trung", "ví dụ solver"]
#### H2 (EN → VI)
- + (thêm) `## Donk bet là gì?` — đặt TRƯỚC L97 · nguồn: EN L264 FAQ «What is a donk bet in poker?» (nâng lên H2, rút khỏi FAQ · 1 đoạn `> **Trả lời nhanh**`, không thêm số)
- L97 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L111 `## How often does the big blind donk bet on 9-8-7?` → `## Big blind donk bet bao nhiêu phần trăm trên 9-8-7?`
- L132 `## What changed compared with the first three flops?` → `## So với ba flop đầu, điều gì đã thay đổi?`
- L155 `## So does this flop favor the big blind?` → `## Vậy flop này có nghiêng về big blind không?`
- L210 `## Why are the button's overpairs vulnerable?` → `## Vì sao overpair của button ở đây lại dễ bị vượt mặt?`
- L223 `## Why is the small size two-thirds of the lead?` → `## Vì sao size nhỏ chiếm hai phần ba số lần lead?`
- L231 `## When should you not c-bet? The 9-8-7 exception` → `## Khi nào không nên c-bet? Ngoại lệ 9-8-7`
- L241 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L254 `## Check it yourself` → `## Tự kiểm tra`
- L262 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI) — 6 câu (EN L264 đã lên H2)
1. Why do people say donk betting is bad? → `Vì sao donk bet bị coi là cách chơi tệ?`
2. Does the big blind have the advantage on 9-8-7? → `Trên 9-8-7, big blind có lợi thế không?`
3. When should you check instead of leading in poker? → `Khi nào nên check thay vì lead?`
4. What happens if I lead and get raised? → `Lead rồi bị raise thì sao?`
5. What size should I lead with? → `Nên lead với size bao nhiêu?`
6. Do these lead frequencies hold at my stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- donk bet · donk bet là gì · donk bet poker (10 mỗi từ · bài này là chủ) → seoTitle (đầu câu), H2 thêm «Donk bet là gì?», 3 tag đầu
- donk bet poker là gì · donk bet la gi (autocomplete) → câu H2 định nghĩa + đoạn trả lời nhanh
- cược donk (autocomplete 0) → văn xuôi 1 lần dạng «donk bet (cược donk)»
#### Ghi chú
- Không bao giờ viết «c-bet của big blind» — cú bet đầu của big blind là donk bet / lead; H2 L231 nói về c-bet của button.
- Sảnh trên 9-8-7 chỉ có J-10 · 10-6 · 6-5 (đã kiểm 7 lá); viết bảng lead 23,7% + size nhỏ 2/3 bằng text. Không nhắc lỗi của bài đối thủ, không mở H2 «donk bet turn/river».
- Định nghĩa đi kèm gốc từ «donkey» chỉ nếu thân EN có; không thêm.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L78 · L80 · L88 · L89 · L90 · L91 · L95 · L99 · L103 · L104 · L105 · L106 · L107 · L113 · L117 · L118 · L119 · L125 · L126 · L127 · L128 · L130 · L134 · L140 · L141 · L142 · L143 · L145 · L151 · L152 · L153 · L157 · L159 · L163 · L164 · L165 · L166 · L167 · L168 · L169 · L170 · L171 · L172 · L173 · L177 · L183 · L184 · L185 · L186 · L187 · L188 · L190 · L196 · L198 · L200 · L206 · L208 · L219 · L225 · L235 · L237 · L243 · L244 · L251 · L266 · L270 · L274 · L278 · L290

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L227: A small bet says "my entire range likes this flop." If only the strong hands bet, the range splits into "bet = strong, check = weak" and you…
- L280: **Q. What happens if I lead and get raised?**…
- L284: **Q. What size should I lead with?**…
- L288: **Q. Do these lead frequencies hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   ⚠ 초판 주석이 `should i always c-bet`을 §3-④로 적었으나 **그건 §3-②의 자리다**(SEO 렌즈가 잡았다).
- * 🔴 **「donk bet」 단독은 오염돼 있다** — 자동완성에 `donk beyonce`·`donk betboom`(브랜드)이 섞인다.
- * 🔴 ②편이 `should you always c bet`을 가져갔다 → ④는 **「when NOT to c-bet」·「when to check」** 쪽이다.
- * 🔴 수치 출처: 2026-08-19 `?lang=en` 「Study Spots → Middle Connected, Two-Tone」 OOP·IP 실측.
- *   ⚠ **BTN의 OESD가 23.7%인데 BB의 리드 빈도도 23.7%다.** 우연이고 다른 값이다 — 본문에서 섞지 마라.
- *     🔴 **차이가 정확히 T6s 4콤보다** — 빅블라인드라 싸게 방어한 한 칸이 너트 지분을 뒤집는다
- * ⚠ KO 파일 주석의 경고를 그대로 잇는다: **「레인지 우위가 BB로 넘어갔다」고 쓰지 마라.**

### 하지 말 것 (EN 원문 계약 ④)
- BB sảnh 24콤보 대 BTN 20; 차이는 **T6s 4콤보**. 최상위 JT 16콤보는 양쪽 동일(본문 «nut J-T is 16 for each»)하므로 전체 sảnh 우위를 JT 독점으로 바꾸지 않는다. «nuts» → «những tay mạnh nhất».
- hai đôi 2,8% · set 1,9% **동률**. 전체 EQ/EQR은 여전히 BTN 우위. no-pair BB 53,7 대 BTN 51,7%이므로 BTN의 체크를 «미스가 더 많아서» 하나로 설명하지 않는다.
- BTN이 넓게 못 친다는 것은 «레인지 구성에서 읽은 해석 — BTN 벳 노드는 이 솔브에 없다».
- QQ(하트 없음) 위험 turn 23/47 ≈ 49%, Q♥ 있으면 22/47 ≈ 47%. 24 sảnh 전부가 체크 레인지에 남는 것도 아님.
- ⚠ EN 머리 주석: **BTN의 OESD 23,7%와 BB 리드 23,7%는 우연히 같은 다른 값** — 본문에서 섞지 마라.
- 앱 ④ 해설문(BTN c-bet 붕괴 류)은 폐기 명제(화면은 BB 첫 액션 · BB의 리드는 c-bet이 아니다) — 옮기지 않는다.
- 정의 H2 «Donk bet là gì?»(추가)의 답은 EN FAQ «What is a donk bet in poker?» 답 축어 뜻 — 새 정의·어원 추가 금지(«donkey» 어원은 EN에 없으면 쓰지 않는다). 그 FAQ 문항은 FAQ에서 뺀다(FAQ 7→6 · fr 선례).
- 스트레이트 콤보 설명이 필요하면 EN 축어만(9♥8♥7♣에서 sảnh = J-T · T-6 · 6-5 — EN이 열거한 것만).

---

## ⑤ monotone-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Nut Flush That Checks Seven Times Out of Ten",
seoTitle: "The Nut Flush Checks 70% of the Time — Monotone Flop",
desc: "On a monotone flop the big bet nearly disappears — 3.2%. Even the nut flush checks 69.9% on average. Here is why size collapses when three suits match.",
tldr: "On Q♠9♠2♠, where all three flop cards share a suit, the big blind checks 88.8%, bets small 8.0% and bets big just 3.2%. The large size almost vanishes because the nuts are fixed: a made flush gets called by small bets anyway, and the bigger you bet without a flush, the more your callers narrow down to flushes. Even the nut flush checks 69.9% on average — and non-nut flushes check more, at 81.4%.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "♠️",
image: "/images/gto-srp-monotone-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a monotone spade flop, the big blind's grid mostly green for check with a few small bets mixed in",
tags: ["monotone flop", "monotone board poker", "how to play monotone flop", "nut flush", "bet sizing", "gto solver", "reverse implied odds"],
# title 길이 48
# seoTitle 길이 52
# desc 길이 151
# tldr 길이 398
```

### 구조 (EN content L73~L254 · L## = EN 파일 줄)
#### 헤딩
- L90 ## What is a monotone board in poker?
- L104 ## How does the big blind play a monotone flop?
- L118 ## Why does the big bet disappear on a monotone flop?
- L132 ## Why does the nut flush check?
- L157 ## Are non-nut flushes played differently?
- L170 ## Who holds more flushes here?
- L190 ## How does one spade change a hand's value?
- L200 ## Why is EQR 90 against 109 when equity is 48 against 52?
- L214 ## What changes at the table?
- L226 ## Check it yourself
- L234 ## FAQ

#### FAQ 5문항
- L236 **Q. What is a monotone flop?**
- L240 **Q. Should you always bet a made flush on a monotone board?**
- L244 **Q. Why does the big blind have more flushes than the button?**
- L248 **Q. How likely is it to flop a flush?**
- L252 **Q. Why does the A♠ matter so much if I'm not even holding a flush?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L80 :::stripe
- L85 :::
- L124 :::compare
- L128 :::
- L174 ![Range composition infographic comparing the big blind and button hand categories on a monotone spade board](/images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · category split — made flushes favor the big blind, overpairs and ace-h…
- L221 :::readnext[Keep reading]
- L224 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L77 /en/solver ✅ 도구
- L106 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L168 /en/blog/holdem-implied-odds ✅
- L174 /images/gto-srp-monotone-ranges-en.webp "Q♠9♠2♠ · category split — made flushes favor the big blind, overpairs and ace-h img
- L228 /en/solver ✅ 도구
- L250 /en/blog/holdem-drawing-odds ✅

### 키워드 (출처 L-G §1·§2·§3·§7-6)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| monotone board poker · monotone flop | 10 · `-` | 첫 H2 «Board monotone (đồng chất) là gì?» |
| monotone flop odds | 자동완성 | FAQ «flop ra thùng» 확률 문항 |
| thùng trong poker là gì · flush trong poker là gì (50 · 40 · 🔴 L-B 소유) | — | 족보 정의 흡수 금지 — 필요하면 hand-rankings·flush-vs-straight 링크 |
| 함정 🚫 | — | «board đồng chất»·«flop đồng chất» = 자동완성·볼륨 0(산문 병기 전용) · «gto poker» |

### PAA·자동완성 (축어)
- PAA(board texture poker): **What is a monotone board in poker?**
- 자동완성: monotone flop → **monotone flop odds** · probability of monotone flop

### 현지 SERP (L-G §4-D ⑧·§7-6)
- vi 대응 글: wikipoker `/flop-monotone/`(2021 · H2 «Mặt Flop monotone là gì?» · «tần suất bet giảm từ 62% xuống còn 51%») · `/cach-choi-board-dong-chat-trong-poker/`(2025 · «c-bet với tần suất 50%, size bet khoảng 25-33% pot» · 플러시 확률 미기재) — 순위 밖. `monotone board` 1페이지 = 영어 + 비포커(slideteam·pinterest) + `.cfd` 스팸.
- 우리가 더 줄 것: ① 88,8% 체크 + 너트 플러시 콤보 믹스(텍스트) ② 블로커 «규칙»이 아니라는 실측 ③ 앱 동선.
- 처방: 첫 H2 «What is a monotone board in poker?» → vi 질문형 + «đồng chất» 병기 · FAQ «How likely is it to flop a flush?» 유지.

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(그룹 A · «monotone board poker» 10 흡수만).
- 쓰면 안 되는 헤드: «gto poker»·«range poker» · «thùng là gì»류 족보 정의(L-B).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Thùng nut mà bảy trên mười lần vẫn check (40 ký tự)
seoTitle: Thùng nut mà check tới 70% — Chơi flop monotone thế nào (55 ký tự)
desc: Trên flop monotone, cú bet lớn gần như biến mất — chỉ 3,2%. Ngay cả thùng nut cũng check trung bình 69,9%. Vì sao size sụp xuống khi ba lá flop cùng một chất. (158 ký tự)
tldr: Trên Q♠9♠2♠, nơi cả ba lá flop cùng một chất, big blind check 88,8%, bet nhỏ 8,0% và bet lớn chỉ 3,2%. Size lớn gần như biến mất vì nut đã cố định: thùng có sẵn thì bet nhỏ cũng được call, còn bạn càng bet lớn khi chưa có thùng, người call bạn càng thu hẹp về đúng những tay có thùng. Ngay cả thùng nut cũng check trung bình 69,9% — và thùng không phải nut còn check nhiều hơn, 81,4%. (384 ký tự)
tags: ["monotone flop", "monotone board poker", "cách chơi flop monotone", "thùng nut", "bet sizing", "reverse implied odds", "ví dụ solver"]
#### H2 (EN → VI)
- L90 `## What is a monotone board in poker?` → `## Board monotone (đồng chất) trong poker là gì?`
- L104 `## How does the big blind play a monotone flop?` → `## Big blind chơi flop monotone thế nào?`
- L118 `## Why does the big bet disappear on a monotone flop?` → `## Vì sao cú bet lớn biến mất trên flop monotone?`
- L132 `## Why does the nut flush check?` → `## Vì sao thùng nut lại check?`
- L157 `## Are non-nut flushes played differently?` → `## Thùng không phải nut có chơi khác không?`
- L170 `## Who holds more flushes here?` → `## Ai cầm nhiều thùng hơn ở đây?`
- L190 `## How does one spade change a hand's value?` → `## Một lá bích làm giá trị tay bài thay đổi thế nào?`
- L200 `## Why is EQR 90 against 109 when equity is 48 against 52?` → `## Vì sao EQR là 90 so với 109 khi equity là 48 so với 52?`
- L214 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L226 `## Check it yourself` → `## Tự kiểm tra`
- L234 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. What is a monotone flop? → `Flop monotone là gì?`
2. Should you always bet a made flush on a monotone board? → `Có thùng sẵn trên board monotone thì lúc nào cũng nên bet không?`
3. Why does the big blind have more flushes than the button? → `Vì sao big blind có nhiều thùng hơn button?`
4. How likely is it to flop a flush? → `Xác suất flop ra thùng là bao nhiêu?`
5. Why does the A♠ matter so much if I'm not even holding a flush? → `Chưa có thùng thì A♠ trên tay quan trọng đến vậy để làm gì?`
#### Từ khóa đã hấp thụ
- monotone board poker (10) → tag + H2 L90
- monotone flop (autocomplete) → tag + FAQ 1
- monotone flop odds (autocomplete) → FAQ 4 «Xác suất flop ra thùng…»
- «đồng chất» → chỉ trong ngoặc ở H2 L90 và văn xuôi (volume 0)
#### Ghi chú
- Không định nghĩa «thùng là gì» (đầu từ thuộc hand-rankings / flush-vs-straight) — cần thì chỉ link.
- Bài EN không có H2 «What conditions…» → không thêm; blocker A♠ viết là kết quả đo, không phải «quy tắc».
- Bet của big blind là lead, không «c-bet của big blind».

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L73 · L75 · L81 · L82 · L83 · L84 · L88 · L92 · L96 · L97 · L98 · L99 · L100 · L106 · L110 · L111 · L112 · L114 · L120 · L134 · L136 · L138 · L139 · L140 · L141 · L142 · L143 · L144 · L145 · L147 · L149 · L153 · L155 · L159 · L163 · L164 · L165 · L166 · L168 · L172 · L174 · L178 · L179 · L180 · L181 · L182 · L184 · L188 · L194 · L196 · L206 · L208 · L210 · L216 · L217 · L218 · L219 · L230 · L238 · L242 · L246 · L252 · L254

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L252: **Q. Why does the A♠ matter so much if I'm not even holding a flush?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴 **「board」가 아니라 「flop」이 본선이다**(뱅크 §4-1 — board 시드 27개 vs flop 시드 116개).
- * 🔴 형제 편과 겹치지 않는다: ①c벳 빈도·드라이 / ②always c-bet·체크백 / ③너트 우위·다이나믹 /
- * 🔴 `holdem-flush-vs-straight`(족보 서열)·`holdem-drawing-odds`(드로우 확률)의 자리는 침범하지 않는다 —
- *   ⚠ 「플러시 드로우」는 **파생값**이다 — 화면의 Flush Draw + Combo Draw(스페이드 1장이 양쪽에 잡힌다).

### 하지 말 것 (EN 원문 계약 ⑤)
- A♠J♠ 한 콤보 체크 **83,4%**, 너트 thùng 8콤보 평균 **69,9%**(52,7–84,2%), non-nut 25콤보 평균 **81,4%**를 구분.
- 너트는 «A♠ 한 장»이 아니라 **A♠ + 스페이드 한 장 더**(A♠ 단독은 4장 thùng 드로). A♠K♠는 BB 프리플랍에 없음. Q♠ 보드라 «thùng J-high»라 부르면 틀림; J♠/10♠는 상대 thùng의 키커 슬롯을 차단.
- **블로커 논거는 폐기됐다**: «블로커가 콜링 레인지를 얇게 해 체크» 논리 금지 — BTN non-nut thùng 18콤보 기준 차단 수(J♠·10♠ 4 · 7♠ 6 · 8♠·6♠ 5 · 5♠ 4 · 4♠ 2 · 3♠ 0), 최대 블로커 A♠7♠가 오히려 44,0% 벳(A♠4♠ 47,3% 다음), A♠3♠ 79,7% 체크, 너트 콤보마다 세 액션이 **0,05bb 이내** → «trộn giữa các lựa chọn gần như ngang nhau, không phải quy tắc blocker».
- BB 싸구려 수딧 예시는 **J4s, J5s, 85s**(74s 아님).
- Q♥J♦: 이미 뒤짐 12,0%(BTN 전체 474 기준) / 키커 AQ·KQ 16콤보 = **428 중 3,7%** / 합 **68/428 ≈ 15,9%** — 분모 474와 428을 섞지 않는다. 키커 16콤보 중 4개는 29,2%에도 포함(단순 합산 금지). flush draw 합 25,6/29,2는 thùng+combo draw 두 행을 더한 값.
- BB 큰 리드 3,2%는 **BTN의 벳 빈도가 아님**. compare 행 «chủ yếu bằng thùng và draw bích»; 원스페이드 핸드는 «더 높은 thùng 불가·runner-runner(cù lũ 등) 필요».
- FAQ «flop ra thùng» 확률은 **EN 답의 값만**.

---

## ⑥ paired-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "You Hold More Trips — and Still Check 97%",
seoTitle: "More Trips, Still Checking 97% — the 6-6-3 Paired Flop",
desc: "On 6-6-3 the caller holds more trips than the raiser — 26 combos against 20 — and checks 97% anyway. Here is what a paired flop actually rewards.",
tldr: "On the low paired flop 6♣6♦3♥ the big blind checks 97.0%. The odd part is that it holds more trips than the button: 26 six-x combos against 20. It checks anyway, because only 18.4% of its range has anything beyond the board's pair, and the other 81.6% is a high-card contest the button wins. What does gain value is any pocket pair above a six — TT is 76.0% equity here.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "👯",
image: "/images/gto-srp-paired-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a low paired flop, the big blind's grid almost entirely green with quads and full house rows in the panel",
tags: ["trips vs set", "paired flop strategy", "paired flop example", "pocket pairs", "gto solver", "minimum defense frequency"],
# title 길이 41
# seoTitle 길이 54
# desc 길이 145
# tldr 길이 370
```

### 구조 (EN content L113~L338 · L## = EN 파일 줄)
#### 헤딩
- L130 ## What conditions produced these numbers?
- L144 ## Trips vs a set — on a paired board it’s trips
- L159 ## How does the big blind play a low paired flop?
- L171 ## Why check when you hold more trips?
- L205 ## Equity is 47 against 53 — so why is EQR 84 against 115?
- L221 ## How strong are pocket pairs on 6-6-3?
- L245 ## How many quads and full houses are actually out there?
- L256 ## Why is the big bet more common than the small one?
- L278 ## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?
- L294 ## What changes at the table?
- L306 ## Check it yourself
- L314 ## FAQ

#### FAQ 6문항
- L316 **Q. Why is trips weaker than a set on a paired board?**
- L320 **Q. What do pocket pairs become on a 6-6-3 board?**
- L324 **Q. Why does the caller hold more trips than the raiser?**
- L328 **Q. What is minimum defense frequency?**
- L332 **Q. How often does the flop come paired?**
- L336 **Q. Do these numbers hold at my stake?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L120 :::stripe
- L125 :::
- L189 ![Range composition infographic comparing the big blind and button hand categories on a low paired board](/images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · category split — trips favor the caller, but two pair and ace-high favor the…
- L219 :::note[Every EQR in this series is the figure the solver displays. Dividing the rounded equity and EV yourself lands within a tenth of a point of it — that is rounding, not a discrepancy.]:::
- L292 :::note[MDF simplifies the opponent’s bet to a pure bluff. In practice the right frequency also depends on how well your hand realizes its equity on later streets, so use it as a starting point rather than a hard rule. The pot-odd…
- L301 :::readnext[Keep reading]
- L304 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L117 /en/blog/a-high-board-cbet ✅
- L117 /en/blog/k-high-board-cbet ✅
- L117 /en/solver ✅ 도구
- L146 /en/blog/holdem-hand-rankings ✅
- L169 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L169 /en/blog/monotone-board-strategy ✅
- L189 /images/gto-srp-paired-ranges-en.webp "6♣6♦3♥ · category split — trips favor the caller, but two pair and ace-high fav img
- L217 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L278 /en/blog/holdem-continuation-bet ✅
- L292 /en/blog/holdem-pot-odds "thumb:/images/holdem-pot-odds-hero.webp" ✅
- L292 /en/blog/holdem-3bet ✅
- L308 /en/solver ✅ 도구
- L310 /en/blog/3bet-pot-low-board ✅
- L310 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L318 /en/blog/holdem-hand-rankings ✅

### 키워드 (출처 L-G §1·§2·§3·§4-D ⑦⑮·§7-5)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| paired board poker | 10 | 산문 «board có đôi (paired board)» |
| trips poker · poker trips vs set | 10 · 자동완성 | H2 «Trips hay set?…» |
| set trong poker | `-`(SERP vi 3편) | H2·FAQ 문구 |
| mdf poker | 10 | FAQ «MDF (tần suất phòng thủ tối thiểu) là gì?» |
| 함정 🚫 | — | 🔴 **«set poker» 30 = 칩 세트 쇼핑(0/10)** — 제목·태그 금지 · «mdf là gì»(합판) · «bộ ba» 단독(set·trips 둘 다 덮는다) · «mặt bài chập» 자동완성 0(→ «bài tập cơ mặt») |

### PAA·자동완성 (축어)
- 자동완성: trips poker → **poker trips vs set** · trips or set / set trong poker là gì → **set trong poker** · **set poker là gì** / 🔴 set poker → amazon · chips · gucci
- 관련검색(set trong poker): Thùng trong poker là gì · Trong Poker chất nào to nhất(L-B 몫)
- PAA: 없음

### 현지 SERP (L-G §4-D ⑥⑦⑮·§7-5)
- vi 대응 글: wikipoker `/mat-bai-chap/`(2024-11-11 · H2 «Mặt bài chập ở Flop là gì?» · «khoảng 17% các flop là bài chập» · 8♥8♦4♣ vs 33% c-bet) · `/c-bet-tren-mat-bai-co-doi/`(IP 6♠6♥2♣ «c-bet khoảng 60%») · natural8/vi «Cách chơi bộ ba…»(H2 «Trip hay là set?» · «Bộ ba … có thể được gọi là "set" hoặc "trip"») — `set trong poker` 1페이지에 vi 3편.
- 🔴 vi 고유 함정: «bộ ba»가 set·trips를 다 덮는다 → **set·trips 차용어 + 정의 문장 필수**(계획 §3-A ③ 정의 고정문).
- 우리가 더 줄 것: ① BB trips 26 대 BTN 20인데 97% 체크라는 역설 + 콤보 근거 ② 포켓 페어 EQ(TT 76,0%) ③ 앱 동선.
- 🔴 «IP c-bet 60%»(wikipoker)와 우리 6-6-3 BB 체크 97%는 행위자가 달라 직접 비교하지 않는다.
- 처방: H2 «Trips vs a set — on a paired board it's trips» → «Trips hay set? …» · FAQ «How often does the flop come paired?»·«What is minimum defense frequency?» vi 질문형.

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(롱테일 «poker trips vs set»·«mdf poker» H2·FAQ 흡수만).
- 쓰면 안 되는 헤드: «set poker»(함정) · «gto poker»·«range poker» · «mdf là gì».

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Bạn cầm nhiều trips hơn — mà vẫn check 97% (42 ký tự)
seoTitle: Nhiều trips hơn mà vẫn check 97% — Flop có đôi 6-6-3 (52 ký tự)
desc: Trên 6-6-3 người call cầm nhiều trips hơn người raise — 26 combo so với 20 — mà vẫn check 97%. Flop có đôi thật sự thưởng cho ai: trips, set hay pocket pair? (157 ký tự)
tldr: Trên flop có đôi thấp 6♣6♦3♥, big blind check 97,0%. Điều lạ là nó cầm nhiều trips hơn button: 26 combo 6-x so với 20. Nó vẫn check, vì chỉ 18,4% range có gì đó hơn đôi trên board, còn 81,6% còn lại là cuộc đấu bài cao mà button thắng. Thứ thật sự lên giá là bất kỳ pocket pair nào trên 6 — TT ở đây có 76,0% equity. (316 ký tự)
tags: ["poker trips vs set", "set trong poker", "paired board poker", "pocket pair", "mdf poker", "ví dụ solver"]
#### H2 (EN → VI)
- L130 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L144 `## Trips vs a set — on a paired board it's trips` → `## Trips hay set? Trên board có đôi, đó là trips`
- L159 `## How does the big blind play a low paired flop?` → `## Big blind chơi flop có đôi thấp thế nào?`
- L171 `## Why check when you hold more trips?` → `## Cầm nhiều trips hơn, vì sao vẫn check?`
- L205 `## Equity is 47 against 53 — so why is EQR 84 against 115?` → `## Vì sao EQR là 84 so với 115 khi equity là 47 so với 53?`
- L221 `## How strong are pocket pairs on 6-6-3?` → `## Pocket pair mạnh đến đâu trên 6-6-3?`
- L245 `## How many quads and full houses are actually out there?` → `## Ngoài kia thật sự có bao nhiêu tứ quý và cù lũ?`
- L256 `## Why is the big bet more common than the small one?` → `## Vì sao bet lớn lại phổ biến hơn bet nhỏ?`
- L278 `## Should you fold ace-high to a [continuation bet](/en/blog/holdem-continuation-bet)?` → `## Gặp [continuation bet](/vi/blog/holdem-continuation-bet), có nên fold ace-high không?`
- L294 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L306 `## Check it yourself` → `## Tự kiểm tra`
- L314 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. Why is trips weaker than a set on a paired board? → `Vì sao trên board có đôi, trips lại yếu hơn set?`
2. What do pocket pairs become on a 6-6-3 board? → `Pocket pair trở thành gì trên board 6-6-3?`
3. Why does the caller hold more trips than the raiser? → `Vì sao người call cầm nhiều trips hơn người raise?`
4. What is minimum defense frequency? → `MDF (tần suất phòng thủ tối thiểu) là gì?`
5. How often does the flop come paired? → `Flop ra board có đôi với tỷ lệ bao nhiêu?`
6. Do these numbers hold at my stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- trips poker (10) · poker trips vs set (autocomplete) → H2 L144 «Trips hay set?…» + tag
- set trong poker (autocomplete) → tag + câu định nghĩa set/trips trong H2 L144 + FAQ 1
- mdf poker (10) → FAQ 4 + tag
- paired board poker (10) → tag + văn xuôi «board có đôi (paired board)»
#### Ghi chú
- Bắt buộc 1 câu định nghĩa ngay đầu H2 L144: set = pocket pair + 1 lá board, trips = 1 lá tay + đôi trên board; «bộ ba» che cả hai nên không bao giờ dùng một mình; «set poker» (30 = mua chip) cấm tuyệt đối ở title/tag.
- Không so trực tiếp với tần suất c-bet của người có vị trí trên board đôi (người hành động khác) — 97% là check của big blind; bet của big blind là lead.
- Giữ 18,4% / 81,6% / TT 76,0% / 26 so với 20 đúng EN; không tự tính tỷ lệ flop ra đôi — chép số thân EN.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L113 · L115 · L117 · L121 · L122 · L123 · L124 · L128 · L132 · L136 · L137 · L138 · L139 · L140 · L148 · L150 · L161 · L165 · L166 · L167 · L169 · L173 · L175 · L179 · L180 · L181 · L182 · L183 · L189 · L193 · L194 · L195 · L196 · L197 · L198 · L199 · L201 · L211 · L213 · L215 · L227 · L228 · L229 · L230 · L231 · L232 · L233 · L237 · L239 · L249 · L250 · L254 · L260 · L262 · L263 · L264 · L265 · L266 · L268 · L272 · L274 · L276 · L280 · L282 · L284 · L288 · L296 · L297 · L298 · L299 · L310 · L318 · L322 · L326 · L330 · L334 · L338

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L336: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * ▶ 🔴 **서치가 뱅크를 뒤집었다** (2026-08-20 라쿠 English/US + 자동완성 + SERP)
- *   🔴 **`full house poker` 9,900은 조준 금지** — 족보 용어라 `holdem-hand-rankings` 소유다.
- *   🔴 **`quads poker` 6,600은 허수다** — 월별을 보면 2026-01에 **74,000** 한 번 튀고 나머지 달은
- * ═══ 적대 검수 4렌즈 (2026-08-20 · 병렬) — 되돌리지 마라 ═══
- * 🔴 **기계 게이트가 전부 통과시킨 뒤에 나온 결함들이다.** `check:gto` 🔴0 · `audit:hard` 🔴0인
- * ① 🔴 **「Only four combos beat trips」는 키커를 지운 유해 조언이었다.** 플랍 5장이라
- * ② 🔴 **「리드하는 핸드가 대부분 6x」는 자기 표가 반증했다.** 큰 벳 총량 9.6콤보 중
- * ③ 🔴 **EQR 100%를 «손익분기»로 오독했다.** EQR은 실현률이지 손익이 아니다 —
- * ④ 🔴 **갈림선은 6이 아니라 3이다.** 55(63.7%)·44(61.8%)는 6보다 낮은데도 제 몫을 다 실현한다.
- * ⑦ 🔴 **MDF 처방이 14%p 미달이었다.** 18.4 + A하이 26.3 + K하이 16.5 = **61.2% < 75.3%** →
- * ⑧ 🔴 **64.6%는 K하이 15.1%를 빠뜨린 값**이었다(정답 **79.7%** = 100−20.3).
- * 🔴 **①②③④⑦⑧은 한국어판에도 그대로 있었다 → 같은 커밋에서 KO도 고쳤다.** 개선은 양방향으로 흐른다.

### 하지 말 것 (EN 원문 계약 ⑥)
- 6♣6♦3♥에서 손에 6 한 장 = trips; 66은 tứ quý(6♠6♥ 1콤보); 33은 cù lũ(3콤보). BB trips 26 대 BTN 20, 차이는 J6s/T6s/96s. 63은 두 레인지 모두 없음. 보드 페어를 넘는 핸드 18,4/20,3%; TT는 hai đôi이며 EQ 76,0%.
- 22: «두 번째 3이 턴이나 리버에» 떨어질 때 — **6-6-3-3-K에서 22는 보드 hai đôi를 플레이**(다른 스트리트에 2가 오면만 살아남음). 조건 없이 «3이 나오면»으로 일반화 금지.
- **키커 표 논거가 바뀌었다**: 옛 «J6s/T6s/96s는 BTN에 없어 trips를 안 막는다·K6/Q6는 콜링 레인지를 얇게 한다» 폐기 → 어느 6이든 BTN trips 20 중 **정확히 10**을 남기고 키커는 더 막지 않는다; **표는 계산된 믹스를 보여 줄 뿐 이 작은 차이의 원인을 분리하지 않는다**.
- 큰 벳 기여: six 26콤보가 약 9,6 중 **약 1,2(13,0%, 1/8)** — «약 4분의 1»은 틀렸다; 나머지 대부분은 six 없는 핸드.
- six 리드 **6,8%** — hai đôi·하이카드보다 높고 33 cù lũ 8,8%·tứ quý 9,6%보다 낮다(«어느 클래스보다 높다» 금지).
- EQR 359,7%(6♠6♥) 다음은 **⑩ BTN 88 346,0%**, BB 쪽 2위가 ⑦ 6♥6♣ 318,9%. MDF 75,3%는 pure-bluff 가정의 기준이고 **실제 최적 방어가 그 위/아래인지는 여기서 모름**.
- EN 현행(4b353f92): «On every unpaired flop in this series, three of a kind means a set» · Quick answer «do not fold just because you missed the board».
- 🔴 EN L219 note «within a tenth of a point» → §0-0 **AO-3 정정**(«lệch trong vòng vài phần mười điểm»).
- «four ranges out of five» → §0-0 정정(«bốn phần năm của mỗi range»).
- 앱 ⑥ 해설문은 계산되지 않은 명제 — 옮기지 않는다.
- 확률 FAQ(EN «How often does the flop come paired?»)의 수치는 **EN 답의 값만**(L-G §7-5의 «16,9% · 0,24%»는 검산 참고 — EN에 없는 값이면 쓰지 않는다 · wikipoker «17%»도 인용 금지).
- 🔴 «bộ ba» 단독 금지 — set / trips 차용어 + 정의 문장.

---

## ⑦ low-board-check-raise — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Neither Range Holds a Straight Here",
seoTitle: "Zero Straights Here — When to Check-Raise in Poker",
desc: "On 6-5-2 exactly one hand makes a straight and neither player holds it. So the big blind checks 96.8% — and saves all of its aggression for the check-raise.",
tldr: "On the low rainbow flop 6♠5♥2♦ the big blind checks 96.8% and leads just 3.2% — even though its 48.3% equity is the second highest of the seven spots where it defends. Only one hand makes a straight here, 4-3, and neither range holds it. Nobody has a top end, so nobody leads out of position. The action comes later: re-solve the same tree to see past the flop and the big blind check-raises a 1.8bb bet 14.9% of the time, mostly with draws.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "11 min",
emoji: "🌊",
image: "/images/gto-srp-low-rainbow-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for a low rainbow flop, the big blind's 13x13 grid almost entirely green with a thin orange band of leads",
tags: ["check raise poker", "when to check raise", "wet board poker", "low rainbow flop", "gto solver", "gutshot"],
# title 길이 35
# seoTitle 길이 50
# desc 길이 156
# tldr 길이 441
```

### 구조 (EN content L125~L365 · L## = EN 파일 줄)
#### 헤딩
- L144 ## What conditions produced these numbers?
- L162 ## How often does the big blind check on 6-5-2?
- L173 ## Why does the big blind lead 3.2% here but 23.7% on 9-8-7?
- L197 ## How do the two ranges differ on 6-5-2?
- L223 ## Why is the equity 48.3% but the EQR only 84.3%?
- L239 ## When should you check-raise on this flop?
- L270 ## Which hands make up the check-raise?
- L309 ## Is 6-5-2 a wet board or a dry one?
- L319 ## What changes at the table?
- L331 ## Check it yourself
- L341 ## FAQ

#### FAQ 6문항
- L343 **Q. When should you check-raise in poker?**
- L347 **Q. Why doesn't the big blind bet first on a low board?**
- L351 **Q. Why is the strategy so different from 9-8-7 with almost the same equity?**
- L355 **Q. Which hands should you check-raise on 6-5-2?**
- L359 **Q. Is a check-raise allowed, and is it rude?**
- L363 **Q. Do these numbers hold at my stake?**

#### 표 9개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L134 :::stripe
- L139 :::
- L195 :::pull[One hand makes a straight on this board, and neither player was ever dealt it.]:::
- L201 ![Range composition on a low rainbow board, the big blind ahead on pairs and the button ahead on overpairs](/images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · range composition — the big blind ahead on pairs, the button ahead on…
- L243 :::note[⚠ **This section comes from a different solve.** The study spot published in the app is flop-only — it stops at the first decision and its action chips are not clickable, so the responses to a bet are not in it. To get the…
- L268 :::note[One honest caveat about that run: its **root** lead frequency came out at **2.0%** rather than the study spot's 3.2%, on 9.5 combos instead of 15.3. Everything else — the categories, the draws, equity, EV and EQR — matched…
- L326 :::readnext[Keep reading]
- L329 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L127 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L131 /en/solver ✅ 도구
- L187 /en/blog/monotone-board-strategy ✅
- L191 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L201 /images/gto-srp-low-rainbow-ranges-en.webp "6♠5♥2♦ · range composition — the big blind ahead on pairs, the button ahead on  img
- L235 /en/blog/a-high-board-cbet ✅
- L317 /en/blog/monotone-board-strategy ✅
- L317 /en/blog/holdem-continuation-bet ✅
- L333 /en/solver ✅ 도구
- L361 /en/blog/holdem-betting-actions ✅

### 키워드 (출처 L-G §1·§2·§3·§4-D ③④·§7-2·§8 ⑤ · 계획 §3-C ⑫)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| check raise · check raise là gì · check raise poker | 각 10 | 🔴 **이 글이 주인**(§3-C ⑫ · EN parity) — seoTitle «check-raise» 유지 · 첫 H2 앞 정의 직답 «Check-raise trong poker là gì?» |
| check raise trong poker | `-`(자동완성) | 정의 H2 문구 |
| 함정 🚫 | — | 🔴 **«hồi mã thương» 390 = 무협·축구 오염 → 본문·제목·태그 어디에도 쓰지 않는다**(HARDEN · §3-C ⑫) · «check raise poker queensland/brisbane»(클럽 브랜드) · «gto poker» |

### PAA·자동완성 (축어)
- PAA(check raise / check raise poker): **What is a good check-raise percentage?** · **Can you raise after a check in poker?** · Why is it called the flop? · How do I say "I raise" in poker? · What is check-call in poker?
- 자동완성: check raise là gì → **check raise trong poker** · check or raise / check raise poker → poker check raise size · check vs raise poker

### 현지 SERP (L-G §4-D ③④·§7-2)
- `check raise` 4위 = wikipoker `/check-raise/`(2021 · H2 «Check-raise trong Poker là gì?» · 정의 «Check-raise là hành động bạn check khi đến lượt mình, với ý định raise nếu đối thủ bet.» · 솔버 수치 0) · `check raise là gì` = 섞임 6/9(도박 홍보·기생 스팸 · 정의 글 없음).
- vi 독자가 본 유일한 수치: wikipoker `/phong-thu-big-blind-tren-mat-bai-thap/`(2025-08-28 · 9♠5♥2♣ · BTN c-bet nhỏ ~31% pot 상대 «fold khoảng 26% · call hơn 53% · check-raise gần 21%»).
- 우리가 더 줄 것: ① 6-5-2 체크레이즈 14,9% · 리드 3,2%를 조건(사이즈·보드·별도 솔브)과 함께 ② 7,3bb raise-to 산수 ③ 앱 동선(사전 결과 + 직접 계산 두 단계).
- 처방: 정의 H2 추가(fr 선례 · 1문단 직답 + **`holdem-betting-actions` 링크 +1** — 계획 §3-C ⑫ 축어. fr은 `/fr/glossary`로 걸었지만 vi ⑫는 betting-actions로 정했다 · `/vi/glossary` 링크는 넣지 않는다) · FAQ 추가 «Tỷ lệ check-raise bao nhiêu là hợp lý?»(PAA 축어 뜻 · 답 = 이 스팟 14,9% + «수치는 스팟·사이즈마다 다르다» 한 줄 · 타사 이름 없이 · 새 수치 금지) · PAA «Can you raise after a check?»는 EN FAQ «Is a check-raise allowed…»에 합친다(1문항).

### 소유표 (계획 §3-C ⑫)
- 주인인 검색어: **check raise · check raise là gì · check raise trong poker · check raise poker**.
- 쓰면 안 되는 헤드: «hồi mã thương»(전면 금지) · «gto poker»·«range poker».
- 위임 앵커: 액션 규칙 → `/vi/blog/holdem-betting-actions`(정의 직답 안 · 링크 편차 +1 · 진행 파일 기록).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Cả hai range đều không có sảnh (30 ký tự)
seoTitle: Chẳng ai có sảnh — Khi nào nên check-raise trong poker (54 ký tự)
desc: Trên 6-5-2 chỉ một tay bài làm được sảnh, và chẳng ai cầm nó. Nên big blind check 96,8%, để dành hết cho cú check-raise. Khi nào nên check-raise trong poker? (157 ký tự)
tldr: Trên flop rainbow thấp 6♠5♥2♦, big blind check 96,8% và chỉ lead 3,2% — dù 48,3% equity của nó là mức cao thứ hai trong bảy spot mà nó phòng thủ. Chỉ một tay bài làm được sảnh ở đây, 4-3, và không range nào cầm nó. Không ai có đầu mạnh nhất của board, nên không ai lead khi không có vị trí. Hành động đến sau: solve lại cùng cây bài này để xem tiếp sau flop, và big blind check-raise một cú bet 1,8bb với tần suất 14,9%, phần lớn bằng draw. (440 ký tự)
tags: ["check raise poker", "check raise là gì", "khi nào nên check-raise", "wet board poker", "flop rainbow thấp", "gutshot", "ví dụ solver"]
#### H2 (EN → VI)
- + (thêm) `## Check-raise trong poker là gì?` — đặt TRƯỚC L144 · nguồn: câu định nghĩa từ EN L239 «When should you check-raise on this flop?» + FAQ L343/L359 (1 đoạn `> **Trả lời nhanh**`: check khi tới lượt, rồi raise khi đối thủ bet · link +1 → `/vi/blog/holdem-betting-actions` · không link `/vi/glossary` · không thêm số)
- L144 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L162 `## How often does the big blind check on 6-5-2?` → `## Big blind check bao nhiêu phần trăm trên 6-5-2?`
- L173 `## Why does the big blind lead 3.2% here but 23.7% on 9-8-7?` → `## Vì sao big blind lead 3,2% ở đây nhưng 23,7% trên 9-8-7?`
- L197 `## How do the two ranges differ on 6-5-2?` → `## Hai range khác nhau ở đâu trên 6-5-2?`
- L223 `## Why is the equity 48.3% but the EQR only 84.3%?` → `## Vì sao equity 48,3% mà EQR chỉ có 84,3%?`
- L239 `## When should you check-raise on this flop?` → `## Khi nào nên check-raise trên flop này?`
- L270 `## Which hands make up the check-raise?` → `## Những tay bài nào tạo nên cú check-raise?`
- L309 `## Is 6-5-2 a wet board or a dry one?` → `## 6-5-2 là board ướt hay board khô?`
- L319 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L331 `## Check it yourself` → `## Tự kiểm tra`
- L341 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI) — 7 câu (EN 6 + 1 thêm)
1. When should you check-raise in poker? → `Khi nào nên check-raise trong poker?`
2. Why doesn't the big blind bet first on a low board? → `Vì sao big blind không bet trước trên board thấp?`
3. Why is the strategy so different from 9-8-7 with almost the same equity? → `Equity gần như bằng nhau, vì sao chiến lược lại khác hẳn 9-8-7?`
4. Which hands should you check-raise on 6-5-2? → `Nên check-raise bằng những tay bài nào trên 6-5-2?`
5. Is a check-raise allowed, and is it rude? → `Check rồi raise lại có được phép không, và có bị coi là bất lịch sự?` (gộp PAA «Can you raise after a check in poker?»)
6. + (thêm) `Tỷ lệ check-raise bao nhiêu là hợp lý?` — nguồn: EN L239/L270 + tldr (đáp: spot này 14,9% trước bet 1,8bb, chủ yếu bằng draw + 1 câu «con số đổi theo spot và size» · không tên bên thứ ba · không số mới)
7. Do these numbers hold at my stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- check raise · check raise là gì · check raise poker (10 mỗi từ · bài này là chủ) → seoTitle «check-raise trong poker», H2 thêm, tag 1–2
- check raise trong poker (autocomplete) → câu H2 định nghĩa
- PAA «What is a good check-raise percentage?» → FAQ 6 thêm · PAA «Can you raise after a check?» → gộp vào FAQ 5
#### Ghi chú
- 🔴 «hồi mã thương» không xuất hiện ở bất kỳ đâu (title, tag, thân bài); «tố» cũng không.
- Phép tính raise-to 7,3bb chép từ thân EN; app đi hai bước (kết quả sẵn → tự solve lại để xem check-raise) viết rõ ở «Tự kiểm tra».
- Bet 3,2% của big blind là lead, không «c-bet»; link betting-actions là độ lệch +1 so với EN — ghi vào file tiến độ.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L125 · L127 · L129 · L135 · L136 · L137 · L138 · L146 · L150 · L151 · L152 · L153 · L154 · L158 · L160 · L164 · L168 · L169 · L171 · L173 · L179 · L180 · L181 · L182 · L183 · L184 · L185 · L187 · L189 · L191 · L201 · L205 · L206 · L207 · L208 · L209 · L210 · L211 · L212 · L213 · L214 · L216 · L220 · L221 · L223 · L229 · L231 · L233 · L235 · L241 · L243 · L249 · L250 · L254 · L256 · L257 · L258 · L260 · L264 · L266 · L268 · L278 · L279 · L280 · L281 · L282 · L283 · L284 · L289 · L294 · L296 · L302 · L303 · L304 · L305 · L307 · L315 · L317 · L321 · L322 · L323 · L324 · L327 · L345 · L349 · L353 · L361 · L365

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L345: A. When your range has hands that gain from a bigger pot and enough draws to balance them. On 6♠5♥2♦ that is 14.9% of the big blind's range …
- L363: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- * 🔴🔴 **이 편은 두 개의 서로 다른 솔브를 쓴다. 절대 섞지 마라.**
- *   🔴 **②의 루트 리드 빈도는 2.0%(9.5콤보)로 ①의 3.2%와 다르다.** Hands·Draws·EQ·EV·EQR은 동일.
- * ▶ 🔴 **서치가 뱅크 §3-⑦을 다시 뒤집었다** (2026-08-20 라쿠 English/US 실측)
- *     셋이 월별까지 동일한 **한 덩어리**다. 더하지 마라)
- *   🔴 **`check raise` 단독 260을 제목에 쓰면 안 된다** — 소총 치크라이저(cheek riser) ·
- *   🔴 **`low board` · `low flop`은 검색이 아예 없다** — `low board poker` 데이터 없음,
- *   🔴 **라쿠 `suggest-keywords`의 metrics는 일본 DB다** — `check raise`에 880을 붙여 주지만
- *   🔴 단 **「체크레이즈가 합법인가」류는 `holdem-betting-actions`가 이미 축어로 답한다** —
- *   🔴 **「Straight」 행이 아예 없다** — 0%인 등급은 화면에 안 뜬다. 「데이터가 없다」로 쓰지 마라.
- *   · 🔴 **레이즈 7.3bb는 «팟 사이즈 레이즈»가 아니다** — 초판에서 내가 ✓로 통과시킨 오류다.

### 하지 말 것 (EN 원문 계약 ⑦ + 두 솔브 계약 — 전부 필수)
- **A. 앱 사전 계산 예제**: 화면 = Spot mẫu의 [⚡ Xem kết quả]. **플랍 첫 결정만 노출**하고 액션 칩을 눌러 후속 노드로 갈 수 없다. Root: BB check **96,8% / 471,7콤보**, bet 1,8bb **3,2% / 15,3콤보**, total 487. 이 출처에는 BTN 벳 뒤 BB의 check-raise 결과가 없다.
- **B. 2026-08-20 별도 재솔브**: flop bet 33 · raise 60 · pot 55 · stack 975(당시 내부 0,1bb 단위) · 190 iterations · exploitability = EN 현행 문장 «0.16 in the engine's internal units (tenths of a big blind) — 0.016bb, or 0.29% of the 5.5bb pot» → vi «0,16 theo đơn vị nội bộ của engine (phần mười big blind) — tức 0,016bb, bằng 0,29% của pot 5,5bb»(«0,16 = 0,29%»처럼 단위 없는 등식 금지).
- 노드: 재솔브 BB root Check 98,0% (477,5) · Bet 1,8bb 2,0% (9,5) / BB check 후 BTN Bet 1,8bb 63,0% (316,5) · Check back 37,0% (186,5) / BTN bet 1,8bb 후 BB Raise **to** 7,3bb 14,9% (69,7) · Call 65,6% (314,6) · Fold 19,5% (93,2). 🔴 이 중 EN 본문에 없는 «98,0%»·«62,9%»는 본문 문장으로 추가하지 않는다(EN이 말하는 것만: 레이즈 노드 14,6/14,9 불일치 · root lead 2,0%(9,5콤보) · BTN 63,0%(316,5) · 4,06).
- 1. BTN/BB 후속표 **앞에** 다른 솔브라는 note가 있어야 한다. Root의 3,2/15,3을 재솔브의 2,0/9,5와 한 표로 합치지 않는다.
- 2. **표시 빈도와 콤보 역산이 다르다**: EN «69.7 ÷ 477.5 = 14.6%», 표시 14,9% — 설명을 지우거나 표를 역산값으로 고치지 않는다.
- 3. 7,3bb는 **raise-to 총액**. 60% 팟 레이즈이며 팟 사이즈 레이즈가 아니다. 콜 뒤 pot = 5,5 + 1,8 + 1,8 = 9,1; 팟 사이즈 raise-to = 10,9; 실제 (7,3 − 1,8) ÷ 9,1 ≈ 60%. EN의 «5.5 + 1.8 = 7.3은 맞지만 거기서 팟 사이즈를 끌어내면 틀린다» 구조 보존. «a shade over four times the bet (7.3 ÷ 1.8 = 4.06)» 보존.
- 4. root lead 차이(3,2 vs 2,0)는 거의 무차별인 낮은-EV 액션의 수렴 차이 — 다른 지표가 소수점까지 같다는 설명도 보존.
- 5. set 66/55/22의 9콤보와 65s의 **6♦5♦·6♣5♣ 두 콤보**는 100% raise. 64s는 세 중 **두 콤보**가 100%. 98s EQ 35,8%/raise 99%+, 87s EQ 46,2%/raise 80–83%, J4s/Q4s 67–90%, 54s 74–75%. 거샷 행 ≈ 90콤보 > 레이즈 총 69,7콤보 — «거샷 그룹 전체가 레이즈»로 쓰지 않는다(EN 현행 «every hand at the top of this list holds a straight draw»).
- 6. continuing 80,5%와 MDF 75,3%는 서로 다른 값. ⑥·⑩의 미측정 후속 노드에 이 14,9%를 옮기지 않는다.
- 7. 재현 CTA도 둘로: 사전 결과 열기(Spot mẫu → **Board thấp rainbow (3 lá khác chất)** → [⚡ Xem kết quả]) → root/range 확인; check-raise는 **«Tự giải spot này»로 직접 계산 후 Check → Bet**. 사전 결과에서 칩을 누르면 되는 것처럼 쓰지 않는다.
- 4-3만 sảnh을 만들지만 두 레인지에 없음. 87s만 **이 레인지에 들어 있는** OESD이지 보드가 허용하는 유일한 OESD가 아님(74도 OESD, 84는 double gutshot). 상위 raise 목록은 약 30/69,7콤보이며 전체 목록이 아님.
- FAQ: 체크레이즈는 «거의 모든 카지노·표준 온라인에서 허용, 사설 홈게임만 자체 규칙 가능» — «ở đâu cũng hợp lệ»로 되돌리지 않는다; «Nobody»가 아니라 «Few games». 🔴 합법성 언급 금지 — «được phép theo luật bàn chơi» 의미(게임 규칙)로만.
- EN L220 «Nine combos each» → §0-0 정정(«mỗi bên chín combo»).
- 정의 H2 «Check-raise trong poker là gì?»(추가)의 답 = EN 본문·FAQ에 있는 정의 뜻만 + `holdem-betting-actions` 링크. 추가 FAQ «Tỷ lệ check-raise bao nhiêu là hợp lý?»의 답 = 이 스팟 14,9%(별도 재솔브 · 1,8bb 상대) + «tỷ lệ phụ thuộc vào spot và cỡ bet» 한 줄 — 🔴 **새 수치·타사 수치(21% 등) 금지**.
- «hồi mã thương» 전면 금지.
- 앱 ⑦ 해설문(조작 지시가 틀림) — 옮기지 않는다.

---

## ⑧ 3bet-pot-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Nobody Checks This Flop",
seoTitle: "Nobody Checks This Flop — What Poker SPR 4 Really Does",
desc: "In this 3-bet pot every one of the 63 combos bets. Not because the range is strong, but because the caller has no pocket aces or kings left.",
tldr: "On A♦K♠2♥ in a 3-bet pot the big blind bets its whole range: checking rounds to 0.0%, and no combo out of 63 checks even 0.1% of the time. In the seven earlier spots its default was to check, between 76.2% and 99.9% of the time. What flipped is mainly the preflop action: the big blind three-bet instead of calling, so it owns the top of this flop while the button four-bet its pocket aces and kings away. And with an SPR of 4.0 there is no later street to defer to.",
category: "strategy",
date: "2026-08-20",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "12 min",
emoji: "🔥",
image: "/images/gto-3bp-ace-king-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for an ace-high 3-bet pot, the big blind's entire 13x13 grid colored for betting with check showing 0.0%",
tags: ["poker spr", "what is spr in poker", "effective stack poker", "spr poker meaning", "spr meaning poker", "gto solver"],
# title 길이 23
# seoTitle 길이 54
# desc 길이 140
# tldr 길이 466
```

### 구조 (EN content L110~L299 · L## = EN 파일 줄)
#### 헤딩
- L127 ## What conditions produced these numbers?
- L145 ## Is the check frequency really 0%?
- L161 ## Why doesn't a single combo check?
- L184 ## What is SPR in poker?
- L203 ## Why is the smaller size used more often?
- L215 ## What does the button actually have?
- L225 ## How does the button respond to a third-pot c-bet?
- L237 ## Why is the EQR 109.6% when the big blind is out of position?
- L253 ## What changes at the table?
- L267 ## Check it yourself
- L275 ## FAQ

#### FAQ 6문항
- L277 **Q. What does SPR mean in poker?**
- L281 **Q. How many bets can you make at an SPR of 4?**
- L285 **Q. Should the three-bettor always c-bet?**
- L289 **Q. Why does the button have no pocket aces or kings?**
- L293 **Q. Why is the small size used more than the big one?**
- L297 **Q. Do these numbers hold at my stake?**

#### 표 5개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L117 :::stripe
- L122 :::
- L182 :::note[⚠ This is the mirror image of the [ace-high flop in a single-raised pot](/en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp"). There the big blind was the **capped** one — no AA, AK or AQ, because it wou…
- L219 ![Range composition on an ace-high three-bet pot, the big blind holding every set combo while the button's range is bunched in middle pairs](/images/gto-3bp-ace-king-ranges-en.webp "A-K-2 three-bet pot · the big blind keeps the to…
- L235 :::note[⚠ MDF simplifies the bet to a pure bluff. It only means something when the opponent actually has bluffs — where the betting range is a pair or better all the way down, as it is here, the pure-bluff assumption stands on wea…
- L249 :::pull[Position magnifies an edge. It does not manufacture one.]:::
- L262 :::readnext[Keep reading]
- L265 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L110 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L114 /en/solver ✅ 도구
- L176 /en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp" ✅
- L180 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L182 /en/blog/a-high-board-cbet "thumb:/images/gto-srp-dry-ace-oop-en.webp" ✅
- L209 /en/blog/3bet-pot-low-board ✅
- L219 /images/gto-3bp-ace-king-ranges-en.webp "A-K-2 three-bet pot · the big blind keeps the top of the board while the button img
- L251 /en/blog/holdem-position-play ✅
- L260 /en/blog/3bet-pot-low-board ✅
- L260 /en/blog/holdem-3bet ✅
- L269 /en/solver ✅ 도구
- L295 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅

### 키워드 (출처 L-G §1·§2·§3·§4-D ⑪⑫·§7-3·§8 ⑥ · 계획 §3-C ⑬)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| spr poker · spr poker là gì | 20 · 10 | 🔴 **이 글이 주인**(§3-C ⑬ · EN parity «Poker SPR 4») — seoTitle «SPR» · H2 «SPR trong poker là gì?» |
| spr trong poker là gì | `-`(자동완성) | H2 문구 |
| 3bet pot · 3 bet pot | 각 10 | 산문 «pot 3-bet»(앱 축어) |
| 함정 🚫 | — | 🔴 **«spr là gì» 110 = 포커 0/10(석유 비축·금리)** — 단독형 금지 · «spr calculator/chart»(도구 없음 · 조준 안 함) · «3 bet» 27,100(도박 브랜드) · «c bet là gì»(L-D) |

### PAA·자동완성 (축어)
- 자동완성: spr poker → **spr poker là gì** · chart · calculator · formula / spr trong poker → **spr trong poker là gì** / 3bet pot → oop · ip · strategy · cbet in 3bet pots · **3 bet poker là gì** · **3 bet trong poker**
- PAA: 없음(spr 계열 SERP에 PAA 미노출)

### 현지 SERP (L-G §4-D ⑪⑫·§7-3)
- `spr poker` 1위 = 도박 기생 «Xso99 – SPR Poker là gì» · `spr poker là gì` = reddit `?tl=vi` 10개(SPR 무관) — **완전히 빈 자리**. wikipoker `/spr-la-gi/`(2024 · «SPR là tỷ lệ giữa effective stack size chia cho size của pot ở Flop.» · «SPR = 94 / 15 = 6.3») · `/c-bet-o-flop-trong-3-bet-pot/`(PioSolver Q♥J♥8♠ «C-bet hơn 95%… size 33%») — 둘 다 순위 밖.
- 우리가 더 줄 것: ① SPR 정의 + 이 스팟 값(89 ÷ 22,5 ≈ 4,0 · EN 축어) ② BB 체크 0,0%(화면값)의 콤보 근거 ③ 작은 사이즈 57,8%가 «낮은 SPR 때문이 아니라 레인지 모양 때문».
- 처방: EN H2 «What is SPR…» 자리 → «SPR trong poker là gì?»(정의 = «SPR — stack hiệu dụng chia cho pot» · 계획 §3-A ④ A-5 · effective 필수) · FAQ «What does SPR mean in poker?» → «SPR là viết tắt của gì trong poker?»(«trong poker» 꼬리 필수).

### 소유표 (계획 §3-C ⑬·⑭·⑮)
- 주인인 검색어: **spr poker · spr poker là gì · spr trong poker là gì**.
- 쓰면 안 되는 헤드: «spr là gì» 단독 · «3 bet»·«3bet poker»(⑮ → holdem-3bet) · «c bet là gì»(⑭) · «gto poker»·«range poker».
- 위임 앵커: 3-bet 일반론 → `/vi/blog/holdem-3bet` · c-bet 일반론 → `/vi/blog/holdem-continuation-bet`(EN 링크 자리만).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Chẳng ai check flop này (23 ký tự)
seoTitle: Không ai check — SPR trong poker là gì và SPR 4 làm được gì (59 ký tự)
desc: Pot 3-bet này, cả 63 combo đều bet — không vì range mạnh, mà vì người call không còn pocket A hay pocket K nào. SPR trong poker là gì và SPR 4 làm được gì. (155 ký tự)
tldr: Trên A♦K♠2♥ trong pot 3-bet, big blind bet toàn bộ range: check làm tròn còn 0,0%, và không combo nào trong 63 combo check dù chỉ 0,1%. Ở bảy spot trước, mặc định của nó là check, từ 76,2% đến 99,9%. Thứ đổi chiều chủ yếu là hành động preflop: big blind 3-bet thay vì call, nên nó nắm phần đỉnh của flop này, trong khi button đã 4-bet pocket A và pocket K đi mất. Và với SPR 4,0, không còn street nào sau đó để dồn lại. (419 ký tự)
tags: ["spr poker", "spr poker là gì", "spr trong poker là gì", "effective stack poker", "pot 3-bet", "ví dụ solver"]
#### H2 (EN → VI)
- L127 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L145 `## Is the check frequency really 0%?` → `## Tần suất check thật sự là 0% sao?`
- L161 `## Why doesn't a single combo check?` → `## Vì sao không một combo nào check?`
- L184 `## What is SPR in poker?` → `## SPR trong poker là gì?` (định nghĩa cố định: «SPR là stack hiệu dụng (effective stack) chia cho pot ở flop» — chữ «effective/hiệu dụng» bắt buộc)
- L203 `## Why is the smaller size used more often?` → `## Vì sao size nhỏ được dùng nhiều hơn?`
- L215 `## What does the button actually have?` → `## Button thật ra đang cầm gì?`
- L225 `## How does the button respond to a third-pot c-bet?` → `## Button phản ứng thế nào trước c-bet một phần ba pot?`
- L237 `## Why is the EQR 109.6% when the big blind is out of position?` → `## Vì sao EQR là 109,6% khi big blind không có vị trí?`
- L253 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L267 `## Check it yourself` → `## Tự kiểm tra`
- L275 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. What does SPR mean in poker? → `SPR là viết tắt của gì trong poker?`
2. How many bets can you make at an SPR of 4? → `Với SPR 4 thì bet được bao nhiêu lần?`
3. Should the three-bettor always c-bet? → `Người 3-bet có nên luôn c-bet không?`
4. Why does the button have no pocket aces or kings? → `Vì sao button không có pocket A hay pocket K?`
5. Why is the small size used more than the big one? → `Vì sao size nhỏ được dùng nhiều hơn size lớn?`
6. Do these numbers hold at my stake? → `Những con số này có đúng ở stake tôi đang chơi không?`
#### Từ khóa đã hấp thụ
- spr poker (20) · spr poker là gì (10) (bài này là chủ) → seoTitle, H2 L184, tag 1–2
- spr trong poker là gì (autocomplete) → câu H2 L184 + tag 3
- 3bet pot · 3 bet pot (10 mỗi từ) → văn xuôi «pot 3-bet» (đúng chữ app) + tag
#### Ghi chú
- SPR của spot = 89 ÷ 22,5 ≈ 4,0 (chép EN); không bao giờ viết «SPR là gì» đứng một mình (110 = dầu mỏ/lãi suất) — luôn kèm «trong poker».
- Size nhỏ 57,8% là do hình dạng range, không phải do SPR thấp — giữ đúng lập luận EN; check 0,0% là giá trị màn hình.
- Ở bài này big blind là người 3-bet nên bet đầu của nó ĐƯỢC gọi là c-bet. Link `/vi/blog/holdem-3bet` và `/vi/blog/holdem-continuation-bet` chỉ ở đúng chỗ EN có link; không dùng «3 bet»/«3bet poker» làm head.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L110 · L112 · L114 · L119 · L120 · L121 · L125 · L133 · L136 · L137 · L139 · L143 · L145 · L147 · L151 · L152 · L153 · L155 · L157 · L159 · L167 · L168 · L169 · L170 · L171 · L172 · L174 · L178 · L180 · L182 · L186 · L190 · L191 · L193 · L195 · L196 · L197 · L199 · L201 · L205 · L209 · L211 · L213 · L217 · L221 · L223 · L229 · L231 · L233 · L237 · L239 · L243 · L245 · L247 · L251 · L257 · L258 · L260 · L264 · L271 · L279 · L283 · L287 · L295

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L297: **Q. Do these numbers hold at my stake?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 아래 넷은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
- *   🔴 **`poker spr` = `spr poker` = `spr in poker`는 24개월 배열이 완전히 같은 «한 클러스터»다.
- *      총합은 1,440이 아니라 480이다. 더하지 마라.**
- *   🔴 **`what is spr` 720은 포커가 아니다** — 자동완성이 spring water·sprinting·spreadsheet·
- *   🔴 **`stack to pot ratio` 50은 12개월 −59.3%로 반토막**이다. 풀네임을 제목에 넣을 근거가 없다 →
- *   🔴 **`3bet pot` 축은 US 볼륨 10이 상한**이다(17개 변형 중 나머지 전부 0).
- *      **볼륨 0 + 강자 정면 → 제목 조준 금지.** 본문 H2로만 쓴다.
- *   ⚠ `spr poker calculator` · `spr poker chart` · `stack to pot ratio calculator`는
- *   🔴 **차별화 필수 지점** — ①편(`a-high-board-cbet`)이 이미 A하이 보드에서
- *   🔴 **2026-08-21 정정 — `polarized range poker` 태그를 ⑩(`3bet-pot-low-board`)에 넘겼다. 되돌리지 마라.**
- *   🔴 **백도어 플러시 15.9%는 쓰지 않는다** — 콤보 검산이 10 대 11로 갈렸고 KO 본문도 인용하지 않는다.

### 하지 말 것 (EN 원문 계약 ⑧)
- BB 63콤보 전부 một đôi 이상. Check는 **화면값 0,0%/0,0콤보**이고 원시 출력에는 41콤보에 잔여(최대 K♥K♦ 0,09%, 합 0,01콤보 미만) — «솔버 노이즈, 0으로 읽는다». «단 한 콤보도 체크 안 함(완전 0)»·«lần nào cũng»으로 되돌리지 않는다(«mỗi combo đều trên 99,9%»).
- 작은 bet 57,8%는 같은 SPR 4의 ⑨/⑩과 대비. **낮은 SPR 자체가 작은 사이징의 이유가 아님**(EN 현행 «Because of the shape of the range, not the depth of the stack»).
- FAQ 산술: 플랍·턴 2/3팟 = 14,9 → 34,5bb, **남은 39,6bb는 리버 팟의 약 1/3** → 세 번째 벳이 89bb 잔여 전부 — turn·river 계산값 아님.
- BTN 130콤보는 «이론적으로 옳은 방어»가 아니라 **이 솔브에 넣은 프리플랍 설정**.
- MDF 전제는 «성립하지 않는다»가 아니라 **«기반이 약하다»**(EN 현행 «stands on weak ground»); 작은 사이즈가 60콤보 미들 페어를 «가격에 맞게 한다»는 것도 **의심스럽다** — BB 전체 레인지 상대로 19,8%를 넘는 건 QQ·JJ뿐, 99–33은 7,6–9,2%. BTN 대응은 레인지 해석이며 no post-check node.
- SPR 정의 H2(EN «What is SPR…» 자리 현지화)의 정의 = «SPR — stack hiệu dụng chia cho pot»(effective 필수) + 이 스팟 값은 EN 축어(89 ÷ 22,5 ≈ 4,0)만.
- «underpairs … blocked by the ace and king» → §0-0 정정(«có A và K nằm phía trên»).
- 앱 ⑧ 해설문(낮은 SPR → 작은 벳 인과)은 폐기 — 옮기지 않는다.

---

## ⑨ 3bet-pot-bet-sizing — EN updated 2026-09-26 · masterUpdated = "2026-09-26"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two Sizes Offered, One Size Used",
seoTitle: "98.4% Bet One Size — Poker Bet Sizing on a Wet Board",
desc: "The solver had two bet sizes on this two-tone flop and put 98.4% of its range into one. Two thirds of the pot out-prices 38 of 40 draws on one-card odds.",
tldr: "On Q♥T♥7♠ in a 3-bet pot the big blind bets two thirds of the pot (14.9bb) 98.4% of the time. The small size gets 0.7% and checking 0.8% — together barely one combo out of 73. One board earlier, on A♦K♠2♥, the same range split its sizing 57.8/42.2. What collapsed the split is not strength but price. On a board this wet the size is decided by what it costs the caller to keep drawing, and the small bet does not charge enough.",
category: "strategy",
date: "2026-08-20",
updated: "2026-09-26",
keepImagesInBody: true,
readTime: "12 min",
emoji: "💧",
image: "/images/gto-3bp-dynamic-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on a Q-T-7 two-tone three-bet pot, the big blind's 13x13 grid almost entirely one color with the two-thirds size reading 98.4%",
tags: ["poker bet sizing", "wet board poker", "geometric bet sizing", "overbet poker", "how much to bet in poker", "gto solver"],
# title 길이 32
# seoTitle 길이 52
# desc 길이 153
# tldr 길이 427
```

### 구조 (EN content L141~L371 · L## = EN 파일 줄)
#### 헤딩
- L158 ## What conditions produced these numbers?
- L174 ## Does the range really use only one size?
- L195 ## Why does a wet board want one big size?
- L241 ## What is geometric bet sizing?
- L259 ## Why do hands with no pair bet here?
- L273 ## What does the button actually have?
- L299 ## Why is the EQR 117.8% when equity is 58.3%?
- L317 ## What changes at the table?
- L333 ## Check it yourself
- L343 ## FAQ

#### FAQ 7문항
- L345 **Q. How much should you bet in poker?**
- L349 **Q. Why bet big on a wet board?**
- L353 **Q. What is geometric bet sizing?**
- L357 **Q. Should I use an overbet instead?**
- L361 **Q. Can you bet A-K with no pair here?**
- L365 **Q. What if my opponent calls draws regardless of price?**
- L369 **Q. Do these numbers transfer to my game?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L148 :::stripe
- L153 :::
- L231 :::note[⚠ MDF treats the bet as a pure bluff holding no equity of its own. Most of what bets here is not that — 24.7% of the big blind's range is a gutshot, and a gutshot that gives up still had real equity when it fired. Treat 60…
- L237 :::pull[Your hand does not choose the size. What your opponent can afford to call does.]:::
- L239 :::note[⚠ Same texture, opposite conclusion — and both are right, because the seats are swapped. In a **single-raised pot** the top of a two-tone broadway flop belongs to the preflop raiser, and the big blind, who only called, che…
- L277 ![Range composition on a Q-T-7 two-tone three-bet pot, with overpairs only on the big blind's side and second pair only on the button's](/images/gto-3bp-dynamic-ranges-en.webp "Q-T-7 three-bet pot · the overpair row belongs to the…
- L315 :::note[Every EQR in this series is quoted as the solver displays it. Dividing the rounded equity and EV yourself can land a decimal off — that is rounding, not disagreement.]:::
- L328 :::readnext[Keep reading]
- L331 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L141 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L145 /en/solver ✅ 도구
- L210 /en/blog/k-high-board-cbet "thumb:/images/gto-srp-dry-king-oop-en.webp" ✅
- L235 /en/blog/holdem-drawing-odds ✅
- L235 /en/blog/holdem-pot-odds ✅
- L239 /en/blog/broadway-board-strategy "thumb:/images/gto-srp-broadway-oop-en.webp" ✅
- L239 /en/blog/holdem-continuation-bet ✅
- L277 /images/gto-3bp-dynamic-ranges-en.webp "Q-T-7 three-bet pot · the overpair row belongs to the big blind, the second-pai img
- L293 /en/blog/paired-board-strategy ✅
- L313 /en/blog/holdem-position-play ✅
- L322 /en/blog/3bet-pot-low-board ✅
- L335 /en/solver ✅ 도구
- L341 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L351 /en/blog/3bet-pot-low-board ✅

### 키워드 (출처 L-G §1·§2·§3·§4-A·§7-4)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| bet sizing poker · size bet (poker) · geometric bet sizing · overbet poker | 각 10 | FAQ 문구 · 산문 «sizing / cỡ bet» |
| bet size trong poker · size bet là gì · bet size là gì | `-`(자동완성) | FAQ «Bet size trong poker là gì và chọn thế nào?» |
| 함정 🚫 | — | «sizing là gì»(CSS) · «overbet là gì» 단독 · 프리플랍 사이징(open·3-bet = L-D) · «gto poker» |

### PAA·자동완성 (축어)
- PAA(bet sizing poker): What is the 15/25/35 rule in poker? · **What does bet size mean?** · **What is geometric bet sizing in poker?**
- 자동완성: sizing poker → **sizing trong poker** · geometric sizing poker / size bet là gì → **bet size là gì** · **bet size trong poker** / bet size là gì → bet size và stack ratio / overbet poker → turn · river · jam

### 현지 SERP (L-G §4-D ⑬·§7-4)
- vi 대응 글: wikipoker `/bet-sizing/`(2021) · `/size-bet-luy-tien/`(2024 · H2 «Size bet lũy tiến là gì?») · `/overbet/` · `/size-bet-nho-va-size-bet-lon/` — 순위 밖. 1페이지 = 영어 원본.
- 우리가 더 줄 것: ① Q-10-7 two-tone에서 큰 사이즈 98,4%의 «가격» 산수 ② 드로우 38콤보의 한 장/두 장 odds 구분 ③ 앱 동선.
- 처방: FAQ «How much should you bet…» → «Bet size trong poker là gì và chọn thế nào?» · «What is geometric bet sizing?» → «Geometric bet sizing (size bet lũy tiến) là gì?» · overbet = 차용어 유지.

### 소유표 (계획 §3-C)
- 주인인 검색어: 없음(롱테일 «bet size trong poker»·«geometric bet sizing» FAQ 흡수만).
- 쓰면 안 되는 헤드: «gto poker»·«range poker» · 프리플랍 사이징(L-D).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Hai size được đưa ra, chỉ một size được dùng (44 ký tự)
seoTitle: 98,4% dồn vào một size — Bet sizing poker trên board ướt (56 ký tự)
desc: Solver có hai size trên flop hai chất này và dồn 98,4% range vào một. Hai phần ba pot ép giá 38 trong 40 draw theo odds một lá — chọn bet size poker thế nào. (157 ký tự)
tldr: Trên Q♥10♥7♠ trong pot 3-bet, big blind bet hai phần ba pot (14,9bb) với tần suất 98,4%. Size nhỏ chỉ được 0,7% và check 0,8% — cộng lại chưa tới một combo trong 73. Một board trước đó, trên A♦K♠2♥, cùng range này chia sizing 57,8/42,2. Thứ làm cú chia sụp đổ không phải sức mạnh mà là giá. Trên board ướt thế này, size do cái giá người call phải trả để tiếp tục draw quyết định, và bet nhỏ không bắt họ trả đủ. (411 ký tự)
tags: ["bet sizing poker", "bet size trong poker", "wet board poker", "geometric bet sizing", "overbet poker", "ví dụ solver"]
#### H2 (EN → VI)
- L158 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L174 `## Does the range really use only one size?` → `## Range này thật sự chỉ dùng một size sao?`
- L195 `## Why does a wet board want one big size?` → `## Vì sao board ướt cần một size lớn duy nhất?`
- L241 `## What is geometric bet sizing?` → `## Geometric bet sizing là gì?`
- L259 `## Why do hands with no pair bet here?` → `## Vì sao những tay bài chưa có đôi vẫn bet ở đây?`
- L273 `## What does the button actually have?` → `## Button thật ra đang cầm gì?`
- L299 `## Why is the EQR 117.8% when equity is 58.3%?` → `## Vì sao EQR là 117,8% khi equity là 58,3%?`
- L317 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L333 `## Check it yourself` → `## Tự kiểm tra`
- L343 `## FAQ` → `## Câu hỏi thường gặp`
#### FAQ (EN → VI)
1. How much should you bet in poker? → `Bet size trong poker là gì và chọn thế nào?`
2. Why bet big on a wet board? → `Vì sao nên bet lớn trên board ướt?`
3. What is geometric bet sizing? → `Geometric bet sizing (size bet lũy tiến) là gì?`
4. Should I use an overbet instead? → `Thay vào đó có nên overbet không?`
5. Can you bet A-K with no pair here? → `A-K chưa có đôi thì bet được ở đây không?`
6. What if my opponent calls draws regardless of price? → `Nếu đối thủ cứ call draw bất chấp giá thì sao?`
7. Do these numbers transfer to my game? → `Những con số này có mang sang ván tôi chơi được không?`
#### Từ khóa đã hấp thụ
- bet sizing poker (10) → seoTitle + tag 1
- bet size trong poker · size bet là gì · bet size là gì (autocomplete) → FAQ 1 + tag 2
- geometric bet sizing (10) → H2 L241 + FAQ 3 + tag; «size bet lũy tiến» chỉ trong ngoặc
- overbet poker (10) → FAQ 4 + tag (giữ loanword «overbet», không «overbet là gì» đứng một mình)
#### Ghi chú
- 🔴 Lỗi EN đã biết: JJ chỉ có Q là overcard duy nhất (không phải «hai overcard»); câu trả lời H2 L174 «chỉ dùng một size?» thực chất là **có** — viết theo nghĩa đã sửa.
- Tách rõ odds một lá / hai lá cho 38 combo draw như thân EN; không bàn sizing preflop (open/3-bet thuộc bài khác).
- Ở bài này big blind là người 3-bet → bet đầu của nó là c-bet (được phép gọi vậy).

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L141 · L143 · L150 · L151 · L152 · L156 · L160 · L164 · L166 · L167 · L168 · L172 · L176 · L180 · L181 · L182 · L192 · L193 · L201 · L202 · L203 · L204 · L205 · L206 · L208 · L210 · L212 · L214 · L216 · L217 · L218 · L219 · L221 · L223 · L225 · L227 · L229 · L231 · L233 · L239 · L243 · L247 · L248 · L249 · L251 · L253 · L255 · L261 · L265 · L266 · L267 · L275 · L281 · L282 · L283 · L284 · L285 · L286 · L287 · L291 · L293 · L297 · L299 · L301 · L305 · L307 · L309 · L311 · L313 · L321 · L322 · L323 · L324 · L325 · L326 · L330 · L337 · L341 · L347 · L351 · L359

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L257: And it is why the big size is not only about this street. The by-the-river draw equities are all "if I get to see both cards" numbers, and a…
- L357: **Q. Should I use an overbet instead?**…
- L365: **Q. What if my opponent calls draws regardless of price?**…
- L369: **Q. Do these numbers transfer to my game?**…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 아래 다섯은 **KO 초판이 틀렸던 자리**다. EN에서 되살리지 마라:
- *     ⚠ **단 «최강 드로우»로 일반화하면 안 된다 — 아래 «2차 검수»가 그 부분을 뒤집었다.**
- * ▶ 🔴 **서치 — 뱅크의 ⑨ 배정이 필라와 충돌해 폐기했다** (2026-08-20 라쿠 English/US 실측)
- *   ★**`poker bet sizing` 110 · SEO난이도 8** — 주 키워드로 교체. 🔴 **`bet sizing poker`와 같은
- *     한 클러스터다**(15개 제출 → 14개 반환, 중복제거됨). **더하지 마라.** 12m −30% 하락 중.
- *   ★**`wet board poker` 50 · DA13** — 🔴 **`wet flop poker`는 볼륨 null.**
- * ▶ 카니발 — 🔴 **c벳 필라가 «거의 같은 보드»에 정반대 결론을 이미 싣고 있다**
- *     ⚠ 리버 39.6은 팟 121.3의 **32.6% ≈ 33%**라 「큰 벳 세 번」이 아니다
- * ═══ 2026-08-20 2차 검수 (적대 3렌즈 + 2차 교열 2편) — 되돌리지 마라 ═══
- * 🔴 **«이 보드의 최강 드로우 = 12아웃»이 거짓이었다.** 딜러 렌즈와 검산 렌즈가 **독립으로 수렴**했고
- * 🔴 **분모는 133이 아니라 «드로우 40콤보»다.** 「133콤보 중 2개」로 쓰면 완성 핸드까지 가격에서
- * 🔴 **「1/3은 모든 드로우가 넘는 가격」도 거짓이다.** 1/3(19.84%)을 넘는 건 **4콤보**뿐이고
- *    OESD 17.0% · 거트샷 8.5%는 못 넘는다. 「every draw clears 19.8%」로 되돌리지 마라.
- * 🔴 **84.1%(AK2 「드로우 없음」)를 뺐다** — ⑧편이 백도어 15.9%를 「콤보 검산 10 대 11」로 금지했는데
- *    ⚠ **「스트레이트 드로우도 불가능」이라고 쓰면 안 된다** — QJ는 T 한 장, 45는 휠 거트샷이다(2차 교열이 잡음).
- * 🔴 즉시 오즈만으로 값매기던 것을 바로잡았다(두 장 54.1 / 45.0 / 31.5 / 16.5% + 포지션·뒷돈·레이즈).
- *    ⚠ OESD 두 장 31.5%는 2/3 요구값을 넘으므로 **표의 ❌(한 장 기준)와 헷갈리지 않게 «한 장/두 장»을 명시할 것.**
- * 🔴 MDF 60.2%에 「순수 블러프 가정」 단서(:::note) · 레이즈 대응에 탑 페어 자리 · 하트 턴 양면 서술 추가.
- * 🪶 본문에 **🔴 이모지를 쓰지 마라** — 이 레포에서 헤더 주석 전용 마커다(★·⚠·🪶만 본문에 쓴다).

### 하지 말 것 (EN 원문 계약 ⑨)
- **98,4%** 큰 사이즈와 **0,8%** 체크 고정. 서로 배타적인 live draws 30,1%와 backdoor를 구분.
- 백도어 정의는 «runner-runner 하트»가 아니라 «같은 무늬 두 장 연속(하트 1장 보유 → 하트, 7♠ 옆 스페이드 2장 보유 → 스페이드)».
- BTN draw 40콤보 중 즉시 2/3 가격을 넘는 2콤보; 1/3에서는 4콤보. 이는 **한 장 odds**, river까지 공짜로 보는 equity 아님 — desc·Trả lời nhanh·소제목·FAQ에 이 구분이 전부 있다: 두 장 남은 상태로 BB 전체 레인지 상대 **38콤보 중 30콤보는 여전히 28,5% 초과**, A-K 거샷 **37,6%–42,9%** → 큰 사이즈는 드로우를 «fold시키는» 게 아니라 «비용을 물린다»(«bắt draw trả giá»).
- BTN의 bare flush draw 0, 네 two-heart hand 모두 combo draw; bare 9아웃 flush draw는 1/3도 못 넘는다(**9 ÷ 47 = 19,1%**) — 그런 핸드는 BB만 보유. BB two-heart 4콤보 전부 A♥ 포함.
- JJ sảnh 경로 셋(K9 · AK · **98**); underpair는 «Q 아래», JJ만 두 브로드웨이 사이.
- 🔴 EN L229 «surrounded by two overcards» → §0-0 **AO-2 정정**(JJ는 Q만 위에 있다).
- 🔴 EN L176 «Effectively, no — it uses one.» → §0-0 정정(«Thực tế là có — chỉ dùng một size.»).
- A-K 개별 빈도: ⑩ 보드 **95,9%–97,9%**, 이 보드 **97,8%–99,9%** 큰 사이즈.
- MDF 60,2%는 call 할당량이 아님(«상한»이라는 말도 쓰지 않는다).
- BB set 비율 8,2%가 BTN 6,8%보다 높아도 개수는 **6 대 9**. EQR 117,8%가 ⑧보다 높지만 EV는 **15,46 < 16,99bb**.
- 🪶 EN-먼저 미판정 문구: «32 combos of A-K and A-J» 1회 — EN 축어대로 옮기고 판정하지 않는다.

---

## ⑩ 3bet-pot-low-board — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Three Combos Hit This Flop — and It Still Bets 97.8%",
seoTitle: "A Polarized Range Bets 97.8% on a Board It Missed",
desc: "In a 3-bet pot on 8-5-2, only three combos in the big blind's range paired the board — and it fires two-thirds pot 97.8% of the time. Here is why.",
tldr: "After a big blind three-bet and a button call, the flop 8♦5♣2♠ gets a two-thirds-pot bet 97.8% of the time. The odd part: of the big blind's 83 combos, exactly three paired this board — the A5s — and none of 88, 55 or 22 is in the range at all. The bet goes anyway because the range splits into 36 combos of overpairs and 40 combos of ace-high with almost nothing in between — only the three A5s. A polarized shape bets big.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🎲",
image: "/images/gto-3bp-low-oop-en.webp",
imageAlt: "HoldemMaster GTO solver results for an 8-5-2 rainbow flop in a three-bet pot, the big blind's grid almost entirely coloured for the large bet",
tags: ["polarized range poker", "dry board poker", "3-bet pot flop", "overpair strategy", "gto solver"],
# title 길이 52
# seoTitle 길이 49
# desc 길이 146
# tldr 길이 424
```

### 구조 (EN content L87~L243 · L## = EN 파일 줄)
#### 헤딩
- L104 ## What conditions produced these numbers?
- L120 ## How often does the three-bettor actually bet?
- L132 ## Did only three combos really pair this board?
- L149 ## Why bet big with a range that missed?
- L168 ## Why are all the sets on the other side?
- L190 ## Why does the caller realize more equity here than in the last two spots?
- L210 ## What changes at the table?
- L223 ## Check it yourself

#### FAQ 4문항
- L229 **Q. Should you c-bet A-K on a low board in a three-bet pot?**
- L233 **Q. What does a polarized range mean?**
- L237 **Q. Why does the three-bettor have no sets?**
- L241 **Q. Can these numbers go straight into a live game?**

#### 표 7개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L94 :::stripe
- L99 :::
- L172 ![Range composition infographic comparing the big blind and button hand categories on an 8-5-2 board in a three-bet pot](/images/gto-3bp-low-ranges-en.webp "8-5-2 in a three-bet pot · category split — trips only on the button, cle…
- L218 :::readnext[Keep reading]
- L221 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L91 /en/solver ✅ 도구
- L106 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L106 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅
- L130 /en/blog/3bet-pot-bet-sizing ✅
- L164 /en/blog/3bet-pot-cbet "thumb:/images/gto-3bp-ace-king-oop-en.webp" ✅
- L166 /en/blog/holdem-strategy ✅
- L172 /images/gto-3bp-low-ranges-en.webp "8-5-2 in a three-bet pot · category split — trips only on the button, clearly m img
- L215 /en/blog/3bet-pot-cbet ✅
- L215 /en/blog/holdem-3bet "thumb:/images/holdem-3bet-hero.webp" ✅
- L225 /en/solver ✅ 도구
- L225 /en/solver ✅ 도구

### 키워드 (출처 L-G §2·§4-A·§4-D ⑬·§7-10)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| polarized range (poker) | 10 | FAQ «Range phân cực (polarized) là gì?» |
| 3bet pot | 10 | 산문 «pot 3-bet» |
| 함정 🚫 | — | 🔴 «range poker» 70·«range trong poker là gì»(→ `/vi/solver`·`/vi/hand-chart`) — 제목에 «range» 단독 금지 · «range phân cực» 자동완성 0(→ 통계·포토샵) · «polarized là gì»(편광) |

### PAA·자동완성 (축어)
- PAA(polarized range poker): **What is a polarized range in poker?** · What does range bet mean in poker?
- 자동완성: polarized range → linear vs polarized · polarized 3bet range

### 현지 SERP (L-G §4-D ⑬·§7-10)
- vi 대응 글: wikipoker `/range-phan-cuc-va-range-tuyen-tinh/`(2024-10-23 · H2 «Range phân cực là gì?» · «Range tuyến tính (Merged) là gì?») · `/3-bet-pot-poker-khong-co-vi-tri/` — 순위 밖(wikipoker는 «range poker» 1위 재사용 페이지).
- 우리가 더 줄 것: ① 8-5-2에서 보드와 직접 맞은 3콤보 vs 기존 overpair 36콤보 ② EQR 시소(에퀴티 고정일 때) ③ 앱 동선.
- 처방: FAQ «What does a polarized range mean?» → «Range phân cực (polarized) là gì?» · linear ≠ merged(계획 §3-A ④ B-7).

### 소유표 (계획 §3-C ⑪)
- 주인인 검색어: 없음(롱테일 «polarized range» FAQ 흡수만).
- 쓰면 안 되는 헤드: «range poker»·«range trong poker là gì»·«gto poker».

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Ba combo trúng flop — mà vẫn bet 97,8% (38 ký tự)
seoTitle: Trượt board mà vẫn bet 97,8% — Range phân cực (polarized) (57 ký tự)
desc: Pot 3-bet trên 8-5-2: chỉ ba combo trong range big blind có đôi với board — mà vẫn nã hai phần ba pot 97,8% số lần. Range phân cực là gì và vì sao bet lớn. (155 ký tự)
tldr: Sau khi big blind 3-bet và button call, flop 8♦5♣2♠ nhận một cú bet hai phần ba pot với tần suất 97,8%. Điểm lạ: trong 83 combo của big blind, đúng ba combo có đôi với board — A5s — và không có 88, 55 hay 22 nào trong range cả. Nó vẫn bet vì range chia thành 36 combo overpair và 40 combo ace-high, ở giữa gần như chẳng có gì — chỉ ba combo A5s. Range có hình phân cực thì bet lớn. (381 ký tự)
tags: ["polarized range", "range phân cực", "dry board poker", "pot 3-bet", "chiến lược overpair", "ví dụ solver"]
#### H2 (EN → VI)
- L104 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L120 `## How often does the three-bettor actually bet?` → `## Người 3-bet thật sự bet bao nhiêu phần trăm?`
- L132 `## Did only three combos really pair this board?` → `## Thật sự chỉ có ba combo có đôi với board này?`
- L149 `## Why bet big with a range that missed?` → `## Trượt board rồi, vì sao vẫn bet lớn?`
- L168 `## Why are all the sets on the other side?` → `## Vì sao toàn bộ set lại nằm bên kia?`
- L190 `## Why does the caller realize more equity here than in the last two spots?` → `## Vì sao người call hiện thực hóa equity ở đây tốt hơn hai spot trước?`
- L210 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L223 `## Check it yourself` → `## Tự kiểm tra`
- (EN không có `## FAQ` → không thêm heading, chỉ dịch dòng Q.)
#### FAQ (EN → VI)
1. Should you c-bet A-K on a low board in a three-bet pot? → `Trong pot 3-bet, có nên c-bet A-K trên board thấp không?`
2. What does a polarized range mean? → `Range phân cực (polarized) là gì?`
3. Why does the three-bettor have no sets? → `Vì sao người 3-bet không có set nào?`
4. Can these numbers go straight into a live game? → `Có thể bê nguyên những con số này ra bàn live không?`
#### Từ khóa đã hấp thụ
- polarized range (poker) (10) → FAQ 2 + tag 1 (tag dùng «polarized range», tránh chuỗi «range poker»); «range phân cực» tag 2 (dạng Việt, chỉ đi kèm «polarized»)
- 3bet pot (10) → văn xuôi «pot 3-bet» + tag
#### Ghi chú
- «range» không đứng một mình ở title/seoTitle (seoTitle dùng «Range phân cực (polarized)»); không «range poker»/«range trong poker là gì».
- Range tuyến tính (linear) ≠ merged — không đánh đồng hai khái niệm khi đối chiếu với «phân cực».
- Big blind là người 3-bet → bet đầu gọi là c-bet được; set đều ở phía button (88·55·22).

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L87 · L89 · L96 · L97 · L98 · L102 · L110 · L112 · L113 · L114 · L118 · L122 · L126 · L127 · L128 · L134 · L138 · L139 · L140 · L141 · L142 · L143 · L145 · L147 · L153 · L155 · L162 · L164 · L166 · L172 · L176 · L177 · L178 · L179 · L180 · L181 · L182 · L188 · L192 · L196 · L198 · L202 · L203 · L204 · L206 · L208 · L212 · L213 · L214 · L216 · L219 · L220 · L227 · L231 · L235

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L212: - **Do not default to "I missed, so I check" on a low dry board.** In a three-bet pot your opponent missed too — **58.3%** of the button's r…
- L239: A. Because small pocket pairs like 88, 55 and 22 get called or folded preflop rather than three-bet. So all nine set combos on this board si…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   🔴 착수 조건이었던 «KO가 검수 종료 상태»는 충족됐다 — M-027 3차 재판정에서 D·F 대상 전건 해소.
- *     🔴 이 세 줄이 **상호배타**다. 「거트샷을 뺀 나머지가 78.3」으로 쓰지 마라 —
- *   🔴 **US 볼륨이 거의 안 잡힌다** — `3bet pot flop strategy`·`low flop 3bet pot`·`c bet dry flop`·
- *   🔴 **카니발 정리 — 키워드 팩이 실제로 하나 잡았다.**
- *   🔴 **상위글의 정설이 이 글과 정면으로 갈린다** — "On dry boards or in 3-bet pots, bet small with
- * 🔴 **2026-08-21 (검수장 M-032 §1) — readnext 둘째 카드를 ⑧ → ⑪로 되돌렸다. 다시 바꾸지 마라.**
- *   발행 당시 EN ⑪이 없어 ⑧으로 «대체»한 것이었는데 **⑪ 발행(`ecb07811`) 후 되돌리지 않았다.**
- *   🔴 **규율(검수장 제안 · 수용)**: **미발행 대체 링크는 «그 편이 발행되는 커밋»에서 되돌리고,
- * 🔴 KO ⑩이 세 회차 검수로 확정한 것 — 번역에서 떨어뜨리지 마라 (고지 문장 포함):
- *   ① 드로우 3행은 **상호배타**(위 참조). 여집합으로 흡수 금지.
- *   ④ 「58.3%가 못 맞았다」를 「58.3%가 접는다」로 **환산하지 마라**(대응 노드가 없다). 3사본 전부.

### 하지 말 것 (EN 원문 계약 ⑩)
- 보드와 직접 페어가 된 것은 A5s **3콤보**; 기존 포켓 overpair **36콤보**가 별도로 있어 «레인지 전체가 못 맞혔다»는 뜻 아님(«cả range trượt hoàn toàn» 금지). EN 제목 «Three Combos Hit…»를 따르되 본문에서 반드시 구분.
- tldr «사이에 거의 아무것도 없다 — A5s 세 콤보뿐». A-high 40콤보, A4s gutshot 4콤보.
- A-K는 «페어도 드로우도 없음»이 아니라 **즉시 드로우 없음, 백도어만**(runner-runner wheel + 수딧 3콤보의 backdoor flush draw). draw 표 4,8 + 16,9 + 78,3%.
- BTN set 9콤보 독점, AA/KK는 그것 외의 가치·블러프 구성에 별도 판단 필요. BTN 58,3% missed ≠ 58,3% folds; 반응 노드 없음.
- EQR 연동은 **«에퀴티가 고정일 때»만** 한쪽 이득 = 다른 쪽 손실 — «ở đây» 한 사실의 양면. BTN EQR 15,2 điểm 차이와 실제 EV/pot 점유율 차이 **6,1 điểm**을 구분.
- SPR 불릿: «플랍에 벳하는 순간 올인이 사실상 결정»은 폐기 — 남은 스택은 1–2벳 거리, **턴·리버는 이 솔브에 없고** 런아웃·상대가 답을 바꿀 수 있다.
- EN 현행 캡션(4b353f92): «clearly more overpairs» · FAQ «puts 97.8% of the range into the large size».
- 🪶 «nearly double»은 EN 현행에 0회 — 쓰지 않는다.
- range phân cực(polarized) ≠ range tuyến tính(linear) ≠ merged(§3-A ④ B-7) — FAQ 답은 EN 정의 뜻만.

---

## ⑪ blind-battle-cbet — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "The Player With No Position Bets First — 67.4% of the Time",
seoTitle: "Blind vs Blind GTO: Out of Position, Betting 67.4%",
desc: "Blind vs blind on K-T-6, the small blind is first to act with no position — and bets 67.4%. Here is how a range edge drags equity realization past 100%.",
tldr: "After a small-blind open and a big-blind call, the K♥T♦6♠ flop gets a bet 67.4% of the time and a check 32.6%. In the seven single-raised pots earlier in this series the out-of-position player bet only 0.1% to 23.7% — and two things changed, not one. Here the out-of-position player is the raiser rather than the caller, and the board favors that range. Together they push the out-of-position equity realization to 103.1%.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "⚔️",
image: "/images/gto-sb-king-mid-oop-en.webp",
imageAlt: "HoldemMaster GTO solver showing the small blind's range on a K-T-6 rainbow flop, most of the grid coloured orange for the bet",
tags: ["blind vs blind poker", "small blind open", "king high flop", "equity realization", "gto solver"],
# title 길이 58
# seoTitle 길이 50
# desc 길이 152
# tldr 길이 422
```

### 구조 (EN content L110~L305 · L## = EN 파일 줄)
#### 헤딩
- L127 ## What conditions produced these numbers?
- L147 ## How often does the small blind actually bet?
- L171 ## Why does the out-of-position player lead here?
- L193 ## Why 67% here when a three-bet pot is 100%?
- L205 ## How do the two ranges differ?
- L242 ## Why is equity realization 103.1% without position?
- L272 ## What changes at the table?
- L285 ## Check it yourself

#### FAQ 4문항
- L291 **Q. Should the small blind always c-bet blind versus blind?**
- L295 **Q. Is being out of position always bad in poker?**
- L299 **Q. Why bet as small as a third of the pot?**
- L303 **Q. Why is 6-6 the big blind's only set on this board?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L117 :::stripe
- L122 :::
- L189 :::pull[Being out of position does not decide whether you bet first — how your range meets this particular board does most of the work.]:::
- L203 :::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 67.4% itself can move. Read it as "small and wide is the answer *under these conditions*…
- L209 ![Range composition infographic comparing the small blind and big blind hand classes on a K-T-6 board](/images/gto-sb-king-mid-ranges-en.webp "K-T-6 blind vs blind · class-by-class composition — the big blind holds about 10 points…
- L280 :::readnext[Keep reading]
- L283 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L110 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L114 /en/solver ✅ 도구
- L125 /en/blog/blind-battle-connected-board ✅
- L173 /en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp" ✅
- L173 /en/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp" ✅
- L185 /en/blog/blind-battle-connected-board ✅
- L191 /en/blog/blind-battle-connected-board ✅
- L201 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L209 /images/gto-sb-king-mid-ranges-en.webp "K-T-6 blind vs blind · class-by-class composition — the big blind holds about 1 img
- L266 /en/blog/blind-battle-connected-board ✅
- L270 /en/blog/holdem-position-play "thumb:/images/holdem-position-play-hero.webp" ✅
- L274 /en/blog/blind-battle-connected-board ✅
- L275 /en/blog/ace-paired-board-strategy ✅
- L278 /en/blog/holdem-continuation-bet "thumb:/images/holdem-continuation-bet-hero.webp" ✅
- L287 /en/solver ✅ 도구
- L287 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§3·§4-D ⑩·§7-9)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| blind vs blind | 10 | 🔴 **포커 0/10 오염** — seoTitle·tags 단독 금지 · 쓰려면 «poker»·«SB vs BB» 결합 |
| blind vs blind poker | 0 | — |
| 함정 🚫 | — | «blind poker là gì»·«small blind big blind là gì»(L-A `holdem-blind-meaning` 몫) · «gto poker»(EN seoTitle «Blind vs Blind GTO» → «solver» 문구 · §3-C ⑪) |

### PAA·자동완성 (축어)
- 자동완성: 🔴 blind vs blind → «and deaf cane» · «photo lineup» · «double blind» / blind vs blind poker → **blind poker là gì** · **blind trong poker là gì**(L-A) / small blind vs big blind → **small blind big blind là gì**(L-A)
- PAA: 없음(SERP 비포커)

### 현지 SERP (L-G §4-D ⑩·§7-9)
- `blind vs blind` 1페이지 = 장님 체스 영상팩 · kenh14 축구 · nature.com — 포커 0. vi 대응 글: wikipoker `/blind-doi-dau-blind/`(2024-07-23 · H1 «Làm chủ tình huống blind đối đầu blind…» · «bet nhỏ 100% số lần trên những mặt bài rainbow, hoặc two-tone với 9-cao trở lên … check 100% … Flop từ 8-cao trở xuống») — 순위 밖.
- 우리가 더 줄 것: ① 단순화 규칙을 수치로 보정 — K-10-6 c-bet 67,4% · 저연결 9,6%(⑫) · A-A-6 80,1%(⑬) ② «OOP 오프너라서»가 아니라 «보드×레인지»라는 근거 ③ 앱 동선.
- 처방: 산문 표기 «blind đối đầu blind (blind vs blind)» · 새 FAQ 없음(§1-E · EN에 FAQ H2 없음 — 구조 그대로).

### 소유표 (계획 §3-A ⑦·§3-C ⑪)
- 주인인 검색어: 없음(그룹 A).
- 쓰면 안 되는 헤드: «blind vs blind» 단독 · «gto poker»·«range poker» · «blind là gì»류(L-A).

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Người không có vị trí lại bet trước — 67,4% số lần (50 ký tự)
seoTitle: Không có vị trí vẫn bet 67,4% — SB vs BB theo solver (52 ký tự)
desc: Blind đối đầu blind trên K-10-6, small blind hành động trước mà không có vị trí — và bet 67,4%. Đây là cách lợi thế range kéo equity realization vượt 100%. (155 ký tự)
tldr: Sau khi small blind open và big blind call, flop K♥10♦6♠ nhận một cú bet 67,4% số lần và check 32,6%. Ở bảy pot raise đơn trước đó trong series, người không có vị trí chỉ bet từ 0,1% đến 23,7% — và có hai thứ thay đổi, không phải một. Ở đây người không có vị trí là người raise chứ không phải người call, và board nghiêng về range đó. Cả hai cùng đẩy equity realization của người không có vị trí lên 103,1%. (407 ký tự)
tags: ["blind vs blind poker", "blind đối đầu blind", "small blind open", "flop K-high", "equity realization", "ví dụ solver"]
#### H2 (EN → VI)
- L127 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L147 `## How often does the small blind actually bet?` → `## Small blind thật sự bet bao nhiêu phần trăm?`
- L171 `## Why does the out-of-position player lead here?` → `## Vì sao người không có vị trí lại bet trước ở đây?`
- L193 `## Why 67% here when a three-bet pot is 100%?` → `## Vì sao ở đây 67% mà pot 3-bet lại 100%?`
- L205 `## How do the two ranges differ?` → `## Hai range khác nhau ở đâu?`
- L242 `## Why is equity realization 103.1% without position?` → `## Vì sao không có vị trí mà equity realization vẫn 103,1%?`
- L272 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L285 `## Check it yourself` → `## Tự kiểm tra`
- (EN không có `## FAQ` → không thêm heading)
#### FAQ (EN → VI)
1. Should the small blind always c-bet blind versus blind? → `Blind đối đầu blind, small blind có nên luôn c-bet không?`
2. Is being out of position always bad in poker? → `Không có vị trí có luôn là bất lợi trong poker không?`
3. Why bet as small as a third of the pot? → `Vì sao bet nhỏ chỉ một phần ba pot?`
4. Why is 6-6 the big blind's only set on this board? → `Vì sao 6-6 là set duy nhất của big blind trên board này?`
#### Từ khóa đã hấp thụ
- blind vs blind (10 · ô nhiễm 0/10 poker) → chỉ dạng ghép «blind vs blind poker» (tag 1) và «SB vs BB» (seoTitle); văn xuôi «blind đối đầu blind (blind vs blind)»
- EN seoTitle «Blind vs Blind GTO» → bỏ «GTO», thay bằng «theo solver»
#### Ghi chú
- Small blind là người raise preflop → cú bet đầu của nó là c-bet (được phép); «bet trước» ở H2 L171 là cách nói, không đổi người hành động.
- Lý do là «board × range», không phải «vì là người open không có vị trí» — giữ lập luận EN; so chéo 9,6% (⑫) và 80,1% (⑬) đúng chỗ EN có.
- Không «blind là gì»/«small blind big blind là gì» (thuộc holdem-blind-meaning); không FAQ mới.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L110 · L112 · L114 · L118 · L119 · L120 · L121 · L125 · L133 · L136 · L137 · L143 · L145 · L149 · L153 · L154 · L160 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L169 · L173 · L181 · L182 · L183 · L185 · L187 · L191 · L193 · L195 · L197 · L199 · L203 · L213 · L214 · L215 · L216 · L217 · L218 · L219 · L220 · L221 · L223 · L225 · L229 · L230 · L231 · L232 · L236 · L240 · L242 · L248 · L250 · L252 · L258 · L259 · L260 · L261 · L262 · L263 · L264 · L266 · L268 · L270 · L274 · L275 · L276 · L278 · L281 · L282 · L293 · L297 · L301 · L305

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L275: - **The size is a third of the pot.** With the big blind defending 525 combos, small and wide is right. ⚠ Do not turn that into "betting big…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *    🔴 착수 조건(«KO가 검수 종료»)은 충족됐다 — M-023 8건 + M-025/027 전파를 받았다.
- *     🔴 **네 줄은 상호배타다.** 여집합으로 흡수하지 마라(⑩이 M-023에서 그렇게 틀렸다).
- *   🔴 **가져오면 안 되는 것들 (전부 임자가 있다)**:
- *   ⚠ 남은 것은 ⑬뿐이다. 아래는 당시 기록이다:
- * 🔴 **2026-08-21 (검수장 M-032 §2) — 유손실 산문화를 되돌렸다. 값을 지우지 마라.**
- * 🔴 KO ⑪이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ② tldr·바로 답을 「보드가 **아니라** 자리」로 단언하지 마라 — 본문은 「보드도 본다」고 이미 말한다.
- *   ④ **트리에 33% 하나뿐**이니 「크게 치면 값이 떨어진다」를 단언하지 마라.

### 하지 말 것 (EN 원문 계약 ⑪)
- SB 역할과 K-10-6의 레인지 적합성이 **함께** 67,4%를 만든다. 동일 SB 자리의 ⑫ 9,6 / ⑬ 80,1이 반례.
- «필요조건이지 충분조건 아님» 문구는 폐기 — **시리즈의 다수 리드는 전부 이 자리에서 나왔지만 자리가 보장하는 건 없고, 콜러도 일부 리드한다(④ 23,7%)**. «OOP라는 사실이 결정하지 않는다 — 이 보드와 레인지의 만남이 대부분을 한다». stripe «leads more often than not» → «bet nhiều hơn check»(뜻 = 50% 초과).
- 단일 33% 옵션이므로 «큰 벳보다 우월함을 계산했다» 금지.
- QJ 16콤보는 8-outs OESD, live draw/backdoor/no-draw 서로 구분. SB set 9 대 BB 3. EQR 103,1%와 «높은 EQR = 더 큰 이득» 주장을 분리.
- EN 현행(4b353f92): `6 × 55.3% = 3.318bb` · `3.42 ÷ 3.318 ≈ 103.1%` → vi `6 × 55,3% = 3,318bb` · `3,42 ÷ 3,318 ≈ 103,1%`.
- 🪶 EN-먼저 미판정: «362.1»(4회) — EN 축어대로(판정하지 않는다 · vi «362,1»).
- 스팟 이름 «Board K-high có lá 10»(앱 vi 축어 — fr과 달리 10).
- «blind vs blind» = 산문 «blind đối đầu blind (blind vs blind)» 첫 등장 병기.

---

## ⑫ blind-battle-connected-board — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Same Seat, Same Stack — and the Bet Falls from 67% to 9.6%",
seoTitle: "Board Texture Turns a 67% C-Bet Into 9.6% — GTO Solver",
desc: "Nothing changed but three cards. On 7-6-5 the small blind that bet 67.4% one board earlier now bets 9.6% — the clearest read on board texture in poker.",
tldr: "After a small-blind open and a big-blind call, the 7♦6♦5♣ flop gets a bet just 9.6% of the time and a check 90.4%. Pot, stack, SPR, bet size and both ranges are identical to the previous spot — only the three board cards changed, and the bet collapsed from 67.4% to 9.6%. The range edge won preflop was an edge in high cards, and a low connected board erases it outright. Equity flips to 49.6% against 50.4% and the out-of-position realization drops to 85.3%.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🪜",
image: "/images/gto-sb-connected-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on a 7-6-5 two-tone flop, the small blind's grid almost entirely green for the check",
tags: ["board texture poker", "connected board poker", "low connected flop", "poker overpair strategy", "gto solver"],
# title 길이 58
# seoTitle 길이 54
# desc 길이 151
# tldr 길이 459
```

### 구조 (EN content L108~L307 · L## = EN 파일 줄)
#### 헤딩
- L125 ## What conditions produced these numbers?
- L148 ## How often does the small blind bet here?
- L172 ## Why does 67.4% become 9.6% when nothing else changed?
- L189 ## Why does this board favor the big blind?
- L234 ## The opener is behind on equity — how?
- L261 ## So which hands make up the 9.6% that bets?
- L275 ## What changes at the table?
- L287 ## Check it yourself

#### FAQ 4문항
- L293 **Q. Why does the same range change value from board to board?**
- L297 **Q. You opened from the small blind and the flop comes low and connected. Now what?**
- L301 **Q. The small blind has three and a half times as many overpairs (42 combos to 12). Why is the bet only 9.6%?**
- L305 **Q. Which of the two spots is the blind-versus-blind default?**

#### 표 8개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L115 :::stripe
- L120 :::
- L185 :::pull[The range edge is won preflop, but whether it gets realized is decided by three cards on the flop.]:::
- L193 ![Range composition infographic comparing the small blind and big blind hand classes on a 7-6-5 board](/images/gto-sb-connected-ranges-en.webp "7-6-5 blind vs blind · class-by-class composition — top pair runs 6.8% to 11.2% in the…
- L273 :::note[⚠ This study spot was solved with a single bet size — a third of the pot — as the only option. Open a larger size in the tree and the 9.6% can move. Read it as "under these conditions there is almost nothing worth betting,…
- L282 :::readnext[Keep reading]
- L285 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L112 /en/solver ✅ 도구
- L193 /images/gto-sb-connected-ranges-en.webp "7-6-5 blind vs blind · class-by-class composition — top pair runs 6.8% to 11.2% img
- L271 /en/blog/blind-battle-cbet "thumb:/images/gto-sb-king-mid-oop-en.webp" ✅
- L271 /en/blog/ace-paired-board-strategy "thumb:/images/gto-sb-paired-ace-oop-en.webp" ✅
- L278 /en/blog/donk-bet-strategy "thumb:/images/gto-srp-middle-connected-oop-en.webp" ✅
- L280 /en/blog/low-board-check-raise "thumb:/images/gto-srp-low-rainbow-oop-en.webp" ✅
- L289 /en/solver ✅ 도구
- L289 /en/solver ✅ 도구
- L303 /en/blog/blind-battle-cbet ✅
- L303 /en/blog/ace-paired-board-strategy ✅

### 키워드 (출처 L-G §1·§4-A·§7-9)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| board texture poker · wet board poker | 각 10 | 산문 |
| blind vs blind | 10 · 🔴 0/10 | 단독 금지(⑪과 같다) |
| 함정 🚫 | — | «gto poker»(EN seoTitle «— GTO Solver» → «solver» 문구) · «blind vs blind» 단독 |

### PAA·자동완성 (축어)
- 관련검색(board texture poker): **Dynamic board poker** · What is a dry board in poker · **Types of flops in Poker**
- PAA: What does the term "wet board" mean in poker?(①에 흡수)

### 현지 SERP (L-G §4-C·§7-9)
- vi 대응 글: wikipoker `/blind-doi-dau-blind/` · `/ket-cau-mat-bai-poker/`(kết cấu mặt bài 11종 헤딩) — 순위 밖.
- 우리가 더 줄 것: ① 7-6-5 two-tone에서 SB 체크 90,4%(⑪ K-10-6 67,4%와 같은 자리·같은 사이즈) ② «보드만 바뀌었다»는 통제 비교 ③ 앱 동선.
- 처방: 그룹 A — 새 FAQ 없음 · EN 구조 그대로.

### 소유표 (계획 §3-A ⑦·§3-C ⑪)
- 주인인 검색어: 없음.
- 쓰면 안 되는 헤드: «blind vs blind» 단독 · «gto poker»·«range poker».

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Cùng ghế, cùng stack — mà cú bet rơi từ 67% xuống 9,6% (54 ký tự)
seoTitle: Ba lá đổi, c-bet từ 67% còn 9,6% — Board texture poker (54 ký tự)
desc: Không gì thay đổi ngoài ba lá bài. Trên 7-6-5, small blind vừa bet 67,4% ở board trước giờ chỉ bet 9,6% — bài đọc rõ nhất về board texture trong poker. (151 ký tự)
tldr: Sau khi small blind open và big blind call, flop 7♦6♦5♣ chỉ nhận một cú bet 9,6% số lần và check 90,4%. Pot, stack, SPR, size bet và cả hai range đều y hệt spot trước — chỉ ba lá board thay đổi, và cú bet sụp từ 67,4% xuống 9,6%. Lợi thế range giành được ở preflop là lợi thế về bài cao, và một board thấp liền nhau xóa sạch nó. Equity đảo chiều thành 49,6% so với 50,4%, và realization của người không có vị trí rơi xuống 85,3%. (429 ký tự)
tags: ["board texture poker", "connected board poker", "flop thấp liền nhau", "chiến lược overpair", "ví dụ solver"]
#### H2 (EN → VI)
- L125 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L148 `## How often does the small blind bet here?` → `## Small blind bet bao nhiêu phần trăm ở đây?`
- L172 `## Why does 67.4% become 9.6% when nothing else changed?` → `## Không gì khác thay đổi, vì sao 67,4% thành 9,6%?`
- L189 `## Why does this board favor the big blind?` → `## Vì sao board này nghiêng về big blind?`
- L234 `## The opener is behind on equity — how?` → `## Người open lại thua equity — sao lại thế?`
- L261 `## So which hands make up the 9.6% that bets?` → `## Vậy 9,6% bet kia gồm những tay bài nào?`
- L275 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L287 `## Check it yourself` → `## Tự kiểm tra`
- (EN không có `## FAQ` → không thêm heading)
#### FAQ (EN → VI)
1. Why does the same range change value from board to board? → `Vì sao cùng một range lại đổi giá trị theo từng board?`
2. You opened from the small blind and the flop comes low and connected. Now what? → `Bạn open từ small blind, flop ra thấp và liền nhau. Giờ sao?`
3. The small blind has three and a half times as many overpairs (42 combos to 12). Why is the bet only 9.6%? → `Small blind có số overpair gấp ba lần rưỡi (42 combo so với 12). Vì sao chỉ bet 9,6%?`
4. Which of the two spots is the blind-versus-blind default? → `Trong hai spot, đâu mới là mặc định của blind đối đầu blind?`
#### Từ khóa đã hấp thụ
- board texture poker (10) → seoTitle + tag 1
- wet board poker (10) → văn xuôi
- blind vs blind → chỉ dạng ghép «blind đối đầu blind (blind vs blind)» trong văn xuôi; EN seoTitle «— GTO Solver» → bỏ, thay «Board texture poker»
#### Ghi chú
- Đây là so sánh có kiểm soát với ⑪: cùng ghế, cùng stack, cùng size — chỉ board đổi; nêu rõ ở đoạn đầu.
- Small blind là người raise preflop → c-bet đúng; không FAQ mới, cấu trúc y EN.
- Không dùng «board ướt» làm tag; «flop thấp liền nhau» là cách viết connected.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L108 · L112 · L116 · L117 · L118 · L119 · L123 · L131 · L133 · L134 · L137 · L138 · L142 · L146 · L150 · L154 · L155 · L161 · L162 · L163 · L164 · L165 · L166 · L167 · L168 · L170 · L172 · L174 · L178 · L181 · L182 · L183 · L187 · L193 · L197 · L198 · L199 · L200 · L201 · L202 · L203 · L204 · L205 · L206 · L207 · L211 · L212 · L213 · L215 · L217 · L219 · L223 · L224 · L225 · L226 · L227 · L228 · L230 · L232 · L236 · L240 · L242 · L244 · L246 · L248 · L252 · L253 · L254 · L255 · L256 · L257 · L259 · L261 · L267 · L268 · L269 · L271 · L273 · L277 · L278 · L279 · L280 · L283 · L284 · L295 · L299 · L301 · L303 · L307

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- (없음)

### EN 파일 머리 주석 중 경고 줄 (축어)
- *     🔴 **여섯 줄은 상호배타다. 「백도어 플러시」 행을 다시 빼지 마라** — M-023 축B가 잡은 결함이
- *   🔴 가져오면 안 되는 것: `wet board poker` 50 → **⑨·⑦이 이미 갖고 있다**(두 편이 겹친 상태다) ·
- * 🔴 KO ⑫가 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ① **드로우 표에서 백도어 행을 빼지 마라**(위 참조). 「드로우 없음」에서 끊어 읽게 하지 마라.
- *   ④ 🔴 **9.6%의 이유를 팟 6bb·스택 97bb·SPR 16.2에서 찾지 마라** — 셋 다 ⑪⑬에서 **상수**인데
- *      ⚠ 단 **개별 콤보 최다는 88이 아니다**(Q♠4♠ 54.7 · A♣7♣ 54.4 · T♣9♣ 52.2 > 8♦8♣ 47.1).
- *   ⑦ 「SB가 가진 몇 안 되는 값 있는 패」로 A7s·K7s를 설명하지 마라 — 실제 이유는

### 하지 말 것 (EN 원문 계약 ⑫)
- ⑪과 pot·stack·레인지·사이즈가 동일하며 **보드만 변경**. 양쪽 set 9콤보, 비율 1,6/1,7 차이는 분모 때문. BB의 set 9 + hai đôi 13 + sảnh 20 = 42콤보는 SB overpair를 이미 이김.
- BB 우위 이유: «5-6-7 연결 콤보가 BB에만 남는다»가 아니라 **SB가 오픈하지 않는 BB 핸드(T7o, 97o, 87o, 76o, 74s, 43s 등)가 공통 보유분 위에 더해진다**. live draws SB 46,4 / BB 55,0%.
- **클래스 평균** 88 bet 39,5%와 **개별 콤보** Q♠4♠/Q♥4♥ 54,7%를 구분(«top three»가 아니라 «top individual combos», 다음 10♣9♣ 52,2%). 88 EQ 73,4%–75,2%, EQR 133%–138% 범위 보존.
- 90,4% 체크 이유: «얇은 밸류로 리드 후 레이즈 맞으면 손해»는 폐기 → A♣7♣·K♣7♣ 같은 얇은 밸류는 **벳과 체크가 0,03bb 이내**라 체크로 잃는 게 거의 없다.
- A-high «대부분» 페어만(A4·A8 OESD, A♦x♦ flush draw 예외). 체크 이후 BB bet/SB check-raise 결과는 없음; ⑦과 좌석도 다름.
- EN 현행(4b353f92): FAQ «three and a half times as many overpairs (42 combos to 12)» → vi «gấp ba lần rưỡi số overpair (42 combo so với 12)».

---

## ⑬ ace-paired-board-strategy — EN updated 2026-10-02 · masterUpdated = "2026-10-02"

### 메타 (EN 축어 · 길이는 JS length)
```
title: "Two Aces on the Flop and the Bet Jumps to 80%",
seoTitle: "Trips on an Ace-Paired Board: Why It Bets 80% — GTO",
desc: "One paired flop gets a 3% bet and another gets 80.1%. On A-A-6 the ace belongs to the raiser — and the trips that beat you are missing from the caller's range.",
tldr: "After a small-blind open and a big-blind call, the A♠A♥6♦ flop gets a bet 80.1% of the time (79.6% at a third of the pot, 0.5% at three quarters, check 19.8%). That is the reverse of the 3.0% seen on the 6♣6♦3♥ paired board — and what split them is less that the board paired than which card paired and whose range it fits (the seats and ranges changed along with the board). Hands making trips with an ace run 88 combos to 66, and 16 of those combos, A-K and A-Q, are absent from the calling range entirely.",
category: "strategy",
date: "2026-08-21",
updated: "2026-10-02",
keepImagesInBody: true,
readTime: "10 min",
emoji: "🅰️",
image: "/images/gto-sb-paired-ace-oop-en.webp",
imageAlt: "HoldemMaster GTO solver on an A-A-6 flop, the small blind's grid almost entirely orange for the bet",
tags: ["trips poker", "what are trips in poker", "ace paired board", "poker bluff frequency", "gto solver"],
# title 길이 45
# seoTitle 길이 51
# desc 길이 159
# tldr 길이 508
```

### 구조 (EN content L118~L286 · L## = EN 파일 줄)
#### 헤딩
- L135 ## What conditions produced these numbers?
- L155 ## How often does the small blind bet here?
- L181 ## Two paired boards, 3.0% and 80.1% — what split them?
- L201 ## Who holds more trips?
- L236 ## Why is the large size almost never used?
- L246 ## Which hands make up the 19.8% that checks?
- L254 ## What changes at the table?
- L266 ## Check it yourself

#### FAQ 4문항
- L272 **Q. What are trips in poker, and how do they differ from a set?**
- L276 **Q. If you also bet with hands that missed, isn't that bluffing?**
- L280 **Q. On a board like A-A-6, how likely is the opponent to hold an ace?**
- L284 **Q. What is the conclusion running through this series?**

#### 표 6개 · 디렉티브·이미지·원시 HTML (축어로 옮길 줄)
- L125 :::stripe
- L130 :::
- L197 :::pull[What sets the betting frequency is not how many combos your top class has. It is whether your whole range is better than theirs.]:::
- L205 ![Range composition infographic comparing the small blind and big blind hand classes on an A-A-6 board](/images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · class-by-class composition — hands that missed run 39.8% agai…
- L244 :::note[⚠ This study spot was solved with two size candidates, 33% and 75%. Add a smaller one — a fifth or a quarter of the pot — and the 79.6% could migrate there. Read it as "the small one of the sizes offered," not as "33% is t…
- L261 :::readnext[Keep reading]
- L264 :::

### 링크 (EN 축어 → vi는 /vi/blog/<같은 slug> · 도구 /en/solver → /vi/solver · 빼기·대체 0)
- L118 /en/blog/paired-board-strategy "thumb:/images/gto-srp-paired-oop-en.webp" ✅
- L122 /en/blog/blind-battle-connected-board "thumb:/images/gto-sb-connected-oop-en.webp" ✅
- L122 /en/solver ✅ 도구
- L205 /images/gto-sb-paired-ace-ranges-en.webp "A-A-6 blind vs blind · class-by-class composition — hands that missed run 39.8% img
- L240 /en/blog/3bet-pot-low-board "thumb:/images/gto-3bp-low-oop-en.webp" ✅
- L258 /en/blog/3bet-pot-low-board ✅
- L258 /en/blog/3bet-pot-bet-sizing "thumb:/images/gto-3bp-dynamic-oop-en.webp" ✅
- L259 /en/blog/low-board-check-raise ✅
- L268 /en/solver ✅ 도구
- L268 /en/solver ✅ 도구
- L286 /en/solver ✅ 도구

### 키워드 (출처 L-G §1·§2·§3·§4-D ⑥⑮·§7-5)
| 검색어 | 볼륨 | 자리 |
|---|---:|---|
| trips poker · poker trips vs set | 10 · 자동완성 | FAQ «Trips và set trong poker khác nhau thế nào?» |
| set trong poker · set poker là gì | `-`(자동완성) | 같은 FAQ 문구 |
| paired board poker | 10 | 산문 |
| 함정 🚫 | — | 🔴 «set poker» 30(쇼핑) · «bộ ba» 단독 · «gto poker»(EN seoTitle «— GTO» → «solver» 문구 · §3-C ⑪) |

### PAA·자동완성 (축어)
- 자동완성: set trong poker là gì → **set trong poker** · **set poker là gì** / trips poker → **poker trips vs set** · trips or set
- natural8/vi H2 «Trip hay là set?»

### 현지 SERP (L-G §4-D ⑥⑮·§7-5)
- vi 대응 글: wikipoker `/c-bet-tren-mat-bai-co-doi/`(2025-06-12 · «Luôn c-bet trên các board AAx, dùng sizing nhỏ») — 순위 밖.
- 우리가 더 줄 것: ① A-A-6 작은 사이즈 79,6%(+큰 0,5% = 80,1%)가 그 일반론과 **같은 방향**이라는 계산 확인(«solver xác nhận» 꼴 · 타사 이름 없이) ② trips 88 대 66 콤보 근거 ③ 미스 51,5% ≠ 폴드율.
- 처방: FAQ «What are trips in poker, and how do they differ from a set?» → «Trips và set trong poker khác nhau thế nào?» · EN에 FAQ H2 없음(구조 그대로).

### 소유표 (계획 §3-C ⑪)
- 주인인 검색어: 없음(롱테일 «poker trips vs set» FAQ 흡수만 — paired와 같은 질문이지만 이 글은 «보드 A 페어» 문맥 · 문구를 다르게).
- 쓰면 안 되는 헤드: «set poker» · «gto poker»·«range poker».

### 확정 카피
> Fable 서브 1회(2026-10-10) 출력 축어 · 길이는 Opus 재측정(JS length — 괄호는 필드에 넣지 마라) · 🔴 B·C 변경 금지(계획 §2-⑥).
title: Hai lá A trên flop và cú bet vọt lên 80% (40 ký tự)
seoTitle: Flop ra đôi A, bet vọt lên 80% — Trips poker theo solver (56 ký tự)
desc: Một flop có đôi bị bet 3%, flop có đôi khác tới 80,1%. Trên A-A-6 lá A thuộc về người raise — còn những trips thắng được bạn lại vắng khỏi range người call. (156 ký tự)
tldr: Sau khi small blind open và big blind call, flop A♠A♥6♦ nhận một cú bet 80,1% số lần (79,6% ở một phần ba pot, 0,5% ở ba phần tư, check 19,8%). Đó là điều ngược hẳn với mức 3,0% trên board có đôi 6♣6♦3♥ — và thứ tách hai spot ra không hẳn là chuyện board có đôi, mà là lá nào tạo đôi và nó khớp range của ai (ghế và range đã đổi cùng với board). Những tay bài có trips với lá A là 88 combo so với 66, và 16 combo trong số đó, A-K và A-Q, hoàn toàn không có trong range của người call. (484 ký tự)
tags: ["trips poker", "trips trong poker là gì", "board đôi A", "tần suất bluff poker", "ví dụ solver"]
#### H2 (EN → VI)
- L135 `## What conditions produced these numbers?` → `## Những con số này đến từ điều kiện nào?`
- L155 `## How often does the small blind bet here?` → `## Small blind bet bao nhiêu phần trăm ở đây?`
- L181 `## Two paired boards, 3.0% and 80.1% — what split them?` → `## Hai board có đôi, 3,0% và 80,1% — điều gì tách chúng ra?`
- L201 `## Who holds more trips?` → `## Ai cầm nhiều trips hơn?`
- L236 `## Why is the large size almost never used?` → `## Vì sao size lớn gần như không bao giờ được dùng?`
- L246 `## Which hands make up the 19.8% that checks?` → `## 19,8% check kia gồm những tay bài nào?`
- L254 `## What changes at the table?` → `## Ra bàn thật thì chơi khác gì?`
- L266 `## Check it yourself` → `## Tự kiểm tra`
- (EN không có `## FAQ` → không thêm heading)
#### FAQ (EN → VI)
1. What are trips in poker, and how do they differ from a set? → `Trips và set trong poker khác nhau thế nào?`
2. If you also bet with hands that missed, isn't that bluffing? → `Bet cả bằng những tay trượt board thì chẳng phải là bluff sao?`
3. On a board like A-A-6, how likely is the opponent to hold an ace? → `Trên board như A-A-6, khả năng đối thủ cầm A là bao nhiêu?`
4. What is the conclusion running through this series? → `Kết luận xuyên suốt cả series này là gì?`
#### Từ khóa đã hấp thụ
- trips poker (10) · poker trips vs set (autocomplete) → FAQ 1 + tag 1–2 (câu khác ⑥ vì bối cảnh «board đôi A»)
- set trong poker · set poker là gì (autocomplete) → câu FAQ 1
- paired board poker (10) → văn xuôi; EN seoTitle «— GTO» → bỏ, thay «theo solver»
#### Ghi chú
- 79,6% + 0,5% = 80,1%: viết «solver xác nhận» hướng chung của lời khuyên bet board A-A-x, không nêu tên/URL bên thứ ba.
- Trượt 51,5% ≠ tỷ lệ fold — giữ phân biệt như EN; set/trips loanword + 1 câu định nghĩa, không «bộ ba» một mình, không «set poker».
- Small blind là người raise preflop → c-bet đúng; 88 so với 66 combo và 16 combo A-K/A-Q vắng mặt chép đúng EN.

### §13 자리 (EN 줄 — 카드·확률·수치·계산 · B는 값 축어 복사 · C는 전사 대조+커버리지 밖 손검산)
L118 · L120 · L122 · L126 · L127 · L128 · L129 · L133 · L139 · L141 · L143 · L145 · L146 · L147 · L151 · L153 · L157 · L161 · L162 · L163 · L169 · L170 · L171 · L172 · L173 · L174 · L175 · L176 · L177 · L181 · L183 · L185 · L188 · L189 · L190 · L191 · L193 · L195 · L199 · L203 · L205 · L209 · L210 · L211 · L212 · L213 · L214 · L218 · L219 · L220 · L222 · L228 · L230 · L232 · L234 · L238 · L240 · L242 · L244 · L246 · L248 · L250 · L252 · L256 · L258 · L262 · L263 · L274 · L278 · L282 · L286

### 경험담 자리 — 🔴 GTO 시리즈 예외(§0-0): 지어낸 경험담 금지. 아래는 EN 1인칭 줄(그대로 1인칭으로 옮길 자리)
- L278: A. Hand by hand, yes. But in GTO **bluffing is not "I am deceiving with this hand" — it is "what percentage of bluffs sits in my range."** T…

### EN 파일 머리 주석 중 경고 줄 (축어)
- *   ⚠ 「(the last)」·「thirteen spots」 류 **편 수 하드코딩을 넣지 마라** — 정본은 `lib/gto-series.ts`의
- *   🔴 **합계 검산**: SB 1+9+88+93+112+200 = **503** ✓ / BB 0+9+66+78+92+260 = **505** ✓
- *     🔴 **2026-08-21 (검수장 M-032 §3) 보완 — 열거에 Ax를 빠뜨렸다.** BB가 A를 들면
- *     🔴 ④의 「A 한 장에 뒤집힌다」를 이 보드에 이식하지 마라 — M-025 ⑫가 잡은 족보 오류다.
- *   🔴 **`trips poker` = `poker trips` = `trips in poker`는 월별 배열이 완전히 같은 «한 클러스터»다.
- *      210이지 630이 아니다. 더하지 마라.**
- *   🔴 가져오면 안 되는 것: `trips vs set` 140 → **⑥**(`paired-board-strategy`) ·
- * 🔴 KO ⑬이 검수로 확정한 것 — 번역에서 떨어뜨리지 마라:
- *   ⑧ 「A는 공격한 쪽이 **압도적으로** 많이」로 과장하지 마라 — SB 95 대 BB 72로 **약 1.3배**다.

### 하지 말 것 (EN 원문 계약 ⑬)
- 79,6% small + 0,5% large = 80,1%, check 19,8. ⑪/⑫와 달리 **두 사이즈가 실제 제공**됨. SB trips 88 / BB 66, AK+AQ 16콤보; SB 독점 상위 trips = A-K 8 + A-Q 8 + 오프수트 A-J 6 = **22콤보**(EN 축어). AA는 tứ quý 1콤보 SB만; cù lũ는 양쪽 66 세 콤보 + A6 여섯 = 9.
- KK의 얇은 밸류 ≠ 약한 핸드는 전부 폴드. 원에이스 94콤보 체크 0,1%–26,0%, 평균 12,3%, 0% 체크 콤보 없음.
- BB 미스 51,5%는 **«벳이 압박하는 풀»이지 폴드율이 아니다** — 1/3팟에 MDF 약 75% 유지 → 균형 상대는 약 1/4만 폴드; **2bb 블러프 into 6bb 손익분기 폴드 25%**; 97bb는 «절대 위험 없음»이 아니라 턴·리버에 걸릴 수 있다.
- «체크 후 노드는 이 스팟에 없다 — 시리즈 유일한 체크 후 벳 노드는 ⑦ 재솔브»(⑦ 링크 보존). bluff-catch 제안은 상대가 블러프를 섞는다는 **해석·가정**이며 후속 노드 결과가 아님.
- FAQ: 솔버는 핸드에 «블러프» 라벨을 붙이지 않고 **모든 핸드에 빈도를 정하며, 레인지 벳 빈도는 그 평균**.
- EN 현행(4b353f92): «what split them is **less that the board paired than which card paired and whose range…**» — 옛 «not that the board paired but whose card paired»로 되돌리지 않는다.
- 🔴 EN L199 «holds **more** of» = **비교급**(BB 대비) — «nhiều nhất» 금지(fr AO-1 오류).
- EN L248 «offsuit broadways» Q-9o·J-9o · L250 «beats that card» · L274 trips 정의 → §0-0 정정.
- 앱 ⑬ 해설문(«Xám không hiếm» 등)은 인용하지 않는다 — 수치 근거는 EN.
- 🔴 «bộ ba» 단독 금지 · FAQ «Trips và set…» 답 = EN 답 뜻 + 계획 §3-A ③ 정의 고정문.

---
