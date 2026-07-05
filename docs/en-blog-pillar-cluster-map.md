# EN 블로그 필라-클러스터 마스터 맵 (holdemmaster.com)

> **이 문서가 영어(en) 블로그의 콘텐츠 구조 단일 기준(마스터)이다.**
> 영어 완성 → 이 구조 그대로 12개 언어로 번역 확장. 슬러그는 전 언어 공유(hreflang)라 **여기서 확정한 slug는 사실상 12언어 골격을 확정하는 것** = 신중.
> 작성일 2026-07-03 · 글 발행할 때마다 갱신하는 살아있는 문서.
> 함께 보는 문서: `.cursor/rules/posting.mdc`(포스팅·콘텐츠·SEO 카피 단일 마스터).

---

## 0. 대전제 (설계 드라이버)

- **최종 목표 = 롱테일 키워드로 구글 1등.** 그게 전부. 메인 키워드로 대형 경쟁사(PokerNews·Upswing)와 정면승부 X.
- 커뮤니티 전환은 **설계 드라이버 아님** (회원 리텐션용 가두리, 수익화는 별도 홀덤 라이센스). → CTA 최적화로 구조를 비틀지 않는다.
- **저권위 사이트가 롱테일 1등하는 법 = 토픽 오소리티**: 좁은 주제를 경쟁사보다 완전하게 덮으면, 구글이 롱테일에서 대형 사이트의 얕은 페이지를 제친다. → **필라 개수보다 클러스터 밀도가 핵심. 한 필라를 다 채우기 전엔 다음 필라를 열지 않는다.**
- 실제 사이트 구조는 **플랫**: `/en/blog/[slug]` (필라가 URL에 안 들어감). 필라-클러스터는 **내부링크로만** 표현된다.

### 롱테일 3층 구조 (이 맵의 심장)
```
필라 페이지     → mid 키워드 · 목차 허브 · 링크주스 집중
  └ 클러스터 글  → 롱테일 1개를 깊게 (예: "does a flush beat a straight")
       └ FAQ 3~6개 → 더 긴 롱테일 + PAA → Featured Snippet/PAA 박스 직접 타깃
```
한 클러스터 글이 FAQ로 롱테일 5개를 추가 확보. `6필라 × 클러스터 8 × (본문1+FAQ5)` ≈ **롱테일 ~280개** 그물.

---

## 1. EN 6 필라 (확정)

KO 11필라를 복제하지 않고 EN 검색시장 기준으로 재편. `holdem-pub-guide`(홀덤펍)는 EN 대응어 없어 제외. 6필라 slug는 모두 KO 예약 필라 슬러그와 정합(미래 hreflang 안전).

| # | EN 필라 | 허브 slug | 검색의도 | 롱테일밀도 | 경쟁 | 상태 |
|---|---|---|---|---|---|---|
| 1 | How to Play (Rules) | `texas-holdem-rules-for-beginners` | 초보 정보 | 중 | 높음 | 두꺼움 ✅ |
| 2 | Hand Rankings | `holdem-hand-rankings` | 레퍼런스 | 높음 | 중 | 두꺼움 ✅ |
| 3 | Odds & Math | `holdem-probability` (신규 허브) | 계산 | **매우높음** | **낮음** | ❌ 비어있음 |
| 4 | Strategy & Play | `holdem-strategy` (신규 허브) | 스팟판단 | **무한** | 높음 | 껍데기 △ |
| 5 | Tournament | `holdem-tournament` | 정보+로컬 | 중 | 중 | 강함 ✅ |
| 6 | Glossary / Terms | `holdem-glossary` (신규 허브) | 즉답 정의 | **극단적** | **최저** | ❌ 없음 |

> 롱테일 1등이 **가장 빠른 곳** = 필라 6(Glossary) + 필라 3(Odds). 경쟁 최저·질문 의도 명확·Featured Snippet 먹기 쉬움. → **여기부터 판다.**

---

## 2. 필라별 클러스터 트리 (기존 20개 배치 + 신규 목표)

기호: ✅ 발행됨 · 🆕 신규 발행 필요 · ⚠️ 손질 필요

### 필라 1 — How to Play (Rules) · hub `texas-holdem-rules-for-beginners` ✅
- ✅ holdem-game-order (서브허브, 피링크 6)
- ✅ holdem-betting-actions
- ✅ holdem-blind-meaning
- ✅ holdem-all-in-rules
- ✅ holdem-showdown-rules
- 🆕 holdem-dealer-button (what is the dealer button / who is the dealer)
- 🆕 holdem-check-rules (what does check mean / when can you check)
- 🆕 holdem-limit-vs-no-limit (no-limit vs limit vs pot-limit)
> 이미 두꺼움. 신규는 최소, 기존 글 FAQ로 롱테일 흡수가 우선.

### 필라 2 — Hand Rankings · hub `holdem-hand-rankings` ✅ (GSC 최대기회)
> **Phase 0 완료(2026-07-03)**: 허브에 정확매칭 FAQ 10개 추가(정의형 flush5400/full house4400/straight2900 + what-beats 5개 + 룰 3pairs/wheel). ~17k 볼륨 흡수. 다음 심화 = kicker·what-beats-what 개별글.
- ✅ holdem-flush-vs-straight
- ✅ holdem-tiebreak-rules
- ✅ holdem-split-pot-rules (피링크 7)
- ✅ holdem-reading-the-board
- 🆕 holdem-kicker (what is a kicker / kicker rules — 대형 롱테일)
- 🆕 holdem-what-beats-what (poker hand cheat sheet / what beats a full house 류 FAQ 집약)
> GSC상 "홀덤 족보"류 노출 최다. 깊이·kicker 보강으로 순위만 올리면 큰 이득.

### 필라 3 — Odds & Math · hub `holdem-probability` ✅ ("Poker Odds & Probability Chart")
> **발행됨(2026-07-03)**: 종합 플래그십 허브. H2 8개(족보확률차트·스타팅핸드·플랍오즈통합표·드로우아웃츠·4-2룰·팟오즈·로열희귀도·롱샷)+FAQ8. 확률 35개 적대적 재검산 ALL CORRECT. hand-rankings·starting-hands-chart 역링크 有. 아래 클러스터는 이 허브에서 파생·심화 예정.
- ✅ holdem-pot-odds (플래그십: how to calculate pot odds) — 발행 2026-07-03. 벳사이즈 치트시트·3개념구분·4-2룰·실전핸드. 허브 양방향링크. §13 18개 검산
- ✅ holdem-outs (poker outs chart / how to count outs) — 발행 2026-07-03. 드로우별 아웃츠표·아웃츠→배당·콤보겹침·더티아웃. 이미지 4개. §13 적대적검산
- ✅ holdem-drawing-odds (odds of flopping set/flush/quads + 드로우 완성확률) — 발행 2026-07-04. Flop Lifecycle 통합표(made→draw→complete)+조합론 노출·셋마이닝 임플라이드오즈. §13 적대적 22개 ALL CORRECT. 이미지 2개
- 🆕 holdem-implied-odds (implied odds / reverse implied odds)
- 🆕 holdem-equity (what is equity / how to calculate)
- 🆕 holdem-rule-of-2-and-4 (4-2 rule) — **보류**(outs/pot-odds/probability/drawing-odds와 정면 중복)
> **가장 저경쟁·고밀도 롱테일 광맥.** 계산 질문은 정답이 명확해 Featured Snippet 독점 쉬움.

### 필라 4 — Strategy & Play · hub `holdem-strategy` 🆕 ("Texas Holdem Strategy")
- ✅ holdem-position-play (기존 category:strategy — 이제 이 필라 소속 명확화)
- ✅ holdem-starting-hands-chart (피링크 6)
- ✅ holdem-positions (Rules와 공유 — 좌석기본은 Rules, 포지션별 플레이는 Strategy)
- 🆕 holdem-preflop-strategy (open raise / preflop ranges)
- 🆕 holdem-3bet (3-betting when/how)
- 🆕 holdem-continuation-bet (c-bet)
- 🆕 holdem-bluff-spot (when to bluff / how to bluff — KO 필라 slug 정합)
- 🆕 holdem-when-to-fold
- 🆕 holdem-check-raise
> 경쟁 높지만 롱테일 스팟 무한. head term("poker strategy") 정면승부 X, "should I fold pocket jacks preflop" 류 구체 스팟으로 파고듦.

### 필라 5 — Tournament · hub `holdem-tournament` ✅
- ✅ holdem-tournament-vs-cash-game (피링크 7)
- ✅ apt-incheon-2026-guide
- ✅ korea-poker-marathon-2026
- ⚠️ wpt-australia-2026-guide (본문 markdown 내부링크 0 = 고아 → 복구 필요)
- ⚠️ ept-barcelona-2026-guide (본문 markdown 내부링크 0 = 고아 → 복구 필요)
- 🆕 holdem-icm (ICM basics — 대형 롱테일)
- 🆕 holdem-bubble (bubble play)
- 🆕 holdem-short-stack (short stack strategy)
- 🆕 holdem-mtt-strategy
> 이벤트가이드는 시즌성(대회 끝나면 recap 자산화). 상시 트래픽은 ICM·버블·숏스택 클러스터가 담당.

### 필라 6 — Glossary / Terms · hub `holdem-glossary` 🆕 (A-Z 허브)
개별 페이지는 **검색량 있는 용어만**(Featured Snippet 타깃), 나머지는 허브에 묶음(thin-content 방지):
- ✅ holdem-straddle (what is a straddle 2900) — 발행 2026-07-04. 종류비교표·액션순서·-EV답변. 적대적 룰 팩트체크 통과. 첫링크=blind-meaning(허브 미발행이라 임시). 이미지 4개(가독성)
- ✅ holdem-rake (what is a rake 1300) — 발행 2026-07-04. 레이크종류비교표·실전계산·rake trap·rakeback·토너fee. 적대적 팩트체크 통과(GGPoker예외·bb/100헷지). 첫링크=tournament-vs-cash-game
- ✅ holdem-fish (what is a fish 390·**LDA3 최저경쟁**) — 발행 2026-07-05. 플레이어유형 통합표(fish/shark/whale/nit/donkey/calling station/reg/grinder/LAG·TAG)·명언 정확검증("sucker" not "fish", Rounders+격언)·VPIP/PFR 자가진단표. 적대적 팩트체크 **사실오류 0건**. 첫링크=starting-hands-chart(허브 미발행 임시)
- 🆕 holdem-bad-beat
- 🆕 holdem-tilt
- 🆕 holdem-nuts
- 🆕 holdem-gutshot (gutshot vs open-ended)
- 🆕 holdem-cooler
- 🆕 holdem-donk-bet
- 🆕 holdem-runner-runner
> **롱테일 1등이 가장 빠른 필라.** 용어 1개 = 저경쟁 질문 쿼리 1개. 여기부터 "1등 체감"을 빠르게 쌓는다.

---

## 3. 기존 20개 손질 목록 (저비용·선행)

신규 발행 前, 기존 자산 정합성부터 잡는다 (링크주스·색인 효율↑).

1. **category 통일** — 현재 tournament/초보 가이드/토너먼트(한글)/strategy 혼재. 6필라 기준 표준 셋으로 재지정 제안: `rules` / `hand-rankings` / `odds` / `strategy` / `tournament` / `glossary`.
   - ⚠️ 실행 전 category 소비처(렌더러·필터·i18n) 확인 필요 → 실제 재지정은 별도 스텝.
2. **wpt/ept 고아 복구** — 각 글 본문에 markdown 내부링크 3개+ 추가 (holdem-tournament 필라 + tournament-vs-cash + 관련 이벤트가이드).
3. **필라 링크 규칙 적용** — 모든 클러스터의 **첫 내부링크 = 소속 필라**. Strategy/Odds 신규 허브 발행 시 기존 클러스터(position-play·starting-hands-chart)에서 역링크.
4. **positions 이중소속 정리** — `holdem-positions`(좌석 기본)=Rules 첫링크, `holdem-position-play`(포지션별 플레이)=Strategy 첫링크.

---

## 4. 발행 우선순위 (롱테일 1등 속도 기준)

| 순서 | 대상 | 이유 |
|---|---|---|
| 0 | 기존 20개 손질 (§3) | 저비용·즉효. 링크주스·색인 정리 |
| 1 | **필라 6 Glossary** 허브 + 개별 용어 5~7개 | 최저경쟁·최고 롱테일밀도 = 1등 가장 빠름 |
| 2 | **필라 3 Odds & Math** 허브 + pot-odds·outs·4-2룰 | 저경쟁·계산 정답형 = Snippet 독점 |
| 3 | **필라 2 Hand Rankings** 깊이 (kicker 등) | GSC 기존 노출 최다 = 순위만 올리면 이득 |
| 4 | **필라 4 Strategy** 허브 + 클러스터 드립 | 경쟁 높음·롱테일 무한 = 꾸준히 |
| 5 | **필라 5 Tournament** 상시 클러스터 (ICM·버블) | 이벤트가이드 시즌성 보완 |

> 각 필라는 **클러스터가 충분히 두꺼워질 때까지 다음 필라로 안 넘어간다**(토픽 오소리티 원칙). 단, §3 손질과 필라1 착수는 병행 가능.

---

## 5. 발행 워크플로우 (글 1편당)

posting.mdc STEP 준수. 롱테일 1등용 필수 체크:
1. **EN SERP Top10 + PAA 전수조사** → 검색자가 실제 치는 표현을 H2·FAQ에 그대로.
2. 자동완성 롱테일 6~8개 도출 → H2/FAQ에 클러스터링.
3. E-E-A-T 실경험담 필수 (AI 백과사전식 금지).
4. §13 핸드 검산 (베스트5장).
5. 내부링크 양방향 (첫 링크=필라, 클러스터끼리 문맥연결).
6. 이미지 실사·webp·≤60KB·1200×675·속도점검.
7. slug는 **여기서 확정한 것 고정** (12언어 공유, 변경 불가).
8. seoTitle/desc = 호기심 훅 + 롱테일 키워드.

---

## 6. 다국어 확장 (EN 마스터 완성 후)

- EN 필라 1개 완성(허브+클러스터 두꺼움) → 그 세트를 언어별 번역. 직역 X, 언어별 SERP 톤 현지화.
- 1차 언어: es · pt-BR · de · ja (포커 트래픽 큰 순), 이후 점진 확장.
- slug 전 언어 공유, hreflang 상호링크 + x-default(en).

---

## 7. 진행 상태 트래킹

| 필라 | 허브 | 클러스터(발행/목표) | 상태 |
|---|---|---|---|
| 1 Rules | ✅ | 5 / 8 | 두꺼움 |
| 2 Hand Rankings | ✅ | 4 / 6 | 두꺼움 |
| 3 Odds & Math | ✅ | 3 / 5 | 허브+pot-odds+outs+drawing-odds. 남은 심화=implied-odds·equity |
| 4 Strategy | 🆕 | 3 / 9 | 껍데기 |
| 5 Tournament | ✅ | 5 / 8 | 강함(고아2) |
| 6 Glossary | 🆕 | 3 / 7 | straddle·rake·fish 발행. 허브+cooler·slowroll·bad-beat 남음 |

> 글 발행/수정 시 이 표와 §2 트리를 갱신할 것.
