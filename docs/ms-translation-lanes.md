# ms 신규 번역 레인 — 5레인 병렬 정본 (2026-09-26 신설)

> **누가 읽나**: `Holdem-ms-*` 레인 창 5개(각 창 신분증 `HARDEN.md`가 이 파일을 가리킨다) + 헤드(본체 main).
> **왜 생겼나**: 사장님 지시(09-26) — *«ms를 별도 레인창에서 · 35편이 빠져 있으니 클러스터별로 레인을 띄워 병렬로 · Opus 5.5 성능 개선 참고 · Fable은 한도가 빨리 닳으니 최적 위치에만 · 검수 폴더는 GPT 아스트라 · 키워드 MCP 2개 활용 · 고품질 포스팅이 나오는 프로세스»*.
> **무엇이 아닌가**: 레인 규율(쓰는 파일·git·세션)은 `docs/hardening-protocol.md` §1·§2와 같다 — 여기엔 **«경화가 아니라 신규 번역»이라 다른 점**만 적는다. 포스팅 규격 본체는 `.cursor/rules/posting.mdc`, 핸드 검산은 `CLAUDE.md` §13, 검수 3층은 `REVIEW-PROTOCOL.md`.
>
> 🔴 **헤드 = 본체 main 창**(`Holdem_Project`). 레인은 글을 쓰고, 헤드가 머지·빌드·배포·우편함을 한다. **머지가 곧 승인이다.**

---

## 0. 범위 — 30편 · 5레인

EN에 있고 ms에 없는 35편 중 **대회 가이드 5편은 제외**(사장님 09-26): `apt-incheon-2026-guide` · `ept-barcelona-2026-guide` · `wpt-australia-2026-guide` · `korea-poker-marathon-2026` · `wsop-2026-tournament-guide`.

| 레인 | 창 · 폴더 · 브랜치 | 편수 | 슬러그 (EN `lib/posts-en/<slug>.ts`가 마스터) |
|---|---|---:|---|
| 🅰 족보 | `Holdem-ms-rank` · `harden-ms-rank` | 5 | holdem-flush-vs-straight · holdem-kicker · holdem-tiebreak-rules · holdem-split-pot-rules · holdem-reading-the-board |
| 🅱 확률 | `Holdem-ms-prob` · `harden-ms-prob` | 7 | holdem-probability · holdem-pot-odds · holdem-outs · holdem-drawing-odds · holdem-implied-odds · holdem-equity · holdem-card-counting |
| 🅲 전략 | `Holdem-ms-strat` · `harden-ms-strat` | 8 | holdem-strategy · holdem-positions · holdem-position-play · holdem-starting-hands-chart · holdem-limping · holdem-3bet · holdem-continuation-bet · holdem-when-to-fold |
| 🅳 토너먼트 | `Holdem-ms-tour` · `harden-ms-tour` | 4 | holdem-tournament · holdem-icm · holdem-bubble · holdem-short-stack |
| 🅴 용어 | `Holdem-ms-gloss` · `harden-ms-gloss` | 6 | holdem-glossary · holdem-bad-beat · holdem-cooler · holdem-fish · holdem-rake · holdem-straddle |

🔴 **레인은 자기 슬러그 파일만 만든다.** 다른 레인의 슬러그·기존 ms 21편·다른 로케일은 건드리지 않는다.

### 0-A. 링크가 «걸려도 되는» ms 대상 = 51편
기존 21편(`lib/posts-ms/index.ts` 현재 목록) + 위 30편. 다른 레인이 아직 쓰는 중이어도 **건다** — 배포는 30편이 전부 머지된 뒤 1회다(§6).
🔴 **제외한 대회 가이드 5편으로 가는 EN 링크는 걸 수 없다** → 문장을 살리고 링크만 빼거나, 같은 문맥의 51편 중 하나로 바꾼다. 어느 쪽으로 했는지 진행 파일 «링크 편차»에 적는다(헤드가 `check:structure` 편차 판정에 쓴다).

---

## 1. 공통 기준 — 레인 5개가 «같은 말»을 쓰게 하는 장치

GTO 13편 전파 때 렌즈가 가장 많이 잡은 결함이 **«배치 경계에서 용어가 갈린다»**였다(`settled-decisions` §5-A-4 — zh-hant 16조 · zh 17항). 이번엔 **레인 5개가 곧 경계 5개**다. 그래서 아래를 **레인이 판단하지 않고 그대로 쓴다**.

### 1-A. 고정문 (기존 ms 21편 다수결 실측 · 2026-09-26)

| 자리 | 정본 | 쓰지 마라 |
|---|---|---|
| 직답 블록 라벨 | `> **Jawapan ringkas**` (14/14) | Jawapan pantas · Ringkasnya · Kesimpulan ringkas |
| readnext 라벨 | `:::readnext[Baca seterusnya]` (16/21) | Teruskan membaca(구판 5편 — 이번엔 따라 하지 않는다) |
| FAQ H2 | `## Soalan Lazim` | Soalan lazim(소문자 9편 — 기존 편은 헤드가 나중에 정리) · FAQ |
| 관련 글 H2 | `## Artikel Berkaitan` | Bacaan lanjut · Artikel lain |
| readTime | `"N minit"` | min · minutes |
| category | **EN 파일의 값 그대로** | 번역 금지 |
| 2인칭 | 문중 `anda` · 문두·제목 `Anda` | kamu · awak |

### 1-B. 용어·표기 정본
- **`docs/keyword-bank/ms-posting-reference.md`** (정본 · 코퍼스 실측 + 원어민 3인 지뢰 목록 §3) → 그다음 `docs/translation-terms-ms.md`(착수 전 리서치 · 정본과 어긋나면 정본이 이긴다).
- 🔴 **인니어 유입이 ms 최대 위험이다**: kartu→**kad** · uang→**wang** · ronde→**pusingan** · bisa→**boleh** 등. `lib/posts-id/`를 «참고»로 열어도 되지만 **문장을 가져오지 마라**.
- **숫자 = 영어식**(천단위 콤마 · 소수점 마침표). §13 값은 EN 축어 — 변환하지 않는다.

### 1-C. 새 용어가 필요하면
1-A·1-B에 없는 용어를 처음 정할 때는 **진행 파일 «신규 용어» 표**에 `EN 원어 | 채택 ms | 근거(URL·코퍼스 grep)`로 적는다. 헤드가 머지 때 다섯 레인의 표를 대조해 갈린 것을 판정한다(§6-③).

---

## 2. 모델 배치 — Opus 5.5 중심 · Fable은 «카피 판정» 한 자리

| 층 | 모델 | 왜 |
|---|---|---|
| 레인 A·B·C 본체 | **Opus 5.5** | A·C는 도구 왕복(Fable이면 매 턴 재독 비용이 한도를 태운다 · `settled-decisions` §5-A-4). B는 EN 1:1 재저작이고 §13은 축어 복사라 판단 밀도가 낮다 — 개선된 Opus 5.5로 충분하다 |
| **A-⑥ 카피 판정** | **Fable 서브 1회/레인** (`Agent` · `model: "fable"`) | 클릭률이 걸린 문안(seoTitle·desc·tldr·H2 세트)만. **입력 = 브리프의 키워드 표 + EN 메타·H2 목록 + §1-A 고정문**. 대화·진행 파일·빌드 로그를 물려주지 마라(서브가 본체만큼 먹는다) |
| C 렌즈 4종 | Opus 서브 (`model: "opus"` 명시) | 같은 계열이라 맹점이 겹친다 → 그래서 아래 층이 필수다 |
| **다른 계열 교차** | **GPT 아스트라(검수 폴더)** | 헤드 배포 후 커밋 해시 기준 판정(§7). Opus·Fable은 한 가족이다 |

🪶 Fable 잔량이 넉넉하면 **필라 4편(probability · strategy · tournament · glossary)의 B 본문만** Fable로 써도 된다 — 사장님이 그 창에서 `/model`을 바꿔 주실 때만. 기본은 Opus다.
🔴 레인은 `/model`을 못 바꾼다. 위 서브 호출은 레인이 `Agent` 도구로 직접 한다 — 사장님 손이 필요 없다.

---

## 3. 회차 모양 — 한 레인 = 세션 3개 (A → `/clear` → B → `/clear` → C)

| 구간 | 입력 | 출력 | 끝나면 레인이 말할 것 |
|---|---|---|---|
| **A 준비** | EN 원문 · 키워드 MCP · 현지 SERP 원문 | `docs/ms-lanes/<id>-brief.md` + `docs/keyword-bank/ms-<id>.md` | 「▶ `/clear` → 「HARDEN.md 읽고 B 시작해」」 |
| **B 집필** | **브리프 하나만** | `lib/posts-ms/<slug>.ts` N편 + index 등록 + 자기 게이트 🔴 0 | 「▶ `/clear` → 「HARDEN.md 읽고 C 시작해」」 |
| **C 마감** | 편집본 · `git diff` · 브리프 | 게이트 전건 · 렌즈 4종 · 2차 교열 · 커밋 · 보고 | 「▶ 헤드 창에 「ms-<id> 끝났어, 머지해」」 |

🔴 `/clear`로 끊는 이유: 브리프가 **유일한 입력**이어야 B가 기억으로 사실을 쓰지 않는다(`hardening-protocol` §2 «B 구간에 도구 왕복을 넣지 마라»). 컨텍스트를 비우면 Opus도 싸진다.
🔴 **사장님이 치는 것은 창마다 「HARDEN.md 읽고 A(또는 B·C) 시작해」 한 줄뿐이다.** git 명령은 레인이 친다.

---

## 4. A 준비 (Opus 5.5) — 품질은 여기서 결정된다

① `git merge main` → 진행 파일 `docs/ms-lanes/<id>-진행.md` 통독 → §1 공통 기준 통독(`ms-posting-reference.md` §2·§3·§8·§9 필독).

② **EN 원문 해부** — 편마다:
- 메타(title·seoTitle·desc·tldr·tags·category·updated) · H2/H3 목록 · FAQ 문항 · 표 · 이미지 · 디렉티브 · **내부링크 대상 목록**(§0-A 대조 → 걸 수 없는 것 표시)
- **§13 자리 목록**: 카드·확률·계산·표 수치가 나오는 문단 L## 전부 (C의 손검산·전사 대조 대상)
- 1인칭 경험담 문단 L## (B가 현지 맥락으로 옮길 자리 — **EN에 있는 경험만**)
- 파일 머리 주석의 «되돌리지 마라»·동결 지시 → 브리프에 그대로 싣는다(`hardening-protocol` §3-③-0-C)

③ **키워드 실측 — MCP 2종 분업** (정본 `docs/rakko-playbook.md` · 🔴 CPC는 근거로 쓰지 않는다)

| 단계 | 도구 | 설정 | 무엇 |
|---|---|---|---|
| 후보 발굴 | **DataForSEO** Labs — `keyword_suggestions` · `related_keywords` · `keyword_ideas` | `location_code 2458`(Malaysia) · 언어는 먼저 `dataforseo_labs/locations_and_languages`로 **ms 지원 여부 확인**(없으면 `en` + 말레이어 시드 — 볼륨은 location이 가른다 · 플레이북 §0 「language는 볼륨을 안 나눈다」) | 말레이어 시드(편당 2~4개: 예 `kebarangkalian poker` · `pot odds poker` · `kicker poker maksud`) + 영어 시드 병행 |
| 후보 보충 | 구글 자동완성 직접 | `suggestqueries.google.com/complete/search?client=firefox&hl=ms&gl=my&q=<시드>` + 와일드카드 위치 변형 | 실제 입력 표현·띄어쓰기 |
| **볼륨 채점** | **라쿠** `search-volume-history` | `location: "Malaysia"` · `language: "Malay"`(명칭은 `metadata-locations`·`metadata-languages`로 확인) | 12개월 볼륨·추세. 🔴 **라쿠의 나머지 도구(suggest·related·question·headline·co-occurrence…)는 Japan 고정이라 ms에 쓰지 마라**(플레이북 §8-1) |
| SERP 실측 | **DataForSEO** `serp/google/organic/live/advanced` | `location_code 2458` · `language_code "ms"` · 편당 헤드 후보 1~2개 · 🔴 태스크는 1개씩 | top10 URL · **PAA 질문** · 관련 검색 · 결과 언어 분포(말레이어 글인가 영어 글인가) |
| 난이도 | DataForSEO Labs `bulk_keyword_difficulty` | 2458 | 후보 채점 보조 |

- 🔴 **자릿수 함정**: 볼륨이 튀면 자동완성으로 의도를 확인한다(`씨벳` 6,600 = 베팅 사이트 브랜드였다). 말레이시아는 도박 광고 키워드가 섞인다 — `judi`·`kasino` 계열은 의도부터 본다.
- 🔴 **영어 검색이 우세한 자리가 있다**: 말레이시아 사용자는 포커 용어를 영어로 치는 경우가 많다. 영어 쿼리 볼륨이 더 크면 **seoTitle에 영어 술어 + 말레이어 본문**(es 13편의 «훅은 숫자, 검색 표면만 영어 술어» 선례)을 브리프에 적는다.
- 산출 = `docs/keyword-bank/ms-<id>.md` — 편마다 `winnable 후보(볼륨·KD·SERP 유형) · 함정 · 기존 ms 21편과의 태그 카니발 후보`.

④ **현지 상위 글 원문** — 편마다 SERP 상위 중 **실제 글 2~3편을 원문으로** 연다(Playwright `browser_evaluate`로 h2·h3·FAQ 추출 · §12-B 요약 금지). 적을 것: 그들이 주는 것 / 빠진 질문 / 쓰는 용어(= ms 독자가 실제 보는 표기).

⑤ **브리프 작성** `docs/ms-lanes/<id>-brief.md` — 편마다 한 절:
```
## <slug> — EN updated <날짜>
### 메타 (EN 축어) — title · seoTitle · desc · tldr · tags · category
### 구조 — H2/H3 목록(EN 축어) · FAQ 문항 수 · 표 수 · 이미지 경로 · 디렉티브 · readnext 카드
### 링크 — 대상 slug 목록 · 걸 수 없는 것과 처리(빼기/대체)
### 키워드 (실측치 · 도구 · 날짜) — winnable → H2/FAQ/태그 어디에 · 함정
### 현지 SERP — 상위 글이 주는 것 · 우리가 더 줄 것 3가지 · PAA 질문(축어)
### 확정 카피 — (⑥ Fable 서브 출력) seoTitle · desc · tldr · H2 세트
### §13 자리 — L## 목록 · 카드·수치 축어
### 경험담 자리 — L## · EN 축어
### 하지 말 것 — 되돌리지 마라 · EN-먼저 후보
```
🔴 **EN 원문은 축어로 싣는다** — B가 EN 파일을 다시 열지 않게.

⑥ **Fable 서브 1회 — 카피 판정.** 입력: 편마다 `EN 메타 + EN H2 목록 + 키워드 표(실측치) + PAA 축어 + §1-A 고정문 + posting.mdc «SEO 카피» 절 축어`. 요구: 편마다 seoTitle(~55자 · 훅+키워드) · desc(≤160자 · 권장 ~120) · tldr(평문 2~3줄 · 마크다운 금지) · H2 세트(질문형 70% · 현지 실검색 형태소 · EN 질문형 직역 금지) · 어느 키워드를 어느 H2/FAQ에 흡수했는지 한 줄씩. 🔴 **새 사실을 만들지 마라 · 수치는 EN에 있는 것만**. 출력을 브리프 «확정 카피»에 넣고, 글자 수를 **Opus가 재서** 넘친 것만 다듬는다.

⑦ 진행 파일 갱신 → 멈춘다: 「**브리프 완성** — ▶ `/clear` → 「HARDEN.md 읽고 B 시작해」」

---

## 5. B 집필 (Opus 5.5) — 브리프 하나만

순서는 편마다 **구조 골격(EN 1:1) → §13 축어 → 확정 카피 → 본문 재저작 → 경험담 → FAQ → 링크**.

- **틀**: 기존 ms 편 하나를 열어 필드 모양을 복사한다(권장 `lib/posts-ms/holdem-hand-rankings.ts` — 09-26 최신). `masterUpdated` = 브리프의 EN `updated` · `updated`·`date` = 집필일 · `slug` = EN과 동일 · 이미지 경로 = EN과 동일(🔴 다국어 글은 **content에 히어로를 넣지 않는다** — 렌더러가 그린다 · posting.mdc STEP 3).
- **구조 패리티**: H2/H3·표 행·리스트·이미지·FAQ 수·디렉티브·하이라이트 색은 EN과 같게(**많은 것은 허용 · 적은 것은 결손**). 확정 카피가 H2를 추가했으면 그것은 «현지 추가»다.
- **직답**: 각 H2 직후 40~75단어 자기완결 단락. 필요한 자리엔 `> **Jawapan ringkas**`.
- **§13**: 카드·확률·계산·표 수치는 **EN 축어 복사**(숫자 형식 변환 없음 — ms는 영어식이다). 번역 중 카드가 바뀌는 사고(`T8s→108s` · 「AA 和 KK」)는 전부 이 자리에서 났다.
- **경험담**: EN 1인칭을 말레이시아 독자 맥락으로 **다시 쓴다** — 단 **없는 사실 금지**(말레이시아 카지노·대회·금액을 지어내지 마라. 브리프에 출처가 있는 것만).
- **금지**: 백틱 · `**` 중첩 · tldr 안 마크다운 · 「완벽 정리」류 · slug·이미지 변경 · 인니어 어휘 · 다른 레인 파일.
- **등록**: `lib/posts-ms/index.ts`의 **자기 레인 칸 두 곳**(import 칸 · 배열 칸)에만 넣는다. 칸 밖을 고치면 다섯 레인이 충돌한다.
- **자기 게이트**(편마다): `npm run audit:hard -- --locale=ms --slug=<slug>` 🔴 0 · 끝에 `npm run check:intl-links` · `npm run check:structure`(ms 행에서 내 슬러그 결손 0 — 링크 편차는 §0-A 기록분만) · `npm run build` 통과.
- 멈춘다: 「**집필 N편 완료 · 자기 게이트 🔴 0** — ▶ `/clear` → 「HARDEN.md 읽고 C 시작해」」

---

## 6. C 마감 (Opus 5.5)

⓪ `git merge main`(헤드가 다른 레인을 머지했으면 `index.ts`가 바뀌어 있다 — 칸이 달라 대개 자동 병합) · 충돌은 레인이 푼다.

① **게이트 전건**: `audit:hard -- --locale=ms`(내 슬러그) · `check:intl-links` · `check:structure` · `check:meta` · `check:seo-sync` · `build`. 커버리지의 «시나리오 못 잡은 글»은 미검사다 → ②로.

② **§13 전사 대조 — 스크립트로 먼저**: 내 편마다 EN과 ms 본문에서 `카드 토큰([2-9TJQKA]|10)[♠♥♦♣]` · `숫자(%·:·bb·$ 포함)`를 뽑아 **집합 대조**한다(scratchpad에 20줄 `.mjs`). ms에만 있는 수치·카드 = 전사 오류 후보 → 전건 판정. 그다음 브리프 §13 자리 중 커버리지 밖 문단을 **손검산**(7장 → 베스트5 → 비교).

③ **렌즈 4종 병렬**(한 메시지에 4개 · `model: "opus"` · 프롬프트 장치 4개는 `REVIEW-PROTOCOL.md` 3층 그대로 · 공통 문구 「문제없으면 없다고 써라 · 오탐보다 오통과가 나쁘다」 · 확신도 필수 · «EN에도 같은 문장이면 EN-먼저로 표기»):
   - **딜러·수학**: §13 재산 · EN 대조 전사 · D유형(실전 유해 조언)
   - **ms 네이티브**: 페르소나 = `ms-posting-reference.md` §3의 3인(KL 레귤러 · DBP 교정자 · JB 초심자) · **인니어 유입** · anda 자리 · 직역투 · §1-A 고정문 준수
   - **SEO/GEO 편집자**: 메타 길이 · FAQ 정형(`**Q.`+빈 줄+`A.`) · H2가 브리프 실측 쿼리를 받는가 · 기존 ms 21편과 태그 카니발 · 링크 실존(§0-A)
   - **교열**: `git diff`를 준다 · 지적마다 ①EN 유래 / ②이번 번역 유래 표기
④ 전건 원문 판정(채택/기각 근거 한 줄) → 반영.
⑤ 🔴 **반영이 3건 이상이면 2차 교열 필수**(반영 diff만 교열 렌즈 1개에) — 수리가 새 결함을 만든다(`hardening-protocol` §5 말미).
⑥ 커밋(push 금지):
```bash
git add lib/posts-ms/<내 슬러그들>.ts lib/posts-ms/index.ts docs/ms-lanes/<id>-* docs/keyword-bank/ms-<id>.md
git commit -F commit-msg.txt   # "ms(<id>): <클러스터> N편 신규 — 렌즈 4종 X/반영 Y · 2차 교열 Z"
```
⑦ 진행 파일 갱신 → 보고하고 멈춘다:
```
ms-<id> · <클러스터> N편 · 커밋 <hash>
키워드: 실측 a개(DFS b · 라쿠 c) · winnable 흡수 d · 함정 e
카피: Fable 서브 1회 · 글자수 조정 f
렌즈 4종: 지적 X · 반영 Y · 기각 Z(EN-먼저 W) · 2차 교열 V
§13: 전사 대조 불일치 g(판정 완료) · 손검산 h자리
게이트: audit 🔴 0 · intl-links 0 · structure 결손 0(링크 편차 i건 기록) · build ✅
신규 용어: j개(진행 파일 표) · 헤드 요청: …
▶ 다음 지시: 헤드 창에 「ms-<id> 끝났어, 머지해」
```

---

## 7. 헤드(본체 main)가 하는 것

1. **레인이 끝나는 대로 머지**(`git merge harden-ms-<id>`) — 🔴 **배포는 아직 안 한다**(§0-A: 다른 레인 글로 가는 링크가 404가 된다). 머지 뒤 `npm run lane:sync -- --apply`로 남은 레인에 밀어 준다.
2. **5레인 전부 머지 후**:
   - ③ **신규 용어 대조**: 다섯 진행 파일의 «신규 용어» 표를 합쳐 같은 EN 원어에 다른 ms가 붙은 것을 판정 → 정정은 queue 레인 회차로(헤드는 글을 고치지 않는다 · `hardening-protocol` §1-B).
   - ④ **레인 경계 교차 렌즈 1회**(Opus 서브): 입력 = 30편에서 스크립트로 뽑은 «용어 사용 빈도표 + §1-A 고정문 위반 목록 + 레인별 H2 첫 단어 분포»(전문을 주지 마라). GTO 전파의 최대 수확이 이 절단면이었다.
   - ⑤ **기존 21편 링크 복원**: 21편은 대상이 없어 링크를 뺀 채 발행됐다(`check:structure` 「대상 글이 그 로케일에 없어서 걸 수 없는 링크 — ms 56」). 30편이 생겼으니 EN 대로 복원 → **queue 레인 회차 1개**. 같은 회차에 §1-A 구판 라벨(Teruskan membaca 5편 · Soalan lazim 소문자 9편) 정리.
   - ⑥ `npm run build`(N intl posts 확인) → push → 라이브 `page.content()` 표본 확인 → `npm run indexnow -- --since <오늘>`.
   - ⑦ **MB → 검수장**: 커밋 해시 · 30편 목록 · EN 대응 파일 · **아스트라 요청 항목**(아래 §8) · 동결 선언.
   - ⑧ WORKLOG · 핸드오프.

---

## 8. 교차 검수 — GPT 아스트라(검수 폴더)

- **대상**: 헤드 배포 커밋 해시의 `lib/posts-ms/` 30편(+ 링크 복원 회차가 먼저 끝났으면 그 해시).
- **요청 항목 우선순위**: ① **인니어 유입·말레이시아 register** ② **§13 전사**(EN 대조 — 재계산이 아니라 대조) ③ 의미 왜곡(EN과 다른 주장) ④ 메타·FAQ 정형.
- 🔴 **동결**: MB를 보낸 순간부터 MA 회신까지 **ms 30편은 아무도 고치지 않는다**(원문이 갈리면 보고서가 통째로 무효 · `settled-decisions` §5-A-4 병렬 레인 절).
- MA 수신 → 다음 헤드 세션이 판정·등재 → 정정은 queue 회차(또는 해당 ms 레인을 다시 연다).

---

## 9. 진행 파일 규격 — `docs/ms-lanes/<id>-진행.md`

```
# ms-<id> 진행
## 상태 — A ☐ / B ☐ / C ☐ · 커밋 <hash>
## 편별 — slug | A 브리프 | B 집필 | C 렌즈 | 비고
## 신규 용어 — EN | 채택 ms | 근거
## 링크 편차 — slug | EN 링크 대상 | 처리(빼기/대체 → 대상)
## EN-먼저 후보 — EN 파일:L## | 무엇 | 근거
## 헤드 요청
## 미결
```
🔴 진행 파일은 **자기 레인 것만** 쓴다. 다른 레인·헤드 파일(WORKLOG·핸드오프·mailbox·settled-decisions)은 «헤드 요청»으로.
