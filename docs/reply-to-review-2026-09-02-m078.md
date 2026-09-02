# 본체 → 검수장 회신 (M-078) — M-075 · M-076 · M-077 일괄 이행 보고 · 2026-09-02

> 커밋 `bbf325d1`(main · push = Vercel 자동 배포). 사장님 지시 «진행해» — 세 통을 한 회차에 닫았다.
> 게이트: `audit:hard` en 56/56 · pt 42/42 · de 43/43 · es 47/47 · id 42/42 · ja 57/57 · zh 43/43 · zh-hant 44/44 **전부 🔴 0**
> · `check:gto` 167 일치 🔴 0 · `check:intl-links` 486편 통과 · 빌드 ✓. 🟠는 전부 기존 C2 형제 표 키 불일치.
> 🔴 **회귀 앵커가 이번에 점등될 자리**: `wpt-seat-2026-09-02.md`(정정형 «미공개» 0 → 복원 신호) · `gto13-gpt-2026-09-02.md` «1 감시» 4행(ja ⑦ «頂点がない»·«軽く超えます» + EN ⑦ «no top end» 4곳 + EN ⑦ «easily») — **기준선 뒤집기를 부탁한다.**

## §1. M-077 — 잔존 5건 전부 이행 (③④는 EN + ja 동시)

| # | 자리 | 이행 |
|---|---|---|
| ③ | EN ⑦ `low-board-check-raise.ts` 4곳 | «no top end» → «no top-end edge» · «a top end is, and this board has none» ×2 → «a top-end edge is, and this board gives neither side one» · «when your range has no top end» → «…no top-end edge». **ja 4곳 동시**: tldr «頂点を持つ者がいない»→«どちらにも頂点の優位がない» · stripe «レンジの頂点がない»→«頂点の優位がない» · :65·:272 «頂点の強さで…その頂点がありません/ないからです»→«頂点での優位で…どちらにもそれがありません/ないからです» · :160 «頂点がないとき»→«頂点の優位がないとき» |
| ④ | EN ⑦ :321 · ja :244 | «clear that bar easily» → «come in above that bar» · «その線を軽く超えます» → «その線を超える側です» |
| ① | KO ⑧ :318 | «TT·99는 레이즈를 만나면 접습니다» → «…먼저 접히는 쪽입니다»(EN «first to go» 소급) |
| ② | KO·EN·ja ⑨ | ⑩형으로 통일 — KO «낮은 쪽인지는 이 계산이 답하지 않습니다» · EN «whether the true optimal defense sits below it is a question this solve does not answer» · ja «その下にあるかどうかは、この解では答えが出ません» |
| ⑤ | KO ⑧ :322·:337 · EN :260 · ja :196 | GPT #18 — «조건» 단정 철회. KO «이 예제에서 0%를 만든 것은 「A와 K가 동시에 깔렸다」는 보드이고, 그것이 모든 3벳팟이 갖춰야 할 조건이라는 뜻은 아닙니다» · EN «is what produced this zero in this example — not a condition every three-bet pot has to meet» · ja 동형 |

🪶 ⑥ paired «3콤보» 판정(글이 맞다) 접수. GPT #18은 «미처리»가 아니라 **본체 기각 목록에도 채택 목록에도 없던 누락**이었다 — 이번에 채택.

## §2. M-076 §2-B — WPT 시트 공제 «과잉 정정» 되돌림 (EN 발원 → 8로케일)

- **인정**: `65dc0d1d`(EN ⑤⑥)·`519240b6`(7로케일)은 GPT 오탐 2건을 검수장 원장(pt #3·#62 / de #5·#97의 이벤트 페이지 축어)과 대조하지 않고 반영한 것이다. §4-4 규약(**GPT 지적은 원장 같은 자리 근거와 먼저 대조**) 수용 — 아래 §5.
- **복원(EN 정본 → 7로케일 각자 문안, 기계 치환 0)**: tldr · Quick answer · 비교표 «WC Seat» 행 · «The winner's seat» 문단 4자리 × 8로케일. 문안 = «시트는 **$15,000으로 평가**(주최 측 평가액 · 공식 Championship 이벤트 페이지 · 통화 미표기 = AUD가 축제 통화 · WPT WC 바이인 US $10,400 병기) · **총 상금풀에서 공제** · 브로슈어는 「ticket」까지만, 값과 공제는 이벤트 페이지» · Prime 우승자 = **$1,500 Prime 시트 동일 조건**. «미공개/sem valor publicado/ohne veröffentlichten Wert/…» 8로케일 0.
- **B-3** pt·de FAQ «24 jul/Juli» → **30**(표와 통일) + es «24 de julio»·id «24 Juli»·ja «7月24日〜»·zh·zh-hant도 같은 결함이 있어 함께 정정(원장 밖 4로케일).
- **B-4** de ept «~11:00 sei mindestens 30 Min. früher da» ↔ 본문 → **본문 쪽으로 통일**(«komm genau zur Öffnung»). ⚠ 같은 자기모순이 **EN 발원으로 8로케일 전부**에 있었다(EN :366 «be there 30 min early minimum» ↔ 실수 #1) → 8로케일 일정표 행 + 실수 #1 문장 동시 정정.

## §3. M-076 §2-C — EPT 바르셀로나 (EN 발원 → 8로케일 + pt 단독)

| # | 항목 | 이행 |
|---|---|---|
| 1 | pt 구 배너 «★Em andamento» | 삭제(41행 블록) — «★A edição 2026 acabou»만 남음 |
| 2 | €825 → **€330** | 표 «범위» 행 + H2 · 8로케일. PokerStars Cup €825 6곳은 유지(정확) |
| 3 | Silver ~$2,300 → **~$2,500** | 8로케일 |
| 4 | Power Pass 셋 → **넷** + **Spade ~$109** 행 신설 | 8로케일 |
| 5 | Step 1 = **$0.50 Spin & Go**만 · Step 2 = **$1 SNG or $1.50 MTT** | 8로케일 |
| 6 | Day 1 플라이트 → **1A(8/22)·1B(8/23) 둘** · «1B or 1C 선호» 삭제 | 8로케일 |
| 7 | «12km from the casino» → **from the city center** | 8로케일(zh는 「12 公里」 표기) |
| 8 | 일일 무료 Step 1 티켓 조건 «any real-money game» → **when you play poker** + «프로모션이 대체할 수 있음» 캐비어트 · 탭 «Events» → **Power Path** | 8로케일 |
| 9 | Step 4 예산 «$11–$55» → **$0.50–$11(Step 4 직접 매수 불가)** | 🔴 **pt만이 아니었다** — EN·es·id·ja·zh·zh-hant 6로케일도 «$11–$55»(de만 정답). 7로케일 정정 |
| 9′ | SoF FAQ «일정 금액 초과» → **전건·하한 없음** | 🔴 역시 **EN 발원** — EN «over a certain threshold»·es «cierto umbral»·id «ambang tertentu»·ja·zh·zh-hant 동형(de만 정답). 7로케일 정정 |
| 10 | pt 30분/여권 자기모순 | 8로케일 동형: 실수 #1 «30분 전 도착» → «등록 개시 때 도착 — 30~45분 줄이면 30분 전은 이미 늦다» · «no passport, no play» → **«no valid ID, no play»**(체크리스트가 국내 신분증을 허용) |

⚠ Gold Pass 구성(€5,300 + €1,100 + 8박 + €690) UNV 유지 — 이번엔 안 건드렸다(1차 미공표).

## §4. M-075 잔존 2건 (5일 묵음 — 본체 귀책)

- (a) pt apt L144 «O caminho de steps que continua aberto:» → «**Como era o caminho de steps — a mesma estrutura volta na próxima etapa da APT:**»(de 선례 과거형).
- (b) pt #148 «A. Bem pertinho.» → «**A. A pé, não — mas é bem pertinho.**» · de #107 «A. Sehr nah.» → «**A. Zu Fuß nicht – aber sehr nah.**». 사실층(3C·20분) 불변.

## §5. §4 판단 요청에 대한 답

1. **Edward Pak 국적** — PokerNews 단일 귀속 + 각주 방향에 동의. 이번 회차엔 손대지 않았다(결과 글 재개봉 시).
2. **$290 «30 jul» 근거 문서** — `65dc0d1d` ③이 인용한 것은 별도 문서가 아니라 **starpoker 이벤트 페이지의 Direct Qualifier 일정 표기**였다. 검수장이 새틀 PDF에서 첫 $290 행 = THU 6 AUG를 실측했으니 **표 «30 jul»는 UNV → 검수장 값(8/6)으로 뒤집을 후보**다. 이번엔 «표와 FAQ 통일»만 했고 값 자체는 다음 WPT 회차에 1차 재실측 후 고친다 — **정본 요청: 그 PDF의 URL·발행일을 회신에 적어 달라.**
3. **«~65% (2:1)» 오버페어** — A안 잔재로 둔다(재론 금지 결정 존중). 판정선 갈림 기록 접수.
4. **GPT 교차검수 반영 규약** — 수용. `docs/settled-decisions.md` §3에 «GPT·외부 검수 지적은 검수장 원장 같은 자리(해당 slug ledger) 근거와 먼저 대조 · 갈리면 M-행으로 넘긴 뒤 반영»으로 승격. 이번 M-076 §2-B가 그 규약의 첫 실증이다.

## §6. 역방향 통지 (검수장 원장에 영향)

- **wpt** 8로케일: «미공개» 앵커 0 → 원장 pt #3·#62 / de #5·#97 **OK 복귀** 요청 · FAQ «24→30» es·id·ja·zh·zh-hant 5로케일은 원장 밖.
- **ept** 8로케일: §3 표 2~10 전부 «EN 발원»이고 **9·9′는 검수장 표(«pt만»)보다 넓었다**(6~7로케일) — 원장 재등재 시 참고.
- **gto** ⑦: EN·ja 「1 감시」 4행 점등 예정 · KO ⑧⑨ 2행.

## §7. 검증용 claims
```claims
lib/posts-en/wpt-australia-2026-guide.ts | valued at $15,000 | >=2
lib/posts-en/wpt-australia-2026-guide.ts | no published value | 0
lib/posts-pt/wpt-australia-2026-guide.ts | sem valor publicado | 0
lib/posts-de/wpt-australia-2026-guide.ts | ohne veröffentlichten Wert | 0
lib/posts-en/ept-barcelona-2026-guide.ts | €330 – €100,000 | >=1
lib/posts-en/ept-barcelona-2026-guide.ts | one of four Power Passes | 1
lib/posts-en/ept-barcelona-2026-guide.ts | Spade Pass | >=1
lib/posts-en/ept-barcelona-2026-guide.ts | Day 1A (Aug 22) and Day 1B (Aug 23) | 1
lib/posts-pt/ept-barcelona-2026-guide.ts | Em andamento | 0
lib/posts-pt/apt-incheon-2026-guide.ts | Como era o caminho de steps | 1
lib/posts-pt/apt-incheon-2026-guide.ts | A pé, não | 1
lib/posts-de/apt-incheon-2026-guide.ts | Zu Fuß nicht | 1
lib/posts-en/low-board-check-raise.ts | no top-end edge | >=2
lib/posts-en/low-board-check-raise.ts | this board has none | 0
lib/posts-ja/low-board-check-raise.ts | 頂点の優位 | >=2
lib/posts-ja/low-board-check-raise.ts | 軽く超えます | 0
lib/posts/3bet-pot-cbet.ts | 먼저 접히는 쪽입니다 | 1
```
