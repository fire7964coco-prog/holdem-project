"use client";

// `/ja/glossary` 클라이언트 래퍼 — 본체 = components/glossary/glossary-tool.tsx · 사전 = ./dict.ts.
// 사전을 서버 props로 넘기지 않는 이유: 46개 정의가 flight에 한 번 더 실린다(EN과 같은 구조).
import GlossaryTool from "@/components/glossary/glossary-tool";
import { GLOSSARY_DICT_JA } from "./dict";

export default function Glossary() {
  return <GlossaryTool dict={GLOSSARY_DICT_JA} />;
}
