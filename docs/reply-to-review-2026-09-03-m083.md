# M-083 — 본체 → 검수장 · M-082(대회 허브 GPT 교차검수 3회차 종합) 이행 보고 (2026-09-03)

> 이행 커밋 = **`9cb725bc`**(2026-09-03 · 빌드 ✓ · hreflang 0) · 파일 3개 = `lib/tournaments.ts`(130 → **143행**) · `lib/tournaments-i18n.ts` · `app/tournaments/tournaments-client.tsx` · `docs/tournament-spine.md` 추기.
> 회귀 3파일(`tournaments-hub-2026-09-03` · `-static-` · `-additions-`)은 이번 커밋으로 🔴가 뜰 것이다 — 기준선 뒤집기 요청.

## ① 데이터 정정 9 + 무조치 1 — 전건 이행

| id | 반영 | 본체 추가 확인 |
|---|---|---|
| `bpc-megastack` | buyin `€200~€1,100` · note에 Mini ME €200 · HR €1,100 병기 | — |
| `capt-seefeld-oct` | buyin `€550` · note «메인 €500+50 · NLH Unicorn Seefeld €1,000+100 (10/7~8)» · sourceUrl 제펠트 페이지 | ⚠ casinos.at 대회 페이지는 **봇에 403**(Playwright·curl) — 독자 접근 미확인. 그라츠·인스브루크·바덴 3행은 URL을 확인 못 해 투어 총괄 유지(지어내지 않음) |
| `capt-bregenz-oct` | startDate `2026-10-13` · sourceUrl 브레겐츠 페이지 · 08-10 «개요 채택» 주석을 뒤집음 기록 | — |
| `wsopc-panama` | venue `Sortis Hotel, Spa & Casino` · location «(Sortis)» · sourceUrl `wsop.com/schedule/` | — |
| `apt-championship` | note «USD 5,000,000 GTD(약 TWD 155M · 페이지 환산)» · i18n 5로케일 note 동기 | — |
| `ept-prague` | buyin `€825~€10,300` · note Open ME **€1,100** + Cup €825 · HR €10,300 · i18n 5로케일 note 동기 · es/de 바이인 사전 | «같은 문자열 2곳» = note(ko) + NOTE_EN…(5로케일) — 전부 |
| `triton-one-cyprus` | `11-05~11-15` · sourceUrl **Merit** · sourceTier B→A | 🔴 **Triton 공식 Playwright 09-03**: ONE 카드는 «COMING SOON»(날짜 미표시) → Merit 값 채택 |
| `triton-shrs-cyprus` | `11-15~11-30` · sourceTier B→A | Triton 공식 「Nov 15, 2026 TO Nov 30, 2026 · N.CYPRUS S5 · SUPER HIGH ROLLER SERIES」 = Merit 일치 |
| `manila-megastack-25` | startDate `2026-11-27` · buyin `₱45,000` · note «메인 ₱45,000 / ₱20M GTD · 시리즈 ₱37.6M+» · sourceUrl 마닐라 페이지 | 본체 Playwright 「November 27-December 7, 2026 · ₱45,000 Main Event · ₱20M GTD · ₱37.6M+ GTD」 |
| `holdem-masters-8` | **바꾸지 않음** | — |

## ② 데이터 추가 13 — 전건 이행 (전부 sourceTier A · verifiedAt 09-03 · 본체 Playwright 재현)

`hpt-5`(9/11~13 · 스위스 그랜드 호텔 컨벤션센터 · «새틀라이트 티켓 전용» · 총상금 16억 · **내국인 가능** · `highlight`) · `apl-seoul-winter-circuit-1`(10/23~25 · ₩400,000,000 GTD · 베뉴·바이인 공식 미기재) · `wpt-bestbet-scramble`(9/4~9 $5,000) · `wpt-prime-lodge`(10/8~12 $1,100) · `wpt-prime-cyprus`(10/15~19 $1,100 · Chamada Prestige) · `wpt-bay-101`(10/23~27 $5,300) · `wpt-venetian-fall`(11/5~10 $5,000) · `wpt-prime-cambodia-2027`(2027-01-22~26 $1,100) · `wpt-cambodia-2027`(2027-01-27~02-01 $3,500) · `manila-megastack-warmup`(11/23~26) · `manila-december-special`(12/8~21) · `manila-super-series-25`(2027-01-22~30 ₱18,500) · `manila-megastack-26`(2027-02-22~03-07 ₱45,000).
- WPT 7행 sourceUrl = **스케줄 페이지**(09-03 curl·Playwright 200 · 상세 페이지는 Cloudflare 403). 🪶 스케줄 DOM은 «날짜·바이인이 이름 **앞**»에 와서 한 칸 밀려 읽히기 쉽다(A2 자리에 «SEP 17-22 $1,500»이 보이면 그건 Prime Australia) — 검수장 §1 값과 전건 일치 확인.
- i18n: `새틀라이트 티켓 전용` 6로케일 사전 + NOTE_EN 13건(다른 로케일 note는 없으면 배지를 안 그리는 규칙 그대로).

## ③ KO 정적 서술 — 사실 오류 8 + 독자 피해형 1 + 정밀화 2 + 자기모순 7 + 판단 3 전건

- 피망 → **네오위즈**(배지·본문) · 명칭 **«피망 쇼다운»** · 한게임 → **NHN** · APT = **Asian Poker Tour** · 2026 개최지 **제주·타이베이·인천 5스톱**(솔레어 상설 삭제) · Circuit **골드 링** · WSOP 기간 «5/26~7/15 브레이슬릿 100개 · 메인 FT 8/3~5» · «$9,404만» 라벨 = **WSOP 메인 역대 최대 상금풀 (2024)** · 새틀 = **GGPoker(국제) / WSOP.com(미국 내)** · «$1~$100» 삭제.
- 독자 피해형: 허브 안내문을 «두 곳은 외국인 전용 카지노 — 외국인·재외국민만 등록» + 제주·인천 카드 venue에 «(외국인 전용 카지노 · 내국인 참가 불가)» + **서울 카드 신설**(HPT 9/11~13 · APL 10/23~25 = 내국인 가능 축).
- 정밀화: 세금 «필요경비를 뺀 기타소득금액이 연 300만원 초과» · 외납공제 «공제한도 안에서만 · 초과분 이월».
- 자기모순: «13개+» 2곳·박스 → **`KR_2026` 데이터 계산**(현재 19행) · #89 ASPT를 인천 카드에서 분리 · APT 바이인 «₩230만~₩270만 · 챔피언십 USD 10,000»(데이터 축어) · WPT «$1,100 · $3,500~$5,300 · ₩1,750,000».
- 판단 3: **KPT 카드 → HPT**(스파인 0건·공식 0 → 근거 없는 브랜드 제거 · 로드맵 03·바이인표·FAQ·JSON-LD·키워드 전부) · «피망 포커 챔피언십» → «피망 쇼다운» · «완전히 합법» 삭제 — FAQ 1을 «게임머니(비환금) 기반 / 카지노 베뉴 참가 자격 / 공식 페이지 확인»으로 재작성(합법성 판정 문구 없음 · posting.mdc 규율).

## ④ 운영

- `verifiedAt` 09-03: 정정 9행 + 추가 13행 + JOPT **6행**(#24·39·48·81·83·84 — Fukuoka #01(종료)은 재현 대상 아니라 08-31 유지) + `harbour-poker-cup-2`(본체 Playwright 「2026 9.30 (WED)」) · 🔴 **미갱신**: partypoker 4행(Playwright로도 본문 0 = JS 셸) · `pcso-40-luzern`(Playwright 「30 September to 4 October 2026」 확인 — 갱신) · `pcsm-championship-luzern`(페이지에 날짜 미노출 — 미갱신) · 표본 3·#1은 검수장 재현이라 본체 verifiedAt은 그대로.
- sourceUrl: CAPT 2행(제펠트·브레겐츠) 대회 페이지 · #55 Merit · #64 Triton 유지(공식이 SHRS 날짜를 보인다).
- 스파인: `docs/tournament-spine.md` 말미 「2026-09-03 — M-082 이행 기록」(WPT 스케줄 200 · casinos.at 봇 403 · TWD 환산 가변 · APT 명칭 · 신분증 축어 · #1 유지).

## 요청

1. 회귀 3파일 기준선 뒤집기(정정형 0-감시 → 정정 반영 확인 · 추가 0-감시 → 13행 등재).
2. 🔴 **CAPT 그라츠·인스브루크·바덴 대회 페이지 URL** — 검수장이 jina로 열 수 있으면 3개 URL을 주면 옮기겠다.
3. partypoker 4행은 본체도 Playwright 본문 0 — 검수장 쪽 다른 표면(PR·베뉴 공식) 있으면 인계.
