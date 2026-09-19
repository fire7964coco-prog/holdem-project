# MS 키워드 뱅크 — `/ms/calculator` (계산기 랜딩 · 2026-09-19)

> 실측 2026-09-19. 도구 = Google 자동완성(59시드 × 4조합 `hl×gl`) · DataForSEO `search_volume`(location **Malaysia** 2458 ·
> 🔴 `language_code` 제외 — 넣으면 40501) · DFS `serp/google/organic/live/advanced`(location 2458 · mobile · language `en`과 `ms` 양쪽).
> 🔴 CPC는 근거로 쓰지 않는다(벤더 간 30배). 브리프 = `docs/harden-brief/calculator-landing-rewrite.md` §3-A + §3-B~K.

## 0. 한 줄 결론

**말레이어 계산기 어휘는 시장에 없다(볼륨 null · 자동완성 0건) — 그런데도 제목은 말레이어 «Kalkulator Poker»다.**
영어형(90)을 조준하지 않는 이유는 id(§3-K ②)와 같고, 말레이어를 조준하는 이유는 id와 **다르다**(아래 §5).

## 1. 코어 볼륨 (Malaysia · 월 · DFS `search_volume`)

### 1-A. 영어형 — 살아 있다

| 키워드 | Vol | 비고 |
|---|---|---|
| **poker odds calculator** | **90** | 머리어. 12개월 40~140 진동 |
| **poker calculator** | **90** | 12개월 50~140 |
| poker equity calculator | 20 | |
| poker hand calculator · icm calculator · pot odds calculator · outs calculator · push fold chart · texas holdem calculator · holdem calculator | 각 **10** | 전부 바닥값 |

### 1-B. 말레이어형 — 전부 null

| 키워드 | Vol |
|---|---|
| kalkulator poker | **null** |
| kalkulator odds poker (= 현 `CALC_CTA_LABELS.ms`) | **null** |
| kalkulator peluang poker | **null** |
| kebarangkalian poker · ekuiti poker | **null** |
| peluang poker | 10 (단 1개월만 기록) |

### 1-C. 시장은 있다 (대조군)

`texas holdem` **720** · `poker malaysia` **140**.
→ **말레이시아에 포커 검색자는 있고, 도구를 영어로 친다.**

## 2. 자동완성 (59시드 × `ms-MY` / `en-MY` / `ms-SG` / `ms-BN`)

**생존 36 / 전멸 23.** 원자료 `tmp/ms-calc-suggest.json`(회차 후 삭제 · 수치는 이 문서가 정본).

### 2-A. 🔴 말레이어 도구·개념구 22개가 전멸

`kalkulator poker`(**4조합 모두 0건**) · `kalkulator peluang poker` · `kalkulator kebarangkalian poker` ·
`kalkulator ekuiti poker` · `kalkulator tangan poker` · `pengira poker` · `pengiraan poker` · `kebarangkalian poker` ·
`ekuiti poker` · `peratus menang poker` · `cara kira peluang poker` · `cara kira pot odds` · `cara kira outs` ·
`cara kira icm` · `nilai m poker` · `carta push fold` · `tangan permulaan poker` · `carta tangan permulaan poker` ·
`kedudukan tangan poker` · `susunan tangan poker` · `siapa menang poker` · `texas holdem peluang` · `jadual peluang poker`

`kalkulator odds poker`는 **자기 echo 1건**뿐(확장 0) — 현 CTA가 이것이다.

### 2-B. 영어형은 전부 살아 있다

`poker odds calculator` 9 · `poker calculator` 14 · `poker equity calculator` 9 · `poker hand calculator` 9 ·
`icm calculator` 12 · `pot odds calculator` 9 · `outs calculator` 11 · `push fold chart` 9 · `texas holdem calculator` 12 ·
`which poker hand wins` 10(→ `which poker hand wins calculator`) · `pot odds poker` 11 · `outs poker` 11 · `equity poker` 14 ·
`icm poker` 9 · `spr poker` 14 · `push fold poker` 10 · `bubble poker` 11 · `deal icm` 9 · `chip chop poker` 5

### 2-C. 🔴 권역차 0 — 단, 축이 «나라»가 아니라 «hl»이다

`ms-MY` ≡ `ms-SG` ≡ `ms-BN`이 **59시드 전부 동일**했다(fr의 FR/BE/CH/CA 74시드 동일보다 더 붙어 있다).
차이는 오직 `en-MY`에서 왔다 — 즉 **말레이어권은 하나의 시장이고, 갈리는 것은 나라가 아니라 «어느 언어로 치는가»다.**

### 2-D. 🔴 새 함정 — 구글 `hl=ms` 자동완성 DB가 인도네시아어로 오염돼 있다

`cara main poker` → `ms-MY`가 「cara main poker **gimana**」·「**remi**」·「**kartu**」를 준다. 셋 다 **인도네시아어**다
(말레이어는 `macam mana`·`kad`). `peluang **kartu** poker`도 같다.
→ **말레이어를 자동완성으로 판정할 때는 인니어 오염을 먼저 걸러라.** 우리 코퍼스는 깨끗하다(§4).

### 2-E. 오염 갈래 (시드마다 «확장 10개가 내 업종인가» — §3-H)

| 시드 | 오염 | 처방 |
|---|---|---|
| `spr calculator` | **`spr cpf calculator`·`spr cpf contribution calculator`**(싱가포르 영주권 CPF 납입) · `spr rate` | 🔴 말레이시아·싱가포르 고유 갈래. `spr poker` 앵커 필수 |
| `kalkulator outs` | `kalkulator outsourcing it` | id와 동일 |
| `icm calculator` | `icm calculator weight`·`peso`·`kg`·`greutate` + PAS 「Icm calculator weight」·「IMC calculator」 | fr가 잡은 영문 시드 오염(체중)이 MY에도 |
| `peraturan 4 dan 2`(rule of 4 and 2 직역) | 「peraturan 2 4 dan 12 saat」·「peraturan 4 2 )( g dan i」 = 법령 | 🔴 **직역 폐기** — 영어 `rule of 4 and 2`가 산다(→ `rule of 4 and 2 poker`). de의 «Faustregel» 교훈과 동형이되 ms는 **영어가 답**이다 |
| `alat poker` | 「alat requirements」·「alat alat untuk membatik」 | 「alat」 단독을 머리어로 쓰지 마라 |
| `peluang poker` | 「peluang kartu poker」(인니어) 1건뿐 | 실질 사망 |

## 3. SERP (DFS advanced · location 2458 · mobile)

### 3-A. `poker odds calculator` (language `en`) — depth 20

**20/20이 글로벌 영어 포커 도구 업계.** 말레이시아·말레이어 페이지 **0건**.
cardplayer #1 · pokernews #2 · 888poker #3 · runitonce(PLO) #4 · natural8 #5 · omnicalculator #6 · pokerlistings #7 ·
splitsuit #8 · upswing #9 · edge.poker · gtogecko · uptodown · tightpoker · pokersites · managebankroll · beastsofpoker · pokervip.
→ **단기 승산 0**(id §3-K ②와 동형).

PAA: How often flops a 2 pair? · What is the best poker odds calculator? · **What is the 42 rule in poker?** ·
How are odds calculated in poker? · How to calculate odds formula? · How to mathematically play poker?
PAS: pre flop · Omaha 5 · app · **poker odds chart** · software · heads up · PLO · range · 5 card poker hand calculator.

### 3-B. `icm calculator poker` (language `en`)

icmizer #1 · holdemresources #2 · mttdb #3 · pokernews(용어) #4 — 전부 글로벌.
PAS에 **「Icm calculator weight」·「IMC calculator」** = 체중 오염(§2-E).

### 3-C. 🔴 `kalkulator poker` (language `ms`) — **자리가 비어 있다**

| # | 도메인 | 무엇 |
|---|---|---|
| 1 | **b-inary.github.io** | 개인 GitHub Pages 습작(「Heads-up Odds Calculator」) |
| 2 | runitonce | PLO 계산기(의도 일부) |
| 3 | natural8 | 영어 도구 |
| 4 | pokerlistings | 영어 도구 |
| 5 | **easysevens.com** | 홈게임 **정산 로그** — 의도 불일치 |
| 6 | omnicalculator | 영어 도구 |
| 7 | **wsop.com/payoutcalculator** | 토너먼트 **상금 분배** — 의도 불일치 |
| 8 | **pokercalculator.app** | 캐시게임 **칩 정산** — 의도 불일치 |

🔴 **새 «공백 신호» 형태**: id는 `translate.google.com`이 3/8이었다. ms는 **#1이 개인 GitHub Pages이고 8개 중 3개가
의도 불일치(정산·상금·칩)** 다. 구글이 말레이어로 내줄 포커 계산기 콘텐츠를 **못 찾아서 아무거나 채운 것**이다.
→ **판별 규칙 일반화**: 「#1이 기관·업계가 아니고, 절반이 의도 불일치면 그 자리는 비어 있다.」

## 4. 코퍼스 실측 (`lib/posts-ms/*.ts` · 21편)

### 4-A. 🟢 말레이어 순도 100% — 인도네시아어 0

| 말레이어 | n | 인도네시아어 | n |
|---|---|---|---|
| kad | **459** | kartu | **0** |
| boleh | 409 | bisa | 0 |
| wang | 15 | uang | 0 |
| peratus(an) | 28 | persen | 0 |
| kejohanan | 33 | turnamen | 0 |
| pusingan | 51 | putaran · ronde | 0 · 0 |
| nombor | 7 | nomor | 0 |
| percuma | 52 | gratis | 0 |

🔴 **id 사전을 참조하면 인니어가 새어 들어온다**(§2-D의 오염과 같은 경로). 위 좌열이 정본이다.

### 4-B. 도구 용어 — 영어 차용이 정본

`board` 463 : `papan` 2 · `equity` 184 : **`ekuiti` 0** · `raise` 353 · `call` 381 · `fold` 170 · `bet` 847 ·
`check` 336 · `draw` 244 · `stack` 177 : `timbunan` 3 · `cip` **153** : `chip` 4 · `outs` 20 · `pot odds` 17 ·
`implied odds` 3 · `bubble` 13 : `gelembung` 0 · `pertaruhan` 163(bet의 명사형) · `kad komuniti` 50 · `meja` 108.

- 🟢 **`board` ↔ `meja` 충돌 없음**(§3-F es 함정) — board는 영어 그대로, meja는 테이블.
- 🔴 **`ekuiti` 0** — equity는 영어 그대로. 탭 이름도 «Equity».
- 🔴 **`cip` 153 : `chip` 4** — 칩은 **`cip`**(말레이어 철자). 단 고유명 `chip chop`·`chip leader`는 영어 그대로.

### 4-C. 🔴 §3-K ⑤ 재적용 — «kenaikan»은 ms에서 **뒤집힌다**

id는 `kenaikan` 6/6이 «증가»라 raise 역어로 못 썼다. **ms는 4건 중 2건이 진짜 raise다**
(「raise (menaikkannya — **kenaikan minimum** sama dengan saiz pertaruhan…)」 · 「Pemain raise kepada $6 (**kenaikan $4** di atas blind $2)」).
→ **역어 판정은 로케일 상수가 아니다**(§3-J의 재확인). 단 지배형은 영어 `raise` 353이라 **사전은 `raise`를 쓴다**.
「레이즈에 콜」의 코퍼스 정본 = **`call raise`**(4건).

### 4-D. 조판 — `percentGap` 불필요 · `numberLocale: "ms-MY"` 유지

- 숫자 뒤 `%`: **붙여 씀 1,599 : 띄어 씀 0**(반각·NBSP 둘 다 0) → **`percentGap` 키를 넣지 않는다**(브리프 §5 ✅ 절 G항).
- 소수 구분자: **점 2,171** · 진짜 소수 콤마 **0**. (`[0-9],[0-9]` 335건은 전부 **rgba CSS 색상**이었다 — 🔴 조판 실측에서 마크업을 먼저 걸러라.)
- 천단위: 콤마 131(`1,326`형) → `ms-MY`(ICU: 소수 `.` · 천단위 `,`)가 코퍼스와 일치.

### 4-E. FAQ 질문 어형

`Mengapa` 59 · `Apakah` 56 · `Bila` 45 · `Adakah` 31 · `Berapa` 30 · `Bagaimana` 28 · `Kenapa` 11 · **`Bolehkah` 9** · `Apa itu` 4.
- 🔴 **id와 갈린다**: id는 `Bolehkah` 0이라 가부 의문을 `Apakah`로 썼지만, **ms는 `Bolehkah`가 산다**(9).
- 정의형(`Apa itu X?` 4)은 규율상 배제.

## 5. 🔴 채택 판정 — 왜 말레이어를 조준하나 (id와 «같은 처방, 다른 근거»)

브리프 §3-K ②의 축(「볼륨 비가 아니라 그 SERP에서 이길 수 있나」)을 그대로 적용하면:

| | id (09-19) | **ms (09-19)** |
|---|---|---|
| 영어 : 자국어 볼륨 | 90 : **10** | 90 : **null** |
| 영어 SERP | 10/10 업계 → 승산 0 | **20/20 업계 → 승산 0** |
| 자국어 SERP | 3/8 translate.google.com = 공백 | **#1 개인 GitHub Pages + 3/8 의도 불일치 = 공백** |
| 판정 | 자국어 조준 | **자국어 조준** |

🔴 **그런데 «null»에서 멈추면 오판한다.** Google Ads는 월 10 미만을 `null`로 준다. 말레이시아 인구는 **3,200만**,
인도네시아는 **2.8억**(≈9배). id의 «10»은 인구비로 ms에서 **1 남짓** = 측정 하한 아래다.
→ **«볼륨 null»은 «수요 0»이 아니라 «해상도 아래»일 수 있다.** 판별은 ①같은 언어의 다른 축이 사는가(§1-C `texas holdem` 720)
②그 언어 SERP가 비었는가(§3-C) — **둘 다 예면 조준한다.**

🔴 반대 근거도 적어 둔다(되살리기 방지): 영어 축 90은 **버리는 게 아니라 제목 토큰으로 회수**한다(§6).

## 6. 채택 (09-19)

- **제목** `Kalkulator Poker — Odds, Equity, ICM & Pot Odds`
  - 머리어 = 말레이어 `Kalkulator Poker`(§5) · 차별화어 = **영어 토큰 그대로**(`Odds`·`Equity`·`ICM`·`Pot Odds`)
    → 영어 축 `poker odds calculator` 90 · `pot odds calculator` 10 · `icm calculator` 10 · `poker equity calculator` 20의
    **토큰을 전부 제목이 들고 있게** 된다(de의 «합성어로 녹인다» / pt의 «자국어 + 영문 토큰»과 같은 처방).
  - 🔴 **`CALC_CTA_LABELS.ms`의 «Kalkulator odds poker»는 폐기** — 볼륨 null · 자동완성 확장 0.
    id 근거를 옮긴 것이 아니라 **`location=Malaysia`로 재측정한 결과**다(§3-J 지시).
- **설명** ≤160자(게이트 `check:calc-parity` desc 항).
- **Equity 탭** = «Equity» / 부제 «Hand lawan hand»(`ekuiti` 0 · §4-B).
- **빠른 참조 6표** — 수치 EN 그대로(§13).
  🔴 **EN 9슬러그가 ms에 0/9 존재** → 링크는 실재하는 것만(§3-J 「없는 게 정답」 · 게이트 F항):
  | 표 | EN 링크 | ms |
  |---|---|---|
  | ① 프리플롭 매치업 | holdem-probability | **비움**(확률 차트 글 없음) |
  | ② AA vs 랜덤 N | holdem-equity | **비움**(equity 개념 글 없음) |
  | ③ 아웃츠 | holdem-outs | `3bet-pot-bet-sizing`(outs 14 · 드로 가격이 주제) |
  | ④ 팟오즈 | holdem-pot-odds | `texas-holdem-rules-for-beginners`(pot odds 4 · outs 4) |
  | ⑤ SPR | holdem-short-stack | `3bet-pot-cbet`(SPR 25 · stack 35 — 코퍼스 최대) |
  | ⑥ M값 | holdem-tournament-vs-cash-game | ✅ 실재 |
- **FAQ 8 → 18** = EN 17 + ms 고유 1(**TDA 2024 Rule 5-D** 「Bolehkah guna kalkulator poker di meja?」 —
  es·pt·de·fr·id·zh-hant와 같은 축 · `Bolehkah`는 §4-E로 ms에서 유효).
  🔴 기존 Q2 「Apakah itu ICM dalam poker?」는 **정의형이라 교체**.
- **관련 글 6 → 8** — EN 8슬러그가 0/8이라 **전부 ms 코퍼스에서** 고른다(+`3bet-pot-cbet` · `holdem-all-in-rules`).
- **솔버 카니발 처방**(§3-K ③): `app/ms/solver/solver-client.tsx`의 `PICK_TOOL`에 **계산기 행이 아예 없다**
  (id는 «라우트가 없다» 주석이 원인이었지만 ms는 **처음부터 빈 것**) + `faq.ts:90` 「Adakah ini kalkulator peluang poker
  atau solver strategi?」가 `/ms/calculator`를 **안 가리킨다** → 행 3개 신설 + FAQ 답에 인계 문장.

## 7. 미구현 수요 (넣지 않았다 · 뱅크 보존)

- **Omaha / PLO** — MY SERP에 runitonce PLO가 #4(영어), PAS에 `Omaha 5`·`PLO`가 반복. 우리 도구는 홀덤 전용 → 넣지 않는다(§3-F es 선례).
- `poker variance calculator` · `poker ev calculator` — EN 뱅크와 동일하게 미구현.
- `which poker hand wins calculator` 계열은 Equity 탭이 리버 5장에서 승자·족보를 주므로 **충족**(별도 조준 안 함).

## 8. 다음 로케일 인계 (hi)

- 🔴 **hi는 «미재조준» 마지막 로케일**(브리프 §3-I) — 사전을 새로 쓰기 전에 §3-I 표 7자리를 EN 정본과 먼저 대조.
- 🔴 **ms가 새로 남긴 것은 §3-L**(브리프)에 적었다: 「볼륨 null은 해상도 아래일 수 있다」 · 「hl 자동완성 DB의 인접언어 오염」 ·
  「공백 SERP의 두 번째 신호형(개인 습작 #1 + 의도 불일치 절반)」 · 「조판 실측에서 마크업(rgba)을 먼저 걸러라」.
- hi 재사용 자료 = `docs/keyword-bank/hi-posting-reference.md` §8.
