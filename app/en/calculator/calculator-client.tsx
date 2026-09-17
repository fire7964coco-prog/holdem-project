"use client";

// Thin EN wrapper — the tool itself lives in components/calculator/calculator-tool.tsx and is
// driven by a per-locale dictionary (components/calculator/dict.ts). Other locales reuse the
// same component with their own CalcDict + FAQ.
import CalculatorTool from "@/components/calculator/calculator-tool";
import { CALC_DICT_EN } from "@/components/calculator/dict";
import { CALCULATOR_FAQ_EN } from "./faq";

export default function CalculatorClientEn() {
  return <CalculatorTool locale="en" dict={CALC_DICT_EN} faq={CALCULATOR_FAQ_EN} />;
}
