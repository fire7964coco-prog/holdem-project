import type { Metadata } from "next";
import RulesTexasHoldemClient from "./rules-texas-holdem-client";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Page() {
  return <RulesTexasHoldemClient />;
}
