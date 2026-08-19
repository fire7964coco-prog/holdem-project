# 키워드 뱅크 — 영어 GTO·솔버 (`/en/solver` 랜딩용)

> 실측일 **2026-08-19** · ① 구글 자동완성(`suggestqueries.google.com`, hl=en&gl=us)
> ② 라쿠키워드 월간 검색량(`language: English` · `location: United States` · 12개월 평균, 60개 일괄)
> ③ 구글 웹서치 4회 + 경쟁 페이지 DOM 실측(Playwright).
> 한국어 판은 `ko-gto-solver.md`. **두 판의 결론이 다르다 — 옮겨 쓰지 마라.**

---

## 0. 한 줄 결론

**영어권에서 이 축의 헤드텀은 「gto solver」가 아니라 「poker solver」(1,600)다.**
그리고 **핸드오프에 적혀 있던 후보 6개 중 절반이 검색량 0**이었다. 실측 없이 썼으면 빈 자리를 조준했다.

---

## 1. 월간 검색량 실측 (라쿠 · English/United States · 12개월 평균)

| 키워드 | 월간 | CPC | 12개월 | 메모 |
|---|---:|---:|---:|---|
| **gto wizard** | **12,100** | $11.13 | 0% | 브랜드. 이 판의 절대 1위 — **직접 조준 불가** |
| poker equity calculator | 3,600 | — | −3.6% | 🔴 **`/en/calculator`의 자리다.** 솔버 랜딩이 건드리지 않는다 |
| **poker solver** | **1,600** | $6.72 | −13.3% | ★**영어권 헤드텀.** 한국어 「포커 솔버」는 50인데 여기선 1,600 |
| gto chart | 590 | $2.20 | −21.1% | 프리플랍 차트 의도가 섞인다 → `/en/hand-chart` 쪽 |
| piosolver | 590 | $5.21 | −13.3% | 경쟁 브랜드 |
| **gto solver** | **390** | $2.13 | **+12.3%** | ★3개월 **+14.3%** — 이 축에서 **유일하게 뚜렷한 상승** |
| gto poker solver | 260 | — | −30.1% | |
| **poker solver free** | **260** | **$11.37** | −5.5% | ★CPC가 이 판 2위 = 상업적 가치가 실재한다 |
| gto wizard price | 260 | $2.57 | +13.3% | 브랜드 인접 |
| free poker solver | 210 | — | −7.7% | |
| poker range calculator | 170 | — | −3.3% | |
| gto trainer | 140 | $3.18 | +5.7% | |
| solver poker | 140 | — | −44.4% | 어순 변형 |
| poker gto solver | 110 | — | −8.3% | |
| poker ev calculator | 110 | — | −15.6% | |
| gto ranges | 90 | $1.43 | −38.1% | |
| free gto solver / wasm postflop / gto calculator / gto wizard free / gto poker strategy | 각 70 | — | — | wasm postflop은 **−61.3%**(원본 개발 중단과 같은 방향) |
| **poker gto trainer** | **50** | — | **+37.7%** | ★3개월 **+40%** — 트레이너 축이 자라고 있다 |
| gto solver free / free gto trainer / **texassolver** / poker solver software | 각 50 | — | texassolver **+35.5%** | |
| simple postflop | 40 | — | −48.9% | |
| online poker solver / texas holdem solver / **gto poker software** | 각 30 | — | gto poker software **+33%**(6개월 **+100%**) | |
| gto wizard alternative / holdem solver / piosolver price / best gto solver / preflop solver / poker gto calculator | 각 20 | — | — | |
| postflop solver / gto solver online / gto solver app / best free gto solver / gto+ solver / what is a gto solver / free poker solver online / **gto solver mac**(+50%) / open source gto solver / poker solver online free / gto solver github | 각 10 | — | — | |

### 🔴 검색량 «데이터 없음» = 사실상 0 — **핸드오프 후보의 절반이 여기 있었다**

`browser gto solver` · `gto solver online free` · `free postflop solver` ·
`gto solver no download` · `gto solver 2026` · `gto solver mobile` · `gto study tool` ·
`poker solver alternative` · `gto range chart` · `c-bet frequency` · `cbet strategy` ·
`gto solver reddit` · `how to use a gto solver`

→ 핸드오프의 후보 6개 중 **`browser gto solver`·`postflop solver free`(=free postflop solver)는 0**,
`gto solver online`은 10이었다. **살아 있는 것은 `free gto solver`(70)·`gto solver free`(50)뿐**이고
그보다 훨씬 큰 `poker solver`(1,600)·`poker solver free`(260)·`free poker solver`(210)가 후보에 없었다.
🪶 문구를 본문에 녹이는 것은 자유다. **제목·H2로 쓰지 않는다**는 뜻이다.

---

## 2. 🟢 영어에는 «의도 함정»이 없다 (한국어와 가장 크게 갈리는 지점)

한국어는 「gto」 단독이 **만화·페라리**, 「솔버」 단독이 **방탈출 카페**라 앞에 「홀덤」을 붙여야 갈렸다.
영어는 그렇지 않다 — 자동완성 원문:

| 시드 | 자동완성 | 판정 |
|---|---|---|
| `gto solver` | poker · online · github · **poker free** · app · reddit · api | ✅ 전부 포커 |
| `free gto solver` | poker · reddit · github · **free gto calculator** · **best free gto solver app** · `are there any free gto solvers` | ✅ |
| `poker solver` | **free** · online · **free online** · app · practice · chart · github · ai | ✅ |
| `gto solver online` | **online free** · gto calculator online · **gto solver web** · `poker gto solver free online` | ✅ |
| `wasm postflop` | tutorial · reddit (3건뿐) | ⚠ 인지도가 얇다 — **보조 축으로만** |

→ **「holdem」을 앞에 붙일 필요가 없다.** 붙이면 오히려 `holdem solver` 20으로 떨어진다.
🔴 자동완성에 **`free`가 거의 모든 시드에 박혀 있다** — 이 판의 핵심 수식어는 영어에서도 「무료」다.

---

## 3. SERP·경쟁 실측 (구글 웹서치 4회 + 경쟁 페이지 DOM)

### 3-1. 「free gto solver」·「gto solver online free」·「poker solver free online」·「best free gto solver reddit」

반복 등장한 곳: **wasm-postflop.pages.dev** · github.com/b-inary/wasm-postflop · **solvers.poker** ·
gtobase.com · **gtowizard.com** · deepsolver.com · **pokergtosolver.com** · deepfold.co ·
apps.apple.com(Solver+ · PocketSolver · GTO Preflop) · fearlessriver.com · alternativeto.net.
반복 거명된 무료 도구: **TexasSolver**(오픈소스) · TryBluff · GTOBase · DEEPFOLD.

### 3-2. 🔴 1위 페이지가 스스로 «더 이상 갱신하지 않는다»고 적어 뒀다 — 이게 이 판의 빈틈이다

`wasm-postflop.pages.dev`(우리 엔진의 원본) 본문 **축어**:

> "This website will no longer be updated. Please see this GitHub issue for more information.
> If you try to find similar tools, please beware of malicious fake sites."

저장소 제목도 `[Development suspended]`다. 가시 텍스트 **1,137자**뿐이다.
→ 우리는 **그 엔진을 이어받아 유지하는 쪽**이고, 이건 추측이 아니라 원본이 스스로 적은 사실이다.
랜딩의 「WASM Postflop을 찾아온 사람에게」 문단이 여기서 나왔다.

### 3-3. 가장 가까운 경쟁자 `pokergtosolver.com/en/solver` — 구조까지 겹친다

| 항목 | 실측(DOM) |
|---|---|
| title | `Free GTO Poker Solver - Browser-Based \| PokerGTO Solver` |
| h1 / h2 | **h1 1개(「GTO Solver」) · h2 1개(「Core Tools」)** |
| 가시 본문 | **2,934자** |
| FAQ | 스키마에 4문항 — **본문에는 0개**(축어 대조로 확인) |
| hreflang | en·zh·ru·pt·ja·ko·fr·de·es·sv + x-default (**10언어 · ko 포함**) |
| 스키마 | Organization · WebSite · SoftwareApplication · FAQPage · **HowTo** · BreadcrumbList |

🔴 **이 페이지에서 배울 것과 따라 하지 말 것이 갈린다.**
따라 할 것 = HowTo 스키마·다국어 상호링크. **따라 하지 말 것 = FAQ를 스키마에만 두는 것**
(posting.mdc GEO ④ — 스키마에만 있고 본문에 없으면 LLM이 못 읽는다). 우리는 17문항을 본문에 전부 둔다.

### 3-4. GTO Wizard·PioSOLVER — 「가격을 쓰지 않는다」는 판정을 재확인했다

- `gtowizard.com/pricing/` → **`app.gtowizard.com/login`으로 리다이렉트.** 비로그인은 가격을 못 본다.
  (한국어판이 2026-08-08에 가격 수치를 뺀 근거가 **11일 뒤에도 그대로 유효**하다.)
- 홈 h1/h3 축어: `Start Crushing Poker Today` · `Most Powerful & Fastest AI Solver` ·
  **`Largest Library of Solutions`** → 「미리 계산된 솔루션 라이브러리」 서술의 근거는 이 문구다.
  ⚠ 그쪽도 자체 솔버를 광고한다 — **「미리 계산형뿐」이라고 단정하지 마라.**
- 🔴 **PioSOLVER를 「유료」라고 쓰지 마라.** 공식 문서 축어에
  `Select PioSolver Free version and download / install.` 이 있다(무료 버전 실재).
  ✅ 1차 출처로 확인된 것은 **설치형·윈도우**뿐이다 —
  `Download the installer` · `PioSOLVER-version.exe` · `Windows pop-up` · `.Net Framework`.
- piosolver.com 홈 자체는 `A very fast GTO solver for Holdem` 한 줄뿐이라 **홈만 보면 OS를 못 판정한다.**
  docs를 열어야 나온다.

---

## 4. `/en/solver`가 조준한 것 / 일부러 비운 것

| 자리 | 가져간 키워드 | 근거 |
|---|---|---|
| `/en/solver` | **poker solver 1,600** · gto solver 390 · gto poker solver 260 · poker solver free 260 · free poker solver 210 · poker gto solver 110 · gto trainer 140 · poker gto trainer 50 · postflop solver | 실제로 포스트플랍 GTO를 **계산**한다 |
| `/en/calculator` | poker equity calculator **3,600** · poker ev calculator 110 · poker range calculator 170 | 이미 소유. **넘보지 않는다** |
| `/en/hand-chart` | gto chart 590 · preflop solver 20 | 프리플랍 표는 그쪽 |

🔴 **브랜드(gto wizard 12,100 · piosolver 590)는 조준하지 않는다.** 비교 문맥의 «언급»만 정당하다
— 한국어판과 같은 규율이고, 그 자리는 비교 표 하나로 족하다.

## 5. 다음에 볼 것

1. **`poker solver` 1,600을 이 한 장으로 끝까지 밀 수 있나** — 4주 뒤 GSC로 판정(기준선: 발행 전 0).
2. **`poker gto trainer` +37.7% · `gto poker software` 6개월 +100%** — 자라는 두 자리다.
   트레이너 축이 더 커지면 별도 페이지가 아니라 이 랜딩의 H2를 두껍게 하는 쪽이 먼저다.
3. **`texassolver` 50(+35.5%)** — 오픈소스 무료 솔버 축의 경쟁자. 비교 표에 넣을지는 다음 판단.
4. 🔴 **구글 SERP·PAA는 이 환경에서 여전히 못 긁는다** — Playwright 직접 요청이 **429**다(한국어 판 §6과 동일).
   Bing으로 대체하려 했으나 「free gto solver」에 **무료 게임 사이트**를 돌려줘 쓸 수 없었다.
   → 대안은 ① WebSearch 도구 ② 경쟁 페이지 DOM 직접 실측(이번에 쓴 방법).

## 6. 재현 방법

```bash
# 자동완성 원문 (요약 도구를 거치지 않는다)
curl -s "https://suggestqueries.google.com/complete/search?client=firefox&hl=en&gl=us&q=free%20gto%20solver"
```
- 영어는 `oe=UTF-8`이 필요 없다(한국어는 필수 — `ko-gto-solver.md` §5).
- 월간 검색량은 **라쿠 MCP `search-volume-history`**에 `language: "English"`, `location: "United States"`.
  50~60개를 한 번에 던지면 10초 안에 끝난다. `seoDifficulty: true`는 최대 60분이라 쓰지 않았다.
- 🔴 **라쿠 `other-keywords`(LSI/PAA)는 영어 쿼리에도 «일본어 PAA»를 돌려준다**(이번에 실측).
  `gto solver`로 물었더니 `GTO Wizard 値段`·`ポーカーのGTOの勉強方法は？`가 나왔다.
  **영어 PAA 용도로 쓰지 마라.**
