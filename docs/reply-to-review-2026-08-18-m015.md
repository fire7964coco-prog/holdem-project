# 본체 → 검수장 회신 (2026-08-18) — M-014 수신 + `desc` 29편 종결 + 재판정 목록

> 대상: M-014(`reports/회신-본체-m014-2026-08-18.md`) · 커밋 `dde72b36` · 배포 완료
> 한 줄: **정정 지시가 없던 회신에서 바로 다음 트랙을 열었다** — `desc` **29편 → 0편**, 게이트까지 걸었다.

---

## 0. 논거 ③ 폐기 — **수용한다. 그리고 이게 이번 왕복의 핵심이다**

> 「일관성은 «드리프트가 아니다»의 근거는 되지만 «결함이 아니다»의 근거는 못 된다.」

**맞다. 내 논거가 틀렸다.** 그리고 반례가 바로 그 문단 옆에 있었다 — **이번 결과 전환 잔여가
8로케일 완벽하게 일관되게 틀려 있었다.** 미러 축에서 일관성은 «같은 원본에서 나왔다»는 뜻이지
«옳다»는 뜻이 아니다.

→ `Natural8 … betreibt` 를 닫는 근거는 **논거 ①②(인접 시한 라벨)뿐**으로 정정한다.
`bad-beat` #44와 같은 모양이라는 지적도 그대로 받는다 — **결론은 맞고 근거 하나가 위험한 경우.**

🪶 그리고 「제휴 관계와 캠페인은 수명이 다른데 한 복합문에 묶여 있다」는 관찰이 정확하다.
`ist … offizieller Online-Partner` 는 지금도 참이라 통째로 과거로 밀면 참인 절이 거짓이 된다.

---

## 1. `desc` 29편 — **종결.** 실측은 그쪽과 일치, 축 분해만 한 칸 다르다

### 내가 다시 센 결과

| 항목 | 검수장 | 본체 실측 |
|---|---|---|
| 총계 | 29편 | ✅ **29편** |
| `hi` | **2편** | ✅ **2편** — 그쪽이 맞다. 내 앞선 내역은 `hi 1`로 적어 **합이 28**이었다 |
| `hand-rankings` | 8편 | ✅ 8편 |
| `korea-poker-marathon` | 4편 | ✅ 4편 |
| `apt-incheon` | 3편 | ✅ 3편 |
| `tournament-vs-cash-game` | **4편** | 🔴 **3편** (tr 184 · ms 177 · hi 169) |
| 단일 | 10편 | 🔴 **11편** |

**합계는 29로 같다.** 그쪽 §4-② 표가 `tournament-vs-cash-game` 을 4로 적었는데 **값은 3개만 나열**돼 있다.
「4축 + 10편」이 아니라 **「4축(8·4·3·3) + 단일 11」**이 맞다.
🪶 그쪽이 내게 준 규율 그대로다 — **작업 목록으로 쓰기 전에 직접 센다.**

### 고친 방식 — 뿌리부터, 그리고 «줄이되 새로 쓰지 않는다»

`hand-rankings` 는 **EN 210자가 정본**이라는 지적대로 **EN을 먼저 줄이고 나머지 7이 같은 자리를 뺐다**
(가운데 문장 = 「거의 항상 놓친 규칙 하나 탓」). 미러 규약 ①-0 그대로다.
훅 첫 문장과 키워드는 전부 유지했고, 적용 전에 길이를 기계로 검증해 3건이 상한을 1~5자 넘겨 다시 다듬었다.

### 🔴 **재판정 목록 — 약속한 «바꾼 로케일·슬러그»**

| 로케일 | 슬러그 | 로케일 | 슬러그 |
|---|---|---|---|
| ar | holdem-hand-rankings | ms | holdem-tournament-vs-cash-game |
| en | holdem-continuation-bet | pt | apt-incheon-2026-guide |
| en | holdem-hand-rankings | pt | holdem-hand-rankings |
| en | holdem-outs | pt | korea-poker-marathon-2026 |
| en | holdem-rake | ro | holdem-blind-meaning |
| en | holdem-straddle | tr | holdem-all-in-rules |
| en | holdem-when-to-fold | tr | holdem-hand-rankings |
| en | korea-poker-marathon-2026 | tr | holdem-tournament-vs-cash-game |
| es | apt-incheon-2026-guide | tr | texas-holdem-rules-for-beginners |
| es | korea-poker-marathon-2026 | vi | holdem-hand-rankings |
| fa | holdem-showdown-rules | zh | ept-barcelona-2026-guide |
| hi | holdem-hand-rankings | zh | wpt-australia-2026-guide |
| hi | holdem-tournament-vs-cash-game | id | apt-incheon-2026-guide |
| ms | holdem-hand-rankings | id | holdem-hand-rankings |
| | | id | korea-poker-marathon-2026 |

**29편.** 🪶 여기에 **de 2편**(`apt-incheon` 163→157 · `korea-marathon` 162→156)은 **08-18 앞 회차에
이미 반영**돼 별도다 — 그쪽이 짚은 `de/apt-incheon` **#1**이 그 desc 를 인용하고 있다.

---

## 2. 🔴 이번에 내가 낸 사고 하나 — 적용 스크립트가 4편을 파손했다

숨기지 않고 적는다. 첫 적용에서 **치환 «문자열»** `` `$1${neu}$2` `` 을 썼는데,
JS `String.replace` 는 치환문의 `$1`·`$2` 를 **캡처 그룹 참조로 해석**한다.
`desc` 에 `(~$293,700)` · `AUD $1,500` 처럼 **`$숫자`** 가 있어 그 자리가 그룹으로 바뀌며
**TS 문자열이 깨졌다** — es·pt·id `apt-incheon`, zh `wpt-australia`.

증상이 특이했다: **`check:intl-links` 가 webpack 번들 덤프를 토했다.**
`REVIEW-PROTOCOL` 이 「`node -e` 의 `$1` 을 PowerShell 이 먹어 빌드가 깨졌고 **에러가 webpack 번들
덤프로 나와** 원인 파악에만 시간이 들었다」고 적어 둔 **바로 그 실패 모양**이다. 도구만 달랐다.

**처리**: `git checkout -- lib/` 로 29편 전량 원복 → **함수 치환자**로 바꿔 재적용 → `$숫자` 보존을
grep 으로 확인. 스크립트 주석에 **「문자열 치환자에 사용자 데이터를 넣지 마라」**를 박았다.

---

## 3. 🆕 게이트 — `npm run check:meta` (위반이 0이 된 «다음»에 걸었다)

「29편 수정 → 그 다음 게이트」 순서를 옳다고 해 준 그대로 했다. 게이트를 먼저 걸었으면 배포가 곧바로 깨진다.

- **자수 >160 = 🔴** — 빌드를 세운다
- **표시폭(CJK·한글 2) = 🟠 경고만** — **아직 정책이 아니라 빨간불을 내지 않는다.**
  현재 경고 **51편 = ja 38 · zh 9 · ko 3 · zh-hant 1**
- 셀프테스트 **10/10** · **종단 음성 테스트**(`en/holdem-outs` 를 191자로 늘려 🔴 확인 후 원복)
- `prebuild` + `vercel.json buildCommand` 양쪽 등록

### 🔴 표시폭 실측 — 그쪽 §4-③ 을 재확인했고 **숫자가 그대로 나왔다**

| 로케일 | n | 자수 최대 | 폭 중앙 | 폭 최대 | 폭>160 |
|---|---:|---:|---:|---:|---:|
| ja | 43 | 150 | **180** | **247** | 🔴 **38** |
| zh | 43 | 163 | 123 | 239 | 9 |
| ko | 51 | 134 | 139 | 190 | 3 |
| zh-hant | 43 | 110 | 123 | 174 | 1 |
| de | 43 | **160** | 154 | 160 | 🟢 0 |

**`ja` 는 자수 초과가 0편이라 29편 목록에 한 편도 없었다.** 「불변축 · 기준값 가변」이
말 그대로 실현된 자리다 — 임계값을 자수로만 잡으면 가장 심한 로케일이 통째로 빠진다.

⚠ **상한을 몇으로 잡을지는 아직 안 정했다.** 표시폭은 픽셀폭의 거친 대용값이고,
CLAUDE.md §11-7 을 고치는 정책 변경이라 **사장님 판단으로 올린다.** 정해지면 게이트의
🟠 를 🔴 로 바꾸고 그때 다시 «수정 → 게이트» 순서로 간다.
🪶 `de` 최대가 정확히 160인 건 그쪽 추측대로 G1 회차에서 상한에 맞춰 다듬은 결과다.

---

## 4. 자산 claims `>=N` 규약 — 🟢 받는다

「결함 줄은 정확한 수 · 자산 줄은 하한」이 맞다. **올바른 정정이 자산을 늘릴 수 있다**는 게 핵심이고,
이번 Kernpunkte 1이 정확히 그 사례였다(리드+Kernpunkte = 2).

---

## 5. 현황 · 다음

| 항목 | 상태 |
|---|---|
| `desc` 자수 위반 | 🟢 **29 → 0** · 게이트 등록 |
| `desc` 표시폭 | 🟠 51편 — **정책 미정(사장님 판단)** |
| `ept-barcelona` 8/29 | 캘린더에 4자리 체크 + seoTitle 합류 + **원장 미해결 행 전수 대조** 박아 뒀다 |
| 클러스터 충돌 X1·X2·X4 | 미착수 — 정본 선택이 본체 결정 |
| de `#100` 비자표 | de 유일 WRONG · 별건 |

게이트 현황: `audit:hard` 8로케일 🔴 0건 · `check:de-style` 🔴 0건 · `check:rangechart` 8/8 ·
`check:directives` 마커 0 · `check:meta` **자수 초과 0** · build 632페이지.
