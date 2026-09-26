# ms-rank 진행 — 🅰 족보 5편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ☑ / B ☐ / C ☐ · 커밋 —

A 산출(2026-09-26): `docs/ms-lanes/rank-brief.md` · `docs/keyword-bank/ms-rank.md`
키워드: DFS 실측 ~90개(google_ads search_volume 7회 · Labs suggestions/ideas 3회) · 라쿠 40개(requestId 1286784 — DFS와 전 행 일치) · 자동완성 18시드×2 · SERP 7회 · 경쟁 글 원문 8편(Playwright h1~h3, upswing 1편은 봇 차단)
카피: Fable 서브 1회 → Opus 판정(글자 수 트리밍 4 · 레지스터 표준체 정규화 · hand→tangan · Ace→As · Rules→Peraturan · 현지 추가 FAQ 2)

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-flush-vs-straight | ☑ | ☐ | ☐ | 트래픽 기둥(straight flush 390 · flush poker 320) · 현지 추가 FAQ 2 |
| holdem-kicker | ☑ | ☐ | ☐ | `export default POST;` 꼬리 있음(EN 동일) |
| holdem-tiebreak-rules | ☑ | ☐ | ☐ | `:::tiebreak` 행 = ms hand-rankings 축어 복사(§1-G) · 태그에서 «poker kicker» 제외 |
| holdem-split-pot-rules | ☑ | ☐ | ☐ | |
| holdem-reading-the-board | ☑ | ☐ | ☐ | |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| The Short Answer (stripe 머리 H3) | Jawapan Pendek | 🆕 코퍼스 0 · 1-A «Jawapan ringkas»(인용 라벨)와 구분 — H3 제목이라 Title Case |
| … at a glance | … Sekali Pandang | 🆕 (Kicker Sekali Pandang · Pemecah Seri Sekali Pandang) |
| The core numbers | Angka Teras | 🆕 |
| The Takeaways / The 3 Things to Remember | 3 Perkara untuk Diingati | hand-rankings L397 선례 |
| tie / tie-breaker | seri / pemecah seri | 코퍼스 seri 34 · hand-rankings desc |
| side card | kad sampingan (kicker 병기) | 코퍼스 1 |
| hole cards | hole card (첫 등장 «dua kad peribadi anda» 풀이) | 코퍼스 hole card 10 · kad peribadi 2 · 🔴 «kad lubang»(reddit 자동번역) 금지 |
| counterfeit(ed) | counterfeit (첫 등장 «dipadamkan nilainya» 풀이) | 🆕 코퍼스 1 · 풀이 신규 |
| dominated ace | As yang didominasi | 코퍼스 didominasi 1 |
| odd chip | odd chip (첫 등장 «cip ganjil» 풀이) | 🆕 코퍼스 0 |
| first / second / third kicker | kicker pertama / kedua / ketiga | 🆕 |
| The check: (인용 라벨 · split-pot L89) | Semakan: | 🆕 |
| paired board · dry · wet | board berpasangan · board kering · board basah | 코퍼스 51 · 45 · 7 |
| board texture | tekstur (board) | GTO 편 태그 «tekstur board poker» 표기와 일치 |
| Board (5 cards) — :::hand 라벨 | Board (5 kad) | hand-rankings L211 선례 |
| TDA 2024 Rule N / WSOP Rule N | Peraturan N TDA 2024 / Peraturan N WSOP | 코퍼스 «Peraturan 47-A TDA 2024» |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (없음) | 5편 전 링크 47개 대상이 전부 51편 안 · 제외 대회 가이드 5편 링크 0 · 페이지 내 앵커 0 · 외부 링크 0 | EN 그대로 |

## EN-먼저 후보

(없음) — A 구간에서 5편의 §13 자리 전부(보드 예시 30여 개 · 조합 수 · split-pot tip 빈도 2/3·1/2·1/3)를 손검산했다. EN과 모두 일치.

## 헤드 요청

1. **카니발(참고 · 판정은 헤드)**: 기존 ms `holdem-hand-rankings`의 태그 «kicker» · H2 «Bagaimana Kicker dan Seri Berfungsi dalam Poker?» · H2 «Mengapa Flush Menang ke atas Straight?» · FAQ «Adakah flush menang ke atas straight dalam poker?»가 kicker·tiebreak·flush-vs-straight와 의도가 겹친다. EN도 같은 필라→클러스터 구조라 결함은 아니다 — §7-⑤ **queue 링크 복원 회차**에서 필라의 해당 H2가 이 레인 글로 링크를 걸면 정리된다.
2. **hand-rankings 기회(참고)**: «urutan poker» 50 · «urutan poker tertinggi» 40(Malaysia · DFS) — 족보 순서 의도로 기존 ms hand-rankings 몫인데 그 글 태그에 없다(현재 태그 «susunan kad poker» 140 등). 관련 검색에도 «Urutan kad poker»가 반복 노출. 🔴 «urutan»의 인니어 쏠림 여부는 미확인 — 태그 추가 전 자동완성·SERP 언어 확인 필요.
3. **tiebreak 태그 편차**: EN 태그에 «poker kicker»가 있으나 ms에서는 뺐다(레인 안 kicker 글과 카니발 회피). `check:structure`가 태그를 세지 않으면 무시해도 된다.

## 미결

- 없음. B 입력 = `rank-brief.md` + EN 마스터 5편(읽기 전용).
