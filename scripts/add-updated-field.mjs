// scripts/add-updated-field.mjs
//
// 모든 블로그 포스트에 `updated: "2026-05-06"` 필드 추가.
// `date: "..."` 다음 줄에 동일한 들여쓰기로 삽입한다.
// 이미 `updated` 가 있는 항목은 갱신.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TODAY = "2026-05-06";

function processFile(filePath) {
  let src = fs.readFileSync(filePath, "utf8");
  const original = src;

  // 패턴: `date: "YYYY-MM-DD",` 다음 줄에 updated 가 없으면 삽입
  // 들여쓰기는 date 라인의 들여쓰기를 그대로 사용
  src = src.replace(
    /(^([ \t]*)date:\s*"[^"]+",\r?\n)((?!\2updated:)[\s\S])/gm,
    (_, dateLine, indent, nextChar) =>
      `${dateLine}${indent}updated: "${TODAY}",\n${nextChar}`,
  );

  // 이미 updated 가 있는 항목은 값만 갱신
  src = src.replace(
    /(^[ \t]*updated:\s*)"[^"]+"(,)/gm,
    (_, prefix, comma) => `${prefix}"${TODAY}"${comma}`,
  );

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
console.log(`\n${totalChanged}/${targets.length} 파일 수정 완료 (updated: "${TODAY}")`);
