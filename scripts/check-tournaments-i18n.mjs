/**
 * 대회 보드 i18n 누출 게이트 — «로케일 보드에 한국어가 그대로 나가는 자리»를 잡는다.
 *
 * ★ 왜 만들었나 (2026-09-03 · M-084)
 *   `lib/tournaments.ts`의 값 필드는 `localizeField()`가 **사전에 없으면 원문을 그대로 통과**시킨다.
 *   설계상 그게 맞다(빈칸보다 낫다). 문제는 **새 행을 넣을 때 사전 등재를 잊으면 조용히 샌다**는 것.
 *   실제로 두 번 났다:
 *     - 09-03 `6a35cd19` — HPT 행 venue·dateNote가 en/zh-hant 보드에 한국어로 노출
 *     - 09-03 M-084  — `appt-korea` buyin `₩5만~₩1,000만`이 6로케일 전부 미등재.
 *                      그 대회는 9/3~14 «진행중»이라 보드 **상단**에 떠 있었다.
 *   🔴 두 번 다 «사람이 라이브를 보고» 찾았다. 그래서 기계로 내린다.
 *
 * 🔴 이 게이트가 «보는 것»과 «못 보는 것»을 분명히 한다:
 *   본다   = 보드에 렌더되는 값 필드(buyin · venue · dateNote)가 6로케일에서 한글을 남기는가
 *   못 본다 = 번역이 «맞는가»(뜻·표기). 그건 사람·렌즈 몫이다.
 *   note는 대상이 아니다 — `localizedNote`는 미등재 시 배지를 **아예 안 그린다**(한국어 폴백 금지가 설계).
 *   그 사실도 매 실행 계수해 출력한다(0건이 «검증»으로 오독되지 않게).
 *
 * 사용:
 *   node scripts/check-tournaments-i18n.mjs             # 검사(🔴 있으면 exit 1)
 *   node scripts/check-tournaments-i18n.mjs --selftest  # 게이트 자체 검증
 */
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const HANGUL = /[\uAC00-\uD7A3]/;
export const BOARD_LOCALES = ["en", "ja", "zh", "zh-hant", "es", "de"];
/** 보드에 실제로 렌더되는 값 필드. components/tournament-board.tsx 기준 — 늘리기 전에 그 파일을 봐라. */
export const RENDERED_FIELDS = ["buyin", "venue", "dateNote"];

/** 순수 함수 — 셀프테스트가 검증한다. localize(value, locale) 를 주입받는다. */
export function findLeaks(rows, localize, locales = BOARD_LOCALES, fields = RENDERED_FIELDS) {
  const leaks = [];
  let scanned = 0;
  for (const t of rows) {
    for (const f of fields) {
      const v = t[f];
      if (typeof v !== "string" || !v) continue;
      scanned++;
      if (!HANGUL.test(v)) continue;
      const missing = locales.filter((loc) => HANGUL.test(localize(v, loc)));
      if (missing.length) leaks.push({ id: t.id, field: f, value: v, missing });
    }
  }
  return { leaks, scanned };
}

function selftest() {
  const cases = [];
  const t = (name, ok) => cases.push({ name, ok: !!ok });
  const dict = { "한국어값": { en: "Korean value" } };
  const localize = (v, loc) => dict[v]?.[loc] ?? v;

  const a = findLeaks([{ id: "x", buyin: "한국어값" }], localize, ["en", "ja"]);
  t("사전에 있는 로케일은 안 잡고, 없는 로케일만 잡는다", a.leaks.length === 1 && a.leaks[0].missing.join() === "ja");

  const b = findLeaks([{ id: "x", buyin: "$1,000" }], localize, ["en", "ja"]);
  t("한글이 없는 값은 대상이 아니다", b.leaks.length === 0);

  const c = findLeaks([{ id: "x", venue: "한국어값", dateNote: "한국어값" }], localize, ["ja"]);
  t("여러 필드를 각각 센다", c.leaks.length === 2);

  const d = findLeaks([{ id: "x", buyin: "" }, { id: "y" }], localize, ["ja"]);
  t("빈 값·없는 필드는 건너뛴다", d.leaks.length === 0 && d.scanned === 0);

  const e = findLeaks([{ id: "x", note: "한국어값" }], localize, ["ja"]);
  t("note는 대상이 아니다(배지 미표시가 설계)", e.leaks.length === 0);

  const f = findLeaks([{ id: "x", buyin: "메인 ₩250만" }], (v) => v, ["en"]);
  t("사전이 통째로 비면 전건 잡는다", f.leaks.length === 1);

  const pass = cases.filter((c) => c.ok).length;
  for (const c of cases) console.log(`${c.ok ? "  ✓" : "  ✗"} ${c.name}`);
  console.log(`\n셀프테스트 ${pass}/${cases.length}`);
  process.exit(pass === cases.length ? 0 : 1);
}

/* 🔴 직접 실행일 때만 본문을 돈다 — 이 파일은 findLeaks 를 «가져다 쓰는» 회귀 테스트가 있다.
   가드가 없으면 import 하는 쪽이 본문과 process.exit 까지 같이 맞는다(2026-09-03에 실제로 겪었다). */
const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (isDirectRun && process.argv.includes("--selftest")) selftest();
if (isDirectRun) await main();

async function main() {

const { createJiti } = await import("jiti");
const jiti = createJiti(join(root, "scripts", "check-tournaments-i18n.mjs"));
const { TOURNAMENTS } = jiti("../lib/tournaments.ts");
const i18n = jiti("../lib/tournaments-i18n.ts");

const { leaks, scanned } = findLeaks(TOURNAMENTS, i18n.localizeField);

let noteHidden = 0;
let noteLeak = 0;
for (const t of TOURNAMENTS) {
  if (typeof t.note !== "string" || !t.note) continue;
  for (const loc of BOARD_LOCALES) {
    const out = i18n.localizedNote(t, loc);
    if (out === undefined) noteHidden++;
    else if (HANGUL.test(out)) {
      noteLeak++;
      console.log(`🔴 note 누출 ${t.id} [${loc}] ${out.slice(0, 70)}`);
    }
  }
}

console.log(`\n🌐 대회 보드 i18n 누출 검사 — ${TOURNAMENTS.length}행 · 값 필드 ${scanned}개 × ${BOARD_LOCALES.length}로케일\n`);
for (const l of leaks) {
  console.log(`🔴 ${l.id}  .${l.field} = ${JSON.stringify(l.value)}`);
  console.log(`     사전 미등재: ${l.missing.join(" · ")}`);
}
console.log("─".repeat(60));
console.log(`🔴 ${leaks.length + noteLeak}건 (값 필드 ${leaks.length} · note ${noteLeak})`);
console.log(`검사 대상 필드: ${RENDERED_FIELDS.join(" · ")} — 늘리려면 components/tournament-board.tsx 를 먼저 봐라`);
console.log(`note 미등재 ${noteHidden}건은 «배지 미표시»라 누출이 아니다(한국어 폴백 금지가 설계)`);
console.log(`⚠ 이 게이트는 «한글이 남는가»만 본다 — 번역이 «맞는가»는 미검사다`);

  process.exit(leaks.length + noteLeak ? 1 : 0);
}
