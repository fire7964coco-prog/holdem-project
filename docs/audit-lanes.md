# 검수 레인 — 병렬 검수 작업장 정본 (2026-09-06 신설)

> **왜**: 검수가 한 창이라 순차로 돌았다. 실측하니 **원장이 아예 없는 로케일이 284편**이었다
> (es 73 · zh-hant 57 · zh 56 · en 56 · id 42). 병목은 «검수장이 느리다»가 아니라 **«레인이 하나»**였다.
>
> 🔴 **이 파일이 레인 배정의 정본이다.** 창을 새로 띄우면 이 파일부터 읽힌다.

---

## 1. 왜 «로케일 전담»이 성립하나 (실측)

최근 30커밋이 건드린 파일 빈도:

| 파일 | 30커밋 중 | 판정 |
|---|---:|---|
| `mailbox/MAILBOX.md` | **26** | 🔴 유일한 압도적 충돌원 → 제안 B로 분리 중 |
| `HANDOFF.md` | **10** | 🔴 충돌원 → 레인별 분리 필요 |
| `reports/이력-2026-09.md` | 6 | 🟠 |
| `ledger/<locale>/*` · `reports/regression/<locale>-*` | 각 2~3 · **서로 안 겹침** | 🟢 **이미 로케일별로 갈려 있다** |

→ **원장·회귀는 손댈 것이 없다.** 막는 것은 공용 파일뿐이다.

## 2. 🟢 도구가 병렬을 막지 않는다 (2026-09-06 실증)

검수 도구 11개는 본체를 **상대경로가 아니라 절대경로**로 읽는다
(`post-source.mjs`의 `PROJECT = "C:\\Users\\하봄\\Downloads\\Holdem_Project"` 등).
→ **검수 폴더를 어디에 두어도 도구가 안 깨진다.**

**레인에서 실제로 돌려 증명했다**(`홀덤검수-es`):

- `PROJECT` 존재 ✅ · `NEW_DIR`·`LEGACY_FILE` ✅
- 본체 `lib/posts-es/holdem-3bet.ts` 읽기 **34,143 bytes** ✅
- `node tools/ledger-check.mjs --locale landing` → **149주장 · OK 100%** ✅
  (검수장이 M-108에서 145→149로 올린 값과 일치 = 레인이 최신 main을 물고 있다는 증거)

## 3. 레인 배정 (겹침 0)

| 창 | 작업 디렉터리 | 브랜치 | 담당 | 쓰는 파일 |
|---|---|---|---|---|
| **본체** | `Holdem_Project` | `main` | 본체 레포 전부 | 본체 레포 · `mailbox/out-본체.md` |
| **검수 main** | `홀덤검수` | `main` | 🔴 **공용 파일 전담** + 기존 KO·de·pt·ja·app·landing 원장 | `LESSONS.md` `DECISIONS.md` `HANDOFF.md` `TARGETS.md` `RULES.md` `rejected.md` `reports/이력-*.md` `mailbox/` `tools/` |
| **레인 es** | `홀덤검수-es` | `lane-es` | **es 73편** | `ledger/es/` · `reports/regression/es-*` · `reports/검수-es-*` |
| **레인 en-zh** | `홀덤검수-en-zh` | `lane-en-zh` | **en 56 + zh 56** | `ledger/{en,zh}/` · `regression/{en,zh}-*` |
| **레인 zhhant-id** | `홀덤검수-zhhant-id` | `lane-zhhant-id` | **zh-hant 57 + id 42** | `ledger/{zh-hant,id}/` · `regression/{zh-hant,id}-*` |
| **솔버** | `클로드-프로그램만들기` | — | 솔버 앱 | 그대로 |

🔴 **레인은 공용 파일을 고치지 않는다.** 규율·교훈이 생기면 **자기 회차 보고서에 적고**, 검수 main이
`LESSONS.md`로 승격한다. 레인이 각자 `LESSONS.md`를 고치면 머지마다 conflict가 난다.

🔴 **레인은 우편함에 직접 쓰지 않는다.** 발신은 검수 main이 모아서 한다
(레인이 셋인데 각자 `MA-###`를 뽑으면 **제안 A로도 못 막는 충돌**이 난다 — 같은 접두 안에서 겹친다).

## 4. 머지 절차 (검수 main이 한다)

```bash
cd ~/Downloads/홀덤검수
git merge lane-es --no-ff -m "merge(lane-es): es 원장 N편"
```

- 🟢 **conflict가 나면 그게 정상 신호다** — 레인이 공용 파일을 건드렸다는 뜻이니 §3 규율로 되돌린다.
- 🔴 **`tools/`는 각 worktree가 자기 사본을 갖는다.** main에서 도구를 고쳐도 **레인에 자동 반영되지 않는다.**
  도구를 고쳤으면 각 레인에서 `git merge main`으로 내려받아라. 안 그러면 **레인이 옛 게이트로 판정한다.**
- 🪶 검수 레포는 **원격이 없다** — push/pull 없이 로컬 머지만 하면 된다.

## 5. 🔴 두 번째 병목 — 본체 미커밋 트리

2026-09-06 실증(M-105 ⑦): 검수장이 회귀를 돌렸더니 **🔴 10이 전부 «본체·솔버의 미커밋 트리»**여서
판정을 못 하고 ⏸ 걸었다. **창이 늘수록 이 일이 잦아진다.**

**처방**: 검수는 **커밋 해시 기준으로 판정한다.**
- 본체는 회신·통지에 **대상 커밋 해시**를 적는다(이미 하고 있다 — `dfabb50d` 등).
- 레인은 판정 전 `git -C <Holdem_Project> log --oneline -1`로 **자기가 본 해시를 보고서에 적는다.**
- 🔴 **미커밋 상태를 판정 대상으로 삼지 마라** — 그 diff는 다음 순간 사라진다.

## 6. 창을 새로 띄울 때 (사장님용)

각 창에서 시킬 첫 마디:

| 창 | 첫 마디 |
|---|---|
| 레인 es | 「`docs/audit-lanes.md`(본체 레포) 읽고 **es 레인** 시작해」 |
| 레인 en-zh | 「같은 파일 읽고 **en-zh 레인** 시작해」 |
| 레인 zhhant-id | 「같은 파일 읽고 **zhhant-id 레인** 시작해」 |
| 검수 main | 「HANDOFF 보고 시작해」(종전 그대로) |

🪶 레인이 처음 여는 로케일은 **원장이 0**이라 `ledger/_TEMPLATE.md` + 기존 `ledger/pt/`·`ledger/de/`를
본으로 삼으면 된다(그 둘이 42편으로 가장 성숙하다).

## 7. 되돌리는 법

```bash
git worktree remove ../홀덤검수-es
git branch -d lane-es
```
🟢 worktree는 `.git/worktrees/`에 메타만 남기므로 **되돌려도 이력이 안 상한다.**
