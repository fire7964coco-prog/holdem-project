# WPT Australia 2026 — 원문 실측 시트 (열람 2026-09-27)

> 대상 글 `wpt-australia-2026-guide`(en·ja·zh·zh-hant·es·de·pt·id). 출처는 전부 starpoker.com.au 원문(Playwright DOM · PDF 렌더 육안). 요약 도구 미사용.

## 1. In-Festival Satellites PDF (2026-09 게시)

URL: `https://www.starpoker.com.au/sites/default/files/2026-09/In%20festivl%20satellite.pdf`
🔴 `pdftotext -layout`은 날짜 열이 어긋난다(날짜 셀이 여러 행에 걸침) → **PNG 렌더로 날짜-행 대응을 육안 확인**했다.

| 위성 | 바이인 | 날짜(현장 PDF 기준) |
|---|---|---|
| Australian Poker Cup 1-in-5 | $270 | 9/10·9/11 (4회) |
| Prime Championship 1-in-6 (9/12 첫 회는 Super Satellite 10 SEATS GTD) | $290 | 9/12 ~ **9/19** |
| **Championship Event $550 Direct Qualifier** | $550 | 9/12 ~ **9/25 7.30pm (마지막)** |
| Mystery Bounty 1-in-5 | $310 | 9/20·9/21 |
| $10K WPT Aus High Roller Direct Qualifier | $1,050 | 9/22 7.30pm |
| Mini-Championship 1-in-8 | $290 | 9/26·9/27 |
| $1,250 Down Under Dominator 1-in-5 | $290 | 9/27 |
| $5K Australian PLO Championship 1-in-10 | $550 | **9/28 (전체 마지막 위성)** |

- 🔴 **$290 Championship Direct Qualifier는 현장 PDF에 한 줄도 없다** — 기존 조건의 «7/30–9/9» 창구와 정합(축제 전 종료).
- 각주: «All satellites are unlimited re-entry until close of registration.»
- 글 표에 없는 위성 3종(Mystery Bounty $310 · Down Under Dominator $290 · PLO $550)이 현장 PDF에 있다.

## 2. Results 페이지 (`/results`, 첫 페이지 10행 · 열람 시점)

| 이벤트 | 일시 | Total Prize |
|---|---|---|
| #14 Prime Championship Event Final Day | Tue 22 Sep 2026 12:30pm | $1,346,900 |
| #22 $10K High Roller Final Day | Thu 24 Sep 2026 11:45am | $669,000 |
| #20 Mystery Bounty Final Day | Wed 23 Sep 2026 11:30am | $282,500 |
| #23 The Croc Hunter Big Bounty Final Day | Thu 24 Sep 2026 | $72,800 |
| #26 $880 Deadset Freezeout | Fri 25 Sep 2026 | $99,200 |
| #25 $450 Twin Fin Turbo | Fri 25 Sep 2026 | $31,200 |
| #21 $460 Double Trouble | Tue 22 Sep 2026 | $34,400 |
| #19 Deadset Legend | Mon 21 Sep 2026 | $38,720 |

- 우승자·엔트리 수는 목록 행에 없다 → 개별 결과(드롭다운 «WPT Australia 2026»)를 열어야 한다. **아직 안 열었다.**
- #24 Championship Event는 9/30 종료 → 결과 미게시.

## 3. Championship 이벤트 페이지 (`/tournaments/wpt-australia-2026/14031`)

- 11:30am Wednesday · $5,000($4,600 + $400 Admin) · 50,000 스택 · **Unlimited re-entry** · 레벨 10 시작까지 레이트 · 5일
- «The overall winner will receive a 2026 WPT World Championship, Championship Event Seat valued at $15,000 as part of the first-place prize which will be deducted from the overall prize pool.»
- «Tournament registration opens 1 hour before the start of the event.»
- 🪶 이 페이지는 현재 «Unlimited re-entry»다 — 글 FAQ의 «WPT 페이지는 once per flight»와 대조가 필요하다(WPT.com 쪽 페이지는 이번에 안 열었다).

## 4. 개별 결과 전수 (열람 2026-09-30 14:50 KST · **재수집 2026-10-01 11:41 KST = 36/36** · `/results` 필터 «WPT Australia 2026» id 13356 · Load more 끝까지 · Playwright DOM 파싱)

- 게시 **36/36**(10-01 재수집 · 헤더 36개 · 빠진 번호 없음 · 기존 #14·#32 값 재대조 일치). 09-30 열람 때는 31/36(#24·#33~36 미게시)이었다.
- 값은 페이지 축어(Entry Fee = 어드민 뺀 상금 편입분). 목록 행 Total Prize와 상세 Prize pool 일치는 파싱 때 전건 대조. 이름 표기(소문자·이니셜·«Witheld Name»)도 원문 그대로.
- «차액» = Entry Fee × Entrants − Prize pool (산수 · 원인 표기는 페이지에 없다).

| # | 이벤트 | 최종일 | 종목 | Entry Fee | Entrants | Prize pool | 차액 | 입상 | 1위 | 2위 | 3위 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Australia Poker Cup Final Day | Mon, 14 Sep 2026 12:15pm | NLH | $1,000 | 441 | $441,000 | 0 | 56 | Yushun Ji $83,740 | Ross Coveney $53,000 | David Hirst $39,000 |
| 2 | True Blue Turbo | Thu, 10 Sep 2026 6:30pm | NLH | $440 | 58 | $25,520 | 0 | 9 | Thomas d Lee $8,067 | Fuan He $5,379 | Witheld Name $3,586 |
| 3 | Bondi Wave Breaker | Fri, 11 Sep 2026 6:30pm | NLH | $440 | 79 | $34,760 | 0 | 12 | Christopheros Winters $9,982 | Ashish Patil $6,656 | Guangyan Yu $4,513 |
| 4 | $575 Triple Temptation | Sat, 12 Sep 2026 10:30am | NLH | $500 | 49 | $24,500 | 0 | 8 | Taryn Sabine-shaw $8,009 | Thomas d Lee $5,341 | Harrison Ingles $3,561 |
| 5 | 20-20-20 | Sun, 13 Sep 2026 10:30am | NLH | $500 | 52 | $26,000 | 0 | 8 | Soonhyeong Kwon $8,501 | Timo Hettinger $5,668 | Fei Gu $3,779 |
| 6 | Aussie Monster Stack Final Day | Mon, 14 Sep 2026 12:30pm | NLH | $1,100 | 180 | $198,000 | 0 | 24 | Simon Javor $46,196 | Amin Riyazati $30,683 | Frederick M.litchfield $22,463 |
| 7 | The Morning Grind | Mon, 14 Sep 2026 11:30am | NLH | $350 | 97 | $33,950 | 0 | 14 | Ben j Foot $9,289 | Yifeng Zhang $6,196 | Aaima Mushtaq $4,212 |
| 8 | $1,150 Sydney PLO Open Final Day | Tue, 15 Sep 2026 12:30pm | PLO | $1,000 | 112 | $112,000 | 0 | 16 | Alex Horowitz $29,169 | Jarryd Godena $19,490 | Ricardo Bono $13,523 |
| 9 | Outlaw Omaha | Tue, 15 Sep 2026 11:30am | NLH | $350 | 44 | $15,400 | 0 | 7 | Guangyu Wang $5,235 | Nicholas Lee $3,489 | Xueying Fang $2,326 |
| 10 | Bonza Bounty | Tue, 15 Sep 2026 2:30pm | NLH | $400 | 120 | $48,000 | 0 | 18 | Zac Vigar $12,068 | Ben Miller $8,046 | Bernard Stang $5,623 |
| 11 | Ladies Australian Championship Final Day | Wed, 16 Sep 2026 12:30pm | NLH | $440 | 69 | $30,360 | 0 | 10 | Deborah An $9,304 | Wenjing Zhang $6,203 | Emmalee Taylor $4,135 |
| 12 | Ned Kelly Double Bullet | Wed, 16 Sep 2026 11:30am | NLH | $400 | 83 | $32,200 | $1,000 | 12 | Yanik Weerasekera $9,536 | William Wu $6,357 | Guangyu Wang $4,310 |
| 13 | Outback Survivor Bounty Final Day | Thu, 17 Sep 2026 12:30pm | NLH | $700 | 148 | $103,600 | 0 | 21 | Robert Damelian $24,975 | Michael Kanaan $16,622 | Adam Kharman $11,929 |
| 14 | Prime Championship Event Final Day | Tue, 22 Sep 2026 12:30pm | NLH | $1,300 | 1038 | $1,346,900 | $2,500 | 131 | Cooper Feltham $187,793 | Ling Liu $161,127 | Liu Yang $99,000 |
| 15 | One Shot Grind | Fri, 18 Sep 2026 10:30am | NLH | $440 | 90 | $39,600 | 0 | 13 | Troy Sweet $11,095 | Roy Vandersluis $7,399 | Zhichao Huang $5,023 |
| 16 | Bonzai Bounty | Sat, 19 Sep 2026 11:30am | NLH | $250 | 117 | $29,250 | 0 | 17 | Robert Damelian $7,631 | David Hirst $4,986 | Chang Yoo $3,483 |
| 17 | Bondi Icebergs | Sun, 20 Sep 2026 10:30am | NLH | $400 | 76 | $30,400 | 0 | 11 | Amin Riyazati $8,963 | Yuho Ando $5,975 | Martin Baer $4,051 |
| 18 | Single Shot Deep Freeze | Sun, 20 Sep 2026 3:30pm | NLH | $600 | 122 | $73,200 | 0 | 18 | Salvatore Fazzino $18,402 | Mishel m Anunu $12,270 | Han-chin Lee $8,575 |
| 19 | Deadset Legend | Mon, 21 Sep 2026 10:30am | NLH | $440 | 88 | $38,720 | 0 | 13 | Ian Logan $6,530 | Alexander p. Cabrera jr. $7,094 | Angelo Scicchitano $5,677 |
| 20 | Mystery Bounty Final Day | Wed, 23 Sep 2026 11:30am | NLH | $800 | 355 | $282,500 | $1,500 | 45 | Shou-chi Peng $58,521 | Travis Endersby $38,901 | Xiangxi Zheng $28,586 |
| 21 | $460 Double Trouble | Tue, 22 Sep 2026 10:30am | NLH | $400 | 86 | $34,400 | 0 | 13 | Salvatore Fazzino $9,638 | Conor Ceddia $6,427 | Nathan Barnes $4,364 |
| 22 | $10K High Roller Final Day | Thu, 24 Sep 2026 11:45am | NLH | $9,500 | 72 | $669,000 | $15,000 | 11 | Adam Kharman $197,252 | Thomas d Lee $131,494 | Malcolm Trayner $89,147 |
| 23 | The Croc Hunter Big Bounty Final Day | Thu, 24 Sep 2026 11:30am | NLH | $400 | 182 | $72,800 | 0 | 25 | Francois Leclerc $16,878 | Jeremy j Wright $11,226 | Johan Lees $8,126 |
| 25 | $450 Twin Fin Turbo | Fri, 25 Sep 2026 10:30am | NLH | $400 | 78 | $31,200 | 0 | 12 | Carl b. Gray $8,959 | Jack Sweet $5,974 | Wei Feng $4,050 |
| 26 | $880 Deadset Freezeout | Fri, 25 Sep 2026 4:30pm | NLH | $800 | 124 | $99,200 | 0 | 18 | Kenta Ito $24,941 | Unensaikhan Bolovson $16,629 | Hussein Salman $11,621 |
| 27 | $500 Second Shot Turbo | Sat, 26 Sep 2026 10:30am | NLH | $440 | 80 | $35,200 | 0 | 12 | Majid Saab $8,850 | Kevin Khun $8,000 | Matthew Rolfe $4,570 |
| 28 | Extreme PLO | Sat, 26 Sep 2026 4:30pm | PLO | $1,000 | 69 | $69,000 | 0 | 10 | Louis Yin $21,143 | Andrew Yuen $14,097 | Amin Riyazati $9,398 |
| 29 | $1,100 Prime Time Turbo | Sat, 26 Sep 2026 7:30pm | NLH | $1,000 | 68 | $68,000 | 0 | 10 | Peter Skouteris $20,838 | Mitchell Cody $13,892 | Kenta Ito $9,262 |
| 30 | Mini-Championship Final Day | Mon, 28 Sep 2026 12:30pm | NLH | $1,800 | 190 | $342,000 | 0 | 25 | Jarrod Thatcher $78,945 | Shiwan Mahmud $52,505 | Cadeyrn Barthelson $38,006 |
| 31 | $600 Wave Rider | Mon, 28 Sep 2026 10:30am | NLH | $525 | 50 | $26,250 | 0 | 8 | Joshua Baraba $8,584 | Leonardo Speciale $5,722 | Kemal Husain $3,815 |
| 32 | $1,250 Down Under Dominator Final Day | Tue, 29 Sep 2026 12:15pm | NLH | $1,100 | 190 | $195,800 | $13,200 | 24 | Sam hsien-yi Chi $46,031 | Farhad Mohajerani $30,574 | Hussein Salman $22,383 |
| 24 | Championship Event Final Day | Wed, 30 Sep 2026 11:30am | NLH | $4,600 | 527 | $2,424,200 | 0 | 66 | Alexander a. Thompson $450,900 | Filip Radic $290,000 | Pranav Bhatt $214,000 |
| 33 | WPT World Champs Prime Warm Up Tournament Final Day | Wed, 30 Sep 2026 11:45am | NLH | $1,000 | 112 | $112,000 | 0 | 16 | Musang Kim $28,778 | Sarah Bilney $19,229 | Aleksei Gatsko $13,342 |
| 34 | $5K Australian PLO Championship Final Day | Wed, 30 Sep 2026 12:15pm | PLO | $4,600 | 65 | $299,000 | 0 | 10 | Thomas d Lee $78,857 | Daniel Laidlaw $73,856 | Jiaxu Chen $40,724 |
| 35 | The Ultimate Freeze | Wed, 30 Sep 2026 1:30pm | NLH | $1,400 | 72 | $100,800 | 0 | 12 | Ling Liu $29,720 | Anthony Chan $19,813 | Dongwen Liu $13,432 |
| 36 | Sydney Finale | Wed, 30 Sep 2026 3:30pm | NLH | $600 | 95 | $57,000 | 0 | 14 | Christopheros Winters $15,597 | Ian Logan $10,402 | Unensaikhan Bolovson $7,072 |

🪶 #24·#33~36 = 2026-10-01 11:41 KST 재수집분(표는 번호순이 아니라 «09-30분 + 10-01분» 순). #24 Championship 4~9위: Jack Sweet $159,000 · Tingjia Huang $119,000 · Ryan Henry $89,000 · Jun Wang $68,000 · Michael Zhang $53,500 · Joshua Mcswiney $46,000.

### 4-1. 글에 쓰기 전 주의 (원문 자기모순·판정 필요 자리)

- **#22 High Roller 차액 $15,000** = Championship 페이지가 말한 «seat valued at $15,000 … deducted from the overall prize pool»과 같은 액수다(#22도 WC 티켓 이벤트). 다만 #22 이벤트 페이지 문구는 이번에 안 열었다 → «차감이 실제 결과에 보인다»고 쓰려면 #22 페이지 축어를 먼저 확보.
- **#14 Prime 차액 $2,500 · #20 Mystery Bounty 차액 $1,500** — 글이 적은 Prime 좌석 가치 $1,500과 #20은 맞고 #14는 안 맞는다. 원인 미확인 → 글에 원인을 쓰지 않는다.
- **#32 Entrants 190 × $1,100 = $209,000 ≠ $195,800**(= 178 × $1,100). Entrants 값이 #30(190)과 같다 — 페이지 오기 가능성. **#32 엔트리 수는 인용 금지**, 상금 풀만.
- **#12 차액 $1,000**(83 × $400 = $33,200) — 같은 이유로 엔트리 수 인용 주의.
- **#19 Deadset Legend**: 1위 $6,530 < 2위 $7,094 (페이지 그대로 · 딜 여부 표기 없음) → 금액 인용 금지.
- **#9 «Outlaw Omaha»** 의 Game type이 페이지에 «No Limit Texas Hold 'Em»으로 찍혀 있다(이름과 불일치) → 종목 언급 금지.
- #1 이름은 결과 페이지 «Australia Poker Cup»(글·브로슈어는 «Australian Poker Cup»).
- 글 예측과 실측: Prime «500–800 entries (est.)» → **1,038** · 글 표의 Bonzai Bounty $460 = Entry Fee $250 + (고정 바운티 $150 · 어드민은 미확인).

### 4-2. 남은 것 (작성 착수 조건)

- ✅ **#24 Championship · #33~36 게시 확인(10-01)** — 착수 조건 충족. 위 표에 편입.
- 🪶 **36개 Prize pool 합계 = $7,601,710**(10-01 재수집분 산수 · 상위 = #24 $2,424,200 · #14 $1,346,900 · #22 $669,000 · #1 $441,000 · #30 $342,000). Prize pool은 Entry Fee(어드민 뺀 편입분) 기준이라 «바이인 총액»이 아니다 — 글에는 «결과 페이지에 게시된 상금 풀의 합»으로만 쓴다. Entrants 합계는 #12·#32 오기 의심 때문에 인용 금지.
- 🪶 #24 차액 0(527 × $4,600 = $2,424,200) — Championship 페이지의 «좌석 $15,000을 prize pool에서 차감» 문구와 결과 수치의 관계는 페이지에 설명이 없다 → 글에 «차감이 결과에 보인다/안 보인다»를 쓰지 않는다. 1위 $450,900에 좌석이 포함인지도 결과 페이지에는 표기 없음(Championship 페이지 축어 «as part of the first-place prize»만 인용 가능).
- 🪶 #34 PLO 1위 $78,857 · 2위 $73,856(차이가 작다 · 딜 여부 표기 없음) → 금액 서열 해석 금지.
- 재수집 = 같은 URL(`/results?field_series_venue_target_id=All&field_tournament_ref_target_id_entityreference_filter=13356`)에서 «Load more»를 끝까지 누른 뒤 `table tbody tr`의 innerText를 파싱(헤더 행 + 상세 행 쌍). 헤더 36개가 되는지 센다.
- 선택: WPT.com 쪽 Championship 페이지 re-entry 문구(«once per flight») 재열람 — 종료 뒤엔 과거형 한 줄로 줄일 자리라 필수 아님.
