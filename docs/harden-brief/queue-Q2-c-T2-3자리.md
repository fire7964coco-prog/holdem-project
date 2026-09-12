# 🧰 queue 회차 Q2-c 브리프 — 결재 7 잔여 T2 3자리 (이미지↔캡션 무관)

> 재료 정본 = `docs/harden-brief/queue-Q2-이미지.md` **§8**. 규격·팔레트·«값을 말하지 않는다» 규율은 **Q2-b 그대로**
> (`docs/harden-queue-진행.md` §3 「되돌리지 마라」의 Q2-b 항목 전건이 이 회차에도 걸린다).
> 회차 모양 = **전 구간 Opus**(§7-F 「판정형」 — 새 문장은 alt·캡션 24행뿐이고 그건 번역 QA다).

---

## 0. 한 줄 결론 — **3자리 중 2자리만 그림을 새로 만든다. 1자리는 지운다.**

| 자리 | 판정 | 산출 |
|---|---|---|
| `holdem-limping:64` (4가지 이유 절) | 🔴 **삭제** | 이미지 0장 · 8행 제거 |
| `holdem-limping:116` (아이솔레이트 절) | ✅ **신설** | `holdem-limping-isolation-raise.webp` · 8행 교체 |
| `holdem-drawing-odds:58` (셋마이닝 절) | ✅ **신설** | `holdem-drawing-odds-set-mining.webp` · 8행 교체 |

브리프 §8이 「새 인포 1장 **또는** 삭제」로 열어 둔 자리를 **절 단위로 갈랐다.** 판정 기준은 하나다 —
**그 절이 그림으로 더 빨리 이해되는가**(§9-1). 숫자·공간 구조가 있으면 신설, 순수 서술이면 삭제.

---

## 1. 실측 — 지금 붙어 있는 것

3자리 모두 **8로케일 동형**(en · de · es · id · ja · pt · zh · zh-hant). ar·fr에는 두 글이 없다(실측 `ls lib/posts-*/holdem-limping.ts`).

| 자리 | 파일 안 그림 | 그림에 박힌 **영어 문장**(육안 확인 · Read) | 캡션이 말하는 것 |
|---|---|---|---|
| `limping:64` | `holdem-button-dealer-board.webp` | 「The Button」 · 「**The button acts last on every postflop street.**」 | 오픈리밍 = 주도권 없는 멀티웨이 팟 |
| `limping:116` | `holdem-pub-players-table.webp` | 「**Texas Hold'em at the Pub**」 | 강한 상대가 리퍼를 **아이솔레이트**한다 |
| `drawing-odds:58` | `holdem-button-dealer-board.webp` | 위와 같은 문장 | 플롭이 **셋마이닝 콜**을 결정한다 |

→ 셋 다 **그림이 캡션과 다른 말을 한다.** 게다가 박힌 문장이 **영어**라 8로케일 본문 위에 그대로 실린다(§2-A 부채).

**게이트 실측(착수 전)** `npm run check:image-reuse -- --all` = 🔴 0 · 🟠 **39**(핵심 8로케일 각 4 + ko 7).
그중 이 회차가 닫는 것:

| 이미지 | 지금 | Q2-c 뒤 |
|---|---|---|
| `holdem-button-dealer-board.webp` | limping · glossary · drawing-odds **3편** 🟠 | **glossary 1편** → 🟠 해소 |
| `holdem-pub-players-table.webp` | limping · fish **2편** 🟠 | **fish 1편** → 🟠 해소 |

**예상 = 8로케일 각 4 → 2 · 합계 🟠 39 → 23.** (남는 2는 `starting-hands-premium`·`starting-hands-weak-ace-trap` =
`starting-hands-chart`↔`pot-odds`/`fish` 쌍으로 이 회차 범위 밖.)
🪶 두 이미지 **파일은 지우지 않는다** — KO가 쓴다(`posts/holdem-cbet-strategy` · `posts/holdem-pub-*` 4편 · `posts.ts`).

---

## 2. 🔴 이 회차가 새로 찾은 것 — **소수점 구분자는 언어 중립이 아니다**

Q2-b는 «통화 기호»에서 이 함정을 배웠다(de만 €). 같은 층에 **하나 더** 있다:

| 로케일 | 소수점 | 천단위 | 비율 표기(`7.5-to-1`) |
|---|---|---|---|
| en · es · ja · zh · zh-hant | `11.8%` | `17,296` | `7.5 a 1` · `7.5対1` · `7.5:1` · `7.5 比 1` |
| **de · id · pt** | **`11,8%`** | **`17.296`** | `7,5:1` · `7,5 para 1` |

**같은 «값»인데 표기가 갈린다.** 그림이 `11.8%`를 박으면 de·id·pt 본문(`11,8%`)과 한 화면에서 어긋난다.
🪶 기존 자산에 이미 이 부채가 있다(`holdem-drawing-odds-oesd-vs-gutshot.webp`의 `31.5%`·`16.5%`·`8.5%`) — **이 회차가 그걸 소급하지는 않는다**(범위 밖 · 진행 파일 §2 미결로 올린다).

🔴 **처방 = 새 그림은 정수만 쓴다.** 셋마이닝 그림의 값은 `11.8%`가 아니라 **`12%` / `88%`**다. 근거 둘:
1. **본문 축어다.** 8로케일 전부 같은 문단에서 정수로 말한다 —
   en 「whiff **88%** of the time … the **12%** you hit」 · de 「in **88%** der Fälle verfehlst … die **12%**」 ·
   es 「fallas el **88%** … el **12%** que aciertas」 · id 「meleset **88%** … **12%** yang Anda kena」 ·
   pt 「erra **88%** … os **12%**」 · ja 「**88%**は空振り … 当たる**12%**」 ·
   zh 「**88%** 的时候你会 miss … 击中的那 **12%**」 · zh-hant 「有 **88%** 的時候摸空 … 命中的那 **12%**」.
2. **중복 회피.** 그림 8줄 아래에 `C(48,3)=17,296 ÷ C(50,3)=19,600 = 88.2% → 11.8%` **유도표**가 있다.
   그림이 `11.8%`를 되풀이하면 Q2-b가 기각 사유로 적은 «2~6줄 거리의 반복»이 된다.
   → **그림 = 주장(12/88) · 표 = 유도(11.8/88.2).** 역할이 갈린다.

---

## 3. 판정 근거 — 자리마다

### 3-A. `limping:64` → **삭제**

절 = 「Why Limping Is Usually a Mistake (4 Reasons)」. 네 이유는 ① 프리플랍에 못 이긴다 ② 주도권을 넘긴다
③ 부푼 멀티웨이·OOP ④ 읽힌다 — **전부 서술 명제이고 숫자가 하나도 없다.**

- 언어 중립 그림은 **숫자·기호가 주인공**이어야 성립한다(Q2-b §5). 이 절엔 그릴 숫자가 없다.
- 이 절의 결론을 그린 그림은 **13줄 아래에 이미 있다** — `holdem-limping-raise-or-fold.webp`(RAISE ✓ / LIMP ! / FOLD −).
  여기에 또 만들면 **같은 주장을 두 번** 그리는 셈이다.
- 남은 밀도도 충분하다: 삭제 뒤 EN 본문 이미지 = `:75` 라이즈-or-폴드 · `:87` 멀티웨이 실사 · `:114` 신설 **3장**.
  🔴 **마감 실측 정정(렌즈 ③)**: 초안이 적은 「앞쪽 6,291자」는 **어느 로케일에서도 재현되지 않는다**(본문 배열을 줄 단위로 이어 붙여 센 값이었다).
  삭제 뒤 «본문 시작 → 첫 본문 이미지» 실측 = **en 4,801 / de 5,714 / es 5,011 / id 5,167 / ja 3,366 / pt 4,968 / zh 2,652 / zh-hant 2,440.**
  최대 de 5,714도 코퍼스 내 평범치다 → **판정은 안 바뀐다.**
  🪶 그 구간 안에는 **오픈리밍↔오버리밍 비교표**(골드 박스)가 시각 블록으로 들어 있다.

### 3-B. `limping:116` → **신설** `holdem-limping-isolation-raise.webp`

절 = 「Is Limping a "Fish" Tell? How Good Players Punish It」. 첫 불릿이 **공간·순서 기제**다(8로케일 축어):

> en 「they raise big behind you — an "iso-raise" — to **fold everyone else out** and get you **heads-up, in position**, with the betting lead」
> ja 「後ろから大きくレイズする…他全員を降ろし、あなたをヘッズアップに、**インポジション**で」
> zh 「在你身后大加注…把其他人全逼弃，让你单挑、**他占位置**、握着下注主导权」

**글로 읽으면 네 가지가 동시에 일어나는 문장이고, 그림으로는 한 장면이다.** 그래서 신설한다.

🔴 **글자를 넣을 수 없다** — ja가 `iso-raise`를 **`アイソレーションレイズ`/`アイソレイズ`**로 쓴다(라틴 0회).
`LIMP`·`RAISE`도 ja 본문은 `リンプ`·`レイズ`다. → **완전 무문자 설계**(좌석 도트 · 칩 높이 · ✕ · 화살표 · `D` 버튼).
🪶 `D`만 예외다 — 딜러 버튼의 **픽토그램**이지 단어가 아니고, 8로케일 전부 버튼을 그림으로 이미 쓰고 있다.

### 3-C. `drawing-odds:58` → **신설** `holdem-drawing-odds-set-mining.webp`

절 = 「Odds of Flopping a Set (and the Set-Mining Math)」. **이 글에서 숫자 밀도가 가장 높은 자리**다.
그릴 것 = 본문 축어 **「two cards left in the deck that pair you」 · 「three cards drawn from the 50 you can't see」 · 「88% / 12%」.**

- 「11.8%가 왜 어려운가」는 **크기 감각**이다 — 88 대 12의 막대 하나가 「10번에 9번은 접는다」를 즉시 준다.
- 🔴 **`15–20×`를 그리지 마라**(진행 파일 §3 · Q2-b가 분모 없는 배수로 D유형을 냈다).
- 🔴 **`7.5-to-1`도 그리지 마라** — 소수점 + 비율 표기가 로케일마다 셋으로 갈린다(§2 표).

---

## 4. 그림 규격 (저작 입력)

공통: `scripts/_GEN_SPEC.md` 팔레트 · 1200×675 · 자립형 HTML · 워터마크 `♠ holdemmaster.com`(Q2-b 형) ·
산출은 **`node scripts/render-gen-final.mjs <name>`**(q82 — `render-gen-batch`는 미리보기 q72다).

> 🔴 아래는 **마감 시점의 확정 규격**이다(초안 → 렌즈 4종 → 2차 교열로 두 번 바뀌었다 · 경위는 진행 파일 §1-Q2-c).

### ① `holdem-limping-isolation-raise` — 무문자
- 6-max 정순 한 줄: **좌1 = UTG 리퍼**(칩 1개) · 좌2·3 = 폴드(흐리게 + ✕) · **좌4 = BTN**(`D` 배지 + 큰 칩 더미 + 리퍼를 향한 화살표) ·
  **좌5 = SB**(절반 폭 칩) · **좌6 = BB**(1칩) — 둘 다 폴드했지만 **낸 돈은 남는다**(데드머니).
- 🔴 **색 범례는 이 글이 이미 글자로 못박아 뒀다** — 39줄 위 `holdem-limping-raise-or-fold` alt가 8로케일 전부
  「RAISE **highlighted in gold** · LIMP marked in **red** · FOLD in neutral **grey**」다.
  → **리퍼석 = 빨강 · 버튼석 = 골드 · 폴드 = 회색.** 뒤집지 마라.
- 🔴 **칩 더미는 «배수»를 말하면 안 된다** — 본문은 iso-raise 사이즈를 숫자로 말하지 않는다. 7칩(3+4)까지다.
- §13: **카드를 그리지 않는다**(전부 뒷면 · 카드가 없으면 카드 사고도 없다).

### ② `holdem-drawing-odds-set-mining` — 숫자만
- 상단 왼쪽: 골드 배지 **`2`** + **덱 50장**(붉은 뒷면 48 + 부채 위로 띄운 **금색 2장**) → 화살표 → 카드 뒷면 **3장**(플롭).
- 하단: 가로 분할 막대 — 골드 **`12%`**(✓) / 회색 **`88%`**(✕). 회색 알파는 **.19**(캡션이 「grey」로 지목하므로 실제로 회색이어야 한다).
- 🔴 **덱 장수는 50이어야 한다.** 28장이면 「2/28 = 7.1%」가 바로 아래 `12%` 막대와 어긋난다.
  50은 본문 유도표 `C(50,3)`의 분모와 같아 **세어도 틀리지 않는다.**
- 🔴 `11.8%` · `88.2%` · `7.5` · `15–20×` **금지**(§2·§3-C).
- §13: 카드는 **전부 뒷면**이라 랭크·무늬 중복 사고가 원천 차단된다.

---

## 5. 반영 — 24행

| 자리 | 로케일별 행 | 작업 |
|---|---|---|
| `limping` 4가지 이유 절 | en 64 · de 68 · es 65 · id 65 · ja 74 · pt 65 · zh 74 · zh-hant 71 | **행 + 앞뒤 빈 줄 정리** 삭제 |
| `limping` 아이솔레이트 절 | en 116 · de 123 · es 117 · id 117 · ja 138 · pt 117 · zh 138 · zh-hant 135 | 경로·alt·캡션 **교체** |
| `drawing-odds` 셋마이닝 절 | en 58 · de 61 · es 59 · id 59 · ja 65 · pt 59 · zh 65 · zh-hant 65 | 경로·alt·캡션 **교체** |

🔴 **alt·캡션은 그 로케일 문장으로 새로 쓴다**(직역 금지). 역할 분리는 Q2-b 정본 그대로 —
**alt = «그림에 무엇이 보이나» / 캡션 = «그 그림이 무엇을 주장하나».** 둘 다 HTML로 나가므로
(`lib/render-markdown.ts:200`) **한쪽에서 뺀 문장을 다른 쪽에 옮기면 중복은 그대로다.**

🔴 **로케일 용어 정본은 «그 파일»을 보고 고른다**(Q2-b 교훈):
zh-hant `holdem-limping`은 리퍼를 **`跛入者`**, 오픈리밍을 **`開池平跟`**으로 쓴다 ·
zh는 **`limper`·`open-limp` 라틴 그대로** · ja는 **`リンパー`·`オープンリンプ`**.

---

## 6. 하지 말 것

- **이미지 파일 2장을 지우지 마라** — KO 6편이 쓴다(`posts/holdem-cbet-strategy` · `posts/holdem-pub-guide` ·
  `posts/holdem-pub-first-visit-guide` · `posts/holdem-pub-legal` · `posts/holdem-community-event-guide` ·
  `posts/holdem-tournament-buy-in-cost` · `posts.ts`). **참조만 끊는다.**
- **KO·`glossary`·`fish`는 손대지 마라** — 그 글들에선 같은 그림이 제자리다(glossary = 버튼 항목 · fish = 펍 테이블).
  🪶 마감 실측: **KO에는 `holdem-limping`·`holdem-drawing-odds` 자체가 없다**(`lib/posts.ts`·`lib/posts/` 0건) → 「KO 미변경」은 부채가 아니라 **공집합**이다. 다음 세션이 또 파지 않게 적어 둔다.
- 🔴 **«뒤쪽에 이미지가 없다»를 후속 작업으로 열지 마라**(렌즈 ③ B-3 실측). 글 뒷부분 1만 자는 대부분 FAQ·Related·readnext다.
  **마지막 이미지 → FAQ 사이 산문만** 재면 `holdem-limping` **2,758자로 EN 56편 중 최단**이고 `holdem-drawing-odds`는 4,152자(코퍼스 중앙값 6,201).
  EN 15,000자 초과 51편의 평균 본문 이미지가 **1.94장**인데 이 두 글은 삭제 뒤에도 **3장**이다 — 코퍼스 상위 밀도다.
- **`render-gen-batch.mjs`로 반영하지 마라**(q72 미리보기).
- **카드 문구 창작 금지**(§3-A) — 그래서 ①은 카드 0장, ②는 전부 뒷면이다.
- **본문 문장은 한 자도 고치지 않는다.** 이 회차는 **그림·alt·캡션만**이다.
