# BSOP Millions 2026 — 사실 시트 (pt 고유 글 `bsop-millions-2026-guide`)

> 열람일 = **2026-10-02** (전부 Playwright로 원문 DOM 추출 · 요약 미사용). 보드 id = `bsop-millions`.
> 🔴 이 시트에 없는 숫자는 글에 쓰지 않는다. 갱신 시 열람일을 바꾸고 바뀐 행을 표시한다.

## §1 기본

| 항목 | 값 (축어) | 출처 |
|---|---|---|
| 기간 | «13 a 28 de novembro de 2026» | https://bsop.com.br/ · /proximas-etapas/ · /bsop-millions/ |
| 장소 | «WTC SHERATON - SÃO PAULO - SP» / «Complexo WTC» | 같은 곳 |
| 위상 | «O BSOP Millions será a última e maior etapa da temporada 2026 do Campeonato Brasileiro de Poker» | https://bsop.com.br/satelites |
| 그리드 | «mais de 100 torneios» · 구매가 «de R$ 200 a R$ 500.000» | /bsop-millions-2026-confira-a-grade-de-torneios-da-maior-edicao-da-historia-da-serie/ |
| 주최 | Stack Eventos Esportivos S.A. (BSOP® 상표권자) · 문의 bsop@bsop.com.br · WhatsApp (11) 9156-21712 (평일 10~19h) | 사이트 푸터 |

## §2 그리드 (https://bsop.com.br/bsop-millions/ 표 · Playwright 파싱)

- 행 190 · 이벤트 번호 **#1~#103 전부 존재(누락 0)** · 첫 구매가 최저 R$ 200 · 최고 R$ 500.000
- 첫 구매가 ≤ R$ 1.500 = 31개 이벤트 · ≤ R$ 2.500 = 57개 이벤트 (위성 포함, 이벤트 번호 기준)
- **#26 BSOP MAIN EVENT — TORNEIO GOLD**: R$ 5.000 · stack 40.000 · Dia 1A~1J **10회** = 16/11~20/11 매일 **12:00 · 20:00** · Dia 2 21/11 13:00 · Dia 3 22/11 13:00 · **Dia Final 23/11 13:00**
- **#1 START-UP MYSTERY MILLION**: R$ 1.500 · 30.000 · Dia 1A~1H 8회(13~16/11 12:00·19:00) · Dia 2 17/11 · Final 18/11
- **#38 MILLIONAIRE MAKER — TORNEIO GOLD**: R$ 1.200 · 30.000 · Dia 1A~1J 10회(18~22/11 12:00·19:00) · Dia 2 23/11 14:00 · Final 24/11 13:00
- **#57 BSOP CHAMPIONSHIP — TORNEIO GOLD**: 그리드 **R$ 25.000** · 100.000 · Dia 1A~1D(21~24/11 12:00) · Dia 2~4 25~27/11 · Final 28/11 14:00
  - 🔴 **1차 출처 자기모순**: 기사 2건(Torneios Gold · grade)은 «R$ 15.000». 글에는 «그리드 표 = R$ 25.000, 이전 공지 = R$ 15.000 → 창구 확인»으로 병기.
- **#68 MINI MAIN EVENT**: R$ 2.500 · 40.000 · 1A 23/11 12:00 · 1B 23/11 20:00 · Dia 2 24/11 · Final 25/11
- **#74 UMA MILHA**: R$ 1.000 · 50.000 · 1A~1F(24~26/11) · Dia 2 27/11 · Final 28/11
- **#11 MEIA MILHA**: R$ 500 · 30.000 · 1A 14/11 12:00 · 1B 19:00 · 1C 22:00 · Final 15/11 13:00
- **#80 MINI CHAMPIONSHIP — GOLD**: R$ 6.000 · 100.000 · 1A 25/11 12:00 · 1B 26/11 15:00 · Final 28/11
- **#82 POT LIMIT OMAHA MAIN EVENT — GOLD**: R$ 10.000 · 40.000 · 25~27/11 (grade 기사 «R$ 50.000»은 오기 — 그리드·Gold 기사 둘 다 10.000)
- **#92 SUPER MILLION — GOLD**: R$ 2.500 · 30.000 · 1A 27/11 14:00 · 1B 20:00 · Final 28/11
- **#55 500K SUPER HIGH ROLLER MAIN EVENT — GOLD**: R$ 500.000 · 20~22/11
- 저가 단발: #7 BSOP PRIMEIRA VEZ R$ 500 (13/11 18:00) · #5 8-GAME R$ 500 · #23·#84·#91·#103 SUPER 500 · #18 SENIORS (50+) R$ 2.500 · #58 LADIES R$ 1.000 (21/11 15:00)
- **현장 위성(이벤트 번호)**: #9 Mega Sat Start-Up 13/11 20:00 R$ 200 «100 VAGAS GTD» · **#19 Mega Sat BSOP Main Event 15/11 14:00 R$ 600 «50 VAGAS GTD»** · #36·#44 Mega Sat Millionaire Maker 17/11·18/11 20:00 R$ 200 «100 VAGAS GTD» · Championship 위성 #43·#49·#61·#72 R$ 3.000 «10 VAGAS» · #54 R$ 3.000 «20 VAGAS»

## §3 Torneios Gold (기사 «Novidades e grandes premiações: conheça os oito Torneios Gold do BSOP Millions 2026»)

- «Serão oito no total … buy-ins que vão de R$ 1.200 a R$ 500.000»
- 신규: «Millionaire Maker, Super Million e Pot Limit Omaha Main Event são torneios inéditos no BSOP Millions 2026»
- 보상: «joia personalizada e exclusiva, feita pelo joaleiro Pedro Yossef» + 랭킹 가중
- URL: https://bsop.com.br/novidades-e-grandes-premiacoes-conheca-os-oito-torneios-gold-do-bsop-millions-2026/

## §4 개런티·특이사항

- 홈: «Start-Up Mystery Bounty, com envelope de R$ 1 milhão, e Millionaire Maker com R$ 5 milhões garantidos … 2ª edição da Super High Roller Series, mais de 100 torneios na grade e Cash Game 24 horas por dia»
- 위성 주간 기사: Millionaire Maker «R$ 5 milhões garantidos e R$ 1 milhão destinado ao campeão»
- 🔴 **2026 Main Event 개런티 = 미발견**(2025는 R$ 10M GTD — 아래 §6). 글에 2026 GTD를 쓰지 않는다.
- SHR Series: «acontece de 14 a 23 de novembro e conta com nove torneios que variam entre R$ 50.000 e R$ 500.000»
- 시작 시각: «Pela primeira vez … eventos começando às 12h … flights noturnos … às 19h» (기사) — 단 그리드상 **Main Event 야간 플라이트는 20:00**(그리드 우선)
- 리엔트리: 인스타 @bsopoficial 2026-09-24 «O Main Event e o BSOP Championship contarão com 1 reentrada por flight no BSOP Millions!» — https://www.instagram.com/p/DdrficuCWw-/
- 기록: «O atual recorde é de 4.162 inscritos, conquistado no Start-Up Mystery Bounty do BSOP Millions de 2021» (grade 기사)

## §5 등록·현장 규정 (https://bsop.com.br/bsop-millions/ FAQ 아코디언 · textContent 추출)

- 나이: «Qualquer pessoa com mais de 18 anos pode se inscrever» · Seniors = 50+ · Ladies = «restrito a participantes do sexo feminino»
- 등록 경로: 현장 «caixas designados» 또는 앱 **GameID** · 전원 BSOP 등록(cadastro) 필요 · 첫 참가자는 GameID 권장
- 현장 결제: «Dinheiro · PIX · Cartões de Débito e Crédito · Criptomoedas · Luxon Pay · Créditos de conta PokerStars · Saldo na carteira GamersWallet / GB Wallet» · 카드 수수료 = 창구 문의
- GameID 결제: «PIX ou um saldo existente no seu nome no sistema do BSOP» + 현금 결제용 사전등록 + 위성 vaga 사용
- 창구 시간: «Balcão de inscrições / Premiações: 11:00 às 02:00 (Premiações somente a partir das 14h)»
- 사이드 이벤트 현장 등록: «começam a partir de uma hora antes do início do torneio» · Main Event: «aberto desde o primeiro dia do evento» / «desde o primeiro dia de torneio, às 12h, para qualquer um dos dias iniciais»
- 신분증: «obrigatório apresentar um documento de identidade oficial com foto, tanto na inscrição, quanto para se sentar à mesa» · «Uma conta GameID validada é considerada como um documento de identidade aceito»
- 대리 등록 불가 · 대리 수령 불가
- 다중 Day 1: «Só realize uma nova inscrição após ter sido eliminado … ou você será desqualificado»
- Day 1 변경: 원래 Day 1 시작 전 창구에서 가능
- 자리 수: «Não se preocupe com lotação»
- 서명: 규정 동의 + 초상권 «Não será permitida a participação de qualquer pessoa que não assine»
- 테이블·좌석: 영수증에 표기 · 미배정이면 «geralmente … perto de 2 horas antes» 공개 → GameID «Meus Tickets»
- alternate 설명 있음 · 저녁 휴식 «75 minutos» (구조표에 있을 때) · 일반 휴식 «aproximadamente a cada 2h»
- 상금: floor 등록 후 창구 · 일부/전부 «transferência bancária em até 3 dias úteis após o término do BSOP» 가능
- 세금: «premiações recebidas por competidores residentes no Brasil serão transferidas … no seu valor integral» + 납부·신고 안내 책자(cartilha)
- 위성: 라이브 위성 vaga 현금화 불가(이미 등록한 경우 환불 예외) · 대회 시작 전 신고 시 양도 가능 · 온라인 위성 vaga는 취소·양도·다른 에타파 이전 불가 · PokerStars 패치 착용 요청 가능
- PokerStars 잔액: 토너먼트 가능, «Não é possível utilizar o saldo Stars para inscrições no Cash Game»
- 관전 «Com certeza!» · 식사 = 현장 + «praça de alimentação no Shopping D&D, que fica no complexo» · 주차 WTC Sheraton «hóspedes: R$ 59,00 (diária); Não hóspede: R$ 38,00 (até 1 hora) e R$ 100,00 (até 12 horas)» · Wi-Fi 무료 · 구급차·의사 상주 · 안전 «um dos 10 mais seguros da cidade»(주최측 표현)
- Mystery Cash(캐시게임): «até R$ 1.000.000 nesta etapa» · 추첨 20:30·02:30
- 여행: 공식 에이전시 **Flush Tour** — WhatsApp (11) 97428-6992 (연장) · (11) 955779285 (예약 문제) · 패키지 = 본인 + 동반 1인

## §6 PokerStars 위성 (https://bsop.com.br/satelites · 위성 기사들)

- «pacotes e vagas diretas, geralmente às terças, quintas e domingos» · 시각 21h03/21h05 «Horário de Brasília»
- 상품 2종: «pacote com hospedagem e buy-in do Main Event por US$ 320 ou apenas a vaga para o evento principal, no valor de US$ 109»
- 10/2 기준 페이지 목록 = 9/27·9/29·10/1·10/4 (10/4 «5 pacotes garantidos» US$ 320 이 마지막) → 글에는 날짜 목록을 박지 않고 «화·목·일» 패턴 + 페이지 링크
- 로비 경로(기사): «Eventos» → «Live» → «Americas» → «BSOP Millions» → «Todos os Satélites» / «Satélites Diretos»
- 중복 vaga: 추가분 → «ticket de US$ 1.000» · 현장에서만 사용 · 최소 US$ 240(=Millionaire Maker R$ 1.200) · 차액 T-Money · 합산 불가 — https://bsop.com.br/conquistou-uma-vaga-nos-satelites-do-bsop-millions-agora-voce-pode-ir-em-busca-da-segunda/

## §7 2025 실적 (갤러리 원문)

- 2025 Main Event — https://bsop.com.br/galeria-de-campeoes/main-event-torneio-gold-3/ : «Número de inscritos: 2659» · «Premiação distribuída: R$ 10.643.800,00» · 1º Martin Romero (Colômbia) R$ 1.221.805* (별표 = 딜 표시로 보임 → 글에는 «com acordo» 단정하지 않고 금액만)
- 2025 Main Event 사전 공지 — R$ 5.000 · «R$ 10 milhões garantidos» (https://bsop.com.br/buy-in-de-r-5-mil-e-r-10-milhoes-garantidos-o-maior-main-event-do-ano-na-america-latina/ — 2025 기사. 그 기사 안 과거 연도 수치는 자기모순이 있어 쓰지 않는다)
- 2025 SHR Main Event: Zdenek Zizka R$ 6 milhões · 36 inscrições («maior valor já pago na história do poker latino-americano» — 주최측 표현)
- 2025 Mini Championship: 319 inscritos · R$ 1.556.550

## §8 수요 (DataForSEO · location 2076 Brasil · 2026-10-02)

| 키워드 | 월평균 | 메모 |
|---|---:|---|
| bsop | 4.400 | 2025-11 14.800 |
| bsop 2026 | 880 | |
| bsop millions | 720 | **2025-11 = 4.400** (대회 달 6배) |
| bsop millions 2026 | 140 | 상승 중 2026-07 480 · 08 590 |
| bsop sao paulo | 390 | 무악센트가 10배(são 40) |
| bsop main event | 20 | 2025-11 110 |
| bsop satelite / inscrição | 10 / 10 | |

SERP «bsop millions 2026» top 9 = bsop.com.br 6 + instagram 2 — **제3자 가이드 0** → 애그리게이터 자리 비어 있음.

## §9 훅이 죽는 날 (캘린더 등재)

- PokerStars 온라인 위성 = 날짜 공지 없음 → 11/12 전후 재확인
- 11/15 14:00 #19 현장 Mega Sat Main Event(R$ 600)
- **11/20 20:00 Main Event 마지막 Dia 1J** = «참가 방법» 훅 종료
- 11/23 Main Event Final → 결과 아카이브 전환 · 11/28 종료
