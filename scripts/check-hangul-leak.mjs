#!/usr/bin/env node
/**
 * check-hangul-leak — 비한국어 포스트(`lib/posts-<loc>/`)의 **본문·메타 문자열 안에 섞인 한글**을 잡는다.
 *
 * 왜: 2026-09-07 ja 경화 회차 1이 `무料`(한글 «무» + 한자 «料») 오타를 냈는데 어느 게이트도 못 잡았다
 *   (`check:cjk`는 개행만 · `check:meta-lang`은 렌더된 메타만 · `audit:hard`는 §13·형식만). ja 레인 헤드 요청 §5-1.
 *
 * 무엇을 보나: `content` 템플릿 리터럴 + title/seoTitle/desc/tldr/imageAlt 문자열. **주석은 안 본다**(레포 주석은 한국어가 정상).
 * 허용(오탐 방지 · 실측 근거 = korea-poker-marathon·apt-incheon 2편 14자리):
 *   ① 괄호 안 한글 — `Chuncheon (춘천)` · `清溪川（청계천）` 식 원어 병기
 *   ② 굵게 안 한글 — `**참가신청**` 식 한국 사이트 UI 라벨 축어
 *   그 밖의 한글은 전부 🔴 (오타·미번역 잔존).
 *
 * 사용: node scripts/check-hangul-leak.mjs [--locale=ja] [--selftest]
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const HANGUL = /[가-힣]/;
const FIELD_RE = /^\s*(?:title|seoTitle|desc|tldr|imageAlt):\s*"([^"\n]*)"/gm;

export function extractStrings(src) {
  const m = src.match(/content:\s*`([\s\S]*?)`\s*(?:\.trim\(\))?\s*,?\s*\n\}/);
  const body = m ? m[1] : "";
  const meta = [...src.matchAll(FIELD_RE)].map((x) => x[1]);
  return { body, meta };
}

export function stripAllowed(line) {
  return line
    .replace(/\([^()\n]*\)/g, "")
    .replace(/（[^（）\n]*）/g, "")
    .replace(/\*\*[^*\n]+\*\*/g, "");
}

export function findLeaks(src) {
  const { body, meta } = extractStrings(src);
  const leaks = [];
  body.split(/\r?\n/).forEach((ln, i) => { if (HANGUL.test(stripAllowed(ln))) leaks.push({ where: "content:" + (i + 1), text: ln.trim().slice(0, 100) }); });
  meta.forEach((s) => { if (HANGUL.test(stripAllowed(s))) leaks.push({ where: "meta", text: s.slice(0, 100) }); });
  return leaks;
}

function selftest() {
  const wrap = (c, t = "x") => 'export const POST = {\n  title: "' + t + '",\n  content: `\n' + c + '\n`.trim(),\n};\n';
  const cases = [
    ["본문 한글+한자 오타(무料) → 🔴", wrap("参加費は무料です。"), 1],
    ["괄호 원어 병기 (춘천) → 통과", wrap("Chuncheon (춘천) is a small city."), 0],
    ["전각 괄호 （청계천） → 통과", wrap("清溪川（청계천）へ下りる。"), 0],
    ["굵게 UI 라벨 **참가신청** → 통과", wrap("Click **참가신청** → **신청하기**"), 0],
    ["// 주석 안 한글 → 통과(주석은 안 본다)", "// 한국어 주석\n" + wrap("clean body"), 0],
    ["title 필드 한글 → 🔴", wrap("clean body", "포커 핸드"), 1],
    ["괄호 밖에 한글 남음 → 🔴", wrap("Chuncheon (춘천) 도시 is small."), 1],
  ];
  let pass = 0;
  for (const [name, src, expect] of cases) {
    const got = findLeaks(src).length;
    const ok = (expect === 0 ? got === 0 : got >= 1);
    if (ok) pass++;
    console.log((ok ? "✅" : "❌") + " " + name + (ok ? "" : " (got " + got + ")"));
  }
  console.log("셀프테스트 " + pass + "/" + cases.length);
  process.exit(pass === cases.length ? 0 : 1);
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--selftest")) return selftest();
  const locArg = args.find((a) => a.startsWith("--locale="));
  const only = locArg ? locArg.split("=")[1] : null;
  const libDir = join(process.cwd(), "lib");
  const dirs = readdirSync(libDir).filter((d) => d.startsWith("posts-") && statSync(join(libDir, d)).isDirectory()).filter((d) => !only || d === "posts-" + only);
  let files = 0, red = 0;
  const report = [];
  for (const d of dirs) {
    for (const f of readdirSync(join(libDir, d))) {
      if (!f.endsWith(".ts") || f === "index.ts") continue;
      files++;
      const leaks = findLeaks(readFileSync(join(libDir, d, f), "utf8"));
      if (leaks.length) { red += leaks.length; report.push({ file: d + "/" + f, leaks }); }
    }
  }
  console.log("══════ 한글 누출 게이트 (비KO 본문·메타 · 주석 제외 · 괄호/굵게 병기 허용) ══════");
  console.log("검사 " + dirs.length + "로케일 · " + files + "파일");
  for (const r of report) { console.log("🔴 " + r.file); r.leaks.slice(0, 5).forEach((l) => console.log("     " + l.where + " · " + l.text)); }
  console.log(red ? "🔴 " + red + "건 (" + report.length + "파일)" : "✅ 🔴 0건 — 비KO 본문·메타에 한글 없음(괄호·굵게 병기 제외)");
  process.exit(red ? 1 : 0);
}

main();
