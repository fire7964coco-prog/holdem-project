# 🅲 ar 도구 레인 진행 (`lane-ar-tools`)

> 정본 = `docs/tool-lanes-2026-10-14.md` · 브리프 = `docs/tool-lanes/ar-tools-r1-brief.md`.

## 실행 기록

| 구간 | 시작 | 마감(90분) | 모델·도구 | 자식 | 상태 |
|---|---|---|---|---|---|
| 회차 1 A | 10:46 | 12:16 (14:45 절대 정지) | Opus 5.5 본체 · DataForSEO 6호출 · 아스트라 codex(gpt-6-astra · read-only · 스크래치) · Fable 서브 1회(카피) | codex PID 26012(node 46160) — 10:55 exit=0 자연 종료 확인 · 스크래치 `astra-ar-tools-A` | ✅ 10:58 끝 |

사용량: 계정 할당량 지표는 이 세션에서 관측 불가 → 숫자 추정하지 않음. DFS 호출 비용은 응답 `cost` 필드로만(0.09 등).

## A 결과

- `git merge main` = fast-forward(handoff 1줄).
- 선례 구조: vi `5b4b9b50` 19파일 · ru `fcccc119`(10-13 · 계산기만) · tr `a7e5279d`(회차 2 — 🔴 당시 tr 글 8편 = ar 8편과 슬러그 동일 → 링크 구조 틀).
- 숫자 표기 〔실측〕 서양 숫자 4,432 : 아랍-인도 0 · «%» 36 : «٪» 2 → `numberLocale "en-US"` · gap/prefix 없음.
- 헤드텀 〔DFS〕 → `docs/keyword-bank/ar-tools.md`(아랍어 도구구 전부 null · 아랍어 SERP 웹페이지 0 → 영어 머리어 + 아랍어 부제).
- 용어표 → 브리프 §2.
- Fable 카피: 2안씩 → 추천 조합 채택 · 글자 수 재측정(55·130 / 52·133) → 브리프 §4.
- 아스트라 A-교차(25행): OK 23 · RISKY 2. 판정 ↓

### A-교차 판정표 (출처 구분)

| 자리 | 출처 | 판정 | 처리 |
|---|---|---|---|
| 용어 22행(계산기 이름 … 2인칭) | 아스트라 OK | 채택(유지) | 브리프 §2 그대로 |
| implied odds = الاحتمالات الضمنية | 아스트라 OK · GGPoker ar 블로그 제목 «مقدمة إلى الاحتمالات الضمنية» | 채택 | 신규 용어 표 |
| 첫 등장 풀이(equity «حصتك المتوقعة من البوت» · pot odds · Bubble · SPR «نسبة الستاك إلى البوت» · M «مؤشر M») | 아스트라 처방 | 채택 — **풀이 문구만**(새 수치 없음) | 브리프 §5 |
| 숫자 en-US | 아스트라 OK | 채택 | — |
| RTL에서 숫자·카드 토큰 bidi | 아스트라 RISKY(W3C inline-bidi) | **부분 채택** — 사전 문자열에 제어문자/마크업을 넣지 않는다(공용 컴포넌트가 문자열을 그대로 찍는다). C 화면 실측에서 «2.7:1 · 35.4% · A♠K♥ · 1,326» 뒤집힘을 판정 → 깨지면 헤드 요청(공용 컴포넌트 `<bdi>` — `tournament-board.tsx` Iso 선례) | C 체크 항목 |
| null = 수요 0 아님 · SERP 주장 범위 | 아스트라 RISKY · DFS 문서 | 채택 | keyword-bank 문구 수정 |
| 영어 먼저 제목 | 아스트라 RISKY · 구글 원문 재확인 «Use the same language and writing system … as the primary content» | **판단 보류 → 헤드 H-3** — vi·hi·tr 선례와 충돌하므로 레인이 단독으로 뒤집지 않는다. B는 브리프 §4 그대로 | H-3 |

## 신규 용어 (코퍼스 0)

| EN | 채택 | 근거 URL·grep |
|---|---|---|
| implied odds | **الاحتمالات الضمنية** (첫 등장 «(Implied Odds)») | https://ggpoker.com/ar/blog/an-introduction-to-implied-odds/ 제목 축어(아스트라 인용) |
| ICM deal | **صفقة ICM** | https://ggpoker.com/ar/poker-games/featured-final-table/ «خيار إبرام الصفقة (المعروف أيضًا باسم صفقة ICM)» — 본체 WebFetch 축어 재확인 |
| chip chop | **Chip Chop** 라틴 + 첫 등장 풀이 «تقسيم الجوائز بحسب حصص الرقائق» | 아랍어 표기 실증 없음(아스트라) → 라틴 유지 · ICM 딜과 동의어로 쓰지 않는다 |

## 헤드 요청

| # | 무엇 | 왜 | 제안 |
|---|---|---|---|
| H-1 | 🔴 **13×13 격자 RTL 뒤집힘** — `components/hand-chart/hand-chart-tool.tsx` L262~(열 머리 `flex` + 행 `flex`) · `components/calculator/calculator-tool.tsx` L1427(`repeat(13)` grid · 스타팅 핸드/푸시폴드 격자) | 전 문서가 `html dir=rtl`(app/layout.tsx L29)인데 두 컴포넌트에 LTR 고정이 없다 → flex·grid가 오른쪽부터 흐른다 = A열이 오른쪽, 열 머리 «A K Q…»가 거꾸로. 정본 §1-C5 «격자가 뒤집히면 결함». 공용 파일이라 레인이 고치지 않는다(§2 🅲) | 격자 래퍼(`inline-block` 표 · `repeat(13)` div)에 `dir="ltr"` 한 속성. EN SSR 바이트 동일을 지키려면 `rtl` 로케일일 때만 붙이기(`tournament-board.tsx`의 `rtl = locale === "ar"` 선례). 카드 선택기 `CardPicker`(L248~ · rank×suit `flex`)도 같다 — 게다가 열 머리 줄이 물리 여백 `ml-7`이라 RTL에서 무늬 칸(오른쪽)과 머리 여백(왼쪽)이 어긋나 **랭크 머리가 칸과 한 칸씩 밀린다**(코드 판독 · C 화면 실측에서 확정). 세 곳 모두 같은 `dir="ltr"` 처방 |
| H-3 | 제목 언어 순서 — 영어 머리어 먼저(«Poker Calculator — حاسبة …») | 구글 문서 «Use the same language and writing system … as the primary content»(10-14 원문 확인) · 본문은 아랍어. 반대 근거 = 아랍어 도구구 볼륨 데이터 없음 + vi·hi·tr 선례(영어 머리어 먼저) | 이번엔 선례대로. 바꾸려면 아랍어 먼저 «حاسبة احتمالات البوكر — Poker Calculator …»(글자 수 동일)로 헤드가 결정 · 전 로케일 일관 판단이라 레인 밖 |
| H-2 | `lib/posts-ar/texas-holdem-rules-for-beginners.ts` L450 — `/en/hand-chart` · `/en/calculator` 링크 2개 | 도구가 생기면 ar 독자가 영어 도구로 나간다. vi·ru·tr 회차는 같은 줄을 자기 로케일 도구로 바꿨지만, 정본 §2 🅲가 «vi 고유 링크·글 수정은 빼고»라 레인은 손대지 않는다 | 머지 때 헤드가 `/ar/hand-chart` · `/ar/calculator`로(앵커 문구는 그대로 — 이미 도구 H1 부제와 같다) |

## 보고

(회차 끝에)
