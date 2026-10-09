# vi-gloss 진행 — 🅵 용어

> 정본 = `docs/vi-cluster-plan.md`(§1 범위 · §3 용어·소유표 · §5 fr→vi 차이 표) + `docs/fr-cluster-plan.md` §5 치환표 + `docs/ms-translation-lanes.md` §3~§9. EN 기준 해시 `b57cb658`.
> SERP 입력 = `docs/keyword-bank/vi-serp/L-F-gloss.md` + `00-brief.md` + `vi-core-volumes.md`(§2 오염 표기 · §4 판정) — 다시 조사하지 않는다(계획 §2-①).

> 🔴 `/vi/glossary` 도구가 **배포 회차에 같이 신설된다**(§3-D ①) → holdem-glossary는 처음부터 seoTitle·H1·tags에 «thuật ngữ poker»를 쓰지 않고 «X trong poker là gì — 영→베 대응 + 쓰이는 자리» 각도 + 첫 화면 도구 링크(앵커 «thuật ngữ poker» · 링크 `/vi/glossary`). rake 합법성 FAQ → 운영 질문으로(세율·법령 안 씀 · §12-B) · tilt H2는 bad-beat(⑱) · bad beat jackpot = 구조만(⑲) · 단독 «X là gì» 전부 오염 → 조준어 «X poker là gì / X trong poker là gì».

## 상태 — A ✅ (10-09 · 브리프 `docs/vi-lanes/gloss-brief.md` · Fable 카피 1회 → Opus 재측정·수정 6자리) / B ✅ (10-09 · 집필 6편 · 자기 게이트 🔴 0) / C ☐ · 커밋 —

B 산출(2026-10-09 · 🔴 모델 = Fable 5.1 — HARDEN은 Opus 5.5 지정이나 사장님 지시 «B 시작»으로 그대로 진행 · C에서 렌즈·아스트라 교차로 보강): `git merge main` ✅ · 6편 `lib/posts-vi/<slug>.ts` 신규 · `index.ts` vi-gloss 칸 두 곳 등록 · 브리프 확정 카피 축어(seoTitle·desc·H1·tldr·tags·H2·FAQ 문항 전부) · 구조 EN 1:1(표 행 115+현지 11 · 박스·이미지·디렉티브·== 색 동일) · 현지 추가 = glossary H2 #3 영→베 표 11행 + FAQ 9~11 + 링크 6(`/vi/glossary` 1 · reading-the-board 2 · bad-beat 1 · strategy 1 · 3bet 1) · bad-beat `/vi/calculator` 앵커 «máy tính equity» 1 넣음(선택 → C 확인 대상) · rake FAQ 8 «Tại sao phòng poker thu rake?» 교체(Molly's Game·합법성 0) · §13 값·카드 EN 축어(구분자만 §1-B). 자기 게이트: `audit:hard --locale=vi` 6편 전부 🔴 0 🟠 0(커버리지 ⚠ bad-beat·cooler 카드 문단 2씩 미판정 → C 손검산) · `check:intl-links` = 대상 미번역 경고만(다른 레인 몫 · 정상) · `check:structure --tail` = 내 6편 결손 0(vi 결손 4편은 기존 8편 = 🅰·🅱·🅴 몫) · `npx next build` exit 0 · `/vi/blog/` 14편 HTML(6편 생성 확인) · sitemap·tsbuildinfo 복구.

A 산출(2026-10-09): `git merge main` ✅(b5a0a6ca) · EN 6편 기준 해시 뒤 변경 0(diff 빈 출력) · 해부 스크립트(스크래치 `dissect.mjs` · `s13.mjs`) = 메타 코드포인트 · H2/이미지/디렉티브/FAQ L## · 링크 전수(대상 20종 전부 51편 안 · `<a id>` 0 · 외부 1 gtowizard) · 카드 라벨/제목/설명 축어 · §13 후보 줄 100행. 손검산 4자리 통과(잭팟 AAJJ vs JJJJ · 마부치 쿼드 vs 로열 · set over set 777QJ vs JJJQ7 · AA vs KK/77 비율) + 수치 재계산(1/96 · 1 trên 8,5 · one-outer 96% = 플랍 기준). Fable 서브 1회(입력 = EN 메타·H2·FAQ + 키워드·PAA 축어 + §3-A·§3-C·⑦ + posting.mdc SEO 카피) → 6편 카피 · 길이 전부 한도 안(seoTitle 49~55 · desc 144~151 · H1 65~74) · Opus 수정 = glossary tags 2(ante·buy-in → 몫 밖) · bad-beat tags 1(all-in) · 인용부호 «» → 곧은 " 3편 · Where to Go Next 라벨 채택.

## 편별
| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-glossary | ✅ | ✅ | ☐ | 현지 추가 H2 1(영→베 대응 표) · 첫 화면 `/vi/glossary` 앵커 · FAQ +3(Blind·Buy in·chơi giỏi — PAA) · 추가 앵커 5(nuts 2 · tilt · bluff · 3-bet) |
| holdem-bad-beat | ✅ | ✅ | ☐ | H2 #9 = 정본 «Tilt là gì — làm gì ngay sau một bad beat?» + tilt 정의 1~2문장 · `/vi/calculator` «máy tính equity» 선택 1 |
| holdem-cooler | ✅ | ✅ | ☐ | 1:1 · H2 #3 AC «poker cooler vs bad beat» 축어 |
| holdem-fish | ✅ | ✅ | ☐ | 1:1 · readnext·카드 제목 «chart/bảng» 금지(§3-C ⑥) |
| holdem-rake | ✅ | ✅ | ☐ | FAQ L166 합법성 → «Tại sao phòng poker thu rake?» 교체 · «nhà cái» 금지 |
| holdem-straddle | ✅ | ✅ | ☐ | 1:1 · FAQ 1에 PAA «Straddle nghĩa là gì?» 포커 문맥 흡수 |

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

## 링크 편차
| slug | EN 링크 대상 | 처리(빼기/대체 → 대상) |
|---|---|---|
| (6편 전부) | 전부 51편 안 · 외부 gtowizard 1 | **편차 0** · 현지 추가 = glossary `/vi/glossary` 1 + reading-the-board 2 + bad-beat 1 + strategy 1 + holdem-3bet 1 · bad-beat `/vi/calculator` 선택 1 |

## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
- `holdem-bad-beat.ts:L94` | one-outer «~96%»에 스트리트 조건 없음(플랍 기준 95,6% · 턴 기준 97,7%) | L-F §6-B · vi는 EN 값 유지
- `holdem-glossary.ts` | 표에 없는 용어 — Monster draw · Flip(coinflip 명사) · Snap call은 있음 · ITM·GTD 있음 | «bluff poker là gì» related 축어(L-F §11-2) · vi에 추가하지 않음

## 헤드 요청
1. **카드 라벨 Rules → «Luật chơi» · Strategy → «Chiến thuật»** 레인 결정 — 머지 때 다른 레인(🅰·🅳)과 대조해 통일 요청(§3-A ⑥에 두 라벨이 없다).
2. **«thuật ngữ» 단어 자체를 glossary seoTitle·H1·tags에서 금지**로 보수 해석했다(§3-C ①은 «thuật ngữ poker» 구만 명시). 다른 해석이면 카피 재판정 필요 — 현 카피는 «từ poker tiếng Anh» 각도.
3. **«Buy in poker là gì?» 20** — §3-C에 주인 없음(L-F §2는 L-E 잠정 인계). glossary FAQ 10으로 흡수했다(1줄 정의 + 대회 fee 구조). 🅴가 정의 H2를 세우면 glossary는 앵커로 바꾼다.

## 미결
- 🔴 **B는 Fable 5.1로 집필했다**(HARDEN 지정 Opus 5.5 아님) → C 렌즈 + 아스트라 교차를 생략 없이 전건 돌린다.
- B가 넣은 bad-beat `/vi/calculator` 앵커(H2 #5 절 끝 «máy tính equity») → C가 `vi-tools.md`로 핸드 vs 핸드 equity 지원 1회 확인 · 미지원이면 문장 삭제.
- glossary 본문에서 «thuật ngữ» 단어 = 도입부 앵커 1회뿐(헤드 요청 2와 일관).
- fish 표 «Fish» 행 머리 풀이 «(nghĩa đen là "cá")»는 설명 열에 두었다(머리 괄호 1개 규칙).
- `/vi/glossary` 도구 링크를 걸었다(계획 §1 «생길 것으로 보고 건다») — 배포 회차 ① 신설 전까지 빌드의 intl-links가 경고할 수 있음(정상).
- bad-beat `/vi/calculator` 앵커는 **선택** — B가 넣으면 C가 계산기 핸드 vs 핸드 equity 지원을 `vi-tools.md`로 1회 확인.
