---
name: screen-review
description: 클로드가 사이트 화면을 «직접 찍어서 보고» 레이아웃·디자인·모바일 표시를 판정하고 고친 뒤 다시 찍어 전후를 비교한다. "화면 보고 고쳐", "레이아웃 봐줘", "모바일에서 어떻게 보여?", "디자인 논의하자", "스크린샷 찍어서 확인해", "직접 확인해", "사이트 전체 디자인 점검", "이 글 모바일 깨지나 봐줘", "솔버 화면 확인해" 같은 말에 걸린다. 사장님이 캡처해 줄 필요가 없다 — 레포 Playwright로 찍고 Read로 본다. 성능(LCP) 측정은 이 스킬이 아니다.
---

# screen-review — 화면을 찍어서 보고, 고치고, 다시 찍는다

**전제**: 클로드는 화면을 «못 보는 게» 아니다. 레포에 Playwright 1.60 + chromium이 설치돼 있고
Read 도구는 PNG를 본다. 못 보던 이유는 **찍는 절차가 없었기 때문**이다. 이 스킬이 그 절차다.
경로·명령·이 PC 확정값은 `references/toolkit.md`. 디자인 기준은 **`docs/DESIGN.md`**(Holdem_Project)를 먼저 Read.

## 0. 대상을 정한다 — 라이브인가, 내 변경인가

| 보려는 것 | 대상 | 명령 |
|---|---|---|
| 지금 배포된 화면(현상 파악 · 디자인 논의) | 라이브 | `--live` |
| 내가 고친 코드가 어떻게 보이나 | 로컬 dev | `npm run dev -- -p 3100` 백그라운드 → `--base http://localhost:3100`(기본값) |
| 솔버 앱 | 솔버 로컬 서버 | 솔버 폴더에서 `npm run serve` → `--url http://localhost:<포트>` |

🔴 dev 서버는 **백그라운드**(`run_in_background`)로 띄우고 「Ready」 로그를 기다린 뒤 찍는다. 끝나면 죽인다.
🔴 라이브는 `curl` 금지(BotID 403) — 이 스크립트(Playwright)는 통과한다.

## 1. 찍는다

```bash
# 글 한 편 · 데스크톱+모바일 (Holdem_Project 루트에서)
node .claude/skills/screen-review/scripts/shoot.mjs --live --path /blog/<slug> --name <slug>-before
# 사이트 전체 구도(홈·블로그 목록·글·커뮤니티·솔버 랜딩) — 폭마다 sheet.png 한 장으로
node .claude/skills/screen-review/scripts/shoot.mjs --live --paths home,/blog,/blog/<slug>,/community,/solver --name site
# 요소 하나 확대(dpr 2) — 표·카드·버튼 같은 디테일
node .claude/skills/screen-review/scripts/shoot.mjs --live --path /blog/<slug> --selector "table" --name <slug>-table
```
🔴 홈은 `home`으로 적는다 — Git Bash가 `/`를 `C:/Program Files/Git/`로 바꾼다(스크립트가 되돌리긴 한다).
🔴 고정 바(모바일 하단 탭 · 상단 바)는 full/overview에서 **첫 뷰포트 자리에 한 번만** 그려진다 — 실제 위치는 `seg-01`로 보고, 방해되면 `--hide "<selector>"`.

## 2. 본다 — 순서가 있다

1. **`report.json`** 먼저: `overflowPx`(가로 넘침 · 🔴 모바일 직격) · `consoleErrors` · `failedRequests`.
2. **`overview-1.png`** — 구도. 여백·위계·색 밀도·섹션 리듬. 여기서 «어디가 이상한지» 자리를 잡는다.
3. **`seg-NN.png`** — 그 자리의 원본 해상도 조각. 글자 크기·줄바꿈·표 잘림·이미지 비율을 읽는다.
4. **`crop.png`** — 요소 디테일(dpr 2). 버튼 상태·아이콘·경계선.
🔴 overview만 보고 판정하지 마라 — 축소본은 글자 겹침·잘림을 숨긴다. 지적마다 **seg 번호**를 적는다.

## 3. 판정표를 쓴다

| 자리(폭 · seg) | 현상 | 원인(파일:라인) | 처방 | 근거 |
|---|---|---|---|---|

근거는 `docs/DESIGN.md`(토큰·금지) · `CLAUDE.md` §9(이미지 규격 · 폭<750 우회군) · Web Interface Guidelines(접근성·포커스·대비 — `references/toolkit.md`에 원문 URL).
🔴 **디자인 «취향»과 «결함»을 갈라 적는다.** 결함(넘침·겹침·대비 미달·깨진 이미지·잘린 표)은 고치고, 취향(여백·색 톤·폰트 굵기)은 **사장님께 전후 그림을 보이고 결정을 받는다** — 사이트 전체 톤은 사장님 몫이다.

## 4. 고치고 다시 찍고 비교한다

```bash
# 고친 뒤 같은 경로를 같은 폭으로
node .claude/skills/screen-review/scripts/shoot.mjs --path /blog/<slug> --name <slug>-after
# 전후 나란히(왼쪽 before · 오른쪽 after · 빨간 띠가 경계)
node .claude/skills/screen-review/scripts/shoot.mjs --compare tmp/screen/<slug>-before/390/overview-1.png tmp/screen/<slug>-after/390/overview-1.png --out tmp/screen/<slug>-390.png
```
비교 그림을 **Read로 다시 본다** — 고친 자리가 고쳐졌는지, 다른 자리가 새로 깨지지 않았는지(2차 교열과 같은 원리).

## 5. 마감

- 이미지를 손댔으면 `npm run check:images` · `npm run check:image-reuse`. 코드를 손댔으면 `npm run build`.
- 보고 = 판정표 + 전후 비교 그림 경로. 사장님이 열어 볼 수 있게 **파일 경로를 그대로** 적는다(`SendUserFile`로 보내도 된다).
- `tmp/screen/`은 비추적(gitignore). 남길 그림은 `docs/`로 옮겨 적는다 — 그림 없이 «고쳤다»만 적지 마라.

## 이 스킬이 하지 않는 것

성능 계측(LCP·전송량 — `docs/IMAGE_OPTIMIZATION.md` · 메모리 perf 규율) · 포스트 «내용» 검수(`review-post`) · 솔버 색·타이포 규칙(`solver-design`이 정본 · 이 스킬은 그쪽의 «눈» 역할만).
