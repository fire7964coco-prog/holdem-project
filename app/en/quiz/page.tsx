import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import QuizEn from "./quiz-client";

export const metadata: Metadata = {
  title: "Poker Hand Quiz — Spot the Best Hand from 7 Cards",
  description:
    "Free poker hand quiz. From 7 cards, pick the best 5-card hand. 10 questions to test your Texas Hold'em hand-reading — share your score.",
  alternates: { canonical: `${SITE}/en/quiz` },
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
