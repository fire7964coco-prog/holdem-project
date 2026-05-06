// scripts/add-tldr-field.mjs
//
// 모든 블로그 포스트에 `tldr: "..."` (한 줄 정답) 필드 추가.
// 검색 의도에 가장 빠르게 답하는 40~90자 핵심 요약 — Featured Snippet
// 대상 + LCP 상단에 즉시 노출되는 핵심 텍스트.
//
// `desc:` 또는 `updated:` 다음 줄에 동일 들여쓰기로 삽입.
// 이미 `tldr` 가 있으면 값을 갱신.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");

const TLDR = {
  // ─── 족보 / 규칙 클러스터 ─────────────────────────────────────
  "holdem-hand-rankings":
    "홀덤 족보 순위는 로열플러시 → 스트레이트플러시 → 포카드 → 풀하우스 → 플러시 → 스트레이트 → 트리플 → 투페어 → 원페어 → 하이카드 10단계다.",
  "holdem-hand-rankings-confusing":
    "초보가 가장 헷갈리는 족보는 플러시 vs 스트레이트, 풀하우스 비교, 키커 우열 5가지 — 보드 5장 + 내 패 2장 중 베스트 5장만 본다.",
  "holdem-flush-vs-straight":
    "플러시(같은 무늬 5장, 약 0.196%)가 스트레이트(연속 5장, 약 0.392%)보다 강하다. 출현 확률이 절반이라 더 높은 족보로 친다.",
  "holdem-vs-7poker-hand-rankings":
    "7포커는 무늬 서열·키커 1장 비교지만, 홀덤은 무늬 서열 없고 베스트 5장 전부 비교 — 같은 족보라도 판정 기준이 완전히 다르다.",
  "holdem-tiebreak-rules":
    "같은 족보면 키커를 1·2·3·4·5장째 순서로 비교, 5장까지 모두 같으면 스플릿 팟. 무늬는 우열에 영향 주지 않는다.",
  "holdem-split-pot-rules":
    "쇼다운에서 베스트 5장이 완전히 같으면 스플릿 — 정수로 안 나뉘면 가장 가까운 단위로 분할하고 남은 칩은 BTN 다음 자리부터 지급한다.",

  // ─── 게임 진행 / 기초 용어 ────────────────────────────────────
  "holdem-game-order":
    "홀덤 진행 순서는 블라인드 → 핸드 2장 딜링 → 프리플랍 → 플랍(3장) → 턴(1장) → 리버(1장) → 쇼다운, 총 4번의 베팅 라운드.",
  "holdem-blind-meaning":
    "블라인드는 매 핸드마다 BTN 왼쪽 두 자리(SB·BB)가 강제로 내는 베팅 — 액션을 만들고 폴드만 하면 칩이 줄게 만드는 토너먼트 엔진.",

  // ─── 확률 / 수학 클러스터 ─────────────────────────────────────
  "holdem-probability":
    "포켓에이스 0.45%(220:1), 포켓페어 5.9%, 아웃츠 × 4(플랍) ×2(턴) ≈ 승률 % — 이 세 숫자로 홀덤 의사결정의 80%가 끝난다.",
  "holdem-pot-odds-calculation":
    "팟오즈 % = 콜 금액 ÷ (현재 팟 + 콜 금액) × 100. 팟오즈 % < 내 승률 % 이면 콜이 수학적 이득(EV+).",
  "holdem-outs-calculation":
    "아웃츠는 내가 원하는 카드의 남은 장수 — 플럭드로우 9, 스트레이트드로우 8 — 거기에 ×4(플랍 잔여) ×2(턴) 곱하면 대략 승률.",
  "holdem-odds-calculator":
    "아웃츠와 단계만 입력하면 플랍·턴·리버 승률을 즉시 계산 — 4-2 룰을 정밀 검증해 콜/폴드 결정을 1초 안에 끝낸다.",

  // ─── 스타팅 핸드 / 전략 클러스터 ─────────────────────────────
  "holdem-starting-hand-range":
    "169가지 핸드 중 프리미엄 4%(AA·KK·QQ·AK), 강 13%, 평범 25%, 폴드 58% — 포지션이 늦을수록 레인지를 넓힌다.",
  "holdem-3bet-strategy":
    "홀덤 3벳은 오픈레이즈에 대한 재레이즈. 사이즈 IP(인포지션) 2.5~3배, OOP(아웃오브포지션) 3~4배가 표준. 밸류 + 블러프 두 목적.",
  "when-to-fold-preflop-holdem":
    "프리플랍 폴드 기준은 포지션·스택·상대 액션·핸드 등급 4가지. 약한 핸드 + UTG + 누군가 레이즈 = 거의 무조건 폴드.",
  "position-is-everything-in-holdem":
    "포지션은 정보의 비대칭. 늦은 자리(BTN·CO)일수록 강하고 UTG 가 가장 약함 — 같은 핸드라도 자리에 따라 -EV / +EV 가 갈린다.",
  "holdem-overbet-strategy":
    "오버벳은 팟의 100% 이상 베팅. 너트 또는 명확한 너트 어드밴티지 + 상대 레인지 캡 + 폴드 에쿼티 큰 보드 — 3조건 만족 시만.",
  "bluffing-strategy-when-and-how":
    "블러프 성공 조건 3가지: 상대 폴드 가능성 + 내 스토리가 보드와 일치 + 적정 사이즈. 어그레시브 상대·웻 보드는 블러프 금지.",
  "holdem-cbet-strategy":
    "C벳(컨티뉴에이션 벳)은 프리플랍 어그레서가 플랍에 50~70% 베팅. 드라이 보드 + 헤즈업일 때 가장 효과 크다.",
  "holdem-range-meaning":
    "레인지는 상대가 가질 수 있는 핸드의 집합. 1핸드가 아닌 묶음으로 사고하면 액션의 정합성·블러프 빈도까지 자동 계산된다.",

  // ─── 셋업 핸드 / 프리미엄 카드 ────────────────────────────────
  "pocket-aces-aa-strategy":
    "AA는 프리플랍 4벳, 플랍 75% 이상 베팅. 림프 금지, 멀티웨이 막기, 셋업 5상황(세트·웻 보드·멀티웨이·림프·AA vs AA) 인지가 핵심.",
  "pocket-kings-kk-strategy":
    "KK는 프리플랍 4벳까지 OK, 단 에이스 보드(약 17% 출현)에서는 상대 액션에 따라 폴드 가능 — '에이스 한 장이면 무조건 죽는다'는 환상부터 버린다.",

  // ─── 토너먼트 클러스터 ────────────────────────────────────────
  "icm-poker-meaning":
    "ICM(Independent Chip Model)은 토너먼트 칩의 상금 가치 환산식. 쇼트스택은 칩보다 자리(생존 가치) 가 비싸 콜이 보수적이어야 한다.",
  "holdem-bubble-strategy":
    "버블 전략: 빅스택은 공격적 압박, 미들스택은 ICM 생존, 숏스택은 10~15BB에서 폴드 에쿼티 살아있을 때 적극 올인.",
  "wsop-2025-tournament-guide":
    "WSOP 2025: 5월 27일~7월 16일 라스베가스 호스슈, 메인이벤트 1만 달러 바이인, 100+ 이벤트, 한국 위성 약 47만 5천 원부터 진입 가능.",
  "apt-jeju-classic-2026-guide":
    "APT 제주 클래식 2026: 1.30~2.8 LES A 카지노, 메인 보장 22억, 47만 5천 원 위성으로 230만 메인 시트 획득 가능.",

  // ─── 홀덤펍 클러스터 ──────────────────────────────────────────
  "holdem-pub-legal":
    "한국 홀덤펍은 게임물관리위원회 기준 사행성 게임으로 분류 → 영리 베팅은 불법. 합법 운영은 참가비-순수 토너먼트 형태에 한한다.",
  "holdem-pub-first-visit-guide":
    "처음 홀덤펍: 5만~30만 토너먼트가 안전. 입장 시 신분증·참가비, 칩 지급 후 블라인드 레벨 확인 — 캐시게임은 합법성 의문이라 피한다.",

  // ─── 초보 실수 ────────────────────────────────────────────────
  "holdem-beginner-mistakes-10":
    "초보 손실의 70%는 단 3가지에서 나온다 — 너무 많은 핸드(루즈콜) + 포지션 무시 + 틸트. 이 셋만 잡아도 BB/h 가 곧바로 양수로 돈다.",
};

function processFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  const original = src;

  // 각 슬러그 단위로 처리
  for (const [slug, tldr] of Object.entries(TLDR)) {
    // 슬러그 위치 찾기
    const slugRe = new RegExp(`(^[ \\t]*)slug:\\s*"${slug}"`, "m");
    const slugMatch = slugRe.exec(src);
    if (!slugMatch) continue;
    const indent = slugMatch[1];

    // 이 entry 영역 내에서 desc 라인 찾기 (slug 뒤 100줄 이내)
    const lookupStart = slugMatch.index;
    const lookupEnd = Math.min(src.length, lookupStart + 4000);
    const window = src.slice(lookupStart, lookupEnd);

    // 이미 tldr 가 있으면 갱신
    const existingTldrRe = new RegExp(
      `(^${indent}tldr:\\s*)"[^"]*"(,)`,
      "m",
    );
    if (existingTldrRe.test(window)) {
      const escaped = tldr.replace(/"/g, '\\"');
      const newWindow = window.replace(
        existingTldrRe,
        `$1"${escaped}"$2`,
      );
      src = src.slice(0, lookupStart) + newWindow + src.slice(lookupEnd);
      continue;
    }

    // tldr 가 없으면 desc: 라인 다음에 삽입
    const descRe = new RegExp(
      `(^${indent}desc:\\s*"[^"]*",\\r?\\n)`,
      "m",
    );
    const descMatch = descRe.exec(window);
    if (!descMatch) continue;

    const escaped = tldr.replace(/"/g, '\\"').replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    // 위 한번 더는 redundant — undo
    const safe = tldr.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    const insertion = `${indent}tldr: "${safe}",\n`;

    const insertionPos = lookupStart + descMatch.index + descMatch[0].length;
    src = src.slice(0, insertionPos) + insertion + src.slice(insertionPos);
  }

  if (src !== original) {
    fs.writeFileSync(filePath, src, "utf8");
    return true;
  }
  return false;
}

const targets = [
  path.join(ROOT, "lib", "posts.ts"),
  ...fs
    .readdirSync(path.join(ROOT, "lib", "posts"))
    .filter((f) => f.endsWith(".ts") && !f.startsWith("_") && f !== "index.ts")
    .map((f) => path.join(ROOT, "lib", "posts", f)),
];

let totalChanged = 0;
for (const f of targets) {
  const changed = processFile(f);
  console.log(`${changed ? "OK   " : "noop "} ${path.relative(ROOT, f)}`);
  if (changed) totalChanged++;
}
console.log(`\n${totalChanged}/${targets.length} 파일 수정 완료.`);
console.log(`총 ${Object.keys(TLDR).length}개 슬러그에 tldr 작성.`);
