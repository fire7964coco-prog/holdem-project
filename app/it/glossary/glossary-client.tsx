"use client";
import GlossaryTool from "@/components/glossary/glossary-tool";
import { GLOSSARY_DICT_IT } from "./dict";

export default function Glossary() {
  return <GlossaryTool dict={GLOSSARY_DICT_IT} />;
}
