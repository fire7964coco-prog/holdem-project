# tr SERP 보강 — 0단계 조사 브리프 (2026-10-06 · 사장님 지시 «20편을 상위 1페이지로»)

> 목적: tr 글 20편을 구글 터키 1페이지에 올린다. 이 문서는 **조사 레인 공통 규격**이다. 산출물 = 같은 폴더의 `L1~L5-*.md`. 글 수정은 이 조사가 끝난 뒤 별도 회차(볼륨 순 4~5편씩).
> 🔴 이 조사를 빼고 글을 고치지 않는다(메모리 new-language-serp-before-writing).

## 레인 배정 (검색어 = docs/tr-cluster-plan.md §1·§3 소유표 + 각 회차 WORKLOG 실측)

| 레인 | 글(`lib/posts-tr/`) | 주력 검색어(주인) |
|---|---|---|
| L1 규칙 필라 | texas-holdem-rules-for-beginners · holdem-game-order · holdem-betting-actions | poker nasıl oynanır 5.400 · texas holdem 1.600 · poker oyunu 1.600 · poker kuralları 590 · poker nedir 320 · holdem 260 · texas holdem kuralları · el sırası · poker bahis/hareketleri(check raise fold) |
| L2 족보·쇼다운 | holdem-hand-rankings · holdem-tiebreak-rules · holdem-showdown-rules | poker elleri 2.900 · poker el sıralaması 880 · poker kart sıralaması 880 · poker kartları 880 · poker sıralaması 390 · poker kombinasyonları 260 · kicker nedir · split pot · pokerde beraberlik · showdown |
| L3 규칙 단편·용어 | holdem-blind-meaning · holdem-all-in-rules · holdem-glossary | blind nedir 70 · small blind big blind · all in nedir · all in kuralları · yan pot · poker terimleri 260 · tilt nedir 140 · nuts nedir |
| L4 확률·대회 | holdem-pot-odds · holdem-probability · holdem-tournament · holdem-tournament-vs-cash-game | pot odds · pot oranı · poker olasılıkları · outs · icm nedir 170 · poker turnuvası 110(주인 = /tr/tournaments — 글은 구조·전략 의도만) · turnuva mı cash game mi |
| L5 전략·GTO | holdem-strategy · holdem-positions · holdem-continuation-bet · donk-bet-strategy · monotone-board-strategy · broadway-board-strategy · a-high-board-cbet | poker taktikleri 50 · poker nasıl kazanılır 30 · poker pozisyonları · button/cutoff · c-bet · gto nedir 40 · gto poker 30(주인 = /tr/solver) · donk bet |

## 레인마다 할 일 (빠짐없이 — 각 항목을 산출물에 절로 남긴다)

1. **검색어 확장**: DataForSEO `keywords_data/google_ads/search_volume/live`(location_code 2792 · language_code tr)로 주력어 + 아래 2·3에서 나온 후보의 볼륨. 라쿠 MCP(`mcp__rakko__suggest-keywords` 등 — 터키 location이 되는지 `metadata-locations`로 먼저 확인, 안 되면 그 사실을 적는다)로 관련어.
2. **자동완성**: DataForSEO `serp/google/autocomplete/live/advanced`(2792 · tr)로 주력어마다 + 와일드카드 변형(«poker elleri *», «* poker elleri»). 결과를 목록 그대로.
3. **SERP 상위 10 + PAA**: DataForSEO `serp/google/organic/live/advanced`(location_code 2792 · language_code tr · depth 10)로 주력어 2~3개씩. 순위·URL·제목·유형(블로그/카지노 제휴/위키/영상/포럼) · `people_also_ask` 질문 원문 · featured snippet 유무와 문구 · AI overview 유무.
4. **상위 글 원문 정독**(주력어별 상위 5편 중 실제 글 · 카지노 랜딩도 1위권이면 포함): firecrawl 스크레이프 또는 WebFetch로 **H1/H2/H3 축어 목록**과 분량 · 표/이미지/FAQ 유무 · 경험담·예시 유무 · 오류(§13 — 족보·확률이 틀린 곳) · 낡은 정보. 요약을 사실로 쓰지 않는다 — 헤딩은 축어로.
5. **장단점 표**: 상위 글들의 공통 강점(우리가 꼭 갖춰야 할 것) · 공통 약점(우리가 차별화할 것 — 오류·얕음·예시 없음·확률 근거 없음·FAQ 없음 등).
6. **우리 글 대조**: 현재 tr 글의 seoTitle·desc·H1·H2 목록·FAQ 질문을 읽고 3·4와 비교 → 빠진 검색 의도·질문, 이미 이기는 점.
7. **처방(글 수정 지시서)** — 글마다:
   - seoTitle(~55자 · 훅 유지 + 주력어 앞쪽) · desc(≤160자) 후보 1~2
   - H2 추가/개명(질문형 · 자동완성·PAA 축어에 맞춤) — 각 H2 직후 40~75단어 직답(GEO 인용 패시지)
   - FAQ 추가 질문(PAA 축어 기반) + 답 방향
   - 차별화 요소: 다른 사이트에 없는 것(우리 솔버 수치 · 7장 베스트5 검산 예시 · 정확한 확률표 · 경험담 · 도구 링크 `/tr/calculator`·`/tr/hand-chart`·`/tr/glossary`·`/tr/solver`)
   - 카니발 주의: §3 소유표 — 다른 글/도구의 헤드텀을 빼앗는 처방 금지(필요하면 «앵커 링크로 위임»)
   - 우선순위(볼륨 × 갭 크기)

## 규율
- 🔴 사실은 원문에서만(CLAUDE.md §12-B) · 개수·목록은 직접 센다 · 검색 요약을 사실로 쓰지 않는다.
- 합법성·온라인 실전 사이트 추천 의도(poker oyna · online poker)는 조준하지 않는다(§0 · §5).
- 수정은 하지 않는다 — 조사·처방 문서만 쓴다. git 금지.
- 산출물 끝에 **커버리지 표**: 검색어별로 1~4를 했는지(✅/✗+이유).

---

## 회차 A 결과 (2026-10-06 (11))

- 대상 4편 = texas-holdem-rules-for-beginners(L1 7-A) · holdem-betting-actions(7-C) · holdem-game-order(7-B) · holdem-hand-rankings(L2 7-1). Opus 서브 4레인 → 렌즈 A(터키어 교열)·B(딜러·§13·SEO) + 아스트라 1차 → 반영 → 2차(교열 렌즈 + 아스트라).
- 새 seoTitle: 필라 «Poker nasıl oynanır? Kısaca Texas Hold'em kuralları sıfırdan»(60) · betting «Pokerde check, call, raise, fold ne demek? Sıra sende»(53) · game-order «Pokerde sıra kimde? Preflop, flop, turn, river oyun sırası»(58 · «el sırası» 반납) · hand-rankings «Kazandın sandın? Poker elleri: perden royal floşa sıralama»(59).
- 소유 확정(처방서 L1·L2 엇갈림 정리): «pokerde renk sıralaması» = hand-rankings(H2 신설 · 필라 FAQ 링크도 그쪽) · kicker·split pot·beraberlik = tiebreak-rules(hand-rankings는 요약 + 링크 · :::tiebreak 표 삭제 → showdown-rules·game-order 앵커를 tiebreak으로 재조준) · «önce kim bahis yapar» = game-order(betting H2 삭제 → 2문장 + 링크) · «Showdown nedir» = showdown-rules(game-order H2는 «Showdown: …» 비질문형 유지).
- «pas» 확정 이행: check 문맥 pas 5자리 정정(betting 4 · game-order 1) · 용어집 aka(pas→fold · bop/bob→check · rest→all-in) · `docs/translation-terms-tr.md` 갱신.
- 미적용(조건 미충족): hand-rankings Türk pokeri H2(1차 출처 없음 → 1문장) · 필라 Türk pokeri 비교표는 tr.wikipedia «Poker» 축어(5장 비공개 · 최대 4장 교체 · 4인 7~A 덱)로만 · mynet «24 kart» 미사용.
- 🪶 남긴 것: 필라 seoTitle 60자 상한 · game-order «Showdown: …» 첫 문단 25단어(비질문형) · 처방 차별화 «거리별 좌석 그림»(새 이미지 범위 밖).

## 회차 B 결과 (2026-10-06 (12))

- 대상 5편 = holdem-tiebreak-rules(L2 7-2) · holdem-showdown-rules(L2 7-3) · holdem-glossary(L3 7-1 · 사장님 판단 ② 반영) · holdem-all-in-rules(L3 7-2) · holdem-blind-meaning(L3 7-3). Opus 서브 5레인 → 렌즈 A(터키어 교열·diff)·B(딜러·§13·SEO) + 아스트라 1차 → 반영 → 2차(교열·룰 렌즈 + 아스트라).
- 새 seoTitle: tiebreak «Pokerde beraberlik: aynı çift kim kazanır? Kicker, split pot»(60) · showdown «Showdown ne demek? Pokerde kartı önce kim açar, muck kuralı»(59) · glossary «Pokerde rest, bop, nuts ne demek? Masanın dilini çöz»(52 · «poker terimleri / sözlük» seoTitle·H1·tags에서 제거) · all-in «All-in gittin ama ne kazanırsın? Rest ve yan pot kuralları»(58) · blind «Small blind big blind nedir? Kartı görmeden neden çip konur»(59).
- tiebreak: Kicker nedir 정의 블록 · split pot H2 2번째로 · 보드 함정 2 H2(보드 5-6-7-8-9 · 4-4-4-4-K — hand-rankings Hata 2·3과 다른 카드) · «çiftler toplanmaz» · FAQ +2(odd chip = WSOP Rule 73 기존 인용 범위). showdown: «Pokerde showdown nedir» 첫 H2 · «iki kartımı da kullanmak zorunda mıyım» H2(0장·1장 예시) · split pot H2 → 비질문형 축소 + tiebreak 링크 · FAQ «Muck nedir?». glossary: 전통어 대응표 H2(rest·bop/bob·rölans·gördüm·pas·kav·kent/floş — TDK·위키 축어 · bop 출처 갈림 · 위키 rölans 정의 교정) · call/check/fold H3 · FAQ +4 · 도구 링크 2. all-in: «All-in (rest) nedir? Pokerde rest çekmek ne demek?» H2(TDK 축어) · FAQ +4(reste rest 등). blind: küçük kör/büyük kör · «Small blind mı big blind mı daha kötü pozisyon?» H2(수치 없음 — 확인된 출처 없음) · FAQ +2.
- 검수에서 고친 원본 결함(아스트라): all-in 사이드팟 자격 과일반화(표·Hata 1) · 짧은 올인 재오픈 조건(규칙 절·Hata 2 → «bu turda zaten bet, call ya da raise yapmış ve … tam bir yükseltmeyle karşılaşmayan») · blind 27% equity 단서(rake·실현율) · SB limp 단정 완화 · «the "opsiyon"» · showdown FAQ B149 축어 중복. 편집 결함(렌즈·아스트라): 일반화 반례 2(같은 10 스트레이트 → J-10 승 · 쿼드 보드 «5번째보다 높으면 승» → 키커 비교) · BB «액션을 닫는다» 조건 · 링크 과약속 3(/tr/glossary에 없는 slow roll·전통어 · hand-chart에 없는 BB) · 근거 없는 «딜러로 일한» 1인칭 2 → «Masada» · «fiş» → çip · blind 본문↔FAQ 모순 · 위키 kav 축어 · glossary «sekiz ikili» → 7+1.
- 주변: game-order FAQ → showdown 링크 · tournament «poker terimleri sözlüğü» 링크를 도구로, readnext·tiebreak 카드 라벨을 글 seoTitle로 · `app/tr/glossary/dict.ts` 주석(머리어 주인 = 도구) 갱신.
- 🪶 남긴 것(자동 착수 금지): 도구 dict에 rölans·gördüm·kav aka 추가 · 도구 Kicker 항목 → tiebreak 역링크(dict에 링크 구조 없음) · 도구 keywords의 «pokerde kicker nedir»·«pokerde nuts ne demek» 정리 · betting-actions FAQ «Bob … check için kullanılan masa sözüdür» 단정 톤을 «kaynaklar ayrışır»로 맞추기 · tiebreak Kicker 정의 블록 80단어(75 상한 초과 · 링크 문장 포함) · positions 글 블라인드 절 küçük/büyük kör 병기 검토 · showdown «hesaplaşma» 등 사전 정의(원문 확보 시).
