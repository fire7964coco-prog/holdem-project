# 🇹🇼 zh-hant 회차 7 브리프 — **트랙 종결(소급·마감)**

> 규격 = `docs/hardening-protocol.md` §3. 상태 = `docs/harden-zh-hant-진행.md`.
> 🔴 **이 회차는 클러스터 회차가 아니다.** 대상은 «§2 미결의 «회차 7» 항목 전부» + **회차 1~6이 남긴 소급**이다.
> 🔴 B 구간은 **이 파일 하나만** 읽는다. 도구 왕복이 더 필요하면 A로 돌아온다(프로토콜 §2).

---

## §0. 실측 부록 — 자리 세기 (2026-09-09 · `lib/posts-zh-hant/*.ts` 58파일 grep)

🔴 **회차 6 교훈 이행**: «자리»는 브리프 본문이 아니라 **이 표의 행**이 정본이다. 본문 지시와 이 표가 어긋나면 **표가 이긴다.**

| 실측 항목 | 값 | 비고 |
|---|---:|---|
| `快速解答` 블록 총계(58파일) | **296** | |
| 그중 회차 1 6편 / 회차 2 6편 | **6 / 6** | 파일당 1개 = 상단뿐 |
| 대상 42편 중 H2 직후 직답이 **없는** H2 | **110** | 회차 1 = 62 · 회차 2 = 48 |
| 그중 **굵은 리드 문장이 있는** H2 | **47** | 전환 대상 |
| 그중 **리드 문장이 없는** H2 | **63** | 신설 대상 |
| 직답 120자 초과(대상 42편 한정) | **42** | 140자 초과는 **5** |
| 직답 60자 미만 | **6** | 전부 회차 3~6 · 손대지 않는다 |
| `牌房` / `牌室` / `撲克室` | 3 / 3 / **97** | |
| `彩池` / `底池` / `獎池` | 11 / **1180** / 73 | |
| `面值` / `面額` | 1 / **23** | |
| `緊凶` / `緊兇` | 1 / **24** | |
| `岩石` / `石頭` | 6 / **20** | glossary L187 정본 = 石頭（Nit） |
| `冷牌局` / `冷牌組` | 3 / **108** | |
| `桑拿` / `三溫暖` | 3 / 0 | 코퍼스는 0이지만 **대만 검색량은 반대** — §5-E6 |
| `檯費` / `拉桿注` / `串注` / `彩金` | 0 / 0 / 0 / 0 | 회차 6 치환 **완결 확인** |
| `check:drift --locale=zh-hant` | 🔴 **5** | 토너먼트 5편 — §1 |

---

## §1. 팩 A — EN 드리프트 소급 5편 🔴 **최우선**

**출처 = 단일 커밋 `af6ca275`(2026-09-09) «GPT 교차검수 팩 A·B·C — EN 동형 14건 EN 5편».**
EN `updated`가 전부 **2026-09-09**로 올라갔다. 아래 EN 문장은 **축어**다(B는 EN 파일을 열지 마라).

### A-1 `apt-incheon-2026-guide` (masterUpdated 2026-08-28 → **2026-09-09**)

**A-1-1 · L154 note** — 현행 「上表 52+22=74 個席次是**已經送完的累計數字**。」
EN 축어(신): "The 52 + 22 = 74 seats above are the **guaranteed totals for those routes**."
→ 「上表 52+22=74 個席次是**這兩條路線各自的保證席次總數**。」 («이미 발급 완료»가 아니라 «보장 席次»다)

**A-1-2 · L266 표 행** — 현행 `| 機場巴士 6015 | 江南 / 良才 | ~70 分鐘 | ~₩17,000（~$13） |`
EN 축어(신): "Airport Bus 6015 | **Myeongdong / Chungjeongno / Gongdeok / Mapo** | **varies with traffic**"
→ `| 機場巴士 6015 | 明洞／忠正路／孔德／麻浦 | 依路況而定 | ~₩17,000（~$13） |`

**A-1-3 · L271** — 현행 「…43 分鐘，₩11,000——再轉 **2 號或 4 號線**）…機場巴士也有直達**明洞與江南**的路線。」
EN 축어(신): "transfer to **Line 1 or 4**; for Line 2, take the All-Stop to Hongik University instead … Airport buses run direct to **Myeongdong**"
→ 「…再轉 **1 號或 4 號線**；要轉 2 號線的話，改搭各站停到弘益大學站更省事）…機場巴士也有直達**明洞**的路線。」
🔴 **江南 삭제**. 6015가 江南에 안 간다는 것이 A-1-2의 정정 내용이다 — **두 자리가 한 명제다.**

**A-1-4 · L419 FAQ** — 실측 결과 이 FAQ에는 «2 號線» 서술이 **없다**. **고칠 것 없음. 손대지 마라.**

🔴 **자리 세기 실측**: `grep -n 74 apt-incheon-2026-guide.ts` = **L154 한 줄뿐**(EN Quick answer의 74 문장은 zh-hant가 이미 다르게 재저작했다). **EN에 2자리라고 zh-hant도 2자리인 것이 아니다.**

### A-2 `ept-barcelona-2026-guide` (2026-09-02 → **2026-09-09**)

**A-2-1 🔴 · L67 note** — 현행 「**關於來源。** 截至 2026 年 8 月 31 日，PokerStars 尚未在官方賽事頁面公布最終結果（賽程表仍顯示所有賽事未進行）。以上數字來自現場即時報導…」 → **폐기.**
EN 축어(신): "The winner, first prize and entry count above were cross-checked against PokerStars official full-results page on September 9, 2026 and match (see Sources at the end)."
→ 「**關於來源。** 上面的冠軍、冠軍獎金與參賽人次，已於 2026 年 9 月 9 日與 PokerStars 官方完整賽果頁核對一致（見文末來源）。」

**A-2-2 🔴 · L255~256 본문** — 현행 「只要你在巴塞隆納賭場用 **現金** 支付任何一場錦標賽，==r:西班牙法規就要求你申報那筆錢的來源==。」
EN 축어(신): "If you pay for a tournament with **cash** at Casino Barcelona, ==r:you **can be required** to declare the source of that money== — the EPT event page says "any cash transaction", while the casino's own declaration form applies to cash transactions of **10.000 (€10,000) or more**."
→ 「只要你在巴塞隆納賭場用 **現金** 支付錦標賽，==r:就可能被要求申報那筆錢的來源==——EPT 賽事頁寫的是「任何一筆現金交易」，而賭場自己的申報表格適用於 **10.000（€10,000）以上**的現金交易。」

**A-2-3 · L348 직답 + L358 표 행** — 현행 둘 다 「L9 Sud → 轉 L4」
EN 축어(신): "L9 Sud → **change lines in the city to reach L4** → Ciutadella/Vila Olímpica (10-min walk to casino; **check the transfer station on TMB's route planner**)"
→ 표 행: 「L9 Sud → 進市區後再轉 L4 → Ciutadella/Vila Olímpica（步行 10 分鐘到賭場；轉乘站請用 TMB 路線規劃查）」
🔴 **L348 직답의 「地鐵 L9 Sud 轉 L4 最便宜卻要將近一小時」도 같은 명제다 — 두 자리 다 고쳐라.**

**A-2-4 · L399 표 행** — 현행 「晚間 | Day 1 收工——**通常打 8 個級別**，確切時間依結構表而定」
EN 축어(신): "the **number of levels** and the exact time depend on the structure"
→ 「晚間 | Day 1 收工——打幾個級別、幾點收工都依結構表而定」

**A-2-5 🔴 · L459~461 FAQ** — 현행 「A. **是的。**依西班牙賭場法規，任何一筆現金交易都要求你申報資金來源——**並沒有一個「低於這個金額就免申報」的門檻**。…」 → A-2-2과 **정면 모순**(같은 글 안).
→ 「A. 用現金付就先當作要填。EPT 賽事頁寫的是「任何一筆現金交易」都需申報資金來源，而賭場的申報表格適用於 10.000（€10,000）以上的現金交易，所以門檻與所需文件請事先向賭場確認。你可以事先透過 PokerStars Live 帳號線上填好——==g:大約 10 分鐘==。用信用卡或預購 token 付款則不一定需要。」

**A-2-6 · L477 來源 마지막 줄** — 현행 「- ⚠️ 撰稿時 PokerStars **尚未** 公布官方結果，官方數字出來後會再核對。」 → **교체**:
「- **官方賽果** — [PokerStars · EPT Barcelona 2026 完整賽果](https://www.pokerstars.com/poker/learn/news/ept-barcelona-2026-full-results/)（2026 年 9 月 9 日查閱——冠軍、獎金與參賽人次已核對）」

### A-3 `holdem-bubble` (2026-08-26 → **2026-09-09**)

**A-3-1 🔴 D유형 · L165** — 현행 「**拖延：** 每個決定都用滿整個時間銀行，好少看幾手牌（然後蓋進錢圈）。它之所以有用，正是因為長考在時鐘上完全免費——這一手照樣只扣 2 分鐘…」
🔴 **EN이 명제를 뒤집었다.** EN 축어(신): "taking the full time bank on every decision **in the hope of** seeing fewer hands before the money. **During hand-for-hand that hope is misplaced: it does not reduce the number of hands your table has to play** — every table runs the same number of hands and each hand takes 2 minutes off the clock (WSOP Rule 126.a, 126.c) whether you snap-fold or burn the whole time bank. Big stacks have no reason to stall — they want more hands to attack. Short and medium stacks **still stall out of habit**, ==but excessive stalling can earn a clock call or a penalty== — tank within reason."
→ 「**拖延：** 每個決定都用滿整個時間銀行，指望在進錢圈前少看幾手牌。**但在手手制裡這個指望是錯的：它不會讓你這桌少打幾手**——每一桌打的手數一樣，而且不管你秒蓋還是把時間銀行燒光，每手都固定從時鐘扣掉 2 分鐘（WSOP 規則 126.a、126.c）。大碼沒有理由拖延——他們要的是更多手來施壓。短碼和中碼**還是會習慣性地拖**，==但過度拖延可能被叫時鐘或吃罰則==——長考要有分寸，別刻意燒時間銀行。」

**A-3-2 · L178** — 「線上把時鐘用滿**不花錢**」 → EN "Online, using your full clock **carries no penalty**" → 「線上把時鐘用滿**不會被罰**」

### A-4 `holdem-icm` (2026-08-28 → **2026-09-09**)

**A-4-1 · L56** — 「**因為獎金「頭重腳輕」，而且下面的獎金已經被鎖住了。**」
EN 축어(신): "Because prize money is **spread across several places** and locked in below you — **doubling your chips does not double your prize equity**."
→ 「**因為獎金分散在好幾個名次上、而且你下面的名次已經鎖住了——籌碼翻倍，獎金權益不會跟著翻倍。**」

**A-4-2 🔴 · L114** — 현행 「…因為爆掉會賠上鎖定的獎金，那是你拿不回來的…」
EN 축어(신): "busting costs you **your equity in every prize above the one you have already locked in (the guaranteed minimum itself stays yours)**"
→ 「…因為爆掉賠掉的是**你在「已經鎖住的那個名次之上」每一個名次的權益（保底那一份本身還是你的）**…」
🔴 **의미가 바뀐다**: 기존 서술은 «보장액까지 잃는다»로 읽혀 거짓이다.

**A-4-3 · L133 이미지 `title` 속성** — 「爆掉會賠上籌碼買不回來的鎖定獎金」류 → 「ICM 壓力：中碼蓋牌，因為爆掉會賠掉「已鎖住的名次之上」那部分獎金權益」.
🪶 **alt는 손대지 마라**(EN도 alt는 안 바꿨다).

**A-4-4 · L227 FAQ(ICM vs 籌碼EV)** — 「…爆掉會賠上鎖定的獎金權益」 → A-4-2과 같은 문안으로.

**A-4-5 · L237~239 FAQ 「我什麼時候該無視 ICM？」** — EN 축어(신): "**You never switch it off entirely**, but its effect is small enough to use chip EV as an approximation in the early and middle stages and in deep-stacked play with small blinds — spots where pay jumps are far away. In heads-up for the title only two prizes remain, so the gap between first and second can be judged on chip EV. **Even then, check the payout structure and stack distribution.**"
→ 「A. **它從來不會完全關掉**，只是在錦標賽早期與中期、以及盲注還小的深籌碼局，影響小到可以用籌碼EV 當近似——那些都是獎金躍升還很遠的階段。單挑爭冠時只剩兩個名次，第一與第二的差距可以用籌碼EV 判斷。**即使如此，還是要看一眼賠付結構和籌碼分布。**」

**A-4-6 · L243 FAQ(最常見的 ICM 錯誤)** — 「…爆掉會賠上鎖定的錢」 → 「…爆掉賠掉的是「已鎖住的名次之上」那部分權益」

### A-5 `holdem-tournament` (2026-08-26 → **2026-09-09**)

**A-5-1 · L67** — 「…底注時程、**賠付**。」 → EN "ante schedule, and **the payout schedule**" → 「…底注時程、**賠付時程**。」

**A-5-2 · L296 용어표 행** — 「**結構表（Structure sheet）** | 列出盲注級別、底注與**賠付**的官方文件」 → 「…與**賠付時程**的官方文件」

**A-5-3 🔴 D유형 · L171** — 현행 「==g:衛星賽策略和一般錦標賽不同——一旦你的籌碼足以保證拿到席位，就停止冒險。連好牌都蓋掉，避免在泡泡時間出局。==」
EN 축어(신): "**in a satellite that awards several identical seats**, once you have enough chips to guarantee a seat, stop taking risks — fold even good hands to avoid busting on the bubble. **A winner-take-all satellite that awards a single seat is the exception: it is played for first place on chip EV.**"
→ 「==g:衛星賽策略和一般錦標賽不同——在**發出多個同樣席位**的衛星賽裡，一旦你的籌碼足以保證拿到席位，就停止冒險，連好牌都蓋掉，避免在泡泡時間出局。**只發一個席位的贏家全拿衛星賽是例外：那種要按籌碼EV 去搶第一。**==」

**A-5-4 · L280** — 현행 「**賠付結構一定在開賽前公布。**報名時跟櫃台要**結構表**——上面列出盲注級別、底注、起始籌碼與賠付時程。」
EN 축어(신): "The payout schedule **can be checked** before the tournament starts, **but the final number of places paid and the exact amounts are often confirmed only after registration, rebuys and add-ons close.**"
→ 「賠付時程開賽前就查得到，**但最終有幾個名次有錢、各拿多少，往往要等報名、重買與加購全部關閉後才定案。**報名時跟櫃台要**結構表**——上面列出盲注級別、底注、起始籌碼與賠付時程。」

**A-5-5 · L374~376 FAQ 「可以中途離場、把籌碼帶走嗎？」** — 끝문장 「你只有在打進錢圈（ITM）名次時才拿得到錢。」
EN 축어(신): "**Regular prize money** is paid only if you finish in a paid (ITM) position; **in knockout and PKO formats you can also collect bounties separately.**"
→ 「一般獎金只有在你打進錢圈（ITM）名次時才拿得到；**賞金賽與 PKO 賽制裡，賞金是另外結算的。**」

🔴 **`masterUpdated` 5편 전부 `2026-09-09`로.** 편마다 Edit — **일괄치환 금지**(프로토콜 §5-⑦).

---

## §2. 팩 B — 직답 형태 소급 **12편 · 110자리** 🔴 **이 회차의 본체**

### 왜 하는가 (근거 · 재론 금지)

프로토콜 **§7-C 헤드 판정(2026-09-07)** 축어:
> **각 H2 직후 «快速解答» 블록**이 정본이다(§0-②·§14-A). «상단 1개 + 핵심 H2 3~4자리»는 **미달**이다 — 명사형 H2를 유지하는 것과 H2마다 직답을 두는 것은 충돌하지 않는다. 회차 2부터 적용하고, **회차 1의 6편은 트랙 종결 회차(7)에서 소급**한다.

🔴 **A 구간 실측이 판정을 넓혔다: 회차 2의 6편도 적용하지 않았다.**
회차 2 마감(2026-09-07)과 헤드 판정(2026-09-07)이 같은 날이라 판정이 회차 2에 닿지 못했다. 회차 3~6은 전부 적용돼 있다(직답 54·78·96·42 = 270블록). **그래서 소급 대상은 6편이 아니라 12편이다.**

### 규격 (프로토콜 §4 · ja 회차 6 승격분 포함)

1. 라벨 = **`> **快速解答**`** 하나. 다른 라벨 금지.
2. 위치 = `## H2` **바로 다음**(빈 줄 하나 두고). 이미지·표보다 **위**다.
3. 길이 = **중문 60~110자**. 신설 블록은 **110자를 넘기지 마라**(기존 초과분 예외는 §4 — 신설에는 그 예외가 없다).
4. 🔴 **직답 단락 안 중첩 볼드 금지**(§7-C: 볼드 정규식이 non-greedy라 `**A**B**C**`가 뒤집힌다). 강조는 「」 또는 `==…==`.
5. 🔴 **«옮기기» = «지우되, 남은 문단이 자기완결하도록 다시 쓴다»**(ja 회차 6 승격).
   굵은 리드를 블록으로 올렸으면 본문에서 **지운다**. 그런데 지우기만 하면 **헤드리스 단락**이 난다 —
   주어·선행사가 사라지거나(「它也叫「旁牌」」의 «它»), 본문이 블록을 역참조한다.
   **지우기가 절반, 남은 첫 문단 재작성이 나머지 절반이다.** «본문 첫 문장은 남겨 둔다»는 선복사라 금지.
6. 🔴 **직답은 리드 문장의 복사가 아니다.** 블록과 본문 첫 문단이 **같은 명제를 두 번** 말하면
   2차 교열이 «cov 겹침»으로 잡는다(회차 6 실측 상위 5건 재작성). 블록은 «질문에 대한 답», 본문은 «전개».
7. 🔴 **§13 불변**: 카드·숫자·확률·룰 번호는 그 절 본문에서 **축어로** 가져온다. 새 수치를 만들지 마라.
8. 대상에서 **뺀다**: 常見問題 FAQ · 相關文章 · 記住這3件事 / 要記住的 3 件事 / 重點整理 / 重點總結 / 總結 / 結語 / 資料來源 류.

### 편별 자리

| 편 | 대상 H2 | 🔴전환(굵은 리드 有) | ○신설(리드 無) |
|---|---:|---:|---:|
| `texas-holdem-rules-for-beginners` | 14 | 3 | 11 |
| `holdem-game-order` | 15 | 3 | 12 |
| `holdem-betting-actions` | 10 | 3 | 7 |
| `holdem-blind-meaning` | 9 | 6 | 3 |
| `holdem-all-in-rules` | 6 | 3 | 3 |
| `holdem-showdown-rules` | 8 | 3 | 5 |
| `holdem-hand-rankings` | 8 | 3 | 5 |
| `holdem-flush-vs-straight` | 7 | 3 | 4 |
| `holdem-kicker` | 7 | 4 | 3 |
| `holdem-tiebreak-rules` | 8 | 7 | 1 |
| `holdem-split-pot-rules` | 7 | 4 | 3 |
| `holdem-reading-the-board` | 11 | 3 | 8 |
| **합계** | **110** | **47** | **63** |

🪶 자리 목록은 편을 열면 바로 보인다 — `## `로 시작하는 줄 중 위 «뺀다» 목록에 안 걸리는 전부다.
**세어서 맞춰라**: 편집 후 그 파일의 `快速解答` 개수 = 위 «대상 H2» **+ 1**(상단 블록)이어야 한다.

### 🔴 세션이 모자라면

**순서 = 회차 1의 6편 먼저**(§7-C가 명시적으로 지시한 것) → 그다음 회차 2의 6편.
회차 2분을 못 끝내면 **끝낸 편 단위로 커밋**하고 남은 편을 진행 파일 «미결»에 **편 이름으로** 적는다.
🔴 **한 편을 반쯤 하고 넘기지 마라** — 같은 글 안에서 H2마다 형식이 갈리는 것이 제일 나쁘다.

---

## §3. 팩 C — 표기 잔재 소급 (클러스터 밖 · 회차 6 렌즈가 찾았으나 대상 밖이었다)

🔴 **회차 6 교훈 이행**: 치환 전에 «그 대체어가 그 글의 다른 자리에서 이미 쓰이는지» grep했다(«그 글 내 대체어» 열). 치환 **후에도 자기 산출물을 다시 grep**해라.

| # | 편 | 현행 → 정본 | 자리 | 그 글 내 대체어 | 근거 |
|---|---|---|---:|---:|---|
| C-1 | `holdem-split-pot-rules` | `牌房` → **`撲克室`** | L123 · L180 (3) | 0 | 코퍼스 97:3 · 회차 6 §2 해소분의 잔재 |
| C-2 | `holdem-positions` | `牌室` → **`撲克室`** | L100 · L215 · L252 (3) | 0 | 위와 같음 |
| C-3 | `holdem-tournament-vs-cash-game` | `面值` → **`面額`** | L431 (1) | 2 | 🔴 **한 문장 안에서 갈렸다**: 「3-4 種**面額**、多數籌碼放在最小**面值**」 |
| C-4 | `holdem-bubble` | `彩池` → **`底池`** | L62·133·135(×2)·137·151·229 (11) | 2 | 코퍼스 1,180:11 · 뱅크 `zh-hant-gto-series.md` L111(底池 727 : 彩池 23) |
| C-5 | `holdem-starting-hands-chart` | `緊凶` → **`緊兇`** | L243 (1) | 0 | 코퍼스 24:1 · 회차 6 「凶→兇」 치환의 잔재 |
| C-6 | `holdem-3bet` | `岩石` → **`石頭`** | L211 · L237 · L246(×2) (5) | 0 | 🔴 정본 = `holdem-glossary` L187 「**石頭（Nit）**」 · 코퍼스 20:6 |
| C-7 | `holdem-implied-odds` | `岩石（Nit）` → **`石頭（Nit）`** | L179 (1) | 0 | 위와 같음 |
| C-8 | `holdem-drawing-odds` | `冷牌局` → **`冷牌組`** | 2자리(「AA 對 AA 冷牌局」 · 「最極致的冷牌局」) | 0 | 회차 6 §3 확정 「冷牌組 = Cooler」 · 코퍼스 108:3 |
| C-9 | `korea-poker-marathon-2026` | `桑拿` → **`三溫暖`** | L279 · L527 (3) | 0 | §5-E6 |

🔴 **C-8은 치환만 하면 「AA 對 AA 冷牌組」이 어색하다** — 「AA 對 AA 這種冷牌組」·「這是最極致的冷牌組」처럼 문장을 다듬어라.
🔴 **C-4는 11자리다. `彩池`가 0이 될 때까지 grep해라** — 회차 6이 같은 치환에서 `彩金` 5곳을 남겼고 하필 tldr·FAQ였다.

---

## §4. 팩 D — 직답 길이·겹침 판정

### D-1 🔴 **120자 초과 42건 — «기계적 축약 금지»로 종결한다** (판정 · 재론 전 근거부터)

① 회차 4·5가 **두 번 독립적으로** 같은 판정을 냈고 근거가 실증됐다 — 축약 재작성이 회차 3·4에서 **정확도를 다시 흔들었다**(중문 본문에 영어 continue 유입 등 주입률 11%).
② 초과분 대부분은 **1차 렌즈 반영으로 길어진 것**(헤지 문구·수치 명시). 되돌리면 렌즈 성과를 지우는 것이다.
③ 프로토콜 §4의 60~110자는 **권장 범위**이고 게이트가 아니다 — `CLAUDE.md` §9-2-A의 «경직된 상한 금지»와 같은 결.

### D-2 🟠 **예외 = 140자 초과 5건만** — «한 블록에 명제가 둘» 유형이라 뒤 명제를 본문으로 내린다

| 편 | 자리 | 자수 |
|---|---|---:|
| `ept-barcelona-2026-guide` | L183 | 161 |
| `wpt-australia-2026-guide` | L157 | 157 |
| `wpt-australia-2026-guide` | L184 | 154 |
| `holdem-3bet` | L221 | 142 |
| `holdem-strategy` | L154 | 140 |

🔴 **내리는 것이지 지우는 것이 아니다.** 수치·헤지 문구는 **한 글자도 잃지 마라** — 그것이 렌즈 반영분이다.
🔴 GTO 13편(259자·258자 등)은 **대상 밖이다. 열지 마라.**

### D-3 🟠 겹침(cov) 정리 — 회차 6 2차 교열이 남긴 3자리

| 편 | 자리 | 실측 | 처방 |
|---|---|---|---|
| `holdem-implied-odds` | 직답 **8개 전부**(L68↔L80 등) | 2차 교열 cov **25%** — 겹침 정리를 통째로 안 받았다(회차 3 소관인데 회차 6은 爆冷→爆冷門 1줄만 고쳤다) | 8블록 각각 «블록 명제»와 «직후 문단 명제»를 대조해, **같은 명제면 문단 쪽을 전개로 다시 쓴다**(블록을 줄이지 마라 — 블록이 인용되는 자리다) |
| `holdem-bad-beat` | 「經典爆冷門牌例」 블록(run 5) | 아래 이탤릭 주석과 같은 명제 | 🪶 회차 6이 «예고» 역할이라 유지 판정했다 → **재판정 결과 유지. 손대지 마라**(근거를 여기 남긴다) |
| `holdem-fish` | 「怎麼辨識魚」 이후 자리 | 겹침 잔존 | 문단 쪽을 전개로 재작성 |

---

## §5. 팩 E — 미판정 종결 (A 구간 실측 완료 · B는 그대로 실행만)

### E-1 🔴 `德州撲克大小順序`(390) 완전형 편입 — **판정 완료**

**DFS 실측 2026-09-09**(`keywords_data/google_ads/search_volume`, `location_code:2158`, `language_code` 없음):
`德州撲克大小順序` = **390** / `德州撲克牌型大小順序` = **null** / `德州撲克牌型` = 880 / `德州撲克大小` = 2,900.
🔴 **현행 H2가 쓰는 문자열이 볼륨 null 변형이다.**

→ `holdem-hand-rankings` **L31** H2 = `## 德州撲克牌型大小順序一次看（10種牌型由大到小）`
→ **`## 德州撲克大小順序一次看（10 種牌型由大到小）`** (「牌型」 두 글자만 뺀다)
한 H2가 `德州撲克大小順序`(390)과 `德州撲克大小`(2,900)를 **동시에** 완전형으로 문다.
🪶 `德州撲克牌型`(880)은 title·L77 H2·태그에 그대로 남는다(실측 확인). **title·desc·태그는 손대지 마라.**

### E-2 🔴 `holdem-hand-rankings` EN H2 2개 결손 — **«편차 등재»로 종결. H2를 신설하지 않는다**

근거 셋:
① §8-A 판정 축어 — «내가 이번에 손댄 문장이면 고치고, **원래부터 그런 구조면 등재한다**».
② DFS 실측 = `德州撲克牌型記憶`·`德州撲克牌型口訣`·`撲克牌型記憶`·`德州撲克記憶` **전부 볼륨 null**(대만 검색 수요 0).
③ EN H2 ②(「Are Poker Hand Rankings the Same in Every Game?」)의 내용은 **이미 흡수돼 있다** — 短牌 L263 · 奧馬哈 「必須剛好用兩張」 FAQ L331(실측).

🔴 **단 «90%» 수치는 결손이다**(§4-B 거울쌍 3자 대조: EN·zh·es·pt·de·id 보유 · zh-hant만 없음).
EN 축어 = "The confusing pairs in step 2 cause **90% of beginner mistakes**".
→ **L239 「大家最愛吵的牌型大小比較」 절 안에 한 문장** 흡수:
「這幾組（同花對順子、葫蘆對同花）就是新手誤判的大宗——==新手的牌型錯誤有九成出在這幾組上==，所以要練就練它們。」
**새 H2·새 표를 만들지 마라.**

### E-3 🔴 `holdem-starting-hands-chart` L111 — **거짓 서술 정정**

현행: 「來看完整的彩色網格——**全部 169 種手牌按位置排布**：」
**소스 실측**: `lib/range-chart.ts`의 `RANGE_CHART_SEATS` = **UTG 13 / MP 17 / CO 27 / BTN 43 네 행 막대차트**이고 **SB·BB 행조차 없다.** 169칸 그리드는 `/hand-chart` 도구에만 있다.
→ 「來看各位置的開牌範圍比例——**UTG、MP、CO、BTN 四個位置各要打多少比例的起手牌**：」
🔴 **본문을 고치는 것이다. `lib/range-chart.ts`를 고치는 게 아니다**(레인 소관 밖).

### E-4 🔴 `apt-incheon` 「1,393 人」 → 「1,393 **人次**」 — **4자리 전부**

**EN 축어 = "a record 1,393-entry field"**. 게다가 **같은 글이 2025년을 「1,281 人次 ≠ 754 人」으로 가르친다** — 한 글 안의 정면 모순.
자리 = `desc`(L7) · `tldr`(L8) · `:::note`(L35) · 직답(L63).
🔴 **desc는 고친 뒤 160자 상한을 다시 재라.**

### E-5 🟠 환율 계열 갈림 — **고치지 않는다. «EN-먼저»로 등재**

`korea-poker-marathon`의 「KRW 270 萬 ≈ $1,800」(= 1,500)이 같은 글 표(~1,350)와 갈리지만,
**EN 동형이다** — `posts-en/korea-poker-marathon-2026.ts:209` 축어 "Main Event: **KRW 2.7M** buy-in ≈ **$1,800**".
`apt-incheon`의 買入 1,468 계열도 EN 유래. 프로토콜 §5-④대로 **EN-먼저 등재**(§5 헤드 요청).

### E-6 🔴 `桑拿` → `三溫暖` — **판정 뒤집음**

**DFS 대만 실측(2026-09-09)**: `三溫暖` **22,200** vs `桑拿` **5,400**(4배).
회차 5가 «코퍼스 桑拿 3 : 三溫暖 0»으로 유지했으나 **그 3건이 전부 이 한 파일**이라 «코퍼스 어휘가 정본»(§1-E)이 성립하지 않는다 — 코퍼스 정본이 아니라 **한 편의 선택**이었다. → 팩 C-9 실행.

### E-7 🔴 `梭哈` = 서구 어느 게임인가 — **«재기재하지 않음»으로 종결**

1차 출처를 찾지 못했다. 회차 2가 지운 것이 맞다(틀릴 수 있는 주장을 제거한 것이지 새 주장을 만들지 않았다). **처방 없음.**

### E-8 🔴 `rake` 「5% 不封頂」 報導者 취재 축어 — **붙이지 않는다**

① 현행 헤지(「玩家之間口耳相傳·非本站背書」)가 이미 정확성 요건을 채운다.
② 私場(지하장) 수치를 축어로 인용하면 그 자리가 «영업 안내»로 읽힌다 — «합법성 축을 열지 않는다»(전환 근거)와 충돌. E-E-A-T 이득보다 전환 손실이 크다. **처방 없음.**

### E-9 ✅ `大盲前注` FAQ 질문문(회차 5 이월) — **이미 흡수돼 있다**

`holdem-tournament` FAQ **L386** 「**Q. 大盲前注和大盲底注是同一回事嗎？**」(실측). **해소. 처방 없음.**

### E-10 🔴 `花色大小` 축이 세 글에 걸쳐 있다(회차 2 이월 ②) — **인라인 링크 1개**

실측: `holdem-hand-rankings`가 `holdem-tiebreak-rules`를 **한 번도 링크하지 않는다**(`grep -c` = **0**).
→ **L73 ★콜아웃**:
「> ★很多新手會搜「花色大小」，其實答案就是：花色不分大小。真正決定勝負的是點數與[踢腳牌與平手比法](/zh-hant/blog/holdem-tiebreak-rules "thumb:/images/holdem-tiebreak-hero.webp")。」
**인라인 링크 1개만. 새 문장·새 절 금지.**

### E-11 ✅ 🟠 C2 2쌍 — **둘 다 게이트 오탐. 판정 완료**

`flush-vs-straight`↔`game-order`(회차 1 판정) · `continuation-bet`↔`when-to-fold`(회차 4 판정). 게이트 수정은 헤드 요청(§5).

---

## §6. 이 회차에서 **하지 말 것**

- 🔴 **`lib/posts-zh-hant/` 밖**(다른 로케일 · `public/images/` · `scripts/` · `lib/render-markdown.ts` · `lib/range-chart.ts`).
  **E-3은 «소스가 정본»이라는 실측을 근거로 «본문»을 고치는 것이다 — 소스를 고치는 게 아니다.**
- 🔴 GTO 13편 · `wsop-2026-tournament-guide` · `taiwan-poker-clubs-guide` — **대상 밖**(프로토콜 §7-A).
- 🔴 **H2를 질문형으로 바꾸기**(§7-C 명사형 정본). E-1은 명사형 안에서 글자 2개를 빼는 것이다.
- 🔴 진행 파일 §3 «되돌리지 마라» 전건 — 특히 **爆冷門** · **按時計費** · **超級盲注/抓位 금지** ·
  **冷牌組/冷牌** · **分段下注** · 四條 노트 · cooler 6행 · **`wpt-australia` 簽證 표 ETA 행의 台灣·馬來西亞·汶萊**(헤드 `b54ef945`).
- 🔴 백틱 · slug · 이미지 경로 · readnext 대상 변경 · 새 출처 창작 · 「完整整理／總整理」류 제목.

---

## §7. B 구간 자기점검 (편집 끝나고 C로 넘기기 전)

```
npm run audit:hard -- --locale=zh-hant       # 🔴 0
grep -o 彩池 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-4)
grep -o 岩石 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-6·C-7)
grep -o 牌房 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-1)
grep -o 牌室 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-2)
grep -o 面值 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-3)
grep -o 緊凶 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-5)
grep -o 冷牌局 lib/posts-zh-hant/*.ts | wc -l  # 0   (C-8)
grep -o 桑拿 lib/posts-zh-hant/*.ts | wc -l    # 0   (C-9)
grep -o 快速解答 lib/posts-zh-hant/*.ts | wc -l # 296 → 406 (팩 B 전건 완료 시)
```

🔴 **회차 6 최대 교훈 — «치환 후 자기 산출물을 다시 grep»**: 내가 새로 쓴 직답 110개가 방금 없앤 표기
(`彩池`·`岩石`·`凶`·`牌房`·`牌室`)를 **되살리는 유형은 게이트가 원리상 못 본다.** 위 grep을 **맨 마지막에** 한 번 더 돌려라.
