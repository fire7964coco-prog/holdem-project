import type { ClusterNode, PillarCluster } from "./pillar-clusters";

/**
 * GTO 솔버 스팟 해설 시리즈 — **로케일별 러닝맵 라벨** (2026-09-16 신설 · 사장님 지시
 * 「전략 예제 13편 페이지에 우측 사이드바(로드맵·솔버 배너)가 없다 · 로드맵에 솔버 예제편도 넣어라」).
 *
 * ★왜 필요한가: 2026-08-18에 KO_CLUSTERS에만 「GTO 솔버」 필라를 넣어서 한국어 13편은 사이드바가
 *   돌아왔지만, 같은 시리즈를 가진 9개 로케일(en·ja·es·pt·zh·zh-hant·id·hi·ms)은 그대로였다.
 *   intl-blog-post-client.tsx의 showMinimap = clusterForSlug(...) !== null 이라 클러스터가 없으면
 *   우측 사이드바(계산기·솔버 CTA + 러닝맵) 자체가 안 그려진다. 2026-09-16 라이브 캡처로 확인.
 *
 * ★라벨은 지어내지 않았다 — 각 로케일 솔버 랜딩(app/<loc>/solver/solver-client.tsx)의
 *   SPOT_GROUPS `name`·`label`을 **축어로** 옮긴 것이다(scripts 없이 tmp 추출 → 이 파일에 고정).
 *   랜딩 문구를 바꾸면 여기도 같이 바꿔라. 순서·슬러그는 lib/gto-series.ts(KO 정본)와 동일하게
 *   검증했다(13편 · 순서 일치).
 *
 * ★허브는 그 로케일의 `/<loc>/solver` 랜딩이다 — 블로그 글이 아니므로 pillarHref로 건다
 *   (KO와 같은 방식 · pillar-clusters.ts의 PillarCluster.pillarHref 주석 참조).
 *
 * 🔴 「13×13 링크 금지」(gto-series.ts)와 충돌하지 않는다 — 관련글 가드(related-posts.ts)는
 *    slug 기준이라 로케일 무관하게 시리즈 형제를 관련글로 뿌리지 않는다. 러닝맵은 접힌 아코디언이다.
 */
const GTO_SERIES_I18N: Record<string, { pillarLabel: string; nodes: ClusterNode[] }> = {
  "en": {
    pillarLabel: "GTO Solver",
    nodes: [
      { slug: "a-high-board-cbet", label: "① Dry Ace-High Board", group: "Single Raised Pot — BTN vs BB" },
      { slug: "k-high-board-cbet", label: "② Dry King-High Board", group: "Single Raised Pot — BTN vs BB" },
      { slug: "broadway-board-strategy", label: "③ Connected Broadway, Two-Tone", group: "Single Raised Pot — BTN vs BB" },
      { slug: "donk-bet-strategy", label: "④ Middle Connected, Two-Tone", group: "Single Raised Pot — BTN vs BB" },
      { slug: "monotone-board-strategy", label: "⑤ Monotone Board", group: "Single Raised Pot — BTN vs BB" },
      { slug: "paired-board-strategy", label: "⑥ Paired Board", group: "Single Raised Pot — BTN vs BB" },
      { slug: "low-board-check-raise", label: "⑦ Low Rainbow Board", group: "Single Raised Pot — BTN vs BB" },
      { slug: "3bet-pot-cbet", label: "⑧ Ace-High Board, 3-Bettor's Edge", group: "3-Bet Pot — BB 3-bets, BTN calls" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Dynamic Two-Tone Board", group: "3-Bet Pot — BB 3-bets, BTN calls" },
      { slug: "3bet-pot-low-board", label: "⑩ Low Dry Board", group: "3-Bet Pot — BB 3-bets, BTN calls" },
      { slug: "blind-battle-cbet", label: "⑪ King-Ten-High Board", group: "Blind vs Blind — SB vs BB" },
      { slug: "blind-battle-connected-board", label: "⑫ Low Connected, Two-Tone", group: "Blind vs Blind — SB vs BB" },
      { slug: "ace-paired-board-strategy", label: "⑬ Ace-Paired Board", group: "Blind vs Blind — SB vs BB" },
    ],
  },
  "ja": {
    pillarLabel: "GTOソルバー",
    nodes: [
      { slug: "a-high-board-cbet", label: "① ドライなAハイボード", group: "シングルレイズポット — BTN vs BB" },
      { slug: "k-high-board-cbet", label: "② ドライなKハイボード", group: "シングルレイズポット — BTN vs BB" },
      { slug: "broadway-board-strategy", label: "③ ブロードウェイのコネクトボード（2トーン）", group: "シングルレイズポット — BTN vs BB" },
      { slug: "donk-bet-strategy", label: "④ ミドルのコネクトボード（2トーン）", group: "シングルレイズポット — BTN vs BB" },
      { slug: "monotone-board-strategy", label: "⑤ モノトーンボード（同スート3枚）", group: "シングルレイズポット — BTN vs BB" },
      { slug: "paired-board-strategy", label: "⑥ ペアボード", group: "シングルレイズポット — BTN vs BB" },
      { slug: "low-board-check-raise", label: "⑦ ロー・レインボーボード", group: "シングルレイズポット — BTN vs BB" },
      { slug: "3bet-pot-cbet", label: "⑧ 3ベッター優位のAハイボード", group: "3ベットポット — BB 3ベット vs BTN コール（低SPR）" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ ダイナミックな2トーンボード", group: "3ベットポット — BB 3ベット vs BTN コール（低SPR）" },
      { slug: "3bet-pot-low-board", label: "⑩ ロー・ドライボード", group: "3ベットポット — BB 3ベット vs BTN コール（低SPR）" },
      { slug: "blind-battle-cbet", label: "⑪ KTハイボード", group: "ブラインド戦（BvB） — SB vs BB（ワイドレンジ）" },
      { slug: "blind-battle-connected-board", label: "⑫ ローのコネクトボード（2トーン）", group: "ブラインド戦（BvB） — SB vs BB（ワイドレンジ）" },
      { slug: "ace-paired-board-strategy", label: "⑬ Aペアボード", group: "ブラインド戦（BvB） — SB vs BB（ワイドレンジ）" },
    ],
  },
  "es": {
    pillarLabel: "Solver GTO",
    nodes: [
      { slug: "a-high-board-cbet", label: "① Board seco A-high", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "k-high-board-cbet", label: "② Board seco K-high", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "broadway-board-strategy", label: "③ Broadway conectado, two-tone", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "donk-bet-strategy", label: "④ Conectado medio, two-tone", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "monotone-board-strategy", label: "⑤ Board monotone", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "paired-board-strategy", label: "⑥ Board pareado", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "low-board-check-raise", label: "⑦ Board bajo y rainbow", group: "Bote de subida simple — BTN vs BB (fundamentos)" },
      { slug: "3bet-pot-cbet", label: "⑧ Board A-high, ventaja del 3-bettor", group: "Bote de 3-bet — BB hace 3-bet y BTN paga (SPR bajo)" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Board dinámico two-tone", group: "Bote de 3-bet — BB hace 3-bet y BTN paga (SPR bajo)" },
      { slug: "3bet-pot-low-board", label: "⑩ Board bajo y seco", group: "Bote de 3-bet — BB hace 3-bet y BTN paga (SPR bajo)" },
      { slug: "blind-battle-cbet", label: "⑪ Board K-T high", group: "Guerra de ciegas — SB vs BB (rangos amplios)" },
      { slug: "blind-battle-connected-board", label: "⑫ Bajo conectado, two-tone", group: "Guerra de ciegas — SB vs BB (rangos amplios)" },
      { slug: "ace-paired-board-strategy", label: "⑬ Board con A pareado", group: "Guerra de ciegas — SB vs BB (rangos amplios)" },
    ],
  },
  "pt": {
    pillarLabel: "Solver GTO",
    nodes: [
      { slug: "a-high-board-cbet", label: "① Board seco A-high", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "k-high-board-cbet", label: "② Board seco K-high", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "broadway-board-strategy", label: "③ Board Broadway conectado, two-tone", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "donk-bet-strategy", label: "④ Board médio conectado, two-tone", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "monotone-board-strategy", label: "⑤ Board monotone", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "paired-board-strategy", label: "⑥ Board pareado", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "low-board-check-raise", label: "⑦ Board baixo e rainbow", group: "Single Raised Pot — BTN vs BB (fundamentos)" },
      { slug: "3bet-pot-cbet", label: "⑧ Board A-high, vantagem do 3-bettor", group: "Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Board dinâmico two-tone", group: "Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)" },
      { slug: "3bet-pot-low-board", label: "⑩ Board baixo e seco", group: "Pote de 3-bet — BB dá 3-bet e BTN paga (SPR baixo)" },
      { slug: "blind-battle-cbet", label: "⑪ Board K-high com um T", group: "Blind vs Blind — SB vs BB (ranges amplos)" },
      { slug: "blind-battle-connected-board", label: "⑫ Board baixo conectado, two-tone", group: "Blind vs Blind — SB vs BB (ranges amplos)" },
      { slug: "ace-paired-board-strategy", label: "⑬ Board com A pareado", group: "Blind vs Blind — SB vs BB (ranges amplos)" },
    ],
  },
  "zh": {
    pillarLabel: "GTO 求解器",
    nodes: [
      { slug: "a-high-board-cbet", label: "① 干燥的 A 高牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "k-high-board-cbet", label: "② 干燥的 K 高牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "broadway-board-strategy", label: "③ broadway 高张连张双色牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "donk-bet-strategy", label: "④ 中张连张双色牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "monotone-board-strategy", label: "⑤ 单色牌面（3 张同花）", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "paired-board-strategy", label: "⑥ 对子牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "low-board-check-raise", label: "⑦ 低张彩虹牌面", group: "单加注底池——BTN vs BB（基础）" },
      { slug: "3bet-pot-cbet", label: "⑧ 3bet 方占优的 A 高牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ 多变的双色牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "3bet-pot-low-board", label: "⑩ 低张干燥牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "blind-battle-cbet", label: "⑪ K 高带 T 的牌面", group: "盲位对战——SB vs BB（宽范围）" },
      { slug: "blind-battle-connected-board", label: "⑫ 低张连张双色牌面", group: "盲位对战——SB vs BB（宽范围）" },
      { slug: "ace-paired-board-strategy", label: "⑬ A 对子牌面", group: "盲位对战——SB vs BB（宽范围）" },
    ],
  },
  "zh-hant": {
    pillarLabel: "GTO 解算器",
    nodes: [
      { slug: "a-high-board-cbet", label: "① 乾燥的 A 高牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "k-high-board-cbet", label: "② 乾燥的 K 高牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "broadway-board-strategy", label: "③ 百老匯連張雙色牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "donk-bet-strategy", label: "④ 中張連張雙色牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "monotone-board-strategy", label: "⑤ 單色牌面（3 張同花）", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "paired-board-strategy", label: "⑥ 對子牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "low-board-check-raise", label: "⑦ 低張彩虹牌面", group: "單加注底池——BTN vs BB（基礎）" },
      { slug: "3bet-pot-cbet", label: "⑧ 3bet 方佔優的 A 高牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ 多變的雙色牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "3bet-pot-low-board", label: "⑩ 低張乾燥牌面", group: "3bet 底池——BB 3bet、BTN 跟注（低 SPR）" },
      { slug: "blind-battle-cbet", label: "⑪ K 高帶 10 的牌面", group: "盲位對戰——SB vs BB（寬範圍）" },
      { slug: "blind-battle-connected-board", label: "⑫ 低張連張雙色牌面", group: "盲位對戰——SB vs BB（寬範圍）" },
      { slug: "ace-paired-board-strategy", label: "⑬ A 對子牌面", group: "盲位對戰——SB vs BB（寬範圍）" },
    ],
  },
  "id": {
    pillarLabel: "Solver GTO",
    nodes: [
      { slug: "a-high-board-cbet", label: "① Board kering A-high", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "k-high-board-cbet", label: "② Board kering K-high", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "broadway-board-strategy", label: "③ Board Broadway terhubung, two-tone", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "donk-bet-strategy", label: "④ Board tengah terhubung, two-tone", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "monotone-board-strategy", label: "⑤ Board monotone (satu suit)", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "paired-board-strategy", label: "⑥ Board paired", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "low-board-check-raise", label: "⑦ Board rendah rainbow", group: "Single Raised Pot — BTN vs BB (dasar)" },
      { slug: "3bet-pot-cbet", label: "⑧ Board A-high, keunggulan 3-bettor", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Board dinamis two-tone", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "3bet-pot-low-board", label: "⑩ Board rendah kering", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "blind-battle-cbet", label: "⑪ Board K-high dengan T", group: "Blind vs Blind — SB vs BB (range lebar)" },
      { slug: "blind-battle-connected-board", label: "⑫ Board rendah terhubung, two-tone", group: "Blind vs Blind — SB vs BB (range lebar)" },
      { slug: "ace-paired-board-strategy", label: "⑬ Board dengan dua As", group: "Blind vs Blind — SB vs BB (range lebar)" },
    ],
  },
  "hi": {
    pillarLabel: "GTO सॉल्वर",
    nodes: [
      { slug: "a-high-board-cbet", label: "① सूखा A-high board", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "k-high-board-cbet", label: "② सूखा K-high board", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "broadway-board-strategy", label: "③ जुड़ा हुआ Broadway board, two-tone", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "donk-bet-strategy", label: "④ जुड़ा हुआ middle board, two-tone", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "monotone-board-strategy", label: "⑤ Monotone board (एक ही suit)", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "paired-board-strategy", label: "⑥ Paired board", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "low-board-check-raise", label: "⑦ नीचा rainbow board", group: "Single Raised Pot — BTN vs BB (बुनियाद)" },
      { slug: "3bet-pot-cbet", label: "⑧ A-high board, 3-bettor को फ़ायदा", group: "3-Bet Pot — BB 3-bet, BTN call (कम SPR)" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Draws वाला two-tone board", group: "3-Bet Pot — BB 3-bet, BTN call (कम SPR)" },
      { slug: "3bet-pot-low-board", label: "⑩ नीचा सूखा board", group: "3-Bet Pot — BB 3-bet, BTN call (कम SPR)" },
      { slug: "blind-battle-cbet", label: "⑪ K-high board पर T", group: "Blind vs Blind — SB vs BB (चौड़ी ranges)" },
      { slug: "blind-battle-connected-board", label: "⑫ जुड़ा हुआ low board, two-tone", group: "Blind vs Blind — SB vs BB (चौड़ी ranges)" },
      { slug: "ace-paired-board-strategy", label: "⑬ दो Ace वाला board", group: "Blind vs Blind — SB vs BB (चौड़ी ranges)" },
    ],
  },
  "ms": {
    pillarLabel: "Solver GTO",
    nodes: [
      { slug: "a-high-board-cbet", label: "① Board kering A-high", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "k-high-board-cbet", label: "② Board kering K-high", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "broadway-board-strategy", label: "③ Board Broadway bersambung, two-tone", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "donk-bet-strategy", label: "④ Board tengah bersambung, two-tone", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "monotone-board-strategy", label: "⑤ Board monotone (satu suit)", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "paired-board-strategy", label: "⑥ Board paired", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "low-board-check-raise", label: "⑦ Board rendah rainbow", group: "Single Raised Pot — BTN vs BB (asas)" },
      { slug: "3bet-pot-cbet", label: "⑧ Board A-high, kelebihan 3-bettor", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "3bet-pot-bet-sizing", label: "⑨ Board dinamik two-tone", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "3bet-pot-low-board", label: "⑩ Board rendah kering", group: "Pot 3-bet — BB 3-bet, BTN call (SPR rendah)" },
      { slug: "blind-battle-cbet", label: "⑪ Board K-high dengan T", group: "Blind vs Blind — SB vs BB (range luas)" },
      { slug: "blind-battle-connected-board", label: "⑫ Board rendah bersambung, two-tone", group: "Blind vs Blind — SB vs BB (range luas)" },
      { slug: "ace-paired-board-strategy", label: "⑬ Board dengan dua Ace", group: "Blind vs Blind — SB vs BB (range luas)" },
    ],
  },
};

/** 그 로케일의 GTO 솔버 필라. 시리즈 번역본이 없는 로케일(de·fr 등)은 null — 러닝맵에 404 링크를 만들지 않는다. */
export function solverClusterFor(locale: string): PillarCluster | null {
  const l = GTO_SERIES_I18N[locale];
  if (!l) return null;
  return { id: "solver", pillarSlug: "solver", pillarHref: `/${locale}/solver`, pillarLabel: l.pillarLabel, nodes: l.nodes };
}
