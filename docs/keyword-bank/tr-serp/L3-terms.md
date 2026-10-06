# L3 규칙 단편·용어 — tr SERP 조사 (2026-10-06)

> 브리프 = `00-brief.md`. 대상 글 3편(`lib/posts-tr/`): **holdem-blind-meaning · holdem-all-in-rules · holdem-glossary** + 도구 `/tr/glossary`(카니발 판정 포함).
> 도구: DataForSEO(location 2792 · tr) — 볼륨 2회 배치(약 110어) · 자동완성 15회 · SERP 16회(1차 11 + 보강 5) · 라쿠 3회 · TDK 사전 API(sozluk.gov.tr/gts) 11어 · 상위 글 원문 4건 전부 수집(wiki·rangecraft = WebFetch · sporara = firecrawl · drkeremkaya = Playwright 임시 스크립트, 수집 후 삭제).
> 🔴 수치는 전부 DataForSEO google_ads search_volume (2026-10-06 조회, 12개월 평균). 검색 요약을 사실로 쓴 곳 없음 — 정의는 TDK 원문·경쟁 글 축어만 인용.

---

## 0. 한 줄 결론 (먼저 읽을 것)

1. **브리프의 주력어 대부분이 «포커 의도가 아니다»** — 전부 SERP 실측. «blind nedir»(70) 포커 0 · «blind ne demek»(2.400) 0/9 · «all in nedir»(10)·«all in ne demek»(320) 0 · «tilt olmak»(480) 0 · «tilt ne demek»(4.400) 0/7 · «nuts nedir»(880) 0 · «bop ne demek»(2.400) 0/8(정치 «BOP») · «rest ne demek»(5.400) 사전 정의 3/8, 포커 글 0. 1페이지는 **사전·IT·물류·LoL·의학·견과류·정치**다. → 이 헤드텀을 seoTitle 앞에 세우면 클릭 없이 노출만 먹는다. **조준하지 마라.**
2. **진짜 포커 의도 = «pokerde X ne demek» 패턴 + 터키 전통 포커 어휘(rest·bop/bob·rölans·gördüm·pas·kav·kent·floş).** 자동완성에 «pokerde ___ ne demek»이 15개, 라쿠 확장으로 40개+ 나온다. 이 SERP들은 **ekşi sözlük·사전·PDF(scribd)·카지노 제휴**가 차지하고 있고 제대로 된 포커 글이 없다 → 우리 몫.
3. **«rest» = 터키어 all-in이다**(TDK: «Pokerde, bir oyuncunun önündeki paranın tümü»). 우리 tr 코퍼스 21편 어디에도 «rest»가 0회. «pokerde rest ne demek» 70 + «poker rest ne demek» 70 + PAA «Kumarda rest çekmek ne demek?» → **all-in-rules의 최대 갭.**
4. **«small blind big blind»(20)의 SERP는 1~10위가 전부 영어·포르투갈어·네덜란드어**다. 터키어 페이지 0개 → 우리 글이 들어갈 빈자리. 지식 패널은 터키어로 «kör bahis · küçük kör · büyük kör»를 쓴다(우리 blind 글엔 이 단어 0회).
5. **카니발 판정: «poker terimleri»(260)의 주인은 글(holdem-glossary)로 옮겨라.** 지금은 도구 title과 글 seoTitle이 둘 다 «Poker Terimleri Sözlüğü»를 들고 있다(§7-4). 그리고 **글 → `/tr/glossary` 링크가 0개**다.

---

## 1. 검색어 확장 (DataForSEO 볼륨 · 라쿠)

### 1-1. 라쿠 터키 지원 여부
- `metadata-locations countryCode=TR` → **터키 지역 목록 반환됨**(«Adana,Turkiye» 등). 단 이 location은 `search-rank-history`·`search-volume-history` 전용이다.
- `suggest-keywords «poker terimleri»` → 제안어 8개는 나오지만 **지표(볼륨·SD) 전부 null**(라쿠 DB = 일본 기준). `suggest-keywords «pokerde» increaseKeyword` → «pokerde ___ ne demek/nedir» 72개(아래 2-2) — **관련어 발굴용으로만 유효**.
- `question-search «poker»`(blind·all in·rest·terim·tilt·nuts·pot 필터) → **0건**(일본어 질문 DB). 터키어 PAA는 DataForSEO SERP가 유일한 원천.

### 1-2. 볼륨표 (TR · tr · 월평균)

| 검색어 | 볼륨 | SERP 의도(§3 실측) | L3 판정 |
|---|---|---|---|
| rest ne demek | 5.400 | ✅ 실측(§3-12): 영어 «rest»(dinlenmek)·관용구 혼합 — 포커 뜻 스니펫 3/8(사전), 포커 글 0 · AI Overview 첫 문장에 «iskambil oyunlarında (özellikle poker)… tüm parayı ortaya koymak» | 조준 금지(혼합 의도). AI Overview 인용 기회만 |
| tilt ne demek | 4.400 | ✅ 실측(§3-13): 영어사전·의학(tilt testi)·필라테스 — 포커 0/7 | 조준 금지 |
| blind ne demek | 2.400 | ✅ 실측(§3-14): 영어사전 9/9 — 포커 0 | 조준 금지 |
| bop ne demek | 2.400 (6~8월 590로 급락) | ✅ 실측(§3-15): **«Büyük Ortadoğu Projesi (BOP)»** 정치 — 포커 0/8 | 조준 금지(급락도 정치 뉴스 주기로 설명됨) |
| rest çekmek ne demek | 1.600 | ✅ 실측: 관용구 사전(TDK·ekşi·hürriyet) — 포커 0 | 조준 금지. 단 AI Overview가 «Oyun terimi: …paranın tamamını ortaya koyması» 언급 |
| all in | 1.000 | 미조회(범용 영어) | 조준 금지 |
| kav ne demek | 1.000 | 미조회(«kav» = 부싯깃 등 일반어) | 조준 금지 |
| nuts nedir | 880 | ✅ 실측: 견과류·슬랭 사전 — 포커 0 | 조준 금지 |
| bob ne demek | 720 | 미조회 | 참고만 |
| tilt olmak | 480 | ✅ 실측: 관용구·LoL — 포커 0(reddit 1건 «10 yıldır profesyonel poker oynuyorum» 스니펫) | 조준 금지 |
| rest çekmek | 390 | 미조회 | 조준 금지 |
| all in ne demek / allin ne demek | 320 / 320 | ✅ 실측(all in ne demek): 영어 숙어·instagram — 포커 0 | 조준 금지 |
| rölans ne demek | 320 | ✅ 실측: 어원·학술 PDF·문학 인용 — 포커 글 0 | **glossary 소항목으로 흡수**(약한 SERP) |
| blöf nedir | 320 | 미조회 | glossary 기존 «Blöf» 항목 유지 |
| **poker terimleri** | **260** | ✅ 실측: 포커 용어 목록 의도 | **도구 `/tr/glossary` 주인(10-06 사장님 확정 · 글 이전 처방 기각)** |
| rest nedir | 210 | 미조회 | 참고 |
| tilt nedir | 140 | 미조회(자동완성 15개 전부 의학·카메라) | FAQ 유지만 |
| rest poker | 110 | ✅ 실측: 모바일 앱 «Rest Poker» 브랜드 — 정보 의도 0 | 조준 금지 |
| blind nedir | 70 | ✅ 실측: 영어사전·blind date·Blind ID — 포커 0 | seoTitle 앞자리 금지 |
| **pokerde rest ne demek** | **70** | ✅ 실측: ekşi·nedirsor·tureng·카지노 제휴 — 포커 글 0 | **all-in-rules 주인** |
| **poker rest ne demek** | **70** | ✅ 실측(§3-16): 포커 관련 6/10(reddit r/poker·Zynga 지원·ekşi poker·앱 불만)이나 **규칙 설명 글 0** | **all-in-rules 주인** |
| **pokerde floş ne demek** | 50 | 미조회 · PAA «Pokerde floş ne demek?»(poker terimleri SERP) | hand-rankings(L2) 주인 · glossary는 위임 |
| **pokerde bob ne demek** | 50 | (bop과 같은 의도) | **glossary** |
| pokerde kent ne demek | 40 | 미조회 | hand-rankings(L2) 주인 · glossary 위임 |
| **pokerde bop ne demek** | 40 | ✅ 실측: 칼럼·scribd·사전·Steam 리뷰 — 포커 글 0 | **glossary** |
| poker terimleri ve anlamları | 30 | (poker terimleri와 같은 SERP로 판단 · 미조회) | glossary |
| small blind big blind | 20 | ✅ 실측: **1~10위 전부 비터키어** | **blind-meaning** |
| pokerde rest · pokerde pot/fold/call/rölans ne demek | 20 각 | pot·fold·call은 미조회 | rest→all-in · 나머지→glossary·betting-actions |
| pokerde bop nedir / ante nedir | 20 / 20 | 미조회 | glossary |
| small blind · big blind · poker blind · blind poker · sb bb poker | 10 각 | — | blind-meaning |
| all in nedir · all-in nedir · poker all in · side pot · pokerde check/dealer/gördüm ne demek · pokerde ante ne demek · poker bob nedir · poker kelimeleri · poker terimleri ingilizce/nelerdir · kicker nedir · kör bahis · ante poker · nuts poker · poker tilt · pokerde rest çekmek · sanvar ne demek | 10 각 | all in nedir 실측 = IT·물류 | 장꼬리 흡수 |
| poker blind nedir · pokerde blind ne demek · small/big blind nedir · small/big blind ne demek · all in kuralları · pokerde all in · pokerde all in ne demek · yan pot · pokerde yan pot · side pot nedir/ne demek · pokerde reste karşılık · texas holdem poker terimleri · poker terimleri türkçe · poker sözlüğü · poker sözlük · poker jargonu · texas holdem terimleri · pokerde nuts · pokerde nut · nut el · pokerde tilt · pokerde pas ne demek · pas ne demek poker · pokerde flop/turn/set/trips/limp/straddle/sanvar/per/value/görüyorum/blöf ne demek · pokerde kav/açar/dump nedir · küçük kör (büyük kör) · straddle nedir | **null**(Google Ads 집계 미만) | 자동완성엔 있음 = 실수요 존재·소량 | 장꼬리 흡수 |

> 메모: «yan pot»·«side pot» 계열이 **사실상 0**. all-in 글의 yan pot 절은 «검색어»가 아니라 «글 품질» 자산이다(H2 개명 불필요).

---

## 2. 자동완성 (DataForSEO autocomplete · 2792 · tr · 목록 그대로)

- **blind nedir** → blind nedir ingilizce · blind date nedir · blind box nedir · blind id nedir · blind uygulaması nedir · blind baking nedir · blind fest nedir · blind symphony nedir · blind spot nedir · blind bag nedir · blind test nedir · blind item nedir · blind rivet nedir · blind scan nedir · gender blind nedir (**포커 0/15**)
- **small blind** → small blinds · small blind big blind · small blinds for windows · small blind vs big blind · small blind and big blind in poker · small blinds for door window · small blind poker · small blind spot mirror · small blind snake · small blender · small blind boxes · small blinds for bathroom window · small blind big blind order · small blind big blind meaning · small blind spot in vision
- **poker blind** → poker blinds · poker blind order · poker blind timer · poker blinds calculator · poker blind rules · poker blinds explained · poker blind structure · poker blind meaning · poker blind clock · poker blinds chart · poker blinds app · poker blind structure calculator · poker blind positions · poker blinds setup · poker blinds timer online (**전부 영어**)
- **pokerde blind** → pokerde blind ne demek · poker blind nedir · poker blinds explained
- **all in nedir** → all in one nedir · all in fiyat nedir · all in likit nedir · all in pozisyonu nedir · zercard all in nedir · all nedir tıp · all nedir kanser · all nedir ingilizcede · all nedir ortopedi · all nedir makale · all in one bilgisayar nedir · all in one pc nedir · all in one yazıcı nedir · all in one teknolojisi nedir (**포커 0/14**)
- **poker all in** → poker all in rules · poker all in winning numbers · poker all in olg · poker all in gif · poker all in button · poker all in results · poker all in meme · poker all in meaning · poker all in numbers · poker all in chip · poker all in jackpot · poker all in win tracker · poker all in calculator · poker all in lotto · poker all in equity calculator
- **pokerde rest** → pokerde rest ne demek · pokerde reste karşılık · pokerde rest çekmek · pokerde rest çekmek ne demek · pokerde rest nedir
- **poker rest** → poker rest ne demek · poker rest çekmek ne demek · poker rest çekmek · poker restaurant · poker resting face · poker restauracja · poker restaurant near me · czestochowa restauracja poker · poker restaurant rimini · poker resteal · poker restaurante buenos aires · poker resto · rest poker chip · rest poker download · rest poker free chips
- **yan pot** → (포커 0 — yan pitcher · yan pothin · potter yan … 15개 전부 무관)
- **poker terimleri** → poker terimleri ve anlamları · poker terimleri ingilizce · poker terimleri türkçe · poker terimleri rest · texas poker terimleri · texas holdem poker terimleri · poker terimleri nelerdir
- **tilt nedir** → tilt nedir tıp · tilt nedir kamera · tilt nedir ftr · tilt nedir kardiyoloji · tilt testi nedir · pelvik tilt nedir · tilt shift nedir · anterior tilt nedir · tilt table nedir · posterior tilt nedir · canthal tilt nedir · tilt olmak nedir · tilt tension nedir · tilt hareketi nedir · patellar tilt nedir (**포커 0/15**)
- **poker tilt** → poker tilt call · poker tilt meaning · poker tilt dutch boyd · tilting in poker · poker tilted · poker tilting meaning · poker tilt reddit · poker tilt book · poker tilt control · poker tilt definition · poker tilt gif · poker tilt meme · tilt poker room · tilt poker room photos · tilt poker room lucknow photos
- **nuts nedir** → nuts nedir ingilizce · nuts nedir bölge · pine/brazil/macadamia/beech/tiger/fox/tree/pecan/cashew/shea nuts nedir · nuts türkçesi nedir · nuts 2 nedir · nuts alerjisi nedir (**포커 0/15**)
- **pokerde** (와일드카드 «pokerde *») → pokerde en iyi el sıralaması · pokerde en yüksek el · pokerde renk sıralaması · pokerde eller · pokerde rest ne demek · pokerde en yüksek kart · pokerde en büyük el · pokerde floş ne demek · pokerde oyun parası bulmaca · pokerde kart sıralaması · pokerde pot ne demek · pokerde paranın tümü · pokerde en üstün el budur · pokerde bop ne demek · pokerde call ne demek
- **pokerde ne demek** («pokerde * ne demek») → pokerde rest ne demek · pokerde floş ne demek · pokerde bob ne demek · pokerde bop ne demek · pokerde kent ne demek · pokerde pot ne demek · pokerde fold ne demek · pokerde call ne demek · pokerde rölans ne demek · pokerde dealer ne demek · pokerde check ne demek · pokerde gördüm ne demek · pokerde pas ne demek · pokerde flop ne demek · pokerde solt ne demek
- (라쿠 확장 «pokerde» 추가분, 위와 중복 제외) pokerde all in ne demek · pokerde ante ne demek · pokerde blöf ne demek · pokerde blind ne demek · pokerde limp ne demek · pokerde set ne demek · pokerde trips ne demek · pokerde straddle ne demek · pokerde sanvar ne demek · pokerde per ne demek · pokerde value ne demek · pokerde turn ne demek · pokerde görüyorum ne demek · pokerde kav nedir · pokerde açar nedir · pokerde dump nedir · pokerde amaç nedir · pokerde 3 as / 4 as / 4 papaz / 4 kız / iki as ne demek · pokerde kare as/kare dam nedir · rest pokerde ne demek · poker bob nedir

> 🔎 «pokerde paranın tümü» = **TDK의 rest 정의 문장 그대로**가 자동완성에 올라 있다 — 십자말풀이(bulmaca) 수요. «pokerde oyun parası bulmaca»도 같은 계열(답 = «bop»/«kav»로 추정 — 확인 안 함).

---

## 3. SERP 상위 10 + PAA (organic/live/advanced · depth 10)

### 3-1. «poker terimleri» (260) — AI Overview ✗ · featured snippet ✗
| # | 도메인 | 제목(축어) | 유형 |
|---|---|---|---|
| 1 | tr.wikipedia.org | Poker | 위키(«Terimler» 절 스니펫) |
| 2 | scribd.com | Poker Ve Terimleri \| PDF | 문서 업로드 |
| 3 | sporara.com | Poker Terimleri Rehberi: Anlam ve Kullanımları \| Spor Blogu | 블로그(스포츠 일반) |
| 4 | langeek.co | Poker Terimleri için İngilizce Kelimeler 🇬🇧 ... | 영어 학습 |
| 5 | drkeremkaya.com | Poker Terimleri Nelerdir? | 개인 블로그(«100 Poker Terimi») |
| 6 | youtube.com | Poker Terimleri Nelerdir? \| Türkçe Poker Dersleri | 영상 |
| 7 | eksisozluk.com | poker terimleri - sayfa 5 | 포럼 |
| 8 | rangecraftpoker.com | Poker sözlüğü | 도구사 help center(용어 목록) |
| 9 | blog.abaenglish.com | İngilizce kart oyunu kelimelerini öğrenin | 영어 학습 |
| 10 | tr.wikipedia.org | Texas hold 'em | 위키 |

**PAA(축어)**: Pokerde floş ne demek? · Pokerin mantığı nedir? · Pokerin kuralları nelerdir? · Poker kaç kart dağıtılır? · Pokerde en yüksek kart hangisidir? · Pokerde en iyi el hangisi?
**관련 검색**: Poker Terimleri Türkçe · Poker terimleri İngilizc · Poker nasıl oynanır · Poker elleri · Poker Kuralları · Poker çeşitleri · Poker büyüklük sıralaması · Poker kart sıralaması
**판독**: 포커 전문 사이트 1개(rangecraft)뿐. 나머지는 위키·PDF·영어학습·포럼. **전용 포커 용어 글이 1페이지에 사실상 없다** → 우리 30KB 글이 들어갈 자리.

### 3-2. «pokerde rest ne demek» (70) — AI Overview ✗
1 eksisozluk «case card» · 2 nedirsor «Rest nedir ne demektir anlamı» · 3 tureng «rest çekmek» · 4 kocaelihaberi(정치 칼럼) · 5 eksisozluk(관용구) · 6 glosbe · 7 superbetinyeniadresi «Pokerde Kart İsimleri \| Superbetin»(**카지노 제휴**) · 8 reddit r/poker(번역) · 9 seslisozluk «rester» · 10 art-isanat «Rest - Kelime Kökeni»
**PAA**: Pokerde rest çekmek ne demek? · Rest ne demek? · Rest çekmek ne demek? · Pokerde flush nedir? · Royal flush nasıl yapılır? · Pokerde en iyi el hangisidir?
**판독**: 1페이지 전부 사전·포럼. 포커 규칙 글 0 → 쉬운 자리.

### 3-3. «rest çekmek ne demek» (1.600) — **AI Overview ✓**
AI Overview 축어 일부: «**Oyun terimi:** İskambil veya benzeri oyunlarda oyuncunun elindeki veya önündeki paranın/puanın tamamını ortaya koyması demektir.» 참조 = tr.wiktionary · hurriyet · ekşi · milliyet.
상위: hurriyet 칼럼 · tamgasoft 사전 · kizlarsoruyor · uludağsözlük · eodev · kelimeler.net · ekşi · benzerkelimeler · t24.
**PAA**: Rest ne anlama gelir? · Rest çekmek ne demek TDK? · **Kumarda rest çekmek ne demek?** · Rest edilmek ne demek? · Rest çekmek ne demektir? · Rest çekmek nasıl yazılır?
**판독**: 관용구 의도. 우리가 1페이지 노릴 곳 아님. 단 PAA «Kumarda rest çekmek ne demek?»는 all-in 글 FAQ 재료.

### 3-4. «blind nedir» (70) — AI Overview ✓(영어 단어 «kör» 풀이)
PAA: Blind ID nedir? · Single ne anlama gelir? · Double blind nedir? · Blind man ne demek? · Blind ne demektir? · The Blind Side'ın Türkçesi nedir?
상위 10: tureng «blinds» · yandex translate · instagram · ekşi «blind gossip» · tureng «blind test» · ekşi «blind id» · youtube(영어 학습) · langeek · reverso. **포커 0.**

### 3-5. «small blind big blind» (20) — AI Overview ✗ · **지식 패널 ✓(터키어)**
지식 패널 축어: «Kör bahisler, flop tarzı poker oyunlarında oyuncular tarafından dağıtıcı düğmesinin soluna gönderilen zorunlu bahislerdir. … İki kör bahis olduğunda bunlara küçük kör ve büyük kör denir.»(출처 표기 = 영어 위키)
상위: 1 partypoker.es(영어) · 2 pokerstrategy.com glossary(영어) · 3 youtube PokerNews shorts · 비디오 팩 4개 · 4 onkpoker.nl(네덜란드어) · 5 quora(영어) · 6 superpoker.com.br(포르투갈어) · 7 mystrikingly(영어) · 8 poker.fandom(영어) · 9 youtube «Poker Dersleri -182- Cutoff vs Big Blind»(터키어 영상 1)
**PAA(영어 그대로)**: Can a big blind fold? · What is SB and BB in poker? · How big is a small blind? · Does the small blind go first? · Does small blind have to match big blind? · Is small blind or big blind better?
**판독**: **터키어 텍스트 페이지 0.** 빈 SERP.

### 3-6. «all in nedir» (10) / «all in ne demek» (320) — AI Overview: 후자 ✓(비동기, 본문 미수신)
all in nedir 상위: ekşi «all in»(해운 용어) · nethouse(All-in-One PC) · hiperlojistik «All in Navlun» · youtube Technopat · bab.la · casper · sayginlar nakliyat · ebrar bilgisayar · milliyet · hepsiburada. PAA: All in ne demek? · All in one nedir ne işe yarar? · All in one ne demek? · All in one alınır mı? · All in one nasıl okunur?
all in ne demek 상위: seslisozluk «all in your head» · instagram · reddit(영상) · dqsglobal … PAA: İ.m. all in ne demek? · All the best ne demek? · All is good ne demek? · İngilizce'de hayırlı olsun nasıl denir?
**판독**: 포커 0. «all in»은 터키에서 포커어가 아니라 «rest»가 포커어다.

### 3-7. «tilt olmak» (480) — AI Overview ✓
AI Overview: 핀볼 «TILT» 어원 · LoL/Valorant. 상위: ekşi ×2 · tureng · kizlarsoruyor · milliyet «Tilt Olmak Ne Demek? Oyunlarda Kullanılan…» · sabah · reddit r/summonerschool(번역) · kulzos. PAA: Tilt olmak ne anlama gelir? · Tilt ne demektir? · Tilt ne demek argo? · Tilt oldu ne demek? · Tilt etmek nedir? · "Tilt" kelimesinin kökeni nedir?
**판독**: 게임·관용구. 포커 0. 단 PAA «"Tilt" kelimesinin kökeni nedir?»는 glossary 한 줄 재료(핀볼 어원 — **출처 확인 전 쓰지 말 것**).

### 3-8. «nuts nedir» (880) — AI Overview ✓(견과·슬랭)
PAA: Nuts açılımı nedir? · Nuts ne demek ekşi? · Nut argoda ne demek? · Nuts nedir bölge? 상위: tureng · reddit EnglishLearning · remzihoca · ekşi(잡지) · instagram · cambridge · kizlarsoruyor · tariflerim. **포커 0.**

### 3-9. «pokerde bop ne demek» (40) — AI Overview ✗
1 kirmizilar(정치 칼럼: «poker oyununda, oyuna girmek için ortaya konması gereken en az miktara yanıt 'BOP' denir») · 2 scribd «Poker Ve Terimleri» · 3 Vikipedi(야구 용어) · 4 eurodict «a. (pokerde) bop raise the ante bopu artırmak» · 5 seslisozluk(«ante · bop, pokerde kart almadan ortaya konulan para») · 6 reddit(무관) · 7 istanbul.edu.tr 1937년 신문 PDF(«-Bop! Dedi. … - Rest! Dedi. … -Gördüm! Dedim») · 8 Steam 리뷰 · 9 yeniasya · 10 ekşi(무관). **포커 글 0.**

### 3-10. «rölans ne demek» (320) — AI Overview ✓(비동기, 미수신)
researchgate(«rölans … Konken, poker vb. oyunlarda ortaya sürülmüş olan parayı artırmak için söylenen söz») · etimolojiturkce(«Fransızca relance … 2. kumarda rakibin koyduğu paranın üstüne çıkma») · millidusunce · 1000kitap · atauni · hurriyet · ekşi · turkis. **포커 글 0.**

### 3-11. «rest poker» (110)
지식 패널 = 모바일 게임 «Rest Poker : Texas Holdem Game». 1~10위 = Google Play·App Store·Facebook·uptodown·instagram·psprices. PAA: **Rest nedir poker?** · Poker hangi ülkenin oyunu? · Zynga poker ne oyunu? · Poker oyunu nedir? · Poker mantığı nedir? · Pokerde en güçlü el nedir? → 내비게이션 의도. «Rest nedir poker?» PAA만 재료.

> 3-12 ~ 3-16 = 코디네이터 요청 보강 조회(2026-10-06 2차, 같은 설정). 포커 비율 = organic 결과 중 포커 뜻을 다루는 결과 수 / organic 수.

### 3-12. «rest ne demek» (5.400) — **AI Overview ✓**
AI Overview 첫 문장(축어): «Türkçede rest kelimesi, kökeni ve kullanıldığı alana göre iki farklı temel anlam taşır: iskambil oyunlarında (özellikle poker) meydan okuma amacıyla tüm parayı ortaya koymak, günlük dilde ise karşısında durma veya meydan okuma (rest çekmek). İngilizcede ise rest kelimesi dinlenmek veya geri kalan anlamlarına gelir.» 참조 = hurriyet · ekşi · tureng · lingusta.
상위 8: uzmanyds(영어 rest) · remzihoca(영어) · **nedirsor «Rest nedir ne demektir anlamı»(포커 뜻)** · reddit r/grammar · **mynet «Rest çekmek ne demek? Rest çekmek TDK sözlük anlamı…»(포커 뜻)** · **seslisozluk «rest çekmek»(«to stake all one's money»)** · tureng «rest on one's laurels» · cevirsozluk «Rest time».
**포커 비율 3/8 — 전부 사전 정의, 포커 글 0.** 이미지 팩에 REST API 글 다수.
PAA: Rest ingilizcede ne? · Rest yapmak ne demek? · Rest ne demek tıpta? · Arabada rest ne demek? · Rest düğmesi ne işe yarar? · Volkswagen klima rest nedir?
관련 검색: Resting face ne demek · Resting ne demek · Rest çekmek deyiminin anlamı · Playing board games ne demek
**판독**: 영어·관용구·자동차·IT가 섞인 혼합 의도 → 헤드 조준 금지 유지. 다만 AI Overview가 포커 뜻을 1순위로 올리므로, all-in 글의 «rest» 직답 패시지가 인용될 여지는 있다(처방 §7-2 그대로).

### 3-13. «tilt ne demek» (4.400) — AI Overview ✓
AI Overview: 영어 뜻(eğilmek) · 관용 «tilt olmak»(핀볼 어원) · 의학(tilt testi · pelvik tilt). 포커 언급 없음.
상위 7: reverso · taylanakgun «Tilt Testi (Eğik Masa Testi) Nedir?» · tureng «tilting» · ekşi «tilt» · instagram «Anterior Tilt» · engoo · sabah «Tilt Olmak Ne Demek? Argoda Ve Oyunlarda…» · acibadembayindir(의학). **포커 0/7.**
PAA: Eğik masa testi neden yapılır? · İngilizcede tilt Ne Demek? · Çok tilt oldum ne demek? · Tilt hareketi ne demek? · Tilt özelliği nedir? · Pilateste tilt ne demek?
관련 검색: 8개 전부 «tilt testi …»(의학).

### 3-14. «blind ne demek» (2.400) — AI Overview ✓(영어 단어 «kör»)
상위 9: tureng · cambridge · limasollunaci · remzihoca · flashcard.tr · tureng 예문 · bab.la · langeek · youtube(영어 학습). **포커 0/9.**
PAA: İm blind ne demek? · Blind dating ne demek? · Blind buy ne demek? · Is he blind ne demek? · Blind anlamı nedir? · Never blind ne demek?
관련 검색: Blind date ne demek · Blind ne demek Kürtçe · **Blind ne demek lol** · Blind Uygulaması nedir · Love is blind ne demek · … (포커 0)

### 3-15. «bop ne demek» (2.400) — AI Overview ✓(비동기, 미수신)
비디오 팩 4 + 상위 8 전부 **«Büyük Ortadoğu Projesi (BOP)»**(youtube Nil RTV · ekşi · ankaenstitusu · birgun · millicozum · facebook · turkoba · vansesigazetesi). **포커 0/8.**
PAA: Orta Doğu projesinde hangi ülkeler var? · Böp ne demek? · İngilizce Bop Ne Demek? · Bip bop ne demek? · Bop açılımı ne? · Bop'un amacı nedir?
**판독**: 볼륨 2.400은 정치 수요. 포커 «bop» 수요는 «pokerde bop ne demek»(40)·«pokerde bob ne demek»(50)·«pokerde bop nedir»(20)·«poker bob nedir»(10)뿐 — glossary 처방 그대로.

### 3-16. «poker rest ne demek» (70) — AI Overview ✗
1 reddit r/poker «Poker terimlerini kendi dilinde nasıl söylersin?»(번역 스레드) · 2 zyngasupport «Eşek veya bingo oyuncularına karşı nasıl oynayabilirim?»(«…rakip, bilerek sürekli rest çeker») · 3 ekşi «poker - sayfa 11» · 4 seslisozluk «a poker» · 5 instagram(무관) · 6 ekşi «ekşi sözlük poker oynayanlar veritabanı»(«restine rest ulan») · 7 instagram(«Hayat poker gibidir… Rest'e bağlıdır») · 8 şikayetvar «Rest Play Rest Poker Den Şikayetçiyim» · 9 facebook(정치 영상) · 10 youtube Liar's Bar.
**포커 관련 6/10(1·2·3·6·7·8), 규칙을 설명하는 글 0.**
PAA: **Poker rest çekmek ne demek?** · **Reste rest ne demek?** · Pokerde kartların sıralaması nedir? · Poker ne demektir? · Pokerin mantığı nedir? · Pokerde en güçlü el nedir?
**판독**: «pokerde rest ne demek»(§3-2)과 같은 빈자리 확정. 새 PAA «Reste rest ne demek?»(= all-in에 all-in으로 맞받기 → call) → all-in 글 FAQ 추가 재료(§7-2 반영).

---

## 4. 상위 글 원문 정독

> 🔴 헤딩은 축어. 원문 수집 결과: tr.wikipedia ✅ · rangecraft ✅(WebFetch) · sporara ✅(firecrawl, 본문 직접 확인) · drkeremkaya ✅(WebFetch·firecrawl 실패 후 Playwright로 http 접속해 수집).

### 4-1. tr.wikipedia.org/wiki/Poker (poker terimleri 1위)
- 섹션(축어): Amaç · Genel Bilgiler · Ellerin Değerleri · Terimler · Kurallar · Kartların Dağıtılması · Oyuna Başlama · 1. Konuşma · Kart İsteme · Oynama (2. Konuşma) · Stratejiler · Jargon · Kaynakça
- «Terimler» 절 = **18개**(직접 셈: Kav · Ganyota-mano · Tek · Çift kart · Dol/Dol ver/Doldur · Pot · Giriş · Açık · Görmek · Artırmak · Maksimum bahis · Bop · Pas · Blöf · Rest (All-in) · Rölans · İflas · Düğme). (WebFetch 요약은 «14»라 답했다 — 틀림. 축어 목록을 직접 셌다.)
- 축어 정의 중 L3 관련: «**Rest (All-in):** Önündeki tüm parayı bahse koymaya denir.» · «**Bop:** İlk konuşma sırasında … hiçbir oyuncu bahis yapmamış veya artırmamış ise sırası gelen oyuncu bahis yapıp oyunu açmak istememesine rağmen oyunda kalıp … söylediği sözdür.»(= check와 같은 기능) · «**Pas:** O tur oyuna girmeyeceğini veya o tur devam ederken oyundan çıkmak için söylenen sözdür.»(= fold) · «**Rölans:** Düşünmek için süre istemektir.»
- 🔴 **오류**: Rölans 정의가 TDK와 정반대다. TDK = «Konken, poker vb. oyunlarda ortaya sürülmüş olan parayı artırmak için söylenen söz»(= raise). 어원(etimolojiturkce: Fr. relance «kumarda rakibin koyduğu paranın üstüne çıkma»)도 TDK 쪽. → 우리가 바로잡아 쓸 수 있는 차별 포인트.
- 약점: **5장 드로 포커(kart isteme) 기준** — Texas Hold'em 용어(blind·flop·nuts)가 «Terimler»에 없다. 표·FAQ·예시·경험담 없음.

### 4-2. rangecraftpoker.com/tr/help-center/poker-tools-poker-lexicon (8위)
- H1 «Poker sözlüğü» · H2(축어 19개): 🧠 Temel Poker Kelime Hazinesi · 🪑 Pozisyonlar & Masa Muhabbeti · 💬 Bahis Aksiyonları & Çizgiler · 🧑‍🤝‍🧑 Oyuncu Tipleri & Lakaplar · 🃏 El Tanımları & Notasyon · 🌦️ Board Dokusu & Runoutlar · 🧩 El Gücü & Kombinasyonlar · 🔑 Preflop Kavramları & Seçenekler · 🧠 Postflop Taktikleri & Çizgiler · 🎭 Bluff, Aldatma & İmaj · ⚙️ Stratejik Kavramlar & Teori · 👥 Pot Mekaniği & Çok Oyunculu Dinamikler · 💵 Cash Game Ekonomisi · 🏆 Turnuva Terminolojisi · 🌐 Online Poker · 🏛️ Canlı Salon Prosedürleri & Görgü · 💼 Bankroll Yönetimi & Kazanç Oranı · 📊 HUD İstatistikleri & Takip · 📝 Hand History & Topluluk Argosu
- 분량·용어 수: WebFetch 추정 «22.000+ 단어 · 650+ 용어»(**직접 세지 않음 — 추정치**). 형식 = 카테고리별 불릿. FAQ·이미지·경험담 없음.
- 축어 정의: All-in «Kalan tüm chipleri ortaya sürmek.» · Blinds «SB ve BB. Postflop'ta pozisyon dışında oynayan zorunlu bahisler.» · Nuts «Mevcut board'a göre mümkün olan en iyi el (örn. nut flush).» · Tilt «Kötü beat veya sinir bozucu seans sonrası duygusal/kötü oynamak.» · Side pot «Farklı all-in miktarları olduğunda oluşan ana pot ve yan potlar.»
- 약점: **번역투**(«chip», «Runoutlar», 영어 그대로 다수) · 터키 전통어(rest·bop·rölans) 없음 · 질문형 헤딩 0 · 정의만 있고 예시 없음.

### 4-3. sporara.com/blog/poker-terimleri-rehberi-anlam-ve-kullanimlari (3위 · 2024-01-27)
- 헤딩(축어, 본문만): H2 «Poker Terimleri ve Anlamları» · H3 «Poker El Sıralamaları ve Değerleri» · H3 «Oyun Dinamikleri ve Stratejileri» · H3 «Poker Terimleri Sözlüğü» · H3 «Pokerde Sık Karşılaşılan Oyun Tipleri» · H3 «Poker Terimleri Tablosu» · H2 «Poker Terimleri Rehberi: Anlam ve Kullanımları hakkında merak edilenler»
- 분량: 본문 약 600단어(파일 904단어 중 사이드바 제외 추정). **«Sözlük» 정의 = 5개**(Ante · Call · Raise · Check · All-in — 직접 셈). 표 = 2행(Royal Flush · Straight Flush). FAQ 3문(Pokerde en güçlü el hangisidir? · Pokerde 'fold' ne anlama gelir? · Bluffing (blöf) pokerde nasıl kullanılmalıdır?). 경험담·핸드 예시 0. 족보 영어명만(Floş·Kent 없음).
- 축어: «**All-in:** Oyuncunun elindeki tüm çipleri pota koymasıdır.» · «…bluffing (blöf) ve **fold (pas)** gibi kavramlar…» · «**Check:** Bahis artırmadan sırayı sonraki oyuncuya pas geçme eylemidir.» → 한 글 안에서 «pas»가 fold이자 check의 설명어로 둘 다 쓰임(아래 §6-4 pas 갈림과 같은 현상).
- §13 점검: 족보 순서 10개 정확. «Flush: Herhangi beş kartın aynı renkte olması» — 터키 카드 용어에서 «renk»=무늬라 오류 아님.
- 약점: 얇음(5개 정의로 3위 — **이 키워드의 경쟁 강도가 낮다는 증거**).

### 4-4. drkeremkaya.com «Poker Terimleri Nelerdir?» (5위 · 2023-07-01) — ✅ Playwright 직접 수집
- 수집: 레포 임시 .mjs(playwright) — https는 ERR_CONNECTION_CLOSED, **http로 열림**. 스크립트는 수집 후 삭제.
- 헤딩(축어): 본문 안 H2/H3 **0개**. 글 제목만 H1/H3 «Poker Terimleri Nelerdir?», 본문 첫 줄 «100 Poker Terimi»(일반 텍스트). 나머지 H2/H3는 사이드바(«Hastalık yoktur hasta vardır!!» · «Satranç Zeka Geliştirir mi?» · «Somon DNA Nedir?…» 등 — 건강·잡학 블로그).
- 분량·형식: 본문 **1.069단어** · «N-용어: 정의» 번호 줄 **100개(1~100 빠짐 없음 — 직접 셈)** · 표 0 · 이미지 3 · FAQ 0 · 경험담 0 · 핸드 예시 0 · 터키 전통어(rest·bop·rölans) 0.
- 축어 정의(L3 관련): «2-All-In: Oyunun tamamına sahip olduğunuz tüm paranızı ortaya koymak.» · «3-Blinds: Oyunun belirli bir aşamasında iki oyuncunun zorunlu olarak yaptığı bahisler. "Small blind" (küçük kör) ve "big blind" (büyük kör) olarak adlandırılırlar.» · «32-Nuts: O anki eli en güçlü olan el.» · «35-Side Pot: Bir oyuncunun tüm bahsi karşılayamadığı durumda, diğer oyuncuların oluşturduğu ikincil pot.» · «50-Tilt: Bir oyuncunun duygusal olarak kontrolünü kaybetmesi ve mantıksız kararlar alması durumu.» · «86-Straddle: Big blind'dan daha yüksek bir bahis yapma seçeneği.»
- 🔴 오류·결함(축어 근거):
  - **중복**: «54-Check-Raise»와 «97-Check-Raise»가 같은 문장 → 「100개」는 실제 99개 고유 용어.
  - «98-Continuation Bet: Flop turundan sonra başlayan oyuncunun bahis yapması.» — c-bet은 «프리플롭 마지막 공격자가 플롭에서 다시 베팅»이다. 정의가 틀렸다.
  - «100-Value Town: Bir oyuncunun yaptığı bahsin diğer oyuncular tarafından yanlış bir şekilde değerlendirildiği durumda kullanılan bir terim.» — 실제 뜻(약한 상대에게서 가치를 뽑는 얇은 밸류 베팅)과 다르다.
  - «32-Nuts: O anki eli en güçlü olan el» — «보드 기준 가능한 최강 핸드»라는 핵심이 빠져 «지금 가장 센 손»과 구분이 안 된다.
  - «86-Straddle» — 카드 보기 전에 거는 자발적 블라인드(보통 2BB)라는 핵심 누락.
- 차별화 시사: 이 글도 «blind = küçük kör/büyük kör»를 병기한다(지식 패널과 같은 용어) → blind 글에 이 병기를 넣는 처방(§7-3)의 근거 하나 추가.

### 4-5. 1차 출처 — TDK 사전(sozluk.gov.tr/gts, 축어)
| 단어 | TDK 정의(포커 관련 행만) |
|---|---|
| rest | «Pokerde, bir oyuncunun önündeki paranın tümü» · «Karşı çıkış» |
| bop | «Poker oyununda, oyuna girmek için ortaya konması gereken en az miktar» · «İskambil oyunlarında ortadaki miktar kadar oyuna katıldığını belirten bir söz» |
| rölans | «Konken, poker vb. oyunlarda ortaya sürülmüş olan parayı artırmak için söylenen söz» |
| pas | «Bazı iskambil oyunlarında sırası kendisine gelen oyuncunun oyuna o elde katılmayacağını belirten bir söz» · «Bazı iskambil oyunlarında "geçiniz" anlamında bir söz» |
| floş | «Poker oyununda aynı renkten ve aynı türden beş kâğıt» |
| pot | «Poker vb. iskambil oyunlarında oyuncuların tamamının ortaya sürdüğü eşit miktardaki para veya fiş» |
| blöf | «İskambil oyunlarında elindeki kâğıtları olduğundan başka gösterme davranışı» |
| fiş | «Kumarda, bazı alışveriş işlerinde para yerine kullanılan pul vb. şey» |
| kent | 포커 정의 없음(«şehir»만) |
| gördüm | 표제어 없음 |
| kör | 포커 정의 없음 |

> ⚠️ «bop»은 출처마다 갈린다: TDK = 최소 참가액(ante/blind 성격) + «참가한다는 말» · 위키 = check 기능 · eurodict/seslisozluk = ante. **글에서 «bop = check»로 단정하지 말 것.** «전통 5장 포커에서 쓰던 말, 오늘날 Hold'em 앱에선 대략 X에 해당» 식으로 출처 병기.

---

## 5. 장단점 표 (상위 글 공통)

| 공통 강점(우리가 반드시 갖출 것) | 공통 약점(우리가 차별화할 것) |
|---|---|
| 용어 수가 많다(rangecraft 추정 650+, drkeremkaya 번호 100개 = 고유 99) — 탐색형 독자는 «다 있는 목록»을 원한다 | **터키 전통어 ↔ Hold'em 영어어 대응표가 어디에도 없다**(rest=all-in · rölans=raise · gördüm=call · pas=fold/check · bop · kav · kent=straight · floş=flush) |
| 위키·TDK식 짧은 1문장 정의(스니펫 친화) | 위키 «Rölans = düşünmek için süre istemek» **오류**, sporara는 «pas»를 fold·check 양쪽에 혼용 |
| 카테고리 분류(rangecraft 19개 H2) | 질문형 헤딩 0(«pokerde X ne demek» 자동완성 15개를 아무도 H2로 안 받음) |
| 위키의 권위 | 위키·scribd = **5장 드로 포커 기준**, Hold'em 용어 부재 |
| — | drkeremkaya: c-bet·value town 정의 오류 · Check-Raise 중복 · 본문 헤딩 0 |
| — | 예시·경험담·숫자 0 · FAQ는 sporara 3문뿐 · 표는 sporara 2행 |
| — | blind·all-in 단독 터키어 글이 SERP에 **없다**(영어 사이트·사전만) |

---

## 6. 우리 글 대조

### 6-1. holdem-blind-meaning (16KB · updated 2026-10-06)
- seoTitle «Kartını görmeden neden çip koyuyorsun? — Small ve big blind» · desc «İki oyuncu daha kart dağıtılmadan para koyar, neden? Small blind ve big blind nedir, kim koyar, SB ve BB tutarları, big blind ante ve heads-up kuralları.» · H1(title) «Pokerde blind nedir? Small blind ve big blind, en sade haliyle»
- H2: Pokerde blind nedir — ve neden var? · Small blind nedir? · Big blind nedir? · Small blind ve big blind kuralları: kim koyar, ne zaman? · Blind'lar ne kadar olur? Cash ve turnuvada seviyeler · Big blind ante nedir? (Bir de straddle) · Heads-up pokerde blind'ları kim koyar? · Blind'ını kaçırırsan ne olur? (Dead blind'lar) · Blind'lardan nasıl oynanır — 30 saniyelik versiyon · Sıkça sorulan sorular · Aklında kalması gerekenler
- FAQ 8: Kartlarını görmeden neden blind ödemek zorundasın? · Big blind mı önce konuşur, small blind mı? · Small blind her zaman big blind'ın tam yarısı mıdır? · Kimse yükseltmezse big blind sadece check yapabilir mi? · Blind koyduktan sonra fold edebilir misin? · Heads-up pokerde blind'ları kim koyar? · Blind'ını kaçırırsan ne olur? · "Big blind" ile "blind'lar" aynı şey mi?
- ✅ 이미 이기는 점: 영어 PAA 6개 중 5개를 이미 터키어 FAQ로 가짐(Can a big blind fold → «Blind koyduktan sonra fold edebilir misin?» · Does SB go first → «Big blind mı önce konuşur…» · How big is a SB → «tam yarısı mıdır?» · Does SB have to match BB → 규칙 절 · What is SB and BB). 터키어 경쟁 페이지 0.
- ❌ 빠진 것: ① **«kör bahis / küçük kör / büyük kör»** 0회(지식 패널 용어) ② PAA «Is small blind or big blind better?» 대응 H2/FAQ 없음 ③ «small blind big blind» 정확 구문이 seoTitle·H1에 없음(«Small ve big blind») ④ 전통어 «bop»(TDK: 최소 참가액)과 blind의 관계 언급 없음 ⑤ `/tr/glossary` 링크 0.

### 6-2. holdem-all-in-rules (19KB)
- seoTitle «All-in gittin ama ne kazanırsın? — All-in ve yan pot kuralları» · desc «Tüm çiplerini ortaya sürdün ve krupiye çipleri iki yığına ayırıyor. Texas Hold'em all-in kuralları: table stakes, ana pot, yan pot ve showdown.» · H1 «Texas Hold'em all-in kuralları: yan potlar, yeniden yükseltme ve showdown»
- H2: All-in nedir? Texas Hold'em'de all-in gitmek ne demek? · All-in nasıl ilan edilir · Pokerde yan potlar nasıl işler? (All-in oyuncu neden sınırlanır) · All-in bahsi yeniden açar mı? — Çoğu oyuncunun yanlış bildiği kural · All-in showdown kuralları · All-in'i yanlış gidersen ne olur? — Kaçınılması gereken 5 hata · Sıkça sorulan sorular
- FAQ 7: Big blind'dan az bir miktara all-in gidilebilir mi? · All-in'i kazanıp yan potu kaybedersen ne olur? · All-in gitmek elini açmaya zorlar mı? · Poker all-in'inde "run it twice" yapılabilir mi? · "Table stakes" kuralı tam olarak nedir? · İki oyuncu farklı miktarlarda all-in giderse önce kim gösterir? · All-in kuralları turnuvalarda ve cash oyunlarında farklı mı?
- ✅ 이기는 점: 3·4인 yan pot 계산 예시, 재오픈 규칙 — 경쟁 글 어디에도 없는 깊이.
- ❌ 빠진 것: ① **«rest» 0회**(터키 포커의 all-in 고유어 · «pokerde rest ne demek» 70+70) ② PAA «Kumarda rest çekmek ne demek?» · «Rest nedir poker?» · «Pokerde rest çekmek ne demek?» 미대응 ③ 관용구 «rest çekmek»의 포커 기원 한 줄(1.600 SERP의 AI Overview가 이 문장을 원한다 — 인용 패시지 후보) ④ `/tr/glossary` 링크 0. («yan pot»은 볼륨 0이므로 현 구조 유지.)

### 6-3. holdem-glossary (30KB · 2026-10-06 신규)
- seoTitle «Nuts, tilt, ICM ne demek? Poker terimleri sözlüğü» · desc «Masada duyduğun poker terimleri sade Türkçeyle: bahis hareketleri, pozisyonlar, eller, argo, ICM ve tilt. En çok karıştırılan ikililer de en başta.» · H1 «Poker terimleri: Texas Hold'em masasında duyacağın her kelime ve anlamı»
- H2: En çok karıştırılan poker terimleri hangileri? · Check, call, raise ne demek? Bahis hareketleri terimleri · UTG, buton ve cutoff nedir? Pozisyon terimleri · Nuts, set ve trips nedir? El ve board terimleri · Fish, shark, nit kimdir? Oyuncu tipleri ve poker argosu · Rake, buy-in ve ICM nedir? Para ve oyun formatı terimleri · Showdown, tilt ve VPIP ne demek? Durum, istatistik ve adap terimleri · Sıkça sorulan sorular · Sırada ne var?
- FAQ 10: Yeni başlayan birinin bilmesi gereken en temel poker terimleri hangileri? · Pokerde UTG (under the gun) ne demek? · Check ile call arasındaki fark nedir? · Set ile trips arasındaki fark nedir? · Cooler ile bad beat arasındaki fark nedir? · Pokerde 3-bet nedir ve neden ilk raise "1-bet" değildir? · Pokerde "nuts" ne demek? · Pokerde ICM nedir? · Pokerde tilt nedir? · Poker istatistiklerinde VPIP ve PFR ne demek?
- ✅ 이기는 점: 질문형 H2 7/9 · FAQ 10 · 혼동 쌍 표 · 계산기·확률 링크 — 1페이지 어느 글보다 구조가 낫다.
- ❌ 빠진 것: ① **터키 전통어 0**(rest·bop/bob·rölans·gördüm·pas·kav — «pokerde X ne demek» 자동완성의 절반이 이 단어들) ② seoTitle 앞자리 «Nuts, tilt, ICM ne demek?» — 셋 다 헤드가 비포커 SERP(§3-7·3-8)라 훅으로만 기능, 키워드 효과 없음 ③ «poker terimleri ve anlamları»(자동완성 1위) 구문 없음 ④ **`/tr/glossary` 도구 링크 0** ⑤ PAA «Pokerde floş ne demek?»는 hand-rankings 몫이지만 glossary에서 앵커 위임 문장 없음.

### 6-4. 회차 1 미결 «pas 갈림»에 대한 1차 출처 판정 재료
TDK가 **두 뜻을 모두 등재**한다: ① «oyuna o elde katılmayacağını belirten söz»(= fold) ② «"geçiniz" anlamında bir söz»(= check). 위키 «Pas»는 ①, sporara는 «fold (pas)»(①) + check 설명에 «pas geçme»(②). → «pas»는 **문맥 의존 단어**라 betting-actions(check)·코퍼스(fold) 어느 쪽도 «오류»는 아니다. 권고: 용어집에 «pas — 전통 터키 테이블에선 두 뜻으로 쓰인다: 패를 접을 때도, 베팅 없이 넘길 때도. Hold'em 앱에서는 혼동을 피하려 fold/check를 그대로 쓴다» 한 항목을 두고, 본문 표기는 dict.ts 규칙(fold ≠ pas) 유지. 최종 결정은 헤드(회차 1 ① 미결 그대로).

---

## 7. 처방 (글 수정 지시서)

### 7-1. holdem-glossary — 우선순위 **1**
- **seoTitle 후보**(훅 유지 + 주력어 앞):
  - A «Poker terimleri ve anlamları — rest, bop, nuts, tilt ne demek?» (약 60자 · 약간 김)
  - B «Poker terimleri: rest, bop, nuts ne demek? Masa sözlüğü» (약 54자)
- **desc 후보**: «Masada duyduğun poker terimleri ve anlamları sade Türkçeyle: rest, bop, rölans gibi eski masa sözleri, check-call-raise, nuts, ICM ve tilt. Karışanlar en başta.» (≤160자 — 발행 전 실측)
- **H2 신설**(질문형 · 자동완성 축어):
  - «**Pokerde rest, bop, rölans ne demek? Eski Türk masa terimleri**» — 직답 40~75단어 + 대응표(전통어 | 뜻(TDK 축어 인용) | Hold'em에서의 대응어 | 주의). 행: rest(→all-in, 상세는 all-in-rules 앵커) · bop/bob(출처별 뜻 갈림 명시) · rölans(→raise · **위키의 «düşünmek için süre istemek»은 TDK·어원과 다름** 한 줄) · gördüm(→call · 표제어 없음이므로 «masa ağzı»로 표기) · pas(§6-4 두 뜻) · kav(위키 «oyun başlangıcında elde mevcut olması gereken para» → buy-in에 가까움) · kent·floş(→hand-rankings 앵커 위임)
  - 기존 «Check, call, raise ne demek?» H2 아래에 «pokerde call/check/fold ne demek» 축어 소제목 흡수(H3 또는 표 첫 열 굵게)
- **FAQ 추가**(PAA·자동완성 축어 기반):
  - «Pokerde rest ne demek?» → 한 문장 정의 + all-in-rules 링크(소유는 all-in 글 — 여기선 2문장 이하)
  - «Pokerde bop ne demek?» → 출처 갈림 정직하게
  - «Poker terimleri Türkçe mi İngilizce mi kullanılır?»(자동완성 «poker terimleri türkçe/ingilizce») → 앱·토너먼트는 영어, 동네 masa는 전통어 — **경험담 자리**
  - «Pokerde floş ne demek?»(PAA) → 1문장 + hand-rankings 앵커(주인은 L2)
- **차별화**: TDK 축어 인용(1차 출처) · 위키 오류 교정 한 줄 · 전통어↔Hold'em 대응표(1페이지 어디에도 없음) · 경험담(동네 masa에서 «rest!» 듣던 장면 — 작성자 실경험 확인 후).
- **링크**: 도입부 또는 «Sözlük, bir bakışta» 직후 `/tr/glossary`(«46 terimi A–Z ara») 1개 + «Sırada ne var?»에 1개.
- **하지 말 것**: «tilt olmak/tilt ne demek»(4.400)·«nuts nedir»(880) 헤드를 seoTitle 맨 앞에 두는 것 — SERP가 비포커.

### 7-2. holdem-all-in-rules — 우선순위 **2**
- **seoTitle 후보**:
  - A «All-in gittin ama ne kazanırsın? Rest ve yan pot kuralları» (약 57자 · 훅 유지)
  - B «Pokerde rest (all-in) ne demek? Yan pot ve showdown kuralları» (약 60자)
- **desc 후보**: «Pokerde rest, yani all-in: tüm çiplerini ortaya sürdün, krupiye çipleri iki yığına ayırıyor. Table stakes, ana pot, yan pot ve showdown kuralları örnekle.» (≤160자 실측)
- **H2 개명**: «All-in nedir? Texas Hold'em'de all-in gitmek ne demek?» → «**All-in (rest) nedir? Pokerde rest çekmek ne demek?**» — 직답 40~75단어: TDK 정의 축어 인용 + Hold'em에선 «all-in» 표기가 표준 + 관용구 «rest çekmek»이 여기서 나왔다는 한 줄(인용 패시지 · AI Overview «Oyun terimi» 문장을 겨냥).
- **FAQ 추가**: «Kumarda rest çekmek ne demek?»(PAA 축어 — 단 «kumar»는 질문 축어로만, 본문 프레이밍은 «poker masası») · «Poker rest çekmek ne demek?»(PAA 축어 · §3-16) · «**Reste rest ne demek?**»(PAA 축어 · §3-16 — 상대 all-in에 남은 칩 전부로 맞받는 것 = call / 더 큰 스택이면 재raise 여부는 «All-in bahsi yeniden açar mı?» 절 앵커) · «Rest ile all-in aynı şey mi?» · «Rest çekip kaybedersen ne olur?»(table stakes — 기존 절 앵커). 7문 → 많으면 앞 셋 우선.
- **차별화**: 이미 강함(3·4인 yan pot 계산). 추가로 «rest» 장면 경험담 1개. §13: 새 핸드 예시를 넣으면 7장·베스트5 검산 필수.
- **카니발**: «rest» 정의의 주인 = 이 글. glossary는 2문장 + 링크로 위임.
- `/tr/glossary` 링크 1개(용어 첫 등장 시).

### 7-3. holdem-blind-meaning — 우선순위 **3**
- **seoTitle 후보**:
  - A «Small blind big blind nedir? Kartı görmeden çip koymak» (약 53자)
  - B «Kartını görmeden neden çip koyuyorsun? Small blind, big blind» (약 60자 · 현 훅 유지형)
  - ❌ «Blind nedir»로 시작하지 말 것(SERP = 영어사전).
- **desc 후보**: «Small blind ve big blind (küçük kör, büyük kör) nedir, kim koyar, ne kadar olur? SB-BB sırası, big blind ante ve heads-up kuralları tek yazıda.» (≤160자 실측)
- **H2 추가/개명**:
  - «Pokerde blind nedir — ve neden var?» 직답에 «Türkçede kör bahis; small blind = küçük kör, big blind = büyük kör» 한 문장(지식 패널 용어 흡수).
  - 신설 «**Small blind mı big blind mı daha kötü pozisyon?**»(PAA «Is small blind or big blind better?») — 직답 40~75단어. 🔴 수치는 `docs/solver-factsheet.md`·우리 솔버에서 확인된 값만(추측 금지). 핸드 차트는 `/tr/hand-chart` 앵커.
- **FAQ 추가**: «Small blind big blind'ı tamamlamak zorunda mı?»(PAA «Does small blind have to match big blind?» — 규칙 절 앵커) · «Eski Türk masasında blind yerine ne vardı? (bop / kav)» — TDK 축어, glossary 앵커 위임.
- **차별화**: 터키어 페이지 0인 SERP — 정확한 규칙 + 수치 표(이미 있음)로 충분. 영상 팩이 뜨는 SERP라 기존 이미지 alt에 «small blind big blind» 자연 포함 검토.
- `/tr/glossary` 링크 1개.

### 7-4. 🔴 카니발 판정: 글 holdem-glossary vs 도구 `/tr/glossary`
- **현 상태**: 도구 title «Poker Terimleri Sözlüğü A–Z — Texas Hold'em Terimleri» · H1 «Poker Terimleri Sözlüğü» · keywords에 «poker terimleri»(260)·«poker terimleri ve anlamları»·«tilt nedir»·«nuts nedir»까지 포함. 글 seoTitle도 «… Poker terimleri sözlüğü». `dict.ts` 주석(L12~15)은 «머리어 = 도구, 질문형 의도 = 글»로 나눴다. 두 URL이 같은 헤드를 들고 있다.
- **SERP 근거**: «poker terimleri» 1페이지 = 정의를 설명하는 **문서형**(위키·PDF·블로그 2·포럼·help center 목록). 검색 도구형 페이지는 rangecraft 1개뿐이고 그것도 정적 목록이다. PAA는 «Pokerde floş ne demek?»·«Pokerin kuralları nelerdir?» 등 **설명 요구**. 자동완성 1위 «poker terimleri ve anlamları» = «뜻 설명» 의도.
- **판정**: **«poker terimleri»·«poker terimleri ve anlamları»·«poker terimleri nelerdir»·«pokerde X ne demek» = 글(holdem-glossary)이 주인.** 도구는 **«poker sözlüğü»·«poker terimleri sözlüğü»(10)·A–Z 검색 유틸** 의도의 주인.
  - 근거 ① SERP가 문서형 ② 글은 30KB·FAQ 스키마·경험담·질문형 H2, 도구는 46개 1~3문장 정의(얇다) ③ 메모리 «도구vs블로그 카니발 = 블로그가 이기나로 판정» 기준에서 블로그 승 ④ 메모리 «도구로 몰아주기 확정»의 대상(차트·계산·대회·솔버)에 용어집은 없다.
- **처방**:
  - 도구 `seo.title` → «Poker Sözlüğü A–Z: 46 Terimi Ara — Texas Hold'em» 류(«Poker Terimleri» 머리어 반납). H1 «Poker Terimleri Sözlüğü»는 side-rail 축어 규칙 때문에 유지 가능(헤드 결정).
  - 도구 `keywords`에서 «poker terimleri ve anlamları · icm nedir · tilt nedir · nuts nedir · pokerde nuts ne demek» 제거.
  - 도구 description 첫 머리 = «A–Z ara/filtrele»(유틸 의도), 글로 가는 «Terimlerin hikâyesi ve örnekleri için rehbere» 링크(related에 holdem-glossary 있는지 확인).
  - 글 → 도구 링크 2개(§7-1).
  - 🔴 이 판정은 `dict.ts` 주석(회차 3 결정)과 반대다 → **헤드 승인 사항**. 승인 시 `dict.ts` 주석 L12~15 갱신 + `check:seo-sync` 통과 확인.
- 전통어(rest·bop·rölans) 항목을 도구 46개에 추가할지: 글에 먼저 쓰고(글이 정의 원천 — 회차 3 규칙) 다음 도구 갱신 때 축어로 옮긴다.

### 7-5. 타 레인 위임 메모
- «pokerde floş/kent ne demek»(50/40) · PAA «Pokerde en yüksek kart hangisidir?» → **L2 hand-rankings** 주인. glossary는 앵커만.
- «pokerde call/check/fold/pot ne demek»(20 각) → L1 betting-actions가 주인일 수 있음 — glossary에 정의 1문장 + betting-actions 앵커. L1 보고서와 대조 필요.
- «Pokerin kuralları nelerdir?»·«Poker kaç kart dağıtılır?»(PAA) → L1 필라.

---

## 8. 처방 요약 (글별 우선순위)

| 순위 | 글 | 흡수할 검색 수요(월) | 갭 크기 | 핵심 처방 | 비고 |
|---|---|---|---|---|---|
| 1 | holdem-glossary | poker terimleri 260 + ve anlamları 30 + «pokerde X ne demek» 꼬리(bob 50·bop 40·rölans 20·bop nedir 20·ante 10·gördüm 10·dealer 10 …) ≈ **450+** | 큼(전통어 0 · 도구 링크 0 · 카니발) | 전통어 대응표 H2 · TDK 인용 · seoTitle «Poker terimleri» 앞으로 · 도구 링크 2 | 카니발 처방 = 헤드 승인 |
| 2 | holdem-all-in-rules | pokerde rest ne demek 70 + poker rest ne demek 70 + pokerde rest 20 + 꼬리 ≈ **170** (+ rest çekmek 1.600 SERP의 AI Overview 인용 기회) | 큼(rest 0회) | H2 «All-in (rest) nedir?» · rest FAQ 3 · seoTitle에 «Rest» | yan pot은 볼륨 0 — 구조 유지 |
| 3 | holdem-blind-meaning | small blind big blind 20 + small/big/poker blind 30 + sb bb 10 ≈ **60** | 중(경쟁 터키어 0 · 용어 «kör bahis» 0) | seoTitle «Small blind big blind nedir?» · «küçük kör/büyük kör» · SB vs BB H2 | «blind nedir» 헤드 금지 |
| — | `/tr/glossary` 도구 | poker sözlüğü / terimleri sözlüğü ≈ 10 | — | title·keywords에서 «poker terimleri» 반납 | 헤드 결정 |

---

## 9. 커버리지 표 (브리프 1~4 · 검색어별)

| 검색어 | 1 볼륨 | 2 자동완성 | 3 SERP+PAA | 4 원문 정독 | 비고 |
|---|---|---|---|---|---|
| blind nedir | ✅ 70 | ✅ | ✅ | ✗ 이유: 1페이지에 포커 글 0(사전만) | |
| blind ne demek | ✅ 2.400 | ✅(«blind nedir»·«pokerde blind») | ✅ 보강(§3-14) 포커 0/9 | ✗ 포커 글 0 | |
| rest ne demek | ✅ 5.400 | ✅(«pokerde rest»·«poker rest») | ✅ 보강(§3-12) 포커 뜻 3/8 | ✗ 포커 글 0(사전만) | |
| poker rest ne demek | ✅ 70 | ✅ | ✅ 보강(§3-16) 포커 관련 6/10 | ✗ 규칙 글 0(포럼·앱) | |
| tilt ne demek | ✅ 4.400 | ✅(«tilt nedir») | ✅ 보강(§3-13) 포커 0/7 | ✗ 포커 글 0 | |
| bop ne demek | ✅ 2.400 | ✅(«pokerde ne demek» 안 bop/bob) | ✅ 보강(§3-15) 포커 0/8 | ✗ 정치 BOP | |
| small blind big blind | ✅ 20 | ✅(«small blind») | ✅ | ✗ 이유: 상위가 전부 비터키어 — tr 경쟁 글 없음 | |
| poker blind / pokerde blind | ✅ 10 / null | ✅ | ✗ 이유: 볼륨 미미, small blind big blind SERP로 대표 | ✗ | |
| all in nedir | ✅ 10 | ✅ | ✅ | ✗ 이유: 포커 글 0(IT·물류) | |
| all in ne demek | ✅ 320 | ✗ 이유: «all in nedir»·«poker all in»으로 대체 | ✅ | ✗ 포커 글 0 | |
| all in kuralları | ✅ null | ✗ 이유: null·«poker all in» 자동완성으로 대체 | ✗ 이유: 볼륨 null | ✗ | |
| pokerde rest ne demek | ✅ 70 | ✅(«pokerde rest») | ✅ | ✗ 이유: 상위 전부 사전·포럼 — 정독할 «글» 없음 | TDK 1차 출처로 대체 ✅ |
| rest çekmek ne demek | ✅ 1.600 | ✅(«poker rest») | ✅ | ✗ 관용구 의도 | |
| rest poker | ✅ 110 | ✅ | ✅ | ✗ 앱 브랜드 | |
| yan pot / side pot | ✅ null / 10 | ✅(포커 0) | ✗ 이유: 볼륨 0 | ✗ | |
| poker terimleri | ✅ 260 | ✅ | ✅ | ✅ wiki · rangecraft · sporara · drkeremkaya(Playwright) — 상위 5 중 실제 글 4편 전부 | |
| poker terimleri ve anlamları | ✅ 30 | ✅(위에 포함) | ✗ 이유: 같은 의도로 판단, 미조회 | ✗ | |
| tilt nedir | ✅ 140 | ✅ | ✗ 이유: 자동완성 15/15 비포커 → «tilt olmak»으로 대표 조회 | ✗ | |
| tilt olmak | ✅ 480 | ✗(«tilt nedir»·«poker tilt»로 대체) | ✅ | ✗ 포커 글 0 | |
| nuts nedir | ✅ 880 | ✅ | ✅ | ✗ 포커 글 0 | |
| pokerde bop ne demek | ✅ 40 | ✅ | ✅ | ✗ 정독할 글 없음 → TDK ✅ | |
| rölans ne demek | ✅ 320 | ✅(«pokerde ne demek» 안) | ✅ | ✗ 포커 글 0 → TDK·어원 ✅ | |
| pokerde * ne demek (꼬리 30여 개) | ✅(2배치) | ✅ DFS 15 + 라쿠 72 | ✗ 이유: 대표 3개(rest·bop·rölans)만 조회 | ✗ | |
| 라쿠 | suggest ✅(지표 null) · question-search ✅(0건) · metadata-locations ✅(TR 있음, 순위·볼륨 이력 전용) | | | | |

**보강 완료(2차)**: ① drkeremkaya 본문 수집(번호 100 = 고유 99, 헤딩 0, 오류 4건) ② 고볼륨 5개 SERP 직접 조회 — 1차 비포커 판정 **전부 유지**, 처방·우선순위 변동 없음(all-in FAQ에 PAA «Reste rest ne demek?»·«Poker rest çekmek ne demek?»만 추가).
**남은 것**: 비동기 AI Overview(«all in ne demek»·«rölans ne demek»·«bop ne demek») 본문 미수신 — DataForSEO가 본문을 주지 않음, 결론엔 영향 없음.
