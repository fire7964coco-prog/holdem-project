# 🧰 queue 회차 Q2 브리프 — 결재 7 「사진 5장 신규 제작 → EN 교체 → 8로케일 전파」

> 구간 A(준비) 산출 · 2026-09-11 · Opus 전 구간(판정형 — 새 문장 없음)
> 정본 포인터: `docs/settled-decisions.md` §1-B **결재 7** · §3-A(이미지 규율) · `CLAUDE.md` §9·§9-1·§9-2-A · 진행 파일 §1 Q2 행
> 🔴 **이 브리프의 수치는 전부 이 회차 실측이다**(게이트 출력 + 파일 grep + 이미지 육안). 진행 파일·핸드오프 숫자를 옮겨 적지 않았다.

---

## 0. 한 줄 결론 — 「5장」은 **10장**이다 (그리고 절반은 사장님이 뽑을 필요가 없다)

| | 결재 당시 기록 | 이 회차 실측 | 왜 갈렸나 |
|---|---|---|---|
| 고칠 자리 | 40건 = 8로케일 × 5건 | **동일 ✅**(게이트 `--all` 재현) | — |
| 새 사진 | **5장** | 🔴 **10장** | 「5」는 **게이트 지적 건수**(이미지 5종)를 세었다. 실제 필요 수는 **한 이미지를 몇 편이 나눠 쓰는가**로 정해진다 — `holdem-button-dealer-board`는 **7편**이 쓴다. 같은 필라 안 공유를 1편으로 줄이려면 그 한 종만 **4자리**를 갈아야 한다 |
| 제작 주체 | 「사장님이 커서/제미나이로 뽑는다」 | 🔴 **10장 중 8장은 이 레인이 직접 렌더한다** | 교체 대상 5종 중 **4종이 글자가 박힌 인포그래픽**이다(육안 확인). `CLAUDE.md` §9-1 = **글자 든 인포그래픽은 이미지 AI 금지 → HTML/CSS + Playwright**. 레포에 그 파이프라인이 이미 있다(`scripts/gen-*.html` **143개** + `scripts/render-gen-final.mjs` q82) |

**사장님이 뽑아야 하는 것은 «실사 2장»뿐이다**(§4 슬롯 ①·⑥ — 글자 없음).

---

## 1. 실측 — 40건의 해부

`node scripts/check-image-reuse.mjs --all` (2026-09-11):

```
de / en / es / id / ja / pt / zh / zh-hant   →  각 🔴 5 · 🟠 2 · 클러스터 지도 있음   →  🔴 40 = 8 × 5
ko  71편 259장                               →  🔴 0 (따로 찍은 사진) · 🟠 7 · 미판정 2
클러스터 지도 없는 로케일 17개               →  «🔴 0»은 히어로 중복 없음이라는 뜻일 뿐 — 필라 판정은 미검사
```

**8로케일이 «똑같이» 5건인 이유** — 본문 구성이 EN 복제라 이미지 배치가 1:1이다. 파일 grep으로 확증(본문/히어로만 계수):

| 이미지 | 본문 참조 | 어느 글이 쓰나(8로케일 전부 동일) |
|---|---:|---|
| `holdem-button-dealer-board.webp` | **57** = 8×7 + ko 1 | strategy · limping · glossary · bad-beat · cooler · straddle · drawing-odds (+ ko `holdem-cbet-strategy`) |
| `holdem-pub-players-table.webp` | **34** = 8×4 + ko 2 | strategy · limping · glossary · fish (+ ko `holdem-pub-first-visit-guide` 히어로+본문) |
| `holdem-reading-straight-example.webp` | **24** = 8×3 | drawing-odds · outs · reading-the-board |
| `holdem-button-position-hero.webp` | **18** = 8×2 + ko 2 | positions · strategy (+ ko `holdem-button-position` 히어로+본문) |
| `holdem-cooler-vs-badbeat.webp` | **16** = 8×2 | bad-beat · cooler |

🔴 **뿌리는 EN 1곳이 맞다** — 8로케일이 EN 배치를 그대로 복제했다. EN을 고치고 전파하면 40이 한 번에 닫힌다.

---

## 2. 🔴 재사용보다 큰 결함 3종 — 이 회차가 새로 찾았다

### 2-A. 두 «벽지» 이미지는 **글자가 박혀 있고, 그 글자가 캡션과 어긋난다** (육안 확인)

- `holdem-button-dealer-board.webp` (1200×675 · 15KB) 안에 박힌 글자: **「The Button」 / 「THE FLOP」 / 「The button acts last on every postflop street.」**
- `holdem-pub-players-table.webp` (1200×675 · 23KB) 안에 박힌 글자: **「Texas Hold'em at the Pub」**

이 두 장이 붙은 **11자리 중 캡션과 이미지가 맞는 곳은 `holdem-glossary` 1자리뿐이다.** 나머지는 예:

| 자리 | 캡션(글이 주장하는 것) | 이미지가 박아 둔 글자 |
|---|---|---|
| `drawing-odds:58` | 「The flop decides a set-mining call: hit your two-outer **11.8%**」 | 「The button acts last on every postflop street.」 |
| `bad-beat:82` | 「In every bad beat the math was on your side」 | 〃 |
| `straddle:51` | 「A live UTG straddle turns the seat left of the big blind into a third blind」 | 〃 |
| `strategy:123` | 「folding a beaten hand before it costs you a stack」 | 「Texas Hold'em **at the Pub**」 |
| `fish:46` | 「Every table has a food chain」 | 〃 |

🪶 **그리고 이 영어 글자가 ja·zh·zh-hant·pt·de·es·id 본문에 그대로 실려 있다**(memory `images-shared-18-languages` 「영어 오버레이 최소」).

### 2-B. 🔴 F유형 — 「made straight」 이미지를 「straight **draw**」라고 캡션했다

`holdem-reading-straight-example.webp`는 7장(K♦ 8♦ 7♥ 6♣ 5♠ 4♣ 2♠)에서 **베스트5 = 8-7-6-5-4**를 골드로 띄우고 「**8-HIGH STRAIGHT**」라고 박아 둔, **완성된 스트레이트** 그림이다(§13 검산 ✅ — 8하이 스트레이트 성립, 무늬 무관).

그런데 두 자리가 이걸 **드로우**로 쓴다:

- `outs:65` 「An open-ended straight draw fills from either end — **eight outs**」
- `drawing-odds:120` 「An open-ended straight draw ... **31.5%** to complete by the river」

**드로우는 아직 완성되지 않은 패다.** 8-7-6-5-4가 이미 깔린 그림 옆에 「8 아웃츠를 쫓는 중」이라고 적으면 포커를 아는 독자에게 바로 걸린다(`CLAUDE.md` §13 서두 = 사실오류 1개 = 치명상). **재사용이 아니라 사실 불일치라서 두 자리 다 교체한다.**

🪶 `reading-the-board:114`만 「the made straight」라고 정확히 쓴다 → **그 글이 이 이미지의 주인이다.**

### 2-C. 🟠 썸네일 드리프트 3가족 × 8로케일 (§3-A 「썸네일은 링크 대상 글의 자기 이미지」)

`holdem-button-position-hero.webp`가 **어느 EN 글의 히어로도 아닌데** 썸네일/readnext로 쓰인다:

| 자리 | 링크 대상 | 지금 쓰는 썸네일 | 그 글의 실제 히어로 |
|---|---|---|---|
| `glossary:112` (8로케일) | `/blog/holdem-positions` | `holdem-button-position-hero.webp` | `holdem-positions-hero.webp` |
| `limping` readnext (8로케일) | `/blog/holdem-position-play` | 〃 | `holdem-position-play-hero.webp` |
| `strategy:62` (8로케일) | `/blog/holdem-position-play` | 〃 | 〃 |

대조군: EN에서 `holdem-position-play`를 가리키는 다른 썸네일 **7개는 전부 `holdem-position-play-hero.webp`**다(grep 실측 **7 대 1**).

🔴 **고치기 전에 선례를 판다** — `git log -S holdem-button-position-hero`(memory `absence-may-be-the-standard`: 이 레포는 커밋 메시지에 «왜 안 바꿨는지»를 적는다). 의도적이면 `locale-intentional-diffs` 등재 요청, 아니면 24자리 정정. **Q2-b 착수 시 첫 작업.**

---

## 3. 판정 — 누가 남고 누가 갈리나

**기준 셋** ① 이미지 이름·내용이 그 글을 가리키는가(주인) ② 같은 필라 안에 2편 이상 남으면 🔴 ③ 허브(`holdem-strategy`)는 고유 이미지를 갖는다 — 가장 값비싼 페이지가 **빌린 그림 3장으로만** 채워져 있었다.

| 이미지 | **남는 글**(keeper) | 근거 | 갈리는 자리 |
|---|---|---|---|
| `holdem-button-dealer-board` | **glossary**(용어) · **limping**(Strategy) | 버튼·홀카드·플롭을 **낱말로 정의하는** 유일한 글이 glossary다(캡션도 유일하게 일치) | strategy:93 · bad-beat:82 · cooler:75 · straddle:51 |
| `holdem-pub-players-table` | **limping**(Strategy) · **fish**(Glossary) | 「테이블에 어떤 사람들이 앉아 있나」가 fish의 본론 | strategy:123 · glossary:160 |
| `holdem-reading-straight-example` | **reading-the-board** | 이름·내용·캡션이 전부 일치(완성된 스트레이트) | outs:65 · drawing-odds:120 |
| `holdem-button-position-hero` | **positions** | 이 글의 **유일한 본문 이미지**다 | strategy:60 |
| `holdem-cooler-vs-badbeat` | **cooler** | 캡션이 더 두껍고(「One collision, two labels」) 글의 축이 «쿨러냐 배드빗이냐»다 | bad-beat:46 |

🪶 **왜 `holdem-strategy`가 3장을 다 갈고 `holdem-limping`이 2장을 떠안나**: 허브가 트래픽·내부링크의 중심인데 본문 이미지 3장이 전부 남의 것이었다. 부채를 옮긴다면 **작은 클러스터 글 쪽**이 맞다. limping의 두 자리는 §8 T2로 남긴다(숨기지 않는다).

**조치 후 게이트 예측(EN)**: `button-dealer-board` = glossary·limping·drawing-odds(셋 다 다른 필라) → 🟠 · `pub-players-table` = limping·fish(다른 필라) → 🟠 · 나머지 셋은 1편씩 → 소멸.
→ **EN 🔴 0 · 🟠 4**(기존 2 + 신규 2). 8로케일 동일. **합계 🔴 40 → 0.**

---

## 4. 슬롯 10장 — 자리·장면·축어 근거·§13

> 🔴 **§3-A 준수**: 카드는 **① 기존 이미지 승계** 또는 **② 그 글 본문 축어** 둘 중 하나만. 무늬가 논점이 아니면 **무늬를 그리지 않는다**(랭크 타일).
> 🔴 **§9-1 가드레일**: 텍스트 최소(문단·설명문 금지) · 커밋 전 렌더 이미지를 **Read로 열어 스펠링 육안 검수** · 온브랜드(골드/그린/크림) · 수치·핸드는 §13 동일 적용.
> 규격: **1200×675** · `scripts/gen-<파일명>.html` → `node scripts/render-gen-final.mjs <파일명>` (q82). 팔레트·카드 CSS 정본 = `scripts/_GEN_SPEC.md`.

### ① `holdem-strategy:60` — 🖼 **실사(사장님)** → `holdem-strategy-button-seat.webp`

- **자리**: `## Decision 1 — Where Am I Sitting? (Position)` 직후. 지금은 `holdem-button-position-hero`(positions가 가져간다).
- **장면**: 버튼 자리에 앉은 플레이어를 **어깨 너머로** — 앞에 홀카드 2장(엎어짐)·칩 스택·**「D」 딜러 버튼**. 그린 펠트, 따뜻한 조명, 상대 좌석들은 흐리게. **글자 없음.**
- **왜 실사인가**: 허브의 첫 이미지이고 나머지 두 장이 도식이라 **질감 대비**가 필요하다. 글자가 없으므로 §9-1 「실사 = 기본」에 정면으로 해당하고 9개 언어 공용에도 안전하다.
- **§13**: 카드는 **전부 엎어 놓는다**(본문이 특정 핸드를 지정하지 않았다 → 앞면을 그리면 창작이다).
- **생성 프롬프트(사장님용)**:
  > Photorealistic over-the-shoulder shot of a poker player seated at the dealer button in a warm, dimly lit casino card room. In front of him: two face-down hole cards, a neat stack of casino chips, and a round white "D" dealer button on dark green felt. Other players blurred in the background. Cinematic side lighting, shallow depth of field, 16:9, no text, no logos, no visible card faces.
- **alt 초안**: `A player sitting on the dealer button with two face-down hole cards and a chip stack, the seat that acts last on every postflop street`
- **캡션**: 현행 유지 — `The button acts last on every postflop street — the single most profitable seat at the table`

### ② `holdem-strategy:93` — 📊 **인포(레인)** → `holdem-strategy-raise-or-fold.webp`

- **자리**: `## Decision 3 — Raise or Fold. Never Just Limp.` 직후.
- **장면**: 상단 골드 한 줄 **「RAISE or FOLD — first in」**. 아래 **「the three real discounts」** 3타일:
  - `OVER-LIMP` — *behind a limper · in position*
  - `BIG BLIND` — **1.5 ÷ 5.5 = 27%**
  - `SET-MINING` — *small pair · deep stacks*
- **축어 근거**(본문 Decision 3 마지막 문단): 「against a 2.5bb open you have ==1bb already posted==, so you're calling 1.5bb into a 4bb pot and need only ==1.5 ÷ 5.5 = 27%== equity」 · 「Over-limping — calling behind someone who already limped, in position, with a speculative hand like a small pair」 · 「Set-mining a small pair against a raise with deep stacks」 · 「Those are discounts, not strategies」
- **§13 검산**: 2.5bb 오픈 + BB 1 + SB 0.5 = **4bb 팟** ✅ · 콜 1.5 → 1.5 ÷ (4 + 1.5) = **27.3%** ✅ 본문과 일치.
- **카드 없음**(§3-A 「카드가 필요 없는 자리에는 넣지 마라」).
- **중복 회피**: `holdem-limping-raise-or-fold.webp`(RAISE / LIMP / FOLD 3선택)와 축이 다르다 — 이쪽은 **예외 3개**다.
- **alt**: `The raise-or-fold default with its three real exceptions — over-limping in position, defending the big blind at 27% equity, and set-mining a small pair`
- **캡션**: `Raise or fold first-in — the only discounts are over-limping in position, a 27% big-blind defence, and set-mining`

### ③ `holdem-strategy:123` — 📊 **인포(레인)** → `holdem-strategy-fold-ace-high.webp`

- **자리**: `## Decision 5 — When Do I Fold?` 직후.
- **장면**: 내 홀카드 **A♣ K♣** · 플롭 **2♥ 7♦ 9♠** · 가운데 골드 화살표 **「c-bet → CHECK-RAISE」** · 하단 골드 배너 **「FOLD ace-high」**.
- **축어 근거**(같은 절 본문): 「I raised ==A♣K♣== and got one caller. The flop came ==2♥ 7♦ 9♠== — a total miss. ... my opponent check-**raises** me. ... So I fold ace-high and lose the minimum.」 → **무늬까지 본문 축어**라 §3-A ② 충족.
- **§13 검산**: A♣K♣ + 2♥ 7♦ 9♠ = 페어 없음 · 보드에 클럽 0장이라 **플러시 드로우도 없음** · 2♥ 7♦ 9♠ = 세 무늬 = **레인보우**(본문 「dry board」와 일치) → 「ace-high, no pair, no draw」 ✅.
- **alt**: `A club ace-king facing a rainbow 2-7-9 flop after a check-raise — the hand the article folds`
- **캡션**: 현행 유지 — `The most profitable move in poker is the one nobody notices — folding a beaten hand before it costs you a stack`

### ④ `holdem-bad-beat:46` — 📊 **인포(레인)** → `holdem-bad-beat-litmus.webp`

- **자리**: `## Bad Beat vs Cooler: The Difference That Matters` 직후. 지금은 `holdem-cooler-vs-badbeat`(cooler가 가져간다).
- **장면**: 가운데 질문 한 줄 **「Did they have to IMPROVE to win?」** → 좌우 두 갈래:
  - **YES → BAD BEAT** — *AA loses when 77 spikes a set*
  - **NO → COOLER** — *KK runs into AA*
- **축어 근거**(같은 절): 「if your opponent needed to *improve* to win, it's a bad beat」 · 표의 Classic example 행 「**AA loses when 7‑7 spikes a set**」 / 「**KK runs into AA**」.
- **§13**: **랭크 타일만**(AA · 77 · KK) — 본문이 무늬를 지정하지 않았다 → §3-A 「무늬가 논점이 아니면 무늬를 그리지 마라」.
- **중복 회피**: cooler가 남기는 `holdem-cooler-vs-badbeat.webp`는 **보드가 깔린 대국 그림**, 이쪽은 **판정 분기**다.
- **alt**: `The one-question litmus that separates a bad beat from a cooler — did the opponent have to improve to win`
- **캡션**: `One question settles it: if they had to improve to win, it was a bad beat — if they were already ahead, it was a cooler`

### ⑤ `holdem-bad-beat:82` — 📊 **인포(레인)** → `holdem-bad-beat-aces-vs-set.webp`

- **자리**: `## Classic Bad Beat Examples (With the Odds)` 직후.
- **장면**: 좌 **AA** 랭크 타일 + **~80%** · 우 **77** + **~20%** · 가운데 **4:1** 골드 배지 · 하단 한 줄 **「the third 7 arrives」**.
- **축어 근거**(바로 아래 표): 「**Aces cracked by a set** | AA vs a lower pair (e.g. 7‑7) | **~80% (4:1)** | Their pair hits a set on the flop, turn or river」.
- **§13 검산**: AA vs 77 프리플롭 ≈ **80.5%** → 「~80% (4:1)」 ✅.
- 🔴 **넣지 마라**: 같은 표의 **「Overpair vs a flush draw ~63%」 행** — `settled-decisions` §1-B **결재 15**가 그 행의 **문구 교체를 Q4-a에 배정**해 뒀다. 이미지에 63%를 박으면 Q4-a가 문구를 고칠 때 이미지가 낡는다.
- **alt**: `Pocket aces at about 80 percent against pocket sevens, the four-to-one favourite that a flopped set cracks`
- **캡션**: 현행 유지 — `In every bad beat the math was on your side — the underdog just caught the card they needed`

### ⑥ `holdem-cooler:75` — 🖼 **실사(사장님)** → `holdem-cooler-stacks-collide.webp`

- **자리**: `## Classic Cooler Examples (The Whole Family)` 직후. 바로 아래에 **6행 표**가 온다 → 표를 다시 그리면 중복이다. 그래서 **분위기**를 맡긴다.
- **장면**: 두 플레이어가 **각자 스택 전체를 앞으로 밀어 넣은** 순간 — 팟 가운데 칩 무더기, 양쪽 손이 프레임 안에, 얼굴은 안 보이거나 흐리게. 그린 펠트·따뜻한 조명. **글자 없음 · 카드 앞면 없음**(엎어 놓거나 프레임 밖).
- **왜 실사인가**: 이 절의 논지는 수치가 아니라 「**둘 다 폴드할 수 없는 패라 돈이 다 들어간다**」는 장면이다. 카드를 그리면 §3-A 위반(본문에 무늬 지정 없음)이고, 표를 그리면 바로 아래 표와 중복이다.
- **생성 프롬프트(사장님용)**:
  > Photorealistic close-up of two poker players simultaneously pushing their entire chip stacks into the middle of a dark green felt table. A large mound of mixed casino chips in the pot. Only hands, forearms and sleeves in frame; faces out of frame or blurred. Warm overhead card-room lighting, cinematic shallow depth of field, 16:9, no text, no logos, no visible card faces.
- **alt**: `Two players pushing their full stacks into the middle — the collision where neither hand can fold`
- **캡션**: 현행 유지 — `Coolers happen when both players hold hands far too strong to fold — the money goes in and the second-best monster pays off`

### ⑦ `holdem-straddle:51` — 📊 **인포(레인)** → `holdem-straddle-action-order.webp`

- **자리**: `## How a Straddle Works: Who Acts First and Last` 직후. **이 회차에서 값어치가 가장 큰 한 장**(정의 페이지가 건너뛰는 부분을 그림이 대신한다).
- **장면**: 가로 액션 순서 띠 — `SB $1` → `BB $2` → **`UTG STRADDLE $4`**(골드 강조) → **`UTG+1 ← first to act`** → … → 다시 **`STRADDLE ← acts last`**. 하단 한 줄 **「min-raise $8」**.
- **축어 근거**(바로 아래 `:::steps`): 「a standard $1/$2 game where UTG straddles to $4」 · 「The under-the-gun player puts out **$4** (2× the $2 big blind)」 · 「Action now begins with the player to the straddler's left (**UTG+1**), not UTG」 · 「Everyone must call **$4** (not $2)」 · 「the minimum raise is now **$8**, double the straddle」 · 「**The straddler acts LAST**」.
- **§13 검산**: $4 = 2 × $2 BB ✅ · 최소 레이즈 $8 = 2 × $4 스트래들 ✅ · 액션 시작 = 스트래들러 왼쪽(UTG+1) ✅.
- **카드 없음.**
- **alt**: `Preflop action order with an under-the-gun straddle — UTG+1 acts first and the straddler acts last`
- **캡션**: 현행 유지 — `A live UTG straddle turns the seat left of the big blind into a third blind — the straddler now acts last before the flop`

### ⑧ `holdem-glossary:160` — 📊 **인포(레인)** → `holdem-glossary-player-types.webp`

- **자리**: `## Player Types & Slang` 직후.
- **장면**: **낱말 타일 5개**(이 글의 `holdem-glossary-categories.webp` 타일 문법 그대로) — `FISH` / `SHARK` / `WHALE` / `NIT` / `DONK`, 각 타일 아래 **2~4단어** 뜻.
- **축어 근거**(바로 아래 표): 「Fish | A weak, losing recreational player」 · 「Shark | A strong, winning player who preys on weaker ones」 · 「Whale | A wealthy, weak recreational player at big stakes」 · 「Nit | An extremely tight player who only plays premium hands」 · 「Donkey (donk) | A derogatory term for a bad, unskilled player」 → 타일 문구는 **이 표에서 잘라 쓴다**(창작 0).
- **중복 회피**: `holdem-fish-food-chain.webp`는 **크기가 다른 칩**으로 먹이사슬을 그린다 — 이쪽은 **낱말 타일**이라 형태가 겹치지 않는다.
- **카드 없음.**
- **alt**: `Five poker player-type tiles — fish, shark, whale, nit and donk — each with its one-line meaning`
- **캡션**: 현행 유지 — `Every table is a mix of types — learning the slang tells you who to target and who to avoid`

### ⑨ `holdem-outs:65` — 📊 **인포(레인)** → `holdem-outs-nine-and-eight.webp`

- **자리**: `## Poker Outs Chart: Every Common Draw` 직후. 바로 아래가 **9행 표**라 표를 다시 그리지 않는다 → 글이 스스로 뽑아 둔 **두 앵커만** 크게.
- **장면**: 2열. 좌 **「FLUSH DRAW · 9」** 아래 작게 **13 − 4 = 9** · 우 **「OPEN-ENDED · 8」** 아래 작게 **4 + 4 = 8**.
- **축어 근거**: 상단 `:::stripe` 「**9** | Outs in a flush draw」 「**8** | Outs in an open-ended straight draw」 + 표의 Why 열 「13 of a suit − 4 you can see」 「Four cards on each end」.
- **§13 검산**: 13 − 4 = 9 ✅ · 4 + 4 = 8 ✅.
- **카드 없음**(§3-A) — 숫자와 수트 글리프 하나면 족하다.
- **alt**: `The two out counts every player memorises — nine for a flush draw, eight for an open-ended straight draw`
- **캡션**: 🔴 **교체**(현행은 «draw»라면서 완성된 스트레이트를 가리킨다) → `The two counts to burn in: a flush draw is 9 outs, an open-ended straight draw is 8`

### ⑩ `holdem-drawing-odds:120` — 📊 **인포(레인)** → `holdem-drawing-odds-oesd-vs-gutshot.webp`

- **자리**: `## Straight Odds: Flopping One vs Drawing to One` 직후.
- **장면**: 2열 대조. 좌 **OESD** — `8 outs` · **31.5% by river** · `17% one card` / 우 **GUTSHOT** — `4 outs` · **16.5% by river** · `8.5% one card`. 하단 골드 한 줄 **「half the equity」**.
- **축어 근거**(바로 아래 불릿): 「**Open-ended straight draw (OESD):** ... Eight outs, completes **31.5%** by the river — 1 − C(39,2)/C(47,2) — or 17% on any single card」 · 「**Gutshot (inside) straight draw:** four outs, completes **16.5%** by the river, 8.5% on one card. **Half the equity** of an open-ender」.
- **§13 검산**: 1 − C(39,2)/C(47,2) = 1 − 741/1081 = **31.45%** ✅ · 1 − C(43,2)/C(47,2) = 1 − 903/1081 = **16.47%** ✅ · 8 ÷ 47 = **17.0%** ✅ · 4 ÷ 47 = **8.5%** ✅.
- **카드**: 쓰려면 본문 축어 **8♠7♠**만 허용(「Connectors like 8♠7♠」). 안 써도 된다 — 숫자 대조가 논점이다.
- **alt**: `Open-ended straight draw against a gutshot — eight outs and 31.5 percent versus four outs and 16.5 percent by the river`
- **캡션**: 🔴 **교체** → `An open-ender is worth double a gutshot — 8 outs and 31.5% by the river against 4 outs and 16.5%`

---

## 5. 🔴 9개 언어 공용의 성립 조건 — **언어 중립 설계**

이 레포에서 **로케일별 이미지 변형을 만드는 것은 GTO 시리즈뿐이다**(`-ja` / `-zh` / `-zh-hant` / `-es` 변형 **130장** · 전부 `gto-*`). 블로그 코퍼스는 **한 장을 9개 언어가 공유**한다 — 그래서 지금 영어 문장이 ja·zh 본문에 실려 있다(§2-A).

**8장을 새로 만들면서 그 부채를 물려받지 않으려면 설계 규칙이 필요하다:**

| 규칙 | 이유 |
|---|---|
| **문장을 넣지 마라.** 라벨은 **1~3단어** | §9-1 가드레일 ① 「텍스트 최소(문단·설명문 금지)」 |
| 쓰는 단어는 **9개 언어 본문에 라틴 표기로 그대로 등장하는 포커 용어**만 — `RAISE` `FOLD` `BAD BEAT` `COOLER` `OESD` `FISH / SHARK / WHALE / NIT` | memory `ja-term-notation-search-match`(약어 = 라틴 + 맥락 앵커) · 전파 때 이미지를 다시 안 만들어도 된다 |
| **숫자·기호·화살표가 주인공**(27% · 4:1 · 31.5% · $4 → $8 · ♠♥♦♣) | 언어를 안 탄다 |
| 그래도 남는 영어가 있으면 **로케일 변형을 만드는 대신 그 라벨을 지운다** | 8장 × 9로케일 = 72장은 이 회차가 감당할 규모가 아니다 |

🟠 **§5 판단 요청**: 완전 현지화(슬롯당 9장 = **72장**)를 원하시면 GTO 시리즈 방식으로 갈 수 있다. **이 브리프의 기본안은 «언어 중립 1장»이다.**

---

## 6. Q2-b 실행 순서 (다음 세션)

0. `git merge main` → **§2-C 선례 확인**(`git log -S holdem-button-position-hero`) → 썸네일 24자리 판정
1. **인포 8장 저작** — `scripts/gen-<파일명>.html` 8개(팔레트·카드 CSS = `scripts/_GEN_SPEC.md` 재사용)
2. `node scripts/render-gen-final.mjs <8개 이름>` → 🔴 **8장 전부 Read로 열어 스펠링·수치 육안 검수**(§9-1 가드레일 ②). 깨지면 폐기·재저작
3. **실사 2장**은 사장님 산출물 대기 — 오면 워터마크 합성(`scripts/wm-fix.mjs` · 우하단 스페이드 + `holdemmaster.com`) → q82 압축
4. **EN 10자리 교체**(경로 + alt + 캡션 2자리)
5. **8로케일 전파** — 같은 10자리 × 8 = **80행**. 경로는 동일, **alt·캡션은 그 로케일 문장으로**(직역 금지 · `translation-is-contextual-reposting`)
6. 게이트: `check:image-reuse --all`(🔴 **40 → 0**) · `check:images`(폭 ≥ 750 → 150KB) · `audit:hard --slug=<7편>` × 로케일 · `check:structure` · `check:drift` · `npm run build`
7. 렌즈 4종(Opus 서브 병렬) + **2차 교열** — 수학·§13 / 딜러·전략 / 네이티브 / 교열·diff. EN 렌즈에 **8로케일 전파 diff까지** 준다(§7-F)
8. `scripts/_prev-*.webp` 삭제 · `public/sitemap.xml`은 `git checkout --`

### 🔴 ja 레인 겹침 (§7-F 확인 완료 · 2026-09-11)

`git -C ../Holdem-ja status --porcelain` = **ja 회차 14 진행 중**(브리프 `docs/harden-brief/ja-회차14-개수열거II.md` 미커밋 · 진행 파일 §2의 「ja 레인 회차 없음」은 이 시점에 낡았다). 미커밋 9파일 중 **Q2-b 전파 대상과 겹치는 것 3**:

| 파일 | Q2 대상 슬롯 |
|---|---|
| `lib/posts-ja/holdem-glossary.ts` | ⑧ |
| `lib/posts-ja/holdem-outs.ts` | ⑨ |
| `lib/posts-ja/holdem-straddle.ts` | ⑦ |

🔴 **이 3파일의 ja 전파는 건너뛰고 진행 파일 §5에 「머지 뒤 전파」로 올린다.** (`holdem-fish`·`holdem-positions`도 미커밋이지만 둘 다 **keeper**라 손댈 일이 없다.)
🪶 `zh`·`zh-hant` 워크트리는 clean — 겹침 0.

---

## 7. 🔴 이 회차에서 하지 말 것

- **KO는 손대지 마라.** KO 🔴 0건이고 `holdem-pub-players-table`·`holdem-button-position-hero`는 **KO 두 글의 히어로**다. 파일을 지우거나 덮어쓰면 KO가 깨진다 → **새 파일명으로만 추가**한다.
- **`holdem-reading-the-board:114`를 건드리지 마라** — 그 자리만 이미지와 캡션이 맞다.
- **bad-beat 표의 「~63% / Overpair vs flush draw」** — `settled-decisions` §1-B **결재 15**(재론 금지 · Q4-a 배정). 이미지에도 본문에도 손대지 마라.
- **`render-gen-batch.mjs`로 반영하지 마라**(q72 미리보기 전용 · §3-A) → `render-gen-final.mjs`(q82).
- **카드 문구 창작 금지**(§3-A). 위 10슬롯의 카드·숫자는 **전부 본문 축어**로 출처를 달아 뒀다 — 그 밖의 카드를 그리면 §13이 막으려는 사고다.
- **60KB 상한 같은 경직된 상한을 되살리지 마라**(§9-2-A). 게이트 문턱은 **폭 ≥ 750 → 150KB**다.
- 🟠 **T2 3자리는 이 회차 범위 밖**(§8) — 사장님 판단 전에는 손대지 않는다.

---

## 8. 🟠 T2 — 🔴는 아니지만 이미지↔캡션이 무관한 잔여 3자리 (판단 요청)

| 자리 | 지금 붙은 그림에 박힌 글자 | 캡션 | 처방 후보 |
|---|---|---|---|
| `holdem-limping:64` | 「The button acts last on every postflop street.」 | 「Open-limping invites a bloated multiway pot where you have no initiative」 | 새 인포 1장(리밍의 비용) **또는** 삭제 |
| `holdem-limping:116` | 「Texas Hold'em at the Pub」 | 「Strong players ... raise to isolate the limper」 | 새 인포 1장(아이솔레이트 레이즈) **또는** 삭제 |
| `holdem-drawing-odds:58` | 「The button acts last on every postflop street.」 | 「hit your two-outer 11.8%」 | 새 인포 1장(셋마이닝 11.8% · 7.5:1) |

전부 **8로케일 동형**이라 셋을 다 열면 **+3장 · +24행**이 늘어난다. **Q2에 얹을지 별도 회차로 뺄지 사장님·헤드 판단.**

🪶 셋을 다 처리하면 `holdem-button-dealer-board`는 **glossary 1편**, `holdem-pub-players-table`은 **fish 1편**만 남아 EN 🟠도 2(기존분)로 내려간다.
