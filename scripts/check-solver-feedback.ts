/**
 * 솔버 후기창 게이트 (2026-10-04 · docs/solver-review-design.md §10-2)
 *
 *   npm run check:solver-feedback               — 코드·SQL·14랜딩 정합
 *   npm run check:solver-feedback -- --build    — + 빌드 산출물(14개 solver.html · 빌드 키)
 *   npm run check:solver-feedback:selftest      — 검사기 자체 검증(일부러 틀린 입력을 잡는가)
 *
 * 검사 항목
 *  ① 링크 규칙 — lib/solver-feedback-config.ts = lib/participation-config.ts = supabase/solver-reviews.sql(본문·아쉬운 점 2곳)
 *  ② 숨김 사유 3값 — 설정 = SQL(후기·프로필 이미지 2곳) = 관리자 화면 버튼
 *  ③ 로케일 14값 — 설정 = SQL = 랜딩 폴더 = 문구 사전
 *  ④ 14개 랜딩 — page.tsx 가 자기 로케일로 블록을 넣고, solver-client 가 FAQ «바로 위»에 슬롯을 둔다
 *  ⑤ 문구 사전 — 14언어 키 집합 동일 · 오류 코드 전부 번역
 *  ⑥ 빈 상태 — 요약 문턱 3 · 키/테이블 없을 때 표지(data-solver-reviews="unavailable")
 *  ⑦ 스키마 부재 — Review·AggregateRating 을 내보내지 않는다(설계 §5-2)
 *  ⑧ 캐릭터 이미지 — AVATAR_CHARACTERS 전부 webp 존재
 *  ⑩ 코드 2 공유 링크 — 형식 검사(명세 표본 통과·불량 거부) · SQL payload 상한 = 코드 · /s/<id> noindex · 문구 14언어 · 솔버 코드 이식 흔적 없음
 *  ⑨ (--build) 14개 solver.html 존재 · 블록 표지 · 빌드 키 없음(no-key) = 🔴 · 테이블 없음(no-table) = 🟠
 */
import fs from "node:fs";
import path from "node:path";
import {
  AVATAR_CHARACTERS, DEVICES, FEEDBACK_KINDS, HIDDEN_REASONS, LINK_PATTERN as LINK_SF, MIN_REVIEWS_FOR_SUMMARY,
  SOLVER_FEEDBACK_LOCALES, avatarCharacterSrc, nicknameProblem, solverLandingPath,
} from "../lib/solver-feedback-config";
import { LINK_PATTERN as LINK_PC } from "../lib/participation-config";
import { SOLVER_REVIEWS_I18N } from "../lib/solver-reviews-i18n";
import { SPOT_PAYLOAD_MAX, formatSpotAmount, parseSpotPayload, spotShareId } from "../lib/spot-share";
import { SPOT_SHARE_I18N, spotShareLocale } from "../lib/spot-share-i18n";

type Finding = { level: "red" | "orange"; msg: string };

const read = (p: string) => fs.readFileSync(p, "utf8");
const jsToPg = (re: RegExp) => re.source.replace(/\\\//g, "/");
const setEq = (a: readonly string[], b: readonly string[]) => a.length === b.length && [...a].sort().join("|") === [...b].sort().join("|");
const sqlList = (sql: string, re: RegExp): string[][] =>
  [...sql.matchAll(re)].map((m) => [...m[1].matchAll(/'([^']+)'/g)].map((x) => x[1]));

/** 순수 검사 — selftest 가 틀린 입력을 넣어 본다 */
export function checkSources(src: {
  sql: string; linkSf: string; linkPc: string; adminTsx: string; locales: readonly string[];
  reasons: readonly string[]; dictKeys: Record<string, string[]>; errorCodes: string[];
  pages: Record<string, string>; clients: Record<string, string>; schemaTexts: Record<string, string>;
}): Finding[] {
  const out: Finding[] = [];
  const red = (msg: string) => out.push({ level: "red", msg });

  // ①
  if (src.linkSf !== src.linkPc) red(`① 링크 규칙: solver-feedback-config ≠ participation-config\n   ${src.linkSf}\n   ${src.linkPc}`);
  const sqlLinks = [...src.sql.matchAll(/!~\*\s*'([^']+)'/g)].map((m) => m[1]);
  if (sqlLinks.length < 2) red(`① 링크 규칙: SQL 에 링크 거부 제약이 ${sqlLinks.length}곳(본문·아쉬운 점 2곳이어야)`);
  for (const s of sqlLinks) if (s !== src.linkSf) red(`① 링크 규칙: SQL ≠ 코드\n   SQL  ${s}\n   code ${src.linkSf}`);

  // ②
  const reasonLists = sqlList(src.sql, /hidden_reason\s+in\s*\(([^)]*)\)/g);
  if (reasonLists.length < 2) red(`② 숨김 사유: SQL check 가 ${reasonLists.length}곳(후기·프로필 이미지 2곳이어야)`);
  for (const l of reasonLists) if (!setEq(l, src.reasons)) red(`② 숨김 사유: SQL [${l}] ≠ 코드 [${src.reasons}]`);
  if (src.reasons.length !== 3) red(`② 숨김 사유는 3개여야 한다(지금 ${src.reasons.length})`);
  const adminVals = [...(src.adminTsx.match(/const REASONS[^=]*=\s*\[([\s\S]*?)\];/)?.[1] ?? "").matchAll(/value:\s*"([^"]+)"/g)].map((m) => m[1]);
  if (!setEq(adminVals, src.reasons)) red(`② 숨김 사유: 관리자 버튼 [${adminVals}] ≠ 코드 [${src.reasons}]`);
  if (/delete\(\)/.test(src.adminTsx)) red("② 관리자 화면에 삭제 호출이 있다 — 숨김만 허용");

  // ③
  // create table 의 check + 2-a) 재적용 alter — 둘 다 코드와 같아야 한다
  const sqlLocaleLists = sqlList(src.sql, /locale\s+in\s*\(([^)]*)\)/g);
  if (sqlLocaleLists.length === 0) red("③ 로케일: SQL check 목록을 못 찾았다");
  for (const sqlLocales of sqlLocaleLists) {
    if (!setEq(sqlLocales, src.locales)) red(`③ 로케일: SQL [${sqlLocales}] ≠ 코드 [${src.locales}]`);
  }
  if (src.locales.length !== 15) red(`③ 로케일은 15개여야 한다(지금 ${src.locales.length})`);
  if (!setEq(Object.keys(src.pages), src.locales)) red(`③ 로케일: 랜딩 폴더 [${Object.keys(src.pages)}] ≠ 코드 [${src.locales}]`);
  if (!setEq(Object.keys(src.dictKeys), src.locales)) red(`③ 로케일: 문구 사전 [${Object.keys(src.dictKeys)}] ≠ 코드`);

  // ④
  for (const [loc, page] of Object.entries(src.pages)) {
    const m = page.match(/<SolverReviews locale="([^"]+)" \/>/g) ?? [];
    if (m.length !== 1) red(`④ ${loc} page.tsx: <SolverReviews> ${m.length}개(1개여야)`);
    else if (!m[0].includes(`"${loc}"`)) red(`④ ${loc} page.tsx: 다른 로케일을 넣었다 ${m[0]}`);
    const client = src.clients[loc] ?? "";
    const slot = client.indexOf("{reviews}");
    const faq = client.search(/\{SOLVER_FAQ\w*\.map\(/);
    if (slot < 0) red(`④ ${loc} solver-client: {reviews} 슬롯 없음`);
    else if (faq < 0 || slot > faq) red(`④ ${loc} solver-client: 슬롯이 FAQ 위가 아니다`);
    else {
      const between = client.slice(slot, faq);
      if ((between.match(/<section/g) ?? []).length !== 1) red(`④ ${loc} solver-client: 슬롯과 FAQ 사이에 다른 섹션이 있다(«바로 위»가 아님)`);
    }
  }

  // ⑤
  const base = src.dictKeys.ko ?? [];
  for (const [loc, keys] of Object.entries(src.dictKeys)) {
    const miss = base.filter((k) => !keys.includes(k));
    const extra = keys.filter((k) => !base.includes(k));
    if (miss.length || extra.length) red(`⑤ 사전 ${loc}: 빠짐 [${miss}] 남음 [${extra}]`);
    const errMiss = src.errorCodes.filter((c) => !keys.includes(`errors.${c}`));
    if (errMiss.length) red(`⑤ 사전 ${loc}: 오류 코드 번역 없음 [${errMiss}]`);
  }

  // ⑦
  for (const [file, text] of Object.entries(src.schemaTexts)) {
    if (/["']@type["']\s*:\s*["'](Review|AggregateRating)["']|aggregateRating\s*:/.test(text)) red(`⑦ ${file}: Review·AggregateRating 스키마가 있다(설계 §5-2 금지)`);
  }
  return out;
}

function dictKeysOf(d: any): string[] {
  const keys: string[] = [];
  for (const [k, v] of Object.entries(d)) {
    if (v && typeof v === "object") for (const k2 of Object.keys(v as object)) keys.push(`${k}.${k2}`);
    else keys.push(k);
  }
  return keys;
}

function loadSources() {
  const pages: Record<string, string> = {};
  const clients: Record<string, string> = {};
  const schemaTexts: Record<string, string> = {};
  const dirs = fs.readdirSync("app", { withFileTypes: true }).filter((d) => d.isDirectory());
  const landing: [string, string][] = [["ko", "app/solver"]];
  for (const d of dirs) if (fs.existsSync(`app/${d.name}/solver/page.tsx`)) landing.push([d.name, `app/${d.name}/solver`]);
  for (const [loc, dir] of landing) {
    pages[loc] = read(`${dir}/page.tsx`);
    clients[loc] = read(`${dir}/solver-client.tsx`);
    schemaTexts[`${dir}/page.tsx`] = pages[loc];
  }
  for (const f of fs.readdirSync("components/solver-reviews")) schemaTexts[`components/solver-reviews/${f}`] = read(`components/solver-reviews/${f}`);
  const server = read("lib/solver-feedback-server.ts");
  const union = server.match(/export type FeedbackError =([\s\S]*?);/)?.[1] ?? "";
  return {
    sql: read("supabase/solver-reviews.sql"),
    linkSf: jsToPg(LINK_SF),
    linkPc: jsToPg(LINK_PC),
    adminTsx: read("app/admin/solver-feedback-admin.tsx"),
    locales: SOLVER_FEEDBACK_LOCALES,
    reasons: HIDDEN_REASONS,
    dictKeys: Object.fromEntries(Object.entries(SOLVER_REVIEWS_I18N).map(([k, v]) => [k, dictKeysOf(v)])),
    errorCodes: [...union.matchAll(/"([a-z_]+)"/g)].map((m) => m[1]),
    pages, clients, schemaTexts,
  };
}

function extraChecks(): Finding[] {
  const out: Finding[] = [];
  const red = (msg: string) => out.push({ level: "red", msg });
  const sql = read("supabase/solver-reviews.sql");
  const kinds = sqlList(sql, /kind\s+in\s*\(([^)]*)\)/g)[0] ?? [];
  if (!setEq(kinds, FEEDBACK_KINDS)) red(`종류: SQL [${kinds}] ≠ 코드 [${FEEDBACK_KINDS}]`);
  const devices = sqlList(sql, /device\s+in\s*\(([^)]*)\)/g)[0] ?? [];
  if (!setEq(devices, DEVICES)) red(`기기: SQL [${devices}] ≠ 코드 [${DEVICES}]`);
  // ⑥ 빈 상태
  if (MIN_REVIEWS_FOR_SUMMARY !== 3) red(`⑥ 요약 문턱 = ${MIN_REVIEWS_FOR_SUMMARY} (설계 §2-3 = 3)`);
  const comp = read("components/solver-reviews/solver-reviews.tsx");
  if (!/data-solver-reviews="unavailable"/.test(comp)) red("⑥ 키·테이블 없음 표지(data-solver-reviews=\"unavailable\")가 블록에 없다");
  if (!/firstReview/.test(read("components/solver-reviews/solver-reviews-client.tsx"))) red("⑥ 후기 0 상태 «첫 후기» 안내가 없다");
  // ⑧
  for (const id of AVATAR_CHARACTERS) if (!fs.existsSync(path.join("public", avatarCharacterSrc(id)))) red(`⑧ 캐릭터 이미지 없음: ${id}`);
  // 사칭 금지어 · 경로 매핑 표본
  if (nicknameProblem("홀덤마스터 운영자") !== "impersonation") red("닉네임: «홀덤마스터 운영자»를 막지 못한다");
  if (nicknameProblem("Admin_01") !== "impersonation") red("닉네임: «Admin_01»을 막지 못한다");
  if (nicknameProblem("Rasmi") !== null) red("닉네임: 인명 «Rasmi»를 막았다(오탐)");
  if (solverLandingPath("ko") !== "/solver" || solverLandingPath("zh-hant") !== "/zh-hant/solver") red("경로 매핑이 틀렸다");
  return out;
}

/** ⑩ 코드 2 — 공유 링크(명세 = 공유링크_형식명세_2026-10-04.md) */
function spotShareChecks(): Finding[] {
  const out: Finding[] = [];
  const red = (msg: string) => out.push({ level: "red", msg });
  const enc = (o: unknown) => Buffer.from(JSON.stringify(o), "utf8").toString("base64url");
  const good = { v: 3, o: "AA,KK", i: "QQ-22", b: "Ks 7d 2c", sp: 55, es: 975, u: 10, rp: 0, rc: 0, d: false, bt: [], th: [] };
  const r = parseSpotPayload(enc(good));
  if (!r.ok || r.meta.board.join(" ") !== "Ks 7d 2c") red("⑩ 명세 표본(v3 · Ks 7d 2c)을 거부했다");
  else if (formatSpotAmount(r.meta.pot, r.meta.unit) !== "5.5bb") red("⑩ u=10 팟 55 ≠ 5.5bb");
  const lower = parseSpotPayload(enc({ ...good, b: "as kd 2c xx" }));
  if (!lower.ok || lower.meta.board.join(" ") !== "As Kd 2c") red("⑩ 소문자 랭크·틀린 조각 버리기(명세 §3-4)가 틀렸다");
  const bad: [string, unknown][] = [
    ["v4", enc({ ...good, v: 4 })], ["o 빈 값", enc({ ...good, o: "" })], ["보드 2장", enc({ ...good, b: "Ks 7d" })],
    ["무늬 대문자", enc({ ...good, b: "KS 7D 2C" })], ["base64 패딩·+", enc(good) + "=="], ["배열 JSON", enc([1])],
    ["상한 초과", "A".repeat(SPOT_PAYLOAD_MAX + 1)], ["문자열 아님", 123],
  ];
  for (const [name, p] of bad) if (parseSpotPayload(p).ok) red(`⑩ 불량 payload «${name}»를 받았다`);
  if (spotShareId("x") !== spotShareId("x") || !/^[A-Za-z0-9_-]{10}$/.test(spotShareId("x"))) red("⑩ id 가 결정적 10자가 아니다");
  const sql = read("supabase/solver-reviews.sql");
  const lim = /spot_shares_payload_len check \(char_length\(payload\) <= (\d+)\)/.exec(sql);
  if (!lim || Number(lim[1]) !== SPOT_PAYLOAD_MAX) red(`⑩ SQL payload 상한 ${lim?.[1]} ≠ 코드 ${SPOT_PAYLOAD_MAX}`);
  const page = read("app/s/[id]/page.tsx");
  if (!/robots\s*=\s*\{\s*index:\s*false/.test(page)) red("⑩ /s/<id> 가 noindex 가 아니다");
  for (const loc of SOLVER_FEEDBACK_LOCALES) if (!SPOT_SHARE_I18N[loc]) red(`⑩ /s 문구 사전에 ${loc} 없음`);
  if (spotShareLocale("zh-TW,zh;q=0.9") !== "zh-hant" || spotShareLocale("ru-RU") !== "en" || spotShareLocale("de-DE,de;q=0.9") !== "de") red("⑩ Accept-Language 판정이 틀렸다");
  for (const f of ["lib/spot-share.ts", "app/api/spot-share/route.ts", "app/s/[id]/page.tsx"]) {
    if (/applySpotFromUrl|wasm-postflop|from ["'].*solver\/src/.test(read(f).replace(/^\s*\*.*$/gm, ""))) red(`⑩ ${f}: 솔버 코드 참조 흔적(AGPL 이식 금지)`);
  }
  return out;
}

function buildChecks(): Finding[] {
  const out: Finding[] = [];
  const base = ".next/server/app";
  if (!fs.existsSync(base)) return [{ level: "red", msg: "⑨ .next/server/app 없음 — 빌드 먼저" }];
  for (const loc of SOLVER_FEEDBACK_LOCALES) {
    const f = path.join(base, `${solverLandingPath(loc).slice(1)}.html`);
    if (!fs.existsSync(f)) { out.push({ level: "red", msg: `⑨ ${f} 없음 — 랜딩이 동적 라우트가 됐다(쿠키 읽기?)` }); continue; }
    const html = read(f);
    const m = html.match(/data-solver-reviews="([a-z]+)"(?:[^>]*data-reason="([a-z-]+)")?/);
    if (!m) out.push({ level: "red", msg: `⑨ ${f}: 후기 블록 표지 없음` });
    else if (m[1] === "unavailable" && m[2] === "no-key") out.push({ level: "red", msg: `⑨ ${f}: 빌드 env 에 SUPABASE_SERVICE_ROLE_KEY 없음 — 블록이 빈 채로 굳는다` });
    else if (m[1] === "unavailable") out.push({ level: "orange", msg: `⑨ ${f}: 테이블을 읽지 못함(${m[2]}) — SQL 실행 전이면 정상` });
    if (/"@type":"(Review|AggregateRating)"|"aggregateRating"/.test(html)) out.push({ level: "red", msg: `⑦ ${f}: Review·AggregateRating 스키마가 산출물에 있다` });
  }
  return out;
}

function report(findings: Finding[], label: string): number {
  const reds = findings.filter((f) => f.level === "red");
  const oranges = findings.filter((f) => f.level === "orange");
  for (const f of findings) console.log(`${f.level === "red" ? "🔴" : "🟠"} ${f.msg}`);
  console.log(`\n${label}: 🔴 ${reds.length} · 🟠 ${oranges.length}`);
  return reds.length ? 1 : 0;
}

function selftest(): number {
  const good = loadSources();
  const cases: [string, (s: ReturnType<typeof loadSources>) => void][] = [
    ["SQL 링크 규칙 한 글자 다름", (s) => { s.sql = s.sql.replace("shop|top", "shop|tops"); }],
    ["참여 장치 링크 규칙과 다름", (s) => { s.linkPc = s.linkPc.replace("xyz", "xy"); }],
    ["숨김 사유 4번째 값(SQL)", (s) => { s.sql = s.sql.replace("hidden_reason in ('link','abuse','ad')", "hidden_reason in ('link','abuse','ad','spam')"); }],
    ["관리자 버튼에 다른 사유", (s) => { s.adminTsx = s.adminTsx.replace('value: "ad"', 'value: "spam"'); }],
    ["SQL 로케일 하나 빠짐", (s) => { s.sql = s.sql.replace(",'ru'))", "))"); }],
    ["SQL 재적용 블록만 로케일 빠짐", (s) => { const i = s.sql.lastIndexOf(",'ru'))"); s.sql = s.sql.slice(0, i) + "))" + s.sql.slice(i + 7); }],
    ["랜딩 하나가 다른 로케일", (s) => { s.pages.ja = s.pages.ja.replace('<SolverReviews locale="ja"', '<SolverReviews locale="en"'); }],
    ["슬롯이 FAQ 아래", (s) => { s.clients.en = s.clients.en.replace("{reviews}", "") + "\n{reviews}"; }],
    ["사전 키 하나 빠짐", (s) => { s.dictKeys.fr = s.dictKeys.fr.filter((k) => k !== "helpful"); }],
    ["오류 코드 번역 빠짐", (s) => { s.dictKeys.hi = s.dictKeys.hi.filter((k) => k !== "errors.rate"); }],
    ["AggregateRating 스키마", (s) => { s.schemaTexts["x"] = '{ "@type": "AggregateRating", ratingValue: 4.6 }'; }],
  ];
  let fail = 0;
  const base = checkSources(good).filter((f) => f.level === "red");
  if (base.length) { console.log("🔴 selftest: 정상 입력에서 이미 🔴", base); return 1; }
  for (const [name, mutate] of cases) {
    const s = JSON.parse(JSON.stringify(good));
    mutate(s);
    const caught = checkSources(s).some((f) => f.level === "red");
    console.log(`${caught ? "✅" : "❌"} ${name}`);
    if (!caught) fail++;
  }
  console.log(`\nselftest ${cases.length - fail}/${cases.length}`);
  return fail ? 1 : 0;
}

const args = process.argv.slice(2);
if (args.includes("--selftest")) process.exit(selftest());
const findings = [...checkSources(loadSources()), ...extraChecks(), ...(args.includes("--build") ? buildChecks() : [])];
process.exit(report(findings, "check:solver-feedback"));
