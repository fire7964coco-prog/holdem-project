# id 포스팅 참고 파일 — 키워드 서치·웹서치 축적 (신규 발행·경화 공용)

> **용도**: id 신규 포스팅·경화 착수 전 통독하는 참고 자료. 세션 4~5(2026-08-27)의
> MCP 2종(DataForSEO + 라쿠) 실측·자동완성 발굴·네이티브 렌즈 판정을 축적한다.
> 🔴 **볼륨 수치의 정본은 `id-core-volumes.md`다** — 여기엔 그 파일에 없는
> «발굴 원자료·의도 판정·현지화 노트·커버리지 맵»을 담는다. 볼륨을 인용할 땐 정본을 봐라.
> 새 실측이 생기면 이 파일에 절을 추가한다(덮어쓰지 말 것).

---

## 1. id 조사 도구 사용법 (실측 검증된 경로)

| 용도 | 도구 | 비고 |
|---|---|---|
| **발굴** | DFS Labs `keyword_suggestions`(location=Indonesia·language=id — kd 동봉) + 구글 자동완성(`hl=id`) | 라쿠 발굴계 22종은 Japan 고정이라 **id 발굴 금지** |
| **볼륨·시계열** | 라쿠 `search-volume-history`(Indonesia·Indonesian·48m — yoy 공짜) | 언어당 15크레딧 정액, 키워드 수백 개 몰아넣기 |
| **교차검증** | DFS REST `google_ads/search_volume` | 2026-08-27 실측: **라쿠와 15/15 완전 일치** — 두 벤더 다 구글 KWP 중계 |
| **의도 분해** | 자동완성 `suggestqueries.google.com/complete/search?client=firefox&hl=id&q=` | 자릿수 함정 차단의 본체(§3) |

⚠ DFS **MCP**가 40100이면 프로세스가 env 등록 전에 뜬 것 — REST 직접(자격증명 = `.env.local`,
처방 = `docs/rakko-playbook.md` 2026-08-27 절). CPC는 벤더 간 30배 — 근거 금지.

## 2. 발굴 원자료 — DFS Labs 서제스트 (2026-08-27 · 뱅크 미수록분 포함)

### 2-1. «kartu remi» 생태계 (🔴 광의 — remi = 카드/러미 일반. 포커 명시형만 조준)

| 키워드 | vol | kd | 의도 판정 |
|---|--:|--:|---|
| kartu remi / remi kartu / kartu as remi | 각 33.100 | 0~2 | 카드 실물·러미 게임 일반 — **포커 조준 금지** |
| jumlah kartu remi | 3.600 | 2 | «몇 장?» 잡학 — 포커 아님 |
| cara main kartu remi | 2.400 | 8 | 러미 놀이법 — ⚠ «cara main poker kartu remi» 140(+300%↑)만 포커 |
| gambar / ukuran / harga kartu remi | 2.400/1.600/1.300 | 0 | 실물 카드 쇼핑·이미지 — 폐기 |
| permainan/game kartu remi | 각 1.900 | 0~6 | 앱·게임 일반 |
| kartu remi joker / ada berapa / nama-nama | 1.600/1.600/880 | 0~6 | 잡학 — 포커 밖 |
| **urutan kartu remi** | 1.600 | **8** | 카드 순서 질문 — hand-rankings FAQ로 흡수됨(§4) |
| **urutan kartu remi tertinggi (sampai terendah)** | 1.300 (110·+244%↑↑) | 8 | 〃 급성장 신생 |

→ **결론**: remi 헤드텀들은 볼륨이 커도 포커 의도가 아니다. 포커 몫은 «urutan … remi (poker)»
   질문축뿐이고 이미 필라 FAQ가 흡수. **remi 단독 신규 글 근거 없음.**

### 2-2. rankings 축 롱테일 (뱅크 배치 3에 실측 있음 — 여긴 kd·판정 보강)

- `urutan kartu poker` 계열 kd 14~20(전부 낮음) — **이 축은 SERP가 무르다.**
- 자동완성 완전 목록(urutan kartu poker + …): dari tertinggi sampai terendah · tertinggi ·
  **simbol** · **super royal flush** · texas · terkuat · dari terendah · **gambar** · holdem
  → gambar(이미지 의도)·dari terendah는 null — 조치 불요. 나머지 전부 필라가 커버.
- `kartu tertinggi di poker` 210 (12m +116% · **yoy1y +586%**) — 급성장 질문축, FAQ 커버 완료.
- flush 축: `flush in poker`(720)·`royal flush in poker`(390) 등 **영어 혼종 쿼리가 id SERP에
  실재** — 인도네시아 검색자가 영어로도 친다. 태그는 id형 우선, 본문에 영어 용어 자연 병기.

### 2-3. 저볼륨 확정 (측정 완료 — 재조사 불요)

kicker poker 10 · split pot poker 10 · cara membaca kartu poker 10 · poker 4 kartu sama null ·
kicker meaning/what is a kicker 각 10 · poker flush vs straight 10 → **전부 흡수 전략.**
kicker·tiebreak·split-pot·reading 4편은 id 검색축이 없다 — 이 4편의 경화 본체는
볼륨 재조준이 아니라 **드리프트 소급 + EN 경화분 현지화 이식**이다(세션 5 선례).

## 3. 🔴 의도 판정 기록 — 자릿수 함정 (채택 전 반드시 이 표 확인)

| 키워드 | vol | 자동완성 실측 의도 | 판정 |
|---|--:|---|---|
| **full house** | 22.200 | 한국 드라마(korea·drakor·OST·tahun berapa) 지배 | 🔴 채택 금지 |
| full house poker | 1.000 | Xbox 게임 동명 혼재 | 태그 보류 — 본문 커버리지만 |
| **all in artinya** | 14.800 | 비포커 슬랭(bahasa gaul·ML 게임·연애·직장) | 🔴 채택 금지(세션 4 판정) |
| **flush artinya** | — | 변기 flush·ink flush 지배. royal/straight flush artinya만 포커 | 단독 금지 — 결합형만 |
| royal flush | 2.400 | 포커 우세(adalah·vs quad aces·card·chance) | ✅ 커버리지 OK(단독 글 금지) |
| **seri poker** | 90↓ | 영어 «poker series»(netflix·world·2026) 지배 | 🔴 split-pot에 쓰지 마라 |
| **apa itu kicker** | — | 비포커(roblox·kicker light·bullish kicker 캔들) | 🔴 제목 단독 사용 금지 |
| kartu sama | — | SIM카드·BPJS 노이즈 100% | 🔴 시드로도 쓰지 마라 |
| royal flush **adalah vs artinya** | 260↓ / 170↑ | 표현이 adalah→**artinya**로 이동 중 | FAQ 문형에 artinya 채택 |
| **urutan kartu poker super royal flush** | 90 · +325%↑ | 비표준 용어(표준 족보에 없음) — 필라가 신화격파 FAQ로 흡수 | ⚠ 기원(로컬 앱 잭팟 용어설)은 **1차 출처 미확보 — 본문에 기원 서술 금지**(중립 문안 유지). 실제 룸 잭팟 규정을 Playwright로 원문 확인하면 승격 가능 |

## 4. 커버리지 맵 — 실측 키워드가 어느 글에 있나 (카니발 방지)

| 축 | 소유 글 | 자리 |
|---|---|---|
| cara main poker 4.400 · kartu remi 140 · 2 kartu ~240 · tongkrongan 260 | `texas-holdem-rules-for-beginners` | title·태그·FAQ (세션 4) |
| urutan kartu poker 1.900 · tertinggi 1.300 · dari tertinggi sampai terendah 480 · susunan/kombinasi 320 · remi poker · kartu tertinggi 210 · super royal flush · simbol/lambang | `holdem-hand-rankings` | title·seoTitle·H2·태그·FAQ (세션 5) |
| flush poker 720 · straight poker 390 · royal/straight flush artinya · apa itu flush 40 | `holdem-flush-vs-straight` | 태그·FAQ·본문 |
| istilah poker 110(+27%) | ⏭ `holdem-glossary` — **세션 8 몫**(예약) | |
| 필라 인바운드 앵커 | 형제 5편 전부 «urutan kartu poker» 계열로 통일(세션 5) — 새 글도 이 앵커 사용 | |

## 5. 현지화 노트 — 네이티브 렌즈 판정 축적 (신규 작성 시 그대로 적용)

- **영어 용어 통용**: flush·straight·kicker·chop·straddle·buy-in·bubble은 영어 그대로 —
  과번역이 오히려 결함. 커뮤니티 실사용 기준.
- **보드 = board**: 현지 커뮤니티는 커뮤니티 카드를 board라 부른다. `meja`는 «테이블(자리)» —
  `meja berpasangan`(테이블이 페어됐다)류는 어색. ⚠ 기존 코퍼스는 meja 우세 4편·board 우세
  2편으로 분열(핸드오프 미결 — 통일 판정 대기). **신규 글은 board로 써라.**
- **어형**: 반전 훅엔 `ternyata`(«Kira menang, ternyata kalah?») · 복수형 영어 -s + id 접속
  혼종 금지(«kings dan nines» ✗ → «dua pair K dan 9») · 서수는 id로(«first kicker» ✗ →
  «kicker pertama») · «edge case» 직역(kasus tepi) ✗ → kasus langka/khusus.
- **무생물 주어 `ia` 남발 금지**(기계번역 냄새) — FAQ·tldr 등 노출 자리는 명사 반복/주어 생략.
- **직역 지뢰 실례**: menyewa board(rent 직역) · tanda bintangnya(asterisk 직역) ·
  jangan berkedip(don't blink) · melawan sebagian besar deck — 전부 세션 5에서 교정됨.
- **표기 분열 미결 3종**(코퍼스 판정 대기 — 신규 글은 권고안으로): 액션=check · 확인=cek ·
  판=hand · 보드=board · 본문 산문은 As(키워드 «ace kicker»는 영어 유지).
- **메타 규격**: readTime 단위 = `mnt`(코퍼스 36편 — min/menit 아님) · readnext 라벨 =
  `Lanjut membaca`(26편 표준) · 관련글 H2 = `Artikel Terkait` · seoTitle ~60자 · desc ≤160자.

## 6. 신규 포스팅 후보 판정 (2026-08-27 기준)

1. **신규 글 근거가 나온 축은 없다** — 측정된 큰 볼륨(kartu remi 33k·full house 22k)은 전부
   비포커 의도. 포커 의도 축은 기존 42편이 커버 중이다. **저볼륨 롱테일 집합전략 유지.**
2. 추적 중인 급성장 축(다음 재실측 때 확인): `cara main poker kartu remi` 140→월 590 ·
   `kartu tertinggi di poker` yoy +586% · `urutan kartu remi tertinggi sampai terendah` +244% ·
   `super royal flush` +325% · `main poker itu apa` +113%(질문축 — 성장 지속 시 필라 FAQ 승격).
3. 재실측 방법: 이 파일 §2~3의 키워드를 라쿠 배치 1회(15크레딧)로 — requestId 계보는
   `id-core-volumes.md` 머리 참조(1258288 → 1258295 → 1258342).
