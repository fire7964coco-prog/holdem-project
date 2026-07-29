import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import QuizEn from "./quiz-client";

export const metadata: Metadata = {
  // absolute — 안 쓰면 루트 layout의 title.template("%s | 홀덤마스터")이 붙어
  //            영어 페이지 검색 결과에 한국어 브랜드명이 노출된다.
  title: { absolute: "Poker Hand Quiz — Spot the Best Hand from 7 Cards | HoldemMaster" },
  description:
    "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-ranking skills — share your score.",
  alternates: { canonical: `${SITE}/en/quiz` },
  // twitter:*를 안 주면 루트 레이아웃의 한국어가 그대로 나간다
  twitter: {
    card: "summary_large_image",
    title: "Poker Hand Quiz — Spot the Best Hand from 7 Cards | HoldemMaster",
    description: "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-ranking skills — share your score.",
  },
  openGraph: {
    title: "Poker Hand Quiz — HoldemMaster",
    description: "Spot the best 5-card hand from 7. Test your hand-reading in 10 questions.",
    url: `${SITE}/en/quiz`,
    siteName: "HoldemMaster",
    locale: "en_US",
    type: "website",
  },
};

export default function Page() {
  return <QuizEn />;
}
