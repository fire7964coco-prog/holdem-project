# ES LATAM 로컬 winnable 키워드뱅크 (합법성·살라·대회·자긍심)

> 2026-07-25~ 축적. **Country=Mexico** lowfruits 로컬 시드 파싱분. 로컬=본질적으로 나라별(중복 아님)=B트랙 신규글 소재. 전략=[[es-track-latam-reorientation]]·품질원칙=[[longtail-door-not-clickbait]].
> w10=weak-spot(Top10, ≥3이면 winnable 유력). 채울 실제정보=`docs/local-voice/es-latam.md` §5·`es-mexico.md`.
>
> ⚠️⚠️ **방법론 주의(Country 세팅)**: 이 파일 데이터는 전부 **Country=Mexico** 기준. → **멕시코 쿼리는 난이도 정확**하지만, **타 나라 쿼리(argentina·uruguay·chile 등)의 w10은 멕시코 SERP 프록시**(그 나라 현지 SERP는 로컬 operator로 더 빽빽할 수 있음). 타 나라 글 착수 전 **Country=해당국으로 재export해 난이도 재검증** 필수. 여기 타국 w10은 "쿼리 존재+대략 형태"로만 사용.

## ★ 핵심 패턴: "salas de poker en [나라/도시]" = 반복 템플릿 (전 LATAM 고약점)
> `salas de poker en *`(MX) 1시드가 전 나라로 확장. 각 나라 실제 카지노 리스트=진짜 유용글(낚시 아님).
| 쿼리 | w10 | 실제 장소(정독 확보) |
|------|-----|------|
| salas de poker en méxico | 5 | Palace Poker(CDMX)·Big Bola |
| salas de poker en argentina | 5 | Madero(Puerto Madero)·Trilenium(Tigre)·Rosario CAP |
| salas de poker en lima(페루) | 4 | Atlantic City Miraflores(Thunderbird) |
| salas de poker en chile | 4 | Casino Enjoy Viña del Mar |
| salas de poker en uruguay | 3 | Enjoy Punta del Este·Casino Carrasco·Victoria Plaza |
| salas de poker en peru | 3 | (Lima 허브) |
| salas de poker en colombia | 2 | (Coljuegos 규제) |
| salas de poker en venezuela | 2 | (지하클럽·재개 호텔카지노) |
| ~~españa·madrid·portugal~~ | — | 타깃 아님(포르투갈어 노이즈) |

## ★ 반복 템플릿 2: "poker presencial [país]" (라이브포커 앵글, seed `poker presencial *` MX)
salas·torneos와 같이 나라별 성립: poker presencial argentina(w10=6)·chile(w10=5)·madrid(w10=3)·españa(w10=1)·barcelona(w10=2). + 범용: torneos de poker(vol170·w10=3)·poker eventos(w10=5)·agenda poker(w10=4)·torneos de poker 2026(w10=3).

## 🚧 레인 경계: 카지노/보너스 = 포커와 별도 트랙 → **`es-casino-mexico.md`로 분리**(나중 카지노 포스팅용)
- 카지노/슬롯/보너스 데이터는 전부 그 파일에 축적. 포커 뱅크(이 파일)는 **poker 특화 로컬만**(salas·torneos·poker legal). 제네릭 casino/bono는 affiliate 초경쟁이라 포커글에서 추격 금지.

## 🧩 개념/비교 흡수분 (A트랙 — 기존 리치페이지 H2/FAQ, 신규 얇은글 X)
- **비교FAQ**: diferencia entre poker y texas holdem(w10=3)·poker abierto y cerrado(w10=3)·poker texas y omaha(w10=4)·poker y blackjack(w10=2)·**cooler vs bad beat(w10=6)**(★cooler vs 시드는 Dragon Ball Cooler·냉장고 노이즈, 이거 하나만 poker).
- **peor mano 클러스터**(winnable): cual es la peor mano de poker(w10=3)·¿porque 7 2 es la peor mano(w10=3)·mejores manos de poker(140·w10=3)·la peor mano de poker tatuaje(w10=3)·**¿cuál es la mano maldita en el poker(w10=3)** ← mano maldita는 **질문형으론 실검색됨**(es-mexico.md caveat 보정: 구어지만 "¿cuál es la mano maldita?" 롱테일 존재). + mano del muerto(dead man's hand)와 함께.
- **족보 비교**(경쟁 있음, 흡수): que gana color o full/escalera/tercia(멕시코=tercia)·cuanto vale la q/j/as/rey en poker(카드값, 대개 w10=0~1).
- **poker mexicano**=실변형(Mexican Stud), 영어검색 위주(mexican poker online·how to play mexican stud) → 룰/변형 페이지 FAQ "¿Existe un póker mexicano?"(답: Texas Hold'em 표준 + Mexican Stud 변형 설명).

## 👤 mejores jugadores (per-country 신규글 템플릿, seed `mejores jugadores de poker *`)
mejores jugadores de poker de chile(w10=4)·argentina(w10=3)·mexicanos(w10=3)·de latinoamerica(w10=2)·mexico(w10=2). → 나라별 "Mejores jugadores de póker de [país]" (자긍심·비대체). ⚠️tipos de jugador(zoológico)는 멕시코선 얇음(winnable 약).

## 📘 개념/초보 A트랙 (고볼륨·경쟁심함 — 신규 얇은글 금지, 기존 리치페이지 흡수)
- 코어(전부 경쟁): como jugar poker(6600·w10=1)·**manos de poker(18100·w10=2)**·regla del poker(4400·w10=2). ⛔w10=0: jugadas de poker(14800)·cartas de poker(12100)·como se juega poker texas(210)·poker jugadas(8100).
- ★**흡수할 멕시코 변형**(기존 족보/룰 페이지 H2/FAQ): manos de poker que ganan(w10=3)·de la mejor a la peor(w10=3)·mas fuertes(w10=3)·quién gana(w10=2)·por jerarquía(w10=2)·como se juega poker sin apostar(w10=3)·poker online con amigos(w10=4).
- ⚠️게임노이즈 제외: balatro·poker night·poki·roblox·conquian·dados/cubilete·GTA·red dead·baraja española(스페인덱 게임=다른 게임).

## 💳 funding/deposit (나라별·전환 직결, seed `como depositar en pokerstars *`)
- como retirar dinero de pokerstars méxico(w10=4)·como jugar pokerstars en argentina/uruguay(w10=4)·desde argentina·tarjeta débito(w10=2). ⛔결제사명 회피: skrill(4400)·neteller(1300). → 나라별 "retirar/depositar pokerstars [país]"만.

## ⚠️ 와일드카드 노이즈 확인: `es legal * en mexico`(앞*, poker 앵커 없음) = 3871행 전부 포커무관(poligamia·armas·aborto·navaja…). **legalidad는 반드시 `poker` 앵커**(`es legal el poker *`). 폐기.

## ⛔ 고경쟁 회피참고 (높은 난이도=전략적 회피)
- **스페인 라이브 = 빡셈**: casino barcelona(vol140·**w10=0**)·casino barcelona poker(w10=0)·cep barcelona 2025(w10=0)·barcelona poker(w10=0). CNP(Circuito Nacional de Poker) Madrid/Barcelona=w10=1~2. → 스페인 venue는 회피(우리 타깃 아님과 부합).
- 브랜드 내비: pokerstars(5400)·ggpoker(3600)·acr·coinpoker = 제외.
## 🚫 노이즈 제외: 브라질=**포르투갈어**(poker no brasil·jogos de azar·lei das bets·jogo do bicho) = es 타깃 아님.

## 멕시코 로컬 (seed: `poker en mexico *`, 2026-07-25)
**대회/캘린더** (B트랙 "Torneos de póker en México 2026"):
- torneos de póker en méxico 2026 (w10=5) · torneo poker cdmx (w10=5) · torneo de poker presencial (w10=4) · poker estado de mexico (w10=3)
**살라/장소** ("Salas/casinos de póker en México"):
- palace poker room (vol170·w10=1) · palace poker monterrey (w10=3)
**합법성** ("¿Es legal el póker en México?"):
- ¿es legal el juego online en méxico · ¿es legal jugar al póker en casa · ¿dónde jugar poker en línea en méxico (w10=1)
**자긍심/인물**: team méxico poker · mejores jugadores de poker en mexico · ¿quién es el mejor jugador de méxico
**헤드 앵커**: poker en mexico (vol40·**w10=5**) — 멕시코 로컬 허브

### CDMX·대회 심화 (seed: `poker en cdmx *`) — 이 정맥 통째로 저경쟁(w10=0 회피대상 0)
- **torneo poker cdmx (w10=6)** · torneo de poker presencial (w10=5) · torneos de póker en méxico 2026 (w10=5) · poker en cdmx (w10=5) · poker en vivo cdmx (w10=4) · palace poker monterrey (w10=3)
- ★★**핵심 엔티티 = "Palace Poker" 체인**(실제 정보로 글 채우기): Palace Poker **CDMX(Insurgentes)**·**Monterrey**·**Cancún**·**Puebla** 다도시 + Casino Palace. **PSOP**(Palace Series of Poker) Puebla 시리즈. → "Salas de póker en México"·"Torneos … 2026" 글에 지점·주소·PSOP 일정 실입력.
- 미분석 딸림: cancun poker · torneo poker cancún · casino palace insurgentes poker · poker room cdmx · torneo de poker guadalajara/monterrey · ¿dónde se juegan las wsop 2026 · ¿qué es un poker room · ¿cuál es la mejor sala para jugar poker

### CDMX 초심화 (seed `* poker cdmx` 앞*=대박, w10>=3 20개 / 회피대상 0)
- casino palace cdmx(vol70·w10=5) · poker cdmx(vol30·w10=5) · torneo poker cdmx(w10=6) · **mesas de poker cdmx(w10=7)** · **clases de poker cdmx(w10=6=★강습 신규앵글)** · casino poker cdmx(w10=6) · lugares para jugar poker cdmx(w10=5) · ¿se puede jugar póker en la ciudad de méxico(w10=5) · donde/jugar poker cdmx(w10=4) · donde jugar texas holdem en mexico(w10=4) · fichas de poker cdmx(w10=3) · ¿cuánto dinero debo llevar a una sala de póker(w10=3)
- **funding/전환**(미분석, 가입 CTA 연결): pokerstars dinero real · ¿puedo jugar a ggpoker en méxico · mejor app para jugar póker con dinero real · ¿existe juego de póker que pague dinero real

### 과달라하라 (seed `casino poker guadalajara *`)
- ★**casino life guadalajara(vol3600·w10=3=최대볼륨)** · monte carlo poker club(w10=7) · torneos de póker en guadalajara(w10=5) · poker tournament guadalajara(w10=4) · casino poker guadalajara(w10=4) · casino bingo guadalajara(w10=3)
- A트랙 FAQ: ¿cuánto cuesta entrar a un torneo de poker · ¿cómo ganar en el poker en casino · ¿dónde jugar poker y ganar dinero

### ★ 멕시코 살라 엔티티 지도 (글 채울 실물 — 2026-07-25 4파일 종합)
- **Palace Poker 체인**: `palace poker room cdmx`(vol**880**·w10=2, Insurgentes)·`...puebla`(170)·Monterrey·Cancún + PSOP 시리즈. ⚠️**국제 동명이인 배제**(Grand Prairie/Dallas 텍사스=US트랙용·Szombathely 헝가리·Great Yarmouth 영국·Vicenza 이탈리아·Poker Palace 라스베가스).
- **Big Bola**(멕시코 카지노 체인): `casino big bola pedregal`(vol**4400**·w10=3)·sucursales(w10=4)·orizaba(170)·galerías atizapán. **보너스**(전환): big bola bono(1000·w10=5)·$400 pesos(590·w10=5)·¿a qué hora abren las mesas(w10=4).
- **Guadalajara**: Casino Life(vol3600)·Monte Carlo Poker Club.
- 신규 포스트 후보: **"Clases/escuela de póker en CDMX"**(강습 w10=6).

### 대회 캘린더 정맥 (seed `torneos de poker mexico *`) — winnable 최상(w10 4~6)
- torneos de poker mexico(w10=6)·próximos torneos de poker en méxico(w10=6)·torneo poker cdmx(w10=6)·torneos de póker cdmx/guadalajara(w10=5)·calendario torneos de poker 2026(w10=4)·torneo de poker en monterrey(30·w10=4)·torneos de poker en vivo(w10=4)·winner poker series 2025(w10=3) → **"Torneos de póker en México 2026 (calendario por ciudad)" = 앵커 글**.

### funding/전환 의도 (살라·대회글 내 가입 CTA로) + ⛔회피
- 의도: pokerstars dinero real·¿mejor app para jugar póker con dinero real·¿se puede jugar poker online y ganar dinero real·poker online dinero real mexico.
- ⛔**고경쟁 회피**: poker en español(260·w10=0)·poker online dinero real(110·w10=0)·poker juegos(1900·w10=1) — 제네릭은 빡셈, 로컬 수식(mexico/cdmx) 붙은 것만.

### 대회 브랜드 (seeds: torneo poker cdmx·wsop·wpt·psop MX)
- **PSOP**(Palace Series of Poker): psop monterrey(30·w10=5)·psop poker(w10=3)·Puebla — Palace 체인 연결.
- **WSOP**: wsop méxico 2026(w10=3)·wsop circuit méxico·wsop mexico city(w10=2). 의도=cronograma/dónde ver/calendario. ⛔제네릭 회피 wsop poker(110)·wsop online(110)·wsop las vegas·wsop circuit(30). ★wsop rosario(w10=4)=**AR 신호**(재검증 Country=AR).
- **WPT**: wpt mexico tecate(w10=5)·wpt mexico(260·w10=2)·**wpt global es confiable(w10=3, 전환)**. ⚠️노이즈 world padel tour(260)·wpt fisioterapia. ⛔wpt poker(170·w10=0).
- torneo 재확인: torneo poker monterrey(w10=6)·próximos torneos(w10=5)·torneos 2026(w10=4)·en vivo(w10=3).

### 온라인 룸 (★가입 전환 직결, seed `poker online mexico *`)
- winnable: mejores salas de poker online mexico(w10=3)·¿cuál es la mejor plataforma para jugar poker online(w10=3)·**¿es legal ggpoker en méxico(w10=3)**·poker online gratis sin registrarse(110·w10=3).
- 전환 FAQ: ¿cómo retirar dinero de ggpoker en méxico·¿en qué países funciona ggpoker·¿mejor app para jugar póker.
- ⛔제네릭 회피(w10=0~1): pokerstars(5400)·ggpoker(3600)·poker juego(1900)·poker online gratis(1300)·poker online dinero real(110).
**A트랙 흡수(개념)**: ¿cuál es la versión mexicana del poker / ¿cómo se juega al póker mexicano / poker mexicano (w10=2) → 룰/변형 페이지 FAQ "¿Existe un póker mexicano?"(답: Texas Hold'em 표준, 홈게임 변형 지칭)

## 우루과이 로컬 (salas 시드서 딸림)
poker en montevideo · enjoy poker tour 2026 · dónde jugar poker uruguay · torneo de poker uruguay · ¿es legal apostar en uruguay · poker online dinero real uruguay

## 칠레 로컬 (salas 시드서 딸림)
torneos de poker en chile 2026 · torneos de poker en chile · poker chile dinero real · poker chile online

## 🇦🇷 아르헨티나 (Country=Argentina 실측, 2026-07-25) — 멕시코 다음 #1 시장
> voseo 본문(키워드는 부정사). 통화=ARS(en pesos). ★int'l 사이트 차단=전환 기회.
**헤드/온라인**: poker argentina online(vol**2400**·w10=4)·poker argentina(260·w10=4)·circuito argentino de poker(320·w10=3)·gg poker argentina(320·w10=2)·paginas de poker argentina(w10=2)·poker online argentina **en pesos**(20·w10=2)·mejor plataforma para jugar poker online en argentina(w10=2).
**합법성**(AR 불안=강 winnable): ¿el poker es ilegal(w10=4)·es legal el poker en argentina(w10=3)·¿dónde se puede jugar poker en argentina(w10=3)·¿es ilegal jugar a las cartas por dinero en casa/en un bar·juegos prohibidos por la ley·código penal·ley de juegos de azar.
**★PokerStars 차단/접속**(AR 고유, 전환 기회): pokerstars argentina bloqueado(w10=3)·pokerstars argentina dinero real(w10=3)·¿pokerstars está disponible en argentina·¿cómo acceder a pokerstars desde argentina·no puedo descargar. → "국제사이트 차단→대안" 포지셔닝.
**funding/전환**: ¿cómo cargar dinero en pokerstars en argentina(w10=3)·¿dónde puedo jugar poker online en argentina(w10=3).
**대회/살라**(미분석 지도, Country=AR로 심화 필요): CAP(Circuito Argentino de Poker) 2026(w10=3)·Madero poker·torneo de poker Rosario·Casino Buenos Aires poker·torneos en buenos aires·Trilenium(Tigre).
**⛔회피**: pokerstars(12100)·pokerstars argentina(720)·poker online gratis(1600)·coinpoker(880) = 브랜드/제네릭.

### AR 살라·대회 심화 (seeds salas·buenos aires·madero·trilenium, Country=AR)
- ★★**Madero Poker = 앵커**(Puerto Madero, BA): madero poker(880·w10=3)·**madero poker calendario(320·w10=8)**·calendario madero poker(140·w10=8)·madero poker torneos(w10=8) → **"Madero Poker: calendario de torneos 2026" = 스케줄 방어막 글(winnable 최상)**.
- **대회**: torneos de poker en buenos aires(50·w10=6)·torneo de poker argentina(40·w10=5)·**cap poker 2026(w10=6)**·circuito argentino de poker 2026(30·w10=4)·torneo presencial(20·w10=6). CAP=Circuito Argentino de Poker(telegram/online 채널도).
- **BA 살라**(앞* `* poker buenos aires` 대박): poker en buenos aires(70·**w10=7**)·mesas de poker buenos aires(w10=8)·torneo de poker buenos aires(50·w10=5)·club/casa/casino de poker BA(w10=5)·**casino buenos aires poker(110·w10=3~4)**(Casino de BA, 플로팅)·gg poker argentina(320·w10=3)·club de poker argentina(w10=4)·salas de poker online argentina(w10=4).
- ⚠️**Trilenium(Tigre)=포커론 약함**: trilenium casino tigre(170·w10=1)·horarios(w10=2). ⚠️노이즈 "muerte en trilenium"(110·범죄뉴스)·fotos/restaurant(w10=0 카지노-식당).
- 🚧카지노/보너스(casinos argentinos·mercadopago·bonos sin depósito·1win) → AR 카지노는 나중 별도 트랙.
- 실물 엔티티: **Madero Poker**(BA)·**Casino de Buenos Aires**·**CAP**(Circuito Argentino)·Trilenium(Tigre)·Rosario·Enjoy(위 voice). 통화 ARS·en pesos·MercadoPago.
- **CAP(Circuito Argentino de Poker)**: circuito argentino de poker 2025(w10=6)·2026(w10=4)·rosario·en vivo·2025 calendario(w10=5)·telegram·online. 헤드 circuito argentino de poker(320·w10=2).
- **WSOP Rosario**(City Center Rosario 카지노): wsop rosario(110·w10=3)·calendario(w10=4)·grilla·cronograma·en vivo·2025/2026 (스케줄 방어막). 
- ★**지방도시 대회 템플릿**(`torneo de poker en *`): argentina(50·w10=6)·**puerto madero(w10=6)**·mar del plata(30·w10=5)·corrientes·neuquén·bariloche·santa fe·santa rosa la pampa·rosario·buenos aires (전부 w10=5) = 아르헨 지방 라이브씬 두꺼움 → "Torneo de póker en [ciudad]" 지방별 글. LATAM 딸림: panamá(w10=5)·uruguay(w10=4)·punta del este·aruba. ⛔madrid/barcelona/valencia/vegas(w10=1~2).
- ★칠레 신호 재출현(다음 타깃): torneo poker enjoy pucón·ovalle·es legal chile·mejor jugador chile.
- **인물/자긍심**: mejores jugadores de poker argentina(w10=4)·¿quién es el mejor jugador de póker de argentina(w10=4)·ranking de los mejores jugadores(w10=3)·club de poker argentina(w10=5)·¿quién es el campeón argentino de poker. ★인물 Papo MC(래퍼·포커, "cuánto se llevó Papo de los 12 millones"). ⛔all time money list argentina(w10=0).
- ⛔**bplay = 브랜드 turf 회피**(bplay casino 33100·iniciar sesión 9900·santa fe 27100 전부 w10=0~1, winnable 0). operator 자기사이트+affiliate 장악. 전환은 브랜드 추격 X → "dónde jugar poker online argentina"·"mejor plataforma"·PokerStars 차단→대안으로.
- **Rosario 심화**(별도 글 가능): City Center Rosario(city center poker calendario w10=5·torneo city center rosario w10=4)·torneo poker rosario 2025/2026(w10=6)·rosario gran poker(w10=5)·cap rosario·wsop argentina 2025(w10=4). **Casino de Buenos Aires**: poker room(w10=4)·tournament(w10=5).
> ✅**아르헨 완결**. 실물: Madero(calendario w10=8)·**City Center Rosario**·Casino de Buenos Aires·CAP·WSOP Rosario·지방도시(Mar del Plata·Corrientes·Neuquén·Bariloche·Santa Fe·La Pampa)·Trilenium(약). 통화 ARS. 본문 voseo. 다음=콜롬비아(전환) or 칠레(신호 강).

## 🇨🇴 콜롬비아 (Country=Colombia 실측, 2026-07-25) — ★규제시장의 역설
> Coljuegos 합법·.co·전환 최강이나 **head 텀 winnable 얇음**(online·salas 두 파일 다 w10≥3=0). 합법=operator/affiliate가 포커 텀 촘촘 커버 → 회색시장보다 경쟁 셈. cooler=**vuelco**(현지어).
- head(전부 경쟁): poker colombia(170·w10=2)·poker online colombia(170·w10=1)·gg poker colombia(260·w10=1)·salas de poker en colombia(w10=2)·¿se puede jugar al poker en colombia(w10=2)·¿cuánto cuesta un poker en colombia(w10=2).
- ★**CO 특유 앵글**(head 대신 여기가 winnable 후보): ①**PPPoker**(앱 클럽문화=CO 현실): pppoker colombia·club·apk·¿qué es pppoker·crear cuenta·mejores clubes. ②**PokerStars 철수**: ¿qué pasó con pokerstars en colombia(w10=2)·¿porque no se puede jugar pokerstars en colombia → "왜 못함+대안". ③합법성 긍정 프레임(Coljuegos·.co).
- ⛔브랜드/제네릭 회피: ggpoker(1900)·poker star colombia·acr poker colombia·poker online gratis(590).
- ★★**CO winnable = 대회/살라**(head online 아님): **calendario poker colombia(w10=5)**·torneos de poker bogotá(w10=5)·torneos de poker colombia(30·w10=4)·2026(w10=4)·torneo de poker bogota enero 2026(w10=3)·torneos poker latinoamerica(w10=4). ★**Winner Poker Series**(CO 대회 브랜드: Medellín w10=3·Bogotá 2026).
- **살라(Bogotá)**: casino hollywood bogotá(110·w10=3)·casino rio bogotá(30·w10=2)·poker room bogotá(w10=3)·torneo poker bogotá(w10=3).
- **"어느 사이트 되나+합법" FAQ**: ¿es legal ggpoker en colombia·¿se puede jugar pokerstars en colombia·¿cómo retirar de ggpoker en colombia·¿acr poker es legal en colombia.
- ⚠️PPPoker=브랜드/앱 얇음(apk/club/dinero real w10=1~2, winnable 아님).
> ✅**콜롬비아 정리**: head online=규제로 경쟁 셈. winnable=**대회캘린더(calendario poker colombia w10=5)·Bogotá 살라(Casino Hollywood/Rio)·Winner Poker Series**. 전환=합법 최강. cooler=vuelco. 남은: es legal colombia·mejores jugadores colombia(선택).

## 🇨🇱 칠레 (Country=Chile 실측, 2026-07-25) — 회색→2026 규제(legality winnable)
> 강한 슬랭(luca/palo·rata·cachái) + 강 live(Enjoy Viña). 다른 나라 검색서 칠레 신호 계속 샘.
- head: poker chile(vol**590**·w10=4, CO보다 큼)·poker online chile(210·w10=2)·dónde jugar poker online en chile(w10=2). ★**¿es legal el poker en chile(w10=3)**(회색→2026 규제=혼란 winnable).
- ⛔pokerstars(5400). 노이즈: "juegos para ganar dinero real"(gamee·paypal).
- 예상 winnable(다른 파일 신호): enjoy poker chile·torneo de poker chile 2026·poker presencial chile·mejores jugadores de poker de chile(w10=4)·enjoy pucón·torneo póker ovalle. → 대회/Enjoy/살라 시드로 확인 예정.
- ★★**CL winnable=대회/살라**: torneo poker monticello(w10=5, **Casino Monticello**)·torneo póker ovalle(w10=5, Casino Ovalle)·torneos de poker santiago(w10=4)·torneo de poker chile 2026(w10=4)·salas de poker en chile(w10=4)·poker chile dinero real(w10=3). **Enjoy Poker Series/Tour**(Viña): enjoy poker series(w10=3)·enjoy poker chile(w10=4)·tour 2026(w10=2)·mejor jugador de chile(w10=3).
- **살라 실물**: Casino Monticello(Mostazal)·Enjoy(Viña del Mar)·Casino Ovalle·Santiago.
- ⚠️Enjoy 노이즈→카지노 트랙: enjoy santiago(22200)·los andes·valor entrada·"enjoy renuncia viña"(회사뉴스). PokerStars: ¿qué pasó con pokerstars·retirar de pokerstars chile.
> ✅**칠레 정리**: winnable=대회(Monticello·Ovalle·Santiago·Enjoy Series)/살라. legality(회색→2026) winnable. 통화 CLP·luca/palo·rata(nit). 

## 🇵🇪 페루 (Country=Peru 실측, 2026-07-25) — 합법 규제(Mincetur)·Lima 라이브 앵커
- **대회**: circuito dorado de poker(50·w10=3, **Circuito Dorado**=PE 시리즈)·torneos de poker peru(w10=5)·torneo de poker hoy(w10=3)·presencial(w10=3)·torneos de póker en lima(w10=2).
- **살라(Lima)**: salas de poker en lima(w10=4)·poker presencial peru(w10=4)·salas de poker perú(w10=3)·**Atlantic City Miraflores**(정독).
- **legality**: ¿es legal el póker en perú(w10=3). 현지미디어 **PerúAllin**(peru all in·perú poker pro=경쟁).
- ⚠️노이즈: "regla del 72"(투자 복리룰·Warren Buffett)·카드값 j/q/k. ⛔ggpoker(2900)·pokerstars·poker online gratis(1000).
> ✅**페루 정리**: winnable=대회(Circuito Dorado·Lima)/살라(Atlantic City). 통화 soles(PEN). head online 경쟁.

## 🇺🇾 우루과이 (Country=Uruguay 실측, 2026-07-25) — 소국(350만)·Punta del Este 프리미엄 라이브·AR세트(voseo)
- ⚠️**online head 얇음**: poker online uruguay(40·w10=5)·poker online dinero real uruguay(w10=4)뿐. 소국이라 저볼륨. 과투자 X.
- ✅**`poker uruguay` 시드가 최상**(winnable 14): **uruguay poker series(w10=4)**·poker montevideo(w10=5)·torneo de poker en uruguay(w10=4)·**enjoy poker tour**(diciembre·en vivo, w10=3)·torneo poker punta del este(w10=3)·**poker en radisson**(=Victoria Plaza Montevideo)·club gg poker uruguay(w10=3)·dónde jugar poker online en uruguay(w10=5).
- **legality**(⚠️seed에 트레이딩 노이즈: el trading es legal·etoro·tradingview): poker uruguay(w10=5)·¿dónde jugar poker en uruguay(w10=5)·es legal el poker en uruguay(w10=4)·¿el poker es ilegal(w10=3).
- **실물**: Enjoy Punta del Este(Enjoy Poker Tour)·Casino Carrasco·Victoria Plaza/Radisson Montevideo(Circuito Uruguayo). 통화 UYU·AstroPay/Redpagos/Abitab. 본문 voseo(AR 재활용).
- ✅**UY 완결 앵커**: ★**Enjoy Poker Tour**(calendario torneos 2026 w10=4·diciembre/febrero editions·enjoy poker series·codigo poker enjoy) → "Enjoy Poker Tour calendario" 글. ★**WSOP Montevideo**(Casino Carrasco, w10=4). 살라: poker en montevideo(w10=5)·poker uruguay online(w10=5)·torneo de poker uruguay(w10=5)·poker vip uruguay(w10=3)·mejor jugador de uruguay(w10=3).
- 🚧카지노 운영정보(casino carrasco abierto hoy·horarios·Conrad 1000·del estado) → 카지노 트랙. `enjoy punta del este poker`(w10=0)=오히려 경쟁. ⚠️enjoy poker tour 시드=영어 WSOP/WPT 노이즈 섞임.
- UY 대회 앵커 4종: **Uruguay Poker Series**(w10=5)·**Circuito Uruguayo de Poker**(w10=6)·**Enjoy Poker Tour**·**WSOP Montevideo/Uruguay**(w10=3~4). 살라: poker en radisson(w10=5, Casino Radisson/Victoria Plaza)·all in uruguay(w10=4, 현지미디어).
> **UY 완결(이게 다). 소국(볼륨 10~50대) — 위 앵커로 1~2편, AR voseo·세트 재활용. 단독 대량투자 X.**

## ★★ 패턴 확증 (MX·AR·CO·CL·PE·UY 6개국): winnable=**대회캘린더+도시살라(+회색시장은 legality)**. head/online=경쟁(브랜드·operator 장악). 2트랙 불변. 남은: VE(crypto디아스포라)·US히스패닉(별도 워크플로)·EC/BO/PA/DR(소규모).

## 합법성 정맥 (seed: `es legal el poker en *`, Country=MX → AR·UY 대량 출현. ★w10=MX프록시, 현지 재검증 필요)
**우루과이** ("¿Es legal el póker en Uruguay?"):
- es legal el poker en uruguay (w10=4) · ¿es legal el casino online en uruguay (w10=3) · ¿dónde jugar poker en uruguay (w10=2) · poker uruguay (w10=4) · ¿cuál es el impuesto al juego en uruguay
**아르헨티나** ("¿Es legal el póker en Argentina? (por provincia)"):
- ¿dónde se puede jugar poker en argentina (w10=3) · jugar poker online argentina (w10=3) · poker argentina (w10=3) · pokerstars argentina bloqueado (w10=3, ★차단 이슈=주별규제 소재) · es legal el poker en argentina (w10=2)
**공통 개념**(A트랙 흡수): ¿el poker es ilegal (w10=3) · ¿es legal jugar al póker en casa (w10=2, ★rake 없으면 합법 앵글) · ¿cómo saber si un casino online es legal
> 브랜드 내비(제외): ggpoker·pokerstars·acr poker·coinpoker = 우리 타깃 아님.

---
## B트랙 신규글 후보 (품질=실제 정보로 이탈방지→가입)
1. **"Salas/casinos de póker en [México/Argentina/Lima/Chile/Uruguay]"** — 도시별 실제 포커룸·스테이크·주소. 템플릿 반복(나라당 1편).
2. **"Torneos de póker en [país] 2026"** — 실제 스케줄·바이인·GTD(데이터=방어막). MX/CL/UY 확인됨.
3. **"¿Es legal el póker en [país]?"** — 나라별 상이(MX vacío legal·CO Coljuegos·CL 2026규제·PE Mincetur·AR 주별). 정확·최신 = 신뢰.
4. **"Mejores jugadores de póker de [país]"** — 자긍심(MX team·VE 디아스포라 프로).

> 다음 시드 파싱분 여기 계속 누적. `es legal el poker en *`·`torneos de poker *`·`casino con poker en *` 등.
