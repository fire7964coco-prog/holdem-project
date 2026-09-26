# ms-prob 진행 — 🅱 확률 7편

> 정본 = docs/ms-translation-lanes.md · 이 파일은 이 레인만 쓴다.

## 상태 — A ✅ / B ☐ / C ☐ · 커밋 —

A 산출(2026-09-26): `docs/ms-lanes/prob-brief.md` · `docs/keyword-bank/ms-prob.md`
- 키워드 실측: DFS Ads 88개 + Labs suggestions 20시드 · 라쿠 39개(DFS와 전 행 일치) · 자동완성 20시드×2 · SERP 8회 · 현지 원문 3페이지(Playwright)
- 카피: Fable 서브 1회 · Opus 조정 7편 전부(글자 수는 전부 한도 안 — 조정은 직역투·합법성 어휘 «undang-undang»→«peraturan»·태그 중복 해소)

## 편별

| slug | A 브리프 | B 집필 | C 렌즈 | 비고 |
|---|---|---|---|---|
| holdem-probability | ✅ | ☐ | ☐ | royal flush 계열(260·20×4)이 유일한 실볼륨 · 앵커 `#pot-odds` 처리 필요 |
| holdem-pot-odds | ✅ | ☐ | ☐ | |
| holdem-outs | ✅ | ☐ | ☐ | `outs dalam poker` #1 = ms.wikipedia(의도 불일치) = 공백 |
| holdem-drawing-odds | ✅ | ☐ | ☐ | gutshot 상승(20) |
| holdem-implied-odds | ✅ | ☐ | ☐ | 스포츠 베팅 의도(converter·american odds) 차단 |
| holdem-equity | ✅ | ☐ | ☐ | ms 태그에서 «poker equity calculator» 제외(`/ms/calculator` 몫) |
| holdem-card-counting | ✅ | ☐ | ☐ | blackjack card counting 140 · 합법성은 EN의 룸·TDA 프레임만 |

## 신규 용어

| EN | 채택 ms | 근거 |
|---|---|---|
| probability(제목·표 머리) | kebarangkalian | 코퍼스 12 · poker-tool.org/ms 제목어 · SERP `kebarangkalian poker` 공백 |
| X-to-1 | X:1 | 코퍼스 «2.7:1»·«6:1» |
| equity realization | realisasi equity | ms-posting-reference §8-C |
| dirty / tainted outs | outs kotor (첫 등장 «dirty outs» 병기) | 신규 — 코퍼스 «outs … bersih»의 반의 |
| clean outs | outs bersih | 코퍼스 «outs tersebut belum tentu bersih» |
| dead cards | kad mati (첫 등장 «dead cards» 병기) | 신규(코퍼스 0) |
| card removal | card removal(영어) | blocker 14 선례 |
| Rule of 4 and 2 | 영어 이름 유지 | «peraturan 4 dan 2» 자동완성 = 법령 오염(ms-calculator §2-E) |
| suited | satu jenis | 코퍼스 |

## 링크 편차

| slug | EN 링크 대상 | 처리 |
|---|---|---|
| (없음) | 7편의 EN 내부링크 대상 전부 §0-A 51편 안 | 전부 EN 그대로 `/ms/blog/…` |
| holdem-probability | L111 `(#pot-odds)` 페이지 내 앵커 | ms H2 slugify id로 교체(EN 앵커는 죽어 있음 — 아래 EN-먼저) |

## EN-먼저 후보

| EN 파일:L## | 무엇 | 근거 |
|---|---|---|
| lib/posts-en/holdem-probability.ts:111 | `[pot odds](#pot-odds)` — 대상 H2 L162 «Pot Odds: Turning Your Odds Into a Call or Fold»의 실제 id는 `lib/blog-headings.ts` slugify 결과 `pot-odds-turning-your-odds-into-a-call-or-fold` → 앵커가 어디에도 안 닿는다. 같은 문자열이 es·de·pt·id·zh·zh-hant 본문에도 있다 | slugify 규칙 대조(빌드 산출물 미확인 — 헤드가 `.next` id로 확정) |
| (PAA · 7편 공통) | MY SERP PAA «What is the 42 rule in poker?»(3개 SERP 반복) · «15/25/35 rule» · «80/20 rule» · «7/2 rule» — EN 확률 클러스터에 없음 | DFS SERP 2026-09-26 · 뱅크 §3-A. 채택 여부는 EN 키워드 실측 후 |

## 헤드 요청

- (없음 — 레인 밖 파일 수정 필요 없음)

## 미결

- **B 입력 범위 해석**: 정본 §3 «B = 브리프 하나만»을, 브리프에 메타·H2·FAQ·이미지·디렉티브·링크·경험담·§13 카드 행을 **축어로** 싣고 **본문 산문은 EN 파일 1회 열람(골격 복사용)**으로 해석했다(편당 ~20KB 전문 복제를 피함). 사실·수치 출처는 EN 축어뿐이라 §3의 목적(기억으로 사실을 쓰지 않게)은 유지된다. 헤드가 다르게 보면 C 전에 알려 달라.
