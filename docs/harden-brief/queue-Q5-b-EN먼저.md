# 브리프 — queue 회차 **Q5-b** · EN-먼저 묶음 II 후반 (`en-first-queue` §1 ㉒~㊸)

> 규격 = `docs/hardening-protocol.md` §3-⑥ · 레인 부록 §7-F. **판정표가 본체다** — 진행 파일에 복사하지 않는다.
> 작성 2026-09-13 · 모델 = 전 구간 Opus(§5-A-3 「작업 성격으로 다시 짜라」 — 새 문장은 «짧은 한정어 + 1차 출처 표 1개»뿐).
> 🔴 착수 전 §3-0-B 이행: **18항목 전건을 EN 현행 원문에서 다시 열었다.** 아래 「종결」 5건은 손대기 전에 이미 닫혀 있었다.

---

## 0. 전건 재판정표 (18항목 · 원문 실측)

| # | 판정 | 근거(실측) |
|---|---|---|
| ㉒a 태그 카니발 7쌍 | ❌ **기각(메커니즘 부재)** | 이 사이트에 **태그 라우트가 없다**(`find app -type d -name "*tag*"` 0건 · `generate-sitemap.mjs`에 tag 0건). `post.tags`는 **`keywords` 메타 + 블로그 인덱스 클라이언트 필터**로만 쓰인다(`app/blog/[slug]/page.tsx:49,116` · `blog-index-client.tsx:97`). 구글은 meta keywords를 2009년부터 무시한다 — `settled-decisions` §1-B 「비한국어 `keywords`는 없는 것이 정본」의 근거 ①과 같다. **색인되는 페이지가 없으면 카니발이 성립하지 않는다.** 공유 태그는 인덱스 필터에서 오히려 기능이다 |
| ㉒b probability FAQ 호스팅 | 🔴 **부분 채택 2** | ① `probability:244` 「Rule of 2 and 4」 답에 **×4 캐비어트 결손** — 형제 두 편(`pot-odds:221`·`outs:200`)은 축어로 「Use ×4 only when you'll see both cards without more betting」을 갖는다. **D유형**(같은 코퍼스가 이 캐비어트 부재를 이미 결함으로 판정했다 — Q5-a ⑫·㉑b) ② `probability:248` 「How do you calculate pot odds?」 답이 `pot-odds:189`와 거의 축어 동일(「Divide the amount you must call by the total pot after your call. Calling $50 into a $150 pot … 25%」) → **머니쿼리 소유를 pot-odds에 양보**(질문은 남기고 답을 «확률 쪽 각도 + 소유 글 포인터»로) |
| ㉒c 직답 리드 4편 미준수 · H2↔직답 이미지 10곳 | 🟠 **이관(신규 회차)** | 실측(H2 직후 첫 비어있지 않은 줄): implied-odds 7/10 · equity 8/10 · card-counting 7/10 **↔ probability 0/10 · pot-odds 1/10 · outs 1/9 · drawing-odds 0/8**. 이미지가 H2와 직답 사이에 낀 자리 = probability 3 · pot-odds 1 · outs 3 · drawing-odds 3 = **정확히 10**. **약 35자리에 40~75단어 새 직답을 쓰는 집필 회차**라 이 회차 범위 밖 |
| ㉓ 3bet polarized «블라인드 QQ 플랫» | ✅ **이미 종결** | EN `:98` 「flat the JJ/AQ/TT middle」(QQ 아님) · `:99` 「or you're in the **big blind**」(blinds 아님) · id `:99`·`:100`도 동일(`bagian tengah JJ/AQ/TT` · `di **big blind**`). 같은 글 `:150`·`:266`이 SB(linear)↔BB(polarized)를 두 번 더 가른다 |
| ㉔ 3bet fold-to-3bet 표 방향 | 🔴 **채택** | 표가 «Facing a 3-Bet: Do You Call, 4-Bet, or Fold?» 절 한가운데 있는데 열 제목은 **«Villain's fold-to-3-bet stat»**이고 처방은 **«3-bet them for value only»** — 내가 3-bet하는 쪽이다. 앞 문단(MDF = 내가 방어)과 뒤 문단(「when a passive player suddenly re-raises … fold more than MDF says」)은 둘 다 방어다. **표 내용은 옳고, 자리 전환 표지가 없다** |
| ㉕ position-play SB «never flat» 무조건형 | ✅ **이미 종결** | `:179` 「~40% **when folded to** (vs a raise: 3-bet or fold) … though completing is a defensible limp **in an unraised pot**; **facing a raise**, 3-bet or fold」 · `:224` 「from the SB, **facing a raise**, 3-bet or fold — **almost** never flat-call」 |
| ㉖ limping `==g:==`가 경고문에 | 🔴 **채택** | `limping:21`이 파일의 **유일한 하이라이트**이고 `==g:open-limping as the first player in==`인데 그 문장이 「one of the most common and **costly** habits」다. 관례 정본 = `render-markdown.ts:198-199`(`==r:`→`brush-hl-red` · `==g:`→`brush-hl-green`) · 같은 코퍼스 용례 = `when-to-fold` 팟오즈 절 「==r:Fold.==」/「==g:Call.==」 |
| ㉘ when-to-fold 표 마무리 문단이 `</div>` 안쪽 | 🔴 **채택** | 같은 글 다른 표 두 개(`:88`·`:115`)는 마무리 문단이 **`</div>` 바깥**인데 「7 Most Common Folding Mistakes」 표(`:186`)만 「Notice both poles are here…」가 **안쪽**이다 |
| ㉙ 전략 클러스터 이미지 재사용 | 🟠 **부분 채택 판정 · 제작은 이관** | readnext 썸네일 상이 = ✅ **종결**(limping:135 ↔ strategy:176 둘 다 `/images/holdem-position-play-hero.webp`). `check:image-reuse --locale=en` = 🔴 0 · 🟠 2 잔존: ⓐ `holdem-starting-hands-premium.webp` = shc(주인) + **pot-odds:87** ⓑ `holdem-starting-hands-weak-ace-trap.webp` = shc(주인) + fish:106. **ⓑ는 맥락 적합**(A4o 빨강 ↔ AK 골드 그림 + 「calling raises with the hand on the left」 캡션 = fish 절의 주장 그대로). **ⓐ만 실질 결함** — 그림은 AA/KK/QQ/AKs 4장인데 캡션은 「The required equity depends entirely on the size of the bet you face」(그림에 없는 주장) → **새 그림 1장 제작 회차로** |
| ㉚a OOP 60–85% 하한 산술 긴장 | ❌ **기각** | 글은 IP 쪽 **숫자를 적지 않는다**(「necessarily above 100%」뿐). 팟이 안 커지므로 한쪽 초과실현 = 다른 쪽 미달이라는 서술은 참이고, 「Solver and database studies **suggest**」로 이미 헤지돼 있다. **모순이 성립할 두 번째 수치가 없다** |
| ㉚b positions «one middle seat» | 🔴 **채택** | `:186`·`:217` 둘 다 6-max에서 「UTG+1, UTG+2, **and one middle seat** don't exist」인데 **같은 문장이** 「the names are removed from **early position first**」라 하고 `:180`은 6-max 첫 좌석을 「**UTG (also called LJ)**」라 한다. 실제로 사라지는 셋은 **UTG · UTG+1 · UTG+2**이고 LJ는 사라지는 게 아니라 **UTG로 개명**된다(중간 두 좌석 LJ·HJ는 6-max에도 그대로 있다) |
| ㉚c cbet OOP 40–50 ↔ position-play 30–45 | ✅ **이미 종결** | `continuation-bet:105`·`:230` = **~30–45%** · `position-play:214`·`:285` = **~30–45%**. 두 글이 같다 |
| ㉚d 신규 FAQ 3문 40~75단어 초과 | ❌ **기각(규격 오적용)** | 40~75단어는 **H2 직후 «직답 블록» 규격**이다(`posting.mdc` 「H2 = 검색자 질문 그대로, 직후 40~75단어에 직답」 · `settled-decisions` §3 「en은 단어 규격 40~75」 = 직답 카운터). FAQ 답에 적용하는 규율은 코퍼스 어디에도 없다. 현행 초과분도 76~98단어로 자기완결 패시지 규격(100~170단어) 안이다 |
| ㉛ rake NL50 예시 cap $4 ↔ 선언 $1–$3 | 🔴 **채택** | `:64` 「commonly **$3–$6 live** and **$1–$3 online**」 · `:125` 「Online rake … smaller cap (**$1–$3**)」 ↔ `:84-85` 온라인 NL50 예시가 「$2 cap」 vs 「**$4 cap**」. 두 선언 다 헤지어를 갖지만 **예시가 왜 밴드 밖인지 말하지 않는다** |
| ㉟ bad-beat 잭팟 절 ↔ 자기 리트머스 | 🔴 **채택(우선)** | 같은 글이 `:71` 「if your opponent needed to **improve** to win, it's a bad beat … flopped set over flopped set is **not** a bad beat」로 리트머스를 박고, `:88` 표가 「~96% one-outer」까지 등급을 매긴다. 그런데 `:110` 잭팟 자격은 「**aces full of jacks or better, beaten by four of a kind or better**」 = **핸드 «세기»** 기준이라 석션 없이 성립하는 쿨러가 대부분이다. 형제 글 `holdem-cooler`가 그 조합을 쿨러로 다룬다. **절 전체가 자기 정의와 충돌하는데 한 줄도 인정하지 않는다** |
| ㊱ bubble «pay the bubble» gloss | 🔴 **채택(id 정본 이식 · 창작 0)** | EN `:186` 「the player who busts there … wins nothing while everyone still in gets paid; **that's what people mean by paying the bubble**」 ↔ id `:187` 「Adapun **"pay the bubble" merujuk pada kesepakatan sebagian event (atau para pemain) untuk memberi finisher bubble pembayaran kecil — itu pengecualian, bukan aturan**」. EN 자신도 바로 다음 문장에서 「Some events give the bubble boy a small consolation」을 말하는데 **용어를 거기에 붙이지 않았다** |
| ㊲ bubble 「It works precisely because tanking is free」 | ✅ **이미 종결** | `grep -rn "tanking is free" lib/` = **0건**(전 로케일). 현행 `bubble:140`은 「During hand-for-hand that hope is **misplaced**: it does not reduce the number of hands …(126.a, 126.c)」다. 🔴 **재론 절차(MB 초안) 불요** — 대상 문구가 존재하지 않는다 |
| ㊳ tvc 무조건 맥스 바이인 | 🔴 **채택** | FAQ `:386` 「In a cash game, **buy in for the table maximum**」 ↔ 같은 글 `:81` 「deeper stacks create more postflop play, while **shorter stacks simplify decisions**」. 뱅크롤·숙련도 한정이 없다 |
| ㊴ wpt 나인 티켓 | 🔴 **채택(1차 출처 전수 실측 — 이 회차 최대 산출)** | §1 참조 |
| ㊵ bubble 동시 탈락 TDA 귀속 오류 | 🔴 **채택(1차 사본 확증)** | §2 참조 |
| ㊶ apt 소품 5 | 🔴 3 채택(③은 처방이 뒤집혔다) · 🟠 1 등재 · ❌ 1 기각 | §3 참조 |
| ㊷ tournament 소품 4 | 🔴 2 채택 · ❌ 1 기각 · ✅ 1 종결 | §4 참조 |
| ㊸ pt RISKY 40 → EN 동형 30건 | ✅ **이미 종결** | **Q4-a가 전건 재판정**했다(진행 파일 §1-Q4-a: 이미 닫힘 27 · 열림 2 = 고침 · 기각 1). 이 항목은 Q4-a의 뼈대였다 |

**합계**: 채택 **14** · 기각 **5** · 이미 종결 **5**(㉓ ㉕ ㉚c ㊲ ㊸ · + ㉙·㊷의 부분) · 이관 **2**

---

## 1. ㊴ WPT — 「나인 티켓」 1차 출처 전수 실측 (2026-09-13)

**출처 두 개가 서로 다른 말을 한다.**

- 공식 랜딩 축어(레포 Playwright · `document.body.innerText` 직독 · `starpoker.com.au/wpt-australia`):
  > *「We also see the return of both the Player of the Festival and the innovative Team of the Festival awards, to go with the **nine WPT World Championship tickets** also up for grabs.」*
- 공식 일정 브로슈어(`TheStar_WPTAustralia2026_RollingBrochure_V3…pdf` · 200dpi 렌더 후 **육안 전수**)의 범례:
  > *「PRIME = ticket to WPT Prime Championship · CHAMPIONSHIP = ticket to WPT World Championship · LADIES = ticket to WPT Ladies Championship」*

🔴 **배지 9개를 전수 세면 세 갈래로 갈린다 — «나인 WPT World Championship 티켓»은 «메인 9석»이 아니다.**

| 배지 | 이벤트(번호 · 날짜 · 시각) |
|---|---|
| **CHAMPIONSHIP** (2) | **#22 $10K High Roller Final Day** (Thu Sep 24 · 11.45am) · **#24 Championship Event Final Day** (Wed Sep 30 · 11.30am) |
| **PRIME** (6) | #1 Australian Poker Cup Final Day (Mon Sep 14 · 12.15pm) · #6 Aussie Monster Stack Event Final Day (Mon Sep 14 · 12.30pm) · #14 Prime Championship Event Final Day (Tue Sep 22 · 12.30pm) · #20 Mystery Bounty Final Day (Tue Sep 22 · 11.30am) · #30 Mini-Championship Final Day (Mon Sep 28 · 12.30pm) · #33 WPT World Champs Prime Warm Up Final Day (Wed Sep 30 · 11.45am) |
| **LADIES** (1) | #11 Ladies Australian Championship Final Day (Wed Sep 16 · 12.30pm) |

- 합계 **9** — 랜딩의 「nine」과 개수는 맞는다. **갈리는 것은 «무엇의 티켓인가»다.**
- 🪶 **PRIME 배지가 「WPT Prime Championship」 자기 자신을 가리킬 수 없다**: #14가 바로 그 이벤트인데 **자기도 PRIME 배지를 단다.** 그리고 #33의 이름이 「**WPT World Champs Prime** Warm Up」이다 → PRIME = **WPT World Championship Prime** 티켓. 이 글 `:159`의 「WPT World Championship **Prime** seat valued at $1,500」과 일치한다.
- **우리 글의 현재 결손**: `#24`(Championship Event)와 `#14`(Prime)만 적고 있다. **`#22 $10K High Roller Final Day`가 두 번째 World Championship 티켓을 준다는 사실이 통째로 없다.**
- 🔴 **되돌리지 마라**: 「nine」을 **메인 이벤트 9석으로 적지 마라.** CHAMPIONSHIP 배지는 **2개**다(전수 육안). §12-B 「요약을 근거로 쓰지 마라」의 교과서 사례 — 랜딩 한 줄이 세 갈래를 뭉쳤다.
- 텍스트 레이어로는 못 센다: `pdftotext -layout`은 배지를 행에서 떼어 놓고(전체 마커 9개 중 CHAMPIONSHIP 2개만 남음), `-raw`는 마지막 페이지에 마커 블록만 모아 놓는다. **판정은 렌더 이미지 육안이 유일한 길이었다.**

**넣을 자리**: `wpt-australia-2026-guide.ts` 「**The winner's seat**」 문단(`:159`) 바로 뒤에 표 1개 + 한정 문단.

---

## 2. ㊵ bubble — 동시 탈락 귀속 (1차 사본 축어)

현행 `bubble:139`:
> 「… every hand runs a fixed 2 minutes off the level …(**WSOP Tournament Rule 126.a and 126.c; TDA RP-8**) … If two players bust on the same hand-for-hand **at the same table**, the one who started the hand with fewer chips takes the lower (bubble) finish; if they bust **at different tables**, they are ranked as a tie and split the two payouts involved.」

**레포 1차 사본 축어**:
- `docs/sources/wsop-2026-tournament-rules.txt:1495` **126.b** — *「If two or more Participants are eliminated during the same hand **at different tables**, those Participants will "tie" for that place finish. If two or more Participants are eliminated during the same hand **at the same table**, the Participant(s) who began the hand with the **highest chip count** will receive the **higher** place finish.」*
- `docs/sources/tda-2024-rules-v1.txt:652` **RP-8-A** — *「If enough players bust on the current hand to break into the money, the busting players will be **eligible for a share of the place(s) paid** on the current hand. Example: … 3 players bust. **All 3 players will share in the 50th place payout.**」*

🔴 **판정**: 테이블 분기는 **WSOP 126.b**다. **TDA RP-8-A에는 테이블 구분이 없다** — 같은 핸드에 터진 전원이 그 자리(들)를 **나눈다**. 지금 문장은 126.b 내용에 **126.a·c + RP-8**을 붙여 «틀린 조항»을 인용한다.
- 🪶 덤: `docs/harden-zh-진행.md` §584가 「126조가 레포 1차 사본에 없다 — 조문 번호를 달 자격이 없다」로 남긴 미결은 **오판이었다.** 126조는 `wsop-2026-tournament-rules.txt:1495`에 **있다**(126.a~g). → 진행 파일 §5에 「zh 진행 §584 미결 해소」로.
- **처방**: 시계 문장에는 `126.a`·`126.c` 유지 · 탈락 분기 문장에만 **`126.b`**를 달고, TDA는 **「TDA RP-8-A는 테이블을 가리지 않고 «나눈다»로 적는다 — 하우스 룰을 먼저 확인하라」**를 붙인다(ja `:165`가 이미 「ここはハウスルールにより異なることがあります」를 갖고 있다 — **되돌리지 마라 · 나머지 로케일에 이식**).

---

## 3. ㊶ apt 소품 5 — 판정

| 소품 | 판정 | 근거 |
|---|---|---|
| ① 일정표 시간순 | 🔴 **채택** | `:86-95` 행 순서 Aug 7 → 8 → 9 → 9 → **14(Superstar)** → **13(Zodiac)** → 14 → 15 → 15 → 16. **한 행만 어긋난다** → 두 행 교체 |
| ② 환율 3계열 공존 | 🔴 **채택(de 정본 이식)** — 🔴 1차안은 자작 각주였다. de에 이미 `:::note[★Zu den USD-Angaben …]`가 있어(버인 ~1.468 · 결과 ~1.400 명시) **그것을 8로케일로 이식**했다 | 실측: 바이인 2,500,000 ÷ 1,703 = **1,468** · 결과 411,180,000 ÷ 293,700 = **1,400** · GTD 1,500,000,000 ÷ 1M = **1,500** · 2025 2,766,960,000 ÷ 2.0M = **1,383**. **각 블록은 자기 출처 시점 환율이라 내부 정합**이다 → 값은 건드리지 말고 **「USD는 각 출처 발표 시점 환율 환산 — 원화가 기준값이다」 한 줄**만 |
| ③ `$1,684` 단독 이탈 | 🔴 **채택 — 단 1차안은 틀렸다(경위 보존)** | 1차 판정은 「같은 바이인의 두 값이니 `~$1,703`으로 맞춘다」였다. **틀렸다**: B 구간에서 de를 열어 보니 de는 이 자리를 **USD 없이 `NT$53.888 티켓 + NT$16.000 여비`**로 적고 있었다(de가 정본). `$1,684`는 버림한 환산이 아니라 **NT$53,888(내추럴8이 대만달러로 매긴 패키지 값)의 환산**이고, `$1,703`은 **KRW 2,500,000의 환산**이다 — **다른 통화로 매겨진 다른 금액**이라 일치할 이유가 없다. → 실제 처방 = **de 정본 이식**(NT$ 원값을 적고, 왜 `$1,703`과 안 맞는지 한 절). 🔴 **`$1,684`를 `$1,703`으로 바꾸지 마라.** 🪶 교훈 = 「두 값이 다르다」는 결함이 아니라 **가설**이다 — 형제 로케일을 먼저 열어라([[absence-may-be-the-standard]]) |
| ④ `$183,570` 절사 | 🟠 **등재만** | 411,180,000/1400 = 293,700.0 · 366,500,000/1400 = 261,785.7 → `261,785`(절사) · 257,000,000/1400 = 183,571.4 → `183,570`(십의 자리 반올림). **반올림 규칙이 자리마다 다르다.** 값 오차는 $1.4라 독자 영향 0이고, 8로케일 3자리를 만지는 값이 없다 → §5 등재 |
| ⑤ 예산표 행합-총계 규격 | ❌ **기각** | 직접 검산: 저가 200+60×7+20×7+5×7 = **795 ≈ ~$800** · 고가 1,400+350×7+40×7+10×7 = **4,200** ✔ 그리고 각주가 「Low end = Asian flight + Seoul mid-range hotel; high end = long-haul flight + Paradise City hotel (7 nights, **from the rows above**)」로 산식을 이미 공개한다. **자매 글과 규격이 다를 뿐 이 표는 옳다** |

---

## 4. ㊷ tournament 소품 4 — 판정

| 소품 | 판정 | 근거 |
|---|---|---|
| ① 안테 시점(표 Level 3=67BB ↔ 산문 「중반 30–60BB」) | ❌ **기각** | `:201`은 「Middle stages (30–60BB): **Antes make every pot worth fighting for**」로 «안테가 거기서 시작한다»고 말하지 않는다. 시작 시점은 `:93` 「After the early levels」 + `:226` 「Antes kick in **per the structure sheet** (Level 3 in the example above)」로 이미 예시임을 밝힌다 |
| ② 홈칩 FAQ 「That's why」 인과 | ✅ **이미 종결** | `grep -n "That's why" lib/posts-en/holdem-tournament.ts` = **0건** |
| ③ 타임라인 Level 1만 60분 | 🔴 **채택** | `:78` 「usually every **20–40 minutes** in live events」 ↔ 타임라인 12:00pm Level 1 → 「**1:00–3pm** Levels 2–4」 = Level 1만 **60분**이고 그 뒤는 40분. **예시 자체가 자기 규격 밖**이다. 🪶 1차 출처가 손에 있다 — WPT Australia 브로슈어(§1)의 Championship Event는 **60 mins**(후반일 **90 mins**), 다른 이벤트는 15~40 mins. → 밴드 문장에 「플래그십은 60분 이상」을 더하고 타임라인 행을 **「Levels 2–3」**으로 맞춰 예시를 60분으로 통일 |
| ④ 스톨 페널티 조항 번호 부재 | 🔴 **채택(1차 사본 축어 확보)** | `bubble:150` 「live, deliberately burning time banks to ladder up is explicitly penalty-eligible **under WSOP rules**」 — 인접 문장은 126.a/c를 다는데 여기만 번호가 없다. 실물 = `wsop-2026-tournament-rules.txt` **Rule 80 (Calling-for-clock)**: *「Participants unnecessarily calling the clock or stalling, **including purposely depleting time banks to ladder up in the payout**, may be subject to a reduced clock or incur a penalty **in accordance with Rules 40, 113, and 114**.」* — 우리 문장과 **축어가 거의 같다** |

---

## 5. 편집 지시 (EN 먼저 → 핵심 9 전파)

🔴 **전파 범위 = 핵심 9**(en + ar de es id ja pt zh zh-hant · `settled-decisions` 결재 40 ②「문안·구조·GEO는 핵심 9까지」).
슬러그별 실재 로케일: **`holdem-tournament-vs-cash-game`만 ar 보유**(+꼬리 hi ms tr vi = **§13급 아니므로 제외**) · 나머지 11슬러그는 **de·es·id·ja·pt·zh·zh-hant 7 + en**.

| # | 파일 | 자리 | 무엇을 |
|---|---|---|---|
| 1 | `holdem-3bet` | 표 앞 · 표 뒤 문단 | ㉔ — 표 앞에 «자리를 바꾼다» 한 문장, 표 뒤 문단 머리에 «방어로 돌아온다» 표지 |
| 2 | `holdem-limping` | `:21` | ㉖ — `==g:open-limping as the first player in==` → `==r:…==` |
| 3 | `holdem-when-to-fold` | `:184-186` | ㉘ — `</div>`를 「Notice both poles…」 **앞으로** |
| 4 | `holdem-positions` | `:186`·`:217` | ㉚b — 「UTG+1, UTG+2, and one middle seat」 → 「UTG, UTG+1, and UTG+2 … 로우잭이 첫 좌석이 되고 보통 UTG로 불린다」 |
| 5 | `holdem-rake` | `:78` 예시 도입 | ㉛ — 「$4 cap이 위 $1–$3 밴드 «위»에 있고, 그게 이 예시의 요점(캡 하나가 결과를 가른다)」 한 절 |
| 6 | `holdem-bad-beat` | `:124` 캐비어트 문단 | ㉟ — 「잭팟은 **핸드 세기**로 자격을 정한다 — 위 리트머스와 다른 잣대다. 자격 핸드 상당수는 이 글 기준으로 **쿨러**다」 |
| 7 | `holdem-bubble` | `:186` FAQ | ㊱ — id `:187` 정본 이식(«pay the bubble» = 버블 피니셔 위로 지급 · 예외이지 규칙 아님) |
| 8 | `holdem-bubble` | `:139` | ㊵ — 탈락 분기에 **126.b** 귀속 + 「TDA RP-8-A는 테이블 무관 share」 한 절(ja 「ハウスルール」 문면 보존·이식) |
| 9 | `holdem-bubble` | `:150` | ㊷④ — 「under WSOP rules」 → **Rule 80**(벌칙 근거 40·113·114) |
| 10 | `holdem-tournament` | `:78` · 타임라인 행 | ㊷③ — 밴드에 「플래그십 60분+」 · 타임라인 「Levels 2–4」 → 「Levels 2–3」 |
| 11 | `holdem-tournament-vs-cash-game` | `:386` FAQ | ㊳ — 맥스 바이인에 뱅크롤·숙련 헤지(같은 글 `:81` 「shorter stacks simplify decisions」와 정합) |
| 12 | `apt-incheon-2026-guide` | `:89-90` · `:155` · 표 주석 | ㊶① 행 교체 · ㊶③ `$1,684`→`~$1,703` · ㊶② 환산 기준 한 줄 |
| 13 | `wpt-australia-2026-guide` | `:159` 뒤 | ㊴ — 나인 티켓 표(2 World / 6 Prime / 1 Ladies) + 「«nine World Championship tickets»는 메인 9석이 아니다」 한정 |
| 14 | `holdem-probability` | `:244-250` | ㉒b — Rule of 2&4 답에 ×4 캐비어트 · pot-odds 답을 확률 각도 + 소유 글 포인터로 |

### 🔴 하지 말 것
- **태그를 손대지 마라**(㉒a 기각 — 메커니즘 부재). 태그 볼륨 문서도 이 회차 범위 밖.
- **apt 결과 USD 3개 값을 고쳐 반올림을 통일하지 마라**(㊶④ 등재만). KRW가 기준값이다.
- **`bad-beat` 「~63% (1.7:1)」·표 문구를 건드리지 마라**(결재 15 · 진행 파일 §3).
- **`wpt` 「$15,000 seat … deducted from prize pool」·「US $10,400」을 건드리지 마라** — 공식 이벤트 페이지 근거이고 이번 표는 **추가**다.
- **`bubble` 「2 minutes」·126.a·126.c를 빼지 마라** — 그 인용은 1차 사본에 그대로 있다(RP-8-C·D도 2분/핸드).
- **`probability` FAQ를 «삭제»하지 마라** — 개수가 줄면 `check:structure --only=faq`가 8로케일에서 결손으로 뜬다. 답만 바꾼다.
- ja `bubble` 「ここはハウスルールにより異なることがあります」 · zh·zh-hant 기존 용어는 그 파일 정본이다(진행 파일 §3).
- 🔴 **직답 블록이 있는 글의 본문을 고치면 그 블록도 같이 본다**(Q5-a에서 두 번 걸렸다 · `check:answer-echo`).

### §13 자리 (마감 손검산 대상)
- `holdem-bad-beat` `:88` 표(80/85/63/90/96%)·`:99` AA vs 77 4:1 — **값 무변경**이지만 ⑥ 문단이 인접하므로 재검산.
- `holdem-probability` `:244-250` 9아웃 ×4 = 36% · ×2 = 18% · 50 ÷ 200 = 25%.
- `wpt` 표의 이벤트 번호·날짜·시각 **27개 토큰** — §1 배지 표와 1:1 대조.
- `apt` 두 행의 날짜·바이인·GTD가 교체 후에도 원값 그대로인지.

---

## 6. 🔬 렌즈 4종 + 2차 교열 — 이 회차가 «수리»한 것

> 🔴 **1차 편집이 만든 결함이 5건이었고, 그중 둘은 «고치려던 것을 더 키운» 것이었다.**

| 렌즈 | 이 렌즈만 잡은 것 | 값어치 |
|---|---|---|
| 수학·딜러/TD | ① 🔴 **새 §13 예시의 «쿨러» 라벨이 거짓**이었다 — AA vs JJ는 프리플롭 80/20이라 «돈이 언제 들어갔나»를 안 적으면 이 글이 정의한 **바로 그 배드비트**다 ② 🔴 **타임라인 수정이 결함을 확대**했다(예시는 «$300 프리즈아웃»인데 60분 레벨은 플래그십 페이스 — 위반이 1레벨→3레벨로) ③ 🔴 **「TDA writes it differently」가 거짓** — WSOP 126.c가 같은 문장을 갖고 있고 그 126.c를 같은 문장이 이미 인용한다 ④ 🟠 **wpt $1,050 «더 싼 길»이 같은 글의 $290을 가린다**(D유형) | 1차 사본을 **직접 열어** 126.b·126.c·RP-8-A~D·Rule 80을 전건 축어 대조했다 |
| 네이티브 | ⑤ 🔴 **ja WPT 표만 이벤트명 9개가 라틴**인데 같은 글 기존 표는 12/12 일본어다(8개가 한 글에 두 표기로 동시 등장) ⑥ 🔴 **날짜 서식 드리프트 3로케일** — de `30.9.`(파일 정본 `30. Sep` 34회) · ja `9/30`(정본 `9月30日` 33회) · zh `9/14`(정본 `9 月 30 日` 17회). 🪶 **zh-hant만 슬래시가 맞다**(기존 28회) — CJK로 뭉뚱그리면 틀린다 ⑦ 🔴 ar `رأس مالك`(코퍼스 0회) ↔ 정본 `بانكرول` 19회 | **근거를 전부 코퍼스 횟수로** 댔다. 「자연스럽다」가 아니라 실측 |
| SEO·GEO | ⑧ 🔴 **tvc 「Short version」이 방금 붙인 조건을 지운다** — 그 줄이 바로 리치결과·AI 개요가 뽑아 가는 문장이다(9로케일) ⑨ 🟠 새 표 래퍼만 골드카드가 아니었다(같은 글 8/9가 골드카드) ⑩ 🟠 wpt 꼬리 괄호가 22줄 위 문단의 $15,000/$1,500을 재인용 ⑪ 🟠 rake 새 절이 18줄 아래 마무리 문장과 같은 말 | **게이트가 원리상 못 보는 자리**(FAQ↔FAQ · 래퍼 관례 · 앵커 중복)를 봤다 |
| 교열·diff | ⑫ 🔴 **es probability 미전파**(7로케일만 고쳐졌다) — 🔴 `check:structure`가 **원리상 못 잡는다**: 링크를 «대상 slug 집합»으로 세는데 es는 본문에 같은 slug가 이미 있어 집합이 안 변한다 ⑬ 🔴 **zh limping에 `==g:` 사본이 하나 더**(㉖가 고친 그 결함) ⑭ 🟠 `</div>` 이동이 **빈 줄 2개**를 남겼다(5로케일 · en·id·pt는 1개) ⑮ 🟠 positions 「full-ring namesake」가 **개명을 명시한 탓에 거짓이 가시화**됐다 | 「내 편집이 무엇을 깨뜨렸나」만 물어 **사본 누락 3건**이 이 렌즈에서 나왔다 |

**🔴 ⑫는 네 렌즈가 독립으로 같은 자리를 잡았다** — 그런데도 **기계 게이트는 전부 0건**이었다. 「게이트 0건 + 렌즈 0건이라야 0건」의 실물.

**기각 3(사유와 함께 — 다시 올리지 마라)**
- **de `holdem-probability`의 ×4 캐비어트 «결손»** — 렌즈 둘이 갈렸다(네이티브·교열 = 결손 / 수학 = 보유). **원문이 갈랐다**: de는 본문 `:179`에 「Kommen beide Karten (du bist all-in, oder der Turn wird durchgecheckt)」로 갖고 있고, de FAQ에는 애초에 「규칙이 뭔가」 문항이 없다(`:250`은 «정확도» 문항). 세 번째 사본을 넣으면 SEO 렌즈가 잡은 «3중 축어 중복»을 키운다.
- **ja `holdem-bubble`에 «pay the bubble» gloss 없음** — ja FAQ는 「バブルが弾ける」라 **용어 자체가 없다.** 없는 오류는 못 고친다.
- **pt tvc가 「짧게 사는 것도 정당」 절을 안 가짐** — pt는 기존 문안이 이미 「se ainda está aprendendo o pós-flop, um stack mais curto simplifica as decisões」로 헤지해 뒀다. 중복이 된다.

**1차 출처로 닫은 두 «미판정»**
- **NT$53,888 / NT$16,000의 출처** — 렌즈가 「브리프에 근거가 없다」고 정확히 지적했다. 실물은 `docs/handoff-to-review-2026-08-15.md:59`에 **Natural8 공식 축어**로 있다: 「Each Live Package comes loaded with a **NT$53,888 (~$1,684)** Main Event seat plus NT$16,000 (~$500)」. 같은 줄이 이미 **🔴 「$1,684와 $1,703은 둘 다 맞다 — 통일하지 마라」**라고 못 박아 두었다. 🪶 **이 회차가 B 구간에서 독립으로 같은 결론에 도달했다**(위 §3 ③) — 그 «되돌리지 마라»가 브리프에 안 실려 있었을 뿐이다. 자산은 `docs/translation-terms-de.md:337-338`·`docs/local-voice/es-latam.md:192-193`에도 있다.
- **#6 Aussie Monster Stack AUD $1,250** — 렌즈가 「표 9행 중 이 한 칸만 회차 밖 근거」로 남겼다. 브로슈어 200dpi 렌더 좌열 육안 재확인: 「2.30pm | **6** | Aussie Monster Stack Day 1 | Double Re-Entry | **$1,250 ($1,100 + $150)** | 60,000 | 30 mins | 9.45pm」 — **확인됨.**
