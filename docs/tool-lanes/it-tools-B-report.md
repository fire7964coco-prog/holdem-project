# Lane B — Italian tools

Execution: it-tools-B-20261016, workspace Holdem-gpt-it-b, branch gpt-it-b. Started 2026-10-16 18:30 KST; deadline 20:00 KST (save by 19:55). Usage metrics and account limit unavailable; no estimates. Batch: Italian quiz and tournament board only. Completion: implementations, requested gates, two tool commits and this report committed last. No deployment. Child tasks: none at start.

완료: 퀴즈 `948e69cd`, 대회 보드 `f9c7fa5d`. 두 독립 검수는 gpt-6-astra ultra 읽기 전용으로 수행했고 변경 줄 재교열까지 끝냈다. 배포·우편함·WORKLOG·핸드오프는 선례대로 헤드 몫이다.

## ① 파일·행 수

행 수는 최종 파일 전체, 증감은 시작점 `71915da1` 대비다. 기존 로케일 파일·대회 데이터 행은 수정하지 않았다.

| 파일 | 행 수 | 증감 |
|---|---:|---:|
| app/it/win-rate-quiz/page.tsx | 82 | +82 |
| app/it/win-rate-quiz/win-rate-quiz-client.tsx | 291 | +291 |
| app/it/tournaments/page.tsx | 72 | +72 |
| components/bottom-tab-bar.tsx | 208 | +2 |
| components/side-rail.tsx | 700 | +6 / −1 |
| lib/hub-i18n.ts | 316 | +14 / −1 |
| lib/hub-routes.ts | 140 | +2 |
| lib/win-rate-quiz-alternates.ts | 45 | +3 / −1 |
| lib/tournaments-hreflang.ts | 29 | +2 / −1 |
| lib/tournaments-i18n.ts | 3.968 | +160 / −7 |
| scripts/check-tournaments-i18n.mjs | 167 | +2 / −1 |
| scripts/generate-sitemap.mjs | 537 | +4 / −1 |
| docs/keyword-bank/win-rate-quiz-ltr.md | 175 | +12 |
| docs/tool-lanes/it-tools-B-report.md | 123 | 신규 |

공용 타입의 키 추가·삭제 없음. 퀴즈는 현재 FR 틀의 122키(이탈리아어에 불필요한 선택 키 percentGap 제외); 숫자 출력은 QuizUI의 fmtNum에서 it-IT + useGrouping:true, decimalComma:true. QuizUI에는 numberLocale 키가 없어 추가하지 않았다. 보드는 BoardStrings 그대로, FIELD/PAREN/CITY/COUNTRY_NAME/NAME_OVERRIDE/SCHEMA_DESC/MONTH·날짜 분기·HOME_COUNTRY를 등록했다. NOTE는 빈 객체다.

## ② 헤드텀·메타 자수

기존 `it-tools.md` §4 조사만 재사용: Quiz poker 70 / allenamento 보조, Tornei poker live 390. simulatore poker는 계산기·게임 의도 충돌로 머리에 쓰지 않았다. 자수는 브랜드 접미까지 포함한 코드포인트이며 빌드 HTML·브라우저 제목도 일치했다.

| 페이지 | 자리 | 최종 문구 | 자수 |
|---|---|---|---:|
| quiz | title | Quiz poker: allena equity e decisioni \| HoldemMaster | 52 |
| quiz | description | Allenamento poker con carte avversarie nascoste: stima la tua equity, scegli tra call e fold e rivedi ogni street con le pot odds. | 130 |
| tournaments | title | Tornei poker live 2026: calendario e buy-in \| HoldemMaster | 58 |
| tournaments | description | Calendario tornei poker live nel mondo: date, buy-in e fonti ufficiali. Filtra per paese e stato. Aggiornato al 16/10/2026. | 123 |

퀴즈 OG/Twitter 설명 117자, 보드 112자. 보드 title 훅은 접미 포함 최대 60자, 진행중 설명은 전체가 155자 안에 들어갈 때만 붙인다. H1은 «Quiz poker 🃏» / «Tornei poker live 2026: il calendario». 보드 제목에 Italia 없음.

## ③ 정본 밖 신규 용어·고유명

아래 외 용어는 `translation-terms-it.md`를 따랐다. 웹은 낱말·표기만 확인했고 출처의 계산·전략·일정 값을 새로 채택하지 않았다.

| EN | 채택 | 원문 URL / 코퍼스 grep |
|---|---|---|
| Straight draw | Progetto di scala | lib/posts-it/holdem-game-order.ts:106 |
| Main Event | Main Event | lib/posts-it/holdem-game-order.ts:35 |
| Top pair | Top pair | [888 용어집](https://poker.888casino.it/come-giocare/terminologia/), 항목 «Top Pair» 직접 확인 |
| Freeroll | Freeroll | [PokerStars Live FAQ](https://www.pokerstarslive.com/it/about/faq/), «freeroll» 직접 확인 |
| High roller | high roller | [EPT Prague 공식 IT](https://www.pokerstarslive.com/it/ept/prague/), «High Roller» 직접 확인 |
| Flight | flight (EN 유지) | [APPT Korea 공식 IT](https://www.pokerstarslive.com/it/appt/korea/)의 «Multi Flight Challenge» 명칭 확인. 일반명사 현지 번역은 미확정이므로 EN 유지 |

도시 칸은 Parigi·Londra·Praga·Barcellona·Siviglia·Seul·Lucerna·Montecarlo·Città del Messico·Città di Panama·San Paolo 등 통상 엑소님. 국가 칩은 Italia·Svizzera·Austria·Francia·Monaco·Cechia·Malta, 산문은 Corea del Sud. 대회명·시설명은 원문 유지(COUNTRY_NAME.it / NAME_OVERRIDE.it 비움); 월·계절 괄호만 현지화하고 Ha Long Bay는 그대로다. 공식 IT도 지명 Praga와 행사명 EPT Prague·시설명 Hilton Hotel Prague를 구별한다: [공식 페이지](https://www.pokerstarslive.com/it/ept/prague/). 별도 이탈리아어 행사명·시설명 override를 채택한 건은 없다.

## ④ 미확인 일반 UI 선택

사용자 허용에 따른 편집 선택이다. 미확인 포커 용어 Lose / percentage points / Standard는 정본의 EN 임시형을 유지했다. 사용하지 않는 Next question·Load 등은 새로 확정하지 않았다.

| 개념 | 선택 |
|---|---|
| Reset / 기록 초기화 | Azzera |
| Next / new hand | Distribuisci il flop/turn/river / Nuova mano |
| Points | punti |
| Guess / error | Stima / errore / errore medio |
| Copied | Copiato (기존 lib/intl.ts it.copied와 동일 동사) |
| Result / review / graph | Analisi / Grafico; 계산 탭 Calcolo |
| Show / hide cards | Mostra le loro carte / Nascondi le loro carte |
| Clear all | Cancella tutto |
| Loading | Mescoliamo e calcoliamo… |
| All / all countries | Tutti / Tutti i paesi |
| Upcoming / running / finished | In programma / In corso / Conclusi (단일 배지 Concluso) |
| Venue | Sede |
| Year-round / dates TBA | Tutto l'anno / Date da annunciare |
| Official site / full guide | Sito ufficiale / Guida completa |
| Unpublished / unannounced / undecided | Non pubblicato / Non annunciato / Da definire |
| Close / edit / verify | Chiudi / Modifica / Verifica |

## ⑤ 제외한 링크

- 퀴즈 FR 푸터의 holdem-pot-odds·holdem-position-play: it 글이 없어 제외. 푸터에는 /it/calculator만 둠(사용자가 허용한 Lane A 병합 대상).
- 대회 상세 가이드: it 글 없음 → 기존 resolveBlogLinks가 빈 객체 반환. EN·KO 가이드로 우회하지 않음.
- /it/solver/solver-client.tsx 등록: 해당 페이지가 없어 생략. 퀴즈의 외부 솔버 연결은 ar 선례처럼 lang=en, «Flop study … (in inglese)»로 명시.

## ⑥ 게이트·화면·독립 검수

요청 게이트를 전부 실행했다. 아래는 실제 출력 끝줄 발췌다. 로그·화면은 비추적 `tmp/`에 남겼다.

```text
check:tournaments-i18n — 147행 · 값 필드 296개 × 16로케일
🔴 0건 (값 필드 0 · note 0)
check:tournaments-i18n:selftest — 셀프테스트 9/9
check:seo-sync — ✅ 🔴 0건 — 렌더 후 DOM이 서버 metadata와 갈리는 자리
check:hreflang (postbuild) — ✅ hreflang 0건 — 자기참조·상호참조·대상실재·중복langcode 전부 통과
check:intl-links — ✓ 다국어 내부 링크 검사 통과 (736편, 25개 언어)
check:number-format — ✅ 파일 내부 혼용 0건 · ✅ 소수파 0건
check:meta — 포스트 804편 검사 · 상한 160자 / ✅ 자수 초과 0편
npx tsc --noEmit -p . — TSC_ERROR_COUNT=759 / TSC_EXIT=2
npm run build (1회) — ✓ Generating static pages (993/993) / BUILD_EXIT=0
sitemap.xml → 74 blog posts + 736 intl posts + 130 static URLs + 25 locale homes
check:directives — ✅ ::: 마커 잔존 0
check:meta-lang — ✅ 🔴 0건
```

tsc의 새 도구·이번 추가 줄 오류 0. 기존 오류 759건은 보존했다(대부분 게시물 Category; 수정 파일 중 bottom-tab-bar의 기존 onSelect(t.key) TS2345도 시작점 원문과 동일). check:meta와 check:number-format은 게시물 범위이므로 도구를 검사했다고 간주하지 않고 별도 메타·숫자 대조를 했다. SEO 검사 최초 sandbox EPERM은 읽기 전용 git 자식 실행 권한으로 해결했다. 빌드는 기존 Supabase 관련 경고와 타입검사 생략 설정을 그대로 사용했다.

별도 기계 대조: 퀴즈 키·마크업 FR 일치(선택 % 공백·없는 글 푸터만 차이), 수식 94조합 일치, it-IT 출력 1.326 / 2,5 확인, 새 TSX 문자열의 한글·내부 백틱 각각 0. 보드 147행 buy-in 단위 환산 전부 일치(독립 검수), 활성 Event 스키마 2개 금액·날짜 일치, 기존 15로케일 17.640회 출력 비교 불일치 0. 날짜 표본: 12–19 ott. 2026 / 30 ott. – 2 nov. 2026 / 28 dic. 2026 – 3 gen. 2027.

화면: [screen-review SKILL](../../.claude/skills/screen-review/SKILL.md) 적용. Next 서버 없이 빌드 HTML·JS·worker를 Playwright 요청 가로채기로 제공했다. 외부 서비스는 오프라인 응답(Supabase 목록은 빈 배열)으로 대체했으므로 백엔드 검증은 아니다. 390·1440·360 각 폭에서 퀴즈 1판 완주(각 7동작), 보드 국가 필터 147→1, 앱 오류 0·문서 가로 넘침 0. 초기·완료·필터 캡처를 직접 열어 확인했다. 결과 `tmp/screen/it-tools-b/report.json`, PNG 9개. 기존 결과 표의 내부 가로 스크롤은 유지. 검증 스크립트의 초기 선택자/비동기 완료 분기/모의 응답 형상 오류는 고쳐 최종 통과했고 제품 코드는 바꾸지 않았다.

| 독립 검수 | 판정·반영 | 변경 줄 재교열 |
|---|---|---|
| Astra 퀴즈(원어민·포커 코치) | 신규 경미 1: resta il 80% 관사 문제 → (% rimanente) | 새 WRONG/RISKY 0 |
| Astra 대회(원어민·수치) | 신규 1: Ha Long Bay 원문 유지 / FR 상속 1: 모든 카드 출처 링크 단정 → 가용 링크만 설명 | 새 WRONG/RISKY 0 |

## ⑦ 헤드 요청·남김

- Lane A 병합 시 hub-routes·side-rail의 it 항목을 합쳐 도구 5개를 보존할 것. 이 레인은 자기 두 라우트만 넣었다. hub-i18n·bottom-tab-bar의 it 크롬도 양쪽에서 추가했으면 한 항목으로 통합.
- 솔버 IT UI 라이브 확인 뒤 solverLang·메뉴 축어를 it로 전환하고 /it/solver 등록은 해당 회차에서 진행. 현재 영어 연결은 의도적이다.
- 기존 공용 크롬의 Coming soon 배지·브랜드 영문 슬로건은 그대로다. 공용 컴포넌트·다른 로케일·대회 데이터 행 수정 요청 없음.
- public/sitemap.xml·tsconfig.tsbuildinfo는 자동 생성 변경을 시작점 내용으로 복원하고 커밋에서 제외했다. 최종 사이트맵 재생성·병합 뒤 빌드·배포는 헤드 몫.
