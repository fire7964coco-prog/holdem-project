"use client";

import Link from "next/link";
import { SOLVER_FAQ_ZH_HANT } from "./faq";

/**
 * ★CTA는 `?lang=zh-hant`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-24 라이브 확인** — `?lang=zh-hant`로 열면 `<html lang="zh-Hant">`가 되고 화면 전체가
 *   번체 중국어로 뜬다(Playwright DOM 실측 · title «HoldemMaster GTO 解算器 —— 免費線上德州撲克
 *   GTO Solver»). 다른 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=zh-hant";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/zh-hant/solver` 랜딩 — ★2026-08-24 신설 (8번째 = 마지막: 앱 8언어 = 랜딩 8개 완성)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **번체권(대만·홍콩)에 그 진입로가 0개였다.**
 *   zh(간체) 랜딩과는 **볼륨 파이를 나눠 갖는 관계**이고 hreflang(`zh-Hans`/`zh-Hant`)으로
 *   지역을 가른다(뱅크 §1-⑤ — 자형은 볼륨을 안 가르고, 번체 페이지가 간체 SERP에 그대로 랭크).
 *
 * ▶ 키워드 근거 (2026-08-24 실측 — **볼륨 재실측 없음.** `docs/keyword-bank/zh-gto-solver.md`
 *   §0~§3의 TW(DFS)·HK(라쿠) 값을 그대로 쓴다. zh-hant 고유 판정은 §7):
 *     🔴🔴 **TW 볼륨은 DataForSEO 단독이다**(라쿠 Taiwan은 죽은 소스 — 뱅크 §1-④).
 *     **`gto poker`/`poker gto` TW 210 · HK 390**(최대 일반형) · `poker solver` TW 20 · HK 30 ·
 *     `gto solver` 30 · **`德州撲克 gto` TW 140**(간체권 ≤10의 14배 — 중국어 정면 쿼리의 본진이
 *     대만이다. **H1과 «이름들» 문단이 `德州撲克 GTO` 연속 문자열로 받는다** — SEO 렌즈
 *     2026-08-24 반영) · `德州撲克範圍` 70 · `gto是什麼` 70 · `求解器` 70(수학 혼재 — 병기로만) ·
 *     **`德州撲克勝率計算器` 260**(신규 FAQ + 내장 탭 문단이 받는다 — zh-hant 코퍼스 무주공산
 *     실측) · `德州撲克教學` 480(«教學案例» 결합으로만 — 新手教學 축은
 *     `texas-holdem-rules-for-beginners` 소유) · `piosolver` 110(비교 절).
 *   🔴 **`勝率計算器` 1,900 단독 조준 금지** — TW SERP 실측 포커 0/10(게임 승률 계산기 의도 ·
 *      뱅크 §1-③). 포커 의도는 `德州撲克勝率計算器` 260뿐 — 반드시 «德州撲克»를 붙인다.
 *
 * ▶ H2 설계 = `docs/zh-hant-search-behavior-report.md` (2026-07-22 실측):
 *   번체 검색은 **명사형·키워드형이 지배**하고 질문형 풀문장은 희소하다. 짧은 «怎麼~?» 훅만
 *   제한적으로 허용, 질문은 FAQ 블록(常見問題 FAQ)에 격리, 용어는 中(英) 병기.
 *   → zh(간체)의 의문형 H2 넷을 전부 명사형/怎麼형으로 갈았다(«…嗎?» 둘 포함 — SEO 렌즈
 *     2026-08-24 반영: 免費·手機 H2도 명사형으로).
 *
 * 🔴🔴 **오염어 둘 — 앵커 필수** (뱅크 §1-①·② — 간체와 동일 규율):
 *   · `GTO` 단독 = 자동차(페라리·미쓰비시·폰티악) · 『GTO』 아니메/드라마 → 撲克/poker와 결합.
 *   · `solver` 단독 = 수학 솔버(`math solver` 49,500) → «Poker Solver»/«解算器+撲克 문맥»으로만.
 *   🪶 비교 절 H2의 브랜드명(GTO Wizard·PioSOLVER·TexasSolver)은 고유명사라 오염 규율의
 *      대상이 아니지만, «這些解算器»로 앵커를 함께 세웠다(SEO 렌즈 2026-08-24).
 *
 * 🔴🔴 카니발 방지 — **zh-hant 43편 전수 grep**(뱅크 §7-2):
 *   · `app/zh-hant/`에 있는 것은 `blog`·`tournaments`·`page.tsx`다. 도구 라우트는 **없다**
 *     → 도구 링크는 전부 zh-hant 블로그 글이고 대상 9종 전건 `lib/posts-zh-hant/<slug>.ts` 실존 확인
 *     (starting-hands-chart·pot-odds·equity·reading-the-board·position-play·3bet·strategy·
 *      glossary·continuation-bet).
 *   · **프리플랍 표 = `zh-hant/holdem-starting-hands-chart` 소유**(태그 «GTO翻前圖» + desc
 *     «GTO 對新手圖的取捨»). 프리플랍 차트 축 제목·H2 금지 — **첫 내부링크**로 넘긴다.
 *   · 新手教學·規則 = `texas-holdem-rules-for-beginners`(seoTitle «【新手教學】») 소유 —
 *     FAQ 教學 문항의 답이 그 글을 «起點»으로 명시해 흘려보낸다(SEO 렌즈 2026-08-24).
 *   · 勝率 «개념» = `holdem-equity`·`holdem-probability` 소유. 랜딩은 **도구 축만** —
 *     🟢 단 `德州撲克勝率計算器`(260)는 무주공산이라(equity 태그에 計算器 없음 — 간체와 다른 지점)
 *     내장 탭 문단 + FAQ가 정면으로 받는다.
 *   · **GTO·solver·解算器·求解器 축 = 소유자 0** → 랜딩이 가져간다.
 * ❌ **게임 플레이 의도(`德州撲克在線`·`遊戲`·`app`류) 조준 금지** — FAQ가 «게임이 아니라 계산
 *   도구»로 갈라 준다. ❌ **RTA·봇 축 금지** — FAQ 방어 문항 참조.
 *
 * 🔴 사실 출처 — 전부 2026-08-24에 `?lang=zh-hant`로 열어 DOM에서 직접 읽었다
 *   (골격 축어 = 뱅크 §7-3 · 13스팟 축어 = `docs/solver-app-verbatim-5langs-2026-08-24.md` §6):
 *   · 🔴🔴 **solver의 번체 라벨 = «解算器»** — 간체 앱(求解器)과 다르다. 용어집
 *     `docs/translation-terms-zh-hant.md` §7-C(`解算器（solver）`)와 일치. 라벨은 앱 축어가 정본.
 *   · 언어 셀렉터 **8개** · 히어로 «GTO 策略，打開瀏覽器就能算。» / «不用裝軟體，也不用花錢。»
 *   · 특징 4칸 «免費 / 全部功能，不限次數» · «離線學習» · «算得快 / 多執行緒——接近桌面版解算器
 *     的速度» · «GTO 訓練器 / 做題，按佔底池的 EV 損失評分» 🟢 팟 대비 정정본
 *   · 네비 «教學案例 ⚡ 立刻看» «GTO 訓練器 EV 評分» «翻前範圍表 開池·防守» «勝率計算器 Equity»
 *   · 사이드바 «① OOP 範圍 ② IP 範圍 ③ 公共牌 ④ 下注尺寸 決策樹 ⑤ 執行解算器»
 *   · PWA 버튼 **«♠ 加入主畫面»**(간체 添加到主屏幕와 다름) · 결과 패널 «「手牌/聽牌」面板» ·
 *     상단 **«動作列»**(간체 动作条와 다름) · 결과 좌측 **«13×13 表格»** · «詳情表» ·
 *     «勝率實現(EQR)» · «棄牌權益(fold equity)» · «目標可剝削度»
 *   · 그룹 라벨 «單加注底池——BTN vs BB（基礎）» «3bet 底池——BB 3bet、BTN 跟注（低 SPR）»
 *     «盲位對戰——SB vs BB（寬範圍）» · 조건 «底池 5.5bb · 籌碼量 97.5bb» 등
 *   · 🔴 **zh-hant 앱도 소수 구분자가 «마침표»다**(77.9% · 5.5bb — de 쉼표와 다르다).
 *   §13 산수 검산(일곱 랜딩과 동일 · 산수 렌즈 2026-08-24 전건 재검산 — 결함 0):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb ·
 *     0.08÷5.5 = 1.45% · 0.08÷22.5 = 0.36%
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   zh-hant 앱 실측(2026-08-24 · 5langs 축어 문서 §6):
 *   🟢 ③⑨⑬은 이미 정정본(77.9/119.4·99.9 / 98.4·0.8 / 88 대 66·80.1) — 그대로 옮겨도 된다.
 *      ⚠ 단 ③의 «在 13 個案例裡»는 편 수 하드코딩이라 «這套案例裡»로 갈았다(RP-08).
 *   🔴 **다섯 자리는 앱 문구를 그대로 못 쓴다 — 랜딩은 §4-B 정정본을 쓴다**
 *     (§4-B 위반 넷 ④⑦⑧⑩ + 화면 밖 주장 ① — zh와 같은 다섯이다. ①은 M-053이 **RP-20**으로
 *      등재했다 · ⑩은 «整個» 절대형이 잔존하는 3언어(ko·zh·zh-hant) 중 하나).
 *   ⚠ 아래에 앱의 폐기 문구 원문을 적지 않는다(M-047 — 주석 인용이 회귀 앵커를 재도입한다).
 *     축어는 5langs 문서 §6에 있다:
 *     · ④ = **RP-01 계열 + RP-02** — «콜러 우위 보드 + C벳 빈도 붕괴» 류
 *       (콜러 우위는 폐기 명제 · C벳 빈도는 화면에 없다). 8개 언어 전건.
 *     · ⑦ = **RP-19 + 조작 지시** — «체크레이즈 빈도가 높아진다 + 벳 뒤를 따라가 보라» 류
 *       (화면은 BB 첫 액션에서 멈춘다 · KO ⑦ 239줄 정본).
 *     · ⑧ = **RP-03** — «SPR이 낮아서 작은 벳» 류
 *       (사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양 — ⑨ 98.4% 반례).
 *     · ⑩ = **RP-17 결함형** — «整個 빗나감» 류 절대형.
 *       정본은 수치다: KO ⑩ 표 실측 **탑 페어 0%** + 거트샷 4.8% · 백도어 16.9% · 없음 78.3%.
 *     · ① = **RP-20** — «BB 체크 다음 BTN이 넓게 친다» 류
 *       (체크 «다음»은 화면이 안 준다) → 화면값(체크 98.2%)으로 교체.
 *   🟢 ⑪은 빈도 수치 없음(RP-18 조건 미충족 ✅) — **수치를 붙이지 마라.**
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(일곱 랜딩 주석과 같은 경고).
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 이것이 정상이다.**
 *   GTO 시리즈 13편은 **ko·en에만 있고 zh-hant에는 0편**이다(`lib/posts-zh-hant/`에 해당 slug 0건).
 *   **없는 링크를 미리 걸지 마라 — 404는 색인에 남는다.** 번체판이 발행되면 그때 `slug`를 채운다.
 *
 * ✅ 적대검수 4렌즈 반영 (2026-08-24 · 반영 24 · 기각 8 — 전건 원문 판정):
 *   · 네이티브: 대륙식 표현 교체(要麼/活兒/落到實處/斷網/半吊子/按開/流量緊張/背線路/無位置/
 *     預算→預先算/看著像·可(산문 자리만)/走牌) + 코퍼스 정본 «賽局理論最佳解» 채택(最佳化 0건) +
 *     覆蓋→涵蓋範圍. **기각**: ③⑨ note의 «看著像»·«可»와 «份額»·«做題»·«K 高帶 10» —
 *     전부 **앱 zh-hant 축어 그대로**라 라벨 정본 규율이 이긴다(고치면 앱과 갈라진다).
 *   · SEO: H1·이름들 문단에 `德州撲克 GTO` 연속 문자열 편입 · 의문형 H2 2개 명사형 전환 ·
 *     教學 FAQ에 rules-for-beginners 핸드오프 · 비교 H2에 解算器 앵커.
 *   · 정합: 본문↔FAQ 축어 중복 4건 전부 FAQ 쪽 변주로 해소 · 🔴 **JSX 개행이 중문 문장 안에
 *     ASCII 공백을 만드는 것을 빌드 산출물로 실측**(«不限 次數» 등) → 중문 텍스트 런은 개행 없이
 *     한 줄로 잇는다. ⚠ **zh(간체)·ja 랜딩도 같은 증상 의심 — 소급 후보**(핸드오프 기록).
 *   · 산수: 결함 0(«唯一 리드»·«消失» 지적 2건은 zh 동일 문구가 검수장 전수 0 판정 — 기각).
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["價格", "免費——全部功能，不限次數"],
  ["安裝", "不需要——在瀏覽器裡執行（WebAssembly）"],
  ["帳號", "不需要（登入只用來同步訓練器紀錄）"],
  ["涵蓋範圍", "翻牌後、單挑（翻牌·轉牌·河牌）"],
  ["在哪裡計算", "在你自己的裝置上，不經過我們的伺服器"],
  ["相容性", "現代瀏覽器——Windows、macOS、Linux、手機"],
  // 🟢 이 열거는 앱 셀렉터(8개)와 1:1이다 — 번체가 자기 자리, 간체는 «另有»의 첫 항.
  ["語言", "繁體中文（另有簡體中文、韓語、英語、日語、西班牙語、葡萄牙語、德語）"],
  ["引擎", "開源 WASM Postflop（AGPL-3.0）· 修改後的原始碼已公開"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`로 보내지만 **zh-hant에는 그 도구 페이지가 없다.**
 *    zh-hant 블로그 글과 앱 내장 기능으로 보낸다(대상 실존 확인 완료).
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["把翻牌後的一個具體牌局算清楚", "本頁的解算器", null],
  ["知道每個位置該開哪些起手牌", "起手牌表", "/zh-hant/blog/holdem-starting-hands-chart"],
  ["數補牌、算底池賠率", "底池賠率指南", "/zh-hant/blog/holdem-pot-odds"],
  ["只想看一手牌的勝率", "勝率（Equity）指南", "/zh-hant/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-24 축어 실측 · ⑤=«執行解算器»). */
const STEPS = [
  { n: "①", title: "OOP 範圍", desc: "把不利位置（OOP）一方的翻前範圍塗進 13×13 表格，或者直接用記法輸入（22+、A2s+、KTo+）。對角線是口袋對，右上是同花組合（AKs），左下是不同花組合（AKo）。" },
  { n: "②", title: "IP 範圍", desc: "有位置一方照做一遍。最快的路不是從零畫兩個範圍：先載入一個教學案例，在它的範圍上改。" },
  { n: "③", title: "公共牌", desc: "點選三張翻牌，或者讓它隨機發一個翻牌。想研究特定的發牌走勢，也可以把轉牌和河牌一起定下來。" },
  { n: "④", title: "下注尺寸", desc: "設定起始底池、有效籌碼，以及每條街的下注和加注尺寸。第一次用就保持預設值，只確認底池和籌碼就行。" },
  { n: "⑤", title: "執行解算器", desc: "搭好決策樹就開算。計算在你自己的機器上跑，幾秒到幾分鐘——算完打開結果頁。" },
];

/**
 * 앱 「使用方法」이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **자리 이름은 앱 zh-hant 축어를 쓴다** — 앱 그룹 라벨이 «BB 跟注方»·«BTN 開池方»다.
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표 글이 아니다**(M-035 결함 3 = 귀속 오류 ·
 *    M-046 E-2에서 EN도 걸렸다. **두 출처를 갈라 적는다** — 아래 본문 문단 참조).
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP——BB（跟注方）", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP——BTN（開池方）", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다**(M-046 E-3 — pt·de·zh처럼 처음부터 다섯으로 쓴다).
 * 🪶 패널 이름은 전부 앱 zh-hant 축어다 — **動作列·13×13 表格·手牌/聽牌·詳情表**
 *    (간체의 动作条·矩阵과 다르다 · «灰格»도 앱 «灰掉的格子»에서 왔다).
 */
const READ_SCREEN: string[][] = [
  ["動作列（頂部）", "沿著這條線的節點移動（翻牌 → 下注 → 跟注 → 轉牌）", "按一個節點就跳到那個決策點的策略（教學案例只預先算到翻牌）"],
  ["13×13 表格（左側）", "一格一手牌；格子裡的顏色比例就是每個動作的頻率", "紅色下注或加注（越深表示下得越大），綠色過牌或跟注，灰格 = 不在範圍裡"],
  ["頻率（右上）", "以整個範圍為分母的動作頻率（%）和組合數", "在這裡讀出「Q♠J♦T♠ 上這個範圍 99.9% 過牌」這類結論"],
  ["手牌/聽牌（右中）", "範圍和牌面的關係——頂對、聽牌、什麼都沒中", "一眼看出這個牌面偏向哪一方"],
  ["詳情表（右下）", "每手牌的權重、勝率、EV 和勝率實現（EQR），以及各動作的佔比", "可以按欄排序，彙總可匯出 CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["翻牌·轉牌·河牌計算", "yes", "翻牌之後的完整決策樹"],
  ["翻牌前計算", "no", "開池範圍在起手牌表那篇文章裡"],
  ["下注·加注尺寸自由設定", "yes", "底池百分比、倍數、全下、幾何尺寸"],
  ["領打（donk bet）單獨設尺寸", "yes", "OOP 先下注的那條線可以單獨畫"],
  ["抽水和抽水封頂", "yes", "貼著你真實牌桌的條件來算"],
  ["逐節點編輯決策樹", "yes", "在某個節點上增刪動作"],
  ["精度和記憶體模式", "yes", "32 位元浮點 / 16 位元整數 · 瀏覽器上限約 4GB"],
  // 🟢 라벨은 앱 축어 «目標可剝削度»다(2026-08-24 실측 — 간체 랜딩의 «可剥削度»와 같은 계열).
  ["目標可剝削度（exploitability）", "yes", "越低越精確，也越慢"],
  ["儲存範圍和設定", "yes", "儲存、載入、匯入、匯出"],
  ["彙總匯出 CSV", "yes", "直接進試算表軟體"],
  ["牌局分享連結", "yes", "把同一個牌局傳給牌友"],
  ["打開算好的教學案例", "yes", "結果即點即看，不用等"],
  ["帶評分的 GTO 訓練器", "yes", "含弱點分析和「複習」機制"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVER 收費」라고 쓰지 마라** — 그쪽 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·주로 Windows**라는 사실뿐이다.
 */
const COMPARE: string[][] = [
  ["怎麼算", "在瀏覽器裡現場算", "查詢提前算好的答案", "安裝後在自己電腦上算"],
  ["安裝", "不需要", "不需要", "要裝，主要是 Windows"],
  ["涵蓋範圍", "翻牌後、單挑", "常常連翻牌前一起", "看版本"],
  ["範圍和決策樹可否修改", "自由", "只能在已發布的目錄裡選", "自由"],
  ["在哪裡算", "你的裝置上", "服務商那邊（提前算好）", "你的裝置上"],
];

/**
 * 학습 예제 — 앱의 **번체 라벨·해설을 축어로 옮기되**(2026-08-24 실측), 앱이 아직 틀린
 * 다섯 자리(①④⑦⑧⑩)는 **§4-B 정정본**으로 갈았다(파일 헤더의 폐기 명제 대조 참조).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL` · RP-08).
 * 🔴 **카드는 기억으로 적지 않는다** — 13개 보드는 라이브 화면에서 축어로 긁었다.
 * 🪶 «K 高帶 10»·«看著像»·문두 «可»는 **앱 zh-hant 축어 그대로다** — 네이티브 렌즈가 대륙식으로
 *    지적했으나 라벨·축어는 앱이 정본이라 유지 판정(2026-08-24). 산문(우리 문장)에서는 안 쓴다.
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설 13편이 **zh-hant에는 아직 0편**이기 때문이다.
 *    번체판을 발행하면 그 행에 채운다. **없는 링크를 미리 걸지 않는다.**
 */
const SPOT_GROUPS = [
  {
    label: "單加注底池——BTN vs BB（基礎）",
    cond: "OOP: BB 跟注方 · IP: BTN 開池方 · 底池 5.5bb · 籌碼量 97.5bb",
    items: [
      // 🔴 RP-20(M-053 등재)을 «신설 시점에» 회피 — 앱 ①은 «BB 과패 다음 BTN이 넓게 작은 벳»을
      //    말하는데 화면은 BB 첫 액션에서 멈춘다. 화면값(체크 98.2% — §4-B)으로.
      { board: "A♥7♦2♣", name: "乾燥的 A 高牌面", note: "範圍優勢的教科書——A 這張牌正好打中開池方的範圍，BB 在這裡 98.2% 過牌" },
      { board: "K♠8♦3♣", name: "乾燥的 K 高牌面", note: "和 A 高牌面比一比：K 高牌面同樣是 BTN 佔優，但過牌會稍微多一點。為什麼呢？" },
      // 🟢 앱 zh-hant 축어가 이미 정정본. 다만 «在 13 個案例裡»의 편 수 하드코딩만
      //    «這套案例裡»로 갈았다(RP-08 · zh와 같은 처방).
      { board: "Q♠J♦T♠", name: "百老匯連張雙色牌面", note: "看著像兩邊都打中的牌面。可 BB 的勝率實現在這套案例裡是最低的——77.9%，BTN 是 119.4%——BB 有 99.9% 都在過牌" },
      // 🔴🔴 RP-01 계열 + RP-02 정정 — 앱 zh-hant는 아직 «콜러 우위 + C벳 빈도 붕괴» 류다
      //    (8개 언어 전건 · 원문은 5langs 축어 문서 §6 — 주석 인용은 의역으로, M-047).
      //    §4-B ④: OOP(BB) 첫 액션 벳 **23.7%** · 에퀴티 48.5 대 51.5. 앱 문구로 되돌리지 마라.
      { board: "9♥8♥7♣", name: "中張連張雙色牌面", note: "單加注底池裡唯一一個 BB 真會主動領打的牌面：BB 有 23.7% 先下注（不過範圍優勢仍在 BTN——勝率 BB 48.5% 對 BTN 51.5%）" },
      { board: "Q♠9♠2♠", name: "單色牌面（3 張同花）", note: "看看大注為什麼消失了，只剩下小注和過牌——連已經成同花的牌都經常只過牌" },
      { board: "6♣6♦3♥", name: "對子牌面", note: "誰都不太容易打中的牌面，詐唬（bluff）的頻率就上去了。到詳情表裡找找看，是哪些手牌被當作詐唬來下注" },
      // 🔴 M-045 RP-19 정정 — 앱 zh-hant는 아직 «체크레이즈 빈도 단언 + 벳 뒤를 따라가라» 류다
      //    (빈도 단언 + 조작 지시 — 화면은 BB 첫 액션에서 멈춘다. 원문 인용은 의역으로, M-047).
      //    §4-B ⑦ = 체크 96.8 · 벳 3.2뿐. KO ⑦ 239줄: 체크레이즈 빈도는 그 화면에 없다.
      { board: "6♠5♥2♦", name: "低張彩虹牌面", note: "一場高張（overcard）之爭。研究過牌加注怎麼搭建的案例——畫面上 BB 的第一個動作是 96.8% 過牌、3.2% 下注" },
    ],
  },
  {
    label: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）",
    cond: "OOP: BB 3bet 方 · IP: BTN 跟注方 · 底池 22.5bb · 籌碼量 89bb",
    items: [
      // 🔴 M-038 RP-03 정정 — 앱 zh-hant는 아직 «SPR이 낮아서 작은 벳으로 압박» 류의 인과다
      //    (원문 인용은 의역으로 — M-047). 시리즈 ⑧이 그 인과를 폐기했다: SPR이 똑같이 4.0인
      //    ⑨는 큰 사이즈 98.4%, ⑩은 97.8%다. 사이즈를 정하는 것은 레인지의 모양이다.
      { board: "A♦K♠2♥", name: "3bet 方佔優的 A 高牌面", note: "對 3bet 範圍（一堆 AK、AA、KK）來說最好的翻牌。小注之所以能壓住對手整個範圍，靠的是這個範圍的形狀——不是因為 SPR 低" },
      // 🟢 앱 zh-hant 축어가 이미 정정본이다(98.4 · 0.8).
      //    🔴 100−99.1로 «빼서» 구하면 0.9가 나온다 — 개별 반올림값의 합은 100이 아니다(§4-B 주의).
      { board: "Q♥T♥7♠", name: "多變的雙色牌面", note: "雖然是 3bet 底池，但這個牌面對跟注方也不差。可 3bet 方並不會收手——98.4% 的範圍都用同一個 2/3 尺寸打出去，只有 0.8% 過牌" },
      // 🔴 RP-17 정정 — 앱 zh-hant는 «整個 빗나감» 류 **결함형이 잔존하는 3개 언어(ko·zh·zh-hant)
      //    중 하나**다(원문 인용은 의역으로 — M-047). 정본은 «완화»가 아니라 «수치»다 —
      //    KO ⑩ 표 실측 **탑 페어 0%**(8이 들어간 핸드가 3벳 레인지에 없다) + 거트샷 4.8% · 백도어 16.9%.
      { board: "8♦5♣2♠", name: "低張乾燥牌面", note: "3bet 範圍在這裡連一個頂對都翻不出來——只有卡順和後門聽牌——但超對和 A 高牌照樣在施壓" },
    ],
  },
  {
    label: "盲位對戰——SB vs BB（寬範圍）",
    cond: "OOP: SB 開池方 · IP: BB 跟注方 · 底池 6bb · 籌碼量 97bb",
    items: [
      // 🟢 앱 축어. RP-18 감시 조건(빈도 수치가 붙으면 폐기 명제) 미충족 — 수치를 붙이지 마라.
      { board: "K♥T♦6♠", name: "K 高帶 10 的牌面", note: "盲位對戰雙方範圍都寬，所以到了翻牌兩邊都比較弱。同樣是 K 高牌面，和 BTN vs BB 時的頻率比一比，差在哪裡" },
      { board: "7♦6♦5♣", name: "低張連張雙色牌面", note: "兩個寬範圍撞上一個連張性極強的牌面。兩對、順子、聽牌滿地都是——這是「手牌/聽牌」面板最熱鬧的一個局面" },
      // 🟢 앱 zh-hant 축어가 이미 정정본이다(88 대 66 · 80.1) — 明三條(trips) 용어도 코퍼스 정본과
      //    일치한다(`zh-hant/holdem-glossary` 暗三條/明三條 구분 · M-034 「코퍼스 정본 먼저」).
      { board: "A♠A♥6♦", name: "A 對子牌面", note: "牌面上擺著兩張 A 的特殊局面。明三條（trips）並不少見——SB 有 88 個組合，BB 只有 66 個，所以 SB 打出 80.1%。誰手裡的 A 更多，就是這個牌面的全部" },
    ],
  },
];

const SPOT_TOTAL = SPOT_GROUPS.reduce((n, g) => n + g.items.length, 0);

/* ── 공통 조각 ───────────────────────────────────────────────────────── */

function Cta({ label, variant = "solid" }: { label: string; variant?: "solid" | "outline" }) {
  const base = "inline-block rounded-xl px-8 py-3 font-bold transition-opacity";
  return (
    <a
      href={SOLVER_URL}
      target="_blank"
      rel="noopener"
      className={
        variant === "solid"
          ? `${base} bg-primary text-lg text-primary-foreground hover:opacity-90`
          : `${base} border border-primary text-primary hover:bg-primary hover:text-primary-foreground`
      }
    >
      {label}
    </a>
  );
}

/** 표는 전부 가로 스크롤 컨테이너에 넣는다 — 모바일에서 페이지 자체가 밀리지 않게. */
function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full min-w-[34rem] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            {head.map((h) => (
              <th key={h} className="py-2 pr-4 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-border/50 align-top">
              {r.map((c, j) => (
                <td key={j} className={j === 0 ? "py-2 pr-4 font-medium" : "py-2 pr-4 text-muted-foreground"}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function SolverClientZhHant() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      {/*
        🔴 중문 텍스트 런은 **개행 없이 한 줄로** 둔다 — JSX가 텍스트 런 안의 개행을 공백 1개로
           치환해 «不限 次數»처럼 문장 한가운데 틈을 만든다(2026-08-24 빌드 산출물 실측).
           이 파일 전체가 같은 규칙이다. 줄이 길어도 자르지 마라.
      */}
      <section className="mt-6">
        {/*
          ★H1은 라틴 조준축(`GTO Poker Solver` — gto poker와 poker solver를 한 문자열이 덮는다)과
            **`德州撲克 GTO` 연속 문자열**(TW 140의 정면 쿼리 — SEO 렌즈 반영 2026-08-24)을 함께
            싣는다. «解算器»는 앱 번체 축어(간체 求解器와 다르다).
          🔴 `GTO`도 `Solver`도 단독으로 두지 않는다 — 자동차·아니메 / 수학 솔버 오염(뱅크 §1).
        */}
        <h1 className="text-center text-2xl font-bold">
          免費 GTO Poker Solver——打開瀏覽器就能算的德州撲克 GTO 解算器
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
            첫 문장에 정의 + 구체 수치, 앞 문단 의존 없이 자기완결.
        */}
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">Poker Solver（撲克解算器）</strong>是把一個具體牌局的均衡策略算出來的程式：你輸入雙方的範圍、公共牌和下注尺寸，它告訴你<strong className="text-foreground">169 種起手牌</strong>各自該用多少頻率下注、過牌或棄牌——全部擺在一張 13×13 表格裡。HoldemMaster 的這個解算器<strong className="text-foreground">直接在你的瀏覽器裡算——免下載、免註冊、不限次數</strong>。表格旁邊還有每手牌的勝率、EV 和勝率實現（EQR）。涵蓋範圍：翻牌後、單挑。
        </p>
        <div className="mt-5 text-center">
          <Cta label="打開解算器 →" />
          <p className="mt-2 text-xs text-muted-foreground">
            最好用電腦上的 Chrome——iOS 和 Safari 裡解算器只能用單一執行緒計算，自己搭的牌局會算得慢一些
          </p>
        </div>
        <Table head={["", "詳情"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 — 🪶 H2는 명사형(번체 검색 관습 보고서 §6-2 — 질문은 FAQ에 격리) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Poker Solver（撲克解算器）——和現成範圍表的差別</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          解算器從零開始計算<strong className="text-foreground">GTO（Game Theory Optimal，賽局理論最佳解）策略</strong>。你給它範圍、公共牌、籌碼量和下注尺寸的決策樹，它就朝著均衡點一輪一輪疊代，直到 169 種手牌各自的下注、過牌、棄牌頻率全部定下來。這正是它和範圍表的分界線：表存的是別人提前算好的答案，解算器<strong className="text-foreground">算的是你眼前這一手</strong>。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          公共牌換掉一張，答案就跟著變——它不是背下來的，是重新算的。
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(뱅크 §0·§7):
          gto poker 210~390 · poker solver 20~30 · gto solver 30 · 解算器(앱 축어) · 求解器(TW 70 —
          수학 혼재라 여기서만 병기 흡수) · **德州撲克 GTO 연속 문자열**(TW 140 — SEO 렌즈 반영).
          검색어형은 이 문단에만 축어로 놓는다(플레이북 §4-5).
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          同一樣東西有好幾個叫法：<strong className="text-foreground">poker solver</strong>、<strong className="text-foreground">GTO solver</strong>、GTO 解算器、求解器，或者乾脆叫德州撲克 GTO 軟體。它算出來的東西常被叫作 GTO 範圍。不管你用哪個詞搜過來——本頁這個工具算的就是它。
        </p>
        <Table
          head={["你想要什麼", "去哪裡"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        {/* 🟢 내장 탭 문단 — 라벨은 앱 네비 축어(«翻前範圍表 開池·防守» · «勝率計算器 Equity»).
            `德州撲克勝率計算器`(TW 260)의 연속 문자열은 FAQ 문항이 갖고, 여기는 기능 사실만 —
            «對手可以是手牌或整個範圍»는 앱 勝率計算器 탭 축어(vs 手牌/vs 範圍)에서 왔다(뱅크 §7-3). */}
        <p className="mt-4 text-sm text-muted-foreground">
          應用程式裡還內建了兩個順手的分頁——翻前範圍表（開池·防守）和勝率計算器（Equity）。後者把你的手牌對上對手的手牌或整個範圍，直接算出勝率——搭牌局的時候直接查，不用切出去。
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          如果你真正想知道的是 GTO 這個概念本身：完整定義和常見誤解在{" "}
          <Link href="/zh-hant/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            德撲術語表
          </Link>{" "}
          和{" "}
          <Link href="/zh-hant/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            德州撲克策略指南
          </Link>
          裡。
        </p>
      </section>

      {/*
        ── ★랜딩의 핵심 절: 「범위의 플랍 이후」 본진 ──────────────────────
        `德州撲克範圍`(TW 70)의 연속 문자열을 H2가 갖는다. 짧은 «怎麼~?» 훅은 번체 검색 관습이
        허용하는 형태다(보고서 §1 — 德州撲克怎麼玩·大小怎麼看과 동형).
        🔴 프리플랍 표는 `zh-hant/holdem-starting-hands-chart`의 것이다. **가져오지 않고 넘긴다.**
        🔴 수치는 전부 §4-B 확정표에서만 가져왔다(③ 0.1% · ④ 23.7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">德州撲克範圍怎麼用到翻牌後？</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          先接受一個事實：翻前範圍是穩定的，翻牌後的範圍不是。<strong className="text-foreground">翻前範圍裝得進一張表</strong>——你在按鈕位每次開池的範圍都差不多。但三張公共牌一攤開，同一個範圍立刻散成成牌、聽牌和空氣，接下來怎麼打，完全取決於牌面的質地。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          本頁的兩個案例比任何解釋都直觀。兩個局面裡 BB 都是跟注按鈕位的加注、翻牌先行動——同一個位置、同一個範圍、同一個底池：
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            在 <strong className="text-foreground">Q♠J♦T♠</strong> 上，BB 先下注的頻率只有{" "}
            <span className="font-semibold text-orange-500">0.1%</span>——幾乎從不主動出手。
          </li>
          <li>
            在 <strong className="text-foreground">9♥8♥7♣</strong> 上，BB 先下注的頻率是{" "}
            <span className="font-semibold text-emerald-500">23.7%</span>。
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          兩個牌面都是連張、雙色，看起來像親兄弟，正確打法卻毫不相干。<strong className="text-foreground">沒有任何一張翻前表裝得下這個差別</strong>——表是在翻牌出現之前寫好的。這正是解算器要做的事：它給你的是「之後」的範圍，不是「之前」的。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          還在搭「之前」的範圍？先從{" "}
          <Link href="/zh-hant/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>{" "}
          開始——那裡按位置列好了開池範圍。要把一手牌放進對手的範圍裡去想，
          <Link href="/zh-hant/blog/holdem-reading-the-board" className="font-semibold text-primary hover:underline">
            牌面判讀
          </Link>
          是中間那一步。
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">這個德州撲克解算器怎麼用？——5 步</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          第一次面對解算器的話：<strong className="text-foreground">先別設定任何東西，先打開一個教學案例。</strong>那些都算好了——你先學會讀輸出，再去跟輸入較勁。自己搭牌局時，沿著側邊欄的分頁從上往下走。
        </p>
        <ol className="mt-4 space-y-4">
          {STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
                {s.n}
              </span>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-muted-foreground">
          自己搭的牌局裡，籌碼就是任意整數。想按大盲思考的話，用<strong className="text-foreground">10 籌碼 = 1bb</strong>（底池 55 就是 5.5bb）。教學案例和訓練器已經在用這個換算。
        </p>
        {/* 🔴 두 출처를 가른다(M-046 E-2 처방) — 포지션별 오픈 레인지는 chart의 것, 아래 표는
            학습 스팟이 쓰는 것. es·en·ja·de·zh와 같은 형태다. */}
        <p className="mt-4 text-sm text-muted-foreground">
          兩個範圍都從零畫是最慢的路。各位置的開池範圍在{" "}
          <Link href="/zh-hant/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>
          裡。下面這兩個範圍是另一回事：<strong className="text-foreground">單加注底池的教學案例正在用的那兩個</strong>（BTN vs BB），複製後直接貼進 ① 和 ② 就能用。
        </p>
        <Table head={["貼到", "範圍"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">結果畫面怎麼讀？</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다(M-046 E-3).
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          結果頁有五個工作區：頂部的<strong className="text-foreground">動作列</strong>、左側的<strong className="text-foreground">13×13 表格</strong>，以及右側的<strong className="text-foreground">頻率、手牌/聽牌面板和詳情表</strong>。記一條經驗法則：左邊讀「一手牌怎麼打」，右邊讀「整個範圍怎麼打」——只有右下的詳情表再把它拆回逐手牌。
        </p>
        <Table head={["在哪", "寫著什麼", "怎麼讀"]} rows={READ_SCREEN} />
        {/* 🪶 «兌現» = 코퍼스 정본 표현이다(`zh-hant/holdem-equity` seoTitle «勝率不等於你贏走的» ·
            태그 «勝率兌現»). «份額»는 앱 勝率計算器 탭 축어와 같은 값이라 유지(네이티브 렌즈 기각). */}
        <p className="mt-4 text-sm text-muted-foreground">
          勝率實現（EQR）跌破 100% 的時候值得多看一眼：你手裡的勝率沒有全部兌現成底池份額。原因每個局面都不一樣——位置、主動權、誰的範圍頂端更厚。<strong className="text-foreground">解算器不是告訴你「該怎麼打」，而是讓你看見「頻率為什麼長成這樣」</strong>，而這個「為什麼」在 EQR 裡最清楚。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          這些詞還很陌生的話：先讀{" "}
          <Link href="/zh-hant/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            勝率（Equity）指南
          </Link>{" "}
          和{" "}
          <Link href="/zh-hant/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            持續下注（c-bet）指南
          </Link>
          ，把解算器度量的那些概念先備好。
        </p>
      </section>

      {/* ── 무료 범위 (기능표) — 🪶 명사형 H2(«…嗎?» 의문형은 FAQ로 격리 · SEO 렌즈 반영) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">免費能用到哪一步——全部功能、不限次數</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          真的全部免費——而且沒有那些常見的小字條款：不用留付款資訊、沒有鎖起來的功能、沒有每天的計算上限、不用註冊。連通常只在付費桌面解算器裡才有的設定——<strong className="text-foreground">抽水和抽水封頂、精度模式、逐節點編輯決策樹</strong>——也都在。唯一真正的邊界是：這個工具只管<strong className="text-foreground">翻牌之後的單挑局面</strong>。
        </p>
        <Table
          head={["功能", "包含", "備註"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">有</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">無</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="免費試一把 →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 (카니발 방지의 본체) — 🪶 명사형 H2(관습 보고서) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">只算翻牌、轉牌、河牌——涵蓋範圍的邊界</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          這是一個<strong className="text-foreground">翻牌後（postflop）解算器</strong>：從翻牌攤開的那一刻起，替雙方一路往下算。不做翻牌前是有意的——翻前是另一類問題，開池範圍穩定到裝得進一張表，而翻牌之後的打法每換一個牌面就要重寫一遍。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          在這條邊界之內什麼都不缺：<strong className="text-foreground">雙方的範圍</strong>、任何翻牌·轉牌·河牌、起始底池和有效籌碼，以及每條街完整的尺寸樹。算出來的不是一份通用答案，而是你那張牌桌的答案——連大部分教材都不提的抽水也算進去。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          缺翻牌前那一塊的話：{" "}
          <Link href="/zh-hant/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>
          按位置整理了開池範圍。兩塊拼起來，一手牌就從頭到尾都有了答案：表決定你帶什麼進場，解算器決定翻牌之後的事。
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        {/* 🪶 `gto trainer`(10) 흡수 자리. 앱 제품명(GTO 訓練器) 그대로 + 練習 표현을 본문에 얹는다. */}
        <h2 className="text-xl font-bold">GTO 訓練器——給每個決定評分的德州撲克練習工具</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO 訓練器就在同一個工具裡，不用另外註冊。它把算好的牌局變成練習題：在一個真實的決策點發給你一手牌，你選一個動作，它給一個分。如果你想找的是免費的德州撲克練習軟體，又不想背固定打法、只想練<strong className="text-foreground">決定</strong>——從這裡開始。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          分數不是「對」或「錯」，而是<strong className="text-foreground">你這個選擇虧掉了多少期望值（EV）</strong>。GTO 本來就混合動作，選了較少見的那個不自動算失誤——問題只在它虧了多少 EV。選完之後，每個動作的頻率和 EV 會跟你自己那個選擇的成本擺在一起。
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨다. 되돌리지 마라.
            🟢 zh-hant 앱 특징 4칸도 이미 «按佔底池的 EV 損失評分»이라 화면과 아래 문장이 일치한다
               (2026-08-24 실측 · 使用方法 «判定標準» 절의 0.35%/1%·0.02/0.06·0.08/0.23·하한
               0.02/0.05·目標可剝削度 0.5%와도 일치).
            🪶 화면 CTA «它會告訴你每個選擇虧了多少 bb»는 오류가 아니다 — 표시 «값»은 bb이고
               «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
            🔴 RP-06: 예시는 **0.08bb**로 든다(0.05bb는 두 구간을 못 건넌다 — 0.05÷5.5 = 0.91%).
          */}
          <li className="text-muted-foreground">
            及格線按<strong className="text-foreground">佔底池的比例</strong>來算——
            <span className="font-semibold text-emerald-500">0.35% 以內</span>是頂級操作 ·{" "}
            <span className="font-semibold text-blue-500">1% 以內</span>可以接受 ·{" "}
            <span className="font-semibold text-orange-500">超過 1%</span> 值得回頭復盤
          </li>
          <li className="text-muted-foreground">
            同樣是 0.08bb，在 5.5bb 的底池裡是 1.45%（要復盤），在 22.5bb 的底池裡只有 0.36%（可接受）。換算成 bb：單加注底池的兩條線在 0.02bb 和 0.06bb，3bet 底池在 0.08bb 和 0.23bb。另有 0.02bb 和 0.05bb 的下限，防止把微小差值當成失誤
          </li>
          <li className="text-muted-foreground">
            題目出自每個牌局的多個決策點，組合數<strong className="text-foreground">上萬</strong>（目標可剝削度 0.5%）。也可以專練一類局面：單加注底池、3bet 底池或盲位對戰
          </li>
          <li className="text-muted-foreground">
            發牌按 <strong className="text-foreground">GTO 範圍裡的真實權重</strong>來——一手牌出現的頻率，就是你在那個局面裡真會拿到它的頻率
          </li>
          <li className="text-muted-foreground">
            連勝紀錄、弱點分析和<strong className="text-foreground">「複習」機制</strong>（把你虧 EV 最多的題排回來）都建立在做題紀錄上。不登入的話，紀錄只留在你的裝置裡
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="打開 GTO 訓練器 →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 축어 8 + §4-B 정정 5) ─────────────────────── */}
      <section className="mt-12">
        {/* 🟢 `德州撲克教學`(TW 480 · HK 50~70 상승 축)의 연속 문자열을 H2가 갖는다
            («德州撲克教學案例»가 그 결합을 포함한다 — «教學案例»는 앱 네비 축어). */}
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} 個已經算好的德州撲克教學案例
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          下面的牌局全部提前算完——點開的那一刻策略就擺在眼前，不用等、不用設定。範圍取的是 100bb 線上標準局的近似；學得最快的方式是載入一個案例、改改範圍、重新算一遍，看什麼變了。要理解牌面質地怎麼改寫策略，沒有比這更快的路。
        </p>
        {SPOT_GROUPS.map((g) => (
          <div key={g.label} className="mt-5">
            <p className="text-sm font-semibold">{g.label}</p>
            <p className="text-xs text-muted-foreground">{g.cond}</p>
            <ul className="mt-2 space-y-1.5">
              {g.items.map((s) => {
                const item = s as { board: string; name: string; note: string; slug?: string };
                return (
                  <li key={item.board} className="text-sm">
                    <span className="font-semibold">{item.board}</span>
                    <span className="mx-1.5 text-muted-foreground">·</span>
                    {item.slug ? (
                      <Link
                        href={`/zh-hant/blog/${item.slug}`}
                        className="font-semibold text-primary hover:underline"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="font-medium">{item.name}</span>
                    )}{" "}
                    <span className="text-muted-foreground">—— {item.note}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </section>

      {/* ── 외부 도구 비교 — 🪶 명사형 H2 + 解算器 앵커(SEO 렌즈 반영) ── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색: `gto wizard` TW 4,400 · HK 1,300~1,600 · `piosolver` TW 110.
           직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">和 GTO Wizard、PioSOLVER、TexasSolver 這些解算器的差別</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          它們都可以叫 GTO solver 或 poker solver，差別在<strong className="text-foreground">「在哪算、什麼時候算」</strong>。GTO Wizard 這類解決方案庫是查詢式的：翻的是提前算好的目錄，速度快，常常連翻牌前一起涵蓋。PioSOLVER、TexasSolver 這類桌面解算器要下載安裝，用你自己的電腦算。本頁的工具<strong className="text-foreground">在瀏覽器裡現場算——你問的那一刻才開始算</strong>，範圍和決策樹隨便改，而且什麼都不用裝。
        </p>
        <Table
          head={["", "HoldemMaster 解算器", "解決方案庫", "桌面解算器"]}
          rows={COMPARE}
        />
        {/*
          🔴 «남의 무료 티어 수치»를 적지 않는다. 대신 SERP 실측으로 확인된 **구조**를 적는다:
             `poker solver`·`gto solver` top-10의 무료 접근이 전부 «구독/일일 개수/크레딧/다운로드»
             중 하나로 제한되고, 중화권 무료 축은 설치형 오픈소스(TexasSolver·知乎/CSDN)로
             흘러간다 — 2026-08-24 실측(뱅크 §3 · 번체 페이지가 같은 SERP에 랭크).
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          搜「免費 poker solver」最後往往落進論壇貼文和開源專案——而免費的選項幾乎都帶一個條件：不是訂閱後只開放部分目錄、每天限定次數，就是點開一條線就扣點數，再不然就得下載安裝。這裡沒有那個條件——<strong className="text-foreground">不用註冊、沒有每日上限、沒有點數</strong>。所以復盤手牌的時候，把這頁開在旁邊就行。
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지**와 GitHub 저장소 제목
             "[Development suspended]"다. 우리 앱의 AGPL 고지 축어(«本應用程式基於 WASM Postflop …»)
             와 일치한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          給從 <strong className="text-foreground">WASM Postflop</strong> 找過來的人順帶說一句：開源原版的頁面自己寫明已停止開發，儲存庫也標記為停更。這個解算器是把那顆引擎接著開下去的分支——同樣的 AGPL-3.0 授權、同樣公開的原始碼，再加上新介面、教學案例和訓練器。
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) — 🪶 명사형 H2(SEO 렌즈 반영) ───────── */}
      {/*
        근거: 앱이 이미 PWA이고 버튼 축어가 «♠ 加入主畫面»다(간체 添加到主屏幕와 다름 — 실측).
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록을 준비 중이라 출시되는 순간 거짓이 된다.
           「설치가 «필요 없고», 원하면 담을 수도 있다」로 쓴다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람과 트레이너뿐이다.
        🪶 «沒網路也能接著練»는 앱 PWA 안내 축어와 같은 표현이다(斷網은 대륙식 — 네이티브 렌즈).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">手機與離線使用——按「加入主畫面」就行</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          手機瀏覽器打開就是完整版，什麼都不用裝。不過<strong className="text-foreground">想要的話，可以按「加入主畫面」</strong>把它放到桌面，它就會像一個 App：自己的圖示、全螢幕、沒有網址列。那只是瀏覽器捷徑，不是程式——從不跳系統權限。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          加入之後，教學案例和 GTO 訓練器都存在裝置裡，<strong className="text-foreground">沒網路也能接著練</strong>——捷運或地鐵上、飛機上、流量不夠用的時候都一樣。重要的邊界：要從零算一個自己的牌局，計算引擎得先被載入過一次。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          iPhone 和 Safari 裡，瀏覽器限制讓解算器只能用單一執行緒計算，大牌局會慢一些——電腦上更順。加入的入口：Chrome 和 Edge 在網址列的安裝圖示，iPhone 在分享選單裡的「加入主畫面」。
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ zh-hant엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">延伸閱讀</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/zh-hant/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              起手牌表
            </Link>{" "}
            ——這個工具只管翻牌之後。<strong>帶什麼牌進場</strong>看那篇；① 和 ② 裡貼的範圍來自教學案例
          </li>
          <li>
            <Link href="/zh-hant/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              底池賠率
            </Link>{" "}
            ——只需要一個數字、不想開解算器的時候：數補牌、算所需勝率
          </li>
          <li>
            <Link href="/zh-hant/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              勝率（Equity）
            </Link>{" "}
            ——解算器的輸出幾乎全部從勝率推出來。先讀它，結果頁就看得懂
          </li>
          <li>
            <Link href="/zh-hant/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              位置打法
            </Link>{" "}
            ——EQR 跟著位置大幅移動。解算器量化的正是那篇講的東西
          </li>
          <li>
            <Link href="/zh-hant/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              3bet 指南
            </Link>{" "}
            ——教學案例裡專門有一組 3bet 底池。那篇講的是牌局怎麼走到那個翻牌的
          </li>
          <li>
            <Link href="/zh-hant/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              德州撲克策略指南
            </Link>{" "}
            ——解算器用數字表達的那些概念的總地圖，包括 GTO 的定義
          </li>
        </ul>
      </section>

      {/* ── FAQ — 常見問題 블록(번체 관습: 질문은 여기 격리) ─────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">常見問題 FAQ</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_ZH_HANT.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="打開免費的 Poker Solver →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면의 축어와 같은 사실이다. **훅으로 키우지 않는다**(2026-08-22 판정:
           앱스토어 등록 준비 중이라 오픈소스를 마케팅 축으로 세우지 않는다).
        🪶 렌더되는 자리가 넷이다: SPEC 표 `引擎` 행 · WASM Postflop 문단 · TexasSolver 비교
           FAQ · 이 꼬리 고지. **제목·H1·H2에 없다는 것이 지켜야 할 선**이다.
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        本應用程式基於 Wataru Inariba 的 WASM Postflop（AGPL-3.0），由 HoldemMaster 在地化並改進。修改後的完整原始碼以同樣的授權條款公開。
      </p>
    </div>
  );
}
