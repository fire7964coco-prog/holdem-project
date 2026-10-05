"use client";

// ★2026-10-05 로케일 도구 확장 회차 2: 본체는 공용 components/glossary/glossary-tool.tsx 로 옮겼다.
//   EN 문구·용어 = components/glossary/dict.ts `GLOSSARY_DICT_EN`(용어 배열은 ./glossary-data.ts 그대로).
//   클라이언트 래퍼로 두는 이유: 사전을 서버 props로 넘기면 46개 정의가 flight에 한 번 더 실린다.
import GlossaryTool from "@/components/glossary/glossary-tool";
import { GLOSSARY_DICT_EN } from "@/components/glossary/dict";

export default function GlossaryEn() {
  return <GlossaryTool dict={GLOSSARY_DICT_EN} />;
}
