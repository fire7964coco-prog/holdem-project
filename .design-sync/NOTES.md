# design-sync — 이 레포의 특이사항

> 다음 동기화가 오늘의 디버깅을 다시 하지 않게 하려고 쓴다. 첫 동기화 = **2026-08-18**.
> 프로젝트: `HoldemMaster` (`69940ac5-3b13-4f4c-8b05-9431e175189a`)

## 🔴 0. 재실행 순서 (이걸 안 지키면 조용히 깨진다)

```bash
npm run build                                   # ① .next 의 컴파일 CSS 를 새로 뽑는다
node .design-sync/extract-css.mjs               # ② compiled.css + fonts.css 로 고정
cp -r <skill-base>/… .ds-sync/                  # ③ 지시서의 스테이징
node .design-sync/patch-fs.mjs                  # ④ 🔴 필수 — 안 하면 컨버터가 즉사한다
node .ds-sync/package-build.mjs   --config .design-sync/config.json --node-modules ./node_modules --entry ./.design-sync/ds-entry.ts --out ./ds-bundle
node .ds-sync/package-validate.mjs ./ds-bundle
```

## 🔴 1. 이 PC 의 Node 가 `rmSync`·`cpSync` 에서 «즉사» 한다

Node **v24.12.0** / Windows 11. 두 API 를 부르는 순간 프로세스가 죽는다 —
종료코드 **0xC0000409(-1073740791)**. JS 예외가 아니라 하드 크래시라 try/catch 로 못 잡고,
Git Bash 에서는 **127**, PowerShell 에서는 -1073740791 로 보인다. `rmSync` 는 **경로가 없어도**
(`force:true`) 죽는다. `fs.promises.rm`·`copyFileSync`·`renameSync`·`rmdirSync`·`unlinkSync` 는 정상이다.

**증상이 원인과 안 닮았다**: 컨버터가 헤더 몇 줄만 찍고 죽어 산출물이 반쪽이 되고,
validate 가 「styles.css missing」·「README.md missing」 같은 **엉뚱한 오류**를 보고한다.
→ 해결은 `.design-sync/patch-fs.mjs` (스테이징 직후 매번 실행. 이유·복구법은 그 파일 헤더에).

🪶 **`--import` 프리로드로 `fs.rmSync` 를 갈아끼우는 방법은 안 통한다** — 스크립트들이
`import { rmSync } from 'node:fs'` 로 **명명 임포트**를 쓰는데, 그 바인딩은 링크 시점에 고정돼서
기본 export 객체를 바꿔도 안 바뀐다. 실제로 시도했고 실패했다. 임포트 자체를 바꾸는 수밖에 없다.

🪶 패처의 정규식을 `[\s\S]*?` 로 쓰면 **앞선 다른 import 문을 통째로 넘어가** 엉뚱한 블록을 잡는다
(`lib/emit.mjs` 를 그렇게 놓쳤고, 같은 식의 잔존 검사가 「0건」이라고 거짓 보고했다).
`[^}]*` 로 닫아야 한다. 그리고 잔존 검사에 **원시 grep** 을 하나 더 뒀다 — 파싱은 또 틀릴 수 있다.

## 2. 이 레포는 «컴포넌트 라이브러리»가 아니다 — 스킬 envelope 밖이다

- `package.json`: `private: true` · `main`/`exports` 없음 · `dist/` 없음 · 라이브러리 빌드 스크립트 없음
- Storybook 없음(`.storybook/` 0개, `*.stories.*` 0개 — node_modules 제외 전수 확인). 자동탐지 재실행 불필요.
- **`--entry` 로 합성 배럴(`.design-sync/ds-entry.ts`)을 넘긴다.** 이유 둘:
  ① 컨버터가 `node_modules/holdemmaster/package.json` 을 찾다 죽는다(자기 자신은 self-install 안 된다)
  ② default/named export 가 반반이라 배럴에서 **default 를 named 로 승격**해야 번들 export 목록에 잡힌다
- 진짜 디자인 언어의 절반은 React 가 아니다:
  - `app/globals.css` — 토큰(HSL 3요소) + `.blog-prose` 타이포
  - `lib/render-markdown.ts` — **문자열 HTML 생성기**. 본문 디렉티브(풀쿼트·노트·팁·readnext·stripe)가
    전부 여기서 문자열로 만들어진다. **React 컴포넌트가 아니라 이 스킬이 담을 수 없다** — `styles.css` 로만 반영된다.

## 3. CSS 는 «소스» 가 아니라 «컴파일 결과» 를 넘겨야 한다

`cssEntry` 를 `app/globals.css` 로 두면 첫 줄이 `@import "tailwindcss";` 라
**`[CSS_IMPORT_MISSING]` 으로 검증이 깨진다.** 게다가 소스엔 `text-primary` 같은 유틸리티 «정의»가
없어서(생성 단계 산출물) 프리뷰가 스타일 없이 렌더된다.
→ `.design-sync/extract-css.mjs` 가 `.next/static/css/*.css` 를 합쳐
`.design-sync/.cache/compiled.css` 로 고정한다(파일명이 콘텐츠 해시라 config 에 직접 못 쓴다).
결과: **토큰 228개 정의 / 177개 참조**가 실린다.

## 4. 폰트는 회수했다 (새로 들인 게 아니다)

next/font 가 만든 `@font-face` 는 url 이 `/_next/static/media/…` 라 번들 밖을 가리켜
`[FONT_DANGLING]` 이 난다. extract-css 가 그 woff2 **66개를 복사**하고 url 을 옆 파일로 바꾼
`fonts.css` 를 만든다 → `cfg.extraFonts`. 🔴 **새 웹폰트를 들인 게 아니라 이미 셀프호스팅 중인
그 파일 그대로다** (이 레포는 `@font-face` 438개로 FCP 의 1/3 을 날린 사고가 있어 폰트 추가는 금지다).
`cfg.runtimeFontPrefixes` 는 OS 폴백(Apple SD Gothic Neo·Yu Gothic UI·Malgun Gothic·Segoe UI)용 —
이건 원래 안 싣는 게 맞다.

## 5. 범위 결정 (2026-08-18, 사장님)

**토큰·CSS 중심 + «정적 렌더가 되는» 컴포넌트만.** `components/*.tsx` 32개 중
**22개가 `next/link`·`next/image`·`next/navigation`·`@supabase`·`@/lib/*` 의존**이고,
특히 `next/navigation` 훅은 라우터 컨텍스트 없이 정적 렌더가 안 돼 어차피 floor card 로 떨어진다.
→ `componentSrcMap` 에 **순수 10개만 핀**.

| 상태 | 컴포넌트 |
|---|---|
| 프리뷰 authored + 채점 good (19칸) | PokerTableDiagram(5) · OmahaTableDiagram(3) · SevenCardStudDiagram(3) · CardThumb(3) · RankingTable(2) · TableOfContents(2) · PokerOddsCalculator(1) |
| floor card (의도된 baseline) | **BrushDefs**(SVG `<defs>` — 원래 눈에 안 보인다) · **ReadingProgressBar**(스크롤 대상이 있어야 의미가 생긴다) · **LegalPage**(페이지 셸이라 카드 크기에 안 맞는다) |

🪶 `TableOfContents` 에 「sections 2개 미만 → null」 경계를 스토리로 뒀다가 **뺐다** —
동작은 맞지만 카드가 **빈 칸**이라 사람이 고장으로 읽는다. 계약은 `.d.ts` 주석에 남겼다.

## 6. `.d.ts` 는 손으로 채웠다

synth-entry 라 prop 추출이 전부 `[key: string]: unknown` 으로 나왔다.
**잘못된 `.d.ts` 는 디자인 에이전트가 API 를 계속 오용하게 만든다** → `cfg.dtsPropsFor` 에
원문에서 뽑은 실제 props 10개를 적었다. **컴포넌트 시그니처를 바꾸면 여기도 같이 고쳐라** (자동 추출이 못 잡는다).

## 7. Known render warns

없음. 마지막 validate 는 **오류 0 · 경고 0**(`✓ bundle is complete`),
render check **10/10 clean**, `bad`/`thin`/`variantsIdentical` 전부 0.

## 8. Re-sync risks (다음 실행이 지켜볼 것)

- 🔴 **`patch-fs.mjs` 를 잊으면 즉사한다.** §0 순서 참조. Node 를 바꿔 고쳐졌는지 확인:
  `node -e 'require("fs").rmSync("./__x__",{recursive:true,force:true});console.log("ok")'`
- 🔴 **`npm run build` 를 먼저 안 돌리면 `.next` 가 낡아** 토큰 변경이 디자인 시스템에 반영되지 않는다.
  (증상이 없다 — 조용히 옛 토큰이 올라간다.)
- **`--gold-dark-rgb` 는 2026-08-18 신설 토큰**이고 `--primary`(#b99027, 크림용)와 **다른 색인 게 의도**다
  (#d4af37, 다크 표면용). 시안이 둘을 합쳐 오면 되돌려라 — 다크 바의 대비가 죽는다. conventions.md 에도 적었다.
- ✅ **본체의 `hsl()` 결함은 2026-08-18에 해소됐다**(`8d2aba44` · 445파일 5,204자리).
  conventions.md 의 「반드시 `hsl(var(--x))`」 규칙이 이제 사이트 실제와 일치한다 —
  시안이 «깨진 화면» 을 기준으로 판단하게 되는 문제가 사라졌다.
  🪶 다만 규칙 자체는 남겨 둬라: 깨진 자리가 전부 «본문 인라인 스타일» 이었으므로,
  새 포스트를 쓰면서 `hsl()` 을 빠뜨리면 같은 게 재발한다.
- **`npm ci` 를 새로 돌리지 않았다** — 이미 설치된 트리로 `npm run build` 가 632페이지를 성공시키는 것을
  같은 세션에서 확인했고, `npm ci` 는 node_modules 를 지우고 다시 받아 수 분이 걸린다.
  재현성이 의심되면 그때 돌려라.
- **`guidelinesGlob` 을 좁혀 뒀다.** 기본값은 `docs/*.md` 를 통째로 쓸어 담아 **내부 전략 문서 93개**가
  디자인 시스템에 올라간다. 지금은 UX 브리프 1편만 간다. 늘릴 땐 «디자인 에이전트가 읽을 값이 있나» 로 판정하라.
- **첫 업로드 때 형식에 안 맞는 파일 9개를 올렸다가 지웠다**(스킬 지시서를 받기 전에 손으로 만든 카드).
  프로젝트에 `foundations/` 나 flat 한 `components/*.html` 이 보이면 그 잔재다 — 이번 회차에 전부 삭제했다.
