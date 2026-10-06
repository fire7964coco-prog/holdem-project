# L4 확률·대회 — tr SERP 조사 (2026-10-06)

> 브리프 = `00-brief.md` · 대상 글 4편: `holdem-pot-odds` · `holdem-probability` · `holdem-tournament` · `holdem-tournament-vs-cash-game`
> 소유 경계(`docs/tr-cluster-plan.md` §3): 계산 의도(«hesaplama/hesaplayıcı», calculator) = `/tr/calculator` · 대회 일정·지역(«poker turnuvası», kıbrıs, merit) = `/tr/tournaments`. 글은 개념(«nedir/nasıl»)·구조·전략 의도만 맡는다.
> 도구: DataForSEO(2792 · tr) 볼륨·자동완성·SERP / 라쿠 suggest / 원문은 exa web_fetch(전문 마크다운) + WebFetch(헤딩 축어). 수치는 전부 원문에서 직접 읽었고, 경쟁 글 수치는 아래 §4에서 하나씩 손으로 검산했다.

---

## 1. 검색어 확장 (볼륨 · DataForSEO Google Ads · 월평균)

| 검색어 | 볼륨 | 메모 |
|---|---|---|
| **icm nedir** / ıcm nedir | **170** | 같은 시계열. 2025-11 260 → 2026-07·08 **90**으로 하락세. 🔴 **포커 의도 아님이 다수**(§3 SERP: 의학·금융·에라스무스·전기) |
| icm poker | 10 | |
| **poker turnuvası** = poker turnuva = poker turnuvaları | **110** | 세 표기가 같은 시계열(Ads 그룹핑 — 합산 금지). 2026-03 **390** 스파이크(Kıbrıs 대회 시즌 추정). 주인 = `/tr/tournaments` |
| poker turnuvası izle | 20 | 2025-11 170 스파이크(중계 의도) — 조준 안 함 |
| türkiye poker turnuvası · dünya poker turnuvası | 10 · 10 | 지역·뉴스 의도 → `/tr/tournaments` |
| poker turnuvası nasıl oynanır · poker turnuvası nedir · poker turnuvası online | 데이터 없음 | 자동완성에는 뜬다(수요는 있으나 Ads 임계 이하) |
| cash game | 20 | 상승세(2025-09 10 → 2026-08 30) |
| cash game poker | 10 | |
| cash game nedir · turnuva mı cash game mi | 데이터 없음 | |
| pot odds | 10 | 12개월 내내 10 |
| pot odds poker · implied odds | 10 · 10 | |
| pot oranı · pot odds nedir · pot odds hesaplama · pot oranı hesaplama | 데이터 없음 | «pot oranı» 자동완성은 potasyum(칼륨)으로 샌다 → 터키어 단독 용어로는 거의 안 친다 |
| poker olasılıkları · poker olasılık | 10 · 10 | |
| poker olasılık hesaplama programı · poker ihtimal hesaplama programı | 10 · 10 | 계산 의도 → `/tr/calculator` 주인 |
| poker ihtimalleri · poker el ihtimalleri · poker el olasılıkları · poker el kazanma olasılıkları · poker royal flush ihtimali · royal flush olasılığı | 데이터 없음 | 자동완성에는 전부 뜬다 |
| poker odds calculator | 40 | 영어 그대로 검색 — 계산 의도 → `/tr/calculator` |
| poker odds · poker equity · poker outs · poker bankroll · poker hesaplayıcı · pko poker · bounty poker | 각 10 | |
| outs nedir · 2 ve 4 kuralı · freezeout nedir · satellite turnuva · poker ihtimal · poker hesaplama | 데이터 없음 | |

**라쿠**: `metadata-locations`에 Turkiye(국가·도시)는 있으나 그건 `search-volume-history`/`search-rank-history` 전용이다. `suggest-keywords`는 location 인자가 없다(일본 고정 지표) — 터키어 제안어는 돌아오지만 **지표는 전부 null**. 그래서 볼륨은 DataForSEO만 근거로 썼고 라쿠는 관련어 발굴에만 썼다.
- `poker olasılık` → poker olasılıkları · poker olasılık hesaplama programı · poker el kazanma olasılıkları (3개, DFS 자동완성과 같음)
- `poker turnuva` → 31개. L4에 의미 있는 새 항목: **poker turnuvalarına nasıl katılabilirim** · poker turnuvası nedir · poker turnuvası nasıl oynanır · online poker turnuvaları · texas holdem poker turnuvası kıbrıs · emre özcan poker turnuvası · merit otel/royal poker turnuvası · kuzey kıbrıs poker turnuvaları 2025/2026 (나머지는 지역·연도 변형 → `/tr/tournaments`)

**판단**: L4 전체가 저볼륨(헤드 2개만 100대)이다. 대신 §3에서 보듯 **SERP가 비어 있다** — 터키어 본문 글이 1페이지에 거의 없다. 볼륨보다 «빈 SERP 점령»이 이 레인의 기회다.

---

## 2. 자동완성 (DataForSEO autocomplete · 2792 · tr · 목록 그대로)

- **pot odds**: pot odds calculator · pot odds poker · pot odds formula · pot odds chart · pot odds vs equity · pot odds explained · pot odds calculator poker · pot odds practice · pot odds and equity · pot odds meaning · pot odds vs implied odds · pot odds formula poker · pot odds trainer · pot odds math · pot odds quiz
- **« pot odds»(앞 와일드카드)**: calculating pot odds · como calcular pot odds · calculating pot odds in poker · poker pot odds formula · how to calculate pot odds quickly · omaha pot odds calculator · how to calculate pot odds and equity · como calcular pot odds poker · how to calculate pot odds in poker · poker pot odds calculator · how to calculate pot odds · pot odds · pot odds poker · pot odds formula · pot odds chart
- **pot odds nedir**: 결과 없음(40102)
- **pot oranı**: potasyum oranı kaç olmalı · potasyum oranı nedir · pot analizi · potasyum oranı yüksek · pt oranı (포커 의도 0)
- **poker olasılıkları**: poker el kazanma olasılıkları
- **poker olasılıkları ␣(뒤 와일드카드)**: poker olasılıkları · poker el kazanma olasılıkları · poker olasılık hesaplama programı · poker el olasılıkları
- **poker olasılık**: poker olasılık hesaplama programı · poker olasılıkları · poker el kazanma olasılıkları
- **poker ihtimal**: poker ihtimalleri · poker el ihtimalleri · poker royal flush ihtimali · poker ihtimal hesaplama · poker ihtimal hesaplama programı
- **pokerde outs**: pokerde oyun · pokerde oyundan çekilmek · pokerde en üst el · pokerde en üstün el (outs 의도 0)
- **pokerde ihtimal**: 결과 없음
- **icm nedir**: ıcm nedir · icm nedir tıp · icm nedir finans · icm nedir hukuk · icm açılımı nedir · icm dosyası nedir · ıcm yöntemi nedir · erasmus+ icm nedir · icm kontrolü nedir · icm ne demek · icm neyin kısaltması · icm sistemi nedir · icm ne
- **icm poker**: icm poker meaning · icm poker calculator · icm poker formula · icm poker term · icm poker chart · icm poker chop · icm poker chip calculator · icm poker là gì · icm poker tournament · icm poker explained · icm poker app · icm poker calculator app · icm poker strategy · icm poker deal · icm poker tournament calculator
- **poker turnuvası**: poker turnuvası kıbrıs · poker turnuvası izle · poker turnuvası nasıl oynanır · poker turnuvası nedir · poker turnuvası 2026 · merit poker turnuvası 2026 · merit poker turnuvası 2025 · merit poker turnuvası · kıbrıs poker turnuvası katılım şartları · chamada poker turnuvası · türkiye poker turnuvası · kıbrıs poker turnuvası 2026 · dünya poker turnuvası · kktc poker turnuvası · kıbrıs poker turnuvası 2025
- **poker turnuvası nasıl**: poker turnuvası nasıl oynanır
- **turnuva poker**: poker turnuva · merit poker turnuva · kıbrıs poker turnuva · poker turnuvası türkiye · poker turnuvası online · poker turnuvası
- **cash game**: cash game app · cash gameing · cash gamer · cash game world championship · cash games to play · cash game poker online · cash games free · cash game vs tournament poker · cash game earn money · cash games bet · cash games casino · cash games to win real money · cash game solitaire
- **turnuva mı cash**: 포커 무관(turnuvam com güvenilir mi · turnuva ne zaman bitecek …)

**읽는 법**: 확률·팟오즈 쪽은 터키 사용자도 **영어 용어로 검색**한다(pot odds formula/chart/quiz). 터키어 쪽 수요는 «olasılık/ihtimal» 두 단어로 갈린다 → 글 안에 두 단어를 모두 써야 한다. 대회 쪽은 **지역(Kıbrıs·Merit)과 연도**가 압도적이다(= `/tr/tournaments` 몫). «nasıl oynanır/nedir/nasıl katılabilirim»만 글 몫이다.

---

## 3. SERP 상위 10 + PAA (DataForSEO organic · 2792 · tr · depth 10)

### 3-1. «pot odds»
| # | 도메인 | 제목 | 유형 |
|---|---|---|---|
| 1 | reddit.com | Pot odds'un amacı nedir? : r/poker | 포럼(자동번역) |
| 2 | pokerbankrollapp.com | Poker odds cheat sheet: outs, draws and pot odds | 앱 블로그(영어) |
| 3 | (영상 묶음) | Pot Odds for Dummies 외 3 — 전부 영어 YouTube | 영상 |
| 5 | pinterest.com | Poker Odds & Outs: How to Calculate Them + (Free Chart) | 이미지 |
| 6 | poker.stackexchange.com | Calling Pot Odds vs. Your Opponent's Bluffing Odds | 포럼 |
| 7 | amazon.com | Poker Odds Made Easy: Poker Math Made Easy | 책 |
| 8 | microgrinder.com | Implied Odds Calculator | 도구 |
| 9 | youtube.com | something something pot odds #howtoplaypoker | 영상 |
| 10 | reddit.com | Beginner Question: Pot Odds, Equity, EV Calculation : r/poker | 포럼 |
| 11 | pokercode.com | How to Calculate Implied Odds in Your Games | 블로그(영어) |
- PAA(영어 그대로): What is the 15/25/35 rule in poker? · What is the 7/2 rule in poker? · How often flops a 2 pair? · What is the unluckiest hand in poker? · What does the 80/20 rule mean in poker?
- featured snippet 없음 · AI overview 없음 · **터키어 본문 글 0편**

### 3-2. «pot odds nedir»
1·2·3·7 instagram.com (pokerakademi 릴스 — «Pot Oranları Pot Odds — Bölüm 1» 등) · 4 poker.stackexchange.com · 5 youtube.com/shorts (PokerAkademi «Pot Odds ile Call Kararı») · 6 crushlivepoker.com(영상) · 8 acrpoker.eu «How to read a poker odds table for hands» · 9 twoplustwo 포럼(2013) · 10 pokercode.com
- PAA 없음 · snippet 없음 · AI overview 없음 · **터키어 글 0편**(인스타 릴스가 1~3위를 차지 = 텍스트 공급 공백)
- 참고: 경쟁 터키어 표기는 **«Pot Oranları»(복수)** · «Pot Odds ile Call Kararı» · «callın fiyatı»

### 3-3. «poker olasılıkları»
| # | 도메인 | 제목 | 유형 |
|---|---|---|---|
| 1 | ggpoker.com/tr | Poker Ellerinin Olasılık ve İhtimal Tablosu | 🔴 온라인 포커룸(운영사) |
| 3 | reddit.com | Texas Hold'em'deki tüm temel olasılıkları nerede bulabilirim? | 포럼 |
| 4 | matematikdunyasi.org | Pokerin Matematiği | 잡지(1992) |
| 5 | rangecraftpoker.com/tr | Poker el sıralamaları | 도구 사이트 도움말 |
| 6 | reddit.com | Texas Hold'em poker'da kazanma olasılığı | 포럼 |
| 7 | (영상) | Türkçe Poker Dersleri «Poker El Analizleri» · reddit gif 2 | 영상 |
| 8 | tr.wikipedia.org | Poker | 위키 |
| 9 | gq.com.tr | Blöfçünün Matematik Rehberi(2016) | 잡지 |
- PAA: Pokerde en güçlü el nedir? · Pokerin mantığı nedir? · Pokerde en yüksek kart hangisidir? · Pokerin kuralları nelerdir? · Pokerden para kazanılır mı? · Türk poker nasıl oynanır?
- snippet 없음 · AI overview 없음

### 3-4. «poker ihtimalleri»
1 reddit «Texas Hold'em oyununda kazanma olasılıklarını tahmin et» · 2 reddit «Pot Oranları, Equity & Outs Hesaplayıcısı» · 3 youtube shorts «Pot Oranları» · 5 reddit «EMSK Poker Elleri» · 6·8·10 instagram pokerakademi · 7 apps.apple.com «Poker Oranlar – Simülatör» · 9 reddit · 11 reddit «Poker Ellerinin Olasılığı»
- PAA: Pokerin mantığı nedir? · Pokerde en güçlü el nedir? · Poker şans mı? · Pokerden para kazanılır mı? · Pokerde en yüksek kart hangisidir? · Poker hangi ülkenin oyunu?
- **터키어 글 0편**

### 3-5. «icm nedir»
- **AI overview 있음**(1위): «ICM, bağlama göre farklı alanlarda çok farklı anlamlara gelen bir kısaltmadır» → Poker(Independent Chip Model) 항목을 **첫째로** 들고 ekşi sözlük·reddit을 인용, 이어 전기·마케팅 의미.
- 유기 결과: 2 training.icmglobal.us(경영 컨설팅) · 4 sbf.amasya.edu.tr(조산사 연맹) · 5 adjust.com(광고 측정) · 6 hexn.io(크립토) · 7 onccy.com(차단기) · 8 erasmus.comu.edu.tr · **9 reddit «ICM nedir ve bir turnuvada ödemeleri neden/nasıl değiştirir?»** · 10 youtube shorts(무관) · **11 eksisozluk.com «icm»**(포커 정의)
- PAA: ICM'nin açılımı nedir? · İCM ne demek? · İcma ne demek kısaca? · İcmal raporu ne demek?
- 관련 검색: İcm nedir finan · İcm nedir tı · İcm ne demek huku · İcm hangi bölü …
- **읽는 법**: 170 중 포커 몫은 일부지만, AI overview가 포커를 첫 의미로 꼽고 포커 쪽 근거가 포럼 2개뿐이다 → **«pokerde ICM nedir»를 정면으로 답하는 터키어 글이 없다.** 들어갈 자리가 있다.

### 3-6. «poker turnuvası»(주인 = `/tr/tournaments` — 참고용)
1 eksisozluk «hold'em türkiye poker ligi» · 2 **ggpoker 블로그(구글 자동번역 결과 · google.com/goto)** «Yeni Başlayanlar İçin Rehber Serisi: Poker Turnuva Türleri» · 3 영상(Facebook Grand Opera «8.000.000₺ Poker Turnuvası | 25–26 Eylül», Merit «Novo Poker Turnuvası») · 4 milliyet 뉴스 · 5 reddit AMA · 6 velesproperty «Dünyanın en büyük poker turnuvası Kıbrıs'ta düzenlenecek» · 7 **betmgm(자동번역)** «Poker Turnuvalarıyla İlgili Tüm Sorularınız Cevaplandı» · 8 hurriyet 뉴스 · 9 **masterclass(자동번역)** «Daniel Negreanu'nun Poker Turnuva Stratejisini Öğrenin» · 10 reddit
- PAA 없음 · AI overview 없음
- **읽는 법**: 뉴스·Kıbrıs 행사·자동번역 영어 가이드가 섞인 SERP. 구글이 **영어 글을 자동번역해 끼워 넣는다 = 터키어 원문 공급이 부족하다**는 신호. 일정 의도는 `/tr/tournaments`, «turnuva nasıl işler» 류 가이드 의도(2·7·9위)는 `holdem-tournament`가 노릴 수 있는 자리다(단 헤드텀 «poker turnuvası» 단독을 제목 앞에 박지 않는다).

### 3-7. «poker turnuvası nasıl oynanır»
1 youtube «Yedi LLM Modeli Poker Turnuvasında Karşı Karşıya» · 3 reddit «Peki Texas Hold'em poker nasıl oynanır?» · 4 reddit r/godot · 5 youtube «İskambil Kağıdı Nasıl Oynanır» · 6 youtube Liars Bar · 7 reddit AI · 8 youtube Caddebet «poker nasıl oynanır»(2017) · 9 reddit Steam · 10 reddit · 11 youtube
- PAA: Poker oyununun kuralları nelerdir? · Poker mantığı nedir? · Poker kaç kart dağıtılır? · Poker kağıdı nasıl dağıtılır? · Pokerde en yüksek kart hangisidir? · Türk poker nasıl oynanır?
- **관련 글 0편 — 완전히 빈 SERP.** 우리 H2 «Poker turnuvası nasıl oynanır? 30 saniyelik cevap»가 정확히 맞는다.

### 3-8. «cash game nedir poker»
1·4·7 instagram pokerakademi(«Cash Game Temelleri») · 2 reddit Triton · 3·8 **kombiyedekparcatoptan.com**(보일러 부품 도메인의 영어 스팸 글 «Poker in Casinos: Cash Games vs Tournaments and How to Choose») · 6 reddit · 9 youtube «A €1 Million Bluff» · 10 youtube «Can You Really Make Money from Poker?»(설명에 «Cash Game (Nakit Masa)»)
- PAA: Poker oyunu nedir? · Pokerden para kazanılır mı? · Poker mantığı nedir?
- **터키어 글 0편**, 스팸이 2자리.

### 3-9. «pot oranı» (2차 조사 · 직접 조회)
| # | 도메인 | 제목 | 유형 |
|---|---|---|---|
| 1 | **ggpoker.com/tr/blog** | Poker Matematiği: Pot Oranlarını ve Beklenen Değeri ... | 🔴 운영사 블로그(터키어 원문) |
| 3 | reddit.com | Pot odds'un amacı nedir? : r/poker | 포럼(자동번역) |
| 4 | youtube.com/shorts | Pot Oranları (PokerAkademi) | 영상 |
| 5 | (영상 묶음) | Instagram PokerAkademi «Pot Oranları Pot Odds — Bölüm 1» 외 3 | 영상 |
| 6 | acikders.ankara.edu.tr | ZSÜ304 /407 AĞ MATERYALİ VE YAPIM TEKNİĞİ… (어망 «pot oranı») | 무관 |
| 7 | tr.beincrypto.com | Hesapla POT USD (Potcoin) | 무관 |
| 8 | reddit.com | Pot oranları ve çağırmak için equity konusunda kafam karıştı. | 포럼 |
| 9 | optiraj.com | Tutkal Karışım Hesaplayıcı… | 무관 |
| 10 | tr.investing.com | Post&Telecommunication Equipment (POT) Bölünme… | 무관 |
| 11 | tr.coinmill.com | Dönüştürmek PotCoins (POT)… | 무관 |
- PAA(전부 무관): Potasyum oranı kaç olmalı? · Potasyum yüksekliği neyin belirtisidir? · Potasyum kaç olursa tehlikeli?
- snippet 없음 · AI overview 없음
- **결론 수정**: 앞서 «pot 쪽 터키어 글 0편»이라 했던 판단은 «pot odds / pot odds nedir»에만 맞다. **«pot oranı»에는 터키어 원문 경쟁 글이 1위에 1편 있다(GGPoker)** — 그 글은 §4-7에서 보듯 오류 2건에 표·FAQ가 없는 얇은 글이다. 하위 절반은 무관 결과(어망·크립토·주식) → 1페이지 진입 난도는 여전히 낮다. 경쟁 표기는 **«Pot Oranları»(복수)**로 확정.

### 3-10. «turnuva mı cash game mi» (2차 조사 · 직접 조회 — 자동완성엔 포커형이 없어 원형 그대로 조회)
1 reddit r/FortniteCompetitive(무관) · 2 영상 묶음: **YouTube Türkçe Poker Dersleri «Poker Dersleri -173- Turnuva Mantığı vs Cash Game Mantığı»(2019)** · reddit CoinPoker «1. Hafta Nakit Oyunu Dünya Şampiyonası Özetleri» · Knight Online·PUBG(무관) · 3 forum.nttgame.com(Knight Online · 무관) · 4 **tournamentpokeredge.com(구글 자동번역 · google.com/goto)** «Poker Turnuva Stratejisi» · 6 reddit «Newcastle'da poker oyunu var mı? (Nakit oyun ❌Turnuva…» · 7 facebook fb-answers «Yeni başlayan turnuva oyuncuları için en iyi poker siteleri»(사이트 추천 — 조준 금지 의도) · 8 instagram(대학 보드게임) · 9 youtube TFT(무관) · 10 nttgame · 11 instagram 낚시대회
- PAA(전부 게임 일반): Oyunda turnuva ne demek? · Turnuva nasıl yazılır TDK? · Ödüllü oyun turnuvaları nelerdir?
- snippet 없음 · AI overview 없음
- **읽는 법**: 포커 비교 **글 0편**. 포커 관련은 2019 유튜브 강의 1편과 자동번역 영어 1편뿐이고 나머지는 e스포츠 «turnuva»로 샌다 → 질의에 «poker»가 없으면 구글이 게임 대회로 읽는다. 우리 seoTitle·H2에 **«poker»를 함께** 넣어야 한다(«Poker turnuvası mı cash game mi?» — 현재 `title` 필드 형태가 정답). 터키어 동의어 **«nakit oyun»**(reddit 자동번역·CoinPoker)·«nakit masa»(유튜브 설명) 확인.

### 3-11. «poker out nedir» / «outs nedir» (2차 조사 · 직접 조회)
- **«outs nedir»**: 구글이 **UETS(Ulusal Elektronik Tebligat Sistemi)로 교정**한다. AI overview = UETS 설명 · 영상·짧은 영상·PAA(Uets kaydı nedir? · Uets tebligat masrafı ne kadar? · Uets numarası nasıl öğrenilir? · UETS ve KEP arasındaki fark nedir?)·유기 10개 전부 UETS(ptt.gov.tr·barobirlik·maverahukuk·yengec 등). **포커 의도 0** — 첫 조회는 40101 서버 오류, 원인 무관 재시도 1회로 확보.
- **«poker out nedir»**: 1 hun.help.ggpoker.eu(헝가리어 도움말 · 무관) · 3 br.pokernews.com «Outs | Termos de Poker»(포르투갈어) · 4 lowlimitpoker.nl(네덜란드어) · 5 facebook fb-answers(아이슬란드어) · 6 pokerlistings.se(스웨덴어) · 7 pokerstarsinsochi.com(영어 규칙) · 8 holdem-poker.ch(독일어) · 9 reddit(체코어 번역) · 10 pokerschool.se · 11 pokeriukas.com(이탈리아어)
- PAA: Poker kaç kişiyle oynanır? · Poker kağıdı nasıl dağıtılır? · Pokerde en güçlü el nedir? · Pokerden para kazanılır mı? · Poker mantığı nedir? · Hangi oyunu oynayarak para kazanabilirim?
- **읽는 법**: **터키어 결과 0편** — 구글이 외국어 페이지 10개로 채운다. 완전 공백. 단 볼륨 데이터 없음 · «outs» 단독은 UETS에 먹히므로 반드시 «pokerde out / poker outs» 형태로 쓴다.

---

## 4. 상위 글 원문 정독 (헤딩 축어 · 분량 · 오류)

### 4-1. ggpoker.com/tr/poker-basics/poker-hands-odds/ — «poker olasılıkları» 1위
- 수집: WebFetch는 404(봇 차단) → exa web_fetch로 전문 확보.
- 헤딩(축어, 순서대로): H1 «Poker Ellerinin Olasılık ve İhtimal Tablosu» · H3 «Poker Elleri Olasılıkları» · H3 «Oranlar Nasıl Çalışır» · H3 «Poker Oranları Tablosu» · H5 «Yüksek Kart» «Bir Çift» «İki Çift» «Üçlü» «Kent» «Renk» «Full House» «Dörtlü» «Kent Düzü» «Royal Flush» · H3 «Yaygın Poker Ellerinin Olasılıkları» · H3 «Delik Kartları Olasılığı» · FAQ(질문형 볼드): «Poker ihtimallerini nasıl hesaplıyorsunuz?» «Hangi elleri preflop oynamalıyım?» «Hangi poker ellerini oynamalıyım?» «Bir royal flush ihtimali nedir?» «Bir renk sıralı olasılığı nedir?» «AA ile KK'nin kazanma olasılıkları nedir?» «Pocket aslarla kazanma olasılığı nedir?» «Flop'ta ne sıklıkla set yaparsınız?» «Poker'da outs nedir?» «Pot equity nedir?» «İyi oranlar nelerdir?» «Bir floş çekilişi yakalama olasılığı nedir?» «Texas Hold'em'de hangi eller en çok kazanır?» «Poker oynamak için matematikte iyi olmak zorunda mısınız?»
- 분량 약 1.800단어 · 표 2개(족보별 · 홀카드) · FAQ 14개 · 경험담 없음 · 예시 핸드 거의 없음 · 끝이 가입 유도(운영사)
- **🔴 오류(§13 검산)**:
  1. **족보 표가 5장 확률인데 표시가 없다** — «Yüksek Kart 50.1177%», «Royal Flush 0.000154% · 649.739 : 1» 등은 5장 무작위 분포다. 같은 페이지 FAQ는 «Texas Hold'em'de royal flush yapma ihtimalinin 1'e 30.940» — **표(649.739:1)와 FAQ(30.940)가 한 페이지 안에서 충돌**하고, Hold'em 독자에게 Yüksek Kart가 50%라고 보여준다(7장 기준 실제 17,4%).
  2. «Bir renk sıralı olasılığı nedir?» 답이 «Bir **floş royal** yapma olasılığı %0.00139 veya 72.192'de 1'dir. River'da **floş royal** yapma olasılığı %0.0279'a veya 3.589'da 1'e yükselir» — 수치는 **스트레이트 플러시**(5장 1/72.193, 7장 %0,0279) 것인데 이름을 royal로 적었다. 이어 «bir royal floş yapma olasılığından önemli ölçüde daha iyi»라고 자기 자신과 비교하는 문장이 된다.
  3. «dokuzda bir (9:1) olasılığı, her 1$ bahis için 9$ ödeneceğiniz anlamına gelir» — **9:1은 «10번에 1번»**이다(«dokuzda bir»=1/9 아님). 같은 단락의 «Daha yüksek olasılıklar, kazanma şansının daha düşük olduğu anlamına gelir»는 «oran(odds)»과 «olasılık(probability)»을 한 단어로 섞은 탓이다.
  4. «İki aynı renkte kart tutarken flopta renk çekme olasılığı **8'de 1**'dir» — 수딧으로 플롭에서 플러시 드로(정확히 4장)가 될 확률은 약 %10,9 = **약 9,2번에 1번**(오즈 8,1:1). 오즈를 «N'de 1»로 읽은 오류.
  5. «İki çift, yedinci en iyi poker eli olup, **aynı değerde iki kartla oluşur**» — 정의가 원 페어 정의다. 예시 «J-T … beş out'unuz vardır: üç on ve iki vale»도 J·T 각 3장 남으면 6 out이라 설명과 숫자가 맞지 않는다(보드에 J가 하나 있다는 전제가 빠졌다).
  6. «AA ile KK… başka birine cep papazlarının dağıtılma olasılığı… 205:1» — AA를 들고 있을 때 특정 상대 1명이 KK일 확률 = 6/1.225 = 1/204,2 → **약 203:1**. 근사 오차(경미).
  7. «Aslar, ellerin %80'inde kazanan bir el oluşturmasına rağmen, %20'sinde kaybeder. İki çift, %31 oranında potu alırken, basit bir çift oyunu %27 oranında kazanır. Üçlü, oyunların %12'sini…» — 기준(상대 수·무엇 대비 %)이 없는 수치. 검증할 수 없다.
  - ✅ 맞는 것: 홀카드 표(AA 220:1, 특정 수딧 330,5:1, 0.0121 등 — 1.326 조합으로 검산 일치) · 드로 오즈(OESD 4.8:1, 거트샷 10.5:1, 오버카드 6.7:1, 셋 22:1 — 미지 카드 46장 기준) · 플롭 셋 %12 · AA 1:1 %85 · Hold'em 로열 1/30.940 · 플롭 플러시 완성 1/118.
- **시사점**: 1위 글이 **5장/7장 혼동 + 용어 혼동**이다. 우리 `holdem-probability`는 이미 두 열(5장 vs Hold'em river) 표를 갖고 있다 — 이걸 전면에 내세우면 정면으로 이긴다.

### 4-2. rangecraftpoker.com/tr/help-center/poker-tools-poker-hand-rankings — 5위
- 헤딩(축어): H1 «Poker el sıralaması» · H2 «Poker el sıralamalarını anlamak Texas Hold'em ve tüm poker oyunlarının temelidir...» · «♠️ El Sıralaması Neden Önemlidir» · «👑 Royal Flush & Straight Flush» · «🔢 Four of a Kind (Kare)» · «🏠 Full House (Full)» · «🌊 Flush (Floş)» · «➡️ Straight (Sıralı)» · «🎲 Three of a Kind (Trips/Set)» · «✌️ Two Pair (İki Çift)» · «1️⃣ One Pair (Tek Çift)» · «🃏 High Card (Yüksek Kart)» · «⚖️ Beraberlik Kırıcılar & Pot Bölüşümü» · «📊 Her Poker Elinin Olasılığı» · «📌 Hızlı Poker El Özeti»
- 약 1.200단어 · 표 없음 · FAQ 없음
- **🔴 오류**: «**Texas Hold'em'de** her elin yaklaşık gelme olasılıkları: Royal Flush: 649.740'ta 1; Straight Flush: 72.000'de 1; Four of a Kind: 4.165'te 1; Full House: 694'te 1; Flush: 509'da 1; Straight: 255'te 1; Three of a Kind: 47'de 1; Two Pair: 21'de 1; One Pair: yaklaşık her 2,36 elde 1; High Card: yaklaşık %50 el» — **전부 5장 수치를 Hold'em이라고 적었다.** Hold'em(7장) 실제: Royal 1/30.940 · SF 1/3.590 · Kare 1/595 · Full 1/38,5 · Floş 1/33 · Kent 1/21,6 · Üçlü 1/20,7 · İki Çift 1/4,3 · Çift 1/2,3 · Yüksek Kart %17,4. (`posts-tr/holdem-probability.ts` 표와 동일 — 우리 표가 맞다.)

### 4-3. matematikdunyasi.org «Pokerin Matematiği» — 4위
- 헤딩(축어): «Pokerin Matematiği» · «Toplam poker eli sayısı» · «Renk sayısı» · «Kare sayısı» · «Ful sayısı» · «Üç sayısı» · 약 2.100단어 · 1992년 잡지 글
- 내용: «201.376» 총 핸드 수 = C(32,5) → **32장 피켓 덱(7~A) 5장 드로 포커** 기준이다(«Her oyuncuya önce beş kâğıt dağıtılır»). 52장 Hold'em 독자에게는 **다른 게임의 수치**다. 오류라기보다 의도 불일치 — 그런데 «poker olasılıkları» 4위에 있다 = 경쟁 공급이 얼마나 얇은지 보여준다.

### 4-4. pokerbankrollapp.com «Poker odds cheat sheet» — «pot odds» 2위(영어)
- 헤딩(축어): H1 «Poker odds cheat sheet: outs, draws and pot odds» · H2 «Start with hand rankings» · «Common outs and drawing odds» · «Pot odds cheat sheet» · «Preflop odds worth remembering» · «How to use a cheat sheet without becoming slow» · «Odds do not replace bankroll discipline» · H3 FAQ «What should be on a poker odds cheat sheet?» «What is the rule of 2 and 4 in poker?» «Are poker cheat sheets allowed?» «How do pot odds work?»
- 약 1.000단어 · 표 4개 · FAQ 4 · 경험담 없음
- **🔴 오류**: 팟오즈 표 «Quarter pot | 1 to win 5 | **20%**» — 1/4 팟 베팅: 콜 0,25P로 1,5P 팟 → 0,25 ÷ 1,5 = **%16,7**(자기 칸 «1 to win 5»도 1/6 = %16,7을 가리킨다). 나머지 줄(½ %25 · ⅔ %29 · pot %33 · 150% %38)과 드로 표(9 out %35/%20 · 8 out %32/%17 · 6 out %24/%13 · 4 out %16/%9 · 3 out %12/%7 · 2 out %8/%4)는 검산 일치. 프리플랍 «Higher pair about 80%» «A-K vs A-Q about 73%» 정상 범위.
- 우리 `holdem-pot-odds` 표는 ¼ 팟 **%16,7**로 맞다(⅓ %20 · ¾ %30 · 2× %40도 검산 일치).

### 4-5. ggpoker.com/tr/blog/the-beginners-guide-series-types-of-poker-tournaments/ — «poker turnuvası» 2위(자동번역 노출)
- 헤딩(축어): H2 «Yeni Başlayanlar İçin Rehber Serisi: Poker Turnuvalarının Türleri» · «Tek/Çok Masalı Turnuvalar» · «Freezeouts, Rebuys ve Reentries» · «Sit-and-Go Turnuvaları» · «Turbo Turnuvalar» · «Uydu Turnuvalar»
- 약 800단어 · 표·FAQ·이미지 설명 없음 · 경험담 없음
- 낡은/부정확: «tek masalı turnuvalar… en fazla dokuz veya on oyuncu» 정상. «Re-entries… elenmeden önce yeniden satın alamazsınız» 정상. 오류는 없으나 **ICM·버블·블라인드 구조·상금 분배·등록 방법이 없다** — 얕다.
- 같은 사이트 «Turnuvalar Nedir?»(2022)는 «Kazananın ödül payı… ödül havuzunun %50'si veya hatta %100'ü kadar olabilir» — 대형 필드 일반론으로는 과장(우리 글 표: 100명 %25–30, 10.000명 %8–12). 
- betmgm(«Poker Turnuvalarıyla İlgili Tüm Sorularınız Cevaplandı»)·masterclass는 구글 자동번역 경유 노출이라 터키어 원문 URL이 없다 — 원문(영어)은 운영사 홍보·입문 일반론. 헤딩 축어 미수집(✗ 이유: google.com/goto 번역 프록시라 원문 고정 불가).

### 4-7. ggpoker.com/tr/blog/poker-math-calculate-pot-odds-and-expected-value-on-the-fly/ — «pot oranı» 1위 (2차 조사)
- 수집: exa web_fetch 전문.
- 헤딩(축어): H2 «Poker Matematiği: Pot Oranlarını ve Beklenen Değeri Anında Hesaplayın» · «Pot Oranlarının Gücü» · «Beklenen Değer: Geleceği Hesaplamak» · «Hızlı Hesaplamalar» · «Sonuç»
- 약 650단어 · 표 없음 · FAQ 없음 · 이미지 설명 없음 · 경험담·실전 핸드 없음 · 2025-09-17
- **🔴 오류(§13 산수 검산)**:
  1. «potta $100 varsa, rakibinizden gelen $20'lık bir bahis, pot oranları **5'e 1 ($100/$20)** olur» — 상대 베팅이 들어간 뒤 팟은 $120 → **6'ya 1**(120:20), 필요 에퀴티 20 ÷ 140 = %14,3. 베팅 전 팟으로 나눴다.
  2. 기대값 예: «$100'lık bir potu kazanma şansınız %30 ve kaybetme şansınız %70 ise, … $30 (0.30 * $100) – $70 (0.70 * $100) = **-$40**» — 질 때 잃는 것은 팟 $100이 아니라 **내 콜 금액**이다. 콜 금액이 빠진 식이라 EV 개념 자체가 틀렸다(예: 콜 $50이면 0,30×100 − 0,70×50 = **−$5**).
  3. «Pot oranlarını hesaplamak, … "outs"—potun büyüklüğü ile karşılaştırmayı içerir» — out 수와 팟 크기를 직접 비교한다는 서술(정확히는 out→확률, 팟·콜→필요 에퀴티를 비교).
  - ✅ 맞는 것: 4 ve 2 kuralı 설명과 «4 ile çarpma, yalnızca rakibiniz flop'ta all-in olduğunda» 단서(우리 글 tip과 같은 내용).
- **시사점**: 우리 `holdem-pot-odds`는 이 글이 틀린 두 자리(베팅 후 팟으로 나누기 · 콜 금액 기준 EV)를 정답으로 덮을 수 있다. 다만 우리 글에는 **EV(beklenen değer) H2가 없다** → §7-1에 추가 처방.

### 4-6. ICM·cash game 상위 — 포럼·SNS·스팸
- «icm nedir» 포커 측 상위는 reddit(자동번역 ELI5)·ekşi sözlük(사용자 정의 한 줄)뿐 — 정독 대상 «글» 없음.
- «cash game nedir poker» 상위 글 = kombiyedekparcatoptan.com 영어 스팸 2편 + 인스타 릴스 → 정독 가치 없음(스팸은 §5 약점 근거로만 기록).

---

## 5. 장단점 표

| 구분 | 상위 결과 공통 | 우리 대응 |
|---|---|---|
| ✅ 강점(갖춰야 할 것) | 족보별 확률 **표**(GGPoker) · 홀카드 확률 표 · 드로별 out/오즈 목록 · 팟오즈 베팅 크기 표(pokerbankroll) · FAQ 10개+(GGPoker) · 영상 묶음이 SERP에 상시 노출 | 4편 모두 표·FAQ 보유. **영상 슬롯**은 우리에게 없음 → 이미지·인포그래픽으로 대체 |
| ✅ 강점 | «2 ve 4 kuralı» / «rule of 2 and 4»를 짧게 정의 | 보유(pot-odds·probability 둘 다 H2) |
| 🔴 약점(차별화) | **5장/7장 혼동**(GGPoker·rangecraft) · **odds/probability 혼동**(9:1=«dokuzda bir») · royal/SF 이름 혼동 · ¼ 팟 %20 오답 · **베팅 전 팟으로 팟오즈 계산(5:1→실제 6:1)·콜 금액 빠진 EV**(GGPoker «pot oranı» 1위) | 우리 두 열 표 + «oran ↔ olasılık 변환» H2가 이미 정답 → 전면 배치·명시 |
| 🔴 약점 | 터키어 **텍스트 글 자체가 없다**(pot odds·ihtimalleri·turnuva nasıl oynanır·cash game: 인스타·reddit 자동번역·스팸) | 빈 SERP → 질문형 H2 + 40~75단어 직답으로 인용 자리 확보 |
| 🔴 약점 | ICM을 **숫자 예시로** 설명한 터키어 글 없음(ekşi 한 줄·reddit) | 3인 계산 예시(아래 §7-3) 신설 — 우리 계산기 ICM 도구로 연결 |
| 🔴 약점 | 경험담·실전 핸드 없음, 운영사 가입 유도로 끝남 | 경험담 보유(pot-odds «Baştan sona gerçek bir el», probability 5'li çift 셋) |
| 🔴 약점 | 대회 가이드 = 자동번역 영어(betmgm·masterclass·ggpoker) | 원문 터키어 · 구조·ICM·Day 1 체크리스트 보유 |

---

## 6. 우리 글 대조 (현재 tr 메타·헤딩)

### 6-1. holdem-pot-odds
- seoTitle «Bu call gerçekten kârlı mı? — Pot odds (pot oranı) nedir» · desc «Umutla call etmeyi bırak. Pot odds (pot oranı) nedir, 10 saniyede nasıl bulunur: oran-yüzde kısayolu, bahis boyutu tablosu ve implied odds'un yeri.»
- H2: Pot odds (pot oranı) nedir? · Pot oranı nasıl bulunur? Adım adım · Pot odds oran mı, yüzde mi? Oranı yüzdeye çevirme · Call için ne kadar equity gerekir? · Pot odds tablosu: hangi draw hangi bahsi karşılar? · Pot odds, equity ve implied odds farkı nedir? · 4 ve 2 kuralı nedir? … · Yeni başlayanların en sık yaptığı pot odds hataları neler? · (H3 Baştan sona gerçek bir el) · SSS 11
- 이미 이기는 점: pot odds vs equity / vs implied odds / chart / explained 의도를 모두 덮는다. 베팅 크기 표 정답(경쟁 2위의 ¼ 팟 오답).
- «pot oranı» 직접 경쟁(GGPoker 1위, §4-7) 대비: 우리 쪽이 표·FAQ·실전 핸드·정답 수치 모두 우위. 단 GGPoker가 함께 잡는 **«beklenen değer (EV)»** 의도를 우리 글은 implied odds 절에서만 스친다.
- 빠진 것: 자동완성 **«pot odds formula»**(공식을 한 줄로 쓴 H2 없음 — «nasıl bulunur»에 녹아 있음) · **«pot odds practice/quiz/trainer»**(연습 문제 섹션 없음) · 경쟁 표기 **«pot oranları»(복수)** 미사용 · PAA(영어) 15/25/35·7/2·80/20 규칙 — 팟오즈 글 주제 밖(→ 용어집 L3 위임 후보).

### 6-2. holdem-probability
- seoTitle «Ne sıklıkla tutturursun? — Poker olasılıkları tablosu» · desc «Texas Hold'em'de her elin, flop'un ve draw'ın gerçek olasılıkları; 2 ve 4 kuralı ve pot oranı tek bir poker olasılıkları tablosunda, sade dille.»
- H2: Poker el olasılıkları nedir? Her elin ihtimali tek tabloda · Hangi başlangıç elinin gelme olasılığı ne? · Flop'ta hangi elin gelme olasılığı ne? · Draw olasılıkları… · Poker olasılıkları nasıl hesaplanır? Out saymak ve 2 ve 4 kuralı · Pot oranı nedir? Olasılığını call ya da fold kararına çevirmek · Royal floş ne kadar nadir? (Ve sıralı floş) · Uzak ihtimaller… · SSS 15
- 이미 이기는 점: **5장 vs Hold'em 두 열 표**(1위 GGPoker·5위 rangecraft가 틀린 바로 그 자리) · 셋·플러시·AA 확률 FAQ. 수치 검산: 표 10행 전부 표준값 일치(Royal 1/30.940 %0,0032 · SF 1/3.590 · Kare 1/595 · Full 1/39 · Floş 1/33 · Kent 1/22 · Üçlü 1/21 · İki Çift %23,5 · Çift %43,8 · Yüksek %17,4).
- 빠진 것: **«ihtimal/ihtimalleri»** 단어가 제목·desc에 없다(자동완성 «poker ihtimalleri · poker el ihtimalleri · poker royal flush ihtimali») · 자동완성 **«poker el kazanma olasılıkları»**(상대 수별 프리플랍 승률 — 경쟁 1위 FAQ «Pocket aslarla kazanma olasılığı») 전용 H2 없음 · «royal flush» 영문 표기(자동완성 그대로)가 H2에 없음(«Royal floş»만) · 5장/7장 차이를 **경쟁 오류 패턴**으로 짚는 문장 없음.
- 카니발 확인: H2 «Pot oranı nedir? …»가 pot-odds의 헤드 «pot odds (pot oranı) nedir»와 겹친다 → 개명 권장(§7-2).

### 6-3. holdem-tournament
- seoTitle «İlk turnuvana mı gireceksin? Buy-in, blind ve ICM rehberi» · title «Poker turnuvası nasıl işler? Buy-in, blind seviyeleri, ICM ve ödül dağılımı» · desc «Buy-in nereye gider, blind seviyeleri stack'ini neden eritir, bubble ve ICM nedir? Freezeout, re-entry, PKO, satellite farkları ve ilk Day 1 listesi.»
- H2(13): Poker turnuvası nasıl oynanır? 30 saniyelik cevap · Turnuva yapısı nedir? … · Blind seviyeleri nasıl yükselir? … · Bir turnuva hangi aşamalardan geçer? · ICM nedir? Final masada neden her şeyi değiştirir? · Turnuva türleri nelerdir? … · Satellite turnuva nedir? · Poker turnuvasına nasıl kayıt olunur? 3 yol · Turnuva stratejisi … · Day 1'de saat saat … · Ödül dağılımı nasıl yapılır? … · Turnuva terimleri … · İlk turnuva kontrol listesi · SSS 9
- 이미 이기는 점: «poker turnuvası nasıl oynanır» 빈 SERP에 정확히 맞는 H2 · 자동번역 경쟁(ggpoker 종류 글)에 없는 ICM·버블·상금표·실제 대회 예시(WPT Seminole 2024) · `/tr/tournaments` 링크(207행·카드) 보유.
- 빠진 것: seoTitle 앞쪽에 «poker turnuvası nasıl oynanır»가 없다(«İlk turnuvana mı…» 훅만) · ICM H2가 **«pokerde»** 맥락어 없이 «ICM nedir?» — AI overview가 다의어로 처리하는 검색어라 «Pokerde ICM nedir?»가 유리 · **ICM 숫자 예시 없음**(정의 2문단 + 계산기 링크) · 자동완성/라쿠 «poker turnuvalarına nasıl katılabilirim»과 H2 «nasıl kayıt olunur» 표현 불일치 · «poker turnuvası nedir»(자동완성) 직답 문장 없음.

### 6-4. holdem-tournament-vs-cash-game
- seoTitle «Fişlerin her zaman para değildir — Turnuva mı cash game mi?» · desc «Cash game ve poker turnuvası aynı Texas Hold'em gibi görünür; ama fiş değeri, blind yapısı, bankroll ve ICM baskısı tamamen farklıdır. Yeni başlayanlar için.»
- H2(10): Cash game vs turnuva: temel fark · Turnuva fişleri nakit para değildir · Sabit blind mı, yükselen blind mı? · Zaman ve çıkış özgürlüğü · Kâr yapısı ve varyans · Bankroll yönetimi · ICM: cash game'de olmayan turnuva kavramı · Deep stack vs short stack push/fold · Yeni başlayan önce hangisini oynamalı? · Canlı poker odasında önce ne sormalısın? · FAQ 6
- 이미 이기는 점: 스팸·릴스뿐인 SERP 대비 완결된 비교 글.
- 빠진 것: **«Cash game nedir?»** 정의 H2 없음(검색어 cash game 20·상승세) · 터키어 동의어 «nakit masa / nakit oyun»(경쟁·유튜브가 쓰는 말) 미사용 · H2 대부분이 평서형(질문형 H2 비율 낮음 — 경화 표준 70% 미달: 10개 중 질문형 2개) · ICM 섹션이 holdem-tournament와 정의 문장이 거의 같다(중복) — 소유를 하나로.

---

## 7. 처방 (글 수정 지시서)

### 7-1. holdem-pot-odds — 우선순위 **3**
- **seoTitle 후보**(~55자, «hesaplama/hesaplayıcı» 금지):
  - A «Pot odds (pot oranı) nedir? Bu call gerçekten kârlı mı?» (53)
  - B «Pot odds nedir? Pot oranlarıyla call kararı 10 saniyede» (54) — 2차 조사로 **B 권장으로 변경**: «pot oranı» 1위 경쟁이 «Pot Oranları» 복수형으로 잡혀 있고, 유튜브·인스타도 복수형을 쓴다.
- **desc 후보**(≤160): «Umutla call etmeyi bırak. Pot odds (pot oranları) nedir, formülü ne, 10 saniyede nasıl bulunur: bahis boyutu tablosu, 4 ve 2 kuralı ve implied odds.» (≈150)
- **H2 추가/개명**
  - 「Pot oranı nasıl bulunur? Adım adım」 → **「Pot odds formülü nedir? Adım adım pot oranı bulma」** (자동완성 pot odds formula/formula poker/math). 직답 예: «Formül: call ÷ (pot + rakibin bahsi + senin call'un). Sonucu yüzdeye çevir; elinin equity'si bu yüzdeden büyükse call kârlıdır. Örnek: 100'lük pota 50 bahis → 50 ÷ 200 = %25.» (40~75단어로 확장)
  - 신설 **「Pot odds alıştırması: 5 soruda kendini test et」** (pot odds practice/quiz/trainer) — 베팅 크기·out 조합 5문항, 답은 접기. 기존 :::quiz::: 컴포넌트 재사용 가능 여부 확인. 정답은 본문 표 값만 사용(§13 산수 검산 필수).
  - 「Call için ne kadar equity gerekir?」 직답에 한 문장 추가: «Çeyrek pot bahis %16,7 ister — bazı İngilizce kopya kâğıtlarındaki %20 yanlıştır.» (경쟁 2위 오류를 이름 없이 교정 = 차별화)
  - 신설 **「Pot odds ve beklenen değer (EV) nasıl birlikte kullanılır?」** (2차 조사 반영 — «pot oranı» 1위 GGPoker가 EV를 함께 다루고, 그 EV 식이 틀렸다). 직답: «EV = (kazanma olasılığı × kazanacağın pot) − (kaybetme olasılığı × call tutarı).» 예시는 본문 표 수치로 새로 만들고 산수 검산(참고: 팟 $100·콜 $50·승률 %30 → 0,30×100 − 0,70×50 = −$5). 계산 실행은 `/tr/calculator`로 위임.
  - 「Pot oranı nasıl bulunur?」 직답에 «bahis yapıldıktan sonraki potu kullan: 100'lük pota 20 bahis → 120'ye 20, yani 6'ya 1 (5'e 1 değil)» 한 문장 — 경쟁 1위 오류를 이름 없이 교정.
- **FAQ 추가**: «Pot odds formülü nedir?» → 식 한 줄 + 숫자 예 · «Pot oranları ile olasılık aynı şey mi?» → 비율(2:1)과 확률(%33) 변환 — 경쟁 1위의 9:1=«dokuzda bir» 혼동을 정면으로 풀기.
- **차별화**: 베팅 크기 7행 표(이미 정답) · 실전 핸드 «Baştan sona gerçek bir el» 상단 노출 · `/tr/calculator`로 «hesaplama» 의도 위임(본문 65행 링크 유지).
- **카니발**: «pot odds hesaplama/calculator»(볼륨 40)는 `/tr/calculator` 몫 — 제목·H2에 쓰지 않는다. PAA «15/25/35·7/2·80/20 rule»은 이 글 주제 밖 → L3 용어집 판단에 넘긴다.

### 7-2. holdem-probability — 우선순위 **2**
- **seoTitle 후보**:
  - A «Poker olasılıkları tablosu — Hold'em'de her elin gerçek ihtimali» (61 — 길면 «Hold'em'de» 생략)
  - B «Poker olasılıkları ve ihtimalleri: Ne sıklıkla tutturursun?» (57)
- **desc 후보**: «Texas Hold'em'de her elin gerçek olasılığı: 5 kart ve 7 kart ihtimalleri yan yana, royal flush, set, floş draw ve el kazanma olasılıkları tek tabloda.» (≈150)
- **H2 추가/개명**
  - 「Poker el olasılıkları nedir? Her elin ihtimali tek tabloda」 → **「Poker el olasılıkları nedir? 5 kart ve Hold'em (7 kart) ihtimalleri tek tabloda」** — 경쟁 1·5위의 혼동 지점을 H2에서 선점. 직답에 «Birçok tablo Hold'em başlığı altında 5 kartlık sayıları verir; royal flush için 649.740'ta 1 değil, Hold'em'de 30.940'ta 1» 한 문장.
  - 신설 **「Poker el kazanma olasılıkları: AA, KK ve AK kaç rakibe karşı ne sıklıkla kazanır?」** (자동완성 축어) — 상대 1명·3명·9명 프리플랍 에퀴티 표. 🔴 **수치 미계산 · `poker-eval` 필요 — 집필 회차 몫**(이 조사에서는 값을 확정하지 않았다). 수치는 반드시 `lib/poker-eval.ts`나 열거 시뮬로 직접 산출(무늬 조합 가중 — 메모리 equity-weight-all-suit-combos). 경쟁 값(AA 1인 %85, 9인 %31,36)을 베끼지 않는다. `/tr/calculator`로 «kendi elini hesapla» 위임.
  - 「Royal floş ne kadar nadir? (Ve sıralı floş)」 → **「Royal flush ihtimali nedir? Royal floş ve sıralı floş ne kadar nadir?」** (자동완성 «poker royal flush ihtimali» 영문 표기 흡수)
  - 「Pot oranı nedir? Olasılığını call ya da fold kararına çevirmek」 → **「Olasılığı call ya da fold kararına nasıl çevirirsin?」** — «pot oranı nedir» 헤드는 pot-odds 글 소유(§3 «pot oranı» 개념 의도 = pot-odds). 본문에 pot-odds 앵커 링크로 위임.
  - 「Poker olasılıkları nasıl hesaplanır? Out saymak ve 2 ve 4 kuralı」 → **「Pokerde out nedir? Out sayarak poker olasılıkları nasıl hesaplanır?」** (2차 조사: «poker out nedir» SERP에 터키어 결과 0편 — 외국어 페이지 10개. «outs nedir» 단독은 구글이 UETS로 교정하므로 H2·직답 첫 문장에 반드시 «pokerde out»을 쓴다). 직답: out 정의 + 9 out 플러시 드로 예(%35,0 / %19,6 — 본문 기존 값). 용어집(L3)에는 정의 한 줄 + 이 앵커 링크로 위임 제안.
  - 신설(짧게) **「Oran (2:1) ile olasılık (%33) arasındaki fark nedir?」** — 경쟁 1위 «9:1 = dokuzda bir» 오류의 정답. 변환 공식: olasılık = 1 ÷ (oran + 1).
- **FAQ 추가**(PAA·자동완성 기반): «Poker ihtimalleri nasıl hesaplanır?» → out × 2/4 + 정확식, 계산기 위임 · «Pokerde 5 kart ve 7 kart olasılıkları neden farklı?» · «Flop'ta floş draw'ı gelme olasılığı nedir?» → 정답 약 %10,9(≈9,2'de 1; 오즈 8,1:1) — 반드시 직접 재계산 후 기재 · «Poker şans mı?»(PAA) → 짧은 직답(단기 분산 vs 장기 기술) + 필라 링크. 「Pokerden para kazanılır mı?」(PAA)는 돈 걸기 의도 → **조준 안 함**(§0·§5).
- **차별화**: 두 열 표(이미 정답) · 오즈↔확률 변환 · 경험담(5'li çift 셋 «8,5 elde 1») · `/tr/hand-chart`(시작 핸드)·`/tr/calculator` 카드.
- **카니발**: «poker olasılık/ihtimal hesaplama (programı)» = `/tr/calculator`. «Pokerde en güçlü el nedir / en yüksek kart»(PAA) = `hand-rankings` 몫 — 앵커 링크만.

### 7-3. holdem-tournament — 우선순위 **1**
- **seoTitle 후보**:
  - A «Poker turnuvası nasıl oynanır? Buy-in, blind ve ICM rehberi» (56) — 빈 SERP 검색어를 앞으로. 헤드 «poker turnuvası» 단독이 아니라 «nasıl oynanır» 의도라 `/tr/tournaments`와 겹치지 않는다.
  - B «İlk turnuvana mı gireceksin? Poker turnuvası nasıl oynanır» (55) — 훅 유지형
- **desc 후보**: «Poker turnuvası nasıl oynanır, nasıl katılınır? Buy-in, blind seviyeleri, bubble ve pokerde ICM'nin ne olduğu; freezeout, re-entry, PKO, satellite farkları ve Day 1 listesi.» (≈158)
- **H2 추가/개명**
  - 「Poker turnuvası nasıl oynanır? 30 saniyelik cevap」 직답 첫 문장에 **«Poker turnuvası nedir?»** 정의를 넣는다(자동완성 «poker turnuvası nedir»).
  - 「ICM nedir? Final masada neden her şeyi değiştirir?」 → **「Pokerde ICM nedir? Final masada çiplerin para değeri」** — «icm nedir» 170은 다의어 SERP. «pokerde»가 들어가야 AI overview 포커 항목·관련 검색에서 인용된다. 직답 첫 문장: «ICM (Independent Chip Model — Bağımsız Çip Modeli), turnuvada çip stack'inin gerçek para değerini hesaplayan modeldir.» (AI overview가 쓰는 «Bağımsız Çip Modeli» 표기를 같이)
  - ICM H2 안에 **숫자 예시 신설**(경쟁에 없음 · Malmuth–Harville로 검산 완료):
    - 3명 남음, 상금 1. **500** · 2. **300** · 3. **200**(총 1.000), 스택 5.000 / 3.000 / 2.000(총 10.000)
    - ICM 가치: 5.000 스택 = **383,93** (칩 비율 50% → 상금 38,4%) · 3.000 = **327,50** · 2.000 = **288,57** (칩 20% → 상금 28,9%) · 합 1.000,00
    - 읽기: 칩 리더는 칩 비율보다 덜, 숏스택은 더 받는다 → 리더가 숏스택과 올인 대결할 때 잃는 가치 > 얻는 가치. (집필 시 표 1개 + 한 문장 결론. 수치는 위 값 그대로 — 바꾸면 재계산)
    - «ICM aracı»는 `/tr/calculator` 링크 유지(계산은 도구 몫).
  - 「Poker turnuvasına nasıl kayıt olunur? 3 yol」 → **「Poker turnuvalarına nasıl katılabilirim? 3 yol」** (라쿠 suggest 축어). Kıbrıs·Merit 실명·일정은 넣지 않고 «yakındaki turnuvalar → /tr/tournaments»로 위임.
- **FAQ 추가**: «Pokerde ICM ne demek?»(PAA «İCM ne demek?»의 포커판) → 한 줄 정의 + 위 예시 요약 · «Poker turnuvası nedir?» → 2문장 정의 · «Turnuvada bubble nedir?» → 정의(본문 Aşama 3에서 끌어옴).
- **차별화**: 자동번역 영어 가이드(betmgm·masterclass·ggpoker)가 못 가진 것 — ICM 숫자 예시 · 실제 대회 상금표(WPT Seminole) · Day 1 시간표 · 체크리스트. 경험담 1~2줄 보강 여지(Day 1 첫 버블 경험).
- **카니발**: «poker turnuvası(ları) · kıbrıs · merit · 2026 · türkiye poker turnuvası · izle» = `/tr/tournaments`. 제목·H2에 지역·연도·«takvim»을 쓰지 않는다. tournament-vs-cash의 ICM 섹션은 이 글로 **앵커 위임**(아래).

### 7-4. holdem-tournament-vs-cash-game — 우선순위 **4**
- **seoTitle 후보**:
  - A′ «Poker turnuvası mı cash game mi? Fişlerin her zaman para değildir» (65 — 길면 «her zaman» 생략) — **2차 조사로 A를 이것으로 교체**: «turnuva mı cash game mi»만으로는 구글이 e스포츠·게임 대회로 읽는다(§3-10). «poker»가 제목에 있어야 한다.
  - A «Turnuva mı cash game mi? Fişlerin her zaman para değildir» (55) — (폐기 후보: «poker» 없음)
  - B «Cash game nedir, turnuvadan farkı ne? Yeni başlayan için seçim» (59)
- **desc 후보**: «Cash game (nakit masa) nedir, poker turnuvasından farkı ne? Fiş değeri, sabit ve yükselen blind, bankroll ve ICM baskısı; yeni başlayan önce hangisini oynamalı?» (≈155)
- **H2 추가/개명**(질문형 70% 목표 — 현재 10개 중 2개)
  - 신설(맨 앞) **「Cash game nedir? (Nakit masa / nakit oyun)」** — 직답 40~75단어: 칩=현금, 고정 블라인드, 언제든 일어남. 동의어 «nakit oyun»은 2차 조사 SERP(reddit 자동번역·CoinPoker)에서 확인.
  - 「Cash game vs turnuva: temel fark」 → **「Cash game ile turnuva arasındaki fark nedir?」**
  - 「Turnuva fişleri nakit para değildir」 → **「Turnuva fişleri neden nakit para değildir?」**
  - 「Sabit blind mı, yükselen blind mı?」 유지(이미 질문형)
  - 「Kâr yapısı ve varyans」 → **「Hangisinde varyans daha yüksek?」**
  - 「Bankroll yönetimi」 → **「Cash game ve turnuva için ne kadar bankroll gerekir?」**
  - 「ICM: cash game'de olmayan turnuva kavramı」 → **「ICM neden sadece turnuvada var?」** — 정의는 2문장으로 줄이고 **holdem-tournament «Pokerde ICM nedir?» 앵커로 위임**(정의 문장 중복 제거 · ICM 검색어 소유 = holdem-tournament).
- **FAQ 추가**: «Cash game nedir?» → 한 줄 · «Nakit masa ile turnuva arasındaki fark nedir?» → 동의어 흡수. PAA «Pokerden para kazanılır mı?»는 돈 걸기 의도라 조준하지 않는다.
- **용어**: 클러스터 «çip» vs 이 글 «fiş»(18회) 갈림은 `tr-cluster-plan` §4 미결 ③ — 이 회차에서 결정 후 일괄. 경쟁(ggpoker·instagram)은 «fiş»와 «çip» 둘 다 씀 → 검색 매치상 어느 쪽도 손해는 작다(통일만 하면 됨).
- **차별화**: 스팸·릴스뿐인 SERP 대비 비교 표·ICM 예시 링크·«Canlı poker odasında önce ne sormalısın?» 체크리스트.
- **카니발**: «turnuva» 일정 의도 = `/tr/tournaments`(228행 링크 유지).

---

## 8. 처방 요약 (글별 우선순위)

| 순위 | 글 | 근거(볼륨 × 갭) | 핵심 처방 3줄 |
|---|---|---|---|
| **1** | holdem-tournament | icm nedir 170(포커 몫 일부) + «poker turnuvası nasıl oynanır/nedir/nasıl katılabilirim» 완전 빈 SERP + «poker turnuvası» 110 SERP에 자동번역 가이드가 3자리 | seoTitle 앞에 «Poker turnuvası nasıl oynanır» · H2 «Pokerde ICM nedir?» + 3인 ICM 숫자 예시(383,93/327,50/288,57) · 등록 H2를 «nasıl katılabilirim»으로 |
| **2** | holdem-probability | olasılık/ihtimal 변형 다수(각 ≤10) · 1위 GGPoker·5위 rangecraft가 **5장/7장 혼동** · «poker out nedir» 터키어 결과 0편 | 제목·desc에 «ihtimalleri» · H2 «5 kart ve Hold'em (7 kart)» 선점 · «Pokerde out nedir?» H2 개명 · «el kazanma olasılıkları» H2(**미계산 · poker-eval 필요 — 집필 회차**) · «pot oranı nedir» H2 개명(pot-odds에 위임) |
| **3** | holdem-pot-odds | pot odds 10 + 영어 변형 다수 · «pot odds/nedir»는 터키어 글 0편 · **«pot oranı»는 GGPoker 터키어 글 1위(오류 2건·표/FAQ 없음)** | seoTitle B(«pot oranları» 복수형) · «Pot odds formülü nedir?» H2 · **EV(beklenen değer) H2 신설** · 연습 문제 섹션 · ¼ 팟 %16,7·베팅 후 팟(6:1) 교정 문장 |
| **4** | holdem-tournament-vs-cash-game | cash game 20(상승세) · «cash game nedir»=스팸·릴스 · «turnuva mı cash game mi»=포커 글 0편, «poker» 없으면 e스포츠로 샘 | seoTitle에 «Poker» 필수(A′) · «Cash game nedir? (Nakit masa / nakit oyun)» H2 신설 · 질문형 H2 개명 6건 · ICM 정의 중복 제거 → tournament 앵커 위임 |

공통: 각 신설·개명 H2 직후 `> **바로 답**` 40~75단어 직답. 신규 수치는 §13 검산(특히 7-2 승률 표, 7-2 플롭 플러시 드로 %10,9) 후 기재. 제목·H2에 «hesaplama/hesaplayıcı/calculator»·지역·연도 금지.

---

## 9. 커버리지 표

| 검색어 | 1 볼륨 | 2 자동완성 | 3 SERP·PAA | 4 원문 정독 |
|---|---|---|---|---|
| pot odds | ✅ 10 | ✅ + 앞 와일드카드 | ✅ | ✅ pokerbankrollapp(2위 · 오류 1건) · 1위 reddit은 포럼 ✗(글 아님) |
| pot odds nedir | ✅ 없음 | ✅ 결과 없음 | ✅ | ✗ 상위가 인스타 릴스·포럼·영상 — 정독할 글 없음 |
| pot oranı | ✅ 없음 | ✅(포커 무관) | ✅ 직접 조회(2차) — PAA는 칼륨 3개 | ✅ ggpoker 블로그(1위 · 오류 2건+서술 1건) |
| poker olasılıkları | ✅ 10 | ✅ + 뒤 와일드카드 | ✅ | ✅ ggpoker(1위 · 오류 7건) · matematikdunyasi(4위) · rangecraft(5위 · 5장/7장 오류) · wikipedia·gq ✗(일반 문서·잡지 칼럼, 확률 의도 아님) |
| poker ihtimalleri | ✅ 없음 | ✅(«poker ihtimal») | ✅ | ✗ 상위 전부 reddit·인스타·앱스토어 — 글 없음 |
| outs (pokerde outs/outs nedir/poker outs) | ✅ 10/없음 | ✅(outs 의도 0) | ✅ 직접 조회(2차) «outs nedir»(→UETS 교정, 포커 0) · «poker out nedir»(외국어 페이지 10개, 터키어 0) | ✗ 터키어 글 없음 — GGPoker 확률 글 안의 outs FAQ만 정독(§4-1) |
| icm nedir | ✅ 170 | ✅ + «icm poker» | ✅ AI overview 포함 | ✗ 포커 측 상위가 reddit·ekşi(포럼 한 줄) — 정독할 글 없음 |
| poker turnuvası | ✅ 110 | ✅ + 라쿠 31개 | ✅ | ✅ ggpoker 토너먼트 종류(2위) · betmgm·masterclass ✗(구글 자동번역 프록시라 원문 고정 불가) · 뉴스 ✗(의도 다름) |
| poker turnuvası nasıl oynanır | ✅ 없음 | ✅ | ✅ | ✗ 관련 글 0편(빈 SERP) |
| turnuva mı cash game mi | ✅ 없음 | ✅(무관 — 포커형 자동완성 없어 원형 조회) | ✅ 직접 조회(2차) — PAA 게임 일반 3개 | ✗ 포커 글 0편(2019 유튜브 강의·자동번역 영어 1편뿐 — 번역 프록시라 원문 고정 불가) |
| cash game / cash game nedir | ✅ 20 / 없음 | ✅ | ✅(«cash game nedir poker») | ✗ 상위가 스팸 도메인 영어 글·릴스 — 근거로만 기록 |
