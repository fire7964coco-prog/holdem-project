# `/id/solver` 랜딩 신설 브리프 — 저작 회차의 **유일한 입력**

> **작성 2026-09-04(준비 회차 · Opus).** 절차 정본 = `docs/solver-landing-playbook.md`.
> 🔴 **이 문서 하나만 읽고 저작한다.** 실측·게이트·빌드·배포는 이 회차의 몫이 아니다 —
> 그걸 섞으면 컨텍스트가 불어 저작 모델의 쿼터가 저작에 닿기 전에 마른다(`settled-decisions.md` §5-A-3).
> 🔴 **여기 없는 수치를 지어내지 마라.** 부족하면 「자료 없음」으로 두고 넘겨라 — 마감 회차가 채운다.

**만들 것** = `app/id/solver/` 3파일: `page.tsx` · `faq.ts` · `solver-client.tsx`
**구조 정본** = `app/fr/solver/`(직전 신설분). **내용은 번역이 아니라 인도네시아 맥락으로 재저작.**

---

## 0. 🔴 이 회차는 «경량판»이다 — 무엇을 빼기로 했나

사장님 판단(2026-09-04): 도구 페이지는 **의도가 하나**(«지금 무료로 솔버를 쓰고 싶다»)라
블로그식 롱테일 클러스터링이 변별력을 못 낸다.

| 층 | 판정 |
|---|---|
| **A. 핵심 표기**(그 언어에서 뭐라 부르나 · 어순 · 오염어) | 🟢 **유지** — 아래 §2에 실측을 다 실었다 |
| **B. 롱테일 6~8개 클러스터링 · FAQ 20문항 «현지 방어 문항» 창작 · 로케일 키워드 뱅크 신설** | 🔴 **버린다** |

→ **FAQ·본문 골격은 EN/fr 랜딩 기준으로 재저작**하고, **표기만 §1~§2의 실측값으로** 간다.

---

## 1. 🔴 앱 축어 — 여기가 라벨의 정본

원본 = `docs/solver-app-verbatim-id-2026-09-04.md`(라이브 `?lang=id` Playwright 실측) +
솔버 소스 `solver/src/i18n.ts`. **앱은 id로 완역돼 있다**(`<html lang="id">` 확인).

🔴 **규율(플레이북 §4-8)**: **라벨(용어)은 앱 축어가 정본**이다. 그러나 **해설의 «수치·주장»에
앱 문구를 옮겨 쓰지 마라** — ja에서 그렇게 하다 사실오류 3건이 났다. 수치의 심판은 스펙이다.

### 1-1. 앱 title / description (솔버 세션이 리서치해 확정한 값)

```
title       : HoldemMaster GTO Trainer — Solver & Trainer GTO Gratis untuk Texas Hold'em
description : Solver GTO gratis yang langsung berjalan di browser Anda, tanpa instal apa pun.
              Hitung strategi postflop Texas Hold'em berdasarkan range, board, dan bet size.
              Dari HoldemMaster.
```

### 1-2. 화면 축어 (그대로 쓸 것)

| 자리 | 축어 |
|---|---|
| **H1(앱)** | **`Strategi GTO, langsung di browser Anda.`** |
| 네비 | `Solver` · `Hasil` · `Komunitas HoldemMaster` · `Tentang` · `Cara pakai` |
| 탭 | `Trainer GTO`(Skor EV) · `Chart preflop`(Range) · `Equity`(% menang) |
| 5단계 | `① Range OOP` · `② Range IP` · `③ Board` · `④ Bet size` · `⑤ Hitung` |
| 학습 스팟 | `Spot belajar` · `Lihat hasil` · `Spot kustom` |
| 기능 | `Impor JSON` · `Ekspor JSON` · `Simpan` · `Muat` · `Ganti nama` · `Tambah grup` · `Tantangan Harian` · `WASM Postflop` |
| 셀링 문장 | `Semua fitur, tanpa batas pemakaian` · `Belajar offline` · `Perhitungan cepat` · `Multithread — secepat solver desktop` |
| 트레이너 채점 | `Mainkan spot dan dapatkan skor kerugian EV relatif terhadap pot` 🟢 **«팟 대비»가 정정본이다 — «bb로 채점»으로 쓰지 마라** |
| 칩 단위 | `Masukkan jumlah dalam chip bilangan bulat` · 권장 `10 chip = 1bb` |

🔴 **소수 구분자는 «쉼표»다** — 앱이 `0,0 combo (0,0%)`로 쓴다. 랜딩의 모든 수치를 이 표기로.

### 1-3. `featureList`(JSON-LD)는 **화면에 실제로 있는 것만**

위 §1-2에서 확인된 것만 적는다. fr 랜딩의 10개 항목과 기능이 같으므로 그 뼈대를 쓰되
**id 축어로** 적는다. 🔴 **스키마에만 있고 본문에 없는 정보는 LLM이 못 읽는다** —
`featureList`의 모든 항목이 `solver-client.tsx` **본문에 문장으로도** 있어야 한다.

---

## 2. A층 실측 (2026-09-04 · DataForSEO location 2360 Indonesia)

### 2-1. 볼륨

| 키워드 | 월간 | 판정 |
|---|---:|---|
| **`gto poker`** | **50** | 🥇 **조준축.** 12개월 20~90 |
| `poker gto` | 50 | 🔴 **시계열이 `gto poker`와 완전히 동일** = 구글이 어순을 정규화한다 → **어순 판정 불필요** |
| `poker gratis` | 50 | ⚠ **조준 금지** — 의도가 «무료로 플레이할 게임»일 가능성 |
| `range poker` | 20 | 보조 |
| `gto solver` · `solver poker` · `poker solver` · `kalkulator poker` | 각 **10** | 🔴 solver 계열은 검색축이 아니다 |
| `solver gto` · `solver texas holdem` · `gto trainer` | ~0 / null | — |

🔴 **`solver`는 «검색축»이 아니라 «정체성 표기»로 쓴다** — 앱 이름과 일치시키는 것이 목적이지
검색량을 노리는 자리가 아니다. 제목에는 넣되 **`GTO`와 붙여서**.

### 2-2. SERP 실측 (`gto poker` · Indonesia · 모바일 · top 24)

| 발견 | 뜻 |
|---|---|
| 인도네시아어로 **«쓰인»** 페이지는 `poker.academy/in/gto-trainer`(24위) **하나뿐** | 🟢 **로컬 원문 경쟁자 0** |
| 🔴 **`translate.google.com`이 4개 랭크**(upswing · pokernews · 888poker · pokerstars) | **구글이 인니어 원문이 없어서 영어를 번역해 때우는 중** = 무주공산의 강한 신호 |
| 상위는 전부 해외 도구 브랜드(gtowizard · gtogecko · gtobase · gtolab · gtopre) + Play 스토어 앱 | 브랜드 축은 못 먹는다. **«인니어로 설명된 무료 웹 솔버»** 자리가 빈다 |
| 의도가 **정의형 + 도구형 혼합**(«GTO가 뭔가» + «도구를 찾는다») | 랜딩 상단에 **한 문단짜리 GTO 정의**를 두고 바로 도구로 잇는다 |
| 관련검색 1번 = **`gto poker free`** · 이어서 `calculator` · `app` · `chart` · `practice` | 🟢 **훅(무료·설치 불필요)이 검색 의도와 정확히 일치** |

🪶 볼륨 50은 작다. 그래도 간다 — 규율 「볼륨 10도 winnable이면 버리지 마(승산 > 볼륨)」.
**PAA/관련검색 6개는 FAQ 축으로 흡수**한다(새 롱테일을 «발굴»하지는 않는다 = B층 제외).

### 2-3. 오염어 — id는 위험이 낮다

es(`GTO`=과나후아토) · pt·de(`solver`=엑셀) · zh(`GTO`=자동차) 같은 강한 오염이 **id에서는 확인되지 않았다**
(SERP top 24가 전부 포커였다). 다만 **`solver` 단독은 쓰지 말고 항상 `GTO`·`poker`와 붙인다**(공통 규율).

---

## 3. 🔴 문체·용어 — 이건 협상 대상이 아니다

정본 = `docs/keyword-bank/id-posting-reference.md` §5·§5-A + 솔버 원어민 검수.

| 항목 | 값 | 근거 |
|---|---|---|
| 2인칭 | **`Anda`** (대문자) | 코퍼스 실측 **Anda 3,340 : kamu 0**. 🔴 `kamu` 금지 |
| 무료 | **`gratis`** | 앱 확정값. (⚠ `percuma`는 **말레이어**다 — 섞지 마라) |
| 브라우저 | **`browser`** | 앱 확정값. (⚠ `pelayar`는 말레이어) |
| solver · trainer · range · board · bet size · equity · postflop | **영어 그대로** | 본체 id 43편 실측 — solver 26회 · range 215회 · board 380회 |
| 소수 구분자 | **쉼표** `0,0%` | 앱 표기 |

🔴 **말레이어와 섞지 마라.** `/ms/solver`는 이번 회차 대상이 아니고 어휘가 다르다(§7).

---

## 4. 제목·설명 — 확정안

🔴 **규칙 셋을 동시에 지켜야 한다**: ① 조준축 `gto poker`를 한 문자열로 덮는다
② `GTO`도 `solver`도 단독으로 두지 않는다 ③ 훅 = **무료 + 브라우저 + 설치·계정 불필요**
(관련검색 1번이 `gto poker free`다).

```
TITLE (~79자 대역 — 형제 랜딩과 맞춘다)
  Solver GTO Poker Gratis — langsung di browser, tanpa instal | HoldemMaster

DESCRIPTION (≤160자)
  Solver GTO poker gratis yang langsung berjalan di browser Anda — tanpa instal,
  tanpa akun. Hitung strategi postflop Texas Hold'em: range, board, dan bet size.
```

🪶 저작 회차에서 더 나은 문안이 나오면 **바꿔도 된다.** 단 위 ①②③과 §3 어휘는 고정이다.

`openGraph.title`은 형제 랜딩 관례대로 짧게(`Solver GTO Poker Gratis — HoldemMaster`).
`metadata.title`은 반드시 **`{ absolute: TITLE }`** — 안 쓰면 루트 layout의
`title.template("%s | 홀덤마스터")`가 붙어 **인도네시아어 결과에 한국어 브랜드명이 노출된다.**

---

## 5. 구조 — `app/fr/solver/`를 그대로 따른다

| 파일 | 내용 |
|---|---|
| `page.tsx` | 헤더 주석(근거·실측 요약) · `TITLE`/`DESCRIPTION` 상수 · `metadata`(canonical · **alternates.languages** · twitter · openGraph `locale: "id_ID"`) · `jsonLd`(WebApplication + FAQPage + BreadcrumbList) · `<HubPage title="Solver GTO" locale="id"><SolverClientId /></HubPage>` |
| `faq.ts` | `export const SOLVER_FAQ_ID = [{ q, a }, …]` |
| `solver-client.tsx` | 본문 — 질문형 H2 다수 + 각 H2 직후 직답 |

🔴 **`alternates.languages`는 마감 회차가 10개로 맞춘다.** 저작 회차는 **기존 9개 + `id-ID`**를
그대로 적어 두기만 하면 된다(기존 9파일 동시 수정은 ③ 마감 몫):

```
ko-KR /solver · en-US /en/solver · ja-JP /ja/solver · es-ES /es/solver · pt-BR /pt/solver
de-DE /de/solver · zh-Hans /zh/solver · zh-Hant /zh-hant/solver · fr-FR /fr/solver
id-ID /id/solver   ← 신규
```

---

## 6. 내부링크 — **실재 확인된 것만** (2026-09-04 실측)

🔴 **id에는 도구 라우트가 없다.** `app/id/`에 있는 것은 `blog`와 홈뿐이다 —
`hand-chart`·`calculator`·`glossary`·`quiz`는 **전부 404**다. EN 링크를 옮기면 깨진다.

🟢 대신 **id 블로그 42편이 두껍고 표준 세트가 12/13 성립한다**(fr은 6편뿐이라 못 했던 것):

| slug | title(축어) |
|---|---|
| `holdem-starting-hands-chart` | Chart Starting Hands Poker & Kartu Awal Terbaik |
| `holdem-pot-odds` | Cara menghitung pot odds di poker — metode 10 detik |
| `holdem-equity` | Equity poker dijelaskan — persen menang, fold equity… |
| `holdem-3bet` | 3-Bet di Poker: Kapan 3-Bet, Seberapa Besar… |
| `holdem-strategy` | Strategi Texas Hold'em: 5 Keputusan di Balik Setiap Tangan |
| `holdem-glossary` | Glosarium Texas Hold'em: Semua Istilah Poker… |
| `holdem-continuation-bet` | Continuation Bet (C-Bet): Kapan Tembak Flop… |
| `holdem-position-play` | Strategi Posisi: In vs Out of Position |
| `holdem-hand-rankings` | Urutan kartu poker dari tertinggi sampai terendah |
| `texas-holdem-rules-for-beginners` | Cara Main Poker Texas Hold'em untuk Pemula |
| `holdem-short-stack` | Cara memainkan short stack di poker — push/fold |
| `holdem-icm` | Apa Itu ICM di Poker? Independent Chip Model |

❌ `holdem-range-meaning`은 **id에 없다** — 링크 걸지 마라.
경로는 `/id/blog/<slug>` 형식. 🔴 **링크 개수·대상 구조는 EN 랜딩과 같게** 간다.

🟢 **카니발 없음(실측)**: id 42편 중 **title·seoTitle에 GTO가 들어간 글이 0편**이다.
GTO·solver 축은 무주공산이라 랜딩이 가져가도 충돌하지 않는다.
🔴 단 **프리플랍 레인지표 축은 `holdem-starting-hands-chart`가 소유**한다 —
랜딩은 **포스트플랍으로 가른다**(플레이북 §4-7).

---

## 7. 🔴 금지·주의

1. **`/ms/solver`를 같은 회차에 만들지 마라.** ms 코퍼스는 **9편이고 전부 초심자 룰 글**이라
   GTO 용어 표본이 얇고(range 3 · equity 9) 표준 링크 세트가 불성립이다. 별건 판정으로 남긴다.
2. **개수 하드코딩 금지**(플레이북 §4-15) — 「13개 스팟 중」류. «전용 그룹이 있다»식으로 쓴다.
3. **앱에 없는 기능·패널 이름을 지어내지 마라.** §1-2에 없는 라벨은 쓰지 않는다.
4. **RTA·봇·실시간 보조 축 금지.** 「공부·분석 도구」로만 선다.
5. **합법성 축을 열지 마라** — 메모리 규율(신규 발행에서 합법성은 열지 않는다).
6. **본문에 백틱 금지**(CLAUDE.md §12-A · 빌드 파손).
7. FAQ는 **`**Q.` + 빈 줄 + `A.`** 형식이라야 리치결과가 나온다.
8. FAQ 안에서 `==r:`·`==g:` 색상 하이라이트를 쓰지 마라(정본 = `settled-decisions.md` §3).

9. 🔴🔴 **앱 축어는 «라벨»에만 정본이다 — 해설 문장·수치로 옮기지 마라.**
   §1-2의 축어는 **용어·버튼·표기**를 고정하는 용도다. 앱의 **설명 문장**을 랜딩 해설로 옮기면
   사실오류가 된다 — ja 회차에서 그렇게 **3건**이 났고 그중 하나는 **EN이 전날 철회한 문장**이었다.
   🔴 **앱 화면은 근거가 아니다** — 아래 10번이 이유다. (플레이북 §4-8)

10. 🔴🔴 **폐기 명제 8개 — 앱에 «아직 살아 있다». 랜딩으로 옮기지 마라.**
    기존 랜딩 6종은 전부 정정됐지만 **앱 문구는 9/9 언어에 그대로 남아 있다**(RP-01·02·03·19·20).
    id 앱도 같은 계보다 — **앱 화면을 보고 해설을 쓰면 이걸 그대로 되살린다.**

    | id | 앱이 말하는 것 ❌ | 정본 ✅ |
    |---|---|---|
    | RP-01 | 미들 커넥트 보드(9♥8♥7♣)는 **콜러(BB)에게 레인지 우위**가 넘어간다 | 넘어가지 **않았다** — 에퀴티 **48,5% 대 51,5%**로 여전히 BTN. «먼저 친다»와 «우위»는 다른 말 |
    | RP-02 | 「BTN의 C벳 빈도가 **크게 떨어지는 것을 확인**할 수 있다」 | **화면이 그 값을 주지 않는다** — 교육 예제는 플랍 첫 액션(BB 차례)에서 멈춘다 |
    | RP-03 | 「**SPR이 낮아서** 작은 벳이 레인지 전체에 압력을 만든다」 | 사이즈를 정하는 건 스택 깊이가 아니라 **레인지의 모양**(같은 SPR 4,0인데 ⑨는 큰 사이즈 98,4%) |
    | RP-04 | 「A♠A♥6♦에서 **A를 든 트립스는 드물다**」 | 드물지 **않다** — SB **88콤보(17,5%)**로 트리플(≈5%)의 3~4배 |
    | RP-06 | 「**같은 0,05bb**라도 작은 팟에선 큰 실수」 | **0,08bb**가 정본. 0,05는 자기 임계값과 모순(0,05 ÷ 5,5 = 0,909% = «허용 가능») |
    | RP-17 | 「8♦5♣2♠는 3벳 레인지를 **통째로** 빗나간다」 | 수치로 써라 — 거트샷 **4,8%** · 백도어 플러시 **16,9%** · 드로우 없음 **78,3%** · **탑 페어 0%** |
    | RP-19 | 「6♠5♥2♦는 **BB가 체크레이즈를 많이 하는** 보드다」 | 화면이 그 값을 주지 않는다 — 주는 값은 «BB 리드 3,2% · 체크 96,8%»뿐 |
    | RP-20 | 「① A♥7♦2♣에서 **BB 체크 «다음» BTN이 작은 C벳**을 치는 걸 관찰하라」 | 화면이 그 노드를 주지 않는다 — 주는 값은 **BB 체크 98,2%**뿐 |

    🟢 **가장 안전한 처방 = 특정 보드의 «관찰 지시»를 아예 쓰지 마라.** 랜딩이 할 일은
    «무엇을 연습하는 도구인가»를 말하는 것이지 개별 스팟의 결론을 인용하는 것이 아니다.
    🪶 RP-05(개수 하드코딩)·RP-07(채점 = «팟 대비»)은 위 **2번**과 **§3**이 이미 막고 있다.

---

## 8. 저작 회차가 **하지 않는** 것 (③ 마감 회차 몫)

- **등록 6곳**: `lib/hub-routes.ts`(`id: ["/id/blog", "/id/solver"]`) ·
  🔴 **`lib/hub-i18n.ts`**(**id 블록 자체가 없다** — 없으면 셸·사이드바가 통째로 영어/한국어로 떨어진다.
  pt에서 실제로 걸린 자리) · `components/side-rail.tsx` · `components/solver-promo.tsx` ·
  `scripts/generate-sitemap.mjs`(`{ path: "/id/solver", priority: "0.7" }`)
- 🔴 **hreflang — 기존 9개 랜딩 파일 전부에 `id-ID` 동시 추가.** 한쪽만 고치면 구글이 세트를
  통째로 무시하고 `check:hreflang`이 빌드를 세운다
- 게이트 · **적대검수 4렌즈 + 2차 교열**(신설이므로 **GPT 층은 배포 «전»**) · 빌드 · 배포 · 라이브 확인
- **솔버 세션 통지** — `solver/src/outbound.ts`의 `id: { "": "/id" }`에 **`"/solver": "/id/solver"`** 추가 +
  `id-verify.js`의 「랜딩 링크가 없어야 한다」 단언 뒤집기. (그 파일 주석이 이미
  「본체가 `/id/solver`를 열면 여기와 id-verify.js가 같이 낡는다」고 예고해 뒀다)

---

## 9. 근거 파일 (이 브리프가 요약한 원본)

- `docs/solver-app-verbatim-id-2026-09-04.md` — 앱 화면 축어 라이브 실측
- `docs/keyword-bank/id-posting-reference.md` §5·§5-A — 문체·용어 원어민 판정
- `docs/keyword-bank/id-core-volumes.md` — id 조사 도구 사용법
- `docs/solver-landing-playbook.md` — 절차 정본 12단계.
  🔴 **저작 회차는 열지 마라** — §6 공통사양의 「FAQ 20문항±」이 **사장님 경량화 판정(§0)으로 폐기된 B층**이라
  열면 폐기된 규격을 되살린다. 저작에 걸리는 §4-8·§4-9는 **위 §7-9·§7-10으로 인라인했다**
- `홀덤검수/reports/폐기명제목록-2026-08-23.md` — RP-01~RP-20.
  🔴 **열지 마라**(다른 폴더 = 검수장 경계). 랜딩에 걸리는 8개는 **§7-10에 전부 옮겨 실었다**
- `app/fr/solver/` — 구조 정본(직전 신설분)
- 솔버 소스 `solver/src/i18n.ts`(로케일 11개 · DOC_META) · `outbound.ts`(LOCALE_PATHS)
