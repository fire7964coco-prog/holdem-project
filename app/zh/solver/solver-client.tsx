"use client";

import Link from "next/link";
import { SOLVER_FAQ_ZH } from "./faq";

/**
 * ★CTA는 `?lang=zh`로 보낸다. 솔버가 이 파라미터를 읽어 로케일을 기억한다.
 *   **2026-08-24 라이브 확인** — `?lang=zh`로 열면 `<html lang="zh-Hans">`가 되고 화면 전체가
 *   간체 중국어로 뜬다(Playwright DOM 실측). 다른 랜딩과 같이 **UTM은 붙이지 않는다**.
 *   ⚠ `curl`로는 확인할 수 없다 — SSR 초기 HTML이 한국어이고 타이틀은 JS 실행 후 바뀐다.
 */
const SOLVER_URL = "https://solver.holdemmaster.com/?lang=zh";

/**
 * ═══════════════════════════════════════════════════════════════════════════
 * `/zh/solver` 랜딩 — ★2026-08-24 신설 (7번째: ko·en·ja·es·pt·de·zh)
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * ▶ 하는 일: 솔버 본체(solver.holdemmaster.com)는 **noindex**다. 검색 노출은 이 랜딩이 받아
 *   본체로 흘려보낸다 — **중국어권에 그 진입로가 0개였다.** 대상은 «구글 도달 간체권» =
 *   **싱가포르·말레이시아(+홍콩 혼용)**다. 본토 China는 구글 차단이라 대상이 아니다.
 *
 * ▶ 키워드 근거 (2026-08-24 실측 · 라쿠 requestId SG 1255796 · MY 1255797 · HK 1255800 +
 *   DataForSEO 교차검증. 판정 전체는 `docs/keyword-bank/zh-gto-solver.md`)
 *     🔴🔴 **zh 솔버 축은 «라틴 문자열»이 지배한다** — ja(ソルバー=죽은 표기)와 정반대다.
 *     **`gto poker`/`poker gto` SG 170 · MY 210 · HK 390**(최대 일반형) ·
 *     **`poker solver` 40/20/30** · **`gto solver` 30** · `solver poker` 10~20(어순은
 *     `poker solver`가 정본 — de와 같고 pt와 반대) · `gto trainer` 10.
 *     중국어 문자열은 **전부 ≤10**(`德州扑克 gto`·`求解器`·`gto是什么`·`德州扑克软件`·
 *     `德州扑克范围`…). 🪶 「볼륨 ≤10 = 수요 0」이 아니다 — 知乎·CSDN·中扑网의 솔버 콘텐츠가
 *     수요의 실재를 보여준다(de `kostenlos` null과 같은 유형). H2·FAQ가 흡수한다.
 *   🟢 **두 벤더 볼륨 일치**: SG 10/10 · HK 근사 일치 — es 6/6 · pt 5/5 · de 8/8에 이은 검증.
 *   🔴 **라쿠 Taiwan은 죽은 소스다**(2023-03 이후 월별 0 — DFS는 `gto wizard` 4,400).
 *      대만 값은 DataForSEO로만 — **zh-hant 회차가 그대로 물려받을 함정이다**(뱅크 §1-④).
 *
 * ▶ SERP 실측으로 잡은 «이길 자리» (2026-08-24 · DataForSEO SERP API · SG)
 *   ① 🟢🟢 **`poker solver`·`gto solver` top-10에 «지금 바로 돌아가는» 무료 브라우저 솔버가
 *      0개다.** Reddit(1위·「Completely Free GTO Trainer/Solver」 2위) · gtowizard(구독) ·
 *      앱스토어 ×2 · solvers.poker(리뷰) · deepsolver(구독) — 5개 언어 연속 같은 빈자리.
 *   ② 🟢 **`德州扑克 gto` SERP는 «개념글 + 앱»뿐이다** — 知乎 ×2 · Reddit 중문 스레드 ·
 *      vocus.cc·happypoker.tw(번체가 간체 SERP에 그대로 랭크) · NTPoker(Play 앱) ·
 *      freebetrange(중문 번전 도구). **「지금 바로 돌려 보는」 중문 페이지가 0** — 개념은
 *      知乎가, 도구는 영어 앱이 갖고 있고 둘을 잇는 자리가 비어 있다.
 *   ③ 중화권 무료 축의 실질 경쟁자 = **TexasSolver**(중국산 오픈소스 · 知乎/CSDN/中扑网) —
 *      단 **설치형**이다. Desktop Postflop(같은 원저자)도 설치형.
 *      → **훅 = «免费 + 打开浏览器就能用 + 无需注册»** — 설치형 무료와 구독 웹 사이의 빈자리.
 *
 * 🔴🔴 **오염어 둘 — 앵커 필수** (뱅크 §1-①·②):
 *   · `GTO` 단독 = 페라리 250/288/599 GTO · 미쓰비시 GTO · 폰티악 GTO · 『GTO(그레이트 티처
 *     오니즈카)』 아니메/드라마(ja 함정의 간체판). → 제목·H1·H2에서 반드시 扑克/poker와 결합.
 *   · `solver` 단독 = **수학 솔버**(`math solver` 49,500 · wordle·数独·魔方 — pt·de의 엑셀과
 *     오염 «내용»이 다르다). → «Poker Solver»/«求解器+扑克 문맥»으로만.
 *   ja→es→pt→de→zh 다섯 번 연속: **물려받는 것은 규율이지 오염어가 아니다.**
 *
 * 🔴🔴 카니발 방지 — **zh 43편 전수 grep**(뱅크 §4):
 *   · `app/zh/`에 있는 것은 `blog`·`tournaments`·`page.tsx`다. `/zh/hand-chart`·`/zh/calculator`는
 *     **없다** → 도구 링크는 전부 zh 블로그 글이고 대상 9종 전건 `lib/posts-zh/<slug>.ts` 실존 확인.
 *   · **프리플랍 표 = `zh/holdem-starting-hands-chart` 소유**(태그 «GTO翻前图» + desc
 *     «GTO对新手图的取舍»). 프리플랍 차트 축 제목·H2 금지 — **첫 내부링크**로 넘긴다.
 *   · **«德州扑克策略» = `zh/holdem-strategy` 소유**(seoTitle+태그). 🪶 그 글의 GTO 언급은
 *     2회(참조점 설명)이고 **태그에 GTO가 없다** — ja·de «명목 태그»보다도 얇다.
 *     **GTO 도구 축은 완전 무주공산** → 랜딩이 가져간다.
 *   · 승률·확률 «개념» = `zh/holdem-equity`(«扑克胜率计算器» 태그)·`zh/holdem-probability` 소유.
 *     랜딩은 도구 축만 — 앱 내 胜率计算器 언급으로만.
 * ❌ **`德州扑克在线`(110)·`德州扑克游戏`(30)·`德州扑克app`(70)을 조준하지 마라** — 게임
 *   플레이 의도다. FAQ가 «게임이 아니라 계산 도구»로 갈라 준다.
 * ❌ **RTA·봇 축 금지** — 부정행위 도구 검색. FAQ 방어 문항 참조.
 *
 * 🔴 사실 출처 — 전부 2026-08-24에 `?lang=zh`로 열어 DOM에서 직접 읽었다
 *   (13스팟 축어 = `docs/solver-app-verbatim-5langs-2026-08-24.md` §5):
 *   · 언어 셀렉터 **8개** · 히어로 «GTO 策略，打开浏览器就能算。» / «不用装软件，也不用花钱。»
 *   · 특징 4칸 «免费 / 全部功能，不限次数» · «离线学习» · «算得快 / 多线程——接近桌面版求解器
 *     的速度» · «GTO 训练器 / 做题，按占底池的 EV 损失打分» 🟢 팟 대비 정정본
 *   · 네비 «教学案例 ⚡ 立刻看» «GTO 训练器 EV 评分» «翻前范围表 开池·防守» «胜率计算器 Equity»
 *   · 사이드바 «① OOP 范围 ② IP 范围 ③ 公共牌 ④ 下注尺寸 ⑤ 运行求解器»
 *   · PWA 버튼 «♠ 添加到主屏幕» · 결과 패널 이름 «“手牌/听牌”面板» · 상단 «顶部动作条»
 *   · 그룹 라벨 «单加注底池——BTN vs BB（基础）» «3bet 底池——BB 3bet、BTN 跟注（低 SPR）»
 *     «盲位对战——SB vs BB（宽范围）» · 조건 «底池 5.5bb · 筹码量 97.5bb» 등
 *   · 🔴 **zh 앱은 소수 구분자가 «마침표»다**(77.9% · 5.5bb — de 쉼표와 다르다).
 *   §13 산수 검산(여섯 랜딩과 동일 · 재검산 완료):
 *     SRP 팟 5.5 = 2.5+2.5+0.5, 스택 100−2.5 = 97.5 ·
 *     3벳팟 22.5 = 11+11+0.5, 100−11 = 89 ·
 *     블라인드전 6 = 3+3, 100−3 = 97 ·
 *     5.5×0.35% = 0.019 ≈ 0.02bb, 5.5×1% = 0.055 ≈ 0.06bb ·
 *     22.5×0.35% = 0.079 ≈ 0.08bb, 22.5×1% = 0.225 ≈ 0.23bb ·
 *     0.08÷5.5 = 1.45% · 0.08÷22.5 = 0.36%
 *
 * 🔴🔴 **앱 화면 문구를 «해설»로 쓰지 마라.** 판정 기준은 `docs/gto-solver-series-spec.md` §4-B다.
 *   zh 앱 실측(2026-08-24 · 폐기 명제 목록 19행 전건 대조):
 *   🟢 ③⑨⑬은 이미 정정본(77.9/119.4·99.9 / 98.4·0.8 / 88 대 66·80.1) — 그대로 옮겨도 된다.
 *      ⚠ 단 ③의 «在 13 个案例里»는 편 수 하드코딩이라 «这套案例里»로 갈았다(RP-08).
 *   🔴 **다섯 자리는 앱 문구를 그대로 못 쓴다 — 랜딩은 §4-B 정정본을 쓴다**
 *     (§4-B 위반 넷 ④⑦⑧⑩ + 화면 밖 주장 ① — de는 ⑩이 완화형 통과라 «넷»이었다.
 *      zh는 ⑩ 결함형이 잔존해 다섯이다. 머릿수를 de에서 물려받지 마라).
 *   ⚠ 아래에 앱의 폐기 문구 원문을 적지 않는다(M-047 — 주석 인용이 회귀 앵커를 재도입한다).
 *     축어는 `docs/solver-app-verbatim-5langs-2026-08-24.md` §5에 있다:
 *     · ④ = **RP-01 계열 + RP-02** — «콜러 우위 보드 + C벳 빈도 붕괴» 류
 *       (콜러 우위는 폐기 명제 · C벳 빈도는 화면에 없다). 8개 언어 전건.
 *     · ⑦ = **RP-19 + 조작 지시** — «체크레이즈 빈도가 높아진다 + 벳 뒤를 따라가 보라» 류
 *       (화면은 BB 첫 액션에서 멈춘다 · KO ⑦ 239줄 정본).
 *     · ⑧ = **RP-03** — «SPR이 낮아서 작은 벳» 류
 *       (사이즈를 정하는 것은 스택 깊이가 아니라 레인지의 모양 — ⑨ 98.4% 반례).
 *     · ⑩ = **RP-17 결함형** — «통째로 빗나감» 류 절대형(ko·zh·zh-hant 3언어 잔존).
 *       정본은 수치다: KO ⑩ 표 실측 **탑 페어 0%** + 거트샷 4.8% · 백도어 16.9% · 없음 78.3%.
 *     · ① = M-046 P-2 유형 — «BB 체크 다음 BTN이 넓게 친다» 류
 *       (체크 «다음»은 화면이 안 준다) → 화면값(체크 98.2%)으로 교체.
 *   🟢 ⑪은 빈도 수치 없음(RP-18 조건 미충족 ✅) — **수치를 붙이지 마라.**
 *
 * 🔴 **「오프라인으로 GTO 계산 가능」이라고 쓰지 마라 — 사실과 다르다.**
 *   오프라인에서 되는 것은 학습 스팟 열람과 트레이너 풀이뿐이고, 커스텀 스팟 직접 계산은
 *   계산 엔진을 한 번 내려받은 뒤에만 돈다(여섯 랜딩 주석과 같은 경고).
 *
 * 🪶 **학습 스팟에 블로그 링크가 하나도 없다 — 이것이 정상이다.**
 *   GTO 시리즈 13편은 **ko·en에만 있고 zh에는 0편**이다(`lib/posts-zh/`에 해당 slug 0건).
 *   **없는 링크를 미리 걸지 마라 — 404는 색인에 남는다.** zh판이 발행되면 그때 `slug`를 채운다.
 */

/** 첫 화면 스펙 — 「무엇/얼마/설치/범위」를 표로 먼저 답한다(GEO 원칙 ②). */
const SPEC: [string, string][] = [
  ["价格", "免费——全部功能，不限次数"],
  ["安装", "不需要——在浏览器里运行（WebAssembly）"],
  ["账号", "不需要（登录只用来同步训练器记录）"],
  ["覆盖范围", "翻牌后、单挑（翻牌·转牌·河牌）"],
  ["在哪里计算", "在你自己的设备上，不经过我们的服务器"],
  ["兼容性", "现代浏览器——Windows、macOS、Linux、手机"],
  // 🟢 이 열거는 앱 셀렉터와 1:1이다 — zh 랜딩은 간체·번체를 따로 셀 수 있다.
  //    ★2026-08-24 갱신 — 앱이 fr을 배포해 셀렉터가 9개가 됐다(法语 추가).
  // ★2026-09-05 갱신 — 앱이 id·ms를 배포해 셀렉터가 11개가 됐다(라이브 실측 · ③ 마감 회차).
  ["语言", "简体中文（另有繁体中文、韩语、英语、日语、西班牙语、葡萄牙语、德语、法语、印尼语、马来语）"],
  ["引擎", "开源 WASM Postflop（AGPL-3.0）· 修改后的源码已公开"],
];

/**
 * 「무엇을 원하나 → 어디로」 — 내부 역할 분리를 표로 못박아 카니발을 막는다.
 * 🔴 EN판은 `/en/hand-chart`·`/en/calculator`로 보내지만 **zh에는 그 도구 페이지가 없다.**
 *    zh 블로그 글과 앱 내장 기능으로 보낸다(대상 실존 확인 완료).
 */
const PICK_TOOL: readonly [string, string, string | null][] = [
  ["把翻牌后的一个具体牌局算清楚", "本页的求解器", null],
  ["知道每个位置该开哪些起手牌", "起手牌表", "/zh/blog/holdem-starting-hands-chart"],
  ["数补牌、算底池赔率", "底池赔率指南", "/zh/blog/holdem-pot-odds"],
  ["只想看一手牌的胜率", "胜率（Equity）指南", "/zh/blog/holdem-equity"],
];

/** 사용법 — 앱 사이드바 탭 라벨을 그대로 쓴다(2026-08-24 축어 실측). */
const STEPS = [
  { n: "①", title: "OOP 范围", desc: "把无位置一方的翻前范围涂进 13×13 矩阵，或者直接用记法输入（22+、A2s+、KTo+）。对角线是口袋对，右上是同花组合（AKs），左下是非同花组合（AKo）。" },
  { n: "②", title: "IP 范围", desc: "有位置一方照做一遍。最快的路不是从零画两个范围：先加载一个教学案例，在它的范围上改。" },
  { n: "③", title: "公共牌", desc: "点选三张翻牌，或者让它随机发一个翻牌。想研究特定的走牌，也可以把转牌和河牌一起定下来。" },
  { n: "④", title: "下注尺寸", desc: "设定起始底池、有效筹码，以及每条街的下注和加注尺寸。第一次用就保持默认值，只确认底池和筹码就行。" },
  { n: "⑤", title: "运行求解器", desc: "搭好决策树就开算。计算在你自己的机器上跑，几秒到几分钟——算完打开结果页。" },
];

/**
 * 앱 「使用方法」이 초심자에게 그대로 복사해 쓰라고 주는 레인지(축어 · 언어 불변).
 * 🔴 **자리 이름은 앱 zh 축어를 쓴다** — 앱 그룹 라벨이 «BB 跟注方»·«BTN 开池方»다.
 * 🔴 **이 레인지의 출처는 «학습 스팟»이지 프리플랍 표 글이 아니다**(M-035 결함 3 = 귀속 오류 ·
 *    M-046 E-2에서 EN도 걸렸다. **두 출처를 갈라 적는다** — 아래 본문 문단 참조).
 */
const STARTER_RANGES: [string, string][] = [
  ["OOP——BB（跟注方）", "TT-22,AJs-A2s,KJs-K2s,QJs-Q2s,J4s+,T6s+,96s+,85s+,75s+,64s+,54s,AJo-A2o,K9o+,Q9o+,J9o+,T8o+,98o"],
  ["IP——BTN（开池方）", "22+,A2s+,K5s+,Q6s+,J7s+,T7s+,97s+,86s+,75s+,64s+,54s,A2o+,K9o+,Q9o+,J9o+,T8o+,98o"],
];

/**
 * 결과 화면 읽는 법.
 * 🔴 **행이 다섯이면 본문도 «다섯»이라고 쓴다** — ko·en·ja·es는 「네 구역」으로 신설됐다가
 *    2026-08-24에 일괄 소급됐다(M-046 E-3). pt·de·zh는 처음부터 다섯이다.
 * 🪶 세 번째 패널의 이름은 앱 축어 «手牌/听牌»다(③ 해설의 «“手牌/听牌”面板» 실측).
 */
const READ_SCREEN: string[][] = [
  ["动作条（顶部）", "沿着这条线的节点移动（翻牌 → 下注 → 跟注 → 转牌）", "点一个节点就跳到那个决策点的策略（教学案例只预算到翻牌）"],
  ["13×13 矩阵（左侧）", "一格一手牌；格子里的颜色比例就是每个动作的频率", "红色下注或加注（越深越大），绿色过牌或跟注，浅格 = 不在范围里"],
  ["频率（右上）", "整个范围的动作频率和组合数", "在这里读出「Q♠J♦T♠ 上这个范围 99.9% 过牌」这类结论"],
  ["手牌/听牌（右中）", "范围和牌面的关系——顶对、听牌、什么都没中", "一眼看出这个牌面偏向哪一方"],
  ["详情表（右下）", "逐手牌的权重、胜率、EV 和权益实现（EQR），以及每个动作的百分比", "可以按列排序，汇总可导出 CSV"],
];

/** 무료로 어디까지 되나 — 스키마 featureList와 같은 사실을 본문에도 둔다(GEO 원칙 ④). */
const FEATURES: [string, "yes" | "no", string][] = [
  ["翻牌·转牌·河牌计算", "yes", "翻牌之后的完整决策树"],
  ["翻牌前计算", "no", "开池范围在起手牌表那篇文章里"],
  ["下注·加注尺寸自由设定", "yes", "底池百分比、倍数、全下、几何尺寸"],
  ["领打（donk bet）单独设尺寸", "yes", "OOP 先下注的那条线可以单独画"],
  ["抽水和抽水封顶", "yes", "贴着你真实牌桌的条件来算"],
  ["逐节点编辑决策树", "yes", "在某个节点上增删动作"],
  ["精度和内存模式", "yes", "32 位浮点 / 16 位整数 · 浏览器上限约 4GB"],
  // 🪶 용어는 커뮤니티 실사용(知乎·중문 솔버 글) «剥削» 계열을 따랐다 — 「可利用度」는
  //    「이용률」로 오독된다(네이티브 렌즈 2026-08-24).
  ["目标可剥削度（exploitability）", "yes", "越低越精确，也越慢"],
  ["保存范围和设置", "yes", "保存、加载、导入、导出"],
  ["汇总导出 CSV", "yes", "直接进表格软件"],
  ["牌局分享链接", "yes", "把同一个牌局发给牌友"],
  ["打开算好的教学案例", "yes", "结果即点即看，不用等"],
  ["带评分的 GTO 训练器", "yes", "含弱点分析和重练队列"],
];

/**
 * 외부 도구 비교 — ⚠ 가격·무료 티어 «수치»는 넣지 않는다(CLAUDE.md §12-B).
 * 🔴 **「PioSOLVER 收费」라고 쓰지 마라** — 그쪽 공식 문서에 무료 버전 안내가 있다.
 *    1차 출처로 확인된 것은 **설치형·주로 Windows**라는 사실뿐이다.
 */
const COMPARE: string[][] = [
  ["怎么算", "在浏览器里现场算", "查询提前算好的答案", "安装后在自己电脑上算"],
  ["安装", "不需要", "不需要", "要装，主要是 Windows"],
  ["覆盖范围", "翻牌后、单挑", "常常连翻牌前一起", "看版本"],
  ["范围和决策树可否修改", "自由", "只能在已发布的目录里选", "自由"],
  ["在哪里算", "你的设备上", "服务商那边（提前算好）", "你的设备上"],
];

/**
 * 학습 예제 — 앱의 **간체 라벨·해설을 축어로 옮기되**(2026-08-24 실측), 앱이 아직 틀린
 * 다섯 자리(①④⑦⑧⑩)는 **§4-B 정정본**으로 갈았다(파일 헤더의 폐기 명제 대조 참조).
 * 🔴 **개수를 문장에 박지 않는다** — 아래 배열에서 세어 쓴다(`SPOT_TOTAL` · RP-08).
 * 🔴 **카드는 기억으로 적지 않는다** — 13개 보드는 라이브 화면에서 축어로 긁었다.
 * 🪶 `slug`가 하나도 없다 — GTO 시리즈 해설 13편이 **zh에는 아직 0편**이기 때문이다.
 *    zh판을 발행하면 그 행에 채운다. **없는 링크를 미리 걸지 않는다.**
 */
// ✅ 2026-09-03 — zh 해설 13편을 발행하며 `slug`를 전 행에 채웠다(`lib/posts-zh/<slug>.ts` · EN·ja·es 랜딩과 같은 대응). slug는 lib/gto-series.ts와 동일.
const SPOT_GROUPS = [
  {
    label: "单加注底池——BTN vs BB（基础）",
    cond: "OOP: BB 跟注方 · IP: BTN 开池方 · 底池 5.5bb · 筹码量 97.5bb",
    items: [
      // 🔴 M-046 P-2 유형을 «신설 시점에» 회피 — 앱 ①은 「BB 과패 다음 BTN이 넓게 작은 벳을
      //    친다」고 말하는데 화면은 BB 첫 액션에서 멈춘다. 화면값(체크 98.2%)으로.
      { board: "A♥7♦2♣", slug: "a-high-board-cbet", name: "干燥的 A 高牌面", note: "范围优势的教科书——A 这张牌正好打中开池方的范围，BB 在这里 98.2% 过牌" },
      { board: "K♠8♦3♣", slug: "k-high-board-cbet", name: "干燥的 K 高牌面", note: "和 A 高牌面比一比：K 高牌面同样是 BTN 占优，但过牌会稍微多一点。为什么呢？" },
      // 🟢 앱 zh 축어가 이미 정정본. 다만 «在 13 个案例里»의 편 수 하드코딩만
      //    «这套案例里»로 갈았다(RP-08 · M-046 P-1과 같은 처방).
      { board: "Q♠J♦T♠", slug: "broadway-board-strategy", name: "broadway 高张连张双色牌面", note: "看着像两边都打中的牌面。可 BB 的权益实现在这套案例里是最低的——77.9%，BTN 是 119.4%——BB 有 99.9% 都在过牌" },
      // 🔴🔴 RP-01 계열 + RP-02 정정 — 앱 zh는 아직 «콜러 우위 + C벳 빈도 붕괴» 류다
      //    (8개 언어 전건 · 원문은 5langs 축어 문서 §0 — 주석 인용은 의역으로, M-047).
      //    ▸ 「콜러 우위」는 시리즈가 이름까지 대며 폐기한 명제다(KO ④: 「레인지 우위가 BB로
      //      넘어간 것은 아니다 — 48.5% 대 51.5%」 · EN ④ FAQ 「→ No.」).
      //    ▸ 「BTN C벳 빈도」는 화면에서 확인 불가다 — 스팟은 플랍 첫 액션(BB 차례)에서 멈춘다.
      //    §4-B ④: OOP(BB) 첫 액션 벳 **23.7%**. 앱 문구로 되돌리지 마라.
      { board: "9♥8♥7♣", slug: "donk-bet-strategy", name: "中张连张双色牌面", note: "单加注底池里唯一一个 BB 真会主动领打的牌面：BB 有 23.7% 先下注（不过范围优势仍在 BTN——胜率 BB 48.5% 对 BTN 51.5%）" },
      // 🔄 M-067 축어 재동기(2026-08-26) — 앱이 `190d293`에서 ⑤ lesson을 **완화형**으로 정정했다
      //    (구형 = «사라진다»형 → 신형 = «变少了，主要剩下» 형). 🔴 **구형 문자열은 주석에도 적지 마라** —
      //    검수장 회귀 앵커가 그 출현 수를 세고 «0 = 정정 반영»으로 읽는다. 화면값에 큰 벳이 3.2%
      //    남아 «사라진다»가 과장이었다(솔버 S-003 ③ · 검수장 S-007 라이브 md5 검증).
      //    ⚠ zh-hant 원장의 «消失» 지적 기각 근거가 «앱 축어 그대로»였는데 **그 근거가 소멸했다** —
      //       재지적이 아니라 근거 뒤집힘이다(검수장 §2). 간체·번체 동형 판정.
      { board: "Q♠9♠2♠", slug: "monotone-board-strategy", name: "单色牌面（3 张同花）", note: "看看大注为什么变少了，主要剩下小注和过牌——连已经成同花的牌都经常只过牌" },
      { board: "6♣6♦3♥", slug: "paired-board-strategy", name: "对子牌面", note: "谁都不太容易打中的牌面，诈唬（bluff）的频率就上去了。到详情表里找找看，是哪些手牌被当作诈唬来下注" },
      // 🔴 M-045 RP-19 정정 — 앱 zh는 아직 «체크레이즈 빈도 단언 + 벳 뒤를 따라가라» 류다
      //    (빈도 단언 + 조작 지시 — 화면은 BB 첫 액션에서 멈춘다. 원문 인용은 의역으로, M-047).
      //    KO ⑦ 239줄: 「BB의 체크레이즈 빈도가 그 화면에는 없습니다」. §4-B ⑦ = 체크 96.8 · 벳 3.2뿐.
      { board: "6♠5♥2♦", slug: "low-board-check-raise", name: "低张彩虹牌面", note: "一场高张（overcard）之争。研究过牌加注怎么搭建的案例——画面上 BB 的第一个动作是 96.8% 过牌、3.2% 下注" },
    ],
  },
  {
    label: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）",
    cond: "OOP: BB 3bet 方 · IP: BTN 跟注方 · 底池 22.5bb · 筹码量 89bb",
    items: [
      // 🔴 M-038 RP-03 정정 — 앱 zh는 아직 «SPR이 낮아서 작은 벳으로 압박» 류의 인과다
      //    (원문 인용은 의역으로 — M-047). 시리즈 ⑧이 그 인과를 폐기했다: 「SPR이 똑같이
      //    4.0인 ⑨는 큰 사이즈 98.4%, ⑩은 97.8%다. 사이즈를 정하는 것은 스택 깊이가 아니라
      //    레인지의 모양이다」(`lib/posts/3bet-pot-cbet.ts` 반박 문단). 앱 문구로 되돌리지 마라.
      { board: "A♦K♠2♥", slug: "3bet-pot-cbet", name: "3bet 方占优的 A 高牌面", note: "对 3bet 范围（一堆 AK、AA、KK）来说最好的翻牌。小注之所以能压住对手整个范围，靠的是这个范围的形状——不是因为 SPR 低" },
      // 🟢 앱 zh 축어가 이미 정정본이다(98.4 · 0.8).
      //    🔴 100−99.1로 «빼서» 구하면 0.9가 나온다 — 개별 반올림값의 합은 100이 아니다(§4-B 주의).
      { board: "Q♥T♥7♠", slug: "3bet-pot-bet-sizing", name: "多变的双色牌面", note: "虽然是 3bet 底池，但这个牌面对跟注方也不差。可 3bet 方并不会收手——98.4% 的范围都用同一个 2/3 尺寸打出去，只有 0.8% 过牌" },
      // 🔴 RP-17 정정 — 앱 zh는 «통째로 빗나감» 류 **결함형이 잔존하는 3개 언어(ko·zh·zh-hant)
      //    중 하나**다(원문 인용은 의역으로 — M-047). 정본은 «완화»가 아니라 «수치»다 —
      //    KO ⑩ 표 실측 **탑 페어 0%**(8이 들어간 핸드가 3벳 레인지에 없다) + 거트샷 4.8% · 백도어 16.9%.
      { board: "8♦5♣2♠", slug: "3bet-pot-low-board", name: "低张干燥牌面", note: "3bet 范围在这里连一个顶对都翻不出来——只有卡顺和后门听牌——可超对和 A 高牌照样在施压" },
    ],
  },
  {
    label: "盲位对战——SB vs BB（宽范围）",
    cond: "OOP: SB 开池方 · IP: BB 跟注方 · 底池 6bb · 筹码量 97bb",
    items: [
      // 🟢 앱 축어. RP-18 감시 조건(빈도 수치가 붙으면 폐기 명제) 미충족 — 수치를 붙이지 마라.
      { board: "K♥T♦6♠", slug: "blind-battle-cbet", name: "K 高带 T 的牌面", note: "盲位对战双方范围都宽，所以到了翻牌两边都比较弱。同样是 K 高牌面，和 BTN vs BB 时的频率比一比，差在哪里" },
      { board: "7♦6♦5♣", slug: "blind-battle-connected-board", name: "低张连张双色牌面", note: "两个宽范围撞上一个连张性极强的牌面。两对、顺子、听牌满地都是——这是「手牌/听牌」面板最热闹的一个局面" },
      // 🟢 앱 zh 축어가 이미 정정본이다(88 대 66 · 80.1) — 明三条(trips) 용어도 코퍼스 정본과
      //    일치한다(`zh/holdem-glossary` 暗三条/明三条 구분 · M-034 「코퍼스 정본 먼저」).
      { board: "A♠A♥6♦", slug: "ace-paired-board-strategy", name: "A 对子牌面", note: "牌面上摆着两张 A 的特殊局面。明三条（trips）并不少见——SB 有 88 个组合，BB 只有 66 个，所以 SB 打出 80.1%。谁手里的 A 更多，就是这个牌面的全部" },
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

export default function SolverClientZh() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16">
      {/* ── 히어로 + 직답 + CTA ───────────────────────────────────────── */}
      <section className="mt-6">
        {/*
          ★H1은 라틴 조준축(`GTO Poker Solver` — gto poker와 poker solver를 한 문자열이 덮는다)과
            중국어 정면 쿼리(德州扑克 求解器)를 함께 싣는다.
          🔴 `GTO`도 `Solver`도 단독으로 두지 않는다 — 자동차·아니메 / 수학 솔버 오염(뱅크 §1).
        */}
        <h1 className="text-center text-2xl font-bold">
          免费 GTO Poker Solver——打开浏览器就能算的德州扑克求解器
        </h1>
        {/*
          ★h1 직후 직답 단락. GEO 원칙 ① — AI 검색도 페이지가 아니라 이 단락을 뽑는다.
            첫 문장에 정의 + 구체 수치, 앞 문단 의존 없이 자기완결.
        */}
        <p className="mt-3 text-muted-foreground">
          <strong className="text-foreground">Poker Solver（扑克求解器）</strong>是把一个具体牌局的均衡策略算出来的程序：你输入双方的范围、公共牌和下注尺寸，它告诉你{" "}
          <strong className="text-foreground">169 种起手牌</strong>各自该以多少频率下注、过牌或弃牌——全部摆在一张 13×13 矩阵里。HoldemMaster 的这个求解器
          <strong className="text-foreground">直接在你的浏览器里算——不用下载、不用注册、不限次数</strong>。矩阵旁边还有每手牌的胜率、EV 和权益实现（EQR）。覆盖范围：翻牌后、单挑。
        </p>
        <div className="mt-5 text-center">
          <Cta label="打开求解器 →" />
          <p className="mt-2 text-xs text-muted-foreground">
            最好用电脑上的 Chrome——iOS 和 Safari 里求解器只能单线程计算，自己搭的牌局会算得慢一些
          </p>
        </div>
        <Table head={["", "详情"]} rows={SPEC.map((r) => [r[0], r[1]])} />
      </section>

      {/* ── 솔버란 (⚠ 「GTO란」 순수 정의는 glossary·strategy 소유 → 「Solver」로 좁힌다) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">Poker Solver 是什么？和现成的范围表差在哪</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          求解器从零开始计算{" "}
          <strong className="text-foreground">GTO（Game Theory Optimal，博弈论最优）策略</strong>。你给它范围、公共牌、筹码量和下注尺寸的决策树，它就朝着均衡点一轮一轮迭代，直到 169 种手牌各自的下注、过牌、弃牌频率全部定下来。这正是它和范围表的分界线：表存的是别人提前算好的答案，求解器<strong className="text-foreground">算的是你眼前这一手</strong>。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          公共牌换掉一张，答案就跟着变——它不是背下来的，是重新算的。
        </p>
        {/*
          «부르는 이름» 문단 — 같은 것을 가리키는 검색어가 실제로 갈려 있다(2026-08-24 실측):
          gto poker 170~390 · poker solver 20~40 · gto solver 30 · 중국어 축 求解器·德州扑克 gto.
          커뮤니티 실사용(知乎·CSDN)은 求解器와 solver 병용 — 여기서 변형들을 한 번씩 놓는다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          同一样东西有好几个叫法：<strong className="text-foreground">poker solver</strong>、
          <strong className="text-foreground">GTO solver</strong>、GTO 求解器，或者干脆叫德扑 GTO 软件。它算出来的东西常被叫作 GTO 范围。不管你用哪个词搜过来——本页这个工具算的就是它。
        </p>
        <Table
          head={["你想要什么", "去哪里"]}
          rows={PICK_TOOL.map(([want, tool, href]) => [
            want,
            href ? (
              <Link key={want} href={href} className="font-semibold text-primary hover:underline">{tool}</Link>
            ) : (
              <span key={want} className="font-semibold text-foreground">{tool}</span>
            ),
          ])}
        />
        {/* 🔴 SEO 렌즈 반영(2026-08-24) — «앱 내 胜率计算器 언급으로만»(카니발 가드)을 헤더가
            약속해 놓고 본문에 0회였다. 개념 설명 없이 «내장 탭» 사실만 — 라벨은 앱 네비 축어
            («翻前范围表 开池·防守» · «胜率计算器 Equity»)다. */}
        <p className="mt-4 text-sm text-muted-foreground">
          应用里还内置了两个顺手的标签——翻前范围表（开池·防守）和胜率计算器（Equity）。搭牌局的时候直接查，不用切出去。
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          如果你真正想知道的是 GTO 这个概念本身：完整定义和常见误解在{" "}
          <Link href="/zh/blog/holdem-glossary" className="font-semibold text-primary hover:underline">
            德扑术语表
          </Link>{" "}
          和{" "}
          <Link href="/zh/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
            德州扑克策略指南
          </Link>
          里。
        </p>
      </section>

      {/*
        ── ★랜딩의 핵심 절: 「범위의 플랍 이후」 본진 ──────────────────────
        `德州扑克 gto` SERP(SG)는 개념글(知乎·vocus)과 앱뿐이고, 플랍 «이후» 레인지를 중국어로
        다루는 페이지가 없다(2026-08-24 실측). es·pt·de와 같은 구조 → 같은 서사로 가른다.
        🔴 프리플랍 표는 `zh/holdem-starting-hands-chart`의 것이다. **가져오지 않고 넘긴다.**
        🔴 수치는 전부 §4-B 확정표에서만 가져왔다(③ 0.1% · ④ 23.7% — 둘 다 OOP 첫 액션 기준).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">为什么你的范围一到翻牌后就散了？</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          因为翻前范围是稳定的，翻牌后的范围不是。
          <strong className="text-foreground">翻前范围装得进一张表</strong>——你在按钮位每次开池的范围都差不多。可三张公共牌一摊开，同一个范围立刻散成成牌、听牌和空气，接下来怎么打，完全取决于牌面的质地。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          本页的两个案例比任何解释都直观。两个局面里 BB 都是跟注按钮位的加注、翻牌先行动——
          同一个位置、同一个范围、同一个底池：
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          <li>
            在 <strong className="text-foreground">Q♠J♦T♠</strong> 上，BB 先下注的频率只有{" "}
            <span className="font-semibold text-orange-500">0.1%</span>——几乎从不主动出手。
          </li>
          <li>
            在 <strong className="text-foreground">9♥8♥7♣</strong> 上，BB 先下注的频率是{" "}
            <span className="font-semibold text-emerald-500">23.7%</span>。
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          两个牌面都是连张、双色，看着像亲兄弟，正确打法却毫不相干。
          <strong className="text-foreground">没有任何一张翻前表装得下这个差别</strong>——表是在翻牌出现之前写好的。这正是求解器的活儿：它给你的是「之后」的范围，不是「之前」的。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          还在搭「之前」的范围？先从{" "}
          <Link href="/zh/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>{" "}
          开始——那里按位置列好了开池范围。要把一手牌放进对手的范围里去想，
          <Link href="/zh/blog/holdem-reading-the-board" className="font-semibold text-primary hover:underline">
            读牌面
          </Link>
          是中间那一步。
        </p>
      </section>

      {/* ── 사용법 5단계 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">这个德州扑克求解器怎么用？——5 步</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          第一次面对求解器的话：
          <strong className="text-foreground">先别配置任何东西，先打开一个教学案例。</strong>
          那些都算好了——你先学会读输出，再去跟输入较劲。自己搭牌局时，沿着侧边栏的标签从上往下走。
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
          自己搭的牌局里，筹码就是任意整数。想按大盲思考的话，用{" "}
          <strong className="text-foreground">10 筹码 = 1bb</strong>（底池 55 就是 5.5bb）。教学案例和训练器已经在用这个换算。
        </p>
        {/* 🔴 두 출처를 가른다(M-046 E-2 처방) — 포지션별 오픈 레인지는 chart의 것, 아래 표는
            학습 스팟이 쓰는 것. es(08-22)·en·ja(08-24)·de와 같은 형태다. */}
        <p className="mt-4 text-sm text-muted-foreground">
          两个范围都从零画是最慢的路。各位置的开池范围在{" "}
          <Link href="/zh/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>
          里。下面这两个范围是另一回事：
          <strong className="text-foreground">单加注底池的教学案例正在用的那两个</strong>
          （BTN vs BB），复制后直接粘进 ① 和 ② 就能用。
        </p>
        <Table head={["粘贴到", "范围"]} rows={STARTER_RANGES.map(([seat, r]) => [seat, <code key={seat} className="text-xs break-all">{r}</code>])} />
      </section>

      {/* ── 결과 화면 읽는 법 ────────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">结果画面怎么读？</h2>
        {/*
          🔴 **다섯이다.** 아래 표가 다섯 행이고 이 문단이 다섯을 센다(M-046 E-3 — ko·en·ja·es는
             「네 구역」으로 났다가 08-24 일괄 소급됐다. zh는 처음부터 다섯으로 쓴다).
        */}
        <p className="mt-2 text-sm text-muted-foreground">
          结果页有五个工作区：顶部的<strong className="text-foreground">动作条</strong>、左侧的{" "}
          <strong className="text-foreground">13×13 矩阵</strong>，以及右侧的{" "}
          <strong className="text-foreground">频率、手牌/听牌面板和详情表</strong>。记一条经验法则：左边读「一手牌怎么打」，右边读「整个范围怎么打」——只有右下的详情表再把它拆回逐手牌。
        </p>
        <Table head={["在哪", "写着什么", "怎么读"]} rows={READ_SCREEN} />
        <p className="mt-4 text-sm text-muted-foreground">
          权益实现（EQR）跌破 100% 的时候值得多看一眼：你手里的胜率没有全部兑现成底池份额。原因每个局面都不一样——位置、主动权、谁的范围顶端更厚。
          <strong className="text-foreground">求解器不是告诉你「该怎么打」，而是让你看见「频率为什么长成这样」</strong>，而这个「为什么」在 EQR 里最清楚。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          这些词还很陌生的话：先读{" "}
          <Link href="/zh/blog/holdem-equity" className="font-semibold text-primary hover:underline">
            胜率（Equity）指南
          </Link>{" "}
          和{" "}
          <Link href="/zh/blog/holdem-continuation-bet" className="font-semibold text-primary hover:underline">
            持续下注（c-bet）指南
          </Link>
          ，把求解器度量的那些概念先备好。
        </p>
      </section>

      {/* ── 무료 범위 (기능표) ───────────────────────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">真的全部免费吗？——能用到哪一步</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          真的——而且没有那些常见的小字条款：不要支付信息、没有锁起来的功能、没有每天的计算上限、不用注册。连通常只在付费桌面求解器里才有的设置——
          <strong className="text-foreground">抽水和抽水封顶、精度模式、逐节点编辑决策树</strong>
          ——也都在。唯一真正的边界是：这个工具只管
          <strong className="text-foreground">翻牌之后的单挑局面</strong>。
        </p>
        <Table
          head={["功能", "包含", "备注"]}
          rows={FEATURES.map(([name, ok, memo]) => [
            name,
            ok === "yes" ? (
              <span key={name} className="font-bold text-emerald-600">有</span>
            ) : (
              <span key={name} className="font-bold text-muted-foreground">无</span>
            ),
            memo,
          ])}
        />
        <div className="mt-5 text-center">
          <Cta label="免费试一把 →" variant="outline" />
        </div>
      </section>

      {/* ── 플랍 이후 범위 (카니발 방지의 본체) ──────────────────────── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">为什么只算翻牌、转牌、河牌？</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          这是一个<strong className="text-foreground">翻牌后（postflop）求解器</strong>：从翻牌摊开的那一刻起，替双方一路往下算。不做翻牌前是有意的——翻前是另一类问题，开池范围稳定到装得进一张表，而翻牌之后的打法每换一个牌面就要重写一遍。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          在这条边界之内什么都不缺：<strong className="text-foreground">双方的范围</strong>、任何翻牌·转牌·河牌、起始底池和有效筹码，以及每条街完整的尺寸树。算出来的不是一份通用答案，而是你那张牌桌的答案——连大部分教材都不提的抽水也算进去。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          缺翻牌前那一块的话：{" "}
          <Link href="/zh/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
            起手牌表
          </Link>
          按位置整理了开池范围。两块拼起来，一手牌就从头到尾都有了答案：表决定你带什么进场，求解器决定翻牌之后的事。
        </p>
      </section>

      {/* ── GTO 트레이너 ─────────────────────────────────────────────── */}
      <section className="mt-12">
        {/* 🪶 `德州扑克训练`·`练习(软件)`(각 10)·`gto trainer`(10) 흡수 자리. 앱 제품명(GTO 训练器)
            그대로 + 练习 표현을 본문에 얹는다. */}
        <h2 className="text-xl font-bold">GTO 训练器——给你的每个决定打分的德州扑克练习工具</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          GTO 训练器就在同一个工具里，不用另外注册。它把算好的牌局变成练习题：在一个真实的决策点发给你一手牌，你选一个动作，它打一个分。如果你想找的是免费的德州扑克练习软件，又不想背线路、只想练<strong className="text-foreground">决定</strong>——从这里开始。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          分数不是「对」或「错」，而是
          <strong className="text-foreground">你这个选择亏掉了多少期望值（EV）</strong>。GTO 本来就混合动作，选了较少见的那个不自动算失误——问题只在它亏了多少 EV。选完之后，每个动作的频率和 EV 会跟你自己那个选择的成本摆在一起。
        </p>
        <ul className="mt-4 space-y-1.5 text-sm">
          {/*
            🔴 팟 대비 비율이다. **절대 bb가 아니다** — 앱이 2026-08-15에 바꿨다. 되돌리지 마라.
            🟢 zh 앱 특징 4칸도 이미 «按占底池的 EV 损失打分»이라 화면과 아래 문장이 일치한다
               (2026-08-24 실측).
            🪶 화면 CTA «它会告诉你每个选择亏了多少 bb»는 오류가 아니다 — 표시 «값»은 bb이고
               «합격선»만 팟 대비다(2026-08-23 솔버 왕복에서 확인된 구조).
            🔴 RP-06: 예시는 **0.08bb**로 든다(0.05bb는 두 구간을 못 건넌다 — 0.05÷5.5 = 0.91%).
          */}
          <li className="text-muted-foreground">
            及格线按<strong className="text-foreground">占底池的比例</strong>来算——
            <span className="font-semibold text-emerald-500">0.35% 以内</span>是顶级操作 ·{" "}
            <span className="font-semibold text-blue-500">1% 以内</span>可以接受 ·{" "}
            <span className="font-semibold text-orange-500">超过 1%</span> 值得回头复盘
          </li>
          <li className="text-muted-foreground">
            同样是 0.08bb，在 5.5bb 的底池里是 1.45%（要复盘），在 22.5bb 的底池里只有
            0.36%（可接受）。换算成 bb：单加注底池的两条线在 0.02bb 和 0.06bb，3bet 底池在
            0.08bb 和 0.23bb。另有 0.02bb 和 0.05bb 的下限，防止把微小差值当成失误
          </li>
          <li className="text-muted-foreground">
            题目出自每个牌局的多个决策点，组合数
            <strong className="text-foreground">上万</strong>（目标可剥削度 0.5%）。也可以专练一类局面：单加注底池、3bet 底池或盲位对战
          </li>
          <li className="text-muted-foreground">
            发牌按 <strong className="text-foreground">GTO 范围里的真实权重</strong>来——一手牌出现的频率，就是你在那个局面里真会拿到它的频率
          </li>
          <li className="text-muted-foreground">
            连胜纪录、弱点分析和<strong className="text-foreground">重练队列</strong>（把你亏 EV 最多的题排回来）都建立在做题记录上。不登录的话，记录只留在你的设备里
          </li>
        </ul>
        <div className="mt-5">
          <Cta label="打开 GTO 训练器 →" variant="outline" />
        </div>
      </section>

      {/* ── 학습 스팟 (앱 축어 8 + §4-B 정정 5) ─────────────────────── */}
      <section className="mt-12">
        {/* 🟢 SEO 렌즈 반영(2026-08-24) — `德州扑克教学`(HK 50~70 · 12m +38% 상승 축)의 연속
            문자열을 H2가 갖는다(«德州扑克教学案例»가 그 결합을 포함한다). */}
        <h2 className="text-xl font-bold">
          {SPOT_TOTAL} 个已经算好的德州扑克教学案例
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          下面的牌局全部提前算完——点开的那一刻策略就摆在眼前，不用等、不用配置。范围取的是
          100bb 线上标准局的近似；学得最快的方式是加载一个案例、改改范围、重新算一遍，看什么变了。要理解牌面质地怎么改写策略，没有比这更快的路。
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
                        href={`/zh/blog/${item.slug}`}
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

      {/* ── 외부 도구 비교 ───────────────────────────────────────────── */}
      {/*
        ⚠ 가격·무료 티어 «수치»를 쓰지 않는다(§12-B). «방식의 차이»만 적는다.
        🪶 브랜드 인접 검색: `gto wizard` SG 480 · MY 390 · HK 1,300~1,600 · `piosolver` 20~110.
           직접 조준은 안 하지만 비교 문맥의 언급은 정당하다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">和 GTO Wizard、PioSOLVER、TexasSolver 有什么不同？</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          它们都可以叫 GTO solver 或 poker solver，差别在
          <strong className="text-foreground">「在哪算、什么时候算」</strong>。
          GTO Wizard 这类解决方案库是查询式的：翻的是提前算好的目录，速度快，常常连翻牌前一起覆盖。PioSOLVER、TexasSolver 这类桌面求解器要下载安装，用你自己的电脑算。本页的工具
          <strong className="text-foreground">在浏览器里现场算——你问的那一刻才开始算</strong>，范围和决策树随便改，而且什么都不用装。
        </p>
        <Table
          head={["", "HoldemMaster 求解器", "解决方案库", "桌面求解器"]}
          rows={COMPARE}
        />
        {/*
          🔴 «남의 무료 티어 수치»를 적지 않는다. 대신 SERP 실측으로 확인된 **구조**를 적는다:
             `poker solver`·`gto solver` top-10의 무료 접근이 전부 «구독/일일 개수/크레딧/다운로드»
             중 하나로 제한되고, 중화권 무료 축은 설치형 오픈소스(TexasSolver·知乎/CSDN)로
             흘러간다 — 2026-08-24 실측.
        */}
        <p className="mt-4 text-sm text-muted-foreground">
          搜「免费 poker solver」最后往往落进论坛帖和开源项目——而免费的选项几乎都带一个条件：要么订阅后只开放部分目录，要么每天限定次数，要么点开一条线就扣点数，要么就得下载安装。这里没有那个条件——<strong className="text-foreground">不用注册、没有每日上限、没有点数</strong>。所以复盘手牌的时候，把这页开在旁边就行。
        </p>
        {/*
          🔴 이 문단의 근거는 wasm-postflop.pages.dev의 **자기 고지**와 GitHub 저장소 제목
             "[Development suspended]"다. 추측이 아니라 원본이 스스로 적어 둔 문장이고,
             우리 앱의 AGPL 고지 축어(«本应用基于 WASM Postflop …»)와 일치한다.
        */}
        <p className="mt-3 text-sm text-muted-foreground">
          给从 <strong className="text-foreground">WASM Postflop</strong> 找过来的人顺带说一句：开源原版的页面自己写明已停止开发，仓库也标记为停更。这个求解器是把那台引擎接着开下去的分支——同样的 AGPL-3.0 协议、同样公开的源码，再加上新界面、教学案例和训练器。
        </p>
      </section>

      {/* ── 모바일·오프라인 (PWA) ───────────────────────────────────── */}
      {/*
        근거: 앱이 이미 PWA이고 버튼 축어가 «♠ 添加到主屏幕»다.
        🔴 **「설치할 수 없다」로 쓰지 마라** — 앱 등록을 준비 중이라 출시되는 순간 거짓이 된다.
           「설치가 «필요 없고», 원하면 담을 수도 있다」로 쓴다.
        🔴 **「오프라인으로 계산까지 된다」로 쓰지 마라** — 오프라인은 스팟 열람과 트레이너뿐이다.
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">手机上能用吗？离线呢？</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          都行。上手的时候什么都不用装——手机浏览器打开就是完整版。不过
          <strong className="text-foreground">想要的话，可以点「添加到主屏幕」</strong>把它放到桌面，它就会像一个 App：自己的图标、全屏、没有地址栏。那只是浏览器快捷方式，不是程序——从不弹系统权限。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          添加之后，教学案例和 GTO 训练器都存在设备里，
          <strong className="text-foreground">断网也能接着练</strong>——地铁上、飞机上、流量紧张的时候都一样。重要的边界：要从零算一个自己的牌局，计算引擎得先被加载过一次。
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          iPhone 和 Safari 里，浏览器限制让求解器只能单线程计算，大牌局会慢一些——电脑上更顺。添加入口：Chrome 和 Edge 在地址栏的安装图标，iPhone 在分享菜单里的「添加到主屏幕」。
        </p>
      </section>

      {/* ── 함께 읽으면 좋은 글 (⚠ zh엔 도구 페이지가 없다 — 전부 블로그) ── */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">延伸阅读</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6">
          <li>
            <Link href="/zh/blog/holdem-starting-hands-chart" className="font-semibold text-primary hover:underline">
              起手牌表
            </Link>{" "}
            ——这个工具只管翻牌之后。<strong>带什么牌进场</strong>看那篇；① 和 ② 里粘的范围来自教学案例
          </li>
          <li>
            <Link href="/zh/blog/holdem-pot-odds" className="font-semibold text-primary hover:underline">
              底池赔率
            </Link>{" "}
            ——只需要一个数字、不想开求解器的时候：数补牌、算所需胜率
          </li>
          <li>
            <Link href="/zh/blog/holdem-equity" className="font-semibold text-primary hover:underline">
              胜率（Equity）
            </Link>{" "}
            ——求解器的输出几乎全部从胜率推出来。先读它，结果页就看得懂
          </li>
          <li>
            <Link href="/zh/blog/holdem-position-play" className="font-semibold text-primary hover:underline">
              位置打法
            </Link>{" "}
            ——EQR 跟着位置大幅移动。求解器量化的正是那篇讲的东西
          </li>
          <li>
            <Link href="/zh/blog/holdem-3bet" className="font-semibold text-primary hover:underline">
              3bet 指南
            </Link>{" "}
            ——教学案例里专门有一组 3bet 底池。那篇讲的是牌局怎么走到那个翻牌的
          </li>
          <li>
            <Link href="/zh/blog/holdem-strategy" className="font-semibold text-primary hover:underline">
              德州扑克策略指南
            </Link>{" "}
            ——求解器用数字表达的那些概念的总地图，包括 GTO 的定义
          </li>
        </ul>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      {/*
        배열은 `./faq.ts`가 단일 출처다(서버 `page.tsx`의 FAQPage 스키마와 공유).
        🔴 본문에도 전부 렌더한다 — 스키마에만 두면 LLM이 못 읽는다(posting.mdc GEO ④).
      */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">常见问题 FAQ</h2>
        <div className="mt-4 space-y-5">
          {SOLVER_FAQ_ZH.map((f) => (
            <div key={f.q}>
              <p className="font-semibold">Q. {f.q}</p>
              <p className="mt-1 text-sm text-muted-foreground">A. {f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── 마지막 CTA + 오픈소스 고지 (AGPL) ─────────────────────────── */}
      <section className="mt-12 text-center">
        <Cta label="打开免费的 Poker Solver →" />
      </section>
      {/*
        🔴 AGPL 고지 — 앱 화면의 축어와 같은 사실이다. **훅으로 키우지 않는다**(2026-08-22 판정:
           앱스토어 등록 준비 중이라 오픈소스를 마케팅 축으로 세우지 않는다).
        🪶 렌더되는 자리가 넷이다: SPEC 표 `引擎` 행 · WASM Postflop 문단 · TexasSolver 비교
           FAQ · 이 꼬리 고지. **제목·H1·H2에 없다는 것이 지켜야 할 선**이다.
      */}
      <p className="mt-8 text-xs text-muted-foreground">
        本应用基于 Wataru Inariba 的 WASM Postflop（AGPL-3.0），由 HoldemMaster 本地化并改进。修改后的完整源代码以同样的协议公开。
      </p>
    </div>
  );
}
