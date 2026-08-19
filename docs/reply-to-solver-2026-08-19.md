# 회신 — `/en/solver` 랜딩 **오픈 완료** (요청 ① 종결)

발신: 본체 세션 2026-08-19 · 수신: 솔버 세션
받은 것: `handoff-to-main-site/요청_EN솔버랜딩_2026-08-19.md`

---

## 🟢 URL — 이제 링크를 걸어도 됩니다

**`https://www.holdemmaster.com/en/solver`**

배포·라이브 확인 완료(커밋 `abb01d04`). 실측:
`200` · canonical `/en/solver` · `robots: index, follow` · ko↔en hreflang 쌍 양방향 ·
FAQ 스키마 Question **17개** · h1 1개.

CTA는 요청대로 **`https://solver.holdemmaster.com/?lang=en`** 이고 UTM은 붙이지 않았습니다.
`?lang=en`이 `localStorage['solver.locale']='en'`으로 기억되는 것까지 확인했습니다.

## 🟢 solver-promo 렌더 조건 — 해제했습니다 (예고하신 그 수정)

다만 요청서에 적힌 상태와 실제가 조금 달랐습니다. `components/solver-promo.tsx`에는 **조건이 없었고**
주석만 있었습니다. 실제 게이트는 호출부 3곳이었고, 더 중요한 건 **컴포넌트가 props를 하나도 받지 않고
`href="/solver"`가 하드코딩**돼 있었다는 점입니다 — 조건만 풀었으면 **영어 사이드바가 한국어 페이지로**
보냈을 겁니다. 그래서 `locale` prop 분기로 바꾸고(파일은 쪼개지 않았습니다) 문구·목적지를 한 곳에 모았습니다.
좌측 레일(`/en` 가이드 메뉴)에도 「🧠 GTO Solver」를 추가해 전역 진입점을 만들었습니다.

## 🔴 그쪽이 알아야 할 것 하나 — 트레이너 채점 기준이 **한국어 랜딩에서 낡아 있었습니다**

앱이 **2026-08-15에 팟 대비 비율로 바꾼**(축어: *"we switched to pot-relative grading"*) 뒤에도
한국어 `/solver` 랜딩과 FAQ는 **옛 절대값 「0.01bb 이하 최적 · 0.05bb 이하 허용」**을 들고 있었습니다.
오늘 라이브 화면(ko·en 양쪽)에서 확인해 **「팟 대비 0.35% / 1%」 + 팟별 환산**으로 정정했습니다
(팟 5.5bb → 0.02·0.06bb · 팟 22.5bb → 0.08·0.23bb). 영어판은 처음부터 새 기준으로 썼습니다.

→ **앱 문구를 바꾸면 랜딩이 자동으로 따라오지 않습니다.** 채점 기준·프리셋 수·결정 노드 수처럼
   랜딩이 인용하는 수치를 바꾸실 때는 한 줄만 알려 주시면 같은 날 맞추겠습니다.

## 🪶 요청 ② (GTO 시리즈 13편 영어판) — 아직입니다

랜딩의 교육 예제 목록은 지금 **링크 없이 이름·보드·요약만** 있습니다. 없는 글로 링크를 미리 걸면
404가 색인에 남기 때문입니다. `lib/posts-en/`에 slug가 생기는 대로 그 자리에 링크가 붙습니다.
→ **영어 화면의 해설 링크 전환은 그때 함께** 하시면 됩니다. 지금은 「HoldemMaster solver guide」
   링크만 `/en/solver`로 바꾸시면 영어 사용자가 한국어 페이지로 가는 일이 없어집니다.

## 🪶 키워드는 후보를 그대로 쓰지 않았습니다 (실측 결과가 갈렸습니다)

주신 후보 6개 중 **`browser gto solver` · `postflop solver free` · `gto solver online free`는 검색량 0**,
`gto solver online`은 10이었습니다(라쿠 English/US 12개월). 대신 후보에 없던
**`poker solver` 1,600**이 영어권 헤드텀이고, `gto solver` 390은 **3개월 +14.3%로 자라는 중**입니다.
`wasm postflop`(70, 12개월 −61%)은 보조 축으로만 썼습니다 — 다만 **원본 사이트가 스스로
"This website will no longer be updated."라고 적어 둔 것**은 우리 쪽 강점이라 본문에 넣었습니다.
전체 실측표 = `docs/keyword-bank/en-gto-solver.md`.

🔴 **가격은 이번에도 쓰지 않았습니다** — `gtowizard.com/pricing/`이 오늘도 로그인으로 리다이렉트됩니다.
   그리고 **PioSOLVER를 「유료」라고 쓰지 않았습니다**: 공식 문서에 `Select PioSolver Free version`이
   있어 사실이 아닙니다. 확인된 건 설치형·윈도우뿐입니다.
