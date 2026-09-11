# 이 PC 확정값 — screen-review

## 경로·명령

| 무엇 | 어디 |
|---|---|
| 촬영 스크립트 | `Holdem_Project/.claude/skills/screen-review/scripts/shoot.mjs` — 🔴 **Holdem_Project 루트에서 실행**(playwright·sharp를 그 `node_modules`에서 찾는다 · scratchpad에 복사하면 모듈 해석 실패) |
| 출력 | `Holdem_Project/tmp/screen/<name>/<폭>/…` (비추적) |
| Playwright | 레포 devDependency 1.60 · chromium `~/AppData/Local/ms-playwright/chromium-12xx` 설치됨. **MCP playwright는 chrome-for-testing 부재로 navigate 실패** — 쓰지 마라, 이 스크립트를 써라 |
| sharp | 레포 dependency 0.34 (조각·축소·비교 합성) |
| 블로그 dev | `npm run dev -- -p 3100` (기존 감사 스크립트 `scripts/mobile-audit.mjs`도 3100) · 기본 `--base http://localhost:3100` |
| 라이브 | `--live` = `https://www.holdemmaster.com` · 로케일은 `/en/blog/<slug>` `/ja/…` |
| 솔버 | 소스 `클로드-프로그램만들기/solver` · `npm run serve`(COOP/COEP 헤더 필요 · dist를 직접 열지 말 것) · 배포 `https://solver.holdemmaster.com` · 디자인 정본 `디자인명세.md`(solver-design 스킬) |
| 디자인 기준 | `Holdem_Project/docs/DESIGN.md`(토큰 역할·금지) → 값의 정본은 `app/globals.css` |
| 접근성·UX 규칙 원문 | `https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md` (Vercel Web Interface Guidelines · 매번 새로 받아 최신) |

## 폭·뷰포트

| 폭 | 뷰포트 | 용도 |
|---|---|---|
| 1440×900 | 데스크톱 | 3단 레이아웃(사이드바·본문·러닝맵) |
| 390×844 | iPhone 14급 | 🔴 GA4 «신규×모바일×블로그상세»가 약점 축 — 모바일을 먼저 본다 |
| 360×800 | 소형 안드로이드 | 표·긴 URL 넘침 재현용(`--widths 360`) |

## 옵션 요약

`--live` · `--base <url>` · `--url <full>` · `--path <p>` / `--paths a,b,c`(홈 = `home`) · `--widths 1440,390` · `--name <폴더>` · `--selector <css>`(crop · dpr 2) · `--hide sel1,sel2` · `--wait <ms>`(기본 1200) · `--dpr <n>` · `--no-segments` · `--compare a.png b.png --out x.png`

## 아는 함정

- Git Bash가 `/`를 `C:/Program Files/Git/`로 바꾼다 → `home`.
- 고정 요소(모바일 하단 탭·상단 바)는 full-page 캡처에서 첫 뷰포트 하단에 한 번 그려진다 — 위치 판정은 `seg-01`.
- 긴 글은 390에서 2만px가 넘는다(3bet 20,868px · seg 25장). 전부 Read하지 말고 overview로 자리를 잡은 뒤 **필요한 seg만** 연다(컨텍스트).
- 라이브 GA 수집 요청(`google-analytics.com/g/collect`)은 헤드리스에서 실패로 잡힌다 — 결함 아님.
- Read는 세로 2000px로 축소한다 → 모바일 overview는 2000px 조각(스크립트가 폭<600이면 자동).
