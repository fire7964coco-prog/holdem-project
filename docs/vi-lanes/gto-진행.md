# vi-gto 진행 — 🅶 GTO 13(마지막 레인 · 헤드 «시작» 신호 뒤)

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-G-gto.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🔴 🅰~🅵가 `vi-integration`에 머지된 뒤 헤드가 «시작»이라고 할 때까지 A도 하지 않는다. A 앞 = 계획 §5 «🅶 A 앞»(솔버 vi 배포 여부 → 앱 라벨 축어 또는 영어 라벨 + 교체 자리 목록). seoTitle·H1·tags에 «GTO poker»·«range poker» 금지(§3-C ⑪ · 주인 = `/vi/solver` 예정) · EN seoTitle «GTO» 단독 3편 → «solver» 문구 · check-raise 정의 H2 = low-board-check-raise(⑫ · «hồi mã thương» 금지) · SPR 정의 = 3bet-pot-cbet(⑬) · «Check it yourself» = 솔버 앱 직접 링크 · 랜딩 `/vi/solver`는 별도 회차 · GTO 용어 정본 = §3-A ④ «GTO 용어(🅶 정본)» 행.

## 상태 — A ✅ 10-10 / B ✅ 10-10 / C ✅ 10-10 · 커밋 (C 커밋 = 이 파일과 같은 커밋)

- A 산출(10-10 · 23:51→00:13): `docs/vi-lanes/gto-brief.md`(13편 · ≈210KB). EN 해부(메타·구조·링크·§13 자리·경험담·머리 주석·원문 계약)는 **fr 브리프 축어 승계** — EN 13편이 fr 기준 `a54b5f3d` → vi 기준 `b57cb658` → HEAD 사이 변경 0(실측)이라 L## 동일. vi 고유분 = §0(용어·조판·앱 vi 라벨·조건표 라벨·단서 문장 vi) · 편별 키워드/PAA/현지 SERP/소유표(L-G 축어 · 재조사 0) · 확정 카피(Fable 서브 1회 · Opus 재측정·조정 2) · «하지 말 것» vi판(정정 자리 포함).
- 앱 라벨 = `docs/solver-app-verbatim-vi-2026-10-09.md` + 솔버 소스 `hand-categories.ts` MADE_LABELS_VI·DRAW_LABELS_VI(행 이름) · trainer/guide vi 문구(EV mất · Thử thách hôm nay · 계정 동기화 문장).
- `docs/keyword-bank/vi-gto.md`는 만들지 않았다(브리프에 다 넣음 · 계획 §5).
- B 산출(10-10 · 14:18→): 본체 Opus 5.5 + **Opus fork 13개 병렬(편당 1)** · 입력 = 브리프 §0 + 담당 절 + EN 마스터뿐. `lib/posts-vi/<13편>.ts` 신규 · `index.ts` [vi-gto] 칸 두 곳(import 13 · 배열 13 · 변수명 fr-gto와 동일). 메타 = 확정 카피 축어 · date·updated 2026-10-10 · masterUpdated = EN updated(donk·bet-sizing 09-26 · 나머지 10-02) · 이미지 EN `-en.webp` 경로(§0-7).
  - 포크 자기 점검(node): 13편 백틱 0(템플릿 2개뿐) · 마침표 소수 0 · 무늬 붙은 T 0 · 카드 토큰 집합 EN과 일치(T→10 정규화) · 숫자 토큰 차이 = 표기뿐(철자 숫자→숫자 · 보드 T→10 · 정의 고정문 «1 lá»).
  - 구조 계수 EN→vi: 12편 동일. 현지 추가 = donk H2 10→11 · FAQ 7→6(승격) · low-board-check-raise H2 11→12 · FAQ 6→7 · 링크 10→11.
  - 자기 게이트: `audit:hard --locale=vi` 51/51 🔴 0 🟠 0(커버리지 ⚠ 카드 문단 미판정 13편 전부 → C 손검산) · `check:intl-links` vi 2건 = gloss·rules 글 → `/vi/glossary`(배포 회차 신설 · 내 몫 아님 · `npm run build` prebuild는 이 2건에서 멈춘다) · `check:structure --tail` 내 13편 결손 = donk faq −1(브리프 지정 승격 · 헤드 요청 ②) · `npx next build` exit 0 · 963/963 · `/vi/blog/` HTML 51(13편 생성 확인) — 첫 시도는 샌드박스 안 `next/font` Google Fonts 취득 실패(내용 무관) → 샌드박스 밖 재시도 1회 통과 · sitemap·tsbuildinfo 변경 0.
  - GTO 전용 게이트 `check-gto-numbers`·`check-gto-structure` = vi 미지원(헤드 요청 ③) → §13 전사 대조는 C scratchpad.
- C 산출(10-10): `git merge main`(ru-solver 등 7커밋 · 충돌 0) → 게이트 → §13 전사 대조(scratchpad · vi 구분자 정규화 · 머리 주석 제외) → 렌즈 5(딜러 2분할 · 네이티브 · SEO/GEO · 교열 · 전부 Opus) + 아스트라 교차 1(codex gpt-6-astra read-only · 스크래치 사본) → 전건 원문 판정 → 반영 → 2차 교열 1.
  - 전사 대조: 카드 집합 13편 EN 일치(차이 = vi imageAlt에 보드 카드 표기 4편뿐) · 수치 차이 = 표기·범위 형식뿐 · **EN에 없는 문장 1건 발견·삭제**(donk «EV vẫn là 2,48 so với 3,02» — 뒤 문장 «Đó mới là tín hiệu thật»의 지시 대상을 EQR→EV로 바꿨다). 손검산: 미판정 카드 문단 전 자리(모노톤 A♠x♠ 8콤보 · AQ/KQ 16/428 · 쿼즈 1콤보 · 33 풀하우스 3콤보 · 6-5-2 드로 · Q♥10♥7♠ 15/12/8/4아웃 · 오버페어 36 · AA 1·22·94=88+6) ✓.
  - 렌즈 지적 → 판정·반영은 아래 «C 판정 요약». 범위 표기 «N–M%» 6자리 → «N%–M%»(브리프 §0-2).
  - 게이트(반영 후): audit:hard vi 51/51 🔴0 🟠0 · check:structure vi 결손 = donk faq −1(의도 · 헤드 요청 ②) · check:meta 초과 0(blind-battle-cbet 🟠 마지막 문장 숫자 = EN·전 로케일 공통 · 확정 카피) · check:seo-sync 🔴0 · check:intl-links vi 2건 = /vi/glossary(타 레인 · 배포 회차) · `npx next build` exit 0.

### C 판정 요약
| 렌즈 | 지적 | 채택 | 기각·보류 |
|---|---|---|---|
| 딜러① 7편 | 3(하) | 2 — k-high «lá AJ»→«tay» · «bảo vệ được»→«hợp lý» | 1 — ace-paired «người ở bàn gọi là trips»(EN «the table» = 테이블 구어) |
| 딜러② 6편 | 4 + ⑦ | 4 — connected «nhóm dẫn đầu» 오독 · low-board «being drawn to» 뜻 반전 · bet-sizing 앱 라벨 «IP (BTN (bên call))» · 3bet-low OOP/IP·SPR 풀이 | — |
| SEO/GEO | 7 | 3 — donk 직답 «la gi như nhiều người gõ» 메타 문구 삭제 · bet-sizing alt «GTO poker solver miễn phí»(헤드 조준) 제거 · BvB 2편 로그인 문장 ⑩⑫ 정본으로 | 보류 1(산문 흡수 wet/paired/texture · 볼륨 10 · 헤드 판단) · EN 유래 3(→ EN-먼저) |
| 교열 | 5 | 3 — BvB «Thiết lập lại»→«Điều kiện lại thay đổi» · 3bet-low 이중 괄호 · a-high 콜론 연결 복원 | EN-먼저 1(ace-paired «offsuit broadways») · ⑤ OOP/IP 풀이 → 아래 일괄 |
| 네이티브 | 23 | 대부분 — «nút»→node 9자리 · «hiện thực hóa» 5 · 조건표 Range 행 5편 통일 · 무페어 «Trips»→«Sám cô» 2 · «bánh xe» 금지어 2 · «bài trắng»→«tay chưa thành bài» 3 · paired 문장 파손·직역 4 · ace-paired «A đầy K» · donk lead 중복 · broadway «luôn» · monotone c-bet 풀이 · low-board «19,8% equity» · readnext 카드 4→3장 EN 카드 문구 번역 | X5 기메 인용(형제 vi 관행 · 하) · X6 3bet-low «ace-high» 풀네임(tldr 확정 카피 연동 · 헤드 판단) · readnext a-high→position(형제 vi 문구 재사용 · 하) |
| 아스트라 | 21 | 신규 13 + 1차와 겹침 7 — «nòng» barrel 3 · «small blind đã chết» · «call xuống» · «rất hay» · «phục vụ» · «cú chia size» · «đi đâu» 비문 · «một lát dày» · «bet mọi thứ vào hy vọng» · equity 정의(«how often you win» → 무승부 지분 포함 · EN-먼저) · blocker «một tay»(EN-먼저) | 1 — donk FAQ −1 복원(브리프 지정 승격) |
| 2차 교열(반영 diff 77건) | 8 + 중복 풀이 5 | 전부 반영(풀이 어순 미관 1건만 보류) — 3bet-pot-cbet «tay chưa thành bài»가 앱 행 이름과 충돌 → «tay không có đôi» · bet-sizing 행 이름 sám cô/trips/Xám 정리 · 표 라벨 풀이 뒤 산문 재풀이 5자리 약어로 · paired 정의 동어반복 · «(the wheel)»→«(wheel)» · monotone L70 «phục vụ» · a-high «thường … khá nhiều» · 3bet-low «IP (BTN (bên call))» | 반영 17자리가 국소적이라 3차 교열 생략 · 게이트 재확인 |
| OOP/IP·SPR 첫 등장 풀이(딜러②·교열 공통) | 7편 | 표 라벨 첫 자리에 «out of position — không có vị trí» / «in position — có vị trí» · blind-battle-cbet·low-board SPR | — |
- A는 커밋하지 않는다(커밋 = C). 이 진행 파일 + 브리프(미추적)가 B의 입력이다. A 시작 때 `git merge main`(문서 4커밋 · en-first-queue §2-AO 수신).

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| donk-bet-strategy | ✅ | ✅ | ✅ | 정의 H2 «Donk bet là gì?» 추가 · FAQ 7→6(1문항 승격) |
| monotone-board-strategy | ✅ | ✅ | ✅ |  |
| broadway-board-strategy | ✅ | ✅ | ✅ |  |
| a-high-board-cbet | ✅ | ✅ | ✅ |  |
| k-high-board-cbet | ✅ | ✅ | ✅ |  |
| ace-paired-board-strategy | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) · L199 비교급 주의 |
| paired-board-strategy | ✅ | ✅ | ✅ | AO-3 note 정정 선반영 |
| low-board-check-raise | ✅ | ✅ | ✅ | 정의 H2 추가 · FAQ +1 · betting-actions 링크 +1 |
| blind-battle-cbet | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |
| blind-battle-connected-board | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |
| 3bet-pot-cbet | ✅ | ✅ | ✅ | SPR 정의 H2(EN H2 현지화) |
| 3bet-pot-bet-sizing | ✅ | ✅ | ✅ | AO-2·L176 정정 선반영 |
| 3bet-pot-low-board | ✅ | ✅ | ✅ | FAQ H2 없음(EN대로) |

## 신규 용어
| EN | 채택 vi | 근거 |
|---|---|---|

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| low-board-check-raise | (없음) | 추가 1 → `/vi/blog/holdem-betting-actions`(정의 H2 직답 · 계획 §3-C ⑫ · 브리프 §0-7) |
| 13편 | `/en/solver` | 대체 → `/vi/solver`(앵커 «GTO poker solver miễn phí») · 그 밖 빼기·대체 0 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- (선반영 · §2-AO) `3bet-pot-bet-sizing` EN L229 JJ «two overcards» · `paired-board-strategy` EN L219 «within a tenth» — vi는 정정 뜻으로 씀(EN과 의도적으로 다름).
- `k-high-board-cbet` EN L159 «Equity is how often you win the pot» — 무승부 지분 누락(equity ≠ 승률) · vi는 «phần pot kỳ vọng…, tính cả khi chia pot»으로 씀 · 아스트라.
- `paired-board-strategy` EN L215 «more than its winning percentage is worth» — EQR 기준은 equity · vi «phần mà equity của nó đáng được hưởng» · 네이티브·아스트라.
- `blind-battle-connected-board` EN L268 «(one fewer ace-high or king-high…)» — 블로커는 콤보 여러 개를 지운다 · vi «làm giảm số combo…» · 아스트라.
- `ace-paired-board-strategy` EN L248 «offsuit broadways like Q-9o … J-9o» — 9 포함은 broadway 아님 · vi «các tay Q-x, J-x khác chất» · 교열.
- `ace-paired-board-strategy` EN L188 «the player betting first has more»(6-6-3 열 BB는 3%만 bet) → «acting first» · vi 반영 · 네이티브.
- `3bet-pot-low-board` EN L172 캡션 «trips only on the button» ↔ 같은 글 «read it as a set»(무페어 보드) · vi «set chỉ có ở button» · 네이티브.
- `3bet-pot-cbet` EN L141 조건표 Checked «①–⑦ 2026-08-20» ↔ blind-battle-cbet «①–④ 08-19 · ⑤–⑦ 08-20» · vi는 EN대로 둠 · 네이티브.
- `monotone-board-strategy` EN L159 «33 made-flush combos on this board» = BB 레인지 수치(7,1% × 468) · 보드 전체로 읽힘 · vi EN대로 · 딜러(하).
- `k-high-board-cbet` EN L147 «because there is none of it» ↔ 앞 문장 «four hands» · vi «gần như không có»(B 정정 · 머리 주석) · 딜러.
- `paired-board-strategy` EN L278 H2 안 링크 · SEO(하).

## 헤드 요청
- ① vi 캡처·차트 생성 후 13편 `gto-*-en.webp` → `-vi` 일괄 교체(image·본문 ranges·readnext thumb · 브리프 §0-7 · 현재 `gto-*-vi` 0장).
- ② `docs/locale-intentional-diffs.md` 등재: vi/donk-bet-strategy FAQ −1 = EN FAQ «What is a donk bet» 문항을 현지 정의 H2 «Donk bet là gì?»로 승격(브리프 ④ · check:structure 🟠 faq −1).
- ③ `scripts/check-gto-numbers.mjs`(normalizeNumericText)·`check-gto-structure.mjs`(RULES)에 vi 추가 — 현재 미지원(B·C는 «미지원» 기록 + scratchpad 전사 대조).
- ④ 솔버 축어 문서 `docs/solver-app-verbatim-vi-2026-10-09.md` §4 결과 화면 실측이 srp-dry-ace 1곳뿐 — BvB «OOP (SB (bên open))»·3-bet «IP (BTN (bên call))» 행 추가 권고(소스 presets.ts L390·L432 · PresetPreview.vue L65-66).

## 미결
- C에서 종결: 포크 보고 ①~⑨ 전건 판정 — ① «OOP (SB (bên open))» 솔버 소스 presets.ts oopLabelVi로 확인 ✓ ② 3-bet IP 라벨 → bet-sizing «IP (BTN (bên call))»로 교체(3bet-low는 비굵게 서술이라 유지) ③ MDF 병기 = 브리프 지정 · 새 명제 아님 ✓ ④ donk 문장 ✓ ⑤ 10-10-6-6-3 ✓ ⑥ readnext = «EN 카드 문구 번역»이 정본(형제 vi 관행) → 3장 교체 · a-high→position은 유지 ⑦ OOP/IP·SPR 풀이 7편 보강 ⑧ «EV mất» ✓ ⑨ 범위 «N%–M%» 통일.
- 헤드 판단 대기(C에서 안 고침): SEO 산문 흡수(wet board·paired board·board texture · 볼륨 10) · 3bet-low 본문 «ace-high/king-high» 풀네임(tldr 확정 카피와 연동) · 기메 «» 인용(형제 vi 10편도 사용) · trips 주인 편 미지정(⑥ paired H2 vs ⑬ ace-paired seoTitle·FAQ — EN 구조 그대로 · 계획 §3-C에 행 추가 제안).
