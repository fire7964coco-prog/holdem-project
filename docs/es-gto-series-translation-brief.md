# es GTO 솔버 13편 — 번역 에이전트 브리프 (2026-09-02)

> 스펙 §4-A-3 «번역 + 5필드» + 여섯째 «본문 용어 표기». ja 브리프(`docs/ja-gto-series-translation-brief.md`)의 템플릿을 es로 갈아 끼운 것이다.
> ja 1회차 교훈 둘을 처음부터 박았다 — ① **앱 UI 축어 사전을 입력으로 준다**(§1-B) ② **정정은 문장 단위 원문 대조**(§5).

## 1. 입력 (전부 읽고 시작한다)

| 무엇 | 경로 | 역할 |
|---|---|---|
| **소스 = EN** | `lib/posts-en/<slug>.ts` | 구조·링크·이미지·디렉티브·문장의 정본. 다국어 렌더 규약(content에 히어로 없음)도 EN이 맞다 |
| KO 정본 | `lib/posts/<slug>.ts` | 수치·고지 문장·논거 대조용. **구조는 보지 마라**(KO는 content에 히어로가 들어가는 KO 렌더러용) |
| 수치 정본 | `docs/gto-solver-series-spec.md` §4-B·§4-B-2 | 숫자가 EN과 어긋나면 **§4-B가 심판** |
| 키워드 팩 | `docs/keyword-bank/es-gto-series.md` §3·§4·§5 | 편별 H2/seoTitle/FAQ 축 · 표기 판정 · 카니발 |
| 문체·용어 | `docs/translation-terms-es.md`(Wave 3 전략 · Wave 6 solver/GTO) · `docs/local-voice/es-latam.md` §0·§2·§8 | tú · neutral LATAM · 영어 loanword + -ear 동사 · 반도어 금지 |
| es 필드 관례 | `lib/posts-es/holdem-continuation-bet.ts` 상단 20줄 | `masterUpdated`·`readTime: "N min"`·태그 관례 |
| 폐기 명제 | 아래 §4 | **이 문자열이 나오면 실패다** |
| 🔴 **앱 UI 축어 사전** | 아래 **§1-B**(2026-09-02 라이브 `?lang=es` Playwright 실측 · `.solver-captures/data-es.json`) | **「Compruébalo tú mismo」 절의 경로·라벨·표 등급명은 여기서만 가져온다.** 다른 표기를 지어내지 마라 |

### 1-B. 🔴 앱 UI 축어 사전 — es (라이브 실측 2026-09-02)

**내비·버튼**: `Spots de estudio` · `⚡ Ver resultados` · `Resolver tú mismo`(목록) / `Resolver este spot tú mismo`(결과 화면) · `← Lista` · `Entrenador GTO` · `Tablas preflop` · `Equity` · `Cómo usarlo` · `Acerca de` · `① Rango OOP` `② Rango IP` `③ Board` `④ Bet sizes` `⑤ Calcular`
**결과 화면**: `Solo estrategia de flop. ¿Quieres explorar turn y river? →` · `Jugador:` · `Estrategia del jugador que actúa primero` · `Bote 5.5 bb` · `Stack 97.5 bb`
**플레이어 셀렉터**: SRP `OOP (BB (caller))` / `IP (BTN (open-raiser))` · 3벳팟 `OOP (BB (3-bettor))` / `IP (BTN (caller))` · 블라인드전 `OOP (SB (open-raiser))` / `IP (BB (caller))`
**액션 칩**: `Bet 4.1bb (75% del bote)` · `Bet 1.8bb (33% del bote)` · `Check` · 3벳팟 `Bet 14.9bb (66% del bote)` · `Bet 7.4bb (33% del bote)` · 블라인드전 `Bet 2bb (33% del bote)` · ⑬ `Bet 4.5bb (75% del bote)` · 단위 `combos`
**패널 제목**: `Manos` · `Proyectos` · `Resumen` · `Ancho de barra:` `Normalizado / Absoluto / Completo` · `Mostrar:` `% de acción / EV de acción`
**등급 라벨(Manos · 앱 축어 그대로)**: `Quads` · `Full house` · `Color` · `Escalera` · `Trío` · `Doble pareja` · `Overpair` · `Top pair` · `Segunda pareja` · `Pareja débil` · `Underpair` · `A-high` · `K-high` · `Sin jugada`
**드로우 라벨(Proyectos)**: `Proyecto combinado` · `Proyecto de color` · `Proyecto a dos puntas` · `Gutshot` · `Proyecto backdoor` · `Sin proyecto`
**상세 표 헤더**: `Mano · Estrategia · Peso · EQ · EV (bb) · EQR · B 4.1bb · B 1.8bb · Check` · 합계 행 `Todo`
**스팟 그룹 라벨**: `Single Raised Pot — BTN vs BB (fundamentos)` · `Bote de 3-bet — BB 3-betea y BTN paga (SPR bajo)` · `Guerra de ciegas — SB vs BB (rangos amplios)`
**13스팟 이름(앱 축어 — 「Compruébalo tú mismo」의 경로에 그대로)**: ① `Board seco A-high` ② `Board seco K-high` ③ `Broadway conectado, two-tone` ④ `Conectado medio, two-tone` ⑤ `Board monotone` ⑥ `Board pareado` ⑦ `Board bajo y rainbow` ⑧ `Board A-high, ventaja del 3-bettor` ⑨ `Board dinámico two-tone` ⑩ `Board bajo y seco` ⑪ `Board K-T high` ⑫ `Bajo conectado, two-tone` ⑬ `Board con A pareado`
**인포그래픽(-ranges-es.webp) 고정 문구**: `Composición del rango` · `Equity` · `Realización de equity` · `Calculado con el solver GTO de HoldemMaster · rake no modelado`
🔴 **앱 note(스팟 설명문)는 인용 금지** — 폐기 명제(§4)가 들어 있다. 이름·라벨·경로만 쓴다.

## 2. 출력 — `lib/posts-es/<slug>.ts`

```ts
import type { Post } from "../posts";

/** (한국어 헤더 주석 8~15줄: 소스 EN 커밋/updated · 조준 키워드(팩 §3 행) · 표기 규약 한 줄 · 「편 수 하드코딩 금지」) */
export const POST: Post = {
  slug: "<EN과 동일>",
  title: "…",            // ≤ 70자 · 훅 + 보드 (es 코퍼스 관례 — 긴 제목 허용)
  seoTitle: "…",         // ≤ 60자 권장 · 「[훅] — [키워드]」 · 앞머리에 「GTO」「solver」 단독 금지 · 「c-bet」 단독 금지
  desc: "…",             // 120~155자 · 🔴 절대 160 초과 금지 · 수치 1개 이상 · ¿? 물음표 허용
  tldr: "…",             // 2~3문장 · EN tldr의 수치를 전부 보존
  category: "strategy",
  date: "2026-09-02",
  updated: "2026-09-02",
  masterUpdated: "2026-09-02",   // = EN updated (⑫⑬은 EN updated가 2026-08-21이면 그 값)
  keepImagesInBody: true,
  readTime: "N min",              // EN "N min" 그대로
  emoji: "<EN과 동일>",
  image: "/images/gto-<key>-oop-es.webp",   // EN의 -en.webp → -es.webp
  imageAlt: "…",                  // es로 재저작(구체 묘사)
  tags: [ … ],                    // 5~8개 · 팩 §3 축(영어 술어 앵커 허용: "spr poker" · "check raise poker" · "donk bet" · "set vs trips" …) + "poker gto" 1개
  content: `
…
`.trim(),
};

export default POST;
```

## 3. 규칙 (위반 = 반려)

1. **구조 1:1** — H2 개수·순서 · 모든 `:::` 디렉티브(stripe·note·pull·compare·readnext) · 표 행/열 · `==…==`·`==g:/==r:==` 하이라이트 · FAQ 문항 수 · 본문 이미지 1장(위치까지) — EN과 **개수 동일**. 문구만 스페인어.
2. **내부링크 개수·대상 1:1** — `/en/blog/<slug>` → `/es/blog/<slug>` · `/en/solver` → `/es/solver` · `"thumb:/images/…-hero.webp"` 유지(시리즈 내부 썸네일은 `-en.webp` → `-es.webp`) · readnext 행 수 유지(라벨은 `[Sigue leyendo]`). ✅ EN이 거는 외부 slug 10종은 전부 es에 실재한다(팩 §3) — 대체 불필요. 시리즈 13편끼리의 링크는 slug 동일.
3. **이미지** — `-en.webp` → `-es.webp`(oop·ranges 2장). alt·캡션은 es 재저작. content에 히어로 마크다운을 **넣지 마라**(다국어 렌더러가 `post.image`를 그린다 — posting.mdc STEP 3 대조표).
4. **수치·카드·확률·콤보 수 = 축어** (반각 % · 소수점 `.` · 천단위 `,` · `bb` · 카드 `A♠` 그대로 · 레인지 표기 `T9s`·`TT` 그대로). 계산식 `==15.46 ÷ 13.12 = 117.8%==` 그대로. 🔴 유럽식 `2,5`로 바꾸지 마라(`translation-terms-es.md` 「Números」).
5. **고지 문장 전부 보존** — «first action only / not in this solve / the study spot pre-solves the flop's first action only / cannot be confirmed here / judgment, not a figure / this section is interpretation, not a solver figure / resolved separately (re-solve) / screen values are rounded» 류는 **한 문장도 떨어뜨리지 마라**. 번역에서 가장 먼저 사라지는 문장이다(스펙 §4-A-3 조건 ③).
6. **H2 = 스페인어 실검색 형태** — 질문형 H2는 es에서 자연스럽다(PAA 「¿Qué es…?」「¿Qué significa…?」「¿Cuándo…?」「¿Por qué…?」). EN 질문을 **직역하지 말고** 팩 §3의 축으로 다시 묻는다. 각 H2 직후 **볼드 직답 1~2문장** 유지(EN 구조). 고정 H2 셋: `## ¿En qué condiciones salieron estos números?` · `## ¿Qué cambia en la mesa?` · `## Compruébalo tú mismo` · FAQ가 있는 편은 `## Preguntas frecuentes`.
7. **용어**(팩 §4 정본) — board(tablero 금지) · **seco / monotone / pareado / rainbow / two-tone / conectado / dinámico**(앱 축어) · top pair · sobrepar (overpair) · segunda pareja · pareja débil · underpair · sin jugada · doble pareja · trío(앱 라벨) / **set**(포켓페어+보드1) / **trips**(손패1+보드페어) · proyecto(=draw) · gutshot · proyecto a dos puntas(OESD) · proyecto de color · proyecto backdoor · color(=flush) · escalera · full house · quads/póker · bote(pozo 금지) · stack efectivo · farol/farolear(bluff는 앱 인용 시만) · las nuts · **realización de equity (EQR)** · ventaja de rango · ventaja de nuts · puntos(%p) · fuera de posición (OOP) / en posición (IP) · guerra de ciegas · bote de 3-bet · bote de subida simple (single raised pot) · 3-bettor / caller / open-raiser(앱 축어 · 산문 교대 허용) · apuesta de continuación (c-bet) → c-bet · cbetear · check-raise · donk bet / donkear · rango polarizado · blocker(s) · SPR · MDF · EV.
   🔴 언페어 보드(①②③④⑤⑦⑧⑨⑩⑪⑫)에서 앱 라벨 「Trío」를 표에 인용할 땐 EN과 같은 각주(«aquí siempre es set»). 페어 보드(⑥⑬)에서만 trips가 실재한다.
8. **문체** — tú · neutral LATAM(coste→costo · coger 금지 · lanzadera 금지 · 「en directo」→「en vivo」) · 결론 먼저 · 1인칭 최소(경험담은 관찰 서술) · 낚시 금지 · 「—」 전환 허용 · 「¿」「¡」 여는 부호 필수.
9. **금지** — 백틱(``` ` ```) 문자 0개 · 시리즈 편 수 하드코딩(「13 spots」「trece spots」「los 13 artículos」 금지 → 「esta serie」「toda la serie」) · 솔버 앱의 스팟 설명문 복사(폐기 명제가 들어 있다) · 법·합법성 언급 · KO 히어로 마크다운 · 「GTO」 단독 seoTitle/H2.
10. **FAQ** — `**Q. …?**` 빈 줄 `A. …` 형식. 예/아니오 직답은 첫 문장에(「No —」「Sí —」).
11. **Quick answer 블록** — `> **Respuesta rápida**` (es 코퍼스 정본 11회).

## 4. 폐기 명제 — es 문자열 앵커 (0건이어야 한다)
`favorece al (que paga|caller)` · `ventaja.{0,20}(al|del|para el) caller` · `frecuencia de c-bet de BTN se desploma` · `se desploma` · `[Cc]on SPR bajo,? las apuestas pequeñas` · `porque el SPR es bajo` ·
`(tríos|trips) (no )?son (raros|poco frecuentes)` · `no conecta en absoluto` · `check-raise (muy seguido|con mucha frecuencia|a menudo)`(주장형) · `después del check de BB`(BTN 액션 관찰 지시형) ·
`13 spots` · `trece spots` · `13 artículos` · `trece artículos` · `los mismos 0.05bb` · `llegan débiles`(+같은 문단에 67.4/9.6를 인과로 잇는 것) ·
「solo pagan las manos que te ganan」(RP-09) · 「cuanto mayor el EQR, mayor la ventaja」(RP-10) · 「MDF 60.2%, así que el 58.3% se retira」(RP-11).

## 4-B. 통일 표기 (배치 간 분열 방지 — «앱 축어 우선» · 🔴 1회차 뒤 확정분 추가)
🔴 **1회차 확정(2026-09-02 · 되돌리지 마라)**: check 동사 = **hace/hacer check**(pasar 금지) · 조건표 마지막 행 = **`| Comprobado |`** · stripe/표 «everyone else folds» = **el resto foldea** · **(mano a mano)**(heads-up 금지) · 따옴표 = 직선 **"…"**(길러멧 «» 금지) · 카드 = 산문·수트 붙은 카드·하이픈 보드 전부 **10**(`A♠10♠`·`Q-10-7`·`K-10-6`) / 레인지 표기(TT·T9s·AT)와 앱명 `Board K-T high`만 T · **A-high / K-high**(«A alta» 금지 · 관사는 **el/un A-high**) · **rank = valor**(«rango»는 range 전용) · **sobrepar** 산문(첫 1회 «sobrepar (overpair)») / 표 라벨 `Overpair` · **tamaño**(sizing은 ⑨의 «bet sizing» 키워드 자리만) · **del mismo palo / de distinto palo**(suited/offsuit 금지) · **poker**(무악센트 · 검색 표면·본문 동일) · **hacer slowplay**(trampear 금지) · **calling station**(estación de pago 금지) · **hace 3-bet**(resubir 금지) · **los callers**.

Spots de estudio · ⚡ Ver resultados · Resolver este spot tú mismo · Entrenador GTO · Sin jugada · A-high / K-high · Pareja débil · Underpair · Top pair · Overpair(표 라벨) / sobrepar(산문) · Trío(표 라벨) / set·trips(산문 구분) · Proyecto a dos puntas · Proyecto backdoor · stack efectivo · textura · rango del caller / rango de 3-bet / rango de apertura · bote de subida simple · bote de 3-bet · guerra de ciegas · two-tone(bicolor 금지) · rainbow · monotone · puntos(porcentuales 생략 가능) · 카드 심볼 산문 `10♠`(레인지 표기 T9s/TT · 앱 헤더 `Q♥T♥7♠` 축어는 유지) · H2의 BB/BTN/SB는 첫 등장에 풀 표기(ciega grande (BB) · botón (BTN) · ciega pequeña (SB)) · `> **Respuesta rápida**` · `:::readnext[Sigue leyendo]` · `## Preguntas frecuentes` · 태그 「poker gto」.

## 5. 자기 검사 (파일을 쓴 뒤 반드시)
```
node scripts/check-gto-numbers.mjs --locale=es        # 수치 집합 대조(🔴 0)
node -e "const s=require('fs').readFileSync('lib/posts-es/<slug>.ts','utf8');const c=s.slice(s.indexOf('content:'));console.log('backticks',(s.match(/`/g)||[]).length-2,'H2',(c.match(/^## /gm)||[]).length,'links',(c.match(/\]\(\/es\//g)||[]).length,'faq',(c.match(/\*\*Q\. /g)||[]).length,'dir',(c.match(/^:::[a-z]+/gm)||[]).length,'img',(c.match(/!\[/g)||[]).length,'desc',(s.match(/desc: \"([^\"]*)\"/)||[])[1].length)"
```
EN 파일에 같은 계수를 돌려 **H2·links·FAQ·`:::`·img 개수가 일치**해야 한다(백틱은 content 여닫이 2개만). desc 글자 수를 세어 보고하라.
🔴 **정정도 원문 대조 후에** — 같은 문자열이 «틀린 자리»와 «맞는 자리»에 공존한다. 파일 단위 치환 금지, 문장 단위로.

## 6. es 1회차 교훈 (2026-09-02 · 다음 로케일 pt·de·zh·zh-hant·fr에 그대로 적용)

1. **UI 축어 사전을 줘도 «어휘 사전»이 없으면 배치는 갈린다.** ja(~270곳)보다 훨씬 줄었지만 A/B/C 3배치가 또 갈렸다 —
   check 동사(hace check/pasa) · sobrepar/overpair · A-high/A alta · 조건표 고정문(Medido/Verificado/Comprobado · se retira/foldea · heads-up/mano a mano) ·
   길러멧 «»/직선 "" · lead 동사(liderar/apostar primero) · sizing/tamaño · suited/del mismo palo · heads-up. **§4-B에 «조건표 고정문 4행»과 «따옴표 종류»를 명시하라.**
2. **«rank» → «rango» 오역이 3배치 모두에서 났다**(8곳). 시리즈의 핵심어 rango(=range)와 충돌해 독자가 멈춘다. 다음 로케일 브리프에 **«rank = valor/altura, range = rango» 한 줄**을 §3-7에 넣어라(pt: rank=valor · de: Rang≠Range 주의 · fr: rang/range).
3. **네이티브 렌즈가 잡은 진짜 값어치는 관용구 오용이었다** — «no dejes de leer»(뜻 반전) · «trampear»(=cheat) · «pasarse de largo» · «hacer pareja con» · «tirada» · «dejar clavado» · «de par en par» · «resistir la c-bet»(방어로 읽힘). 기계·수학·교열 렌즈는 하나도 못 본다. **네이티브 렌즈 2종 병렬은 줄이지 마라.**
4. **정규화 스크립트도 결함을 만든다** — 관사 치환(la A alta→el A-high)이 «de el A-high» 축약 누락 3곳을 만들었고, 괄호 주석 치환이 «(overpair) (sobrepar)» 이중 괄호를 만들었다. **정규화 뒤 2차 교열은 필수**이고, 2차 교열이 실제로 13곳을 잡았다.
5. **EN 결함 2건이 또 역으로 드러났다**(⑥⑫ «thirteen» 본문 하드코딩 = RP-08) → EN 동시 정정. 로케일을 하나 열 때마다 EN이 한 번 더 검수되는 구조는 유지할 것.
6. **볼륨은 ja보다 더 얇다**(개념어 전부 10 · `spr poker` 70만 예외) — 훅은 숫자, 검색 표면(seoTitle·tags)만 영어 술어 앵커. 스페인어 서술형 표기는 전부 null이라 «검색어 표기 ≠ 본문 표기»를 처음부터 갈라 써야 한다(팩 §0).
